---
pcr_id: pcr.motorized-taxi-passenger-leg-service
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Motorized taxi passenger transport leg service

## 1. Scope and Applicability

This PCR covers actual motorized taxi passenger transport within or between urban and suburban areas, including actual non-scheduled airport shuttle services and connected reservation responsibilities. Assess the real service function, geography, operator responsibility and scheduling model; a brand, licence, vehicle example or a reservation for a pickup time does not itself prove classification. Specific destination and distance-based billing are general characteristics, not absolute conditions: declare actual OD, extent, duration, quality and fulfilment even where the actual fare model differs.

The reference delivers one actual passenger through one eligible boarding-to-alighting motorized taxi transport leg. It is not a reservation, party, driver, empty vehicle dispatch, available seat or whole chauffeured-hire engagement. All actual customer persons, including evidenced free passengers, are recorded individually. Multi-stop pooling does not create a new output at every intermediate stop for a person remaining aboard; actual vehicle changes and genuinely separate boarding-to-alighting legs require their own records. Count N only from compatible completed person-leg records in the same declared cohort, retaining actual OD/distance/time distributions and completion quality. A cancelled or failed leg is not completed output; retain its causal burden. N=0 has no finite per-person intensity.

The method is not passenger-car-only. Actually eligible motorized two-wheel, three-wheel and larger shared or dedicated airport-transfer vehicles retain their own chassis, propulsion, controls, seating/accessibility and safety interfaces. The conditional gasoline car, BEV car, gasoline motorcycle, CNG three-wheeler and diesel passenger-van cards below each represent only that definite actual assembly when present; they are not a selector for all vehicles. Other actual configurations, including electric two/three-wheelers, LPG/diesel/petrol three-wheelers, hybrids, alternative drives or genuinely qualifying automated taxi operation, require independent native asset, energy, operating-support, quality and lifecycle expansion before completion. No national technical example automatically belongs to this code, and missing identity or quantity is incomplete data, not a product exclusion.

Include actual booking/dispatch digital support, pickup/deadhead, rank/queue waiting, cruising/repositioning, failed/no-show/cancelled work, empty return and actual airport/terminal/depot/charging interfaces through a closed vehicle/operator/platform/period duty ledger. Partition overlapping platforms and all other/private users once, not by summing logins or paid distance. Include complete native manufacture, maintenance, batteries/tyres/components, roads, ranks, terminals, charging/support assets and actual retirement/treatment. Whole-object/component, whole-blend/replacing component, purchase/stock/combustion/fate, internal recovery and inclusive provider coverage are mutually exclusive for the same physical responsibility.

Exclude scheduled airport shuttle fulfilment, the distinct driver-equipped car-hire/availability or whole-hire function, man/animal-drawn taxis, water taxis, air taxis and ambulance/medical-care service; separately assess sightseeing and integrated mixed-mode journey products. A standalone booking intermediary is not the completed physical output, while connected reservation burdens remain in this service boundary. Do not infer scheduled operation merely from a booked pickup time, non-scheduled eligibility merely from the word shuttle, or chauffeur-hire function merely from a driver being present. Actual local operating/safety requirements and delivered service conditions must be evidenced and disclosed without exporting one jurisdiction or operator rule globally.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.motorized-taxi-passenger-leg-service |
| classification_refs | CPC3.0 64115 Taxi services; dedicated full functional scope, exact |
| covered_products | Actually eligible motorized taxi passenger transport within/between urban/suburban areas; actual non-scheduled airport shuttle passenger transport with connected reservation responsibility |
| excluded_products | Scheduled airport shuttle; distinct chauffeured vehicle-hire/availability function; man/animal drawn, water or air taxi; ambulance/medical care; standalone booking-only output; other distinct sightseeing/mixed-mode products |
| representative_product | One actual person completing one qualified motorized taxi transport leg with declared OD/extent/quality/time |
| production_route | Actual connected booking/dispatch; pickup, motorized transport and alighting; complete causal empty/wait/failed/support and asset lifecycle coverage |
| market_state | Actually fulfilled passenger transport, with real motorized vehicle/operator and completion evidence |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed motorized taxi passenger transport leg |
| How much | 1 actual completed person transport leg |
| How well | Eligible actual service/geography/non-scheduled airport status, OD, distance/time, party/pooling, accessibility/safety and delivered quality declared |
| How long or cycle | Actual boarding-to-alighting transport interval and complete causally attributed duty/asset lifecycle; actual service period and carry disclosed |
| reference_flow_link | completed_taxi_leg |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed motorized taxi passenger transport leg |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | actual_64115_function_and_urban_suburban_geography; actual_non_scheduled_airport_shuttle_if_present; accountable_operator_and_connected_reservation; actual_OD_and_distance_distribution; actual_boarding_alighting_completion_quality; actual_service_duration_and_period; actual_customer_persons_party_segment_pooling; actual_vehicle_chassis_drive_configuration; safety_accessibility_and_quality; supply_gate_stock_and_fates; all_platform_other_private_user_duty_closure; provider_native_unit_and_exclusive_coverage; complete_life_all_user_asset_duty; uncertainty_and_missingness |

Required qualifiers must be declared in package metadata,process notes,reference-flow comments or equivalent;missing qualifiers make the definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| service_count | reference product | Number of items | Item(s) | N is the positive count of actual completed qualified motorized taxi person-legs in the declared service cohort. Preserve every actual person and boarding/alighting OD; neither driver nor party/booking/dispatch/seat/payment is a person-leg. Intermediate stops for a person remaining aboard do not create further legs. Reconcile failed/unfinished/cross-period duties and actual vehicle changes. |
| distance_basis | all inventory rows | Native service records | Actual native unit | Keep actual vehicle-km, passenger-km, boardings and completed legs distinct. Passenger distance is the sum of actual passengers times actual segment distance; an optional per-passenger-km result needs its own supported reference basis and disclosure, not relabelling this Count flow. |
| native_conversion | all inventory rows | Native compatible property | Actual native unit | Preserve measured units. Metered electricity kWh may use 3.6 MJ/kWh; this is an energy-unit conversion, not a fuel heating-value factor. Fuel/water volume-to-mass requires actual compatible density/state; N2O-N, NOx-as-NO2 and refrigerant CO2-equivalent require explicit substance conversion. |
| fuel_stock_and_fate | gasoline_supply;diesel_supply;cng_supply;lpg_supply | Mass | kg | Net fuel withdrawn = opening stock + actual receipts - closing stock - returns. Independently reconcile fuel actually burned, spilled, evaporated, recovered or otherwise transferred; do not infer those fates from an unexplained residual. Fuel-supply burden follows attributed net withdrawal, while direct combustion calculations use only the compatible actually burned quantity and supported carbon/oxidation basis. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual motorized taxi service cohort with identified supplier gates, vehicle/duty records and connected reservation responsibilities; earlier supply/lifecycle stages remain required. |
| starting_condition_role | Measured service-cohort and supplier-gate facts defining foreground collection, not an upstream cut-off credit. |
| product_classification_scope | Dedicated64115full actual motorized taxi function within/between urban/suburban areas including actual non-scheduled airport shuttle; general distance/destination note is not absolute |
| recursive_input_rule | No self-purchase of own physical leg. A real completed subcontracted taxi provider result may replace only its evidenced covered cells, at its verified native unit and actual matched demand; include uncaptured integrator/other lifecycle burdens. |
| upstream_dataset_requirement | Compatible complete supply, vehicle/battery/infrastructure and treatment datasets with actual native units, technology, geography, lifetime and coverage. |
| disclosure | All actual duties, completed and failed service, energy/mass balances, empty operation, provider inclusions, shared users, lifecycle allocation, unresolved data and route comparability. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| service_coverage | taxi_service | Use one declared service cohort and account for preparation, actual loaded and empty running, layover, failed or zero-passenger operated duties and associated support once; unexplained residuals or unknown applicability cannot be excluded as zero. | nyc-tlc-utilization-2025;ghg-product-standard |
| upstream_and_assets | taxi_service | Include compatible energy-supply and complete-life vehicle, battery, road and depot/charging infrastructure burdens with actual duty/lifetime allocation. Document provider coverage before adding separate operation, manufacturing, maintenance or treatment so no life stage is counted twice. | eea-electric-vehicles;ghg-product-standard |
| conditional_technology | taxi_service | Inventory only actual propulsion and control configurations, but retain compulsory identification/expansion of every other actual energy carrier, hydrogen supply, hybrid subsystem, reagent, refrigerant or material. Grid-electric operation does not prove zero upstream or non-exhaust emissions. | eea-electric-vehicles;ipcc-mobile-combustion |
| fate_interfaces | taxi_service | Reconcile distinct collected liquids/solids, recovered products and direct substance/medium emissions; collected wastewater is not an air emission, evaporated water is not a waste-treatment input, and waste delivery is not treatment already performed. | ghg-product-standard |
| duty_and_personal_ownership | taxi_service | Require a complete vehicle-duty ledger distinguishing actual customer segments, dispatch/pickup, empty cruising, waiting, failed hires and actual personal/driver travel. Retain causally attributable service duty even without a passenger. Assign cross-purpose/shared movements once with evidence; a platform fee or driver wage is not a physical burden. | nyc-tlc-utilization-2025;ghg-product-standard |
| fuel_blend_ownership | gasoline_supply; diesel_supply | Declare whether actual supplied fuel is represented as one verified compatible whole-blend supply or as physical component supplies. A whole-blend composition/carbon-origin ledger is not an additional component input. Component exchanges replace the matching whole-blend quantity and covered upstream burdens, with mass, native units and provider-scope closure. Never add the full supplied blend plus its contained bio/fossil component supply; neither route may omit an actual constituent or its upstream burden. | ipcc-mobile-combustion;ghg-product-standard |
| taxi_function_gate | taxi_service | Verify real motorized taxi service within/between urban/suburban areas or actual non-scheduled airport shuttle; actual connected reservation is included. General destination/distance billing is not absolute. A pickup appointment alone is not a public schedule; actual larger shuttle pooling/vehicle type does not exclude eligible function. Distinct chauffeur availability/whole hire is not forced into completed person-leg output. | cpc3-structure |
| native_provider_coverage | purchased_taxi_leg | Maintain a responsibility ledger indexed by actual vehicle/duty/period/provider/lifecycle-stage cell. Each cell has exactly one owner: owned physical flows OR a compatible provider completed result plus only its uncaptured burdens. For a native provider result q_u per native unit u, use q_u times actual compatible demand A_u times supported cohort/all-user share divided once by N. Actual native unit conversion and provider completeness must be proved; no freight/vehicle/booking result substitution. |  |
| asset_supply_native_gate | all inventory rows | For each complete asset or independently supplied replacement, preserve actual native manufacture quantity and exact initial-components/provider coverage. Allocate that same asset supply by compatible attributed duty over supported positive total all-user useful duty, then /N. Include other taxi/platform/private users in the same denominator, not a finance term. Whole assembly and contained initial components cannot both be supplied; replacement packs/tanks/tyres, maintenance, actual retirement and missing delivery stay separately owned. No manufacturer warranty equals actual useful life. |  |
| all_fuel_blends_and_supply_gates | gasoline_supply;diesel_supply;cng_supply;lpg_supply | For every actual supplied fuel, use one matching full mixture/blend with its composition/carbon-origin ledger OR replacing component supplies with native mass, stock and provider coverage closure. Bi-fuel CNG/petrol or LPG/petrol are two distinct actual fuel supplies, not one blended tank unless actually mixed. Do not omit startup/idle fuel, add contained components twice, treat supply withdrawals as combustion, or treat product CNG/LPG as elementary methane/propane emissions. Complete missing at-plant-to-use delivery/conditioning/storage and fates. | bajaj-re-config |
| service_safety_and_all_users | taxi_service | Evidence the actual vehicle/body/drive and delivered accessibility/safety/quality, including actual helmet/child restraint/wheelchair lift/restraint/control or remote support where relevant. Do not assume presence or a national/operator limit universally. Operator/driver/passenger ownership changes allocation and coverage, not actual necessary service interfaces; evidence non-applicability or complete every actual item and native quantity. | uber-motorbike;uber-auto |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| taxi_service | Motorized taxi passenger leg and attributed lifecycle | required | Actual qualified motorized taxi function delivered; retain causal zero-output duty | Final passenger service and complete supporting scope | completed_taxi_leg |

All real physical and subcontracted duties share this final qualified motorized taxi person-leg reference. Conditional cards apply only to their actual matching objects and exclusive uncovered cells;every other actual object requires mandatory atomic expansion.

### Process: Motorized taxi passenger leg and attributed lifecycle (`taxi_service`)

#### Inputs

##### Product flows

###### Gasoline (`gasoline_supply`)

Only actual gasoline/petrol at its evidenced supply grade and blend. Record consumed mass through stock closure; native volume needs compatible measured density/state. Identify actual blend constituents and their carbon origins without silently treating bio-carbon as fossil. Use one compatible whole-blend supply with its composition ledger, or component supplies replacing that exact whole-blend supply; never add a full blend and its contained component supply together. Use only when the actual identity/formulation and provider gate match. Bridge the actual at-plant or other supply gate to receipt/use and independently own missing delivery, conditioning, storage and losses; this row does not silently include them or all other formulations.

- Selected flow: Gasoline `e6677cd5-b574-4e00-a3bd-c373ac796135`
- Flow property / unit: Mass / kg
- Amount rule: attributed_net_gasoline_withdrawal_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources: `ipcc-mobile-combustion`

###### Diesel fuel (`diesel_supply`)

Only actual diesel or a separately verified compatible diesel supply; other fuels require their own compatible records. For a blend, identify constituents/origins in its ledger and choose a compatible whole-blend supply or replacing component supplies with mass/coverage closure; do not add both. Volume needs actual compatible density/state and source before conversion. Use only when the actual identity/formulation and provider gate match. Bridge the actual at-plant or other supply gate to receipt/use and independently own missing delivery, conditioning, storage and losses; this row does not silently include them or all other formulations.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: attributed_net_diesel_withdrawal_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources: `ipcc-mobile-combustion`

###### Alternating current (`charging_ac`)

Conditional on actual grid charging. Meter the declared AC delivery gate; transformer/charger losses inside that gate stay included. Battery discharge is an internal transfer, not another purchased-electricity input. Apply to actual compatible externally delivered AC for any eligible vehicle, not just cars. Record voltage and point of delivery and separately complete missing upstream delivery/conditioning/loss stages. Externally supplied DC or battery-exchange supply is a distinct actual identity; internal rectification, pack discharge and regeneration are internal transfers, not a second purchased supply.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / MJ
- Amount rule: attributed_charge_input_MJ / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources: `eea-electric-vehicles`

###### Alternating current (`support_ac`)

Actual lighting, maintenance and terminal duties after excluding quantities already assigned to charging_ac or an inclusive provider. Submeter common services before using an evidenced all-user physical driver.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / MJ
- Amount rule: attributed_noncharging_depot_MJ / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_depot`
- Sources: `ghg-product-standard`

###### Tap water (`wash_water`)

Only actually supplied liquid tap water at the declared supply gate. Native volume is retained separately until its compatible density or independently verified volume relation is documented; no universal density is set. Use only when the actual identity/formulation and provider gate match. Bridge the actual at-plant or other supply gate to receipt/use and independently own missing delivery, conditioning, storage and losses; this row does not silently include them or all other formulations.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: attributed_tap_water_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_depot`
- Sources: `ghg-product-standard`

###### Detergent (`cleaning_detergent`)

Use only for an actual compatible synthetic surfactant cleaning product; soaps, disinfectants, solvents and other formulations require separate rows, not a detergent umbrella. Only a documented detergent product compatible with the selected identity and actual formulation gate. A different disinfectant, solvent or cleaner is an independent required exchange, not this generic product by name alone. Use only when the actual identity/formulation and provider gate match. Bridge the actual at-plant or other supply gate to receipt/use and independently own missing delivery, conditioning, storage and losses; this row does not silently include them or all other formulations.

- Selected flow: Detergent `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Flow property / unit: Mass / kg
- Amount rule: attributed_compatible_detergent_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_depot`
- Sources: `ghg-product-standard`

###### Refrigerant, R134a (`refrigerant_r134a_supply`)

Use this generic chemical product only when actual supply evidence establishes the matching single R134a refrigerant. Other isomers, refrigerant mixtures or formulations require separate identity. It specifies neither vehicle, leakage/recharge quantity nor provider lifecycle coverage. Conditional on actual R134a equipment and recharge. Initial charge is owned once by the vehicle lifecycle or separately recorded supply. Recharge is not automatically equal to leakage; recoveries and remaining charge close the balance. Use only when the actual identity/formulation and provider gate match. Bridge the actual at-plant or other supply gate to receipt/use and independently own missing delivery, conditioning, storage and losses; this row does not silently include them or all other formulations.

- Selected flow: Refrigerant, R134a `b33b6abf-6a88-4ec1-ab79-6aa5aac69e8a`
- Flow property / unit: Mass / kg
- Amount rule: attributed_R134a_recharge_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_maintenance`
- Sources: `ghg-product-standard`

###### Gasoline passenger car, delivered vehicle (`gasoline_car_supply`)

Only actual gasoline passenger-car supply at its verified manufacturing/supply gate. Complete-life duty is an allocation denominator, not proof of whole-life transport coverage. Independently collect uncovered operation, maintenance and retirement/treatment. An inclusive provider replaces only its exact covered exchanges. Leasing rent and financial depreciation are not vehicle counts.

- Selected flow: Gasoline passenger car, delivered vehicle
- Flow property / unit: Number of items / Item(s)
- Amount rule: attributed_gasoline_car_supply_equivalents / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `ghg-product-standard`

###### Battery-electric passenger car, delivered vehicle (`bev_car_supply`)

Only actual complete battery-electric passenger-car supply at a verified manufacturing gate. State exact vehicle and initial battery inclusion; do not add the same initial pack again. Lifetime allocates supply only; add uncovered use, replacements, maintenance and retirement independently. Actual other vehicle or battery configurations require independent expansion.

- Selected flow: Battery-electric passenger car, delivered vehicle
- Flow property / unit: Number of items / Item(s)
- Amount rule: attributed_BEV_car_supply_equivalents / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `eea-electric-vehicles`

###### Compressed natural gas, vehicle-fuel supply (`cng_supply`)

Only actual compressed natural-gas vehicle fuel with measured mixture/composition, pressure/temperature, origin, quality and supplier gate. This is not pure methane by assumption or an elementary emission. Keep CNG and pilot/startup petrol separately, including actual switches and residual tank stock. Choose one compatible whole-fuel mixture supply plus composition ledger OR replacing components, never both. Retain compression/delivery/storage losses and each actual leak/vent substance-medium independently; no standard-density/heating-value factor.

- Selected flow: Compressed natural gas, vehicle-fuel supply
- Flow property / unit: Mass / kg
- Amount rule: attributed_net_actual_CNG_withdrawal_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources: `bajaj-re-config`, `ipcc-mobile-combustion`

###### Liquefied petroleum gas, vehicle-fuel supply (`lpg_supply`)

Only actual automotive LPG with evidenced propane/butane/other actual formulation, phase, grade and gate; not pure propane or gas-phase methane by renaming. Preserve independent petrol startup or other fuel actual use in bi-fuel operation, tank mass stocks, withdrawal versus burn/vent/spill and supplier compression/liquefaction/delivery coverage. Whole mixture OR replacing physical components with mass/provider closure; do not add its constituent supply again.

- Selected flow: Liquefied petroleum gas, vehicle-fuel supply
- Flow property / unit: Mass / kg
- Amount rule: attributed_net_actual_LPG_withdrawal_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources: `bajaj-re-config`, `ipcc-mobile-combustion`

###### Gasoline motorcycle, delivered vehicle (`gasoline_motorcycle_supply`)

Only the actual matching complete assembly at its documented manufacturing/supply gate, identified configuration and propulsion. This conditional card does not assert that an operator example uses that fuel or that all taxis use this assembly. Record actual native delivered quantity, initial component/pack/tank/control inclusion and missing delivery/use/maintenance/replacements/retirement separately. For this same asset, allocate supply by attributed compatible duty / supported positive total all-user useful duty; this share does not turn manufacture into a whole-life service. Different propulsion/chassis assemblies require their own concrete rows.

- Selected flow: Gasoline motorcycle, delivered vehicle
- Flow property / unit: Number of items / Item(s)
- Amount rule: attributed_gasoline_motorcycle_supply_manufacture_equivalents / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `uber-motorbike`, `ipcc-mobile-combustion`

###### CNG passenger three-wheeler, delivered vehicle (`cng_three_wheeler_supply`)

Only the actual matching complete assembly at its documented manufacturing/supply gate, identified configuration and propulsion. This conditional card does not assert that an operator example uses that fuel or that all taxis use this assembly. Record actual native delivered quantity, initial component/pack/tank/control inclusion and missing delivery/use/maintenance/replacements/retirement separately. For this same asset, allocate supply by attributed compatible duty / supported positive total all-user useful duty; this share does not turn manufacture into a whole-life service. Different propulsion/chassis assemblies require their own concrete rows.

- Selected flow: CNG passenger three-wheeler, delivered vehicle
- Flow property / unit: Number of items / Item(s)
- Amount rule: attributed_cng_three_wheeler_supply_manufacture_equivalents / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `bajaj-re-config`, `uber-auto`

###### Diesel passenger van, delivered vehicle (`diesel_passenger_van_supply`)

Only the actual matching complete assembly at its documented manufacturing/supply gate, identified configuration and propulsion. This conditional card does not assert that an operator example uses that fuel or that all taxis use this assembly. Record actual native delivered quantity, initial component/pack/tank/control inclusion and missing delivery/use/maintenance/replacements/retirement separately. For this same asset, allocate supply by attributed compatible duty / supported positive total all-user useful duty; this share does not turn manufacture into a whole-life service. Different propulsion/chassis assemblies require their own concrete rows.

- Selected flow: Diesel passenger van, delivered vehicle
- Flow property / unit: Number of items / Item(s)
- Amount rule: attributed_diesel_passenger_van_supply_manufacture_equivalents / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `supershuttle-service`, `ipcc-mobile-combustion`

###### Motorcycle protective helmet, delivered assembly (`motorcycle_helmet_supply`)

Only an actual compatible complete motorcycle protective helmet at its manufacture/supply gate; helmets are not assumed supplied by every operator or counted as passengers. Record whether supplied by operator, driver, passenger or provider, actual service duty, cleaning/replacements, positive all-user useful duty and treatment. Necessary service-use responsibility remains even where ownership differs, with disclosed boundary and no duplicate provider/user supply. Each actual other safety/accessibility assembly or cleaning formulation requires its own concrete row.

- Selected flow: Motorcycle protective helmet, delivered assembly
- Flow property / unit: Number of items / Item(s)
- Amount rule: attributed_actual_helmet_manufacture_equivalents / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `uber-motorbike`

###### Completed motorized taxi passenger transport leg (`purchased_taxi_leg`)

Only one actual completed accountable provider motorized taxi person-leg matching this precise function, geography, quality, OD and delivered scope at its provider gate. Use actual recipient/leg linkage and provider native Count activity; a provider result already per leg is multiplied by actual matched leg demand, not divided by occupancy again. Covered manufacture/use/support/treatment cells replace those exact foreground cells; own physical operation is not bought from itself. Native vehicle-km, hours, passenger-km or whole engagement results need their own verified identity and measured compatible activity conversion, not this Count relabelled.

- Selected flow: Completed motorized taxi passenger transport leg
- Flow property / unit: Number of items / Item(s)
- Amount rule: actual_matched_completed_provider_person_legs_attributed_to_cohort / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_provider`
- Sources: `cpc3-structure`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed motorized taxi passenger transport leg (`completed_taxi_leg`)

One actual passenger completing the declared eligible motorized taxi boarding-to-alighting leg, with actual OD, extent, duration, service quality and operator responsibility. One booking/party, driver, fare, dispatched vehicle, seat or whole availability/hire engagement is not one completed person. Reconcile staggered shared pickups/dropoffs and actual vehicle changes without counting intermediate stops again for a continuing passenger. The final reference output is normalized to one; raw N comes from cp_service.

- Selected flow: Completed motorized taxi passenger transport leg
- Flow property / unit: Number of items / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_service`
- Sources: `cpc3-structure`, `nyc-tlc-yellow-2025`

##### Waste flows

###### Collected liquid wastewater from car washing (`wash_wastewater`)

Only the independently collected liquid outlet with its actual composition and receiver gate. Sludge, spent oil and direct environmental discharges are separate exchanges. Do not count evaporated water as wastewater or assume all supplied water leaves in this outlet.

- Selected flow: Collected liquid wastewater from car washing
- Flow property / unit: Mass / kg
- Amount rule: attributed_collected_car_wash_wastewater_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fates`
- Sources: `ghg-product-standard`

###### Used lubricating oil (`spent_engine_oil`)

Conditional on the actual oil type and independent collection. Different hydraulic fluids, solvents, filters and oil-water separators are not merged into this flow. Reconcile new oil, retained oil, losses and recovered spent oil.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass / kg
- Amount rule: attributed_spent_mineral_engine_oil_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fates`
- Sources: `ghg-product-standard`

###### End-of-use composite passenger-car pneumatic tyre (`spent_car_tyres`)

One physically collected composite tyre stream at the receiver gate, not an elemental emission or all maintenance waste. Separately account for retreading, reuse and abrasion loss; replacing a tyre does not establish the amount emitted to air.

- Selected flow: End-of-use composite passenger-car pneumatic tyre
- Flow property / unit: Mass / kg
- Amount rule: attributed_collected_end_of_use_car_tyre_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fates`
- Sources: `eea-electric-vehicles`

##### Elementary flows

###### carbon dioxide (fossil) (`fossil_co2_air`)

This UUID is Emissions to air, unspecified. Use only where actual records explicitly retain this compatible unspecified subcompartment with a reason; preserve known urban, non-urban, close-ground or other receiving detail in a separately verified compatible row, without counting this row too. Actual direct emission only where fossil origin, substance and air compartment are established. Fuel, lubricant and urea contributions must have separate source calculations before compatible aggregation. Biofuel carbon is not silently reclassified as fossil carbon.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: attributed_fossil_CO2_to_air_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `ipcc-mobile-combustion`

###### methane (fossil) (`fossil_ch4_air`)

This UUID is Emissions to air, unspecified. Use only where actual records explicitly retain this compatible unspecified subcompartment with a reason; preserve known urban, non-urban, close-ground or other receiving detail in a separately verified compatible row, without counting this row too. Actual methane released to air with confirmed fossil origin and compatible vehicle/fuel/control conditions. This is neither natural-gas fuel supply nor CO2-equivalent; other origins require separate records.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: attributed_fossil_CH4_to_air_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `ipcc-mobile-combustion`

###### nitrous oxide (`n2o_air`)

This UUID is Emissions to air, unspecified. Use only where actual records explicitly retain this compatible unspecified subcompartment with a reason; preserve known urban, non-urban, close-ground or other receiving detail in a separately verified compatible row, without counting this row too. Only actual N2O substance mass from a compatible measured/modelled source. kg N, NOx reported as NO2 and kg CO2-equivalent cannot be inserted here without explicit independent conversions and species evidence.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: attributed_N2O_to_air_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `ipcc-mobile-combustion`

###### HFC-134a (`r134a_air`)

This UUID is Emissions to air, unspecified. Use only where actual records explicitly retain this compatible unspecified subcompartment with a reason; preserve known urban, non-urban, close-ground or other receiving detail in a separately verified compatible row, without counting this row too. Only established atmospheric leakage of actual R134a. Document opening/closing charge, additions, removals, recovery and stock differences; unknown leakage is not zero, and bulk recovered refrigerant remains a product or waste fate.

- Selected flow: HFC-134a `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: attributed_verified_R134a_to_air_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_maintenance`
- Sources: `ghg-product-standard`

###### particles (PM2.5) (`pm25_air`)

This UUID is Emissions to air, unspecified. Use only where actual records explicitly retain this compatible unspecified subcompartment with a reason; preserve known urban, non-urban, close-ground or other receiving detail in a separately verified compatible row, without counting this row too. Only this defined size-class and air compartment, with independent exhaust/brake/tyre source estimates. Do not add an overlapping total-PM or PM10 inventory as if independent; retained debris, road deposition and runoff need their actual separate fates.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: attributed_PM2_5_to_air_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `eea-electric-vehicles`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| causal_partition | taxi_service | Subdivide by vehicle/route/duty and direct meters first. For a shared burden Q, use actual attributable drivers d_c and complete all-user denominator sum(d_j); document the physical relationship, exclusions and sensitivity. Capacity, revenue share and equal splitting are not automatic allocation factors. | ghg-product-standard |
| passengers_and_other_users | taxi_service | Passenger luggage carried as part of the declared service is within that function. Separately sold freight or other actual outputs require measured causal allocation with a compatible basis; passengers, kilograms of baggage, advertisements and fares cannot simply be summed as equivalent outputs. | ghg-product-standard |
| empty_and_lifetime | taxi_service | Allocate necessary deadhead, empty service and idle support to the complete relevant service cohort through the demonstrated causal route/period relationship, never by an assumed load factor. Asset allocation covers complete useful duty and actual replacements; an annual purchase, hire fee or depreciation amount is not a manufactured-asset quantity. | nyc-tlc-utilization-2025;ghg-product-standard |
| no_automatic_credit | taxi_service | Recovered materials, regenerative energy and recycled end-of-life material need actual destination, quality and coverage. Internal regeneration already reducing net imported electricity receives no second avoided-electricity credit; no default displacement ratio or negative waste credit is prescribed. | ghg-product-standard |
| on_demand_duty_pool | taxi_service | Subdivide actual dedicated and pooled service segments first. Allocate residual empty/wait/failed duty through an evidenced complete operator/vehicle/period service pool and compatible passenger exposure; preserve all completed customer persons, other users and zero-output duty. Do not assume a one-passenger taxi, full seats or a utilization percentage from a pay rule. Personal/commuting travel needs explicit causality and ownership before inclusion or exclusion. | nyc-tlc-utilization-2025;ghg-product-standard |
| shared_person_segment_exposure | taxi_service | First subdivide actual measured vehicle/route/duty segment quantities. For a shared loaded segment s, record all actual carried customer persons and other separately fulfilled users, actual distance/time/native driver and each person OD membership. A compatible passenger-only segment may allocate Q_s by evidenced person exposure d_is / sum_j d_js with a positive denominator; equal share only when measured equivalent exposure supports it. Sum each completed person leg exposure, then attribute supported residual empty/wait/failed/return pools to the complete causal cohort; do not discard partial/failed/other-user duty or double-normalize already allocated segments. Capacity, booking parties, fare shares and promised group size are not actual occupancy or physical allocation. |  |
| airport_and_connected_reservations | taxi_service | Include causally necessary reservation/dispatch infrastructure, pickup queues, waiting, detours, staggered passenger handling, airport access/terminal/rank support and empty return at actual owners. A common airport destination or one reservation is not a completed single passenger; a vehicle may serve several OD legs. Keep platform/operator/airport provider coverage and all-user denominators exclusive, including paid/unpaid/cancelled/no-show periods. Standalone broker output is not bought again as an actual completed transport leg. | supershuttle-service |

## 8. Foreground Data Collection, Calculation, and Quality Rules

The completion,coverage,native scaling,allocation and bookkeeping equations are explicit PCR-designed methods;external sources support only their stated actual definitions/physical contexts. No claim UN,TLC,Uber,SuperShuttle,Bajaj,IPCC,EEA orGHGProtocol prescribes these full-life or taxi-specific formulas. Missing generic ranges do not waive mandatory actual quantities.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_service | taxi_service | completed_taxi_leg | service_record | cohort_id; vehicle_id; accountable_operator; hire_model; actual_purpose; booking_id; actual_person_leg_id; boarding_alighting_OD; actual_duration; segment_distance; segment_passengers; party_id; actual_completion; no_show; cancellation; meter_record; uncertainty; actual_64115_function; urban_suburban_extent; scheduling_model; airport_shuttle_status; pickup_appointment_not_public_schedule; vehicle_chassis_drive; safety_accessibility_quality; person_segment_membership; completion_rule; actual_other_user_roles | Reconcile actual passenger/party boarding and alighting with dispatch, GPS and meter records; evidence completed persons independently of bookings or payment. Preserve pooled OD/segment exposure, free passengers, failed/no-show records and missingness. A customer party/booking or driver is not one actual person by default. Calculation and aggregation: N unique completed legs; preserve OD distance distribution; do not divide by N again after normalization Verify actual eligibility independently of brand/licence/billing. Match each real person boarding/alighting/OD to the real transport leg, schedule model, airport status and quality; record each continuing passenger across shared intermediate stops once, and actual separate vehicle legs separately. Reconcile real operator, platform and all-user duty coverage. | Item(s); km; person-km | per operation; declared representative period | Complete declared cohort and necessary lifetime interfaces | Same route/vehicles and all relevant users | per declared reference flow | Raw logs, calibration, sampling/model, boundary coverage and reconciliations |
| cp_energy | taxi_service | gasoline_supply; diesel_supply; charging_ac; cng_supply; lpg_supply | meter_stock_record | vehicle_id; fuel_identity; fossil_biogenic_fraction; actually_burned; spilled; evaporated; recovered; transferred; native_unit; opening_stock; deliveries; closing_stock; returns; charge_gate; charger_losses; actual_loaded_km; deadhead_km; idle_hours; zero_passenger_duty; on_duty_waiting; empty_cruising; dispatch_pickup; failed_jobs; platform_sessions; personal_driver_travel; complete_odometer_ledger; each_tank_fuel_formulation; pressure_temperature; bi_fuel_switches; pilot_startup_fuel; fuel_carbon_origin; delivery_conditioning_compression_gate; external_DC; swap_boundary; internal_recovery | Separately reconcile fuel supplied/withdrawn and actual combustion, spill, evaporation, recovery and transfers; direct combustion activity is not automatically total withdrawal. Use aligned fuel stock/meter and AC import records for the same actual duties; separate purchasing from consumption, other users and transfers; reconcile charger and car battery boundaries. Partition full GPS/odometer duty, including empty service and actual multi-platform overlaps, before attributing fuel or electricity. Logins or metered paid distance alone do not cover full vehicle duty. Calculation and aggregation: Attributed fuel net withdrawals and actual AC delivered energy / N; separate their combustion/fate activities, stock-adjusted and converted only with compatible evidence For CNG/LPG bi-fuel systems, independently meter or balance each actual fuel/tank, startup and switching state; no mixture assumed and no generic pressure-density/heating-value conversion. Identify AC delivery versus external DC/battery swap and internal conversion/recovery, then expand each other actual native supply. | kg; MJ; native volume; km; h | each vehicle/charge/fill; full cohort | Complete declared cohort and necessary lifetime interfaces | Same route/vehicles and all relevant users | per declared reference flow | Raw logs, calibration, sampling/model, boundary coverage and reconciliations |
| cp_depot | taxi_service | support_ac; wash_water; cleaning_detergent | site_record | site_id; meter_id; covered_users; charge_meter_overlap; native_quantity; material_SKU; actual_formulation; delivered_gate; physical_driver_all_users | Collect site meters, cleaning issue records and provider scope; segregate charging, maintenance, other fleets and terminal users before allocating a measured shared residual. Calculation and aggregation: Sum attributable actual quantities / N; exact shared ownership retained | MJ; kg; native material units | each issue/meter period; same cohort | Complete declared cohort and necessary lifetime interfaces | Same route/vehicles and all relevant users | per declared reference flow | Raw logs, calibration, sampling/model, boundary coverage and reconciliations |
| cp_maintenance | taxi_service | refrigerant_r134a_supply; r134a_air | maintenance_record | vehicle_id; actual_refrigerant; opening_charge; additions; removals; recovered_charge; closing_charge; urea_solution_mass; concentration; reagent_carbon_origin; replaced_component; actual_fate | Use job orders, substance/formulation certificates and balances; independently identify additions, atmospheric loss, recovered product and waste. Unknown leakage or chemistry is not zero. Collect urea/SCR-specific fields only for an actual applicable system; any real reagent needs its separate concrete exchange and coverage, while evidenced non-use is recorded explicitly. Calculation and aggregation: Attributed actual supply/emission quantities / N, using reconciled independent balances | kg; actual component units | each maintenance event; cohort and lifetime interfaces | Complete declared cohort and necessary lifetime interfaces | Same route/vehicles and all relevant users | per declared reference flow | Raw logs, calibration, sampling/model, boundary coverage and reconciliations |
| cp_assets | taxi_service | gasoline_car_supply; bev_car_supply; gasoline_motorcycle_supply; cng_three_wheeler_supply; diesel_passenger_van_supply; motorcycle_helmet_supply | asset_lifetime_record | asset_ID; vehicle_configuration; initial_battery_coverage; actual_replacements; useful_life_duty; total_life_driver; attributed_driver; all_users; manufacturing_maintenance_retirement_scope; road_and_depot_service_inventory; uncertainty; chassis_body_drive; exact_initial_component_coverage; safety_assembly_owner; all_taxi_platform_private_users; actual_native_asset_delivery_quantity; native_supplier_gate; independent_replacement_and_retirement | Record each delivered car/pack manufacturing-provider gate, initial-battery scope and actual quantity separately from its full-life duty denominator. Map every manufacturing, use, maintenance and retirement stage to exactly one owner. Add independent uncovered operation, component supply, whole-vehicle or component disposal/treatment records; an inclusive provider replaces its exact covered stages. Justify lifetime and all-user duties; money is not item count. Calculation and aggregation: For each asset a: delivered manufacture/supply quantity times attributable duty / total compatible useful duty / N; this allocates only verified provider coverage, not uncovered use or retirement. Keep every positive lifetime denominator explicit All actual service, household/personal and other users enter compatible physical lifetime denominators; a loan term or residual money value is not a physical useful life. Each actual motorcycle/three-wheeler/van/other chassis, protective helmet, battery/tank/control and actual safety/accessibility assembly needs its exact independent native supply/life/coverage record. The concrete cards are not a substitute for other actual configurations. Record shared driver/passenger-owned safety items with the same compatible all-user service-life allocation, no universal lifetime or warranty conversion. | Item(s); km; h; actual infrastructure service units | asset life; update on replacement or retirement | Complete declared cohort and necessary lifetime interfaces | Same route/vehicles and all relevant users | per declared reference flow | Raw logs, calibration, sampling/model, boundary coverage and reconciliations |
| cp_fates | taxi_service | wash_wastewater; spent_engine_oil; spent_car_tyres | fate_record | stream_ID; material_state; native_quantity; composition; receiver_gate; waste_status; reuse_retread; transport; treatment_provider; treatment_coverage; direct_outlet; stock_change | Use independent weigh/transfer notes and receiver evidence for each actual stream. Reconcile input inventories, stocks, evaporation, abrasion and physical collected quantities; no synthetic residual waste mixture. Calculation and aggregation: Attributed independent fate quantities / N; treatment exactly once | kg; actual receiver-native units | each transfer/discharge; cohort | Complete declared cohort and necessary lifetime interfaces | Same route/vehicles and all relevant users | per declared reference flow | Raw logs, calibration, sampling/model, boundary coverage and reconciliations |
| cp_emissions | taxi_service | fossil_co2_air; fossil_ch4_air; n2o_air; pm25_air | species_medium_record | source_ID; vehicle; fuel; duty; species; fossil_biogenic_origin; particle_size; receiving_medium; factor_native_basis; unit; measured_or_modelled; factor_source; scope; overlaps; uncertainty | Measure or use separately justified technology/fuel/duty-specific non-default models. Reconcile factor basis with actual activity and source/medium. Retain every applicable non-exhaust, combustion, reagent and leakage record. Calculation and aggregation: Sum non-overlapping actual source-specific species quantities / N; never CO2-equivalent as species mass | kg species; particle-size-specific kg | actual duty or justified representative measurement | Complete declared cohort and necessary lifetime interfaces | Same route/vehicles and all relevant users | per declared reference flow | Raw logs, calibration, sampling/model, boundary coverage and reconciliations |
| cp_provider | taxi_service | purchased_taxi_leg | provider_native_coverage_record | provider_ID; actual_recipient_leg_link; function_quality_OD; native_unit; activity_A_u; result_per_unit_q_u; measured_conversion; supplier_gate; lifecycle_cells; remaining_owner; cohort_all_user_share; already_normalized; uncertainty | Read the actual completed supplier result and native unit, recipient/leg linkage, real matched native activity and every included stage/cell. Apply q_u times A_u times evidenced cohort/all-user share /N once; the Count card applies only to one matching completed native person-leg. For other native units create a separate verified concrete exchange with real conversion evidence. Provider cells replace matching physical cells and only uncaptured responsibilities remain; no same physical owned leg self-purchase. | Item(s); actual verified provider-native units | per operation; declared representative period | Complete declared cohort and necessary lifetime interfaces | Same route/vehicles and all relevant users | per declared reference flow | Raw logs, calibration, sampling/model, boundary coverage and reconciliations |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_actual | all inventory rows | For each actual exchange divide the attributed quantity by the same N; do not divide an already normalized provider result by N a second time. | actual attributed native quantity;N;cp_service | quantity per reference flow | ghg-product-standard |
| shared_allocation | all inventory rows | Attributed common quantity = measured common total times actual cohort driver / sum of compatible all-user drivers. Require a positive denominator and record the physical basis and uncertainty for each application. | measured shared total;cohort driver;complete all-user denominator | attributed native quantity | ghg-product-standard |
| asset_equivalence | gasoline_car_supply;bev_car_supply;gasoline_motorcycle_supply;cng_three_wheeler_supply;diesel_passenger_van_supply;motorcycle_helmet_supply | Use delivered manufacture/supply quantities and actual complete-life duty shares recorded by cp_assets; lifetime is the allocation basis only. Separate uncovered use, maintenance and retirement; initial/replacement, vehicle/pack and inclusive-provider coverage must not overlap. | cp_assets;actual complete-life quantities;positive compatible duty denominator | attributed delivered supply equivalents | ghg-product-standard |
| fuel_fate_partition | gasoline_supply;diesel_supply;cng_supply;lpg_supply | Net withdrawal = opening + receipts - closing - returns; reconcile independently documented burned + spill + evaporation + recovery/other fate quantities on a compatible stock boundary. Any unexplained difference blocks closure. Use actual burned mass, not withdrawal or invoice mass, in direct combustion models. | cp_energy;cp_emissions;cp_fates | attributed fuel supply and separate compatible combustion/fate activities | ghg-product-standard |
| provider_native_scaling | purchased_taxi_leg | For actual provider result q_u per verified native unit u, inventory contribution = q_u × actual matched A_u × supported cohort/all-user share /N, once. Verify dimensions and covered cells first; do not multiply a per-person result by vehicle trips or divide by occupancy again. Replace exact covered foreground cells only. | cp_provider;cp_service;actual native demand and covered cells | exclusive provider contribution per reference flow |  |
| pooled_segment_closure | taxi_service | Sum exclusive actual segment burdens allocated by observed compatible person exposure plus causally assigned empty/wait/failed/return/support pools. Reconcile all actual persons, duties and other users to complete vehicle/operator/platform/period totals; divide compatible attributed cohort quantity by N once. No universal occupancy, one booking=one person or ignored zero-output segment. | cp_service;cp_energy;cp_depot;actual segment and duty ledger | closed actual person-leg cohort inventory |  |

### Data Quality Requirements

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| completion_and_comparability | taxi_service | Missing completion evidence, positive N, actual distance distribution or required qualifiers blocks completion; equal counts do not establish service comparability. | cp_service; nyc-tlc-yellow-2025 |
| other_actual_energy | taxi_service | Identify every actual fuel, hydrogen supply, steam/heat, hybrid pathway or auxiliary carrier omitted from the concrete examples. Record exact delivered identity, native unit, upstream scope and actual quantity; unknown applicability blocks completion. Unknown identity, quantity or applicability blocks completion. | cp_energy |
| other_actual_materials | taxi_service | Identify each actual lubricant, chemical, disinfectant, cleaner, reagent formulation, spare part, tyre or battery chemistry/configuration. Expand each independently supplied or maintained item into a verified atomic exchange; no generic material collection may stand in for them. Unknown identity, quantity or applicability blocks completion. | cp_maintenance |
| roads_depots_and_charge_assets | taxi_service | Obtain actual attributable road, terminal, depot, charger and other supporting infrastructure lifecycle inventories with compatible complete-life all-user denominators. Distinguish upstream infrastructure already included in provider data from genuinely missing burdens; missing coverage blocks complete-lifecycle use. Unknown identity, quantity or applicability blocks completion. | cp_assets |
| providers_and_subcontracting | taxi_service | Identify each actual subcontracted operating/repair/treatment result and its native functional unit, boundary and physical driver. An inclusive provider result replaces its covered foreground exchanges; do not add them again or substitute an arbitrary freight or vehicle-manufacturing UUID. Unknown identity, quantity or applicability blocks completion. | cp_depot |
| other_fate_streams | taxi_service | Expand each actual sludge, filter, packaging, battery, retired whole vehicle or dismantled component, wastewater outlet, reused product and disposal/treatment result separately. Whole-vehicle and retained-component views are mutually exclusive for the same material. Establish material, mixture state, receiver gate and native quantity; evaporation or unaccounted loss cannot be invented as collected waste. Unknown identity, quantity or applicability blocks completion. | cp_fates |
| other_species_media | taxi_service | Identify actual CO, nitrogen oxides with reported chemical basis, ammonia/SCR slip, each other refrigerant, biogenic combustion products, non-exhaust size classes, road/soil deposits and runoff species/outlets. Expand every independently quantified substance/size/source/medium; no generic NOx/VOC/dust residual UUID and no missing-as-zero. Unknown identity, quantity or applicability blocks completion. | cp_emissions |
| duty_purpose_and_platforms | taxi_service | Identify all actual service/personal/driver travel, pooled-party exposure and multiple-platform duty overlaps, plus actual necessary booking/dispatch digital support. Complete each unrepresented physical supply, energy or provider result separately; fees do not prove its native output or full lifecycle coverage. Unknown identity, quantity or applicability blocks completion. | cp_service; cp_energy; cp_depot |
| full_taxivehicle_scope | taxi_service | MANDATORY: establish every actual qualified motorized vehicle configuration, not just the five conditional assembly cards. Independently represent each actual petrol/diesel/LPG/CNG/electric/hybrid/other two-,three-,four- or larger-wheel chassis/body/drive, initial and replacement components, energy/controls, maintenance, end-of-use and safety/accessibility interfaces with supported native amounts. Actual applicability unknown blocks completion, not product scope. | cp_assets;cp_energy;cp_maintenance;cp_fates;cp_emissions |
| atomic_actual_expansion | taxi_service | MANDATORY for each actual unrepresented material, asset, provider result, supply, output, waste, species/particle/medium or treatment: create one unique row_id, one existing process, actual direction/type, one definite identity/state/formulation, UUID or explicit unresolved record, native property/unit/quantity and basis, raw source, valid same-parent collection_protocol_id, physical calculation/provider gate and covered cells, actual receiver/known subcompartment and uncertainty. Resolve occurrence or evidenced non-applicability; unknown is incomplete, never zero. Category collectors and generic waste/emission rows are not exchanges. | all actual records; valid process/protocol foreign keys |
| airport_pooling_and_role_evidence | taxi_service | MANDATORY: record actual scheduled/non-scheduled function and distinct chauffeur-hire boundary, actual airport context/OD, staggered persons and segment duties, dispatch/rank waiting, cancellations, pickup and empty return. Actual driver/operating-support roles are not customer output; do not infer completed persons from party/reservation or capacity. Complete all actual platform and airport/terminal/rank native support and assets at real owners and all-user drivers. | cp_service;cp_provider;cp_energy;cp_depot;cp_assets |
| bi_fuel_formulation_and_fates | taxi_service | MANDATORY: identify actual CNG/LPG formulation, each actual startup/pilot/other fuel and fuel switches, phase/pressure/temperature/native supply quantities and separate burn/leak/vent/spill/recovery/stock. Distinguish fuel product mixtures from independently quantified elementary species and actual receiving subcompartments. Any actual lubricant/reagent/refrigerant/battery/tyre/helmet-cleaning supply and each corresponding waste/species/treatment outside the concrete cards must be expanded independently; no assumed all-tank combustion or methane-equivalent input. | cp_energy;cp_maintenance;cp_fates;cp_emissions |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| service_basis | taxi_service | Verify unique completed passenger legs, actual OD/distance strata, N > 0 and identical EN/ZH reference link. Reject tickets, seats, linked journeys or on-demand vehicle departures as substitutes. | nyc-tlc-yellow-2025 |
| period_closure | taxi_service | Reconcile actual duty, input/output stocks, cohort carry, failed services and actual zero-passenger operation. N = 0 yields no finite per-passenger result; retain its burden and explicit relationship to the relevant service pool rather than dropping it. | ghg-product-standard |
| identity_and_expansion | taxi_service | Each inventory row names one actual material/service result/waste stream/substance-medium; confirm exact UUID/property/unit compatibility before final use. Every completion requirement must be resolved by actual independent rows or evidenced non-applicability; unknown is not zero. | ghg-product-standard |
| closure_and_overlap | taxi_service | Check charging/vehicle/depot energy ownership, initial/replacement batteries, direct versus upstream emissions, overlapping PM size classes, recovered refrigerant, waste treatment and asset lifetime allocations. No automatic density, occupancy, lifetime, emission factor or recycling credit is permitted. | ipcc-mobile-combustion;eea-electric-vehicles;ghg-product-standard |
| taxi_fullscope_function | taxi_service | Confirm actual64115function and geography/non-scheduled airport status with observed service records. General billing note is not absolute; brands/booking appointments/national licences do not alone decide scope. Verify actual chassis/drive, quality/safety, all persons and duty/asset/provider ownership; missing an actual branch or required row makes the package incomplete. | cpc3-structure |
| provider_native_and_cp_ownership | taxi_service | Every CP process_id is one existing inventory process and each card references a valid CP with that same parent. Prove provider native unit/activity scaling, Count versus pkm/vehicle/hour distinctions and mutually exclusive stage coverage. Check manufacture native quantity and same-asset positive total all-user useful duty; no duplicated whole/component/blend/initial/replacement/provider/fate responsibility. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset only after all mandatory actual foreground identities, quantities, completion, native provider/lifetime and fate responsibilities are completed and reviewed |
| allowed_use | Actual qualified motorized taxi person-leg within/between urban/suburban areas or actual non-scheduled airport shuttle, with harmonized actual OD/extent/time/pooling/quality and full lifecycle |
| excluded_use | Chauffeured availability/whole-hire engagement; scheduled airport shuttle; nonmotorized/water/air taxi or medical product; standalone booking/payment; universal pkm/occupancy/life factor; incomplete actual dataset treated as full lifecycle |
| required_metadata | Actual eligible function/geography/airport scheduling, operator/vehicle/platform/period, persons/OD/segment/completion/quality, native supplies/provider cells, all-user useful-life asset drivers and raw sources/uncertainty |
| required_quality_disclosure | All unverified identities, missing actual quantities, sampling/model uncertainties, unresolved infrastructure/asset/waste coverage, and cause of non-comparability |
| update_trigger | Material route/propulsion/vehicle/battery/provider changes; revised activity, life or source evidence; changed classification or service completion definition |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| cpc3-structure | official_guidance | UNSD CPC3.0 Explanatory Notes,30June2025,actual PDFp359,64115 and neighbouring exclusions. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Full actual motorized taxi/urban-suburban and non-scheduled airport shuttle scope, connected reservations and exclusions; general destination/distance billing is not an absolute condition. |
| nyc-tlc-yellow-2025 | official_guidance | NYC TLC Yellow Taxi Trip Records Data Dictionary,18March2025,p1. https://www.nyc.gov/assets/tlc/downloads/pdf/data_dictionary_trip_records_yellow.pdf | Meter timestamps, recorded passenger number, distance, OD and payment/void fields are distinct. This regional schema does not verify actual passenger completion or universal occupancy. |
| nyc-tlc-utilization-2025 | official_guidance | NYC TLC Notice of Promulgation,adopted25June2025,PDFpp2,6–8. https://a856-cityrecord.nyc.gov/Search/GetFile?documentId=42301&requestId=20250625045&requestStatus=Archived&sectionId=4 | Qualitative distinction between passenger, dispatch waiting and pickup travel in actual duty. No monetary rate, utilization percentage, financed lifetime or LCA factor adopted. |
| ipcc-mobile-combustion | official_guidance | IPCC2006Guidelines,Vol2Ch3,section3.2,pp3.10–3.16. https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_3_Ch3_Mobile_Combustion.pdf | Qualitative fuel/activity, origin and technology-specific species accounting; no default factor adopted and national GHG inventory is not full service lifecycle. |
| eea-electric-vehicles | official_guidance | EEA Electric vehicles,Overview. https://www.eea.europa.eu/en/topics/in-depth/electric-vehicles | Vehicle/battery manufacture and road/tyre/brake burdens remain; no average benefit, battery life or universal numerical intensity transferred. |
| ghg-product-standard | standard | WRI/WBCSD ProductLifeCycleAccountingAndReportingStandard2011,chapters7–9. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Boundary/data quality and subdivision/physical allocation; complete vehicle/infrastructure lifecycle is an explicit PCR scope choice, not a capital mandate attributed to this GHG standard. |
| uber-motorbike | official_guidance | Uber Bike motorbike ride service,official public page accessed22October2026. https://www.uber.com/in/en/ride/uber-moto/ | Actual city motorbike pickup/destination and helmet responsibility as conditional case; no universal operator-provided helmet, occupancy, age/legal rule, fuel, lifetime, price or LCA factor adopted. |
| uber-auto | official_guidance | Uber Auto autorickshaw ride service,official public page accessed22October2026. https://www.uber.com/in/en/ride/uber-auto/ | Actual autorickshaw pickup/destination/vehicle confirmation/arrival case read through official web reader; not global legal classification, measured completion, fuel, capacity or default input proof. |
| supershuttle-service | official_guidance | SuperShuttle How it works,official public page accessed22October2026. https://www.supershuttle.com/how-it-works/ | Actual shared variable-stop versus direct airport-transfer and separate hourly availability case read through official web reader; verify actual non-scheduled function separately. No service availability, number of stops/passengers, fleet fuel, environmental benefit or factor assumed. |
| bajaj-re-config | official_guidance | Bajaj RE actual three-wheeler configurations,official public page accessed22October2026. https://www.bajajauto.com/three-wheelers/re | Manufacturer lists actual diesel/petrol/CNG/LPG and CNG/LPG bi-fuel variants, supporting conditional independent tank/fuel/assembly questions. No warranty, capacity, consumption, savings, finance term or automatic taxi classification transferred. |
