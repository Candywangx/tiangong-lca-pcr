---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.sewage-sludge
status: candidate
content_maturity: authored_methodology
language: en-US
sync_with: pcr.zh-CN.md
---

# Raw unstabilised urban sewage sludge at first receiver handover

## 1. Scope and Applicability

This method describes a physical residual supplied in bulk from a satellite urban wastewater plant to another licensed wastewater treatment works, measured at first acceptance before receiving-site mixing, screening, thickening or biological treatment. The bounded example is incoming raw sludge at Leigh, distinct from local primary sludge and local surplus activated sludge. Only documented urban wastewater sludge of waste code 19 08 05 is included; the permit also accepts other material that this method excludes. This is a residual handover dataset, not new sludge production or a treatment service. [leigh-permit-2024]

CPC 39920 is linked to HS 3825.20 in the October 2026 explanatory workbook; the frozen June 2025 coordinate remains unchanged. HS chapter 38 note 5 includes unstabilised urban sludge and excludes stabilized sludge suitable for fertilizer. Landfill destination alone cannot establish this exclusion test. Require actual untreated state and provenance; do not infer fertilizer suitability from a name. Exclude stabilized fertilizer-suitable biosolids, digested/dewatered cake, compost, dried sludge, ash, industrial or drinking-water sludge, municipal mixed refuse (39910), pharmaceutical waste (39931), other clinical waste (39939), solvents (39940), chemical-industry waste (39950) and unspecified waste (39990). [unsd-cpc3-2025; unsd-cpc3-2026; wco-hs38-2022]

The operator’s 2024/25 original workbook records Glazebury as not co-located with a sludge treatment centre and reports actual road transfer of raw liquid sludge to Leigh WwTW. This supports the route; annual dry tonnes, site-average dry solids and destination share cannot replace matched consignment wet mass, solids tests or actual distance. The STC sheet’s treated output is not this reference material. [uu-bioresources-2024-25]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.sewage-sludge |
| classification_refs | CPC 3.0 39920, accepted narrower scope under docs/adr/2026-11-22-accept-cpc-39920-raw-urban-sewage-sludge-at-first-receiver-handover.md |
| covered_products | Raw unstabilised urban sewage sludge at first receiver handover |
| excluded_products | Receiver-local sludge, industrial and drinking-water sludge, digested or dewatered cake, dried sludge, compost, ash, stabilized sludge suitable for fertilizer, municipal mixed refuse (39910), pharmaceutical waste (39931), other clinical waste (39939), waste organic solvents (39940), chemical-industry waste (39950), other unspecified wastes (39990) and treatment services |
| representative_product | Raw unstabilised urban sewage sludge at first receiver handover |
| production_route | Urban wastewater solids separated at source; raw bulk dispatch and road tanker transfer to first receiver, before treatment |
| market_state | Wet unstabilised residual for licensed treatment; no asserted positive commodity revenue |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Make traceable raw urban sludge available at the receiving treatment interface |
| How much | 1 kg net as-received wet sludge |
| How well | Documented urban provenance, raw state and receiver acceptance; measured solids and actual acceptance tests |
| How long or cycle | One declared source/receiver reporting period with individually traced handover lots |
| reference_flow_link | reference_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Raw unstabilised urban sewage sludge at first receiver handover |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | source plant/catchment; 19 08 05 provenance; raw unstabilised state and stabilization history; fertilizer-suitability assessment; source first-release ID; receiver and acceptance; lot/date; ownership and fees; wet net kg; free liquid; solids test/method/uncertainty; reporting period; transport provider/load/distance/empty return; upstream boundary/allocation; parcel opening/closing source and transit stocks; first-valid-acceptance and rejection/return/loss event IDs; accepted/carry/terminal/unresolved absolute burden ledgers; completeness |

Declare all required qualifiers in metadata, process notes or equivalent fields. Missing qualifiers make the data package incomplete. The unbound reference identity must be resolved before native product binding; a product-output modelling role does not reclassify legal waste as a commodity.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| wet_basis | reference product | Mass | kg | Use calibrated net as-received mass excluding vehicle, tank and unrelated liquid. If volume is used, m_wet = V_measured * rho_lot with actual measured sludge volume in m3 and independently measured same-lot density in kg/m3, giving kg. Match sampling, material state, temperature, solids stratification, entrained gas and free-liquid inclusion to the actual volume measurement. Integrate matched volume increments and density if state varies; no nominal tank capacity, generic density or mismatched sampling basis. |
| solids_basis | reference product | Mass | kg | Keep paired wet mass and operational dry solids separate. Loss on drying is not proven pure free water; no assumed moisture or solids range. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Traceable raw sludge at source dispatch with declared inherited burden history |
| starting_condition_role | intermediate_product |
| product_classification_scope | CPC 39920; HS 3825.20 |
| recursive_input_rule | Link actual source formation once; do not recursively purchase generic sewage or multiply transfers into production |
| upstream_dataset_requirement | Source-specific residual history and transport provider with disjoint gates; incomplete history remains disclosed |
| disclosure | Gate, state, ownership, allocation, provider overlap and missing data |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| bound_handover | handover | End at first measured accepted bulk handover before receiver treatment or mixing. Local sludge, later thermal hydrolysis, digestion, dewatering and land application are excluded. Record first source release and receiving acceptance separately; transfers, resale and returns do not create new production. | leigh-permit-2024 |
| bound_provider | all inventory rows | Source provider owns separation, storage and loading before dispatch; haul provider owns actual road transport and its fuel/emissions. Verify unloading inclusion at the chosen interface. No duplicate site energy, diesel or emissions from an already complete provider. Missing provider data is unknown, not zero. | jrc-ilcd-2010 |
| bound_bulk | handover | Bulk sludge excludes transport tank and vehicle tare; neither is purchased packaging. No bag/pallet pool is assumed. If actual packaging crosses the boundary, extend the method with one atomic row per component/event: purchases, first external nonpurchase receipts even supplier-accompanying/borrowed, and true returns traced to prior dispatch. Reconcile all stocks, dispatches and waste; charge actual procurement/transport/service once. | jrc-ilcd-2010 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| handover | Raw sludge supply to receiver | required | Documented scope in section 1 | foreground | 1 kg |

### Process: Raw sludge handover (`handover`)

#### Inputs

##### Waste flows

###### Raw unstabilised urban sewage sludge at source dispatch (`raw_sludge`)

This single material is measured at source dispatch and links the actual source provider history.

- Selected flow: Raw unstabilised urban sewage sludge at source dispatch
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_mass original source-entry wet mass attributable to the first-valid-accepted cohort, calculated under section 8 per 1 kg reference flow. Carry unsettled cohorts separately; redispatch moves the same source vector, never purchases or forms the sludge again.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_mass
- Sources: leigh-permit-2024; jrc-ilcd-2010

##### Product flows

###### Road tanker freight transport of raw urban sewage sludge (`tanker_transport`)

This single freight service connects source and receiver gates using matched measured wet payload and actual distance.

- Selected flow: Road tanker freight transport of raw urban sewage sludge
- Flow property / unit: Transport work / t km; native support unresolved
- Amount rule: Use all actual cp_haul legs attributable to the first-valid-accepted cohort, including its earlier failed attempt and loaded return, calculated under section 8 per 1 kg reference flow. Keep unsettled and terminal-rejected haul in separate absolute accounts. Disclose empty returns, loading/unloading and cleaning scope.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_haul
- Sources: jrc-ilcd-2010

#### Outputs

##### Product flows

###### Raw unstabilised urban sewage sludge at first receiver handover (`reference_product`)

- Selected flow: Raw unstabilised urban sewage sludge at first receiver handover
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_mass
- Sources: leigh-permit-2024

No direct transformation or environmental release is asserted at this accounting interface. Actual spill, rejected sludge or leakage before acceptance must be measured, retained in the transport/source provider inventory and reconciled separately from Q. If the provider omits such activity, add its specific atomic stream and collection before claiming completeness. Waste versus Product native identity remains a binding gap.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| alloc_history | raw_sludge | Declare the study waste boundary. Trace the source burden vector and subdivide separation/loading from wastewater treatment where feasible; apply evidenced causal allocation to remaining multifunctional exchanges. Do not silently assume zero history. A waste treatment fee is not positive sludge co-product revenue; do not apply fertilizer value, nutrient substitution or avoided-disposal credits. Unresolved allocation blocks a complete upstream result. | jrc-ilcd-2010 |
| alloc_haul | tanker_transport | Use actual provider payload and route records; segregate other consignments. Allocate shared haul by justified physical causality and disclose empty return treatment. Do not split the sludge mixture into additional water and solids products. | jrc-ilcd-2010 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

Collection retains unnormalized raw totals. The aggregation column denotes the final reporting basis; normalize raw data once through the calculation rules.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | handover | Sludge lot and provenance | Weigh tickets and acceptance ledger | gross; tare; retained tank heel; original source-entry wet mass; dispatch attempt ID; parcel lineage; first valid acceptance ID/date; accepted net mass; rejection event; actual return event; terminal destination; free liquid; measured volume/density/state/sample IDs if used; opening/closing unaccepted source and transit stocks; losses; source ID; receiver; date; original release; ownership | Calibrated matched before/after weighing at actual transfer; verify retained heel and acceptance. Preserve lot links, source raw-state proof and actual acceptance test specification. | kg | Each lot | Entire reporting period with spanning cohorts | Source dispatch to pre-mixing receiver gate | per 1 kg reference flow | Scale calibration, signed receiver record, stock and loss reconciliation |
| cp_solids | handover | Matched dry solids | Representative laboratory record | lot; dish; wet dish; dried dish; method edition; sampling; free liquid; uncertainty | Representative same-lot sample, homogenization, actual validated gravimetric method and QC. EPA draft example is not required UK compliance. | kg; % | Each qualified lot | Same handover period | Same lot before mixing | per 1 kg reference flow | Chain of custody, method scope, lab QC |
| cp_haul | handover | Tanker freight | Provider trip ledger | lot/parcel ID; leg ID/date; dispatch attempt; wet payload; loaded km; mode; provider; loaded return; empty return; cleaning; included scopes; original source vector; opening absolute vector; new actual increments; accepted/carry/terminal/unresolved disposition; allocation | Match measured consignment payload with actual trip distance and supplier scope; record burden history separately. | kg; km | Each trip | Whole period including failed deliveries | Actual source/receiver route | per 1 kg reference flow | Trip records, provider inventory and overlap audit |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| accepted_mass | reference_product | Q = sum of net wet parcel masses at their first valid receiver acceptance in this period, in kg, with original lot/parcel lineage and acceptance ID/date. A pre-acceptance rejection and return contribute no Q; a returned unaccepted parcel may contribute Q once when first validly accepted later. Redispatch, repeat acceptance and returns after an already valid acceptance create no new Q. Keep post-acceptance return/service events in a separate gross ledger linked to the original accepted cohort. For Q = 0 retain itemized absolute accounts without a per-kg result. | cp_mass | Q | leigh-permit-2024 |
| solids_mass | reference_product | f_DS = (dried_dish - dish) / (wet_dish - dish); DS_lot = wet_lot * f_DS. Sum lot solids masses; do not average percentages unweighted. Complementary loss on drying is operational, not pure free-water identity. | cp_solids; cp_mass | f_DS; DS_lot | epa-solids-1684-draft-2001 |
| transport_work | tanker_transport | T = sum(payload_kg * loaded_km / 1000), in t km, over actual uniquely identified legs. Payload is wet sludge excluding tank/vehicle. A loaded return and a later redispatch are separate actual legs, not cancellations or new source production. Assign each leg to its lot and accepted, carried, terminal or unresolved absolute account; a carry transfer adds no new t km. Incorporate actual provider empty-return burdens once without inventing loaded work for an empty leg. | cp_haul | T | jrc-ilcd-2010 |
| normalize_inventory | all inventory rows | a_i = A_i / Q exactly once for Q > 0. A_i includes only the absolute exchange vector settled to this period first-valid-accepted parcels after evidenced conversion/allocation, including their brought-forward source history and prior actual haul plus current increments. Exclude closing unsettled, terminal-rejected/lost and unresolved cohort vectors from this numerator; report them separately, not spread over current Q. Never divide an already normalized provider result again. Later attributable services after valid acceptance attach only to their original accepted cohort quantity Qc, as separately dated increments, not to unrelated current Q; no new source vector or Q. For Q = 0 retain all absolute subaccounts and carry links. | cp_mass; cp_haul; A_i; Q | a_i | jrc-ilcd-2010 |
| physical_closure | all inventory rows | Reconcile two physical ledgers per period in wet kg: O_transit + D_gross = E + R + J_transit + L_transit + C_transit; O_source + N + R = D_gross + J_source + L_source + C_source. O/C are opening/closing unaccepted stocks; source stock includes returns eligible for redispatch, and transit stock includes receiver-held material not yet accepted. N is original source material entering this chain once; D_gross is each actual dispatch, R actual return to source, E first valid acceptance, J material transferred to separate terminal-rejection management, and L measured loss. J, R, E, L and closing transit outcomes are mutually exclusive; a rejection event is not an extra mass term. Returned material awaiting redispatch counts as R and source stock, not J; splits require separately weighed parcel identities. Consolidation cancels D_gross and R: O_source + O_transit + N = E + J_source + J_transit + L_source + L_transit + C_source + C_transit. Later returns of already accepted material use the separate gross ledger in accepted_mass, not this first-acceptance ledger. | cp_mass | wet_mass_ledgers | jrc-ilcd-2010 |
| cohort_accounts | all inventory rows | Record an absolute per-exchange vector H for each original lot and traceable parcel: H_open + H_new = H_accepted + H_carry + H_terminal + H_unresolved, separately for every exchange. This balance covers the chain up to first valid acceptance or terminal disposition; post-acceptance service increments use the separately dated original-cohort ledger in normalize_inventory, outside this balance. H_new contains only original source history entered once and newly incurred actual haul/services; return and redispatch move the same history, adding only real new legs/services. H_accepted belongs to this period first-valid-accepted parcels; H_carry belongs to unaccepted source/transit stocks and transfers exactly per exchange into next-period opening; H_terminal separately retains terminal rejection/loss handling. Unknown attribution remains H_unresolved, never a balancing plug or a charge to accepted parcels. Split parcels require measured mass and evidenced causal vector partition; shared processes need evidenced allocation first, otherwise remain unresolved. Close wet kg, individual exchanges and t km separately, never as substitutes for each other. Retain all absolute subaccounts when Q = 0. | cp_mass; cp_haul | absolute_cohort_vectors | jrc-ilcd-2010 |
| cohort_example | all inventory rows | This is a constructed ledger check, not Glazebury/Leigh measurements, parameters or quantity ranges; assume no losses, dilution or other loaded legs. Period 1 enters A=600 kg, B=300 kg and C=100 kg once, each travelling 10 loaded km. A is first validly accepted; B is rejected and travels 10 loaded km back to source for later redispatch; C remains in transit. The physical ledger is 1000 = 600 + 300 + 100; consolidated source/transit closure is 1000 = 600 + 300 (source closing) + 100 (transit closing). Q1=600 kg. Loaded work is 6 + 3 + 1 + 3 (B return) =13 t km: accepted A receives 6, while B carries 6 and C carries 1, totalling 7 t km. Source vectors S_A, S_B and S_C enter once each; only S_A settles to this period accepted account. Period 2 has no new source production. B travels 20 loaded km on redispatch, adding 6 t km, and is then first validly accepted; C travels another 10 loaded km, adding 1 t km, and is terminally rejected to separate management, without an additional source-return entry. Opening wet mass 400 = first accepted 300 + terminal exit 100; Q2=300 kg. Opening carried work 7 + new work 7 = accepted B 12 + terminal C 2 =14 t km; both periods actual loaded work 13+7=20= A 6+B 12+C 2. S_B moves from carry to accepted only once and S_C stays terminal; B transport is 12/300=0.04 t km/kg, not all period haul or C terminal burden divided by Q2. Original formation mass closes as 1000=600+300+100 even though gross dispatches total 1300 kg across the two periods. Missing acceptance, terminal, carry or attribution evidence remains unresolved. | physical_closure; cohort_accounts | constructed_ledger_check |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_scope | dataset | Verify source, receiver, raw state, reporting year and exact provider gates; permit is an example, not a shipment measurement. | Actual permits, transfer/acceptance records |
| dq_closure | all inventory rows | Use physical_closure with mutually exclusive physical endpoints per dispatch attempt. Rejection is an event: a rejected parcel actually returned is counted only as a physical return, not also as terminal rejection. Rejected material awaiting a decision remains closing unaccepted stock. Preserve parcel lineage through source stock, transit and redispatch; reconcile measured differences without inferring missing water or gas. Use cohort_accounts for separate absolute burdens. | Matched lot ledger and uncertainty |
| dq_identity | all inventory rows | No native flow or supplier quantity is implied by a classification title; missing identities and histories remain visible. | Original records, native property/type/unit verification |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| val_scope | dataset | Verify urban 19 08 05 provenance and untreated state at actual receiver gate; reject fertilizer-suitable stabilized sludge and every section 1 exclusion. Check latest actual permissions independently. | wco-hs38-2022; leigh-permit-2024 |
| val_mass | all inventory rows | Verify the same wet kg reference in both languages, linked output, matched solids, actual measured volume times matching sampled density if used, and physical_closure without counting a rejection event twice. Verify cohort_accounts, first-valid-acceptance Q and exactly one A_i/Q normalization using only settled accepted vectors. Check the cross-period example arithmetic, not as operating data. Free water, operational solids and transport work cannot replace wet net Q. | epa-solids-1684-draft-2001; jrc-ilcd-2010 |
| val_provider | all inventory rows | Verify source first release, actual outsourcing/handover, retained burden history, allocation and haul overlap. No presumed zero burdens, service-fee revenues or credits. Missing native reference identity blocks native binding; missing measurements block completeness. | jrc-ilcd-2010 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Raw sludge residual input at matching pre-treatment receiver interface |
| allowed_use | Measured same-state handover with reviewed native identity and declared upstream waste boundary |
| excluded_use | Treatment performance, fertilizer safety, digested cake, avoided disposal, new production or universal cradle-to-gate claims |
| required_metadata | All section 3 qualifiers, provider gates and identity status |
| required_quality_disclosure | Missing quantities/identities/history, laboratory limitations, allocation and measured uncertainty |
| update_trigger | Source/state/receiver/route/permission changes; new native identity or measured evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-2025 | official_guidance | UNSD CPC Ver.3.0 Explanatory Notes, 30 June 2025, PDF p.205. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Frozen title and adjacent waste categories; no technical operating rule. |
| unsd-cpc3-2026 | official_guidance | UNSD 23 October 2026 explanatory workbook, CPC3!A1938:D1938. https://unsdsna.azure-api.net/files/pages/cpc/CPC_Ver3_Exp_Notes_2026-10-23_for_Website.xlsx | HS 2022 3825.20 correspondence only; no shared classification mutation. |
| wco-hs38-2022 | official_guidance | WCO HS 2022 Chapter 38, note 5, PDF p.2. https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0638_2022e.pdf?la=en | Urban sludge definition and fertilizer-suitable stabilized sludge exclusion. |
| leigh-permit-2024 | official_guidance | Environment Agency, Leigh WwTW STF permit EPR/NP3601LR, issued 28 June 2024, pp.2–3 and Table S2.2 p.22. https://assets.publishing.service.gov.uk/media/668ffa0c0808eaf43b50ce13/Application_Bespoke_Permit_Issued_-_28062024.pdf | Imported raw sludge before treatment, distinct local streams and 19 08 05 acceptance; no study shipment quantity or current permit assertion. |
| epa-solids-1684-draft-2001 | official_guidance | US EPA Method 1684, Draft January 2001, sections 1–4, 8–12. https://www.epa.gov/sites/default/files/2015-10/documents/method_1684_draft_2001.pdf | Gravimetric solids example and interference/QC limitations, not statutory UK method or transferable solids content. |
| jrc-ilcd-2010 | handbook | European Commission JRC ILCD Handbook, Detailed guidance, March 2010, sections 7.9.2–7.9.3, printed pp.256–268. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Subdivision, causal allocation and waste-fee caveat; PCR synthesis defines the measured handover ledger, not a fixed allocation factor. |
| uu-bioresources-2024-25 | official_guidance | United Utilities, Bioresources Market Information 2024/25, WwTW!D3, D63, U63, AB63:AD63; contrast STC!I28:L28. https://www.unitedutilities.com/globalassets/documents/corporate-documents/united-utilities---bioresources-market-information---2024-25.xlsx | Actual annual external raw liquid sludge road destination; no transfer of annual averages, dry tonnages, shares or treated-product properties. |
