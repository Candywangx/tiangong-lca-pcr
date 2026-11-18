---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.freight-transport-services.road-transport-services-of-dry-bulk
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Dry-bulk road freight consignment-leg service

## 1. Scope and Applicability

This PCR covers actual road transport of dry solid bulk goods, including cereals, flours, cement, sand, coal and other actual dry bulks, with all applicable open/covered, gravity/tipping, silo or pneumatic loading and discharge arrangements. Cargo and equipment are declared from records; a pressure-vessel body used for dry powder does not make its cargo a bulk liquid/gas. One completed qualified consignment leg is counted only with actual cargo quantity, moisture/basis, origin/destination, distance, delivery quality and elapsed time; equal counts alone are not comparable.

Exclude liquid/gas tanker service, separately classified intermodal-container transport, packaged general cargo, other transport modes, independent warehouse/storage and cargo manufacture or processing. Actual equipment/function resolves adjacent classification overlap without double output; dry-bulk cargo is not excluded merely for being carried in a pressure vessel. Loading, unloading, driver/vehicle auxiliaries, empty/failed/return duties, cleaning, dust/spill control and full attributed assets remain covered according to real ownership/gates.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.freight-transport-services.road-transport-services-of-dry-bulk |
| classification_refs | CPC 3.0 65117; exact |
| covered_products | Complete actual dry-solid bulk road freight including cereals, flours, cement, sand, coal and other dry bulks |
| excluded_products | Liquid/gas tanker, separately classified intermodal-container or packaged cargo, other modes, standalone storage and cargo manufacture |
| representative_product | Completed dry-bulk road freight consignment leg |
| production_route | Actual dry-bulk road movement, loading/discharge/control and complete attributed support lifecycle |
| market_state | Actual accepted consignment leg at declared delivery gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed dry-bulk road freight consignment leg |
| How much | 1 actual accepted dry-bulk road consignment leg, with cargo amount/moisture basis declared |
| How well | Actual material/state, quantity, OD/distance, quality/contamination and handling contract gates |
| How long or cycle | Actual acceptance-to-delivery interval plus attributed full empty/failed/support and lifecycle periods |
| reference_flow_link | completed_dry_bulk_road_leg |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed dry-bulk road freight consignment leg |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | cargo_material_state; actual_mass_volume; moisture_dry_wet_basis; acceptance_delivery_gates; actual_OD_distance_time; quality_contamination; vehicle_body_loading_discharge_method; pneumatic_air_pressure_temperature_humidity; actual_propulsion_PTO; dust_species_size_medium; capture_spill_recovery_receiver; period_completed_N; empty_failed_return_duty; allocation_all_users; native_provider_coverage; same_asset_all_user_life; uncertainty |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | reference product | Number of items | Item(s) | Completed consignment Count is not cargo mass, tonne-km, vehicle-km, silo capacity or planned dispatch. Require positive completed N and actual material/amount/moisture/OD-distance/quality for comparability. |
| native_basis | all inventory rows | Actual native compatible property | Actual native unit | Preserve actual dry/wet material and dust species/size/compound basis; moisture change is not cargo dry-matter loss. Volume-mass needs actual density/state; compressed-air volume requires declared pressure/temperature/humidity and compatible native reference. Verified kWh to MJ uses 3.6 MJ/kWh. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual cargo acceptance moisture/state, road/body/handling topology and supply/provider/asset gates |
| starting_condition_role | Foreground entry facts do not erase earlier assets/supplies |
| product_classification_scope | Full dry-solid bulk road freight65117; actual function resolves adjacent overlap |
| recursive_input_rule | Actual native subcontracted stages replace matching own cells once |
| upstream_dataset_requirement | Actual material/technology/native unit/state/gate/geography/period and lifecycle coverage |
| disclosure | Cargo custody, complete duties, dust/control/fates, all-user assets/providers, allocation and unknowns |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| full_bulk_scope | all nodes | Cover all actual dry-solid bulk cargo and real vehicle/handling forms; no grain-only, cement-only, diesel-only or tipper-only narrowing. Parent activity is dry-bulk road freight. Open/covered bodies, pneumatic silo equipment, tipping, bottom discharge and actual alternative propulsion change energy, assets, collection and emission interfaces; these branches coexist only when actual segment/event records support them. | unsd-cpc3-65117 |
| cargo_custody | road_movement; bulk_handling | Cargo is the object moved, not consumed fuel or new product output. Record loaded/delivered cargo, carryover, return, retention, spills, sampled/captured dust and real receiver separately by lot and moisture basis. Original cargo production is outside freight service; disclose actual loss/replacement consequences to the downstream cargo LCA without duplicate manufacture. Internal loader-to-vehicle-to-silo transfers share IDs and do not create extra finished freight outputs. | ghg-product-2011 |
| whole_duty | all nodes | Include actual loading/discharge, pneumatic compression or hydraulics, conveying/vibration/filters, stops/idle/waiting, driver support, loaded running, empty reposition/return, failed/stuck/rejected/rescue and cleaning duties attributable to this service. Main-engine power take-off or shared electricity has one fuel/energy owner: partition real metered/native quantity before assigning to movement versus handling, not duplicate engine input and exhaust. | ghg-product-2011 |
| pneumatic_receiver | bulk_handling | For actual pneumatic transfer declare compressor air source, pressure/temperature/humidity and metered duty, power take-off/electric/provider boundary, hose/connection and vehicle/receiver-silo responsibility. Capture real vehicle blowdown, receiver vent/filter, blocked/filter-cleaning events and dust fate separately. Purchased compressed air replaces only matching owned compression supply cells. A receiving silo filtration service cannot automatically cover vehicle-side venting or upstream vehicle compression. | uk-cement-pneumatic-guidance |
| dust_material_fates | bulk_handling; road_movement | Collect actual cargo material/substance and size/basis, moisture and site wind/handling state before choosing dust identities/methods. Distinguish direct air, deposited soil, runoff/dissolved water, collected filters and returned reusable cargo. Do not call all cargo dust PM2.5, silica or inert mineral; grain/flour, cement, sand and coal require their real composition and receiver. Generic aggregate-handling factors do not establish universal road/bulk or pneumatic emissions. Methods need actual applicable domain and documented control performance. | epa-ap42-aggregate-handling |
| whole_assets_provider | support_lifecycle | PCR lifecycle choice includes actual tractor/truck/trailer/body/cover/silo/blower/compressor/hose/filter, batteries/tyres/handling equipment, road/terminal/depot manufacture, installation, repair, replacement and retirement. Delivered manufacture is not a whole-life service. Whole assemblies and included initial components are exclusive; actual supplier-native results replace only documented covered cells. Actual useful life/all-user cohort duty is an allocation denominator, not proof all lifecycle stages are already covered. | ghg-product-2011 |
| actual_row_expansion | all nodes | Every actual unrepresented fuel/electricity/air/water/control chemical/material, asset, provider result, waste or emitted species requires a separate real row_id, one node, direction/type, single identity/state, native quantity/property/unit, same-node protocol and source/gate/receiver/medium/uncertainty. Broad conditional requirement cards must expand to each real exchange and cannot receive one umbrella UUID. Unknown quantity/occurrence remains incomplete, never zero. Separate fuel carbon origin, pollutant compound/element, PM sizes and physical fates. | ghg-product-2011 |

## 6. Process Inventory Structure

Each inventory card represents one independently identifiable product, material/formulation, waste stream, substance or supplied service at a compatible gate, property and unit. A complete supplied assembly or an actually collected mixture may have one identity; its already included constituents are not additional exchanges. The cp_expand_ protocols in section 8 are mandatory identification requirements, never selected flows or quantities to exchange. For every such requirement document actual applicability and enumerate all concrete exchanges with separate row ids. Preserve the full applicable scope and record evidence when no exchange occurs; an unexpanded or unknown requirement is incomplete, never zero. Changing a requirement into a collection protocol does not resolve any missing identity or waive any lifecycle, allocation, measurement or boundary obligation.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| road_movement | Road movement and final cargo-service handover | required | Every eligible service | foreground | completed_dry_bulk_road_leg |
| bulk_handling | Bulk loading, discharge and dust control | required | Actual loading/unloading and related controls within contract | foreground | completed_dry_bulk_road_leg |
| support_lifecycle | Vehicle, body, road and cleaning lifecycle | required | Actual attributable support and asset lifecycle | foreground | completed_dry_bulk_road_leg |

All nodes link one final denominator; bulk_handling and support_lifecycle do not create extra final service completions. Internal cargo transfers are not new cargo purchases or finished outputs.

### Process: Road movement and final cargo-service handover (`road_movement`)

#### Inputs

##### Product flows

###### Diesel fuel (`traction_diesel`)

Conditional actual compatible diesel propulsion supply; preserve formulation/carbon origin, native stock/transfer/spill and actual burn. Delivered blend and its included components are exclusive. Main-engine unloading PTO has a documented disjoint fuel share.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: attributed_traction_diesel_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_movement`
- Sources: `unsd-cpc3-65117`; `ghg-product-2011`

###### Alternating current (`traction_ac`)

Conditional actual external AC at charger input; actual losses/charging/battery native coverage retained. Purchased DC/provider-inclusive propulsion is separate actual identity replacing corresponding AC cells, not duplicate purchase.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: attributed_external_traction_AC_MJ / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_movement`
- Sources: `unsd-cpc3-65117`; `ghg-product-2011`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed dry-bulk road freight consignment leg (`completed_dry_bulk_road_leg`)

Actual accepted completion of declared dry-bulk cargo road consignment with real amount/moisture/basis, route/distance/time and handover quality. Output is freight service, not the cargo itself.

- Selected flow: Completed dry-bulk road freight consignment leg
- Flow property / unit: Number of items / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_movement`
- Sources: `unsd-cpc3-65117`; `ghg-product-2011`

##### Waste flows

##### Elementary flows

###### carbon dioxide (fossil) (`traction_fossil_co2`)

Actual fossil CO2 to air from owned combustion; actual burn/carbon origin/oxidation/retention and compound basis documented, no default factor. PTO/handling share exclusive. Cargo coal carbon is not engine fuel carbon merely because transported.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: attributed_traction_fossil_CO2_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_movement`
- Sources: `unsd-cpc3-65117`; `ghg-product-2011`

### Process: Bulk loading, discharge and dust control (`bulk_handling`)

#### Inputs

##### Product flows

###### Diesel fuel (`handling_diesel`)

Actual separate compatible loading/unload/compressor diesel supply or evidenced share of one main-engine pool; no second assumed engine fuel. Native provider-owned handling fuel already included in a purchased result is not duplicated.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: attributed_handling_diesel_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_handling`
- Sources: `unsd-cpc3-65117`; `ghg-product-2011`

###### Alternating current (`handling_ac`)

Actual owned loading/discharge/filtration/compression AC supply at named gate; separate externally purchased air/service coverage. One motor supply must not be repeated as compressor air upstream purchase.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: attributed_external_handling_AC_MJ / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_handling`
- Sources: `unsd-cpc3-65117`; `ghg-product-2011`

###### Actual externally supplied compressed air for bulk discharge (`purchased_compressed_air`)

Conditional actual externally bought compatible air at stated delivery pressure/temperature/moisture/native volume or other verified property. Replace exact covered owned compression cells only; own compression is not another external supply.

- Selected flow: Actual externally supplied compressed air for bulk discharge
- Flow property / unit: Actual native property / Actual native unit
- Amount rule: attributed_native_external_compressed_air / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_handling`
- Sources: `unsd-cpc3-65117`; `ghg-product-2011`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### carbon dioxide (fossil) (`handling_fossil_co2`)

Actual owned handling/compressor exhaust fossil CO2 to air; shared PTO fuel and exhaust are partitioned once against same event pool. No duplicate supplier-inclusive combustion.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: attributed_handling_fossil_CO2_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_handling`
- Sources: `unsd-cpc3-65117`; `ghg-product-2011`

### Process: Vehicle, body, road and cleaning lifecycle (`support_lifecycle`)

#### Inputs

##### Product flows

###### Complete dry-bulk road vehicle assembly at delivery (`dry_bulk_vehicle_assembly_manufacture`)

One actual complete physical assembly of one documented model/configuration per instantiated row at its manufacturing delivery gate. Different configurations require separate instances and quantities. Activate only when this assembly serves the declared node outside complete-provider coverage. The initial-component inclusion list is part of this identity; do not add included initial components again. Keep actual uncovered maintenance, replacements and end-of-life separately.  Actual truck/tractor-trailer body equipment with compatible specification, initial assemblies and manufacturing gate. Full tipper, silo, pneumatic or covered configuration chosen from actual records; no manufacture-as-whole-life proxy or duplicate initial components.

- Selected flow: Complete dry-bulk road vehicle assembly at delivery
- Flow property / unit: Count / Item(s)
- Amount rule: For each exact same-model assembly cohort: manufactured items * target-attributable useful duty / all-user full-life useful duty / N. Both duty terms use the same compatible basis and cohort; denominators must be evidenced and positive. Apply the target share and final reference normalization once. Initial components covered by this assembly are nonadditive.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: unsd-cpc3-65117; ghg-product-2011


###### Tap water (`cleaning_tap_water`)

Actual compatible tap water at municipal production/supply gate for cleaning/dust controls, with downstream distribution coverage explicit. Other water source/product/density/state requires own actual identity.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: attributed_cleaning_tap_water_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support`
- Sources: `unsd-cpc3-65117`; `ghg-product-2011`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Used lubricating oil (`used_lubricating_oil`)

Actual collected used lubricant at generation, composition and receiver recorded; waste quantity alone is not treatment service or direct soil release. Actual stock and service coverage exclusive.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass / kg
- Amount rule: attributed_used_lubricating_oil_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support`
- Sources: `unsd-cpc3-65117`; `ghg-product-2011`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| physical_shares | all nodes | Avoid allocation by actual lot/segment/equipment metering first. Shared movement burdens follow supported physical cargo load/distance/capacity constraint relationships across all consignments/users; handling/compression/dust-control burdens follow their own actual mass/event/energy causation. Do not impose one universal tonne-distance or equal-consignment share. A documented physical method has precedence; economic fallback needs inability evidence and sensitivity. Shares for the same event close to one. | ghg-product-2011 |
| empty_failed_return | all nodes | Retain causal empty/positioning, failed/stuck/rejected/rescue and return duties before positive eligible completed-N normalization. Only actual accepted final consignment completion is counted; internal handoffs and redelivery cannot duplicate output. N=0 does not yield finite service intensity. Returned reusable cargo, waste and collected dust retain actual disposition rather than all becoming loss. | ghg-product-2011 |
| asset_periods | all nodes | Attribute native manufacturing/each actual lifecycle event using same-cohort consumed duty / positive supported total all-user useful duty, then divide once by N. Preserve construction, installation, repair/replacement/retirement dates, unfinished duty and stock across periods and users; actual terminal/road/provider coverage is exclusive. No universal vehicle/tyre/filter/road life or backhaul ratio. | ghg-product-2011 |
| provider_and_recovery | all nodes | A subcontracted actual freight/handling provider replaces documented native stage cells once; no recursion into own finished service or added duplicate supply/emissions/assets. Actual recovered cargo/dust reuse is linked through real transfer and receiver; do not assume fertilizer/material displacement credit or double-count recovered material as direct emission/waste. | ghg-product-2011 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_movement | road_movement | cargo service, actual propulsion and exhaust | Actual primary meters/manifests/provider records | consignment; cargo_identity; loaded_delivered_mass; each_weighing_wet_mass_moisture_fraction; actual_water_addition_rain_evaporation_retention_outgoing; moisture_basis; OD; distance; time; loaded_empty_failed_return_duty; diesel_opening_receipts_closing_transfers_spill_burn; AC_meter; PTO_share; quality; completed_N; all_users; allocation; period; native_unit; uncertainty; converted_wet_basis_fraction; moisture_conversion_equation | Link weighbridge and signed delivery to telematics/meters and actual shared-engine/PTO pool; close cargo dry-solids custody using each weighing moisture, its separate actual water ledger, and supplied/burned fuel independently before causal allocation and one N normalization. Record whether each moisture observation is wet-basis water mass / wet total mass or dry-basis water mass / dry solids. Retain the original observation, moisture basis, converted wet-basis fraction and conversion equation under exclusive_cargo_ledger before applying the dry-solids formula. Build the qualified denominator from unique accepted output on the declared reference basis. Retain disqualified events and their resource duties separately. Keep the reference amount fixed; normalize only attributable inventory totals by the positive denominator. Keep non-reference rows of this protocol in their own physical units. | Item(s); kg; MJ; km; h | Each event plus period reconciliation | Actual service reporting period plus asset life phases | Actual vehicles/load sites/receiver silos/depots and providers | per declared reference flow | Calibration; signed records; native provenance; causal allocation; uncertainty Retain the source and native basis of each measured operand; document the conversion or attribution actually used and whether the supplied result is already per reference flow. |
| cp_handling | bulk_handling | actual bulk transfer, pressure air, dust controls and fates | Actual primary meters/manifests/provider records | lot_material_composition; each_observation_wet_mass_moisture_fraction; actual_water_addition_rain_evaporation_retention_outgoing; moisture; loading_discharge_method; vehicle_receiver_silo; event_time; mass_before_after; PTO_fuel_AC; air_provider_native_quantity_pressure_temperature_humidity; blower_vent_filter_control; actual_specific_dust_size_medium_mass; collected_returned_waste_receiver; allocation; period; N; uncertainty; converted_wet_basis_fraction; moisture_conversion_equation | Use weighings, actual handling/pressure meters, vehicle and receiver-silo records and applicable species/size-specific dust measurement/method evidence; match captured/returned/direct/waste fate once with actual control state and shared-energy ownership. Record whether each moisture observation is wet-basis water mass / wet total mass or dry-basis water mass / dry solids. Retain the original observation, moisture basis, converted wet-basis fraction and conversion equation under exclusive_cargo_ledger before applying the dry-solids formula. Keep native observations and reconciliation totals on their recorded basis. For burden rows, attribute only the still-shared total and divide an assigned total only by positive qualified output of the same cohort and gate. Preserve already equivalent per-reference results. At zero output retain the burden for documented disposition. Record independently measured deliveries, releases and transfers at their own gates; any allocation applies to burdens. | kg; MJ; actual native air/service units | Each event plus period reconciliation | Actual service reporting period plus asset life phases | Actual vehicles/load sites/receiver silos/depots and providers | per declared reference flow | Calibration; signed records; native provenance; causal allocation; uncertainty Retain the source and native basis of each measured operand; document the conversion or attribution actually used and whether the supplied result is already per reference flow. |
| cp_support | support_lifecycle | cleaning, supplies and collected waste | Actual primary meters/manifests/provider records | site; event; water_source_native_quantity; chemicals; actual_cargo_residue; collected_stream_composition_moisture_native_quantity; retained_evaporated_direct_water; receiver; provider_coverage; allocation; period; N | Reconcile actual supply, custody and signed waste handovers by source/receiver; split incompatible streams and preserve cargo recovery versus waste. Retain provider native scope and allocate real quantity once. Keep native observations and reconciliation totals on their recorded basis. For burden rows, attribute only the still-shared total and divide an assigned total only by positive qualified output of the same cohort and gate. Preserve already equivalent per-reference results. At zero output retain the burden for documented disposition. Record independently measured deliveries, releases and transfers at their own gates; any allocation applies to burdens. | kg; native waste/provider units | Each event plus period reconciliation | Actual service reporting period plus asset life phases | Actual vehicles/load sites/receiver silos/depots and providers | per declared reference flow | Calibration; signed records; native provenance; causal allocation; uncertainty Retain the source and native basis of each measured operand; document the conversion or attribution actually used and whether the supplied result is already per reference flow. |
| cp_assets | support_lifecycle | vehicle blower filter road terminal full lifecycle | Actual primary meters/manifests/provider records | asset_cohort_configuration; delivered_native_quantity; initial_component_coverage; manufacture_install_repair_replace_retire_dates; all_user_useful_duty; attributed_duty; sites_periods_providers; native_unit; N; uncertainty | Verify native assembly/provider gates, each lifecycle event and same-cohort all-user total useful duty; multiply event quantity by attributable duty / positive total useful duty, then divide once by N and retain exclusive provider replacement. Keep native observations and reconciliation totals on their recorded basis. For burden rows, attribute only the still-shared total and divide an assigned total only by positive qualified output of the same cohort and gate. Preserve already equivalent per-reference results. At zero output retain the burden for documented disposition. | Item(s); kg; actual native service duty | Each event plus period reconciliation | Actual service reporting period plus asset life phases | Actual vehicles/load sites/receiver silos/depots and providers | per declared reference flow | Calibration; signed records; native provenance; causal allocation; uncertainty Retain the source and native basis of each measured operand; document the conversion or attribution actually used and whether the supplied result is already per reference flow. |
| cp_expand_captured_bulk_dust_waste | bulk_handling | Mandatory identity expansion captured_bulk_dust_waste (outputs/waste): Collected cargo-specific filter dust waste at handover | collected_record | requirement_id=captured_bulk_dust_waste; process_id=bulk_handling; required_direction=outputs; required_flow_type=waste; original_collection_protocol=cp_handling; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; waste_origin_event; material_or_true_mixture; moisture_basis; container_tare; opening_waste_stock; generated_waste; received_waste; handover_quantity; closing_waste_stock; onsite_treatment; receiver_id; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | Actual captured material with waste status, actual composition/moisture/receiver. Returned useful cargo is a separate custody/product transfer, not automatically waste or avoided-emission credit. Spent filter medium is independently identified when not part of this waste stream. Treat this scope as a mandatory identification requirement, not an exchange. Use the original node protocol and its records; separate every actual identity, gate and independent function before quantification, then apply the retained amount/basis/evidence instructions to each compatible concrete row separately. Never use an aggregate amount across heterogeneous identities or infer the native property/unit from a group label. A conclusion that no occurrence took place must be supported by evidence; unknown applicability or identity blocks completion. Apply these recording instructions only to the stated outputs/waste identity and gate (Collected cargo-specific filter dust waste at handover). Activate when this process actually generates or receives the specified waste. Record material/formulation or genuine co-collected mixture, wet/dry state, container tare, origin event, stored quantities, handover gate and actual receiver. Reconcile generation + opening stock + receipts = handovers + closing stock + separately recorded onsite treatment. Different separately collected wastes require different rows; one genuine receiving mixture may remain one row, with composition as a nonadditive audit. Useful recovery, customer-retained items and waste are distinct fates; no automatic substitution credit. For every applicability decision retain evidence. An evidenced absence closes only the stated scope and period; missing records remain unresolved. For a present requirement, map every occurrence to concrete row IDs and compatible native quantities, or to exact already-covered rows/provider cells, with a reason for each exclusion. Evidence must cover identity, support unit, calculation, source records and all fates. Existing and newly added branches are mutually exclusive coverage of the same event; never count the protocol itself as an exchange. Completion requires no unassigned occurrence, no duplicate coverage and no unresolved relevant quantity or identity. Collect raw fields for the evidenced branch. For each inapplicable operand record the branch decision; missing applicable quantities remain unresolved. | Receiver-accepted native quantity of the specific waste or genuinely co-collected mixture in its measured state | Every actual occurrence and each evidenced absence decision | Full declared cohort and attributable asset life/linked events | Actual responsible sites/providers of this process only | Reconcile native event totals first. Combine only the same identity, state, unit, gate and period. Apply the matching calculation once to each resulting row: assign only still-shared burdens; divide a target total only by positive qualified output on the same basis. Keep already equivalent per-reference values and resolve zero-output periods without division. | Match generation, retained stock, onsite treatment and measured handover to receiver records. Separate mixed-stream quantity from constituent measurements; wet/dry or mass/volume conversion needs matching composition or density. Receiver transfer and direct environmental release have distinct gates. For a row requiring Mass / kg, verify measurement or conversion to that basis. For the stated physical identity and matching input basis, apply the following quantity rule only at its specified attribution and normalization state: attributed_actual_collected_dust_waste_kg / N Preserve original records, applied factors and resulting units. Value mode: calculated_value; Specificity: site_specific; Normalization basis: per declared reference flow; Basis kind: reference_flow; Evidence kind: calculated_from_collection; Collection protocol: cp_handling; Sources: unsd-cpc3-65117; ghg-product-2011. Require original records, exact native support and per-concrete-row verification; these instructions do not supply a missing identity or numerical value. Completion gate: check_occurrence_completion. |
| cp_expand_cargo_dust_air | bulk_handling | Mandatory identity expansion cargo_dust_air (outputs/elementary): Actual cargo-specific dust substance and size fraction to air | collected_record | requirement_id=cargo_dust_air; process_id=bulk_handling; required_direction=outputs; required_flow_type=elementary; original_collection_protocol=cp_handling; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; substance_identity; chemical_form; environmental_compartment; carbon_origin; particle_fraction_or_count_basis; measured_or_calculated_release; species_conversion_evidence; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | Unresolved requirement for each actual independently reported cargo substance/particle fraction and air subcompartment at loading/discharge/blowdown. Split actual constituent/size/location; no universal PM2.5/silica/coal UUID and no double counting particulate total versus included constituent in an impact method. Treat this scope as a mandatory identification requirement, not an exchange. Use the original node protocol and its records; separate every actual identity, gate and independent function before quantification, then apply the retained amount/basis/evidence instructions to each compatible concrete row separately. Never use an aggregate amount across heterogeneous identities or infer the native property/unit from a group label. A conclusion that no occurrence took place must be supported by evidence; unknown applicability or identity blocks completion. Apply these recording instructions only to the stated outputs/elementary identity and gate (Actual cargo-specific dust substance and size fraction to air). Activate for an actual release to its documented receiving compartment, supported by observation or an applicable calculation. Record exact substance/form, source or receiving compartment, fossil/biogenic origin where relevant, particle fraction or count-size basis where relevant and sampling period. Preserve reported elemental versus molecular bases; conversion needs stoichiometry and compatible species evidence. Contained pollutants belong to the receiver stream until the actual environmental release boundary. Do not replace missing species with CO2, NOx, VOC, COD or a generic particulate flow. For every applicability decision retain evidence. An evidenced absence closes only the stated scope and period; missing records remain unresolved. For a present requirement, map every occurrence to concrete row IDs and compatible native quantities, or to exact already-covered rows/provider cells, with a reason for each exclusion. Evidence must cover identity, support unit, calculation, source records and all fates. Existing and newly added branches are mutually exclusive coverage of the same event; never count the protocol itself as an exchange. Completion requires no unassigned occurrence, no duplicate coverage and no unresolved relevant quantity or identity. Collect raw fields for the evidenced branch. For each inapplicable operand record the branch decision; missing applicable quantities remain unresolved. | Verified native property of this substance, resource or physical emission at its actual compartment | Every actual occurrence and each evidenced absence decision | Full declared cohort and attributable asset life/linked events | Actual responsible sites/providers of this process only | Reconcile native event totals first. Combine only the same identity, state, unit, gate and period. Apply the matching calculation once to each resulting row: assign only still-shared burdens; divide a target total only by positive qualified output on the same basis. Keep already equivalent per-reference values and resolve zero-output periods without division. | Match sampling or activity and applicable factor to species, phase, origin and compartment. Keep mass, particle number, heat and elemental-equivalent bases separate where applicable; document any conversion and exclude overlapping totals. For a row requiring Mass / kg, verify measurement or conversion to that basis. For the stated physical identity and matching input basis, apply the following quantity rule only at its specified attribution and normalization state: attributed_actual_specific_dust_air_kg / N Preserve original records, applied factors and resulting units. Value mode: calculated_value; Specificity: site_specific; Normalization basis: per declared reference flow; Basis kind: reference_flow; Evidence kind: calculated_from_collection; Collection protocol: cp_handling; Sources: unsd-cpc3-65117; ghg-product-2011. Require original records, exact native support and per-concrete-row verification; these instructions do not supply a missing identity or numerical value. Completion gate: check_occurrence_completion. |
| cp_expand_dry_bulk_vehicle_assembly | support_lifecycle | Mandatory identity expansion dry_bulk_vehicle_assembly (inputs/product): Complete dry-bulk road vehicle assembly at delivery | collected_record | requirement_id=dry_bulk_vehicle_assembly; process_id=support_lifecycle; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; asset_or_reusable_id; model_configuration; included_initial_components; lifecycle_phase; manufacture_native_quantity; target_duty; all_user_same_cohort_lifetime_duty; replacement_event; provider_coverage_cells; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; supply_or_service_gate; accepted_service_demand; provider_functional_unit; provider_intensity_basis; covered_lifecycle_stages | Actual truck/tractor-trailer body equipment with compatible specification, initial assemblies and manufacturing gate. Full tipper, silo, pneumatic or covered configuration chosen from actual records; no manufacture-as-whole-life proxy or duplicate initial components. Treat this scope as a mandatory identification requirement, not an exchange. Use the original node protocol and its records; separate every actual identity, gate and independent function before quantification, then apply the retained amount/basis/evidence instructions to each compatible concrete row separately. Never use an aggregate amount across heterogeneous identities or infer the native property/unit from a group label. A conclusion that no occurrence took place must be supported by evidence; unknown applicability or identity blocks completion. For the physical asset or reusable item specified here, verify its supply gate, included initial parts, actual replacements, maintenance, cleaning, failure and retirement records. A lease or inclusive supplier contract requires an explicit coverage decision: where a delivered service is within this scope measure its accepted native demand and trace only uncovered asset stages. For a directly modelled asset, use same-cohort target duty over supported positive lifetime duty of all users; do not charge the whole facility to one service. Explicit branches (activate only on actual applicable records): dry_bulk_vehicle_assembly_manufacture. For every applicability decision retain evidence. An evidenced absence closes only the stated scope and period; missing records remain unresolved. For a present requirement, map every occurrence to concrete row IDs and compatible native quantities, or to exact already-covered rows/provider cells, with a reason for each exclusion. Evidence must cover identity, support unit, calculation, source records and all fates. Existing and newly added branches are mutually exclusive coverage of the same event; never count the protocol itself as an exchange. Completion requires no unassigned occurrence, no duplicate coverage and no unresolved relevant quantity or identity. Collect raw fields for the evidenced branch. For each inapplicable operand record the branch decision; missing applicable quantities remain unresolved. | Physical asset or reusable article in its verified manufacture/supply unit; compatible duty for the same cohort; delivered service in its native functional unit where in scope | Every actual occurrence and each evidenced absence decision | Full declared cohort and attributable asset life/linked events | Actual responsible sites/providers of this process only | Reconcile native event totals first. Combine only the same identity, state, unit, gate and period. Apply the matching calculation once to each resulting row: assign only still-shared burdens; divide a target total only by positive qualified output on the same basis. Keep already equivalent per-reference values and resolve zero-output periods without division. | For an asset use the quantity at its documented supply gate times target duty / positive all-user lifetime duty for that cohort. Record configuration, commissioning, replacement and retired or remaining life. If the scope includes a delivered service, use its verified native intensity times matching delivered demand and retain the coverage record; charge uncovered phases separately. For a physical asset measured in Number of items / Item(s), retain the measured supply quantity and the separate lifetime-duty unit. For a matching asset quantity or independently verified service result at the stated gate, apply the following quantity rule only at its specified attribution and normalization state: attributed_vehicle_manufacture_items / N Preserve original records, applied factors and resulting units. Value mode: calculated_value; Specificity: site_specific; Normalization basis: per declared reference flow; Basis kind: reference_flow; Evidence kind: calculated_from_collection; Collection protocol: cp_assets; Sources: unsd-cpc3-65117; ghg-product-2011. Require original records, exact native support and per-concrete-row verification; these instructions do not supply a missing identity or numerical value. Completion gate: check_occurrence_completion. |
| cp_expand_native_road_service | support_lifecycle | Mandatory identity expansion native_road_service (inputs/product): Actual road infrastructure lifecycle service | collected_record | requirement_id=native_road_service; process_id=support_lifecycle; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; provider_contract; independent_function; provider_gates; native_functional_unit; delivered_quantity; covered_process_phase_cells; uncovered_foreground_rows; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; provider_functional_unit; accepted_service_demand; provider_intensity_basis; covered_service_stages | Actual native road construction/repair/retirement provider function, duty basis, vehicle/load and gate coverage; road life and axle factors need evidence. Native supplier cells replace corresponding owned work only. Treat this scope as a mandatory identification requirement, not an exchange. Use the original node protocol and its records; separate every actual identity, gate and independent function before quantification, then apply the retained amount/basis/evidence instructions to each compatible concrete row separately. Never use an aggregate amount across heterogeneous identities or infer the native property/unit from a group label. A conclusion that no occurrence took place must be supported by evidence; unknown applicability or identity blocks completion. Apply these recording instructions only to the stated inputs/product identity and gate (Actual road infrastructure lifecycle service). Activate only for an actually contracted independent function within this PCR scope. Record provider contract, delivered service function, gates, native functional unit, measured delivered quantity and exact covered processes/life stages. Compare each covered cell with owned activities; use complete-provider coverage or the uncovered foreground activity once. Do not substitute monetary spend, a material mass or an assumed item count for the actual function. A provider of the PCR final product cannot recursively duplicate the same final service. For every applicability decision retain evidence. An evidenced absence closes only the stated scope and period; missing records remain unresolved. For a present requirement, map every occurrence to concrete row IDs and compatible native quantities, or to exact already-covered rows/provider cells, with a reason for each exclusion. Evidence must cover identity, support unit, calculation, source records and all fates. Existing and newly added branches are mutually exclusive coverage of the same event; never count the protocol itself as an exchange. Completion requires no unassigned occurrence, no duplicate coverage and no unresolved relevant quantity or identity. Collect raw fields for the evidenced branch. For each inapplicable operand record the branch decision; missing applicable quantities remain unresolved. | Verified native functional unit of the contracted delivery; Item(s) only for independently countable accepted results | Every actual occurrence and each evidenced absence decision | Full declared cohort and attributable asset life/linked events | Actual responsible sites/providers of this process only | Reconcile native event totals first. Combine only the same identity, state, unit, gate and period. Apply the matching calculation once to each resulting row: assign only still-shared burdens; divide a target total only by positive qualified output on the same basis. Keep already equivalent per-reference values and resolve zero-output periods without division. | Use the measured accepted quantity at the specified gate. Multiply supplier intensity by demand in that same native unit only when converting an intensity to a total. Record the contract scope, acceptance, native unit and covered stages. Use time only for a delivered time-based function. For an accepted service on the basis specified by its contract, apply the following quantity rule only at its specified attribution and normalization state: attributed_native_road_service / N Preserve original records, applied factors and resulting units. Value mode: calculated_value; Specificity: site_specific; Normalization basis: per declared reference flow; Basis kind: reference_flow; Evidence kind: calculated_from_collection; Collection protocol: cp_assets; Sources: unsd-cpc3-65117; ghg-product-2011. Require original records, exact native support and per-concrete-row verification; these instructions do not supply a missing identity or numerical value. Completion gate: check_occurrence_completion. |
| cp_expand_wash_wastewater | support_lifecycle | Mandatory identity expansion wash_wastewater (outputs/waste): Collected dry-bulk body and hose cleaning wastewater | collected_record | requirement_id=wash_wastewater; process_id=support_lifecycle; required_direction=outputs; required_flow_type=waste; original_collection_protocol=cp_support; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; waste_origin_event; material_or_true_mixture; moisture_basis; container_tare; opening_waste_stock; generated_waste; received_waste; handover_quantity; closing_waste_stock; onsite_treatment; receiver_id; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | Actual separate cargo/chemical-compatible collected wash stream with native property/unit and receiver. Cement slurry, coal fines and food residues are not interchangeable; distinguish retained water, evaporation, direct release and waste transfer. Treat this scope as a mandatory identification requirement, not an exchange. Use the original node protocol and its records; separate every actual identity, gate and independent function before quantification, then apply the retained amount/basis/evidence instructions to each compatible concrete row separately. Never use an aggregate amount across heterogeneous identities or infer the native property/unit from a group label. A conclusion that no occurrence took place must be supported by evidence; unknown applicability or identity blocks completion. Apply these recording instructions only to the stated outputs/waste identity and gate (Collected dry-bulk body and hose cleaning wastewater). Activate when this process actually generates or receives the specified waste. Record material/formulation or genuine co-collected mixture, wet/dry state, container tare, origin event, stored quantities, handover gate and actual receiver. Reconcile generation + opening stock + receipts = handovers + closing stock + separately recorded onsite treatment. Different separately collected wastes require different rows; one genuine receiving mixture may remain one row, with composition as a nonadditive audit. Useful recovery, customer-retained items and waste are distinct fates; no automatic substitution credit. For every applicability decision retain evidence. An evidenced absence closes only the stated scope and period; missing records remain unresolved. For a present requirement, map every occurrence to concrete row IDs and compatible native quantities, or to exact already-covered rows/provider cells, with a reason for each exclusion. Evidence must cover identity, support unit, calculation, source records and all fates. Existing and newly added branches are mutually exclusive coverage of the same event; never count the protocol itself as an exchange. Completion requires no unassigned occurrence, no duplicate coverage and no unresolved relevant quantity or identity. Collect raw fields for the evidenced branch. For each inapplicable operand record the branch decision; missing applicable quantities remain unresolved. | Receiver-accepted native quantity of the specific waste or genuinely co-collected mixture in its measured state | Every actual occurrence and each evidenced absence decision | Full declared cohort and attributable asset life/linked events | Actual responsible sites/providers of this process only | Reconcile native event totals first. Combine only the same identity, state, unit, gate and period. Apply the matching calculation once to each resulting row: assign only still-shared burdens; divide a target total only by positive qualified output on the same basis. Keep already equivalent per-reference values and resolve zero-output periods without division. | Match generation, retained stock, onsite treatment and measured handover to receiver records. Separate mixed-stream quantity from constituent measurements; wet/dry or mass/volume conversion needs matching composition or density. Receiver transfer and direct environmental release have distinct gates. For the stated physical identity and matching input basis, apply the following quantity rule only at its specified attribution and normalization state: attributed_native_collected_wash_stream / N Preserve original records, applied factors and resulting units. Value mode: calculated_value; Specificity: site_specific; Normalization basis: per declared reference flow; Basis kind: reference_flow; Evidence kind: calculated_from_collection; Collection protocol: cp_support; Sources: unsd-cpc3-65117; ghg-product-2011. Require original records, exact native support and per-concrete-row verification; these instructions do not supply a missing identity or numerical value. Completion gate: check_occurrence_completion. |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_bulk_service | all inventory except final output | x_ref = sum(x_native_attributed) / N; N is actual same-cohort eligible completed dry-bulk road consignment legs and positive; final output is 1 Item(s). | x_native_attributed; N; cp_movement; cp_handling; cp_support; cp_assets | x_ref | ghg-product-2011 |
| exclusive_cargo_ledger | each actual cargo dry-solids ledger and separate water ledger | opening_dry_solids + receipts_dry_solids + inward_transfers_dry_solids = closing_dry_solids + delivered_dry_solids + outward_transfers_dry_solids + measured_dry_solids_loss; convert EACH observation from its own measured wet mass and moisture fraction, dry_solids = wet_mass * (1 - w_wet), where w_wet = water_mass / wet_mass is the wet-basis water mass fraction. For a recorded dry-basis fraction w_dry = water_mass / dry_solids, first convert w_wet = w_dry / (1 + w_dry), equivalently dry_solids = wet_mass / (1 + w_dry). Record the observed basis and conversion evidence; never insert an unspecified-basis fraction. Destinations are disjoint; internal recovery stays closing or its later actual delivery/outward gate once. Close associated water separately with actual added/rain, retained/stock, delivered/outgoing and evaporated water as relevant. A wet-mass reporting ledger must explicitly include these water-change terms; never assume equal moisture or call evaporation dry-solids loss. | each_observation_wet_mass; each_observation_moisture_fraction; actual_added_rain_evaporated_retained_outgoing_water; stocks_transfers_losses; cp_movement; cp_handling; cp_support | closed native cargo ledger | ghg-product-2011 |
| exclusive_shared_energy | actual engine/air/handling cells | Partition actual shared engine/AC input and exhaust between movement and handling using documented metered/validated duty evidence; sum allocated native shares to the one measured pool. Owned compression and inclusive purchased air cells are exclusive before normalization. | actual native engine_AC_air_pool; duty_shares; cp_movement; cp_handling | attributed native energy and exhaust | ghg-product-2011 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| traceable_native | all nodes | Require raw records/calibration, native property/unit/gate, lot/material/moisture/quality, actual period/site/provider, allocation and uncertainty per real exchange. Unknown identity/quantity stays incomplete. | Signed manifests; meter and supplier/waste records |
| dust_validity | dust and spill fate | Actual cargo composition, size/substance/medium, moisture and measured/control state plus applicable model domain mandatory. Coal carbon/cement/silica/organic dust and fine/coarse particles cannot be silently substituted. | Independent compatible measurements and method provenance |
| no_default_ranges | amounts and factors | No universal payload, fuel, pneumatic air, dust-loss/control, tyre/filter lifetime or empty/failed ratio supplied. Future empirical guardrails require independent compatible reference data and never validate a batch with its own maximum; missing actual data not zero. | Completeness and independent source register |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| qualified_reference | all nodes | Verify actual dry solid bulk, quantity with moisture/basis, road equipment/function, OD/distance/time and accepted handover. Do not confuse pressure-vessel powder with liquid/gas tanker cargo or container function. Positive N requires actual completed eligible leg, not vehicle capacity, cargo manufacture or planned dispatch. | ghg-product-2011 |
| mass_moisture_dust | all nodes | Close conserved dry-solids cargo ledgers by converting EACH accepted/delivered/carryover/returned/spilled/captured/direct-release observation from its own measured wet mass and moisture fraction. Close water separately with actual added/rain, stock/retention, delivery/outgoing and evaporation; wet-mass reporting must include water changes rather than assume equal moisture. Moisture change alone is not dry-matter loss; unknown balance deficit is not automatically dust. Require actual material/substance, PM fraction, capture/control records and receiving medium before emissions; no blanket aggregate/cement factor across all goods. Explicitly verify wet-basis w_wet = water_mass / wet_mass; a recorded dry-basis w_dry = water_mass / dry_solids must first convert to w_wet = w_dry / (1 + w_dry). An undocumented basis blocks this conversion. | ghg-product-2011 |
| energy_provider_life | all nodes | Close actual shared engine fuel/AC/PTO/compressed-air and downstream vent/filter cells with one owner. Match actual provider-native units, gates and whole asset lifecycle coverage; require positive same-cohort all-user useful duty and all-user share closure. Missing control/cleaning/failed-duty/lifetime evidence is incomplete. Pool actual site numerators and eligible N before normalization, not unweighted intensity means. | ghg-product-2011 |
| identity_translation | all nodes | Final implemented exchanges require verified concrete UUID/native support/state/gate and actual material/medium compatibility. Count support is not a service UUID; unresolved semantic cards remain candidate. Check EN/ZH ordered rule/card/protocol IDs, formula constants, full functional/profile fields and source references against generated canonical projection; disclose incomplete checks. | ghg-product-2011 |
| atomic_road_movement | road_movement | Reject any exchange whose identity combines alternative materials, independently supplied assets/services, different waste streams, pollutant species, carbon origins, phases, particle fractions or environmental compartments. For every applicable cp_expand_ requirement in this node require an occurrence/absence record and exhaustive concrete-row register, each with its own identity, gate, verified UUID, native property/unit, quantity, source record, calculation and exclusive responsibility. A supplier-covered whole assembly or genuinely collected mixture remains one actual supplied/collected identity; do not invent constituent exchanges. Never bind a requirement label/id, generic NOx/VOC/PM total, unspecified physical release, or heterogeneous list to one UUID. Reconcile all requirement children, source events, provider-covered cells and cross-node transfers; no missing-as-zero or double counting. Unknown identity, applicability, quantity or fate blocks a complete foreground package and final TIDAS exchange production. The PCR checker does not verify these foreground facts; retain their row-addressable evidence for review. | ghg-product-2011 |
| atomic_bulk_handling | bulk_handling | Reject any exchange whose identity combines alternative materials, independently supplied assets/services, different waste streams, pollutant species, carbon origins, phases, particle fractions or environmental compartments. For every applicable cp_expand_ requirement in this node require an occurrence/absence record and exhaustive concrete-row register, each with its own identity, gate, verified UUID, native property/unit, quantity, source record, calculation and exclusive responsibility. A supplier-covered whole assembly or genuinely collected mixture remains one actual supplied/collected identity; do not invent constituent exchanges. Never bind a requirement label/id, generic NOx/VOC/PM total, unspecified physical release, or heterogeneous list to one UUID. Reconcile all requirement children, source events, provider-covered cells and cross-node transfers; no missing-as-zero or double counting. Unknown identity, applicability, quantity or fate blocks a complete foreground package and final TIDAS exchange production. The PCR checker does not verify these foreground facts; retain their row-addressable evidence for review. | ghg-product-2011 |
| atomic_support_lifecycle | support_lifecycle | Reject any exchange whose identity combines alternative materials, independently supplied assets/services, different waste streams, pollutant species, carbon origins, phases, particle fractions or environmental compartments. For every applicable cp_expand_ requirement in this node require an occurrence/absence record and exhaustive concrete-row register, each with its own identity, gate, verified UUID, native property/unit, quantity, source record, calculation and exclusive responsibility. A supplier-covered whole assembly or genuinely collected mixture remains one actual supplied/collected identity; do not invent constituent exchanges. Never bind a requirement label/id, generic NOx/VOC/PM total, unspecified physical release, or heterogeneous list to one UUID. Reconcile all requirement children, source events, provider-covered cells and cross-node transfers; no missing-as-zero or double counting. Unknown identity, applicability, quantity or fate blocks a complete foreground package and final TIDAS exchange production. The PCR checker does not verify these foreground facts; retain their row-addressable evidence for review. | ghg-product-2011 |
| check_occurrence_completion | all actual rows and identification protocols | Retain applicability evidence and map each actual event to its inventory row or verified provider coverage. Evidence is required for absence; unknown remains unresolved. For each compatible identity, state, unit, period and gate, reconcile receipts and opening stock against closing stock and exclusive physical exits. In a consumables issue ledger, distinguish unused returns, internal issues and actual use for successful, failed and reworked duties. In a custody or material balance use opening stock + external receipts + paired internal receipts = closing stock + paired internal dispatch + accepted external deliveries + unused external returns + used goods or recovered material sent out + waste sent out + direct releases + quantity consumed or transformed within this boundary. Where that identity arises inside the gate, add evidenced formation or birth to its receipts and link the originating event. Cancel internal formation and transfers across the enclosing conserved-material or elemental balance. Classify each event once, include retained recovered stock at closing, and distinguish transfers from use. Apply the specific custody, phase, transformation or elemental rule on its own compatible basis; exclude downstream products of already counted transformation from the same exit total. Measure operands independently and investigate unresolved residuals. Keep physical totals separate from burden allocation. For a raw shared burden use Q_raw × s / R, where s is the evidenced target driver divided by the positive driver total for all eligible users of that same pool and period. Use Q_target / R for an already assigned target total and retain q_ref unchanged for an already equivalent per-reference result. For a provider intensity first multiply by measured demand in its matching native unit. Apply an additional share only for a distinct, still-shared stage. R is the positive qualified output quantity in the same reference unit, cohort and gate. Retain failed and partial duties without enlarging R; for zero output retain the burden with evidenced carry-forward or final disposition. For owned assets use the same-cohort all-user lifetime duty and exclusive initial-component coverage. Delivered services replace only their documented covered stages. Unresolved applicable identity, quantity, support unit, fate or allocation denominator prevents final dataset completion. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Actual compatible dry-bulk road freight attached to cargo supply-chain LCA |
| allowed_use | Comparable cargo amount/moisture/OD-distance/quality and actual handling/provider/lifecycle boundaries |
| excluded_use | Cargo manufacture, other freight functions, unsupported equal-count comparisons, missing duty treated zero or unverified final exchanges |
| required_metadata | All reference qualifiers, actual native source records, cargo/dust/fate/energy ownership, provider gates, allocation and all-user life |
| required_quality_disclosure | Unknown identities/amounts, method domain, site/period representativeness, failed/rejected duty, dust controls/fates, uncertainty/skipped checks |
| update_trigger | Changed cargo/method/route/quality/control/technology/asset/provider or verified new evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-65117 | official_guidance | UNSD CPC 3.0 65117; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Full dry-solid bulk road scope including cereal/flour/cement/sand/coal; not numeric factors |
| ghg-product-2011 | standard | WRI/WBCSD Product Life Cycle Accounting and Reporting Standard (2011), chapters6–10; https://ghgprotocol.org/sites/default/files/ghgp/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Boundary/data/allocation principles; explicit full asset and record algorithms are PCR choices |
| epa-ap42-aggregate-handling | official_guidance | US EPA AP-42, section13.2.4 Aggregate Handling and Storage Piles, November2006; https://www.epa.gov/sites/default/files/2020-10/documents/13.2.4_aggregate_handling_and_storage_piles.pdf | Material/moisture/wind/size/control-specific dust questions only; no numerical aggregate factors adopted universally |
| uk-cement-pneumatic-guidance | official_guidance | UK Process Guidance Note3/01(12), Blending, packing, loading, unloading and use of cement; https://assets.publishing.service.gov.uk/media/5a80360d40f0b62305b89d4a/blending-packing-loading-unloading-and-use-of-cement-process-guidance-note-3-01_12_.pdf | Conditional pneumatic vehicle/receiver-silo vent/filter interfaces for actual compatible cement route; no claim all cargo regulated identically |

