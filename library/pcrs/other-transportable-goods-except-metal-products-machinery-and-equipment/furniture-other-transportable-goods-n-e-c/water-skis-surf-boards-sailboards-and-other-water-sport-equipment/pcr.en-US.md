---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.water-skis-surf-boards-sailboards-and-other-water-sport-equipment
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# EPS-core glass-epoxy surfboard manufacture

## 1. Scope and Applicability

This attributional candidate covers only new non-powered, non-inflatable rigid surfboards with a wood-stringered EPS core and glass-epoxy skin. Foreground starts with the actual purchased formed EPS blank already containing its bonded stringer, then completes actual remaining shaping, dry-glass cutting and whole resin-side/hardener-side preparation wet layup/cure, fin-box installation, epoxy sealcoat, genuine trimming/sanding and burn-through resealing, actual combined vent/leash-plug installation, and whole-board appearance/dimension/structure/cure/component-function inspection through unique first quality release. Real upstream raw-material/blank manufacture is inherited once; bought whole-board packing does not satisfy this route.

The explicit sales terminal is a complete board with installed fin boxes and combined vent/leash component; detachable fins and a separately sold leash are not supplied. Test-fixture fins are not the sold BOM. NSP guide pp32/40 positively establish a compatible complete board, installed boxes, fins-not-included sale and layer structure; Roberts independently documents wood-stringered EPS/epoxy/glass; Greenlight supports actual shaping, hand layup, surface finish, sanding and the actual supplied installation kit. This is a transparent technical synthesis, not a common manufacturer/order/SKU/factory recipe or measured BOM. NSP biaxial reinforcement and selected actual dry woven cloth are not the same material; qualify the actual choice without importing catalogue layer/areal-mass values. The selected real surface is compatible epoxy sealcoat followed by actual matte sanding; extra PU surface and sandwich vent screw in GONG are countercontext, not additional defaults. Sources: `greenlight-guide`; `greenlight-shape`; `greenlight-glass`; `greenlight-sand`; `greenlight-vent`; `roberts-ret`; `nsp-volume`; `nsp-dealer`; `gong-rigid`.

Exclude PU/polyester principal structures, soft-top laminates, sandwich shells, principal carbon reinforcement, sail/mast sets, water-skis, inflatable/paddle boards, vessels, cores/resin/glass/parts alone, toys, marine-use systems, onsite bead expansion, and separate painted or polished-gloss principal routes. Each actual additional auxiliary or part must remain explicit, never hidden in zero or a collection; a changed principal route requires new applicability assessment. No resin ratio, layer count, density, board weight/geometry, cure time/temperature, absorption, life/performance/certification or yield default is prescribed. Every card and rule is governed by the actual first-release Q and original-cohort service Q_H/H conditions.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.water-skis-surf-boards-sailboards-and-other-water-sport-equipment |
| classification_refs | CPC 3.0 38420; narrower; current accepted association: `classifications/mappings/cpc-3.0-to-pcr.yaml` and `docs/adr/cpc3-additional34-20261029-38420.md`; complete method scope/exclusions apply, not full-leaf or scientific/translation approval |
| covered_products | Complete wood-stringered EPS glass-epoxy rigid surfboard in declared fins-not-included configuration |
| excluded_products | Other principal structures, paddle/inflatable/sail/ski/toy/vessel systems, parts and blank-only outputs |
| representative_product | One completely finished rigid wave-surf board with real installed boxes and combined vent/leash component; explicit supplied BOM |
| production_route | Supplied formed stringered EPS blank -> remaining shaping -> real glass/epoxy hand layup and cure -> installed inserts -> epoxy sealcoat and matte finishing -> whole first release |
| market_state | New complete fully cured/finished board at unique first quality release; no detachable fins/leash supplied; actual later gate services kept separately |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply complete rigid wave-surfing boards in the declared configuration |
| How much | 1 kg net whole-board mass from the unique first-release cohort; Q=sum actual first-accepted whole-board kg |
| How well | Actual declared drawing/BOM, cure/finish and manufacturer acceptance; no invented performance threshold or supplied fin |
| How long or cycle | Declared complete production cohort and real observed original-cohort service horizon; no marine use or assumed lifetime |
| reference_flow_link | out_board |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Water-skis, surf-boards, sailboards and other water-sport equipment `7fe05cda-645e-4ad2-ba01-cebd58bfe501` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual site and period; complete supplied configuration and serial cohort; EPS formed-blank and stringer supply state; actual glass construction and sizing; whole resin and hardener formulations; actual layer/cure/surface conditions; installed box and vent/leash kit BOM; no detachable fins/leash supplied; measured whole-board net mass and moisture; first-release acceptance and Q; raw/WIP/FG stocks and inherited vectors; original service Q_H and observed H; actual packaging six-leg pools; asset and repair-fluid/water stocks; actual utility supply/geography/voltage and gas media; supplier upstream ownership and unresolved provider gaps |

Declare every required qualifier in concrete dataset metadata, process notes, reference comments or equivalent consumable fields; external author evidence alone does not satisfy that requirement.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated complete-board net kg at first quality release, excluding transport packaging and supplied-excluded fins/leash; Q includes released closingFG once. No item mass inferred from a native secondary coefficient. |
| native_extensive | all inventory rows | Native extensive property | kg; MJ; m3 | Each row retains its actual native property/unit; electricity MJ, atmospheric-water resource m3 and mass kg are separate numerator dimensions. Required Mass/kg never applies to energy/volume cards. Raw conversions precede attribution and one quotient. |
| whole_preparation | whole supplied formulations and articles | Mass | kg | Whole supplied resin side, hardener side, vent kit, wet article and supplier-included packaging each procured once; assay/carrier/active/water are non-additive child ledgers. Actual onsite mixing has separate bought materials and actual energy/loss. |
| conversion_scope | item; area; volume observations | Independently measured extensive basis | kg; m3 | Native item/Item(s) aliases, if used in later compatible records, have factor1 only; no kg conversion without calibrated same-configuration net M and scope/moisture. Area cannot replace this mass Q; actual nonrectangular single-side projected geometry requires drawing-specific traceable measurement, never bounding L*W. Volume totals are not rates; density belongs to the actual substance/state. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased complete formed EPS blank with bonded wood stringer, actual dry glass, whole resin/hardener and supplied inserts/kits |
| starting_condition_role | foreground_starting_point |
| product_classification_scope | Narrow complete rigid glass-epoxy EPS wave-surfboard subset of CPC3.0:38420; other leaf products not covered |
| recursive_input_rule | No bought complete surfboard may masquerade as blank-to-board manufacture. Pair internal same-board handoffs without new purchase/second Q; supplier-completed inputs carry their actual upstream scope once. |
| upstream_dataset_requirement | Compatible blank including foam/stringer, cloth, every whole formulation/insert, utility, transport, capital service and treatment provider with actual geography/time/technology and cutoffs disclosed; identity is not provider approval. |
| disclosure | Declare real make/buy scope, release gate and cohort, Q/Q_H/H, stocks/vectors, packaging gross legs, species/water/thermal states, actual failures and hold/disposition, source limitations and missing data; no assumed zeros. |

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | shape; laminate; finish | Start with formed wood-stringered EPS blank and actual dry reinforcement, whole resin-side and hardener-side preparations and genuine bought inserts. Include only actual remaining blank shaping, box/plug installation, lamination/cure, lap trimming, epoxy sealcoat, actual sanding/resealing and complete-board inspection. Supplied blanks include upstream foam/stringer production once; do not replace this manufacturing boundary with bought finished-board packing. | `greenlight-guide`; `greenlight-shape`; `greenlight-glass`; `greenlight-sand`; `roberts-ret` |
| boundary_terminal | out_board | Require full actual installed fin-box and combined vent/leash kit state and whole supplied BOM at unique first release. This selected sales configuration has no detachable fins or separately sold leash; record that explicitly instead of adding imaginary parts. A different actually included part requires its own material/article card and a disjoint whole-board bridge, counted in the whole board once. | `nsp-dealer`; `nsp-volume`; `greenlight-vent`; `greenlight-glass` |
| boundary_failures | all processes | Include every actual failed/zero-output batch, start/stop, idle, cleanup, trial within the real production cohort, scrap and real rework. A failed or unauthorised performed activity is not absent. Ordinary losses, external waste shipment/sale or rejected samples do not remove production/treatment burdens; only a true other cohort/function and justified allocation/handover transfers a burden vector once. | `ilcd-allocation`; `greenlight-glass`; `greenlight-sand` |
| boundary_q | cp_release; all processes | Q is the measured sum of net whole-board kg at each serial first quality release. Released closing FG is already in Q; never add it as a second output or subtract its manufacture from the first-release cohort. Manufacturing B_close contains only raw/WIP and actually unassigned non-WIP supplies or services. Preserve per-exchange inherited vectors at opening/closing WIP. Q=0 retains all physical activity and burdens and produces no unit result. | `ilcd-allocation`; `greenlight-sand` |
| boundary_service | service; pack; assets | Actual storage/packing/handling/shipment and postrelease work keep their original cohort Q_H and observed horizon H, irrespective of held FG. Only unused/unassigned charges carry forward; performed service is not deducted because a board remains in stock. Historical manufacture is not a new service purchase, reinspection/dispatch is not new Q, and true returns retain original serial, historical burden and actual incremental work/water/loss. A net-delivery denominator is outside this first-release profile and requires a complete historical G/R/D_rev bridge. | `ilcd-allocation`; `gong-rigid`; `greenlight-vent` |
| boundary_physical | all inventory rows | All physical gross legs use complete actual V in the native extensive unit, independently of burden vectors, stock correction and economic shares. At manufacture, FG/service and combined physical gates reconcile full wet opening stocks plus true external inflows to wet closing stocks plus true external outflows; cancel only matched internal transfers. Whole wet articles and disjoint components require an explicit non-additive bridge. New material/water influx remains even if retained in closing stock; X removes only other overlapping same-side flow terms. Material/article receipt V is the complete gross leg of the specified net contents, with transport packaging separately measured in I; when only a whole wet shipped unit is weighed use a disjoint contents/packaging bridge rather than adding full unit plus I. A kit includes its actually supplied contents once; unused sticks/putty and packaging are not installed board mass. | `ilcd-allocation` |
| boundary_pack | pack; waste | For each actual packaging pool collect distinct P/I/ER/S/EO/W cards: opening empty plus attached WIP/FG plus reusable stock + P + I + ER = closing complete wet stock + S + EO + W, after only true other same-side overlap. P/I whole wet article supply is once; I is retained as physical ingress with its one upstream owner. S is packaging on gross physical dispatch, never Q. W internal transfers pair to handling reception and cancel; the actual final mixed or separate external Waste and treatment are counted once. Internal reuse adds neither purchase nor co-product credit. | `ilcd-allocation` |
| boundary_assets | assets | Physical machines/racks/parts and installed fluids retain complete actual opening/closing wet inventories, new/old receipts/returns/retirement, separate repair materials and water phases. Do not scale gross machine or removed-part mass by service/economic share or assume lifetime/replacement interval. Separately attribute actual current asset/service burden once, with explicit provider/capital boundary and unused-service carry. | `ilcd-allocation`; `greenlight-guide` |
| boundary_species | all processes | Reconcile whole physical mass and relevant elements independently of true species/reaction/phase evidence. No one residual fits two unknowns. Supplier formulations are whole purchases with non-additive assay/water/active child ledgers; onsite mixing has each real bought component and real energy/loss. Do not infer specific molecules from VOC/COD/total carbon/nitrogen/dust or invent reaction water from epoxy cure. Ordinary natural humidity uptake/loss is included without fictitious work permission. | `greenlight-glass`; `greenlight-vent`; `ilcd-allocation` |
| boundary_heat | all processes | Measure actual electricity, water and every real thermal/fuel carrier separately. Integrated gas/liquid volumes are not multiplied by time again; only true rates are integrated. Substance/state-specific density and actual thermal state/enthalpy are independent evidence. If real external hot water/steam/condensate or other Product return exists add separate carrier kg and heat MJ rows with one supplier water/energy convention; do not assume a boiler or purchase electric heat twice. | `ilcd-allocation`; `greenlight-guide` |
| boundary_new_atoms | all processes | Before consuming a concrete dataset, add every actual unlisted material, preparation, included component, carrier, elementary species and real waste destination as one physically specific card. Conditional absence requires real absence evidence, never unknown=0. A true extra coating, foam route, carbon/sandwich layer or propulsion changes principal-route applicability and cannot be hidden in other inputs. | `greenlight-guide`; `gong-rigid`; `nsp-dealer` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| shape | Formed-blank receipt and remaining shaping | required | Actual operation/event; missing data is not absence | foreground_operation | out_board is the sole reference; others create no Q |
| laminate | Insert work and glass-epoxy hand lamination/cure | required | Actual operation/event; missing data is not absence | foreground_operation | out_board is the sole reference; others create no Q |
| finish | Epoxy sealcoat finishing and complete first release | required | Actual operation/event; missing data is not absence | foreground_operation | out_board is the sole reference; others create no Q |
| pack | Actual material-specific packing pools | conditional | Actual operation/event; missing data is not absence | foreground_operation | out_board is the sole reference; others create no Q |
| service | Original-cohort factory-gate service | conditional | Actual operation/event; missing data is not absence | foreground_operation | out_board is the sole reference; others create no Q |
| assets | Real asset and maintenance movements/service | conditional | Actual operation/event; missing data is not absence | foreground_operation | out_board is the sole reference; others create no Q |
| waste | Actual waste handling and external outlets | required | Actual operation/event; missing data is not absence | foreground_operation | out_board is the sole reference; others create no Q |

Each card is one true atomic event in its declared direction. All physical cards use full gross V as numerator and disclose physical activity without another purchase/provider burden. A separate burden dimension is owned once by calc_manufacture or calc_service and reported as q_b through calc_quotient; never stock-correct or economically scale a physical card. Actual packaging/waste internal pairs cancel at consolidation; origin W and its already inclusive final total are non-additive. Preserve each description, native restriction, protocol and the complete boundary in consumable context.

### Process: Formed-blank receipt and remaining shaping (`shape`)

#### Inputs

##### Product flows

###### Wood-stringered formed EPS surfboard blank (`in_eps_blank`)

Receive one complete supplied EPS blank with already bonded wood stringer. Record actual supplied contour/rocker and remaining machining. Its upstream bead/blowing agent, expansion heat, stringer/adhesive and supplier waste are included once in that supplier boundary; no onsite EPS foaming or new raw EPS granule purchase is invented. A polyurethane Polyfoam identity and noncellular/loose-bead records do not represent this article. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Wood-stringered formed EPS surfboard blank
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_shape`
- Sources: `greenlight-guide`; `greenlight-shape`; `roberts-ret`

###### Metered alternating current (`power_shape`)

Actual attributed electricity for this operation, including extraction, environmental conditioning and all start/stop/idle/failed/cleanup work. Select the bound CN medium-voltage supply only when physically true; otherwise a correct supply binding is required, without asserting a core-method hold. Electric heating is owned here and not purchased heat again. Native Product alternating current, CN supply geography, 1–35kV medium voltage, grid-average consumption mix to user including upstream generation/transmission. Native reference Net calorific value/MJ. This binding applies only to that actual supply interface; other voltages/geographies require compatible replacement before dataset use. Meter real kWh and convert once by 3.6 to MJ; no Mass/kg rule or duplicated generation/transformer burden. Reference unit group is `93a60a57-a3c8-11da-a746-0800200c9a66`, actual reference unit MJ. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_shape`
- Sources: `greenlight-guide`; `ilcd-allocation`

##### Elementary flows

###### Atmospheric H2O uptake (`h2o_in_shape`)

Record actual moisture ingress/egress from ordinary storage/handling and wet work as well as repairs; no extra work permission is invented for natural exchange. Keep new influx plus full wet closing article/material stocks. Correct only genuinely overlapping other same-side flow terms, never erase stock-retained influx. If taken as part of measured humid intake/exhaust, use a disjoint species bridge. This is only the disjoint event in this process; match the particular material/packaging pool and do not repeat the same event in a neighbouring process. Native Elementary resource Water in air, renewable material resource from air; Volume reference only. No official Chinese basename is provided; preserve the official English display and disclose that absence. Use actual H2O vapour volume at documented temperature/pressure/composition, independent of all dry-air species and supplied water. Not an emission, liquid water m3 by assumed density, or steam purchase. Reference unit group is `93a60a57-a3c8-12da-a746-0800200c9a66`, actual reference unit m3. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Water, in air `d73aff1b-0b31-434f-8e44-87a08c93e13f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_shape`
- Sources: `gong-rigid`; `greenlight-vent`; `ilcd-allocation`

###### Atmospheric molecular oxygen intake (`o2_in_shape`)

Conditional actual ventilation/pressure-equalisation species. Measure complete gross leg and retain source/receptor, temperature/pressure and species assay; integrate a real rate once, not an already integrated volume again. No fixed air composition, oxygen consumption, stoichiometric reaction or nitrogen emission from total-N/NOx is assumed. Air aggregate is a non-additive bridge, never another procurement/emission. Only an actual controlled equipment/operation inlet or outlet crosses this gas boundary; ordinary surrounding atmosphere is not an invented extra ventilation operation. Keep event and metering ownership disjoint from every other process and the humid-air species bridge. Native Elementary oxygen resource from air, CAS7782-44-7; molecular O2 only, not oxygen atoms, ozone or purchased cryogenic oxygen. Native Mass; actual intake measured with state and species composition; no fixed air fraction. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_shape`
- Sources: `greenlight-vent`; `ilcd-allocation`

###### Atmospheric molecular dinitrogen intake (`n2_in_shape`)

Actual atmospheric N2 gross intake, not purchased liquid or industrial nitrogen and not total nitrogen. A compatible resource-from-air identity must precede a UUID binding; do not borrow the air-emission UUID for an input. Preserve the disjoint dry-air/H2O bridge and native mass measurement. Only an actual controlled equipment/operation inlet or outlet crosses this gas boundary; ordinary surrounding atmosphere is not an invented extra ventilation operation. Keep event and metering ownership disjoint from every other process and the humid-air species bridge. Native Elementary dinitrogen CAS7727-37-9, renewable element resource from air, Mass. Molecular N2 only; not an emission, total-N/NOx or industrial liquid gas. Synonym breadth does not override CAS, atmospheric origin or actual gaseous state. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_shape`
- Sources: `greenlight-vent`; `ilcd-allocation`

###### Atmospheric argon intake (`ar_in_shape`)

Conditional actual ventilation/pressure-equalisation species. Measure complete gross leg and retain source/receptor, temperature/pressure and species assay; integrate a real rate once, not an already integrated volume again. No fixed air composition, oxygen consumption, stoichiometric reaction or nitrogen emission from total-N/NOx is assumed. Air aggregate is a non-additive bridge, never another procurement/emission. Only an actual controlled equipment/operation inlet or outlet crosses this gas boundary; ordinary surrounding atmosphere is not an invented extra ventilation operation. Keep event and metering ownership disjoint from every other process and the humid-air species bridge. Native Elementary argon resource from air, CAS7440-37-1; molecular/atomic argon identity, not a manufactured gas bottle or an isotope tracer. Native Mass; actual atmospheric intake and state only, no assumed fraction. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_shape`
- Sources: `greenlight-vent`; `ilcd-allocation`

#### Outputs

##### Waste flows

###### Expanded-polystyrene shaping offcut (`eps_offcut_w`)

Actual EPS-only solid offcut or captured EPS dust; measure separately from wood-stringer offcuts and uncaptured air particles. Do not infer pentane release from removed foam mass. This is the measured origin-W handoff paired with receive_eps_offcut_w; cancel at combined gate, keeping gross ledgers. Actual co-collection is evidenced by waste tickets; never mandate mixing incompatible/hazardous residues. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Expanded-polystyrene shaping offcut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_shape`
- Sources: `greenlight-shape`; `greenlight-glass`; `greenlight-sand`; `ilcd-allocation`

###### Wood-stringer shaping offcut (`wood_offcut_w`)

Actual separate stringer wood cutting/planing residual, not whole purchased blank again. Wet mass, dry material and moisture independently recorded. This is the measured origin-W handoff paired with receive_wood_offcut_w; cancel at combined gate, keeping gross ledgers. Actual co-collection is evidenced by waste tickets; never mandate mixing incompatible/hazardous residues. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Wood-stringer shaping offcut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_shape`
- Sources: `greenlight-shape`; `greenlight-glass`; `greenlight-sand`; `ilcd-allocation`

##### Elementary flows

###### H2O vapour release (`h2o_out_shape`)

Record actual moisture ingress/egress from ordinary storage/handling and wet work as well as repairs; no extra work permission is invented for natural exchange. Keep new influx plus full wet closing article/material stocks. Correct only genuinely overlapping other same-side flow terms, never erase stock-retained influx. If taken as part of measured humid intake/exhaust, use a disjoint species bridge. This is only the disjoint event in this process; match the particular material/packaging pool and do not repeat the same event in a neighbouring process. Native Elementary water vapour, CAS7732-18-5, emission to air unspecified; reference Mass only. Select actual gas-phase H2O leaving to the documented unspecified air compartment; liquid drainage/condensate has its own row. Not reaction-water inference from curing, COD, aerosol totals or an extra purchased heat carrier. A known urban/nonurban/long-term compartment requires the exact compatible identity instead. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_shape`
- Sources: `gong-rigid`; `greenlight-vent`; `ilcd-allocation`

###### Unreacted molecular oxygen exhaust (`o2_out_shape`)

Conditional actual ventilation/pressure-equalisation species. Measure complete gross leg and retain source/receptor, temperature/pressure and species assay; integrate a real rate once, not an already integrated volume again. No fixed air composition, oxygen consumption, stoichiometric reaction or nitrogen emission from total-N/NOx is assumed. Air aggregate is a non-additive bridge, never another procurement/emission. Only an actual controlled equipment/operation inlet or outlet crosses this gas boundary; ordinary surrounding atmosphere is not an invented extra ventilation operation. Keep event and metering ownership disjoint from every other process and the humid-air species bridge. Native Elementary molecular oxygen CAS7782-44-7, Mass, emission to unspecified air; broad synonyms including liquid/ionic labels do not override CAS and actual gaseous O2. Only observed unreacted atmospheric O2 in this unspecified compartment; no combustion or chemical stoichiometry assumed. Known urban/nonurban/long-term release needs its correct identity. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_shape`
- Sources: `greenlight-vent`; `ilcd-allocation`

###### Unreacted dinitrogen exhaust (`n2_out_shape`)

Conditional actual ventilation/pressure-equalisation species. Measure complete gross leg and retain source/receptor, temperature/pressure and species assay; integrate a real rate once, not an already integrated volume again. No fixed air composition, oxygen consumption, stoichiometric reaction or nitrogen emission from total-N/NOx is assumed. Air aggregate is a non-additive bridge, never another procurement/emission. Only an actual controlled equipment/operation inlet or outlet crosses this gas boundary; ordinary surrounding atmosphere is not an invented extra ventilation operation. Keep event and metering ownership disjoint from every other process and the humid-air species bridge. Native Elementary dinitrogen CAS7727-37-9, Mass, emission to unspecified air; molecular N2, not total nitrogen excluding N2, NOx or purchased liquid nitrogen. Observed unreacted ventilation species only; known urban/nonurban/long-term release requires its correct identity. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_shape`
- Sources: `greenlight-vent`; `ilcd-allocation`

###### Unreacted argon exhaust (`ar_out_shape`)

Conditional actual ventilation/pressure-equalisation species. Measure complete gross leg and retain source/receptor, temperature/pressure and species assay; integrate a real rate once, not an already integrated volume again. No fixed air composition, oxygen consumption, stoichiometric reaction or nitrogen emission from total-N/NOx is assumed. Air aggregate is a non-additive bridge, never another procurement/emission. Only an actual controlled equipment/operation inlet or outlet crosses this gas boundary; ordinary surrounding atmosphere is not an invented extra ventilation operation. Keep event and metering ownership disjoint from every other process and the humid-air species bridge. Native Elementary argon CAS7440-37-1, Mass, emission to unspecified air; broad isotope synonyms do not turn ordinary argon into a tracer. Actual unreacted air species only, with known compartment replaced by its precise native record. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_shape`
- Sources: `greenlight-vent`; `ilcd-allocation`

### Process: Insert work and glass-epoxy hand lamination/cure (`laminate`)

#### Inputs

##### Product flows

###### Dry woven glass-fibre cloth (`in_glass_cloth`)

Actual dry woven cloth cut for deck, bottom, rails and qualified patches; record separate lots/plies offcuts. Different glass/sizing and weave states are not assumed equal. No resin already supplied in prepreg is purchased again. A stitched biaxial reinforcement, if actually used, needs its separately named nonoverlapping card; the NSP illustrated biaxial is not silently equated to woven cloth. Native Product flow, manufactured woven glass-fibre fabric, production mix at plant; no fixed CAS, glass grade, sizing, areal mass or geography. Select one actual dry woven cloth only after weave/finish compatibility; not loose yarn, wool, stitched non-crimp biaxial fabric or resin prepreg. The isolated general-comment textile chapter label does not override the consistent woven-glass name and classification. Native sole Mass property; no invented areal density. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Woven fabrics (including narrow fabrics) of glass fibres `59caf1b9-5a05-4eef-8ba2-bc94aa28f43f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_laminate`
- Sources: `greenlight-glass`; `roberts-ret`; `nsp-dealer`

###### Surfboard laminating epoxy resin-base preparation (`in_resin_base`)

Purchase the entire actual resin-side commercial formulation once for lamination, box bonding and epoxy sealcoat; retain full SDS/specification and lot. DGEBA-only, solvent/paint and wafer-adhesive identities cannot be inferred from the word epoxy. Active resin, diluent and carrier are constituent subaccounts, not additional purchases. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Surfboard laminating epoxy resin-base preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_laminate`
- Sources: `greenlight-glass`; `greenlight-vent`; `nsp-dealer`

###### Surfboard epoxy hardener preparation (`in_hardener`)

Purchase the whole separately supplied compatible hardener once; keep exact formulation, approved resin pairing and actual mixed charges/losses. No pure-amine identity, universal resin ratio, cure temperature/time, conversion or reaction water is inferred. Onsite mixed epoxy is an internal combination, not another purchased mixture. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Surfboard epoxy hardener preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_laminate`
- Sources: `greenlight-glass`; `greenlight-vent`; `nsp-dealer`

###### Surfboard fin-box insert (`in_finbox`)

Each actual purchased fin box is one complete insert including supplied integral hardware and reinforcement carrier when present; record each box count/mass/material and genuine bonding resin from the resin ledger. Installed boxes are required at first release. Detachable fins are not supplied in the selected complete-board sale; do not invent their purchase or add loose fins to make a fictitious terminal. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Surfboard fin-box insert
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_laminate`
- Sources: `greenlight-glass`; `greenlight-vent`; `nsp-dealer`

###### Paper-backed masking tape (`in_mask`)

Record actual complete paper/adhesive masking tape used for rail dams and protecting boxes; not the BOPP shipping-tape binding. One whole preparation/article, no separate adhesive purchase for supplier coating. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Paper-backed masking tape
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_laminate`
- Sources: `greenlight-glass`; `greenlight-sand`

###### Graduated polypropylene mixing cup (`in_cup`)

A real complete mixing vessel; weigh whole supplied article and actual replacement/cleaning state. Raw PP granulate is not a manufactured cup; kit-included cups are child ledger only. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Graduated polypropylene mixing cup
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_laminate`
- Sources: `greenlight-glass`; `greenlight-sand`

###### Wooden epoxy mixing stick (`in_stick`)

Only separately acquired whole wooden mixing sticks used for main epoxy charges; exclude the vent-kit included tamping stick from this procurement. Retain actual reused/new/discarded state without automatic lifetime. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Wooden epoxy mixing stick
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_laminate`
- Sources: `greenlight-glass`; `greenlight-sand`

###### Citrus-based epoxy cleanup soap preparation (`in_soap`)

When actually used, record the whole supplier cleanup soap, not citrus fruit or presumed limonene. Record separately supplied dilution water and actual washings; never invent acetone merely from the polyester counterroute. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Citrus-based epoxy cleanup soap preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_laminate`
- Sources: `greenlight-glass`; `greenlight-sand`

###### Disposable vinyl workshop glove (`in_glove`)

Conditional actual vinyl glove supply; complete manufactured glove only, not resin or an unspecified PPE collection. If actual rubber/nitrile glove is used replace with its specific card/material before collection, keeping failed-operation use. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Disposable vinyl workshop glove
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_laminate`
- Sources: `greenlight-glass`; `greenlight-sand`

###### Fumed silica epoxy thickener (`in_silica`)

Conditional separately purchased actual fumed silica for qualified insert bonding only; not generic silica sand, precipitated silica or kit-included putty filler. Retain true grade/form and dust fate, with no default dose. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Fumed silica epoxy thickener
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_laminate`
- Sources: `greenlight-glass`; `greenlight-sand`

###### Printed surfboard laminate logo sheet (`in_logo`)

Conditional actual supplier-printed laminate logo sheet with ink already included; one supplied article. An onsite print requires each purchased ink/medium and real energy/waste separately, not a second printed-sheet purchase. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Printed surfboard laminate logo sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_laminate`
- Sources: `greenlight-glass`; `greenlight-sand`

###### Metered alternating current (`power_laminate`)

Actual attributed electricity for this operation, including extraction, environmental conditioning and all start/stop/idle/failed/cleanup work. Select the bound CN medium-voltage supply only when physically true; otherwise a correct supply binding is required, without asserting a core-method hold. Electric heating is owned here and not purchased heat again. Native Product alternating current, CN supply geography, 1–35kV medium voltage, grid-average consumption mix to user including upstream generation/transmission. Native reference Net calorific value/MJ. This binding applies only to that actual supply interface; other voltages/geographies require compatible replacement before dataset use. Meter real kWh and convert once by 3.6 to MJ; no Mass/kg rule or duplicated generation/transformer burden. Reference unit group is `93a60a57-a3c8-11da-a746-0800200c9a66`, actual reference unit MJ. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_laminate`
- Sources: `greenlight-guide`; `ilcd-allocation`

###### Tap water for actual wet work (`water_laminate`)

Only real tap-water supply used for wet sanding, cleaning or actual service/maintenance. Preserve liquid mass and water-state density evidence independently; no invented boiler, steam or reaction water. Any actual external thermal carrier/return requires separate atomic rows and one declared supply-energy owner before modelling. Native Product treated municipal/potable public tap-water supply, production mix at plant; treatment may include filtration/sedimentation/disinfection and is location dependent. Not raw river water, steam or wastewater. Reference Mass=1 and secondary Volume=0.001 are retained identities, not a measured density. Use kg from independent actual water-state measurement; no fixed supply geography or CAS. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_laminate`
- Sources: `greenlight-glass`; `greenlight-sand`; `ilcd-allocation`

##### Elementary flows

###### Atmospheric H2O uptake (`h2o_in_laminate`)

Record actual moisture ingress/egress from ordinary storage/handling and wet work as well as repairs; no extra work permission is invented for natural exchange. Keep new influx plus full wet closing article/material stocks. Correct only genuinely overlapping other same-side flow terms, never erase stock-retained influx. If taken as part of measured humid intake/exhaust, use a disjoint species bridge. Native Elementary resource Water in air, renewable material resource from air; Volume reference only. No official Chinese basename is provided; preserve the official English display and disclose that absence. Use actual H2O vapour volume at documented temperature/pressure/composition, independent of all dry-air species and supplied water. Not an emission, liquid water m3 by assumed density, or steam purchase. Reference unit group is `93a60a57-a3c8-12da-a746-0800200c9a66`, actual reference unit m3. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Water, in air `d73aff1b-0b31-434f-8e44-87a08c93e13f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_laminate`
- Sources: `gong-rigid`; `greenlight-vent`; `ilcd-allocation`

###### Atmospheric molecular oxygen intake (`o2_in`)

Conditional actual ventilation/pressure-equalisation species. Measure complete gross leg and retain source/receptor, temperature/pressure and species assay; integrate a real rate once, not an already integrated volume again. No fixed air composition, oxygen consumption, stoichiometric reaction or nitrogen emission from total-N/NOx is assumed. Air aggregate is a non-additive bridge, never another procurement/emission. Native Elementary oxygen resource from air, CAS7782-44-7; molecular O2 only, not oxygen atoms, ozone or purchased cryogenic oxygen. Native Mass; actual intake measured with state and species composition; no fixed air fraction. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_laminate`
- Sources: `greenlight-vent`; `ilcd-allocation`

###### Atmospheric argon intake (`ar_in`)

Conditional actual ventilation/pressure-equalisation species. Measure complete gross leg and retain source/receptor, temperature/pressure and species assay; integrate a real rate once, not an already integrated volume again. No fixed air composition, oxygen consumption, stoichiometric reaction or nitrogen emission from total-N/NOx is assumed. Air aggregate is a non-additive bridge, never another procurement/emission. Native Elementary argon resource from air, CAS7440-37-1; molecular/atomic argon identity, not a manufactured gas bottle or an isotope tracer. Native Mass; actual atmospheric intake and state only, no assumed fraction. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_laminate`
- Sources: `greenlight-vent`; `ilcd-allocation`

###### Atmospheric molecular dinitrogen intake (`n2_in`)

Actual atmospheric N2 gross intake, not purchased liquid or industrial nitrogen and not total nitrogen. A compatible resource-from-air identity must precede a UUID binding; do not borrow the air-emission UUID for an input. Preserve the disjoint dry-air/H2O bridge and native mass measurement. Native Elementary dinitrogen CAS7727-37-9, renewable element resource from air, Mass. Molecular N2 only; not an emission, total-N/NOx or industrial liquid gas. Synonym breadth does not override CAS, atmospheric origin or actual gaseous state. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_laminate`
- Sources: `greenlight-vent`; `ilcd-allocation`

#### Outputs

##### Waste flows

###### Dry woven-glass fabric offcut (`dry_glass_trim_w`)

Actual dry glass cloth cuttings before impregnation; keep sizing, dust collection and destination distinct from cured composite. This is the measured origin-W handoff paired with receive_dry_glass_trim_w; cancel at combined gate, keeping gross ledgers. Actual co-collection is evidenced by waste tickets; never mandate mixing incompatible/hazardous residues. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Dry woven-glass fabric offcut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_laminate`
- Sources: `greenlight-shape`; `greenlight-glass`; `greenlight-sand`; `ilcd-allocation`

###### Uncured mixed surfboard epoxy residue (`uncured_epoxy_w`)

Actual incompletely cured pot/spill/rejected mixture with independent chemical/cure state and supplier handling rules; do not assume it is inert cured composite or deduct its manufacturing/treatment burden when sold/sent away. This is the measured origin-W handoff paired with receive_uncured_epoxy_w; cancel at combined gate, keeping gross ledgers. Actual co-collection is evidenced by waste tickets; never mandate mixing incompatible/hazardous residues. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Uncured mixed surfboard epoxy residue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_laminate`
- Sources: `greenlight-shape`; `greenlight-glass`; `greenlight-sand`; `ilcd-allocation`

###### Spent epoxy mixing cup (`spent_cup_w`)

Actual whole cup at discard with attached residual by disjoint bridge; residual already in uncured_epoxy or cured_composite is not added a second time. This is the measured origin-W handoff paired with receive_spent_cup_w; cancel at combined gate, keeping gross ledgers. Actual co-collection is evidenced by waste tickets; never mandate mixing incompatible/hazardous residues. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Spent epoxy mixing cup
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_laminate`
- Sources: `greenlight-shape`; `greenlight-glass`; `greenlight-sand`; `ilcd-allocation`

###### Spent paper masking tape (`spent_mask_w`)

Actual removed paper tape plus attached resin in one whole wet article; no BOPP packaging-tape identity or duplicated resin residue. This is the measured origin-W handoff paired with receive_spent_mask_w; cancel at combined gate, keeping gross ledgers. Actual co-collection is evidenced by waste tickets; never mandate mixing incompatible/hazardous residues. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Spent paper masking tape
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_laminate`
- Sources: `greenlight-shape`; `greenlight-glass`; `greenlight-sand`; `ilcd-allocation`

###### Spent vinyl glove (`spent_glove_w`)

Actual discarded whole vinyl glove and attached residue; alternative glove chemistry requires its own identity, not a cloned incompatible description. This is the measured origin-W handoff paired with receive_spent_glove_w; cancel at combined gate, keeping gross ledgers. Actual co-collection is evidenced by waste tickets; never mandate mixing incompatible/hazardous residues. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Spent vinyl glove
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_laminate`
- Sources: `greenlight-shape`; `greenlight-glass`; `greenlight-sand`; `ilcd-allocation`

###### Epoxy-workshop cleaning wastewater (`out_washwater_laminate`)

Only actual collected liquid wastewater leaving this operation; complete supplied water and actual detergent/chemical contamination, free water and solids are measured independently. COD/VOC/pH are indicators, not a named chemical mass or a pure-water discharge. Trace treatment/provider once; do not duplicate moisture already in wet outgoing articles. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Epoxy-workshop cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_laminate`
- Sources: `greenlight-glass`; `greenlight-sand`; `ilcd-allocation`

##### Elementary flows

###### H2O vapour release (`h2o_out_laminate`)

Record actual moisture ingress/egress from ordinary storage/handling and wet work as well as repairs; no extra work permission is invented for natural exchange. Keep new influx plus full wet closing article/material stocks. Correct only genuinely overlapping other same-side flow terms, never erase stock-retained influx. If taken as part of measured humid intake/exhaust, use a disjoint species bridge. Native Elementary water vapour, CAS7732-18-5, emission to air unspecified; reference Mass only. Select actual gas-phase H2O leaving to the documented unspecified air compartment; liquid drainage/condensate has its own row. Not reaction-water inference from curing, COD, aerosol totals or an extra purchased heat carrier. A known urban/nonurban/long-term compartment requires the exact compatible identity instead. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_laminate`
- Sources: `gong-rigid`; `greenlight-vent`; `ilcd-allocation`

###### Unreacted molecular oxygen exhaust (`o2_out`)

Conditional actual ventilation/pressure-equalisation species. Measure complete gross leg and retain source/receptor, temperature/pressure and species assay; integrate a real rate once, not an already integrated volume again. No fixed air composition, oxygen consumption, stoichiometric reaction or nitrogen emission from total-N/NOx is assumed. Air aggregate is a non-additive bridge, never another procurement/emission. Native Elementary molecular oxygen CAS7782-44-7, Mass, emission to unspecified air; broad synonyms including liquid/ionic labels do not override CAS and actual gaseous O2. Only observed unreacted atmospheric O2 in this unspecified compartment; no combustion or chemical stoichiometry assumed. Known urban/nonurban/long-term release needs its correct identity. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_laminate`
- Sources: `greenlight-vent`; `ilcd-allocation`

###### Unreacted argon exhaust (`ar_out`)

Conditional actual ventilation/pressure-equalisation species. Measure complete gross leg and retain source/receptor, temperature/pressure and species assay; integrate a real rate once, not an already integrated volume again. No fixed air composition, oxygen consumption, stoichiometric reaction or nitrogen emission from total-N/NOx is assumed. Air aggregate is a non-additive bridge, never another procurement/emission. Native Elementary argon CAS7440-37-1, Mass, emission to unspecified air; broad isotope synonyms do not turn ordinary argon into a tracer. Actual unreacted air species only, with known compartment replaced by its precise native record. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_laminate`
- Sources: `greenlight-vent`; `ilcd-allocation`

###### Unreacted dinitrogen exhaust (`n2_out`)

Conditional actual ventilation/pressure-equalisation species. Measure complete gross leg and retain source/receptor, temperature/pressure and species assay; integrate a real rate once, not an already integrated volume again. No fixed air composition, oxygen consumption, stoichiometric reaction or nitrogen emission from total-N/NOx is assumed. Air aggregate is a non-additive bridge, never another procurement/emission. Native Elementary dinitrogen CAS7727-37-9, Mass, emission to unspecified air; molecular N2, not total nitrogen excluding N2, NOx or purchased liquid nitrogen. Observed unreacted ventilation species only; known urban/nonurban/long-term release requires its correct identity. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_laminate`
- Sources: `greenlight-vent`; `ilcd-allocation`

### Process: Epoxy sealcoat finishing and complete first release (`finish`)

#### Inputs

##### Product flows

###### Vented EPS surfboard leash-plug installation kit (`in_ventkit`)

This transparent technical route selects one supplied combined membrane vent/leash-plug kit. Current supplier kit includes plug, epoxy putty and tamping stick: one whole purchase with disjoint component/installed-residual/waste child ledger. Do not also purchase its included putty/stick. Actual extra separately acquired putty needs a separately named whole-formulation card before use; old generic liquid-epoxy installation and the current kit are not two purchases. No GONG sandwich vent screw is added. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Vented EPS surfboard leash-plug installation kit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_finish`
- Sources: `greenlight-glass`; `greenlight-vent`; `nsp-dealer`

###### Lint-free surface preparation cloth (`in_rag`)

Record actual supplied cleaning cloth and measured residues; no assumption of cotton if composition unknown. Cloth and separately supplied cleaning liquid are disjoint, while prewetted purchased wipe must be a whole preparation once. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Lint-free surface preparation cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_finish`
- Sources: `greenlight-glass`; `greenlight-sand`

###### Denatured alcohol surface-cleaning preparation (`in_alcohol`)

Whole purchased denatured alcohol formulation for actual surface preparation; specify all constituents and water by real supplier assay. Neither pure ethanol nor pure methanol is inferred. Retained liquid, evaporation and waste remain separately measured. Native manufactured Product family of ethyl alcohol and other spirits that are denatured, of any strength, production mix at plant; no fixed CAS, concentration, denaturant, feed route or supply geography. Select the actual whole denatured surface-cleaning formulation, not potable/undenatured spirit and not a pure-ethanol emission or separate carrier-water purchase. Sole Mass property; measure actual supplied mass and assay, no assumed density or strength. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Ethyl alcohol and other spirits, denatured, of any strength `0ca960f7-3506-4b71-8503-e6f37e03d77a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_finish`
- Sources: `greenlight-glass`; `greenlight-sand`

###### Epoxy seal-coat additive preparation (`in_sealadd`)

Only an actual separately supplied additive required by the selected qualified epoxy system; Greenlight marine epoxy sealcoat and generic Additive-F examples are not interchangeable recipes. If absent demonstrate absence; never fill unknown with zero. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Epoxy seal-coat additive preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_finish`
- Sources: `greenlight-glass`; `greenlight-sand`

###### Disposable chip brush (`in_brush`)

Actual complete brush for epoxy seal coating; used/new/reused quantities and residues measured. Supplied preparation kit ownership remains once. Native manufactured Product family at plant explicitly includes brushes and squeegees; this card is one actual chip brush, not the family total. Sole Mass property; no CAS, fixed bristle material, grade or geography. Whole handle/bristle/ferrule included once; collection of tools or a powered machine is excluded. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Brooms, brushes, hand-operated mechanical floor sweepers (not motorized), mops and feather dusters, prepared knots and tufts for broom or brush making, paint pads and rollers, squeegees (other than roller squeegees) `60b1af5b-b024-474d-af56-8d5c2edd0b76`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_finish`
- Sources: `greenlight-glass`

###### Paper-backed coated-abrasive sheet (`in_abrasive`)

Actual whole coated abrasive sheet/disc for shaping, lap/box trimming and matte finish. Specify backing, binder and abrasive grade from supplier; do not purchase Bayer alumina as if it were this finished abrasive. Worn grit, backing and collected dust have measured distinct fates. Native Product abrasive paper at plant, reference Mass, no fixed abrasive mineral/binder/backing grade, route, CAS or geography. Current active abrasive classification and separately preserved historical Other goods taxonomy are distinguished. Select one actual paper-backed coated abrasive sheet/disc; a cloth-backed article needs its compatible record and cannot borrow this paper identity. No generic alumina input or unverified grit count/mass factor. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Abrasive paper `ba6c99d4-60d9-46a5-9ef5-ca3d0b877d57`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_finish`
- Sources: `greenlight-shape`; `greenlight-sand`

###### Metered alternating current (`power_finish`)

Actual attributed electricity for this operation, including extraction, environmental conditioning and all start/stop/idle/failed/cleanup work. Select the bound CN medium-voltage supply only when physically true; otherwise a correct supply binding is required, without asserting a core-method hold. Electric heating is owned here and not purchased heat again. Native Product alternating current, CN supply geography, 1–35kV medium voltage, grid-average consumption mix to user including upstream generation/transmission. Native reference Net calorific value/MJ. This binding applies only to that actual supply interface; other voltages/geographies require compatible replacement before dataset use. Meter real kWh and convert once by 3.6 to MJ; no Mass/kg rule or duplicated generation/transformer burden. Reference unit group is `93a60a57-a3c8-11da-a746-0800200c9a66`, actual reference unit MJ. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_finish`
- Sources: `greenlight-guide`; `ilcd-allocation`

###### Tap water for actual wet work (`water_finish`)

Only real tap-water supply used for wet sanding, cleaning or actual service/maintenance. Preserve liquid mass and water-state density evidence independently; no invented boiler, steam or reaction water. Any actual external thermal carrier/return requires separate atomic rows and one declared supply-energy owner before modelling. Native Product treated municipal/potable public tap-water supply, production mix at plant; treatment may include filtration/sedimentation/disinfection and is location dependent. Not raw river water, steam or wastewater. Reference Mass=1 and secondary Volume=0.001 are retained identities, not a measured density. Use kg from independent actual water-state measurement; no fixed supply geography or CAS. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_finish`
- Sources: `greenlight-glass`; `greenlight-sand`; `ilcd-allocation`

##### Elementary flows

###### Atmospheric H2O uptake (`h2o_in_finish`)

Record actual moisture ingress/egress from ordinary storage/handling and wet work as well as repairs; no extra work permission is invented for natural exchange. Keep new influx plus full wet closing article/material stocks. Correct only genuinely overlapping other same-side flow terms, never erase stock-retained influx. If taken as part of measured humid intake/exhaust, use a disjoint species bridge. This is only the disjoint event in this process; match the particular material/packaging pool and do not repeat the same event in a neighbouring process. Native Elementary resource Water in air, renewable material resource from air; Volume reference only. No official Chinese basename is provided; preserve the official English display and disclose that absence. Use actual H2O vapour volume at documented temperature/pressure/composition, independent of all dry-air species and supplied water. Not an emission, liquid water m3 by assumed density, or steam purchase. Reference unit group is `93a60a57-a3c8-12da-a746-0800200c9a66`, actual reference unit m3. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Water, in air `d73aff1b-0b31-434f-8e44-87a08c93e13f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_finish`
- Sources: `gong-rigid`; `greenlight-vent`; `ilcd-allocation`

###### Atmospheric molecular oxygen intake (`o2_in_finish`)

Conditional actual ventilation/pressure-equalisation species. Measure complete gross leg and retain source/receptor, temperature/pressure and species assay; integrate a real rate once, not an already integrated volume again. No fixed air composition, oxygen consumption, stoichiometric reaction or nitrogen emission from total-N/NOx is assumed. Air aggregate is a non-additive bridge, never another procurement/emission. Only an actual controlled equipment/operation inlet or outlet crosses this gas boundary; ordinary surrounding atmosphere is not an invented extra ventilation operation. Keep event and metering ownership disjoint from every other process and the humid-air species bridge. Native Elementary oxygen resource from air, CAS7782-44-7; molecular O2 only, not oxygen atoms, ozone or purchased cryogenic oxygen. Native Mass; actual intake measured with state and species composition; no fixed air fraction. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_finish`
- Sources: `greenlight-vent`; `ilcd-allocation`

###### Atmospheric molecular dinitrogen intake (`n2_in_finish`)

Actual atmospheric N2 gross intake, not purchased liquid or industrial nitrogen and not total nitrogen. A compatible resource-from-air identity must precede a UUID binding; do not borrow the air-emission UUID for an input. Preserve the disjoint dry-air/H2O bridge and native mass measurement. Only an actual controlled equipment/operation inlet or outlet crosses this gas boundary; ordinary surrounding atmosphere is not an invented extra ventilation operation. Keep event and metering ownership disjoint from every other process and the humid-air species bridge. Native Elementary dinitrogen CAS7727-37-9, renewable element resource from air, Mass. Molecular N2 only; not an emission, total-N/NOx or industrial liquid gas. Synonym breadth does not override CAS, atmospheric origin or actual gaseous state. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_finish`
- Sources: `greenlight-vent`; `ilcd-allocation`

###### Atmospheric argon intake (`ar_in_finish`)

Conditional actual ventilation/pressure-equalisation species. Measure complete gross leg and retain source/receptor, temperature/pressure and species assay; integrate a real rate once, not an already integrated volume again. No fixed air composition, oxygen consumption, stoichiometric reaction or nitrogen emission from total-N/NOx is assumed. Air aggregate is a non-additive bridge, never another procurement/emission. Only an actual controlled equipment/operation inlet or outlet crosses this gas boundary; ordinary surrounding atmosphere is not an invented extra ventilation operation. Keep event and metering ownership disjoint from every other process and the humid-air species bridge. Native Elementary argon resource from air, CAS7440-37-1; molecular/atomic argon identity, not a manufactured gas bottle or an isotope tracer. Native Mass; actual atmospheric intake and state only, no assumed fraction. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_finish`
- Sources: `greenlight-vent`; `ilcd-allocation`

#### Outputs

##### Product flows

###### First-quality-released complete EPS glass-epoxy surfboard (`out_board`)

The one linked reference output is 1 kg net uniquely first-released whole-board mass. Count every accepted serial once, including released closing finished goods; its closing mass is not another product output or a manufacturing burden deduction. Board includes actual installed boxes and vent/leash component; the selected sales configuration excludes detachable fins and a separately sold leash. Functional fit can use a controlled test fixture without adding its fins to the sold BOM. Reinspection, dispatch, returns and postrelease repair never create a new Q. Native Product flow; finished product manufactured; production mix at plant. Its broad family positively includes surfboards; only this fully cured and finished rigid EPS/glass/epoxy whole board with installed boxes and declared supplied kit is selected. No CAS, fixed grade, specific manufacturing recipe or supply geography is asserted. Parts and laminated semi-finished bodies are not the reference. Mass is the sole native property and its reference value is one. The breadth does not admit sail rigs, skis or inflatable boards. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg.

- Selected flow: Water-skis, surf-boards, sailboards and other water-sport equipment `7fe05cda-645e-4ad2-ba01-cebd58bfe501`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`
- Sources: `greenlight-glass`; `greenlight-sand`; `nsp-dealer`; `nsp-volume`

##### Waste flows

###### Cured glass-epoxy trimming residue (`cured_composite_w`)

Actual cured laps, grinding chips and captured composite sanding dust; whole composite particle mass only, with glass/resin subledger non-additive. This is the measured origin-W handoff paired with receive_cured_composite_w; cancel at combined gate, keeping gross ledgers. Actual co-collection is evidenced by waste tickets; never mandate mixing incompatible/hazardous residues. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Cured glass-epoxy trimming residue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_finish`
- Sources: `greenlight-shape`; `greenlight-glass`; `greenlight-sand`; `ilcd-allocation`

###### Rejected EPS glass-epoxy board (`failed_board_w`)

Actual failed board/sample/damaged article not counted as Q; retain its complete wet component mass and all actual original-cohort burdens. Sale/collection is no automatic other-function transfer. Repairability is not assumed from broken appearance. This is the measured origin-W handoff paired with receive_failed_board_w; cancel at combined gate, keeping gross ledgers. Actual co-collection is evidenced by waste tickets; never mandate mixing incompatible/hazardous residues. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Rejected EPS glass-epoxy board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_finish`
- Sources: `greenlight-shape`; `greenlight-glass`; `greenlight-sand`; `ilcd-allocation`

###### Contaminated surface-cleaning cloth (`spent_cloth_w`)

One actual discarded cleaning cloth with retained liquid and cured/uncured contamination; no double total of carrier cloth plus whole wet wipe. This is the measured origin-W handoff paired with receive_spent_cloth_w; cancel at combined gate, keeping gross ledgers. Actual co-collection is evidenced by waste tickets; never mandate mixing incompatible/hazardous residues. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Contaminated surface-cleaning cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_finish`
- Sources: `greenlight-shape`; `greenlight-glass`; `greenlight-sand`; `ilcd-allocation`

###### Spent coated-abrasive sheet (`spent_abrasive_w`)

Actual spent whole sheet with disjoint abrasive wear/backing/attached composite bridge; loose collected sanding dust is not the whole sheet again. This is the measured origin-W handoff paired with receive_spent_abrasive_w; cancel at combined gate, keeping gross ledgers. Actual co-collection is evidenced by waste tickets; never mandate mixing incompatible/hazardous residues. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Spent coated-abrasive sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_finish`
- Sources: `greenlight-shape`; `greenlight-glass`; `greenlight-sand`; `ilcd-allocation`

###### Spent epoxy chip brush (`spent_brush_w`)

Actual discarded brush including retained resin by whole-article or disjoint-component bridge, not a family tool collection. This is the measured origin-W handoff paired with receive_spent_brush_w; cancel at combined gate, keeping gross ledgers. Actual co-collection is evidenced by waste tickets; never mandate mixing incompatible/hazardous residues. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Spent epoxy chip brush
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_finish`
- Sources: `greenlight-shape`; `greenlight-glass`; `greenlight-sand`; `ilcd-allocation`

###### Epoxy-workshop cleaning wastewater (`out_washwater_finish`)

Only actual collected liquid wastewater leaving this operation; complete supplied water and actual detergent/chemical contamination, free water and solids are measured independently. COD/VOC/pH are indicators, not a named chemical mass or a pure-water discharge. Trace treatment/provider once; do not duplicate moisture already in wet outgoing articles. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Epoxy-workshop cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_finish`
- Sources: `greenlight-glass`; `greenlight-sand`; `ilcd-allocation`

##### Elementary flows

###### Ethanol to air (`ethanol_air`)

Only where real chemical-specific analysis and supplier composition establish ethanol evaporation from the actual cleaning preparation. Total VOC is not ethanol; denaturants and each other actual species need their own named cards and receptors. Keep failures, capture and liquid waste separate, no default emission fraction. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Ethanol to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_finish`
- Sources: `greenlight-glass`; `greenlight-sand`

###### Expanded polystyrene particulate to air (`eps_dust_air`)

Actual chemically/physically identified uncaptured EPS particles only; particle-size totals are not a molecular species or an inferred blowing-agent release. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Expanded polystyrene particulate to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_finish`
- Sources: `greenlight-shape`; `greenlight-sand`

###### Stringer wood particulate to air (`wood_dust_air`)

Actual uncaptured wood dust from the supplied stringer, with species/size and receiving medium evidence; not all measured workshop dust. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Stringer wood particulate to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_finish`
- Sources: `greenlight-shape`; `greenlight-sand`

###### Cured glass-epoxy composite particulate to air (`composite_dust_air`)

Actual uncaptured cured composite particles only with measured composition/size; do not also emit separate full glass and resin masses for that same particle. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Cured glass-epoxy composite particulate to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_finish`
- Sources: `greenlight-shape`; `greenlight-sand`

###### H2O vapour release (`h2o_out_finish`)

Record actual moisture ingress/egress from ordinary storage/handling and wet work as well as repairs; no extra work permission is invented for natural exchange. Keep new influx plus full wet closing article/material stocks. Correct only genuinely overlapping other same-side flow terms, never erase stock-retained influx. If taken as part of measured humid intake/exhaust, use a disjoint species bridge. This is only the disjoint event in this process; match the particular material/packaging pool and do not repeat the same event in a neighbouring process. Native Elementary water vapour, CAS7732-18-5, emission to air unspecified; reference Mass only. Select actual gas-phase H2O leaving to the documented unspecified air compartment; liquid drainage/condensate has its own row. Not reaction-water inference from curing, COD, aerosol totals or an extra purchased heat carrier. A known urban/nonurban/long-term compartment requires the exact compatible identity instead. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_finish`
- Sources: `gong-rigid`; `greenlight-vent`; `ilcd-allocation`

###### Unreacted molecular oxygen exhaust (`o2_out_finish`)

Conditional actual ventilation/pressure-equalisation species. Measure complete gross leg and retain source/receptor, temperature/pressure and species assay; integrate a real rate once, not an already integrated volume again. No fixed air composition, oxygen consumption, stoichiometric reaction or nitrogen emission from total-N/NOx is assumed. Air aggregate is a non-additive bridge, never another procurement/emission. Only an actual controlled equipment/operation inlet or outlet crosses this gas boundary; ordinary surrounding atmosphere is not an invented extra ventilation operation. Keep event and metering ownership disjoint from every other process and the humid-air species bridge. Native Elementary molecular oxygen CAS7782-44-7, Mass, emission to unspecified air; broad synonyms including liquid/ionic labels do not override CAS and actual gaseous O2. Only observed unreacted atmospheric O2 in this unspecified compartment; no combustion or chemical stoichiometry assumed. Known urban/nonurban/long-term release needs its correct identity. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_finish`
- Sources: `greenlight-vent`; `ilcd-allocation`

###### Unreacted dinitrogen exhaust (`n2_out_finish`)

Conditional actual ventilation/pressure-equalisation species. Measure complete gross leg and retain source/receptor, temperature/pressure and species assay; integrate a real rate once, not an already integrated volume again. No fixed air composition, oxygen consumption, stoichiometric reaction or nitrogen emission from total-N/NOx is assumed. Air aggregate is a non-additive bridge, never another procurement/emission. Only an actual controlled equipment/operation inlet or outlet crosses this gas boundary; ordinary surrounding atmosphere is not an invented extra ventilation operation. Keep event and metering ownership disjoint from every other process and the humid-air species bridge. Native Elementary dinitrogen CAS7727-37-9, Mass, emission to unspecified air; molecular N2, not total nitrogen excluding N2, NOx or purchased liquid nitrogen. Observed unreacted ventilation species only; known urban/nonurban/long-term release requires its correct identity. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_finish`
- Sources: `greenlight-vent`; `ilcd-allocation`

###### Unreacted argon exhaust (`ar_out_finish`)

Conditional actual ventilation/pressure-equalisation species. Measure complete gross leg and retain source/receptor, temperature/pressure and species assay; integrate a real rate once, not an already integrated volume again. No fixed air composition, oxygen consumption, stoichiometric reaction or nitrogen emission from total-N/NOx is assumed. Air aggregate is a non-additive bridge, never another procurement/emission. Only an actual controlled equipment/operation inlet or outlet crosses this gas boundary; ordinary surrounding atmosphere is not an invented extra ventilation operation. Keep event and metering ownership disjoint from every other process and the humid-air species bridge. Native Elementary argon CAS7440-37-1, Mass, emission to unspecified air; broad isotope synonyms do not turn ordinary argon into a tracer. Actual unreacted air species only, with known compartment replaced by its precise native record. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_finish`
- Sources: `greenlight-vent`; `ilcd-allocation`

### Process: Actual material-specific packing pools (`pack`)

#### Inputs

##### Product flows

###### Corrugated shipping carton (`carton_p`)

One actual complete corrugated-paperboard transport carton of the declared construction and configuration, not a collection of cartons, plastic bags, film, liners or other packaging. The compatible atomic Product-flow UUID remains unresolved. Record the actual board/flute/ply configuration, fibre composition, coatings/lamination, wet condition, integral adhesives/fasteners and supplier scope; no generic fibre fraction, treatment, size, weight or lifetime is assumed. Include integral supplied constituents once within the whole carton, while actually separate inserts, tape or other materials retain their own disjoint rows and one upstream owner. Keep this card's existing P/I/ER/S/EO role as defined by the packaging boundary and raw protocol, including packaging_receipt_basis where present; a new provider identity must not change that event definition. Retain the complete measured wet gross quantity and the original event/gate/custody/cohort in the card's stated Mass/kg unit, whether immediately used or retained at closing. Keep opening/closing empty, attached and reusable stock, internal reuse and independently measured material/water-change legs; no stock, burden or economic-share correction shrinks the gross leg. Actual manufacture/service burdens are attributed once separately using the existing original-cohort rule and sole normalization; a gross receipt or outflow alone creates no new manufacture, procurement burden, provider link or credit. Resolve a physically compatible carton identity/provider before binding it; missing identity is disclosed and never replaced with a mixed packaging category or an invented UUID.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_carton`
- Sources: `ilcd-allocation`

###### Corrugated shipping carton (`carton_i`)

One actual complete corrugated-paperboard transport carton of the declared construction and configuration, not a collection of cartons, plastic bags, film, liners or other packaging. The compatible atomic Product-flow UUID remains unresolved. Record the actual board/flute/ply configuration, fibre composition, coatings/lamination, wet condition, integral adhesives/fasteners and supplier scope; no generic fibre fraction, treatment, size, weight or lifetime is assumed. Include integral supplied constituents once within the whole carton, while actually separate inserts, tape or other materials retain their own disjoint rows and one upstream owner. Keep this card's existing P/I/ER/S/EO role as defined by the packaging boundary and raw protocol, including packaging_receipt_basis where present; a new provider identity must not change that event definition. Retain the complete measured wet gross quantity and the original event/gate/custody/cohort in the card's stated Mass/kg unit, whether immediately used or retained at closing. Keep opening/closing empty, attached and reusable stock, internal reuse and independently measured material/water-change legs; no stock, burden or economic-share correction shrinks the gross leg. Actual manufacture/service burdens are attributed once separately using the existing original-cohort rule and sole normalization; a gross receipt or outflow alone creates no new manufacture, procurement burden, provider link or credit. Resolve a physically compatible carton identity/provider before binding it; missing identity is disclosed and never replaced with a mixed packaging category or an invented UUID.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_carton`
- Sources: `ilcd-allocation`

###### Corrugated shipping carton (`carton_er`)

One actual complete corrugated-paperboard transport carton of the declared construction and configuration, not a collection of cartons, plastic bags, film, liners or other packaging. The compatible atomic Product-flow UUID remains unresolved. Record the actual board/flute/ply configuration, fibre composition, coatings/lamination, wet condition, integral adhesives/fasteners and supplier scope; no generic fibre fraction, treatment, size, weight or lifetime is assumed. Include integral supplied constituents once within the whole carton, while actually separate inserts, tape or other materials retain their own disjoint rows and one upstream owner. Keep this card's existing P/I/ER/S/EO role as defined by the packaging boundary and raw protocol, including packaging_receipt_basis where present; a new provider identity must not change that event definition. Retain the complete measured wet gross quantity and the original event/gate/custody/cohort in the card's stated Mass/kg unit, whether immediately used or retained at closing. Keep opening/closing empty, attached and reusable stock, internal reuse and independently measured material/water-change legs; no stock, burden or economic-share correction shrinks the gross leg. Actual manufacture/service burdens are attributed once separately using the existing original-cohort rule and sole normalization; a gross receipt or outflow alone creates no new manufacture, procurement burden, provider link or credit. Resolve a physically compatible carton identity/provider before binding it; missing identity is disclosed and never replaced with a mixed packaging category or an invented UUID.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_carton`
- Sources: `ilcd-allocation`

###### Polyethylene protective wrapping film (`pe_p`)

Conditional actual separate external procurement of this one polyethylene protective wrapping film pool; record the complete physical gross leg V_pe_P including its actual water and attached components. P/I are disjoint upstream-ownership paths: supplier-included packaging is physically retained even if its upstream burden is in a material provider. ER is a real return, not new procurement. S follows gross physical dispatch, never net Q. EO is a real outward return. W is the one actual pool-to-waste-handling event paired with receive_pe_w; cancel the internal transfer at consolidation. Only actual independent external exits can replace that pair. Complete wet closing stock and any new repair material or moisture ingress both remain; X removes only overlap with OTHER same-side flows. No economic scaling, stock-corrected burden numerator, second procurement/provider or automatic credit is allowed for this gross card. Native Product polyethylene film, CAS9002-88-4, production mix at plant; no fixed grade, thickness or geography. Synonyms are plastic sheet/polyethylene sheet/poly-film. General comment describes ethylene-derived PE and distinguishes competing PET; select PE film, never PET strap. The unrelated luggage classification is an isolated taxonomy defect disclosed here, not a physical identity override. Sole Mass property. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pe`
- Sources: `ilcd-allocation`

###### Polyethylene protective wrapping film (`pe_i`)

Conditional actual supplier-included ingress of this one polyethylene protective wrapping film pool; record the complete physical gross leg V_pe_I including its actual water and attached components. P/I are disjoint upstream-ownership paths: supplier-included packaging is physically retained even if its upstream burden is in a material provider. ER is a real return, not new procurement. S follows gross physical dispatch, never net Q. EO is a real outward return. W is the one actual pool-to-waste-handling event paired with receive_pe_w; cancel the internal transfer at consolidation. Only actual independent external exits can replace that pair. Complete wet closing stock and any new repair material or moisture ingress both remain; X removes only overlap with OTHER same-side flows. No economic scaling, stock-corrected burden numerator, second procurement/provider or automatic credit is allowed for this gross card. Native Product polyethylene film, CAS9002-88-4, production mix at plant; no fixed grade, thickness or geography. Synonyms are plastic sheet/polyethylene sheet/poly-film. General comment describes ethylene-derived PE and distinguishes competing PET; select PE film, never PET strap. The unrelated luggage classification is an isolated taxonomy defect disclosed here, not a physical identity override. Sole Mass property. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pe`
- Sources: `ilcd-allocation`

###### Polyethylene protective wrapping film (`pe_er`)

Conditional actual external returned packaging received of this one polyethylene protective wrapping film pool; record the complete physical gross leg V_pe_ER including its actual water and attached components. P/I are disjoint upstream-ownership paths: supplier-included packaging is physically retained even if its upstream burden is in a material provider. ER is a real return, not new procurement. S follows gross physical dispatch, never net Q. EO is a real outward return. W is the one actual pool-to-waste-handling event paired with receive_pe_w; cancel the internal transfer at consolidation. Only actual independent external exits can replace that pair. Complete wet closing stock and any new repair material or moisture ingress both remain; X removes only overlap with OTHER same-side flows. No economic scaling, stock-corrected burden numerator, second procurement/provider or automatic credit is allowed for this gross card. Native Product polyethylene film, CAS9002-88-4, production mix at plant; no fixed grade, thickness or geography. Synonyms are plastic sheet/polyethylene sheet/poly-film. General comment describes ethylene-derived PE and distinguishes competing PET; select PE film, never PET strap. The unrelated luggage classification is an isolated taxonomy defect disclosed here, not a physical identity override. Sole Mass property. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pe`
- Sources: `ilcd-allocation`

###### Honeycomb paper protective wrap (`paper_p`)

Conditional actual separate external procurement of this one honeycomb paper protective wrap pool; record the complete physical gross leg V_paper_P including its actual water and attached components. P/I are disjoint upstream-ownership paths: supplier-included packaging is physically retained even if its upstream burden is in a material provider. ER is a real return, not new procurement. S follows gross physical dispatch, never net Q. EO is a real outward return. W is the one actual pool-to-waste-handling event paired with receive_paper_w; cancel the internal transfer at consolidation. Only actual independent external exits can replace that pair. Complete wet closing stock and any new repair material or moisture ingress both remain; X removes only overlap with OTHER same-side flows. No economic scaling, stock-corrected burden numerator, second procurement/provider or automatic credit is allowed for this gross card. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Honeycomb paper protective wrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_paper`
- Sources: `ilcd-allocation`

###### Honeycomb paper protective wrap (`paper_i`)

Conditional actual supplier-included ingress of this one honeycomb paper protective wrap pool; record the complete physical gross leg V_paper_I including its actual water and attached components. P/I are disjoint upstream-ownership paths: supplier-included packaging is physically retained even if its upstream burden is in a material provider. ER is a real return, not new procurement. S follows gross physical dispatch, never net Q. EO is a real outward return. W is the one actual pool-to-waste-handling event paired with receive_paper_w; cancel the internal transfer at consolidation. Only actual independent external exits can replace that pair. Complete wet closing stock and any new repair material or moisture ingress both remain; X removes only overlap with OTHER same-side flows. No economic scaling, stock-corrected burden numerator, second procurement/provider or automatic credit is allowed for this gross card. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Honeycomb paper protective wrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_paper`
- Sources: `ilcd-allocation`

###### Honeycomb paper protective wrap (`paper_er`)

Conditional actual external returned packaging received of this one honeycomb paper protective wrap pool; record the complete physical gross leg V_paper_ER including its actual water and attached components. P/I are disjoint upstream-ownership paths: supplier-included packaging is physically retained even if its upstream burden is in a material provider. ER is a real return, not new procurement. S follows gross physical dispatch, never net Q. EO is a real outward return. W is the one actual pool-to-waste-handling event paired with receive_paper_w; cancel the internal transfer at consolidation. Only actual independent external exits can replace that pair. Complete wet closing stock and any new repair material or moisture ingress both remain; X removes only overlap with OTHER same-side flows. No economic scaling, stock-corrected burden numerator, second procurement/provider or automatic credit is allowed for this gross card. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Honeycomb paper protective wrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_paper`
- Sources: `ilcd-allocation`

###### Wooden shipping pallet (`pallet_p`)

Conditional actual separate external procurement of this one wooden shipping pallet pool; record the complete physical gross leg V_pallet_P including its actual water and attached components. P/I are disjoint upstream-ownership paths: supplier-included packaging is physically retained even if its upstream burden is in a material provider. ER is a real return, not new procurement. S follows gross physical dispatch, never net Q. EO is a real outward return. W is the one actual pool-to-waste-handling event paired with receive_pallet_w; cancel the internal transfer at consolidation. Only actual independent external exits can replace that pair. Complete wet closing stock and any new repair material or moisture ingress both remain; X removes only overlap with OTHER same-side flows. No economic scaling, stock-corrected burden numerator, second procurement/provider or automatic credit is allowed for this gross card. Native manufactured Product family of portable wooden load platforms and wooden collars at plant; general comment includes platform variants and hinged four-wood collars. Select one complete actual wooden pallet only, with attached fasteners and whole wet mass once. Sole Mass property; no fixed timber species, EURO size, CAS or geography. Repair wood/water are separate materials and never this whole-pallet UUID. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pallet`
- Sources: `ilcd-allocation`

###### Wooden shipping pallet (`pallet_i`)

Conditional actual supplier-included ingress of this one wooden shipping pallet pool; record the complete physical gross leg V_pallet_I including its actual water and attached components. P/I are disjoint upstream-ownership paths: supplier-included packaging is physically retained even if its upstream burden is in a material provider. ER is a real return, not new procurement. S follows gross physical dispatch, never net Q. EO is a real outward return. W is the one actual pool-to-waste-handling event paired with receive_pallet_w; cancel the internal transfer at consolidation. Only actual independent external exits can replace that pair. Complete wet closing stock and any new repair material or moisture ingress both remain; X removes only overlap with OTHER same-side flows. No economic scaling, stock-corrected burden numerator, second procurement/provider or automatic credit is allowed for this gross card. Native manufactured Product family of portable wooden load platforms and wooden collars at plant; general comment includes platform variants and hinged four-wood collars. Select one complete actual wooden pallet only, with attached fasteners and whole wet mass once. Sole Mass property; no fixed timber species, EURO size, CAS or geography. Repair wood/water are separate materials and never this whole-pallet UUID. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pallet`
- Sources: `ilcd-allocation`

###### Wooden shipping pallet (`pallet_er`)

Conditional actual external returned packaging received of this one wooden shipping pallet pool; record the complete physical gross leg V_pallet_ER including its actual water and attached components. P/I are disjoint upstream-ownership paths: supplier-included packaging is physically retained even if its upstream burden is in a material provider. ER is a real return, not new procurement. S follows gross physical dispatch, never net Q. EO is a real outward return. W is the one actual pool-to-waste-handling event paired with receive_pallet_w; cancel the internal transfer at consolidation. Only actual independent external exits can replace that pair. Complete wet closing stock and any new repair material or moisture ingress both remain; X removes only overlap with OTHER same-side flows. No economic scaling, stock-corrected burden numerator, second procurement/provider or automatic credit is allowed for this gross card. Native manufactured Product family of portable wooden load platforms and wooden collars at plant; general comment includes platform variants and hinged four-wood collars. Select one complete actual wooden pallet only, with attached fasteners and whole wet mass once. Sole Mass property; no fixed timber species, EURO size, CAS or geography. Repair wood/water are separate materials and never this whole-pallet UUID. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pallet`
- Sources: `ilcd-allocation`

###### BOPP adhesive packing tape (`tape_p`)

Conditional actual separate external procurement of this one bopp adhesive packing tape pool; record the complete physical gross leg V_tape_P including its actual water and attached components. P/I are disjoint upstream-ownership paths: supplier-included packaging is physically retained even if its upstream burden is in a material provider. ER is a real return, not new procurement. S follows gross physical dispatch, never net Q. EO is a real outward return. W is the one actual pool-to-waste-handling event paired with receive_tape_w; cancel the internal transfer at consolidation. Only actual independent external exits can replace that pair. Complete wet closing stock and any new repair material or moisture ingress both remain; X removes only overlap with OTHER same-side flows. No economic scaling, stock-corrected burden numerator, second procurement/provider or automatic credit is allowed for this gross card. Native Product packing tape, BOPP film route, at plant; whole supplied adhesive tape only after backing and coating compatibility. Not masking paper tape, PET strap or raw polypropylene; no fixed geography, coat weight or CAS. Native reference Mass. The electrical-energy classification is an isolated incompatible taxonomy label; physical Product identity is BOPP packing tape and Mass, not electrical energy. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Packing tape `e79513bf-1a03-4444-b0f5-9d545f0f43f6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_tape`
- Sources: `ilcd-allocation`

###### BOPP adhesive packing tape (`tape_i`)

Conditional actual supplier-included ingress of this one bopp adhesive packing tape pool; record the complete physical gross leg V_tape_I including its actual water and attached components. P/I are disjoint upstream-ownership paths: supplier-included packaging is physically retained even if its upstream burden is in a material provider. ER is a real return, not new procurement. S follows gross physical dispatch, never net Q. EO is a real outward return. W is the one actual pool-to-waste-handling event paired with receive_tape_w; cancel the internal transfer at consolidation. Only actual independent external exits can replace that pair. Complete wet closing stock and any new repair material or moisture ingress both remain; X removes only overlap with OTHER same-side flows. No economic scaling, stock-corrected burden numerator, second procurement/provider or automatic credit is allowed for this gross card. Native Product packing tape, BOPP film route, at plant; whole supplied adhesive tape only after backing and coating compatibility. Not masking paper tape, PET strap or raw polypropylene; no fixed geography, coat weight or CAS. Native reference Mass. The electrical-energy classification is an isolated incompatible taxonomy label; physical Product identity is BOPP packing tape and Mass, not electrical energy. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Packing tape `e79513bf-1a03-4444-b0f5-9d545f0f43f6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_tape`
- Sources: `ilcd-allocation`

###### BOPP adhesive packing tape (`tape_er`)

Conditional actual external returned packaging received of this one bopp adhesive packing tape pool; record the complete physical gross leg V_tape_ER including its actual water and attached components. P/I are disjoint upstream-ownership paths: supplier-included packaging is physically retained even if its upstream burden is in a material provider. ER is a real return, not new procurement. S follows gross physical dispatch, never net Q. EO is a real outward return. W is the one actual pool-to-waste-handling event paired with receive_tape_w; cancel the internal transfer at consolidation. Only actual independent external exits can replace that pair. Complete wet closing stock and any new repair material or moisture ingress both remain; X removes only overlap with OTHER same-side flows. No economic scaling, stock-corrected burden numerator, second procurement/provider or automatic credit is allowed for this gross card. Native Product packing tape, BOPP film route, at plant; whole supplied adhesive tape only after backing and coating compatibility. Not masking paper tape, PET strap or raw polypropylene; no fixed geography, coat weight or CAS. Native reference Mass. The electrical-energy classification is an isolated incompatible taxonomy label; physical Product identity is BOPP packing tape and Mass, not electrical energy. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Packing tape `e79513bf-1a03-4444-b0f5-9d545f0f43f6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_tape`
- Sources: `ilcd-allocation`

###### PET shipping strap (`petstrap_p`)

Conditional actual separate external procurement of this one pet shipping strap pool; record the complete physical gross leg V_petstrap_P including its actual water and attached components. P/I are disjoint upstream-ownership paths: supplier-included packaging is physically retained even if its upstream burden is in a material provider. ER is a real return, not new procurement. S follows gross physical dispatch, never net Q. EO is a real outward return. W is the one actual pool-to-waste-handling event paired with receive_petstrap_w; cancel the internal transfer at consolidation. Only actual independent external exits can replace that pair. Complete wet closing stock and any new repair material or moisture ingress both remain; X removes only overlap with OTHER same-side flows. No economic scaling, stock-corrected burden numerator, second procurement/provider or automatic credit is allowed for this gross card. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: PET shipping strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_petstrap`
- Sources: `ilcd-allocation`

###### PET shipping strap (`petstrap_i`)

Conditional actual supplier-included ingress of this one pet shipping strap pool; record the complete physical gross leg V_petstrap_I including its actual water and attached components. P/I are disjoint upstream-ownership paths: supplier-included packaging is physically retained even if its upstream burden is in a material provider. ER is a real return, not new procurement. S follows gross physical dispatch, never net Q. EO is a real outward return. W is the one actual pool-to-waste-handling event paired with receive_petstrap_w; cancel the internal transfer at consolidation. Only actual independent external exits can replace that pair. Complete wet closing stock and any new repair material or moisture ingress both remain; X removes only overlap with OTHER same-side flows. No economic scaling, stock-corrected burden numerator, second procurement/provider or automatic credit is allowed for this gross card. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: PET shipping strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_petstrap`
- Sources: `ilcd-allocation`

###### PET shipping strap (`petstrap_er`)

Conditional actual external returned packaging received of this one pet shipping strap pool; record the complete physical gross leg V_petstrap_ER including its actual water and attached components. P/I are disjoint upstream-ownership paths: supplier-included packaging is physically retained even if its upstream burden is in a material provider. ER is a real return, not new procurement. S follows gross physical dispatch, never net Q. EO is a real outward return. W is the one actual pool-to-waste-handling event paired with receive_petstrap_w; cancel the internal transfer at consolidation. Only actual independent external exits can replace that pair. Complete wet closing stock and any new repair material or moisture ingress both remain; X removes only overlap with OTHER same-side flows. No economic scaling, stock-corrected burden numerator, second procurement/provider or automatic credit is allowed for this gross card. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: PET shipping strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_petstrap`
- Sources: `ilcd-allocation`

##### Elementary flows

###### Atmospheric H2O uptake (`h2o_in_pack`)

Record actual moisture ingress/egress from ordinary storage/handling and wet work as well as repairs; no extra work permission is invented for natural exchange. Keep new influx plus full wet closing article/material stocks. Correct only genuinely overlapping other same-side flow terms, never erase stock-retained influx. If taken as part of measured humid intake/exhaust, use a disjoint species bridge. This is only the disjoint event in this process; match the particular material/packaging pool and do not repeat the same event in a neighbouring process. Native Elementary resource Water in air, renewable material resource from air; Volume reference only. No official Chinese basename is provided; preserve the official English display and disclose that absence. Use actual H2O vapour volume at documented temperature/pressure/composition, independent of all dry-air species and supplied water. Not an emission, liquid water m3 by assumed density, or steam purchase. Reference unit group is `93a60a57-a3c8-12da-a746-0800200c9a66`, actual reference unit m3. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Water, in air `d73aff1b-0b31-434f-8e44-87a08c93e13f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_pack`
- Sources: `gong-rigid`; `greenlight-vent`; `ilcd-allocation`

#### Outputs

##### Product flows

###### Corrugated shipping carton (`carton_s`)

One actual complete corrugated-paperboard transport carton of the declared construction and configuration, not a collection of cartons, plastic bags, film, liners or other packaging. The compatible atomic Product-flow UUID remains unresolved. Record the actual board/flute/ply configuration, fibre composition, coatings/lamination, wet condition, integral adhesives/fasteners and supplier scope; no generic fibre fraction, treatment, size, weight or lifetime is assumed. Include integral supplied constituents once within the whole carton, while actually separate inserts, tape or other materials retain their own disjoint rows and one upstream owner. Keep this card's existing P/I/ER/S/EO role as defined by the packaging boundary and raw protocol, including packaging_receipt_basis where present; a new provider identity must not change that event definition. Retain the complete measured wet gross quantity and the original event/gate/custody/cohort in the card's stated Mass/kg unit, whether immediately used or retained at closing. Keep opening/closing empty, attached and reusable stock, internal reuse and independently measured material/water-change legs; no stock, burden or economic-share correction shrinks the gross leg. Actual manufacture/service burdens are attributed once separately using the existing original-cohort rule and sole normalization; a gross receipt or outflow alone creates no new manufacture, procurement burden, provider link or credit. Resolve a physically compatible carton identity/provider before binding it; missing identity is disclosed and never replaced with a mixed packaging category or an invented UUID.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_carton`
- Sources: `ilcd-allocation`

###### Corrugated shipping carton (`carton_eo`)

One actual complete corrugated-paperboard transport carton of the declared construction and configuration, not a collection of cartons, plastic bags, film, liners or other packaging. The compatible atomic Product-flow UUID remains unresolved. Record the actual board/flute/ply configuration, fibre composition, coatings/lamination, wet condition, integral adhesives/fasteners and supplier scope; no generic fibre fraction, treatment, size, weight or lifetime is assumed. Include integral supplied constituents once within the whole carton, while actually separate inserts, tape or other materials retain their own disjoint rows and one upstream owner. Keep this card's existing P/I/ER/S/EO role as defined by the packaging boundary and raw protocol, including packaging_receipt_basis where present; a new provider identity must not change that event definition. Retain the complete measured wet gross quantity and the original event/gate/custody/cohort in the card's stated Mass/kg unit, whether immediately used or retained at closing. Keep opening/closing empty, attached and reusable stock, internal reuse and independently measured material/water-change legs; no stock, burden or economic-share correction shrinks the gross leg. Actual manufacture/service burdens are attributed once separately using the existing original-cohort rule and sole normalization; a gross receipt or outflow alone creates no new manufacture, procurement burden, provider link or credit. Resolve a physically compatible carton identity/provider before binding it; missing identity is disclosed and never replaced with a mixed packaging category or an invented UUID.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_carton`
- Sources: `ilcd-allocation`

###### Polyethylene protective wrapping film (`pe_s`)

Conditional actual packaging on gross physical dispatch of this one polyethylene protective wrapping film pool; record the complete physical gross leg V_pe_S including its actual water and attached components. P/I are disjoint upstream-ownership paths: supplier-included packaging is physically retained even if its upstream burden is in a material provider. ER is a real return, not new procurement. S follows gross physical dispatch, never net Q. EO is a real outward return. W is the one actual pool-to-waste-handling event paired with receive_pe_w; cancel the internal transfer at consolidation. Only actual independent external exits can replace that pair. Complete wet closing stock and any new repair material or moisture ingress both remain; X removes only overlap with OTHER same-side flows. No economic scaling, stock-corrected burden numerator, second procurement/provider or automatic credit is allowed for this gross card. Native Product polyethylene film, CAS9002-88-4, production mix at plant; no fixed grade, thickness or geography. Synonyms are plastic sheet/polyethylene sheet/poly-film. General comment describes ethylene-derived PE and distinguishes competing PET; select PE film, never PET strap. The unrelated luggage classification is an isolated taxonomy defect disclosed here, not a physical identity override. Sole Mass property. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pe`
- Sources: `ilcd-allocation`

###### Polyethylene protective wrapping film (`pe_eo`)

Conditional actual packaging returned externally of this one polyethylene protective wrapping film pool; record the complete physical gross leg V_pe_EO including its actual water and attached components. P/I are disjoint upstream-ownership paths: supplier-included packaging is physically retained even if its upstream burden is in a material provider. ER is a real return, not new procurement. S follows gross physical dispatch, never net Q. EO is a real outward return. W is the one actual pool-to-waste-handling event paired with receive_pe_w; cancel the internal transfer at consolidation. Only actual independent external exits can replace that pair. Complete wet closing stock and any new repair material or moisture ingress both remain; X removes only overlap with OTHER same-side flows. No economic scaling, stock-corrected burden numerator, second procurement/provider or automatic credit is allowed for this gross card. Native Product polyethylene film, CAS9002-88-4, production mix at plant; no fixed grade, thickness or geography. Synonyms are plastic sheet/polyethylene sheet/poly-film. General comment describes ethylene-derived PE and distinguishes competing PET; select PE film, never PET strap. The unrelated luggage classification is an isolated taxonomy defect disclosed here, not a physical identity override. Sole Mass property. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pe`
- Sources: `ilcd-allocation`

###### Honeycomb paper protective wrap (`paper_s`)

Conditional actual packaging on gross physical dispatch of this one honeycomb paper protective wrap pool; record the complete physical gross leg V_paper_S including its actual water and attached components. P/I are disjoint upstream-ownership paths: supplier-included packaging is physically retained even if its upstream burden is in a material provider. ER is a real return, not new procurement. S follows gross physical dispatch, never net Q. EO is a real outward return. W is the one actual pool-to-waste-handling event paired with receive_paper_w; cancel the internal transfer at consolidation. Only actual independent external exits can replace that pair. Complete wet closing stock and any new repair material or moisture ingress both remain; X removes only overlap with OTHER same-side flows. No economic scaling, stock-corrected burden numerator, second procurement/provider or automatic credit is allowed for this gross card. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Honeycomb paper protective wrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_paper`
- Sources: `ilcd-allocation`

###### Honeycomb paper protective wrap (`paper_eo`)

Conditional actual packaging returned externally of this one honeycomb paper protective wrap pool; record the complete physical gross leg V_paper_EO including its actual water and attached components. P/I are disjoint upstream-ownership paths: supplier-included packaging is physically retained even if its upstream burden is in a material provider. ER is a real return, not new procurement. S follows gross physical dispatch, never net Q. EO is a real outward return. W is the one actual pool-to-waste-handling event paired with receive_paper_w; cancel the internal transfer at consolidation. Only actual independent external exits can replace that pair. Complete wet closing stock and any new repair material or moisture ingress both remain; X removes only overlap with OTHER same-side flows. No economic scaling, stock-corrected burden numerator, second procurement/provider or automatic credit is allowed for this gross card. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Honeycomb paper protective wrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_paper`
- Sources: `ilcd-allocation`

###### Wooden shipping pallet (`pallet_s`)

Conditional actual packaging on gross physical dispatch of this one wooden shipping pallet pool; record the complete physical gross leg V_pallet_S including its actual water and attached components. P/I are disjoint upstream-ownership paths: supplier-included packaging is physically retained even if its upstream burden is in a material provider. ER is a real return, not new procurement. S follows gross physical dispatch, never net Q. EO is a real outward return. W is the one actual pool-to-waste-handling event paired with receive_pallet_w; cancel the internal transfer at consolidation. Only actual independent external exits can replace that pair. Complete wet closing stock and any new repair material or moisture ingress both remain; X removes only overlap with OTHER same-side flows. No economic scaling, stock-corrected burden numerator, second procurement/provider or automatic credit is allowed for this gross card. Native manufactured Product family of portable wooden load platforms and wooden collars at plant; general comment includes platform variants and hinged four-wood collars. Select one complete actual wooden pallet only, with attached fasteners and whole wet mass once. Sole Mass property; no fixed timber species, EURO size, CAS or geography. Repair wood/water are separate materials and never this whole-pallet UUID. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pallet`
- Sources: `ilcd-allocation`

###### Wooden shipping pallet (`pallet_eo`)

Conditional actual packaging returned externally of this one wooden shipping pallet pool; record the complete physical gross leg V_pallet_EO including its actual water and attached components. P/I are disjoint upstream-ownership paths: supplier-included packaging is physically retained even if its upstream burden is in a material provider. ER is a real return, not new procurement. S follows gross physical dispatch, never net Q. EO is a real outward return. W is the one actual pool-to-waste-handling event paired with receive_pallet_w; cancel the internal transfer at consolidation. Only actual independent external exits can replace that pair. Complete wet closing stock and any new repair material or moisture ingress both remain; X removes only overlap with OTHER same-side flows. No economic scaling, stock-corrected burden numerator, second procurement/provider or automatic credit is allowed for this gross card. Native manufactured Product family of portable wooden load platforms and wooden collars at plant; general comment includes platform variants and hinged four-wood collars. Select one complete actual wooden pallet only, with attached fasteners and whole wet mass once. Sole Mass property; no fixed timber species, EURO size, CAS or geography. Repair wood/water are separate materials and never this whole-pallet UUID. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pallet`
- Sources: `ilcd-allocation`

###### BOPP adhesive packing tape (`tape_s`)

Conditional actual packaging on gross physical dispatch of this one bopp adhesive packing tape pool; record the complete physical gross leg V_tape_S including its actual water and attached components. P/I are disjoint upstream-ownership paths: supplier-included packaging is physically retained even if its upstream burden is in a material provider. ER is a real return, not new procurement. S follows gross physical dispatch, never net Q. EO is a real outward return. W is the one actual pool-to-waste-handling event paired with receive_tape_w; cancel the internal transfer at consolidation. Only actual independent external exits can replace that pair. Complete wet closing stock and any new repair material or moisture ingress both remain; X removes only overlap with OTHER same-side flows. No economic scaling, stock-corrected burden numerator, second procurement/provider or automatic credit is allowed for this gross card. Native Product packing tape, BOPP film route, at plant; whole supplied adhesive tape only after backing and coating compatibility. Not masking paper tape, PET strap or raw polypropylene; no fixed geography, coat weight or CAS. Native reference Mass. The electrical-energy classification is an isolated incompatible taxonomy label; physical Product identity is BOPP packing tape and Mass, not electrical energy. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Packing tape `e79513bf-1a03-4444-b0f5-9d545f0f43f6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_tape`
- Sources: `ilcd-allocation`

###### BOPP adhesive packing tape (`tape_eo`)

Conditional actual packaging returned externally of this one bopp adhesive packing tape pool; record the complete physical gross leg V_tape_EO including its actual water and attached components. P/I are disjoint upstream-ownership paths: supplier-included packaging is physically retained even if its upstream burden is in a material provider. ER is a real return, not new procurement. S follows gross physical dispatch, never net Q. EO is a real outward return. W is the one actual pool-to-waste-handling event paired with receive_tape_w; cancel the internal transfer at consolidation. Only actual independent external exits can replace that pair. Complete wet closing stock and any new repair material or moisture ingress both remain; X removes only overlap with OTHER same-side flows. No economic scaling, stock-corrected burden numerator, second procurement/provider or automatic credit is allowed for this gross card. Native Product packing tape, BOPP film route, at plant; whole supplied adhesive tape only after backing and coating compatibility. Not masking paper tape, PET strap or raw polypropylene; no fixed geography, coat weight or CAS. Native reference Mass. The electrical-energy classification is an isolated incompatible taxonomy label; physical Product identity is BOPP packing tape and Mass, not electrical energy. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Packing tape `e79513bf-1a03-4444-b0f5-9d545f0f43f6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_tape`
- Sources: `ilcd-allocation`

###### PET shipping strap (`petstrap_s`)

Conditional actual packaging on gross physical dispatch of this one pet shipping strap pool; record the complete physical gross leg V_petstrap_S including its actual water and attached components. P/I are disjoint upstream-ownership paths: supplier-included packaging is physically retained even if its upstream burden is in a material provider. ER is a real return, not new procurement. S follows gross physical dispatch, never net Q. EO is a real outward return. W is the one actual pool-to-waste-handling event paired with receive_petstrap_w; cancel the internal transfer at consolidation. Only actual independent external exits can replace that pair. Complete wet closing stock and any new repair material or moisture ingress both remain; X removes only overlap with OTHER same-side flows. No economic scaling, stock-corrected burden numerator, second procurement/provider or automatic credit is allowed for this gross card. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: PET shipping strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_petstrap`
- Sources: `ilcd-allocation`

###### PET shipping strap (`petstrap_eo`)

Conditional actual packaging returned externally of this one pet shipping strap pool; record the complete physical gross leg V_petstrap_EO including its actual water and attached components. P/I are disjoint upstream-ownership paths: supplier-included packaging is physically retained even if its upstream burden is in a material provider. ER is a real return, not new procurement. S follows gross physical dispatch, never net Q. EO is a real outward return. W is the one actual pool-to-waste-handling event paired with receive_petstrap_w; cancel the internal transfer at consolidation. Only actual independent external exits can replace that pair. Complete wet closing stock and any new repair material or moisture ingress both remain; X removes only overlap with OTHER same-side flows. No economic scaling, stock-corrected burden numerator, second procurement/provider or automatic credit is allowed for this gross card. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: PET shipping strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_petstrap`
- Sources: `ilcd-allocation`

##### Waste flows

###### Spent corrugated shipping carton (`carton_w`)

Conditional actual packaging pool waste handoff of this one corrugated shipping carton pool; record the complete physical gross leg V_carton_W including its actual water and attached components. P/I are disjoint upstream-ownership paths: supplier-included packaging is physically retained even if its upstream burden is in a material provider. ER is a real return, not new procurement. S follows gross physical dispatch, never net Q. EO is a real outward return. W is the one actual pool-to-waste-handling event paired with receive_carton_w; cancel the internal transfer at consolidation. Only actual independent external exits can replace that pair. Complete wet closing stock and any new repair material or moisture ingress both remain; X removes only overlap with OTHER same-side flows. No economic scaling, stock-corrected burden numerator, second procurement/provider or automatic credit is allowed for this gross card. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Spent corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_carton`
- Sources: `ilcd-allocation`

###### Spent polyethylene protective wrapping film (`pe_w`)

Conditional actual packaging pool waste handoff of this one polyethylene protective wrapping film pool; record the complete physical gross leg V_pe_W including its actual water and attached components. P/I are disjoint upstream-ownership paths: supplier-included packaging is physically retained even if its upstream burden is in a material provider. ER is a real return, not new procurement. S follows gross physical dispatch, never net Q. EO is a real outward return. W is the one actual pool-to-waste-handling event paired with receive_pe_w; cancel the internal transfer at consolidation. Only actual independent external exits can replace that pair. Complete wet closing stock and any new repair material or moisture ingress both remain; X removes only overlap with OTHER same-side flows. No economic scaling, stock-corrected burden numerator, second procurement/provider or automatic credit is allowed for this gross card. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Spent polyethylene protective wrapping film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pe`
- Sources: `ilcd-allocation`

###### Spent honeycomb paper protective wrap (`paper_w`)

Conditional actual packaging pool waste handoff of this one honeycomb paper protective wrap pool; record the complete physical gross leg V_paper_W including its actual water and attached components. P/I are disjoint upstream-ownership paths: supplier-included packaging is physically retained even if its upstream burden is in a material provider. ER is a real return, not new procurement. S follows gross physical dispatch, never net Q. EO is a real outward return. W is the one actual pool-to-waste-handling event paired with receive_paper_w; cancel the internal transfer at consolidation. Only actual independent external exits can replace that pair. Complete wet closing stock and any new repair material or moisture ingress both remain; X removes only overlap with OTHER same-side flows. No economic scaling, stock-corrected burden numerator, second procurement/provider or automatic credit is allowed for this gross card. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Spent honeycomb paper protective wrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_paper`
- Sources: `ilcd-allocation`

###### Spent wooden shipping pallet (`pallet_w`)

Conditional actual packaging pool waste handoff of this one wooden shipping pallet pool; record the complete physical gross leg V_pallet_W including its actual water and attached components. P/I are disjoint upstream-ownership paths: supplier-included packaging is physically retained even if its upstream burden is in a material provider. ER is a real return, not new procurement. S follows gross physical dispatch, never net Q. EO is a real outward return. W is the one actual pool-to-waste-handling event paired with receive_pallet_w; cancel the internal transfer at consolidation. Only actual independent external exits can replace that pair. Complete wet closing stock and any new repair material or moisture ingress both remain; X removes only overlap with OTHER same-side flows. No economic scaling, stock-corrected burden numerator, second procurement/provider or automatic credit is allowed for this gross card. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Spent wooden shipping pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_pallet`
- Sources: `ilcd-allocation`

###### Spent bopp adhesive packing tape (`tape_w`)

Conditional actual packaging pool waste handoff of this one bopp adhesive packing tape pool; record the complete physical gross leg V_tape_W including its actual water and attached components. P/I are disjoint upstream-ownership paths: supplier-included packaging is physically retained even if its upstream burden is in a material provider. ER is a real return, not new procurement. S follows gross physical dispatch, never net Q. EO is a real outward return. W is the one actual pool-to-waste-handling event paired with receive_tape_w; cancel the internal transfer at consolidation. Only actual independent external exits can replace that pair. Complete wet closing stock and any new repair material or moisture ingress both remain; X removes only overlap with OTHER same-side flows. No economic scaling, stock-corrected burden numerator, second procurement/provider or automatic credit is allowed for this gross card. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Spent bopp adhesive packing tape
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_tape`
- Sources: `ilcd-allocation`

###### Spent pet shipping strap (`petstrap_w`)

Conditional actual packaging pool waste handoff of this one pet shipping strap pool; record the complete physical gross leg V_petstrap_W including its actual water and attached components. P/I are disjoint upstream-ownership paths: supplier-included packaging is physically retained even if its upstream burden is in a material provider. ER is a real return, not new procurement. S follows gross physical dispatch, never net Q. EO is a real outward return. W is the one actual pool-to-waste-handling event paired with receive_petstrap_w; cancel the internal transfer at consolidation. Only actual independent external exits can replace that pair. Complete wet closing stock and any new repair material or moisture ingress both remain; X removes only overlap with OTHER same-side flows. No economic scaling, stock-corrected burden numerator, second procurement/provider or automatic credit is allowed for this gross card. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Spent pet shipping strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_petstrap`
- Sources: `ilcd-allocation`

##### Elementary flows

###### H2O vapour release (`h2o_out_pack`)

Record actual moisture ingress/egress from ordinary storage/handling and wet work as well as repairs; no extra work permission is invented for natural exchange. Keep new influx plus full wet closing article/material stocks. Correct only genuinely overlapping other same-side flow terms, never erase stock-retained influx. If taken as part of measured humid intake/exhaust, use a disjoint species bridge. This is only the disjoint event in this process; match the particular material/packaging pool and do not repeat the same event in a neighbouring process. Native Elementary water vapour, CAS7732-18-5, emission to air unspecified; reference Mass only. Select actual gas-phase H2O leaving to the documented unspecified air compartment; liquid drainage/condensate has its own row. Not reaction-water inference from curing, COD, aerosol totals or an extra purchased heat carrier. A known urban/nonurban/long-term compartment requires the exact compatible identity instead. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_pack`
- Sources: `gong-rigid`; `greenlight-vent`; `ilcd-allocation`

### Process: Original-cohort factory-gate service (`service`)

#### Inputs

##### Product flows

###### Metered alternating current (`power_service`)

Actual attributed electricity for this operation, including extraction, environmental conditioning and all start/stop/idle/failed/cleanup work. Select the bound CN medium-voltage supply only when physically true; otherwise a correct supply binding is required, without asserting a core-method hold. Electric heating is owned here and not purchased heat again. Native Product alternating current, CN supply geography, 1–35kV medium voltage, grid-average consumption mix to user including upstream generation/transmission. Native reference Net calorific value/MJ. This binding applies only to that actual supply interface; other voltages/geographies require compatible replacement before dataset use. Meter real kWh and convert once by 3.6 to MJ; no Mass/kg rule or duplicated generation/transformer burden. Reference unit group is `93a60a57-a3c8-11da-a746-0800200c9a66`, actual reference unit MJ. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_service`
- Sources: `greenlight-guide`; `ilcd-allocation`

###### Tap water for actual wet work (`water_service`)

Only real tap-water supply used for wet sanding, cleaning or actual service/maintenance. Preserve liquid mass and water-state density evidence independently; no invented boiler, steam or reaction water. Any actual external thermal carrier/return requires separate atomic rows and one declared supply-energy owner before modelling. Native Product treated municipal/potable public tap-water supply, production mix at plant; treatment may include filtration/sedimentation/disinfection and is location dependent. Not raw river water, steam or wastewater. Reference Mass=1 and secondary Volume=0.001 are retained identities, not a measured density. Use kg from independent actual water-state measurement; no fixed supply geography or CAS. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_service`
- Sources: `greenlight-glass`; `greenlight-sand`; `ilcd-allocation`

###### Surfboard laminating epoxy resin-base preparation (`service_in_resin_base`)

Only actual incremental original-cohort postrelease work Purchase the entire actual resin-side commercial formulation once for lamination, box bonding and epoxy sealcoat; retain full SDS/specification and lot. DGEBA-only, solvent/paint and wafer-adhesive identities cannot be inferred from the word epoxy. Active resin, diluent and carrier are constituent subaccounts, not additional purchases. Keep original first-release Q_H and observed H. Transfer issues from own stock by paired internal ledger without a second external purchase; real external new purchases retain upstream owner once. Manufacturer/specification permission and postwork tests/acceptance/disposition govern authorisation and continuing qualification; unauthorised, rejected or failed actual work/material/water/energy/waste is still recorded, never deleted or set to zero. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Surfboard laminating epoxy resin-base preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `greenlight-glass`; `greenlight-vent`; `nsp-dealer`; `ilcd-allocation`

###### Surfboard epoxy hardener preparation (`service_in_hardener`)

Only actual incremental original-cohort postrelease work Purchase the whole separately supplied compatible hardener once; keep exact formulation, approved resin pairing and actual mixed charges/losses. No pure-amine identity, universal resin ratio, cure temperature/time, conversion or reaction water is inferred. Onsite mixed epoxy is an internal combination, not another purchased mixture. Keep original first-release Q_H and observed H. Transfer issues from own stock by paired internal ledger without a second external purchase; real external new purchases retain upstream owner once. Manufacturer/specification permission and postwork tests/acceptance/disposition govern authorisation and continuing qualification; unauthorised, rejected or failed actual work/material/water/energy/waste is still recorded, never deleted or set to zero. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Surfboard epoxy hardener preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `greenlight-glass`; `greenlight-vent`; `nsp-dealer`; `ilcd-allocation`

###### Dry woven glass-fibre cloth (`service_in_glass_cloth`)

Only actual incremental original-cohort postrelease work Actual dry woven cloth cut for deck, bottom, rails and qualified patches; record separate lots/plies offcuts. Different glass/sizing and weave states are not assumed equal. No resin already supplied in prepreg is purchased again. A stitched biaxial reinforcement, if actually used, needs its separately named nonoverlapping card; the NSP illustrated biaxial is not silently equated to woven cloth. Keep original first-release Q_H and observed H. Transfer issues from own stock by paired internal ledger without a second external purchase; real external new purchases retain upstream owner once. Manufacturer/specification permission and postwork tests/acceptance/disposition govern authorisation and continuing qualification; unauthorised, rejected or failed actual work/material/water/energy/waste is still recorded, never deleted or set to zero. Native Product flow, manufactured woven glass-fibre fabric, production mix at plant; no fixed CAS, glass grade, sizing, areal mass or geography. Select one actual dry woven cloth only after weave/finish compatibility; not loose yarn, wool, stitched non-crimp biaxial fabric or resin prepreg. The isolated general-comment textile chapter label does not override the consistent woven-glass name and classification. Native sole Mass property; no invented areal density. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Woven fabrics (including narrow fabrics) of glass fibres `59caf1b9-5a05-4eef-8ba2-bc94aa28f43f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `greenlight-glass`; `roberts-ret`; `nsp-dealer`; `ilcd-allocation`

###### Surfboard fin-box insert (`service_in_finbox`)

Only actual incremental original-cohort postrelease work Each actual purchased fin box is one complete insert including supplied integral hardware and reinforcement carrier when present; record each box count/mass/material and genuine bonding resin from the resin ledger. Installed boxes are required at first release. Detachable fins are not supplied in the selected complete-board sale; do not invent their purchase or add loose fins to make a fictitious terminal. Keep original first-release Q_H and observed H. Transfer issues from own stock by paired internal ledger without a second external purchase; real external new purchases retain upstream owner once. Manufacturer/specification permission and postwork tests/acceptance/disposition govern authorisation and continuing qualification; unauthorised, rejected or failed actual work/material/water/energy/waste is still recorded, never deleted or set to zero. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Surfboard fin-box insert
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `greenlight-glass`; `greenlight-vent`; `nsp-dealer`; `ilcd-allocation`

###### Vented EPS surfboard leash-plug installation kit (`service_in_ventkit`)

Only actual incremental original-cohort postrelease work This transparent technical route selects one supplied combined membrane vent/leash-plug kit. Current supplier kit includes plug, epoxy putty and tamping stick: one whole purchase with disjoint component/installed-residual/waste child ledger. Do not also purchase its included putty/stick. Actual extra separately acquired putty needs a separately named whole-formulation card before use; old generic liquid-epoxy installation and the current kit are not two purchases. No GONG sandwich vent screw is added. Keep original first-release Q_H and observed H. Transfer issues from own stock by paired internal ledger without a second external purchase; real external new purchases retain upstream owner once. Manufacturer/specification permission and postwork tests/acceptance/disposition govern authorisation and continuing qualification; unauthorised, rejected or failed actual work/material/water/energy/waste is still recorded, never deleted or set to zero. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Vented EPS surfboard leash-plug installation kit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `greenlight-glass`; `greenlight-vent`; `nsp-dealer`; `ilcd-allocation`

###### Denatured alcohol surface-cleaning preparation (`service_in_alcohol`)

Only actual incremental original-cohort postrelease work Whole purchased denatured alcohol formulation for actual surface preparation; specify all constituents and water by real supplier assay. Neither pure ethanol nor pure methanol is inferred. Retained liquid, evaporation and waste remain separately measured. Keep original first-release Q_H and observed H. Transfer issues from own stock by paired internal ledger without a second external purchase; real external new purchases retain upstream owner once. Manufacturer/specification permission and postwork tests/acceptance/disposition govern authorisation and continuing qualification; unauthorised, rejected or failed actual work/material/water/energy/waste is still recorded, never deleted or set to zero. Native manufactured Product family of ethyl alcohol and other spirits that are denatured, of any strength, production mix at plant; no fixed CAS, concentration, denaturant, feed route or supply geography. Select the actual whole denatured surface-cleaning formulation, not potable/undenatured spirit and not a pure-ethanol emission or separate carrier-water purchase. Sole Mass property; measure actual supplied mass and assay, no assumed density or strength. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Ethyl alcohol and other spirits, denatured, of any strength `0ca960f7-3506-4b71-8503-e6f37e03d77a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `greenlight-glass`; `greenlight-sand`; `ilcd-allocation`

###### Lint-free surface preparation cloth (`service_in_rag`)

Only actual incremental original-cohort postrelease work Record actual supplied cleaning cloth and measured residues; no assumption of cotton if composition unknown. Cloth and separately supplied cleaning liquid are disjoint, while prewetted purchased wipe must be a whole preparation once. Keep original first-release Q_H and observed H. Transfer issues from own stock by paired internal ledger without a second external purchase; real external new purchases retain upstream owner once. Manufacturer/specification permission and postwork tests/acceptance/disposition govern authorisation and continuing qualification; unauthorised, rejected or failed actual work/material/water/energy/waste is still recorded, never deleted or set to zero. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Lint-free surface preparation cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `greenlight-glass`; `greenlight-sand`; `ilcd-allocation`

###### Paper-backed coated-abrasive sheet (`service_in_abrasive`)

Only actual incremental original-cohort postrelease work Actual whole coated abrasive sheet/disc for shaping, lap/box trimming and matte finish. Specify backing, binder and abrasive grade from supplier; do not purchase Bayer alumina as if it were this finished abrasive. Worn grit, backing and collected dust have measured distinct fates. Keep original first-release Q_H and observed H. Transfer issues from own stock by paired internal ledger without a second external purchase; real external new purchases retain upstream owner once. Manufacturer/specification permission and postwork tests/acceptance/disposition govern authorisation and continuing qualification; unauthorised, rejected or failed actual work/material/water/energy/waste is still recorded, never deleted or set to zero. Native Product abrasive paper at plant, reference Mass, no fixed abrasive mineral/binder/backing grade, route, CAS or geography. Current active abrasive classification and separately preserved historical Other goods taxonomy are distinguished. Select one actual paper-backed coated abrasive sheet/disc; a cloth-backed article needs its compatible record and cannot borrow this paper identity. No generic alumina input or unverified grit count/mass factor. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Abrasive paper `ba6c99d4-60d9-46a5-9ef5-ca3d0b877d57`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `greenlight-shape`; `greenlight-sand`; `ilcd-allocation`

##### Elementary flows

###### Atmospheric H2O uptake (`h2o_in_service`)

Record actual moisture ingress/egress from ordinary storage/handling and wet work as well as repairs; no extra work permission is invented for natural exchange. Keep new influx plus full wet closing article/material stocks. Correct only genuinely overlapping other same-side flow terms, never erase stock-retained influx. If taken as part of measured humid intake/exhaust, use a disjoint species bridge. Native Elementary resource Water in air, renewable material resource from air; Volume reference only. No official Chinese basename is provided; preserve the official English display and disclose that absence. Use actual H2O vapour volume at documented temperature/pressure/composition, independent of all dry-air species and supplied water. Not an emission, liquid water m3 by assumed density, or steam purchase. Reference unit group is `93a60a57-a3c8-12da-a746-0800200c9a66`, actual reference unit m3. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Water, in air `d73aff1b-0b31-434f-8e44-87a08c93e13f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_service`
- Sources: `gong-rigid`; `greenlight-vent`; `ilcd-allocation`

###### Atmospheric molecular oxygen intake (`o2_in_service`)

Conditional actual ventilation/pressure-equalisation species. Measure complete gross leg and retain source/receptor, temperature/pressure and species assay; integrate a real rate once, not an already integrated volume again. No fixed air composition, oxygen consumption, stoichiometric reaction or nitrogen emission from total-N/NOx is assumed. Air aggregate is a non-additive bridge, never another procurement/emission. Only an actual controlled equipment/operation inlet or outlet crosses this gas boundary; ordinary surrounding atmosphere is not an invented extra ventilation operation. Keep event and metering ownership disjoint from every other process and the humid-air species bridge. Native Elementary oxygen resource from air, CAS7782-44-7; molecular O2 only, not oxygen atoms, ozone or purchased cryogenic oxygen. Native Mass; actual intake measured with state and species composition; no fixed air fraction. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_service`
- Sources: `greenlight-vent`; `ilcd-allocation`

###### Atmospheric molecular dinitrogen intake (`n2_in_service`)

Actual atmospheric N2 gross intake, not purchased liquid or industrial nitrogen and not total nitrogen. A compatible resource-from-air identity must precede a UUID binding; do not borrow the air-emission UUID for an input. Preserve the disjoint dry-air/H2O bridge and native mass measurement. Only an actual controlled equipment/operation inlet or outlet crosses this gas boundary; ordinary surrounding atmosphere is not an invented extra ventilation operation. Keep event and metering ownership disjoint from every other process and the humid-air species bridge. Native Elementary dinitrogen CAS7727-37-9, renewable element resource from air, Mass. Molecular N2 only; not an emission, total-N/NOx or industrial liquid gas. Synonym breadth does not override CAS, atmospheric origin or actual gaseous state. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_service`
- Sources: `greenlight-vent`; `ilcd-allocation`

###### Atmospheric argon intake (`ar_in_service`)

Conditional actual ventilation/pressure-equalisation species. Measure complete gross leg and retain source/receptor, temperature/pressure and species assay; integrate a real rate once, not an already integrated volume again. No fixed air composition, oxygen consumption, stoichiometric reaction or nitrogen emission from total-N/NOx is assumed. Air aggregate is a non-additive bridge, never another procurement/emission. Only an actual controlled equipment/operation inlet or outlet crosses this gas boundary; ordinary surrounding atmosphere is not an invented extra ventilation operation. Keep event and metering ownership disjoint from every other process and the humid-air species bridge. Native Elementary argon resource from air, CAS7440-37-1; molecular/atomic argon identity, not a manufactured gas bottle or an isotope tracer. Native Mass; actual atmospheric intake and state only, no assumed fraction. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_service`
- Sources: `greenlight-vent`; `ilcd-allocation`

#### Outputs

##### Waste flows

###### Epoxy-workshop cleaning wastewater (`out_washwater_service`)

Only actual collected liquid wastewater leaving this operation; complete supplied water and actual detergent/chemical contamination, free water and solids are measured independently. COD/VOC/pH are indicators, not a named chemical mass or a pure-water discharge. Trace treatment/provider once; do not duplicate moisture already in wet outgoing articles. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Epoxy-workshop cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_service`
- Sources: `greenlight-glass`; `greenlight-sand`; `ilcd-allocation`

###### Uncured postrelease epoxy residue (`service_epoxy_w`)

Only actual original-cohort postrelease waste/removed item, fully measured in its true wet composition and cure/part state, whether permitted, unauthorised, failed or rejected. Link original Q_H and H and all incremental burden, with no new Q or automatic credit. Whole wet item and components are disjoint. Pair this internal origin-W handoff with receive_service_epoxy_w and cancel at combined gate; an actually separate external outlet is retained once with its own qualified card/provider, not forced into an incompatible mixture. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Uncured postrelease epoxy residue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `greenlight-sand`; `gong-rigid`; `ilcd-allocation`

###### Cured postrelease glass-epoxy residue (`service_composite_w`)

Only actual original-cohort postrelease waste/removed item, fully measured in its true wet composition and cure/part state, whether permitted, unauthorised, failed or rejected. Link original Q_H and H and all incremental burden, with no new Q or automatic credit. Whole wet item and components are disjoint. Pair this internal origin-W handoff with receive_service_composite_w and cancel at combined gate; an actually separate external outlet is retained once with its own qualified card/provider, not forced into an incompatible mixture. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Cured postrelease glass-epoxy residue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `greenlight-sand`; `gong-rigid`; `ilcd-allocation`

###### Spent postrelease abrasive sheet (`service_abrasive_w`)

Only actual original-cohort postrelease waste/removed item, fully measured in its true wet composition and cure/part state, whether permitted, unauthorised, failed or rejected. Link original Q_H and H and all incremental burden, with no new Q or automatic credit. Whole wet item and components are disjoint. Pair this internal origin-W handoff with receive_service_abrasive_w and cancel at combined gate; an actually separate external outlet is retained once with its own qualified card/provider, not forced into an incompatible mixture. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Spent postrelease abrasive sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `greenlight-sand`; `gong-rigid`; `ilcd-allocation`

###### Contaminated postrelease cleaning cloth (`service_cloth_w`)

Only actual original-cohort postrelease waste/removed item, fully measured in its true wet composition and cure/part state, whether permitted, unauthorised, failed or rejected. Link original Q_H and H and all incremental burden, with no new Q or automatic credit. Whole wet item and components are disjoint. Pair this internal origin-W handoff with receive_service_cloth_w and cancel at combined gate; an actually separate external outlet is retained once with its own qualified card/provider, not forced into an incompatible mixture. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Contaminated postrelease cleaning cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `greenlight-sand`; `gong-rigid`; `ilcd-allocation`

###### Removed old surfboard fin-box insert (`service_insert_w`)

Only actual original-cohort postrelease waste/removed item, fully measured in its true wet composition and cure/part state, whether permitted, unauthorised, failed or rejected. Link original Q_H and H and all incremental burden, with no new Q or automatic credit. Whole wet item and components are disjoint. Pair this internal origin-W handoff with receive_service_insert_w and cancel at combined gate; an actually separate external outlet is retained once with its own qualified card/provider, not forced into an incompatible mixture. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Removed old surfboard fin-box insert
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `greenlight-sand`; `gong-rigid`; `ilcd-allocation`

###### Removed old vented leash-plug component (`service_plug_w`)

Only actual original-cohort postrelease waste/removed item, fully measured in its true wet composition and cure/part state, whether permitted, unauthorised, failed or rejected. Link original Q_H and H and all incremental burden, with no new Q or automatic credit. Whole wet item and components are disjoint. Pair this internal origin-W handoff with receive_service_plug_w and cancel at combined gate; an actually separate external outlet is retained once with its own qualified card/provider, not forced into an incompatible mixture. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Removed old vented leash-plug component
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `greenlight-sand`; `gong-rigid`; `ilcd-allocation`

###### Rejected postrelease EPS glass-epoxy board (`service_board_w`)

Only actual original-cohort postrelease waste/removed item, fully measured in its true wet composition and cure/part state, whether permitted, unauthorised, failed or rejected. Link original Q_H and H and all incremental burden, with no new Q or automatic credit. Whole wet item and components are disjoint. Pair this internal origin-W handoff with receive_service_board_w and cancel at combined gate; an actually separate external outlet is retained once with its own qualified card/provider, not forced into an incompatible mixture. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Rejected postrelease EPS glass-epoxy board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `greenlight-sand`; `gong-rigid`; `ilcd-allocation`

##### Elementary flows

###### H2O vapour release (`h2o_out_service`)

Record actual moisture ingress/egress from ordinary storage/handling and wet work as well as repairs; no extra work permission is invented for natural exchange. Keep new influx plus full wet closing article/material stocks. Correct only genuinely overlapping other same-side flow terms, never erase stock-retained influx. If taken as part of measured humid intake/exhaust, use a disjoint species bridge. Native Elementary water vapour, CAS7732-18-5, emission to air unspecified; reference Mass only. Select actual gas-phase H2O leaving to the documented unspecified air compartment; liquid drainage/condensate has its own row. Not reaction-water inference from curing, COD, aerosol totals or an extra purchased heat carrier. A known urban/nonurban/long-term compartment requires the exact compatible identity instead. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_service`
- Sources: `gong-rigid`; `greenlight-vent`; `ilcd-allocation`

###### Unreacted molecular oxygen exhaust (`o2_out_service`)

Conditional actual ventilation/pressure-equalisation species. Measure complete gross leg and retain source/receptor, temperature/pressure and species assay; integrate a real rate once, not an already integrated volume again. No fixed air composition, oxygen consumption, stoichiometric reaction or nitrogen emission from total-N/NOx is assumed. Air aggregate is a non-additive bridge, never another procurement/emission. Only an actual controlled equipment/operation inlet or outlet crosses this gas boundary; ordinary surrounding atmosphere is not an invented extra ventilation operation. Keep event and metering ownership disjoint from every other process and the humid-air species bridge. Native Elementary molecular oxygen CAS7782-44-7, Mass, emission to unspecified air; broad synonyms including liquid/ionic labels do not override CAS and actual gaseous O2. Only observed unreacted atmospheric O2 in this unspecified compartment; no combustion or chemical stoichiometry assumed. Known urban/nonurban/long-term release needs its correct identity. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_service`
- Sources: `greenlight-vent`; `ilcd-allocation`

###### Unreacted dinitrogen exhaust (`n2_out_service`)

Conditional actual ventilation/pressure-equalisation species. Measure complete gross leg and retain source/receptor, temperature/pressure and species assay; integrate a real rate once, not an already integrated volume again. No fixed air composition, oxygen consumption, stoichiometric reaction or nitrogen emission from total-N/NOx is assumed. Air aggregate is a non-additive bridge, never another procurement/emission. Only an actual controlled equipment/operation inlet or outlet crosses this gas boundary; ordinary surrounding atmosphere is not an invented extra ventilation operation. Keep event and metering ownership disjoint from every other process and the humid-air species bridge. Native Elementary dinitrogen CAS7727-37-9, Mass, emission to unspecified air; molecular N2, not total nitrogen excluding N2, NOx or purchased liquid nitrogen. Observed unreacted ventilation species only; known urban/nonurban/long-term release requires its correct identity. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_service`
- Sources: `greenlight-vent`; `ilcd-allocation`

###### Unreacted argon exhaust (`ar_out_service`)

Conditional actual ventilation/pressure-equalisation species. Measure complete gross leg and retain source/receptor, temperature/pressure and species assay; integrate a real rate once, not an already integrated volume again. No fixed air composition, oxygen consumption, stoichiometric reaction or nitrogen emission from total-N/NOx is assumed. Air aggregate is a non-additive bridge, never another procurement/emission. Only an actual controlled equipment/operation inlet or outlet crosses this gas boundary; ordinary surrounding atmosphere is not an invented extra ventilation operation. Keep event and metering ownership disjoint from every other process and the humid-air species bridge. Native Elementary argon CAS7440-37-1, Mass, emission to unspecified air; broad isotope synonyms do not turn ordinary argon into a tracer. Actual unreacted air species only, with known compartment replaced by its precise native record. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_service`
- Sources: `greenlight-vent`; `ilcd-allocation`

### Process: Real asset and maintenance movements/service (`assets`)

#### Inputs

##### Product flows

###### Metered alternating current (`power_assets`)

Actual attributed electricity for this operation, including extraction, environmental conditioning and all start/stop/idle/failed/cleanup work. Select the bound CN medium-voltage supply only when physically true; otherwise a correct supply binding is required, without asserting a core-method hold. Electric heating is owned here and not purchased heat again. Native Product alternating current, CN supply geography, 1–35kV medium voltage, grid-average consumption mix to user including upstream generation/transmission. Native reference Net calorific value/MJ. This binding applies only to that actual supply interface; other voltages/geographies require compatible replacement before dataset use. Meter real kWh and convert once by 3.6 to MJ; no Mass/kg rule or duplicated generation/transformer burden. Reference unit group is `93a60a57-a3c8-11da-a746-0800200c9a66`, actual reference unit MJ. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_assets`
- Sources: `greenlight-guide`; `ilcd-allocation`

###### Tap water for actual wet work (`water_assets`)

Only real tap-water supply used for wet sanding, cleaning or actual service/maintenance. Preserve liquid mass and water-state density evidence independently; no invented boiler, steam or reaction water. Any actual external thermal carrier/return requires separate atomic rows and one declared supply-energy owner before modelling. Native Product treated municipal/potable public tap-water supply, production mix at plant; treatment may include filtration/sedimentation/disinfection and is location dependent. Not raw river water, steam or wastewater. Reference Mass=1 and secondary Volume=0.001 are retained identities, not a measured density. Use kg from independent actual water-state measurement; no fixed supply geography or CAS. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_assets`
- Sources: `greenlight-glass`; `greenlight-sand`; `ilcd-allocation`

###### Surfboard shaping CNC router (`asset_router_new`)

New acquisition of one actual complete surfboard shaping cnc router only when it occurs. Full gross wet article mass V is independent of cohort service attribution. Opening/closing installed/stored asset mass, new/old movements, disjoint parts, fluid/water contents and unused service burden are separate ledgers. Never divide gross asset mass by a guessed lifetime or buy one whole machine per kg board; each actual service burden is attributed once using real metering/use and evidenced provider/capital boundary. A treatment row is not a manufactured Product identity. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Surfboard shaping CNC router
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `greenlight-guide`; `greenlight-shape`; `greenlight-sand`; `ilcd-allocation`

###### Surfboard shaping CNC router (`asset_router_returnin`)

Returned old article received of one actual complete surfboard shaping cnc router only when it occurs. Full gross wet article mass V is independent of cohort service attribution. Opening/closing installed/stored asset mass, new/old movements, disjoint parts, fluid/water contents and unused service burden are separate ledgers. Never divide gross asset mass by a guessed lifetime or buy one whole machine per kg board; each actual service burden is attributed once using real metering/use and evidenced provider/capital boundary. A treatment row is not a manufactured Product identity. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Surfboard shaping CNC router
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `greenlight-guide`; `greenlight-shape`; `greenlight-sand`; `ilcd-allocation`

###### Electric surfboard sander (`asset_sander_new`)

New acquisition of one actual complete electric surfboard sander only when it occurs. Full gross wet article mass V is independent of cohort service attribution. Opening/closing installed/stored asset mass, new/old movements, disjoint parts, fluid/water contents and unused service burden are separate ledgers. Never divide gross asset mass by a guessed lifetime or buy one whole machine per kg board; each actual service burden is attributed once using real metering/use and evidenced provider/capital boundary. A treatment row is not a manufactured Product identity. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Electric surfboard sander
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `greenlight-guide`; `greenlight-shape`; `greenlight-sand`; `ilcd-allocation`

###### Electric surfboard sander (`asset_sander_returnin`)

Returned old article received of one actual complete electric surfboard sander only when it occurs. Full gross wet article mass V is independent of cohort service attribution. Opening/closing installed/stored asset mass, new/old movements, disjoint parts, fluid/water contents and unused service burden are separate ledgers. Never divide gross asset mass by a guessed lifetime or buy one whole machine per kg board; each actual service burden is attributed once using real metering/use and evidenced provider/capital boundary. A treatment row is not a manufactured Product identity. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Electric surfboard sander
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `greenlight-guide`; `greenlight-shape`; `greenlight-sand`; `ilcd-allocation`

###### Workshop dust-extraction unit (`asset_extractor_new`)

New acquisition of one actual complete workshop dust-extraction unit only when it occurs. Full gross wet article mass V is independent of cohort service attribution. Opening/closing installed/stored asset mass, new/old movements, disjoint parts, fluid/water contents and unused service burden are separate ledgers. Never divide gross asset mass by a guessed lifetime or buy one whole machine per kg board; each actual service burden is attributed once using real metering/use and evidenced provider/capital boundary. A treatment row is not a manufactured Product identity. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Workshop dust-extraction unit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `greenlight-guide`; `greenlight-shape`; `greenlight-sand`; `ilcd-allocation`

###### Workshop dust-extraction unit (`asset_extractor_returnin`)

Returned old article received of one actual complete workshop dust-extraction unit only when it occurs. Full gross wet article mass V is independent of cohort service attribution. Opening/closing installed/stored asset mass, new/old movements, disjoint parts, fluid/water contents and unused service burden are separate ledgers. Never divide gross asset mass by a guessed lifetime or buy one whole machine per kg board; each actual service burden is attributed once using real metering/use and evidenced provider/capital boundary. A treatment row is not a manufactured Product identity. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Workshop dust-extraction unit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `greenlight-guide`; `greenlight-shape`; `greenlight-sand`; `ilcd-allocation`

###### Surfboard shaping support rack (`asset_rack_new`)

New acquisition of one actual complete surfboard shaping support rack only when it occurs. Full gross wet article mass V is independent of cohort service attribution. Opening/closing installed/stored asset mass, new/old movements, disjoint parts, fluid/water contents and unused service burden are separate ledgers. Never divide gross asset mass by a guessed lifetime or buy one whole machine per kg board; each actual service burden is attributed once using real metering/use and evidenced provider/capital boundary. A treatment row is not a manufactured Product identity. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Surfboard shaping support rack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `greenlight-guide`; `greenlight-shape`; `greenlight-sand`; `ilcd-allocation`

###### Surfboard shaping support rack (`asset_rack_returnin`)

Returned old article received of one actual complete surfboard shaping support rack only when it occurs. Full gross wet article mass V is independent of cohort service attribution. Opening/closing installed/stored asset mass, new/old movements, disjoint parts, fluid/water contents and unused service burden are separate ledgers. Never divide gross asset mass by a guessed lifetime or buy one whole machine per kg board; each actual service burden is attributed once using real metering/use and evidenced provider/capital boundary. A treatment row is not a manufactured Product identity. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Surfboard shaping support rack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `greenlight-guide`; `greenlight-shape`; `greenlight-sand`; `ilcd-allocation`

###### Steel router spindle-bearing replacement part (`repair_steel_new`)

Conditional actual newly acquired single specified part. Keep real wet mass, retained fluid/water and original component burden; new influx remains even when the whole wet part stays in closing stock. X_in/X_out removes only overlap with OTHER same-side flows. This is not a whole machine or whole pallet. Real removed-part treatment and burden are retained whether authorised, failed or rejected. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Steel router spindle-bearing replacement part
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `ilcd-allocation`

###### Rubber sander backing pad (`repair_pad_new`)

Conditional actual newly acquired single specified part. Keep real wet mass, retained fluid/water and original component burden; new influx remains even when the whole wet part stays in closing stock. X_in/X_out removes only overlap with OTHER same-side flows. This is not a whole machine or whole pallet. Real removed-part treatment and burden are retained whether authorised, failed or rejected. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Rubber sander backing pad
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `ilcd-allocation`

###### Solid-wood pallet repair slat (`repair_wood_new`)

Conditional actual newly acquired single specified part. Keep real wet mass, retained fluid/water and original component burden; new influx remains even when the whole wet part stays in closing stock. X_in/X_out removes only overlap with OTHER same-side flows. This is not a whole machine or whole pallet. Real removed-part treatment and burden are retained whether authorised, failed or rejected. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Solid-wood pallet repair slat
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `ilcd-allocation`

###### Mineral lubricating-oil preparation (`lube_in`)

Actual whole purchased mineral lubricating-oil preparation, only when actually used; no PAO/full-synthetic identity inferred. Measure oil/additives/free water separately as non-additive constituents; attached/installed/closing fluid stocks and real leaks/treatment are retained. One procurement/provider ownership, no fixed fill or replacement interval. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Mineral lubricating-oil preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `ilcd-allocation`

##### Elementary flows

###### Atmospheric H2O uptake (`h2o_in_assets`)

Record actual moisture ingress/egress from ordinary storage/handling and wet work as well as repairs; no extra work permission is invented for natural exchange. Keep new influx plus full wet closing article/material stocks. Correct only genuinely overlapping other same-side flow terms, never erase stock-retained influx. If taken as part of measured humid intake/exhaust, use a disjoint species bridge. Native Elementary resource Water in air, renewable material resource from air; Volume reference only. No official Chinese basename is provided; preserve the official English display and disclose that absence. Use actual H2O vapour volume at documented temperature/pressure/composition, independent of all dry-air species and supplied water. Not an emission, liquid water m3 by assumed density, or steam purchase. Reference unit group is `93a60a57-a3c8-12da-a746-0800200c9a66`, actual reference unit m3. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Water, in air `d73aff1b-0b31-434f-8e44-87a08c93e13f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_assets`
- Sources: `gong-rigid`; `greenlight-vent`; `ilcd-allocation`

###### Atmospheric molecular oxygen intake (`o2_in_assets`)

Conditional actual ventilation/pressure-equalisation species. Measure complete gross leg and retain source/receptor, temperature/pressure and species assay; integrate a real rate once, not an already integrated volume again. No fixed air composition, oxygen consumption, stoichiometric reaction or nitrogen emission from total-N/NOx is assumed. Air aggregate is a non-additive bridge, never another procurement/emission. Only an actual controlled equipment/operation inlet or outlet crosses this gas boundary; ordinary surrounding atmosphere is not an invented extra ventilation operation. Keep event and metering ownership disjoint from every other process and the humid-air species bridge. Native Elementary oxygen resource from air, CAS7782-44-7; molecular O2 only, not oxygen atoms, ozone or purchased cryogenic oxygen. Native Mass; actual intake measured with state and species composition; no fixed air fraction. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_assets`
- Sources: `greenlight-vent`; `ilcd-allocation`

###### Atmospheric molecular dinitrogen intake (`n2_in_assets`)

Actual atmospheric N2 gross intake, not purchased liquid or industrial nitrogen and not total nitrogen. A compatible resource-from-air identity must precede a UUID binding; do not borrow the air-emission UUID for an input. Preserve the disjoint dry-air/H2O bridge and native mass measurement. Only an actual controlled equipment/operation inlet or outlet crosses this gas boundary; ordinary surrounding atmosphere is not an invented extra ventilation operation. Keep event and metering ownership disjoint from every other process and the humid-air species bridge. Native Elementary dinitrogen CAS7727-37-9, renewable element resource from air, Mass. Molecular N2 only; not an emission, total-N/NOx or industrial liquid gas. Synonym breadth does not override CAS, atmospheric origin or actual gaseous state. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_assets`
- Sources: `greenlight-vent`; `ilcd-allocation`

###### Atmospheric argon intake (`ar_in_assets`)

Conditional actual ventilation/pressure-equalisation species. Measure complete gross leg and retain source/receptor, temperature/pressure and species assay; integrate a real rate once, not an already integrated volume again. No fixed air composition, oxygen consumption, stoichiometric reaction or nitrogen emission from total-N/NOx is assumed. Air aggregate is a non-additive bridge, never another procurement/emission. Only an actual controlled equipment/operation inlet or outlet crosses this gas boundary; ordinary surrounding atmosphere is not an invented extra ventilation operation. Keep event and metering ownership disjoint from every other process and the humid-air species bridge. Native Elementary argon resource from air, CAS7440-37-1; molecular/atomic argon identity, not a manufactured gas bottle or an isotope tracer. Native Mass; actual atmospheric intake and state only, no assumed fraction. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_assets`
- Sources: `greenlight-vent`; `ilcd-allocation`

#### Outputs

##### Product flows

###### Surfboard shaping CNC router (`asset_router_returnout`)

Actual external article return of one actual complete surfboard shaping cnc router only when it occurs. Full gross wet article mass V is independent of cohort service attribution. Opening/closing installed/stored asset mass, new/old movements, disjoint parts, fluid/water contents and unused service burden are separate ledgers. Never divide gross asset mass by a guessed lifetime or buy one whole machine per kg board; each actual service burden is attributed once using real metering/use and evidenced provider/capital boundary. A treatment row is not a manufactured Product identity. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Surfboard shaping CNC router
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `greenlight-guide`; `greenlight-shape`; `greenlight-sand`; `ilcd-allocation`

###### Electric surfboard sander (`asset_sander_returnout`)

Actual external article return of one actual complete electric surfboard sander only when it occurs. Full gross wet article mass V is independent of cohort service attribution. Opening/closing installed/stored asset mass, new/old movements, disjoint parts, fluid/water contents and unused service burden are separate ledgers. Never divide gross asset mass by a guessed lifetime or buy one whole machine per kg board; each actual service burden is attributed once using real metering/use and evidenced provider/capital boundary. A treatment row is not a manufactured Product identity. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Electric surfboard sander
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `greenlight-guide`; `greenlight-shape`; `greenlight-sand`; `ilcd-allocation`

###### Workshop dust-extraction unit (`asset_extractor_returnout`)

Actual external article return of one actual complete workshop dust-extraction unit only when it occurs. Full gross wet article mass V is independent of cohort service attribution. Opening/closing installed/stored asset mass, new/old movements, disjoint parts, fluid/water contents and unused service burden are separate ledgers. Never divide gross asset mass by a guessed lifetime or buy one whole machine per kg board; each actual service burden is attributed once using real metering/use and evidenced provider/capital boundary. A treatment row is not a manufactured Product identity. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Workshop dust-extraction unit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `greenlight-guide`; `greenlight-shape`; `greenlight-sand`; `ilcd-allocation`

###### Surfboard shaping support rack (`asset_rack_returnout`)

Actual external article return of one actual complete surfboard shaping support rack only when it occurs. Full gross wet article mass V is independent of cohort service attribution. Opening/closing installed/stored asset mass, new/old movements, disjoint parts, fluid/water contents and unused service burden are separate ledgers. Never divide gross asset mass by a guessed lifetime or buy one whole machine per kg board; each actual service burden is attributed once using real metering/use and evidenced provider/capital boundary. A treatment row is not a manufactured Product identity. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Surfboard shaping support rack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `greenlight-guide`; `greenlight-shape`; `greenlight-sand`; `ilcd-allocation`

##### Waste flows

###### Epoxy-workshop cleaning wastewater (`out_washwater_assets`)

Only actual collected liquid wastewater leaving this operation; complete supplied water and actual detergent/chemical contamination, free water and solids are measured independently. COD/VOC/pH are indicators, not a named chemical mass or a pure-water discharge. Trace treatment/provider once; do not duplicate moisture already in wet outgoing articles. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Epoxy-workshop cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_assets`
- Sources: `greenlight-glass`; `greenlight-sand`; `ilcd-allocation`

###### Surfboard shaping CNC router (`asset_router_retire`)

Retired article to external treatment of one actual complete surfboard shaping cnc router only when it occurs. Full gross wet article mass V is independent of cohort service attribution. Opening/closing installed/stored asset mass, new/old movements, disjoint parts, fluid/water contents and unused service burden are separate ledgers. Never divide gross asset mass by a guessed lifetime or buy one whole machine per kg board; each actual service burden is attributed once using real metering/use and evidenced provider/capital boundary. A treatment row is not a manufactured Product identity. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Surfboard shaping CNC router
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `greenlight-guide`; `greenlight-shape`; `greenlight-sand`; `ilcd-allocation`

###### Electric surfboard sander (`asset_sander_retire`)

Retired article to external treatment of one actual complete electric surfboard sander only when it occurs. Full gross wet article mass V is independent of cohort service attribution. Opening/closing installed/stored asset mass, new/old movements, disjoint parts, fluid/water contents and unused service burden are separate ledgers. Never divide gross asset mass by a guessed lifetime or buy one whole machine per kg board; each actual service burden is attributed once using real metering/use and evidenced provider/capital boundary. A treatment row is not a manufactured Product identity. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Electric surfboard sander
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `greenlight-guide`; `greenlight-shape`; `greenlight-sand`; `ilcd-allocation`

###### Workshop dust-extraction unit (`asset_extractor_retire`)

Retired article to external treatment of one actual complete workshop dust-extraction unit only when it occurs. Full gross wet article mass V is independent of cohort service attribution. Opening/closing installed/stored asset mass, new/old movements, disjoint parts, fluid/water contents and unused service burden are separate ledgers. Never divide gross asset mass by a guessed lifetime or buy one whole machine per kg board; each actual service burden is attributed once using real metering/use and evidenced provider/capital boundary. A treatment row is not a manufactured Product identity. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Workshop dust-extraction unit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `greenlight-guide`; `greenlight-shape`; `greenlight-sand`; `ilcd-allocation`

###### Surfboard shaping support rack (`asset_rack_retire`)

Retired article to external treatment of one actual complete surfboard shaping support rack only when it occurs. Full gross wet article mass V is independent of cohort service attribution. Opening/closing installed/stored asset mass, new/old movements, disjoint parts, fluid/water contents and unused service burden are separate ledgers. Never divide gross asset mass by a guessed lifetime or buy one whole machine per kg board; each actual service burden is attributed once using real metering/use and evidenced provider/capital boundary. A treatment row is not a manufactured Product identity. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Surfboard shaping support rack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `greenlight-guide`; `greenlight-shape`; `greenlight-sand`; `ilcd-allocation`

###### Steel router spindle-bearing replacement part (`repair_steel_old`)

Conditional actual removed old single specified part. Keep real wet mass, retained fluid/water and original component burden; new influx remains even when the whole wet part stays in closing stock. X_in/X_out removes only overlap with OTHER same-side flows. This is not a whole machine or whole pallet. Real removed-part treatment and burden are retained whether authorised, failed or rejected. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Steel router spindle-bearing replacement part
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `ilcd-allocation`

###### Rubber sander backing pad (`repair_pad_old`)

Conditional actual removed old single specified part. Keep real wet mass, retained fluid/water and original component burden; new influx remains even when the whole wet part stays in closing stock. X_in/X_out removes only overlap with OTHER same-side flows. This is not a whole machine or whole pallet. Real removed-part treatment and burden are retained whether authorised, failed or rejected. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Rubber sander backing pad
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `ilcd-allocation`

###### Solid-wood pallet repair slat (`repair_wood_old`)

Conditional actual removed old single specified part. Keep real wet mass, retained fluid/water and original component burden; new influx remains even when the whole wet part stays in closing stock. X_in/X_out removes only overlap with OTHER same-side flows. This is not a whole machine or whole pallet. Real removed-part treatment and burden are retained whether authorised, failed or rejected. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Solid-wood pallet repair slat
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `ilcd-allocation`

###### Mineral lubricating-oil preparation (`lube_out`)

Actual drained spent mineral lubricating-oil preparation, only when actually used; no PAO/full-synthetic identity inferred. Measure oil/additives/free water separately as non-additive constituents; attached/installed/closing fluid stocks and real leaks/treatment are retained. One procurement/provider ownership, no fixed fill or replacement interval. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Mineral lubricating-oil preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `ilcd-allocation`

##### Elementary flows

###### H2O vapour release (`h2o_out_assets`)

Record actual moisture ingress/egress from ordinary storage/handling and wet work as well as repairs; no extra work permission is invented for natural exchange. Keep new influx plus full wet closing article/material stocks. Correct only genuinely overlapping other same-side flow terms, never erase stock-retained influx. If taken as part of measured humid intake/exhaust, use a disjoint species bridge. Native Elementary water vapour, CAS7732-18-5, emission to air unspecified; reference Mass only. Select actual gas-phase H2O leaving to the documented unspecified air compartment; liquid drainage/condensate has its own row. Not reaction-water inference from curing, COD, aerosol totals or an extra purchased heat carrier. A known urban/nonurban/long-term compartment requires the exact compatible identity instead. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_assets`
- Sources: `gong-rigid`; `greenlight-vent`; `ilcd-allocation`

###### Unreacted molecular oxygen exhaust (`o2_out_assets`)

Conditional actual ventilation/pressure-equalisation species. Measure complete gross leg and retain source/receptor, temperature/pressure and species assay; integrate a real rate once, not an already integrated volume again. No fixed air composition, oxygen consumption, stoichiometric reaction or nitrogen emission from total-N/NOx is assumed. Air aggregate is a non-additive bridge, never another procurement/emission. Only an actual controlled equipment/operation inlet or outlet crosses this gas boundary; ordinary surrounding atmosphere is not an invented extra ventilation operation. Keep event and metering ownership disjoint from every other process and the humid-air species bridge. Native Elementary molecular oxygen CAS7782-44-7, Mass, emission to unspecified air; broad synonyms including liquid/ionic labels do not override CAS and actual gaseous O2. Only observed unreacted atmospheric O2 in this unspecified compartment; no combustion or chemical stoichiometry assumed. Known urban/nonurban/long-term release needs its correct identity. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_assets`
- Sources: `greenlight-vent`; `ilcd-allocation`

###### Unreacted dinitrogen exhaust (`n2_out_assets`)

Conditional actual ventilation/pressure-equalisation species. Measure complete gross leg and retain source/receptor, temperature/pressure and species assay; integrate a real rate once, not an already integrated volume again. No fixed air composition, oxygen consumption, stoichiometric reaction or nitrogen emission from total-N/NOx is assumed. Air aggregate is a non-additive bridge, never another procurement/emission. Only an actual controlled equipment/operation inlet or outlet crosses this gas boundary; ordinary surrounding atmosphere is not an invented extra ventilation operation. Keep event and metering ownership disjoint from every other process and the humid-air species bridge. Native Elementary dinitrogen CAS7727-37-9, Mass, emission to unspecified air; molecular N2, not total nitrogen excluding N2, NOx or purchased liquid nitrogen. Observed unreacted ventilation species only; known urban/nonurban/long-term release requires its correct identity. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_assets`
- Sources: `greenlight-vent`; `ilcd-allocation`

###### Unreacted argon exhaust (`ar_out_assets`)

Conditional actual ventilation/pressure-equalisation species. Measure complete gross leg and retain source/receptor, temperature/pressure and species assay; integrate a real rate once, not an already integrated volume again. No fixed air composition, oxygen consumption, stoichiometric reaction or nitrogen emission from total-N/NOx is assumed. Air aggregate is a non-additive bridge, never another procurement/emission. Only an actual controlled equipment/operation inlet or outlet crosses this gas boundary; ordinary surrounding atmosphere is not an invented extra ventilation operation. Keep event and metering ownership disjoint from every other process and the humid-air species bridge. Native Elementary argon CAS7440-37-1, Mass, emission to unspecified air; broad isotope synonyms do not turn ordinary argon into a tracer. Actual unreacted air species only, with known compartment replaced by its precise native record. Reference unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, actual reference unit kg. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_assets`
- Sources: `greenlight-vent`; `ilcd-allocation`

### Process: Actual waste handling and external outlets (`waste`)

#### Inputs

##### Product flows

###### Metered alternating current (`power_waste`)

Actual attributed electricity for this operation, including extraction, environmental conditioning and all start/stop/idle/failed/cleanup work. Select the bound CN medium-voltage supply only when physically true; otherwise a correct supply binding is required, without asserting a core-method hold. Electric heating is owned here and not purchased heat again. Native Product alternating current, CN supply geography, 1–35kV medium voltage, grid-average consumption mix to user including upstream generation/transmission. Native reference Net calorific value/MJ. This binding applies only to that actual supply interface; other voltages/geographies require compatible replacement before dataset use. Meter real kWh and convert once by 3.6 to MJ; no Mass/kg rule or duplicated generation/transformer burden. Reference unit group is `93a60a57-a3c8-11da-a746-0800200c9a66`, actual reference unit MJ. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_waste`
- Sources: `greenlight-guide`; `ilcd-allocation`

##### Waste flows

###### Spent corrugated shipping carton (`receive_carton_w`)

One measured receiving leg matching carton_w exactly in material, wet mass, water, time and inherited burden vector. This is an internal handoff to actual waste handling, not an independent external import. Allocate source-pool W subaccounts of an actually mixed outlet without summing them again as additional exits. If independently segregated, retain only its actual external destination/treatment once. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Spent corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_waste`
- Sources: `ilcd-allocation`

###### Spent polyethylene protective wrapping film (`receive_pe_w`)

One measured receiving leg matching pe_w exactly in material, wet mass, water, time and inherited burden vector. This is an internal handoff to actual waste handling, not an independent external import. Allocate source-pool W subaccounts of an actually mixed outlet without summing them again as additional exits. If independently segregated, retain only its actual external destination/treatment once. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Spent polyethylene protective wrapping film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_waste`
- Sources: `ilcd-allocation`

###### Spent honeycomb paper protective wrap (`receive_paper_w`)

One measured receiving leg matching paper_w exactly in material, wet mass, water, time and inherited burden vector. This is an internal handoff to actual waste handling, not an independent external import. Allocate source-pool W subaccounts of an actually mixed outlet without summing them again as additional exits. If independently segregated, retain only its actual external destination/treatment once. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Spent honeycomb paper protective wrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_waste`
- Sources: `ilcd-allocation`

###### Spent wooden shipping pallet (`receive_pallet_w`)

One measured receiving leg matching pallet_w exactly in material, wet mass, water, time and inherited burden vector. This is an internal handoff to actual waste handling, not an independent external import. Allocate source-pool W subaccounts of an actually mixed outlet without summing them again as additional exits. If independently segregated, retain only its actual external destination/treatment once. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Spent wooden shipping pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_waste`
- Sources: `ilcd-allocation`

###### Spent bopp adhesive packing tape (`receive_tape_w`)

One measured receiving leg matching tape_w exactly in material, wet mass, water, time and inherited burden vector. This is an internal handoff to actual waste handling, not an independent external import. Allocate source-pool W subaccounts of an actually mixed outlet without summing them again as additional exits. If independently segregated, retain only its actual external destination/treatment once. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Spent bopp adhesive packing tape
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_waste`
- Sources: `ilcd-allocation`

###### Spent pet shipping strap (`receive_petstrap_w`)

One measured receiving leg matching petstrap_w exactly in material, wet mass, water, time and inherited burden vector. This is an internal handoff to actual waste handling, not an independent external import. Allocate source-pool W subaccounts of an actually mixed outlet without summing them again as additional exits. If independently segregated, retain only its actual external destination/treatment once. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Spent pet shipping strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_waste`
- Sources: `ilcd-allocation`

###### Expanded-polystyrene shaping offcut (`receive_eps_offcut_w`)

Actual internal reception of eps_offcut_w only; same wet composition, mass, event and inherited vectors. Not a second external waste. Do not aggregate this origin mass together with its already inclusive external mixed outlet. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Expanded-polystyrene shaping offcut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_waste`
- Sources: `ilcd-allocation`

###### Wood-stringer shaping offcut (`receive_wood_offcut_w`)

Actual internal reception of wood_offcut_w only; same wet composition, mass, event and inherited vectors. Not a second external waste. Do not aggregate this origin mass together with its already inclusive external mixed outlet. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Wood-stringer shaping offcut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_waste`
- Sources: `ilcd-allocation`

###### Dry woven-glass fabric offcut (`receive_dry_glass_trim_w`)

Actual internal reception of dry_glass_trim_w only; same wet composition, mass, event and inherited vectors. Not a second external waste. Do not aggregate this origin mass together with its already inclusive external mixed outlet. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Dry woven-glass fabric offcut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_waste`
- Sources: `ilcd-allocation`

###### Uncured mixed surfboard epoxy residue (`receive_uncured_epoxy_w`)

Actual internal reception of uncured_epoxy_w only; same wet composition, mass, event and inherited vectors. Not a second external waste. Do not aggregate this origin mass together with its already inclusive external mixed outlet. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Uncured mixed surfboard epoxy residue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_waste`
- Sources: `ilcd-allocation`

###### Cured glass-epoxy trimming residue (`receive_cured_composite_w`)

Actual internal reception of cured_composite_w only; same wet composition, mass, event and inherited vectors. Not a second external waste. Do not aggregate this origin mass together with its already inclusive external mixed outlet. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Cured glass-epoxy trimming residue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_waste`
- Sources: `ilcd-allocation`

###### Rejected EPS glass-epoxy board (`receive_failed_board_w`)

Actual internal reception of failed_board_w only; same wet composition, mass, event and inherited vectors. Not a second external waste. Do not aggregate this origin mass together with its already inclusive external mixed outlet. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Rejected EPS glass-epoxy board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_waste`
- Sources: `ilcd-allocation`

###### Contaminated surface-cleaning cloth (`receive_spent_cloth_w`)

Actual internal reception of spent_cloth_w only; same wet composition, mass, event and inherited vectors. Not a second external waste. Do not aggregate this origin mass together with its already inclusive external mixed outlet. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Contaminated surface-cleaning cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_waste`
- Sources: `ilcd-allocation`

###### Spent epoxy mixing cup (`receive_spent_cup_w`)

Actual internal reception of spent_cup_w only; same wet composition, mass, event and inherited vectors. Not a second external waste. Do not aggregate this origin mass together with its already inclusive external mixed outlet. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Spent epoxy mixing cup
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_waste`
- Sources: `ilcd-allocation`

###### Spent coated-abrasive sheet (`receive_spent_abrasive_w`)

Actual internal reception of spent_abrasive_w only; same wet composition, mass, event and inherited vectors. Not a second external waste. Do not aggregate this origin mass together with its already inclusive external mixed outlet. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Spent coated-abrasive sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_waste`
- Sources: `ilcd-allocation`

###### Spent epoxy chip brush (`receive_spent_brush_w`)

Actual internal reception of spent_brush_w only; same wet composition, mass, event and inherited vectors. Not a second external waste. Do not aggregate this origin mass together with its already inclusive external mixed outlet. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Spent epoxy chip brush
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_waste`
- Sources: `ilcd-allocation`

###### Spent paper masking tape (`receive_spent_mask_w`)

Actual internal reception of spent_mask_w only; same wet composition, mass, event and inherited vectors. Not a second external waste. Do not aggregate this origin mass together with its already inclusive external mixed outlet. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Spent paper masking tape
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_waste`
- Sources: `ilcd-allocation`

###### Spent vinyl glove (`receive_spent_glove_w`)

Actual internal reception of spent_glove_w only; same wet composition, mass, event and inherited vectors. Not a second external waste. Do not aggregate this origin mass together with its already inclusive external mixed outlet. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Spent vinyl glove
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_waste`
- Sources: `ilcd-allocation`

###### Uncured postrelease epoxy residue (`receive_service_epoxy_w`)

One actual internal receipt matching service_epoxy_w wet mass, state, event and original-cohort inherited vector; not another external import. Keep this source W non-additive with its inclusive external outlet total and preserve one true treatment/provider. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Uncured postrelease epoxy residue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_waste`
- Sources: `ilcd-allocation`

###### Cured postrelease glass-epoxy residue (`receive_service_composite_w`)

One actual internal receipt matching service_composite_w wet mass, state, event and original-cohort inherited vector; not another external import. Keep this source W non-additive with its inclusive external outlet total and preserve one true treatment/provider. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Cured postrelease glass-epoxy residue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_waste`
- Sources: `ilcd-allocation`

###### Spent postrelease abrasive sheet (`receive_service_abrasive_w`)

One actual internal receipt matching service_abrasive_w wet mass, state, event and original-cohort inherited vector; not another external import. Keep this source W non-additive with its inclusive external outlet total and preserve one true treatment/provider. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Spent postrelease abrasive sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_waste`
- Sources: `ilcd-allocation`

###### Contaminated postrelease cleaning cloth (`receive_service_cloth_w`)

One actual internal receipt matching service_cloth_w wet mass, state, event and original-cohort inherited vector; not another external import. Keep this source W non-additive with its inclusive external outlet total and preserve one true treatment/provider. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Contaminated postrelease cleaning cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_waste`
- Sources: `ilcd-allocation`

###### Removed old surfboard fin-box insert (`receive_service_insert_w`)

One actual internal receipt matching service_insert_w wet mass, state, event and original-cohort inherited vector; not another external import. Keep this source W non-additive with its inclusive external outlet total and preserve one true treatment/provider. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Removed old surfboard fin-box insert
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_waste`
- Sources: `ilcd-allocation`

###### Removed old vented leash-plug component (`receive_service_plug_w`)

One actual internal receipt matching service_plug_w wet mass, state, event and original-cohort inherited vector; not another external import. Keep this source W non-additive with its inclusive external outlet total and preserve one true treatment/provider. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Removed old vented leash-plug component
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_waste`
- Sources: `ilcd-allocation`

###### Rejected postrelease EPS glass-epoxy board (`receive_service_board_w`)

One actual internal receipt matching service_board_w wet mass, state, event and original-cohort inherited vector; not another external import. Keep this source W non-additive with its inclusive external outlet total and preserve one true treatment/provider. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Rejected postrelease EPS glass-epoxy board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_waste`
- Sources: `ilcd-allocation`

#### Outputs

##### Waste flows

###### Qualified co-collected surfboard-workshop solid residue (`out_mixed_solid`)

Only when one actual legally/technically compatible co-collected solid outlet exists, one external atomic Waste exchange represents its independently measured whole wet gross mass and actual treatment/provider once. Each origin-W remains independently measured as a non-additive source subaccount; origin sum reconciles to this total plus real storage and other real disjoint destinations. Incompatible uncured chemicals/clean recyclable packaging/metal/oil are segregated where actually required, with their own specifically named external cards before use; this card cannot conceal an unobserved mixed outlet or replace separate real exits. No sales credit or manufacturing-burden deduction by default. UUID unconfirmed; bind only after this single actual identity, full native state and real provider fit are confirmed. Bounded queries do not prove database absence. This card explicitly uses complete actual gross leg V_i for its sole physical quotient, never A_c/A_H, B_open+U-B_close or an economic share. Its real burden dimension is separately owned once; disclosure creates no purchase/provider burden or credit.

- Selected flow: Qualified co-collected surfboard-workshop solid residue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_i / D; reference the same sole quotient result in section 8, this card N=complete actual gross leg V_i, not a burden vector or stock-corrected amount. Manufacturing D=Q; original-cohort service and its gross legs D=original Q_H. Q0 has no unit result; no further division or economic scaling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_waste`
- Sources: `ilcd-allocation`; `greenlight-glass`; `greenlight-sand`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_first | all burdens | This is attributional accounting only where allocation is appropriate under the declared study situation. First use independent meters, work orders and dedicated/physical or virtual subdivision by board/configuration/cohort. Assign actual embodied inputs to their receiving object and keep failed/startup/cleanup burdens. Do not replace a consequential question by silently imposing attributional allocation. | `ilcd-allocation` |
| allocation_causal | each remaining exchange | For each still-shared nonfunctional exchange demonstrate the determining physical causal relationship to functions; different exchanges can require different causes. Mass, cure occupancy or operating time is not selected merely for availability. Keep measured gross physical V unchanged while attributing the actual burden dimension. | `ilcd-allocation` |
| allocation_residual | true common-process residual | Only the genuinely inseparable remainder after the preceding steps uses actual co-function market value in its real condition and at the same common process gate and time. Subtract downstream transport/conditioning/packing value if starting from later price; keep quantity-price basis and sensitivity. No universal economic split, fixed share or arbitrary choice between physical and economic allocation. | `ilcd-allocation` |
| allocation_no_credit | internal loops; losses; waste | Internal transfers, resin reuse, packaging reuse and same-cohort rework have no automatic co-product/substitution credit. Ordinary waste, rejected/sampled/damaged boards and their treatment remain attributable even if sent away or sold. A true independent other function/cohort requires an explicit justified allocation/handover vector once; no unsupported avoided-burden claim. | `ilcd-allocation` |
| allocation_stock | manufacture; original-cohort services | Manufacture tracks each opening/closing raw/WIP and unassigned-store burden vector; already stock-corrected use has no second correction. Released closing FG already belongs to Q. Performed original-cohort storage/handling/packing/work stays in A_H despite closing FG; only genuinely unused/unassigned charges carry. Capital service is distinct from gross asset purchases and each provider is counted once. | `ilcd-allocation` |
| allocation_q0 | Q; Q_H | Q and Q_H are original unique first-release net whole-board kg. All allocation and native-unit conversions precede the one calc_quotient. When the relevant denominator is zero retain actual raw physical and burden accounts without a unit result; never redistribute an orphan period merely to make a quotient. | `ilcd-allocation` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Collection retains undivided raw records. Basis and aggregation fields declare the same final reporting granularity and never execute another division. Actual named owners/site/configuration/full cohort/H require traceable evidence. These are prospective real-data requirements, not claims that factory observations already exist.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material_shape | shape | in_eps_blank | raw_event_and_stock_record | event_id; timestamp; actual operator and accountable owner; site; configuration; original cohort; operation; row_id; direction; material or species and actual state; raw amount and unit; instrument calibration; uncertainty; external or paired internal event; provider and upstream owner; opening and closing physical wet stocks; per-exchange inherited burden vectors; actual losses and destination; failure and hold disposition | Assigned site materials/production accountant retains undivided calibrated receipt/issue/return and full-period observations. Preserve whole supplied formulations/articles once; assay and water are non-additive subledgers. No normalisation in collection. | kg | Each event and opening/closing endpoints | Complete actual cohort and associated observed service H including failures Q0 startup idle cleanup rework | Actual plant/configuration and original cohort with full cross-period inherited vectors | per 1 kg reference flow | Calibration; original tickets; state/composition; tests/disposition; upstream ownership; uncertainty |
| cp_material_laminate | laminate | in_glass_cloth; in_resin_base; in_hardener; in_finbox; in_mask; in_cup; in_stick; in_soap; in_glove; in_silica; in_logo | raw_event_and_stock_record | event_id; timestamp; actual operator and accountable owner; site; configuration; original cohort; operation; row_id; direction; material or species and actual state; raw amount and unit; instrument calibration; uncertainty; external or paired internal event; provider and upstream owner; opening and closing physical wet stocks; per-exchange inherited burden vectors; actual losses and destination; failure and hold disposition | Assigned site materials/production accountant retains undivided calibrated receipt/issue/return and full-period observations. Preserve whole supplied formulations/articles once; assay and water are non-additive subledgers. No normalisation in collection. | kg | Each event and opening/closing endpoints | Complete actual cohort and associated observed service H including failures Q0 startup idle cleanup rework | Actual plant/configuration and original cohort with full cross-period inherited vectors | per 1 kg reference flow | Calibration; original tickets; state/composition; tests/disposition; upstream ownership; uncertainty |
| cp_material_finish | finish | in_ventkit; in_rag; in_alcohol; in_sealadd; in_brush; in_abrasive | raw_event_and_stock_record | event_id; timestamp; actual operator and accountable owner; site; configuration; original cohort; operation; row_id; direction; material or species and actual state; raw amount and unit; instrument calibration; uncertainty; external or paired internal event; provider and upstream owner; opening and closing physical wet stocks; per-exchange inherited burden vectors; actual losses and destination; failure and hold disposition | Assigned site materials/production accountant retains undivided calibrated receipt/issue/return and full-period observations. Preserve whole supplied formulations/articles once; assay and water are non-additive subledgers. No normalisation in collection. | kg | Each event and opening/closing endpoints | Complete actual cohort and associated observed service H including failures Q0 startup idle cleanup rework | Actual plant/configuration and original cohort with full cross-period inherited vectors | per 1 kg reference flow | Calibration; original tickets; state/composition; tests/disposition; upstream ownership; uncertainty |
| cp_energy_shape | shape | power_shape | raw_event_and_stock_record | event_id; timestamp; actual operator and accountable owner; site; configuration; original cohort; operation; row_id; direction; material or species and actual state; raw amount and unit; instrument calibration; uncertainty; external or paired internal event; provider and upstream owner; opening and closing physical wet stocks; per-exchange inherited burden vectors; actual losses and destination; failure and hold disposition; meter start/end or real power-time series; kWh; native MJ; load state; actual voltage and supply geography; electric-heat overlap; asset service ownership; startup shutdown idle failed cleanup intervals | Energy owner records unnormalised submeter readings or documented whole-meter causal attribution for all actual operations and failures. Distinguish rate from integrated total; convert actual kWh to MJ once in calc_raw. No kg rule, inferred zero or second heat purchase. | MJ | Each event and opening/closing endpoints | Complete actual cohort and associated observed service H including failures Q0 startup idle cleanup rework | Actual plant/configuration and original cohort with full cross-period inherited vectors | per 1 kg reference flow | Calibration; original tickets; state/composition; tests/disposition; upstream ownership; uncertainty |
| cp_energy_laminate | laminate | power_laminate | raw_event_and_stock_record | event_id; timestamp; actual operator and accountable owner; site; configuration; original cohort; operation; row_id; direction; material or species and actual state; raw amount and unit; instrument calibration; uncertainty; external or paired internal event; provider and upstream owner; opening and closing physical wet stocks; per-exchange inherited burden vectors; actual losses and destination; failure and hold disposition; meter start/end or real power-time series; kWh; native MJ; load state; actual voltage and supply geography; electric-heat overlap; asset service ownership; startup shutdown idle failed cleanup intervals | Energy owner records unnormalised submeter readings or documented whole-meter causal attribution for all actual operations and failures. Distinguish rate from integrated total; convert actual kWh to MJ once in calc_raw. No kg rule, inferred zero or second heat purchase. | MJ | Each event and opening/closing endpoints | Complete actual cohort and associated observed service H including failures Q0 startup idle cleanup rework | Actual plant/configuration and original cohort with full cross-period inherited vectors | per 1 kg reference flow | Calibration; original tickets; state/composition; tests/disposition; upstream ownership; uncertainty |
| cp_energy_finish | finish | power_finish | raw_event_and_stock_record | event_id; timestamp; actual operator and accountable owner; site; configuration; original cohort; operation; row_id; direction; material or species and actual state; raw amount and unit; instrument calibration; uncertainty; external or paired internal event; provider and upstream owner; opening and closing physical wet stocks; per-exchange inherited burden vectors; actual losses and destination; failure and hold disposition; meter start/end or real power-time series; kWh; native MJ; load state; actual voltage and supply geography; electric-heat overlap; asset service ownership; startup shutdown idle failed cleanup intervals | Energy owner records unnormalised submeter readings or documented whole-meter causal attribution for all actual operations and failures. Distinguish rate from integrated total; convert actual kWh to MJ once in calc_raw. No kg rule, inferred zero or second heat purchase. | MJ | Each event and opening/closing endpoints | Complete actual cohort and associated observed service H including failures Q0 startup idle cleanup rework | Actual plant/configuration and original cohort with full cross-period inherited vectors | per 1 kg reference flow | Calibration; original tickets; state/composition; tests/disposition; upstream ownership; uncertainty |
| cp_energy_service | service | power_service | raw_event_and_stock_record | event_id; timestamp; actual operator and accountable owner; site; configuration; original cohort; operation; row_id; direction; material or species and actual state; raw amount and unit; instrument calibration; uncertainty; external or paired internal event; provider and upstream owner; opening and closing physical wet stocks; per-exchange inherited burden vectors; actual losses and destination; failure and hold disposition; meter start/end or real power-time series; kWh; native MJ; load state; actual voltage and supply geography; electric-heat overlap; asset service ownership; startup shutdown idle failed cleanup intervals | Energy owner records unnormalised submeter readings or documented whole-meter causal attribution for all actual operations and failures. Distinguish rate from integrated total; convert actual kWh to MJ once in calc_raw. No kg rule, inferred zero or second heat purchase. | MJ | Each event and opening/closing endpoints | Complete actual cohort and associated observed service H including failures Q0 startup idle cleanup rework | Actual plant/configuration and original cohort with full cross-period inherited vectors | per 1 kg reference flow | Calibration; original tickets; state/composition; tests/disposition; upstream ownership; uncertainty |
| cp_energy_assets | assets | power_assets | raw_event_and_stock_record | event_id; timestamp; actual operator and accountable owner; site; configuration; original cohort; operation; row_id; direction; material or species and actual state; raw amount and unit; instrument calibration; uncertainty; external or paired internal event; provider and upstream owner; opening and closing physical wet stocks; per-exchange inherited burden vectors; actual losses and destination; failure and hold disposition; meter start/end or real power-time series; kWh; native MJ; load state; actual voltage and supply geography; electric-heat overlap; asset service ownership; startup shutdown idle failed cleanup intervals | Energy owner records unnormalised submeter readings or documented whole-meter causal attribution for all actual operations and failures. Distinguish rate from integrated total; convert actual kWh to MJ once in calc_raw. No kg rule, inferred zero or second heat purchase. | MJ | Each event and opening/closing endpoints | Complete actual cohort and associated observed service H including failures Q0 startup idle cleanup rework | Actual plant/configuration and original cohort with full cross-period inherited vectors | per 1 kg reference flow | Calibration; original tickets; state/composition; tests/disposition; upstream ownership; uncertainty |
| cp_energy_waste | waste | power_waste | raw_event_and_stock_record | event_id; timestamp; actual operator and accountable owner; site; configuration; original cohort; operation; row_id; direction; material or species and actual state; raw amount and unit; instrument calibration; uncertainty; external or paired internal event; provider and upstream owner; opening and closing physical wet stocks; per-exchange inherited burden vectors; actual losses and destination; failure and hold disposition; meter start/end or real power-time series; kWh; native MJ; load state; actual voltage and supply geography; electric-heat overlap; asset service ownership; startup shutdown idle failed cleanup intervals | Energy owner records unnormalised submeter readings or documented whole-meter causal attribution for all actual operations and failures. Distinguish rate from integrated total; convert actual kWh to MJ once in calc_raw. No kg rule, inferred zero or second heat purchase. | MJ | Each event and opening/closing endpoints | Complete actual cohort and associated observed service H including failures Q0 startup idle cleanup rework | Actual plant/configuration and original cohort with full cross-period inherited vectors | per 1 kg reference flow | Calibration; original tickets; state/composition; tests/disposition; upstream ownership; uncertainty |
| cp_water_laminate | laminate | water_laminate; out_washwater_laminate | raw_event_and_stock_record | event_id; timestamp; actual operator and accountable owner; site; configuration; original cohort; operation; row_id; direction; material or species and actual state; raw amount and unit; instrument calibration; uncertainty; external or paired internal event; provider and upstream owner; opening and closing physical wet stocks; per-exchange inherited burden vectors; actual losses and destination; failure and hold disposition; liquid phase; temperature pressure composition; volume rate or integrated total; independently measured density at actual state; supplied whole water; wastewater liquid mass and actual solids/species; condensate or external Product return if real | Water/effluent owner measures raw supply and liquid-outlet balances with independent state-specific density where needed, full wet articles and natural humidity bridge. Do not use tap-water secondary coefficient as density; no reaction-water or boiler assumption, no normalisation here. | kg | Each event and opening/closing endpoints | Complete actual cohort and associated observed service H including failures Q0 startup idle cleanup rework | Actual plant/configuration and original cohort with full cross-period inherited vectors | per 1 kg reference flow | Calibration; original tickets; state/composition; tests/disposition; upstream ownership; uncertainty |
| cp_water_finish | finish | water_finish; out_washwater_finish | raw_event_and_stock_record | event_id; timestamp; actual operator and accountable owner; site; configuration; original cohort; operation; row_id; direction; material or species and actual state; raw amount and unit; instrument calibration; uncertainty; external or paired internal event; provider and upstream owner; opening and closing physical wet stocks; per-exchange inherited burden vectors; actual losses and destination; failure and hold disposition; liquid phase; temperature pressure composition; volume rate or integrated total; independently measured density at actual state; supplied whole water; wastewater liquid mass and actual solids/species; condensate or external Product return if real | Water/effluent owner measures raw supply and liquid-outlet balances with independent state-specific density where needed, full wet articles and natural humidity bridge. Do not use tap-water secondary coefficient as density; no reaction-water or boiler assumption, no normalisation here. | kg | Each event and opening/closing endpoints | Complete actual cohort and associated observed service H including failures Q0 startup idle cleanup rework | Actual plant/configuration and original cohort with full cross-period inherited vectors | per 1 kg reference flow | Calibration; original tickets; state/composition; tests/disposition; upstream ownership; uncertainty |
| cp_water_service | service | water_service; out_washwater_service | raw_event_and_stock_record | event_id; timestamp; actual operator and accountable owner; site; configuration; original cohort; operation; row_id; direction; material or species and actual state; raw amount and unit; instrument calibration; uncertainty; external or paired internal event; provider and upstream owner; opening and closing physical wet stocks; per-exchange inherited burden vectors; actual losses and destination; failure and hold disposition; liquid phase; temperature pressure composition; volume rate or integrated total; independently measured density at actual state; supplied whole water; wastewater liquid mass and actual solids/species; condensate or external Product return if real | Water/effluent owner measures raw supply and liquid-outlet balances with independent state-specific density where needed, full wet articles and natural humidity bridge. Do not use tap-water secondary coefficient as density; no reaction-water or boiler assumption, no normalisation here. | kg | Each event and opening/closing endpoints | Complete actual cohort and associated observed service H including failures Q0 startup idle cleanup rework | Actual plant/configuration and original cohort with full cross-period inherited vectors | per 1 kg reference flow | Calibration; original tickets; state/composition; tests/disposition; upstream ownership; uncertainty |
| cp_water_assets | assets | water_assets; out_washwater_assets | raw_event_and_stock_record | event_id; timestamp; actual operator and accountable owner; site; configuration; original cohort; operation; row_id; direction; material or species and actual state; raw amount and unit; instrument calibration; uncertainty; external or paired internal event; provider and upstream owner; opening and closing physical wet stocks; per-exchange inherited burden vectors; actual losses and destination; failure and hold disposition; liquid phase; temperature pressure composition; volume rate or integrated total; independently measured density at actual state; supplied whole water; wastewater liquid mass and actual solids/species; condensate or external Product return if real | Water/effluent owner measures raw supply and liquid-outlet balances with independent state-specific density where needed, full wet articles and natural humidity bridge. Do not use tap-water secondary coefficient as density; no reaction-water or boiler assumption, no normalisation here. | kg | Each event and opening/closing endpoints | Complete actual cohort and associated observed service H including failures Q0 startup idle cleanup rework | Actual plant/configuration and original cohort with full cross-period inherited vectors | per 1 kg reference flow | Calibration; original tickets; state/composition; tests/disposition; upstream ownership; uncertainty |
| cp_species_laminate | laminate | h2o_in_laminate; h2o_out_laminate; o2_in; o2_out; ar_in; ar_out; n2_out; n2_in | raw_event_and_stock_record | event_id; timestamp; actual operator and accountable owner; site; configuration; original cohort; operation; row_id; direction; material or species and actual state; raw amount and unit; instrument calibration; uncertainty; external or paired internal event; provider and upstream owner; opening and closing physical wet stocks; per-exchange inherited burden vectors; actual losses and destination; failure and hold disposition; true molecular identity and CAS where established; gas/particle phase; actual inlet/outlet receptor compartment; temperature pressure humidity and gas composition; actual volume total versus rate; capture efficiency independently observed; direct H2O uptake/loss including storage; whole humid-air bridge and disjoint species | Environmental measurement owner records actual unnormalised species and receptor/state evidence; independently verify H2O, dry gases and particles. Integrate only real rates, never multiply an integrated volume by time. Do not infer a molecule from VOC/COD/total-N/carbon/particle-size totals; keep detection limits and unavailable species unresolved. Natural absorption and evaporation are actual physical events without fictitious repair permission. | m3; kg | Each event and opening/closing endpoints | Complete actual cohort and associated observed service H including failures Q0 startup idle cleanup rework | Actual plant/configuration and original cohort with full cross-period inherited vectors | per 1 kg reference flow | Calibration; original tickets; state/composition; tests/disposition; upstream ownership; uncertainty |
| cp_species_service | service | h2o_in_service; h2o_out_service; o2_in_service; o2_out_service; n2_in_service; n2_out_service; ar_in_service; ar_out_service | raw_event_and_stock_record | event_id; timestamp; actual operator and accountable owner; site; configuration; original cohort; operation; row_id; direction; material or species and actual state; raw amount and unit; instrument calibration; uncertainty; external or paired internal event; provider and upstream owner; opening and closing physical wet stocks; per-exchange inherited burden vectors; actual losses and destination; failure and hold disposition; true molecular identity and CAS where established; gas/particle phase; actual inlet/outlet receptor compartment; temperature pressure humidity and gas composition; actual volume total versus rate; capture efficiency independently observed; direct H2O uptake/loss including storage; whole humid-air bridge and disjoint species | Environmental measurement owner records actual unnormalised species and receptor/state evidence; independently verify H2O, dry gases and particles. Integrate only real rates, never multiply an integrated volume by time. Do not infer a molecule from VOC/COD/total-N/carbon/particle-size totals; keep detection limits and unavailable species unresolved. Natural absorption and evaporation are actual physical events without fictitious repair permission. | m3; kg | Each event and opening/closing endpoints | Complete actual cohort and associated observed service H including failures Q0 startup idle cleanup rework | Actual plant/configuration and original cohort with full cross-period inherited vectors | per 1 kg reference flow | Calibration; original tickets; state/composition; tests/disposition; upstream ownership; uncertainty |
| cp_species_assets | assets | h2o_in_assets; h2o_out_assets; o2_in_assets; o2_out_assets; n2_in_assets; n2_out_assets; ar_in_assets; ar_out_assets | raw_event_and_stock_record | event_id; timestamp; actual operator and accountable owner; site; configuration; original cohort; operation; row_id; direction; material or species and actual state; raw amount and unit; instrument calibration; uncertainty; external or paired internal event; provider and upstream owner; opening and closing physical wet stocks; per-exchange inherited burden vectors; actual losses and destination; failure and hold disposition; true molecular identity and CAS where established; gas/particle phase; actual inlet/outlet receptor compartment; temperature pressure humidity and gas composition; actual volume total versus rate; capture efficiency independently observed; direct H2O uptake/loss including storage; whole humid-air bridge and disjoint species | Environmental measurement owner records actual unnormalised species and receptor/state evidence; independently verify H2O, dry gases and particles. Integrate only real rates, never multiply an integrated volume by time. Do not infer a molecule from VOC/COD/total-N/carbon/particle-size totals; keep detection limits and unavailable species unresolved. Natural absorption and evaporation are actual physical events without fictitious repair permission. | m3; kg | Each event and opening/closing endpoints | Complete actual cohort and associated observed service H including failures Q0 startup idle cleanup rework | Actual plant/configuration and original cohort with full cross-period inherited vectors | per 1 kg reference flow | Calibration; original tickets; state/composition; tests/disposition; upstream ownership; uncertainty |
| cp_species_finish | finish | ethanol_air; eps_dust_air; wood_dust_air; composite_dust_air; h2o_in_finish; h2o_out_finish; o2_in_finish; o2_out_finish; n2_in_finish; n2_out_finish; ar_in_finish; ar_out_finish | raw_event_and_stock_record | event_id; timestamp; actual operator and accountable owner; site; configuration; original cohort; operation; row_id; direction; material or species and actual state; raw amount and unit; instrument calibration; uncertainty; external or paired internal event; provider and upstream owner; opening and closing physical wet stocks; per-exchange inherited burden vectors; actual losses and destination; failure and hold disposition; true molecular identity and CAS where established; gas/particle phase; actual inlet/outlet receptor compartment; temperature pressure humidity and gas composition; actual volume total versus rate; capture efficiency independently observed; direct H2O uptake/loss including storage; whole humid-air bridge and disjoint species | Environmental measurement owner records actual unnormalised species and receptor/state evidence; independently verify H2O, dry gases and particles. Integrate only real rates, never multiply an integrated volume by time. Do not infer a molecule from VOC/COD/total-N/carbon/particle-size totals; keep detection limits and unavailable species unresolved. Natural absorption and evaporation are actual physical events without fictitious repair permission. | kg; m3 | Each event and opening/closing endpoints | Complete actual cohort and associated observed service H including failures Q0 startup idle cleanup rework | Actual plant/configuration and original cohort with full cross-period inherited vectors | per 1 kg reference flow | Calibration; original tickets; state/composition; tests/disposition; upstream ownership; uncertainty |
| cp_release | finish | out_board | raw_event_and_stock_record | event_id; timestamp; actual operator and accountable owner; site; configuration; original cohort; operation; row_id; direction; material or species and actual state; raw amount and unit; instrument calibration; uncertainty; external or paired internal event; provider and upstream owner; opening and closing physical wet stocks; per-exchange inherited burden vectors; actual losses and destination; failure and hold disposition; serial first_release flag; complete supplied BOM and installed state; actual same-configuration net whole-board mass; packaging tare; actual moisture condition; first acceptance criteria and test/inspection result; original release cohort Q; released closingFG; opening/closingWIP; rejected/sampled/failed mass; gross dispatch and true returns linked to original event | QA/warehouse owners weigh each complete accepted board on a calibrated scale excluding transport packaging; reconcile supplied configuration, actual moisture state, fin-box/vent-kit installation and serial first acceptance. Q is the sum of those unique net kg including released closing FG. Record count and independently measured M for each same-configuration board if an item/kg bridge is needed; no catalogue weight, secondary property or guessed kg/item. Retain Q0, rejections and all raw stock/dispatch/return records; do not divide here. | kg | Each event and opening/closing endpoints | Complete actual cohort and associated observed service H including failures Q0 startup idle cleanup rework | Actual plant/configuration and original cohort with full cross-period inherited vectors | per 1 kg reference flow | Calibration; original tickets; state/composition; tests/disposition; upstream ownership; uncertainty |
| cp_pack_carton | pack | carton_p; carton_i; carton_er; carton_s; carton_eo; carton_w | raw_event_and_stock_record | event_id; timestamp; actual operator and accountable owner; site; configuration; original cohort; operation; row_id; direction; material or species and actual state; raw amount and unit; instrument calibration; uncertainty; external or paired internal event; provider and upstream owner; opening and closing physical wet stocks; per-exchange inherited burden vectors; actual losses and destination; failure and hold disposition; P separate procurement; I supplier-included ingress and upstream owner; ER real external returned receipt; S attached to gross physical dispatch; EO real external return; W pool-to-waste transfer; opening empty/attachedWIP/attachedFG/reusable; closing complete wet stock; repair material and moisture influx; OTHER same-side overlap X | Packaging/warehouse owner weighs each actual carton event separately by its six named cards and complete wet pool stocks. Whole supplied wet article and disjoint component bridges cannot overlap. Retain I physically and one upstream owner. P/I/ER/S/EO/W are full V, with no stock correction or economic scaling; X removes only other overlapping same-side flow terms, never stock-retained new input. Pair W to waste reception and cancel at combined gate; internal reuse is not external procurement. No division here. | kg | Each event and opening/closing endpoints | Complete actual cohort and associated observed service H including failures Q0 startup idle cleanup rework | Actual plant/configuration and original cohort with full cross-period inherited vectors | per 1 kg reference flow | Calibration; original tickets; state/composition; tests/disposition; upstream ownership; uncertainty |
| cp_waste_waste | waste | receive_carton_w; receive_pe_w; receive_paper_w; receive_pallet_w; receive_tape_w; receive_petstrap_w; receive_eps_offcut_w; receive_wood_offcut_w; receive_dry_glass_trim_w; receive_uncured_epoxy_w; receive_cured_composite_w; receive_failed_board_w; receive_spent_cloth_w; receive_spent_cup_w; receive_spent_abrasive_w; receive_spent_brush_w; receive_spent_mask_w; receive_spent_glove_w; out_mixed_solid; receive_service_epoxy_w; receive_service_composite_w; receive_service_abrasive_w; receive_service_cloth_w; receive_service_insert_w; receive_service_plug_w; receive_service_board_w | raw_event_and_stock_record | event_id; timestamp; actual operator and accountable owner; site; configuration; original cohort; operation; row_id; direction; material or species and actual state; raw amount and unit; instrument calibration; uncertainty; external or paired internal event; provider and upstream owner; opening and closing physical wet stocks; per-exchange inherited burden vectors; actual losses and destination; failure and hold disposition; every separate origin_W; paired internal receive event; independently weighed external mixed or separate outlet total; retained wet stock; actual waste qualification and hazard/cure state; real destination and treatment receipt; source component fractions independently observed; one provider ownership | Waste owner measures each genuine origin transfer and external exit independently. Match/cancel internal pairs; origin W subledgers reconcile but are not additional external exchanges over the already inclusive total. One actual mixed outlet has one qualified Waste card and one treatment/provider; actual segregated outlets need their own compatible atomic cards. Preserve all manufacturing/treatment burdens absent a justified independent function/cohort transfer. | kg | Each event and opening/closing endpoints | Complete actual cohort and associated observed service H including failures Q0 startup idle cleanup rework | Actual plant/configuration and original cohort with full cross-period inherited vectors | per 1 kg reference flow | Calibration; original tickets; state/composition; tests/disposition; upstream ownership; uncertainty |
| cp_pack_pe | pack | pe_p; pe_i; pe_er; pe_s; pe_eo; pe_w | raw_event_and_stock_record | event_id; timestamp; actual operator and accountable owner; site; configuration; original cohort; operation; row_id; direction; material or species and actual state; raw amount and unit; instrument calibration; uncertainty; external or paired internal event; provider and upstream owner; opening and closing physical wet stocks; per-exchange inherited burden vectors; actual losses and destination; failure and hold disposition; P separate procurement; I supplier-included ingress and upstream owner; ER real external returned receipt; S attached to gross physical dispatch; EO real external return; W pool-to-waste transfer; opening empty/attachedWIP/attachedFG/reusable; closing complete wet stock; repair material and moisture influx; OTHER same-side overlap X | Packaging/warehouse owner weighs each actual pe event separately by its six named cards and complete wet pool stocks. Whole supplied wet article and disjoint component bridges cannot overlap. Retain I physically and one upstream owner. P/I/ER/S/EO/W are full V, with no stock correction or economic scaling; X removes only other overlapping same-side flow terms, never stock-retained new input. Pair W to waste reception and cancel at combined gate; internal reuse is not external procurement. No division here. | kg | Each event and opening/closing endpoints | Complete actual cohort and associated observed service H including failures Q0 startup idle cleanup rework | Actual plant/configuration and original cohort with full cross-period inherited vectors | per 1 kg reference flow | Calibration; original tickets; state/composition; tests/disposition; upstream ownership; uncertainty |
| cp_pack_paper | pack | paper_p; paper_i; paper_er; paper_s; paper_eo; paper_w | raw_event_and_stock_record | event_id; timestamp; actual operator and accountable owner; site; configuration; original cohort; operation; row_id; direction; material or species and actual state; raw amount and unit; instrument calibration; uncertainty; external or paired internal event; provider and upstream owner; opening and closing physical wet stocks; per-exchange inherited burden vectors; actual losses and destination; failure and hold disposition; P separate procurement; I supplier-included ingress and upstream owner; ER real external returned receipt; S attached to gross physical dispatch; EO real external return; W pool-to-waste transfer; opening empty/attachedWIP/attachedFG/reusable; closing complete wet stock; repair material and moisture influx; OTHER same-side overlap X | Packaging/warehouse owner weighs each actual paper event separately by its six named cards and complete wet pool stocks. Whole supplied wet article and disjoint component bridges cannot overlap. Retain I physically and one upstream owner. P/I/ER/S/EO/W are full V, with no stock correction or economic scaling; X removes only other overlapping same-side flow terms, never stock-retained new input. Pair W to waste reception and cancel at combined gate; internal reuse is not external procurement. No division here. | kg | Each event and opening/closing endpoints | Complete actual cohort and associated observed service H including failures Q0 startup idle cleanup rework | Actual plant/configuration and original cohort with full cross-period inherited vectors | per 1 kg reference flow | Calibration; original tickets; state/composition; tests/disposition; upstream ownership; uncertainty |
| cp_pack_pallet | pack | pallet_p; pallet_i; pallet_er; pallet_s; pallet_eo; pallet_w | raw_event_and_stock_record | event_id; timestamp; actual operator and accountable owner; site; configuration; original cohort; operation; row_id; direction; material or species and actual state; raw amount and unit; instrument calibration; uncertainty; external or paired internal event; provider and upstream owner; opening and closing physical wet stocks; per-exchange inherited burden vectors; actual losses and destination; failure and hold disposition; P separate procurement; I supplier-included ingress and upstream owner; ER real external returned receipt; S attached to gross physical dispatch; EO real external return; W pool-to-waste transfer; opening empty/attachedWIP/attachedFG/reusable; closing complete wet stock; repair material and moisture influx; OTHER same-side overlap X | Packaging/warehouse owner weighs each actual pallet event separately by its six named cards and complete wet pool stocks. Whole supplied wet article and disjoint component bridges cannot overlap. Retain I physically and one upstream owner. P/I/ER/S/EO/W are full V, with no stock correction or economic scaling; X removes only other overlapping same-side flow terms, never stock-retained new input. Pair W to waste reception and cancel at combined gate; internal reuse is not external procurement. No division here. | kg | Each event and opening/closing endpoints | Complete actual cohort and associated observed service H including failures Q0 startup idle cleanup rework | Actual plant/configuration and original cohort with full cross-period inherited vectors | per 1 kg reference flow | Calibration; original tickets; state/composition; tests/disposition; upstream ownership; uncertainty |
| cp_pack_tape | pack | tape_p; tape_i; tape_er; tape_s; tape_eo; tape_w | raw_event_and_stock_record | event_id; timestamp; actual operator and accountable owner; site; configuration; original cohort; operation; row_id; direction; material or species and actual state; raw amount and unit; instrument calibration; uncertainty; external or paired internal event; provider and upstream owner; opening and closing physical wet stocks; per-exchange inherited burden vectors; actual losses and destination; failure and hold disposition; P separate procurement; I supplier-included ingress and upstream owner; ER real external returned receipt; S attached to gross physical dispatch; EO real external return; W pool-to-waste transfer; opening empty/attachedWIP/attachedFG/reusable; closing complete wet stock; repair material and moisture influx; OTHER same-side overlap X | Packaging/warehouse owner weighs each actual tape event separately by its six named cards and complete wet pool stocks. Whole supplied wet article and disjoint component bridges cannot overlap. Retain I physically and one upstream owner. P/I/ER/S/EO/W are full V, with no stock correction or economic scaling; X removes only other overlapping same-side flow terms, never stock-retained new input. Pair W to waste reception and cancel at combined gate; internal reuse is not external procurement. No division here. | kg | Each event and opening/closing endpoints | Complete actual cohort and associated observed service H including failures Q0 startup idle cleanup rework | Actual plant/configuration and original cohort with full cross-period inherited vectors | per 1 kg reference flow | Calibration; original tickets; state/composition; tests/disposition; upstream ownership; uncertainty |
| cp_pack_petstrap | pack | petstrap_p; petstrap_i; petstrap_er; petstrap_s; petstrap_eo; petstrap_w | raw_event_and_stock_record | event_id; timestamp; actual operator and accountable owner; site; configuration; original cohort; operation; row_id; direction; material or species and actual state; raw amount and unit; instrument calibration; uncertainty; external or paired internal event; provider and upstream owner; opening and closing physical wet stocks; per-exchange inherited burden vectors; actual losses and destination; failure and hold disposition; P separate procurement; I supplier-included ingress and upstream owner; ER real external returned receipt; S attached to gross physical dispatch; EO real external return; W pool-to-waste transfer; opening empty/attachedWIP/attachedFG/reusable; closing complete wet stock; repair material and moisture influx; OTHER same-side overlap X | Packaging/warehouse owner weighs each actual petstrap event separately by its six named cards and complete wet pool stocks. Whole supplied wet article and disjoint component bridges cannot overlap. Retain I physically and one upstream owner. P/I/ER/S/EO/W are full V, with no stock correction or economic scaling; X removes only other overlapping same-side flow terms, never stock-retained new input. Pair W to waste reception and cancel at combined gate; internal reuse is not external procurement. No division here. | kg | Each event and opening/closing endpoints | Complete actual cohort and associated observed service H including failures Q0 startup idle cleanup rework | Actual plant/configuration and original cohort with full cross-period inherited vectors | per 1 kg reference flow | Calibration; original tickets; state/composition; tests/disposition; upstream ownership; uncertainty |
| cp_waste_shape | shape | eps_offcut_w; wood_offcut_w | raw_event_and_stock_record | event_id; timestamp; actual operator and accountable owner; site; configuration; original cohort; operation; row_id; direction; material or species and actual state; raw amount and unit; instrument calibration; uncertainty; external or paired internal event; provider and upstream owner; opening and closing physical wet stocks; per-exchange inherited burden vectors; actual losses and destination; failure and hold disposition; every separate origin_W; paired internal receive event; independently weighed external mixed or separate outlet total; retained wet stock; actual waste qualification and hazard/cure state; real destination and treatment receipt; source component fractions independently observed; one provider ownership | Waste owner measures each genuine origin transfer and external exit independently. Match/cancel internal pairs; origin W subledgers reconcile but are not additional external exchanges over the already inclusive total. One actual mixed outlet has one qualified Waste card and one treatment/provider; actual segregated outlets need their own compatible atomic cards. Preserve all manufacturing/treatment burdens absent a justified independent function/cohort transfer. | kg | Each event and opening/closing endpoints | Complete actual cohort and associated observed service H including failures Q0 startup idle cleanup rework | Actual plant/configuration and original cohort with full cross-period inherited vectors | per 1 kg reference flow | Calibration; original tickets; state/composition; tests/disposition; upstream ownership; uncertainty |
| cp_waste_laminate | laminate | dry_glass_trim_w; uncured_epoxy_w; spent_cup_w; spent_mask_w; spent_glove_w | raw_event_and_stock_record | event_id; timestamp; actual operator and accountable owner; site; configuration; original cohort; operation; row_id; direction; material or species and actual state; raw amount and unit; instrument calibration; uncertainty; external or paired internal event; provider and upstream owner; opening and closing physical wet stocks; per-exchange inherited burden vectors; actual losses and destination; failure and hold disposition; every separate origin_W; paired internal receive event; independently weighed external mixed or separate outlet total; retained wet stock; actual waste qualification and hazard/cure state; real destination and treatment receipt; source component fractions independently observed; one provider ownership | Waste owner measures each genuine origin transfer and external exit independently. Match/cancel internal pairs; origin W subledgers reconcile but are not additional external exchanges over the already inclusive total. One actual mixed outlet has one qualified Waste card and one treatment/provider; actual segregated outlets need their own compatible atomic cards. Preserve all manufacturing/treatment burdens absent a justified independent function/cohort transfer. | kg | Each event and opening/closing endpoints | Complete actual cohort and associated observed service H including failures Q0 startup idle cleanup rework | Actual plant/configuration and original cohort with full cross-period inherited vectors | per 1 kg reference flow | Calibration; original tickets; state/composition; tests/disposition; upstream ownership; uncertainty |
| cp_waste_finish | finish | cured_composite_w; failed_board_w; spent_cloth_w; spent_abrasive_w; spent_brush_w | raw_event_and_stock_record | event_id; timestamp; actual operator and accountable owner; site; configuration; original cohort; operation; row_id; direction; material or species and actual state; raw amount and unit; instrument calibration; uncertainty; external or paired internal event; provider and upstream owner; opening and closing physical wet stocks; per-exchange inherited burden vectors; actual losses and destination; failure and hold disposition; every separate origin_W; paired internal receive event; independently weighed external mixed or separate outlet total; retained wet stock; actual waste qualification and hazard/cure state; real destination and treatment receipt; source component fractions independently observed; one provider ownership | Waste owner measures each genuine origin transfer and external exit independently. Match/cancel internal pairs; origin W subledgers reconcile but are not additional external exchanges over the already inclusive total. One actual mixed outlet has one qualified Waste card and one treatment/provider; actual segregated outlets need their own compatible atomic cards. Preserve all manufacturing/treatment burdens absent a justified independent function/cohort transfer. | kg | Each event and opening/closing endpoints | Complete actual cohort and associated observed service H including failures Q0 startup idle cleanup rework | Actual plant/configuration and original cohort with full cross-period inherited vectors | per 1 kg reference flow | Calibration; original tickets; state/composition; tests/disposition; upstream ownership; uncertainty |
| cp_assets | assets | asset_router_new; asset_router_returnin; asset_router_returnout; asset_router_retire; asset_sander_new; asset_sander_returnin; asset_sander_returnout; asset_sander_retire; asset_extractor_new; asset_extractor_returnin; asset_extractor_returnout; asset_extractor_retire; asset_rack_new; asset_rack_returnin; asset_rack_returnout; asset_rack_retire; repair_steel_new; repair_steel_old; repair_pad_new; repair_pad_old; repair_wood_new; repair_wood_old; lube_in; lube_out | raw_event_and_stock_record | event_id; timestamp; actual operator and accountable owner; site; configuration; original cohort; operation; row_id; direction; material or species and actual state; raw amount and unit; instrument calibration; uncertainty; external or paired internal event; provider and upstream owner; opening and closing physical wet stocks; per-exchange inherited burden vectors; actual losses and destination; failure and hold disposition | Assigned site materials/production accountant retains undivided calibrated receipt/issue/return and full-period observations. Preserve whole supplied formulations/articles once; assay and water are non-additive subledgers. No normalisation in collection. | kg | Each event and opening/closing endpoints | Complete actual cohort and associated observed service H including failures Q0 startup idle cleanup rework | Actual plant/configuration and original cohort with full cross-period inherited vectors | per 1 kg reference flow | Calibration; original tickets; state/composition; tests/disposition; upstream ownership; uncertainty |
| cp_service | service | service_in_resin_base; service_in_hardener; service_in_glass_cloth; service_in_finbox; service_in_ventkit; service_in_alcohol; service_in_rag; service_in_abrasive; service_epoxy_w; service_composite_w; service_abrasive_w; service_cloth_w; service_insert_w; service_plug_w; service_board_w | raw_event_and_stock_record | event_id; timestamp; actual operator and accountable owner; site; configuration; original cohort; operation; row_id; direction; material or species and actual state; raw amount and unit; instrument calibration; uncertainty; external or paired internal event; provider and upstream owner; opening and closing physical wet stocks; per-exchange inherited burden vectors; actual losses and destination; failure and hold disposition | Assigned site materials/production accountant retains undivided calibrated receipt/issue/return and full-period observations. Preserve whole supplied formulations/articles once; assay and water are non-additive subledgers. No normalisation in collection. | kg | Each event and opening/closing endpoints | Complete actual cohort and associated observed service H including failures Q0 startup idle cleanup rework | Actual plant/configuration and original cohort with full cross-period inherited vectors | per 1 kg reference flow | Calibration; original tickets; state/composition; tests/disposition; upstream ownership; uncertainty |
| cp_species_shape | shape | h2o_in_shape; h2o_out_shape; o2_in_shape; o2_out_shape; n2_in_shape; n2_out_shape; ar_in_shape; ar_out_shape | raw_event_and_stock_record | event_id; timestamp; actual operator and accountable owner; site; configuration; original cohort; operation; row_id; direction; material or species and actual state; raw amount and unit; instrument calibration; uncertainty; external or paired internal event; provider and upstream owner; opening and closing physical wet stocks; per-exchange inherited burden vectors; actual losses and destination; failure and hold disposition; true molecular identity and CAS where established; gas/particle phase; actual inlet/outlet receptor compartment; temperature pressure humidity and gas composition; actual volume total versus rate; capture efficiency independently observed; direct H2O uptake/loss including storage; whole humid-air bridge and disjoint species | Environmental measurement owner records actual unnormalised species and receptor/state evidence; independently verify H2O, dry gases and particles. Integrate only real rates, never multiply an integrated volume by time. Do not infer a molecule from VOC/COD/total-N/carbon/particle-size totals; keep detection limits and unavailable species unresolved. Natural absorption and evaporation are actual physical events without fictitious repair permission. | m3; kg | Each event and opening/closing endpoints | Complete actual cohort and associated observed service H including failures Q0 startup idle cleanup rework | Actual plant/configuration and original cohort with full cross-period inherited vectors | per 1 kg reference flow | Calibration; original tickets; state/composition; tests/disposition; upstream ownership; uncertainty |
| cp_species_pack | pack | h2o_in_pack; h2o_out_pack | raw_event_and_stock_record | event_id; timestamp; actual operator and accountable owner; site; configuration; original cohort; operation; row_id; direction; material or species and actual state; raw amount and unit; instrument calibration; uncertainty; external or paired internal event; provider and upstream owner; opening and closing physical wet stocks; per-exchange inherited burden vectors; actual losses and destination; failure and hold disposition | Assigned site materials/production accountant retains undivided calibrated receipt/issue/return and full-period observations. Preserve whole supplied formulations/articles once; assay and water are non-additive subledgers. No normalisation in collection. | m3; kg | Each event and opening/closing endpoints | Complete actual cohort and associated observed service H including failures Q0 startup idle cleanup rework | Actual plant/configuration and original cohort with full cross-period inherited vectors | per 1 kg reference flow | Calibration; original tickets; state/composition; tests/disposition; upstream ownership; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_raw | all raw observations | Convert original units/rates to each actual native extensive numerator; integrate only rates. E_MJ=3.6*E_kWh once. Density/composition require independent actual substance/state evidence. No Q division here. | raw_observation; raw_unit; rate_or_total; interval; actual_state; density; composition | U_native | `ilcd-allocation` |
| calc_manufacture | manufacturing burden dimensions | A_c=B_open+U_native-B_close-T_other after dedicated/subdivided/exchange-specific determining physical causality and only true residual gate-value allocation. B_close excludes already released FG and performed cohort service. T_other requires true independent function/cohort with justified transfer once; ordinary failures/waste/sales remain. Stock-corrected U has no second stock deduction. This is not gross V. | B_open; U_native; B_close; T_other; attribution_evidence | A_c | `ilcd-allocation` |
| calc_service | original-cohort service burden dimensions | A_H=C_open+U_H-C_unused_close-T_other_H after actual attribution. Keep Q_H and observed H; historical manufacture is not U_H purchase. Performed service stays despite closingFG. Only unused/unassigned service carries; retain failures, work without permission and true incremental materials/water/energy/waste. | C_open; U_H; C_unused_close; T_other_H; original_cohort; Q_H; H | A_H | `ilcd-allocation` |
| calc_physical | all physical gross card dimensions | V_i=complete actual measured gross leg in its direction and native extensive unit. Do not apply B_open+U-B_close or economic/service share to a physical card. Correct X only against OTHER overlapping same-side flow terms; retain new material/water influx and full wet closing stock. Cancel exact paired internal legs at consolidation. Physical disclosure creates no second purchase/provider burden or credit; associated burden is owned separately once in A_c or A_H. | gross_event; direction; native_unit; OTHER_same_side_overlap; internal_pair | V_i | `ilcd-allocation` |
| calc_quotient | all inventory rows | q=N/D. Execute this sole quotient once for each tagged dimension: physical cards N=complete gross V_i; separate burden results N=A_c or A_H. D=Q for first-release manufacture; D=original first-release Q_H for actual H services and their physical legs. Q and Q_H are independently measured whole-board net kg, including released closingFG. Reference output is 1 kg. If D=0 retain real raw activity and loads with no unit result. Cards and aggregation only reference this same result; no second division. | N; D; V_i; A_c; A_H; Q; Q_H; H | q | `ilcd-allocation` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all cards | Retain whole-product/part/material/species state and every native CAS/form/grade/route/geography/phase/type/media restriction, exact support-chain evidence and original supplier scope; official zh basename where provided. Supplier compatibility/assays are not established by a UUID. | full native records; actual supplier specifications; whole BOM |
| dq_raw | all protocols | Keep complete calibrated raw period records and uncertainty/detection limits. No fabricated proportions, weights, dimensions, density, layer counts, cure times/temperatures, yields, absorption, performance, certification or service lifetime. | calibration; laboratory and acceptance records; raw event audit |
| dq_vectors | manufacture; service; assets | Per-exchange inherited burden vectors and complete wet physical stocks are independent ledgers. Preserve failed/Q0/idle/startstop/cleanup/rework periods, releasedFG, actual original-cohort H, all gross legs, provider/capital ownership and actual incremental water. | stock and event ledgers; provider matrix; cohort reconciliation |
| dq_sources | all source claims | Sources are a transparent qualitative technical synthesis across distinct manufacturers; no common SKU/order/factory. Full originals, extraction scope, independent context and counterexamples must support the actual rule. Industrial documents do not establish LCA allocation, and a materials read success/fragment status is not automatic applicability or numeric reuse. | source originals and source-specific applicability decisions |
| dq_review | whole candidate | Scientific review is pending and Chinese is aligned, not reviewed. Distinguish ordinary auxiliary/provider/future factory collection gaps from genuine core terminal/identity/method holds; report any true hold honestly and do not count draft/unmapped/unusable content as coverage. | manifest; independent review; explicit gap evidence |

## 9. Validation Rules

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| validation_core | reference; out_board | Confirm a real complete finished rigid EPS/glass/epoxy board with supplied BOM and installed boxes/vent kit against primary evidence and full native Product identity. Hard CAS/form/route/grade/phase/type/media conflict blocks that binding. A genuinely unresolved whole reference identity leaves draft/unmapped/unusable; ordinary auxiliary/provider/quantity gaps do not alone create that core hold. | `nsp-dealer`; `greenlight-glass`; `greenlight-vent`; `roberts-ret` |
| validation_basis | all inventory rows | Verify one Product output link and one first-release mass denominator in both languages; released closing FG is in Q once. No delivered mass, bounding-box area, assumed count-to-kg mass or secondary-property density substitution. Every card/protocol references the same sole quotient and no collection/aggregation performs another division. Q0 retains loads without a unit result. | `ilcd-allocation` |
| validation_atomic | all cards | Check each atomic selected identity, actual event/direction, complete description, all native constraints, official Chinese basename when supplied, reference property/group/unit and each source/qualifier. Unknown remains specific and tracked, never replaced by an ensemble name. UUID identity is not evidence of a site quantity or provider fit. | `ilcd-allocation`; `greenlight-glass` |
| validation_gates | manufacture; FG; combined gate | Reconcile full wet mass and independent relevant elements/species, raw/WIP/FG inventories and inherited vectors, packaging six legs, real asset/new-old part/fluid legs and actual water/gas/thermal states. Gross V is never burden-stock-corrected or economically scaled. X only deduplicates OTHER same-side terms; retain new influx plus full closing wet stock. Mixed outlet totals and source W are non-additive; treatment/provider once. | `ilcd-allocation` |
| validation_work | all actual work | For actual postrelease rework retain manufacturer/spec permission, work record, postwork tests and acceptance/disposition. Failed/rejected/unauthorised actual work is fully recorded and held/disposed appropriately; no assumed restoration of broken composite. Natural storage moisture exchange requires no invented repair permission. Performed service keeps original Q_H/H. | `gong-rigid`; `greenlight-sand`; `ilcd-allocation` |
| validation_evidence | concrete dataset | Require actual primary supplier/site measurement and uncertainty evidence for amounts, settings, formulation, acceptance and upstream coverage before claiming completeness. No brochure recipe/lifetime/performance/certification/yield or emission default. Structural/finite checks establish neither scientific review nor translation review, accepted classification mapping or publication. | `greenlight-guide`; `nsp-dealer`; `ilcd-allocation` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Qualified complete board manufacture for declared mass/configuration and boundaries; actual original-cohort gate services separately tagged |
| allowed_use | Only matched technology/state/BOM and verified current evidence with collection completeness and disclosed review status; preserve all native restrictions and full rule context |
| excluded_use | Universal CPC38420 coverage; ski/sail/paddle/inflatable/toy/vessel/foam-only comparisons; marine use or service-life/performance claims; provider/identity mismatch; hidden core hold or invented zero |
| required_metadata | All required qualifiers; whole supplier BOM/formulations; first-release Q; original Q_H/H; actual raw and wet-stock/vector records; provider and capital boundaries; uncertainty and all actual atoms |
| required_quality_disclosure | Scientific pending; Chinese aligned not reviewed; quantitative factory data to be collected; auxiliary/provider gaps explicit; structural check is not mapping/publication or science approval |
| update_trigger | Actual terminal/BOM/foam/glass/formulation/finish/route change; new native restrictions or provider scope; new measured evidence; changed Q/service boundary; independent review findings |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| greenlight-guide | handbook | Greenlight Surfboard Building Guide A-Z; https://greenlightsurfsupply.com/pages/greenlight-surfboard-building-guide | Purchased formed EPS blanks; epoxy compatibility; operation sequence and alternatives; no default dimensions/density/recipe/time/yield or safety/emission claims |
| greenlight-shape | handbook | Greenlight how to shape a surfboard; https://greenlightsurfsupply.com/pages/surfboard-building-guide-how-to-shape-surf-board | Actual remaining outline/foil/rail/contour work; optional sealing is not universal; supplied close-tolerance blank ownership |
| greenlight-glass | handbook | Greenlight how to glass a surfboard; https://greenlightsurfsupply.com/pages/greenlight-surfboard-building-guide-how-to-glass-surf-board | Dry glass cutting and wet hand lamination; separately supplied resin and hardener; epoxy sealcoat; fin/leash installations; cleanup; alternative polyester and gloss routes excluded |
| greenlight-sand | handbook | Greenlight how to sand a surfboard; https://greenlightsurfsupply.com/pages/greenlight-surfboard-building-guide-how-to-sand-surf-board | Box/plug trimming; genuine sanding; burn-through resealing and matte terminal; polished gloss is a distinct alternative |
| greenlight-vent | handbook | Greenlight Vented Leash Plug V5.5; https://greenlightsurfsupply.com/products/surfboard-vented-leash-plug-v314 | Actual supplied combined vent/leash kit includes epoxy putty and tamping stick; waterproof membrane role only, no numerical test/general-performance adoption |
| roberts-ret | handbook | Roberts Epoxy Technology RET; https://www.robertssurf.com/ret.html | Independent complete wood-stringered EPS/epoxy/fiberglass construction and cure/sanding; optional carbon/bio formulations not silently included |
| nsp-volume | handbook | NSP Volume Fish; https://us.nspsurfboards.com/products/su-volume-fish | Manufacturer counterpart for complete EPS/wood-stringer/glass/epoxy board; actual shape/configuration and estimated masses are not defaults |
| nsp-dealer | handbook | NSP Surf Dealer Guide 2026, pp.31–33 and39–41; https://www.apm-marketing.de/wp-content/uploads/2025/12/2026-Surf-Dealer-Guide-komprimiert.pdf | Distributor-hosted manufacturer brochure: p32 installed fin boxes and fins not included; p40 complete layer diagram and satin finish; adjacent carbon and other constructions are countercontext |
| gong-rigid | handbook | GONG Rigid Boards User Guide, pp.30–38; https://cdn.gong-galaxy.com/pdf/21-NOTICE-GONG-RIGID-BOARDS-WEB.pdf | Primary countercontext: EPS versus PU, monolithic versus sandwich, extra PU surface in figure, vent-screw limits and damage; none establish the selected recipe or universal repair permission |
| ilcd-allocation | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA Detailed guidance, first edition March2010, §§7.9.2–7.9.3; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional cases requiring allocation: dedicated and virtual subdivision; exchange-specific determining physical causality; actual residual common-process gate market value; prerequisites and sensitivity, no manufacturing chemistry or default share |
