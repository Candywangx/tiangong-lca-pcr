---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.capped-gpps-barrel-ballpoint-pen
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Capped GPPS-barrel ballpoint pen

Common applicability context for every following rule.

This method covers one evidence-bounded subset within the existing writing-implements category: manufacture of complete, capped, non-electronic ballpoint pens with a clear polystyrene barrel, empty polypropylene reservoir tube, finished brass tip carrying an already seated tungsten-carbide ball, supplied cap/end plug and whole purchased writing ink. It begins with the actual resin and prepared component/formulation supply forms, includes on-site barrel moulding, real refill filling/tip insertion, mechanical assembly and actual writing/function inspection, and ends at the unique first quality release of the complete usable pen. Buying a finished pen and only packaging it does not meet this manufacturing boundary.

The construction evidence is the manufacturer complete-pen drawing, not a refill or ink picture. Industrial moulding history and an equipment maker’s filling sequence are transparent unit-operation synthesis; they are not an assertion that the same contemporary BIC site, order, machine or SKU operates this purchased-input route. The whole ink, cap and plug compositions remain actual supplier declarations. No published pen weight, dimension, ball diameter, ink dose, writing distance, lifetime, formulation, density, yield, temperature, time, energy or certification becomes a default. Sources: bic-cristal-construction-2025; bic-integrated-manufacture-history; toptip-inj34-refill-assembly.

The parent category also names pencils, holders, crayons, leads, pastels, charcoal, chalk and parts. Those titles do not prove compatible manufacture. This method excludes fountain pens, gel/rollerball products without demonstrated compatible construction, retractable/spring mechanisms, electronic instruments, wood-pencil or chalk manufacture, loose components/refills/ink as reference outputs and independent pen boxes. Stainless-tip/steel-ball and on-site tip metallurgy, tube extrusion or ink formulation need separately supported disjoint process boundaries before this method can be extended; do not mix their BOM into this capped representative. Classification context is un-cpc3-structure-2025.

The common reference is the complete native assembled Product family in Mass/kg. New unique first quality-release net Q includes integral ink/components once and excludes outer packaging; previously released closing FG already belongs to Q. All rules retain gross physical V separately from attributable service A, every inherited exchange vector, original Qc for actual earlier-cohort services, and unknown future services.

## 1. Scope and Applicability

This method covers one evidence-bounded subset within the existing writing-implements category: manufacture of complete, capped, non-electronic ballpoint pens with a clear polystyrene barrel, empty polypropylene reservoir tube, finished brass tip carrying an already seated tungsten-carbide ball, supplied cap/end plug and whole purchased writing ink. It begins with the actual resin and prepared component/formulation supply forms, includes on-site barrel moulding, real refill filling/tip insertion, mechanical assembly and actual writing/function inspection, and ends at the unique first quality release of the complete usable pen. Buying a finished pen and only packaging it does not meet this manufacturing boundary.

The construction evidence is the manufacturer complete-pen drawing, not a refill or ink picture. Industrial moulding history and an equipment maker’s filling sequence are transparent unit-operation synthesis; they are not an assertion that the same contemporary BIC site, order, machine or SKU operates this purchased-input route. The whole ink, cap and plug compositions remain actual supplier declarations. No published pen weight, dimension, ball diameter, ink dose, writing distance, lifetime, formulation, density, yield, temperature, time, energy or certification becomes a default. Sources: bic-cristal-construction-2025; bic-integrated-manufacture-history; toptip-inj34-refill-assembly.

The parent category also names pencils, holders, crayons, leads, pastels, charcoal, chalk and parts. Those titles do not prove compatible manufacture. This method excludes fountain pens, gel/rollerball products without demonstrated compatible construction, retractable/spring mechanisms, electronic instruments, wood-pencil or chalk manufacture, loose components/refills/ink as reference outputs and independent pen boxes. Stainless-tip/steel-ball and on-site tip metallurgy, tube extrusion or ink formulation need separately supported disjoint process boundaries before this method can be extended; do not mix their BOM into this capped representative. Classification context is un-cpc3-structure-2025.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.capped-gpps-barrel-ballpoint-pen |
| classification_refs | CPC 3.0 38911; narrower product and route boundary |
| covered_products | Complete capped ballpoint pens made through the stated component-supply and manufacturing route |
| excluded_products | Loose ink/refills/tips/barrels; pencils and chalk; holders and cases; unverified alternative mechanisms or chemistry; purchased complete pens only packed |
| representative_product | One complete usable capped PS-barrel ballpoint pen with filled PP tube and finished brass/WC-ball tip |
| production_route | Supplied resin/modules/formulations -> barrel injection moulding -> actual ink filling and tip insertion -> actual marking if used -> mechanical assembly -> writing/function verification -> first complete-pen release |
| market_state | Complete capped usable pen; native bulk/unpacked article; integral ink included and all external packaging excluded |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply the declared complete capped usable ballpoint pen, not an isolated refill, ink or component |
| How much | 1 kg net complete pens at unique first quality release |
| How well | Meet the actual same-configuration assembly, writing/function and release specification; no default performance or compliance claim |
| How long or cycle | One matched manufacturing first-release cohort plus separately identified actually observed services; no use-life function or future service assumption |
| reference_flow_link | released_pen |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Assembled writing and drawing implements `f20733c0-2158-4f6b-9092-370a185512ca` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | complete capped pen configuration and integral supplied contents; PS barrel and actual GPPS supply specification; empty formed PP tube and finished brass/WC-ball tip supply boundary; actual cap and end-plug polymer and colour; whole writing-ink supplier formulation and actual oil/water or other state; native product-family applicability and all identity restrictions; actual moulding filling assembly and conditional printing route; actual written and functional release specification without default performance claims; unique first-release cohort and measured complete net kg Q; counts and measured same-configuration net mass if conversion is used; plant supplier geography and observation period; opening and closing raw WIP and released FG stocks with every inherited exchange vector; failed zero-output startup idle cleanup tests and rework history; actual packaging pools and gross physical returns and dispatch; actual observed post-release service window and original Qc; provider unit property state and species/air/water compartment compatibility |

Declare every qualifier in dataset metadata, process notes, reference comments or equivalent consumed fields. The reference family is broader than this method; all native limits and complete-pen applicability are also retained in release, return and dispatch row descriptions, not only here.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | Q is actual new unique complete-pen first-release net kg. Include integral ink and all supplied pen components once; exclude all external packaging. Count is auxiliary, not the native reference. Closing released FG is already in Q. |
| count_mass | reference product | Mass | kg | If count records are used, M is measured complete net pen mass in kg/item for the same configuration and lot, obtained using cp_release calibrated net weighing and a documented count/sample scope. Convert actual counts using measured M before Q aggregation; never use the printed catalogue weight, ball diameter, ink fill or a secondary native coefficient to infer M or density. Raw material and service collection remains in original units. |
| whole_supply | all inventory rows | Declared row property | declared row unit | Whole purchased ink/formulation or article is procured once. Assay, carrier water and contained metal/polymer masses are nonadditive subaccounts. Actual separate on-site purchases need disjoint atomic cards and a reconciled bridge; changing to on-site chemical preparation needs source-supported route review. |
| unit_conversion | all inventory rows | Declared row property | declared row unit | Convert raw units before causal attribution and one normalization. Use 1 kWh = 3.6 MJ for electricity; its property and unit group must be energy. Already integrated gas/liquid volume is not multiplied by time; a true rate is integrated. Volume-to-mass requires independently measured density of that substance and state; no universal water density or molecular amount is inferred. |
| physical_burden | all inventory rows | Declared row property | declared row unit | Physical N_r is full gross boundary quantity V_r, including parts, FG, fluids, external returns, packaging and Waste. Only service/utility burden N_r uses causally attributed A_r. Keep stock-vector transfer corrections separate; never shrink physical V by A, stock differences or economic/service shares. Select current Q or positive original Qc by cohort, and calculate N_r / D_r only once under report_once. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual GPPS resin plus separately supplied empty formed PP tube, finished brass/WC tip, finished cap, end plug and whole writing ink at site receipt |
| starting_condition_role | Real manufacturing supply boundary; upstream component/formulation production remains linked once; no purchased complete-pen packing shortcut |
| product_classification_scope | CPC3.0 38911 narrower complete capped GPPS-barrel ballpoint manufacturing subset |
| recursive_input_rule | Purchased same-category complete pens are outside this manufacture route. Returned already released pens retain original cohort; internal component/refill handovers cancel without new purchases or Q |
| upstream_dataset_requirement | Match actual whole supplied identity, composition, material grade/route/form, state, geography and exact native property/unit; a broad UUID supplies no provider, recipe or manufacturing quantities |
| disclosure | Declare whole-product gate, observed manufacturing period, linked raw/WIP/FG histories, actual post-release service window, independent physical and burden ledgers, utilities, treatment, packaging/return pools and all actual exclusions. Distribution beyond plant and use/end-of-life are separate scopes; unknown future services remain unknown |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_whole | make_pen | Require on-site resin forming plus actual filling/assembly, not receipt and repacking of complete pens. A whole bought tip includes ball/metals and a whole bought ink includes its carriers/solutes. Either choose disjoint supplies or reconcile a documented component bridge with internal handovers cancelled; never add whole wet/article mass and the same contained component again. | bic-cristal-construction-2025; bic-integrated-manufacture-history; toptip-inj34-refill-assembly |
| boundary_release | make_pen; post_release | Q is newly and uniquely first quality-released complete net kg, not dispatch and not a sample count. A lot held as closing released FG already contributes to Q and is not another manufacturing output. Maintain manufacturing and FG physical gates separately, pair actual T_accept physical handover with FG receipt, and cancel that internal transfer in consolidation. Reinspection, delivery, reshipment and repair cannot create new production. | bic-cristal-construction-2025 |
| boundary_events | make_pen; post_release | Include all actual raw inputs, failed and zero-output runs, rejected tests, startup/shutdown, idle, cleanup and incremental rework loads. Keep opening/closing raw, WIP and non-WIP/FG physical quantities and every inherited exchange vector by cohort. Inventory flows actually present but absent from a card list must be added atomically before completeness, not hidden in zero or an other-input bundle. |  |
| boundary_utilities | make_pen; post_release | Include actual mould heating/cooling, dosing, assembly, testing, cleaning, printing when used, packaging, storage, handling and dispatch services during the observed window. Distinguish externally bought utilities from internally generated services; do not invent a boiler, steam or condensate return. Real external thermal-carrier returns retain gross kg, phase/T/P, enthalpy and supplier water/energy accounting. Add each actual fuel, refrigerant and carrier separately if used. |  |
| boundary_physical | all inventory rows | Close each physical gate independently: opening stocks plus all gross physical inflows equals closing stocks plus all gross physical outflows, with measured releases/species and investigated discrepancy. At manufacturing, outputs distinguish actual T_accept of newly accepted pens from previously released returned pens made ready again; at FG, separate opening FG, new internal receipts, real returns, gross dispatch, rejection and closing FG. Consolidation cancels only paired internal transfers. Preserve full wet mass and relevant elements; one residual cannot determine two unknowns. No allocation or stock-burden adjustment rescales physical movements. |  |
| boundary_packaging | post_release | For each actual whole wet corrugated-carton or PE-film pool use O_empty+O_attachedWIP+O_attachedFG+O_reusable+P+I_sup+ERin+J_in+H2O_in-X_in=C_empty+C_attachedWIP+C_attachedFG+C_reusable+S_gross+EOout+W_whole+J_out+H2O_out-X_out. I_sup is actual disjoint supplier-included packaging, not another purchase; internal reuse R_internal cancels between matched positions and is not I_sup. J is additional real non-water material and H2O is additional actual water transfer only to the extent not already included in another whole wet leg. O/C and every whole leg retain all contained matter: actual new material/water retained in C never erases its true influx. X subtracts only independently proved overlap with OTHER same-side flow terms, never C, real increments, opposite directions or card existence. Trace actual J/water sources/destinations with specific physical records and internal pairs; do not invent a generic provider, extra Q, separate constituent waste or balancing flow. Gross shipments, external returns received/sent and true whole waste stay physically full regardless of environmental use shares. These two specific article pools are conditional on actual configuration; these are actual conditional packaging choices, not a universal material, tare, repair, water uptake or mass. |  |
| full_cohort | actual declared configuration | For the newly accepted cohort Q=Q0. Q0 is independently fixed from unique first quality-release events for complete same-configuration pens after every required factory operation and test, ready for the declared factory supply gate. It includes all actual retained articles and water at release and excludes outer packaging tare. Reconcile each original Q0 on its original-material/configuration basis across disjoint net remaining external deliveries, every actual on-site accepted FG/held/returned/rework state, irreversible losses and other terminal dispositions. Gross return first leaves its old delivery position. Dispatch, return, repacking, retest or reacceptance never creates new Q. Current surviving wet mass and original water/material losses cannot both be restored and counted again. Opening old cohorts and later observed-H services use original Qc/Q0, not current output; delivery plus closing FG is sufficient only when all other postgate states/exits are absent. Q=0 or unknown retains actual raw loads without a per-unit result. | ilcd-attributional-allocation-2010 |
| provider_history | actual declared configuration | Keep complete physical raw/WIP/non-WIP/FG/return, packaging, installed-fluid and every actual equipment-fleet ledger separate from reference events and per-exchange burden vectors. Own opening WIP carries actual earlier foreground burdens once; only substantiated still-unused/unassigned closing WIP carries them forward. For attribution, A may add unassigned inherited opening burden to period raw burden and remove only demonstrated still-unassigned closing burden and a disjoint justified other-system/cohort handover. Already-net consumption is not stock-corrected a second time; accepted closing FG and services already performed for it are not deleted. A complete provider aggregate and its embedded material/transport/asset/history decomposition are mutually exclusive. Preserve failed attempts, idle/start-stop, inspection, samples, cleanout and repair loads. Actual complete upstreams match the whole supplied article/preparation and true availability point; no receipt or purchased-service label hides known on-site manufacture. Actual provider inclusion schedules cover current electricity, repair, transport and operating supplies as well as capital: an aggregate already including a metered foreground operation and that separate operation cannot both be charged. | ilcd-attributional-allocation-2010 |
| physical_transfer | actual declared configuration | T_accept is the actual physical transfer at the declared manufacture-to-FG-service gate; Q0 is the separately measured first-release reference-event denominator. Where the same configuration, state, event and window make them coincide, demonstrate that equality from independent records, never fit Q0 from physical closure. The finished reference row declares the unit and is not another external shipment. Manufacturing, FG-service and consolidated gates retain every real wet stock and gross exchange; consolidation cancels the one actual internal T_accept only, not external dispatch or real return. For an actually reacting species i, keep measured G_i formation and C_i consumption in its species equation; do not conserve reacting molecules by assumption or infer them from elemental closure. Chemical reactions create no net total-mass/element source; phase transfer is not chemical creation. Water additions/evaporation and all other terms must be mutually disjoint from water already included in whole supplied articles, carrier legs or releases. Unknown terms remain unresolved, not residual-fitted. | ilcd-attributional-allocation-2010 |
| wet_pack | actual declared configuration | For each actual whole wet corrugated-carton or PE-film pool use O_empty+O_attachedWIP+O_attachedFG+O_reusable+P+I_sup+ERin+J_in+H2O_in-X_in=C_empty+C_attachedWIP+C_attachedFG+C_reusable+S_gross+EOout+W_whole+J_out+H2O_out-X_out. I_sup is actual disjoint supplier-included packaging, not another purchase; internal reuse R_internal cancels between matched positions and is not I_sup. J is additional real non-water material and H2O is additional actual water transfer only to the extent not already included in another whole wet leg. O/C and every whole leg retain all contained matter: actual new material/water retained in C never erases its true influx. X subtracts only independently proved overlap with OTHER same-side flow terms, never C, real increments, opposite directions or card existence. Trace actual J/water sources/destinations with specific physical records and internal pairs; do not invent a generic provider, extra Q, separate constituent waste or balancing flow. Gross shipments, external returns received/sent and true whole waste stay physically full regardless of environmental use shares. These two specific article pools are conditional on actual configuration; these are actual conditional packaging choices, not a universal material, tare, repair, water uptake or mass. | ilcd-attributional-allocation-2010 |
| whole_waste_service | actual declared configuration | One actual contaminated film, carton, cloth, machine, filter, rejected pen part or liquid consignment has one whole receiver event Qt containing substrate/article, retained ink/cleaner/polymer matter and water once. Dry tare and measured originW/components are nonadditive nested analyses, not extra exported wastes unless physically separated before the boundary. Match its actual receiver/treatment/provider and extensive unit. Physical Qt and Qt/Q disclosure are not automatically the service demand: use only evidenced compatible nonoverlapping service A with the original cohort Qc/Q0, keeping physical transfer full. Unknown attribution remains unknown. Arithmetic illustration only: a shared10kg consignment is never shrunk to2.5kg by25% attribution and never charged as10kg again to every cohort. Different dry/wet or provider units require the actual full-composition/state bridge, not a hidden conversion or pure-component proxy. | ilcd-attributional-allocation-2010 |
| actual_fleets | actual declared configuration | Every actual injection-moulding machine, ink-filling/tip-insertion line, tool, extraction/handling unit and reusable cloth keeps a complete actual configured fleet: new/used receipts, external returns received/sent, real retirement/whole waste, installed/opening/closing holdings and disjoint repair/fluid changes. BIC industrial history and TopTip equipment show actual operations, not the same contemporary plant, installed machine or shared SKU. A whole line/provider already including a machine and a separate purchase of that machine cannot both be added. Measure actual complete configuration mass M if count/mass conversion is needed; Item(s) is not kg and no machine mass or lifetime is supplied. Actual service h must match a complete real provider history and observed original-cohort use, unused/unassigned capacity and inherited burdens; physical fleet kg is not scaled by a service share. Separately supplied oil/filter/belt and whole contaminated removed items need their own atomic interfaces when actually present; contained parts remain nested in a whole asset. Receipt/return/shipment/retirement cards disclose physical V only; they are not a second capital purchase when the actual compatible service history already owns the same upstream manufacture. Actual provider-service scope and separately metered operation/repair must be nonoverlapping. A cotton cloth has the same full gross receipt/return/whole-waste and opening/closing fleet record; actual laundering or replacement must carry all disjoint real provider and utility burdens. No cloth lifetime or laundering load is assumed. | ilcd-attributional-allocation-2010 |
| actual_method | actual declared configuration | The supplied GPPS is physically melted and moulded; this route does not prescribe polymer synthesis, an on-site tip metallurgy unit or ink formulation. Any actual chemical change nevertheless requires independently established formation G_i and consumption C_i for its species; total wet mass and elements do not create a net chemical mass source. No resin monomer content, total VOC, COD, odour or balance residual identifies a released molecule. Use the complete EPA320 heated extractive FTIR programme only for actual identified IR-active vapor species with compatible reference spectra, actual interferants, background/temperature/pressure basis, representative transport, analyte-spike recovery and uncertainty checks. It does not measure homonuclear N2/O2 or monatomic Ar, particulate, liquid/mist or totalVOC chemistry. Actual collected condensate or cleaning liquid is one whole physical receiver transfer, separate from any actual final released species/phase. The actual full50-page dated Method320 PDF includes its FTIR Protocol and appendices; no referenced-only/missing-Protocol claim is made. Its PDF16 Eq3/4 use a tracer mixture fraction but the same-page DF>=10 legend is inconsistent: retain source bytes and use common corrected mole-basis phi=(tracer_spiked-tracer_native)/(tracer_direct-tracer_native), denominator nonzero, actual representative matched no-unaccounted-loss mixing, and expected analyte=phi*analyte_direct+(1-phi)*analyte_native. Phi is distinct from the reciprocal dilution ratio; this physical identity is no numerical setting or acceptance tolerance. Actual duct flow needs source-compatible complete geometry/traverse and calibrated velocity/state/density procedures; Methods1–3 originals are retained with their non-cyclonic/size/location, restricted gas-matrix/interference and argon-omission limits. Their unabsorbed N2/CO remainder is not pure N2 or measured Ar. A duct result is not automatically a whole fugitive-source inventory. The retained Method18 excludes compounds that can polymerize before analysis, so its title is not proof of styrene sample stability or a substitute for a demonstrated applicable programme. Neither this source set nor a future SOP establishes every unidentified ink/cleaner molecule, hot wet mist, sorption/phase transfer or reactive matrix. A genuinely necessary unestablished specific programme remains hold; ordinary actual lot/site calibration and recovery within an established applicable programme remain study qualification, not proof no method exists. No actual release or successful QA is presumed. These dated EPA copies and this technical synthesis are not a claim of regulatory conformity, scientific acceptance or complete actual-factory inventory. | epa-method320; epa-method1; epa-method2; epa-method3; epa-method18-counter |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| make_pen | Barrel forming, actual refill filling, whole-pen assembly and first release | required | Complete declared manufacturing route, not finished-pen packing | foreground | Unique first-release net Q; reference row released_pen |
| post_release | Actual post-release packaging, storage, handling and dispatch | conditional | Only actually observed performed services and physical movements; future unknown | foreground | Matched current Q or original Qc; no second Q |
| factory_assets | Actual configured moulding/filling machine fleets and service | required | Real separate complete units only; whole line and included unit not duplicated | foreground | released_pen |

The following inventory is atomic. Conditional rows are recorded only when actually present; not_applicable requires evidence of actual absence and unknown is not zero. Add each real additional single substance, packaging component, waste or gas separately. Internally made barrels, filled refills and other handovers are not new purchases and cancel at the consolidated physical gate. Keep every physical stock and inherited exchange vector separately. Card amounts and protocol aggregation_rule reference the same report_once result, never sequential divisions.

### Process: Forming, filling and complete-pen release (`make_pen`)

#### Inputs

##### Product flows

###### Clear barrel resin (`ps_resin`)

Purchased unmodified general-purpose polystyrene granules for on-site barrel injection moulding. Native identity is GPPS granulate with a Mass reference; it supplies no CAS, grade specification, geography, density or quantities. Confirm the actual transparent GPPS supplier specification; HIPS, EPS, recycled blends, compounds and purchased finished barrels are different supply forms. Include charging, start-up purge, sprues, failed mouldings and actual cooling burdens; internal regrind is an internal loop, not a new purchase. Record the gross physical crossing V_r in its native unit and its lot/event, independently of attributable burden A_r. Retain the entire actual supplied article or formulation once, with stock and inherited-exchange vectors. This is not an allocation-scaled material quantity. Normalization declaration: Full gross physical boundary V_r is undivided N_r; use the single N_r / D_r result from report_once, without shrinking by burden, stock difference or share and without division again in this card.

- Selected flow: polystyrene (general purpose) granulate (GPPS) `4f19f11e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: N_r / D_r
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `bic-cristal-construction-2025`; `bic-integrated-manufacture-history`

###### Empty ink reservoir tube (`empty_pp_tube`)

One externally supplied empty formed PP tube, cut to the actual compatible configuration. It contains no purchased ink or tip. Polymer granulate is not this formed tube; do not add on-site extrusion, resin or its upstream electricity when the tube is bought formed. The source identifies PP tube construction, not a mandatory dimension, mass, grade or supplier. Record the gross physical crossing V_r in its native unit and its lot/event, independently of attributable burden A_r. Retain the entire actual supplied article or formulation once, with stock and inherited-exchange vectors. This is not an allocation-scaled material quantity. Normalization declaration: Full gross physical boundary V_r is undivided N_r; use the single N_r / D_r result from report_once, without shrinking by burden, stock difference or share and without division again in this card.

- Selected flow: Empty polypropylene ballpoint ink-reservoir tube
- Flow property / unit: Mass / kg
- Amount rule: N_r / D_r
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `bic-cristal-construction-2025`; `toptip-inj34-refill-assembly`

###### Finished ballpoint tip assembly (`tip_assembly`)

Purchase one finished compatible brass socket/tip with its already seated tungsten-carbide ball and finished ink channels. Its alloy, ball material, any binder/coating and supplier acceptance must be declared from actual specifications. Tungsten powder, WC powder, sintered cutting inserts, bare brass and a loose ball cannot replace this assembly. Do not also purchase its contained metals or invent on-site wire machining, powder sintering, ball grinding or crimping. Steel-ball and stainless-tip routes are distinct; this capped representative has no retracting spring. Record the gross physical crossing V_r in its native unit and its lot/event, independently of attributable burden A_r. Retain the entire actual supplied article or formulation once, with stock and inherited-exchange vectors. This is not an allocation-scaled material quantity. Normalization declaration: Full gross physical boundary V_r is undivided N_r; use the single N_r / D_r result from report_once, without shrinking by burden, stock difference or share and without division again in this card.

- Selected flow: Finished brass ballpoint tip with seated tungsten-carbide ball
- Flow property / unit: Mass / kg
- Amount rule: N_r / D_r
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `bic-cristal-construction-2025`; `toptip-inj34-refill-assembly`

###### Supplied protective cap (`pen_cap`)

One finished externally supplied protective pen cap belonging to the same finished-pen configuration. The primary construction drawing establishes the cap, but does not identify its polymer or colourant chemistry. Declare the actual whole supplied cap, polymer/compound and colour from the supplier; no PP, styrene-butadiene, dye or pigment UUID is inferred. Its moulding and pigment additions are upstream, not repeated foreground inputs. Record the gross physical crossing V_r in its native unit and its lot/event, independently of attributable burden A_r. Retain the entire actual supplied article or formulation once, with stock and inherited-exchange vectors. This is not an allocation-scaled material quantity. Normalization declaration: Full gross physical boundary V_r is undivided N_r; use the single N_r / D_r result from report_once, without shrinking by burden, stock difference or share and without division again in this card.

- Selected flow: Moulded protective cap for a capped ballpoint pen
- Flow property / unit: Mass / kg
- Amount rule: N_r / D_r
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `bic-cristal-construction-2025`

###### Supplied barrel end plug (`end_plug`)

One externally supplied end plug compatible with the actual body and reservoir. Record polymer, colour, seal function and whole supplied mass from the actual bill of materials. The source establishes a plug, not HIPS, a fixed pigment or a separate solvent. No upstream moulding or contained resin is purchased twice. Record the gross physical crossing V_r in its native unit and its lot/event, independently of attributable burden A_r. Retain the entire actual supplied article or formulation once, with stock and inherited-exchange vectors. This is not an allocation-scaled material quantity. Normalization declaration: Full gross physical boundary V_r is undivided N_r; use the single N_r / D_r result from report_once, without shrinking by burden, stock difference or share and without division again in this card.

- Selected flow: Moulded barrel end plug for a capped ballpoint pen
- Flow property / unit: Mass / kg
- Amount rule: N_r / D_r
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `bic-cristal-construction-2025`

###### Whole purchased ballpoint ink (`writing_ink`)

One complete supplied writing-ink formulation compatible with this tube/tip system, measured as supplied, including every carrier and constituent. The broad native Product identity is finished manufactured ink, production mix at plant, Mass, without CAS, colour, recipe, grade, density or geography; its pharmaceutical generalComment is disclosed metadata debt, not evidence of pharmaceutical composition. The complete pen source does not prove a universal oil/water base or a black/red recipe. Require actual supplier formulation/state and compatibility; printing/inkjet ink is excluded. Do not buy whole ink and separately buy its contained solvents, water, dyes or pigments. On-site formulation is outside this supplied-ink route and needs its own disjoint atomic recipe and process evidence. Record the gross physical crossing V_r in its native unit and its lot/event, independently of attributable burden A_r. Retain the entire actual supplied article or formulation once, with stock and inherited-exchange vectors. This is not an allocation-scaled material quantity. Normalization declaration: Full gross physical boundary V_r is undivided N_r; use the single N_r / D_r result from report_once, without shrinking by burden, stock difference or share and without division again in this card.

- Selected flow: Writing or drawing ink and other inks `7b873d98-a9cc-416f-a9e8-a5888295364b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: N_r / D_r
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `bic-cristal-construction-2025`; `toptip-inj34-refill-assembly`

###### Conditional barrel marking ink (`marking_ink`)

Include only when actual pad printing of this barrel uses this one supplied formulation before first release. Declare supplier, product code, complete formulation, curing route and actual solids/solvent state; it is distinct from the ink inside the pen. The adopted industrial history does not prescribe pad printing: this conditional process requires actual production evidence. Screen printing, hot-transfer foil, laser engraving and UV systems cannot be silently represented by this card. Add each actual separately purchased hardener/thinner and its operation if used; do not duplicate contained constituents. Record the gross physical crossing V_r in its native unit and its lot/event, independently of attributable burden A_r. Retain the entire actual supplied article or formulation once, with stock and inherited-exchange vectors. This is not an allocation-scaled material quantity. Normalization declaration: Full gross physical boundary V_r is undivided N_r; use the single N_r / D_r result from report_once, without shrinking by burden, stock difference or share and without division again in this card.

- Selected flow: Supplied pad-printing ink formulation for pen-barrel marking
- Flow property / unit: Mass / kg
- Amount rule: N_r / D_r
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources:

###### Conditional ink-contact cleaner (`cleaner`)

One physically supplied cleaning preparation, only when actually used for tank, dosing head, fixture or printing cleaning. Record the actual trade formulation, carrier, concentration and supplier specification; do not label it ethanol or any individual molecule from VOC totals. A real single pure-solvent purchase instead needs its own named atomic card. Retain cleanup, colour change, startup and failed-run consumption and captured liquid. Record the gross physical crossing V_r in its native unit and its lot/event, independently of attributable burden A_r. Retain the entire actual supplied article or formulation once, with stock and inherited-exchange vectors. This is not an allocation-scaled material quantity. Normalization declaration: Full gross physical boundary V_r is undivided N_r; use the single N_r / D_r result from report_once, without shrinking by burden, stock difference or share and without division again in this card.

- Selected flow: Supplied cleaning formulation for ballpoint-ink contact equipment
- Flow property / unit: Mass / kg
- Amount rule: N_r / D_r
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources:

###### Writing-test paper (`test_paper`)

Actual uncoated wood-free writing-test paper consumed during functional verification, including rejected tests. Native Product is uncoated printing/writing/packaging paper with production mix at plant and Mass; it gives no test specification, grammage, geography or quantity, and its classification is wood-free graphic paper. Do not substitute coated, abrasive or thermal sheets. The sample ink transferred onto paper remains physical ink in the waste paper, not a fictitious evaporated mass. Record the gross physical crossing V_r in its native unit and its lot/event, independently of attributable burden A_r. Retain the entire actual supplied article or formulation once, with stock and inherited-exchange vectors. This is not an allocation-scaled material quantity. Normalization declaration: Full gross physical boundary V_r is undivided N_r; use the single N_r / D_r result from report_once, without shrinking by burden, stock difference or share and without division again in this card.

- Selected flow: Uncoated printing, writing and packaging paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: N_r / D_r
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_quality`
- Sources: `bic-cristal-construction-2025`

###### Actual municipal water supply (`water_make`)

Conditional actual treated municipal water for mould cooling makeup or documented cleaning, as distinct measured uses. Native Product is treated potable tap-water supply with a Mass reference and a secondary Volume coefficient 0.001; no location is specified. It is not deionized water, raw abstraction or a universal density measurement. Use measured kg or independently measured same-state density for a volume record; do not borrow the native secondary coefficient as measured density. Closed-loop recirculation is not repeated external procurement. Record the gross physical crossing V_r in its native unit and its lot/event, independently of attributable burden A_r. Retain the entire actual supplied article or formulation once, with stock and inherited-exchange vectors. This is not an allocation-scaled material quantity. Normalization declaration: Full gross physical boundary V_r is undivided N_r; use the single N_r / D_r result from report_once, without shrinking by burden, stock difference or share and without division again in this card.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: N_r / D_r
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities_make`
- Sources:

###### Manufacturing electricity (`power_make`)

Meter actual electricity for the selected operations and retain startup, idle, failure, cleanup, testing, rework, cooling and internal compressed-air generation when present. This native Product is CN grid-average consumption mix to user below 1 kV with reference Net calorific value; its exact unit-group chain is energy/MJ, not Units of mass. Reuse only for a matching China low-voltage supply; other countries, voltages or dedicated technologies need compatible identity/provider evidence. No BIC factory is claimed to use this CN supply. Convert raw kWh to MJ once and attribute service burdens by the documented hierarchy; do not also buy an internally generated utility. Do not shift failed-run loads out of the production cohort merely because no pen passed. Normalization declaration: After raw unit conversion and real attribution, undivided A_r is N_r; use the single N_r / D_r result from report_once, with no division again in this card.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: N_r / D_r
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities_make`
- Sources:

###### Conditional clean wiping cloth (`clean_wipe`)

Only actual supplied cotton cloth used for the documented cleaning event. Verify composition, reusable state, laundering and replacement; synthetic or blended cloth needs its own identity. Retain purchased and externally returned quantities separately, with opening/closing reusable stocks and actual cleaning burdens. Record the gross physical crossing V_r in its native unit and its lot/event, independently of attributable burden A_r. Retain the entire actual supplied article or formulation once, with stock and inherited-exchange vectors. This is not an allocation-scaled material quantity. Normalization declaration: Full gross physical boundary V_r is undivided N_r; use the single N_r / D_r result from report_once, without shrinking by burden, stock difference or share and without division again in this card.

- Selected flow: Cotton wiping cloth for ink-contact cleaning
- Flow property / unit: Mass / kg
- Amount rule: N_r / D_r
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources:

###### Cotton wiping cloth for ink-contact cleaning (`cloth_erin`)

Every actual injection-moulding machine, ink-filling/tip-insertion line, tool, extraction/handling unit and reusable cloth keeps a complete actual configured fleet: new/used receipts, external returns received/sent, real retirement/whole waste, installed/opening/closing holdings and disjoint repair/fluid changes. BIC industrial history and TopTip equipment show actual operations, not the same contemporary plant, installed machine or shared SKU. A whole line/provider already including a machine and a separate purchase of that machine cannot both be added. Measure actual complete configuration mass M if count/mass conversion is needed; Item(s) is not kg and no machine mass or lifetime is supplied. Actual service h must match a complete real provider history and observed original-cohort use, unused/unassigned capacity and inherited burdens; physical fleet kg is not scaled by a service share. Separately supplied oil/filter/belt and whole contaminated removed items need their own atomic interfaces when actually present; contained parts remain nested in a whole asset. Receipt/return/shipment/retirement cards disclose physical V only; they are not a second capital purchase when the actual compatible service history already owns the same upstream manufacture. Actual provider-service scope and separately metered operation/repair must be nonoverlapping. A cotton cloth has the same full gross receipt/return/whole-waste and opening/closing fleet record; actual laundering or replacement must carry all disjoint real provider and utility burdens. No cloth lifetime or laundering load is assumed. This card is only actual gross external cloth erin; retain whole wet cloth and actual retained matter, original use history and provider scope, never a new reference or duplicate new purchase.

- Selected flow: Cotton wiping cloth for ink-contact cleaning
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: N_r / D_r
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cloth`
- Sources:


##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conditional external cooling-water return (`returned_water`)

Only actual water physically returned across the external supplier interface belongs here; internal circulation is cancelled. Retain full gross kg, actual phase, temperature, pressure and measured enthalpy difference, plus supplier water/energy accounting. This is neither untreated wastewater nor an assumed condensate/boiler loop. If a supplied heat service is actually bought, reconcile its MJ and carrier water so one provider burden is not bought twice. Record the gross physical crossing V_r in its native unit and its lot/event, independently of attributable burden A_r. Retain the entire actual supplied article or formulation once, with stock and inherited-exchange vectors. This is not an allocation-scaled material quantity. Normalization declaration: Full gross physical boundary V_r is undivided N_r; use the single N_r / D_r result from report_once, without shrinking by burden, stock difference or share and without division again in this card.

- Selected flow: Returned cooling water at the actual supplier-return state
- Flow property / unit: Mass / kg
- Amount rule: N_r / D_r
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities_make`
- Sources:

###### Uniquely first-released complete pen (`released_pen`)

The native Product family is Assembled writing and drawing implements, bulk/unpacked, with Mass reference. Select only the complete capped non-electronic ballpoint pen made through the stated route: functional filled reservoir, seated ball/tip, barrel, supplied cap and end plug, all included once. Native original source classification 3/39/399 is preserved separately from active CPC38911; it is taxonomy metadata, not evidence of another physical product. No CAS, colour, grade, recipe, density, mass per item, geography or lifetime is supplied. Positive manufacturer whole-pen construction establishes family applicability, not supplier/SKU equivalence or a background inventory. A part, empty barrel, refill, ink, isolated polymer or external pen case cannot be this output. Q is complete net newly first-released mass after actual assembly and writing/function acceptance, excluding all outer packaging; stored released pens already belong to Q. Normalization declaration: 1 kg; reference from cp_release unique newly first-released net Q; never create output again from dispatch or closing FG.

- Selected flow: Assembled writing and drawing implements `f20733c0-2158-4f6b-9092-370a185512ca`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `source_rule`
- Collection protocol: `cp_release`
- Sources: `bic-cristal-construction-2025`; `bic-integrated-manufacture-history`; `toptip-inj34-refill-assembly`

###### Cotton wiping cloth for ink-contact cleaning (`cloth_eoout`)

Every actual injection-moulding machine, ink-filling/tip-insertion line, tool, extraction/handling unit and reusable cloth keeps a complete actual configured fleet: new/used receipts, external returns received/sent, real retirement/whole waste, installed/opening/closing holdings and disjoint repair/fluid changes. BIC industrial history and TopTip equipment show actual operations, not the same contemporary plant, installed machine or shared SKU. A whole line/provider already including a machine and a separate purchase of that machine cannot both be added. Measure actual complete configuration mass M if count/mass conversion is needed; Item(s) is not kg and no machine mass or lifetime is supplied. Actual service h must match a complete real provider history and observed original-cohort use, unused/unassigned capacity and inherited burdens; physical fleet kg is not scaled by a service share. Separately supplied oil/filter/belt and whole contaminated removed items need their own atomic interfaces when actually present; contained parts remain nested in a whole asset. Receipt/return/shipment/retirement cards disclose physical V only; they are not a second capital purchase when the actual compatible service history already owns the same upstream manufacture. Actual provider-service scope and separately metered operation/repair must be nonoverlapping. A cotton cloth has the same full gross receipt/return/whole-waste and opening/closing fleet record; actual laundering or replacement must carry all disjoint real provider and utility burdens. No cloth lifetime or laundering load is assumed. This card is only actual gross external cloth eoout; retain whole wet cloth and actual retained matter, original use history and provider scope, never a new reference or duplicate new purchase.

- Selected flow: Cotton wiping cloth for ink-contact cleaning
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: N_r / D_r
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cloth`
- Sources:


##### Waste flows

###### Separately collected barrel moulding scrap (`ps_scrap`)

One actual contaminated film, carton, cloth, machine, filter, rejected pen part or liquid consignment has one whole receiver event Qt containing substrate/article, retained ink/cleaner/polymer matter and water once. Dry tare and measured originW/components are nonadditive nested analyses, not extra exported wastes unless physically separated before the boundary. Match its actual receiver/treatment/provider and extensive unit. Physical Qt and Qt/Q disclosure are not automatically the service demand: use only evidenced compatible nonoverlapping service A with the original cohort Qc/Q0, keeping physical transfer full. Unknown attribution remains unknown. Arithmetic illustration only: a shared10kg consignment is never shrunk to2.5kg by25% attribution and never charged as10kg again to every cohort. Different dry/wet or provider units require the actual full-composition/state bridge, not a hidden conversion or pure-component proxy.

Only the actual separate GPPS scrap outlet after internal reuse. Keep whole dry/wet state, contamination, receiver and independent origin ledger. If this material joins a mixed outlet, record the mixture once instead and retain origin as a nonadditive subaccount; do not force a second waste dispatch. Record the gross physical crossing V_r in its native unit and its lot/event, independently of attributable burden A_r. Retain the entire actual supplied article or formulation once, with stock and inherited-exchange vectors. This is not an allocation-scaled material quantity. Normalization declaration: Full gross physical boundary V_r is undivided N_r; use the single N_r / D_r result from report_once, without shrinking by burden, stock difference or share and without division again in this card.

- Selected flow: Collected polystyrene sprues and rejected barrel mouldings
- Flow property / unit: Mass / kg
- Amount rule: N_r / D_r
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlets`
- Sources:

###### Collected ink-contact cleaning liquid (`ink_liquid_waste`)

One actual contaminated film, carton, cloth, machine, filter, rejected pen part or liquid consignment has one whole receiver event Qt containing substrate/article, retained ink/cleaner/polymer matter and water once. Dry tare and measured originW/components are nonadditive nested analyses, not extra exported wastes unless physically separated before the boundary. Match its actual receiver/treatment/provider and extensive unit. Physical Qt and Qt/Q disclosure are not automatically the service demand: use only evidenced compatible nonoverlapping service A with the original cohort Qc/Q0, keeping physical transfer full. Unknown attribution remains unknown. Arithmetic illustration only: a shared10kg consignment is never shrunk to2.5kg by25% attribution and never charged as10kg again to every cohort. Different dry/wet or provider units require the actual full-composition/state bridge, not a hidden conversion or pure-component proxy.

A real collected liquid mixture from dosing/contact cleanup, not an elementary release or pure solvent. Weigh the whole wet outlet once; retain actual cleaner, ink and water composition as nonadditive species/origin evidence. Separate its actual destination from sewer discharge and from dry wipe disposal. Record the gross physical crossing V_r in its native unit and its lot/event, independently of attributable burden A_r. Retain the entire actual supplied article or formulation once, with stock and inherited-exchange vectors. This is not an allocation-scaled material quantity. Normalization declaration: Full gross physical boundary V_r is undivided N_r; use the single N_r / D_r result from report_once, without shrinking by burden, stock difference or share and without division again in this card.

- Selected flow: Collected ballpoint-ink cleaning liquid waste
- Flow property / unit: Mass / kg
- Amount rule: N_r / D_r
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlets`
- Sources:

###### Segregated used ink wipe (`ink_wipe_waste`)

One actual contaminated film, carton, cloth, machine, filter, rejected pen part or liquid consignment has one whole receiver event Qt containing substrate/article, retained ink/cleaner/polymer matter and water once. Dry tare and measured originW/components are nonadditive nested analyses, not extra exported wastes unless physically separated before the boundary. Match its actual receiver/treatment/provider and extensive unit. Physical Qt and Qt/Q disclosure are not automatically the service demand: use only evidenced compatible nonoverlapping service A with the original cohort Qc/Q0, keeping physical transfer full. Unknown attribution remains unknown. Arithmetic illustration only: a shared10kg consignment is never shrunk to2.5kg by25% attribution and never charged as10kg again to every cohort. Different dry/wet or provider units require the actual full-composition/state bridge, not a hidden conversion or pure-component proxy.

Only an actual segregated contaminated cloth stream with its retained cleaner/ink and moisture. The corresponding real purchased clean cloth must be separately inventoried before use; it cannot appear from nothing. If disposed in the assembly mixed bin, retain the origin subaccount without adding this outlet again. Record the gross physical crossing V_r in its native unit and its lot/event, independently of attributable burden A_r. Retain the entire actual supplied article or formulation once, with stock and inherited-exchange vectors. This is not an allocation-scaled material quantity. Normalization declaration: Full gross physical boundary V_r is undivided N_r; use the single N_r / D_r result from report_once, without shrinking by burden, stock difference or share and without division again in this card.

- Selected flow: Ink-contaminated wiping cloth waste
- Flow property / unit: Mass / kg
- Amount rule: N_r / D_r
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlets`
- Sources:

###### Segregated used writing-test paper (`test_paper_waste`)

One actual contaminated film, carton, cloth, machine, filter, rejected pen part or liquid consignment has one whole receiver event Qt containing substrate/article, retained ink/cleaner/polymer matter and water once. Dry tare and measured originW/components are nonadditive nested analyses, not extra exported wastes unless physically separated before the boundary. Match its actual receiver/treatment/provider and extensive unit. Physical Qt and Qt/Q disclosure are not automatically the service demand: use only evidenced compatible nonoverlapping service A with the original cohort Qc/Q0, keeping physical transfer full. Unknown attribution remains unknown. Arithmetic illustration only: a shared10kg consignment is never shrunk to2.5kg by25% attribution and never charged as10kg again to every cohort. Different dry/wet or provider units require the actual full-composition/state bridge, not a hidden conversion or pure-component proxy.

Measure paper plus retained test ink as one real waste outlet when segregated. Test consumption and rejected samples remain in the cohort even if the test did not authorize release. A mixed-bin disposal instead uses the actual mixed outlet once. Record the gross physical crossing V_r in its native unit and its lot/event, independently of attributable burden A_r. Retain the entire actual supplied article or formulation once, with stock and inherited-exchange vectors. This is not an allocation-scaled material quantity. Normalization declaration: Full gross physical boundary V_r is undivided N_r; use the single N_r / D_r result from report_once, without shrinking by burden, stock difference or share and without division again in this card.

- Selected flow: Used writing-test paper containing transferred ink
- Flow property / unit: Mass / kg
- Amount rule: N_r / D_r
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_quality`
- Sources:

###### Conditional actual aqueous effluent (`wastewater`)

One actual contaminated film, carton, cloth, machine, filter, rejected pen part or liquid consignment has one whole receiver event Qt containing substrate/article, retained ink/cleaner/polymer matter and water once. Dry tare and measured originW/components are nonadditive nested analyses, not extra exported wastes unless physically separated before the boundary. Match its actual receiver/treatment/provider and extensive unit. Physical Qt and Qt/Q disclosure are not automatically the service demand: use only evidenced compatible nonoverlapping service A with the original cohort Qc/Q0, keeping physical transfer full. Unknown attribution remains unknown. Arithmetic illustration only: a shared10kg consignment is never shrunk to2.5kg by25% attribution and never charged as10kg again to every cohort. Different dry/wet or provider units require the actual full-composition/state bridge, not a hidden conversion or pure-component proxy.

A specific actual wet cleaning-effluent outlet with measured receiver and treatment boundary. Keep total wet wastewater and its nonadditive chemical analyses separately; COD, VOC and suspended solids do not identify a molecule. A native record typed Product flow cannot be used as a Waste flow. No sewer discharge or treatment is assumed when liquid is collected elsewhere. Record the gross physical crossing V_r in its native unit and its lot/event, independently of attributable burden A_r. Retain the entire actual supplied article or formulation once, with stock and inherited-exchange vectors. This is not an allocation-scaled material quantity. Normalization declaration: Full gross physical boundary V_r is undivided N_r; use the single N_r / D_r result from report_once, without shrinking by burden, stock difference or share and without division again in this card.

- Selected flow: Untreated aqueous pen-production cleaning effluent
- Flow property / unit: Mass / kg
- Amount rule: N_r / D_r
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlets`
- Sources:

###### Actual mixed final-assembly waste outlet (`assembly_mixed_waste`)

One actual contaminated film, carton, cloth, machine, filter, rejected pen part or liquid consignment has one whole receiver event Qt containing substrate/article, retained ink/cleaner/polymer matter and water once. Dry tare and measured originW/components are nonadditive nested analyses, not extra exported wastes unless physically separated before the boundary. Match its actual receiver/treatment/provider and extensive unit. Physical Qt and Qt/Q disclosure are not automatically the service demand: use only evidenced compatible nonoverlapping service A with the original cohort Qc/Q0, keeping physical transfer full. Unknown attribution remains unknown. Arithmetic illustration only: a shared10kg consignment is never shrunk to2.5kg by25% attribution and never charged as10kg again to every cohort. Different dry/wet or provider units require the actual full-composition/state bridge, not a hidden conversion or pure-component proxy.

Use only one real mixed outlet from final assembly and factory testing, matching the native Waste type, GLO at-plant production mix and explicit final-assembly/testing route. The native states no quantity and supplies no provider/treatment or composition. It cannot stand for moulding-only scrap, a landfill service or an elementary emission. Measure full wet W; independently measure originW for rejected pen components, retained ink and test paper when these actually enter this same bin. OriginW is nonadditive: W with one actual provider OR genuinely segregated outlets, never W plus those same constituent waste dispatches. Missing origin values remain unknown, not fitted to W. Record the gross physical crossing V_r in its native unit and its lot/event, independently of attributable burden A_r. Retain the entire actual supplied article or formulation once, with stock and inherited-exchange vectors. This is not an allocation-scaled material quantity. Normalization declaration: Full gross physical boundary V_r is undivided N_r; use the single N_r / D_r result from report_once, without shrinking by burden, stock difference or share and without division again in this card.

- Selected flow: Manufacturing waste, mixed `8a42279e-b14c-408f-98de-e52e0ea3ef3a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: N_r / D_r
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlets`
- Sources:

##### Elementary flows

###### Actual water vapour to air (`water_air`)

The supplied GPPS is physically melted and moulded; this route does not prescribe polymer synthesis, an on-site tip metallurgy unit or ink formulation. Any actual chemical change nevertheless requires independently established formation G_i and consumption C_i for its species; total wet mass and elements do not create a net chemical mass source. No resin monomer content, total VOC, COD, odour or balance residual identifies a released molecule. Use the complete EPA320 heated extractive FTIR programme only for actual identified IR-active vapor species with compatible reference spectra, actual interferants, background/temperature/pressure basis, representative transport, analyte-spike recovery and uncertainty checks. It does not measure homonuclear N2/O2 or monatomic Ar, particulate, liquid/mist or totalVOC chemistry. Actual collected condensate or cleaning liquid is one whole physical receiver transfer, separate from any actual final released species/phase. The actual full50-page dated Method320 PDF includes its FTIR Protocol and appendices; no referenced-only/missing-Protocol claim is made. Its PDF16 Eq3/4 use a tracer mixture fraction but the same-page DF>=10 legend is inconsistent: retain source bytes and use common corrected mole-basis phi=(tracer_spiked-tracer_native)/(tracer_direct-tracer_native), denominator nonzero, actual representative matched no-unaccounted-loss mixing, and expected analyte=phi*analyte_direct+(1-phi)*analyte_native. Phi is distinct from the reciprocal dilution ratio; this physical identity is no numerical setting or acceptance tolerance. Actual duct flow needs source-compatible complete geometry/traverse and calibrated velocity/state/density procedures; Methods1–3 originals are retained with their non-cyclonic/size/location, restricted gas-matrix/interference and argon-omission limits. Their unabsorbed N2/CO remainder is not pure N2 or measured Ar. A duct result is not automatically a whole fugitive-source inventory. The retained Method18 excludes compounds that can polymerize before analysis, so its title is not proof of styrene sample stability or a substitute for a demonstrated applicable programme. Neither this source set nor a future SOP establishes every unidentified ink/cleaner molecule, hot wet mist, sorption/phase transfer or reactive matrix. A genuinely necessary unestablished specific programme remains hold; ordinary actual lot/site calibration and recovery within an established applicable programme remain study qualification, not proof no method exists. No actual release or successful QA is presumed. These dated EPA copies and this technical synthesis are not a claim of regulatory conformity, scientific acceptance or complete actual-factory inventory.

Only independently evidenced net water vapour crossing to the actual air compartment. Record water in incoming air, actual cooling/cleaning evaporation, retained formulation water, free water, reaction water if chemistry is demonstrated, and separate liquid discharge. This physical-forming/supplied-ink route prescribes no chemical water reaction. Integrated gas volume receives no second time multiplier; a rate must be integrated. No water or species quantity is a residual fitted simultaneously with another unknown. Record the gross physical crossing V_r in its native unit and its lot/event, independently of attributable burden A_r. Retain the entire actual supplied article or formulation once, with stock and inherited-exchange vectors. This is not an allocation-scaled material quantity. Normalization declaration: Full gross physical boundary V_r is undivided N_r; use the single N_r / D_r result from report_once, without shrinking by burden, stock difference or share and without division again in this card.

- Selected flow: Water vapour emitted to air
- Flow property / unit: Mass / kg
- Amount rule: N_r / D_r
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `epa-method320`

###### Conditional measured styrene to air (`styrene_air`)

The supplied GPPS is physically melted and moulded; this route does not prescribe polymer synthesis, an on-site tip metallurgy unit or ink formulation. Any actual chemical change nevertheless requires independently established formation G_i and consumption C_i for its species; total wet mass and elements do not create a net chemical mass source. No resin monomer content, total VOC, COD, odour or balance residual identifies a released molecule. Use the complete EPA320 heated extractive FTIR programme only for actual identified IR-active vapor species with compatible reference spectra, actual interferants, background/temperature/pressure basis, representative transport, analyte-spike recovery and uncertainty checks. It does not measure homonuclear N2/O2 or monatomic Ar, particulate, liquid/mist or totalVOC chemistry. Actual collected condensate or cleaning liquid is one whole physical receiver transfer, separate from any actual final released species/phase. The actual full50-page dated Method320 PDF includes its FTIR Protocol and appendices; no referenced-only/missing-Protocol claim is made. Its PDF16 Eq3/4 use a tracer mixture fraction but the same-page DF>=10 legend is inconsistent: retain source bytes and use common corrected mole-basis phi=(tracer_spiked-tracer_native)/(tracer_direct-tracer_native), denominator nonzero, actual representative matched no-unaccounted-loss mixing, and expected analyte=phi*analyte_direct+(1-phi)*analyte_native. Phi is distinct from the reciprocal dilution ratio; this physical identity is no numerical setting or acceptance tolerance. Actual duct flow needs source-compatible complete geometry/traverse and calibrated velocity/state/density procedures; Methods1–3 originals are retained with their non-cyclonic/size/location, restricted gas-matrix/interference and argon-omission limits. Their unabsorbed N2/CO remainder is not pure N2 or measured Ar. A duct result is not automatically a whole fugitive-source inventory. The retained Method18 excludes compounds that can polymerize before analysis, so its title is not proof of styrene sample stability or a substitute for a demonstrated applicable programme. Neither this source set nor a future SOP establishes every unidentified ink/cleaner molecule, hot wet mist, sorption/phase transfer or reactive matrix. A genuinely necessary unestablished specific programme remains hold; ordinary actual lot/site calibration and recovery within an established applicable programme remain study qualification, not proof no method exists. No actual release or successful QA is presumed. These dated EPA copies and this technical synthesis are not a claim of regulatory conformity, scientific acceptance or complete actual-factory inventory.

Only actual independently identified styrene (CAS 100-42-5) emitted from the relevant moulding/handling source and air compartment. Native polymer mass, styrene monomer feed in an upstream GPPS dataset, odour, total VOC, PM or a mass-balance residual cannot establish this species or amount. Measure stack and fugitive outlets after actual control separately and reconcile inlet/outlet/captured/retained material; other actual molecules require their own cards before completeness can be claimed. Record the gross physical crossing V_r in its native unit and its lot/event, independently of attributable burden A_r. Retain the entire actual supplied article or formulation once, with stock and inherited-exchange vectors. This is not an allocation-scaled material quantity. Normalization declaration: Full gross physical boundary V_r is undivided N_r; use the single N_r / D_r result from report_once, without shrinking by burden, stock difference or share and without division again in this card.

- Selected flow: Styrene emitted to air
- Flow property / unit: Mass / kg
- Amount rule: N_r / D_r
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `epa-method320`

### Process: Actual services and physical movements of released product (`post_release`)

#### Inputs

##### Product flows

###### Actually performed post-release services electricity (`power_post`)

Meter actual electricity for the selected operations and retain startup, idle, failure, cleanup, testing, rework, cooling and internal compressed-air generation when present. This native Product is CN grid-average consumption mix to user below 1 kV with reference Net calorific value; its exact unit-group chain is energy/MJ, not Units of mass. Reuse only for a matching China low-voltage supply; other countries, voltages or dedicated technologies need compatible identity/provider evidence. No BIC factory is claimed to use this CN supply. Convert raw kWh to MJ once and attribute service burdens by the documented hierarchy; do not also buy an internally generated utility. Actual observed services for previously released stock retain their original Qc and inherited vectors; unknown future storage or dispatch is not zero and is not invented. Normalization declaration: After raw unit conversion and real attribution, undivided A_r is N_r; use the single N_r / D_r result from report_once, with no division again in this card.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: N_r / D_r
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities_post`
- Sources:

###### New whole shipping carton (`carton_purchase`)

One actual whole corrugated transport carton, including its already manufactured adhesive/printing when supplied, not board alone or a bag. Fixed-fibre-mix native boxes do not match an unspecified supplier carton. P is the actual new external acquisition; exclude contained components already procured within the whole supplied article. For each actual whole wet corrugated-carton or PE-film pool use O_empty+O_attachedWIP+O_attachedFG+O_reusable+P+I_sup+ERin+J_in+H2O_in-X_in=C_empty+C_attachedWIP+C_attachedFG+C_reusable+S_gross+EOout+W_whole+J_out+H2O_out-X_out. I_sup is actual disjoint supplier-included packaging, not another purchase; internal reuse R_internal cancels between matched positions and is not I_sup. J is additional real non-water material and H2O is additional actual water transfer only to the extent not already included in another whole wet leg. O/C and every whole leg retain all contained matter: actual new material/water retained in C never erases its true influx. X subtracts only independently proved overlap with OTHER same-side flow terms, never C, real increments, opposite directions or card existence. Trace actual J/water sources/destinations with specific physical records and internal pairs; do not invent a generic provider, extra Q, separate constituent waste or balancing flow. Gross shipments, external returns received/sent and true whole waste stay physically full regardless of environmental use shares. These two specific article pools are conditional on actual configuration; these are actual conditional packaging choices, not a universal material, tare, repair, water uptake or mass. Retain service and inherited-exchange vectors; never multiply physical packaging by an economic/service allocation fraction. Record the gross physical crossing V_r in its native unit and its lot/event, independently of attributable burden A_r. Retain the entire actual supplied article or formulation once, with stock and inherited-exchange vectors. This is not an allocation-scaled material quantity. Normalization declaration: Full gross physical boundary V_r is undivided N_r; use the single N_r / D_r result from report_once, without shrinking by burden, stock difference or share and without division again in this card.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass / kg
- Amount rule: N_r / D_r
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_carton`
- Sources:

###### External carton return received (`carton_return_in`)

One actual whole corrugated transport carton, including its already manufactured adhesive/printing when supplied, not board alone or a bag. Fixed-fibre-mix native boxes do not match an unspecified supplier carton. ER is a separate gross receipt; it does not become a second purchase or a new pen Q. For each actual whole wet corrugated-carton or PE-film pool use O_empty+O_attachedWIP+O_attachedFG+O_reusable+P+I_sup+ERin+J_in+H2O_in-X_in=C_empty+C_attachedWIP+C_attachedFG+C_reusable+S_gross+EOout+W_whole+J_out+H2O_out-X_out. I_sup is actual disjoint supplier-included packaging, not another purchase; internal reuse R_internal cancels between matched positions and is not I_sup. J is additional real non-water material and H2O is additional actual water transfer only to the extent not already included in another whole wet leg. O/C and every whole leg retain all contained matter: actual new material/water retained in C never erases its true influx. X subtracts only independently proved overlap with OTHER same-side flow terms, never C, real increments, opposite directions or card existence. Trace actual J/water sources/destinations with specific physical records and internal pairs; do not invent a generic provider, extra Q, separate constituent waste or balancing flow. Gross shipments, external returns received/sent and true whole waste stay physically full regardless of environmental use shares. These two specific article pools are conditional on actual configuration; these are actual conditional packaging choices, not a universal material, tare, repair, water uptake or mass. Retain service and inherited-exchange vectors; never multiply physical packaging by an economic/service allocation fraction. Record the gross physical crossing V_r in its native unit and its lot/event, independently of attributable burden A_r. Retain the entire actual supplied article or formulation once, with stock and inherited-exchange vectors. This is not an allocation-scaled material quantity. Normalization declaration: Full gross physical boundary V_r is undivided N_r; use the single N_r / D_r result from report_once, without shrinking by burden, stock difference or share and without division again in this card.

- Selected flow: Returned reusable corrugated shipping carton
- Flow property / unit: Mass / kg
- Amount rule: N_r / D_r
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_carton`
- Sources:

###### New polyethylene transport wrapping (`film_purchase`)

Use native Product polyethylene film, CAS9002-88-4, production mix at plant and Mass only for actual PE film; its luggage classification is disclosed taxonomy debt, and its PET comparison does not identify PET as PE. No grade, thickness, recycled content, geography or density is given. P is the actual new external acquisition; exclude contained components already procured within the whole supplied article. For each actual whole wet corrugated-carton or PE-film pool use O_empty+O_attachedWIP+O_attachedFG+O_reusable+P+I_sup+ERin+J_in+H2O_in-X_in=C_empty+C_attachedWIP+C_attachedFG+C_reusable+S_gross+EOout+W_whole+J_out+H2O_out-X_out. I_sup is actual disjoint supplier-included packaging, not another purchase; internal reuse R_internal cancels between matched positions and is not I_sup. J is additional real non-water material and H2O is additional actual water transfer only to the extent not already included in another whole wet leg. O/C and every whole leg retain all contained matter: actual new material/water retained in C never erases its true influx. X subtracts only independently proved overlap with OTHER same-side flow terms, never C, real increments, opposite directions or card existence. Trace actual J/water sources/destinations with specific physical records and internal pairs; do not invent a generic provider, extra Q, separate constituent waste or balancing flow. Gross shipments, external returns received/sent and true whole waste stay physically full regardless of environmental use shares. These two specific article pools are conditional on actual configuration; these are actual conditional packaging choices, not a universal material, tare, repair, water uptake or mass. Retain service and inherited-exchange vectors; never multiply physical packaging by an economic/service allocation fraction. Record the gross physical crossing V_r in its native unit and its lot/event, independently of attributable burden A_r. Retain the entire actual supplied article or formulation once, with stock and inherited-exchange vectors. This is not an allocation-scaled material quantity. Normalization declaration: Full gross physical boundary V_r is undivided N_r; use the single N_r / D_r result from report_once, without shrinking by burden, stock difference or share and without division again in this card.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: N_r / D_r
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_film`
- Sources:

###### External film return received (`film_return_in`)

One real external return of previously supplied film, not a new resin or film manufacture purchase. ER is a separate gross receipt; it does not become a second purchase or a new pen Q. For each actual whole wet corrugated-carton or PE-film pool use O_empty+O_attachedWIP+O_attachedFG+O_reusable+P+I_sup+ERin+J_in+H2O_in-X_in=C_empty+C_attachedWIP+C_attachedFG+C_reusable+S_gross+EOout+W_whole+J_out+H2O_out-X_out. I_sup is actual disjoint supplier-included packaging, not another purchase; internal reuse R_internal cancels between matched positions and is not I_sup. J is additional real non-water material and H2O is additional actual water transfer only to the extent not already included in another whole wet leg. O/C and every whole leg retain all contained matter: actual new material/water retained in C never erases its true influx. X subtracts only independently proved overlap with OTHER same-side flow terms, never C, real increments, opposite directions or card existence. Trace actual J/water sources/destinations with specific physical records and internal pairs; do not invent a generic provider, extra Q, separate constituent waste or balancing flow. Gross shipments, external returns received/sent and true whole waste stay physically full regardless of environmental use shares. These two specific article pools are conditional on actual configuration; these are actual conditional packaging choices, not a universal material, tare, repair, water uptake or mass. Retain service and inherited-exchange vectors; never multiply physical packaging by an economic/service allocation fraction. Record the gross physical crossing V_r in its native unit and its lot/event, independently of attributable burden A_r. Retain the entire actual supplied article or formulation once, with stock and inherited-exchange vectors. This is not an allocation-scaled material quantity. Normalization declaration: Full gross physical boundary V_r is undivided N_r; use the single N_r / D_r result from report_once, without shrinking by burden, stock difference or share and without division again in this card.

- Selected flow: Returned reusable polyethylene wrapping film
- Flow property / unit: Mass / kg
- Amount rule: N_r / D_r
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_film`
- Sources:

###### Previously released pen physically returned (`released_return_in`)

Actual whole previously released capped pens physically received back across the external gate. Preserve complete article, unpacked Mass and all core identity limits: generic assembled family, no native composition/SKU/weight/lifetime/geography, and preserved source classification debt. Link each gross return to its original release/delivery event and original Qc and burden vectors. Acceptance, refusal, testing, repair authorization or reinspection does not erase a real movement or create new Q. Retain any actual rework as incremental service to the original cohort; natural moisture change is not an invented repair. Record the gross physical crossing V_r in its native unit and its lot/event, independently of attributable burden A_r. Retain the entire actual supplied article or formulation once, with stock and inherited-exchange vectors. This is not an allocation-scaled material quantity. Normalization declaration: Full gross physical boundary V_r is undivided N_r; use the single N_r / D_r result from report_once, without shrinking by burden, stock difference or share and without division again in this card.

- Selected flow: Assembled writing and drawing implements `f20733c0-2158-4f6b-9092-370a185512ca`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: N_r / D_r
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: `bic-cristal-construction-2025`

###### Corrugated shipping carton (`carton_supplier_included`)

Only actual disjoint supplier-included packaging I_sup physically received with supplied components/formulations; this is not another purchase P or internal reuse R_internal. Whole identity/grade/tare/state restrictions remain those of the corresponding actual article, PE CAS9002-88-4 only for real PE film. No supplier-specific fibre mix, polymer layer, mass or density is inferred. For each actual whole wet corrugated-carton or PE-film pool use O_empty+O_attachedWIP+O_attachedFG+O_reusable+P+I_sup+ERin+J_in+H2O_in-X_in=C_empty+C_attachedWIP+C_attachedFG+C_reusable+S_gross+EOout+W_whole+J_out+H2O_out-X_out. I_sup is actual disjoint supplier-included packaging, not another purchase; internal reuse R_internal cancels between matched positions and is not I_sup. J is additional real non-water material and H2O is additional actual water transfer only to the extent not already included in another whole wet leg. O/C and every whole leg retain all contained matter: actual new material/water retained in C never erases its true influx. X subtracts only independently proved overlap with OTHER same-side flow terms, never C, real increments, opposite directions or card existence. Trace actual J/water sources/destinations with specific physical records and internal pairs; do not invent a generic provider, extra Q, separate constituent waste or balancing flow. Gross shipments, external returns received/sent and true whole waste stay physically full regardless of environmental use shares. These two specific article pools are conditional on actual configuration; these are actual conditional packaging choices, not a universal material, tare, repair, water uptake or mass.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: N_r / D_r
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_carton`
- Sources:


###### Polyethylene film (`film_supplier_included`)

Only actual disjoint supplier-included packaging I_sup physically received with supplied components/formulations; this is not another purchase P or internal reuse R_internal. Whole identity/grade/tare/state restrictions remain those of the corresponding actual article, PE CAS9002-88-4 only for real PE film. No supplier-specific fibre mix, polymer layer, mass or density is inferred. For each actual whole wet corrugated-carton or PE-film pool use O_empty+O_attachedWIP+O_attachedFG+O_reusable+P+I_sup+ERin+J_in+H2O_in-X_in=C_empty+C_attachedWIP+C_attachedFG+C_reusable+S_gross+EOout+W_whole+J_out+H2O_out-X_out. I_sup is actual disjoint supplier-included packaging, not another purchase; internal reuse R_internal cancels between matched positions and is not I_sup. J is additional real non-water material and H2O is additional actual water transfer only to the extent not already included in another whole wet leg. O/C and every whole leg retain all contained matter: actual new material/water retained in C never erases its true influx. X subtracts only independently proved overlap with OTHER same-side flow terms, never C, real increments, opposite directions or card existence. Trace actual J/water sources/destinations with specific physical records and internal pairs; do not invent a generic provider, extra Q, separate constituent waste or balancing flow. Gross shipments, external returns received/sent and true whole waste stay physically full regardless of environmental use shares. These two specific article pools are conditional on actual configuration; these are actual conditional packaging choices, not a universal material, tare, repair, water uptake or mass.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: N_r / D_r
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_film`
- Sources:


##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Gross whole-pen physical dispatch (`gross_pen_out`)

Every actual gross outward movement of the same complete capped pen in its native unpacked Mass, with inner ink and integral components once and outer packaging excluded. This native assembled-writing family has no supplier, recipe, CAS, grade, colour, density, unit weight, geography or life claim; source classification debt remains disclosed. Dispatch may include stored first releases or linked returned stock; it is not another manufacture output and cannot increase Q. Use actual V for its original cohort and positive original Qc or current Q. Do not replace gross pen mass by burden A, net delivery, stock difference or a shared-service/economic share. Unknown future dispatch is not fabricated. Record the gross physical crossing V_r in its native unit and its lot/event, independently of attributable burden A_r. Retain the entire actual supplied article or formulation once, with stock and inherited-exchange vectors. This is not an allocation-scaled material quantity. Normalization declaration: Full gross physical boundary V_r is undivided N_r; use the single N_r / D_r result from report_once, without shrinking by burden, stock difference or share and without division again in this card.

- Selected flow: Assembled writing and drawing implements `f20733c0-2158-4f6b-9092-370a185512ca`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: N_r / D_r
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: `bic-cristal-construction-2025`

###### Gross attached carton dispatch (`carton_gross_out`)

S is full physical packaging leaving attached to all gross shipments, including returned/re-dispatched goods. It is not net pen Q, a stock difference or an allocated service fraction. Reconcile this exact packaging component across empty, attached-WIP/FG and reusable stocks with P/I_sup/ERin/S_gross/EOout/W_whole/J/H2O/X ledgers and original-cohort service history. Record the gross physical crossing V_r in its native unit and its lot/event, independently of attributable burden A_r. Retain the entire actual supplied article or formulation once, with stock and inherited-exchange vectors. This is not an allocation-scaled material quantity. Normalization declaration: Full gross physical boundary V_r is undivided N_r; use the single N_r / D_r result from report_once, without shrinking by burden, stock difference or share and without division again in this card.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass / kg
- Amount rule: N_r / D_r
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_carton`
- Sources:

###### External carton return sent (`carton_return_out`)

EO is actual separate physical return across the supplier/customer interface. Internal reuse cancels; no new production, avoided-production credit or automatic coproduct is created. Reconcile this exact packaging component across empty, attached-WIP/FG and reusable stocks with P/I_sup/ERin/S_gross/EOout/W_whole/J/H2O/X ledgers and original-cohort service history. Record the gross physical crossing V_r in its native unit and its lot/event, independently of attributable burden A_r. Retain the entire actual supplied article or formulation once, with stock and inherited-exchange vectors. This is not an allocation-scaled material quantity. Normalization declaration: Full gross physical boundary V_r is undivided N_r; use the single N_r / D_r result from report_once, without shrinking by burden, stock difference or share and without division again in this card.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass / kg
- Amount rule: N_r / D_r
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_carton`
- Sources:

###### Gross attached film dispatch (`film_gross_out`)

S is full physical packaging leaving attached to all gross shipments, including returned/re-dispatched goods. It is not net pen Q, a stock difference or an allocated service fraction. Reconcile this exact packaging component across empty, attached-WIP/FG and reusable stocks with P/I_sup/ERin/S_gross/EOout/W_whole/J/H2O/X ledgers and original-cohort service history. Record the gross physical crossing V_r in its native unit and its lot/event, independently of attributable burden A_r. Retain the entire actual supplied article or formulation once, with stock and inherited-exchange vectors. This is not an allocation-scaled material quantity. Normalization declaration: Full gross physical boundary V_r is undivided N_r; use the single N_r / D_r result from report_once, without shrinking by burden, stock difference or share and without division again in this card.

- Selected flow: Polyethylene transport wrapping film
- Flow property / unit: Mass / kg
- Amount rule: N_r / D_r
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_film`
- Sources:

###### External film return sent (`film_return_out`)

EO is actual separate physical return across the supplier/customer interface. Internal reuse cancels; no new production, avoided-production credit or automatic coproduct is created. Reconcile this exact packaging component across empty, attached-WIP/FG and reusable stocks with P/I_sup/ERin/S_gross/EOout/W_whole/J/H2O/X ledgers and original-cohort service history. Record the gross physical crossing V_r in its native unit and its lot/event, independently of attributable burden A_r. Retain the entire actual supplied article or formulation once, with stock and inherited-exchange vectors. This is not an allocation-scaled material quantity. Normalization declaration: Full gross physical boundary V_r is undivided N_r; use the single N_r / D_r result from report_once, without shrinking by burden, stock difference or share and without division again in this card.

- Selected flow: Polyethylene transport wrapping film
- Flow property / unit: Mass / kg
- Amount rule: N_r / D_r
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_film`
- Sources:

##### Waste flows

###### Actual segregated carton waste (`carton_waste`)

One actual contaminated film, carton, cloth, machine, filter, rejected pen part or liquid consignment has one whole receiver event Qt containing substrate/article, retained ink/cleaner/polymer matter and water once. Dry tare and measured originW/components are nonadditive nested analyses, not extra exported wastes unless physically separated before the boundary. Match its actual receiver/treatment/provider and extensive unit. Physical Qt and Qt/Q disclosure are not automatically the service demand: use only evidenced compatible nonoverlapping service A with the original cohort Qc/Q0, keeping physical transfer full. Unknown attribution remains unknown. Arithmetic illustration only: a shared10kg consignment is never shrunk to2.5kg by25% attribution and never charged as10kg again to every cohort. Different dry/wet or provider units require the actual full-composition/state bridge, not a hidden conversion or pure-component proxy.

W is the full actual segregated packaging waste, including attached moisture/contamination when present. Record one actual receiver and waste status, with separate composition subaccounts; no Product substitute or recycling credit. If packaging is physically in one mixed waste outlet, measure that mixture once and retain this component as a nonadditive origin account rather than a duplicate dispatch. No loss is silently zero. Record the gross physical crossing V_r in its native unit and its lot/event, independently of attributable burden A_r. Retain the entire actual supplied article or formulation once, with stock and inherited-exchange vectors. This is not an allocation-scaled material quantity. Normalization declaration: Full gross physical boundary V_r is undivided N_r; use the single N_r / D_r result from report_once, without shrinking by burden, stock difference or share and without division again in this card.

- Selected flow: Discarded corrugated transport carton
- Flow property / unit: Mass / kg
- Amount rule: N_r / D_r
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_carton`
- Sources:

###### Actual segregated film waste (`film_waste`)

One actual contaminated film, carton, cloth, machine, filter, rejected pen part or liquid consignment has one whole receiver event Qt containing substrate/article, retained ink/cleaner/polymer matter and water once. Dry tare and measured originW/components are nonadditive nested analyses, not extra exported wastes unless physically separated before the boundary. Match its actual receiver/treatment/provider and extensive unit. Physical Qt and Qt/Q disclosure are not automatically the service demand: use only evidenced compatible nonoverlapping service A with the original cohort Qc/Q0, keeping physical transfer full. Unknown attribution remains unknown. Arithmetic illustration only: a shared10kg consignment is never shrunk to2.5kg by25% attribution and never charged as10kg again to every cohort. Different dry/wet or provider units require the actual full-composition/state bridge, not a hidden conversion or pure-component proxy.

W is the full actual segregated packaging waste, including attached moisture/contamination when present. Record one actual receiver and waste status, with separate composition subaccounts; no Product substitute or recycling credit. If packaging is physically in one mixed waste outlet, measure that mixture once and retain this component as a nonadditive origin account rather than a duplicate dispatch. No loss is silently zero. Record the gross physical crossing V_r in its native unit and its lot/event, independently of attributable burden A_r. Retain the entire actual supplied article or formulation once, with stock and inherited-exchange vectors. This is not an allocation-scaled material quantity. Normalization declaration: Full gross physical boundary V_r is undivided N_r; use the single N_r / D_r result from report_once, without shrinking by burden, stock difference or share and without division again in this card.

- Selected flow: Discarded polyethylene transport wrapping film
- Flow property / unit: Mass / kg
- Amount rule: N_r / D_r
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_film`
- Sources:

##### Elementary flows

### Process: Actual factory machine fleets and service (`factory_assets`)

#### Inputs

##### Product flows

###### Pen-barrel injection-moulding machine (`asset_moulding_receipt`)

Every actual injection-moulding machine, ink-filling/tip-insertion line, tool, extraction/handling unit and reusable cloth keeps a complete actual configured fleet: new/used receipts, external returns received/sent, real retirement/whole waste, installed/opening/closing holdings and disjoint repair/fluid changes. BIC industrial history and TopTip equipment show actual operations, not the same contemporary plant, installed machine or shared SKU. A whole line/provider already including a machine and a separate purchase of that machine cannot both be added. Measure actual complete configuration mass M if count/mass conversion is needed; Item(s) is not kg and no machine mass or lifetime is supplied. Actual service h must match a complete real provider history and observed original-cohort use, unused/unassigned capacity and inherited burdens; physical fleet kg is not scaled by a service share. Separately supplied oil/filter/belt and whole contaminated removed items need their own atomic interfaces when actually present; contained parts remain nested in a whole asset. Receipt/return/shipment/retirement cards disclose physical V only; they are not a second capital purchase when the actual compatible service history already owns the same upstream manufacture. Actual provider-service scope and separately metered operation/repair must be nonoverlapping. A cotton cloth has the same full gross receipt/return/whole-waste and opening/closing fleet record; actual laundering or replacement must carry all disjoint real provider and utility burdens. No cloth lifetime or laundering load is assumed. Only this actual specific unit receipt. Physical receipts/returns/whole retirement disclose full V, not an extra capital purchase when the compatible service history includes manufacture. Service uses actual compatible h/A/original cohort, without repeated current electricity/repair already in a provider.

- Selected flow: Pen-barrel injection-moulding machine
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: N_r / D_r
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `bic-integrated-manufacture-history`; `ilcd-attributional-allocation-2010`

###### Pen-barrel injection-moulding machine (`asset_moulding_erin`)

Every actual injection-moulding machine, ink-filling/tip-insertion line, tool, extraction/handling unit and reusable cloth keeps a complete actual configured fleet: new/used receipts, external returns received/sent, real retirement/whole waste, installed/opening/closing holdings and disjoint repair/fluid changes. BIC industrial history and TopTip equipment show actual operations, not the same contemporary plant, installed machine or shared SKU. A whole line/provider already including a machine and a separate purchase of that machine cannot both be added. Measure actual complete configuration mass M if count/mass conversion is needed; Item(s) is not kg and no machine mass or lifetime is supplied. Actual service h must match a complete real provider history and observed original-cohort use, unused/unassigned capacity and inherited burdens; physical fleet kg is not scaled by a service share. Separately supplied oil/filter/belt and whole contaminated removed items need their own atomic interfaces when actually present; contained parts remain nested in a whole asset. Receipt/return/shipment/retirement cards disclose physical V only; they are not a second capital purchase when the actual compatible service history already owns the same upstream manufacture. Actual provider-service scope and separately metered operation/repair must be nonoverlapping. A cotton cloth has the same full gross receipt/return/whole-waste and opening/closing fleet record; actual laundering or replacement must carry all disjoint real provider and utility burdens. No cloth lifetime or laundering load is assumed. Only this actual specific unit erin. Physical receipts/returns/whole retirement disclose full V, not an extra capital purchase when the compatible service history includes manufacture. Service uses actual compatible h/A/original cohort, without repeated current electricity/repair already in a provider.

- Selected flow: Pen-barrel injection-moulding machine
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: N_r / D_r
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `bic-integrated-manufacture-history`; `ilcd-attributional-allocation-2010`

###### Pen-barrel injection-moulding machine service (`asset_moulding_service`)

Every actual injection-moulding machine, ink-filling/tip-insertion line, tool, extraction/handling unit and reusable cloth keeps a complete actual configured fleet: new/used receipts, external returns received/sent, real retirement/whole waste, installed/opening/closing holdings and disjoint repair/fluid changes. BIC industrial history and TopTip equipment show actual operations, not the same contemporary plant, installed machine or shared SKU. A whole line/provider already including a machine and a separate purchase of that machine cannot both be added. Measure actual complete configuration mass M if count/mass conversion is needed; Item(s) is not kg and no machine mass or lifetime is supplied. Actual service h must match a complete real provider history and observed original-cohort use, unused/unassigned capacity and inherited burdens; physical fleet kg is not scaled by a service share. Separately supplied oil/filter/belt and whole contaminated removed items need their own atomic interfaces when actually present; contained parts remain nested in a whole asset. Receipt/return/shipment/retirement cards disclose physical V only; they are not a second capital purchase when the actual compatible service history already owns the same upstream manufacture. Actual provider-service scope and separately metered operation/repair must be nonoverlapping. A cotton cloth has the same full gross receipt/return/whole-waste and opening/closing fleet record; actual laundering or replacement must carry all disjoint real provider and utility burdens. No cloth lifetime or laundering load is assumed. Only this actual specific unit service. Physical receipts/returns/whole retirement disclose full V, not an extra capital purchase when the compatible service history includes manufacture. Service uses actual compatible h/A/original cohort, without repeated current electricity/repair already in a provider.

- Selected flow: Pen-barrel injection-moulding machine service
- Flow property / unit: Time / h
- Amount rule: N_r / D_r
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `bic-integrated-manufacture-history`; `ilcd-attributional-allocation-2010`

###### Ink-filling and tip-insertion line (`asset_filling_receipt`)

Every actual injection-moulding machine, ink-filling/tip-insertion line, tool, extraction/handling unit and reusable cloth keeps a complete actual configured fleet: new/used receipts, external returns received/sent, real retirement/whole waste, installed/opening/closing holdings and disjoint repair/fluid changes. BIC industrial history and TopTip equipment show actual operations, not the same contemporary plant, installed machine or shared SKU. A whole line/provider already including a machine and a separate purchase of that machine cannot both be added. Measure actual complete configuration mass M if count/mass conversion is needed; Item(s) is not kg and no machine mass or lifetime is supplied. Actual service h must match a complete real provider history and observed original-cohort use, unused/unassigned capacity and inherited burdens; physical fleet kg is not scaled by a service share. Separately supplied oil/filter/belt and whole contaminated removed items need their own atomic interfaces when actually present; contained parts remain nested in a whole asset. Receipt/return/shipment/retirement cards disclose physical V only; they are not a second capital purchase when the actual compatible service history already owns the same upstream manufacture. Actual provider-service scope and separately metered operation/repair must be nonoverlapping. A cotton cloth has the same full gross receipt/return/whole-waste and opening/closing fleet record; actual laundering or replacement must carry all disjoint real provider and utility burdens. No cloth lifetime or laundering load is assumed. Only this actual specific unit receipt. Physical receipts/returns/whole retirement disclose full V, not an extra capital purchase when the compatible service history includes manufacture. Service uses actual compatible h/A/original cohort, without repeated current electricity/repair already in a provider.

- Selected flow: Ink-filling and tip-insertion line
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: N_r / D_r
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `toptip-inj34-refill-assembly`; `ilcd-attributional-allocation-2010`

###### Ink-filling and tip-insertion line (`asset_filling_erin`)

Every actual injection-moulding machine, ink-filling/tip-insertion line, tool, extraction/handling unit and reusable cloth keeps a complete actual configured fleet: new/used receipts, external returns received/sent, real retirement/whole waste, installed/opening/closing holdings and disjoint repair/fluid changes. BIC industrial history and TopTip equipment show actual operations, not the same contemporary plant, installed machine or shared SKU. A whole line/provider already including a machine and a separate purchase of that machine cannot both be added. Measure actual complete configuration mass M if count/mass conversion is needed; Item(s) is not kg and no machine mass or lifetime is supplied. Actual service h must match a complete real provider history and observed original-cohort use, unused/unassigned capacity and inherited burdens; physical fleet kg is not scaled by a service share. Separately supplied oil/filter/belt and whole contaminated removed items need their own atomic interfaces when actually present; contained parts remain nested in a whole asset. Receipt/return/shipment/retirement cards disclose physical V only; they are not a second capital purchase when the actual compatible service history already owns the same upstream manufacture. Actual provider-service scope and separately metered operation/repair must be nonoverlapping. A cotton cloth has the same full gross receipt/return/whole-waste and opening/closing fleet record; actual laundering or replacement must carry all disjoint real provider and utility burdens. No cloth lifetime or laundering load is assumed. Only this actual specific unit erin. Physical receipts/returns/whole retirement disclose full V, not an extra capital purchase when the compatible service history includes manufacture. Service uses actual compatible h/A/original cohort, without repeated current electricity/repair already in a provider.

- Selected flow: Ink-filling and tip-insertion line
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: N_r / D_r
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `toptip-inj34-refill-assembly`; `ilcd-attributional-allocation-2010`

###### Ink-filling and tip-insertion line service (`asset_filling_service`)

Every actual injection-moulding machine, ink-filling/tip-insertion line, tool, extraction/handling unit and reusable cloth keeps a complete actual configured fleet: new/used receipts, external returns received/sent, real retirement/whole waste, installed/opening/closing holdings and disjoint repair/fluid changes. BIC industrial history and TopTip equipment show actual operations, not the same contemporary plant, installed machine or shared SKU. A whole line/provider already including a machine and a separate purchase of that machine cannot both be added. Measure actual complete configuration mass M if count/mass conversion is needed; Item(s) is not kg and no machine mass or lifetime is supplied. Actual service h must match a complete real provider history and observed original-cohort use, unused/unassigned capacity and inherited burdens; physical fleet kg is not scaled by a service share. Separately supplied oil/filter/belt and whole contaminated removed items need their own atomic interfaces when actually present; contained parts remain nested in a whole asset. Receipt/return/shipment/retirement cards disclose physical V only; they are not a second capital purchase when the actual compatible service history already owns the same upstream manufacture. Actual provider-service scope and separately metered operation/repair must be nonoverlapping. A cotton cloth has the same full gross receipt/return/whole-waste and opening/closing fleet record; actual laundering or replacement must carry all disjoint real provider and utility burdens. No cloth lifetime or laundering load is assumed. Only this actual specific unit service. Physical receipts/returns/whole retirement disclose full V, not an extra capital purchase when the compatible service history includes manufacture. Service uses actual compatible h/A/original cohort, without repeated current electricity/repair already in a provider.

- Selected flow: Ink-filling and tip-insertion line service
- Flow property / unit: Time / h
- Amount rule: N_r / D_r
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `toptip-inj34-refill-assembly`; `ilcd-attributional-allocation-2010`

#### Outputs

##### Product flows

###### Pen-barrel injection-moulding machine (`asset_moulding_eoout`)

Every actual injection-moulding machine, ink-filling/tip-insertion line, tool, extraction/handling unit and reusable cloth keeps a complete actual configured fleet: new/used receipts, external returns received/sent, real retirement/whole waste, installed/opening/closing holdings and disjoint repair/fluid changes. BIC industrial history and TopTip equipment show actual operations, not the same contemporary plant, installed machine or shared SKU. A whole line/provider already including a machine and a separate purchase of that machine cannot both be added. Measure actual complete configuration mass M if count/mass conversion is needed; Item(s) is not kg and no machine mass or lifetime is supplied. Actual service h must match a complete real provider history and observed original-cohort use, unused/unassigned capacity and inherited burdens; physical fleet kg is not scaled by a service share. Separately supplied oil/filter/belt and whole contaminated removed items need their own atomic interfaces when actually present; contained parts remain nested in a whole asset. Receipt/return/shipment/retirement cards disclose physical V only; they are not a second capital purchase when the actual compatible service history already owns the same upstream manufacture. Actual provider-service scope and separately metered operation/repair must be nonoverlapping. A cotton cloth has the same full gross receipt/return/whole-waste and opening/closing fleet record; actual laundering or replacement must carry all disjoint real provider and utility burdens. No cloth lifetime or laundering load is assumed. Only this actual specific unit eoout. Physical receipts/returns/whole retirement disclose full V, not an extra capital purchase when the compatible service history includes manufacture. Service uses actual compatible h/A/original cohort, without repeated current electricity/repair already in a provider.

- Selected flow: Pen-barrel injection-moulding machine
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: N_r / D_r
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `bic-integrated-manufacture-history`; `ilcd-attributional-allocation-2010`

###### Ink-filling and tip-insertion line (`asset_filling_eoout`)

Every actual injection-moulding machine, ink-filling/tip-insertion line, tool, extraction/handling unit and reusable cloth keeps a complete actual configured fleet: new/used receipts, external returns received/sent, real retirement/whole waste, installed/opening/closing holdings and disjoint repair/fluid changes. BIC industrial history and TopTip equipment show actual operations, not the same contemporary plant, installed machine or shared SKU. A whole line/provider already including a machine and a separate purchase of that machine cannot both be added. Measure actual complete configuration mass M if count/mass conversion is needed; Item(s) is not kg and no machine mass or lifetime is supplied. Actual service h must match a complete real provider history and observed original-cohort use, unused/unassigned capacity and inherited burdens; physical fleet kg is not scaled by a service share. Separately supplied oil/filter/belt and whole contaminated removed items need their own atomic interfaces when actually present; contained parts remain nested in a whole asset. Receipt/return/shipment/retirement cards disclose physical V only; they are not a second capital purchase when the actual compatible service history already owns the same upstream manufacture. Actual provider-service scope and separately metered operation/repair must be nonoverlapping. A cotton cloth has the same full gross receipt/return/whole-waste and opening/closing fleet record; actual laundering or replacement must carry all disjoint real provider and utility burdens. No cloth lifetime or laundering load is assumed. Only this actual specific unit eoout. Physical receipts/returns/whole retirement disclose full V, not an extra capital purchase when the compatible service history includes manufacture. Service uses actual compatible h/A/original cohort, without repeated current electricity/repair already in a provider.

- Selected flow: Ink-filling and tip-insertion line
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: N_r / D_r
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `toptip-inj34-refill-assembly`; `ilcd-attributional-allocation-2010`

##### Waste flows

###### Retired whole pen-barrel injection-moulding machine (`asset_moulding_w`)

Every actual injection-moulding machine, ink-filling/tip-insertion line, tool, extraction/handling unit and reusable cloth keeps a complete actual configured fleet: new/used receipts, external returns received/sent, real retirement/whole waste, installed/opening/closing holdings and disjoint repair/fluid changes. BIC industrial history and TopTip equipment show actual operations, not the same contemporary plant, installed machine or shared SKU. A whole line/provider already including a machine and a separate purchase of that machine cannot both be added. Measure actual complete configuration mass M if count/mass conversion is needed; Item(s) is not kg and no machine mass or lifetime is supplied. Actual service h must match a complete real provider history and observed original-cohort use, unused/unassigned capacity and inherited burdens; physical fleet kg is not scaled by a service share. Separately supplied oil/filter/belt and whole contaminated removed items need their own atomic interfaces when actually present; contained parts remain nested in a whole asset. Receipt/return/shipment/retirement cards disclose physical V only; they are not a second capital purchase when the actual compatible service history already owns the same upstream manufacture. Actual provider-service scope and separately metered operation/repair must be nonoverlapping. A cotton cloth has the same full gross receipt/return/whole-waste and opening/closing fleet record; actual laundering or replacement must carry all disjoint real provider and utility burdens. No cloth lifetime or laundering load is assumed. Only this actual specific unit w. Physical receipts/returns/whole retirement disclose full V, not an extra capital purchase when the compatible service history includes manufacture. Service uses actual compatible h/A/original cohort, without repeated current electricity/repair already in a provider.

- Selected flow: Retired whole pen-barrel injection-moulding machine
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: N_r / D_r
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `bic-integrated-manufacture-history`; `ilcd-attributional-allocation-2010`

###### Retired whole ink-filling and tip-insertion line (`asset_filling_w`)

Every actual injection-moulding machine, ink-filling/tip-insertion line, tool, extraction/handling unit and reusable cloth keeps a complete actual configured fleet: new/used receipts, external returns received/sent, real retirement/whole waste, installed/opening/closing holdings and disjoint repair/fluid changes. BIC industrial history and TopTip equipment show actual operations, not the same contemporary plant, installed machine or shared SKU. A whole line/provider already including a machine and a separate purchase of that machine cannot both be added. Measure actual complete configuration mass M if count/mass conversion is needed; Item(s) is not kg and no machine mass or lifetime is supplied. Actual service h must match a complete real provider history and observed original-cohort use, unused/unassigned capacity and inherited burdens; physical fleet kg is not scaled by a service share. Separately supplied oil/filter/belt and whole contaminated removed items need their own atomic interfaces when actually present; contained parts remain nested in a whole asset. Receipt/return/shipment/retirement cards disclose physical V only; they are not a second capital purchase when the actual compatible service history already owns the same upstream manufacture. Actual provider-service scope and separately metered operation/repair must be nonoverlapping. A cotton cloth has the same full gross receipt/return/whole-waste and opening/closing fleet record; actual laundering or replacement must carry all disjoint real provider and utility burdens. No cloth lifetime or laundering load is assumed. Only this actual specific unit w. Physical receipts/returns/whole retirement disclose full V, not an extra capital purchase when the compatible service history includes manufacture. Service uses actual compatible h/A/original cohort, without repeated current electricity/repair already in a provider.

- Selected flow: Retired whole ink-filling and tip-insertion line
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: N_r / D_r
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `toptip-inj34-refill-assembly`; `ilcd-attributional-allocation-2010`


## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_scope | all inventory rows | Use attributional modelling only where its study decision context justifies allocation. First assign exclusive operations and flows, then attempt real or virtual subdivision. For the remaining shared exchange, establish its own determining physical causality and measured driver, respecting intensity and serial/parallel service differences; total pen mass is not a universal causal key. | ilcd-attributional-allocation-2010 |
| allocation_residual | all inventory rows | Only genuinely remaining inventory after subdivision and exchange-specific physical causality may use economic allocation. Use concurrent actual market values at the same common process gate and supplied state/quality and amount; remove downstream packaging, transport and processing differences. Document derivation, sensitivity and remaining uncertainty. No arbitrary physical/economic choice, fixed ratio, assumed coproduct value, system expansion or automatic avoided-production credit is provided. The handbook multifunctional-device QFD example is not a ballpoint-pen allocation factor. | ilcd-attributional-allocation-2010 |
| allocation_vectors | make_pen; post_release | Maintain a separate inherited vector for every exchange in raw, WIP and released FG stocks, returned articles and reusable packaging. Attribute current actual manufacture and failure loads plus the traced opening carry and less the correctly carried closing WIP to the release cohort without rewriting physical quantities. Already released closing FG does not remove manufactured Q or its production burden. Actually performed storage/handling/rework for earlier FG belongs to original Qc; keep original production history once and only real incremental service. Future unobserved activity is unknown. |  |
| allocation_zero | all inventory rows | Keep zero-Q and failed-period physical records and burden vectors intact. Do not divide, erase loads or create a unit result when the selected denominator is nonpositive. A later linked cohort can carry the burden only with an explicit history and no duplicate numerator. Actual rejected/unauthorized movements remain recorded; authorization changes eligibility, not physical existence. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

All protocols collect undivided raw quantities; aggregation_rule states the reporting basis of the same final result and performs no division. D_r is positive current Q or original Qc of the correct cohort; cards, calculation and reporting use the same report_once result. Physical V, burden A and every inherited exchange vector remain distinct.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | make_pen | Unique complete-pen release and WIP | weighing_release_ledger | configuration; BOM revision; lot; period; new unique release IDs; calibrated gross/tare/net kg; complete count; measured same-configuration net mass M if count conversion is needed; sample/test withdrawals; opening/closing WIP; inherited vectors; failed runs; return/original-Qc links; actual_original_Q0_Qc; full_disjoint_postgate_fates; actual_T_accept; whole_Qt; compatible_service_A; essential_procedure_status | Owner: production and quality controllers. Weigh complete filled usable capped pens on calibrated scales, subtract only outer packaging/tare, and reconcile to actual assembly/writing/function acceptance and unique first-release IDs. Measure representative net mass M for the same configuration and lot only when using counts; retain sample selection and uncertainty. Keep all failed/rejected/zero-output events. Collect raw undivided quantities and every WIP vector; do not calculate N/D during collection. For the newly accepted cohort Q=Q0. Q0 is independently fixed from unique first quality-release events for complete same-configuration pens after every required factory operation and test, ready for the declared factory supply gate. It includes all actual retained articles and water at release and excludes outer packaging tare. Reconcile each original Q0 on its original-material/configuration basis across disjoint net remaining external deliveries, every actual on-site accepted FG/held/returned/rework state, irreversible losses and other terminal dispositions. Gross return first leaves its old delivery position. Dispatch, return, repacking, retest or reacceptance never creates new Q. Current surviving wet mass and original water/material losses cannot both be restored and counted again. Opening old cohorts and later observed-H services use original Qc/Q0, not current output; delivery plus closing FG is sufficient only when all other postgate states/exits are absent. Q=0 or unknown retains actual raw loads without a per-unit result. | kg; count; kg/item | Each release event and stock close | Complete matched manufacture period and inherited WIP history | Declared pen configuration and first-release cohort | per 1 kg reference flow | Calibration; paired assembly/test/release IDs; tare; BOM; WIP vector reconciliation |
| cp_materials | make_pen | Every supplied physical material or module | gross_receipt_and_issue_ledger | row_id; supplier/formulation/grade; whole supply form; actual net kg V; lot; receipts and external returns; raw opening/closing; issue/return; internal handover; assay/carrier subaccounts; failures; inherited vectors; actual_original_Q0_Qc; full_disjoint_postgate_fates; actual_T_accept; whole_Qt; compatible_service_A; essential_procedure_status | Owner: materials accountant. Retain actual calibrated receipt/issue/return and stock records for every card, including failed/cleanup/rework batches. Separate gross physical V from service burden A and from stock-vector transfers; never multiply V by an allocation share or substitute stock difference for a real movement. Verify whole supplied ink and tips versus constituents and actual supplier compatibility. Additional actual materials require named cards. Collect raw only; no N/D. Keep complete physical raw/WIP/non-WIP/FG/return, packaging, installed-fluid and every actual equipment-fleet ledger separate from reference events and per-exchange burden vectors. Own opening WIP carries actual earlier foreground burdens once; only substantiated still-unused/unassigned closing WIP carries them forward. For attribution, A may add unassigned inherited opening burden to period raw burden and remove only demonstrated still-unassigned closing burden and a disjoint justified other-system/cohort handover. Already-net consumption is not stock-corrected a second time; accepted closing FG and services already performed for it are not deleted. A complete provider aggregate and its embedded material/transport/asset/history decomposition are mutually exclusive. Preserve failed attempts, idle/start-stop, inspection, samples, cleanout and repair loads. Actual complete upstreams match the whole supplied article/preparation and true availability point; no receipt or purchased-service label hides known on-site manufacture. Actual provider inclusion schedules cover current electricity, repair, transport and operating supplies as well as capital: an aggregate already including a metered foreground operation and that separate operation cannot both be charged. | kg | Every actual receipt issue and return | Full observed period plus raw/WIP carry history | All actual included pen-manufacturing supplies | per 1 kg reference flow | Invoices; scales; actual supplier BOM/specification; formulation bridge; physical and burden-vector reconciliation |
| cp_quality | make_pen | Tests and sample consumption | quality_event_ledger | event; pen lot; actual test basis; paper and transferred ink; destructive sample mass; result; release authorization; actual cleanup and energy; segregated/mixed waste destination | Owner: quality lead. Trace every real writing/function test and all consumed paper, ink, sampled pens and retests. Failed or unauthorized tests keep actual physical movements and loads; test acceptance authorizes eligible release only. Weigh segregated waste or record a nonadditive origin in the real mixed bin. No catalogue writing distance or universal test factor; collect raw only, no N/D. | kg; event; result | Each actual test and retest | Full manufacturing cohort including failures | Actual release tests for this configuration | per 1 kg reference flow | Test method; calibration; sample identity; ink/paper/waste reconciliation |
| cp_utilities_make | make_pen | Manufacturing electricity and water | meter_and_service_records | row_id; meter start/end; kWh/MJ; water kg; volume or rate/time; actual voltage/geography/provider; service load/duration; external water return phase/T/P/enthalpy; failure/idle/cleanup; cohort; original Qc; inherited vectors | Owner: utility engineer. Retain undivided raw meters for all actual included operations. Convert kWh to MJ once; verify exact energy-property and energy-unit-group chain. Water mass needs direct weighing or independent same-state density, not an assumed native coefficient. Keep internal loops separate from external purchases and actual thermal-carrier returns; attribute services by exclusive/subdivision/causal hierarchy. Preserve actual loads for Q0 and earlier-cohort services. No N/D in collection and no guessed future activity. | kWh; MJ; kg; m3; time; enthalpy | Meter interval and actual service event | Matched actual observation window and inherited vector history | Declared operations only; correct current Q or original Qc | per 1 kg reference flow | Meter calibration; voltage/provider; independent density; enthalpy; causal driver and stock links |
| cp_utilities_post | post_release | Actual observed post-release services | meter_and_service_records | row_id; meter start/end; kWh/MJ; water kg; volume or rate/time; actual voltage/geography/provider; service load/duration; external water return phase/T/P/enthalpy; failure/idle/cleanup; cohort; original Qc; inherited vectors | Owner: utility engineer. Retain undivided raw meters for all actual included operations. Convert kWh to MJ once; verify exact energy-property and energy-unit-group chain. Water mass needs direct weighing or independent same-state density, not an assumed native coefficient. Keep internal loops separate from external purchases and actual thermal-carrier returns; attribute services by exclusive/subdivision/causal hierarchy. Preserve actual loads for Q0 and earlier-cohort services. No N/D in collection and no guessed future activity. | kWh; MJ; kg; m3; time; enthalpy | Meter interval and actual service event | Matched actual observation window and inherited vector history | Declared operations only; correct current Q or original Qc | per 1 kg reference flow | Meter calibration; voltage/provider; independent density; enthalpy; causal driver and stock links |
| cp_outlets | make_pen | Every actual waste outlet | weighing_receiver_and_species_records | row_id; event; gross wet kg V/W; waste type; segregated/mixed state; independently measured originW; actual receiver/provider; moisture/species/element analyses; rework; inherited vectors; uncertainty; actual_original_Q0_Qc; full_disjoint_postgate_fates; actual_T_accept; whole_Qt; compatible_service_A; essential_procedure_status | Owner: waste/environment lead. Weigh each actual gross outlet and retain one receiver/treatment boundary. Distinguish Waste from Product; independently measure originW, moisture and relevant species/elements rather than fit two unknowns to one residual. One physical mixed outlet has one full W and nonadditive origin subaccounts, not extra constituent dispatches. Retain failed and zero-output events and actual cleanup/rework. Collect raw only, no N/D. One actual contaminated film, carton, cloth, machine, filter, rejected pen part or liquid consignment has one whole receiver event Qt containing substrate/article, retained ink/cleaner/polymer matter and water once. Dry tare and measured originW/components are nonadditive nested analyses, not extra exported wastes unless physically separated before the boundary. Match its actual receiver/treatment/provider and extensive unit. Physical Qt and Qt/Q disclosure are not automatically the service demand: use only evidenced compatible nonoverlapping service A with the original cohort Qc/Q0, keeping physical transfer full. Unknown attribution remains unknown. Arithmetic illustration only: a shared10kg consignment is never shrunk to2.5kg by25% attribution and never charged as10kg again to every cohort. Different dry/wet or provider units require the actual full-composition/state bridge, not a hidden conversion or pure-component proxy. | kg | Every outlet event and period close | Full actual period and origin history | Actual declared process and receivers | per 1 kg reference flow | Weighbridge/scales; laboratory methods; receiver receipts; separate physical/species balances |
| cp_air | make_pen | Actual identified air species | species_monitoring | actual molecule/CAS; phase; medium/compartment; stack/fugitive source; measured concentration; integrated volume or actual rate/time; density and gas state; inlet/outlet/control capture; retained material; failures/cleanup; actual uncertainty; actual_original_Q0_Qc; full_disjoint_postgate_fates; actual_T_accept; whole_Qt; compatible_service_A; essential_procedure_status | Owner: environmental monitoring lead. Identify actual species and compartment independently; add each real molecule and actual nitrogen/oxygen/argon/water or other gas inflow/outflow where relevant to the process balance. Integrate only rates, not integrated volumes; density must be independently established for that material/state. Keep free, phase, structural and evidenced reaction water distinct. COD/VOC/PM/NOx metrics and one residual never become a specific chemical mass. Unknown remains unknown; no emission factor is supplied. Raw collection does not divide by Q. The supplied GPPS is physically melted and moulded; this route does not prescribe polymer synthesis, an on-site tip metallurgy unit or ink formulation. Any actual chemical change nevertheless requires independently established formation G_i and consumption C_i for its species; total wet mass and elements do not create a net chemical mass source. No resin monomer content, total VOC, COD, odour or balance residual identifies a released molecule. Use the complete EPA320 heated extractive FTIR programme only for actual identified IR-active vapor species with compatible reference spectra, actual interferants, background/temperature/pressure basis, representative transport, analyte-spike recovery and uncertainty checks. It does not measure homonuclear N2/O2 or monatomic Ar, particulate, liquid/mist or totalVOC chemistry. Actual collected condensate or cleaning liquid is one whole physical receiver transfer, separate from any actual final released species/phase. The actual full50-page dated Method320 PDF includes its FTIR Protocol and appendices; no referenced-only/missing-Protocol claim is made. Its PDF16 Eq3/4 use a tracer mixture fraction but the same-page DF>=10 legend is inconsistent: retain source bytes and use common corrected mole-basis phi=(tracer_spiked-tracer_native)/(tracer_direct-tracer_native), denominator nonzero, actual representative matched no-unaccounted-loss mixing, and expected analyte=phi*analyte_direct+(1-phi)*analyte_native. Phi is distinct from the reciprocal dilution ratio; this physical identity is no numerical setting or acceptance tolerance. Actual duct flow needs source-compatible complete geometry/traverse and calibrated velocity/state/density procedures; Methods1–3 originals are retained with their non-cyclonic/size/location, restricted gas-matrix/interference and argon-omission limits. Their unabsorbed N2/CO remainder is not pure N2 or measured Ar. A duct result is not automatically a whole fugitive-source inventory. The retained Method18 excludes compounds that can polymerize before analysis, so its title is not proof of styrene sample stability or a substitute for a demonstrated applicable programme. Neither this source set nor a future SOP establishes every unidentified ink/cleaner molecule, hot wet mist, sorption/phase transfer or reactive matrix. A genuinely necessary unestablished specific programme remains hold; ordinary actual lot/site calibration and recovery within an established applicable programme remain study qualification, not proof no method exists. No actual release or successful QA is presumed. These dated EPA copies and this technical synthesis are not a claim of regulatory conformity, scientific acceptance or complete actual-factory inventory. | kg; concentration; m3; time; temperature; pressure | Actual monitoring interval and release event | Full matched period including failure/start/cleanup | Actual air inlet/outlet and compartments | per 1 kg reference flow | Speciation method; monitoring calibration; gas state; independent water/element evidence |
| cp_fg | post_release | Released FG and actual returns/dispatch | gross_finished_stock_ledger | lot; original unique Qc; opening/closing FG kg and every carried exchange vector; paired new release receipt; gross returns; gross shipments; rejection; natural moisture change; actual storage residence/handling/service; repair links; event authorization/result; actual_original_Q0_Qc; full_disjoint_postgate_fates; actual_T_accept; whole_Qt; compatible_service_A; essential_procedure_status | Owner: warehouse controller. Keep separate gross physical FG movements and full historical production vectors; new release/receipt cancels internally, while gross external returns and dispatch remain. Closing already released FG does not create output or remove Q. Reinspection/reacceptance/repair never creates new Q. Preserve all actual unauthorized/refused movements and actual incremental services in the observed window with original Qc. Future unknown dispatch/storage is not a measurement. Collect raw only; no N/D. For the newly accepted cohort Q=Q0. Q0 is independently fixed from unique first quality-release events for complete same-configuration pens after every required factory operation and test, ready for the declared factory supply gate. It includes all actual retained articles and water at release and excludes outer packaging tare. Reconcile each original Q0 on its original-material/configuration basis across disjoint net remaining external deliveries, every actual on-site accepted FG/held/returned/rework state, irreversible losses and other terminal dispositions. Gross return first leaves its old delivery position. Dispatch, return, repacking, retest or reacceptance never creates new Q. Current surviving wet mass and original water/material losses cannot both be restored and counted again. Opening old cohorts and later observed-H services use original Qc/Q0, not current output; delivery plus closing FG is sufficient only when all other postgate states/exits are absent. Q=0 or unknown retains actual raw loads without a per-unit result. | kg; time; event | Every physical movement/service and period close | Actual observed window and complete returned-lot history | Declared pen cohort and matching original Qc | per 1 kg reference flow | Paired gate events; original releases; calibrated net weights; FG physical closure and vector continuity |
| cp_carton | post_release | Individual carton packaging pool | gross_packaging_pool_ledger | component identity; supplied form; count and measured kg; opening empty/attached-WIP/FG/reusable; new purchase P; internal R_internal; external return received ER; closing each pool; gross attached S; external returned EO; actual W; original cohort/Qc; inherited vectors; actual service window; actual_P_I_sup_ERin_Sgross_EOout_Wwhole; actual_disjoint_J_in_J_out_H2O_in_H2O_out; same_side_X_overlap; original_Q0_Qc; whole_Qt_receiver; compatible_service_A | For each actual whole wet corrugated-carton or PE-film pool use O_empty+O_attachedWIP+O_attachedFG+O_reusable+P+I_sup+ERin+J_in+H2O_in-X_in=C_empty+C_attachedWIP+C_attachedFG+C_reusable+S_gross+EOout+W_whole+J_out+H2O_out-X_out. I_sup is actual disjoint supplier-included packaging, not another purchase; internal reuse R_internal cancels between matched positions and is not I_sup. J is additional real non-water material and H2O is additional actual water transfer only to the extent not already included in another whole wet leg. O/C and every whole leg retain all contained matter: actual new material/water retained in C never erases its true influx. X subtracts only independently proved overlap with OTHER same-side flow terms, never C, real increments, opposite directions or card existence. Trace actual J/water sources/destinations with specific physical records and internal pairs; do not invent a generic provider, extra Q, separate constituent waste or balancing flow. Gross shipments, external returns received/sent and true whole waste stay physically full regardless of environmental use shares. These two specific article pools are conditional on actual configuration; these are actual conditional packaging choices, not a universal material, tare, repair, water uptake or mass. | kg; count; event | Each component movement and stock close | Full actual packaging window and reusable/attached history | Only this individual component and original-cohort Qc | per 1 kg reference flow | Component weights; supplier form; P/I_sup/ERin/S_gross/EOout/W_whole/J/H2O/X closure; contamination; actual receiver and cohort links |
| cp_film | post_release | Individual film packaging pool | gross_packaging_pool_ledger | component identity; supplied form; count and measured kg; opening empty/attached-WIP/FG/reusable; new purchase P; internal R_internal; external return received ER; closing each pool; gross attached S; external returned EO; actual W; original cohort/Qc; inherited vectors; actual service window; actual_P_I_sup_ERin_Sgross_EOout_Wwhole; actual_disjoint_J_in_J_out_H2O_in_H2O_out; same_side_X_overlap; original_Q0_Qc; whole_Qt_receiver; compatible_service_A | For each actual whole wet corrugated-carton or PE-film pool use O_empty+O_attachedWIP+O_attachedFG+O_reusable+P+I_sup+ERin+J_in+H2O_in-X_in=C_empty+C_attachedWIP+C_attachedFG+C_reusable+S_gross+EOout+W_whole+J_out+H2O_out-X_out. I_sup is actual disjoint supplier-included packaging, not another purchase; internal reuse R_internal cancels between matched positions and is not I_sup. J is additional real non-water material and H2O is additional actual water transfer only to the extent not already included in another whole wet leg. O/C and every whole leg retain all contained matter: actual new material/water retained in C never erases its true influx. X subtracts only independently proved overlap with OTHER same-side flow terms, never C, real increments, opposite directions or card existence. Trace actual J/water sources/destinations with specific physical records and internal pairs; do not invent a generic provider, extra Q, separate constituent waste or balancing flow. Gross shipments, external returns received/sent and true whole waste stay physically full regardless of environmental use shares. These two specific article pools are conditional on actual configuration; these are actual conditional packaging choices, not a universal material, tare, repair, water uptake or mass. | kg; count; event | Each component movement and stock close | Full actual packaging window and reusable/attached history | Only this individual component and original-cohort Qc | per 1 kg reference flow | Component weights; supplier form; P/I_sup/ERin/S_gross/EOout/W_whole/J/H2O/X closure; contamination; actual receiver and cohort links |
| cp_assets | factory_assets | Actual machines and observed service | physical_fleet_and_history | unit_id; full_configuration; measured_M_kg; actual_O_C; receipt; ERin; EOout; whole_Qt; actual_h; repair_fluid_history; provider_inclusion; own_inherited_burdens; original_Q0_Qc; unused_capacity | Every actual injection-moulding machine, ink-filling/tip-insertion line, tool, extraction/handling unit and reusable cloth keeps a complete actual configured fleet: new/used receipts, external returns received/sent, real retirement/whole waste, installed/opening/closing holdings and disjoint repair/fluid changes. BIC industrial history and TopTip equipment show actual operations, not the same contemporary plant, installed machine or shared SKU. A whole line/provider already including a machine and a separate purchase of that machine cannot both be added. Measure actual complete configuration mass M if count/mass conversion is needed; Item(s) is not kg and no machine mass or lifetime is supplied. Actual service h must match a complete real provider history and observed original-cohort use, unused/unassigned capacity and inherited burdens; physical fleet kg is not scaled by a service share. Separately supplied oil/filter/belt and whole contaminated removed items need their own atomic interfaces when actually present; contained parts remain nested in a whole asset. Receipt/return/shipment/retirement cards disclose physical V only; they are not a second capital purchase when the actual compatible service history already owns the same upstream manufacture. Actual provider-service scope and separately metered operation/repair must be nonoverlapping. A cotton cloth has the same full gross receipt/return/whole-waste and opening/closing fleet record; actual laundering or replacement must carry all disjoint real provider and utility burdens. No cloth lifetime or laundering load is assumed. | kg; h | Each real event and period close | Actual observed original-cohort H | Actual whole machine and complete compatible provider | per 1 kg reference flow | Calibrated configuration mass; whole fleet; actual service/history and nonoverlap |
| cp_cloth | make_pen | Actual cotton cloth and observed use | physical_fleet_and_history | cloth_id; cotton_composition; measured_M_kg; actual_O_C; receipt; ERin; EOout; whole_Qt; actual_h; repair_fluid_history; provider_inclusion; own_inherited_burdens; original_Q0_Qc; unused_capacity | Every actual injection-moulding machine, ink-filling/tip-insertion line, tool, extraction/handling unit and reusable cloth keeps a complete actual configured fleet: new/used receipts, external returns received/sent, real retirement/whole waste, installed/opening/closing holdings and disjoint repair/fluid changes. BIC industrial history and TopTip equipment show actual operations, not the same contemporary plant, installed machine or shared SKU. A whole line/provider already including a machine and a separate purchase of that machine cannot both be added. Measure actual complete configuration mass M if count/mass conversion is needed; Item(s) is not kg and no machine mass or lifetime is supplied. Actual service h must match a complete real provider history and observed original-cohort use, unused/unassigned capacity and inherited burdens; physical fleet kg is not scaled by a service share. Separately supplied oil/filter/belt and whole contaminated removed items need their own atomic interfaces when actually present; contained parts remain nested in a whole asset. Receipt/return/shipment/retirement cards disclose physical V only; they are not a second capital purchase when the actual compatible service history already owns the same upstream manufacture. Actual provider-service scope and separately metered operation/repair must be nonoverlapping. A cotton cloth has the same full gross receipt/return/whole-waste and opening/closing fleet record; actual laundering or replacement must carry all disjoint real provider and utility burdens. No cloth lifetime or laundering load is assumed. | kg; h; event | Each real event and period close | Actual observed original-cohort H | Actual whole machine and complete compatible provider | per 1 kg reference flow | Calibrated configuration mass; whole fleet; actual service/history and nonoverlap |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| convert_raw | all inventory rows | Convert each raw measurement into its declared native row unit before attribution. kWh * 3.6 = MJ. Integrate a true measured rate over its actual duration once; integrated volume has no further time multiplier. For volume/count conversion require independent same-state density or measured same-configuration net mass M from cp_release. Preserve original and converted values and uncertainty; no inferred density, mass or emission factor. | raw_value; raw_unit; measured_state; independent_conversion; cp_release | converted_raw |  |
| trace_cohort | all inventory rows | Trace each exchange vector through real raw/WIP/FG/return/reuse history. Keep gross physical V intact. For utility/services derive attributable A only through exclusive assignment, subdivision, exchange-specific physical causality and genuinely remaining common-gate economic allocation. Retain opening/closing carry vectors separately and conserve them. A is never a replacement for physical V. | converted_raw; inherited_vectors; actual_driver; physical_V; cp_materials; cp_fg | N_r; cohort_id | ilcd-attributional-allocation-2010 |
| select_denominator | all inventory rows | Select D_r = Q for the newly first-released cohort or D_r = original Qc for actual services/physical movements of previously released stock. Keep complete net first-release kg and event uniqueness from cp_release. If D_r is nonpositive, retain actual loads and histories and do not emit a normalized unit result. Prior release, repair, dispatch and reacceptance cannot generate another Q. | cp_release; cp_fg; original_cohort_id; Q; Qc | D_r |  |
| report_once | all inventory rows | x_r = N_r / D_r. For each physical card N_r is full gross V_r; for a service/utility burden card N_r is the traced attributable A_r. D_r is the selected positive cohort release kg from select_denominator. Perform this division once after convert_raw and trace_cohort. Card amounts and protocol aggregation reference x_r without another division. Physical inventories and burden/stock-vector reconciliation are disclosed together. | N_r; D_r; convert_raw; trace_cohort; select_denominator | x_r |  |
| close_gates | all inventory rows | For each actual physical gate retain O_raw+O_WIP+O_nonWIP+I_phys+ER_pre+U_air+H2O_in=C_raw+C_WIP+C_nonWIP+T_accept+W_man+E_man+EO_pre+T_other+H2O_out, and O_FG+T_accept+ER_FG+I_incremental+J_in+H2O_in=C_FG+S_gross+EO_FG+W_FG+E_FG+J_out+H2O_out. All terms are actual disjoint wet physical quantities; whole I_phys/I_incremental contains all actual added matter, not only retained C. Separate H2O/J terms exclude matter already in another whole leg. T_other names only actual atomic transfers. Sum gates and cancel one matched actual T_accept only; Q0 remains independent, never added again as an external product or fitted to closure. For each actual whole wet corrugated-carton or PE-film pool use O_empty+O_attachedWIP+O_attachedFG+O_reusable+P+I_sup+ERin+J_in+H2O_in-X_in=C_empty+C_attachedWIP+C_attachedFG+C_reusable+S_gross+EOout+W_whole+J_out+H2O_out-X_out. I_sup is actual disjoint supplier-included packaging, not another purchase; internal reuse R_internal cancels between matched positions and is not I_sup. J is additional real non-water material and H2O is additional actual water transfer only to the extent not already included in another whole wet leg. O/C and every whole leg retain all contained matter: actual new material/water retained in C never erases its true influx. X subtracts only independently proved overlap with OTHER same-side flow terms, never C, real increments, opposite directions or card existence. Trace actual J/water sources/destinations with specific physical records and internal pairs; do not invent a generic provider, extra Q, separate constituent waste or balancing flow. Gross shipments, external returns received/sent and true whole waste stay physically full regardless of environmental use shares. These two specific article pools are conditional on actual configuration; these are actual conditional packaging choices, not a universal material, tare, repair, water uptake or mass. T_accept is the actual physical transfer at the declared manufacture-to-FG-service gate; Q0 is the separately measured first-release reference-event denominator. Where the same configuration, state, event and window make them coincide, demonstrate that equality from independent records, never fit Q0 from physical closure. The finished reference row declares the unit and is not another external shipment. Manufacturing, FG-service and consolidated gates retain every real wet stock and gross exchange; consolidation cancels the one actual internal T_accept only, not external dispatch or real return. For an actually reacting species i, keep measured G_i formation and C_i consumption in its species equation; do not conserve reacting molecules by assumption or infer them from elemental closure. Chemical reactions create no net total-mass/element source; phase transfer is not chemical creation. Water additions/evaporation and all other terms must be mutually disjoint from water already included in whole supplied articles, carrier legs or releases. Unknown terms remain unresolved, not residual-fitted. | cp_release; cp_materials; cp_fg; cp_carton; cp_film; cp_air; cp_outlets | physical_and_vector_reconciliation |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Actual same-configuration whole article and every supply-form facet must agree with native limits and provider. Auxiliary unresolved UUIDs remain concrete and disclosed; broad identity is not a factory inventory. | Complete native read and exact property/unit chain; supplier/BOM/formulation/state records |
| dq_measurement | all inventory rows | Retain calibration, actual uncertainty, raw units and one conversion; independent density and M where needed; no default recipe, mass, yield, service claim, emission factor or guessed zero. | Calibration, count/net-mass sampling, density/species analyses and unit audit |
| dq_complete_events | make_pen; post_release | Retain all failed/Q0/start/stop/idle/cleanup/tests/rework events, actual observation window and each original-cohort vector; future unobserved service remains unknown. | Full event ledger, period meters, WIP/FG history and original Qc links |
| dq_physical | all inventory rows | Independent manufacture/FG/consolidated wet-mass and element gates and individual packaging pools must retain gross movements, actual returns and Waste status. Mixed origin subaccounts do not add to W; no two-unknown residual fitting. | Gate/pool closure, receiver receipts, independent species/free/phase-water evidence |
| dq_sources | all inventory rows | Sources support only their actual qualitative construction, unit operation or attributional method scope. Keep originals, contextual alternatives and dates; distinguish technical synthesis from a same-factory/order claim. | Original pages and source-specific applicability; scientific and translation review records remain separate |
| dq_method | actual necessary species/phase/matrix | The supplied GPPS is physically melted and moulded; this route does not prescribe polymer synthesis, an on-site tip metallurgy unit or ink formulation. Any actual chemical change nevertheless requires independently established formation G_i and consumption C_i for its species; total wet mass and elements do not create a net chemical mass source. No resin monomer content, total VOC, COD, odour or balance residual identifies a released molecule. Use the complete EPA320 heated extractive FTIR programme only for actual identified IR-active vapor species with compatible reference spectra, actual interferants, background/temperature/pressure basis, representative transport, analyte-spike recovery and uncertainty checks. It does not measure homonuclear N2/O2 or monatomic Ar, particulate, liquid/mist or totalVOC chemistry. Actual collected condensate or cleaning liquid is one whole physical receiver transfer, separate from any actual final released species/phase. The actual full50-page dated Method320 PDF includes its FTIR Protocol and appendices; no referenced-only/missing-Protocol claim is made. Its PDF16 Eq3/4 use a tracer mixture fraction but the same-page DF>=10 legend is inconsistent: retain source bytes and use common corrected mole-basis phi=(tracer_spiked-tracer_native)/(tracer_direct-tracer_native), denominator nonzero, actual representative matched no-unaccounted-loss mixing, and expected analyte=phi*analyte_direct+(1-phi)*analyte_native. Phi is distinct from the reciprocal dilution ratio; this physical identity is no numerical setting or acceptance tolerance. Actual duct flow needs source-compatible complete geometry/traverse and calibrated velocity/state/density procedures; Methods1–3 originals are retained with their non-cyclonic/size/location, restricted gas-matrix/interference and argon-omission limits. Their unabsorbed N2/CO remainder is not pure N2 or measured Ar. A duct result is not automatically a whole fugitive-source inventory. The retained Method18 excludes compounds that can polymerize before analysis, so its title is not proof of styrene sample stability or a substitute for a demonstrated applicable programme. Neither this source set nor a future SOP establishes every unidentified ink/cleaner molecule, hot wet mist, sorption/phase transfer or reactive matrix. A genuinely necessary unestablished specific programme remains hold; ordinary actual lot/site calibration and recovery within an established applicable programme remain study qualification, not proof no method exists. No actual release or successful QA is presumed. These dated EPA copies and this technical synthesis are not a claim of regulatory conformity, scientific acceptance or complete actual-factory inventory. | Actual complete applicable procedure versus ordinary unperformed study QA; preserve necessary specific unresolved method holds |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_whole | released_pen | Verify whole usable capped pen construction, actual manufacturing rather than purchased-finished packing, complete assembly and test/release evidence, and the positive native Product family/Mass/kg chain. A core whole-product or terminal-method evidence gap blocks a complete dataset; ordinary auxiliary UUID/provider gaps remain specific and disclosed rather than changing the reference to a part. | bic-cristal-construction-2025; bic-integrated-manufacture-history; toptip-inj34-refill-assembly |
| validate_identity | all inventory rows | Check every adopted native basename, synonym, comment, CAS, grade, route/form, geography, medium/type and every property against the actual exchange. Recheck the selected property’s exact reference-unit-group and reference unit. Preserve all disclosed native limits in the row description and consumed context; supplier/grade unknowns do not authorize contradictory bindings. No latest-version inference, secondary coefficient density inference or Product-as-Waste is permitted. |  |
| validate_quantity | all inventory rows | Verify unique positive current Q or original Qc, raw unit conversion before attribution, every inherited exchange vector, one report_once normalization, explicit Q0 retention, and agreement between reference/card/protocol/calculation. Do not use catalogue item weight, default recipe, duration, density, yield, performance or certification. Unresolved quantities or unsupported relationships remain unknown and require review, not a claimed pass. |  |
| validate_physical | make_pen; post_release | Reconcile independent manufacturing, FG and consolidated gross physical gates and every packaging pool, with internal handovers cancelled only once. All actual events including refusal/failure and all actual species/water states and destinations remain. Check full wet mass and relevant elements independently of species evidence. Mixed W and its originW are not additive; actual unknowns cannot be solved by fitting one residual twice. |  |
| validate_sources | all inventory rows | Keep whole original manufacturer and methodology context, neighboring alternatives and source-specific applicability. Neither an industrial process description nor a verified fragment establishes LCA allocation, a specific factory inventory, accepted classification mapping, scientific approval or translation review. Add each actual missing atomic flow and its evidence before declaring dataset completeness. | ilcd-attributional-allocation-2010 |

### Complete applicability and accounting context

This method covers one evidence-bounded subset within the existing writing-implements category: manufacture of complete, capped, non-electronic ballpoint pens with a clear polystyrene barrel, empty polypropylene reservoir tube, finished brass tip carrying an already seated tungsten-carbide ball, supplied cap/end plug and whole purchased writing ink. It begins with the actual resin and prepared component/formulation supply forms, includes on-site barrel moulding, real refill filling/tip insertion, mechanical assembly and actual writing/function inspection, and ends at the unique first quality release of the complete usable pen. Buying a finished pen and only packaging it does not meet this manufacturing boundary.

The construction evidence is the manufacturer complete-pen drawing, not a refill or ink picture. Industrial moulding history and an equipment maker’s filling sequence are transparent unit-operation synthesis; they are not an assertion that the same contemporary BIC site, order, machine or SKU operates this purchased-input route. The whole ink, cap and plug compositions remain actual supplier declarations. No published pen weight, dimension, ball diameter, ink dose, writing distance, lifetime, formulation, density, yield, temperature, time, energy or certification becomes a default. Sources: bic-cristal-construction-2025; bic-integrated-manufacture-history; toptip-inj34-refill-assembly.

The parent category also names pencils, holders, crayons, leads, pastels, charcoal, chalk and parts. Those titles do not prove compatible manufacture. This method excludes fountain pens, gel/rollerball products without demonstrated compatible construction, retractable/spring mechanisms, electronic instruments, wood-pencil or chalk manufacture, loose components/refills/ink as reference outputs and independent pen boxes. Stainless-tip/steel-ball and on-site tip metallurgy, tube extrusion or ink formulation need separately supported disjoint process boundaries before this method can be extended; do not mix their BOM into this capped representative. Classification context is un-cpc3-structure-2025.

The common reference is the complete native assembled Product family in Mass/kg. New unique first quality-release net Q includes integral ink/components once and excludes outer packaging; previously released closing FG already belongs to Q. All rules retain gross physical V separately from attributable service A, every inherited exchange vector, original Qc for actual earlier-cohort services, and unknown future services.

Declare every qualifier in dataset metadata, process notes, reference comments or equivalent consumed fields. The reference family is broader than this method; all native limits and complete-pen applicability are also retained in release, return and dispatch row descriptions, not only here.

The following inventory is atomic. Conditional rows are recorded only when actually present; not_applicable requires evidence of actual absence and unknown is not zero. Add each real additional single substance, packaging component, waste or gas separately. Internally made barrels, filled refills and other handovers are not new purchases and cancel at the consolidated physical gate. Keep every physical stock and inherited exchange vector separately. Card amounts and protocol aggregation_rule reference the same report_once result, never sequential divisions.

All protocols collect undivided raw quantities; aggregation_rule states the reporting basis of the same final result and performs no division. D_r is positive current Q or original Qc of the correct cohort; cards, calculation and reporting use the same report_once result. Physical V, burden A and every inherited exchange vector remain distinct.

Q is actual new unique complete-pen first-release net kg. Include integral ink and all supplied pen components once; exclude all external packaging. Count is auxiliary, not the native reference. Closing released FG is already in Q.

If count records are used, M is measured complete net pen mass in kg/item for the same configuration and lot, obtained using cp_release calibrated net weighing and a documented count/sample scope. Convert actual counts using measured M before Q aggregation; never use the printed catalogue weight, ball diameter, ink fill or a secondary native coefficient to infer M or density. Raw material and service collection remains in original units.

Whole purchased ink/formulation or article is procured once. Assay, carrier water and contained metal/polymer masses are nonadditive subaccounts. Actual separate on-site purchases need disjoint atomic cards and a reconciled bridge; changing to on-site chemical preparation needs source-supported route review.

Convert raw units before causal attribution and one normalization. Use 1 kWh = 3.6 MJ for electricity; its property and unit group must be energy. Already integrated gas/liquid volume is not multiplied by time; a true rate is integrated. Volume-to-mass requires independently measured density of that substance and state; no universal water density or molecular amount is inferred.

Physical N_r is full gross boundary quantity V_r, including parts, FG, fluids, external returns, packaging and Waste. Only service/utility burden N_r uses causally attributed A_r. Keep stock-vector transfer corrections separate; never shrink physical V by A, stock differences or economic/service shares. Select current Q or positive original Qc by cohort, and calculate N_r / D_r only once under report_once.

Convert each raw measurement into its declared native row unit before attribution. kWh * 3.6 = MJ. Integrate a true measured rate over its actual duration once; integrated volume has no further time multiplier. For volume/count conversion require independent same-state density or measured same-configuration net mass M from cp_release. Preserve original and converted values and uncertainty; no inferred density, mass or emission factor.

Trace each exchange vector through real raw/WIP/FG/return/reuse history. Keep gross physical V intact. For utility/services derive attributable A only through exclusive assignment, subdivision, exchange-specific physical causality and genuinely remaining common-gate economic allocation. Retain opening/closing carry vectors separately and conserve them. A is never a replacement for physical V.

Select D_r = Q for the newly first-released cohort or D_r = original Qc for actual services/physical movements of previously released stock. Keep complete net first-release kg and event uniqueness from cp_release. If D_r is nonpositive, retain actual loads and histories and do not emit a normalized unit result. Prior release, repair, dispatch and reacceptance cannot generate another Q.

x_r = N_r / D_r. For each physical card N_r is full gross V_r; for a service/utility burden card N_r is the traced attributable A_r. D_r is the selected positive cohort release kg from select_denominator. Perform this division once after convert_raw and trace_cohort. Card amounts and protocol aggregation reference x_r without another division. Physical inventories and burden/stock-vector reconciliation are disclosed together.

For each actual physical gate retain O_raw+O_WIP+O_nonWIP+I_phys+ER_pre+U_air+H2O_in=C_raw+C_WIP+C_nonWIP+T_accept+W_man+E_man+EO_pre+T_other+H2O_out, and O_FG+T_accept+ER_FG+I_incremental+J_in+H2O_in=C_FG+S_gross+EO_FG+W_FG+E_FG+J_out+H2O_out. All terms are actual disjoint wet physical quantities; whole I_phys/I_incremental contains all actual added matter, not only retained C. Separate H2O/J terms exclude matter already in another whole leg. T_other names only actual atomic transfers. Sum gates and cancel one matched actual T_accept only; Q0 remains independent, never added again as an external product or fitted to closure. For each actual whole wet corrugated-carton or PE-film pool use O_empty+O_attachedWIP+O_attachedFG+O_reusable+P+I_sup+ERin+J_in+H2O_in-X_in=C_empty+C_attachedWIP+C_attachedFG+C_reusable+S_gross+EOout+W_whole+J_out+H2O_out-X_out. I_sup is actual disjoint supplier-included packaging, not another purchase; internal reuse R_internal cancels between matched positions and is not I_sup. J is additional real non-water material and H2O is additional actual water transfer only to the extent not already included in another whole wet leg. O/C and every whole leg retain all contained matter: actual new material/water retained in C never erases its true influx. X subtracts only independently proved overlap with OTHER same-side flow terms, never C, real increments, opposite directions or card existence. Trace actual J/water sources/destinations with specific physical records and internal pairs; do not invent a generic provider, extra Q, separate constituent waste or balancing flow. Gross shipments, external returns received/sent and true whole waste stay physically full regardless of environmental use shares. These two specific article pools are conditional on actual configuration; these are actual conditional packaging choices, not a universal material, tare, repair, water uptake or mass. T_accept is the actual physical transfer at the declared manufacture-to-FG-service gate; Q0 is the separately measured first-release reference-event denominator. Where the same configuration, state, event and window make them coincide, demonstrate that equality from independent records, never fit Q0 from physical closure. The finished reference row declares the unit and is not another external shipment. Manufacturing, FG-service and consolidated gates retain every real wet stock and gross exchange; consolidation cancels the one actual internal T_accept only, not external dispatch or real return. For an actually reacting species i, keep measured G_i formation and C_i consumption in its species equation; do not conserve reacting molecules by assumption or infer them from elemental closure. Chemical reactions create no net total-mass/element source; phase transfer is not chemical creation. Water additions/evaporation and all other terms must be mutually disjoint from water already included in whole supplied articles, carrier legs or releases. Unknown terms remain unresolved, not residual-fitted.

For the newly accepted cohort Q=Q0. Q0 is independently fixed from unique first quality-release events for complete same-configuration pens after every required factory operation and test, ready for the declared factory supply gate. It includes all actual retained articles and water at release and excludes outer packaging tare. Reconcile each original Q0 on its original-material/configuration basis across disjoint net remaining external deliveries, every actual on-site accepted FG/held/returned/rework state, irreversible losses and other terminal dispositions. Gross return first leaves its old delivery position. Dispatch, return, repacking, retest or reacceptance never creates new Q. Current surviving wet mass and original water/material losses cannot both be restored and counted again. Opening old cohorts and later observed-H services use original Qc/Q0, not current output; delivery plus closing FG is sufficient only when all other postgate states/exits are absent. Q=0 or unknown retains actual raw loads without a per-unit result.

Keep complete physical raw/WIP/non-WIP/FG/return, packaging, installed-fluid and every actual equipment-fleet ledger separate from reference events and per-exchange burden vectors. Own opening WIP carries actual earlier foreground burdens once; only substantiated still-unused/unassigned closing WIP carries them forward. For attribution, A may add unassigned inherited opening burden to period raw burden and remove only demonstrated still-unassigned closing burden and a disjoint justified other-system/cohort handover. Already-net consumption is not stock-corrected a second time; accepted closing FG and services already performed for it are not deleted. A complete provider aggregate and its embedded material/transport/asset/history decomposition are mutually exclusive. Preserve failed attempts, idle/start-stop, inspection, samples, cleanout and repair loads. Actual complete upstreams match the whole supplied article/preparation and true availability point; no receipt or purchased-service label hides known on-site manufacture. Actual provider inclusion schedules cover current electricity, repair, transport and operating supplies as well as capital: an aggregate already including a metered foreground operation and that separate operation cannot both be charged.

T_accept is the actual physical transfer at the declared manufacture-to-FG-service gate; Q0 is the separately measured first-release reference-event denominator. Where the same configuration, state, event and window make them coincide, demonstrate that equality from independent records, never fit Q0 from physical closure. The finished reference row declares the unit and is not another external shipment. Manufacturing, FG-service and consolidated gates retain every real wet stock and gross exchange; consolidation cancels the one actual internal T_accept only, not external dispatch or real return. For an actually reacting species i, keep measured G_i formation and C_i consumption in its species equation; do not conserve reacting molecules by assumption or infer them from elemental closure. Chemical reactions create no net total-mass/element source; phase transfer is not chemical creation. Water additions/evaporation and all other terms must be mutually disjoint from water already included in whole supplied articles, carrier legs or releases. Unknown terms remain unresolved, not residual-fitted.

For each actual whole wet corrugated-carton or PE-film pool use O_empty+O_attachedWIP+O_attachedFG+O_reusable+P+I_sup+ERin+J_in+H2O_in-X_in=C_empty+C_attachedWIP+C_attachedFG+C_reusable+S_gross+EOout+W_whole+J_out+H2O_out-X_out. I_sup is actual disjoint supplier-included packaging, not another purchase; internal reuse R_internal cancels between matched positions and is not I_sup. J is additional real non-water material and H2O is additional actual water transfer only to the extent not already included in another whole wet leg. O/C and every whole leg retain all contained matter: actual new material/water retained in C never erases its true influx. X subtracts only independently proved overlap with OTHER same-side flow terms, never C, real increments, opposite directions or card existence. Trace actual J/water sources/destinations with specific physical records and internal pairs; do not invent a generic provider, extra Q, separate constituent waste or balancing flow. Gross shipments, external returns received/sent and true whole waste stay physically full regardless of environmental use shares. These two specific article pools are conditional on actual configuration; these are actual conditional packaging choices, not a universal material, tare, repair, water uptake or mass.

One actual contaminated film, carton, cloth, machine, filter, rejected pen part or liquid consignment has one whole receiver event Qt containing substrate/article, retained ink/cleaner/polymer matter and water once. Dry tare and measured originW/components are nonadditive nested analyses, not extra exported wastes unless physically separated before the boundary. Match its actual receiver/treatment/provider and extensive unit. Physical Qt and Qt/Q disclosure are not automatically the service demand: use only evidenced compatible nonoverlapping service A with the original cohort Qc/Q0, keeping physical transfer full. Unknown attribution remains unknown. Arithmetic illustration only: a shared10kg consignment is never shrunk to2.5kg by25% attribution and never charged as10kg again to every cohort. Different dry/wet or provider units require the actual full-composition/state bridge, not a hidden conversion or pure-component proxy.

Every actual injection-moulding machine, ink-filling/tip-insertion line, tool, extraction/handling unit and reusable cloth keeps a complete actual configured fleet: new/used receipts, external returns received/sent, real retirement/whole waste, installed/opening/closing holdings and disjoint repair/fluid changes. BIC industrial history and TopTip equipment show actual operations, not the same contemporary plant, installed machine or shared SKU. A whole line/provider already including a machine and a separate purchase of that machine cannot both be added. Measure actual complete configuration mass M if count/mass conversion is needed; Item(s) is not kg and no machine mass or lifetime is supplied. Actual service h must match a complete real provider history and observed original-cohort use, unused/unassigned capacity and inherited burdens; physical fleet kg is not scaled by a service share. Separately supplied oil/filter/belt and whole contaminated removed items need their own atomic interfaces when actually present; contained parts remain nested in a whole asset. Receipt/return/shipment/retirement cards disclose physical V only; they are not a second capital purchase when the actual compatible service history already owns the same upstream manufacture. Actual provider-service scope and separately metered operation/repair must be nonoverlapping. A cotton cloth has the same full gross receipt/return/whole-waste and opening/closing fleet record; actual laundering or replacement must carry all disjoint real provider and utility burdens. No cloth lifetime or laundering load is assumed.

The supplied GPPS is physically melted and moulded; this route does not prescribe polymer synthesis, an on-site tip metallurgy unit or ink formulation. Any actual chemical change nevertheless requires independently established formation G_i and consumption C_i for its species; total wet mass and elements do not create a net chemical mass source. No resin monomer content, total VOC, COD, odour or balance residual identifies a released molecule. Use the complete EPA320 heated extractive FTIR programme only for actual identified IR-active vapor species with compatible reference spectra, actual interferants, background/temperature/pressure basis, representative transport, analyte-spike recovery and uncertainty checks. It does not measure homonuclear N2/O2 or monatomic Ar, particulate, liquid/mist or totalVOC chemistry. Actual collected condensate or cleaning liquid is one whole physical receiver transfer, separate from any actual final released species/phase. The actual full50-page dated Method320 PDF includes its FTIR Protocol and appendices; no referenced-only/missing-Protocol claim is made. Its PDF16 Eq3/4 use a tracer mixture fraction but the same-page DF>=10 legend is inconsistent: retain source bytes and use common corrected mole-basis phi=(tracer_spiked-tracer_native)/(tracer_direct-tracer_native), denominator nonzero, actual representative matched no-unaccounted-loss mixing, and expected analyte=phi*analyte_direct+(1-phi)*analyte_native. Phi is distinct from the reciprocal dilution ratio; this physical identity is no numerical setting or acceptance tolerance. Actual duct flow needs source-compatible complete geometry/traverse and calibrated velocity/state/density procedures; Methods1–3 originals are retained with their non-cyclonic/size/location, restricted gas-matrix/interference and argon-omission limits. Their unabsorbed N2/CO remainder is not pure N2 or measured Ar. A duct result is not automatically a whole fugitive-source inventory. The retained Method18 excludes compounds that can polymerize before analysis, so its title is not proof of styrene sample stability or a substitute for a demonstrated applicable programme. Neither this source set nor a future SOP establishes every unidentified ink/cleaner molecule, hot wet mist, sorption/phase transfer or reactive matrix. A genuinely necessary unestablished specific programme remains hold; ordinary actual lot/site calibration and recovery within an established applicable programme remain study qualification, not proof no method exists. No actual release or successful QA is presumed. These dated EPA copies and this technical synthesis are not a claim of regulatory conformity, scientific acceptance or complete actual-factory inventory.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset only after actual data completeness and appropriate review |
| downstream_use | Declared complete capped ballpoint pen manufacturing with actual boundary/provider and observed service disclosure |
| allowed_use | Compatible whole-product mass-based supply-chain studies with matching route, supply forms and native restrictions |
| excluded_use | Automatic full-CPC coverage, loose parts/ink, incompatible pen mechanisms, performance/lifetime equivalence, unknown future services or unmeasured factory values |
| required_metadata | All section3 qualifiers; native/product/provider restrictions; whole supply bridges; Q/Qc events; original raw/WIP/FG/return/packaging vectors; actual temporal/geographical scope |
| required_quality_disclosure | Actual measurement uncertainty and coverage, source applicability, independent physical/species balances, failed/Q0 history, one normalization, auxiliary identity/provider gaps and actual review state |
| update_trigger | Change of whole-product construction, supply form, ink chemistry, manufacturing route, native property/unit, provider/geography, terminal gate, observation window or evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-structure-2025 | official_guidance | UNSD, CPC Version3.0 structure, 30 June2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Complete38911 title, parent and adjacent categories; not whole-category manufacturing method or mapping acceptance |
| bic-cristal-construction-2025 | handbook | BIC, BIC Cristal 75 years of inspiration, 2025, complete press kit; PDF5–6 / printed8–11; https://mediabic.bic.com/image/upload/v1758021347/Press_kit_BIC_Cristal_75_ans_EN_6d77fc7443.pdf | Qualitative whole capped pen and PS barrel, PP reservoir, brass/WC tip, cap, plug and contained ink; no default weight, fill, dimensions, performance or certification |
| bic-integrated-manufacture-history | handbook | BIC official industrial history, PDF26–28 including printed24–25, historical integrated process; https://mediabic.bic.com/image/upload/v1718724748/BIC_LIVRE_GB_US_Pa_P_a97512712b.pdf | Historical injection-moulded pen-body and integrated component/ink technology context; not contemporary site supply gate, BOM, output, yield or energy |
| toptip-inj34-refill-assembly | handbook | TopTip, Refill Assembly Machine INJ34, complete manufacturer page; https://toptip-swiss.com/public/inj34.php | Blank-tube whole-ink filling then supplied-tip insertion and actual missing-component stoppage context; optional printing/spring crimp not assumed, practically-no-waste not a zero loss |
| ilcd-attributional-allocation-2010 | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA Detailed guidance, first edition March2010, §§7.9.2–7.9.3, printed255–265 / PDF275–285; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Applicable attributional subdivision/virtual subdivision, exchange-specific determining physical causality and genuinely residual concurrent common-gate market value; retain parallel/serial and adjacent QFD counterexamples, no copied ratio |
| epa-method320 | official_guidance | US EPA Method320,14Jan2019,complete dated50-page method/FTIR Protocol/appendices. https://www.epa.gov/sites/default/files/2019-06/documents/method_320.pdf | Actual identified IR-active vapor programme; source DF inconsistency transparently corrected on physical mole basis; no all-matrix or actual QA claim. |
| epa-method1 | official_guidance | US EPA Method1,28Apr2020,complete dated Internet copy. https://www.epa.gov/sites/production/files/2017-08/documents/method_1_3.pdf | Actual source geometry/traverse/non-cyclonic/size/location limits, no generic duct qualification. |
| epa-method2 | official_guidance | US EPA Method2,2Aug2017,complete dated Internet copy. https://www.epa.gov/sites/default/files/2017-08/documents/method_2.pdf | Actual calibrated velocity/pressure/temperature/density/flow, no nominal air recipe. |
| epa-method3 | official_guidance | US EPA Method3,3Aug2017,complete dated Internet copy. https://www.epa.gov/sites/default/files/2017-08/documents/method_3.pdf | Restricted gas matrix and interferences; N2/CO remainder and argon-omission counterevidence. |
| epa-method18-counter | official_guidance | US EPA Method18,1Apr2025,complete dated Internet copy. https://www.epa.gov/system/files/documents/2025-04/m-18-04012025_0.pdf | Scope explicitly excludes compounds that can polymerize before analysis; title alone does not prove styrene sample stability or applicable matrix procedure. Counterevidence only, not adopted universal styrene method. |
