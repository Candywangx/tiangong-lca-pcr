---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-articles-for-lighting
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Walk-in retail service for a complete white TERTIAL703.554.55 E27 work lamp without bulb

## 1. Scope and Applicability

This candidate method covers one homogeneous SKU: a new complete IKEA TERTIAL white work lamp703.554.55, supplied in its original intact retail pack without a light bulb, through a naturally ventilated ambient non-specialized walk-in store with no mechanical HVAC, refrigerant circuit or on-site combustion, subject to complete site absence evidence. Receipt, stock custody, visual package checks, an independently owned demonstration bench, checkout handover and return reconciliation are included. The service reference is successful retail provision, not lamp manufacture, illumination or lumen-hours. Manufacturer specifications establish a real object, not a measured shop inventory. The declared partial incremental module below must be completed by boundary rule b_completion before a whole retail-service result is claimed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-articles-for-lighting |
| classification_refs | CPC3.0 62143; narrower semantic subset of trade services for goods of group465; classification title remains in the manifest. No accepted mapping is established here. |
| covered_products | Complete white TERTIAL703.554.55 luminaire including actual arm, shade, clamp, springs, socket, switch, cable and plug; no bulb. Intact sealed original packs only qualify for final service acceptance. |
| excluded_products | Other colours, SKUs, loose lamps/bulbs, detached replacement parts, refurbished/open-box sales, installation, home delivery and consumer operation. Old-product takeback is a separate service requiring the completion extension, never retailer lamp-stock waste by default. |
| representative_product | IKEA TERTIAL703.554.55 white E27 work lamp; manufacturer lists max13W bulb,17cm shade and1.5m cord. Package weight is not net lamp mass. |
| production_route | Ambient receiving and shelving; visual sealed-pack check; separate bench TERTIAL lamp with SOLHETTA805.914.47 clear E27 LED470lm2700K2.2W demonstrator; walk-in payment and handover; final return-status reconciliation. This clear bulb is not the page recommended opal bulb. Actual socket/rating compatibility must be verified. |
| market_state | New complete original SKU with documented original receiving configuration and packaging BOM; ambient dry storage. Stock later opened/damaged is tracked as a failure/return state and cannot silently become sealed accepted service. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Make the specified complete lamp available and hand it over through the stated walk-in retail route. |
| How much | One final-valid accepted service for one distinct original lamp ID; Q is the count of distinct final-valid IDs in the prospectively defined pool. |
| How well | Correct SKU; intact sealed pack; complete contents verified by supplier pack list; documented customer acceptance; no unresolved acceptance revocation. Payment alone is insufficient. |
| How long or cycle | From recorded store receipt to final acceptance cutoff declared before observation, including all later known return corrections to the original pool. No consumer lamp or bulb lifetime is the service duration. |
| reference_flow_link | retail_service |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Retail service for one complete white TERTIAL703.554.55 lamp without bulb |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | store and country; SKU703.554.55 white and supplier revision; complete lamp and original packaging BOM; original item IDs and receiving-gate background IDs; ambient walk-in route; pool horizon and acceptance cutoff; final-valid Q and correction version; bench lamp and clear bulb805.914.47 identity and compatibility; meter containment and all-beneficiary allocation; partial boundary and completion module versions; failed retained goods recipient and background responsibility; provider and terminal-treatment boundaries |

All required qualifiers must be present in dataset metadata or equivalent data fields. Missing qualifiers block completeness.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| m_count | retail_service | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | One count is one retail service; Q is not lamp mass, packs of bulbs, invoices or transactions. All non-reference numerators are attributed raw pool totals divided by Q once. |
| m_energy | bench_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Read actual plug-meter kWh for bench lamp, actual tests and standby; multiply by3.6 once. Nameplate watts and advertised25000h are not measured energy or asset lifetime. |
| m_carrier | stock_lamp_waste; demo_lamp_waste; demo_bulb_waste; carton_waste | Mass | kg | Use actual consignment net carrier mass with calibrated scale tare; dry carton kg includes integral adhesive, whole e-waste lamp excludes separately removed bulb. Direct net weighing and BOM reconstruction are exclusive modes. No package gross weight or material-table estimate substitutes for net carrier measurement. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual complete original pack at store receipt, supplier revision/BOM and original background retained. |
| starting_condition_role | Explicit incremental retail-service gate, not goods manufacture. |
| product_classification_scope | Narrower subset of CPC3.0 62143 lighting-article trade services. |
| recursive_input_rule | Do not recursively invoke this retail service as merchandise manufacture; identify any upstream service and remove duplicate receiving-gate operations. |
| upstream_dataset_requirement | Actual full-pack source backgrounds for F here and S downstream, disjoint demo whole-device/bulb providers and all completion modules. |
| disclosure | Partial boundary, unresolved identity/provider/range fields, true/false/unknown applicability and completion versions. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_gates | all inventory rows | Fix the receiving gate at store unloading acceptance: original complete lamp plus actual original packaging and pre-gate inbound transport. The incremental module covers bench operation/assets, failed-goods receiving-gate background and actual dispatched residuals. Successful merchandise manufacture/packaging/inbound transport remain in downstream goods background B_s; consumer use and consumer disposal remain outside retail. Include no bulb in merchandise background. | ikea-tertial-70355455; ghg-product-standard-2011 |
| b_background | failed_background | For each original item source j, partition its receiving-gate background exactly once into S final-valid successful customer responsibility, F irrevocable failure assigned to this retail pool, O still-open responsibility and T named transferred responsibility. B_j=B_sj+B_fj+B_oj+B_tj in original receiving-item equivalents. Resale retains the same original source ID. Demonstration conversion binds T to the same original receiving background in the asset ledger and charges that demo supply background once; it cannot also enter F or create another whole lamp. Charge only B_f/Q here; downstream product aggregation adds B_s/Q once. Supplier return and external retention do not erase background: signed continuing responsibility or F is required. No new physical exchange is created by responsibility transfer. | ghg-product-standard-2011 |
| b_state | retail_service; supplier_sealed; supplier_opened; retained_sealed; retained_opened; stock_lamp_waste | Keep gross physical receipts, handovers, returns, supplier dispatch, external retained failures, local waste dispatch, internal stock transfers, demonstration conversions and opening/closing stock as separate dated events. Final acceptance revocation removes the service even without physical return; financial-only refund with valid acceptance leaves it. External retention without qualified acceptance is not output service or local waste. Sealed complete and opened nonfunctional complete return states have separate cards; missing parts/fragments or different states need a named state-specific atomic extension before completeness. | ikea-tertial-70355455; ghg-product-standard-2011 |
| b_assets | demo_lamp_input; demo_bulb_input; demo_lamp_waste; demo_bulb_waste | Demo lamp includes its actual clamp, cable, plug, socket and switch; the removable bulb is separate. Lamp and bulb input providers cover manufacture, full actual original acquisition packaging and delivery to store only, excluding operation, maintenance and end-of-life. A measured terminal lamp without bulb and a removed whole bulb are disjoint carriers. Repairs are event-based named component inputs and removed-component carriers; never a second whole-lamp manufacturing burden. Never infer complete BOM from the manufacturer steel/ABS/glass list. | ikea-tertial-70355455; ikea-solhetta-80591447 |
| b_conditions | all inventory rows | For each process/card record true, false or unknown with dated inspection, meter, invoice, dispatch or signed operator evidence. False requires evidence of absence over the full pool; unknown blocks completeness and is never zero. The bench is required for this route; no bench or different demo model changes applicability. Actual cleaning, repairs, additional packaging, printed receipts, bags or old-product takeback invoke b_completion plus named atomic bilingual cards before a complete dataset. | jrc-retail-bemp-2013 |
| b_completion | all inventory rows |This is a partial incremental foreground module. The admitted site is a naturally ventilated ambient store with no on-site combustion, refrigeration/refrigerant circuit or mechanical HVAC; signed site equipment/utility records and full-period inspection must prove these absences. Unknown or observed presence excludes this route and blocks completeness, never becomes zero. Mandatory external modules are building, shelf, bench support, checkout terminal/receipt printer manufacture-installation-maintenance-retirement; general electric lighting/checkout/network/receipt paper/bags; actual cleaning; manual internal handling, contracted return dispatch and terminal treatment; original lamp inserts/wrapping outside carton_waste and demo bulb packaging disposal. Acquisition providers already contain original packaging manufacture. For stationary assets use persistent exposure e/L across every beneficiary with all a_lifetime revisions; building/shelf/general lighting use actual reserved area-hours including closed periods; checkout assets use reserved operating plus actual stationary idle hours, checkout operation actual transaction minutes. Main-meter residual kWh equals measured main minus only actually contained bench circuits; independent meters are not subtracted. All residual energy remains kWh until row-specific conversion, and no unknown driver or zero all-beneficiary driver total passes. Cleaning admits actual homogeneous mild aqueous detergent with supplier full formulation and packaging BOM, metered imported dilution water and actual single-use cellulose wipe; each exact formulation/package/wipe must acquire its own named atomic bilingual card before completion. Water meters already exclude internal reuse. Cleaner original-formulation-source kg is measured by the original container net stock balance and assigned to disjoint final destinations: unused retained stock, terminal-container-retained formulation, effluent, wipe, spill, and still-open used stock, excluding added water/dirt. Used is an intermediate status, not an additional final sink: later destination evidence replaces that status and reclassifies the same original source kg without a new input or duplicate responsibility. Unused retained stock excludes a container already dispatched to treatment; never multiply whole effluent by source composition again. Whole cleaning effluent uses either direct calibrated carrier net kg OR actual metered discharge volume times measured whole-effluent density at recorded temperature; modes are exclusive, and reconstruction is prohibited. Used whole wipe carrier net kg includes retained liquid/dirt and is disjoint from the measured effluent; its original dry input and final carrier are distinct quantities. The original detergent-container terminal carrier is the actual complete container, closure, label and retained original formulation, measured together as net carrier kg, not an assumed empty container or pure body-polymer kg. Its retained formulation-source kg is disjoint from effluent/wipe/spill/unused-stock source kg and is not a second physical formulation output. Packaging manufacture is already in detergent supply. Terminal treatment providers start at each accepted named carrier gate, exclude duplicate cleaning/supply and disclose included pickup/transport. Contracted return transport uses an actual complete vehicle-trip provider package covering actual fuel (including actual idling), driver, vehicle manufacture/maintenance/retirement, loaded and empty legs once; retain trip loaded_km, empty_vehicle_km, moving_h, stationary_idle_h, fuel_L, density and lower heating value evidence, cargo IDs and all beneficiaries. For each fixed trip r and its segments s, calculate d_pr=sum_segments_s(reserved_volume_p,r,s*(moving_h_r,s+idle_h_r,s)) for beneficiary p, with reserved volume in m3 and moving/actual stationary idle duration in h. Set f_pr=d_pr/sum_b d_br, summing only over all actual beneficiaries b of that same trip r, never across trips. Include evidenced reservations for actual empty segments and stationary idle segments. Apply f_pr once only to a trip-package numerator not already allocated to p; a provider-attributed amount retains its recorded allocation and is not multiplied again. No t*km=0 erases an empty trip. Unknown package fuel/idle/empty coverage or nonpositive total driver blocks completion; no overlapping fuel, truck or treatment trip may be added. Internal handling is manual only, supported by a full-period absence record for powered equipment; other equipment changes route. Every module returns atomic exchange/property/unit/source-event numerators, original denominator and version. Restore normalized rows by their actual original denominator, allocate once, reject duplicate source-event scope/version keys, add only compatible identical exchange/property/unit numerators and divide common corrected Q once. Demo-origin packaging disposal follows the same source asset lifetime fraction and all prior-version replacements as its manufacture; ordinary stock packaging disposal uses its actual stock-source responsibility. All actual extra rows, full BOM/provider boundaries and raw quantity evidence are mandatory before completeness.| jrc-retail-bemp-2013; ghg-product-standard-2011 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| sale | Custody and accepted retail handover | required | Specified sealed-pack route; all stock and acceptance events retained. | foreground retail service | per reference flow |
| bench | Demonstration bench | required | Separate owned TERTIAL lamp and clear SOLHETTA805.914.47 bulb; includes actual tests and standby. | foreground retail service | per reference flow |
| failure | Failed merchandise and residual dispatch | conditional | True if irrevocable failures, supplier/external transfers or discarded original cartons occur; false needs complete custody and dispatch evidence; unknown blocks completeness. | foreground retail service | per reference flow |
| retirement | Demonstration asset retirement | conditional | True upon actual asset retirement; false requires asset-stock ledger; unknown blocks completeness. | foreground retail service | per reference flow |

### Process: Custody and accepted retail handover (`sale`)

#### Inputs

##### Product flows

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Retail service for one complete white TERTIAL703.554.55 lamp without bulb (`retail_service`)

Only final-valid sealed-pack acceptance qualifies; physical goods handover is a different ledger.

- Selected flow: Retail service for one complete white TERTIAL703.554.55 lamp without bulb
- Flow property / unit: Number of items / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_sale`
- Sources: `ikea-tertial-70355455`; `ghg-product-standard-2011`

##### Waste flows

##### Elementary flows

### Process: Demonstration bench (`bench`)

#### Inputs

##### Product flows

###### Alternating current (`bench_electricity`)

Actual point-of-use AC supply to demo/test bench including standby. Provider, voltage and supply mix require independent recorded selection.

- Selected flow: Electricity, alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: E_bench/Q; cp_bench.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_bench`
- Sources: `ikea-tertial-70355455`; `ikea-solhetta-80591447`; `jrc-retail-bemp-2013`

###### Complete white TERTIAL703.554.55 E27 work lamp without bulb (`demo_lamp_input`)

Lifetime-attributed acquisition of the actual demonstrator, including full actual lamp and integral components; excludes bulb, bench support and downstream operation/maintenance/treatment.

- Selected flow: Complete white TERTIAL703.554.55 E27 work lamp without bulb
- Flow property / unit: Number of items / Item(s)
- Amount rule: Sum_a f_ap/Q for actual lamp assets; cp_assets. Acquisition stock is evidence, not an extra consumed-unit row.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `ikea-tertial-70355455`; `ghg-product-standard-2011`

###### Complete SOLHETTA805.914.47 clear E27 LED bulb470lm2700K (`demo_bulb_input`)

Whole actual demo bulb includes driver, base, envelope and actual full BOM, not glass alone. It is not sold merchandise or another bulb model.

- Selected flow: Complete SOLHETTA805.914.47 clear E27 LED bulb470lm2700K
- Flow property / unit: Number of items / Item(s)
- Amount rule: Sum_a f_ap/Q for actual bulb assets; cp_assets. No rated-hour replacement default.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `ikea-solhetta-80591447`; `ghg-product-standard-2011`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Failed merchandise and residual dispatch (`failure`)

#### Inputs

##### Product flows

###### Complete original TERTIAL703.554.55 retail pack without bulb at store receiving gate (`failed_background`)

Attribution of original received merchandise background irrevocably consumed by this retail service. Whole package provider must cover actual lamp, complete original packaging and inbound delivery; never charge one part background as another whole pack. This responsibility row is not a second physical purchase.

- Selected flow: Complete original TERTIAL703.554.55 retail pack without bulb at store receiving gate
- Flow property / unit: Number of items / Item(s)
- Amount rule: Sum_j B_fj/Q original receiving-item equivalents; cp_failure. Unresolved provider/BOM blocks complete results.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_failure`
- Sources: `ikea-tertial-70355455`; `ghg-product-standard-2011`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Supplier handoff of sealed original TERTIAL703.554.55 retail pack without bulb (`supplier_sealed`)

Actual sealed complete original pack physically handed to supplier; no waste or service acceptance is implied.

- Selected flow: Supplier handoff of sealed original TERTIAL703.554.55 retail pack without bulb
- Flow property / unit: Number of items / Item(s)
- Amount rule: N_supplier_sealed/Q actual physical units; cp_failure. Responsibility S/F/O/T is reconciled separately and cannot create another physical output.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_failure`
- Sources: `ikea-tertial-70355455`; `ghg-product-standard-2011`

###### Supplier handoff of opened nonfunctional complete TERTIAL703.554.55 lamp without bulb (`supplier_opened`)

Actual opened nonfunctional complete lamp physically handed to supplier; record packaging separately; no missing parts permitted.

- Selected flow: Supplier handoff of opened nonfunctional complete TERTIAL703.554.55 lamp without bulb
- Flow property / unit: Number of items / Item(s)
- Amount rule: N_supplier_opened/Q actual physical units; cp_failure. Responsibility S/F/O/T is reconciled separately and cannot create another physical output.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_failure`
- Sources: `ikea-tertial-70355455`; `ghg-product-standard-2011`

###### Externally retained unaccepted sealed TERTIAL703.554.55 retail pack without bulb (`retained_sealed`)

Complete sealed pack actually retained by a named external recipient after failed/revoked acceptance; record physical handover only once.

- Selected flow: Externally retained unaccepted sealed TERTIAL703.554.55 retail pack without bulb
- Flow property / unit: Number of items / Item(s)
- Amount rule: N_retained_sealed/Q actual physical units; cp_failure. Responsibility S/F/O/T is reconciled separately and cannot create another physical output.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_failure`
- Sources: `ikea-tertial-70355455`; `ghg-product-standard-2011`

###### Externally retained unaccepted opened nonfunctional complete TERTIAL703.554.55 lamp without bulb (`retained_opened`)

Opened nonfunctional complete lamp retained by a named external recipient; no local waste dispatch exists for this same carrier.

- Selected flow: Externally retained unaccepted opened nonfunctional complete TERTIAL703.554.55 lamp without bulb
- Flow property / unit: Number of items / Item(s)
- Amount rule: N_retained_opened/Q actual physical units; cp_failure. Responsibility S/F/O/T is reconciled separately and cannot create another physical output.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_failure`
- Sources: `ikea-tertial-70355455`; `ghg-product-standard-2011`

##### Waste flows

###### Discarded complete TERTIAL703.554.55 luminaire without bulb (`stock_lamp_waste`)

Actual local dispatched failed complete lamp net carrier including integral cable, clamp and electronics; excludes cartons and separately removed bulb. Fragments/missing components require a state-specific extension, not this complete-device card.

- Selected flow: Discarded complete TERTIAL703.554.55 luminaire without bulb
- Flow property / unit: Mass / kg
- Amount rule: W_stock/Q measured net dispatched kg; cp_failure. No second generation-stock correction of dispatched mass.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_failure`
- Sources: `ikea-tertial-70355455`

###### Discarded original TERTIAL paperboard retail carton with integral adhesive (`carton_waste`)

Actual dry complete carton carrier verified from original packaging BOM, including integral printing/adhesive; no separate duplicated adhesive row. Other inserts, wrapping or damaged mixed packaging need their own actual atomic cards.

- Selected flow: Discarded original TERTIAL paperboard retail carton with integral adhesive
- Flow property / unit: Mass / kg
- Amount rule: (W_stock_carton+Sum_a W_demo_carton,a*f_ap(version))/Q; cp_failure. Original carton supply background is already in merchandise/demo provider; no second manufacturing input.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_failure`
- Sources: `ikea-tertial-70355455`; `jrc-retail-bemp-2013`

##### Elementary flows

### Process: Demonstration asset retirement (`retirement`)

#### Inputs

##### Product flows

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Retired complete TERTIAL703.554.55 demonstrator luminaire without bulb (`demo_lamp_waste`)

Whole actual retired demo device excluding removed bulb. Except for the separate bulb, the actual full integral BOM must remain. Any other removed integral component makes this complete-device card inapplicable and requires a specific remaining-carrier extension. Direct net weighing does not subtract the bulb again. Provider starts at this measured waste handoff.

- Selected flow: Retired complete TERTIAL703.554.55 demonstrator luminaire without bulb
- Flow property / unit: Mass / kg
- Amount rule: Sum_a W_lamp,a*f_ap(final)/Q; cp_retirement. No extra manufacture fraction.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_retirement`
- Sources: `ikea-tertial-70355455`; `ghg-product-standard-2011`

###### Retired complete SOLHETTA805.914.47 clear E27 LED bulb (`demo_bulb_waste`)

One actual whole removed bulb including base and driver, not glass-only waste; no lamp carrier includes it. Broken bulb fragments require a separate state-specific card and weighed whole contained carrier.

- Selected flow: Retired complete SOLHETTA805.914.47 clear E27 LED bulb
- Flow property / unit: Mass / kg
- Amount rule: Sum_a W_bulb,a*f_ap(final)/Q; cp_retirement. No duplicate supplier-contained disposal output.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_retirement`
- Sources: `ikea-solhetta-80591447`; `ghg-product-standard-2011`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_pool | all inventory rows | Declare the observation horizon, SKU/configuration and beneficiary pools before measuring. Retain closed, idle, failed and zero-sale periods in the same configuration pool; carry their raw numerators forward under source IDs. An entirely zero-output pool remains unnormalizable with raw totals disclosed. Late returns replace both numerator fate/background and final-valid Q in the original version; never charge a subsequent resale pool again. No recycling or avoided-sale credit is assumed. | ghg-product-standard-2011 |
| a_meters | bench_electricity | Prefer dedicated meters and direct event subdivision. Where the bench serves multiple products, directly measured test-event energy goes to its original item pool. Allocate remaining measured idle/standby energy by prospectively recorded reserved bench-hours across every actual beneficiary, including closed-hour reservations. Sum allocated amounts equals the full meter total. Positive known all-beneficiary drivers and containment are mandatory; unknown or zero total drivers block the result. | ghg-product-standard-2011 |
| a_lifetime | demo_lamp_input; demo_bulb_input; demo_lamp_waste; demo_bulb_waste | Maintain one persistent ledger per actual asset including all periods and beneficiaries. Exposure e_ap is installed reserved hours including idle/off/closed periods attributable to beneficiary p. Expected total lifetime exposure L_a comes from dated purchase, condition, operating and retirement evidence, not advertised bulb life. Versioned responsibility f_ap=e_ap/L_a; cumulative fractions never exceed1. Revising L_a replaces every prior beneficiary allocation and posts signed differences to those original pools, never restarts manufacture. At actual retirement set L_a=sum actual lifetime exposures and reconcile final residual across all original beneficiaries. Terminal carrier responsibility uses final f_ap once, with no second manufacture fraction. Unknown life/exposure or retirement with no positive lifetime driver blocks completeness. | ghg-product-standard-2011 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_sale | sale | retail_service | Custody and acceptance event ledger |pool_id; version; original_item_id; SKU; supplier_revision; original_receipt_id; pack_BOM_id; opening_stock; received; physical_handover; physical_return; internal_transfer; demo_conversion; supplier_dispatch; local_waste_dispatch; external_retention; closing_stock; acceptance_id; acceptance_status; revocation_event_date; financial_only_flag; cutoff; correction_parent; original_item_id; final_acceptance_status; cutoff; physical_event_ledger; opening_stock; receipts; physical_returns; physical_handovers; supplier_dispatch; local_waste_dispatch; demo_conversion; net_internal_transfers; goods_opening_count; receipts_count; physical_returns_count; physical_handovers_count; supplier_goods_dispatch_count; goods_to_residue_count; demo_conversion_count; net_internal_transfers_count; goods_closing_count; held_waste_opening_kg; waste_generated_kg; waste_dispatched_kg; held_waste_closing_kg|Scan each original ID at every custody event; supplier pack list and visual sealed-pack inspection; signed acceptance and returns review. Keep physical counts independent of final service status. Aggregation method: c_accept; count distinct final-valid original IDs once; all physical events reconcile to stock; no subtraction of revocations a second time. The appended stable fields are the formula raw or verified derived quantities; retain verification/allocation status and do not equate unverified with zero. Original-ID goods count and waste-carrier kg are separate; residue conversion removes goods count, waste dispatch removes held-waste kg only.| Item(s) | Each event and cutoff correction | Full declared horizon and later known corrections | One store, SKU and configuration pool | per reference flow | Dated scans, supplier BOM, acceptance and return evidence |
| cp_bench | bench | bench_electricity | Plug-meter and event reservation log |pool_id; version; source_event_id; meter_id; calibration; opening_kWh; closing_kWh; gap_kWh; event_kWh; tested_original_id; energized_start_end; measured_power; reservation_hours_each_beneficiary; idle_hours; closed_hours; parent_meter_id; containment_map; voltage; provider_id; supply_boundary; opening_kWh; closing_kWh; verified_gap_kWh; direct_event_kWh_all; reserved_hours_all; Q|Calibrated plug energy meter with interval logging; identify actual lamp and bulb and compatibility; capture actual test energy including failed tests and standby. Reconcile register total, event energies and gaps; investigate signed negative differences without zero clamp. Aggregation method: c_energy; raw meter total first, direct events then residual reservation allocation, MJ conversion then /Q once. The appended stable fields are the formula raw or verified derived quantities; retain verification/allocation status and do not equate unverified with zero.| kWh; h; W | Continuous intervals plus every test | Full pool including closed and idle | Actual bench plug and all beneficiaries | per reference flow | Meter calibration, topology, raw logs and all-beneficiary reservations |
| cp_assets | bench | demo_lamp_input; demo_bulb_input | Persistent asset lifetime ledger |asset_id; model; supplier_revision; full_BOM; provider_id; provider_scope; original_purchase; delivery; installation_date; installed_reserved_hours_by_period_beneficiary; expected_lifetime_exposure; life_evidence; retirement_date; lifetime_version; previous_allocations; replacement_deltas; residual; condition; repair_event_id; asset_id; e_ap_all; L_a; lifetime_version; previous_allocations; Q|Trace each actual whole demonstrator and each separate bulb from supplier evidence through installation, actual reserve-time observation and retirement; collect supplier full actual BOM and disjoint provider stages. Revisions retain and replace all prior allocations. Aggregation method: c_assets; use exposure/lifetime fractions once, retain acquisition/retirement stock only as control evidence. The appended stable fields are the formula raw or verified derived quantities; retain verification/allocation status and do not equate unverified with zero.| Item(s); h | Each event; interval exposure; each revision | Entire asset life across all periods | All actual beneficiaries, not only this SKU | per reference flow | Supplier complete BOM, provider contract, logs, retirement and correction receipts |
| cp_failure | failure | failed_background; supplier_sealed; supplier_opened; retained_sealed; retained_opened; stock_lamp_waste; carton_waste | Original source, fate and dispatch ledger |pool_id; source_event_id; original_item_id; receiving_background_id; original_B_j; B_sj; B_fj; B_oj; B_tj; responsibility_signoff; recipient; physical_state; sealed_opened; complete_BOM_check; lamp_present; bulb_removed; supplier_transfer_count; external_retained_count; waste_consignment; net_scale_kg; gross_kg; tare_kg; scale_calibration; carton_BOM; dry_state; opening_waste_stock; generated; closing_waste_stock; treatment_provider; included_transport; correction_version; original_background_id; B_j; B_sj; B_fj; B_oj; B_tj; owner_signoff; original_item_id; physical_event_id; recipient; state; measurement_mode; consignment_id; gross_kg; tare_kg; net_kg; carrier_state; Q; source_kind; source_asset_id; packaging_source_id; W_stock_lamp; W_stock_carton; W_demo_carton_a; f_ap_version; lifetime_version; condition_status; presence_absence_evidence|Link actual original received IDs to each final fate and signed continuing background owner; direct net weigh each local dispatch. Record externally retained/supplier goods physically and background responsibility independently. Verify complete-device/carton state before selecting the card. Aggregation method: c_background; c_transfers; c_waste. Dispatch net kg is the output; opening+generated-dispatched=closing is a separate check. No production burden twice for the same original item or packaging. The appended stable fields are the formula raw or verified derived quantities; retain verification/allocation status and do not equate unverified with zero. Split original packaging disposal by stock/demo source; demo carton and other original packaging carrier treatment follows its original asset lifetime fraction once, replacing every old portion at revision.| Item(s); kg | Each fate/consignment and revision | All failures including zero-sale periods | Actual recipients, store and providers | per reference flow | Original receipt BOM/background, signed fate/owner, scale and transfer/treatment receipts |
| cp_retirement | retirement | demo_lamp_waste; demo_bulb_waste | Asset terminal carrier ledger |asset_id; terminal_event_id; model; state; complete_device; removed_bulb_id; removed_component_ids; measurement_mode; direct_net_kg; BOM_component_net_kg; gross_kg; tare_kg; scale_calibration; final_lifetime_exposure; final_f_ap; owner_pool_ids; provider_id; provider_scope; duplicate_source_keys; measurement_mode; W_a; component_net_kg; final_f_ap; lifetime_version; Q|Calibrated direct whole-device net weighing excluding the removed bulb, or exclusive complete-component reconstruction; whole bulb separately weighed. Confirm provider does not already include terminal handling inside an input package. Aggregation method: c_terminal; actual net carrier * final lifetime responsibility once, /Q once; final revisions replace all old versions. The appended stable fields are the formula raw or verified derived quantities; retain verification/allocation status and do not equate unverified with zero.| kg; h | Each retirement and final life correction | Whole actual asset life | All original beneficiary pools | per reference flow | Scale/BOM evidence, asset linkage, final fractions and provider acceptance |
| cp_completion | sale | all inventory rows | Mandatory external completion module ledger |module_id; pool_id; version; source_event_id; original_denominator; normalized_flag; exchange_id; property; unit; raw_total; allocated_total; source_BOM; supplier_scope; meter_topology; main_kWh; contained_submeter_kWh; independent_meter_kWh; all_beneficiary_area_hours; reserved_operating_hours; stationary_idle_hours; checkout_minutes; cleaned_area; supply_water_kg; formula_source_kg; cloth_kg; actual_effluent_volume; effluent_density; solid_carrier_kg; route_mass_t; loaded_km; empty_vehicle_km; vehicle_capacity; provider_empty_scope; asset_exposure; lifetime_evidence; terminal_mass; completion_status; normalized_flag; normalized_value; original_denominator; raw_total; allocation_status; causal_fraction; source_event_keys; exchange_identity; property; unit; corrected_Q; condition_status; site_absence_records; no_HVAC; no_refrigerant_circuit; no_combustion; no_powered_internal_handling; cleaning_formulation_id; source_formula_kg_unused; source_formula_kg_used; source_formula_kg_spilled; source_formula_kg_in_wipe; source_formula_kg_in_container; source_formula_kg_in_effluent; source_formula_kg_still_open_used; used_destination_reclassification_version; container_whole_terminal_net_kg; container_retained_formulation_source_kg; detergent_packaging_BOM; wipe_dry_input_kg; wipe_whole_terminal_kg; effluent_mode; effluent_temperature; trip_id; full_trip_provider_scope; loaded_km; empty_vehicle_km; moving_h; stationary_idle_h; fuel_L; fuel_density; fuel_LHV; segment_id; beneficiary_id_b; reserved_volume_p_r_s_m3; moving_h_r_s; idle_h_r_s; empty_segment_reservation_evidence; d_pr_all_b; f_pr_all_b; provider_allocation_status; provider_attributed_numerator; original_packaging_asset_id; f_ap_version|Execute every fixed admission and method in b_completion. Cleaning allows only whole effluent direct net kg OR measured V*rho, mutually exclusive; reconstruction is prohibited. All extra atomic rows and actual BOMs require bilingual projection; obtain full-period absence evidence for site combustion, refrigerant circuit, mechanical HVAC and powered internal handling; unknown fails. Full-trip transport retains trip_id, segment_id, every beneficiary_id_b, reserved_volume_p_r_s_m3, moving_h_r_s and actual idle_h_r_s; preserve actual empty-segment reservation evidence, actual fuel/provider coverage and provider_allocation_status. Calculate d_pr and f_pr within each trip r exactly as b_completion; never sum the denominator across trips or reapply f_pr to an already provider-attributed amount. Unknown coverage or zero same-trip all-beneficiary driver total blocks. Record original formulation-source kg in container/effluent/wipe/spill/unused/still-open-used destinations disjointly; later used-status reclassification replaces the same source kg. Directly measure the actual whole container plus retained formulation terminal carrier net kg. Demo-origin original packaging disposal uses original asset version fraction once and replaces all old portions. Restore actual original denominators under c_completion, deduplicate and add only identical exchange/property/unit numerators then divide common Q once.| row-specific original units | Each module interval/event and correction | Same declared service pool; full asset lives | Entire store and actual linked providers | per reference flow | Complete named module receipts, raw activity, boundary reconciliation and atomic bilingual cards |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_accept | retail_service |Q=count(distinct original_item_id with final-valid accepted sealed-pack status at the corrected cutoff). Do not subtract revocations again. goods_closing_count=goods_opening_count+receipts_count+physical_returns_count-physical_handovers_count-supplier_goods_dispatch_count-goods_to_residue_count-demo_conversion_count+net_internal_transfers_count. Remove each original item count from goods stock when converted to residue; held waste has its own carrier-kg stock and later waste dispatch does not subtract goods count again. external_retention is a subset fate of earlier physical handover, never a second stock subtraction.|cp_sale; original_item_id; final_acceptance_status; cutoff; goods_opening_count; receipts_count; physical_returns_count; physical_handovers_count; supplier_goods_dispatch_count; goods_to_residue_count; demo_conversion_count; net_internal_transfers_count| Q; independent physical stock reconciliation | ghg-product-standard-2011 |
| c_energy | bench_electricity | E_total=closing_kWh-opening_kWh+verified_gap_kWh. E_p=direct_event_kWh_p+(E_total-sum_all_direct_event_kWh)*reserved_hours_p/sum_all_reserved_hours. E_bench=3.6*E_p MJ. Preserve measured failed tests and closed/idle portions. Output E_bench/Q only after attribution; unsupported gaps or nonpositive driver totals block. |cp_bench; opening_kWh; closing_kWh; verified_gap_kWh; direct_event_kWh_all; reserved_hours_all; Q| MJ per reference flow | ghg-product-standard-2011 |
| c_assets | demo_lamp_input; demo_bulb_input | f_ap=e_ap/L_a, where e_ap is actual installed reserved hours for beneficiary p over the pool and L_a is evidenced expected total lifetime installed reserved hours. Sum f_ap across every period/beneficiary <=1. At a new lifetime version replace each previous f_ap and post new-minus-old to the original pool. Actual retirement uses L_a=sum_all_actual_lifetime_e and allocates final residual; acquisition amount=sum actual whole-asset f_ap, then /Q. |cp_assets; asset_id; e_ap_all; L_a; lifetime_version; previous_allocations; Q| Whole lamp or whole bulb Item(s) per reference flow | ghg-product-standard-2011 |
| c_background | failed_background | For each original source j, B_j=B_sj+B_fj+B_oj+B_tj. B_fj is original receiving-item-equivalent responsibility, not discarded kg or duplicate descendants. Input=sum_j B_fj/Q with one original full-pack receiving-gate provider each; matching downstream goods adds sum_j B_sj/Q separately. Late corrections replace these partitions and original pool version. |cp_failure; original_background_id; B_j; B_sj; B_fj; B_oj; B_tj; owner_signoff; Q| Original receiving-pack Item(s) responsibility per reference flow | ghg-product-standard-2011 |
| c_transfers | supplier_sealed; supplier_opened; retained_sealed; retained_opened | N_state=count actual unique physical handoffs in the named state with dated recipient evidence; each earlier handover enters one final fate only. N_state/Q is physical output; S/F/O/T remains a separate responsibility reconciliation. |cp_failure; original_item_id; physical_event_id; recipient; state; Q| Physical transfer Item(s) per reference flow | ghg-product-standard-2011 |
| c_waste | stock_lamp_waste; carton_waste |For each actual disjoint consignment carrier W=gross_kg-tare_kg OR direct_net_kg, with exclusive modes. stock_lamp_waste=W_stock_lamp/Q. carton_waste=(W_stock_carton+Sum_a W_demo_carton,a*f_ap(version))/Q. Demo cartons retain original asset/packaging-event IDs and use that same asset lifetime fraction once; every life revision replaces all original-pool portions and actual retirement sets final fractions, never all demo carton kg charged to current Q. Ordinary stock carton uses its actual stock-source full responsibility. Opening+generated-dispatched=closing is an independent waste-kg check, not another correction to actual dispatch; packaging manufacture is already in the matching original provider.|cp_failure; measurement_mode; consignment_id; source_kind; source_asset_id; packaging_source_id; W_stock_lamp; W_stock_carton; W_demo_carton_a; f_ap_version; lifetime_version; gross_kg; tare_kg; net_kg; carrier_state; Q| Dispatched net carrier kg per reference flow | jrc-retail-bemp-2013 |
| c_terminal | demo_lamp_waste; demo_bulb_waste |W_a is net kg of the actual complete integral-BOM terminal carrier excluding only the separate bulb, by direct net weighing OR complete retained-component BOM reconstruction. Other removed integral components require a specific remaining-carrier extension and cannot use the complete lamp card. Never subtract the bulb twice. Terminal numerator=sum_a W_a*f_ap(final); output numerator/Q. No second manufacture fraction or provider-contained disposal.|cp_retirement; measurement_mode; W_a; component_net_kg; final_f_ap; lifetime_version; Q| Lifetime-attributed terminal kg per reference flow | ghg-product-standard-2011 |
| c_completion | all inventory rows | For each module row r restore R_r=normalized_value_r*original_denominator_r when normalized, otherwise R_r=raw_total_r. Apply the evidenced full-pool causal fraction once to R_r if not already allocated. Remove only duplicate identical source-event keys with identical scope/version; conflicts block. Match exchange identity, property and unit; add disjoint compatible numerators by row, then divide common corrected Q once. Store residual electricity subtracts only contained bench circuits. All module lifetime revisions follow a_lifetime. |cp_completion; module_id; version; normalized_flag; normalized_value; original_denominator; raw_total; allocation_status; causal_fraction; source_event_keys; exchange_identity; property; unit; corrected_Q| Completed compatible row numerators and once-normalized service inventory | ghg-product-standard-2011; jrc-retail-bemp-2013 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_identity | all inventory rows | Bind each unresolved atomic flow only after original official public record and property/unit/medium/type/name verification. Whole luminaire, bulb, pack and carton candidates cannot inherit a material-only UUID. Preserve unknown identity and matching provider completion conditions. | Official original, hash/integrity receipt and row-specific semantic comparison |
| q_measure | all inventory rows | Retain calibration, original record IDs, full interval coverage and uncertainty. No unsupported numerical ranges, nominal masses, rated activity or zero defaults. Important-flow range evidence remains unresolved pending comparable records; this candidate supplies collection methods instead. | Raw logs, scale records, supplier complete BOM and explicit evidence gaps |
| q_completion | all inventory rows | Partial module status remains explicit until every b_completion module, actual atomic extension, S/F/O/T responsibility and conditional true/false/unknown check is resolved. Consumer operation is not part of bench energy. No asserted whole-standard conformity or scientific approval. | Named completion matrix, provider overlap review and bilingual business-array audit |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_reference | retail_service | Reject mixed SKUs or units, opened/damaged service acceptance, missing original IDs, missing cutoff or Q<=0 normalization. Reconcile distinct final-valid IDs independently from gross custody stock. | ikea-tertial-70355455; ghg-product-standard-2011 |
| v_balance | all inventory rows | Reconcile stock event balance, B_s+B_f+B_o+B_t=B, all meter attribution=raw total and asset lifetime fractions<=1. Externally retained failures have recipient/state/background responsibility; supplier returns keep continuing responsibility. No duplicated original background or dispatch carrier. | ghg-product-standard-2011 |
| v_completion | all inventory rows | Unknown presence, identity, meter containment, provider coverage, full BOM, lifetime driver or external module boundary blocks complete claims. Confirm all referenced IDs exist in actual generated business arrays, bilingual directions/types/formulas/qualifiers agree, actual extra flows have atomic cards, and only compatible once-restored numerators are aggregated. | ghg-product-standard-2011; jrc-retail-bemp-2013 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Partial incremental retail-service foreground module; completed only after b_completion. |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Same SKU/configuration and declared route with actual data and compatible completed modules. |
| excluded_use | Whole CPC leaf, bulb manufacture, illumination service, consumer operation, another SKU, or uncompleted comparative total. |
| required_metadata | store and country; SKU703.554.55 white and supplier revision; complete lamp and original packaging BOM; original item IDs and receiving-gate background IDs; ambient walk-in route; pool horizon and acceptance cutoff; final-valid Q and correction version; bench lamp and clear bulb805.914.47 identity and compatibility; meter containment and all-beneficiary allocation; partial boundary and completion module versions; failed retained goods recipient and background responsibility; provider and terminal-treatment boundaries |
| required_quality_disclosure | Candidate method, partial boundary, identity/BOM/provider/range gaps, uncertainty, late-return/lifetime replacements and all module versions. |
| update_trigger | Changed SKU, supplier revision/BOM, route/bench bulb, meters, providers, acceptance status, asset life or completion scope. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| ikea-tertial-70355455 | official_guidance | IKEA, TERTIAL work lamp white703.554.55, product details/materials/measurements, https://www.ikea.com/nl/en/p/tertial-work-lamp-white-70355455/ ; retrieved2026-10-28. | Exact representative luminaire and bulb exclusion; qualitative component/specification evidence only. Not complete BOM or measured net mass, shop tests, life or inventory. |
| ikea-solhetta-80591447 | official_guidance | IKEA, SOLHETTA E27 LED470 lumen2700K805.914.47 clear, https://www.ikea.gr/en/products/solhetta-led-bulb-e27-470-lumen-2700-k/80591447/ ; retrieved2026-10-28. | Real separate clear demonstration bulb specification;2.2W and advertised25000h are not shop measurements or default lifetime. Glass material entry is not complete bulb BOM. |
| ghg-product-standard-2011 | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard2011, chapters6,7,9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf ; consulted2026-10-28. | Unit of analysis, explicit boundary and subdivision/physical-allocation concepts; PCR equations, added asset scope and foreground protocols are declared method design, not source-prescribed numerical factors or full conformity. |
| jrc-retail-bemp-2013 | official_guidance | European Commission JRC, Best Environmental Management Practice in the Retail Trade Sector, EUR25998EN2013, executive input-output scheme and lighting section2.1.6.7, https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf ; consulted2026-10-28. | Retail utilities, lighting, packaging, transport and waste relevance; no percentage, performance benchmark or generic default amount adopted. |
