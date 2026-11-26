---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-household-linens-curtains-net-curtains-a-596af318
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Counter-pickup retail services for dry cotton terry bath towels


## 1. Scope and Applicability

This PCR defines an explicitly partial incremental retail service from store receiving to final counter acceptance of one dry cotton terry bath towel. Each dataset fixes one actual supplier SKU, colour, dimensions, surface density, finishing, moisture state and original packaging configuration; different SKUs or configurations cannot be averaged into one reference item. The representative manufacturer specification demonstrates a real cotton terry object, not measured inventory. No laundering, drying, cutting, tailoring, curtain fitting, specialist-store sale, home delivery, twine, nets or other textile merchandise is covered. Section 5 and calc_complete fix the mandatory completion of facilities, assets, transport and upstream failure responsibility before a complete service inventory may be claimed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-household-linens-curtains-net-curtains-a-596af318 |
| classification_refs | CPC 3.0 62132; narrower |
| covered_products | Retail service for a dry, unused, folded 100% cotton terry bath towel of one declared actual SKU and unchanged original pack at counter handover |
| excluded_products | Curtains; net curtains; ropes; netting; other textiles; used towels; reconditioned or laundered goods; parcel delivery |
| representative_product | Counter-pickup retail services for dry cotton terry bath towels; actual supplier, SKU/configuration, lot and complete original BOM verified separately for each homogeneous stratum. |
| production_route | Non-specialized store receiving, dry storage/display, attended counter handover, actual returns and stock fates; no product transformation |
| market_state | Unused dry cotton terry towel with its recorded label, ties and original wrapper; original opened/damaged states are separately recorded and cannot count as qualified unchanged-pack acceptance |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Receive, hold, display and hand over the declared towel to a customer at the store counter |
| How much | One finally accepted item of service, not one kg of cotton or one payment |
| How well | Correct SKU and unchanged recorded original pack, dry, unused, uncontaminated and undamaged; final recipient acceptance remains valid |
| How long or cycle | One receiving-to-final-fate cohort with declared return cutoff; late corrections reopen its numerator and denominator |
| reference_flow_link | service_out |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Counter-collection retail service for one dry cotton terry bath towel |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | actual supplier SKU and lot; colour; dimensions and surface density; cotton composition including attached trims; finish; measured receiving net mass and moisture condition; original tag/tie/wrapper BOM and configuration; receiving gate; store and counter route; pool dates and configuration; final acceptance and return cutoff; final fate and background owner; partial boundary and completion-module versions |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| unit_service | service_out | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | One reference item is one qualified final service. Q counts unique valid final acceptance records under calc_accept, not stock count, gross handovers or cash transactions. |
| unit_electricity | counter_ac | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Convert attributed point-of-use kWh by exactly 3.6 MJ/kWh, then divide by Q once. UUID does not specify grid, provider or voltage. |
| unit_carrier | bag_ldpe; receipt_paper; waste_bag; waste_receipt_core; waste_carton; waste_film; waste_tag; waste_towel; supplier_towel; external_towel; cleaning_water; cleaning_detergent; cleaning_effluent; waste_cleaner_bottle | Mass | kg | Use actual whole-carrier net mass at declared moisture/state, excluding tare. Actual volume times measured batch density at recorded temperature is an alternative to direct mass, never an extra multiplier. No nominal dimensions-times-gsm or catalogue package mass substitutes for receiving mass; wet waste is not silently converted to dry cotton. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual dry towel and its original packaging received at store gate; same-gate upstream responsibility is separately partitioned |
| starting_condition_role | partial_incremental_service |
| product_classification_scope | Narrower subset of CPC 3.0 62132, whose note includes groups 271, 273 and 279 |
| recursive_input_rule | Do not recursively add another retail service for internal storage/return/resale; retain one item lineage |
| upstream_dataset_requirement | Compatible actual supplier BOM/receiving state, explicit B_S/B_F/B_T/B_O and source-row denominators |
| disclosure | Partial direct increment until all mandatory completion modules and identities are evidenced; no methodology approval implied |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_product_family | all inventory rows | This PCR applies to the declared product family across manufacturers and brands. Brand, model, catalogue article, SKU and trade name identify actual study data, not an exclusive eligibility condition. The material/function, product state, fixed format where specified, process/channel and gate conditions below still apply. Establish separate homogeneous supplier/configuration/edition/package-BOM strata and their matching original background vectors; do not multiply a mixed-SKU count by one specimen vector. Use actual measured quantities and supported conversions. Manufacturer examples and their masses, dimensions, ratings, formulation or packaging claims are illustrative only, never class-wide defaults or complete BOM/LCI. Any actually different component, support chemical, package or carrier requires its concrete atomic card, matched property/unit, collection and nonoverlapping source boundary before completeness; an actual state or route outside the declared family requires a separately reviewed extension. Unknown applicability, identity or evidence remains unresolved. This candidate generalization does not establish independent scientific or translation approval. |  |
| bound_scope | all processes | Apply only the section 2 route and qualifiers. Confirm original label/tie/wrapper composition and handover state per lot; visible stains, odour, dampness, mould, tears or an altered required pack trigger quarantine and recorded disposition. No retail laundering or disinfection of merchandise is assumed. If such treatment occurs, this route is inapplicable until a separately reviewed transformation extension is authored in both languages and synced. | ikea-towel-spec |
| bound_partial | all processes | Direct foreground includes measured counter circuits, newly added bag/receipt, actual original-pack waste, failed towel fates and floor cleaning. It excludes merchandise manufacture and inbound transport for successful goods, customer travel/use/end-of-life and all unexpanded facilities/assets/logistics modules. This is a partial increment; a complete retail service requires calc_complete, calc_assets, calc_transport and calc_background without overlapping direct rows. | jrc-retail-2013 |
| bound_ownership | receiving | Keep unique receiving lot/item lineage through internal moves, return, reopening and resale. Sold merchandise manufacture and transport to the same receiving gate remain a separately disclosed parent responsibility B_S. Assign original-gate-equivalent kg/BOM burdens once among B_S, retailer failure B_F, transfer B_T and open B_O. Supplier-return and externally retained failure require named recipient, physical state, responsibility contract and continuation; neither is automatically waste. Original packaging production follows the same parent ownership, but actual retail removal treatment remains here. | ghg-product-2011 |
| bound_extensions | all processes | Prove presence/absence for each conditional row with invoices, stock records, site walk and waste tickets. Other real material, cleaning reagent, wrapping, contamination, direct outside release or changed towel state requires a named atomic card, single-process protocol, property/unit, fate and upstream owner in both languages before completeness. Unknown is not zero. A complete real device, defined mixture or evidenced homogeneous service stays one exchange; do not add its constituents again. | jrc-retail-2013 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| receiving | Receiving, dry custody and final stock fates | required | All receiving lots and actual failures/returns | foreground | Final Q of the linked counter cohort |
| counter | Attended counter acceptance | required | Every attempted and valid final handover | foreground | service_out |
| cleaning | Floor cleaning | conditional | Actual floor-cleaning event; prove absence or alternative treatment | foreground | Same final Q |

### Process: Receiving and stock fates (`receiving`)

#### Outputs

##### Product flows

###### Dry unused cotton terry bath towel returned to supplier in intact original pack (`supplier_towel`)

Conditional physical transfer, no credit and no new service. Recipient and continuing B_T responsibility must be verified; altered-pack transfers require their actual state-specific extension.

- Selected flow: Dry unused cotton terry bath towel returned to supplier in intact original pack
- Flow property / unit: Mass / kg
- Amount rule: actual_intact_supplier_handover_kg / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources: `jrc-retail-2013`

###### Dry cotton terry bath towel in intact original pack retained by customer after acceptance revocation (`external_towel`)

Conditional known dry whole towel in intact original pack with documented actual pack state and named recipient; not store waste. If contaminated, wet, opened into parts or state unknown, this card cannot stand in; extend the actual state and responsibility before completion.

- Selected flow: Dry cotton terry bath towel in intact original pack retained by customer after acceptance revocation
- Flow property / unit: Mass / kg
- Amount rule: actual_external_failed_towel_kg / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources: `jrc-retail-2013`

##### Waste flows

###### Discarded dry corrugated cardboard transport box (`waste_carton`)

Conditional. Original receiving box actually discarded at store; separate retained reusable boxes. Treatment provider and destination are mandatory; no avoided-product credit.

- Selected flow: Discarded dry corrugated cardboard transport box
- Flow property / unit: Mass / kg
- Amount rule: actual_consignment_net_kg / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources: `jrc-retail-2013`

###### Discarded polyethylene original transport stretch film (`waste_film`)

Conditional. Verify actual PE film polymer and location of removal; not the newly added carry bag. Treatment provider and destination are mandatory; no avoided-product credit.

- Selected flow: Discarded polyethylene original transport stretch film
- Flow property / unit: Mass / kg
- Amount rule: actual_consignment_net_kg / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources: `jrc-retail-2013`

###### Discarded paperboard hang tag with attached polypropylene fastener (`waste_tag`)

Conditional. One physically collected mixed carrier only when attachment and composition are evidenced; do not also export constituent paper and PP. A separate cotton tie requires its own actual card. Treatment provider and destination are mandatory; no avoided-product credit.

- Selected flow: Discarded paperboard hang tag with attached polypropylene fastener
- Flow property / unit: Mass / kg
- Amount rule: actual_consignment_net_kg / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources: `jrc-retail-2013`

###### Discarded dry cotton terry bath towel with original pack removed (`waste_towel`)

Conditional. Actual dry damaged or rejected cotton towel sent as non-hazardous textile waste; weigh whole remaining towel. Original tag/film dispatched separately are excluded from this mass. Wet, mould-contaminated or chemically contaminated waste needs separately characterised cards and treatment. Treatment provider and destination are mandatory; no avoided-product credit.

- Selected flow: Discarded dry cotton terry bath towel with original pack removed
- Flow property / unit: Mass / kg
- Amount rule: actual_consignment_net_kg / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources: `jrc-retail-2013`

### Process: Counter acceptance (`counter`)

#### Inputs

##### Product flows

###### Alternating current (`counter_ac`)

Only disjoint measured attended checkout circuits; lighting and HVAC in completion modules exclude these circuit IDs. Provider geography, voltage and supply mix remain required dataset evidence.

- Selected flow: Electricity, alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: 3.6 * attributed_counter_kWh / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_counter`
- Sources: `jrc-retail-2013`

###### Low-density polyethylene carry bag (`bag_ldpe`)

Conditional newly added bag of verified LDPE grade; exclude original merchandise wrapping. Retain actual bag masses and customer refusal. Other bag polymers require their own card.

- Selected flow: Low-density polyethylene carry bag
- Flow property / unit: Mass / kg
- Amount rule: net_issued_bag_kg / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_counter`
- Sources: `jrc-retail-2013`

###### Thermal receipt paper excluding roll core (`receipt_paper`)

Conditional actual identified net paper formulation and coating, excluding core and transport wrapping. Record actual roll gross mass, removed transport tare, core BOM/material and calibrated empty-core mass. Net paper = gross roll - actual external tare - measured core; never count core kg as paper consumption or printed-paper waste. Use a provider background expressed per this net-paper quantity that includes its associated core production once, or add a disjoint explicit core-production module; provider scope must identify which mode applies. Count failed prints; unused roll stock is distinct from printed intermediate stock. Electronic-only receipt requires evidence of no paper consumption.

- Selected flow: Thermal receipt paper excluding roll core
- Flow property / unit: Mass / kg
- Amount rule: consumed_receipt_paper_kg / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_counter`
- Sources: `jrc-retail-2013`

#### Outputs

##### Product flows

###### Counter-collection retail service for one dry cotton terry bath towel (`service_out`)

Retail service only. A correct final acceptance contributes once per original item lineage. A later acceptance revocation removes it even without physical return; a refund with valid acceptance does not.

- Selected flow: Counter-collection retail service for one dry cotton terry bath towel
- Flow property / unit: Number of items / Item(s)
- Amount rule: 1 Item(s)
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_counter`
- Sources: `ikea-towel-spec`; `ghg-product-2011`

##### Waste flows

###### Discarded low-density polyethylene carry bag (`waste_bag`)

Conditional actual added LDPE bags discarded at the store, including damaged or refused bags no longer usable. Reconcile with bag consumption and unused stock; customer-held issued bags are not this store waste. Measure the actual whole bag and actual contamination state; another polymer or contaminated combined carrier needs its actual extension. No second bag manufacture is added at disposal.

- Selected flow: Discarded low-density polyethylene carry bag
- Flow property / unit: Mass / kg
- Amount rule: actual_discarded_bag_consignment_net_kg / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_counter`
- Sources: `jrc-retail-2013`

###### Discarded dry paperboard thermal-receipt-roll core (`waste_receipt_core`)

Conditional actual separate dry paperboard core after paper is removed. Verify roll BOM, core material and measured empty-core net mass; do not assume every roll has a core or that a plastic core is paperboard. A physically combined core with retained paper requires a concrete whole-carrier extension and no separate duplicate core/paper dispatch. Original core manufacture is included once in the supplier roll background or an explicit disjoint paperboard-core production module.

- Selected flow: Discarded dry paperboard thermal-receipt-roll core
- Flow property / unit: Mass / kg
- Amount rule: actual_paperboard_core_consignment_net_kg / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_counter`
- Sources: `jrc-retail-2013`

###### Discarded printed thermal receipt paper (`waste_receipt`)

Conditional failed or void printed receipts actually dispatched for treatment; exclude unused rolls and customer-held receipts. Actual coating and treatment eligibility must be verified.

- Selected flow: Discarded printed thermal receipt paper
- Flow property / unit: Mass / kg
- Amount rule: actual_receipt_waste_net_kg / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_counter`
- Sources: `jrc-retail-2013`

### Process: Floor cleaning (`cleaning`)

#### Inputs

##### Product flows

###### Potable mains water for floor cleaning (`cleaning_water`)

Conditional store floor cleaning only, not merchandise washing. Import meter already excludes internal reuse; do not subtract reuse again.

- Selected flow: Water, tap `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: attributed_imported_water_kg / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning`
- Sources: `jrc-retail-2013`

###### ECOVER All Purpose Cleaner Lemongrass & Ginger liquid concentrate, formulation 3000714 (`cleaning_detergent`)

Conditional one real formulated product: ECOVER All Purpose Cleaner Lemongrass & Ginger, historical formulation3000714, 5L barcode5412533000061, TDS24/05/2017. Match actual batch label, SDS and declared water/alcohol/citrate/fatty-acid/glyceryl-caprylate/lactic-acid/nonionic-surfactant/fragrance composition before use. Current same-brand product may differ; no equivalence or undeclared additives are assumed. Retain one whole formulation, including its water, not repeated constituent inputs. Measure stock-consumed formulation including actual bottle residue sent out; liquid balance uses only concentrate_to_liquid_kg. No nominal dose/density/pack mass is adopted; other formulation requires its own card.

- Selected flow: ECOVER All Purpose Cleaner Lemongrass & Ginger liquid concentrate, formulation 3000714
- Flow property / unit: Mass / kg
- Amount rule: attributed_whole_concentrate_kg / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning`
- Sources: `ecover-cleaner-formulation`

#### Outputs

##### Waste flows

###### Empty ECOVER formulation 3000714 5L bottle with original closure, label and measured residue (`waste_cleaner_bottle`)

Conditional complete physical historical 5L container with HDPE bottle, PP cap and PE/PP label; verify actual packaging BOM and formulation before binding. Weigh whole carrier including actual residual formulation; do not repeat polymer or liquid-residue waste constituents. Retained usable concentrate is stock, not waste. Original container production enters exactly once in supplier background or a disjoint explicit module.

- Selected flow: Empty ECOVER formulation 3000714 5L bottle with original closure, label and measured residue
- Flow property / unit: Mass / kg
- Amount rule: actual_whole_bottle_consignment_kg / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning`
- Sources: `ecover-cleaner-formulation`

###### Aqueous floor-cleaning effluent containing ECOVER formulation 3000714 (`cleaning_effluent`)

Conditional whole liquid carrier sent to verified wastewater treatment; not an elementary water emission. Only mutually exclusive direct-mass, metered-volume or full-liquid reconstruction mode may determine it.

- Selected flow: Aqueous floor-cleaning effluent containing ECOVER formulation 3000714
- Flow property / unit: Mass / kg
- Amount rule: attributed_whole_effluent_kg / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning`
- Sources: `jrc-retail-2013`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| alloc_direct | all inventory rows | Prefer disjoint direct meters and event attribution. For shared counter operation use observed active transaction seconds; for stock space use occupied volume-hours; for floor cleaning use actually cleaned area-times per event; allocate the complete shared pool over all actual beneficiaries. Keep closed/idle/failure periods in the prospectively fixed same-configuration pool. Zero total drivers block allocation unless a physically justified positive capacity/reservation-time driver was declared prospectively before opening the pool and covers every beneficiary including idle periods; a zero-output pool is unnormalizable and is not discarded. | ghg-product-2011 |
| alloc_assets | completion modules | For building, shelf, checkout terminal, lighting, HVAC and reusable mop/bucket, calc_assets uses persistent asset IDs and all-beneficiary lifetime exposure. Separate manufacture/installation from actual operation, maintenance events and terminal treatment. Device acquisition/retirement counts validate the ledger; they are not additional consumed devices beside lifetime fractions. No automatic credit for scrap, donation, supplier returns or resale. | ghg-product-2011 |
| alloc_normalize | all inventory rows | First retain raw event/meter totals, then attribute once, then divide the attributable numerator once by final Q. Apply no second SKU, destination, composition or responsibility fraction to a quantity already selected for that cohort. No allocation by sales price is prescribed. | ghg-product-2011 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_stock | receiving | Original towel lineage and physical fates | event_ledger | pool_id; item_id; SKU; supplier_lot; pack_BOM; cotton/trim composition; finish; colour; dimensions; gsm; moisture/state; event_id; actual_date; receiving_net_kg; gross_handover; physical_return; acceptance; revocation; refund_only; supplier_return; external_retention; stock_open; stock_close; losses; waste_ticket; tare; recipient; responsibility_owner; B_S; B_F; B_T; B_O; stock_open; stock_close; receiving_net_kg; gross_handover; physical_return; supplier_return; external_retention; losses; waste_ticket; consignment_gross; tare; waste_open; generation; waste_close; receiving_gate; original_receiving_equivalent_kg; original_m_i; p_ik; z_iS; z_iF; z_iT; z_iO; P_zk; lot_moisture_at_each_gate; repeated_net_weights; signed_environmental_exchange_kg; E_env; carrier_component_masses; whole_pack_handover_net_kg; moisture_drift_kg; uncertainty; unique_background_parent_id; responsibility_owner; pack_BOM; B_S; B_F; B_T; B_O | At receiving bay weigh actual lot on a calibrated scale, retain tare and pack-BOM evidence; scan each handover/return/quarantine/dispatch and investigate count/mass mismatches. Measure lot moisture with a calibrated method suitable for the actual finish and retain paired repeated calibrated net weights at receiving, storage and dispatch; record ambient exposure, observed mass drift, other actual transfers and signed uncertainties independently from counted losses. Moisture condition is observed, not an assumed dry factor. | Item(s); kg | Every event; daily stock reconciliation; every late return | All declared pool dates through final fate and subsequent corrections | Receiving bay, dry shelf and actual external recipients | per reference flow | Calibration certificates, supplier BOM, signed acceptance/fate/transfer records, photographs and waste tickets; unknown fields block complete inventory |
| cp_counter | counter | Acceptance, disjoint power and newly added packaging | meter_and_event_ledger | pool_id; event_id; item_id; final_acceptance_id; revocation_date; refund_only; circuit_id; parent_meter_id; meter_start/end; multiplier; calibration; kWh; power_interval; active_seconds_all_beneficiaries; idle/closed_seconds; bag_SKU; LDPE_grade; bag_net_mass; bag_issues; receipt_roll_id; unused_roll_open/receipts/close; printed_stock_open/close; paper_issued; failed_print_kg; waste_ticket; supplier_returns; final_acceptance_id; revocation_date; refund_only; item_id; meter_start/end; multiplier; parent_meter_id; circuit_id; reset_correction; raw_pool_X; d_c; d_all; idle/closed_seconds; unused_stock_open; acquisitions; unused_returns; unused_stock_close; supplier_returns; printed_stock_open/close; roll_id; roll_BOM; roll_gross_kg; external_roll_tare_kg; actual_core_material; empty_core_net_kg; net_paper_kg; core_stock_open; core_acquired_kg; core_stock_close; core_dispatch_net_kg; core_background_mode; provider_roll_scope; actual_discarded_bag_consignment_net_kg; actual_paperboard_core_consignment_net_kg; bag_waste_generation_kg; bag_waste_stock_open/close; paper_issued; failed_print_kg; waste_ticket; consignment_gross; tare; waste_open; generation; waste_close | Scan final acceptance at counter and link stock originals. Read traceable calibrated circuit meters every interval, including closed hours; weigh issued LDPE bags, actual discarded bags, gross receipt rolls, external roll tare and actual empty cores with calibrated scales; identify paper/core BOM and supplier manufacture boundary, then reconcile net paper, unused stock, failed prints, actual core fates and waste consignment/tare separately. Verify topology before subtraction. | Item(s); s; kWh; kg | Each transaction and packaging event; interval meters; daily roll/receipt reconciliation | Whole prospective same-configuration pool including failures and idle time | Attended counter and declared electrical circuits only | per reference flow | Acceptance audit, topology diagram, meter calibration, invoices, scale checks, stock issue and waste records; absent bag/paper requires evidence |
| cp_cleaning | cleaning | Floor cleaning whole liquids | cleaning_event_ledger | event_id; pool_id; cleaned_area_all_beneficiaries; cleaning_mode; water_meter_start/end; imported_water_kg; concentrate_batch; SDS; concentrate_kg; dilution_kg; effluent_mode; effluent_net_kg; effluent_m3; density_kg_m3; temperature; liquid_open/close; source_pool_liquid_imports; whole_liquid_exports; evaporation_kg; separately_exported_solution_kg; cleaner/dirt_import_kg; out_of_pool_import_kg; provider_scope; treatment_ticket; effluent_mode; effluent_net_kg; effluent_m3; density_kg_m3; temperature; liquid_open/close; imported_water_kg; concentrate_kg; cleaner/dirt_import_kg; evaporation_kg; separately_exported_solution_kg; whole_liquid_exports; out_of_pool_import_kg; concentrate_to_liquid_kg; concentrate_stock_open; concentrate_acquired_kg; concentrate_stock_close; concentrate_supplier_return; bottle_residue_kg; cleaner_container_BOM; bottle_capacity; formulation_id; actual_whole_bottle_consignment_kg; consignment_gross; tare; waste_open; generation; waste_close; raw_pool_X; d_c; d_all | At floor-cleaning supply and drain/container measure every event with calibrated water meter/scale; measure density for actual mixed batch at recorded temperature. Weigh effluent whole carrier and all stock/export terms separately. Confirm detergent product and recipient treatment; retain no-cleaning/alternative-cleaner observations. | kg; m3; m2; degree C | Every cleaning and discharge; daily import-stock-export balance | All cleaning/idle events in the same service pool | Actual floor area serving declared stock and counter | per reference flow | Calibration, batch SDS, measured densities, area records and signed treatment consignment; unresolved balance is disclosed and blocks complete claim |
| cp_modules | receiving | Explicit completion-module ledger | module_ledger | module_id; version; source_exchange_id; source_row_id; source_pool; original_denominator_D; normalized_quantity; raw_quantity; identity; direction; type; property; unit; state; period; all_beneficiary_driver; allocated_driver; circuit/asset/trip/treatment_ids; overlap_register; provider_boundary; unknowns; module_id; version; source_exchange_id; source_pool; normalized_quantity; original_denominator_D; raw_quantity; allocated_driver; all_beneficiary_driver; overlap_register; identity; direction; type; property; unit; state; raw_pool_X; d_c; d_all | Obtain actual provider or expanded foreground source rows for every required module. Inspect every original denominator, boundary and version; reconcile circuit, asset, trip and treatment IDs against direct records. Reconstruct source raw numerators; never add impacts to physical flows. | source-row unit | Every module/version/pool and update | Exact same declared configuration and cohort coverage | Facility, building, shelf, POS, lighting, HVAC, mop/bucket, logistics and waste providers | per reference flow | Original source rows/denominators, signed provider scope, overlap audit, absent-module evidence; incomplete modules retain partial status |
| cp_assets | receiving | Lifetime assets and HVAC external fate | persistent_asset_ledger | asset_id; model; full_device_BOM; manufacture_install_version; operation_scope; maintenance_event_id; replacement_part_mass; removed_part_destination; exposure_current; exposure_all_past; expected_lifetime_total_exposure_L; allocation_version; prior_allocations; residual; terminal_mode; terminal_net_carrier_kg; component_BOM; refrigerant_species; charge; refill; recovery_sent_out; internal_air_storage; captured_condensate; final_outside_flux; capture_destination; asset_id; exposure_current; expected_lifetime_total_exposure_L; allocation_version; prior_allocations; residual; terminal_mode; terminal_net_carrier_kg; component_BOM; maintenance_event_id; refrigerant_species; charge; refill; recovery_sent_out; internal_air_storage; captured_condensate; final_outside_flux; measurement_mode; blank_correction; initial_charge_mode; opening_charge; commissioning_factory_charge; measured_virgin_charge_from_supply; measured_reused_recovery; closing_charge; measured_circuit_extraction; total_circuit_loss; store_internal_source; direct_outside_source; unresolved_loss; leak_location; recovery_loss_location; supply_loss_location; measured_outlet_flux; recovered_open; circuit_extraction_received; external_recovery_received; recovered_close; reused_to_circuit; recovery_shipped_out; measured_recovery_losses; supply_open; purchases; supply_close; charge_to_circuit; supplier_returns; measured_supply_losses; extraction_receipt_id; species_sampling_intervals; sampling_uncertainty; actual_other_internal_sources; store_air_open/close; captured_species_kg; X_intact; contained_handoff_event_id; contained_handoff_species_kg; charged_device_recipient; charge_evidence_method; charge_uncertainty; initial_charge_provider_scope; external_recovered_provenance; external_recovered_type; reclamation_background_source; prior_virgin_owner; inlet_species_concentration; outlet_species_concentration; inlet_carrier_flow; outlet_carrier_flow; gas_temperature_pressure; inlet_background_species_kg; outlet_species_kg; net_external_species_kg; outside_measurement_mode; capture_destination; prospective_driver_version; pool_open_date; exposure_all_periods_beneficiaries; actual_all_life_exposure_E_a; signed_historical_corrections | Read durable asset/premises register and provider original BOM; record all beneficiaries and calibrated area/capacity/time drivers. Weigh event replacements and actual terminal carrier; retain prospectively fixed driver/version and signed all-history allocation replacements at retirement. Calibrated cylinder weighing at each service event separately records circuit extraction, recovered receipt, reuse and virgin stock; actual charged-device handoffs record device/recipient/gate, measured contained species kg, exclusive extracted/retained portions, qualified charge evidence and uncertainty; inspect initial-charge/reclaimed-product provider scope and prior production ownership; calibrated species-specific actual inlet and outlet concentration/carrier-flow samples, with actual temperature/pressure and integrated background mass, span declared operating and idle modes and retain uncertainty; record absolute/differential/already-corrected mode so background is removed once. Reconcile refrigerant stocks, recovered shipments, room/capture storage, direct outside locations and final external destinations. | Item(s); kg; m2*h; capacity*h | Each exposure interval, maintenance, life revision and retirement | Entire persistent lifetime across service pools | Building, shelves, POS, lighting, HVAC, cleaning tools and associated providers | per reference flow | Original BOM/contracts, all-life allocation register, scales, maintenance and recovery receipts; unknown lifetime/provider scope prevents completion |
| cp_transport | receiving | Non-overlapping actual transport | trip_ledger | trip_id; provider; start/end_gate; route_km; cargo_mass_by_beneficiary; occupied_volume; rated_capacity; loaded/empty; stationary_idle_h; fuel_id; fuel_kg; meter; provider_included_return_empty; provider_fuel/assets/maintenance_scope; upstream_parent_trip; failure_owner; overlap_ids; trip_id; cargo_mass_by_beneficiary; occupied_volume; rated_capacity; route_km; loaded/empty; stationary_idle_h; fuel_id; fuel_kg; provider_included_return_empty; overlap_ids; upstream_parent_trip | Read actual route and fuel/vehicle-distance provider records; verify loaded, empty return and stationary idling coverage. Count inbound successful-merchandise transport only in its parent boundary; failure-origin receiving transport follows calc_background. | kg; km; t*km; h | Every trip and idle interval | All trips causally required for the cohort including failed loads | Declared receiving, supplier-return and treatment routes | per reference flow | GPS/odometer, fuel invoices, load manifest, provider return-trip boundary and stationary records; unknown coverage blocks completion |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_accept | service_out | Q = count of unique original-item lineages with valid final qualified acceptance at the declared cutoff. Gross handovers, refusal, repeated scans, internal transfers and revoked acceptance are not new output. Resale after return has at most one final valid service for that original item. Revoke Q even if customer retains the failed item; financial refund/discount alone does not revoke acceptance. Late returns/decisions revise original-pool Q, costs and fates with actual dates; do not export the correction into a fresh pool. Q = 0 remains an unnormalizable disclosed pool. | cp_counter; cp_stock; final_acceptance_id; revocation_date; refund_only; item_id | Q | ghg-product-2011 |
| calc_stock | supplier_towel; external_towel; waste_towel | Reconcile physical item and actual state-specific mass ledgers: opening + new receipts + physical customer returns + internal_in = closing + gross physical customer handovers + supplier handovers + actual stock losses + internal_out. External retained failure is a classified subset of earlier gross handovers, never another removal. Internal moves cancel between linked locations and do not acquire another manufacture burden. Count closure and mass closure are separate. For each consistent actual-state carrier kg balance, add signed independently measured net environmental exchange E_env once to the left side; observed moisture/storage drift is an independent check on that exchange, never a second balance term. Keep towel-body kg and every original-pack carrier kg in separate ledgers; an intact packaged handover card is a whole physical carrier, whose recorded component masses reconcile to the same whole weight without adding the whole and its constituents as duplicate exchanges. Measure lot moisture and calibrated repeated net weights at receiving, storage and dispatch, record water uptake/loss and other actual transfers with signed uncertainty. Do not force a kg residual into towel loss, even for a dry unused towel. Unexplained residual blocks mass closure. Waste dispatch is a separate consignment ledger; historical receiving-equivalent background mass is not a present physical handover. | cp_stock; stock_open; stock_close; receiving_net_kg; gross_handover; physical_return; supplier_return; external_retention; losses; lot_moisture_at_each_gate; repeated_net_weights; signed_environmental_exchange_kg; E_env; carrier_component_masses; whole_pack_handover_net_kg; moisture_drift_kg; uncertainty | reconciled physical fates |  |
| calc_share | counter_ac; cleaning_water; cleaning_detergent; cleaning_effluent | For a measured shared pool X, X_c = X * d_c / sum(d_all), with all beneficiaries included and sum attributed quantities = X. Use active transaction seconds for checkout, cleaned area-times for cleaning and occupied volume-hours for storage; direct subdivision precedes sharing. Include idle/closed/failed periods in the prospective configuration pool. If the driver is unknown or zero, use only the positive, physically justified all-beneficiary capacity/reservation-time driver prospectively declared before opening that pool, covering closed/idle/failure intervals; absent such evidence the allocation is incomplete, never zero. Directly attributed X_c receives no second fraction. | cp_counter; cp_cleaning; cp_modules; raw_pool_X; d_c; d_all; idle/closed_seconds | attributable raw numerator | ghg-product-2011 |
| calc_meter | counter_ac | kWh_raw = (meter_end - meter_start) * traceable multiplier after reset corrections. Subtract a submeter only if its circuit is inside the measured parent boundary and remove it exactly once. Disjoint circuit readings are added without subtraction. Apply calc_share only to the remaining measured shared pool, convert 3.6 MJ/kWh and divide by Q once; independently reconcile whole-store electricity to direct circuits plus completion-module circuits. | cp_counter; meter_start/end; multiplier; parent_meter_id; circuit_id; reset_correction; Q | counter_ac in MJ per reference flow |  |
| calc_material | bag_ldpe; receipt_paper | Bag raw consumption = opening unused stock + acquisitions + unused returns - closing unused stock - intact unused supplier returns; reconcile actual issued, discarded and missing quantities, retaining rejected transactions. Paper raw consumed mass uses the same unused-roll balance on net-paper kg only: actual gross roll kg minus measured external tare and measured empty core kg for the actual BOM. Keep core acquisition/stock/dispatch in a separate carrier ledger. A supplier background per net-paper kg includes attributable core manufacture once; if that provider excludes core, the mandatory completion adds an explicit paperboard-core production row with actual attributed core kg and compatible provider, removing all overlap. Do not use catalogue roll weight or assume a coreless roll without actual evidence. LDPE consumption includes issued, discarded and unresolved missing bags; actual discarded bags enter waste_bag and do not gain another production input. Core kg and discarded bag kg have independently measured consignment/tare/fates. Printed opening/closing intermediate stocks are distinct from unused paper-roll stock; printed opening/closing intermediate stocks reconcile issued and failed prints separately, not as unused-roll stock. If the bag/paper mass is directly issued and attributable, do not apply the stock consumption balance a second time. Record actual formulation and unit mass from calibrated lot weighing. Attribute raw consumption once then divide by Q. | cp_counter; unused_stock_open; acquisitions; unused_returns; unused_stock_close; supplier_returns; printed_stock_open/close; paper_issued; failed_print_kg; roll_id; roll_BOM; roll_gross_kg; external_roll_tare_kg; actual_core_material; empty_core_net_kg; net_paper_kg; core_stock_open; core_acquired_kg; core_stock_close; core_dispatch_net_kg; core_background_mode; provider_roll_scope; actual_discarded_bag_consignment_net_kg; actual_paperboard_core_consignment_net_kg; bag_waste_generation_kg; bag_waste_stock_open/close; Q | bag and paper kg per reference flow |  |
| calc_dispatch | waste_carton; waste_film; waste_tag; waste_towel; waste_receipt; waste_bag; waste_receipt_core; waste_cleaner_bottle | For each actual state-specific consignment, dispatched kg = measured gross - actual tare. Sum attributed consignment net masses then divide by Q once. Independently check opening waste + generation - dispatched - closing waste = investigated residual; do not subtract stocks or generation again from actual dispatch. Tag+fastener is one whole carrier only where physically collected together; do not count components again. Original packaging production remains with its merchandise parent, but these real removal/treatment quantities remain. | cp_stock; cp_counter; waste_ticket; consignment_gross; tare; waste_open; generation; waste_close; Q | each actual waste carrier kg per reference flow | jrc-retail-2013 |
| calc_liquid | cleaning_water; cleaning_detergent; cleaning_effluent | Choose and record one effluent mode: direct whole-carrier net kg, OR measured discharged m3 * actual whole-effluent density kg/m3, OR full-liquid reconstruction in kg. Reconstruction = opening source-pool liquid + imported water + measured concentrate_to_liquid_kg + measured dirt/other source-pool mass entering liquid - closing source-pool liquid - measured evaporation - separately exported source-pool solution mass - other measured source-pool liquid exports. All terms are whole liquid/source-origin masses; exclude new external dry cloth/container mass and do not repeat water contained in concentrate. A volume water balance alone cannot reconstruct whole effluent mass. Direct discharge modes receive no evaporation/storage subtraction; supply balance is independent. Concentrate stock consumption = opening usable formulation + acquisitions - closing usable formulation - intact supplier returns; reconcile it to concentrate_to_liquid_kg + actual bottle_residue_kg + other evidenced formulation fates. Bottle residue is included once in whole bottle waste and is not cleaning effluent. Retain source formulation boundary and source package production once. Record out-of-pool liquid imports separately, allocate their treatment responsibility without presenting them as source-pool generation. Apply cleaned-area attribution once and /Q once. | cp_cleaning; effluent_mode; effluent_net_kg; effluent_m3; density_kg_m3; temperature; liquid_open/close; imported_water_kg; concentrate_kg; cleaner/dirt_import_kg; evaporation_kg; separately_exported_solution_kg; whole_liquid_exports; out_of_pool_import_kg; concentrate_to_liquid_kg; concentrate_stock_open; concentrate_acquired_kg; concentrate_stock_close; concentrate_supplier_return; bottle_residue_kg; Q | actual source-pool attributable whole-carrier kg per reference flow |  |
| calc_background | supplier_towel; external_towel; waste_towel; service_out | For original item i retain measured receiving net towel mass original_m_i (kg) and separate original pack BOM p_ik (kg of each physical carrier k per item). Assign exclusive original-item ownership indicators z_iS/z_iF/z_iT/z_iO summing to 1; do not turn descendants or internal moves into new original items. B_z = sum_i(original_m_i * z_iz), measured original-gate towel-kg equivalent, and P_zk = sum_i(p_ik * z_iz), separate original pack-carrier kg. Thus B_total = B_S + B_F + B_T + B_O and each P_total,k = sum_z(P_zk). These are physical activity amounts, never impact burdens; connect each to matching provider process per source unit only after compatibility checks. No impact value is added to kg/BOM, and one service Item(s) has no fixed kg. B_S/Q is disclosed separately for downstream successful-merchandise production and receiving transport; never assume 1 towel or nominal kg equals measured parent background. Add B_F/Q with actual upstream production, original packaging and same-gate inbound transport for retailer-responsible failed goods to completed retail service. B_T requires explicit recipient continuation; if unknown retain unresolved responsibility, not a zero or automatic credit. Return/resale revises this partition once, not a new receiving burden. Descendant waste carriers do not each reacquire the original towel background. | cp_stock; cp_transport; cp_modules; receiving_net_kg; original_m_i; p_ik; z_iS; z_iF; z_iT; z_iO; P_zk; pack_BOM; B_S; B_F; B_T; B_O; responsibility_owner; upstream_parent_trip; Q | disjoint successful-parent disclosure and failure background | ghg-product-2011 |
| calc_assets | completion modules | For each complete building/shelf/POS/lighting/HVAC/mop/bucket asset a, use current beneficiary exposure e_ac divided by expected total all-beneficiary lifetime exposure L_a: f_ac = e_ac/L_a, with persistent cumulative fractions <= 1 and L_a >= observed total exposure. Building exposure is occupied floor-area-hours including closure; shelf is occupied capacity-volume-hours; terminal/lighting/HVAC/tools use justified all-beneficiary capacity-hours including idle periods. Physically justified capacity/reservation-time drivers and every idle-period beneficiary are prospectively declared before the pool opens; do not choose a convenient retrospective fallback. On life revision, recompute and replace earlier version allocations; book signed beneficiary/period differences, never restart manufacture. At retirement use actual total all-life exposure E_a = sum(e_ab over every beneficiary and period), recompute every final fraction e_ab/E_a and replace all historical beneficiary allocations with signed corrections; distribute any rounding remainder over those same actual all-life exposures, never give 1 - prior fractions only to the latest period. Reconcile all final fractions = 1. Apply f_ac once to disjoint manufacture/installation source rows and separately once to actual terminal carrier/treatment responsibility, never f_ac squared. Direct terminal net weighing already excludes removed parts; component-BOM reconstruction is an exclusive alternative and removes evidenced parts once. Maintenance replacements, mop laundering, consumables and removed parts use actual event records, not unrelated masses combined into a fictitious complete device. Provider-included operations/maintenance/retirement are excluded from separate rows. | cp_assets; cp_modules; asset_id; exposure_current; expected_lifetime_total_exposure_L; allocation_version; prior_allocations; residual; terminal_mode; terminal_net_carrier_kg; component_BOM; maintenance_event_id; prospective_driver_version; pool_open_date; exposure_all_periods_beneficiaries; actual_all_life_exposure_E_a; signed_historical_corrections; Q | raw attributed asset/event/terminal source rows for calc_complete | ghg-product-2011 |
| calc_hvac | completion modules | Expand actual lighting/HVAC operating circuits, purchased heat or each fuel, each refrigerant species and maintenance/treatment carrier into distinct real cards with state, property/unit, direct records and provider exclusions. A leak into store air is an internal source, not automatically an elementary outside emission. For each actual species and circuit, choose one initial gate: recorded period-opening contained charge OR commissioning factory charge at commissioning gate, never both. A whole charged device entering during the pool starts its own initial-gate record; its contained receipt is not another refill on a pre-existing circuit. Circuit balance is opening_charge + measured virgin_charge_from_supply + measured_reused_recovery - closing_charge - measured_circuit_extraction - X_intact = total_circuit_loss. X_intact is actual species kg still contained in a complete device leaving at recorded retirement/transfer handoff. For each physical portion, contained-charge handoff and circuit extraction are mutually exclusive; actual partial extraction and residual intact handoff can coexist only as measured disjoint portions. Verify X_intact from traceable qualified service/charge records or calibrated recovery-characterisation measurements on a comparable independently sampled portion, with device ID, actual gate, state, uncertainty and named recipient; a nameplate maximum is not measured retained charge. Export X_intact inside the actual complete-device carrier/treatment boundary once, never as an elementary release or a second refrigerant transfer beside that whole carrier. Unknown contained charge blocks closure, not zero. Partition this measured residual by actual leak location into measured store_internal_source, direct_outside_source and unresolved_loss; do not assume an outdoor-unit leak enters room air. Recovery inventory separately closes recovered_open + circuit_extraction_received + external_recovery_received - recovered_close - reused_to_circuit - recovery_shipped_out - measured_recovery_losses = residual. Virgin supply inventory separately closes supply_open + purchases - supply_close - charge_to_circuit - supplier_returns - measured_supply_losses = residual. Link actual extraction and receipt IDs once; recovery_shipped_out leaves recovery inventory only, not the circuit again. Factory initial-charge production is included once in the complete-asset manufacture background; exclude it from separate operational refrigerant acquisition. Verify that asset provider includes the actual initial charge; if excluded, complete its manufacture module with the actual first-charge production source once and retain that boundary correction. Keep on-site internal stock/reuse internal and do not re-add original manufacture for reuse. For externally purchased reclaimed product refrigerant, use a declared recycled-content boundary: assign actual supplier recovery/reclamation, purification/conditioning and delivery to the recovered input kg; earlier virgin manufacture stays with its original prior owner and is not re-added. Verify supplier scope and remove included overlaps once. An external received waste refrigerant carrier is not a reclaimed product: record its actual recovery treatment and responsibility before any reusable product output, with separate verified state/type cards. Unknown provenance or provider scope blocks completion, never a zero-production assumption. Partition actual recovery/supply losses by their measured indoor/outside location too. Reconcile only store_internal_source plus actual indoor recovery/supply losses and measured other internal sources to store-air opening/closing species storage, captured/condensed species with actual terminal carrier, and measured outlet flux. For the raw absolute inlet/outlet mode, measure species concentration, calibrated carrier flow, gate, actual temperature/pressure and time coverage at both inlet and outlet; compute net room-to-outside transfer = integrated actual outlet species kg - integrated actual inlet/background species kg on the same declared basis. Actual inlet/background is measured or supported by bounded actual sampling with uncertainty, never assumed zero. Final outside flux is actual direct_outside_source plus that measured net room-to-outside transfer and actual outside recovery/supply losses, without adding internal generation again. A final differential or already background-corrected measurement is an exclusive mode and must not receive inlet/background subtraction again. Unresolved loss location or state blocks completion. Calibrated cylinder scales and each service interval capture additions/extractions/stocks; calibrated species-specific concentration/flow sampling at final outlet spans all actual operation and idle modes, with sampling uncertainty and nonzero unknown modes blocking completion. Direct final differential measurements or already blank-corrected rates are exclusive alternatives to inlet/outlet subtraction; remove background once, retain signed negative findings for investigation, and do not clamp or credit them. Recovery sent out is not another contained-transfer subtraction. Condensate entering cleaning drain is a disjoint measured whole carrier or explicit portion of that drain, never both an air emission and liquid export. Unknown final destination, recovery or provider scope blocks complete inventory. | cp_assets; cp_cleaning; cp_modules; refrigerant_species; charge; refill; recovery_sent_out; internal_air_storage; captured_condensate; final_outside_flux; measurement_mode; blank_correction; initial_charge_mode; opening_charge; commissioning_factory_charge; measured_virgin_charge_from_supply; measured_reused_recovery; closing_charge; measured_circuit_extraction; total_circuit_loss; store_internal_source; direct_outside_source; unresolved_loss; leak_location; recovery_loss_location; supply_loss_location; measured_outlet_flux; recovered_open; circuit_extraction_received; external_recovery_received; recovered_close; reused_to_circuit; recovery_shipped_out; measured_recovery_losses; supply_open; purchases; supply_close; charge_to_circuit; supplier_returns; measured_supply_losses; extraction_receipt_id; species_sampling_intervals; sampling_uncertainty; actual_other_internal_sources; store_air_open/close; captured_species_kg; X_intact; contained_handoff_event_id; contained_handoff_species_kg; charged_device_recipient; charge_evidence_method; charge_uncertainty; initial_charge_provider_scope; external_recovered_provenance; external_recovered_type; reclamation_background_source; prior_virgin_owner; inlet_species_concentration; outlet_species_concentration; inlet_carrier_flow; outlet_carrier_flow; gas_temperature_pressure; inlet_background_species_kg; outlet_species_kg; net_external_species_kg; outside_measurement_mode; Q | disjoint actual operation and terminal exchange rows | jrc-retail-2013 |
| calc_transport | completion modules | For each actual loaded trip calculate sum(cargo_kg * route_km)/1000 t*km with declared cargo/capacity allocation over all beneficiaries; bulky towel loads may require measured occupied-volume/capacity allocation with explicit evidence. Verify provider includes actual empty legs and stationary idling. If not, add non-overlapping measured empty vehicle-km and stationary idle hours with actual fuel/operation source records; zero t*km never makes empty activity zero. Use either provider transport package with evidenced fuel/assets/maintenance scope OR expanded actual fuel, vehicle operation and asset rows, removing overlaps by trip ID. Upstream successful-goods receiving trips stay with parent; failure fraction follows calc_background once. | cp_transport; cp_modules; trip_id; cargo_mass_by_beneficiary; occupied_volume; rated_capacity; route_km; loaded/empty; stationary_idle_h; fuel_id; fuel_kg; provider_included_return_empty; overlap_ids; Q | disjoint actual raw transport activity source rows | ghg-product-2011 |
| calc_complete | all processes | Mandatory modules are premises/building manufacture-installation/retirement; shelves; checkout terminal; lighting; HVAC; reusable floor-cleaning tools and their actual maintenance/laundering; non-overlapping logistics; waste/effluent transport and treatment; and B_F upstream manufacture/original packaging/receiving transport. For every module m and atomic source row j, restore raw R_mj = normalized_x_mj * original evidenced denominator D_m, or use evidenced raw R_mj directly, never both. For a source-wide total apply the justified all-beneficiary driver once to obtain A_mj; already attributed rows keep A_mj = R_mj. Remove exact duplicate source_exchange_id/version/pool and all overlaps in circuit/asset/trip/treatment registers. Sum only identical actual exchange, direction, flow type, property, unit, state and boundary: N_j = A_direct_j + sum(A_mj). Convert compatible units explicitly, retain distinct species/carriers, and calculate final N_j/Q once. Never sum kg with MJ, impacts with activities, or raw with normalized rows. Append actual atomic cards/protocols/calculations in both languages and sync before a complete dataset claim. Missing raw denominator, original source rows, method, route or provider boundary blocks completion; maintain partial label and list unresolved modules. | cp_modules; cp_assets; cp_transport; cp_stock; cp_cleaning; cp_counter; module_id; version; source_exchange_id; source_pool; normalized_quantity; original_denominator_D; raw_quantity; allocated_driver; all_beneficiary_driver; overlap_register; Q | completed compatible atomic inventory per reference flow | jrc-retail-2013; ghg-product-2011 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all inventory rows | Reference service and each unbound row need official direct-read UUID/type/state/property/unit/medium verification plus matching supplier formulation/specification and quantity/background evidence before dataset release. No service identity can use a towel-production UUID. Counter AC identity alone supplies no provider mix. | Direct original records and integrity receipts; supplier SKU/BOM/SDS; quantities and compatible background boundary |
| quality_cohort | service_out; all processes | Declare prospective pool and cutoff before allocation; retain failed/zero-sale events and reconcile late acceptance changes to original numerator and denominator. Unknown retained/customer failure state or background owner blocks full inventory. | Item/event lineage, acceptance history, stock and responsibility ledgers, change log |
| quality_measurement | all inventory rows | Calibrated raw measurements and uncertainty must cover actual period, configuration, moisture and temperature. Manufacturer nominal dimensions/gsm/package masses, shrinkage/care limits or first-wash advice are not inventory defaults, retail loss factors or claims that washing occurred. Investigate residuals, never silently set unknowns to zero. | Calibration, lot weights, observation, original field records and signed residual investigation |
| quality_completion | all processes | Each conditional card has positive/negative presence evidence. Complete inventory needs disjoint modules and actual row expansion under calc_complete. Asset residuals, maintenance parts, empty transport, HVAC final outside fates and whole-liquid balances must reconcile; unknowns remain explicit and prevent complete status. | Module/source-row register, lifecycle ledger, trip records, treatment tickets, bilingual actual cards and overlap audit |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| valid_reference | service_out | Require one declared actual SKU/configuration, unique positive Q and exact service/reference-output display match. Q = 0 is an explicit unnormalizable result; do not publish normalized values. Unresolved service UUID is candidate identity only, not verified dataset identity. |  |
| valid_accounting | all processes | Require calc_stock physical balance separate from calc_background ownership and calc_accept denominator, plus original-cohort late corrections. Confirm every original item background is assigned once and no ancestor burden is duplicated among waste descendants. | ghg-product-2011 |
| valid_projection | all inventory rows | Require all mandatory duties in supported rule/protocol/calculation/quality fields, matching bilingual IDs, formulas, qualifiers and conditions. Every card links exactly one real protocol process. Preserve verified UUID/property/unit chain and unresolved identities; unknown quantities, absent sources and partial modules are not passed completeness. |  |
| valid_module | all processes | Before claiming full service, apply calc_complete and independently verify raw-denominator restoration, source-row unit compatibility, exact-ID deduplication, final single normalization, persistent assets, actual empty legs, HVAC external destinations and whole-liquid evidence. Disclose exclusions and unresolved uncertainty, never a complete-standard conformity claim from these design rules. | jrc-retail-2013; ghg-product-2011 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Partial incremental foreground retail service; only calc_complete-qualified expansion may claim complete retail service |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Combine with disclosed B_S/Q successful-goods parent and non-overlapping modules on the same final denominator |
| excluded_use | Textile manufacture, towel use/washing/drying, broad CPC leaf equivalence, curtain installation, specialist stores or delivery services |
| required_metadata | actual supplier SKU and lot; colour; dimensions and surface density; cotton composition including attached trims; finish; measured receiving net mass and moisture condition; original tag/tie/wrapper BOM and configuration; receiving gate; store and counter route; pool dates and configuration; final acceptance and return cutoff; final fate and background owner; partial boundary and completion-module versions |
| required_quality_disclosure | Original measurements, unknowns and identities; cohort corrections; asset/version ledgers; module coverage and missing rows; geography/technology/period; uncertainty and parent background responsibility |
| update_trigger | SKU/pack/state change, route or supplier change, late return, meter correction, lifetime revision or new module/provider evidence |

## 11. Data Sources

The retained manufacturer and retailer sources document examples of this product family and the explicitly cited technical distinctions. They do not restrict eligibility to those brands/models or supply default numerical inventory for other configurations. Actual product and supplier evidence remains required under b_product_family.

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| ecover-cleaner-formulation | handbook | ECOVER Belgium N.V., Technical Data Sheet, 24/05/2017, formulation3000714, 5L barcode5412533000061; https://cdn-s1.lyreco.com/staticswebshop/sds/ITIT/TS_ITIT_4192577_2018-04-03.pdf | One historical real formulated floor cleaner and physical container; actual batch/SDS/formulation and package must match before use. No dose, concentration fraction, package weight, density or present-day formulation equivalence adopted |
| ikea-towel-spec | handbook | IKEA Taiwan, VÅGSJÖN 405.762.55; https://www.ikea.com.tw/en/products/bath-textiles/towels/vagsjon-art-40576255 | Real illustrative cotton terry object and nominal specification only; actual receiving mass, packaging, composition and retail route require primary collection; care advice is outside retail process |
| jrc-retail-2013 | official_guidance | European Commission JRC, Best Environmental Management Practice in the Retail Trade Sector, EUR 25998 EN, 2013, executive summary and lighting section; https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf | Qualitative retail energy, supply-chain, logistics and waste scope; no benchmark values or claim that this source mandates the PCR equations |
| ghg-product-2011 | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard, 2011, chapter 9 p.63; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Subdivision before allocation and physical relationships; specific cohort, asset and completion equations are declared PCR collection design, not quotations or full-standard conformity |
