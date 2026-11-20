---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.freight-transport-services.railway-transport-services-of-freight-by-refrigerator-cars
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Refrigerated rail freight transport service

## 1. Scope and Applicability

This PCR covers actual railway transportation of frozen or refrigerated goods in specially refrigerated cars across the full official category. It is not limited to one food, locomotive fuel, reefer type, country or train formation. Reference is 1 t*km of actual qualified delivered cargo transport work: actual cargo mass in tonnes multiplied by actual loaded rail distance for each segment, with pickup/drop and accepted delivered portions traced separately. Railcar/locomotive/container tare is excluded from cargo mass. Cooling quality, time, route and gates are mandatory; a tonne-km label alone does not establish equivalent service.

Exclude other transport modes, ordinary non-refrigerated rail freight, separately classified intermodal-container railway service, independent cold storage, cargo manufacture and bare refrigerated-car hire without transport. Determine actual classified function/equipment when adjacent services overlap; do not exclude actual qualified reefer-car service because cargo is not food or propulsion is electric. Within-contract shunting, yards, handover, cooling/preconditioning, cleaning and full attributed infrastructure/vehicle lifecycle remain included by actual gate ownership.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.freight-transport-services.railway-transport-services-of-freight-by-refrigerator-cars |
| classification_refs | CPC 3.0 65121; exact |
| covered_products | Complete railway transportation of frozen/refrigerated goods in specially refrigerated cars |
| excluded_products | Ordinary non-refrigerated rail freight; separately classified rail intermodal-container service; other modes; standalone cold storage; cargo manufacture or bare car hire |
| representative_product | Qualified refrigerated rail freight transport work |
| production_route | Actual rail movement and shunting, reefer preservation and full attributed rail asset/support lifecycle |
| market_state | Actual qualified refrigerated delivered cargo transport work at declared rail handover gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Qualified refrigerated rail freight transport work |
| How much | 1 t*km actual qualified delivered cargo work, actual net mass-tonnes times actual loaded segment kilometres |
| How well | Actual frozen/refrigerated cargo, acceptance/delivery temperature/time/quality, route/distance and car/traction/cooling gates |
| How long or cycle | Actual accepted rail shipment interval plus causal empty/shunt/yard/failed/cooling and lifecycle periods |
| reference_flow_link | qualified_refrigerated_rail_work |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Qualified refrigerated rail freight transport work |
| Reference flow property | mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` |
| Reference unit group | Unit of kg*km `3620148f-c5db-48ce-9065-a10092089aca` |
| Reference unit | tkm |
| Required qualifiers | frozen_refrigerated_cargo; net_cargo_mass_per_loaded_segment; actual_segment_rail_distance; accepted_delivered_portions; pickup_drop_transfer_ids; temperature_time_quality; railcar_locomotive_consist; actual_traction_supply_AC_DC; reefer_energy_cold_medium; shunt_yard_empty_failed_cold_duties; cargo_loss_receiver; all_users_allocation; native_provider_gates; same_asset_all_user_life; species_medium; period_T; uncertainty |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_work | reference product | mass*distance | t*km | Qualified cargo mass-distance is not gross train mass-distance, railcar Count/TEU, locomotive distance, stationary cooling time or planned capacity. Require positive T and actual cargo portion/loaded segment/temperature-time-quality evidence. |
| native_basis | all inventory rows | Actual native compatible property | Actual native unit | Preserve net cargo versus locomotive/car/container tare, actual each-segment masses/distances and native provider unit/gates. Use documented mass/distance unit conversions, never generic density. AC/DC and supply/stock/burn/charge/leak are distinct; verified kWh to MJ uses 3.6 MJ/kWh. |
| tkm_spelling_alias | reference product; qualified_refrigerated_rail_work | mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` | tkm | Declared tkm is a spelling alias of the verified native unit t*km, exactly 1 tkm = 1 t*km = 1000 kg*km. The native group name remains Unit of kg*km and its UUID remains 3620148f-c5db-48ce-9065-a10092089aca. This notation does not change reference function, dimension, amount or scale. Final TIDAS exchanges use the actual native unit name t*km with its verified factor and support chain. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual frozen/refrigerated cargo acceptance, rail/reefer topology and traction/cold/provider/asset gates |
| starting_condition_role | Foreground entry facts do not erase earlier assets/supplies |
| product_classification_scope | Full refrigerated-car railway freight65121; actual function resolves adjacent overlap |
| recursive_input_rule | Actual native subcontracted stages replace matching own cells once |
| upstream_dataset_requirement | Actual material/technology/native unit/state/gate/geography/period and lifecycle coverage |
| disclosure | Cargo custody, complete rail/cold/yard duties, species/fates, all-user network/assets/providers, allocation and unknowns |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| full_rail_scope | all nodes | Full frozen/refrigerated goods in specially refrigerated rail cars; actual diesel-electric, electric, hybrid or other traction and actual mechanical/electric/ice/cryogenic cooling states are conditional evidence-backed implementations. Parent activity is refrigerated rail freight. Separate locomotive traction topology from car refrigeration: onboard diesel generation is not externally purchased electricity, and electric locomotive traction does not prove electric reefers or zero refrigeration fuel. Actual off-wire, generator, storage and energy-recovery interfaces retain real gates and losses. | unsd-cpc3-65121 |
| full_duty | rail_movement | Include loaded train movement, shunting/marshalling, yard waiting/idling, depot starts/layovers, empty locomotive/reefer reposition and returns, failed/cancelled/rescue/rejected deliveries and actual driver/auxiliary duty attributable to this service. Retain mixed consists, other freight and any jointly carried passenger/service outputs and their real causal shares. Cooling during stationary/empty/failed duties remains attributable where it supports the declared service; it does not add transport distance to output. | ghg-product-2011 |
| cold_handoff | reefer_preservation | The preservation boundary begins with actual preparation, testing and preconditioning attributable to the declared service, including service-responsible duty before cargo acceptance. Record the accepted cargo state/temperature as its own trace anchor; continue all actual preservation duties through real delivery temperature/time/excursions and handover acceptance decision. Record preconditioning/testing, cooling or actual heating/defrost/fan/door-open operational states, fuel/recharge/recovery and all actual cold media separately. Manufacturer/operator instructions apply only to the compatible equipment and commodity, not a universal setpoint or door-operation assumption. A stationary refrigeration-hour is not a tonne-km output. | up-reefer-operating-instructions |
| cargo_provider | rail_movement; support_lifecycle | Cargo is transported custody, not consumed inventory or new goods output; original cargo manufacture is outside freight product. Track acceptance/delivery, segment pickup/drop, hold/return/loss/receiver and each actual quality outcome; downstream cargo LCA receives physical loss/replacement disclosure once. Rail carriers, yards, wagon/reefer suppliers, cold terminals and drayage operators have explicit native activity/gates and covered cells. A supplier result replaces exact owned cells once; outside-mode drayage remains separately classified and upstream/disclosed at its real gate, not silently renamed as rail. | ghg-product-2011 |
| asset_network | support_lifecycle | PCR lifecycle choice covers actual locomotives/reefer cars/cooling units/batteries, track/rail/sleepers/ballast/points/signalling/contact-line/substation and yard/depot/terminal/loading equipment manufacture, installation/refit, maintenance/renewal/replacements and retirement. Whole assembly versus included initial components is exclusive. Native manufacturing supply is not a whole-life rail service; same-cohort all-user useful duty supports allocation only. Actual wheel/rail/brake/collector wear, lubricant/sanding and generated waste/emissions require real material/species/fate records. | ghg-product-2011 |
| energy_species | all nodes | Purchased AC/contact-line DC, own conversion/generation, storage charge/discharge, regeneration and external export have distinct actual native gates. Gross/net energy, internal recovered braking and actual external export cannot be counted twice or credited as universal avoided electricity. Refrigerant supply/initial charge/makeup/stock/recovery and actual leakage are distinct. Preserve fuel carbon origin and actual burned quantity, species/compound/PM-size and air/water/soil/collected receiver; no fuel supply=burn or recharge=leak rule. | ipcc-mobile-2006 |
| actual_expansion | all nodes | For every actual unrepresented energy/material, cold medium, asset, provider result, waste or emitted species, create one real row_id per concrete identity/state/native property/unit with one parent node/direction/type, actual amount/source, same-node protocol, gate and receiver/medium/uncertainty. Conditional semantic requirement cards cannot be one verified umbrella exchange. Missing actual occurrence/quantity/identity remains incomplete, not zero; route alternatives remain in scope when not yet observed. | ghg-product-2011 |

## 6. Process Inventory Structure

Each inventory card represents one independently identifiable product, material/formulation, waste stream, substance or supplied service at a compatible gate, property and unit. A complete supplied assembly or an actually collected mixture may have one identity; its already included constituents are not additional exchanges. The cp_expand_ protocols in section 8 are mandatory identification requirements, never selected flows or quantities to exchange. For every such requirement document actual applicability and enumerate all concrete exchanges with separate row ids. Preserve the full applicable scope and record evidence when no exchange occurs; an unexpanded or unknown requirement is incomplete, never zero. Changing a requirement into a collection protocol does not resolve any missing identity or waive any lifecycle, allocation, measurement or boundary obligation.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| rail_movement | Rail movement, shunting and final freight handover | required | Actual eligible rail freight service | foreground | qualified_refrigerated_rail_work |
| reefer_preservation | Reefer-car temperature preservation | required | Actual frozen/refrigerated cargo preservation responsibility | foreground | qualified_refrigerated_rail_work |
| support_lifecycle | Yards, handling, wash and full rail assets | required | Actual attributable support and lifecycle stages | foreground | qualified_refrigerated_rail_work |

All nodes link one final denominator; reefer_preservation and support_lifecycle do not create extra final service completions. Internal cargo transfers are not new cargo purchases or finished outputs.

### Process: Rail movement, shunting and final freight handover (`rail_movement`)

#### Inputs

##### Product flows

###### Diesel fuel (`locomotive_diesel`)

Conditional actual locomotive/shunting diesel supply; real grade/blend/carbon and burn/stock/spill recorded. Diesel-electric onboard generation is internal, not an additional bought electricity input. Refrigeration engines have separate actual pools.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: attributed_locomotive_diesel_kg / T
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_movement`
- Sources: `unsd-cpc3-65121`; `ghg-product-2011`

###### Alternating current (`traction_ac`)

Actual externally supplied AC at declared railway substation/contact/charger gate; actual conversion/network losses and regenerative interfaces retained. AC is not a substitute for actual separately bought DC.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: attributed_external_traction_AC_MJ / T
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_movement`
- Sources: `unsd-cpc3-65121`; `ghg-product-2011`

###### Actual direct-current railway traction supply (`traction_dc`)

Conditional actual separately purchased DC at real voltage/quality/contact or charging gate and provider losses scope. Own AC-to-DC conversion is internal, not duplicate external purchase.

- Selected flow: Actual direct-current railway traction supply
- Flow property / unit: Energy / MJ
- Amount rule: attributed_external_traction_DC_MJ / T
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_movement`
- Sources: `unsd-cpc3-65121`; `ghg-product-2011`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Qualified refrigerated rail freight transport work (`qualified_refrigerated_rail_work`)

Actual qualified refrigerated rail delivered cargo transport work, from net cargo mass-tonnes and actual loaded segment distance, tracing each accepted delivered portion. Not gross train work or railcar count.

- Selected flow: Qualified refrigerated rail freight transport work
- Flow property / unit: mass*distance / tkm
- Amount rule: 1 tkm
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_movement`
- Sources: `unsd-cpc3-65121`; `ghg-product-2011`

##### Waste flows

##### Elementary flows

###### carbon dioxide (fossil) (`traction_fossil_co2`)

Actual locomotive fossil CO2 to air from actual burned carbon with compatible measured/source method; fuel supplied/stock/loss is not all burn. Biogenic combustion remains distinct and air subcompartment declared.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: attributed_locomotive_fossil_CO2_kg / T
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_movement`
- Sources: `unsd-cpc3-65121`; `ghg-product-2011`

### Process: Reefer-car temperature preservation (`reefer_preservation`)

#### Inputs

##### Product flows

###### Diesel fuel (`reefer_diesel`)

Actual independent reefer generator/compressor diesel for precondition, loaded/yard/waiting/failed and justified empty cooling. Separate from locomotive tank; supplier-inclusive refrigeration cells replace exact owned fuel coverage.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: attributed_reefer_diesel_kg / T
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cold`
- Sources: `unsd-cpc3-65121`; `ghg-product-2011`

###### Alternating current (`reefer_ac`)

Actual external reefer/terminal shore AC at named gate; own diesel-generated internal electricity is not bought again. Record losses, thermostatic/cooling/heating/defrost and real door/quality states from compatible equipment instructions.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: attributed_external_reefer_AC_MJ / T
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cold`
- Sources: `unsd-cpc3-65121`; `ghg-product-2011`

###### Refrigerant, R134a (`r134a_makeup`)

Only actual compatible single R134a supply, never all railcar refrigerants. Initial assembly-included charge is not added twice; other actual compounds/blends/ice/cryogens require their own concrete rows and fates.

- Selected flow: Refrigerant, R134a `b33b6abf-6a88-4ec1-ab79-6aa5aac69e8a`
- Flow property / unit: Mass / kg
- Amount rule: attributed_actual_R134a_makeup_kg / T
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cold`
- Sources: `unsd-cpc3-65121`; `ghg-product-2011`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### HFC-134a (`r134a_air`)

Actual R134a leakage to air only; same-unit initial/makeup/closing/recovery reconciliation or measured release. Recharge is not leak and other compounds/receivers are not this identity.

- Selected flow: HFC-134a `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: attributed_actual_R134a_air_release_kg / T
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cold`
- Sources: `unsd-cpc3-65121`; `ghg-product-2011`

###### carbon dioxide (fossil) (`reefer_fossil_co2`)

Actual independent reefer combustion fossil CO2 to air, exclusive from locomotive exhaust and supplier-covered cells; actual burn/origin/compound basis required.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: attributed_reefer_fossil_CO2_kg / T
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cold`
- Sources: `unsd-cpc3-65121`; `ghg-product-2011`

### Process: Yards, handling, wash and full rail assets (`support_lifecycle`)

#### Inputs

##### Product flows

###### Complete actual rail locomotive at delivery (`locomotive_assembly_manufacture`)

One actual complete physical assembly of one documented model/configuration per instantiated row at its manufacturing delivery gate. Different configurations require separate instances and quantities. Activate only when this assembly serves the declared node outside complete-provider coverage. The initial-component inclusion list is part of this identity; do not add included initial components again. Keep actual uncovered maintenance, replacements and end-of-life separately.  Actual complete compatible diesel-electric/electric/other locomotive manufacturing delivery with initial components and native Count scope. It is not a full freight service or all life stages; actual maintenance/renewal/retirement separate.

- Selected flow: Complete actual rail locomotive at delivery
- Flow property / unit: Count / Item(s)
- Amount rule: For each exact same-model assembly cohort: manufactured items * target-attributable useful duty / all-user full-life useful duty / T. Both duty terms use the same compatible basis and cohort; denominators must be evidenced and positive. Apply the target share and final reference normalization once. Initial components covered by this assembly are nonadditive.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: unsd-cpc3-65121; ghg-product-2011


###### Complete specially refrigerated railway car at delivery (`refrigerated_railcar_assembly_manufacture`)

One actual complete physical assembly of one documented model/configuration per instantiated row at its manufacturing delivery gate. Different configurations require separate instances and quantities. Activate only when this assembly serves the declared node outside complete-provider coverage. The initial-component inclusion list is part of this identity; do not add included initial components again. Keep actual uncovered maintenance, replacements and end-of-life separately.  Actual compatible refrigerated rail car assembly including declared body/bogie/wheels/brakes/insulation/cooling/initial charge scope; no generic road reefer or intermodal container substitution. Included initial components exclusive with whole car.

- Selected flow: Complete specially refrigerated railway car at delivery
- Flow property / unit: Count / Item(s)
- Amount rule: For each exact same-model assembly cohort: manufactured items * target-attributable useful duty / all-user full-life useful duty / T. Both duty terms use the same compatible basis and cohort; denominators must be evidenced and positive. Apply the target share and final reference normalization once. Initial components covered by this assembly are nonadditive.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: unsd-cpc3-65121; ghg-product-2011


###### Tap water (`cleaning_tap_water`)

Actual tap water at native municipal production/supply gate for car/yards cleaning. Distribution beyond that gate explicitly included if absent; other water sources retain independent actual identities.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: attributed_cleaning_tap_water_kg / T
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support`
- Sources: `unsd-cpc3-65121`; `ghg-product-2011`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Used lubricating oil (`used_lubricating_oil`)

Actual collected used lubricating oil generated by attributable locomotive/car/reefer maintenance, with native generation state, composition and real receiver; no direct soil release or automatic recycling credit.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass / kg
- Amount rule: attributed_used_lubricating_oil_kg / T
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support`
- Sources: `unsd-cpc3-65121`; `ghg-product-2011`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| movement_cold_shares | all nodes | Directly subdivide/meter train segment, consist, car and cooling unit first. Unavoidable mixed-train traction/yard burdens use evidenced causal physical gross vehicle/load/distance/resistance or other actual operating relationships across ALL users; cargo tonne-km denominator does not mandate tonne-km allocation. Car refrigeration follows actual car/compartment thermal/time/commodity causation across loads. Economic fallback requires inability to establish physical relation plus sensitivity. Same event shares close to one. | ghg-product-2011 |
| empty_failed_quality | all nodes | Retain attributable empty/shunting/waiting/failed/rescue/rejected and precondition/cooling duties in the causal pool before normalizing once by positive qualified delivered work T. Empty car/locomotive tare, failed cargo portions, internal rehandling and stationary cooling add no delivered cargo tonne-km. Redelivery/return legs and successful segments are traced without duplicate final output. T=0 has no finite intensity. | ghg-product-2011 |
| all_user_life | all nodes | Allocate each native asset manufacture and actual lifecycle event by same-cohort attributable service duty / positive supported total ALL-user useful duty, then normalize by T. Preserve actual installation/renewal/replacement/retirement and unfinished periods; fixed railcar/locomotive/track/battery life, empty ratio, cooling efficiency or refrigerant leakage factors are not supplied. Supplier-native life coverage replaces exact cells; an asset manufacture row cannot cover unrepresented operations or end-of-life. | ghg-product-2011 |
| cargo_reject_recovery | all nodes | Actual returned/recovered cargo, collected waste, generated residues, direct releases and useful secondary outputs have their own real state/receiver/handover. No automatic avoided burden or cargo manufacture repeat. Refrigerant internally recovered into closing stock or later outward/use transfer is counted once, never an extra recovery destination on top of those same terms. | ghg-product-2011 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_movement | rail_movement | qualified cargo work, traction and full rail duties | Actual primary meters/manifests/provider records | consignment_portion; car_locomotive_consist; net_cargo_mass_t_each_segment; actual_loaded_rail_km; pickup_drop_transfer_ids; accepted_delivered_quality; cargo_tare; loaded_empty_shunt_yard_failed_rescue_duty; diesel_stock_receipts_burn_spill; AC_DC_gates; regeneration_export; other_users; shares; period; T; uncertainty | Join signed mass/waybill/acceptance and route-chain records by car/consignment/segment; calculate actual qualified delivered portion mass*actual segment distance once. Link actual traction meter/fuel and full train/yard duties/all users, independently from reefer energy. Build the qualified denominator from unique accepted output on the declared reference basis. Retain disqualified events and their resource duties separately. Keep the reference amount fixed; normalize only attributable inventory totals by the positive denominator. Keep non-reference rows of this protocol in their own physical units. | t; km; t*km; kg; MJ; h | Each event plus period reconciliation | Actual rail/cold service period plus asset life phases | Actual railcars/locomotives/yards/terminals/depots/cold providers | per declared reference flow | Calibration; signed records; native provenance; causal allocation; uncertainty Retain the source and native basis of each measured operand; document the conversion or attribution actually used and whether the supplied result is already per reference flow. |
| cp_cold | reefer_preservation | actual cargo preservation and cold-media fates | Actual primary meters/manifests/provider records | car_unit_compartment; actual_cargo; acceptance_delivery_temperature; logger_trace; setpoint_time_excursion; door_operation; precondition_heat_defrost_fan; ambient; stationary_loaded_empty_failed_hours; cooling_diesel_AC; native_cold_medium; charge_opening_makeup_recovery_closing; leak_species_medium; quality_reject_receiver; all_loads; allocation; period; T; uncertainty | Use calibrated logger/meter and compatible operator/equipment records, preserving true tested/door/cold-state events without generic instructions. Reconcile same-unit fuel and refrigerant or actual alternative cold medium with disjoint stock/use/receiver/leak fates; causal cooling attribution separate from train traction. Keep native observations and reconciliation totals on their recorded basis. For burden rows, attribute only the still-shared total and divide an assigned total only by positive qualified output of the same cohort and gate. Preserve already equivalent per-reference results. At zero output retain the burden for documented disposition. Record independently measured deliveries, releases and transfers at their own gates; any allocation applies to burdens. | kg; MJ; h; actual temperature/native cold units | Each event plus period reconciliation | Actual rail/cold service period plus asset life phases | Actual railcars/locomotives/yards/terminals/depots/cold providers | per declared reference flow | Calibration; signed records; native provenance; causal allocation; uncertainty Retain the source and native basis of each measured operand; document the conversion or attribution actually used and whether the supplied result is already per reference flow. |
| cp_support | support_lifecycle | yard handling cleaning and collected waste | Actual primary meters/manifests/provider records | site_yard_terminal_depot; event_car_cargo_transfer; native_handling_supply; wash_water_source_quantity; actual_cargo_chemical_wash_stream; retained_evaporated_direct_water; waste_native_composition_quantity_receiver; provider_covered_cells; all_users; shares; period; T | Link actual yard/handling/gate and cargo custody/cleaning/waste handovers to one physical event owner. Split incompatible collected streams and direct emissions; native inclusive provider cells replace exact own quantities once. Keep native observations and reconciliation totals on their recorded basis. For burden rows, attribute only the still-shared total and divide an assigned total only by positive qualified output of the same cohort and gate. Preserve already equivalent per-reference results. At zero output retain the burden for documented disposition. Record independently measured deliveries, releases and transfers at their own gates; any allocation applies to burdens. | kg; native handling/waste units | Each event plus period reconciliation | Actual rail/cold service period plus asset life phases | Actual railcars/locomotives/yards/terminals/depots/cold providers | per declared reference flow | Calibration; signed records; native provenance; causal allocation; uncertainty Retain the source and native basis of each measured operand; document the conversion or attribution actually used and whether the supplied result is already per reference flow. |
| cp_assets | support_lifecycle | locomotive reefer network and terminal full life | Actual primary meters/manifests/provider records | asset_cohort_technology_configuration; native_delivered_quantity; initial_components_charge_included; manufacturing_install_refit_renew_replace_retire_dates; all_user_useful_duty; attributed_duty; track_yard_electrical_signalling_cells; providers_sites_periods; native_unit; T; uncertainty | Verify actual compatible assembly/provider-native gate and component scope, each life event and all-user same-cohort duty; multiply native quantity by attributable duty / positive supported all-user useful duty then normalize once by T. Manufacturing inclusion never waives other actual stages. Keep native observations and reconciliation totals on their recorded basis. For burden rows, attribute only the still-shared total and divide an assigned total only by positive qualified output of the same cohort and gate. Preserve already equivalent per-reference results. At zero output retain the burden for documented disposition. | Item(s); kg; native asset/service duty | Each event plus period reconciliation | Actual rail/cold service period plus asset life phases | Actual railcars/locomotives/yards/terminals/depots/cold providers | per declared reference flow | Calibration; signed records; native provenance; causal allocation; uncertainty Retain the source and native basis of each measured operand; document the conversion or attribution actually used and whether the supplied result is already per reference flow. |
| cp_expand_locomotive_assembly | support_lifecycle | Mandatory identity expansion locomotive_assembly (inputs/product): Complete actual rail locomotive at delivery | collected_record | requirement_id=locomotive_assembly; process_id=support_lifecycle; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; asset_or_reusable_id; model_configuration; included_initial_components; lifecycle_phase; manufacture_native_quantity; target_duty; all_user_same_cohort_lifetime_duty; replacement_event; provider_coverage_cells; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; supply_or_service_gate; accepted_service_demand; provider_functional_unit; provider_intensity_basis; covered_lifecycle_stages | Actual complete compatible diesel-electric/electric/other locomotive manufacturing delivery with initial components and native Count scope. It is not a full freight service or all life stages; actual maintenance/renewal/retirement separate. Treat this scope as a mandatory identification requirement, not an exchange. Use the original node protocol and its records; separate every actual identity, gate and independent function before quantification, then apply the retained amount/basis/evidence instructions to each compatible concrete row separately. Never use an aggregate amount across heterogeneous identities or infer the native property/unit from a group label. A conclusion that no occurrence took place must be supported by evidence; unknown applicability or identity blocks completion. For the physical asset or reusable item specified here, verify its supply gate, included initial parts, actual replacements, maintenance, cleaning, failure and retirement records. A lease or inclusive supplier contract requires an explicit coverage decision: where a delivered service is within this scope measure its accepted native demand and trace only uncovered asset stages. For a directly modelled asset, use same-cohort target duty over supported positive lifetime duty of all users; do not charge the whole facility to one service. Explicit branches (activate only on actual applicable records): locomotive_assembly_manufacture. For every applicability decision retain evidence. An evidenced absence closes only the stated scope and period; missing records remain unresolved. For a present requirement, map every occurrence to concrete row IDs and compatible native quantities, or to exact already-covered rows/provider cells, with a reason for each exclusion. Evidence must cover identity, support unit, calculation, source records and all fates. Existing and newly added branches are mutually exclusive coverage of the same event; never count the protocol itself as an exchange. Completion requires no unassigned occurrence, no duplicate coverage and no unresolved relevant quantity or identity. Collect raw fields for the evidenced branch. For each inapplicable operand record the branch decision; missing applicable quantities remain unresolved. | Physical asset or reusable article in its verified manufacture/supply unit; compatible duty for the same cohort; delivered service in its native functional unit where in scope | Every actual occurrence and each evidenced absence decision | Full declared cohort and attributable asset life/linked events | Actual responsible sites/providers of this process only | Reconcile native event totals first. Combine only the same identity, state, unit, gate and period. Apply the matching calculation once to each resulting row: assign only still-shared burdens; divide a target total only by positive qualified output on the same basis. Keep already equivalent per-reference values and resolve zero-output periods without division. | For an asset use the quantity at its documented supply gate times target duty / positive all-user lifetime duty for that cohort. Record configuration, commissioning, replacement and retired or remaining life. If the scope includes a delivered service, use its verified native intensity times matching delivered demand and retain the coverage record; charge uncovered phases separately. For a physical asset measured in Number of items / Item(s), retain the measured supply quantity and the separate lifetime-duty unit. For a matching asset quantity or independently verified service result at the stated gate, apply the following quantity rule only at its specified attribution and normalization state: attributed_locomotive_manufacture_items / T Preserve original records, applied factors and resulting units. Value mode: calculated_value; Specificity: site_specific; Normalization basis: per declared reference flow; Basis kind: reference_flow; Evidence kind: calculated_from_collection; Collection protocol: cp_assets; Sources: unsd-cpc3-65121; ghg-product-2011. Require original records, exact native support and per-concrete-row verification; these instructions do not supply a missing identity or numerical value. Completion gate: check_occurrence_completion. |
| cp_expand_refrigerated_railcar_assembly | support_lifecycle | Mandatory identity expansion refrigerated_railcar_assembly (inputs/product): Complete specially refrigerated railway car at delivery | collected_record | requirement_id=refrigerated_railcar_assembly; process_id=support_lifecycle; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; asset_or_reusable_id; model_configuration; included_initial_components; lifecycle_phase; manufacture_native_quantity; target_duty; all_user_same_cohort_lifetime_duty; replacement_event; provider_coverage_cells; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; supply_or_service_gate; accepted_service_demand; provider_functional_unit; provider_intensity_basis; covered_lifecycle_stages | Actual compatible refrigerated rail car assembly including declared body/bogie/wheels/brakes/insulation/cooling/initial charge scope; no generic road reefer or intermodal container substitution. Included initial components exclusive with whole car. Treat this scope as a mandatory identification requirement, not an exchange. Use the original node protocol and its records; separate every actual identity, gate and independent function before quantification, then apply the retained amount/basis/evidence instructions to each compatible concrete row separately. Never use an aggregate amount across heterogeneous identities or infer the native property/unit from a group label. A conclusion that no occurrence took place must be supported by evidence; unknown applicability or identity blocks completion. For the physical asset or reusable item specified here, verify its supply gate, included initial parts, actual replacements, maintenance, cleaning, failure and retirement records. A lease or inclusive supplier contract requires an explicit coverage decision: where a delivered service is within this scope measure its accepted native demand and trace only uncovered asset stages. For a directly modelled asset, use same-cohort target duty over supported positive lifetime duty of all users; do not charge the whole facility to one service. Explicit branches (activate only on actual applicable records): refrigerated_railcar_assembly_manufacture. For every applicability decision retain evidence. An evidenced absence closes only the stated scope and period; missing records remain unresolved. For a present requirement, map every occurrence to concrete row IDs and compatible native quantities, or to exact already-covered rows/provider cells, with a reason for each exclusion. Evidence must cover identity, support unit, calculation, source records and all fates. Existing and newly added branches are mutually exclusive coverage of the same event; never count the protocol itself as an exchange. Completion requires no unassigned occurrence, no duplicate coverage and no unresolved relevant quantity or identity. Collect raw fields for the evidenced branch. For each inapplicable operand record the branch decision; missing applicable quantities remain unresolved. | Physical asset or reusable article in its verified manufacture/supply unit; compatible duty for the same cohort; delivered service in its native functional unit where in scope | Every actual occurrence and each evidenced absence decision | Full declared cohort and attributable asset life/linked events | Actual responsible sites/providers of this process only | Reconcile native event totals first. Combine only the same identity, state, unit, gate and period. Apply the matching calculation once to each resulting row: assign only still-shared burdens; divide a target total only by positive qualified output on the same basis. Keep already equivalent per-reference values and resolve zero-output periods without division. | For an asset use the quantity at its documented supply gate times target duty / positive all-user lifetime duty for that cohort. Record configuration, commissioning, replacement and retired or remaining life. If the scope includes a delivered service, use its verified native intensity times matching delivered demand and retain the coverage record; charge uncovered phases separately. For a physical asset measured in Number of items / Item(s), retain the measured supply quantity and the separate lifetime-duty unit. For a matching asset quantity or independently verified service result at the stated gate, apply the following quantity rule only at its specified attribution and normalization state: attributed_reefer_car_manufacture_items / T Preserve original records, applied factors and resulting units. Value mode: calculated_value; Specificity: site_specific; Normalization basis: per declared reference flow; Basis kind: reference_flow; Evidence kind: calculated_from_collection; Collection protocol: cp_assets; Sources: unsd-cpc3-65121; ghg-product-2011. Require original records, exact native support and per-concrete-row verification; these instructions do not supply a missing identity or numerical value. Completion gate: check_occurrence_completion. |
| cp_expand_rail_infrastructure_service | support_lifecycle | Mandatory identity expansion rail_infrastructure_service (inputs/product): Actual rail infrastructure lifecycle service | collected_record | requirement_id=rail_infrastructure_service; process_id=support_lifecycle; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; provider_contract; independent_function; provider_gates; native_functional_unit; delivered_quantity; covered_process_phase_cells; uncovered_foreground_rows; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; provider_functional_unit; accepted_service_demand; provider_intensity_basis; covered_service_stages | Actual track/yard/electrical/signalling native lifecycle service with technology/duty/provider/gates stated. Rail sections alone do not represent full network; covered provider cells replace corresponding owned construction/maintenance/retirement once. Treat this scope as a mandatory identification requirement, not an exchange. Use the original node protocol and its records; separate every actual identity, gate and independent function before quantification, then apply the retained amount/basis/evidence instructions to each compatible concrete row separately. Never use an aggregate amount across heterogeneous identities or infer the native property/unit from a group label. A conclusion that no occurrence took place must be supported by evidence; unknown applicability or identity blocks completion. Apply these recording instructions only to the stated inputs/product identity and gate (Actual rail infrastructure lifecycle service). Activate only for an actually contracted independent function within this PCR scope. Record provider contract, delivered service function, gates, native functional unit, measured delivered quantity and exact covered processes/life stages. Compare each covered cell with owned activities; use complete-provider coverage or the uncovered foreground activity once. Do not substitute monetary spend, a material mass or an assumed item count for the actual function. A provider of the PCR final product cannot recursively duplicate the same final service. For every applicability decision retain evidence. An evidenced absence closes only the stated scope and period; missing records remain unresolved. For a present requirement, map every occurrence to concrete row IDs and compatible native quantities, or to exact already-covered rows/provider cells, with a reason for each exclusion. Evidence must cover identity, support unit, calculation, source records and all fates. Existing and newly added branches are mutually exclusive coverage of the same event; never count the protocol itself as an exchange. Completion requires no unassigned occurrence, no duplicate coverage and no unresolved relevant quantity or identity. Collect raw fields for the evidenced branch. For each inapplicable operand record the branch decision; missing applicable quantities remain unresolved. | Verified native functional unit of the contracted delivery; Item(s) only for independently countable accepted results | Every actual occurrence and each evidenced absence decision | Full declared cohort and attributable asset life/linked events | Actual responsible sites/providers of this process only | Reconcile native event totals first. Combine only the same identity, state, unit, gate and period. Apply the matching calculation once to each resulting row: assign only still-shared burdens; divide a target total only by positive qualified output on the same basis. Keep already equivalent per-reference values and resolve zero-output periods without division. | Use the measured accepted quantity at the specified gate. Multiply supplier intensity by demand in that same native unit only when converting an intensity to a total. Record the contract scope, acceptance, native unit and covered stages. Use time only for a delivered time-based function. For an accepted service on the basis specified by its contract, apply the following quantity rule only at its specified attribution and normalization state: attributed_native_rail_network_service / T Preserve original records, applied factors and resulting units. Value mode: calculated_value; Specificity: site_specific; Normalization basis: per declared reference flow; Basis kind: reference_flow; Evidence kind: calculated_from_collection; Collection protocol: cp_assets; Sources: unsd-cpc3-65121; ghg-product-2011. Require original records, exact native support and per-concrete-row verification; these instructions do not supply a missing identity or numerical value. Completion gate: check_occurrence_completion. |
| cp_expand_railcar_wash_wastewater | support_lifecycle | Mandatory identity expansion railcar_wash_wastewater (outputs/waste): Collected refrigerated-railcar cleaning wastewater | collected_record | requirement_id=railcar_wash_wastewater; process_id=support_lifecycle; required_direction=outputs; required_flow_type=waste; original_collection_protocol=cp_support; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; waste_origin_event; material_or_true_mixture; moisture_basis; container_tare; opening_waste_stock; generated_waste; received_waste; handover_quantity; closing_waste_stock; onsite_treatment; receiver_id; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | Each actual cargo/chemical-compatible collected car wash stream has native quantity/composition/receiver. Distinguish cargo residue, retained/evaporated water, direct discharge and waste treatment service; tap-water use is not wastewater amount. Treat this scope as a mandatory identification requirement, not an exchange. Use the original node protocol and its records; separate every actual identity, gate and independent function before quantification, then apply the retained amount/basis/evidence instructions to each compatible concrete row separately. Never use an aggregate amount across heterogeneous identities or infer the native property/unit from a group label. A conclusion that no occurrence took place must be supported by evidence; unknown applicability or identity blocks completion. Apply these recording instructions only to the stated outputs/waste identity and gate (Collected refrigerated-railcar cleaning wastewater). Activate when this process actually generates or receives the specified waste. Record material/formulation or genuine co-collected mixture, wet/dry state, container tare, origin event, stored quantities, handover gate and actual receiver. Reconcile generation + opening stock + receipts = handovers + closing stock + separately recorded onsite treatment. Different separately collected wastes require different rows; one genuine receiving mixture may remain one row, with composition as a nonadditive audit. Useful recovery, customer-retained items and waste are distinct fates; no automatic substitution credit. For every applicability decision retain evidence. An evidenced absence closes only the stated scope and period; missing records remain unresolved. For a present requirement, map every occurrence to concrete row IDs and compatible native quantities, or to exact already-covered rows/provider cells, with a reason for each exclusion. Evidence must cover identity, support unit, calculation, source records and all fates. Existing and newly added branches are mutually exclusive coverage of the same event; never count the protocol itself as an exchange. Completion requires no unassigned occurrence, no duplicate coverage and no unresolved relevant quantity or identity. Collect raw fields for the evidenced branch. For each inapplicable operand record the branch decision; missing applicable quantities remain unresolved. | Receiver-accepted native quantity of the specific waste or genuinely co-collected mixture in its measured state | Every actual occurrence and each evidenced absence decision | Full declared cohort and attributable asset life/linked events | Actual responsible sites/providers of this process only | Reconcile native event totals first. Combine only the same identity, state, unit, gate and period. Apply the matching calculation once to each resulting row: assign only still-shared burdens; divide a target total only by positive qualified output on the same basis. Keep already equivalent per-reference values and resolve zero-output periods without division. | Match generation, retained stock, onsite treatment and measured handover to receiver records. Separate mixed-stream quantity from constituent measurements; wet/dry or mass/volume conversion needs matching composition or density. Receiver transfer and direct environmental release have distinct gates. For the stated physical identity and matching input basis, apply the following quantity rule only at its specified attribution and normalization state: attributed_native_collected_railcar_wash / T Preserve original records, applied factors and resulting units. Value mode: calculated_value; Specificity: site_specific; Normalization basis: per declared reference flow; Basis kind: reference_flow; Evidence kind: calculated_from_collection; Collection protocol: cp_support; Sources: unsd-cpc3-65121; ghg-product-2011. Require original records, exact native support and per-concrete-row verification; these instructions do not supply a missing identity or numerical value. Completion gate: check_occurrence_completion. |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| qualified_rail_work | reference output and cargo segment ledger | T = sum(m_i_t * d_i_km) over each actual loaded segment i of each qualified accepted delivered cargo portion; use its actual net cargo mass after pickup/drop, excluding locomotive/car/container tare. The same physical segment/portion appears once; no output for empty/stationary/failed cargo portions. | m_i_t; d_i_km; accepted_portion_ids; cp_movement | T | ghg-product-2011 |
| normalize_rail_work | all inventory except final reference output | x_ref = sum(x_native_attributed) / T; T is positive actual qualified refrigerated delivered cargo work in t*km of the same period/cohort; final reference output is 1 tkm. | x_native_attributed; T; cp_movement; cp_cold; cp_support; cp_assets | x_ref | ghg-product-2011 |
| exclusive_native_ledger | each actual fuel refrigerant cargo and storage account | opening + receipts + inward_transfers = closing + actual_use_or_delivery + outward_transfers + measured_loss; destinations are mutually exclusive. Internal recovered material stays closing or is later recorded once at actual use/outward gate, not another recovery term. If cargo moisture changes, close conserved dry matter using EACH observed wet mass/moisture and water separately with actual addition/retention/outgoing/evaporation; unknown deficit is not an inferred leak. | actual native stocks; receipts; transfers; measured use_delivery_loss; cp_movement; cp_cold; cp_support | closed native ledger | ghg-product-2011 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| native_traceability | all nodes | Retain raw signed mass/route/quality/meter records, native support/gates, same-node protocol, source/provider scope, all-user allocation and uncertainty for every real exchange. Unknown stays incomplete. | Calibrations, manifests, operator/provider and waste registers |
| rail_cold_representativeness | reference and reefer preservation | Actual consignment segment mass/distance, frozen/refrigerated state, temperature/time/quality, train/car/cooling technology, shunt/empty duty, season and provider scope required; one equipment example cannot define universal fleet behavior. | Actual journey chain, logger and compatible equipment records |
| no_fabricated_ranges | quantities and methods | No universal fuel/cooling/carload/empty ratio, emission factor, refrigerant leakage or life default supplied. Future empirical guardrails need independent compatible samples; a batch maximum cannot validate the same batch. Missing quantity/identity is not zero. | Completeness and independent source register |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| reference_work | all nodes | Verify actual frozen/refrigerated goods in specially refrigerated rail cars, each actual accepted delivered cargo portion and loaded segment mass/distance, OD/gates and cold quality/time. Cargo tonnes exclude locomotive/car/container tare. T is actual qualified delivered work, not gross train tonne-km, railcar count/TEU, billed capacity, stationary time or distance double-counted at yard handoffs. | ghg-product-2011 |
| cold_energy_balance | all nodes | Validate actual locomotive versus reefer/terminal energy, all supply/conversion/storage/recovery gates, fuel stock/use/spill and refrigerant initial/makeup/stock/recovery/actual leak by equipment and period. Compatible actual operator instructions and quality outcomes, not default setpoints, govern collection. Unexplained missing balance is not inferred emission or cargo loss. | ghg-product-2011 |
| coverage_life | all nodes | Check complete loaded/empty/shunt/yard/failed/cold duties, all users/outputs/sites/periods, exclusive provider cells and positive compatible same-cohort lifetime duty. Pool actual attributable numerators and qualified work T across real contributing sites then normalize, no unweighted intensity mean. Unknown supplier gates/asset life/quantity/receiver stays incomplete. | ghg-product-2011 |
| identity_alignment | all nodes | Each implemented exchange needs verified concrete UUID/native property/unit/state/gate/medium. Reference support identity is independent from service UUID. Compare all EN/ZH functional/profile fields, ordered cards/rules/protocols, constants and source references with canonical generated projection; disclose skipped/inconclusive checks. | ghg-product-2011 |
| atomic_rail_movement | rail_movement | Reject any exchange whose identity combines alternative materials, independently supplied assets/services, different waste streams, pollutant species, carbon origins, phases, particle fractions or environmental compartments. For every applicable cp_expand_ requirement in this node require an occurrence/absence record and exhaustive concrete-row register, each with its own identity, gate, verified UUID, native property/unit, quantity, source record, calculation and exclusive responsibility. A supplier-covered whole assembly or genuinely collected mixture remains one actual supplied/collected identity; do not invent constituent exchanges. Never bind a requirement label/id, generic NOx/VOC/PM total, unspecified physical release, or heterogeneous list to one UUID. Reconcile all requirement children, source events, provider-covered cells and cross-node transfers; no missing-as-zero or double counting. Unknown identity, applicability, quantity or fate blocks a complete foreground package and final TIDAS exchange production. The PCR checker does not verify these foreground facts; retain their row-addressable evidence for review. | ghg-product-2011 |
| atomic_reefer_preservation | reefer_preservation | Reject any exchange whose identity combines alternative materials, independently supplied assets/services, different waste streams, pollutant species, carbon origins, phases, particle fractions or environmental compartments. For every applicable cp_expand_ requirement in this node require an occurrence/absence record and exhaustive concrete-row register, each with its own identity, gate, verified UUID, native property/unit, quantity, source record, calculation and exclusive responsibility. A supplier-covered whole assembly or genuinely collected mixture remains one actual supplied/collected identity; do not invent constituent exchanges. Never bind a requirement label/id, generic NOx/VOC/PM total, unspecified physical release, or heterogeneous list to one UUID. Reconcile all requirement children, source events, provider-covered cells and cross-node transfers; no missing-as-zero or double counting. Unknown identity, applicability, quantity or fate blocks a complete foreground package and final TIDAS exchange production. The PCR checker does not verify these foreground facts; retain their row-addressable evidence for review. | ghg-product-2011 |
| atomic_support_lifecycle | support_lifecycle | Reject any exchange whose identity combines alternative materials, independently supplied assets/services, different waste streams, pollutant species, carbon origins, phases, particle fractions or environmental compartments. For every applicable cp_expand_ requirement in this node require an occurrence/absence record and exhaustive concrete-row register, each with its own identity, gate, verified UUID, native property/unit, quantity, source record, calculation and exclusive responsibility. A supplier-covered whole assembly or genuinely collected mixture remains one actual supplied/collected identity; do not invent constituent exchanges. Never bind a requirement label/id, generic NOx/VOC/PM total, unspecified physical release, or heterogeneous list to one UUID. Reconcile all requirement children, source events, provider-covered cells and cross-node transfers; no missing-as-zero or double counting. Unknown identity, applicability, quantity or fate blocks a complete foreground package and final TIDAS exchange production. The PCR checker does not verify these foreground facts; retain their row-addressable evidence for review. | ghg-product-2011 |
| check_occurrence_completion | all actual rows and identification protocols | Retain applicability evidence and map each actual event to its inventory row or verified provider coverage. Evidence is required for absence; unknown remains unresolved. For each compatible identity, state, unit, period and gate, reconcile receipts and opening stock against closing stock and exclusive physical exits. In a consumables issue ledger, distinguish unused returns, internal issues and actual use for successful, failed and reworked duties. In a custody or material balance use opening stock + external receipts + paired internal receipts = closing stock + paired internal dispatch + accepted external deliveries + unused external returns + used goods or recovered material sent out + waste sent out + direct releases + quantity consumed or transformed within this boundary. Where that identity arises inside the gate, add evidenced formation or birth to its receipts and link the originating event. Cancel internal formation and transfers across the enclosing conserved-material or elemental balance. Classify each event once, include retained recovered stock at closing, and distinguish transfers from use. Apply the specific custody, phase, transformation or elemental rule on its own compatible basis; exclude downstream products of already counted transformation from the same exit total. Measure operands independently and investigate unresolved residuals. Keep physical totals separate from burden allocation. For a raw shared burden use Q_raw × s / R, where s is the evidenced target driver divided by the positive driver total for all eligible users of that same pool and period. Use Q_target / R for an already assigned target total and retain q_ref unchanged for an already equivalent per-reference result. For a provider intensity first multiply by measured demand in its matching native unit. Apply an additional share only for a distinct, still-shared stage. R is the positive qualified output quantity in the same reference unit, cohort and gate. Retain failed and partial duties without enlarging R; for zero output retain the burden with evidenced carry-forward or final disposition. For owned assets use the same-cohort all-user lifetime duty and exclusive initial-component coverage. Delivered services replace only their documented covered stages. Unresolved applicable identity, quantity, support unit, fate or allocation denominator prevents final dataset completion. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Actual compatible refrigerated-car rail freight attached to cargo supply-chain LCA |
| allowed_use | Comparable net-cargo segment mass/distance, cold quality/time and actual traction/reefer/provider/lifecycle boundaries |
| excluded_use | Cargo manufacture, other freight functions, unsupported tonne-km equivalence, missing duty treated zero or unverified final exchanges |
| required_metadata | All reference qualifiers, actual native source records, cargo/cold/fate/energy ownership, provider gates, allocation and all-user life |
| required_quality_disclosure | Unknown identities/amounts, method domain, site/period representativeness, failed/rejected duty, cold media/fates, uncertainty/skipped checks |
| update_trigger | Changed cargo/method/route/quality/control/technology/asset/provider or verified new evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-65121 | official_guidance | UNSD CPC3.0 65121; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Full frozen/refrigerated goods in specially refrigerated rail cars, no numerical reference rule |
| ghg-product-2011 | standard | WRI/WBCSD Product Life Cycle Accounting and Reporting Standard2011,chapters6–10; https://ghgprotocol.org/sites/default/files/ghgp/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Boundary/data/allocation principles; full assets and algorithms are declared PCR choices |
| up-reefer-operating-instructions | handbook | Union Pacific Refrigerated Unit Operating Instructions, updated2018-12-18; https://www.up.com/content/dam/upcom/migration/uprr/customers/documents/up-pdf-nativedocs/pdf-ship-q-reefer-car.pdf | Equipment-specific precondition/testing, cooling/heating/door-state and commodity controls; not universal settings |
| bnsf-reefer-equipment | handbook | BNSF Refrigerated Boxcar equipment; https://www.bnsf.com/ship-with-bnsf/ways-of-shipping/equipment/refrigerated-boxcars.html | Actual refrigerated-car configuration and commodity questions only; changeable provider specifications are not universal dimensions/payload or separate cooling-unit evidence |
| ipcc-mobile-2006 | official_guidance | IPCC2006 Guidelines Vol.2 Ch.3 Mobile Combustion railways; https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_3_Ch3_Mobile_Combustion.pdf | Rail combustion activity and species/method questions; no generic emission factors adopted |

