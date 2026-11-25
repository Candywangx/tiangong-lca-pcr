---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-watches-clocks-and-jewellery
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Incremental secure-counter retail service for a boxed Tiffany 1837 narrow silver ring, size 6

## 1. Scope and Applicability

This partial incremental rule concerns secure custody and final-valid counter retail handover of ONE specified original boxed silver ring configuration. It does not characterize the ring as the reference service, nor cover all jewellery/watches/clocks. The fixed completion duties remain binding before any complete-store claim.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-watches-clocks-and-jewellery |
| classification_refs | CPC 3.0 62154 — Non-specialized store retail trade services, of watches, clocks and jewellery; narrower / 较窄 |
| covered_products | One original closed-box Tiffany 1837 narrow sterling-silver ring SKU 22993771, size 6, no gemstone or personalization; one actual verified complete packaging revision; non-specialized walk-in store counter service only |
| excluded_products | Other rings/sizes/alloys, gemstones, watches/clocks/parts, specialist brand stores, opening/try-on/polishing/resizing, repaired/used products, delivery/home travel, altered packaging |
| representative_product | SKU 22993771, selected size 6; supplier actual ring and original pack BOM required |
| production_route | Receiving gate; identified closed-packet secure storage; wired display cabinet; attended counter acceptance; electronic receipt; no added packaging |
| market_state | New, dry ambient, closed original boxed configuration; actual lot/state verified |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Incremental secure-counter retail service, not original ring manufacturing |
| How much | One final-valid service for one distinct original packet ID |
| How well | Correct SKU/size/complete package accepted at counter with traceable qualification and final state |
| How long or cycle | Declared pool from receiving through observation cutoff, with linked late-return replacement revisions |
| reference_flow_link | retail_service |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Incremental secure-counter retail service for a boxed Tiffany 1837 narrow silver ring, size 6 |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | non-specialized assortment/channel; site/counter; SKU22993771; size6; no gemstone; no personalization; actual alloy/plating/solder; original complete pack revision/BOM; ambient dry state; observation cutoff; final-valid acceptance rule; S/F/O/T source owners; partial core/modules; supplier receiving gate; original inbound; cabinet model; all-electric support gate; meter/provider geography/voltage |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| measure_count | retail_service; failed_original_packet; cabinet_manufacture; packet_receipt; packet_customer_return; packet_customer_handover; packet_supplier_return; packet_successor | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Count the precisely named complete packet, installed cabinet unit share or service; these are separate ledgers. No mass/count substitution; each final amount is per reference flow. |
| measure_energy | cabinet_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Actual kWh times 3.6 gives MJ; divide common Q once. Provider-free electricity identity does not imply supply mix. |
| measure_carrier | packet_waste; cabinet_retirement | Mass | kg | Actual dry whole carrier net kg with cp_dispatch/cp_terminal; no catalogue tare or new composition multiplication. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Specified complete original packet at store receiving gate with U_i source and inbound boundary |
| starting_condition_role | incremental_service |
| product_classification_scope | Narrower subset of CPC62154; jewellery group382 only; no group484 equivalence |
| recursive_input_rule | Do not recurse retail service into itself; original merchandise U_i is a different product and only F enters this incremental service |
| upstream_dataset_requirement | Complete lot/pack-specific receiving-gate U_i with original inbound once; no generic pure silver substitute |
| disclosure | Partial counter core, mandatory exact completion, source owners, excluded consumer stages and unverified identities |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_scope | all inventory rows | Admit only a documented non-specialized store selling mixed product categories; retain its assortment, business/channel declaration and floor plan. A Tiffany brand store does not qualify merely because this representative ring is branded. The one configuration is Tiffany 1837 narrow sterling-silver ring SKU 22993771, size 6, no gemstone, no personalization, in one unchanged original closed ring-box/pouch configuration identified by actual packaging revision. Verify actual lot, alloy purity, plating, solder, certificates and every box/pouch/liner/label/adhesive component; sterling silver does not prove a complete Ag925 recipe or package BOM. The official page establishes specification only, never a quantitative LCI. | un-cpc-62154; tiffany-ring-spec |
| b_gates | counter | Start at the store receiving gate with counted individually identified complete packets; end at the final-valid customer counter acceptance for that original ID. No retailer opening, try-on, polishing, tarnish removal, resizing, engraving, battery operation, added bag or new gift wrap is admitted. Incoming transport packaging removal is outside this incremental counter but mandatory in completion. Record intactness and packaging revision on every movement; a damaged/opened configuration requires concrete state-specific cards and bilingual sync before completeness. Customer travel/use/end-of-life are excluded; no delivery-to-home service output is claimed. | tiffany-ring-spec |
| b_acceptance | retail_service | cp_custody keeps gross physical movements and a separate acceptance-state history. Q is the count of distinct original packet IDs with one final-valid qualified counter handover at the stated observation cutoff. Refused/unaccepted handovers, revoked acceptance without physical return, internal transfers, missing packets and open stock do not enter Q. A financial refund/discount with still-valid acceptance does not remove Q. Physical return alone does not prove revocation. Repeated sale/return/resale before cutoff retains the same original ID and at most one final-valid service. Late revocation replaces the original pool denominator AND all its attributed numerators/fates, with actual event dates and version links; never subtract revocations again from an already final-state count. | ghg-product-2011 |
| b_ownership | failed_original_packet | At the SAME store receiving gate bind each original packet to one complete supplier vector U_i including ring plus evidenced complete original packaging and original supplier-to-store inbound transport exactly once. Partition original IDs into disjoint S (final-valid accepted), F (irrecoverable retail failure, discarded, genuinely lost or externally retained without acceptance), O (open stock) and T (named supplier/internal successor retaining the original background). N_received = N_S + N_F + N_O + N_T for the declared receipt cohort, including opening-stock source IDs. failed_original_packet is an actual characterized Product input N_F/Q of that complete receiving-gate packet, linking each F source once; it is not a custody satellite. Original production for S/O/T is outside this incremental service and stays with named merchandise/successor ledgers. Supplier return does not erase U_i; resale uses the same U_i. F recipients, physical condition and treatment/continuing responsibility must be known; lost is an investigation status, not an air emission or automatic waste dispatch. | ghg-product-2011 |
| b_physical | counter | Use TOTAL-CUSTODY counts (goods plus held waste): opening + new receipts + physical customer returns = closing + all gross customer handovers + supplier handoffs + internal successor handoffs + confirmed missing originals + actual waste dispatch. All gross handovers include both accepted and never-accepted events once; a later no-movement revocation reclassifies an existing event, never adds a second exit. Condemnation is an internal goods-to-held-waste state change and does not exit total custody; waste dispatch exits later. Opening/closing held waste and measured original-packet masses independently reconcile dispatch tickets. Named physical satellite cards are non-characterized custody transfers only; do not attach a second manufacturing dataset or transport to them. F background and treatment inputs remain characterized. |  |
| b_core | counter | This is a PARTIAL incremental secure-counter service: core includes separately metered cabinet electricity, the complete model-specific cabinet manufacturing/installation lifetime portion, cabinet retirement carrier, F original-packet background and actual complete discarded-packet dispatch. Core excludes common shop operation, cleaning, payment/receipt infrastructure, common building/fixed fixtures, shared security, maintenance/replacements and post-receipt freight. These remain mandatory completion modules b_completion through a_transport, never zero or assumed included. Counter electricity covers all wired LED/lock loads and idle/closed/failed periods; meter topology must distinguish included parent submeter from disjoint meters. The electricity flow specifies no provider/voltage; supply geography, voltage, losses and contract source require separate actual evidence. | jrc-retail-2013 |
| b_asset | cabinet_manufacture; cabinet_retirement | Admit one single actual complete wired steel/glass lockable display cabinet asset_id for this pool (installed_count=1), with verified full hardware/LED/lock/wiring BOM, no battery, and a signed provider boundary for manufacture plus installation. Exclude building, room lighting, payment terminal, external network, operation electricity, cleaning, repairs/replacements and end-of-life from that provider. cp_asset fixes complete installed-unit count, measured whole retirement carrier kg and actual component removals. Whole retirement direct net weighing already excludes removed parts; BOM reconstruction is an exclusive alternative with component weighed sums, never subtract removed parts twice. Repair/LED/lock replacement events are separate mandatory completion sources unless evidenced inside the original complete package; do not hide them in cabinet kg or charge a second full cabinet. |  |
| b_completion | counter | Completion responsibility belongs to the dataset producer before any whole-store retail-service claim. Create named atomic rows/protocols in both languages for each actual module exchange, bind its identity/provider and sync before declaring completeness. Required source modules: M_shop residual store electricity and landlord electricity; M_clean actual cleaning inputs and carriers; M_pay actual payment/receipt/network operation; M_build complete building plus room lighting/fan/fixed shelves/security infrastructure manufacture, maintenance and terminal carriers; M_repair actual cabinet and support-device repair/replacement events; M_freight all post-receipt store handling/returns/waste logistics excluding embedded original inbound; M_treat actual discarded-packet and cabinet treatment. Evidence of absence is required per module; unknown is not absence. Keep this PCR partial until every required module is quantified and passes v_completion; a list of missing modules alone cannot become a complete-business result. | jrc-retail-2013 |
| b_support_gate | counter | The ONLY admitted completion configuration is all-electric shop/landlord support with documented absence of all on-site/landlord fuel combustion, purchased heat/cooling and refrigerant-containing systems serving this service, including backup, security and fire systems. Inspect plant registers, landlord signed scope, nameplates, service/refrigerant records, fuel/heat invoices and every study-period change. A heat pump or unknown refrigerant record fails this gate; no default zero refrigerant/fuel or deferred choice of estimation method is allowed. A different actual configuration requires separately authored species/fuel/emission cards and a complete executable method, reviewed and synced before any complete result. |  |
| b_clean | counter | M_clean must measure each actual supplied cleaning formulation separately in original-formulation kg: opening + receipts = closing unused + final retained used origin + dispatched liquid-origin + dispatched wipe-origin + dispatched container-residue-origin + measured spill/air-species origin. Intermediate used-to-rinsed changes REPLACE states, not add destinations. Complete original solution includes its water once. The source component input is original-formulation kg times verified component mass fraction once; this is original component kg, NOT an exterior molecular species emission. Original formulation kg, original component kg, exterior molecular species kg and whole wet carrier kg remain distinct. Actual whole wet rinsate/wipe/container dispatch is directly net weighed; never multiply it by original formulation fraction. Keep retained container residue distinct from actually dispatched container residue. Water input meters exclude internal reuse: do not subtract reuse. Metered wastewater = actual discharge volume times measured same-state density, with no evaporation/storage deduction. No volume-balance reconstruction is admitted by this completion route. Missing meter/density or unresolved origin/carrier balance blocks completion; source fractions/analytical blanks are applied once. For each original component c retain input_component_c_kg=formulation_kg*source_fraction_c once and disjoint original-component-origin destination kg. Species molecule kg is not original-component kg when chemical reaction adds/removes atoms: require actual reaction/tracer source-origin coefficient origin_ratio_c_s, with molecular weights/stoichiometry documented; component_origin_c_kg=species_corrected_s_kg*origin_ratio_c_s. Sum only conserved source-origin component kg, not whole wet or species molecule kg. Purchased solution water stays inside formulation input; separately metered tap/rinse water is additional only once. | jrc-retail-2013 |
| b_clean_species | counter | For each actual exterior port/species s and matched interval t collect kg/h and actual interval_h_t. Mutually exclusive flux modes: absolute mode J_net_st=J_out_st-J_in_st-J_blank_st; raw differential mode J_net_st=J_diff_st-J_blank_st; already-blank-corrected differential mode J_net_st=J_corr_st with no second background/blank subtraction. Record exactly which inlet/background and instrument blank are included; do not duplicate them. For source attribution choose one exclusive mode: actual source-resolved J_source_st directly OR measured net port flux times one evidenced source_origin_fraction_st; never apply component composition fractions to infer an exterior flux. Exterior attributed molecular species kg=sum J_attributed_st*interval_h_t over matched ports/intervals. Actual air/capture stock changes, internal generation/uptake, inlet, capture/condensate/export and outlet form an independent complete control-volume check; they are NOT subtracted again from already measured exterior flux. Internal capture/condensation is not exterior emission; whole wet condensate is a disjoint actual liquid carrier. Original component-origin accounting excludes atoms added from outside reactions: actual origin_ratio_c_s and molecular weights/stoichiometry map measured molecular species to conserved original component-origin kg; never divide every species by source concentration to reconstruct whole formulation. Investigate negative fluxes with uncertainty; no zero clamp, negative output or automatic uptake credit. Unknown ports, stocks, source attribution or origin coefficients block completion. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| counter | Secure cabinet custody and counter acceptance | required | every admitted pool | incremental service | Q final-valid original IDs |
| retirement | Actual cabinet retirement | conditional | actual retirement; otherwise retain documented live asset | terminal carrier | same Q |

### Process: Secure cabinet custody and counter acceptance (`counter`)

#### Inputs

##### Product flows

###### Failed original background (`failed_original_packet`)

Characterized upstream responsibility input, not a second physical receipt. Its provider is the exact ring plus complete original pack manufacturing and original inbound transport U_i; no retailer operation or disposal.

- Selected flow: Complete original boxed Tiffany 1837 narrow silver ring SKU 22993771 size 6 at store receiving gate
- Flow property / unit: Number of items / Item(s)
- Amount rule: N_F / Q Item(s)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_source`
- Sources: `tiffany-ring-spec`

###### Cabinet operating electricity (`cabinet_electricity`)

Input at use point for wired cabinet LEDs/lock including closed/idle/failure. No room lighting or payment device is hidden in this meter.

- Selected flow: Electricity, alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: 3.6 * E_counter_kWh / Q MJ
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources: `jrc-retail-2013`

###### Complete cabinet manufacture and installation (`cabinet_manufacture`)

One actual model-specific complete installed package measured by unit count and lifetime exposure. Provider exclusions and complete BOM are b_asset.

- Selected flow: Manufacture and installation of one complete wired steel-glass lockable display cabinet
- Flow property / unit: Number of items / Item(s)
- Amount rule: f_ap / Q Item(s)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources:

###### Original physical receiving custody (`packet_receipt`)

Physical custody satellite from supplier only; original background is assigned by b_ownership, not attached here. Opening stock is a ledger balance, never a new receipt.

- Selected flow: Intact closed original boxed Tiffany 1837 narrow silver ring SKU 22993771 size 6
- Flow property / unit: Number of items / Item(s)
- Amount rule: N_new_receipt / Q Item(s)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_custody`
- Sources:

###### Customer physical return custody (`packet_customer_return`)

Physical return satellite of an existing original ID, including returns with still-valid acceptance. No second original production or automatic second service.

- Selected flow: Customer-returned intact closed original boxed Tiffany 1837 narrow silver ring SKU 22993771 size 6
- Flow property / unit: Number of items / Item(s)
- Amount rule: N_customer_return / Q Item(s)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_custody`
- Sources:

#### Outputs

##### Product flows

###### Final-valid service output (`retail_service`)

The service is counted; the original ring is the serviced merchandise, not this service identity.

- Selected flow: Incremental secure-counter retail service for a boxed Tiffany 1837 narrow silver ring, size 6
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_custody`
- Sources: `ghg-product-2011`

###### Gross customer physical handover (`packet_customer_handover`)

Non-characterized physical satellite includes all accepted and never-accepted gross handovers once. Final unaccepted external retention records named recipient/state and F background; no automatic waste.

- Selected flow: Intact closed original boxed Tiffany 1837 narrow silver ring SKU 22993771 size 6 handed to customer
- Flow property / unit: Number of items / Item(s)
- Amount rule: N_customer_handover / Q Item(s)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_custody`
- Sources:

###### Physical supplier handoff (`packet_supplier_return`)

Non-characterized physical satellite; named supplier retains original U_i under T. Actual return logistics is M_freight, not original inbound repeated.

- Selected flow: Intact closed original boxed Tiffany 1837 narrow silver ring SKU 22993771 size 6 returned to supplier
- Flow property / unit: Number of items / Item(s)
- Amount rule: N_supplier_handoff / Q Item(s)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_custody`
- Sources:

###### Physical internal successor handoff (`packet_successor`)

Non-characterized physical satellite to a named successor, never a retail output. T retains the same U_i; demonstrator conversion is outside scope and requires explicit asset-source transfer, not F plus new manufacture.

- Selected flow: Intact closed original boxed Tiffany 1837 narrow silver ring SKU 22993771 size 6 transferred to internal successor
- Flow property / unit: Number of items / Item(s)
- Amount rule: N_successor_handoff / Q Item(s)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_custody`
- Sources:

##### Waste flows

###### Actual discarded complete packet dispatch (`packet_waste`)

One actual complete ring-plus-box/pouch mixed waste carrier sent to a named permitted receiver with an evidenced whole-package sorting/treatment contract. Use actual net consignment kg; do not split and also count silver/box kg. Treatment is M_treat, excluded from this transfer. If any component is removed the state differs and this card cannot cover it.

- Selected flow: Discarded complete dry closed original boxed Tiffany 1837 narrow silver ring SKU 22993771 size 6
- Flow property / unit: Mass / kg
- Amount rule: m_packet_dispatch_kg / Q kg
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_dispatch`
- Sources:

### Process: Actual cabinet retirement (`retirement`)

#### Outputs

##### Waste flows

###### Actual cabinet retirement carrier (`cabinet_retirement`)

Actual dry whole cabinet net carrier including retained LED/lock/wiring, no battery; its separately measured removed parts are disjoint. One terminal dispatch with provider treatment in M_treat. In-service years retain absence evidence, not an invented retirement rate.

- Selected flow: Discarded complete wired steel-glass lockable display cabinet
- Flow property / unit: Mass / kg
- Amount rule: m_cabinet_terminal_kg * f_ap / Q kg
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_terminal`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_pool | all inventory rows | Prospectively declare one same-configuration site pool and observation/return policy; retain every refused, failed, idle, closed and zero-sale interval in that pool. Q=0 leaves measured raw numerators and original responsibility intact and is unnormalizable; never delete it or borrow a successful SKU denominator. Late evidence replaces old versions across all affected pools; a historical burden cannot remain charged to its old pool and be charged again to a new one. No revenue or silver-price allocation is admitted. | ghg-product-2011 |
| a_electric | cabinet_electricity | Prefer direct cabinet circuit subdivision. If the cabinet serves multiple configurations, attribute each measured cabinet interval kWh by reserved usable shelf area m2 times actual reservation hours for ALL beneficiaries. Include empty reserved slots, closed/idle periods and unused cabinet area as an operator beneficiary; allocate that operator residual across all store service pools by store reserved area m2*h in the SAME interval. All weights have identical units and sum to one. Never sum task counts and area-time. Parent store residual subtracts cabinet submeter only if topology proves inclusion; independent disjoint meters are added without subtraction. | ghg-product-2011 |
| a_asset | cabinet_manufacture; cabinet_retirement | Maintain one persistent cabinet asset ledger for every historical period/beneficiary. e_ap is reserved shelf area m2*h attributed by a_electric (including redistributed operator area-time); L_a is expected lifetime usable shelf area m2*h from measured area, calendar lifetime and reservation plan. Manufacture share f_ap=e_ap/L_a, cumulative shares <=1. At a changed lifetime/BOM, REPLACE every prior beneficiary share and post differences against the same source version, never restart manufacture. At actual retirement use actual lifetime exposure as L_a and reconcile all beneficiary shares to one, allocating final unused time by the same operator rule. Retirement quantity is measured whole carrier kg times this final responsibility f_ap ONCE, never times another manufacture fraction. Terminal carrier occurs once; provider-contained treatment cannot be duplicated. | ghg-product-2011 |
| a_support | counter | M_shop uses measured all-beneficiary interval residual electricity and allocates by reserved store floor area m2*h including stock, refused and closed-time reservations; unused operator area is redistributed across all actual service pools by their positive same-interval reserved area-time. M_clean subdivides measured cleaning batches then uses cleaned area m2 of all benefited zones; common zones use the same store-area-time weights. M_pay splits measured active operation, idle, and network source-numerator pools first: active energy by measured device-active seconds, idle energy by reserved terminal hours, network energy by actual transferred bytes; each pool has its own same-unit all-beneficiary denominator including failures. Reconcile numerator pools to parent meters before allocation. M_build uses each complete asset actual reserved area-time e/L, with all-history replacement/final residual rules of a_asset; device assets use reserved h/h lifetime, never m2*h divided by h. M_repair uses actual event material/service quantities assigned by repair cause then the same beneficiary exposure fractions; no assumed annual rates. M_treat links each actual carrier kg to a provider covering only its evidenced transport/treatment boundary once. | ghg-product-2011; jrc-retail-2013 |
| a_transport | counter | For each actual segment s of post-receipt logistics, obtain actual consumed fuel/energy and provider full segment lifecycle transport service including empty/idle travel. Its verified source boundary must include actual vehicle manufacture/installation, actual maintenance/replacements, vehicle end-of-life and operation fuel/energy plus its upstream supply, each source once; a fuel-only provider is incomplete. Actual measured fuel is QA rather than another characterized input when already included in the provider. Disjoint lifecycle sources may be assembled only with exact source-boundary overlap removal before applying the segment weight. Allocate raw segment numerator X_s to beneficiary j using w_js = reserved payload kg_js * actual reserved h_js divided by the sum of reserved payload kg_bs * actual reserved h_bs across ALL beneficiaries b in that SAME segment. Empty unused payload reservation is the operator beneficiary and is redistributed over all actual service pools by their positive same-segment reserved kg*h; a wholly empty segment remains operator raw responsibility until a documented causative service pool is attached, never zero t*km. Store distance and idle hours separately for QA. A provider already attributed to this consignment is used directly; its segment allocation is QA only and is not multiplied again. Original supplier-to-store inbound embedded in U_i is excluded here for S/F/O/T. Return/supplier/waste legs are new actual segments, counted once; verify provider includes empty route or add measured vehicle-km activity with overlap removed. | ghg-product-2011 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_custody | counter | physical custody and service states | event ledger | original_id; SKU; size; packaging_revision; pool_id; event_id; actual_date; supplier; recipient; physical_state; opening_goods; opening_held_waste; N_new_receipt; N_customer_return; N_customer_handover; acceptance_state; acceptance_qualification; revocation_id; financial_only; N_supplier_handoff; N_successor_handoff; N_confirmed_missing; N_dispatch_originals; closing_goods; closing_held_waste; observation_cutoff; prior_version; S; F; O; T; Q | Barcode/tag each complete original packet; count signed physical events at receiving, cabinet, counter and actual recipients. Reconcile daily counts to POS/return/investigation records independently of payment. Inspect SKU/size/package and non-specialized channel evidence; no scanner event without physical/acceptance evidence. Retain no-sale/closed periods and investigate missing originals. Actual tampering/opening blocks the intact-card route. per reference flow; derive disjoint gross custody counts and final-state distinct Q separately using calc_custody and calc_service; no second revocation subtraction | Item(s); date | Each event; daily reconciliation | Full prospectively declared pool plus linked late events | Same site/counter/configuration | per reference flow | Signed events; physical stock audits; return/recipient records; version reconciliation |
| cp_source | counter | complete original background | supplier source ledger | original_id; U_i_source_id; U_i_version; supplier_lot; ring_alloy_certificate; actual_mass_kg; plating; solder; package_revision; complete_component_BOM; origin_gate; original_inbound_segment_id; original_inbound_included; N_received; N_S; N_F; N_O; N_T; background_owner; fate; recipient; original_denominator; source_boundary | Obtain signed supplier complete packet inventory and original inbound segment service; inspect mass/BOM against actual lot and package. Website is specification only. Link each original ID and partition S/F/O/T; reconcile source inventories, units and original receiving gate. Missing quantified complete background or recipient is unresolved, not zero. per reference flow; calc_ownership; N_F/Q receives complete U_i once; S/O/T retain original source responsibility outside this incremental service | Item(s); kg | Each lot and fate change | All originals including opening sources and late revisions | Supplier to same store gate | per reference flow | Supplier signed BOM/inventory; package photos; alloy evidence; freight boundary; identity bindings |
| cp_energy | counter | cabinet electricity | interval meter | meter_id; topology; parent_includes_submeter; interval_start; interval_end; opening_kWh; closing_kWh; E_counter_kWh; shelf_area_m2; reserved_h; all_beneficiaries; operator_unused_m2h; store_reserved_m2h; closed_idle_failure; provider; geography; voltage; line_loss_boundary; calibration; uncertainty | Read calibrated circuit meter each interval; audit wiring and compare measured parent/child boundaries; integrate every closed/idle/failure interval. Measure shelf geometry and actual reservation histories for all beneficiaries. Apply a_electric once; store independent-meter sums separately. Resolve provider/voltage supply before complete use. per reference flow; calc_electricity converts attributed E_counter_kWh to MJ then divides Q once | kWh; m2*h | Each interval over entire pool | All measured study intervals | Actual cabinet and all beneficiaries | per reference flow | Calibrations; raw reads; topology; reservation and full reconciliation |
| cp_asset | counter | cabinet lifetime manufacture | persistent asset ledger | asset_id; model; complete_BOM; installed_count; provider_source_id; provider_boundary; install_date; shelf_area_m2; reservation_calendar; e_ap; L_a; f_ap; all_prior_beneficiaries; original_source_version; lifetime_revision; replacement_allocation_version; operator_residual; repair_event_ids; retirement_date | Inspect actual complete wired cabinet and provider signed manufacture/installation boundary; measure usable shelf area and preserve every beneficiary reservation period. Establish evidenced expected lifetime calendar, not a default. Recompute all historical versions after revisions and actual retirement under a_asset. Acquire/stock ledger validates installed count only. per reference flow; calc_asset; current e_ap/L_a is manufacturing unit share; historical updates replace old allocations | Item(s); m2*h | Each reservation period, revision and retirement | Full asset life and all previous periods | Actual complete cabinet; all beneficiaries | per reference flow | Provider signed BOM/boundary; dimension measurements; calendar; all-history corrections |
| cp_terminal | retirement | cabinet terminal carrier | actual retirement consignment | asset_id; retirement_event_id; carrier_state; direct_or_BOM_mode; gross_kg; tare_kg; measured_removed_component_kg; m_cabinet_terminal_kg; moisture_state; final_L_a; final_e_ap; f_ap; dispatch_date; receiver; treatment_source_id; transport_included; provider_overlap; calibration | At actual retirement weigh the complete remaining dry cabinet net on calibrated scale OR reconstruct from actual weighed retained components; retain mutually exclusive mode. Do not deduct removed parts again from direct net weights. Record receiver/provider transport and treatment; if live, retain asset register and no-retirement evidence. Use final all-history responsibility from cp_asset once. per reference flow; calc_asset_terminal; actual whole carrier kg multiplied by final f_ap once then divided Q | kg; m2*h | Each actual retirement | Full actual lifetime and terminal event | Same cabinet asset | per reference flow | Calibration; weighing; removed-parts partition; receipt; complete provider scope |
| cp_dispatch | counter | discarded complete ring packet | actual waste consignment | original_id; source_id; condemnation_date; opening_held_waste; closing_held_waste; dispatch_id; actual_date; complete_packet_state; gross_kg; tare_kg; m_packet_dispatch_kg; N_dispatch_originals; dry_state; receiver; whole_package_sorting_contract; treatment_boundary; transport_boundary; calibration | Net weigh actual complete dry packet consignment at dispatch with calibrated scale; reconcile individual original IDs and whole-package receiver contract. Held-waste opening plus condemnation minus closing independently checks dispatch count/mass; never alter measured dispatch by subtracting closing again. Separate added outside containers/tare. Missing parcels are investigated, not fictitious dispatch. per reference flow; calc_dispatch; actual net consignment kg/Q; source count links F once | kg; Item(s) | Each consignment and period stocktake | All dispatches and held stock | Same counter and named receiver | per reference flow | Calibration; consignment weights; receiver record; stock/source reconciliation |
| cp_completion | counter | all mandatory support modules | source and allocation ledger | module_id; atomic_row_id; flow_identity; property; unit; state; direction; source_id; source_version; event_id; original_boundary; y_mr; D_m; X_mr; original_pool; current_pool; compatible_version; overlap_portion; raw_numerator; active_energy; idle_energy; network_energy; active_seconds; reserved_h; bytes; cleaned_m2; store_m2h; e_asset; L_asset; repairs; water_volume; water_density; formulation_kg; source_fraction_s; source_fraction_c; input_component_c_kg; species_raw_s_kg; blank_s_kg; species_corrected_s_kg; origin_ratio_c_s; component_origin_c_kg; molecular_weight_s; stoichiometry; exterior_port_id; interval_t; interval_h_t; flux_mode; J_out_st; J_in_st; J_blank_st; J_diff_st; J_corr_st; J_net_st; source_attribution_mode; J_source_st; source_origin_fraction_st; J_attributed_st; exterior_species_kg; internal_generation_kg; internal_uptake_kg; condensate_kg; exterior_inlet_kg; exterior_outlet_kg; air_stock_change_kg; capture_stock_change_kg; capture_export_kg; blank_mode; retained_origin_kg; dispatched_origin_kg; wet_carrier_kg; residue_closing_kg; residue_dispatched_kg; absence_evidence; fuel_refrigerant_gate; Q | Inspect every named M_shop/M_clean/M_pay/M_build/M_repair/M_freight/M_treat source with actual meter/BOM/event/recipient boundaries. Keep original raw denominators and source-version/event overlap map; apply b_clean/a_support/a_transport exactly. For cleaning verify original formulation source mass destinations against actual whole wet carriers, density and blank mode; unknown mass/species/stock remains unresolved. Verify all-electric/no-fuel/no-refrigerant gate using complete landlord/plant records. New actual module exchanges get atomic bilingual cards/protocols before complete use. per reference flow; calc_completion; restore raw numerator, remove exact overlaps, attribute fixed drivers, sum compatible quantities only, divide Q once | original row unit; m2*h; m2; h; seconds; bytes; kg | Each source, interval and revision | Whole pool plus all affected historical versions | All shop/landlord/provider beneficiaries | per reference flow | Source originals; actual parent reconciliation; zero/absence evidence; signed completion audit |
| cp_freight | counter | actual post-receipt logistics | segment provider ledger | segment_s; trip_id; beneficiary_j; actual_fuel_energy_X_s; provider_boundary; vehicle_model; vehicle_manufacture_install_source; vehicle_maintenance_source; vehicle_terminal_source; operation_upstream_source; lifecycle_source_overlap; provider_already_attributed; consignment_source_id; reserved_payload_kg_js; actual_reserved_h_js; all_beneficiary_kg_h; operator_unused_kg_h; empty_distance_km; idle_h; actual_vehicle_km; positive_causative_pool; original_inbound_source_id; overlap_removed; attributed_quantity; Q | Read actual route/time/payload reservations, fuel/energy and provider signed service for the same segment and all beneficiaries; use kg*h capacity allocation only where raw shared numerator remains. Already-attributed provider quantities retain their attribution; segment fields are QA. Verify empty-route coverage and actual idle duration, remove overlap with original inbound and treatment transport. Whole empty/zero-driver routes remain raw unresolved responsibility until causative allocation is evidenced. per reference flow; calc_transport; attributed actual original service numerator divided Q once; no extra factor for already-attributed providers | provider original unit; kg*h; km; h | Each segment and revision | All actual post-receipt logistics | Same segment/all beneficiaries | per reference flow | Route logs; reservation evidence; fuel records; provider/empty/idle scope; source deduplication |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_service | retail_service | Q = count distinct original IDs in final-valid acceptance state; reference output = Q/Q = 1 Item(s), only Q>0. Use b_acceptance and replace late versions. | Q; cp_custody | 1 Item(s) | ghg-product-2011 |
| calc_custody | packet_receipt; packet_customer_return; packet_customer_handover; packet_supplier_return; packet_successor | For each named physical satellite, normalized amount = its disjoint gross physical event count / Q. Apply b_physical total-custody equation as independent QA; never use corrected Q as gross custody exits. | N_new_receipt; N_customer_return; N_customer_handover; N_supplier_handoff; N_successor_handoff; Q; cp_custody | satellite Item(s) per reference flow |  |
| calc_ownership | failed_original_packet | N_F = count distinct F original IDs; failed original amount = N_F/Q Item(s). Attach each exact U_i once; conserve N_received=N_S+N_F+N_O+N_T. | N_received; N_S; N_F; N_O; N_T; U_i_source_id; U_i_version; Q; cp_source | failed complete packets per reference flow |  |
| calc_electricity | cabinet_electricity | E_counter_kWh = sum attributed measured interval kWh using a_electric; final electricity = 3.6*E_counter_kWh/Q MJ. The 3.6 converts kWh to MJ, not an emission factor. | E_counter_kWh; shelf_area_m2; reserved_h; operator_unused_m2h; store_reserved_m2h; Q; cp_energy | MJ per reference flow |  |
| calc_asset | cabinet_manufacture | f_ap=e_ap/L_a under a_asset; manufacturing amount=f_ap/Q Item(s). Expected lifetime revisions replace every old historical fraction; terminal L_a is actual full-life exposure. | e_ap; L_a; f_ap; original_source_version; replacement_allocation_version; Q; cp_asset | complete installed cabinet units per reference flow |  |
| calc_asset_terminal | cabinet_retirement | Final carrier amount = m_cabinet_terminal_kg*f_ap/Q kg; f_ap is the final all-history lifetime responsibility under a_asset, applied once. Direct whole net weighing and component reconstruction are exclusive. | m_cabinet_terminal_kg; f_ap; final_L_a; final_e_ap; Q; cp_terminal | kg per reference flow |  |
| calc_dispatch | packet_waste | Final discarded packet carrier = m_packet_dispatch_kg/Q kg; actual net dispatch is gross minus actual tare. Opening/condemnation/closing stock checks are independent, not additional dispatch corrections. | m_packet_dispatch_kg; N_dispatch_originals; Q; cp_dispatch | kg per reference flow |  |
| calc_completion | counter | For each module row r restore X_mr=y_mr*D_m (or retain evidenced raw X_mr), remove exact source/version/event/boundary overlap once, attribute by a_support/a_transport, then final compatible exchange = (core raw numerator + sum attributed compatible X_mr)/Q. Preserve each row unit/direction/state/provider boundary; do not combine incompatible exchanges. M_clean applies b_clean and b_clean_species: input_component_c_kg=formulation_kg*source_fraction_c; exterior_species_kg=sum J_attributed_st*interval_h_t using exactly one absolute/raw-differential/already-corrected mode and one source-resolved/source-fraction mode; component_origin_c_kg=exterior_species_kg*origin_ratio_c_s with actual molecular weights/stoichiometry excludes externally added atoms. Independent complete air/capture control-volume checks never re-subtract stocks or capture from measured exterior flux; direct wet carrier kg stays separate. | X_mr; y_mr; D_m; overlap_portion; raw_numerator; active_energy; idle_energy; network_energy; active_seconds; reserved_h; bytes; cleaned_m2; store_m2h; e_asset; L_asset; water_volume; water_density; formulation_kg; source_fraction_s; source_fraction_c; input_component_c_kg; species_raw_s_kg; blank_s_kg; species_corrected_s_kg; origin_ratio_c_s; component_origin_c_kg; molecular_weight_s; stoichiometry; exterior_port_id; interval_t; interval_h_t; flux_mode; J_out_st; J_in_st; J_blank_st; J_diff_st; J_corr_st; J_net_st; source_attribution_mode; J_source_st; source_origin_fraction_st; J_attributed_st; exterior_species_kg; internal_generation_kg; internal_uptake_kg; condensate_kg; exterior_inlet_kg; exterior_outlet_kg; air_stock_change_kg; capture_stock_change_kg; capture_export_kg; retained_origin_kg; dispatched_origin_kg; wet_carrier_kg; residue_closing_kg; residue_dispatched_kg; Q; cp_completion | completed row-specific normalized amount |  |
| calc_transport | counter | Raw shared segment mode: w_js=reserved_payload_kg_js*actual_reserved_h_js/sum all beneficiary reserved kg*h in same segment; attributed X_js=X_s*w_js with operator empty/unused handling in a_transport. Already-attributed-provider mode: keep actual provider consignment amount; w_js is QA only. Divide attributed original service quantity by Q once. Modes are exclusive. | actual_fuel_energy_X_s; vehicle_manufacture_install_source; vehicle_maintenance_source; vehicle_terminal_source; operation_upstream_source; lifecycle_source_overlap; reserved_payload_kg_js; actual_reserved_h_js; all_beneficiary_kg_h; operator_unused_kg_h; provider_already_attributed; positive_causative_pool; actual_vehicle_km; idle_h; Q; cp_freight | provider original unit per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_trace | all inventory rows | Retain original evidence, calibration/uncertainty, actual date/site/lot, exact source versions and every source-ID/overlap decision; source hash does not prove scientific applicability. | Originals and audit ledger |
| dq_service | retail_service | Keep final service count separate from merchandise mass, price, physical stock and gross transaction count; do not infer actual qualifying acceptance from payment alone. | Original-ID physical and final-state ledgers |
| dq_partial | counter | Disclose unquantified modules and all identity gaps; partial incremental results cannot be presented as complete retail business, whole-leaf coverage, full LCA, or conformity to the complete GHG Product Standard. | Signed scope/completion and gate audit |
| dq_background | failed_original_packet | Actual lot and complete package U_i must be quantified; specification text, silver price, assumed purity, catalogue tare or an unrelated silver/kg dataset cannot replace it. | Supplier inventory/BOM and original inbound service |
| dq_support | counter | For every conditional module collect presence/absence over the whole pool and all landlord beneficiaries. Zero-driver and unknown fuel/refrigerant, moisture/density, source fraction or recipient block completeness; no invented numeric tolerances or uncertainty-free defaults. | Registers; measurements; reconciliations; named provider records |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_scope | counter | Require actual channel gate b_scope, same SKU/size/state/package revision and supported source gates. No whole-leaf, brand-store, gemstone, clock, part, other size or altered-package substitution. | un-cpc-62154; tiffany-ring-spec |
| v_ledgers | counter | Reconcile each original-ID history, total-custody equation, final-valid Q, S/F/O/T partition and actual event-date revisions independently. Refusal, no-return acceptance revocation, physical return, financial-only refund, resale, supplier return, missing packet and condemnation must each have explicit test cases in the production ledger. A missing final recipient/state is unresolved, never automatic waste. |  |
| v_source | failed_original_packet | Require quantified U_i with exact supplier model/lot/pack BOM and original inbound boundary per original ID. failed_original_packet must carry every N_F original once. One intact packet transfers one complete original vector; never divide its environmental vector using arbitrary silver mass or box count fractions. F descendants do not each inherit U_i. S/O/T vectors must remain with their named downstream owners. |  |
| v_complete_package | cabinet_manufacture; cabinet_retirement; packet_waste | Verify complete package/provider boundaries, actual dry net whole-carrier kg, disjoint removed components, provider transport/treatment overlap and no duplicate manufacture. Direct dispatch weights are not corrected again using opening/closing stock. |  |
| v_lifetime | cabinet_manufacture; cabinet_retirement | Recompute e/L from actual dimensions/time for all historical beneficiaries, sum shares <=1 and exactly one at actual terminal reconciliation. Lifetime revisions replace every affected prior version. Terminal f appears once; stock acquisition is QA, not another full-unit input. |  |
| v_measurement | all inventory rows | Every final row basis.kind is reference_flow and its actual numerator is divided by the same Q once; intermediate raw totals remain in protocols. Required property/unit rules apply only to their named rows. Keep MJ, Item(s), kg, m2*h, h and kg*h distinct; no currency-to-silver or count-to-kg default. Q=0 fails normalized output with raw evidence retained. |  |
| v_completion | counter | A complete result requires all named modules in b_completion, b_support_gate passed, atomically named rows/protocols and identity/provider bindings before sync. cp_completion restores each normalized external result y_mr to its evidenced original numerator X_mr=y_mr*D_m, removes only exact duplicate source ID/version/event/boundary portions, attributes by fixed a_support/a_transport, sums only matching flow identity/property/unit/state/direction/source-boundary quantities with core raw numerators, then divides once by common Q. Unknown D_m, incompatible pool/version, missing fuel/refrigerant absence, zero shared driver, or unquantified module blocks completeness. Preserve partial status otherwise; never add normalized external rows directly to raw rows or sum kg with MJ. |  |
| v_identity | all inventory rows | Unbound rows remain specific candidates. Before a complete foreground dataset bind original direct-read flow/property/unit records and matched integrity receipts, confirm observed public state, official bilingual names, type, qualifiers and provider/treatment boundary. Historical identity observations do not prove current availability or provider performance. No invented UUID, range or numerical default. |  |
| v_additional | counter | Actual additional exchanges, altered merchandise/pack state, cleaning compounds, repair materials or direct emissions require named atomic cards, correct direction/type/state/property/unit, collection and calculation fields in BOTH languages and fresh sync before completeness. Unknown presence is not not_applicable. Preserve uncertainty/calibration and investigate negative/residual balances rather than zero-clamping. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Specified partial incremental service, completed only by this fixed protocol |
| allowed_use | Same configuration and evidenced non-specialized channel; incremental comparison with same boundary; complete result only after v_completion |
| excluded_use | Whole jewellery/watch retail, original ring footprint alone, brand-store claims, consumer stages or complete standard conformity |
| required_metadata | All qualifiers, source IDs/versions/gates, Q and raw totals, S/F/O/T owners, provider boundaries, remaining modules and lifetime correction history |
| required_quality_disclosure | Partial/complete state, measured coverage, unverified identities, missing/zero drivers, uncertainty and no-sale raw pools |
| update_trigger | Actual SKU/pack/channel/route/provider change, late acceptance reversal, source revision, asset lifetime/retirement, new support activity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-62154 | official_guidance | UNSD CPC Version 3.0 code62154, explanatory note: https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62154 | Classification scope includes groups382 and484; no whole-leaf equivalence |
| tiffany-ring-spec | standard | Tiffany 1837 Ring in Silver, Narrow; SKU22993771; selected size6, no gemstone: https://www.tiffany.com/jewelry/rings/tiffany-1837-sterling-silver-rings-1152144421.html | Manufacturer product specification only; no quantified manufacturing/pack BOM or retailer channel proof |
| ghg-product-2011 | standard | WRI/WBCSD Product Life Cycle Accounting and Reporting Standard (2011), PDF pp29–31,65 (printed27–29,63): https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Service/reference-flow distinction and allocation hierarchy only; PCR ledger equations are explicit foreground design, not quoted standard mandates or full conformity |
| jrc-retail-2013 | official_guidance | JRC Best Environmental Management Practice in the Retail Trade Sector, EUR25998EN (2013), PDF pp18,149–150: https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf | Retail energy, effect/general lighting and support aspect completeness; no numerical benchmark used as inventory defaults |
