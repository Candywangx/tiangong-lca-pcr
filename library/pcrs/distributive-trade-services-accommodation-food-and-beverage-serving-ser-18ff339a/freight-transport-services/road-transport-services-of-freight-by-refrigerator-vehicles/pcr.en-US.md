---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.freight-transport-services.road-transport-services-of-freight-by-refrigerator-vehicles
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Refrigerated road freight consignment-leg service

## 1. Scope and Applicability

This PCR covers the complete frozen or refrigerated goods road-transport function in specially refrigerated trucks and cars. Cargo identity, amount, route, distance and temperature performance are declared for each dataset; propulsion, refrigeration technology, commodity and vehicle size are conditional actual states. The completed consignment-leg reference preserves a real contracted handover; comparison needs equivalent amount, route and cold-chain quality, not merely one consignment label.

Exclude railway/water/air transport, dry ambient-only road transport, tanker bulk service, intermodal-container service where that is the classified service, independent storage, postal/courier final delivery, cargo manufacture and bare vehicle hire without actual transport provision. Loading, waiting, cleaning and terminal work within the freight contract remain included; outside providers enter once through declared upstream coverage.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.freight-transport-services.road-transport-services-of-freight-by-refrigerator-vehicles |
| classification_refs | CPC 3.0 65111; exact |
| covered_products | Frozen or refrigerated goods transported by specially refrigerated road trucks and cars |
| excluded_products | Other modes; ambient-only freight; tanker/intermodal-container functions; standalone storage/courier; cargo or vehicle manufacture as final service |
| representative_product | Completed refrigerated road freight consignment leg |
| production_route | Road movement with bounded cold preservation and attributed full support/asset lifecycle |
| market_state | Accepted completed consignment leg at declared refrigerated delivery gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed refrigerated road freight consignment leg |
| How much | 1 completed qualified consignment leg, cargo mass/volume and actual OD-distance mandatory |
| How well | Declared cargo-specific temperature/time, delivery acceptance and condition |
| How long or cycle | Actual acceptance-to-delivery interval plus causally attributed failed/empty/support and lifecycle period |
| reference_flow_link | completed_refrigerated_road_leg |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed refrigerated road freight consignment leg |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | cargo_identity; cargo_mass_volume; acceptance_delivery_gates; actual_route_distance; period; N; refrigerated_or_frozen_state; actual_temperature_trace; accepted_quality; vehicle_refrigeration_technology; propulsion_supply; multi_stop_compartments; empty_failed_return_duties; allocation_method; supplier_coverage; same_asset_all_user_life; cargo_loss_receiver; species_medium; uncertainty |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | reference product | Number of items | Item(s) | Keep actual completed service count distinct from tonne-km, vehicle-km, cargo tonnes, packages and planned capacity; N>0 and actual OD/distance/cargo/cold quality are mandatory. |
| native_unit | all inventory rows | Actual native compatible property | Actual native unit | Preserve native provider property/unit; verified kWh to MJ uses 3.6 MJ/kWh. Volume-mass requires actual density/state; cargo tonnes exclude vehicle/container tare according to declared basis. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual cargo acceptance state, fleet/cooling topology and upstream supply/provider/asset gates |
| starting_condition_role | Foreground starting facts do not erase earlier asset/supply burdens |
| product_classification_scope | Full refrigerated road freight function of 65111 |
| recursive_input_rule | Exact subcontracted stages replace covered foreground cells once with native unit and gate |
| upstream_dataset_requirement | Compatible real technology, quality, geography, period, gate and lifecycle coverage |
| disclosure | All loaded/empty/failed/cooling/site/asset duties, cargo custody, allocation, missing data and uncertainty |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| full_road_refrigeration | all nodes | Include frozen and refrigerated goods in specially refrigerated road trucks and cars; no diesel-only, food-only, single-temperature or one-size restriction. Distinguish intermodal-container service 65113, tanker 65112, rail 65121, warehousing and courier retail delivery by actual contract/function; do not classify solely because goods are cold. | unsd-cpc3-65111 |
| full_duties | all nodes | Include attributed loading, acceptance inspection, pre-cooling, loaded running, multi-stop doors-open, waiting, defrost, empty return, positioning, failed/rejected/rescue and wash duties; physically shared propulsion/refrigeration inputs have one owner across nodes. No positive completed N means no finite per-completion result. | ghg-product-2011 |
| cold_state | all nodes | The preservation intervention starts at actual cargo acceptance temperature/state and ends at documented delivery temperature, elapsed time, excursions and acceptance decision. Parent activity is road freight; mechanical diesel, engine-driven/electric compression, eutectic/ice and cryogenic alternatives retain actual topology, energy/cryogen supply, venting, leaks, recovery and asset obligations. Coexistence is allowed only when evidenced; alternative supplies are not all assumed present. ATP is applicable only to its actual legal/cargo scope; it supplies no universal temperature setpoint here. | unece-atp-current |
| cargo_boundary | all nodes | Cargo is the object carried, not consumed transport input and not the freight-service output. Maintain custody mass/count/condition balances at every handover and receiver. Do not add original cargo production to the service; separately disclose production/replacement implications of actual loss for downstream cargo LCA. Transfer packaging/container ownership and reuse duties require explicit coverage. | ghg-product-2011 |
| asset_provider | all nodes | PCR lifecycle choice includes actual vehicle/body/refrigerator/charging/battery/tyre/road/depot/terminal manufacture, installation, maintenance, replacement and retirement. Each native supplier result replaces only its documented covered cells; complete assembly and included initial components cannot both be counted. Useful life is an allocation denominator, not proof that operation or end-of-life is included. | ghg-product-2011 |
| atomic_expansion | all nodes | For every actual unrepresented material, supply, asset, provider result, direct pollutant, waste or fate, add a separate row_id under one real node with one actual identity/state/type/direction, native property/unit/quantity, source and same-node protocol. Species, carbon origin, PM size, air/water/soil/collected fate and receiver remain distinct. Broad residual labels are expansion obligations and cannot become final unverified exchanges. Missing evidence is incomplete, never zero. | ghg-product-2011 |

## 6. Process Inventory Structure

Each inventory card represents one independently identifiable product, material/formulation, waste stream, substance or supplied service at a compatible gate, property and unit. A complete supplied assembly or an actually collected mixture may have one identity; its already included constituents are not additional exchanges. The cp_expand_ protocols in section 8 are mandatory identification requirements, never selected flows or quantities to exchange. For every such requirement document actual applicability and enumerate all concrete exchanges with separate row ids. Preserve the full applicable scope and record evidence when no exchange occurs; an unexpanded or unknown requirement is incomplete, never zero. Changing a requirement into a collection protocol does not resolve any missing identity or waive any lifecycle, allocation, measurement or boundary obligation.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| road_movement | Road movement and final freight handover | required | Actual occurrence and documented ownership; no assumed absent duty | foreground | completed_refrigerated_road_leg |
| cold_control | Refrigeration and cold preservation intervention | required | Actual occurrence and documented ownership; no assumed absent duty | foreground | completed_refrigerated_road_leg |
| support_lifecycle | Loading, cleaning and transport asset lifecycle | required | Actual occurrence and documented ownership; no assumed absent duty | foreground | completed_refrigerated_road_leg |

The Process Map quantitative_reference links every node to the one final service denominator; cold_control and support_lifecycle do not produce additional final service outputs.

### Process: Road movement and final freight handover (`road_movement`)

#### Inputs

##### Product flows

###### Diesel fuel (`traction_diesel`)

Only actual diesel propulsion at documented supply gate. Record blend, stock, supplied, transferred, recovered, spilled and actually burned quantities separately. A purchased blend and its included components are mutually exclusive.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: attributed_traction_diesel_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_movement`
- Sources: `unsd-cpc3-65111`; `ghg-product-2011`

###### Alternating current (`traction_ac`)

Only actual externally supplied AC at charger input; retain charger/battery/network losses inside that gate. Delivered DC or provider-inclusive traction replaces exact covered cells; it does not add duplicate AC. Electric propulsion is conditional, not a required diesel-truck assumption.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: attributed_external_traction_AC_MJ / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_movement`
- Sources: `unsd-cpc3-65111`; `ghg-product-2011`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed refrigerated road freight consignment leg (`completed_refrigerated_road_leg`)

Actual qualified frozen or refrigerated consignment moved by specially refrigerated truck or road car from declared acceptance to delivery gate. N counts completed eligible consignment legs in a homogeneous cohort; split delivery is linked to the original manifest without multiplying the same completed service. Failed or rejected transport remains in causal duties and is not counted as an accepted output.

- Selected flow: Completed refrigerated road freight consignment leg
- Flow property / unit: Number of items / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_movement`
- Sources: `unsd-cpc3-65111`; `ghg-product-2011`

##### Waste flows

##### Elementary flows

###### carbon dioxide (fossil) (`traction_fossil_co2`)

Actual fossil CO2 exhaust to air only, measured or calculated from actual burned fuel fossil-carbon fraction, oxidation/retention and documented compound conversion. Not all supplied diesel is burned; biogenic carbon is separate. Air subcompartment must be documented before final exchange selection.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: attributed_traction_fossil_CO2_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_movement`
- Sources: `unsd-cpc3-65111`; `ghg-product-2011`

### Process: Refrigeration and cold preservation intervention (`cold_control`)

#### Inputs

##### Product flows

###### Diesel fuel (`refrigeration_diesel`)

Only separately metered compatible diesel supplied for refrigeration engine duties. If the main engine drives cooling, partition the one real fuel pool using metered/validated actual duty evidence; do not sum a second assumed fuel input.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: attributed_refrigeration_diesel_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cold`
- Sources: `unsd-cpc3-65111`; `ghg-product-2011`

###### Alternating current (`refrigeration_ac`)

Actual shore, depot or plug-in refrigeration AC at stated gate including pre-cooling, waiting, defrost and held/rejected cargo duties. Shared vehicle energy partition must close against master meter.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: attributed_external_refrigeration_AC_MJ / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cold`
- Sources: `unsd-cpc3-65111`; `ghg-product-2011`

###### Refrigerant, R134a (`r134a_makeup`)

Conditional actual single R134a formulation/purity makeup only. Do not apply to other refrigerants or blends. Initial fill already in a supplied assembly is not supplied again. Every actual alternative refrigerant, cryogen or ice supply gets its own native row and real stock/fate record.

- Selected flow: Refrigerant, R134a `b33b6abf-6a88-4ec1-ab79-6aa5aac69e8a`
- Flow property / unit: Mass / kg
- Amount rule: attributed_R134a_supply_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cold`
- Sources: `unsd-cpc3-65111`; `ghg-product-2011`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### HFC-134a (`r134a_air`)

Conditional actual R134a leakage to air only, from measured charge/recovery and same-equipment stock reconciliation; recharge is not leakage. Keep recovered refrigerant, stock changes and air release distinct; other compounds are independent rows.

- Selected flow: HFC-134a `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: attributed_actual_R134a_air_release_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cold`
- Sources: `unsd-cpc3-65111`; `ghg-product-2011`

###### carbon dioxide (fossil) (`refrigeration_fossil_co2`)

Conditional actual refrigeration-engine fossil CO2 to air; preserve one fuel owner and same-equipment carbon balance. Main-engine cooling allocation cannot duplicate exhaust already assigned to road movement.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: attributed_refrigeration_fossil_CO2_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cold`
- Sources: `unsd-cpc3-65111`; `ghg-product-2011`

### Process: Loading, cleaning and transport asset lifecycle (`support_lifecycle`)

#### Inputs

##### Product flows

###### Complete refrigerated road freight vehicle assembly at delivery (`refrigerated_vehicle_assembly_manufacture`)

One actual complete physical assembly of one documented model/configuration per instantiated row at its manufacturing delivery gate. Different configurations require separate instances and quantities. Activate only when this assembly serves the declared node outside complete-provider coverage. The initial-component inclusion list is part of this identity; do not add included initial components again. Keep actual uncovered maintenance, replacements and end-of-life separately.  Actual complete truck or road-car assembly, specification, initial cooling equipment/battery/tyres/body inclusion and manufacturing gate required. This is manufacturing supply, not a whole-life transport service. Record actual additions, replacements, maintenance and retirement separately without duplicating initial included components.

- Selected flow: Complete refrigerated road freight vehicle assembly at delivery
- Flow property / unit: Count / Item(s)
- Amount rule: For each exact same-model assembly cohort: manufactured items * target-attributable useful duty / all-user full-life useful duty / N. Both duty terms use the same compatible basis and cohort; denominators must be evidenced and positive. Apply the target share and final reference normalization once. Initial components covered by this assembly are nonadditive.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: unsd-cpc3-65111; ghg-product-2011


###### Tap water (`wash_tap_water`)

Conditional actual tap-water supply at documented municipal production/supply gate for vehicle/body cleaning. Actual distribution from that gate must be covered separately if absent. No substitution for raw, recycled or deionized water.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: attributed_tap_water_supply_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support`
- Sources: `unsd-cpc3-65111`; `ghg-product-2011`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Used lubricating oil (`used_lubricating_oil`)

Actual collected used lubricant generated by attributed maintenance only, at generation gate. Identify receiver, composition, storage and treatment service separately; waste mass is not an automatic recycling credit or direct soil emission.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass / kg
- Amount rule: attributed_used_lubricating_oil_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support`
- Sources: `unsd-cpc3-65111`; `ghg-product-2011`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_precedence | all nodes | Avoid allocation by direct metering and process/compartment subdivision first. For unavoidable joint legs, allocate actual shared propulsion/site burdens using documented causal physical load, distance and capacity constraint evidence across all consignments/users; mass-distance is allowed only when it represents actual service causation, not a universal default. Sum shares to one over the same event. Cooling is separately attributed using actual thermal/compartment-time evidence; price allocation requires inability to establish physical causation and a sensitivity disclosure. | ghg-product-2011 |
| failed_stock_period | all nodes | Retain attributed failed/empty/returned duties in causal service pool before dividing once by positive eligible completed N. Count returned or redelivered consignment only at the declared accepted completion, maintaining original/return leg IDs. Preserve stocks, fuel/charge/refrigerant/cargo transfers and year-end unfinished duties across periods; do not move burdens or completion counts to a convenient year. | ghg-product-2011 |
| asset_lifetime | all nodes | Allocate native asset manufacture and each distinct lifecycle event by actual same-cohort duty consumed divided by positive supported same-cohort total all-user useful duty, then by N. Record installation, refurbishment, replacement and retirement dates and all users/periods; no universal truck kilometres, road life, refrigeration leakage or empty-running percentage. Shared depot/charger/road consumers are indexed once. | ghg-product-2011 |
| provider_no_recursion | all nodes | A subcontracted eligible freight leg is a provider input with actual native service unit and explicit gates, replacing matching own-operated stage cells. Do not recursively consume the same finished reference output or duplicate supplier energy/emissions/assets; cargo ownership does not determine physical burden ownership. | ghg-product-2011 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_movement | road_movement | Freight output, propulsion, direct exhaust and full duty | Trip manifests, meters and dispatch records | consignment_id; cargo_identity; mass; volume; OD; leg_distance; loaded_empty_failed_km; fuel_opening_receipts_closing_transfers; actual_burn; AC_meter; completed_N; period; quality_acceptance; allocation_share; native_unit; provider_gate; uncertainty | Link telematics, calibrated meters, fuel and signed delivery to one route/cohort; preserve all joint users and empty/failed duties; partition engine-driven refrigeration once against master pool, then calculate attributable numerator and divide once by completed N. Build the qualified denominator from unique accepted output on the declared reference basis. Retain disqualified events and their resource duties separately. Keep the reference amount fixed; normalize only attributable inventory totals by the positive denominator. Keep non-reference rows of this protocol in their own physical units. | Item(s); kg; MJ; km; h | Each event; reconcile each period | Declared reporting period and linked lifecycle years | Actual vehicles, compartments, sites and suppliers | per declared reference flow | Calibrations; signed records; reconciled allocations; coverage and uncertainty Retain the source and native basis of each measured operand; document the conversion or attribution actually used and whether the supplied result is already per reference flow. |
| cp_cold | cold_control | Cold preservation, energy, refrigerant and leakage | Temperature logger, cooling meter and refrigerant service ledger | equipment_id; compartment; acceptance_temperature; setpoint; actual_temperature_trace; door_events; hours; ambient; defrost; cooling_fuel_AC; charge_opening_makeup_recovery_closing; leak_species_medium; rejected_lot_receiver; allocation_share; period; N; native_unit; uncertainty | Calibrate logger and meter, reconcile same-equipment charge/stock/recovery, separate all actual coolant/cryogen species and fates, allocate actual cooling by thermal/compartment-time causation and divide each native quantity once by N. Keep native observations and reconciliation totals on their recorded basis. For burden rows, attribute only the still-shared total and divide an assigned total only by positive qualified output of the same cohort and gate. Preserve already equivalent per-reference results. At zero output retain the burden for documented disposition. Record independently measured deliveries, releases and transfers at their own gates; any allocation applies to burdens. | kg; MJ; h; temperature unit | Each event; reconcile each period | Declared reporting period and linked lifecycle years | Actual vehicles, compartments, sites and suppliers | per declared reference flow | Calibrations; signed records; reconciled allocations; coverage and uncertainty Retain the source and native basis of each measured operand; document the conversion or attribution actually used and whether the supplied result is already per reference flow. |
| cp_support | support_lifecycle | Loading, cleaning, custody loss and collected waste | Supplier tickets, utility meter, custody and waste handover records | site; event_id; provider_id; included_cells; water; handling_native_activity; cargo_in_out_stock_loss_return; waste_identity_receiver_mass; fate; period; N; allocation_share; uncertainty | Reconcile gate and custody ledger with signed handovers; keep loss, return, evaporation, collected wastewater and direct releases distinct; identify provider-covered cells and aggregate attributable native quantities before one N division. Keep native observations and reconciliation totals on their recorded basis. For burden rows, attribute only the still-shared total and divide an assigned total only by positive qualified output of the same cohort and gate. Preserve already equivalent per-reference results. At zero output retain the burden for documented disposition. Record independently measured deliveries, releases and transfers at their own gates; any allocation applies to burdens. | kg; native supplier unit | Each event; reconcile each period | Declared reporting period and linked lifecycle years | Actual vehicles, compartments, sites and suppliers | per declared reference flow | Calibrations; signed records; reconciled allocations; coverage and uncertainty Retain the source and native basis of each measured operand; document the conversion or attribution actually used and whether the supplied result is already per reference flow. |
| cp_assets | support_lifecycle | Vehicle, refrigeration and shared infrastructure lifecycle | Asset bill of materials, supplier lifecycle scope and maintenance register | asset_cohort; configuration; initial_components_included; native_delivered_quantity; manufacture_install_maintenance_replacement_retirement_dates; all_user_useful_duty; attributed_duty; providers_sites_periods; native_unit; N; uncertainty | Verify assembly versus component scope, each lifecycle event and all-user cohort denominator; multiply native quantity by actual attributable duty / positive total same-cohort useful duty then divide once by N, replacing provider-covered cells only. Keep native observations and reconciliation totals on their recorded basis. For burden rows, attribute only the still-shared total and divide an assigned total only by positive qualified output of the same cohort and gate. Preserve already equivalent per-reference results. At zero output retain the burden for documented disposition. | Item(s); kg; native duty and service units | Each event; reconcile each period | Declared reporting period and linked lifecycle years | Actual vehicles, compartments, sites and suppliers | per declared reference flow | Calibrations; signed records; reconciled allocations; coverage and uncertainty Retain the source and native basis of each measured operand; document the conversion or attribution actually used and whether the supplied result is already per reference flow. |
| cp_expand_refrigerated_vehicle_assembly | support_lifecycle | Mandatory identity expansion refrigerated_vehicle_assembly (inputs/product): Complete refrigerated road freight vehicle assembly at delivery | collected_record | requirement_id=refrigerated_vehicle_assembly; process_id=support_lifecycle; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; asset_or_reusable_id; model_configuration; included_initial_components; lifecycle_phase; manufacture_native_quantity; target_duty; all_user_same_cohort_lifetime_duty; replacement_event; provider_coverage_cells; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; supply_or_service_gate; accepted_service_demand; provider_functional_unit; provider_intensity_basis; covered_lifecycle_stages | Actual complete truck or road-car assembly, specification, initial cooling equipment/battery/tyres/body inclusion and manufacturing gate required. This is manufacturing supply, not a whole-life transport service. Record actual additions, replacements, maintenance and retirement separately without duplicating initial included components. Treat this scope as a mandatory identification requirement, not an exchange. Use the original node protocol and its records; separate every actual identity, gate and independent function before quantification, then apply the retained amount/basis/evidence instructions to each compatible concrete row separately. Never use an aggregate amount across heterogeneous identities or infer the native property/unit from a group label. A conclusion that no occurrence took place must be supported by evidence; unknown applicability or identity blocks completion. For the physical asset or reusable item specified here, verify its supply gate, included initial parts, actual replacements, maintenance, cleaning, failure and retirement records. A lease or inclusive supplier contract requires an explicit coverage decision: where a delivered service is within this scope measure its accepted native demand and trace only uncovered asset stages. For a directly modelled asset, use same-cohort target duty over supported positive lifetime duty of all users; do not charge the whole facility to one service. Explicit branches (activate only on actual applicable records): refrigerated_vehicle_assembly_manufacture. For every applicability decision retain evidence. An evidenced absence closes only the stated scope and period; missing records remain unresolved. For a present requirement, map every occurrence to concrete row IDs and compatible native quantities, or to exact already-covered rows/provider cells, with a reason for each exclusion. Evidence must cover identity, support unit, calculation, source records and all fates. Existing and newly added branches are mutually exclusive coverage of the same event; never count the protocol itself as an exchange. Completion requires no unassigned occurrence, no duplicate coverage and no unresolved relevant quantity or identity. Collect raw fields for the evidenced branch. For each inapplicable operand record the branch decision; missing applicable quantities remain unresolved. | Physical asset or reusable article in its verified manufacture/supply unit; compatible duty for the same cohort; delivered service in its native functional unit where in scope | Every actual occurrence and each evidenced absence decision | Full declared cohort and attributable asset life/linked events | Actual responsible sites/providers of this process only | Reconcile native event totals first. Combine only the same identity, state, unit, gate and period. Apply the matching calculation once to each resulting row: assign only still-shared burdens; divide a target total only by positive qualified output on the same basis. Keep already equivalent per-reference values and resolve zero-output periods without division. | For an asset use the quantity at its documented supply gate times target duty / positive all-user lifetime duty for that cohort. Record configuration, commissioning, replacement and retired or remaining life. If the scope includes a delivered service, use its verified native intensity times matching delivered demand and retain the coverage record; charge uncovered phases separately. For a physical asset measured in Number of items / Item(s), retain the measured supply quantity and the separate lifetime-duty unit. For a matching asset quantity or independently verified service result at the stated gate, apply the following quantity rule only at its specified attribution and normalization state: attributed_vehicle_manufacture_items / N Preserve original records, applied factors and resulting units. Value mode: calculated_value; Specificity: site_specific; Normalization basis: per declared reference flow; Basis kind: reference_flow; Evidence kind: calculated_from_collection; Collection protocol: cp_assets; Sources: unsd-cpc3-65111; ghg-product-2011. Require original records, exact native support and per-concrete-row verification; these instructions do not supply a missing identity or numerical value. Completion gate: check_occurrence_completion. |
| cp_expand_road_infrastructure_service | support_lifecycle | Mandatory identity expansion road_infrastructure_service (inputs/product): Attributable road infrastructure lifecycle service | collected_record | requirement_id=road_infrastructure_service; process_id=support_lifecycle; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; provider_contract; independent_function; provider_gates; native_functional_unit; delivered_quantity; covered_process_phase_cells; uncovered_foreground_rows; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; provider_functional_unit; accepted_service_demand; provider_intensity_basis; covered_service_stages | Actual road construction, maintenance and retirement service at documented native provider unit and vehicle class/load/duty basis. Provider-covered lifecycle cells replace corresponding foreground cells once. Do not infer an invented universal road lifetime or axle factor. Treat this scope as a mandatory identification requirement, not an exchange. Use the original node protocol and its records; separate every actual identity, gate and independent function before quantification, then apply the retained amount/basis/evidence instructions to each compatible concrete row separately. Never use an aggregate amount across heterogeneous identities or infer the native property/unit from a group label. A conclusion that no occurrence took place must be supported by evidence; unknown applicability or identity blocks completion. Apply these recording instructions only to the stated inputs/product identity and gate (Attributable road infrastructure lifecycle service). Activate only for an actually contracted independent function within this PCR scope. Record provider contract, delivered service function, gates, native functional unit, measured delivered quantity and exact covered processes/life stages. Compare each covered cell with owned activities; use complete-provider coverage or the uncovered foreground activity once. Do not substitute monetary spend, a material mass or an assumed item count for the actual function. A provider of the PCR final product cannot recursively duplicate the same final service. For every applicability decision retain evidence. An evidenced absence closes only the stated scope and period; missing records remain unresolved. For a present requirement, map every occurrence to concrete row IDs and compatible native quantities, or to exact already-covered rows/provider cells, with a reason for each exclusion. Evidence must cover identity, support unit, calculation, source records and all fates. Existing and newly added branches are mutually exclusive coverage of the same event; never count the protocol itself as an exchange. Completion requires no unassigned occurrence, no duplicate coverage and no unresolved relevant quantity or identity. Collect raw fields for the evidenced branch. For each inapplicable operand record the branch decision; missing applicable quantities remain unresolved. | Verified native functional unit of the contracted delivery; Item(s) only for independently countable accepted results | Every actual occurrence and each evidenced absence decision | Full declared cohort and attributable asset life/linked events | Actual responsible sites/providers of this process only | Reconcile native event totals first. Combine only the same identity, state, unit, gate and period. Apply the matching calculation once to each resulting row: assign only still-shared burdens; divide a target total only by positive qualified output on the same basis. Keep already equivalent per-reference values and resolve zero-output periods without division. | Use the measured accepted quantity at the specified gate. Multiply supplier intensity by demand in that same native unit only when converting an intensity to a total. Record the contract scope, acceptance, native unit and covered stages. Use time only for a delivered time-based function. For an accepted service on the basis specified by its contract, apply the following quantity rule only at its specified attribution and normalization state: attributed_native_road_service / N Preserve original records, applied factors and resulting units. Value mode: calculated_value; Specificity: site_specific; Normalization basis: per declared reference flow; Basis kind: reference_flow; Evidence kind: calculated_from_collection; Collection protocol: cp_assets; Sources: unsd-cpc3-65111; ghg-product-2011. Require original records, exact native support and per-concrete-row verification; these instructions do not supply a missing identity or numerical value. Completion gate: check_occurrence_completion. |
| cp_expand_terminal_handling_service | support_lifecycle | Mandatory identity expansion terminal_handling_service (inputs/product): Contracted loading and unloading service | collected_record | requirement_id=terminal_handling_service; process_id=support_lifecycle; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_support; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; provider_contract; independent_function; provider_gates; native_functional_unit; delivered_quantity; covered_process_phase_cells; uncovered_foreground_rows; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; provider_functional_unit; accepted_service_demand; provider_intensity_basis; covered_service_stages | Conditional actual loading/unloading/transfer provider service within this transport contract. Declare gate, energy, assets and cargo coverage; independent third-party terminal duties are attached upstream once or explicitly excluded with a boundary reason. Treat this scope as a mandatory identification requirement, not an exchange. Use the original node protocol and its records; separate every actual identity, gate and independent function before quantification, then apply the retained amount/basis/evidence instructions to each compatible concrete row separately. Never use an aggregate amount across heterogeneous identities or infer the native property/unit from a group label. A conclusion that no occurrence took place must be supported by evidence; unknown applicability or identity blocks completion. Apply these recording instructions only to the stated inputs/product identity and gate (Contracted loading and unloading service). Activate only for an actually contracted independent function within this PCR scope. Record provider contract, delivered service function, gates, native functional unit, measured delivered quantity and exact covered processes/life stages. Compare each covered cell with owned activities; use complete-provider coverage or the uncovered foreground activity once. Do not substitute monetary spend, a material mass or an assumed item count for the actual function. A provider of the PCR final product cannot recursively duplicate the same final service. For every applicability decision retain evidence. An evidenced absence closes only the stated scope and period; missing records remain unresolved. For a present requirement, map every occurrence to concrete row IDs and compatible native quantities, or to exact already-covered rows/provider cells, with a reason for each exclusion. Evidence must cover identity, support unit, calculation, source records and all fates. Existing and newly added branches are mutually exclusive coverage of the same event; never count the protocol itself as an exchange. Completion requires no unassigned occurrence, no duplicate coverage and no unresolved relevant quantity or identity. Collect raw fields for the evidenced branch. For each inapplicable operand record the branch decision; missing applicable quantities remain unresolved. | Verified native functional unit of the contracted delivery; Item(s) only for independently countable accepted results | Every actual occurrence and each evidenced absence decision | Full declared cohort and attributable asset life/linked events | Actual responsible sites/providers of this process only | Reconcile native event totals first. Combine only the same identity, state, unit, gate and period. Apply the matching calculation once to each resulting row: assign only still-shared burdens; divide a target total only by positive qualified output on the same basis. Keep already equivalent per-reference values and resolve zero-output periods without division. | Use the measured accepted quantity at the specified gate. Multiply supplier intensity by demand in that same native unit only when converting an intensity to a total. Record the contract scope, acceptance, native unit and covered stages. Use time only for a delivered time-based function. For an accepted service on the basis specified by its contract, apply the following quantity rule only at its specified attribution and normalization state: attributed_native_handling_service / N Preserve original records, applied factors and resulting units. Value mode: calculated_value; Specificity: site_specific; Normalization basis: per declared reference flow; Basis kind: reference_flow; Evidence kind: calculated_from_collection; Collection protocol: cp_support; Sources: unsd-cpc3-65111; ghg-product-2011. Require original records, exact native support and per-concrete-row verification; these instructions do not supply a missing identity or numerical value. Completion gate: check_occurrence_completion. |
| cp_expand_wash_wastewater | support_lifecycle | Mandatory identity expansion wash_wastewater (outputs/waste): Collected refrigerated-body cleaning wastewater | collected_record | requirement_id=wash_wastewater; process_id=support_lifecycle; required_direction=outputs; required_flow_type=waste; original_collection_protocol=cp_support; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; waste_origin_event; material_or_true_mixture; moisture_basis; container_tare; opening_waste_stock; generated_waste; received_waste; handover_quantity; closing_waste_stock; onsite_treatment; receiver_id; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | Actual collected cleaning stream with cargo residues/cleaning chemicals and receiving treatment known. Split streams with incompatible composition or receiver; distinguish evaporation, carried water and direct release. Treat this scope as a mandatory identification requirement, not an exchange. Use the original node protocol and its records; separate every actual identity, gate and independent function before quantification, then apply the retained amount/basis/evidence instructions to each compatible concrete row separately. Never use an aggregate amount across heterogeneous identities or infer the native property/unit from a group label. A conclusion that no occurrence took place must be supported by evidence; unknown applicability or identity blocks completion. Apply these recording instructions only to the stated outputs/waste identity and gate (Collected refrigerated-body cleaning wastewater). Activate when this process actually generates or receives the specified waste. Record material/formulation or genuine co-collected mixture, wet/dry state, container tare, origin event, stored quantities, handover gate and actual receiver. Reconcile generation + opening stock + receipts = handovers + closing stock + separately recorded onsite treatment. Different separately collected wastes require different rows; one genuine receiving mixture may remain one row, with composition as a nonadditive audit. Useful recovery, customer-retained items and waste are distinct fates; no automatic substitution credit. For every applicability decision retain evidence. An evidenced absence closes only the stated scope and period; missing records remain unresolved. For a present requirement, map every occurrence to concrete row IDs and compatible native quantities, or to exact already-covered rows/provider cells, with a reason for each exclusion. Evidence must cover identity, support unit, calculation, source records and all fates. Existing and newly added branches are mutually exclusive coverage of the same event; never count the protocol itself as an exchange. Completion requires no unassigned occurrence, no duplicate coverage and no unresolved relevant quantity or identity. Collect raw fields for the evidenced branch. For each inapplicable operand record the branch decision; missing applicable quantities remain unresolved. | Receiver-accepted native quantity of the specific waste or genuinely co-collected mixture in its measured state | Every actual occurrence and each evidenced absence decision | Full declared cohort and attributable asset life/linked events | Actual responsible sites/providers of this process only | Reconcile native event totals first. Combine only the same identity, state, unit, gate and period. Apply the matching calculation once to each resulting row: assign only still-shared burdens; divide a target total only by positive qualified output on the same basis. Keep already equivalent per-reference values and resolve zero-output periods without division. | Match generation, retained stock, onsite treatment and measured handover to receiver records. Separate mixed-stream quantity from constituent measurements; wet/dry or mass/volume conversion needs matching composition or density. Receiver transfer and direct environmental release have distinct gates. For the stated physical identity and matching input basis, apply the following quantity rule only at its specified attribution and normalization state: attributed_collected_wash_wastewater / N Preserve original records, applied factors and resulting units. Value mode: calculated_value; Specificity: site_specific; Normalization basis: per declared reference flow; Basis kind: reference_flow; Evidence kind: calculated_from_collection; Collection protocol: cp_support; Sources: unsd-cpc3-65111; ghg-product-2011. Require original records, exact native support and per-concrete-row verification; these instructions do not supply a missing identity or numerical value. Completion gate: check_occurrence_completion. |
| cp_expand_spoiled_cargo_waste | support_lifecycle | Mandatory identity expansion spoiled_cargo_waste (outputs/waste): Spoiled refrigerated cargo at waste handover | collected_record | requirement_id=spoiled_cargo_waste; process_id=support_lifecycle; required_direction=outputs; required_flow_type=waste; original_collection_protocol=cp_support; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; waste_origin_event; material_or_true_mixture; moisture_basis; container_tare; opening_waste_stock; generated_waste; received_waste; handover_quantity; closing_waste_stock; onsite_treatment; receiver_id; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | Only actual carrier-owned waste crossing the service boundary, identified by cargo and receiver; food, medicine and other materials are not one interchangeable waste identity. Returned recoverable cargo remains cargo custody ledger rather than invented waste. The transport service excludes original cargo production, but physical spoilage and treatment responsibility must be disclosed to the cargo product model without duplicate cargo manufacture. Treat this scope as a mandatory identification requirement, not an exchange. Use the original node protocol and its records; separate every actual identity, gate and independent function before quantification, then apply the retained amount/basis/evidence instructions to each compatible concrete row separately. Never use an aggregate amount across heterogeneous identities or infer the native property/unit from a group label. A conclusion that no occurrence took place must be supported by evidence; unknown applicability or identity blocks completion. Apply these recording instructions only to the stated outputs/waste identity and gate (Spoiled refrigerated cargo at waste handover). Activate when this process actually generates or receives the specified waste. Record material/formulation or genuine co-collected mixture, wet/dry state, container tare, origin event, stored quantities, handover gate and actual receiver. Reconcile generation + opening stock + receipts = handovers + closing stock + separately recorded onsite treatment. Different separately collected wastes require different rows; one genuine receiving mixture may remain one row, with composition as a nonadditive audit. Useful recovery, customer-retained items and waste are distinct fates; no automatic substitution credit. For every applicability decision retain evidence. An evidenced absence closes only the stated scope and period; missing records remain unresolved. For a present requirement, map every occurrence to concrete row IDs and compatible native quantities, or to exact already-covered rows/provider cells, with a reason for each exclusion. Evidence must cover identity, support unit, calculation, source records and all fates. Existing and newly added branches are mutually exclusive coverage of the same event; never count the protocol itself as an exchange. Completion requires no unassigned occurrence, no duplicate coverage and no unresolved relevant quantity or identity. Collect raw fields for the evidenced branch. For each inapplicable operand record the branch decision; missing applicable quantities remain unresolved. | Receiver-accepted native quantity of the specific waste or genuinely co-collected mixture in its measured state | Every actual occurrence and each evidenced absence decision | Full declared cohort and attributable asset life/linked events | Actual responsible sites/providers of this process only | Reconcile native event totals first. Combine only the same identity, state, unit, gate and period. Apply the matching calculation once to each resulting row: assign only still-shared burdens; divide a target total only by positive qualified output on the same basis. Keep already equivalent per-reference values and resolve zero-output periods without division. | Match generation, retained stock, onsite treatment and measured handover to receiver records. Separate mixed-stream quantity from constituent measurements; wet/dry or mass/volume conversion needs matching composition or density. Receiver transfer and direct environmental release have distinct gates. For a row requiring Mass / kg, verify measurement or conversion to that basis. For the stated physical identity and matching input basis, apply the following quantity rule only at its specified attribution and normalization state: attributed_spoiled_cargo_waste_kg / N Preserve original records, applied factors and resulting units. Value mode: calculated_value; Specificity: site_specific; Normalization basis: per declared reference flow; Basis kind: reference_flow; Evidence kind: calculated_from_collection; Collection protocol: cp_support; Sources: unsd-cpc3-65111; ghg-product-2011. Require original records, exact native support and per-concrete-row verification; these instructions do not supply a missing identity or numerical value. Completion gate: check_occurrence_completion. |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_service | all inventory rows except reference output | x_ref = sum(x_native_attributed) / N; N is actual eligible completed consignment legs, positive and same cohort/period; reference output is 1 Item(s). | x_native_attributed; N; cp_movement; cp_cold; cp_support; cp_assets | x_ref | ghg-product-2011 |
| cargo_transport_activity | reported supplementary tonne-distance | T = sum(m_i_t * d_i_km) over actual loaded segments with actual transported mass; empty distance and cooling hours are recorded separately and retain burdens. T is not a replacement for completed N. | m_i_t; d_i_km; cp_movement | T | ghg-product-2011 |
| stock_reconciliation | fuel, coolant and cargo by actual ledger | opening + receipts + inward_transfers = closing + useful_use_or_delivery + outward_transfers + measured_loss; terms are mutually exclusive boundary-ledger destinations. Internal recovered material is retained in closing stock or subsequently recorded once at its actual use/outward gate, never an additional recovery term. Split every term by actual material/equipment/period and do not infer loss from one missing term. | actual stocks; receipts; transfers; use; recovery; loss; cp_movement; cp_cold; cp_support | closed native ledger | ghg-product-2011 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| traceability | all nodes | Retain raw record, calibration, native unit, gate, actual state, period/site, allocation decision and uncertainty for each exchange; supplier model comparability is explicit. | Signed records and meter/service logs |
| temperature_quality | cold_control and reference output | Actual cargo-specific temperature/time and acceptance requirements, sensor position and excursions are mandatory; no default setpoint, shelf life or zero spoilage. | Contracts; logger records; acceptance and disposition |
| missing_range | quantities and factors | No universal numerical fuel intensity, load factor, empty return, refrigeration leakage, asset lifetime or emission factor is supplied. Missing actual evidence remains incomplete; empirical guardrails require an independent compatible reference sample and never use this batch maximum to validate itself. | Data completeness register; independent sample provenance |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| reference_gate | all nodes | Require actual road refrigerated mode, cargo/quality/temperature/OD/distance/time and accepted completion records; N must be positive. Reject temperature-excursion cargo from qualified output until documented disposition; failed duty is retained. Equal Item(s) with different consignments or distances is not equivalent performance. | ghg-product-2011 |
| native_fates | all nodes | Close fuel/stock/burn/spill and refrigerant initial/recharge/recovery/stock/release ledgers by equipment and period; require species and destination before direct emissions. Match property/unit/gate and receiving medium; no charge=leak, supplied=burned, waste=direct emission or AC=DC substitution. | ghg-product-2011 |
| coverage_allocation | all nodes | Validate every actual mode/duty and shared node/provider/asset/terminal cell, all-user share closure, positive compatible lifetime and normalization once. Unknown actual technology, receiver, quantity, supplier lifecycle coverage or life is incomplete. Enumerate every contributing site and period, include its eligible output and burden before pooled normalization; never average site intensities without justified weighting. | ghg-product-2011 |
| exchange_expansion | all nodes | Require one verified concrete UUID and compatible native support for each final implemented exchange; unresolved semantic cards and count support alone are not final service identities. Compare EN/ZH ordered IDs, formulas, qualifiers, protocols, source references and canonical projection; record all skipped/inconclusive checks. | ghg-product-2011 |
| atomic_road_movement | road_movement | Reject any exchange whose identity combines alternative materials, independently supplied assets/services, different waste streams, pollutant species, carbon origins, phases, particle fractions or environmental compartments. For every applicable cp_expand_ requirement in this node require an occurrence/absence record and exhaustive concrete-row register, each with its own identity, gate, verified UUID, native property/unit, quantity, source record, calculation and exclusive responsibility. A supplier-covered whole assembly or genuinely collected mixture remains one actual supplied/collected identity; do not invent constituent exchanges. Never bind a requirement label/id, generic NOx/VOC/PM total, unspecified physical release, or heterogeneous list to one UUID. Reconcile all requirement children, source events, provider-covered cells and cross-node transfers; no missing-as-zero or double counting. Unknown identity, applicability, quantity or fate blocks a complete foreground package and final TIDAS exchange production. The PCR checker does not verify these foreground facts; retain their row-addressable evidence for review. | ghg-product-2011 |
| atomic_cold_control | cold_control | Reject any exchange whose identity combines alternative materials, independently supplied assets/services, different waste streams, pollutant species, carbon origins, phases, particle fractions or environmental compartments. For every applicable cp_expand_ requirement in this node require an occurrence/absence record and exhaustive concrete-row register, each with its own identity, gate, verified UUID, native property/unit, quantity, source record, calculation and exclusive responsibility. A supplier-covered whole assembly or genuinely collected mixture remains one actual supplied/collected identity; do not invent constituent exchanges. Never bind a requirement label/id, generic NOx/VOC/PM total, unspecified physical release, or heterogeneous list to one UUID. Reconcile all requirement children, source events, provider-covered cells and cross-node transfers; no missing-as-zero or double counting. Unknown identity, applicability, quantity or fate blocks a complete foreground package and final TIDAS exchange production. The PCR checker does not verify these foreground facts; retain their row-addressable evidence for review. | ghg-product-2011 |
| atomic_support_lifecycle | support_lifecycle | Reject any exchange whose identity combines alternative materials, independently supplied assets/services, different waste streams, pollutant species, carbon origins, phases, particle fractions or environmental compartments. For every applicable cp_expand_ requirement in this node require an occurrence/absence record and exhaustive concrete-row register, each with its own identity, gate, verified UUID, native property/unit, quantity, source record, calculation and exclusive responsibility. A supplier-covered whole assembly or genuinely collected mixture remains one actual supplied/collected identity; do not invent constituent exchanges. Never bind a requirement label/id, generic NOx/VOC/PM total, unspecified physical release, or heterogeneous list to one UUID. Reconcile all requirement children, source events, provider-covered cells and cross-node transfers; no missing-as-zero or double counting. Unknown identity, applicability, quantity or fate blocks a complete foreground package and final TIDAS exchange production. The PCR checker does not verify these foreground facts; retain their row-addressable evidence for review. | ghg-product-2011 |
| check_occurrence_completion | all actual rows and identification protocols | Retain applicability evidence and map each actual event to its inventory row or verified provider coverage. Evidence is required for absence; unknown remains unresolved. For each compatible identity, state, unit, period and gate, reconcile receipts and opening stock against closing stock and exclusive physical exits. In a consumables issue ledger, distinguish unused returns, internal issues and actual use for successful, failed and reworked duties. In a custody or material balance use opening stock + external receipts + paired internal receipts = closing stock + paired internal dispatch + accepted external deliveries + unused external returns + used goods or recovered material sent out + waste sent out + direct releases + quantity consumed or transformed within this boundary. Where that identity arises inside the gate, add evidenced formation or birth to its receipts and link the originating event. Cancel internal formation and transfers across the enclosing conserved-material or elemental balance. Classify each event once, include retained recovered stock at closing, and distinguish transfers from use. Apply the specific custody, phase, transformation or elemental rule on its own compatible basis; exclude downstream products of already counted transformation from the same exit total. Measure operands independently and investigate unresolved residuals. Keep physical totals separate from burden allocation. For a raw shared burden use Q_raw × s / R, where s is the evidenced target driver divided by the positive driver total for all eligible users of that same pool and period. Use Q_target / R for an already assigned target total and retain q_ref unchanged for an already equivalent per-reference result. For a provider intensity first multiply by measured demand in its matching native unit. Apply an additional share only for a distinct, still-shared stage. R is the positive qualified output quantity in the same reference unit, cohort and gate. Retain failed and partial duties without enlarging R; for zero output retain the burden with evidenced carry-forward or final disposition. For owned assets use the same-cohort all-user lifetime duty and exclusive initial-component coverage. Delivered services replace only their documented covered stages. Unresolved applicable identity, quantity, support unit, fate or allocation denominator prevents final dataset completion. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Qualified refrigerated road freight service attached to actual cargo supply chains |
| allowed_use | Compatible cargo/amount/OD/distance/cold quality/technology/provider scope with disclosed uncertainty |
| excluded_use | Cargo manufacture; other modes; unsupported equal-count comparison; failed-only pool intensity; unresolved final exchanges |
| required_metadata | Reference qualifiers; actual records; provider gates; nodes and coverage; allocation; all-user life; sources and units |
| required_quality_disclosure | Missing identities/quantities, temporal/site representativeness, rejected cargo and failed duty, leakage/fates, uncertainty and skipped checks |
| update_trigger | Cargo/route/quality/technology/asset/provider change or new verified quantities/identities |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-65111 | official_guidance | UNSD CPC 3.0, 65111; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Official full service scope; no numeric activity or count unit prescribed |
| ghg-product-2011 | standard | WRI/WBCSD Product Life Cycle Accounting and Reporting Standard (2011), chapters 6–10; https://ghgprotocol.org/sites/default/files/ghgp/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Boundary/data/allocation principles; specific extended assets and record algorithms are declared PCR choices, not universal standard factors |
| unece-atp-current | official_guidance | UNECE ATP text and status, version applicable from 25 August 2026; https://unece.org/transport/road-transport/text-and-status-agreement | Equipment and temperature-control applicability questions for eligible perishable-food transport; no assumption all goods or domestic trips covered |

