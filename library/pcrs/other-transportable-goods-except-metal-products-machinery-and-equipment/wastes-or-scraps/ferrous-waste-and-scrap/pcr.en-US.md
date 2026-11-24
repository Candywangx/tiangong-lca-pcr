---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.ferrous-waste-and-scrap
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Segregated HC340LA cold-stamping offcuts supplied as baled steel feed

## 1. Scope and Applicability

This attributional method covers one segregated uncoated HC340LA cold-rolled sheet source from its burdened receipt through the original cold blanking/piercing/forming that creates offcuts and a complete stamped-blank co-output, segregated collection, inspection, necessary mechanical shearing and hydraulic baling. It retains actual storage, handling, packaging and road supply to the declared steelworks receiving gate. It does not reduce the route to purchasing finished scrap and packing it. The first quality-release denominator is fixed at the preparation facility; downstream services retain original cohorts and are not a new production gate.

HC340LA is the specific conventional high-strength micro-alloyed low-carbon steel considered here, not a licence to mix ferrous families. The manufacturer describes intentional microalloying and separately lists coated variants. No chemical table maximum/minimum is a lot assay, no nominal thickness/density/yield is imposed and no clean-scrap condition is assumed without observation. An oily/contaminated treatment route is outside this selected supply specification. The steelworks agreement and actual tests control acceptance. The sources are a transparent technical synthesis of compatible operations rather than a same-factory recipe; AHSS guidance supplies only qualitative concepts.

Existing panel-production rules can inform the source-stamping operation but do not supply this bale-feed reference function or receiver-grade handling. Metal recovery/steelmaking and loose mill-scale methods have different products and gates. This retained directory owns only the explicit narrower category below, with classification mapping and scientific acceptance separate.

The official 39340 entry names ferrous scrap without a grade or processing recipe. Metallic sheet offcuts are the narrower product selected here; slag/scale (39310), non-steel ash/residues (39320), precious-metal scraps (39331–39333), remelted ingots (39350), nonferrous scraps (3936), ships for breaking (39370) and batteries (39380) are outside this method. These classification titles do not establish buyer acceptance.

The Columbia City manual distinguishes #1 Busheling from #1 Bundles (hydraulic compression), and the Roanoke AP019 procedure separately lists Busheling and #1 Bundles with different buyer limits. These are two receiving sites of the same corporate group, not independent industry-wide acceptance studies. They support separate grade/form inspection and recorded rejection, not a confirmed HC340LA buyer, automatic ISRI grade or transferable numeric limits. Actual receiver agreement and assays remain required. The reference Product flow UUID is unresolved: generic alloy formation and waste identities do not verify this unmelted bale.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.ferrous-waste-and-scrap |
| classification_refs | CPC 3.0:39340, segregated HC340LA sheet offcut bales under the maintained narrower classification decision |
| covered_products | One segregated uncoated HC340LA cold-stamping offcut stream; mechanically sheared when necessary and hydraulically baled; accepted as low-alloy steel feed |
| excluded_products | Mixed ferrous families; stainless/cast iron; coated/electrical sheet; oily sludge or contaminated scrap; turnings/borings and their briquettes; oxide scale/slag; remelted ingots; loose scrap delivery; purchased finished bales repacking; treatment-service reference |
| representative_product | One declared HC340LA stamping-offcut bale specification; no universal bale density or impurity limit |
| production_route | Burdened whole sheet receipt → cold blanking/piercing/forming and co-output separation → segregated collection/inspection → necessary mechanical shear → hydraulic baling → first receiver-grade release → cohort-linked storage/handling/road supply and actual steelworks receipt |
| market_state | Unmelted metallic HC340LA offcuts in declared bales; measured net as-released mass with actual accepted surface state, excluding strapping/seals/containers |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply segregated metallic bales qualified for the declared steelworks with attributable supply services |
| How much | 1 kg first-released net feed with cohort-linked services to receiving gate; not a net-delivered-kg equivalence |
| How well | Actual HC340LA origin and agreed bale/contamination/receiver tests passed |
| How long or cycle | One traceable first-release cohort and disclosed supply-service history; no assumed melting yield/lifetime |
| reference_flow_link | `finished_bale` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Segregated uncoated HC340LA cold-stamping offcut bale |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual HC340LA heat/coil certificate and independently sampled whole-alloy assay; uncoated cold-rolled supply width at least 600 mm and declared thickness; supplier steelmaking and rolling/annealing/oiling boundary with inherited burden; one segregated cold blanking/piercing/forming source and site in China; actual bale dimensions/integrity and necessary mechanical shearing/hydraulic compaction; receiver and mutually agreed low-alloy steel-feed specification; sampled moisture/residual oil/rust/foreign metal and hazardous contamination results; actual legal Product supply status distinct from a Waste-treatment service; first-release gate/event IDs and net Q_c excluding every package; gross physical V and complete attributed exchange vector A; opening/closing WIP and raw/FG stock quantities with stage/cohort history; failures and Q-zero/start-stop/idle/cleanup/rework loads; gross shipments and actual steelworks receipts/returns/reversals linked to original Q_c; every packaging component and first external receipt/return ledger; real provider and native type/route/form/geography/property/unit restrictions for each exchange; actual electricity voltage and grid/time and supplier oil formulation and hydraulic-fluid density state; uncertainty and incomplete downstream-service cohorts |

Every qualifier must be in dataset metadata, reference-flow comments or equivalent consumed context; missing any makes that package definition incomplete. Every selected card’s complete native restrictions also apply; retaining only UUIDs or this table is insufficient.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | First quality release at preparation gate: weigh net as-released HC340LA feed and exclude every package using cp_release. Reference is 1 kg; Q_c is new first release only, not net sales or received steelworks mass. |
| unit_state | all inventory rows | actual row property | actual row unit | Keep raw units/state; convert before attribution then normalize only in c_normalize_once. Integrate true rates once; cumulative readings never gain an extra time factor. Use independently measured formulation-specific density and preserve hydraulic Volume/m3. |
| alloy_components | whole material and relevant elements | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Whole steel/formulation and physical species balances are independent of burden allocation. Actual alloy assay and oil/free-water/solid partitions do not add to the whole product. No assumed oxidation, chemical water or residual-fitted composition. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received uncoated HC340LA cold-rolled sheet at least 600 mm wide before source cold stamping; complete actual upstream steel and supplier oil/packaging history retained |
| starting_condition_role | Physical upstream handover with inherited burden, not a waste cut-off or purchased-bale packing gate |
| product_classification_scope | Only segregated metallic-sheet HC340LA cold-stamping bales within CPC 39340; oxide scale and remelting ingots excluded |
| recursive_input_rule | Do not receive finished scrap bales as raw sheet for this manufacture. Real external returns preserve original cohort, physical state and burden vector; internal circulation cancels without new production |
| upstream_dataset_requirement | One actual compatible sheet provider covers declared iron/steel route, refining/microalloy additions, rolling/annealing and real mill-oil/packaging boundary. Import its allocated burden once; do not reauthor embedded steelmaking or assume BF-BOF/EAF route, virgin fraction or recycled credit. Actual upstream road legs are included exactly once |
| disclosure | All qualifiers; first Q_c gate separate from final steelworks receiving service gate; allocation; stock vectors; complete co-outputs; physical and package balances; uncertainties and incomplete services |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_route | complete scoped route | Include source sheet receipt and upstream steel formation burden, original cold-stamping formation and full co-output, segregated collection, necessary shear/baling, QA and all attributable supply services through the steelworks receiving gate. The named sources support compatible unit operations; this is a transparent technical synthesis, not a claim that one SKU/factory/order demonstrates every operation. AHSS sources supply qualitative recording/lubrication concepts only; their loads/settings do not transfer to this conventional HSLA grade. | `voestalpine-hsla-2024`; `was-quality-control`; `was-lubrication`; `rema-ferrous-2026`; `jrc-ilcd-2010` |
| b_grade | whole product and receiver | Use one actually certified HC340LA heat stream and agreed receiver specification. Source-sheet chemical maxima/minima are not the lot assay or fractions to add as purchases. No automatic ReMA 207/208/234/235 certification: alloy-free clauses and consumer-specific dimensions differ. Independently observe oil/moisture/rust, other metals, non-metal inclusions and hazardous contamination before acceptance. Thermal cutting, de-oiling, chemical washing of scrap, melting, blending with other grades or turnings requires a reviewed different route. | `voestalpine-hsla-2024`; `rema-ferrous-2026` |
| b_first_q | finished_bale | Fix the first receiver-grade quality-release gate at the preparation facility. Q_c is newly first-released net qualifying steel-feed mass in cohort c, excluding every package and previous release. Accepted closing FG from c already belongs to Q_c; never add it again. Storage, dispatch, steelworks reception and repeat tests create no production. Reverse an invalid first release only with that lot and its whole vector; a corrected repeat release restores previously reversed eligible mass to its original cohort, never new current Q. | `jrc-ilcd-2010` |
| b_wip | all inventory rows | Retain failed and zero-output batches, start/stop, idle, cleanup and real rework. Every opening/closing WIP lot carries physical quantity/state and a complete per-exchange inherited vector covering materials, utilities, emissions, waste and services. Transfer the vector with the lot. A_jc is current allocated raw load plus opening-WIP vectors entering c minus closing-WIP vectors retained, with failure loads conserved. Do not deduct closing accepted FG production burden again. Old accepted FG sent to rework transfers its original vector in and out once; assign only real incremental rework to its original cohort. | `jrc-ilcd-2010` |
| b_services | cohort services to steelworks gate | Keep post-release storage, packaging/repacking, handling, dispatch, actual transport, reception tests, external returns and incremental rework in disjoint H_jc ledgers linked to original Q_c. H is a service load, never a production denominator. Record gross shipments, steelworks accepted mass, rejects and return/reversal of original deliveries. Customer return reverses its original delivery leg with history retained; it does not erase original production or manufacture new Q. Unserved FG and unfinished cohort services remain disclosed; a partial service history is not complete delivered-gate evidence. | `jrc-ilcd-2010` |
| b_physical | manufacturing FG and consolidated gates | Use the same physical interfaces in all balances. Manufacturing: opening raw/fluid/empty-package stores and WIP + external inputs + old FG sent to rework = closing corresponding stores/WIP + V_new + V_old returned to FG + external rejects/waste/emissions. V_new contains Q_c and actual attached packages; Q_c is not another output. FG: opening gross FG + V_new + external accepted returns + V_old returned + service packaging issued + measured moisture uptake = closing gross FG + gross dispatch + old FG to rework + external losses. Cancel all internal transfers at consolidation, retaining all external physical legs. Gross V and burden A are different ledgers. | `jrc-ilcd-2010` |
| b_packages | each packaging component | For each individual material: opening empty + opening attached WIP + opening attached FG + opening reusable stock + external purchases/first receipts P + external returns received ER = closing empty + closing attached WIP + closing attached FG + closing reusable stock + material on gross physical shipments S + external returns out EO + waste W. Include original sheet-supply straps, solid-wood supports and PE film from first external receipt. In this component ledger attached WIP includes packages still attached to received raw sheet awaiting issue; count those components once and keep raw-steel stores net of them in the manufacturing mass balance. Avoid a second upstream burden if embedded in the sheet provider. Internal reuse cancels and is not procurement, Q, coproduct or credit. Do not use net sales in S. | `jrc-ilcd-2010` |
| b_extend | all actual exchanges | Add a physically specific atomic row for every actual unlisted material, purchased formulation, fuel, refrigerant, water stream, package, service, waste mixture and identified emitted species before reporting. Unknown is not absent or zero. This selected route uses electrical mechanical handling/shearing/hydraulic baling and outsourced road freight; onsite combustion is not presumed. If onsite fuel equipment actually exists, add that fuel and each measured combustion species with proper air/resource interfaces and review scope. No boiler, steam, condensate or heat-exchanger-water return is presumed; any real external return requires its own Product return with mass, temperature/enthalpy and supplier water/energy agreement. | `was-quality-control`; `was-lubrication`; `jrc-ilcd-2010` |
| b_receiver | receiver-grade release | Use actual bale-form and heat-specific buyer agreement, sample the interior where required, retain nonconformity/rejection and receiving records. Loose busheling acceptance does not establish hydraulic-bale acceptance; neither cited site establishes an HC340LA receiver or a universal impurity/density limit. | `sdi-scrap-2023`; `sdi-roanoke-2026` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| steel_feed_supply | Source stamping through baled metallic feed supply | required | Only the complete conjunction of scope conditions | foreground | new first-release net Q_c; services keep original Q_c |

Within this consolidated process keep separate source-stamping, collection/shear/baling, first-quality, FG-service and terminal-reception ledgers. Internal offcut/air/water/rework transfers pair and cancel. Each card uses the same single-normalization a_jc and disjoint s_jc in section 8; full co-output and reusable-return physical context uses separate v_jc, never burden-weighted physical mass. Protocol aggregation tags name the final per-reference view, not division during collection; collection_method retains raw numerators. Conditional cards apply only when actually present; unknown is not zero.

### Process: Source stamping through steel-feed supply (`steel_feed_supply`)

#### Inputs

##### Product flows

###### Whole source steel sheet (`received_sheet`)

One whole uncoated HC340LA cold-rolled sheet supply at least 600 mm wide. Trace actual heat, width, thickness and supplier steelmaking/rolling/annealing/oiling boundary. No native alloy/non-alloy classification is inferred from a trade grade: flow UUID remains unresolved. Preserve whole sheet mass once, with separately tracked attached mill oil and packages; do not duplicate embedded burden.

- Selected flow: Uncoated HC340LA cold-rolled steel sheet, width at least 600 mm
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same section-8 a_jc and disjoint s_jc results once; retain undivided raw records and physical V without a further Q division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_origin`
- Sources: `voestalpine-hsla-2024`; `jrc-ilcd-2010`

###### Metered electrical supply (`electricity`)

Meter electrical supply to the actual site interface. Include press, conveyors, shear, hydraulic-baler drives, actual cooling/cleanup, testing, electric handling and idle/start-stop loads. Energy uses Net calorific value/MJ support and metered kWh converts by 3.6 once. The flow UUID, voltage and geographic/temporal provider require confirmation; internal generation and embedded grid losses are not purchased twice.

- Selected flow: Low-voltage alternating-current electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the same section-8 a_jc and disjoint s_jc results once; retain undivided raw records and physical V without a further Q division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources: `jrc-ilcd-2010`

###### Hydraulic-system fluid replenishment (`hydraulic_fluid`)

One whole mineral- or synthetic-base-oil hydraulic formulation with additives for power transmission/lubrication/heat transfer. Native Product uses Volume, not Mass; record externally supplied replenishment in m3 and circuit stocks/leaks/withdrawal separately. A mass balance requires independently measured density of this formulation at its real temperature, not water density or an assumed grade. This identity does not approve a supplier/viscosity or a water-glycol formulation. Internal circulation is not another supply.

- Selected flow: Hydraulic Fluid `30691a38-a947-4b41-991e-194f6c9aa88f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Use the same section-8 a_jc and disjoint s_jc results once; retain undivided raw records and physical V without a further Q division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `jrc-ilcd-2010`

###### Whole purchased stamping oil (`forming_oil`)

Conditional actual additional press application, distinct from supplier-embedded sheet oil. Count the complete purchased oil/additive formulation once; retain SDS, supplier composition and applied/recovered/retained/waste quantities. It is not a hot sheet-rolling oil, solvent or hydraulic fluid. No fixed dosage or active-ingredient purchase is inferred. An actual aqueous emulsion or onsite mix needs separate whole-formulation or each separately purchased ingredient and real mixing energy/loss records.

- Selected flow: Straight mineral-oil press-forming lubricant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same section-8 a_jc and disjoint s_jc results once; retain undivided raw records and physical V without a further Q division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `was-lubrication`; `jrc-ilcd-2010`

###### Treated make-up and cleaning water (`process_water`)

Conditional externally treated industrial water at the actual declared quality/treatment/supply interface. Native Product/Mass establishes no source or provider. Record real cooling or housekeeping makeup only; internal recirculation cancels. No wet scrap-deoiling route is presumed. Natural water abstraction needs its own resource/treatment inventory. A volume-to-mass conversion uses independent water density at measured state.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same section-8 a_jc and disjoint s_jc results once; retain undivided raw records and physical V without a further Q division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `jrc-ilcd-2010`

###### Outsourced road freight (`road_freight`)

The archived generic Product flow identifies transport workload in t*km, not a verified road vehicle or provider. Use one actual outsourced road-freight service with matched geography, period, vehicle and loaded/empty-return coverage. Workload = actual carried gross kg times km / 1000, before attribution. Maintain production A and disjoint cohort-service H separately; never add vehicle fuel/emissions already included in the provider.

- Selected flow: transport in t*km `4f1a3f30-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: mass*distance `838aaa20-0117-11db-92e3-0800200c9a66` / t*km
- Amount rule: Use the same section-8 a_jc and disjoint s_jc results once; retain undivided raw records and physical V without a further Q division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_transport`
- Sources: `jrc-ilcd-2010`

###### Purchased cotton cleaning cloth (`cotton_wipe`)

Conditional one supplied cotton cloth for actual press/baler maintenance cleaning; identify composition and its own provider. Solvent/detergent additions are separate real materials, never hidden inside an assumed cloth dose.

- Selected flow: Cotton cleaning cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same section-8 a_jc and disjoint s_jc results once; retain undivided raw records and physical V without a further Q division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `jrc-ilcd-2010`

###### Steel band arriving with sheet (`incoming_steel_band`)

Count actual band from first external sheet receipt, including external returns. It is packaging, not HC340LA feed. Preserve actual procurement/embedded-provider treatment and lifecycle.

- Selected flow: Carbon-steel coil packaging band
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same section-8 a_jc and disjoint s_jc results once; retain undivided raw records and physical V without a further Q division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ilcd-2010`

###### Solid-wood coil support at receipt (`incoming_wood_support`)

Conditional actual solid-wood support at first receipt; no plywood, treated wood, agglomerated wood waste or fuel identity. Trace reusable stocks and measured moisture separately.

- Selected flow: Untreated solid-wood coil support
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same section-8 a_jc and disjoint s_jc results once; retain undivided raw records and physical V without a further Q division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ilcd-2010`

###### PE film arriving with sheet (`incoming_pe_film`)

Conditional actual polyethylene coil wrapping film at first receipt; preserve whole composition, tare, attached stocks and disposal. PET, multilayer composites and resin-only inputs require another specific identity. Flow UUID remains unresolved; no generic family or resin-plus-film duplicate is allowed.

- Selected flow: Polyethylene film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same section-8 a_jc and disjoint s_jc results once; retain undivided raw records and physical V without a further Q division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ilcd-2010`

###### Additional bale securing band (`bale_band`)

Conditional actual separately purchased securing band after hydraulic compression. Self-supporting bales do not imply an invented band. Keep it outside net steel-feed Q even if the steelworks later charges the band; do not credit it as HC340LA feed.

- Selected flow: Uncoated carbon-steel bale securing band
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same section-8 a_jc and disjoint s_jc results once; retain undivided raw records and physical V without a further Q division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ilcd-2010`

###### Carbon-steel band seal (`bale_seal`)

Conditional actual seal, separate from band procurement and mass. No band/seal combined card or assumed pieces-to-kg factor; weigh actual seals when only count is recorded.

- Selected flow: Uncoated carbon-steel strapping seal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same section-8 a_jc and disjoint s_jc results once; retain undivided raw records and physical V without a further Q division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ilcd-2010`

###### Externally received reusable steel collection bin (`reusable_bin_in`)

Conditional actual external first receipt or return of one welded-steel bin; count its whole mass and actual life/repair service. Internal transfers/reuse cancel, with no new bin purchase or coproduct.

- Selected flow: Reusable welded-steel scrap collection bin
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same section-8 a_jc and disjoint s_jc results once; retain undivided raw records and physical V without a further Q division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ilcd-2010`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### First-released HC340LA steel-feed bale (`finished_bale`)

One unmelted metallic offcut stream from the declared uncoated HC340LA source, hydraulically baled after only necessary mechanical shear. Accept only actual agreed receiver-grade dimensions/integrity/contamination with legal Product supply function. This is not a Waste-treatment service, mixed ferrous family, turning briquette, pure iron, mill scale or remelted ingot. First quality-release Q_c excludes all straps/seals/bins and earlier releases; keep steelworks receipt as its cohort service/physical leg, not another output. A generic Waste identity cannot be rebound as this Product.

- Selected flow: Segregated uncoated HC340LA cold-stamping offcut bale
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources: `rema-ferrous-2026`; `jrc-ilcd-2010`

###### Original stamped-blank co-output (`stamped_blank`)

Record the complete original drawing/heat-specific blank output with its actual retained oil state and allocation. It is not packaging or another scrap reference. Its gross physical mass V is retained independently of burdens attributed to the scrap. Any dedicated later processing outside the source-stamping gate is excluded and its market value is adjusted back to the common source gate for residual allocation.

- Selected flow: Uncoated HC340LA cold-stamped structural blank
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the same section-8 physical-context result v_jc; it is not attributed burden or additional production.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_origin`
- Sources: `voestalpine-hsla-2024`; `jrc-ilcd-2010`

###### Reusable bin returned externally (`bin_return`)

Conditional actual external whole-item return to its owner, with real mass/state and return documentation; preserve original burden/lifetime and any real repair. Physical return is neither new scrap production nor automatic sale/credit. Internal return is paired and cancels.

- Selected flow: Reusable welded-steel scrap collection bin
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the same section-8 physical-context result v_jc; it is not attributed burden or additional production.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ilcd-2010`

###### Solid-wood supports returned externally (`wood_return`)

Conditional actual external whole-item return to its owner, with real mass/state and return documentation; preserve original burden/lifetime and any real repair. Physical return is neither new scrap production nor automatic sale/credit. Internal return is paired and cancels.

- Selected flow: Untreated solid-wood coil support
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the same section-8 physical-context result v_jc; it is not attributed burden or additional production.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ilcd-2010`

##### Waste flows

###### Unaccepted clean source offcuts sent to recycling (`rejected_scrap`)

One actual segregated unaccepted clean HC340LA offcut waste stream sent to its documented recycling provider. Record whole mass, state, actual fate and receiver; flow UUID remains unresolved. This Waste cannot bind the finished_bale Product. No recovery yield or assembly-scrap percentage is assumed. Oily sludge, turnings and oxide scale require other specific rows.

- Selected flow: Clean HC340LA cold-stamping offcut waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same section-8 a_jc and disjoint s_jc results once; retain undivided raw records and physical V without a further Q division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outputs`
- Sources: `rema-ferrous-2026`; `jrc-ilcd-2010`

###### Captured metallic cutting dust (`captured_steel_dust`)

Conditional actual captured solid metallic mixture from the scoped mechanical operations, weighed whole with assay and one receiver. Source-origin partitions are not extra exports; do not identify it as pure iron or mill scale.

- Selected flow: Captured HC340LA mechanical-cutting dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same section-8 a_jc and disjoint s_jc results once; retain undivided raw records and physical V without a further Q division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outputs`
- Sources: `jrc-ilcd-2010`

###### Spent press-forming oil (`waste_forming_oil`)

Conditional separately collected whole spent formulation with actual water/solids/oil analysis and one treatment provider. Do not add its contained oil/water as extra waste outputs or infer all applied oil becomes waste.

- Selected flow: Spent mineral-oil press-forming lubricant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same section-8 a_jc and disjoint s_jc results once; retain undivided raw records and physical V without a further Q division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outputs`
- Sources: `jrc-ilcd-2010`

###### Withdrawn hydraulic oil (`waste_hydraulic_fluid`)

Conditional whole circuit withdrawal with measured mass, composition and one provider; distinguish leakage, stocks and legitimate reuse. Never identify it as regenerated saleable lubricant merely because a recycling record exists.

- Selected flow: Spent hydraulic-oil formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same section-8 a_jc and disjoint s_jc results once; retain undivided raw records and physical V without a further Q division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outputs`
- Sources: `jrc-ilcd-2010`

###### Used oily cotton cleaning cloth (`oily_cotton_wipe`)

Conditional actual whole waste cloth including retained oil/water/solids; measure it and keep constituent/source subaccounts non-additive with one actual treatment provider.

- Selected flow: Cotton cloth contaminated with press oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same section-8 a_jc and disjoint s_jc results once; retain undivided raw records and physical V without a further Q division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outputs`
- Sources: `jrc-ilcd-2010`

###### Collected equipment/floor-cleaning water (`cleaning_wastewater`)

Conditional actual whole wastewater crossing to one external treatment provider with independent water/oil/solid/species measurements. COD is a quality metric, not a molecular export. Direct discharge instead needs its actual water body and individual species, not a wastewater service plus duplicate elementary exports.

- Selected flow: Collected maintenance-cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same section-8 a_jc and disjoint s_jc results once; retain undivided raw records and physical V without a further Q division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outputs`
- Sources: `jrc-ilcd-2010`

###### Discarded steel packaging band (`band_waste`)

Conditional actual separate band waste, excluding any seals; preserve sheet-receipt/bale source partitions without adding both whole waste and origins. Do not include it in HC340LA reference Q.

- Selected flow: Discarded uncoated carbon-steel packaging band
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same section-8 a_jc and disjoint s_jc results once; retain undivided raw records and physical V without a further Q division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ilcd-2010`

###### Discarded steel band seal (`seal_waste`)

Conditional actual seal waste weighed separately from band, with one compatible receiver; count-to-mass requires measurement.

- Selected flow: Discarded uncoated carbon-steel strapping seal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same section-8 a_jc and disjoint s_jc results once; retain undivided raw records and physical V without a further Q division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ilcd-2010`

###### Discarded solid-wood support (`wood_waste`)

Conditional whole non-agglomerated untreated wood support waste with moisture and one real receiver. Do not use agglomerated wood-waste/fuel identity or assume a recycling credit.

- Selected flow: Discarded untreated solid-wood coil support
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same section-8 a_jc and disjoint s_jc results once; retain undivided raw records and physical V without a further Q division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ilcd-2010`

###### Discarded PE wrapping film (`pe_waste`)

Conditional actual film waste including measured contamination, with one whole-waste provider; polymer mass and contaminant subledger do not become separate duplicated exports.

- Selected flow: Discarded polyethylene coil wrapping film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same section-8 a_jc and disjoint s_jc results once; retain undivided raw records and physical V without a further Q division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ilcd-2010`

##### Elementary flows

###### Actual evaporated water to air (`water_vapour`)

Native Elementary water vapour, CAS 7732-18-5, uses Mass/kg and the emissions-to-air-unspecified compartment. Use only for that actual net gaseous-water emission; a known urban, non-urban/high-stack, long-term or upper-atmosphere interface needs its matching verified flow, not an unspecified-compartment substitution. Broad synonym lists do not authorize heavy/tritiated water, ice, bound water or a liquid-water export. Conditional measured H2O vapour from actual cooling/housekeeping; distinguish incoming ambient humidity and captured liquid carryover. This is free-water phase change, not assumed chemical reaction/structural-water formation. Unexplained mass loss or wastewater COD does not establish vapour. Identify other actual emitted substances separately using species evidence, real medium and speciation; do not treat VOC/NOx totals as one invented chemical.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same section-8 a_jc and disjoint s_jc results once; retain undivided raw records and physical V without a further Q division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `jrc-ilcd-2010`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_context | whole route | Use only an attributional study context in which allocation is required. Do not mix substitution/system expansion or automatic end-of-waste/zero-burden conventions with this inventory. Waste labels and sale prices alone decide neither burdens nor technical Product status. | `jrc-ilcd-2010` |
| a_separate | each exchange | First separately meter dedicated scrap collection, shear, baling and supply operations and perform feasible real or virtual subdivision. Retain the original stamped-blank co-output and all source-steel quantities. Dedicated co-output finishing belongs to that co-output. Assign physically embodied HC340LA sheet and its inherited supplier burden by independently traced material content; do not purchase Fe/C/Mn/Si/Nb/Ti again as additional ingredients. | `jrc-ilcd-2010` |
| a_physical | remaining multifunctional exchanges | For each still shared exchange establish the determining physical causal relation with functions using process evidence; different electricity, lubrication, transport and emission exchanges may need different criteria. Mass share is not a universal shortcut for press work or idle load. State equation, observations and uncertainty and conserve every raw numerator across functions. | `jrc-ilcd-2010` |
| a_residual | genuinely residual common process | Only for exchanges unresolved after the preceding steps use co-function market values at the same common process gate, actual state and contemporaneous period. Reconcile downstream baling/conditioning/packaging/transport costs to that gate before deriving prices. State currencies, quantities and sensitivity; missing/zero/negative or incomparable values require methodological resolution, not an invented ratio. No fixed allocation share or arbitrary choice between physical and economic allocation. | `jrc-ilcd-2010` |
| a_no_credit | recycling and external wastes | Scrap supply is not a substitute for virgin steel or a credited recycling service. Link each externally treated whole waste mixture to one real provider and retain source partitions as a non-additive analysis ledger. Avoid counting both a mixture and its contained metals/oil/water as separate exports or duplicating a provider’s included emissions. | `jrc-ilcd-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_origin | steel_feed_supply | origin steel and stamped co-output | material_records | heat; coil; supplier; grade; width; thickness; gross/tare/net kg; whole assay; mill oil; packaging; supplier boundary; stamped blank V; source scrap V | Receive traceable heat certificates and weigh sheet and full co-outputs; sample the alloy and attached oil/water independently; retain original raw quantities and provider burden before attribution. | kg; mass fraction; mm | each receipt and stamping lot | complete period and cross-period cohorts including zero-output periods | actual source/preparation sites through declared steelworks | per 1 kg reference flow | certificates; scale calibration; sampling; provider boundaries |
| cp_release | steel_feed_supply | first quality release and receiver receipts | quality_records | cohort; first event ID; gross kg; tare kg; net Q_c; bale dimensions; actual contamination results; spec; test date; receipt; rejection; original delivery; reversal | Calibrated weighing excluding each package; independent moisture/oil/metal/hazard sampling and actual agreed tests. Record first release once, stock and gross delivery/reception/return separately; no prior division. | kg; mm; mass fraction | each release and receipt/return | complete period and cross-period cohorts including zero-output periods | actual source/preparation sites through declared steelworks | per 1 kg reference flow | signed release and steelworks receipt; raw lab results |
| cp_energy | steel_feed_supply | electrical load | meter_records | meter; voltage; provider; raw kWh/MJ; timestamps; equipment/stage; idle/start-stop/cleanup; cohort partition | Read cumulative meters or integrate actual power rates over measured time; subtract paired internal meters only where boundaries overlap. Preserve raw records by production and cohort service; apply unit conversion before allocation. | kWh; MJ | each run and zero-output period | complete period and cross-period cohorts including zero-output periods | actual source/preparation sites through declared steelworks | per 1 kg reference flow | meter calibration; coverage and equipment ledger |
| cp_materials | steel_feed_supply | each atomic material | material_records | row_id; batch; whole supplied mass/volume; formulation; density state; external receipt; opening/closing store/circuit; recovery; loss; stage/cohort | Weigh or meter each specific whole supply; retain supplier/SDS composition as non-additive subledger. Measure formulation-specific density when conversion is needed and record internal mixing energy/ingredients separately when actually performed. Keep raw numerator undivided. | kg; m3; kg/m3 | each receipt/issue and stock boundary | complete period and cross-period cohorts including zero-output periods | actual source/preparation sites through declared steelworks | per 1 kg reference flow | invoice; SDS; calibration; density measurement |
| cp_outputs | steel_feed_supply | each separate external waste | waste_records | whole waste kg; constituent assay; origin partitions; receiver; hazard/state; storage; physical fate; provider coverage | Weigh each whole separate mixture with representative sampling and one actual receiver/provider. Retain origin partitions summing to the whole; they are not additional exports. Do not use a total residual to invent oil and water separately. | kg; mass fraction | each withdrawal and failure lot | complete period and cross-period cohorts including zero-output periods | actual source/preparation sites through declared steelworks | per 1 kg reference flow | transfer tickets; laboratory records; provider boundary |
| cp_species | steel_feed_supply | actual elementary species | emission_records | chemical; CAS; phase; medium; location; concentration; measured gas/liquid state; integrated volume or true rate; time; background; uncertainty | Use actual species-resolved measurement or independent stoichiometric evidence with measured reaction extent. Distinguish vapour/liquid entrainment and ambient humidity. Integrated volume is not multiplied by duration again; true rate is integrated once. COD/VOC totals remain indicators until actual molecular speciation exists. | kg; actual raw concentration/volume/rate units | each actual emission interval | complete period and cross-period cohorts including zero-output periods | actual source/preparation sites through declared steelworks | per 1 kg reference flow | sampling calibration; detection limits; speciation and medium |
| cp_packaging | steel_feed_supply | each package and reusable item | packaging_records | component; material; actual supply/provider; opening/closing empty/WIP/FG/reusable; first receipts P; ER; gross shipment S; EO; waste W; actual item mass | Weigh each separate band/seal/wood support/film/bin from first external receipt. Track attached stock and all gross external legs; paired internal reuse cancels. If recorded as counts, weigh actual configuration; no default kg/item. Preserve raw mass and embodied-provider flags without prior normalization. | kg; actual count with weighed mass | each receipt/issue/shipment/return and period end | complete period and cross-period cohorts including zero-output periods | actual source/preparation sites through declared steelworks | per 1 kg reference flow | stocktake; tare and calibration; external return receipts |
| cp_transport | steel_feed_supply | road freight workload | transport_records | actual leg; supplier; route km; gross cargo/package kg; vehicle; loaded/empty return; service boundary; production/cohort ID | Retain each leg distance and carried mass plus provider coverage and shared-function allocation evidence. Calculate actual workload before attribution and distinguish original receipt/dispatch/return legs; do not manufacture tonne-km from net reference Q alone. | kg; km; t*km; kg*km | each physical leg | complete period and cross-period cohorts including zero-output periods | actual source/preparation sites through declared steelworks | per 1 kg reference flow | weighbridge; carrier records; route and empty-leg evidence |
| cp_stock | steel_feed_supply | WIP/FG and inherited vectors | stock_records | lot; stage; cohort; raw/finished status; opening/closing physical state; each historical exchange vector; failure/rework; source and correction links | Reconcile physical stocktake with batch history and every input/emission/waste/service inherited amount. Preserve old FG vector on paired rework transfers; segregate new incremental service. Retain Q-zero load and unserved FG history. | kg; each exchange unit | each stock boundary and transfer | complete period and cross-period cohorts including zero-output periods | actual source/preparation sites through declared steelworks | per 1 kg reference flow | signed stocktake; immutable lot/vector reconciliation |
| cp_allocation | steel_feed_supply | exclusive and shared raw loads | allocation_records | exchange; function; dedicated meter; embodied material; determining physical relation; residual; common gate; actual state; price period/currency; adjusted cost; uncertainty | Collect raw function-specific records before any ratio. Document real/virtual subdivision and independent causal evidence; only genuinely residual exchange values use same-gate contemporary market evidence after downstream adjustments. Keep all function shares and sensitivity; no preset fraction. | actual exchange units; actual currency | each route/period change and cohort | complete period and cross-period cohorts including zero-output periods | actual source/preparation sites through declared steelworks | per 1 kg reference flow | meter traces; causal reasoning evidence; market/cost records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_units | all inventory rows | Reconcile receipts with opening/closing raw stores to obtain actual issued/consumed supplies before attribution; retain receipts as separate physical legs. Convert raw units before attribution; 1 kWh = 3.6 MJ and 1 t*km = 1000 kg*km. Mass from volume uses independently measured material-specific density at its actual state; whole supplied formulations remain one purchase. | raw records; independent density; cp_materials; cp_energy; cp_transport | converted raw records | `jrc-ilcd-2010` |
| c_q | finished_bale | Q_c = sum of newly first-released qualifying net bale mass in cohort c after documented original-cohort corrections; exclude all packages and prior releases. Closing accepted FG is already included. | cp_release; cp_stock | Q_c | `jrc-ilcd-2010` |
| c_attribution | all inventory rows | For each j conserve raw exchange quantity across functions after dedicated/virtual subdivision; determine exchange-specific physical causality and allocate only genuinely residual shared load by actual common-gate market value. Keep gross V unchanged by burden shares. | converted raw records; cp_allocation; cp_origin | allocated raw load B_jc | `jrc-ilcd-2010` |
| c_inheritance | all inventory rows | A_jc = B_jc + historical opening-WIP exchange vector transferred into c - closing-WIP vector retained outside release. Preserve failure/idle/cleanup and actual loss burdens. Do not subtract accepted closing FG again; old-FG rework transfers its inherited vector in/out and only its increment enters H_jc. | B_jc; cp_stock; cp_outputs | A_jc | `jrc-ilcd-2010` |
| c_service | all inventory rows | H_jc is the disjoint actual post-release service/incremental-rework vector for original cohort c, including actual gross delivery/return legs and terminal receiver testing. Maintain unfinished service scope explicitly. H is never an output denominator. | cp_stock; cp_transport; cp_packaging; cp_release | H_jc | `jrc-ilcd-2010` |
| c_normalize_once | all inventory rows | For Q_c > 0 perform the only normalization: a_jc=A_jc/Q_c and s_jc=H_jc/Q_c; final exchange per reference is a_jc+s_jc for disjoint production/service components. Gross physical context v_jc=V_jc/Q_c is a separate non-burden view of complete co-output/return/shipment quantities. Cards and aggregation tags reference these same results once. For Q_c=0 retain all real loads/stock and report no unit result; neither H nor current-period Q can replace original Q_c. | A_jc; H_jc; V_jc; Q_c | a_jc; s_jc; v_jc | `jrc-ilcd-2010` |
| c_physical | all material interfaces | Reconcile manufacturing and FG equations in b_physical and consolidated external V independently for whole physical mass, alloy metal, oil, water and measured relevant elements. Element assays are non-additive analyses of whole alloy/mixtures. Source chemistry limits do not close a balance; a single residual cannot solve two unknowns. No chemical reaction/oxygen uptake or structural water is presumed. | cp_origin; cp_materials; cp_stock; cp_outputs; cp_species | physical mass and element reconciliations | `jrc-ilcd-2010` |
| c_packages | each separate package | Apply the complete opening+P+ER=closing+S+EO+W ledger in b_packages to each material across empty/attached WIP/attached FG/reusable stocks. S follows gross physical shipments; cancel internal reuse and retain all first external receipts. | cp_packaging; cp_stock; cp_release | each package reconciliation | `jrc-ilcd-2010` |
| c_residual | physical diagnostics | Report F as the difference of the fixed-side physical ledger. Adding newly identified X adjusts only an exact duplicate already in OTHER on the same side by the same amount; do not fit X to F or erase unexplained uncertainty. Whole external waste and origin partitions sum once with one provider. | cp_outputs; cp_stock; cp_species | diagnostic residual and evidence gap | `jrc-ilcd-2010` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | each supply and output | Actual grade/form/route/native type/geography/provider matched independently; Product reference cannot be established by a Waste identity or family basename. | full native records; heat certificates; signed receiver specification |
| dq_raw | all records | Retain meter/weighbridge originals, detection limits, sampling design and uncertainty; no literature factory recipe or fabricated grade/amount/density. | calibration; laboratory records; raw ledgers |
| dq_stock | all cohorts | Complete physical and inherited per-exchange vectors, failures, Q-zero, stock/rework and receiver services; unfinished service coverage remains explicit. | cohort genealogy; c_physical; c_packages |
| dq_sources | method and science | Separate classification, manufacturer technical scope, industry preparation guidance and attributional allocation guidance; source examples are not a same-site recipe or scientific/translation approval. | source context and independent applicability assessment |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_scope | whole route | Check the complete source-to-receiver supply route and exclusions; confirm one certified HC340LA stream and actual receiver agreement without automatic ReMA grade or virgin-steel substitution. | `un-cpc-2025`; `voestalpine-hsla-2024`; `rema-ferrous-2026` |
| v_identity | every UUID and provider | Use only compatible native flow type/route/form/CAS/geography and all property/unit restrictions. Core Product identity unresolved means unavailable final native binding; auxiliary gaps remain specific named exchanges. Generic identity does not certify a provider. | `jrc-ilcd-2010` |
| v_quantity | all cards and cohorts | Enforce one new first-release Q_c, complete WIP inheritance and disjoint service H_jc at original Q_c. Verify raw records are undivided and c_normalize_once is performed once; Q-zero produces no unit result. | `jrc-ilcd-2010` |
| v_conservation | all physical interfaces | Independently close whole mass and relevant-element/oil/water ledgers with measured evidence, matched gates and every individual package from first receipt. Retain unexplained residuals; no two-unknown fit, mixture-origin duplication or internal transfer output. | `jrc-ilcd-2010` |
| v_complete | all actual burdens | Verify dedicated/virtual subdivision, exchange-specific causality and only residual same-gate market allocation; conserve raw loads including failures. Confirm all observed chemicals/energy/packages/wastes/species and outsourced boundaries; unknowns never pass as zero. | `jrc-ilcd-2010` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Declared prepared metallic steel-feed supply after actual identity/provider and completeness checks |
| allowed_use | One explicitly qualified HC340LA bale supply with first-release denominator and complete cohort services; expose actual steelworks received mass/yield separately |
| excluded_use | Universal ferrous scrap; net-delivered-kg equivalence; treatment-service substitution; scale/ingots/stainless/cast-iron; automatic credit or zero upstream burden |
| required_metadata | All required qualifiers and each selected card restriction; source and provider boundaries; real terminal receiving records; distinct Q_c/V/A/H ledgers |
| required_quality_disclosure | Data/site/period representativeness; measured contamination and uncertainties; all unserved FG/returns; native identity and provider gaps; calculation and service completeness |
| update_trigger | Different grade/coating/origin, physical form or prep route; receiver specification/legal role; native identity/provider revision; source/technology/period or stock-service boundary change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-2025 | official_guidance | UN CPC Version 3.0 explanatory notes, 30 June 2025, printed p.203; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 39340 scrap distinguished from 39310 scale and 39350 remelting ingots |
| voestalpine-hsla-2024 | handbook | voestalpine Micro-alloyed steels data sheet, 11/2024, pp.1–4; https://www.voestalpine.com/stahl/content/download/4681/file/Data-sheet-micro-alloyed-steels-voestalpine-EN-030225.pdf?inLanguage=eng-GB | HC340LA and uncoated supply identity; heat-analysis and coating counterexamples; no lot assay or footprint transfer |
| was-quality-control | handbook | WorldAutoSteel AHSS Guidelines, Quality Control, publisher HTML accessed 2026-11-20; https://ahssinsights.org/forming/quality-control/quality-control/ | Qualitative stamping input/trim-scrap and recording concepts; AHSS loads and settings do not transfer to conventional HSLA |
| was-lubrication | handbook | WorldAutoSteel AHSS Guidelines, Lubrication, publisher HTML accessed 2026-11-20; https://ahssinsights.org/forming/tooling/lubrication/ | Qualitative distinction between mill oil, whole supplied press lubricant and application; no AHSS numeric transfer |
| rema-ferrous-2026 | standard | ReMA ISRI Specifications January 2026, FS-2023, printed pp.20–23; https://www.isrispecs.org/wp-content/uploads/2026/01/2026-January-ReMA_ISRI_Specifications.pdf | Actual buyer agreement, cleanliness, sheet clippings/bundles versus turnings/mill-scale/cast-iron distinctions; no automatic trade-grade or density assignment |
| jrc-ilcd-2010 | official_guidance | JRC ILCD Handbook General guide for LCA—Detailed guidance, first edition March 2010, §§7.9.2–7.9.3; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional multifunctionality hierarchy and exchange-specific allocation; foreground stock/protocol requirements are explicit method implementation, not industrial observations |
| sdi-scrap-2023 | handbook | Steel Dynamics Structural & Rail Division, Iron & Steel Scrap Manual, 1400-020-001 Rev.0, 18 December 2023, pp.5–10; https://www.steeldynamics.com/wp-content/uploads/2024/01/1400-020-001-STEEL-SCRAP-IRON-AND-STEEL-SCRAP-MANUAL-V.0-12-18-2023.pdf | Columbia City inspection and separate #1 Busheling/#1 Bundles forms; site-specific counterexample only, no automatic numerical transfer or HC340LA acceptance |
| sdi-roanoke-2026 | handbook | Steel Dynamics Roanoke Bar Division, Inspection of Scrap AP019 Rev.2, 29 April 2026, pp.1–2,7–8; https://lpg.steeldynamics.com/pdf/Roanoke/Documentation/Op-Procedure-Receiving-Inspection-Scrap.pdf | Separate receiving-site inspection, chemistry and bundle interior controls; same corporate group as Columbia City, no industry-wide acceptance or verified HC340LA receiver |
