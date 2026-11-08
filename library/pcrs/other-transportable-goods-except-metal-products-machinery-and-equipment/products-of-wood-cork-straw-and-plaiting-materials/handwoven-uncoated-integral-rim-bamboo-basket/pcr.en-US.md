---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.handwoven-uncoated-integral-rim-bamboo-basket
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Handwoven uncoated integral-rim bamboo baskets

## 1. Scope and Applicability

This rule covers complete handleless uncoated bamboo baskets handwoven from purchased prepared green bamboo strips and first accepted after ambient conditioning. The body and rim are bamboo; the rim continues the main basket strips. A rattan-lashed rim is not reinterpreted as bamboo. Confirm the all-bamboo construction and absence of adhesives, hardware, liners, dyes, bleach and preservatives from the actual BOM, photographs and supplier treatment records. The received green strips undergo profiling, optional clean-water dampening, weaving and ambient conditioning; disclose actual pre-purchase treatment rather than infer untreated status from the word green.

Integrated rims and uncoated construction are supported by `mlit-bamboo-finishing-2020`; strip preparation and three-dimensional weaving by `unido-woven-bamboo-2008`. These describe feasible construction, not universal basket recipes. Complete-basket measurement by net bamboo-element geometric volume is an explicit methodological extension of `liang-bamboo-geometry-2026` and `phongphinittana-woven-bamboo-2025`, not a published basket-volume test standard.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.handwoven-uncoated-integral-rim-bamboo-basket |
| classification_refs | CPC 3.0 31923; narrower |
| covered_products | Actual verified all-bamboo handleless uncoated accepted baskets with integral woven rims |
| excluded_products | Rattan, willow, grass and palm goods; liners, coatings, adhesives, hardware, handles and separately lashed rims; panels, mats and raw culms; chemical treatment, onsite heated processing, combustion or resin curing routes |
| representative_product | Integral-rim bamboo basket for non-food storage, with study-declared species, shape and specification |
| production_route | Purchased green strips → profiling → optional clean-water dampening → handweaving with continuous rim → ambient conditioning → first acceptance |
| market_state | Unpackaged complete accepted product at factory gate; contents excluded |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide complete bamboo baskets of declared geometry and weaving quality for non-food storage |
| How much | 1 m3 accepted complete-basket output on the net bamboo-element geometric-volume basis of sections 4 and 8, potentially comprising many baskets |
| How well | Actual integral rim, complete shape and declared defect acceptance; support any load/capacity claims with specification and tests, without a default |
| How long or cycle | One first-acceptance manufacturing gate; no default lifetime, reuse cycles or plastic-basket equivalence |
| reference_flow_link | basket_output |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Bamboo, Rattan, Palm, and Grass Products `ab01bb2e-f55c-4ce6-9355-7c86f8a55576` |
| Reference flow property | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` |
| Reference unit group | Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` |
| Reference unit | m3 |
| Required qualifiers | Whole-basket identity; bamboo species, supplier treatment, actual BOM; integral rim and no handles; variant/specification; site, period and acceptance rules; moisture condition and conditioning endpoint; net bamboo-element geometric-volume definition, measurement and uncertainty; sampling, first-acceptance cohort, upstream and waste fate |

Record required qualifiers in dataset metadata, process notes, reference-flow comments or equivalent fields; omission makes that data-package reference incomplete. Volume quantifies the whole finished product, without replacing it with raw bamboo or requiring a single enormous basket.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| element_volume | reference product | Volume | m3 | Measure net geometric volume inside the geometric boundaries of every bamboo element in complete baskets, including natural microscopic cellular porosity and excluding basket cavity, macroscopic weave gaps and external envelope. This is not pore-free cell-wall or skeletal volume; use cp_geometry. Sources: liang-bamboo-geometry-2026; phongphinittana-woven-bamboo-2025. |
| geometry_method | reference product | Volume | m3 | Measure actual curved centroid-path length and cross-section areas at low contact force for the actual variant. Length × width × thickness is allowed only for demonstrated uniform rectangular sections; otherwise integrate along the actual path with station refinement or validated 3D geometry. Count each element once and never subtract projected crossings. Sources: liang-bamboo-geometry-2026; phongphinittana-woven-bamboo-2025. |
| same_denominator | all inventory rows | Volume | m3 | Normalize every final exchange once by the same positive first-accepted whole-basket net element volume Q_V. Physical mass, dry matter, carbon, water and energy ledgers retain their original units. Basket volumes require measurement or a validated actual-variant sample estimate; no default density or universal volume per basket. |
| energy_units | electricity | Net calorific value | MJ | Convert actual metered kWh only by 1 kWh = 3.6 MJ; electricity neither determines bamboo volume nor establishes a background provider. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased prepared green bamboo strips, uncoated, unglued and unpreserved, with actual moisture records |
| starting_condition_role | Production split and upstream interface, not exemption of bamboo cultivation, harvest, strip preparation and transport burdens |
| product_classification_scope | Only the narrower 31923 finished-product scope; green strips are a different-stage input |
| recursive_input_rule | Purchased same-category finished baskets cannot masquerade as new output; rework retains the original cohort and burdens, with no recount of a basket. |
| upstream_dataset_requirement | Verify species, green state, treatment, gate, transport and reference-quantity compatibility; unknown supplier data remain a gap, not zero. |
| disclosure | Disclose foreground boundary separately from upstream coverage, unresolved exchanges, allocation, opening/closing stock and uncertainty |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | foreground_dataset | Include strip receipt and profiling, weaving/integral rim, ambient conditioning, inspection, rejects, rework, attributable utilities, water, incoming transport and actual waste treatment. UNIDO describes alternative chemical finishes; they are excluded by this deliberately narrower admission scope, not assumed absent industry-wide. Sources: unido-woven-bamboo-2008; mlit-bamboo-finishing-2020. | mlit-bamboo-finishing-2020; unido-woven-bamboo-2008 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_extend | foreground_dataset | The unpackaged gate excludes transport packaging and downstream distribution/use/end-of-life of the basket; it does not exempt inbound packaging waste. Declare capital/tools, maintenance and ancillary coverage. Any actual additional material, fuel, emission, inbound packaging component or transport service requires a separate atomic exchange and compatible evidence before dataset completeness is claimed; do not force it into the bamboo row. |  |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_provider | foreground_dataset | A generic product UUID is not a verified provider. Link whole-basket output only to a provider using the same construction, gate, moisture and net bamboo-element geometric volume, or a measured compatible conversion. Capacity, envelope, skeletal or unknown volume cannot match by UUID alone. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| basket_manufacture | Green-strip profiling, handweaving integral rim, ambient conditioning and first acceptance | required | Actual production within this scope | foreground | basket_output |

Record operations in physical order and attribute them by work order; the rows below are external exchanges of the integrated plant process. Internal stage transfers are not new product inputs or outputs.

### Process: Bamboo basket manufacture (`basket_manufacture`)

#### Inputs

##### Product flows

###### Green bamboo strip input (`green_strips`)

Measure this exchange separately using actual work orders, records and physical state.

- Selected flow: Prepared green bamboo slats and strips `c9008e6c-9bdf-49af-baf9-cdb134034396`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record net issued strip mass and moisture, including trimming losses and reject burdens attributable to first-accepted output; use the attributed normalized result of cp_activity.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculation (`calculated_from_collection`)
- Collection protocol: cp_activity
- Sources: `unido-woven-bamboo-2008`; `mlit-bamboo-finishing-2020`

###### Dampening water supply (`tap_water`)

Measure this exchange separately using actual work orders, records and physical state.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Include only actual clean-water dampening; meter supplied mass and record reuse, drainage and evaporation, without multiplying basket volume by water density. Use cp_water.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculation (`calculated_from_collection`)
- Collection protocol: cp_water
- Sources: `unido-woven-bamboo-2008`; `mlit-bamboo-finishing-2020`

###### Site electricity (`electricity`)

Measure this exchange separately using actual work orders, records and physical state.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Only actual <1 kV grid-average consumption electricity at user; record attributable lighting, equipment and conditioning services from actual meters, converted and normalized in cp_activity. Handweaving alone does not prove zero utility use.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculation (`calculated_from_collection`)
- Collection protocol: cp_activity
- Sources: `unido-woven-bamboo-2008`; `mlit-bamboo-finishing-2020`

#### Outputs

##### Product flows

###### First-accepted complete bamboo basket output (`basket_output`)

The whole finished product crosses the first-acceptance gate on the declared geometric basis, using cp_geometry and cp_acceptance.

- Selected flow: Bamboo, Rattan, Palm, and Grass Products `ab01bb2e-f55c-4ce6-9355-7c86f8a55576`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: 1 m3
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculation (`calculated_from_collection`)
- Collection protocol: cp_acceptance
- Sources: `unido-woven-bamboo-2008`; `mlit-bamboo-finishing-2020`; `liang-bamboo-geometry-2026`; `phongphinittana-woven-bamboo-2025`

##### Waste flows

###### Bamboo trimming offcut (`bamboo_offcut`)

Measure this exchange separately using actual work orders, records and physical state.

- Selected flow: Uncoated unpreserved bamboo trimming offcut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_activity to weigh actual non-agglomerated offcuts leaving the process, recording moisture, form and receiver; internal reuse is not external waste or an avoided-burden credit.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculation (`calculated_from_collection`)
- Collection protocol: cp_activity
- Sources: `unido-woven-bamboo-2008`; `mlit-bamboo-finishing-2020`

###### Unrecoverable basket reject (`basket_reject`)

Measure this exchange separately using actual work orders, records and physical state.

- Selected flow: Uncoated all-bamboo basket reject
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_activity to record final unrecoverable reject net mass, pre/post-first-acceptance status and actual treatment. Pre-acceptance rejects never enter Q_V; post-acceptance discard retains its original Q_V and is a separate original-cohort waste/service correction, never a cancellation or second acceptance.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculation (`calculated_from_collection`)
- Collection protocol: cp_activity
- Sources: `unido-woven-bamboo-2008`; `mlit-bamboo-finishing-2020`

###### Dampening effluent (`dampening_effluent`)

Measure this exchange separately using actual work orders, records and physical state.

- Selected flow: Chemical-additive-free bamboo dampening wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Include only actual drainage; cp_water measures discharged mass, pollutant concentrations and treatment receiver; reused water is not counted again as fresh intake. Add substance-specific emissions for actual foreground treatment.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculation (`calculated_from_collection`)
- Collection protocol: cp_water
- Sources: `unido-woven-bamboo-2008`; `mlit-bamboo-finishing-2020`

##### Elementary flows

###### Ambient conditioning water evaporation (`evaporated_water`)

Measure this exchange separately using actual work orders, records and physical state.

- Selected flow: Water vapour, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the measured water balance in cp_water for net evaporation; distinguish incoming strip water, added water, atmospheric sorption, drainage and stock, without treating unverified total mass loss as water.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculation (`calculated_from_collection`)
- Collection protocol: cp_water
- Sources: `unido-woven-bamboo-2008`; `mlit-bamboo-finishing-2020`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_cause | foreground_dataset | Avoid allocation by metering work orders/operations. For shared lighting, dampening or equipment, use a documented physical causal driver such as metered machine time or occupied conditioning service, with period totals reconciled. Do not use nominal basket counts across unlike variants or assume mass and volume are interchangeable. This is a foreground collection rule, not an empirical universal allocation coefficient. | ilcd-general-2010 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_reject | foreground_dataset | No default co-product revenue, substitution credit or negative waste input. Internal reused offcuts retain inherited burdens and are not fresh purchases. External sale as a genuine co-product requires evidence of product quality, function, receiving market and documented subdivision/allocation before the dataset can be complete. Failed baskets/rework remain attached to their originating cohort. | ilcd-general-2010 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_geometry | basket_manufacture | basket_output | measurement | basket id; variant; species; unique components; completeness; moisture; conditioning endpoint; curved path and section profiles; calibration; sampling probabilities; uncertainty | Execute geometry_complete, geometry_disassembly, geometry_integrate and geometry_sample below; retain actual method, instrument force, repeatability and validation. | m3 | Each variant/production lot and change | Same acceptance period | Actual site/variant | per reference flow | Whole-basket photographs, component ledger, raw geometry, calibration, moisture, sampling and uncertainty propagation |
| cp_acceptance | basket_manufacture | basket_output | records | work order; unique basket id; first acceptance time; new dispatch; new closing finished stock; opening finished stock; returns; rework; variant volume | Determine positive Q_V from first acceptance by basket or validated lot records; remove opening finished goods from dispatch and include newly accepted closing stock once. | m3 | Each first acceptance and period reconciliation | Declared period with carryover trace | Site and original cohort | per reference flow | Acceptance, dispatch, stock and no-recount trail |
| cp_activity | basket_manufacture | green_strips; electricity; bamboo_offcut; basket_reject | records | raw amount for each atomic exchange; units; moisture; work order/cohort; raw/WIP/FG opening/closing; inherited burden vectors; prior normalization basis | Weigh net materials and wastes, read electricity meters, attribute work orders, retain inherited vectors, and produce per-reference results through cohort_balance and normalize_volume below. | kg; MJ | Each lot/meter period | Same period with original-cohort trace | Actual plant and supply-chain interface | per reference flow | Scale/meter calibration, supplier records, allocation drivers and vector reconciliation |
| cp_water | basket_manufacture | tap_water; dampening_effluent; evaporated_water | measurement | supply mass; strip/WIP/FG moisture; atmospheric sorption; discharge; reuse; water stock change; concentration; receiver | Measure actual supply/discharge and moisture, separate dry-matter and water balances and resolve closure uncertainty; density conversion needs evidence for the actual temperature/quality. Normalize attributable quantities by the same Q_V. | kg | Each lot and period closure | Consistent cohort and period | Plant and discharge receiver | per reference flow | Instruments, wet/dry basis, moisture samples, balance residual and uncertainty |

- `geometry_complete`: Measure representative complete quality-accepted baskets of each actual variant/lot at the declared moisture and conditioning endpoint. Photograph and enumerate every unique bamboo element, including all integral rim continuations; exclude contents and packaging. Retain a whole-basket completeness ledger. Dedicated sacrificial metrology baskets must conform to the product quality before measurement but are not deliverable first-accepted output: exclude them from Q_V and assign their preparation/testing burdens to the production cohort. Keep their IDs and sample fate separate from new dispatch and closing FG. Sources: mlit-bamboo-finishing-2020; liang-bamboo-geometry-2026.

- `geometry_disassembly`: Sacrificial disassembly is allowed only with complete recovery and negligible or quantitatively bounded changes in moisture, springback, compression recovery, path geometry and dimensions relative to the accepted basket. Before/after measurements and mass recovery aid loss checks; mass recovery alone does not prove geometric recovery. Missing pieces, cutting loss, unbounded dimensional change or contact compression make the quantity inconclusive; do not fill gaps with nominal density.

- `geometry_integrate`: For each unique element p use actual centroid-path coordinate s and measured section area A_p(s). V_p = integral A_p(s) ds. Only demonstrated uniform rectangular elements may use V_p = L_p*w_p*t_p. Refine section stations and path measurements or validate a 3D method until discretization and shape uncertainty are resolved for the actual object. V_j = sum_p V_p for basket j. Woven crossings are not duplicated components and do not justify subtracting projected overlap. This is an author extension of measured strip geometry and observed curved weave, not the mechanical model or a basket test standard. Sources: liang-bamboo-geometry-2026; phongphinittana-woven-bamboo-2025.

- `geometry_sample`: Directly sum measured accepted basket volumes, or estimate each variant/lot from representative actual accepted baskets with declared selection probabilities, accepted counts and uncertainty. A validated study-specific count-to-volume calibration is permitted; universal basket volume, raw-strip purchase volume, density tables, nominal envelope dimensions and basket capacity are not accepted substitutes. Report coverage, between-basket variability, instrument, section/path, completeness, disassembly and moisture uncertainty; define study fitness criteria before claiming a resolved quantity. No sample count or tolerance is prescribed without evidence.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| accepted_volume | basket_output | Q_V = sum of new first-accepted basket volumes; alternatively sum_h N_h*vbar_h for validated actual variant/lot strata, with sampling uncertainty. | cp_geometry; cp_acceptance | Q_V | liang-bamboo-geometry-2026; phongphinittana-woven-bamboo-2025 |
| first_acceptance | basket_output | Q_V equals new first-accepted dispatch plus new first-accepted closing FG on the same geometric basis, excluding opening FG, purchased finished baskets, returns, retests and already-counted rework. Unique first-acceptance IDs prevent double counting. | cp_acceptance | Q_V |  |
| cohort_balance | all inventory rows | For exchange vector B keep original units: B_open_raw + B_open_WIP + B_open_FG + B_added = B_dispatched + B_close_raw + B_close_WIP + B_close_FG + B_other, each physical cohort counted once. B_dispatched denotes burdens on physical dispatch including opening FG; B_other is the separately attributed burden vector of other documented output/service cohorts; it cannot be an unexplained balancing residual or remove pre-acceptance loss burdens already charged to accepted production. This is only stock-location reconciliation. The distinct first-acceptance projection excludes opening FG dispatch and includes newly accepted closing FG once. Unresolved vectors remain debt. | cp_activity; cp_acceptance | reconciled original-unit cohort vectors |  |
| normalize_volume | all inventory rows | For each exchange i, I_i = B_i / Q_V, using its full attributable first-acceptance-cohort burden B_i and positive Q_V; the reference output is 1 m3. For an old service intensity H_i per m3, recover B_old_i = H_i * Q_V_original using the original accepted-cohort volume of that service; never multiply it by the current period denominator or divide a normalized intensity again. Transfer the resulting raw vector once to its original cohort. Later actual service B_service,c on old accepted output is a separate correction B_service,c / Q_V_original,c, with no new accepted output. Do not add old accepted production or services to a new-cohort numerator; selective subcohorts require evidenced attribution and matching original volume. For Q_V = 0 retain raw amounts and unresolved cohort state; do not divide or publish a complete normalized dataset. | cp_activity; cp_water; cp_geometry; cp_acceptance | I_i per reference flow |  |

- `cohort_projection`: Reconcile stock locations and first-acceptance accounting separately. For a newly first-accepted basket, include all inherited raw/WIP burdens plus current services, including its allocable pre-acceptance rejects, whether it is dispatched or remains in closing FG. Exclude opening FG burdens and volumes from new first-acceptance output. Opening WIP later accepted carries its actual inherited vector into the new accepted cohort. Carry unfinished raw/WIP burdens forward; returns/retests after first acceptance do not create new acceptance volume. Preserve post-acceptance repair as a distinct disclosed service. Physical water/dry-matter/carbon balances remain separate from burden vectors.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Check physical identity, moisture/treatment, gate, units and provider; blank UUID is not a zero exchange. | Direct identities, supplier, actual BOM and fate records |
| dq_geometry | basket_output | Provide a feasible bounded geometry and sampling procedure for actual complete baskets; disclose pore convention, unrecovered geometry and capacity differences. | cp_geometry raw measurements, validation and uncertainty |
| dq_completeness | all inventory rows | Reconcile plant-period totals and cohort vectors; record each actual material, emission and waste separately, without zeroing background gaps. | Bills, meters, original-unit physical balances, vector reconciliations and gap list |
| dq_limits | all inventory rows | Report year, geography, variant, sample applicability, technological representativeness and independent review state; do not turn one factory into an industry range. | Dataset quality disclosure and review records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_admission | foreground_dataset | Reject application when actual basket construction, supplier treatment, handleless integral rim or uncoated all-bamboo BOM is unverified or incompatible. A source showing rattan binding, lacquer, glue or hardware cannot validate this route. Sources: mlit-bamboo-finishing-2020; unido-woven-bamboo-2008. | mlit-bamboo-finishing-2020; unido-woven-bamboo-2008 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_quantity | foreground_dataset | Require Q_V > 0, unique first-acceptance records, complete-element geometric volume and bounded uncertainty. Reject capacity/envelope/skeletal proxies, projected chords, nominal uniform strips without evidence, duplicated components, projected-crossing subtraction and mass-only disassembly recovery. Immersion of porous bamboo without validated absorption, air and swelling control is not an automatic alternative. ISO 22157 culm-specimen testing is not claimed as basket testing. |  |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_accounting | foreground_dataset | Require every final inventory basis and linked protocol aggregation to use the same reference flow. Check material, water and burden ledgers separately, opening FG exclusion, new closing FG inclusion once, inherited WIP/raw vectors and original denominators for old services. Unresolved geometry, missing inherited vectors, Q_V = 0 or incompatible providers makes the affected dataset incomplete. A declared-basis checker cannot establish scientific approval or a measured factory result. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Factory-gate manufacturing foreground; separately disclose matched upstream coverage |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Basket production modelling with matching actual construction, state, gate and net bamboo-element volume |
| excluded_use | Capacity-storage service, functional equivalence comparison, generic industry baskets, rattan/willow baskets, lifetime or methodology-approval claims |
| required_metadata | All required qualifiers, original-unit ledgers, cohorts, Q_V, variant sampling and source/provider compatibility |
| required_quality_disclosure | Missing identity/providers, geometry and sampling uncertainty, disassembly effects, stock traceability, allocation and independent review state |
| update_trigger | Reassess changes in construction, species, supplier treatment, route, measurement, sampling, acceptance basis, electricity or waste fate |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| mlit-bamboo-finishing-2020 | official_guidance | Japan Tourism Agency / MLIT, Bamboo Finishing Techniques, FY2020, p.1, Basket rims and Coatings. https://www.mlit.go.jp/tagengo-db/common/001565623.pdf | Integral rim continuation and uncoated construction; contrary rattan, tack and coating alternatives; no universal BOM. |
| unido-woven-bamboo-2008 | official_guidance | UNIDO / INBAR, Three Dimensional Woven Bamboo Products, 2008, printed pp.1–5,20–24. https://www.unido.org/publications/ot/9656608/pdf | Whole baskets, strip preparation, weaving and finishing; no chemical recipe, dimensions or industry factors adopted. |
| liang-bamboo-geometry-2026 | literature | Liang, Jiang and Tan, Effects of Heat Treatment on the Mechanical Properties and Thermal Stability of Bamboo, Polymers 18 (2026) 2098, §2.2 p.3. https://doi.org/10.3390/polym18172098 | Direct dimensional geometric-volume principle for conditioned regular rectangular strips; not a basket standard, density or heat-treatment default. |
| phongphinittana-woven-bamboo-2025 | literature | Phongphinittana, Klangtup and Jearanaisilawong, Mechanical Properties of Asymmetric Woven Bamboo Structure from Bamboo Strips, Fibers 13 (2025) 18, pp.3–5, Fig.3. https://doi.org/10.3390/fib13020018 | Curved warp, comparatively straight weft and inter-strip gaps support actual paths and element-volume definition; no specimen mechanical model, species, dimensions or gap values transferred. |
| ilcd-general-2010 | official_guidance | European Commission JRC, ILCD Handbook—General guide for LCA—Detailed guidance, March2010, §§7.9.2–7.9.3; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional subdivision and determining physical causality; actual work-order/shared-service and stock protocols are disclosed operational deductions, not factory shares or a basket-volume standard. |
