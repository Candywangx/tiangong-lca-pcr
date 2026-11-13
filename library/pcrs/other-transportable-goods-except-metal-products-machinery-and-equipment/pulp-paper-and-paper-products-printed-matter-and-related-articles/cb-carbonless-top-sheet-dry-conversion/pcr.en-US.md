---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.cb-carbonless-top-sheet-dry-conversion
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Dry conversion of purchased CB carbonless reels to unprinted loose small-format sheets

## 1. Scope and Applicability

This method covers purchased, already back-microcapsule-coated CB carbonless parent reels, converted on a dry electrically powered line by unwinding, slitting, sheeting, inspection, stacking and uncoated-paper wrapping into unprinted, uncollated and unglued non-bulk top-sheet stock. Capsule coating, base papermaking and pulping are supplier upstream processes. CF developer-coated paper, two-sided CFB, self-contained SC, traditional carbon paper and other transfer media have different product boundaries. On-site coating, wet washing, spray humidification, thermal drying and combustion equipment are outside this selected route.

A CB top sheet alone is not a complete copying system. Supplier grade, coating side, compatible receiving paper and use conditions are required; a mass reference does not establish equal function across grades. The producer describes color-forming substances inside microcapsules without disclosing a generic formulation. Never infer dye, capsule wall, encapsulated liquid, binder or developer species or quantities. `koehler-reacto-cb`, `koehler-reacto-practical`.


This is a representative methodological synthesis of that purchased-CB dry-conversion branch, not evidence that a particular factory has selected equipment, suppliers or formulation. No complete copying function or whole-CB manufacturing dataset is supplied by the cutting guidance.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.cb-carbonless-top-sheet-dry-conversion |
| classification_refs | CPC 3.0 32191; narrower |
| covered_products | Unprinted loose CB carbonless top sheets; actual dimensions meeting documented non-bulk criteria |
| excluded_products | CF, CFB, SC; carbon paper; transfer paper; duplicator stencils and paper offset plates; bulk coating stock; printed, collated or glued forms, pads and other finished articles |
| representative_product | Customer-specified small-format loose CB sheets of one supplier grade, colour and coating side |
| production_route | Purchased already-coated reels; dry electric slitting/sheeting; inspection and paper wrapping |
| market_state | Accepted unprinted loose sheets at converter gate, net of packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Pressure-copying top-sheet stock for subsequent pairing with compatible receiving paper |
| How much | 1 kg accepted net paper mass |
| How well | Declared dimensions, tolerances, grade, colour, coating orientation and supplier-specific copying quality; no unacceptable capsule damage |
| How long or cycle | One conversion campaign; shelf storage and copy life follow the actual supplier declaration, without generic years |
| reference_flow_link | `cb_sheet_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | coated printing, writing and packaging paper `faaae1a8-97af-4a26-bdb2-198abfc0d8e4` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | CB type and one-sided coating; supplier grade and coating evidence; dimensions and non-bulk criterion; grammage; moisture and basis; colour; capsule integrity; copy quality and compatible receiving paper; packaging exclusion; site, period and electricity supply point |

Declare every qualifier in the data package. The selected UUID identifies a broad whole coated-paper product, including its existing coating. For `cb_reel` its role is purchased, already microcapsule-back-coated CB parent reel; for `cb_sheet_output` its role is first-accepted unprinted, uncollated, unglued loose non-bulk CB sheets at the converter gate. These distinct row identities and states remain mandatory even though the broad flow UUID is shared. The native name and plant gate do not specify size, CB function, capsule chemistry or a compatible manufacturing provider. Keep the actual supplier CB coating within whole-reel upstream coverage once; a decorative/protective varnish or generic coated-paper dataset cannot replace CB manufacturing. Coating examples in a generic identity description supply no recipe, formulation, extra coating operation or production quantity. `koehler-reacto-cb`.


For all campaign totals below, D = Q: Q is net kg of new-lot sheets at their first quality release in the declared period, including first-released sheets still in closing finished-goods stock. Reinspection, historical rework, returns and redelivery never create Q again. Gross physical movement V and attributable exchange vector A are separate ledgers. An amount per reference flow is A/Q once after the recorded raw-unit and scope conversions; physical movements are not multiplied by allocation shares. Q = 0 is a failed-output period requiring a linked loss/idle/cleanup/start-stop burden record, not division by zero or deletion.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh accepted net paper mass D including existing coating and excluding packaging; measure each stream wet mass and water at its actual delivery/collection state, including existing coating. Compare different states in separate common dry-solids and H2O ledgers; do not convert received wet mass to an assumed gate moisture or change the wet reference amount. |
| `electricity_conversion` | `electricity` | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Convert metered kWh to MJ by multiplying by 3.6; this is an energy-unit conversion, not a combustion assumption. Preserve supplier delivery and background-electricity property basis. |
| `moisture_basis` | all inventory rows | Mass | kg | Measure moisture separately for product, trim and dust; w must be a measured wet-basis H2O fraction; dry mass equals wet mass times (1-w) only when the non-water fraction is proven to be that dry matter. Verify encapsulated liquids/solvents and other non-water volatiles separately, without treating all drying loss as water. Relative air or relative paper humidity is not wet-basis mass fraction and cannot be used to deduct water. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Traceable purchased reels with completed CB functional coating; cores and transport packaging accounted separately |
| starting_condition_role | intermediate_product |
| product_classification_scope | Small-format CB loose-sheet subset of CPC 3.0 32191; size criteria and mapping require independent determination |
| recursive_input_rule | Same-category accepted-sheet rework remains a measured physical input linked to its supplying stage; do not recurse indefinitely, delete the input or count it as fresh accepted output |
| upstream_dataset_requirement | Reel background must cover base paper and actual CB coating production, compatible formulation and delivery; a UUID alone does not establish background compatibility. Link inbound transport separately from the actual route. |
| disclosure | Declare converter-gate foreground boundary, upstream and transport links, material states, storage conditions and ancillary materials. Conversion-only burdens do not establish a full life cycle. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route` | convert | Keep purchased coated-reel production upstream; foreground starts with receipt and ends with accepted loose sheets and exported residues. Integrated coating or printing requires another applicable method. | koehler-reacto-cb; jrc-paper-bref-2015 |
| `boundary_completeness` | convert | Include material handling, rejected lots, electricity for extraction and room control, actual wrapping, waste destinations and boundary emissions. Add one atomic row for every actual ancillary material, packaging component, water exchange, maintenance consumable or refrigerant loss; absent activity needs documented non-applicability, not invented zero. | jrc-paper-bref-2015 |
| `boundary_loops` | convert | One foreground unit aggregates sheeting and packing, with independently metered stages. Keep stage handovers equal on both ends in the physical ledger; do not create a second final product exchange. Track actual returned reels, cores and removed incoming packaging by custody, material, count/unit mass, receipts/dispatch, actual reuse, damage/loss/discard, opening/closing stocks and receiver. Do not count circulating objects as new manufacture or assume reuse cycles; add actual cleaning/repair/transport and utilities. Consumed or discarded components require separate exchanges. | jrc-paper-bref-2015 |
| `boundary_packaging_receipts` | convert | Trace each actual packaging component and core from its first external physical receipt independently of procurement and ownership. A whole-package purchase price includes its components even without separate invoices: retain purchased input attribution. For first borrowed, rented, entrusted or other non-purchased accompanying packaging, preserve material, form, type, direction, raw unit, receipt quantity/time, origin, ownership, cohort, prior burden vector and provider; unknown prior vector remains unresolved. A returning object needs its actual earlier outward history. Internal reuse is not a new external receipt. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| convert | Dry sheeting, inspection and wrapping | required | Declared CB reel conversion route | foreground | 1 kg accepted net CB sheets |

Physical stages: receipt verification → unwinding/slitting → sheeting → inspection/rejection → stacking/wrapping. Aggregation does not waive stage measurements. Keep trim, captured dust, air releases and stock changes separate; internal reuse is neither exported waste nor a duplicated fresh input.

Investigate actual cutting blades/sharpening materials, press-bar rubber pads, protection sheets, conveyor belts, rollers, lubricating oils/greases and other maintenance materials: material/formulation, issues/returns/replacement/stocks/wear, waste receiver and maintenance electricity/water. Producer expanded-rubber/protection-sheet instructions trigger investigation rather than universal mandatory material, frequency or composition defaults. Add a separately verified atomic row for every actual positive input/export; uninvestigated is not zero.

### Process: Dry sheeting, inspection and wrapping (`convert`)

#### Inputs

##### Product flows

###### Purchased CB carbonless parent reel (`cb_reel`)

Net consumed CB reel paper, including its existing coating, from opening stock plus receipts minus closing stock and supplier returns. Exclude core and transport packaging mass. Record supplier, grade, coating side and upstream dataset; no on-site coating ingredients are inferred.

- Selected flow: coated printing, writing and packaging paper `faaae1a8-97af-4a26-bdb2-198abfc0d8e4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured amount per 1 kg reference flow from `cp_material` records; campaign totals divided by accepted net paper mass.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `koehler-reacto-cb`

###### Alternating current (`electricity`)

Meter attributable cutting, extraction, handling, packing and electrically controlled-room electricity. This identity is only for 1–35 kV consumption mix delivered to the user; verify the actual supply point and upstream losses. If the supply is at another voltage, this UUID cannot be used. The complete record has locationOfSupply CN. Collect actual site/provider region, year, generation mix, delivery point and loss coverage, as well as compatibility with its native Net calorific value/MJ reference. A matching electrical-material UUID and kWh conversion do not prove those background conditions.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured amount per 1 kg reference flow from `cp_energy` records; campaign totals divided by accepted net paper mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `jrc-paper-bref-2015`

###### Uncoated printing, writing and packaging paper (`paper_wrapper`)

Weigh actual uncoated paper ream wrapper consumed, including wrapping rejects; supplier declaration must confirm uncoated material. The broad physical identity is narrowed to this wrapper; no generic kraft grade or barrier treatment is assumed. Verify a single actual uncoated/unimpregnated paper wrapper without laminate, adhesive backing, coating or reinforcement, with grade, fibre origin, inherent fillers/sizing, moisture and provider mass basis. Other actual packaging materials require separate verified atomic rows. Source CPC 32129 graphic woodfree classification is narrower than the packaging-paper name: disclose this source metadata limitation and require source/provider classification clarification, without asserting an exact actual wrapping category or default recipe.

- Selected flow: Uncoated printing, writing and packaging paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured amount per 1 kg reference flow from `cp_material` records; campaign totals divided by accepted net paper mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `jrc-paper-bref-2015`

#### Outputs

##### Product flows

###### Unprinted loose CB carbonless top-sheet paper, cut to non-bulk size (`cb_sheet_output`)

1 kg accepted net paper output, including the existing CB coating, excluding all packaging. Measure accepted batches after final cutting, inspect dimensions and capsule damage and document grade-specific copy performance evidence.

- Selected flow: coated printing, writing and packaging paper `faaae1a8-97af-4a26-bdb2-198abfc0d8e4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_output`
- Sources: `koehler-reacto-cb`; `koehler-reacto-practical`

##### Waste flows

###### waste paper (unspecified) (`coated_trim`)

Weigh separately collected CB-coated trim and rejected sheets exported to the receiver. Declare capsule/coating contamination, moisture, legal waste classification and receiving route; no automatic recycling or unrestricted recovered-paper substitution. Keep wrapper offcuts separately in the foreground evidence.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured amount per 1 kg reference flow from `cp_residue` records; campaign totals divided by accepted net paper mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue`
- Sources: `jrc-paper-bref-2015`

###### waste paper (unspecified) (`wrapper_trim`)

Weigh uncoated wrapper offcuts and wrapping rejects exported separately from CB-coated paper. Record actual composition, moisture and receiver; sharing a broad waste-paper UUID does not merge these physically distinct streams.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured amount per 1 kg reference flow from `cp_residue` records; campaign totals divided by accepted net paper mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue`
- Sources: `jrc-paper-bref-2015`

###### Captured CB-coated paper cutting dust (`captured_dust`)

Weigh actual exported particles removed from the dry CB-paper cutting extraction collector, with measured fibre, microcapsules/capsule wall/encapsulated liquid/binder and any other existing coating components, moisture, contamination, collection point, stock/internal return, waste status and receiver/provider compatibility. No component recipe, CAS or hazard class is inferred from the generic name. Waste Mass/kg is actual captured whole particles, not an atmospheric PM exchange, ash, wood dust or treatment service. Keep collector stocks and internal returns separate from exports; measured air-release fractions remain disjoint. The source English comment supports industrial collectors; its generic Chinese non-degradability and weekly housekeeping wording is not an actual biodegradability or collection-frequency claim for this material.

- Selected flow: Dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured amount per 1 kg reference flow from `cp_residue` records; campaign totals divided by accepted net paper mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue`
- Sources: `jrc-paper-bref-2015`

##### Elementary flows

###### particles (PM2.5) (`pm25_air`)

Record only measured particles at or below 2.5 micrometres released beyond the site boundary to outdoor air, unspecified subcompartment. A mass concentration without gas-volume and time integration is incomplete.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured amount per 1 kg reference flow from `cp_air` records; campaign totals divided by accepted net paper mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-paper-bref-2015`

###### particles (PM2.5 - PM10) (`pm25_10_air`)

Record only the measured exclusive fraction above 2.5 and at or below 10 micrometres discharged to outdoor air, unspecified subcompartment. Do not add cumulative PM10 to PM2.5; subtraction requires matched sample/time/volume bases.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured amount per 1 kg reference flow from `cp_air` records; campaign totals divided by accepted net paper mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-paper-bref-2015`

###### particles (> PM10) (`pmover10_air`)

Record the measured exclusive fraction above 10 micrometres discharged to outdoor air, unspecified subcompartment. Do not substitute total dust or a correction flow. No positive default emission is specified.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured amount per 1 kg reference flow from `cp_air` records; campaign totals divided by accepted net paper mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-paper-bref-2015`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_hierarchy` | convert | First investigate subdivision or system expansion to avoid allocation; use separate batch meters and direct attribution for subdivision. Expansion requires actual co-functions, empirically demonstrated substitution and representative boundaries, with results for the expanded system as a whole and no automatic waste credit. If neither applies, document a causal physical allocation basis; another basis requires justification and sensitivity analysis. Neither saleability nor mass alone establishes a coproduct credit. | eu-pef-2021 |
| `allocation_physical` | convert | Preserve the unallocated physical mass/water/carbon ledger separately from allocated environmental burdens. Do not multiply physical coproduct outputs or internal transfers by burden allocation shares. Record waste as physical exports; recovery credit requires the applicable end-of-life method and verified receiver, without duplicate avoided-production credit. | eu-pef-2021; jrc-paper-bref-2015 |
| `allocation_row_cause` | all inventory rows | Preserve original quantities, integrate actual rates once and convert the recorded scope first; then subdivide separately metered stages and attribute each exchange by its measured physical cause. Only a demonstrated same-stage residual shared among actual co-functions may use contemporaneous stage-specific relative values after causal physical attribution is unavailable, with actual quantities/prices, justification and sensitivity. Normalize A/Q once at the end. Do not allocate every exchange by one revenue ratio or invent substitution credit. | eu-pef-2021 |
| `allocation_history` | convert | Raw/unused inputs, work in progress and finished goods at opening/closing carry their actual per-flow inherited burden vectors. Keep newly incurred burdens separate. Historical rework, customer returns and redelivery retain earlier vectors plus only actual incremental handling/conversion. Do not charge opening FG inherited manufacture again to new-lot Q: preserve each original cohort's recorded first-accepted net quantity Q_original and attribute only actual incremental service burdens to the cohort served. Its correction per kg is incremental A_service / Q_original, never divided by new-lot Q or serviced/retested quantity; retain an unknown original quantity as an unresolved raw correction. Converted or inspected service quantity and handling counts do not create new accepted-product denominators. Keep burdens of failed lots, Q-zero runs, idle, cleanup and start/stop; document their causal attribution and period linkage. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | convert | cb_sheet_output | weighing | batch; grade; coating side; dimensions; moisture basis; accepted mass D; packaging tare | Calibrated weighing of accepted net paper, dimension inspection and capsule-damage/supplier-compatible quality evidence; reconcile packaging tare. | kg | each batch | declared complete operating period | selected converter line | per 1 kg reference flow | scale calibration, acceptance records, supplier specification |
| cp_material | convert | cb_reel; paper_wrapper | material balance | opening; receipts; closing; returns; tare; supplier; grade; batch; moisture; validated H2O/non-water volatile fractions; coating/capsule composition; actual packaging/core custody | Weigh each material and reconcile stocks; separate coated reel paper from wrapper. Account for cores and removed packaging separately; add separate rows for other actual materials. | kg | each batch and stock closing | same period as accepted output | selected converter line | per 1 kg reference flow | receipts, stocks, returns and supplier basis |
| cp_energy | convert | electricity | meter | meter start/end; submeter; voltage; CN source versus actual site/provider geography/year/mix; supply point/loss coverage; line time; auxiliary loads; D | Calibrated meter reads synchronized with cutting, extraction and packing auxiliaries; verified driver for shared loads; actual supply point compatible with background consumption mix. | kWh; MJ | each batch | same period as accepted output | actual electrical supply boundary | per 1 kg reference flow | meter calibration, wiring, supplier and loss boundary |
| cp_residue | convert | coated_trim; wrapper_trim; captured_dust | weighing | stream id; wet mass; moisture; fibre/coating composition; microcapsules and encapsulated non-water liquids; H2O; contamination; stock/internal return; waste status; destination; receiver; D | Weigh trim and collector dust separately, preserve composition/contamination; reconcile dispatch and actual receiver requirements, with equal internal-loop quantities at both ends. | kg | each collection and dispatch | same period as accepted output | each stream leaving the converter line | per 1 kg reference flow | scale, waste transfer record, receiver approval |
| cp_air | convert | pm25_air; pm25_10_air; pmover10_air | measurement | outlet; sample time; size fraction; concentration; dry/wet gas volume basis; gas T/P/conditioning; total sampled volume versus volumetric rate; duration; capture; fugitive escape; detection limit; D | Use calibrated outlet- and size-appropriate sampling, retaining method performance, detection limit and gas-volume state; cover outlets and actual fugitive boundary escape. Use matched concentration/gas T/P/wet-dry/conditioning bases: integrate C(t) times volumetric flow rate, or a demonstrated comparable average concentration times the entire matching period gas volume. Never multiply an already integrated volume by duration again. Do not invent size splits. | kg | representative operating-state sampling and period integration | same period as accepted output | outdoor-air site-boundary releases | per 1 kg reference flow | raw sampling, flow-meter calibration, gas state and representativeness |
| cp_campaign | convert | all inventory rows | lot and burden ledger | lot/cohort; first-release time; Q; opening/closing raw/unused/WIP/FG; gross V by direction; inherited per-flow vector; incremental A; rate/time and original unit; stage/cause; failure/idle/cleanup/start-stop; service/handling quantity; original cohort first-accepted net quantity Q_original; incremental A_service; actual residual co-functions and contemporaneous prices | Link calibrated primary records to first quality release and stock movements; keep physical quantities and burden vectors separate, attribute by exchange cause, and retain failed-period burdens. | original unit; kg; kWh; MJ | each movement and first release; period closing | same complete campaign and linked historical cohorts | selected line and measured shared stages | per 1 kg reference flow | lot acceptance, stock reconciliation, raw meters, causal drivers and inherited vector provenance |
| cp_packaging | convert | actual wrapper; cores; incoming and reusable packaging components | receipt and custody ledger | component/material/form/type/direction; raw unit; count and unit mass; receipt/time/origin/ownership/cohort; purchase inclusion; provider; prior vector; prior outward record; opening/closing empty/raw/WIP/FG/reusable; dispatch/returnout/waste; cleaning/repair | Establish first external physical receipt separately from purchasing/ownership, then reconcile every physical leg; count each whole article provider once and keep component analysis as a subledger. Internal reuse creates no new first receipt. | actual raw unit; count; kg | each receipt, movement and stock closing | same campaign plus evidenced return history | every packaging state at converter boundary | per 1 kg reference flow | receiving notes, package price scope, ownership contract, stock counts, provider coverage and actual outward/return records |
| cp_transport | convert | actual inbound/outbound packaging, materials and residues | route records | stream and cohort; gross leg/direction; actual loaded mass; distance; vehicle/mode/load; empty return; fuel/service basis; provider coverage | Retain each physical dispatch and return leg without netting. For mass-distance service convert measured kg to tonnes once, multiply by actual km once; separate a provider transport service from any duplicated own vehicle fuel. Add a verified atomic exchange for each actual service or fuel before dataset completion. | kg; km; tkm; actual provider unit | each leg | same campaign and linked return legs | actual transport boundary | per 1 kg reference flow | waybills, weighbridge, route evidence and provider transport boundary |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_records` | all inventory rows | Divide each attributable row total for the same period by D to obtain the amount per 1 kg reference flow; finished reference row is fixed at 1 kg. | row total; D; cp_output | exchange amount per 1 kg reference flow |  |
| `electricity_units` | `electricity` | MJ = kWh × 3.6; normalize with the same D. | meter kWh; D; cp_energy | MJ per 1 kg reference flow |  |
| `physical_balance` | convert | Keep an unallocated physical ledger: net paper-and-coating inputs + opening work in progress = accepted sheets + trim + captured dust + air particles + closing work in progress + other measured releases. Separate dry-solids and water balances before comparing different moisture states; balance packaging separately. Report residuals without forcing invented zero. | cp_material; cp_output; cp_residue; cp_air | physical balance and residual | jrc-paper-bref-2015 |
| `pm_exclusive` | pm25_air; pm25_10_air; pmover10_air | For matched cumulative measurements, 2.5–10 fraction = PM10 - PM2.5 and >10 fraction = total particles - PM10. Negative differences or different bases require investigation. Unmeasured fractions remain unresolved, without size factors. | matched cp_air samples | exclusive particle amounts |  |
| `pm_mass_basis` | each air-particle row | m_kg = 10^-6 * integral(C_mg_per_m3(t) * Vdot_m3_per_time(t) dt), or proven comparable average C * matching period total V * 10^-6. Convert mg to kg once and divide by D once. Match concentration and gas T/P/wet-dry/conditioning bases; do not multiply cumulative gas volume by duration or assume gas state/bin shares. | cp_air; cp_output | exclusive particle kg per 1 kg reference flow |  |
| `campaign_stock_vectors` | convert | Q equals first-released new-lot net kg including closing FG. For each stock state: opening + gross inward = gross outward + closing + measured loss, with internal stage handovers equal. In physical_balance accepted sheets denotes first release Q; the separate FG ledger reconciles opening FG + Q + actual returns = gross dispatch + closing FG + actual rework/discard; no closing-FG subtraction from Q. Carry actual per-flow historical vectors separately from physical V and incremental A; normalize each final A by Q once. Q-zero burdens remain linked unresolved quantities until attributed. | cp_campaign; cp_output; cp_material; cp_residue | reconciled physical stocks and inherited/incremental burden vectors per 1 kg reference flow |  |
| `packaging_legs` | convert | Reconcile each component/cohort/state: opening + gross receipt + internal inward = gross dispatch + returnout + waste + internal outward + closing + measured loss. Separate purchased first receipt, non-purchased first external receipt and evidenced external return; internal legs cancel only on aggregation. Do not net physical transport legs or count whole-container manufacture and the same component manufacture twice. | cp_packaging; cp_campaign; cp_residue | complete component stocks, custody, first-receipt and provider attribution |  |
| `transport_basis` | convert | For a provider with native tkm, physical service = actual loaded kg / 1000 * actual km for each leg; integrate a rate over its actual time only once. Convert original units and provider scope before causal attribution, then divide A by Q once. Preserve empty-return activity in its actual service or vehicle basis; do not invent cargo for an empty leg. | cp_transport; cp_campaign; cp_output | actual transport service and attributable amount per 1 kg reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_supplier | cb_reel; cb_sheet_output | Traceable reel and finished states; upstream includes actual coating, without substitution by uncoated or ordinary copy paper. | supplier declaration and upstream compatibility |
| dq_time | all inventory rows | One site and period for inventory, output, stocks and burden attribution; cover downtime, rejects, changeovers and auxiliaries. | complete primary campaign records |
| dq_completeness | all inventory rows | Unknown formulation, emissions or supplier basis are unresolved, not zero. Unmeasured carbon forms do not establish zero biogenic CO2; if a later route introduces combustion or degradation, add actual biogenic/fossil CO2 species rows and carbon balance and retain the complete LCI. | route audit, mass/water/carbon reconciliation |
| dq_stock_provider | all inventory rows | Each actual whole CB reel includes paper plus actual capsule wall, encapsulated liquid, binder and other existing coating once in its manufacturing provider. Component chemistry/analysis is a subledger, not another manufacture exchange. Unknown composition, density, water/solids, species/phase, retention, yield, price or provider scope requires actual evidence; pure paper, wood or polymer does not stand for the whole coated output. Finished-product components in raw/WIP/FG and all physical losses remain in stocks and net-mass checks. | supplier whole-product coverage, formulation/SDS or analysis, stage stocks, actual rates/units and provider exchange ledger |
| dq_packaging | convert | Document every first external packaging receipt and actual outward/return/waste leg, ownership and purchase inclusion independently. Resolve unknown prior vectors and provider coverage before dataset completion; absent separate component invoice is not absence of purchase. | cp_packaging reconciliation and cp_transport gross-leg evidence |

Preserve separate unallocated water and carbon ledgers: measured water in inputs, accepted sheets, trim, captured dust, air particles and stocks; supplier or actual analytical total carbon and biogenic/fossil origin for each stream. Disclose residuals from unknown coating-carbon composition and unmeasured releases, without imposing a pure-cellulose carbon fraction. Screen species potentially released by coating damage against actual SDS, formulation disclosure and sampling; add an atomic row for each established released species. Missing evidence cannot establish zero release.

Screen actual natural moisture exchange between dry paper and ambient air and electrically controlled-room humidity equipment: use measured H2O in paper/residues/stocks and matched inlet/outlet air humidity to establish process net desorption, uptake or captured condensate. Do not presume positive evaporation from dry cutting or zero water exchange because no wet washing occurs. Every established environmental H2O release/uptake or supplied/recovered/exported stream needs a separately verified physical identity, medium and native unit before adding its atomic row. Background air humidity is not process release and condensate is not negative water-vapour emission; this screening does not expand into thermal drying/wet washing.

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | reference product | Reject CF, CFB, SC, carbon-transfer, bulk reel, printed or bound-form datasets under this method. Require actual sheet dimensions, non-bulk classification evidence, CB grade and supplier-specific performance; reference identity must be verified. | koehler-reacto-cb; koehler-reacto-practical |
| `validate_measurement` | all inventory rows | Exactly one product output is the 1 kg reference. Require the same D across collection and calculations in both languages. Check net mass, packaging exclusion, separate moisture bases and energy conversion. |  |
| `validate_environment` | convert | Require disjoint PM fractions and receiver-qualified waste identities; do not count collector dust as air release. Source measurements must establish outdoor-air boundary escape; missing sampling is incomplete evidence, not passed validation. Any unexpected wet or combustion route requires boundary and atomic-row reassessment. | jrc-paper-bref-2015 |
| `validate_quality` | convert | Check capsule damage, grade, orientation and copy-quality acceptance without transferring producer blade angles, relative humidity or service-life figures into generic LCI defaults. UUID support establishes identity only; separately verify provider, quantity basis and background boundary. | koehler-reacto-practical |
| `validate_campaign` | convert | Verify Q first-release uniqueness, closing FG inclusion, all stock states and physical legs, inherited per-flow vectors, actual incremental cause and failed/idle burdens. Require actual provider coverage once for each whole article and each separately supplied exchange; component analyses do not duplicate whole manufacturing. Unresolved additional ordinary inputs are specific data obligations; they do not establish a different physical branch or justify a false reference identity. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground production dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | After identity, foreground collection and review, modelling same-grade small-format CB conversion with declared upstream links |
| excluded_use | No substitution for pulping, coating production or complete printed/glued forms; no cross-grade functional equivalence; the broad identity does not establish CB supplier or background compatibility |
| required_metadata | Grade, coating side, size criterion, net-mass/moisture basis, packaging, site/period, suppliers/transport, UUIDs and background bases |
| required_quality_disclosure | Measurement coverage, unresolved identities and quantities, size sampling, allocation and separate physical ledger, non-bulk classification evidence |
| update_trigger | Coating grade/route change; terminal conversion added; supplier/voltage/packaging/recovery changes; new sampling or identity correction |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| koehler-reacto-cb | handbook | Koehler reacto® CB, dated official website snapshot: https://www.koehlerpaper.com/en/products/Carbonless-paper/Top-sheet-reacto-CB.php | Back microcapsules and reel/sheet state; no recipe or LCI quantity |
| koehler-reacto-practical | handbook | Koehler reacto® Practical notes, 11.25, PDF page 2, Cutting: https://www.koehlerpaper.com/media/docs/en/product-information/reacto/reacto_Verarbeitungshinweise_GB.pdf | Product-specific pressure-sensitive cutting; angle/stack/relative-humidity/life figures not generic quantities |
| jrc-paper-bref-2015 | official_guidance | JRC Production of Pulp, Paper and Board BREF, 2015, section 7.1.10, printed page 670 / PDF page 708: https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf | General cutting/wrapping, energy, trim and dust screening; no presumed converter broke recycling or emission factors |
| eu-pef-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5, PDF pages 63–64: https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | Subdivision/system expansion and justified physical/other-relationship allocation hierarchy; no full PEF-compliance claim |
| un-cpc-3-2025 | official_guidance | UNSD, CPC3.0 Explanatory Notes,30June2025, printed147, subclass32191; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | The official non-bulk copying-paper category is defined through HS2022 heading4816. Actual dimensions/form and current frozen-edition eligibility remain mandatory evidence, not an inference from the generic native coated-paper name. |
