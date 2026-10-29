---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.other-string-musical-instruments
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# All-solid steel-string acoustic guitar manufacture

## 1. Scope and Applicability

This attributional method covers manufacture of complete new non-electronic six-string all-solid wood acoustic guitars: solid Adirondack spruce soundboard, solid Indian rosewood back/sides, mahogany neck, ebony fingerboard/bridge and bone nut/saddle, with actual integral bracing, linings, blocks, bindings, purfling, tuners, truss rod, individual strings, fittings, nitrocellulose body finish and polyurethane neck finish. The terminal is the unique first quality release of a complete usable instrument after actual stringing, setup, sound/playability and appearance acceptance. It starts with the actual supplied dried wood/whole boards or already prepared tonewood parts and real supplied accessories and preparations, not purchased finished guitars for repacking. Sources: `yamaha-fg9-r`; `yamaha-craftsmanship`; `yamaha-choose`.

Exclude keyboard-string instruments/pianos, bowed strings, nylon/classical guitars, electric/acoustic-electric pickups or preamps, amplifiers, synthesis/MIDI/toys, laminated/HPL/plywood bodies, carbon/plastic bodies, unfinished bodies/necks/soundboards, unstrung kits and stand-alone strings or other parts. These are different physical/function or manufacturing boundaries, not automatically covered by CPC 38320. The six-string construction is this narrow category, not a default for all string instruments. No certification, service lifetime, tone/strength threshold, tuning frequency/tension, species substitution, moisture target, thickness, recipe, cycle time, yield or energy factor is prescribed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.other-string-musical-instruments` |
| classification_refs | CPC 3.0 38320; narrower; current accepted association: `classifications/mappings/cpc-3.0-to-pcr.yaml` and `docs/adr/cpc3-additional34-20261029-38320.md`; complete method scope/exclusions apply, not full-leaf or scientific/translation approval |
| covered_products | Complete first-released six-string non-electronic all-solid Adirondack-spruce/Indian-rosewood acoustic guitars of the declared mahogany/ebony/bone configuration |
| excluded_products | Pianos/keyboards; bowed/nylon/electric/electronic/toy/kit instruments; laminated/HPL/plastic bodies; stand-alone components |
| representative_product | A complete FG9 R-like physical construction, qualitatively synthesized from primary manufacture evidence; not a measured FG9 R inventory or one factory order |
| production_route | Actual dried tonewood supply -> remaining woodworking and structural assembly -> actual coating/polishing -> complete hardware/string assembly and setup -> unique first quality release |
| market_state | Complete usable new non-electronic acoustic guitar at first manufacturer quality release; net instrument mass excludes independent accessories and packaging; later actual gate services remain separate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a complete playable non-electronic steel-string acoustic instrument of the declared configuration |
| How much | 1 kg net complete instrument at unique first quality release; not 1 kg soundboard, timber, neck or strings |
| How well | Actual approved construction and measured first-release functional/sound/playability/appearance criteria declared; no invented pass threshold |
| How long or cycle | One unique first-release manufacturing cohort; actual later services disclose original Q_H and observed H; no lifetime claim |
| reference_flow_link | `finished_guitar` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Other string musical instruments `9fa0d42e-18d3-4a28-8ffa-f382932ec5ad` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | six-string non-electronic configuration and unique instrument/lot identity; solid Adirondack spruce soundboard and solid Indian rosewood back/sides with actual species and origin; mahogany neck and ebony fingerboard/bridge with actual supplied machining state; actual complete bracing/lining/block/binding/purfling/bridge-pin/pickguard/fixing BOM; bone nut/saddle and real adjustment scope; each actual string position/gauge/material and mechanical tuner identity; actual neck joint and any separate bolts/inserts; actual adhesive system with joint/specification permission; actual nitrocellulose body and polyurethane neck coating system and supplied whole preparations; actual wood moisture/conditioning state and same-configuration measured net instrument mass; calibration and first-release functional/sound/playability/appearance acceptance record; actual factory geography period and unique first-release Q; raw/WIP stocks and each inherited flow vector; original FG cohort Q_H and observed service horizon H; gross G/R and original shipment plus actual postwork permission/tests/disposition; per-article six packaging legs and whole/component disjoint bridge; actual utilities/carrier thermal state/returns and supplier water-energy ownership; independent physical mass/element/carbon/water and species-specific emission constraints; independent supplied case/wrench/documents excluded from net guitar mass but accounted once |

All qualifiers are required metadata, description or equivalent package fields. The selected native family is a manufactured finished Product, production mix at plant, with Mass reference and no stated fixed geography/species/grade/life; positive primary whole-terminal evidence restricts it to this complete configuration. Preserve this context with the finished row and all normative ancestors. Count records do not set kg: actual net instrument mass and moisture are independently measured, never inferred from a secondary native coefficient or another guitar.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use 1 kg complete net instrument reference. Collect actual net mass of each accepted same-configuration complete instrument using cp_release with calibration and actual moisture; no assumed per-item mass, density, board thickness or count-to-kg factor. |
| raw_native_units | all actual inventory rows | Actual native extensive property of that exchange | Actual native unit | Mass kg is not imposed on MJ, kWh, m3 or h. Unit/rate conversion precedes real attribution and the sole quotient. Preserve gas/liquid state, thermal enthalpy, measured density and original units. |
| once_only | all actual inventory rows | Actual row property | Actual row unit per reference flow | Raw collection stays undivided. The one section-8 cohort quotient produces x_i; cards/aggregation reuse that result. Gross cards use full actual V, not a burden vector, stock-corrected consumption or economic share. Q_c=0 retains actual numerators without a unit result. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual untreated dried solid tonewood or whole prepared solid panels/components, real accessories and whole preparations at declared supplier/foreground handover |
| starting_condition_role | Foreground receipt condition; supplied forestry/sawmilling/drying/joining/machining/metal/string/formulation manufacture stays upstream once |
| product_classification_scope | Narrow complete non-electronic six-string all-solid acoustic construction within CPC 38320; no whole-leaf collection |
| recursive_input_rule | A whole same-category finished guitar is not an ordinary raw input. Actual returned original-cohort instruments keep original history and separate service/rework; buying finished guitars for repacking cannot satisfy manufacture |
| upstream_dataset_requirement | One compatible actual provider per supplied whole article/preparation/service and included boundary. Preserve real supplier-included packaging and upstream owner, unresolved providers and inherited per-flow vectors; no automatic zero |
| disclosure | Actual supply face, route/joint/order, geography/time, BOM, moisture, net mass/release, raw/WIP/FG history, package/assets/service horizons and every identity/measurement/provider gap |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_route | complete instrument route | Receive actual dried tonewood/complete supplied boards or machined parts at their declared supply face. Include remaining cutting/planing/edge joining, bracing and lining/block bonding, actual side bending, neck/fingerboard/fret and bridge work, coating/sanding/drying/polishing, approved neck joint, tuner/string fitting, setup and final function/playability/sound/appearance acceptance. Purchased completed work stays upstream once; supplied components and internal whole-guitar handoffs never become another external whole-guitar purchase or Q. | `yamaha-craftsmanship`; `yamaha-body`; `yamaha-final`; `yamaha-fg9-r` |
| b_source_limits | source-specific routes | This is transparent qualitative technical synthesis, not one measured factory/SKU BOM. FG9 R supplies a coherent all-solid non-electronic terminal; its bolt-on neck overrides generic dovetail/set-neck prose for that example. Generic simultaneous body gluing and L-Series sequential gluing are alternatives, not added operations. Do not impose A.R.E., electric I.R.A., classical nylon/shellac, laminated panels or electronics. Actual joint/coating system and work order require the real approved specification; no source example authorizes all joints. | `yamaha-fg9-r`; `yamaha-craftsmanship`; `yamaha-body`; `yamaha-choose`; `titebond-original`; `mohawk-instrument-2012` |
| b_release | unique first-release Q |Q is the sum of measured net complete instrument masses first quality-released once in the same declared configuration/cohort and moisture state. Closing FG already first released is inside Q and cannot be added as another output or deducted as manufacturing burden carry. Dispatch, return, reinspection or resumed shipment never creates Q. Manufacturing carry comprises only genuine raw/WIP/unassigned non-WIP stores with each inherited exchange vector. Preserve opening/closing raw and WIP, failed/zero-output runs, start-stop, idle, cleanup, samples and actual rework. Each opening and closing unused/unassigned non-WIP store must retain its actual physical quantity as well as every inherited exchange vector and origin; a vector balance never replaces that stocktake. | `yamaha-craftsmanship`; `yamaha-qc`; `ilcd-attributional-2010` |
| b_service | original-cohort factory-gate service | Record actual storage, handling, packaging, dispatch, returns and occurred post-release work under original Q_H and the observed H, never a new product denominator. Retain performed original-cohort service even if FG is held at closing; carry only unused/unassigned service or charge. Keep full opening/closing FG history and per-flow manufacturing burdens separately from current actual increments. A net-delivery alternative would require full gross G/R, original delivered-state reversal D_rev and burden bridge; returned wet mass is not guessed equal to original delivery. It is outside this first-release denominator. | `ilcd-attributional-2010`; `yamaha-qc` |
| b_physical | manufacturing FG and consolidated physical gates | Reconcile full wet opening stocks plus every actual gross external inlet to full wet closing stocks plus every actual gross external outlet. Manufacturing-to-FG Q is an internal handoff; pair/cancel it in the consolidated gate, never add Q beside closing FG and G/R. Gross physical quantities, packaging, assets, parts and water do not follow burden/economic allocation fractions. X_in/X_out remove only identical overlap with OTHER same-side inlet/outlet terms; new materials/water remaining in closing stock retain BOTH their actual influx and full wet closing mass. Already net stock-corrected consumption is never stock-corrected again. | `ilcd-attributional-2010` |
| b_pack | each actual packaging pool | For each actual article pool retain P/I/ER/S/EO/W and use full wet O + P + I + ER + F_in - X_in = C + S + EO + W + F_out - X_out. O/C include all empty, WIP/FG-attached, reusable and actual retained discarded/collected states belonging to that boundary, or an explicitly paired separate collection-stock subgate. F_in/F_out are independently measured actual additional repair materials, water/moisture ingress, removed parts, drainage or evaporation not already owned in whole-article events. X removes only the identical proven duplicate in an OTHER actual term on the SAME side, matching article/lot/event/species/unit/period and owner; card presence, closing stock, opposite-side flow, stock-adjusted burden or economic share never justify X. Whole wet articles or an exhaustive mutually exclusive component bridge are alternative representations, never additive. Internal handoffs/reuse cancel. One actual mixed external Waste total/provider has independently measured non-additive origin-W partitions of that same exit/state/period; if origin amounts are unknown, do not fabricate them. Actual separate outlets retain their own specific rows and treatment. | `ilcd-attributional-2010`; `yamaha-qc` |
| b_water_carbon | all materials water air and residues | Constrain whole physical mass and relevant elements independently. Keep wood biogenic carbon, fossil resin/coating/plastic carbon, ambient carbon and upstream forestry uptake distinct, with no automatic storage or waste-sale credit. Measure free/sorbed wood moisture, liquid/vapour/carrier/formulation water, structural water and independently evidenced reaction water separately. Ordinary storage/handling sorption and desorption are actual atoms and require no invented work permission. Glue drying and solvent loss do not establish reaction water. VOC/COD/TOC/PM and wood-dust indicators are not molecular species; one residual cannot determine two unknowns. Integrated gas/liquid volumes are not multiplied by time again; only real rates are integrated. Density must describe that substance and actual state. | `yamaha-craftsmanship`; `mohawk-instrument-2012`; `ilcd-attributional-2010` |
| b_work | all actual failures returns and postwork | Manufacturer/specification permission, postwork tests, acceptance and disposition govern actual rework and continued conformity. They never delete unauthorized, failed, held or unaccepted work that actually occurred; keep its full physical flows, load and original cohort with actual hold/waste. Broken wood/joints/coatings are not assumed restored. Ordinary manufacturing waste, samples, failures, external sale/removal and their treatment do not automatically subtract burdens. Only a real distinct other cohort/function and justified allocation/handover may receive one vector transfer; physical gross remains complete. | `yamaha-qc`; `ilcd-attributional-2010` |
| b_extend | actual missing atomic exchanges and providers | Before numerical use, add each real unlisted wood species/supply form, inlay, insert, fastener, whole preparation, separately added chemical, fuel, energy, water phase, refrigerant, package, waste outlet and real emission species individually. Never use an other-material/energy-carrier collection or absence inferred from query failure. Onsite manufacture of a supplied component/formulation requires every actual purchased material, energy and loss instead of repeating a whole provider. For thermal service preserve actual carrier kg, heat MJ, Product returns, state/enthalpy and supplier water-energy boundary; no invented steam or boiler. | `ilcd-attributional-2010`; `yamaha-craftsmanship` |
| packaging_receipt_basis | packaging | For each actual whole packaging article, P records paid procurement (standalone or bundled, with or without a separate invoice). I records first non-purchased external ingress, including standalone gifts, loans, rental/pool issues and unpaid supplier-attached packaging; supplier attachment is only one I subset. ER requires the same item or an auditable matching batch linked to this site's own prior outward record; another party's prior use alone is not a return. P/I/ER are disjoint. The existing matching physical-article cards and raw subledgers cover these origins subject to every native material/form/state qualification; incompatible actual articles require their own atomic rows, never a substitute UUID. X_in/X_out remain separate measured material/water-change terms, not a substitute for whole-article receipt. Keep gross wet quantities, owner/custodian, payment/non-purchase basis, provenance, prior-outward links, actual state/unit and inherited manufacture/service vectors. A free receipt is neither a new manufacture nor automatically burden-free: attribute actual service and incremental transport/handling once to the proper original cohort/denominator and retain genuinely unused service separately, without a default lifetime or credit. Stock, physical gross legs and burden vectors remain separate. This is the declared conserving foreground-accounting implementation, not a claim that the cited source prescribes these variable names. | ilcd-attributional-2010 |

## 6. Process Inventory Structure

Every description and applicable normative ancestor is part of the consumable rule. Each card is one actual physical/chemical article, preparation, species, event or explicitly non-additive service account. All six packaging legs have their own cards. Internal component/whole-instrument handoffs stay paired in the process ledger and cancel on consolidation without another external purchase or Q. Each card’s x_i and protocol aggregation refer to the single calc_quotient result in section 8. Collect only undivided raw records; full gross V and attributed burden/service vectors are independent dimensions. Conditional absence requires actual evidence, and all real missing atoms are added before use.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | Complete wood-to-playable-guitar manufacture and first release | required | Actual declared supply face through full usable instrument | foreground | Q |
| gate_service | Original-cohort actual factory-gate service | conditional | Actual storage handling dispatch returns and occurred work | foreground | Q_H; H |
| packaging | Actual article six-leg custody and one load account | conditional | Each real package/accessory case and actual event | foreground | Q_H; H |
| assets | Actual machines tools parts fluids and service | conditional | Actual custody additions removal and fulfilled service | foreground | Q_H; H |

### Process: Complete wood-to-playable-guitar manufacture and first release (`manufacture`)

#### Inputs

##### Product flows

###### Untreated dried solid Adirondack spruce soundboard stock (`spruce_top`)

Receive actual unglued solid Adirondack spruce stock for the soundboard; declare species and supply machining. Bookmatched halves are edge-glued onsite only when actually received separately. A purchased already joined solid top is received once with its upstream joining; never laminate veneer or count the halves again. Weigh actual whole wet receipts and raw/WIP stocks; keep the per-flow inherited burden vector. No standard BOM quantity is supplied.

- Selected flow: Untreated dried solid Adirondack spruce soundboard stock
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_material. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`; `yamaha-two-panels`

###### Untreated dried solid Indian rosewood back stock (`rosewood_back`)

Actual solid Indian rosewood back stock; record species, lawful origin, solid supply state and measured moisture. Supplied joined panels and onsite edge-joining are mutually exclusive upstream/foreground steps for the same stock. Weigh actual whole wet receipts and raw/WIP stocks; keep the per-flow inherited burden vector. No standard BOM quantity is supplied.

- Selected flow: Untreated dried solid Indian rosewood back stock
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_material. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`; `yamaha-two-panels`

###### Untreated dried solid Indian rosewood side stock (`rosewood_sides`)

Receive actual flat untreated dried solid Indian rosewood side stock and perform remaining sizing and heat/moisture bending onsite. Already bent supplied sides are another actual supply form: record them specifically with their upstream forming once, not as this flat-stock receipt followed by fictitious rebending. No laminate, thermally reformed wood or plastic substitute.

- Selected flow: Untreated dried solid Indian rosewood side stock
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_material. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Dried solid mahogany neck blank (`mahogany_neck`)

One actual dried solid mahogany neck blank for remaining onsite neck machining, truss-rod channel and approved neck-joint shaping. A fully machined supplied neck is a distinct physical supply form: record it specifically and preserve its upstream work once, never remake it as this blank. No laminated reinforcing strips from a generic photo or per-neck mass/wood density are assumed.

- Selected flow: Dried solid mahogany neck blank
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_material. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Solid ebony fingerboard blank (`ebony_fingerboard`)

Actual solid ebony fingerboard stock; record supplied thicknessing, slots and inlays. Perform only remaining planing, fret-slot machining and fitting. Do not infer density, fret spacing or board thickness from another model. Weigh actual whole wet receipts and raw/WIP stocks; keep the per-flow inherited burden vector. No standard BOM quantity is supplied.

- Selected flow: Solid ebony fingerboard blank
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_material. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Solid ebony acoustic-guitar bridge blank (`ebony_bridge`)

One actual solid ebony acoustic-guitar bridge blank for remaining onsite machining, drilling/slotting and fitting. A finished supplier bridge is a distinct supply form recorded specifically with upstream work once. No duplicate purchase of its wood constituents and no second whole-instrument output.

- Selected flow: Solid ebony acoustic-guitar bridge blank
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_material. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Uncoated solid-wood guitar brace blank (`spruce_brace`)

One actual supplied uncoated solid-wood guitar brace blank. Declare actual species, source, dry/moisture and remaining machining; no spruce species, fixed count/section or strength is assumed from the generic bracing source. Cut/plane/shape and glue actual remaining work. If cut from an already recorded stock/offcut onsite, pair/cancel the internal brace handoff instead of another external blank purchase. A finished supplier brace is a distinct supplied form recorded specifically with its upstream work once.

- Selected flow: Uncoated solid-wood guitar brace blank
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_material. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Solid wood neck-block component (`neck_block`)

One separately supplied actual solid wood neck block; declare species and machining. If made onsite from already recorded mahogany stock, its handoff is internal and this external component receipt is absent with evidence. Weigh actual whole wet receipts and raw/WIP stocks; keep the per-flow inherited burden vector. No standard BOM quantity is supplied.

- Selected flow: Solid wood neck-block component
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_material. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Solid wood tail-block component (`tail_block`)

Actual supplied tail block, species/form declared; no invented softwood or hardwood default. Onsite manufacture uses separately identified actual source stock and cancels the internal component bridge. Weigh actual whole wet receipts and raw/WIP stocks; keep the per-flow inherited burden vector. No standard BOM quantity is supplied.

- Selected flow: Solid wood tail-block component
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_material. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Kerfed solid-wood guitar lining (`lining`)

One actual supplied kerfed wood lining article with species and glue/coating state recorded; remaining fitting and bonding are onsite. Do not also purchase its constituent lumber. Weigh actual whole wet receipts and raw/WIP stocks; keep the per-flow inherited burden vector. No standard BOM quantity is supplied. Native Product is the manufactured finished musical-instrument parts/accessories family, production mix at plant, Mass/kg. This instance is only the specific whole supplied component described above, retaining its actual material, coating/winding/adhesive and included fittings once. It is not a complete guitar, electronic substitute or unmachined tonewood blank. The isolated native comment “384 Sports goods” matches the next heading in the UN source; the complete bilingual basename and classification identify musical parts. The family does not supply missing quantities, approve a provider or erase the actual supplied/onsite-work boundary.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_material. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Solid ebony binding strip (`ebony_binding`)

One actual solid ebony binding strip. Record supplied profile and any adhesive already included; wooden rope-pattern purfling is a different supplied article below. Weigh actual whole wet receipts and raw/WIP stocks; keep the per-flow inherited burden vector. No standard BOM quantity is supplied.

- Selected flow: Solid ebony binding strip
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_material. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Wooden rope-pattern purfling article (`wood_purfling`)

Receive one complete supplied wooden rope-pattern purfling article, including its bonded constituent veneers once. Fitting around body or soundhole follows the real BOM; do not synthesize a glue/wood recipe from its visual pattern. Weigh actual whole wet receipts and raw/WIP stocks; keep the per-flow inherited burden vector. No standard BOM quantity is supplied. Native Product is the manufactured finished musical-instrument parts/accessories family, production mix at plant, Mass/kg. This instance is only the specific whole supplied component described above, retaining its actual material, coating/winding/adhesive and included fittings once. It is not a complete guitar, electronic substitute or unmachined tonewood blank. The isolated native comment “384 Sports goods” matches the next heading in the UN source; the complete bilingual basename and classification identify musical parts. The family does not supply missing quantities, approve a provider or erase the actual supplied/onsite-work boundary.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_material. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Nickel-silver fret wire (`fret_wire`)

Actual copper-nickel-zinc fret wire, with alloy assay and supplied section declared; trim, install and level real frets. Nickel-chromium heating wire is not copper-nickel-zinc fret wire. Weigh actual whole wet receipts and raw/WIP stocks; keep the per-flow inherited burden vector. No standard BOM quantity is supplied.

- Selected flow: Nickel-silver fret wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_material. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Complete supplied acoustic steel string at position 1 (`steel_string_1`)

One actual complete supplied string for position 1 of the declared six-string configuration. Record its actual steel core, any winding/coating, ball end, alloy, gauge and supplied state independently; no pitch, tension, gauge or recipe is assumed. Receive the whole string once with its upstream manufacture, not separate core/winding/coating purchases. Replacement, failed setup and trimmed waste retain actual mass/load. Native Product is the manufactured finished musical-instrument parts/accessories family, production mix at plant, Mass/kg. This instance is only the specific whole supplied component described above, retaining its actual material, coating/winding/adhesive and included fittings once. It is not a complete guitar, electronic substitute or unmachined tonewood blank. The isolated native comment “384 Sports goods” matches the next heading in the UN source; the complete bilingual basename and classification identify musical parts. The family does not supply missing quantities, approve a provider or erase the actual supplied/onsite-work boundary.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_material. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Complete supplied acoustic steel string at position 2 (`steel_string_2`)

One actual complete supplied string for position 2 of the declared six-string configuration. Record its actual steel core, any winding/coating, ball end, alloy, gauge and supplied state independently; no pitch, tension, gauge or recipe is assumed. Receive the whole string once with its upstream manufacture, not separate core/winding/coating purchases. Replacement, failed setup and trimmed waste retain actual mass/load. Native Product is the manufactured finished musical-instrument parts/accessories family, production mix at plant, Mass/kg. This instance is only the specific whole supplied component described above, retaining its actual material, coating/winding/adhesive and included fittings once. It is not a complete guitar, electronic substitute or unmachined tonewood blank. The isolated native comment “384 Sports goods” matches the next heading in the UN source; the complete bilingual basename and classification identify musical parts. The family does not supply missing quantities, approve a provider or erase the actual supplied/onsite-work boundary.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_material. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Complete supplied acoustic steel string at position 3 (`steel_string_3`)

One actual complete supplied string for position 3 of the declared six-string configuration. Record its actual steel core, any winding/coating, ball end, alloy, gauge and supplied state independently; no pitch, tension, gauge or recipe is assumed. Receive the whole string once with its upstream manufacture, not separate core/winding/coating purchases. Replacement, failed setup and trimmed waste retain actual mass/load. Native Product is the manufactured finished musical-instrument parts/accessories family, production mix at plant, Mass/kg. This instance is only the specific whole supplied component described above, retaining its actual material, coating/winding/adhesive and included fittings once. It is not a complete guitar, electronic substitute or unmachined tonewood blank. The isolated native comment “384 Sports goods” matches the next heading in the UN source; the complete bilingual basename and classification identify musical parts. The family does not supply missing quantities, approve a provider or erase the actual supplied/onsite-work boundary.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_material. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Complete supplied acoustic steel string at position 4 (`steel_string_4`)

One actual complete supplied string for position 4 of the declared six-string configuration. Record its actual steel core, any winding/coating, ball end, alloy, gauge and supplied state independently; no pitch, tension, gauge or recipe is assumed. Receive the whole string once with its upstream manufacture, not separate core/winding/coating purchases. Replacement, failed setup and trimmed waste retain actual mass/load. Native Product is the manufactured finished musical-instrument parts/accessories family, production mix at plant, Mass/kg. This instance is only the specific whole supplied component described above, retaining its actual material, coating/winding/adhesive and included fittings once. It is not a complete guitar, electronic substitute or unmachined tonewood blank. The isolated native comment “384 Sports goods” matches the next heading in the UN source; the complete bilingual basename and classification identify musical parts. The family does not supply missing quantities, approve a provider or erase the actual supplied/onsite-work boundary.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_material. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Complete supplied acoustic steel string at position 5 (`steel_string_5`)

One actual complete supplied string for position 5 of the declared six-string configuration. Record its actual steel core, any winding/coating, ball end, alloy, gauge and supplied state independently; no pitch, tension, gauge or recipe is assumed. Receive the whole string once with its upstream manufacture, not separate core/winding/coating purchases. Replacement, failed setup and trimmed waste retain actual mass/load. Native Product is the manufactured finished musical-instrument parts/accessories family, production mix at plant, Mass/kg. This instance is only the specific whole supplied component described above, retaining its actual material, coating/winding/adhesive and included fittings once. It is not a complete guitar, electronic substitute or unmachined tonewood blank. The isolated native comment “384 Sports goods” matches the next heading in the UN source; the complete bilingual basename and classification identify musical parts. The family does not supply missing quantities, approve a provider or erase the actual supplied/onsite-work boundary.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_material. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Complete supplied acoustic steel string at position 6 (`steel_string_6`)

One actual complete supplied string for position 6 of the declared six-string configuration. Record its actual steel core, any winding/coating, ball end, alloy, gauge and supplied state independently; no pitch, tension, gauge or recipe is assumed. Receive the whole string once with its upstream manufacture, not separate core/winding/coating purchases. Replacement, failed setup and trimmed waste retain actual mass/load. Native Product is the manufactured finished musical-instrument parts/accessories family, production mix at plant, Mass/kg. This instance is only the specific whole supplied component described above, retaining its actual material, coating/winding/adhesive and included fittings once. It is not a complete guitar, electronic substitute or unmachined tonewood blank. The isolated native comment “384 Sports goods” matches the next heading in the UN source; the complete bilingual basename and classification identify musical parts. The family does not supply missing quantities, approve a provider or erase the actual supplied/onsite-work boundary.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_material. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Complete mechanical guitar tuning machine (`tuner`)

One complete actual mechanical tuner with its integral gear, post, knob and supplied bushing/screw included once. Different tuners require separate instances. Record separately bought fixings only when outside this supplied whole; do not copy electric circuitry into this non-electronic instrument. Weigh actual whole wet receipts and raw/WIP stocks; keep the per-flow inherited burden vector. No standard BOM quantity is supplied. Native Product is the manufactured finished musical-instrument parts/accessories family, production mix at plant, Mass/kg. This instance is only the specific whole supplied component described above, retaining its actual material, coating/winding/adhesive and included fittings once. It is not a complete guitar, electronic substitute or unmachined tonewood blank. The isolated native comment “384 Sports goods” matches the next heading in the UN source; the complete bilingual basename and classification identify musical parts. The family does not supply missing quantities, approve a provider or erase the actual supplied/onsite-work boundary.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_material. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Complete steel guitar truss-rod assembly (`truss_rod`)

Actual complete supplied steel truss-rod assembly; retain real nut/channel/cover interface and installed condition. Integral nuts are not separate new purchases. Steel rebar or a loose rod is not evidence of a complete adjustable assembly. Weigh actual whole wet receipts and raw/WIP stocks; keep the per-flow inherited burden vector. No standard BOM quantity is supplied. Native Product is the manufactured finished musical-instrument parts/accessories family, production mix at plant, Mass/kg. This instance is only the specific whole supplied component described above, retaining its actual material, coating/winding/adhesive and included fittings once. It is not a complete guitar, electronic substitute or unmachined tonewood blank. The isolated native comment “384 Sports goods” matches the next heading in the UN source; the complete bilingual basename and classification identify musical parts. The family does not supply missing quantities, approve a provider or erase the actual supplied/onsite-work boundary.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_material. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Finished bone guitar nut (`bone_nut`)

Actual supplied bone nut, with material/species, slotting and surface state verified. Adjust only actual remaining fit; food nuts, metal nuts and unspecified polymer nuts are different products. Weigh actual whole wet receipts and raw/WIP stocks; keep the per-flow inherited burden vector. No standard BOM quantity is supplied. Native Product is the manufactured finished musical-instrument parts/accessories family, production mix at plant, Mass/kg. This instance is only the specific whole supplied component described above, retaining its actual material, coating/winding/adhesive and included fittings once. It is not a complete guitar, electronic substitute or unmachined tonewood blank. The isolated native comment “384 Sports goods” matches the next heading in the UN source; the complete bilingual basename and classification identify musical parts. The family does not supply missing quantities, approve a provider or erase the actual supplied/onsite-work boundary.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_material. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Finished bone guitar bridge saddle (`bone_saddle`)

One actual finished bone saddle, verified supply state and permitted adjustment. A nut is not the saddle; neither is treated as raw animal bone transformed onsite unless that transformation actually occurs with its separate inputs and losses. Weigh actual whole wet receipts and raw/WIP stocks; keep the per-flow inherited burden vector. No standard BOM quantity is supplied. Native Product is the manufactured finished musical-instrument parts/accessories family, production mix at plant, Mass/kg. This instance is only the specific whole supplied component described above, retaining its actual material, coating/winding/adhesive and included fittings once. It is not a complete guitar, electronic substitute or unmachined tonewood blank. The isolated native comment “384 Sports goods” matches the next heading in the UN source; the complete bilingual basename and classification identify musical parts. The family does not supply missing quantities, approve a provider or erase the actual supplied/onsite-work boundary.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_material. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Finished ebony bridge pin (`ebony_pin`)

One actual finished ebony bridge pin; retain integral decoration once. Different supplied pin materials are separate identities, never assume a plastic-to-bone conversion. Weigh actual whole wet receipts and raw/WIP stocks; keep the per-flow inherited burden vector. No standard BOM quantity is supplied. Native Product is the manufactured finished musical-instrument parts/accessories family, production mix at plant, Mass/kg. This instance is only the specific whole supplied component described above, retaining its actual material, coating/winding/adhesive and included fittings once. It is not a complete guitar, electronic substitute or unmachined tonewood blank. The isolated native comment “384 Sports goods” matches the next heading in the UN source; the complete bilingual basename and classification identify musical parts. The family does not supply missing quantities, approve a provider or erase the actual supplied/onsite-work boundary.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_material. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Complete patterned polymer guitar pickguard (`pickguard`)

One actual supplied patterned polymer pickguard, with real resin, adhesive backing and finish confirmed. Tortoise pattern does not establish tortoise shell, PVC, PET or a particular polymer; collect actual supplier identity before a numeric material provider is selected. Whole article mass and included adhesive are counted once. Weigh actual whole wet receipts and raw/WIP stocks; keep the per-flow inherited burden vector. No standard BOM quantity is supplied. Native Product is the manufactured finished musical-instrument parts/accessories family, production mix at plant, Mass/kg. This instance is only the specific whole supplied component described above, retaining its actual material, coating/winding/adhesive and included fittings once. It is not a complete guitar, electronic substitute or unmachined tonewood blank. The isolated native comment “384 Sports goods” matches the next heading in the UN source; the complete bilingual basename and classification identify musical parts. The family does not supply missing quantities, approve a provider or erase the actual supplied/onsite-work boundary.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_material. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Steel neck-joint bolt (`neck_bolt`)

One actual separately bought steel neck-joint bolt for an approved bolted joint. No bolted joint is fabricated from the generic dovetail example; collect every distinct separately supplied washer/insert as its own atomic row when present. Weigh actual whole wet receipts and raw/WIP stocks; keep the per-flow inherited burden vector. No standard BOM quantity is supplied.

- Selected flow: Steel neck-joint bolt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_material. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Complete metal guitar strap button (`strap_pin`)

One actual complete supplied metal strap button with integral fixing counted once. Different separately supplied end pins and actual decorative inlays are separate atomic articles; add them before dataset use. Weigh actual whole wet receipts and raw/WIP stocks; keep the per-flow inherited burden vector. No standard BOM quantity is supplied. Native Product is the manufactured finished musical-instrument parts/accessories family, production mix at plant, Mass/kg. This instance is only the specific whole supplied component described above, retaining its actual material, coating/winding/adhesive and included fittings once. It is not a complete guitar, electronic substitute or unmachined tonewood blank. The isolated native comment “384 Sports goods” matches the next heading in the UN source; the complete bilingual basename and classification identify musical parts. The family does not supply missing quantities, approve a provider or erase the actual supplied/onsite-work boundary.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_material. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Aqueous aliphatic-resin wood adhesive preparation (`wood_glue`)

Use one actual whole supplied adhesive qualified by the manufacturer/specification for the particular wood joint and service. The instrument-maker application example is not universal approval for a load-bearing/string-loaded joint, exterior exposure or moisture. Polyvinyl alcohol and polyvinyl acetate are different chemical identities; verify the actual supplied adhesive binder and whole preparation without inferring its recipe. Purchase the whole formulation once; assay, active matter, fossil/biogenic carbon and carrier water are non-additive subaccounts. Separately added materials/energy/losses are new individual exchanges. Measure undivided actual amounts and raw/WIP stock, including cleanup and failed work.

- Selected flow: Aqueous aliphatic-resin wood adhesive preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_material. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `titebond-original`; `yamaha-body`; `yamaha-craftsmanship`

###### Nitrocellulose acoustic-instrument lacquer preparation (`body_lacquer`)

One actual whole purchased nitrocellulose instrument lacquer. Record supplied solvents/resins and approved thin flexible tonewood system; the independent Mohawk example is not a Yamaha purchasing record. Typical supplier test values and a plywood test are not instrument-layer thickness, process time, factory yield, recipe or certification limits. Purchase the whole formulation once; assay, active matter, fossil/biogenic carbon and carrier water are non-additive subaccounts. Separately added materials/energy/losses are new individual exchanges. Measure undivided actual amounts and raw/WIP stock, including cleanup and failed work.

- Selected flow: Nitrocellulose acoustic-instrument lacquer preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_material. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `yamaha-fg9-r`; `mohawk-instrument-2012`; `yamaha-coat`

###### Polyurethane neck-coating preparation (`neck_coating`)

One actual whole purchased polyurethane neck coating, with real solvent/water and one/two-component cure route declared. Do not assume it is waterborne, UV cured or chemically identical to body nitrocellulose lacquer. Purchase the whole formulation once; assay, active matter, fossil/biogenic carbon and carrier water are non-additive subaccounts. Separately added materials/energy/losses are new individual exchanges. Measure undivided actual amounts and raw/WIP stock, including cleanup and failed work.

- Selected flow: Polyurethane neck-coating preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_material. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `yamaha-fg9-r`; `yamaha-coat`

###### Vinyl-resin instrument-sealer preparation (`sealer`)

Conditional actual whole vinyl-resin instrument sealer in a supplier-qualified compatible coating system. The Mohawk sealer example does not require that product at every site. A different actual sealer needs a distinct specific row; it must not disappear inside topcoat or an unspecified additives collection. Purchase the whole formulation once; assay, active matter, fossil/biogenic carbon and carrier water are non-additive subaccounts. Separately added materials/energy/losses are new individual exchanges. Measure undivided actual amounts and raw/WIP stock, including cleanup and failed work.

- Selected flow: Vinyl-resin instrument-sealer preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_material. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `mohawk-instrument-2012`; `yamaha-coat`

###### Wood-grain filler paste preparation (`pore_filler`)

Conditional one actual complete supplied wood pore-filler paste, with real binder/filler/solvent declared from its supplier. No abrasive, cleaner or lacquer is hidden in this identity. Purchase the whole formulation once; assay, active matter, fossil/biogenic carbon and carrier water are non-additive subaccounts. Separately added materials/energy/losses are new individual exchanges. Measure undivided actual amounts and raw/WIP stock, including cleanup and failed work.

- Selected flow: Wood-grain filler paste preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_material. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `yamaha-craftsmanship`; `yamaha-coat`

###### Instrument-finish rubbing-compound preparation (`rubbing_compound`)

Actual whole purchased instrument-finish rubbing compound, with abrasive, carrier and supplied form declared. Whole supplied preparation mass is distinct from aluminium content or dry-solids mass; measure it without inventing a solids fraction. Purchase the whole formulation once; assay, active matter, fossil/biogenic carbon and carrier water are non-additive subaccounts. Separately added materials/energy/losses are new individual exchanges. Measure undivided actual amounts and raw/WIP stock, including cleanup and failed work.

- Selected flow: Instrument-finish rubbing-compound preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_material. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `mohawk-instrument-2012`; `yamaha-coat`

###### Wet-sanding rubbing-lubricant preparation (`rubbing_lubricant`)

Conditional one actual whole rubbing lubricant. Its carrier water remains inside this purchase; any real separately added dilution water is measured separately, without adopting an example dilution ratio. Purchase the whole formulation once; assay, active matter, fossil/biogenic carbon and carrier water are non-additive subaccounts. Separately added materials/energy/losses are new individual exchanges. Measure undivided actual amounts and raw/WIP stock, including cleanup and failed work.

- Selected flow: Wet-sanding rubbing-lubricant preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_material. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `mohawk-instrument-2012`

###### Instrument-lacquer reducer preparation (`lacquer_reducer`)

Conditional one actual purchased solvent-blend reducer compatible with the actual lacquer; retain its full supplied formulation once. A single solvent cannot stand for a blend and optional reduction is not mandatory consumption. Purchase the whole formulation once; assay, active matter, fossil/biogenic carbon and carrier water are non-additive subaccounts. Separately added materials/energy/losses are new individual exchanges. Measure undivided actual amounts and raw/WIP stock, including cleanup and failed work.

- Selected flow: Instrument-lacquer reducer preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_material. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `mohawk-instrument-2012`

###### Polyisocyanate coating-hardener preparation (`pu_hardener`)

Conditional only for a real separately supplied two-component polyurethane system approved by its supplier. Measure the whole hardener once; do not invent a mix ratio or treat all polyurethane application as onsite polymer synthesis. Purchase the whole formulation once; assay, active matter, fossil/biogenic carbon and carrier water are non-additive subaccounts. Separately added materials/energy/losses are new individual exchanges. Measure undivided actual amounts and raw/WIP stock, including cleanup and failed work.

- Selected flow: Polyisocyanate coating-hardener preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_material. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `yamaha-fg9-r`

###### Acetone cleaning solvent (`acetone_cleaner`)

Conditional actual separately purchased acetone for authorized compatible tool/process cleaning, with purity and non-aqueous/aquous supply state verified; a hydrometallurgical acetone solution is not substituted. Use actual whole formulation if the cleaner is a mixture instead. Purchase the whole formulation once; assay, active matter, fossil/biogenic carbon and carrier water are non-additive subaccounts. Separately added materials/energy/losses are new individual exchanges. Measure undivided actual amounts and raw/WIP stock, including cleanup and failed work.

- Selected flow: Acetone cleaning solvent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_material. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `yamaha-craftsmanship`

###### Coated abrasive paper (`abrasive_paper`)

Actual one supplied coated abrasive paper article; record mineral, backing, grit and wet/dry use. The whole article includes binder and paper once; each different actual grade/material is separately instantiated.

- Selected flow: Coated abrasive paper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_material. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Cotton buffing-cloth wheel (`buffing_cloth`)

Conditional actual cotton buffing wheel with its complete supplied construction recorded. Do not combine it with rubbing compound or count a full new wheel each guitar; use real stock/use and service records.

- Selected flow: Cotton buffing-cloth wheel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_material. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Low-voltage alternating-current electricity (`m_electricity`)

Manufacturing, including failed/start-stop/idle/cleanup and actual rework. Record actual voltage, grid/provider and geography. Raw kWh is converted once to MJ using 3.6 MJ/kWh; preserve actual customer supply and its one provider boundary without inventing an electricity heating-value conversion.

- Selected flow: Low-voltage alternating-current electricity
- Flow property / unit: Energy / MJ
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_util_m. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_util_m`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Treated tap water (`m_tapwater`)

Manufacturing, including failed/start-stop/idle/cleanup and actual rework. Measure actual supplied liquid water and treatment grade; meter volume requires independently evidenced density at that actual state. Do not transfer another supply state or a secondary screening mass/volume factor to this actual liquid water.

- Selected flow: Treated tap water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_util_m. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_util_m`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Purchased process heat (`m_heat`)

Manufacturing, including failed/start-stop/idle/cleanup and actual rework. Only actual purchased thermal service; retain inlet/return enthalpy, phase, temperature, pressure, meter convention and supplier energy/water boundary. The one heat provider owns its actual load; carrier kg cards are gross disclosures without a second purchase.

- Selected flow: Purchased process heat
- Flow property / unit: Energy / MJ
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_util_m. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_util_m`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Gaseous natural gas (`m_gas`)

Manufacturing, including failed/start-stop/idle/cleanup and actual rework. Conditional actual separately purchased fuel. Keep gas composition, metered state and independently measured density/calorific value; no gas composition, density or calorific value is a factory default. Add actual other fuels individually.

- Selected flow: Gaseous natural gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_util_m. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_util_m`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Supplied steam thermal carrier (`m_steam_in`)

Manufacturing, including failed/start-stop/idle/cleanup and actual rework. Conditional real external steam carrier mass; not assumed from hot side bending. Record actual thermal state and supplier included-water/energy convention; pair real condensate return below. Provider load is owned once by heat or actual whole steam supply, never both.

- Selected flow: Supplied steam thermal carrier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_util_m. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_util_m`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Supplied hot-water thermal carrier (`m_hotwater_in`)

Manufacturing, including failed/start-stop/idle/cleanup and actual rework. Conditional real externally circulating hot water; preserve full actual inbound mass, thermal state and the paired actual Product return. No carrier purchase or credit is invented when the thermal provider already owns that supply.

- Selected flow: Supplied hot-water thermal carrier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_util_m. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_util_m`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Purchased compressed air (`m_compressedair`)

Manufacturing, including failed/start-stop/idle/cleanup and actual rework. Conditional actual external compressed-air service; retain reference pressure, temperature, humidity and composition and supplier included energy. Internally compressed air is an internal handoff whose electricity and actual intake/exhaust species are collected instead, not a second external purchase. The whole purchased gas and its composition-to-mass subledger are counted once; do not add its included molecules as separate atmospheric intakes.

- Selected flow: Purchased compressed air
- Flow property / unit: Volume / m3
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_util_m. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_util_m`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Treatment service for solid wood offcut waste (`wood_offcut_treatment`)

Conditional actual treatment of the uniquely identified solid wood offcut waste outlet. One real receiver/provider boundary, original unit and independently evidenced actual-state conversion; kg here is actual wet feed demand only when the provider supports it. A mixed outlet has one treatment service; pool W is not another provider purchase. If treatment occurs onsite, collect every actual material, energy, water and species instead of adding the whole service again. Sale/export/failure never automatically removes incurred manufacturing or treatment burden.

- Selected flow: Treatment service for solid wood offcut waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_treatment_manufacture. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_manufacture`
- Sources: `ilcd-attributional-2010`

###### Treatment service for captured wood-dust waste (`wood_dust_captured_treatment`)

Conditional actual treatment of the uniquely identified captured wood-dust waste outlet. One real receiver/provider boundary, original unit and independently evidenced actual-state conversion; kg here is actual wet feed demand only when the provider supports it. A mixed outlet has one treatment service; pool W is not another provider purchase. If treatment occurs onsite, collect every actual material, energy, water and species instead of adding the whole service again. Sale/export/failure never automatically removes incurred manufacturing or treatment burden.

- Selected flow: Treatment service for captured wood-dust waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_treatment_manufacture. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_manufacture`
- Sources: `ilcd-attributional-2010`

###### Treatment service for copper-nickel-zinc fret-wire scrap (`fret_scrap_treatment`)

Conditional actual treatment of the uniquely identified copper-nickel-zinc fret-wire scrap outlet. One real receiver/provider boundary, original unit and independently evidenced actual-state conversion; kg here is actual wet feed demand only when the provider supports it. A mixed outlet has one treatment service; pool W is not another provider purchase. If treatment occurs onsite, collect every actual material, energy, water and species instead of adding the whole service again. Sale/export/failure never automatically removes incurred manufacturing or treatment burden.

- Selected flow: Treatment service for copper-nickel-zinc fret-wire scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_treatment_manufacture. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_manufacture`
- Sources: `ilcd-attributional-2010`

###### Treatment service for discarded coated steel acoustic string (`string_scrap_treatment`)

Conditional actual treatment of the uniquely identified discarded coated steel acoustic string outlet. One real receiver/provider boundary, original unit and independently evidenced actual-state conversion; kg here is actual wet feed demand only when the provider supports it. A mixed outlet has one treatment service; pool W is not another provider purchase. If treatment occurs onsite, collect every actual material, energy, water and species instead of adding the whole service again. Sale/export/failure never automatically removes incurred manufacturing or treatment burden.

- Selected flow: Treatment service for discarded coated steel acoustic string
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_treatment_manufacture. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_manufacture`
- Sources: `ilcd-attributional-2010`

###### Treatment service for aqueous wood-adhesive residue waste (`glue_residue_treatment`)

Conditional actual treatment of the uniquely identified aqueous wood-adhesive residue waste outlet. One real receiver/provider boundary, original unit and independently evidenced actual-state conversion; kg here is actual wet feed demand only when the provider supports it. A mixed outlet has one treatment service; pool W is not another provider purchase. If treatment occurs onsite, collect every actual material, energy, water and species instead of adding the whole service again. Sale/export/failure never automatically removes incurred manufacturing or treatment burden.

- Selected flow: Treatment service for aqueous wood-adhesive residue waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_treatment_manufacture. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_manufacture`
- Sources: `ilcd-attributional-2010`

###### Treatment service for instrument-coating overspray sludge (`coating_sludge_treatment`)

Conditional actual treatment of the uniquely identified instrument-coating overspray sludge outlet. One real receiver/provider boundary, original unit and independently evidenced actual-state conversion; kg here is actual wet feed demand only when the provider supports it. A mixed outlet has one treatment service; pool W is not another provider purchase. If treatment occurs onsite, collect every actual material, energy, water and species instead of adding the whole service again. Sale/export/failure never automatically removes incurred manufacturing or treatment burden.

- Selected flow: Treatment service for instrument-coating overspray sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_treatment_manufacture. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_manufacture`
- Sources: `ilcd-attributional-2010`

###### Treatment service for spent instrument-process cleaning solvent (`spent_cleaner_treatment`)

Conditional actual treatment of the uniquely identified spent instrument-process cleaning solvent outlet. One real receiver/provider boundary, original unit and independently evidenced actual-state conversion; kg here is actual wet feed demand only when the provider supports it. A mixed outlet has one treatment service; pool W is not another provider purchase. If treatment occurs onsite, collect every actual material, energy, water and species instead of adding the whole service again. Sale/export/failure never automatically removes incurred manufacturing or treatment burden.

- Selected flow: Treatment service for spent instrument-process cleaning solvent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_treatment_manufacture. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_manufacture`
- Sources: `ilcd-attributional-2010`

###### Treatment service for spent coated abrasive paper (`spent_abrasive_treatment`)

Conditional actual treatment of the uniquely identified spent coated abrasive paper outlet. One real receiver/provider boundary, original unit and independently evidenced actual-state conversion; kg here is actual wet feed demand only when the provider supports it. A mixed outlet has one treatment service; pool W is not another provider purchase. If treatment occurs onsite, collect every actual material, energy, water and species instead of adding the whole service again. Sale/export/failure never automatically removes incurred manufacturing or treatment burden.

- Selected flow: Treatment service for spent coated abrasive paper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_treatment_manufacture. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_manufacture`
- Sources: `ilcd-attributional-2010`

###### Treatment service for spent polyester spray-booth filter (`spent_filter_treatment`)

Conditional actual treatment of the uniquely identified spent polyester spray-booth filter outlet. One real receiver/provider boundary, original unit and independently evidenced actual-state conversion; kg here is actual wet feed demand only when the provider supports it. A mixed outlet has one treatment service; pool W is not another provider purchase. If treatment occurs onsite, collect every actual material, energy, water and species instead of adding the whole service again. Sale/export/failure never automatically removes incurred manufacturing or treatment burden.

- Selected flow: Treatment service for spent polyester spray-booth filter
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_treatment_manufacture. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_manufacture`
- Sources: `ilcd-attributional-2010`

###### Treatment service for instrument-process cleaning wastewater (`cleaning_wastewater_treatment`)

Conditional actual treatment of the uniquely identified instrument-process cleaning wastewater outlet. One real receiver/provider boundary, original unit and independently evidenced actual-state conversion; kg here is actual wet feed demand only when the provider supports it. A mixed outlet has one treatment service; pool W is not another provider purchase. If treatment occurs onsite, collect every actual material, energy, water and species instead of adding the whole service again. Sale/export/failure never automatically removes incurred manufacturing or treatment burden.

- Selected flow: Treatment service for instrument-process cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_treatment_manufacture. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_manufacture`
- Sources: `ilcd-attributional-2010`

###### Treatment service for mixed guitar-manufacturing waste (`mixed_manufacturing_waste_treatment`)

Conditional actual treatment of the uniquely identified mixed guitar-manufacturing waste outlet. One real receiver/provider boundary, original unit and independently evidenced actual-state conversion; kg here is actual wet feed demand only when the provider supports it. A mixed outlet has one treatment service; pool W is not another provider purchase. If treatment occurs onsite, collect every actual material, energy, water and species instead of adding the whole service again. Sale/export/failure never automatically removes incurred manufacturing or treatment burden.

- Selected flow: Treatment service for mixed guitar-manufacturing waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_treatment_manufacture. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_manufacture`
- Sources: `ilcd-attributional-2010`

##### Waste flows

##### Elementary flows

###### Oxygen in ambient air (`m_oxygen_in`)

Manufacturing, including failed/start-stop/idle/cleanup and actual rework. Actual molecular O2 ingress; CAS 7782-44-7, Elementary resource from air. Keep full measured gross species intake; bottled oxygen Product supply would require another row. This is only an actual atmosphere-to-foreground crossing. Species already inside a purchased compressed-air/whole formulation/article are non-additive composition subaccounts, not a second atmospheric/resource intake; keep whole and component bridges disjoint.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_util_m. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_util_m`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Dinitrogen in ambient air (`m_nitrogen_in`)

Manufacturing, including failed/start-stop/idle/cleanup and actual rework. Actual molecular N2 ingress; CAS 7727-37-9, Elementary renewable element resource from air. It is not total nitrogen, ammonia or nitrous oxide. This is only an actual atmosphere-to-foreground crossing. Species already inside a purchased compressed-air/whole formulation/article are non-additive composition subaccounts, not a second atmospheric/resource intake; keep whole and component bridges disjoint.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_util_m. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_util_m`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Argon in ambient air (`m_argon_in`)

Manufacturing, including failed/start-stop/idle/cleanup and actual rework. Actual argon ingress separately measured/constrained from real air composition and full flow; do not duplicate a whole-air aggregate. This is only an actual atmosphere-to-foreground crossing. Species already inside a purchased compressed-air/whole formulation/article are non-additive composition subaccounts, not a second atmospheric/resource intake; keep whole and component bridges disjoint. Native Elementary is ordinary argon CAS 7440-37-1, Mass/kg, renewable element resource from air. Use only measured actual ambient gaseous ingress, not bottled/liquid Product, isotope-labelled or radioactive argon; isotope aliases do not override the canonical CAS and resource compartment. Preserve whole-air/component ownership without default composition.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_util_m. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_util_m`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Carbon dioxide in incoming ambient air (`m_ambient_co2_in`)

Manufacturing, including failed/start-stop/idle/cleanup and actual rework. Actual ambient CO2 pass-through, separately identified from new fossil resin emissions, biogenic wood oxidation and forestry uptake. No foreground sequestration credit. This is only an actual atmosphere-to-foreground crossing. Species already inside a purchased compressed-air/whole formulation/article are non-additive composition subaccounts, not a second atmospheric/resource intake; keep whole and component bridges disjoint.

- Selected flow: Carbon dioxide in incoming ambient air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_util_m. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_util_m`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Water vapour absorbed from ambient air (`m_humidity_in`)

Manufacturing, including failed/start-stop/idle/cleanup and actual rework. Real H2O uptake during ordinary conditioning, storage, handling, drying or actual work, not only repair/cleaning. Keep this actual influx even when all added water remains in complete wet closing material/FG/package stock; X removes only overlap with another inlet term. No work permission is invented for natural sorption. This is only an actual atmosphere-to-foreground crossing. Species already inside a purchased compressed-air/whole formulation/article are non-additive composition subaccounts, not a second atmospheric/resource intake; keep whole and component bridges disjoint.

- Selected flow: Water vapour absorbed from ambient air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_util_m. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_util_m`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

#### Outputs

##### Product flows

###### Condensate water returned to thermal supplier (`m_condensate_return`)

Manufacturing, including failed/start-stop/idle/cleanup and actual rework. Return actual liquid condensate as a Product flow at its actual thermal state, not wastewater or an automatic economic credit. Gross mass remains complete; supplier heat/water accounting owns burden once.

- Selected flow: Condensate water returned to thermal supplier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_util_m. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_util_m`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Hot water returned to thermal supplier (`m_hotwater_return`)

Manufacturing, including failed/start-stop/idle/cleanup and actual rework. Actual external thermal-water return, not a duplicated opening/closing store or assumed equal to the inlet.

- Selected flow: Hot water returned to thermal supplier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_util_m. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_util_m`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Complete first-released steel-string acoustic guitar (`finished_guitar`)

One complete usable non-electronic steel-string all-solid wood acoustic guitar with approved solid Adirondack spruce top, solid Indian rosewood back/sides, mahogany neck, ebony fretboard/bridge, bone nut/saddle and all real integral bracing, bindings, strings, tuners, truss rod, joints and fittings. Native Product identity is Other string musical instruments, manufactured finished product, production mix at plant, Mass reference; no CAS, fixed species/grade, dimensions, geography or service life is declared by that native family. The positive whole-instrument primary example narrows it; neither piano, electric instrument, generic timber, bare body, neck, soundboard nor unstrung kit satisfies it. Measure actual complete net mass, excluding independent case/wrench/documents and all packaging. First release is unique; closing FG already included in Q is not another output or manufacturing carry.

- Selected flow: Other string musical instruments `9fa0d42e-18d3-4a28-8ffa-f382932ec5ad`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Source rule (`source_rule`)
- Collection protocol: `cp_release`
- Sources: `yamaha-fg9-r`; `yamaha-craftsmanship`; `yamaha-choose`; `un-cpc3`

##### Waste flows

###### Solid wood offcut waste (`wood_offcut`)

Actual separately collected offcuts, with disjoint species pools and full wet mass. If sold, it is still an actual outlet and has no automatic manufacturing credit. Preserve failed batches, zero-output runs, samples, cleanup and actual work; ordinary disposal/export/sale does not transfer burden to another function.

- Selected flow: Solid wood offcut waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_waste_m. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_m`
- Sources: `yamaha-craftsmanship`; `mohawk-instrument-2012`; `ilcd-attributional-2010`

###### Captured wood-dust waste (`wood_dust_captured`)

Actual separately captured dust/sawdust outlet, not the same dust also emitted to air. If mixed with other waste at the single real outlet, use that one mixed exchange and source-pool W only. Preserve failed batches, zero-output runs, samples, cleanup and actual work; ordinary disposal/export/sale does not transfer burden to another function.

- Selected flow: Captured wood-dust waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_waste_m. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_m`
- Sources: `yamaha-craftsmanship`; `mohawk-instrument-2012`; `ilcd-attributional-2010`

###### Copper-nickel-zinc fret-wire scrap (`fret_scrap`)

Actual separate copper-nickel-zinc scrap from trimming or failed installation; nickel silver is not silver metal and recycling sale is not an automatic credit. Preserve failed batches, zero-output runs, samples, cleanup and actual work; ordinary disposal/export/sale does not transfer burden to another function.

- Selected flow: Copper-nickel-zinc fret-wire scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_waste_m. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_m`
- Sources: `yamaha-craftsmanship`; `mohawk-instrument-2012`; `ilcd-attributional-2010`

###### Discarded coated steel acoustic string (`string_scrap`)

One actual separate rejected/replaced steel-core string whole article including its winding and coating; do not add its component mass beside the whole. Preserve failed batches, zero-output runs, samples, cleanup and actual work; ordinary disposal/export/sale does not transfer burden to another function.

- Selected flow: Discarded coated steel acoustic string
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_waste_m. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_m`
- Sources: `yamaha-craftsmanship`; `mohawk-instrument-2012`; `ilcd-attributional-2010`

###### Aqueous wood-adhesive residue waste (`glue_residue`)

Actual separately removed whole wet adhesive residue, with supplied carrier water and independently measured stock; evaporation and solid polymer are non-overlapping destinations. Preserve failed batches, zero-output runs, samples, cleanup and actual work; ordinary disposal/export/sale does not transfer burden to another function.

- Selected flow: Aqueous wood-adhesive residue waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_waste_m. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_m`
- Sources: `yamaha-craftsmanship`; `mohawk-instrument-2012`; `ilcd-attributional-2010`

###### Instrument-coating overspray sludge (`coating_sludge`)

Actual separate wet coating/booth sludge outlet; declare real mixture/phase and contamination. Whole mixed sludge is one Waste exchange, not an invented pure solvent or sum of both whole and constituents. Preserve failed batches, zero-output runs, samples, cleanup and actual work; ordinary disposal/export/sale does not transfer burden to another function.

- Selected flow: Instrument-coating overspray sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_waste_m. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_m`
- Sources: `yamaha-craftsmanship`; `mohawk-instrument-2012`; `ilcd-attributional-2010`

###### Spent instrument-process cleaning solvent (`spent_cleaner`)

Actual separately collected spent whole solvent with contamination, water and treatment measured. Recovered solvent returned internally is paired/cancelled and not a new purchase or automatic credit. Preserve failed batches, zero-output runs, samples, cleanup and actual work; ordinary disposal/export/sale does not transfer burden to another function.

- Selected flow: Spent instrument-process cleaning solvent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_waste_m. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_m`
- Sources: `yamaha-craftsmanship`; `mohawk-instrument-2012`; `ilcd-attributional-2010`

###### Spent coated abrasive paper (`spent_abrasive`)

Actual separate spent supplied abrasive whole article; its coating, backing and retained moisture/residue are included once. Preserve failed batches, zero-output runs, samples, cleanup and actual work; ordinary disposal/export/sale does not transfer burden to another function.

- Selected flow: Spent coated abrasive paper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_waste_m. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_m`
- Sources: `yamaha-craftsmanship`; `mohawk-instrument-2012`; `ilcd-attributional-2010`

###### Spent polyester spray-booth filter (`spent_filter`)

Conditional actual separately collected polyester booth filter, with captured wet coating. Do not simultaneously count the same captured coating as a second sludge outlet. Preserve failed batches, zero-output runs, samples, cleanup and actual work; ordinary disposal/export/sale does not transfer burden to another function.

- Selected flow: Spent polyester spray-booth filter
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_waste_m. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_m`
- Sources: `yamaha-craftsmanship`; `mohawk-instrument-2012`; `ilcd-attributional-2010`

###### Instrument-process cleaning wastewater (`cleaning_wastewater`)

Actual full wet liquid wastewater at its receiver boundary; COD/TOC and measured solutes are subaccounts. No direct river emission is assumed for a wastewater Product/Waste handover. Preserve failed batches, zero-output runs, samples, cleanup and actual work; ordinary disposal/export/sale does not transfer burden to another function.

- Selected flow: Instrument-process cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_waste_m. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_m`
- Sources: `yamaha-craftsmanship`; `mohawk-instrument-2012`; `ilcd-attributional-2010`

###### Mixed guitar-manufacturing waste (`mixed_manufacturing_waste`)

Only where a genuinely single mixed outlet exists. Retain one whole wet Waste exchange and independently measured disjoint source pools. Source-pool totals equal the total, never add both; absent separate outlets above are evidenced, not invented zeros. Preserve failed batches, zero-output runs, samples, cleanup and actual work; ordinary disposal/export/sale does not transfer burden to another function.

- Selected flow: Mixed guitar-manufacturing waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_waste_m. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_m`
- Sources: `yamaha-craftsmanship`; `mohawk-instrument-2012`; `ilcd-attributional-2010`

##### Elementary flows

###### Oxygen to air (`m_oxygen_out`)

Manufacturing, including failed/start-stop/idle/cleanup and actual rework. Actual unconsumed molecular oxygen, CAS 7782-44-7, Elementary emission to air, unspecified. Record actual outlet context; other media need their own matching identity.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_util_m. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_util_m`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Dinitrogen to air (`m_nitrogen_out`)

Manufacturing, including failed/start-stop/idle/cleanup and actual rework. Actual molecular N2, CAS 7727-37-9, Elementary emission to air, unspecified; not an air aggregate or NOx/N2O.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_util_m. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_util_m`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Argon to air (`m_argon_out`)

Manufacturing, including failed/start-stop/idle/cleanup and actual rework. Real argon outlet; separately constrain actual mass without adding an aggregate exhaust-air mass. Native Elementary is ordinary argon CAS 7440-37-1, Mass/kg, air unspecified. Not long-term, indoor/high-stack-specific, water/soil, radioactive or isotope-labelled identity. Record unchanged carrier throughput separately from newly generated emissions; no default composition or extra supplier demand.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_util_m. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_util_m`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Passed-through ambient carbon dioxide to air (`m_ambient_co2_out`)

Manufacturing, including failed/start-stop/idle/cleanup and actual rework. Actual separately traced incoming ambient CO2 returned to air; exclude this pool from the newly generated fossil/biogenic CO2 cards.

- Selected flow: Passed-through ambient carbon dioxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_util_m. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_util_m`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Water vapour released to air (`m_water_vapor`)

Manufacturing, including failed/start-stop/idle/cleanup and actual rework. Actual H2O gas, CAS 7732-18-5, Elementary air emission, unspecified; separate evaporation/desorption, carrier/formulation water and independently evidenced reaction water subaccounts. Broad water aliases do not turn this gas exchange into liquid, ice or isotopic water. Ordinary storage/handling desorption counts.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_util_m. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_util_m`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Biogenic carbon dioxide to air (`m_biogenic_co2`)

Manufacturing, including failed/start-stop/idle/cleanup and actual rework. Conditional independently evidenced newly generated biogenic CO2, CAS 124-38-9; native Elementary emission to air, unspecified. Stored wood carbon and normal moisture loss are not CO2 emissions; no default oxidation or upstream forestry uptake is invented.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_util_m. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_util_m`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Fossil carbon dioxide to air (`m_fossil_co2`)

Manufacturing, including failed/start-stop/idle/cleanup and actual rework. Conditional actual newly generated fossil CO2, CAS 124-38-9; native Elementary air emission, unspecified. Keep fuel/resin oxidation separate from ambient pass-through and biogenic carbon; a fossil-containing coating remaining on the guitar is not emitted carbon dioxide.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_util_m. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_util_m`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Acetone to air (`acetone_air`)

Conditional actual observed exchange. CAS 67-64-1; actual acetone gas to unspecified air, not indoor emissions remapped to outdoors. Determine from substance-specific sampling, approved mass accounting and actual formulation/abatement records. VOC, COD, total carbon and PM do not establish molecular mass. Capture all real unlisted species as new individual rows; absence requires evidence.

- Selected flow: acetone `08a91e70-3ddc-11dd-9520-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_emission. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `yamaha-craftsmanship`; `mohawk-instrument-2012`

###### Ethyl acetate to air (`ethyl_acetate_air`)

Conditional actual observed exchange. CAS 141-78-6; actual ethyl acetate gas to unspecified air; not 2-ethoxyethyl acetate or n-butyl acetate. Determine from substance-specific sampling, approved mass accounting and actual formulation/abatement records. VOC, COD, total carbon and PM do not establish molecular mass. Capture all real unlisted species as new individual rows; absence requires evidence.

- Selected flow: ethyl acetate `4d9a8790-3ddd-11dd-97ba-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_emission. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `yamaha-craftsmanship`; `mohawk-instrument-2012`

###### Ethanol to outdoor air (`ethanol_air`)

Conditional actual observed exchange. CAS 64-17-5; real ethanol gas at actual outdoor discharge; indoor emissions and fluorinated ethanol are different identities. Determine from substance-specific sampling, approved mass accounting and actual formulation/abatement records. VOC, COD, total carbon and PM do not establish molecular mass. Capture all real unlisted species as new individual rows; absence requires evidence. The native canonical molecule/CAS and Mass/kg reference identify this actual air-unspecified Elementary release. Require actual measured species, phase and outlet; long-term, indoor, high-stack-specific, water/soil, purchased solvent, ion and isotope identities are not interchangeable. Synonym noise does not override the canonical molecule and CAS; no total VOC/NOx, mixture or precursor-based emission factor.

- Selected flow: ethanol `08a91e70-3ddc-11dd-9349-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_emission. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `yamaha-craftsmanship`; `mohawk-instrument-2012`

###### Toluene to outdoor air (`toluene_air`)

Conditional actual observed exchange. CAS 108-88-3; actual toluene gas, not diisocyanate/diamine or an indoor-only identity. Determine from substance-specific sampling, approved mass accounting and actual formulation/abatement records. VOC, COD, total carbon and PM do not establish molecular mass. Capture all real unlisted species as new individual rows; absence requires evidence. The native canonical molecule/CAS and Mass/kg reference identify this actual air-unspecified Elementary release. Require actual measured species, phase and outlet; long-term, indoor, high-stack-specific, water/soil, purchased solvent, ion and isotope identities are not interchangeable. Synonym noise does not override the canonical molecule and CAS; no total VOC/NOx, mixture or precursor-based emission factor.

- Selected flow: toluene `4d9a8790-3ddd-11dd-9bb5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_emission. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `yamaha-craftsmanship`; `mohawk-instrument-2012`

###### n-Butyl acetate to outdoor air (`butyl_acetate_air`)

Conditional actual observed exchange. CAS 123-86-4; real n-butyl acetate, not butyl butyrate, tert-butyl acetate or an indoor-only identity. Verify the supplied molecule and receiving medium before using any identity reference. Determine from substance-specific sampling, approved mass accounting and actual formulation/abatement records. VOC, COD, total carbon and PM do not establish molecular mass. Capture all real unlisted species as new individual rows; absence requires evidence.

- Selected flow: n-Butyl acetate to outdoor air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_emission. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `yamaha-craftsmanship`; `mohawk-instrument-2012`

###### Nitrogen monoxide to outdoor air (`no_air`)

Conditional actual observed exchange. CAS 10102-43-9; actual NO gas at the measured outlet, not NOx renamed as NO and not a presumed urban-air release. Determine from substance-specific sampling, approved mass accounting and actual formulation/abatement records. VOC, COD, total carbon and PM do not establish molecular mass. Capture all real unlisted species as new individual rows; absence requires evidence. The native canonical molecule/CAS and Mass/kg reference identify this actual air-unspecified Elementary release. Require actual measured species, phase and outlet; long-term, indoor, high-stack-specific, water/soil, purchased solvent, ion and isotope identities are not interchangeable. Synonym noise does not override the canonical molecule and CAS; no total VOC/NOx, mixture or precursor-based emission factor.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_emission. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `yamaha-craftsmanship`; `mohawk-instrument-2012`

###### Nitrogen dioxide to outdoor air (`no2_air`)

Conditional actual observed exchange. CAS 10102-44-0; actual NO2 gas; total NOx is not this molecule.  Determine from substance-specific sampling, approved mass accounting and actual formulation/abatement records. VOC, COD, total carbon and PM do not establish molecular mass. Capture all real unlisted species as new individual rows; absence requires evidence. The native canonical molecule/CAS and Mass/kg reference identify this actual air-unspecified Elementary release. Require actual measured species, phase and outlet; long-term, indoor, high-stack-specific, water/soil, purchased solvent, ion and isotope identities are not interchangeable. Synonym noise does not override the canonical molecule and CAS; no total VOC/NOx, mixture or precursor-based emission factor. Independent complete-native review finds canonical nitrogen dioxide, CAS 10102-44-0, and air-unspecified Mass/kg mutually consistent. Tetroxide aliases are retained as noisy synonyms, not evidence that NO2 equals N2O4, total NOx or a dimer mixture; those actual species require separate identities.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_emission. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `yamaha-craftsmanship`; `mohawk-instrument-2012`

###### Fossil carbon monoxide to air (`co_air`)

Conditional actual observed exchange. CAS 630-08-0; actual newly generated fossil CO; native unspecified-air Elementary emission, not biogenic CO or unchanged ambient CO. Determine from substance-specific sampling, approved mass accounting and actual formulation/abatement records. VOC, COD, total carbon and PM do not establish molecular mass. Capture all real unlisted species as new individual rows; absence requires evidence.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_emission. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `yamaha-craftsmanship`; `mohawk-instrument-2012`

###### Methane to outdoor air (`methane_air`)

Conditional actual observed exchange. CAS 74-82-8; actual methane with real carbon origin and discharge context; no carbon factor or release from fuel purchase alone. Determine from substance-specific sampling, approved mass accounting and actual formulation/abatement records. VOC, COD, total carbon and PM do not establish molecular mass. Capture all real unlisted species as new individual rows; absence requires evidence.

- Selected flow: Methane to outdoor air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_emission. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `yamaha-craftsmanship`; `mohawk-instrument-2012`

###### Wood dust aerosol to air (`wood_dust_air`)

Conditional actual observed exchange. Actual escaping wood dust, with species/moisture and particle-size context measured; a material aerosol is not a particular organic molecule and captured dust is a separate actual waste outlet. Determine from substance-specific sampling, approved mass accounting and actual formulation/abatement records. VOC, COD, total carbon and PM do not establish molecular mass. Capture all real unlisted species as new individual rows; absence requires evidence.

- Selected flow: Wood dust aerosol to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_emission. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `yamaha-craftsmanship`; `mohawk-instrument-2012`

###### 1,1,1,2-Tetrafluoroethane to air (`r134a_air`)

Conditional actual observed exchange. CAS 811-97-2; conditional actual identified R134a leakage only; no other fluorinated compound, default leakage factor or assumed refrigeration system. Determine from substance-specific sampling, approved mass accounting and actual formulation/abatement records. VOC, COD, total carbon and PM do not establish molecular mass. Capture all real unlisted species as new individual rows; absence requires evidence.

- Selected flow: 1,1,1,2-Tetrafluoroethane to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_emission. Its numerator is attributed manufacturing A_m_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `yamaha-craftsmanship`; `mohawk-instrument-2012`

### Process: Original-cohort actual factory-gate service (`gate_service`)

#### Inputs

##### Product flows

###### Low-voltage alternating-current electricity (`h_electricity`)

Original-release-cohort storage, handling, dispatch and any actual post-release work during the observed horizon. Record actual voltage, grid/provider and geography. Raw kWh is converted once to MJ using 3.6 MJ/kWh; preserve actual customer supply and its one provider boundary without inventing an electricity heating-value conversion.

- Selected flow: Low-voltage alternating-current electricity
- Flow property / unit: Energy / MJ
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_util_h. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_util_h`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Treated tap water (`h_tapwater`)

Original-release-cohort storage, handling, dispatch and any actual post-release work during the observed horizon. Measure actual supplied liquid water and treatment grade; meter volume requires independently evidenced density at that actual state. Do not transfer another supply state or a secondary screening mass/volume factor to this actual liquid water.

- Selected flow: Treated tap water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_util_h. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_util_h`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Purchased process heat (`h_heat`)

Original-release-cohort storage, handling, dispatch and any actual post-release work during the observed horizon. Only actual purchased thermal service; retain inlet/return enthalpy, phase, temperature, pressure, meter convention and supplier energy/water boundary. The one heat provider owns its actual load; carrier kg cards are gross disclosures without a second purchase.

- Selected flow: Purchased process heat
- Flow property / unit: Energy / MJ
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_util_h. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_util_h`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Gaseous natural gas (`h_gas`)

Original-release-cohort storage, handling, dispatch and any actual post-release work during the observed horizon. Conditional actual separately purchased fuel. Keep gas composition, metered state and independently measured density/calorific value; no gas composition, density or calorific value is a factory default. Add actual other fuels individually.

- Selected flow: Gaseous natural gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_util_h. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_util_h`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Supplied steam thermal carrier (`h_steam_in`)

Original-release-cohort storage, handling, dispatch and any actual post-release work during the observed horizon. Conditional real external steam carrier mass; not assumed from hot side bending. Record actual thermal state and supplier included-water/energy convention; pair real condensate return below. Provider load is owned once by heat or actual whole steam supply, never both.

- Selected flow: Supplied steam thermal carrier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_util_h. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_util_h`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Supplied hot-water thermal carrier (`h_hotwater_in`)

Original-release-cohort storage, handling, dispatch and any actual post-release work during the observed horizon. Conditional real externally circulating hot water; preserve full actual inbound mass, thermal state and the paired actual Product return. No carrier purchase or credit is invented when the thermal provider already owns that supply.

- Selected flow: Supplied hot-water thermal carrier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_util_h. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_util_h`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Purchased compressed air (`h_compressedair`)

Original-release-cohort storage, handling, dispatch and any actual post-release work during the observed horizon. Conditional actual external compressed-air service; retain reference pressure, temperature, humidity and composition and supplier included energy. Internally compressed air is an internal handoff whose electricity and actual intake/exhaust species are collected instead, not a second external purchase. The whole purchased gas and its composition-to-mass subledger are counted once; do not add its included molecules as separate atmospheric intakes.

- Selected flow: Purchased compressed air
- Flow property / unit: Volume / m3
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_util_h. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_util_h`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Returned first-released acoustic guitar (`guitar_return`)

Full actual returned whole/partial state linked to original release and shipment, measured mass, moisture, loss and new additions. Not assumed equal to original delivered mass or good-as-new. Keep full opening/closing FG and inherited manufacturing vectors and every actual incremental service load. Failed/unauthorized occurred work retains all parts/water/energy and actual hold/waste disposition. Permission, postwork tests and acceptance govern continued conformity, not deletion of occurred flows. This unbound Product receipt is only for a genuinely reusable whole instrument or specifically identified reusable returned components in their actual state. Actual discarded Waste received is retained as a distinct compatible Waste input with full wet mass, original cohort and treatment ownership; partial or discarded matter must never be forced into the complete finished-guitar identity or silently omitted.

- Selected flow: Returned first-released acoustic guitar
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_fg. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fg`
- Sources: `yamaha-qc`; `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Supplied steel hex key (`hex_key_in`)

Conditional actual whole supplied independent accessory, measure actual wet mass/count and supply burden once; exclude from net guitar reference mass. Record real separately delivered copy/part, not its material constituents as extra purchases.

- Selected flow: Supplied steel hex key
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_fg. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fg`
- Sources: `yamaha-fg9-r`

###### Supplied printed guitar document (`document_in`)

Conditional actual whole supplied independent accessory, measure actual wet mass/count and supply burden once; exclude from net guitar reference mass. Record real separately delivered copy/part, not its material constituents as extra purchases.

- Selected flow: Supplied printed guitar document
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_fg. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fg`
- Sources: `yamaha-fg9-r`

###### Treatment service for discarded complete or damaged acoustic guitar (`guitar_discard_treatment`)

Conditional actual treatment of the uniquely identified discarded complete or damaged acoustic guitar outlet. One real receiver/provider boundary, original unit and independently evidenced actual-state conversion; kg here is actual wet feed demand only when the provider supports it. A mixed outlet has one treatment service; pool W is not another provider purchase. If treatment occurs onsite, collect every actual material, energy, water and species instead of adding the whole service again. Sale/export/failure never automatically removes incurred manufacturing or treatment burden.

- Selected flow: Treatment service for discarded complete or damaged acoustic guitar
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_treatment_gate_service. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_gate_service`
- Sources: `ilcd-attributional-2010`

##### Waste flows

##### Elementary flows

###### Oxygen in ambient air (`h_oxygen_in`)

Original-release-cohort storage, handling, dispatch and any actual post-release work during the observed horizon. Actual molecular O2 ingress; CAS 7782-44-7, Elementary resource from air. Keep full measured gross species intake; bottled oxygen Product supply would require another row. This is only an actual atmosphere-to-foreground crossing. Species already inside a purchased compressed-air/whole formulation/article are non-additive composition subaccounts, not a second atmospheric/resource intake; keep whole and component bridges disjoint.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_util_h. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_util_h`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Dinitrogen in ambient air (`h_nitrogen_in`)

Original-release-cohort storage, handling, dispatch and any actual post-release work during the observed horizon. Actual molecular N2 ingress; CAS 7727-37-9, Elementary renewable element resource from air. It is not total nitrogen, ammonia or nitrous oxide. This is only an actual atmosphere-to-foreground crossing. Species already inside a purchased compressed-air/whole formulation/article are non-additive composition subaccounts, not a second atmospheric/resource intake; keep whole and component bridges disjoint.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_util_h. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_util_h`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Argon in ambient air (`h_argon_in`)

Original-release-cohort storage, handling, dispatch and any actual post-release work during the observed horizon. Actual argon ingress separately measured/constrained from real air composition and full flow; do not duplicate a whole-air aggregate. This is only an actual atmosphere-to-foreground crossing. Species already inside a purchased compressed-air/whole formulation/article are non-additive composition subaccounts, not a second atmospheric/resource intake; keep whole and component bridges disjoint. Native Elementary is ordinary argon CAS 7440-37-1, Mass/kg, renewable element resource from air. Use only measured actual ambient gaseous ingress, not bottled/liquid Product, isotope-labelled or radioactive argon; isotope aliases do not override the canonical CAS and resource compartment. Preserve whole-air/component ownership without default composition.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_util_h. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_util_h`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Carbon dioxide in incoming ambient air (`h_ambient_co2_in`)

Original-release-cohort storage, handling, dispatch and any actual post-release work during the observed horizon. Actual ambient CO2 pass-through, separately identified from new fossil resin emissions, biogenic wood oxidation and forestry uptake. No foreground sequestration credit. This is only an actual atmosphere-to-foreground crossing. Species already inside a purchased compressed-air/whole formulation/article are non-additive composition subaccounts, not a second atmospheric/resource intake; keep whole and component bridges disjoint.

- Selected flow: Carbon dioxide in incoming ambient air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_util_h. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_util_h`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Water vapour absorbed from ambient air (`h_humidity_in`)

Original-release-cohort storage, handling, dispatch and any actual post-release work during the observed horizon. Real H2O uptake during ordinary conditioning, storage, handling, drying or actual work, not only repair/cleaning. Keep this actual influx even when all added water remains in complete wet closing material/FG/package stock; X removes only overlap with another inlet term. No work permission is invented for natural sorption. This is only an actual atmosphere-to-foreground crossing. Species already inside a purchased compressed-air/whole formulation/article are non-additive composition subaccounts, not a second atmospheric/resource intake; keep whole and component bridges disjoint.

- Selected flow: Water vapour absorbed from ambient air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_util_h. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_util_h`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

#### Outputs

##### Product flows

###### Condensate water returned to thermal supplier (`h_condensate_return`)

Original-release-cohort storage, handling, dispatch and any actual post-release work during the observed horizon. Return actual liquid condensate as a Product flow at its actual thermal state, not wastewater or an automatic economic credit. Gross mass remains complete; supplier heat/water accounting owns burden once.

- Selected flow: Condensate water returned to thermal supplier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_util_h. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_util_h`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Hot water returned to thermal supplier (`h_hotwater_return`)

Original-release-cohort storage, handling, dispatch and any actual post-release work during the observed horizon. Actual external thermal-water return, not a duplicated opening/closing store or assumed equal to the inlet.

- Selected flow: Hot water returned to thermal supplier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_util_h. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_util_h`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Gross dispatched first-released acoustic guitar (`guitar_dispatch`)

Full actual gross instrument dispatch G by original cohort and configuration; independent from net delivery or allocation shares. Dispatch and reinspection create no new production. Keep full opening/closing FG and inherited manufacturing vectors and every actual incremental service load. Failed/unauthorized occurred work retains all parts/water/energy and actual hold/waste disposition. Permission, postwork tests and acceptance govern continued conformity, not deletion of occurred flows. Native Product is the manufactured finished string-instrument family, production mix at plant, Mass/kg. Here it represents only the same complete non-electronic six-string all-solid Adirondack-spruce/Indian-rosewood guitar with the declared mahogany neck, ebony fingerboard/bridge, bone nut/saddle, actual integral hardware/strings and accepted finish/configuration. Not piano, nylon/classical, electric/pickup, laminate, unstrung kit or bare component. If an actual damaged/partial/Waste dispatch cannot meet that complete Product identity, retain its full wet physical leg and original history under a separate compatible identity/type, never suppress it or presume restored conformity.

- Selected flow: Other string musical instruments `9fa0d42e-18d3-4a28-8ffa-f382932ec5ad`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_fg. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fg`
- Sources: `yamaha-qc`; `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Supplied steel hex key (`hex_key_out`)

Actual gross outward whole accessory, paired to its supplied incoming article without a second purchase, second product Q or disposal credit.

- Selected flow: Supplied steel hex key
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_fg. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fg`
- Sources: `yamaha-fg9-r`

###### Supplied printed guitar document (`document_out`)

Actual gross outward whole accessory, paired to its supplied incoming article without a second purchase, second product Q or disposal credit.

- Selected flow: Supplied printed guitar document
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_fg. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fg`
- Sources: `yamaha-fg9-r`

##### Waste flows

###### Discarded complete or damaged acoustic guitar (`guitar_discard`)

Real discarded whole/damaged instrument outlet, actual wet state and permitted/failed work history retained. Do not presume broken wood or a failed joint can be restored. Keep full opening/closing FG and inherited manufacturing vectors and every actual incremental service load. Failed/unauthorized occurred work retains all parts/water/energy and actual hold/waste disposition. Permission, postwork tests and acceptance govern continued conformity, not deletion of occurred flows.

- Selected flow: Discarded complete or damaged acoustic guitar
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_fg. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fg`
- Sources: `yamaha-qc`; `yamaha-craftsmanship`; `ilcd-attributional-2010`

##### Elementary flows

###### Oxygen to air (`h_oxygen_out`)

Original-release-cohort storage, handling, dispatch and any actual post-release work during the observed horizon. Actual unconsumed molecular oxygen, CAS 7782-44-7, Elementary emission to air, unspecified. Record actual outlet context; other media need their own matching identity.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_util_h. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_util_h`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Dinitrogen to air (`h_nitrogen_out`)

Original-release-cohort storage, handling, dispatch and any actual post-release work during the observed horizon. Actual molecular N2, CAS 7727-37-9, Elementary emission to air, unspecified; not an air aggregate or NOx/N2O.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_util_h. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_util_h`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Argon to air (`h_argon_out`)

Original-release-cohort storage, handling, dispatch and any actual post-release work during the observed horizon. Real argon outlet; separately constrain actual mass without adding an aggregate exhaust-air mass. Native Elementary is ordinary argon CAS 7440-37-1, Mass/kg, air unspecified. Not long-term, indoor/high-stack-specific, water/soil, radioactive or isotope-labelled identity. Record unchanged carrier throughput separately from newly generated emissions; no default composition or extra supplier demand.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_util_h. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_util_h`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Passed-through ambient carbon dioxide to air (`h_ambient_co2_out`)

Original-release-cohort storage, handling, dispatch and any actual post-release work during the observed horizon. Actual separately traced incoming ambient CO2 returned to air; exclude this pool from the newly generated fossil/biogenic CO2 cards.

- Selected flow: Passed-through ambient carbon dioxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_util_h. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_util_h`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Water vapour released to air (`h_water_vapor`)

Original-release-cohort storage, handling, dispatch and any actual post-release work during the observed horizon. Actual H2O gas, CAS 7732-18-5, Elementary air emission, unspecified; separate evaporation/desorption, carrier/formulation water and independently evidenced reaction water subaccounts. Broad water aliases do not turn this gas exchange into liquid, ice or isotopic water. Ordinary storage/handling desorption counts.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_util_h. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_util_h`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Biogenic carbon dioxide to air (`h_biogenic_co2`)

Original-release-cohort storage, handling, dispatch and any actual post-release work during the observed horizon. Conditional independently evidenced newly generated biogenic CO2, CAS 124-38-9; native Elementary emission to air, unspecified. Stored wood carbon and normal moisture loss are not CO2 emissions; no default oxidation or upstream forestry uptake is invented.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_util_h. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_util_h`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

###### Fossil carbon dioxide to air (`h_fossil_co2`)

Original-release-cohort storage, handling, dispatch and any actual post-release work during the observed horizon. Conditional actual newly generated fossil CO2, CAS 124-38-9; native Elementary air emission, unspecified. Keep fuel/resin oxidation separate from ambient pass-through and biogenic carbon; a fossil-containing coating remaining on the guitar is not emitted carbon dioxide.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_util_h. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_util_h`
- Sources: `yamaha-craftsmanship`; `yamaha-fg9-r`

### Process: Actual article six-leg custody and one load account (`packaging`)

#### Inputs

##### Product flows

###### Corrugated guitar shipping carton (`carton_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. One actual whole corrugated carton; declare the actual fibre fractions instead of assuming a universal composition. This card is only New external purchase P for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, for this paid standalone or bundled receipt, irrespective of a separate invoice; first non-purchased ingress is recorded only as I. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit.

- Selected flow: Corrugated guitar shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### Corrugated guitar shipping carton (`carton_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. One actual whole corrugated carton; declare the actual fibre fractions instead of assuming a universal composition. This card is only first non-purchased external ingress I for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, even for first non-purchased external ingress without another invoice. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit.

- Selected flow: Corrugated guitar shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### Corrugated guitar shipping carton (`carton_er`)

One actual whole corrugated carton; declare the actual fibre fractions instead of assuming a universal composition. This card is only External return received ER for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, even for supplier-included ingress without another invoice. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit.

- Selected flow: Corrugated guitar shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### Corrugated guitar shipping carton (`carton_charge`)

One actual whole corrugated carton; declare the actual fibre fractions instead of assuming a universal composition. Non-additive burden/service account only, not another physical purchase/receipt or stock mass. Record one actual upstream owner, reuse custody and fulfilled packaging service by original Q_H and observed H. Keep performed original-cohort service even for held FG; only unused/unassigned charge carries forward. Supplier-included I still has a declared upstream owner; no default zero-cost/zero-burden or automatic reuse credit.

- Selected flow: Corrugated guitar shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### LDPE protective wrapping film (`film_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. One actual non-self-adhesive non-cellular unsupported unlaminated LDPE foil, native Product; not PET, PP, reinforced laminate, adhesive tape or a rigid bag article. This card is only New external purchase P for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, for this paid standalone or bundled receipt, irrespective of a separate invoice; first non-purchased ingress is recorded only as I. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### LDPE protective wrapping film (`film_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. One actual non-self-adhesive non-cellular unsupported unlaminated LDPE foil, native Product; not PET, PP, reinforced laminate, adhesive tape or a rigid bag article. This card is only first non-purchased external ingress I for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, even for first non-purchased external ingress without another invoice. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### LDPE protective wrapping film (`film_er`)

One actual non-self-adhesive non-cellular unsupported unlaminated LDPE foil, native Product; not PET, PP, reinforced laminate, adhesive tape or a rigid bag article. This card is only External return received ER for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, even for supplier-included ingress without another invoice. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### LDPE protective wrapping film (`film_charge`)

One actual non-self-adhesive non-cellular unsupported unlaminated LDPE foil, native Product; not PET, PP, reinforced laminate, adhesive tape or a rigid bag article. Non-additive burden/service account only, not another physical purchase/receipt or stock mass. Record one actual upstream owner, reuse custody and fulfilled packaging service by original Q_H and observed H. Keep performed original-cohort service even for held FG; only unused/unassigned charge carries forward. Supplier-included I still has a declared upstream owner; no default zero-cost/zero-burden or automatic reuse credit.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### Flexible polyurethane protective insert (`foam_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. One actual supplied flexible polyurethane cushioning insert; real density, wet mass and supplied form measured, no foam recipe inferred. This card is only New external purchase P for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, for this paid standalone or bundled receipt, irrespective of a separate invoice; first non-purchased ingress is recorded only as I. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit. The complete native Polyfoam Product explicitly includes flexible polyurethane foam and cushioning/padding, production mix at plant, Mass/kg. Apply only to this actual flexible PU foam insert with its supplied form verified; not PE/PS foam, a rigid composite case, resin precursor or an inferred density. Native examples do not impose a foam recipe, blowing gas or additional onsite foaming. Whole supplied foam and its ingredients remain one purchase.

- Selected flow: Polyfoam `fc100bf7-8ec9-4f3b-b18f-493f1bff70ad`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### Flexible polyurethane protective insert (`foam_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. One actual supplied flexible polyurethane cushioning insert; real density, wet mass and supplied form measured, no foam recipe inferred. This card is only first non-purchased external ingress I for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, even for first non-purchased external ingress without another invoice. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit. The complete native Polyfoam Product explicitly includes flexible polyurethane foam and cushioning/padding, production mix at plant, Mass/kg. Apply only to this actual flexible PU foam insert with its supplied form verified; not PE/PS foam, a rigid composite case, resin precursor or an inferred density. Native examples do not impose a foam recipe, blowing gas or additional onsite foaming. Whole supplied foam and its ingredients remain one purchase.

- Selected flow: Polyfoam `fc100bf7-8ec9-4f3b-b18f-493f1bff70ad`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### Flexible polyurethane protective insert (`foam_er`)

One actual supplied flexible polyurethane cushioning insert; real density, wet mass and supplied form measured, no foam recipe inferred. This card is only External return received ER for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, even for supplier-included ingress without another invoice. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit. The complete native Polyfoam Product explicitly includes flexible polyurethane foam and cushioning/padding, production mix at plant, Mass/kg. Apply only to this actual flexible PU foam insert with its supplied form verified; not PE/PS foam, a rigid composite case, resin precursor or an inferred density. Native examples do not impose a foam recipe, blowing gas or additional onsite foaming. Whole supplied foam and its ingredients remain one purchase.

- Selected flow: Polyfoam `fc100bf7-8ec9-4f3b-b18f-493f1bff70ad`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### Flexible polyurethane protective insert (`foam_charge`)

One actual supplied flexible polyurethane cushioning insert; real density, wet mass and supplied form measured, no foam recipe inferred. Non-additive burden/service account only, not another physical purchase/receipt or stock mass. Record one actual upstream owner, reuse custody and fulfilled packaging service by original Q_H and observed H. Keep performed original-cohort service even for held FG; only unused/unassigned charge carries forward. Supplier-included I still has a declared upstream owner; no default zero-cost/zero-burden or automatic reuse credit. The complete native Polyfoam Product explicitly includes flexible polyurethane foam and cushioning/padding, production mix at plant, Mass/kg. Apply only to this actual flexible PU foam insert with its supplied form verified; not PE/PS foam, a rigid composite case, resin precursor or an inferred density. Native examples do not impose a foam recipe, blowing gas or additional onsite foaming. Whole supplied foam and its ingredients remain one purchase.

- Selected flow: Polyfoam `fc100bf7-8ec9-4f3b-b18f-493f1bff70ad`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### Kraft-paper protective wrap (`paper_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. One actual kraft paper wrapping sheet; not kraft pulp, paper bag, recycled supercalendered paper or printed instructions. This card is only New external purchase P for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, for this paid standalone or bundled receipt, irrespective of a separate invoice; first non-purchased ingress is recorded only as I. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit.

- Selected flow: Kraft-paper protective wrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### Kraft-paper protective wrap (`paper_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. One actual kraft paper wrapping sheet; not kraft pulp, paper bag, recycled supercalendered paper or printed instructions. This card is only first non-purchased external ingress I for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, even for first non-purchased external ingress without another invoice. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit.

- Selected flow: Kraft-paper protective wrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### Kraft-paper protective wrap (`paper_er`)

One actual kraft paper wrapping sheet; not kraft pulp, paper bag, recycled supercalendered paper or printed instructions. This card is only External return received ER for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, even for supplier-included ingress without another invoice. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit.

- Selected flow: Kraft-paper protective wrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### Kraft-paper protective wrap (`paper_charge`)

One actual kraft paper wrapping sheet; not kraft pulp, paper bag, recycled supercalendered paper or printed instructions. Non-additive burden/service account only, not another physical purchase/receipt or stock mass. Record one actual upstream owner, reuse custody and fulfilled packaging service by original Q_H and observed H. Keep performed original-cohort service even for held FG; only unused/unassigned charge carries forward. Supplier-included I still has a declared upstream owner; no default zero-cost/zero-burden or automatic reuse credit.

- Selected flow: Kraft-paper protective wrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### Complete reusable solid-wood pallet (`pallet_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. One actual complete supplied pallet, with species/treatment and incorporated nails/moisture declared; repair plank/water are not the whole pallet. This card is only New external purchase P for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, for this paid standalone or bundled receipt, irrespective of a separate invoice; first non-purchased ingress is recorded only as I. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit.

- Selected flow: Complete reusable solid-wood pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### Complete reusable solid-wood pallet (`pallet_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. One actual complete supplied pallet, with species/treatment and incorporated nails/moisture declared; repair plank/water are not the whole pallet. This card is only first non-purchased external ingress I for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, even for first non-purchased external ingress without another invoice. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit.

- Selected flow: Complete reusable solid-wood pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### Complete reusable solid-wood pallet (`pallet_er`)

One actual complete supplied pallet, with species/treatment and incorporated nails/moisture declared; repair plank/water are not the whole pallet. This card is only External return received ER for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, even for supplier-included ingress without another invoice. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit.

- Selected flow: Complete reusable solid-wood pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### Complete reusable solid-wood pallet (`pallet_charge`)

One actual complete supplied pallet, with species/treatment and incorporated nails/moisture declared; repair plank/water are not the whole pallet. Non-additive burden/service account only, not another physical purchase/receipt or stock mass. Record one actual upstream owner, reuse custody and fulfilled packaging service by original Q_H and observed H. Keep performed original-cohort service even for held FG; only unused/unassigned charge carries forward. Supplier-included I still has a declared upstream owner; no default zero-cost/zero-burden or automatic reuse credit.

- Selected flow: Complete reusable solid-wood pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### Whole HDPE adhesive pail (`pail_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. One actual complete HDPE pail with included lid/handle once. Adhesive inside is separate disjoint contents; do not add the same polymer/lid again. This card is only New external purchase P for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, for this paid standalone or bundled receipt, irrespective of a separate invoice; first non-purchased ingress is recorded only as I. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit.

- Selected flow: Whole HDPE adhesive pail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### Whole HDPE adhesive pail (`pail_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. One actual complete HDPE pail with included lid/handle once. Adhesive inside is separate disjoint contents; do not add the same polymer/lid again. This card is only first non-purchased external ingress I for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, even for first non-purchased external ingress without another invoice. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit.

- Selected flow: Whole HDPE adhesive pail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### Whole HDPE adhesive pail (`pail_er`)

One actual complete HDPE pail with included lid/handle once. Adhesive inside is separate disjoint contents; do not add the same polymer/lid again. This card is only External return received ER for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, even for supplier-included ingress without another invoice. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit.

- Selected flow: Whole HDPE adhesive pail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### Whole HDPE adhesive pail (`pail_charge`)

One actual complete HDPE pail with included lid/handle once. Adhesive inside is separate disjoint contents; do not add the same polymer/lid again. Non-additive burden/service account only, not another physical purchase/receipt or stock mass. Record one actual upstream owner, reuse custody and fulfilled packaging service by original Q_H and observed H. Keep performed original-cohort service even for held FG; only unused/unassigned charge carries forward. Supplier-included I still has a declared upstream owner; no default zero-cost/zero-burden or automatic reuse credit.

- Selected flow: Whole HDPE adhesive pail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### Whole tinplate coating can (`can_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. One actual complete tinplate steel can with integral closure; not aluminium or HDPE. Coating contents and tare are disjoint. This card is only New external purchase P for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, for this paid standalone or bundled receipt, irrespective of a separate invoice; first non-purchased ingress is recorded only as I. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit.

- Selected flow: Whole tinplate coating can
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### Whole tinplate coating can (`can_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. One actual complete tinplate steel can with integral closure; not aluminium or HDPE. Coating contents and tare are disjoint. This card is only first non-purchased external ingress I for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, even for first non-purchased external ingress without another invoice. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit.

- Selected flow: Whole tinplate coating can
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### Whole tinplate coating can (`can_er`)

One actual complete tinplate steel can with integral closure; not aluminium or HDPE. Coating contents and tare are disjoint. This card is only External return received ER for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, even for supplier-included ingress without another invoice. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit.

- Selected flow: Whole tinplate coating can
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### Whole tinplate coating can (`can_charge`)

One actual complete tinplate steel can with integral closure; not aluminium or HDPE. Coating contents and tare are disjoint. Non-additive burden/service account only, not another physical purchase/receipt or stock mass. Record one actual upstream owner, reuse custody and fulfilled packaging service by original Q_H and observed H. Keep performed original-cohort service even for held FG; only unused/unassigned charge carries forward. Supplier-included I still has a declared upstream owner; no default zero-cost/zero-burden or automatic reuse credit.

- Selected flow: Whole tinplate coating can
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### PET transport strapping (`strap_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. One actual PET strap; not LDPE film, PP, steel strapping or an entire carton. Real fasteners are included only when supplied in this whole article; separately bought clips need individual rows. This card is only New external purchase P for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, for this paid standalone or bundled receipt, irrespective of a separate invoice; first non-purchased ingress is recorded only as I. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit.

- Selected flow: PET transport strapping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### PET transport strapping (`strap_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. One actual PET strap; not LDPE film, PP, steel strapping or an entire carton. Real fasteners are included only when supplied in this whole article; separately bought clips need individual rows. This card is only first non-purchased external ingress I for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, even for first non-purchased external ingress without another invoice. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit.

- Selected flow: PET transport strapping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### PET transport strapping (`strap_er`)

One actual PET strap; not LDPE film, PP, steel strapping or an entire carton. Real fasteners are included only when supplied in this whole article; separately bought clips need individual rows. This card is only External return received ER for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, even for supplier-included ingress without another invoice. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit.

- Selected flow: PET transport strapping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### PET transport strapping (`strap_charge`)

One actual PET strap; not LDPE film, PP, steel strapping or an entire carton. Real fasteners are included only when supplied in this whole article; separately bought clips need individual rows. Non-additive burden/service account only, not another physical purchase/receipt or stock mass. Record one actual upstream owner, reuse custody and fulfilled packaging service by original Q_H and observed H. Keep performed original-cohort service even for held FG; only unused/unassigned charge carries forward. Supplier-included I still has a declared upstream owner; no default zero-cost/zero-burden or automatic reuse credit.

- Selected flow: PET transport strapping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### Complete rigid guitar transport case (`case_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. One actual whole independently supplied rigid guitar case including lining/hardware once. FG9 R is a positive supply example, not its composition recipe. Keep outside guitar net mass; no second instrument Q and no replacement of the whole guitar with a case. This card is only New external purchase P for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, for this paid standalone or bundled receipt, irrespective of a separate invoice; first non-purchased ingress is recorded only as I. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit.

- Selected flow: Complete rigid guitar transport case
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### Complete rigid guitar transport case (`case_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. One actual whole independently supplied rigid guitar case including lining/hardware once. FG9 R is a positive supply example, not its composition recipe. Keep outside guitar net mass; no second instrument Q and no replacement of the whole guitar with a case. This card is only first non-purchased external ingress I for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, even for first non-purchased external ingress without another invoice. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit.

- Selected flow: Complete rigid guitar transport case
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### Complete rigid guitar transport case (`case_er`)

One actual whole independently supplied rigid guitar case including lining/hardware once. FG9 R is a positive supply example, not its composition recipe. Keep outside guitar net mass; no second instrument Q and no replacement of the whole guitar with a case. This card is only External return received ER for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, even for supplier-included ingress without another invoice. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit.

- Selected flow: Complete rigid guitar transport case
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### Complete rigid guitar transport case (`case_charge`)

One actual whole independently supplied rigid guitar case including lining/hardware once. FG9 R is a positive supply example, not its composition recipe. Keep outside guitar net mass; no second instrument Q and no replacement of the whole guitar with a case. Non-additive burden/service account only, not another physical purchase/receipt or stock mass. Record one actual upstream owner, reuse custody and fulfilled packaging service by original Q_H and observed H. Keep performed original-cohort service even for held FG; only unused/unassigned charge carries forward. Supplier-included I still has a declared upstream owner; no default zero-cost/zero-burden or automatic reuse credit.

- Selected flow: Complete rigid guitar transport case
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### Solid-wood pallet repair plank (`pallet_repair_plank`)

Actual separately introduced new/used plank, species and wet state verified; not the whole pallet or a second receipt of wood already included in P/I. Preserve actual influx/outflux and full wet closing stocks together; X removes only an identical term elsewhere, not a retained new material. Actual unauthorized/failed repair is fully recorded with actual hold/waste and no assumed restored conformity.

- Selected flow: Solid-wood pallet repair plank
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack_repair. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_repair`
- Sources: `ilcd-attributional-2010`

###### Steel pallet repair nail (`pallet_repair_nail`)

Actual separately supplied new/used steel nail, not integral nails already included in whole pallet P/I. Preserve actual influx/outflux and full wet closing stocks together; X removes only an identical term elsewhere, not a retained new material. Actual unauthorized/failed repair is fully recorded with actual hold/waste and no assumed restored conformity.

- Selected flow: Steel pallet repair nail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack_repair. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_repair`
- Sources: `ilcd-attributional-2010`

###### Treatment service for discarded corrugated guitar shipping carton (`carton_w_treatment`)

Conditional actual treatment of the uniquely identified discarded corrugated guitar shipping carton outlet. One real receiver/provider boundary, original unit and independently evidenced actual-state conversion; kg here is actual wet feed demand only when the provider supports it. A mixed outlet has one treatment service; pool W is not another provider purchase. If treatment occurs onsite, collect every actual material, energy, water and species instead of adding the whole service again. Sale/export/failure never automatically removes incurred manufacturing or treatment burden. When the associated article W is only an origin partition of a mixed outlet, this separate treatment service is not an additional activity; the sole actual mixed-outlet service owns treatment once. A real separately treated outlet retains its own activity.

- Selected flow: Treatment service for discarded corrugated guitar shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_treatment_packaging. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_packaging`
- Sources: `ilcd-attributional-2010`

###### Treatment service for discarded ldpe protective wrapping film (`film_w_treatment`)

Conditional actual treatment of the uniquely identified discarded ldpe protective wrapping film outlet. One real receiver/provider boundary, original unit and independently evidenced actual-state conversion; kg here is actual wet feed demand only when the provider supports it. A mixed outlet has one treatment service; pool W is not another provider purchase. If treatment occurs onsite, collect every actual material, energy, water and species instead of adding the whole service again. Sale/export/failure never automatically removes incurred manufacturing or treatment burden. When the associated article W is only an origin partition of a mixed outlet, this separate treatment service is not an additional activity; the sole actual mixed-outlet service owns treatment once. A real separately treated outlet retains its own activity.

- Selected flow: Treatment service for discarded ldpe protective wrapping film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_treatment_packaging. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_packaging`
- Sources: `ilcd-attributional-2010`

###### Treatment service for discarded flexible polyurethane protective insert (`foam_w_treatment`)

Conditional actual treatment of the uniquely identified discarded flexible polyurethane protective insert outlet. One real receiver/provider boundary, original unit and independently evidenced actual-state conversion; kg here is actual wet feed demand only when the provider supports it. A mixed outlet has one treatment service; pool W is not another provider purchase. If treatment occurs onsite, collect every actual material, energy, water and species instead of adding the whole service again. Sale/export/failure never automatically removes incurred manufacturing or treatment burden. When the associated article W is only an origin partition of a mixed outlet, this separate treatment service is not an additional activity; the sole actual mixed-outlet service owns treatment once. A real separately treated outlet retains its own activity.

- Selected flow: Treatment service for discarded flexible polyurethane protective insert
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_treatment_packaging. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_packaging`
- Sources: `ilcd-attributional-2010`

###### Treatment service for discarded kraft-paper protective wrap (`paper_w_treatment`)

Conditional actual treatment of the uniquely identified discarded kraft-paper protective wrap outlet. One real receiver/provider boundary, original unit and independently evidenced actual-state conversion; kg here is actual wet feed demand only when the provider supports it. A mixed outlet has one treatment service; pool W is not another provider purchase. If treatment occurs onsite, collect every actual material, energy, water and species instead of adding the whole service again. Sale/export/failure never automatically removes incurred manufacturing or treatment burden. When the associated article W is only an origin partition of a mixed outlet, this separate treatment service is not an additional activity; the sole actual mixed-outlet service owns treatment once. A real separately treated outlet retains its own activity.

- Selected flow: Treatment service for discarded kraft-paper protective wrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_treatment_packaging. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_packaging`
- Sources: `ilcd-attributional-2010`

###### Treatment service for discarded complete reusable solid-wood pallet (`pallet_w_treatment`)

Conditional actual treatment of the uniquely identified discarded complete reusable solid-wood pallet outlet. One real receiver/provider boundary, original unit and independently evidenced actual-state conversion; kg here is actual wet feed demand only when the provider supports it. A mixed outlet has one treatment service; pool W is not another provider purchase. If treatment occurs onsite, collect every actual material, energy, water and species instead of adding the whole service again. Sale/export/failure never automatically removes incurred manufacturing or treatment burden. When the associated article W is only an origin partition of a mixed outlet, this separate treatment service is not an additional activity; the sole actual mixed-outlet service owns treatment once. A real separately treated outlet retains its own activity.

- Selected flow: Treatment service for discarded complete reusable solid-wood pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_treatment_packaging. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_packaging`
- Sources: `ilcd-attributional-2010`

###### Treatment service for discarded whole hdpe adhesive pail (`pail_w_treatment`)

Conditional actual treatment of the uniquely identified discarded whole hdpe adhesive pail outlet. One real receiver/provider boundary, original unit and independently evidenced actual-state conversion; kg here is actual wet feed demand only when the provider supports it. A mixed outlet has one treatment service; pool W is not another provider purchase. If treatment occurs onsite, collect every actual material, energy, water and species instead of adding the whole service again. Sale/export/failure never automatically removes incurred manufacturing or treatment burden. When the associated article W is only an origin partition of a mixed outlet, this separate treatment service is not an additional activity; the sole actual mixed-outlet service owns treatment once. A real separately treated outlet retains its own activity.

- Selected flow: Treatment service for discarded whole hdpe adhesive pail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_treatment_packaging. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_packaging`
- Sources: `ilcd-attributional-2010`

###### Treatment service for discarded whole tinplate coating can (`can_w_treatment`)

Conditional actual treatment of the uniquely identified discarded whole tinplate coating can outlet. One real receiver/provider boundary, original unit and independently evidenced actual-state conversion; kg here is actual wet feed demand only when the provider supports it. A mixed outlet has one treatment service; pool W is not another provider purchase. If treatment occurs onsite, collect every actual material, energy, water and species instead of adding the whole service again. Sale/export/failure never automatically removes incurred manufacturing or treatment burden. When the associated article W is only an origin partition of a mixed outlet, this separate treatment service is not an additional activity; the sole actual mixed-outlet service owns treatment once. A real separately treated outlet retains its own activity.

- Selected flow: Treatment service for discarded whole tinplate coating can
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_treatment_packaging. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_packaging`
- Sources: `ilcd-attributional-2010`

###### Treatment service for discarded pet transport strapping (`strap_w_treatment`)

Conditional actual treatment of the uniquely identified discarded pet transport strapping outlet. One real receiver/provider boundary, original unit and independently evidenced actual-state conversion; kg here is actual wet feed demand only when the provider supports it. A mixed outlet has one treatment service; pool W is not another provider purchase. If treatment occurs onsite, collect every actual material, energy, water and species instead of adding the whole service again. Sale/export/failure never automatically removes incurred manufacturing or treatment burden. When the associated article W is only an origin partition of a mixed outlet, this separate treatment service is not an additional activity; the sole actual mixed-outlet service owns treatment once. A real separately treated outlet retains its own activity.

- Selected flow: Treatment service for discarded pet transport strapping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_treatment_packaging. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_packaging`
- Sources: `ilcd-attributional-2010`

###### Treatment service for discarded complete rigid guitar transport case (`case_w_treatment`)

Conditional actual treatment of the uniquely identified discarded complete rigid guitar transport case outlet. One real receiver/provider boundary, original unit and independently evidenced actual-state conversion; kg here is actual wet feed demand only when the provider supports it. A mixed outlet has one treatment service; pool W is not another provider purchase. If treatment occurs onsite, collect every actual material, energy, water and species instead of adding the whole service again. Sale/export/failure never automatically removes incurred manufacturing or treatment burden. When the associated article W is only an origin partition of a mixed outlet, this separate treatment service is not an additional activity; the sole actual mixed-outlet service owns treatment once. A real separately treated outlet retains its own activity.

- Selected flow: Treatment service for discarded complete rigid guitar transport case
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_treatment_packaging. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_packaging`
- Sources: `ilcd-attributional-2010`

###### Treatment service for mixed discarded guitar packaging (`mixed_pack_waste_treatment`)

Conditional actual treatment of the uniquely identified mixed discarded guitar packaging outlet. One real receiver/provider boundary, original unit and independently evidenced actual-state conversion; kg here is actual wet feed demand only when the provider supports it. A mixed outlet has one treatment service; pool W is not another provider purchase. If treatment occurs onsite, collect every actual material, energy, water and species instead of adding the whole service again. Sale/export/failure never automatically removes incurred manufacturing or treatment burden.

- Selected flow: Treatment service for mixed discarded guitar packaging
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_treatment_packaging. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_packaging`
- Sources: `ilcd-attributional-2010`

###### Treatment service for removed pallet wood waste (`pallet_removed_wood_treatment`)

Conditional actual treatment of the uniquely identified removed pallet wood waste outlet. One real receiver/provider boundary, original unit and independently evidenced actual-state conversion; kg here is actual wet feed demand only when the provider supports it. A mixed outlet has one treatment service; pool W is not another provider purchase. If treatment occurs onsite, collect every actual material, energy, water and species instead of adding the whole service again. Sale/export/failure never automatically removes incurred manufacturing or treatment burden.

- Selected flow: Treatment service for removed pallet wood waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_treatment_packaging. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_packaging`
- Sources: `ilcd-attributional-2010`

###### Treatment service for removed pallet steel-nail waste (`pallet_removed_nail_treatment`)

Conditional actual treatment of the uniquely identified removed pallet steel-nail waste outlet. One real receiver/provider boundary, original unit and independently evidenced actual-state conversion; kg here is actual wet feed demand only when the provider supports it. A mixed outlet has one treatment service; pool W is not another provider purchase. If treatment occurs onsite, collect every actual material, energy, water and species instead of adding the whole service again. Sale/export/failure never automatically removes incurred manufacturing or treatment burden.

- Selected flow: Treatment service for removed pallet steel-nail waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_treatment_packaging. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_packaging`
- Sources: `ilcd-attributional-2010`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Corrugated guitar shipping carton (`carton_s`)

One actual whole corrugated carton; declare the actual fibre fractions instead of assuming a universal composition. This card is only Gross shipment outward S for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, even for supplier-included ingress without another invoice. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit.

- Selected flow: Corrugated guitar shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### Corrugated guitar shipping carton (`carton_eo`)

One actual whole corrugated carton; declare the actual fibre fractions instead of assuming a universal composition. This card is only External return sent EO for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, even for supplier-included ingress without another invoice. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit.

- Selected flow: Corrugated guitar shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### LDPE protective wrapping film (`film_s`)

One actual non-self-adhesive non-cellular unsupported unlaminated LDPE foil, native Product; not PET, PP, reinforced laminate, adhesive tape or a rigid bag article. This card is only Gross shipment outward S for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, even for supplier-included ingress without another invoice. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### LDPE protective wrapping film (`film_eo`)

One actual non-self-adhesive non-cellular unsupported unlaminated LDPE foil, native Product; not PET, PP, reinforced laminate, adhesive tape or a rigid bag article. This card is only External return sent EO for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, even for supplier-included ingress without another invoice. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### Flexible polyurethane protective insert (`foam_s`)

One actual supplied flexible polyurethane cushioning insert; real density, wet mass and supplied form measured, no foam recipe inferred. This card is only Gross shipment outward S for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, even for supplier-included ingress without another invoice. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit. The complete native Polyfoam Product explicitly includes flexible polyurethane foam and cushioning/padding, production mix at plant, Mass/kg. Apply only to this actual flexible PU foam insert with its supplied form verified; not PE/PS foam, a rigid composite case, resin precursor or an inferred density. Native examples do not impose a foam recipe, blowing gas or additional onsite foaming. Whole supplied foam and its ingredients remain one purchase.

- Selected flow: Polyfoam `fc100bf7-8ec9-4f3b-b18f-493f1bff70ad`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### Flexible polyurethane protective insert (`foam_eo`)

One actual supplied flexible polyurethane cushioning insert; real density, wet mass and supplied form measured, no foam recipe inferred. This card is only External return sent EO for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, even for supplier-included ingress without another invoice. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit. The complete native Polyfoam Product explicitly includes flexible polyurethane foam and cushioning/padding, production mix at plant, Mass/kg. Apply only to this actual flexible PU foam insert with its supplied form verified; not PE/PS foam, a rigid composite case, resin precursor or an inferred density. Native examples do not impose a foam recipe, blowing gas or additional onsite foaming. Whole supplied foam and its ingredients remain one purchase.

- Selected flow: Polyfoam `fc100bf7-8ec9-4f3b-b18f-493f1bff70ad`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### Kraft-paper protective wrap (`paper_s`)

One actual kraft paper wrapping sheet; not kraft pulp, paper bag, recycled supercalendered paper or printed instructions. This card is only Gross shipment outward S for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, even for supplier-included ingress without another invoice. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit.

- Selected flow: Kraft-paper protective wrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### Kraft-paper protective wrap (`paper_eo`)

One actual kraft paper wrapping sheet; not kraft pulp, paper bag, recycled supercalendered paper or printed instructions. This card is only External return sent EO for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, even for supplier-included ingress without another invoice. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit.

- Selected flow: Kraft-paper protective wrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### Complete reusable solid-wood pallet (`pallet_s`)

One actual complete supplied pallet, with species/treatment and incorporated nails/moisture declared; repair plank/water are not the whole pallet. This card is only Gross shipment outward S for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, even for supplier-included ingress without another invoice. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit.

- Selected flow: Complete reusable solid-wood pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### Complete reusable solid-wood pallet (`pallet_eo`)

One actual complete supplied pallet, with species/treatment and incorporated nails/moisture declared; repair plank/water are not the whole pallet. This card is only External return sent EO for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, even for supplier-included ingress without another invoice. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit.

- Selected flow: Complete reusable solid-wood pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### Whole HDPE adhesive pail (`pail_s`)

One actual complete HDPE pail with included lid/handle once. Adhesive inside is separate disjoint contents; do not add the same polymer/lid again. This card is only Gross shipment outward S for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, even for supplier-included ingress without another invoice. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit.

- Selected flow: Whole HDPE adhesive pail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### Whole HDPE adhesive pail (`pail_eo`)

One actual complete HDPE pail with included lid/handle once. Adhesive inside is separate disjoint contents; do not add the same polymer/lid again. This card is only External return sent EO for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, even for supplier-included ingress without another invoice. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit.

- Selected flow: Whole HDPE adhesive pail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### Whole tinplate coating can (`can_s`)

One actual complete tinplate steel can with integral closure; not aluminium or HDPE. Coating contents and tare are disjoint. This card is only Gross shipment outward S for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, even for supplier-included ingress without another invoice. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit.

- Selected flow: Whole tinplate coating can
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### Whole tinplate coating can (`can_eo`)

One actual complete tinplate steel can with integral closure; not aluminium or HDPE. Coating contents and tare are disjoint. This card is only External return sent EO for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, even for supplier-included ingress without another invoice. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit.

- Selected flow: Whole tinplate coating can
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### PET transport strapping (`strap_s`)

One actual PET strap; not LDPE film, PP, steel strapping or an entire carton. Real fasteners are included only when supplied in this whole article; separately bought clips need individual rows. This card is only Gross shipment outward S for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, even for supplier-included ingress without another invoice. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit.

- Selected flow: PET transport strapping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### PET transport strapping (`strap_eo`)

One actual PET strap; not LDPE film, PP, steel strapping or an entire carton. Real fasteners are included only when supplied in this whole article; separately bought clips need individual rows. This card is only External return sent EO for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, even for supplier-included ingress without another invoice. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit.

- Selected flow: PET transport strapping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### Complete rigid guitar transport case (`case_s`)

One actual whole independently supplied rigid guitar case including lining/hardware once. FG9 R is a positive supply example, not its composition recipe. Keep outside guitar net mass; no second instrument Q and no replacement of the whole guitar with a case. This card is only Gross shipment outward S for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, even for supplier-included ingress without another invoice. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit.

- Selected flow: Complete rigid guitar transport case
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### Complete rigid guitar transport case (`case_eo`)

One actual whole independently supplied rigid guitar case including lining/hardware once. FG9 R is a positive supply example, not its composition recipe. Keep outside guitar net mass; no second instrument Q and no replacement of the whole guitar with a case. This card is only External return sent EO for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, even for supplier-included ingress without another invoice. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit.

- Selected flow: Complete rigid guitar transport case
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

##### Waste flows

###### Discarded Corrugated guitar shipping carton (`carton_w`)

One actual whole corrugated carton; declare the actual fibre fractions instead of assuming a universal composition. This card is only Actual waste outlet W for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, even for supplier-included ingress without another invoice. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit. If this article truly leaves in its own separate Waste outlet, retain the actual standalone row and its one corresponding treatment. If it leaves inside the mixed outlet instead, this W is only an independently measured non-additive origin partition of that SAME actual exit, state and period, with no separate exchange/provider demand. Unknown origin masses stay unknown; never infer several origins from one mixed total. Retained collected waste is included in the full stock/subgate reconciliation.

- Selected flow: Discarded Corrugated guitar shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### Discarded LDPE protective wrapping film (`film_w`)

One actual non-self-adhesive non-cellular unsupported unlaminated LDPE foil, native Product; not PET, PP, reinforced laminate, adhesive tape or a rigid bag article. This card is only Actual waste outlet W for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, even for supplier-included ingress without another invoice. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit. If this article truly leaves in its own separate Waste outlet, retain the actual standalone row and its one corresponding treatment. If it leaves inside the mixed outlet instead, this W is only an independently measured non-additive origin partition of that SAME actual exit, state and period, with no separate exchange/provider demand. Unknown origin masses stay unknown; never infer several origins from one mixed total. Retained collected waste is included in the full stock/subgate reconciliation.

- Selected flow: Discarded LDPE protective wrapping film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### Discarded Flexible polyurethane protective insert (`foam_w`)

One actual supplied flexible polyurethane cushioning insert; real density, wet mass and supplied form measured, no foam recipe inferred. This card is only Actual waste outlet W for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, even for supplier-included ingress without another invoice. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit. If this article truly leaves in its own separate Waste outlet, retain the actual standalone row and its one corresponding treatment. If it leaves inside the mixed outlet instead, this W is only an independently measured non-additive origin partition of that SAME actual exit, state and period, with no separate exchange/provider demand. Unknown origin masses stay unknown; never infer several origins from one mixed total. Retained collected waste is included in the full stock/subgate reconciliation.

- Selected flow: Discarded Flexible polyurethane protective insert
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### Discarded Kraft-paper protective wrap (`paper_w`)

One actual kraft paper wrapping sheet; not kraft pulp, paper bag, recycled supercalendered paper or printed instructions. This card is only Actual waste outlet W for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, even for supplier-included ingress without another invoice. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit. If this article truly leaves in its own separate Waste outlet, retain the actual standalone row and its one corresponding treatment. If it leaves inside the mixed outlet instead, this W is only an independently measured non-additive origin partition of that SAME actual exit, state and period, with no separate exchange/provider demand. Unknown origin masses stay unknown; never infer several origins from one mixed total. Retained collected waste is included in the full stock/subgate reconciliation.

- Selected flow: Discarded Kraft-paper protective wrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### Discarded Complete reusable solid-wood pallet (`pallet_w`)

One actual complete supplied pallet, with species/treatment and incorporated nails/moisture declared; repair plank/water are not the whole pallet. This card is only Actual waste outlet W for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, even for supplier-included ingress without another invoice. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit. If this article truly leaves in its own separate Waste outlet, retain the actual standalone row and its one corresponding treatment. If it leaves inside the mixed outlet instead, this W is only an independently measured non-additive origin partition of that SAME actual exit, state and period, with no separate exchange/provider demand. Unknown origin masses stay unknown; never infer several origins from one mixed total. Retained collected waste is included in the full stock/subgate reconciliation.

- Selected flow: Discarded Complete reusable solid-wood pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### Discarded Whole HDPE adhesive pail (`pail_w`)

One actual complete HDPE pail with included lid/handle once. Adhesive inside is separate disjoint contents; do not add the same polymer/lid again. This card is only Actual waste outlet W for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, even for supplier-included ingress without another invoice. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit. If this article truly leaves in its own separate Waste outlet, retain the actual standalone row and its one corresponding treatment. If it leaves inside the mixed outlet instead, this W is only an independently measured non-additive origin partition of that SAME actual exit, state and period, with no separate exchange/provider demand. Unknown origin masses stay unknown; never infer several origins from one mixed total. Retained collected waste is included in the full stock/subgate reconciliation.

- Selected flow: Discarded Whole HDPE adhesive pail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### Discarded Whole tinplate coating can (`can_w`)

One actual complete tinplate steel can with integral closure; not aluminium or HDPE. Coating contents and tare are disjoint. This card is only Actual waste outlet W for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, even for supplier-included ingress without another invoice. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit. If this article truly leaves in its own separate Waste outlet, retain the actual standalone row and its one corresponding treatment. If it leaves inside the mixed outlet instead, this W is only an independently measured non-additive origin partition of that SAME actual exit, state and period, with no separate exchange/provider demand. Unknown origin masses stay unknown; never infer several origins from one mixed total. Retained collected waste is included in the full stock/subgate reconciliation.

- Selected flow: Discarded Whole tinplate coating can
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### Discarded PET transport strapping (`strap_w`)

One actual PET strap; not LDPE film, PP, steel strapping or an entire carton. Real fasteners are included only when supplied in this whole article; separately bought clips need individual rows. This card is only Actual waste outlet W for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, even for supplier-included ingress without another invoice. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit. If this article truly leaves in its own separate Waste outlet, retain the actual standalone row and its one corresponding treatment. If it leaves inside the mixed outlet instead, this W is only an independently measured non-additive origin partition of that SAME actual exit, state and period, with no separate exchange/provider demand. Unknown origin masses stay unknown; never infer several origins from one mixed total. Retained collected waste is included in the full stock/subgate reconciliation.

- Selected flow: Discarded PET transport strapping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### Discarded Complete rigid guitar transport case (`case_w`)

One actual whole independently supplied rigid guitar case including lining/hardware once. FG9 R is a positive supply example, not its composition recipe. Keep outside guitar net mass; no second instrument Q and no replacement of the whole guitar with a case. This card is only Actual waste outlet W for this article. Full actual wet gross leg V is retained without stock correction or burden/economic-share scaling, even for supplier-included ingress without another invoice. P and I are disjoint; X deduplicates only another incoming/outgoing term, never water/material still retained in closing stock. W is a separate outlet only when real; one mixed outlet uses the single mixed-Waste card and disjoint measured source-pool W. The independent charge card owns actual upstream/service load once; this gross leg creates no purchase/provider load/credit. If this article truly leaves in its own separate Waste outlet, retain the actual standalone row and its one corresponding treatment. If it leaves inside the mixed outlet instead, this W is only an independently measured non-additive origin partition of that SAME actual exit, state and period, with no separate exchange/provider demand. Unknown origin masses stay unknown; never infer several origins from one mixed total. Retained collected waste is included in the full stock/subgate reconciliation.

- Selected flow: Discarded Complete rigid guitar transport case
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `yamaha-qc`; `yamaha-fg9-r`; `ilcd-attributional-2010`

###### Mixed discarded guitar packaging (`mixed_pack_waste`)

Conditional genuinely one external mixed packaging waste outlet only. One whole wet Waste exchange; independently measured disjoint pool W including article, attached residues and water must sum to its total. Do not add whole outlet plus separately listed pool-W cards; one treatment provider. Native Waste is mixed packaging generated at plant during packaging within the assembly/testing gate, including actual offcuts/damaged packages. It cannot represent general guitar-manufacturing dust, coating waste or a different outlet. This is the one measured external whole-wet mixed total with one treatment owner; measured origin-W partitions of the SAME exit/state/period are non-additive details. Include real opening/closing collected waste and any state/material/water changes in the physical subgate; do not equate precollection discards with this exit by assumption.

- Selected flow: Packaging waste, mixed `cf748dc8-a0d3-411f-aab6-168e7ee54a6e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-attributional-2010`

###### Removed pallet wood waste (`pallet_removed_wood`)

Actual removed worn wood, with species, wet mass and real waste or reuse disposition; reusable outward material needs its own Product row. Preserve actual influx/outflux and full wet closing stocks together; X removes only an identical term elsewhere, not a retained new material. Actual unauthorized/failed repair is fully recorded with actual hold/waste and no assumed restored conformity.

- Selected flow: Removed pallet wood waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack_repair. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_repair`
- Sources: `ilcd-attributional-2010`

###### Removed pallet steel-nail waste (`pallet_removed_nail`)

Actual removed worn steel nail, real separate outlet or disjoint source pool in one mixed outlet. Preserve actual influx/outflux and full wet closing stocks together; X removes only an identical term elsewhere, not a retained new material. Actual unauthorized/failed repair is fully recorded with actual hold/waste and no assumed restored conformity.

- Selected flow: Removed pallet steel-nail waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_pack_repair. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_repair`
- Sources: `ilcd-attributional-2010`

##### Elementary flows

### Process: Actual machines tools parts fluids and service (`assets`)

#### Inputs

##### Product flows

###### Wood-cutting saw (`saw_new`)

One actual whole wood-cutting saw; this card records actual new receipt only. Keep full physical mass, installed fluids/components, opening/closing custody and event identity. Included components are not extra purchases. New/used repair parts and water are retained as real influx even when still installed at closing; no fixed lifetime, one-machine-per-kg or default replacement.

- Selected flow: Wood-cutting saw
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Wood-cutting saw (`saw_used`)

One actual whole wood-cutting saw; this card records actual used receipt only. Keep full physical mass, installed fluids/components, opening/closing custody and event identity. Included components are not extra purchases. New/used repair parts and water are retained as real influx even when still installed at closing; no fixed lifetime, one-machine-per-kg or default replacement.

- Selected flow: Wood-cutting saw
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Wood-cutting saw (`saw_service`)

Non-additive fulfilled-service account for this actual wood-cutting saw. Use actual operation, idle/start-stop/cleanup/failure, utilization/capacity and demonstrated exchange-specific driver, with one embodied/maintenance provider vector. Physical asset kg is not service demand. Retain performed original-cohort service despite held FG; carry only unused/unassigned service. Actual failed/unauthorized repairs retain all occurred material and energy.

- Selected flow: Wood-cutting saw
- Flow property / unit: Time / h
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Wood-thicknessing planer (`planer_new`)

One actual whole wood-thicknessing planer; this card records actual new receipt only. Keep full physical mass, installed fluids/components, opening/closing custody and event identity. Included components are not extra purchases. New/used repair parts and water are retained as real influx even when still installed at closing; no fixed lifetime, one-machine-per-kg or default replacement.

- Selected flow: Wood-thicknessing planer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Wood-thicknessing planer (`planer_used`)

One actual whole wood-thicknessing planer; this card records actual used receipt only. Keep full physical mass, installed fluids/components, opening/closing custody and event identity. Included components are not extra purchases. New/used repair parts and water are retained as real influx even when still installed at closing; no fixed lifetime, one-machine-per-kg or default replacement.

- Selected flow: Wood-thicknessing planer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Wood-thicknessing planer (`planer_service`)

Non-additive fulfilled-service account for this actual wood-thicknessing planer. Use actual operation, idle/start-stop/cleanup/failure, utilization/capacity and demonstrated exchange-specific driver, with one embodied/maintenance provider vector. Physical asset kg is not service demand. Retain performed original-cohort service despite held FG; carry only unused/unassigned service. Actual failed/unauthorized repairs retain all occurred material and energy.

- Selected flow: Wood-thicknessing planer
- Flow property / unit: Time / h
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Guitar woodworking router (`router_new`)

One actual whole guitar woodworking router; this card records actual new receipt only. Keep full physical mass, installed fluids/components, opening/closing custody and event identity. Included components are not extra purchases. New/used repair parts and water are retained as real influx even when still installed at closing; no fixed lifetime, one-machine-per-kg or default replacement.

- Selected flow: Guitar woodworking router
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Guitar woodworking router (`router_used`)

One actual whole guitar woodworking router; this card records actual used receipt only. Keep full physical mass, installed fluids/components, opening/closing custody and event identity. Included components are not extra purchases. New/used repair parts and water are retained as real influx even when still installed at closing; no fixed lifetime, one-machine-per-kg or default replacement.

- Selected flow: Guitar woodworking router
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Guitar woodworking router (`router_service`)

Non-additive fulfilled-service account for this actual guitar woodworking router. Use actual operation, idle/start-stop/cleanup/failure, utilization/capacity and demonstrated exchange-specific driver, with one embodied/maintenance provider vector. Physical asset kg is not service demand. Retain performed original-cohort service despite held FG; carry only unused/unassigned service. Actual failed/unauthorized repairs retain all occurred material and energy.

- Selected flow: Guitar woodworking router
- Flow property / unit: Time / h
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Guitar-side bending press (`bender_new`)

One actual whole guitar-side bending press; this card records actual new receipt only. Keep full physical mass, installed fluids/components, opening/closing custody and event identity. Included components are not extra purchases. New/used repair parts and water are retained as real influx even when still installed at closing; no fixed lifetime, one-machine-per-kg or default replacement.

- Selected flow: Guitar-side bending press
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Guitar-side bending press (`bender_used`)

One actual whole guitar-side bending press; this card records actual used receipt only. Keep full physical mass, installed fluids/components, opening/closing custody and event identity. Included components are not extra purchases. New/used repair parts and water are retained as real influx even when still installed at closing; no fixed lifetime, one-machine-per-kg or default replacement.

- Selected flow: Guitar-side bending press
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Guitar-side bending press (`bender_service`)

Non-additive fulfilled-service account for this actual guitar-side bending press. Use actual operation, idle/start-stop/cleanup/failure, utilization/capacity and demonstrated exchange-specific driver, with one embodied/maintenance provider vector. Physical asset kg is not service demand. Retain performed original-cohort service despite held FG; carry only unused/unassigned service. Actual failed/unauthorized repairs retain all occurred material and energy.

- Selected flow: Guitar-side bending press
- Flow property / unit: Time / h
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Guitar sanding machine (`sander_new`)

One actual whole guitar sanding machine; this card records actual new receipt only. Keep full physical mass, installed fluids/components, opening/closing custody and event identity. Included components are not extra purchases. New/used repair parts and water are retained as real influx even when still installed at closing; no fixed lifetime, one-machine-per-kg or default replacement.

- Selected flow: Guitar sanding machine
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Guitar sanding machine (`sander_used`)

One actual whole guitar sanding machine; this card records actual used receipt only. Keep full physical mass, installed fluids/components, opening/closing custody and event identity. Included components are not extra purchases. New/used repair parts and water are retained as real influx even when still installed at closing; no fixed lifetime, one-machine-per-kg or default replacement.

- Selected flow: Guitar sanding machine
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Guitar sanding machine (`sander_service`)

Non-additive fulfilled-service account for this actual guitar sanding machine. Use actual operation, idle/start-stop/cleanup/failure, utilization/capacity and demonstrated exchange-specific driver, with one embodied/maintenance provider vector. Physical asset kg is not service demand. Retain performed original-cohort service despite held FG; carry only unused/unassigned service. Actual failed/unauthorized repairs retain all occurred material and energy.

- Selected flow: Guitar sanding machine
- Flow property / unit: Time / h
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Wood-dust extraction unit (`extractor_new`)

One actual whole wood-dust extraction unit; this card records actual new receipt only. Keep full physical mass, installed fluids/components, opening/closing custody and event identity. Included components are not extra purchases. New/used repair parts and water are retained as real influx even when still installed at closing; no fixed lifetime, one-machine-per-kg or default replacement.

- Selected flow: Wood-dust extraction unit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Wood-dust extraction unit (`extractor_used`)

One actual whole wood-dust extraction unit; this card records actual used receipt only. Keep full physical mass, installed fluids/components, opening/closing custody and event identity. Included components are not extra purchases. New/used repair parts and water are retained as real influx even when still installed at closing; no fixed lifetime, one-machine-per-kg or default replacement.

- Selected flow: Wood-dust extraction unit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Wood-dust extraction unit (`extractor_service`)

Non-additive fulfilled-service account for this actual wood-dust extraction unit. Use actual operation, idle/start-stop/cleanup/failure, utilization/capacity and demonstrated exchange-specific driver, with one embodied/maintenance provider vector. Physical asset kg is not service demand. Retain performed original-cohort service despite held FG; carry only unused/unassigned service. Actual failed/unauthorized repairs retain all occurred material and energy.

- Selected flow: Wood-dust extraction unit
- Flow property / unit: Time / h
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Instrument-coating spray gun (`sprayer_new`)

One actual whole instrument-coating spray gun; this card records actual new receipt only. Keep full physical mass, installed fluids/components, opening/closing custody and event identity. Included components are not extra purchases. New/used repair parts and water are retained as real influx even when still installed at closing; no fixed lifetime, one-machine-per-kg or default replacement.

- Selected flow: Instrument-coating spray gun
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Instrument-coating spray gun (`sprayer_used`)

One actual whole instrument-coating spray gun; this card records actual used receipt only. Keep full physical mass, installed fluids/components, opening/closing custody and event identity. Included components are not extra purchases. New/used repair parts and water are retained as real influx even when still installed at closing; no fixed lifetime, one-machine-per-kg or default replacement.

- Selected flow: Instrument-coating spray gun
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Instrument-coating spray gun (`sprayer_service`)

Non-additive fulfilled-service account for this actual instrument-coating spray gun. Use actual operation, idle/start-stop/cleanup/failure, utilization/capacity and demonstrated exchange-specific driver, with one embodied/maintenance provider vector. Physical asset kg is not service demand. Retain performed original-cohort service despite held FG; carry only unused/unassigned service. Actual failed/unauthorized repairs retain all occurred material and energy.

- Selected flow: Instrument-coating spray gun
- Flow property / unit: Time / h
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Air compressor (`compressor_new`)

One actual whole air compressor; this card records actual new receipt only. Keep full physical mass, installed fluids/components, opening/closing custody and event identity. Included components are not extra purchases. New/used repair parts and water are retained as real influx even when still installed at closing; no fixed lifetime, one-machine-per-kg or default replacement.

- Selected flow: Air compressor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Air compressor (`compressor_used`)

One actual whole air compressor; this card records actual used receipt only. Keep full physical mass, installed fluids/components, opening/closing custody and event identity. Included components are not extra purchases. New/used repair parts and water are retained as real influx even when still installed at closing; no fixed lifetime, one-machine-per-kg or default replacement.

- Selected flow: Air compressor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Air compressor (`compressor_service`)

Non-additive fulfilled-service account for this actual air compressor. Use actual operation, idle/start-stop/cleanup/failure, utilization/capacity and demonstrated exchange-specific driver, with one embodied/maintenance provider vector. Physical asset kg is not service demand. Retain performed original-cohort service despite held FG; carry only unused/unassigned service. Actual failed/unauthorized repairs retain all occurred material and energy.

- Selected flow: Air compressor
- Flow property / unit: Time / h
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Guitar-body clamping mould (`mould_new`)

One actual whole guitar-body clamping mould; this card records actual new receipt only. Keep full physical mass, installed fluids/components, opening/closing custody and event identity. Included components are not extra purchases. New/used repair parts and water are retained as real influx even when still installed at closing; no fixed lifetime, one-machine-per-kg or default replacement.

- Selected flow: Guitar-body clamping mould
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Guitar-body clamping mould (`mould_used`)

One actual whole guitar-body clamping mould; this card records actual used receipt only. Keep full physical mass, installed fluids/components, opening/closing custody and event identity. Included components are not extra purchases. New/used repair parts and water are retained as real influx even when still installed at closing; no fixed lifetime, one-machine-per-kg or default replacement.

- Selected flow: Guitar-body clamping mould
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Guitar-body clamping mould (`mould_service`)

Non-additive fulfilled-service account for this actual guitar-body clamping mould. Use actual operation, idle/start-stop/cleanup/failure, utilization/capacity and demonstrated exchange-specific driver, with one embodied/maintenance provider vector. Physical asset kg is not service demand. Retain performed original-cohort service despite held FG; carry only unused/unassigned service. Actual failed/unauthorized repairs retain all occurred material and energy.

- Selected flow: Guitar-body clamping mould
- Flow property / unit: Time / h
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Steel woodworking saw blade (`blade`)

One actual separate steel woodworking saw blade, with material/grade, new/used state, whole wet mass and real custody/removal verified. Do not copy another asset identity, supplier assumptions or full-machine mass into this part/fluid card. Preserve actual influx and full closing stock; X deduplicates only another incoming/outgoing event. Actual incurred provider/maintenance load is attributed once separately from gross mass.

- Selected flow: Steel woodworking saw blade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Carbide woodworking router bit (`bit`)

One actual separate carbide woodworking router bit, with material/grade, new/used state, whole wet mass and real custody/removal verified. Do not copy another asset identity, supplier assumptions or full-machine mass into this part/fluid card. Preserve actual influx and full closing stock; X deduplicates only another incoming/outgoing event. Actual incurred provider/maintenance load is attributed once separately from gross mass.

- Selected flow: Carbide woodworking router bit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Steel planer knife (`knife`)

One actual separate steel planer knife, with material/grade, new/used state, whole wet mass and real custody/removal verified. Do not copy another asset identity, supplier assumptions or full-machine mass into this part/fluid card. Preserve actual influx and full closing stock; X deduplicates only another incoming/outgoing event. Actual incurred provider/maintenance load is attributed once separately from gross mass.

- Selected flow: Steel planer knife
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### New steel machine bearing (`bearing_new`)

One actual separate new steel machine bearing, with material/grade, new/used state, whole wet mass and real custody/removal verified. Do not copy another asset identity, supplier assumptions or full-machine mass into this part/fluid card. Preserve actual influx and full closing stock; X deduplicates only another incoming/outgoing event. Actual incurred provider/maintenance load is attributed once separately from gross mass.

- Selected flow: New steel machine bearing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Used steel machine bearing (`bearing_used`)

One actual separate used steel machine bearing, with material/grade, new/used state, whole wet mass and real custody/removal verified. Do not copy another asset identity, supplier assumptions or full-machine mass into this part/fluid card. Preserve actual influx and full closing stock; X deduplicates only another incoming/outgoing event. Actual incurred provider/maintenance load is attributed once separately from gross mass.

- Selected flow: Used steel machine bearing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Mineral lubricating oil (`oil`)

One actual separate mineral lubricating oil, with material/grade, new/used state, whole wet mass and real custody/removal verified. Do not copy another asset identity, supplier assumptions or full-machine mass into this part/fluid card. Preserve actual influx and full closing stock; X deduplicates only another incoming/outgoing event. Actual incurred provider/maintenance load is attributed once separately from gross mass.

- Selected flow: Mineral lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Treatment service for discarded wood-cutting saw (`saw_waste_treatment`)

Conditional actual treatment of the uniquely identified discarded wood-cutting saw outlet. One real receiver/provider boundary, original unit and independently evidenced actual-state conversion; kg here is actual wet feed demand only when the provider supports it. A mixed outlet has one treatment service; pool W is not another provider purchase. If treatment occurs onsite, collect every actual material, energy, water and species instead of adding the whole service again. Sale/export/failure never automatically removes incurred manufacturing or treatment burden.

- Selected flow: Treatment service for discarded wood-cutting saw
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_treatment_assets. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_assets`
- Sources: `ilcd-attributional-2010`

###### Treatment service for discarded wood-thicknessing planer (`planer_waste_treatment`)

Conditional actual treatment of the uniquely identified discarded wood-thicknessing planer outlet. One real receiver/provider boundary, original unit and independently evidenced actual-state conversion; kg here is actual wet feed demand only when the provider supports it. A mixed outlet has one treatment service; pool W is not another provider purchase. If treatment occurs onsite, collect every actual material, energy, water and species instead of adding the whole service again. Sale/export/failure never automatically removes incurred manufacturing or treatment burden.

- Selected flow: Treatment service for discarded wood-thicknessing planer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_treatment_assets. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_assets`
- Sources: `ilcd-attributional-2010`

###### Treatment service for discarded guitar woodworking router (`router_waste_treatment`)

Conditional actual treatment of the uniquely identified discarded guitar woodworking router outlet. One real receiver/provider boundary, original unit and independently evidenced actual-state conversion; kg here is actual wet feed demand only when the provider supports it. A mixed outlet has one treatment service; pool W is not another provider purchase. If treatment occurs onsite, collect every actual material, energy, water and species instead of adding the whole service again. Sale/export/failure never automatically removes incurred manufacturing or treatment burden.

- Selected flow: Treatment service for discarded guitar woodworking router
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_treatment_assets. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_assets`
- Sources: `ilcd-attributional-2010`

###### Treatment service for discarded guitar-side bending press (`bender_waste_treatment`)

Conditional actual treatment of the uniquely identified discarded guitar-side bending press outlet. One real receiver/provider boundary, original unit and independently evidenced actual-state conversion; kg here is actual wet feed demand only when the provider supports it. A mixed outlet has one treatment service; pool W is not another provider purchase. If treatment occurs onsite, collect every actual material, energy, water and species instead of adding the whole service again. Sale/export/failure never automatically removes incurred manufacturing or treatment burden.

- Selected flow: Treatment service for discarded guitar-side bending press
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_treatment_assets. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_assets`
- Sources: `ilcd-attributional-2010`

###### Treatment service for discarded guitar sanding machine (`sander_waste_treatment`)

Conditional actual treatment of the uniquely identified discarded guitar sanding machine outlet. One real receiver/provider boundary, original unit and independently evidenced actual-state conversion; kg here is actual wet feed demand only when the provider supports it. A mixed outlet has one treatment service; pool W is not another provider purchase. If treatment occurs onsite, collect every actual material, energy, water and species instead of adding the whole service again. Sale/export/failure never automatically removes incurred manufacturing or treatment burden.

- Selected flow: Treatment service for discarded guitar sanding machine
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_treatment_assets. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_assets`
- Sources: `ilcd-attributional-2010`

###### Treatment service for discarded wood-dust extraction unit (`extractor_waste_treatment`)

Conditional actual treatment of the uniquely identified discarded wood-dust extraction unit outlet. One real receiver/provider boundary, original unit and independently evidenced actual-state conversion; kg here is actual wet feed demand only when the provider supports it. A mixed outlet has one treatment service; pool W is not another provider purchase. If treatment occurs onsite, collect every actual material, energy, water and species instead of adding the whole service again. Sale/export/failure never automatically removes incurred manufacturing or treatment burden.

- Selected flow: Treatment service for discarded wood-dust extraction unit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_treatment_assets. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_assets`
- Sources: `ilcd-attributional-2010`

###### Treatment service for discarded instrument-coating spray gun (`sprayer_waste_treatment`)

Conditional actual treatment of the uniquely identified discarded instrument-coating spray gun outlet. One real receiver/provider boundary, original unit and independently evidenced actual-state conversion; kg here is actual wet feed demand only when the provider supports it. A mixed outlet has one treatment service; pool W is not another provider purchase. If treatment occurs onsite, collect every actual material, energy, water and species instead of adding the whole service again. Sale/export/failure never automatically removes incurred manufacturing or treatment burden.

- Selected flow: Treatment service for discarded instrument-coating spray gun
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_treatment_assets. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_assets`
- Sources: `ilcd-attributional-2010`

###### Treatment service for discarded air compressor (`compressor_waste_treatment`)

Conditional actual treatment of the uniquely identified discarded air compressor outlet. One real receiver/provider boundary, original unit and independently evidenced actual-state conversion; kg here is actual wet feed demand only when the provider supports it. A mixed outlet has one treatment service; pool W is not another provider purchase. If treatment occurs onsite, collect every actual material, energy, water and species instead of adding the whole service again. Sale/export/failure never automatically removes incurred manufacturing or treatment burden.

- Selected flow: Treatment service for discarded air compressor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_treatment_assets. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_assets`
- Sources: `ilcd-attributional-2010`

###### Treatment service for discarded guitar-body clamping mould (`mould_waste_treatment`)

Conditional actual treatment of the uniquely identified discarded guitar-body clamping mould outlet. One real receiver/provider boundary, original unit and independently evidenced actual-state conversion; kg here is actual wet feed demand only when the provider supports it. A mixed outlet has one treatment service; pool W is not another provider purchase. If treatment occurs onsite, collect every actual material, energy, water and species instead of adding the whole service again. Sale/export/failure never automatically removes incurred manufacturing or treatment burden.

- Selected flow: Treatment service for discarded guitar-body clamping mould
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_treatment_assets. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_assets`
- Sources: `ilcd-attributional-2010`

###### Treatment service for discarded steel machine bearing (`bearing_waste_treatment`)

Conditional actual treatment of the uniquely identified discarded steel machine bearing outlet. One real receiver/provider boundary, original unit and independently evidenced actual-state conversion; kg here is actual wet feed demand only when the provider supports it. A mixed outlet has one treatment service; pool W is not another provider purchase. If treatment occurs onsite, collect every actual material, energy, water and species instead of adding the whole service again. Sale/export/failure never automatically removes incurred manufacturing or treatment burden.

- Selected flow: Treatment service for discarded steel machine bearing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_treatment_assets. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_assets`
- Sources: `ilcd-attributional-2010`

###### Treatment service for spent mineral lubricating oil (`oil_waste_treatment`)

Conditional actual treatment of the uniquely identified spent mineral lubricating oil outlet. One real receiver/provider boundary, original unit and independently evidenced actual-state conversion; kg here is actual wet feed demand only when the provider supports it. A mixed outlet has one treatment service; pool W is not another provider purchase. If treatment occurs onsite, collect every actual material, energy, water and species instead of adding the whole service again. Sale/export/failure never automatically removes incurred manufacturing or treatment burden.

- Selected flow: Treatment service for spent mineral lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_treatment_assets. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_assets`
- Sources: `ilcd-attributional-2010`

###### Treatment service for spent steel woodworking saw blade (`blade_waste_treatment`)

Conditional actual treatment of the uniquely identified spent steel woodworking saw blade outlet. One real receiver/provider boundary, original unit and independently evidenced actual-state conversion; kg here is actual wet feed demand only when the provider supports it. A mixed outlet has one treatment service; pool W is not another provider purchase. If treatment occurs onsite, collect every actual material, energy, water and species instead of adding the whole service again. Sale/export/failure never automatically removes incurred manufacturing or treatment burden.

- Selected flow: Treatment service for spent steel woodworking saw blade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_treatment_assets. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_assets`
- Sources: `ilcd-attributional-2010`

###### Treatment service for spent carbide woodworking router bit (`bit_waste_treatment`)

Conditional actual treatment of the uniquely identified spent carbide woodworking router bit outlet. One real receiver/provider boundary, original unit and independently evidenced actual-state conversion; kg here is actual wet feed demand only when the provider supports it. A mixed outlet has one treatment service; pool W is not another provider purchase. If treatment occurs onsite, collect every actual material, energy, water and species instead of adding the whole service again. Sale/export/failure never automatically removes incurred manufacturing or treatment burden.

- Selected flow: Treatment service for spent carbide woodworking router bit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_treatment_assets. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_assets`
- Sources: `ilcd-attributional-2010`

###### Treatment service for spent steel planer knife (`knife_waste_treatment`)

Conditional actual treatment of the uniquely identified spent steel planer knife outlet. One real receiver/provider boundary, original unit and independently evidenced actual-state conversion; kg here is actual wet feed demand only when the provider supports it. A mixed outlet has one treatment service; pool W is not another provider purchase. If treatment occurs onsite, collect every actual material, energy, water and species instead of adding the whole service again. Sale/export/failure never automatically removes incurred manufacturing or treatment burden.

- Selected flow: Treatment service for spent steel planer knife
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_treatment_assets. Its numerator is actual original-cohort service A_h_i once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_assets`
- Sources: `ilcd-attributional-2010`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Wood-cutting saw (`saw_reuse_out`)

One actual whole wood-cutting saw; this card records actual reusable transfer outward only. Keep full physical mass, installed fluids/components, opening/closing custody and event identity. Included components are not extra purchases. New/used repair parts and water are retained as real influx even when still installed at closing; no fixed lifetime, one-machine-per-kg or default replacement.

- Selected flow: Wood-cutting saw
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Wood-thicknessing planer (`planer_reuse_out`)

One actual whole wood-thicknessing planer; this card records actual reusable transfer outward only. Keep full physical mass, installed fluids/components, opening/closing custody and event identity. Included components are not extra purchases. New/used repair parts and water are retained as real influx even when still installed at closing; no fixed lifetime, one-machine-per-kg or default replacement.

- Selected flow: Wood-thicknessing planer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Guitar woodworking router (`router_reuse_out`)

One actual whole guitar woodworking router; this card records actual reusable transfer outward only. Keep full physical mass, installed fluids/components, opening/closing custody and event identity. Included components are not extra purchases. New/used repair parts and water are retained as real influx even when still installed at closing; no fixed lifetime, one-machine-per-kg or default replacement.

- Selected flow: Guitar woodworking router
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Guitar-side bending press (`bender_reuse_out`)

One actual whole guitar-side bending press; this card records actual reusable transfer outward only. Keep full physical mass, installed fluids/components, opening/closing custody and event identity. Included components are not extra purchases. New/used repair parts and water are retained as real influx even when still installed at closing; no fixed lifetime, one-machine-per-kg or default replacement.

- Selected flow: Guitar-side bending press
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Guitar sanding machine (`sander_reuse_out`)

One actual whole guitar sanding machine; this card records actual reusable transfer outward only. Keep full physical mass, installed fluids/components, opening/closing custody and event identity. Included components are not extra purchases. New/used repair parts and water are retained as real influx even when still installed at closing; no fixed lifetime, one-machine-per-kg or default replacement.

- Selected flow: Guitar sanding machine
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Wood-dust extraction unit (`extractor_reuse_out`)

One actual whole wood-dust extraction unit; this card records actual reusable transfer outward only. Keep full physical mass, installed fluids/components, opening/closing custody and event identity. Included components are not extra purchases. New/used repair parts and water are retained as real influx even when still installed at closing; no fixed lifetime, one-machine-per-kg or default replacement.

- Selected flow: Wood-dust extraction unit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Instrument-coating spray gun (`sprayer_reuse_out`)

One actual whole instrument-coating spray gun; this card records actual reusable transfer outward only. Keep full physical mass, installed fluids/components, opening/closing custody and event identity. Included components are not extra purchases. New/used repair parts and water are retained as real influx even when still installed at closing; no fixed lifetime, one-machine-per-kg or default replacement.

- Selected flow: Instrument-coating spray gun
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Air compressor (`compressor_reuse_out`)

One actual whole air compressor; this card records actual reusable transfer outward only. Keep full physical mass, installed fluids/components, opening/closing custody and event identity. Included components are not extra purchases. New/used repair parts and water are retained as real influx even when still installed at closing; no fixed lifetime, one-machine-per-kg or default replacement.

- Selected flow: Air compressor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Guitar-body clamping mould (`mould_reuse_out`)

One actual whole guitar-body clamping mould; this card records actual reusable transfer outward only. Keep full physical mass, installed fluids/components, opening/closing custody and event identity. Included components are not extra purchases. New/used repair parts and water are retained as real influx even when still installed at closing; no fixed lifetime, one-machine-per-kg or default replacement.

- Selected flow: Guitar-body clamping mould
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Reusable removed steel machine bearing (`bearing_out`)

One actual separate reusable removed steel machine bearing, with material/grade, new/used state, whole wet mass and real custody/removal verified. Do not copy another asset identity, supplier assumptions or full-machine mass into this part/fluid card. Preserve actual influx and full closing stock; X deduplicates only another incoming/outgoing event. Actual incurred provider/maintenance load is attributed once separately from gross mass.

- Selected flow: Reusable removed steel machine bearing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

##### Waste flows

###### Discarded Wood-cutting saw (`saw_waste`)

One actual whole wood-cutting saw; this card records actual retired waste outlet only. Keep full physical mass, installed fluids/components, opening/closing custody and event identity. Included components are not extra purchases. New/used repair parts and water are retained as real influx even when still installed at closing; no fixed lifetime, one-machine-per-kg or default replacement.

- Selected flow: Discarded Wood-cutting saw
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Discarded Wood-thicknessing planer (`planer_waste`)

One actual whole wood-thicknessing planer; this card records actual retired waste outlet only. Keep full physical mass, installed fluids/components, opening/closing custody and event identity. Included components are not extra purchases. New/used repair parts and water are retained as real influx even when still installed at closing; no fixed lifetime, one-machine-per-kg or default replacement.

- Selected flow: Discarded Wood-thicknessing planer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Discarded Guitar woodworking router (`router_waste`)

One actual whole guitar woodworking router; this card records actual retired waste outlet only. Keep full physical mass, installed fluids/components, opening/closing custody and event identity. Included components are not extra purchases. New/used repair parts and water are retained as real influx even when still installed at closing; no fixed lifetime, one-machine-per-kg or default replacement.

- Selected flow: Discarded Guitar woodworking router
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Discarded Guitar-side bending press (`bender_waste`)

One actual whole guitar-side bending press; this card records actual retired waste outlet only. Keep full physical mass, installed fluids/components, opening/closing custody and event identity. Included components are not extra purchases. New/used repair parts and water are retained as real influx even when still installed at closing; no fixed lifetime, one-machine-per-kg or default replacement.

- Selected flow: Discarded Guitar-side bending press
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Discarded Guitar sanding machine (`sander_waste`)

One actual whole guitar sanding machine; this card records actual retired waste outlet only. Keep full physical mass, installed fluids/components, opening/closing custody and event identity. Included components are not extra purchases. New/used repair parts and water are retained as real influx even when still installed at closing; no fixed lifetime, one-machine-per-kg or default replacement.

- Selected flow: Discarded Guitar sanding machine
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Discarded Wood-dust extraction unit (`extractor_waste`)

One actual whole wood-dust extraction unit; this card records actual retired waste outlet only. Keep full physical mass, installed fluids/components, opening/closing custody and event identity. Included components are not extra purchases. New/used repair parts and water are retained as real influx even when still installed at closing; no fixed lifetime, one-machine-per-kg or default replacement.

- Selected flow: Discarded Wood-dust extraction unit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Discarded Instrument-coating spray gun (`sprayer_waste`)

One actual whole instrument-coating spray gun; this card records actual retired waste outlet only. Keep full physical mass, installed fluids/components, opening/closing custody and event identity. Included components are not extra purchases. New/used repair parts and water are retained as real influx even when still installed at closing; no fixed lifetime, one-machine-per-kg or default replacement.

- Selected flow: Discarded Instrument-coating spray gun
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Discarded Air compressor (`compressor_waste`)

One actual whole air compressor; this card records actual retired waste outlet only. Keep full physical mass, installed fluids/components, opening/closing custody and event identity. Included components are not extra purchases. New/used repair parts and water are retained as real influx even when still installed at closing; no fixed lifetime, one-machine-per-kg or default replacement.

- Selected flow: Discarded Air compressor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Discarded Guitar-body clamping mould (`mould_waste`)

One actual whole guitar-body clamping mould; this card records actual retired waste outlet only. Keep full physical mass, installed fluids/components, opening/closing custody and event identity. Included components are not extra purchases. New/used repair parts and water are retained as real influx even when still installed at closing; no fixed lifetime, one-machine-per-kg or default replacement.

- Selected flow: Discarded Guitar-body clamping mould
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Discarded steel machine bearing (`bearing_waste`)

One actual separate discarded steel machine bearing, with material/grade, new/used state, whole wet mass and real custody/removal verified. Do not copy another asset identity, supplier assumptions or full-machine mass into this part/fluid card. Preserve actual influx and full closing stock; X deduplicates only another incoming/outgoing event. Actual incurred provider/maintenance load is attributed once separately from gross mass.

- Selected flow: Discarded steel machine bearing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Spent mineral lubricating oil (`oil_waste`)

One actual separate spent mineral lubricating oil, with material/grade, new/used state, whole wet mass and real custody/removal verified. Do not copy another asset identity, supplier assumptions or full-machine mass into this part/fluid card. Preserve actual influx and full closing stock; X deduplicates only another incoming/outgoing event. Actual incurred provider/maintenance load is attributed once separately from gross mass.

- Selected flow: Spent mineral lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Spent steel woodworking saw blade (`blade_waste`)

One actual separate spent steel woodworking saw blade, with material/grade, new/used state, whole wet mass and real custody/removal verified. Do not copy another asset identity, supplier assumptions or full-machine mass into this part/fluid card. Preserve actual influx and full closing stock; X deduplicates only another incoming/outgoing event. Actual incurred provider/maintenance load is attributed once separately from gross mass.

- Selected flow: Spent steel woodworking saw blade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Spent carbide woodworking router bit (`bit_waste`)

One actual separate spent carbide woodworking router bit, with material/grade, new/used state, whole wet mass and real custody/removal verified. Do not copy another asset identity, supplier assumptions or full-machine mass into this part/fluid card. Preserve actual influx and full closing stock; X deduplicates only another incoming/outgoing event. Actual incurred provider/maintenance load is attributed once separately from gross mass.

- Selected flow: Spent carbide woodworking router bit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

###### Spent steel planer knife (`knife_waste`)

One actual separate spent steel planer knife, with material/grade, new/used state, whole wet mass and real custody/removal verified. Do not copy another asset identity, supplier assumptions or full-machine mass into this part/fluid card. Preserve actual influx and full closing stock; X deduplicates only another incoming/outgoing event. Actual incurred provider/maintenance load is attributed once separately from gross mass.

- Selected flow: Spent steel planer knife
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; raw collection uses cp_assets. Its numerator is FULL actual gross physical leg V_i, without stock correction, allocation fraction or additional load/provider/credit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `yamaha-craftsmanship`; `ilcd-attributional-2010`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_subdivide | attributional method | Apply only where attributional allocation is justified by the study goal. First separate dedicated production and actual or virtual subdivision, directly assigning each uniquely related input/operation to the receiving instrument/cohort/function. Do not apply industrial manufacture literature as allocation authority or freely choose physical versus economic allocation. | `ilcd-attributional-2010` |
| a_causality | remaining shared exchanges | For every remaining exchange establish the determining physical causal relationship, using actual measured process mechanics, residence/operation time with the truly limiting mass/area/volume/capacity where needed. It may differ for each exchange; an entire factory or all materials do not inherit one arbitrary mass share. No fixed yield, time, machine life or allocation percentage is supplied. For each exchange, allocated vectors across all real receiving functions/cohorts must sum to its complete pre-allocation inventory; full physical gross quantities remain independent. | `ilcd-attributional-2010` |
| a_residual | true residual common-process functions | Only the demonstrated residual lacking subdivision and determining physical causality uses actual contemporaneous market values of real co-functions at the same common-process gate and actual exit condition. Document why residual and common gate/state apply, price period/unit and sensitivity. Ordinary offcuts, failures, samples or treatment exports are not automatically another function. No automatic displacement credit, negative purchase, waste-sale credit or repeated transferred vector. | `ilcd-attributional-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | manufacture | finished_guitar | unique first-release acceptance and calibrated weighing | instrument_id; configuration; complete BOM; supplied state; actual net mass; moisture; calibration; function test; sound/playability; appearance; first_release_at; original cohort; Q; all failed records | Weigh each actually accepted complete same-configuration guitar without packaging or independent case/wrench/documents on a calibrated scale; sum actual unique first-release net masses. Store raw acceptance and measured masses only. Verify actual approved sound/playability/appearance criteria without inventing thresholds. | kg; actual test units | each instrument and cohort close | full manufacture cohort | manufacture-to-FG internal release | per reference flow | Raw evidence and calibration; actual specification/supplier state; full event/stock/vector bridge; uncertainty and real acceptance/disposition. Aggregation only references the sole section-8 result; no quotient in raw collection. |
| cp_material | manufacture | actual individual materials and preparations | receipt stock assay and operation records | row_id; supplier; species; whole supplied preparation; grade; route; form; quantity; original unit; moisture; assay; calibration; receipt machining; opening_raw; closing_raw; opening_WIP; closing_WIP; inherited vector; real added material; included bridge; loss; actual joint approval ; opening_unused_nonWIP_physical_quantity; closing_unused_nonWIP_physical_quantity; each_nonWIP_inherited_vector_and_origin| Weigh or meter whole actual received articles/preparations in original units; independently measure actual-state density/wood moisture only when needed. Record all manufacture steps and failures, supplied completed work upstream once, and each raw/WIP inherited exchange vector. Whole formulation purchase and ingredient/water assay subledgers never add together. Raw-only, no division.  Independently stocktake opening/closing unused non-WIP quantities and retain all corresponding per-flow vectors; an already-net record is not corrected a second time.| kg; original extensive unit | each receipt operation and stock event | full production period | actual supplier and production gates | per reference flow | Raw evidence and calibration; actual specification/supplier state; full event/stock/vector bridge; uncertainty and real acceptance/disposition. Aggregation only references the sole section-8 result; no quotient in raw collection. |
| cp_util_m | manufacture | individual utility carrier and atmosphere rows | calibrated meter thermal and species records | row_id; utility; phase; composition; voltage; geography; start; end; integrated_total; real_rate; time; original_unit; actual_density; calorific_value; pressure; temperature; humidity; inlet_enthalpy; return_enthalpy; carrier_kg; heat_MJ; provider_boundary; overlap; cohort; idle; cleanup; failed_work | Collect undivided real meter readings and gross air/water species at actual states; integrate only genuine rates and do not multiply integrated volumes by time again. Preserve actual fuel/energy and thermal-carrier/return conventions with one upstream owner; no invented boiler. Keep actual natural humidity sorption/desorption including retained wet closing stock. | MJ; kg; m3; actual meter unit | each meter interval and actual event | full manufacture cohort | actual utility and atmospheric boundary | per reference flow | Raw evidence and calibration; actual specification/supplier state; full event/stock/vector bridge; uncertainty and real acceptance/disposition. Aggregation only references the sole section-8 result; no quotient in raw collection. |
| cp_util_h | gate_service | individual original-cohort utility carrier and moisture rows | actual original-cohort service meters | row_id; original_release; Q_H; H; actual_service; retained_FG; raw_meter; phase; density; thermal_state; carrier_kg; heat_MJ; return; provider_owner; wet_opening; wet_closing; water_in; water_out; overlap; permission; test; hold_waste | Collect raw actual original-cohort service utility/carrier/air/water events, including ordinary storage/handling natural moisture exchange and any occurred unauthorized/failed postwork. Retain performed service despite held FG; only unused/unassigned service/charge carries. Water/material influx is not removed because retained at closing; no quotient. | MJ; kg; m3; actual meter unit | each actual service interval and stock event | original history and observed H | actual original-cohort FG package and asset service | per reference flow | Raw evidence and calibration; actual specification/supplier state; full event/stock/vector bridge; uncertainty and real acceptance/disposition. Aggregation only references the sole section-8 result; no quotient in raw collection. |
| cp_emission | manufacture | individual actual molecular or material aerosol release | species-specific sample and abatement ledger | row_id; substance; CAS; material_aerosol; particle_size; phase; medium; original_volume_or_rate; integration; independent_density; assay; wet_stock; air_background; actual_generation; capture; destruction; actual_outlet; carbon_origin; uncertainty | Determine each actual species/material emission using specific sampling and complete material/air/abatement accounts. Independently distinguish ambient pass-through, generated fossil/biogenic carbon and moisture; VOC/PM/COD totals are QA indicators, not molecules. Keep unmeasured species unknown; one residual cannot solve two unknowns. Raw undivided quantities only. | kg; original sampling unit | each representative interval and actual release | whole production period including failure and cleanup | actual outlet and receiving medium | per reference flow | Raw evidence and calibration; actual specification/supplier state; full event/stock/vector bridge; uncertainty and real acceptance/disposition. Aggregation only references the sole section-8 result; no quotient in raw collection. |
| cp_waste_m | manufacture | each real individual waste outlet | outlet mass and disposition | row_id; actual_outlet; whole_wet_mass; dry_mass; water; contamination; source_pool_W; separate_or_mixed; receiver; treatment; sale; failure; sample; retained_stock; vector_owner | Weigh every real whole wet outlet and retained stock. One true mixed outlet has one exchange and independently measured disjoint source pools summing to its total, not total plus components. Ordinary failure, samples and waste sale retain actual manufacturing/treatment burdens; collect raw V separately from attributed burden. | kg | every bin dispatch and closing stock | full manufacture cohort | actual waste receiver gate | per reference flow | Raw evidence and calibration; actual specification/supplier state; full event/stock/vector bridge; uncertainty and real acceptance/disposition. Aggregation only references the sole section-8 result; no quotient in raw collection. |
| cp_fg | gate_service | gross guitar and independent accessory legs | original release dispatch return and postwork history | row_id; original_release; original_Q_H; observed_H; opening_FG; closing_FG; per_flow_inherited_vectors; G; R; original_shipment; original_delivery_state; current_return_mass; water; loss; new_parts; actual_work; permission; posttests; acceptance; disposition; accessory_mass | Trace actual instruments/partial returns to their original release and shipment, weigh real state and record complete FG history. Keep all actual occurred work even failed/unauthorized; permission/tests govern conformity only. Dispatch/retest does not create Q and returned mass does not establish original delivered reversal. Independent accessory supply and gross departure are paired once; raw quantities only. | kg; original item; actual test unit | each actual event and stock date | original release history and observed H | actual FG and independent accessory gates | per reference flow | Raw evidence and calibration; actual specification/supplier state; full event/stock/vector bridge; uncertainty and real acceptance/disposition. Aggregation only references the sole section-8 result; no quotient in raw collection. |
| cp_pack | packaging | all separate article P/I/ER/S/EO/W and charge rows | six-direction wet-stock and ownership ledger | article_id; row_id; material; whole_article; component_bridge; wet_tare; opening_empty; opening_attached_WIP; opening_attached_FG; opening_reusable; P; I; ER; closing_same_states; gross_S; EO; W; source_pool; mixed_total; actual_X_in; actual_X_out; overlap_term; new_repair_material; water; upstream_owner; fulfilled_service; unused_charge; original_Q_H; H ; F_in; F_out; X_in; X_out; matched_OTHER_same_side_owner; collection_opening_closing_wet; exit_origin_partition; packaging receipt origin; payment/non-purchase evidence; owner/custodian; same-item prior outward ID | Measure six actual event legs for each real article, including first non-purchased external ingress without extra invoice, complete opening/closing wet stocks and natural/added water or repair atoms. X removes only another same-side flow-term overlap, not retained influx. Whole wet P/I and component/tare/content bridges are disjoint; internal reuse cancels. Single mixed outlet uses one Waste and disjoint pool-W. Store FULL gross V independent of load share; charge account attributes one provider/service vector. Raw-only.  Apply b_pack real-F and exact OTHER same-side X rules; retained influx is not deduplicated against stock. Mixed origin W is non-additive and matches the actual exit; collection stocks/losses are retained. For packaging only, apply packaging_receipt_basis; standalone non-purchase is I, never invented ER or X. | kg; original count with independently measured wet tare | each actual leg stock and charge event | full original cohort and H | actual package empty WIP FG reusable return and waste states | per reference flow | Raw evidence and calibration; actual specification/supplier state; full event/stock/vector bridge; uncertainty and real acceptance/disposition. Aggregation only references the sole section-8 result; no quotient in raw collection. |
| cp_pack_repair | packaging | individual actual added removed pallet atoms | repair material and wet-stock ledger | row_id; actual_material; new_or_used; actual_influx; actual_outflux; whole_wet_mass; opening; full_closing; water; overlap_other_inout; whole_included_bridge; actual_work; permission; tests; disposition; provider_owner ; F_in; F_out; X_in; X_out; matched_OTHER_same_side_owner; collection_opening_closing_wet; exit_origin_partition| Weigh real separate repair input and outlet with full wet closing stocks. Preserve new/used actual material/water influx even if still held; X only deduplicates another in/out term. A plank is not the whole pallet; integral parts inside received whole articles are not bought again. Failed/unauthorized occurred repairs retain all loads and disposition. No quotient.  Apply b_pack real-F and exact OTHER same-side X rules; retained influx is not deduplicated against stock. Mixed origin W is non-additive and matches the actual exit; collection stocks/losses are retained.| kg | each receipt repair removal and stock event | actual H and custody history | actual pallet and part boundaries | per reference flow | Raw evidence and calibration; actual specification/supplier state; full event/stock/vector bridge; uncertainty and real acceptance/disposition. Aggregation only references the sole section-8 result; no quotient in raw collection. |
| cp_assets | assets | actual individual machine tool part fluid and service rows | serial custody and fulfilled-service records | row_id; serial; configuration; full_wet_mass; integral_fluid; opening_installed; new_receipt; used_receipt; actual_repair_added; worn_removed; reusable_out; waste_out; full_closing; included_bridge; water_in; water_out; overlap_other_inout; actual_hours; idle; failure; capacity; utilization; causal_driver; provider_vector; unused_service; cohort; permission; test; disposition | Keep full asset/part/fluid physical custody separately from actual fulfilled service and one embodied/maintenance provider vector. No fixed life, arbitrary per-kg machine or service from physical mass alone. Preserve real new/used parts and water influx with full wet closing stock; included parts and independent additions are disjoint. Keep actual failures/unauthorized repair and performed service for held FG; only unused/unassigned service carries. Raw-only. | kg; h; actual native extensive unit | each event and service interval | opening history through actual cohort and H | actual installed assets stores and service providers | per reference flow | Raw evidence and calibration; actual specification/supplier state; full event/stock/vector bridge; uncertainty and real acceptance/disposition. Aggregation only references the sole section-8 result; no quotient in raw collection. |
| cp_treatment_manufacture | manufacture | each uniquely linked treatment service row | receiver treatment provider and boundary record | waste_row_id; actual_outlet; wet_feed_kg; original_native_service_unit; actual_state_conversion; receiver; operation; included_transport; onsite_or_external; direct_species; residues; unique_provider_owner; actual_incurred_load; cohort; uncertainty | Collect one actual treatment provider activity per real outlet in its original extensive unit with full included boundary. Use wet kg demand only if justified by its actual provider; no invented conversion. Mixed pool W is not another provider. Onsite treatment collects each actual input/energy/water/species instead of repeating a whole service. Ordinary waste sale/export does not remove incurred manufacture/treatment. Raw-only. | kg actual wet feed; actual native service unit | each actual outlet and treatment event | full original cohort and observed H | actual receiver and treatment gate | per reference flow | Raw evidence and calibration; actual specification/supplier state; full event/stock/vector bridge; uncertainty and real acceptance/disposition. Aggregation only references the sole section-8 result; no quotient in raw collection. |
| cp_treatment_gate_service | gate_service | each uniquely linked treatment service row | receiver treatment provider and boundary record | waste_row_id; actual_outlet; wet_feed_kg; original_native_service_unit; actual_state_conversion; receiver; operation; included_transport; onsite_or_external; direct_species; residues; unique_provider_owner; actual_incurred_load; cohort; uncertainty | Collect one actual treatment provider activity per real outlet in its original extensive unit with full included boundary. Use wet kg demand only if justified by its actual provider; no invented conversion. Mixed pool W is not another provider. Onsite treatment collects each actual input/energy/water/species instead of repeating a whole service. Ordinary waste sale/export does not remove incurred manufacture/treatment. Raw-only. | kg actual wet feed; actual native service unit | each actual outlet and treatment event | full original cohort and observed H | actual receiver and treatment gate | per reference flow | Raw evidence and calibration; actual specification/supplier state; full event/stock/vector bridge; uncertainty and real acceptance/disposition. Aggregation only references the sole section-8 result; no quotient in raw collection. |
| cp_treatment_packaging | packaging | each uniquely linked treatment service row | receiver treatment provider and boundary record | waste_row_id; actual_outlet; wet_feed_kg; original_native_service_unit; actual_state_conversion; receiver; operation; included_transport; onsite_or_external; direct_species; residues; unique_provider_owner; actual_incurred_load; cohort; uncertainty | Collect one actual treatment provider activity per real outlet in its original extensive unit with full included boundary. Use wet kg demand only if justified by its actual provider; no invented conversion. Mixed pool W is not another provider. Onsite treatment collects each actual input/energy/water/species instead of repeating a whole service. Ordinary waste sale/export does not remove incurred manufacture/treatment. Raw-only. | kg actual wet feed; actual native service unit | each actual outlet and treatment event | full original cohort and observed H | actual receiver and treatment gate | per reference flow | Raw evidence and calibration; actual specification/supplier state; full event/stock/vector bridge; uncertainty and real acceptance/disposition. Aggregation only references the sole section-8 result; no quotient in raw collection. |
| cp_treatment_assets | assets | each uniquely linked treatment service row | receiver treatment provider and boundary record | waste_row_id; actual_outlet; wet_feed_kg; original_native_service_unit; actual_state_conversion; receiver; operation; included_transport; onsite_or_external; direct_species; residues; unique_provider_owner; actual_incurred_load; cohort; uncertainty | Collect one actual treatment provider activity per real outlet in its original extensive unit with full included boundary. Use wet kg demand only if justified by its actual provider; no invented conversion. Mixed pool W is not another provider. Onsite treatment collects each actual input/energy/water/species instead of repeating a whole service. Ordinary waste sale/export does not remove incurred manufacture/treatment. Raw-only. | kg actual wet feed; actual native service unit | each actual outlet and treatment event | full original cohort and observed H | actual receiver and treatment gate | per reference flow | Raw evidence and calibration; actual specification/supplier state; full event/stock/vector bridge; uncertainty and real acceptance/disposition. Aggregation only references the sole section-8 result; no quotient in raw collection. |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_q | finished_guitar | Q = sum of actual measured net complete first-release instrument masses from the same cohort/configuration; each unique instrument once. Packaging and independent accessories excluded. Closing released FG is already in Q. | actual_net_masses; cp_release | Q | `yamaha-craftsmanship` |
| calc_raw | all inventory rows | Convert original units once before stock/ownership accounting; integrate actual rates only. 1 kWh = 3.6 MJ. Density and thermal state must be measured for that substance/state. Keep gross V and burden vectors distinct; preserve full wet closing stocks and every actual influx. | raw_records; cp_util_m; cp_util_h; cp_material | converted_raw | `ilcd-attributional-2010` |
| calc_attribution | all inventory rows | For manufacture, A_m_i = B_open_i + U_i - B_close_raw_WIP_unassigned_i - T_other_i after real unit conversion/subdivision/exchange causality and true residual allocation. B_close excludes first-released FG. Each inherited vector and real unassigned non-WIP store stays explicit; already stock-corrected U is not corrected again. T_other exists only for a true distinct function/cohort with justified one-time handover; ordinary failures/waste/sale/treatment are retained. | converted_raw; raw_WIP_inherited_vectors; actual_other_function_decision | A_m_i | `ilcd-attributional-2010` |
| calc_service | all inventory rows | For original cohort Q_H over actual H, A_h_i includes actual fulfilled storage/handling/packaging/asset/treatment/postwork increments and any genuinely assigned unused opening charge, minus only unused/unassigned closing service/charge and a justified one-time real other-function transfer. Never subtract performed service because FG remains held; do not import historical manufacturing vectors as new purchases. Physical gross V is never replaced by A_h_i or an economic share. H is the actual observation window, not another divisor. Already accumulated A_h_i or gross V_i is divided by original Q_H only through the sole quotient, never again by H. | actual_service_records; original_Q_H; H; single_owner_vectors | A_h_i | `ilcd-attributional-2010` |
| calc_quotient | all inventory rows | x_i = N_i / Q_c, once only. N_i is A_m_i for manufacturing load, A_h_i for actual service load, or FULL actual gross leg V_i for physical-only disclosure. Q_c is Q for manufacture and the original Q_H for observed service/gross legs; no new product Q. Each dimension remains separate; physical V has no stock correction/allocation fraction or second provider/credit. Q_c = 0 retains raw numerators and physical flows with no unit result. Cards and aggregation reuse this same x_i without redivision. | A_m_i; A_h_i; V_i; Q; Q_H; cp_release | x_i | `ilcd-attributional-2010` |
| calc_physical | all inventory rows | For each gate reconcile full wet opening + actual external inflow = full wet closing + actual external outflow, with independently measured species/elements/carbon/water constraints. X_in/X_out only deduplicate another OTHER same-side in/out term, never retained influx. Pair/cancel internal instrument/component handoffs; packaging whole article/tare/content and components are disjoint; source-pool W sums to a real single mixed outlet and is not added beside it. Apply the explicit F_in/F_out versus SAME-side OTHER-term X definitions in b_pack at every applicable gate. Distinguish measured origin partitions of the actual exit from precollection discards: retain collection opening/closing wet stocks and every actual disjoint addition/loss, cancelling internal transfers once. Unknown partitions remain unresolved rather than fitted to one total. | raw_physical_stocks; gross_V; independent_species_constraints; overlap_bridge | closure_findings | `ilcd-attributional-2010` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all rows | Keep actual supplied whole identity, native constraints, grade/form/phase/route/geography/medium/type and provider boundary; blank UUID never means a collection label or zero. | supplier primary records; exact native original; approved BOM |
| dq_measure | raw readings and Q | Retain calibration, net/gross/tare distinctions, uncertainty, actual moisture/density/thermal state, original units and rate/integral evidence. Future quantities remain collection requirements, never invented factors. | calibration; raw meter and weighing; actual sample records |
| dq_complete | whole cohort and H | Include every operation, first release, failure/idle/cleanup/sample/rework, raw/WIP per-flow vector, FG history, packaging six events and assets/service/treatment owner. Retain actual unknowns and coverage limits; no inherited approval. | complete raw logs; vector/stock/event bridge; source scope |
| dq_acceptance | actual work and downstream use | Manufacturer/spec permission and actual posttests/acceptance/disposition determine conformity, not whether occurred physical load is recorded. Technical source synthesis is neither a certified factory inventory nor science/translation approval. | actual approved specification; permission/test/disposition; review metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_terminal | reference and all inventory rows | Require the whole declared non-electronic six-string all-solid acoustic terminal, approved configuration/BOM and real first-release record. Whole-string-instrument native Product/Mass plus positive whole-primary scope is required; wrong acoustic/electric, part/whole, CAS, material, grade, route, form, phase, geography, medium or type cannot be overridden by a name/CPC match. Missing auxiliary/provider/measurement evidence stays explicit and blocks only dependent numerical use; a genuinely missing core identity is a core hold. | `yamaha-fg9-r`; `yamaha-craftsmanship`; `un-cpc3` |
| v_quotient | raw quantities Q and all cards | All raw collection is undivided. Convert original units/rates and resolve real allocation/ownership before the sole quotient x_i=N_i/Q_c. Manufacturing uses A_m_i and Q; service uses actual A_h_i and original Q_H; physical-only cards use FULL actual gross V_i, not A_m/A_h, stock-corrected use or economic share. Cards and aggregation reuse that same result without another quotient, purchase, provider or credit. Q_c=0 retains all actual raw/attributed numerators and physical flows without a unit result. Future unknown records cannot be claimed measured or passing. | `ilcd-attributional-2010` |
| v_balance | physical and burden gates | Check independent gross wet mass, relevant elements, carbon origins and every water state across manufacturing, FG/service and consolidated gates. Verify per-flow raw/WIP inheritance, unique Q/closing-FG bridge, all six actual packaging events, assets/parts/fluids and disjoint whole/component/mixed-Waste bridges. Preserve retained influx and full closing mass together. Already net consumption is never twice corrected. | `ilcd-attributional-2010`; `yamaha-craftsmanship` |
| v_truth | sources native restrictions and review | Verify whole sources, actual applicable route/state and counterexamples, each source id/type/reference/use and rule source_ids, original native property/group/reference unit, exact Chinese official displays and complete consumable context. Conditions in descriptions/ancestor units remain normative. Engineering/schema/projection/finite measurement checks do not approve real factory quantities, scientific methodology, translation, accepted mapping, classification coverage or publication. | `ilcd-attributional-2010`; `yamaha-fg9-r`; `yamaha-choose` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacture method; only actual completed documented data packages become datasets |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Actual matching non-electronic six-string all-solid acoustic-guitar manufacture at its declared first-release gate, with explicit original-cohort observed service modules |
| excluded_use | Whole-CPC coverage; electric/keyboard/bowed/nylon/kit/part/laminate routes; assumed factory inventory; lifetime performance/EPD/certification or unreviewed numerical defaults |
| required_metadata | six-string non-electronic configuration and unique instrument/lot identity; solid Adirondack spruce soundboard and solid Indian rosewood back/sides with actual species and origin; mahogany neck and ebony fingerboard/bridge with actual supplied machining state; actual complete bracing/lining/block/binding/purfling/bridge-pin/pickguard/fixing BOM; bone nut/saddle and real adjustment scope; each actual string position/gauge/material and mechanical tuner identity; actual neck joint and any separate bolts/inserts; actual adhesive system with joint/specification permission; actual nitrocellulose body and polyurethane neck coating system and supplied whole preparations; actual wood moisture/conditioning state and same-configuration measured net instrument mass; calibration and first-release functional/sound/playability/appearance acceptance record; actual factory geography period and unique first-release Q; raw/WIP stocks and each inherited flow vector; original FG cohort Q_H and observed service horizon H; gross G/R and original shipment plus actual postwork permission/tests/disposition; per-article six packaging legs and whole/component disjoint bridge; actual utilities/carrier thermal state/returns and supplier water-energy ownership; independent physical mass/element/carbon/water and species-specific emission constraints; independent supplied case/wrench/documents excluded from net guitar mass but accounted once |
| required_quality_disclosure | Primary source scope and counterexamples, technical synthesis versus measured records, actual source/measurement/provider/identity gaps, scientific pending and aligned author translation, raw/vector/gross completeness and uncertainty |
| update_trigger | Actual BOM/joint/supply-face/coating/string/reference identity change, new source evidence, changed service gate, observed omission or substantive review |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3 | official_guidance | UNSD, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Classification 38320 context and adjacent keyboard/electrical/parts/toy exclusions only; not a manufacturing methodology or accepted mapping. |
| yamaha-fg9-r | handbook | Yamaha, FG9 R Acoustic Guitar, https://shop.usa.yamaha.com/en/p/instruments/guitars-basses-amps/guitar-type/premium-guitars/fg9-r-acoustic-guitar ; snapshot 2026-10-20 | Coherent positive whole all-solid steel-string non-electronic terminal, actual listed materials and body/neck finish distinction; independent case/wrench/documents. No measured factory BOM or default quantities. |
| yamaha-craftsmanship | handbook | Yamaha, The Yamaha Difference: Craftsmanship, https://usa.yamaha.com/products/contents/guitars_basses/difference/craftsmanship.html ; snapshot 2026-10-20 | Qualitative wood supply/drying/remaining machining, bracing/linings/side forming/coating/fret/bridge/assembly and actual final playability inspection. Different models and electric/classical sections are restricted countercontext; no numeric recipe or universal joint/order. |
| yamaha-body | handbook | Yamaha, How the Acoustic Guitar is Made: Assembling the body, https://www.yamaha.com/en/musical_instrument_guide/acoustic_guitar/manufacturing/manufacturing003.html ; snapshot 2026-10-20 | Body side forming, block/lining and glued structural assembly qualitative example; its dovetail/simultaneous gluing/time is not imposed on FG9 R or other actual approved joints. |
| yamaha-final | handbook | Yamaha, How the Acoustic Guitar is Made: The final stretch!, https://www.yamaha.com/en/musical_instrument_guide/acoustic_guitar/manufacturing/manufacturing005.html ; snapshot 2026-10-20 | Whole body/neck and fret installation process context; nickel-silver fret material example, no universal fret count, dimensions or joining order. |
| yamaha-coat | handbook | Yamaha, How the Acoustic Guitar is Made: Coating and polishing, https://www.yamaha.com/en/musical_instrument_guide/acoustic_guitar/manufacturing/manufacturing004.html ; snapshot 2026-10-20 | Actual coating/sanding/polishing stages and neck pore context, not universal layer thickness, material fractions or process settings. |
| yamaha-qc | handbook | Yamaha, The Yamaha Difference: Quality control, https://usa.yamaha.com/products/contents/guitars_basses/difference/qc.html ; snapshot 2026-10-20 | Continuous actual production quality/hold/feedback and packaging test context. Accelerated/prototype abuse is not compulsory per-instrument production testing or an acceptance threshold here. |
| yamaha-choose | handbook | Yamaha, The Yamaha Guide to Choosing an Acoustic Guitar, https://www.yamaha.com/US/houseofworship/downloadables/How-to-Choose-Guides/how-to-choose-an-acoustic-guitar-updated.pdf | Whole instrument anatomy and solid/laminated, nylon/steel, acoustic/electronic and parts/whole counterexamples; no tone/strength/lifetime or numeric manufacturing defaults. |
| mohawk-instrument-2012 | handbook | Mohawk, Classic Instrument Lacquer M610-140, Product Data Sheet, revision 28 June 2012, https://www.mohawk-finishing.com/mhk_cds/product_pds/m610-140%20classic%20inst.%20lacquer%286-28-12%29.pdf | Independent qualitative compatible instrument NC coating/sealer/sanding/rubbing/reducer whole-preparation example; both pages and typical-value caveat apply. No evidence of Yamaha order, same formulation, supplier validity today, process defaults or LCA allocation. |
| titebond-original | handbook | Woodbond Adhesives, Titebond Original, https://titebond.com.au/products/titebond-original/ ; tool-rendered primary text snapshot 2026-10-20 | Independent aliphatic resin emulsion musical-instrument adhesive example and its moisture/exterior/structural-use limitations; not universal joint authorization, actual factory supply or a numerical recipe. |
| ilcd-attributional-2010 | official_guidance | European Commission JRC, ILCD Handbook: General guide for Life Cycle Assessment—Detailed guidance, First edition March 2010, section 7.9, https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional multifunctionality: dedicated/virtual subdivision then exchange-specific determining physical causality and only true residual common-process actual-state contemporaneous market value. Not instrument manufacturing facts, arbitrary physical/economic choice or automatic credit. |
| yamaha-two-panels | handbook | Yamaha, The guitar top is actually two panels stuck together, https://www.yamaha.com/en/musical_instrument_guide/acoustic_guitar/trivia/ ; snapshot 2026-10-20 | Bookmatched solid panels and actual edge-joining supply-face context; no prescribed panel count, species, dimensions or factory BOM. |
