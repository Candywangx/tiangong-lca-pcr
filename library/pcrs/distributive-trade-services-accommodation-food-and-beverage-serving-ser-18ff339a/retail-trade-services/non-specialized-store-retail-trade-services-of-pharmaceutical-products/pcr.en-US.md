---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-pharmaceutical-products
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Custody and checkout retail services for factory-sealed acetaminophen tablet product packages

## 1. Scope and Applicability

This PCR defines an explicitly partial service module for finished acetaminophen tablet bottles in complete original sealed retail cartons, with actual strength/count/configuration fixed separately per homogeneous pool, in an actual mixed-assortment physical store. It is a method for custody, traceable qualified handover, source responsibility and measured failed intact packs, not a medicine production or use recommendation. The product label establishes real formulation/package/storage distinctions; it supplies no actual LCI. Pharmaceutical lot/expiry/recall and seal-dependent acceptance require this scope-specific method rather than a noun substitution in a general retail rule. Other retail PCRs for food, tools or packaging do not establish equivalence for original pharmaceutical source vectors or returned-pack eligibility.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-pharmaceutical-products |
| classification_refs | CPC3.0:62173; Non-specialized store retail trade services, of pharmaceutical products; narrower subset of group352-related services |
| covered_products | Manual ambient custody/checkout of intact unopened finished acetaminophen tablet bottles in complete original retail cartons; actual strength, count, label/product code, lot, formulation and seal configuration are fixed separately per homogeneous pool. Expiry/recall quarantine is included only while the complete original carrier remains intact. |
| excluded_products | APIs, combination-active products, blister/pouch/bulk/loose or opened forms, sterile/injectable/liquid/cold-chain goods; dispensing, clinical/prescription services, specialist pharmacies, online/delivery; successful-goods upstream and consumer stages. |
| representative_product | Custody and checkout retail services for factory-sealed acetaminophen tablet product packages; actual supplier, SKU/configuration, lot and complete original BOM verified separately for each homogeneous stratum. |
| production_route | Mixed-store receipt → seal/lot/storage/expiry verification → ambient shelf or segregated quarantine → manual counter/POS acceptance or actual supplier/waste handover; full support completion mandatory for complete retail result |
| market_state | Finished solid formulation in original unopened carton/bottle/foil seal; documented lot and remaining expiry, no medicinal-suitability inference |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the declared partial custody and checkout service for the actual homogeneous original pack |
| How much | One distinct finally valid accepted original-pack service; Q services in the prospectively fixed pool |
| How well | Actual SKU/lot/expiry/seal/storage and final acceptance evidenced, no unreviewed recall/return eligibility; no dispensing or safety approval |
| How long or cycle | Declared receiving-to-counter custody pool with complete late-event and original-source history; final accepted service adjusted at disclosed cutoff |
| reference_flow_link | service_out |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Mixed-store custody and checkout service for one sealed acetaminophen tablet retail package |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | actual mixed-store channel; acetaminophen tablet retail pack; actual supplier/lot/configuration/BOM/source-vector version; original_pack_id; intact carton/bottle/foil seal; actual storage and expiry/recall state; receiving gate and inbound boundary; pool/cutoff/Q; final acceptance version; S/F/T/O original responsibility; partial-module exclusions and completion status |

Declare every qualifier in dataset metadata, process notes or reference-flow description. Missing qualifiers make the reference incomplete. Reference service flow UUID is unresolved; support property/unit UUIDs do not bind its identity.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| count_basis | service_out; failed_pack; gross_handover; supplier_handover | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Count the actual defined service/original complete pack object; never tablets, dosage mass, revenue or uncorrected physical handovers as Q. Use valid_count and one_reference. |
| energy_basis | core_ac | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Meter actual kWh and use1kWh=3.6MJ; electricity is not kg and is not shared by final sales count before source attribution. |
| carrier_mass | sealed_waste | Mass | kg | Direct actual full carrier net kg, excluding separately weighed external tare only; nominal active ingredient cannot substitute carrier mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual delivered intact finished acetaminophen tablet retail pack packs at the store receiving gate, source/lot/BOM and inbound scope identified |
| starting_condition_role | Declared service gate; raw custody events retained separately from F background input |
| product_classification_scope | Narrow actual intact ambient mixed-store service subset of CPC3.0:62173, not all pharmaceutical retail |
| recursive_input_rule | Do not recurse service flow into itself. Only explicit gross_handover and supplier_handover satellites are uncharacterized. failed_pack requires original F supplier vector including receiving-gate inbound; completion consumes disjoint real source vectors |
| upstream_dataset_requirement | Exact original homogeneous formulation/full packaging source, actual supplier/time/geography/technology and receiving transport; public label is not this dataset |
| disclosure | Partial core scope, omitted required modules/status, measured raw totals, Q/cutoff/revisions, state/source/provider gaps, allocation versions and all completion overlap exclusions |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_product_family | all inventory rows | This PCR applies to the declared product family across manufacturers and brands. Brand, model, catalogue article, SKU and trade name identify actual study data, not an exclusive eligibility condition. The material/function, product state, fixed format where specified, process/channel and gate conditions below still apply. Establish separate homogeneous supplier/configuration/edition/package-BOM strata and their matching original background vectors; do not multiply a mixed-SKU count by one specimen vector. Use actual measured quantities and supported conversions. Manufacturer examples and their masses, dimensions, ratings, formulation or packaging claims are illustrative only, never class-wide defaults or complete BOM/LCI. Any actually different component, support chemical, package or carrier requires its concrete atomic card, matched property/unit, collection and nonoverlapping source boundary before completeness; an actual state or route outside the declared family requires a separately reviewed extension. Unknown applicability, identity or evidence remains unresolved. This candidate generalization does not establish independent scientific or translation approval. |  |
| scope_gate | all inventory rows | Apply to actual mixed-assortment non-specialized physical stores and manual ambient receipt/shelf/quarantine/counter handover of original sealed finished acetaminophen tablet bottles in complete retail cartons. Any brand and product code within that family is eligible; separate supplier, formulation, strength, tablet count, lot and complete package/source-vector version per pool. This is finished solid formulation, never raw API or a combination-active product. No opening, counting, dispensing, compounding, prescription review, clinical advice, online order or delivery is included. Verify actual storage and seal requirements against the actual label and lot; neither this PCR nor the example label approves use of a medicine. A different product code requires its own data matching, not exclusion by brand. | un-cpc3-62173; dailymed-tylenol-37806 |
| partial_scope | all inventory rows | This is an explicitly partial incremental custody/checkout module. It includes core_ac and original failure background through failed_pack, plus measured physical satellite outputs gross_handover and supplier_handover and actual sealed pharmaceutical waste dispatch sealed_waste. Only gross_handover and supplier_handover are non-characterized custody satellites. Actual original receipts and physical returns are raw QA events. failed_pack is a characterized Product input, never excluded as a satellite. Successful merchandise production S is outside this service, and consumer use/travel/end-of-life is outside. No complete-business result is permitted until completion_gate and completion_sum pass. | ghg-product-2011 |
| lot_gate | service_out; failed_pack; gross_handover; supplier_handover; sealed_waste | Assign immutable original_pack_id, source_id, lot, expiry, actual NDC/carton/bottle/seal configuration, receiving date and original source vector to each pack. Read actual label and supplier lot/BOM; original tablets plus excipients/coating, bottle body/closure/liner/foil/label/adhesive/carton and actual included inserts form the complete source. Nominal100 count or500mg cannot substitute measured original complete pack mass, contents mass, packaging BOM or receiving background. A whole-pack supplier vector is valid only for its full identical object. Component manufacturing vectors are an exclusive alternative requiring supplier-specific quantities and conserved original IDs, never mass fractions of a whole environmental vector. | dailymed-tylenol-37806 |
| state_gate | service_out; gross_handover; supplier_handover; sealed_waste | Record actual unopened carton and inner foil seal, visible damage, expiry, recall notice and temperature history at every receipt/release/return/quarantine event. Final service requires documented valid handover acceptance for this actual pack; re-release of a return requires independently recorded eligibility and authorized decision, never presumed from a refund or intact appearance. Recall, expiry or other invalidation can revoke acceptance without a physical return. A purely financial adjustment with valid acceptance does not revoke it. Never-opened intact expired/recalled packs may enter the specified waste card only under actual receiver acceptance; broken/opened/wet/contaminated packs or loose tablets require a state-specific atomic extension, bilingual sync and new matching receiver/provider evidence before completeness. | dailymed-tylenol-37806 |
| source_fates | failed_pack | At the same original receiving gate partition every original whole-source pack into exactly one current responsibility S successful final accepted goods, F retail-pool-owned failure, T named continuing recipient/asset responsibility or O unresolved/open source stock. S backgrounds are excluded from the incremental service; a separately declared GOODS system adds original S vectors exactly once. F includes original manufacturing and transport to this gate exactly once via failed_pack. T needs signed source continuation and recipient/version; a supplier physical handover does not itself prove T. O blocks final source completeness and is never zero. Final failure may remain at a customer without accepted service; record real recipient, intact state, source ownership and treatment continuation, never create retailer waste merely from a revoked acceptance. | ghg-product-2011 |
| pool_gate | all inventory rows | Prospectively fix site/configuration/SKU/service-period pooling including closed, idle, refused, failed, lost and zero-sale cohorts. Retain costs and quantities in the same-configuration pool until an evidenced denominator exists; Q=0 is unnormalizable and must be reported with raw numerators. Do not erase or transfer a zero-output cohort merely to improve the result. A late return, recall or revocation replaces the original pool numerator, Q, fate and version using actual event dates; do not charge its background again to a new resale cohort. Distinct final-valid original IDs determine Q, with at most one final-valid service per original ID. | ghg-product-2011 |
| utility_gate | core_ac | Core electricity is measured only for explicitly identified custody/checkout circuits and the mains-powered temperature logger, with boundary map excluding external completion circuits. The allowed foreground route has no combustion, refrigeration, refrigerant charge, compressed-gas use, powered goods testing or tablet release. Signed equipment/site walkthrough, utility map and storage records must substantiate absence, including shared support; an unknown or actual occurrence blocks this route until a reviewed state/species/path-specific extension. External grid/provider emissions remain their upstream scope. No empty gas template, assumed zero leak or internal-air-to-outdoor equivalence is allowed. | jrc-retail-2013 |
| completion_gate | all inventory rows | Before any complete retail-service claim, cp_completion must contain a signed presence/absence and boundary/overlap matrix for premises/building and fixed lighting/ventilation/resistance-heating fixtures, shelf/quarantine cabinet, checkout/temperature logger, ICT/network, payment backend, camera/security/archive, administration, cleaning/water/materials, receipts/bags/transport packaging and all waste/asset/transport stages. Each actual homogeneous model or bounded real provider packet needs its own bilingual atomic cards and single-process protocol, actual provider contract/model/BOM, measured raw unit and inventory vector/source version; generic names are not complete modules. Evidence of a real complete bundle may preserve it intact only when its exact constituents, denominator, installation/operation/maintenance/end-of-life and exclusions are contractually evidenced. Absent modules require signed observations; missing quantities, identity, receiver or scope block completeness. Apply completion_drivers, asset_life, consumable_owner, transport_owner, liquid_carriers and completion_sum; downstream modeller may supply measurements but cannot choose another denominator/ownership rule. | jrc-retail-2013; ghg-product-2011 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| custody | Lot-controlled intact custody and counter checkout | required | Actual scope and prospective pool | Core partial service and source responsibility | service_out |
| quarantine | Intact pharmaceutical quarantine and actual dispatch | conditional | Actual intact waste dispatch and receiver acceptance | Separate physical carrier without repeating manufacturing background | service_out |
| support | Mandatory completeness completion gate | required | Before complete retail-service claim; partial module discloses gaps | Intake real atomic modules and full-history ownership, not combined fictitious flow | service_out |

### Process: Intact custody and checkout (`custody`)

#### Inputs

##### Product flows

###### finished acetaminophen tablets in the sealed original plastic bottle and carton, at receiving gate (`failed_pack`)

Original failure manufacturing plus actual inbound responsibility at the declared receiving gate. Actual complete configuration/provider vector and N_F remain foreground requirements.

- Selected flow: finished acetaminophen tablets in the sealed original plastic bottle and carton, at receiving gate
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: N_F / Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_goods
- Sources: dailymed-tylenol-37806; ghg-product-2011

###### Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca` (`core_ac`)

Actual custody/checkout circuits including mains logger only; completion electricity pools stay disjoint.

- Selected flow: Electricity, alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: E_core_MJ / Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_meter
- Sources: jrc-retail-2013

#### Outputs

##### Product flows

###### Mixed-store custody and checkout service for one sealed acetaminophen tablet retail package (`service_out`)

Reference service for one distinct final-valid pack ID, including its attributable failed/idle effort under the prospective pool.

- Selected flow: Mixed-store custody and checkout service for one sealed acetaminophen tablet retail package
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_goods
- Sources: un-cpc3-62173; dailymed-tylenol-37806

###### Intact sealed acetaminophen tablet retail package physically handed to customer (`gross_handover`)

Physical customer custody handovers remain separate from the corrected service and source background ledgers. An original pack can have several physical handovers but at most one final-valid service.

- Selected flow: Intact sealed acetaminophen tablet retail package physically handed to customer
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: N_gross_customer_handover / Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_goods
- Sources: dailymed-tylenol-37806

###### Intact sealed acetaminophen tablet retail package physically returned to supplier (`supplier_handover`)

Conditional only on actual intact supplier return with matching commercial/non-waste receiving state. If actual waste, use a matching waste extension rather than this product satellite.

- Selected flow: Intact sealed acetaminophen tablet retail package physically returned to supplier
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: N_supplier_handover / Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_goods
- Sources: dailymed-tylenol-37806

### Process: Intact pharmaceutical quarantine (`quarantine`)

#### Inputs

#### Outputs

##### Waste flows

###### Intact unopened acetaminophen tablet retail pack pharmaceutical waste in original bottle and carton (`sealed_waste`)

Conditional actual sealed expiry/recall quarantine dispatch with signed receiver state/constituent/treatment acceptance. Provider binding and actual mass are unresolved until site evidence; do not infer hazardous classification or disposal route.

- Selected flow: Intact unopened acetaminophen tablet retail pack pharmaceutical waste in original bottle and carton
- Flow property / unit: Mass / kg
- Amount rule: W_dispatch_kg / Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_waste
- Sources: dailymed-tylenol-37806; jrc-retail-2013

### Process: Support completion gate (`support`)

This process holds the completion obligation and cp_completion intake. No invented full-business packet is an inventory exchange. Each actual module must be expanded under completion_gate into its own concrete process/cards/single-process protocol before a complete dataset, retaining source IDs and the fixed calculations.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| core_partition | core_ac | Direct subdivision/meters first. Partition each actual source circuit numerator into separately measured active, stationary-idle and fixed source pools whose kWh sum equals the parent. For dedicated pack scan/handling active load use measured line-active device seconds; shared multi-SKU actions use actual line-processing seconds with shares summing1 per unique event. Idle checkout/logger/custody fixed load uses reserved equipment seconds per beneficiary (including closed/idle/error periods) from prospective reservation logs. Do not sum active seconds, area-hours and bytes into one driver. All beneficiaries and failed/no-sale reservations remain; unknown/zero total driver with nonzero source blocks final allocation. Subtract a submeter only from a parent that actually contains it, never again from an already disjoint source. | ghg-product-2011 |
| completion_drivers | all inventory rows | For completion electricity/material/provider numerator source classes, first measure disjoint active/idle/fixed pools in the source unit and reconcile to the full parent. Facility fixed lighting/ventilation/resistance heat uses actual served-zone m2*h reservations across all beneficiaries; dedicated task energy uses measured device-active seconds, idle devices reserved seconds. ICT active processing and administration use actual line/task processing seconds; a real shared homogeneous administration batch is allocated by measured source-line processing seconds divided by total seconds of every actual beneficiary, shares summing1 per unique batch, never the whole batch per SKU. Idle/fixed backend uses reserved service-capacity seconds. A payment attempt serving a basket is one event with measured source-line processing seconds/total seconds, never a full attempt per SKU; failed authorizations remain. Network packet uses either actual provider traffic GB with GB=10^9bytes (GiB=2^30bytes) or uniquely reserved bandwidth Mbps*h if that is the actual contractual denominator; mutually exclusive, no overlap with its included electricity. Build each camera capture-period beneficiary map from time-stamped actual shooting-zone/field-of-view drawings and measured served beneficiary display/custody footprint m2 within that field, multiplied by its actual covered seconds. Allocate each captured-byte source by those same-unit m2*s coverage quantities across ALL actual beneficiaries in that shooting interval, retaining overlapping beneficiaries only through a documented disjoint zone/time partition and including empty reserved space in its original beneficiary reservation. Freeze source IDs, interval, zone geometry, complete driver totals and map version for that original capture period; unknown coverage blocks allocation. Camera active source allocation uses measured captured bytes with this frozen map; storage uses actual byte*h retained with the same capture map, including no-sale periods, not later sales. Internet access alone cannot stand for payment/security/admin services. For every source class c and beneficiary h use q_c_h=x_c*d_c_h/sum_all_h(d_c_h) with one same-unit driver; sum compatible attributed quantities only after allocation. | ghg-product-2011; jrc-retail-2013 |
| asset_life | all inventory rows | Every actual homogeneous asset/model/BOM/scope has a persistent all-beneficiary lifetime ledger. Use exposed reserved operating hours e_a_h and expected lifetime hours L_a for devices/cabinet; served area*time e_a_h and expected lifetime area*time L_a for a complete building; cleaned-area m2 for reusable cloth, never copy incompatible units. Provisionally f_old_h=e_a_h/L_a and cumulative fractions<=1. At final retirement replace EVERY historical beneficiary fraction with f_new_h=e_actual_a_h/E_a where E_a=sum_all_h(e_actual_a_h); update every original pool by delta_h=f_new_h*V_new-f_old_h*V_old, with all intermediate version replacements recorded. A residual1-sum_old_f is QA only, not final allocation. Separate manufacturing/installation V, measured operations, actual event repairs and actual terminal carriers. A complete life package evidenced to include a stage excludes the matching separate stage. Actual independent asset/repair/retirement transport first belongs to that same asset/event then follows the same historical fractions and replacements, never all current retirement Q. Whole terminal direct net weighing and complete BOM reconstruction are exclusive; do not subtract removed parts twice or turn unrelated repair masses into a complete device. | ghg-product-2011 |
| consumable_owner | all inventory rows | Additional actual receipt paper, bags and transport packaging require specific model/material/component or evidenced complete-package cards before completeness. Assign manufacturing AND inbound transport once at first actual use to its original pool; unopened unused stocks/returns/transfers retain unassigned original source. Separate unused rolls/sheets from printed WIP; reused packaging never repeats first manufacture/inbound. Printed WIP transfers actual original paper and printing-meter sources with IDs/version replacement, so later withdrawal never charges again. Net paper excludes actual cores and separate wrap/cartons, not thermal coating. Direct actual net waste dispatch kg is the exchange; generation/opening/closing held waste is QA only. Cover source-derived discards in measured retained stock/customer handover or contract-admitted real mixed carrier; separate carriers are disjoint. | jrc-retail-2013 |
| transport_owner | all inventory rows | Each transport source records attribution_level: unallocated_trip, consignment, parent_owner or exact_pool, plus trip/segment, loaded mass and distance, actual capacity unit, stationary idle and empty routes, all beneficiaries and provider included stages. Subdivide first. For a shared trip source X_j in its own unit use measured reserved capacity*time d_j_s including empty/idle reservations to allocate X_j_s=X_j*d_j_s/sum_all_s(d_j_s); d uses one actual capacity unit times hours, stationary idle duration is positive. Already-consignment attribution skips trip allocation only. Next assign original goods S/F/T/O, consumable first-use or asset historical fractions under their own rules. Skip owner multiplication only with evidence already assigned to the exact original responsibility/pool/version. Loaded t*km alone does not cover actual empty km; require provider empty/idle inclusion or a separate measured vehicle-km/h card with overlap removed. Failed_pack includes F inbound once; actual independent waste dispatch transport belongs to that waste source, without reapplying F to already-direct waste kg. | ghg-product-2011 |
| liquid_carriers | all inventory rows | Site cleaning completion uses actual individually identified formulation and equipment cards with supplier composition and measured acquisition/first-use. Keep source-formulation kg in used/spilled/rinsed/retained-container/dispatched-container-residue/unused/returned fates disjoint by final state and original IDs; used-to-rinsed is replacement, not two destinations. Added rinse water/dirt is not formulation-origin kg. Water import is actual inlet-meter volume and internal reuse is not subtracted again. Effluent exchange uses direct net carrier weighing or actual discharge V*rho with same-state density and temperature, mutually exclusive; no water-only balance substituted as whole liquid. Entire wet liquid/wipe/container kg differs from formulation kg and is not multiplied again by source composition. Unknown discharge/evaporation/storage remains a separate supply check, never silently zero. Actual mixed waste requires signed receiver acceptance of constituents/state and matching complete treatment scope, not a photo/license. | jrc-retail-2013 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_goods | custody | failed_pack; service_out; gross_handover; supplier_handover | immutable pack/custody/source ledger | original_pack_id; source_id; lot; NDC; configuration; seal; expiry; recall_id; temperature_history; receipt_date; event_id; event_date; event_type; physical_recipient; physical_state; original_pool; acceptance_version; final_valid; cutoff; supplier_vector_id; V_s; N_original_s; N_S_s; N_F_s; N_T_s; N_O_s; G_close; G_open; N_receipt; N_customer_return; N_transfer_in; N_gross_customer_handover; N_supplier_handover; N_transfer_out; N_condemn; N_confirmed_missing; R_goods; measured_original_pack_mass_kg; measured_contents_mass_kg; actual_component_BOM; receiver_source_continuation; method_mode |Scan/read actual SKU/lot/seals and supplier BOM/receiving documents per original pack. Weigh traced complete original packs and any component checks on calibrated balances without replacing complete mass by active strength; do not open service stock to infer formulation LCI. Link POS acceptance, recall/expiry/return/retention records and signed continuation to the same immutable IDs. Full stocktake plus all movements, including no-sale events; unknowns remain open. Retain raw counts/masses and typed physical_stock; valid_count gives Q; failure_source gives N_F/B_F; one_reference divides once per reference flow. cp_waste links condemnation event IDs without repeating raw count collection. | Item(s); kg | Every movement/acceptance revision; daily stock reconciliation; cutoff recheck | Complete declared pool and late-event revision history | One declared mixed-store SKU configuration; all original sources and recipients | per reference flow | Original labels and lot photos; calibrated weighing records; POS event versions; signed stock/recipient/source reconciliations |
| cp_meter | custody | core_ac | meter/source-class driver ledger | source_meter_id; source_id; source_class; parent_boundary; meter_start; meter_end; K_c; d_c_h; all_beneficiary_id; active_seconds; reserved_seconds; closed_idle_seconds; event_id; line_processing_seconds; attribution_level; original_pool; version; calibration; missing_intervals |Boundary-audit each circuit and log calibrated interval/plug meters through occupied/closed/idle/failure periods. Synchronize unique line actions and all beneficiary reservation clocks. Directly measure source-class pools; verify their kWh sum and driver units before allocation. No theoretical nameplate energy or unexplained zero missing intervals. core_partition then electricity_total yields raw attributable E_core_MJ; one_reference E_core_MJ/Q per reference flow. | kWh; s | Continuous interval metering; event clock; each bill/cutoff reconciliation | Entire same-configuration pool including zero output | Only mapped custody/checkout and mains logger circuits | per reference flow | Meter calibration and circuit diagram; actual operating logs; full-source/driver reconciliation |
| cp_waste | quarantine | sealed_waste | typed quarantine and actual dispatch ledger | event_id; original_pack_id; source_id; waste_state; expiry_recall_reason; seal; receiver_id; acceptance_contract; constituent_scope; provider_treatment_scope; tare_kg; gross_kg; W_dispatch_kg; W_open_kg; W_close_kg; W_condemn_kg; W_received_kg; W_other_exit_kg; W_missing_kg; R_waste_kg; transport_source_id; attribution_level; actual_recipient; dates; calibration |Quarantine without changing original source IDs; obtain actual signed receiver acceptance for intact full formulation/bottle/carton and provider scope. Directly weigh each complete dispatched net carrier on calibrated scale (gross minus actual separately measured outside tare). Independently weigh condemnation/opening/closing waste; link to cp_goods event counts, not count=kg. No dispatch inferred from generation. Direct W_dispatch_kg is numerator; physical_stock mass balance is QA; one_reference divides by common Q once per reference flow. | kg | Every condemnation and dispatch; daily held-stock record; cutoff reconciliation | All quarantine and waste stock over declared pool and revisions | Actual segregated intact pharmaceutical carrier and real receiver | per reference flow | Calibrated scale records; signed consignments/receiver acceptance; original pack and event links; treatment/transport exclusions |
| cp_completion | support | completion extensions | mandatory applicability/module/asset/provider ledger | module_id; source_id; actual_model; complete_BOM; real_contract; signed_presence_absence; boundary_constituents; process_id; flow_role; actual_property_unit; raw_numerator; z_m_j; D_m; U_m_j; U_m_j_h; C_core_j_h; Q; source_class; x_c; d_c_h; all_beneficiaries; served_zone_m2_h; active_seconds; reserved_seconds; payment_event_id; line_processing_seconds; byte; byte_h; GB_GiB_mode; Mbps_h; capture_period_map; shooting_zone; field_of_view; covered_footprint_m2; covered_seconds; disjoint_zone_time_partition; capture_map_version; administration_batch_id; all_line_processing_seconds; asset_id; e_a_h; L_a; e_actual_a_h; E_a; f_old_a_h; f_new_a_h; V_old_a; V_new_a; A_old_h; original_pool; version; event_id; lifecycle_stage; first_use_id; unused_stock; printed_WIP; printing_source; formulation_origin_kg; dispatched_container_residue_kg; water_import_V; discharge_V; rho; temperature; wet_carrier_mass_kg; transport_source; attribution_level; trip_segment; actual_capacity; loaded_mass; distance; stationary_idle_h; empty_km; owner_fraction; receiver_acceptance; measurement_calibration; missing_fields | Inspect entire actual store/support providers and sign the exact module matrix in completion_gate. For each real homogeneous object/packet collect model/BOM/contract, calibrated original source quantities, complete all-beneficiary drivers, lifetime history and direct consignment evidence. Expand into atomic cards with a new single-process protocol view carrying the same original record/source IDs and exact flow_role list; cp_completion is an intake/gate protocol, not a fictitious combined flow. Apply fixed completion_drivers, asset_life, consumable_owner, transport_owner and liquid_carriers. Unknown presence/quantity/contract or a generic bundle blocks completion. | Separate actual source units; never sum unlike dimensions | Every source event; continuous operation clocks; each period and lifetime revision | Full module history including closed/failed/no-sale and all historical pools | All actual necessary facilities, ICT, payment, security, administration and consumables | Keep raw source numerators, perform one fixed ownership attribution then completion_sum with core numerators; divide once by Q per reference flow after same-unit source deduplication. | Signed actual contracts/scope matrix, real model/BOM, calibration, all-source/beneficiary reconciliation, historical version replacements, extension cards/protocol parse review |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| valid_count | service_out | Q=count(distinct original_pack_id having current final-valid qualified service at cutoff). Return/resale histories keep the same ID. Revoked acceptances are absent from that set; do not subtract them again. A valid financial adjustment stays in the set. | original_pack_id; acceptance_version; final_valid; cutoff; cp_goods | Q |  |
| physical_stock | gross_handover; supplier_handover; sealed_waste | Goods-only count balance: G_close=G_open+N_receipt+N_customer_return+N_transfer_in-N_gross_customer_handover-N_supplier_handover-N_transfer_out-N_condemn-N_confirmed_missing+R_goods. N_gross_customer_handover contains ALL physical customer handovers including never-accepted; do not subtract unaccepted handovers again. A no-movement revocation creates no stock exit. Condemnation is internal goods-to-held-waste change. Independently W_close_kg=W_open_kg+W_condemn_kg+W_received_kg-W_dispatch_kg-W_other_exit_kg-W_missing_kg+R_waste_kg. Link N_condemn to independently weighed W_condemn_kg by event IDs, never equate Item(s) and kg. Signed unresolved R values remain investigated with uncertainty; confirmed missing has separate evidence. | G_close; G_open; N_receipt; N_customer_return; N_transfer_in; N_gross_customer_handover; N_supplier_handover; N_transfer_out; N_condemn; N_confirmed_missing; R_goods; W_close_kg; W_open_kg; W_condemn_kg; W_received_kg; W_dispatch_kg; W_other_exit_kg; W_missing_kg; R_waste_kg; event_id; cp_goods; cp_waste | typed_stock_checks |  |
| failure_source | failed_pack | For each original homogeneous receiving-source vector V_s, N_original_s=N_S_s+N_F_s+N_T_s+N_O_s with exactly one current source responsibility per pack. The raw failed_pack input is N_F=sum_s(N_F_s), and background B_F=sum_s(N_F_s*V_s), where V_s is per one actual complete original pack delivered to the receiving gate. Keep differing vectors in separate rows/datasets, not one count multiplier. A whole-pack mode and component-vector mode are exclusive; per-component responsibilities require separate actual component Product input cards with original quantities/units/providers, conserved sources and excluded whole-pack portions. A downstream GOODS system separately adds B_S=sum_s(N_S_s*V_s) once. No environmental vector is partitioned by an arbitrary component mass fraction. | N_original_s; N_S_s; N_F_s; N_T_s; N_O_s; V_s; source_id; original_pack_id; cp_goods | N_F; B_F; B_S | ghg-product-2011 |
| electricity_total | core_ac | K_core_h=sum_c(K_c*d_c_h/sum_all_h(d_c_h)); each K_c is disjoint measured kWh under core_partition and d_c_h is its fixed same-unit source-class driver. E_core_MJ=3.6*K_core_h. Meter readings are raw before attribution; an exact-pool provider reading is not allocated again. | K_c; d_c_h; source_class; source_meter_id; parent_boundary; attribution_level; cp_meter | E_core_MJ |  |
| asset_replace | all inventory rows | Provisional f_a_h=e_a_h/L_a; final f_a_h=e_actual_a_h/E_a; E_a=sum_all_h(e_actual_a_h). For each original historical pool and each version replace A_new_h=f_new_a_h*V_new_a and post delta_h=A_new_h-A_old_h. Apply the identical parent-asset fraction once to terminal carrier and independent parent-owned transport; actual event maintenance has disjoint event source/beneficiary ledger. | e_a_h; L_a; e_actual_a_h; E_a; f_old_a_h; f_new_a_h; V_old_a; V_new_a; A_old_h; asset_id; original_pool; version; cp_completion | A_new_h; delta_h | ghg-product-2011 |
| completion_sum | all inventory rows | For each exchange j restore each external module to its evidenced original raw numerator U_m_j=z_m_j*D_m only when z_m_j is normalized; retain raw U_m_j directly otherwise. Apply the fixed class/first-use/asset/source-owner allocation exactly once to obtain attributable U_m_j_h. Deduplicate actual source/event/time/asset/lifecycle constituents, not only provider IDs. Then q_final_j=(C_core_j_h+sum_disjoint_m(U_m_j_h))/Q for identical exchange identity/property/unit and compatible scope. C_core includes E_core_MJ, N_F with its supplier vector, and direct dispatch kg where relevant; never omit core or add F twice. Do not add kg to MJ, raw to normalized, or gross satellite counts to service output. Q=0 blocks division. Partial modules keep exclusions/unfinished obligations explicit until all actual atomic cards/protocols and this aggregation are verified. | C_core_j_h; U_m_j; U_m_j_h; z_m_j; D_m; Q; source_id; event_id; asset_id; lifecycle_stage; attribution_level; original_pool; version; cp_completion | q_final_j | ghg-product-2011 |
| one_reference | all inventory rows | Each final row amount=q_owned_row/Q per reference flow; q_owned_row retains its own numerator unit and all attribution already applied. service_out=Q/Q=1 Item(s). gross_handover=N_gross_customer_handover/Q and supplier_handover=N_supplier_handover/Q are non-characterized physical satellites only. sealed_waste=W_dispatch_kg/Q is direct actual net consignment kg with stock QA, no F fraction or stock correction repeated. | q_owned_row; Q; N_gross_customer_handover; N_supplier_handover; W_dispatch_kg; cp_goods; cp_meter; cp_waste | final_inventory_amount |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| lot_trace | service_out; failed_pack | Original SKU/lot/seal/storage/expiry/recall state and complete source vector must be traced to the same immutable IDs; nominal counts/strength are not mass or LCI. | Actual labels, signed supplier lot/BOM/vector and complete event history |
| source_quality | all inventory rows | Use actual geography/time/technology/provider scope, uncertainty, calibration and completeness disclosure. No official label, historical UUID observation or general method is a quantitative site LCI. | Provider inventories and original activity records; uncertainty and missing-field register |
| completeness_quality | all inventory rows | A core partial module remains labelled partial even with finite measurement passing. New actual states/exchanges need atomic bilingual cards and exact process/protocol/raw/calculation linkage before a complete claim. | Signed completion matrix and actual parsed projection; unresolved identities and all omitted modules |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| identity_complete | all inventory rows | Candidate UUID gaps remain explicit by exact row_id. Before a numerical usable dataset, bind each exchange to independently direct-read official bilingual identity/type/property/unit/medium and matching actual provider; official property UUID is not a flow UUID. Point-of-use AC identity proves no grid/provider performance. Reject mismatched SKU/state/BOM or a supplier vector inferred from the public label; retain actual quantities/uncertainties, no invented factors or zero defaults. | dailymed-tylenol-37806 |
| custody_integrity | service_out; failed_pack; gross_handover; supplier_handover; sealed_waste | Reconcile distinct-valid Q, complete original-ID event history, typed stock balances, S/F/T/O source conservation, source-vector whole/component exclusivity, receiving gate and inbound scope. Investigate missing and signed residuals separately. Every never-accepted or revoked retained-customer pack requires real recipient/state/background continuation even without physical return. Seal/expiry/recall/temperature uncertainty blocks qualified service, never permits dispensing or automatic resale. | dailymed-tylenol-37806 |
| waste_integrity | sealed_waste | Actual receiver acceptance must match the entire unopened expired/recalled pharmaceutical formulation plus original bottle/closure/seal/carton carrier and its measured net kg. No default hazard category, treatment, recycling credit or safe-use/legal approval. Opening, leakage, external contamination, mixed contents, new disposal container or missing carrier requires a concrete state-specific card/provider extension. Included provider collection/treatment/packaging/transport is excluded from separate duplicates. Physical supplier return and responsibility T remain independent. | jrc-retail-2013 |
| module_integrity | all inventory rows | Core measurement completeness does not establish complete retail business. Require actual completion matrix, real cards/protocols, raw field coverage, source-class same-unit driver reconciliations, provider attribution levels, all historical asset revisions, first-use stock and exact once-only completion aggregation before completeness. Unknown support electricity, necessary capital, payment/admin/security scope or transport empty/idle coverage is a blocking gap, not zero or a generic service name. | ghg-product-2011; jrc-retail-2013 |
| bilingual_projection | all inventory rows | Both languages must preserve reference denominator, object/state/type/direction, row/protocol IDs, conditional gates, source IDs, formulas and obligations. Final cards use basis_kind reference_flow. Generate structured projection through normal sync; compare actual parsed inputs and each card protocol process_id/flow_role including completion extensions. A finite measurement check is not scientific, identity, translation or drug safety approval. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; explicitly partial incremental service until mandatory support completion |
| downstream_use | Inventory-only partial module for one specified original pack; complete retail system only through fixed completion_sum, separately declared GOODS background S if requested |
| allowed_use | Transparent source responsibility/lot-controlled service studies with measured matching source vectors and explicit completion status |
| excluded_use | Whole CPC leaf, clinical/dispensing/therapeutic/safe-use/legal claims; equating formulation to API or other pack/route; complete-business comparisons from partial core; unverified provider impacts |
| required_metadata | All qualifiers; exact source/version/property/unit/state; pool and cutoff history; raw/Q distinction; S/F/T/O and failure input; original gate transport; module matrix and all exclusions |
| required_quality_disclosure | Measured versus unresolved; actual calibration/coverage/uncertainty; historical identity observation; partial support gaps, non-normalizable pools and signed residuals; no approval inferred |
| update_trigger | Label/SKU/formulation/pack/BOM/lot state, channel, storage/seal/recall acceptance, late events, supplier vectors, module scope, asset exposure/lifetime/retirement or provider attribution changes |

## 11. Data Sources

The retained manufacturer and retailer sources document examples of this product family and the explicitly cited technical distinctions. They do not restrict eligibility to those brands/models or supply default numerical inventory for other configurations. Actual product and supplier evidence remains required under b_product_family.

| source_id | Title | Type | Reference | Use |
| --- | --- | --- | --- | --- |
| un-cpc3-62173 | United Nations Statistics Division. CPC Version 3.0, subclass 62173 explanatory note | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62173 | Classification context only: retail services concerning group352; the selected intact-pack mixed-store subset is narrower. |
| dailymed-tylenol-37806 | Kenvue Brands LLC. TYLENOL EXTRA STRENGTH, acetaminophen tablet film coated; DailyMed SPL set17cfa99d-abb2-4d77-9e0e-e77109fbb61a, updated21 January2026 | official_guidance | https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=17cfa99d-abb2-4d77-9e0e-e77109fbb61a | Product identity and storage/seal context only: package06 is one carton containing one plastic bottle of100 caplets; nominal500mg is ingredient strength. Neither complete BOM/LCI, actual lot quantities, therapeutic advice, legality nor safety approval follows. |
| ghg-product-2011 | WRI/WBCSD. Product Life Cycle Accounting and Reporting Standard2011, chapters6,7 and9 | standard | https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Service unit, transparent boundaries and subdivision before physical allocation. The source does not prescribe this PCR loss/asset/completion equations or prove complete-standard conformity. |
| jrc-retail-2013 | European Commission JRC. Best Environmental Management Practice in the Retail Trade Sector, EUR25998EN2013 | handbook | https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf | Qualitative retail utilities, lighting, transport, materials and waste context; no benchmark quantity or pharmaceutical regulation adopted. |
