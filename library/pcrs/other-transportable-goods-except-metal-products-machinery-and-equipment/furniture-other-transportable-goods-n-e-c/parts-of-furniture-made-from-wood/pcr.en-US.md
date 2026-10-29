---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.parts-of-furniture-made-from-wood
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Uncoated turned single-piece solid-beech furniture leg manufacture

## 1. Scope and Applicability

This attributional method covers actual receipt of kiln-dried beech sawn stock/squares through cutting blanks, turning, real connection-hole/fit machining, dry sanding and actual specified connector installation, then inspection to the approved drawing and unique first quality release of each complete furniture leg. The terminal is an independently supplied furniture component deliberately uncoated but fully shaped and surface-prepared for its declared connection interface, with downstream finishing/furniture assembly outside this terminal. It is not a rough blank, bundle of round rods or complete furniture. `richman-unfinished-leg` establishes individually sold unfinished surface-prepared solid turned legs and an inserted-connector example; `drewbak-components` establishes industrial beech component machining and drawing/finished-component quality context; `bukexpo-beech-supply` supplies independent sawing/kiln-drying/stock-form context. This is transparent technical synthesis, not a shared SKU, current common order, factory recipe or proven supplier chain.

Exclude tool handles/ornaments, raw sawnwood/unshaped billets, laminated/finger-jointed/glued or bentwood, heat-densified/preserved stock, coated/oiled/waxed legs, onsite log conversion/kiln drying/glue or coating mixing, whole chairs/tables/cabinets, complete flat-pack kits and installed furniture. Actual coating or bonding is not a hidden zero operation: first extend evidence, materials, energy, reactions/emissions and finished acceptance boundary. Surface preparation in this bounded route is actual dry sanding; no glue or coating is invented. Supplier forestry, sawing, drying and article manufacturing burdens remain upstream in the product system.

This is a declared production quantity, with no mass-equivalent function, furniture lifetime, load/strength threshold, dimension, moisture target, density, speed, temperature/time, dosage, yield or certification default. Actual packaging/storage/handling/dispatch/returns have a separate service account for observed H and original cohort Q_H. Engineering consistency is not scientific/translation approval, mapping or publication.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.parts-of-furniture-made-from-wood |
| classification_refs | CPC 3.0 38161; narrower; current accepted association: `classifications/mappings/cpc-3.0-to-pcr.yaml` and `docs/adr/cpc3-additional34-20261029-38161.md`; complete method scope/exclusions apply, not full-leaf or scientific/translation approval |
| covered_products | Individually first-released uncoated turned single-piece solid-beech furniture leg with approved connection interface and actual included connector |
| excluded_products | Raw sawnwood; rods/billets; handle/ornament; whole furniture/flat-pack kit; laminated/finger-jointed/bentwood; coated/treated legs; onsite kiln/log conversion |
| representative_product | One sanded uncoated turned beech leg ready for its specified connection; supplied inserted-stud example is not a universal fitting |
| production_route | Kiln-dried solid beech sawn stock → receipt/sort → cut blank → turn and actual drill/fit → dry sand → actual connector installation → inspect/test → first component release |
| market_state | Complete finished component at first release; deliberately uncoated for downstream finishing/assembly; actual factory-gate services separate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture a complete furniture-support leg for its declared connection interface |
| How much | 1 kg reference flow |
| How well | Approved drawing/revision, full BOM, connector suitability, dimensional/surface/actual performance acceptance and disposition; no universal threshold |
| How long or cycle | One manufacturing and unique first-release cycle; no use lifetime |
| reference_flow_link | `finished_leg` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Parts of furniture made from wood `4d818756-c439-4450-856c-b24a32c05185` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Approved complete-leg drawing and revision; Fagus botanical species and legal origin; Single-piece unglued untreated solid construction; Kiln-dried sawn-stock supply gate and upstream ownership; Actual whole-part geometry and connection fit; Uncoated sanded market state; Actual mounting connector BOM and installation owner; Actual machining and sanding sequence; Moisture basis and independent sampling; Measured net complete-leg mass and calibration; Unique first-release cohort and Q; Actual dimensional/interface/surface acceptance and disposition; Raw and WIP opening/closing inherited vectors; Released FG and original-cohort service horizon H and Q_H; Failures samples zero-output idle cleanup and actual rework; Every packaging article and six actual directions; Whole supplies and disjoint constituent ownership; Asset receipt installed stock remaining service and retirement; Ordinary humidity exchange and each real water phase; Atomic air species and actual destination; Biogenic fossil and ambient carbon separation; Site period supply voltage geography and providers; All unresolved identities and uncertainty |

Declare every qualifier in dataset metadata, notes or equivalent consumable fields. Native Mass/kg determines the denominator. Count-based collection requires calibrated net complete-leg weighing for the same configuration/moisture scope, individually or with a justified representative measured sampling record, before summing first-release kg. Item(s) and item are equivalent count units with factor1 and supply no kg. Do not guess kg/leg from catalog mass, secondary Mass coefficient, bounding area or density. This method does not use area Q. Complete native terminal restrictions are also retained in finished_leg for contextual consumption.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is the sum of uniquely first-released net complete-leg kg, including released closing FG, excluding packaging; use cp_release. FG is not another output or a deduction from manufacturing burden. |
| extensive_units | all inventory rows | Native extensive property of each individual exchange | kg; MJ; m3; kg*km; h | Preserve the real extensive quantity per row. Mass rules do not force electrical MJ, gas m3, freight kg*km or actual capacity h into kg. Raw-unit conversion precedes attribution and the sole quotient. |
| wood_moisture | beech_stock; finished_leg; wood residues | Mass | kg | Collect full wet wood, independent oven-dry wood and moisture basis separately; u=(wet-dry)/dry applies only to isolated wood with steel/abrasive attachment bridges. Include actual natural moisture uptake/loss. |
| gross_leg | each gross card | Native extensive property of that actual leg | kg; m3 | Every gross-card numerator is complete V, never B_open+U-B_close or an economic/service share; assign the separate burden once while retaining native units. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received untreated unglued kiln-dried Fagus sawn stock >6 mm and actual separately supplied connector/consumables; no purchased preturned leg substitution |
| starting_condition_role | secondary_manufacturing |
| product_classification_scope | A narrow manufactured wooden-furniture-part subset; no positive mapping inferred |
| recursive_input_rule | Purchased whole finished legs retain their existing burdens and first-release identity; cannot substitute for this manufacturing route or create new Q by repacking; internal equal-product transfers cancel |
| upstream_dataset_requirement | Match actual forestry, sawing, kiln drying, stock form/moisture/species/origin and supplier gate; input article manufacture and transport/packaging each have one owner; no zero upstream burden |
| disclosure | Actual onsite/upstream split; full gross custody and raw/WIP/FG stocks; inherited vectors; real service H/Q_H; all real atoms and unresolved identities/providers |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | complete product system | Include full stock-to-leg machining, dust control, actual connectors, inspection and pre-release rework; startup/shutdown, idle, cleanup, failed/zero-output runs and samples retain real loads. Purchased stock drying remains upstream. Add each real unlisted chemical, fuel, water supply, component, emission and outlet before use; no hidden other/zero bundle. This dry electric route does not invent a boiler, steam, combustion or surface coating. | `richman-unfinished-leg`; `drewbak-components`; `bukexpo-beech-supply` |
| boundary_first_release | manufacturing and gate_service | Q is net mass newly first quality-released once. Closing already-released FG is included in Q, never deducted from manufacturing B_close or added as a second product. Manufacturing B_close includes only raw/WIP and unused unassigned material/service charges. Packaging/storage/handling/dispatch/returns have original cohort Q_H and observed horizon H; consolidate internal Q handover by cancellation. | `ilcd-attributional-2010` |
| boundary_postrelease | actual FG work and natural moisture | Post-release machining/repair requires manufacturer/specification permission, postwork tests, acceptance and disposition to claim continuing qualification; it creates no first release. Lack of permission or failed tests never deletes an actual operation, physical flow or load: retain original cohort and hold/waste status. Broken parts are not assumed restorable. Ordinary humidity uptake/loss is measured independently and needs no invented work permission. | `richman-unfinished-leg`; `usda-wood-handbook-2021` |
| boundary_gross | each physical gate | Reconcile manufacturing, FG service and consolidated gates with full opening/closing wet raw/WIP/FG, equipment, installed fluids and all actual external gross legs. Never scale physical mass by economic/burden shares. F_in/F_out are independently measured real repair/new-material/water-phase influx and outflow, never a balance residual. X_in/X_out deduct only a proven duplicate already included in an OTHER actual same-side inlet/outlet term, with matched event identity. Stock, an opposite-side term, merely having a card, or closing retention is not overlap evidence. Preserve true retained influx and full wet closing stock simultaneously. Whole articles/preparations and disjoint constituent bridges occur once; internal handovers cancel. | `ilcd-attributional-2010`; `usda-wood-handbook-2021` |
| boundary_ownership | whole supply and actual disposal | One whole externally purchased preparation/article is procured once; assay, carried water, binder, active components, embedded studs and initial installed fluids are subledgers. Real onsite manufacture/mixing has each separately bought input, real energy and losses. Real waste/failure/sample exports or sales do not by themselves transfer manufacturing or treatment burdens. No automatic coproduct, avoided production or negative credit. | `ilcd-attributional-2010` |
| packaging_receipt_basis | packaging | For each actual whole packaging article, P records paid procurement (standalone or bundled, with or without a separate invoice). I records first non-purchased external ingress, including standalone gifts, loans, rental/pool issues and unpaid supplier-attached packaging; supplier attachment is only one I subset. ER requires the same item or an auditable matching batch linked to this site's own prior outward record; another party's prior use alone is not a return. P/I/ER are disjoint. The existing matching physical-article cards and raw subledgers cover these origins subject to every native material/form/state qualification; incompatible actual articles require their own atomic rows, never a substitute UUID. X_in/X_out remain separate measured material/water-change terms, not a substitute for whole-article receipt. Keep gross wet quantities, owner/custodian, payment/non-purchase basis, provenance, prior-outward links, actual state/unit and inherited manufacture/service vectors. A free receipt is neither a new manufacture nor automatically burden-free: attribute actual service and incremental transport/handling once to the proper original cohort/denominator and retain genuinely unused service separately, without a default lifetime or credit. Stock, physical gross legs and burden vectors remain separate. This is the declared conserving foreground-accounting implementation, not a claim that the cited source prescribes these variable names. | ilcd-attributional-2010 |

## 6. Process Inventory Structure

Every card retains its complete description and ancestor scope. Add any real missing atomic exchange before use. Absence of a conditional exchange needs evidence; a missing UUID is not zero. Gross physical cards fix A to complete V; the burden/service vector is independently assigned once.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | Complete leg manufacture and first release | required | Actual approved stock-to-individual-leg route | foreground | Q newly first-released net kg |
| gate_service | Original-cohort factory-gate service | conditional | Actual packing/storage/handling/dispatch/return | foreground | Original Q_H and observed H; no second product |

### Process: Complete leg manufacture (`manufacture`)

#### Inputs

##### Product flows

###### Kiln-dried beech sawn stock (`beech_stock`)

Weigh full received wet stock; cutting blanks onsite is foreground manufacture, not another purchased finished leg. Supplier drying is upstream. Native Product is kiln-dried hardwood sawnwood, generic unspecified species at sawmill, Mass/kg, with synonyms for KD hardwood lumber. Its comment mentions seat-frame feedstock, not a separate physical grade or an exclusive final use. Restrict the real supply here to untreated unglued Fagus solid sawn stock thicker than 6 mm, with actual botanical species/origin/moisture and receiving state; no laminated, finger-jointed, green or preturned leg substitution. Upstream forestry/sawmill/kiln and supply transport remain owned once.

- Selected flow: Sawnwood, hardwood `43103a96-43df-4f35-ad02-728237b3f815`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; determine attributed A after original-unit conversion; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `bukexpo-beech-supply`; `usda-wood-handbook-2021`

###### Steel mounting hanger stud (`mounting_stud`)

Conditional on an actually separately purchased and onsite installed screw-form steel connector. An insert already embodied in a supplied component is not purchased again. Keep actual holes/thread and assembly tests; source M8 wording is an example, not a PCR dimension. Native Product is a steel screw, Mass/kg, no fixed grade, surface treatment, thread or geography; historical other-goods classification is preserved separately. Restrict to one actually purchased steel screw-form hanger stud compatible with the approved leg interface and supplier BOM. The primary product proves an inserted connector but not its alloy. Establish steel and actual coating/geometry independently; a brass insert, nut, threaded sleeve or separately supplied kit is not this flow.

- Selected flow: Steel screw `35a4d7dc-1c42-4eb2-a48a-0f9a5abce9d6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; determine attributed A after original-unit conversion; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `richman-unfinished-leg`; `drewbak-components`

###### Whole paper-backed sanding abrasive (`abrasive_paper`)

Actual supplied consumable for the approved dry sanding sequence. Record fresh/unused closing material separately from spent material; do not buy binder/grains again. Native Product is abrasive paper at plant, Mass/kg, no fixed grit, binder, geography or treatment route. The preserved legacy source classification says other goods; the active abrasive classification and paper article are coherent and supply no recipe. Restrict to one whole paper-backed abrasive sheet/belt actually used for dry wood sanding, including backing, binder and grains once; cloth abrasives or loose abrasive grains need their own rows.

- Selected flow: Abrasive paper `ba6c99d4-60d9-46a5-9ef5-ca3d0b877d57`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; determine attributed A after original-unit conversion; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `drewbak-components`; `ilcd-attributional-2010`

###### Manufacturing electricity (`electricity_m`)

Meter sawing, turning, drilling, sanding, dust extraction and actual onsite compressed-air auxiliaries separately where possible, including failed/idle/start-stop/cleanup work. Avoid duplicate compressor energy inside a purchased-air provider. Native Product is alternating current below 1 kV, consumption mix to user, grid-average supply, CN, with native energy property/MJ. It is usable only for actual matching Chinese low-voltage grid supply. Another geography, voltage, generator or contractual supply needs another verified identity/provider; this record is not a worldwide electricity default. Convert raw cumulative kWh by 3.6 MJ/kWh once; do not interpret the property name as fuel combustion.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: A / Q; determine attributed A after original-unit conversion; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy_m`
- Sources: `drewbak-components`; `ilcd-attributional-2010`

###### Manufacturing cleaning tap water (`tap_water_m`)

Conditional real wet cleaning or maintenance supply; dry machining does not imply automatic water use. Keep full actual influx even when it stays in closing wet stock/fluid. New or reclaimed different supplies are separate real flows. Native Product is tap water, Mass/kg, without fixed treatment, geography or composition; historical other-goods classification is retained but active natural-water identity is coherent. Restrict to actual externally supplied tap water; independently record quality, temperature, source/provider and meter basis. It is not deionised water, boiler steam, wastewater or atmospheric sorption. Any changed water supply or actual separately returned condensate needs its own verified atomic flow and heat-state record.

- Selected flow: Water, tap `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; determine attributed A after original-unit conversion; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_m`
- Sources: `drewbak-components`; `ilcd-attributional-2010`

###### External compressed-air supply (`compressed_air`)

Conditional external supply only. Its energy burden is separate from physical carrier mass; trace whole-air/species bridge without procurement duplication. Native Product is compressed air at pressure greater than atmosphere, Volume/m3, no fixed pressure, temperature, dryness, route or geography. Adopt only one real external compressed-air supply whose metered reference conditions and supplier burden match. Normalize actual/standard volume explicitly; do not multiply cumulative volume by time or use liquid-water density. Onsite compression is internal and its electricity/condensate/leaks are collected once, without a second purchased-air provider. Whole supplied air and its species remain disjoint at the external gate.

Retain complete external supplied V in native Volume/m3 at its documented delivered reference state separately from attributed burden A. Any standard-volume or mass bridge requires an explicit conversion and independently established actual-state whole-air density and measured nonadditive composition; no default gas fractions or Normal Volume property substitution. Supplied whole-air constituents are composition subaccounts; only real external atmospheric ingress uses Resource identities.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: A / Q; determine attributed A after original-unit conversion; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy_m`
- Sources: `drewbak-components`; `ilcd-attributional-2010`

###### Whole petroleum lubricating oil (`lubricant`)

Conditional actual mineral-oil machinery lubrication, full purchased preparation once. Supplier-approved composition/grade and viscosity, fossil carbon, charge/refill/drain, installed/open/closing stock and losses require records. The queried PAO/fully synthetic and fixed-calorific alternatives are not substituted. Keep additions as real influx even when still installed at closing.

- Selected flow: Petroleum lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: A / Q; determine attributed A after original-unit conversion; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset_m`
- Sources: `drewbak-components`; `ilcd-attributional-2010`

###### New carbide turning insert (`cutting_insert_new`)

Conditional one actually externally received new carbide insert of approved composition/geometry for wood. The queried generic tool-wear record is a consumed-wear estimate and is not adopted as a whole received tool. Record full new mass plus closing installed/storage mass; service burden is independently assigned, not one insert per kg leg.

- Selected flow: Carbide woodturning insert
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset_m`
- Sources: `drewbak-components`; `ilcd-attributional-2010`

###### Used carbide insert received for reuse (`cutting_insert_old_in`)

Conditional real external old tool receipt, not an internal reinstall. Record previous owner/burden handover and condition, whole mass and service eligibility. Do not duplicate the new-tool receipt or assume free impact.

- Selected flow: Used carbide woodturning insert
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset_m`
- Sources: `drewbak-components`; `ilcd-attributional-2010`

###### New woodturning lathe received (`lathe_new`)

Conditional actual new physical woodworking lathe entering the asset gate. Record whole machine mass, installed fluids once and disjoint component BOM. Native metal-cutting lathe query members are not compatible. Full purchase mass is a custody leg; its embodied vector enters the independent service register, not every kg of furniture leg.

- Selected flow: Woodturning lathe
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset_m`
- Sources: `drewbak-components`; `ilcd-attributional-2010`

###### Used woodturning lathe received (`lathe_old_in`)

Conditional external used machine, with previous service/remaining burden and actual condition, not an internal asset move. Existing-machine service remains in scope even when no new machine is purchased during the period.

- Selected flow: Used woodturning lathe
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset_m`
- Sources: `drewbak-components`; `ilcd-attributional-2010`

###### Woodturning lathe capacity service (`lathe_service`)

Represent actual occupied capacity hours with independent embodied manufacture/maintenance service vector from cp_asset_m. Include setup, failures, idle required for the cohort and approved actual service weighting; no fixed life, default machine mass or kg-per-part coefficient. Exclude electricity/repair materials already explicit elsewhere; preserve the exact service boundary/provider to avoid summing a full leased-service bundle again.

- Selected flow: Woodturning lathe capacity service
- Flow property / unit: Duration / h
- Amount rule: A / Q; A is the actual woodturning capacity service attributed once to this manufacturing cohort, in h; Q is its unique manufacturing first-release kg. H records observation only; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset_m`
- Sources: `drewbak-components`; `ilcd-attributional-2010`

###### Purchased inbound road freight (`inbound_freight`)

Conditional actual road movement of sawn stock, connectors and supplies; separate any materially different real leg/provider. No second freight where incoming provider already includes it. Native Product is road freight service, production mix at plant, native mass*distance in kg*km; no fixed truck, fuel, load, route or geography. Keep each actual leg, gross transported wet cargo including packaging, distance, load/empty return and provider boundary; supplier-included freight is not procured twice. Convert t*km to kg*km by 1000 only when truly recorded on that basis; no default distance or load.

- Selected flow: freight transport `4f1a3f30-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` / kg*km
- Amount rule: A / Q; determine attributed A after original-unit conversion; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_transport`
- Sources: `drewbak-components`; `ilcd-attributional-2010`

##### Waste flows

##### Elementary flows

###### Nitrogen in actual air intake (`n2_m_in`)

Individual ordinary gaseous Nitrogen, CAS 7727-37-9, in real air intake/exhaust. Measure full gross mass independently of burden shares, actual destination and state; air circulation alone is not chemical production or a purchased pure gas. Whole externally supplied compressed-air mass and the species analysis are a disjoint bridge: do not add component masses to their already counted incoming whole article. No default air composition, reaction, disappearance or zero.

Native Elementary identity is ordinary gaseous molecular N2 (CAS 7727-37-9), a renewable element Resource from air for actual external atmospheric ingress, with sole Mass/kg reference. Preserve the actual compartment and direction: this is not purchased separated gas or a second free Resource input for constituents already inside supplied compressed air. The alias list does not authorize liquid phase, enriched isotope, radioactive gas, an ion or another molecule. Measure actual gross mass; chemical identity alone does not establish net creation, consumption or environmental change.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air_m`
- Sources: `usda-wood-handbook-2021`

###### Oxygen in actual air intake (`o2_m_in`)

Individual ordinary gaseous Oxygen, CAS 7782-44-7, in real air intake/exhaust. Measure full gross mass independently of burden shares, actual destination and state; air circulation alone is not chemical production or a purchased pure gas. Whole externally supplied compressed-air mass and the species analysis are a disjoint bridge: do not add component masses to their already counted incoming whole article. No default air composition, reaction, disappearance or zero.

Native Elementary identity is ordinary gaseous molecular O2 (CAS 7782-44-7), a renewable element Resource from air for actual external atmospheric ingress, with sole Mass/kg reference. Preserve the actual compartment and direction: this is not purchased separated gas or a second free Resource input for constituents already inside supplied compressed air. The alias list does not authorize liquid phase, enriched isotope, radioactive gas, an ion or another molecule. Measure actual gross mass; chemical identity alone does not establish net creation, consumption or environmental change.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air_m`
- Sources: `usda-wood-handbook-2021`

###### Argon in actual air intake (`ar_m_in`)

Individual ordinary gaseous Argon, CAS 7440-37-1, in real air intake/exhaust. Measure full gross mass independently of burden shares, actual destination and state; air circulation alone is not chemical production or a purchased pure gas. Whole externally supplied compressed-air mass and the species analysis are a disjoint bridge: do not add component masses to their already counted incoming whole article. No default air composition, reaction, disappearance or zero.

Native Elementary identity is ordinary gaseous neutral argon (CAS 7440-37-1), a renewable element Resource from air for actual external atmospheric ingress, with sole Mass/kg reference. Preserve the actual compartment and direction: this is not purchased separated gas or a second free Resource input for constituents already inside supplied compressed air. The alias list does not authorize liquid phase, enriched isotope, radioactive gas, an ion or another molecule. Measure actual gross mass; chemical identity alone does not establish net creation, consumption or environmental change.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air_m`
- Sources: `usda-wood-handbook-2021`

###### Carbon dioxide in actual air intake (`co2ambient_m_in`)

Individual ordinary gaseous Carbon dioxide, CAS 124-38-9, in real air intake/exhaust. Measure full gross mass independently of burden shares, actual destination and state; air circulation alone is not chemical production or a purchased pure gas. Ambient carbon is separated from independently evidenced wood-biogenic and fossil oil/packaging carbon; no sequestration or oxidation from a total-carbon residual. Whole externally supplied compressed-air mass and the species analysis are a disjoint bridge: do not add component masses to their already counted incoming whole article. No default air composition, reaction, disappearance or zero.

- Selected flow: Carbon dioxide
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air_m`
- Sources: `usda-wood-handbook-2021`

###### Atmospheric moisture taken up (`humidity_m_in`)

Actual ordinary H2O uptake by wood/packaging/fluids during normal processing, storage and handling, not only repair/cleaning. Collect source humidity/temperature and independently measured sorption; natural exchange requires no work permission. Do not use the queried emergy/Product atmospheric-water supply as an Elementary identity. Keep each true phase and complete wet closing stock.

- Selected flow: Atmospheric water vapour uptake
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_m`
- Sources: `usda-wood-handbook-2021`

#### Outputs

##### Product flows

###### Accepted complete furniture leg (`finished_leg`)

The only reference Product output. First release Q includes held/closing released FG; packing and shipping cannot generate a second Q. Net mass includes the actually installed approved connector and excludes transport packaging. Native Product is a manufactured finished wooden-furniture-part family, production mix at plant, Mass/kg, without fixed geography, species, size, coating or connector specification. It is not raw lumber or a whole table/chair. Here it means one complete uncoated single-piece solid-beech leg with its approved connection interface and any actually installed specified stud, individually accepted to the drawing. A set is disaggregated into complete legs; no missing members, rough billets or unfinished shaping qualify.

- Selected flow: Parts of furniture made from wood `4d818756-c439-4450-856c-b24a32c05185`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources: `richman-unfinished-leg`; `drewbak-components`

###### Reusable carbide tool externally transferred (`tool_reusable_out`)

Only actual external usable-asset handover with condition and one justified remaining-burden transfer. Internal reinstall/relocation cancels and is not a purchase or another product cohort. No automatic credit for sale.

- Selected flow: Used carbide woodturning insert
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset_m`
- Sources: `drewbak-components`; `ilcd-attributional-2010`

###### Reusable lathe externally transferred (`lathe_reusable_out`)

Only actual external usable-asset handover with condition and one justified remaining-burden transfer. Internal reinstall/relocation cancels and is not a purchase or another product cohort. No automatic credit for sale.

- Selected flow: Used woodturning lathe
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset_m`
- Sources: `drewbak-components`; `ilcd-attributional-2010`

##### Waste flows

###### Segregated beech offcut (`wood_offcut`)

Only when actually collected as a separate external stream. Include failed blanks/samples sent to this outlet. Moisture and dry wood/carbon are measured; ordinary sale/export does not transfer manufacturing or treatment burdens automatically.

- Selected flow: Untreated beech offcut waste
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `drewbak-components`; `ilcd-attributional-2010`

###### Collected beech machining residue (`collected_wood_residue`)

One actual co-collected shavings/sawdust/dust outlet is one Waste, with source pools disjoint. If actual separate outlets exist, add separate atomic cards and do not retain the aggregate as another exchange. Declare abrasive/metal contamination and receiver.

- Selected flow: Collected beech wood machining waste
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `drewbak-components`; `ilcd-attributional-2010`

###### Spent paper sanding abrasive (`spent_abrasive`)

Actual whole spent sheet/belt including attached dust once. Its paper/mineral/wood fractions remain subaccounts, not more outgoing waste; if co-collected in another actual stream, use only that stream and retain this source pool.

- Selected flow: Spent paper-backed sanding abrasive
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `drewbak-components`; `ilcd-attributional-2010`

###### Manufacturing cleaning wastewater (`wastewater_m`)

One actual collected aqueous cleaning outlet with measured suspended solids, oil/chemicals and independent H2O. COD/TOC is an indicator, never a molecular mass. External treatment/upstream supply once; no water to air inferred from balance residue.

- Selected flow: Woodshop cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_m`
- Sources: `drewbak-components`; `ilcd-attributional-2010`

###### Discarded carbide woodturning insert (`discarded_insert`)

Conditional one actual externally discarded tool. Keep wear mass lost to residue separately, actual alloy, previous/new/installed stock and no overlap with outgoing reusable tool. Retained closing old tools are stock, not waste.

- Selected flow: Waste carbide woodturning insert
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset_m`
- Sources: `drewbak-components`; `ilcd-attributional-2010`

###### Discarded woodturning lathe (`discarded_lathe`)

Conditional whole actual discarded machine, with disjoint drained-fluid/removed-part bridge. No fixed retirement/life; gross mass is independent of allocated service vector.

- Selected flow: Waste woodturning lathe
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset_m`
- Sources: `drewbak-components`; `ilcd-attributional-2010`

###### Used machinery lubricating oil (`used_oil`)

Retain actual drain and opening/closing installed oil; real newly added oil retained at closing is not removed from incoming physical mass. Native Waste is used petroleum/synthetic lubricating oil contaminated through use at generation point, Mass/kg, treatment unspecified; no fixed water/oil/additive fractions. Collect the actual whole used-oil stream, its composition/water and receiver once, without inventing a refinery, energy recovery or credit. This is not fresh oil or a combined oily-rag/wastewater stream.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset_m`
- Sources: `drewbak-components`; `ilcd-attributional-2010`

##### Elementary flows

###### Nitrogen in actual air exhaust (`n2_m_out`)

Individual ordinary gaseous Nitrogen, CAS 7727-37-9, in real air intake/exhaust. Measure full gross mass independently of burden shares, actual destination and state; air circulation alone is not chemical production or a purchased pure gas. Whole externally supplied compressed-air mass and the species analysis are a disjoint bridge: do not add component masses to their already counted incoming whole article. No default air composition, reaction, disappearance or zero.

Native Elementary identity is ordinary gaseous molecular N2 (CAS 7727-37-9), an Emission to air, unspecified, for the actual external atmospheric outlet, with sole Mass/kg reference. Preserve the actual compartment and direction: a known urban, high-stack, indoor, long-term, water or soil destination requires its matching identity. The alias list does not authorize liquid phase, enriched isotope, radioactive gas, an ion or another molecule. Measure actual gross mass; chemical identity alone does not establish net creation, consumption or environmental change.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air_m`
- Sources: `usda-wood-handbook-2021`

###### Oxygen in actual air exhaust (`o2_m_out`)

Individual ordinary gaseous Oxygen, CAS 7782-44-7, in real air intake/exhaust. Measure full gross mass independently of burden shares, actual destination and state; air circulation alone is not chemical production or a purchased pure gas. Whole externally supplied compressed-air mass and the species analysis are a disjoint bridge: do not add component masses to their already counted incoming whole article. No default air composition, reaction, disappearance or zero.

Native Elementary identity is ordinary gaseous molecular O2 (CAS 7782-44-7), an Emission to air, unspecified, for the actual external atmospheric outlet, with sole Mass/kg reference. Preserve the actual compartment and direction: a known urban, high-stack, indoor, long-term, water or soil destination requires its matching identity. The alias list does not authorize liquid phase, enriched isotope, radioactive gas, an ion or another molecule. Measure actual gross mass; chemical identity alone does not establish net creation, consumption or environmental change.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air_m`
- Sources: `usda-wood-handbook-2021`

###### Argon in actual air exhaust (`ar_m_out`)

Individual ordinary gaseous Argon, CAS 7440-37-1, in real air intake/exhaust. Measure full gross mass independently of burden shares, actual destination and state; air circulation alone is not chemical production or a purchased pure gas. Whole externally supplied compressed-air mass and the species analysis are a disjoint bridge: do not add component masses to their already counted incoming whole article. No default air composition, reaction, disappearance or zero.

Native Elementary identity is ordinary gaseous neutral argon (CAS 7440-37-1), an Emission to air, unspecified, for the actual external atmospheric outlet, with sole Mass/kg reference. Preserve the actual compartment and direction: a known urban, high-stack, indoor, long-term, water or soil destination requires its matching identity. The alias list does not authorize liquid phase, enriched isotope, radioactive gas, an ion or another molecule. Measure actual gross mass; chemical identity alone does not establish net creation, consumption or environmental change.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air_m`
- Sources: `usda-wood-handbook-2021`

###### Carbon dioxide in actual air exhaust (`co2ambient_m_out`)

Individual ordinary gaseous Carbon dioxide, CAS 124-38-9, in real air intake/exhaust. Measure full gross mass independently of burden shares, actual destination and state; air circulation alone is not chemical production or a purchased pure gas. Ambient carbon is separated from independently evidenced wood-biogenic and fossil oil/packaging carbon; no sequestration or oxidation from a total-carbon residual. Whole externally supplied compressed-air mass and the species analysis are a disjoint bridge: do not add component masses to their already counted incoming whole article. No default air composition, reaction, disappearance or zero.

- Selected flow: Carbon dioxide
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air_m`
- Sources: `usda-wood-handbook-2021`

###### Ordinary water vapour leaving (`water_vapour_m`)

Include independently observed moisture loss from normal processing/storage/handling as well as actual cleaning/repair. A permitted operation is not required for natural loss; any actual unauthorised/failed work still retains full loads and hold/waste disposition. Native Elementary is ordinary water vapour, CAS 7732-18-5, emissions to air unspecified, Mass/kg, no fixed geography. The synonym list contains liquid water, ice, bound water and heavy/tritiated/isotopic labels; these are not adopted as the actual gas. Use independently measured ordinary H2O vapour at this destination only. This is outgoing water from ordinary processing/storage/handling as well as cleaning; it does not prove a reaction or default evaporation. Known other compartments need newly matched identities.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_m`
- Sources: `usda-wood-handbook-2021`

###### Airborne beech dust (`beech_dust_air`)

Actual uncaptured single dust stream from dry cutting/turning/sanding, its solid particle composition and size distribution measured. Captured residue is not an air emission. PM10 includes PM2.5; do not sum nested bins, call PM10 greater-than-10, assign a molecule or use a mismatched long-term/urban/high-stack native. If distinct size-resolved outputs are modelled use mutually exclusive measured bins and verified destination identities instead of this total.

- Selected flow: Airborne beech wood dust
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air_m`
- Sources: `drewbak-components`; `usda-wood-handbook-2021`

### Process: Original-cohort factory-gate service (`gate_service`)

#### Inputs

##### Product flows

###### Complete-leg external return (`fg_return`)

Actual external return of one originally manufactured whole uncoated beech furniture leg; retain original release/cohort/BOM, actual current condition and hold/testing/disposition. Native manufactured wooden-furniture-part Product, plant production mix, Mass/kg, no fixed geography/size/species, does not imply renewed acceptance or restored damage. Do not require a positive postwork outcome to record an actual return; failed/unauthorised work and its loads remain. This gross receipt is not a purchase of a new leg or new Q. Fragments/waste returns are separately identified in their real state and cannot use this complete-article identity.

- Selected flow: Parts of furniture made from wood `4d818756-c439-4450-856c-b24a32c05185`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A = V is the actual complete gross leg and Q is original Q_H; sole quotient in section 8, no new Q.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: `richman-unfinished-leg`; `ilcd-attributional-2010`

###### Corrugated shipping carton (`carton_p`)

One actual complete corrugated-paperboard transport carton of the declared construction and configuration, not a collection of cartons, plastic bags, film, liners or other packaging. The compatible atomic Product-flow UUID remains unresolved. Record the actual board/flute/ply configuration, fibre composition, coatings/lamination, wet condition, integral adhesives/fasteners and supplier scope; no generic fibre fraction, treatment, size, weight or lifetime is assumed. Include integral supplied constituents once within the whole carton, while actually separate inserts, tape or other materials retain their own disjoint rows and one upstream owner. Keep this card's existing P/I/ER/S/EO role as defined by the packaging boundary and raw protocol, including packaging_receipt_basis where present; a new provider identity must not change that event definition. Retain the complete measured wet gross quantity and the original event/gate/custody/cohort in the card's stated Mass/kg unit, whether immediately used or retained at closing. Keep opening/closing empty, attached and reusable stock, internal reuse and independently measured material/water-change legs; no stock, burden or economic-share correction shrinks the gross leg. Actual manufacture/service burdens are attributed once separately using the existing original-cohort rule and sole normalization; a gross receipt or outflow alone creates no new manufacture, procurement burden, provider link or credit. Resolve a physically compatible carton identity/provider before binding it; missing identity is disclosed and never replaced with a mixed packaging category or an invented UUID.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`

###### Corrugated shipping carton (`carton_i`)

One actual complete corrugated-paperboard transport carton of the declared construction and configuration, not a collection of cartons, plastic bags, film, liners or other packaging. The compatible atomic Product-flow UUID remains unresolved. Record the actual board/flute/ply configuration, fibre composition, coatings/lamination, wet condition, integral adhesives/fasteners and supplier scope; no generic fibre fraction, treatment, size, weight or lifetime is assumed. Include integral supplied constituents once within the whole carton, while actually separate inserts, tape or other materials retain their own disjoint rows and one upstream owner. Keep this card's existing P/I/ER/S/EO role as defined by the packaging boundary and raw protocol, including packaging_receipt_basis where present; a new provider identity must not change that event definition. Retain the complete measured wet gross quantity and the original event/gate/custody/cohort in the card's stated Mass/kg unit, whether immediately used or retained at closing. Keep opening/closing empty, attached and reusable stock, internal reuse and independently measured material/water-change legs; no stock, burden or economic-share correction shrinks the gross leg. Actual manufacture/service burdens are attributed once separately using the existing original-cohort rule and sole normalization; a gross receipt or outflow alone creates no new manufacture, procurement burden, provider link or credit. Resolve a physically compatible carton identity/provider before binding it; missing identity is disclosed and never replaced with a mixed packaging category or an invented UUID.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`

###### Corrugated shipping carton (`carton_er`)

One actual complete corrugated-paperboard transport carton of the declared construction and configuration, not a collection of cartons, plastic bags, film, liners or other packaging. The compatible atomic Product-flow UUID remains unresolved. Record the actual board/flute/ply configuration, fibre composition, coatings/lamination, wet condition, integral adhesives/fasteners and supplier scope; no generic fibre fraction, treatment, size, weight or lifetime is assumed. Include integral supplied constituents once within the whole carton, while actually separate inserts, tape or other materials retain their own disjoint rows and one upstream owner. Keep this card's existing P/I/ER/S/EO role as defined by the packaging boundary and raw protocol, including packaging_receipt_basis where present; a new provider identity must not change that event definition. Retain the complete measured wet gross quantity and the original event/gate/custody/cohort in the card's stated Mass/kg unit, whether immediately used or retained at closing. Keep opening/closing empty, attached and reusable stock, internal reuse and independently measured material/water-change legs; no stock, burden or economic-share correction shrinks the gross leg. Actual manufacture/service burdens are attributed once separately using the existing original-cohort rule and sole normalization; a gross receipt or outflow alone creates no new manufacture, procurement burden, provider link or credit. Resolve a physically compatible carton identity/provider before binding it; missing identity is disclosed and never replaced with a mixed packaging category or an invented UUID.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`

###### New purchase — LDPE wrapping film (`film_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. Physical leg P for this one material pool, conditional on its actual occurrence. New whole purchased article only; its upstream owner is recorded once. Numerator is the complete actual gross-leg V in its native unit, never a manufacturing/service burden vector, stock-corrected consumption or economic share. No extra purchase, supplier burden or credit arises from gross disclosure. Opening/closing wet empty/attached-WIP/attached-FG/reusable stocks remain complete; P/I partition the same received article by ownership and are mutually exclusive; internal reuse cancels. Native Product is low-density polyethylene foil (PE-LD), Mass/kg, with non-self-adhesive non-cellular non-reinforced non-laminated unsupported film classification and no fixed geography/route. Only one compatible actual LDPE film article qualifies; not PET, woven PP, multilayer film, a bag plus its film twice, or a paper carton. Declare additives, article manufacture and supplier once.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`

###### Supplier-included ingress — LDPE wrapping film (`film_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. Physical leg I for this one material pool, conditional on its actual occurrence. Retain actual ingress with incoming supplies even when the supply price/provider includes it. Record one existing upstream owner; do not add another purchase or provider. Numerator is the complete actual gross-leg V in its native unit, never a manufacturing/service burden vector, stock-corrected consumption or economic share. No extra purchase, supplier burden or credit arises from gross disclosure. Opening/closing wet empty/attached-WIP/attached-FG/reusable stocks remain complete; P/I partition the same received article by ownership and are mutually exclusive; internal reuse cancels. Native Product is low-density polyethylene foil (PE-LD), Mass/kg, with non-self-adhesive non-cellular non-reinforced non-laminated unsupported film classification and no fixed geography/route. Only one compatible actual LDPE film article qualifies; not PET, woven PP, multilayer film, a bag plus its film twice, or a paper carton. Declare additives, article manufacture and supplier once.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`

###### External return received — LDPE wrapping film (`film_er`)

Physical leg ER for this one material pool, conditional on its actual occurrence. External returned physical article received with actual previous use/burden handover and condition, not internal reuse or new purchase. Numerator is the complete actual gross-leg V in its native unit, never a manufacturing/service burden vector, stock-corrected consumption or economic share. No extra purchase, supplier burden or credit arises from gross disclosure. Opening/closing wet empty/attached-WIP/attached-FG/reusable stocks remain complete; P/I partition the same received article by ownership and are mutually exclusive; internal reuse cancels. Native Product is low-density polyethylene foil (PE-LD), Mass/kg, with non-self-adhesive non-cellular non-reinforced non-laminated unsupported film classification and no fixed geography/route. Only one compatible actual LDPE film article qualifies; not PET, woven PP, multilayer film, a bag plus its film twice, or a paper carton. Declare additives, article manufacture and supplier once.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`

###### New purchase — Wooden transport pallet (`pallet_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. Physical leg P for this one material pool, conditional on its actual occurrence. New whole purchased article only; its upstream owner is recorded once. Numerator is the complete actual gross-leg V in its native unit, never a manufacturing/service burden vector, stock-corrected consumption or economic share. No extra purchase, supplier burden or credit arises from gross disclosure. Opening/closing wet empty/attached-WIP/attached-FG/reusable stocks remain complete; P/I partition the same received article by ownership and are mutually exclusive; internal reuse cancels. Native Product is a finished manufactured wooden load-platform family, production mix at plant, Mass/kg, no fixed wood species, pallet standard or geography. Only one complete wooden transport pallet is represented; boards, nails and moisture already embodied in its whole received wet mass are not additional purchases. Verify treatment/repairable construction and use condition; no assumed EURO specification, reuse count, lifetime or biomass credit.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`

###### Supplier-included ingress — Wooden transport pallet (`pallet_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. Physical leg I for this one material pool, conditional on its actual occurrence. Retain actual ingress with incoming supplies even when the supply price/provider includes it. Record one existing upstream owner; do not add another purchase or provider. Numerator is the complete actual gross-leg V in its native unit, never a manufacturing/service burden vector, stock-corrected consumption or economic share. No extra purchase, supplier burden or credit arises from gross disclosure. Opening/closing wet empty/attached-WIP/attached-FG/reusable stocks remain complete; P/I partition the same received article by ownership and are mutually exclusive; internal reuse cancels. Native Product is a finished manufactured wooden load-platform family, production mix at plant, Mass/kg, no fixed wood species, pallet standard or geography. Only one complete wooden transport pallet is represented; boards, nails and moisture already embodied in its whole received wet mass are not additional purchases. Verify treatment/repairable construction and use condition; no assumed EURO specification, reuse count, lifetime or biomass credit.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`

###### External return received — Wooden transport pallet (`pallet_er`)

Physical leg ER for this one material pool, conditional on its actual occurrence. External returned physical article received with actual previous use/burden handover and condition, not internal reuse or new purchase. Numerator is the complete actual gross-leg V in its native unit, never a manufacturing/service burden vector, stock-corrected consumption or economic share. No extra purchase, supplier burden or credit arises from gross disclosure. Opening/closing wet empty/attached-WIP/attached-FG/reusable stocks remain complete; P/I partition the same received article by ownership and are mutually exclusive; internal reuse cancels. Native Product is a finished manufactured wooden load-platform family, production mix at plant, Mass/kg, no fixed wood species, pallet standard or geography. Only one complete wooden transport pallet is represented; boards, nails and moisture already embodied in its whole received wet mass are not additional purchases. Verify treatment/repairable construction and use condition; no assumed EURO specification, reuse count, lifetime or biomass credit.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`

###### Factory-gate service electricity (`electricity_h`)

Only actual incremental packaging, handling and storage electricity during observed horizon H, linked to original released cohort Q_H including closing FG. Performed service is never removed merely because FG is held at closing. Avoid duplication of manufacturing electricity. Native Product is alternating current below 1 kV, consumption mix to user, grid-average supply, CN, with native energy property/MJ. It is usable only for actual matching Chinese low-voltage grid supply. Another geography, voltage, generator or contractual supply needs another verified identity/provider; this record is not a worldwide electricity default. Convert raw cumulative kWh by 3.6 MJ/kWh once; do not interpret the property name as fuel combustion.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: A / Q; A is actual service or capacity quantity and Q is original Q_H for this account; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy_h`
- Sources: `drewbak-components`; `ilcd-attributional-2010`

###### Factory-gate cleaning tap water (`tap_water_h`)

Conditional actual cleaning/repair water in H. Record full inlet and wet closing stock, disjoint from water already inside received articles or another inlet. It does not exhaust natural humidity exchange, which has its own cards. Native Product is tap water, Mass/kg, without fixed treatment, geography or composition; historical other-goods classification is retained but active natural-water identity is coherent. Restrict to actual externally supplied tap water; independently record quality, temperature, source/provider and meter basis. It is not deionised water, boiler steam, wastewater or atmospheric sorption. Any changed water supply or actual separately returned condensate needs its own verified atomic flow and heat-state record.

- Selected flow: Water, tap `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A is actual service or capacity quantity and Q is original Q_H for this account; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_h`
- Sources: `drewbak-components`; `ilcd-attributional-2010`

###### Pallet repair wood plank (`pallet_repair_wood`)

One actual separately received untreated solid wood plank, actual species/dimensions/wet mass and prior burden. It is not a whole pallet. Keep incoming new/used plank mass and full closing pallet wet mass; subtract overlap only from another incoming term.

- Selected flow: Solid wood pallet repair plank
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset_h`
- Sources: `ilcd-attributional-2010`; `usda-wood-handbook-2021`

###### Pallet repair steel nail (`pallet_repair_nail`)

One actual separately purchased steel nail, coating/grade verified; already embodied pallet fasteners are not repurchased. It is not a furniture screw, wood plank or whole pallet. Record new and reused external fasteners with disjoint identities and actual burden handover.

- Selected flow: Steel pallet repair nail
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset_h`
- Sources: `ilcd-attributional-2010`; `usda-wood-handbook-2021`

##### Waste flows

##### Elementary flows

###### Nitrogen in actual air intake (`n2_h_in`)

Individual ordinary gaseous Nitrogen, CAS 7727-37-9, in real air intake/exhaust. Measure full gross mass independently of burden shares, actual destination and state; air circulation alone is not chemical production or a purchased pure gas. Whole externally supplied compressed-air mass and the species analysis are a disjoint bridge: do not add component masses to their already counted incoming whole article. No default air composition, reaction, disappearance or zero.

Native Elementary identity is ordinary gaseous molecular N2 (CAS 7727-37-9), a renewable element Resource from air for actual external atmospheric ingress, with sole Mass/kg reference. Preserve the actual compartment and direction: this is not purchased separated gas or a second free Resource input for constituents already inside supplied compressed air. The alias list does not authorize liquid phase, enriched isotope, radioactive gas, an ion or another molecule. Measure actual gross mass; chemical identity alone does not establish net creation, consumption or environmental change.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air_h`
- Sources: `usda-wood-handbook-2021`

###### Oxygen in actual air intake (`o2_h_in`)

Individual ordinary gaseous Oxygen, CAS 7782-44-7, in real air intake/exhaust. Measure full gross mass independently of burden shares, actual destination and state; air circulation alone is not chemical production or a purchased pure gas. Whole externally supplied compressed-air mass and the species analysis are a disjoint bridge: do not add component masses to their already counted incoming whole article. No default air composition, reaction, disappearance or zero.

Native Elementary identity is ordinary gaseous molecular O2 (CAS 7782-44-7), a renewable element Resource from air for actual external atmospheric ingress, with sole Mass/kg reference. Preserve the actual compartment and direction: this is not purchased separated gas or a second free Resource input for constituents already inside supplied compressed air. The alias list does not authorize liquid phase, enriched isotope, radioactive gas, an ion or another molecule. Measure actual gross mass; chemical identity alone does not establish net creation, consumption or environmental change.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air_h`
- Sources: `usda-wood-handbook-2021`

###### Argon in actual air intake (`ar_h_in`)

Individual ordinary gaseous Argon, CAS 7440-37-1, in real air intake/exhaust. Measure full gross mass independently of burden shares, actual destination and state; air circulation alone is not chemical production or a purchased pure gas. Whole externally supplied compressed-air mass and the species analysis are a disjoint bridge: do not add component masses to their already counted incoming whole article. No default air composition, reaction, disappearance or zero.

Native Elementary identity is ordinary gaseous neutral argon (CAS 7440-37-1), a renewable element Resource from air for actual external atmospheric ingress, with sole Mass/kg reference. Preserve the actual compartment and direction: this is not purchased separated gas or a second free Resource input for constituents already inside supplied compressed air. The alias list does not authorize liquid phase, enriched isotope, radioactive gas, an ion or another molecule. Measure actual gross mass; chemical identity alone does not establish net creation, consumption or environmental change.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air_h`
- Sources: `usda-wood-handbook-2021`

###### Carbon dioxide in actual air intake (`co2ambient_h_in`)

Individual ordinary gaseous Carbon dioxide, CAS 124-38-9, in real air intake/exhaust. Measure full gross mass independently of burden shares, actual destination and state; air circulation alone is not chemical production or a purchased pure gas. Ambient carbon is separated from independently evidenced wood-biogenic and fossil oil/packaging carbon; no sequestration or oxidation from a total-carbon residual. Whole externally supplied compressed-air mass and the species analysis are a disjoint bridge: do not add component masses to their already counted incoming whole article. No default air composition, reaction, disappearance or zero.

- Selected flow: Carbon dioxide
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air_h`
- Sources: `usda-wood-handbook-2021`

###### Atmospheric moisture taken up (`humidity_h_in`)

Actual ordinary H2O uptake by wood/packaging/fluids during normal processing, storage and handling, not only repair/cleaning. Collect source humidity/temperature and independently measured sorption; natural exchange requires no work permission. Do not use the queried emergy/Product atmospheric-water supply as an Elementary identity. Keep each true phase and complete wet closing stock.

- Selected flow: Atmospheric water vapour uptake
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_h`
- Sources: `usda-wood-handbook-2021`

#### Outputs

##### Product flows

###### Complete-leg gross dispatch (`fg_dispatch`)

Actual whole first-released leg dispatched from its original cohort, with actual current acceptance/hold status and gross measured mass. This is the manufactured wooden-furniture-part Product family, production mix at plant, Mass/kg, without fixed geography/size/species; restrict to the actual uncoated single-piece beech leg and included verified connector. Do not reuse a raw-lumber or whole-furniture flow. Full physical gross V is not a new first-release output Q or new manufacturing burden. Hold/reinspection/return history remains explicit; fragments or disposed damaged parts require the actual Waste identity.

- Selected flow: Parts of furniture made from wood `4d818756-c439-4450-856c-b24a32c05185`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A = V is the actual complete gross leg and Q is original Q_H; sole quotient in section 8, no new Q.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: `richman-unfinished-leg`; `ilcd-attributional-2010`

###### Corrugated shipping carton (`carton_s`)

One actual complete corrugated-paperboard transport carton of the declared construction and configuration, not a collection of cartons, plastic bags, film, liners or other packaging. The compatible atomic Product-flow UUID remains unresolved. Record the actual board/flute/ply configuration, fibre composition, coatings/lamination, wet condition, integral adhesives/fasteners and supplier scope; no generic fibre fraction, treatment, size, weight or lifetime is assumed. Include integral supplied constituents once within the whole carton, while actually separate inserts, tape or other materials retain their own disjoint rows and one upstream owner. Keep this card's existing P/I/ER/S/EO role as defined by the packaging boundary and raw protocol, including packaging_receipt_basis where present; a new provider identity must not change that event definition. Retain the complete measured wet gross quantity and the original event/gate/custody/cohort in the card's stated Mass/kg unit, whether immediately used or retained at closing. Keep opening/closing empty, attached and reusable stock, internal reuse and independently measured material/water-change legs; no stock, burden or economic-share correction shrinks the gross leg. Actual manufacture/service burdens are attributed once separately using the existing original-cohort rule and sole normalization; a gross receipt or outflow alone creates no new manufacture, procurement burden, provider link or credit. Resolve a physically compatible carton identity/provider before binding it; missing identity is disclosed and never replaced with a mixed packaging category or an invented UUID.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`

###### Corrugated shipping carton (`carton_eo`)

One actual complete corrugated-paperboard transport carton of the declared construction and configuration, not a collection of cartons, plastic bags, film, liners or other packaging. The compatible atomic Product-flow UUID remains unresolved. Record the actual board/flute/ply configuration, fibre composition, coatings/lamination, wet condition, integral adhesives/fasteners and supplier scope; no generic fibre fraction, treatment, size, weight or lifetime is assumed. Include integral supplied constituents once within the whole carton, while actually separate inserts, tape or other materials retain their own disjoint rows and one upstream owner. Keep this card's existing P/I/ER/S/EO role as defined by the packaging boundary and raw protocol, including packaging_receipt_basis where present; a new provider identity must not change that event definition. Retain the complete measured wet gross quantity and the original event/gate/custody/cohort in the card's stated Mass/kg unit, whether immediately used or retained at closing. Keep opening/closing empty, attached and reusable stock, internal reuse and independently measured material/water-change legs; no stock, burden or economic-share correction shrinks the gross leg. Actual manufacture/service burdens are attributed once separately using the existing original-cohort rule and sole normalization; a gross receipt or outflow alone creates no new manufacture, procurement burden, provider link or credit. Resolve a physically compatible carton identity/provider before binding it; missing identity is disclosed and never replaced with a mixed packaging category or an invented UUID.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`

###### Gross dispatched packaging — LDPE wrapping film (`film_s`)

Physical leg S for this one material pool, conditional on its actual occurrence. Follow all gross outbound physical legs, including held/nonconforming goods actually shipped and the later reverse legs; not net delivered product mass. Numerator is the complete actual gross-leg V in its native unit, never a manufacturing/service burden vector, stock-corrected consumption or economic share. No extra purchase, supplier burden or credit arises from gross disclosure. Opening/closing wet empty/attached-WIP/attached-FG/reusable stocks remain complete; P/I partition the same received article by ownership and are mutually exclusive; internal reuse cancels. Native Product is low-density polyethylene foil (PE-LD), Mass/kg, with non-self-adhesive non-cellular non-reinforced non-laminated unsupported film classification and no fixed geography/route. Only one compatible actual LDPE film article qualifies; not PET, woven PP, multilayer film, a bag plus its film twice, or a paper carton. Declare additives, article manufacture and supplier once.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`

###### External return sent — LDPE wrapping film (`film_eo`)

Physical leg EO for this one material pool, conditional on its actual occurrence. Real external return/handover, distinct from gross packaged shipment and from waste; an internal move cancels. Numerator is the complete actual gross-leg V in its native unit, never a manufacturing/service burden vector, stock-corrected consumption or economic share. No extra purchase, supplier burden or credit arises from gross disclosure. Opening/closing wet empty/attached-WIP/attached-FG/reusable stocks remain complete; P/I partition the same received article by ownership and are mutually exclusive; internal reuse cancels. Native Product is low-density polyethylene foil (PE-LD), Mass/kg, with non-self-adhesive non-cellular non-reinforced non-laminated unsupported film classification and no fixed geography/route. Only one compatible actual LDPE film article qualifies; not PET, woven PP, multilayer film, a bag plus its film twice, or a paper carton. Declare additives, article manufacture and supplier once.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`

###### Gross dispatched packaging — Wooden transport pallet (`pallet_s`)

Physical leg S for this one material pool, conditional on its actual occurrence. Follow all gross outbound physical legs, including held/nonconforming goods actually shipped and the later reverse legs; not net delivered product mass. Numerator is the complete actual gross-leg V in its native unit, never a manufacturing/service burden vector, stock-corrected consumption or economic share. No extra purchase, supplier burden or credit arises from gross disclosure. Opening/closing wet empty/attached-WIP/attached-FG/reusable stocks remain complete; P/I partition the same received article by ownership and are mutually exclusive; internal reuse cancels. Native Product is a finished manufactured wooden load-platform family, production mix at plant, Mass/kg, no fixed wood species, pallet standard or geography. Only one complete wooden transport pallet is represented; boards, nails and moisture already embodied in its whole received wet mass are not additional purchases. Verify treatment/repairable construction and use condition; no assumed EURO specification, reuse count, lifetime or biomass credit.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`

###### External return sent — Wooden transport pallet (`pallet_eo`)

Physical leg EO for this one material pool, conditional on its actual occurrence. Real external return/handover, distinct from gross packaged shipment and from waste; an internal move cancels. Numerator is the complete actual gross-leg V in its native unit, never a manufacturing/service burden vector, stock-corrected consumption or economic share. No extra purchase, supplier burden or credit arises from gross disclosure. Opening/closing wet empty/attached-WIP/attached-FG/reusable stocks remain complete; P/I partition the same received article by ownership and are mutually exclusive; internal reuse cancels. Native Product is a finished manufactured wooden load-platform family, production mix at plant, Mass/kg, no fixed wood species, pallet standard or geography. Only one complete wooden transport pallet is represented; boards, nails and moisture already embodied in its whole received wet mass are not additional purchases. Verify treatment/repairable construction and use condition; no assumed EURO specification, reuse count, lifetime or biomass credit.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`

##### Waste flows

###### Discarded original-cohort leg (`fg_discard`)

Actual separately externalised discarded leg from the original cohort, including actual retained connector and moisture; identify contamination/physical damage and receiver. Keep original manufacturing and actually performed service/treatment burdens, without automatic T_other, credit or new production. If co-collected in another actual waste outlet retain only this source pool, not an extra outgoing exchange.

- Selected flow: Discarded beech furniture leg
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A = V is the actual complete gross leg and Q is original Q_H; sole quotient in section 8, no new Q.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: `richman-unfinished-leg`; `ilcd-attributional-2010`

###### Discarded packaging — Corrugated shipping carton (`carton_w`)

Physical leg W for this one material pool, conditional on its actual occurrence. This Waste card applies only to a real separately externalised material stream. If co-collected with another packaging material in one actual mixed outlet, retain its W pool measurement but use only mixed_packaging_waste externally, not both this component and the mixed total. Numerator is the complete actual gross-leg V in its native unit, never a manufacturing/service burden vector, stock-corrected consumption or economic share. No extra purchase, supplier burden or credit arises from gross disclosure. Opening/closing wet empty/attached-WIP/attached-FG/reusable stocks remain complete; P/I partition the same received article by ownership and are mutually exclusive; internal reuse cancels. Native Waste is cardboard packaging scrap generated at plant, GLO, Mass/kg, with no treatment specified. Its comment gives an expert-estimated 2% packaging rate; that rate is explicitly not adopted. Only actual independently weighed segregated carton scrap/damaged boxes use this card. Treatment remains collected once. A co-collected mixed outlet is instead the single mixed-packaging Waste card, with this material W retained only as a disjoint component subledger.

- Selected flow: Packaging waste, cardboard `72270223-04b1-4986-a546-94e5a0821317`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`

###### Discarded packaging — LDPE wrapping film (`film_w`)

Physical leg W for this one material pool, conditional on its actual occurrence. This Waste card applies only to a real separately externalised material stream. If co-collected with another packaging material in one actual mixed outlet, retain its W pool measurement but use only mixed_packaging_waste externally, not both this component and the mixed total. Numerator is the complete actual gross-leg V in its native unit, never a manufacturing/service burden vector, stock-corrected consumption or economic share. No extra purchase, supplier burden or credit arises from gross disclosure. Opening/closing wet empty/attached-WIP/attached-FG/reusable stocks remain complete; P/I partition the same received article by ownership and are mutually exclusive; internal reuse cancels.

- Selected flow: Waste LDPE wrapping film
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`

###### Discarded packaging — Wooden transport pallet (`pallet_w`)

Physical leg W for this one material pool, conditional on its actual occurrence. This Waste card applies only to a real separately externalised material stream. If co-collected with another packaging material in one actual mixed outlet, retain its W pool measurement but use only mixed_packaging_waste externally, not both this component and the mixed total. Numerator is the complete actual gross-leg V in its native unit, never a manufacturing/service burden vector, stock-corrected consumption or economic share. No extra purchase, supplier burden or credit arises from gross disclosure. Opening/closing wet empty/attached-WIP/attached-FG/reusable stocks remain complete; P/I partition the same received article by ownership and are mutually exclusive; internal reuse cancels.

- Selected flow: Waste wooden transport pallet
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`

###### Actual co-collected mixed packaging waste (`mixed_packaging_waste`)

One actual externally co-collected heterogeneous Waste exchange only. Measure one full wet outlet with disjoint paper/LDPE/wood/fastener/water source pools and uncertainties. Material-pool W measurements remain traceable; do not instantiate corresponding segregated carton_w/film_w/pallet_w as additional external exchanges. Any real separate outlet needs its own card. Collection/treatment/provider once, no sum of whole mixture plus components.

- Selected flow: Mixed paper–polyethylene–wood packaging waste
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-attributional-2010`

###### Removed pallet repair wood (`removed_pallet_wood`)

Conditional actual separately externalised repair/cleaning stream only. Record full wet material and independent water/solid content with source-pool bridge. If already contained in one outgoing whole pallet or mixed waste, retain the subledger only; never add both. Real unauthorised/failed work and actual disposition are still retained.

- Selected flow: Waste pallet repair wood
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset_h`
- Sources: `drewbak-components`; `ilcd-attributional-2010`

###### Removed pallet steel nail (`removed_pallet_nail`)

Conditional actual separately externalised repair/cleaning stream only. Record full wet material and independent water/solid content with source-pool bridge. If already contained in one outgoing whole pallet or mixed waste, retain the subledger only; never add both. Real unauthorised/failed work and actual disposition are still retained.

- Selected flow: Waste pallet repair steel nail
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset_h`
- Sources: `drewbak-components`; `ilcd-attributional-2010`

###### Gate-service cleaning wastewater (`wastewater_h`)

Conditional actual separately externalised repair/cleaning stream only. Record full wet material and independent water/solid content with source-pool bridge. If already contained in one outgoing whole pallet or mixed waste, retain the subledger only; never add both. Real unauthorised/failed work and actual disposition are still retained.

- Selected flow: Woodshop cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_h`
- Sources: `drewbak-components`; `ilcd-attributional-2010`

##### Elementary flows

###### Nitrogen in actual air exhaust (`n2_h_out`)

Individual ordinary gaseous Nitrogen, CAS 7727-37-9, in real air intake/exhaust. Measure full gross mass independently of burden shares, actual destination and state; air circulation alone is not chemical production or a purchased pure gas. Whole externally supplied compressed-air mass and the species analysis are a disjoint bridge: do not add component masses to their already counted incoming whole article. No default air composition, reaction, disappearance or zero.

Native Elementary identity is ordinary gaseous molecular N2 (CAS 7727-37-9), an Emission to air, unspecified, for the actual external atmospheric outlet, with sole Mass/kg reference. Preserve the actual compartment and direction: a known urban, high-stack, indoor, long-term, water or soil destination requires its matching identity. The alias list does not authorize liquid phase, enriched isotope, radioactive gas, an ion or another molecule. Measure actual gross mass; chemical identity alone does not establish net creation, consumption or environmental change.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air_h`
- Sources: `usda-wood-handbook-2021`

###### Oxygen in actual air exhaust (`o2_h_out`)

Individual ordinary gaseous Oxygen, CAS 7782-44-7, in real air intake/exhaust. Measure full gross mass independently of burden shares, actual destination and state; air circulation alone is not chemical production or a purchased pure gas. Whole externally supplied compressed-air mass and the species analysis are a disjoint bridge: do not add component masses to their already counted incoming whole article. No default air composition, reaction, disappearance or zero.

Native Elementary identity is ordinary gaseous molecular O2 (CAS 7782-44-7), an Emission to air, unspecified, for the actual external atmospheric outlet, with sole Mass/kg reference. Preserve the actual compartment and direction: a known urban, high-stack, indoor, long-term, water or soil destination requires its matching identity. The alias list does not authorize liquid phase, enriched isotope, radioactive gas, an ion or another molecule. Measure actual gross mass; chemical identity alone does not establish net creation, consumption or environmental change.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air_h`
- Sources: `usda-wood-handbook-2021`

###### Argon in actual air exhaust (`ar_h_out`)

Individual ordinary gaseous Argon, CAS 7440-37-1, in real air intake/exhaust. Measure full gross mass independently of burden shares, actual destination and state; air circulation alone is not chemical production or a purchased pure gas. Whole externally supplied compressed-air mass and the species analysis are a disjoint bridge: do not add component masses to their already counted incoming whole article. No default air composition, reaction, disappearance or zero.

Native Elementary identity is ordinary gaseous neutral argon (CAS 7440-37-1), an Emission to air, unspecified, for the actual external atmospheric outlet, with sole Mass/kg reference. Preserve the actual compartment and direction: a known urban, high-stack, indoor, long-term, water or soil destination requires its matching identity. The alias list does not authorize liquid phase, enriched isotope, radioactive gas, an ion or another molecule. Measure actual gross mass; chemical identity alone does not establish net creation, consumption or environmental change.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air_h`
- Sources: `usda-wood-handbook-2021`

###### Carbon dioxide in actual air exhaust (`co2ambient_h_out`)

Individual ordinary gaseous Carbon dioxide, CAS 124-38-9, in real air intake/exhaust. Measure full gross mass independently of burden shares, actual destination and state; air circulation alone is not chemical production or a purchased pure gas. Ambient carbon is separated from independently evidenced wood-biogenic and fossil oil/packaging carbon; no sequestration or oxidation from a total-carbon residual. Whole externally supplied compressed-air mass and the species analysis are a disjoint bridge: do not add component masses to their already counted incoming whole article. No default air composition, reaction, disappearance or zero.

- Selected flow: Carbon dioxide
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air_h`
- Sources: `usda-wood-handbook-2021`

###### Ordinary water vapour leaving (`water_vapour_h`)

Include independently observed moisture loss from normal processing/storage/handling as well as actual cleaning/repair. A permitted operation is not required for natural loss; any actual unauthorised/failed work still retains full loads and hold/waste disposition. Native Elementary is ordinary water vapour, CAS 7732-18-5, emissions to air unspecified, Mass/kg, no fixed geography. The synonym list contains liquid water, ice, bound water and heavy/tritiated/isotopic labels; these are not adopted as the actual gas. Use independently measured ordinary H2O vapour at this destination only. This is outgoing water from ordinary processing/storage/handling as well as cleaning; it does not prove a reaction or default evaporation. Known other compartments need newly matched identities.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A = V is the complete actual gross event independent of burden, stock and economic shares; use the sole quotient in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_h`
- Sources: `usda-wood-handbook-2021`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_framework | all burden vectors | Use attributional modelling only in situations actually requiring allocation under the cited ILCD scope. First assign dedicated operations/materials and subdivide physically or virtually by actual function. A woodturning manufacturer page supports route, not LCA allocation or a fixed share. | `ilcd-attributional-2010` |
| allocation_causality | each still-shared exchange | For each remaining exchange identify a determining physical causal relation, with evidence and sensitivity. Material embodiment, electricity load/time, occupied storage capacity/time and transport limiting mass/volume may differ; no blanket mass/time rule and no arbitrary physical/economic choice. Keep causal driver and burden vector separate from full physical gross mass. | `ilcd-attributional-2010` |
| allocation_residual | genuinely residual common process | Only if subdivision and exchange-specific causality leave a justified residual, allocate that residual at the same actual process gate and contemporary market value in each actual state/quality/quantity. Trace back later packing, conditioning and transport to that gate. Document units/currency/time, sensitivity and total-vector conservation; no fixed ratio. | `ilcd-attributional-2010` |
| allocation_failures | manufacture and treatment | Keep ordinary manufacturing rejects, breakage, samples, emissions and their handling/treatment burdens with the relevant manufacturing cohort even when exported/sold. T_other is permitted only for a real distinct other cohort/function and a justified one-time allocation/handover with counterpart receipt. Waste sales alone are not that evidence; recycling/true-joint-process provisions need an explicit applicable review, not automatic credit. | `ilcd-attributional-2010` |
| allocation_service | original cohort H and assets | Attribute only actual service over H to original cohort Q_H. Performed storage/handling/maintenance service is retained despite closing FG; carry forward only unused unassigned service/charge. Separate full physical asset stocks from actual service burden, with measured usage, new/old/repaired parts and fluids, remaining vector and no fixed life or one whole machine per kg. Stock-corrected consumption is not corrected a second time. | `ilcd-attributional-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

The protocol aggregation label “per reference flow” identifies only the final basis of the single quotient in section 8. Every protocol still collects unnormalised raw observations with original units, real events and the raw aggregation constraints below; collection does not divide by Q or divide an already-normalised q again. Service accounts use original Q_H over observed H; gross-card numerators are complete V, never stock-corrected consumption or burden shares.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | manufacture | finished_leg | measurement | cohort; drawing; serial or batch; configuration; actual net kg; moisture; calibration; acceptance; first release time; closing released FG | Use calibrated net whole-leg weighing excluding packaging with actual installed connector. Link actual dimension/interface/surface acceptance and first-release register; follow representative moisture sampling separately. Raw aggregation constraints: Retain raw accepted net mass and unique-release flags; sum Q once; no exchange quotient here. | kg | each complete leg and release batch | whole production period including zero release | manufacturing gate and all first-release stores | per reference flow | scale records; drawing/BOM; acceptance register; moisture samples |
| cp_material | manufacture | beech_stock; mounting_stud; abrasive_paper | measurement | exchange; lot; supplier; whole article; wet received mass; opening/closing raw/WIP; return; loss; moisture; inherited vector; owner | Weigh and reconcile receipts/issues/returns and full wet stock; verify species/route/supplied whole article and disjoint constituents. Preserve original units and manufacturing stock-correction status. Raw aggregation constraints: Collect raw only; retain all real gross legs and inherited vectors; attribute before calc_quotient. | kg | each lot and period opening/closing | full period incl failures/start-stop | supplier receiving and manufacturing stores | per reference flow | receipts; scale calibration; supplier specification; stock ledger |
| cp_energy_m | manufacture | electricity_m; compressed_air | meter | meter; exchange; initial/final readings; original unit; rate or cumulative; temperature; pressure; humidity; supply state; compressor boundary; times; cohort; H; complete external supplied V; independent actual-state whole-air density; measured nonadditive composition | Retain cumulative meters and actual rate-time series separately. Partition manufacturing/service and providers; measure real compressed-air reference conditions and leaks/condensate. Raw aggregation constraints: Raw readings only; convert original extensive units once before attribution; no division by Q here. | MJ; kWh; m3 | each meter interval and event | full period and observed service H | real meters and supply boundary | per reference flow | meter calibration; supply contract; pressure/temperature; disjoint electricity map |
| cp_energy_h | gate_service | electricity_h | meter | meter; exchange; initial/final readings; original unit; rate or cumulative; temperature; pressure; humidity; supply state; compressor boundary; times; cohort; H | Retain cumulative meters and actual rate-time series separately. Partition manufacturing/service and providers; measure real compressed-air reference conditions and leaks/condensate. Raw aggregation constraints: Raw readings only; convert original extensive units once before attribution; no division by Q here. | MJ; kWh; m3 | each meter interval and event | full period and observed service H | real meters and supply boundary | per reference flow | meter calibration; supply contract; pressure/temperature; disjoint electricity map |
| cp_water_m | manufacture | tap_water_m; wastewater_m; humidity_m_in; water_vapour_m | measurement | phase; source; destination; mass; moisture; temperature; humidity; cumulative volume; rate; substance density; opening/closing wet stocks; F_in; F_out; X_in; X_out; matched same-side OTHER event; owner | Independently measure supply/sorption/evaporation/drains and representative moisture. Weigh samples immediately with validated oven-dry method or species/temperature-calibrated electrical method; retain volatile-extractive and moisture-gradient limitations. Do not fit unknown losses with one balance residual. Raw aggregation constraints: Collect full raw phase-specific mass/state and disjoint X only; complete wet closing stock plus true influx retained; no quotient here. Independently record true F_in/F_out without residual fitting. X subtracts only documented duplicate physical quantity already in another real same-side flow, never stock, opposite-side flow, card presence or retained closing influx. | kg; m3 | each relevant event plus opening/closing | production and actual storage/handling H | all real wet stocks and water boundaries | per reference flow | paired sample masses; sampling plan; temperature/humidity; meter/calibration; receiving records |
| cp_water_h | gate_service | humidity_h_in; water_vapour_h; tap_water_h; wastewater_h | measurement | phase; source; destination; mass; moisture; temperature; humidity; cumulative volume; rate; substance density; opening/closing wet stocks; F_in; F_out; X_in; X_out; matched same-side OTHER event; owner | Independently measure supply/sorption/evaporation/drains and representative moisture. Weigh samples immediately with validated oven-dry method or species/temperature-calibrated electrical method; retain volatile-extractive and moisture-gradient limitations. Do not fit unknown losses with one balance residual. Raw aggregation constraints: Collect full raw phase-specific mass/state and disjoint X only; complete wet closing stock plus true influx retained; no quotient here. Independently record true F_in/F_out without residual fitting. X subtracts only documented duplicate physical quantity already in another real same-side flow, never stock, opposite-side flow, card presence or retained closing influx. | kg; m3 | each relevant event plus opening/closing | production and actual storage/handling H | all real wet stocks and water boundaries | per reference flow | paired sample masses; sampling plan; temperature/humidity; meter/calibration; receiving records |
| cp_waste | manufacture | wood_offcut; collected_wood_residue; spent_abrasive | measurement | outlet; source pool; wet mass; moisture; contaminants; receiving party; shipment; treatment; inherited burden; failure/sample origin | Weigh actual separate external outlets; one co-collected mixture has one measured outlet and disjoint source pools. Retain samples/rejects and actual treatment; no invented recycling credit. Raw aggregation constraints: Retain unnormalised gross V and independent burden ownership; total and constituent pools never add as extra exchanges. | kg | each bin and external dispatch | entire production period | actual collection and receiver gates | per reference flow | scale; waste transfer; receiver treatment; composition and moisture |
| cp_air_m | manufacture | n2_m_in; o2_m_in; ar_m_in; co2ambient_m_in; n2_m_out; o2_m_out; ar_m_out; co2ambient_m_out; beech_dust_air | measurement | species; CAS if molecular; phase; origin; compartment; inlet/outlet; concentration; actual volume or rate; time; temperature; pressure; humidity; size cuts; uncertainty | Measure each actual ordinary air species and dust. Convert independently verified gas-state mass from concentration and real integrated volume or integrate real rates; do not multiply integrated volume by duration. Preserve full inlet/outlet and disjoint supplied compressed-air bridge. Raw aggregation constraints: Raw species/size/phase only; no guessed reactions or fractions; q uses full V only in calc_quotient. | kg; m3 | each measured operating/ambient interval | full observed operation and H | real air intake and exhaust compartments | per reference flow | sampling/size-cut method; calibration; state measurements; carbon origin; no nested-PM sum |
| cp_air_h | gate_service | n2_h_in; o2_h_in; ar_h_in; co2ambient_h_in; n2_h_out; o2_h_out; ar_h_out; co2ambient_h_out | measurement | species; CAS if molecular; phase; origin; compartment; inlet/outlet; concentration; actual volume or rate; time; temperature; pressure; humidity; size cuts; uncertainty | Measure each actual ordinary air species and dust. Convert independently verified gas-state mass from concentration and real integrated volume or integrate real rates; do not multiply integrated volume by duration. Preserve full inlet/outlet and disjoint supplied compressed-air bridge. Raw aggregation constraints: Raw species/size/phase only; no guessed reactions or fractions; q uses full V only in calc_quotient. | kg; m3 | each measured operating/ambient interval | full observed operation and H | real air intake and exhaust compartments | per reference flow | sampling/size-cut method; calibration; state measurements; carbon origin; no nested-PM sum |
| cp_packaging | gate_service | carton; film; pallet; mixed_packaging_waste | measurement | article; material pool; direction P/I/ER/S/EO/W; whole wet mass; empty/attached-WIP/attached-FG/reusable opening/closing; F_in; F_out; X_in; X_out; matched same-side OTHER event; owner; source pool; mixed outlet; H; Q_H ; packaging receipt origin; payment/non-purchase evidence; owner/custodian; same-item prior outward ID | Weigh all six real external events for each actual article. Supplier-included I remains physical ingress with one upstream owner. Record disjoint mixed-outlet component pools; do not add their W cards to the one actual mixed Waste. Raw aggregation constraints: Collect full gross raw V by each leg; no stock correction or allocation on gross cards; independent burden service ledger; no division here. Independently record true F_in/F_out without residual fitting. X subtracts only documented duplicate physical quantity already in another real same-side flow, never stock, opposite-side flow, card presence or retained closing influx.  For packaging only, apply packaging_receipt_basis; standalone non-purchase is I, never invented ER or X. | kg | every receipt/shipment/return/discard and opening/closing | original cohort actual horizon H | empty stores WIP FG reusable custody and real receiver | per reference flow | six-leg ledger; scales; stock/repair/water bridge; one provider/treatment receipt; source pools |
| cp_asset_m | manufacture | lubricant; cutting_insert_new; cutting_insert_old_in; lathe_new; lathe_old_in; lathe_service; discarded_insert; discarded_lathe; used_oil; tool_reusable_out; lathe_reusable_out | measurement | asset or single part; new/used/repair identity; original/remaining vector; wet mass; installed fluid; opening/closing; true influx/outflow; service hours; capacity; failures/idle; unused charges; owner; H; manufacturing cohort; unique manufacturing first-release Q; observation H | Keep full machine/insert/fluid/material custody and new/old parts independently from embodied service vector. Actual usage and demonstrated service capability determine allocation; retain real additions and full closing mass simultaneously. Add every real new repair atom; do not use metal lathe as wood lathe. Raw aggregation constraints: Collect unnormalised gross physical legs and usage; separately assign actual service and carry only unused/unassigned vector; never divide here. Manufacturing capacity is attributed to the corresponding manufacturing first-release Q; actual postrelease service belongs to its original Q_H in a separate service account. H is observation, never another divisor. | kg; h | each service/receipt/repair/removal and stock date | whole manufacturing period and actual H | all owned/leased assets and installed stocks | per reference flow | asset register; supplier/maintenance BOM; calibration; usage history; counterpart vector receipts |
| cp_asset_h | gate_service | pallet_repair_wood; pallet_repair_nail; removed_pallet_wood; removed_pallet_nail | measurement | asset or single part; new/used/repair identity; original/remaining vector; wet mass; installed fluid; opening/closing; true influx/outflow; service hours; capacity; failures/idle; unused charges; owner; H | Keep full machine/insert/fluid/material custody and new/old parts independently from embodied service vector. Actual usage and demonstrated service capability determine allocation; retain real additions and full closing mass simultaneously. Add every real new repair atom; do not use metal lathe as wood lathe. Raw aggregation constraints: Collect unnormalised gross physical legs and usage; separately assign actual service and carry only unused/unassigned vector; never divide here. | kg; h | each service/receipt/repair/removal and stock date | whole manufacturing period and actual H | all owned/leased assets and installed stocks | per reference flow | asset register; supplier/maintenance BOM; calibration; usage history; counterpart vector receipts |
| cp_transport | manufacture | inbound_freight | record | real road leg; distance; cargo wet gross kg; load/volume limit; empty return; provider; included supply scope; original unit | Use actual transport documents and measured loads for each distinct provider/leg; retain packaging in gross load. Verify provider coverage and avoid duplicating driver fuel or included transport. Raw aggregation constraints: Collect raw mass and distance; actual workload and allocation before sole quotient; no default distance/loading. | kg*km; t*km | each road leg | entire supply period | supplier to actual receiving gate | per reference flow | weighbridge; consignment; distance/route; load and provider evidence |
| cp_fg | gate_service | fg_dispatch; fg_return; fg_discard | measurement | original release/cohort; original Q_H; H; full wet opening/closing FG; actual G/R; original shipment link; intact/damaged/fragment state; new work; permission; tests; acceptance; hold/waste; inherited vectors | Weigh full original-cohort gross dispatch/return/discard and all opening/closing wet FG; link original release and shipment. Record new losses/water/work separately; failed/unauthorised work retains actual loads and disposition, without presumed safe restoration. No net-delivery denominator or return-mass reversal of original first release. | kg; original test units | each event and opening/closing | actual original-cohort H | manufacturing FG to actual receiver | per reference flow | release/dispatch/return tickets; scale; work/spec permission; posttests; disposition |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_raw_units | all inventory rows | U is original unnormalised activity after one legitimate unit conversion. Cumulative kWh ×3.6 gives electrical MJ; t*km ×1000 gives kg*km. For concentration use measured cumulative volume once; integrate only an actual rate. Density is independently measured for the actual substance/state. No default heat/water conversion. | raw records; calibrated units; state | U | `usda-wood-handbook-2021` |
| calc_manufacturing | all inventory rows | For the burden dimension only, A = B_open + U_attributed - B_close - T_other. B_open/B_close are exchange-specific inherited vectors in raw/WIP and unused unassigned charges; closing released FG is excluded. T_other needs a real distinct other function/cohort plus justified one-time handover; ordinary waste/reject/sample sales are not T_other. If U is already stock-corrected consumption, set corresponding stock terms to zero after documented reconciliation; never correct twice. This rule is not applied to physical gross cards. | B_open; U_attributed; B_close; T_other | A | `ilcd-attributional-2010` |
| calc_service | all inventory rows | For an actual service account H, A is the actually performed original-cohort service plus prior assigned service vector used in H, after justified sharing and single ownership; Q denotes original Q_H. Closing released FG never reverses performed service. Only unused/unassigned charge/service vector is carried forward; asset embodiment is assigned by real capacity/use, not full purchase mass per kg. Keep service physical mass and inherited manufacturing vector separately. | H; Q_H; actual service; asset vectors; unused unassigned charges | A | `ilcd-attributional-2010` |
| calc_gross | all inventory rows | For every card explicitly marked gross, A = V, the actual complete external physical leg in native extensive units. No B_open+U-B_close, economic share, allocated burden, net delivered mass or stock retention modifies V. Physical X terms remove only overlap with another real inlet/outlet. Gross q is disclosure only and never automatically multiplied by a second supplier/treatment burden or credited; the true burden dimension is assigned once independently. | V; real direction; disjoint source pools | A | `ilcd-attributional-2010` |
| calc_quotient | all inventory rows | q = A / Q. Apply this sole division once after calc_raw_units and the one applicable burden/service or gross numerator rule. Manufacturing Q is unique first-release net kg; service/gross service accounts use original Q_H for observed H. Reference output is exactly 1 kg. For Q=0 retain A and V and report no unit q; no artificial zero. Cards and collection aggregation refer to this same q and never divide it again. | A; Q; Q_H; H | q | `ilcd-attributional-2010` |
| calc_packaging_balance | all inventory rows | For each whole packaging material pool: O + P + I + ER + F_in - X_in = C + S + EO + W + F_out - X_out. O/C include full wet empty, attached-WIP, attached-FG and reusable stocks; S is gross physical shipment, not net Q. P/I partition the same received article mutually exclusively. Independently measure actual repair/new-material and ordinary moisture/water-phase F_in/F_out; do not fit them from a residual. X removes only a proven duplicate already present in an OTHER real same-side flow term with matched event identity, never stock, opposite-side flow, card presence or closing retention. True retained new influx and full wet C both remain. Internal handovers cancel. One real mixed outlet uses one measured whole Waste/provider, with disjoint measured W source pools summing within uncertainty; total and component exchanges do not add. | O; P; I; ER; C; S; EO; W; F_in; F_out; X_in; X_out | physical balance | `ilcd-attributional-2010` |
| calc_physical | all inventory rows | At each manufacturing/FG/consolidated gate, opening full wet stock + all actual external inflows = closing full wet stock + all actual external outflows, allowing only independently established transformations and measurement uncertainty. Internal transfers cancel. Wet wood = independently established dry wood + measured wood water; u = (wet-dry)/dry and dry = wet/(1+u) only for the isolated wood fraction. Do not subtract attached connector/abrasive mass twice. Preserve each relevant elemental balance and carbon origin separately; no single-residual fit of water and species. | full wet O; full wet C; gross inflows; gross outflows; measured phases and elements | physical balance | `usda-wood-handbook-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | reference and all real exchanges | Actual configuration, product/route, native restrictions and upstream provider scope must agree; unknown auxiliary identity is not zero. | approved drawing; full BOM; supplier data; original native context |
| dq_mass | all measured mass and water | Representative moisture, full wet stock and independent water/solid/element evidence; calibration, sampling gradients and volatile extractives uncertainty remain explicit. | paired masses; moisture method; scale records; uncertainty |
| dq_complete | all period and H | Include ordinary failures/zero output/start-stop/idle/cleanup/samples, real unauthorised work and actual held/waste disposition; no missing atom hidden as other. | production/service logs; incident and disposition records |
| dq_allocation | each residual burden | Document dedicated/virtual subdivision, exchange-specific causal decision, true common-gate residual value, total vector conservation and sensitivity; no gross mass shares. | allocation worksheet; counterpart receipts; original unnormalised records |
| dq_sources | all sources and temporal scope | Sources support the declared need and original context; manufacturer product/route evidence is not a numerical factory dataset or scientific/translation approval. | full sources; source-to-rule applicability; site/time/provider disclosure |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validation_identity | reference and every card | Match complete native name/synonyms/comments, CAS when meaningful, material/phase/form/route/grade/geography/compartment/type and every property before binding. UUID has no dataset-version suffix in canonical content; exact versions are external identity evidence. Wrong raw-wood/whole-furniture core references are blocking. Auxiliary/provider/quantity gaps remain explicit and do not fabricate a core identity hold. | `richman-unfinished-leg`; `drewbak-components` |
| validation_reference | finished_leg and collection | There is one complete Product reference output linked by finished_leg, measured kg and unique first release. Counts require each actual same-configuration net complete-leg mass with moisture/calibration, never a guessed item kg or secondary property/density. Item(s) and item mean factor1 count only; this PCR does not change to an area or count denominator. | `usda-wood-handbook-2021` |
| validation_normalization | all inventory rows | Preserve unnormalised raw records, conversions and allocation before the sole quotient. Burden rows use attributed A; gross cards use full V as A with no stock/economic correction, automatic provider multiplication or second credit. Q=0 retains all real load and has no per-unit result. Service uses original Q_H over H. | `ilcd-attributional-2010` |
| validation_balance | manufacture FG and consolidated | Independently reconcile full physical mass, water and relevant elements, including moisture gain/loss, wood-biogenic, oil/packaging fossil and ambient carbon. Distinguish free/sorbed water and actual structural/reaction water; one residual cannot fit two unknowns, and no dry-machining reaction is presumed. COD/VOC/dust/element totals do not specify molecules. No whole-air aggregate plus species double count. | `usda-wood-handbook-2021` |
| validation_packaging | each material P I ER S EO W | Each real packaging material has separate six-direction cards and complete wet opening/closing empty/attached-WIP/FG/reusable stocks. Repair/new water X terms remove only genuine flow overlap. If a real mixed outlet exists, its one Waste exchange replaces external component-W cards while all W source pools remain traceable. Internal reuse cancels; whole article/component sums and treatment/provider each occur once. F_in/F_out are independently observed true increments; X is only a matched duplicate of an OTHER actual same-side flow. Neither stock nor the opposite side nor card presence permits X; no retained influx is cancelled against full wet closing stock. | `ilcd-attributional-2010` |
| validation_uncertainty | all foreground data | Unknown means collect/review with explicit bounds, not pass or zero. Retain missing core evidence as an applicability hold; actual site/provider/auxiliary data require collection. Engineering checks establish declared consistency only, not scientific approval, translation review, classification coverage or publication. | `ilcd-attributional-2010` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | After independent review, component manufacture input to compatible furniture assembly; not whole furniture/installation/use service |
| allowed_use | Declared-quantity modelling with actual species/construction/interface/uncoated state/supply gate and measurement scope matched |
| excluded_use | Measured-site-data claims without collection; different-product functional equivalence; automatic recycling/carbon credit; review/mapping/publication claims |
| required_metadata | Approved complete-leg drawing and revision; Fagus botanical species and legal origin; Single-piece unglued untreated solid construction; Kiln-dried sawn-stock supply gate and upstream ownership; Actual whole-part geometry and connection fit; Uncoated sanded market state; Actual mounting connector BOM and installation owner; Actual machining and sanding sequence; Moisture basis and independent sampling; Measured net complete-leg mass and calibration; Unique first-release cohort and Q; Actual dimensional/interface/surface acceptance and disposition; Raw and WIP opening/closing inherited vectors; Released FG and original-cohort service horizon H and Q_H; Failures samples zero-output idle cleanup and actual rework; Every packaging article and six actual directions; Whole supplies and disjoint constituent ownership; Asset receipt installed stock remaining service and retirement; Ordinary humidity exchange and each real water phase; Atomic air species and actual destination; Biogenic fossil and ambient carbon separation; Site period supply voltage geography and providers; All unresolved identities and uncertainty |
| required_quality_disclosure | Performed/unperformed scope, scientific/translation pending, unknown quantities, auxiliary UUIDs/providers, source applicability, H/cohort and uncertainty |
| update_trigger | Changed species/construction/route/connector/finish/gate/measurement/provider or native restrictions; new evidence and actual rework disposition |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| richman-unfinished-leg | literature | Richman UK, Beech and Oak Turned Tapered Leg (M8 inserted), undated manufacturer product page; https://richmanuk.com/shop/small-products-and-accessories/beech-turned-tapered-leg-330mm-390mm-450mm-high/ | Individually supplied solid turned leg; unfinished but surface prepared; inserted connector example. No weight, fixed dimension, alloy or shared-factory recipe adopted. |
| drewbak-components | literature | Drew-Bak, Solid wood furniture components – OEM manufacturing, undated manufacturer technical page; https://www.drewbak.pl/en/solid-wood-furniture-components-oem-manufacturing/ | Industrial beech component turning/milling/drilling/sanding and finished-component quality/drawing scope; adjacent laminated/finger-jointed and coating alternatives excluded. No numeric recipe, moisture target or certification adopted. |
| bukexpo-beech-supply | literature | BukExpo, Beech furniture blanks from the manufacturer, undated manufacturer technical page; https://bukexpo.com/en.html | Separate beech sawing/kiln-drying/supply-form context. Blanks are upstream, not automatically completed legs. No supplier linkage, density, yield, moisture target or kiln energy transferred. |
| usda-wood-handbook-2021 | handbook | USDA Forest Products Laboratory, Wood handbook—wood as an engineering material, FPL-GTR-282 (2021), Chapters 4 and 13, pp.4–1 to4–3 and13–1 to13–3; https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf | Hygroscopic exchange; wet/oven-dry mass relationship; representative immediate weighing and oven-dry/electrical-method limitations. No generic density, moisture specification, reaction, strength or manufacturing inventory. |
| ilcd-attributional-2010 | official_guidance | European Commission JRC, ILCD Handbook—General guide for Life Cycle Assessment—Detailed guidance, first edition March 2010, §§7.9.2–7.9.3, printed pp.255–272; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional allocation-required situations only: subdivision/virtual subdivision, exchange-specific determining physical causality, then residual common-gate actual-state market value; 100% accounting and recycling limitations. No consequential substitution, fixed shares or automatic waste credit. |
