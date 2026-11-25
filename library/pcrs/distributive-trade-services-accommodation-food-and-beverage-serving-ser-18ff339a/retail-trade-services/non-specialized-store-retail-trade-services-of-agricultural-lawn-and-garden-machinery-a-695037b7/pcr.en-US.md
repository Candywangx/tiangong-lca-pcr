---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-agricultural-lawn-and-garden-machinery-a-695037b7
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Counter-pickup retail service for an unopened EGO LM2135SP complete mower kit in a non-specialized store

## 1. Scope and Applicability

A configuration-specific candidate methodology for incremental retail service and linked physical custody accounting. Apply b_scope through b_residual; a_pool fixes final acceptance and responsibility. The actual lot, store classification and complete foreground data remain required before use. Partial support coverage must remain explicit.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-agricultural-lawn-and-garden-machinery-a-695037b7 |
| classification_refs | CPC 3.0 62186; narrower |
| covered_products | One declared regional EGO LM2135SP complete original battery mower kit; unopened retailer counter-pickup retail service in a documented non-specialized store |
| excluded_products | All other kit configurations, bare tools and separate parts; consumer mowing; retailer assembly, charging, testing, fuelling, repair and delivery |
| representative_product | LM2135SP kit with original 7.5Ah battery and Rapid charger, actual original complete mower/blade/bag/chute/packing configuration verified by lot; a catalog specification, not claimed current stock |
| production_route | Supplier-dispatch background; retail receipt, unopened holding, counter handover, returns and residual history; no retailer operational preparation |
| market_state | New original unopened complete kit, one fixed region and lot configuration; factory assembly, contained cell and precharge verified independently |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Counter-pickup retail service for one unopened EGO LM2135SP complete mower kit |
| How much | One final-valid accepted service for one distinct original complete kit |
| How well | Correct declared configuration and unopened complete state supported by supplier lot/closure evidence, confirmed recipient acceptance; no onsite preparation |
| How long or cycle | One prospectively fixed retail pool interval with all original histories to declared cut-off and versioned late-event correction |
| reference_flow_link | service_output |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Counter-pickup retail service for one unopened EGO LM2135SP complete mower kit |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | regional kit/SKU and signed complete lot BOM; original factory assembly/cell/precharge state; non-specialized store evidence; unopened closure; counter route and no retailer preparation; pool interval/cut-off and final acceptance policy; original ID/physical and acceptance histories; S/F/T/O and original source versions; provider/module coverage and unknowns |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| service_count | service_output | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Q is distinct final-valid original IDs by c_acceptance; one reference service is 1 Item(s), never kg or mowing hours. Q=0 cannot normalize. |
| custody_count | supplier_receipt; returned_kit; handover_kit; supplier_return_kit; internal_asset_kit; failed_original_kit | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Gross physical original complete-kit event counts use c_goods; failed_original_kit uses distinct F source count under c_background, independently. A bag, spare blade, cell or charger inside this kit is not another kit. |
| electric_energy | retail_ac | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Calibrated raw kWh converted once by 3.6 using c_electricity; no nameplate-power or Ah-to-energy activity default. |
| carrier_mass | whole_kit_waste | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Whole-carrier actual net dispatch kg by c_waste; count and kg remain separate, linked by real package IDs. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual unopened complete original kit at retailer receipt, documented lot/configuration; supplier-dispatch W_j and separate inbound I_j retained |
| starting_condition_role | Incremental retail starting gate with separate original goods custody/background continuity |
| product_classification_scope | Narrow subset of CPC 62186 merchandise group441; lawn mower44121, not generic hand tools or a transportation cart |
| recursive_input_rule | Do not recursively demand another retail service or manufacturing vector for customer return/resale; preserve unique original sources under b_background |
| upstream_dataset_requirement | Full actual regional kit manufacture/original pack at dispatch plus disjoint inbound; no bare-tool, capacity-scaled or generic material substitute |
| disclosure | Separate physical satellites, incremental service, S/F/T/O, partial support modules, provider boundaries and unknown states |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_scope | custody; retail; residual | This narrower scope covers only a documented non-specialized physical store and counter pickup of the single declared regional LM2135SP kit configuration, new and unopened by the retailer. LM2130SP tool-only, other battery configurations, used machines, separately sold cells, delivery, assembly, charging, test mowing, fuelling and repair are outside this route. The official product page identifies a mower kit with a 7.5Ah battery, Rapid charger and blade system; the linked LM2130SP tool manual lists bag, frame, preinstalled mulching insert, chute and blades. They establish product scope, not current stock, a lot BOM or a retailer operation. Coming Soon is not stock evidence. Require signed lot packing/BOM, original closure, exact regional machine/cell/charger/accessory identities, original factory assembly and precharge states; absent information is unknown. The retailer does not open a package to prove the sealed route. This narrowly selected core additionally requires documented absence of onsite and landlord-supplied space heating/cooling, combustion fuel and refrigerant equipment serving the declared store area. Inspect the complete facility/lease/equipment records, including backrooms, rather than inferring absence from no mower preparation. Any present or unknown HVAC, fuel, purchased heat or refrigerant requires a route-specific extension with exact carrier/species/medium cards and measured activity/leak/stock data before completeness; no zero combustion or refrigerant emission is inferred. | `un-cpc62186`; `un-cpc44121`; `ego-lm2135sp`; `ego-mower-manual` |
| b_gates | custody; retail; residual | The incremental service starts when this original complete package is physically received by the retailer and ends at final-valid counter acceptance, with residual and late-return histories retained to the declared cut-off. Supplier manufacture and original packing end at supplier dispatch; inbound transport to receipt is a separate mandatory source. Consumer mowing, post-acceptance charging and consumer end-of-life remain downstream. Physical custody satellite flows supplier_receipt, returned_kit, handover_kit, supplier_return_kit and internal_asset_kit are a separate goods ledger: never connect their gross incoming counts as additional manufacturing demands in the incremental service. b_background assigns original embodied sources once. The failed_original_kit input represents the original F manufacture at supplier dispatch; operational retail electricity and actual waste dispatch also enter the incremental service, while all omitted support sources must be completed under b_completion before a full-service claim. | `ghg-product-2011` |
| b_background | custody; retail; residual | For every original package ID j retain W_j, the full manufacturing/original-packing inventory vector strictly at supplier dispatch, including actual contained battery, charger, installed and spare blades, accessories and actual full packaging BOM. Add separately verified inbound vector I_j to the retailer receiving gate. If a provider bundles inbound, require evidenced stage separation and count that segment once; unknown separation blocks completeness. Never substitute bare-tool mass or Ah-scaled battery impacts, and never add a second component source already included in W_j. At each cut-off give that same original source exactly one current responsibility S (final-valid sale; merchandise vector remains downstream), F (failed/lost/condemned or retained externally without valid acceptance; charged to its original retail pool), T (supplier or named internal asset custodian with continuing background), or O (still open stock/history). S/F/T/O are exclusive background ownership states, not physical counts. Return/resale replaces the old state and never manufactures another kit; transfer to demonstration moves the SAME W_j and I_j to T, not full F plus new manufacture. F background stays even if no physical waste is dispatched; a waste carrier receives no duplicate W_j. failed_original_kit is this same original dispatch-manufacturing demand, expanded by W_F/N_F only once, with actual F inbound I_F added separately; never add the expanded W_F again beside that input. | `ego-lm2135sp`; `ego-mower-manual`; `ghg-product-2011` |
| b_completion | custody; retail; residual | This core is an explicitly partial incremental inventory. Before claiming a complete retail service, attach disjoint measured modules for receiving/handling and storage; building structure, shelves, handling trolley and checkout/ICT/lighting/HVAC assets; their actual operation and maintenance; cleaning/water/effluent and packaging actually added by the retailer; payment, communications, administration and security backend; supplier inbound, actual supplier-return/internal/waste transport and complete waste treatment. Apply a_shared, a_assets, a_transport, a_digital, a_cleaning and c_aggregate. A complete provider package may remain intact only with its real model/contract, reference denominator, original source scope and exact included manufacture, installation, fuel/electricity, repair, transport and end-of-life exclusions. Otherwise collect named atomic cards, applicable protocols, quantities and bilingual sync for actual missing exchanges before completeness. Named modules without those data are not a complete dataset; missing quantities/providers are unknown, never zero. Parent/submeter deductions occur only when the parent really contains the child. Do not double count a utility, transport leg, contained component or provider-contained terminal carrier. | `ghg-product-2011` |
| b_residual | whole_kit_waste; supplier_return_kit; handover_kit | Condemnation is an internal goods-to-held-waste state change: remove N_K from goods once, not again at waste dispatch. Direct W_dispatch is the actual consignment net kg after real external overpack tare, without subtracting retained/reused stock again. Complete-package weighing includes its original packaging and contained cell; separate cell or blade outputs cannot also be added. W_open + W_generated + W_waste_in = W_close + W_dispatch + W_waste_transfer + known_missing_waste_kg + signed_r_waste is an independent kg reconciliation linked to the count ledger by actual package IDs and measured condemnation kg, not a count-to-kg assumption. Preserve known missing held-waste kg separately from unresolved signed residuals. Require recipient treatment coverage for cell, machine, charger, accessories and original pack, all transport and actual emissions/residues, with provider overlaps excluded. Unknown or opened/damaged/dismantled state requires a specific extension and blocks completeness. External unaccepted retention has its actual recipient/state and F background; it is not automatically retailer waste. | `ego-mower-manual`; `ghg-product-2011` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| custody | Original complete-kit custody satellite | required | Every original kit physical event | Independent physical/background ledger; not extra service manufacturing demand | Q |
| retail | Unopened counter retail service | required | All fixed-pool operations and final acceptance | Partial incremental service core | Q |
| residual | Whole unopened-kit waste dispatch | conditional | Only actual intact original-kit waste dispatch; absent requires evidence; unknown blocks completeness | Full carrier and terminal treatment responsibility | Q |

### Process: Original complete-kit custody satellite (`custody`)

#### Inputs

##### Product flows

###### Unopened EGO LM2135SP complete original mower kit (`supplier_receipt`)

New supplier receipts at the retailer receiving gate. Count the actual complete original kit, including its original packaging, as one custody object; the kit is neither bare mower mass nor an extra battery purchase.

- Selected flow: Unopened EGO LM2135SP complete original mower kit
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: N_R/Q
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_custody`
- Sources: `ego-lm2135sp`; `ego-mower-manual`

###### Unopened EGO LM2135SP complete original mower kit (`returned_kit`)

Physical customer returns only when the same original kit remains unopened, complete and within the same configuration. Inspect outer closure and supplier records without opening it. Opened, damaged or incomplete returns require a state-specific extension before completeness.

- Selected flow: Unopened EGO LM2135SP complete original mower kit
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: N_C/Q
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_custody`
- Sources: `ego-lm2135sp`; `ego-mower-manual`

#### Outputs

##### Product flows

###### Unopened EGO LM2135SP complete original mower kit (`handover_kit`)

Gross physical counter handovers include successful and subsequently invalid or refused-acceptance external retention. Identify each recipient and actual sealed state; this physical movement is independent of the reference service.

- Selected flow: Unopened EGO LM2135SP complete original mower kit
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: N_H/Q
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_custody`
- Sources: `ego-lm2135sp`; `ego-mower-manual`

###### Unopened EGO LM2135SP complete original mower kit (`supplier_return_kit`)

Actual unopened complete-kit dispatch to a named supplier with its retained original source history. A financial credit or transfer of background responsibility alone is not a physical dispatch.

- Selected flow: Unopened EGO LM2135SP complete original mower kit
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: N_T/Q
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_custody`
- Sources: `ego-lm2135sp`; `ego-mower-manual`

###### Unopened EGO LM2135SP complete original mower kit (`internal_asset_kit`)

Actual unopened complete-kit transfer out of this merchandise pool to a named internal demonstration-asset account. Later opening, assembly, charging and demonstration belong to that separate asset process, with the same original manufacturing source.

- Selected flow: Unopened EGO LM2135SP complete original mower kit
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: N_I/Q
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_custody`
- Sources: `ego-lm2135sp`; `ego-mower-manual`

### Process: Unopened counter retail service (`retail`)

#### Inputs

##### Product flows

###### EGO LM2135SP complete original mower kit at supplier dispatch (`failed_original_kit`)

Original manufacturing/original-packing responsibility for distinct F-owned kit IDs, not another physical receipt. Bind the actual complete dispatch configuration including contained cell, charger, blades, accessories and original pack; never substitute the current failed carrier state. The source-specific weighted upstream vector W_F/N_F expands this input once; F inbound I_F remains a separate completion source. When N_F=0 retain the observed absence and raw source ledger without dividing by N_F.

- Selected flow: EGO LM2135SP complete original mower kit at supplier dispatch
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: N_F/Q
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_retail`
- Sources: `ego-lm2135sp`; `ego-mower-manual`

###### Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca` (`retail_ac`)

Measured point-of-use AC electricity for the declared incremental retail circuits. Includes failed and idle operating periods in the fixed pool. Grid mix, voltage and provider are independently declared; no charging electricity is inferred from battery capacity, charger wattage or advertised runtime.

- Selected flow: Electricity, alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: 3.6*E_p/Q
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_retail`
- Sources: `ghg-product-2011`

#### Outputs

##### Product flows

###### Counter-pickup retail service for one unopened EGO LM2135SP complete mower kit (`service_output`)

One final-valid accepted service for one unique original complete kit at the counter gate. This is a retail service, not mowing, mower manufacturing or one battery-charge cycle.

- Selected flow: Counter-pickup retail service for one unopened EGO LM2135SP complete mower kit
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: 1 Item(s)
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_retail`
- Sources: `ghg-product-2011`

### Process: Whole unopened-kit waste dispatch (`residual`)

#### Outputs

##### Waste flows

###### Discarded unopened EGO LM2135SP complete original mower kit with contained battery and original packaging (`whole_kit_waste`)

Whole intact original kit actually dispatched as one waste consignment to a qualified named treatment recipient. Weigh its full original body, battery, charger, accessories and original packaging together; a separate transport overpack is excluded and needs its own extension. This row cannot cover broken, opened, dismantled, leaking or separated-cell waste.

- Selected flow: Discarded unopened EGO LM2135SP complete original mower kit with contained battery and original packaging
- Flow property / unit: Mass / kg
- Amount rule: W_dispatch/Q
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residual`
- Sources: `ghg-product-2011`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_pool | custody; retail; residual | Prospectively fix one homogeneous regional kit configuration, store/channel, observation interval, cut-off, return policy and pool ID before observing sales. Include every same-configuration success, refusal, revoked acceptance, repeated attempt, internal transfer, loss, idle and zero-sale cohort. Q is the distinct original IDs whose latest acceptance remains valid at the cut-off; no count for an invalid acceptance, financial-only adjustment with valid acceptance leaves Q unchanged, and revocations are not subtracted a second time. Keep physical gross handovers/returns independent. A later physical return or acceptance revocation replaces the original pool numerator, denominator, fate and background version using the actual event date; never shift its old burden to a convenient later sales pool or duplicate resale. Q=0 is explicitly unnormalizable with the full raw numerator retained; never delete the cohort or invent a denominator. | `ghg-product-2011` |
| a_shared | retail; custody; residual | First subdivide actual sources/meters. For a remaining raw shared source X_e use X_ep=X_e*d_ep/sum_b(d_eb), once, over all actual beneficiaries including empty reservations, failures and closed periods. Collect positive/known full drivers and reconcile sum_p X_ep=X_e. Handling activity uses measured reserved handling-equipment seconds; powered devices, checkout, lamps and fans use measured reserved device-time including idle; physical facility fixed pools and shelves use separately measured served area*time; This core route admits no store/landlord heating/cooling, fuel or refrigerant source without the b_scope extension; there is no unspecified thermal-driver method. These are distinct source scopes. A zero or unknown complete driver sum is unresolved, not a licence to erase the source or allocate equally. Freeze original event/beneficiary/pool/version links so later stock or sales cannot reassign old overhead. This PCR chooses these declared measured causal drivers; the GHG standard supports subdivision/physical relationships, not any invented numerical default. | `ghg-product-2011` |
| a_assets | retail; custody; residual | For each actual building, shelf, trolley, checkout, ICT, lamp and reusable cleaning-tool asset (and HVAC only after the b_scope extension) retain exact model/BOM or verified complete-package vector A_a at manufacturing/installation gate, separately bounded inbound, operation, event repairs and end-of-life. Package-contained scopes are excluded from separate modules. Current original-pool responsibility f_apv=e_recorded_ap/L_expected_av uses MEASURED cumulative beneficiary exposure e_recorded_ap, and evidenced expected total lifetime exposure L_expected_av across every beneficiary; use building/shelf served area*time, powered or handling equipment reserved device-time, not area for a powered lamp. For each reusable cleaning tool use e_recorded_ap=sum measured cleaned surface m2 for its actual individual passes, retaining repeated passes, and L_expected_av in the SAME cumulative cleaned m2 over all lifetime users; measure pass boundaries/area rather than equating it to a floor-plan default. Enforce nonnegative fractions and sum historical fractions<=1. A lifetime revision replaces all previous beneficiary fractions and their booked vectors, rather than charging another full A_a or correcting only the current pool. At retirement set L_final=sum all measured lifetime exposures and replace every allocation using e_recorded_ap/L_final, accounting for the full residual. An unopened stock kit moved to demonstrator receives its same original W_j/I_j via T. For actual repair, asset delivery/relocation/retirement transport and end-of-life treatment events, first assign the raw event vector to the exact asset ID: a single-asset event is direct; a shared repair/treatment event uses measured processing seconds for each serviced asset divided by the positive known all-asset processing-seconds sum, while transport uses a_transport. Then apply the same full asset historical beneficiary fractions f_apv, replacing every historical allocation after lifetime revision/retirement. Do not assign the whole event only to the current sales pool. Retain source/asset/event/beneficiary/version IDs and exclude any event already contained in a complete provider package. Real repair material or a complete repaired-object service remains its actual exchange; repair-material kg cannot pose as a complete asset. Terminal whole-device direct net weighing already excludes removed parts: use direct weighing or a BOM reconstruction exclusively. Multiply its real terminal carrier kg by final lifetime owner fraction once, never again by a manufacture fraction. Asset acquisition/retirement counts validate that ledger, not a second consumed-item input. | `ghg-product-2011` |
| a_transport | custody; residual; retail | For supplier inbound, actual returns, internal transfers and waste/asset/material routes retain trip/leg/source IDs, dates, loaded and empty distance, measured fuel or provider activity, real consignment mass/volume and capacity constraint evidence. Prefer a provider inventory for the exact actual consignment with proven fuel, infrastructure and empty-return coverage. Otherwise allocate raw trip vector first to consignments using measured tonne*km only where mass is evidenced binding, or occupied volume*km where volume binds; an unknown or different binding constraint requires reviewed matching measurement. Retain actual empty-leg vehicle_km>0 and actual stationary idle_hours from timestamps and operating state, with its measured fuel/provider source; zero tonne-km or zero travelled distance cannot erase either source. A provider may contain those exact observed empty/idle periods only with source-scope evidence; exclude overlapping separate fuel/activity. Otherwise for each empty-leg source vector X_empty allocate to linked original route reservations using r_empty_p=sum reserved_capacity_p*empty_km_p, X_empty_p=X_empty*r_empty_p/sum_b r_empty_b. For each stationary-idle source vector X_idle use r_idle_p=sum reserved_capacity_p*idle_hours_p and X_idle_p=X_idle*r_idle_p/sum_b r_idle_b. Reserved capacity is measured reserved kg where mass binds or reserved m3 where volume binds, with one same unit for every beneficiary and explicit actual eligibility evidence. Keep all actual beneficiary and empty/failed reservations, positive known driver sums, measured empty distance and stationary idle duration, source/consignment/owner versions and fuel; unknown sums/capacity coverage block completeness. These source vectors are disjoint from loaded movement and one another. Then assign the consignment source to its original goods/asset/material responsibility and beneficiary-pool/version under b_background/a_assets/a_shared. Provider consignment attribution only skips repeated vehicle allocation; it does not skip original source/owner attribution. Exact final-owner/pool quantities may bypass that owner step only with evidence. Keep attribution_level, original_owner and source portions summing to actual carrier. Known shares are not renormalized to conceal an unknown portion. | `ghg-product-2011` |
| a_digital | retail | Collect actual disjoint provider scopes for payment authorization, administration, communications and security backend; an internet-access packet alone does not cover the others. For each shared basket authorization/admin event e, X_event_ep=X_event_e*processing_seconds_ep/sum_b processing_seconds_eb, with measured per-line processing seconds for every beneficiary including failed attempts and empty reservations, one source ID and a positive known full sum; shares sum1, never a full multi-SKU event per pool. For each unique original network interval i, H_ip=source_hours_i*endpoint_seconds_ip/sum_b endpoint_seconds_ib, using all-beneficiary measured reserved endpoint-connection seconds including empty/failed reservations and a positive known full sum. Link H_ip to the exact provider source vector/denominator, not a fictitious SKU-exclusive connection. Do not count those same provider source-hours again as overlapping fixed/active/idle source-hours. For each camera capture c, a_cp=sum disjoint zones/times area_cpzt*duration_czt in m2*s over all beneficiaries and empty reservations; alpha_cp=a_cp/sum_b a_cb with positive known full sum, and X_capture_cp=X_capture_c*alpha_cp. Freeze that original capture/clip beneficiary map. Storage activity B_cp=sum disjoint retained clip intervals bytes_ci*retention_seconds_ci*alpha_cp in byte*s, using actual bytes in each interval and the same frozen capture map, not later sales. 1 GB=10^9 bytes, 1 GiB=2^30 bytes; unknown footage shares or source coverage block completeness. Retain source_hours, endpoint_seconds, capture_map, original_owner/pool/version and complete provider denominator. Restore normalized packets to raw vectors by c_aggregate and do owner attribution once. | `ghg-product-2011` |
| a_cleaning | retail; custody; residual | For actual retailer cleaning record each exact original formulation source and its complete original container/BOM at receipt, active ingredients and concentration only where supplier evidence supports them. Use the persistent original-source equation m0_j=sum historical final source_origin_export_jk+sealed_unused_kg_j+opened_residue_kg_j+retained_other_kg_j, where all current states and historical final external exports are mutually exclusive and cover the original formulation only. retained_other includes measured original-source film on cleaned surfaces until actually exported; unknown film is not zero. Every state transition replaces the old state with historical owner/pool versions preserved. Newly added water/dirt or an outside cloth/container is not original formulation kg. Use/withdrawal is an internal event, never a second final export. Spilled/rinsed denotes final source-origin exports only: a spill still on-site is current retained stock and, when collected in rinsate, replaces its old state rather than counting both. Direct measured whole rinsate/waste kg is a different carrier, not multiplied again by source composition. For original source j with measured original formulation m0_j, record first-use withdrawal u_jp and disjoint pre-use loss/condemnation l_jp, with final owner fraction h_jp=(u_jp+l_jp)/m0_j. Apply the full actual original formulation/container manufacturing and separate inbound vector once by h_jp to the original beneficiary-pool/version; neither rinse water nor new dirt enters h_jp. Preserve every partial original-source portion, carrier/event ID, first-use or pre-use-F owner, original pool and replacement version across periods, including later carrier treatment; never reattribute an old source portion on a later cleaning event. Preserve all earlier allocations and unwithdrawn stock; replace historical allocations on correction and reconcile cumulative fractions<=1 with final residual responsibility. A terminal original container is actual measured carrier kg multiplied by the final source-owner fraction once, not a second manufacture input. Import-water meters already exclude internal reuse; do not subtract reuse again. Direct effluent is actual metered V_discharge*rho at measured conditions; keep supply/evaporation/storage balance independent, with no speculative reconstruction. Collect every actual formulation, water, carrier, cloth, original and added container and final treatment as separate named exchanges or one verified real service package with exact scopes; unmeasured or unknown presence blocks completeness. Do not double charge solution water or waste constituents beside a full carrier. | `ghg-product-2011` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_custody | custody | supplier_receipt; returned_kit; handover_kit; supplier_return_kit; internal_asset_kit | Serialized custody and original background ledger | original_id; physical_event_id; acceptance_event_id; event_date; recipient; package_state; regional_model; factory_BOM; closure_evidence; factory_assembly; factory_precharge; site_hvac_presence; landlord_hvac_presence; fuel_presence; refrigerant_presence; facility_scope_evidence; N_open; N_R; N_C; N_close; N_H; N_T; N_I; N_K; N_missing; signed_r_goods; W_j; I_j; stage_separation; s_j; f_j; t_j; o_j; original_owner; pool_id; version | Scan every original carton/serial ID at receipt, counter movement, return and transfer; use signed supplier complete-kit pack/closure evidence without opening. Inventory physical goods at both cut-offs, independently retrieve acceptance history and supplier-dispatch W_j plus separate inbound I_j. Link condemnation count to cp_residual measured kg by actual ID. Calibrate scanners/count controls by independent double count and audit invoices; investigate missing IDs and signed residuals. | Item(s); original inventory vector by each native unit | Every movement plus both cut-off counts and each late-event revision | Full fixed-pool interval and earlier original-source history; late-event revisions retained | Actual non-specialized store receiving, counter, named transfer recipient | per reference flow | Signed lot/BOM, closure photographs, invoices, recipient signatures and reconciled scans |
| cp_retail | retail | failed_original_kit; retail_ac; service_output | Acceptance events and circuit meter records | original_id; acceptance_event_id; event_date; latest_valid_acceptance; cut_off; pool_id; version; N_F; W_F; I_F; W_j; I_j; f_j; original_id_background; stage_separation; meter_id; circuit_scope; meter_start; meter_end; multiplier; E_raw; d_ep; d_eb; parent_contains_child; original_owner; operator_action; route_absence_evidence; site_hvac_presence; landlord_hvac_presence; fuel_presence; refrigerant_presence; facility_scope_evidence | Read calibrated circuit meters at both interval ends and each circuit change; maintain actual circuit parent/child diagram, multipliers and at least monthly bill reconciliation. Record every acceptance, refusal and revocation linked to physical IDs without treating refunds as returns. Observe opening/assembly/charging/test absence at every handling event and reconcile CCTV/work orders; inspect facility/lease/equipment records for onsite/landlord HVAC, fuel and refrigerant absence over the complete period; unknown route status stays unresolved. Independent meter check at period start/end and after repair with traceable standard; log accuracy/uncertainty, failed readings and retained idle time. | kWh raw; MJ after 3.6; accepted services Item(s) | Each acceptance event; interval meter endpoints; monthly invoice check | Full fixed-pool interval including zero sales and idle; all later acceptance revisions | Named counter and actual declared circuits | per reference flow | Meter certificates, traceable check readings, event log and route evidence |
| cp_residual | residual | whole_kit_waste | Whole-kit waste consignment and held-stock ledger | consignment_id; original_id; condemnation_package_id; measured_condemnation_kg; N_K; gross_kg; tare_external_overpack_kg; package_state; W_open; W_generated; W_waste_in; W_close; W_waste_transfer; signed_r_waste; known_missing_waste_kg; recipient; treatment_scope; source_id; original_owner; pool_id; version | Weigh each complete original kit or intact consignment on a calibrated scale; weigh external overpack tare separately, retain original kit packaging. Daily zero/check-mass checks, period-start/end and post-repair traceable calibration with resolution/uncertainty. Match IDs to condemnation counts, both held-waste stock takes and signed treatment manifests. Direct dispatch net is final carrier quantity; inspect original closure without opening; unknown/damaged state needs extension. | kg for whole carrier; separate Item(s) linkage | Each condemnation, movement and consignment; both cut-offs | Entire fixed pool and held-waste history including late revisions | Named waste store and recipient; actual treatment chain | per reference flow | Scale checks, closure images, treatment acceptance and scope evidence |
| cp_support_retail | retail | failed_original_kit; retail_ac; service_output | External completion source and allocation record | source_id; source_scope; raw_X_mk; z_mk; D_m_original; provider_scope; direction; flow_type; property; unit; attribution_level; source_share; owner_fraction; original_owner; pool_id; version; X_e; d_ep; d_eb; A_a; e_recorded_ap; L_expected_av; L_final; lifetime_version; asset_id; asset_event_id; asset_processing_seconds_p; asset_processing_seconds_all; cleaned_surface_m2; pass_id; trip_id; leg_id; consignment_id; loaded_km; empty_km; idle_hours; vehicle_km; fuel; reserved_capacity_p; reserved_capacity_unit; capacity_eligibility; r_empty_p; r_empty_b; r_idle_p; r_idle_b; X_empty; X_idle; mass_kg; volume_m3; capacity_constraint; source_hours; source_hours_i; endpoint_seconds; endpoint_seconds_ip; endpoint_seconds_ib; H_ip; X_event_e; processing_seconds_ep; processing_seconds_eb; within_event_share; capture_map; capture_id; clip_id; area_cpzt; duration_czt; a_cp; a_cb; alpha_cp; X_capture_c; bytes; bytes_ci; retention_seconds; retention_seconds_ci; B_cp; formulation_source_kg; m0_j; u_jp; l_jp; h_jp; original_formulation_container_vector; separate_inbound_vector; source_origin_exports; source_origin_export_jk; original_source_portion_kg; carrier_id; first_use_event_id; preuse_loss_event_id; sealed_unused_kg; opened_residue_kg; retained_other_kg; V_discharge; rho; parent_contains_child; Q | For the actual retail process collect b_completion provider originals and source-scope matrix before use; read calibrated activity meters, trip logs, measured exposure/area/device-time, event shares, original camera map, endpoint seconds and cleaning stock/effluent measurements. Preserve raw source fields and native units, actual times and all beneficiaries. Check meter/scale zero and known standards daily where used and obtain traceable period-start/end/post-repair calibration; retain certificate uncertainty. Verify signed model/BOM/contract scopes and lifetime evidence, freezing original owner histories; test duplicate source IDs and provider-contained scopes. Each process protocol is a view of the SAME source ledger, not another measurement or allocation. Unknown presence/quantity requires a named extension and blocks complete service. | Native exchange units and driver SI units; provider denominators explicit | Each source event and interval; reconcile at least monthly and each lifetime/late-event revision | Full pool plus all prior asset/source beneficiaries and terminal residual | Actual retail sources; complete provider gate and shared beneficiaries | c_support then c_aggregate; restore external denominator only once; exact source-ID deduplication; never aggregate dissimilar units | Original provider vectors, raw activities, calibration, historical fractions, source/owner reconciliation |
| cp_support_custody | custody | supplier_receipt; returned_kit; handover_kit; supplier_return_kit; internal_asset_kit | External completion source and allocation record | source_id; source_scope; raw_X_mk; z_mk; D_m_original; provider_scope; direction; flow_type; property; unit; attribution_level; source_share; owner_fraction; original_owner; pool_id; version; X_e; d_ep; d_eb; A_a; e_recorded_ap; L_expected_av; L_final; lifetime_version; asset_id; asset_event_id; asset_processing_seconds_p; asset_processing_seconds_all; cleaned_surface_m2; pass_id; trip_id; leg_id; consignment_id; loaded_km; empty_km; idle_hours; vehicle_km; fuel; reserved_capacity_p; reserved_capacity_unit; capacity_eligibility; r_empty_p; r_empty_b; r_idle_p; r_idle_b; X_empty; X_idle; mass_kg; volume_m3; capacity_constraint; source_hours; source_hours_i; endpoint_seconds; endpoint_seconds_ip; endpoint_seconds_ib; H_ip; X_event_e; processing_seconds_ep; processing_seconds_eb; within_event_share; capture_map; capture_id; clip_id; area_cpzt; duration_czt; a_cp; a_cb; alpha_cp; X_capture_c; bytes; bytes_ci; retention_seconds; retention_seconds_ci; B_cp; formulation_source_kg; m0_j; u_jp; l_jp; h_jp; original_formulation_container_vector; separate_inbound_vector; source_origin_exports; source_origin_export_jk; original_source_portion_kg; carrier_id; first_use_event_id; preuse_loss_event_id; sealed_unused_kg; opened_residue_kg; retained_other_kg; V_discharge; rho; parent_contains_child; Q | For the actual custody process collect b_completion provider originals and source-scope matrix before use; read calibrated activity meters, trip logs, measured exposure/area/device-time, event shares, original camera map, endpoint seconds and cleaning stock/effluent measurements. Preserve raw source fields and native units, actual times and all beneficiaries. Check meter/scale zero and known standards daily where used and obtain traceable period-start/end/post-repair calibration; retain certificate uncertainty. Verify signed model/BOM/contract scopes and lifetime evidence, freezing original owner histories; test duplicate source IDs and provider-contained scopes. Each process protocol is a view of the SAME source ledger, not another measurement or allocation. Unknown presence/quantity requires a named extension and blocks complete service. | Native exchange units and driver SI units; provider denominators explicit | Each source event and interval; reconcile at least monthly and each lifetime/late-event revision | Full pool plus all prior asset/source beneficiaries and terminal residual | Actual custody sources; complete provider gate and shared beneficiaries | c_support then c_aggregate; restore external denominator only once; exact source-ID deduplication; never aggregate dissimilar units | Original provider vectors, raw activities, calibration, historical fractions, source/owner reconciliation |
| cp_support_residual | residual | whole_kit_waste | External completion source and allocation record | source_id; source_scope; raw_X_mk; z_mk; D_m_original; provider_scope; direction; flow_type; property; unit; attribution_level; source_share; owner_fraction; original_owner; pool_id; version; X_e; d_ep; d_eb; A_a; e_recorded_ap; L_expected_av; L_final; lifetime_version; asset_id; asset_event_id; asset_processing_seconds_p; asset_processing_seconds_all; cleaned_surface_m2; pass_id; trip_id; leg_id; consignment_id; loaded_km; empty_km; idle_hours; vehicle_km; fuel; reserved_capacity_p; reserved_capacity_unit; capacity_eligibility; r_empty_p; r_empty_b; r_idle_p; r_idle_b; X_empty; X_idle; mass_kg; volume_m3; capacity_constraint; source_hours; source_hours_i; endpoint_seconds; endpoint_seconds_ip; endpoint_seconds_ib; H_ip; X_event_e; processing_seconds_ep; processing_seconds_eb; within_event_share; capture_map; capture_id; clip_id; area_cpzt; duration_czt; a_cp; a_cb; alpha_cp; X_capture_c; bytes; bytes_ci; retention_seconds; retention_seconds_ci; B_cp; formulation_source_kg; m0_j; u_jp; l_jp; h_jp; original_formulation_container_vector; separate_inbound_vector; source_origin_exports; source_origin_export_jk; original_source_portion_kg; carrier_id; first_use_event_id; preuse_loss_event_id; sealed_unused_kg; opened_residue_kg; retained_other_kg; V_discharge; rho; parent_contains_child; Q | For the actual residual process collect b_completion provider originals and source-scope matrix before use; read calibrated activity meters, trip logs, measured exposure/area/device-time, event shares, original camera map, endpoint seconds and cleaning stock/effluent measurements. Preserve raw source fields and native units, actual times and all beneficiaries. Check meter/scale zero and known standards daily where used and obtain traceable period-start/end/post-repair calibration; retain certificate uncertainty. Verify signed model/BOM/contract scopes and lifetime evidence, freezing original owner histories; test duplicate source IDs and provider-contained scopes. Each process protocol is a view of the SAME source ledger, not another measurement or allocation. Unknown presence/quantity requires a named extension and blocks complete service. | Native exchange units and driver SI units; provider denominators explicit | Each source event and interval; reconcile at least monthly and each lifetime/late-event revision | Full pool plus all prior asset/source beneficiaries and terminal residual | Actual residual sources; complete provider gate and shared beneficiaries | c_support then c_aggregate; restore external denominator only once; exact source-ID deduplication; never aggregate dissimilar units | Original provider vectors, raw activities, calibration, historical fractions, source/owner reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_acceptance | service_output | Q=count_distinct(original_id with latest_valid_acceptance=true at cut_off); service_output=Q/Q=1 Item(s) only if Q>0. Financial-only events preserve acceptance. Actual revocation changes the latest state once, irrespective of physical return. | original_id; acceptance_event_id; event_date; latest_valid_acceptance; cut_off; pool_id; version | Q; service_output | `ghg-product-2011` |
| c_goods | supplier_receipt; returned_kit; handover_kit; supplier_return_kit; internal_asset_kit | Goods-only count balance: N_open+N_R+N_C=N_close+N_H+N_T+N_I+N_K+N_missing+signed_r_goods. N_K is internal condemnation, N_missing is a confirmed loss, and signed_r_goods remains investigated with uncertainty. Waste dispatch is absent from this goods-only equation. Cards use their independent gross event totals divided by Q once, never final-valid Q in place of physical N_H. | N_open; N_R; N_C; N_close; N_H; N_T; N_I; N_K; N_missing; signed_r_goods; original_id; physical_event_id; recipient; package_state; Q; cp_custody | gross custody cards; goods stock reconciliation | `ego-lm2135sp` |
| c_background | supplier_receipt; returned_kit; handover_kit; supplier_return_kit; internal_asset_kit; failed_original_kit | For each j require s_j+f_j+t_j+o_j=1 with one current 0/1 ownership state. Original responsibility vectors B_S=sum_j s_j*(W_j+I_j), B_F=sum_j f_j*(W_j+I_j), B_T=sum_j t_j*(W_j+I_j), B_O=sum_j o_j*(W_j+I_j); their sum equals the unique original-source vector. N_F=sum_j f_j, W_F=sum_j f_j*W_j and I_F=sum_j f_j*I_j; failed_original_kit=N_F/Q with source-specific weighted manufacturing vector W_F/N_F when N_F>0. This is the same W_F counted once, not extra burden beside raw B_F; I_F is a separate inbound source and B_F=W_F+I_F. Downstream merchandise uses evidenced B_S/Q, never an assumed one-new-kit-per-service. Keep T recipient continuity and O inventory, and replace all historical versions upon return/resale. | original_id; W_j; I_j; N_F; W_F; I_F; s_j; f_j; t_j; o_j; original_owner; pool_id; version; stage_separation; cp_custody; cp_retail | B_S; B_F; B_T; B_O; N_F; W_F; I_F | `ghg-product-2011`; `ego-lm2135sp` |
| c_electricity | retail_ac | E_raw=(meter_end-meter_start)*multiplier in kWh for the actual disjoint circuit; E_p=sum_e E_raw_e*d_ep/sum_b d_eb using a_shared only where not already attributed to this exact original pool. retail_ac=3.6*E_p/Q MJ. The 3.6 conversion applies once. Preserve parent_contains_child and source scopes; do not subtract an independent submeter. | meter_start; meter_end; multiplier; E_raw; d_ep; d_eb; parent_contains_child; original_owner; pool_id; version; Q; cp_retail | retail_ac MJ per reference flow | `ghg-product-2011` |
| c_waste | whole_kit_waste | W_dispatch=sum actual outgoing gross_kg-tare_external_overpack_kg for the complete original kit consignment; whole_kit_waste=W_dispatch/Q kg. Do not deduct retained stock from directly measured dispatch. Independently reconcile W_open+W_generated+W_waste_in=W_close+W_dispatch+W_waste_transfer+known_missing_waste_kg+signed_r_waste, with measured N_K-linked kg. Actual dispatch treatment covers the full contained kit; no second cell or packaging treatment. | gross_kg; tare_external_overpack_kg; consignment_id; W_open; W_generated; W_waste_in; W_close; W_waste_transfer; signed_r_waste; known_missing_waste_kg; condemnation_package_id; measured_condemnation_kg; N_K; Q; cp_residual | W_dispatch; whole_kit_waste kg per reference flow | `ghg-product-2011` |
| c_support | retail; custody; residual | Apply a_shared/a_assets/a_transport/a_digital/a_cleaning with the actual measured raw fields in cp_support_retail, cp_support_custody and cp_support_residual. Retain source_id, inclusion boundary, attribution_level, original_owner/pool/version and raw module denominator. Calculate numerator vectors only; no source is normalized to Q here. Unknown measurements or source overlap remain incomplete. | X_e; d_ep; d_eb; A_a; e_recorded_ap; L_expected_av; L_final; lifetime_version; asset_id; asset_event_id; asset_processing_seconds_p; asset_processing_seconds_all; cleaned_surface_m2; pass_id; trip_id; leg_id; consignment_id; loaded_km; empty_km; idle_hours; vehicle_km; fuel; reserved_capacity_p; reserved_capacity_unit; capacity_eligibility; r_empty_p; r_empty_b; r_idle_p; r_idle_b; X_empty; X_idle; mass_kg; volume_m3; capacity_constraint; attribution_level; original_owner; pool_id; version; source_hours; source_hours_i; endpoint_seconds; endpoint_seconds_ip; endpoint_seconds_ib; H_ip; X_event_e; processing_seconds_ep; processing_seconds_eb; within_event_share; capture_map; capture_id; clip_id; area_cpzt; duration_czt; a_cp; a_cb; alpha_cp; X_capture_c; bytes; bytes_ci; retention_seconds; retention_seconds_ci; B_cp; formulation_source_kg; m0_j; u_jp; l_jp; h_jp; original_formulation_container_vector; separate_inbound_vector; source_origin_exports; source_origin_export_jk; original_source_portion_kg; carrier_id; first_use_event_id; preuse_loss_event_id; sealed_unused_kg; opened_residue_kg; retained_other_kg; V_discharge; rho; cp_support_retail; cp_support_custody; cp_support_residual | raw support numerator vectors; unresolved scope/quantity register | `ghg-product-2011` |
| c_aggregate | retail; custody; residual | For each exact module m with normalized inventory z_mk restore raw original vector X_mk=z_mk*D_m_original, using its evidenced original denominator, pool and version; if actual raw X_mk is retained, use it directly and do NOT multiply D again. Apply the required source-to-consignment-to-final-owner fractions once unless exact final-owner/pool attribution is evidenced. For each identical exchange k, property, unit, direction and type, add compatible raw core E/treatment numerator, raw B_F represented by the same failed_original_kit manufacture expansion W_F plus separate I_F, and disjoint raw support X_mk after exact source-ID deduplication, then x_final_k=N_final_k/Q once. Exclude gross custody satellite counts and S/T/O merchandise backgrounds from this service burden sum. Keep goods satellites as separate linked physical ledger, not duplicate demands. Never add kg to MJ, normalized values to raw values or incompatible provider boundaries. A full dataset requires no unknown missing modules; otherwise publish only disclosed partial incremental results with raw unnormalizable Q=0 pools. | z_mk; D_m_original; X_mk; source_id; provider_scope; direction; flow_type; property; unit; attribution_level; source_share; owner_fraction; original_owner; pool_id; version; B_F; core_raw_numerator; Q; cp_support_retail; cp_support_custody; cp_support_residual | x_final_k; completeness disclosure | `ghg-product-2011` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_lot | custody | One actual regional kit/lot with signed factory pack/BOM and closure records; distinguish complete-kit catalog specification from actual local stock and factory assembly/precharge. No duplicate battery/charger/blade/background. | Supplier records; serialized receiving images; source-stage inventory audit |
| q_coverage | retail; custody; residual | All events, closed/idle days and zero-sale cohorts of the fixed pool remain; late events replace old versions. Measurements have SI conversion, calibration uncertainty and period completeness. Missing is unknown. | Meter/scale calibration certificates and check logs; exception ledger |
| q_completion | retail; custody; residual | No complete service until all b_completion modules, exact external boundaries, original owner histories and carrier treatment are evidenced and de-duplicated. Additional real exchanges enter named bilingual cards and supported fields. | Source-ID scope matrix; provider originals; versioned completion and row binding register |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_identity | all inventory rows | Before dataset completeness bind every currently unbound row to a direct-read Tiangong identity with matching package/service/waste state, direction/type, official bilingual names, property/unit and appropriate compartment; retain official original response and exact hash receipt. Electricity binding confirms only point-of-use AC product energy, not grid performance. Never substitute generic machinery for the complete kit or a merchandise flow for service. Confirm all Required qualifiers and supplier lot BOM. | `ego-lm2135sp`; `ego-mower-manual` |
| v_reconcile | custody; retail; residual | Execute c_acceptance/c_goods/c_background/c_electricity/c_waste/c_support/c_aggregate with real complete periods, calibration evidence and original IDs. Test gross physical stock, held-waste kg, final-valid Q and S/F/T/O independently. Preserve signed discrepancies, uncertainty and unknown quantities; do not clamp them to zero or create a negative elementary emission/automatic credit. Unknown or zero full allocation drivers, missing late-return revisions, missing supplier stage separation and uncharacterized waste block completeness. | `ghg-product-2011` |
| v_extension | custody; retail; residual | Record positive presence/absence evidence for retailer opening, assembly, battery insertion or charging, mains testing, blade replacement, damaged/partial packages, added packaging, cleaning and delivery. Any occurrence changes this core route: retain event sources and original burdens, add actual state-specific atomic cards/processes and collection/calculation fields, align both languages and regenerate before a complete result. Unknown occurrence is not absent. Customer use instructions do not authorize retailer operations. No unsupported numeric defaults, conformity claims or methodology approval arise from this PCR. | `ego-mower-manual`; `ghg-product-2011` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Matching unopened regional kit counter-pickup service with b_completion/c_aggregate completion and separate physical satellites/backgrounds; disclosed partial incremental studies may use only their stated scope |
| excluded_use | Mower manufacture or use; other battery/region kits; delivery/assembly/charging/testing; full service claims from this partial core alone; GHG-standard conformity or scientific approval |
| required_metadata | All reference qualifiers; original source/pool/version IDs; final acceptance/cut-off; SI conversion; full module gates; separate goods satellites |
| required_quality_disclosure | Unbound rows; lot/BOM gaps; partial core and missing modules; signed residuals; zero-Q raw pools; calibration/uncertainty; S/F/T/O; historical identity observation dates |
| update_trigger | Any configuration/lot/route/provider change; new exchanges; calibration failure; revised lifetime, acceptance or late physical event; changed source scope |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc62186 | official_guidance | United Nations Statistics Division, CPC3.0 subclass62186 explanatory note, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62186 | Only trade services for goods of group441; narrower store/channel boundary requires actual evidence |
| un-cpc44121 | official_guidance | United Nations Statistics Division, CPC3.0 subclass44121 Mowers for lawns, parks or sportsgrounds, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/44121 | Lawn mower merchandise identity within441; not general hand tools |
| ego-lm2135sp | handbook | EGO, POWER+21-inch Select Cut self-propelled mower kit LM2135SP manufacturer product page, https://egopowerplus.com/21-inch-self-propelled-mower-select-cut-lm2135sp/ (retrieved2026-10-30) | Exact catalog kit, installed/interchangeable blades and distinct battery/charger configurations; not a lot BOM, current stock or energy-use factor |
| ego-mower-manual | handbook | EGO, 56-Volt Lithium-Ion Cordless Lawn Mower operator manual LM2130SP/LM2130/LM2150SP and FC variants, PDF pp15 and20-24, https://egopowerplus.com/mpattachment/file/download/id/544/ (retrieved2026-10-30) | Actual tool packing and downstream unpacking/assembly/blade replacement distinctions; kit cell/charger still require exact lot evidence |
| ghg-product-2011 | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter9 pp63-64, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Subdivision, physical relationships and consistency support; PCR-specific measured drivers and lifetime/source-history design are explicit choices, with no complete-standard conformity claim |
