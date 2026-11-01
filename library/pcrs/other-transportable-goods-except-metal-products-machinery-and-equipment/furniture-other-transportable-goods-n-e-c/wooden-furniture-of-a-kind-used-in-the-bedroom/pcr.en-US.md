---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.wooden-furniture-of-a-kind-used-in-the-bedroom
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Uncoated solid-pine complete bed-frame kit manufacture

## 1. Scope and Applicability

This attributional method covers complete manufacture of a new uncoated single-level solid-pine bed-frame kit from actual received untreated kiln-dried sawn/planed stock through selection, cutting, remaining planing, mortise/tenon and hole machining, dry sanding, actual approved permanent-subassembly joint bonding if present, fitting/sample assembly, complete hardware/instruction preparation, whole-configuration checks and unique first quality release. The terminal is one complete unassembled flat-pack kit across all parcels, with headboard/foot-end/side members, all actual slat battens and solid-pine slats, drawing-specific centre supports and all supplied functional articles. Customer assembly and the mattress are outside this terminal. Sources: `glb-untreated-london`; `glb-component-machining`; `glb-hardware-kit`; `glb-kit-delivery`; `glb-solid-slats`; `cashmores-kd-pine`.

The primary evidence is a transparent technical synthesis. The bed manufacturer establishes whole untreated-pine beds, actual component preparation, mortise/tenon/slat fastening and full kit supply. The timber merchant independently establishes a real kiln-dried untreated planed supply form; the adhesive TDS only supports an actually qualified optional permanent joint, not a claimed recipe for the illustrated bed. No common contemporary order, factory dataset or supplier chain is asserted. Keep the entire approved BOM and instructions; sample-fit and specification-specific tests establish completeness and acceptance without a prescribed numerical load, formaldehyde threshold or certification.

Exclude purchased-finished-bed repacking, loose legs/rails/slat bases alone, mattresses/box springs, upholstery, MDF/particleboard/plywood or laminated/finger-jointed principal structures, hardwood principal frames, bentwood/steam bending, onsite log conversion/sawmill/kiln, coated/oiled/waxed/preserved routes, reactive/2K joint glue, electrical/adjustable/folding/storage/loft/bunk/child/medical beds and customer assembly/use/end of life. Actual original-cohort packing/storage/handling/dispatch/returns remain separate incremental services over the observed factory-gate horizon. Actual different principal routes require fresh applicability assessment; every actual in-route ancillary atom is added rather than hidden as zero/other.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.wooden-furniture-of-a-kind-used-in-the-bedroom |
| classification_refs | CPC 3.0 38170; narrower; current accepted association: `classifications/mappings/cpc-3.0-to-pcr.yaml` and `docs/adr/cpc3-additional34-20261029-38170.md`; complete method scope/exclusions apply, not full-leaf or scientific/translation approval |
| covered_products | Complete new untreated single-level solid-pine bed-frame kit with whole actual solid slat/hardware/instruction system |
| excluded_products | Mattresses; separate components/supports; coated/engineered/hardwood structures; powered/storage/special-purpose beds; assembled terminal; finished-bed repacking |
| representative_product | Untreated pine London-type complete kit with square posts and actual drawing-specific support system; no source default dimensions or test values |
| production_route | Kiln-dried stock → select/cut/remaining plane → mortise/tenon/hole machining → sand/actual permitted permanent subassembly → fit/check/complete kit → first release |
| market_state | Complete unassembled kit uniquely first quality-released at factory; actual original-cohort gate services separately tagged |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture and uniquely first release the complete untreated pine bed-frame kit of one declared configuration |
| How much | 1 kg reference flow of complete kits |
| How well | Whole drawing/BOM and instructions; actual compatible stock/joints/hardware; actual dimensional/surface/fit/stability/structural tests and disposition; no universal performance value |
| How long or cycle | One manufacture/first-release cycle; actual original-cohort H separately; no assumed sleeping life |
| reference_flow_link | `finished_bed_kit` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Wooden furniture of a kind used in the bedroom `3b8c5b0a-4a30-4bc1-a5f5-0f0ade7db101` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | whole kit configuration and drawing revision; complete head/foot/side/slat/centre-support BOM; all actual supplied hardware and tools; printed or digital assembly-instruction revision; untreated unassembled terminal; Pinus species and legal origin; actual stock sawn/planed gate and moisture; each material provider and supply state; actual joint and optional permanent-subassembly glue permission; whole formulation and separate added water; actual operations and tests; measured net complete-kit mass and calibration; unique first-release cohort and Q; raw/WIP/FG history and each inherited exchange vector; actual site and time; native grade/route/form/geography/media/type and property; energy/water/air state; each package P/I/ER/S/EO/W and upstream owner; assets full physical stock and fulfilled service; actual waste outlets and treatment; original Q_H and observed H; actual postwork permission and posttests; acceptance or hold/waste disposition; allocation drivers and unresolved numerical scope |

Declare every qualifier in the foreground package. Sum calibrated net mass of all parts of each complete same-configuration kit once, including its supplied functional hardware and physical instructions/tools but excluding transport packaging. No single leg, bare slat base or assembled-bed mass surrogate supplies Q. If counted, match each counted complete kit to measured same-configuration net mass and moisture; no catalogue kg/item, secondary property or density conversion. Number of items → Item(s) and item are equivalent physical count with factor 1 only, never a kg conversion. No area denominator is used.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q = sum of calibrated measured net complete-kit kg first quality-released once using cp_release. Closing released FG is already in Q and excluded from manufacturing B_close; never count Q and that FG as duplicate production. |
| moisture | wood and every wet stock | Mass | kg | For isolated wood u=(wet-dry)/dry and dry=wet/(1+u), using independent representative moisture. Separate carrier/free/cell-wall sorbed/structural/reaction water and nonwood fractions; no residual fit for two unknowns. |
| extensive_units | all inventory rows | Actual native extensive property | row unit | Mass/kg only for Mass rows; electrical energy MJ, freight kg*km and actual service h retain their own property. Convert raw units once before attribution; cumulative quantities are not reintegrated; density requires independent substance/state evidence. |
| gross_events | every gross card | Actual physical property | row unit | N_i=V_i actual complete gross leg. No B_open+U-B_close or burden/economic share. New influx retained in full wet closing stock is still influx; only overlap with another inlet/outlet is removed. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Untreated unglued kiln-dried pine sawn/planed stock; actual separate supplied screws/connection articles/instructions; actual qualified conditional whole 1K PVAc; utilities and services at receipt |
| starting_condition_role | secondary_manufacturing |
| product_classification_scope | Narrow complete untreated pine bed-kit subset of CPC3.0:38170; no whole-leaf coverage or accepted mapping inferred |
| recursive_input_rule | Purchased complete kits remain separately identified burden-bearing inputs; they do not replace stock manufacture or create another first release. Matched internal product handovers cancel on consolidation. |
| upstream_dataset_requirement | Match actual forestry/sawmill/kiln/planing, whole preparation/article and transport provider once by species/form/treatment/gate/geography/time; retain supplier-included packaging ingress and one owner |
| disclosure | Actual upstream/onsite split; raw/WIP/FG histories; all failures; first Q; original-cohort H; actual packages/assets/water/air and provider/identity uncertainty |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_scope | classification and complete kit scope | CPC38170 establishes bedroom wooden-furniture context only. The complete untreated pine kit boundary excludes the adjacent coated/hardwood/storage/adjustable/outdoor and mattress alternatives; no whole-leaf coverage or accepted mapping follows from the coordinate. | `un-cpc-bedroom-2025`; `glb-contract-brochure-2025`; `glb-untreated-london` |
| b_route | whole manufacturing route | Include actual receiving/selection, cutting, remaining planing, mortise/tenon/hole machining, dry sanding, actual permitted permanent-subassembly bonding, complete kit fitting/sample assembly, configuration checks and unique first release. Preserve real failures, test pieces, start/stop, idle, cleanup, dust controls and subcontract operations. Whole supplied articles/preparations are bought once; actual constituents are disjoint subaccounts. Excluded principal routes require a fresh applicability assessment before use. | `glb-untreated-london`; `glb-component-machining`; `glb-hardware-kit`; `glb-solid-slats`; `kleiberit-pvac-303` |
| b_q | manufacturing and original-cohort service | Q is net kg of unique complete kits at first quality release. Closing first-released FG already belongs to Q; never subtract it as manufacturing B_close or count it beside Q as a second production output. Manufacturing B_close covers raw/WIP and unused/unassigned non-WIP stores/charges only. Keep raw/WIP inherited vector per exchange/cohort. If raw activity already represents stock-corrected consumption, reconcile once without correcting twice. | `ilcd-attributional-2010` |
| b_service | actual service horizon H | Keep original release identity/Q_H and actually observed H for packaging, storage, handling, dispatch, returns and actual post-release work. Preserve performed original-cohort service even for held FG; carry forward only unused/unassigned service/charge. Opening/closing FG historical manufacturing vectors and full gross G/R remain separate from current increments. Dispatch/retest/release-after-return is no new Q. A net-delivery denominator is outside this method and would need original delivered quantity/reversal D_rev and historical burdens, not returned mass guessed equal to original delivery. Original Q_H stays fixed at unique first release and H is an observed horizon, never an additional divisor. Close full actual FG custody as O_FG+T_new+R_ext+F_in-X_in=C_FG+G_ext+W_actual+F_out-X_out. T_new is the matched internal first-release handoff already in Q, cancelling on consolidation. Actual R/G retain independently measured present-state gross mass and original cohort. F is true added/removed matter/water; X only proved same-side OTHER-flow duplication. All unauthorized/failed/held actual work remains even when qualification fails. | `ilcd-attributional-2010`; `glb-kit-delivery` |
| b_physical | manufacturing FG and consolidated gates | Keep full wet opening/closing raw, WIP, FG, residue, reusable packaging and installed assets, with every actual gross external inlet/outlet. First release is an internal manufacturing-to-FG transfer; cancel its matched physical handover on consolidation, not add Q beside FG and G/R. Gross quantities never follow burden shares. Actual new material/water retained in closing stock remains both real influx and full closing mass; F records true additions/removals. X removes only a proved duplicate same-side OTHER actual flow, never stocks, opposite-side flows or card presence. | `ilcd-attributional-2010`; `usda-wood-handbook-2021` |
| b_pack | each actual packaging article | For each actual whole packaging pool close O+P+I+ER+F_in-X_in=C+S+EO+W+F_out-X_out. O/C are disjoint full wet empty, attached-WIP, attached-FG and reusable stocks. F_in/F_out are independently measured real material or liquid/atmospheric-water additions/removals, never fitted residuals. X subtracts only proved duplicate SAME-side OTHER actual-flow terms linked by event IDs; never stocks, opposite-side flows, card presence or true newly retained influx. Whole supplied articles and constituents are nonadditive; separately supplied onsite components need disjoint receipts or a measured component-to-assembly bridge and paired internal transfers cancelling on consolidation. Natural moisture exchange needs no invented repair or permission. S follows actual gross dispatch, not Q. For one actual mixed outlet use its whole total OR independently measured origin-W partitions, not total plus children or duplicate providers. Actual separate W outlets require actual separate evidence. Actual unknown/damaged Product/Waste states remain recorded with their compatible identity pending, never forced reusable Product. | `ilcd-attributional-2010`; `kleiberit-pvac-303` |
| b_water_carbon | wood preparations air and water | Independently constrain whole physical mass, relevant elements, dry wood, biogenic wood carbon, fossil formulation/plastic carbon and ambient carbon. Forestry uptake remains with its upstream owner, not a foreground credit. Natural humidity sorption/desorption is real even during ordinary storage/handling; it requires no invented repair permission. Keep free/cell-wall sorbed, liquid/vapour, carrier, chemically structural and independently evidenced reaction water distinct. Glue drying is not automatically a chemical reaction. COD/VOC/PM/TOC and wood dust are not molecular species; one residual cannot determine two unknowns. Distinguish local free atmospheric Resource from gas/water already inside supplied timber, a whole preparation, equipment or purchased gas Product. Contained constituents have that single upstream owner and nonadditive subaccounts, not another free Resource intake. A real separately purchased compressed-air/gas Product needs its own atomic card, state/pressure/native-property interface and one provider; internal air handoffs cancel while all real compression/ventilation energy and release remains. Gross molecular transfer and true net environmental change are different. | `usda-wood-handbook-2021`; `ilcd-attributional-2010` |
| b_rework | actual tests repairs and dispositions | Actual post-release work and continued conformity need manufacturer/specification permission, postwork tests, acceptance and disposition. Permission is an acceptance gate, never a deletion gate: unauthorized, failed or held actual work retains all occurred flows/load and its original cohort with actual hold/waste outcome. Do not assume broken wood joints or missing kit parts recover. Ordinary waste, failure, sample, sale or external dispatch is not T_other; only a true other cohort/function with justified one-time allocation/handover receives a burden vector. | `ilcd-attributional-2010`; `glb-untreated-london` |
| b_assets | equipment and actual added atoms | Separate full machine/tool/fluid custody from fulfilled service and one actual embodied/maintenance provider vector. Retain real new/used parts, repairs, worn material, fluid and every water phase; no fixed life or one-machine-per-kg replacement. Only unused/unassigned service/charge carries forward. Add each actual unlisted supply preparation, package, fastener, fuel, heat carrier, refrigerant, water phase, waste and real species individually before using a concrete dataset. Unknown presence is never zero or not_applicable. Real heat/steam needs carrier mass, heat MJ, supply/return and thermal/enthalpy/supplier-water-energy conventions; never invent a boiler. For each actual machine/tool/part/fluid pool close O+R_in+F_in-X_in=C+R_out+F_out-X_out in its reconciled physical unit. R are real external whole-article receipts/removals including actual Waste retirement; F are true measured component/water additions/removals. X only subtracts paired proved duplicate SAME-side OTHER actual flows, never stocks/opposite legs or true retained influx. Keep whole/component supplies disjoint or use a measured assembly bridge with cancelling internal handoffs. One actual mixed outlet total OR independently measured origin partitions has one provider. No replacement, repair, return or moisture event is invented. | `ilcd-attributional-2010` |
| packaging_receipt_basis | packaging | For each actual whole packaging article, P records paid procurement (standalone or bundled, with or without a separate invoice). I records first non-purchased external ingress, including standalone gifts, loans, rental/pool issues and unpaid supplier-attached packaging; supplier attachment is only one I subset. ER requires the same item or an auditable matching batch linked to this site's own prior outward record; another party's prior use alone is not a return. P/I/ER are disjoint. The existing matching physical-article cards and raw subledgers cover these origins subject to every native material/form/state qualification; incompatible actual articles require their own atomic rows, never a substitute UUID. X_in/X_out remain separate measured material/water-change terms, not a substitute for whole-article receipt. Keep gross wet quantities, owner/custodian, payment/non-purchase basis, provenance, prior-outward links, actual state/unit and inherited manufacture/service vectors. A free receipt is neither a new manufacture nor automatically burden-free: attribute actual service and incremental transport/handling once to the proper original cohort/denominator and retain genuinely unused service separately, without a default lifetime or credit. Stock, physical gross legs and burden vectors remain separate. This is the declared conserving foreground-accounting implementation, not a claim that the cited source prescribes these variable names. | ilcd-attributional-2010 |

## 6. Process Inventory Structure

Each card retains its full description and the applicable conditions in §§1–5 and 7–9. Collect raw undivided quantities. Physical-only gross V and attributed burden/service vectors are different dimensions; the separate service/charge account owns one real provider load. Cards and aggregation reference the single calc_quotient result. Actual missing events are conditional only with evidence; add each real unlisted atom before use.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | Whole pine kit manufacture and first release | required | Actual stock route through complete kit | foreground | Q |
| gate_service | Actual original-cohort factory-gate service | conditional | Observed storage handling dispatch returns and work | foreground | Original Q_H and observed H; no new product |
| packaging | Per-article actual six-leg packaging and charge | conditional | Every real article and external event | foreground | Original Q_H and observed H; no new product |
| assets | Actual machinery tools fluid and service | conditional | Actual custody repair and fulfilled service | foreground | Original Q_H and observed H; no new product |

### Process: Whole pine kit manufacture and first release (`manufacture`)

#### Inputs

##### Product flows

###### Untreated kiln-dried pine sawn stock (`pine_stock`)

Receive actual whole unglued kiln-dried pine sawn stock at the mill supply gate; declare Pinus species, legal origin, grade, dimensions, sawn/planed condition and measured moisture. Native identity is kiln-dried coniferous timber at mill, Product and Mass; no hardwood, green stock, glued board or prefabricated bed is substituted. The independent planed-redwood supplier is a supply-form example, not a proven GLB order or universal pine species. Retain forestry/sawmilling/kiln/any supplied planing and transport once upstream; perform only actual remaining cutting, planing, mortise/tenon and hole machining onsite. Weigh full wet receipts and raw/WIP stock; independently sample wood moisture.

- Selected flow: Sawn coniferous timber `50904047-e5b0-4110-990a-53751d250267`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_material. Its numerator is attributed manufacturing A_m_i once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `cashmores-kd-pine`; `glb-untreated-london`; `usda-wood-handbook-2021`

###### Steel slat and frame screw (`wood_screw`)

One actual steel screw article for the declared slat/batten or other specified frame connection, within the native steel-screw Product family and Mass basis. Declare each distinct size/coating as its own disjoint lot/row if physically different; neither generic steel metal nor a combined hardware kit replaces it. Count only actual supplied screws, including those supplied loose for customer assembly and installed screws; do not procure the same screw again inside a purchased component. No universal screw count or strength claim.

- Selected flow: Steel screw `35a4d7dc-1c42-4eb2-a48a-0f9a5abce9d6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_material. Its numerator is attributed manufacturing A_m_i once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `glb-solid-slats`; `glb-hardware-kit`

###### Steel bed-frame connection bolt (`bed_bolt`)

One individually measured steel bed-frame connection bolt only when present in the approved mortise/tenon and mechanical-connection drawing. Native Product is the GLO at-plant steel-fastener family for fabrication/assembly, with bolts/nuts/screws synonyms and Mass reference; this card narrows it to this one article, not a hardware collection. Supplier grade, geometry, coating and assembly role still require qualification. Do not import country-specific providers or infer that the illustrative bed necessarily uses this hardware. Preserve the actual supplied whole article and included-component bridge once.

- Selected flow: Steel fasteners `ebfe08f5-42c8-484e-b39a-684a35981c24`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_material. Its numerator is attributed manufacturing A_m_i once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `glb-hardware-kit`; `usda-wood-handbook-2021`

###### Steel bed-frame barrel nut (`barrel_nut`)

One individually measured steel bed-frame barrel nut only when present in the approved mortise/tenon and mechanical-connection drawing. Native Product is the GLO at-plant steel-fastener family for fabrication/assembly, with bolts/nuts/screws synonyms and Mass reference; this card narrows it to this one article, not a hardware collection. Supplier grade, geometry, coating and assembly role still require qualification. Do not import country-specific providers or infer that the illustrative bed necessarily uses this hardware. Preserve the actual supplied whole article and included-component bridge once.

- Selected flow: Steel fasteners `ebfe08f5-42c8-484e-b39a-684a35981c24`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_material. Its numerator is attributed manufacturing A_m_i once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `glb-hardware-kit`; `usda-wood-handbook-2021`

###### Complete printed assembly instruction leaflet (`instruction_leaflet`)

One actual supplied printed instruction leaflet within the native manufactured Other printed matter Product family at plant, Mass basis. The native general comment contains an adjacent stationery heading; it does not redefine the consistent printed-article name/type into a notebook-only product. Declare actual paper/ink and printing provider; no paper/ink repurchase if included by its whole provider. This is an included kit document, not transport carton mass. Digital-only instructions have no physical leaflet exchange; prove that state and retain the instruction revision.

- Selected flow: Other printed matter `3d54fb5f-3574-4f47-9529-24b60a73a174`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_material. Its numerator is attributed manufacturing A_m_i once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `glb-kit-delivery`; `glb-hardware-kit`

###### Whole one-component aqueous PVAc joint adhesive (`pvac_glue`)

Conditional only for an actually specified manufacturer-qualified permanent wooden subassembly joint. Receive the whole ready-to-use aqueous PVAc preparation including carrier water and additives once; polymer assay/solids/water are subaccounts, not extra purchased inputs. The adhesive TDS independently supports tenon/finger joint bonding, acclimatised clean surfaces, application/clamping, testing on actual materials and water cleanup; it does not establish glue use in the GLB SKU or bed-joint suitability. Its 1K versus separately hardened 2K alternatives are distinct; this method permits only the actually qualified 1K route and does not glue a designed knock-down joint. No density, spread, moisture target, time, temperature, bond grade or certification default. Real additional dilution water is a separate actual input.

- Selected flow: Whole aqueous PVAc wood-joint adhesive
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_material. Its numerator is attributed manufacturing A_m_i once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `kleiberit-pvac-303`; `usda-wood-handbook-2021`

###### Paper-backed sanding abrasive (`abrasive_paper`)

One whole paper-backed abrasive article, at-plant Product and native Mass, used for actual dry sanding of machined wood. Declare grit, backing, binder and substrate compatibility; do not add raw paper or abrasive mineral purchases when the whole article is supplied. Belt/disc geometry and actual wear are measured, not a default consumption. A cloth belt is a distinct article and requires its own matching card; spent article and escaped particulate are separate actual destinations.

- Selected flow: Abrasive paper `ba6c99d4-60d9-46a5-9ef5-ca3d0b877d57`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_material. Its numerator is attributed manufacturing A_m_i once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `glb-component-machining`; `usda-wood-handbook-2021`

###### Manufacturing low-voltage grid electricity (`electricity_m`)

Native Product is CN/China low-voltage alternating current below 1 kV, consumption mix to user and grid-average supply. Use actual matched voltage/site/grid/year/provider; a waste-incineration generation flow or a supply outside the native CN geography cannot replace this flow. The UK bed-manufacturing example supplies route context only, not evidence that this CN electricity applies to that factory. Keep raw cumulative kWh and convert once to electrical MJ using 3.6 MJ/kWh before attribution. Reference property is the native energy property named Net calorific value; it is not a fuel mass or an extra heat purchase. Capture actual cutting/joining/sanding/extraction/lighting/start-stop/idle/failure/cleanup duties and disjoint circuit accounts.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_energy_m. Its numerator is attributed manufacturing A_m_i once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy_m`
- Sources: `glb-component-machining`; `ilcd-attributional-2010`

###### Actually added liquid tap water — manufacture (`tap_water_m`)

One actual treated municipal potable water supply, Product at plant/to consumer with native Mass reference. The native secondary Volume coefficient is not a measured density or water requirement. Measure whole real liquid ingress for actual cleanup or permitted dilution/repair, including influx retained in closing wet stocks; never cancel it against closing stock. Water already included in a supplied whole preparation/article is retained in that whole input and only bridged as a disjoint constituent. No hypothetical boiler, steam or heat exchanger is added.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_water_m. Its numerator is attributed manufacturing A_m_i once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_m`
- Sources: `kleiberit-pvac-303`; `usda-wood-handbook-2021`; `ilcd-attributional-2010`

###### Actual inbound road freight (`inbound_freight`)

Native Product is road freight transport with mass-distance reference, production mix at plant; use actual compatible road provider, real load and route. Native reference unit is kg*km; retain actual complete physical cargo including packaging in the transport workload and convert original t*km once by 1000. Determine real limiting load/volume and sharing before burden attribution. Supplier-included transport remains owned once; do not duplicate driver fuel or invent distance, vehicle size, empty return or loading.

- Selected flow: freight transport `4f1a3f30-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` / kg*km
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_transport. Its numerator is attributed manufacturing A_m_i once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_transport`
- Sources: `ilcd-attributional-2010`

###### Actual treatment service for Actual woodshop cleanup wastewater — manufacture (`cleaning_wastewater_m_treatment`)

Conditional only for the actual one treatment/provider service of the specific actual woodshop cleanup wastewater — manufacture outlet. Use measured actual accepted wet treatment-feed kg and qualify the actual receiver operation, emissions, residues, transport and included boundary; if its provider uses another extensive unit, collect the real native unit/state conversion before numerical use. This is burden/service demand, not a second physical waste leg. A mixed outlet has one treatment owner and no extra component treatment purchase; absent source-pool outlets have no separate treatment service. Actual onsite treatment is expanded into its real material, energy, water and species exchanges instead of duplicated with a whole offsite provider. Preserve ordinary failure/sample/sale and actual treatment load; no automatic credit or T_other transfer. Actual missing provider identity/route/conversion remains explicit, never assumed zero.

- Selected flow: Treatment service for Woodshop cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_treatment_m. Its numerator is attributed manufacturing A_m_i once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_treatment_m`
- Sources: `ilcd-attributional-2010`

###### Actual treatment service for Untreated pine cutting offcut (`pine_offcut_treatment`)

Conditional only for the actual one treatment/provider service of the specific untreated pine cutting offcut outlet. Use measured actual accepted wet treatment-feed kg and qualify the actual receiver operation, emissions, residues, transport and included boundary; if its provider uses another extensive unit, collect the real native unit/state conversion before numerical use. This is burden/service demand, not a second physical waste leg. A mixed outlet has one treatment owner and no extra component treatment purchase; absent source-pool outlets have no separate treatment service. Actual onsite treatment is expanded into its real material, energy, water and species exchanges instead of duplicated with a whole offsite provider. Preserve ordinary failure/sample/sale and actual treatment load; no automatic credit or T_other transfer. Actual missing provider identity/route/conversion remains explicit, never assumed zero.

- Selected flow: Treatment service for Untreated pine cutting offcut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_treatment_m. Its numerator is attributed manufacturing A_m_i once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_treatment_m`
- Sources: `ilcd-attributional-2010`

###### Actual treatment service for Collected untreated pine machining residue (`pine_residue_treatment`)

Conditional only for the actual one treatment/provider service of the specific collected untreated pine machining residue outlet. Use measured actual accepted wet treatment-feed kg and qualify the actual receiver operation, emissions, residues, transport and included boundary; if its provider uses another extensive unit, collect the real native unit/state conversion before numerical use. This is burden/service demand, not a second physical waste leg. A mixed outlet has one treatment owner and no extra component treatment purchase; absent source-pool outlets have no separate treatment service. Actual onsite treatment is expanded into its real material, energy, water and species exchanges instead of duplicated with a whole offsite provider. Preserve ordinary failure/sample/sale and actual treatment load; no automatic credit or T_other transfer. Actual missing provider identity/route/conversion remains explicit, never assumed zero.

- Selected flow: Treatment service for Collected untreated pine machining residue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_treatment_m. Its numerator is attributed manufacturing A_m_i once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_treatment_m`
- Sources: `ilcd-attributional-2010`

###### Actual treatment service for Spent paper-backed sanding abrasive (`spent_abrasive_treatment`)

Conditional only for the actual one treatment/provider service of the specific spent paper-backed sanding abrasive outlet. Use measured actual accepted wet treatment-feed kg and qualify the actual receiver operation, emissions, residues, transport and included boundary; if its provider uses another extensive unit, collect the real native unit/state conversion before numerical use. This is burden/service demand, not a second physical waste leg. A mixed outlet has one treatment owner and no extra component treatment purchase; absent source-pool outlets have no separate treatment service. Actual onsite treatment is expanded into its real material, energy, water and species exchanges instead of duplicated with a whole offsite provider. Preserve ordinary failure/sample/sale and actual treatment load; no automatic credit or T_other transfer. Actual missing provider identity/route/conversion remains explicit, never assumed zero.

- Selected flow: Treatment service for Spent paper-backed sanding abrasive
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_treatment_m. Its numerator is attributed manufacturing A_m_i once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_treatment_m`
- Sources: `ilcd-attributional-2010`

###### Actual treatment service for Co-collected pine–abrasive machining waste (`mixed_machining_waste_treatment`)

Conditional only for the actual one treatment/provider service of the specific co-collected pine–abrasive machining waste outlet. Use measured actual accepted wet treatment-feed kg and qualify the actual receiver operation, emissions, residues, transport and included boundary; if its provider uses another extensive unit, collect the real native unit/state conversion before numerical use. This is burden/service demand, not a second physical waste leg. A mixed outlet has one treatment owner and no extra component treatment purchase; absent source-pool outlets have no separate treatment service. Actual onsite treatment is expanded into its real material, energy, water and species exchanges instead of duplicated with a whole offsite provider. Preserve ordinary failure/sample/sale and actual treatment load; no automatic credit or T_other transfer. Actual missing provider identity/route/conversion remains explicit, never assumed zero.

- Selected flow: Treatment service for Co-collected pine–abrasive machining waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_treatment_m. Its numerator is attributed manufacturing A_m_i once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_treatment_m`
- Sources: `ilcd-attributional-2010`

###### Actual treatment service for Discarded whole aqueous PVAc adhesive (`glue_residue_treatment`)

Conditional only for the actual one treatment/provider service of the specific discarded whole aqueous pvac adhesive outlet. Use measured actual accepted wet treatment-feed kg and qualify the actual receiver operation, emissions, residues, transport and included boundary; if its provider uses another extensive unit, collect the real native unit/state conversion before numerical use. This is burden/service demand, not a second physical waste leg. A mixed outlet has one treatment owner and no extra component treatment purchase; absent source-pool outlets have no separate treatment service. Actual onsite treatment is expanded into its real material, energy, water and species exchanges instead of duplicated with a whole offsite provider. Preserve ordinary failure/sample/sale and actual treatment load; no automatic credit or T_other transfer. Actual missing provider identity/route/conversion remains explicit, never assumed zero.

- Selected flow: Treatment service for Discarded whole aqueous PVAc adhesive
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_treatment_m. Its numerator is attributed manufacturing A_m_i once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_treatment_m`
- Sources: `ilcd-attributional-2010`

##### Waste flows

##### Elementary flows

###### Dinitrogen actual air intake (`n2_m_in`)

Actual molecular dinitrogen (7727-37-9) in the natural air intake. The required compartment is Resources from air, renewable element resource; any compatible binding applies only for this actual medium/phase/time; a supplied industrial gas, soil/water compartment, long-term release or isotope-specific record is different. Measure complete gross species V with actual state and independent composition, not a default air fraction. Ambient CO2 is not fossil or forestry biogenic uptake/emission and receives no automatic climate credit. Preserve dry-air/H2O and actual supplied-air component bridges disjointly; no air aggregate plus species double count.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_air_m. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air_m`
- Sources: `ilcd-attributional-2010`; `usda-wood-handbook-2021`

###### Oxygen actual air intake (`o2_m_in`)

Actual molecular oxygen (7782-44-7) in the natural air intake. The required compartment is Resources from air, renewable element resource; any compatible binding applies only for this actual medium/phase/time; a supplied industrial gas, soil/water compartment, long-term release or isotope-specific record is different. Measure complete gross species V with actual state and independent composition, not a default air fraction. Ambient CO2 is not fossil or forestry biogenic uptake/emission and receives no automatic climate credit. Preserve dry-air/H2O and actual supplied-air component bridges disjointly; no air aggregate plus species double count.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_air_m. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air_m`
- Sources: `ilcd-attributional-2010`; `usda-wood-handbook-2021`

###### Argon actual air intake (`ar_m_in`)

Actual molecular argon (7440-37-1) in the natural air intake. The required compartment is Resources from air, renewable element resource; any compatible binding applies only for this actual medium/phase/time; a supplied industrial gas, soil/water compartment, long-term release or isotope-specific record is different. Measure complete gross species V with actual state and independent composition, not a default air fraction. Ambient CO2 is not fossil or forestry biogenic uptake/emission and receives no automatic climate credit. Preserve dry-air/H2O and actual supplied-air component bridges disjointly; no air aggregate plus species double count.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_air_m. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air_m`
- Sources: `ilcd-attributional-2010`; `usda-wood-handbook-2021`

###### Ambient carbon dioxide actual air intake (`ambient_co2_m_in`)

Actual molecular ambient carbon dioxide (124-38-9) in the natural air intake. The required compartment is Resources from air, renewable element resource; any compatible binding applies only for this actual medium/phase/time; a supplied industrial gas, soil/water compartment, long-term release or isotope-specific record is different. Measure complete gross species V with actual state and independent composition, not a default air fraction. Ambient CO2 is not fossil or forestry biogenic uptake/emission and receives no automatic climate credit. Preserve dry-air/H2O and actual supplied-air component bridges disjointly; no air aggregate plus species double count.

- Selected flow: Ambient carbon dioxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_air_m. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air_m`
- Sources: `ilcd-attributional-2010`; `usda-wood-handbook-2021`

###### Ordinary atmospheric H2O uptake (`humidity_m_in`)

Actual natural H2O vapour sorption during normal machining/storage/handling as well as any real cleanup or repair. Keep it independently measured in kg with phase/state/stock moisture; no operating permission is invented for natural humidity exchange. A Volume-based atmospheric H2O identity requires independently measured state-specific vapour volume and density; this Mass exchange remains unbound until its own compatible identity and measurement basis are established, never by copying liquid-water density. Carrier water already inside wet received stock/preparation is not another external intake. Retain actual added water and full wet closing mass simultaneously; only duplicate incoming/outgoing terms are removed.

- Selected flow: Atmospheric water vapour uptake
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_water_m. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_m`
- Sources: `usda-wood-handbook-2021`; `ilcd-attributional-2010`

#### Outputs

##### Product flows

###### Complete first-released untreated pine bed-frame kit (`finished_bed_kit`)

One complete new single-level non-powered unassembled bed-frame kit: all actual headboard members/posts, foot-end members/posts, both long side rails and slat-support battens, the full solid-pine slat system, configuration-specific centre beam/support legs if specified, all actual joint hardware and included instructions/accessories/tools. All parcels together form the same kit. No mattress, bare rail, sole mattress-support base, loose leg or purchased-finished-bed repacking qualifies. Native Product is manufactured finished wooden bedroom furniture, production mix at plant, Mass reference; the broad physically compatible family is narrowed here to this entire untreated kit. Its general comment includes an adjacent jewellery heading, which is not a material/route/type restriction on the consistent furniture identity. Qualify species, dimensions, joints, assembly fit, structural/stability/surface tests and actual disposition without a universal test threshold. First quality release requires complete BOM and configuration verification; count no duplicate sample assembly, delivery, return or retest as new production. Q is measured net mass of every complete same-configuration kit first released once, including installed/loose supplied functional hardware and physical instructions but excluding all transport packaging; retain wood moisture. No catalogue mass, secondary property or density is a mass measurement.

- Selected flow: Wooden furniture of a kind used in the bedroom `3b8c5b0a-4a30-4bc1-a5f5-0f0ade7db101`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_release`
- Sources: `glb-untreated-london`; `glb-hardware-kit`; `glb-solid-slats`; `glb-kit-delivery`; `usda-wood-handbook-2021`

##### Waste flows

###### Actual woodshop cleanup wastewater — manufacture (`cleaning_wastewater_m`)

One separately collected real liquid cleaning wastewater outlet, with full water and contaminants together. Record actual composition, destination and treatment once; a COD/TOC reading is not a molecular mass. Do not adopt a native row that prescribes discharge to water for an actual collected treatment outlet. The actual wastewater may contain glue only if that conditional work occurred; disjoint water/solid subaccounts do not add a second full outlet.

- Selected flow: Woodshop cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_water_m. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_m`
- Sources: `kleiberit-pvac-303`; `ilcd-attributional-2010`

###### Untreated pine cutting offcut (`pine_offcut`)

One actual separately collected untreated pine cutting offcut Waste outlet at plant, measured as Mass/kg. Record wet mass, moisture, contamination and receiver. Contextual global waste statistics are not this factory data or a recycling credit. Keep ordinary failed cuts, test pieces, dust collection and treatment burden; selling or sending it away does not transfer manufacturing burden automatically. When this source pool is instead co-collected in one genuinely mixed outlet, it is a measured subledger of that outlet, not an additional exchange. UUID identity remains unresolved because compatibility with this actual non-agglomerated form is unproven. Generic wood-waste names and origin descriptions do not establish that match or a classification error. Verify actual form, contamination, receiver and provider ownership before binding; retain the real material and treatment load without inventing agglomeration.

- Selected flow: Untreated pine cutting offcut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_waste. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `glb-component-machining`; `usda-wood-handbook-2021`; `ilcd-attributional-2010`

###### Collected untreated pine machining residue (`pine_residue`)

One actual separately collected collected untreated pine machining residue Waste outlet at plant, measured as Mass/kg. Record wet mass, moisture, contamination and receiver. Contextual global waste statistics are not this factory data or a recycling credit. Keep ordinary failed cuts, test pieces, dust collection and treatment burden; selling or sending it away does not transfer manufacturing burden automatically. When this source pool is instead co-collected in one genuinely mixed outlet, it is a measured subledger of that outlet, not an additional exchange. UUID identity remains unresolved because compatibility with this actual non-agglomerated form is unproven. Generic wood-waste names and origin descriptions do not establish that match or a classification error. Verify actual form, contamination, receiver and provider ownership before binding; retain the real material and treatment load without inventing agglomeration.

- Selected flow: Collected untreated pine machining residue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_waste. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `glb-component-machining`; `usda-wood-handbook-2021`; `ilcd-attributional-2010`

###### Spent paper-backed sanding abrasive (`spent_abrasive`)

Conditional one actual separate spent paper-backed sanding abrasive outlet. Weigh its whole wet state and retain actual contaminants and receiver/treatment. The glue outlet exists only after actual glue use; ordinary failure, hold, cleanup or sale never erases occurred physical flow or load. A genuine single mixed outlet remains one Waste exchange with independently measured disjoint source pools; do not add its components again as separate external outputs. No raw-material Product or pure chemical substitute establishes its Waste identity.

- Selected flow: Spent paper-backed sanding abrasive
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_waste. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `glb-component-machining`; `kleiberit-pvac-303`; `ilcd-attributional-2010`

###### Co-collected pine–abrasive machining waste (`mixed_machining_waste`)

Conditional one actual separate co-collected pine–abrasive machining waste outlet. Weigh its whole wet state and retain actual contaminants and receiver/treatment. The glue outlet exists only after actual glue use; ordinary failure, hold, cleanup or sale never erases occurred physical flow or load. A genuine single mixed outlet remains one Waste exchange with independently measured disjoint source pools; do not add its components again as separate external outputs. No raw-material Product or pure chemical substitute establishes its Waste identity.

- Selected flow: Co-collected pine–abrasive machining waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_waste. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `glb-component-machining`; `kleiberit-pvac-303`; `ilcd-attributional-2010`

###### Discarded whole aqueous PVAc adhesive (`glue_residue`)

Conditional one actual separate discarded whole aqueous pvac adhesive outlet. Weigh its whole wet state and retain actual contaminants and receiver/treatment. The glue outlet exists only after actual glue use; ordinary failure, hold, cleanup or sale never erases occurred physical flow or load. A genuine single mixed outlet remains one Waste exchange with independently measured disjoint source pools; do not add its components again as separate external outputs. No raw-material Product or pure chemical substitute establishes its Waste identity.

- Selected flow: Discarded whole aqueous PVAc adhesive
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_waste. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `glb-component-machining`; `kleiberit-pvac-303`; `ilcd-attributional-2010`

##### Elementary flows

###### Dinitrogen actual air exhaust (`n2_m_out`)

Actual molecular dinitrogen (7727-37-9) in the ordinary air exhaust. The required compartment is Emissions to air, unspecified; any compatible binding applies only for this actual medium/phase/time; a supplied industrial gas, soil/water compartment, long-term release or isotope-specific record is different. Measure complete gross species V with actual state and independent composition, not a default air fraction. Ambient CO2 is not fossil or forestry biogenic uptake/emission and receives no automatic climate credit. Preserve dry-air/H2O and actual supplied-air component bridges disjointly; no air aggregate plus species double count.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_air_m. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air_m`
- Sources: `ilcd-attributional-2010`; `usda-wood-handbook-2021`

###### Oxygen actual air exhaust (`o2_m_out`)

Actual molecular oxygen (7782-44-7) in the ordinary air exhaust. The required compartment is Emissions to air, unspecified; any compatible binding applies only for this actual medium/phase/time; a supplied industrial gas, soil/water compartment, long-term release or isotope-specific record is different. Measure complete gross species V with actual state and independent composition, not a default air fraction. Ambient CO2 is not fossil or forestry biogenic uptake/emission and receives no automatic climate credit. Preserve dry-air/H2O and actual supplied-air component bridges disjointly; no air aggregate plus species double count.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_air_m. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air_m`
- Sources: `ilcd-attributional-2010`; `usda-wood-handbook-2021`

###### Argon actual air exhaust (`ar_m_out`)

Actual molecular argon (7440-37-1) in the ordinary air exhaust. The required compartment is Emissions to air, unspecified; any compatible binding applies only for this actual medium/phase/time; a supplied industrial gas, soil/water compartment, long-term release or isotope-specific record is different. Measure complete gross species V with actual state and independent composition, not a default air fraction. Ambient CO2 is not fossil or forestry biogenic uptake/emission and receives no automatic climate credit. Preserve dry-air/H2O and actual supplied-air component bridges disjointly; no air aggregate plus species double count.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_air_m. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air_m`
- Sources: `ilcd-attributional-2010`; `usda-wood-handbook-2021`

###### Ambient carbon dioxide actual air exhaust (`ambient_co2_m_out`)

Actual molecular ambient carbon dioxide (124-38-9) in the ordinary air exhaust. The required compartment is Emissions to air, unspecified; any compatible binding applies only for this actual medium/phase/time; a supplied industrial gas, soil/water compartment, long-term release or isotope-specific record is different. Measure complete gross species V with actual state and independent composition, not a default air fraction. Ambient CO2 is not fossil or forestry biogenic uptake/emission and receives no automatic climate credit. Preserve dry-air/H2O and actual supplied-air component bridges disjointly; no air aggregate plus species double count.

- Selected flow: Ambient carbon dioxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_air_m. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air_m`
- Sources: `ilcd-attributional-2010`; `usda-wood-handbook-2021`

###### Actual H2O vapour release (`water_vapour_m`)

Actual molecular H2O gas, CAS 7732-18-5, Elementary emission to ordinary air unspecified, native Mass. Include natural desorption in normal storage/handling and actual wood/adhesive/cleanup drying; do not require a work permit for ordinary moisture exchange. Liquid drain, condensate, water-compartment vapour row, supplied steam and chemically bound structural water are different. Independently measure amount and state; carrier water inside a full wastewater outlet is not also an H2O gas emission. Neither VOC/COD nor a carbon residual proves reaction water.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_water_m. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_m`
- Sources: `usda-wood-handbook-2021`; `ilcd-attributional-2010`

###### Escaped airborne pine wood dust (`pine_dust_air`)

One actual airborne solid pine-dust outlet after extraction controls. Measure actual escaped dry particulate, moisture, particle-size method and destination independently of captured waste. Wood dust/PM is a real composite material, not a named molecule; total PM, PM10 and PM2.5 are nested indicators, not additive species. Dust recorded as Waste and cork/mineral particles cannot replace this Elementary wood-dust exchange; no fictional size bin or gas identity. Add actually identified molecular wood volatiles separately only with real species evidence.

- Selected flow: Airborne pine wood dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_air_m. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air_m`
- Sources: `glb-component-machining`; `usda-wood-handbook-2021`; `ilcd-attributional-2010`

### Process: Actual original-cohort factory-gate service (`gate_service`)

#### Inputs

##### Product flows

###### Original-cohort service low-voltage grid electricity (`electricity_h`)

Native Product is CN/China low-voltage alternating current below 1 kV, consumption mix to user and grid-average supply. Use actual matched voltage/site/grid/year/provider; a waste-incineration generation flow or a supply outside the native CN geography cannot replace this flow. The UK bed-manufacturing example supplies route context only, not evidence that this CN electricity applies to that factory. Keep raw cumulative kWh and convert once to electrical MJ using 3.6 MJ/kWh before attribution. Reference property is the native energy property named Net calorific value; it is not a fuel mass or an extra heat purchase. Capture actual cutting/joining/sanding/extraction/lighting/start-stop/idle/failure/cleanup duties and disjoint circuit accounts.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_energy_h. Its numerator is actual original-cohort service/charge A_s_i once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy_h`
- Sources: `glb-component-machining`; `ilcd-attributional-2010`

###### Actually added liquid tap water — gate_service (`tap_water_h`)

One actual treated municipal potable water supply, Product at plant/to consumer with native Mass reference. The native secondary Volume coefficient is not a measured density or water requirement. Measure whole real liquid ingress for actual cleanup or permitted dilution/repair, including influx retained in closing wet stocks; never cancel it against closing stock. Water already included in a supplied whole preparation/article is retained in that whole input and only bridged as a disjoint constituent. No hypothetical boiler, steam or heat exchanger is added.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_water_h. Its numerator is actual original-cohort service/charge A_s_i once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_h`
- Sources: `kleiberit-pvac-303`; `usda-wood-handbook-2021`; `ilcd-attributional-2010`

###### Original-cohort actual bed-kit return (`bed_return`)

Record actual original-cohort whole returned physical state and full wet mass with original first-release and delivery identity. Native Product is finished manufactured wooden bedroom furniture, production mix at plant, with Mass/kg reference. It is usable only for an actual complete conforming kit; damaged fragments, missing parts or a Waste disposition need their own true specific atomic flow, not that Product binding. Preserve opening/closing FG and inherited exchange vectors, original Q_H, horizon H, gross G/R and real new water/parts/loss/work. Dispatch, return and reinspection never create Q. Actual post-release work and continued conformity need manufacturer/spec permission, postwork tests, acceptance and disposition; unauthorized or failed occurred work still retains all physical flows and loads. No assumed restoration or automatic reversal proportional to returned mass.

- Selected flow: Wooden furniture of a kind used in the bedroom `3b8c5b0a-4a30-4bc1-a5f5-0f0ade7db101`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_fg. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: `glb-untreated-london`; `glb-kit-delivery`; `ilcd-attributional-2010`

###### Actual treatment service for Actual woodshop cleanup wastewater — gate_service (`cleaning_wastewater_h_treatment`)

Conditional only for the actual one treatment/provider service of the specific actual woodshop cleanup wastewater — gate_service outlet. Use measured actual accepted wet treatment-feed kg and qualify the actual receiver operation, emissions, residues, transport and included boundary; if its provider uses another extensive unit, collect the real native unit/state conversion before numerical use. This is burden/service demand, not a second physical waste leg. A mixed outlet has one treatment owner and no extra component treatment purchase; absent source-pool outlets have no separate treatment service. Actual onsite treatment is expanded into its real material, energy, water and species exchanges instead of duplicated with a whole offsite provider. Preserve ordinary failure/sample/sale and actual treatment load; no automatic credit or T_other transfer. Actual missing provider identity/route/conversion remains explicit, never assumed zero.

- Selected flow: Treatment service for Woodshop cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_treatment_h. Its numerator is actual original-cohort service/charge A_s_i once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_treatment_h`
- Sources: `ilcd-attributional-2010`

###### Actual treatment service for Actual discarded bed-frame kit (`bed_discard_treatment`)

Conditional only for the actual one treatment/provider service of the specific actual discarded bed-frame kit outlet. Use measured actual accepted wet treatment-feed kg and qualify the actual receiver operation, emissions, residues, transport and included boundary; if its provider uses another extensive unit, collect the real native unit/state conversion before numerical use. This is burden/service demand, not a second physical waste leg. A mixed outlet has one treatment owner and no extra component treatment purchase; absent source-pool outlets have no separate treatment service. Actual onsite treatment is expanded into its real material, energy, water and species exchanges instead of duplicated with a whole offsite provider. Preserve ordinary failure/sample/sale and actual treatment load; no automatic credit or T_other transfer. Actual missing provider identity/route/conversion remains explicit, never assumed zero.

- Selected flow: Treatment service for Discarded wooden bed-frame kit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_treatment_h. Its numerator is actual original-cohort service/charge A_s_i once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_treatment_h`
- Sources: `ilcd-attributional-2010`

##### Waste flows

##### Elementary flows

###### Dinitrogen actual air intake (`n2_h_in`)

Actual molecular dinitrogen (7727-37-9) in the natural air intake. The required compartment is Resources from air, renewable element resource; any compatible binding applies only for this actual medium/phase/time; a supplied industrial gas, soil/water compartment, long-term release or isotope-specific record is different. Measure complete gross species V with actual state and independent composition, not a default air fraction. Ambient CO2 is not fossil or forestry biogenic uptake/emission and receives no automatic climate credit. Preserve dry-air/H2O and actual supplied-air component bridges disjointly; no air aggregate plus species double count.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_air_h. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air_h`
- Sources: `ilcd-attributional-2010`; `usda-wood-handbook-2021`

###### Oxygen actual air intake (`o2_h_in`)

Actual molecular oxygen (7782-44-7) in the natural air intake. The required compartment is Resources from air, renewable element resource; any compatible binding applies only for this actual medium/phase/time; a supplied industrial gas, soil/water compartment, long-term release or isotope-specific record is different. Measure complete gross species V with actual state and independent composition, not a default air fraction. Ambient CO2 is not fossil or forestry biogenic uptake/emission and receives no automatic climate credit. Preserve dry-air/H2O and actual supplied-air component bridges disjointly; no air aggregate plus species double count.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_air_h. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air_h`
- Sources: `ilcd-attributional-2010`; `usda-wood-handbook-2021`

###### Argon actual air intake (`ar_h_in`)

Actual molecular argon (7440-37-1) in the natural air intake. The required compartment is Resources from air, renewable element resource; any compatible binding applies only for this actual medium/phase/time; a supplied industrial gas, soil/water compartment, long-term release or isotope-specific record is different. Measure complete gross species V with actual state and independent composition, not a default air fraction. Ambient CO2 is not fossil or forestry biogenic uptake/emission and receives no automatic climate credit. Preserve dry-air/H2O and actual supplied-air component bridges disjointly; no air aggregate plus species double count.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_air_h. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air_h`
- Sources: `ilcd-attributional-2010`; `usda-wood-handbook-2021`

###### Ambient carbon dioxide actual air intake (`ambient_co2_h_in`)

Actual molecular ambient carbon dioxide (124-38-9) in the natural air intake. The required compartment is Resources from air, renewable element resource; any compatible binding applies only for this actual medium/phase/time; a supplied industrial gas, soil/water compartment, long-term release or isotope-specific record is different. Measure complete gross species V with actual state and independent composition, not a default air fraction. Ambient CO2 is not fossil or forestry biogenic uptake/emission and receives no automatic climate credit. Preserve dry-air/H2O and actual supplied-air component bridges disjointly; no air aggregate plus species double count.

- Selected flow: Ambient carbon dioxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_air_h. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air_h`
- Sources: `ilcd-attributional-2010`; `usda-wood-handbook-2021`

###### Ordinary atmospheric H2O uptake (`humidity_h_in`)

Actual natural H2O vapour sorption during normal machining/storage/handling as well as any real cleanup or repair. Keep it independently measured in kg with phase/state/stock moisture; no operating permission is invented for natural humidity exchange. A Volume-based atmospheric H2O identity requires independently measured state-specific vapour volume and density; this Mass exchange remains unbound until its own compatible identity and measurement basis are established, never by copying liquid-water density. Carrier water already inside wet received stock/preparation is not another external intake. Retain actual added water and full wet closing mass simultaneously; only duplicate incoming/outgoing terms are removed.

- Selected flow: Atmospheric water vapour uptake
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_water_h. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_h`
- Sources: `usda-wood-handbook-2021`; `ilcd-attributional-2010`

#### Outputs

##### Product flows

###### Original-cohort complete bed-kit gross dispatch (`bed_dispatch`)

Record actual original-cohort whole dispatched/discarded physical state and full wet mass with original first-release and delivery identity. Native Product is finished manufactured wooden bedroom furniture, production mix at plant, with Mass/kg reference. It is usable only for an actual complete conforming kit; damaged fragments, missing parts or a Waste disposition need their own true specific atomic flow, not that Product binding. Preserve opening/closing FG and inherited exchange vectors, original Q_H, horizon H, gross G/R and real new water/parts/loss/work. Dispatch, return and reinspection never create Q. Actual post-release work and continued conformity need manufacturer/spec permission, postwork tests, acceptance and disposition; unauthorized or failed occurred work still retains all physical flows and loads. No assumed restoration or automatic reversal proportional to returned mass.

- Selected flow: Wooden furniture of a kind used in the bedroom `3b8c5b0a-4a30-4bc1-a5f5-0f0ade7db101`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_fg. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: `glb-untreated-london`; `glb-kit-delivery`; `ilcd-attributional-2010`

##### Waste flows

###### Actual woodshop cleanup wastewater — gate_service (`cleaning_wastewater_h`)

One separately collected real liquid cleaning wastewater outlet, with full water and contaminants together. Record actual composition, destination and treatment once; a COD/TOC reading is not a molecular mass. Do not adopt a native row that prescribes discharge to water for an actual collected treatment outlet. The actual wastewater may contain glue only if that conditional work occurred; disjoint water/solid subaccounts do not add a second full outlet.

- Selected flow: Woodshop cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_water_h. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_h`
- Sources: `kleiberit-pvac-303`; `ilcd-attributional-2010`

###### Actual discarded bed-frame kit (`bed_discard`)

Record actual original-cohort whole dispatched/discarded physical state and full wet mass with original first-release and delivery identity. Native Product is finished manufactured wooden bedroom furniture, production mix at plant, with Mass/kg reference. It is usable only for an actual complete conforming kit; damaged fragments, missing parts or a Waste disposition need their own true specific atomic flow, not that Product binding. Preserve opening/closing FG and inherited exchange vectors, original Q_H, horizon H, gross G/R and real new water/parts/loss/work. Dispatch, return and reinspection never create Q. Actual post-release work and continued conformity need manufacturer/spec permission, postwork tests, acceptance and disposition; unauthorized or failed occurred work still retains all physical flows and loads. No assumed restoration or automatic reversal proportional to returned mass.

- Selected flow: Discarded wooden bed-frame kit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_fg. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: `glb-untreated-london`; `glb-kit-delivery`; `ilcd-attributional-2010`

##### Elementary flows

###### Dinitrogen actual air exhaust (`n2_h_out`)

Actual molecular dinitrogen (7727-37-9) in the ordinary air exhaust. The required compartment is Emissions to air, unspecified; any compatible binding applies only for this actual medium/phase/time; a supplied industrial gas, soil/water compartment, long-term release or isotope-specific record is different. Measure complete gross species V with actual state and independent composition, not a default air fraction. Ambient CO2 is not fossil or forestry biogenic uptake/emission and receives no automatic climate credit. Preserve dry-air/H2O and actual supplied-air component bridges disjointly; no air aggregate plus species double count.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_air_h. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air_h`
- Sources: `ilcd-attributional-2010`; `usda-wood-handbook-2021`

###### Oxygen actual air exhaust (`o2_h_out`)

Actual molecular oxygen (7782-44-7) in the ordinary air exhaust. The required compartment is Emissions to air, unspecified; any compatible binding applies only for this actual medium/phase/time; a supplied industrial gas, soil/water compartment, long-term release or isotope-specific record is different. Measure complete gross species V with actual state and independent composition, not a default air fraction. Ambient CO2 is not fossil or forestry biogenic uptake/emission and receives no automatic climate credit. Preserve dry-air/H2O and actual supplied-air component bridges disjointly; no air aggregate plus species double count.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_air_h. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air_h`
- Sources: `ilcd-attributional-2010`; `usda-wood-handbook-2021`

###### Argon actual air exhaust (`ar_h_out`)

Actual molecular argon (7440-37-1) in the ordinary air exhaust. The required compartment is Emissions to air, unspecified; any compatible binding applies only for this actual medium/phase/time; a supplied industrial gas, soil/water compartment, long-term release or isotope-specific record is different. Measure complete gross species V with actual state and independent composition, not a default air fraction. Ambient CO2 is not fossil or forestry biogenic uptake/emission and receives no automatic climate credit. Preserve dry-air/H2O and actual supplied-air component bridges disjointly; no air aggregate plus species double count.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_air_h. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air_h`
- Sources: `ilcd-attributional-2010`; `usda-wood-handbook-2021`

###### Ambient carbon dioxide actual air exhaust (`ambient_co2_h_out`)

Actual molecular ambient carbon dioxide (124-38-9) in the ordinary air exhaust. The required compartment is Emissions to air, unspecified; any compatible binding applies only for this actual medium/phase/time; a supplied industrial gas, soil/water compartment, long-term release or isotope-specific record is different. Measure complete gross species V with actual state and independent composition, not a default air fraction. Ambient CO2 is not fossil or forestry biogenic uptake/emission and receives no automatic climate credit. Preserve dry-air/H2O and actual supplied-air component bridges disjointly; no air aggregate plus species double count.

- Selected flow: Ambient carbon dioxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_air_h. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air_h`
- Sources: `ilcd-attributional-2010`; `usda-wood-handbook-2021`

###### Actual H2O vapour release (`water_vapour_h`)

Actual molecular H2O gas, CAS 7732-18-5, Elementary emission to ordinary air unspecified, native Mass. Include natural desorption in normal storage/handling and actual wood/adhesive/cleanup drying; do not require a work permit for ordinary moisture exchange. Liquid drain, condensate, water-compartment vapour row, supplied steam and chemically bound structural water are different. Independently measure amount and state; carrier water inside a full wastewater outlet is not also an H2O gas emission. Neither VOC/COD nor a carbon residual proves reaction water.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_water_h. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_h`
- Sources: `usda-wood-handbook-2021`; `ilcd-attributional-2010`

### Process: Per-article actual six-leg packaging and charge (`packaging`)

#### Inputs

##### Product flows

###### Corrugated shipping carton (`carton_p`)

One actual complete corrugated-paperboard transport carton of the declared construction and configuration, not a collection of cartons, plastic bags, film, liners or other packaging. The compatible atomic Product-flow UUID remains unresolved. Record the actual board/flute/ply configuration, fibre composition, coatings/lamination, wet condition, integral adhesives/fasteners and supplier scope; no generic fibre fraction, treatment, size, weight or lifetime is assumed. Include integral supplied constituents once within the whole carton, while actually separate inserts, tape or other materials retain their own disjoint rows and one upstream owner. Keep this card's existing P/I/ER/S/EO role as defined by the packaging boundary and raw protocol, including packaging_receipt_basis where present; a new provider identity must not change that event definition. Retain the complete measured wet gross quantity and the original event/gate/custody/cohort in the card's stated Mass/kg unit, whether immediately used or retained at closing. Keep opening/closing empty, attached and reusable stock, internal reuse and independently measured material/water-change legs; no stock, burden or economic-share correction shrinks the gross leg. Actual manufacture/service burdens are attributed once separately using the existing original-cohort rule and sole normalization; a gross receipt or outflow alone creates no new manufacture, procurement burden, provider link or credit. Resolve a physically compatible carton identity/provider before binding it; missing identity is disclosed and never replaced with a mixed packaging category or an invented UUID.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_packaging. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`; `glb-kit-delivery`

###### Corrugated shipping carton (`carton_i`)

One actual complete corrugated-paperboard transport carton of the declared construction and configuration, not a collection of cartons, plastic bags, film, liners or other packaging. The compatible atomic Product-flow UUID remains unresolved. Record the actual board/flute/ply configuration, fibre composition, coatings/lamination, wet condition, integral adhesives/fasteners and supplier scope; no generic fibre fraction, treatment, size, weight or lifetime is assumed. Include integral supplied constituents once within the whole carton, while actually separate inserts, tape or other materials retain their own disjoint rows and one upstream owner. Keep this card's existing P/I/ER/S/EO role as defined by the packaging boundary and raw protocol, including packaging_receipt_basis where present; a new provider identity must not change that event definition. Retain the complete measured wet gross quantity and the original event/gate/custody/cohort in the card's stated Mass/kg unit, whether immediately used or retained at closing. Keep opening/closing empty, attached and reusable stock, internal reuse and independently measured material/water-change legs; no stock, burden or economic-share correction shrinks the gross leg. Actual manufacture/service burdens are attributed once separately using the existing original-cohort rule and sole normalization; a gross receipt or outflow alone creates no new manufacture, procurement burden, provider link or credit. Resolve a physically compatible carton identity/provider before binding it; missing identity is disclosed and never replaced with a mixed packaging category or an invented UUID.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_packaging. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`; `glb-kit-delivery`

###### Corrugated shipping carton (`carton_er`)

One actual complete corrugated-paperboard transport carton of the declared construction and configuration, not a collection of cartons, plastic bags, film, liners or other packaging. The compatible atomic Product-flow UUID remains unresolved. Record the actual board/flute/ply configuration, fibre composition, coatings/lamination, wet condition, integral adhesives/fasteners and supplier scope; no generic fibre fraction, treatment, size, weight or lifetime is assumed. Include integral supplied constituents once within the whole carton, while actually separate inserts, tape or other materials retain their own disjoint rows and one upstream owner. Keep this card's existing P/I/ER/S/EO role as defined by the packaging boundary and raw protocol, including packaging_receipt_basis where present; a new provider identity must not change that event definition. Retain the complete measured wet gross quantity and the original event/gate/custody/cohort in the card's stated Mass/kg unit, whether immediately used or retained at closing. Keep opening/closing empty, attached and reusable stock, internal reuse and independently measured material/water-change legs; no stock, burden or economic-share correction shrinks the gross leg. Actual manufacture/service burdens are attributed once separately using the existing original-cohort rule and sole normalization; a gross receipt or outflow alone creates no new manufacture, procurement burden, provider link or credit. Resolve a physically compatible carton identity/provider before binding it; missing identity is disclosed and never replaced with a mixed packaging category or an invented UUID.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_packaging. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`; `glb-kit-delivery`

###### Actual packaging service charge — Corrugated shipping carton (`carton_charge`)

One actually attributable corrugated shipping carton supply/service charge dimension over its original cohort and observed H. This is a service ledger in actual native kg-equivalent of the compatible provider, not another physical receipt; do not add it to gross mass balance or re-purchase P/I/ER. Attribute real upstream production/reuse-service owner and fulfilled service once; actual waste treatment has its own single treatment-service card. carry only unused/unassigned charge. Performed service does not disappear because packed FG remains in closing stock. No fixed reuse life, replacement credit or automatic Waste debit/credit; missing provider conversion remains unknown.

- Selected flow: Corrugated shipping carton allocated supply service
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_packaging. Its numerator is actual original-cohort service/charge A_s_i once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`

###### New purchased ingress — LDPE wrapping film (`film_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. One actual LDPE foil article, native Product and Mass; no PET, HDPE resin, EPS cushion or whole bag substitute. Verify actual polymer/additives and provider; layers, core and tape are separately identified whole articles when present, never hidden inside polymer assay. This card is only the actual P direction/event. Its numerator is complete gross V, never a burden vector, stock-corrected consumption or economic share. For a returned or shipped article retain actual whole-article state; a damaged Waste state cannot use this Product identity. Supplier-included I has a physical influx even without another invoice and one upstream owner.  Preserve full wet opening/closing empty, attached-WIP, attached-FG and reusable states; new influx retained in closing stock remains influx. Deduplicate only a proved duplicate same-side OTHER actual-flow term, never stocks, opposite-side flows or card presence. Physical-only disclosure creates no additional purchase/provider burden or credit; the separate charge ledger owns the actual burden once.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_packaging. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`; `glb-kit-delivery`

###### Supplier-included ingress — LDPE wrapping film (`film_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. One actual LDPE foil article, native Product and Mass; no PET, HDPE resin, EPS cushion or whole bag substitute. Verify actual polymer/additives and provider; layers, core and tape are separately identified whole articles when present, never hidden inside polymer assay. This card is only the actual I direction/event. Its numerator is complete gross V, never a burden vector, stock-corrected consumption or economic share. For a returned or shipped article retain actual whole-article state; a damaged Waste state cannot use this Product identity. Supplier-included I has a physical influx even without another invoice and one upstream owner.  Preserve full wet opening/closing empty, attached-WIP, attached-FG and reusable states; new influx retained in closing stock remains influx. Deduplicate only a proved duplicate same-side OTHER actual-flow term, never stocks, opposite-side flows or card presence. Physical-only disclosure creates no additional purchase/provider burden or credit; the separate charge ledger owns the actual burden once.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_packaging. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`; `glb-kit-delivery`

###### External return received — LDPE wrapping film (`film_er`)

One actual LDPE foil article, native Product and Mass; no PET, HDPE resin, EPS cushion or whole bag substitute. Verify actual polymer/additives and provider; layers, core and tape are separately identified whole articles when present, never hidden inside polymer assay. This card is only the actual ER direction/event. Its numerator is complete gross V, never a burden vector, stock-corrected consumption or economic share. For a returned or shipped article retain actual whole-article state; a damaged Waste state cannot use this Product identity. Supplier-included I has a physical influx even without another invoice and one upstream owner.  Preserve full wet opening/closing empty, attached-WIP, attached-FG and reusable states; new influx retained in closing stock remains influx. Deduplicate only a proved duplicate same-side OTHER actual-flow term, never stocks, opposite-side flows or card presence. Physical-only disclosure creates no additional purchase/provider burden or credit; the separate charge ledger owns the actual burden once.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_packaging. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`; `glb-kit-delivery`

###### Actual packaging service charge — LDPE wrapping film (`film_charge`)

One actually attributable ldpe wrapping film supply/service charge dimension over its original cohort and observed H. This is a service ledger in actual native kg-equivalent of the compatible provider, not another physical receipt; do not add it to gross mass balance or re-purchase P/I/ER. Attribute real upstream production/reuse-service owner and fulfilled service once; actual waste treatment has its own single treatment-service card. carry only unused/unassigned charge. Performed service does not disappear because packed FG remains in closing stock. No fixed reuse life, replacement credit or automatic Waste debit/credit; missing provider conversion remains unknown.

- Selected flow: LDPE wrapping film allocated supply service
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_packaging. Its numerator is actual original-cohort service/charge A_s_i once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`

###### New purchased ingress — Wooden transport pallet (`pallet_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. One whole portable wooden load platform for mechanical handling, transport and storage, within the native manufactured wooden-pallet/load-board/collar Product family at plant and Mass. This is the pallet only, not its repair plank, nail, water or a whole bed. No EURO geometry, species, heat treatment, fixed reuse count or transport share is assumed; declare actual configuration and full wet mass. This card is only the actual P direction/event. Its numerator is complete gross V, never a burden vector, stock-corrected consumption or economic share. For a returned or shipped article retain actual whole-article state; a damaged Waste state cannot use this Product identity. Supplier-included I has a physical influx even without another invoice and one upstream owner.  Preserve full wet opening/closing empty, attached-WIP, attached-FG and reusable states; new influx retained in closing stock remains influx. Deduplicate only a proved duplicate same-side OTHER actual-flow term, never stocks, opposite-side flows or card presence. Physical-only disclosure creates no additional purchase/provider burden or credit; the separate charge ledger owns the actual burden once.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_packaging. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`; `glb-kit-delivery`

###### Supplier-included ingress — Wooden transport pallet (`pallet_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. One whole portable wooden load platform for mechanical handling, transport and storage, within the native manufactured wooden-pallet/load-board/collar Product family at plant and Mass. This is the pallet only, not its repair plank, nail, water or a whole bed. No EURO geometry, species, heat treatment, fixed reuse count or transport share is assumed; declare actual configuration and full wet mass. This card is only the actual I direction/event. Its numerator is complete gross V, never a burden vector, stock-corrected consumption or economic share. For a returned or shipped article retain actual whole-article state; a damaged Waste state cannot use this Product identity. Supplier-included I has a physical influx even without another invoice and one upstream owner.  Preserve full wet opening/closing empty, attached-WIP, attached-FG and reusable states; new influx retained in closing stock remains influx. Deduplicate only a proved duplicate same-side OTHER actual-flow term, never stocks, opposite-side flows or card presence. Physical-only disclosure creates no additional purchase/provider burden or credit; the separate charge ledger owns the actual burden once.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_packaging. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`; `glb-kit-delivery`

###### External return received — Wooden transport pallet (`pallet_er`)

One whole portable wooden load platform for mechanical handling, transport and storage, within the native manufactured wooden-pallet/load-board/collar Product family at plant and Mass. This is the pallet only, not its repair plank, nail, water or a whole bed. No EURO geometry, species, heat treatment, fixed reuse count or transport share is assumed; declare actual configuration and full wet mass. This card is only the actual ER direction/event. Its numerator is complete gross V, never a burden vector, stock-corrected consumption or economic share. For a returned or shipped article retain actual whole-article state; a damaged Waste state cannot use this Product identity. Supplier-included I has a physical influx even without another invoice and one upstream owner.  Preserve full wet opening/closing empty, attached-WIP, attached-FG and reusable states; new influx retained in closing stock remains influx. Deduplicate only a proved duplicate same-side OTHER actual-flow term, never stocks, opposite-side flows or card presence. Physical-only disclosure creates no additional purchase/provider burden or credit; the separate charge ledger owns the actual burden once.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_packaging. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`; `glb-kit-delivery`

###### Actual packaging service charge — Wooden transport pallet (`pallet_charge`)

One actually attributable wooden transport pallet supply/service charge dimension over its original cohort and observed H. This is a service ledger in actual native kg-equivalent of the compatible provider, not another physical receipt; do not add it to gross mass balance or re-purchase P/I/ER. Attribute real upstream production/reuse-service owner and fulfilled service once; actual waste treatment has its own single treatment-service card. carry only unused/unassigned charge. Performed service does not disappear because packed FG remains in closing stock. No fixed reuse life, replacement credit or automatic Waste debit/credit; missing provider conversion remains unknown.

- Selected flow: Wooden transport pallet allocated supply service
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_packaging. Its numerator is actual original-cohort service/charge A_s_i once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`

###### New purchased ingress — Plastic PVAc adhesive pail (`pail_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. One actual empty whole plastic adhesive pail, only for an actually purchased pail supply format. The glue TDS lists pails and alternative bottles/cartons; it does not establish polymer, tare, common order or reused-pail suitability. Determine the actual supplied pail polymer and any separate lid/handle/liner by supplier evidence; retain the whole article once with a disjoint component bridge, adding a separately supplied component as its own atom. Glue contents are separate and not pail tare. This card is only the actual P direction/event. Its numerator is complete gross V, never a burden vector, stock-corrected consumption or economic share. For a returned or shipped article retain actual whole-article state; a damaged Waste state cannot use this Product identity. Supplier-included I has a physical influx even without another invoice and one upstream owner.  Preserve full wet opening/closing empty, attached-WIP, attached-FG and reusable states; new influx retained in closing stock remains influx. Deduplicate only a proved duplicate same-side OTHER actual-flow term, never stocks, opposite-side flows or card presence. Physical-only disclosure creates no additional purchase/provider burden or credit; the separate charge ledger owns the actual burden once.

- Selected flow: Plastic adhesive pail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_packaging. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`; `kleiberit-pvac-303`

###### Supplier-included ingress — Plastic PVAc adhesive pail (`pail_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. One actual empty whole plastic adhesive pail, only for an actually purchased pail supply format. The glue TDS lists pails and alternative bottles/cartons; it does not establish polymer, tare, common order or reused-pail suitability. Determine the actual supplied pail polymer and any separate lid/handle/liner by supplier evidence; retain the whole article once with a disjoint component bridge, adding a separately supplied component as its own atom. Glue contents are separate and not pail tare. This card is only the actual I direction/event. Its numerator is complete gross V, never a burden vector, stock-corrected consumption or economic share. For a returned or shipped article retain actual whole-article state; a damaged Waste state cannot use this Product identity. Supplier-included I has a physical influx even without another invoice and one upstream owner.  Preserve full wet opening/closing empty, attached-WIP, attached-FG and reusable states; new influx retained in closing stock remains influx. Deduplicate only a proved duplicate same-side OTHER actual-flow term, never stocks, opposite-side flows or card presence. Physical-only disclosure creates no additional purchase/provider burden or credit; the separate charge ledger owns the actual burden once.

- Selected flow: Plastic adhesive pail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_packaging. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`; `kleiberit-pvac-303`

###### External return received — Plastic PVAc adhesive pail (`pail_er`)

One actual empty whole plastic adhesive pail, only for an actually purchased pail supply format. The glue TDS lists pails and alternative bottles/cartons; it does not establish polymer, tare, common order or reused-pail suitability. Determine the actual supplied pail polymer and any separate lid/handle/liner by supplier evidence; retain the whole article once with a disjoint component bridge, adding a separately supplied component as its own atom. Glue contents are separate and not pail tare. This card is only the actual ER direction/event. Its numerator is complete gross V, never a burden vector, stock-corrected consumption or economic share. For a returned or shipped article retain actual whole-article state; a damaged Waste state cannot use this Product identity. Supplier-included I has a physical influx even without another invoice and one upstream owner.  Preserve full wet opening/closing empty, attached-WIP, attached-FG and reusable states; new influx retained in closing stock remains influx. Deduplicate only a proved duplicate same-side OTHER actual-flow term, never stocks, opposite-side flows or card presence. Physical-only disclosure creates no additional purchase/provider burden or credit; the separate charge ledger owns the actual burden once.

- Selected flow: Plastic adhesive pail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_packaging. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`; `kleiberit-pvac-303`

###### Actual packaging service charge — Plastic PVAc adhesive pail (`pail_charge`)

One actually attributable plastic pvac adhesive pail supply/service charge dimension over its original cohort and observed H. This is a service ledger in actual native kg-equivalent of the compatible provider, not another physical receipt; do not add it to gross mass balance or re-purchase P/I/ER. Attribute real upstream production/reuse-service owner and fulfilled service once; actual waste treatment has its own single treatment-service card. carry only unused/unassigned charge. Performed service does not disappear because packed FG remains in closing stock. No fixed reuse life, replacement credit or automatic Waste debit/credit; missing provider conversion remains unknown.

- Selected flow: Plastic PVAc adhesive pail allocated supply service
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_packaging. Its numerator is actual original-cohort service/charge A_s_i once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`

###### Kiln-dried pine pallet repair plank (`pallet_repair_plank`)

One actual kiln-dried pine pallet repair plank for pallet repair, not a whole pallet. The received board must match actual kiln-dried unglued coniferous stock at mill; actual additional cutting/repair work is retained, not assumed included in its supply. Collect every real new/used receipt and removed state separately. New influx retained in full wet closing stock remains a real influx; X removes overlap only with another included incoming/outgoing term. Initial material already inside an incoming whole pallet is not a new separate purchase. Failed/unauthorised actual repair retains its material, energy, water and hold/waste history.

- Selected flow: Sawn coniferous timber `50904047-e5b0-4110-990a-53751d250267`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_maintenance. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_maintenance`
- Sources: `ilcd-attributional-2010`; `usda-wood-handbook-2021`

###### Steel pallet repair nail (`pallet_repair_nail`)

One actual steel pallet repair nail for pallet repair, not a whole pallet. No whole-pallet/steel-screw Product is substituted for this separate nail or Waste. Collect every real new/used receipt and removed state separately. New influx retained in full wet closing stock remains a real influx; X removes overlap only with another included incoming/outgoing term. Initial material already inside an incoming whole pallet is not a new separate purchase. Failed/unauthorised actual repair retains its material, energy, water and hold/waste history. The selected GLO at-plant fabrication/assembly Steel fasteners family with exact native Mass/kg covers this actual single steel repair nail. Verify actual nail type, finish and provider; it is not a steel screw, whole pallet, hardware collection or Waste. No item mass, coating recipe or wear amount is inferred.

- Selected flow: Steel fasteners `ebfe08f5-42c8-484e-b39a-684a35981c24`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_maintenance. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_maintenance`
- Sources: `ilcd-attributional-2010`; `usda-wood-handbook-2021`

###### Actual treatment service for Actual discarded packaging — Corrugated shipping carton (`carton_w_treatment`)

Conditional only for the actual one treatment/provider service of the specific actual discarded packaging — corrugated shipping carton outlet. Use measured actual accepted wet treatment-feed kg and qualify the actual receiver operation, emissions, residues, transport and included boundary; if its provider uses another extensive unit, collect the real native unit/state conversion before numerical use. This is burden/service demand, not a second physical waste leg. A mixed outlet has one treatment owner and no extra component treatment purchase; absent source-pool outlets have no separate treatment service. Actual onsite treatment is expanded into its real material, energy, water and species exchanges instead of duplicated with a whole offsite provider. Preserve ordinary failure/sample/sale and actual treatment load; no automatic credit or T_other transfer. Actual missing provider identity/route/conversion remains explicit, never assumed zero.

- Selected flow: Treatment service for Waste corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_treatment_p. Its numerator is actual original-cohort service/charge A_s_i once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_treatment_p`
- Sources: `ilcd-attributional-2010`

###### Actual treatment service for Actual discarded packaging — LDPE wrapping film (`film_w_treatment`)

Conditional only for the actual one treatment/provider service of the specific actual discarded packaging — ldpe wrapping film outlet. Use measured actual accepted wet treatment-feed kg and qualify the actual receiver operation, emissions, residues, transport and included boundary; if its provider uses another extensive unit, collect the real native unit/state conversion before numerical use. This is burden/service demand, not a second physical waste leg. A mixed outlet has one treatment owner and no extra component treatment purchase; absent source-pool outlets have no separate treatment service. Actual onsite treatment is expanded into its real material, energy, water and species exchanges instead of duplicated with a whole offsite provider. Preserve ordinary failure/sample/sale and actual treatment load; no automatic credit or T_other transfer. Actual missing provider identity/route/conversion remains explicit, never assumed zero.

- Selected flow: Treatment service for Waste ldpe wrapping film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_treatment_p. Its numerator is actual original-cohort service/charge A_s_i once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_treatment_p`
- Sources: `ilcd-attributional-2010`

###### Actual treatment service for Actual discarded packaging — Wooden transport pallet (`pallet_w_treatment`)

Conditional only for the actual one treatment/provider service of the specific actual discarded packaging — wooden transport pallet outlet. Use measured actual accepted wet treatment-feed kg and qualify the actual receiver operation, emissions, residues, transport and included boundary; if its provider uses another extensive unit, collect the real native unit/state conversion before numerical use. This is burden/service demand, not a second physical waste leg. A mixed outlet has one treatment owner and no extra component treatment purchase; absent source-pool outlets have no separate treatment service. Actual onsite treatment is expanded into its real material, energy, water and species exchanges instead of duplicated with a whole offsite provider. Preserve ordinary failure/sample/sale and actual treatment load; no automatic credit or T_other transfer. Actual missing provider identity/route/conversion remains explicit, never assumed zero.

- Selected flow: Treatment service for Waste wooden transport pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_treatment_p. Its numerator is actual original-cohort service/charge A_s_i once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_treatment_p`
- Sources: `ilcd-attributional-2010`

###### Actual treatment service for Actual discarded packaging — Plastic PVAc adhesive pail (`pail_w_treatment`)

Conditional only for the actual one treatment/provider service of the specific actual discarded packaging — plastic pvac adhesive pail outlet. Use measured actual accepted wet treatment-feed kg and qualify the actual receiver operation, emissions, residues, transport and included boundary; if its provider uses another extensive unit, collect the real native unit/state conversion before numerical use. This is burden/service demand, not a second physical waste leg. A mixed outlet has one treatment owner and no extra component treatment purchase; absent source-pool outlets have no separate treatment service. Actual onsite treatment is expanded into its real material, energy, water and species exchanges instead of duplicated with a whole offsite provider. Preserve ordinary failure/sample/sale and actual treatment load; no automatic credit or T_other transfer. Actual missing provider identity/route/conversion remains explicit, never assumed zero.

- Selected flow: Treatment service for Waste plastic pvac adhesive pail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_treatment_p. Its numerator is actual original-cohort service/charge A_s_i once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_treatment_p`
- Sources: `ilcd-attributional-2010`

###### Actual treatment service for One actual co-collected paper–LDPE–wood packaging waste (`mixed_packaging_waste_treatment`)

Conditional only for the actual one treatment/provider service of the specific one actual co-collected paper–ldpe–wood packaging waste outlet. Use measured actual accepted wet treatment-feed kg and qualify the actual receiver operation, emissions, residues, transport and included boundary; if its provider uses another extensive unit, collect the real native unit/state conversion before numerical use. This is burden/service demand, not a second physical waste leg. A mixed outlet has one treatment owner and no extra component treatment purchase; absent source-pool outlets have no separate treatment service. Actual onsite treatment is expanded into its real material, energy, water and species exchanges instead of duplicated with a whole offsite provider. Preserve ordinary failure/sample/sale and actual treatment load; no automatic credit or T_other transfer. Actual missing provider identity/route/conversion remains explicit, never assumed zero.

- Selected flow: Treatment service for Mixed paper–LDPE–wood packaging waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_treatment_p. Its numerator is actual original-cohort service/charge A_s_i once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_treatment_p`
- Sources: `ilcd-attributional-2010`

###### Actual treatment service for Removed pallet wood waste (`removed_pallet_wood_treatment`)

Conditional only for the actual one treatment/provider service of the specific removed pallet wood waste outlet. Use measured actual accepted wet treatment-feed kg and qualify the actual receiver operation, emissions, residues, transport and included boundary; if its provider uses another extensive unit, collect the real native unit/state conversion before numerical use. This is burden/service demand, not a second physical waste leg. A mixed outlet has one treatment owner and no extra component treatment purchase; absent source-pool outlets have no separate treatment service. Actual onsite treatment is expanded into its real material, energy, water and species exchanges instead of duplicated with a whole offsite provider. Preserve ordinary failure/sample/sale and actual treatment load; no automatic credit or T_other transfer. Actual missing provider identity/route/conversion remains explicit, never assumed zero.

- Selected flow: Treatment service for Removed pallet wood waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_treatment_p. Its numerator is actual original-cohort service/charge A_s_i once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_treatment_p`
- Sources: `ilcd-attributional-2010`

###### Actual treatment service for Removed pallet steel nail waste (`removed_pallet_nail_treatment`)

Conditional only for the actual one treatment/provider service of the specific removed pallet steel nail waste outlet. Use measured actual accepted wet treatment-feed kg and qualify the actual receiver operation, emissions, residues, transport and included boundary; if its provider uses another extensive unit, collect the real native unit/state conversion before numerical use. This is burden/service demand, not a second physical waste leg. A mixed outlet has one treatment owner and no extra component treatment purchase; absent source-pool outlets have no separate treatment service. Actual onsite treatment is expanded into its real material, energy, water and species exchanges instead of duplicated with a whole offsite provider. Preserve ordinary failure/sample/sale and actual treatment load; no automatic credit or T_other transfer. Actual missing provider identity/route/conversion remains explicit, never assumed zero.

- Selected flow: Treatment service for Removed pallet steel nail waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_treatment_p. Its numerator is actual original-cohort service/charge A_s_i once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_treatment_p`
- Sources: `ilcd-attributional-2010`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Corrugated shipping carton (`carton_s`)

One actual complete corrugated-paperboard transport carton of the declared construction and configuration, not a collection of cartons, plastic bags, film, liners or other packaging. The compatible atomic Product-flow UUID remains unresolved. Record the actual board/flute/ply configuration, fibre composition, coatings/lamination, wet condition, integral adhesives/fasteners and supplier scope; no generic fibre fraction, treatment, size, weight or lifetime is assumed. Include integral supplied constituents once within the whole carton, while actually separate inserts, tape or other materials retain their own disjoint rows and one upstream owner. Keep this card's existing P/I/ER/S/EO role as defined by the packaging boundary and raw protocol, including packaging_receipt_basis where present; a new provider identity must not change that event definition. Retain the complete measured wet gross quantity and the original event/gate/custody/cohort in the card's stated Mass/kg unit, whether immediately used or retained at closing. Keep opening/closing empty, attached and reusable stock, internal reuse and independently measured material/water-change legs; no stock, burden or economic-share correction shrinks the gross leg. Actual manufacture/service burdens are attributed once separately using the existing original-cohort rule and sole normalization; a gross receipt or outflow alone creates no new manufacture, procurement burden, provider link or credit. Resolve a physically compatible carton identity/provider before binding it; missing identity is disclosed and never replaced with a mixed packaging category or an invented UUID.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_packaging. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`; `glb-kit-delivery`

###### Corrugated shipping carton (`carton_eo`)

One actual complete corrugated-paperboard transport carton of the declared construction and configuration, not a collection of cartons, plastic bags, film, liners or other packaging. The compatible atomic Product-flow UUID remains unresolved. Record the actual board/flute/ply configuration, fibre composition, coatings/lamination, wet condition, integral adhesives/fasteners and supplier scope; no generic fibre fraction, treatment, size, weight or lifetime is assumed. Include integral supplied constituents once within the whole carton, while actually separate inserts, tape or other materials retain their own disjoint rows and one upstream owner. Keep this card's existing P/I/ER/S/EO role as defined by the packaging boundary and raw protocol, including packaging_receipt_basis where present; a new provider identity must not change that event definition. Retain the complete measured wet gross quantity and the original event/gate/custody/cohort in the card's stated Mass/kg unit, whether immediately used or retained at closing. Keep opening/closing empty, attached and reusable stock, internal reuse and independently measured material/water-change legs; no stock, burden or economic-share correction shrinks the gross leg. Actual manufacture/service burdens are attributed once separately using the existing original-cohort rule and sole normalization; a gross receipt or outflow alone creates no new manufacture, procurement burden, provider link or credit. Resolve a physically compatible carton identity/provider before binding it; missing identity is disclosed and never replaced with a mixed packaging category or an invented UUID.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_packaging. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`; `glb-kit-delivery`

###### Leaves with gross shipment — LDPE wrapping film (`film_s`)

One actual LDPE foil article, native Product and Mass; no PET, HDPE resin, EPS cushion or whole bag substitute. Verify actual polymer/additives and provider; layers, core and tape are separately identified whole articles when present, never hidden inside polymer assay. This card is only the actual S direction/event. Its numerator is complete gross V, never a burden vector, stock-corrected consumption or economic share. For a returned or shipped article retain actual whole-article state; a damaged Waste state cannot use this Product identity. Supplier-included I has a physical influx even without another invoice and one upstream owner.  Preserve full wet opening/closing empty, attached-WIP, attached-FG and reusable states; new influx retained in closing stock remains influx. Deduplicate only a proved duplicate same-side OTHER actual-flow term, never stocks, opposite-side flows or card presence. Physical-only disclosure creates no additional purchase/provider burden or credit; the separate charge ledger owns the actual burden once.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_packaging. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`; `glb-kit-delivery`

###### External return sent — LDPE wrapping film (`film_eo`)

One actual LDPE foil article, native Product and Mass; no PET, HDPE resin, EPS cushion or whole bag substitute. Verify actual polymer/additives and provider; layers, core and tape are separately identified whole articles when present, never hidden inside polymer assay. This card is only the actual EO direction/event. Its numerator is complete gross V, never a burden vector, stock-corrected consumption or economic share. For a returned or shipped article retain actual whole-article state; a damaged Waste state cannot use this Product identity. Supplier-included I has a physical influx even without another invoice and one upstream owner.  Preserve full wet opening/closing empty, attached-WIP, attached-FG and reusable states; new influx retained in closing stock remains influx. Deduplicate only a proved duplicate same-side OTHER actual-flow term, never stocks, opposite-side flows or card presence. Physical-only disclosure creates no additional purchase/provider burden or credit; the separate charge ledger owns the actual burden once.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_packaging. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`; `glb-kit-delivery`

###### Leaves with gross shipment — Wooden transport pallet (`pallet_s`)

One whole portable wooden load platform for mechanical handling, transport and storage, within the native manufactured wooden-pallet/load-board/collar Product family at plant and Mass. This is the pallet only, not its repair plank, nail, water or a whole bed. No EURO geometry, species, heat treatment, fixed reuse count or transport share is assumed; declare actual configuration and full wet mass. This card is only the actual S direction/event. Its numerator is complete gross V, never a burden vector, stock-corrected consumption or economic share. For a returned or shipped article retain actual whole-article state; a damaged Waste state cannot use this Product identity. Supplier-included I has a physical influx even without another invoice and one upstream owner.  Preserve full wet opening/closing empty, attached-WIP, attached-FG and reusable states; new influx retained in closing stock remains influx. Deduplicate only a proved duplicate same-side OTHER actual-flow term, never stocks, opposite-side flows or card presence. Physical-only disclosure creates no additional purchase/provider burden or credit; the separate charge ledger owns the actual burden once.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_packaging. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`; `glb-kit-delivery`

###### External return sent — Wooden transport pallet (`pallet_eo`)

One whole portable wooden load platform for mechanical handling, transport and storage, within the native manufactured wooden-pallet/load-board/collar Product family at plant and Mass. This is the pallet only, not its repair plank, nail, water or a whole bed. No EURO geometry, species, heat treatment, fixed reuse count or transport share is assumed; declare actual configuration and full wet mass. This card is only the actual EO direction/event. Its numerator is complete gross V, never a burden vector, stock-corrected consumption or economic share. For a returned or shipped article retain actual whole-article state; a damaged Waste state cannot use this Product identity. Supplier-included I has a physical influx even without another invoice and one upstream owner.  Preserve full wet opening/closing empty, attached-WIP, attached-FG and reusable states; new influx retained in closing stock remains influx. Deduplicate only a proved duplicate same-side OTHER actual-flow term, never stocks, opposite-side flows or card presence. Physical-only disclosure creates no additional purchase/provider burden or credit; the separate charge ledger owns the actual burden once.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_packaging. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`; `glb-kit-delivery`

###### Leaves with gross shipment — Plastic PVAc adhesive pail (`pail_s`)

One actual empty whole plastic adhesive pail, only for an actually purchased pail supply format. The glue TDS lists pails and alternative bottles/cartons; it does not establish polymer, tare, common order or reused-pail suitability. Determine the actual supplied pail polymer and any separate lid/handle/liner by supplier evidence; retain the whole article once with a disjoint component bridge, adding a separately supplied component as its own atom. Glue contents are separate and not pail tare. This card is only the actual S direction/event. Its numerator is complete gross V, never a burden vector, stock-corrected consumption or economic share. For a returned or shipped article retain actual whole-article state; a damaged Waste state cannot use this Product identity. Supplier-included I has a physical influx even without another invoice and one upstream owner.  Preserve full wet opening/closing empty, attached-WIP, attached-FG and reusable states; new influx retained in closing stock remains influx. Deduplicate only a proved duplicate same-side OTHER actual-flow term, never stocks, opposite-side flows or card presence. Physical-only disclosure creates no additional purchase/provider burden or credit; the separate charge ledger owns the actual burden once.

- Selected flow: Plastic adhesive pail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_packaging. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`; `kleiberit-pvac-303`

###### External return sent — Plastic PVAc adhesive pail (`pail_eo`)

One actual empty whole plastic adhesive pail, only for an actually purchased pail supply format. The glue TDS lists pails and alternative bottles/cartons; it does not establish polymer, tare, common order or reused-pail suitability. Determine the actual supplied pail polymer and any separate lid/handle/liner by supplier evidence; retain the whole article once with a disjoint component bridge, adding a separately supplied component as its own atom. Glue contents are separate and not pail tare. This card is only the actual EO direction/event. Its numerator is complete gross V, never a burden vector, stock-corrected consumption or economic share. For a returned or shipped article retain actual whole-article state; a damaged Waste state cannot use this Product identity. Supplier-included I has a physical influx even without another invoice and one upstream owner.  Preserve full wet opening/closing empty, attached-WIP, attached-FG and reusable states; new influx retained in closing stock remains influx. Deduplicate only a proved duplicate same-side OTHER actual-flow term, never stocks, opposite-side flows or card presence. Physical-only disclosure creates no additional purchase/provider burden or credit; the separate charge ledger owns the actual burden once.

- Selected flow: Plastic adhesive pail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_packaging. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`; `kleiberit-pvac-303`

##### Waste flows

###### Actual discarded packaging — Corrugated shipping carton (`carton_w`)

One actual discarded corrugated shipping carton Waste stream, retaining its actual whole article material, contamination and disposition; this is not a manufactured Product reference.  This card is only the actual W direction/event. Its numerator is complete gross V, never a burden vector, stock-corrected consumption or economic share. Use the real single Waste outlet: if this pool leaves in one mixed outlet, measure W in its source subledger and do not emit this component card as an additional exchange. Waste native identity is unresolved here rather than using a manufactured Product. Preserve full wet opening/closing empty, attached-WIP, attached-FG and reusable states; new influx retained in closing stock remains influx. Deduplicate only a proved duplicate same-side OTHER actual-flow term, never stocks, opposite-side flows or card presence. Physical-only disclosure creates no additional purchase/provider burden or credit; the separate charge ledger owns the actual burden once.

- Selected flow: Waste corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_packaging. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`; `glb-kit-delivery`

###### Actual discarded packaging — LDPE wrapping film (`film_w`)

One actual discarded ldpe wrapping film Waste stream, retaining its actual whole article material, contamination and disposition; this is not a manufactured Product reference.  This card is only the actual W direction/event. Its numerator is complete gross V, never a burden vector, stock-corrected consumption or economic share. Use the real single Waste outlet: if this pool leaves in one mixed outlet, measure W in its source subledger and do not emit this component card as an additional exchange. Waste native identity is unresolved here rather than using a manufactured Product. Preserve full wet opening/closing empty, attached-WIP, attached-FG and reusable states; new influx retained in closing stock remains influx. Deduplicate only a proved duplicate same-side OTHER actual-flow term, never stocks, opposite-side flows or card presence. Physical-only disclosure creates no additional purchase/provider burden or credit; the separate charge ledger owns the actual burden once.

- Selected flow: Waste ldpe wrapping film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_packaging. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`; `glb-kit-delivery`

###### Actual discarded packaging — Wooden transport pallet (`pallet_w`)

One actual discarded wooden transport pallet Waste stream, retaining its actual whole article material, contamination and disposition; this is not a manufactured Product reference.  This card is only the actual W direction/event. Its numerator is complete gross V, never a burden vector, stock-corrected consumption or economic share. Use the real single Waste outlet: if this pool leaves in one mixed outlet, measure W in its source subledger and do not emit this component card as an additional exchange. Waste native identity is unresolved here rather than using a manufactured Product. Preserve full wet opening/closing empty, attached-WIP, attached-FG and reusable states; new influx retained in closing stock remains influx. Deduplicate only a proved duplicate same-side OTHER actual-flow term, never stocks, opposite-side flows or card presence. Physical-only disclosure creates no additional purchase/provider burden or credit; the separate charge ledger owns the actual burden once.

- Selected flow: Waste wooden transport pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_packaging. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`; `glb-kit-delivery`

###### Actual discarded packaging — Plastic PVAc adhesive pail (`pail_w`)

One actual discarded plastic pvac adhesive pail Waste stream, retaining its actual whole article material, contamination and disposition; this is not a manufactured Product reference.  This card is only the actual W direction/event. Its numerator is complete gross V, never a burden vector, stock-corrected consumption or economic share. Use the real single Waste outlet: if this pool leaves in one mixed outlet, measure W in its source subledger and do not emit this component card as an additional exchange. Waste native identity is unresolved here rather than using a manufactured Product. Preserve full wet opening/closing empty, attached-WIP, attached-FG and reusable states; new influx retained in closing stock remains influx. Deduplicate only a proved duplicate same-side OTHER actual-flow term, never stocks, opposite-side flows or card presence. Physical-only disclosure creates no additional purchase/provider burden or credit; the separate charge ledger owns the actual burden once.

- Selected flow: Waste plastic pvac adhesive pail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_packaging. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`; `kleiberit-pvac-303`

###### One actual co-collected paper–LDPE–wood packaging waste (`mixed_packaging_waste`)

Conditional only for one real mixed outlet of the stated actual materials. Weigh the whole outlet and independently measured disjoint carton/film/pallet W source pools; their sum reconciles to this outlet within uncertainty, but component W is not added again as separate external exchanges. Add actual pail/other component pool only when truly in that same outlet and revise its specific identity. Treatment/provider occurs once; gross V remains full and no sale credit follows.

- Selected flow: Mixed paper–LDPE–wood packaging waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_packaging. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`

###### Removed pallet wood waste (`removed_pallet_wood`)

One actual removed pallet wood waste for pallet repair, not a whole pallet. This Waste outlet is the actual removed wooden piece at plant, measured as Mass/kg, not the pallet or its steel nail; no global-statistic/default recycling reuse. Collect every real new/used receipt and removed state separately. New influx retained in full wet closing stock remains a real influx; X removes overlap only with another included incoming/outgoing term. Initial material already inside an incoming whole pallet is not a new separate purchase. Failed/unauthorised actual repair retains its material, energy, water and hold/waste history. UUID identity remains unresolved because compatibility with this actual non-agglomerated form is unproven. Generic wood-waste names and origin descriptions do not establish that match or a classification error. Verify actual form, contamination, receiver and provider ownership before binding; retain the real material and treatment load without inventing agglomeration.

- Selected flow: Removed pallet wood waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_maintenance. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_maintenance`
- Sources: `ilcd-attributional-2010`; `usda-wood-handbook-2021`

###### Removed pallet steel nail waste (`removed_pallet_nail`)

One actual removed pallet steel nail waste for pallet repair, not a whole pallet. No whole-pallet/steel-screw Product is substituted for this separate nail or Waste. Collect every real new/used receipt and removed state separately. New influx retained in full wet closing stock remains a real influx; X removes overlap only with another included incoming/outgoing term. Initial material already inside an incoming whole pallet is not a new separate purchase. Failed/unauthorised actual repair retains its material, energy, water and hold/waste history.

- Selected flow: Removed pallet steel nail waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_maintenance. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_maintenance`
- Sources: `ilcd-attributional-2010`; `usda-wood-handbook-2021`

##### Elementary flows

### Process: Actual machinery tools fluid and service (`assets`)

#### Inputs

##### Product flows

###### Steel woodworking saw blade (`steel_blade`)

One actual steel woodworking saw blade; preserve whole physical article/preparation, new/used/removed state, installed fluids and actual full wet stock. The native at-plant GLO steel saw-blade/shear-knife family is an auxiliary cutting article with no quantified wear rate. Narrow it to the single stated steel tool only; a carbide composite or metal-cutting-only provider needs independent compatibility. This physical numerator is full gross V; service/embodied burden is attributed once separately in the actual asset account. Included parts/fluid of an incoming complete machine are not additionally bought; only real additional supply enters these cards. New/repair material retained at closing remains both real influx and complete closing mass; overlap is removed from only another inlet/outlet. Capture failed work, actual contaminant/water phases and receiver treatment. Add every real unlisted new/old tool/repair material atom.

- Selected flow: Steel saw blades or shear knives `970801c9-08c1-4d9c-999d-4b66609430be`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_assets. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `glb-component-machining`; `ilcd-attributional-2010`

###### Steel woodworking drill bit (`drill_bit`)

One actual steel woodworking drill bit; preserve whole physical article/preparation, new/used/removed state, installed fluids and actual full wet stock. No fixed grade, heat value, wear rate, lifetime or offshore/waste-recycling process is justified without actual compatibility. This physical numerator is full gross V; service/embodied burden is attributed once separately in the actual asset account. Included parts/fluid of an incoming complete machine are not additionally bought; only real additional supply enters these cards. New/repair material retained at closing remains both real influx and complete closing mass; overlap is removed from only another inlet/outlet. Capture failed work, actual contaminant/water phases and receiver treatment. Add every real unlisted new/old tool/repair material atom.

- Selected flow: Steel woodworking drill bit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_assets. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `glb-component-machining`; `ilcd-attributional-2010`

###### Steel woodworking planer knife (`planer_knife`)

One actual steel woodworking planer knife; preserve whole physical article/preparation, new/used/removed state, installed fluids and actual full wet stock. No fixed grade, heat value, wear rate, lifetime or offshore/waste-recycling process is justified without actual compatibility. This physical numerator is full gross V; service/embodied burden is attributed once separately in the actual asset account. Included parts/fluid of an incoming complete machine are not additionally bought; only real additional supply enters these cards. New/repair material retained at closing remains both real influx and complete closing mass; overlap is removed from only another inlet/outlet. Capture failed work, actual contaminant/water phases and receiver treatment. Add every real unlisted new/old tool/repair material atom.

- Selected flow: Steel woodworking planer knife
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_assets. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `glb-component-machining`; `ilcd-attributional-2010`

###### Whole petroleum lubricating oil (`lubricant`)

One actual whole petroleum lubricating oil; preserve whole physical article/preparation, new/used/removed state, installed fluids and actual full wet stock. No fixed grade, heat value, wear rate, lifetime or offshore/waste-recycling process is justified without actual compatibility. This physical numerator is full gross V; service/embodied burden is attributed once separately in the actual asset account. Included parts/fluid of an incoming complete machine are not additionally bought; only real additional supply enters these cards. New/repair material retained at closing remains both real influx and complete closing mass; overlap is removed from only another inlet/outlet. Capture failed work, actual contaminant/water phases and receiver treatment. Add every real unlisted new/old tool/repair material atom.

- Selected flow: Whole petroleum lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_assets. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `glb-component-machining`; `ilcd-attributional-2010`

###### New steel machine bearing (`bearing_new`)

One actual steel rolling-element machine bearing in this specific new/used-in/reuse-out event, within the native Ball or roller bearings manufactured Product family, production mix at plant and Mass/kg. Narrow the family to the actual one bearing geometry, steel construction, seals and installed lubricant; any separately supplied seal/fluid is a separate actual atom, but integral contents of an incoming whole bearing are not repurchased. Declare new/used condition and original remaining burden vector without a fixed life. This is neither a complete machine, cutting blade, sliding bush nor a Waste. Gross numerator is complete actual V; retain the full physical influx even if the bearing remains installed at closing. Actual fulfilled machine service and a removed Waste bearing are separate once.

- Selected flow: Ball or roller bearings `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_assets. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `glb-component-machining`; `ilcd-attributional-2010`

###### Used steel machine bearing received (`bearing_old_in`)

One actual steel rolling-element machine bearing in this specific new/used-in/reuse-out event, within the native Ball or roller bearings manufactured Product family, production mix at plant and Mass/kg. Narrow the family to the actual one bearing geometry, steel construction, seals and installed lubricant; any separately supplied seal/fluid is a separate actual atom, but integral contents of an incoming whole bearing are not repurchased. Declare new/used condition and original remaining burden vector without a fixed life. This is neither a complete machine, cutting blade, sliding bush nor a Waste. Gross numerator is complete actual V; retain the full physical influx even if the bearing remains installed at closing. Actual fulfilled machine service and a removed Waste bearing are separate once.

- Selected flow: Ball or roller bearings `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_assets. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `glb-component-machining`; `ilcd-attributional-2010`

###### Woodworking crosscut saw — new (`saw_new`)

One actual woodworking crosscut saw in this new custody event. Native Product is the manufactured wood-working-machine-tool family, production mix at plant, Mass reference. This card narrows that broad physically compatible family to this one functional configured machine; no metal-only machine, board press, timber output or combined equipment list is substituted. Preserve serial/configuration, all integral material/fluid mass, whole new/used gross leg and opening/closing installed stock. Do not double-add an integral component already inside whole machine influx; real later repair additions and moisture stay separate. Numerator is full gross V, not a burden share; fulfilled service and actual embodied-load use are separate. No fixed life, automatic replacement or full machine per kg bed. Actual missing physical event is conditional only with evidence.

- Selected flow: Machine-tools for working wood, cork, bone, hard rubber, hard plastics or similar hard materials, presses for the manufacture of particle board or fibre building board of wood or other ligneous materials and other machinery for treating wood or cork `740d919d-5380-4e2e-b5aa-c374314b9743`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_assets. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `glb-component-machining`; `ilcd-attributional-2010`

###### Woodworking crosscut saw — used_in (`saw_used_in`)

One actual woodworking crosscut saw in this used_in custody event. Native Product is the manufactured wood-working-machine-tool family, production mix at plant, Mass reference. This card narrows that broad physically compatible family to this one functional configured machine; no metal-only machine, board press, timber output or combined equipment list is substituted. Preserve serial/configuration, all integral material/fluid mass, whole new/used gross leg and opening/closing installed stock. Do not double-add an integral component already inside whole machine influx; real later repair additions and moisture stay separate. Numerator is full gross V, not a burden share; fulfilled service and actual embodied-load use are separate. No fixed life, automatic replacement or full machine per kg bed. Actual missing physical event is conditional only with evidence.

- Selected flow: Machine-tools for working wood, cork, bone, hard rubber, hard plastics or similar hard materials, presses for the manufacture of particle board or fibre building board of wood or other ligneous materials and other machinery for treating wood or cork `740d919d-5380-4e2e-b5aa-c374314b9743`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_assets. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `glb-component-machining`; `ilcd-attributional-2010`

###### Woodworking crosscut saw actual capacity service (`saw_service`)

One actual fulfilled service of the woodworking crosscut saw measured in h, with demonstrated capacity/utilisation, real shared-duty driver, provider boundary and original cohort. This is a service rather than whole equipment Mass; keep separate from physical new/used/reuse/waste custody cards. Attribute the real embodied/maintenance service vector once with no fixed lifetime; electricity and real repair materials are recorded separately only outside its actual included provider boundary. Retain performed idle/start-stop/failure/cleanup service and carry only unused/unassigned service/charge. Unknown capacity/provider conversion prevents numerical use, not physical recording.

- Selected flow: Woodworking crosscut saw capacity service
- Flow property / unit: Time / h
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_assets. Its numerator is actual fulfilled service A_asset_i, independent of physical machine mass.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `ilcd-attributional-2010`

###### Woodworking planer — new (`planer_new`)

One actual woodworking planer in this new custody event. Native Product is the manufactured wood-working-machine-tool family, production mix at plant, Mass reference. This card narrows that broad physically compatible family to this one functional configured machine; no metal-only machine, board press, timber output or combined equipment list is substituted. Preserve serial/configuration, all integral material/fluid mass, whole new/used gross leg and opening/closing installed stock. Do not double-add an integral component already inside whole machine influx; real later repair additions and moisture stay separate. Numerator is full gross V, not a burden share; fulfilled service and actual embodied-load use are separate. No fixed life, automatic replacement or full machine per kg bed. Actual missing physical event is conditional only with evidence.

- Selected flow: Machine-tools for working wood, cork, bone, hard rubber, hard plastics or similar hard materials, presses for the manufacture of particle board or fibre building board of wood or other ligneous materials and other machinery for treating wood or cork `740d919d-5380-4e2e-b5aa-c374314b9743`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_assets. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `glb-component-machining`; `ilcd-attributional-2010`

###### Woodworking planer — used_in (`planer_used_in`)

One actual woodworking planer in this used_in custody event. Native Product is the manufactured wood-working-machine-tool family, production mix at plant, Mass reference. This card narrows that broad physically compatible family to this one functional configured machine; no metal-only machine, board press, timber output or combined equipment list is substituted. Preserve serial/configuration, all integral material/fluid mass, whole new/used gross leg and opening/closing installed stock. Do not double-add an integral component already inside whole machine influx; real later repair additions and moisture stay separate. Numerator is full gross V, not a burden share; fulfilled service and actual embodied-load use are separate. No fixed life, automatic replacement or full machine per kg bed. Actual missing physical event is conditional only with evidence.

- Selected flow: Machine-tools for working wood, cork, bone, hard rubber, hard plastics or similar hard materials, presses for the manufacture of particle board or fibre building board of wood or other ligneous materials and other machinery for treating wood or cork `740d919d-5380-4e2e-b5aa-c374314b9743`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_assets. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `glb-component-machining`; `ilcd-attributional-2010`

###### Woodworking planer actual capacity service (`planer_service`)

One actual fulfilled service of the woodworking planer measured in h, with demonstrated capacity/utilisation, real shared-duty driver, provider boundary and original cohort. This is a service rather than whole equipment Mass; keep separate from physical new/used/reuse/waste custody cards. Attribute the real embodied/maintenance service vector once with no fixed lifetime; electricity and real repair materials are recorded separately only outside its actual included provider boundary. Retain performed idle/start-stop/failure/cleanup service and carry only unused/unassigned service/charge. Unknown capacity/provider conversion prevents numerical use, not physical recording.

- Selected flow: Woodworking planer capacity service
- Flow property / unit: Time / h
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_assets. Its numerator is actual fulfilled service A_asset_i, independent of physical machine mass.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `ilcd-attributional-2010`

###### Woodworking mortising and drilling machine — new (`drill_new`)

One actual woodworking mortising and drilling machine in this new custody event. Native Product is the manufactured wood-working-machine-tool family, production mix at plant, Mass reference. This card narrows that broad physically compatible family to this one functional configured machine; no metal-only machine, board press, timber output or combined equipment list is substituted. Preserve serial/configuration, all integral material/fluid mass, whole new/used gross leg and opening/closing installed stock. Do not double-add an integral component already inside whole machine influx; real later repair additions and moisture stay separate. Numerator is full gross V, not a burden share; fulfilled service and actual embodied-load use are separate. No fixed life, automatic replacement or full machine per kg bed. Actual missing physical event is conditional only with evidence.

- Selected flow: Machine-tools for working wood, cork, bone, hard rubber, hard plastics or similar hard materials, presses for the manufacture of particle board or fibre building board of wood or other ligneous materials and other machinery for treating wood or cork `740d919d-5380-4e2e-b5aa-c374314b9743`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_assets. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `glb-component-machining`; `ilcd-attributional-2010`

###### Woodworking mortising and drilling machine — used_in (`drill_used_in`)

One actual woodworking mortising and drilling machine in this used_in custody event. Native Product is the manufactured wood-working-machine-tool family, production mix at plant, Mass reference. This card narrows that broad physically compatible family to this one functional configured machine; no metal-only machine, board press, timber output or combined equipment list is substituted. Preserve serial/configuration, all integral material/fluid mass, whole new/used gross leg and opening/closing installed stock. Do not double-add an integral component already inside whole machine influx; real later repair additions and moisture stay separate. Numerator is full gross V, not a burden share; fulfilled service and actual embodied-load use are separate. No fixed life, automatic replacement or full machine per kg bed. Actual missing physical event is conditional only with evidence.

- Selected flow: Machine-tools for working wood, cork, bone, hard rubber, hard plastics or similar hard materials, presses for the manufacture of particle board or fibre building board of wood or other ligneous materials and other machinery for treating wood or cork `740d919d-5380-4e2e-b5aa-c374314b9743`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_assets. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `glb-component-machining`; `ilcd-attributional-2010`

###### Woodworking mortising and drilling machine actual capacity service (`drill_service`)

One actual fulfilled service of the woodworking mortising and drilling machine measured in h, with demonstrated capacity/utilisation, real shared-duty driver, provider boundary and original cohort. This is a service rather than whole equipment Mass; keep separate from physical new/used/reuse/waste custody cards. Attribute the real embodied/maintenance service vector once with no fixed lifetime; electricity and real repair materials are recorded separately only outside its actual included provider boundary. Retain performed idle/start-stop/failure/cleanup service and carry only unused/unassigned service/charge. Unknown capacity/provider conversion prevents numerical use, not physical recording.

- Selected flow: Woodworking mortising and drilling machine capacity service
- Flow property / unit: Time / h
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_assets. Its numerator is actual fulfilled service A_asset_i, independent of physical machine mass.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `ilcd-attributional-2010`

###### Woodworking sander — new (`sander_new`)

One actual woodworking sander in this new custody event. Native Product is the manufactured wood-working-machine-tool family, production mix at plant, Mass reference. This card narrows that broad physically compatible family to this one functional configured machine; no metal-only machine, board press, timber output or combined equipment list is substituted. Preserve serial/configuration, all integral material/fluid mass, whole new/used gross leg and opening/closing installed stock. Do not double-add an integral component already inside whole machine influx; real later repair additions and moisture stay separate. Numerator is full gross V, not a burden share; fulfilled service and actual embodied-load use are separate. No fixed life, automatic replacement or full machine per kg bed. Actual missing physical event is conditional only with evidence.

- Selected flow: Machine-tools for working wood, cork, bone, hard rubber, hard plastics or similar hard materials, presses for the manufacture of particle board or fibre building board of wood or other ligneous materials and other machinery for treating wood or cork `740d919d-5380-4e2e-b5aa-c374314b9743`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_assets. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `glb-component-machining`; `ilcd-attributional-2010`

###### Woodworking sander — used_in (`sander_used_in`)

One actual woodworking sander in this used_in custody event. Native Product is the manufactured wood-working-machine-tool family, production mix at plant, Mass reference. This card narrows that broad physically compatible family to this one functional configured machine; no metal-only machine, board press, timber output or combined equipment list is substituted. Preserve serial/configuration, all integral material/fluid mass, whole new/used gross leg and opening/closing installed stock. Do not double-add an integral component already inside whole machine influx; real later repair additions and moisture stay separate. Numerator is full gross V, not a burden share; fulfilled service and actual embodied-load use are separate. No fixed life, automatic replacement or full machine per kg bed. Actual missing physical event is conditional only with evidence.

- Selected flow: Machine-tools for working wood, cork, bone, hard rubber, hard plastics or similar hard materials, presses for the manufacture of particle board or fibre building board of wood or other ligneous materials and other machinery for treating wood or cork `740d919d-5380-4e2e-b5aa-c374314b9743`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_assets. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `glb-component-machining`; `ilcd-attributional-2010`

###### Woodworking sander actual capacity service (`sander_service`)

One actual fulfilled service of the woodworking sander measured in h, with demonstrated capacity/utilisation, real shared-duty driver, provider boundary and original cohort. This is a service rather than whole equipment Mass; keep separate from physical new/used/reuse/waste custody cards. Attribute the real embodied/maintenance service vector once with no fixed lifetime; electricity and real repair materials are recorded separately only outside its actual included provider boundary. Retain performed idle/start-stop/failure/cleanup service and carry only unused/unassigned service/charge. Unknown capacity/provider conversion prevents numerical use, not physical recording.

- Selected flow: Woodworking sander capacity service
- Flow property / unit: Time / h
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_assets. Its numerator is actual fulfilled service A_asset_i, independent of physical machine mass.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `ilcd-attributional-2010`

###### Wood-dust extractor — new (`extractor_new`)

One actual wood-dust extractor in this new custody event. The actual discarded machine or dust extractor remains its own specific flow; a Product/Waste/type mismatch is not waived by a machinery classification. Preserve serial/configuration, all integral material/fluid mass, whole new/used gross leg and opening/closing installed stock. Do not double-add an integral component already inside whole machine influx; real later repair additions and moisture stay separate. Numerator is full gross V, not a burden share; fulfilled service and actual embodied-load use are separate. No fixed life, automatic replacement or full machine per kg bed. Actual missing physical event is conditional only with evidence.

- Selected flow: wood-dust extractor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_assets. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `glb-component-machining`; `ilcd-attributional-2010`

###### Wood-dust extractor — used_in (`extractor_used_in`)

One actual wood-dust extractor in this used_in custody event. The actual discarded machine or dust extractor remains its own specific flow; a Product/Waste/type mismatch is not waived by a machinery classification. Preserve serial/configuration, all integral material/fluid mass, whole new/used gross leg and opening/closing installed stock. Do not double-add an integral component already inside whole machine influx; real later repair additions and moisture stay separate. Numerator is full gross V, not a burden share; fulfilled service and actual embodied-load use are separate. No fixed life, automatic replacement or full machine per kg bed. Actual missing physical event is conditional only with evidence.

- Selected flow: Used wood-dust extractor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_assets. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `glb-component-machining`; `ilcd-attributional-2010`

###### Wood-dust extractor actual capacity service (`extractor_service`)

One actual fulfilled service of the wood-dust extractor measured in h, with demonstrated capacity/utilisation, real shared-duty driver, provider boundary and original cohort. This is a service rather than whole equipment Mass; keep separate from physical new/used/reuse/waste custody cards. Attribute the real embodied/maintenance service vector once with no fixed lifetime; electricity and real repair materials are recorded separately only outside its actual included provider boundary. Retain performed idle/start-stop/failure/cleanup service and carry only unused/unassigned service/charge. Unknown capacity/provider conversion prevents numerical use, not physical recording.

- Selected flow: Wood-dust extractor capacity service
- Flow property / unit: Time / h
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_assets. Its numerator is actual fulfilled service A_asset_i, independent of physical machine mass.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `ilcd-attributional-2010`

###### Actual treatment service for Discarded steel machine bearing (`bearing_waste_treatment`)

Conditional only for the actual one treatment/provider service of the specific discarded steel machine bearing outlet. Use measured actual accepted wet treatment-feed kg and qualify the actual receiver operation, emissions, residues, transport and included boundary; if its provider uses another extensive unit, collect the real native unit/state conversion before numerical use. This is burden/service demand, not a second physical waste leg. A mixed outlet has one treatment owner and no extra component treatment purchase; absent source-pool outlets have no separate treatment service. Actual onsite treatment is expanded into its real material, energy, water and species exchanges instead of duplicated with a whole offsite provider. Preserve ordinary failure/sample/sale and actual treatment load; no automatic credit or T_other transfer. Actual missing provider identity/route/conversion remains explicit, never assumed zero.

- Selected flow: Treatment service for Discarded steel machine bearing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_treatment_a. Its numerator is actual original-cohort service/charge A_s_i once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_treatment_a`
- Sources: `ilcd-attributional-2010`

###### Actual treatment service for Spent petroleum lubricating oil (`used_oil_treatment`)

Conditional only for the actual one treatment/provider service of the specific spent petroleum lubricating oil outlet. Use measured actual accepted wet treatment-feed kg and qualify the actual receiver operation, emissions, residues, transport and included boundary; if its provider uses another extensive unit, collect the real native unit/state conversion before numerical use. This is burden/service demand, not a second physical waste leg. A mixed outlet has one treatment owner and no extra component treatment purchase; absent source-pool outlets have no separate treatment service. Actual onsite treatment is expanded into its real material, energy, water and species exchanges instead of duplicated with a whole offsite provider. Preserve ordinary failure/sample/sale and actual treatment load; no automatic credit or T_other transfer. Actual missing provider identity/route/conversion remains explicit, never assumed zero.

- Selected flow: Treatment service for Spent petroleum lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_treatment_a. Its numerator is actual original-cohort service/charge A_s_i once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_treatment_a`
- Sources: `ilcd-attributional-2010`

###### Actual treatment service for Spent steel woodworking saw blade (`blade_waste_treatment`)

Conditional only for the actual one treatment/provider service of the specific spent steel woodworking saw blade outlet. Use measured actual accepted wet treatment-feed kg and qualify the actual receiver operation, emissions, residues, transport and included boundary; if its provider uses another extensive unit, collect the real native unit/state conversion before numerical use. This is burden/service demand, not a second physical waste leg. A mixed outlet has one treatment owner and no extra component treatment purchase; absent source-pool outlets have no separate treatment service. Actual onsite treatment is expanded into its real material, energy, water and species exchanges instead of duplicated with a whole offsite provider. Preserve ordinary failure/sample/sale and actual treatment load; no automatic credit or T_other transfer. Actual missing provider identity/route/conversion remains explicit, never assumed zero.

- Selected flow: Treatment service for Spent steel woodworking saw blade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_treatment_a. Its numerator is actual original-cohort service/charge A_s_i once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_treatment_a`
- Sources: `ilcd-attributional-2010`

###### Actual treatment service for Spent steel woodworking drill bit (`drill_bit_waste_treatment`)

Conditional only for the actual one treatment/provider service of the specific spent steel woodworking drill bit outlet. Use measured actual accepted wet treatment-feed kg and qualify the actual receiver operation, emissions, residues, transport and included boundary; if its provider uses another extensive unit, collect the real native unit/state conversion before numerical use. This is burden/service demand, not a second physical waste leg. A mixed outlet has one treatment owner and no extra component treatment purchase; absent source-pool outlets have no separate treatment service. Actual onsite treatment is expanded into its real material, energy, water and species exchanges instead of duplicated with a whole offsite provider. Preserve ordinary failure/sample/sale and actual treatment load; no automatic credit or T_other transfer. Actual missing provider identity/route/conversion remains explicit, never assumed zero.

- Selected flow: Treatment service for Spent steel woodworking drill bit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_treatment_a. Its numerator is actual original-cohort service/charge A_s_i once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_treatment_a`
- Sources: `ilcd-attributional-2010`

###### Actual treatment service for Spent steel woodworking planer knife (`planer_knife_waste_treatment`)

Conditional only for the actual one treatment/provider service of the specific spent steel woodworking planer knife outlet. Use measured actual accepted wet treatment-feed kg and qualify the actual receiver operation, emissions, residues, transport and included boundary; if its provider uses another extensive unit, collect the real native unit/state conversion before numerical use. This is burden/service demand, not a second physical waste leg. A mixed outlet has one treatment owner and no extra component treatment purchase; absent source-pool outlets have no separate treatment service. Actual onsite treatment is expanded into its real material, energy, water and species exchanges instead of duplicated with a whole offsite provider. Preserve ordinary failure/sample/sale and actual treatment load; no automatic credit or T_other transfer. Actual missing provider identity/route/conversion remains explicit, never assumed zero.

- Selected flow: Treatment service for Spent steel woodworking planer knife
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_treatment_a. Its numerator is actual original-cohort service/charge A_s_i once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_treatment_a`
- Sources: `ilcd-attributional-2010`

###### Actual treatment service for Woodworking crosscut saw — waste (`saw_waste_treatment`)

Conditional only for the actual one treatment/provider service of the specific woodworking crosscut saw — waste outlet. Use measured actual accepted wet treatment-feed kg and qualify the actual receiver operation, emissions, residues, transport and included boundary; if its provider uses another extensive unit, collect the real native unit/state conversion before numerical use. This is burden/service demand, not a second physical waste leg. A mixed outlet has one treatment owner and no extra component treatment purchase; absent source-pool outlets have no separate treatment service. Actual onsite treatment is expanded into its real material, energy, water and species exchanges instead of duplicated with a whole offsite provider. Preserve ordinary failure/sample/sale and actual treatment load; no automatic credit or T_other transfer. Actual missing provider identity/route/conversion remains explicit, never assumed zero.

- Selected flow: Treatment service for Waste woodworking crosscut saw
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_treatment_a. Its numerator is actual original-cohort service/charge A_s_i once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_treatment_a`
- Sources: `ilcd-attributional-2010`

###### Actual treatment service for Woodworking planer — waste (`planer_waste_treatment`)

Conditional only for the actual one treatment/provider service of the specific woodworking planer — waste outlet. Use measured actual accepted wet treatment-feed kg and qualify the actual receiver operation, emissions, residues, transport and included boundary; if its provider uses another extensive unit, collect the real native unit/state conversion before numerical use. This is burden/service demand, not a second physical waste leg. A mixed outlet has one treatment owner and no extra component treatment purchase; absent source-pool outlets have no separate treatment service. Actual onsite treatment is expanded into its real material, energy, water and species exchanges instead of duplicated with a whole offsite provider. Preserve ordinary failure/sample/sale and actual treatment load; no automatic credit or T_other transfer. Actual missing provider identity/route/conversion remains explicit, never assumed zero.

- Selected flow: Treatment service for Waste woodworking planer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_treatment_a. Its numerator is actual original-cohort service/charge A_s_i once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_treatment_a`
- Sources: `ilcd-attributional-2010`

###### Actual treatment service for Woodworking mortising and drilling machine — waste (`drill_waste_treatment`)

Conditional only for the actual one treatment/provider service of the specific woodworking mortising and drilling machine — waste outlet. Use measured actual accepted wet treatment-feed kg and qualify the actual receiver operation, emissions, residues, transport and included boundary; if its provider uses another extensive unit, collect the real native unit/state conversion before numerical use. This is burden/service demand, not a second physical waste leg. A mixed outlet has one treatment owner and no extra component treatment purchase; absent source-pool outlets have no separate treatment service. Actual onsite treatment is expanded into its real material, energy, water and species exchanges instead of duplicated with a whole offsite provider. Preserve ordinary failure/sample/sale and actual treatment load; no automatic credit or T_other transfer. Actual missing provider identity/route/conversion remains explicit, never assumed zero.

- Selected flow: Treatment service for Waste woodworking mortising and drilling machine
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_treatment_a. Its numerator is actual original-cohort service/charge A_s_i once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_treatment_a`
- Sources: `ilcd-attributional-2010`

###### Actual treatment service for Woodworking sander — waste (`sander_waste_treatment`)

Conditional only for the actual one treatment/provider service of the specific woodworking sander — waste outlet. Use measured actual accepted wet treatment-feed kg and qualify the actual receiver operation, emissions, residues, transport and included boundary; if its provider uses another extensive unit, collect the real native unit/state conversion before numerical use. This is burden/service demand, not a second physical waste leg. A mixed outlet has one treatment owner and no extra component treatment purchase; absent source-pool outlets have no separate treatment service. Actual onsite treatment is expanded into its real material, energy, water and species exchanges instead of duplicated with a whole offsite provider. Preserve ordinary failure/sample/sale and actual treatment load; no automatic credit or T_other transfer. Actual missing provider identity/route/conversion remains explicit, never assumed zero.

- Selected flow: Treatment service for Waste woodworking sander
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_treatment_a. Its numerator is actual original-cohort service/charge A_s_i once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_treatment_a`
- Sources: `ilcd-attributional-2010`

###### Actual treatment service for Wood-dust extractor — waste (`extractor_waste_treatment`)

Conditional only for the actual one treatment/provider service of the specific wood-dust extractor — waste outlet. Use measured actual accepted wet treatment-feed kg and qualify the actual receiver operation, emissions, residues, transport and included boundary; if its provider uses another extensive unit, collect the real native unit/state conversion before numerical use. This is burden/service demand, not a second physical waste leg. A mixed outlet has one treatment owner and no extra component treatment purchase; absent source-pool outlets have no separate treatment service. Actual onsite treatment is expanded into its real material, energy, water and species exchanges instead of duplicated with a whole offsite provider. Preserve ordinary failure/sample/sale and actual treatment load; no automatic credit or T_other transfer. Actual missing provider identity/route/conversion remains explicit, never assumed zero.

- Selected flow: Treatment service for Waste wood-dust extractor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_treatment_a. Its numerator is actual original-cohort service/charge A_s_i once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_treatment_a`
- Sources: `ilcd-attributional-2010`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Used steel machine bearing sent for reuse (`bearing_out`)

One actual steel rolling-element machine bearing in this specific new/used-in/reuse-out event, within the native Ball or roller bearings manufactured Product family, production mix at plant and Mass/kg. Narrow the family to the actual one bearing geometry, steel construction, seals and installed lubricant; any separately supplied seal/fluid is a separate actual atom, but integral contents of an incoming whole bearing are not repurchased. Declare new/used condition and original remaining burden vector without a fixed life. This is neither a complete machine, cutting blade, sliding bush nor a Waste. Gross numerator is complete actual V; retain the full physical influx even if the bearing remains installed at closing. Actual fulfilled machine service and a removed Waste bearing are separate once.

- Selected flow: Ball or roller bearings `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_assets. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `glb-component-machining`; `ilcd-attributional-2010`

###### Woodworking crosscut saw — reuse_out (`saw_reuse_out`)

One actual woodworking crosscut saw in this reuse_out custody event. Native Product is the manufactured wood-working-machine-tool family, production mix at plant, Mass reference. This card narrows that broad physically compatible family to this one functional configured machine; no metal-only machine, board press, timber output or combined equipment list is substituted. Preserve serial/configuration, all integral material/fluid mass, whole new/used gross leg and opening/closing installed stock. Do not double-add an integral component already inside whole machine influx; real later repair additions and moisture stay separate. Numerator is full gross V, not a burden share; fulfilled service and actual embodied-load use are separate. No fixed life, automatic replacement or full machine per kg bed. Actual missing physical event is conditional only with evidence.

- Selected flow: Machine-tools for working wood, cork, bone, hard rubber, hard plastics or similar hard materials, presses for the manufacture of particle board or fibre building board of wood or other ligneous materials and other machinery for treating wood or cork `740d919d-5380-4e2e-b5aa-c374314b9743`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_assets. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `glb-component-machining`; `ilcd-attributional-2010`

###### Woodworking planer — reuse_out (`planer_reuse_out`)

One actual woodworking planer in this reuse_out custody event. Native Product is the manufactured wood-working-machine-tool family, production mix at plant, Mass reference. This card narrows that broad physically compatible family to this one functional configured machine; no metal-only machine, board press, timber output or combined equipment list is substituted. Preserve serial/configuration, all integral material/fluid mass, whole new/used gross leg and opening/closing installed stock. Do not double-add an integral component already inside whole machine influx; real later repair additions and moisture stay separate. Numerator is full gross V, not a burden share; fulfilled service and actual embodied-load use are separate. No fixed life, automatic replacement or full machine per kg bed. Actual missing physical event is conditional only with evidence.

- Selected flow: Machine-tools for working wood, cork, bone, hard rubber, hard plastics or similar hard materials, presses for the manufacture of particle board or fibre building board of wood or other ligneous materials and other machinery for treating wood or cork `740d919d-5380-4e2e-b5aa-c374314b9743`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_assets. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `glb-component-machining`; `ilcd-attributional-2010`

###### Woodworking mortising and drilling machine — reuse_out (`drill_reuse_out`)

One actual woodworking mortising and drilling machine in this reuse_out custody event. Native Product is the manufactured wood-working-machine-tool family, production mix at plant, Mass reference. This card narrows that broad physically compatible family to this one functional configured machine; no metal-only machine, board press, timber output or combined equipment list is substituted. Preserve serial/configuration, all integral material/fluid mass, whole new/used gross leg and opening/closing installed stock. Do not double-add an integral component already inside whole machine influx; real later repair additions and moisture stay separate. Numerator is full gross V, not a burden share; fulfilled service and actual embodied-load use are separate. No fixed life, automatic replacement or full machine per kg bed. Actual missing physical event is conditional only with evidence.

- Selected flow: Machine-tools for working wood, cork, bone, hard rubber, hard plastics or similar hard materials, presses for the manufacture of particle board or fibre building board of wood or other ligneous materials and other machinery for treating wood or cork `740d919d-5380-4e2e-b5aa-c374314b9743`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_assets. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `glb-component-machining`; `ilcd-attributional-2010`

###### Woodworking sander — reuse_out (`sander_reuse_out`)

One actual woodworking sander in this reuse_out custody event. Native Product is the manufactured wood-working-machine-tool family, production mix at plant, Mass reference. This card narrows that broad physically compatible family to this one functional configured machine; no metal-only machine, board press, timber output or combined equipment list is substituted. Preserve serial/configuration, all integral material/fluid mass, whole new/used gross leg and opening/closing installed stock. Do not double-add an integral component already inside whole machine influx; real later repair additions and moisture stay separate. Numerator is full gross V, not a burden share; fulfilled service and actual embodied-load use are separate. No fixed life, automatic replacement or full machine per kg bed. Actual missing physical event is conditional only with evidence.

- Selected flow: Machine-tools for working wood, cork, bone, hard rubber, hard plastics or similar hard materials, presses for the manufacture of particle board or fibre building board of wood or other ligneous materials and other machinery for treating wood or cork `740d919d-5380-4e2e-b5aa-c374314b9743`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_assets. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `glb-component-machining`; `ilcd-attributional-2010`

###### Wood-dust extractor — reuse_out (`extractor_reuse_out`)

One actual wood-dust extractor in this reuse_out custody event. The actual discarded machine or dust extractor remains its own specific flow; a Product/Waste/type mismatch is not waived by a machinery classification. Preserve serial/configuration, all integral material/fluid mass, whole new/used gross leg and opening/closing installed stock. Do not double-add an integral component already inside whole machine influx; real later repair additions and moisture stay separate. Numerator is full gross V, not a burden share; fulfilled service and actual embodied-load use are separate. No fixed life, automatic replacement or full machine per kg bed. Actual missing physical event is conditional only with evidence.

- Selected flow: Used wood-dust extractor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_assets. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `glb-component-machining`; `ilcd-attributional-2010`

##### Waste flows

###### Discarded steel machine bearing (`bearing_waste`)

One actual discarded steel machine bearing; preserve whole physical article/preparation, new/used/removed state, installed fluids and actual full wet stock. No fixed grade, heat value, wear rate, lifetime or offshore/waste-recycling process is justified without actual compatibility. This physical numerator is full gross V; service/embodied burden is attributed once separately in the actual asset account. Included parts/fluid of an incoming complete machine are not additionally bought; only real additional supply enters these cards. New/repair material retained at closing remains both real influx and complete closing mass; overlap is removed from only another inlet/outlet. Capture failed work, actual contaminant/water phases and receiver treatment. Add every real unlisted new/old tool/repair material atom.

- Selected flow: Discarded steel machine bearing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_assets. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `glb-component-machining`; `ilcd-attributional-2010`

###### Spent petroleum lubricating oil (`used_oil`)

One actual generated spent petroleum lubricating-oil Waste stream at its point of generation, native Mass/kg and treatment route unspecified. The native definition also permits synthetic used lubricant, but this card narrows to the actual whole petroleum preparation and its measured contamination/water, not an assumed 50/25/15 composition, offshore-vessel source, recovered Product or predetermined recycling/combustion/disposal route. Record complete physical drain mass and all installed/remaining fluid stock; independently measure water/contaminants and prevent overlap with another full wastewater outlet. No constituent purchase or automatic waste credit. Actual treatment/provider burden is owned once by its separate treatment-service card.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_assets. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `glb-component-machining`; `ilcd-attributional-2010`

###### Spent steel woodworking saw blade (`blade_waste`)

One actual spent steel woodworking saw blade; preserve whole physical article/preparation, new/used/removed state, installed fluids and actual full wet stock. No fixed grade, heat value, wear rate, lifetime or offshore/waste-recycling process is justified without actual compatibility. This physical numerator is full gross V; service/embodied burden is attributed once separately in the actual asset account. Included parts/fluid of an incoming complete machine are not additionally bought; only real additional supply enters these cards. New/repair material retained at closing remains both real influx and complete closing mass; overlap is removed from only another inlet/outlet. Capture failed work, actual contaminant/water phases and receiver treatment. Add every real unlisted new/old tool/repair material atom.

- Selected flow: Spent steel woodworking saw blade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_assets. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `glb-component-machining`; `ilcd-attributional-2010`

###### Spent steel woodworking drill bit (`drill_bit_waste`)

One actual spent steel woodworking drill bit; preserve whole physical article/preparation, new/used/removed state, installed fluids and actual full wet stock. No fixed grade, heat value, wear rate, lifetime or offshore/waste-recycling process is justified without actual compatibility. This physical numerator is full gross V; service/embodied burden is attributed once separately in the actual asset account. Included parts/fluid of an incoming complete machine are not additionally bought; only real additional supply enters these cards. New/repair material retained at closing remains both real influx and complete closing mass; overlap is removed from only another inlet/outlet. Capture failed work, actual contaminant/water phases and receiver treatment. Add every real unlisted new/old tool/repair material atom.

- Selected flow: Spent steel woodworking drill bit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_assets. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `glb-component-machining`; `ilcd-attributional-2010`

###### Spent steel woodworking planer knife (`planer_knife_waste`)

One actual spent steel woodworking planer knife; preserve whole physical article/preparation, new/used/removed state, installed fluids and actual full wet stock. No fixed grade, heat value, wear rate, lifetime or offshore/waste-recycling process is justified without actual compatibility. This physical numerator is full gross V; service/embodied burden is attributed once separately in the actual asset account. Included parts/fluid of an incoming complete machine are not additionally bought; only real additional supply enters these cards. New/repair material retained at closing remains both real influx and complete closing mass; overlap is removed from only another inlet/outlet. Capture failed work, actual contaminant/water phases and receiver treatment. Add every real unlisted new/old tool/repair material atom.

- Selected flow: Spent steel woodworking planer knife
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_assets. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `glb-component-machining`; `ilcd-attributional-2010`

###### Woodworking crosscut saw — waste (`saw_waste`)

One actual woodworking crosscut saw in this waste custody event. The actual discarded machine or dust extractor remains its own specific flow; a Product/Waste/type mismatch is not waived by a machinery classification. Preserve serial/configuration, all integral material/fluid mass, whole new/used gross leg and opening/closing installed stock. Do not double-add an integral component already inside whole machine influx; real later repair additions and moisture stay separate. Numerator is full gross V, not a burden share; fulfilled service and actual embodied-load use are separate. No fixed life, automatic replacement or full machine per kg bed. Actual missing physical event is conditional only with evidence.

- Selected flow: Waste woodworking crosscut saw
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_assets. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `glb-component-machining`; `ilcd-attributional-2010`

###### Woodworking planer — waste (`planer_waste`)

One actual woodworking planer in this waste custody event. The actual discarded machine or dust extractor remains its own specific flow; a Product/Waste/type mismatch is not waived by a machinery classification. Preserve serial/configuration, all integral material/fluid mass, whole new/used gross leg and opening/closing installed stock. Do not double-add an integral component already inside whole machine influx; real later repair additions and moisture stay separate. Numerator is full gross V, not a burden share; fulfilled service and actual embodied-load use are separate. No fixed life, automatic replacement or full machine per kg bed. Actual missing physical event is conditional only with evidence.

- Selected flow: Waste woodworking planer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_assets. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `glb-component-machining`; `ilcd-attributional-2010`

###### Woodworking mortising and drilling machine — waste (`drill_waste`)

One actual woodworking mortising and drilling machine in this waste custody event. The actual discarded machine or dust extractor remains its own specific flow; a Product/Waste/type mismatch is not waived by a machinery classification. Preserve serial/configuration, all integral material/fluid mass, whole new/used gross leg and opening/closing installed stock. Do not double-add an integral component already inside whole machine influx; real later repair additions and moisture stay separate. Numerator is full gross V, not a burden share; fulfilled service and actual embodied-load use are separate. No fixed life, automatic replacement or full machine per kg bed. Actual missing physical event is conditional only with evidence.

- Selected flow: Waste woodworking mortising and drilling machine
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_assets. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `glb-component-machining`; `ilcd-attributional-2010`

###### Woodworking sander — waste (`sander_waste`)

One actual woodworking sander in this waste custody event. The actual discarded machine or dust extractor remains its own specific flow; a Product/Waste/type mismatch is not waived by a machinery classification. Preserve serial/configuration, all integral material/fluid mass, whole new/used gross leg and opening/closing installed stock. Do not double-add an integral component already inside whole machine influx; real later repair additions and moisture stay separate. Numerator is full gross V, not a burden share; fulfilled service and actual embodied-load use are separate. No fixed life, automatic replacement or full machine per kg bed. Actual missing physical event is conditional only with evidence.

- Selected flow: Waste woodworking sander
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_assets. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `glb-component-machining`; `ilcd-attributional-2010`

###### Wood-dust extractor — waste (`extractor_waste`)

One actual wood-dust extractor in this waste custody event. The actual discarded machine or dust extractor remains its own specific flow; a Product/Waste/type mismatch is not waived by a machinery classification. Preserve serial/configuration, all integral material/fluid mass, whole new/used gross leg and opening/closing installed stock. Do not double-add an integral component already inside whole machine influx; real later repair additions and moisture stay separate. Numerator is full gross V, not a burden share; fulfilled service and actual embodied-load use are separate. No fixed life, automatic replacement or full machine per kg bed. Actual missing physical event is conditional only with evidence.

- Selected flow: Waste wood-dust extractor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s sole already-calculated x_i; collect undivided raw quantities using cp_assets. Its numerator is complete actual gross V_i only; never a manufacturing/service burden vector or stock-corrected share.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `glb-component-machining`; `ilcd-attributional-2010`

##### Elementary flows

## 7. Allocation and Co-product Handling

Industrial manufacturing sources do not establish allocation. The following applies only to the declared attributional multifunctional-process situation. Physical gross exchanges remain complete independently of allocation.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_framework | attributional multifunctionality | Use this hierarchy only for a declared attributional study whose multifunctionality is legitimately solved by allocation. First directly assign dedicated operations and flows; then actual or virtual subdivision to separate the required function and disjoint other functions. Document feasibility and distortion of any unsplit remainder. Do not freely choose physical/economic allocation or consequential substitution. | `ilcd-attributional-2010` |
| a_causality | each remaining burden exchange | For each remaining exchange identify the determining physical causal relationship of that exchange with the actual function: cutting/working duty, actual part content, limiting load/volume with duration, actual storage space-time or measured shared service as appropriate. Different exchanges may need different drivers. Demonstrate it causes the amount; a convenient mass/output or economic ratio is not causality. Apply drivers only to burden vectors, never shrink physical gross V. | `ilcd-attributional-2010` |
| a_residual | genuinely unresolved residual multifunctional-process burden | Only after the previous steps leave a real remainder use contemporaneous actual market values of co-functions in their real state at the same common process gate. Remove downstream finishing, packaging, storage and transport differences to that gate; document negative/zero/nontraded values and unresolved uncertainty rather than fabricate a price or fixed split. This process allocation is distinct from multifunctional-product service equivalence. | `ilcd-attributional-2010` |
| a_waste | ordinary production wastes returns and treatment | Selling offcuts, residue, failed kits, samples or packaging is not automatic coproduct creation, manufacturing/handling/treatment debit, avoided-product credit or a T_other transfer. Retain real gross flow and occurred load. A true distinct other function/cohort with a justified allocation/handover receives a vector once; document actual receiver/treatment boundary and uncertainty. Return/reinspection never procures a new whole bed or creates new production. | `ilcd-attributional-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Every raw cell remains unnormalised in collection. Preserve original unit/state, exact physical event, dimension, cohort and inherited vector. The calculation chain below converts and attributes once, then produces one x_i. Neither protocol aggregation nor flow-card use divides that result again. Actual unresolved identity/provider/quantity, including service-capacity conversion, blocks dependent numeric reuse without inventing a factory measurement.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | manufacture | finished_bed_kit | measurement and release register | cohort; configuration; drawing revision; complete BOM; each physical component; net kit kg; wood moisture; calibration; test method and result; acceptance; disposition; unique release time; original Q_H | Weigh the complete same-configuration unassembled kit on calibrated scales, summing all its actual parts and included functional articles net of all transport packaging. Independently sample wood moisture. Link complete component/hardware/instruction checks, actual fit/sample-assembly and specification tests with unique first release. Record raw net masses and release flags only; sum Q once without any exchange quotient. | kg; item; actual test unit | each configuration and first release | complete cohort including zero release | manufacturing gate and all first-released stock | per reference flow | Raw records; calibrated instruments; actual material/specification; complete cohort/stock/event bridge; uncertainty; actual provider/permission/test/disposition |
| cp_material | manufacture | pine_stock; wood_screw; bed_bolt; barrel_nut; instruction_leaflet; pvac_glue; abrasive_paper | receiving issue and stock record | row_id; lot; supplier; whole wet mass; species; grade; treatment; original units; receipt; issue; opening raw/WIP; closing raw/WIP; inherited vector by exchange; owner; actual permanent joint and glue specification; whole preparation assay subledger; loss; stock-correction status | Weigh whole actual supply receipts/issues and full wet raw/WIP stock; reconcile source/route and unique owner. Count whole preparations/articles once; components and carrier water are disjoint subaccounts. Real onsite joint glue and added water are separate purchased inputs only if actually used. Retain already stock-corrected status. Collect undivided raw only, before unit conversion and attribution; never divide by Q here. | kg; original extensive units | every lot issue and opening/closing | complete period and stock history | actual receiving machining assembly and stores | per reference flow | Raw records; calibrated instruments; actual material/specification; complete cohort/stock/event bridge; uncertainty; actual provider/permission/test/disposition |
| cp_energy_m | manufacture | electricity_m | meter and duty record | row_id; meter; initial/final reading; original unit; cumulative or rate; real interval; voltage; grid and geography; provider; circuit; operation; idle; failure; startstop; cleanup; cohort; H; allocation driver | Retain original cumulative kWh and real rate-time records separately; no integration of cumulative readings again. Convert raw energy once before allocation; assign circuits and actual manufacturing/service duties without overlap. Match real voltage/grid/site/time/provider. Capture all zero-output and failed/idle/cleanup periods. No quotient in collection. The selected native AC flow is CN/China, below1kV, grid-average consumption mix to user. Use it only for an actual matching geography/voltage/supply boundary; other actual supply requires another identity. The UK manufacturing example does not establish applicability of Chinese electricity. | kWh; MJ; actual rate units | every interval and event | whole cohort and observed H | actual meters circuits and service gate | per reference flow | Raw records; calibrated instruments; actual material/specification; complete cohort/stock/event bridge; uncertainty; actual provider/permission/test/disposition |
| cp_energy_h | gate_service | electricity_h | meter and duty record | row_id; meter; initial/final reading; original unit; cumulative or rate; real interval; voltage; grid and geography; provider; circuit; operation; idle; failure; startstop; cleanup; cohort; H; allocation driver | Retain original cumulative kWh and real rate-time records separately; no integration of cumulative readings again. Convert raw energy once before allocation; assign circuits and actual manufacturing/service duties without overlap. Match real voltage/grid/site/time/provider. Capture all zero-output and failed/idle/cleanup periods. No quotient in collection. The selected native AC flow is CN/China, below1kV, grid-average consumption mix to user. Use it only for an actual matching geography/voltage/supply boundary; other actual supply requires another identity. The UK manufacturing example does not establish applicability of Chinese electricity. | kWh; MJ; actual rate units | every interval and event | whole cohort and observed H | actual meters circuits and service gate | per reference flow | Raw records; calibrated instruments; actual material/specification; complete cohort/stock/event bridge; uncertainty; actual provider/permission/test/disposition |
| cp_transport | manufacture | inbound_freight | consignment record | real road leg; whole wet cargo kg; distance; vehicle; mass or volume limit; return; provider; included scope; original unit; cohort | Measure actual complete transported load including packaging and retain actual route/return/provider receipts. Use real mass-distance before justified allocation; preserve full gross cargo. Convert t*km to kg*km once, no default vehicle/distance/load factor. Supplier-included freight has one owner; collection remains undivided. | kg; km; t*km; kg*km | every actual leg | whole supply period | supplier to actual receiving gate | per reference flow | Raw records; calibrated instruments; actual material/specification; complete cohort/stock/event bridge; uncertainty; actual provider/permission/test/disposition |
| cp_water_m | manufacture | tap_water_m; cleaning_wastewater_m; humidity_m_in; water_vapour_m | independent moisture water and state measurement | row_id; phase; actual medium; mass; volume or real rate; temperature; pressure; humidity; substance density; opening/closing full wet stock; independent oven-dry sample; electrical calibration; free/sorbed/carrier/structural/reaction water; real F_in/F_out; overlap id; cohort; H; F_in; F_out; proved_same_side_OTHER_duplicate_X; paired_event_id; actual_originating_process_id; actual_row_id; real_direction; physical_gate; original_cohort_Q_or_Q_H; observed_H_not_divisor | Independently weigh/meter each actual water phase, moisture uptake/desorption and full outlet during ordinary manufacture/storage/handling and actual cleanup/repair. For moisture use representative immediate wet sample weighing and validated oven-dry constant mass or species/temperature-calibrated electrical method; retain volatile-extractive, gradient and instrument limitations. Do not fit two unknowns by residual. Real water influx remains even in closing stock; remove overlap only from another flow term. Raw values only; gas-volume conversion needs actual H2O state/density rather than liquid-water density. Real additions/removals are F; X subtracts only proved duplicates of same-side OTHER actual flows, never stocks or opposite-side quantities. | kg; m3 only with independent state/density; actual rate unit | each event and representative interval | all stocks production and actual H | manufacturing FG-service and consolidated gates | per reference flow | Raw records; calibrated instruments; actual material/specification; complete cohort/stock/event bridge; uncertainty; actual provider/permission/test/disposition |
| cp_water_h | gate_service | tap_water_h; cleaning_wastewater_h; humidity_h_in; water_vapour_h | independent moisture water and state measurement | row_id; phase; actual medium; mass; volume or real rate; temperature; pressure; humidity; substance density; opening/closing full wet stock; independent oven-dry sample; electrical calibration; free/sorbed/carrier/structural/reaction water; real F_in/F_out; overlap id; cohort; H; F_in; F_out; proved_same_side_OTHER_duplicate_X; paired_event_id; actual_originating_process_id; actual_row_id; real_direction; physical_gate; original_cohort_Q_or_Q_H; observed_H_not_divisor | Independently weigh/meter each actual water phase, moisture uptake/desorption and full outlet during ordinary manufacture/storage/handling and actual cleanup/repair. For moisture use representative immediate wet sample weighing and validated oven-dry constant mass or species/temperature-calibrated electrical method; retain volatile-extractive, gradient and instrument limitations. Do not fit two unknowns by residual. Real water influx remains even in closing stock; remove overlap only from another flow term. Raw values only; gas-volume conversion needs actual H2O state/density rather than liquid-water density. Real additions/removals are F; X subtracts only proved duplicates of same-side OTHER actual flows, never stocks or opposite-side quantities. | kg; m3 only with independent state/density; actual rate unit | each event and representative interval | all stocks production and actual H | manufacturing FG-service and consolidated gates | per reference flow | Raw records; calibrated instruments; actual material/specification; complete cohort/stock/event bridge; uncertainty; actual provider/permission/test/disposition |
| cp_air_m | manufacture | n2_m_in; n2_m_out; o2_m_in; o2_m_out; ar_m_in; ar_m_out; ambient_co2_m_in; ambient_co2_m_out; pine_dust_air | species and gas-flow measurement | row_id; actual species; CAS if molecular; phase; medium; inlet/outlet; actual fraction; cumulative volume; real rate if any; time; temperature; pressure; humidity; particle-size cuts; captured/escaped split; carbon origin; cohort | Measure actual complete gross species and real escaped particulate with independent state/composition evidence; integrate only real rate, use cumulative volume once. No default air composition, molecular inference from total indicators, air-plus-species overlap or nested particle-bin sum. Actual separately supplied gas has its own Product identity and disjoint component bridge. Raw values remain undivided. Distinguish local free atmospheric Resource from gas/water already inside supplied timber, a whole preparation, equipment or purchased gas Product. Contained constituents have that single upstream owner and nonadditive subaccounts, not another free Resource intake. A real separately purchased compressed-air/gas Product needs its own atomic card, state/pressure/native-property interface and one provider; internal air handoffs cancel while all real compression/ventilation energy and release remains. Gross molecular transfer and true net environmental change are different. | kg; actual volume and state; actual rate unit | every measured operating or ambient interval | all modes and observed H | actual intake and exhaust media | per reference flow | Raw records; calibrated instruments; actual material/specification; complete cohort/stock/event bridge; uncertainty; actual provider/permission/test/disposition |
| cp_air_h | gate_service | n2_h_in; n2_h_out; o2_h_in; o2_h_out; ar_h_in; ar_h_out; ambient_co2_h_in; ambient_co2_h_out | species and gas-flow measurement | row_id; actual species; CAS if molecular; phase; medium; inlet/outlet; actual fraction; cumulative volume; real rate if any; time; temperature; pressure; humidity; particle-size cuts; captured/escaped split; carbon origin; cohort | Measure actual complete gross species and real escaped particulate with independent state/composition evidence; integrate only real rate, use cumulative volume once. No default air composition, molecular inference from total indicators, air-plus-species overlap or nested particle-bin sum. Actual separately supplied gas has its own Product identity and disjoint component bridge. Raw values remain undivided. Distinguish local free atmospheric Resource from gas/water already inside supplied timber, a whole preparation, equipment or purchased gas Product. Contained constituents have that single upstream owner and nonadditive subaccounts, not another free Resource intake. A real separately purchased compressed-air/gas Product needs its own atomic card, state/pressure/native-property interface and one provider; internal air handoffs cancel while all real compression/ventilation energy and release remains. Gross molecular transfer and true net environmental change are different. | kg; actual volume and state; actual rate unit | every measured operating or ambient interval | all modes and observed H | actual intake and exhaust media | per reference flow | Raw records; calibrated instruments; actual material/specification; complete cohort/stock/event bridge; uncertainty; actual provider/permission/test/disposition |
| cp_waste | manufacture | pine_offcut; pine_residue; spent_abrasive; mixed_machining_waste; glue_residue | outlet and treatment record | row_id; outlet; source pool; whole wet mass; moisture; contamination; separate or mixed; receiver; treatment; sale; sample/failure; inherited vector; burden owner | Weigh each real outlet and all retained residue; determine actual treatment once. A genuine mixed outlet has one full Waste exchange with independently measured disjoint source pools, never add its total and constituents as separate outputs. Ordinary failure/sample/sale remains with actual manufacturing/treatment burden unless a real distinct other function/cohort receives a justified one-time vector. Collect complete raw V separately from attributed burden, no quotient. | kg; actual receiver unit | every bin dispatch and stock close | whole production period | actual outlet and receiver gates | per reference flow | Raw records; calibrated instruments; actual material/specification; complete cohort/stock/event bridge; uncertainty; actual provider/permission/test/disposition |
| cp_fg | gate_service | bed_dispatch; bed_return; bed_discard | original-cohort release and delivery history | original release id; original Q_H; H; opening/closing FG; each inherited vector; gross G; actual R; original shipment; returned state and mass; new parts; water; loss; permission; actual work; posttests; acceptance; hold/waste; F_in; F_out; proved_same_side_OTHER_duplicate_X; paired_event_id; actual_originating_process_id; actual_row_id; real_direction; physical_gate; original_cohort_Q_or_Q_H; observed_H_not_divisor | Trace and weigh actual original-cohort complete kits and real damaged/partial states separately. Keep opening/closing wet FG and original manufacturing vector independently of current service increments. Rework/spec permission and tests establish acceptance; unauthorized/failed occurred work still retains all flows/load and actual disposition. No new Q or return-mass guess of original reversal. Raw G/R only; packaging is separate. Original Q_H stays fixed at unique first release and H is an observed horizon, never an additional divisor. Close full actual FG custody as O_FG+T_new+R_ext+F_in-X_in=C_FG+G_ext+W_actual+F_out-X_out. T_new is the matched internal first-release handoff already in Q, cancelling on consolidation. Actual R/G retain independently measured present-state gross mass and original cohort. F is true added/removed matter/water; X only proved same-side OTHER-flow duplication. All unauthorized/failed/held actual work remains even when qualification fails. | kg; actual test unit; item | each event and stock close | original history and actually observed H | FG to actual external receiver | per reference flow | Raw records; calibrated instruments; actual material/specification; complete cohort/stock/event bridge; uncertainty; actual provider/permission/test/disposition |
| cp_packaging | packaging | carton_p; carton_i; carton_er; carton_s; carton_eo; carton_w; carton_charge; film_p; film_i; film_er; film_s; film_eo; film_w; film_charge; pallet_p; pallet_i; pallet_er; pallet_s; pallet_eo; pallet_w; pallet_charge; pail_p; pail_i; pail_er; pail_s; pail_eo; pail_w; pail_charge; mixed_packaging_waste | six-direction ledger and single-owner record | article; actual material; wet tare; whole/component bridge; opening empty attachedWIP attachedFG reusable; P; I; ER; closing same states; gross S; EO; W; mixed outlet/source pool; X_in; X_out; charge owner; unused charge; cohort; Q_H; H; F_in; F_out; proved_same_side_OTHER_duplicate_X; paired_event_id; actual_originating_process_id; actual_row_id; real_direction; physical_gate; original_cohort_Q_or_Q_H; observed_H_not_divisor ; packaging receipt origin; payment/non-purchase evidence; owner/custodian; same-item prior outward ID | Weigh all actual six events for each real article; supplier-included I stays physical even without another invoice. Retain full wet opening/closing states and real repair/water influx even if still held. X deduplicates only another included incoming/outgoing term. Internal reuse cancels. One mixed outlet uses disjoint pool-W subledgers, not duplicate component outputs. Wholearticle/tare/content and components are disjoint. Gross V has no stock/economic correction; actual service charge is independently attributed once; no quotient in collection. For each actual whole packaging pool close O+P+I+ER+F_in-X_in=C+S+EO+W+F_out-X_out. O/C are disjoint full wet empty, attached-WIP, attached-FG and reusable stocks. F_in/F_out are independently measured real material or liquid/atmospheric-water additions/removals, never fitted residuals. X subtracts only proved duplicate SAME-side OTHER actual-flow terms linked by event IDs; never stocks, opposite-side flows, card presence or true newly retained influx. Whole supplied articles and constituents are nonadditive; separately supplied onsite components need disjoint receipts or a measured component-to-assembly bridge and paired internal transfers cancelling on consolidation. Natural moisture exchange needs no invented repair or permission. S follows actual gross dispatch, not Q. For one actual mixed outlet use its whole total OR independently measured origin-W partitions, not total plus children or duplicate providers. Actual separate W outlets require actual separate evidence. Actual unknown/damaged Product/Waste states remain recorded with their compatible identity pending, never forced reusable Product.  For packaging only, apply packaging_receipt_basis; standalone non-purchase is I, never invented ER or X. | kg; original count with independently measured tare | each actual six-leg and stock event | full matched cohort and H | empty WIP FG reusable and external return/waste gates | per reference flow | Raw records; calibrated instruments; actual material/specification; complete cohort/stock/event bridge; uncertainty; actual provider/permission/test/disposition |
| cp_maintenance | packaging | pallet_repair_plank; pallet_repair_nail; removed_pallet_wood; removed_pallet_nail | repair stock and material record | part; actual new/used; whole mass; included bridge; opening/closing wet stock; real incoming; real outgoing; water; overlap id; original cohort; permission; actual work; test; disposition; provider; F_in; F_out; proved_same_side_OTHER_duplicate_X; paired_event_id; actual_originating_process_id; actual_row_id; real_direction; physical_gate; original_cohort_Q_or_Q_H; observed_H_not_divisor | Weigh actual separate repair input/outlet; retain full wet stock and real added input simultaneously. Parts already in a whole received pallet are not new added purchases. X deduplicates only the identical other incoming/outgoing term; no stock-retention cancellation. Unauthorized/failed occurred work retains its energy/water/parts and disposition. Raw values and actual provider load ownership separate, never divide here. For each actual whole packaging pool close O+P+I+ER+F_in-X_in=C+S+EO+W+F_out-X_out. O/C are disjoint full wet empty, attached-WIP, attached-FG and reusable stocks. F_in/F_out are independently measured real material or liquid/atmospheric-water additions/removals, never fitted residuals. X subtracts only proved duplicate SAME-side OTHER actual-flow terms linked by event IDs; never stocks, opposite-side flows, card presence or true newly retained influx. Whole supplied articles and constituents are nonadditive; separately supplied onsite components need disjoint receipts or a measured component-to-assembly bridge and paired internal transfers cancelling on consolidation. Natural moisture exchange needs no invented repair or permission. S follows actual gross dispatch, not Q. For one actual mixed outlet use its whole total OR independently measured origin-W partitions, not total plus children or duplicate providers. Actual separate W outlets require actual separate evidence. Actual unknown/damaged Product/Waste states remain recorded with their compatible identity pending, never forced reusable Product. | kg; actual extensive unit | each receipt repair removal and stock date | actual service H and stock history | actual pallet and part boundaries | per reference flow | Raw records; calibrated instruments; actual material/specification; complete cohort/stock/event bridge; uncertainty; actual provider/permission/test/disposition |
| cp_assets | assets | steel_blade; drill_bit; planer_knife; lubricant; bearing_new; bearing_old_in; bearing_out; bearing_waste; used_oil; blade_waste; drill_bit_waste; planer_knife_waste; saw_new; saw_used_in; saw_reuse_out; saw_waste; saw_service; planer_new; planer_used_in; planer_reuse_out; planer_waste; planer_service; drill_new; drill_used_in; drill_reuse_out; drill_waste; drill_service; sander_new; sander_used_in; sander_reuse_out; sander_waste; sander_service; extractor_new; extractor_used_in; extractor_reuse_out; extractor_waste; extractor_service | physical asset register and service record | serial; configuration; whole mass; integral fluid; opening installed; new receipt; used receipt; actual repair additions; removed worn material; reusable outward; waste; closing wet stock; included-component bridge; service hours; actual capacity; utilisation; driver; provider vector; unused/unassigned service; cohort; permission/test/disposition; F_in; F_out; proved_same_side_OTHER_duplicate_X; paired_event_id; actual_originating_process_id; actual_row_id; real_direction; physical_gate; original_cohort_Q_or_Q_H; observed_H_not_divisor | Keep each real machine/tool/material/fluid full physical stock and gross legs separately from actual fulfilled service hours and embodied-load use. New/used repair inputs and water remain influx even if retained at closing; integral components already inside whole incoming machines are not bought again. Assign actual service/provider vector once by demonstrated use/capacity and exchange-specific cause; no fixed life or machine mass per kg. Retain idle/failure/cleanup and failed/unauthorised actual repairs. Carry only unused/unassigned service/charge. Unknown capacity/provider conversion remains unknown; collect raw only. For each actual machine/tool/part/fluid pool close O+R_in+F_in-X_in=C+R_out+F_out-X_out in its reconciled physical unit. R are real external whole-article receipts/removals including actual Waste retirement; F are true measured component/water additions/removals. X only subtracts paired proved duplicate SAME-side OTHER actual flows, never stocks/opposite legs or true retained influx. Keep whole/component supplies disjoint or use a measured assembly bridge with cancelling internal handoffs. One actual mixed outlet total OR independently measured origin partitions has one provider. No replacement, repair, return or moisture event is invented. | kg; h; actual native extensive unit | each actual asset event and service interval | actual opening history through cohort and H | installed assets material stores and real providers | per reference flow | Raw records; calibrated instruments; actual material/specification; complete cohort/stock/event bridge; uncertainty; actual provider/permission/test/disposition |
| cp_treatment_m | manufacture | cleaning_wastewater_m_treatment; pine_offcut_treatment; pine_residue_treatment; spent_abrasive_treatment; mixed_machining_waste_treatment; glue_residue_treatment | receiver treatment service record | waste outlet id; actual wet feed kg; original provider unit; state conversion; receiver; actual treatment operation; included transport; emissions and residues boundary; provider owner; actual onsite split; cohort; actual incurred load; missing evidence | Collect the actual single treatment provider activity and full included boundary for each real outlet, before allocation or quotient. A mixed outlet has one provider and its source pools are not additional treatment purchases. If treatment is onsite, collect each actual material, energy, water and species instead of repeating a whole provider; qualify actual native unit and independently measured state conversion before using kg demand. Sale or external removal never deletes an ordinary incurred manufacturing/treatment burden; zero provider invoice is not proof of zero treatment. Retain undivided raw quantities and uncertainty. | kg actual wet feed; original native service unit | every actual outlet and treatment event | full original cohort and actual H | actual outlet receiver and treatment gate | per reference flow | Raw records; calibrated instruments; actual material/specification; complete cohort/stock/event bridge; uncertainty; actual provider/permission/test/disposition |
| cp_treatment_h | gate_service | cleaning_wastewater_h_treatment; bed_discard_treatment | receiver treatment service record | waste outlet id; actual wet feed kg; original provider unit; state conversion; receiver; actual treatment operation; included transport; emissions and residues boundary; provider owner; actual onsite split; cohort; actual incurred load; missing evidence | Collect the actual single treatment provider activity and full included boundary for each real outlet, before allocation or quotient. A mixed outlet has one provider and its source pools are not additional treatment purchases. If treatment is onsite, collect each actual material, energy, water and species instead of repeating a whole provider; qualify actual native unit and independently measured state conversion before using kg demand. Sale or external removal never deletes an ordinary incurred manufacturing/treatment burden; zero provider invoice is not proof of zero treatment. Retain undivided raw quantities and uncertainty. | kg actual wet feed; original native service unit | every actual outlet and treatment event | full original cohort and actual H | actual outlet receiver and treatment gate | per reference flow | Raw records; calibrated instruments; actual material/specification; complete cohort/stock/event bridge; uncertainty; actual provider/permission/test/disposition |
| cp_treatment_p | packaging | carton_w_treatment; film_w_treatment; pallet_w_treatment; pail_w_treatment; mixed_packaging_waste_treatment; removed_pallet_wood_treatment; removed_pallet_nail_treatment | receiver treatment service record | waste outlet id; actual wet feed kg; original provider unit; state conversion; receiver; actual treatment operation; included transport; emissions and residues boundary; provider owner; actual onsite split; cohort; actual incurred load; missing evidence | Collect the actual single treatment provider activity and full included boundary for each real outlet, before allocation or quotient. A mixed outlet has one provider and its source pools are not additional treatment purchases. If treatment is onsite, collect each actual material, energy, water and species instead of repeating a whole provider; qualify actual native unit and independently measured state conversion before using kg demand. Sale or external removal never deletes an ordinary incurred manufacturing/treatment burden; zero provider invoice is not proof of zero treatment. Retain undivided raw quantities and uncertainty. | kg actual wet feed; original native service unit | every actual outlet and treatment event | full original cohort and actual H | actual outlet receiver and treatment gate | per reference flow | Raw records; calibrated instruments; actual material/specification; complete cohort/stock/event bridge; uncertainty; actual provider/permission/test/disposition |
| cp_treatment_a | assets | bearing_waste_treatment; used_oil_treatment; blade_waste_treatment; drill_bit_waste_treatment; planer_knife_waste_treatment; saw_waste_treatment; planer_waste_treatment; drill_waste_treatment; sander_waste_treatment; extractor_waste_treatment | receiver treatment service record | waste outlet id; actual wet feed kg; original provider unit; state conversion; receiver; actual treatment operation; included transport; emissions and residues boundary; provider owner; actual onsite split; cohort; actual incurred load; missing evidence | Collect the actual single treatment provider activity and full included boundary for each real outlet, before allocation or quotient. A mixed outlet has one provider and its source pools are not additional treatment purchases. If treatment is onsite, collect each actual material, energy, water and species instead of repeating a whole provider; qualify actual native unit and independently measured state conversion before using kg demand. Sale or external removal never deletes an ordinary incurred manufacturing/treatment burden; zero provider invoice is not proof of zero treatment. Retain undivided raw quantities and uncertainty. | kg actual wet feed; original native service unit | every actual outlet and treatment event | full original cohort and actual H | actual outlet receiver and treatment gate | per reference flow | Raw records; calibrated instruments; actual material/specification; complete cohort/stock/event bridge; uncertainty; actual provider/permission/test/disposition |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_raw_units | all inventory rows | Convert undivided original extensive units to the row native unit once before attribution: MJ=3.6×kWh for electrical energy; kg*km=1000×t*km. Integrate only a true measured rate over its real interval/state. A cumulative volume is already integrated. Density is independent for that actual substance/state; no secondary-property coefficient supplies kg/item or density. | raw_i; unit_i; measured_state; conversion_evidence | U_i | `ilcd-attributional-2010` |
| calc_manufacturing | all inventory rows | For the burden dimension only: A_m_i = B_open_i + U_attributed_i - B_close_i - T_other_i. B vectors are exchange/cohort-specific inherited raw/WIP and unused/unassigned charges. B_close excludes already first-released FG. Ordinary rejects/waste/samples/sales and treatment are not T_other; that transfer requires a real other cohort/function and justified single handover. Already stock-corrected consumption is not stock-corrected again. Never apply this rule to gross V. | B_open_i; U_attributed_i; B_close_i; T_other_i; cohort | A_m_i | `ilcd-attributional-2010` |
| calc_service | all inventory rows | A_s_i is actually performed original-cohort service over H plus assigned prior vector actually used, after justified sharing and one provider ownership. Original Q_H remains its denominator. Closing FG does not reverse performed service; only unused/unassigned charge/service is carried forward. Keep historical manufacturing burdens and gross physical custody separately. Unauthorized/failed occurred work retains its real increments and hold/waste outcome. | original_cohort; Q_H; H; actual_service; assigned_prior_vector; unused_charge; allocation_evidence | A_s_i | `ilcd-attributional-2010` |
| calc_asset_service | all inventory rows | Derive actual fulfilled h and one embodied/maintenance provider vector from observed use/capacity and exchange-specific justified attribution. Physical whole-machine/parts/fluid stock remains separate. No fixed lifetime, full-machine purchase per kg or guessed capacity/provider factor; missing conversion prevents dependent numerical results. Keep unused/unassigned service/charge only as carryover. | fulfilled_h; actual_capacity; provider_vector; cohort; driver | A_asset_i | `ilcd-attributional-2010` |
| calc_gross | all inventory rows | For each gross card N_i = V_i, its actual complete physical leg in the row extensive unit. V_i is never B_open+U-B_close, attributed manufacturing/service burden or an economic share. Real influx remains even in full closing stock. X removes only proved duplicate same-side OTHER actual-flow terms, never stocks, opposite-side flows or card presence. Gross disclosure creates no second purchase/provider burden/treatment or credit; assign any true burden separately once. | V_i; event_id; actual_state; disjoint_bridge; cohort | N_gross_i | `ilcd-attributional-2010` |
| calc_numerator | all inventory rows | Select one applicable numerator dimension per ledger cell: manufacturing burden A_m_i; original-cohort service/charge A_s_i; actual asset service A_asset_i; gross disclosure complete V_i. Do not add gross disclosure into burden totals or apply burden allocation/stock correction to V. Split different actual cohorts/functions with their own original denominator, not a blended mass. | A_m_i; A_s_i; A_asset_i; V_i; dimension; cohort | N_i | `ilcd-attributional-2010` |
| calc_denominator | all inventory rows | Q = sum of calibrated measured net complete-kit kg uniquely first quality-released in the configuration/cohort. Q_c is Q for manufacturing or original Q_H for actual service/gross/asset account over H. Keep closing first-released FG in Q. If Q_c=0 retain all actual numerator and physical records without a unit result. H describes observation coverage only and is never a normalization divisor. | net_complete_kit_kg; unique_release_id; original_Q_H; H | Q_c | `glb-untreated-london`; `ilcd-attributional-2010` |
| calc_quotient | all inventory rows | x_i = N_i / Q_c. This is the only division by the first-release denominator, after raw-unit conversion and one applicable numerator attribution or complete gross V_i. Each card and aggregation references this already-calculated x_i without dividing again. Reference output is exactly 1 kg. Q_c=0 has no unit x_i and retains real load. | N_i; Q_c | x_i | `ilcd-attributional-2010` |
| calc_pack_balance | all inventory rows | For each actual whole packaging pool close O+P+I+ER+F_in-X_in=C+S+EO+W+F_out-X_out. O/C are disjoint full wet empty, attached-WIP, attached-FG and reusable stocks. F_in/F_out are independently measured real material or liquid/atmospheric-water additions/removals, never fitted residuals. X subtracts only proved duplicate SAME-side OTHER actual-flow terms linked by event IDs; never stocks, opposite-side flows, card presence or true newly retained influx. Whole supplied articles and constituents are nonadditive; separately supplied onsite components need disjoint receipts or a measured component-to-assembly bridge and paired internal transfers cancelling on consolidation. Natural moisture exchange needs no invented repair or permission. S follows actual gross dispatch, not Q. For one actual mixed outlet use its whole total OR independently measured origin-W partitions, not total plus children or duplicate providers. Actual separate W outlets require actual separate evidence. Actual unknown/damaged Product/Waste states remain recorded with their compatible identity pending, never forced reusable Product. | O; P; I; ER; C; S; EO; W; F_in; F_out; X_in; X_out; paired_event_ids; disjoint_source_pools | independent_packaging_reconciliation | `ilcd-attributional-2010` |
| calc_physical | all inventory rows | At manufacturing, FG-service and consolidated gates: full opening wet stock plus all true external inflows equals full closing wet stock plus all true external outflows with only independently evidenced transformations/measurement uncertainty. Cancel matched internal first-release transfer; keep external G/R and complete FG once. Wood-only u=(wet-dry)/dry and dry=wet/(1+u); exclude metal/adhesive/packaging fractions before this wood relation. Relevant element, origin-specific carbon and water-phase closures need independent constraints; no two-unknown residual fit. | full_O; gross_in; full_C; gross_out; independent_phases; independent_elements; carbon_origin | independent_physical_reconciliation | `usda-wood-handbook-2021`; `ilcd-attributional-2010` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | whole kit and all rows | Match actual whole manufactured terminal and every native CAS/material/form/route/grade/geography/medium/type/property. Broad compatible family is narrowed by complete row context, not classification or SKU name alone; no hard conflict waiver. | exact native records and chain; actual BOM/supplier/specification |
| dq_primary | source synthesis | Distinguish whole-product manufacturer, component operation, actual supply form, formulation and attributional method. No common SKU/order/factory or quantitative defaults are implied. Retain adjacent coated/hardwood/adjustable/storage/mattress alternatives and current applicability limitations. | complete primary originals and context; actual qualification |
| dq_measurement | Q and every raw event | Measure calibrated net whole-kit mass and independent moisture by configuration; actual extensive units and phase-specific state/density; representative sampling/uncertainty. No future site amount, geometry, load, formaldehyde limit, yield, energy or lifetime is invented. | raw weights/meters; calibration; sample method; actual tests |
| dq_completeness | full period upstream and cohorts | Include zero/failed/startstop/idle/cleanup/rework; each raw/WIP/FG inherited exchange vector; supplier-included packaging and one actual upstream owner. Actual event absence needs evidence; an unknown identity/provider/quantity is not zero. | complete stock/event/cohort ledger; provider boundary; explicit gaps |
| dq_gross | each physical gate packaging and asset | Keep complete gross legs independent of burden allocation; all actual six directions and stock/repair/water phases. New influx remains with full closing stock; whole/component bridges disjoint and each true mixed outlet counted once. | independent wet-mass/element/water and six-leg closures |
| dq_service | original-cohort work and claims | Keep original Q_H/H, matched gross G/R, original manufacturing history and actual new increments; no closing-FG removal of performed service. Permission/posttests support acceptance, not deletion of failed occurred work. Engineering checks do not approve methodology, translation, mapping or publication. | release/history; actual work/tests/disposition; review state |

## 9. Validation Rules

These requirements apply before a concrete dataset is used. Unknown data remain unknown; engineering inspection checks declared relationships and source fidelity, not actual site measurements or scientific approval.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_whole | reference kit and every exchange | Require complete same-configuration kit BOM, instructions, allowed supply/machining/joint route, actual test/first-release records and physically compatible manufactured Product reference. No wrong CAS, form, grade, route, medium, type, component substitute or versionless identity guess; preserve all native limitations in the selected row. Missing auxiliary/provider evidence remains explicit and blocks only dependent numerical use; a missing whole core identity is a genuine core hold. | `glb-untreated-london`; `glb-kit-delivery`; `ilcd-attributional-2010` |
| v_measurement | Q raw records and sole quotient | Q is sum of actual measured net complete-kit mass first released once, with calibration/configuration/moisture and no packaging. All protocols collect undivided raw readings. Convert units and attribute once before x_i=N_i/Q_c; gross cards use full actual V_i. Collection aggregation and card use reference this same quotient without redivision. Q_c=0 retains actual numerators/flows and produces no unit result. Future unknown quantities cannot be declared measured or passing. | `usda-wood-handbook-2021`; `ilcd-attributional-2010` |
| v_closure | manufacturing service packaging and assets | Independently reconcile all gross wet physical mass and relevant elements/carbon/water at manufacturing, FG-service and consolidated gates; full opening/closing stocks and all six actual packaging legs are retained. New/repair/water inflows remain even if at closing; X only removes duplicate other inlet/outlet. Whole articles and their components never overlap; one mixed outlet is not added beside its component pools. Never infer two unknowns from one residual. | `usda-wood-handbook-2021`; `ilcd-attributional-2010` |
| v_history | burdens cohorts and actual work | Check exchange-specific raw/WIP inherited vectors, first-release FG treatment, actual original Q_H/H and G/R linkage, provider/service single ownership and no second stock correction. Retain performed service and ordinary failure/waste/treatment; T_other requires a true distinct function/cohort and justified handover. Actual postwork permission/tests/acceptance support conformity; unauthorized/failed occurred work is still fully recorded with hold/waste disposition. | `ilcd-attributional-2010` |
| v_quality | completed dataset and claims | Declare source independence, applicability gaps, actual site/time/geography/provider match, uncertainty, absent-event evidence and unresolved auxiliaries honestly. Engineering Schema, fingerprints and finite relationship checks do not establish scientific approval, reviewed translation, mapping acceptance, publication or complete CPC-leaf coverage. | `ilcd-attributional-2010` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Supply the verified actual complete untreated pine kit manufacturing inventory to downstream LCA; declared real original-cohort gate services remain separately disclosed |
| allowed_use | Actual matching terminal/material/route/first-release gate with measured configuration and complete provider/stock/uncertainty disclosure |
| excluded_use | Sleep-service or lifetime equivalence; mattress/whole furnished bedroom; loose support or leg; finished-bed repacking; different principal routes; automatic carbon/recycling credit; net delivery without reviewed historical bridge |
| required_metadata | whole kit configuration and drawing revision; complete head/foot/side/slat/centre-support BOM; all actual supplied hardware and tools; printed or digital assembly-instruction revision; untreated unassembled terminal; Pinus species and legal origin; actual stock sawn/planed gate and moisture; each material provider and supply state; actual joint and optional permanent-subassembly glue permission; whole formulation and separate added water; actual operations and tests; measured net complete-kit mass and calibration; unique first-release cohort and Q; raw/WIP/FG history and each inherited exchange vector; actual site and time; native grade/route/form/geography/media/type and property; energy/water/air state; each package P/I/ER/S/EO/W and upstream owner; assets full physical stock and fulfilled service; actual waste outlets and treatment; original Q_H and observed H; actual postwork permission and posttests; acceptance or hold/waste disposition; allocation drivers and unresolved numerical scope |
| required_quality_disclosure | Actual source/site/time/provider representativeness; unresolved identity/quantity; scientific/translation state; measurement uncertainty; all applicable/absent operations; no certification inferred |
| update_trigger | Changed kit BOM/terminal/species/supply/joining/finish; changed native constraints/provider/site/time; actual new emissions/wastes/services; revised evidence or measurement uncertainty |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `glb-untreated-london` | handbook | Get Laid Beds — London Bed untreated pine configuration; https://www.getlaidbeds.co.uk/wooden-beds/standard-height-beds/london-wooden-bed-frame/untreated/small-single | Whole bed configuration; untreated pine versus coated/hardwood/adjustable/mattress alternatives; mortise/tenon and first complete-kit gate |
| `glb-component-machining` | handbook | Get Laid Beds — Meet the Makers: General Operative Chris; 19 November 2024; https://www.getlaidbeds.co.uk/blog/meet-the-makers-spotlight-on-general-operative-chris | Actual cut solid wood, drilling, sanding and component inspection; stained routes are contrary alternatives, not imposed on untreated kit |
| `glb-hardware-kit` | handbook | Get Laid Beds — Screw-room Steve; 18 September 2024; https://www.getlaidbeds.co.uk/blog/meet-the-makers-spotlight-on-steve-andrews-aka-screw-room-steve | Configuration-specific screw quantities and complete assembly supply; Ottoman mechanism alternatives excluded |
| `glb-kit-delivery` | handbook | Get Laid Beds — Delivery information; https://www.getlaidbeds.co.uk/delivery ; manufacturer whole flat-pack statement at https://www.getlaidbeds.co.uk/ | Complete flat-pack supply and separate customer assembly/delivery options; no customer assembly or mattress purchase in kit manufacture |
| `glb-solid-slats` | handbook | Get Laid Beds — Slat information; https://www.getlaidbeds.co.uk/slats-information | Whole solid-wood slat system and screw-to-batten connection; actual centre support is configuration-specific; no load/life/count default |
| `cashmores-kd-pine` | handbook | Cashmores — Scandinavian redwood PSE product information; https://www.cashmores-timber.co.uk/webshop/planed-timber/45mm-thick-pse/145-x-45mm-6x2-scandinavian-redwood-pse/ | Independent real kiln-dried untreated planed pine supply-form example; no proven common order, dimension, species or quantity default |
| `kleiberit-pvac-303` | handbook | KLEIBERIT 303.0 TDS; version 08:05:2026; https://www.kleiberit.com/fileadmin/Content_new/Produktinformationen/303.0/dbe3030_KSE.pdf | Conditional whole ready-to-use 1K PVAc joint adhesive, actual qualification and cleanup; adjacent 2K/hot pressing alternatives excluded; no numerical recipe |
| `usda-wood-handbook-2021` | official_guidance | USDA Forest Products Laboratory; Wood handbook—wood as an engineering material; FPL-GTR-282 (2021); chapters 4, 8, 10, 13; https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf | Dry-basis wood moisture and independent sampling/calibration; free/sorbed water, fastening and adhesive conditions; no generic density or performance default |
| `ilcd-attributional-2010` | official_guidance | JRC ILCD Handbook General guide for LCA—Detailed guidance (March 2010), attributional §§7.9.2–7.9.3, printed pp255–272; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional subdivision/virtual subdivision, exchange-specific determining physical causality and residual common-process-gate actual-state market value; burden/physical/stock/service accounting design |
| `un-cpc-bedroom-2025` | official_guidance | UNSD CPC 3.0 structure (30 June 2025) and code38170; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/38170 | Classification context only; does not establish methodology, UUID compatibility or accepted mapping |
| `glb-contract-brochure-2025` | handbook | Get Laid Beds Contract Furniture 2025; complete 35-page PDF; https://www.getlaidbeds.co.uk/upload/glb_commercial_brochure.pdf | Whole furniture and adjacent mattress/storage/outdoor alternatives; actual untreated pine finish and leg-style choices; photographs do not prove factory recipe |
