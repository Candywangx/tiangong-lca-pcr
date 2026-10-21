---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.mechanically-edge-polished-annealed-glass-sheets
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Mechanically edge-polished annealed glass sheets

## 1. Scope and Applicability

Complete cold conversion of received unworked annealed soda-lime-silicate float sheets into uncoated monolithic unframed flat-edge-polished sheets with small chamfers, through first-quality-released dry bare product. Clear/body-tinted variants preserve actual composition/configuration. A cabinet/furniture-covering supply example establishes a real non-safety terminal; actual end uses require independent suitability assessment. No generic strength, certification, life, temperature, density, thickness or per-piece mass is prescribed.

Independent product offers, scoring/heat-treatment guidance, machine wheel/wash context and attributional method evidence form a transparent technical synthesis, not one common factory/SKU/current order. RIG offers polished annealed glass but also has conflicting sharp-edge wording and prefers heat treatment for holes/notches. No non-safety drilled terminal follows. This route excludes drilling, bending, engraving, enamel, strengthening/tempering, lamination, coating, mirrors, insulating units and frames. Existing unworked-sheet manufacture may supply upstream stock; it cannot replace the cold edge conversion. This is narrower than whole37114 coverage.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.mechanically-edge-polished-annealed-glass-sheets` |
| classification_refs | CPC3.0 `37114`; narrower |
| covered_products | Uncoated monolithic unframed annealed float sheets with machined flat polished edges and small chamfers |
| excluded_products | Unworked stock manufacture; repacking finished glass; bent/drilled/engraved/enamelled; strengthened/tempered; laminated; coated; mirrored; insulating; framed |
| representative_product | Dry bare flat-polished annealed sheet for a declared cabinet/furniture-covering supply, no safety claim |
| production_route | Receive stock → layout/score/breakout → wet edge grind/polish → actual wash/rinse/dry → inspect/first release; actual post-release services separate |
| market_state | Bare unframed monolithic annealed sheet, actual drawing/finish/configuration; packages/services separate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Mechanically edge-polished annealed glass sheets |
| How much | 1 kg |
| How well | Actual drawing/composition/thickness/configuration and flat polished edge/chamfer inspection; annealed non-safety state |
| How long or cycle | One full disclosed representative production period/cohort including all modes; actual service interval separately disclosed; no lifetime claim |
| reference_flow_link | `finished_sheet` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Glass (formed & finished) `82b33e71-bfaa-49b4-9627-ee5963433f6e` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | annealed soda-lime-silicate composition and clear/body-tinted state; uncoated monolithic unframed state; actual unworked float-stock supplier boundary and upstream dataset; measured net dry mass and dimensions; thickness/configuration distribution; machined flat polished edge and chamfer drawing; actual inspection and acceptance method; absence of heat strengthening and tempering; absence of laminate coating mirror insulating assembly bending holes and engraving; scoring and breakout route; wheel types and actual cerium supply/preparation route; water quality and each actual formulation; first-release Q gate and unique lot genealogy; period and site/geography; actual energy voltage and mix; WIP/FG and non-WIP tool/fluid exchange histories; each package and gross movement ledger; separately observed matched-cohort service interval and coverage |

Declare every qualifier in metadata, process/reference-flow notes, product description or an equivalent field. The broad reference identity establishes no accepted classification mapping, provider/grade or safety approval; complete native restrictions and the37199 classification discrepancy are retained on finished_sheet.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | finished_sheet | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Unique first-release dry bare massQ; finished_sheet is1kg. Exclude packages, retained water and repeated release/dispatch; weigh each configuration, no assumed item mass/density. |
| native_units | all inventory rows | Native reference property | row unit | Mass 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg; electricity native Net calorific value 93a60a56-a3c8-11da-a746-0800200c9a66 → 93a60a57-a3c8-11da-a746-0800200c9a66 → MJ. Convert raw kWh×3.6 once before assignment. Secondary properties provide no independent density/item mass. |
| raw_quantity | all inventory rows | Actual extensive quantity | raw unit | Whole supplied formulation once; composition is a child ledger. Integrate only true rates; integrated gas/liquid volume is not multiplied by time. Independently measure actual material/state density before volume-to-mass; no water-density substitution for oil/slurry or one residual fitting two unknowns. |
| single_normalization | all inventory rows | Matched A_i and Q | per reference flow | Raw collection is undivided. After conversion, history and actual allocation calc_reference executes A_i/Q once; every card references that same x_i. Q=0 keeps raw burden without a unit result. |

## 5. System Boundary


### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received unworked uncoated annealed float stock with supplier burdens and actual incoming packages |
| starting_condition_role | Purchased/transferred feedstock for complete cold conversion |
| product_classification_scope | CPC3.0 `37114`; narrower |
| recursive_input_rule | Same-category inputs stay visible with inherited burdens; no recursive disappearance or finished-sheet repacking labelled manufacture |
| upstream_dataset_requirement | Match stock, each formulation/tool/utility/package to actual supplier form/state and transport/packaging/water-energy boundary |
| disclosure | First-release Q manufacturing gate; complete conversion; stock vectors; separately observed service interval and physical FG/package gate; exclusions/unknown quantities |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route` | manufacture | Start at received unworked annealed float stock with inherited supplier burdens. Include unloading/storage, layout, wheel scoring/breakout, wet grinding/polishing of every specified edge/chamfer, actual polishing-liquid preparation, wash/rinse/dry and dimensional/edge inspection to first release. Include pumps, air generation, dust capture, water/sludge treatment, cleaning and maintenance. Buying an already polished sheet and packing it is outside this conversion route. | `vitro-scoring-td119`; `bovone-glass-2024`; `oneday-edgework` |
| `boundary_scope` | all products | Require an actual flat-polished annealed terminal. Polishing proves no safety performance, tempered state or certification. Exclude heat strengthening/tempering, laminated, bent/drilled/engraved/enamelled, coated, mirrored, insulating and framed products. A different evidenced route needs its own applicability decision. This narrower candidate does not cover all37114. Upstream stock melting is not repeated as foreground conversion. | `unsd-cpc-2025`; `vitro-heat-treatment-td124`; `rig-fabrication`; `oneday-annealed` |
| `boundary_q` | manufacture; supply_services | Q is unique new first-quality-released dry bare-sheet kg after declared edgework, wash/dry and inspection. Count each physical piece once; closing FG of that cohort is already Q, never another output. Delivery/reinspection/repair/reshipment create no Q. Keep actual post-release packing/storage/handling/dispatch and losses in a separate matched-cohort service account with observed interval, incomplete future coverage and later increments. Opening-FG services cannot be divided by unrelated current Q. | `oneday-edgework`; `ilcd-general-2010` |
| `boundary_history` | all inventories | Reconcile manufacture and FG-service ledgers separately by physical quantity and per-exchange inherited vector. Manufacture closing stocks are unreleased raw/WIP and unassigned installed tool/fluid/asset service inventories; transfer every newly first-released sheet and its manufacturing vector into FG, including sheets still held at period end. Keep failed/zero-output, start/stop, idle, cleanup and actual rework burdens. FG returns reverse the original gross dispatch quantity/vector; record each actual added repair/wash material and water, removed glass/water, and incremental service exchange separately against the original Q cohort. Reinspection and repair create no new Q. Retain included asset physical stocks and documented service assignments separately; no invented lifetime or repeated full procurement. Internal release transfers and internal Q cancel on consolidation. | `ilcd-general-2010` |
| `boundary_packaging` | supply_services | For each article opening empty + attached WIP/FG + reusable stock + external acquisitions + external-return-received = corresponding closing + with gross physical dispatch + external-return-sent + waste. Apply independently to incoming and outgoing packages/racks. Cancel internal reuse/transfers; return receipt is not new procurement. Preserve gross dispatch even when glass returns. Packaging never enters bare-glass Q, becomes an automatic coproduct or substitution credit. | `ilcd-general-2010` |
| `boundary_formulations` | all inventory rows | Purchase each whole supplied scoring fluid, slurry, coolant or detergent once. Assay, carrier water, active material and impurities are child composition ledgers. For actual in-house preparation record every separately purchased ingredient, makeup water, electricity and preparation loss without also purchasing the same complete slurry. Add each actual missing material, energy/fuel/heat, package, waste and identified species/destination as an individual card; unknown presence is not zero/not-applicable. | `vitro-scoring-td119`; `bovone-glass-2024` |
| `boundary_physical` | all physical gates | Independently reconcile total wet/dry mass, free/carryover/evaporated water and relevant glass/Ce/wheel/organic elemental content. Mixed glass fines are not pure SiO2; COD/VOC are indicators, not one chemical. Actual species, reactions, oxygen uptake and reaction/structural/phase water need independent evidence; cold mechanical work implies no batch-carbonate decomposition or combustion. One residual cannot determine two unknowns. Manufacturing subgates, FG service and combined physical gates must agree; unresolved closure holds the affected dataset. | `bovone-glass-2024`; `ilcd-general-2010` |
| `boundary_utilities` | all utilities | Meter each actually present utility; catalog power/capacity is not consumption. Air knives may be blower-driven; invent no compressed-air purchase, boiler or steam. For actual external heat-exchange water/condensate returns record incoming/outgoing mass, actual temperature/pressure/enthalpy and supplier water/energy convention, including the real return as Product flow. Suppress neither real returns nor copy fictitious ones. Internal circulation is not repeated procurement. | `bovone-glass-2024` |

## 6. Process Inventory Structure


### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | Receive; score/breakout; wet edge grind/polish; actual liquid preparation; wash/dry; inspection/first release | required |  | Complete foreground conversion with actual utilities/residues | per1kg reference flow |
| supply_services | Actual post-release packing storage handling dispatch and repair increments | required | Observed same-cohort interval including unshipped FG; actual conditional articles only | Separate service account, no new glass output | per1kg reference flow |

The manufacture process includes every listed substep, with substep meters/transfers/genealogy retained and internal transfers cancelled. Every card uses the same first-Q cohort. Post-release supply services do not add another product output for closingFG or shipment; their independent physical ledger retains gross dispatch, returns and actual losses. Add each actually present missing exchange individually before dataset completion; unknown presence is not zero.

### Process: Complete cold fabrication (`manufacture`)

#### Inputs

##### Product flows

###### Unworked annealed float stock (`stock_sheet`)

Received clear/body-tinted uncoated monolithic stock before scoring/edgework. Net dry glass and original supplier burdens are counted once, not a purchased polished finished piece. Native identity is manufactured sheet at plant and also includes face-ground/polished variants; restrict this exchange to actual unworked annealed float stock. Grade, thickness, density, coating and provider are not established. Native reference property→unit group→reference unit is `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg; secondary properties establish no independent density or item mass. Quantity linkage: x_i is exactly the single `calc_reference` result for this row from raw `cp_material`, after `calc_raw_conversion` and `calc_history` plus actual allocation; this is the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Float glass and surface ground or polished glass, in sheets `1b43024e-16ea-42d2-830d-329c4a2abc3d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_material`.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `vitro-scoring-td119`; `oneday-annealed`

###### Electricity (`core_electricity`)

Meter scoring/breakout, edging, slurry mixing, pumps, water treatment, wash/dry, air generation and abatement including failure/start/stop/idle/cleanup. Native identity is CN grid-average1–35kV customer-side consumption only. Native Net calorific value is the MJ energy property, not fuel mass. Other voltage/geography/contract mix requires verified replacement; no generator, renewable contract or site-specific factor follows from this identity. Native reference property→unit group→reference unit is `93a60a56-a3c8-11da-a746-0800200c9a66` → `93a60a57-a3c8-11da-a746-0800200c9a66` → MJ; secondary properties establish no independent density or item mass. Quantity linkage: x_i is exactly the single `calc_reference` result for this row from raw `cp_energy`, after `calc_raw_conversion` and `calc_history` plus actual allocation; this is the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_energy`.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `bovone-glass-2024`; `ilcd-general-2010`

###### Tap water (`tap_makeup`)

Actual externally supplied tap-water makeup for wet grinding, in-house liquid preparation, cleanup and wash. Native identity leaves supplier/geography unspecified and supplies only the Mass reference property; it proves no independent density or site treatment train. Distinguish makeup, internal circulation and DI water; slurry carrier water is not repurchased. Native reference property→unit group→reference unit is `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg; secondary properties establish no independent density or item mass. Quantity linkage: x_i is exactly the single `calc_reference` result for this row from raw `cp_water`, after `calc_raw_conversion` and `calc_history` plus actual allocation; this is the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Water, tap `6a8b6455-e9bb-4cb9-81ea-5e83413d5fe1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_water`.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `bovone-glass-2024`

###### Deionised rinse water (`di_rinse`)

Conditional actual de-ionised water supply only. Native Product/Mass identity provides no specific purity, route, geography or provider; it cannot identify ordinary mains/raw water. If made on site, collect tap feed and each real treatment input/energy/reject and cancel internal DI transfer instead of purchasing it twice. Native reference property→unit group→reference unit is `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg; secondary properties establish no independent density or item mass. Quantity linkage: x_i is exactly the single `calc_reference` result for this row from raw `cp_water`, after `calc_raw_conversion` and `calc_history` plus actual allocation; this is the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: de-ionised water `4f197bf0-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_water`.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `bovone-glass-2024`

###### Mineral-oil glass scoring fluid (`scoring_fluid`)

One actual whole supplied mineral-oil-based scoring formulation; keep supplier/SDS composition, volatile fraction, tare and opening/closing tank charge. TD119 gives no universal formulation or emission factor. An actual different formulation needs its own card; neat oil, quenching oil and drilling fluid are not automatic matches. Quantity linkage: x_i is exactly the single `calc_reference` result for this row from raw `cp_aux`, after `calc_raw_conversion` and `calc_history` plus actual allocation; this is the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Mineral-oil glass scoring fluid
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_aux`.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_aux`
- Sources: `vitro-scoring-td119`

###### Tungsten-carbide glass scoring wheel (`scoring_wheel`)

One supplied scoring-wheel assembly including its actual binder; elemental tungsten is not separately purchased. Trace unused/installed/retired mass and wear. Count-to-mass uses weighed net item mass for that configuration; TD119 supplies no universal wheel-size/load requirement. Quantity linkage: x_i is exactly the single `calc_reference` result for this row from raw `cp_aux`, after `calc_raw_conversion` and `calc_history` plus actual allocation; this is the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Tungsten-carbide glass scoring wheel
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_aux`.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_aux`
- Sources: `vitro-scoring-td119`

###### Metal-bond diamond grinding wheel (`metal_wheel`)

One actual supplied wheel assembly at its documented stage, with measured installed opening/closing mass, wear and retired-core mass. Record abrasive/binder configuration; pure synthetic diamond is not the assembly. Catalogue alternatives do not make every wheel universally present. Quantity linkage: x_i is exactly the single `calc_reference` result for this row from raw `cp_aux`, after `calc_raw_conversion` and `calc_history` plus actual allocation; this is the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Metal-bond diamond grinding wheel
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_aux`.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_aux`
- Sources: `bovone-glass-2024`

###### Resin-bond diamond polishing wheel (`resin_wheel`)

One actual supplied wheel assembly at its documented stage, with measured installed opening/closing mass, wear and retired-core mass. Record abrasive/binder configuration; pure synthetic diamond is not the assembly. Catalogue alternatives do not make every wheel universally present. Quantity linkage: x_i is exactly the single `calc_reference` result for this row from raw `cp_aux`, after `calc_raw_conversion` and `calc_history` plus actual allocation; this is the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Resin-bond diamond polishing wheel
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_aux`.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_aux`
- Sources: `bovone-glass-2024`

###### Felt polishing wheel (`felt_wheel`)

One actual supplied wheel assembly at its documented stage, with measured installed opening/closing mass, wear and retired-core mass. Record abrasive/binder configuration; pure synthetic diamond is not the assembly. Catalogue alternatives do not make every wheel universally present. Quantity linkage: x_i is exactly the single `calc_reference` result for this row from raw `cp_aux`, after `calc_raw_conversion` and `calc_history` plus actual allocation; this is the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Felt polishing wheel
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_aux`.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_aux`
- Sources: `bovone-glass-2024`

###### Cerium oxide powder (`dry_ceria`)

Only actual separately bought CeO2 powder used in in-house polishing liquid. Native CAS1306-38-3 describes pale yellow-white Ce(IV) oxide powder at plant; no specific particle size, purity, geography or polishing grade is fixed. Photocatalytic-use prose is no performance guarantee. Measure assay/moisture/form; nano, treated, mixed or pre-wetted products require separate compatibility. Actual mixing water, energy and loss remain separate. Native reference property→unit group→reference unit is `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg; secondary properties establish no independent density or item mass. Quantity linkage: x_i is exactly the single `calc_reference` result for this row from raw `cp_formulation`, after `calc_raw_conversion` and `calc_history` plus actual allocation; this is the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Cerium oxide `b23ee368-01e2-4fcd-8e8f-e8115ee04555`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_formulation`.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_formulation`
- Sources: `bovone-glass-2024`

###### Aqueous cerium-oxide polishing slurry (`bought_ceria_slurry`)

Alternative actual whole supplied aqueous ceria formulation, counted once at supplied mass. Assay/carrier water/stabilizers are child ledgers, not new purchases. Do not also count dry_ceria for the same purchased formulation. Generic native polishing powder fixes30% water and lists diamond/ceria alternatives; it is not bound to this unspecified slurry. Quantity linkage: x_i is exactly the single `calc_reference` result for this row from raw `cp_formulation`, after `calc_raw_conversion` and `calc_history` plus actual allocation; this is the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Aqueous cerium-oxide polishing slurry
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_formulation`.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_formulation`
- Sources: `bovone-glass-2024`

###### Water-miscible glass-grinding coolant concentrate (`coolant_concentrate`)

Conditional one actual complete water-miscible coolant formulation with supplier recipe/SDS and supplied concentration. Separate from slurry/scoring fluid and actual added dilution water; include original installed charge and makeup. Measure concentration drift rather than using a generic default. Quantity linkage: x_i is exactly the single `calc_reference` result for this row from raw `cp_formulation`, after `calc_raw_conversion` and `calc_history` plus actual allocation; this is the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Water-miscible glass-grinding coolant concentrate
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_formulation`.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_formulation`
- Sources: `bovone-glass-2024`

###### Mineral hydraulic oil (`machine_oil`)

Conditional actual mineral hydraulic fluid. Separate non-WIP installed opening/closing mass and inherited exchange vector from unused stocks, makeup, drain, leaks and retirement. Retention is not full consumption each period. PAO synthetic oil, furfural CAS98-01-1 and unspecified oil candidates are not accepted by name alone. Quantity linkage: x_i is exactly the single `calc_reference` result for this row from raw `cp_aux`, after `calc_raw_conversion` and `calc_history` plus actual allocation; this is the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Mineral hydraulic oil
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_aux`.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_aux`
- Sources: `bovone-glass-2024`

###### Aqueous glass-washing detergent formulation (`wash_detergent`)

Conditional actual supplier-specific whole aqueous cleaning formulation. Water-only washing implies no detergent. Identify constituent/residue/species subledgers independently, without repurchasing carrier water or treating COD as one chemical. Quantity linkage: x_i is exactly the single `calc_reference` result for this row from raw `cp_formulation`, after `calc_raw_conversion` and `calc_history` plus actual allocation; this is the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Aqueous glass-washing detergent formulation
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_formulation`.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_formulation`
- Sources: `bovone-glass-2024`

###### Liquid heat-exchange water (`exchange_water_in`)

Only a real external liquid heat-exchange-water boundary. Independently measure actual incoming/returned mass and temperature/pressure/enthalpy; retain supplier water/heat convention, avoiding double-counted cooling service. Pair only actual returns; internal circulation is not repeated purchase and no boiler/steam/fictitious condensate is assumed. Quantity linkage: x_i is exactly the single `calc_reference` result for this row from raw `cp_water`, after `calc_raw_conversion` and `calc_history` plus actual allocation; this is the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Liquid heat-exchange water
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_water`.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `bovone-glass-2024`

#### Outputs

##### Product flows

###### Liquid heat-exchange water (`exchange_water_return`)

Only a real external liquid heat-exchange-water boundary. Independently measure actual incoming/returned mass and temperature/pressure/enthalpy; retain supplier water/heat convention, avoiding double-counted cooling service. Pair only actual returns; internal circulation is not repeated purchase and no boiler/steam/fictitious condensate is assumed. Quantity linkage: x_i is exactly the single `calc_reference` result for this row from raw `cp_water`, after `calc_raw_conversion` and `calc_history` plus actual allocation; this is the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Liquid heat-exchange water
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_water`.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `bovone-glass-2024`

###### Mechanically edge-polished annealed glass sheet (`finished_sheet`)

Q is unique new first-quality-released net dry bare-sheet mass after all specified edgework, wash/dry and inspection. Native Glass (formed & finished) has no grade/annealed/edge restriction, but its37199 classification differs from this37114 scope: disclose that isolated classification discrepancy and use only its broad physical glass identity. This row must state uncoated soda-lime-silicate monolithic unframed flat-polished annealed sheet, actual drawing/thickness/inspection and non-safety state. Identity supplies no density, per-piece mass, certification or provider match. Native reference property→unit group→reference unit is `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg; secondary properties establish no independent density or item mass.

- Selected flow: Glass (formed & finished) `82b33e71-bfaa-49b4-9627-ee5963433f6e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release`
- Sources: `oneday-annealed`; `oneday-edgework`; `rig-fabrication`

##### Waste flows

###### Uncoated soda-lime glass offcuts (`glass_offcut`)

Dry clean offcuts/rejects separated by actual destination. Retained reusable blanks preserve genealogy/vector; wafer-production glass waste and internal furnace cullet are not automatic matches. Quantity linkage: x_i is exactly the single `calc_reference` result for this row from raw `cp_residue`, after `calc_raw_conversion` and `calc_history` plus actual allocation; this is the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Uncoated soda-lime glass offcuts
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_residue`.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Sources: `vitro-scoring-td119`; `bovone-glass-2024`

###### Wet glass-grinding sludge (`glass_sludge`)

Actual separated cake with independent moisture and glass/ceria/wheel analysis; do not count cake water again as wastewater. Native processing sludge is Product flow, not adopted as a waste identity. Quantity linkage: x_i is exactly the single `calc_reference` result for this row from raw `cp_residue`, after `calc_raw_conversion` and `calc_history` plus actual allocation; this is the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Wet glass-grinding sludge
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_residue`.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Sources: `vitro-scoring-td119`; `bovone-glass-2024`

###### Glass-washing wastewater (`wash_wastewater`)

One real liquid effluent to its treatment gate, wet mass, suspended solids and actual dissolved species. Chemically different separately discharged circuits need their own rows. COD is no chemical mass. Quantity linkage: x_i is exactly the single `calc_reference` result for this row from raw `cp_residue`, after `calc_raw_conversion` and `calc_history` plus actual allocation; this is the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Glass-washing wastewater
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_residue`.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Sources: `vitro-scoring-td119`; `bovone-glass-2024`

###### Spent tungsten-carbide scoring wheel (`retired_scoring_wheel`)

One actual retired assembly, remaining mass separate from worn particles. Quantity linkage: x_i is exactly the single `calc_reference` result for this row from raw `cp_residue`, after `calc_raw_conversion` and `calc_history` plus actual allocation; this is the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Spent tungsten-carbide scoring wheel
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_residue`.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Sources: `vitro-scoring-td119`; `bovone-glass-2024`

###### Spent metal-bond diamond grinding wheel (`retired_metal_wheel`)

One actual retired wheel/core; binder/wear and destination remain distinct. Quantity linkage: x_i is exactly the single `calc_reference` result for this row from raw `cp_residue`, after `calc_raw_conversion` and `calc_history` plus actual allocation; this is the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Spent metal-bond diamond grinding wheel
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_residue`.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Sources: `vitro-scoring-td119`; `bovone-glass-2024`

###### Spent resin-bond diamond polishing wheel (`retired_resin_wheel`)

One actual retired resin-bond wheel, no combined metal/felt-tool waste. Quantity linkage: x_i is exactly the single `calc_reference` result for this row from raw `cp_residue`, after `calc_raw_conversion` and `calc_history` plus actual allocation; this is the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Spent resin-bond diamond polishing wheel
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_residue`.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Sources: `vitro-scoring-td119`; `bovone-glass-2024`

###### Spent felt polishing wheel (`retired_felt_wheel`)

One actual retired felt wheel, including measured retained slurry/water and destination. Quantity linkage: x_i is exactly the single `calc_reference` result for this row from raw `cp_residue`, after `calc_raw_conversion` and `calc_history` plus actual allocation; this is the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Spent felt polishing wheel
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_residue`.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Sources: `vitro-scoring-td119`; `bovone-glass-2024`

###### Spent mineral hydraulic oil (`spent_hydraulic_oil`)

Actual drained installed charge after physical stock change; no fixed oil/water/additive recipe or automatic recovery credit. Quantity linkage: x_i is exactly the single `calc_reference` result for this row from raw `cp_residue`, after `calc_raw_conversion` and `calc_history` plus actual allocation; this is the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Spent mineral hydraulic oil
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_residue`.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Sources: `vitro-scoring-td119`; `bovone-glass-2024`

###### Captured soda-lime glass dust (`captured_glass_dust`)

Real captured mixed glass dust distinct from air escape and sludge solids; do not label all dust pure silica. Quantity linkage: x_i is exactly the single `calc_reference` result for this row from raw `cp_residue`, after `calc_raw_conversion` and `calc_history` plus actual allocation; this is the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Captured soda-lime glass dust
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_residue`.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Sources: `vitro-scoring-td119`; `bovone-glass-2024`

##### Elementary flows

###### Water vapour to air (`water_vapor`)

Actual independently measured water evaporation to air from wet processing/drying, reconciled with carryover/wastewater and stock change; no inferred reaction water or purchased steam. Native CAS7732-18-5 water vapour is Elementary/Mass/kg to air unspecified only. The native synonym list contains liquid/ice and heavy/tritiated-water noise; these do not override the coherent ordinary-water CAS, vapour basename and air compartment and are not adopted as isotope, liquid, ice, water/soil or high-stack identities. Actual destination still must match. Native reference property→unit group→unit is `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. Quantity linkage: raw `cp_species` passes `calc_raw_conversion`, `calc_history` and actual allocation before the single `calc_reference` x_i; same1kg basis, no later division.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_species`.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `bovone-glass-2024`

###### Soda-lime glass particulate to air (`airborne_glass_dust`)

Actual escaping soda-lime glass particulate to air unspecified, mass measured without an assigned particle-size fraction. Native definition fixes no chemistry, size distribution, stack height or LCIA factor. Its clinker-calcination example and0.01689kg/t are explicitly source-specific applications, not glass-route restrictions or an emission factor here. Preserve actual glass chemistry; this is not pure crystalline silica or a sum of overlapping total/PM10/PM2.5 measures. If size/compartment is known use its correctly matched flow instead. Add each actual identified volatile scoring/cleaning species and destination separately; totalVOC cannot replace them. Native reference property→unit group→unit is `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. Quantity linkage: raw `cp_species` passes `calc_raw_conversion`, `calc_history` and actual allocation before the single `calc_reference` x_i; same1kg basis, no later division.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_species`.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `vitro-scoring-td119`; `bovone-glass-2024`


### Process: Post-release supply services (`supply_services`)

#### Inputs

##### Product flows

###### Electricity (`service_electricity`)

Actual post-release packing/storage/handling/dispatch and incremental repair/wash/repack electricity by the same first-Q cohort, including waits and failed moves. Separate manufacture and opening-FG cohorts. Native identity only CN1–35kV customer grid-average consumption, with Net calorific value as MJ energy property, not fuel mass. Other voltage/geography/mix requires verified replacement. Native reference property→unit group→reference unit is `93a60a56-a3c8-11da-a746-0800200c9a66` → `93a60a57-a3c8-11da-a746-0800200c9a66` → MJ; secondary properties establish no independent density or item mass. Quantity linkage: x_i is exactly the single `calc_reference` result for this row from raw `cp_service`, after `calc_raw_conversion` and `calc_history` plus actual allocation; this is the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_service`.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `ilcd-general-2010`

###### Cellulose glass-interleaving paper (`pack_paper`)

Conditional one actual supplied packaging article, with complete composition and empty/attached/reusable stocks and return history. The upstream numerator counts new acquisition and justified service assignment, not each internal reuse or returned item. Gross dispatch/waste and actual incoming-sheet package are independent. Quantity linkage: x_i is exactly the single `calc_reference` result for this row from raw `cp_packaging`, after `calc_raw_conversion` and `calc_history` plus actual allocation; this is the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Cellulose glass-interleaving paper
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_packaging`.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

###### Polyethylene film (`pack_film`)

Conditional one actual supplied packaging article, with complete composition and empty/attached/reusable stocks and return history. The upstream numerator counts new acquisition and justified service assignment, not each internal reuse or returned item. Gross dispatch/waste and actual incoming-sheet package are independent. Native polyethylene film CAS9002-88-4 is plant production mix without fixed grade/geography; its leather/luggage classification conflicts with coherent PE name/CAS/comments, an isolated disclosed classification defect. Competing PET mentioned in comments does not identify PE as PET. Actual composition/provider still require matching. Native reference property→unit group→reference unit is `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg; secondary properties establish no independent density or item mass. Quantity linkage: x_i is exactly the single `calc_reference` result for this row from raw `cp_packaging`, after `calc_raw_conversion` and `calc_history` plus actual allocation; this is the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_packaging`.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

###### PET transport strapping (`pack_pet_strap`)

Conditional one actual supplied packaging article, with complete composition and empty/attached/reusable stocks and return history. The upstream numerator counts new acquisition and justified service assignment, not each internal reuse or returned item. Gross dispatch/waste and actual incoming-sheet package are independent. Quantity linkage: x_i is exactly the single `calc_reference` result for this row from raw `cp_packaging`, after `calc_raw_conversion` and `calc_history` plus actual allocation; this is the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: PET transport strapping
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_packaging`.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

###### Timber glass shipping crate (`pack_timber`)

Conditional one actual supplied packaging article, with complete composition and empty/attached/reusable stocks and return history. The upstream numerator counts new acquisition and justified service assignment, not each internal reuse or returned item. Gross dispatch/waste and actual incoming-sheet package are independent. Quantity linkage: x_i is exactly the single `calc_reference` result for this row from raw `cp_packaging`, after `calc_raw_conversion` and `calc_history` plus actual allocation; this is the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Timber glass shipping crate
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_packaging`.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

###### Reusable steel glass transport A-frame (`pack_rack`)

Conditional one actual supplied packaging article, with complete composition and empty/attached/reusable stocks and return history. The upstream numerator counts new acquisition and justified service assignment, not each internal reuse or returned item. Gross dispatch/waste and actual incoming-sheet package are independent. Quantity linkage: x_i is exactly the single `calc_reference` result for this row from raw `cp_packaging`, after `calc_raw_conversion` and `calc_history` plus actual allocation; this is the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Reusable steel glass transport A-frame
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_packaging`.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

#### Outputs

##### Waste flows

###### Waste cellulose glass-interleaving paper (`waste_pack_paper`)

Only actual discarded cellulose glass-interleaving paper, one stream with remaining contents/moisture and actual destination. External return of an article is not waste, procurement or glass output. Quantity linkage: x_i is exactly the single `calc_reference` result for this row from raw `cp_packaging`, after `calc_raw_conversion` and `calc_history` plus actual allocation; this is the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Waste cellulose glass-interleaving paper
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_packaging`.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

###### Waste polyethylene film (`waste_pack_film`)

Only actual discarded polyethylene film, one stream with remaining contents/moisture and actual destination. External return of an article is not waste, procurement or glass output. Quantity linkage: x_i is exactly the single `calc_reference` result for this row from raw `cp_packaging`, after `calc_raw_conversion` and `calc_history` plus actual allocation; this is the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Waste polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_packaging`.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

###### Waste pet transport strapping (`waste_pack_pet_strap`)

Only actual discarded pet transport strapping, one stream with remaining contents/moisture and actual destination. External return of an article is not waste, procurement or glass output. Quantity linkage: x_i is exactly the single `calc_reference` result for this row from raw `cp_packaging`, after `calc_raw_conversion` and `calc_history` plus actual allocation; this is the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Waste pet transport strapping
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_packaging`.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

###### Waste timber glass shipping crate (`waste_pack_timber`)

Only actual discarded timber glass shipping crate, one stream with remaining contents/moisture and actual destination. External return of an article is not waste, procurement or glass output. Quantity linkage: x_i is exactly the single `calc_reference` result for this row from raw `cp_packaging`, after `calc_raw_conversion` and `calc_history` plus actual allocation; this is the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Waste timber glass shipping crate
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_packaging`.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

###### Waste reusable steel glass transport a-frame (`waste_pack_rack`)

Only actual discarded reusable steel glass transport a-frame, one stream with remaining contents/moisture and actual destination. External return of an article is not waste, procurement or glass output. Quantity linkage: x_i is exactly the single `calc_reference` result for this row from raw `cp_packaging`, after `calc_raw_conversion` and `calc_history` plus actual allocation; this is the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Waste reusable steel glass transport a-frame
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_packaging`.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

###### Post-release broken annealed sheet (`fg_breakage`)

Actual breakage or removed dry glass from real repair after first release; no new Q. Preserve original glass burdens, wet/dry mass change, original-dispatch/return reversal and incremental service burden, distinct from manufacturing rejects. Quantity linkage: x_i is exactly the single `calc_reference` result for this row from raw `cp_service`, after `calc_raw_conversion` and `calc_history` plus actual allocation; this is the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Post-release broken annealed sheet
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_service`.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `ilcd-general-2010`


## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_first` | all allocated exchanges | Only attributional cases requiring allocation use this hierarchy. First dedicate/submeter operations or defensibly virtually subdivide, assigning exchanges exclusively caused by a product. Then identify the determining physical causality of each remaining exchange, not merely a correlated physical property. | `ilcd-general-2010` |
| `allocation_drivers` | manufacture; supply_services | Test edging/cutting electricity against actual machine time, edge length and removal work by configuration; wash against actual area/flow/time; storage/handling against occupied space-time or moves. These are candidate exchange-specific drivers, not fixed ratios. Do not allocate all burdens automatically by glass mass, area or gross dispatch. | `ilcd-general-2010` |
| `allocation_residual` | residual common process | Only after explaining why actual/virtual subdivision and exchange-specific determining physical causality leave a residual, use contemporaneous market value at the same common-process exit and actual quality, moisture, packaging and amount state. Remove downstream conditioning/transport/packing margins. Keep amounts, prices, dates and sensitivity; absent causal/value evidence stays unresolved. There is no free physical/economic choice. | `ilcd-general-2010` |
| `allocation_scrap` | offcut; residues; packages | Distinguish real marketable coproducts, external recycling materials and wastes. Retain losses and handling/treatment burdens. Reused internal offcuts retain original exchange vectors. External sale/disposal uses real state/value and treatment boundary; scrap sales, rack/water returns and reuse create no automatic virgin-glass or avoided-treatment credit. | `ilcd-general-2010` |
| asset_manufacture_conservation | existing capital/reusable manufacture attribution | Within the applicable allocation decision context, original manufacture burden attributed across uses of actual capital equipment or reusable articles already included in foreground production, packaging or observed services uses one persistent same-asset ledger across all crops, products, cohorts, manufacturing/postrelease services, owners and observation periods. D is its supported whole installed service: all realized historical service plus supported remaining service in the same units as actual beneficiary use u; D must be finite and positive. Period capacity, remaining-only capacity, the physical asset/article mass alone, or current-period product Q alone is not D; supported whole-service throughput in mass units may be used when it demonstrates the causal service and matches u. This does not amortize the manufactured reference product over downstream life or change its declared reference gate/Q. The fractions u/D and all previously assigned manufacture shares together must never exceed 1. Changes of window, custody, provider or repair never restart the original manufacture balance. Replacements have distinct identities and only their real new manufacture vectors; actual repair and treatment increments remain separately accounted. Revised capacity evidence requires transparent reconciliation of prior shares and sensitivity, not a fresh ledger. Keep full physical mass and stock movements independent of burden shares. Unknown D, prior shares or beneficiary coverage requires review and no final manufacture-attributed amount; no assumed lifetime, utilization, zero or arbitrary division is permitted. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules


### Data Collection Protocols

For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | manufacture | stock_sheet | Raw measurement and history record | supplier lot; net wet/dry mass; dimensions/thickness; received state; opening/closing raw/WIP; transfers; inherited vector per exchange | Calibrated receiving/issue/net weighing and stock reconciliation; geometry only with independent actual density/removal volume Aggregation method: Sum undivided raw quantities per actual exchange/cohort; convert units and reconcile histories/physical ledgers then perform actual allocation; calc_reference alone yields per reference flow. Never divide raw collection or normalized x_i again. | kg | Each event/batch/move and period reconciliation | Same full production period including all modes; actual same-cohort observed service interval separately disclosed | Each included line/circuit/stock and actual service gate | per 1 kg reference flow | Calibration; full raw logs; composition/state evidence; signed physical/history ledger and uncertainty/coverage |
| cp_release | manufacture | finished_sheet | Raw measurement and history record | unique piece/lot; drawing; annealed state; net dry bare mass; dimensions/thickness; edge/chamfer result; reject; first-release time; WIP/FG moves | Calibrated dry bare-sheet weighing/tare linked to actual dimensional/edge acceptance; sum unique first-release kg asQ; no assumed density/item mass Aggregation method: Sum unique new dry first-release kg asQ, never shipment/reinspection. Keep raw collection undivided; calc_reference alone yields per reference flow. | kg | Each event/batch/move and period reconciliation | Same full production period including all modes; actual same-cohort observed service interval separately disclosed | Each included line/circuit/stock and actual service gate | per 1 kg reference flow | Calibration; full raw logs; composition/state evidence; signed physical/history ledger and uncertainty/coverage |
| cp_energy | manufacture | core_electricity | Raw measurement and history record | carrier; start/end meter; integrated energy or true rate/time; voltage/mix/geography; operation/failure/idle/cleanup; task; causal driver | Calibrated submeter and invoice reconciliation for all equipment/air/pump/treatment operations; no catalog rating inventory Aggregation method: Sum undivided raw quantities per actual exchange/cohort; convert units and reconcile histories/physical ledgers then perform actual allocation; calc_reference alone yields per reference flow. Never divide raw collection or normalized x_i again. | kWh; MJ | Each event/batch/move and period reconciliation | Same full production period including all modes; actual same-cohort observed service interval separately disclosed | Each included line/circuit/stock and actual service gate | per 1 kg reference flow | Calibration; full raw logs; composition/state evidence; signed physical/history ledger and uncertainty/coverage |
| cp_water | manufacture | tap_makeup; di_rinse; exchange_water_in; exchange_water_return | Raw measurement and history record | circuit; water source/state; integrated volume or true rate/time; independent density/temperature; mass; opening/closing installed charge; concentration; inlet/return thermal state/enthalpy; supplier convention | Measure makeup and actual external returns separately; reconcile installed inventories/loss; actual treatment inputs when DI produced on site; internal circulation cancels Aggregation method: Sum undivided raw quantities per actual exchange/cohort; convert units and reconcile histories/physical ledgers then perform actual allocation; calc_reference alone yields per reference flow. Never divide raw collection or normalized x_i again. | kg; m3; K; Pa; MJ | Each event/batch/move and period reconciliation | Same full production period including all modes; actual same-cohort observed service interval separately disclosed | Each included line/circuit/stock and actual service gate | per 1 kg reference flow | Calibration; full raw logs; composition/state evidence; signed physical/history ledger and uncertainty/coverage |
| cp_aux | manufacture | scoring_fluid; scoring_wheel; metal_wheel; resin_wheel; felt_wheel; machine_oil | Raw measurement and history record | single item/formulation; supplier/SDS; composition; configuration and weighed net item mass; unused and installed opening/closing mass; inherited exchange vector; makeup; wear; drain; leak; retired core; destination | Independently weigh supplied/retired tools, installed fluid charges/wear, and actual composition; trace original and replacement burdens; retention is not full consumption Aggregation method: Sum undivided raw quantities per actual exchange/cohort; convert units and reconcile histories/physical ledgers then perform actual allocation; calc_reference alone yields per reference flow. Never divide raw collection or normalized x_i again. | kg | Each event/batch/move and period reconciliation | Same full production period including all modes; actual same-cohort observed service interval separately disclosed | Each included line/circuit/stock and actual service gate | per 1 kg reference flow | Calibration; full raw logs; composition/state evidence; signed physical/history ledger and uncertainty/coverage |
| cp_formulation | manufacture | dry_ceria; bought_ceria_slurry; coolant_concentrate; wash_detergent | Raw measurement and history record | actual whole supplied formulation; assay; free/structural water; constituents; actual purchased ingredients; mixing water/energy; concentration; opening/closing charges; preparation loss | Document purchased-whole versus actual in-house route, weigh each input/loss and independently analyze composition; carrier/active child ledgers are not second purchases Aggregation method: Sum undivided raw quantities per actual exchange/cohort; convert units and reconcile histories/physical ledgers then perform actual allocation; calc_reference alone yields per reference flow. Never divide raw collection or normalized x_i again. | kg; kWh | Each event/batch/move and period reconciliation | Same full production period including all modes; actual same-cohort observed service interval separately disclosed | Each included line/circuit/stock and actual service gate | per 1 kg reference flow | Calibration; full raw logs; composition/state evidence; signed physical/history ledger and uncertainty/coverage |
| cp_residue | manufacture | individual manufacturing waste | Raw measurement and history record | single waste; wet/dry mass; independent moisture and glass/ceria/wheel content; retained offcut; opening/closing residue/vector; treatment/destination | Segregated calibrated scrap/cake/effluent/retired-tool weighing with independent moisture/species analysis and destination receipts; avoid repeated cake water and worn tool mass Aggregation method: Sum undivided raw quantities per actual exchange/cohort; convert units and reconcile histories/physical ledgers then perform actual allocation; calc_reference alone yields per reference flow. Never divide raw collection or normalized x_i again. | kg | Each event/batch/move and period reconciliation | Same full production period including all modes; actual same-cohort observed service interval separately disclosed | Each included line/circuit/stock and actual service gate | per 1 kg reference flow | Calibration; full raw logs; composition/state evidence; signed physical/history ledger and uncertainty/coverage |
| cp_species | manufacture | water_vapor; airborne_glass_dust; each actual additional species | Raw measurement and history record | actual species/CAS; medium; size fraction; concentration; integrated gas/liquid volume or true rate/time; temperature/pressure; independent density; control efficiency; detection limit; free/phase/reaction water | Independent species/compartment sampling and measured volume/rate integration for real modes/failures/cleaning; no totalVOC/COD as chemical identity or overlapping particulate sum Aggregation method: Sum undivided raw quantities per actual exchange/cohort; convert units and reconcile histories/physical ledgers then perform actual allocation; calc_reference alone yields per reference flow. Never divide raw collection or normalized x_i again. | kg; actual concentration/volume units | Each event/batch/move and period reconciliation | Same full production period including all modes; actual same-cohort observed service interval separately disclosed | Each included line/circuit/stock and actual service gate | per 1 kg reference flow | Calibration; full raw logs; composition/state evidence; signed physical/history ledger and uncertainty/coverage |
| cp_service | supply_services | service_electricity; fg_breakage | Raw measurement and history record | cohort firstQ; opening/closing FG kg and exchange vector; gross dispatch; external return; original-dispatch reverse; real incremental repair/wash/repack; each actual material/water addition and glass/water removal; raw service energy; driver; observed interval/coverage | Trace each released sheet through storage/dispatch/returns; measure true cohort service increments and wet/dry repair changes; keep opening-FG cohort apart; no newQ Aggregation method: Sum undivided raw quantities per actual exchange/cohort; convert units and reconcile histories/physical ledgers then perform actual allocation; calc_reference alone yields per reference flow. Never divide raw collection or normalized x_i again. | kg; kWh | Each event/batch/move and period reconciliation | Same full production period including all modes; actual same-cohort observed service interval separately disclosed | Each included line/circuit/stock and actual service gate | per 1 kg reference flow | Calibration; full raw logs; composition/state evidence; signed physical/history ledger and uncertainty/coverage |
| cp_packaging | supply_services | single package acquisition; single packaging waste | Raw measurement and history record | single article/material; actual tare/configuration; opening/closing empty plus attachedWIP/FG plus reusable; acquisition; external-return-received; gross dispatch; external-return-sent; waste; internalreuse; inherited vector; provider packaging boundary | Weigh each package/article and gross physical movement independently from procurement/service burden; count conversion requires same-configuration weighed mass; cancel internal reuse/transfers Aggregation method: Sum undivided raw quantities per actual exchange/cohort; convert units and reconcile histories/physical ledgers then perform actual allocation; calc_reference alone yields per reference flow. Never divide raw collection or normalized x_i again. | kg; actual item count with measured mass | Each event/batch/move and period reconciliation | Same full production period including all modes; actual same-cohort observed service interval separately disclosed | Each included line/circuit/stock and actual service gate | per 1 kg reference flow | Calibration; full raw logs; composition/state evidence; signed physical/history ledger and uncertainty/coverage |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_raw_conversion` | all inventory rows | Convert each original unit to row unit once before assignment: raw kWh×3.6 = MJ; integrate only actual rates. An integrated gas/liquid volume is not multiplied by time. Mass-from-volume requires independently measured density for the same material/state and actual tare. | cp_energy; cp_water; cp_aux; cp_formulation; cp_species | converted undivided raw_i | `bovone-glass-2024` |
| `calc_history` | all inventory rows | Per exchange, manufacture ledger: opening raw/WIP and unassigned installed tool/fluid/asset service vector + actual additions = corresponding closing unreleased/unassigned vector + first-release transfer B_i^Q + other traced destinations. First-released closing FG is outside that manufacture closing term and remains in B_i^Q. FG-service ledger: opening FG vector + B_i^Q + actual external return at its original dispatch vector + actual incremental service additions = closing FG vector + gross dispatch vector + other traced removals/destinations. Return reversal never cancels the manufacture already included in original Q. Manufacturing A_i is B_i^Q; service A_i is only the actually assigned same-cohort service increment, each normalized once by original Q. Preserve separate physical installed-charge/asset stocks and documented service assignment; retained equipment mass is not a consumption or lifetime assumption. Cancel internal B_i^Q and transfers when consolidating; never subtract closing FG from first-release manufacturing A_i. | cp_material; cp_aux; cp_release; cp_service; cp_packaging | A_i undivided assigned exchange vector | `ilcd-general-2010` |
| `calc_reference` | all inventory rows | x_i = A_i / Q; A_i is the converted history-reconciled actually allocated undivided numerator for this exchange and Q cohort; Q is unique new first-quality-released dry bare-sheet kg of that cohort. Divide exactly once for Q>0. Q=0 retains raw burden/investigation/future assignment but no unit result. Cards and collection aggregation reference this same x_i, never divide again. Manufacture and separately labelled service vectors remain distinct; closing FG is already inQ. | cp_release; cp_material; cp_energy; cp_water; cp_aux; cp_formulation; cp_residue; cp_species; cp_service; cp_packaging | x_i per1kg reference flow | `ilcd-general-2010` |
| `calc_physical` | all inventory rows | Reconcile three linked physical gates independently. Manufacture: opening raw/WIP/installed stocks + actual external inputs = corresponding closing unreleased/installed stocks + dry first-release transfer Q + measured manufacturing waste/export/emissions. FG services: opening FG + Q transfer + actual external returns + actual service material/water inputs = closing FG + gross physical dispatch + actual other external outflows + measured service waste/emissions, including actual repair glass/moisture removal. At the combined gate cancel internal Q/transfers: opening all physical stocks + actual external inputs/returns = closing all stocks + gross external dispatch/other outflows + measured wastes/emissions; Q is not another external product beside closing FG or dispatch. Apply wet-mass, glass-solids, free/carryover/evaporated-water and relevant Si/Ce/metal/organic-element subledgers to actual constituents, with installed tool/fluid/asset quantities separate. No single residual fits unknown glass loss and evaporation together; element totals or COD/VOC do not determine actual reaction water/species. | cp_material; cp_release; cp_formulation; cp_water; cp_residue; cp_species; cp_service | independent physical/elemental closure | `bovone-glass-2024`; `ilcd-general-2010` |
| `calc_package` | all inventory rows | Per article: opening empty + attachedWIP/FG + reusable + acquired + external-return-received = corresponding closing + with gross physical dispatch + external-return-sent + discarded. Internalreuse cancels. Assign separate actual procurement/service burden to its true cohort; no movement becomes another purchase and collection does not divide raw quantities byQ. | cp_packaging; cp_service | article balance and undivided assigned burden | `ilcd-general-2010` |
| asset_manufacture_share | existing capital/reusable manufacture attribution | For each included original asset manufacture vector B, f_current = u_current / D only after the persistent ledger verifies the supported whole installed-service denominator, all beneficiaries and prior assigned shares. Attribute f_current * B once to the actual beneficiary before the existing single reference normalization. Check prior_shares + all current/new beneficiary shares <= 1; carry the remaining original balance. Capacity revisions reconcile the historical ledger. Full physical asset/packaging mass and actual gross stocks/returns never receive f_current. Unknown D or history leaves the final attributed result unavailable, without suppressing actual repair/replacement/service burdens. | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | conserved attributed manufacture vector |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Actual drawing, measured dry net mass/configuration and polished-edge first release must establish the annealed non-safety terminal. Manufacturer offers do not certify a future end use. | drawing; supplier declaration; inspection; calibrated weighing |
| dq_coverage | all inventory rows | Complete representative raw site/period data include failure, zero-output, start/stop, idle, cleanup, rework, WIP/FG and non-WIP charges with per-exchange inheritance. Unknown core terminal/route, historical vector or actual physical/species closure holds the affected dataset, never an invented zero. | full coverage/uncertainty register; signed reconciliation |
| dq_native | all inventory rows | Check all native basenames, synonyms/comments, CAS, form, grade/route/geography/medium/type and all properties. Keep official Chinese display; exact reference property/unit-group/unit chain does not import secondary density/item mass, performance or inventory. Disclose broad glass/film classification defects; actual providers remain normal collection gaps. | native restrictions and supplier/state compatibility |
| dq_services | all inventory rows | Publish manufacture and observed same-cohort post-release services separately, with interval/completeness. Audit original-dispatch/return reversals, actual wet/dry repair and each package gross physical ledger. Future unobserved services are not lifetime-complete burdens. | cohort movement/service and package ledgers |
| dq_synthesis | all inventory rows | Independent product/machine/method evidence is qualitative synthesis, not one factory/SKU/order. No default temperature, strength, certification, life, density, sheet weight, fixed ratio or catalog-rated consumption. Ordinary auxiliary UUID/provider gaps alone do not force draft methodology. | source-specific scope/counterevidence and data disclosures |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference product | Require actual narrower covered terminal and all qualifiers, with no safety claim. Reject heat-treated, laminated, coated, mirrored, insulating or merely repacked finished sheets under this route. | `unsd-cpc-2025`; `vitro-heat-treatment-td124`; `oneday-annealed`; `oneday-edgework` |
| `validate_measurement` | all inventory rows | Finished row is1kg dry bare first-release glass using Mass/kg. Every other row collects raw protocol amounts and references calc_reference x_i once after unit conversion/history/allocation. Q=0 yields no unit result. Count/native secondary coefficients do not establish net mass or density. | `ilcd-general-2010` |
| `validate_route` | all operations | Confirm received stock, score/breakout, wet edge grind/polish, actual liquid preparation, wash/dry, edge/dimensional release and every real utility/residue/species. Include failure/idle/cleanup/returns; no evidence is not absence. | `vitro-scoring-td119`; `bovone-glass-2024` |
| `validate_ledgers` | all balances | Close separate manufacture, FG-service and combined physical wet/dry/water/element and per-exchange history ledgers, including installed tool/fluid/asset stocks, actual repair additions/removals and each package. Manufacture closing excludes first-released FG; its B_i^Q includes that FG. Combined gates cancel internal Q/B_i^Q rather than counting release, closing FG and dispatch as separate products. Keep original Q for service increments and preserve gross dispatch/returns. Do not duplicate slurry carrier water, tool wear, cake water or overlapping particle measures. | `ilcd-general-2010`; `bovone-glass-2024` |
| `validate_allocation` | all allocated exchanges | Show actual/virtual subdivision, exchange-specific determining physical causality, then only justified residual common-gate/state-matched contemporaneous market value. No fixed ratio, free choice, automatic scrap credit or invented price. | `ilcd-general-2010` |
| `validate_evidence` | all datasets | Binding requires real native restrictions and exact property→unit group→reference unit. Keep concrete provider/auxiliary gaps explicit. Unknown core terminal/route, stock history, measurement or physical closure remains a hold. Engineering checks are not science, translation, mapping or publication approval. | `ilcd-general-2010` |
| validate_asset_manufacture_conservation | existing capital/reusable manufacture attribution | For every included capital/reusable manufacture attribution verify same-asset continuity, whole installed service in matched units, all historical/current beneficiaries, prior assigned manufacture shares and cumulative share <= 1. Reject a reset by period, cohort, provider, owner or repair. Check distinct real replacement and incremental repair/treatment vectors separately and preserve gross physical mass. A missing denominator, unexplained previous allocation or incomplete beneficiary ledger requires explicit review and an unavailable final attributed amount; structural inspection cannot claim empirical completeness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Upstream matching annealed edge-polished sheet input; retain manufacture and separately observed supply service vectors |
| allowed_use | Actual uncoated monolithic unframed flat-edge-polished annealed sheets matching configuration/state, site/period/gate and native limitations |
| excluded_use | Whole37114 coverage; safety/strength/certification claim; tempered, bent, drilled, laminated, coated, mirrored, insulating/framed products; finished-sheet repacking as manufacture; assumed lifetime service; automatic credits |
| required_metadata | annealed soda-lime-silicate composition and clear/body-tinted state; uncoated monolithic unframed state; actual unworked float-stock supplier boundary and upstream dataset; measured net dry mass and dimensions; thickness/configuration distribution; machined flat polished edge and chamfer drawing; actual inspection and acceptance method; absence of heat strengthening and tempering; absence of laminate coating mirror insulating assembly bending holes and engraving; scoring and breakout route; wheel types and actual cerium supply/preparation route; water quality and each actual formulation; first-release Q gate and unique lot genealogy; period and site/geography; actual energy voltage and mix; WIP/FG and non-WIP tool/fluid exchange histories; each package and gross movement ledger; separately observed matched-cohort service interval and coverage |
| required_quality_disclosure | Source scope/technical synthesis; native restrictions/provider gaps; complete raw/uncertainty evidence; actual causal assignment; WIP/FG/non-WIP charge vectors and physical balances; service interval/completeness; actual unknown holds |
| update_trigger | Glass/finish/drawing/terminal or heat-safety route; formulation/particle form; wheel/wash/utility technology; supplier/energy mix; gate/stock history; emission/treatment or allocation change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-2025` | official_guidance | UNSD, CPC Version3.0 Explanatory Notes,30June2025, PDF p180. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification context separating unworked, worked, safety and mirror/insulating glass. |
| `vitro-scoring-td119` | handbook | Vitro, TD-119 Guidelines for Glass Scoring and Breakout Quality, complete9-page publisher PDF incl pp4–8 counterexamples and table footnotes. https://www.vitroglazings.com/media/10hbno4i/tech_doc_119.pdf | Wheel scoring/breakout, fluid, inspection, replacement and defects; no universal settings, strength, yield or energy. |
| `vitro-heat-treatment-td124` | handbook | Vitro, TD-124 Fabrication of Heat Treated Glass, revision1,2016-10-04, complete2-page publisher PDF. https://www.vitroglazings.com/media/rocj2kmu/tech_doc_124.pdf | Counterevidence: post-heat-treatment fabrication restrictions, no polished tempered/annealed substitution. |
| `bovone-glass-2024` | handbook | Bovone, Glass Division2024, complete publisher PDF; PDF pp4–6 (printed6–11) edging/wheels/Companion and PDF p9 (printed16–17) washing; lamination/coating elsewhere. https://bovone.com/wp-content/uploads/2024/09/Cat_glass2024.pdf | Qualitative grinding/polishing, metal/resin/felt wheels and coolant/ceria removal/wash synthesis. Catalog ratings are not actual consumption, common factory/SKU or terminal certification. |
| `rig-fabrication` | handbook | Rochester Insulated Glass, Glass Fabrication, whole publisher HTML snapshot2026-10-20; edgework plus adjacent hole/notch text. https://rochesterinsulatedglass.com/fabrication/ | Annealed polished-edge availability, qualified by conflicting sharp-edge wording and heat-treatment preference for holes/notches; no general drilling or end-use approval. |
| `oneday-annealed` | handbook | One Day Glass / Peninsula Glass, Annealed Glass, whole publisher HTML snapshot2026-10-20. https://www.onedayglass.com/types-of-glass/annealed-glass/ | Actual annealed supply, cabinet/furniture-covering examples and non-safety breakage caveats; no density, mass, load or suitability default. |
| `oneday-edgework` | handbook | One Day Glass / Peninsula Glass, Custom Glass Edgework, whole publisher HTML snapshot2026-10-20. https://www.onedayglass.com/capabilities/custom-edgework/ | Machined flat-polished edges with small chamfers as supply option, distinct from ground/seamed/bevel; combined technical synthesis, not a verified current order. |
| `syracuse-edgework-2012` | handbook | Syracuse Glass, Glass Edgework Options,2012-04-24 Rev1, whole2-page publisher PDF. https://syracuseglass.com/E-DOCS/general/EDOCS/Glass%20Edgework%20Options.pdf | Independent polished-edge geometry and clean-cut/ground/seamed counterexamples; historical guidance only, no current ASTM conformity or numerical tolerance adopted. |
| `ilcd-general-2010` | official_guidance | European Commission JRC, ILCD General guide for LCA Detailed guidance, first edition March2010, §§7.9.2–7.9.3, PDF pp275–288 (printed255–268). https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional allocation cases: subdivision, exchange-specific determining physical causality, residual common-gate state-matched market value. No fixed shares, free choice, automatic substitution or whole-handbook conformity. |
