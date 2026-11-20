---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.slag-dross-scalings-and-other-waste-from-the-manufacture-of-iron-or-steel
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Segregated coarse hot-strip mill scale for sinter iron feed

All conditions below apply together: one actual non-alloy continuously hot-rolled strip source at a Chinese mill; scale segregated from other origins; wet descaling, gravity separation and physical drainage; loose moist coarse feed at the first agreed sinter-receiver quality gate. Quantitative plant records and grade limits are collected for the actual application. No composition, oil fraction, iron yield, furnace recipe, density or recycling credit is assumed. The whole product is a heterogeneous iron-oxide scale, not pure magnetite or metallic iron.

## 1. Scope and Applicability

The identity is the retained semantic PCR directory; CPC 3.0:39310 has an accepted narrower association under docs/adr/2026-11-21-accept-cpc-39310-coarse-hot-strip-mill-scale.md. Existing steel-product methodologies can supply compatible source-steel burdens but their steel reference output is not this recovered feed function. Slag/GBFS formation and preparation do not establish mill-scale equivalence. Loose oxide scale is also distinct from pressed metallic-scrap briquettes and sorted recovered-metal feed. UNSD CPC 3.0 explanatory notes (30 June 2025), p.203, distinguish this iron/steel-manufacture scaling from 39320 non-iron/steel-manufacture ash/residue, 39340 ferrous scrap and 39350 remelting scrap ingots. Scrap briquettes are not oxide scale. The accepted association covers only the specified scaling. The published 23 October 2026 supplement, CPC3!A1910:D1910, defines the same retained 39310 code through HS 2022 headings 2618 and 2619. Granulated iron/steel slag in 2618 is excluded from this hot-rolling scale scope; the selected scaling belongs to the 2619 side, not a granulated-slag proxy. Neither source determines Product/Waste exchange identity or receiver acceptance. See the full conjunction and exclusions below. (`unsd-cpc3-2025`; `unsd-cpc3-2026-supplement`; `wco-hs2022-ch26`)

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.slag-dross-scalings-and-other-waste-from-the-manufacture-of-iron-or-steel |
| classification_refs | CPC 3.0:39310; this moist coarse mill-scale subset is narrower than the complete slag/dross/scalings leaf |
| covered_products | One segregated non-alloy hot-strip source; gravity-separated and mechanically drained coarse oxide scale, released as loose moist sinter iron feed |
| excluded_products | Blast-furnace/steelmaking slags; dross; alloy/stainless/caster/pickling scale; oily fine sludge; collected dry filter dust; mixed recovered steel; metal turnings; briquettes/pellets; pure FeO/Fe2O3/Fe3O4/metallic iron; waste-treatment service references |
| representative_product | Loose drained coarse hot-rolling oxide scale accepted for sinter iron feed |
| production_route | Received burdened continuously cast non-alloy slab → actual natural-gas reheating → continuous hot-strip rolling and hydraulic descaling → source-segregated scale-pit/gravity separation → physical drainage → first feed-quality acceptance → separately accounted cohort services |
| market_state | Moist coarse mixed-oxide feed at declared first receiver-quality acceptance; measured as-released net mass, container tare excluded |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply recovered oxide-bearing iron feed to the declared sinter receiver |
| How much | 1 kg reference flow |
| How well | Actual agreed coarse-scale feed quality at first acceptance, with independent moisture/oil/composition and particle tests; no universal numerical grade is set |
| How long or cycle | One traceable first-release reporting cohort; no lifetime, sinter yield or substitution performance assumed |
| reference_flow_link | `finished_scale` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Drained coarse hot-rolling mill scale accepted as sinter iron feed |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | source steel heat/lot and non-alloy composition; slab steelmaking/continuous-casting provider and upstream burden; actual reheating/continuous hot-strip/descaling route; one segregated collection circuit and site in China; whole-scale oxide/metallic-Fe and other-element assay; independent oxygen and water/oil determination; measured particle-size distribution; receiver/agreed feed grade and acceptance tests; actual moisture/oil/foreign-material limits and legal Product transfer basis; first-release Q and reporting/cohort identifiers; gross physical mass V distinct from attributed exchange vector A; opening/closing WIP and FG quantities and inherited per-exchange burdens; failed lots and Q-zero loads; returns/reversals and actual incremental rework; actual utility states/voltage/provider/geography; individual packaging ledger and post-release services |

Every qualifier is required in dataset metadata, reference-flow comment or equivalent consumed context. One first-release net kg includes only the actual retained product moisture/oil state. Generic flow names do not supply a grade or receiver approval.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 1 kg net as-released feed at first quality acceptance; use cp_release; tare excluded. Q is first-release production only. |
| raw_state | all inventory rows | actual row property | actual row unit | Retain raw quantities at measured state; convert units before attribution. Single normalization in §8. Integrated volume is not a rate; independent density/HHV and species evidence are required. |
| separate_vectors | all inventory rows | gross physical mass and attributed exchange | kg and actual exchange unit | Gross V reconciles physical material/elements. A is a burden numerator after real allocation and WIP inheritance, never a substitute for V; services retain original Q_c. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Source-identified non-alloy continuously cast slab received before actual reheating; compatible upstream steel formation burden attached |
| starting_condition_role | Physical and burden handover; no automatic waste cut-off |
| product_classification_scope | Only segregated moist coarse hot-strip mill scale in CPC 3.0:39310 |
| recursive_input_rule | This route forms scale from steel; buying finished scale for repacking is outside scope. Any real same-category external return retains source/state and full inherited vector once; internal circulation cancels and never creates Q |
| upstream_dataset_requirement | Actual slab provider covers the real iron/steel route, refining, alloy additions where any and continuous casting to received state. A BF-BOF or EAF route is declared and linked, not invented here; do not repeat embedded operations. Record actual receipt transport and every outsourced service once with its real provider |
| disclosure | Scope/state and receiver status; full steel co-output; physical Fe/O/water/oil balances; allocation and inherited vectors; first Q versus gross shipments; services and uncertainty |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_route | route and product | Include actual receipt/transport, slab heating, steel oxidation, continuous hot-strip rolling, descaling, segregated scale collection, gravity settling/skimming, drainage, testing and the first feed-quality gate. Keep the source steel co-output and all separately collected fates. This is a transparent technical synthesis of compatible unit operations, not evidence for one SKU or plant recipe. | `jrc-ferrous-bref-2022`; `algoma-mill-scale-sds-2022`; `jrc-ilcd-2010`; `doe-steel-roadmap-2001` |
| b_terminal | scope exclusions | Use only feed accepted in its actual moist coarse state by the declared sinter receiver, with actual technical and legal status. The BREF examples do not create a universal acceptance threshold. Fine/oily sludge needing de-oiling, thermal drying, washing/flotation, briquetting/pelletising, blending or a different source route needs separate methodology review. A treatment-service Waste reference cannot stand in for this Product feed. | `jrc-ferrous-bref-2022`; `algoma-mill-scale-sds-2022`; `jrc-ilcd-2010`; `doe-steel-roadmap-2001`; `harsco-briquetting-case` |
| b_q | first release cohort | Q is the net as-released scale mass newly passing the first agreed feed-quality acceptance in the reporting cohort, excluding containers and all previous releases. Closing FG from this same cohort already belongs to Q; never add it again as production output. Dispatch, storage and repeat testing do not create output. Reversal removes only that lot with its whole vector and original release link; a corrected repeat release restores only previously reversed eligible mass to its original cohort. Restoration of an earlier cohort is not new first production in the current cohort. | `jrc-ilcd-2010` |
| b_stock | cohort burdens | Retain all failed/zero-output lots, start/stop, idle, cleanup and real rework in raw records. Opening and closing WIP retain stage, quantity, composition and a complete inherited vector for every input, emission, residue and outsourced service; transfer that vector with its lot. Manufacturing A includes current allocated loads plus opening-WIP vectors minus closing-WIP vectors, without shifting failure loads to a fictitious later output. FG is handled by release cohort and its existing vector, not deducted from new-release manufacturing a second time. | `jrc-ilcd-2010` |
| b_services | after release | Storage, testing after release, handling, actual packaging/cleaning/repair and dispatch remain in a separate service ledger keyed to each original cohort Q_c, including old FG and returns. H is the actual service load vector, never a production denominator. Attach H/Q_c once to that serviced cohort; cancel internal first-release transfers in the consolidated product ledger. Do not divide old-cohort services by the current new Q or silently drop them. | `jrc-ilcd-2010` |
| b_extend | completeness | Minimum cards are not zero/default selectors. Add a concrete atomic row for every actual unlisted purchased formulation/material/fuel, packaging part, refrigerant, service, waste mixture and emitted chemical species before reporting. Prove an optional absence; unknown is not zero. Imported steam, boilers, condensate, chemical de-oiling or thermal scale drying are not presumed. Keep one real provider for a whole external mixture or service and do not duplicate its components/emissions. | `jrc-ferrous-bref-2022`; `jrc-ilcd-2010` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| mill_scale_recovery | Source steel transformation through recovered feed and cohort services | required | Only the complete scoped route | foreground | new first-release net Q; separate original Q_c service ledger |

Maintain separate formation/rolling, segregation/settling/drainage, quality-release/FG and post-release service ledgers inside this consolidated process. Internal scale-bearing water, clarified-water recirculation and scale transfers are paired at each stage and cancel at consolidation. Actual external shipments, receivers and outsourced providers remain explicit. All cards share the complete scope and stock/attribution rules above. Each non-reference burden card uses the single a_j production result or its disjoint s_jc service component from §8 once, with gross V retained separately. The full steel co-output and actual material/container return/dispatch legs retain the distinct physical-context v_j view defined in that same normalization rule, with no burden allocation applied to their gross mass and no duplicate output/credit. No protocol pre-normalizes the raw collection.

### Process: Source steel and scale recovery (`mill_scale_recovery`)

#### Inputs

##### Product flows

###### Source steel slab received before reheating (`received_slab`)

One actual non-alloy continuously cast slab supply for flat hot-strip rolling at a plant in China. This Product identity is a production mix at plant in CN and an intermediate from upstream continuous casting; it does not establish a grade or upstream provider. Record each lot, alloy/steel assay, net mass, temperature and its complete compatible steelmaking/continuous-casting burden. Do not substitute reheated steel, finished strip or purchased recovered scale.

- Selected flow: Continuously cast steel slab for flat rolling `fa93b446-0340-4d7b-9f4d-e3f78789ea94`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result or disjoint cohort-service s_jc from §8; retain undivided raw records and gross V.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_origin`
- Sources: `jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### Natural gas supplied to the slab reheating furnace (`furnace_natural_gas`)

Natural gas burned in the actual industrial reheating furnace; native Product is a GLO production mix at plant and is referenced by gross calorific value. Match the real CN supplier and period separately. Collect actual gas volume or mass and independently measured/commercially certified gross heating value at the same metering state; report MJ HHV. No natural-gas composition, density, efficiency or calorific factor is prescribed. Do not enter purchased furnace heat as a second input for the same combustion.

- Selected flow: Natural gas `4bfd1abb-9106-495a-a291-ce410f205691`
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- Amount rule: Use the single a_j result or disjoint cohort-service s_jc from §8; retain undivided raw records and gross V.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources: `jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### Electricity for rolling and recovery equipment (`electricity`)

Metered customer-side alternating-current electricity at the actual voltage interface. Electrical measurement uses technical Energy, not a fuel heating value. The inspected generic 1–35 kV supply candidate references Net calorific value; it is not bound to this Energy row without a separately verified supplier/property adapter. A shared energy unit group alone establishes no property equivalence. Use only the actual matching voltage interface with declared grid/geography, period and provider. Include reheating auxiliaries, rolling, descaling pumps, pit/settler drives, drainage, testing, handling, water treatment and their idle/start-stop/cleanup loads. Retain production and post-release service meter partitions; do not buy the same internal electricity twice or add transmission already embedded in the supplier dataset. A different voltage or own generation requires a separately verified flow and provider.

- Selected flow: Metered alternating-current electricity
- Flow property / unit: Energy `f6811440-ee37-11de-8a39-0800200c9a66` / MJ
- Amount rule: Use the single a_j result or disjoint cohort-service s_jc from §8; retain undivided raw records and gross V.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources: `jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### Externally supplied treated make-up water (`makeup_process_water`)

One treated industrial-process-water Product input, native Mass/kg. Declare actual treatment/quality, supply interface, source, site/geography and provider; this generic identity establishes none of those choices. Count only external fresh make-up including actual cleaning and cooling make-up. Gross internal circulation is a paired transfer and not another purchase or natural abstraction. Direct river/groundwater abstraction needs its own elementary resource and actual treatment inventory. Use independently measured water density only when converting a volume record to kg.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result or disjoint cohort-service s_jc from §8; retain undivided raw records and gross V.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### Whole purchased hot-rolling lubricant (`rolling_lubricant`)

Conditional on actual use. Record the whole purchased supplied formulation once with supplier composition, oil fraction, carrier water, additives and losses as an analysis subledger. No NAS grade or petroleum-cracking recipe is prescribed. Dilution water and actual on-site mixing electricity are additional only when separately supplied; do not purchase both the whole formulation and its assay constituents. A premixed aqueous emulsion instead requires its own whole-formulation row and disjoint procurement basis.

- Selected flow: Petroleum-based hot-rolling lubricant concentrate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result or disjoint cohort-service s_jc from §8; retain undivided raw records and gross V.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### Hydraulic-system oil replenishment (`hydraulic_oil`)

Include actual external replenishment with real supplied formulation, maintenance transfers and tank stocks. Keep leaked hydraulic oil separate from rolling lubricant genealogy; whole oil purchases and constituent assay are not additive. Match actual grade and provider before UUID use.

- Selected flow: Petroleum-based hydraulic oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result or disjoint cohort-service s_jc from §8; retain undivided raw records and gross V.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### New returnable transport skip (`returnable_skip_purchase`)

Conditional actual new acquisition of one fabricated carbon-steel skip type for loose bulk scale. Record measured tare, specification, useful trips/repair history and actual manufacture provider; no count-to-kg factor is assumed. Allocate only actual lifetime/service use to cohorts without buying the skip every internal reuse. Liner, lid or other separately supplied packaging components require individual rows if present.

- Selected flow: Fabricated carbon-steel transport skip
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result or disjoint cohort-service s_jc from §8; retain undivided raw records and gross V.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### First non-purchase external receipt of a skip (`skip_first_external_receipt`)

One carbon-steel transport skip first received without purchase, attached to incoming material or separately borrowed or transferred free of charge. Record F even if the supplier inventory omits it. Do not classify it as a return without proof that this same physical item previously left this site. Record ownership, actual manufacture/service coverage, receipt transport, fees and inherited burdens once; missing supplier data remain unknown, not zero. Attached material has its own mass row and is excluded from tare.

- Selected flow: Carbon-steel transport skip first received without purchase
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single physical-context v_j or original-cohort v_jc result from §8; retain gross V and actual attributable procurement/transport/service burdens separately, once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ilcd-2010`

###### External empty skip returned to site (`skip_external_return_received`)

Record ER only for an identified physical skip with a traceable earlier dispatch from this site. Keep this disjoint from P purchase and F first non-purchase receipt. Carry inherited container burden without buying it again; record actual return transport, cleaning, repair or service once, with actual provider coverage. Missing supplier data remain unknown. Residual scale or water is separately weighed and tracked as product return or residue; it is not empty tare or new Q.

- Selected flow: Returned empty carbon-steel transport skip
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single physical-context v_j or original-cohort v_jc result from §8; retain gross V and inherited burdens separately. No new Q or purchase is created.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### Actual receiver return of released scale (`returned_scale`)

Conditional actual return of a previously released lot, retaining original source, material state, original Q_c and its complete inherited vector. Keep the physical returned mass and original delivery reversal separate from incremental rework/services. Restoration belongs to the original cohort and never creates fresh scale production. This row cannot purchase unrelated scale or convert a Waste flow to Product.

- Selected flow: Previously released coarse hot-strip mill scale returned by receiver
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single physical-context v_j or original-cohort v_jc result from §8; retain gross V and inherited burdens separately. No new Q or purchase is created.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_balances`
- Sources: `jrc-ilcd-2010`

##### Waste flows

##### Elementary flows

###### Oxygen drawn from ambient air (`ambient_oxygen`)

Elementary resource from air: renewable element resource from air, Mass/kg. Record the oxygen portion of the actual gross air intake for heating, oxidation and ancillary air use; keep reacted oxygen and unreacted exhaust oxygen in separate physical subaccounts. This is not purchased industrial oxygen. Do not infer oxygen uptake solely by fitting an unknown scale-oxide ratio or unidentified gas loss.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result or disjoint cohort-service s_jc from §8; retain undivided raw records and gross V.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### Air-intake nitrogen (`ambient_nitrogen`)

Record this one molecular species in actual gross incoming air with independently determined air composition and state. It is a physical pass-through/reactant ledger, not purchased compressed gas or an assumed atmospheric removal credit. Reconcile the corresponding outgoing molecular species and transformations; do not invent a fixed air composition.

- Selected flow: Dinitrogen drawn from ambient air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result or disjoint cohort-service s_jc from §8; retain undivided raw records and gross V.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### Air-intake argon (`ambient_argon`)

Record this one molecular species in actual gross incoming air with independently determined air composition and state. It is a physical pass-through/reactant ledger, not purchased compressed gas or an assumed atmospheric removal credit. Reconcile the corresponding outgoing molecular species and transformations; do not invent a fixed air composition.

- Selected flow: Argon drawn from ambient air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result or disjoint cohort-service s_jc from §8; retain undivided raw records and gross V.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### Air-intake humidity (`ambient_water`)

Record this one molecular species in actual gross incoming air with independently determined air composition and state. It is a physical pass-through/reactant ledger, not purchased compressed gas or an assumed atmospheric removal credit. Reconcile the corresponding outgoing molecular species and transformations; do not invent a fixed air composition.

- Selected flow: Water vapour drawn from ambient air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result or disjoint cohort-service s_jc from §8; retain undivided raw records and gross V.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### Air-intake carbon dioxide (`ambient_co2`)

Record this one molecular species in actual gross incoming air with independently determined air composition and state. It is a physical pass-through/reactant ledger, not purchased compressed gas or an assumed atmospheric removal credit. Reconcile the corresponding outgoing molecular species and transformations; do not invent a fixed air composition.

- Selected flow: Carbon dioxide drawn from ambient air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result or disjoint cohort-service s_jc from §8; retain undivided raw records and gross V.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

#### Outputs

##### Product flows

###### First quality-released recovered scale (`finished_scale`)

One separately collected moist coarse iron-oxide scale from the declared non-alloy hot-strip route, after gravity separation and actual drainage at the mill in China. This is the whole as-released oxide mixture including independently measured retained free water and measured residual oil, with no invented Fe assay or oxide-phase ratio. State the actual receiver/agreed sinter-feed specification, particle distribution, moisture, oil/foreign material limits and legal transfer basis. Product representation requires a compatible Product native identity and actual receiver acceptance; a Waste-flow scale identity, blast-furnace slag, pure magnetite or metallic iron cannot be substituted. No briquetting, mixing with other residues, de-oiling or thermal drying is covered.

- Selected flow: Drained coarse hot-rolling mill scale accepted as sinter iron feed
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources: `jrc-ferrous-bref-2022`; `algoma-mill-scale-sds-2022`; `jrc-ilcd-2010`

###### Source-steel co-output (`hot_strip_cooutput`)

Record the full actual hot-strip co-output at its own steel-quality gate with surface/temperature state, composition, moisture and stocks, separately from Q. This is unpickled hot-rolled strip; no cold rolling or pickling burden is silently substituted. Gross steel mass stays in physical balances even if much of its burden is assigned to the steel function. A compatible provider/flow must represent the actual route.

- Selected flow: Unpickled continuously hot-rolled non-alloy steel strip
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single physical-context v_j from §8; retain the full gross V_steel and its separate assigned burden vector.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_balances`
- Sources: `jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### Skip leaving with gross physical shipments (`skip_with_dispatch`)

Record actual container tare accompanying all gross scale shipments including old FG and replacements. The scale inside is measured separately. This leg is not net Q or new container production.

- Selected flow: Carbon-steel transport skip accompanying gross dispatched scale
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single physical-context v_j or original-cohort v_jc result from §8; retain gross V and inherited burdens separately. No new Q or purchase is created.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### Empty skip returned outwards (`skip_return_to_owner`)

Record actual external empty return-to-owner tare separately from dispatch-with-product and internal reuse; do not count the same outward movement twice.

- Selected flow: Empty carbon-steel transport skip returned to external owner
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single physical-context v_j or original-cohort v_jc result from §8; retain gross V and inherited burdens separately. No new Q or purchase is created.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### External clarified water return (`external_return_water`)

Include only a real external Product return under the supplier agreement: meter water mass/volume and independent density, temperature, pressure/enthalpy and supplier water/energy allocation. It is not wastewater disposal, elementary discharge or internal recirculation. Do not invent steam, condensate, a boiler or an exported-heat credit. Internal clarified water cancels between the rolling and separation ledgers.

- Selected flow: Clarified industrial return water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result or disjoint cohort-service s_jc from §8; retain undivided raw records and gross V.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

##### Waste flows

###### Rejected source-specific scale sent to external treatment (`scale_reject`)

Conditional external rejected scale at a CN hot rolling mill after separation from flume wastewater during descaling, native Waste flow Mass/kg. These are the route, location and treatment restrictions of this identity; it is not a released Product, a generic mixed sludge or purchased scale. Measure the whole rejected mixture and its moisture/oil/Fe subaccounts, actual receiver and legal status. Internal rework/capture is a paired transfer. Distinguish all retained or off-site rejected material from Q and never assume a zero burden or recycling credit.

- Selected flow: Mill scale `aad763e2-78ab-4fcb-8a3b-8d8525c9e6ca`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result or disjoint cohort-service s_jc from §8; retain undivided raw records and gross V.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residues`
- Sources: `jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### Actual metallic crop scrap (`metallic_crop_scrap`)

Measure actual hot-strip crop ends/cobbles with source assay and individual receiver; metallic scrap is not oxide scale. Internally remelted scrap is paired and canceled at consolidation; actual external scrap has the declared treatment or valued co-output status with allocation reviewed at the relevant gate. No remelting or briquetting occurs merely because scrap was collected.

- Selected flow: Non-alloy steel hot-strip crop scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result or disjoint cohort-service s_jc from §8; retain undivided raw records and gross V.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residues`
- Sources: `jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### Fine sludge rejected from coarse feed (`oily_fine_sludge`)

One actual whole wet fine-scale sludge stream from settling, segregated from the coarse released scale and weighed with water/oil/solids analysis. Its real treatment receiver and retained burden are recorded. No fine sludge is relabeled as coarse feed or silently de-oiled; chemical or thermal treatment changes this route.

- Selected flow: Oily fine-scale settling sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result or disjoint cohort-service s_jc from §8; retain undivided raw records and gross V.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residues`
- Sources: `jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### External wastewater purge to treatment (`scale_water_purge`)

One whole actual aqueous purge crossing to an external treatment provider, including its measured suspended scale and oil fractions as subaccounts. Record volume and independently measured mixture density/state where mass is needed. Do not also emit its water/Fe/oil to the environment; external provider owns subsequent treatment emissions. Returned internal clarified water is not this output.

- Selected flow: Scale-bearing hot-rolling wastewater purge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result or disjoint cohort-service s_jc from §8; retain undivided raw records and gross V.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residues`
- Sources: `jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### Captured dust sent to a receiver (`captured_scale_dust`)

Conditional on actual dry gas-cleaning capture: separately weighed dry-basis captured iron-bearing particulate waste, before treatment, with measured composition and moisture, source/location and recovery or treatment receiver. Keep air emission, coarse scale and sludge fates disjoint. Returning dust into the selected coarse feed changes its composition genealogy and needs explicit scope reassessment; no assumed zero-waste return.

- Selected flow: Steel hot-working filter dust `550674c0-8fd0-53e8-8299-8664c1dfc3f8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result or disjoint cohort-service s_jc from §8; retain undivided raw records and gross V.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residues`
- Sources: `jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### Container waste (`skip_scrap`)

Record actual scrapped skip tare with remaining inherited container burden and its actual receiver; attached scale/water is separately reconciled. It is not metallic hot-strip crop scrap or new recovered scale.

- Selected flow: Scrapped carbon-steel transport skip
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result or disjoint cohort-service s_jc from §8; retain undivided raw records and gross V.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### Separately drained used lubricant (`used_oil`)

Native Waste flow at point of generation for petroleum-based or synthetic lubricant contaminated through use, treatment route unspecified. Use only an actual separately drained lubricant stream with measured water/solid fractions and actual legal receiver/treatment; this native identity does not mandate recycling or combustion. Mixed fine-scale sludge and skimmed oil-water emulsion remain their own streams. No fixed moisture/additive assay or credit is assumed.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result or disjoint cohort-service s_jc from §8; retain undivided raw records and gross V.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residues`
- Sources: `jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### Skimmed oil-water phase (`skimmed_oil_emulsion`)

Actual skimmed whole oil-water phase from gravity separation, measured independently from coarse scale, fine sludge and drained used lubricant. One external receiver owns the subsequent treatment. Oil and carrier-water assay are not additional emitted or purchased exchanges.

- Selected flow: Skimmed petroleum-oil water emulsion
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result or disjoint cohort-service s_jc from §8; retain undivided raw records and gross V.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residues`
- Sources: `jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

##### Elementary flows

###### Fossil carbon dioxide to air (`co2_fossil`)

Fossil CO2 only, Elementary emission to unspecified air, Mass/kg. Reconcile measured furnace fuel carbon and actual lubricant carbon oxidation independently from ambient incoming/outgoing CO2. No displaced-ore or energy credit.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result or disjoint cohort-service s_jc from §8; retain undivided raw records and gross V.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### Fossil carbon monoxide to air (`co_fossil`)

Fossil CO only, Elementary emission to unspecified air, Mass/kg. Measure species-specific emission and its fossil carbon origin; total VOC or total carbon is not CO.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result or disjoint cohort-service s_jc from §8; retain undivided raw records and gross V.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### Nitrogen monoxide to air (`nitric_oxide`)

NO only, Elementary emission to unspecified air, Mass/kg. A NOx result expressed as NO2-equivalent is a reporting indicator and cannot all be assigned to NO; retain measured speciation and molar conversion evidence.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result or disjoint cohort-service s_jc from §8; retain undivided raw records and gross V.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### Sulfur dioxide to air (`sulfur_dioxide`)

SO2 only, Elementary emission to unspecified air, Mass/kg. Use actual sulfur-containing fuel/contamination and measured or independently supported species-specific release; absence requires evidence rather than default zero. SOx is not a substitute.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result or disjoint cohort-service s_jc from §8; retain undivided raw records and gross V.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### Fossil methane to air (`methane_fossil`)

Fossil CH4 only, Elementary emission to unspecified air, Mass/kg, including actual leakage and incomplete combustion where present. Whole natural-gas supply is not pure methane; measured other hydrocarbons need separate rows rather than a total-VOC-to-methane conversion.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result or disjoint cohort-service s_jc from §8; retain undivided raw records and gross V.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### Water vapour to air (`water_vapour`)

H2O vapour only, Elementary emission to unspecified air, Mass/kg. Keep independently measured evaporation, combustion-formed water and incoming/outgoing atmospheric humidity as origin subaccounts of one outgoing species; no duplicated total plus origin partitions. Condensed liquid and retained product free water have separate fates. No invented structural/reaction water.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result or disjoint cohort-service s_jc from §8; retain undivided raw records and gross V.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### Dinitrogen in exhaust air (`nitrogen_exhaust`)

N2 only, Elementary emission to unspecified air, Mass/kg. Physical pass-through from measured incoming air and any real reactions; pair incoming nitrogen and distinguish NO/NO2 formation without counting the same nitrogen twice. Purchased nitrogen is outside this ambient-air identity.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result or disjoint cohort-service s_jc from §8; retain undivided raw records and gross V.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### Nitrogen dioxide emission (`nitrogen_dioxide`)

Actual NO2 molecular mass separately from NO; neither nitrite nor undifferentiated NOx may be bound here. Convert NO2-equivalent monitoring results only with actual species proportions and molecular masses; unknown speciation remains a completeness gap.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result or disjoint cohort-service s_jc from §8; retain undivided raw records and gross V.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### Unreacted exhaust oxygen (`oxygen_exhaust`)

Record actual unreacted O2 in exhaust separately from oxygen incorporated in scale or combustion products. This outgoing air emission is not the incoming air resource identity.

- Selected flow: Oxygen in exhaust air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result or disjoint cohort-service s_jc from §8; retain undivided raw records and gross V.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### Exhaust argon (`argon_exhaust`)

Actual inert Ar pass-through paired to incoming air argon and any leaks/stock changes; do not assign a fixed air fraction or treat it as purchased argon.

- Selected flow: Argon in exhaust air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result or disjoint cohort-service s_jc from §8; retain undivided raw records and gross V.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### Atmospheric carbon dioxide pass-through (`ambient_co2_exhaust`)

Incoming atmospheric CO2 passing through is separated by provenance from newly formed fossil CO2 and paired with its actual inlet amount. Physical return does not establish carbon storage/removal credit.

- Selected flow: Atmospheric carbon dioxide passing through exhaust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result or disjoint cohort-service s_jc from §8; retain undivided raw records and gross V.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### Uncaptured iron-oxide particulate (`oxide_particulate_air`)

Actual whole entrained oxide particulate emitted to the declared air compartment with independently measured size distribution and Fe/O/other-element analysis as non-additive subaccounts. Captured dust remains a separate technosphere residue; do not identify dust as pure Fe3O4 or infer air loss as a mass-balance residual.

- Selected flow: Hot-rolling iron-oxide particulate emitted to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single a_j result or disjoint cohort-service s_jc from §8; retain undivided raw records and gross V.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

###### Actual dissipated heat (`heat_air`)

Where quantified, record measured/reconciled dissipated heat at actual thermal state in MJ, separately from purchased fuel energy and sensible heat carried by material/water. No export heat coproduct is assumed.

- Selected flow: Dissipated heat to air
- Flow property / unit: Energy / MJ
- Amount rule: Use the single a_j result or disjoint cohort-service s_jc from §8; retain undivided raw records and gross V.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `jrc-ferrous-bref-2022`; `jrc-ilcd-2010`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_context | attributional decision | Use this hierarchy only for an attributional study for which allocation is actually required. Document why that decision context applies. Industrial manufacturing or reuse evidence does not itself justify an allocation key, free waste input or avoided-product credit. If source scale is a discarded/negative-value waste or the transfer status changes, retain its actual origin and management burdens and obtain an explicit compatible waste/recycling convention on both sides; do not apply a positive-product economic key or zero burden automatically. | `jrc-ilcd-2010` |
| a_subdivide | all exchanges | First identify dedicated operations and real subdivision, then virtual subdivision with quantified causal ownership: actual steel-only finishing, scale-only drainage/quality release and separately measured handling are assigned to the function that determines them. Separate source-steel transformation from scale preparation rather than assign all furnace/rolling loads to scale or omit its formation. Retain a row-by-row allocation record and conservation across every co-function. | `jrc-ilcd-2010` |
| a_causality | remaining exchange | For each remaining exchange independently identify the determining physical causal relation and show how changing a co-function changes that exchange. Steel/Fe, oxide oxygen, specific furnace and pump services can require different relations. The mere existence of mass, Fe content, price, or a shared meter is not causality; no blanket mass split or optional physical/economic selection is allowed. Gross physical mass balances never use allocation fractions. | `jrc-ilcd-2010` |
| a_residual | genuinely residual exchanges | Only after justified absence/infeasibility of determining physical causality use contemporaneous representative market values for actual co-functions in their real condition at the same common process gate. Remove later scale drainage/packaging/transport or steel finishing costs if prices are quoted downstream. Keep signed price, quantity, currency, period, adjustments and sensitivity; unavailable, zero/negative or incompatible prices require explicit review, not invented fractions or absolute-value shortcuts. Sum allocated vectors back to the original complete inventory. | `jrc-ilcd-2010` |
| a_credits | receiver and recycling | Record actual recovery/disposal routes and internal returns. No fixed steel-to-scale burden fraction, replacement iron-ore mass, recycled-content credit, avoided landfill, exported-heat credit or downstream sinter performance is prescribed. The output feed, treatment service and true steel co-output must not claim the same burden or credit twice. | `jrc-ilcd-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

These protocols collect original undivided observations, raw event/period totals, stocks and inherited vectors. The aggregation_rule cell labels only the common final reporting basis after the calculation rules; it does not instruct the collector to divide. Actual sums, unit conversion, attribution and WIP transfers precede the only A/Q operation. Post-release services preserve raw H_jc and their original Q_c; they never pass through current production Q. Each flow and each fate is separate even when meters/protocols are shared.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_origin | mill_scale_recovery | steel origin | supplier and receipt records | heat/lot; steel assay; slab mass; receipt temperature; upstream route; supplier/provider; transport mode/distance/load; inherited exchange vector | Reconcile calibrated receipt weights and supplier route/steelmaking/casting records to one actual lot; retain full upstream coverage and transport inventory or actual outsourced provider without repeating embedded utilities | kg; actual service unit | each lot and transfer | complete reporting period and opening lots | source supplier to declared CN mill | per 1 kg reference flow | calibration; supplier coverage; chain of custody; burden transfer |
| cp_energy | mill_scale_recovery | electricity and furnace gas | meter and invoice records | meter start/end; raw kWh; raw gas volume/mass; meter temperature/pressure; actual HHV; independent gas density/composition; production/service/idle partitions; provider/grid/voltage | Read actual calibrated meters and supplier energy certificates; retain time profiles and included idle/failure/cleanup. Distinguish integrated volume from a rate and actual electrical energy from furnace fuel/heat | kWh; MJ HHV; actual m3/kg | continuous meters and each supplier lot | whole period including stops and Q-zero | all selected production and service equipment | per 1 kg reference flow | meter calibration; meter topology; certificates; operating logs |
| cp_materials | mill_scale_recovery | water and supplied formulations | purchase and stock records | supplier/product; actual supplied formulation; receipt/use/return; water and oil tank stocks; gross circulation; internal transfer pairs; density/state; external return temperature/enthalpy | Weigh/meter every actual external water or formulation supply and its stocks. Record raw units and supplier composition without adding assay constituents as purchases. Meter actual mixing and return services separately | kg; measured m3 | each supply/use event and stock boundary | complete period plus opening stock history | actual tanks and process/return interfaces | per 1 kg reference flow | certificates; calibrated meters; independent density; transfer pairs |
| cp_air | mill_scale_recovery | individual molecular/particulate/heat exchanges | species measurements and state records | species and provenance; air intake composition/state; stack gas composition/state; cumulative gas volume or true rate/time; pollutant concentration; particle size/composition; capture/non-air fates; humidity; reaction-water evidence; heat state | Retain species-specific calibrated measurements and independent material/reaction evidence. Convert each raw volume/concentration to molecular mass at its measured state. NOx/COD/VOC totals remain indicators until actual speciation is available; do not infer multiple unknowns from one residual | kg; raw m3; actual concentration; MJ | representative continuous/event measurements across all operating modes | whole period including start-stop and cleanup | each real intake/stack/vent and treatment interface | per 1 kg reference flow | calibration; speciation; wet/dry basis; sampling; independent reaction evidence |
| cp_release | mill_scale_recovery | first accepted scale | weighing and quality-release records | lot/cohort; first gate/time; net released mass; container tare; independent free-water/oil/oxide/element assays; particle distribution; receiver specification/legal acceptance; original release/reversal link; Q; Q_c | Weigh the same whole released lot on calibrated scales excluding packaging; test the actual receiver-quality specification and independently determine moisture/oil/Fe/O without an assumed oxide ratio. Deduplicate first releases and attach signed reversals to the original lot | kg | each first release and signed reversal | complete new-release cohort and historical links | one agreed gate before downstream sintering | per 1 kg reference flow | calibrated weights; sampling; actual acceptance; legal transfer basis |
| cp_balances | mill_scale_recovery | stage and cohort mass/burden | stock and lot genealogy records | stage; gross V by exchange; steel co-output; Fe/O/C/H and relevant elements; free/phase/structural/reaction water; oil; opening/closing WIP and FG quantities; inherited exchange vectors; failed lots; returns; rework; internal transfer pairs | Independently weigh/sample all streams/stocks at formation, separation/drainage and finished-store gates and carry each complete per-exchange vector with the lot. Keep manufacturing, FG and consolidated physical ledgers consistent; investigate discrepancies against independently determined uncertainty | kg; original exchange units | each batch/transfer and period boundary | full period and inherited history | all source/recovery/FG gates | per 1 kg reference flow | independent scales/assays; stock sheets; complete vectors; audit trail |
| cp_residues | mill_scale_recovery | each distinct residue and receiver | weighing and destination records | stream/lot; whole mass; free water/oil/Fe/other analysis; product/waste status; receiver; internal returns; retained stocks; transport/treatment provider; price at actual gate | Weigh each actual segregated residue and retain receiver/treatment records. Mixture whole mass and composition subaccounts are non-additive; separate captured material, environmental emissions and provider-owned later treatment | kg; measured raw volume | each transfer and stock boundary | whole period including rejected/Q-zero lots | each real residue interface and receiver | per 1 kg reference flow | weighbridge; assay; legal receiver; actual fate/provider |
| cp_packaging | mill_scale_recovery | one physical packaging type per ledger | tare and disjoint container movement records | individual type/configuration; opening empty/WIP/FG/reusable; P; F first non-purchase receipt; ER proven same-item return; closing empty/WIP/FG/reusable; S gross dispatch; EO external return out; W waste; internal reuse pairs; measured tare; manufacture/repair/service history | Independently count/weigh each actual packaging component and keep the complete opening + purchase + first non-purchase external receipt + proven same-item external return received = closing + gross physical dispatch out + external return out + waste identity for that same type. Measure tare by configuration; internal reuse cancels and never enters product Q | kg; actual item counts | each move and inventory boundary | full period with service history | empty and attached containers at all WIP/FG/service locations | per 1 kg reference flow | tare measurements; movement log; complete disjoint movement balance; service life |
| cp_services | mill_scale_recovery | post-release services | cohort service and allocation records | original Q_c; serviced cohort; current/raw H_j; service dates; old FG; gross shipments; incremental rework/cleaning; inherited vectors; allocation adjustments; upstream/provider interface | Attach actual raw storage/handling/packaging/dispatch services to the original serviced cohort, preserving old-cohort burdens and actual return/reversal links. Use the real outsourced provider once or collect its individual atomic exchanges, without double counting embodied energy | original exchange units | each service event | current events plus original cohort history | all post-release operations and receivers | per 1 kg reference flow | cohort link; raw invoices/meters; allocation proof; no new production |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| raw_conversion | all inventory rows | Convert each measured raw quantity to its declared row unit before allocation: kWh × 3.6 → MJ; tonnes × 1000 → kg; litres × 0.001 → m3. Integrated volume is already a quantity; integrate only a true rate over its actual time. For gas HHV multiply actual volume/mass by independently determined compatible HHV; for any mass/volume conversion use independent substance-specific density at the same temperature/pressure/composition. No use of a secondary native conversion as measured density. | raw records; actual state; independent HHV/density | U_j | `jrc-ilcd-2010` |
| attribute_exchange | all inventory rows | Preserve gross physical V_j independently. Apply §7 to each converted U_j and its inherited vector, recording dedicated assignment, virtual subdivision and determining causality before only the genuinely residual market-value allocation. Assign current production loads R_j to the actual scale function and reconcile all co-functions back to the unsplit vector. No fixed fraction is supplied. | U_j; actual co-functions; inherited vectors; allocation evidence | R_j | `jrc-ilcd-2010` |
| carry_wip | manufacturing exchanges | A_j = R_j + B_open_WIP_j - B_close_WIP_j. Each B is the inherited amount in the same exchange unit, stage and lot belonging to this first-production cohort. R_j includes all attributable failures/start-stop/idle/cleanup and incremental rework. Old-FG returns retain their original production vector and use the original-cohort incremental rework/service ledger; neither their original vector nor restored mass is inserted into current new-production R_j/Q. No FG subtraction is made merely because released goods remain in stock. Keep signed original-release reversals and inherited vectors in the cohort ledger. | R_j; B_open_WIP_j; B_close_WIP_j; cp_balances | A_j | `jrc-ilcd-2010` |
| normalize_exchange | manufacturing exchanges | a_j = A_j / Q, once only for Q > 0. Q is the net first-release quantity under cp_release. Inventory burden quantities use this same a_j without another division; collection protocols never pre-divide raw quantities. Where a functional co-output or return/container transfer is reported as physical context, the same single normalization step reports v_j = V_j / Q from its own undivided converted gross quantity; v_j is never fed into A_j or divided again. For an old-cohort physical service/return/dispatch leg use its own V_jc / Q_c in that same step; never divide a mixed old/new shipment by current Q. The steel co-output quantity is physical context and not an avoided-product credit or a second allocated product yield. Q = 0 retains the complete raw physical and burden vectors and produces no unit result. | A_j; Q; cp_release | a_j | `jrc-ilcd-2010` |
| attach_services | post-release services | s_jc = H_jc / Q_c, once for the original positive first-release cohort Q_c only. H_jc is current raw service load attributed to that cohort; the declared delivered/cohort record combines its original production a_jc with s_jc once. H is never a production denominator; current Q does not normalize old FG services. If Q_c is unknown/zero, retain raw services and require review. | H_jc; Q_c; cp_services | s_jc | `jrc-ilcd-2010` |
| physical_gates | formation separation finished-store and consolidated gates | For every whole material and independently for relevant Fe/O/C/H/other elements: opening physical stocks + external receipts + gross internal receipts = closing physical stocks + gross internal issues + all actual external products/residues/chemical emissions, with chemically supported reaction transformations. Cancel identical internal receipts/issues on consolidation. For the raw FG ledger use O_FG + G + ER_FG = C_FG + S_FG + RV_FG + D_FG. G is positive eligible first-release/restoration entries; RV_FG is actual release-reversed mass withdrawn to WIP; D_FG is only other destruction/reclassification/transfer not already in RV_FG. All are disjoint physical legs with original-cohort links. The cohort net-release ledger is Q = G - RV_FG; substituting it gives O_FG + Q + ER_FG = C_FG + S_FG + D_FG, with no second RV_FG term. Keep cohorts separate: older restored releases update only their original Q_c, never current new-production Q. Q is already contained in the FG/dispatch partition, not an extra output added to it. Mass uses gross V, never allocated A. An unknown balance is not a passed balance. | gross V; independent assays; all stocks/transfers; reaction evidence; cp_balances | stage and consolidated physical reconciliations | `jrc-ferrous-bref-2022`; `algoma-mill-scale-sds-2022`; `jrc-ilcd-2010` |
| water_oil_oxide | whole scale and all wet fates | Whole scale mass and whole wet residue mass each contain their measured water/oil/mineral fractions; elemental Fe and oxygen and FeO/Fe2O3/Fe3O4/metallic-Fe analysis are non-additive subaccounts of the same whole. Independently measure free/structural/phase/reaction-water distinctions and actual changes, with a validated method separating oil from water/minerals. No SDS hazard maxima, default Fe ratio, fixed density or single residual may determine two unknowns. A measured mixture cannot also be emitted as its separate water/iron/oil components at the same boundary. | whole weights; independent phase/element/water/oil tests; cp_balances | non-additive component and element reconciliation | `jrc-ferrous-bref-2022`; `algoma-mill-scale-sds-2022`; `jrc-ilcd-2010` |
| packaging_balance | each individual packaging type | For each same packaging type: opening empty + opening attached WIP + opening attached FG + opening reusable + P + F + ER = closing empty + closing attached WIP + closing attached FG + closing reusable + S + EO + W. These are disjoint states; a reusable item is not also counted as empty/attached. P is actual purchase; F is first non-purchase external receipt, with material or separately borrowed/free-transferred, regardless of supplier inventory coverage; ER is a genuine return of the same identified item previously dispatched from this site; S tare with gross physical dispatch; EO separate external return out; W actual waste. Internal reuse cancels. P/F/ER are disjoint; actual procurement, transport and service burdens are assigned once, with missing supplier coverage explicitly unresolved. Apply this independently to every actual component; no net-Q substitute, repeat purchase or automatic coproduct. | opening/closing by type; P; F; ER; S; EO; W; cp_packaging | complete individual packaging balance | `jrc-ilcd-2010` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all exchanges | Actual flow type/route/form/grade/geography/media and every native restriction must match. Generic identity does not certify provider or product status. The reference feed needs its own compatible Product UUID before operational use. | full direct identity; real supply/receiver records |
| dq_measurement | raw records and stocks | Retain independent weights/assays/densities and actual meter states, complete operating modes, full WIP/FG vectors and uncertainty. Unknown values stay unknown; quantitative factory data are later collected, not invented. | cp_origin; cp_energy; cp_materials; cp_air; cp_balances |
| dq_acceptance | reference feed and receiver | Trace first acceptance, state/quality, actual technical and legal receiver basis. Primary industrial documents support route synthesis; they are not site certificates, current sales contracts, default assays or LCA allocation evidence. | cp_release; actual receiver tests and documents |
| dq_complete | dataset coverage | Include every actual atomic flow and fate or disclose unresolved coverage and withhold a complete result. Keep whole mixtures disjoint from analysis partitions, actual providers once, and each packaging balance complete. Scientific review and translation review remain separate decisions. | inventory reconciliation; allocation dossier; cohort/service audit |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_scope | applicability | Verify this exact non-alloy hot-strip source, segregated moist coarse state and declared sinter receiver. Reject slag, metallic scrap, pure oxide, fine oily sludge, agglomerated products and other scale sources from this scope; do not claim full CPC-leaf coverage. | `jrc-ferrous-bref-2022`; `algoma-mill-scale-sds-2022`; `jrc-ilcd-2010` |
| v_native | every bound identity | Check actual Product/Waste/Elementary type, all native names/comments/CAS where present, route/form/grade/geography/compartment and all properties. Use the exact reference-property/unit-group chain and actual reference unit; no inferred density or item mass. A Waste scale UUID cannot identify finished Product feed; genuine identity gaps remain unavailable until resolved. | `jrc-ilcd-2010` |
| v_q | reference and cohorts | Verify 1 kg net as-released feed, one first Q, complete deduplicated reversals and old-cohort links. Closing FG has not been added twice, gross dispatch is not Q, services use original Q_c and H is never a denominator. Q-zero retains raw burdens without a unit result. | `jrc-ilcd-2010` |
| v_physical | all physical gates | Reconcile gross whole-material balances and independent relevant elements at formation, separation/drainage, FG and consolidated gates. Verify actual oxygen/water/oil partition, reaction/species evidence, internal cancellation, each receiver and all individual packaging legs. One residual cannot fit multiple unknowns; a missing assay or unresolved gas species prevents a claimed complete balance. | `jrc-ferrous-bref-2022`; `algoma-mill-scale-sds-2022`; `jrc-ilcd-2010` |
| v_attribution | burden vectors | Independently reconstruct every raw-to-converted-to-assigned-to-stock-carried numerator before its single normalization. Review subdivision and exchange-specific causality, justified residual common-gate prices and full conservation; do not infer scientific approval from engineering checks or a reusable source receipt. | `jrc-ilcd-2010` |
| v_reporting | completeness and claims | Disclose all unmeasured fields, identity/provider gaps, applicability limits and uncertainty. Mechanical projection/measurement checks establish declared consistency only, not real factory mass balance, legal status, scientific approval, mapping acceptance or publication. Report the scoped mapping decision separately from the suitability of an actual study. | `jrc-ilcd-2010` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Attributional recovered iron-feed production; actual steel co-function and service cohorts disclosed |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Only actual matching coarse-scale sinter feed with compatible status and complete burden handover |
| excluded_use | Waste-treatment functional unit; slag/cement feed proxy; pure iron oxide/metallic iron; briquettes; downstream substitution claims; unqualified full-leaf coverage |
| required_metadata | source steel heat/lot and non-alloy composition; slab steelmaking/continuous-casting provider and upstream burden; actual reheating/continuous hot-strip/descaling route; one segregated collection circuit and site in China; whole-scale oxide/metallic-Fe and other-element assay; independent oxygen and water/oil determination; measured particle-size distribution; receiver/agreed feed grade and acceptance tests; actual moisture/oil/foreign-material limits and legal Product transfer basis; first-release Q and reporting/cohort identifiers; gross physical mass V distinct from attributed exchange vector A; opening/closing WIP and FG quantities and inherited per-exchange burdens; failed lots and Q-zero loads; returns/reversals and actual incremental rework; actual utility states/voltage/provider/geography; individual packaging ledger and post-release services |
| required_quality_disclosure | Native identity and provider limits; source/receiver status; actual route; measured composition/state; raw physical/element reconciliations; per-exchange allocation and inherited vectors; Q/Q_c/services and all unresolved completeness |
| update_trigger | Change in steel source/route, segregation, oil/moisture/particle state, receiver status/specification, treatment or packaging, provider/interface, burden convention or new material evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| jrc-ferrous-bref-2022 | official_guidance | Best available techniques reference document for the ferrous metals processing industry (2022), JRC131649; https://publications.jrc.ec.europa.eu/repository/handle/JRC131649 ; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2022-12/FMP%20BREF_Final%20Version.pdf | §2.2 hot-strip heating/rolling/descaling and water circuits; §2.4.11.2 gravity separation and coarse/fine/oil fates; §8.11.1.2–1.3 coarse-scale reuse versus oily-sludge counterroutes. Qualitative technical synthesis only, not a factory recipe, universal numerical grade, allocation rule or legal receiver approval. |
| algoma-mill-scale-sds-2022 | literature | Algoma Steel Inc., Mill Scale Safety Data Sheet, version 1.0, revision 2022-11-23; https://www.algoma.com/wp-content/uploads/2025/03/SDS-Mill-Scale.pdf | §1/3 whole mill-scale identity and reheating/hot-rolling/water removal/gravity recovery, CAS 65996-74-9, multi-oxide/trace-element character; §9/16 physical-property limits and supplier-specific disclaimer. Hazard-determination maxima are not a summable lot assay, iron fraction, moisture/oil specification, density or receiver certificate. |
| jrc-ilcd-2010 | official_guidance | European Commission JRC, ILCD Handbook: General guide for Life Cycle Assessment — Detailed guidance, first edition March 2010; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | §7.9.2–7.9.3, printed pp255–272: attributional decision limits; real/virtual subdivision, exchange-specific determining physical causality, residual market values in actual condition/common gate, conservation and separate waste/recycling cases. Supports declared method and foreground collection requirements; does not provide a steel/scale fraction, measured plant data or automatic credit. |
| unsd-cpc3-2025 | official_guidance | UNSD, Central Product Classification Version 3.0, explanatory notes, 30 June 2025, p.203; https://unstats.un.org/unsd/classifications/Econ/cpc | Classification and neighboring category limits only; not flow status, feed acceptance or allocation. |
| doe-steel-roadmap-2001 | official_guidance | Steel Industry Technology Roadmap, Chapter 3, §3.1.3, printed pp.68–70; https://www1.eere.energy.gov/manufacturing/resources/steel/pdfs/roadmap_chap3.pdf | Independent qualitative route support: scale-pit settling, coarse scale for sinter feed, oil/grease limitations; historical US descriptions do not establish current CN yields, grades or universal oil limits. |
| harsco-briquetting-case | literature | Harsco Environmental, Briquetting: An Innovative Triumph, Background; https://www.harsco-environmental.com/case-study/briquetting-innovative-triumph/ | Operator counterroute: clean scale versus oily sludge; its briquetting/thermal-treatment case is excluded. No case quantity, oil fraction or energy value is transferred. |
| unsd-cpc3-2026-supplement | official_guidance | UNSD CPC Version 3.0 explanatory notes, 23 October 2026, CPC3!A1910:D1910; https://unsdsna.azure-api.net/files/pages/cpc/CPC_Ver3_Exp_Notes_2026-10-23_for_Website.xlsx | Published classification supplement, CPC3!A1910:D1910: retained 39310 code, HS 2022 2618/2619 scope; distinguish granulated slag from actual hot-rolling scalings. No shared classification mutation or flow-status promotion. |
| wco-hs2022-ch26 | official_guidance | WCO Harmonized System 2022, Chapter 26, headings 26.18–26.20; https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0526_2022e.pdf | Heading-text distinction: granulated iron/steel slag 2618 versus non-granulated slag/dross/scalings 2619; classification only. |
