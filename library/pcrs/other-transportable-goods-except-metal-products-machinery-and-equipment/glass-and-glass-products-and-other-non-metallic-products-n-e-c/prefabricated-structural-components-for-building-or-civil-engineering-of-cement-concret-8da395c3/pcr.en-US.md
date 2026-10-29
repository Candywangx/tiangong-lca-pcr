---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.prefabricated-structural-components-for-building-or-civil-engineering-of-cement-concret-8da395c3
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Non-prestressed solid reinforced-concrete structural wall panels

## 1. Scope and Applicability

This PCR addresses LCA data production for whole, uninstalled, factory wet-cast non-prestressed solid normal-weight reinforced-concrete structural wall panels, with uncoated tied steel reinforcement and actual cast-in inserts, without an insulation core, decorative facing, prestressing or installation. It is a narrower technical category within CPC3.0:37550, not coverage of every cement/concrete/artificial-stone structural component. The manufacturer and governing design/QC establish the actual structural terminal. This PCR supplies collection and modelling rules, not structural design or certification. Qualitative technical synthesis combines independent NPCA QC and Elematic product/manufacturing sources; it does not claim that all cited operations describe one factory/SKU/order.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.prefabricated-structural-components-for-building-or-civil-engineering-of-cement-concret-8da395c3 |
| classification_refs | CPC 3.0 37550; narrower; current accepted association and decision: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADR; no whole-leaf or scientific/translation approval implied |
| covered_products | Whole non-prestressed solid steel-reinforced concrete structural building wall panels with actual embedded articles |
| excluded_products | Bare concrete mix; unreinforced blocks; beams/columns/slabs; prestressed panels; insulated sandwich/double-wall shells requiring site concreting; lightweight/foamed concrete; coated/faced assemblies; artificial-stone products; steel structures; installed wall/building systems |
| representative_product | Uninstalled solid normal-weight tied-rebar concrete structural wall panel with actual lifting/connection inserts |
| production_route | Raw receipt; batching/mixing; tied reinforcement; mould preparation; placing/compaction; actual curing; demould/finish; actual tests and first release |
| market_state | First-quality-released uninstalled whole panel at the manufacturer gate; actual postrelease services reported with horizon |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the declared whole structural wall-panel product for its documented building use |
| How much | 1 kg net whole first-quality-released panel |
| How well | Actual manufacturer/governing specification and approved drawing; traceable reinforcement/inserts; required tests/inspection and acceptance, without an invented strength or load rating |
| How long or cycle | One manufacture-to-first-release cycle; actual curing age and moisture declared; no assumed structural life. Observed subsequent services retain original cohort and horizon. |
| reference_flow_link | finished_panel |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Precast reinforced-concrete wall panel `a0e1fb4c-59ae-4df9-84bf-3a8adb37748a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | manufacturer/site and observed period; approved drawing and whole-panel configuration; structural function and governing specification; non-prestressed tied steel reinforcement and cast-in insert inventory; solid normal-weight concrete without insulation or facing; actual cement/aggregate/admixture supply states and formulation ownership; net whole-panel mass and moisture/age at first release; actual curing route and complete multi-cohort WIP vector; governing inspections/tests and first-release identifiers; permitted repair/postwork tests and disposition; packaging/asset stocks and supplier-included ingress ownership; energy/carrier/condensate state and upstream owner; original cohortQ_o and postrelease service horizon; unresolved identities/providers and uncertainty |

Every qualifier must be declared in dataset metadata, process notes, reference comment or equivalent complete context. Only a whole factory-prefabricated steel-reinforced concrete wall panel for building structural/enclosure use; production mix at plant; prefabrication. Scope narrows this family to non-prestressed solid structural panels without insulation or installed-system work. No beam, bare concrete mix, unreinforced block, prestressed product or on-site installation is represented. No fixed grade, dimensions, geography, service life or performance certification is supplied by this identity.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| m_reference | finished_panel | Mass | kg | Measure each whole net panel with calibrated scale/traceable same-configuration weighing at the first release state, including steel/inserts and actual water; exclude packaging. Q is the sum of newly first-released mass, not dispatch or finished-stock movement. |
| m_conversions | all inventory rows | native extensive property | row-specific | Keep each exchange native Mass/kg, energy/MJ or actual Volume/m3. kWh*3.6=MJ once. Real rates integrate over time; integrated volume does not multiply by time again. Density is independently measured for the actual substance/state. Count/item-to-mass uses the measured net mass of the actual counted exchange in the same configuration (whole-panel mass only for panels), with calibration, state/composition and relevant moisture/age records. Never use a panel weight for moulds, equipment, parts or packaging, or a default/secondary coefficient. If area/volume is additionally disclosed use measured/drawing-specific true geometry; L*W only for a proven rectangle; no bounding-box/double-face area or inferred density. |
| m_once | all inventory rows | native extensive property | row-specific | Collect unnormalized raw records. calc_raw and calc_attribute prepare A_i with no product division. Apply calc_reference once to obtain per-reference amounts. Cards/protocol aggregation refer to that same calculation; they never divide it again. Q_i=0 retains records with no per-unit result. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual separately supplied raw cement/fine sand/coarse gravel/liquid water/rebar/inserts and each real formulation; not a bought finished panel |
| starting_condition_role | foreground_start |
| product_classification_scope | CPC3.0:37550; narrower non-prestressed solid reinforced structural wall panel |
| recursive_input_rule | No same-category purchased finished panel substitution; a returned original panel is traced to its original release cohort and actual incremental work |
| upstream_dataset_requirement | Compatible supply-form/provider production and actual transport once per input; inherited formulation/packaging/material/water/energy owner explicit; no absent provider treated as zero |
| disclosure | Factory/configuration/cohort/time; actual route/condition/stock; postrelease service horizon; exclusions/uncertainty; independent physical and burden gates |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_full | all processes | Collect the complete raw-to-first-release route: receipt and moisture stocks; approved mix batching/mixing; tied reinforcement and inserts; mould cleaning/release/shuttering; placing/compaction; actual curing; demoulding; finishing; actual repairs, including unapproved/failed/rejected work; tests/inspection and first quality release. Keep upstream production and actual inbound transport once per supplied material. Do not replace this route by purchased finished-panel repacking. Collect every actually incurred input, water, energy, loss, waste and burden from unauthorized/unapproved, failed or rejected work as well as authorized work. Permission, configuration-specific postwork tests and acceptance govern authorization, continuing qualification and actual hold/rejection/waste disposition only; they never erase actual flows or loads, create a new Q, or presume restoration. Before first release retain manufacture Q; after release retain the original cohort Q_o and actual observed horizon H. Natural storage/handling humidity needs no work permission. | npca-qc-2026;elematic-wall-route |
| b_modes | all processes | Keep every start/stop, failed test, rejected batch, specimen, idle, clean-up, spill and rework event, including zero-output periods. Add each actual ingredient, complete formulation, process aid, fuel, refrigerant, asset, packaging material, waste and true emitted species as a separate atomic row if not listed. Conditional absence requires evidence; unknown is not zero. | npca-qc-2026;elematic-wall-route |
| b_cohorts | p_mix; p_form; p_cure; p_release | Track each long-curing cohort and opening/closing raw/WIP stock with per-exchange inherited burden vectors, configuration, age, moisture and actual completed steps. Released closingFG is already inQ; manufacturing B_close excludes that FG. No delivery, reinspection, return or any actual postrelease work produces newQ. Q=0 retains all actual burden and stock/disposition records without a unit result. Collect every actually incurred input, water, energy, loss, waste and burden from unauthorized/unapproved, failed or rejected work as well as authorized work. Permission, configuration-specific postwork tests and acceptance govern authorization, continuing qualification and actual hold/rejection/waste disposition only; they never erase actual flows or loads, create a new Q, or presume restoration. Before first release retain manufacture Q; after release retain the original cohort Q_o and actual observed horizon H. Natural storage/handling humidity needs no work permission. | npca-qc-2026;ilcd-attributional-2010 |
| b_physical | all physical gates | For each physical gate reconcile opening full wet stock + all actual gross external inflows = closing full wet stock + all actual gross external outflows, with independently measured reaction/phase changes and element balances. Manufacturing first-released product crosses once; combining manufacturing and FG-service gates cancels internal releaseQ and internal transfers. In the FG gate use openingFG+first releases+actual returns+actual postwork additions = closingFG+gross shipments+rejects+actual water/gas/material losses. Do not assume returned wet mass equals original dispatch. Mass includes true reinforcement/inserts and water. Burden allocation never scales physical gross legs. | npca-qc-2026 |
| b_water_heat | p_cure; p_util | Hydration binds water; phase/structure-bound water, free liquid, absorbed aggregate water, vapour and condensate remain separate measured subledgers, not new purchases. Do not fit two unknowns from one residual or invent a hydration/carbonation coefficient. Actual steam/heat routes require carrierMass and thermal state/enthalpy plus supplier water/energy ownership; one complete provider is charged once. Actual condensate and heat-exchange returns are external Product returns with gross mass/state, not assumed waste or default credits. No fictitious boiler/steam route. For an actual manufacturing condensate or heat-exchange-water Product return, the ledger-only numerator is its measured full gross return quantity V_i in kg, not net water consumption or an assigned heat burden; calc_reference alone gives V_i/Q. Keep independent thermal state, every inherited vector and the single actual supplier convention; a return gives no automatic credit. Actual original-cohort postrelease returns, if present, instead retain V_i/Q_o for that observed service horizon. Gross gas-species inlet/outlet pairs serve physical reconciliation. Keep independently determined net environmental process changes, origin and medium in a separate attributable inventory; unchanged pass-through is neither new pollution/resource use nor a negative credit. Never subtract aggregate gas masses across different species, origins or phases, or charge both the gross pair and the same net change. | npca-qc-2026 |
| b_pack | all processes | For EACH packaging material reconcile opening empty+WIP-attached+FG-attached+reusable stock + P(purchased) + I(first non-purchased external ingress) + ER(external return received) + X_in(actual separate added water/material) = closing same full stocks + S(out with gross physical shipments) + EO(external return out) + W(waste) + X_out(actual separate removed water/material). Internal reuse cancels and contributes neither new purchase nor productQ nor automatic coproduct. P/I/ER/S/EO/W and repair/water X_in/X_out deduplicate only OTHER already-counted flow terms; true new material/water influx remains when retained in closing stock, and closing wet mass remains complete. P/I whole articles count included constituents once. X terms require independently measured actual absorption/loss/repair/material-change events and their specific atomic flows before dataset completion; unknown occurrence, composition or amount is not zero. Correct only overlap with other same-side incoming/outgoing flow terms, never opening/closing stocks. No repair or water change is presumed. Each packaging material has separate P/I/ER/S/EO/W direction cards, with actual water-phase events recorded once in specific or general species/utility cards. Other real added/removed packaging-repair materials require their own specific atomic cards before dataset completion and cannot hide in a scalar X; no repair or restoration is presumed. Whole wet supplied articles include their original paper/wood/metal/polymer/adhesive/coating/liner and water once as measured child accounts. Truly paid procurement (standalone or bundled)d onsite components are independent external supplies only when disjoint from the whole receipt, or reconciled through a measured component-to-assembled-article bridge with matched internal handoff cancellation and one upstream owner. Never add the complete assembled tare plus those same constituent supplies as two receipts or stocks. No component consumption, route or density is invented. If several packaging origins physically leave in one collected mixed outlet, use one qualified complete Waste exchange for that actual mixture and one actual treatment/provider record. Keep independently measured per-origin W raw accounts that conserve the total, with documented sampling/partition uncertainty; the whole total and its partition are alternatives, never additive exchanges. Existing W cards then represent non-additive origin subaccounts only, not invented separate exits. Genuinely separate outlets retain their own correct Waste identities and treatment; add/reselect an actual qualified mixed Waste only if that real outlet exists, never merely to satisfy six-leg grammar.  Apply packaging_receipt_basis to distinguish each actual P/I/ER receipt. | npca-qc-2026;ilcd-attributional-2010 |
| b_assets | p_assets | Maintain physical assets and current service burden separately for moulds, mixer, lifting/handling equipment and every actual added asset, repair part and in-installed fluid. Gross new/old acquisition, returns, repair additions/removals and retirement preserve complete wet mass and actual water/oil legs. Service vectors use actual documented production/service basis; no fixed life, machine weight, cycles or one whole machine perkg. Only unused/unassigned future service/charge may carry forward. A stock-corrected consumption series is never corrected twice. | npca-qc-2026;ilcd-attributional-2010 |
| b_service | p_service | Keep actual warehousing, protection/packaging, handling, dispatch, reinspection and actual postrelease work, including unapproved/failed/rejected work in a separate incremental service ledger linked to original cohortQ_o and observation horizon. Already performed service is never deducted because FG stays at closing. Record actual grossG shipments andR returns, original dispatch identifiers/mass, D_rev original-burden reversal only for a separately declared net-delivery ledger, added repair materials/water/losses and new incremental burden. This PCR uses first release; never import a net-delivery denominator or silently subtract R/G fromQ. Collect every actually incurred input, water, energy, loss, waste and burden from unauthorized/unapproved, failed or rejected work as well as authorized work. Permission, configuration-specific postwork tests and acceptance govern authorization, continuing qualification and actual hold/rejection/waste disposition only; they never erase actual flows or loads, create a new Q, or presume restoration. Before first release retain manufacture Q; after release retain the original cohort Q_o and actual observed horizon H. Natural storage/handling humidity needs no work permission. | npca-qc-2026;ilcd-attributional-2010 |
| packaging_receipt_basis | each packaging receipt | For every actual packaging article, classify each whole external receipt once. P is paid procurement, including paid packaging bundled with another supply without a separate invoice. I is all first non-purchased external ingress: standalone gifts, loans, rental or pool receipts and non-purchased supplier-attached packaging; supplier attachment is only an I subset. ER requires this same item or an auditable configuration-matched batch linked to this site's own prior outward record; custody or another party's use alone does not prove a return. P, I and ER are disjoint. Existing I cards and their raw protocols cover the same physical article for every such I origin; no new material, UUID or quantity is presumed. X_in/X_out remain disjoint material/water-change terms, never a substitute for whole-article receipt. Retain gross physical quantity, owner/custodian, payment or non-purchase basis, origin, prior-outward link where required, native state/unit and inherited manufacturing/service vector. Non-purchase is neither a new manufacture nor automatic zero burden: attribute actual used service and incremental transport/handling once to its proper original cohort and denominator, retaining unused service separately without a default lifetime or credit. This is the declared conserving foreground accounting implementation, not a claim that the cited source prescribes these variable names. | `ilcd-attributional-2010` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| p_mix | Material receiving and concrete batching/mixing | required | Actual observed operations; add all real sub-operations and retain failed/idle modes | foreground | Original cohortQ_o for services; manufacturingQ otherwise |
| p_form | Reinforcement/inserts and mould preparation/casting | required | Actual observed operations; add all real sub-operations and retain failed/idle modes | foreground | Original cohortQ_o for services; manufacturingQ otherwise |
| p_cure | Cohort curing | required | Actual observed operations; add all real sub-operations and retain failed/idle modes | foreground | Original cohortQ_o for services; manufacturingQ otherwise |
| p_release | Demoulding/finishing/testing and first release | required | Actual observed operations; add all real sub-operations and retain failed/idle modes | foreground | Original cohortQ_o for services; manufacturingQ otherwise |
| p_util | Manufacturing utilities/cleaning and environmental exchanges | required | Actual observed operations; add all real sub-operations and retain failed/idle modes | foreground | Original cohortQ_o for services; manufacturingQ otherwise |
| p_assets | Physical assets/repair and current service | required | Actual observed operations; add all real sub-operations and retain failed/idle modes | foreground | Original cohortQ_o for services; manufacturingQ otherwise |
| p_service | Observed post-release warehousing/packing/handling/dispatch | conditional | Actual observed operations; add all real sub-operations and retain failed/idle modes | foreground | Original cohortQ_o for services; manufacturingQ otherwise |

Each following card is one atomic exchange. The process map consolidates operations for collection without deleting any actual step. All native identity restrictions in each description apply to that card and its complete inherited context. No default numerical inventory is supplied; a listed conditional exchange must be measured when present and supported as absent when not present. Add unlisted actual exchanges atomically.

### Process: Material receiving and concrete batching/mixing (`p_mix`)

#### Inputs

##### Product flows

###### Portland cement (`cement`)

Receive finished cement and collect its actual supply form and composition. The UUID applies only to the qualified packaged52.5R case; other cement requires its own compatible member. Capture supplier packaging as physical ingress with one upstream owner. Conditional packaged finished Portland cement of strength class52.5R; native comment describes calcination of limestone/clay and packaged construction supply. Not clinker, a blended cement, arbitrary strength class or bulk supply by default. Supplier packaging ingress is weighed separately with one upstream burden owner; never add its burden if already included. TypeIII/52.5 synonyms do not establish cross-standard equivalence. Re-resolve if actual cement or supply form differs. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: Cement, portland cement `659530b9-2277-41e4-b484-c9673f4b352f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_raw_p_mix_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_raw_p_mix_kg
- Sources: npca-qc-2026

###### Washed concrete sand (`sand`)

Weigh this actual fine-aggregate fraction at received moisture; measure dry solids and free/absorbed water independently without purchasing its water again. Conditional wet-produced washed coarse/medium product sand at plant; native supply location CN-HN-CSX. Despite a broader gravel classification this is the singular product-sand fraction, not mixed sand-and-gravel or all minerals. Actual source/route, gradation and moisture must match; no general geographic provider proxy. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: Sand and gravel (product sand) `ade95caf-2a0c-4fc3-8aa9-14ac536502da`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_raw_p_mix_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_raw_p_mix_kg
- Sources: npca-qc-2026

###### Crushed concrete gravel (`gravel`)

Weigh this actual coarse-aggregate fraction and identify route and gradation. Its full wet mass and water subledger coexist. Conditional wet-process secondary cone-crushed gravel at plant, supply CN-HN-CSX. Not natural uncrushed gravel or every coarse aggregate. Verify actual route/location, size and moisture; grade and density are not supplied. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: Crushed gravel `d04cc46c-4bf3-42f7-8bfe-a5cb31faeba2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_raw_p_mix_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_raw_p_mix_kg
- Sources: npca-qc-2026

###### Liquid mixing water (`mix_water`)

Meter external liquid mixing water only, separately from moisture already in aggregates or purchased formulations. Reclaimed internal circulation cancels at the combined gate. Treated industrial process-water Product flow; supply/treatment/quality/provider unspecified. It is not an elementary withdrawal or discharge, pure reagent or default tap-water provider. Confirm mixing suitability separately; allocate each liquid water use, return and stock without duplicate recirculation or embedded formulation water. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_water_p_mix_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_water_p_mix_kg
- Sources: npca-qc-2026

###### Aqueous polycarboxylate superplasticizer formulation (`admixture`)

Conditional on actual use, including unapproved/failed/rejected batches: purchase the entire supplied formulation once. Polymer assay, dissolved solids and carrier water are composition subledgers. No dosage or recipe is prescribed. This specific atomic identity remains unbound; a compatible complete native record and provider must be confirmed before actual dataset use. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion. Collect every actually incurred input, water, energy, loss, waste and burden from unauthorized/unapproved, failed or rejected work as well as authorized work. Permission, configuration-specific postwork tests and acceptance govern authorization, continuing qualification and actual hold/rejection/waste disposition only; they never erase actual flows or loads, create a new Q, or presume restoration. Before first release retain manufacture Q; after release retain the original cohort Q_o and actual observed horizon H. Natural storage/handling humidity needs no work permission.

- Selected flow: Aqueous polycarboxylate superplasticizer formulation
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_raw_p_mix_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_raw_p_mix_kg
- Sources: npca-qc-2026

###### Kraft-paper cement supply sack (`supplier_sack`)

This P card records paid procurement of this same physical article, standalone or bundled; first non-purchased receipt and true return use I and ER instead. Conditional actual paid standalone or bundled empty whole cement sack P receipt; weigh the complete wet supplied sack. Paper, liner, coatings, adhesive and carried water are measured child composition accounts, not additional receipts or repeated purchases. Actual cement-provider-included sack ingress instead uses supplier_sack_i with its one inherited supplier burden. Whole manufactured paper-bag family, production mix at plant, admits the actual compatible kraft cement sack. Not raw kraft sheet, fruit-bagging paper or a generic packaging bundle. Verify actual construction and any liner/coating/adhesive as material subledgers without adding a second purchase or upstream burden to the whole supplied bag. No default recycled fraction, dimensions or environmental superiority claim. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion. P only: actual paid standalone or bundled empty packaging article; I/ER/S/EO/W each use their separate actual direction row, not this P. This is a conditional actual physical ledger exchange. Include it only when that specific external event actually occurs; unknown occurrence or quantity is not zero. Preserve full wet native-unit gross quantity V_i with event, gate, custody, material/state, original cohort and observation horizon, independently of every inherited/assigned burden vector. For this ledger-only display A_i is V_i, and calc_reference divides it once by the declared manufacture Q or original released cohort Q_o for actual postrelease services; never use a net shipment, economic/service share, second stock correction or original manufacture add-on to shrink/enlarge V_i. Internal transfers/reuse cancel at the combined gate and do not create external receipts or a second product Q. Whole wet P/I articles include their original water/material once; separate X only actual additional/removal events not already in other same-side flow terms, never stocks. Actual matching identity/condition and one upstream owner are required; otherwise add/reselect the actual atomic member before dataset completion.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_pack_p_mix_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack_p_mix_kg
- Sources: npca-qc-2026; ilcd-attributional-2010

###### First non-purchased external kraft-paper cement sack (`supplier_sack_i`)

This I card records first non-purchased receipt of this same physical article, including standalone gift, loan, rental/pool or unpaid supplier-attached receipt; P and true ER are excluded. I only: the actual first non-purchased external packaging article first entering the declared packaging gate without purchase, standalone or with another supply. Preserve its full physical ingress even if its upstream burden is included in that supplier dataset; identify that sole burden owner. It is neither an extra empty-pack purchase P nor an internal transfer. This is a conditional actual physical ledger exchange. Include it only when that specific external event actually occurs; unknown occurrence or quantity is not zero. Preserve full wet native-unit gross quantity V_i with event, gate, custody, material/state, original cohort and observation horizon, independently of every inherited/assigned burden vector. For this ledger-only display A_i is V_i, and calc_reference divides it once by the declared manufacture Q or original released cohort Q_o for actual postrelease services; never use a net shipment, economic/service share, second stock correction or original manufacture add-on to shrink/enlarge V_i. Internal transfers/reuse cancel at the combined gate and do not create external receipts or a second product Q. Whole wet P/I articles include their original water/material once; separate X only actual additional/removal events not already in other same-side flow terms, never stocks. Actual matching identity/condition and one upstream owner are required; otherwise add/reselect the actual atomic member before dataset completion. Whole manufactured paper-bag family, production mix at plant, admits the actual compatible kraft cement sack. Not raw kraft sheet, fruit-bagging paper or a generic packaging bundle. Verify actual construction and any liner/coating/adhesive as material subledgers without adding a second purchase or upstream burden to the whole supplied bag. No default recycled fraction, dimensions or environmental superiority claim.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66; unit group 93a60a57-a4c8-11da-a746-0800200c9a66 / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_pack_p_mix_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack_p_mix_kg
- Sources: npca-qc-2026; ilcd-attributional-2010

###### Externally returned kraft-paper cement sack (`supplier_sack_er`)

ER only: an actual external returned article received back into the declared packaging stock/custody. Record its actual changed wet mass, usability and original identifiers/history; return is not new manufacture or another purchase/provider charge. A degraded waste return needs its own compatible Waste flow, not automatic Product reuse. This is a conditional actual physical ledger exchange. Include it only when that specific external event actually occurs; unknown occurrence or quantity is not zero. Preserve full wet native-unit gross quantity V_i with event, gate, custody, material/state, original cohort and observation horizon, independently of every inherited/assigned burden vector. For this ledger-only display A_i is V_i, and calc_reference divides it once by the declared manufacture Q or original released cohort Q_o for actual postrelease services; never use a net shipment, economic/service share, second stock correction or original manufacture add-on to shrink/enlarge V_i. Internal transfers/reuse cancel at the combined gate and do not create external receipts or a second product Q. Whole wet P/I articles include their original water/material once; separate X only actual additional/removal events not already in other same-side flow terms, never stocks. Actual matching identity/condition and one upstream owner are required; otherwise add/reselect the actual atomic member before dataset completion. Whole manufactured paper-bag family, production mix at plant, admits the actual compatible kraft cement sack. Not raw kraft sheet, fruit-bagging paper or a generic packaging bundle. Verify actual construction and any liner/coating/adhesive as material subledgers without adding a second purchase or upstream burden to the whole supplied bag. No default recycled fraction, dimensions or environmental superiority claim.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66; unit group 93a60a57-a4c8-11da-a746-0800200c9a66 / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_pack_p_mix_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack_p_mix_kg
- Sources: npca-qc-2026; ilcd-attributional-2010

###### paper cement sacks actual separately added liquid process water (`supplier_sack_water_liquid_in`)

Actual separately supplied treated liquid process water for documented actual repair/conditioning/cleaning, including unapproved/failed/rejected work. Exclude water already inside wet P/I articles, paired atmospheric uptake, internal recirculation or an unverified rainwater source. Record actual permission, work, acceptance/rejection and disposition; no invented water use to close a balance. Each water event has a unique process/gate/cohort identifier and is recorded once in the package-specific row or the general utility/species row. This decomposition does not create another water exchange. This is a conditional actual physical ledger exchange. Include it only when that specific external event actually occurs; unknown occurrence or quantity is not zero. Preserve full wet native-unit gross quantity V_i with event, gate, custody, material/state, original cohort and observation horizon, independently of every inherited/assigned burden vector. For this ledger-only display A_i is V_i, and calc_reference divides it once by the declared manufacture Q or original released cohort Q_o for actual postrelease services; never use a net shipment, economic/service share, second stock correction or original manufacture add-on to shrink/enlarge V_i. Internal transfers/reuse cancel at the combined gate and do not create external receipts or a second product Q. Whole wet P/I articles include their original water/material once; separate X only actual additional/removal events not already in other same-side flow terms, never stocks. Actual matching identity/condition and one upstream owner are required; otherwise add/reselect the actual atomic member before dataset completion. Collect every actually incurred input, water, energy, loss, waste and burden from unauthorized/unapproved, failed or rejected work as well as authorized work. Permission, configuration-specific postwork tests and acceptance govern authorization, continuing qualification and actual hold/rejection/waste disposition only; they never erase actual flows or loads, create a new Q, or presume restoration. Before first release retain manufacture Q; after release retain the original cohort Q_o and actual observed horizon H. Natural storage/handling humidity needs no work permission.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66; unit group 93a60a57-a4c8-11da-a746-0800200c9a66 / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_pack_water_p_mix_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack_water_p_mix_kg
- Sources: npca-qc-2026; ilcd-attributional-2010

##### Elementary flows

###### Atmospheric water-vapour uptake by paper cement sacks (`supplier_sack_water_humidity_in`)

Only ordinary H2O actually absorbed/condensed from air into the packaging, with independent phase/humidity measurements and complete mass. Not purchased liquid water or water already inside a whole bag. Never substitute a Volume/m3 reference for kg of water or for m3 of humid air without establishing the actual native water phase/reference basis and an independently supported state-specific conversion. No water/air density or fraction is assumed. Each water event has a unique process/gate/cohort identifier and is recorded once in the package-specific row or the general utility/species row. This decomposition does not create another water exchange. This is a conditional actual physical ledger exchange. Include it only when that specific external event actually occurs; unknown occurrence or quantity is not zero. Preserve full wet native-unit gross quantity V_i with event, gate, custody, material/state, original cohort and observation horizon, independently of every inherited/assigned burden vector. For this ledger-only display A_i is V_i, and calc_reference divides it once by the declared manufacture Q or original released cohort Q_o for actual postrelease services; never use a net shipment, economic/service share, second stock correction or original manufacture add-on to shrink/enlarge V_i. Internal transfers/reuse cancel at the combined gate and do not create external receipts or a second product Q. Whole wet P/I articles include their original water/material once; separate X only actual additional/removal events not already in other same-side flow terms, never stocks. Actual matching identity/condition and one upstream owner are required; otherwise add/reselect the actual atomic member before dataset completion.

- Selected flow: Atmospheric water-vapour uptake by paper cement sacks
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_pack_water_p_mix_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack_water_p_mix_kg
- Sources: npca-qc-2026; ilcd-attributional-2010


#### Outputs

##### Waste flows

###### Discarded fresh concrete (`fresh_concrete_waste`)

Actual fresh concrete residue/spill or failed mix with wet state and inherited recipe vector; not returned finished product. This specific atomic identity remains unbound; a compatible complete native record and provider must be confirmed before actual dataset use. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: Discarded fresh concrete
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_outputs_p_mix_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_outputs_p_mix_kg
- Sources: npca-qc-2026

### Process: Reinforcement/inserts and mould preparation/casting (`p_form`)

#### Inputs

##### Product flows

###### Hot-rolled reinforcing steel bar (`rebar`)

Receive complete actual reinforcing bars, including coating only if the member and approved design support it. This scope uses uncoated tied reinforcement; retain cutting losses and offcuts. Only hot-rolled low-alloy steel rebar with C<=0.2%, production mix at plant and rolling route. Not prestressing strand, cold-drawn mesh, all structural steel or automatic weldability. Match mill certificate and approved reinforcement design; no bar size, ratio or strength is prescribed. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: Hot rolled rebar steel `43050e3b-42be-465c-a021-17f606484151`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_raw_p_form_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_raw_p_form_kg
- Sources: npca-qc-2026

###### Annealed carbon-steel tie wire (`tie_wire`)

Record purchased tie wire and its installed and wasted quantities. This scope does not assume welding or prestressing. Whole steel-wire Product family, production mix at factory, admits actual uncoated annealed carbon-steel tie wire. It is not wire-drawing service, a wire rope, prestressing strand, welded mesh or unworked steel feed. Actual annealed state, composition, diameter and supplier remain independently documented; no generic grade or annealing energy is inferred. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: Steel Wire `62bb3717-f62c-43e0-baca-46a1e6f847c4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_raw_p_form_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_raw_p_form_kg
- Sources: npca-qc-2026

###### Carbon-steel cast-in lifting anchor (`lifting_anchor`)

Conditional actual complete anchor article retained in the panel; separately identify material, supplier and count-to-mass evidence. Do not replace it by rebar identity. This specific atomic identity remains unbound; a compatible complete native record and provider must be confirmed before actual dataset use. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: Carbon-steel cast-in lifting anchor
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_raw_p_form_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_raw_p_form_kg
- Sources: npca-qc-2026

###### Carbon-steel embedded connection plate (`connection_plate`)

Conditional actual plate retained in the delivered whole panel; record bolts or other actual articles as additional atomic rows if present. This specific atomic identity remains unbound; a compatible complete native record and provider must be confirmed before actual dataset use. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: Carbon-steel embedded connection plate
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_raw_p_form_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_raw_p_form_kg
- Sources: npca-qc-2026

###### Concrete reinforcement cover spacer (`spacer`)

Conditional purchased whole concrete spacer; internally made spacers inherit the actual cement/sand/water production vector without a second purchase. Identify plastic substitutes separately. This specific atomic identity remains unbound; a compatible complete native record and provider must be confirmed before actual dataset use. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: Concrete reinforcement cover spacer
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_raw_p_form_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_raw_p_form_kg
- Sources: npca-qc-2026

###### Mineral-oil concrete mould-release formulation (`release_agent`)

Conditional actual whole supplied oil formulation; weigh application, recovery, closing charge and losses. Do not bind rolling oil or pure oil to an unmatched complete preparation. This specific atomic identity remains unbound; a compatible complete native record and provider must be confirmed before actual dataset use. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: Mineral-oil concrete mould-release formulation
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_raw_p_form_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_raw_p_form_kg
- Sources: npca-qc-2026

#### Outputs

##### Waste flows

###### Reinforcing-bar cutting scrap (`steel_offcut`)

Whole actual steel offcuts at gross mass; not a negative input or automatic co-product credit. Only actual steel process offcuts from cutting/forming/machining at plant and routed for recycling. Not a retired complete machine or mixed reinforced-concrete waste. Re-select if actual waste state/route differs. Gross scrap and its transport/treatment are measured; no scrap ratio, automatic manufacturing transfer, recovery yield or credit is supplied. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: Steel scrap `e4449c6f-3b27-426d-ba8d-47c20c99c609`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_outputs_p_form_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_outputs_p_form_kg
- Sources: npca-qc-2026

### Process: Cohort curing (`p_cure`)

#### Inputs

##### Product flows

###### Liquid curing water (`curing_water`)

Actual external liquid mist/spray/wet-curing make-up, if used. Keep absorption, surface liquid, evaporation, drainage and recovered internal water distinct across all curing cohorts. Treated industrial process-water Product flow; supply/treatment/quality/provider unspecified. It is not an elementary withdrawal or discharge, pure reagent or default tap-water provider. Confirm mixing suitability separately; allocate each liquid water use, return and stock without duplicate recirculation or embedded formulation water. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_water_p_cure_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_water_p_cure_kg
- Sources: npca-qc-2026

###### Polyethylene curing cover sheet (`curing_sheet`)

Conditional moisture-retention PE sheet; keep reusable sheet physical stocks and service allocation separate. It is not shipping film consumption simply because the resin is the same. Only polyethylene film, CAS9002-88-4, production mix at plant; not PET or a packaging bundle. Native luggage classification is inconsistent with the explicit PE-film identity; its PET discussion is a comparison, not PE/PET equivalence. Match actual resin/film grade and provider; no thickness, recycled content or density default. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_assets_p_cure_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_assets_p_cure_kg
- Sources: npca-qc-2026; ilcd-attributional-2010

###### Purchased water steam (`steam`)

Only if actually externally supplied for the documented actual curing route, including unapproved/failed/rejected operation: collect carrier kg, pressure, temperature, vapour quality and inlet/outlet enthalpy. Heat MJ and water mass have one upstream owner. No boiler or steam is presumed. This specific atomic identity remains unbound; a compatible complete native record and provider must be confirmed before actual dataset use. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion. Collect every actually incurred input, water, energy, loss, waste and burden from unauthorized/unapproved, failed or rejected work as well as authorized work. Permission, configuration-specific postwork tests and acceptance govern authorization, continuing qualification and actual hold/rejection/waste disposition only; they never erase actual flows or loads, create a new Q, or presume restoration. Before first release retain manufacture Q; after release retain the original cohort Q_o and actual observed horizon H. Natural storage/handling humidity needs no work permission.

- Selected flow: Purchased water steam
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_heat_p_cure_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_heat_p_cure_kg
- Sources: npca-qc-2026

###### Purchased thermal heat (`purchased_heat`)

Conditional externally delivered heat as its actual energy exchange, distinct from a complete steam provider; collect carrier and return convention. Do not count the same delivered energy twice. This specific atomic identity remains unbound; a compatible complete native record and provider must be confirmed before actual dataset use. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: Purchased thermal heat
- Flow property / unit: Energy / MJ
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_heat_p_cure_mj.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_heat_p_cure_mj
- Sources: npca-qc-2026

#### Outputs

##### Product flows

###### Liquid steam-condensate return (`condensate`)

Only the actual external condensate return to the supplier; retain gross kg and measured thermal state. Not wastewater or a second coproduct credit. This specific atomic identity remains unbound; a compatible complete native record and provider must be confirmed before actual dataset use. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: Liquid steam-condensate return
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_heat_p_cure_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_heat_p_cure_kg
- Sources: npca-qc-2026

### Process: Demoulding/finishing/testing and first release (`p_release`)

#### Inputs

##### Product flows

###### Dry cementitious repair-mortar formulation (`repair_mortar`)

Actual pre-release repair, including unapproved/failed/rejected work; collect the whole purchased formulation once, added water separately, removed material, curing, tests and acceptance/disposition. Broken panels are not presumed repairable. This specific atomic identity remains unbound; a compatible complete native record and provider must be confirmed before actual dataset use. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion. Collect every actually incurred input, water, energy, loss, waste and burden from unauthorized/unapproved, failed or rejected work as well as authorized work. Permission, configuration-specific postwork tests and acceptance govern authorization, continuing qualification and actual hold/rejection/waste disposition only; they never erase actual flows or loads, create a new Q, or presume restoration. Before first release retain manufacture Q; after release retain the original cohort Q_o and actual observed horizon H. Natural storage/handling humidity needs no work permission.

- Selected flow: Dry cementitious repair-mortar formulation
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_raw_p_release_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_raw_p_release_kg
- Sources: npca-qc-2026

###### Liquid repair-mortar mixing water (`repair_water`)

Conditional actual added liquid water; do not duplicate carrier water inside a ready-mixed purchased repair preparation. Treated industrial process-water Product flow; supply/treatment/quality/provider unspecified. It is not an elementary withdrawal or discharge, pure reagent or default tap-water provider. Confirm mixing suitability separately; allocate each liquid water use, return and stock without duplicate recirculation or embedded formulation water. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_water_p_release_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_water_p_release_kg
- Sources: npca-qc-2026

#### Outputs

##### Product flows

###### First-quality-released whole structural wall panel (`finished_panel`)

Q is the summed measured net whole-panel mass newly released for the first time after all governing inspections/tests and permitted work. Include reinforcement, inserts and measured water state; exclude all packaging. Newly released closingFG is already in Q. Reinspection, dispatch or return never creates another release. Only a whole factory-prefabricated steel-reinforced concrete wall panel for building structural/enclosure use; production mix at plant; prefabrication. Scope narrows this family to non-prestressed solid structural panels without insulation or installed-system work. No beam, bare concrete mix, unreinforced block, prestressed product or on-site installation is represented. No fixed grade, dimensions, geography, service life or performance certification is supplied by this identity. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: Precast reinforced-concrete wall panel `a0e1fb4c-59ae-4df9-84bf-3a8adb37748a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: fixed_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: method_formula
- Collection protocol: cp_release
- Sources: npca-qc-2026; elematic-solid-wall

##### Waste flows

###### Rejected hardened reinforced-concrete wall panel (`rejected_panel`)

Whole actual failed, damaged, sampled or unrepairable panel, including steel and water; distinguish destructive test specimens separately if composition differs. Retain all manufacturing/testing/treatment burdens. This specific atomic identity remains unbound; a compatible complete native record and provider must be confirmed before actual dataset use. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: Rejected hardened reinforced-concrete wall panel
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_outputs_p_release_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_outputs_p_release_kg
- Sources: npca-qc-2026

###### Hardened concrete compression-test specimen (`test_specimen`)

Actual concrete-only companion test specimen; not the reinforced whole panel or a second saleable output. This specific atomic identity remains unbound; a compatible complete native record and provider must be confirmed before actual dataset use. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: Hardened concrete compression-test specimen
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_outputs_p_release_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_outputs_p_release_kg
- Sources: npca-qc-2026

### Process: Manufacturing utilities/cleaning and environmental exchanges (`p_util`)

#### Inputs

##### Product flows

###### Liquid washout water (`cleaning_water`)

External water for mixer/forms/test equipment cleaning; preserve all start-up, failed batches, shutdown and zero-output cleaning. Treated industrial process-water Product flow; supply/treatment/quality/provider unspecified. It is not an elementary withdrawal or discharge, pure reagent or default tap-water provider. Confirm mixing suitability separately; allocate each liquid water use, return and stock without duplicate recirculation or embedded formulation water. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_water_p_util_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_water_p_util_kg
- Sources: npca-qc-2026

###### Liquid heat-exchange water (`cooling_water`)

Only an actual external heat-exchanger water leg; record state and gross mass even if part remains in closing circuit charge. This specific atomic identity remains unbound; a compatible complete native record and provider must be confirmed before actual dataset use. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: Liquid heat-exchange water
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_water_p_util_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_water_p_util_kg
- Sources: npca-qc-2026

###### Metered manufacturing electricity (`electricity`)

Meter all receiving/batching/cutting/forming/vibration/curing/handling/finishing/testing/cleaning and idle/start-stop demand, with actual submeter allocation; no whole-line capacity-derived amount. Only CN user-side grid-average consumption mix alternating current at1–35kV. Native reference property is Net calorific value with energy MJ, not Mass; convert measured kWh to MJ by3.6 exactly once. Not voltage-transformation service, specific generator, low-voltage or arbitrary-country supply. Native compliance statements are source claims, not approval of this dataset. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_energy_p_util_mj.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_energy_p_util_mj
- Sources: elematic-wall-route; ilcd-attributional-2010

###### Manufacturing diesel fuel (`diesel`)

Conditional actual fuel for yard machinery or generator; tank stock and combustion reconciliation includes idle and failures. Separate imported electricity from self-generated electricity to avoid double charging. Mass-based diesel Product identity only; fuel grade, blend/formulation, density, heating value, refinery route, geographic supply and provider unspecified. Measure actual fuel and independent state-specific conversion if needed; no kg-to-MJ or density default. Combustion is collected separately and never charged again through an already complete provider. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_energy_p_util_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_energy_p_util_kg
- Sources: npca-qc-2026

###### Natural gas fuel (`natural_gas`)

Actual on-site heat generation, including unapproved/failed/rejected operation; obtain whole gas composition, state, meter and independent heating-value evidence. Not pure methane by default. This specific atomic identity remains unbound; a compatible complete native record and provider must be confirmed before actual dataset use. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion. Collect every actually incurred input, water, energy, loss, waste and burden from unauthorized/unapproved, failed or rejected work as well as authorized work. Permission, configuration-specific postwork tests and acceptance govern authorization, continuing qualification and actual hold/rejection/waste disposition only; they never erase actual flows or loads, create a new Q, or presume restoration. Before first release retain manufacture Q; after release retain the original cohort Q_o and actual observed horizon H. Natural storage/handling humidity needs no work permission.

- Selected flow: Natural gas fuel
- Flow property / unit: Volume / m3
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_energy_p_util_m3.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_energy_p_util_m3
- Sources: npca-qc-2026

##### Elementary flows

###### Atmospheric dinitrogen intake (`air_n2in`)

Only actual N2 crossing a combustion/ventilation gate, independently speciated; never add whole air and its component masses together. Only measured ordinary molecular N2, CAS7727-37-9, taken from air as an Elementary resource. Not total nitrogen, NOx, a purchased nitrogen Product, liquefied or isotope-specific supply. No fixed air fraction. Preserve the paired gross gas ledger; do not characterize unchanged pass-through as new environmental use. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_species_p_util_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_species_p_util_kg
- Sources: npca-qc-2026

###### Atmospheric oxygen intake (`air_o2in`)

Actual molecular oxygen intake with measured state; not total air. Only measured neutral molecular O2, CAS7782-44-7, from air as an Elementary resource. Ionic, atomic, singlet, liquid, medicinal and isotope aliases are not adopted physical states. Not whole air or purchased pure-oxygen supply; no fixed fraction. Pair actual inlet and outlet evidence before environmental attribution. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_species_p_util_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_species_p_util_kg
- Sources: npca-qc-2026

###### Atmospheric water-vapour intake (`air_water_in`)

Actual inlet humidity as water species, separate from external liquid mixing/curing water. This specific atomic identity remains unbound; a compatible complete native record and provider must be confirmed before actual dataset use. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: Atmospheric water-vapour intake
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_species_p_util_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_species_p_util_kg
- Sources: npca-qc-2026

###### Atmospheric argon intake (`air_argon_in`)

Actual argon in gross atmospheric intake when that physical balance is used. Only measured ordinary neutral Ar, CAS7440-37-1, as a resource from air; not purchased argon or isotope-specific gas. No assumed atmospheric fraction. Pair gross pass-through with actual outlet without inventing resource depletion or a credit. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_species_p_util_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_species_p_util_kg
- Sources: npca-qc-2026

###### Atmospheric carbon-dioxide intake (`air_co2_in`)

Gross ambient CO2 inflow if gas passes the gate; distinguish actual uptake by independently measured carbonation rather than crediting all intake. This specific atomic identity remains unbound; a compatible complete native record and provider must be confirmed before actual dataset use. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: Atmospheric carbon-dioxide intake
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_species_p_util_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_species_p_util_kg
- Sources: npca-qc-2026

#### Outputs

##### Product flows

###### Liquid heat-exchange water return (`cooling_return`)

Only actual external return to the supplying system; record temperature/enthalpy and supplier water/energy ownership. Internal recirculation cancels. This specific atomic identity remains unbound; a compatible complete native record and provider must be confirmed before actual dataset use. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: Liquid heat-exchange water return
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_water_p_util_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_water_p_util_kg
- Sources: npca-qc-2026

##### Waste flows

###### Wet concrete washout sludge (`concrete_sludge`)

Actual separated sludge with full wet mass and independently measured solid/water fractions; never count its included water twice. This specific atomic identity remains unbound; a compatible complete native record and provider must be confirmed before actual dataset use. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: Wet concrete washout sludge
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_outputs_p_util_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_outputs_p_util_kg
- Sources: npca-qc-2026

###### Liquid concrete-washout effluent (`washout_effluent`)

Actual externally treated liquid effluent as one physical stream; dissolved species subledger and treatment owner explicit. Direct environmental discharge needs separate real species/media rows. This specific atomic identity remains unbound; a compatible complete native record and provider must be confirmed before actual dataset use. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: Liquid concrete-washout effluent
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_outputs_p_util_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_outputs_p_util_kg
- Sources: npca-qc-2026

###### Captured concrete finishing dust (`captured_concrete_dust`)

Actual captured mixed concrete dust is waste, not an assumed pure SiO2 elementary emission. Identify steel-bearing cutting residue separately if present. This specific atomic identity remains unbound; a compatible complete native record and provider must be confirmed before actual dataset use. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: Captured concrete finishing dust
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_outputs_p_util_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_outputs_p_util_kg
- Sources: npca-qc-2026

###### Waste kraft-paper cement sack (`waste_sack`)

Actual discarded paper sack; separate liner and cement residue without duplicating the whole sack mass. This specific atomic identity remains unbound; a compatible complete native record and provider must be confirmed before actual dataset use. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion. W only: actual full gross waste packaging including real removed old repair material and wet state; do not mix EO Product return or add contained moisture again. This is a conditional actual physical ledger exchange. Include it only when that specific external event actually occurs; unknown occurrence or quantity is not zero. Preserve full wet native-unit gross quantity V_i with event, gate, custody, material/state, original cohort and observation horizon, independently of every inherited/assigned burden vector. For this ledger-only display A_i is V_i, and calc_reference divides it once by the declared manufacture Q or original released cohort Q_o for actual postrelease services; never use a net shipment, economic/service share, second stock correction or original manufacture add-on to shrink/enlarge V_i. Internal transfers/reuse cancel at the combined gate and do not create external receipts or a second product Q. Whole wet P/I articles include their original water/material once; separate X only actual additional/removal events not already in other same-side flow terms, never stocks. Actual matching identity/condition and one upstream owner are required; otherwise add/reselect the actual atomic member before dataset completion. If several packaging origins physically leave in one collected mixed outlet, use one qualified complete Waste exchange for that actual mixture and one actual treatment/provider record. Keep independently measured per-origin W raw accounts that conserve the total, with documented sampling/partition uncertainty; the whole total and its partition are alternatives, never additive exchanges. Existing W cards then represent non-additive origin subaccounts only, not invented separate exits. Genuinely separate outlets retain their own correct Waste identities and treatment; add/reselect an actual qualified mixed Waste only if that real outlet exists, never merely to satisfy six-leg grammar.

- Selected flow: Waste kraft-paper cement sack
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_pack_p_util_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack_p_util_kg
- Sources: npca-qc-2026; ilcd-attributional-2010

###### Liquid paper cement sacks conditioning effluent (`supplier_sack_water_effluent_out`)

Only actual separately removed liquid conditioning/cleaning effluent sent for external treatment. Record whole wet mass, water/solids/contamination and treatment independently; do not count moisture already in waste wood/bags or vapour again as effluent. A clean supplier-water return requires its own actual Product flow and a direct environmental discharge its own true species/medium Elementary flow; neither defaults to this row. Each water event has a unique process/gate/cohort identifier and is recorded once in the package-specific row or the general utility/species row. This decomposition does not create another water exchange. This is a conditional actual physical ledger exchange. Include it only when that specific external event actually occurs; unknown occurrence or quantity is not zero. Preserve full wet native-unit gross quantity V_i with event, gate, custody, material/state, original cohort and observation horizon, independently of every inherited/assigned burden vector. For this ledger-only display A_i is V_i, and calc_reference divides it once by the declared manufacture Q or original released cohort Q_o for actual postrelease services; never use a net shipment, economic/service share, second stock correction or original manufacture add-on to shrink/enlarge V_i. Internal transfers/reuse cancel at the combined gate and do not create external receipts or a second product Q. Whole wet P/I articles include their original water/material once; separate X only actual additional/removal events not already in other same-side flow terms, never stocks. Actual matching identity/condition and one upstream owner are required; otherwise add/reselect the actual atomic member before dataset completion.

- Selected flow: Liquid paper cement sacks conditioning effluent
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_pack_water_p_util_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack_water_p_util_kg
- Sources: npca-qc-2026; ilcd-attributional-2010


##### Elementary flows

###### Dinitrogen to air (`nitrogen_out`)

Actual outgoing N2 mass; include pass-through explicitly if gross gas balance is used. Only measured molecular N2, CAS7727-37-9, to current unspecified air; not nitrogen-total excluding N2, NOx or a long-term release. Gross outlet retains pass-through physically; environmental inventory excludes unchanged paired inlet/outlet gas and identifies actual process changes independently. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_species_p_util_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_species_p_util_kg
- Sources: npca-qc-2026

###### Molecular oxygen to air (`oxygen_out`)

Actual residual O2 to air, independently determined. Only measured neutral molecular O2, CAS7782-44-7, to current unspecified air. Not atomic oxygen, ions, liquid oxygen or delayed release despite noisy aliases. Preserve gross phase mass and paired inlet; use only independently established process change for environmental attribution. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_species_p_util_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_species_p_util_kg
- Sources: npca-qc-2026

###### Argon to air (`argon_out`)

Actual pass-through argon mass, not created process gas. Only measured ordinary Ar, CAS7440-37-1, to current unspecified air; not isotope-specific, indoor, high-stack or long-term release. An unchanged inlet/outlet pair is physical pass-through, not additional generated pollution or an avoided burden. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_species_p_util_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_species_p_util_kg
- Sources: npca-qc-2026

###### Pass-through atmospheric carbon dioxide (`ambient_co2_out`)

Actual ambient CO2 outflow separate from generated fossil CO2 and measured uptake; no avoided-production credit. This specific atomic identity remains unbound; a compatible complete native record and provider must be confirmed before actual dataset use. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: Pass-through atmospheric carbon dioxide
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_species_p_util_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_species_p_util_kg
- Sources: npca-qc-2026

###### Water vapour to air (`water_vapour`)

Actual outgoing H2O vapour from inlet humidity, combustion and evaporation; do not infer from a total mass residual or bind heavy/isotopic water aliases. Only ordinary H2O vapour, CAS7732-18-5, emitted to current unspecified air. Heavy/tritiated water, ice, liquid and bound-water aliases do not define this phase. Separate inlet humidity, measured evaporation and actual reaction water; no residual or stoichiometric default. Gross vapour and attributed environmental change are separate. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_species_p_util_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_species_p_util_kg
- Sources: npca-qc-2026

###### Fossil carbon dioxide to air (`co2`)

Only actual fossil CO2 generated by foreground operations after separating incoming/pass-through CO2. Cement production already in its upstream provider is not generated again here. Only measured neutral fossil CO2, CAS124-38-9, emission to unspecified air. Native isotope/ion/dry-ice aliases do not establish those physical forms here. Not aggregate exhaust, carbonation uptake, biogenic carbon, geological carbonate decomposition or a carbon-total conversion. Determine fossil attribution independently. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_species_p_util_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_species_p_util_kg
- Sources: npca-qc-2026

###### Fossil carbon monoxide to air (`co`)

Collect actual species mass; total exhaust or total carbon cannot substitute for CO. Only species-resolved fossil CO, CAS630-08-0, emission to unspecified air. Native exhaust/flue-gas aliases do not identify the whole gas mixture; cryogenic liquid aliases are not the emitted phase. No CO2-equivalent, total-carbon or unspecified COx substitution. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_species_p_util_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_species_p_util_kg
- Sources: npca-qc-2026

###### Nitrogen monoxide to air (`nitrogen_monoxide`)

Collect NO separately; a NOx-as-NO2 measurement alone does not determine NO and NO2. Only independently speciated neutral NO, CAS10102-43-9, to current unspecified air. The conflicting HNO/nitrosyl-hydride/nitroxyl and broad nitrogen-oxide synonyms are not adopted. No NOx-as-NO2 conversion, inferred speciation or fixed combustion factor. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_species_p_util_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_species_p_util_kg
- Sources: npca-qc-2026

###### Nitrogen dioxide to air (`nitrogen_dioxide`)

Collect actual NO2, excluding N2O4 or nitrite; native conflicting synonyms are not adopted. Only independently speciated NO2, CAS10102-44-0, to current unspecified air. Conflicting dinitrogen-tetroxide aliases are not adopted and do not authorize N2O4, nitrite or total NOx substitution. Actual state/speciation is required; no equilibrium or reaction-yield default. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_species_p_util_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_species_p_util_kg
- Sources: npca-qc-2026

###### Sulfur dioxide to air (`sulfur_dioxide`)

Collect actual SO2, not totalSOx; include fuel-sulfur provenance and controls without inventing a fixed factor. Only measured gaseous SO2, CAS7446-09-5, to unspecified air. Native general sulfur-oxide and product-form aliases do not license totalSOx, sulfite or solid/liquid product substitution. Determine species mass independently. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_species_p_util_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_species_p_util_kg
- Sources: npca-qc-2026

###### Fossil methane to air (`methane`)

Actual fugitive/unburned CH4 in the actual current-air destination if present; do not substitute long-term release or chemically conflicting aliases. No emissions factor is supplied. Only independently measured fossil CH4, CAS74-82-8, to current unspecified air. No long-term release, biogenic/LUC attribution, natural-gas mixture or carbon-black/formaldehyde/other conflicting aliases. Determine fossil provenance and species mass independently; no fixed factor or gas composition. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_species_p_util_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_species_p_util_kg
- Sources: npca-qc-2026

###### Crystalline silicon-dioxide particles to air (`silica_air`)

Only measured actual crystalline SiO2 species and particle-size/air medium if present; PM or total concrete dust cannot be converted into this species without independent composition. Add other actual species separately. This specific atomic identity remains unbound; a compatible complete native record and provider must be confirmed before actual dataset use. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: Crystalline silicon-dioxide particles to air
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_species_p_util_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_species_p_util_kg
- Sources: npca-qc-2026

###### Liquid water to receiving surface water (`liquid_water_discharge`)

Only actual direct liquid water discharge with destination and temperature, distinct from wastewater treatment and its dissolved chemical subledger; add each measured chemical separately. This specific atomic identity remains unbound; a compatible complete native record and provider must be confirmed before actual dataset use. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: Liquid water to receiving surface water
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_species_p_util_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_species_p_util_kg
- Sources: npca-qc-2026

###### paper cement sacks measured H2O-vapour loss (`supplier_sack_water_vapour_out`)

Only ordinary H2O vapour, CAS7732-18-5, actually evaporated/desorbed from the packaging to current unspecified air. Determine independently or by validated species-specific difference; never solve two source quantities from one residual. Not liquid drainage, heavy/tritiated water or assumed reaction water. Keep full gross mass and independently attributed environmental change. Each water event has a unique process/gate/cohort identifier and is recorded once in the package-specific row or the general utility/species row. This decomposition does not create another water exchange. This is a conditional actual physical ledger exchange. Include it only when that specific external event actually occurs; unknown occurrence or quantity is not zero. Preserve full wet native-unit gross quantity V_i with event, gate, custody, material/state, original cohort and observation horizon, independently of every inherited/assigned burden vector. For this ledger-only display A_i is V_i, and calc_reference divides it once by the declared manufacture Q or original released cohort Q_o for actual postrelease services; never use a net shipment, economic/service share, second stock correction or original manufacture add-on to shrink/enlarge V_i. Internal transfers/reuse cancel at the combined gate and do not create external receipts or a second product Q. Whole wet P/I articles include their original water/material once; separate X only actual additional/removal events not already in other same-side flow terms, never stocks. Actual matching identity/condition and one upstream owner are required; otherwise add/reselect the actual atomic member before dataset completion.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66; unit group 93a60a57-a4c8-11da-a746-0800200c9a66 / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_pack_water_p_util_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack_water_p_util_kg
- Sources: npca-qc-2026; ilcd-attributional-2010


### Process: Physical assets/repair and current service (`p_assets`)

#### Inputs

##### Product flows

###### Mineral hydraulic oil (`hydraulic_oil`)

Actual initial charge/top-up/maintenance oil; record new and used oil, in-equipment closing fluid and spills independently. Stock-corrected consumption is not corrected a second time. This specific atomic identity remains unbound; a compatible complete native record and provider must be confirmed before actual dataset use. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: Mineral hydraulic oil
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_assets_p_assets_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_assets_p_assets_kg
- Sources: npca-qc-2026

###### Steel precast wall casting table mould (`mould`)

Actual complete mould asset identity. Record gross acquisition/returns/opening/closing/in-service/retirement separately from the measured service burden vector used by each curing cohort. Never one whole mould per kg or a fixed service life. Whole finished manufactured mould/tool Product family, factory production mix, admits the actual complete steel mould for mineral-material concrete forming. The actual supplied casting table must be a documented complete forming mould, not machined pre-assembly components, steel-plate feed, an entire production line or a crane/vibrator/tilting-wagon bundle. Measure that same complete assembly and any integrated parts independently; separate powered equipment or other assets when outside its actual mould boundary. Native identity supplies no machine weight, steel grade, life or cycle count. Physical acquisition/stock mass remains separate from actual service vectors. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: Steel precast wall casting table mould `da241301-584e-4c9c-baa7-2208878acd1d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_assets_p_assets_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_assets_p_assets_kg
- Sources: elematic-wall-route; ilcd-attributional-2010

###### Concrete pan mixer assembly (`mixer`)

Actual complete mixer asset. Measure the same assembly mass/configuration if needed; allocate actual embodied service without inventing machine weight, lifetime or productive cycles. Add other actual assets as separate atomic identities. This specific atomic identity remains unbound; a compatible complete native record and provider must be confirmed before actual dataset use. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: Concrete pan mixer assembly
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_assets_p_assets_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_assets_p_assets_kg
- Sources: elematic-wall-route; ilcd-attributional-2010

###### New carbon-steel mould repair plate (`repair_plate`)

Actual new replacement plate; record old removed plate and any attached water/oil separately. Its new influx remains even when installed in the closing asset stock. This specific atomic identity remains unbound; a compatible complete native record and provider must be confirmed before actual dataset use. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: New carbon-steel mould repair plate
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_assets_p_assets_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_assets_p_assets_kg
- Sources: npca-qc-2026

#### Outputs

##### Waste flows

###### Removed carbon-steel mould repair plate (`removed_plate`)

Actual removed old plate; sale or off-site treatment does not automatically remove manufacturing burden. This specific atomic identity remains unbound; a compatible complete native record and provider must be confirmed before actual dataset use. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: Removed carbon-steel mould repair plate
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_assets_p_assets_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_assets_p_assets_kg
- Sources: npca-qc-2026; ilcd-attributional-2010

###### Spent mineral hydraulic oil (`spent_oil`)

Collect actual spent oil separately from water and container; retain its treatment burden and stock. Used lubricating-oil Waste family at generation includes the actual spent petroleum/mineral hydraulic lubricant after use. Not new oil, a water/oil emulsion or container mass. Characterize contamination and separate actual water/solids and treatment; native treatment is unspecified and gives no recycling or combustion credit. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_assets_p_assets_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_assets_p_assets_kg
- Sources: npca-qc-2026; ilcd-attributional-2010

###### Retired steel precast wall mould (`retired_mould`)

Actual retired asset gross mass, state and remaining service vector; no presumed scrap credit. This specific atomic identity remains unbound; a compatible complete native record and provider must be confirmed before actual dataset use. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: Retired steel precast wall mould
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_assets_p_assets_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_assets_p_assets_kg
- Sources: npca-qc-2026; ilcd-attributional-2010

###### Retired concrete pan mixer assembly (`retired_mixer`)

Actual retired assembly with removed parts/fluids separately identified; not a generic machinery bundle. This specific atomic identity remains unbound; a compatible complete native record and provider must be confirmed before actual dataset use. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: Retired concrete pan mixer assembly
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_assets_p_assets_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_assets_p_assets_kg
- Sources: npca-qc-2026; ilcd-attributional-2010

### Process: Observed post-release warehousing/packing/handling/dispatch (`p_service`)

#### Inputs

##### Product flows

###### Post-release handling electricity (`service_electricity`)

Actual incremental warehouse/packing/loading/reinspection/actual postwork electricity, including unapproved/failed/rejected work, tied to the original release cohort and observed horizon. Performed services stay charged even if finished stock remains. Only CN user-side grid-average consumption mix alternating current at1–35kV. Native reference property is Net calorific value with energy MJ, not Mass; convert measured kWh to MJ by3.6 exactly once. Not voltage-transformation service, specific generator, low-voltage or arbitrary-country supply. Native compliance statements are source claims, not approval of this dataset. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion. Collect every actually incurred input, water, energy, loss, waste and burden from unauthorized/unapproved, failed or rejected work as well as authorized work. Permission, configuration-specific postwork tests and acceptance govern authorization, continuing qualification and actual hold/rejection/waste disposition only; they never erase actual flows or loads, create a new Q, or presume restoration. Before first release retain manufacture Q; after release retain the original cohort Q_o and actual observed horizon H. Natural storage/handling humidity needs no work permission.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_service_p_service_mj.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_service_p_service_mj
- Sources: npca-qc-2026; ilcd-attributional-2010

###### Post-release yard diesel (`service_diesel`)

Actual incremental diesel for the original cohort service; no repeated manufacturing allocation. Mass-based diesel Product identity only; fuel grade, blend/formulation, density, heating value, refinery route, geographic supply and provider unspecified. Measure actual fuel and independent state-specific conversion if needed; no kg-to-MJ or density default. Combustion is collected separately and never charged again through an already complete provider. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_service_p_service_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_service_p_service_kg
- Sources: npca-qc-2026; ilcd-attributional-2010

###### Post-release dry repair-mortar formulation (`service_mortar`)

Actual post-release work, including unapproved/failed/rejected work, with postwork tests, acceptance and disposition; broken cementitious products are not assumed restored. Whole formulation purchased once. This specific atomic identity remains unbound; a compatible complete native record and provider must be confirmed before actual dataset use. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion. Collect every actually incurred input, water, energy, loss, waste and burden from unauthorized/unapproved, failed or rejected work as well as authorized work. Permission, configuration-specific postwork tests and acceptance govern authorization, continuing qualification and actual hold/rejection/waste disposition only; they never erase actual flows or loads, create a new Q, or presume restoration. Before first release retain manufacture Q; after release retain the original cohort Q_o and actual observed horizon H. Natural storage/handling humidity needs no work permission.

- Selected flow: Post-release dry repair-mortar formulation
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_service_p_service_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_service_p_service_kg
- Sources: npca-qc-2026; ilcd-attributional-2010

###### Post-release liquid repair water (`service_water`)

Actual added water for any actual postwork, including unapproved/failed/rejected work; keep full new influx, closing wet stock and actual losses. It does not create another Q. Treated industrial process-water Product flow; supply/treatment/quality/provider unspecified. It is not an elementary withdrawal or discharge, pure reagent or default tap-water provider. Confirm mixing suitability separately; allocate each liquid water use, return and stock without duplicate recirculation or embedded formulation water. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion. Collect every actually incurred input, water, energy, loss, waste and burden from unauthorized/unapproved, failed or rejected work as well as authorized work. Permission, configuration-specific postwork tests and acceptance govern authorization, continuing qualification and actual hold/rejection/waste disposition only; they never erase actual flows or loads, create a new Q, or presume restoration. Before first release retain manufacture Q; after release retain the original cohort Q_o and actual observed horizon H. Natural storage/handling humidity needs no work permission.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_service_p_service_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_service_p_service_kg
- Sources: npca-qc-2026; ilcd-attributional-2010

###### Wooden transport dunnage (`dunnage`)

This P card records paid procurement of this same physical article, standalone or bundled; first non-purchased receipt and true return use I and ER instead. Actual single-material wood dunnage; capture separate P/I/ER/S/EO/W legs and reusable stock/service vectors. Supplier-included incoming wood remains physical ingress with one upstream owner. Whole finished manufactured wooden wrapping/packaging family admits actual wooden transport dunnage. Not raw roundwood, a pallet/crate system or packaging services. Actual wood, treatments, hardware, moisture, repair additions/removals and supplier burden ownership must be documented; no wood species, dry mass, density, lifetime or reuse-cycle default. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion. P only: actual paid standalone or bundled empty packaging article; I/ER/S/EO/W each use their separate actual direction row, not this P. This is a conditional actual physical ledger exchange. Include it only when that specific external event actually occurs; unknown occurrence or quantity is not zero. Preserve full wet native-unit gross quantity V_i with event, gate, custody, material/state, original cohort and observation horizon, independently of every inherited/assigned burden vector. For this ledger-only display A_i is V_i, and calc_reference divides it once by the declared manufacture Q or original released cohort Q_o for actual postrelease services; never use a net shipment, economic/service share, second stock correction or original manufacture add-on to shrink/enlarge V_i. Internal transfers/reuse cancel at the combined gate and do not create external receipts or a second product Q. Whole wet P/I articles include their original water/material once; separate X only actual additional/removal events not already in other same-side flow terms, never stocks. Actual matching identity/condition and one upstream owner are required; otherwise add/reselect the actual atomic member before dataset completion.

- Selected flow: Wooden transport dunnage `1437dd55-5b8c-4866-83a4-b6911ed60bf8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_pack_p_service_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack_p_service_kg
- Sources: npca-qc-2026; ilcd-attributional-2010

###### Steel transport strapping (`steel_strap`)

This P card records paid procurement of this same physical article, standalone or bundled; first non-purchased receipt and true return use I and ER instead. Actual steel strap as one material. Match actual composition, recycling/rolling route and supplier before identity binding. Record each packaging leg independently. This specific atomic identity remains unbound; a compatible complete native record and provider must be confirmed before actual dataset use. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion. P only: actual paid standalone or bundled empty packaging article; I/ER/S/EO/W each use their separate actual direction row, not this P. This is a conditional actual physical ledger exchange. Include it only when that specific external event actually occurs; unknown occurrence or quantity is not zero. Preserve full wet native-unit gross quantity V_i with event, gate, custody, material/state, original cohort and observation horizon, independently of every inherited/assigned burden vector. For this ledger-only display A_i is V_i, and calc_reference divides it once by the declared manufacture Q or original released cohort Q_o for actual postrelease services; never use a net shipment, economic/service share, second stock correction or original manufacture add-on to shrink/enlarge V_i. Internal transfers/reuse cancel at the combined gate and do not create external receipts or a second product Q. Whole wet P/I articles include their original water/material once; separate X only actual additional/removal events not already in other same-side flow terms, never stocks. Actual matching identity/condition and one upstream owner are required; otherwise add/reselect the actual atomic member before dataset completion.

- Selected flow: Steel transport strapping
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_pack_p_service_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack_p_service_kg
- Sources: npca-qc-2026; ilcd-attributional-2010

###### Polyethylene transport film (`shipping_film`)

This P card records paid procurement of this same physical article, standalone or bundled; first non-purchased receipt and true return use I and ER instead. Actual PE film only; six packaging legs and closing stock include empty, WIP-attached, FG-attached and reusable material. Internal reuse cancels without a second purchase or Q contribution. Only polyethylene film, CAS9002-88-4, production mix at plant; not PET or a packaging bundle. Native luggage classification is inconsistent with the explicit PE-film identity; its PET discussion is a comparison, not PE/PET equivalence. Match actual resin/film grade and provider; no thickness, recycled content or density default. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion. P only: actual paid standalone or bundled empty packaging article; I/ER/S/EO/W each use their separate actual direction row, not this P. This is a conditional actual physical ledger exchange. Include it only when that specific external event actually occurs; unknown occurrence or quantity is not zero. Preserve full wet native-unit gross quantity V_i with event, gate, custody, material/state, original cohort and observation horizon, independently of every inherited/assigned burden vector. For this ledger-only display A_i is V_i, and calc_reference divides it once by the declared manufacture Q or original released cohort Q_o for actual postrelease services; never use a net shipment, economic/service share, second stock correction or original manufacture add-on to shrink/enlarge V_i. Internal transfers/reuse cancel at the combined gate and do not create external receipts or a second product Q. Whole wet P/I articles include their original water/material once; separate X only actual additional/removal events not already in other same-side flow terms, never stocks. Actual matching identity/condition and one upstream owner are required; otherwise add/reselect the actual atomic member before dataset completion.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_pack_p_service_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack_p_service_kg
- Sources: npca-qc-2026; ilcd-attributional-2010

###### First non-purchased external wooden transport dunnage (`dunnage_i`)

This I card records first non-purchased receipt of this same physical article, including standalone gift, loan, rental/pool or unpaid supplier-attached receipt; P and true ER are excluded. I only: the actual first non-purchased external packaging article first entering the declared packaging gate without purchase, standalone or with another supply. Preserve its full physical ingress even if its upstream burden is included in that supplier dataset; identify that sole burden owner. It is neither an extra empty-pack purchase P nor an internal transfer. This is a conditional actual physical ledger exchange. Include it only when that specific external event actually occurs; unknown occurrence or quantity is not zero. Preserve full wet native-unit gross quantity V_i with event, gate, custody, material/state, original cohort and observation horizon, independently of every inherited/assigned burden vector. For this ledger-only display A_i is V_i, and calc_reference divides it once by the declared manufacture Q or original released cohort Q_o for actual postrelease services; never use a net shipment, economic/service share, second stock correction or original manufacture add-on to shrink/enlarge V_i. Internal transfers/reuse cancel at the combined gate and do not create external receipts or a second product Q. Whole wet P/I articles include their original water/material once; separate X only actual additional/removal events not already in other same-side flow terms, never stocks. Actual matching identity/condition and one upstream owner are required; otherwise add/reselect the actual atomic member before dataset completion. Whole finished manufactured wooden wrapping/packaging family admits actual wooden transport dunnage. Not raw roundwood, a pallet/crate system or packaging services. Actual wood, treatments, hardware, moisture, repair additions/removals and supplier burden ownership must be documented; no wood species, dry mass, density, lifetime or reuse-cycle default.

- Selected flow: Wooden transport dunnage `1437dd55-5b8c-4866-83a4-b6911ed60bf8`
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66; unit group 93a60a57-a4c8-11da-a746-0800200c9a66 / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_pack_p_service_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack_p_service_kg
- Sources: npca-qc-2026; ilcd-attributional-2010

###### Externally returned wooden transport dunnage (`dunnage_er`)

ER only: an actual external returned article received back into the declared packaging stock/custody. Record its actual changed wet mass, usability and original identifiers/history; return is not new manufacture or another purchase/provider charge. A degraded waste return needs its own compatible Waste flow, not automatic Product reuse. This is a conditional actual physical ledger exchange. Include it only when that specific external event actually occurs; unknown occurrence or quantity is not zero. Preserve full wet native-unit gross quantity V_i with event, gate, custody, material/state, original cohort and observation horizon, independently of every inherited/assigned burden vector. For this ledger-only display A_i is V_i, and calc_reference divides it once by the declared manufacture Q or original released cohort Q_o for actual postrelease services; never use a net shipment, economic/service share, second stock correction or original manufacture add-on to shrink/enlarge V_i. Internal transfers/reuse cancel at the combined gate and do not create external receipts or a second product Q. Whole wet P/I articles include their original water/material once; separate X only actual additional/removal events not already in other same-side flow terms, never stocks. Actual matching identity/condition and one upstream owner are required; otherwise add/reselect the actual atomic member before dataset completion. Whole finished manufactured wooden wrapping/packaging family admits actual wooden transport dunnage. Not raw roundwood, a pallet/crate system or packaging services. Actual wood, treatments, hardware, moisture, repair additions/removals and supplier burden ownership must be documented; no wood species, dry mass, density, lifetime or reuse-cycle default.

- Selected flow: Wooden transport dunnage `1437dd55-5b8c-4866-83a4-b6911ed60bf8`
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66; unit group 93a60a57-a4c8-11da-a746-0800200c9a66 / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_pack_p_service_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack_p_service_kg
- Sources: npca-qc-2026; ilcd-attributional-2010

###### First non-purchased external steel transport strapping (`steel_strap_i`)

This I card records first non-purchased receipt of this same physical article, including standalone gift, loan, rental/pool or unpaid supplier-attached receipt; P and true ER are excluded. I only: the actual first non-purchased external packaging article first entering the declared packaging gate without purchase, standalone or with another supply. Preserve its full physical ingress even if its upstream burden is included in that supplier dataset; identify that sole burden owner. It is neither an extra empty-pack purchase P nor an internal transfer. This is a conditional actual physical ledger exchange. Include it only when that specific external event actually occurs; unknown occurrence or quantity is not zero. Preserve full wet native-unit gross quantity V_i with event, gate, custody, material/state, original cohort and observation horizon, independently of every inherited/assigned burden vector. For this ledger-only display A_i is V_i, and calc_reference divides it once by the declared manufacture Q or original released cohort Q_o for actual postrelease services; never use a net shipment, economic/service share, second stock correction or original manufacture add-on to shrink/enlarge V_i. Internal transfers/reuse cancel at the combined gate and do not create external receipts or a second product Q. Whole wet P/I articles include their original water/material once; separate X only actual additional/removal events not already in other same-side flow terms, never stocks. Actual matching identity/condition and one upstream owner are required; otherwise add/reselect the actual atomic member before dataset completion. Actual steel strap as one material. Match actual composition, recycling/rolling route and supplier before identity binding. Record each packaging leg independently. This specific atomic identity remains unbound; a compatible complete native record and provider must be confirmed before actual dataset use.

- Selected flow: Steel transport strapping
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_pack_p_service_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack_p_service_kg
- Sources: npca-qc-2026; ilcd-attributional-2010

###### Externally returned steel transport strapping (`steel_strap_er`)

ER only: an actual external returned article received back into the declared packaging stock/custody. Record its actual changed wet mass, usability and original identifiers/history; return is not new manufacture or another purchase/provider charge. A degraded waste return needs its own compatible Waste flow, not automatic Product reuse. This is a conditional actual physical ledger exchange. Include it only when that specific external event actually occurs; unknown occurrence or quantity is not zero. Preserve full wet native-unit gross quantity V_i with event, gate, custody, material/state, original cohort and observation horizon, independently of every inherited/assigned burden vector. For this ledger-only display A_i is V_i, and calc_reference divides it once by the declared manufacture Q or original released cohort Q_o for actual postrelease services; never use a net shipment, economic/service share, second stock correction or original manufacture add-on to shrink/enlarge V_i. Internal transfers/reuse cancel at the combined gate and do not create external receipts or a second product Q. Whole wet P/I articles include their original water/material once; separate X only actual additional/removal events not already in other same-side flow terms, never stocks. Actual matching identity/condition and one upstream owner are required; otherwise add/reselect the actual atomic member before dataset completion. Actual steel strap as one material. Match actual composition, recycling/rolling route and supplier before identity binding. Record each packaging leg independently. This specific atomic identity remains unbound; a compatible complete native record and provider must be confirmed before actual dataset use.

- Selected flow: Steel transport strapping
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_pack_p_service_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack_p_service_kg
- Sources: npca-qc-2026; ilcd-attributional-2010

###### First non-purchased external polyethylene transport film (`shipping_film_i`)

This I card records first non-purchased receipt of this same physical article, including standalone gift, loan, rental/pool or unpaid supplier-attached receipt; P and true ER are excluded. I only: the actual first non-purchased external packaging article first entering the declared packaging gate without purchase, standalone or with another supply. Preserve its full physical ingress even if its upstream burden is included in that supplier dataset; identify that sole burden owner. It is neither an extra empty-pack purchase P nor an internal transfer. This is a conditional actual physical ledger exchange. Include it only when that specific external event actually occurs; unknown occurrence or quantity is not zero. Preserve full wet native-unit gross quantity V_i with event, gate, custody, material/state, original cohort and observation horizon, independently of every inherited/assigned burden vector. For this ledger-only display A_i is V_i, and calc_reference divides it once by the declared manufacture Q or original released cohort Q_o for actual postrelease services; never use a net shipment, economic/service share, second stock correction or original manufacture add-on to shrink/enlarge V_i. Internal transfers/reuse cancel at the combined gate and do not create external receipts or a second product Q. Whole wet P/I articles include their original water/material once; separate X only actual additional/removal events not already in other same-side flow terms, never stocks. Actual matching identity/condition and one upstream owner are required; otherwise add/reselect the actual atomic member before dataset completion. Actual PE film only; six packaging legs and closing stock include empty, WIP-attached, FG-attached and reusable material. Internal reuse cancels without a second purchase or Q contribution. Only polyethylene film, CAS9002-88-4, production mix at plant; not PET or a packaging bundle. Native luggage classification is inconsistent with the explicit PE-film identity; its PET discussion is a comparison, not PE/PET equivalence. Match actual resin/film grade and provider; no thickness, recycled content or density default.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66; unit group 93a60a57-a4c8-11da-a746-0800200c9a66 / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_pack_p_service_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack_p_service_kg
- Sources: npca-qc-2026; ilcd-attributional-2010

###### Externally returned polyethylene transport film (`shipping_film_er`)

ER only: an actual external returned article received back into the declared packaging stock/custody. Record its actual changed wet mass, usability and original identifiers/history; return is not new manufacture or another purchase/provider charge. A degraded waste return needs its own compatible Waste flow, not automatic Product reuse. This is a conditional actual physical ledger exchange. Include it only when that specific external event actually occurs; unknown occurrence or quantity is not zero. Preserve full wet native-unit gross quantity V_i with event, gate, custody, material/state, original cohort and observation horizon, independently of every inherited/assigned burden vector. For this ledger-only display A_i is V_i, and calc_reference divides it once by the declared manufacture Q or original released cohort Q_o for actual postrelease services; never use a net shipment, economic/service share, second stock correction or original manufacture add-on to shrink/enlarge V_i. Internal transfers/reuse cancel at the combined gate and do not create external receipts or a second product Q. Whole wet P/I articles include their original water/material once; separate X only actual additional/removal events not already in other same-side flow terms, never stocks. Actual matching identity/condition and one upstream owner are required; otherwise add/reselect the actual atomic member before dataset completion. Actual PE film only; six packaging legs and closing stock include empty, WIP-attached, FG-attached and reusable material. Internal reuse cancels without a second purchase or Q contribution. Only polyethylene film, CAS9002-88-4, production mix at plant; not PET or a packaging bundle. Native luggage classification is inconsistent with the explicit PE-film identity; its PET discussion is a comparison, not PE/PET equivalence. Match actual resin/film grade and provider; no thickness, recycled content or density default.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66; unit group 93a60a57-a4c8-11da-a746-0800200c9a66 / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_pack_p_service_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack_p_service_kg
- Sources: npca-qc-2026; ilcd-attributional-2010

###### wooden dunnage actual separately added liquid process water (`dunnage_water_liquid_in`)

Actual separately supplied treated liquid process water for documented actual repair/conditioning/cleaning, including unapproved/failed/rejected work. Exclude water already inside wet P/I articles, paired atmospheric uptake, internal recirculation or an unverified rainwater source. Record actual permission, work, acceptance/rejection and disposition; no invented water use to close a balance. Each water event has a unique process/gate/cohort identifier and is recorded once in the package-specific row or the general utility/species row. This decomposition does not create another water exchange. This is a conditional actual physical ledger exchange. Include it only when that specific external event actually occurs; unknown occurrence or quantity is not zero. Preserve full wet native-unit gross quantity V_i with event, gate, custody, material/state, original cohort and observation horizon, independently of every inherited/assigned burden vector. For this ledger-only display A_i is V_i, and calc_reference divides it once by the declared manufacture Q or original released cohort Q_o for actual postrelease services; never use a net shipment, economic/service share, second stock correction or original manufacture add-on to shrink/enlarge V_i. Internal transfers/reuse cancel at the combined gate and do not create external receipts or a second product Q. Whole wet P/I articles include their original water/material once; separate X only actual additional/removal events not already in other same-side flow terms, never stocks. Actual matching identity/condition and one upstream owner are required; otherwise add/reselect the actual atomic member before dataset completion. Collect every actually incurred input, water, energy, loss, waste and burden from unauthorized/unapproved, failed or rejected work as well as authorized work. Permission, configuration-specific postwork tests and acceptance govern authorization, continuing qualification and actual hold/rejection/waste disposition only; they never erase actual flows or loads, create a new Q, or presume restoration. Before first release retain manufacture Q; after release retain the original cohort Q_o and actual observed horizon H. Natural storage/handling humidity needs no work permission.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66; unit group 93a60a57-a4c8-11da-a746-0800200c9a66 / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_pack_water_p_service_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack_water_p_service_kg
- Sources: npca-qc-2026; ilcd-attributional-2010

##### Elementary flows

###### Atmospheric water-vapour uptake by wooden dunnage (`dunnage_water_humidity_in`)

Only ordinary H2O actually absorbed/condensed from air into the packaging, with independent phase/humidity measurements and complete mass. Not purchased liquid water or water already inside a whole bag. Never substitute a Volume/m3 reference for kg of water or for m3 of humid air without establishing the actual native water phase/reference basis and an independently supported state-specific conversion. No water/air density or fraction is assumed. Each water event has a unique process/gate/cohort identifier and is recorded once in the package-specific row or the general utility/species row. This decomposition does not create another water exchange. This is a conditional actual physical ledger exchange. Include it only when that specific external event actually occurs; unknown occurrence or quantity is not zero. Preserve full wet native-unit gross quantity V_i with event, gate, custody, material/state, original cohort and observation horizon, independently of every inherited/assigned burden vector. For this ledger-only display A_i is V_i, and calc_reference divides it once by the declared manufacture Q or original released cohort Q_o for actual postrelease services; never use a net shipment, economic/service share, second stock correction or original manufacture add-on to shrink/enlarge V_i. Internal transfers/reuse cancel at the combined gate and do not create external receipts or a second product Q. Whole wet P/I articles include their original water/material once; separate X only actual additional/removal events not already in other same-side flow terms, never stocks. Actual matching identity/condition and one upstream owner are required; otherwise add/reselect the actual atomic member before dataset completion.

- Selected flow: Atmospheric water-vapour uptake by wooden dunnage
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_pack_water_p_service_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack_water_p_service_kg
- Sources: npca-qc-2026; ilcd-attributional-2010


#### Outputs


##### Product flows

###### Gross-shipped wooden transport dunnage (`dunnage_s`)

S only: the actual full packaging article carried out with gross physical shipments G. Measure actual outbound wet article mass and state; do not use net-delivery quantities, subtract physical returns R, or add this packaging to net whole-panel Q. Any later external return is a separate ER event with its own changed mass/history. This is a conditional actual physical ledger exchange. Include it only when that specific external event actually occurs; unknown occurrence or quantity is not zero. Preserve full wet native-unit gross quantity V_i with event, gate, custody, material/state, original cohort and observation horizon, independently of every inherited/assigned burden vector. For this ledger-only display A_i is V_i, and calc_reference divides it once by the declared manufacture Q or original released cohort Q_o for actual postrelease services; never use a net shipment, economic/service share, second stock correction or original manufacture add-on to shrink/enlarge V_i. Internal transfers/reuse cancel at the combined gate and do not create external receipts or a second product Q. Whole wet P/I articles include their original water/material once; separate X only actual additional/removal events not already in other same-side flow terms, never stocks. Actual matching identity/condition and one upstream owner are required; otherwise add/reselect the actual atomic member before dataset completion. Whole finished manufactured wooden wrapping/packaging family admits actual wooden transport dunnage. Not raw roundwood, a pallet/crate system or packaging services. Actual wood, treatments, hardware, moisture, repair additions/removals and supplier burden ownership must be documented; no wood species, dry mass, density, lifetime or reuse-cycle default.

- Selected flow: Wooden transport dunnage `1437dd55-5b8c-4866-83a4-b6911ed60bf8`
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66; unit group 93a60a57-a4c8-11da-a746-0800200c9a66 / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_pack_p_service_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack_p_service_kg
- Sources: npca-qc-2026; ilcd-attributional-2010

###### Externally returned outward wooden transport dunnage (`dunnage_eo`)

EO only: an actual external return of the article to its supplier or other external custodian, separate from S with gross product shipments. Preserve actual full changed wet mass, state, destination and inherited history. No automatic waste classification, avoided-production credit, negative purchase or transfer of old manufacturing burden follows from the return. This is a conditional actual physical ledger exchange. Include it only when that specific external event actually occurs; unknown occurrence or quantity is not zero. Preserve full wet native-unit gross quantity V_i with event, gate, custody, material/state, original cohort and observation horizon, independently of every inherited/assigned burden vector. For this ledger-only display A_i is V_i, and calc_reference divides it once by the declared manufacture Q or original released cohort Q_o for actual postrelease services; never use a net shipment, economic/service share, second stock correction or original manufacture add-on to shrink/enlarge V_i. Internal transfers/reuse cancel at the combined gate and do not create external receipts or a second product Q. Whole wet P/I articles include their original water/material once; separate X only actual additional/removal events not already in other same-side flow terms, never stocks. Actual matching identity/condition and one upstream owner are required; otherwise add/reselect the actual atomic member before dataset completion. Whole finished manufactured wooden wrapping/packaging family admits actual wooden transport dunnage. Not raw roundwood, a pallet/crate system or packaging services. Actual wood, treatments, hardware, moisture, repair additions/removals and supplier burden ownership must be documented; no wood species, dry mass, density, lifetime or reuse-cycle default.

- Selected flow: Wooden transport dunnage `1437dd55-5b8c-4866-83a4-b6911ed60bf8`
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66; unit group 93a60a57-a4c8-11da-a746-0800200c9a66 / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_pack_p_service_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack_p_service_kg
- Sources: npca-qc-2026; ilcd-attributional-2010

###### Gross-shipped steel transport strapping (`steel_strap_s`)

S only: the actual full packaging article carried out with gross physical shipments G. Measure actual outbound wet article mass and state; do not use net-delivery quantities, subtract physical returns R, or add this packaging to net whole-panel Q. Any later external return is a separate ER event with its own changed mass/history. This is a conditional actual physical ledger exchange. Include it only when that specific external event actually occurs; unknown occurrence or quantity is not zero. Preserve full wet native-unit gross quantity V_i with event, gate, custody, material/state, original cohort and observation horizon, independently of every inherited/assigned burden vector. For this ledger-only display A_i is V_i, and calc_reference divides it once by the declared manufacture Q or original released cohort Q_o for actual postrelease services; never use a net shipment, economic/service share, second stock correction or original manufacture add-on to shrink/enlarge V_i. Internal transfers/reuse cancel at the combined gate and do not create external receipts or a second product Q. Whole wet P/I articles include their original water/material once; separate X only actual additional/removal events not already in other same-side flow terms, never stocks. Actual matching identity/condition and one upstream owner are required; otherwise add/reselect the actual atomic member before dataset completion. Actual steel strap as one material. Match actual composition, recycling/rolling route and supplier before identity binding. Record each packaging leg independently. This specific atomic identity remains unbound; a compatible complete native record and provider must be confirmed before actual dataset use.

- Selected flow: Steel transport strapping
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_pack_p_service_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack_p_service_kg
- Sources: npca-qc-2026; ilcd-attributional-2010

###### Externally returned outward steel transport strapping (`steel_strap_eo`)

EO only: an actual external return of the article to its supplier or other external custodian, separate from S with gross product shipments. Preserve actual full changed wet mass, state, destination and inherited history. No automatic waste classification, avoided-production credit, negative purchase or transfer of old manufacturing burden follows from the return. This is a conditional actual physical ledger exchange. Include it only when that specific external event actually occurs; unknown occurrence or quantity is not zero. Preserve full wet native-unit gross quantity V_i with event, gate, custody, material/state, original cohort and observation horizon, independently of every inherited/assigned burden vector. For this ledger-only display A_i is V_i, and calc_reference divides it once by the declared manufacture Q or original released cohort Q_o for actual postrelease services; never use a net shipment, economic/service share, second stock correction or original manufacture add-on to shrink/enlarge V_i. Internal transfers/reuse cancel at the combined gate and do not create external receipts or a second product Q. Whole wet P/I articles include their original water/material once; separate X only actual additional/removal events not already in other same-side flow terms, never stocks. Actual matching identity/condition and one upstream owner are required; otherwise add/reselect the actual atomic member before dataset completion. Actual steel strap as one material. Match actual composition, recycling/rolling route and supplier before identity binding. Record each packaging leg independently. This specific atomic identity remains unbound; a compatible complete native record and provider must be confirmed before actual dataset use.

- Selected flow: Steel transport strapping
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_pack_p_service_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack_p_service_kg
- Sources: npca-qc-2026; ilcd-attributional-2010

###### Gross-shipped polyethylene transport film (`shipping_film_s`)

S only: the actual full packaging article carried out with gross physical shipments G. Measure actual outbound wet article mass and state; do not use net-delivery quantities, subtract physical returns R, or add this packaging to net whole-panel Q. Any later external return is a separate ER event with its own changed mass/history. This is a conditional actual physical ledger exchange. Include it only when that specific external event actually occurs; unknown occurrence or quantity is not zero. Preserve full wet native-unit gross quantity V_i with event, gate, custody, material/state, original cohort and observation horizon, independently of every inherited/assigned burden vector. For this ledger-only display A_i is V_i, and calc_reference divides it once by the declared manufacture Q or original released cohort Q_o for actual postrelease services; never use a net shipment, economic/service share, second stock correction or original manufacture add-on to shrink/enlarge V_i. Internal transfers/reuse cancel at the combined gate and do not create external receipts or a second product Q. Whole wet P/I articles include their original water/material once; separate X only actual additional/removal events not already in other same-side flow terms, never stocks. Actual matching identity/condition and one upstream owner are required; otherwise add/reselect the actual atomic member before dataset completion. Actual PE film only; six packaging legs and closing stock include empty, WIP-attached, FG-attached and reusable material. Internal reuse cancels without a second purchase or Q contribution. Only polyethylene film, CAS9002-88-4, production mix at plant; not PET or a packaging bundle. Native luggage classification is inconsistent with the explicit PE-film identity; its PET discussion is a comparison, not PE/PET equivalence. Match actual resin/film grade and provider; no thickness, recycled content or density default.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66; unit group 93a60a57-a4c8-11da-a746-0800200c9a66 / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_pack_p_service_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack_p_service_kg
- Sources: npca-qc-2026; ilcd-attributional-2010

###### Externally returned outward polyethylene transport film (`shipping_film_eo`)

EO only: an actual external return of the article to its supplier or other external custodian, separate from S with gross product shipments. Preserve actual full changed wet mass, state, destination and inherited history. No automatic waste classification, avoided-production credit, negative purchase or transfer of old manufacturing burden follows from the return. This is a conditional actual physical ledger exchange. Include it only when that specific external event actually occurs; unknown occurrence or quantity is not zero. Preserve full wet native-unit gross quantity V_i with event, gate, custody, material/state, original cohort and observation horizon, independently of every inherited/assigned burden vector. For this ledger-only display A_i is V_i, and calc_reference divides it once by the declared manufacture Q or original released cohort Q_o for actual postrelease services; never use a net shipment, economic/service share, second stock correction or original manufacture add-on to shrink/enlarge V_i. Internal transfers/reuse cancel at the combined gate and do not create external receipts or a second product Q. Whole wet P/I articles include their original water/material once; separate X only actual additional/removal events not already in other same-side flow terms, never stocks. Actual matching identity/condition and one upstream owner are required; otherwise add/reselect the actual atomic member before dataset completion. Actual PE film only; six packaging legs and closing stock include empty, WIP-attached, FG-attached and reusable material. Internal reuse cancels without a second purchase or Q contribution. Only polyethylene film, CAS9002-88-4, production mix at plant; not PET or a packaging bundle. Native luggage classification is inconsistent with the explicit PE-film identity; its PET discussion is a comparison, not PE/PET equivalence. Match actual resin/film grade and provider; no thickness, recycled content or density default.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66; unit group 93a60a57-a4c8-11da-a746-0800200c9a66 / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_pack_p_service_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack_p_service_kg
- Sources: npca-qc-2026; ilcd-attributional-2010

###### Gross-shipped kraft-paper cement sack (`supplier_sack_s`)

S only: the actual full packaging article carried out with gross physical shipments G. Measure actual outbound wet article mass and state; do not use net-delivery quantities, subtract physical returns R, or add this packaging to net whole-panel Q. Any later external return is a separate ER event with its own changed mass/history. This is a conditional actual physical ledger exchange. Include it only when that specific external event actually occurs; unknown occurrence or quantity is not zero. Preserve full wet native-unit gross quantity V_i with event, gate, custody, material/state, original cohort and observation horizon, independently of every inherited/assigned burden vector. For this ledger-only display A_i is V_i, and calc_reference divides it once by the declared manufacture Q or original released cohort Q_o for actual postrelease services; never use a net shipment, economic/service share, second stock correction or original manufacture add-on to shrink/enlarge V_i. Internal transfers/reuse cancel at the combined gate and do not create external receipts or a second product Q. Whole wet P/I articles include their original water/material once; separate X only actual additional/removal events not already in other same-side flow terms, never stocks. Actual matching identity/condition and one upstream owner are required; otherwise add/reselect the actual atomic member before dataset completion. Whole manufactured paper-bag family, production mix at plant, admits the actual compatible kraft cement sack. Not raw kraft sheet, fruit-bagging paper or a generic packaging bundle. Verify actual construction and any liner/coating/adhesive as material subledgers without adding a second purchase or upstream burden to the whole supplied bag. No default recycled fraction, dimensions or environmental superiority claim.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66; unit group 93a60a57-a4c8-11da-a746-0800200c9a66 / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_pack_p_service_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack_p_service_kg
- Sources: npca-qc-2026; ilcd-attributional-2010

###### Externally returned outward kraft-paper cement sack (`supplier_sack_eo`)

EO only: an actual external return of the article to its supplier or other external custodian, separate from S with gross product shipments. Preserve actual full changed wet mass, state, destination and inherited history. No automatic waste classification, avoided-production credit, negative purchase or transfer of old manufacturing burden follows from the return. This is a conditional actual physical ledger exchange. Include it only when that specific external event actually occurs; unknown occurrence or quantity is not zero. Preserve full wet native-unit gross quantity V_i with event, gate, custody, material/state, original cohort and observation horizon, independently of every inherited/assigned burden vector. For this ledger-only display A_i is V_i, and calc_reference divides it once by the declared manufacture Q or original released cohort Q_o for actual postrelease services; never use a net shipment, economic/service share, second stock correction or original manufacture add-on to shrink/enlarge V_i. Internal transfers/reuse cancel at the combined gate and do not create external receipts or a second product Q. Whole wet P/I articles include their original water/material once; separate X only actual additional/removal events not already in other same-side flow terms, never stocks. Actual matching identity/condition and one upstream owner are required; otherwise add/reselect the actual atomic member before dataset completion. Whole manufactured paper-bag family, production mix at plant, admits the actual compatible kraft cement sack. Not raw kraft sheet, fruit-bagging paper or a generic packaging bundle. Verify actual construction and any liner/coating/adhesive as material subledgers without adding a second purchase or upstream burden to the whole supplied bag. No default recycled fraction, dimensions or environmental superiority claim.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66; unit group 93a60a57-a4c8-11da-a746-0800200c9a66 / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_pack_p_service_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack_p_service_kg
- Sources: npca-qc-2026; ilcd-attributional-2010


##### Waste flows

###### Waste wooden dunnage (`waste_dunnage`)

Actual gross discarded wood, with treatment destination and inherited vector. This specific atomic identity remains unbound; a compatible complete native record and provider must be confirmed before actual dataset use. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion. W only: actual full gross waste packaging including real removed old repair material and wet state; do not mix EO Product return or add contained moisture again. This is a conditional actual physical ledger exchange. Include it only when that specific external event actually occurs; unknown occurrence or quantity is not zero. Preserve full wet native-unit gross quantity V_i with event, gate, custody, material/state, original cohort and observation horizon, independently of every inherited/assigned burden vector. For this ledger-only display A_i is V_i, and calc_reference divides it once by the declared manufacture Q or original released cohort Q_o for actual postrelease services; never use a net shipment, economic/service share, second stock correction or original manufacture add-on to shrink/enlarge V_i. Internal transfers/reuse cancel at the combined gate and do not create external receipts or a second product Q. Whole wet P/I articles include their original water/material once; separate X only actual additional/removal events not already in other same-side flow terms, never stocks. Actual matching identity/condition and one upstream owner are required; otherwise add/reselect the actual atomic member before dataset completion. If several packaging origins physically leave in one collected mixed outlet, use one qualified complete Waste exchange for that actual mixture and one actual treatment/provider record. Keep independently measured per-origin W raw accounts that conserve the total, with documented sampling/partition uncertainty; the whole total and its partition are alternatives, never additive exchanges. Existing W cards then represent non-additive origin subaccounts only, not invented separate exits. Genuinely separate outlets retain their own correct Waste identities and treatment; add/reselect an actual qualified mixed Waste only if that real outlet exists, never merely to satisfy six-leg grammar.

- Selected flow: Waste wooden dunnage
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_pack_p_service_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack_p_service_kg
- Sources: npca-qc-2026; ilcd-attributional-2010

###### Waste steel transport strap (`waste_strap`)

Actual gross steel strap waste; sale does not create automatic manufacturing credit. This specific atomic identity remains unbound; a compatible complete native record and provider must be confirmed before actual dataset use. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion. W only: actual full gross waste packaging including real removed old repair material and wet state; do not mix EO Product return or add contained moisture again. This is a conditional actual physical ledger exchange. Include it only when that specific external event actually occurs; unknown occurrence or quantity is not zero. Preserve full wet native-unit gross quantity V_i with event, gate, custody, material/state, original cohort and observation horizon, independently of every inherited/assigned burden vector. For this ledger-only display A_i is V_i, and calc_reference divides it once by the declared manufacture Q or original released cohort Q_o for actual postrelease services; never use a net shipment, economic/service share, second stock correction or original manufacture add-on to shrink/enlarge V_i. Internal transfers/reuse cancel at the combined gate and do not create external receipts or a second product Q. Whole wet P/I articles include their original water/material once; separate X only actual additional/removal events not already in other same-side flow terms, never stocks. Actual matching identity/condition and one upstream owner are required; otherwise add/reselect the actual atomic member before dataset completion. If several packaging origins physically leave in one collected mixed outlet, use one qualified complete Waste exchange for that actual mixture and one actual treatment/provider record. Keep independently measured per-origin W raw accounts that conserve the total, with documented sampling/partition uncertainty; the whole total and its partition are alternatives, never additive exchanges. Existing W cards then represent non-additive origin subaccounts only, not invented separate exits. Genuinely separate outlets retain their own correct Waste identities and treatment; add/reselect an actual qualified mixed Waste only if that real outlet exists, never merely to satisfy six-leg grammar.

- Selected flow: Waste steel transport strap
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_pack_p_service_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack_p_service_kg
- Sources: npca-qc-2026; ilcd-attributional-2010

###### Waste polyethylene transport film (`waste_film`)

Actual gross PE film waste with water/soil separately measured if attached. This specific atomic identity remains unbound; a compatible complete native record and provider must be confirmed before actual dataset use. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion. W only: actual full gross waste packaging including real removed old repair material and wet state; do not mix EO Product return or add contained moisture again. This is a conditional actual physical ledger exchange. Include it only when that specific external event actually occurs; unknown occurrence or quantity is not zero. Preserve full wet native-unit gross quantity V_i with event, gate, custody, material/state, original cohort and observation horizon, independently of every inherited/assigned burden vector. For this ledger-only display A_i is V_i, and calc_reference divides it once by the declared manufacture Q or original released cohort Q_o for actual postrelease services; never use a net shipment, economic/service share, second stock correction or original manufacture add-on to shrink/enlarge V_i. Internal transfers/reuse cancel at the combined gate and do not create external receipts or a second product Q. Whole wet P/I articles include their original water/material once; separate X only actual additional/removal events not already in other same-side flow terms, never stocks. Actual matching identity/condition and one upstream owner are required; otherwise add/reselect the actual atomic member before dataset completion. If several packaging origins physically leave in one collected mixed outlet, use one qualified complete Waste exchange for that actual mixture and one actual treatment/provider record. Keep independently measured per-origin W raw accounts that conserve the total, with documented sampling/partition uncertainty; the whole total and its partition are alternatives, never additive exchanges. Existing W cards then represent non-additive origin subaccounts only, not invented separate exits. Genuinely separate outlets retain their own correct Waste identities and treatment; add/reselect an actual qualified mixed Waste only if that real outlet exists, never merely to satisfy six-leg grammar.

- Selected flow: Waste polyethylene transport film
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_pack_p_service_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack_p_service_kg
- Sources: npca-qc-2026; ilcd-attributional-2010

###### Post-release rejected reinforced-concrete wall panel (`service_reject`)

Actual gross damaged/rejected original-cohort panel including steel, retained water, actual added repair material and losses. Never automatically subtract its manufacture because it is sold or discarded. This specific atomic identity remains unbound; a compatible complete native record and provider must be confirmed before actual dataset use. Quantity linkage: a_i is exactly the sole calc_reference result after calc_raw and calc_attribute on undivided raw records; per reference flow is its final display basis, not another division or an item conversion.

- Selected flow: Post-release rejected reinforced-concrete wall panel
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_service_p_service_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_service_p_service_kg
- Sources: npca-qc-2026; ilcd-attributional-2010

###### Liquid wooden dunnage conditioning effluent (`dunnage_water_effluent_out`)

Only actual separately removed liquid conditioning/cleaning effluent sent for external treatment. Record whole wet mass, water/solids/contamination and treatment independently; do not count moisture already in waste wood/bags or vapour again as effluent. A clean supplier-water return requires its own actual Product flow and a direct environmental discharge its own true species/medium Elementary flow; neither defaults to this row. Each water event has a unique process/gate/cohort identifier and is recorded once in the package-specific row or the general utility/species row. This decomposition does not create another water exchange. This is a conditional actual physical ledger exchange. Include it only when that specific external event actually occurs; unknown occurrence or quantity is not zero. Preserve full wet native-unit gross quantity V_i with event, gate, custody, material/state, original cohort and observation horizon, independently of every inherited/assigned burden vector. For this ledger-only display A_i is V_i, and calc_reference divides it once by the declared manufacture Q or original released cohort Q_o for actual postrelease services; never use a net shipment, economic/service share, second stock correction or original manufacture add-on to shrink/enlarge V_i. Internal transfers/reuse cancel at the combined gate and do not create external receipts or a second product Q. Whole wet P/I articles include their original water/material once; separate X only actual additional/removal events not already in other same-side flow terms, never stocks. Actual matching identity/condition and one upstream owner are required; otherwise add/reselect the actual atomic member before dataset completion.

- Selected flow: Liquid wooden dunnage conditioning effluent
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_pack_water_p_service_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack_water_p_service_kg
- Sources: npca-qc-2026; ilcd-attributional-2010


##### Elementary flows

###### wooden dunnage measured H2O-vapour loss (`dunnage_water_vapour_out`)

Only ordinary H2O vapour, CAS7732-18-5, actually evaporated/desorbed from the packaging to current unspecified air. Determine independently or by validated species-specific difference; never solve two source quantities from one residual. Not liquid drainage, heavy/tritiated water or assumed reaction water. Keep full gross mass and independently attributed environmental change. Each water event has a unique process/gate/cohort identifier and is recorded once in the package-specific row or the general utility/species row. This decomposition does not create another water exchange. This is a conditional actual physical ledger exchange. Include it only when that specific external event actually occurs; unknown occurrence or quantity is not zero. Preserve full wet native-unit gross quantity V_i with event, gate, custody, material/state, original cohort and observation horizon, independently of every inherited/assigned burden vector. For this ledger-only display A_i is V_i, and calc_reference divides it once by the declared manufacture Q or original released cohort Q_o for actual postrelease services; never use a net shipment, economic/service share, second stock correction or original manufacture add-on to shrink/enlarge V_i. Internal transfers/reuse cancel at the combined gate and do not create external receipts or a second product Q. Whole wet P/I articles include their original water/material once; separate X only actual additional/removal events not already in other same-side flow terms, never stocks. Actual matching identity/condition and one upstream owner are required; otherwise add/reselect the actual atomic member before dataset completion.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66; unit group 93a60a57-a4c8-11da-a746-0800200c9a66 / kg
- Amount rule: Use this row once-calculated a_i result; collect undivided raw quantities under cp_pack_water_p_service_kg.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack_water_p_service_kg
- Sources: npca-qc-2026; ilcd-attributional-2010


## 7. Allocation and Co-product Handling

These rules apply only to attributional cases in which allocation is justified by the study context; they are not a claim of complete ILCD conformance. Physical and burden ledgers remain distinct.

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_context | all processes | Use attributional modelling only where the study context justifies partitioning. First assign exclusive operations and exchanges by actual subdivision or virtual subdivision. For remaining shared exchanges identify exchange-specific determining physical causality, including actual service duration and the real limiting physical driver; mass alone is not universally causal. Only genuinely remaining common process burdens may use same-period actual market values at the same process gate/state. Record reasons, fractions and conservation separately by exchange; no free physical/economic choice, fixed proportions or automatic avoided-production credit. | ilcd-attributional-2010 |
| a_failures | all processes | Ordinary failed products, specimens, offcuts and manufacturing waste retain their associated production/testing and actual treatment burden even when sold or sent offsite. A vector transfer T_other requires a real independent other cohort/function and a justified allocation or burden-handover decision, exactly once; sale/disposal alone is insufficient. Physical gross mass remains complete and unscaled. | ilcd-attributional-2010 |
| a_normalize | all inventory rows | Keep each inherited exchange vector in its native extensive unit. Resolve attribution and raw unit/rate conversions before calc_reference. Manufacturing A_i=B_open_i+B_current_i-B_close_i-T_other_i; B_close contains raw/WIP and unused/unassigned stores only, never first-released closingFG. If B_current is already stock-corrected, do not subtract the same stock again. Services A_i include actual performed original-cohort service; only unused/unassigned future service/charge carries. Keep a separate full physical quantity and every inherited exchange vector for EACH raw, WIP and non-WIP stock, including packaging, assets, parts and installed fluids; a stock quantity is not its burden vector. For a ledger-only physical FG/package/waste/asset/carrier-water-return movement, A_i denotes that full gross native-unit leg for display, not an allocated service vector: never multiply it by an economic/service share, add original manufacturing burden to it or apply a second stock correction. Actual assigned service and upstream burdens keep their independent vectors; normalize each declared quantity/vector once using its proper original cohort Q_i. Use Q_i=Q for manufacture and Q_i=Q_o for original-cohort service; calc_reference alone executes A_i/Q_i once. Preserve Q_i=0 without a unit result. | ilcd-attributional-2010 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_raw_p_mix_kg | p_mix | cement; sand; gravel; admixture | foreground_record | lot and supplier documents; opening/closing full wet stock; gross receipts/returns; measured formulation amount; assay/carrier-water subledger; actual batch withdrawals; loss/rework; inherited exchange vectors; stock-correction flag | Use calibrated scales and traceable actual batch/supply records; collect each whole preparation once and independently measured composition/stock. Retain unnormalized event/cohort records and inherited vectors in the listed unit; calc_raw then calc_attribute prepare A_i; calc_reference alone gives per reference flow. Do not collect an already divided value. The aggregation_rule field declares only the final per-reference display basis of that same single result. | kg | Each actual event and period stocktake | Complete study period plus opening carry-in; original-cohort service horizon explicit | Declared manufacturer/site and matching configuration/cohort | per 1 kg reference flow | Calibration; source records; traceable identifiers; raw-unit/state evidence; reconciliation and unresolved values |
| cp_water_p_mix_kg | p_mix | mix_water | foreground_record | water leg and source; meter start/end or actual rate-time series; integrated-volume flag; density/state evidence; external/internal owner; absorption/phase change; full wet stocks; X_in/X_out overlap identifiers; inherited vector | Meter each actual water leg and determine actual density/state independently when converting volume. Keep real influx plus full closing wet mass; X corrects other overlapping terms only. Retain unnormalized event/cohort records and inherited vectors in the listed unit; calc_raw then calc_attribute prepare A_i; calc_reference alone gives per reference flow. Do not collect an already divided value. The aggregation_rule field declares only the final per-reference display basis of that same single result. | kg | Each actual event and period stocktake | Complete study period plus opening carry-in; original-cohort service horizon explicit | Declared manufacturer/site and matching configuration/cohort | per 1 kg reference flow | Calibration; source records; traceable identifiers; raw-unit/state evidence; reconciliation and unresolved values |
| cp_raw_p_form_kg | p_form | rebar; tie_wire; lifting_anchor; connection_plate; spacer; release_agent | foreground_record | lot and supplier documents; opening/closing full wet stock; gross receipts/returns; measured formulation amount; assay/carrier-water subledger; actual batch withdrawals; loss/rework; inherited exchange vectors; stock-correction flag | Use calibrated scales and traceable actual batch/supply records; collect each whole preparation once and independently measured composition/stock. Retain unnormalized event/cohort records and inherited vectors in the listed unit; calc_raw then calc_attribute prepare A_i; calc_reference alone gives per reference flow. Do not collect an already divided value. The aggregation_rule field declares only the final per-reference display basis of that same single result. | kg | Each actual event and period stocktake | Complete study period plus opening carry-in; original-cohort service horizon explicit | Declared manufacturer/site and matching configuration/cohort | per 1 kg reference flow | Calibration; source records; traceable identifiers; raw-unit/state evidence; reconciliation and unresolved values |
| cp_water_p_cure_kg | p_cure | curing_water | foreground_record | water leg and source; meter start/end or actual rate-time series; integrated-volume flag; density/state evidence; external/internal owner; absorption/phase change; full wet stocks; X_in/X_out overlap identifiers; inherited vector | Meter each actual water leg and determine actual density/state independently when converting volume. Keep real influx plus full closing wet mass; X corrects other overlapping terms only. Retain unnormalized event/cohort records and inherited vectors in the listed unit; calc_raw then calc_attribute prepare A_i; calc_reference alone gives per reference flow. Do not collect an already divided value. The aggregation_rule field declares only the final per-reference display basis of that same single result. | kg | Each actual event and period stocktake | Complete study period plus opening carry-in; original-cohort service horizon explicit | Declared manufacturer/site and matching configuration/cohort | per 1 kg reference flow | Calibration; source records; traceable identifiers; raw-unit/state evidence; reconciliation and unresolved values |
| cp_assets_p_cure_kg | p_cure | curing_sheet | foreground_record | asset/part/fluid id; configuration; measured net mass if needed; new/old opening/closing/in-service stocks; gross acquisitions/external returns; actual repair additions/removals; installed oil/water; actual service and unassigned service vectors; retirement | Inventory physical assets independently; retain wet stock and actual new/removed parts/water/fluid legs. Allocate actual current service from measured usage and causal constraints without a fixed lifetime or mass. Retain unnormalized event/cohort records and inherited vectors in the listed unit; calc_raw then calc_attribute prepare A_i; calc_reference alone gives per reference flow. Do not collect an already divided value. The aggregation_rule field declares only the final per-reference display basis of that same single result. | kg | Each actual event and period stocktake | Complete study period plus opening carry-in; original-cohort service horizon explicit | Declared manufacturer/site and matching configuration/cohort | per 1 kg reference flow | Calibration; source records; traceable identifiers; raw-unit/state evidence; reconciliation and unresolved values |
| cp_heat_p_cure_kg | p_cure | steam; condensate | foreground_record | carrier kg; pressure/temperature; steam quality; measured enthalpy in/out; delivered heat MJ; condensate mass/state; supplier water-energy convention; actual heat meters; stocks and loss | Use actual heat/carrier meters and traceable state/enthalpy evidence; separate provider energy from physical water subledger; one complete upstream owner. Retain unnormalized event/cohort records and inherited vectors in the listed unit; calc_raw then calc_attribute prepare A_i; calc_reference alone gives per reference flow. Do not collect an already divided value. The aggregation_rule field declares only the final per-reference display basis of that same single result. | kg | Each actual event and period stocktake | Complete study period plus opening carry-in; original-cohort service horizon explicit | Declared manufacturer/site and matching configuration/cohort | per 1 kg reference flow | Calibration; source records; traceable identifiers; raw-unit/state evidence; reconciliation and unresolved values |
| cp_heat_p_cure_mj | p_cure | purchased_heat | foreground_record | carrier kg; pressure/temperature; steam quality; measured enthalpy in/out; delivered heat MJ; condensate mass/state; supplier water-energy convention; actual heat meters; stocks and loss | Use actual heat/carrier meters and traceable state/enthalpy evidence; separate provider energy from physical water subledger; one complete upstream owner. Retain unnormalized event/cohort records and inherited vectors in the listed unit; calc_raw then calc_attribute prepare A_i; calc_reference alone gives per reference flow. Do not collect an already divided value. The aggregation_rule field declares only the final per-reference display basis of that same single result. | MJ | Each actual event and period stocktake | Complete study period plus opening carry-in; original-cohort service horizon explicit | Declared manufacturer/site and matching configuration/cohort | per 1 kg reference flow | Calibration; source records; traceable identifiers; raw-unit/state evidence; reconciliation and unresolved values |
| cp_raw_p_release_kg | p_release | repair_mortar | foreground_record | lot and supplier documents; opening/closing full wet stock; gross receipts/returns; measured formulation amount; assay/carrier-water subledger; actual batch withdrawals; loss/rework; inherited exchange vectors; stock-correction flag; actual authorization/result and hold/rejection/disposition; manufacture Q or original Q_o and observed H; disjoint FG/repair-WIP custody; all actual failed/unapproved material/water/energy/loss/waste records | Use calibrated scales and traceable actual batch/supply records; collect each whole preparation once and independently measured composition/stock. Retain unnormalized event/cohort records and inherited vectors in the listed unit; calc_raw then calc_attribute prepare A_i; calc_reference alone gives per reference flow. Do not collect an already divided value. The aggregation_rule field declares only the final per-reference display basis of that same single result. Collect every actually incurred input, water, energy, loss, waste and burden from unauthorized/unapproved, failed or rejected work as well as authorized work. Permission, configuration-specific postwork tests and acceptance govern authorization, continuing qualification and actual hold/rejection/waste disposition only; they never erase actual flows or loads, create a new Q, or presume restoration. Before first release retain manufacture Q; after release retain the original cohort Q_o and actual observed horizon H. Natural storage/handling humidity needs no work permission. | kg | Each actual event and period stocktake | Complete study period plus opening carry-in; original-cohort service horizon explicit | Declared manufacturer/site and matching configuration/cohort | per 1 kg reference flow | Calibration; source records; traceable identifiers; raw-unit/state evidence; reconciliation and unresolved values |
| cp_water_p_release_kg | p_release | repair_water | foreground_record | water leg and source; meter start/end or actual rate-time series; integrated-volume flag; density/state evidence; external/internal owner; absorption/phase change; full wet stocks; X_in/X_out overlap identifiers; inherited vector; actual authorization/result and hold/rejection/disposition; manufacture Q or original Q_o and observed H; disjoint FG/repair-WIP custody; all actual failed/unapproved material/water/energy/loss/waste records | Meter each actual water leg and determine actual density/state independently when converting volume. Keep real influx plus full closing wet mass; X corrects other overlapping terms only. Retain unnormalized event/cohort records and inherited vectors in the listed unit; calc_raw then calc_attribute prepare A_i; calc_reference alone gives per reference flow. Do not collect an already divided value. The aggregation_rule field declares only the final per-reference display basis of that same single result. Collect every actually incurred input, water, energy, loss, waste and burden from unauthorized/unapproved, failed or rejected work as well as authorized work. Permission, configuration-specific postwork tests and acceptance govern authorization, continuing qualification and actual hold/rejection/waste disposition only; they never erase actual flows or loads, create a new Q, or presume restoration. Before first release retain manufacture Q; after release retain the original cohort Q_o and actual observed horizon H. Natural storage/handling humidity needs no work permission. | kg | Each actual event and period stocktake | Complete study period plus opening carry-in; original-cohort service horizon explicit | Declared manufacturer/site and matching configuration/cohort | per 1 kg reference flow | Calibration; source records; traceable identifiers; raw-unit/state evidence; reconciliation and unresolved values |
| cp_water_p_util_kg | p_util | cleaning_water; cooling_water; cooling_return | foreground_record | water leg and source; meter start/end or actual rate-time series; integrated-volume flag; density/state evidence; external/internal owner; absorption/phase change; full wet stocks; X_in/X_out overlap identifiers; inherited vector | Meter each actual water leg and determine actual density/state independently when converting volume. Keep real influx plus full closing wet mass; X corrects other overlapping terms only. Retain unnormalized event/cohort records and inherited vectors in the listed unit; calc_raw then calc_attribute prepare A_i; calc_reference alone gives per reference flow. Do not collect an already divided value. The aggregation_rule field declares only the final per-reference display basis of that same single result. | kg | Each actual event and period stocktake | Complete study period plus opening carry-in; original-cohort service horizon explicit | Declared manufacturer/site and matching configuration/cohort | per 1 kg reference flow | Calibration; source records; traceable identifiers; raw-unit/state evidence; reconciliation and unresolved values |
| cp_energy_p_util_mj | p_util | electricity | foreground_record | meter readings; native raw unit; rate/integrated flag; time interval; equipment/mode; actual fuel stocks and formulation; density/heating-value evidence; generation/import split; allocation vector | Submeter or use documented exclusive/causal allocation of real bills/tank records; include failures/start-stop/idle/cleanup. Convert kWh toMJ once; other fuel conversions require independent evidence. Retain unnormalized event/cohort records and inherited vectors in the listed unit; calc_raw then calc_attribute prepare A_i; calc_reference alone gives per reference flow. Do not collect an already divided value. The aggregation_rule field declares only the final per-reference display basis of that same single result. | MJ | Each actual event and period stocktake | Complete study period plus opening carry-in; original-cohort service horizon explicit | Declared manufacturer/site and matching configuration/cohort | per 1 kg reference flow | Calibration; source records; traceable identifiers; raw-unit/state evidence; reconciliation and unresolved values |
| cp_energy_p_util_kg | p_util | diesel | foreground_record | meter readings; native raw unit; rate/integrated flag; time interval; equipment/mode; actual fuel stocks and formulation; density/heating-value evidence; generation/import split; allocation vector | Submeter or use documented exclusive/causal allocation of real bills/tank records; include failures/start-stop/idle/cleanup. Convert kWh toMJ once; other fuel conversions require independent evidence. Retain unnormalized event/cohort records and inherited vectors in the listed unit; calc_raw then calc_attribute prepare A_i; calc_reference alone gives per reference flow. Do not collect an already divided value. The aggregation_rule field declares only the final per-reference display basis of that same single result. | kg | Each actual event and period stocktake | Complete study period plus opening carry-in; original-cohort service horizon explicit | Declared manufacturer/site and matching configuration/cohort | per 1 kg reference flow | Calibration; source records; traceable identifiers; raw-unit/state evidence; reconciliation and unresolved values |
| cp_energy_p_util_m3 | p_util | natural_gas | foreground_record | meter readings; native raw unit; rate/integrated flag; time interval; equipment/mode; actual fuel stocks and formulation; density/heating-value evidence; generation/import split; allocation vector | Submeter or use documented exclusive/causal allocation of real bills/tank records; include failures/start-stop/idle/cleanup. Convert kWh toMJ once; other fuel conversions require independent evidence. Retain unnormalized event/cohort records and inherited vectors in the listed unit; calc_raw then calc_attribute prepare A_i; calc_reference alone gives per reference flow. Do not collect an already divided value. The aggregation_rule field declares only the final per-reference display basis of that same single result. | m3 | Each actual event and period stocktake | Complete study period plus opening carry-in; original-cohort service horizon explicit | Declared manufacturer/site and matching configuration/cohort | per 1 kg reference flow | Calibration; source records; traceable identifiers; raw-unit/state evidence; reconciliation and unresolved values |
| cp_assets_p_assets_kg | p_assets | hydraulic_oil; mould; mixer; repair_plate; removed_plate; spent_oil; retired_mould; retired_mixer | foreground_record | asset/part/fluid id; configuration; measured net mass if needed; new/old opening/closing/in-service stocks; gross acquisitions/external returns; actual repair additions/removals; installed oil/water; actual service and unassigned service vectors; retirement | Inventory physical assets independently; retain wet stock and actual new/removed parts/water/fluid legs. Allocate actual current service from measured usage and causal constraints without a fixed lifetime or mass. Retain unnormalized event/cohort records and inherited vectors in the listed unit; calc_raw then calc_attribute prepare A_i; calc_reference alone gives per reference flow. Do not collect an already divided value. The aggregation_rule field declares only the final per-reference display basis of that same single result. | kg | Each actual event and period stocktake | Complete study period plus opening carry-in; original-cohort service horizon explicit | Declared manufacturer/site and matching configuration/cohort | per 1 kg reference flow | Calibration; source records; traceable identifiers; raw-unit/state evidence; reconciliation and unresolved values |
| cp_outputs_p_form_kg | p_form | steel_offcut | foreground_record | event/batch and original cohort; whole gross output; solids/water/steel composition; failure/specimen reason; recovery/reuse path; actual transport/treatment; burdens retained/transferred with decision; opening/closing stock | Weigh and characterize each actual output independently; keep true treatment burden and full failed-product vector. Sale/offsite routing alone does not establish T_other. Retain unnormalized event/cohort records and inherited vectors in the listed unit; calc_raw then calc_attribute prepare A_i; calc_reference alone gives per reference flow. Do not collect an already divided value. The aggregation_rule field declares only the final per-reference display basis of that same single result. | kg | Each actual event and period stocktake | Complete study period plus opening carry-in; original-cohort service horizon explicit | Declared manufacturer/site and matching configuration/cohort | per 1 kg reference flow | Calibration; source records; traceable identifiers; raw-unit/state evidence; reconciliation and unresolved values |
| cp_outputs_p_mix_kg | p_mix | fresh_concrete_waste | foreground_record | event/batch and original cohort; whole gross output; solids/water/steel composition; failure/specimen reason; recovery/reuse path; actual transport/treatment; burdens retained/transferred with decision; opening/closing stock | Weigh and characterize each actual output independently; keep true treatment burden and full failed-product vector. Sale/offsite routing alone does not establish T_other. Retain unnormalized event/cohort records and inherited vectors in the listed unit; calc_raw then calc_attribute prepare A_i; calc_reference alone gives per reference flow. Do not collect an already divided value. The aggregation_rule field declares only the final per-reference display basis of that same single result. | kg | Each actual event and period stocktake | Complete study period plus opening carry-in; original-cohort service horizon explicit | Declared manufacturer/site and matching configuration/cohort | per 1 kg reference flow | Calibration; source records; traceable identifiers; raw-unit/state evidence; reconciliation and unresolved values |
| cp_outputs_p_release_kg | p_release | rejected_panel; test_specimen | foreground_record | event/batch and original cohort; whole gross output; solids/water/steel composition; failure/specimen reason; recovery/reuse path; actual transport/treatment; burdens retained/transferred with decision; opening/closing stock | Weigh and characterize each actual output independently; keep true treatment burden and full failed-product vector. Sale/offsite routing alone does not establish T_other. Retain unnormalized event/cohort records and inherited vectors in the listed unit; calc_raw then calc_attribute prepare A_i; calc_reference alone gives per reference flow. Do not collect an already divided value. The aggregation_rule field declares only the final per-reference display basis of that same single result. | kg | Each actual event and period stocktake | Complete study period plus opening carry-in; original-cohort service horizon explicit | Declared manufacturer/site and matching configuration/cohort | per 1 kg reference flow | Calibration; source records; traceable identifiers; raw-unit/state evidence; reconciliation and unresolved values |
| cp_outputs_p_util_kg | p_util | concrete_sludge; washout_effluent; captured_concrete_dust | foreground_record | event/batch and original cohort; whole gross output; solids/water/steel composition; failure/specimen reason; recovery/reuse path; actual transport/treatment; burdens retained/transferred with decision; opening/closing stock | Weigh and characterize each actual output independently; keep true treatment burden and full failed-product vector. Sale/offsite routing alone does not establish T_other. Retain unnormalized event/cohort records and inherited vectors in the listed unit; calc_raw then calc_attribute prepare A_i; calc_reference alone gives per reference flow. Do not collect an already divided value. The aggregation_rule field declares only the final per-reference display basis of that same single result. | kg | Each actual event and period stocktake | Complete study period plus opening carry-in; original-cohort service horizon explicit | Declared manufacturer/site and matching configuration/cohort | per 1 kg reference flow | Calibration; source records; traceable identifiers; raw-unit/state evidence; reconciliation and unresolved values |
| cp_release | p_release | finished_panel | foreground_record | panel id; approved drawing/configuration; calibrated net mass; water state/age; reinforcement/inserts; first-release timestamp and unique event; actual tests/permissions; complete raw/WIP vector; original cohortQ_o | Weigh the complete accepted panel with calibrated scale/traceable same-configuration records, excluding packaging; reconcile actual governing QC and unique first release. Sum measured newly first-released net mass once to formQ; preserve originalQ_o for service. No shipment/return/reinspection count inQ. The aggregation_rule field declares only the final per-reference display basis of that same single result. | kg | Each actual event and period stocktake | Complete study period plus opening carry-in; original-cohort service horizon explicit | Declared manufacturer/site and matching configuration/cohort | per 1 kg reference flow | Calibration; source records; traceable identifiers; raw-unit/state evidence; reconciliation and unresolved values |
| cp_species_p_util_kg | p_util | air_n2in; air_o2in; air_water_in; air_argon_in; air_co2_in; nitrogen_out; oxygen_out; argon_out; ambient_co2_out; water_vapour; co2; co; nitrogen_monoxide; nitrogen_dioxide; sulfur_dioxide; methane; silica_air; liquid_water_discharge | foreground_record | species/CAS and medium/destination; method and limits; actual concentration and gas/liquid state; flow rate-time series or integrated volume; actual density/composition; wet/dry basis; carbon origin; inlet/outlet/background; retained water/reaction/element subledger | Measure actual species independently; do not solve several unknown emissions from a single mass residual or total indicator. Retain gross physical pass-through and generated species without double counting aggregate air/wastewater. Retain unnormalized event/cohort records and inherited vectors in the listed unit; calc_raw then calc_attribute prepare A_i; calc_reference alone gives per reference flow. Do not collect an already divided value. The aggregation_rule field declares only the final per-reference display basis of that same single result. | kg | Each actual event and period stocktake | Complete study period plus opening carry-in; original-cohort service horizon explicit | Declared manufacturer/site and matching configuration/cohort | per 1 kg reference flow | Calibration; source records; traceable identifiers; raw-unit/state evidence; reconciliation and unresolved values |
| cp_service_p_service_mj | p_service | service_electricity | foreground_record | original release cohort and Q_o records; observed horizon; operation/performed-service event; grossG/R masses and state; original dispatch identifier and D_rev only if separate net-delivery account; incremental materials/water/energy; manufacturer permission/posttests/acceptance/disposition; unused/unassigned charge; actual authorization/result and hold/rejection/disposition; manufacture Q or original Q_o and observed H; disjoint FG/repair-WIP custody; all actual failed/unapproved material/water/energy/loss/waste records | Collect actual incremental service only for the original cohort; keep performed service despite closingFG. Returns/reinspection do not create Q and repairability is not assumed. Retain unnormalized event/cohort records and inherited vectors in the listed unit; calc_raw then calc_attribute prepare A_i; calc_reference alone gives per reference flow. Do not collect an already divided value. The aggregation_rule field declares only the final per-reference display basis of that same single result. Collect every actually incurred input, water, energy, loss, waste and burden from unauthorized/unapproved, failed or rejected work as well as authorized work. Permission, configuration-specific postwork tests and acceptance govern authorization, continuing qualification and actual hold/rejection/waste disposition only; they never erase actual flows or loads, create a new Q, or presume restoration. Before first release retain manufacture Q; after release retain the original cohort Q_o and actual observed horizon H. Natural storage/handling humidity needs no work permission. | MJ | Each actual event and period stocktake | Complete study period plus opening carry-in; original-cohort service horizon explicit | Declared manufacturer/site and matching configuration/cohort | per 1 kg reference flow | Calibration; source records; traceable identifiers; raw-unit/state evidence; reconciliation and unresolved values |
| cp_service_p_service_kg | p_service | service_diesel; service_mortar; service_water; service_reject | foreground_record | original release cohort and Q_o records; observed horizon; operation/performed-service event; grossG/R masses and state; original dispatch identifier and D_rev only if separate net-delivery account; incremental materials/water/energy; manufacturer permission/posttests/acceptance/disposition; unused/unassigned charge; actual authorization/result and hold/rejection/disposition; manufacture Q or original Q_o and observed H; disjoint FG/repair-WIP custody; all actual failed/unapproved material/water/energy/loss/waste records | Collect actual incremental service only for the original cohort; keep performed service despite closingFG. Returns/reinspection do not create Q and repairability is not assumed. Retain unnormalized event/cohort records and inherited vectors in the listed unit; calc_raw then calc_attribute prepare A_i; calc_reference alone gives per reference flow. Do not collect an already divided value. The aggregation_rule field declares only the final per-reference display basis of that same single result. Collect every actually incurred input, water, energy, loss, waste and burden from unauthorized/unapproved, failed or rejected work as well as authorized work. Permission, configuration-specific postwork tests and acceptance govern authorization, continuing qualification and actual hold/rejection/waste disposition only; they never erase actual flows or loads, create a new Q, or presume restoration. Before first release retain manufacture Q; after release retain the original cohort Q_o and actual observed horizon H. Natural storage/handling humidity needs no work permission. | kg | Each actual event and period stocktake | Complete study period plus opening carry-in; original-cohort service horizon explicit | Declared manufacturer/site and matching configuration/cohort | per 1 kg reference flow | Calibration; source records; traceable identifiers; raw-unit/state evidence; reconciliation and unresolved values |
| cp_pack_p_service_kg | p_service | dunnage; steel_strap; shipping_film; waste_dunnage; waste_strap; waste_film; dunnage_i; dunnage_er; dunnage_s; dunnage_eo; steel_strap_i; steel_strap_er; steel_strap_s; steel_strap_eo; shipping_film_i; shipping_film_er; shipping_film_s; shipping_film_eo; supplier_sack_s; supplier_sack_eo | foreground_record | material and one supplier-upstream owner; opening/closing empty/WIP-attached/FG-attached/reusable full stocks; P; I; ER; S with gross shipments; EO; W; internal reuse; measured composition and water; independently measured X_in/X_out added/removed water/material events, occurrence/state/species and actual atomic-flow ids; overlap only with other same-side flow terms, not stocks; whole wet article/component bridge and paired internal handoff IDs; actual outlet ID; measured whole mixed total and independent per-origin W raw quantities, non-additive partition; one qualified receiver/treatment owner ; packaging P/I/ER origin and payment/non-purchase evidence; same-item prior outward ID; inherited service owner/vector | Weigh each material and all six gross legs independently; keep supplier-included physical ingress and one upstream owner. De-duplicate overlap only, never remove real influx because of closing stock. Include independently measured actual X_in on the incoming side and X_out on the outgoing side, with complete wet closing stocks; require specific actual added/removed material/water flows and record unknowns before dataset completion. Whole-article receipts include their constituents once. Retain unnormalized event/cohort records and inherited vectors in the listed unit; calc_raw then calc_attribute prepare A_i; calc_reference alone gives per reference flow. Do not collect an already divided value. The aggregation_rule field declares only the final per-reference display basis of that same single result. Whole wet supplied articles include their original paper/wood/metal/polymer/adhesive/coating/liner and water once as measured child accounts. Truly separately purchased onsite components are independent external supplies only when disjoint from the whole receipt, or reconciled through a measured component-to-assembled-article bridge with matched internal handoff cancellation and one upstream owner. Never add the complete assembled tare plus those same constituent supplies as two receipts or stocks. No component consumption, route or density is invented. If several packaging origins physically leave in one collected mixed outlet, use one qualified complete Waste exchange for that actual mixture and one actual treatment/provider record. Keep independently measured per-origin W raw accounts that conserve the total, with documented sampling/partition uncertainty; the whole total and its partition are alternatives, never additive exchanges. Existing W cards then represent non-additive origin subaccounts only, not invented separate exits. Genuinely separate outlets retain their own correct Waste identities and treatment; add/reselect an actual qualified mixed Waste only if that real outlet exists, never merely to satisfy six-leg grammar.  For packaging receipts apply packaging_receipt_basis; standalone non-purchase is I, never a fabricated ER or X. | kg | Each actual event and period stocktake | Complete study period plus opening carry-in; original-cohort service horizon explicit | Declared manufacturer/site and matching configuration/cohort | per 1 kg reference flow | Calibration; source records; traceable identifiers; raw-unit/state evidence; reconciliation and unresolved values |
| cp_pack_p_mix_kg | p_mix | supplier_sack; supplier_sack_i; supplier_sack_er | foreground_record | material and one supplier-upstream owner; opening/closing empty/WIP-attached/FG-attached/reusable full stocks; P; I; ER; S with gross shipments; EO; W; internal reuse; measured composition and water; independently measured X_in/X_out added/removed water/material events, occurrence/state/species and actual atomic-flow ids; overlap only with other same-side flow terms, not stocks; whole wet article/component bridge and paired internal handoff IDs; actual outlet ID; measured whole mixed total and independent per-origin W raw quantities, non-additive partition; one qualified receiver/treatment owner ; packaging P/I/ER origin and payment/non-purchase evidence; same-item prior outward ID; inherited service owner/vector | Weigh each material and all six gross legs independently; keep supplier-included physical ingress and one upstream owner. De-duplicate overlap only, never remove real influx because of closing stock. Include independently measured actual X_in on the incoming side and X_out on the outgoing side, with complete wet closing stocks; require specific actual added/removed material/water flows and record unknowns before dataset completion. Whole-article receipts include their constituents once. Retain unnormalized event/cohort records and inherited vectors in the listed unit; calc_raw then calc_attribute prepare A_i; calc_reference alone gives per reference flow. Do not collect an already divided value. The aggregation_rule field declares only the final per-reference display basis of that same single result. Whole wet supplied articles include their original paper/wood/metal/polymer/adhesive/coating/liner and water once as measured child accounts. Truly separately purchased onsite components are independent external supplies only when disjoint from the whole receipt, or reconciled through a measured component-to-assembled-article bridge with matched internal handoff cancellation and one upstream owner. Never add the complete assembled tare plus those same constituent supplies as two receipts or stocks. No component consumption, route or density is invented. If several packaging origins physically leave in one collected mixed outlet, use one qualified complete Waste exchange for that actual mixture and one actual treatment/provider record. Keep independently measured per-origin W raw accounts that conserve the total, with documented sampling/partition uncertainty; the whole total and its partition are alternatives, never additive exchanges. Existing W cards then represent non-additive origin subaccounts only, not invented separate exits. Genuinely separate outlets retain their own correct Waste identities and treatment; add/reselect an actual qualified mixed Waste only if that real outlet exists, never merely to satisfy six-leg grammar.  For packaging receipts apply packaging_receipt_basis; standalone non-purchase is I, never a fabricated ER or X. | kg | Each actual event and period stocktake | Complete study period plus opening carry-in; original-cohort service horizon explicit | Declared manufacturer/site and matching configuration/cohort | per 1 kg reference flow | Calibration; source records; traceable identifiers; raw-unit/state evidence; reconciliation and unresolved values |
| cp_pack_p_util_kg | p_util | waste_sack | foreground_record | material and one supplier-upstream owner; opening/closing empty/WIP-attached/FG-attached/reusable full stocks; P; I; ER; S with gross shipments; EO; W; internal reuse; measured composition and water; independently measured X_in/X_out added/removed water/material events, occurrence/state/species and actual atomic-flow ids; overlap only with other same-side flow terms, not stocks | Weigh each material and all six gross legs independently; keep supplier-included physical ingress and one upstream owner. De-duplicate overlap only, never remove real influx because of closing stock. Include independently measured actual X_in on the incoming side and X_out on the outgoing side, with complete wet closing stocks; require specific actual added/removed material/water flows and record unknowns before dataset completion. Whole-article receipts include their constituents once. Retain unnormalized event/cohort records and inherited vectors in the listed unit; calc_raw then calc_attribute prepare A_i; calc_reference alone gives per reference flow. Do not collect an already divided value. The aggregation_rule field declares only the final per-reference display basis of that same single result. | kg | Each actual event and period stocktake | Complete study period plus opening carry-in; original-cohort service horizon explicit | Declared manufacturer/site and matching configuration/cohort | per 1 kg reference flow | Calibration; source records; traceable identifiers; raw-unit/state evidence; reconciliation and unresolved values |
| cp_pack_water_p_service_kg | p_service | dunnage_water_liquid_in; dunnage_water_humidity_in; dunnage_water_vapour_out; dunnage_water_effluent_out | foreground_record | unique event/gate/original cohort and horizon; actual permission/work/disposition; phase/origin/destination; independent complete wet mass and water/solids/species; all raw units/rate-integrated flags and measured density evidence; whole P/I contained quantities and same-side overlapping flow ids; full opening/closing wet stocks; every inherited exchange vector; actual authorization/result and hold/rejection/disposition; manufacture Q or original Q_o and observed H; disjoint FG/repair-WIP custody; all actual failed/unapproved material/water/energy/loss/waste records | Independently meter actual separate additions/removals/uptake/evaporation/liquid effluent; do not fit multiple unknowns from a stock residual. Whole wet receipts include their original water once. Use each unique event once in this specific row or a general species/utility row; deduplicate only other same-side flow terms, not retained influx or full wet closing stock. Missing data remain unknown; absence requires evidence. Retain unnormalized event/cohort records and inherited vectors in the listed unit; calc_raw then calc_attribute prepare A_i; calc_reference alone gives per reference flow. Do not collect an already divided value. aggregation_rule declares only the final display basis of that same result. Collect every actually incurred input, water, energy, loss, waste and burden from unauthorized/unapproved, failed or rejected work as well as authorized work. Permission, configuration-specific postwork tests and acceptance govern authorization, continuing qualification and actual hold/rejection/waste disposition only; they never erase actual flows or loads, create a new Q, or presume restoration. Before first release retain manufacture Q; after release retain the original cohort Q_o and actual observed horizon H. Natural storage/handling humidity needs no work permission. | kg | Each actual event and period stocktake | Complete study period plus opening carry-in; original-cohort service horizon explicit | Declared manufacturer/site and matching configuration/cohort | per 1 kg reference flow | Calibration; source records; traceable identifiers; raw-unit/state evidence; reconciliation and unresolved values |
| cp_pack_water_p_mix_kg | p_mix | supplier_sack_water_liquid_in; supplier_sack_water_humidity_in | foreground_record | unique event/gate/original cohort and horizon; actual permission/work/disposition; phase/origin/destination; independent complete wet mass and water/solids/species; all raw units/rate-integrated flags and measured density evidence; whole P/I contained quantities and same-side overlapping flow ids; full opening/closing wet stocks; every inherited exchange vector; actual authorization/result and hold/rejection/disposition; manufacture Q or original Q_o and observed H; disjoint FG/repair-WIP custody; all actual failed/unapproved material/water/energy/loss/waste records | Independently meter actual separate additions/removals/uptake/evaporation/liquid effluent; do not fit multiple unknowns from a stock residual. Whole wet receipts include their original water once. Use each unique event once in this specific row or a general species/utility row; deduplicate only other same-side flow terms, not retained influx or full wet closing stock. Missing data remain unknown; absence requires evidence. Retain unnormalized event/cohort records and inherited vectors in the listed unit; calc_raw then calc_attribute prepare A_i; calc_reference alone gives per reference flow. Do not collect an already divided value. aggregation_rule declares only the final display basis of that same result. Collect every actually incurred input, water, energy, loss, waste and burden from unauthorized/unapproved, failed or rejected work as well as authorized work. Permission, configuration-specific postwork tests and acceptance govern authorization, continuing qualification and actual hold/rejection/waste disposition only; they never erase actual flows or loads, create a new Q, or presume restoration. Before first release retain manufacture Q; after release retain the original cohort Q_o and actual observed horizon H. Natural storage/handling humidity needs no work permission. | kg | Each actual event and period stocktake | Complete study period plus opening carry-in; original-cohort service horizon explicit | Declared manufacturer/site and matching configuration/cohort | per 1 kg reference flow | Calibration; source records; traceable identifiers; raw-unit/state evidence; reconciliation and unresolved values |
| cp_pack_water_p_util_kg | p_util | supplier_sack_water_vapour_out; supplier_sack_water_effluent_out | foreground_record | unique event/gate/original cohort and horizon; actual permission/work/disposition; phase/origin/destination; independent complete wet mass and water/solids/species; all raw units/rate-integrated flags and measured density evidence; whole P/I contained quantities and same-side overlapping flow ids; full opening/closing wet stocks; every inherited exchange vector; actual authorization/result and hold/rejection/disposition; manufacture Q or original Q_o and observed H; disjoint FG/repair-WIP custody; all actual failed/unapproved material/water/energy/loss/waste records | Independently meter actual separate additions/removals/uptake/evaporation/liquid effluent; do not fit multiple unknowns from a stock residual. Whole wet receipts include their original water once. Use each unique event once in this specific row or a general species/utility row; deduplicate only other same-side flow terms, not retained influx or full wet closing stock. Missing data remain unknown; absence requires evidence. Retain unnormalized event/cohort records and inherited vectors in the listed unit; calc_raw then calc_attribute prepare A_i; calc_reference alone gives per reference flow. Do not collect an already divided value. aggregation_rule declares only the final display basis of that same result. Collect every actually incurred input, water, energy, loss, waste and burden from unauthorized/unapproved, failed or rejected work as well as authorized work. Permission, configuration-specific postwork tests and acceptance govern authorization, continuing qualification and actual hold/rejection/waste disposition only; they never erase actual flows or loads, create a new Q, or presume restoration. Before first release retain manufacture Q; after release retain the original cohort Q_o and actual observed horizon H. Natural storage/handling humidity needs no work permission. | kg | Each actual event and period stocktake | Complete study period plus opening carry-in; original-cohort service horizon explicit | Declared manufacturer/site and matching configuration/cohort | per 1 kg reference flow | Calibration; source records; traceable identifiers; raw-unit/state evidence; reconciliation and unresolved values |


### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_raw | all inventory rows | Convert raw_i into the row native extensive unit before any product division. kWh*3.6=MJ once; actual rates integrate over their recorded interval; integrated quantities are not reintegrated. Actual substance/state-specific density or measured same-configuration mass is required for volume/count conversion; no inferred value. | raw_i; unit_i; state_i; conversion_evidence | u_i | npca-qc-2026 |
| calc_attribute | all inventory rows | Perform justified subdivision/causal/residual allocation per exchange. Manufacturing A_i=B_open_i+B_current_i-B_close_i-T_other_i with raw/WIP/unassigned-only B_close; already stock-corrected consumption has no second stock subtraction. For services assign actual performed original-cohort burden and only carry unused/unassigned service/charge. Every physical gross leg remains unscaled. For ledger-only physical movements use the measured full gross native-unit leg as A_i without burden allocation, old manufacturing addition or a second stock correction; retain the separate actual assigned service/upstream vector. Keep physical quantities and all exchange vectors independently for every raw/WIP/non-WIP stock. Collect every actually incurred input, water, energy, loss, waste and burden from unauthorized/unapproved, failed or rejected work as well as authorized work. Permission, configuration-specific postwork tests and acceptance govern authorization, continuing qualification and actual hold/rejection/waste disposition only; they never erase actual flows or loads, create a new Q, or presume restoration. Before first release retain manufacture Q; after release retain the original cohort Q_o and actual observed horizon H. Natural storage/handling humidity needs no work permission. | u_i; B_open_i; B_current_i; B_close_i; T_other_i; allocation_evidence | A_i | ilcd-attributional-2010 |
| calc_reference | all inventory rows | a_i = A_i / Q_i; Q_i = newly first-quality-released net cohort massQ for manufacture or original released cohort massQ_o for its observed incremental service. Perform this division once only; if Q_i=0 retain actual burden and stocks with no unit result. finished_panel is the fixed1kg reference representation of measuredQ, not another division. | A_i; Q_i; cp_release | a_i | ilcd-attributional-2010 |
| calc_physical | all physical gates | Opening full wet mass + actual gross external inflows = closing full wet mass + actual gross external outflows; reconcile each element and phase independently. Internal Q/WIP/reuse cancels on combination; real external additions stay even if retained in closing stocks. This is a physical audit, not a burden allocation or a second normalization. | opening_i; closing_i; gross_in_i; gross_out_i; independent_species_phase_evidence | physical_reconciliation_i | npca-qc-2026 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Actual whole product/member/native restrictions and supplier compatibility; every real unlisted exchange added atomically | Complete native record; exact property/unit support; actual supplier documents |
| dq_manufacturer | finished_panel | Real governing QC and approved structural terminal; no invented design or certification | Approved drawings; test/inspection and release records; repair permissions and postwork acceptance/disposition |
| dq_measure | all inventory rows | Raw original units/state; calibrated full configurations; independent species/water/element evidence; no residual-fitting two unknowns | Meters/scales and calibration; independent assays; explicit detection limits and unknowns |
| dq_cohorts | all processes | Complete multi-cohort long-curing/WIP and inherited vector; failed/idle/Q0 periods; first release and service horizons | Cohort and stock histories; vector conservation; raw-to-A_i-to-a_i lineage |
| dq_source | all processes | Separate primary qualitative process evidence from actual foreground quantities and LCA allocation authority; preserve complete source/ancestor context | Source ids and original locators; scope/route/state limitations; missing/failed evidence disclosed |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_identity | all inventory rows | Verify actual terminal/route, every adopted native restriction, atomic identity and exact native reference property/unit chain. A whole wall-panel reference cannot be replaced by concrete mix, steel, beam, block or installed building. Conditional incompatible grade/form/geography/provider requires a compatible re-selection, not a waived conflict. Unresolved actual auxiliary exchanges remain explicit. | elematic-solid-wall;npca-qc-2026 |
| v_reference | finished_panel | Require actual manufacturer/governing specification, approved drawings, reinforcement/insert traceability, curing records, strength/stripping and final release tests/inspections, permissions for repair and postwork test/acceptance/disposition. No PCR-created structural design, reinforcement ratio, load capacity, strength, service life, recipe or cure schedule. Evidence absence prevents a dataset claiming a qualified released structural terminal. | npca-qc-2026;elematic-solid-wall |
| v_balance | all processes | Close physical mass, relevant elements, water phases, actual energy and each packaging/asset stock independently; keep gas species and destinations atomic. Do not infer pure chemical species from COD/VOC/NOx/totalC/totalB or particle totals. Integrated volumes are not multiplied by time again; only real rates are integrated. Density needs independent evidence for the actual material and state. One residual cannot determine two unknowns. | npca-qc-2026 |
| v_complete | all processes | Audit original raw records through attribution and one normalization into typed cells/cards/qualifiers; verify all formula inputs/outputs, source four fields, rule/row source_ids and complete normative ancestor context. Retain missing values, failed acquisition/read/identity attempts and unresolved scope honestly. Mechanical checks do not approve science, translation, mapping or publication. | npca-qc-2026;ilcd-attributional-2010 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Declared whole structural wall-panel manufacturing input with actual boundary/cohort/QC/service horizon |
| allowed_use | Compatible uninstalled non-prestressed solid reinforced wall-panel manufacture; scale measured mass of the same qualified configuration |
| excluded_use | Structural design/certification or generic whole37550 coverage; other structural component or installed-system substitution; automatic avoided production/lifetime credit |
| required_metadata | manufacturer/site and observed period; approved drawing and whole-panel configuration; structural function and governing specification; non-prestressed tied steel reinforcement and cast-in insert inventory; solid normal-weight concrete without insulation or facing; actual cement/aggregate/admixture supply states and formulation ownership; net whole-panel mass and moisture/age at first release; actual curing route and complete multi-cohort WIP vector; governing inspections/tests and first-release identifiers; permitted repair/postwork tests and disposition; packaging/asset stocks and supplier-included ingress ownership; energy/carrier/condensate state and upstream owner; original cohortQ_o and postrelease service horizon; unresolved identities/providers and uncertainty |
| required_quality_disclosure | Unresolved actual members/providers; real measurement and failed/Q0 coverage; independent physical and burden balances; first-release/service boundaries; actual tests and source limits |
| update_trigger | Change of approved terminal/configuration; material or route/curing/QC/repair permission; native identity restriction; supplier/energy boundary; measured cohort and service evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| npca-qc-2026 | handbook | NPCA Quality Control Manual for Precast Concrete Plants; 19th edition 2026; Chapters2–5; https://precast.org/wp-content/uploads/QCM-001_19th_Edition_02-02-26.pdf | Material and reinforcement traceability; batching/forming/curing/stripping/repair/inspection/storage/shipment records. Broad manual with alternatives; no default recipe/cure/strength/asset life; does not itself certify a product or establish LCA allocation. |
| elematic-solid-wall | extension_guidance | Elematic Solid wall; complete publisher page; https://www.elematic.com/precast-products/solid-wall/ | Positive whole solid reinforced wall-panel endpoint without insulation; structural applications, tables/battery moulds and cast-in openings/inserts. No transfer of dimensions, performance claims, SKU or design. |
| elematic-wall-route | extension_guidance | Elematic SEMI Wall; complete publisher page; https://www.elematic.com/product/semi-wall-production-line/ ; Elematic Precast Wall Production SEMI/PRO/EDGE2016 complete brochure; https://www.elematic.com/uploads/2021/02/32c68635-elematic_wall_brochure_2016_en_web.pdf | Raw batching/mixing through form preparation, reinforcement/inserts, casting/compaction/curing/demoulding/finishing/cleaning/storage. Broader sandwich/double-wall/beam and line options are counter-context, not this terminal. Capacity/area/staff figures are estimates and not inventory defaults. |
| ilcd-attributional-2010 | official_guidance | European Commission JRC ILCD Handbook General guide Detailed guidance; first edition March2010; full §§7.9.2–7.9.3; PDF275–292 / printed255–272; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional allocation-only hierarchy: subdivision/virtual subdivision, exchange-specific determining physical causality and genuinely residual common-gate same-state market values. Not industrial manufacturing evidence, universal mass allocation, waste exemption, fixed credit or complete ILCD/PEF conformity. |
