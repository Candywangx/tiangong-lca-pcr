---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-hardware-and-hand-tools
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Mixed-assortment store counter retail service for one factory-packed BAHCO 2101G-180 manual side cutter

## 1. Scope and Applicability

This methodology defines a narrow incremental retail service for one evidenced complete original package. The original PCR identity is retained because the official category explicitly includes hand-tool retail, including pliers; it does not imply coverage of all hardware or machine-tools. A complete real plier has several materials and functional parts; keep that real object intact rather than mechanically duplicating constituent flows. All mandatory choices below are PCR design rules informed by the cited sources and actual collection requirements, not a claim that the sources prescribe these exact equations.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-hardware-and-hand-tools |
| classification_refs | CPC 3.0:62165; narrower subset of hand tools in 4292; not machine-tools 442 |
| covered_products | Retail service for one complete new BAHCO 2101G-180 manual side cutter, EAN 7314150106493,180mm, black anti-corrosion finish, ERGO handle, original unopened homogeneous factory retail package; verify actual lot and full packaging configuration. |
| excluded_products | Other models/IP/IPD variants, separate jaws/grips/springs, mixed kits, powered tools, machine-tools, installation, sharpening, repair, demonstrations, customer use, non-store orders and delivery. Opened, used, contaminated, dismantled or incomplete packages require a separately authored state-specific extension before completeness; never discard their existing cohort records. |
| representative_product | One whole 2101G-180 tool and its actual original factory package, not 230 g of generic steel. Catalogue mass and cutting capacities are nominal specifications, not field quantities, material fractions, compliance limits or supplier LCI. |
| production_route | Physical counter purchase and customer collection in a non-specialized mixed-assortment store; retain assortment evidence. Selling multiple brands alone does not establish non-specialized retail. No retailer unpacking or repacking, added carry bag, printed receipt or tool actuation in the core route. |
| market_state | Complete new dry solid manual tool in its unopened original packaging. Steel frame, joint, return-spring function and composite handles remain one real complete tool; catalogue series descriptions require lot/model confirmation, not invented mass percentages. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Counter retail service ending in finally valid customer acceptance of the specified whole original package. |
| How much | One final-valid original package service; Q distinct original package IDs in a prospectively fixed same-configuration source pool. |
| How well | Correct SKU/EAN, whole tool and package configuration, dry unmodified state and customer acceptance evidenced; catalog cutting capacities do not establish safe-use or acceptance test thresholds. |
| How long or cycle | Receiving gate to final counter acceptance and closure of linked returns/fates; late events replace the original pool version with actual event dates. |
| reference_flow_link | retail_service |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Counter retail service for one factory-packed BAHCO 2101G-180 manual side cutter |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | actual lot and factory package BOM/configuration; model and EAN; non-specialized assortment and counter channel; site and geography; pool ID and prospective dates; final acceptance IDs and correction version; receiving-gate S/F/T/O source ownership; Q and zero-output status; support module coverage and provider boundaries; actual packaging and terminal receiver acceptance; flow identity binding status |

All required qualifiers must appear in dataset metadata, process notes, reference comments or equivalent fields. The service flow UUID is unbound; count-property UUID is not its flow identity.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| service_count | retail_service | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | One Item(s) is one final-valid service for one distinct original package under final_service; physical stock and nominal tool mass cannot replace Q. |
| count_sources | failed_original; rejected_external; supplier_handoff | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Complete original package count only; state and whole-source vector are verified; no count-to-kg default. |
| power_unit | store_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 1 kWh = 3.6 MJ; electricity_allocate; retain meter kWh and provider boundary. Energy unit group 93a60a57-a3c8-11da-a746-0800200c9a66; no voltage/mix implied. |
| carrier_mass | failed_pack_waste | Mass | kg | Actual whole mixed carrier net kg at dispatch, not catalogue tool mass; terminal_carriers. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual complete factory packages at receiving gate, with supplier/source IDs, original tool-plus-packaging vectors and inbound transport boundary. |
| starting_condition_role | Service foreground starting gate, not zero upstream responsibility for failed original goods. |
| product_classification_scope | CPC 3.0:62165 narrower manual side-cutter counter service only. |
| recursive_input_rule | Do not recursively charge all received merchandise to retail service. failed_original is an actual characterized Product input for F only. Raw receipts and accepted-sale custody records are QA, not extra background inputs. Only supplier_handoff and rejected_external are explicitly non-characterized physical satellite outputs. |
| upstream_dataset_requirement | Each original homogeneous package source V contains actual complete tool and package manufacture and receiving-gate inbound transport once. If provider omits transport, complete V using measured source-specific transport before applying ownership. No catalog page is a quantified LCI. |
| disclosure | Core incremental service inventory plus mandatory completed support modules. Successful S merchandise background is excluded; a separately declared GOODS system may add S once. Do not label the core alone a complete retail business or a full-standard-conformant LCA. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| route_gate | all inventory rows | Admit only an evidenced mixed-assortment store with sealed homogeneous original packages and the declared counter route. Record invoices, photographs, assortment, package mass/BOM and configuration revision. Actual additional wrapping, printing, cleaning, powered demonstration, delivery, combustion or refrigerant equipment cannot be assumed absent: cp_modules determines coverage and adds mandatory specific cards/protocols under complete_modules. Unknown presence blocks dataset completeness. If a stock package becomes a permanent demonstrator, transfer the SAME original V_s to a named internal asset T, never charge full F plus a new asset manufacture; author the actual opened tool/packaging states and module before completeness. | un-cpc3-62165; bahco-pliers-catalogue; jrc-retail-2013 |
| source_ownership | failed_original; retail_service | For every original package source s fix N_s and the matching whole supplier vector V_s at the same receiving gate. Partition source-equivalent whole IDs into final-valid S_s, service-responsible failed F_s, named continuing transfer T_s and unresolved/open O_s, with N_s=S_s+F_s+T_s+O_s. No arbitrary material mass shares of environmental vectors. This route keeps the complete package intact, so one original ID has one whole final responsibility. N_F=sum_s F_s. Failed unreturned customer-held goods and confirmed missing goods remain F with evidenced responsibility; unknown missing residual remains O and blocks closure. Supplier returns are T only with named continuing responsibility, never an automatic credit. | ghg-product-2011 |
| acceptance_custody | retail_service; failed_pack_waste; rejected_external; supplier_handoff | Keep goods-only stock and held-waste stock separate. G_close=G_open+receipts+physical_customer_returns-ALL_gross_customer_handovers-physical_supplier_handoffs-internal_asset_transfers-condemnations-confirmed_goods_missing+signed_unresolved_goods_residual. ALL handovers already include accepted and never-accepted exits; do not subtract a second unaccepted set. Condemnation moves goods into held waste; W_close=W_open+condemnations-waste_dispatch-confirmed_waste_missing+signed_unresolved_waste_residual. No second goods exit on waste dispatch. Q=count distinct original IDs with final-valid acceptance; revocations without return reclassify the old acceptance, not a new movement or a second subtraction from Q. A monetary refund/discount does not revoke acceptance by itself. | ghg-product-2011 |
| failure_carriers | failed_pack_waste; rejected_external; supplier_handoff | Separate ownership from physical fate: F does not create a waste shipment. Measure actual whole unopened failed package waste dispatch kg including tool, grips, spring/joint and actual packaging; retain signed receiver acceptance of actual constituents/state and matching complete treatment scope. Keep the real carrier intact, with no parallel steel, plastic or packaging constituent waste rows. Physical retained external nonconforming packages and supplier transfers use their own event IDs and are never retailer waste automatically; record recipient, state, quantities and continuing treatment/background responsibility. An opened or contaminated carrier requires a state-specific extension, not this unopened carrier identity. | ghg-product-2011 |
| whole_source | failed_original | The complete original package input uses Number of items, not tool net kg or catalogue 230 g. Bind a supplier vector for the actual tool-plus-package configuration, including all actual handle/steel/coating/joint/spring and packaging constituents. Whole-source mode excludes component inputs for the same vector. If constituents acquire different responsibilities, this route is incomplete until separate actual component product cards and verified supplier component vectors conserve the original vector; mass fractions cannot split an environmental vector. Factory packaging never receives a second full manufacture burden through terminal waste. | bahco-pliers-catalogue; ghg-product-2011 |
| physical_overlap | all inventory rows | Before adding providers compare physical constituents, event IDs, asset IDs, dates, sites and lifecycle stages. Distinct provider IDs do not prove disjoint activity. A complete background containing electricity, transport, repair or treatment excludes the same outside activity. No waste-treatment credit, reuse credit or negative emission is inferred. Satellite outputs rejected_external and supplier_handoff carry no avoided-production credit; their original V stays under source_ownership. | ghg-product-2011 |
| support_coverage | all inventory rows | The core covers failed_original, store_electricity, retail_service and the three actual terminal/transfer carriers only. cp_modules must cover receiving handling, storage/display, shared building, lights/fans/fixed fixtures, checkout/payment, ICT/network, security, administration, cleaning, utilities, reverse/waste/material/asset transport, maintenance and end-of-life. These are mandatory completion modules, not an optional omission list. For each actual module create a signed source/operation/capital coverage matrix, name actual atomic exchange cards and same-process protocols, collect required fields, apply complete_modules and asset_versions; each module must be complete or evidenced absent. No complete-business dataset may be delivered from the uncompleted core. | jrc-retail-2013; ghg-product-2011 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| counter | Counter retail and source responsibility | required | All admitted pools | incremental service and actual source input | per reference flow |
| fates | Actual fate and custody transfers | required | Inspect every pool; each carrier requires actual presence/absence evidence | terminal physical carriers and responsibility | per reference flow |

### Process: Counter retail (`counter`)

#### Inputs

##### Product flows

###### Complete new factory-packed BAHCO 2101G-180 manual side cutter at receiving gate (`failed_original`)

Actual whole original-source Product input for failed goods under source_ownership; retain complete tool and its actual factory package.

n_failed=N_F/Q; failed_background; cp_goods. Match each actual whole source vector; this Product input carries F manufacture and receiving-gate transport once.

- Selected flow: Complete new factory-packed BAHCO 2101G-180 manual side cutter at receiving gate
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: N_F / Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_goods`
- Sources: `bahco-pliers-catalogue`; `ghg-product-2011`

###### Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca` (`store_electricity`)

Metered attributable AC energy crosses the counter service boundary, with disjoint source pools and actual supply binding.

3.6*K_h/Q MJ; electricity_allocate; cp_energy. Product input at point of use, voltage/provider unspecified by identity; bind actual supply geography/technology/voltage and loss boundary independently.

- Selected flow: Electricity, alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: 3.6 * K_h / Q MJ
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources: `ghg-product-2011`; `jrc-retail-2013`

#### Outputs

##### Product flows

###### Counter retail service for one factory-packed BAHCO 2101G-180 manual side cutter (`retail_service`)

The single reference Product output is the final accepted service; keep physical custody in its separate ledger.

1 Item(s); final_service; cp_goods. The reference is the finally accepted retail service, not merchandise production, gross handover or nominal kg of tool.

- Selected flow: Counter retail service for one factory-packed BAHCO 2101G-180 manual side cutter
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_goods`
- Sources: `un-cpc3-62165`; `ghg-product-2011`

### Process: Actual fate and transfer (`fates`)

#### Outputs

##### Product flows

###### Unopened complete nonconforming factory-packed BAHCO 2101G-180 retained by an external recipient (`rejected_external`)

Record actual unopened nonconforming package transfer/retention by an external recipient without implying retailer waste.

N_external_rejected/Q Item(s); terminal_carriers; cp_terminal. Physical non-characterized satellite only; original F/T/O responsibility remains in source_ownership, no waste or avoided-product credit inferred.

- Selected flow: Unopened complete nonconforming factory-packed BAHCO 2101G-180 retained by an external recipient
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: N_external_rejected / Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_terminal`
- Sources: `ghg-product-2011`

###### Unopened complete factory-packed BAHCO 2101G-180 physically handed back to supplier (`supplier_handoff`)

Record actual complete-package supplier handoff independently of source ownership or acceptance status.

N_supplier_handoff/Q Item(s); terminal_carriers; cp_terminal. Satellite custody transfer, not automatic T or avoided manufacture; record actual recipient and continuing source responsibility.

- Selected flow: Unopened complete factory-packed BAHCO 2101G-180 physically handed back to supplier
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: N_supplier_handoff / Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_terminal`
- Sources: `ghg-product-2011`

##### Waste flows

###### Whole unopened failed factory-packed BAHCO 2101G-180 manual side cutter for contracted treatment (`failed_pack_waste`)

Record the measured actual whole failed package sent to a receiver contractually accepting its complete constituents and state.

sum dispatch_net_kg/Q; terminal_carriers; cp_terminal. Actual dry whole mixed carrier with complete tool and actual original package; receiver must accept this exact composition/state and full treatment boundary.

- Selected flow: Whole unopened failed factory-packed BAHCO 2101G-180 manual side cutter for contracted treatment
- Flow property / unit: Mass / kg
- Amount rule: sum dispatch_net_kg / Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_terminal`
- Sources: `ghg-product-2011`; `jrc-retail-2013`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| fixed_pool | all inventory rows | Before observation fix pool ID, same SKU/package configuration, site, source dates and closure rule; include closed, idle, failed and zero-sale periods. Q is not gross stock throughput. Late returns/revocations/fate changes replace all affected original-pool numerator/source/denominator versions using actual dates; later resale of the same original ID never adds another manufacturing vector. Q=0 pools remain raw and explicitly unnormalizable; carry them within the prospectively defined same-configuration pool, never delete or silently allocate them to an unrelated successful period. | ghg-product-2011 |
| source_drivers | store_electricity | Use direct disjoint meters first. Draw the circuit tree; subtract a child only if included in its parent. Separately meter lighting/fan fixed source pools and allocate by reserved lit/fanned display footprint m2*h including idle/closed reservation; checkout active source by logged terminal active seconds; ICT/network active source by measured source-specific byte processing activity; security continuous source by protected footprint m2*h; administrative active source by recorded task seconds. Reconcile each active/idle/fixed kWh subpool to its parent; allocate terminal/network/admin idle AND fixed/closed continuous-source subpools by beneficiary reserved device seconds, never by zero active use or zero sales. Before each observation interval register every actual beneficiary cohort/pool and its device reservation share, including failed, zero-sale and closed-period reservations; retain timestamped reservation versions rather than retrospectively selecting successful sales. reserved_device_seconds_h equals measured available device seconds times the predeclared reservation share_h; shares across all actual beneficiaries sum to1 for each device interval, and reserved seconds reconcile to the full source duration. Unknown beneficiaries, unassigned reservations or missing closed-period coverage block completion. Do not sum incompatible drivers or energy with area/time/bytes. Unknown or zero all-beneficiary driver totals block allocation until measured reservation and beneficiaries reconcile. | ghg-product-2011 |
| source_materials | all inventory rows | Any additional store packaging, receipt paper, cleaning formulation or maintenance material requires actual named atomic cards and cp_modules fields. Fix source manufacture and source inbound transport to first actual use; never-used stock and transfers retain unassigned sources. Already-used reusable stock never repeats manufacture/inbound. Printed intermediate stock retains both original paper and printing-meter source IDs with historical replacement versions. For cleaning track original formulation-origin kg into mutually exclusive used-final, spilled, rinsed-final, carrier-residue-dispatched, retained and unused states; used→rinsed is replacement, not a second destination. Actual entire wet carrier kg is independently weighed, not formulation kg; added water/dirt/cloth/container is not source formulation. | ghg-product-2011 |
| asset_versions | all inventory rows | For every homogeneous actual asset/model/BOM/scope vector V and every historical beneficiary-period h collect exposure e_h in its own fixed unit: building and security protected footprint m2*h; fixed lights lit footprint m2*h; fixed fans fanned footprint m2*h; other fixed fixtures their evidenced served footprint m2*h; shelving reserved shelf-position*h; checkout/ICT/network/admin equipment reserved device*h; each actual hand trolley or manually operated handling-equipment model reserved handling-device*h; reusable cleaning cloth cleaned m2. Assign each actual fixed light/fan/fixture model and its complete vector either to an evidenced complete building package or to its own homogeneous asset module, exclusively. For handling equipment, e_h=sum_t(reserved_handling_device_hours_t*handling_reservation_share_h_t) across active, idle and closed intervals; define all receiving/handling beneficiary pools and timestamped reservation shares before observation, including failed/zero-sale cohorts. Shares sum to1 for every whole-device interval, so idle/closed exposure follows its reserved beneficiaries and never disappears with zero movements. reserved_handling_device_hours_t is the whole-device reserved interval duration before beneficiary attribution, so multiply its reservation share once. Record actual intervals, hours, shares, model/BOM/scope and matching same-unit lifetime L; unknown or unassigned capacity blocks completion. Expected lifetime exposure L has the SAME unit; f_old_h=e_h/L_old and provisional summed fractions must not exceed1. At actual retirement set E=sum_all_h actual e_h and f_new_h=e_h/E for EVERY historical h, sum=1. A life/BOM/background change replaces all historical fractions/vectors by delta_h=f_new_h*V_new-f_old_h*V_old, with signed numerator correction to each original pool. No restart or residual-only shortcut. Retirement carrier follows f_new_h once, not a second manufacture fraction. Whole-device net weighing and BOM reconstruction are exclusive; never subtract removed components twice. | ghg-product-2011 |
| asset_transport | all inventory rows | Independent asset acquisition/repair/retirement transport belongs first to that named asset source and follows the SAME complete historical f_h/version corrections as that source; never charge every retirement trip to current Q. Material first-use transport follows source_materials. Provider-already-attributed asset or period transport keeps its fraction and receives no second fraction. A complete package containing transport/maintenance/EOL excludes duplicate modules. | ghg-product-2011 |
| transport_driver | all inventory rows | For each actual vehicle segment/trip t preserve route, measured distance d_t, stationary/idle duration tau_t, load and all beneficiary reservations. Separate measured movement and idle source numerators. Allocate movement by reserved payload kg*d_t for the evidenced mass-limited vehicle; allocate empty movement by reserved payload capacity kg*d_t of the originating reservations, never zero delivered tonnes. Allocate stationary/idle source by reserved payload capacity kg*tau_t. No mixing kg*km with kg*h. Require positive known same-unit total drivers and whole-trip reconciliation. Provider consignment amounts already allocated retain that amount; segment evidence is QA, not another multiplication. Empty/idle coverage unknown blocks completeness. | ghg-product-2011 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_goods | counter | failed_original; retail_service | source/acceptance/custody ledger | pool_id; prospective_start/end; pool_version; original_id; source_id; actual SKU/EAN; lot; factory_package_BOM/configuration; actual_original_package_count N_s; actual gross/net kg; supplier_vector V_s; inbound_transport_scope; S_s; F_s; T_s; O_s; final_valid_acceptance; closure_date; event_id/date; all_gross_handovers; customer_returns; supplier_handoffs; internal_asset_transfers; condemnation; opening/closing_goods_count; opening/closing_held_waste_count; confirmed_missing; signed_unresolved_residual; recipient/state/responsibility | Scan each actual complete package and lot before sale; establish persistent original IDs, count physical events independently of acceptance, calibrate scales and verify actual package/BOM against invoice and supplier signed inventory. Audit sealed state without assuming tool net mass equals complete-package mass. Obtain actual full supplier vector and separate packaging/inbound boundaries; catalogue is only product specification. Keep raw S/F/T/O and gross stock; final_service Q and failed_background n_failed per reference flow, once. Do not normalize raw audit balances. | Item(s); kg; event date | every receipt/event; daily stock closure | entire prospectively fixed pool plus linked historical corrections | receiving, counter and original supplier boundary | per reference flow | signed supplier BOM/vector; scans; acceptance/revocation evidence; calibrated weights; source ownership conservation |
| cp_energy | counter | store_electricity | meter and all-beneficiary driver ledger | meter_id; parent_includes_child; source_subpool k; active/idle/fixed_mode; start/end kWh; K_k; beneficiary h; reserved_lit/fanned_m2; protected_m2; hours; terminal_active_seconds; network_bytes_processed; administrative_task_seconds; reserved_device_seconds_h; prospective_beneficiary_register; device_reservation_interval; available_device_seconds; reservation_share_h; reservation_version/effective_date; beneficiary_failed/zero_sale/closed_status; d_hk; K_hk; K_h; supply_geography/technology/voltage/loss_scope; calibration; Q | Read calibrated interval meters and instrument each material active/idle/fixed component; circuit tree proves overlaps. Before observation register actual beneficiary pools, device reservation shares and effective versions; log active, idle and fixed/closed intervals, including failed/zero-sale reservations, and reconcile all device seconds under source_drivers. Collect exact fixed dimensions in source_drivers; reconcile source pools to bills and all beneficiaries. Provider-contained electricity is removed by physical source scope. electricity_allocate returns MJ per reference flow; source subpools use a single same-unit driver each, reconcile before summation. | kWh; m2*h; seconds; bytes separately | interval readings and every task/reservation | same entire pool including idle/closed periods | store circuits and all connected beneficiaries | per reference flow | calibration; meter tree; raw logger/bill; component source reconciliation |
| cp_terminal | fates | rejected_external; supplier_handoff; failed_pack_waste | actual terminal/custody consignment ledger | pool_id; pool_version; event_id; original_id; dispatch_date; recipient; actual unopened_state; actual constituents; gross_kg; tare_kg; dispatch_net_kg; scale_calibration; N_external_rejected; N_supplier_handoff; receiver_signed_composition_acceptance; full_treatment_scope; provider_contains_transport; onward_background_responsibility; held_waste_stock; confirmed_missing; signed_unresolved_residual; Q | Count physical transfers by unique event IDs and trace original source IDs; weigh actual whole waste consignment on a calibrated scale, deduct actual tare once. Keep supplier/customer transfers and waste disjoint; obtain signed actual mixed composition/state acceptance plus treatment contract. Forward independent transport records to cp_modules with original asset/material/source responsibility. terminal_carriers yields per reference flow once; stock is independent QA; process views retain the same original record IDs without duplicating measurement. | kg; Item(s) | every actual consignment and fate revision | whole pool and later original-source fate updates | counter/store departure and named receiver | per reference flow | signed weighbridge/net record; actual constituent acceptance; recipient/state; treatment/provider scope |
| cp_modules | counter | all inventory rows | mandatory module and source/asset completion register | module_id; actual_presence/absence_evidence; operation/capital_stage; actual_model/BOM/scope; source_id; original_provider_boundary; actual_exchange_card_id; protocol_id/process_id; property/unit; x_jc; D_j; pool_id/version; source_pool_active/idle/fixed; raw_total; all_beneficiaries; exact_driver/unit; prospective_handling_beneficiary_register; actual_handling_asset_model/BOM/scope; handling_reservation_interval; reserved_handling_device_hours_t; handling_reservation_share_h_t; handling_reservation_version/effective_date; handling_active/idle/closed_status; fixed_light/fan/fixture_model_and_served_footprint; e_h; e_actual_h; L_old; E; f_old_h; f_new_h; V_old; V_new; delta_h; installation/repair/retirement_event; asset_stock; actual_carrier_kg; material_receipt/unused/first_use/reuse/destination; original_formulation_kg; dispatched_container_residue; transport_trip/segment; actual_d_t; idle_tau_t; payload_kg; reserved_capacity_kg; provider_allocation; actual_water_meter; actual_effluent_meter/density; calibration; overlap_constituents/event/time/stage; Q | Inspect the full site and contracts monthly and at change, and retain signed coverage evidence for every support_coverage module. Meter all real operation sources; apply fixed source_drivers units (direct subdivision first), preserving idle/failure periods. Obtain actual asset model/BOM vectors and same-unit exposures/lifetime across ALL past beneficiaries; register receiving/handling equipment reservations before observation and retain actual reserved handling-device hours, shares and active/idle/closed periods under asset_versions; verify fixed light/fan/fixture capital is in exactly one complete building package or its own actual-model module; recover every historical numerator version under asset_versions. For materials collect receipt/unused/used/final state and first-use sources. For reverse/waste/material/asset transport retain measured segment distance, stationary duration, reserved capacity and provider boundary, then transport_driver. Water input from the site inlet meter already excludes reuse: never subtract reuse again. Direct actual effluent is independently measured V_discharge*rho at measured state; no water-only reconstruction masquerades as full liquid mass. No combustion/refrigerant source is admitted under an absent gate; any actual source requires a separate reviewed state/species/path method and cards before completeness. complete_modules restores x_jc*D_j and compatible source numerators, applies asset_replace, and final/Q exactly once. This master register does not replace an actual single-process protocol linked from each added atomic card. | native exchange units; each driver/lifetime unit separate | every event; monthly coverage; every lifetime/provider revision | full source pool plus complete asset and material source history | entire site and contracted utilities/ICT/payment/security/admin, assets and transport | complete_modules restores x_jc*D_j and compatible source numerators, applies asset_replace, and final/Q exactly once. This master register does not replace an actual single-process protocol linked from each added atomic card. | signed complete coverage matrix; raw meter/driver data; calibrated weighing; original denominators/source IDs; full version/asset histories; overlap audit |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| final_service | retail_service | Q=count distinct original_id with final_valid_acceptance at closure; retail_service=1 Item(s). Version the final-valid set; do not subtract revocations after already filtering that set. | original_id; final_valid_acceptance; closure_date; pool_version; cp_goods | Q; retail_service | ghg-product-2011 |
| failed_background | failed_original | n_failed=N_F/Q; B_F=sum_s(F_s*V_s); failed_original carries each actual homogeneous whole-source supplier vector once. If supplier source vectors differ, disaggregate source-specific exchange instances under this one homogeneous package identity; never substitute scalar count for unknown vector composition. S background belongs only to downstream GOODS; T retains named continuing responsibility; O blocks closure. | N_F; Q; F_s; V_s; S_s; T_s; O_s; cp_goods | n_failed; B_F | ghg-product-2011 |
| electricity_allocate | store_electricity | For each disjoint source subpool k and beneficiary h, K_hk=K_k*d_hk/sum_h(d_hk); K_h=sum_k K_hk; store_electricity=3.6*K_h/Q MJ. K_k is metered kWh; d_hk uses the single fixed driver for that source in source_drivers. The conversion1 kWh = 3.6 MJ changes numerator units only. Reconcile sum_h K_hk=K_k. | K_k; d_hk; K_hk; K_h; available_device_seconds; reservation_share_h; reserved_device_seconds_h; Q; cp_energy | store_electricity | ghg-product-2011 |
| terminal_carriers | failed_pack_waste; rejected_external; supplier_handoff | failed_pack_waste=sum actual dispatch consignment net kg/Q; rejected_external=N_external_rejected/Q; supplier_handoff=N_supplier_handoff/Q. The three physical event sets are disjoint at a given event; serially linked events retain the same original source without acquiring another vector. Direct waste dispatch kg is not reduced again by stock change. Goods-only and held-waste balances independently validate it. | dispatch_net_kg; N_external_rejected; N_supplier_handoff; event_id; original_id; Q; cp_goods; cp_terminal | terminal quantities per reference flow | ghg-product-2011 |
| complete_modules | all inventory rows | For each mandatory support module j restore every normalized exchange x_jc to its evidenced raw numerator X_jc=x_jc*D_j using original denominator D_j, pool, source IDs and version. Remove overlaps using physical_overlap, not provider IDs. Split operation active/idle/fixed measured source pools; apply the EXACT source_drivers dimensions, direct subdivision first. Apply asset_versions separately for each actual model/BOM/V and actual event material/transport rules. Raw core X_core_c includes N_F actual failed_original input instances linked to their V_s (which yields B_F once, never an additional B_F exchange) and the AC numerator; completion X_total_c=X_core_c+sum_j disjoint compatible X_jc including all historical deltas. Only add identical exchange/property/unit numerators, never kg to MJ or raw to normalized values. Final x_total_c=X_total_c/Q once; do not add F or AC again. No numerical completion is allowed until actual atomic cards and same-process protocols for every added exchange have been authored in both languages and synced, or true absence evidenced. | x_jc; D_j; X_jc; X_core_c; X_total_c; Q; source_id; pool_id; pool_version; delta_h; cp_modules | x_total_c | ghg-product-2011 |
| asset_replace | all inventory rows | For each actual homogeneous asset vector apply asset_versions: f_old_h=e_h/L_old; at retirement E=sum_all_h e_actual_h and f_new_h=e_actual_h/E. Record delta_h=f_new_h*V_new-f_old_h*V_old to EVERY original historical pool before its own final/Q. Sum_final_f=1. Track manufacture/installation, operation, maintenance and terminal treatment disjointly; independent transport follows asset_transport, with provider allocation not repeated. Acquisitions and retirements validate asset stock, not an additional consumed-item input besides exposure/lifetime. | e_h; e_actual_h; reserved_handling_device_hours_t; handling_reservation_share_h_t; L_old; E; f_old_h; f_new_h; V_old; V_new; delta_h; cp_modules | historical raw asset numerator replacements | ghg-product-2011 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_binding | all inventory rows | Require exact type, complete object/state, property/unit and route binding; identity alone does not supply LCI or actual quantity. Unbound cards remain pending until direct-read evidence and matching supplier/treatment protocol are complete. | official direct-read receipts; supplier/receiver signed specification; protocol records |
| q_temporal | all inventory rows | Keep original source IDs, dates, denominator sets and revision histories. No unobserved period, negative residual, unknown module or zero pool can be silently deleted or clamped to zero. | full signed stock/source reconciliation and corrections |
| q_completeness | all inventory rows | Actual support exchange additions must have bilingual atomic cards, correct process/direction/type, raw fields, exact formula Inputs, one reference_flow basis and full historical deduplication before claiming complete retail-service data. | coverage matrix; actual parsed guidance/protocol/card audit; complete_modules outputs |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_scope_identity | all inventory rows | Verify actual model/EAN, lot, full tool-plus-package BOM, unopened state and non-specialized counter channel. Each unbound flow requires direct official binding with matching type/state/property/unit and supplier/treatment boundary, not a property UUID used as flow. Historical AC identity observation is not a live supplier/background verification. | un-cpc3-62165; bahco-pliers-catalogue |
| v_sources_counts | failed_original; retail_service | Audit original IDs once, Q set and gross custody independently; reconcile S/F/T/O whole-source vectors at receiving gate. Q>0 is required for normalized dataset; zero-output and unresolved/open sources stay explicit. Acceptance revocation without return is included; price-only refunds cannot alter Q. All original failed B_F must be represented by failed_original; no loss is omitted or manufacture repeated at resale. | ghg-product-2011 |
| v_terminal | failed_pack_waste; rejected_external; supplier_handoff | Waste dispatch requires calibrated actual carrier net weighing and signed acceptance of the exact mixed tool-plus-package constituents/state with matching full treatment. Confirm missing separately from signed unresolved residual. External retention and supplier transfer need recipient/state/continuing responsibility and no automatic waste or credit. Never split the same intact waste carrier into component waste again. | ghg-product-2011 |
| v_modules | all inventory rows | Check every mandatory module in support_coverage using cp_modules and complete_modules, including complete fixed lighting/fan/fixture capital, ICT/network/payment/security/admin operation and capital. Named missing modules alone are incomplete. Added actual cards must have correct single process protocols, raw fields, units, exact calculation inputs and complete bilingual semantics before sync. Reconcile all source pools/beneficiaries including closed and failure periods. | ghg-product-2011 |
| v_lifetime | all inventory rows | Audit per-model homogeneous V, source boundaries, same-unit e/L and final e/E, all historical numerator replacements and asset/material transport history. Sum provisional f<=1 and final f=1; final residual1-sum_old_f is QA only. Complete-provider overlap and all previous versions must reconcile. No asset restart or all-current-retirement charging. | ghg-product-2011 |
| v_normalization | all inventory rows | Every final amount has Basis kind reference_flow; raw protocols retain original units and one final/Q. Unknown is never zero. No invented weight, LCI, range, UUID, component percentage, safe-use limit or scientific approval. Candidate methodology requires independent scientific and translation review before promotion. | ghg-product-2011 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | Review-required incremental service plus completed compatible support modules. A GOODS system can add successful S source background once, explicitly separately. |
| allowed_use | Same evidenced homogeneous factory package and mixed-assortment counter route with complete source/asset history and final accepted denominator. |
| excluded_use | Entire62165 coverage, manufacturing of goods, powered tool service, demonstrations, repair, opened or incomplete package routes, complete-business claims from core only, conformity or safety approval. |
| required_metadata | All reference qualifiers; original pool/IDs; provider/source vectors and boundaries; module cards/protocols; Q; full historical replacement versions. |
| required_quality_disclosure | Unbound identities; historical AC observation; supplier lot/BOM/LCI gaps; zero/open pools; incomplete modules; allocation/calibration uncertainty and actual coverage. |
| update_trigger | Any actual configuration, package, route, acceptance/fate, provider boundary, lifetime/BOM, driver or source revision; replace all affected prior versions. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-62165 | official_guidance | UNSD CPC 3.0 explanatory note62165; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62165 ; retrieved2026-10-29 | Hand-tool and machine-tool category boundaries; narrower mapping inference, no inventory factor. |
| bahco-pliers-catalogue | handbook | BAHCO Plier Catalogue, PLIERS-ENG-20; https://media.bahco.com/media/media-download/catalogue/Bahco%20Plier%20Catalogue_UK.pdf ; pp.7-8 and14; retrieved2026-10-29 | Actual2101G-180 model/EAN,180mm, black finish, complete hand tool and ERGO context. Nominal 230 g is not used for field mass; actual lot/BOM/package and LCI require supplier evidence. |
| ghg-product-2011 | standard | WRI/WBCSD Product Life Cycle Accounting and Reporting Standard2011; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf ; ch.6,7,9 | Service unit, attributable boundary, allocation hierarchy and physical drivers inform the explicit PCR design. No full-standard-conformity claim or source mandate for these exact equations. |
| jrc-retail-2013 | official_guidance | European Commission JRC, Best Environmental Management Practice in the Retail Trade Sector2013, EUR25998EN; https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf ; executive summary and lighting/waste sections | Retail energy/lighting, water/chemicals, waste and transport coverage; no benchmark copied as a site inventory/default. |
