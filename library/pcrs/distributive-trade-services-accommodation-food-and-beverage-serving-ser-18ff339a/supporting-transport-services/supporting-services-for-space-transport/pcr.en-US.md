---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.supporting-services-for-space-transport
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Supporting services for space transport

## 1. Scope and Applicability

Apply to specialized support demonstrably serving a defined space-transport operation: launch/reentry-site ground processing and GSE, range operational support, and transport-mission control/tracking. Each dataset must identify the actual supported transport phase, interfaces, location and one accepted support task or bounded service block; a contract may include one family or a specified combination. Ground handling, range and control are conditional routes rather than equivalent generic launches. [un-cpc3-67640]

Exclude whole rocket/spacecraft launch flight, flight propulsion, vehicle/payload manufacture and original payload content; ordinary freight, standalone scientific/industrial testing or manufacturing; unrelated aircraft-range activity; and end-user satellite communications, GPS/navigation products or payload science operations without a demonstrated transport-support function. Pure delivery of flight propellant is not consumption by this service. Include actual necessary support handling/losses only at explicitly allocated interfaces; avoid double counting customer vehicle inventories.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.supporting-services-for-space-transport |
| classification_refs | CPC 3.0 67640 |
| covered_products | Specified specialized ground, range and transport control/tracking support tasks |
| excluded_products | Transport flight and payload functions; unrelated communication/navigation; independent manufacture/testing |
| representative_product | Space-transport support task |
| production_route | Required reconciliation plus actual conditional ground/range/control routes |
| market_state | Accepted configured support task or bounded service block with documented completion interfaces |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the declared specialized support function for an identified space-transport operation |
| How much | One completed accepted task/block of specified function, facility/link capacity, campaign extent and exact interval |
| How well | Document achieved readiness, coverage, continuity, data/command quality, safety interfaces and acceptance criteria appropriate to the selected function |
| How long or cycle | Explicit preparation/start through accepted handover/end, including attributable standby, rehearsals, scrubs and rework |
| reference_flow_link | `support_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Space-transport support task |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | mission/campaign and transport phase; support family and precise functions; site and ground/vehicle/customer interfaces; equipment/link/facility configuration and capacity; actual duration/start/end; service extent and acceptance/achieved quality; rehearsal/scrub/retry/standby allocation; gas species/state/purity/pressure and custody transfer/recovery; operator/customer/supplier responsibility; actual metered utilities; range/transport versus unrelated users; asset lifecycle denominator; specific waste/release compartments |

item is the singular alias of verified Item(s), counting one specified accepted support task/block. It is not a launch, payload kilogram, antenna-hour, data gigabyte or flight; different family/function/extent/interval events cannot be pooled by their count alone. Any alternative intensity readout needs measured matched activity and a documented physical conversion, without claiming functional equivalence.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `support_task` | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Use one cp_task accepted configured event; maintain exact functional extent and service interval. Do not replace by mission success, fee, payload mass or number of launches. |
| `gas_mass` | nitrogen; helium; air | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use measured species/mixture mass. Standard-volume conversion requires actual stated reference conditions, composition and evidenced density; no generic bottle/pressure/flow conversion. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified transport campaign phase and support installation initially available in its recorded condition |
| starting_condition_role | foreground_start |
| product_classification_scope | Specialized support to actual space transportation, with ground/range/control family qualifiers |
| recursive_input_rule | Same-category subcontracted support enters as a scoped supplier input; use either its complete inventory or an explicitly replacing disaggregation, never both |
| upstream_dataset_requirement | Actual utilities, individual gases/materials, support facilities/equipment lifecycle and specific waste management; external network/relay support only for its actual transport share |
| disclosure | Exact campaign/phase/function/interval and handovers; ground consumption versus flight custody; supplier overlap; life/utilization and release evidence |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `boundary_support` | Select the actual ground/range/control processes needed by the accepted transport-support task; keep unrelated science, aviation, production and general communication activities outside or allocate their shared scope explicitly. | un-cpc3-67640; nasa-wallops |
| `boundary_custody` | Record customer vehicle/payload and flight propellants as custody/interface records, not newly produced support output. Separate delivered flight material, actual ground purge/vent, return, recovery, stock change and physical loss. Allocate upstream propellant supply once at the agreed customer interface; handling energy and losses must not disappear or be duplicated. | nasa-gases |
| `boundary_increment` | Exclude rocket plume, ascent/reentry emissions, flight propellant combustion and vehicle manufacture from direct support. Ground engine/hot-fire testing requires a separately declared actual support purpose and exhaustive species/fuel inventory; no flight emission factor or default plume chemistry. |  |
| `boundary_lifecycle` | Include support-installation construction, GSE, instruments, computing, maintenance and retirement shares. Actual vacuum, cryogenic or gas-generation equipment requires both its supported lifecycle share and measured energy, unless those same burdens are already included in a purchased complete service; do not count both. Add every additional actual gas, reagent, refrigerant, water stream, waste and emission as an individual exchange; screen land, water, noise/ecological effects and remote deployment rather than treating this card list as exhaustive. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| ground | Ground processing and equipment support | conditional | Ground-processing function in declared task | foreground_production | per reference flow |
| range | Transport range operational support | conditional | Actual space-transport range support | foreground_production | per reference flow |
| control | Transport mission control and tracking support | conditional | Actual transport-control/tracking function | foreground_production | per reference flow |
| accept | Reconcile and accept support task | required | Every specified task/block | foreground_production | per reference flow |

### Process: Ground processing and equipment support (`ground`)

#### Inputs

##### Product flows

###### Low-voltage alternating current electricity (`ground_electricity`)

Actual processing, conditioning, pumping and GSE demand at this voltage; exclude vehicle flight power and supplier-covered consumption.

- Selected flow: Low-voltage alternating current electricity
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable measured amount per reference flow; cp_ground_meter.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ground_meter`
- Sources:

###### Gaseous nitrogen (`nitrogen`)

Conditional actual ground purging, valve actuation or conditioning gas; record delivery state, purity and pressure, upstream vaporization and whether gas crosses the vehicle handover.

- Selected flow: Gaseous nitrogen
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable measured amount per reference flow; cp_ground_gas.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ground_gas`
- Sources: `nasa-gases`

###### Gaseous helium (`helium`)

Conditional actual ground leak testing, purge or pressurization. Separate ground consumption from helium delivered for flight-system use and reconcile recovery.

- Selected flow: Gaseous helium
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable measured amount per reference flow; cp_ground_gas.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ground_gas`
- Sources: `nasa-gases`

###### Compressed breathing air (`air`)

Conditional supplied protective breathing air used in hazardous ground processing; record actual mixture/specification. Locally generated air needs its actual compressor inventory instead of duplicate purchased supply.

- Selected flow: Compressed breathing air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable measured amount per reference flow; cp_ground_gas.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ground_gas`
- Sources: `nasa-gases`

###### Process water (`water`)

Actual ground cooling, cleaning or deluge makeup within the declared support. Distinguish withdrawals, recirculation, collected effluent and evaporation; do not attribute rocket exhaust chemistry to water supply.

- Selected flow: Process water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable measured amount per reference flow; cp_ground_meter.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ground_meter`
- Sources:

###### Mineral hydraulic oil (`hydraulic_oil`)

Conditional ground equipment maintenance and actual replacement makeup; record grade and stock. Not flight-vehicle hydraulic charge.

- Selected flow: Mineral hydraulic oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable measured amount per reference flow; cp_ground_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ground_material`
- Sources:

###### Isopropanol (`isopropanol`)

Only actual documented ground-support cleaning with this substance; record purity, recovery, evaporation and spent-solvent fate. Do not assume universal solvent use.

- Selected flow: Isopropanol
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable measured amount per reference flow; cp_ground_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ground_material`
- Sources:

###### Ground nitrogen purge umbilical assembly (`umbilical`)

Actual installed ground assembly manufacturing/replacement/retirement share with supported utilization denominator; exclude vehicle-side hardware and duplicate complete facility scope.

- Selected flow: Ground nitrogen purge umbilical assembly
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Actual attributable measured amount per reference flow; cp_ground_asset.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ground_asset`
- Sources:

###### Ground water-deluge pump (`pump`)

Conditional actual installed pump lifecycle share; no assumed capacity or lifetime and no duplicate pump embedded in complete pad dataset.

- Selected flow: Ground water-deluge pump
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Actual attributable measured amount per reference flow; cp_ground_asset.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ground_asset`
- Sources:

###### Space-transport processing building (`building`)

Actual processing-facility construction and retirement share, including declared clean-room and utility component extent only once.

- Selected flow: Space-transport processing building
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Actual attributable measured amount per reference flow; cp_ground_asset.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ground_asset`
- Sources:

#### Outputs

##### Waste flows

###### Collected ground-processing wash wastewater (`ground_wastewater`)

Measure this segregated contaminated liquid and actual treatment destination; separate deluge runoff, sanitary effluent and chemical scrubber liquor if present as additional individual streams.

- Selected flow: Collected ground-processing wash wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable measured amount per reference flow; cp_ground_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ground_waste`
- Sources:

###### Spent mineral hydraulic oil (`spent_oil`)

Actual segregated ground-equipment maintenance oil transferred to treatment with stock and service records; not all purchased oil becomes waste immediately.

- Selected flow: Spent mineral hydraulic oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable measured amount per reference flow; cp_ground_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ground_waste`
- Sources:

###### Spent isopropanol cleaning solvent (`spent_solvent`)

Actual separate used solvent with measured composition and fate; distinguish recovered solvent and emitted isopropanol.

- Selected flow: Spent isopropanol cleaning solvent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable measured amount per reference flow; cp_ground_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ground_waste`
- Sources:

##### Elementary flows

###### Nitrogen, to air (`nitrogen_air`)

Actual ground-system nitrogen vent or release after measured transfer, recovery and stock reconciliation. Gas transferred to vehicle is not automatically a ground emission.

- Selected flow: Nitrogen, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable measured amount per reference flow; cp_ground_release.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ground_release`
- Sources:

###### Helium, to air (`helium_air`)

Actual ground-attributable helium release; preserve ground/vehicle interface and avoid assuming every supplied kilogram is vented locally.

- Selected flow: Helium, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable measured amount per reference flow; cp_ground_release.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ground_release`
- Sources:

###### Isopropanol, to air (`isopropanol_air`)

Actual measured or supported mass-balance cleaning release, with captured/recovered/waste quantities subtracted consistently.

- Selected flow: Isopropanol, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable measured amount per reference flow; cp_ground_release.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ground_release`
- Sources:

### Process: Transport range operational support (`range`)

#### Inputs

##### Product flows

###### Low-voltage alternating current electricity (`range_electricity`)

Actual range instruments, safety coordination, weather and surveillance infrastructure electricity at the stated voltage and task interval.

- Selected flow: Low-voltage alternating current electricity
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable measured amount per reference flow; cp_range_meter.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_range_meter`
- Sources: `nasa-wallops`

###### Diesel fuel (`diesel`)

Actual range mobile/backup generator or support vehicle fuel, with standby and deployment attribution; purchased generation electricity is an alternative for the same generation scope.

- Selected flow: Diesel fuel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable measured amount per reference flow; cp_range_meter.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_range_meter`
- Sources: `nasa-wallops`

###### Space-transport range tracking radar (`radar`)

Actual radar lifecycle share assigned to transport-support task, excluding unrelated aircraft/test-range and duplicate complete-station shares.

- Selected flow: Space-transport range tracking radar
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Actual attributable measured amount per reference flow; cp_range_asset.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_range_asset`
- Sources: `nasa-wallops`

#### Outputs

##### Elementary flows

###### Carbon dioxide, fossil, to air (`co2`)

Actual support-generator/vehicle combustion only using site fuel and applicable cited method; rocket propulsion and upstream electricity emissions remain separate.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable measured amount per reference flow; cp_range_combustion.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_range_combustion`
- Sources:

###### Nitrogen dioxide, to air (`no2`)

Only species-specific measured or applicable supported source estimate; total NOx is not automatically NO2 mass and no universal rocket factor applies.

- Selected flow: Nitrogen dioxide, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable measured amount per reference flow; cp_range_combustion.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_range_combustion`
- Sources:

### Process: Transport mission control and tracking support (`control`)

#### Inputs

##### Product flows

###### Low-voltage alternating current electricity (`control_electricity`)

Actual transport-mission control, telemetry processing, tracking link and attributable room cooling electricity; reconcile range-console and external network overlap.

- Selected flow: Low-voltage alternating current electricity
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable measured amount per reference flow; cp_control_meter.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_control_meter`
- Sources: `nasa-wallops`

###### Mission-control computer server (`server`)

Actual server manufacture/replacement/retirement share with supported lifetime workload; electricity is measured separately.

- Selected flow: Mission-control computer server
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Actual attributable measured amount per reference flow; cp_control_asset.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_control_asset`
- Sources:

###### Ground telemetry tracking antenna (`antenna`)

Actual ground antenna lifecycle share in transport support; distinguish its ground station from space-relay infrastructure and unrelated payload data services.

- Selected flow: Ground telemetry tracking antenna
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Actual attributable measured amount per reference flow; cp_control_asset.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_control_asset`
- Sources: `nasa-wallops`

#### Outputs

##### Waste flows

###### Discarded mission-control computer server (`discarded_server`)

Actual attributable discarded server mass and treatment; omit if retirement is already inside the adopted complete asset lifecycle dataset.

- Selected flow: Discarded mission-control computer server
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable measured amount per reference flow; cp_control_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_control_waste`
- Sources:

### Process: Reconcile and accept support task (`accept`)

#### Outputs

##### Product flows

###### Space-transport support task (`support_output`)

One accepted support task/block of exactly the declared transport function, configuration, extent, interval and handover; it is not the customer flight or payload outcome.

- Selected flow: Space-transport support task
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: 1 item
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_task`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `allocate_function` | Direct meters, gas balances, instrument schedules and actual workload take priority. For multi-user range/building/control facilities split transport versus unrelated users by causal metered or measured function-time/capacity use; do not automatically allocate by launch count, contract value or payload mass. |  |
| `allocate_attempts` | Attribute necessary preparation, rehearsal, deployment, scrub, abort, standby and retry to the defined accepted support task even if a flight is delayed or fails. A successfully delivered support block can exist without successful flight; never delete associated actual burdens or count failed trials as extra accepted outputs. |  |
| `allocate_assets` | Use actual asset quantity multiplied by actual attributable utilization divided by independently supported lifetime utilization, with compatible units and cumulative scope capped at one asset life. Reconcile whole-facility versus component manufacture/replacement/retirement; no invented lifetimes, masses or universal tasks per asset. |  |
| `allocate_interface` | Reconcile customer flight inputs and upstream supplier inventories at handover. Returned/recovered gases and equipment are stocks/interfaces, not avoided-launch or recycling credits. Any reused material treatment/substitution must follow explicitly documented upstream allocation without automatic benefit. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_task | accept | support_output | support_task_record | mission/phase; family/functions; site; capacity/configuration; start/end; interfaces; acceptance/quality; standby/rehearsal/scrub/retry; operator/customer/supplier boundary | Match signed service acceptance and actual activity logs to one precisely defined support task/block; do not use launch success or invoices alone. | item | each task/block | whole declared task interval | all actual support sites and handovers | per reference flow | acceptance; task logs; interface reconciliation |
| cp_control_asset | control | server; antenna | asset_lifecycle_record | asset/configuration; actual quantity; installation/component scope; current use; supported lifetime utilization; cumulative shares; replacement/retirement | Match actual asset register and upstream scope to measured task use and independently supported lifetime denominator; disclose unknown life or manufacture inventory. | row unit | actual task/meter/service interval | same interval as cp_task | actual declared process/sites | per reference flow | primary records; calibration; scope and balance reconciliation |
| cp_control_meter | control | control_electricity | meter_record | row; actual fuel/electricity/water; meter; conditions; stocks; function/interval; supplier coverage | Use calibrated readings and actual issue/return balances; separate internal electricity generation, purchased supply and vehicle/customer flows. | row unit | actual task/meter/service interval | same interval as cp_task | actual declared process/sites | per reference flow | primary records; calibration; scope and balance reconciliation |
| cp_control_waste | control | discarded_server | segregated_waste_record | stream; measured mass; composition/contamination; task share; treatment; destination; asset/supplier inclusion | Weigh each segregated actual stream and match transfer/treatment records; prevent duplicate included supplier or complete-asset retirement. | kg | actual task/meter/service interval | same interval as cp_task | actual declared process/sites | per reference flow | primary records; calibration; scope and balance reconciliation |
| cp_ground_asset | ground | umbilical; pump; building | asset_lifecycle_record | asset/configuration; actual quantity; installation/component scope; current use; supported lifetime utilization; cumulative shares; replacement/retirement | Match actual asset register and upstream scope to measured task use and independently supported lifetime denominator; disclose unknown life or manufacture inventory. | row unit | actual task/meter/service interval | same interval as cp_task | actual declared process/sites | per reference flow | primary records; calibration; scope and balance reconciliation |
| cp_ground_gas | ground | nitrogen; helium; air | gas_custody_record | species/mixture; phase; purity; pressure/temperature; issue/return; ground use; vehicle transfer; recovery; stock change; vent | Use weighed deliveries or calibrated mass meters with documented conversion. Reconcile external receipt plus opening stock with closing stock, flight/customer transfer, offsite returned/recovered material, actual ground release and other evidenced terminal fate, accounting for chemical transformation. Ground-use readings are activity records reconciled to these fates, not an extra sink; internal recovery/reuse is not another boundary input/output. | kg | actual task/meter/service interval | same interval as cp_task | actual declared process/sites | per reference flow | primary records; calibration; scope and balance reconciliation |
| cp_ground_material | ground | hydraulic_oil; isopropanol | material_stock_record | specific substance/grade; actual issues/returns; purity; stocks; use; recovered/waste/emitted fate | Weigh actual consumed ground material and reconcile stock and fate without assuming all purchases immediately become emissions or waste. | kg | actual task/meter/service interval | same interval as cp_task | actual declared process/sites | per reference flow | primary records; calibration; scope and balance reconciliation |
| cp_ground_meter | ground | ground_electricity; water | meter_record | row; actual fuel/electricity/water; meter; conditions; stocks; function/interval; supplier coverage | Use calibrated readings and actual issue/return balances; separate internal electricity generation, purchased supply and vehicle/customer flows. | row unit | actual task/meter/service interval | same interval as cp_task | actual declared process/sites | per reference flow | primary records; calibration; scope and balance reconciliation |
| cp_ground_release | ground | nitrogen_air; helium_air; isopropanol_air | species_balance_record | species; source; ground/vehicle interface; receipt; stock; transfer; capture/recovery; waste; residual release; compartment | Measure release or use a closed supported species balance with actual stocks, transfers, recovery and chemical transformations; do not infer release from delivery alone. | kg | actual task/meter/service interval | same interval as cp_task | actual declared process/sites | per reference flow | primary records; calibration; scope and balance reconciliation |
| cp_ground_waste | ground | ground_wastewater; spent_oil; spent_solvent | segregated_waste_record | stream; measured mass; composition/contamination; task share; treatment; destination; asset/supplier inclusion | Weigh each segregated actual stream and match transfer/treatment records; prevent duplicate included supplier or complete-asset retirement. | kg | actual task/meter/service interval | same interval as cp_task | actual declared process/sites | per reference flow | primary records; calibration; scope and balance reconciliation |
| cp_range_asset | range | radar | asset_lifecycle_record | asset/configuration; actual quantity; installation/component scope; current use; supported lifetime utilization; cumulative shares; replacement/retirement | Match actual asset register and upstream scope to measured task use and independently supported lifetime denominator; disclose unknown life or manufacture inventory. | row unit | actual task/meter/service interval | same interval as cp_task | actual declared process/sites | per reference flow | primary records; calibration; scope and balance reconciliation |
| cp_range_combustion | range | co2; no2 | support_combustion_record | species; equipment/fuel; actual activity; measured test or applicable method/factor; conditions; compartment; supplier scope | Use actual support-source tests or independently cited applicable species/source method with matched activity; no rocket-flight or generic NOx-to-NO2 equivalence. | kg | actual task/meter/service interval | same interval as cp_task | actual declared process/sites | per reference flow | primary records; calibration; scope and balance reconciliation |
| cp_range_meter | range | range_electricity; diesel | meter_record | row; actual fuel/electricity/water; meter; conditions; stocks; function/interval; supplier coverage | Use calibrated readings and actual issue/return balances; separate internal electricity generation, purchased supply and vehicle/customer flows. | row unit | actual task/meter/service interval | same interval as cp_task | actual declared process/sites | per reference flow | primary records; calibration; scope and balance reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_task` | all inventory rows | Attribute actual matched exchanges to the specified support function, extent and interval; divide comparable summed inventory by accepted task/block count only after configuration/quality equivalence is established. No automatic launch/payload/hour conversion. | cp_task; actual process protocols | per reference flow |  |
| `calc_gas` | nitrogen; helium; air; nitrogen_air; helium_air | External receipt + opening stock = closing stock + flight/customer transfer + offsite returned/recovered material + actual ground release + other evidenced terminal fate, accounting for chemical transformation and consistent species/state boundaries. Internal recovery/reuse does not create another boundary input/output. Ground-use metering is an activity account reconciled with each terminal fate, never an independent mass sum added to release or recovery; keep flight material upstream allocation explicit. | gas and release protocols; cp_task | species mass per reference flow | nasa-gases |
| `calc_assets` | umbilical; pump; building; radar; server; antenna | Multiply actual asset quantity by task-attributable utilization divided by supported lifetime utilization; reconcile units, replacement and cumulative complete/component scope before normalization. | asset protocols; cp_task | asset share per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_function | support_output | Require actual transport-support function, configuration, extent, interval and accepted interfaces; a spaceport name or mission label alone is insufficient. | cp_task |
| dq_balance | nitrogen; helium; air; water | Retain calibrated mass/energy/water records and ground/customer custody balance, including vent/recovery and supplier upstream scope. | gas/meter/release protocols |
| dq_assets | all asset rows | Require actual configuration, supported lifetime utilization and nonoverlapping manufacture/maintenance/retirement; quantify uncertainty without inventing defaults. | asset protocols |
| dq_identity | all inventory rows | Resolve exact flow/property/unit and localized name before verified adoption; missing identities and additional actual exchanges remain explicit. | Identity register and primary inventory |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `validate_task` | Require one unique support_output of 1 item with all functional qualifiers, actual duration, acceptance and family processes. Reject universal per-launch/per-kg payload factors and mixing unlike tasks. |  |
| `validate_interface` | Audit ground/vehicle material handover and supplier interfaces; exclude customer rocket flight and payload manufacture, track actual support losses once, and preserve unsuccessful attempts in their attributable boundary. |  |
| `validate_inventory` | Check each actual utility, gas, chemical, asset, waste and species against records and compatible per-task basis; disclose unknown identities/lifetimes/releases and incomplete upstream inventory. Mechanical pass does not establish full space-mission environmental or scientific approval. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | specialized_space_transport_support |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Matching configured specialized transport-support component with explicit ground/range/control function and service extent |
| excluded_use | Whole launch/spacecraft/payload footprint; universal mission factor; unrelated satellite communication/navigation/scientific operation |
| required_metadata | All qualifiers; conditional routes; actual interval and success/acceptance distinction; customer gas/propellant interfaces; allocation, supplier and asset scope; primary records |
| required_quality_disclosure | Task comparability; scrubs and standby; missing gases/species; custody and supplier overlap; life denominator; upstream/land/noise/water evidence gaps |
| update_trigger | Changed mission phase, support extent/configuration, gas/propellant interface, utility supply, utilization/life, supplier route or measured releases |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-67640 | official_guidance | UNSD, CPC Version3.0, subclass67640 explanatory note. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/67640 | Specialized support category only; detailed functional boundaries are declared foreground applicability rules, not a UN enumerated subtype list |
| nasa-gases | official_guidance | NASA, Propellants, Life Support Branch Fuels NASA Missions, June27 2023, paragraphs on ground gases, transfer and scrubbers. https://www.nasa.gov/centers-and-facilities/kennedy/propellants-life-support-branch-fuels-nasa-missions/ | Ground nitrogen/helium/breathing-air support and separation of handled flight commodities; qualitative route evidence only, no quantities/doses/factors adopted |
| nasa-wallops | official_guidance | NASA, Wallops Range Users Handbook,840-HDBK-0004 Version4, April1 2024, sections3.2.7–3.2.8 and3.3.1–3.3.8. https://www.nasa.gov/wp-content/uploads/2023/09/wallopsrangeusershandbook-2024.pdf | Range control, mobile power, telemetry and tracking support examples; apply only actual space-transport share, not unrelated aircraft/science uses; no equipment size, service life or energy factors adopted |
