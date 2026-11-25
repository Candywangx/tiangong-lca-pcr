---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-sugar-confectionery-and-bakery-products
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Incremental dry-stock retail service for factory-sealed 1 kg bags of white beet granulated sugar

## 1. Scope and Applicability

This PCR covers a deliberately partial operating module in a walk-in non-specialized store: receipt custody, ambient dry stock/display, dedicated display-light electricity, physical acceptance/return history, original-bag failure responsibility and actual dry residual handovers. One dataset covers one actual manufacturer, SKU, nominal 1 kg size, factory closure and verified packaging configuration. Sugar is additive-free, white dry free-flowing beet granulated sugar. No opening, portioning, repacking, baking, refrigeration, delivery or online fulfillment is represented. Broken, damp, contaminated and otherwise unqualified parents are retained in the failure ledger; they do not disappear because the normal sale route is closed-pack. The module excludes named common-store and capital activities under completion_modules; it cannot be represented as a full retail footprint.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-sugar-confectionery-and-bakery-products |
| classification_refs | CPC 3.0 62125; narrower: only the specified sugar retail module; bakery, molasses and confectionery remain outside |
| covered_products | Retail service for one homogeneous factory-sealed nominal 1 kg consumer-bag SKU of additive-free white beet granulated sugar |
| excluded_products | Cane sugar; brown, caster, icing, jam or flavored sugar; sweeteners; syrups/molasses; bakery and confectionery; other pack sizes or constructions without separate datasets |
| representative_product | One intact bag of the declared SKU; the manufacturer specification lists a 1 kg format but does not establish the site bag construction |
| production_route | Supplier-packed receipt → manual ambient stock/display → in-store customer acceptance; dry quarantining/residual dispatch for failures |
| market_state | Factory-sealed dry free-flowing crystalline sugar; actual lot specification, seal, odor/contamination and damp/caking observations govern qualification |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the declared partial dry-stock retail service to a final-use customer |
| How much | One finally accepted and retained intact bag of the single declared nominal 1 kg SKU; count is the service basis, not a conversion of actual sugar kg |
| How well | Seal and current lot quality specification satisfied at handover; documented acceptance remains valid after the contractual physical-return window and recorded late corrections |
| How long or cycle | From evidenced custody receipt to definitive acceptance, return/resale or terminal failure; declared prospective same-configuration pool includes all failed and zero-sale intervals |
| reference_flow_link | retail_service |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Incremental dry-stock retail service for one factory-sealed 1 kg bag of white beet granulated sugar |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | manufacturer and SKU; nominal size and measured original fill; original bag BOM and supplier background scope; factory closure and lot specification; actual receipt and final condition; store and period; dedicated-light meter boundary; prospective pool and return closure; original-parent fate IDs; residual recipients and treatment; completion-module matrix; unverified identities and uncertainty |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| count_service | retail_service; failed_background; supplier_transfer; failed_retained | Number of items | Item(s) | Use the declared original whole-bag count and finally accepted service count with cp_goods; a nominal 1 kg label is not a measured conversion factor. |
| energy_basis | electricity_input | Net calorific value | MJ | Use cp_energy; 1 kWh = 3.6 MJ; preserve actual electricity provider boundary. |
| mass_basis | containment_input; recovered_sugar; case_waste; film_waste; whole_bag_waste; sweep_waste | Mass | kg | Use calibrated actual net carrier/input mass in its measured state with cp_containment or cp_residual. No count, volume, dry/wet or concentration conversion without measured applicable basis. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Physical custody of identified factory-packed bags at the store receipt gate, with original net fill, whole gross bag mass and supplier-packaging background recorded |
| starting_condition_role | Retail operating gate; not sugar manufacture or a free upstream input |
| product_classification_scope | A narrower sugar subset of CPC 3.0 62125; no equivalence to the whole leaf |
| recursive_input_rule | Do not recursively add this retail service to its own goods input. Match supplier goods production, original packaging and inbound transport at the same receipt gate |
| upstream_dataset_requirement | Loss-parent background uses the original complete bag at receipt, with measured original net fill and verified packaging BOM/provider scope; successful originals remain a separately required downstream coupling |
| disclosure | Partial incremental dry-stock service; all listed completion modules and unknowns remain explicit. It is neither total store retail nor the manufactured sugar product |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| scope_gate | retail_service | Apply only to the declared single intact factory-bag SKU and manual ambient route. Record actual receipt, stock, quarantine, handover, return and closure timestamps; do not equate sealed with vapor-impermeable. Current signed supplier/lot conditions govern acceptance; use cp_conditions to measure temperature and relative humidity throughout custody and inspect seal, caking, odor and contamination at receipt, daily holding review and every handover. No source numerical ranges or legal conformity are adopted as defaults. | sugar-spec; sugar-products |
| reference_ownership | retail_service | N is the number of unique original parents finally qualified and retained for final use. Gross handovers H and physical returns C are separate events. Pure price refunds, credits and discounts without physical reversal do not reduce N only while final qualification and acceptance remain valid. An actual final acceptance revocation without return removes that parent from N and records the physically retained unqualified bag as U_keep. Return then resale of the same intact parent produces at most one final service. An externally retained unqualified intact bag is physically U_keep, not N or automatic waste; U_keep=F_keep+T_keep+O_keep partitions its original background responsibility, not additional physical handovers. Reopening an original period must revise its numerators, N and fate allocation together, never charge its complete burden again to a later pool. | ghg-product |
| goods_background | failed_background | Each original bag is assigned exactly once to successful S, irrevocable failed F, continuing supplier/other-system transfer T, or open responsibility O. One broken bag retains one full original background regardless of the number of waste/recovery descendants; no allocation credit to recovered sugar. F includes destroyed originals and externally retained unqualified originals whose background remains with this service. T carries original production, pack and receipt-transport responsibility to a named supplier or other receiving system under signed acknowledgment; absent acknowledgment it remains O, not zero. T is a mutually exclusive original-background partition, never a count of all supplier handoff events. Independently record actual physical supplier handoffs T_supplier and retained unqualified U_keep, with recipient/state/event IDs. T_keep belongs to U_keep already; moving an externally retained parent from F_keep/O_keep to T_keep changes background ownership only, without a second physical output. A genuinely new outward object/state needs its own specific card. S backgrounds are excluded here and must be coupled once downstream as S/N original bags using their actual receiving net fill/BOM. Never substitute the nominal 1 kg for measured original fill or assume receipt mass equals final mass. | ghg-product |
| terminal_carriers | whole_bag_waste; sweep_waste; recovered_sugar | Use actual whole-carrier net mass at each exclusive terminal handover. A complete failed bag includes its contained sugar and original packaging; do not add those constituents again as separate waste. After a real split, retain component/parent/fate IDs and weigh actual separated recovered sugar and actual whole sweep carrier, including any containment bag. Empty containment packaging is not also discarded separately. Record residual inventory at both ends and actual moisture/contamination changes; count balance is not a kg conservation assumption. Treatment and transport providers must declare included scope, destination, carrier composition and accepted unit; add named missing activities before completeness. Do not multiply an already destination-specific weighed amount by a destination fraction again. | jrc-retail; ghg-product |
| completion_modules | retail_service | Before using this partial module in a total retail result, the integrator must assemble an exact gate/cohort/N responsibility matrix and separately measure: (1) premises manufacture/installation/maintenance/end-of-life and common HVAC, lighting and other utilities; (2) display shelf and dedicated luminaire manufacture/maintenance/end-of-life; (3) receiving/stock handling tools, pallets, trolleys and all loaded, empty return, repositioning and reserved/idle use; (4) checkout/POS, receipts and customer bags; (5) common sanitation, pest control, actual wet spill response, water/chemicals/whole effluent; (6) supplier-return, residual and other actual transport outside evidenced provider packages; (7) store-air/exterior transfers from sugar dust or moisture, with internal generation, retained/captured stocks and exclusive terminal carriers distinguished. These are excluded here, not assumed absent or zero. Complete these actual modules with named flows/protocols and the fixed methods in completion_method; an unresolved module blocks total-retail completeness. | jrc-retail; ghg-product |
| conditional_extension | retail_service | Confirm occurrence/absence through floorplans, equipment and activity logs, invoices and incident records for every period. A different bag construction, carrier, chemical, on-site processing or unknown route cannot be hidden in an existing card. Add specific bilingual cards/protocols and regenerate before representing the affected activity as complete; preserve actual observations and uncertainty while unresolved. | jrc-retail |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| retail | Incremental dry-stock retail | required | Declared homogeneous bag module only | foreground | retail_service |

### Process: Incremental dry-stock retail (`retail`)

#### Inputs

##### Product flows

###### Alternating current (`electricity_input`)

Purchased point-of-use electricity for the declared dedicated display lighting circuit. Supplier technology, grid factor and voltage are not established by the generic flow identity.

- Selected flow: Electricity, alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: 3.6*E_c/N MJ; cp_energy; no second allocation or normalization
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources: jrc-retail; ghg-product

###### Factory-sealed nominal 1 kg bag of white beet granulated sugar at store receipt (`failed_background`)

One actual complete original SKU bag at receipt is the goods-background unit; product includes sugar, original packaging and declared upstream transport. This is upstream background demand, not a second physical receipt or internal material flow. It charges only original parents assigned to F in the reported closed/revised background version, not all incoming bags or their descendants.

- Selected flow: Factory-sealed nominal 1 kg bag of white beet granulated sugar at store receipt
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: F/N Item(s); cp_goods; original net fill and packaging BOM remain required
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_goods`
- Sources: sugar-spec; ghg-product

###### High-density polyethylene dry-residual containment bag (`containment_input`)

Only actual retailer-added HDPE containment packaging, separately weighed empty. Factory packaging is already included in original-goods backgrounds.

- Selected flow: High-density polyethylene dry-residual containment bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: attributable actual empty-bag mass/N kg; cp_containment
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_containment`
- Sources: jrc-retail

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Incremental dry-stock retail service for one factory-sealed 1 kg bag of white beet granulated sugar (`retail_service`)

The one final count-based reference service; its bag remains intact and qualified. It is a partial service output, not sugar manufacture or a mass-output substitution.

- Selected flow: Incremental dry-stock retail service for one factory-sealed 1 kg bag of white beet granulated sugar
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_goods`
- Sources: ghg-product

###### Intact factory-sealed 1 kg white beet granulated sugar bag physically returned to supplier (`supplier_transfer`)

Actual intact physical bag return to its named supplier, with actual event and original-parent history. Count actual T_supplier handoffs regardless of the separate background partition: signed continuing responsibility enters T, otherwise O pending acknowledgment. This is neither accepted retail service nor waste; other-system background transfers are not routed through this supplier-only card.

- Selected flow: Intact factory-sealed 1 kg white beet granulated sugar bag physically returned to supplier
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: T_supplier/N Item(s); cp_goods; no burden credit
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_goods`
- Sources: ghg-product

###### Unqualified intact factory-sealed 1 kg white beet granulated sugar bag retained externally (`failed_retained`)

Actual unqualified intact physical bag retained by an identified external recipient, including final acceptance revocation without physical return. Count U_keep once, irrespective of disjoint F_keep/T_keep/O_keep background ownership. Recipient/state and signed ownership are required; an ownership-only change creates no extra physical output, and O_keep blocks final closure.

- Selected flow: Unqualified intact factory-sealed 1 kg white beet granulated sugar bag retained externally
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: U_keep/N Item(s); cp_goods
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_goods`
- Sources: ghg-product

###### Separated recovered dry white beet granulated sugar for identified nonretail recipient (`recovered_sugar`)

Only actual separated sugar, weighed in the actual transfer state. Recipient, quality status and actual purpose must be established; do not imply food suitability or restore a failed retail bag.

- Selected flow: Separated recovered dry white beet granulated sugar for identified nonretail recipient
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: actual separated transfer net mass/N kg; cp_residual
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residual`
- Sources: jrc-retail; ghg-product

##### Waste flows

###### Dry corrugated cardboard transport case waste (`case_waste`)

Actual removed outer corrugated case at the retail gate, excluding retained inventory and factory consumer bags. Original case manufacture is included only in the evidenced receiving background, not added again.

- Selected flow: Dry corrugated cardboard transport case waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: actual attributed whole-case net waste mass/N kg; cp_residual
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residual`
- Sources: jrc-retail

###### Low-density polyethylene transport overwrap film waste (`film_waste`)

Actual identified LDPE transport overwrap removed and dispatched; material declaration is required and unlike polymers require separate cards.

- Selected flow: Low-density polyethylene transport overwrap film waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: actual attributed net LDPE film waste mass/N kg; cp_residual
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residual`
- Sources: jrc-retail

###### Rejected complete factory bag of white beet granulated sugar for treatment (`whole_bag_waste`)

A physically intact or contained complete original consumer bag with all its remaining sugar and packaging, weighed as one real carrier. Actual packaging composition and treatment acceptance define the unresolved identity.

- Selected flow: Rejected complete factory bag of white beet granulated sugar for treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: actual whole-carrier net handover mass/N kg; cp_residual; no separate contained-sugar or factory-bag waste
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residual`
- Sources: jrc-retail

###### Dry sugar-spill sweepings with torn original bag and actual HDPE containment for treatment (`sweep_waste`)

One physically collected mixture at the actual waste handover, with measured sugar/packaging/contamination portions and exclusive carrier IDs. A different actual mixture or incompatible treatment requires a separate card, not a selector hidden here.

- Selected flow: Dry sugar-spill sweepings with torn original bag and actual HDPE containment for treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: actual whole sweep-carrier net handover mass/N kg; cp_residual; containment is already included
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residual`
- Sources: jrc-retail

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| pool_allocation | electricity_input | Use a dedicated measured light circuit first. Where the declared meter also serves other displays, allocate each interval k by permanently assigned illuminated shelf area A_ck divided by all beneficiaries A_allk, including reserved empty sugar space. E_c=sum(E_k*A_ck/A_allk). Retain closed, idle and zero-sale intervals; no driver means pending assignment, not deletion. Reconcile all beneficiaries to the whole meter. Do not subtract this circuit from an independent disjoint parent meter; common-store completion removes it only where a traced parent includes it. | ghg-product; jrc-retail |
| completion_method | retail_service | Completion modules use direct subdivision/meters, then declared causal drivers: premises/common light area-hours, HVAC conditioned-area-hours with actual zones, POS/receipt measured transaction events, sanitation event/area records, handling measured loaded plus empty active minutes and reserved/idle ledger. Allocate every full shared pool across all beneficiaries; unknown route/coverage is unresolved. Asset manufacture uses f_c=x_c/L: measured current beneficiary exposure x_c divided by evidenced expected total all-beneficiary lifetime exposure L in the same driver, including pre-period history and reserved/idle use. Keep one persistent asset ledger, replace old-version allocations on life revision, cumulative fractions <=1 and allocate final residual once. Actual maintenance is event-specific with exact homogeneous contract/work scope or separate materials/services; original complete asset components, replacements and provider-covered energy/transport/treatment are disjoint. At retirement R=1-sum(f_posted across all historical beneficiaries); w_c=x_lifetime_c/sum(x_lifetime_all); h_c=f_posted_c+R*w_c with signed corrections to original pools. L revisions replace old fractions through delta=f_new-f_posted, never reset the asset. Terminal full-carrier mass/count uses h_c once, not an extra manufacture fraction. Actual terminal direct weighing and component reconstruction are exclusive; direct net weighing does not subtract already removed parts again. For external transport record actual gross tonnes including packaging times actual loaded km; verify provider coverage of every actual empty trip. Where empty travel is not demonstrably included, add separately measured empty vehicle-km with exact overlapping burden removed from the loaded provider once; unknown coverage blocks completeness and zero tonnes cannot erase a trip. For air completion measure raw internal source, outside inlet/outlet flux at matching temperature/pressure/wet-dry basis, net room/capture stocks and actual terminal exports; unknown capture/outside paths are not zero. Whole sewer mass uses direct measured V*rho or an exclusive full-liquid mass reconstruction including solutes; no water-only reconstruction or duplicate reuse/evaporation correction. | ghg-product; jrc-retail |
| no_credit | failed_background; recovered_sugar; supplier_transfer | No avoided-production or recycling credit is claimed. Actual recovered sugar is a physical transfer with measured recipient/state and subsequent responsibility; it does not undo the original bag failure. Supplier transfers retain acknowledged continuing backgrounds. Normalize attributable raw totals once by N only after all within-pool attribution and revisions. A wholly zero-output pool is unnormalizable and disclosed; prospectively declared same-configuration pooling retains its entire burdens and never selects only selling periods. | ghg-product |
| raw_attribution | containment_input; recovered_sugar; case_waste; film_waste; whole_bag_waste; sweep_waste | Assign direct sugar-parent events/carriers to their original pool. For a shared actual transport case/film, first weigh the exclusive whole discarded carrier, then allocate once by the declared SKU actual packed gross volume divided by the measured total packed gross volume of all original beneficiaries in that source case/consignment. Use actual dimensions and packed counts, not nominal sugar kg or sales value; retain failure/zero-sale parents. Reconcile fractions to one and carrier mass to measured totals. A dedicated sugar-containment bag/sweep carrier is direct; an actual mixture with other goods needs its own concrete flow/protocol and source-portion records before completion, not a hidden generic selector. Unknown source composition or zero/missing volume driver is unresolved. | jrc-retail; ghg-product |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_goods | retail | original parents and final service | receipt, custody, acceptance and fate ledger | parent_id; manufacturer; SKU; lot; nominal size; supplier current signed specification; exact closure and bag BOM; actual original net/gross mass; packaging tare; source/background gate and scope; stock_open; stock_close; receipts; terminal_parent_removals; supplier_return_back_entries; S; H; C; N; F; F_keep; T; T_supplier; U_keep; T_keep; O_keep; O; timestamps; reason; recipient; return-window close; late revisions | Scan/count each original bag at every custody event. Weigh gross and determine original net fill with calibrated scales using traceable supplier lot records or prospectively stratified destructive matched-bag sampling by lot/pack line; weigh actual emptied packaging, record sample count, dispersion, representativeness and actual sampled-parent fate. Verify material layers, inks/adhesives and whole-pack scope from supplier BOM and test/document evidence; photographs do not prove composition. Never infer net fill from nominal label or gross mass alone. Preserve unique original history through returns/resale. | Item(s); kg | each receipt/event and every closure/revision | entire prospective pool plus physical-return window and later known corrections | one actual SKU at store receipt/stock/customer/recipient gates | per reference flow | calibrations; signed supplier/BOM/background; paired sample records; serial event history; acknowledgment and reconciliation |
| cp_energy | retail | dedicated display lighting | meter and beneficiary map | meter_id; circuit diagram; start/end/register rollover; kWh interval; A_ck; A_allk; reserved/idle area; driver version; tariffs/provider; parent-meter inclusion | Read a calibrated meter continuously or at every declared interval boundary; verify actual circuit with isolation tests and floorplan. Log all hours including closed/no-sales periods. Allocate by pool_allocation only where needed; document provider and voltage separately from the generic flow. | kWh; m2 | every meter interval; circuit/space change | full pool including idle/closed and failed cohorts | declared dedicated lighting circuit and every beneficiary | per reference flow | meter calibration, circuit tests, readings and full-beneficiary balance |
| cp_containment | retail | retailer HDPE bags | purchase, empty-bag weighing and use ledger | bag_id; supplier; material specification; empty mass; opening/purchase/closing stock; used count; event/parent/carrier IDs; included provider scope | Verify actual HDPE material and weigh representative empty bags of each homogeneous batch on calibrated scales; record sampling variability. Reconcile actual consumption to stock and carrier events, not purchases alone. A zero requires stock/incident evidence of no use; unknown material is unresolved. | kg; Item(s) | each batch and use/stock event | full pool including quarantine and residual storage | retailer-added dry containment only | per reference flow | material declaration; calibrated weighing; stock and carrier reconciliation |
| cp_residual | retail | actual transfer and residual carriers | split, weighing, inventory and handover ledger | parent/component/carrier IDs; event/time; source type; whole gross/tare/net kg; composition including sugar, packaging, moisture and foreign material; opening/closing residual stock; split matrix; recovered recipient/state; treatment recipient/route; packaging manufacture ownership; provider transport/treatment scope; source consignment/case_id; actual packed gross-volume shares and all beneficiary quantities; attribution version; uncertainty | Weigh actual exclusive carriers on calibrated scales at removal/storage and terminal handover, taking container tare once. Identify actual cardboard and LDPE by supplier specification; do not infer from appearance. Whole failed bags and split descendants are mutually exclusive. Quantify composition through traced original BOM and matched sample/separation measurements, retaining full physical carrier mass. Reconcile all residual stocks and descendants to each original event. Any wet cleanup, fugitive dust/moisture or unknown missing material triggers the named completion module; it is not a default zero or assumed emission. | kg | every split, storage movement and handover | full pool and retained residual stock through final disposition | store removal/quarantine and actual recipient gate | per reference flow | calibrated scale/tare; original IDs; photos plus material/BOM proof; manifests and recipient acceptance; treatment/transport contract |
| cp_conditions | retail | custody conditions and actual route | continuous conditions and occurrence/absence inspection | logger_id; temperature; RH; calibration; timestamp; shelf/stock location; seal/caking/odor/contamination; current signed acceptance condition; alarm/action; floorplan; actual equipment; process/incident/invoice evidence; missing intervals | Use calibrated time-aligned temperature/RH loggers over the actual storage/display locations, retain continuous raw records and clock checks; inspect as scope_gate requires. Trace every incident to original bags and actual response. Verify excluded/conditional activity occurrence with logs/invoices; no-event assertion needs the same full period coverage. Missing intervals require documented reconstruction with independent records and uncertainty or unresolved status, never zero. | degC; %RH; time; status | continuous log; receipt/daily/every handover and incident | complete receipt-to-final-fate custody and pool | actual stock/display/quarantine sites | per reference flow | calibrations; full logs; signed specifications; inspection and incident trail |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_parent | retail_service; failed_background; supplier_transfer; failed_retained | N=count(unique finally accepted retained parents); receipt/opening parent responsibility = S+F+T+O with mutually exclusive final original IDs; S=N for a closed single-service pool. F=terminal_failed_originals+F_keep, each original once; U_keep=F_keep+T_keep+O_keep with disjoint ownership and no second physical output; q_failed=F/N, q_supplier=T_supplier/N, q_unqualified_keep=U_keep/N. T_supplier counts only actual supplier handoff events, not T; other acknowledged continuing systems remain with their actual recipient/state and existing physical carrier. Gross count stock audit: stock_open+receipts+C=H+T_supplier+terminal_parent_removals+stock_close; internal movements cancel. H includes actual failed external handovers and repeated sales events; receipts and returns count physical entry events while the original-background partition counts unique original IDs only. U_keep is the finally retained subset of H after actual C, not another outward event. N is separately corrected, never substituted into the gross stock equation. O blocks final closure; no N=0 division. | N; S; F; F_keep; T; T_supplier; U_keep; T_keep; O_keep; O; H; C; stock_open; stock_close; receipts; terminal_parent_removals; cp_goods | normalized_parent_counts | ghg-product |
| calc_energy | electricity_input | E_c=sum(E_k*A_ck/A_allk) only for an evidenced shared circuit; otherwise E_c=dedicated measured kWh. q_energy=3.6*E_c/N MJ. Meter rollovers and clock/circuit changes are corrected before attribution. A_allk includes reserved/idle beneficiaries; a missing driver or meter interval remains unresolved. | E_k; A_ck; A_allk; N; cp_energy | q_energy | ghg-product; jrc-retail |
| calc_mass | containment_input; recovered_sugar; case_waste; film_waste; whole_bag_waste; sweep_waste | q_mass=m_attributed/N kg. Obtain m_attributed from raw actually consumed HDPE or actual exclusive terminal carrier gross minus container tare, summed by original event and recipient after unique attribution; never set internal quantities to N or nominal 1 kg. Direct whole-carrier weighing and BOM reconstruction are exclusive methods; direct net mass already excludes removed portions. Packaging constituents remain inside their actual carrier. Retained residual stock is measured and carried to actual later fate in the original pool revision, not treated as dispatched. Missing fate/quantity blocks closure, never zero. | m_attributed; N; cp_containment; cp_residual | q_mass | jrc-retail; ghg-product |
| calc_background | failed_background; retail_service; supplier_transfer | For each original bag i retain actual receiving net sugar mass n_i, original consumer-bag and attributable source transport-case/film packaging BOM p_ij and complete supplier background P_i at the same gate, including documented inbound transport. B_F=sum(P_i for i in F), B_S=sum(P_i for i in S), B_T=sum(P_i for i in T), B_O=sum(P_i for i in O); these are background responsibilities, not kg sums. The count flow F/N is valid only for this one homogeneous actual bag/provider configuration; if lots have different original fills/BOM/backgrounds, sum actual lot-specific B_F/N, never replace with nominal-fill factors. Downstream adds B_S/N once and the fixed completion modules. Supplier transfers carry B_T intact; B_O blocks closed results. A broken parent background is not multiplied by waste carrier fractions, destination fractions or actual final moisture a second time. | n_i; p_ij; P_i; S; F; T; O; N; cp_goods | background_responsibility_and_coupling | ghg-product |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_completion | all inventory rows | All selected flows except electricity_input remain unverified specific candidates. Before any final dataset, verify actual manufacturer/SKU/state, flow type/direction, property/unit and receiving medium/recipient against original official flow/support responses and matching hashes; bind exact identity or retain unavailable status. A similar search hit is insufficient. Historical electricity evidence establishes only generic product-flow identity and MJ conversion, not a current supplier factor. | original official record/status/hash chain; supplier/recipient identity and scope; row-specific completion |
| execution_quality | all inventory rows | Record all raw units, timestamp/ID, calibration, sample design and uncertainty; reconcile actual pool/stock/circuit/carriers. Missing values, unknown identity/material, unacknowledged transfer and unmeasured paths remain unresolved. Never import example values, source ranges, prices or estimates as defaults or compliance limits. Define and justify the measurement uncertainty and reconciliation tolerance from instrument/sampling evidence before judging residuals; do not force closure by assigning the residual to air or waste. | raw files and signed corrections; calibration/sampling uncertainty; balance and exception log |
| completion_evidence | retail_service | Partial module completion and total-retail completion are distinct. The integrator documents every completion_modules item, actual occurrence/absence, named additional exchanges/protocols, fixed attribution method, source cohort/N and overlap removal. Unknown provider coverage blocks closure for its actual handover; missing common-store/capital/air modules block total-retail claims, not an honest explicitly partial report. | gate/cohort/row/provider matrix; actual completion measurements; unresolved list |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | retail_service; failed_background | Require one actual homogeneous bag configuration, original measured fill/BOM/background evidence, final qualification and return-closure records, N>0, no O or unresolved final residual fate. Check the count parent partition and separate gross handover/return stock equation; do not confuse nominal kg with measured content or count service. | ghg-product; sugar-spec |
| validate_exchange | all inventory rows | Every used card has one actual identity, declared provider/recipient boundary, unit, linked real-process protocol, original raw quantity, one attribution and one division by N. Audit complete carriers/constituents, supplier transfers and background ownership for overlap. Unknown or incompatible material/route requires a specific new card and sync, never substitution into a similar flow. | jrc-retail; ghg-product |
| validate_disclosure | retail_service | Label every output as this partial dry-stock module, state all exclusions and unverified rows, and require the fixed completion matrix plus B_S/N before any complete retail or goods-plus-retail use. Candidate markers and technical checks do not establish scientific approval, legal compliance, current supplier identity or publication readiness. | ghg-product; jrc-retail |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Only the declared partial dry-stock retail service for the exact single bag configuration, with source-period and responsibility context retained |
| allowed_use | Add B_S/N original successful-goods backgrounds and all measured completion_modules once with the gate/cohort/N overlap matrix; retain failed-parent backgrounds already here |
| excluded_use | Whole CPC leaf; cane sugar or other product/pack; total store retail without completion; sugar production flow; legal compliance or consumer waste forecast |
| required_metadata | manufacturer and SKU; nominal size and measured original fill; original bag BOM and supplier background scope; factory closure and lot specification; actual receipt and final condition; store and period; dedicated-light meter boundary; prospective pool and return closure; original-parent fate IDs; residual recipients and treatment; completion-module matrix; unverified identities and uncertainty |
| required_quality_disclosure | Partial boundary, original fill/BOM sampling, uncertainty, condition/return closure, provider scope, zero-output cohorts, late revisions, missing data and every unverified identity |
| update_trigger | SKU/pack/construction/closure/source/route change; actual extra process; provider boundary or instrument change; new returns; receipt/fate correction; reviewed identity evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc | official_guidance | UNSD CPC Version 3.0, subclass 62125; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62125 | Classification scope: groups234,235,236; narrower sugar subset only; not a retail method |
| sugar-spec | standard | The Silver Spoon Company, SSC - Granulated Sugar, RCS-SS-004 Revision11, review date30/07/2026, pages1 and4; https://media.supplychain.nhs.uk/media/documents/AES123/Marketing/90633_AES123%2030.07.23%20Silverspoon.pdf | Primary manufacturer specification: dry additive-free beet sugar, 1kg among formats and dry ambient custody concerns. Does not prove actual bag material/BOM, current lot compliance or universal numerical limits; actual supplier evidence required |
| sugar-products | literature | Silver Spoon, Our Products, Granulated Sugar; https://www.silverspoon.co.uk/our-products#product-granulatedsugar | Confirms named manufacturer granulated product only; same manufacturer is not an independent second product specification, and no pack-composition inference is made |
| jrc-retail | official_guidance | Schoenberger et al., Best Environmental Management Practice in the Retail Trade Sector, EUR25998EN (2013), DOI10.2791/1775, sections1.2,2.1.6.7,2.4; https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf | Retail lighting, energy and waste scope context; no benchmark amounts, allocation fractions, compliance or full-retail completeness inferred |
| ghg-product | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), chapters6,7,9; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Functional unit/reference flow, transparent boundaries and subdivision/causal allocation context. Specific parent, pool, partial-module and completion equations are this PCR design, not quoted requirements or a full standard-conformity claim |
