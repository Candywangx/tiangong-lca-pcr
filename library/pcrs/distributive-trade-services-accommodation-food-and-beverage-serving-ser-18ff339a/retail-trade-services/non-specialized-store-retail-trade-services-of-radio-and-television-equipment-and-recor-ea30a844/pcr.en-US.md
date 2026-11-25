---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-radio-and-television-equipment-and-recor-ea30a844
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Counter collection retail service for boxed Philips TAR1506/00 radios in non-specialized stores

## 1. Scope and Applicability

This PCR specifies a narrow retail-service route for one actual radio SKU, with a partial incremental foreground and mandatory executable completion. The official classification also covers transmission/camera apparatus, other receiver/audio equipment, parts and recorded media; this route does not establish full-leaf equivalence. Manufacturer specifications identify the model only; all inventory quantities and presence/fates require foreground evidence.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-radio-and-television-equipment-and-recor-ea30a844 |
| classification_refs | CPC 3.0 62142; narrower |
| covered_products | One homogeneous manufacturer-boxed TAR1506/00 radio EAN 4895229116627 collected at a non-specialized store counter; actual supplier pack revision fixed per pool |
| excluded_products | Other radio models, televisions, transmission/camera equipment, parts, recorded media, online/delivery retail, installation, repairs, separate battery sales and ex-demonstrator sales |
| representative_product | Philips TAR1506/00 analogue FM/MW mono portable radio; manufacturer 2024-10-14 v5.2.7 identifies one-product box, AAA LR3 power and printed guide/warranty; actual received BOM controls completeness |
| production_route | Store receiving, ambient boxed holding, optional permanent battery-powered demonstrator, checkout and physical counter handover; electronic receipt; no added carry bag; naturally ventilated store with verified absence of fuel combustion and refrigerant-containing equipment within the store service boundary |
| market_state | New complete original sale pack; retail service rather than radio manufacturing or listening service |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Counter collection service of the exact original boxed radio |
| How much | 1 Item(s) |
| How well | Complete correct pack physically handed to customer and finally valid acceptance; c_acceptance |
| How long or cycle | One prospectively declared same-configuration service pool with return closure and versioned later corrections |
| reference_flow_link | service |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Counter collection retail service for one boxed Philips TAR1506/00 radio |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | model and EAN plus actual supplier pack/BOM revision; non-specialized store counter route and receiving/handover gates; original unit IDs and final acceptance status version/date; prospective configuration pool and all zero-sale periods; demo presence and primary LR03 cell manufacturer/model; partial boundary and completed module source coverage; original supplier background responsibility S/F/T/O |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| m_count | service; failure_pack; supplier_return; demo_package; demo_cell | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Count only the defined complete service/pack/device/cell objects; never use count as unmeasured mass, time or logistics activity. |
| m_energy | metered_ac | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Use actual kWh*3.6; no audio power or battery energy duplication. |
| m_mass | radio_waste; spent_cell; box_waste; paper_waste | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use actual carrier net kg; 1 g=0.001 kg. Preserve state and exact tare boundaries. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_scope | service | Start at documented store receiving gate after inbound delivery, finish at qualified physical counter handover. This is a partial incremental service. Customer travel, post-handover use and product end of life belong to the downstream goods system; record this handoff explicitly. Necessary store and logistics modules remain mandatory under c_modules before any complete service claim. Common network/IT, security and administration are expressly excluded business functions of this partial boundary. Completing the current module matrix establishes only the declared route-module inventory, not whole-store or all-business retail coverage; these exclusions remain disclosed and prevent any such full-coverage claim. | `ghg-product-2011` |
| b_package | goods | Fix actual supplier, model, EAN, pack revision and item-level receiving evidence. Obtain supplier full product and packaging BOM or a complete model-specific lifecycle provider with signed exact coverage. Include radio electronics/enclosure/speaker/antenna, supplied documents, all actual factory accessories, factory batteries if any, box/liners/labels/adhesives and inbound gate. The specification alone proves neither battery inclusion nor absence. Factory-included objects occur once in the pack; separately bought demo cells are disjoint. Unknown composition/coverage blocks completeness, never becomes zero. | `philips-tar1506-2024` |
| b_background | goods | Maintain unique original-pack source IDs through opening, return, resale, failure and transfers. Supplier production plus inbound logistics at the same receiving gate is partitioned into S finally accepted goods, F retailer-responsible failure/loss, T explicit continuing named internal-demo or external responsibility and O unresolved/open stock. S is handed downstream once; add F/Q to service, retain T with actual recipient and signed continuing responsibility, carry O without erasure. A failed external handover is not waste by default. Losing identity or supplier return does not erase production. Background responsibility changes create no physical exchange or avoided-burden credit. A stock-to-demonstrator assignment transfers its original source to named internal T asset and cell IDs at the actual event date; it is not F and not a new physical purchase. Before separating factory cells from the battery-free radio/box/documents package, obtain supplier-verifiable component inventory vectors with identical receiving-gate coverage, so original package vector V_pack = V_battery_free_package + sum V_factory_cell + other evidenced component vectors. Unknown component coverage blocks completeness. Do not divide environmental vectors by arbitrary mass, price or item fractions. Reuse those exact original component source IDs/providers in demo_package/demo_cell and remove their old goods allocation; newly bought cells have separate source IDs. | `ghg-product-2011` |
| b_demo | demo | A permanent demonstrator has an asset ID and is never sale throughput. Its complete original package manufacture/installation is separated from operation cells, event maintenance and terminal treatment. This route uses actual primary alkaline LR03 AAA 1.5 V cells, no charging or mains radio supply. Log powered, switched-off and installed idle exposure and all cell changes; do not infer battery energy from 100 mW audio output or nominal life. Added headphones, security tags, mains adapters, rechargeable cells, bags, printed receipts, repair or separated carrier states require specific bilingual cards/protocols and reconciled providers before completeness. Natural ventilation and absence of every fuel burner and refrigerant circuit must be established by dated building/equipment walkthrough, plant register and landlord/provider boundary declaration. Unknown or present combustion/refrigerant equipment makes this route inapplicable, rather than a zero emission assumption. | `philips-tar1506-2024` |
| b_carriers | residual | Dispatch only actual physical states: complete battery-free radio, spent LR03 cells, complete discarded original box assembly, and dry printed-paper carrier. Each carrier excludes transport container tare and separately dispatched components. The box assembly requires real full box/liner/label/adhesive BOM; it is not assumed pure paperboard. If broken into separately dispatched materials, extend with each actual atomic card. Provider treatment covers collection transport and treatment only if evidenced; do not duplicate contained constituents or emissions. | `ghg-product-2011` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual complete original sale packs at documented store receiving gate |
| starting_condition_role | Disclosed merchandise background handoff, not free production |
| product_classification_scope | Only this non-specialized store radio route; narrower than CPC3.0 62142 |
| recursive_input_rule | Incoming same-service backgrounds retain exact source boundary; exclude overlap using c_merge, never recursively duplicate retail stages |
| upstream_dataset_requirement | Complete model/BOM receiving-gate supplier coverage and explicit S/F/T/O responsibility |
| disclosure | Partial core; mandatory modules, actual gates, dates, Q version and all remaining gaps |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| counter | Counter custody and accepted collection | required | Always; same configuration pool | incremental retail service | 1 Item(s) service |
| demo | Permanent radio demonstration | conditional | Actual permanent demonstrator and primary LR03 cells; absence evidenced | lifetime device and cell service | 1 Item(s) service |
| residual | Residual-carrier handover | conditional | Actual carrier dispatch; retained stock recorded separately | terminal carrier responsibility | 1 Item(s) service |

### Process: Counter custody and accepted collection (`counter`)

#### Inputs

##### Product flows

###### Alternating current (`metered_ac`)

Actual counter AC at point of use; voltage/provider unspecified by flow identity; record actual supplier and voltage separately

- Selected flow: Electricity, alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: 3.6 * E_attr_kWh / Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_counter`
- Sources: `philips-tar1506-2024`; `ghg-product-2011`

###### Complete original boxed Philips TAR1506/00 radio package at store receiving gate (`failure_pack`)

Conditional F responsibility; package includes actual factory accessories/batteries once; full supplier coverage required

- Selected flow: Complete original boxed Philips TAR1506/00 radio package at store receiving gate
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: B_F / Q; only retailer-responsible failed original-pack equivalents, no S/T/O burden here
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_counter`
- Sources: `philips-tar1506-2024`; `ghg-product-2011`

#### Outputs

##### Product flows

###### Counter collection retail service for one boxed Philips TAR1506/00 radio (`service`)

Required final qualified handover only; Q>0

- Selected flow: Counter collection retail service for one boxed Philips TAR1506/00 radio
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_counter`
- Sources: `philips-tar1506-2024`; `ghg-product-2011`

###### Complete original boxed Philips TAR1506/00 radio package physically returned to supplier (`supplier_return`)

Conditional intact supplier return; opened, damaged or incomplete packages require distinct state-specific extension before completeness

- Selected flow: Complete original boxed Philips TAR1506/00 radio package physically returned to supplier
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: N_supplier_intact / Q; actual intact original packs only, no background credit
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_counter`
- Sources: `philips-tar1506-2024`; `ghg-product-2011`

### Process: Permanent radio demonstration (`demo`)

#### Inputs

##### Product flows

###### Battery-free complete Philips TAR1506/00 radio with original box assembly and supplied documents manufacture and installation package (`demo_package`)

Conditional permanent demo asset; signed model-specific provider/BOM required; original factory cells if included are explicitly removed from manufacture provider and handled once under cell ledger

- Selected flow: Battery-free complete Philips TAR1506/00 radio with original box assembly and supplied documents manufacture and installation package
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: sum_a(e_p_a / L_v_a) / Q; defined complete battery-free radio/box/documents packages, excluding cell manufacture and all operation, maintenance and treatment
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_demo`
- Sources: `philips-tar1506-2024`; `ghg-product-2011`

###### 1.5 V LR03 alkaline AAA primary cell (`demo_cell`)

Conditional demo primary-cell use; actual manufacturer/model and source IDs distinguish separately purchased and factory-provided cells

- Selected flow: 1.5 V LR03 alkaline AAA primary cell
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: sum_c(e_p_c / L_v_c) / Q; actual model complete cells, no duplicate DC electricity exchange
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_demo`
- Sources: `philips-tar1506-2024`; `ghg-product-2011`

### Process: Residual-carrier handover (`residual`)

#### Outputs

##### Waste flows

###### Discarded complete battery-free Philips TAR1506/00 radio (`radio_waste`)

Actual radio consignment; device retains enclosure/electronics/speaker/antenna, excludes removed cells and packaging; unknown missing parts need state-specific card

- Selected flow: Discarded complete battery-free Philips TAR1506/00 radio
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: W_radio_attr_kg / Q; sold-stock failure mass plus terminal demo mass times final lifetime responsibility once
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residual`
- Sources: `philips-tar1506-2024`; `ghg-product-2011`

###### Spent 1.5 V LR03 alkaline AAA primary cell (`spent_cell`)

Only actually exhausted complete LR03 cells separately collected; preserve measured remaining capacity, use/leakage and chemical state of factory-recovered cells. Unused, partly used or other-chemistry discards cannot enter this spent-cell card: add actual state-specific cards before completeness. No casing/electrolyte constituent duplication; leaks require measured specific carrier/emission extension

- Selected flow: Spent 1.5 V LR03 alkaline AAA primary cell
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: W_cell_attr_kg / Q; final whole-cell net dispatch kg times its final life responsibility once
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residual`
- Sources: `philips-tar1506-2024`; `ghg-product-2011`

###### Discarded complete original TAR1506/00 sales-box assembly (`box_waste`)

Actual box assembly dispatch with evidenced whole box/liner/label/adhesive BOM and treatment; no pure-polymer or nominal tare substitution

- Selected flow: Discarded complete original TAR1506/00 sales-box assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: W_box_attr_kg / Q; intact full assembly net mass excluding radio/cells/documents; stock-origin sources use their original pool ownership, demo-origin sources use that named source asset final lifetime f once
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residual`
- Sources: `philips-tar1506-2024`; `ghg-product-2011`

###### Discarded dry printed paper carrier of TAR1506/00 guides and warranty certificates (`paper_waste`)

Actual mixed printed-paper consignment; excludes complete box assembly, plastic films, battery wrappers and transport container; other carriers require extension

- Selected flow: Discarded dry printed paper carrier of TAR1506/00 guides and warranty certificates
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: W_paper_attr_kg / Q; directly weighed separately dispatched dry printed-paper carrier; stock-origin sources and demo-origin source-asset final lifetime f are separate ledgers, multiply f once only for demo
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residual`
- Sources: `philips-tar1506-2024`; `ghg-product-2011`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_pool | all | Declare fixed store/configuration pool dates and the latest version before collection; include unsuccessful attempts, returns, closed/idle days and zero-sale subcohorts. Extend only prospectively to a declared same-configuration pool, never select successful days retrospectively. A wholly Q=0 pool retains raw burdens and remains unnormalizable. Late returns/revocations replace original pool numerator, denominator and fate ledger at actual event dates; resales do not charge original production twice. | `ghg-product-2011` |
| a_direct | electricity | Use disjoint direct metering first. Shared residual meter totals use documented activity-linked checkout ready-hours, including idle/failed service, over every actual beneficiary. Subtract child meters only when included in the parent measured boundary. Reconcile shares to full pool total; unknown or zero all-beneficiary driver blocks allocation, not a default weight. | `ghg-product-2011` |
| a_assets | demo | For each complete demo asset or primary cell retain acquisition/BOM/provider, installed intervals, every beneficiary and versioned expected total lifetime exposure L_v. Allocate its embodied package by e_p/L_v as c_exposure, then normalize once. Never input full acquisition again beside that share. At retirement or revised lifespan, replace every historical beneficiary version, reconcile cumulative shares <=1 and allocate final residual over actual full-life exposure, including idle exposure. Maintenance is actual event-based with disjoint provider coverage. Terminal carrier mass uses its own final lifetime responsibility fraction once, not an additional manufacturing factor. | `ghg-product-2011` |
| a_no_credit | residual | No recycling, supplier return or refund credit is assumed. Financial refunds or discounts with valid acceptance do not alter Q. Actual acceptance revocation removes the original ID even without return; Q already counts distinct final-valid IDs and revocations are not subtracted again. | `ghg-product-2011` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_counter | counter | Counter service, custody, source responsibility and AC | original-item event ledger and meter records | pool_id; config_version; original_id; supplier_lot; EAN; BOM_revision; receipt_date; event_id; actual_date; gross_handover; return; revocation; acceptance_status_version; acceptance_evidence; final_recipient; physical_state; S_F_T_O; source_background_id; source_pack_quantity; responsibility_fraction; N_supplier_intact; opening; closing; demo_assignment; loss; meter_id; parent_boundary; start_kWh; end_kWh; disjoint_submeter_kWh; all_beneficiary_ready_hours; supplier_voltage; supplier_BOM; event_date; provider_version; included_disjoint_children; E_direct_disjoint; h_pool; provider_coverage; G_open; G_receipts; G_customer_returns; G_internal_in; G_close; G_gross_customer_handover; G_supplier_return; G_internal_out; G_to_D; G_to_H; G_loss; source_vector; supplier_component_vectors; component_source_id; internal_T_asset_cell_id; state_transfer_date; moisture_state; component_BOM; D_open; D_direct_acquisition; D_internal_in; D_close; D_to_H; D_external_transfer; D_loss; H_open; H_external_in; H_close; H_dispatch; H_loss; source_original_or_asset_id; carrier_state; source_vector_conservation | Barcode/serial or durable internal original ID at receiving and each custody event; inspect actual pack and supplier BOM; signed checkout handover/acceptance plus returns registry; calibrated disjoint AC meter and circuit map; Apply c_acceptance, c_background, c_transfer and c_electricity; keep gross custody separate from Q; reconcile all supplier sources and all meter beneficiaries | Item(s); kWh; h | Each event and meter interval; daily stock reconciliation | All prospective pool intervals including closed, failed and zero-sale periods and subsequent corrections | Actual receiving gate, ambient store and counter; no delivery/installation | per reference flow | Calibration/range checks, circuit inclusion diagram, supplier signed coverage, timestamps, immutable event IDs and replaced version audit trail |
| cp_demo | demo | Demo assets and LR03 cell lifetime allocation | Persistent model/BOM asset and cell ledger | asset_or_cell_id; source_id; manufacturer; model; BOM; factory_inclusion; manufacture_provider_exclusions; acquisition; installation; e_p; all_beneficiary_exposure; L_v; lifetime_version; previous_allocation_versions; on_hours; off_installed_hours; removed_storage_hours; idle_beneficiary; replacement_date; maintenance_event; retirement; final_actual_exposure; final_residual; remaining_life_test; usage_state; model_specific_depletion_evidence; source_fate; D_open; D_direct_acquisition; G_to_D; D_internal_in; D_close; D_to_H; D_external_transfer; D_loss; internal_T_source_id; supplier_component_vectors; component_source_id; source_vector_conservation; source_vector | Observe permanent demo and each cell installation/removal; document whole model-specific provider/BOM; clock exposure including powered-off installed cells and standby, never nominal audio power conversion; calibrate clock/log equipment; c_exposure; acquisition and retirement stock validate fractions only, not an additional full-device input; event maintenance must be added as disjoint atomic rows before completeness | Item(s); h | Each state change with period-end audit | Full asset/cell life across all pools and zero-output beneficiaries | Permanent in-store radio and actual primary cells only | per reference flow | Asset photographs, cell labels, signed BOM and exact provider boundaries, calibrated duration logs, all historical version corrections |
| cp_residual | residual | Actual carrier dispatch and final recipients | Consignment scale and carrier/source ledger | consignment_id; source_original_or_asset_id; carrier_state; gross_kg; transport_container_tare_kg; net_kg; weighing_mode; removed_parts; opening_carrier_stock; generated; closing_carrier_stock; dispatch_date; recipient; treatment_provider; transport_coverage; final_life_responsibility; source_background_owner; H_open; G_to_H; D_to_H; H_external_in; H_close; H_dispatch; H_loss; moisture_state; component_BOM; condemnation_date; remaining_capacity; actual_use_state; leakage_state; chemistry | Calibrated net scales for each real separate consignment; photograph intact carrier and recipient/treatment receipt; radio weighed after cell removal; direct net weighing and component-BOM reconstruction are mutually exclusive; c_dispatch; dispatch net kg is not corrected again by generated/opening/closing balance; no repeated subtraction of removed cells; each source component belongs to one actual carrier/retained/customer state | kg | Each dispatch, daily retained-stock checks | All source-pool carrier fates including retained and late-return states | Retail source carriers and attributable demo terminal carriers, no customer-use take-back | per reference flow | Scale certificates, tare and material-state evidence, consignment receipts, component partition and treatment/transport boundaries |
| cp_completion | counter | Mandatory missing-module completion | Disjoint external-module ledger | module_id; raw_source_id; source_version; original_denominator; original_unit; normalized_value; actual_raw_total; property_uuid; exchange_uuid; flow_type; direction; compartment; provider_boundary; all_beneficiary_driver; empty_trip; stationary_idle_hours; freight_capacity_occupied_hours; asset_e_p; asset_L_v; every_prior_version; area; reserved_hours; shelf_capacity; service_ready_hours; actual_meter_data; cleaner_mass; discharge_volume; density; trip_fuel; charging; source_background_owner; attribution_fraction; physical_event; opening_closing_stocks; uncertainty; Q_pool_version; natural_ventilation_evidence; no_combustion_evidence; no_refrigerant_evidence; no_purchased_heat_cooling_evidence; cleaning_event; cleaned_area; all_cleaned_area; water_import_kg; original_formulation_model; original_formulation_kg; supplier_composition; solution_kg; original_source_destination_kg; rinse_water_kg; dry_cloth_source; cloth_lifetime; cloth_net_wet_dispatch_kg; cleaner_container_BOM; whole_liquid_net_kg; discharge_volume; density; cleaner_retained_kg; carrier_provider_exclusions; component_source_id; supplier_component_vectors; original_source_final_partition; reclassification_event_id; previous_source_destination; replacement_source_destination; container_complete_BOM; container_retained_liquid_kg; container_net_dispatch_kg; e_area; L_area_v; all_beneficiary_cleaned_area; cloth_lifetime_version; every_prior_cloth_version; cloth_remaining_life_evidence; actual_cloth_laundry_event; cloth_laundry_provider_boundary; cloth_repair_event; cloth_terminal_carrier; final_actual_area; segment_id; capacity_kg; reserved_h; driver_unit; all_beneficiary_segment_drivers; provider_allocation_status; consignment_attributed_quantity; fixture_asset_id; fixture_complete_BOM; fixture_building_provider_coverage; fixture_reserved_zone_area_m2; fixture_reserved_h; fixture_all_beneficiary_area_hours; fixture_L_area_h_v; fixture_lifetime_version; fixture_previous_beneficiary_versions; fixture_final_actual_area_h; fixture_maintenance_event; fixture_provider_exclusions; partial_excluded_business_functions | Collect whole-store/module originals, subcontractor full fuel/distance/idle records, meter diagrams and asset exposure; bind each real exchange before aggregation; c_modules and c_merge; unknown presence/coverage is a blocking gap; absence needs dated inspection/provider proof | source-specific units; h; m2 | Every module period and revision | Same configuration pool plus full-life source histories | Building, shelving, checkout hardware, lighting/HVAC, housekeeping and actual logistics | per reference flow | Signed disjoint boundary matrix, original units/denominators, all-beneficiary driver and exact source-ID deduplication |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_acceptance | service | Q = count(distinct original_id with final valid acceptance in the original pool version). Require actual paid/order-linked handover of the exact complete pack, customer acceptance of correct model/quantity/state and declared return assessment closure date. Refused, lost, demo, cancelled and revoked acceptance IDs do not count. Returning then reselling the same unit leaves at most one final valid service. Financial adjustment alone does not revoke acceptance. Correct the original pool, never subtract revocations a second time. Final external retention without acceptance is separate physical custody and S/F/T/O fate, not sale or automatic waste. Use disjoint physical states G=saleable goods, D=permanent demonstration devices and H=held condemned devices. G_to_H and D_to_H are dated internal condemnation transfers, not physical dispatches. Close G: G_open+G_receipts+G_customer_returns+G_internal_in = G_close+G_gross_customer_handover+G_supplier_return+G_internal_out+G_to_D+G_to_H+G_loss. Close D: D_open+D_direct_acquisition+G_to_D+D_internal_in = D_close+D_to_H+D_external_transfer+D_loss. Close H: H_open+G_to_H+D_to_H+H_external_in = H_close+H_dispatch+H_loss. Count each original device once per transfer; maintain a separate cell ledger rather than adding cell counts to device counts. Paper/box states have their own kg stock QA. Actual waste dispatch occurs only at H_dispatch consignment date; radio_waste uses measured kg then, not condemnation count. All physical external transfers/retention require named recipient and state-specific cards before completeness. Reconcile source-linked device/cell/box/paper kg separately at measured moisture/state and actual component BOM; never mix kg with these count balances. | original_id; event_id; actual_date; acceptance_evidence; acceptance_status_version; gross_handover; return; revocation; final_recipient; opening; receipt; closing; internal_transfer; demo_assignment; loss; waste; G_open; G_receipts; G_customer_returns; G_internal_in; G_close; G_gross_customer_handover; G_supplier_return; G_internal_out; G_to_D; G_to_H; G_loss; D_open; D_direct_acquisition; D_internal_in; D_close; D_to_H; D_external_transfer; D_loss; H_open; H_external_in; H_close; H_dispatch; H_loss; state_transfer_date; source_original_or_asset_id; component_source_id; carrier_state; moisture_state; component_BOM; internal_T_asset_cell_id | Q Item(s) and independent gross custody balance | `ghg-product-2011` |
| c_background | failure_pack | For every original supplier source s in Item(s), B_R_s = B_S_s + B_F_s + B_T_s + B_O_s. Compute B_x_s = original source_pack_quantity_s * exclusive responsibility_fraction_x_s once; fractions sum to 1. Sum B_F_s for failure_pack amount B_F/Q; join model-specific complete provider at receiving gate. Transfer B_S/Q to the downstream goods model exactly once. B_T retains identified internal asset/cell or external custodian/continued background; B_O blocks final closure. Original source equivalents do not equal fragment count or mass: descendant carriers share the original source partition and never each obtain one pack. Source production and inbound transport have same ownership. Event dates and provider version replace original numerator when fate changes. failure_pack admits only a full original source whose entire receiving-gate environmental vector belongs to F; use responsibility fractions 0 or 1 for that whole source. If only particular components have F responsibility, the whole-pack card is unavailable: first obtain the actual supplier component vectors and add named component-specific cards, never a nominal mass/count fraction of V_pack. A demo-assigned source is internal T; its exact disaggregated original vectors pass to c_exposure and cannot also enter B_F. | source_background_id; source_pack_quantity; S_F_T_O; responsibility_fraction; supplier_BOM; provider_coverage; event_date; provider_version; component_source_id; supplier_component_vectors; internal_T_asset_cell_id; state_transfer_date; source_vector; source_vector_conservation | B_F Item(s), S/T/O separate backgrounds at original gate | `ghg-product-2011` |
| c_transfer | supplier_return | N_supplier_intact is the actual distinct complete intact original packs in supplier consignment receipts, measured before division by Q. Do not derive physical transfers from B_T or financial credit. Opened/damaged/externally retained goods need state/recipient-specific extension or remain explicitly incomplete. Preserve corresponding background responsibility through all transfers. | consignment_id; original_id; physical_state; recipient; actual_date; N_supplier_intact; source_background_owner | N_supplier_intact Item(s) | `ghg-product-2011` |
| c_electricity | metered_ac | E_attr_kWh = E_direct_disjoint + E_shared_residual * h_pool / sum_all_beneficiaries(h). E_shared_residual = parent_end - parent_start - included_disjoint_children only for proven included child circuits. Direct independent meters receive no parent subtraction. h is actual assigned checkout ready-hours including idle, failure and closed standby responsibility. Require known positive shared denominator and reconciliation to total including all beneficiaries; unknown is not zero. Convert 1 kWh = 3.6 MJ; amount = 3.6*E_attr_kWh/Q. Demo primary-cell energy is already in demo_cell, not AC. Meter actual checkout off/standby intervals; no nominal watt defaults. | meter_id; parent_boundary; start_kWh; end_kWh; included_disjoint_children; E_direct_disjoint; h_pool; all_beneficiary_ready_hours; Q | MJ per 1 Item(s) service | `ghg-product-2011` |
| c_exposure | demo_package; demo_cell | For each a, e_p_a is actual installed responsibility duration in h for beneficiary p, including off/idle reserved exposure; L_v_a is documented expected total lifetime installed responsibility h across all beneficiaries, never audio power or arbitrary lifespan. For removed stored cells, retain custody and add actual reserved storage exposure consistently to both e and L. Document L_v from actual model-specific inspection/remaining-life evidence and observed usage states, including cell depletion and storage; no assumed cell count per demonstration. Require L_v >= cumulative actual exposure; otherwise revise all historical allocations first. f_p_a=e_p_a/L_v_a; sum f<=1. Replace, never add, every previous beneficiary allocation when L changes. At retirement L_final=sum_all_actual e and replace all prior allocations so sum f_final=1; unexplained residual/zero lifetime blocks closure. Device package sum f / Q and cell sum f / Q are separate complete physical products; actual package factory cells excluded from device provider and linked to cell ledger once. Maintenance events require actual replacement-specific quantities; acquisition stocks are checks, not extra inputs. For a device transferred from G, manufacturing/installation numerator comes from the same verified battery-free original component vector and source IDs transferred to internal T, not a new whole-pack acquisition. Its physically separate factory cells use the matching original cell component vectors under their own cell IDs; separate replacement cells use their actual new source providers. The package means the complete battery-free radio, original box assembly and supplied documents as a defined model-specific physical product package; exclude cell manufacture, operation, maintenance and treatment. If other factory accessories exist, obtain exact component coverage and extend the named package/cards before completeness. | asset_or_cell_id; e_p; all_beneficiary_exposure; L_v; lifetime_version; previous_allocation_versions; removed_storage_hours; idle_beneficiary; final_actual_exposure; final_residual; factory_inclusion; manufacture_provider_exclusions; Q; component_source_id; supplier_component_vectors; internal_T_source_id; source_vector; source_vector_conservation | Attributable complete asset or cell Item(s) per service | `ghg-product-2011` |
| c_dispatch | radio_waste; spent_cell; box_waste; paper_waste | For each real consignment k, W_net_k = gross_kg - actual transport_container_tare_kg, or use direct calibrated net measurement exclusively. Direct radio net mass after removal already excludes cells; do not subtract removed cells again. For sold-stock-derived carriers W_attr = sum W_net owned by source pool; for demo/cell carriers W_attr_p = sum(W_net_k * f_final_p_k) once, with final lifetime responsibility from c_exposure. No second manufacture fraction. Original pack components remain disjoint among actual carrier dispatch, customer handover, supplier transfer and retained stock. Opening+generation=dispatch+closing is an independent check, never a further deduction from actual dispatch. Treatment and transport attach only once to their evidenced carrier, no default avoided credit. | consignment_id; carrier_state; source_original_or_asset_id; gross_kg; transport_container_tare_kg; net_kg; weighing_mode; removed_parts; final_life_responsibility; opening_carrier_stock; generated; closing_carrier_stock; recipient; provider_boundary; Q | Actual attributable kg per carrier / Q | `ghg-product-2011` |
| c_modules | cp_completion | Mandatory completion matrix: (1) building shell manufacture/installation and terminal treatment excluding separately modelled fittings/HVAC, by assigned floor-area*reserved-hours / all-beneficiary full-life floor-area*hours; (2) shelving manufacture/installation/terminal, excluding building and goods, by reserved occupied shelf-capacity*hours / all-beneficiary lifetime capacity*hours; (3) complete checkout hardware manufacture/installation/terminal excluding AC, consumables and maintenance, by assigned service-ready hours / all-beneficiary lifetime ready-hours; (4) actual lighting and ventilation-fan AC only, excluding metered_ac circuits: use disjoint meters then actual illuminated/ventilated floor-area*reserved-hours across all beneficiaries, including closed/idle responsibility. This fixed route has evidenced no fuel combustion, refrigerant equipment or purchased heat/cooling; unknown or present equipment makes it inapplicable; (5) actual housekeeping and spill/failure cleaning under c_cleaning, allocated by directly cleaned area per event including all beneficiaries; (6) handling/inbound/supplier-return/waste logistics with source ownership per c_background: verified full provider includes actual loaded/empty travel, loading and stationary idle. Otherwise collect fuel/charging and actual vehicle operation by actual segment_id. Use one physical coordinate for every beneficiary on that same segment: d_p_segment=actual reserved payload capacity_kg*reserved_h in kg*h. Never mix volume, item counts or their hours into that driver. Allocate the complete measured segment activity by d_p_segment/sum_all_beneficiaries d_segment, including actual stationary idle duration and empty-return reserved capacity. Every beneficiary driver must be known and the segment total positive; unknown/zero totals block allocation, not a zero t*km claim for empty travel. Record provider_allocation_status. If a signed provider has already attributed the actual quantity to this consignment, use consignment_attributed_quantity directly; segment capacity/time details are QA only and no driver or attribution fraction is multiplied again. Exclude logistics already in supplier receiving-gate or carrier treatment provider. Modules1–3 use c_exposure with respective measured drivers and replace every prior beneficiary on actual retirement/lifetime revision. Every actual maintenance/replacement and new carrier requires event-specific atomic bilingual rows/protocols and providers. No complete service claim until all modules measured or absence evidenced. Actual complete lighting fixtures and ventilation-fan hardware require model-specific full BOM manufacture, installation, event maintenance and terminal responsibility. Count these once inside the actual building provider only when signed exact provider coverage proves all applicable stages and exclusions. Otherwise an independent mandatory fixture-asset module is required: e_fixture_p=actual reserved_zone_area_m2*reserved_h for beneficiary p, and L_fixture_v is evidenced expected total full-life area-hours in m2*h over every beneficiary. Use f_fixture_p=e_fixture_p/L_fixture_v once for manufacture/installation, require known positive lifetime/total exposure and cumulative fractions<=1, and replace every historical beneficiary allocation after any lifetime revision. At actual retirement set L_fixture_final=sum_all_actual e_fixture, replace all prior versions and close final residuals. Cover actual event maintenance separately by actual beneficiary reserved zone area-hours for that event, excluding provider-contained maintenance. Keep operation AC in module4 disjoint from fixture manufacture/installation, maintenance and end-of-life. Attach actual complete terminal fixture-carrier net mass and treatment once using its final lifetime responsibility fraction, not another manufacturing factor; exclude any terminal carrier/treatment already in the building provider. Unknown full BOM, stage coverage or provider overlap blocks completeness, never becomes zero. | module_id; raw_source_id; source_version; provider_boundary; all_beneficiary_driver; area; reserved_hours; shelf_capacity; service_ready_hours; asset_e_p; asset_L_v; every_prior_version; actual_meter_data; cleaner_mass; discharge_volume; density; trip_fuel; charging; empty_trip; stationary_idle_hours; freight_capacity_occupied_hours; source_background_owner; Q_pool_version; segment_id; capacity_kg; reserved_h; driver_unit; all_beneficiary_segment_drivers; provider_allocation_status; consignment_attributed_quantity; fixture_asset_id; fixture_complete_BOM; fixture_building_provider_coverage; fixture_reserved_zone_area_m2; fixture_reserved_h; fixture_all_beneficiary_area_hours; fixture_L_area_h_v; fixture_lifetime_version; fixture_previous_beneficiary_versions; fixture_final_actual_area_h; fixture_maintenance_event; fixture_provider_exclusions; partial_excluded_business_functions | Disjoint raw source/module quantities in original units and denominator | `ghg-product-2011` |
| c_merge | cp_completion | Restore each external normalized exchange n_i to its evidenced raw original numerator R_i=n_i*D_i using actual original denominator D_i, pool and replacement version; use actual raw total instead when supplied and never multiply twice. Apply only its one justified attribution fraction. Reject unknown original denominator, incompatible pool/version or overlapping provider scope. Deduplicate exact source_id+version+physical-event+provider-boundary, replace superseded values, then add only identical exchange UUID/type/direction/compartment, flow property and unit numerators row by row; convert known equivalent units once. Never add kg to MJ or raw to normalized values. Divide all compatible merged raw attributable numerators by common corrected Q once. Keep S downstream coupling separate from incremental service F; reconcile source origins and disclose module completeness. | module_id; raw_source_id; source_version; original_denominator; original_unit; normalized_value; actual_raw_total; attribution_fraction; exchange_uuid; flow_type; direction; compartment; property_uuid; provider_boundary; physical_event; Q_pool_version | One normalized inventory per common accepted service, with explicit completion coverage | `ghg-product-2011` |
| c_cleaning | cp_completion | For each actual cleaning event, collect imported water in kg by direct net weighing or supply volume times measured density, actual purchased original cleaner formulation/model kg, exact supplier composition, separately added dilution/rinse water, every cloth and cleaner-container source/BOM and real dispatch/retained state. Direct meter imports already exclude internal reuse: never subtract reuse again. Measure complete liquid discharge exclusively by calibrated whole-liquid net kg or actual discharge V*rho at measured density/temperature; do not reconstruct it from water balance or subtract evaporation/retention from an already measured dispatch. Record original-formulation-source kg in used/spilled/rinsed/retained/unused destinations as mutually exclusive final source-responsibility portions, excluding added rinse water/dirt. A used or spilled intermediate later rinsed or retained is reclassified by replacing its previous destination for the same source kg and event ID, never added as another source quantity; the final portions reconcile to original formulation input. Composition partitions source QA once, not the measured full-liquid carrier again. Outside cloth/container mass is a separate actual carrier, not original formulation export. A container terminal carrier is the directly measured net complete actual container assembly, including actual body/closure/liner/label/adhesive components and any retained residual liquid, excluding transport-container tare. Its retained liquid is partitioned to that container carrier and cannot also enter liquid effluent or wet-cloth dispatch; the same rule prevents any residual liquid duplication between all three carriers. For each reusable cloth, use a separate area-based equation: f_area_p=e_area_p/L_area_v, where e_area_p is its actual cleaned area in m2 for beneficiary p and L_area_v is its evidenced expected total lifetime cleaned area in m2 over every beneficiary; the h-based e_p/L_v definition for radio/cells is not applied to cloth. Retain cloth model/BOM, remaining-life evidence, every historical beneficiary/version and all failed/spill cleaning area; unknown or nonpositive lifetime/total driver blocks allocation. Replace every historical cloth allocation after any lifetime revision. At actual retirement set L_area_final=sum_all_actual e_area and replace all prior versions so final fractions sum to 1; disclose and resolve residuals. Allocate complete cloth manufacture/installation once by f_area_p and divide Q once, not full purchase again. Actual cloth laundering and repair are event-specific disjoint source packages or atomic water/electricity/cleaner/material rows, allocated to actual event beneficiaries by cleaned area with known positive totals, excluding quantities already in the cloth lifecycle provider. Cloth end-of-life treatment and its actual whole terminal carrier are separate from manufacture/operation; multiply the measured terminal carrier by final f_area once and exclude provider-contained duplicates. A measured wet-cloth consignment carries its actual whole mass including retained liquid; the same liquid cannot also be discharge. Single-use cloth inputs, actual container production, separately discharged containers, liquid treatment and carriers require named atomic bilingual cards/protocols matched to real composition/state before completeness. A verified complete supplier event package may substitute only with exact signed inclusion of these quantities and disjoint water/electricity/chemical/cloth/container/transport/treatment scopes; remove every duplicated foreground/provider quantity by exact source ID, never assume coverage. Attribute each raw event exchange once by cleaned_area/sum_all_cleaned_area with positive known total, or direct subdivision first, then c_merge and divide Q once. | cleaning_event; cleaned_area; all_cleaned_area; water_import_kg; original_formulation_model; original_formulation_kg; supplier_composition; solution_kg; original_source_destination_kg; rinse_water_kg; dry_cloth_source; cloth_lifetime; cloth_net_wet_dispatch_kg; cleaner_container_BOM; whole_liquid_net_kg; discharge_volume; density; cleaner_retained_kg; carrier_provider_exclusions; raw_source_id; provider_boundary; Q_pool_version; original_source_final_partition; reclassification_event_id; previous_source_destination; replacement_source_destination; container_complete_BOM; container_retained_liquid_kg; container_net_dispatch_kg; e_area; L_area_v; all_beneficiary_cleaned_area; cloth_lifetime_version; every_prior_cloth_version; cloth_remaining_life_evidence; actual_cloth_laundry_event; cloth_laundry_provider_boundary; cloth_repair_event; cloth_terminal_carrier; final_actual_area | Disjoint attributable original cleaning exchanges and whole carriers before c_merge | `ghg-product-2011` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_identity | all | Unbound service/product/waste flows remain candidate only. Before dataset completeness bind each actual model/material/state to official direct-read UUID/name/type/property/unit and qualifiers, retain original response/integrity receipts and public-state observation; a count property is not a retail-service identity. AC UUID only identifies point-of-use electricity, not supplier geography, mix, voltage or environmental performance. | Row-specific original identity receipts and supplier/state coverage matrix |
| q_quantity | all | Record what/where/when, actual raw totals, calibration, exact source IDs, one attribution and final Q; retain uncertainty and nonzero stock discrepancies for investigation. Nominal manufacturer product, nett, gross and tare weights are distinct specification coordinates, not measured receiving/cell/carrier weights; never substitute one for another or use audio RMS power as electrical input. | Scale/meter logs, full BOM, event balance and signed uncertainty investigation |
| q_presence | cp_completion; demo | Each conditional activity has dated present/absent evidence. Unknown demo, cell chemistry, leakage, replacement, extra carrier or provider coverage blocks completeness. Inspect actual maintenance, spillage and customer return state; add specific atomic cards, protocols, calculations and aligned Chinese before use. Never use a selector exchange or generic expansion promise as completed inventory. | Dated walkthrough, cell/model photographs, carrier and provider audit |
| q_coverage | cp_completion | Partial core dataset must carry missing-module status. Full retail-service result requires c_modules and c_merge completed with all original evidence, compatible Q versions and supplier S/F/T/O closure. No assumption of full GHG Product Standard compliance follows from citing selected principles. | Module completion matrix and source-level deduplicated aggregation report |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_scope | all | Verify homogeneous SKU/BOM, counter route, exact reference output name and required qualifiers; other classification products remain excluded. Reject delivery/install/repair or ex-demo sale under this route. Require dated proof of natural ventilation and absence of all store-boundary fuel combustion/refrigerant circuits; unknown/present equipment is outside this fixed route. | `philips-tar1506-2024`; `un-cpc3-62142` |
| v_ledgers | service; failure_pack; supplier_return | Require Q>0 and distinct final-valid original IDs, independently balanced gross physical stock, exclusive S/F/T/O source responsibility, actual supplier transfers/retention states, and original-pool version replacement after late returns/revocations. Q=0 is unnormalizable. | `ghg-product-2011` |
| v_providers | all | Reconcile every supplier BOM and complete provider to receiving gate; include all actual accessories and factory batteries once; disjoint demo cell, device manufacture, maintenance, operation and end-of-life coverage. Retain no unbound identity, unknown denominator or missing actual carrier in a complete result. | `ghg-product-2011` |
| v_exposure | demo; residual | Check all historical asset/cell beneficiaries and lifetime versions, actual positive exposure, shares<=1, retirement replacement and final residual closure. Terminal carriers receive one final responsibility fraction; direct net weighing cannot subtract removed parts twice. | `ghg-product-2011` |
| v_completeness | cp_completion | Permit only explicitly labelled partial results until every module in c_modules has disjoint original coverage or evidenced absence and c_merge restores actual denominators, deduplicates and normalizes once. Quantity checks do not establish methodological approval or UUID verification. | `ghg-product-2011` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Explicitly partial incremental radio counter service, or completed declared route-module inventory only after all c_modules/c_merge gates; common network/IT, security and administration remain excluded |
| excluded_use | Radio manufacture/use footprint, whole CPC leaf, delivery/install/repair, scientific approval or full-standard conformity claim |
| required_metadata | Model/EAN/BOM; receiving/end gate; source IDs and supplier coverage; pool/configuration/date/Q version; conditional presence; module completeness; S/F/T/O ledger |
| required_quality_disclosure | Unresolved identities, missing modules, supplier gaps, calibration, uncertainty, late-event replacement and lifetime residuals |
| update_trigger | Any BOM/route/provider/cell-model change, returns/revocations, corrected raw total, lifetime revision or retirement |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| philips-tar1506-2024 | standard | Philips TAR1506/00 Portable Radio, issue 2024-10-14, v5.2.7, pages 1–2; https://www.documents.philips.com/assets/20241014/1f55ad86fb9f4159af28b20900bb715c.pdf | Actual model, box/accessory and power-spec identity; no consumption, BOM or battery-inclusion assumption |
| ghg-product-2011 | official_guidance | GHG Protocol Product Life Cycle Accounting and Reporting Standard (2011), chapters 6–7 and 9; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Selected unit-of-analysis, boundary transparency and allocation principles; executable route/ledger methods here are declared foreground design choices, no full-conformity claim |
| un-cpc3-62142 | official_guidance | UNSD CPC Version 3.0, subclass 62142 explanatory note; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62142 | Classification scope only, not service quantity or full-leaf equivalence |
