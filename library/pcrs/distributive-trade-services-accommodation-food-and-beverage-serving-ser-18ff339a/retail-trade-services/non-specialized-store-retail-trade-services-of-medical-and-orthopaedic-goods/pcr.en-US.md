---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-medical-and-orthopaedic-goods
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Counter retail services for original-pack pairs of adult aluminium axillary crutches

## 1. Scope and Applicability

This method addresses the identity and ownership problem of complete paired orthopaedic goods sold unopened through an actual mixed non-specialized store. Existing material retail methods provide useful subdivision/stock principles but do not establish paired-device identity, component-vector conservation, no-adjustment acceptance or complete support coverage for this route. Existing medical-equipment manufacturing PCRs concern different production functions. The retained ID is unchanged; a broader classification label grants no whole-leaf scope.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-medical-and-orthopaedic-goods |
| classification_refs | CPC3.0:62174, narrower proposed scope; no accepted mapping is created by this candidate. |
| covered_products | Unopened original complete pairs of adult aluminium axillary crutches in an evidenced mixed non-specialized store channel; actual size range, supplier and complete kit BOM fixed per homogeneous pool. |
| excluded_products | Single crutches, youth models, separate replacement accessories, left/right-specific variants, opened/adjusted/used/custom products, specialized medical retail, clinical/fitting/rental services and other medical goods. |
| representative_product | Counter retail services for original-pack pairs of adult aluminium axillary crutches; actual supplier, SKU/configuration, lot and complete original BOM verified separately for each homogeneous stratum. |
| production_route | Retailer receipt -> unopened ambient storage/display -> paperless counter handover -> final-valid acceptance/fate reconciliation; supporting sources completed by complete_support. |
| market_state | Original unopened non-sterile adult pair; external package/lot evidence required; no trial or adjustment by retailer. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Counter retail handover service for one documented original adult crutch pair pack. |
| How much | 1 Item(s) service for one complete unopened pair pack; not two services for two crutches. |
| How well | Correct actual adult SKU, intact original package, both complete crutches/accessories and final-valid commercial acceptance; no clinical functionality/suitability claim. |
| How long or cycle | One prospectively fixed same-configuration pool from receipt to cut-off with continuing fate/late-return revisions. |
| reference_flow_link | retail_service |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Counter retail service for one unopened adult aluminium axillary crutch adult crutch pair pack |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | actual mixed-store assortment/channel; adult aluminium axillary crutch adult model; original lot/ID; two complete crutches per retail pack; actual accessories/enclosure BOM; dimensions and left/right configuration; actual non-sterile declaration; unopened/no-trial/no-adjustment; receiving gate; Q/cut-off/version; S/F/T/O; wholepack/component mode; provider scopes; partial core/completion status; geography/time |

All required qualifiers must be declared in dataset metadata, process notes or reference comments. Missing qualifiers make the definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| count_reference | retail_service; failed_original; supplier_pack; external_retained_pack | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Service count and whole pair-pack count are separate typed ledgers. A case is not a pair; one pair contains two complete crutches. Every final exchange is per reference flow with one final division by Q. |
| mass_state | outer_carton; rejected_pack; carton_waste | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use actual same-state calibrated net kg; no nominal catalogue mass. Keep whole-carrier kg separate from original source-equivalent Item(s). |
| ac_conversion | retail_ac | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 1 kWh=3.6 MJ; supplier original point-of-use AC chain only; no impact factor inferred. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual receipt of unopened original complete pair packs and disjoint support-source gates; merchandise manufacture for S stays external. |
| starting_condition_role | Retail custody/source responsibility gate, not a material-production reference output. |
| product_classification_scope | Narrower orthopaedic crutch-pair non-specialized trade subset of CPC62174; not the whole medical/surgical group481. |
| recursive_input_rule | Do not recursively add S manufacture from custody or physical satellite outputs. Explicit failed_original F product background is required and exempt from that exclusion; support inputs use exact separate scopes. |
| upstream_dataset_requirement | Complete actual original pair-pack supplier vectors and inbound source inventory for F, plus matched AC/transport/support/treatment providers; specifications alone are insufficient. |
| disclosure | Candidate partial incremental core with mandatory complete_support; unbound flow identities and all incompleteness remain explicit; no methodology, safety or compliance approval. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_product_family | all inventory rows | This PCR applies to the declared product family across manufacturers and brands. Brand, model, catalogue article, SKU and trade name identify actual study data, not an exclusive eligibility condition. The material/function, product state, fixed format where specified, process/channel and gate conditions below still apply. Establish separate homogeneous supplier/configuration/edition/package-BOM strata and their matching original background vectors; do not multiply a mixed-SKU count by one specimen vector. Use actual measured quantities and supported conversions. Manufacturer examples and their masses, dimensions, ratings, formulation or packaging claims are illustrative only, never class-wide defaults or complete BOM/LCI. Any actually different component, support chemical, package or carrier requires its concrete atomic card, matched property/unit, collection and nonoverlapping source boundary before completeness; an actual state or route outside the declared family requires a separately reviewed extension. Unknown applicability, identity or evidence remains unresolved. This candidate generalization does not establish independent scientific or translation approval. |  |
| scope_gate | retail; reverse; support | Apply only to an actual walk-in, mixed-assortment non-specialized store selling the declared adult aluminium axillary crutch configuration, one original complete pair per retail pack, at ambient conditions. Verify actual non-sterile supply and unopened factory condition from lot label and supplier declaration; the manufacturer sheet alone does not establish sterility. No opening, trial, handgrip/height adjustment, assembly, installation, prescription, fitting, rental, repair, disinfection, clinical use or home delivery is included. A youth model, single crutch, left/right-specific part, customized device, opened return or partly missing kit is a different configuration requiring a state-specific method/card and review before completeness. Do not infer clinical suitability, safety, legal approval or complete BOM/LCI from the sheet. | un-cpc-62174; drive-rtl10400 |
| goods_ownership | retail; failed_original; goods_inbound | At the actual retailer receiving gate assign each original supplier vector once to mutually exclusive S (eventually final-valid sold), F (retailer-responsible failed/lost original), T (named continuing recipient/internal asset owner) or O (still open stock or unresolved). Fractions sum1 per original vector, not per descendant waste carrier. S manufacture and original inbound transport are excluded from this incremental service and may be added once only by a separately declared downstream GOODS system; failed_original and goods_inbound explicitly include F manufacture/packaging and F original inbound. T carries the same original sources to the named owner, including supplier return; a movement or refund alone does not transfer responsibility. O is retained, never zero or silently F/S. Close/revise original cohorts when fate becomes known. An original whole-pack scalar is permitted only if both crutches, all factory attachments and the entire retail package have the same responsibility. If they differ, obtain supplier component inventory vectors with conserved source IDs and actual component amounts, create matching atomic input cards and remove those portions from whole-pack input; material mass fractions cannot split an environmental vector. | ghg-product-standard; drive-rtl10400 |
| physical_states | retail; reverse | Keep goods-only custody and held-waste ledgers separate. Use all gross customer handovers once, including never-accepted ones. Subsequent revocation with no movement reclassifies the original event, not a new physical exit. Condemnation moves goods to held waste internally and is not dispatch. Record unopened supplier returns, externally retained unaccepted packs, confirmed missing goods and signed unresolved residuals individually. None is automatically waste. Physically opened, damaged, broken or partial carriers require their own state-specific rows, recipient and matching treatment/background before completion; retain their actual measurements even if the narrow service denominator is unchanged. Only supplier_pack and external_retained_pack are non-characterized physical custody satellites; do not recursively add their original manufacture. rejected_pack and carton_waste are actual waste outputs requiring complete matched treatment and disjoint transport, never excluded as satellites. failed_original remains a characterized Product input for original F manufacture. | ghg-product-standard |
| route_evidence | retail; reverse; support | Prospectively fix the store/configuration/reporting pool and observation cut-off. Include quiet, closed, refused, reversed, repeated and zero-sale intervals and associated resource use in the same pool; do not select only successful days. Q=distinct original pair-pack IDs with final-valid counter acceptance at cut-off. A revoked acceptance removes that ID even without return; do not subtract revocations again from this final-valid count. Financial-only discounts/refunds with valid acceptance do not remove it. One returned/resold original ID has one final service, while all repeated handling resources remain. Late evidence replaces original numerator and denominator versions with actual event dates; never shifts burdens to a new cohort merely because the adjustment is late. Q=0 leaves a retained unnormalizable pool, not a zero inventory. | ghg-product-standard |
| core_limits | retail; reverse; support | The listed core is a partial incremental service inventory, not a complete store operation. Mandatory completion under complete_support supplies every actual supporting facility, cleaning/sanitation, staff welfare, capital, ICT/network, payment, security and administration source. Core electricity includes every actual on-site AC circuit in the audited store boundary; external modules exclude that same AC. Route eligibility requires signed asset/site/utility surveys showing no on-site combustion, gas/steam/purchased heat, refrigerant-containing equipment, batteries, merchandise demos, printing or added customer bags. If any exists, completeness is blocked until a reviewed explicit source-specific method and bilingual cards/protocols cover it; do not assign zero or invent an emission factor. Customer travel, post-handover clinical use/cleaning and end-of-life of S goods are outside this retail-service boundary and separately disclosed. | jrc-retail-bemp; ghg-product-standard |
| intact_waste | rejected_pack | Rejected unopened original pack waste is one real complete mixed-product carrier: two aluminium crutches with actual tips/pads/handgrips/fasteners and retained original retail enclosure. It is not pure aluminium scrap or medical infectious waste by name. Require signed receiver acceptance of actual whole-carrier constituents and non-contaminated state, with complete matched transport/treatment scope and original consignment ID. Use directly weighed consignment net kg, not component kg plus the same whole pack. Weigh retained waste separately; dispatch kg is not corrected a second time by opening/closing stocks. No default recycling credit. | drive-rtl10400; jrc-retail-bemp |
| support_scope | support | Mandatory support survey must locate the actual building shell, lighting/fan/fixed fixtures, storage shelf, checkout/scanner, network equipment, access/security equipment, remote payment/security/storage/admin backends, cleaning service and staff welfare. For each model separate manufacturing/installation, operation, repair events and terminal carrier/EOL scopes; building complete packages must explicitly include actual lighting/fans/fixed fixtures or those become separate lifetime modules. Premises and cleaning operational sources are measured actual AC (excluded if already core), supplied water, each exact formulated cleaner, reusable cloth/tool model, and each actual solid/liquid carrier. Water import is actual import-meter volume*density at recorded temperature, with no internal-reuse subtraction. Effluent uses mutually exclusive direct modes: actual discharge-meter volume*measured same-stream density, or calibrated net weighing of the same actual entire effluent carrier; no evaporation/stock/reuse deductions. Water and formulation-origin balances remain independent QA and cannot reconstruct or add to directly measured whole effluent. Cleaner formulation-origin kg partitions once among unused stock, actual use/discharge, spill, retained residue and dispatched-container residue; reused/intermediate states replace prior states, not additional use. Wet cloth/container/rinsate whole kg differs from formulation-origin kg. Tools/cloths use asset_lifetime with cleaned-area m2 exposure, buildings m2*h, shelf m3*h, electronics h; actual repairs and terminal carriers are event-based and follow historical fractions. Actual mixed wastes require signed constituent/state acceptance and matched treatment. Acquisition/use/retirement stock checks never add manufacture beside a lifetime package. Transport at each source remains under transport_ownership. Collect each actual flow specifically; unknown or unbound identities/quantities/provider scopes remain blocking, not generic utility/waste selector rows. | jrc-retail-bemp; ghg-product-standard |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| retail | Receipt, storage and counter service | required | scope_gate | incremental retail core | Q |
| reverse | Physical return and rejected-carrier handoff | conditional | actual return/retention/waste or associated transport; signed absence otherwise | reverse custody/treatment linkage | Q |
| support | Mandatory disjoint supporting modules | required | complete_support | fixed completion of partial core | Q |

### Process: Receipt, storage and counter service (`retail`)

#### Inputs

##### Product flows

###### Unopened original adult aluminium axillary crutch pair retail pack (`failed_original`)

One original whole pair-pack equivalent supplies the F manufacture/retail-package background; this is the source-equivalent burden input, not an additional physical receipt. Preserve actual complete supplier vector and source-gate boundary.

- Selected flow: Unopened original adult aluminium axillary crutch pair retail pack
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: N_F/Q Item(s)
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_original`
- Sources: drive-rtl10400; ghg-product-standard

###### Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca` (`retail_ac`)

At-point-of-use AC identity leaves provider/voltage/mix unspecified. Bind actual delivery/supply geography and upstream losses separately; no grid intensity is inferred.

- Selected flow: Electricity, alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: sum_c(X_c*d_c_h/D_c)/Q MJ
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_ac`
- Sources: jrc-retail-bemp; ghg-product-standard

###### Road-lorry complete-operation transport of adult aluminium axillary crutch pair packs (`goods_inbound`)

Only F responsibility of original supplier-to-retailer transport at the same receiving gate as failed_original. Already embodied supplier transport is excluded here event by event; actual inbound originals for S/T/O remain on their owner ledger.

- Selected flow: Road-lorry complete-operation transport of adult aluminium axillary crutch pair packs
- Flow property / unit: Vehicle distance / vehicle*km
- Amount rule: sum_j(T_original_j*f_F_j)/Q vehicle*km
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_transport_in`
- Sources: ghg-product-standard

###### Corrugated fibreboard upstream case packaging (`outer_carton`)

Conditional only for actually separately removed corrugated case; exclude retail-pack enclosure already inside V_j. Retain case closures/labels/adhesive in a verified complete case background or add their specific cards; pure fibreboard cannot cover unmeasured ancillary material.

- Selected flow: Corrugated fibreboard upstream case packaging
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: first_use_carton_kg/Q kg
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_carton`
- Sources: jrc-retail-bemp

#### Outputs

##### Product flows

###### Counter retail service for one unopened adult aluminium axillary crutch adult crutch pair pack (`retail_service`)

One service concerns the unopened adult pair pack, not one crutch or one case of eight pairs. Match exact model, actual package BOM and two complete crutches with original accessories; no clinical outcome or use-duration equivalence is claimed.

- Selected flow: Counter retail service for one unopened adult aluminium axillary crutch adult crutch pair pack
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_service`
- Sources: un-cpc-62174; drive-rtl10400

### Process: Returns and rejected carriers (`reverse`)

#### Inputs

##### Product flows

###### Road-lorry complete-operation transport of adult aluminium axillary crutch pair packs (`service_transport`)

Actual retailer-arranged supplier-return/failed-handover recovery transport, including no-sale/repeated events. No customer travel or duplicated original F inbound; waste transport included in matched treatment is excluded here.

- Selected flow: Road-lorry complete-operation transport of adult aluminium axillary crutch pair packs
- Flow property / unit: Vehicle distance / vehicle*km
- Amount rule: T_service_original_pool/Q vehicle*km
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_transport_reverse`
- Sources: ghg-product-standard

#### Outputs

##### Product flows

###### Unopened original adult aluminium axillary crutch pair retail pack (`supplier_pack`)

Actual intact unopened supplier return physical output. Signed receiver/condition and continuing S/F/T/O source owner required; a T assignment alone is not a new physical movement or a manufacture credit.

- Selected flow: Unopened original adult aluminium axillary crutch pair retail pack
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: actual_unopened_supplier_handoff_count/Q Item(s)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_reverse`
- Sources: ghg-product-standard

###### Unopened original adult aluminium axillary crutch pair retail pack (`external_retained_pack`)

Unopened whole pack physically retained by a named external customer without final-valid acceptance, including revocation without physical return. Record original gross event once, actual recipient/state and continued source owner; not a service output or automatic waste.

- Selected flow: Unopened original adult aluminium axillary crutch pair retail pack
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: actual_unaccepted_unopened_external_retention_count/Q Item(s)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_reverse`
- Sources: ghg-product-standard

##### Waste flows

###### Rejected unopened adult aluminium axillary crutch adult crutch pair pack waste (`rejected_pack`)

Actual whole mixed original product carrier crosses to a verified receiver. Not disassembled into duplicate aluminium, vinyl and packaging flows; intact_waste sets composition/state/treatment admissibility.

- Selected flow: Rejected unopened adult aluminium axillary crutch adult crutch pair pack waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: direct_dispatched_net_kg/Q kg
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: drive-rtl10400; jrc-retail-bemp

###### Used corrugated fibreboard case waste (`carton_waste`)

Conditional actual dispatched used carton: directly weigh consignment net kg; retained/reused stock is independent QA and is never deducted again from measured dispatch. Receiver accepts actual closures/labels/adhesives; no overlap with original retail-pack rejected_pack or supplier-return case.

- Selected flow: Used corrugated fibreboard case waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: carton_dispatch_net_kg/Q kg
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_carton_reverse`
- Sources: jrc-retail-bemp

### Process: Mandatory supporting-source completion (`support`)

Execute complete_support with cp_support; actual atomic extension rows and process-scoped protocol views are mandatory before a complete-service dataset. This required process has no invented generic complete-package flow card.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| electricity_pools | retail_ac | First subdivide actual circuit MJ sources into disjoint active, idle and fixed pools, whose sum reconciles to the store import meter. Subtract a submeter only when the parent includes it; independent disjoint meters need no subtraction. Active checkout/handling MJ uses measured SKU-line staff/device active seconds, including failures; idle reserved checkout MJ uses measured reserved terminal-seconds; lighting/ventilation/fixed MJ uses measured dedicated display/storage/support floor-area*time in m2*h across all beneficiaries, with common access area assigned by their dedicated m2*h shares. Never sum seconds and m2*h into one driver. Within each pool source c allocate X_c*d_c_h/sum_all_h(d_c_h), then sum compatible MJ only. Retain closed/idle intervals; all-beneficiary driver coverage must be known and positive, otherwise the attribution remains unresolved. No revenue, nominal rated power or successful-sales default. | ghg-product-standard; jrc-retail-bemp |
| asset_lifetime | support | For each actual homogeneous asset/model/BOM/scope vector V_a, use measured beneficiary exposure e_a_h in its own unit and expected whole-life exposure L_a in that same unit: f_a_h=e_a_h/L_a. Keep one persistent all-period/all-beneficiary ledger, cumulative provisional shares <=1, including idle reservations and closed intervals. At actual retirement replace EVERY historical share by f_final_a_h=e_actual_a_h/E_a where E_a=sum_all_h(e_actual_a_h), with E_a positive/known; do not merely charge a residual to the last pool. Each revised source and historical beneficiary has delta_a_h=f_new_a_h*V_new_a-f_old_a_h*V_old_a; replace old records and preserve both versions. Same equation applies to actual model-specific manufacture/installation, independent repair events and independent terminal carriers/transport using that asset exposure history; never multiply terminal carrier by another manufacturing fraction. Whole-device actual net retirement weighing already excludes removed parts; component-BOM reconstruction is an exclusive alternative. A complete package evidenced to include maintenance/transport/end-of-life excludes those outside modules. No sum of heterogeneous models as one Item(s), no full re-acquisition after a life estimate change. | ghg-product-standard |
| transport_ownership | goods_inbound; service_transport; support | Use trip/segment source -> actual consignment/asset/material -> original responsibility and beneficiary pool as separate attribution levels. This route uses actual road-lorry complete-operation vehicle-km providers; require signed scope covering actual fuel/vehicle operation and declared upstream/vehicle capital, and identify included empty and stationary idle events. This volume-driven route is eligible only with actual lorry volume-limiting load evidence or an actual reserved-volume capacity contract reconciled to cargo space; unknown or mass-limited trips require a reviewed matching driver method before completeness. Loaded trip source vehicle-km allocates by measured occupied cargo m3*segment-km across all real consignments; empty repositioning source vehicle-km allocates by measured reserved m3*empty-km to the causing consignments; stationary idle source operation is allocated by reserved m3*idle-hours within its own time source, never summed with distance. If the provider vehicle-km does not include actual stationary fuel, add a separately measured actual fuel/idle-time operation module, without duplicate source scope. Unknown empty/idle provider coverage blocks completeness. Goods receipt sources then follow S/F/T/O; goods_inbound includes F only. Reverse service trips are attributed to original service pools, not re-multiplied by F. Independent capital/repair/end-of-life transport belongs first to that asset and follows asset_lifetime historical fractions. Provider already assigned to consignment skips repeat trip allocation only; only an amount already assigned to exact original responsibility/pool/version skips the owner fraction. Different provider IDs do not prove activity is disjoint. | ghg-product-standard |
| support_drivers | support | Apply complete_support to actual external service sources separately: premises/fixtures use m2*h; shelf use actual reserved shelf envelope m3*h; checkout terminal/scanner use active seconds and separately reserved idle seconds; staff administration/welfare use recorded task staff-hours including failed work; access control uses protected-zone m2*h; security capture/storage uses actual camera capture seconds assigned by protected-zone m2*h at original capture time, then retained GB*h preserves that original beneficiary map. GB=10^9 bytes, GiB=2^30 bytes; use actual byte/time integrals. Network unique connection-interval source-hours allocate by recorded reserved endpoint-connection-seconds across all beneficiaries; active packet processing uses actual byte counts in a separate source pool; neither repeats on-site AC. Payment actual unique attempts use measured basket line processing-seconds shares summing1 per attempt, including declines/reversals; one multi-SKU authorization is never wholly assigned to each SKU. Remote administration uses actual processing task-seconds; split independent fixed backend capacity by reserved processing-seconds. All totals reconcile to actual complete service sources across all beneficiaries; identify original source/pool/version and retain idle/zero-sale periods. Cleaning operational source jobs allocate by actual cleaned-area m2 across all beneficiaries of that same job; all job drivers are measured and sum to the provider original job area, not later sales. No fictitious SKU-exclusive camera bytes, no duplicate network intervals or sums of unlike drivers. | ghg-product-standard; jrc-retail-bemp |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_service | retail | retail_service | acceptance_ledger | original_id; SKU; model; pair_count; actual_package_BOM; factory_seal; sterility_declaration; size; left_right_configuration; event_id; event_time; gross_handover; physical_return; acceptance_status; final_valid_original_ids; cut_off; original_pool_id; version | Link POS handover and supplier receiving IDs; inspect external labels without opening; match original pair/configuration and acceptance/return history each event. Count final-valid distinct IDs, not transaction count; record failed and reversed events too. | Item(s) | each event and cut-off | all original cohorts including late returns | same mixed store/configuration | per reference flow | signed acceptance/fate; supplier label/BOM; audit trail |
| cp_original | retail | failed_original | original_source_ledger | N_j; f_F_j; V_j; original_id; source_id; S; F; T; O; component_vector_mode; complete_BOM; retail_enclosure; supplier_gate; source_version; G_open; receipt_count; customer_return_count; gross_customer_handover_count; supplier_handoff_count; internal_transfer_count; condemnation_count; confirmed_missing_count; signed_goods_residual | For every receiving lot count actual intact pair packs and audit supplier complete package source inventory; keep original source-vector responsibility and typed goods custody equation. No nominal net mass, material percentage or spec sheet substitutes for actual source vector. | Item(s) | every receipt/fate change | full source history | same receiving gate | per reference flow | supplier primary LCI/BOM and signed receiver responsibility |
| cp_ac | retail | retail_ac | meter_and_activity_ledger | X_c; d_c_h; D_c; source_class; meter_topology; meter_unit; meter_id; interval_start; interval_end; reading_start; reading_end; calibration; active_seconds; reserved_idle_seconds; dedicated_area_m2; interval_h; all_beneficiary_ids; original_source_id; pool_id; version | Read calibrated import/submeters each interval and map circuit nesting; synchronize POS/task seconds and measured occupied area/time across all store goods. Integrate actual closed/idle intervals. Derive disjoint MJ sources and separate same-unit drivers under electricity_pools. | MJ | each metering interval | complete pool including closed/idle | all AC at audited site gate | per reference flow | calibration/topology; supplier delivery geography/voltage/mix |
| cp_transport_in | retail | goods_inbound | trip_source_ledger | trip_id; segment_id; source_id; actual_vehicle_km; volume_limited_evidence; reserved_volume_contract; actual_capacity_m3; occupied_cargo_m3; segment_km; reserved_empty_m3; empty_km; reserved_idle_m3; idle_hours; actual_idle_fuel; provider_scope; attribution_level; T_original_j; f_F_j; T_service_original_pool; consignment_id; owner_id; original_pool_id; version | Measure actual route/segment distances, cargo dimensions and idle reservations for all consignments; verify provider original denominator, empty/idle and lifecycle scope. The two protocol views share original trip IDs but partition event/owner scopes; never duplicate trip or owner allocation. | vehicle*km | every trip/segment | all relevant inbound/reverse and zero-sale events | actual road routes | per reference flow | route logs; signed provider scope; all-beneficiary capacity/time reconciliation |
| cp_transport_reverse | reverse | service_transport | trip_source_ledger | trip_id; segment_id; source_id; actual_vehicle_km; volume_limited_evidence; reserved_volume_contract; actual_capacity_m3; occupied_cargo_m3; segment_km; reserved_empty_m3; empty_km; reserved_idle_m3; idle_hours; actual_idle_fuel; provider_scope; attribution_level; T_original_j; f_F_j; T_service_original_pool; consignment_id; owner_id; original_pool_id; version | Measure actual route/segment distances, cargo dimensions and idle reservations for all consignments; verify provider original denominator, empty/idle and lifecycle scope. The two protocol views share original trip IDs but partition event/owner scopes; never duplicate trip or owner allocation. | vehicle*km | every trip/segment | all relevant inbound/reverse and zero-sale events | actual road routes | per reference flow | route logs; signed provider scope; all-beneficiary capacity/time reconciliation |
| cp_reverse | reverse | supplier_pack; external_retained_pack | custody_event_view | event_id; original_id; event_time; original_pool_id; recipient_id; intact_unopened_state; actual_unopened_supplier_handoff_count; actual_unaccepted_unopened_external_retention_count; acceptance_status; S; F; T; O; responsible_owner; G_open; receipt_count; customer_return_count; gross_customer_handover_count; supplier_handoff_count; internal_transfer_count; condemnation_count; confirmed_missing_count; signed_goods_residual; version | Use same original custody records as cp_original; obtain signed receiver and actual unopened/state evidence without double-recording handover. Reconcile goods count independently of final-valid Q and held-waste kg. | Item(s) | each event and close | all return/retention histories | store and named external recipient | per reference flow | receiver sign-off and fate ownership; no unexplained residual |
| cp_waste | reverse | rejected_pack | whole_carrier_dispatch | event_id; original_id; consignment_id; receiver_id; whole_carrier_BOM; non_contaminated_state; calibration; gross_kg; tare_kg; direct_dispatched_net_kg; dispatched_net_kg; W_open; condemned_kg; condemnation_count; other_actual_waste_receipt_kg; confirmed_missing_waste_kg; signed_waste_residual_kg; W_close; transport_treatment_scope; version | Calibrated tare/gross weigh each actual unopened complete-pack consignment at dispatch; independently weigh retained held waste and link condemnation count/kg by event ID. Confirm actual complete composition/state acceptance and provider treatment; no inferred infectious classification. | kg | each condemnation/dispatch and close | all held waste and later dispatch | store-to-receiver gate | per reference flow | scale calibration; signed actual acceptance; complete treatment manifest |
| cp_carton | retail | outer_carton | case_first_use_dispatch_ledger | carton_source_id; original_pack_ids; actual_case_BOM; first_use_carton_kg; packing_volume_share; unused_carton_stock_kg; used_carton_stock_kg; carton_dispatch_net_kg; carton_handover_kg; carton_missing_kg; signed_carton_residual_kg; calibration; actual_closure_label_adhesive; transport_scope; receiver_acceptance; original_pool_id; version | At case first unpacking weigh actual separate complete case and verify supplier BOM/source boundary; record real pack-volume shares and receiving transport. Track unused/used stock separately and directly weigh actual waste consignments; these views share case IDs with no duplicate source assignment. | kg | each first use/dispatch and close | all case cycles and retained reuse stock | receiving/store/reverse gate | per reference flow | scale/BOM; transport exclusions; signed receiver; stock reconciliation |
| cp_carton_reverse | reverse | carton_waste | case_first_use_dispatch_ledger | carton_source_id; original_pack_ids; actual_case_BOM; first_use_carton_kg; packing_volume_share; unused_carton_stock_kg; used_carton_stock_kg; carton_dispatch_net_kg; carton_handover_kg; carton_missing_kg; signed_carton_residual_kg; calibration; actual_closure_label_adhesive; transport_scope; receiver_acceptance; original_pool_id; version | At case first unpacking weigh actual separate complete case and verify supplier BOM/source boundary; record real pack-volume shares and receiving transport. Track unused/used stock separately and directly weigh actual waste consignments; these views share case IDs with no duplicate source assignment. | kg | each first use/dispatch and close | all case cycles and retained reuse stock | receiving/store/reverse gate | per reference flow | scale/BOM; transport exclusions; signed receiver; stock reconciliation |
| cp_support | support | complete_support | mandatory_source_register | module_id; constituent_list; original_source_id; original_pool_id; version; provider_boundary; attribution_level; b_m; z_m; X_m; d_c_h; D_c; e_a_h; L_a; E_a; f_old_a_h; f_new_a_h; V_old_a; V_new_a; core_raw_k; disjoint_attributed_raw_m_k; exchange_key_k; task_staff_hours; dedicated_area_m2_h; shelf_envelope_m3_h; active_seconds; reserved_idle_seconds; payment_attempt_id; basket_line_processing_seconds; protected_zone_m2_h; camera_capture_seconds; capture_period_map; retained_bytes_h; unique_connection_intervals; connection_hours; processing_bytes; remote_task_seconds; water_import_m3; water_density; water_temperature; discharge_m3; discharge_density; effluent_mode; effluent_direct_net_kg; formulation_received_kg; formulation_history_start; formulation_history_end; formulation_open_unused_kg; formulation_close_unused_kg; formulation_actual_discharge_kg; formulation_spill_kg; formulation_retained_residue_kg; formulation_dispatched_container_residue_kg; formulation_signed_residual_kg; wet_carrier_kg; cleaned_area_m2; actual_model_BOM; repair_event_id; terminal_net_kg; lifecycle_exclusions; Q | Survey every actual support resource and signed absence at site and provider; measure source quantity at its actual gate, calibrate meters/scales and synchronize full interval logs. Complete support_scope, support_drivers, asset_lifetime and transport_ownership; audit every actual contract constituent against the deduplication register before restoring original denominators. Each actual atomic row gets one process-scoped protocol view over this same ledger, avoiding duplicate measurement/normalization. | native source units separately | every source event/interval and historical revision | whole pool and complete asset history | all actual supporting sites/providers | per reference flow | signed exact scope/absence; calibrated readings; full source-ID and history reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| acceptance | retail_service | Q=count_distinct(final_valid_original_ids). Keep final acceptance status separate from all gross handover/return events. For Q>0 service output is exactly1 Item(s); for Q=0 retain raw pool and block normalization. | final_valid_original_ids; acceptance_status; cut_off; original_pool_id; event_id | Q; retail_service | ghg-product-standard |
| custody | retail; reverse | Goods counts: G_close=G_open+receipt_count+customer_return_count-gross_customer_handover_count-supplier_handoff_count-internal_transfer_count-condemnation_count-confirmed_missing_count+signed_goods_residual. Gross handover includes never-accepted events once. Held waste kg: W_close=W_open+condemned_kg+other_actual_waste_receipt_kg-dispatched_net_kg-confirmed_missing_waste_kg+signed_waste_residual_kg. Link measured condemned_kg and condemnation_count by event IDs; do not convert count to kg with a nominal weight. Residuals remain signed unresolved quantities under investigation, never confirmed losses by default. | G_open; receipt_count; customer_return_count; gross_customer_handover_count; supplier_handoff_count; internal_transfer_count; condemnation_count; confirmed_missing_count; signed_goods_residual; W_open; condemned_kg; other_actual_waste_receipt_kg; dispatched_net_kg; confirmed_missing_waste_kg; signed_waste_residual_kg; event_id | G_close; W_close | ghg-product-standard |
| original_f | failed_original; goods_inbound | For original source j retain actual whole-pack receiving count N_j and matched complete supplier manufacture/retail-pack vector V_j. N_F=sum_j(N_j*f_F_j), with S/F/T/O source partition conserved. failed_original=N_F/Q Item(s), each homogeneous original vector linked once; do not use primary catalogue specifications as V_j. goods_inbound=sum_j(T_original_j*f_F_j)/Q vehicle-km after transport_ownership trip-to-consignment allocation; original manufacture and original inbound retain the same ownership. No new original burden on intact resold returns. Wholepack and component-vector modes are exclusive under goods_ownership. | N_j; f_F_j; V_j; T_original_j; source_id; original_id; attribution_level; Q | N_F; failed_original; goods_inbound | ghg-product-standard |
| ac_total | retail_ac | retail_ac=sum_c(X_c*d_c_h/D_c)/Q MJ; D_c=sum_all_h(d_c_h) with each c a same-unit electricity source/driver class under electricity_pools. Measured kWh converts to MJ by3.6 once. Parent/submeter topology and active/idle/fixed source sums reconcile; do not treat rated capacity as measured consumption. | X_c; d_c_h; D_c; meter_topology; source_class; meter_unit; Q | retail_ac | ghg-product-standard |
| reverse_totals | supplier_pack; external_retained_pack; rejected_pack; service_transport; outer_carton; carton_waste | Use supplier_pack=actual_unopened_supplier_handoff_count/Q and external_retained_pack=actual_unaccepted_unopened_external_retention_count/Q as disjoint physical satellites. rejected_pack=direct_dispatched_net_kg/Q kg; receiver weighed dispatch is direct and stocks are QA only. service_transport=T_service_original_pool/Q vehicle-km following transport_ownership. outer_carton=first_use_carton_kg/Q; allocate each actual upstream corrugated case manufacture/inbound source to its contained original packs by measured occupied packing volume shares, then to original service pool at first unpacking; actual unused cartons retain unassigned source, reused cartons never reacquire it. Used/unused carton stock and actual handover/waste/missing outputs reconcile separately. Carton dispatch is direct actual net kg/Q on carton_waste and never a second manufacturing allocation. | actual_unopened_supplier_handoff_count; actual_unaccepted_unopened_external_retention_count; direct_dispatched_net_kg; T_service_original_pool; first_use_carton_kg; packing_volume_share; carton_source_id; unused_carton_stock_kg; used_carton_stock_kg; carton_dispatch_net_kg; carton_handover_kg; carton_missing_kg; Q | supplier_pack; external_retained_pack; rejected_pack; service_transport; outer_carton; carton_waste | ghg-product-standard |
| complete_support | support | Create a disjoint measured-source register before any complete-service claim. Each actual support module must return atomic exchange numerators, exact original denominator b_m, original pool/site/time/version, source IDs, complete actual constituent/activity list, same-property/unit amounts and provider lifecycle exclusions. For a normalized module z_m restore raw source X_m=z_m*b_m; for raw data X_m is already raw. Apply support_drivers and asset_lifetime once at the missing attribution level. For each compatible exchange key k=(flow identity, direction/type, state/medium, property, unit, provider boundary), full_amount_k=(core_raw_k+sum_m(disjoint_attributed_raw_m_k))/Q. core_raw includes actual F originals, F inbound, AC, reverse and carton sources once. Add only compatible numerators, never kg+MJ, Item(s)+kg or raw+normalized. Deduplicate by actual source event/asset/time/lifecycle constituent, not merely provider ID. Same-contract packages may remain intact only when actual complete constituent list, one real measured denominator and signed exclusions prove whole-package coverage with no overlap. Otherwise subdivide and add specific atomic bilingual cards/protocols before completeness; an internet-access invoice does not cover payment/security/admin backends. Any missing original denominator, unknown resource, overlap or incomplete module blocks complete-service status. | b_m; z_m; X_m; d_c_h; D_c; e_a_h; L_a; E_a; f_old_a_h; f_new_a_h; V_old_a; V_new_a; core_raw_k; disjoint_attributed_raw_m_k; exchange_key_k; original_source_id; original_pool_id; version; Q | full_amount_k; delta_a_h | ghg-product-standard; jrc-retail-bemp |
| support_quantity_modes | support | Water kg=water_import_m3*water_density at actual water_temperature. Effluent kg=discharge_m3*discharge_density OR effluent_direct_net_kg under one declared effluent_mode; no summing modes. Cleaner original-source conservation is formulation_open_unused_kg+formulation_received_kg=formulation_close_unused_kg+formulation_actual_discharge_kg+formulation_spill_kg+formulation_retained_residue_kg+formulation_dispatched_container_residue_kg+formulation_signed_residual_kg. This is cumulative from each formulation original-source receiving gate, not a new period-consumption equation; pre-existing already-used/residue stock carries the original full history and reuse replaces its destination. All destinations are mutually exclusive original-formulation kg, exclude added rinse water/dirt, and share original IDs; wet_carrier_kg is separately directly measured, never source-formulation kg or subtracted again. Whole measured carrier treatment enters once; retained container residue is not dispatched-container residue. Raw original support source numerators then follow complete_support. | water_import_m3; water_density; water_temperature; discharge_m3; discharge_density; effluent_mode; effluent_direct_net_kg; formulation_open_unused_kg; formulation_received_kg; formulation_close_unused_kg; formulation_actual_discharge_kg; formulation_spill_kg; formulation_retained_residue_kg; formulation_dispatched_container_residue_kg; formulation_signed_residual_kg; wet_carrier_kg; original_source_id | actual_water_kg; actual_effluent_kg; formulation_balance | jrc-retail-bemp; ghg-product-standard |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| primary_identity | retail_service; failed_original | Check actual adult model, unopened pair, complete accessories/enclosure and actual non-sterile supply. Retain conflicts against manufacturer edition and original lot, no catalogue-weight default or material-vector split. | lot label; signed supplier BOM/LCI; actual gate/quantity |
| measurement_coverage | all inventory rows | Calibrate actual meters/scales and retain clock alignment, precision/uncertainty, full time coverage and all-beneficiary totals. Compare direct and reconstructed modes only as independent QA, never sum both. | calibration; topology; raw unedited interval/event records |
| complete_provider_scope | support; reverse | Signed actual source packages and receiver acceptance list complete constituents, one denominator, gate/lifecycle inclusions/exclusions and allocation level; supplier IDs alone do not prove disjointness. Disclose all unresolved identities/quantities and partial core status. | source register; actual contract/model/BOM; receiver manifests; disjointness audit |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| identity_gate | all inventory rows | Unresolved UUIDs are row-specific and never substituted by a property UUID. Before dataset completeness verify direct official flow original/receipt, exact observed state/date/hash, bilingual name, type, state/medium, property/unit chain and actual provider match. Historical verification is not a live read. retail_service must bind an actual service identity, never merchandise production. | ghg-product-standard |
| finite_quantity | all inventory rows | Require Q>0, full original event/source history, all applicable card quantities, independent goods/waste/case balances and signed explanation of residuals. Unknown quantities/recipients/provider scope never mean zero. Final card basis kind is reference_flow for every normalized exchange. Do not add item count and kg, or normalize twice. | ghg-product-standard |
| coverage_gate | support; retail; reverse | A complete-service dataset passes scope_gate/core_limits and fully executes complete_support, including actual facilities, ICT/payment/security/admin, cleaning/welfare and all necessary capital/transport scopes. Each added actual source has a specific atomic bilingual card, actual process/protocol role, raw inputs and matched provider before completeness. Evidence of absence is allowed only for truly absent source, not missing measurement. Partial core output must retain partial disclosure and cannot be offered as full retail service. All mandatory EN/ZH methods/card conditions must appear in supported projection fields and agree substantively. | jrc-retail-bemp; ghg-product-standard |
| source_conservation | failed_original; goods_inbound; support; reverse | Audit S/F/T/O conservation and actual F Product input against original manufacture and inbound sources, exclusive wholepack/component mode, and source/event/asset/time/lifecycle deduplication. Physical satellite outputs carry no second manufacture or automatic credits. Asset retirement/life/supplier changes replace every historical f*V allocation; original cohort late return revisions replace old numerator/Q, with original/adjustment dates. Failed/zero-sale pools and all unnormalizable Q=0 records remain visible. | ghg-product-standard |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | Incremental unopened adult crutch-pair counter retail service; GOODS system may add S original manufacture/inbound once with owner/source linkage. |
| allowed_use | Same homogeneous actual configuration, channel and explicit partial/completed boundary after applicability review. |
| excluded_use | Clinical care/fitting advice, safety/compliance approval, whole medical leaf, specialized retail, use/EOL of sold goods, or full-service claims from partial core. |
| required_metadata | Required qualifiers; original source/pool/version/gates; Q; S/F/T/O; supplier vectors; actual support constituents/denominators; providers; allocation levels; asset history. |
| required_quality_disclosure | All unbound identities, uncertainty, partial core status, missing modules/receivers/BOM and unnormalizable pools; no unknown-as-zero. |
| update_trigger | Model/package/state/channel change; actual returns/fate/source revision; asset life/retirement; provider scope or support-source change; new primary evidence. |

## 11. Data Sources

The retained manufacturer and retailer sources document examples of this product family and the explicitly cited technical distinctions. They do not restrict eligibility to those brands/models or supply default numerical inventory for other configurations. Actual product and supplier evidence remains required under b_product_family.

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-62174 | official_guidance | UN Statistics Division, CPC Version3.0, subclass62174 explanatory note, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62174 | Non-specialized store trade of group481 medical/surgical equipment and orthopaedic appliances; classification context only, not authority for this whole-leaf methodology. |
| drive-rtl10400 | handbook | Drive DeVilbiss Healthcare, Retail Packaged Aluminum Crutches with Accessories, RTL10400 manufacturer specification, https://shop.drivemedical.com/us/en/products/mobility/crutches/underarm/retail-packaged-aluminum-crutches-with-accessories/p/RTL10400/downloadPdf | Actual adult pair product identity and original complete-device route; not actual lot net mass, complete material BOM, LCI, sterility, clinical advice or regulatory/safety approval. Tall RTL10402 is excluded. |
| ghg-product-standard | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), chapters6-9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Unit of analysis, boundary/process subdivision and physical allocation principles. Specific equations and partial-service responsibilities are PCR design choices; no complete-standard conformity or numerical default is claimed. |
| jrc-retail-bemp | official_guidance | European Commission JRC, Best Environmental Management Practice in the Retail Trade Sector (2013), executive summary and retail energy sections, https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf | Evidence to inspect actual retail energy, transport, packaging, cleaning/water and waste; not crutch-specific measured inventory or benchmark factors. |
