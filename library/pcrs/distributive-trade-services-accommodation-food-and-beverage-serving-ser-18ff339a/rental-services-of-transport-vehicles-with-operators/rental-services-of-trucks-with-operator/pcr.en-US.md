---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.rental-services-of-transport-vehicles-with-operators.rental-services-of-trucks-with-operator
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Rental services of trucks with operator

## 1. Scope and Applicability

Covers rental of trucks and other motorized freight vehicles with driver. Establish from the actual agreement and operation that the customer obtains a qualified vehicle-plus-driver availability obligation, with declared renter direction and provider operating responsibility. A rental invoice, fleet type or fuel payer alone does not establish this scope.

Exclude truck rental without driver (CPC 73112), actual road freight carriage (CPC 6511), operator-only labour and vehicle manufacture as reference products. A carrier promising consignment delivery requires the carriage methodology even when called hire; a hired vehicle need not move or carry a positive load while genuinely available under the accepted obligation.

The parent activity is operated road-freight-vehicle hire. Actual rigid, tractor/trailer, body, tailgate, crane, propulsion and duty alternatives change native energy, assets, emissions and records; preserve the evidenced configuration rather than inventing a new product or averaging incompatible duties. Compatible configurations can coexist in a declared fleet; mutually exclusive vehicle states and overlapping obligations must be resolved. Shalom and SPIESS illustrate bounded current commercial configurations and responsibilities only; their advertised sizes, prices and minimum duration are not universal PCR requirements.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.rental-services-of-transport-vehicles-with-operators.rental-services-of-trucks-with-operator |
| classification_refs | CPC 3.0 66012; exact |
| covered_products | Covers rental of trucks and other motorized freight vehicles with driver. Establish from the actual agreement and operation that the customer obtains a qualified vehicle-plus-driver availability obligation, with declared renter direction and provider operating responsibility. A rental invoice, fleet type or fuel payer alone does not establish this scope. |
| excluded_products | Exclude truck rental without driver (CPC 73112), actual road freight carriage (CPC 6511), operator-only labour and vehicle manufacture as reference products. A carrier promising consignment delivery requires the carriage methodology even when called hire; a hired vehicle need not move or carry a positive load while genuinely available under the accepted obligation. |
| representative_product | Qualified operated truck hire engagement |
| production_route | The parent activity is operated road-freight-vehicle hire. Actual rigid, tractor/trailer, body, tailgate, crane, propulsion and duty alternatives change native energy, assets, emissions and records; preserve the evidenced configuration rather than inventing a new product or averaging incompatible duties. Compatible configurations can coexist in a declared fleet; mutually exclusive vehicle states and overlapping obligations must be resolved. Shalom and SPIESS illustrate bounded current commercial configurations and responsibilities only; their advertised sizes, prices and minimum duration are not universal PCR requirements. |
| market_state | Qualified operated truck hire engagement |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Qualified operated truck hire engagement |
| How much | One independently accepted qualified operated truck hire engagement |
| How well | Declared original/genuine amended vehicle/configuration/hired capacity, driver operation and renter direction, service quality/region/duty and actual gates. |
| How long or cycle | Positive actual accepted availability H with actual engagement and reporting/lifecycle periods; no positive movement or load requirement. |
| reference_flow_link | `accepted_operated_truck_hire` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Qualified operated truck hire engagement |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | Actual engagement id and original/amended obligation; truck or other motorized freight vehicle identity; configuration and hired capacity with native units; positive actual accepted availability time H; reporting period; driver/provider operating responsibility; renter direction/control; availability/quality/acceptance and replacement conditions; delivery and return gates; service region and duty; actual standby/positioning/failure/replacement; all-user asset life and native provider coverage |

Declare every qualifier in reference notes or dataset metadata; missing actual function or qualifier makes the reference incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| qualified_count | reference product | Number of items | Item(s) | Count the actual independently accepted vehicle-plus-driver hire obligation, with positive actual accepted availability H and all qualifiers; billing increments, trips, load, distance and asset replacements do not define the reference. |
| native_quantity | all actual exchanges | Actual verified native property | Actual native unit | Use actual native quantity or supported compatible conversion. AC uses Net calorific value with MJ or native kWh; 1 kWh = 3.6 MJ once. No universal density, heating value, useful life or minimum hire duration. |
| compatible_demand | provider and asset children | Actual verified native property | Actual native unit | Native hours/days/Count/asset units and capacity-time must describe the same hired function and gate before scaling. Cargo t*km, fees or nominal capacity do not establish equivalence to operated availability. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual vehicle-plus-driver availability contract, original configuration/capacity/control and native provider gates. |
| starting_condition_role | Foreground collection interface; upstream fuel, assets, driver/support and infrastructure remain included. |
| product_classification_scope | CPC 3.0 66012 |
| recursive_input_rule | Record actual same-function operated subhire in its native unit and exact provider coverage once; collect gaps without self-purchase or duplicate hire/carriage output. |
| upstream_dataset_requirement | Actual native function, configuration/capacity/time, driver/control/gates, region/duty and technology/period compatible; preserve incomplete coverage. |
| disclosure | Actual engagement id and original/amended obligation; truck or other motorized freight vehicle identity; configuration and hired capacity with native units; positive actual accepted availability time H; reporting period; driver/provider operating responsibility; renter direction/control; availability/quality/acceptance and replacement conditions; delivery and return gates; service region and duty; actual standby/positioning/failure/replacement; all-user asset life and native provider coverage |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| hire_function | operated_truck_hire | Start from the genuine vehicle-plus-driver availability obligation and end at accepted completion/return. Include attributable standby, empty positioning, start-up, cleaning, failures, recovery and accepted replacement; rejected or unavailable time is not accepted H, but its causal burdens remain. Link each failed/unavailable vehicle state to actual repair/rework, return, accepted replacement or retirement; physical material/waste exits require concrete children. | unsd-truck-hire-2025;shalom-driver-hire;spiess-truck-hire |
| complete_lifecycle | operated_truck_hire | Include actual native energy and material supply, driver/support duties, vehicle/equipment and shared infrastructure initial provision, maintenance, replacement and retirement, actual waste treatment and direct releases. Customer or subcontractor payment does not remove physical burdens. All relevant unknowns require node-owned expansion rather than omission. |  |
| provider_interface | operated_truck_hire | Use an actual compatible provider dataset only for its documented function, native demand, gate and exact covered lifecycle cells. Replace those cells once and collect uncovered cells; do not purchase the model from itself or add vehicle/fuel/service burdens already covered. Preserve all-user asset demand including other hires, own carriage and other users. |  |
| route_units | operated_truck_hire | Index each actual vehicle/configuration/driver/provider/site/region/duty and reporting/lifecycle period. Declare actual propulsion/auxiliary delta from operated hire; do not combine incompatible technologies or capacity/time functions without explicit stratification and common-reference evidence. | shalom-driver-hire;spiess-truck-hire |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| operated_truck_hire | Rental services of trucks with operator | required | Actual qualifying operated hire; fixed conditional exchanges require compatible occurrence. | foreground | accepted_operated_truck_hire |

The single node owns real operated hire and its attributable lifecycle. Only independently identifiable atomic cards appear below. Unknown variable identities are mandatory collection requirements outside inventory, not aggregate flow exchanges or completed actual inventory.

### Process: Rental services of trucks with operator (`operated_truck_hire`)

#### Inputs

##### Product flows

###### Diesel fuel (`diesel_input`)

Only actual supplied diesel of compatible grade/formulation, consumed by the attributable vehicle or supporting operation, whoever pays. Preserve source, stock, use, carbon origin and upstream provider; incompatible actual fuel identities require expansion. No default density or heating value.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable native quantity per declared accepted hire reference, normalized once under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_native_supply`

###### Alternating current (`ac_input`)

Only actual externally supplied AC at point of use, irrespective of payer or whether payment occurs. Record provider, geography, mix, voltage, delivery gate, meters and charging/line losses once; direct-current exchanges and incompatible gates need their own identity. Native kWh converts to MJ once using 3.6.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Actual attributable native quantity per declared accepted hire reference, normalized once under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_native_supply`

###### Tap water (`tap_water_input`)

Only actual treated tap-water supply for attributable cleaning or support, with its native supply gate and quantity. This is neither raw environmental abstraction nor wastewater release. Volume-to-mass conversion needs actual compatible support.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable native quantity per declared accepted hire reference, normalized once under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_native_supply`

###### Detergent (`detergent_input`)

Only one actual compatible synthetic non-soap cleaning formulation as supplied, including its actual dilution state. Record product/formulation and quantity; do not treat soap, disinfectant or all cleaning products as this identity, or invent constituent exchanges.

- Selected flow: Detergent `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable native quantity per declared accepted hire reference, normalized once under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_native_supply`

#### Outputs

##### Product flows

###### Qualified operated truck hire engagement (`accepted_operated_truck_hire`)

One independently accepted qualified operated truck hire engagement at the actual acceptance gate. Retain its original/amended configuration, hired capacity, actual positive accepted availability H, operating responsibility and renter direction; no consignment-delivery, positive-distance or positive-load prerequisite.

- Selected flow: Qualified operated truck hire engagement
- Flow property / unit: Number of items / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hire_acceptance`

##### Waste flows

###### Used lubricating oil (`used_oil_output`)

Only one actual generated and separately collected petroleum-based or synthetic used-lubricating-oil stream at generation. It does not represent oily water, sludge, spent coolant, tyres or mixed workshop wastes. Record actual collection, custody, receiver and fate through mandatory expansion; no automatic recovery credit.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable native quantity per declared accepted hire reference, normalized once under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_generated_oil`

##### Elementary flows

###### carbon dioxide (fossil) (`fossil_co2_air`)

Only actual fossil CO2 emitted to air with receiving subcompartment genuinely unspecified. Retain actual fossil share, species mass, source and measurement/calculation evidence; known different subcompartment needs a compatible verified identity. Not total GHG, CO2e, biogenic CO2 or an upstream duplicated emission.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable native quantity per declared accepted hire reference, normalized once under section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_co2_release`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| direct_first | operated_truck_hire | Directly attribute event/vehicle/provider/site records to actual hire obligations where possible. For shared native quantity Q_j allocate q_ej = Q_j * d_ej / sum_all_users(d_uj), using an evidenced positive denominator of same-function compatible demand. Availability-capacity-time may be used only where causal; no cargo tonne-km default or tariff allocation. |  |
| all_user_life | operated_truck_hire | Attribute each actual initial asset and every replacement/maintenance/retirement event across its own compatible service life and all real users, including other hires, own operations, standby/support and periods. Collect observed/forecast lifetime demand and uncertainty; no universal life, occupancy or fraction, and never charge the entire asset to one engagement. |  |
| output_and_reject | operated_truck_hire | Enumerate all actual independent intended outputs and their handoffs; direct attribution precedes evidenced causal sharing. Record unresolved output/allocation decisions as blockers. Customer cargo is not a produced hire cooutput. Do not credit waste automatically or subtract counterfactual service; retain failed/rejected activity burdens without counting failed output. |  |
| runs_and_pools | operated_truck_hire | Declare engagement/event/continuous fleet reporting mode. Link cleaning/changeover, standby, positioning and replacement events to the originating hire or evidenced shared pool once. Sum attributable native quantities before dividing by coherent accepted engagement count N; do not average unlike capacity, duration, duty or region intensities. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Engagement Count, positive accepted availability, native stock/provider/all-user lifetime methods and mandatory atomic-completion gates are explicit PCR modelling choices. No universal price, minimum duration, resource rate, density, emission factor, useful life or recovery credit is supplied. Every cp_expand_ is mandatory even when no inventory card currently represents its actual children.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_hire_acceptance | operated_truck_hire | reference output and hire function | contract and operational acceptance | engagement_id;original/amended obligation;vehicle_id;configuration;capacity/native unit;driver/provider responsibility;renter direction;region/duty;delivery/return gates;available intervals;failure/replacement;acceptance;N;H | Reconcile actual contract with signed/event acceptance and vehicle/driver logs. Count independent accepted obligations once; retain actual time intervals and all named qualifiers; payment/minimum billing alone is insufficient. | Item(s); actual time and capacity units | Each actual event and coherent cohort | Actual engagement/reporting and complete lifecycle periods | All actual vehicles, drivers, road/site units, providers and users | per declared reference flow | Original agreement; calibrated native stock/event/receiver records; concrete child and uncertainty evidence |
| cp_native_supply | operated_truck_hire | four fixed product-input cards | meter, stock and source records | event_id;vehicle/site/provider;actual product/formulation;opening/closing stock;receipts/returns/transfers;native consumption;meter;quantity/property/unit;gate;upstream coverage;allocation | Measure compatible actual supplies/use, including customer-provided material, and reconcile stock. Keep grade/formulation, electricity voltage/mix/loss and water supply gate; actual volume-mass conversion needs product-specific evidence. Separate incompatible identity, avoid purchases-as-use and covered-provider duplication. | actual native units; kg; MJ | Each actual event and coherent cohort | Actual engagement/reporting and complete lifecycle periods | All actual vehicles, drivers, road/site units, providers and users | per declared reference flow | Original agreement; calibrated native stock/event/receiver records; concrete child and uncertainty evidence |
| cp_generated_oil | operated_truck_hire | single used-lubricating-oil output | generation, collection and custody records | stream_id;origin vehicle/event;oil identity/condition;generated mass;collection;stock;receiver;transfer_id;fate;provider coverage | Weigh one real compatible generated oil stream and reconcile storage/transfer. Collect actual downstream transport/treatment and recovery decisions in cp_expand_collected_wastes once; no mixing with sludge/water or default treatment. | kg | Each actual event and coherent cohort | Actual engagement/reporting and complete lifecycle periods | All actual vehicles, drivers, road/site units, providers and users | per declared reference flow | Original agreement; calibrated native stock/event/receiver records; concrete child and uncertainty evidence |
| cp_co2_release | operated_truck_hire | fossil CO2 to actual unspecified air | measured release or compatible substance calculation | source_id;fuel/product identity;fossil share;actual consumed mass/energy;species;receiving compartment;measurement or factor source;oxidation/fate;uncertainty;upstream exclusions | Measure actual species mass or use an evidenced source/technology-compatible method. Distinguish fossil/biogenic carbon and unoxidized/residual carbon; do not assume all carbon released. No universal factor, CO2e conversion or upstream-emission duplication. | kg | Each actual event and coherent cohort | Actual engagement/reporting and complete lifecycle periods | All actual vehicles, drivers, road/site units, providers and users | per declared reference flow | Original agreement; calibrated native stock/event/receiver records; concrete child and uncertainty evidence |
| cp_expand_operating_inputs | operated_truck_hire | actual operating materials and energies | mandatory atomic expansion register | occurrence/evidenced absence;exhaustive scope;child_row_id;node/direction/type;actual identity/state/gate;verified UUID/property/unitgroup;native quantity;source/receiver/fate;provider coverage;all users/life/period;ownership;uncertainty | Mandatory scope: fuels/formulations, non-AC energy, lubricants, urea solution, refrigerants, coolants, tyres, batteries, cleaning formulations, packaging and ancillary supplies. Establish actual occurrence or documentary absence for every branch. For each actual child create a unique concrete row with verified native identity/property/unit support, measured or supported calculated quantity, source/destination and exclusive lifecycle/provider/all-user ownership. Keep physical transfer ids and exact covered cells; do not duplicate fixed cards. No missing-as-zero, invented constituents or unresolved aggregate exchange; unresolved applicability or child evidence blocks finalization. | each actual native unit | Each actual event and coherent cohort | Actual engagement/reporting and complete lifecycle periods | All actual vehicles, drivers, road/site units, providers and users | per declared reference flow | Original agreement; calibrated native stock/event/receiver records; concrete child and uncertainty evidence |
| cp_expand_vehicle_assets | operated_truck_hire | actual truck and equipment lifecycle | mandatory atomic expansion register | occurrence/evidenced absence;exhaustive scope;child_row_id;node/direction/type;actual identity/state/gate;verified UUID/property/unitgroup;native quantity;source/receiver/fate;provider coverage;all users/life/period;ownership;uncertainty | Mandatory scope: each actual truck/chassis/cab/tractor/trailer/body/tailgate/crane or other real supplied assembly; initial provision, replacement, maintenance and retirement. Establish actual occurrence or documentary absence for every branch. For each actual child create a unique concrete row with verified native identity/property/unit support, measured or supported calculated quantity, source/destination and exclusive lifecycle/provider/all-user ownership. Keep physical transfer ids and exact covered cells; do not duplicate fixed cards. No missing-as-zero, invented constituents or unresolved aggregate exchange; unresolved applicability or child evidence blocks finalization. | each actual native unit | Each actual event and coherent cohort | Actual engagement/reporting and complete lifecycle periods | All actual vehicles, drivers, road/site units, providers and users | per declared reference flow | Original agreement; calibrated native stock/event/receiver records; concrete child and uncertainty evidence |
| cp_expand_shared_sites | operated_truck_hire | actual shared roads, sites and support assets | mandatory atomic expansion register | occurrence/evidenced absence;exhaustive scope;child_row_id;node/direction/type;actual identity/state/gate;verified UUID/property/unitgroup;native quantity;source/receiver/fate;provider coverage;all users/life/period;ownership;uncertainty | Mandatory scope: each actual road/depot/workshop/wash/parking/charging/communications asset or service; all users, periods and upstream coverage. Establish actual occurrence or documentary absence for every branch. For each actual child create a unique concrete row with verified native identity/property/unit support, measured or supported calculated quantity, source/destination and exclusive lifecycle/provider/all-user ownership. Keep physical transfer ids and exact covered cells; do not duplicate fixed cards. No missing-as-zero, invented constituents or unresolved aggregate exchange; unresolved applicability or child evidence blocks finalization. | each actual native unit | Each actual event and coherent cohort | Actual engagement/reporting and complete lifecycle periods | All actual vehicles, drivers, road/site units, providers and users | per declared reference flow | Original agreement; calibrated native stock/event/receiver records; concrete child and uncertainty evidence |
| cp_expand_driver_support | operated_truck_hire | actual driver and operating support | mandatory atomic expansion register | occurrence/evidenced absence;exhaustive scope;child_row_id;node/direction/type;actual identity/state/gate;verified UUID/property/unitgroup;native quantity;source/receiver/fate;provider coverage;all users/life/period;ownership;uncertainty | Mandatory scope: actual driver/provider responsibility, support travel, training, accommodation and resource/service demands causally inside declared hire boundary. Establish actual occurrence or documentary absence for every branch. For each actual child create a unique concrete row with verified native identity/property/unit support, measured or supported calculated quantity, source/destination and exclusive lifecycle/provider/all-user ownership. Keep physical transfer ids and exact covered cells; do not duplicate fixed cards. No missing-as-zero, invented constituents or unresolved aggregate exchange; unresolved applicability or child evidence blocks finalization. | each actual native unit | Each actual event and coherent cohort | Actual engagement/reporting and complete lifecycle periods | All actual vehicles, drivers, road/site units, providers and users | per declared reference flow | Original agreement; calibrated native stock/event/receiver records; concrete child and uncertainty evidence |
| cp_expand_contracted_operations | operated_truck_hire | actual subcontracted operations | mandatory atomic expansion register | occurrence/evidenced absence;exhaustive scope;child_row_id;node/direction/type;actual identity/state/gate;verified UUID/property/unitgroup;native quantity;source/receiver/fate;provider coverage;all users/life/period;ownership;uncertainty | Mandatory scope: each actual operated subhire, cleaning, maintenance, recovery, positioning and support service; exact provider-covered cells and uncovered gaps. Establish actual occurrence or documentary absence for every branch. For each actual child create a unique concrete row with verified native identity/property/unit support, measured or supported calculated quantity, source/destination and exclusive lifecycle/provider/all-user ownership. Keep physical transfer ids and exact covered cells; do not duplicate fixed cards. No missing-as-zero, invented constituents or unresolved aggregate exchange; unresolved applicability or child evidence blocks finalization. | each actual native unit | Each actual event and coherent cohort | Actual engagement/reporting and complete lifecycle periods | All actual vehicles, drivers, road/site units, providers and users | per declared reference flow | Original agreement; calibrated native stock/event/receiver records; concrete child and uncertainty evidence |
| cp_expand_collected_wastes | operated_truck_hire | actual collected waste streams and fates | mandatory atomic expansion register | occurrence/evidenced absence;exhaustive scope;child_row_id;node/direction/type;actual identity/state/gate;verified UUID/property/unitgroup;native quantity;source/receiver/fate;provider coverage;all users/life/period;ownership;uncertainty | Mandatory scope: each actual separately collected used oil, wastewater, sludge, filter, coolant, battery, tyre, packaging and other actual stream; real receiver, transfer and treatment. Establish actual occurrence or documentary absence for every branch. For each actual child create a unique concrete row with verified native identity/property/unit support, measured or supported calculated quantity, source/destination and exclusive lifecycle/provider/all-user ownership. Keep physical transfer ids and exact covered cells; do not duplicate fixed cards. No missing-as-zero, invented constituents or unresolved aggregate exchange; unresolved applicability or child evidence blocks finalization. | each actual native unit | Each actual event and coherent cohort | Actual engagement/reporting and complete lifecycle periods | All actual vehicles, drivers, road/site units, providers and users | per declared reference flow | Original agreement; calibrated native stock/event/receiver records; concrete child and uncertainty evidence |
| cp_expand_substance_releases | operated_truck_hire | actual emitted substances and media | mandatory atomic expansion register | occurrence/evidenced absence;exhaustive scope;child_row_id;node/direction/type;actual identity/state/gate;verified UUID/property/unitgroup;native quantity;source/receiver/fate;provider coverage;all users/life/period;ownership;uncertainty | Mandatory scope: each actual tailpipe, evaporative, refrigerant, tyre/brake/road wear, water or soil release; identified substance/species/particle basis and actual receiving compartment. Establish actual occurrence or documentary absence for every branch. For each actual child create a unique concrete row with verified native identity/property/unit support, measured or supported calculated quantity, source/destination and exclusive lifecycle/provider/all-user ownership. Keep physical transfer ids and exact covered cells; do not duplicate fixed cards. No missing-as-zero, invented constituents or unresolved aggregate exchange; unresolved applicability or child evidence blocks finalization. | each actual native unit | Each actual event and coherent cohort | Actual engagement/reporting and complete lifecycle periods | All actual vehicles, drivers, road/site units, providers and users | per declared reference flow | Original agreement; calibrated native stock/event/receiver records; concrete child and uncertainty evidence |
| cp_expand_resource_intakes | operated_truck_hire | actual direct environmental resource intake | mandatory atomic expansion register | occurrence/evidenced absence;exhaustive scope;child_row_id;node/direction/type;actual identity/state/gate;verified UUID/property/unitgroup;native quantity;source/receiver/fate;provider coverage;all users/life/period;ownership;uncertainty | Mandatory scope: each actual environmental water, air, land or other resource intake with native identity and compartment, separated from purchased supplies. Establish actual occurrence or documentary absence for every branch. For each actual child create a unique concrete row with verified native identity/property/unit support, measured or supported calculated quantity, source/destination and exclusive lifecycle/provider/all-user ownership. Keep physical transfer ids and exact covered cells; do not duplicate fixed cards. No missing-as-zero, invented constituents or unresolved aggregate exchange; unresolved applicability or child evidence blocks finalization. | each actual native unit | Each actual event and coherent cohort | Actual engagement/reporting and complete lifecycle periods | All actual vehicles, drivers, road/site units, providers and users | per declared reference flow | Original agreement; calibrated native stock/event/receiver records; concrete child and uncertainty evidence |
| cp_expand_cooutputs_transfers | operated_truck_hire | actual intended cooutputs and physical transfers | mandatory atomic expansion register | occurrence/evidenced absence;exhaustive scope;child_row_id;node/direction/type;actual identity/state/gate;verified UUID/property/unitgroup;native quantity;source/receiver/fate;provider coverage;all users/life/period;ownership;uncertainty | Mandatory scope: each actual independent intended output, recovered material or physical transfer and gate; distinguish waste and customer cargo custody from production output. Establish actual occurrence or documentary absence for every branch. For each actual child create a unique concrete row with verified native identity/property/unit support, measured or supported calculated quantity, source/destination and exclusive lifecycle/provider/all-user ownership. Keep physical transfer ids and exact covered cells; do not duplicate fixed cards. No missing-as-zero, invented constituents or unresolved aggregate exchange; unresolved applicability or child evidence blocks finalization. | each actual native unit | Each actual event and coherent cohort | Actual engagement/reporting and complete lifecycle periods | All actual vehicles, drivers, road/site units, providers and users | per declared reference flow | Original agreement; calibrated native stock/event/receiver records; concrete child and uncertainty evidence |
| cp_acceptance_cohort | operated_truck_hire | reference-obligation compatibility and cross-period cohort | original agreement acceptance and event ledger | obligation_id;original_amendments;function;configuration;capacity_native_unit;accepted_H;quality;technical_commercial_roles;region_duty;delivery_redelivery_gates;compatibility_decision;opening_ongoing;new_obligations;completed_accepted;failed_cancelled;closing_ongoing;event_id;contributing_node;period;pool_owner;provider_cells;quantity_method;range_evidence | Reconcile each original obligation against contract, acceptance and full-cycle events. Retain cut-off states and contributing nodes; apply reference_compatibility and completed_obligation_cohort. Ongoing burdens stay with their own obligation; failure attribution requires causal evidence. Complete actual children with occurrence or evidenced absence; row guardrails require independent compatible evidence. | Item(s); actual time and capacity units; actual native units | Each actual obligation and reporting cut | Full obligation cycle and traceable reporting periods | This node reference obligations and explicitly linked contributors | per declared reference flow; compatible completed-obligation cohort | Original agreement and chronological amendments, acceptance, calibrated meters and event ownership, independent sample and conversion evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| engagement_count | reference output | N = count(independently accepted qualifying hire obligations); H > 0. Preserve original/genuinely amended function and gates. No additional N for trip, invoice, shift or replacement. | acceptance and actual available intervals | coherent N and qualified H |  |
| native_stock | consumed product input | U = opening_stock + receipts - closing_stock - returns - outward_transfers. Reconcile actual use/waste; stock balance alone does not prove consumption or release. | compatible native stocks and events | native attributable U |  |
| shared_native | shared native quantity or lifecycle event | q_ej = Q_j * d_ej / sum_all_users(d_uj). Each denominator must be positive and same-function compatible; include every real user/period. Apply initial/replacement/maintenance/retirement and provider cells once. | actual native Q_j; evidenced demands and full life/provider coverage | attributed native q_ej |  |
| normalize_once | inventory for coherent hire cohort | q_ref = sum_e(q_e) / N, N > 0. Aggregate only compatible configuration/capacity/time/control/gates/region/duty; retain strata when unlike. Apply reference_compatibility and completed_obligation_cohort before selecting the numerator and N. | attributed native quantities; coherent N | quantity per declared reference flow |  |
| ac_native | externally supplied AC irrespective of payer or payment | E_MJ = E_kWh * 3.6. Use native Net calorific value support; apply conversion once, with actual gate/loss/provider coverage. | metered compatible AC | MJ |  |
| substance_release | each actual emitted substance | Use actual species-specific mass measurement or evidenced compatible source-consumption method; preserve carbon origin, receiving compartment, retained/transferred/oxidized fractions and uncertainty. No universal factor or whole-stock release. | actual source and fate evidence | actual native substance mass |  |
| reference_compatibility | all actual rows and obligations | Before pooling or comparing per-engagement results, record a compatibility decision for every original obligation. Require the same supplied function, compatible actual configuration and hired capacity or capability with native units, equal accepted availability H for the declared per-engagement reference, equivalent acceptance quality, operating versus commercial responsibilities, delivery/redelivery gates, region and duty. Unit conversions require verified support; tolerance may cover evidenced measurement uncertainty only, not different service functions or durations. Different H, incompatible capacity, control, duty or gates remain separate strata unless a documented physical conversion to one explicitly declared common reference is supported for every affected quantity. Count, price, nominal fleet capacity and a shared CPC code never establish equivalence. Missing facts block pooling; one item remains one real original accepted obligation. | cp_acceptance_cohort; actual native records | Evidenced compatible cohort, unique attribution and row-level evidence decisions |  |
| completed_obligation_cohort | reference output and linked contributing nodes | Use a declared completed-obligation cohort for this engagement reference. At each reporting cut retain opening ongoing obligations, new obligations, completed accepted obligations, terminal failed/cancelled obligations and closing ongoing obligations with original ids and chronological amendments. Each physical event belongs to its actual obligation and node or one evidenced shared pool. Gather the complete causal service cycle for every obligation entering N, including events before the reporting window; do not divide all calendar-period purchases or ongoing-contract activity by the count completed in that period. Keep ongoing activity with its own obligation for later reconciliation; it is not zero or an accepted fractional item. Failed/cancelled burdens remain separately traceable and enter an accepted cohort only through documented causal pool attribution, never an arbitrary shift to another product or period. Reconcile period and full-obligation ledgers without duplicated events. At N=0 retain burdens and report no finite per-item intensity. A period-based service output requires its own explicit compatible reference and review, not a silent reinterpretation of this Count. | cp_acceptance_cohort; actual native records | Evidenced compatible cohort, unique attribution and row-level evidence decisions |  |
| foreground_expansion_reconciliation | all actual rows and obligations | For each mandatory expansion protocol keep an applicability register owned by its declared node: occurred, evidenced absent or unresolved. An occurred branch has an exhaustive concrete-child list; each child records unique row id, direction/type, actual identity/state/gate, native property/unit/quantity and method, source/receiver/fate, physical transfer id and protocol, exact provider-covered phase/event/site/period cells and asset all-user lifetime attribution where applicable. An absence decision needs dated source records and a bounded node/period/scope; missing evidence is unresolved. Reconcile actual unallocated material, water, carbon and energy ledgers at compatible stock/transform/receiver gates before burden attribution; allocated quantities are not a substitute for physical balance. Internal transfers have paired native amounts and one custody/event owner, not new external supplies or releases. Do not bind protocol labels or fabricate mixture constituents. Any unresolved actual occurrence, identity, quantity, fate or coverage blocks completion of the concrete foreground package; a PCR contract check alone does not close the register. | cp_acceptance_cohort; actual native records | Evidenced compatible cohort, unique attribution and row-level evidence decisions |  |
| conditional_range_guardrails | all actual rows and obligations | The fixed reference output amount is the normalization definition, not an observed yield distribution. For every other actual inventory row collect an independent compatible reference sample or physical/method constraint before applying a numerical QA guardrail. Record row/node, occurrence conditions, configuration, capacity and H stratum, supplier/state/gate, native unit and conversion evidence, sample source and period, method, bounds and uncertainty. Compare like quantities on the same stated basis; a numerator per engagement cannot be compared directly with a per-hour or per-mass bound. Do not use the validation batch own minimum or maximum to validate itself. A missing compatible numerical range is an unresolved evidence need, not zero, an accepted default or proof of abnormality. Do not invent a universal per-hire interval or replace measurements with a provisional estimate. Every required row-level range decision and supporting evidence must be reviewed before promotion; an unresolved range must remain disclosed. | cp_acceptance_cohort; actual native records | Evidenced compatible cohort, unique attribution and row-level evidence decisions |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| functional_acceptance | actual hire output | Original/amended agreement, actual driver/vehicle availability, hired capacity, positive accepted H, renter direction and operating responsibility must support the same declared service. Missing acceptance or function is a blocker. | cp_hire_acceptance |
| atomic_register | all mandatory expansions | Exhaustive node-owned occurrence/absence and concrete-child evidence are required. Actual variable identities are not represented by aggregate protocol names. Child identity/native quantity/support/provider/life/fate gaps block final data. | cp_expand_operating_inputs;cp_expand_vehicle_assets;cp_expand_shared_sites;cp_expand_driver_support;cp_expand_contracted_operations;cp_expand_collected_wastes;cp_expand_substance_releases;cp_expand_resource_intakes;cp_expand_cooutputs_transfers |
| life_and_provider | all shared assets and services | All-user lifetime demand covers hires, own operation, concurrent users, standby/support, maintenance and reporting periods. Initial/replacement/maintenance/retirement and provider-covered cells have unique owners; uncertain forecasts require sensitivity and no guessed lifetime. | cp_expand_vehicle_assets;cp_expand_shared_sites;cp_expand_contracted_operations |
| site_and_mode | fleet/site/reporting cohort | List every contributing vehicle, driver, depot, road/support site and provider with native records linked to common boundary. Declare event/continuous mode and actual weights; no unweighted mean of unlike hire intensities or omitted site. | cp_hire_acceptance;cp_native_supply;cp_expand_shared_sites |
| native_fates | supplies, wastes and releases | Calibrated native records, compatible actual grade/state, source and receiving media, actual species basis and downstream treatment evidence are required. Preserve missingness, uncertainty and exclusions; no density, emission, manpower or recovery defaults. | cp_native_supply;cp_generated_oil;cp_co2_release |
| cohort_and_evidence_gate | all contributing nodes | Obligation compatibility, cross-period states, actual children and independent range evidence must be traceable. Unknown facts are not zero; ongoing obligations cannot be mixed into a completed cohort. | cp_acceptance_cohort |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| scope_reference | operated_truck_hire | Verify actual operated-hire substance, positive actual accepted H and every reference qualifier. No bare-rental, operator-only, manufacture or consignment-carriage substitution; no positive-load/distance condition. N must count independent accepted obligations, not payments, shifts, trips or replacements. |  |
| native_identity | operated_truck_hire | Every actual exchange requires one compatible verified concrete UUID, native property/unit/quantity/gate, source/provider and uncertainty. Conditional fixed cards require compatible actual occurrence; incompatible identities require separate children. Missing data is unknown, never zero. |  |
| atomic_completion | operated_truck_hire | All mandatory cp_expand_ protocols require exhaustive occurrence or evidenced absence and concrete child registers. Each actual child needs unique row id, direction/type, identity/state/gate, verified UUID/support, native quantity, source/receiver/fate, provider/life/all-user ownership and nonduplication evidence. Any unresolved actual scope, identity, quantity, fate or ownership blocks final foreground data completion and downstream publication; requirements are not completed exchanges. |  |
| coverage_and_balance | operated_truck_hire | Reconcile native meters, opening/closing stock, purchases, use, transfers and waste; retain actual carbon source/species/medium. Every shared asset/provider cell, run/site/user/lifecycle period and failure/replacement path has one owner, evidenced compatible denominator and no overlap. Incomplete lifetime, representativeness or boundary coverage is a blocker. |  |
| route_acceptance | operated_truck_hire | Resolve actual mutually exclusive configurations, accepted versus rejected/unavailable periods, continuous/event pools and every intended output/handoff. An invoice title, fee, nominal fleet capacity or advertised duration is not physical acceptance evidence; fleet/site aggregation needs compatible function and justified weights. |  |
| reference_compatibility_gate | all contributing nodes | Verify reference_compatibility against the recorded actual function, configuration/capacity, accepted H, quality, responsibility, duty and gates before pooling; retain unsupported combinations as separate strata. |  |
| completed_obligation_cohort_gate | all contributing nodes | Verify completed_obligation_cohort using cut-off status and unique full-cycle event ownership; ongoing duties and unassigned failures cannot be silently divided by completed N, and N=0 has no finite intensity. |  |
| foreground_expansion_reconciliation_gate | all contributing nodes | Verify foreground_expansion_reconciliation for every mandatory node-owned protocol, concrete child and physical ledger before attribution; unresolved applicability, identity, quantity, fate or provider overlap blocks foreground completion. |  |
| conditional_range_guardrails_gate | all contributing nodes | Verify conditional_range_guardrails separately from the fixed reference definition; numeric guardrails require independent compatible evidence, a shared basis and reviewed scope, not a self-validating batch or invented universal bounds. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Qualified operated truck and other motorized freight vehicle hire inventory for process and lifecyclemodel use. |
| allowed_use | Actual independent accepted obligations with harmonized configuration/capacity/time/control/gates/region/duty and complete atomic/native/lifecycle/provider review. |
| excluded_use | Unqualified engagement count; carriage, bare rental, operator-only or manufacture substitution; customer-paid fuel as free; unresolved expansion as zero; mandatory positive distance/load. |
| required_metadata | Actual engagement id and original/amended obligation; truck or other motorized freight vehicle identity; configuration and hired capacity with native units; positive actual accepted availability time H; reporting period; driver/provider operating responsibility; renter direction/control; availability/quality/acceptance and replacement conditions; delivery and return gates; service region and duty; actual standby/positioning/failure/replacement; all-user asset life and native provider coverage; compatibility_decision; completed_obligation_cohort; row_range_evidence_status |
| required_quality_disclosure | Actual original/amended hire scope and acceptance; failures/replacement/standby; native supplies and payer-independent boundary; all-user/provider/life coverage; actual identity/data/fate gaps and uncertainty. |
| update_trigger | Changed actual function, configuration, capacity, accepted availability/control/gates, region/duty, native energy/material, provider/life/allocation or actual release/waste fate. |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-truck-hire-2025 | official_guidance | UNSD, CPC 3.0 66012 (30 June 2025). https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/66012 | Official scope: trucks and other motorized freight vehicles with driver; exclusions without driver 73112 and road freight carriage 6511. |
| shalom-driver-hire | literature | Shalom Movers, Lorry Rental in Singapore with Driver, accessed 23 October 2026. https://shalom.com.sg/lorry-rental-in-singapore-with-driver/ | Bounded commercial example of actual vehicle/configuration matching, vehicle-plus-driver booking, duration and customer loading versus driver operation. No advertised price, dimension or minimum duration imported as universal rule. |
| spiess-truck-hire | literature | SPIESS, Truck Hire with Driver, accessed 23 October 2026. https://spiess.fr/en/truck-hire/ | Bounded commercial example of rigid/tractor/semitrailer bodies, auxiliary equipment, operator and regional/site duty variation; no published fleet list treated as complete or universal. |
