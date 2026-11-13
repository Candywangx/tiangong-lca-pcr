---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.air-traffic-control-services
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Air traffic control services

## 1. Scope and Applicability

Airport flight-control tower operation, including declared approach, landing and take-off control functions, and services of airport-located radar stations. Declare the actual tower/radar/combined service configuration and coverage. A tower without radar is not assumed to contain a radar installation, and a radar/combined facility is not interchangeable with a visual tower. [Source: `un-cpc-67620`; `faa-facility-classification`]

Exclude radio navigational aid services under67990, general airport terminal/runway operation, ground handling, airline flight operation and aircraft manufacture/fuel/exhaust. Do not automatically extend the PCR to every en-route center or regional air-navigation service. A shared center/sensor supplier enters only for the specifically identified tower/airport-radar contribution with reviewed applicability and allocation. Any claimed aircraft fuel or delay benefit is a separate traffic model, not a negative facility emission.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.air-traffic-control-services |
| classification_refs | CPC3.0 67620 |
| covered_products | Declared airport tower approach/landing/takeoff control and airport-located radar service configurations |
| excluded_products | Radio navigation aids; whole en-route network by default; airport/airline operation; aircraft production/operation |
| representative_product | One completed sixty-minute block of a declared terminal-control service configuration and coverage |
| production_route | Establish declared service availability → operate actual control/surveillance and support systems → record delivered block and traffic/interruptions |
| market_state | Delivered bounded facility service with actual coverage and operating evidence; no inferred safety certification |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the exact declared tower/airport-radar control-service scope and availability |
| How much | One sixty-minute service block for the identified configuration/coverage, with actual traffic distribution recorded |
| How well | Declared operating coverage, staffed/available functions, equipment/degraded state and actual acceptance/recording criteria; no invented safety approval |
| How long or cycle | Sixty actual delivered minutes under one declared service condition; interruptions and configuration changes split records |
| reference_flow_link | `control_block` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Delivered sixty-minute qualified airport-control service block |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | facility/airport; tower/radar/combined subtype; actual approach/landing/takeoff function scope; spatial/airspace/runway coverage and handoff; declared service block; actual start/end and delivered minutes; actual arrivals/departures/transits and traffic mix; staffed positions/operating mode; radar/radio/IT inventory; redundancy; outage/degraded conditions; reporting period; meter/supplier allocation; cooling gas identities; backup tests; asset boundaries |

item is the singular alias of formal Item(s); export Item(s). The counted item is the explicitly defined service block, not an aircraft operation and not a falsely relabelled Time property. One item contains sixty minutes of the stated service configuration. Determine delivered blocks B from actual service minutes divided by60 after separating condition changes; retain fractional blocks in the period denominator. No universal equivalence exists between blocks with different coverage, traffic, functions or degraded states. Zero traffic can still have delivered availability only when the stated actual service criteria were met; an unavailable/closed interval is not a normal delivered block. No automatic per-flight conversion or claimed safe outcome follows.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `block_count` | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Count defined sixty-minute service blocks using cp_service, retaining actual delivered minutes and function/traffic conditions. Aircraft movements are separately measured descriptors, not interchangeable block counts. |
| `electricity_energy` | electricity | Energy | kWh | Use actual imported electricity, support circuit shares and UPS/cooling losses; generation/charging/internal circulation is reconciled, not purchased twice. |
| `fuel_mass` | diesel | Mass | kg | Measure actual backup test/run fuel using cp_energy; standby nameplate power or aircraft counts do not establish consumption. |
| `gas_mass` | r134a_input; sf6_input; r134a_air; sf6_air | Mass | kg | Balance each actual species with cylinder stock, equipment charge, acquisition and recovery/transfer changes; additions alone are not losses. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Configured tower/airport-radar facility providing the declared service; prior building/equipment production shares disclosed |
| starting_condition_role | foreground_start |
| product_classification_scope | Airport tower control/approach/landing/takeoff and airport-located radar; no automatic radio-aid/en-route network coverage |
| recursive_input_rule | Purchased control/surveillance/IT/support contribution enters once with functional/temporal allocation; do not duplicate included equipment or energy |
| upstream_dataset_requirement | Actual electricity/diesel/water/gas supply; building/radar/radio/IT/UPS/generator/cooling manufacture/replacement; waste/gas recovery treatment |
| disclosure | Actual functions/traffic/duration/coverage; availability and degraded periods; shared supplier/airport boundaries; asset lives; backup/cooling and upstream gaps |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `boundary_function` | Record actual tower/radar/approach roles and handoffs; different facilities need their real equipment and coverage rather than a universal radar assumption. | faa-facility-classification |
| `boundary_support` | Include attributable power conditioning/UPS, backup tests/running, batteries, cooling, building support, maintenance and retirement. Record actual installed systems, not historical fleet defaults. | faa-power-context |
| `boundary_aircraft` | Exclude customer aircraft fuel/exhaust/manufacture and whole-flight control/route effects. A downstream aviation-system model must identify any claimed control-induced aircraft change separately and avoid duplicates. |  |
| `boundary_actual` | Screen each actual refrigerant/insulating gas, heating fuel, battery chemistry, electronic replacement, support vehicle and waste. Add individual specific exchanges where present; no default gas leak, generator use or emission-free facility claim. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| control | Operate and support declared airport-control block | required | Actual declared functions, delivered duration and coverage | foreground_production | per reference flow |
| surveillance | Provide actual airport-located radar contribution | conditional | Actual included airport radar only | foreground_production | per reference flow |
| continuity | Provide actual power continuity and backup contribution | conditional | Actual UPS/battery/generator installations and observed maintenance/testing | foreground_production | per reference flow |

### Process: Provide actual airport-located radar contribution (`surveillance`)

#### Inputs

##### Product flows

###### Airport surveillance radar installation (`radar_asset`)

Only the actual airport-located radar installation and allocated service share; identify antenna/processing/support boundary. External en-route systems are not automatically this asset.

- Selected flow: Airport surveillance radar installation
- Flow property / unit: Number of items / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_asset.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources:

### Process: Provide actual power continuity and backup contribution (`continuity`)

#### Inputs

##### Product flows

###### Diesel fuel, petroleum-derived (`diesel`)

Actual backup-generator running, testing and attributable maintenance duty; fuel is not inferred from installed standby capacity or each flight.

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

###### Mineral engine lubricating oil (`engine_oil`)

Actual generator servicing net oil use with stock and purchased-service coverage reconciled.

- Selected flow: Mineral engine lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Static uninterruptible power supply unit (`ups`)

Actual UPS power-conversion hardware share; declare whether initial battery is included and measure conversion loss once.

- Selected flow: Static uninterruptible power supply unit
- Flow property / unit: Number of items / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_asset.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources:

###### Valve-regulated lead-acid UPS battery (`lead_battery`)

Conditional actual battery design/capacity; distinguish block/module and cell counts and initial versus replacement burden. No default life.

- Selected flow: Valve-regulated lead-acid UPS battery
- Flow property / unit: Number of items / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_asset.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources:

###### Lithium iron phosphate UPS battery module (`lfp_battery`)

Conditional actual alternative chemistry; not interchangeable with lead-acid units; preserve capacity and manufacturing coverage.

- Selected flow: Lithium iron phosphate UPS battery module
- Flow property / unit: Number of items / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_asset.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources:

###### Standby diesel generator set (`generator`)

Actual installed generator production/retirement share, physical service life and utilization; no assumed operating hours or replacement years.

- Selected flow: Standby diesel generator set
- Flow property / unit: Number of items / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_asset.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources:

### Process: Operate and support declared airport-control block (`control`)

#### Inputs

##### Product flows

###### Electricity, alternating current (`electricity`)

Meter actual control/radio/IT, surveillance, UPS losses, cooling, lighting and facility support by circuit before attribution. Diesel-generated electricity is not another purchased grid input.

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

###### 1,1,1,2-Tetrafluoroethane, refrigerant R134a (`r134a_input`)

Only an actual R134a cooling circuit; reconcile initial charge, stock/returns, replenishment and supplier-included charge. Other refrigerants require their own precise rows and blend constituent releases.

- Selected flow: 1,1,1,2-Tetrafluoroethane, refrigerant R134a
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_gas.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_gas`
- Sources:

###### Sulfur hexafluoride, electrical insulating gas (`sf6_input`)

Only actual gas-insulated electrical equipment; no assumed SF6 use at every facility. Correct purchases for stock/returns and equipment charge.

- Selected flow: Sulfur hexafluoride, electrical insulating gas
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_gas.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_gas`
- Sources:

###### Tap water (`water`)

Conditional actual cooling make-up or sanitary/cleaning use; distinguish fresh supply from recirculating volume.

- Selected flow: Tap water
- Flow property / unit: Volume / m3
- Amount rule: Attributable measured exchange amount per reference flow; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Air-traffic-control processing server (`server`)

Actual configured processing hardware; manufacturing/lifetime share with replacement/storage/peripheral boundary declared; no duplicate hosted supplier hardware.

- Selected flow: Air-traffic-control processing server
- Flow property / unit: Number of items / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_asset.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources:

###### VHF air-ground radio transceiver (`radio`)

Actual communications equipment used by this service; preserve channel/configuration and supported lifetime utilization.

- Selected flow: VHF air-ground radio transceiver
- Flow property / unit: Number of items / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_asset.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources:

###### Airport air-traffic-control tower building (`tower_building`)

Actual allocated tower/control facility construction and retirement share; distinguish shared airport space and separately allocated fitted equipment.

- Selected flow: Airport air-traffic-control tower building
- Flow property / unit: Area / m2
- Amount rule: Attributable measured exchange amount per reference flow; cp_asset.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources:

###### Air-cooled control-facility chiller (`chiller`)

Conditional actual design; specify initial refrigerant coverage and replacements, avoiding duplicate charge in the gas/material inventory.

- Selected flow: Air-cooled control-facility chiller
- Flow property / unit: Number of items / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_asset.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources:

#### Outputs

##### Product flows

###### Delivered qualified airport-control block (`control_block`)

One defined sixty-minute delivered service block under cp_service. Shared waste/emission rows below retain the actual generating source and period, not only the block end.

- Selected flow: Delivered sixty-minute qualified airport-control service block
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: 1 item
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_service`
- Sources:

##### Waste flows

###### Discarded air-traffic-control processing server (`waste_server`)

Actual retired hardware with receiver and electronics treatment boundary; confidential data-handling evidence is referenced without exposing operational data.

- Selected flow: Discarded air-traffic-control processing server
- Flow property / unit: Number of items / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Spent valve-regulated lead-acid UPS battery (`waste_lead`)

Actual retired same-capacity battery block/module; measure transfer and receiving recycling/treatment, no automatic lead credit.

- Selected flow: Spent valve-regulated lead-acid UPS battery
- Flow property / unit: Number of items / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Spent lithium iron phosphate UPS battery module (`waste_lfp`)

Only actual LFP retirement, separately from lead-acid; retain receiver and actual treatment.

- Selected flow: Spent lithium iron phosphate UPS battery module
- Flow property / unit: Number of items / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Spent mineral engine lubricating oil (`spent_oil`)

Actual generator service waste, distinct from returned unused oil and purchased maintenance coverage.

- Selected flow: Spent mineral engine lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Cooling-system blowdown wastewater (`wastewater`)

Conditional actual captured cooling blowdown; composition and receiving treatment required. No default water-cooled plant.

- Selected flow: Cooling-system blowdown wastewater
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

###### Carbon dioxide, fossil, to air (`co2_air`)

Only actual facility combustion, primarily backup testing/running where present; customer aircraft CO2 is outside this module.

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

Actual generator species from measured or explicitly justified engine/fuel/duty evidence.

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

Species-resolved facility release; NOx-as-NO2 totals require justified speciation.

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

Separate actual NO2 from NO and retain source/duty.

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

Actual fine combustion fraction; no overlapping total/fraction duplication or aircraft exhaust import.

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

###### 1,1,1,2-Tetrafluoroethane, to air (`r134a_air`)

Only reconciled loss from actual R134a circuit after stock, equipment-charge and recovery/transfer changes; additions alone are not emissions.

- Selected flow: 1,1,1,2-Tetrafluoroethane, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_gas.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_gas`
- Sources:

###### Sulfur hexafluoride, to air (`sf6_air`)

Only actual reconciled SF6 release by gas stock/equipment charge/transfer balance, not all purchased insulating gas.

- Selected flow: Sulfur hexafluoride, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_gas.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_gas`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `allocate_subdivision` | Prefer circuit/function/position/sensor subdivision; shared airport or control-center assets and utilities require documented measured function/time/capacity drivers. Never assign the whole en-route network to local tower blocks. |  |
| `allocate_duration` | Within one compatible configuration/coverage condition, allocate actual period inventory to delivered blocks B; keep redundancy, low-traffic standby, maintenance and backup tests as real service-support burdens. Traffic distribution remains explicit. |  |
| `allocate_assets` | Allocate building/radar/IT/radio/UPS/cooling manufacture and disposal using supported physical service life and utilization; replacements and initial batteries/gas already inside upstream inventories are not counted again. |  |
| `allocate_gas` | Separate gas recovered or transferred from atmospheric loss; no automatic avoided leakage or battery recycling credit. | epa-gas-balance |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_service | control | control_block | foreground record | facility/functions/coverage; actual staffed/available interval; delivered minutes; arrivals/departures/transits; traffic mix; outage/degradation; acceptance | Verify actual operating and traffic logs with function/handoff boundaries; split configuration/degraded changes and record delivered minutes, without asserting legal/safety approval. | item | service interval and period | same declared service/reporting period | identified facility/function allocation | per reference flow | operating/traffic logs; timestamp and coverage reconciliation |
| cp_energy | control | electricity; diesel | foreground record | meter/circuit; imports; UPS/cooling losses; generator fuel stock/flow; actual run/test; allocation; supply | Use calibrated actual electricity and fuel measurements; reconcile function/period totals and no double count of internal generation. | kWh; kg | meter and backup event | same declared service/reporting period | identified facility/function allocation | per reference flow | meter calibration; bills; fuel/test logs |
| cp_material | control | water; engine_oil | foreground record | specific product; issue/return; stock; consumption; generator/cooling source; share | Reconcile actual net material/water consumption to supported maintenance/utility operations, separating recirculated water. | kg; m3 | issue/period balance | same declared service/reporting period | identified facility/function allocation | per reference flow | stock and meter records; service coverage |
| cp_gas | control | r134a_input; sf6_input; r134a_air; sf6_air | foreground record | species; opening/closing cylinder stock; acquisitions; offsite/recovery transfers; actual equipment charge start/end; task/function share | Weigh/reconcile each actual gas stock, equipment charge and transfers; avoid double counting service-contractor charge from site stock; purchases are not emissions. | kg | each transfer and period boundary | same declared service/reporting period | identified facility/function allocation | per reference flow | cylinder/service/recovery records; complete balance |
| cp_asset | control | server; radio; tower_building; chiller; radar_asset; ups; lead_battery; lfp_battery; generator | foreground record | asset/configuration; capacity; manufacture; battery/gas/component coverage; actual utilization; lifetime; replacement/retirement | Bind actual installed assets to upstream inventories with documented physical life and function/time use; distinguish hardware, initial charges and replacements. | item; m2 | asset event and period | same declared service/reporting period | identified facility/function allocation | per reference flow | asset register; maintenance/replacement logs; life evidence |
| cp_waste | control | waste_server; waste_lead; waste_lfp; spent_oil; wastewater | foreground record | specific waste; capacity/chemistry/composition; amount; receiver/treatment; period/share | Measure each waste and verify actual receiving treatment; distinguish chemistry and same-capacity battery units; treatment counted once. | item; kg; m3 | each transfer | same declared service/reporting period | identified facility/function allocation | per reference flow | waste/recycling receipts; composition; receiver boundary |
| cp_emission | control | co2_air; co_air; no_air; no2_air; pm25_air | foreground record | actual generator/fuel; run/test/load; species/fraction; exhaust measurement or explicit factor/version/unit; allocation | Measure or use explicitly justified actual engine/fuel/duty factors; resolve individual species/PM fractions and exclude aircraft exhaust. | kg | backup duty and period | same declared service/reporting period | identified facility/function allocation | per reference flow | fuel/exhaust tests; factor applicability; units audit |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| block_denominator | control_block | B = actual delivered minutes /60 within compatible stated configuration and coverage; B must be positive. Retain fractional blocks and actual traffic/availability records. | cp_service | B |  |
| exchange_allocation | all inventory rows | Attribute each measured period numerator by documented facility/function physical shares, then divide by B. Preserve shared standby, redundancy, maintenance and tests; no automatic per-aircraft denominator. | cp_service; cp_energy; cp_material; cp_waste | exchange per reference flow |  |
| gas_loss | r134a_air; sf6_air | For each actual gas, loss = opening stored stock + acquisitions + opening equipment charge - closing stored stock - offsite transfers - closing equipment charge. Recovery remains in closing stock or an offsite transfer once; investigate negative/unreconciled balances, then allocate actual function share and divide by B. | cp_gas; cp_service | gas loss per reference flow | epa-gas-balance |
| asset_allocation | server; radio; tower_building; chiller; radar_asset; ups; lead_battery; lfp_battery; generator | Allocate upstream asset manufacturing/replacement/retirement by supported physical life and actual function/time utilization, then the period share per B; no default battery replacement cycle. | cp_asset; cp_service | asset share per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_function | control_block | Actual block duration, functions/coverage, traffic mix and degraded status complete; same sixty minutes does not establish cross-facility equivalence. | cp_service |
| dq_period | all inventory rows | Match metering, backup tests, maintenance, gas balances and delivered periods; reconcile shared supplier/airport totals. | cp_energy; cp_gas; cp_asset |
| dq_gases | r134a_air; sf6_air | Species and stock/equipment/recovery evidence complete; unknown loss is not zero, and added charge is not automatically atmospheric release. | cp_gas |
| dq_identity | all inventory rows | Resolve flow/support identities before linked production; archived count support is not fresh product-flow verification. | direct identity verification |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `validate_scope` | Require airport tower-control or airport-located radar function; exclude navigation-aid67990 and unreviewed extension to whole en-route service. | un-cpc-67620 |
| `validate_reference` | Require unique control_block at 1 item, fixed sixty-minute definition, positive delivered B and all functions/traffic/coverage/availability qualifiers. Reject unavailable intervals counted as normal output and per-flight equivalence without a separate explicit model. |  |
| `validate_atomic` | Require each fuel, gas, battery chemistry, hardware, waste and emitted species independently; balance refrigerant/insulating stock and recovery, and avoid duplicate installed gas/initial batteries. |  |
| `validate_limits` | Disclose actual standby/backup/cooling, lifetime allocations and upstream gaps; a PCR check cannot establish ATC safety certification, operational approval or aircraft emission savings. |  |
| `validate_unit_export` | Treat item only as the singular local alias of the formal Number of items unit Item(s). Export Item(s) with the same numerical count and the fully qualified service definition; changing the display token does not change the flow property, service extent or normalization denominator. Do not convert a service item to time, mass, distance or a different family by relabelling its unit, or normalize an already per-reference quantity again. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Unit-process airport tower/radar service block |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Same qualified function configuration, sixty-minute block definition, coverage, traffic/availability condition and supplier/asset boundaries |
| excluded_use | Universal per-flight factor; radio-navigation aid; all en-route ATC; airline operation; safety approval or avoided aircraft-fuel credit |
| required_metadata | All block qualifiers; delivered B/minutes and traffic; equipment/circuit map; backup/gas/battery records; lifetime and shared-function allocations |
| required_quality_disclosure | UUID gaps; coverage/traffic distribution; degraded/outage treatment; gas/backup uncertainties; asset/supplier overlap; upstream omissions |
| update_trigger | Facility/function/coverage or traffic regime change; equipment/radar relocation; power/cooling/gas/battery change; asset life or data-quality change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-67620 | official_guidance | UNSD CPC3.0 67620. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/67620 | Airport tower/airport-located radar scope and navigation-aid exclusion. |
| faa-facility-classification | official_guidance | FAA OPSNET Facility Classification. https://www.aspm.faa.gov/aspmhelp/index/OPSNET__Facility_Classification.html | Distinction between tower, terminal radar/combined and en-route facilities; not a CPC crosswalk or operational approval. |
| faa-power-context | official_guidance | FAA Capital Investment Plan FY2012-2016 (2011), AppendixB Electrical Power Systems sustain/support. https://www.faa.gov/air_traffic/publications/cip/files/FY12-16/FY12-16_CIP_Complete_May_2011.pdf | Historical technical evidence of backup/UPS/battery support; no old fleet count, service life, cost or current requirement adopted. |
| epa-gas-balance | official_guidance | US EPA, Direct Fugitive Emissions from Refrigeration, Air Conditioning, Fire Suppression, and Industrial Gases, section2.3. https://www.epa.gov/sites/default/files/2020-12/documents/fugitiveemissions.pdf | Actual gas stock/equipment-charge material-balance logic; no leak rate or GWP adopted. |
