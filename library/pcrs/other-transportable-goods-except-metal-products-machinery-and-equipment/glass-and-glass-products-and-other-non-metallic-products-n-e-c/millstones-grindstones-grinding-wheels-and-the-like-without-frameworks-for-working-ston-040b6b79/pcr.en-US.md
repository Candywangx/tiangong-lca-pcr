---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.millstones-grindstones-grinding-wheels-and-the-like-without-frameworks-for-working-ston-040b6b79
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Vitrified white-fused-alumina straight grinding wheel manufacture

## 1. Scope and Applicability

This attributional method covers one complete bare plain straight annular grinding wheel of declared configuration, made from whole purchased white fused alumina abrasive grain, a whole unfired vitrified ceramic-bond preparation, soluble dextrin powder and actual water. Include receiving/conditioning, weighing and actual binder dissolution/mixing, die filling and hydraulic pressing, drying, natural-gas periodic-kiln firing/cooling, all required face/bore/periphery finishing, balancing, maker-required testing and unique first complete quality release. Retain real transport, controls, failed/zero-output/start-stop/idle/cleanup runs, samples, rework and capital service. Original-cohort postrelease packing, FG storage, handling, dispatch and returns remain separately disclosed services over observed H.

Exclude loose abrasive grain/powder as final product, binder-free sintered grinding spheres, natural-stone wheels, SiC/sol-gel/diamond/CBN abrasive families, resin/rubber/shellac/silicate/magnesia bonds, cut-off discs, coated paper/belts, mounted/shank/metal-hub/bushing assemblies, impregnated or wax/oil/sulfur-treated wheels, special recessed/cup/worm profiles, grinding machines, installation/use/grinding duty and downstream end of life. No acquired finished-wheel packaging route substitutes for manufacture. New actual inputs, phase changes, controls and outlets within the selected route must be added atomically; actual departure from these terminal/route restrictions requires renewed applicability evidence.

The dedicated BREF route, EPA complete flow chart and manufacturer whole-wheel/finishing evidence are a transparent technical synthesis, not one SKU/factory/order inventory. The Norton straight01 example is accompanied by recessed05 alternatives. Zische prepares bond onsite; this declared purchased-bond boundary retains that preparation upstream and retains onsite conditioning. EPA steam-autoclave removal is conditional for a different porogen; it does not create steam here. No source recipe fraction, porosity, mass per wheel, density, yield, firing temperature/time, speed/load/burst threshold, lifetime, emission factor, certificate or test pass becomes a PCR default. Actual governing maker/specification QC/test/acceptance records are future collection evidence. `jrc-ceramic-bref-2007`; `epa-abrasives-1995`; `zische-wheel-manufacture`; `comet-wheel-manufacture`; `norton-38a-terminal`

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.millstones-grindstones-grinding-wheels-and-the-like-without-frameworks-for-working-ston-040b6b79 |
| classification_refs | CPC 3.0 37910; narrower; current accepted association: `classifications/mappings/cpc-3.0-to-pcr.yaml` and `docs/adr/cpc3-additional34-20261029-37910.md`; complete method scope/exclusions apply, not full-leaf or scientific/translation approval |
| covered_products | Complete unmounted unimpregnated white-fused-alumina vitrified-bond straight annular wheels |
| excluded_products | All alternative terminal/material/bond/route families listed in Section1 |
| representative_product | Plain straight01 whole wheel; primary shape/material example only |
| production_route | Whole grain/bond/dextrin/water → actual mixing → hydraulic forming → drying → gas periodic firing/cooling → full required finishing/balancing/tests → unique first release |
| market_state | Bare all-ceramic whole wheel before removable transport packing; future use requires its own qualified system |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Produce a complete declared conventional bonded abrasive wheel for its specified later grinding function |
| How much | 1 kg net whole finished bare wheel at unique first complete quality release |
| How well | Actual composition, grain/bond grade, geometry, porosity/state and governing manufacturer/specification acceptance; no cross-wheel service equivalence |
| How long or cycle | One declared production cohort; actual later service over observed horizon H; no assumed useful life |
| reference_flow_link | finished_wheel |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Abrasives `685e7b7f-1555-4112-aa0b-3786e5508534` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | complete bare straight annular wheel; no framework/shank/metal hub/bushing; no impregnation; white-fused grain grade and grit; whole ceramic-bond supply boundary and complete composition; dextrin supply state and actual mixing; actual porogen and burnout; measured retained water and porosity/phase composition; same-configuration drawing OD/bore/thickness; net whole-wheel weighing and calibration; first-release ID and governing maker-spec QC/balance/test/acceptance disposition; plant and production period/cohort; gas periodic kiln and drying configuration; China1–35kV user-side grid; each provider owner; WIP inherited vector; original Q and service horizon H; packaging gross legs and asset stock/service distinction |

Every qualifier is required in a concrete data package and in each relevant flow context. The physical reference is the whole wheel, not pure alumina, grain, binder or paper area. Q is the sum of uniquely first-released net whole-wheel masses of the declared configuration/cohort, excluding removable packaging, samples, rejects and any repeat release of the same physical wheel. A final reference-product UUID must be positively compatible with that complete terminal before normal guidance use; a raw-material or unrelated consumable identity is insufficient.

Native Abrasives is a Product at-plant production family with cutting-tool/abrasive-consumable aliases; Auxiliary consumable input describes its downstream role, not a prohibition on producer output. The full record has no CAS or loose-grain-only constraint. Primary whole-wheel manufacturing and EW white-fused/V vitrified designation evidence positively narrow this family to the complete bare wheel specified here, including retained ceramic bond and actual retained matter, with porosity as void rather than added mass. This is a qualified family inference, not an exact-SKU match or permission to substitute raw grain, coated paper, sintered spheres or another bonded tool. Keep actual maker, grade, route, composition, no-metal-bushing/no-impregnation state and all reference qualifiers. Native Mass 93a60a56-a3c8-11da-a746-0800200b9a66 → unit group 93a60a57-a4c8-11da-a746-0800200c9a66 → kg; no density or item-weight conversion is supplied. `zische-wheel-manufacture`; `zische-wheel-designation`; `jrc-ceramic-bref-2007`

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh complete first-released bare wheels on a calibrated scale under declared configuration, moisture and temperature; cp_release records actual mass/count and unique release IDs. Never infer kg/item, density or lifetime from a secondary property. |
| native_electricity | electricity; service_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve native electrical extensive energy; convert raw kWh once at3.6MJ/kWh. This does not impose Mass/kg on utilities or an LHV interpretation of electricity. |
| native_hydraulic | hydraulic_fluid | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Preserve native extensive volume; independently measure same-fluid composition/state density for physical mass; installed wet stock does not cancel actual new influx. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Whole purchased prepared abrasive grain and complete unfired ceramic bond/dextrin supplies plus actual water/energy/auxiliaries at the plant |
| starting_condition_role | author-declared physical boundary with upstream suppliers retained |
| product_classification_scope | Narrow complete wheel subset of37910, not every abrasive article |
| recursive_input_rule | A purchased finished wheel is a complete separate upstream product and cannot replace the selected raw-to-wheel route. Approved internal returns carry their inherited vector and cancel only as internal legs. |
| upstream_dataset_requirement | One compatible whole-supply provider per exchange with declared upstream grain/bond preparation, transport and included packaging; no constituent double purchase |
| disclosure | Declare complete stage/site/cohort boundary, each provider owner, all failures/stocks/physical outlets, first release Q and separate H service; qualify every extension |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_scope | manufacture; cohort_service | Only complete bare plain straight annular white-fused-alumina vitrified-ceramic-bond wheels from whole grain/bond/dextrin/water through mixing, hydraulic pressing, drying, natural-gas periodic firing/cooling, full required finishing, balancing and maker-governed first complete acceptance are covered. Exclude loose grain/powder, binder-free grinding spheres, natural-stone wheels, SiC/sol-gel/diamond/CBN abrasive families, resin/rubber/shellac/silicate/magnesia bonds, cut-off discs, coated paper/belts, framework/shank/metal-hub/bushing assemblies, impregnation or wax/oil/sulfur treatment, recessed/cup/worm profiles, grinding equipment and installation/use systems. Retain actual postrelease original-cohort services without new Q. Other utility voltages/geographies need a compatible new identity; current electrical card is China1–35kV user-side grid only. | jrc-ceramic-bref-2007; epa-abrasives-1995; norton-38a-terminal |
| boundary_complete | manufacture | Include all raw-to-complete-wheel operations and actual start/stop/idle/failed/zero-output/cleanup/rework/control/asset burdens; a wheel is not finished merely after firing. Actual final finishing and maker-governed balance/test/acceptance are inside first-release manufacture. | jrc-ceramic-bref-2007; zische-wheel-manufacture; comet-wheel-manufacture; epa-abrasives-1995 |
| boundary_gross | all physical exchanges | Maintain independent full gross mass and relevant Al/Si/C/H/O/B/F/Cl/S/N element balances. Incoming prepared formulations and assets include actual carrier water/deposits. Each external repair/water/packaging inflow and full wet closing stock remain; X_in/X_out removes only overlap with another incoming/outgoing flow term already counting that same leg, never stock retention. Physical gross legs are never multiplied by burden-allocation shares. | jrc-ceramic-bref-2007; ilcd-allocation-2010 |
| boundary_fg | manufacture; cohort_service | First release Q already includes the same cohort closing FG; do not subtract its manufacturing burden or add it again as product output. Manufacturing B_close contains raw stores, WIP and genuinely unused/unassigned non-WIP supplies/service charges only. Postrelease delivery/return/reinspection is not production; original cohort burden and Q remain linked. Net-delivery accounting is outside this method and requires a full opening/closing-FG historical-burden, gross G/R and original-delivery reversal bridge before use. | ilcd-allocation-2010 |
| boundary_extension | all inventory rows | Add every real newly observed supplied formulation, chemical, energy carrier, repair part, waste, emission species and external return as its own atomic card with native extensive unit and provider scope. A missing UUID is recorded for that specific physical exchange, not a collection label or permission to omit it. No fixed steam/boiler/condensate/air aggregate is assumed. | jrc-ceramic-bref-2007; epa-abrasives-1995 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_stage_receive_mix | manufacture | Whole supply/packaging receipts and opening/closing feed; actual screening/conditioning, dextrin dissolution, wet/dry mixing and dust capture; retain upstream bond manufacture once | jrc-ceramic-bref-2007; ilcd-allocation-2010 |
| boundary_stage_form_dry | manufacture | Actual die fill, hydraulic forming, demoulding, green-state inspection, dryer moisture/air/energy and green rejects/WIP | jrc-ceramic-bref-2007; ilcd-allocation-2010 |
| boundary_stage_fire_cool | manufacture | Actual kiln charge/setting, binder/porogen burnout, vitrification, gas/air/heat, cooling, kiln losses and failed charges; no schedule specified | jrc-ceramic-bref-2007; ilcd-allocation-2010 |
| boundary_stage_finish_accept | manufacture | All real face/bore/periphery machining, dust/wet-sludge/wastewater/consumable records, balancing, maker-required tests, samples/disposition and unique first release | jrc-ceramic-bref-2007; ilcd-allocation-2010 |
| boundary_stage_controls_assets | manufacture | Actual extraction/filtration/maintenance and measured asset service with physical new/old parts, wet installed charge and stocks | jrc-ceramic-bref-2007; ilcd-allocation-2010 |
| boundary_stage_fg_service | cohort_service | Actual original-cohort packing/storage/handling/dispatch/returns/H; ingress packaging attributed to its real originating stage | jrc-ceramic-bref-2007; ilcd-allocation-2010 |
| packaging_receipt_basis | packaging | For each actual whole packaging article, P records paid procurement (standalone or bundled, with or without a separate invoice). I records first non-purchased external ingress, including standalone gifts, loans, rental/pool issues and unpaid supplier-attached packaging; supplier attachment is only one I subset. ER requires the same item or an auditable matching batch linked to this site's own prior outward record; another party's prior use alone is not a return. P/I/ER are disjoint. The existing matching physical-article cards and raw subledgers cover these origins subject to every native material/form/state qualification; incompatible actual articles require their own atomic rows, never a substitute UUID. X_in/X_out remain separate measured material/water-change terms, not a substitute for whole-article receipt. Keep gross wet quantities, owner/custodian, payment/non-purchase basis, provenance, prior-outward links, actual state/unit and inherited manufacture/service vectors. A free receipt is neither a new manufacture nor automatically burden-free: attribute actual service and incremental transport/handling once to the proper original cohort/denominator and retain genuinely unused service separately, without a default lifetime or credit. Stock, physical gross legs and burden vectors remain separate. This is the declared conserving foreground-accounting implementation, not a claim that the cited source prescribes these variable names. | ilcd-allocation-2010 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | Complete grain-to-wheel manufacture | required | Selected plain straight vitrified whole-wheel route | All stages and real controls/assets; see stage records below | 1 kg first-released complete bare wheel |
| cohort_service | Original-cohort packaging and FG services | conditional | Actual observed postrelease service horizon H including ingress-packaging bookkeeping | Incremental service and material ownership; internal Q cancels on consolidation | same original Q; no new product Q |

Internal stage transfers, WIP movements and retained FG are physical ledgers, not extra saleable output cards. All following descriptions, native restrictions and stage/cohort conditions form part of each exchange’s consumable context. Conditional cards require actual presence/absence evidence; none prescribes a recipe or default zero.

### Process: Complete wheel manufacture (`manufacture`)

#### Inputs

##### Product flows

###### Whole white fused alumina abrasive grain (`alumina_grain`)

Receive the whole prepared fused and size-graded alumina grain, including actual impurities and moisture. Native CAS1344-28-1 and fused calcined-alumina route apply; Bayer powder, sintered/sol-gel grain, grain-making furnace and a finished wheel are different boundaries. Declare real grit grade, supplier preparation and inbound owner; assay is a subledger, not another purchase.

- Selected flow: White Fused Alumina `429f2b7f-592a-434c-92e2-43a6b4859300`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_material.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `jrc-ceramic-bref-2007`

###### Whole purchased unfired ceramic-bond preparation (`ceramic_bond`)

One actual supplier formulation of unfired vitrifiable mineral/glass-frit bond powder, including its complete composition, impurities and retained water. Keep supplier mixing/grinding/frit manufacture upstream once; actual onsite conditioning and wheel mixing remain foreground. Do not purchase its feldspar, clay, kaolin, silica or frit assay components again. Onsite bond manufacture requires separate actual purchased ingredients and all real grinding/energy/loss exchanges.

- Selected flow: Dry vitrified ceramic-bond preparation
- Flow property / unit: Mass / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_material.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `jrc-ceramic-bref-2007`

###### Whole soluble dextrin temporary binder (`dextrin_binder`)

Selected temporary-binder route uses soluble starch-conversion dextrin supplied as one whole powder. Declare actual grade, moisture, origin and carbon composition; dissolve/mix onsite using the separately metered water. Native identity does not prescribe a concentration or imply every organic fraction becomes CO2. Purchased aqueous binder instead requires its one whole formulation boundary and removal of duplicate dry-binder/water purchases.

- Selected flow: dextrin `6de43277-f0a5-496b-9139-0ad75b27a767`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_material.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `jrc-ceramic-bref-2007`

###### External treated process-water supply (`process_water`)

Whole actual treated industrial water crossing the site boundary for binder dissolution, moistening, finishing, cleanup or makeup. Native Mass basis and treated-water identity apply; no fixed geography, purity or treatment recipe. Record supplier/provider boundaries and purpose separately; internal recirculation and formulation-carried water are not a second supply. Measure any volume-to-mass density at actual composition and temperature.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_material.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `jrc-ceramic-bref-2007`

###### Conditional crushed walnut-shell pore former (`walnut_porogen`)

Include only when the actual approved wheel formulation uses this one pore former. Record whole supplied shell and moisture, crushing supplier, measured burnout and real species; edible in-shell walnuts are not this input. This route excludes chlorinated/naphthalene porogen removal and steam autoclaving. Absent use requires evidence, not an assumed zero for all pore-forming materials.

- Selected flow: Crushed dry walnut shell
- Flow property / unit: Mass / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_material.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `jrc-ceramic-bref-2007`

###### Conditional whole emulsified mould-release preparation (`release_preparation`)

If actually applied to the steel die, receive one complete emulsified surfactant-modified release preparation. Native emulsified route is mandatory; record supplier-approved chemistry, carrier water, grade, transfer to green ware, losses and eventual species. The native generic name does not verify formulation compatibility. No constituent oil/surfactant/water duplicate purchase; another release chemistry needs its own card.

- Selected flow: Release agent `5fcf34f0-05a0-4892-84cd-be4173fffa48`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_material.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `jrc-ceramic-bref-2007`

###### Metered manufacturing electricity (`electricity`)

Actual China1–35kV user-side grid-average alternating current for receipt/conditioning, mixing, pressing, dryer auxiliaries, kiln auxiliaries, finishing, balancing/tests and controls. Native reference is Net calorific value/MJ; kWh is converted dimensionally once using3.6MJ/kWh, not a fuel or thermal-efficiency claim. Reconcile submeters with the site total and one supply-provider owner; do not count generation/transmission or included transformation twice. Other voltage/geography needs compatible identity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_utility.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utility`
- Sources: `jrc-ceramic-bref-2007`

###### Whole industrial-kiln natural-gas fuel (`natural_gas`)

Whole actual natural gas burned in the industrial kiln and any actual gas dryer; native Mass/kg is the reference. No fixed CAS, gas analysis, geography, supplier, density or heating value is supplied. Preserve original metered pressure/temperature/compressibility and composition; derive carrier mass using independent actual state density. Heat MJ, LHV/HHV and combustion species are separate linked subledgers, never another fuel purchase or a purchased-heat duplicate.

- Selected flow: Natural gas `c536902d-9d84-4984-8504-ab88cdbe8b7a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_utility.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utility`
- Sources: `jrc-ceramic-bref-2007`

###### Whole hydraulic-fluid makeup (`hydraulic_fluid`)

Receive the whole approved mineral- or synthetic-base hydraulic fluid with additives for the press. Native Volume/m3 applies; the selected identity fixes no grade, recipe or density. Keep new/used external receipts, installed charge, withdrawals, leakage and wet closing stock physically; retain all real inflow even when left in closing stock. Use independently measured actual-fluid density for the mass ledger; never infer it from the other variant’s1:1 properties.

- Selected flow: Hydraulic Fluid `30691a38-a947-4b41-991e-194f6c9aa88f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_asset.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`

###### Conditional onsite handling diesel (`diesel`)

Use only for an actual onsite diesel forklift or handling engine. Native whole-fuel Mass/kg has no fixed grade, formulation, density, heating value, refinery, geography or provider; collect these and actual exhaust species. Fuel and exhaust already inside an external transport-provider dataset are not recreated here. Electric handling instead remains in metered electricity, not fictitious diesel.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_utility.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utility`
- Sources: `jrc-ceramic-bref-2007`

###### Steel wheel-pressing die (`steel_die`)

One actual steel die including its real replaceable inserts; no product bore sleeve implied. Record full asset mass/count and wet/contaminated new/old repair parts separately from this cohort’s measured service share; no fixed life or entire die per kg.

- Selected flow: Steel wheel-pressing die
- Flow property / unit: Mass / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_asset.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`

###### Alumina kiln setter plate (`kiln_setter`)

One actual alumina setter plate supporting ware during firing; composition and approved kiln configuration must be measured. Full receipts/closing mass, breakage, deposits and replacement remain physical; service burden is assigned from actual service/wear records without an invented lifetime.

- Selected flow: Alumina kiln setter plate
- Flow property / unit: Mass / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_asset.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`

###### Alumina refractory repair brick (`kiln_repair`)

Actual dense alumina refractory repair brick, distinct from the setter and product abrasive. Keep complete incoming brick, adhering water/deposits, removed old brick and full closing installed stock. Remove overlap only if already contained in a whole kiln receipt, not because new material remains installed.

- Selected flow: Alumina refractory repair brick
- Flow property / unit: Mass / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_asset.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`

###### Polyester dust-filter bag (`filter_bag`)

One actual polyester fabric filter bag, with collected dust inventoried separately. Record new bag and removed wet/contaminated bag, cleaning, electricity and actual filtration service; no fibre-only UUID or assumed complete particle capture.

- Selected flow: Polyester dust-filter bag
- Flow property / unit: Mass / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_asset.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`

###### Steel-shank diamond finishing tool (`diamond_tool`)

One real assembled diamond tool used only if the actual wheel-finishing line requires it. Whole tool receipt, replaced inserts, steel/diamond losses and supplier production are owned once; unworked diamond or binder resin alone is not the assembly.

- Selected flow: Steel-shank diamond finishing tool
- Flow property / unit: Mass / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_asset.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`

###### Hydraulic wheel-forming press (`hydraulic_press`)

One configured physical asset, with whole acquisition/retirement stock records and separately attributable manufacturing/service burden for actual use. Preserve installed fluids, repairs and idle/failed-run service; no fixed life, guessed mass, whole machine per kg, or duplicate materials already inside the provider.

- Selected flow: Hydraulic wheel-forming press
- Flow property / unit: Number of items / item
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_asset.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`

###### Wheel drying oven (`drying_oven`)

One configured physical asset, with whole acquisition/retirement stock records and separately attributable manufacturing/service burden for actual use. Preserve installed fluids, repairs and idle/failed-run service; no fixed life, guessed mass, whole machine per kg, or duplicate materials already inside the provider.

- Selected flow: Wheel drying oven
- Flow property / unit: Number of items / item
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_asset.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`

###### Natural-gas periodic wheel kiln (`gas_kiln`)

One configured physical asset, with whole acquisition/retirement stock records and separately attributable manufacturing/service burden for actual use. Preserve installed fluids, repairs and idle/failed-run service; no fixed life, guessed mass, whole machine per kg, or duplicate materials already inside the provider.

- Selected flow: Natural-gas periodic wheel kiln
- Flow property / unit: Number of items / item
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_asset.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`

###### Wheel face-bore-periphery finishing machine (`finishing_machine`)

One configured physical asset, with whole acquisition/retirement stock records and separately attributable manufacturing/service burden for actual use. Preserve installed fluids, repairs and idle/failed-run service; no fixed life, guessed mass, whole machine per kg, or duplicate materials already inside the provider.

- Selected flow: Wheel face-bore-periphery finishing machine
- Flow property / unit: Number of items / item
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_asset.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`

###### Wheel balancing and quality-test rig (`quality_rig`)

One configured physical asset, with whole acquisition/retirement stock records and separately attributable manufacturing/service burden for actual use. Preserve installed fluids, repairs and idle/failed-run service; no fixed life, guessed mass, whole machine per kg, or duplicate materials already inside the provider.

- Selected flow: Wheel balancing and quality-test rig
- Flow property / unit: Number of items / item
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_asset.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `jrc-ceramic-bref-2007`

###### External road freight service (`road_transport`)

Actual inbound material and external waste-treatment haul legs; record route, gross carried mass including actual packaging, distance, load/return status and provider scope. Service tkm is not a physical material input; do not scale gross legs by burden allocation fractions. Assign onsite truck fuel/exhaust only if outside the provider scope.

- Selected flow: Lorry road-freight service
- Flow property / unit: Transport / tkm
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_transport.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_transport`
- Sources: `jrc-ceramic-bref-2007`

##### Elementary flows

###### Gross oxygen taken from ambient air (`oxygen_in`)

Actual ambient molecular constituent at the resources-from-air boundary, CAS and native resource compartment retained. Measure gross air volume once with independent composition/state density; do not also input an aggregate air mass or infer emissions from oxygen demand alone.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_species.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `jrc-ceramic-bref-2007`

###### Gross dinitrogen taken from ambient air (`nitrogen_in`)

Actual ambient molecular constituent at the resources-from-air boundary, CAS and native resource compartment retained. Measure gross air volume once with independent composition/state density; do not also input an aggregate air mass or infer emissions from oxygen demand alone.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_species.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `jrc-ceramic-bref-2007`

###### Gross argon taken from ambient air (`argon_in`)

Actual ambient molecular constituent at the resources-from-air boundary, CAS and native resource compartment retained. Measure gross air volume once with independent composition/state density; do not also input an aggregate air mass or infer emissions from oxygen demand alone.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_species.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `jrc-ceramic-bref-2007`

###### Ambient water-vapour intake (`humidity_in`)

Gross measured air humidity; keep liquid water, organic reaction water and mineral structural water distinct. Do not use output-vapour or treated-water UUID as a resource intake.

- Selected flow: Ambient water vapour
- Flow property / unit: Mass / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_species.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `jrc-ceramic-bref-2007`

###### Ambient carbon-dioxide intake (`ambient_co2_in`)

Actual incoming background CO2 measured with the ventilation/combustion air if material to the physical carbon ledger; keep pass-through and newly generated fossil/biogenic gas separate. No fossil-resource tag is inferred for ambient air.

- Selected flow: Atmospheric carbon dioxide
- Flow property / unit: Mass / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_species.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `jrc-ceramic-bref-2007`

#### Outputs

##### Product flows

###### Complete bare first-released straight wheel (`finished_wheel`)

One declared plain straight annular all-ceramic wheel configuration without framework, shank, metallic hub/bushing or impregnation. Whole accepted wheel contains grains, fired ceramic bond and actual retained matter; it is not Al2O3 assay mass. Real maker/spec governing acceptance, dimensional/visual/grade/porosity checks, finishing, balance and required test records establish the first complete release event. No operating speed, load, burst threshold, recipe or assumed test pass is specified. Native Abrasives is a Product at-plant production family with cutting-tool/abrasive-consumable aliases; Auxiliary consumable input describes its downstream role, not a prohibition on producer output. The full record has no CAS or loose-grain-only constraint. Primary whole-wheel manufacturing and EW white-fused/V vitrified designation evidence positively narrow this family to the complete bare wheel specified here, including retained ceramic bond and actual retained matter, with porosity as void rather than added mass. This is a qualified family inference, not an exact-SKU match or permission to substitute raw grain, coated paper, sintered spheres or another bonded tool. Keep actual maker, grade, route, composition, no-metal-bushing/no-impregnation state and all reference qualifiers. Native Mass 93a60a56-a3c8-11da-a746-0800200b9a66 → unit group 93a60a57-a4c8-11da-a746-0800200c9a66 → kg; no density or item-weight conversion is supplied.

- Selected flow: Abrasives `685e7b7f-1555-4112-aa0b-3786e5508534`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `identity_reference`
- Collection protocol: `cp_release`
- Sources: `jrc-ceramic-bref-2007`; `zische-wheel-manufacture`; `comet-wheel-manufacture`; `norton-38a-terminal`; `zische-wheel-designation`

##### Waste flows

###### Unfired alumina-bond wheel reject (`green_reject`)

Actual nonreleased green reject including water, binder and grain; distinguish approved internal return from external waste; no assumed reusability or burden removal.

- Selected flow: Unfired alumina-bond wheel reject
- Flow property / unit: Mass / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `jrc-ceramic-bref-2007`

###### Rejected fired alumina vitrified wheel (`fired_reject`)

Actual failed wheel, destructive-test specimen or breakage with complete whole mass and prior burden; sale or offsite transfer alone does not remove manufacturing/treatment burden. Broken wheels are not assumed restorable.

- Selected flow: Rejected fired alumina vitrified wheel
- Flow property / unit: Mass / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `jrc-ceramic-bref-2007`

###### Collected white-fused-alumina grain dust (`grain_dust`)

One segregated dry collector stream from grain handling, with composition/moisture and actual treatment; retained internally or mixed with bond dust must be traced without double output.

- Selected flow: Collected white-fused-alumina grain dust
- Flow property / unit: Mass / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `jrc-ceramic-bref-2007`

###### Collected ceramic-bond preparation dust (`bond_dust`)

One segregated whole bond-powder collector stream; assay components remain subledgers. Do not relabel as alumina dust or use one residual for two unknown streams.

- Selected flow: Collected ceramic-bond preparation dust
- Flow property / unit: Mass / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `jrc-ceramic-bref-2007`

###### Alumina-ceramic-bond finishing sludge (`finishing_sludge`)

One physically mixed wet sludge from actual wet finishing; independently sample dry solids/composition/water and whole wet mass. Dry cuttings and separate liquid effluent are separate streams, not duplicate dry/wet purchases.

- Selected flow: Alumina-ceramic-bond finishing sludge
- Flow property / unit: Mass / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `jrc-ceramic-bref-2007`

###### Dry alumina-ceramic-bond wheel cuttings (`dry_cuttings`)

Real segregated dry finishing cuttings only when present; keep dust/sludge destination and composition separate.

- Selected flow: Dry alumina-ceramic-bond wheel cuttings
- Flow property / unit: Mass / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `jrc-ceramic-bref-2007`

###### Untreated wheel-finishing wastewater (`effluent`)

Whole actual liquid effluent transferred to external treatment, after removal of separately weighed sludge. Record dissolved/suspended constituents, measured mass/density, sampling, destination and provider. COD/total carbon/boron are analytical indicators, not masses of named molecules; no direct river-release identity is implied.

- Selected flow: Untreated wheel-finishing wastewater
- Flow property / unit: Mass / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `jrc-ceramic-bref-2007`

###### Used hydraulic lubricating oil (`used_hydraulic_oil`)

Real contaminated used lubricating hydraulic oil at generation, Mass/kg. Native allows petroleum or synthetic oil and no predetermined treatment; retain actual wet composition, transfer and treatment burden. No default recycling credit or coproduct status.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `jrc-ceramic-bref-2007`

###### Spent polyester dust-filter bag (`spent_filter`)

Actual wet/contaminated removed filter bag; separate any dust already counted elsewhere, and retain new replacement and whole closing stock.

- Selected flow: Spent polyester dust-filter bag
- Flow property / unit: Mass / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `jrc-ceramic-bref-2007`

###### Retired steel wheel-pressing die (`spent_steel_die`)

Actual worn whole die or separately retired steel insert; dry steel and adhering liquids/deposits tracked. Do not substitute stamping offcuts or assume recycling burden removal.

- Selected flow: Retired steel wheel-pressing die
- Flow property / unit: Mass / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `jrc-ceramic-bref-2007`

###### Broken alumina kiln setter plate (`spent_setter`)

Actual broken/worn plate with adhered ceramic or water; separate from wheel waste and repair bricks.

- Selected flow: Broken alumina kiln setter plate
- Flow property / unit: Mass / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `jrc-ceramic-bref-2007`

###### Removed alumina refractory repair brick (`spent_refractory`)

Actual removed old refractory with contamination and retained water, including kiln maintenance waste; do not erase corresponding new repair input merely because installed closing stock rises.

- Selected flow: Removed alumina refractory repair brick
- Flow property / unit: Mass / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `jrc-ceramic-bref-2007`

###### Spent steel-shank diamond finishing tool (`spent_diamond_tool`)

Actual removed assembled tool; split genuinely separate inserts/steel/diamond outlets when physically separated and retain all treatment burdens.

- Selected flow: Spent steel-shank diamond finishing tool
- Flow property / unit: Mass / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `jrc-ceramic-bref-2007`

##### Elementary flows

###### oxygen to air (`oxygen_out`)

One actual emission or gas pass-through at the native unspecified-air compartment; retain molecular CAS where supplied, real outlet, time, origin and phase. This identity supplies no emission amount. Molecular gas cards require ordinary nonradioactive gas of the named CAS and origin; exclude ionic/isotopic aliases, dissolved/solid forms and unrelated catalogue terms. Indoor, soil/water, stratospheric and long-term compartments are excluded. Particle cards retain actual disjoint aerodynamic bins. Fossil/biogenic generated CO2 excludes separately recorded ambient pass-through. Independently measure/reconcile the actual species; NOx/SOx/VOC/total-element indicators cannot substitute for this molecule. Disjoint particle-size bins and chemical-species subledgers must not double total dust mass. Fossil/biogenic splits require carbon-origin evidence; imported air constituents and reaction/free/structural water are independently reconciled.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_species.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `jrc-ceramic-bref-2007`; `epa-abrasives-1995`

###### dinitrogen to air (`nitrogen_out`)

One actual emission or gas pass-through at the native unspecified-air compartment; retain molecular CAS where supplied, real outlet, time, origin and phase. This identity supplies no emission amount. Molecular gas cards require ordinary nonradioactive gas of the named CAS and origin; exclude ionic/isotopic aliases, dissolved/solid forms and unrelated catalogue terms. Indoor, soil/water, stratospheric and long-term compartments are excluded. Particle cards retain actual disjoint aerodynamic bins. Fossil/biogenic generated CO2 excludes separately recorded ambient pass-through. Independently measure/reconcile the actual species; NOx/SOx/VOC/total-element indicators cannot substitute for this molecule. Disjoint particle-size bins and chemical-species subledgers must not double total dust mass. Fossil/biogenic splits require carbon-origin evidence; imported air constituents and reaction/free/structural water are independently reconciled.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_species.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `jrc-ceramic-bref-2007`; `epa-abrasives-1995`

###### argon to air (`argon_out`)

One actual emission or gas pass-through at the native unspecified-air compartment; retain molecular CAS where supplied, real outlet, time, origin and phase. This identity supplies no emission amount. Molecular gas cards require ordinary nonradioactive gas of the named CAS and origin; exclude ionic/isotopic aliases, dissolved/solid forms and unrelated catalogue terms. Indoor, soil/water, stratospheric and long-term compartments are excluded. Particle cards retain actual disjoint aerodynamic bins. Fossil/biogenic generated CO2 excludes separately recorded ambient pass-through. Independently measure/reconcile the actual species; NOx/SOx/VOC/total-element indicators cannot substitute for this molecule. Disjoint particle-size bins and chemical-species subledgers must not double total dust mass. Fossil/biogenic splits require carbon-origin evidence; imported air constituents and reaction/free/structural water are independently reconciled.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_species.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `jrc-ceramic-bref-2007`; `epa-abrasives-1995`

###### Water vapour to air (`vapour_out`)

One actual chemically resolved ordinary molecular gas to air, with real outlet/time/phase/origin and independent species-resolving measurements. NO is CAS10102-43-9, ordinary H2O vapour is CAS7732-18-5 and fossil CH4 is CAS74-82-8, as applicable to this single named card. NOx/VOC/total carbon and isotope/ethers/graphite/HNO identities cannot substitute. Separate imported air pass-through, generated gas and independently measured free/structural/reaction water; no quantity or emission factor is inferred. Ordinary molecular H2O vapour only; the primary basename/CAS and current unspecified-air category determine identity. Legacy heavy-water, ice, tritium and ethers synonyms do not authorize isotope, liquid, solid or other chemical substitution. This is not evapotranspiration or an assumed high-stack/long-term outlet. Native Mass 93a60a56-a3c8-11da-a746-0800200b9a66 → unit group 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_species.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `jrc-ceramic-bref-2007`; `epa-abrasives-1995`

###### carbon dioxide (fossil) to air (`co2_out`)

One actual emission or gas pass-through at the native unspecified-air compartment; retain molecular CAS where supplied, real outlet, time, origin and phase. This identity supplies no emission amount. Molecular gas cards require ordinary nonradioactive gas of the named CAS and origin; exclude ionic/isotopic aliases, dissolved/solid forms and unrelated catalogue terms. Indoor, soil/water, stratospheric and long-term compartments are excluded. Particle cards retain actual disjoint aerodynamic bins. Fossil/biogenic generated CO2 excludes separately recorded ambient pass-through. Independently measure/reconcile the actual species; NOx/SOx/VOC/total-element indicators cannot substitute for this molecule. Disjoint particle-size bins and chemical-species subledgers must not double total dust mass. Fossil/biogenic splits require carbon-origin evidence; imported air constituents and reaction/free/structural water are independently reconciled.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_species.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `jrc-ceramic-bref-2007`; `epa-abrasives-1995`

###### carbon dioxide (biogenic) to air (`co2_bio_out`)

One actual emission or gas pass-through at the native unspecified-air compartment; retain molecular CAS where supplied, real outlet, time, origin and phase. This identity supplies no emission amount. Molecular gas cards require ordinary nonradioactive gas of the named CAS and origin; exclude ionic/isotopic aliases, dissolved/solid forms and unrelated catalogue terms. Indoor, soil/water, stratospheric and long-term compartments are excluded. Particle cards retain actual disjoint aerodynamic bins. Fossil/biogenic generated CO2 excludes separately recorded ambient pass-through. Independently measure/reconcile the actual species; NOx/SOx/VOC/total-element indicators cannot substitute for this molecule. Disjoint particle-size bins and chemical-species subledgers must not double total dust mass. Fossil/biogenic splits require carbon-origin evidence; imported air constituents and reaction/free/structural water are independently reconciled.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_species.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `jrc-ceramic-bref-2007`; `epa-abrasives-1995`

###### carbon monoxide (fossil) to air (`co_out`)

One actual emission or gas pass-through at the native unspecified-air compartment; retain molecular CAS where supplied, real outlet, time, origin and phase. This identity supplies no emission amount. Molecular gas cards require ordinary nonradioactive gas of the named CAS and origin; exclude ionic/isotopic aliases, dissolved/solid forms and unrelated catalogue terms. Indoor, soil/water, stratospheric and long-term compartments are excluded. Particle cards retain actual disjoint aerodynamic bins. Fossil/biogenic generated CO2 excludes separately recorded ambient pass-through. Independently measure/reconcile the actual species; NOx/SOx/VOC/total-element indicators cannot substitute for this molecule. Disjoint particle-size bins and chemical-species subledgers must not double total dust mass. Fossil/biogenic splits require carbon-origin evidence; imported air constituents and reaction/free/structural water are independently reconciled.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_species.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `jrc-ceramic-bref-2007`; `epa-abrasives-1995`

###### carbon monoxide (biogenic) to air (`co_bio_out`)

One actual emission or gas pass-through at the native unspecified-air compartment; retain molecular CAS where supplied, real outlet, time, origin and phase. This identity supplies no emission amount. Molecular gas cards require ordinary nonradioactive gas of the named CAS and origin; exclude ionic/isotopic aliases, dissolved/solid forms and unrelated catalogue terms. Indoor, soil/water, stratospheric and long-term compartments are excluded. Particle cards retain actual disjoint aerodynamic bins. Fossil/biogenic generated CO2 excludes separately recorded ambient pass-through. Independently measure/reconcile the actual species; NOx/SOx/VOC/total-element indicators cannot substitute for this molecule. Disjoint particle-size bins and chemical-species subledgers must not double total dust mass. Fossil/biogenic splits require carbon-origin evidence; imported air constituents and reaction/free/structural water are independently reconciled.

- Selected flow: carbon monoxide (biogenic) `8a313a02-e251-11e6-bf01-fe55135034f3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_species.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `jrc-ceramic-bref-2007`; `epa-abrasives-1995`

###### Nitrogen monoxide to air (`no_out`)

One actual chemically resolved ordinary molecular gas to air, with real outlet/time/phase/origin and independent species-resolving measurements. NO is CAS10102-43-9, ordinary H2O vapour is CAS7732-18-5 and fossil CH4 is CAS74-82-8, as applicable to this single named card. NOx/VOC/total carbon and isotope/ethers/graphite/HNO identities cannot substitute. Separate imported air pass-through, generated gas and independently measured free/structural/reaction water; no quantity or emission factor is inferred. Ordinary molecular NO only, independently resolved from NO2 and NOx total; primary basename/CAS and current unspecified-air category determine identity. Legacy HNO/nitroxyl/nitrosyl-hydride or dioxide synonyms are identity-data noise, not permission to relabel another molecule or derive NO mass from aggregate NOx. Native Mass 93a60a56-a3c8-11da-a746-0800200b9a66 → unit group 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_species.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `jrc-ceramic-bref-2007`; `epa-abrasives-1995`

###### nitrogen dioxide to air (`no2_out`)

One actual emission or gas pass-through at the native unspecified-air compartment; retain molecular CAS where supplied, real outlet, time, origin and phase. This identity supplies no emission amount. Molecular gas cards require ordinary nonradioactive gas of the named CAS and origin; exclude ionic/isotopic aliases, dissolved/solid forms and unrelated catalogue terms. Indoor, soil/water, stratospheric and long-term compartments are excluded. Particle cards retain actual disjoint aerodynamic bins. Fossil/biogenic generated CO2 excludes separately recorded ambient pass-through. Independently measure/reconcile the actual species; NOx/SOx/VOC/total-element indicators cannot substitute for this molecule. Disjoint particle-size bins and chemical-species subledgers must not double total dust mass. Fossil/biogenic splits require carbon-origin evidence; imported air constituents and reaction/free/structural water are independently reconciled.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_species.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `jrc-ceramic-bref-2007`; `epa-abrasives-1995`

###### sulfur dioxide to air (`so2_out`)

One actual emission or gas pass-through at the native unspecified-air compartment; retain molecular CAS where supplied, real outlet, time, origin and phase. This identity supplies no emission amount. Molecular gas cards require ordinary nonradioactive gas of the named CAS and origin; exclude ionic/isotopic aliases, dissolved/solid forms and unrelated catalogue terms. Indoor, soil/water, stratospheric and long-term compartments are excluded. Particle cards retain actual disjoint aerodynamic bins. Fossil/biogenic generated CO2 excludes separately recorded ambient pass-through. Independently measure/reconcile the actual species; NOx/SOx/VOC/total-element indicators cannot substitute for this molecule. Disjoint particle-size bins and chemical-species subledgers must not double total dust mass. Fossil/biogenic splits require carbon-origin evidence; imported air constituents and reaction/free/structural water are independently reconciled.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_species.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `jrc-ceramic-bref-2007`; `epa-abrasives-1995`

###### Methane of fossil origin to air (`ch4_out`)

One actual chemically resolved ordinary molecular gas to air, with real outlet/time/phase/origin and independent species-resolving measurements. NO is CAS10102-43-9, ordinary H2O vapour is CAS7732-18-5 and fossil CH4 is CAS74-82-8, as applicable to this single named card. NOx/VOC/total carbon and isotope/ethers/graphite/HNO identities cannot substitute. Separate imported air pass-through, generated gas and independently measured free/structural/reaction water; no quantity or emission factor is inferred. Ordinary fossil-source molecular CH4 only, measured separately from biogenic methane, fuel whole mixture, total carbon, VOC and other gases. Primary basename/CAS/current unspecified-air category are positive identity evidence; carbon-black/graphite/ether/formaldehyde/isotope legacy synonyms do not expand this molecular flow. No long-term/delayed correction or assumed methane fraction is adopted. Native Mass 93a60a56-a3c8-11da-a746-0800200b9a66 → unit group 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_species.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `jrc-ceramic-bref-2007`; `epa-abrasives-1995`

###### hydrogen fluoride to air (`hf_out`)

One actual emission or gas pass-through at the native unspecified-air compartment; retain molecular CAS where supplied, real outlet, time, origin and phase. This identity supplies no emission amount. Molecular gas cards require ordinary nonradioactive gas of the named CAS and origin; exclude ionic/isotopic aliases, dissolved/solid forms and unrelated catalogue terms. Indoor, soil/water, stratospheric and long-term compartments are excluded. Particle cards retain actual disjoint aerodynamic bins. Fossil/biogenic generated CO2 excludes separately recorded ambient pass-through. Independently measure/reconcile the actual species; NOx/SOx/VOC/total-element indicators cannot substitute for this molecule. Disjoint particle-size bins and chemical-species subledgers must not double total dust mass. Fossil/biogenic splits require carbon-origin evidence; imported air constituents and reaction/free/structural water are independently reconciled.

- Selected flow: hydrogen fluoride `08a91e70-3ddc-11dd-9804-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_species.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `jrc-ceramic-bref-2007`; `epa-abrasives-1995`

###### hydrogen chloride to air (`hcl_out`)

One actual emission or gas pass-through at the native unspecified-air compartment; retain molecular CAS where supplied, real outlet, time, origin and phase. This identity supplies no emission amount. Molecular gas cards require ordinary nonradioactive gas of the named CAS and origin; exclude ionic/isotopic aliases, dissolved/solid forms and unrelated catalogue terms. Indoor, soil/water, stratospheric and long-term compartments are excluded. Particle cards retain actual disjoint aerodynamic bins. Fossil/biogenic generated CO2 excludes separately recorded ambient pass-through. Independently measure/reconcile the actual species; NOx/SOx/VOC/total-element indicators cannot substitute for this molecule. Disjoint particle-size bins and chemical-species subledgers must not double total dust mass. Fossil/biogenic splits require carbon-origin evidence; imported air constituents and reaction/free/structural water are independently reconciled.

- Selected flow: hydrogen chloride `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_species.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `jrc-ceramic-bref-2007`; `epa-abrasives-1995`

###### particles (PM2.5) to air (`pm_small_out`)

One actual emission or gas pass-through at the native unspecified-air compartment; retain molecular CAS where supplied, real outlet, time, origin and phase. This identity supplies no emission amount. Molecular gas cards require ordinary nonradioactive gas of the named CAS and origin; exclude ionic/isotopic aliases, dissolved/solid forms and unrelated catalogue terms. Indoor, soil/water, stratospheric and long-term compartments are excluded. Particle cards retain actual disjoint aerodynamic bins. Fossil/biogenic generated CO2 excludes separately recorded ambient pass-through. Independently measure/reconcile the actual species; NOx/SOx/VOC/total-element indicators cannot substitute for this molecule. Disjoint particle-size bins and chemical-species subledgers must not double total dust mass. Fossil/biogenic splits require carbon-origin evidence; imported air constituents and reaction/free/structural water are independently reconciled.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_species.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `jrc-ceramic-bref-2007`; `epa-abrasives-1995`

###### particles (PM2.5 - PM10) to air (`pm_mid_out`)

One actual emission or gas pass-through at the native unspecified-air compartment; retain molecular CAS where supplied, real outlet, time, origin and phase. This identity supplies no emission amount. Molecular gas cards require ordinary nonradioactive gas of the named CAS and origin; exclude ionic/isotopic aliases, dissolved/solid forms and unrelated catalogue terms. Indoor, soil/water, stratospheric and long-term compartments are excluded. Particle cards retain actual disjoint aerodynamic bins. Fossil/biogenic generated CO2 excludes separately recorded ambient pass-through. Independently measure/reconcile the actual species; NOx/SOx/VOC/total-element indicators cannot substitute for this molecule. Disjoint particle-size bins and chemical-species subledgers must not double total dust mass. Fossil/biogenic splits require carbon-origin evidence; imported air constituents and reaction/free/structural water are independently reconciled.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_species.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `jrc-ceramic-bref-2007`; `epa-abrasives-1995`

###### particles (> PM10) to air (`pm_large_out`)

One actual emission or gas pass-through at the native unspecified-air compartment; retain molecular CAS where supplied, real outlet, time, origin and phase. This identity supplies no emission amount. Molecular gas cards require ordinary nonradioactive gas of the named CAS and origin; exclude ionic/isotopic aliases, dissolved/solid forms and unrelated catalogue terms. Indoor, soil/water, stratospheric and long-term compartments are excluded. Particle cards retain actual disjoint aerodynamic bins. Fossil/biogenic generated CO2 excludes separately recorded ambient pass-through. Independently measure/reconcile the actual species; NOx/SOx/VOC/total-element indicators cannot substitute for this molecule. Disjoint particle-size bins and chemical-species subledgers must not double total dust mass. Fossil/biogenic splits require carbon-origin evidence; imported air constituents and reaction/free/structural water are independently reconciled.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_species.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `jrc-ceramic-bref-2007`; `epa-abrasives-1995`

###### Ambient carbon-dioxide pass-through to air (`ambient_co2_out`)

Actual molecular CO2 carried through from inlet ventilation/combustion air and leaving the real outlet, separately measured/reconciled from newly generated fossil/biogenic CO2. Full physical carbon mass remains in gross intake/outlet ledgers; no negative-emission credit, new combustion emission or assumed carbon-origin label is created for this pass-through.

- Selected flow: Atmospheric carbon dioxide pass-through
- Flow property / unit: Mass / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_species.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `jrc-ceramic-bref-2007`; `epa-abrasives-1995`

###### Actual dissipated heat to air (`dissipated_heat`)

Actual measured heat loss with thermodynamic state/enthalpy convention, separate from gas carrier mass and internal heat recovery. It is not saleable heat by default. Recovered kiln heat used onsite cancels internally; no purchased steam, boiler or condensate return is invented. An actual external heat/water return requires its own Product card, real state, enthalpy and provider water/energy ownership agreement.

- Selected flow: Dissipated sensible heat to air
- Flow property / unit: Energy / MJ
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_utility.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utility`
- Sources: `jrc-ceramic-bref-2007`

### Process: Original-cohort services (`cohort_service`)

#### Inputs

##### Product flows

###### Whole kraft-paper sack external purchase P (`paper_sack`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. P leg only: actual external purchase. Whole actual paper sack; native allows kraft virgin/recycled/open-mouth/valve variants, so collect actual construction without assuming environmental benefit. Include real first non-purchased external ingress from materials and one upstream burden owner. Keep opening empty/attached-WIP/FG/reusable stock plus P purchases, I included ingress, ER external return received, closing stock, S gross shipped with goods, EO external return out and W waste. P/I whole supply already containing a component is counted once; internal reuse cancels. Real new inflow remains even when in closing stock.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`

###### Whole LDPE protective film external purchase P (`pe_film`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. P leg only: actual external purchase. Native PE film CAS9002-88-4; actual supplier must verify LDPE film rather than PET/resin. Luggage classification is an isolated taxonomy defect; no grade, density or provider is inferred. Include real first non-purchased external ingress from materials and one upstream burden owner. Keep opening empty/attached-WIP/FG/reusable stock plus P purchases, I included ingress, ER external return received, closing stock, S gross shipped with goods, EO external return out and W waste. P/I whole supply already containing a component is counted once; internal reuse cancels. Real new inflow remains even when in closing stock.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`

###### Corrugated shipping carton external purchase P (`corrugated_carton`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. P leg only: actual external purchase. One complete actual supplied article with composition and wet/tare mass; no broad packaging-material binding or unmeasured fixed fibre recipe. Include real first non-purchased external ingress from materials and one upstream burden owner. Keep opening empty/attached-WIP/FG/reusable stock plus P purchases, I included ingress, ER external return received, closing stock, S gross shipped with goods, EO external return out and W waste. P/I whole supply already containing a component is counted once; internal reuse cancels. Real new inflow remains even when in closing stock.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`

###### Whole wooden load pallet external purchase P (`wood_pallet`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. P leg only: actual external purchase. Native manufactured wooden-platform family is narrowed to one whole actual load pallet; declare design, wood species, fasteners and wet mass. It does not imply a collar/box-pallet bundle. Include real first non-purchased external ingress from materials and one upstream burden owner. Keep opening empty/attached-WIP/FG/reusable stock plus P purchases, I included ingress, ER external return received, closing stock, S gross shipped with goods, EO external return out and W waste. P/I whole supply already containing a component is counted once; internal reuse cancels. Real new inflow remains even when in closing stock.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`

###### Polypropylene transport strap external purchase P (`pp_strap`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. P leg only: actual external purchase. One complete actual supplied article with composition and wet/tare mass; no broad packaging-material binding or unmeasured fixed fibre recipe. Include real first non-purchased external ingress from materials and one upstream burden owner. Keep opening empty/attached-WIP/FG/reusable stock plus P purchases, I included ingress, ER external return received, closing stock, S gross shipped with goods, EO external return out and W waste. P/I whole supply already containing a component is counted once; internal reuse cancels. Real new inflow remains even when in closing stock.

- Selected flow: Polypropylene transport strap
- Flow property / unit: Mass / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`

###### Whole kraft-paper sack included_ingress (`paper_sack_included_ingress`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. I leg: first non-purchased packaging actually entering standalone or with supplied material. Keep its full physical gross mass even when the supply provider already owns the upstream burden; do not buy the same package again. Whole actual paper sack; native allows kraft virgin/recycled/open-mouth/valve variants, so collect actual construction without assuming environmental benefit. Include real first non-purchased external ingress from materials and one upstream burden owner. Keep opening empty/attached-WIP/FG/reusable stock plus P purchases, I included ingress, ER external return received, closing stock, S gross shipped with goods, EO external return out and W waste. P/I whole supply already containing a component is counted once; internal reuse cancels. Real new inflow remains even when in closing stock. Apply this leg only on real occurrence; absence needs records. This card uses its complete physical gross leg amount; associated burden vectors are assigned separately under one owner.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`

###### Whole kraft-paper sack external_return_received (`paper_sack_external_return_received`)

ER leg: actual packaging physically received back from outside. Keep returned condition, water, dirt and reusability decision; do not assume ER exists or equals previous S/EO. Whole actual paper sack; native allows kraft virgin/recycled/open-mouth/valve variants, so collect actual construction without assuming environmental benefit. Include real supplier-included ingress from materials and one upstream burden owner. Keep opening empty/attached-WIP/FG/reusable stock plus P purchases, I included ingress, ER external return received, closing stock, S gross shipped with goods, EO external return out and W waste. P/I whole supply already containing a component is counted once; internal reuse cancels. Real new inflow remains even when in closing stock. Apply this leg only on real occurrence; absence needs records. This card uses its complete physical gross leg amount; associated burden vectors are assigned separately under one owner.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`

###### Whole LDPE protective film included_ingress (`pe_film_included_ingress`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. I leg: first non-purchased packaging actually entering standalone or with supplied material. Keep its full physical gross mass even when the supply provider already owns the upstream burden; do not buy the same package again. Native PE film CAS9002-88-4; actual supplier must verify LDPE film rather than PET/resin. Luggage classification is an isolated taxonomy defect; no grade, density or provider is inferred. Include real first non-purchased external ingress from materials and one upstream burden owner. Keep opening empty/attached-WIP/FG/reusable stock plus P purchases, I included ingress, ER external return received, closing stock, S gross shipped with goods, EO external return out and W waste. P/I whole supply already containing a component is counted once; internal reuse cancels. Real new inflow remains even when in closing stock. Apply this leg only on real occurrence; absence needs records. This card uses its complete physical gross leg amount; associated burden vectors are assigned separately under one owner.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`

###### Whole LDPE protective film external_return_received (`pe_film_external_return_received`)

ER leg: actual packaging physically received back from outside. Keep returned condition, water, dirt and reusability decision; do not assume ER exists or equals previous S/EO. Native PE film CAS9002-88-4; actual supplier must verify LDPE film rather than PET/resin. Luggage classification is an isolated taxonomy defect; no grade, density or provider is inferred. Include real supplier-included ingress from materials and one upstream burden owner. Keep opening empty/attached-WIP/FG/reusable stock plus P purchases, I included ingress, ER external return received, closing stock, S gross shipped with goods, EO external return out and W waste. P/I whole supply already containing a component is counted once; internal reuse cancels. Real new inflow remains even when in closing stock. Apply this leg only on real occurrence; absence needs records. This card uses its complete physical gross leg amount; associated burden vectors are assigned separately under one owner.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`

###### Corrugated shipping carton included_ingress (`corrugated_carton_included_ingress`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. I leg: first non-purchased packaging actually entering standalone or with supplied material. Keep its full physical gross mass even when the supply provider already owns the upstream burden; do not buy the same package again. One complete actual supplied article with composition and wet/tare mass; no broad packaging-material binding or unmeasured fixed fibre recipe. Include real first non-purchased external ingress from materials and one upstream burden owner. Keep opening empty/attached-WIP/FG/reusable stock plus P purchases, I included ingress, ER external return received, closing stock, S gross shipped with goods, EO external return out and W waste. P/I whole supply already containing a component is counted once; internal reuse cancels. Real new inflow remains even when in closing stock. Apply this leg only on real occurrence; absence needs records. This card uses its complete physical gross leg amount; associated burden vectors are assigned separately under one owner.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`

###### Corrugated shipping carton external_return_received (`corrugated_carton_external_return_received`)

ER leg: actual packaging physically received back from outside. Keep returned condition, water, dirt and reusability decision; do not assume ER exists or equals previous S/EO. One complete actual supplied article with composition and wet/tare mass; no broad packaging-material binding or unmeasured fixed fibre recipe. Include real supplier-included ingress from materials and one upstream burden owner. Keep opening empty/attached-WIP/FG/reusable stock plus P purchases, I included ingress, ER external return received, closing stock, S gross shipped with goods, EO external return out and W waste. P/I whole supply already containing a component is counted once; internal reuse cancels. Real new inflow remains even when in closing stock. Apply this leg only on real occurrence; absence needs records. This card uses its complete physical gross leg amount; associated burden vectors are assigned separately under one owner.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`

###### Whole wooden load pallet included_ingress (`wood_pallet_included_ingress`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. I leg: first non-purchased packaging actually entering standalone or with supplied material. Keep its full physical gross mass even when the supply provider already owns the upstream burden; do not buy the same package again. Native manufactured wooden-platform family is narrowed to one whole actual load pallet; declare design, wood species, fasteners and wet mass. It does not imply a collar/box-pallet bundle. Include real first non-purchased external ingress from materials and one upstream burden owner. Keep opening empty/attached-WIP/FG/reusable stock plus P purchases, I included ingress, ER external return received, closing stock, S gross shipped with goods, EO external return out and W waste. P/I whole supply already containing a component is counted once; internal reuse cancels. Real new inflow remains even when in closing stock. Apply this leg only on real occurrence; absence needs records. This card uses its complete physical gross leg amount; associated burden vectors are assigned separately under one owner.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`

###### Whole wooden load pallet external_return_received (`wood_pallet_external_return_received`)

ER leg: actual packaging physically received back from outside. Keep returned condition, water, dirt and reusability decision; do not assume ER exists or equals previous S/EO. Native manufactured wooden-platform family is narrowed to one whole actual load pallet; declare design, wood species, fasteners and wet mass. It does not imply a collar/box-pallet bundle. Include real supplier-included ingress from materials and one upstream burden owner. Keep opening empty/attached-WIP/FG/reusable stock plus P purchases, I included ingress, ER external return received, closing stock, S gross shipped with goods, EO external return out and W waste. P/I whole supply already containing a component is counted once; internal reuse cancels. Real new inflow remains even when in closing stock. Apply this leg only on real occurrence; absence needs records. This card uses its complete physical gross leg amount; associated burden vectors are assigned separately under one owner.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`

###### Polypropylene transport strap included_ingress (`pp_strap_included_ingress`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. I leg: first non-purchased packaging actually entering standalone or with supplied material. Keep its full physical gross mass even when the supply provider already owns the upstream burden; do not buy the same package again. One complete actual supplied article with composition and wet/tare mass; no broad packaging-material binding or unmeasured fixed fibre recipe. Include real first non-purchased external ingress from materials and one upstream burden owner. Keep opening empty/attached-WIP/FG/reusable stock plus P purchases, I included ingress, ER external return received, closing stock, S gross shipped with goods, EO external return out and W waste. P/I whole supply already containing a component is counted once; internal reuse cancels. Real new inflow remains even when in closing stock. Apply this leg only on real occurrence; absence needs records. This card uses its complete physical gross leg amount; associated burden vectors are assigned separately under one owner.

- Selected flow: Polypropylene transport strap
- Flow property / unit: Mass / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`

###### Polypropylene transport strap external_return_received (`pp_strap_external_return_received`)

ER leg: actual packaging physically received back from outside. Keep returned condition, water, dirt and reusability decision; do not assume ER exists or equals previous S/EO. One complete actual supplied article with composition and wet/tare mass; no broad packaging-material binding or unmeasured fixed fibre recipe. Include real supplier-included ingress from materials and one upstream burden owner. Keep opening empty/attached-WIP/FG/reusable stock plus P purchases, I included ingress, ER external return received, closing stock, S gross shipped with goods, EO external return out and W waste. P/I whole supply already containing a component is counted once; internal reuse cancels. Real new inflow remains even when in closing stock. Apply this leg only on real occurrence; absence needs records. This card uses its complete physical gross leg amount; associated burden vectors are assigned separately under one owner.

- Selected flow: Polypropylene transport strap
- Flow property / unit: Mass / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`

###### Observed original-cohort service electricity (`service_electricity`)

Actual China1–35kV user-side grid-average alternating current for receipt/conditioning, mixing, pressing, dryer auxiliaries, kiln auxiliaries, finishing, balancing/tests and controls. Native reference is Net calorific value/MJ; kWh is converted dimensionally once using3.6MJ/kWh, not a fuel or thermal-efficiency claim. Reconcile submeters with the site total and one supply-provider owner; do not count generation/transmission or included transformation twice. Other voltage/geography needs compatible identity. This is incremental postrelease packing/storage/handling/test/dispatch service over observed horizon H for the original cohort and original Q. Do not subtract performed service because goods remain in FG. Manufacture and service meters are disjoint; genuine postrelease work requires maker/spec permission, tests, acceptance and disposition and creates no new Q.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_service.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `ilcd-allocation-2010`; `jrc-ceramic-bref-2007`

###### Observed original-cohort service water (`service_water`)

Whole actual treated industrial water crossing the site boundary for binder dissolution, moistening, finishing, cleanup or makeup. Native Mass basis and treated-water identity apply; no fixed geography, purity or treatment recipe. Record supplier/provider boundaries and purpose separately; internal recirculation and formulation-carried water are not a second supply. Measure any volume-to-mass density at actual composition and temperature. This is incremental postrelease packing/storage/handling/test/dispatch service over observed horizon H for the original cohort and original Q. Do not subtract performed service because goods remain in FG. Manufacture and service meters are disjoint; genuine postrelease work requires maker/spec permission, tests, acceptance and disposition and creates no new Q.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_service.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `ilcd-allocation-2010`; `jrc-ceramic-bref-2007`

###### Conditional original-cohort handling diesel (`service_diesel`)

Use only for an actual onsite diesel forklift or handling engine. Native whole-fuel Mass/kg has no fixed grade, formulation, density, heating value, refinery, geography or provider; collect these and actual exhaust species. Fuel and exhaust already inside an external transport-provider dataset are not recreated here. Electric handling instead remains in metered electricity, not fictitious diesel. This is incremental postrelease packing/storage/handling/test/dispatch service over observed horizon H for the original cohort and original Q. Do not subtract performed service because goods remain in FG. Manufacture and service meters are disjoint; genuine postrelease work requires maker/spec permission, tests, acceptance and disposition and creates no new Q.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_service.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `ilcd-allocation-2010`; `jrc-ceramic-bref-2007`

###### Actual packaging repair wood (`pack_repair_wood`)

Conditional actual new wood or wooden replacement part for the declared packaging article, not an assumed pallet recipe or second whole pallet. Record species, treatment, fasteners as separate actual materials where needed, dry matter, free water and complete wet physical mass, custody and provider ownership. Include actual retained new material on the input side and in closing wet stock. Deduplicate only the same-side whole-provider component already counted in another incoming flow term; no subtraction merely because a stock or atomic card exists.

- Selected flow: Actual packaging repair wood
- Flow property / unit: Mass / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_pack
- Sources: `jrc-ceramic-bref-2007`; `ilcd-allocation-2010`

###### Process Water (`pack_repair_water`)

Conditional actual treated industrial water supplied for packaging repair or cleaning, independently measured in native Mass/kg at actual state and supplier scope. Keep formulation-carried water and whole wet wood once; internal circulation is not a new supply. Record water retained, removed in wastewater or evaporated independently. This is a disjoint child leg of actual service_water where that meter already includes it, with one provider and no second purchase or added burden.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_pack
- Sources: `jrc-ceramic-bref-2007`; `ilcd-allocation-2010`

##### Elementary flows

###### Actual packaging moisture intake from air (`pack_repair_humidity`)

Conditional independently measured ordinary water transferred from ambient air into packaging over actual H; distinguish this resource leg from purchased process water and water already contained in whole wet packaging or wood. No fixed air fraction or humidity uptake is assumed. Declare phase, air resource compartment, actual article/time/state and the corresponding wet-stock change.

- Selected flow: Actual packaging moisture intake from air
- Flow property / unit: Mass / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_pack
- Sources: `jrc-ceramic-bref-2007`; `ilcd-allocation-2010`


#### Outputs

##### Product flows

###### Whole kraft-paper sack gross_shipped (`paper_sack_gross_shipped`)

S leg: package physically leaving with gross goods shipments including re-delivery. Keep complete actual mass/state and each shipment independently of burden shares and product Q; no new wheel production. Whole actual paper sack; native allows kraft virgin/recycled/open-mouth/valve variants, so collect actual construction without assuming environmental benefit. Include real supplier-included ingress from materials and one upstream burden owner. Keep opening empty/attached-WIP/FG/reusable stock plus P purchases, I included ingress, ER external return received, closing stock, S gross shipped with goods, EO external return out and W waste. P/I whole supply already containing a component is counted once; internal reuse cancels. Real new inflow remains even when in closing stock. Apply this leg only on real occurrence; absence needs records. This card uses its complete physical gross leg amount; associated burden vectors are assigned separately under one owner.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`

###### Whole kraft-paper sack external_return_out (`paper_sack_external_return_out`)

EO leg: actual packaging returned to an external owner separately from S and W. Preserve complete gross mass/state and actual recipient; no default coproduct or credit. Whole actual paper sack; native allows kraft virgin/recycled/open-mouth/valve variants, so collect actual construction without assuming environmental benefit. Include real supplier-included ingress from materials and one upstream burden owner. Keep opening empty/attached-WIP/FG/reusable stock plus P purchases, I included ingress, ER external return received, closing stock, S gross shipped with goods, EO external return out and W waste. P/I whole supply already containing a component is counted once; internal reuse cancels. Real new inflow remains even when in closing stock. Apply this leg only on real occurrence; absence needs records. This card uses its complete physical gross leg amount; associated burden vectors are assigned separately under one owner.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`

###### Whole LDPE protective film gross_shipped (`pe_film_gross_shipped`)

S leg: package physically leaving with gross goods shipments including re-delivery. Keep complete actual mass/state and each shipment independently of burden shares and product Q; no new wheel production. Native PE film CAS9002-88-4; actual supplier must verify LDPE film rather than PET/resin. Luggage classification is an isolated taxonomy defect; no grade, density or provider is inferred. Include real supplier-included ingress from materials and one upstream burden owner. Keep opening empty/attached-WIP/FG/reusable stock plus P purchases, I included ingress, ER external return received, closing stock, S gross shipped with goods, EO external return out and W waste. P/I whole supply already containing a component is counted once; internal reuse cancels. Real new inflow remains even when in closing stock. Apply this leg only on real occurrence; absence needs records. This card uses its complete physical gross leg amount; associated burden vectors are assigned separately under one owner.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`

###### Whole LDPE protective film external_return_out (`pe_film_external_return_out`)

EO leg: actual packaging returned to an external owner separately from S and W. Preserve complete gross mass/state and actual recipient; no default coproduct or credit. Native PE film CAS9002-88-4; actual supplier must verify LDPE film rather than PET/resin. Luggage classification is an isolated taxonomy defect; no grade, density or provider is inferred. Include real supplier-included ingress from materials and one upstream burden owner. Keep opening empty/attached-WIP/FG/reusable stock plus P purchases, I included ingress, ER external return received, closing stock, S gross shipped with goods, EO external return out and W waste. P/I whole supply already containing a component is counted once; internal reuse cancels. Real new inflow remains even when in closing stock. Apply this leg only on real occurrence; absence needs records. This card uses its complete physical gross leg amount; associated burden vectors are assigned separately under one owner.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`

###### Corrugated shipping carton gross_shipped (`corrugated_carton_gross_shipped`)

S leg: package physically leaving with gross goods shipments including re-delivery. Keep complete actual mass/state and each shipment independently of burden shares and product Q; no new wheel production. One complete actual supplied article with composition and wet/tare mass; no broad packaging-material binding or unmeasured fixed fibre recipe. Include real supplier-included ingress from materials and one upstream burden owner. Keep opening empty/attached-WIP/FG/reusable stock plus P purchases, I included ingress, ER external return received, closing stock, S gross shipped with goods, EO external return out and W waste. P/I whole supply already containing a component is counted once; internal reuse cancels. Real new inflow remains even when in closing stock. Apply this leg only on real occurrence; absence needs records. This card uses its complete physical gross leg amount; associated burden vectors are assigned separately under one owner.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`

###### Corrugated shipping carton external_return_out (`corrugated_carton_external_return_out`)

EO leg: actual packaging returned to an external owner separately from S and W. Preserve complete gross mass/state and actual recipient; no default coproduct or credit. One complete actual supplied article with composition and wet/tare mass; no broad packaging-material binding or unmeasured fixed fibre recipe. Include real supplier-included ingress from materials and one upstream burden owner. Keep opening empty/attached-WIP/FG/reusable stock plus P purchases, I included ingress, ER external return received, closing stock, S gross shipped with goods, EO external return out and W waste. P/I whole supply already containing a component is counted once; internal reuse cancels. Real new inflow remains even when in closing stock. Apply this leg only on real occurrence; absence needs records. This card uses its complete physical gross leg amount; associated burden vectors are assigned separately under one owner.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`

###### Whole wooden load pallet gross_shipped (`wood_pallet_gross_shipped`)

S leg: package physically leaving with gross goods shipments including re-delivery. Keep complete actual mass/state and each shipment independently of burden shares and product Q; no new wheel production. Native manufactured wooden-platform family is narrowed to one whole actual load pallet; declare design, wood species, fasteners and wet mass. It does not imply a collar/box-pallet bundle. Include real supplier-included ingress from materials and one upstream burden owner. Keep opening empty/attached-WIP/FG/reusable stock plus P purchases, I included ingress, ER external return received, closing stock, S gross shipped with goods, EO external return out and W waste. P/I whole supply already containing a component is counted once; internal reuse cancels. Real new inflow remains even when in closing stock. Apply this leg only on real occurrence; absence needs records. This card uses its complete physical gross leg amount; associated burden vectors are assigned separately under one owner.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`

###### Whole wooden load pallet external_return_out (`wood_pallet_external_return_out`)

EO leg: actual packaging returned to an external owner separately from S and W. Preserve complete gross mass/state and actual recipient; no default coproduct or credit. Native manufactured wooden-platform family is narrowed to one whole actual load pallet; declare design, wood species, fasteners and wet mass. It does not imply a collar/box-pallet bundle. Include real supplier-included ingress from materials and one upstream burden owner. Keep opening empty/attached-WIP/FG/reusable stock plus P purchases, I included ingress, ER external return received, closing stock, S gross shipped with goods, EO external return out and W waste. P/I whole supply already containing a component is counted once; internal reuse cancels. Real new inflow remains even when in closing stock. Apply this leg only on real occurrence; absence needs records. This card uses its complete physical gross leg amount; associated burden vectors are assigned separately under one owner.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`

###### Polypropylene transport strap gross_shipped (`pp_strap_gross_shipped`)

S leg: package physically leaving with gross goods shipments including re-delivery. Keep complete actual mass/state and each shipment independently of burden shares and product Q; no new wheel production. One complete actual supplied article with composition and wet/tare mass; no broad packaging-material binding or unmeasured fixed fibre recipe. Include real supplier-included ingress from materials and one upstream burden owner. Keep opening empty/attached-WIP/FG/reusable stock plus P purchases, I included ingress, ER external return received, closing stock, S gross shipped with goods, EO external return out and W waste. P/I whole supply already containing a component is counted once; internal reuse cancels. Real new inflow remains even when in closing stock. Apply this leg only on real occurrence; absence needs records. This card uses its complete physical gross leg amount; associated burden vectors are assigned separately under one owner.

- Selected flow: Polypropylene transport strap
- Flow property / unit: Mass / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`

###### Polypropylene transport strap external_return_out (`pp_strap_external_return_out`)

EO leg: actual packaging returned to an external owner separately from S and W. Preserve complete gross mass/state and actual recipient; no default coproduct or credit. One complete actual supplied article with composition and wet/tare mass; no broad packaging-material binding or unmeasured fixed fibre recipe. Include real supplier-included ingress from materials and one upstream burden owner. Keep opening empty/attached-WIP/FG/reusable stock plus P purchases, I included ingress, ER external return received, closing stock, S gross shipped with goods, EO external return out and W waste. P/I whole supply already containing a component is counted once; internal reuse cancels. Real new inflow remains even when in closing stock. Apply this leg only on real occurrence; absence needs records. This card uses its complete physical gross leg amount; associated burden vectors are assigned separately under one owner.

- Selected flow: Polypropylene transport strap
- Flow property / unit: Mass / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`

##### Waste flows

###### Whole kraft-paper sack waste (`paper_sack_waste`)

Actual separate discarded packaging of this material/article, including supplier-ingress unpacking waste. Keep full gross wet mass and treatment destination; assign real burden to the originating manufacturing/service cohort rather than automatically shifting all waste to delivery. Selling it does not erase production/treatment burden.

- Selected flow: Whole kraft-paper sack waste
- Flow property / unit: Mass / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`

###### Whole LDPE protective film waste (`pe_film_waste`)

Actual separate discarded packaging of this material/article, including supplier-ingress unpacking waste. Keep full gross wet mass and treatment destination; assign real burden to the originating manufacturing/service cohort rather than automatically shifting all waste to delivery. Selling it does not erase production/treatment burden.

- Selected flow: Whole LDPE protective film waste
- Flow property / unit: Mass / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`

###### Corrugated shipping carton waste (`corrugated_carton_waste`)

Actual separate discarded packaging of this material/article, including supplier-ingress unpacking waste. Keep full gross wet mass and treatment destination; assign real burden to the originating manufacturing/service cohort rather than automatically shifting all waste to delivery. Selling it does not erase production/treatment burden.

- Selected flow: Corrugated shipping carton waste
- Flow property / unit: Mass / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`

###### Whole wooden load pallet waste (`wood_pallet_waste`)

Actual separate discarded packaging of this material/article, including supplier-ingress unpacking waste. Keep full gross wet mass and treatment destination; assign real burden to the originating manufacturing/service cohort rather than automatically shifting all waste to delivery. Selling it does not erase production/treatment burden.

- Selected flow: Whole wooden load pallet waste
- Flow property / unit: Mass / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`

###### Polypropylene transport strap waste (`pp_strap_waste`)

Actual separate discarded packaging of this material/article, including supplier-ingress unpacking waste. Keep full gross wet mass and treatment destination; assign real burden to the originating manufacturing/service cohort rather than automatically shifting all waste to delivery. Selling it does not erase production/treatment burden.

- Selected flow: Polypropylene transport strap waste
- Flow property / unit: Mass / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ceramic-bref-2007`

###### Actual removed packaging repair wood (`pack_repair_removed_wood`)

Conditional separate gross wet old wood/part removed during actual packaging repair, with independently measured dry matter, water, custody, waste status and treatment destination. Do not also count the same material in whole packaging W or another same-side outlet. Ordinary disposal or sale is not an automatic transfer of manufacturing burden or negative credit.

- Selected flow: Actual removed packaging repair wood
- Flow property / unit: Mass / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_pack
- Sources: `jrc-ceramic-bref-2007`; `ilcd-allocation-2010`

###### Actual packaging repair wastewater (`pack_repair_wastewater`)

Conditional separately measured gross repair/cleaning wastewater with actual water and dissolved/suspended species, wet mass and treatment owner. Keep collected liquid distinct from water retained in stock and vapour. Use a disjoint child leg if an existing service wastewater total already includes it, never add two purchases/treatments or infer water from COD/VOC.

- Selected flow: Actual packaging repair wastewater
- Flow property / unit: Mass / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_pack
- Sources: `jrc-ceramic-bref-2007`; `ilcd-allocation-2010`

##### Elementary flows

###### Actual packaging repair water vapour to air (`pack_repair_vapour`)

Conditional independently measured ordinary molecular H2O vapour, CAS7732-18-5, emitted from actual packaging repair/drying over H into the declared air compartment. Distinguish incoming air moisture, retained water and collected wastewater. No reaction source, fixed evaporation fraction, heavy-water identity or duplicate same-side emission is assumed. Ordinary molecular H2O vapour only; the primary basename/CAS and current unspecified-air category determine identity. Legacy heavy-water, ice, tritium and ethers synonyms do not authorize isotope, liquid, solid or other chemical substitution. This is not evapotranspiration or an assumed high-stack/long-term outlet. Native Mass 93a60a56-a3c8-11da-a746-0800200b9a66 → unit group 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single normalized a_i result defined in Section8; collect only original unnormalized records in cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_pack
- Sources: `jrc-ceramic-bref-2007`; `ilcd-allocation-2010`


## 7. Allocation and Co-product Handling

Apply this section only to attributional studies whose decision context justifies allocation rather than substitution. The product method provides no free choice of physical versus economic fractions. Gross physical balances remain independent of burden sharing. `ilcd-allocation-2010`

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | shared operations | First dedicate or subdivide real processes and then virtually subdivide directly traceable ingredients, supplied formulations, equipment service and controls by actual recipe/batch/stage/cohort. Record why any remainder cannot be separated. | ilcd-allocation-2010 |
| allocation_physical | residual shared exchanges | For each remaining exchange establish its own determining physical causality using actual measured cause of that exchange, such as time/load/thermal duty/throughput only where physically determining. A common mass fraction cannot automatically allocate electricity, kiln heat, mould wear and material at the same share. Reconcile allocation vectors to original totals. | ilcd-allocation-2010 |
| allocation_residual | genuine unresolved multifunctional process | Only the demonstrably remaining inseparable inventory may use actual contemporaneous market values of real co-functions at the same common process gate and actual condition. Remove downstream conditioning/packing/transport from those prices; disclose source period, units, prices and sensitivity. No fixed ratio, automatic credit or unconstrained choice. | ilcd-allocation-2010 |
| allocation_failure | manufacture; waste | Ordinary failure, breakage, rejected/sample material and offsite/sold waste remain with the originating production and actual treatment burdens. A burden transfer T_other requires a real independent other cohort/function and a justified allocation/handover decision once, with a recipient vector. Physical gross outlets remain complete. Internal reuse is not a new purchase or automatic co-product. | ilcd-allocation-2010 |
| allocation_stock | manufacture; cohort_service | Carry every exchange’s inherited burden vector with opening/closing raw/WIP and genuinely unused unassigned service charges. Closing FG already belongs to first-release Q and does not defer its manufacturing burden. Preserve performed original-cohort service even for retained FG; only unused/unassigned service/charge carries. Do not deduct stock-corrected consumption twice. | ilcd-allocation-2010 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

All protocols collect original quantities, rates, units and records before division. The exact aggregation_rule label “per reference flow” identifies the destination reporting basis only; it performs no arithmetic. Convert original units/rates and allocate/assign real burdens first; only calculation once_normalize evaluates A_i/Q. Cards and service consolidation reuse that same result, never divide it again. Q=0 preserves raw activity, waste and burden vectors and produces no unit result.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | manufacture | whole material inputs | receipts and stage ledger | supplier lot; whole supply form; mass or measured volume and density; carrier water; assay; opening/closing raw/WIP; stage issues and returns; inherited exchange vector; provider ownership | Calibrated weigh/invoice/recipe records and representative composition/moisture/phase samples; retain failed and zero-output activity. Capture each new true ingredient separately. | kg; m3 | each receipt and batch | all real production events and opening/closing stocks; service actual H separately | declared plant, actual suppliers and each cohort/stage | per reference flow | calibration; original records; supplier scope; samples/tests; reconciled complete physical and inherited burden ledgers |
| cp_release | manufacture | finished_wheel | first release record | configuration and drawing; wheel ID; net complete bare-wheel mass; count; measured retained water/porosity; QC/test results; maker/specification; release time; sample/reject disposition; cohort Q | Weigh complete accepted bare wheels on a calibrated scale, excluding removable packages; reconcile unique first-release and all required manufacturer-governed tests/disposition. Collect actual count independently; no inferred kg/item. | kg; item | each wheel or traceable same-configuration weighed lot | all real production events and opening/closing stocks; service actual H separately | declared plant, actual suppliers and each cohort/stage | per reference flow | calibration; original records; supplier scope; samples/tests; reconciled complete physical and inherited burden ledgers |
| cp_utility | manufacture | energy and fuel | meter and state records | stage meter readings; original unit; interval; failed/idle/start/cleanup; gas/diesel composition; pressure temperature compressibility; independent carrier density; actual LHV/HHV; heat state and water ownership; providers | Read calibrated total/submeters; distinguish integrated volume from rate, gas mass from heat and electrical MJ from thermal MJ. Independently measure needed density/enthalpy at actual state; reconcile real recovery and external returns. | MJ; kWh; kg; m3 | each stage/charge and meter interval | all real production events and opening/closing stocks; service actual H separately | declared plant, actual suppliers and each cohort/stage | per reference flow | calibration; original records; supplier scope; samples/tests; reconciled complete physical and inherited burden ledgers |
| cp_asset | manufacture | named physical assets and repairs | asset stock and service ledger | asset ID/configuration; full acquisition/retirement mass/count; opening/closing installed wet stock; new/used replacement part and water X_in/X_out; charge receipts/withdrawals; actual use/wear/service driver; inherited provider vector | Separate physical stock movement from current measured service attribution. Weigh old/new parts and wet stocks; trace installed fluid and avoid whole-provider overlap only once; document genuine unused service/charge carry. No default life. | item; kg; m3 | each acquisition/repair and period stocktake | all real production events and opening/closing stocks; service actual H separately | declared plant, actual suppliers and each cohort/stage | per reference flow | calibration; original records; supplier scope; samples/tests; reconciled complete physical and inherited burden ledgers |
| cp_waste | manufacture | each separate named waste | weighing sampling and destination | stage/cohort; gross wet mass; moisture; dry constituents; retained/outsourced leg; treatment provider; sample/failure ID; justified burden recipient only if real | Independently weigh/sample each actual waste and destination; keep wet sludge and separate liquid, not total residues as one exchange; include genuine treatment activity and losses. | kg | each batch/transfer and period reconciliation | all real production events and opening/closing stocks; service actual H separately | declared plant, actual suppliers and each cohort/stage | per reference flow | calibration; original records; supplier scope; samples/tests; reconciled complete physical and inherited burden ledgers |
| cp_species | manufacture | each atomic resource/emission | species and phase measurement | outlet and compartment; CAS/chemical; source origin; phase; actual concentration basis; integrated volume or real flow rate/time; P/T/humidity/density; dust disjoint size bins; oxygen nitrogen argon water CO2 intake; organic burnout/structural water/retained water measurements | Use actual species-resolving sampling/monitoring and independent mass/element/phase evidence; no NOx-to-NO2, VOC-to-molecule or single-residual multi-unknown fit. Retain original units, detection limits and all real outlets. | kg; m3; kg/h; mg/m3 | each actual run/outlet with representative monitoring | all real production events and opening/closing stocks; service actual H separately | declared plant, actual suppliers and each cohort/stage | per reference flow | calibration; original records; supplier scope; samples/tests; reconciled complete physical and inherited burden ledgers |
| cp_pack | cohort_service | each packaging article/material | six-leg physical and burden ledger | material ID; supplier included I and owner; external purchase P; ER received returns; opening/closing empty and attached WIP/FG/reusable; gross S; EO; W; wet tare; internal reuse; source cohort; treatment; actual repair new/removed dry material and complete wet mass; separate H2O inlet/retention/wastewater/vapour; disjoint same-side flow overlaps; custody and provider owner ; packaging receipt origin; payment/non-purchase evidence; owner/custodian; same-item prior outward ID | Weigh/count each specific article with real composition and wet mass; reconcile full physical legs independently of burden shares; keep included ingress once and actual new inflow even in closing stock. Attribute waste/services to real stage/cohort. Actual repair/water measurements extend the same article balance; retained input and closing wet stock both remain. Match each child leg to its one parent meter/provider; no extra whole wet article purchase.  For packaging only, apply packaging_receipt_basis; standalone non-purchase is I, never invented ER or X. | kg; item | every receipt/shipment/return/waste and stocktake | all real production events and opening/closing stocks; service actual H separately | declared plant, actual suppliers and each cohort/stage | per reference flow | calibration; original records; supplier scope; samples/tests; reconciled complete physical and inherited burden ledgers |
| cp_service | cohort_service | original-cohort incremental services | observed service records | original release IDs and Q; H; full opening/closing FG; actual service meters; gross delivery G and return R; state/moisture/added material/loss; permission/postwork tests/acceptance/disposition; unused charges | Observe actual original-cohort services over H; preserve performed load on retained FG. Record return history and genuine extra work separately, no new production or assumed reversibility. Add all real service emissions/waste/repair cards atomically before completeness claims. | MJ; kg; m3 | each actual event within disclosed H | all real production events and opening/closing stocks; service actual H separately | declared plant, actual suppliers and each cohort/stage | per reference flow | calibration; original records; supplier scope; samples/tests; reconciled complete physical and inherited burden ledgers |
| cp_transport | manufacture | road_transport | actual freight leg records | provider scope; route; distance; gross load; packages; return leg/load; activity unit; fuel/exhaust ownership | Use actual distance and carried mass with declared service unit; no kilogram-only flow as tkm and no duplicate provider fuel/exhaust. | tkm; kg; km | each external road leg | all real production events and opening/closing stocks; service actual H separately | declared plant, actual suppliers and each cohort/stage | per reference flow | calibration; original records; supplier scope; samples/tests; reconciled complete physical and inherited burden ledgers |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| raw_convert | all inventory rows | Convert each original raw unit before attribution. Integrated gas/liquid volume is already a quantity and is not multiplied by time again; integrate only a true rate over its real interval. Use independently measured actual composition/state density for mass and actual enthalpy/heating convention for heat; electrical kWh ×3.6=MJ. Keep whole fuel mass and linked heat/species subledgers with one provider owner. | cp_material; cp_utility; cp_species | converted unnormalized activity | jrc-ceramic-bref-2007 |
| cohort_assign | all inventory rows | For each manufacturing burden dimension i, separately from its physical-event disclosure, form attributable unnormalized manufacturing burden A_man_i = B_open_i + F_i - B_close_i - T_other_i. F_i is the actual already unit-converted, directly assigned or justified allocated current contribution including real failures/treatment. B_close excludes already-Q closing FG; T_other is used only with a genuine other function/cohort and one justified recipient transfer. Ordinary waste/sale/sample is not such a transfer. Stock-corrected consumption is not corrected again. These inherited/allocated burden vectors do not replace the complete gross V_i of an actual physical event; once_normalize selects that physical numerator separately. | cp_material; cp_utility; cp_asset; cp_waste; cp_species | A_man_i | ilcd-allocation-2010 |
| cohort_service_assign | cohort_service | A_serv_i is the actually performed incremental original-cohort service and attributable packaging burden over H. Carry only genuine unused/unassigned service or charge and unused packaging burden; do not subtract performed service for retained FG. Packaging physical balances stay gross, with ingress waste attributed to its originating stage. Keep raw manufacture/service totals and original Q; on consolidation cancel the internal first-release product leg and use A_i=A_man_i+A_serv_i without a second output. For FG/service physical cards A_serv_i denotes the full actually measured gross leg, separate from the attributed burden vector; it is not a second stock correction, economic fraction, provider purchase or credit. Actual held-FG service retains its original Q/H. Gross changed-state return R does not redefine the original delivered mass or unique first-release Q. | cp_pack; cp_service; cp_release | A_serv_i; A_i | ilcd-allocation-2010 |
| once_normalize | all inventory rows | For Q>0 evaluate a_i=A_i/Q once, where Q is measured uniquely first-released complete bare-wheel kg for the declared cohort and A_i is the final unnormalized ledger quantity in its own extensive native unit. Select the numerator by reported dimension. Every actual physical-event card uses A_i=V_i, its complete independently measured and unit-converted gross leg: this includes manufacture cards collected under cp_asset, cp_waste or cp_species, dissipated_heat, packaging/FG physical legs and any actual added thermal-carrier or return disclosure. Do not apply B_open+F-B_close-T_other, stock consumption, a service fraction or an economic share to that physical numerator. Keep the associated manufacturing/embodied/service burden vector separate with one provider owner; a gross movement creates no extra purchase, full-machine charge or credit. Material, fuel, electricity, transport and performed-service burden dimensions continue to use their separately attributed A_man_i or A_serv_i, not an unrelated site gross total. For every packaging P/I/ER/S/EO/W card A_i is its complete physical gross leg for the declared cohort/H, unaffected by burden shares; associated burden vectors are attributed separately under one owner. For separate manufacture/service reports use their corresponding A_i with the same original Q; report horizon H. Reuse a_i in each card/aggregation without further division. Q=0 retains burdens and has no unit inventory. | A_i; Q; cp_release | a_i | ilcd-allocation-2010 |
| physical_gates | manufacture; cohort_service | Total physical mass obeys opening wet stock + gross inputs = closing wet stock + gross outputs, with no mass creation term. Manufacturing ends at first-release handover Q and its stock gate includes raw/WIP, not the same-Q FG again. The FG/service gate includes complete opening FG + Q handover + gross returns R + real extra material/water inputs = complete closing FG + gross shipments G + real waste/species/other outputs. On consolidation cancel internal Q and stage transfers; do not add Q and its own closing FG as two outputs. Species reaction terms use independent phase/reaction evidence; relevant element balances also conserve. Retained/structural/reaction/free water and all air constituents remain independent measurements; one residual cannot determine two unknowns. Real material/water X_in/X_out deduplicates other incoming/outgoing flow terms only. X deduplicates only the same actual material/water already present in another same-side incoming/outgoing flow term of this same bridge; never a stock, opposite-side term or mere atomic-card existence. Retained new water/material remains both actual influx and closing wet stock. Record opening/closing non-WIP assets, installed fluids and packaging physical quantities independently of every inherited exchange vector. | cp_material; cp_release; cp_waste; cp_species; cp_asset; cp_service; cp_pack | physical and relevant-element residuals with independently measured unknowns | jrc-ceramic-bref-2007 |
| packaging_gross | cohort_service | For each packaging article j: opening_empty_j+opening_attached_WIP_j+opening_attached_FG_j+opening_reusable_j+P_j+I_j+ER_j = closing_empty_j+closing_attached_WIP_j+closing_attached_FG_j+closing_reusable_j+S_j+EO_j+W_j. S follows gross real shipments including re-deliveries, EO is external return out; internal reuse cancels. Remove only duplicate P/I whole-supply components and other overlapping influx/outflux terms, never new influx because it remains in closing stock. Allocate burdens separately; do not scale physical legs or Q by burden shares. When actual repairs or water exchange occur, extend the wet equation with disjoint Radd_j+H2Oin_j on the left and Rremove_j+H2Oout_j on the right; record free/bound/absorbed water, removed wood, wastewater and vapour separately. Whole wet P/I includes its carried water once. X removes only overlap in another same-side flow term, not closing stocks: retained repair additions and water must stay on both sides. Do not count the same replacement part in P and Radd, or removed matter in W and Rremove. | cp_pack; cp_service | each packaging physical reconciliation and separate burden ledger | ilcd-allocation-2010 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Whole-article reference identity must match the complete terminal; audit every native name/synonym/comment/CAS/form/route/geography/media/type and all properties. Retain exact property/group/unit support externally and carry actual use restrictions into this description. Specific unresolved auxiliaries remain visible; no generic bundle binding. | complete native identity and actual supplier/terminal records |
| dq_complete | manufacture; cohort_service | Reconcile every stage, real route extension, failures, stock vector, treatment and physical outlet before dataset completeness. A chemistry/provider/auxiliary gap differs from a missing core whole-wheel identity. No unknown is reported as measured zero or passed QC. | raw-to-final trace; calibrated records; detection limits; source and uncertainty disclosures |
| dq_sources | all modelling rules | Primary industry documents support the declared synthesis and counterexamples, not plant-specific quantities. Allocation relies on applicable ILCD attributional context, not industrial process PDFs. Preserve sampling period/site/configuration and independent source limitations. | source-specific applicability; manufacturer/spec QC; measurement and allocation decisions |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_terminal | finished_wheel | Require a positively compatible complete bare-wheel reference Product identity, all qualifiers and real maker/spec acceptance evidence before a concrete dataset claims usable methodology. Grain/binder/ball/other-tool identities and repeat release do not establish the terminal. | jrc-ceramic-bref-2007; norton-38a-terminal |
| validate_quantity | all inventory rows | Require finite unit-consistency inspection in both languages plus independent actual records for Q and each raw→converted→assigned A→single a chain. Preserve Q=0 and all real losses/stocks. Mechanical checking never establishes scientific/translation approval or a factory test pass. | ilcd-allocation-2010 |
| validate_physical | all physical gates | Require complete full-gross manufacturing/FG/combined balances, each packaging six-leg/stock equation, actual asset/repair/installed-fluid movement, and independent water/phase/species/element evidence. Do not reduce physical flow by allocation share or infer specific chemical mass from COD/VOC/NOx/total boron/carbon. | jrc-ceramic-bref-2007; epa-abrasives-1995 |
| validate_returns | cohort_service | Retain actual G/R masses/states and original release lineage; do not assume returned weight equals original delivered weight or that no material/water/loss changed. Any actual postrelease work needs manufacturer/spec permission and postwork tests/acceptance/disposition; broken vitrified wheels are not assumed recoverable. Services add no new production. | comet-wheel-manufacture; ilcd-allocation-2010 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Declared compatible wheel manufacturing inventory in an LCA; complete applicability/identity/measurement evidence required |
| allowed_use | Selected physical terminal and route; disclosed separate manufacture/service H accounts and honest uncertainty |
| excluded_use | Operating/selection/safety/certification advice; recipe/speed/load/temperature/lifetime/yield defaults; full37910 coverage; automatic mapping/publication; unsupported whole-wheel identity or unmeasured plant claims |
| required_metadata | All reference qualifiers; provider and whole-formulation ownership; original raw extensive units; cohort/Q/H; stocks/physical outlets; allocation decision and native restrictions |
| required_quality_disclosure | Identity, core versus auxiliary/provider gaps, measured versus assumed fields, zeros/nonapplicability evidence, temporal/site scope, uncertainty and unresolved balances |
| update_trigger | Change in whole-wheel/grain/bond family, geometry/insert/impregnation state, supply/recipe/firing/finishing/control route, provider native limits, acceptance specification, evidence or allocation boundary |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD CPC Version3.0 Structure30June2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 37910 definition and adjacent categories only; no canonical identity or mapping approval |
| jrc-ceramic-bref-2007 | official_guidance | European Commission JRC Ceramic Manufacturing Industry BREF August2007; §1.5.9 and §2.3.9.1–7 / Figure2.30; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/cer_bref_0807.pdf | Dedicated inorganic bonded-abrasive route, whole bond/temporary binder, gas/electric alternatives, losses and final gate; no numerical defaults |
| epa-abrasives-1995 | official_guidance | US EPA AP-42 §11.31 January1995; full §11.31.2–3 and Figure11.31-2; https://www.epa.gov/sites/default/files/2020-10/documents/c11s31.pdf | Wheel versus grain/coated/nonvitrified routes, conditional pore former/autoclave, cooling/finishing/balance/test and species monitoring; no grit-dryer factor transferred |
| zische-wheel-manufacture | literature | Zische Schleifwerkzeuge Production of abrasives; undated; https://zische.com/en/grinding-knowledge/production-of-abrasives/ | Primary conventional-wheel manufacturing and unfinished-fired versus finished-wheel distinction; upstream/on-site bond ownership; no recipe/schedule |
| comet-wheel-manufacture | literature | COMET Schleiftechnik The manufacturing process; undated; https://www.comet-d.de/en/company/manufacturing | Independent manufacturer weighing/pressing/final shape/inspection evidence; videos and numerical schedule not adopted |
| norton-38a-terminal | literature | Norton Wheels ID–38A; undated; https://www.nortonabrasives.com/en-gb/product/wheels-id-38a | Whole high-purity AO straight wheel01 terminal example with recessed05 counterexamples; geometry/material only, no same-SKU manufacturing claim or operating instruction |
| ilcd-allocation-2010 | official_guidance | European Commission JRC ILCD Handbook General guide Detailed guidance First editionMarch2010; §7.9.2–7.9.3, printed255–265; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional applicable-case hierarchy: subdivision/virtual subdivision, exchange-specific determining physical causality, residual common-gate actual-state market value; no automatic waste credit or fixed share |
| zische-wheel-designation | literature | Zische Schleifwerkzeuge Designation of grinding wheels; undated; https://zische.com/en/grinding-knowledge/designation-of-grinding-wheels/ | Primary complete wheel-quality table distinguishes white fused alumina EW, sintered alumina SG and vitrified V; qualitative terminal/route qualification only, no grit/grade/porosity/recipe or operational defaults |
