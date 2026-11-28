---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.other-non-metal-waste-or-scrap
status: candidate
content_maturity: authored_methodology
language: en-US
sync_with: pcr.zh-CN.md
---

# Unground natural muscovite workshop trimmings at first bulk handover

## 1. Scope and Applicability

This method covers clean trimmings from cutting/punching unbonded natural muscovite sheet in a fabrication workshop, dry manual segregation, remaining unground, accepted to an actual buyer specification, at first unpackaged bulk handover at the generating site. The residual commodity has a distinct recovery use; waste classification does not establish zero upstream burden. Demonstrate fabrication origin and first release. Exclude mineral feed, mine scrap, useful sheet, mica powder, mica paper, bonded/coated composites, synthetic mica, mixed demolition waste and ash/slag. Paper, plastic, rubber, leather, wood and metal scraps are outside scope. Process evidence is historical USGS original research, not evidence of a current factory or certified provenance. See `unsd-cpc3-2025`, `unsd-cpc3-2026`, `wco-mica-2022`.


MICAMAFCO’s original commodity description lists factory cutting/stamping scrap separately from mine scrap. Adopt only this origin/process distinction, excluding its inconsistent size conversions, grades, packing weights, production figures and market forecasts; it does not establish this dataset’s actual provider (`micamafco-factory-scrap`).

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.other-non-metal-waste-or-scrap |
| classification_refs | CPC 3.0 39290, accepted narrower association under docs/adr/2026-11-21-accept-cpc-39290-natural-muscovite-sheet-fabrication-trimmings.md |
| covered_products | Unground natural muscovite sheet-fabrication trimmings |
| excluded_products | Mineral feed, mine scrap, useful sheet, powder, mica paper, bonded composites, ash/slag and other-material scraps |
| representative_product | Unground natural muscovite workshop trimmings at first bulk handover |
| production_route | Sheet cutting/punching, dry segregation, acceptance, first bulk handover |
| market_state | Unground as-received net mass; unpackaged, no pallet |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply accepted workshop trimmings for subsequent recovery; no functional equivalence to virgin mineral or mica powder |
| How much | 1 kg |
| How well | Actual buyer-agreed natural muscovite identity, contamination, binder absence, unground state and moisture requirements |
| How long or cycle | One first-handover batch; no service-life claim |
| reference_flow_link | reference_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Unground natural muscovite workshop trimmings |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | generating workshop and provider; natural muscovite origin and sheet-fabrication records; absence of binder/coating; lot and first-release date; buyer and actual handover; moisture and net mass; size state and contamination acceptance; allocation point/method; outsourced operations and actual freight scope |

Declare every required qualifier in dataset metadata or equivalent fields.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | Reference quantity and all inventory use per 1 kg accepted net scrap at first handover. Q=sum(gross-tare), Q>0; exclude internal loops, resale, returns and rejects. |
| moisture | mass balance | Mass | kg | Separate as-received and dry mass; Qdry=sum(q_i*(1-w_i)) using paired wet-basis moisture samples. Do not count structural water as free moisture or substitute pure mica content for commodity mass. |
| meter_energy | electricity | Energy | kWh | E=closing-opening meter reading within the same boundary, checking multiplier; 1 kWh=3.6 MJ is a metrological conversion, not evidence of supplier native property or net calorific value. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Unbonded natural muscovite sheet received at generating workshop with upstream provider record |
| starting_condition_role | supplied_intermediate |
| product_classification_scope | CPC 3.0 39290; only fabrication scrap within HS2525.30, excluding 2621 ash/slag |
| recursive_input_rule | Internal returns are neither fresh purchases nor output; externally received same-category scrap requires a separate scope and cannot enter this workshop-generation route |
| upstream_dataset_requirement | Retain upstream sheet production and actual transport burdens under reviewed co-product rules; missing burdens cannot be replaced by zero |
| disclosure | Disclose workshop, outsourced provider, period and handover point/terms. Scrap is loaded into receiver-owned containers provided outside the boundary; tare is excluded from Q. No site packaging or pallet pool is included. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | workshop | Include cutting, segregation, extraction, storage, acceptance and actual loading. Grinding, washing, thermal treatment, post-handover transport and recovery are outside this reference gate; upstream sheet burdens remain included. | `usgs-muscovite-1950` |
| boundary_first_release | handover | Verify generating-workshop first release and buyer acceptance; count actual outsourced fabrication materials, energy and freight once. Transfer, trading and resale create no new reference output. |  |
| boundary_packaging | containers | If the site bears containers, packaging or a pallet pool, reassess scope and add each atomic exchange: purchases, first non-purchased external receipts, same-item genuine returns, all dispatches, discards and opening/closing stocks. First non-purchased receipts include incoming-material packaging, loans and free transfers regardless of supplier inventory coverage. A genuine return must trace to the same item previously dispatched by this site. Assign actual purchase, transport and service burdens once; missing supplier data remain pending. |  |
| boundary_completeness | inventory | Demonstrate absence of wet/thermal operations. Quantify every actual input, waste, release and infrastructure burden or justify exclusion under the study boundary; unknown is not zero. Add a separate card for each additional substance. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| workshop | Sheet fabrication and first scrap supply | required | this bounded route | foreground | 1 kg accepted scrap |

Cards retain unallocated physical totals X for mass closure; X/Q is an audit ratio only when Q>0. These audit ratios are not the exchanges of the scrap product model. Build the model exclusively from the released lot burden vector H_release/Q described in calc_burden, with each exchange divided once. Allocation acts on burdens only, never on measured physical flows.

### Process: Sheet fabrication and first scrap supply (`workshop`)

#### Inputs

##### Product flows

###### Unbonded natural muscovite sheet (`sheet_input`)

Measured sheet issued into the workshop; retain incoming grade, supplier, moisture and upstream burden separately.

- Selected flow: Unbonded natural muscovite sheet
- Flow property / unit: Mass / kg
- Amount rule: F / Q
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`

###### Metered electricity (`electricity`)

Actual trimming, extraction and loading electricity; distinguish dedicated scrap handling from shared fabrication.

- Selected flow: Metered electricity
- Flow property / unit: Energy / kWh
- Amount rule: E / Q
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

###### Steel cutting blade (`steel_blade`)

Conditional blade consumption from opening stock, receipts and closing stock, excluding tools still in use.

- Selected flow: Steel cutting blade
- Flow property / unit: Mass / kg
- Amount rule: B / Q
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

###### Road freight transport of muscovite sheet (`inbound_freight`)

Actual inbound sheet freight only where not already in supplier dataset; payload mass times actual loaded distance / 1000.

- Selected flow: Road freight transport of muscovite sheet
- Flow property / unit: Transport service / t km
- Amount rule: T / Q
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

#### Outputs

##### Product flows

###### Unground natural muscovite workshop trimmings (`reference_product`)

Q is net as-received mass of unique accepted first-release scrap lots; no internal returns or resale.

- Selected flow: Unground natural muscovite workshop trimmings
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`

###### Trimmed natural muscovite sheet (`sheet_coproduct`)

Record actual accepted useful sheet output and its independent specification; not reference scrap.

- Selected flow: Trimmed natural muscovite sheet
- Flow property / unit: Mass / kg
- Amount rule: S / Q
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`

##### Waste flows

###### Rejected muscovite trimmings (`mica_reject`)

Separate rejected mica offcuts from accepted scrap; identify contamination and actual receiver.

- Selected flow: Rejected muscovite trimmings
- Flow property / unit: Mass / kg
- Amount rule: R / Q
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`

###### Captured muscovite dust (`captured_dust`)

Only actual collected dust from cutting/extraction; no fabricated powder output or sale grade.

- Selected flow: Captured muscovite dust
- Flow property / unit: Mass / kg
- Amount rule: C / Q
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`

###### Spent steel cutting blade (`spent_blade`)

Actual discarded blade mass and recovery/treatment destination; no substitution credit.

- Selected flow: Spent steel cutting blade
- Flow property / unit: Mass / kg
- Amount rule: W / Q
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

##### Elementary flows

###### Muscovite particulate matter to air (`mica_air`)

Actual uncaptured mica particulate release; determine medium, size fraction and speciation before UUID binding; do not equate captured dust to emissions.

- Selected flow: Muscovite particulate matter to air
- Flow property / unit: Mass / kg
- Amount rule: A / Q
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | shared burdens | Subdivide scrap-only sorting/loading burdens (fully to scrap) and sheet-only operations first. Allocate common burdens by demonstrated physical causality; only otherwise use actual economic values at the same allocation point, state and period with independent review. Neither the scrap label nor mass alone establishes a zero or automatic mass allocation. | `ilcd-allocation-2010` |
| allocation_economic | residual shared burdens | At each common fabrication split g, measure contemporaneous generated scrap G_g and useful sheet S_g, including material retained in stock. For every actual valuable co-product j generated at that split, V_jg=m_jg*p_jg; alpha_scrap,g=V_scrap,g/sum(V_jg). Never substitute cross-period dispatched Q for generated G_g or pair Q with current-period sheet output. Use net prices at the common allocation point, removing only subsequent processing, packaging and freight. Retain price, period, currency and sensitivity. Require sum(V_j)>0 and nonnegative values; otherwise review another method instead of applying this formula. | `ilcd-allocation-2010` |
| allocation_no_credit | scrap and returns | At each split g and for each exchange k, B_scrap,g,k=B_scrap-only,g,k+alpha_scrap,g*B_shared,g,k; B_sheet,g,k=B_sheet-only,g,k+alpha_sheet,g*B_shared,g,k. Sheet-only inputs never enter scrap burden. Shares of every common exchange sum to its original quantity. Keep each generated lot’s vector through stock and release; subsequent scrap-only handling is assigned once to the relevant lot. Internal loops, avoided disposal and downstream substitution earn no credit in this dataset; retain actual waste-treatment burdens. | `ilcd-allocation-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | workshop | sheet and mica mass | weighing and acceptance | F,S,Q,R,C,A; opening/closing WIP; gross,tare; lot; moisture; rejects; receiver; origin | Batch weighing, lot tracing, paired moisture sampling and buyer acceptance; opening/closing stocktaking ;  Sum same boundary/period; deduplicate handovers, track internal loops separately; normalize by Q| kg | each batch | one declared representative period | generating workshop and outsourced fabrication | per reference flow | calibration, specification, source records, mass balance, buyer receipt |
| cp_utilities | workshop | electricity; blade; inbound freight | meter and stock records | E,B,W,T; multiplier; blade stocks; payload; km; supplier boundary; dedicated/shared split | Submeter readings, tool stocks/weighing, inbound freight payload/distance; check supplier overlap ;  Sum each quantity separately then divide by Q; never add unlike units| kWh; kg; t km | meter interval and each shipment | same declared period | same workshop and provider boundary | per reference flow | meter multiplier, stock records, freight notes, supplier scope, allocation evidence |
| cp_air | workshop | uncaptured mica particulate | emission measurement | concentration; gas volume; run time; background; size; medium; dust capture; uncertainty | Measured mass concentration times matching gas volume, or a fully validated mass balance; never label an unexplained material difference as an emission ;  A=sum(c_i*V_i) after unit conversion; deduplicate stack/fugitive sources; A/Q| kg | each representative operating condition | same declared period | actual release points and fugitive sources | per reference flow | method, size fraction, detection limit, sampling coverage, uncertainty |
| cp_allocation | workshop | shared burden split | allocation records | dedicated burdens; common burdens; G_g,S_g; net prices; currencies; split point; lot; H_open,k; B_scrap,g,k; B_handling,k; H_release,k; H_close,k; H_loss,k; H_transfer,k | Process subdivision, causal evidence and common-point price records; independent review ;  Retain pre/post allocation totals; sum of shares=1| kg; currency; activity units | each reporting period | same declared period | all coproducts at common point | per reference flow | original accounts, method, sensitivity and review |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_normalize | inventory | When Q>0, audit x=X/Q for each measured physical total X; Q is accepted first-handover net scrap in the period, never sheet input or sum of all output. These audit amounts are not allocated model exchanges. When Q=0 retain raw X, stocks and destinations without any division. | X,Q | per 1 kg accepted scrap |  |
| calc_mass_balance | mica mass | F+O=Q+S+R+C+A+K, with O/K opening/closing mica WIP and awaiting-handover stocks in the same boundary. Record free-water changes separately and cross-check paired dry mass. Explain residual and uncertainty; neither zero it nor automatically assign it to emissions. | F,O,Q,S,R,C,A,K,w | mass closure and discrepancy |  |
| calc_burden | allocated inventory | For each exchange k, H_open,k+sum(B_scrap,g,k)+B_handling,k=H_release,k+H_close,k+H_loss,k+H_transfer,k. Here H covers only post-split scrap WIP and awaiting-handover lots. Carry their original allocated values and add only actual new work. Before the common split, maintain a separate unallocated WIP vector U_open,k+U_new,k=U_to_split,k+U_close,k+U_loss,k+U_transfer,k; only U_to_split enters the relevant generation-point allocation once. Never put pre-split WIP into H_open or charge U_to_split again as a fresh purchase. Retain closing stock vectors for later periods. Document loss/reject and transfer vectors with destinations; they cannot disappear or become credits. Model exchange i_k=H_release,k/Q only for Q>0, exactly once. Physical audit X/Q must never be used as an unallocated model input or divided again. Preserve electricity, material, freight and treatment components separately with identity, unit, provider, period, allocation and lot binding; do not sum unlike units or only carry an impact score. | cp_allocation; Q | allocated burden per kg | `ilcd-allocation-2010` |
| calc_zero_release | zero dispatch and carryover | When Q=0, calculate neither X/Q nor H_release/Q; preserve raw physical amounts, generation lots, every exchange burden, closing stock, losses and destinations. Example: t1 generates G1>0 but Q1=0; put B_scrap,1 and dedicated handling into closing stock. With no new cutting in t2, H_open,2=H_close,1; release carries prior allocated sheet, electricity and all other exchanges, adds actual t2 dedicated work and retains t2 closing/loss/transfer vectors. Normalize once only against actual Q2>0. No cutting in t2 does not mean zero burden. For partial release use actual lot tracing or a disclosed consistent inventory method and retain the remaining share. | cp_allocation; lots; Q | raw stock ledger and released vector | `ilcd-allocation-2010` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_acceptance | scrap | Require actual buyer contamination/size-state specifications and lot results; no universal purity, yield or energy defaults | lot acceptance and sampling |
| dq_origin | source | Trace fabrication origin and unbonded state; mineral name or colour cannot prove provenance or absence of contamination | sheet records and inspection |
| dq_unknown | all exchanges | Distinguish unknown, measured zero and not applicable; verify actual supplier native property, medium and unit chain; unavailable empirical ranges remain collection needs | original records and uncertainty |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_gate | reference product | Reject non-fabrication origin, ground, bonded or mixed mine scrap, missing buyer acceptance or duplicate first release. Q must be positive and traceable net mass. | `wco-mica-2022`, `usgs-muscovite-1950` |
| validate_inventory | inventory and calculations | Check atomic cards, protocols, per-kg denominator, mass/burden closure, moisture basis, supplier overlap, outsourcing, releases and actual handover. Unit support cannot establish commodity identity. |  |
| validate_readiness | dataset | Missing actual exchange UUIDs, essential quantities, acceptance, allocation or release evidence prevents the dataset being released as fully verified background data; structural methodology checks are not scientific approval. |  |
| validate_carry | lots and burden vectors | Verify per-exchange generation-point allocation and opening+new=released+closing+loss+transfer. Retain lost/rejected lots’ historic burdens and treatment in explicit destination accounts; reassignment to surviving goods needs separate reviewed policy, never an exemption by stock subtraction. Check the zero-dispatch/next-period-no-production example. Reject audit X/Q entering the model, sheet-only inputs charged to scrap, or repeated division by Q. | `ilcd-allocation-2010` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Actual scrap input to buyer recovery |
| allowed_use | Scrap supply for the declared workshop, state and handover with explicit allocation and quality |
| excluded_use | Virgin/powder substitution factors, recycling credits, zero-burden scrap, provenance certification and cross-factory defaults |
| required_metadata | Required qualifiers, actual provider, period, handover boundary, upstream sources and allocation method |
| required_quality_disclosure | Unresolved UUIDs, missing values, monitoring uncertainty, specifications, measurement coverage and price sensitivity |
| update_trigger | Changed origin, binder/coating state, route, provider, buyer acceptance, container responsibility or allocation evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-2025 | official_guidance | UNSD CPC 3.0 explanatory notes, 30 June 2025, PDF p202; 16390 and adjacent 392 subclasses. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/39290 | Frozen leaf title and adjacent boundaries; no June HS correspondence inferred. |
| unsd-cpc3-2026 | official_guidance | UNSD CPC 3.0 explanatory notes, 23 October 2026, CPC3!A1907:D1907 (39290), row 514 (16390). https://unstats.un.org/unsd/econstats/classifications/cpc | Supplementary current explanation: 2525.30 and 2621; does not change frozen coverage input. |
| wco-mica-2022 | official_guidance | WCO HS 2022 chapter 25, Note 1 and heading 25.25, PDF pp1,5. https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0525_2022e.pdf | Crude/split mica, powder and mica waste distinctions; no tariff ruling for an actual shipment. |
| usgs-muscovite-1950 | literature | Jahns and Lancaster, Physical characteristics of commercial sheet muscovite in the southeastern United States, USGS Professional Paper 225 (1950), printed pp17,26–27; PDF pp38,49–50, Figure 14. https://pubs.usgs.gov/pp/0225/report.pdf | Historical shop-scrap origin, trimming/punching and impurity distinctions only; no modern site, yield, grade or price defaults. |
| ilcd-allocation-2010 | handbook | European Commission JRC, ILCD Handbook General guide Detailed guidance, first edition March 2010, §§7.9.2–7.9.3, printed pp255–265. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Subdivision, physical causality and conditional economic allocation at common point/state; no plant factors. |

| micamafco-factory-scrap | literature | MICAMAFCO, Forms of Processed Mica, MICA SCRAP / Factory Scrap or cuttings, undated. https://www.micamafco.com/processedd9db.html?nm=processed | Factory versus mine scrap origin/process and separate commodity distinction only; no numeric specifications or provenance certification. |
