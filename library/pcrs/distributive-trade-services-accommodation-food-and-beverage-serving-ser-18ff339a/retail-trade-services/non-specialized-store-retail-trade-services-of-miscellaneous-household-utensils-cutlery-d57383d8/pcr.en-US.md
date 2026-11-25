---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-miscellaneous-household-utensils-cutlery-d57383d8
status: candidate
language: en-US
sync_with: pcr.zh-CN.md
---

# In-store retail services for individual tempered opal-glass dinner plates

## 1. Scope and Applicability

Partial incremental in-store retail service for individual tempered opal-glass dinner plates. Treat each actual diameter, finish, supplier and original BOM as a separate homogeneous configuration; count single plates, never a set, box or kilogram. Appearance does not establish ceramic composition. Retain the evidenced non-conditioned store/building and electric nonthermal road-logistics route, with no combustion, refrigerant equipment or purchased heating/cooling; unknown conditions block use.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-miscellaneous-household-utensils-cutlery-d57383d8 |
| classification_refs | CPC 3.0:62145; narrower |
| covered_products | Partial incremental in-store retail service for individual tempered opal-glass dinner plates. Treat each actual diameter, finish, supplier and original BOM as a separate homogeneous configuration; count single plates, never a set, box or kilogram. Appearance does not establish ceramic composition. Retain the evidenced non-conditioned store/building and electric nonthermal road-logistics route, with no combustion, refrigerant equipment or purchased heating/cooling; unknown conditions block use. |
| excluded_products | Ceramic/glazed, polymer or metal ware; mixed sets; online/delivery/specialized shops; full plate manufacture/use/disposal. |
| representative_product | In-store retail services for individual tempered opal-glass dinner plates; actual supplier, SKU/configuration, lot and complete original BOM verified separately for each homogeneous stratum. |
| production_route | Unheated ambient manual display and staffed checkout; customer collection; partial support boundary |
| market_state | New intact individual plate; actual supplier packaging and attached components documented |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Partial incremental physical-store retail service for one individual individual tempered opal-glass dinner plate |
| How much | One distinct original plate with final-valid acceptance |
| How well | Specified SKU intact without scratches/chips; no implied food-safety certification |
| How long or cycle | Prospective pool interval and final cutoff with lifetime/source late corrections disclosed |
| reference_flow_link | accepted_service |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Partial incremental physical-store retail service for one individual individual tempered opal-glass dinner plate |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | store and non-specialized channel; SKU/lot; complete BOM and actual supplier packaging; receiving gate and supplier contract; pool/cutoff and acceptance versions; Q; failed/open/transferred source ownership; partial support exclusions and completion; actual waste states/providers |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| service_count | accepted_service; supplier_return; external_unaccepted; failed_supply | Number of items | Item(s) | One service is one original plate acceptance; physical transfer events and supply-source equivalents are different count ledgers; never convert package/set counts without actual plate IDs. |
| electricity_energy | electricity | Net calorific value | MJ | Use actual kWh*3.6; no rated power or nominal plate mass as electricity proxy. |
| carrier_mass | intact_plate_waste; plate_fragment_waste; cardboard_waste; pe_film_waste | Mass | kg | Weigh actual complete carrier excluding measured external collection container tare once; no catalogue-package weight or pure-body mass default. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual complete plate and transport packaging at store receiving gate; origin source ownership preserved |
| starting_condition_role | foreground_gate |
| product_classification_scope | CPC 3.0:62145 narrower |
| recursive_input_rule | No retail-service recursion: supplier plate production is a distinct source; reuse original source IDs through returns/resale |
| upstream_dataset_requirement | Exact verified whole-supply or disjoint component-plus-transport source, failed F included and accepted S reserved for completion |
| disclosure | Partial incremental retail only; all omitted necessary supports and accepted production remain explicit |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_product_family | all inventory rows | This PCR applies to the declared product family across manufacturers and brands. Brand, model, catalogue article, SKU and trade name identify actual study data, not an exclusive eligibility condition. The material/function, product state, fixed format where specified, process/channel and gate conditions below still apply. Establish separate homogeneous supplier/configuration/edition/package-BOM strata and their matching original background vectors; do not multiply a mixed-SKU count by one specimen vector. Use actual measured quantities and supported conversions. Manufacturer examples and their masses, dimensions, ratings, formulation or packaging claims are illustrative only, never class-wide defaults or complete BOM/LCI. Any actually different component, support chemical, package or carrier requires its concrete atomic card, matched property/unit, collection and nonoverlapping source boundary before completeness; an actual state or route outside the declared family requires a separately reviewed extension. Unknown applicability, identity or evidence remains unresolved. This candidate generalization does not establish independent scientific or translation approval. |  |
| route | retail | Apply only to a prospectively fixed store/SKU/supplier configuration and pool interval: receiving, unheated ambient display and manual handling, staffed checkout, customer collection and actual waste handover. No store plate washing, food demonstration, repair, retailer-added packaging, paper receipts or delivery is allowed in this route. Establish presence/absence with receiving observation, POS configuration, work instructions and meter map. A changed or unknown route blocks use until named atomic cards, protocols and aligned rules are added; supplier transport packaging remains in scope. Eligibility also requires documented absence of thermal conditioning, combustion, refrigerant equipment and purchased heating/cooling in the store/building service, and evidenced electric nonthermal road logistics. Unknown or present excluded systems make this fixed PCR route inapplicable, not zero. |  |
| partial | retail | Included subtotal: stock/acceptance records, attributable point-of-use display/checkout electricity, failed-original-goods receiving-gate supply responsibility and actual specified waste handovers. It excludes building and fit-out manufacture/installation/end-of-life, shelves, carts, checkout device, lighting and fan capital, cleaning operation/tools, off-site logistics, staff/customer travel and accepted-goods production. These necessary supports are not zero. Dataset must retain PARTIAL status until completion_calc and support_calc are executed for every actual support; never market this subtotal as complete retail or complete plate life cycle. |  |
| acceptance | accepted_service | Assign a persistent original plate ID (supplier lot plus per-piece ledger ID), custody event IDs and acceptance versions. Q is the count of distinct original plate IDs with final-valid agreed acceptance at the disclosed cutoff, once per original plate, after checking intact specified SKU, no scratches/chips and recorded customer handover. Repeated checkout/resale never creates a second service for that original. Revocation removes validity even without physical return; pure refunds/discounts with valid acceptance do not. Retention without acceptance is excluded. Cutoff and late-event policy are prospective foreground choices, never a default manufacturer return period. | ikea-oftast-30258913 |
| custody | retail | Use goods-only stock count, not accepted Q: G_open + N_receipt + N_customer_return = G_close + H_gross + U_supplier + C_condemned + L_missing + T_internal. H_gross includes every physical customer handover including failed/repeated handovers; returned physical items enter N_customer_return. C_condemned is internal goods-to-held-waste conversion and is removed once from goods. Waste dispatch is not another goods subtraction. Link lost items and internal demonstrators to original IDs and terminal owner; a T source transfer is not an invented physical exchange. |  |
| source_ownership | failed_supply | At the same actual receiving gate identify each source s for the complete original plate, including actual glass/additives, surface treatments and attached labels/adhesives, its actual original transport packaging and inbound transport. Obtain supplier full model/BOM and exact service denominator and boundary. For each source-equivalent plate N_s preserve N_s = S_s + F_s + O_s + T_s: finally accepted S; irrecoverably failed or unaccepted externally retained responsibility F; physically/source-owned open inventory O; documented transferred responsibility T. Classify fractions by original identity/history, not arbitrary mass splitting of environmental vectors. Supplier return without documented continuing owner is unresolved, never automatic T or credit. Failed fragments inherit one original source only. |  |
| waste_states | waste | Keep intact condemned plates, fragmented plate material, corrugated-board packaging and polyethylene wrapping as distinct measured carriers. Determine actual receiving packaging composition; PE identity needs supplier/physical evidence, not visual guess. A glass carrier includes measured attached labels/coatings and contamination admitted by its named provider; never substitute pure silica. Unknown materials or a different mixed carrier require an additional concrete card before completeness. Record held waste by carrier: W_open + W_generated + W_received = W_close + W_dispatched + W_other_transfer; net consignment mass is already dispatched mass and is not corrected again by the stock balance. |  |
| external_states | supplier_return; external_unaccepted | supplier_return covers only intact same-SKU plates physically returned to the named supplier; not broken returns. external_unaccepted covers only intact same-SKU plates physically handed to a customer but retained without final-valid acceptance; the ledger records actual recipient, location, condition and ongoing background responsibility. Revocation without return changes Q/source versions but creates no new physical transfer. Broken externally retained goods, donated goods or damaged supplier returns require separate state-specific cards and responsibility before completeness; never turn them automatically into store waste. |  |
| scope_presence | retail | No numerical plate mass, loss rate, density, compliance limit or recycling credit applies by default. Manufacturer package weight is not net plate mass; consumer care is not a store operation. Verify no thermal conditioning, combustion, refrigerant-containing equipment or purchased heating/cooling across the store, building support and logistics route. Map ordinary electricity, actual nonthermal ventilation fans and complete capital. Unknown or present thermal/combustion/refrigerant systems fail eligibility; do not defer a fuel/species choice to later modellers. | ikea-oftast-30258913 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| retail | Stock/display/checkout and source ownership | required | One eligible route and prospectively declared pool | foreground | Q |
| waste | Held-waste actual handover | conditional | Actual carrier exists; verify absence or unknown for each carrier | foreground | Q; raw kg retained independently |

### Process: Retail operations (`retail`)

#### Inputs

##### Product flows

###### Alternating current (`electricity`)

Point-of-use electricity for mapped display/checkout circuits, provider and voltage unspecified by the flow identity. Actual grid/provider background must be selected separately without duplicating support meters.

- Selected flow: Electricity, alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: E_target/Q
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_power`
- Sources:

###### Cradle-to-receiving-gate supply service for one complete tempered opal-glass dinner plate (`failed_supply`)

One exact supplier contract service comprising the original complete plate, attached label/coating, actual original transport packaging and inbound transport, with provider/BOM/reference denominator fixed by cp_supply. F only: not all incoming goods and not a generic material basket. Unverified contract blocks background use.

- Selected flow: Cradle-to-receiving-gate supply service for one complete tempered opal-glass dinner plate
- Flow property / unit: Number of items / Item(s)
- Amount rule: sum_s F_s/Q
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_supply`
- Sources:

#### Outputs

##### Product flows

###### Partial incremental physical-store retail service for one individual individual tempered opal-glass dinner plate (`accepted_service`)

One finally valid retail acceptance service for one original specified intact plate. This service flow is distinct from glass-plate manufacturing; its UUID remains unbound.

- Selected flow: Partial incremental physical-store retail service for one individual individual tempered opal-glass dinner plate
- Flow property / unit: Number of items / Item(s)
- Amount rule: 1 Item(s)
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_goods`
- Sources: `ikea-oftast-30258913`

###### Intact tempered opal-glass dinner plate physically returned to supplier (`supplier_return`)

Actual whole original plate in intact state with original attached components. Named recipient accepts the state; ongoing source responsibility is independent of this physical event count.

- Selected flow: Intact tempered opal-glass dinner plate physically returned to supplier
- Flow property / unit: Number of items / Item(s)
- Amount rule: Actual intact supplier physical handover events/Q
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_goods`
- Sources:

###### Intact tempered opal-glass dinner plate handed over and retained without final-valid acceptance (`external_unaccepted`)

Actual intact plate crossing to the named customer without qualified final service. Later revoked acceptance with no return remains an external state record, not an extra crossing or automatic store waste.

- Selected flow: Intact tempered opal-glass dinner plate handed over and retained without final-valid acceptance
- Flow property / unit: Number of items / Item(s)
- Amount rule: Actual matching physical handover events/Q
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_goods`
- Sources:

### Process: Actual waste handover (`waste`)

#### Outputs

##### Waste flows

###### Intact condemned tempered opal-glass opal glass plate carrier (`intact_plate_waste`)

Whole unfragmented condemned plates, with actual attached label/coating and admitted contamination, separately held and handed to the named waste provider. Never count goods condemnation as this dispatch before physical handover.

- Selected flow: Intact condemned tempered opal-glass opal glass plate carrier
- Flow property / unit: Mass / kg
- Amount rule: Actual net intact carrier dispatch kg/Q
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources:

###### Fragmented tempered opal-glass opal glass plate carrier (`plate_fragment_waste`)

Actual shards/fines of the specified plates including their measured adhered original label/coating and admitted contamination, one real provider-admitted carrier. Distinct from intact plate carrier; no pure silica substitution or second manufacturing source for fragments.

- Selected flow: Fragmented tempered opal-glass opal glass plate carrier
- Flow property / unit: Mass / kg
- Amount rule: Actual whole fragment carrier dispatch net kg/Q
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources:

###### Discarded corrugated-board transport-packaging carrier (`cardboard_waste`)

Actual supplier corrugated-board transport packaging segregated for the named provider; include actual admitted attached tape/labels in weighed carrier. Packaging production is in its original supply source, not a new store material input.

- Selected flow: Discarded corrugated-board transport-packaging carrier
- Flow property / unit: Mass / kg
- Amount rule: Actual net corrugated carrier dispatch kg/Q
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources:

###### Discarded polyethylene transport-wrapping film carrier (`pe_film_waste`)

Only supplier wrapping confirmed as polyethylene, with actual admitted attached contamination, segregated and weighed at provider handover. Other polymer/laminate wrapping cannot be selected by this card. No assumed receipt packaging presence or polymer purity.

- Selected flow: Discarded polyethylene transport-wrapping film carrier
- Flow property / unit: Mass / kg
- Amount rule: Actual net PE carrier dispatch kg/Q
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| pool | retail | Declare one same-configuration pool before observations; include idle, closed, failed and zero-sale intervals. Entirely Q=0 pools retain all raw numerators as unnormalizable and must join the next prospectively declared compatible pool or remain disclosed without per-service values. Do not remove failure intervals or select only successful transactions. Late returns/acceptance/source revisions replace original pool Q, every affected numerator and fate version; carry a correction ledger, never charge the revised amount again to a new cohort. |  |
| electricity_allocation | electricity | Prefer disjoint direct meters. For shared parent meter split actual measured active checkout, display lighting and idle components with nonoverlapping meter/interval IDs; reconcile component MJ to parent MJ. Allocate checkout active component by seconds of actual service including failed attempts; display component by occupied shelf-area*h for all goods; idle component by reserved shelf-area*h for all beneficiaries. Each component uses its own same-unit driver, never seconds plus m2*h. If a driver total is zero/unknown, carry the complete component pool to its declared compatible period or fail attribution; no disappearance. Subtract a submeter only if it lies inside the parent; an independent meter is not subtracted. |  |
| source_allocation | failed_supply | F_s is a source-equivalent original plate count for the exact whole-supply service contract. The service provider must evidence full component source vectors, actual packaging and inbound boundary per original plate before N_s can multiply a background. Elect either the verified whole-supply package or actual component-supply vectors plus inbound transport, exclusively. If separate component source vectors are unavailable do not split the plate environmental vector by glass/label/adhesive mass. Source responsibility transfer retains the same source ID and all historical corrections; an internal display item cannot receive a second manufacturing source. |  |
| support_allocation | retail | For each excluded necessary support retain separate complete raw source pools and exact source IDs; prefer direct subdivision before causal allocation. Use area*h for each separate space/lighting/nonthermal-fan occupancy pool and measured task seconds for each cleaning/checkout activity pool, including all beneficiaries, closed/idle/failure intervals. Loaded electric road activity is actual tonnes_btl*segment_km_tl with documented source/provider attribution. For each uncovered empty segment and stationary-idle interval use the fixed same-segment payload_reserved_kg_btl*actual_reserved_h_btl weights of support_calc to distribute its complete vehicle-km or measured idle MJ numerator. Never add different driver dimensions or loaded/empty/idle activities together. A provider already-attributed consignment is used once; reconstruction is QA only. Every source pool reconciles to its measured parent; zero/unknown weights or unresolved residuals block completion. |  |
| asset_lifetime | retail | Completion capital register includes actual complete building/fit-out, shelf, cart, checkout device, installed lighting/fan and nonthermal fan assemblies, full BOM/installation boundary, lifetime replacement history and final carrier. Assign each asset j/source/version once: a_jbt=e_jbt/L_j, where e and expected total lifetime L have the same unit (e.g. m2*h for building, shelf-area*h for shelf, operating h for device). Reconcile across every beneficiary and period: cumulative a<=1; at retirement replace every historical allocation using actual lifetime exposure and allocate final residual, preserving source numerator conservation. A revised L replaces previous versions rather than restarting manufacture. Separate manufacture/installation, operation, actual maintenance replacements and end-of-life; a verified whole package excludes its included components from separate charges. Final full carrier kg times final responsibility fraction once; do not multiply by manufacture fraction again. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_goods | retail | accepted_service; supplier_return; external_unaccepted | versioned goods and source ledger | pool_id; store_id; SKU; supplier_lot; original_plate_id; complete_BOM; receipt_gate; source_id; supply_contract_id; provider_boundary; source_vector_V_s; N_s; S_s; F_s; O_s; T_s; owner_id; prior_version; event_id; gross_physical_count; state; recipient_id; acceptance_version; final_valid_acceptance; cutoff; gross_handover_event_id; revocation_event_id; G_open; N_receipt; N_customer_return; G_close; H_gross; U_supplier; C_condemned; L_missing; T_internal; Q | Scan receipts and assign durable per-piece IDs; reconcile photos, custody signatures, acceptance/return records and supplier source documents. Do not infer acceptance from payment alone. Aggregation detail: service_calc; source_calc; transfer_calc; custody and source ledgers kept distinct | Item(s); kg component records | each event and cutoff revision | complete pool plus historical source/event links | one non-specialized store, one actual supply configuration | per reference flow | signed events; BOM; owner confirmations; late revision log |
| cp_supply | retail | failed_supply | supply contract and background ledger | source_id; supply_contract_id; complete_BOM; provider_boundary; source_vector_V_s; N_s; S_s; F_s; O_s; T_s; owner_id; prior_version; original_plate_id; Q | Obtain actual complete plate, label/coating, transport-packaging and inbound service contract per original plate; verify exact background numerator/denominator and no duplicate component transport or production. Aggregation detail: source_calc; preserve same source across return/resale/fragmentation | source-equivalent Item(s) | each source/version change | original receipt through final responsibility | actual supplier-to-store receiving gate | per reference flow | supplier model and signed boundary; source conservation |
| cp_power | retail | electricity | meter and beneficiary driver ledger | pool_id; E_kWh; meter_id; parent_boundary; E_direct; E_component_c; component_interval_id; d_target_c; d_bc; driver_unit_c; active_seconds; display_m2_h; idle_reserved_m2_h; calibration; uncertainty; Q | Read actual electricity meters at interval boundaries; map electrical nesting and all users. Measure actual checkout duration and occupied/reserved shelf area-time independently. Retain idle/closed/failed intervals. Aggregation detail: electricity_calc; reconcile components to complete parent; normalize once | kWh; MJ; s; m2*h | each interval and configuration change | entire pool including Q=0 intervals | display and checkout circuits only; support circuits separately mapped | per reference flow | meter calibration; time/area evidence; reconciliation residual |
| cp_waste | waste | intact_plate_waste; plate_fragment_waste; cardboard_waste; pe_film_waste | carrier consignment and held stock ledger | carrier_id; consignment_id; source_plate_ids; state; provider_id; provider_admission; material_evidence; gross_kg_kv; measured_container_tare_kg_kv; attribution_kv; held_open_kg; generated_kg; received_kg; held_close_kg; other_transfer_kg; measurement_mode; scale_id; calibration; uncertainty; Q | Weigh actual whole carrier net at dispatch with separate measured container tare. Record intact vs fragments and actual adhered components/contaminants, packaging material, provider acceptance and source IDs. Keep generated/held waste movements separate from goods count and dispatch. Aggregation detail: waste_calc; stock equation is independent QA; direct weight and reconstruction exclusive | kg | each generation/transfer/consignment and pool close | full pool plus opening/closing held stock | named actual store waste holding and provider handover | per reference flow | scale/tare tickets; photos; signed treatment boundary; carrier ledger |
| cp_support | retail | support_completion | completion module and persistent asset ledger | module_id; source_id; source_boundary; all_beneficiary_driver; driver_unit; e_jbt; L_j; historical_versions; actual_replacement_event_id; final_carrier_kg; formulation_kg; formulation_destination_kg; source_parent_id; formulation_previous_state; imported_water_m3; effluent_mode; free_liquid_direct_net_kg; discharge_m3; effluent_density_kg_m3; density_temperature; outside_transport_container_tare_kg; whole_wet_wipe_kg; intrinsic_container_residue_carrier_kg; tool_id; tool_exposure; tool_total_lifetime; actual_component_BOM; complete_module_unit; custody_event_id; recipient_state; no_thermal_equipment_evidence; no_combustion_evidence; no_refrigerant_evidence; no_purchased_heat_cooling_evidence; electric_vehicle_evidence; transport_trip_id; transport_segment_id; transport_beneficiary_id; actual_loaded_tonnes_btl; actual_segment_km_tl; empty_vehicle_km_tl; idle_electricity_MJ_tl; payload_reserved_kg_btl; actual_reserved_h_btl; actual_payload_capacity_kg; unreserved_capacity_kg; provider_inclusions; Q; exchange_identity_r; property_r; unit_r; q_m; x_m; X_included_r; X_target_mr; accepted_source_S_r; attribution_version; source_overlap_map; completeness_status | Read actual complete cleaning/capital/electric-logistics contracts and direct measurements under support_calc. Verify site/building/logistics absence of thermal conditioning, combustion, refrigerant equipment and purchased heating/cooling. Collect actual carrier, formulation-parent, same-segment capacity-reservation and lifetime records at each event; no generic reconstruction. Retain all beneficiaries, historical versions and unknown coverage as incomplete. | each actual exchange unit; same-unit e/L and driver per pool | each interval, event, replacement, lifetime revision and final retirement | all historical versions and entire future lifetime responsibility | actual store and external module providers with boundary mapping | per reference flow | verified contracts; calibration; historical correction register; module overlap audit |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| service_calc | accepted_service | Q = count(distinct original_plate_id with final_valid_acceptance=true at cutoff); service amount = Q/Q = 1 when Q>0. Gross custody and revocation counts are diagnostic, not subtracted again from the final-valid ID count. | original_plate_id; acceptance_version; final_valid_acceptance; cutoff; gross_handover_event_id; revocation_event_id | Q and one-service output |  |
| electricity_calc | electricity | E_MJ = 3.6*E_kWh; E_target = E_direct + sum_c(E_component_c*d_target_c/sum_b(d_bc)); normalized = E_target/Q. Component meters and direct meters are disjoint. Raw-to-attributed-to-normalized occurs once. | E_kWh; meter_id; parent_boundary; E_direct; E_component_c; component_interval_id; d_target_c; d_bc; driver_unit_c; Q | MJ per service |  |
| source_calc | failed_supply | For each verified supply source s: N_s = S_s+F_s+O_s+T_s; failed_supply = sum_s F_s/Q only within the single identical service specification. Retain separate source-resolved exchanges for different supplier packages. Actual background vector F_s*V_s/Q is coupled once at the receiving gate. Completion adds S_s*V_s/Q once; O remains carried; T follows documented recipient with no avoided-production credit. One original source follows resales, breakage and returns. | source_id; supply_contract_id; complete_BOM; provider_boundary; source_vector_V_s; N_s; S_s; F_s; O_s; T_s; owner_id; prior_version; Q | source-equivalent Item(s) per service and background-coupling ledger |  |
| transfer_calc | supplier_return; external_unaccepted | For each card separately, use count of actual unique physical event_id with matching original_plate_id/state/recipient, then divide by Q. A returned-and-resent plate has multiple real custody events but at most one final-valid accepted service. Later revocation with no movement adds no transfer. | event_id; original_plate_id; gross_physical_count; state; recipient_id; Q | Item(s) per service for each distinct transfer card |  |
| waste_calc | intact_plate_waste; plate_fragment_waste; cardboard_waste; pe_film_waste | For each actual carrier k and consignment v, M_kv = gross_kg_kv - measured_container_tare_kg_kv; M_target_k = sum_v M_kv*attribution_kv; amount=M_target_k/Q. Direct dispatch weighing and original component reconstruction are exclusive. A direct net carrier is not reduced again for attached components or held-stock movement. Weigh whole fragments, contaminants and adhered label within the actual provider-admitted carrier. Keep intact vs fragment carriers disjoint. | carrier_id; consignment_id; gross_kg_kv; measured_container_tare_kg_kv; attribution_kv; source_plate_ids; held_open_kg; generated_kg; received_kg; held_close_kg; other_transfer_kg; measurement_mode; Q | kg per service per carrier |  |
| support_calc | retail | Complete supports only under the fixed no-thermal-conditioning route: verify no combustion, refrigerant-containing equipment or purchased heating/cooling in the store, its building service and any included logistics service. Do not estimate refrigerant emissions from a circuit-loss balance. Unknown/present thermal systems make this PCR inapplicable; another reviewed method is required. Nonthermal ventilation fans remain measured electricity and complete capital, with all historical versions. Cleaning: measure every actual full formulation kg and imported water separately. Used formulation is an intermediate state; later rinsed/retained events replace it under the same source parent, never add another destination. Reconcile formulation-origin kg once among mutually exclusive final unused/returned, free-liquid, wet-wipe and intrinsic-container-residue destinations; added rinse water/dirt are not formulation origin. Keep three actual physical carrier ledgers disjoint: free cleaning effluent, whole wet wipe, whole intrinsic cleaning container plus retained residue. For free liquid choose exactly one direct method per consignment: calibrated whole net liquid kg excluding measured external reusable collection vessel tare, OR actual discharge volume m3 times measured representative whole-effluent density kg/m3 at recorded conditions. No mass-balance reconstruction, water-supply inference or duplicate V*rho is allowed. Whole wet-wipe carrier is directly weighed including wipe and adhered water/cleaner/dirt; whole intrinsic container-residue carrier includes the complete actual container/closure/label and remaining liquid. Exclude only measured outside transport-bin tare, never subtract the intrinsic wipe/container again. Formulation-origin accounting is QA of destinations, never a second physical export or another fraction on the whole carrier. Define each actual cleaning tool/wipe full BOM, acquisition source, own same-unit tool_exposure/tool_total_lifetime and complete lifetime replacement history; whole lifecycle service and separate constituent sources are exclusive. Capital includes the actual complete building/fit-out, shelves, carts, POS, lighting/fans and cleaning tools with no thermal equipment. Assign a=e_jbt/L_j to the one verified manufacturing/installation source, replace every historical beneficiary allocation on lifetime revision, use actual maintenance/replacement event vectors separately, and apply final lifetime responsibility once to the actual complete terminal carrier. Never split a source vector by component mass without independent component inventory vectors. Transport is restricted to an evidenced electric road-vehicle service with no combustion or refrigerant/thermal cargo system. For each actual loaded trip t/segment l/beneficiary b, A_btl=actual loaded tonnes_btl*actual segment_km_tl. Verify provider coverage of the actual loaded, empty return and stationary idle activities. If the provider has already attributed the consignment including those activities, use its supplied amount once; reconstruction is QA only. Otherwise use disjoint actual electric vehicle-km activities for uncovered empty movement and measured MJ for uncovered stationary idle. For each empty segment allocate its actual vehicle_km_tl by w_btl/sum_b w_btl, where w_btl=payload_reserved_kg_btl*actual_reserved_h_btl over that same segment. For each stationary-idle interval use the same ratio with actual positive idle reserved hours; allocate the measured idle MJ, not zero t*km. Record the actual payload kg capacity, all reservations/beneficiaries and unreserved capacity; allocate all source numerators without a zero-driver discard, carry an unresolved residual/zero driver as incomplete. Do not sum payload kg with hours or use catalogue capacity/mass as measured activity. Loaded, empty and idle provider boundaries must be disjoint; unknown coverage blocks completion. | module_id; source_id; source_boundary; all_beneficiary_driver; driver_unit; e_jbt; L_j; historical_versions; actual_replacement_event_id; final_carrier_kg; formulation_kg; formulation_destination_kg; source_parent_id; formulation_previous_state; imported_water_m3; effluent_mode; free_liquid_direct_net_kg; discharge_m3; effluent_density_kg_m3; density_temperature; outside_transport_container_tare_kg; whole_wet_wipe_kg; intrinsic_container_residue_carrier_kg; tool_id; tool_exposure; tool_total_lifetime; actual_component_BOM; complete_module_unit; custody_event_id; recipient_state; no_thermal_equipment_evidence; no_combustion_evidence; no_refrigerant_evidence; no_purchased_heat_cooling_evidence; electric_vehicle_evidence; transport_trip_id; transport_segment_id; transport_beneficiary_id; actual_loaded_tonnes_btl; actual_segment_km_tl; empty_vehicle_km_tl; idle_electricity_MJ_tl; payload_reserved_kg_btl; actual_reserved_h_btl; actual_payload_capacity_kg; unreserved_capacity_kg; provider_inclusions; Q | raw support numerators by exchange and source with partial status |  |
| completion_calc | retail | For every omitted module retain actual unit/BOM/provider/reference denominator q_m, normalization version, source_id and its all-beneficiary raw numerator. Reverse a normalized external exchange x_m back to its documented raw numerator X_m=x_m*q_m before compatible target attribution. For each identical exchange identity/property/unit r add only nonoverlapping target raw numerators: X_complete_r = X_included_r + sum_m X_target_mr + accepted_source_S_r. Deduplicate exact source IDs, utilities, transport, capital, packaging and treatment at boundaries; replace prior versions, never add them. Normalize once X_complete_r/Q. Never add kg to MJ or Item(s), different carrier/species or raw to normalized values. Staff/customer travel must be explicitly included with actual routes and all modes, or retain a named partial exclusion. Full-business claim requires all actual necessary modules with state-specific atomic cards, bilingual protocols and verified boundaries, not this subtotal alone. | module_id; source_id; exchange_identity_r; property_r; unit_r; q_m; x_m; X_included_r; X_target_mr; accepted_source_S_r; attribution_version; source_overlap_map; completeness_status; Q | completed compatible exchange values or explicitly partial subtotal |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_quality | retail | Record actual manufacturer/SKU/lot and supplied complete plate/label/coating/packaging BOM; supplier evidence must distinguish tempered opal glass from ceramics. No inferred pure silica or unspecified set. OEM page supports identity/care only, not site quantities, complete manufacturing inventory or packaging tare. | Receiving photos; supplier specifications; actual configuration comparison |
| measure_quality | retail; waste | Retain calibrated meter/scale IDs, uncertainty, resolution, timestamps and tare records; verify whole period and stock closure. Unknown is not zero; investigate signed discrepancies. Every flow has raw totals, attributed numerator and one Q normalization. | Calibration records; consignment receipts; meter map; reconciliation |
| closure_quality | retail | Audit all original IDs and source N=S+F+O+T versions through late events, zero-output periods and physical goods/waste separation. Terminal supplier/customer/waste recipients must accept the actual state. Reject double background, double dispatch or duplicate acceptance. | Versioned cohort ledger; signed recipient records; independent event checks |
| completion_quality | retail | All missing modules retain explicit PARTIAL status and their concrete evidence gaps. For each unbound card obtain official original flow response and integrity receipt, public state, bilingual name, type/state/medium, property-unit chain and matching background/treatment boundary before binding. Absent identity is candidate-only and not usable as a complete secondary dataset. | Official originals; module contracts; overlap map; independent method and bilingual review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| scope_check | retail | Reject applicability outside this SKU/individual-piece/material/non-conditioned store/electric nonthermal logistics route. Present or unknown thermal conditioning, combustion, refrigerant systems or purchased heating/cooling makes this fixed route ineligible, not a deferred optional fuel/species choice. Other unknown packaging, washing, receipt printing or added bag is a blocking scope gap; a separately reviewed supported extension is required before applying any changed route. |  |
| quantity_check | retail | Require Q>0 for normalization and exact final-valid original ID audit; separately reconcile gross goods custody, held-waste and source ownership. Confirm acceptance revocation without return removes service but invents no physical event. |  |
| source_check | failed_supply | Require complete source contract and N=S+F+O+T closure at one receiving gate; no source vector mass split without independent component vectors. Keep accepted S upstream responsibility for completion and O/T continuation. |  |
| allocation_check | electricity; waste | Reconcile same-unit all-beneficiary pools, direct/shared disjointness, meter nesting, consignment tare and single normalization. A zero/unknown driver or unassigned residual blocks complete attribution. |  |
| completion_check | retail | Do not claim full retail until all actual modules and accepted-source S are restored by completion_calc with source deduplication, asset full lifetime revisions, disjoint actual maintenance and terminal carriers, empty/idle transport and evidence of the fixed no-thermal/no-combustion/no-refrigerant route. Unbound identity, unknown quantity/provider coverage or omitted travel remains explicit partial/inconclusive. No default standard compliance follows from this PCR. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Partial incremental foreground retail service |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Candidate method development; completed site-specific model only after all identity and support gates |
| excluded_use | Complete-business or full-plate-life-cycle comparison from the subtotal; unsupported compliance or environmental ranking |
| required_metadata | All reference qualifiers; actual source/module versions; raw pool/Q; PARTIAL and omitted-module list; physical and ownership ledgers |
| required_quality_disclosure | Unbound identities; unknown quantities; calibration/uncertainty; late events; all support gaps; no conformity assertion |
| update_trigger | SKU/material/BOM/source/route/meter/provider changes, returns, acceptance revocation, asset lifetime revision or completion scope change |

## 11. Data Sources

The retained manufacturer and retailer sources document examples of this product family and the explicitly cited technical distinctions. They do not restrict eligibility to those brands/models or supply default numerical inventory for other configurations. Actual product and supplier evidence remains required under b_product_family.

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc-62145 | official_guidance | UNSD CPC Version 3.0 subclass62145 explanatory note; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62145 | Classification context: household plastic/glass/ceramic/metal goods; no full-leaf coverage claim |
| ikea-oftast-30258913 | standard | IKEA OFTAST plate white25cm article30258913 manufacturer specification; https://www.ikea.com/se/en/p/oftast-plate-white-30258913/ | Specific single-plate material/size identity and damage/care distinction; not measured foreground masses, amounts, BOM completeness or life-cycle factors |
