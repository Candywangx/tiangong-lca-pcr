---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.parts-of-furniture-not-made-from-wood
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Manufacture of powder-coated welded steel table-leg assemblies

## 1. Scope and Applicability

This PCR covers manufacture of one independently supplied complete fixed steel furniture table-leg assembly from actual uncoated welded rectangular carbon-steel tube and separate mounting-plate stock: cutting, actual bending/drilling or slotting where specified, fitting and welding the integral mounting structure, grinding/deburring, actual cleaning and mechanical surface preparation, electrostatic application of a whole purchased thermosetting powder, actual thermal cure, specified insert/foot/pad/fastener fitting, inspection and unique first quality release. A leg frame may contain two uprights and a cross-member but is one complete independently released part under its controlled drawing/BOM; paired shipping does not define the reference count. The integral plate and all expressly fitted or supplied components are inside its net complete-part mass.

Exclude a complete table/chair/cabinet, tabletop, raw tube or blank, generic hinge/bolt hardware, machine/structural support, powered/sit-stand or caster bases, wood-capped/wood legs, cast-iron/aluminium/stainless variants, bought finished-part repacking, raw-steel/waxed/liquid-painted/electroplated/PVD/acid-blackened or UV-only finishes, onsite primary steel/tube/powder manufacture, customer tabletop fitting, use and end of life. An upstream supplier-completed weld, coating or included component remains wholly inside its provider gate; never recreate that work onsite. A different principal material, terminal or finishing route needs a fresh applicability assessment.

This is transparent technical synthesis of independent manufacturer sources, not one shared SKU, plant, formulation, current order, certification or measured dataset. Metaco supplies the whole tubular-leg route and release inspections; Semi Exact supports independently shipped steel legs with integral plate/insert and optional feet; ECon supports welding/grinding/cleaning and contrary finishes; GeLan supports round metal-leg manufacture, powder coating, final inspection and material/finish counterexamples; the independent Semi Exact powder-process page supports electrostatic application, oven cure and supplier-defined cure conditions, not use of that oven by the same SKU or GeLan plant. Their example dimensions, thicknesses, cure schedules, finish performance, load/salt-spray tests, life, yield, energy and supplier claims are not universal values or thresholds. Industrial sources do not establish LCA allocation. The broad native finished nonwood-part family is physically compatible only with this whole terminal and its declared restrictions.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.parts-of-furniture-not-made-from-wood |
| classification_refs | CPC 3.0 38169; narrower; current accepted association: `classifications/mappings/cpc-3.0-to-pcr.yaml` and `docs/adr/cpc3-additional34-20261029-38169.md`; complete method scope/exclusions apply, not full-leaf or scientific/translation approval |
| covered_products | This PCR covers manufacture of one independently supplied complete fixed steel furniture table-leg assembly from actual uncoated welded rectangular carbon-steel tube and separate mounting-plate stock: cutting, actual bending/drilling or slotting where specified, fitting and welding the integral mounting structure, grinding/deburring, actual cleaning and mechanical surface preparation, electrostatic application of a whole purchased thermosetting powder, actual thermal cure, specified insert/foot/pad/fastener fitting, inspection and unique first quality release. A leg frame may contain two uprights and a cross-member but is one complete independently released part under its controlled drawing/BOM; paired shipping does not define the reference count. The integral plate and all expressly fitted or supplied components are inside its net complete-part mass. |
| excluded_products | Exclude a complete table/chair/cabinet, tabletop, raw tube or blank, generic hinge/bolt hardware, machine/structural support, powered/sit-stand or caster bases, wood-capped/wood legs, cast-iron/aluminium/stainless variants, bought finished-part repacking, raw-steel/waxed/liquid-painted/electroplated/PVD/acid-blackened or UV-only finishes, onsite primary steel/tube/powder manufacture, customer tabletop fitting, use and end of life. An upstream supplier-completed weld, coating or included component remains wholly inside its provider gate; never recreate that work onsite. A different principal material, terminal or finishing route needs a fresh applicability assessment. |
| representative_product | One first-released complete powder-coated welded rectangular-steel-tube leg assembly with integral mounting plate and declared complete components |
| production_route | Tube/plate receipt → actual cutting/forming/drilling → welding/grinding → actual cleaning/preparation/powder/heat cure → fitting/inspection/unique first release |
| market_state | Independently supplied manufactured complete fixed furniture part; no whole table or raw tube |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture and first release the complete table-leg assembly |
| How much | 1 kg net complete part; normalized portion of the measured whole same-configuration leg, excluding transport packaging |
| How well | Actual controlled drawing/BOM, interface/joints, dimensions/finish and functional inspection/release specification; no universal threshold |
| How long or cycle | One first release over the complete manufacturing cohort; original-cohort service horizon H separately recorded, no lifetime |
| reference_flow_link | `released_part` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Parts of furniture not made from wood `84b811ca-bad2-4990-908c-61ed475caf5c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | controlled leg model/drawing/BOM and complete part/paired-shipment distinction; integral mounting plate and actual holes/slots/joints with interface specification; tube weld seam route and actual steel grades/surface state/dimensions without assumed thickness; complete supplied insert/leveling foot/pad/fastener scope and disjoint make-buy ownership; actual filler and separately supplied shielding gases versus whole premix; whole cleaning/cutting-fluid/powder formulation and concentration/SDS with carrier-water subaccounts; actual surface preparation powder recovery cure state and permission for postwork; manufacturer/spec dimensional joint finish and functional acceptance tests and disposition; calibrated same-configuration complete net M and first-release Q excluding transport packaging; all raw/WIP/unassigned stores and per-exchange inherited burden vectors; released FG genealogy original Q_c and actual storage/dispatch/return horizon H; every packaging P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks with one upstream owner; physical assets installed fluids maintenance new/old parts and measured causal service; site period geography electricity interface and actual gas/steam/heat carrier states; gross mass relevant elements real molecular species and independent water-phase evidence; allocation residual price gate/time/state and all unresolved identities/providers |

Declare each qualifier in metadata, process/reference notes or equivalent fields. A mass unit does not establish equivalent performance between configurations.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | released_part | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is calibrated net kg of uniquely first-released complete legs; released_part is 1 kg excluding packages. Actual same-configuration net M is weighed complete with fitted/supplied BOM using cp_released_part, never estimated from thickness/density or a secondary property. Item(s) and item are equivalent count units with factor1 but no conversion to kg without measured complete M. |
| native_units | all inventory rows | Native extensive property | row unit | Each row keeps its own native extensive quantity; Mass/kg does not apply to electricity/heat MJ or gas/air m3. Heat MJ and physical carrier mass are separate nonoverlapping dimensions of one provider convention; integrate only actual rates and independently measure state/density. |
| raw_once | all inventory rows | Actual extensive quantity | row unit | Collect undivided raw values; unit conversion, stock genealogy and justified assignment precede the sole calc_reference quotient. Every gross card uses complete actual V as numerator, never a burden share/history vector. Amount cards and aggregation reference the same x_i result without another division. |

## 5. System Boundary

Read the complete scope, qualifiers, real operating conditions and inherited quantities with every rule; unobserved does not mean absent.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Burden-bearing externally supplied uncoated welded rectangular carbon-steel tube, mounting stock and real discrete whole articles/preparations |
| starting_condition_role | foreground_receipt |
| product_classification_scope | Narrow complete steel-leg manufacturing subset of CPC3.0:38169, no whole-leaf coverage |
| recursive_input_rule | Trace real same-category returns and original vectors; internal handoffs cancel, no recursive procurement of finished legs |
| upstream_dataset_requirement | Verify each whole supply state, included operations, actual material/route/region/unit and packaging/water/energy ownership; unresolved is not zero burden |
| disclosure | Complete BOM, unique Q, failures/stock inheritance, original Q_c/H, six gross legs, water phases/species, asset service and gaps |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_whole | manufacture | Start with real received tube/plate and actual supplied articles/preparations, and include all real fabrication, specified forming/drilling, welding, preparation, spraying/reclaim, thermal cure, fitting, inspection, abatement and toll work until one complete part first passes its controlled specification. Include every failed/rejected/sample/zero-output/start-stop/idle/cleanup/rework run with its real flows and treatment. Actual extra material, fuel, package, maintenance item, waste or species requires its own specific atomic card before dataset completion; never hide it in zero or other. | `metaco-table-leg-route`; `econ-steel-leg-process`; `gelan-leg-manufacture`; `semiexact-powder-cure` |
| b_release | released_part | Q is the sum of calibrated net complete-part masses uniquely first quality-released in one declared homogeneous manufacturing cohort. Closing FG from that cohort is already in Q; do not add it as another output or subtract its manufacturing vector. Manufacturing B_close is only raw/WIP and genuinely unused/unassigned non-WIP stores/charges, each with its full inherited exchange vector. Internal released-product handover is matched and cancelled when gates combine, never a second external purchase or Q. | `metaco-table-leg-route` |
| b_supplies | all processes | A whole purchased article/preparation includes its complete upstream material/formulation/manufacturing gate once. Actual onsite compounding instead requires each separate bought substance, water, real energy and loss. Assay fractions and contained/carrier water are subaccounts, not extra procurement. Supplier-included packaging ingress remains actual gross material with one upstream owner. Verify actual article, grade, route, geography, physical state, provider boundary and native property; purchase of finished legs cannot stand in for this manufacturing route. | `semiexact-furniture-manufacturing`; `semiexact-steel-leg-product` |
| b_service | services | Retain complete FG opening/closing histories, original first-release Q_c, gross shipment G, actual external returns R with original shipment identity, and observed service horizon H. Storage/packing/handling/dispatch and real work have only incremental original-cohort burdens. Performed service remains with that cohort even if FG stays in storage; only unused/unassigned service/charge carries forward. Delivery, inspection, return and postwork create no new manufacture. Net delivery is outside this denominator and needs a separate coherent historical-burden and G/R/original-delivery-reversal D_rev method. | `jrc-ilcd-attributional-2010` |
| b_permission | services | Manufacturer/spec permission for the actual configuration, compatible work/parts, postwork tests, acceptance and disposition determine continued qualification of a worked part. They are never a gate for deleting already occurred unauthorized, failed or unsafe work, which retains full flows, burdens and original-cohort hold/waste disposition. Never assume broken parts recover qualification. Ordinary environmental humidity uptake/loss is measured without fictitious repair permission. | `semiexact-steel-leg-product` |
| b_gross | all physical events | For each separately identified packaging material or whole article, O + P + I + ER + F_in - X_in = C + S + EO + W + F_out - X_out. O and C include complete wet empty, attached-WIP, attached-FG and reusable stocks. P and I are mutually exclusive for the same ingress event. F_in/F_out are independently measured real additions/removals from repair or ordinary material/water exchange, with event identity, phase and destination; never residual-fitting quantities. X_in/X_out removes only the exact same event/material amount proven duplicated in another actual OTHER flow on the same input/output side. It never removes a stock, the opposite side, a merely present card, or genuine influx retained in C. Use complete wet articles or one mutually exclusive component bridge; internal transfers and reuse cancel once. W is each material origin departure: a genuinely segregated external waste outlet is its own full gross card; an actual co-collected outlet uses one pkg_mixed_waste total with independently measured disjoint origin_W subaccounts and one receiver/treatment provider. Those origin subaccounts are not additional exported wastes or treatment quantities. Unknown composition remains unresolved; no mixed outlet is invented. Every physical gross V is independent of upstream/service/treatment burden ownership and allocation, which is assigned once separately. | `jrc-ilcd-attributional-2010` |
| b_species | manufacture; services; combined gate | Close total wet physical mass and all relevant Fe/C/H/O/N and actual alloy/coating elements independently of real species and reaction evidence. Keep free/carrier/adsorbed/structural/reaction water, liquid/vapour changes, condensate and heat-transfer returns distinct. No prescribed powder reaction, stoichiometry, CO2 absorption or water loss. A single residual cannot fit two unknowns. NOx, VOC, COD, PM or total metal is not a molecule; actual extra species needs a named card. Air/whole-gas supplies and constituent subaccounts, fuel carrier mass/heat and steam mass/enthalpy are disjoint, not additive duplicate providers. | `metaco-table-leg-route`; `jrc-ilcd-attributional-2010` |
| b_assets | assets | Physical machinery/tools, actual new/old maintenance parts and installed oil/water/other fluid stocks remain separate from measured fulfilled period/cohort equipment-service burdens. Retain complete real incoming/outgoing wet mass including additions left installed at closing. Use actual utilization, load and causality without a fixed service life, per-part equipment mass, default replacement rate or double stock correction. Any actual unlisted repair chemical, refrigerant or fluid becomes its own card with full state and destination. | `jrc-ilcd-attributional-2010` |
| packaging_receipt_basis | packaging | For each actual whole packaging article, P records paid procurement (standalone or bundled, with or without a separate invoice). I records first non-purchased external ingress, including standalone gifts, loans, rental/pool issues and unpaid supplier-attached packaging; supplier attachment is only one I subset. ER requires the same item or an auditable matching batch linked to this site's own prior outward record; another party's prior use alone is not a return. P/I/ER are disjoint. The existing matching physical-article cards and raw subledgers cover these origins subject to every native material/form/state qualification; incompatible actual articles require their own atomic rows, never a substitute UUID. X_in/X_out remain separate measured material/water-change terms, not a substitute for whole-article receipt. Keep gross wet quantities, owner/custodian, payment/non-purchase basis, provenance, prior-outward links, actual state/unit and inherited manufacture/service vectors. A free receipt is neither a new manufacture nor automatically burden-free: attribute actual service and incremental transport/handling once to the proper original cohort/denominator and retain genuinely unused service separately, without a default lifetime or credit. Stock, physical gross legs and burden vectors remain separate. This is the declared conserving foreground-accounting implementation, not a claim that the cited source prescribes these variable names. | jrc-ilcd-attributional-2010 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fabrication | Tube/plate fabrication and welding | required | Include every real event; individual cards follow actual route conditions | manufacturing or original-cohort service/physical ledger | per reference flow; gross disclosure separate from owned burden |
| finishing | Actual preparation powder application and heat cure | required | Include every real event; individual cards follow actual route conditions | manufacturing or original-cohort service/physical ledger | per reference flow; gross disclosure separate from owned burden |
| release | Complete part assembly inspection and first release | required | Include every real event; individual cards follow actual route conditions | manufacturing or original-cohort service/physical ledger | per reference flow; gross disclosure separate from owned burden |
| services | Original-cohort FG storage handling and dispatch services | conditional | Include every real event; individual cards follow actual route conditions | manufacturing or original-cohort service/physical ledger | per reference flow; gross disclosure separate from owned burden |
| assets | Physical assets fluids and actual period service | conditional | Include every real event; individual cards follow actual route conditions | manufacturing or original-cohort service/physical ledger | per reference flow; gross disclosure separate from owned burden |
| packaging | Separate whole-article gross packaging events | conditional | Include every real event; individual cards follow actual route conditions | manufacturing or original-cohort service/physical ledger | per reference flow; gross disclosure separate from owned burden |

Each card is one atomic event. Add every actual unlisted material as a named card before use. A gross card uses complete V and bypasses generic stock/economic scaling; its actual owned burden dimension is assigned separately once.

### Process: Tube/plate fabrication and welding (`fabrication`)

#### Inputs

##### Product flows

###### Uncoated welded rectangular carbon-steel tube (`steel_tube`)

Uncoated welded rectangular carbon-steel tube. Whole supplied hollow tube; record alloy/grade, seam route, dimensions and any supplier oil once; no onsite steelmaking or tube-mill duplication. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. Product; manufactured welded non-circular steel tube, production mix at plant; no fixed grade, wall, geography or CAS. Restrict to the actual uncoated rectangular carbon-steel hollow stock; this tube is finished as a tube, not already a finished furniture leg. Tube-making belongs upstream once. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. No secondary-property density or item mass is used.

- Selected flow: Tubes and pipes, of non-circular cross-section, welded, of steel `5b36ddd4-adb1-41da-9456-33e69e0f141c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row sole already-calculated x_i result after actual unit conversion and one history/assignment step; raw amounts are undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steel_tube`
- Sources: `metaco-table-leg-route`; `econ-steel-leg-process`

###### Uncoated carbon-steel mounting plate stock (`steel_plate`)

Uncoated carbon-steel mounting plate stock. External plate stock for actual integral attachment plate; supplier-prefabricated plate retains its complete provider gate. No repurchase of plate already contained in a bought weldment. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Uncoated carbon-steel mounting plate stock
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row sole already-calculated x_i result after actual unit conversion and one history/assignment step; raw amounts are undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steel_plate`
- Sources: `metaco-table-leg-route`; `econ-steel-leg-process`

###### Carbon-steel welding wire (`wire`)

Carbon-steel welding wire. Only separately purchased actual solid filler; a bought whole cored wire or completed weldment requires its own identity and ownership, not a fictitious constituent purchase. Product; solid cylindrical flexible non-alloy steel wire, production mix at factory through steel production; broad fine/ultrafine-wire synonyms do not specify welding certification, diameter or supplier. Use only actual separately bought compatible solid filler wire with documented welding grade, no flux-core or embedded filler repurchase and no inferred dose. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. No secondary-property density or item mass is used.

- Selected flow: Steel Wire `62bb3717-f62c-43e0-baca-46a1e6f847c4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row sole already-calculated x_i result after actual unit conversion and one history/assignment step; raw amounts are undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wire`
- Sources: `metaco-table-leg-route`; `econ-steel-leg-process`

###### Argon shielding gas (`argon`)

Argon shielding gas. Only actual separately supplied gaseous argon; no liquid-argon identity is used and no split of a bought premixed cylinder into new purchases. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Argon shielding gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row sole already-calculated x_i result after actual unit conversion and one history/assignment step; raw amounts are undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_argon`
- Sources: `metaco-table-leg-route`; `econ-steel-leg-process`

###### Carbon dioxide shielding gas (`co2_shield`)

Carbon dioxide shielding gas. Only actual separately supplied gaseous CO2; record origin and physical gas state. A whole premixed supply is shield_mix instead, with constituents as assay subaccounts. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Carbon dioxide shielding gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row sole already-calculated x_i result after actual unit conversion and one history/assignment step; raw amounts are undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_co2_shield`
- Sources: `metaco-table-leg-route`; `econ-steel-leg-process`

###### Aluminium-oxide bonded grinding disc (`abrasive`)

Aluminium-oxide bonded grinding disc. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Aluminium-oxide bonded grinding disc
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row sole already-calculated x_i result after actual unit conversion and one history/assignment step; raw amounts are undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_abrasive`
- Sources: `metaco-table-leg-route`; `econ-steel-leg-process`

###### Whole aqueous metal-cutting-fluid preparation (`cutting_fluid`)

Whole aqueous metal-cutting-fluid preparation. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. Product; broad metalworking coolant/lubricant family includes oils, emulsions, pastes, gels, aerosols and gases; no fixed CAS, grade, geography or treatment route. Select only one actual whole externally supplied aqueous preparation, with supplier concentration/SDS and carrier water included once; listed mineral/fatty/vegetable oils and emulsifier are examples, not a prescribed recipe. Real onsite added water or ingredients are separate; any other purchased ingredient needs a new specific card. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. No secondary-property density or item mass is used.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row sole already-calculated x_i result after actual unit conversion and one history/assignment step; raw amounts are undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cutting_fluid`
- Sources: `metaco-table-leg-route`; `econ-steel-leg-process`

###### Unimpregnated cotton cleaning cloth (`cloth`)

Unimpregnated cotton cleaning cloth. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Unimpregnated cotton cleaning cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row sole already-calculated x_i result after actual unit conversion and one history/assignment step; raw amounts are undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cloth`
- Sources: `metaco-table-leg-route`; `econ-steel-leg-process`

###### Electricity (`electricity`)

Electricity. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. Product; CN supply, 1–35 kV medium-voltage AC, grid-average consumption mix to user including generation/transmission/supply; Net calorific value is its native extensive reference, in MJ, not Mass. Use only when actual interface/geography matches; other voltage, region or onsite power needs its own verified flow. Meter kWh converts by 3.6 once. Native compliance statements do not certify this plant. This is the disjoint external factory-meter supply covering actual cutting, welding, preparation, spraying, cure, final fitting/tests and abatement; preserve internal submeter attribution without adding the full meter again at each stage. Original-cohort service electricity is a separately metered or causally separated increment. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200c9a66` → `93a60a57-a3c8-11da-a746-0800200c9a66` → MJ. No secondary-property density or item mass is used.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use this row sole already-calculated x_i result after actual unit conversion and one history/assignment step; raw amounts are undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_electricity`
- Sources: `metaco-table-leg-route`; `econ-steel-leg-process`

###### Whole supplied argon-carbon-dioxide welding shielding-gas mixture (`shield_mix`)

Whole supplied argon-carbon-dioxide welding shielding-gas mixture. One complete real bought argon/CO2 blend; exact grade/SDS and composition are collected, not fixed. Its assay argon/CO2 are not purchased again; actual onsite separate gases use their own cards. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Whole supplied argon-carbon-dioxide welding shielding-gas mixture
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row sole already-calculated x_i result after actual unit conversion and one history/assignment step; raw amounts are undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_shield_mix`
- Sources: `metaco-table-leg-route`; `econ-steel-leg-process`

##### Waste flows

##### Elementary flows

###### Water vapour absorbed from ambient air during manufacture (`manufacture_humidity`)

Water vapour absorbed from ambient air during manufacture. Actual raw/WIP/whole-preparation environmental humidity uptake is retained independently of liquid supply and final drying losses. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Water vapour absorbed from ambient air during manufacture
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manufacture_humidity`
- Sources: `metaco-table-leg-route`; `econ-steel-leg-process`

#### Outputs

##### Product flows

##### Waste flows

###### Segregated carbon-steel offcut and swarf waste (`steel_scrap`)

Segregated carbon-steel offcut and swarf waste. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Segregated carbon-steel offcut and swarf waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row sole already-calculated x_i result after actual unit conversion and one history/assignment step; raw amounts are undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steel_scrap`
- Sources: `metaco-table-leg-route`; `econ-steel-leg-process`

###### Collected welding and steel-grinding dust waste (`weld_dust`)

Collected welding and steel-grinding dust waste. Exactly one real collected mixed welding/grinding-dust outlet if the capture system actually combines it. Separately exported fume/filter/abrasive streams need disjoint additional atomic cards; the waste-welding-consumables candidate is not dust. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Collected welding and steel-grinding dust waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row sole already-calculated x_i result after actual unit conversion and one history/assignment step; raw amounts are undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_weld_dust`
- Sources: `metaco-table-leg-route`; `econ-steel-leg-process`

###### Spent aluminium-oxide grinding disc waste (`spent_disc`)

Spent aluminium-oxide grinding disc waste. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Spent aluminium-oxide grinding disc waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row sole already-calculated x_i result after actual unit conversion and one history/assignment step; raw amounts are undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_spent_disc`
- Sources: `metaco-table-leg-route`; `econ-steel-leg-process`

###### Contaminated cotton cleaning cloth waste (`cloth_waste`)

Contaminated cotton cleaning cloth waste. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Contaminated cotton cleaning cloth waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row sole already-calculated x_i result after actual unit conversion and one history/assignment step; raw amounts are undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cloth_waste`
- Sources: `metaco-table-leg-route`; `econ-steel-leg-process`

##### Elementary flows

### Process: Actual preparation powder application and heat cure (`finishing`)

#### Inputs

##### Product flows

###### Steel blast-cleaning shot (`shot`)

Steel blast-cleaning shot. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. Product; manufactured cast-steel shot/grit from melted steel scrap formed by water jets, with native size interval 0.18–2.4 mm and low-carbon comparison to high-carbon shot; no exact grade/geography/CAS. Use only matching actual cast-steel blast media, not sand, mineral grit, wire-cut shot or stainless shot; the interval is a native compatibility condition, not a prescribed plant setting. The non-ferrous-ore classification is an isolated taxonomy defect contrary to consistent physical cast-steel identity; it is disclosed, not used to infer ore input or a grade. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. No secondary-property density or item mass is used.

- Selected flow: Cast Steel Shot `8870a03b-a97c-4888-b208-4bdf3d573a0d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row sole already-calculated x_i result after actual unit conversion and one history/assignment step; raw amounts are undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_shot`
- Sources: `metaco-table-leg-route`; `econ-steel-leg-process`

###### Whole aqueous alkaline metal-degreasing preparation (`degreaser`)

Whole aqueous alkaline metal-degreasing preparation. One actual whole purchased aqueous alkaline metal-cleaning preparation; actual supplied concentration, carrier water and SDS are collected. The optical-assembly solvent degreasant candidate is incompatible and not bound. No assumed acid pickling/phosphate/plating. Actual onsite compounding needs each bought chemical and real water/energy/loss separately before use. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Whole aqueous alkaline metal-degreasing preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row sole already-calculated x_i result after actual unit conversion and one history/assignment step; raw amounts are undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_degreaser`
- Sources: `metaco-table-leg-route`; `econ-steel-leg-process`

###### Whole thermosetting furniture powder-coating preparation (`powder`)

Whole thermosetting furniture powder-coating preparation. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. Product; free-flowing dry paint powder, production mix at plant; native permits heat or UV cure and several substrates, with no fixed resin/CAS/geography. Restrict to one actual whole furniture-grade thermosetting powder for steel and actual thermal cure; UV-only, liquid paint and unrelated substrates are excluded. No native durability, film build, weather or zero-VOC assertion is an acceptance threshold or emission factor. Purchase the whole formulation once; pigments, resin, filler, additives and contained moisture are assay subaccounts only. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. No secondary-property density or item mass is used.

- Selected flow: Powder coating `0c581697-0eed-4b86-a070-b94966eb7344`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row sole already-calculated x_i result after actual unit conversion and one history/assignment step; raw amounts are undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_powder`
- Sources: `metaco-table-leg-route`; `econ-steel-leg-process`; `semiexact-powder-cure`

###### Liquid process water (`water`)

Liquid process water. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. Product; treated industrial process/service/utility water family, with reclaimed/recirculating water synonyms; no fixed chemistry, grade, geography or density. Verify actual source/treatment/quality and liquid supply state. Count external ingress once; internal circulation is not a second purchase. Carrier water already inside a supplied preparation is not this separate input. Retain full wet closing stock and actual additional ingress together. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. No secondary-property density or item mass is used.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row sole already-calculated x_i result after actual unit conversion and one history/assignment step; raw amounts are undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `metaco-table-leg-route`; `econ-steel-leg-process`

###### Liquid water for onsite preparation dilution (`makeup_water`)

Liquid water for onsite preparation dilution. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. Product; treated industrial process/service/utility water family, with reclaimed/recirculating water synonyms; no fixed chemistry, grade, geography or density. Verify actual source/treatment/quality and liquid supply state. Count external ingress once; internal circulation is not a second purchase. Carrier water already inside a supplied preparation is not this separate input. Retain full wet closing stock and actual additional ingress together. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. No secondary-property density or item mass is used.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row sole already-calculated x_i result after actual unit conversion and one history/assignment step; raw amounts are undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_makeup_water`
- Sources: `metaco-table-leg-route`; `econ-steel-leg-process`

###### Powder-booth filter cartridge (`filter`)

Powder-booth filter cartridge. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Powder-booth filter cartridge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row sole already-calculated x_i result after actual unit conversion and one history/assignment step; raw amounts are undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_filter`
- Sources: `metaco-table-leg-route`; `econ-steel-leg-process`

###### Natural gas for curing heat (`natural_gas`)

Natural gas for curing heat. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. Product; CN industrial-furnace coating-oven heat fuel; native origin is expert assumption rather than primary consumption evidence, so it establishes neither occurrence nor amount. Adopt only for independently confirmed actual onsite natural-gas firing. Its reference is Gross calorific value in MJ; retain independently measured full gas carrier mass, composition, moisture, temperature/pressure and actual HHV for conversion, not an LHV substitution. No upstream furnace combustion or delivered-heat provider is charged again for the same firing. Native reference property → unit group → reference unit: `93a60a56-a3c8-14da-a746-0800200c9a66` → `93a60a57-a3c8-11da-a746-0800200c9a66` → MJ. No secondary-property density or item mass is used.

- Selected flow: Natural gas `78279a0e-8c85-421e-a1aa-2281166ee11f`
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- Amount rule: Use this row sole already-calculated x_i result after actual unit conversion and one history/assignment step; raw amounts are undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_natural_gas`
- Sources: `metaco-table-leg-route`; `econ-steel-leg-process`

###### Externally supplied heat (`purchased_heat`)

Externally supplied heat. Only actual external heat duty; identify carrier/water convention, supply/return enthalpy and whether the provider already includes it. No duplicated gas/steam/heat supply. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Externally supplied heat
- Flow property / unit: Energy / MJ
- Amount rule: Use this row sole already-calculated x_i result after actual unit conversion and one history/assignment step; raw amounts are undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_purchased_heat`
- Sources: `metaco-table-leg-route`; `econ-steel-leg-process`

###### Externally supplied steam (`steam`)

Externally supplied steam. Only actual purchased steam: complete carrier Mass/kg and measured thermal state/enthalpy; do not also procure a full delivered-heat provider for that same steam. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero. This card is complete actual gross V physical flow, normalized only once through calc_reference by Q (original service Q_c where applicable), never reduced by stock correction or burden share. Actual upstream/treatment burden is assigned once separately; heat-carrier state, mass, supply/return enthalpy and water/energy ownership remain disjoint with no duplicate provider.

- Selected flow: Externally supplied steam
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steam`
- Sources: `metaco-table-leg-route`; `econ-steel-leg-process`

###### Externally supplied compressed air (`compressed_air`)

Only actual external compressed-air Product supply at pressure above atmosphere. Native reference is Volume/m3 with no fixed geography, composition, pressure or density. Collect actual same-state temperature, pressure, humidity, composition, metered volume and independent density/mass bridge; no m3-as-kg or unsupported standard-volume conversion. Onsite compression uses actual electricity/equipment service and disjoint ambient species, not a second external-air provider. Whole gas and constituent ledgers are mutually exclusive. Native reference property → unit group → true reference unit: 93a60a56-a3c8-22da-a746-0800200c9a66 → 93a60a57-a3c8-12da-a746-0800200c9a66 → m3. No secondary-property density or item mass conversion.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Use this row sole already-calculated x_i result after actual unit conversion and one history/assignment step; raw amounts are undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_compressed_air`
- Sources: `metaco-table-leg-route`; `econ-steel-leg-process`

##### Waste flows

##### Elementary flows

###### Oxygen from ambient air (`ambient_oxygen`)

Only when actually occurring, record Elementary resource input from ambient air; primary name oxygen, CAS 7782-44-7, Mass/kg, no fixed geography. Independently establish species, phase, compartment and actual event amount; purchased-gas Product, indoor/other compartments, isotopes and different species are not interchangeable. Whole air or supplied mixtures and constituent subaccounts are disjoint; no invented composition, stoichiometry or residual quantification. Native reference property → unit group → true reference unit: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg. No secondary-property density or item mass conversion.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ambient_oxygen`
- Sources: `metaco-table-leg-route`; `econ-steel-leg-process`

###### Nitrogen from ambient air (`ambient_nitrogen`)

Only when actually occurring, record Elementary resource input from ambient air; primary name dinitrogen, CAS 7727-37-9, Mass/kg, no fixed geography. Independently establish species, phase, compartment and actual event amount; purchased-gas Product, indoor/other compartments, isotopes and different species are not interchangeable. Whole air or supplied mixtures and constituent subaccounts are disjoint; no invented composition, stoichiometry or residual quantification. Native reference property → unit group → true reference unit: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg. No secondary-property density or item mass conversion.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ambient_nitrogen`
- Sources: `metaco-table-leg-route`; `econ-steel-leg-process`

###### Argon from ambient air (`ambient_argon`)

Only when actually occurring, record Elementary resource input from ambient air; primary name argon, CAS 7440-37-1, Mass/kg, no fixed geography. Independently establish species, phase, compartment and actual event amount; purchased-gas Product, indoor/other compartments, isotopes and different species are not interchangeable. Whole air or supplied mixtures and constituent subaccounts are disjoint; no invented composition, stoichiometry or residual quantification. Native reference property → unit group → true reference unit: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg. No secondary-property density or item mass conversion.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ambient_argon`
- Sources: `metaco-table-leg-route`; `econ-steel-leg-process`

###### Carbon dioxide from ambient air (`ambient_co2_in`)

Carbon dioxide from ambient air. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Carbon dioxide from ambient air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ambient_co2_in`
- Sources: `metaco-table-leg-route`; `econ-steel-leg-process`

#### Outputs

##### Product flows

###### Liquid condensate returned to heat supplier (`condensate`)

Liquid condensate returned to heat supplier. Only actual liquid condensate returned externally from a real supplied steam system; record carrier mass, temperature/pressure/enthalpy and the provider water/energy convention. No boiler or steam default. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero. This card is complete actual gross V physical flow, normalized only once through calc_reference by Q (original service Q_c where applicable), never reduced by stock correction or burden share. Actual upstream/treatment burden is assigned once separately; heat-carrier state, mass, supply/return enthalpy and water/energy ownership remain disjoint with no duplicate provider.

- Selected flow: Liquid condensate returned to heat supplier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_condensate`
- Sources: `metaco-table-leg-route`; `econ-steel-leg-process`

###### Heat-transfer liquid water returned to supplier (`heat_water_return`)

Heat-transfer liquid water returned to supplier. Only a real external heat-transfer-water return, separate from condensate, process wastewater and internally circulating water. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero. This card is complete actual gross V physical flow, normalized only once through calc_reference by Q (original service Q_c where applicable), never reduced by stock correction or burden share. Actual upstream/treatment burden is assigned once separately; heat-carrier state, mass, supply/return enthalpy and water/energy ownership remain disjoint with no duplicate provider.

- Selected flow: Heat-transfer liquid water returned to supplier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_heat_water_return`
- Sources: `metaco-table-leg-route`; `econ-steel-leg-process`

##### Waste flows

###### Spent steel blasting shot waste (`spent_shot`)

Spent steel blasting shot waste. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Spent steel blasting shot waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row sole already-calculated x_i result after actual unit conversion and one history/assignment step; raw amounts are undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_spent_shot`
- Sources: `metaco-table-leg-route`; `econ-steel-leg-process`

###### Segregated metal-degreasing sludge waste (`sludge`)

Segregated metal-degreasing sludge waste. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Segregated metal-degreasing sludge waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row sole already-calculated x_i result after actual unit conversion and one history/assignment step; raw amounts are undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sludge`
- Sources: `metaco-table-leg-route`; `econ-steel-leg-process`

###### Spent aqueous metal-cleaning bath wastewater (`wastewater`)

Spent aqueous metal-cleaning bath wastewater. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Spent aqueous metal-cleaning bath wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row sole already-calculated x_i result after actual unit conversion and one history/assignment step; raw amounts are undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater`
- Sources: `metaco-table-leg-route`; `econ-steel-leg-process`

###### Discarded solid overspray powder (`powder_waste`)

Discarded solid overspray powder. This bound row covers actual CN discarded solid overspray only. Add a separate named waste card for a chemically or physically different discarded powder stream. Waste; collected solid overspray powder from powder coating at plant in CN; no quantified waste rate or treatment is supplied. Use only genuinely discarded overspray, not internally recovered reusable powder, sludge, a filter cartridge or liquid wastewater; these remain separately tracked. No recovery credit or manufacturing-burden deduction follows from external sale. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. No secondary-property density or item mass is used.

- Selected flow: Powder coating waste `9aa53a82-5462-400e-9096-efab7718201f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row sole already-calculated x_i result after actual unit conversion and one history/assignment step; raw amounts are undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_powder_waste`
- Sources: `metaco-table-leg-route`; `econ-steel-leg-process`

###### Spent powder-booth filter cartridge waste (`filter_waste`)

Spent powder-booth filter cartridge waste. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Spent powder-booth filter cartridge waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row sole already-calculated x_i result after actual unit conversion and one history/assignment step; raw amounts are undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_filter_waste`
- Sources: `metaco-table-leg-route`; `econ-steel-leg-process`

##### Elementary flows

###### Carbon dioxide fossil to air (`co2_fossil`)

Carbon dioxide fossil to air. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. Elementary emission to unspecified air; fossil carbon dioxide, CAS 124-38-9; Mass/kg, no fixed geography. Native reference-ILCD comment and full multilingual synonyms are identity context only, not an emission factor. Broad/inconsistent aliases do not authorize another isotope, phase, molecule, aggregate or environmental compartment; verify this exact actual species and carbon origin where relevant. Air subcompartments, indoor, soil/water and long-term rows are not interchangeable. NOx/VOC/total particles or a mass residual cannot establish this species. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. No secondary-property density or item mass is used.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row sole already-calculated x_i result after actual unit conversion and one history/assignment step; raw amounts are undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_co2_fossil`
- Sources: `metaco-table-leg-route`; `econ-steel-leg-process`

###### Carbon monoxide to air (`co`)

Carbon monoxide to air. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. Elementary emission to unspecified air; fossil carbon monoxide, CAS 630-08-0; Mass/kg, no fixed geography. Native reference-ILCD comment and full multilingual synonyms are identity context only, not an emission factor. Broad/inconsistent aliases do not authorize another isotope, phase, molecule, aggregate or environmental compartment; verify this exact actual species and carbon origin where relevant. Air subcompartments, indoor, soil/water and long-term rows are not interchangeable. NOx/VOC/total particles or a mass residual cannot establish this species. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. No secondary-property density or item mass is used.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row sole already-calculated x_i result after actual unit conversion and one history/assignment step; raw amounts are undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_co`
- Sources: `metaco-table-leg-route`; `econ-steel-leg-process`

###### Nitrogen monoxide to air (`no`)

Nitrogen monoxide to air. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. Elementary emission to unspecified air; molecular nitrogen monoxide, CAS 10102-43-9; Mass/kg, no fixed geography. Native reference-ILCD comment and full multilingual synonyms are identity context only, not an emission factor. Broad/inconsistent aliases do not authorize another isotope, phase, molecule, aggregate or environmental compartment; verify this exact actual species and carbon origin where relevant. Air subcompartments, indoor, soil/water and long-term rows are not interchangeable. NOx/VOC/total particles or a mass residual cannot establish this species. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. No secondary-property density or item mass is used.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row sole already-calculated x_i result after actual unit conversion and one history/assignment step; raw amounts are undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_no`
- Sources: `metaco-table-leg-route`; `econ-steel-leg-process`

###### Nitrogen dioxide to air (`no2`)

Only when actually occurring, record Elementary output to unspecified environmental air; primary name nitrogen dioxide, CAS 10102-44-0, Mass/kg, no fixed geography. Independently establish species, phase, compartment and actual event amount; purchased-gas Product, indoor/other compartments, isotopes and different species are not interchangeable. Whole air or supplied mixtures and constituent subaccounts are disjoint; no invented composition, stoichiometry or residual quantification. Only independently measured molecular NO2 gas, never total NOx, N2O4 or an assumed equilibrium conversion. Native tetroxide aliases are inconsistent with the unambiguous primary name and CAS and are not adopted. Native reference property → unit group → true reference unit: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg. No secondary-property density or item mass conversion.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row sole already-calculated x_i result after actual unit conversion and one history/assignment step; raw amounts are undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_no2`
- Sources: `metaco-table-leg-route`; `econ-steel-leg-process`

###### Methane fossil to air (`methane`)

Only when actually occurring, record Elementary output to unspecified environmental air; primary name methane (fossil), CAS 74-82-8, Mass/kg, no fixed geography. Independently establish species, phase, compartment and actual event amount; purchased-gas Product, indoor/other compartments, isotopes and different species are not interchangeable. Whole air or supplied mixtures and constituent subaccounts are disjoint; no invented composition, stoichiometry or residual quantification. Only independently measured fossil CH4 gas with carbon-origin evidence; not biogenic methane, natural-gas mixture, VOC, carbon black, graphite, methyl radicals or other inconsistent aliases. Native reference property → unit group → true reference unit: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg. No secondary-property density or item mass conversion.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row sole already-calculated x_i result after actual unit conversion and one history/assignment step; raw amounts are undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_methane`
- Sources: `metaco-table-leg-route`; `econ-steel-leg-process`

###### Water vapour to air (`water_vapour`)

Water vapour to air. Measure real manufacturing drying, combustion or moisture release by source/phase and keep disjoint reaction/free/carrier-water subaccounts; do not infer reaction water for an unknown powder formulation. Elementary emission to unspecified air; ordinary molecular H2O vapour, CAS 7732-18-5; Mass/kg, no fixed geography. Native reference-ILCD comment and full multilingual synonyms are identity context only, not an emission factor. Broad/inconsistent aliases do not authorize another isotope, phase, molecule, aggregate or environmental compartment; verify this exact actual species and carbon origin where relevant. Air subcompartments, indoor, soil/water and long-term rows are not interchangeable. NOx/VOC/total particles or a mass residual cannot establish this species. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. No secondary-property density or item mass is used.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row sole already-calculated x_i result after actual unit conversion and one history/assignment step; raw amounts are undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_vapour`
- Sources: `metaco-table-leg-route`; `econ-steel-leg-process`

###### Argon to air (`argon_out`)

Argon to air. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. Elementary emission to unspecified air; nonradioactive elemental argon gas, CAS 7440-37-1; Mass/kg, no fixed geography. Native reference-ILCD comment and full multilingual synonyms are identity context only, not an emission factor. Broad/inconsistent aliases do not authorize another isotope, phase, molecule, aggregate or environmental compartment; verify this exact actual species and carbon origin where relevant. Air subcompartments, indoor, soil/water and long-term rows are not interchangeable. NOx/VOC/total particles or a mass residual cannot establish this species. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. No secondary-property density or item mass is used.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row sole already-calculated x_i result after actual unit conversion and one history/assignment step; raw amounts are undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_argon_out`
- Sources: `metaco-table-leg-route`; `econ-steel-leg-process`

###### Supplied shielding carbon dioxide to air (`shield_co2_out`)

Supplied shielding carbon dioxide to air. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Supplied shielding carbon dioxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row sole already-calculated x_i result after actual unit conversion and one history/assignment step; raw amounts are undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_shield_co2_out`
- Sources: `metaco-table-leg-route`; `econ-steel-leg-process`

###### Elemental iron particulate to air (`iron_particle`)

Only when actually occurring, record Elementary output to unspecified environmental air; primary name iron, CAS 7439-89-6, Mass/kg, no fixed geography. Independently establish species, phase, compartment and actual event amount; purchased-gas Product, indoor/other compartments, isotopes and different species are not interchangeable. Whole air or supplied mixtures and constituent subaccounts are disjoint; no invented composition, stoichiometry or residual quantification. Only independently measured neutral elemental Fe particulate with phase/species and air destination confirmed; never total metal/PM, iron oxides, welding fume, dissolved Fe or ionic aliases. Native reference property → unit group → true reference unit: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg. No secondary-property density or item mass conversion.

- Selected flow: iron `08a91e70-3ddc-11dd-9591-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row sole already-calculated x_i result after actual unit conversion and one history/assignment step; raw amounts are undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_iron_particle`
- Sources: `metaco-table-leg-route`; `econ-steel-leg-process`

###### Uncaptured thermosetting coating powder particulate to air (`powder_particle`)

Uncaptured thermosetting coating powder particulate to air. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Uncaptured thermosetting coating powder particulate to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row sole already-calculated x_i result after actual unit conversion and one history/assignment step; raw amounts are undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_powder_particle`
- Sources: `metaco-table-leg-route`; `econ-steel-leg-process`

###### Nitrogen to air (`nitrogen_out`)

Only when actually occurring, record Elementary output to unspecified environmental air; primary name dinitrogen, CAS 7727-37-9, Mass/kg, no fixed geography. Independently establish species, phase, compartment and actual event amount; purchased-gas Product, indoor/other compartments, isotopes and different species are not interchangeable. Whole air or supplied mixtures and constituent subaccounts are disjoint; no invented composition, stoichiometry or residual quantification. Native reference property → unit group → true reference unit: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg. No secondary-property density or item mass conversion.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nitrogen_out`
- Sources: `metaco-table-leg-route`; `econ-steel-leg-process`

###### Unreacted oxygen to air (`oxygen_out`)

Only when actually occurring, record Elementary output to unspecified environmental air; primary name oxygen, CAS 7782-44-7, Mass/kg, no fixed geography. Independently establish species, phase, compartment and actual event amount; purchased-gas Product, indoor/other compartments, isotopes and different species are not interchangeable. Whole air or supplied mixtures and constituent subaccounts are disjoint; no invented composition, stoichiometry or residual quantification. Native reference property → unit group → true reference unit: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg. No secondary-property density or item mass conversion.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_oxygen_out`
- Sources: `metaco-table-leg-route`; `econ-steel-leg-process`

###### Unreacted atmospheric carbon dioxide to air (`ambient_co2_out`)

Unreacted atmospheric carbon dioxide to air. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Unreacted atmospheric carbon dioxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ambient_co2_out`
- Sources: `metaco-table-leg-route`; `econ-steel-leg-process`

### Process: Complete part assembly inspection and first release (`release`)

#### Inputs

##### Product flows

###### Finished steel threaded insert (`threaded_insert`)

Finished steel threaded insert. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Finished steel threaded insert
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row sole already-calculated x_i result after actual unit conversion and one history/assignment step; raw amounts are undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_threaded_insert`
- Sources: `semiexact-steel-leg-product`

###### Complete supplied threaded leveling foot (`leveling_foot`)

Complete supplied threaded leveling foot. One complete supplier-finished threaded leveling foot, only when fitted or supplied in the released leg BOM. Record actual metal/polymer/finish and complete upstream route; do not additionally buy its already included pad, bolt or insert. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Complete supplied threaded leveling foot
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row sole already-calculated x_i result after actual unit conversion and one history/assignment step; raw amounts are undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_leveling_foot`
- Sources: `semiexact-steel-leg-product`

###### Finished steel assembly bolt (`fastener`)

Finished steel assembly bolt. Only separately supplied assembly bolts actually inside the released BOM, not end-user tabletop attachment fasteners unless expressly supplied. No default machinery-mass percentage. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Finished steel assembly bolt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row sole already-calculated x_i result after actual unit conversion and one history/assignment step; raw amounts are undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fastener`
- Sources: `semiexact-steel-leg-product`

###### Separate moulded polyethylene floor-contact pad (`pad`)

Separate moulded polyethylene floor-contact pad. Only an actually separately supplied PE floor-contact pad not already contained in leveling_foot or a supplied leg. A rubber, nylon or other actual pad needs its own named identity, not this PE card. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Separate moulded polyethylene floor-contact pad
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row sole already-calculated x_i result after actual unit conversion and one history/assignment step; raw amounts are undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pad`
- Sources: `semiexact-steel-leg-product`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Parts of furniture not made from wood (`released_part`)

Parts of furniture not made from wood. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. Product; finished manufactured nonwood furniture-part family; production mix at plant; no fixed CAS, grade, geometry, geography or secondary property. Here it means one complete welded steel leg assembly with its integral mounting plate and declared fitted/supplied components, not a table, steel tube, chair component or machine part. The primary terminal restriction and actual complete BOM are mandatory. Mass reference and one full-configuration net weighing govern, without an item-to-kg guess. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. No secondary-property density or item mass is used.

- Selected flow: Parts of furniture not made from wood `84b811ca-bad2-4990-908c-61ed475caf5c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_released_part`
- Sources: `semiexact-steel-leg-product`

##### Waste flows

###### Single collected mixed nonhazardous manufacturing waste (`mixed_waste`)

Single collected mixed nonhazardous manufacturing waste. One real mixed outlet only; its source pools include only material not already in an independently exported waste card. If no mixed physical outlet exists record evidenced absence, not sum segregated wastes into a fictitious bin. Waste; global production mix at plant from final assembly and factory testing, with no quantified amount or specified treatment. Exactly one real collected mixed nonhazardous outlet with one provider/treatment. Independently measured source pools sum to its complete mass and are not additional waste exchanges; separately exported waste has disjoint pools. No hazardous-waste substitution or credit. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. No secondary-property density or item mass is used. This card is complete actual gross V physical flow, normalized only once through calc_reference by Q (original service Q_c where applicable), never reduced by stock correction or burden share. Actual upstream/treatment burden is assigned once separately; heat-carrier state, mass, supply/return enthalpy and water/energy ownership remain disjoint with no duplicate provider.

- Selected flow: Manufacturing waste, mixed `8a42279e-b14c-408f-98de-e52e0ea3ef3a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mixed_waste`
- Sources: `semiexact-steel-leg-product`

###### Rejected coated welded steel table-leg assembly (`reject_part`)

Rejected coated welded steel table-leg assembly. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Rejected coated welded steel table-leg assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row sole already-calculated x_i result after actual unit conversion and one history/assignment step; raw amounts are undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reject_part`
- Sources: `semiexact-steel-leg-product`

##### Elementary flows

### Process: Original-cohort FG storage handling and dispatch services (`services`)

#### Inputs

##### Product flows

###### Liquid water for postrelease cleaning (`service_water`)

Liquid water for postrelease cleaning. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. Keep the original first-release cohort Q_c and observation horizon H; this event never creates Q. Actual rework needs manufacturer/spec permission and postwork tests/acceptance/disposition to remain qualified, but unauthorized, failed or held work still has all real flows and burdens recorded; ordinary humidity needs no work permission. Product; treated industrial process/service/utility water family, with reclaimed/recirculating water synonyms; no fixed chemistry, grade, geography or density. Verify actual source/treatment/quality and liquid supply state. Count external ingress once; internal circulation is not a second purchase. Carrier water already inside a supplied preparation is not this separate input. Retain full wet closing stock and actual additional ingress together. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. No secondary-property density or item mass is used.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row sole already-calculated x_i result after actual unit conversion and one history/assignment step; raw amounts are undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service_water`
- Sources: `jrc-ilcd-attributional-2010`

###### Replacement complete threaded leveling foot (`service_foot`)

Replacement complete threaded leveling foot. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. Keep the original first-release cohort Q_c and observation horizon H; this event never creates Q. Actual rework needs manufacturer/spec permission and postwork tests/acceptance/disposition to remain qualified, but unauthorized, failed or held work still has all real flows and burdens recorded; ordinary humidity needs no work permission. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Replacement complete threaded leveling foot
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row sole already-calculated x_i result after actual unit conversion and one history/assignment step; raw amounts are undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service_foot`
- Sources: `jrc-ilcd-attributional-2010`

###### Replacement finished steel bolt (`service_bolt`)

Replacement finished steel bolt. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. Keep the original first-release cohort Q_c and observation horizon H; this event never creates Q. Actual rework needs manufacturer/spec permission and postwork tests/acceptance/disposition to remain qualified, but unauthorized, failed or held work still has all real flows and burdens recorded; ordinary humidity needs no work permission. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Replacement finished steel bolt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row sole already-calculated x_i result after actual unit conversion and one history/assignment step; raw amounts are undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service_bolt`
- Sources: `jrc-ilcd-attributional-2010`

###### Electricity for original-cohort storage handling or work (`service_electricity`)

Electricity for original-cohort storage handling or work. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. Keep the original first-release cohort Q_c and observation horizon H; this event never creates Q. Actual rework needs manufacturer/spec permission and postwork tests/acceptance/disposition to remain qualified, but unauthorized, failed or held work still has all real flows and burdens recorded; ordinary humidity needs no work permission. Product; CN supply, 1–35 kV medium-voltage AC, grid-average consumption mix to user including generation/transmission/supply; Net calorific value is its native extensive reference, in MJ, not Mass. Use only when actual interface/geography matches; other voltage, region or onsite power needs its own verified flow. Meter kWh converts by 3.6 once. Native compliance statements do not certify this plant. This is the disjoint external factory-meter supply covering actual cutting, welding, preparation, spraying, cure, final fitting/tests and abatement; preserve internal submeter attribution without adding the full meter again at each stage. Original-cohort service electricity is a separately metered or causally separated increment. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200c9a66` → `93a60a57-a3c8-11da-a746-0800200c9a66` → MJ. No secondary-property density or item mass is used.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use this row sole already-calculated x_i result after actual unit conversion and one history/assignment step; raw amounts are undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service_electricity`
- Sources: `jrc-ilcd-attributional-2010`

##### Waste flows

##### Elementary flows

###### Water vapour absorbed from ambient air (`ambient_water`)

Water vapour absorbed from ambient air. Natural humidity uptake during actual FG storage/handling is included without invented work permission; record full wet stocks and ingress, not only cleaning or repair. Keep the original first-release cohort Q_c and observation horizon H; this event never creates Q. Actual rework needs manufacturer/spec permission and postwork tests/acceptance/disposition to remain qualified, but unauthorized, failed or held work still has all real flows and burdens recorded; ordinary humidity needs no work permission. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Water vapour absorbed from ambient air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ambient_water`
- Sources: `jrc-ilcd-attributional-2010`

#### Outputs

##### Product flows

###### Liquid water returned from original-cohort work (`service_water_return`)

Liquid water returned from original-cohort work. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. Keep the original first-release cohort Q_c and observation horizon H; this event never creates Q. Actual rework needs manufacturer/spec permission and postwork tests/acceptance/disposition to remain qualified, but unauthorized, failed or held work still has all real flows and burdens recorded; ordinary humidity needs no work permission. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Liquid water returned from original-cohort work
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service_water_return`
- Sources: `jrc-ilcd-attributional-2010`

##### Waste flows

###### Postrelease leg-cleaning wastewater (`service_wastewater`)

Postrelease leg-cleaning wastewater. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. Keep the original first-release cohort Q_c and observation horizon H; this event never creates Q. Actual rework needs manufacturer/spec permission and postwork tests/acceptance/disposition to remain qualified, but unauthorized, failed or held work still has all real flows and burdens recorded; ordinary humidity needs no work permission. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Postrelease leg-cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service_wastewater`
- Sources: `jrc-ilcd-attributional-2010`

###### Removed threaded leveling foot waste (`removed_foot`)

Removed threaded leveling foot waste. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. Keep the original first-release cohort Q_c and observation horizon H; this event never creates Q. Actual rework needs manufacturer/spec permission and postwork tests/acceptance/disposition to remain qualified, but unauthorized, failed or held work still has all real flows and burdens recorded; ordinary humidity needs no work permission. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Removed threaded leveling foot waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_removed_foot`
- Sources: `jrc-ilcd-attributional-2010`

###### Removed steel bolt waste (`removed_bolt`)

Removed steel bolt waste. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. Keep the original first-release cohort Q_c and observation horizon H; this event never creates Q. Actual rework needs manufacturer/spec permission and postwork tests/acceptance/disposition to remain qualified, but unauthorized, failed or held work still has all real flows and burdens recorded; ordinary humidity needs no work permission. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Removed steel bolt waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_removed_bolt`
- Sources: `jrc-ilcd-attributional-2010`

###### Discarded previously released steel table-leg assembly (`service_part_waste`)

Discarded previously released steel table-leg assembly. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. Keep the original first-release cohort Q_c and observation horizon H; this event never creates Q. Actual rework needs manufacturer/spec permission and postwork tests/acceptance/disposition to remain qualified, but unauthorized, failed or held work still has all real flows and burdens recorded; ordinary humidity needs no work permission. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Discarded previously released steel table-leg assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service_part_waste`
- Sources: `jrc-ilcd-attributional-2010`

##### Elementary flows

###### Water vapour released to ambient air during storage (`storage_water_out`)

Water vapour released to ambient air during storage. Actual ordinary FG/package moisture loss to air during storage and handling; no invented repair or new production. Keep separate from manufacturing drying. Keep the original first-release cohort Q_c and observation horizon H; this event never creates Q. Actual rework needs manufacturer/spec permission and postwork tests/acceptance/disposition to remain qualified, but unauthorized, failed or held work still has all real flows and burdens recorded; ordinary humidity needs no work permission. Elementary emission to unspecified air; ordinary molecular H2O vapour, CAS 7732-18-5; Mass/kg, no fixed geography. Native reference-ILCD comment and full multilingual synonyms are identity context only, not an emission factor. Broad/inconsistent aliases do not authorize another isotope, phase, molecule, aggregate or environmental compartment; verify this exact actual species and carbon origin where relevant. Air subcompartments, indoor, soil/water and long-term rows are not interchangeable. NOx/VOC/total particles or a mass residual cannot establish this species. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. No secondary-property density or item mass is used.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_water_out`
- Sources: `jrc-ilcd-attributional-2010`

### Process: Physical assets fluids and actual period service (`assets`)

#### Inputs

##### Product flows

###### Metal-cutting saw (`saw_in`)

Metal-cutting saw. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. This is a full physical asset/part/fluid event with complete opening/closing and installed charge states, separate from measured causal period service burden. New ingress remains even when kept in closing wet/installed stock; no whole machine per kg, fixed life or invented replacement weight. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Metal-cutting saw
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_saw_in`
- Sources: `jrc-ilcd-attributional-2010`

###### Arc-welding machine (`welder_in`)

Arc-welding machine. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. This is a full physical asset/part/fluid event with complete opening/closing and installed charge states, separate from measured causal period service burden. New ingress remains even when kept in closing wet/installed stock; no whole machine per kg, fixed life or invented replacement weight. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Arc-welding machine
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_welder_in`
- Sources: `jrc-ilcd-attributional-2010`

###### Powder-curing oven (`oven_in`)

Powder-curing oven. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. This is a full physical asset/part/fluid event with complete opening/closing and installed charge states, separate from measured causal period service burden. New ingress remains even when kept in closing wet/installed stock; no whole machine per kg, fixed life or invented replacement weight. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Powder-curing oven
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_oven_in`
- Sources: `jrc-ilcd-attributional-2010`

###### Air compressor (`compressor_in`)

Air compressor. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. This is a full physical asset/part/fluid event with complete opening/closing and installed charge states, separate from measured causal period service burden. New ingress remains even when kept in closing wet/installed stock; no whole machine per kg, fixed life or invented replacement weight. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Air compressor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_compressor_in`
- Sources: `jrc-ilcd-attributional-2010`

###### Steel welding fixture (`fixture_in`)

Steel welding fixture. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. This is a full physical asset/part/fluid event with complete opening/closing and installed charge states, separate from measured causal period service burden. New ingress remains even when kept in closing wet/installed stock; no whole machine per kg, fixed life or invented replacement weight. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Steel welding fixture
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fixture_in`
- Sources: `jrc-ilcd-attributional-2010`

###### Whole mineral lubricating-oil preparation (`new_oil`)

Whole mineral lubricating-oil preparation. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. This is a full physical asset/part/fluid event with complete opening/closing and installed charge states, separate from measured causal period service burden. New ingress remains even when kept in closing wet/installed stock; no whole machine per kg, fixed life or invented replacement weight. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Whole mineral lubricating-oil preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_new_oil`
- Sources: `jrc-ilcd-attributional-2010`

###### Liquid cooling-water charge (`cooling_charge`)

Liquid cooling-water charge. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. This is a full physical asset/part/fluid event with complete opening/closing and installed charge states, separate from measured causal period service burden. New ingress remains even when kept in closing wet/installed stock; no whole machine per kg, fixed life or invented replacement weight. Product; treated industrial process/service/utility water family, with reclaimed/recirculating water synonyms; no fixed chemistry, grade, geography or density. Verify actual source/treatment/quality and liquid supply state. Count external ingress once; internal circulation is not a second purchase. Carrier water already inside a supplied preparation is not this separate input. Retain full wet closing stock and actual additional ingress together. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. No secondary-property density or item mass is used.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooling_charge`
- Sources: `jrc-ilcd-attributional-2010`

###### Complete metal-cutting saw blade (`blade_in`)

Complete metal-cutting saw blade. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. This is a full physical asset/part/fluid event with complete opening/closing and installed charge states, separate from measured causal period service burden. New ingress remains even when kept in closing wet/installed stock; no whole machine per kg, fixed life or invented replacement weight. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Complete metal-cutting saw blade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_blade_in`
- Sources: `jrc-ilcd-attributional-2010`

###### Copper welding contact tip (`tip_in`)

Copper welding contact tip. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. This is a full physical asset/part/fluid event with complete opening/closing and installed charge states, separate from measured causal period service burden. New ingress remains even when kept in closing wet/installed stock; no whole machine per kg, fixed life or invented replacement weight. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Copper welding contact tip
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_tip_in`
- Sources: `jrc-ilcd-attributional-2010`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Liquid cooling water returned to supplier (`cooling_return`)

Liquid cooling water returned to supplier. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. This is a full physical asset/part/fluid event with complete opening/closing and installed charge states, separate from measured causal period service burden. New ingress remains even when kept in closing wet/installed stock; no whole machine per kg, fixed life or invented replacement weight. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Liquid cooling water returned to supplier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooling_return`
- Sources: `jrc-ilcd-attributional-2010`

##### Waste flows

###### Retired metal-cutting saw (`saw_out`)

Retired metal-cutting saw. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. This is a full physical asset/part/fluid event with complete opening/closing and installed charge states, separate from measured causal period service burden. New ingress remains even when kept in closing wet/installed stock; no whole machine per kg, fixed life or invented replacement weight. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Retired metal-cutting saw
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_saw_out`
- Sources: `jrc-ilcd-attributional-2010`

###### Retired arc-welding machine (`welder_out`)

Retired arc-welding machine. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. This is a full physical asset/part/fluid event with complete opening/closing and installed charge states, separate from measured causal period service burden. New ingress remains even when kept in closing wet/installed stock; no whole machine per kg, fixed life or invented replacement weight. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Retired arc-welding machine
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_welder_out`
- Sources: `jrc-ilcd-attributional-2010`

###### Retired powder-curing oven (`oven_out`)

Retired powder-curing oven. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. This is a full physical asset/part/fluid event with complete opening/closing and installed charge states, separate from measured causal period service burden. New ingress remains even when kept in closing wet/installed stock; no whole machine per kg, fixed life or invented replacement weight. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Retired powder-curing oven
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_oven_out`
- Sources: `jrc-ilcd-attributional-2010`

###### Retired air compressor (`compressor_out`)

Retired air compressor. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. This is a full physical asset/part/fluid event with complete opening/closing and installed charge states, separate from measured causal period service burden. New ingress remains even when kept in closing wet/installed stock; no whole machine per kg, fixed life or invented replacement weight. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Retired air compressor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_compressor_out`
- Sources: `jrc-ilcd-attributional-2010`

###### Retired steel welding fixture (`fixture_out`)

Retired steel welding fixture. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. This is a full physical asset/part/fluid event with complete opening/closing and installed charge states, separate from measured causal period service burden. New ingress remains even when kept in closing wet/installed stock; no whole machine per kg, fixed life or invented replacement weight. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Retired steel welding fixture
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fixture_out`
- Sources: `jrc-ilcd-attributional-2010`

###### Removed whole mineral lubricating-oil preparation (`used_oil`)

Removed whole mineral lubricating-oil preparation. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. This is a full physical asset/part/fluid event with complete opening/closing and installed charge states, separate from measured causal period service burden. New ingress remains even when kept in closing wet/installed stock; no whole machine per kg, fixed life or invented replacement weight. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Removed whole mineral lubricating-oil preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_used_oil`
- Sources: `jrc-ilcd-attributional-2010`

###### Removed cooling-water wastewater (`cooling_waste`)

Removed cooling-water wastewater. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. This is a full physical asset/part/fluid event with complete opening/closing and installed charge states, separate from measured causal period service burden. New ingress remains even when kept in closing wet/installed stock; no whole machine per kg, fixed life or invented replacement weight. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Removed cooling-water wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooling_waste`
- Sources: `jrc-ilcd-attributional-2010`

###### Removed metal-cutting saw blade waste (`blade_out`)

Removed metal-cutting saw blade waste. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. This is a full physical asset/part/fluid event with complete opening/closing and installed charge states, separate from measured causal period service burden. New ingress remains even when kept in closing wet/installed stock; no whole machine per kg, fixed life or invented replacement weight. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Removed metal-cutting saw blade waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_blade_out`
- Sources: `jrc-ilcd-attributional-2010`

###### Removed copper welding contact tip waste (`tip_out`)

Removed copper welding contact tip waste. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. This is a full physical asset/part/fluid event with complete opening/closing and installed charge states, separate from measured causal period service burden. New ingress remains even when kept in closing wet/installed stock; no whole machine per kg, fixed life or invented replacement weight. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero.

- Selected flow: Removed copper welding contact tip waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_tip_out`
- Sources: `jrc-ilcd-attributional-2010`

##### Elementary flows

### Process: Separate whole-article gross packaging events (`packaging`)

#### Inputs

##### Product flows

###### Corrugated shipping carton (`pkg_carton_p`)

One actual complete corrugated-paperboard transport carton of the declared construction and configuration, not a collection of cartons, plastic bags, film, liners or other packaging. The compatible atomic Product-flow UUID remains unresolved. Record the actual board/flute/ply configuration, fibre composition, coatings/lamination, wet condition, integral adhesives/fasteners and supplier scope; no generic fibre fraction, treatment, size, weight or lifetime is assumed. Include integral supplied constituents once within the whole carton, while actually separate inserts, tape or other materials retain their own disjoint rows and one upstream owner. Keep this card's existing P/I/ER/S/EO role as defined by the packaging boundary and raw protocol, including packaging_receipt_basis where present; a new provider identity must not change that event definition. Retain the complete measured wet gross quantity and the original event/gate/custody/cohort in the card's stated Mass/kg unit, whether immediately used or retained at closing. Keep opening/closing empty, attached and reusable stock, internal reuse and independently measured material/water-change legs; no stock, burden or economic-share correction shrinks the gross leg. Actual manufacture/service burdens are attributed once separately using the existing original-cohort rule and sole normalization; a gross receipt or outflow alone creates no new manufacture, procurement burden, provider link or credit. Resolve a physically compatible carton identity/provider before binding it; missing identity is disclosed and never replaced with a mixed packaging category or an invented UUID.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pkg_carton_p`
- Sources: `metaco-table-leg-route`; `jrc-ilcd-attributional-2010`

###### Corrugated shipping carton (`pkg_carton_i`)

One actual complete corrugated-paperboard transport carton of the declared construction and configuration, not a collection of cartons, plastic bags, film, liners or other packaging. The compatible atomic Product-flow UUID remains unresolved. Record the actual board/flute/ply configuration, fibre composition, coatings/lamination, wet condition, integral adhesives/fasteners and supplier scope; no generic fibre fraction, treatment, size, weight or lifetime is assumed. Include integral supplied constituents once within the whole carton, while actually separate inserts, tape or other materials retain their own disjoint rows and one upstream owner. Keep this card's existing P/I/ER/S/EO role as defined by the packaging boundary and raw protocol, including packaging_receipt_basis where present; a new provider identity must not change that event definition. Retain the complete measured wet gross quantity and the original event/gate/custody/cohort in the card's stated Mass/kg unit, whether immediately used or retained at closing. Keep opening/closing empty, attached and reusable stock, internal reuse and independently measured material/water-change legs; no stock, burden or economic-share correction shrinks the gross leg. Actual manufacture/service burdens are attributed once separately using the existing original-cohort rule and sole normalization; a gross receipt or outflow alone creates no new manufacture, procurement burden, provider link or credit. Resolve a physically compatible carton identity/provider before binding it; missing identity is disclosed and never replaced with a mixed packaging category or an invented UUID.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pkg_carton_i`
- Sources: `metaco-table-leg-route`; `jrc-ilcd-attributional-2010`

###### Corrugated shipping carton (`pkg_carton_er`)

One actual complete corrugated-paperboard transport carton of the declared construction and configuration, not a collection of cartons, plastic bags, film, liners or other packaging. The compatible atomic Product-flow UUID remains unresolved. Record the actual board/flute/ply configuration, fibre composition, coatings/lamination, wet condition, integral adhesives/fasteners and supplier scope; no generic fibre fraction, treatment, size, weight or lifetime is assumed. Include integral supplied constituents once within the whole carton, while actually separate inserts, tape or other materials retain their own disjoint rows and one upstream owner. Keep this card's existing P/I/ER/S/EO role as defined by the packaging boundary and raw protocol, including packaging_receipt_basis where present; a new provider identity must not change that event definition. Retain the complete measured wet gross quantity and the original event/gate/custody/cohort in the card's stated Mass/kg unit, whether immediately used or retained at closing. Keep opening/closing empty, attached and reusable stock, internal reuse and independently measured material/water-change legs; no stock, burden or economic-share correction shrinks the gross leg. Actual manufacture/service burdens are attributed once separately using the existing original-cohort rule and sole normalization; a gross receipt or outflow alone creates no new manufacture, procurement burden, provider link or credit. Resolve a physically compatible carton identity/provider before binding it; missing identity is disclosed and never replaced with a mixed packaging category or an invented UUID.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pkg_carton_er`
- Sources: `metaco-table-leg-route`; `jrc-ilcd-attributional-2010`

###### Polyethylene bubble-sheet wrap (`pkg_bubble_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. Polyethylene bubble-sheet wrap. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. Packaging leg P: new external purchase of this one material/article, measured as complete gross V_pkg_bubble_p. P/I retain one actual upstream owner; ER/S/EO/W create no new procurement/provider burden or automatic credit. This physical amount is never stock-corrected or economically scaled. Full opening/closing empty, attached-WIP/FG and reusable wet stocks stay in the pool ledger; internal reuse cancels. Whole supplied article and its contained water/components are disjoint from separately supplied components, with no duplicate incoming/outgoing terms; closing retention does not erase true ingress. Product; polyethylene film/sheet, CAS 9002-88-4, production mix at plant; branching/form varies, no fixed grade/geography. Restrict to actual completed PE bubble-sheet wrap with its forming upstream once, not resin pellets, PET, a bag or whole carton. The native PET mention describes a competing polymer, not PE identity. The luggage/leather classification is isolated from the consistent PE name/CAS/form and is disclosed; no leather burden follows. Supplier composite/foam variants need separate confirmation. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. No secondary-property density or item mass is used. Apply calc_packaging real F_in/F_out and X only for another OTHER same-side duplicate; P/I are event-exclusive and full wet stocks never erase true material/water exchange.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pkg_bubble_p`
- Sources: `metaco-table-leg-route`; `jrc-ilcd-attributional-2010`

###### Polyethylene bubble-sheet wrap (`pkg_bubble_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. Polyethylene bubble-sheet wrap. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. Packaging leg I: first non-purchased external physical ingress of this one material/article, measured as complete gross V_pkg_bubble_i. P/I retain one actual upstream owner; ER/S/EO/W create no new procurement/provider burden or automatic credit. This physical amount is never stock-corrected or economically scaled. Full opening/closing empty, attached-WIP/FG and reusable wet stocks stay in the pool ledger; internal reuse cancels. Whole supplied article and its contained water/components are disjoint from separately supplied components, with no duplicate incoming/outgoing terms; closing retention does not erase true ingress. Product; polyethylene film/sheet, CAS 9002-88-4, production mix at plant; branching/form varies, no fixed grade/geography. Restrict to actual completed PE bubble-sheet wrap with its forming upstream once, not resin pellets, PET, a bag or whole carton. The native PET mention describes a competing polymer, not PE identity. The luggage/leather classification is isolated from the consistent PE name/CAS/form and is disclosed; no leather burden follows. Supplier composite/foam variants need separate confirmation. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. No secondary-property density or item mass is used. Apply calc_packaging real F_in/F_out and X only for another OTHER same-side duplicate; P/I are event-exclusive and full wet stocks never erase true material/water exchange.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pkg_bubble_i`
- Sources: `metaco-table-leg-route`; `jrc-ilcd-attributional-2010`

###### Polyethylene bubble-sheet wrap (`pkg_bubble_er`)

Polyethylene bubble-sheet wrap. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. Packaging leg ER: external return received of this one material/article, measured as complete gross V_pkg_bubble_er. P/I retain one actual upstream owner; ER/S/EO/W create no new procurement/provider burden or automatic credit. This physical amount is never stock-corrected or economically scaled. Full opening/closing empty, attached-WIP/FG and reusable wet stocks stay in the pool ledger; internal reuse cancels. Whole supplied article and its contained water/components are disjoint from separately supplied components, with no duplicate incoming/outgoing terms; closing retention does not erase true ingress. Product; polyethylene film/sheet, CAS 9002-88-4, production mix at plant; branching/form varies, no fixed grade/geography. Restrict to actual completed PE bubble-sheet wrap with its forming upstream once, not resin pellets, PET, a bag or whole carton. The native PET mention describes a competing polymer, not PE identity. The luggage/leather classification is isolated from the consistent PE name/CAS/form and is disclosed; no leather burden follows. Supplier composite/foam variants need separate confirmation. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. No secondary-property density or item mass is used. Apply calc_packaging real F_in/F_out and X only for another OTHER same-side duplicate; P/I are event-exclusive and full wet stocks never erase true material/water exchange.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pkg_bubble_er`
- Sources: `metaco-table-leg-route`; `jrc-ilcd-attributional-2010`

###### Whole wooden transport pallet (`pkg_pallet_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. Whole wooden transport pallet. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. Packaging leg P: new external purchase of this one material/article, measured as complete gross V_pkg_pallet_p. P/I retain one actual upstream owner; ER/S/EO/W create no new procurement/provider burden or automatic credit. This physical amount is never stock-corrected or economically scaled. Full opening/closing empty, attached-WIP/FG and reusable wet stocks stay in the pool ledger; internal reuse cancels. Whole supplied article and its contained water/components are disjoint from separately supplied components, with no duplicate incoming/outgoing terms; closing retention does not erase true ingress. Product; finished manufactured wooden portable load-board family, production mix at plant; includes pallet, box/platform/collar alternatives with no fixed size, species, geography or CAS. Select this one whole actual wooden transport pallet and its included nails/moisture once; collars, repair wood, loose nails, plastic pallets and cargo are not the selected article. A separately repaired or supplied part needs its own atomic card and disjoint component bridge. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. No secondary-property density or item mass is used. Apply calc_packaging real F_in/F_out and X only for another OTHER same-side duplicate; P/I are event-exclusive and full wet stocks never erase true material/water exchange.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pkg_pallet_p`
- Sources: `metaco-table-leg-route`; `jrc-ilcd-attributional-2010`

###### Whole wooden transport pallet (`pkg_pallet_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. Whole wooden transport pallet. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. Packaging leg I: first non-purchased external physical ingress of this one material/article, measured as complete gross V_pkg_pallet_i. P/I retain one actual upstream owner; ER/S/EO/W create no new procurement/provider burden or automatic credit. This physical amount is never stock-corrected or economically scaled. Full opening/closing empty, attached-WIP/FG and reusable wet stocks stay in the pool ledger; internal reuse cancels. Whole supplied article and its contained water/components are disjoint from separately supplied components, with no duplicate incoming/outgoing terms; closing retention does not erase true ingress. Product; finished manufactured wooden portable load-board family, production mix at plant; includes pallet, box/platform/collar alternatives with no fixed size, species, geography or CAS. Select this one whole actual wooden transport pallet and its included nails/moisture once; collars, repair wood, loose nails, plastic pallets and cargo are not the selected article. A separately repaired or supplied part needs its own atomic card and disjoint component bridge. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. No secondary-property density or item mass is used. Apply calc_packaging real F_in/F_out and X only for another OTHER same-side duplicate; P/I are event-exclusive and full wet stocks never erase true material/water exchange.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pkg_pallet_i`
- Sources: `metaco-table-leg-route`; `jrc-ilcd-attributional-2010`

###### Whole wooden transport pallet (`pkg_pallet_er`)

Whole wooden transport pallet. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. Packaging leg ER: external return received of this one material/article, measured as complete gross V_pkg_pallet_er. P/I retain one actual upstream owner; ER/S/EO/W create no new procurement/provider burden or automatic credit. This physical amount is never stock-corrected or economically scaled. Full opening/closing empty, attached-WIP/FG and reusable wet stocks stay in the pool ledger; internal reuse cancels. Whole supplied article and its contained water/components are disjoint from separately supplied components, with no duplicate incoming/outgoing terms; closing retention does not erase true ingress. Product; finished manufactured wooden portable load-board family, production mix at plant; includes pallet, box/platform/collar alternatives with no fixed size, species, geography or CAS. Select this one whole actual wooden transport pallet and its included nails/moisture once; collars, repair wood, loose nails, plastic pallets and cargo are not the selected article. A separately repaired or supplied part needs its own atomic card and disjoint component bridge. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. No secondary-property density or item mass is used. Apply calc_packaging real F_in/F_out and X only for another OTHER same-side duplicate; P/I are event-exclusive and full wet stocks never erase true material/water exchange.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pkg_pallet_er`
- Sources: `metaco-table-leg-route`; `jrc-ilcd-attributional-2010`

###### Whole polypropylene-backed adhesive packing tape (`pkg_tape_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. Whole polypropylene-backed adhesive packing tape. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. Packaging leg P: new external purchase of this one material/article, measured as complete gross V_pkg_tape_p. P/I retain one actual upstream owner; ER/S/EO/W create no new procurement/provider burden or automatic credit. This physical amount is never stock-corrected or economically scaled. Full opening/closing empty, attached-WIP/FG and reusable wet stocks stay in the pool ledger; internal reuse cancels. Whole supplied article and its contained water/components are disjoint from separately supplied components, with no duplicate incoming/outgoing terms; closing retention does not erase true ingress. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero. Apply calc_packaging real F_in/F_out and X only for another OTHER same-side duplicate; P/I are event-exclusive and full wet stocks never erase true material/water exchange.

- Selected flow: Whole polypropylene-backed adhesive packing tape
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pkg_tape_p`
- Sources: `metaco-table-leg-route`; `jrc-ilcd-attributional-2010`

###### Whole polypropylene-backed adhesive packing tape (`pkg_tape_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. Whole polypropylene-backed adhesive packing tape. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. Packaging leg I: first non-purchased external physical ingress of this one material/article, measured as complete gross V_pkg_tape_i. P/I retain one actual upstream owner; ER/S/EO/W create no new procurement/provider burden or automatic credit. This physical amount is never stock-corrected or economically scaled. Full opening/closing empty, attached-WIP/FG and reusable wet stocks stay in the pool ledger; internal reuse cancels. Whole supplied article and its contained water/components are disjoint from separately supplied components, with no duplicate incoming/outgoing terms; closing retention does not erase true ingress. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero. Apply calc_packaging real F_in/F_out and X only for another OTHER same-side duplicate; P/I are event-exclusive and full wet stocks never erase true material/water exchange.

- Selected flow: Whole polypropylene-backed adhesive packing tape
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pkg_tape_i`
- Sources: `metaco-table-leg-route`; `jrc-ilcd-attributional-2010`

###### Whole polypropylene-backed adhesive packing tape (`pkg_tape_er`)

Whole polypropylene-backed adhesive packing tape. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. Packaging leg ER: external return received of this one material/article, measured as complete gross V_pkg_tape_er. P/I retain one actual upstream owner; ER/S/EO/W create no new procurement/provider burden or automatic credit. This physical amount is never stock-corrected or economically scaled. Full opening/closing empty, attached-WIP/FG and reusable wet stocks stay in the pool ledger; internal reuse cancels. Whole supplied article and its contained water/components are disjoint from separately supplied components, with no duplicate incoming/outgoing terms; closing retention does not erase true ingress. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero. Apply calc_packaging real F_in/F_out and X only for another OTHER same-side duplicate; P/I are event-exclusive and full wet stocks never erase true material/water exchange.

- Selected flow: Whole polypropylene-backed adhesive packing tape
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pkg_tape_er`
- Sources: `metaco-table-leg-route`; `jrc-ilcd-attributional-2010`

###### Whole polyethylene powder-coating sack (`pkg_sack_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. Whole polyethylene powder-coating sack. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. Packaging leg P: new external purchase of this one material/article, measured as complete gross V_pkg_sack_p. P/I retain one actual upstream owner; ER/S/EO/W create no new procurement/provider burden or automatic credit. This physical amount is never stock-corrected or economically scaled. Full opening/closing empty, attached-WIP/FG and reusable wet stocks stay in the pool ledger; internal reuse cancels. Whole supplied article and its contained water/components are disjoint from separately supplied components, with no duplicate incoming/outgoing terms; closing retention does not erase true ingress. Product; polyethylene bag, CAS 9002-88-4, production mix at plant; whole PE packaging/storage/conveyance bag with no fixed grade/geography/recipe. This role is one actual whole PE powder sack; no PP woven bag, paper sack, liner/thread or PET film is substituted. Separate liner/thread only when actually supplied separately and not already inside the whole bag mass/provider. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. No secondary-property density or item mass is used. Apply calc_packaging real F_in/F_out and X only for another OTHER same-side duplicate; P/I are event-exclusive and full wet stocks never erase true material/water exchange.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pkg_sack_p`
- Sources: `metaco-table-leg-route`; `jrc-ilcd-attributional-2010`

###### Whole polyethylene powder-coating sack (`pkg_sack_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. Whole polyethylene powder-coating sack. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. Packaging leg I: first non-purchased external physical ingress of this one material/article, measured as complete gross V_pkg_sack_i. P/I retain one actual upstream owner; ER/S/EO/W create no new procurement/provider burden or automatic credit. This physical amount is never stock-corrected or economically scaled. Full opening/closing empty, attached-WIP/FG and reusable wet stocks stay in the pool ledger; internal reuse cancels. Whole supplied article and its contained water/components are disjoint from separately supplied components, with no duplicate incoming/outgoing terms; closing retention does not erase true ingress. Product; polyethylene bag, CAS 9002-88-4, production mix at plant; whole PE packaging/storage/conveyance bag with no fixed grade/geography/recipe. This role is one actual whole PE powder sack; no PP woven bag, paper sack, liner/thread or PET film is substituted. Separate liner/thread only when actually supplied separately and not already inside the whole bag mass/provider. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. No secondary-property density or item mass is used. Apply calc_packaging real F_in/F_out and X only for another OTHER same-side duplicate; P/I are event-exclusive and full wet stocks never erase true material/water exchange.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pkg_sack_i`
- Sources: `metaco-table-leg-route`; `jrc-ilcd-attributional-2010`

###### Whole polyethylene powder-coating sack (`pkg_sack_er`)

Whole polyethylene powder-coating sack. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. Packaging leg ER: external return received of this one material/article, measured as complete gross V_pkg_sack_er. P/I retain one actual upstream owner; ER/S/EO/W create no new procurement/provider burden or automatic credit. This physical amount is never stock-corrected or economically scaled. Full opening/closing empty, attached-WIP/FG and reusable wet stocks stay in the pool ledger; internal reuse cancels. Whole supplied article and its contained water/components are disjoint from separately supplied components, with no duplicate incoming/outgoing terms; closing retention does not erase true ingress. Product; polyethylene bag, CAS 9002-88-4, production mix at plant; whole PE packaging/storage/conveyance bag with no fixed grade/geography/recipe. This role is one actual whole PE powder sack; no PP woven bag, paper sack, liner/thread or PET film is substituted. Separate liner/thread only when actually supplied separately and not already inside the whole bag mass/provider. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. No secondary-property density or item mass is used. Apply calc_packaging real F_in/F_out and X only for another OTHER same-side duplicate; P/I are event-exclusive and full wet stocks never erase true material/water exchange.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pkg_sack_er`
- Sources: `metaco-table-leg-route`; `jrc-ilcd-attributional-2010`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Corrugated shipping carton (`pkg_carton_s`)

One actual complete corrugated-paperboard transport carton of the declared construction and configuration, not a collection of cartons, plastic bags, film, liners or other packaging. The compatible atomic Product-flow UUID remains unresolved. Record the actual board/flute/ply configuration, fibre composition, coatings/lamination, wet condition, integral adhesives/fasteners and supplier scope; no generic fibre fraction, treatment, size, weight or lifetime is assumed. Include integral supplied constituents once within the whole carton, while actually separate inserts, tape or other materials retain their own disjoint rows and one upstream owner. Keep this card's existing P/I/ER/S/EO role as defined by the packaging boundary and raw protocol, including packaging_receipt_basis where present; a new provider identity must not change that event definition. Retain the complete measured wet gross quantity and the original event/gate/custody/cohort in the card's stated Mass/kg unit, whether immediately used or retained at closing. Keep opening/closing empty, attached and reusable stock, internal reuse and independently measured material/water-change legs; no stock, burden or economic-share correction shrinks the gross leg. Actual manufacture/service burdens are attributed once separately using the existing original-cohort rule and sole normalization; a gross receipt or outflow alone creates no new manufacture, procurement burden, provider link or credit. Resolve a physically compatible carton identity/provider before binding it; missing identity is disclosed and never replaced with a mixed packaging category or an invented UUID.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pkg_carton_s`
- Sources: `metaco-table-leg-route`; `jrc-ilcd-attributional-2010`

###### Corrugated shipping carton (`pkg_carton_eo`)

One actual complete corrugated-paperboard transport carton of the declared construction and configuration, not a collection of cartons, plastic bags, film, liners or other packaging. The compatible atomic Product-flow UUID remains unresolved. Record the actual board/flute/ply configuration, fibre composition, coatings/lamination, wet condition, integral adhesives/fasteners and supplier scope; no generic fibre fraction, treatment, size, weight or lifetime is assumed. Include integral supplied constituents once within the whole carton, while actually separate inserts, tape or other materials retain their own disjoint rows and one upstream owner. Keep this card's existing P/I/ER/S/EO role as defined by the packaging boundary and raw protocol, including packaging_receipt_basis where present; a new provider identity must not change that event definition. Retain the complete measured wet gross quantity and the original event/gate/custody/cohort in the card's stated Mass/kg unit, whether immediately used or retained at closing. Keep opening/closing empty, attached and reusable stock, internal reuse and independently measured material/water-change legs; no stock, burden or economic-share correction shrinks the gross leg. Actual manufacture/service burdens are attributed once separately using the existing original-cohort rule and sole normalization; a gross receipt or outflow alone creates no new manufacture, procurement burden, provider link or credit. Resolve a physically compatible carton identity/provider before binding it; missing identity is disclosed and never replaced with a mixed packaging category or an invented UUID.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pkg_carton_eo`
- Sources: `metaco-table-leg-route`; `jrc-ilcd-attributional-2010`

###### Polyethylene bubble-sheet wrap (`pkg_bubble_s`)

Polyethylene bubble-sheet wrap. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. Packaging leg S: article leaving with gross physical shipment of this one material/article, measured as complete gross V_pkg_bubble_s. P/I retain one actual upstream owner; ER/S/EO/W create no new procurement/provider burden or automatic credit. This physical amount is never stock-corrected or economically scaled. Full opening/closing empty, attached-WIP/FG and reusable wet stocks stay in the pool ledger; internal reuse cancels. Whole supplied article and its contained water/components are disjoint from separately supplied components, with no duplicate incoming/outgoing terms; closing retention does not erase true ingress. Product; polyethylene film/sheet, CAS 9002-88-4, production mix at plant; branching/form varies, no fixed grade/geography. Restrict to actual completed PE bubble-sheet wrap with its forming upstream once, not resin pellets, PET, a bag or whole carton. The native PET mention describes a competing polymer, not PE identity. The luggage/leather classification is isolated from the consistent PE name/CAS/form and is disclosed; no leather burden follows. Supplier composite/foam variants need separate confirmation. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. No secondary-property density or item mass is used. Apply calc_packaging real F_in/F_out and X only for another OTHER same-side duplicate; P/I are event-exclusive and full wet stocks never erase true material/water exchange.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pkg_bubble_s`
- Sources: `metaco-table-leg-route`; `jrc-ilcd-attributional-2010`

###### Polyethylene bubble-sheet wrap (`pkg_bubble_eo`)

Polyethylene bubble-sheet wrap. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. Packaging leg EO: external return sent of this one material/article, measured as complete gross V_pkg_bubble_eo. P/I retain one actual upstream owner; ER/S/EO/W create no new procurement/provider burden or automatic credit. This physical amount is never stock-corrected or economically scaled. Full opening/closing empty, attached-WIP/FG and reusable wet stocks stay in the pool ledger; internal reuse cancels. Whole supplied article and its contained water/components are disjoint from separately supplied components, with no duplicate incoming/outgoing terms; closing retention does not erase true ingress. Product; polyethylene film/sheet, CAS 9002-88-4, production mix at plant; branching/form varies, no fixed grade/geography. Restrict to actual completed PE bubble-sheet wrap with its forming upstream once, not resin pellets, PET, a bag or whole carton. The native PET mention describes a competing polymer, not PE identity. The luggage/leather classification is isolated from the consistent PE name/CAS/form and is disclosed; no leather burden follows. Supplier composite/foam variants need separate confirmation. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. No secondary-property density or item mass is used. Apply calc_packaging real F_in/F_out and X only for another OTHER same-side duplicate; P/I are event-exclusive and full wet stocks never erase true material/water exchange.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pkg_bubble_eo`
- Sources: `metaco-table-leg-route`; `jrc-ilcd-attributional-2010`

###### Whole wooden transport pallet (`pkg_pallet_s`)

Whole wooden transport pallet. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. Packaging leg S: article leaving with gross physical shipment of this one material/article, measured as complete gross V_pkg_pallet_s. P/I retain one actual upstream owner; ER/S/EO/W create no new procurement/provider burden or automatic credit. This physical amount is never stock-corrected or economically scaled. Full opening/closing empty, attached-WIP/FG and reusable wet stocks stay in the pool ledger; internal reuse cancels. Whole supplied article and its contained water/components are disjoint from separately supplied components, with no duplicate incoming/outgoing terms; closing retention does not erase true ingress. Product; finished manufactured wooden portable load-board family, production mix at plant; includes pallet, box/platform/collar alternatives with no fixed size, species, geography or CAS. Select this one whole actual wooden transport pallet and its included nails/moisture once; collars, repair wood, loose nails, plastic pallets and cargo are not the selected article. A separately repaired or supplied part needs its own atomic card and disjoint component bridge. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. No secondary-property density or item mass is used. Apply calc_packaging real F_in/F_out and X only for another OTHER same-side duplicate; P/I are event-exclusive and full wet stocks never erase true material/water exchange.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pkg_pallet_s`
- Sources: `metaco-table-leg-route`; `jrc-ilcd-attributional-2010`

###### Whole wooden transport pallet (`pkg_pallet_eo`)

Whole wooden transport pallet. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. Packaging leg EO: external return sent of this one material/article, measured as complete gross V_pkg_pallet_eo. P/I retain one actual upstream owner; ER/S/EO/W create no new procurement/provider burden or automatic credit. This physical amount is never stock-corrected or economically scaled. Full opening/closing empty, attached-WIP/FG and reusable wet stocks stay in the pool ledger; internal reuse cancels. Whole supplied article and its contained water/components are disjoint from separately supplied components, with no duplicate incoming/outgoing terms; closing retention does not erase true ingress. Product; finished manufactured wooden portable load-board family, production mix at plant; includes pallet, box/platform/collar alternatives with no fixed size, species, geography or CAS. Select this one whole actual wooden transport pallet and its included nails/moisture once; collars, repair wood, loose nails, plastic pallets and cargo are not the selected article. A separately repaired or supplied part needs its own atomic card and disjoint component bridge. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. No secondary-property density or item mass is used. Apply calc_packaging real F_in/F_out and X only for another OTHER same-side duplicate; P/I are event-exclusive and full wet stocks never erase true material/water exchange.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pkg_pallet_eo`
- Sources: `metaco-table-leg-route`; `jrc-ilcd-attributional-2010`

###### Whole polypropylene-backed adhesive packing tape (`pkg_tape_s`)

Whole polypropylene-backed adhesive packing tape. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. Packaging leg S: article leaving with gross physical shipment of this one material/article, measured as complete gross V_pkg_tape_s. P/I retain one actual upstream owner; ER/S/EO/W create no new procurement/provider burden or automatic credit. This physical amount is never stock-corrected or economically scaled. Full opening/closing empty, attached-WIP/FG and reusable wet stocks stay in the pool ledger; internal reuse cancels. Whole supplied article and its contained water/components are disjoint from separately supplied components, with no duplicate incoming/outgoing terms; closing retention does not erase true ingress. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero. Apply calc_packaging real F_in/F_out and X only for another OTHER same-side duplicate; P/I are event-exclusive and full wet stocks never erase true material/water exchange.

- Selected flow: Whole polypropylene-backed adhesive packing tape
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pkg_tape_s`
- Sources: `metaco-table-leg-route`; `jrc-ilcd-attributional-2010`

###### Whole polypropylene-backed adhesive packing tape (`pkg_tape_eo`)

Whole polypropylene-backed adhesive packing tape. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. Packaging leg EO: external return sent of this one material/article, measured as complete gross V_pkg_tape_eo. P/I retain one actual upstream owner; ER/S/EO/W create no new procurement/provider burden or automatic credit. This physical amount is never stock-corrected or economically scaled. Full opening/closing empty, attached-WIP/FG and reusable wet stocks stay in the pool ledger; internal reuse cancels. Whole supplied article and its contained water/components are disjoint from separately supplied components, with no duplicate incoming/outgoing terms; closing retention does not erase true ingress. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero. Apply calc_packaging real F_in/F_out and X only for another OTHER same-side duplicate; P/I are event-exclusive and full wet stocks never erase true material/water exchange.

- Selected flow: Whole polypropylene-backed adhesive packing tape
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pkg_tape_eo`
- Sources: `metaco-table-leg-route`; `jrc-ilcd-attributional-2010`

###### Whole polyethylene powder-coating sack (`pkg_sack_s`)

Whole polyethylene powder-coating sack. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. Packaging leg S: article leaving with gross physical shipment of this one material/article, measured as complete gross V_pkg_sack_s. P/I retain one actual upstream owner; ER/S/EO/W create no new procurement/provider burden or automatic credit. This physical amount is never stock-corrected or economically scaled. Full opening/closing empty, attached-WIP/FG and reusable wet stocks stay in the pool ledger; internal reuse cancels. Whole supplied article and its contained water/components are disjoint from separately supplied components, with no duplicate incoming/outgoing terms; closing retention does not erase true ingress. Product; polyethylene bag, CAS 9002-88-4, production mix at plant; whole PE packaging/storage/conveyance bag with no fixed grade/geography/recipe. This role is one actual whole PE powder sack; no PP woven bag, paper sack, liner/thread or PET film is substituted. Separate liner/thread only when actually supplied separately and not already inside the whole bag mass/provider. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. No secondary-property density or item mass is used. Apply calc_packaging real F_in/F_out and X only for another OTHER same-side duplicate; P/I are event-exclusive and full wet stocks never erase true material/water exchange.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pkg_sack_s`
- Sources: `metaco-table-leg-route`; `jrc-ilcd-attributional-2010`

###### Whole polyethylene powder-coating sack (`pkg_sack_eo`)

Whole polyethylene powder-coating sack. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. Packaging leg EO: external return sent of this one material/article, measured as complete gross V_pkg_sack_eo. P/I retain one actual upstream owner; ER/S/EO/W create no new procurement/provider burden or automatic credit. This physical amount is never stock-corrected or economically scaled. Full opening/closing empty, attached-WIP/FG and reusable wet stocks stay in the pool ledger; internal reuse cancels. Whole supplied article and its contained water/components are disjoint from separately supplied components, with no duplicate incoming/outgoing terms; closing retention does not erase true ingress. Product; polyethylene bag, CAS 9002-88-4, production mix at plant; whole PE packaging/storage/conveyance bag with no fixed grade/geography/recipe. This role is one actual whole PE powder sack; no PP woven bag, paper sack, liner/thread or PET film is substituted. Separate liner/thread only when actually supplied separately and not already inside the whole bag mass/provider. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. No secondary-property density or item mass is used. Apply calc_packaging real F_in/F_out and X only for another OTHER same-side duplicate; P/I are event-exclusive and full wet stocks never erase true material/water exchange.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pkg_sack_eo`
- Sources: `metaco-table-leg-route`; `jrc-ilcd-attributional-2010`

##### Waste flows

###### Discarded Corrugated shipping carton (`pkg_carton_w`)

Discarded Corrugated shipping carton. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. Packaging leg W: actual waste departure of this one material/article, measured as complete gross V_pkg_carton_w. P/I retain one actual upstream owner; ER/S/EO/W create no new procurement/provider burden or automatic credit. This physical amount is never stock-corrected or economically scaled. Full opening/closing empty, attached-WIP/FG and reusable wet stocks stay in the pool ledger; internal reuse cancels. Whole supplied article and its contained water/components are disjoint from separately supplied components, with no duplicate incoming/outgoing terms; closing retention does not erase true ingress. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero. Apply calc_packaging real F_in/F_out and X only for another OTHER same-side duplicate; P/I are event-exclusive and full wet stocks never erase true material/water exchange. This card is an external waste exchange only for an actually segregated departure of this material. If co-collected, its W is only the measured origin_W subaccount of pkg_mixed_waste; do not also instantiate this external exchange or treatment provider, and never add mixture plus constituents.

- Selected flow: Discarded Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pkg_carton_w`
- Sources: `metaco-table-leg-route`; `jrc-ilcd-attributional-2010`

###### Discarded Polyethylene bubble-sheet wrap (`pkg_bubble_w`)

Discarded Polyethylene bubble-sheet wrap. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. Packaging leg W: actual waste departure of this one material/article, measured as complete gross V_pkg_bubble_w. P/I retain one actual upstream owner; ER/S/EO/W create no new procurement/provider burden or automatic credit. This physical amount is never stock-corrected or economically scaled. Full opening/closing empty, attached-WIP/FG and reusable wet stocks stay in the pool ledger; internal reuse cancels. Whole supplied article and its contained water/components are disjoint from separately supplied components, with no duplicate incoming/outgoing terms; closing retention does not erase true ingress. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero. Apply calc_packaging real F_in/F_out and X only for another OTHER same-side duplicate; P/I are event-exclusive and full wet stocks never erase true material/water exchange. This card is an external waste exchange only for an actually segregated departure of this material. If co-collected, its W is only the measured origin_W subaccount of pkg_mixed_waste; do not also instantiate this external exchange or treatment provider, and never add mixture plus constituents.

- Selected flow: Discarded Polyethylene bubble-sheet wrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pkg_bubble_w`
- Sources: `metaco-table-leg-route`; `jrc-ilcd-attributional-2010`

###### Discarded Whole wooden transport pallet (`pkg_pallet_w`)

Discarded Whole wooden transport pallet. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. Packaging leg W: actual waste departure of this one material/article, measured as complete gross V_pkg_pallet_w. P/I retain one actual upstream owner; ER/S/EO/W create no new procurement/provider burden or automatic credit. This physical amount is never stock-corrected or economically scaled. Full opening/closing empty, attached-WIP/FG and reusable wet stocks stay in the pool ledger; internal reuse cancels. Whole supplied article and its contained water/components are disjoint from separately supplied components, with no duplicate incoming/outgoing terms; closing retention does not erase true ingress. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero. Apply calc_packaging real F_in/F_out and X only for another OTHER same-side duplicate; P/I are event-exclusive and full wet stocks never erase true material/water exchange. This card is an external waste exchange only for an actually segregated departure of this material. If co-collected, its W is only the measured origin_W subaccount of pkg_mixed_waste; do not also instantiate this external exchange or treatment provider, and never add mixture plus constituents.

- Selected flow: Discarded Whole wooden transport pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pkg_pallet_w`
- Sources: `metaco-table-leg-route`; `jrc-ilcd-attributional-2010`

###### Discarded Whole polypropylene-backed adhesive packing tape (`pkg_tape_w`)

Discarded Whole polypropylene-backed adhesive packing tape. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. Packaging leg W: actual waste departure of this one material/article, measured as complete gross V_pkg_tape_w. P/I retain one actual upstream owner; ER/S/EO/W create no new procurement/provider burden or automatic credit. This physical amount is never stock-corrected or economically scaled. Full opening/closing empty, attached-WIP/FG and reusable wet stocks stay in the pool ledger; internal reuse cancels. Whole supplied article and its contained water/components are disjoint from separately supplied components, with no duplicate incoming/outgoing terms; closing retention does not erase true ingress. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero. Apply calc_packaging real F_in/F_out and X only for another OTHER same-side duplicate; P/I are event-exclusive and full wet stocks never erase true material/water exchange. This card is an external waste exchange only for an actually segregated departure of this material. If co-collected, its W is only the measured origin_W subaccount of pkg_mixed_waste; do not also instantiate this external exchange or treatment provider, and never add mixture plus constituents.

- Selected flow: Discarded Whole polypropylene-backed adhesive packing tape
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pkg_tape_w`
- Sources: `metaco-table-leg-route`; `jrc-ilcd-attributional-2010`

###### Discarded Whole polyethylene powder-coating sack (`pkg_sack_w`)

Discarded Whole polyethylene powder-coating sack. Conditional on the actual documented BOM, route, state and real boundary event; collect complete original quantities including failed work, not a prescribed ingredient or zero. Packaging leg W: actual waste departure of this one material/article, measured as complete gross V_pkg_sack_w. P/I retain one actual upstream owner; ER/S/EO/W create no new procurement/provider burden or automatic credit. This physical amount is never stock-corrected or economically scaled. Full opening/closing empty, attached-WIP/FG and reusable wet stocks stay in the pool ledger; internal reuse cancels. Whole supplied article and its contained water/components are disjoint from separately supplied components, with no duplicate incoming/outgoing terms; closing retention does not erase true ingress. No flow UUID is adopted; preserve this specific physical identity and verify an applicable native reference/property/unit chain before binding. An auxiliary identity/provider gap is not a fabricated zero. Apply calc_packaging real F_in/F_out and X only for another OTHER same-side duplicate; P/I are event-exclusive and full wet stocks never erase true material/water exchange. This card is an external waste exchange only for an actually segregated departure of this material. If co-collected, its W is only the measured origin_W subaccount of pkg_mixed_waste; do not also instantiate this external exchange or treatment provider, and never add mixture plus constituents.

- Selected flow: Discarded Whole polyethylene powder-coating sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pkg_sack_w`
- Sources: `metaco-table-leg-route`; `jrc-ilcd-attributional-2010`

###### Actual co-collected nonhazardous packaging waste outlet (`pkg_mixed_waste`)

One actual co-collected nonhazardous packaging-waste outlet at the declared site gate, measured in its complete wet mass. Identify the real carton, PE film/sack, wood and tape origin contributions only when actually present, using independent source sorting/weighing and water-state evidence; their disjoint origin_W subaccounts sum to the single outlet, never become extra waste exchanges or provider loads. Other actual constituents require named origin evidence; no residual fills multiple unknowns. Use one actual receiver and treatment provider once. Segregated waste departures and manufacturing final-assembly/testing mixed_waste are separate disjoint outlets. If packaging is not actually co-collected, retain evidenced non-applicability and do not invent a mixture or amount. Full gross V is divided once by Q or the original service Q_c; treatment burden is separately assigned and never scales this physical total. No flow UUID is adopted until one compatible complete native packaging-waste identity/property/unit chain is verified; this ordinary auxiliary gap is not a core hold.

- Selected flow: Co-collected nonhazardous packaging waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this card sole already-calculated x_i result; gross numerator is full actual V without stock/economic scaling; actual burden dimension is assigned separately once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pkg_mixed_waste`
- Sources: `metaco-table-leg-route`; `jrc-ilcd-attributional-2010`


##### Elementary flows

## 7. Allocation and Co-product Handling

The following is attributional methodology; industrial manufacturing sources supply no allocation fractions. Complete gross flows and burden vectors remain distinct.

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_framework | burden dimensions | This method is only for attributional manufacturing cases where allocation is required, not an unrestricted choice between substitution, physical and economic allocation. First use dedicated records and feasible real/virtual subdivision for each actual material, operation and service, including their consequences. Industrial route documents do not establish an allocation factor. | `jrc-ilcd-attributional-2010` |
| a_causal | genuinely shared exchanges | Then establish the determining physical causal relationship for each remaining exchange separately, supported by actual load, operation geometry/time, heat duty, capacity or other measured determinant as relevant. Material embodiment is assigned to its actual recipient; no common convenient kg/item/hour key automatically applies to all other flows. Document totals, shares, driver evidence and uncertainty. | `jrc-ilcd-attributional-2010` |
| a_residual | true common-process residual | Only a genuine common-process residual left after subdivision and exchange-specific determining physical causality may use actual contemporaneous market values of every real cofunction in its actual quality/state at the same process gate. Reconstruct the common gate by removing downstream finish/transport/packaging value consistently. No fixed fractions or later retail-price shortcut; absent causal/value evidence remains unresolved, with sensitivity retained. | `jrc-ilcd-attributional-2010` |
| a_failures | manufacture; treatment; services | Ordinary scrap, failure, samples, rejects and waste retain their causative manufacturing/service and actual treatment burdens even when sold or externally transferred. They are not automatic T_other, avoided-product/energy credit or a deduction from Q. One burden-vector transfer requires a real independent other cohort/function, justified allocation/handover and matching receiving vector; all physical gross legs stay full. At Q=0 retain actual loads and report no per-unit result. | `jrc-ilcd-attributional-2010` |
| a_gross | packaging; physical asset/water/species ledgers | Gross disclosure uses complete actual V, never an allocated burden vector or B_open+U-B_close. No economic/causal fraction scales its physical quantity and no repeated procurement/provider is generated by ER/S/EO/W or asset custody. Attribute each real owned upstream/treatment/service burden dimension once separately; retain already performed service with its original Q_c despite closing FG. | `jrc-ilcd-attributional-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

The protocols and physical/stock equations below are explicit PCR requirements for future foreground observations, not claims that sources measured a future plant or supplied these stock formulas.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_steel_tube | fabrication | Uncoated welded rectangular carbon-steel tube | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_steel_plate | fabrication | Uncoated carbon-steel mounting plate stock | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_wire | fabrication | Carbon-steel welding wire | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_argon | fabrication | Argon shielding gas | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_co2_shield | fabrication | Carbon dioxide shielding gas | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_abrasive | fabrication | Aluminium-oxide bonded grinding disc | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_shot | finishing | Steel blast-cleaning shot | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_cutting_fluid | fabrication | Whole aqueous metal-cutting-fluid preparation | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_degreaser | finishing | Whole aqueous alkaline metal-degreasing preparation | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_powder | finishing | Whole thermosetting furniture powder-coating preparation | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_water | finishing | Liquid process water | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; F_in; F_out; X_in; X_out; same_side_other_event_evidence; origin_W; independent_state_enthalpy; upstream_treatment_owner_once | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. Independently measure true additions/removals and OTHER same-side duplicate evidence; use whole wet articles or disjoint component bridges and cancel internal transfers. Mixed packaging has one total outlet and measured non-export origin subaccounts; water/heat-carrier quantities, supply/return state/enthalpy and once-only provider burdens remain separate. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_makeup_water | finishing | Liquid water for onsite preparation dilution | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; F_in; F_out; X_in; X_out; same_side_other_event_evidence; origin_W; independent_state_enthalpy; upstream_treatment_owner_once | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. Independently measure true additions/removals and OTHER same-side duplicate evidence; use whole wet articles or disjoint component bridges and cancel internal transfers. Mixed packaging has one total outlet and measured non-export origin subaccounts; water/heat-carrier quantities, supply/return state/enthalpy and once-only provider burdens remain separate. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_cloth | fabrication | Unimpregnated cotton cleaning cloth | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_filter | finishing | Powder-booth filter cartridge | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_electricity | fabrication | Electricity | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | MJ | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_natural_gas | finishing | Natural gas for curing heat | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | MJ | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_purchased_heat | finishing | Externally supplied heat | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | MJ | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_steam | finishing | Externally supplied steam | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; F_in; F_out; X_in; X_out; same_side_other_event_evidence; origin_W; independent_state_enthalpy; upstream_treatment_owner_once | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. Independently measure true additions/removals and OTHER same-side duplicate evidence; use whole wet articles or disjoint component bridges and cancel internal transfers. Mixed packaging has one total outlet and measured non-export origin subaccounts; water/heat-carrier quantities, supply/return state/enthalpy and once-only provider burdens remain separate. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_condensate | finishing | Liquid condensate returned to heat supplier | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; F_in; F_out; X_in; X_out; same_side_other_event_evidence; origin_W; independent_state_enthalpy; upstream_treatment_owner_once | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. Independently measure true additions/removals and OTHER same-side duplicate evidence; use whole wet articles or disjoint component bridges and cancel internal transfers. Mixed packaging has one total outlet and measured non-export origin subaccounts; water/heat-carrier quantities, supply/return state/enthalpy and once-only provider burdens remain separate. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_heat_water_return | finishing | Heat-transfer liquid water returned to supplier | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; F_in; F_out; X_in; X_out; same_side_other_event_evidence; origin_W; independent_state_enthalpy; upstream_treatment_owner_once | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. Independently measure true additions/removals and OTHER same-side duplicate evidence; use whole wet articles or disjoint component bridges and cancel internal transfers. Mixed packaging has one total outlet and measured non-export origin subaccounts; water/heat-carrier quantities, supply/return state/enthalpy and once-only provider burdens remain separate. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_threaded_insert | release | Finished steel threaded insert | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_leveling_foot | release | Complete supplied threaded leveling foot | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_fastener | release | Finished steel assembly bolt | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_pad | release | Separate moulded polyethylene floor-contact pad | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_released_part | release | Parts of furniture not made from wood | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; model; configuration; serial_number; accepted_net_mass_M; unique_first_release_Q; complete_BOM; rejected_samples; acceptance_record | Weigh the complete accepted same-configuration leg on a calibrated scale including its full fitted/supplied BOM and excluding transport packaging/test weights. Retain serial/unique first-release and acceptance evidence; measure M, never infer from density or catalogue values. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_steel_scrap | fabrication | Segregated carbon-steel offcut and swarf waste | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_weld_dust | fabrication | Collected welding and steel-grinding dust waste | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_spent_disc | fabrication | Spent aluminium-oxide grinding disc waste | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_spent_shot | finishing | Spent steel blasting shot waste | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_sludge | finishing | Segregated metal-degreasing sludge waste | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_wastewater | finishing | Spent aqueous metal-cleaning bath wastewater | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_powder_waste | finishing | Discarded solid overspray powder | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_filter_waste | finishing | Spent powder-booth filter cartridge waste | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_cloth_waste | fabrication | Contaminated cotton cleaning cloth waste | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_mixed_waste | release | Single collected mixed nonhazardous manufacturing waste | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; F_in; F_out; X_in; X_out; same_side_other_event_evidence; origin_W; independent_state_enthalpy; upstream_treatment_owner_once | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. Independently measure true additions/removals and OTHER same-side duplicate evidence; use whole wet articles or disjoint component bridges and cancel internal transfers. Mixed packaging has one total outlet and measured non-export origin subaccounts; water/heat-carrier quantities, supply/return state/enthalpy and once-only provider burdens remain separate. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_reject_part | release | Rejected coated welded steel table-leg assembly | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_co2_fossil | finishing | Carbon dioxide fossil to air | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; actual_molecular_species; CAS; phase; compartment; capture; carbon_origin; independent_concentration_flow_duration; separate_component_water_element_subaccounts | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_co | finishing | Carbon monoxide to air | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; actual_molecular_species; CAS; phase; compartment; capture; carbon_origin; independent_concentration_flow_duration; separate_component_water_element_subaccounts | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_no | finishing | Nitrogen monoxide to air | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; actual_molecular_species; CAS; phase; compartment; capture; carbon_origin; independent_concentration_flow_duration; separate_component_water_element_subaccounts | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_no2 | finishing | Nitrogen dioxide to air | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; actual_molecular_species; CAS; phase; compartment; capture; carbon_origin; independent_concentration_flow_duration; separate_component_water_element_subaccounts | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_methane | finishing | Methane fossil to air | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; actual_molecular_species; CAS; phase; compartment; capture; carbon_origin; independent_concentration_flow_duration; separate_component_water_element_subaccounts | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_water_vapour | finishing | Water vapour to air | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; actual_molecular_species; CAS; phase; compartment; capture; carbon_origin; independent_concentration_flow_duration; separate_component_water_element_subaccounts | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_argon_out | finishing | Argon to air | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; actual_molecular_species; CAS; phase; compartment; capture; carbon_origin; independent_concentration_flow_duration; separate_component_water_element_subaccounts | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_shield_co2_out | finishing | Supplied shielding carbon dioxide to air | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; actual_molecular_species; CAS; phase; compartment; capture; carbon_origin; independent_concentration_flow_duration; separate_component_water_element_subaccounts | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_iron_particle | finishing | Elemental iron particulate to air | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; actual_molecular_species; CAS; phase; compartment; capture; carbon_origin; independent_concentration_flow_duration; separate_component_water_element_subaccounts | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_powder_particle | finishing | Uncaptured thermosetting coating powder particulate to air | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; actual_molecular_species; CAS; phase; compartment; capture; carbon_origin; independent_concentration_flow_duration; separate_component_water_element_subaccounts | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_ambient_water | services | Water vapour absorbed from ambient air | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; original_Q_c; horizon_H; opening_FG_assets_installed_charge; closing_FG_assets_installed_charge; gross_G; actual_R; original_delivery; permission; postwork_tests; acceptance_disposition; new_removed_parts; X_in_out; performed_service; unused_unassigned_charge; actual_molecular_species; CAS; phase; compartment; capture; carbon_origin; independent_concentration_flow_duration; separate_component_water_element_subaccounts; F_in; F_out; X_in; X_out; same_side_other_event_evidence; origin_W; independent_state_enthalpy; upstream_treatment_owner_once | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. Independently measure true additions/removals and OTHER same-side duplicate evidence; use whole wet articles or disjoint component bridges and cancel internal transfers. Mixed packaging has one total outlet and measured non-export origin subaccounts; water/heat-carrier quantities, supply/return state/enthalpy and once-only provider burdens remain separate. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_storage_water_out | services | Water vapour released to ambient air during storage | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; original_Q_c; horizon_H; opening_FG_assets_installed_charge; closing_FG_assets_installed_charge; gross_G; actual_R; original_delivery; permission; postwork_tests; acceptance_disposition; new_removed_parts; X_in_out; performed_service; unused_unassigned_charge; actual_molecular_species; CAS; phase; compartment; capture; carbon_origin; independent_concentration_flow_duration; separate_component_water_element_subaccounts; F_in; F_out; X_in; X_out; same_side_other_event_evidence; origin_W; independent_state_enthalpy; upstream_treatment_owner_once | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. Independently measure true additions/removals and OTHER same-side duplicate evidence; use whole wet articles or disjoint component bridges and cancel internal transfers. Mixed packaging has one total outlet and measured non-export origin subaccounts; water/heat-carrier quantities, supply/return state/enthalpy and once-only provider burdens remain separate. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_service_water | services | Liquid water for postrelease cleaning | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; original_Q_c; horizon_H; opening_FG_assets_installed_charge; closing_FG_assets_installed_charge; gross_G; actual_R; original_delivery; permission; postwork_tests; acceptance_disposition; new_removed_parts; X_in_out; performed_service; unused_unassigned_charge; F_in; F_out; X_in; X_out; same_side_other_event_evidence; origin_W; independent_state_enthalpy; upstream_treatment_owner_once | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. Independently measure true additions/removals and OTHER same-side duplicate evidence; use whole wet articles or disjoint component bridges and cancel internal transfers. Mixed packaging has one total outlet and measured non-export origin subaccounts; water/heat-carrier quantities, supply/return state/enthalpy and once-only provider burdens remain separate. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_service_foot | services | Replacement complete threaded leveling foot | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; original_Q_c; horizon_H; opening_FG_assets_installed_charge; closing_FG_assets_installed_charge; gross_G; actual_R; original_delivery; permission; postwork_tests; acceptance_disposition; new_removed_parts; X_in_out; performed_service; unused_unassigned_charge | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_service_bolt | services | Replacement finished steel bolt | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; original_Q_c; horizon_H; opening_FG_assets_installed_charge; closing_FG_assets_installed_charge; gross_G; actual_R; original_delivery; permission; postwork_tests; acceptance_disposition; new_removed_parts; X_in_out; performed_service; unused_unassigned_charge | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_service_electricity | services | Electricity for original-cohort storage handling or work | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; original_Q_c; horizon_H; opening_FG_assets_installed_charge; closing_FG_assets_installed_charge; gross_G; actual_R; original_delivery; permission; postwork_tests; acceptance_disposition; new_removed_parts; X_in_out; performed_service; unused_unassigned_charge | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | MJ | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_service_water_return | services | Liquid water returned from original-cohort work | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; original_Q_c; horizon_H; opening_FG_assets_installed_charge; closing_FG_assets_installed_charge; gross_G; actual_R; original_delivery; permission; postwork_tests; acceptance_disposition; new_removed_parts; X_in_out; performed_service; unused_unassigned_charge; F_in; F_out; X_in; X_out; same_side_other_event_evidence; origin_W; independent_state_enthalpy; upstream_treatment_owner_once | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. Independently measure true additions/removals and OTHER same-side duplicate evidence; use whole wet articles or disjoint component bridges and cancel internal transfers. Mixed packaging has one total outlet and measured non-export origin subaccounts; water/heat-carrier quantities, supply/return state/enthalpy and once-only provider burdens remain separate. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_service_wastewater | services | Postrelease leg-cleaning wastewater | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; original_Q_c; horizon_H; opening_FG_assets_installed_charge; closing_FG_assets_installed_charge; gross_G; actual_R; original_delivery; permission; postwork_tests; acceptance_disposition; new_removed_parts; X_in_out; performed_service; unused_unassigned_charge; F_in; F_out; X_in; X_out; same_side_other_event_evidence; origin_W; independent_state_enthalpy; upstream_treatment_owner_once | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. Independently measure true additions/removals and OTHER same-side duplicate evidence; use whole wet articles or disjoint component bridges and cancel internal transfers. Mixed packaging has one total outlet and measured non-export origin subaccounts; water/heat-carrier quantities, supply/return state/enthalpy and once-only provider burdens remain separate. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_removed_foot | services | Removed threaded leveling foot waste | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; original_Q_c; horizon_H; opening_FG_assets_installed_charge; closing_FG_assets_installed_charge; gross_G; actual_R; original_delivery; permission; postwork_tests; acceptance_disposition; new_removed_parts; X_in_out; performed_service; unused_unassigned_charge | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_removed_bolt | services | Removed steel bolt waste | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; original_Q_c; horizon_H; opening_FG_assets_installed_charge; closing_FG_assets_installed_charge; gross_G; actual_R; original_delivery; permission; postwork_tests; acceptance_disposition; new_removed_parts; X_in_out; performed_service; unused_unassigned_charge | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_service_part_waste | services | Discarded previously released steel table-leg assembly | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; original_Q_c; horizon_H; opening_FG_assets_installed_charge; closing_FG_assets_installed_charge; gross_G; actual_R; original_delivery; permission; postwork_tests; acceptance_disposition; new_removed_parts; X_in_out; performed_service; unused_unassigned_charge | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_saw_in | assets | Metal-cutting saw | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; original_Q_c; horizon_H; opening_FG_assets_installed_charge; closing_FG_assets_installed_charge; gross_G; actual_R; original_delivery; permission; postwork_tests; acceptance_disposition; new_removed_parts; X_in_out; performed_service; unused_unassigned_charge | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_saw_out | assets | Retired metal-cutting saw | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; original_Q_c; horizon_H; opening_FG_assets_installed_charge; closing_FG_assets_installed_charge; gross_G; actual_R; original_delivery; permission; postwork_tests; acceptance_disposition; new_removed_parts; X_in_out; performed_service; unused_unassigned_charge | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_welder_in | assets | Arc-welding machine | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; original_Q_c; horizon_H; opening_FG_assets_installed_charge; closing_FG_assets_installed_charge; gross_G; actual_R; original_delivery; permission; postwork_tests; acceptance_disposition; new_removed_parts; X_in_out; performed_service; unused_unassigned_charge | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_welder_out | assets | Retired arc-welding machine | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; original_Q_c; horizon_H; opening_FG_assets_installed_charge; closing_FG_assets_installed_charge; gross_G; actual_R; original_delivery; permission; postwork_tests; acceptance_disposition; new_removed_parts; X_in_out; performed_service; unused_unassigned_charge | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_oven_in | assets | Powder-curing oven | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; original_Q_c; horizon_H; opening_FG_assets_installed_charge; closing_FG_assets_installed_charge; gross_G; actual_R; original_delivery; permission; postwork_tests; acceptance_disposition; new_removed_parts; X_in_out; performed_service; unused_unassigned_charge | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_oven_out | assets | Retired powder-curing oven | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; original_Q_c; horizon_H; opening_FG_assets_installed_charge; closing_FG_assets_installed_charge; gross_G; actual_R; original_delivery; permission; postwork_tests; acceptance_disposition; new_removed_parts; X_in_out; performed_service; unused_unassigned_charge | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_compressor_in | assets | Air compressor | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; original_Q_c; horizon_H; opening_FG_assets_installed_charge; closing_FG_assets_installed_charge; gross_G; actual_R; original_delivery; permission; postwork_tests; acceptance_disposition; new_removed_parts; X_in_out; performed_service; unused_unassigned_charge | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_compressor_out | assets | Retired air compressor | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; original_Q_c; horizon_H; opening_FG_assets_installed_charge; closing_FG_assets_installed_charge; gross_G; actual_R; original_delivery; permission; postwork_tests; acceptance_disposition; new_removed_parts; X_in_out; performed_service; unused_unassigned_charge | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_fixture_in | assets | Steel welding fixture | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; original_Q_c; horizon_H; opening_FG_assets_installed_charge; closing_FG_assets_installed_charge; gross_G; actual_R; original_delivery; permission; postwork_tests; acceptance_disposition; new_removed_parts; X_in_out; performed_service; unused_unassigned_charge | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_fixture_out | assets | Retired steel welding fixture | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; original_Q_c; horizon_H; opening_FG_assets_installed_charge; closing_FG_assets_installed_charge; gross_G; actual_R; original_delivery; permission; postwork_tests; acceptance_disposition; new_removed_parts; X_in_out; performed_service; unused_unassigned_charge | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_new_oil | assets | Whole mineral lubricating-oil preparation | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; original_Q_c; horizon_H; opening_FG_assets_installed_charge; closing_FG_assets_installed_charge; gross_G; actual_R; original_delivery; permission; postwork_tests; acceptance_disposition; new_removed_parts; X_in_out; performed_service; unused_unassigned_charge | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_used_oil | assets | Removed whole mineral lubricating-oil preparation | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; original_Q_c; horizon_H; opening_FG_assets_installed_charge; closing_FG_assets_installed_charge; gross_G; actual_R; original_delivery; permission; postwork_tests; acceptance_disposition; new_removed_parts; X_in_out; performed_service; unused_unassigned_charge | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_cooling_charge | assets | Liquid cooling-water charge | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; original_Q_c; horizon_H; opening_FG_assets_installed_charge; closing_FG_assets_installed_charge; gross_G; actual_R; original_delivery; permission; postwork_tests; acceptance_disposition; new_removed_parts; X_in_out; performed_service; unused_unassigned_charge; F_in; F_out; X_in; X_out; same_side_other_event_evidence; origin_W; independent_state_enthalpy; upstream_treatment_owner_once | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. Independently measure true additions/removals and OTHER same-side duplicate evidence; use whole wet articles or disjoint component bridges and cancel internal transfers. Mixed packaging has one total outlet and measured non-export origin subaccounts; water/heat-carrier quantities, supply/return state/enthalpy and once-only provider burdens remain separate. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_cooling_return | assets | Liquid cooling water returned to supplier | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; original_Q_c; horizon_H; opening_FG_assets_installed_charge; closing_FG_assets_installed_charge; gross_G; actual_R; original_delivery; permission; postwork_tests; acceptance_disposition; new_removed_parts; X_in_out; performed_service; unused_unassigned_charge; F_in; F_out; X_in; X_out; same_side_other_event_evidence; origin_W; independent_state_enthalpy; upstream_treatment_owner_once | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. Independently measure true additions/removals and OTHER same-side duplicate evidence; use whole wet articles or disjoint component bridges and cancel internal transfers. Mixed packaging has one total outlet and measured non-export origin subaccounts; water/heat-carrier quantities, supply/return state/enthalpy and once-only provider burdens remain separate. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_cooling_waste | assets | Removed cooling-water wastewater | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; original_Q_c; horizon_H; opening_FG_assets_installed_charge; closing_FG_assets_installed_charge; gross_G; actual_R; original_delivery; permission; postwork_tests; acceptance_disposition; new_removed_parts; X_in_out; performed_service; unused_unassigned_charge; F_in; F_out; X_in; X_out; same_side_other_event_evidence; origin_W; independent_state_enthalpy; upstream_treatment_owner_once | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. Independently measure true additions/removals and OTHER same-side duplicate evidence; use whole wet articles or disjoint component bridges and cancel internal transfers. Mixed packaging has one total outlet and measured non-export origin subaccounts; water/heat-carrier quantities, supply/return state/enthalpy and once-only provider burdens remain separate. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_pkg_carton_p | packaging | Corrugated shipping carton | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; package_SKU; leg_P_I_ER_S_EO_W; full_gross_V; opening_empty_attached_WIP_FG_reusable; closing_full_wet_stock; owner_once; disjoint_components; internal_reuse; F_in; F_out; X_in; X_out; same_side_other_event_evidence; origin_W; independent_state_enthalpy; upstream_treatment_owner_once ; packaging receipt origin; payment/non-purchase evidence; owner/custodian; same-item prior outward ID | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. Independently measure true additions/removals and OTHER same-side duplicate evidence; use whole wet articles or disjoint component bridges and cancel internal transfers. Mixed packaging has one total outlet and measured non-export origin subaccounts; water/heat-carrier quantities, supply/return state/enthalpy and once-only provider burdens remain separate.  For packaging only, apply packaging_receipt_basis; standalone non-purchase is I, never invented ER or X. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_pkg_carton_i | packaging | Corrugated shipping carton | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; package_SKU; leg_P_I_ER_S_EO_W; full_gross_V; opening_empty_attached_WIP_FG_reusable; closing_full_wet_stock; owner_once; disjoint_components; internal_reuse; F_in; F_out; X_in; X_out; same_side_other_event_evidence; origin_W; independent_state_enthalpy; upstream_treatment_owner_once ; packaging receipt origin; payment/non-purchase evidence; owner/custodian; same-item prior outward ID | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. Independently measure true additions/removals and OTHER same-side duplicate evidence; use whole wet articles or disjoint component bridges and cancel internal transfers. Mixed packaging has one total outlet and measured non-export origin subaccounts; water/heat-carrier quantities, supply/return state/enthalpy and once-only provider burdens remain separate.  For packaging only, apply packaging_receipt_basis; standalone non-purchase is I, never invented ER or X. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_pkg_carton_er | packaging | Corrugated shipping carton | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; package_SKU; leg_P_I_ER_S_EO_W; full_gross_V; opening_empty_attached_WIP_FG_reusable; closing_full_wet_stock; owner_once; disjoint_components; internal_reuse; F_in; F_out; X_in; X_out; same_side_other_event_evidence; origin_W; independent_state_enthalpy; upstream_treatment_owner_once | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. Independently measure true additions/removals and OTHER same-side duplicate evidence; use whole wet articles or disjoint component bridges and cancel internal transfers. Mixed packaging has one total outlet and measured non-export origin subaccounts; water/heat-carrier quantities, supply/return state/enthalpy and once-only provider burdens remain separate. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_pkg_carton_s | packaging | Corrugated shipping carton | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; package_SKU; leg_P_I_ER_S_EO_W; full_gross_V; opening_empty_attached_WIP_FG_reusable; closing_full_wet_stock; owner_once; disjoint_components; internal_reuse; F_in; F_out; X_in; X_out; same_side_other_event_evidence; origin_W; independent_state_enthalpy; upstream_treatment_owner_once | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. Independently measure true additions/removals and OTHER same-side duplicate evidence; use whole wet articles or disjoint component bridges and cancel internal transfers. Mixed packaging has one total outlet and measured non-export origin subaccounts; water/heat-carrier quantities, supply/return state/enthalpy and once-only provider burdens remain separate. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_pkg_carton_eo | packaging | Corrugated shipping carton | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; package_SKU; leg_P_I_ER_S_EO_W; full_gross_V; opening_empty_attached_WIP_FG_reusable; closing_full_wet_stock; owner_once; disjoint_components; internal_reuse; F_in; F_out; X_in; X_out; same_side_other_event_evidence; origin_W; independent_state_enthalpy; upstream_treatment_owner_once | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. Independently measure true additions/removals and OTHER same-side duplicate evidence; use whole wet articles or disjoint component bridges and cancel internal transfers. Mixed packaging has one total outlet and measured non-export origin subaccounts; water/heat-carrier quantities, supply/return state/enthalpy and once-only provider burdens remain separate. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_pkg_carton_w | packaging | Discarded Corrugated shipping carton | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; package_SKU; leg_P_I_ER_S_EO_W; full_gross_V; opening_empty_attached_WIP_FG_reusable; closing_full_wet_stock; owner_once; disjoint_components; internal_reuse; F_in; F_out; X_in; X_out; same_side_other_event_evidence; origin_W; independent_state_enthalpy; upstream_treatment_owner_once | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. Independently measure true additions/removals and OTHER same-side duplicate evidence; use whole wet articles or disjoint component bridges and cancel internal transfers. Mixed packaging has one total outlet and measured non-export origin subaccounts; water/heat-carrier quantities, supply/return state/enthalpy and once-only provider burdens remain separate. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_pkg_mixed_waste | packaging | Actual co-collected nonhazardous packaging waste | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; package_SKU; leg_P_I_ER_S_EO_W; full_gross_V; opening_empty_attached_WIP_FG_reusable; closing_full_wet_stock; owner_once; disjoint_components; internal_reuse; outlet_id; independent_outlet_wet_mass; origin_W; origin_sorting_weighing; water_phase; single_receiver_provider; segregated_outlets; no_double_export | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. One actual co-collected nonhazardous packaging-waste outlet at the declared site gate, measured in its complete wet mass. Identify the real carton, PE film/sack, wood and tape origin contributions only when actually present, using independent source sorting/weighing and water-state evidence; their disjoint origin_W subaccounts sum to the single outlet, never become extra waste exchanges or provider loads. Other actual constituents require named origin evidence; no residual fills multiple unknowns. Use one actual receiver and treatment provider once. Segregated waste departures and manufacturing final-assembly/testing mixed_waste are separate disjoint outlets. If packaging is not actually co-collected, retain evidenced non-applicability and do not invent a mixture or amount. Full gross V is divided once by Q or the original service Q_c; treatment burden is separately assigned and never scales this physical total. No flow UUID is adopted until one compatible complete native packaging-waste identity/property/unit chain is verified; this ordinary auxiliary gap is not a core hold. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_pkg_bubble_p | packaging | Polyethylene bubble-sheet wrap | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; package_SKU; leg_P_I_ER_S_EO_W; full_gross_V; opening_empty_attached_WIP_FG_reusable; closing_full_wet_stock; owner_once; disjoint_components; internal_reuse; F_in; F_out; X_in; X_out; same_side_other_event_evidence; origin_W; independent_state_enthalpy; upstream_treatment_owner_once ; packaging receipt origin; payment/non-purchase evidence; owner/custodian; same-item prior outward ID | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. Independently measure true additions/removals and OTHER same-side duplicate evidence; use whole wet articles or disjoint component bridges and cancel internal transfers. Mixed packaging has one total outlet and measured non-export origin subaccounts; water/heat-carrier quantities, supply/return state/enthalpy and once-only provider burdens remain separate.  For packaging only, apply packaging_receipt_basis; standalone non-purchase is I, never invented ER or X. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_pkg_bubble_i | packaging | Polyethylene bubble-sheet wrap | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; package_SKU; leg_P_I_ER_S_EO_W; full_gross_V; opening_empty_attached_WIP_FG_reusable; closing_full_wet_stock; owner_once; disjoint_components; internal_reuse; F_in; F_out; X_in; X_out; same_side_other_event_evidence; origin_W; independent_state_enthalpy; upstream_treatment_owner_once ; packaging receipt origin; payment/non-purchase evidence; owner/custodian; same-item prior outward ID | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. Independently measure true additions/removals and OTHER same-side duplicate evidence; use whole wet articles or disjoint component bridges and cancel internal transfers. Mixed packaging has one total outlet and measured non-export origin subaccounts; water/heat-carrier quantities, supply/return state/enthalpy and once-only provider burdens remain separate.  For packaging only, apply packaging_receipt_basis; standalone non-purchase is I, never invented ER or X. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_pkg_bubble_er | packaging | Polyethylene bubble-sheet wrap | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; package_SKU; leg_P_I_ER_S_EO_W; full_gross_V; opening_empty_attached_WIP_FG_reusable; closing_full_wet_stock; owner_once; disjoint_components; internal_reuse; F_in; F_out; X_in; X_out; same_side_other_event_evidence; origin_W; independent_state_enthalpy; upstream_treatment_owner_once | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. Independently measure true additions/removals and OTHER same-side duplicate evidence; use whole wet articles or disjoint component bridges and cancel internal transfers. Mixed packaging has one total outlet and measured non-export origin subaccounts; water/heat-carrier quantities, supply/return state/enthalpy and once-only provider burdens remain separate. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_pkg_bubble_s | packaging | Polyethylene bubble-sheet wrap | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; package_SKU; leg_P_I_ER_S_EO_W; full_gross_V; opening_empty_attached_WIP_FG_reusable; closing_full_wet_stock; owner_once; disjoint_components; internal_reuse; F_in; F_out; X_in; X_out; same_side_other_event_evidence; origin_W; independent_state_enthalpy; upstream_treatment_owner_once | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. Independently measure true additions/removals and OTHER same-side duplicate evidence; use whole wet articles or disjoint component bridges and cancel internal transfers. Mixed packaging has one total outlet and measured non-export origin subaccounts; water/heat-carrier quantities, supply/return state/enthalpy and once-only provider burdens remain separate. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_pkg_bubble_eo | packaging | Polyethylene bubble-sheet wrap | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; package_SKU; leg_P_I_ER_S_EO_W; full_gross_V; opening_empty_attached_WIP_FG_reusable; closing_full_wet_stock; owner_once; disjoint_components; internal_reuse; F_in; F_out; X_in; X_out; same_side_other_event_evidence; origin_W; independent_state_enthalpy; upstream_treatment_owner_once | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. Independently measure true additions/removals and OTHER same-side duplicate evidence; use whole wet articles or disjoint component bridges and cancel internal transfers. Mixed packaging has one total outlet and measured non-export origin subaccounts; water/heat-carrier quantities, supply/return state/enthalpy and once-only provider burdens remain separate. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_pkg_bubble_w | packaging | Discarded Polyethylene bubble-sheet wrap | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; package_SKU; leg_P_I_ER_S_EO_W; full_gross_V; opening_empty_attached_WIP_FG_reusable; closing_full_wet_stock; owner_once; disjoint_components; internal_reuse; F_in; F_out; X_in; X_out; same_side_other_event_evidence; origin_W; independent_state_enthalpy; upstream_treatment_owner_once | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. Independently measure true additions/removals and OTHER same-side duplicate evidence; use whole wet articles or disjoint component bridges and cancel internal transfers. Mixed packaging has one total outlet and measured non-export origin subaccounts; water/heat-carrier quantities, supply/return state/enthalpy and once-only provider burdens remain separate. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_pkg_pallet_p | packaging | Whole wooden transport pallet | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; package_SKU; leg_P_I_ER_S_EO_W; full_gross_V; opening_empty_attached_WIP_FG_reusable; closing_full_wet_stock; owner_once; disjoint_components; internal_reuse; F_in; F_out; X_in; X_out; same_side_other_event_evidence; origin_W; independent_state_enthalpy; upstream_treatment_owner_once ; packaging receipt origin; payment/non-purchase evidence; owner/custodian; same-item prior outward ID | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. Independently measure true additions/removals and OTHER same-side duplicate evidence; use whole wet articles or disjoint component bridges and cancel internal transfers. Mixed packaging has one total outlet and measured non-export origin subaccounts; water/heat-carrier quantities, supply/return state/enthalpy and once-only provider burdens remain separate.  For packaging only, apply packaging_receipt_basis; standalone non-purchase is I, never invented ER or X. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_pkg_pallet_i | packaging | Whole wooden transport pallet | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; package_SKU; leg_P_I_ER_S_EO_W; full_gross_V; opening_empty_attached_WIP_FG_reusable; closing_full_wet_stock; owner_once; disjoint_components; internal_reuse; F_in; F_out; X_in; X_out; same_side_other_event_evidence; origin_W; independent_state_enthalpy; upstream_treatment_owner_once ; packaging receipt origin; payment/non-purchase evidence; owner/custodian; same-item prior outward ID | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. Independently measure true additions/removals and OTHER same-side duplicate evidence; use whole wet articles or disjoint component bridges and cancel internal transfers. Mixed packaging has one total outlet and measured non-export origin subaccounts; water/heat-carrier quantities, supply/return state/enthalpy and once-only provider burdens remain separate.  For packaging only, apply packaging_receipt_basis; standalone non-purchase is I, never invented ER or X. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_pkg_pallet_er | packaging | Whole wooden transport pallet | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; package_SKU; leg_P_I_ER_S_EO_W; full_gross_V; opening_empty_attached_WIP_FG_reusable; closing_full_wet_stock; owner_once; disjoint_components; internal_reuse; F_in; F_out; X_in; X_out; same_side_other_event_evidence; origin_W; independent_state_enthalpy; upstream_treatment_owner_once | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. Independently measure true additions/removals and OTHER same-side duplicate evidence; use whole wet articles or disjoint component bridges and cancel internal transfers. Mixed packaging has one total outlet and measured non-export origin subaccounts; water/heat-carrier quantities, supply/return state/enthalpy and once-only provider burdens remain separate. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_pkg_pallet_s | packaging | Whole wooden transport pallet | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; package_SKU; leg_P_I_ER_S_EO_W; full_gross_V; opening_empty_attached_WIP_FG_reusable; closing_full_wet_stock; owner_once; disjoint_components; internal_reuse; F_in; F_out; X_in; X_out; same_side_other_event_evidence; origin_W; independent_state_enthalpy; upstream_treatment_owner_once | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. Independently measure true additions/removals and OTHER same-side duplicate evidence; use whole wet articles or disjoint component bridges and cancel internal transfers. Mixed packaging has one total outlet and measured non-export origin subaccounts; water/heat-carrier quantities, supply/return state/enthalpy and once-only provider burdens remain separate. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_pkg_pallet_eo | packaging | Whole wooden transport pallet | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; package_SKU; leg_P_I_ER_S_EO_W; full_gross_V; opening_empty_attached_WIP_FG_reusable; closing_full_wet_stock; owner_once; disjoint_components; internal_reuse; F_in; F_out; X_in; X_out; same_side_other_event_evidence; origin_W; independent_state_enthalpy; upstream_treatment_owner_once | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. Independently measure true additions/removals and OTHER same-side duplicate evidence; use whole wet articles or disjoint component bridges and cancel internal transfers. Mixed packaging has one total outlet and measured non-export origin subaccounts; water/heat-carrier quantities, supply/return state/enthalpy and once-only provider burdens remain separate. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_pkg_pallet_w | packaging | Discarded Whole wooden transport pallet | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; package_SKU; leg_P_I_ER_S_EO_W; full_gross_V; opening_empty_attached_WIP_FG_reusable; closing_full_wet_stock; owner_once; disjoint_components; internal_reuse; F_in; F_out; X_in; X_out; same_side_other_event_evidence; origin_W; independent_state_enthalpy; upstream_treatment_owner_once | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. Independently measure true additions/removals and OTHER same-side duplicate evidence; use whole wet articles or disjoint component bridges and cancel internal transfers. Mixed packaging has one total outlet and measured non-export origin subaccounts; water/heat-carrier quantities, supply/return state/enthalpy and once-only provider burdens remain separate. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_pkg_tape_p | packaging | Whole polypropylene-backed adhesive packing tape | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; package_SKU; leg_P_I_ER_S_EO_W; full_gross_V; opening_empty_attached_WIP_FG_reusable; closing_full_wet_stock; owner_once; disjoint_components; internal_reuse; F_in; F_out; X_in; X_out; same_side_other_event_evidence; origin_W; independent_state_enthalpy; upstream_treatment_owner_once ; packaging receipt origin; payment/non-purchase evidence; owner/custodian; same-item prior outward ID | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. Independently measure true additions/removals and OTHER same-side duplicate evidence; use whole wet articles or disjoint component bridges and cancel internal transfers. Mixed packaging has one total outlet and measured non-export origin subaccounts; water/heat-carrier quantities, supply/return state/enthalpy and once-only provider burdens remain separate.  For packaging only, apply packaging_receipt_basis; standalone non-purchase is I, never invented ER or X. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_pkg_tape_i | packaging | Whole polypropylene-backed adhesive packing tape | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; package_SKU; leg_P_I_ER_S_EO_W; full_gross_V; opening_empty_attached_WIP_FG_reusable; closing_full_wet_stock; owner_once; disjoint_components; internal_reuse; F_in; F_out; X_in; X_out; same_side_other_event_evidence; origin_W; independent_state_enthalpy; upstream_treatment_owner_once ; packaging receipt origin; payment/non-purchase evidence; owner/custodian; same-item prior outward ID | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. Independently measure true additions/removals and OTHER same-side duplicate evidence; use whole wet articles or disjoint component bridges and cancel internal transfers. Mixed packaging has one total outlet and measured non-export origin subaccounts; water/heat-carrier quantities, supply/return state/enthalpy and once-only provider burdens remain separate.  For packaging only, apply packaging_receipt_basis; standalone non-purchase is I, never invented ER or X. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_pkg_tape_er | packaging | Whole polypropylene-backed adhesive packing tape | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; package_SKU; leg_P_I_ER_S_EO_W; full_gross_V; opening_empty_attached_WIP_FG_reusable; closing_full_wet_stock; owner_once; disjoint_components; internal_reuse; F_in; F_out; X_in; X_out; same_side_other_event_evidence; origin_W; independent_state_enthalpy; upstream_treatment_owner_once | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. Independently measure true additions/removals and OTHER same-side duplicate evidence; use whole wet articles or disjoint component bridges and cancel internal transfers. Mixed packaging has one total outlet and measured non-export origin subaccounts; water/heat-carrier quantities, supply/return state/enthalpy and once-only provider burdens remain separate. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_pkg_tape_s | packaging | Whole polypropylene-backed adhesive packing tape | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; package_SKU; leg_P_I_ER_S_EO_W; full_gross_V; opening_empty_attached_WIP_FG_reusable; closing_full_wet_stock; owner_once; disjoint_components; internal_reuse; F_in; F_out; X_in; X_out; same_side_other_event_evidence; origin_W; independent_state_enthalpy; upstream_treatment_owner_once | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. Independently measure true additions/removals and OTHER same-side duplicate evidence; use whole wet articles or disjoint component bridges and cancel internal transfers. Mixed packaging has one total outlet and measured non-export origin subaccounts; water/heat-carrier quantities, supply/return state/enthalpy and once-only provider burdens remain separate. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_pkg_tape_eo | packaging | Whole polypropylene-backed adhesive packing tape | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; package_SKU; leg_P_I_ER_S_EO_W; full_gross_V; opening_empty_attached_WIP_FG_reusable; closing_full_wet_stock; owner_once; disjoint_components; internal_reuse; F_in; F_out; X_in; X_out; same_side_other_event_evidence; origin_W; independent_state_enthalpy; upstream_treatment_owner_once | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. Independently measure true additions/removals and OTHER same-side duplicate evidence; use whole wet articles or disjoint component bridges and cancel internal transfers. Mixed packaging has one total outlet and measured non-export origin subaccounts; water/heat-carrier quantities, supply/return state/enthalpy and once-only provider burdens remain separate. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_pkg_tape_w | packaging | Discarded Whole polypropylene-backed adhesive packing tape | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; package_SKU; leg_P_I_ER_S_EO_W; full_gross_V; opening_empty_attached_WIP_FG_reusable; closing_full_wet_stock; owner_once; disjoint_components; internal_reuse; F_in; F_out; X_in; X_out; same_side_other_event_evidence; origin_W; independent_state_enthalpy; upstream_treatment_owner_once | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. Independently measure true additions/removals and OTHER same-side duplicate evidence; use whole wet articles or disjoint component bridges and cancel internal transfers. Mixed packaging has one total outlet and measured non-export origin subaccounts; water/heat-carrier quantities, supply/return state/enthalpy and once-only provider burdens remain separate. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_pkg_sack_p | packaging | Whole polyethylene powder-coating sack | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; package_SKU; leg_P_I_ER_S_EO_W; full_gross_V; opening_empty_attached_WIP_FG_reusable; closing_full_wet_stock; owner_once; disjoint_components; internal_reuse; F_in; F_out; X_in; X_out; same_side_other_event_evidence; origin_W; independent_state_enthalpy; upstream_treatment_owner_once ; packaging receipt origin; payment/non-purchase evidence; owner/custodian; same-item prior outward ID | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. Independently measure true additions/removals and OTHER same-side duplicate evidence; use whole wet articles or disjoint component bridges and cancel internal transfers. Mixed packaging has one total outlet and measured non-export origin subaccounts; water/heat-carrier quantities, supply/return state/enthalpy and once-only provider burdens remain separate.  For packaging only, apply packaging_receipt_basis; standalone non-purchase is I, never invented ER or X. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_pkg_sack_i | packaging | Whole polyethylene powder-coating sack | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; package_SKU; leg_P_I_ER_S_EO_W; full_gross_V; opening_empty_attached_WIP_FG_reusable; closing_full_wet_stock; owner_once; disjoint_components; internal_reuse; F_in; F_out; X_in; X_out; same_side_other_event_evidence; origin_W; independent_state_enthalpy; upstream_treatment_owner_once ; packaging receipt origin; payment/non-purchase evidence; owner/custodian; same-item prior outward ID | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. Independently measure true additions/removals and OTHER same-side duplicate evidence; use whole wet articles or disjoint component bridges and cancel internal transfers. Mixed packaging has one total outlet and measured non-export origin subaccounts; water/heat-carrier quantities, supply/return state/enthalpy and once-only provider burdens remain separate.  For packaging only, apply packaging_receipt_basis; standalone non-purchase is I, never invented ER or X. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_pkg_sack_er | packaging | Whole polyethylene powder-coating sack | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; package_SKU; leg_P_I_ER_S_EO_W; full_gross_V; opening_empty_attached_WIP_FG_reusable; closing_full_wet_stock; owner_once; disjoint_components; internal_reuse; F_in; F_out; X_in; X_out; same_side_other_event_evidence; origin_W; independent_state_enthalpy; upstream_treatment_owner_once | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. Independently measure true additions/removals and OTHER same-side duplicate evidence; use whole wet articles or disjoint component bridges and cancel internal transfers. Mixed packaging has one total outlet and measured non-export origin subaccounts; water/heat-carrier quantities, supply/return state/enthalpy and once-only provider burdens remain separate. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_pkg_sack_s | packaging | Whole polyethylene powder-coating sack | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; package_SKU; leg_P_I_ER_S_EO_W; full_gross_V; opening_empty_attached_WIP_FG_reusable; closing_full_wet_stock; owner_once; disjoint_components; internal_reuse; F_in; F_out; X_in; X_out; same_side_other_event_evidence; origin_W; independent_state_enthalpy; upstream_treatment_owner_once | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. Independently measure true additions/removals and OTHER same-side duplicate evidence; use whole wet articles or disjoint component bridges and cancel internal transfers. Mixed packaging has one total outlet and measured non-export origin subaccounts; water/heat-carrier quantities, supply/return state/enthalpy and once-only provider burdens remain separate. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_pkg_sack_eo | packaging | Whole polyethylene powder-coating sack | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; package_SKU; leg_P_I_ER_S_EO_W; full_gross_V; opening_empty_attached_WIP_FG_reusable; closing_full_wet_stock; owner_once; disjoint_components; internal_reuse; F_in; F_out; X_in; X_out; same_side_other_event_evidence; origin_W; independent_state_enthalpy; upstream_treatment_owner_once | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. Independently measure true additions/removals and OTHER same-side duplicate evidence; use whole wet articles or disjoint component bridges and cancel internal transfers. Mixed packaging has one total outlet and measured non-export origin subaccounts; water/heat-carrier quantities, supply/return state/enthalpy and once-only provider burdens remain separate. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_pkg_sack_w | packaging | Discarded Whole polyethylene powder-coating sack | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; package_SKU; leg_P_I_ER_S_EO_W; full_gross_V; opening_empty_attached_WIP_FG_reusable; closing_full_wet_stock; owner_once; disjoint_components; internal_reuse; F_in; F_out; X_in; X_out; same_side_other_event_evidence; origin_W; independent_state_enthalpy; upstream_treatment_owner_once | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. Independently measure true additions/removals and OTHER same-side duplicate evidence; use whole wet articles or disjoint component bridges and cancel internal transfers. Mixed packaging has one total outlet and measured non-export origin subaccounts; water/heat-carrier quantities, supply/return state/enthalpy and once-only provider burdens remain separate. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_ambient_oxygen | finishing | Oxygen from ambient air | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; actual_molecular_species; CAS; phase; compartment; capture; carbon_origin; independent_concentration_flow_duration; separate_component_water_element_subaccounts | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_ambient_nitrogen | finishing | Nitrogen from ambient air | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; actual_molecular_species; CAS; phase; compartment; capture; carbon_origin; independent_concentration_flow_duration; separate_component_water_element_subaccounts | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_ambient_argon | finishing | Argon from ambient air | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; actual_molecular_species; CAS; phase; compartment; capture; carbon_origin; independent_concentration_flow_duration; separate_component_water_element_subaccounts | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_nitrogen_out | finishing | Nitrogen to air | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; actual_molecular_species; CAS; phase; compartment; capture; carbon_origin; independent_concentration_flow_duration; separate_component_water_element_subaccounts | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_oxygen_out | finishing | Unreacted oxygen to air | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; actual_molecular_species; CAS; phase; compartment; capture; carbon_origin; independent_concentration_flow_duration; separate_component_water_element_subaccounts | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_shield_mix | fabrication | Whole supplied argon-carbon-dioxide welding shielding-gas mixture | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_manufacture_humidity | fabrication | Water vapour absorbed from ambient air during manufacture | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; actual_molecular_species; CAS; phase; compartment; capture; carbon_origin; independent_concentration_flow_duration; separate_component_water_element_subaccounts; F_in; F_out; X_in; X_out; same_side_other_event_evidence; origin_W; independent_state_enthalpy; upstream_treatment_owner_once | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. Independently measure true additions/removals and OTHER same-side duplicate evidence; use whole wet articles or disjoint component bridges and cancel internal transfers. Mixed packaging has one total outlet and measured non-export origin subaccounts; water/heat-carrier quantities, supply/return state/enthalpy and once-only provider burdens remain separate. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_ambient_co2_in | finishing | Carbon dioxide from ambient air | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; actual_molecular_species; CAS; phase; compartment; capture; carbon_origin; independent_concentration_flow_duration; separate_component_water_element_subaccounts | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_ambient_co2_out | finishing | Unreacted atmospheric carbon dioxide to air | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; actual_molecular_species; CAS; phase; compartment; capture; carbon_origin; independent_concentration_flow_duration; separate_component_water_element_subaccounts | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_blade_in | assets | Complete metal-cutting saw blade | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; original_Q_c; horizon_H; opening_FG_assets_installed_charge; closing_FG_assets_installed_charge; gross_G; actual_R; original_delivery; permission; postwork_tests; acceptance_disposition; new_removed_parts; X_in_out; performed_service; unused_unassigned_charge | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_blade_out | assets | Removed metal-cutting saw blade waste | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; original_Q_c; horizon_H; opening_FG_assets_installed_charge; closing_FG_assets_installed_charge; gross_G; actual_R; original_delivery; permission; postwork_tests; acceptance_disposition; new_removed_parts; X_in_out; performed_service; unused_unassigned_charge | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_tip_in | assets | Copper welding contact tip | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; original_Q_c; horizon_H; opening_FG_assets_installed_charge; closing_FG_assets_installed_charge; gross_G; actual_R; original_delivery; permission; postwork_tests; acceptance_disposition; new_removed_parts; X_in_out; performed_service; unused_unassigned_charge | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_tip_out | assets | Removed copper welding contact tip waste | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; original_Q_c; horizon_H; opening_FG_assets_installed_charge; closing_FG_assets_installed_charge; gross_G; actual_R; original_delivery; permission; postwork_tests; acceptance_disposition; new_removed_parts; X_in_out; performed_service; unused_unassigned_charge | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. | kg | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |
| cp_compressed_air | finishing | Externally supplied compressed air | foreground_record | event_id; row_id; original_cohort; raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion; timestamp; meter_calibration; state; moisture; provider; make_buy; operating_mode; uncertainty; inherited_exchange_vector; opening_raw_WIP_unassigned_stores; closing_raw_WIP_unassigned_stores; B_open; U; B_close; T_other; allocation_evidence; full_gross_V; original_Q_c; cohort_Q; operating_mode_totals; F_in; F_out; X_in; X_out; same_side_other_event_evidence; origin_W; independent_state_enthalpy; upstream_treatment_owner_once | Record this atomic event raw value/unit, actual state/temperature/pressure and independent conversion evidence; retain failed/unauthorized/zero-output work. Separate physical and burden dimensions; never predivide by Q. Keep raw totals undivided; consume this row calc_reference per reference flow result once; gross uses full actual V without stock correction, economic share or a second provider. Independently measure true additions/removals and OTHER same-side duplicate evidence; use whole wet articles or disjoint component bridges and cancel internal transfers. Mixed packaging has one total outlet and measured non-export origin subaccounts; water/heat-carrier quantities, supply/return state/enthalpy and once-only provider burdens remain separate. | m3 | each real event and matched stock cutoff | whole manufacturing cohort and relevant original-cohort actual service H, all failure modes | actual site and declared toll gates | per reference flow | original records, meter calibration, BOM/SDS/state, independent measurements/uncertainty, assignment and disposition |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_raw | all inventory rows | Convert raw extensive amounts to each native row unit once; kWh x 3.6 = MJ. Integrate only actual rates over measured duration; never multiply already integrated volumes by time. Any volume-to-mass needs the same substance at independently measured actual temperature/pressure/moisture/composition. Actual geometry is measured or traceable drawing-specific; LxW or LxWxT only for proven rectangles/rectangular solids, no bounding boxes or secondary-property density. | raw_amount; raw_unit; measured_state; actual_rate_duration; independent_conversion | converted undivided raw numerator | `jrc-ilcd-attributional-2010` |
| calc_history | manufacturing burden dimensions | A_i is B_open + U - B_close - T_other after actual unit conversion and justified allocation for that exchange. B_close is unreleased raw/WIP plus genuinely unused/unassigned stores/charges only, never already first-released FG. U includes failures/samples/idle/startstop/cleanup/rework and ordinary waste/treatment. T_other needs a real independent other cohort/function and justified once-only handover/allocation, not sale or disposal alone. Do not subtract stock-corrected consumption twice; this burden vector never replaces a gross V. | B_open; U; B_close; T_other; inherited_vector; allocation_evidence | assigned manufacturing exchange numerator | `jrc-ilcd-attributional-2010` |
| calc_physical | all physical gates | Reconcile manufacturing opening raw/WIP/installed stocks plus complete external influx against closing unreleased/installed stocks, internal first-release Q, all actual waste/species and external returns. FG services reconcile opening released FG plus internal Q plus actual external part returns and real service/material/water/package influx against full closing FG, gross shipments, external returns sent, waste and species. Combined gate cancels internal Q and every matched internal leg exactly once. Close wet mass, relevant elements, water phases, assets and each package independently; do not fit two unknowns with one residual. | cp_steel_tube; cp_steel_plate; cp_wire; cp_argon; cp_co2_shield; cp_abrasive; cp_shot; cp_cutting_fluid; cp_degreaser; cp_powder; cp_water; cp_makeup_water; cp_cloth; cp_filter; cp_electricity; cp_natural_gas; cp_purchased_heat; cp_steam; cp_condensate; cp_heat_water_return; cp_threaded_insert; cp_leveling_foot; cp_fastener; cp_pad; cp_released_part; cp_steel_scrap; cp_weld_dust; cp_spent_disc; cp_spent_shot; cp_sludge; cp_wastewater; cp_powder_waste; cp_filter_waste; cp_cloth_waste; cp_mixed_waste; cp_reject_part; cp_co2_fossil; cp_co; cp_no; cp_no2; cp_methane; cp_water_vapour; cp_argon_out; cp_shield_co2_out; cp_iron_particle; cp_powder_particle; cp_ambient_water; cp_storage_water_out; cp_service_water; cp_service_foot; cp_service_bolt; cp_service_electricity; cp_service_water_return; cp_service_wastewater; cp_removed_foot; cp_removed_bolt; cp_service_part_waste; cp_saw_in; cp_saw_out; cp_welder_in; cp_welder_out; cp_oven_in; cp_oven_out; cp_compressor_in; cp_compressor_out; cp_fixture_in; cp_fixture_out; cp_new_oil; cp_used_oil; cp_cooling_charge; cp_cooling_return; cp_cooling_waste; cp_pkg_carton_p; cp_pkg_carton_i; cp_pkg_carton_er; cp_pkg_carton_s; cp_pkg_carton_eo; cp_pkg_carton_w; cp_pkg_bubble_p; cp_pkg_bubble_i; cp_pkg_bubble_er; cp_pkg_bubble_s; cp_pkg_bubble_eo; cp_pkg_bubble_w; cp_pkg_pallet_p; cp_pkg_pallet_i; cp_pkg_pallet_er; cp_pkg_pallet_s; cp_pkg_pallet_eo; cp_pkg_pallet_w; cp_pkg_tape_p; cp_pkg_tape_i; cp_pkg_tape_er; cp_pkg_tape_s; cp_pkg_tape_eo; cp_pkg_tape_w; cp_pkg_sack_p; cp_pkg_sack_i; cp_pkg_sack_er; cp_pkg_sack_s; cp_pkg_sack_eo; cp_pkg_sack_w; cp_ambient_oxygen; cp_ambient_nitrogen; cp_ambient_argon; cp_nitrogen_out; cp_oxygen_out; cp_shield_mix; cp_manufacture_humidity; cp_ambient_co2_in; cp_ambient_co2_out; cp_blade_in; cp_blade_out; cp_tip_in; cp_tip_out; cp_compressed_air; gross_stocks; full_influx; full_outflux; cohort_links; element_species_water_ledgers; cp_pkg_mixed_waste | independent physical closure ledgers | `jrc-ilcd-attributional-2010` |
| calc_packaging | packaging | For each separately identified packaging material or whole article, O + P + I + ER + F_in - X_in = C + S + EO + W + F_out - X_out. O and C include complete wet empty, attached-WIP, attached-FG and reusable stocks. P and I are mutually exclusive for the same ingress event. F_in/F_out are independently measured real additions/removals from repair or ordinary material/water exchange, with event identity, phase and destination; never residual-fitting quantities. X_in/X_out removes only the exact same event/material amount proven duplicated in another actual OTHER flow on the same input/output side. It never removes a stock, the opposite side, a merely present card, or genuine influx retained in C. Use complete wet articles or one mutually exclusive component bridge; internal transfers and reuse cancel once. W is each material origin departure: a genuinely segregated external waste outlet is its own full gross card; an actual co-collected outlet uses one pkg_mixed_waste total with independently measured disjoint origin_W subaccounts and one receiver/treatment provider. Those origin subaccounts are not additional exported wastes or treatment quantities. Unknown composition remains unresolved; no mixed outlet is invented. Every physical gross V is independent of upstream/service/treatment burden ownership and allocation, which is assigned once separately. | cp_pkg_carton_p; cp_pkg_carton_i; cp_pkg_carton_er; cp_pkg_carton_s; cp_pkg_carton_eo; cp_pkg_carton_w; cp_pkg_bubble_p; cp_pkg_bubble_i; cp_pkg_bubble_er; cp_pkg_bubble_s; cp_pkg_bubble_eo; cp_pkg_bubble_w; cp_pkg_pallet_p; cp_pkg_pallet_i; cp_pkg_pallet_er; cp_pkg_pallet_s; cp_pkg_pallet_eo; cp_pkg_pallet_w; cp_pkg_tape_p; cp_pkg_tape_i; cp_pkg_tape_er; cp_pkg_tape_s; cp_pkg_tape_eo; cp_pkg_tape_w; cp_pkg_sack_p; cp_pkg_sack_i; cp_pkg_sack_er; cp_pkg_sack_s; cp_pkg_sack_eo; cp_pkg_sack_w; wet_stocks; P; I; ER; S; EO; W; one_upstream_owner; cp_pkg_mixed_waste; F_in; F_out; X_in; X_out; origin_W; same_side_other_event_evidence | full gross V and separate owned burden vector | `jrc-ilcd-attributional-2010` |
| calc_service | services; assets | Keep original Q_c and actual observation horizon H. Service A_i is only actual incremental performed service assigned to that cohort, including all real failed/unauthorized work and disposal. Performed service is not deducted for closing FG; carry only unused/unassigned service or charge. Physical asset/part/fluid events retain complete V separately from actual causal equipment-service burden. Trace real returns to original delivery and changed moisture/removed parts; never assume R equals original-delivery reversal or create Q again. | original_Q_c; H; actual_incremental_service; FG_history; G; R; original_delivery; asset_service | original-cohort incremental service numerator and full gross V | `jrc-ilcd-attributional-2010` |
| calc_reference | all inventory rows | x_i = A_i / Q. Q is the positive unique first-release net complete-part mass of the relevant original cohort; the service ledger uses its fixed original Q_c. For an assigned manufacturing/service LCI dimension A_i is the converted once-history-reconciled actually assigned numerator. For every card marked gross A_i is its complete actual gross V_i, without stock correction, burden-vector substitution, economic share, procurement/provider multiplication or credit. This is the only division by Q; cards and aggregation consume this same x_i once. Q=0 retains actual loads and physical flows without a unit result. | A_i; Q; original_Q_c; raw_quantity; once_history_assignment; allocation_evidence; full_gross_V_if_gross | x_i per reference flow | `jrc-ilcd-attributional-2010` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_terminal | release | Complete controlled BOM/terminal and single first-release genealogy, calibration/net weighing/test evidence; no complete-table proxy. | drawing/BOM; complete release record; calibration |
| dq_native | all inventory rows | Actual species/material/form/provider gate and exact native identity/property/group/unit restrictions; each unresolved auxiliary tracked, never silently chosen. | native identity; supplier/SDS; measured state |
| dq_completeness | all operating modes | Capture failed/zero output, startstop, idle, cleanup, specimens, actual rework and treatment with full cohort and inherited stocks; unknown is not zero/not_applicable. | raw journals; stock genealogy; mode meters |
| dq_physical | all physical gates | Independent wet mass and relevant element/species/water-phase closure with uncertainty; complete packaging six-leg and asset/fluid/FG histories without scaling gross legs. | independent balances; assays; stocks; uncertainty |
| dq_assignment | burden dimensions | Allocation hierarchy evidence, actual drivers and residual market gate/state/time; separate full gross disclosures from actual upstream/service/treatment ownership once. | exclusive records; causal driver; contemporaneous gate values |
| dq_source | all rules | Sources are qualitative technical synthesis; preserve variant exclusions and no assumed numerical cure/recipe/yield/life/performance. Scientific and translation review remain pending. | primary full context; limitations; actual future foreground evidence |

## 9. Validation Rules

Read full scope, each complete card description and raw observations with these checks; unknowns never pass automatically.

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_identity | all inventory rows | Verify complete terminal/BOM, make-buy ownership and every adopted native name, CAS if present, form, route, geography, medium/type, all properties and exact unit chain; preserve all consuming-card restrictions. An unresolved auxiliary is not a zero; core reference mismatch would make this record draft and unusable. | `jrc-ilcd-attributional-2010`; `metaco-table-leg-route` |
| v_quantity | all inventory rows | Require one coherent first-release Q and all raw-to-A or complete-V transformations before the sole A/Q (or service A/Q_c) quotient. Cards and protocol aggregation reference the same result once. No assumed item mass, density, bounding-box area, cure/recipe/energy/yield number or unperformed test. Keep actual native numerator units; unsupported conversions remain unresolved. | `jrc-ilcd-attributional-2010`; `metaco-table-leg-route` |
| v_balance | all physical gates | Require independently observed raw/WIP/FG/asset/package/water stocks, complete gross legs, relevant elements/species and inherited vectors at manufacturing, FG services and combined gates. Never subtract first-released closing FG manufacturing burden or erase ingress retained in full wet closing stock. Resolve whole/component and mixed-outlet pool overlaps; a residual is a diagnostic, not proof of two unknown quantities. | `jrc-ilcd-attributional-2010`; `metaco-table-leg-route` |
| v_qualification | release; services | Keep actual drawing/spec release criteria, test records, permissions, postwork acceptance/disposition and original-cohort chronology. Unknown/core holds or unauthorized/failed work cannot be labelled passed or silently discarded. Ordinary moisture exchanges remain measured. Scientific review, translation review, mapping acceptance and publication are separate from engineering checks. | `jrc-ilcd-attributional-2010`; `metaco-table-leg-route` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Supply dataset for an actual complete table-leg assembly; not a complete table or every nonwood part |
| allowed_use | Only matching whole terminal, material, route, configuration/state and unit restrictions; manufacturing and original-Q_c service H explicit |
| excluded_use | Exclude a complete table/chair/cabinet, tabletop, raw tube or blank, generic hinge/bolt hardware, machine/structural support, powered/sit-stand or caster bases, wood-capped/wood legs, cast-iron/aluminium/stainless variants, bought finished-part repacking, raw-steel/waxed/liquid-painted/electroplated/PVD/acid-blackened or UV-only finishes, onsite primary steel/tube/powder manufacture, customer tabletop fitting, use and end of life. An upstream supplier-completed weld, coating or included component remains wholly inside its provider gate; never recreate that work onsite. A different principal material, terminal or finishing route needs a fresh applicability assessment. |
| required_metadata | controlled leg model/drawing/BOM and complete part/paired-shipment distinction; integral mounting plate and actual holes/slots/joints with interface specification; tube weld seam route and actual steel grades/surface state/dimensions without assumed thickness; complete supplied insert/leveling foot/pad/fastener scope and disjoint make-buy ownership; actual filler and separately supplied shielding gases versus whole premix; whole cleaning/cutting-fluid/powder formulation and concentration/SDS with carrier-water subaccounts; actual surface preparation powder recovery cure state and permission for postwork; manufacturer/spec dimensional joint finish and functional acceptance tests and disposition; calibrated same-configuration complete net M and first-release Q excluding transport packaging; all raw/WIP/unassigned stores and per-exchange inherited burden vectors; released FG genealogy original Q_c and actual storage/dispatch/return horizon H; every packaging P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks with one upstream owner; physical assets installed fluids maintenance new/old parts and measured causal service; site period geography electricity interface and actual gas/steam/heat carrier states; gross mass relevant elements real molecular species and independent water-phase evidence; allocation residual price gate/time/state and all unresolved identities/providers |
| required_quality_disclosure | All gaps, actual measurements and boundary/time/geography, native restrictions, assignment/gross separation, real holds and check scope |
| update_trigger | Changed material/supply state, complete BOM, route/cure, function/test gate, native restriction, provider or allocation evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-notes-2025 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | CPC3.0 30 June 2025 page188: nonwood parts and HS9401.99/9403.99; scope only, no manufacturing/coverage approval. |
| metaco-table-leg-route | extension_guidance | https://metacoind.com/table-leg-production-case-show | Manufacturer whole tube-leg route, quality checkpoints and paired bubble/carton packing; example dimensions are not defaults. |
| semiexact-furniture-manufacturing | extension_guidance | https://mfg.semiexact.com/industries/furniture | Independent steel furniture component cutting/forming/welding/coating capability; no recipe or LCA factor. |
| econ-steel-leg-process | extension_guidance | https://econtablelegs.com/how-our-metal-table-legs-are-made/ | Actual made-to-order leg design/cutting/layout/welding/grind/cleaning; raw/stainless/liquid/blackened finishes are counterexamples, no time or heat default. |
| gelan-leg-manufacture | extension_guidance | https://www.gelanfurnitureleg.com/metal-table-legs-round-metal-table-legs-product/ | Independent round metal-leg manufacturing, powder coating, mounting and inspection context; no thermal-cure or oven statement. Other geometries, finishes, materials, tests and dimensions are not universal. |
| semiexact-steel-leg-product | extension_guidance | https://semiexact.com/products/3-x-1-tube-steel-legs-clear-coat | Independently supplied tube-leg terminal with mounting plate/insert, optional feet and excluded casters/raw finish; user installation is downstream. |
| jrc-ilcd-attributional-2010 | official_guidance | https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | First edition March2010 sections7.9.2–7.9.3 pages255–272: attributional subdivision, determining physical causality, then actual residual market value. No stock equation, plant allocation share, process recipe, yield or emission factor is claimed from it. |
| semiexact-powder-cure | extension_guidance | https://mfg.semiexact.com/capabilities/powder-coating | Independent first-party process capability: electrostatic powder deposition and oven cure, with actual cure conditions determined from powder supplier and foreground records; example temperature/time, phosphatizing alternative, weatherability and cost claims are not defaults or proof for another source SKU/plant. |
