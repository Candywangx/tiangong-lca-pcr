---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.manual-folding-steel-rib-rain-umbrella
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Manual folding steel-rib rain umbrella

Normative scope is this complete manufacturing profile. Read the whole section and its conditions before applying an individual rule. A scientific conclusion or translation approval is not implied by an engineering check.

## 1. Scope and Applicability

This manufacturing profile covers one complete non-electric handheld manual folding rain umbrella: a supplied folding frame with steel ribs and a metal shaft, a purchased finished polyester canopy fabric, a supplied plastic handle, and its declared functional fittings and matching reusable fabric sleeve. The whole finished Product family is narrowed by these physical qualifiers; it is never an exchange combining umbrellas with walking-sticks, seat-sticks, whips or riding-crops. Steel-rib construction is required for this profile; aluminium- or glass-fibre-rib variants require a reviewed extension. Loose ribs, umbrella cloth and pre-cut panels alone cannot be the finished reference product.

Peerless Style 0001 establishes a real manual folding product with steel ribs, a metal shaft, polyester canopy, plastic handle and matching sleeve. HF supplies complete manufacturing context; CITTA independently corroborates textile cutting, sewing, assembly and finished-goods checking. These sources are a transparent technical synthesis, not records of one SKU or factory order. This profile chooses receipt of a completed frame and finished roll fabric, then canopy and sleeve cutting/sewing, fitting, mechanical assembly, actual testing/cleaning and first whole-product quality release. Onsite fibre formation, metallurgy, frame fabrication, coating, printing and adhesive curing are not inferred from an assembly account. Sources: `peerless-style-0001`; `hf-manufacturing-2025`; `citta-factory`.

Record actual configuration and order requirements. No default umbrella weight, rib count, canopy area, fabric areal mass, dimension, density, finish chemistry, yield, drying temperature/time, weather rating, lifetime, age suitability, certification or emission factor is supplied. Marketing descriptions and AQL examples establish neither service-life equivalence nor a universal acceptance threshold. An undisclosed water-repellent treatment is not evidence for a fluorinated, PU or silicone formulation.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.manual-folding-steel-rib-rain-umbrella |
| classification_refs | CPC 3.0 38921; narrower product and route boundary |
| covered_products | Complete manual folding handheld rain umbrellas with steel ribs, metal shaft, polyester canopy, plastic handle and declared functional sleeve |
| excluded_products | Walking-sticks; seat-sticks; whips; riding-crops; separately sold parts; powered umbrellas; glass-fibre/aluminium-rib variants; straight umbrellas; architectural sunshades; tents; rainwear; purchased finished umbrellas merely repacked |
| representative_product | One declared configuration of whole manual folding rain umbrella, including its functional fabric sleeve |
| production_route | Supplied complete frame and finished polyester roll fabric → cutting/sewing canopy and sleeve → canopy/frame fitting and mechanical assembly → actual quality tests/finishing → unique first whole release; observed storage/packing/dispatch services separately linked to original release |
| market_state | New complete manufactured Product at first quality release, net of transport packaging and in the declared measured conditioning state |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply the complete handheld rain-protection article of the declared construction |
| How much | 1 kg net newly first-released whole product; retain configuration-specific complete-article count |
| How well | Actual BOM, opening/closing/locking, canopy attachment and order-specific release criteria; no unmeasured rain/wind or lifetime claim |
| How long or cycle | One observed production window and disclosed post-release service horizon; future operation/lifetime is unknown and excluded |
| reference_flow_link | `first_whole_release` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Umbrellas, sun-umbrellas, walking-sticks, seat-sticks, whips, riding-crops and the like `69c7bd8d-a65a-4c23-8099-e613abbff073` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | manual folding configuration and unique article/lot identifiers; steel rib construction and metal shaft identity; runner/button/lock/spring and frame supply boundary; polyester fabric construction and complete supplied finishing state; handle polymer/composite and fitting method; actual top cap/tip/washer/strap/wrist-loop/label identities and disjoint BOM; functional reusable sleeve versus disposable shipping bag; actual count/dimensions and measured net whole-product mass/conditioning; first whole quality release gate and release cohort; test scope and wet-product water retention/drying; factory/year/geography and observed post-release horizon; supplier/provider boundaries and upstream burdens; raw/WIP/FG/packaging inventories and inherited exchange vectors; waste status/destination and actual treatment; meter voltage/water quality and packaging pool identities |

One physical whole manufactured manual folding steel-rib umbrella with metal shaft, polyester canopy, plastic handle and declared functional sleeve; production mix at plant, finished-product/manufactured route. The official broad family basename is preserved, but only this article is exchanged; it never aggregates canes/whips or loose parts. No fixed native composition, CAS, rib count, performance or item mass is supplied. Actual provider and supply boundary must match this narrowed configuration.

All required qualifiers belong in dataset metadata or equivalent full reference context. Product net mass includes actual component/retained water and the functional sleeve once; shipping cartons/bags/tape/crates are separately inventoried packaging.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is the sum of measured net masses at each unique first whole-product quality release, including the declared functional sleeve and retained constituent water once. Use calibrated scales and the same BOM/conditioning scope under cp_release. Already released closing FG is already in Q; do not subtract it as manufacturing closing output. |
| `count_mass` | count-based incoming records | Mass | kg | For one same-configuration complete article define measured net mass M using calibrated whole-article weighing under cp_release; for counted component lots use independently measured lot-specific unit mass, sample size and uncertainty. Convert count to mass before the single normalization. Never infer umbrella mass from carton shipping weight or a secondary property. |
| `fabric_geometry` | canopy and sleeve fabric | Mass | kg | Weigh complete finished roll fabric as supplied. Area/length records require actual width and same-lot measured areal mass. Nonrectangular canopy area is measured from the real panel geometry, not a bounding rectangle. Coating, contained water and polyester remain non-additive composition subledgers of one purchased fabric. |
| `utility_units` | electricity and water | native property | MJ; kg | Keep raw meter units and convert kWh × 3.6 to MJ once. Water mass is independently weighed; volume requires measured substance/state-specific density. Integrated gas/liquid volumes are not multiplied by time again; actual rates are integrated over the measured interval. Do not use water density for another substance or the native water secondary volume coefficient as a measured density. |
| `physical_versus_burden` | all gates | native property | kg; MJ | Every physical receipt/dispatch/return/waste retains full gross V in its native unit and the correct Q or original Qc denominator. Allocation applies only to associated burden vectors and never scales the physical transfer. Incoming article mass and embedded component/water mass cannot both be added to the same side. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received completed folding steel-rib frame with metal shaft, finished polyester fabric and supplied fittings; actual utilities and packaging at the controlled factory boundary |
| starting_condition_role | Material/component supplier handover to complete umbrella manufacture |
| product_classification_scope | One complete manual folding rain-umbrella profile within CPC 3.0:38921; no claim for the other original-category products |
| recursive_input_rule | A purchased complete umbrella is recorded once with its historical burden and physical state. Mere repacking/reinspection is a service linked to its original Qc, not new umbrella manufacture. Supplied complete frames and finished fabric carry upstream manufacturing/finishing once. |
| upstream_dataset_requirement | Match supplied state, steel/frame process, polyester fabric/finish, handle composition, each utility and each packing article to compatible providers; disclose gaps without inventing material conversion or performance |
| disclosure | Factory, reporting window, manufacture gate, Q cohorts, observed service horizon H, supplied BOM overlap, upstream/transport coverage, actual wet testing and drying, stock/vector continuity, waste recipients and all exclusions |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_core` | manufacture | Cover receipt and inspection of supplied materials, cutting/sewing, mechanical frame/canopy joining, fitting, actual inspection, cleaning, failures, rework and unique first complete release. A whole output contains the complete actually declared functional BOM: shaft/ribs/canopy/handle and matching sleeve, plus every real stretcher/runner/lock/button/spring/wrist loop/cap/tip/washer/strap when present in that configuration; this list does not invent a part, mechanism or quantity. A component already included in a supplied frame is not bought again. | `hf-manufacturing-2025`; `peerless-style-0001`; `citta-factory` |
| `boundary_supply` | supplier versus onsite route | Choose disjoint supplied articles and separate components, or document a reconciled bridge cancelling internal handovers. Purchased finished fabric includes its actual coating/finish once; no parallel polymer/waterproof-agent purchase is added. Onsite frame/shaft fabrication, coating, printing or formulation requires actual primary route support and additional named materials, formulations, energy, losses and emissions before an expanded-profile result. | `hf-manufacturing-2025` |
| `boundary_q` | release gate and failures | Q counts only newly first-released complete articles at original measured state. Exclude unaccepted WIP/rejects from Q but retain every failed/zero-output batch, start/stop, idle, cleanup, actual test and unauthorized/failed rework burden and physical movement. Drying, natural moisture exchange, return, delivery, repair and repeated inspection do not create a second first release. For Q=0 retain the full raw ledger and inherited vectors; issue no unit result. |  |
| `boundary_stocks` | manufacturing physical closure | At the actual wet manufacture gate O_raw+O_WIP+O_nonWIP+I_phys+ER_pre+U_air+H2O_in=C_raw+C_WIP+C_nonWIP+T_accept+W_man+E_man+EO_pre+T_other+H2O_out; at actual FG service gate O_FG+T_accept+ER_FG+I_incremental+J_in+H2O_in=C_FG+S_gross+EO_FG+W_FG+E_FG+J_out+H2O_out. Every term is actual and disjoint: whole I_phys/I_incremental includes all true additional matter, not only what remains in C, and separate J/H2O excludes amounts already in whole legs. T_other is only actual named atomic transfers. Combine gates and cancel one matched actual T_accept, never Q0 as a second external product. T_accept is the actual physical transfer at the declared manufacture-to-FG-service gate; Q0 is the separately measured first-release reference-event denominator. Where the same configuration, state, event and window make them coincide, demonstrate that equality from independent records, never fit Q0 from physical closure. The finished reference row declares the unit and is not another external shipment. Manufacturing, FG-service and consolidated gates retain every real wet stock and gross exchange; consolidation cancels the one actual internal T_accept only, not external dispatch or real return. For an actually reacting species i, keep measured G_i formation and C_i consumption in its species equation; do not conserve reacting molecules by assumption or infer them from elemental closure. Chemical reactions create no net total-mass/element source; phase transfer is not chemical creation. Water additions/evaporation and all other terms must be mutually disjoint from water already included in whole supplied articles, carrier legs or releases. Unknown terms remain unresolved, not residual-fitted. |  |
| `boundary_fg` | observed post-release services | Keep original Qc and historical burdens for opening/closing FG, gross dispatches, external return receipts and outward returns. Record all actually performed storage/handling/packing/retesting/rework/disposal within observation H against original Qc; future unperformed services remain unknown. Record original dispatch and any real reversal separately, without creating manufacture credit or deleting failed/unauthorized movement. Internal first-release FG handover cancels when manufacture and service gates are combined. |  |
| `boundary_packaging` | each identified packaging pool | For each actual whole wet corrugated-carton, PE-bag, sealing-tape or plastic-crate pool use O_empty+O_attachedWIP+O_attachedFG+O_reusable+P+I_other+ERin+J_in+H2O_in-X_in=C_empty+C_attachedWIP+C_attachedFG+C_reusable+S_gross+EOout+W_whole+J_out+H2O_out-X_out. I_other is the sum of actual separately identified otherwise received whole packaging, including real supplier-included packaging when present, distinct from P and ERin and not another purchase; internal reuse R_internal cancels between matched positions and is not I_other. J is additional real non-water material and H2O is additional actual water transfer only to the extent not already included in another whole wet leg. O/C and every whole leg retain all contained matter: actual new material/water retained in C never erases its true influx. X subtracts only independently proved overlap with OTHER same-side flow terms, never C, real increments, opposite directions or card existence. Trace actual J/water sources/destinations with specific physical records and internal pairs; do not invent a generic provider, extra Q, separate constituent waste or balancing flow. Gross shipments, external returns received/sent and true whole waste stay physically full regardless of environmental use shares. These four specific article pools are conditional on actual configuration; these are actual conditional packaging choices, not a universal material, tare, repair, water uptake or mass. The inherited I cards mean this I_other whole-article transfer, never the internal R_internal loop or a generic unknown balancing addition. |  |
| `boundary_waste` | waste and molecular releases | Use one measured mixed-assembly Waste stream only when genuinely collected mixed, with independently measured originW subaccounts that do not add again to its total. A separately collected waste and its mixed-stream share cannot both leave the gate. Keep recipient/type/state and wet mass; external treatment is linked once. Add each actually identified elementary species/media separately. COD/VOC/PM/NOx indicators are not particular molecular masses; no assumed combustion, steam/boiler, gas chemistry or reaction water is created. |  |
| `boundary_heat_returns` | additional real carriers | If actual heat-carrier Product returns, components, assets or fluids cross either gate, add individual gross native-unit cards and retain state/phase/temperature/pressure/enthalpy and the supplier water/energy convention. One supplier service is not purchased both as physical carrier and heat MJ. X deduplicates only an identified same-side OTHER transfer; it cannot offset stock, the opposite side or an omitted card. |  |

Ordinary coating-provider or auxiliary identity gaps do not erase real operations. If an actual route or whole-product identity falls outside this profile, report that scope as incomplete; do not invent a successful process or replace it with purchased finished-product repacking.
| cohort_full_fates | actual declared configuration | For the newly accepted cohort Q=Q0. Q0 is independently fixed from unique first quality-release events for complete same-configuration umbrellas after every required factory operation and test, ready for the declared factory supply gate. It includes the declared functional matching reusable sleeve and all actual retained articles and water at release and excludes outer packaging tare. Reconcile each original Q0 on its original-material/configuration basis across disjoint net remaining external deliveries, every actual on-site accepted FG/held/returned/rework state, irreversible losses and other terminal dispositions. Gross return first leaves its old delivery position. Dispatch, return, repacking, retest or reacceptance never creates new Q. Current surviving wet mass and original water/material losses cannot both be restored and counted again. Opening old cohorts and later observed-H services use original Qc/Q0, not current output; delivery plus closing FG is sufficient only when all other postgate states/exits are absent. Q=0 or unknown retains actual raw loads without a per-unit result. | ilcd-detailed-2010 |
| provider_history | actual declared configuration | Keep complete physical raw/WIP/non-WIP/FG/return, packaging, installed-fluid and every actual equipment-fleet ledger separate from reference events and per-exchange burden vectors. Own opening WIP carries actual earlier foreground burdens once; only substantiated still-unused/unassigned closing WIP carries them forward. For attribution, A may add unassigned inherited opening burden to period raw burden and remove only demonstrated still-unassigned closing burden and a disjoint justified other-system/cohort handover. Already-net consumption is not stock-corrected a second time; accepted closing FG and services already performed for it are not deleted. A complete provider aggregate and its embedded material/transport/asset/history decomposition are mutually exclusive. Preserve failed attempts, idle/start-stop, inspection, samples, cleanout and repair loads. Actual complete upstreams match the whole supplied article/preparation and true availability point; no receipt or purchased-service label hides known on-site manufacture. Actual provider inclusion schedules cover current electricity, repair, transport and operating supplies as well as capital: an aggregate already including a metered foreground operation and that separate operation cannot both be charged. | ilcd-detailed-2010 |
| physical_transfer | actual declared configuration | T_accept is the actual physical transfer at the declared manufacture-to-FG-service gate; Q0 is the separately measured first-release reference-event denominator. Where the same configuration, state, event and window make them coincide, demonstrate that equality from independent records, never fit Q0 from physical closure. The finished reference row declares the unit and is not another external shipment. Manufacturing, FG-service and consolidated gates retain every real wet stock and gross exchange; consolidation cancels the one actual internal T_accept only, not external dispatch or real return. For an actually reacting species i, keep measured G_i formation and C_i consumption in its species equation; do not conserve reacting molecules by assumption or infer them from elemental closure. Chemical reactions create no net total-mass/element source; phase transfer is not chemical creation. Water additions/evaporation and all other terms must be mutually disjoint from water already included in whole supplied articles, carrier legs or releases. Unknown terms remain unresolved, not residual-fitted. | ilcd-detailed-2010 |
| whole_wet_pack | actual declared configuration | For each actual whole wet corrugated-carton, PE-bag, sealing-tape or plastic-crate pool use O_empty+O_attachedWIP+O_attachedFG+O_reusable+P+I_other+ERin+J_in+H2O_in-X_in=C_empty+C_attachedWIP+C_attachedFG+C_reusable+S_gross+EOout+W_whole+J_out+H2O_out-X_out. I_other is the sum of actual separately identified otherwise received whole packaging, including real supplier-included packaging when present, distinct from P and ERin and not another purchase; internal reuse R_internal cancels between matched positions and is not I_other. J is additional real non-water material and H2O is additional actual water transfer only to the extent not already included in another whole wet leg. O/C and every whole leg retain all contained matter: actual new material/water retained in C never erases its true influx. X subtracts only independently proved overlap with OTHER same-side flow terms, never C, real increments, opposite directions or card existence. Trace actual J/water sources/destinations with specific physical records and internal pairs; do not invent a generic provider, extra Q, separate constituent waste or balancing flow. Gross shipments, external returns received/sent and true whole waste stay physically full regardless of environmental use shares. These four specific article pools are conditional on actual configuration; these are actual conditional packaging choices, not a universal material, tare, repair, water uptake or mass. The inherited I cards mean this I_other whole-article transfer, never the internal R_internal loop or a generic unknown balancing addition. | ilcd-detailed-2010 |
| receiver_service | actual declared configuration | One actual contaminated film, carton, cloth, machine, filter, rejected umbrella part or liquid consignment has one whole receiver event Qt containing substrate/article, retained fabric/soil/finish matter and water once. Dry tare and measured originW/components are nonadditive nested analyses, not extra exported wastes unless physically separated before the boundary. Match its actual receiver/treatment/provider and extensive unit. Physical Qt and Qt/Q disclosure are not automatically the service demand: use only evidenced compatible nonoverlapping service A with the original cohort Qc/Q0, keeping physical transfer full. Unknown attribution remains unknown. Arithmetic illustration only: a shared10kg consignment is never shrunk to2.5kg by25% attribution and never charged as10kg again to every cohort. Different dry/wet or provider units require the actual full-composition/state bridge, not a hidden conversion or pure-component proxy. | ilcd-detailed-2010 |
| actual_fleets | actual declared configuration | Every actual sewing machine, cutting tool, tool, extraction/handling unit and reusable cloth keeps a complete actual configured fleet: new/used receipts, external returns received/sent, real retirement/whole waste, installed/opening/closing holdings and disjoint repair/fluid changes. HF and CITTA manufacturing context shows actual sewing/cutting operations, not the same Peerless plant, installed machine or shared SKU. A whole line/provider already including a machine and a separate purchase of that machine cannot both be added. Measure actual complete configuration mass M if count/mass conversion is needed; Item(s) is not kg and no machine mass or lifetime is supplied. Actual service h must match a complete real provider history and observed original-cohort use, unused/unassigned capacity and inherited burdens; physical fleet kg is not scaled by a service share. Separately supplied oil/filter/belt and whole contaminated removed items need their own atomic interfaces when actually present; contained parts remain nested in a whole asset. Receipt/return/shipment/retirement cards disclose physical V only; they are not a second capital purchase when the actual compatible service history already owns the same upstream manufacture. Actual provider-service scope and separately metered operation/repair must be nonoverlapping. A cotton cloth has the same full gross receipt/return/whole-waste and opening/closing fleet record; actual laundering or replacement must carry all disjoint real provider and utility burdens. No cloth lifetime or laundering load is assumed. | ilcd-detailed-2010 |
| actual_method | actual declared configuration | This profile receives already finished canopy fabric and a complete frame. Matching sleeve colour or appearance does not prove the same fibre, finish or areal mass as the canopy. One polyester input card covers only real cuts from the same independently verified supplied textile; a genuinely different sleeve, reinforcement or strap material needs its own specific atomic article/provider and actual cutting record before completeness, never a guessed composition or duplicate whole-fabric purchase. Real prior fibre formation, weaving/dyeing/coating/printing and frame metallurgy/forming/finishing remain inside their complete compatible actual upstream providers once. An actual known on-site operation is not moved upstream by renaming a receipt. HF factory-tour fiberglass golf ribs, epoxy versus screws, eight-gores, test-cycle and spray examples are retained contrary context, not requirements for this steel-rib manual folding profile. Actual supplied finish chemistry, printed/dyed or RPET variants and all real order-specific operations must be disclosed; no finish, adhesive, fluorinated substance, cleaner molecule or emission is inferred. The actual whole assembled product is independently weighed in its declared conditioning state; a wet-dry article difference is not automatically water if finish, soil or other matter also changes. Establish liquid/retained/vapor water independently with actual compatible sampling and all real transfers; do not label a drain, droplet/mist or collected liquid as vapor. Where actual identified IR-active vapor measurement is required, the retained complete EPA320 method and its actual FTIR Protocol supply heated extractive transport/reference-spectrum/interference/background/state/analyte-spike-recovery and uncertainty procedures within their real scope. This is not a particulate/mist/totalVOC method or FTIR measurement of homonuclear N2/O2/monatomic Ar; no source-specific actual release, calibrated reference, matrix recovery or field eligibility is claimed. Its complete dated50-page PDF includes the FTIR Protocol/addendum/appendices, not an unavailable reference. PDF16 Eq3/4 use a tracer mixture fraction while the same-page DF>=10 legend conflicts: preserve original bytes and distinguish conserved corrected common-mole-basis phi=(tracer_spiked-tracer_native)/(tracer_direct-tracer_native), nonzero denominator, representative matched no-unaccounted-loss mixing, expected analyte=phi*analyte_direct+(1-phi)*analyte_native, from its reciprocal dilution ratio. This identity supplies no numerical concentration, setting or acceptance tolerance. Full Methods1–3 retain actual source geometry/traverse/non-cyclonic/size/location and calibrated velocity/state/density/flow restrictions; Method3 restricted matrix/interferences, N2/CO remainder and argon omission are not universal air composition, pure N2 or measured Ar. A duct result is not automatically uncontained fugitive-source coverage. Real collected condensate/mist/effluent is one whole wet receiver event, separate from actual final released species/medium. An actual necessary unestablished specific sampling/preservation/matrix/phase programme remains hold, not solved by a future SOP or finitecheck. Routine actual calibration/sampling/recovery in an already established eligible programme remains study qualification, not proof no method exists. No combustion, boiler, reacting water or thermal-drying recipe is presumed; any actual on-site generation requires its full real producer, fuels/air/O2/water/species/control/energy/waste interfaces and applicable methods before completeness. These dated EPA Internet copies do not assert regulatory conformity or actual study success. | epa-method320; epa-method1; epa-method2; epa-method3 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | Cut, sew, fit, assemble, test/clean and first whole release | required | Actual operations from received supplied articles | foreground | per 1 kg reference flow |
| fg_service | Observed original-cohort storage/packing/handling/dispatch and real repair | conditional | All actual services and gross movements within H; actual packaging even if no sale | foreground_service | per 1 kg reference flow |
| factory_assets | Actual complete sewing-machine fleets and service | required | Actual configured separate units only, one whole line/provider not duplicated by its included unit | foreground | per 1 kg reference flow |

Cards describe one actual exchange. A conditional row is absent only with recorded physical evidence; actual unlisted inputs, component returns, treatment outputs or species require additional atomic cards before a complete dataset. Card quantity text and protocol aggregation labels identify the result of the single section 8 normalization; they perform no new arithmetic.

### Process: Complete umbrella manufacture (`manufacture`)

#### Inputs

##### Product flows

###### Finished cotton cleaning wipe (`manufacture_cleaning_wipe`)

Conditional real supplied cotton cleaning wipe used for physical surface cleanup. Verify actual cotton fabric and any supplied treatment; the wipe must be suitable for physical surface cleanup rather than a water-treatment medium. Keep the complete supplied article and actual wet/dirty end state without assumed solvent.

- Selected flow: Finished cotton cleaning wipe
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `peerless-style-0001`; `hf-manufacturing-2025`

###### Finished braided wrist-loop cord (`manufacture_wrist_loop`)

One actual supplied wrist-loop cord shown on the complete product, with supplier fibre/composition and mounting recorded. If already integral to the purchased handle it is a non-additive BOM subaccount, not another purchase; if separately supplied record the physical article once. Do not infer its fibre from the canopy.

- Selected flow: Finished braided wrist-loop cord
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `peerless-style-0001`; `hf-manufacturing-2025`

###### Completed folding steel-rib frame (`manufacture_frame`)

One supplied complete folding frame includes its shaft, ribs, stretchers, runner, locks/buttons and actual springs. Confirm metal grades, each incorporated polymer and surface state from the actual BOM; do not replace steel ribs by glass fibre/aluminium. Included frame subcomponents and their upstream forming/finishing are not added again.

- Selected flow: Completed folding umbrella frame with steel ribs and metal shaft
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `hf-manufacturing-2025`

###### Finished polyester canopy roll fabric (`manufacture_fabric`)

Record the complete supplied fabric once, including actual finish, colour, coating and contained moisture. Use one reconciled cutting ledger only for real canopy, reinforcement, strap and functional-sleeve cuts from this same independently verified supplied fabric. Matching appearance does not prove sleeve fibre/finish equivalence; actually different materials need their own specific atomic supply/provider record before completeness. Do not buy the same cloth twice or assume an unspecified water-repellent finish is PU, silicone or fluorochemical. This exchange is woven canopy fabric rather than mesh or nonwoven supply.

- Selected flow: Finished woven polyester umbrella fabric
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `hf-manufacturing-2025`

###### Sewing thread (`manufacture_thread`)

One supplied sewing-thread article/grade for canopy/sleeve/fitting stitches; its actual fibre, finish and loss must be evidenced independently rather than inferred from the canopy. Ordinary filament yarn explicitly excluding sewing thread or polyester/cotton blend does not identify this exchange.

- Selected flow: Finished umbrella sewing thread
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `hf-manufacturing-2025`

###### Supplied plastic handle (`manufacture_handle`)

Record the supplied handle article separately only when absent from the frame supply. Actual polymer, inserts, coating and installation are taken from the part specification; plastic does not imply PP, ABS or PVC. A telephone/helmet housing is not a handle.

- Selected flow: Finished plastic umbrella handle
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `hf-manufacturing-2025`

###### Separate rib-tip article (`manufacture_tip`)

Conditional actual supplied tip fitting when not included in the frame; document material and pieces/mass. Packaging closure caps and generic fabricated structures are not rib-tip identities.

- Selected flow: Finished umbrella rib-tip fitting
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `hf-manufacturing-2025`

###### Separate top-cap article (`manufacture_cap`)

Conditional one concrete supplied umbrella top cap, outside the frame supply only; record its material and fitting state. Do not adopt a plastic packaging closure cap for the canopy crown.

- Selected flow: Finished umbrella top-cap fitting
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `hf-manufacturing-2025`

###### Canopy crown washer (`manufacture_washer`)

Conditional actual sealing washer identified by supplier material/form; add no guessed rubber chemistry. A washer already built into frame/cap supply is a non-additive BOM subaccount.

- Selected flow: Finished canopy crown sealing washer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `hf-manufacturing-2025`

###### Supplied steel assembly screw (`manufacture_fastener`)

Only an actual steel screw used for assembly, production mix at plant GLO and auxiliary-fastener route. Record supplier grade, dimensions, coating and count-to-mass measurement; no automatic bolt/rivet substitution. Exclude screws already in a supplied frame/handle.

- Selected flow: Steel screw `895204f6-6425-4814-afc5-cb97e530e892`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `hf-manufacturing-2025`

###### Supplied identification label (`manufacture_label`)

Conditional actual supplied label with its own verified construction and material; do not infer polymer from the canopy or treat label yarn as a separately purchased ingredient.

- Selected flow: Finished sewn textile identification label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `hf-manufacturing-2025`

###### Supplied fastening closure strip (`manufacture_strap`)

Conditional actual hook-and-loop article only when separately purchased; strap fabric cut from the canopy roll remains in that roll ledger. Record complete as-supplied composition without guessed resin.

- Selected flow: Finished hook-and-loop umbrella closure strip
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `hf-manufacturing-2025`

###### Metered low-voltage factory electricity (`manufacture_electricity`)

Apply this identity only for CN grid-average consumption mix delivered to the user below 1 kV. Retain supply-meter voltage, geography, provider and upstream loss boundary. Use disjoint meters for cutting/sewing/assembly, actual test drying, idle/start-stop/cleanup and observed cohort services. Generation-only or differently located supply cannot substitute this consumption interface. Native Net calorific value uses Units of energy and MJ.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Sources:

###### Actual testing and cleaning tap water (`manufacture_water`)

Only actual treated municipal/potable supply at plant, not a natural-water extraction. Use for real spray testing/cleaning only; absence requires records, not a licence assumption. Native reference is Mass/kg; its secondary Volume coefficient is not a site density. Independently weigh or measure actual water density/state before a volume conversion; no default wet test volume or drying load.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Sources: `hf-manufacturing-2025`

###### Finished cotton cleaning wipe (`manufacture_cloth_erin`)

Every actual sewing machine, cutting tool, tool, extraction/handling unit and reusable cloth keeps a complete actual configured fleet: new/used receipts, external returns received/sent, real retirement/whole waste, installed/opening/closing holdings and disjoint repair/fluid changes. HF and CITTA manufacturing context shows actual sewing/cutting operations, not the same Peerless plant, installed machine or shared SKU. A whole line/provider already including a machine and a separate purchase of that machine cannot both be added. Measure actual complete configuration mass M if count/mass conversion is needed; Item(s) is not kg and no machine mass or lifetime is supplied. Actual service h must match a complete real provider history and observed original-cohort use, unused/unassigned capacity and inherited burdens; physical fleet kg is not scaled by a service share. Separately supplied oil/filter/belt and whole contaminated removed items need their own atomic interfaces when actually present; contained parts remain nested in a whole asset. Receipt/return/shipment/retirement cards disclose physical V only; they are not a second capital purchase when the actual compatible service history already owns the same upstream manufacture. Actual provider-service scope and separately metered operation/repair must be nonoverlapping. A cotton cloth has the same full gross receipt/return/whole-waste and opening/closing fleet record; actual laundering or replacement must carry all disjoint real provider and utility burdens. No cloth lifetime or laundering load is assumed. This card discloses only actual gross external cloth erin assigned to this one gate/event. Shared internal movement between manufacture and FG service is paired/cancelled, not an external return or second purchase; any one real receiver event is recorded once.

- Selected flow: Finished cotton cleaning wipe
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cloth_manufacture`
- Sources:


##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Unique first whole-product release (`first_whole_release`)

One physical whole manufactured manual folding steel-rib umbrella with metal shaft, polyester canopy, plastic handle and declared functional sleeve; production mix at plant, finished-product/manufactured route. The official broad family basename is preserved, but only this article is exchanged; it never aggregates canes/whips or loose parts. No fixed native composition, CAS, rib count, performance or item mass is supplied. Actual provider and supply boundary must match this narrowed configuration.

- Selected flow: Umbrellas, sun-umbrellas, walking-sticks, seat-sticks, whips, riding-crops and the like `69c7bd8d-a65a-4c23-8099-e613abbff073`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release`
- Sources: `peerless-style-0001`; `hf-manufacturing-2025`

###### Finished cotton cleaning wipe (`manufacture_cloth_eoout`)

Every actual sewing machine, cutting tool, tool, extraction/handling unit and reusable cloth keeps a complete actual configured fleet: new/used receipts, external returns received/sent, real retirement/whole waste, installed/opening/closing holdings and disjoint repair/fluid changes. HF and CITTA manufacturing context shows actual sewing/cutting operations, not the same Peerless plant, installed machine or shared SKU. A whole line/provider already including a machine and a separate purchase of that machine cannot both be added. Measure actual complete configuration mass M if count/mass conversion is needed; Item(s) is not kg and no machine mass or lifetime is supplied. Actual service h must match a complete real provider history and observed original-cohort use, unused/unassigned capacity and inherited burdens; physical fleet kg is not scaled by a service share. Separately supplied oil/filter/belt and whole contaminated removed items need their own atomic interfaces when actually present; contained parts remain nested in a whole asset. Receipt/return/shipment/retirement cards disclose physical V only; they are not a second capital purchase when the actual compatible service history already owns the same upstream manufacture. Actual provider-service scope and separately metered operation/repair must be nonoverlapping. A cotton cloth has the same full gross receipt/return/whole-waste and opening/closing fleet record; actual laundering or replacement must carry all disjoint real provider and utility burdens. No cloth lifetime or laundering load is assumed. This card discloses only actual gross external cloth eoout assigned to this one gate/event. Shared internal movement between manufacture and FG service is paired/cancelled, not an external return or second purchase; any one real receiver event is recorded once.

- Selected flow: Finished cotton cleaning wipe
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cloth_manufacture`
- Sources:


##### Waste flows

###### Actual discarded cotton cleaning wipe (`manufacture_spent_wipe`)

One actual contaminated film, carton, cloth, machine, filter, rejected umbrella part or liquid consignment has one whole receiver event Qt containing substrate/article, retained fabric/soil/finish matter and water once. Dry tare and measured originW/components are nonadditive nested analyses, not extra exported wastes unless physically separated before the boundary. Match its actual receiver/treatment/provider and extensive unit. Physical Qt and Qt/Q disclosure are not automatically the service demand: use only evidenced compatible nonoverlapping service A with the original cohort Qc/Q0, keeping physical transfer full. Unknown attribution remains unknown. Arithmetic illustration only: a shared10kg consignment is never shrunk to2.5kg by25% attribution and never charged as10kg again to every cohort. Different dry/wet or provider units require the actual full-composition/state bridge, not a hidden conversion or pure-component proxy.

Conditional separately collected spent wipe with its real absorbed water/soil and waste recipient. Measure wet mass and origin subaccount independently; if it is genuinely in the mixed assembly stream, use that one mixed total and do not emit the same wipe twice.

- Selected flow: Spent cotton cleaning wipe
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastes`
- Sources:

###### Polyester umbrella fabric cutting scrap (`manufacture_fabric_scrap`)

One actual contaminated film, carton, cloth, machine, filter, rejected umbrella part or liquid consignment has one whole receiver event Qt containing substrate/article, retained fabric/soil/finish matter and water once. Dry tare and measured originW/components are nonadditive nested analyses, not extra exported wastes unless physically separated before the boundary. Match its actual receiver/treatment/provider and extensive unit. Physical Qt and Qt/Q disclosure are not automatically the service demand: use only evidenced compatible nonoverlapping service A with the original cohort Qc/Q0, keeping physical transfer full. Unknown attribution remains unknown. Arithmetic illustration only: a shared10kg consignment is never shrunk to2.5kg by25% attribution and never charged as10kg again to every cohort. Different dry/wet or provider units require the actual full-composition/state bridge, not a hidden conversion or pure-component proxy.

Separately collected real cuttings/thread losses with actual finish/moisture and waste destination. Not an unknown mixed-fibre textile and not a second output when included in mixed waste.

- Selected flow: Polyester umbrella fabric cutting scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastes`
- Sources:

###### Steel umbrella-frame breakage scrap (`manufacture_steel_scrap`)

One actual contaminated film, carton, cloth, machine, filter, rejected umbrella part or liquid consignment has one whole receiver event Qt containing substrate/article, retained fabric/soil/finish matter and water once. Dry tare and measured originW/components are nonadditive nested analyses, not extra exported wastes unless physically separated before the boundary. Match its actual receiver/treatment/provider and extensive unit. Physical Qt and Qt/Q disclosure are not automatically the service demand: use only evidenced compatible nonoverlapping service A with the original cohort Qc/Q0, keeping physical transfer full. Unknown attribution remains unknown. Arithmetic illustration only: a shared10kg consignment is never shrunk to2.5kg by25% attribution and never charged as10kg again to every cohort. Different dry/wet or provider units require the actual full-composition/state bridge, not a hidden conversion or pure-component proxy.

Actual separately collected broken steel part, with other polymers/finishes separated or declared; not assumed stamping/bending waste from an onsite factory that does not form ribs.

- Selected flow: Steel umbrella-frame breakage scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastes`
- Sources:

###### Rejected complete umbrella for disposal (`manufacture_failed_umbrella`)

One actual contaminated film, carton, cloth, machine, filter, rejected umbrella part or liquid consignment has one whole receiver event Qt containing substrate/article, retained fabric/soil/finish matter and water once. Dry tare and measured originW/components are nonadditive nested analyses, not extra exported wastes unless physically separated before the boundary. Match its actual receiver/treatment/provider and extensive unit. Physical Qt and Qt/Q disclosure are not automatically the service demand: use only evidenced compatible nonoverlapping service A with the original cohort Qc/Q0, keeping physical transfer full. Unknown attribution remains unknown. Arithmetic illustration only: a shared10kg consignment is never shrunk to2.5kg by25% attribution and never charged as10kg again to every cohort. Different dry/wet or provider units require the actual full-composition/state bridge, not a hidden conversion or pure-component proxy.

Whole failed umbrella declared Waste with full wet physical mass and destination; prior first release history and any real repair are retained, and failed output is not deleted or renamed as a saleable Product. Do not add component waste twice.

- Selected flow: Rejected complete umbrella for disposal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastes`
- Sources:

###### Untreated umbrella spray-test and cleaning effluent (`manufacture_test_effluent`)

One actual contaminated film, carton, cloth, machine, filter, rejected umbrella part or liquid consignment has one whole receiver event Qt containing substrate/article, retained fabric/soil/finish matter and water once. Dry tare and measured originW/components are nonadditive nested analyses, not extra exported wastes unless physically separated before the boundary. Match its actual receiver/treatment/provider and extensive unit. Physical Qt and Qt/Q disclosure are not automatically the service demand: use only evidenced compatible nonoverlapping service A with the original cohort Qc/Q0, keeping physical transfer full. Unknown attribution remains unknown. Arithmetic illustration only: a shared10kg consignment is never shrunk to2.5kg by25% attribution and never charged as10kg again to every cohort. Different dry/wet or provider units require the actual full-composition/state bridge, not a hidden conversion or pure-component proxy.

One actual untreated effluent stream handed to its documented external treatment recipient; retain wet mass, samples and real separate contaminants. Neither manganese-slag washing wastewater nor secondary/tertiary-treated wastewater is its identity. COD is an indicator, not a molecular mass.

- Selected flow: Untreated umbrella spray-test and cleaning effluent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastes`
- Sources:

###### Actual mixed final-assembly and testing waste (`manufacture_mixed_waste`)

One actual contaminated film, carton, cloth, machine, filter, rejected umbrella part or liquid consignment has one whole receiver event Qt containing substrate/article, retained fabric/soil/finish matter and water once. Dry tare and measured originW/components are nonadditive nested analyses, not extra exported wastes unless physically separated before the boundary. Match its actual receiver/treatment/provider and extensive unit. Physical Qt and Qt/Q disclosure are not automatically the service demand: use only evidenced compatible nonoverlapping service A with the original cohort Qc/Q0, keeping physical transfer full. Unknown attribution remains unknown. Arithmetic illustration only: a shared10kg consignment is never shrunk to2.5kg by25% attribution and never charged as10kg again to every cohort. Different dry/wet or provider units require the actual full-composition/state bridge, not a hidden conversion or pure-component proxy.

Use only one genuinely mixed at-plant final-assembly/testing Waste collection, native production mix GLO. Independently measure originW for failed umbrella, textile, fitting and cleanup origins as non-additive subaccounts; choose this total or genuinely separated outputs for each physical quantity, never both. No default composition, quantity, treatment or credit follows from the UUID.

- Selected flow: Manufacturing waste, mixed `8a42279e-b14c-408f-98de-e52e0ea3ef3a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastes`
- Sources:

##### Elementary flows

###### Actual ordinary-water evaporation to air (`manufacture_water_vapour`)

This profile receives already finished canopy fabric and a complete frame. Matching sleeve colour or appearance does not prove the same fibre, finish or areal mass as the canopy. One polyester input card covers only real cuts from the same independently verified supplied textile; a genuinely different sleeve, reinforcement or strap material needs its own specific atomic article/provider and actual cutting record before completeness, never a guessed composition or duplicate whole-fabric purchase. Real prior fibre formation, weaving/dyeing/coating/printing and frame metallurgy/forming/finishing remain inside their complete compatible actual upstream providers once. An actual known on-site operation is not moved upstream by renaming a receipt. HF factory-tour fiberglass golf ribs, epoxy versus screws, eight-gores, test-cycle and spray examples are retained contrary context, not requirements for this steel-rib manual folding profile. Actual supplied finish chemistry, printed/dyed or RPET variants and all real order-specific operations must be disclosed; no finish, adhesive, fluorinated substance, cleaner molecule or emission is inferred. The actual whole assembled product is independently weighed in its declared conditioning state; a wet-dry article difference is not automatically water if finish, soil or other matter also changes. Establish liquid/retained/vapor water independently with actual compatible sampling and all real transfers; do not label a drain, droplet/mist or collected liquid as vapor. Where actual identified IR-active vapor measurement is required, the retained complete EPA320 method and its actual FTIR Protocol supply heated extractive transport/reference-spectrum/interference/background/state/analyte-spike-recovery and uncertainty procedures within their real scope. This is not a particulate/mist/totalVOC method or FTIR measurement of homonuclear N2/O2/monatomic Ar; no source-specific actual release, calibrated reference, matrix recovery or field eligibility is claimed. Its complete dated50-page PDF includes the FTIR Protocol/addendum/appendices, not an unavailable reference. PDF16 Eq3/4 use a tracer mixture fraction while the same-page DF>=10 legend conflicts: preserve original bytes and distinguish conserved corrected common-mole-basis phi=(tracer_spiked-tracer_native)/(tracer_direct-tracer_native), nonzero denominator, representative matched no-unaccounted-loss mixing, expected analyte=phi*analyte_direct+(1-phi)*analyte_native, from its reciprocal dilution ratio. This identity supplies no numerical concentration, setting or acceptance tolerance. Full Methods1–3 retain actual source geometry/traverse/non-cyclonic/size/location and calibrated velocity/state/density/flow restrictions; Method3 restricted matrix/interferences, N2/CO remainder and argon omission are not universal air composition, pure N2 or measured Ar. A duct result is not automatically uncontained fugitive-source coverage. Real collected condensate/mist/effluent is one whole wet receiver event, separate from actual final released species/medium. An actual necessary unestablished specific sampling/preservation/matrix/phase programme remains hold, not solved by a future SOP or finitecheck. Routine actual calibration/sampling/recovery in an already established eligible programme remains study qualification, not proof no method exists. No combustion, boiler, reacting water or thermal-drying recipe is presumed; any actual on-site generation requires its full real producer, fuels/air/O2/water/species/control/energy/waste interfaces and applicable methods before completeness. These dated EPA Internet copies do not assert regulatory conformity or actual study success.

Only independently evidenced ordinary H2O evaporation from actual wet test/cleanup/drying or natural moisture loss, not fictional repair or reaction water. Keep liquid/retained/phase water separately and do not infer multiple unknown water/species flows from one residual. This is ordinary molecular H2O in vapour phase to air; isotopically enriched water and ice are excluded.

- Selected flow: Ordinary H2O water vapour to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastes`
- Sources: `epa-method320`

### Process: Observed finished-goods cohort services (`fg_service`)

#### Inputs

##### Product flows

###### Reusable plastic transport crate — I: other actual external receipt (`crate_i`)

One actual reusable plastic crate, native Mass/kg, without an asserted resin or manufacturing route. The retained CPC bags classification is an isolated classification defect, not evidence that this rigid crate is a bag; positive basename and physical supply are crate. Verify polymer, tare, supplier and real use/return history independently; do not purchase resin for an already supplied crate. I: one separately identified actual outside transfer of this same packaging article, distinct from P and ER. Record holder, unique transfer id, full gross V, original Qc and inherited vector, retaining empty/attached-WIP-FG/reusable opening and closing pools. Same-side X only removes a proven duplicate I, never stock or an opposite-side movement; it is not repurchase or automatic credit.

- Selected flow: Plastic crate `3eec684a-d54a-4c38-94af-77fd14d7f9b1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources:

###### Carton sealing-tape article — I: other actual external receipt (`tape_i`)

One actual supplied composite tape roll/article; record backing and adhesive from the supplier without inventing PP or solvent chemistry. A tape fixed to another industrial use is not interchangeable without supplier compatibility. I: one separately identified actual outside transfer of this same packaging article, distinct from P and ER. Record holder, unique transfer id, full gross V, original Qc and inherited vector, retaining empty/attached-WIP-FG/reusable opening and closing pools. Same-side X only removes a proven duplicate I, never stock or an opposite-side movement; it is not repurchase or automatic credit.

- Selected flow: Pressure-sensitive carton sealing tape
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources:

###### Disposable PE shipping bag — I: other actual external receipt (`pebag_i`)

One complete polyethylene shipping bag, CAS 9002-88-4, production mix at plant; use only when actual composition is PE and verify grade, additives and provider. It is detachable packaging, not the functional reusable polyester sleeve. Whole supplied bag is purchased once; do not buy its film/resin again. I: one separately identified actual outside transfer of this same packaging article, distinct from P and ER. Record holder, unique transfer id, full gross V, original Qc and inherited vector, retaining empty/attached-WIP-FG/reusable opening and closing pools. Same-side X only removes a proven duplicate I, never stock or an opposite-side movement; it is not repurchase or automatic credit.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources:

###### Corrugated transport carton — I: other actual external receipt (`carton_i`)

One real supplied corrugated shipping carton, composition, coatings and recycled content taken from actual supplier evidence. Fixed 16.6/83.4 fibre mix or a nondurable laminated folding carton is not assumed. I: one separately identified actual outside transfer of this same packaging article, distinct from P and ER. Record holder, unique transfer id, full gross V, original Qc and inherited vector, retaining empty/attached-WIP-FG/reusable opening and closing pools. Same-side X only removes a proven duplicate I, never stock or an opposite-side movement; it is not repurchase or automatic credit.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources:

###### Finished cotton cleaning wipe (`fg_service_cleaning_wipe`)

Only actual incremental use during H attached to original Qc, including failed/unauthorized work. Conditional real supplied cotton cleaning wipe used for physical surface cleanup. Verify actual cotton fabric and any supplied treatment; the wipe must be suitable for physical surface cleanup rather than a water-treatment medium. Keep the complete supplied article and actual wet/dirty end state without assumed solvent.

- Selected flow: Finished cotton cleaning wipe
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service_materials`
- Sources: `peerless-style-0001`; `hf-manufacturing-2025`

###### Finished braided wrist-loop cord (`fg_service_wrist_loop`)

Only actual incremental use during H attached to original Qc, including failed/unauthorized work. One actual supplied wrist-loop cord shown on the complete product, with supplier fibre/composition and mounting recorded. If already integral to the purchased handle it is a non-additive BOM subaccount, not another purchase; if separately supplied record the physical article once. Do not infer its fibre from the canopy.

- Selected flow: Finished braided wrist-loop cord
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service_materials`
- Sources: `peerless-style-0001`; `hf-manufacturing-2025`

###### Actual repair replacement: Completed folding steel-rib frame (`fg_service_frame`)

Only if actually installed in a previously released cohort during H; retain original Qc and incremental replacement burden, even for unauthorized/failed work. One supplied complete folding frame includes its shaft, ribs, stretchers, runner, locks/buttons and actual springs. Confirm metal grades, each incorporated polymer and surface state from the actual BOM; do not replace steel ribs by glass fibre/aluminium. Included frame subcomponents and their upstream forming/finishing are not added again.

- Selected flow: Completed folding umbrella frame with steel ribs and metal shaft
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service_materials`
- Sources: `hf-manufacturing-2025`

###### Actual repair replacement: Finished polyester canopy roll fabric (`fg_service_fabric`)

Only if actually installed in a previously released cohort during H; retain original Qc and incremental replacement burden, even for unauthorized/failed work. Record the complete supplied fabric once, including actual finish, colour, coating and contained moisture. Use one reconciled cutting ledger only for real canopy, reinforcement, strap and functional-sleeve cuts from this same independently verified supplied fabric. Matching appearance does not prove sleeve fibre/finish equivalence; actually different materials need their own specific atomic supply/provider record before completeness. Do not buy the same cloth twice or assume an unspecified water-repellent finish is PU, silicone or fluorochemical. This exchange is woven canopy fabric rather than mesh or nonwoven supply.

- Selected flow: Finished woven polyester umbrella fabric
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service_materials`
- Sources: `hf-manufacturing-2025`

###### Actual repair replacement: Sewing thread (`fg_service_thread`)

Only if actually installed in a previously released cohort during H; retain original Qc and incremental replacement burden, even for unauthorized/failed work. One supplied sewing-thread article/grade for canopy/sleeve/fitting stitches; its actual fibre, finish and loss must be evidenced independently rather than inferred from the canopy. Ordinary filament yarn explicitly excluding sewing thread or polyester/cotton blend does not identify this exchange.

- Selected flow: Finished umbrella sewing thread
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service_materials`
- Sources: `hf-manufacturing-2025`

###### Actual repair replacement: Supplied plastic handle (`fg_service_handle`)

Only if actually installed in a previously released cohort during H; retain original Qc and incremental replacement burden, even for unauthorized/failed work. Record the supplied handle article separately only when absent from the frame supply. Actual polymer, inserts, coating and installation are taken from the part specification; plastic does not imply PP, ABS or PVC. A telephone/helmet housing is not a handle.

- Selected flow: Finished plastic umbrella handle
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service_materials`
- Sources: `hf-manufacturing-2025`

###### Actual repair replacement: Separate rib-tip article (`fg_service_tip`)

Only if actually installed in a previously released cohort during H; retain original Qc and incremental replacement burden, even for unauthorized/failed work. Conditional actual supplied tip fitting when not included in the frame; document material and pieces/mass. Packaging closure caps and generic fabricated structures are not rib-tip identities.

- Selected flow: Finished umbrella rib-tip fitting
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service_materials`
- Sources: `hf-manufacturing-2025`

###### Actual repair replacement: Separate top-cap article (`fg_service_cap`)

Only if actually installed in a previously released cohort during H; retain original Qc and incremental replacement burden, even for unauthorized/failed work. Conditional one concrete supplied umbrella top cap, outside the frame supply only; record its material and fitting state. Do not adopt a plastic packaging closure cap for the canopy crown.

- Selected flow: Finished umbrella top-cap fitting
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service_materials`
- Sources: `hf-manufacturing-2025`

###### Actual repair replacement: Canopy crown washer (`fg_service_washer`)

Only if actually installed in a previously released cohort during H; retain original Qc and incremental replacement burden, even for unauthorized/failed work. Conditional actual sealing washer identified by supplier material/form; add no guessed rubber chemistry. A washer already built into frame/cap supply is a non-additive BOM subaccount.

- Selected flow: Finished canopy crown sealing washer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service_materials`
- Sources: `hf-manufacturing-2025`

###### Actual repair replacement: Supplied steel assembly screw (`fg_service_fastener`)

Only if actually installed in a previously released cohort during H; retain original Qc and incremental replacement burden, even for unauthorized/failed work. Only an actual steel screw used for assembly, production mix at plant GLO and auxiliary-fastener route. Record supplier grade, dimensions, coating and count-to-mass measurement; no automatic bolt/rivet substitution. Exclude screws already in a supplied frame/handle.

- Selected flow: Steel screw `895204f6-6425-4814-afc5-cb97e530e892`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service_materials`
- Sources: `hf-manufacturing-2025`

###### Actual repair replacement: Supplied identification label (`fg_service_label`)

Only if actually installed in a previously released cohort during H; retain original Qc and incremental replacement burden, even for unauthorized/failed work. Conditional actual supplied label with its own verified construction and material; do not infer polymer from the canopy or treat label yarn as a separately purchased ingredient.

- Selected flow: Finished sewn textile identification label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service_materials`
- Sources: `hf-manufacturing-2025`

###### Actual repair replacement: Supplied fastening closure strip (`fg_service_strap`)

Only if actually installed in a previously released cohort during H; retain original Qc and incremental replacement burden, even for unauthorized/failed work. Conditional actual hook-and-loop article only when separately purchased; strap fabric cut from the canopy roll remains in that roll ledger. Record complete as-supplied composition without guessed resin.

- Selected flow: Finished hook-and-loop umbrella closure strip
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service_materials`
- Sources: `hf-manufacturing-2025`

###### Metered low-voltage factory electricity (`fg_service_electricity`)

Apply this identity only for CN grid-average consumption mix delivered to the user below 1 kV. Retain supply-meter voltage, geography, provider and upstream loss boundary. Use disjoint meters for cutting/sewing/assembly, actual test drying, idle/start-stop/cleanup and observed cohort services. Generation-only or differently located supply cannot substitute this consumption interface. Native Net calorific value uses Units of energy and MJ.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service_utilities`
- Sources:

###### Actual testing and cleaning tap water (`fg_service_water`)

Only actual treated municipal/potable supply at plant, not a natural-water extraction. Use for real spray testing/cleaning only; absence requires records, not a licence assumption. Native reference is Mass/kg; its secondary Volume coefficient is not a site density. Independently weigh or measure actual water density/state before a volume conversion; no default wet test volume or drying load.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service_utilities`
- Sources: `hf-manufacturing-2025`

###### Internal receipt of first-released whole umbrellas (`internal_released_fg`)

One physical whole manufactured manual folding steel-rib umbrella with metal shaft, polyester canopy, plastic handle and declared functional sleeve; production mix at plant, finished-product/manufactured route. The official broad family basename is preserved, but only this article is exchanged; it never aggregates canes/whips or loose parts. No fixed native composition, CAS, rib count, performance or item mass is supplied. Actual provider and supply boundary must match this narrowed configuration. Internal receipt from first_whole_release only; cancel the verified identical transfer in the combined gate, preserve Q and original cohort and buy no new umbrella.

- Selected flow: Umbrellas, sun-umbrellas, walking-sticks, seat-sticks, whips, riding-crops and the like `69c7bd8d-a65a-4c23-8099-e613abbff073`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fg`
- Sources:

###### External returned whole article received (`fg_return_received`)

One physical whole manufactured manual folding steel-rib umbrella with metal shaft, polyester canopy, plastic handle and declared functional sleeve; production mix at plant, finished-product/manufactured route. The official broad family basename is preserved, but only this article is exchanged; it never aggregates canes/whips or loose parts. No fixed native composition, CAS, rib count, performance or item mass is supplied. Actual provider and supply boundary must match this narrowed configuration. Actual returned previously released article intended for documented reuse/rework, in actual accepted or rejected condition; not automatically Waste or newly purchased output. Preserve original dispatch/reversal and Qc. If genuinely Waste on receipt add a distinct actual Waste input rather than relabel it.

- Selected flow: Umbrellas, sun-umbrellas, walking-sticks, seat-sticks, whips, riding-crops and the like `69c7bd8d-a65a-4c23-8099-e613abbff073`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fg`
- Sources:

###### Corrugated transport carton — P: actual new outside purchase only (`carton_p`)

One real supplied corrugated shipping carton, composition, coatings and recycled content taken from actual supplier evidence. Fixed 16.6/83.4 fibre mix or a nondurable laminated folding carton is not assumed. P: actual new outside purchase only. Conditional on this real movement; preserve full gross V, original Qc and article-specific empty/attached-WIP/FG/reusable opening and closing pool. Internal reuse cancels and is not a second purchase; waste cannot use a Product UUID. This physical card exists even if no burden is newly purchased.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources:

###### Corrugated transport carton — ER: actual external-return receipt, not new purchase (`carton_er`)

One real supplied corrugated shipping carton, composition, coatings and recycled content taken from actual supplier evidence. Fixed 16.6/83.4 fibre mix or a nondurable laminated folding carton is not assumed. ER: actual external-return receipt, not new purchase. Conditional on this real movement; preserve full gross V, original Qc and article-specific empty/attached-WIP/FG/reusable opening and closing pool. Internal reuse cancels and is not a second purchase; waste cannot use a Product UUID. This physical card exists even if no burden is newly purchased.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources:

###### Disposable PE shipping bag — P: actual new outside purchase only (`pebag_p`)

One complete polyethylene shipping bag, CAS 9002-88-4, production mix at plant; use only when actual composition is PE and verify grade, additives and provider. It is detachable packaging, not the functional reusable polyester sleeve. Whole supplied bag is purchased once; do not buy its film/resin again. P: actual new outside purchase only. Conditional on this real movement; preserve full gross V, original Qc and article-specific empty/attached-WIP/FG/reusable opening and closing pool. Internal reuse cancels and is not a second purchase; waste cannot use a Product UUID. This physical card exists even if no burden is newly purchased.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources:

###### Disposable PE shipping bag — ER: actual external-return receipt, not new purchase (`pebag_er`)

One complete polyethylene shipping bag, CAS 9002-88-4, production mix at plant; use only when actual composition is PE and verify grade, additives and provider. It is detachable packaging, not the functional reusable polyester sleeve. Whole supplied bag is purchased once; do not buy its film/resin again. ER: actual external-return receipt, not new purchase. Conditional on this real movement; preserve full gross V, original Qc and article-specific empty/attached-WIP/FG/reusable opening and closing pool. Internal reuse cancels and is not a second purchase; waste cannot use a Product UUID. This physical card exists even if no burden is newly purchased.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources:

###### Carton sealing-tape article — P: actual new outside purchase only (`tape_p`)

One actual supplied composite tape roll/article; record backing and adhesive from the supplier without inventing PP or solvent chemistry. A tape fixed to another industrial use is not interchangeable without supplier compatibility. P: actual new outside purchase only. Conditional on this real movement; preserve full gross V, original Qc and article-specific empty/attached-WIP/FG/reusable opening and closing pool. Internal reuse cancels and is not a second purchase; waste cannot use a Product UUID. This physical card exists even if no burden is newly purchased.

- Selected flow: Pressure-sensitive carton sealing tape
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources:

###### Carton sealing-tape article — ER: actual external-return receipt, not new purchase (`tape_er`)

One actual supplied composite tape roll/article; record backing and adhesive from the supplier without inventing PP or solvent chemistry. A tape fixed to another industrial use is not interchangeable without supplier compatibility. ER: actual external-return receipt, not new purchase. Conditional on this real movement; preserve full gross V, original Qc and article-specific empty/attached-WIP/FG/reusable opening and closing pool. Internal reuse cancels and is not a second purchase; waste cannot use a Product UUID. This physical card exists even if no burden is newly purchased.

- Selected flow: Pressure-sensitive carton sealing tape
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources:

###### Reusable plastic transport crate — P: actual new outside purchase only (`crate_p`)

One actual reusable plastic crate, native Mass/kg, without an asserted resin or manufacturing route. The retained CPC bags classification is an isolated classification defect, not evidence that this rigid crate is a bag; positive basename and physical supply are crate. Verify polymer, tare, supplier and real use/return history independently; do not purchase resin for an already supplied crate. P: actual new outside purchase only. Conditional on this real movement; preserve full gross V, original Qc and article-specific empty/attached-WIP/FG/reusable opening and closing pool. Internal reuse cancels and is not a second purchase; waste cannot use a Product UUID. This physical card exists even if no burden is newly purchased.

- Selected flow: Plastic crate `3eec684a-d54a-4c38-94af-77fd14d7f9b1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources:

###### Reusable plastic transport crate — ER: actual external-return receipt, not new purchase (`crate_er`)

One actual reusable plastic crate, native Mass/kg, without an asserted resin or manufacturing route. The retained CPC bags classification is an isolated classification defect, not evidence that this rigid crate is a bag; positive basename and physical supply are crate. Verify polymer, tare, supplier and real use/return history independently; do not purchase resin for an already supplied crate. ER: actual external-return receipt, not new purchase. Conditional on this real movement; preserve full gross V, original Qc and article-specific empty/attached-WIP/FG/reusable opening and closing pool. Internal reuse cancels and is not a second purchase; waste cannot use a Product UUID. This physical card exists even if no burden is newly purchased.

- Selected flow: Plastic crate `3eec684a-d54a-4c38-94af-77fd14d7f9b1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources:

###### Finished cotton cleaning wipe (`fg_service_cloth_erin`)

Every actual sewing machine, cutting tool, tool, extraction/handling unit and reusable cloth keeps a complete actual configured fleet: new/used receipts, external returns received/sent, real retirement/whole waste, installed/opening/closing holdings and disjoint repair/fluid changes. HF and CITTA manufacturing context shows actual sewing/cutting operations, not the same Peerless plant, installed machine or shared SKU. A whole line/provider already including a machine and a separate purchase of that machine cannot both be added. Measure actual complete configuration mass M if count/mass conversion is needed; Item(s) is not kg and no machine mass or lifetime is supplied. Actual service h must match a complete real provider history and observed original-cohort use, unused/unassigned capacity and inherited burdens; physical fleet kg is not scaled by a service share. Separately supplied oil/filter/belt and whole contaminated removed items need their own atomic interfaces when actually present; contained parts remain nested in a whole asset. Receipt/return/shipment/retirement cards disclose physical V only; they are not a second capital purchase when the actual compatible service history already owns the same upstream manufacture. Actual provider-service scope and separately metered operation/repair must be nonoverlapping. A cotton cloth has the same full gross receipt/return/whole-waste and opening/closing fleet record; actual laundering or replacement must carry all disjoint real provider and utility burdens. No cloth lifetime or laundering load is assumed. This card discloses only actual gross external cloth erin assigned to this one gate/event. Shared internal movement between manufacture and FG service is paired/cancelled, not an external return or second purchase; any one real receiver event is recorded once.

- Selected flow: Finished cotton cleaning wipe
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cloth_fg_service`
- Sources:


##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Gross whole-article physical dispatch (`fg_dispatch`)

One physical whole manufactured manual folding steel-rib umbrella with metal shaft, polyester canopy, plastic handle and declared functional sleeve; production mix at plant, finished-product/manufactured route. The official broad family basename is preserved, but only this article is exchanged; it never aggregates canes/whips or loose parts. No fixed native composition, CAS, rib count, performance or item mass is supplied. Actual provider and supply boundary must match this narrowed configuration. Every actual outward dispatch in H, including previously released opening FG, repeated dispatch and rejected/unauthorized outward movement. Preserve gross V and original Qc, historical burden and condition; delivery does not create Q.

- Selected flow: Umbrellas, sun-umbrellas, walking-sticks, seat-sticks, whips, riding-crops and the like `69c7bd8d-a65a-4c23-8099-e613abbff073`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fg`
- Sources:

###### Whole-article outward return (`fg_outward_return`)

One physical whole manufactured manual folding steel-rib umbrella with metal shaft, polyester canopy, plastic handle and declared functional sleeve; production mix at plant, finished-product/manufactured route. The official broad family basename is preserved, but only this article is exchanged; it never aggregates canes/whips or loose parts. No fixed native composition, CAS, rib count, performance or item mass is supplied. Actual provider and supply boundary must match this narrowed configuration. Actual return to an external holder/supplier in H, separately from normal dispatch with unique transfer id. Preserve full gross V, original Qc and historical burden; no automatic negative manufacturing exchange or credit.

- Selected flow: Umbrellas, sun-umbrellas, walking-sticks, seat-sticks, whips, riding-crops and the like `69c7bd8d-a65a-4c23-8099-e613abbff073`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fg`
- Sources:

###### Corrugated transport carton — S: full packaging accompanying gross physical shipments (`carton_s`)

One real supplied corrugated shipping carton, composition, coatings and recycled content taken from actual supplier evidence. Fixed 16.6/83.4 fibre mix or a nondurable laminated folding carton is not assumed. S: full packaging accompanying gross physical shipments. Conditional on this real movement; preserve full gross V, original Qc and article-specific empty/attached-WIP/FG/reusable opening and closing pool. Internal reuse cancels and is not a second purchase; waste cannot use a Product UUID. This physical card exists even if no burden is newly purchased.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources:

###### Corrugated transport carton — EO: actual external outward return (`carton_eo`)

One real supplied corrugated shipping carton, composition, coatings and recycled content taken from actual supplier evidence. Fixed 16.6/83.4 fibre mix or a nondurable laminated folding carton is not assumed. EO: actual external outward return. Conditional on this real movement; preserve full gross V, original Qc and article-specific empty/attached-WIP/FG/reusable opening and closing pool. Internal reuse cancels and is not a second purchase; waste cannot use a Product UUID. This physical card exists even if no burden is newly purchased.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources:

###### Disposable PE shipping bag — S: full packaging accompanying gross physical shipments (`pebag_s`)

One complete polyethylene shipping bag, CAS 9002-88-4, production mix at plant; use only when actual composition is PE and verify grade, additives and provider. It is detachable packaging, not the functional reusable polyester sleeve. Whole supplied bag is purchased once; do not buy its film/resin again. S: full packaging accompanying gross physical shipments. Conditional on this real movement; preserve full gross V, original Qc and article-specific empty/attached-WIP/FG/reusable opening and closing pool. Internal reuse cancels and is not a second purchase; waste cannot use a Product UUID. This physical card exists even if no burden is newly purchased.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources:

###### Disposable PE shipping bag — EO: actual external outward return (`pebag_eo`)

One complete polyethylene shipping bag, CAS 9002-88-4, production mix at plant; use only when actual composition is PE and verify grade, additives and provider. It is detachable packaging, not the functional reusable polyester sleeve. Whole supplied bag is purchased once; do not buy its film/resin again. EO: actual external outward return. Conditional on this real movement; preserve full gross V, original Qc and article-specific empty/attached-WIP/FG/reusable opening and closing pool. Internal reuse cancels and is not a second purchase; waste cannot use a Product UUID. This physical card exists even if no burden is newly purchased.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources:

###### Carton sealing-tape article — S: full packaging accompanying gross physical shipments (`tape_s`)

One actual supplied composite tape roll/article; record backing and adhesive from the supplier without inventing PP or solvent chemistry. A tape fixed to another industrial use is not interchangeable without supplier compatibility. S: full packaging accompanying gross physical shipments. Conditional on this real movement; preserve full gross V, original Qc and article-specific empty/attached-WIP/FG/reusable opening and closing pool. Internal reuse cancels and is not a second purchase; waste cannot use a Product UUID. This physical card exists even if no burden is newly purchased.

- Selected flow: Pressure-sensitive carton sealing tape
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources:

###### Carton sealing-tape article — EO: actual external outward return (`tape_eo`)

One actual supplied composite tape roll/article; record backing and adhesive from the supplier without inventing PP or solvent chemistry. A tape fixed to another industrial use is not interchangeable without supplier compatibility. EO: actual external outward return. Conditional on this real movement; preserve full gross V, original Qc and article-specific empty/attached-WIP/FG/reusable opening and closing pool. Internal reuse cancels and is not a second purchase; waste cannot use a Product UUID. This physical card exists even if no burden is newly purchased.

- Selected flow: Pressure-sensitive carton sealing tape
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources:

###### Reusable plastic transport crate — S: full packaging accompanying gross physical shipments (`crate_s`)

One actual reusable plastic crate, native Mass/kg, without an asserted resin or manufacturing route. The retained CPC bags classification is an isolated classification defect, not evidence that this rigid crate is a bag; positive basename and physical supply are crate. Verify polymer, tare, supplier and real use/return history independently; do not purchase resin for an already supplied crate. S: full packaging accompanying gross physical shipments. Conditional on this real movement; preserve full gross V, original Qc and article-specific empty/attached-WIP/FG/reusable opening and closing pool. Internal reuse cancels and is not a second purchase; waste cannot use a Product UUID. This physical card exists even if no burden is newly purchased.

- Selected flow: Plastic crate `3eec684a-d54a-4c38-94af-77fd14d7f9b1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources:

###### Reusable plastic transport crate — EO: actual external outward return (`crate_eo`)

One actual reusable plastic crate, native Mass/kg, without an asserted resin or manufacturing route. The retained CPC bags classification is an isolated classification defect, not evidence that this rigid crate is a bag; positive basename and physical supply are crate. Verify polymer, tare, supplier and real use/return history independently; do not purchase resin for an already supplied crate. EO: actual external outward return. Conditional on this real movement; preserve full gross V, original Qc and article-specific empty/attached-WIP/FG/reusable opening and closing pool. Internal reuse cancels and is not a second purchase; waste cannot use a Product UUID. This physical card exists even if no burden is newly purchased.

- Selected flow: Plastic crate `3eec684a-d54a-4c38-94af-77fd14d7f9b1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources:

###### Finished cotton cleaning wipe (`fg_service_cloth_eoout`)

Every actual sewing machine, cutting tool, tool, extraction/handling unit and reusable cloth keeps a complete actual configured fleet: new/used receipts, external returns received/sent, real retirement/whole waste, installed/opening/closing holdings and disjoint repair/fluid changes. HF and CITTA manufacturing context shows actual sewing/cutting operations, not the same Peerless plant, installed machine or shared SKU. A whole line/provider already including a machine and a separate purchase of that machine cannot both be added. Measure actual complete configuration mass M if count/mass conversion is needed; Item(s) is not kg and no machine mass or lifetime is supplied. Actual service h must match a complete real provider history and observed original-cohort use, unused/unassigned capacity and inherited burdens; physical fleet kg is not scaled by a service share. Separately supplied oil/filter/belt and whole contaminated removed items need their own atomic interfaces when actually present; contained parts remain nested in a whole asset. Receipt/return/shipment/retirement cards disclose physical V only; they are not a second capital purchase when the actual compatible service history already owns the same upstream manufacture. Actual provider-service scope and separately metered operation/repair must be nonoverlapping. A cotton cloth has the same full gross receipt/return/whole-waste and opening/closing fleet record; actual laundering or replacement must carry all disjoint real provider and utility burdens. No cloth lifetime or laundering load is assumed. This card discloses only actual gross external cloth eoout assigned to this one gate/event. Shared internal movement between manufacture and FG service is paired/cancelled, not an external return or second purchase; any one real receiver event is recorded once.

- Selected flow: Finished cotton cleaning wipe
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cloth_fg_service`
- Sources:


##### Waste flows

###### Actual discarded cotton cleaning wipe (`fg_service_spent_wipe`)

One actual contaminated film, carton, cloth, machine, filter, rejected umbrella part or liquid consignment has one whole receiver event Qt containing substrate/article, retained fabric/soil/finish matter and water once. Dry tare and measured originW/components are nonadditive nested analyses, not extra exported wastes unless physically separated before the boundary. Match its actual receiver/treatment/provider and extensive unit. Physical Qt and Qt/Q disclosure are not automatically the service demand: use only evidenced compatible nonoverlapping service A with the original cohort Qc/Q0, keeping physical transfer full. Unknown attribution remains unknown. Arithmetic illustration only: a shared10kg consignment is never shrunk to2.5kg by25% attribution and never charged as10kg again to every cohort. Different dry/wet or provider units require the actual full-composition/state bridge, not a hidden conversion or pure-component proxy.

Conditional separately collected spent wipe with its real absorbed water/soil and waste recipient. Measure wet mass and origin subaccount independently; if it is genuinely in the mixed assembly stream, use that one mixed total and do not emit the same wipe twice.

- Selected flow: Spent cotton cleaning wipe
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service_wastes`
- Sources:

###### Polyester umbrella fabric cutting scrap (`fg_service_fabric_scrap`)

One actual contaminated film, carton, cloth, machine, filter, rejected umbrella part or liquid consignment has one whole receiver event Qt containing substrate/article, retained fabric/soil/finish matter and water once. Dry tare and measured originW/components are nonadditive nested analyses, not extra exported wastes unless physically separated before the boundary. Match its actual receiver/treatment/provider and extensive unit. Physical Qt and Qt/Q disclosure are not automatically the service demand: use only evidenced compatible nonoverlapping service A with the original cohort Qc/Q0, keeping physical transfer full. Unknown attribution remains unknown. Arithmetic illustration only: a shared10kg consignment is never shrunk to2.5kg by25% attribution and never charged as10kg again to every cohort. Different dry/wet or provider units require the actual full-composition/state bridge, not a hidden conversion or pure-component proxy.

Separately collected real cuttings/thread losses with actual finish/moisture and waste destination. Not an unknown mixed-fibre textile and not a second output when included in mixed waste.

- Selected flow: Polyester umbrella fabric cutting scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service_wastes`
- Sources:

###### Steel umbrella-frame breakage scrap (`fg_service_steel_scrap`)

One actual contaminated film, carton, cloth, machine, filter, rejected umbrella part or liquid consignment has one whole receiver event Qt containing substrate/article, retained fabric/soil/finish matter and water once. Dry tare and measured originW/components are nonadditive nested analyses, not extra exported wastes unless physically separated before the boundary. Match its actual receiver/treatment/provider and extensive unit. Physical Qt and Qt/Q disclosure are not automatically the service demand: use only evidenced compatible nonoverlapping service A with the original cohort Qc/Q0, keeping physical transfer full. Unknown attribution remains unknown. Arithmetic illustration only: a shared10kg consignment is never shrunk to2.5kg by25% attribution and never charged as10kg again to every cohort. Different dry/wet or provider units require the actual full-composition/state bridge, not a hidden conversion or pure-component proxy.

Actual separately collected broken steel part, with other polymers/finishes separated or declared; not assumed stamping/bending waste from an onsite factory that does not form ribs.

- Selected flow: Steel umbrella-frame breakage scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service_wastes`
- Sources:

###### Rejected complete umbrella for disposal (`fg_service_failed_umbrella`)

One actual contaminated film, carton, cloth, machine, filter, rejected umbrella part or liquid consignment has one whole receiver event Qt containing substrate/article, retained fabric/soil/finish matter and water once. Dry tare and measured originW/components are nonadditive nested analyses, not extra exported wastes unless physically separated before the boundary. Match its actual receiver/treatment/provider and extensive unit. Physical Qt and Qt/Q disclosure are not automatically the service demand: use only evidenced compatible nonoverlapping service A with the original cohort Qc/Q0, keeping physical transfer full. Unknown attribution remains unknown. Arithmetic illustration only: a shared10kg consignment is never shrunk to2.5kg by25% attribution and never charged as10kg again to every cohort. Different dry/wet or provider units require the actual full-composition/state bridge, not a hidden conversion or pure-component proxy.

Whole failed umbrella declared Waste with full wet physical mass and destination; prior first release history and any real repair are retained, and failed output is not deleted or renamed as a saleable Product. Do not add component waste twice.

- Selected flow: Rejected complete umbrella for disposal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service_wastes`
- Sources:

###### Untreated umbrella spray-test and cleaning effluent (`fg_service_test_effluent`)

One actual contaminated film, carton, cloth, machine, filter, rejected umbrella part or liquid consignment has one whole receiver event Qt containing substrate/article, retained fabric/soil/finish matter and water once. Dry tare and measured originW/components are nonadditive nested analyses, not extra exported wastes unless physically separated before the boundary. Match its actual receiver/treatment/provider and extensive unit. Physical Qt and Qt/Q disclosure are not automatically the service demand: use only evidenced compatible nonoverlapping service A with the original cohort Qc/Q0, keeping physical transfer full. Unknown attribution remains unknown. Arithmetic illustration only: a shared10kg consignment is never shrunk to2.5kg by25% attribution and never charged as10kg again to every cohort. Different dry/wet or provider units require the actual full-composition/state bridge, not a hidden conversion or pure-component proxy.

One actual untreated effluent stream handed to its documented external treatment recipient; retain wet mass, samples and real separate contaminants. Neither manganese-slag washing wastewater nor secondary/tertiary-treated wastewater is its identity. COD is an indicator, not a molecular mass.

- Selected flow: Untreated umbrella spray-test and cleaning effluent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service_wastes`
- Sources:

###### Actual mixed final-assembly and testing waste (`fg_service_mixed_waste`)

One actual contaminated film, carton, cloth, machine, filter, rejected umbrella part or liquid consignment has one whole receiver event Qt containing substrate/article, retained fabric/soil/finish matter and water once. Dry tare and measured originW/components are nonadditive nested analyses, not extra exported wastes unless physically separated before the boundary. Match its actual receiver/treatment/provider and extensive unit. Physical Qt and Qt/Q disclosure are not automatically the service demand: use only evidenced compatible nonoverlapping service A with the original cohort Qc/Q0, keeping physical transfer full. Unknown attribution remains unknown. Arithmetic illustration only: a shared10kg consignment is never shrunk to2.5kg by25% attribution and never charged as10kg again to every cohort. Different dry/wet or provider units require the actual full-composition/state bridge, not a hidden conversion or pure-component proxy.

Use only one genuinely mixed at-plant final-assembly/testing Waste collection, native production mix GLO. Independently measure originW for failed umbrella, textile, fitting and cleanup origins as non-additive subaccounts; choose this total or genuinely separated outputs for each physical quantity, never both. No default composition, quantity, treatment or credit follows from the UUID.

- Selected flow: Manufacturing waste, mixed `8a42279e-b14c-408f-98de-e52e0ea3ef3a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service_wastes`
- Sources:

###### Corrugated transport carton — W: actual discarded packaging article (`carton_w`)

One actual contaminated film, carton, cloth, machine, filter, rejected umbrella part or liquid consignment has one whole receiver event Qt containing substrate/article, retained fabric/soil/finish matter and water once. Dry tare and measured originW/components are nonadditive nested analyses, not extra exported wastes unless physically separated before the boundary. Match its actual receiver/treatment/provider and extensive unit. Physical Qt and Qt/Q disclosure are not automatically the service demand: use only evidenced compatible nonoverlapping service A with the original cohort Qc/Q0, keeping physical transfer full. Unknown attribution remains unknown. Arithmetic illustration only: a shared10kg consignment is never shrunk to2.5kg by25% attribution and never charged as10kg again to every cohort. Different dry/wet or provider units require the actual full-composition/state bridge, not a hidden conversion or pure-component proxy.

One real supplied corrugated shipping carton, composition, coatings and recycled content taken from actual supplier evidence. Fixed 16.6/83.4 fibre mix or a nondurable laminated folding carton is not assumed. W: actual discarded packaging article. Conditional on this real movement; preserve full gross V, original Qc and article-specific empty/attached-WIP/FG/reusable opening and closing pool. Internal reuse cancels and is not a second purchase; waste cannot use a Product UUID. This physical card exists even if no burden is newly purchased.

- Selected flow: Discarded corrugated transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources:

###### Disposable PE shipping bag — W: actual discarded packaging article (`pebag_w`)

One actual contaminated film, carton, cloth, machine, filter, rejected umbrella part or liquid consignment has one whole receiver event Qt containing substrate/article, retained fabric/soil/finish matter and water once. Dry tare and measured originW/components are nonadditive nested analyses, not extra exported wastes unless physically separated before the boundary. Match its actual receiver/treatment/provider and extensive unit. Physical Qt and Qt/Q disclosure are not automatically the service demand: use only evidenced compatible nonoverlapping service A with the original cohort Qc/Q0, keeping physical transfer full. Unknown attribution remains unknown. Arithmetic illustration only: a shared10kg consignment is never shrunk to2.5kg by25% attribution and never charged as10kg again to every cohort. Different dry/wet or provider units require the actual full-composition/state bridge, not a hidden conversion or pure-component proxy.

One complete polyethylene shipping bag, CAS 9002-88-4, production mix at plant; use only when actual composition is PE and verify grade, additives and provider. It is detachable packaging, not the functional reusable polyester sleeve. Whole supplied bag is purchased once; do not buy its film/resin again. W: actual discarded packaging article. Conditional on this real movement; preserve full gross V, original Qc and article-specific empty/attached-WIP/FG/reusable opening and closing pool. Internal reuse cancels and is not a second purchase; waste cannot use a Product UUID. This physical card exists even if no burden is newly purchased.

- Selected flow: Discarded polyethylene shipping bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources:

###### Carton sealing-tape article — W: actual discarded packaging article (`tape_w`)

One actual contaminated film, carton, cloth, machine, filter, rejected umbrella part or liquid consignment has one whole receiver event Qt containing substrate/article, retained fabric/soil/finish matter and water once. Dry tare and measured originW/components are nonadditive nested analyses, not extra exported wastes unless physically separated before the boundary. Match its actual receiver/treatment/provider and extensive unit. Physical Qt and Qt/Q disclosure are not automatically the service demand: use only evidenced compatible nonoverlapping service A with the original cohort Qc/Q0, keeping physical transfer full. Unknown attribution remains unknown. Arithmetic illustration only: a shared10kg consignment is never shrunk to2.5kg by25% attribution and never charged as10kg again to every cohort. Different dry/wet or provider units require the actual full-composition/state bridge, not a hidden conversion or pure-component proxy.

One actual supplied composite tape roll/article; record backing and adhesive from the supplier without inventing PP or solvent chemistry. A tape fixed to another industrial use is not interchangeable without supplier compatibility. W: actual discarded packaging article. Conditional on this real movement; preserve full gross V, original Qc and article-specific empty/attached-WIP/FG/reusable opening and closing pool. Internal reuse cancels and is not a second purchase; waste cannot use a Product UUID. This physical card exists even if no burden is newly purchased.

- Selected flow: Discarded carton sealing tape
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources:

###### Reusable plastic transport crate — W: actual discarded packaging article (`crate_w`)

One actual contaminated film, carton, cloth, machine, filter, rejected umbrella part or liquid consignment has one whole receiver event Qt containing substrate/article, retained fabric/soil/finish matter and water once. Dry tare and measured originW/components are nonadditive nested analyses, not extra exported wastes unless physically separated before the boundary. Match its actual receiver/treatment/provider and extensive unit. Physical Qt and Qt/Q disclosure are not automatically the service demand: use only evidenced compatible nonoverlapping service A with the original cohort Qc/Q0, keeping physical transfer full. Unknown attribution remains unknown. Arithmetic illustration only: a shared10kg consignment is never shrunk to2.5kg by25% attribution and never charged as10kg again to every cohort. Different dry/wet or provider units require the actual full-composition/state bridge, not a hidden conversion or pure-component proxy.

One actual reusable plastic crate, native Mass/kg, without an asserted resin or manufacturing route. The retained CPC bags classification is an isolated classification defect, not evidence that this rigid crate is a bag; positive basename and physical supply are crate. Verify polymer, tare, supplier and real use/return history independently; do not purchase resin for an already supplied crate. W: actual discarded packaging article. Conditional on this real movement; preserve full gross V, original Qc and article-specific empty/attached-WIP/FG/reusable opening and closing pool. Internal reuse cancels and is not a second purchase; waste cannot use a Product UUID. This physical card exists even if no burden is newly purchased.

- Selected flow: Discarded plastic transport crate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources:

##### Elementary flows

###### Actual ordinary-water evaporation to air (`fg_service_water_vapour`)

This profile receives already finished canopy fabric and a complete frame. Matching sleeve colour or appearance does not prove the same fibre, finish or areal mass as the canopy. One polyester input card covers only real cuts from the same independently verified supplied textile; a genuinely different sleeve, reinforcement or strap material needs its own specific atomic article/provider and actual cutting record before completeness, never a guessed composition or duplicate whole-fabric purchase. Real prior fibre formation, weaving/dyeing/coating/printing and frame metallurgy/forming/finishing remain inside their complete compatible actual upstream providers once. An actual known on-site operation is not moved upstream by renaming a receipt. HF factory-tour fiberglass golf ribs, epoxy versus screws, eight-gores, test-cycle and spray examples are retained contrary context, not requirements for this steel-rib manual folding profile. Actual supplied finish chemistry, printed/dyed or RPET variants and all real order-specific operations must be disclosed; no finish, adhesive, fluorinated substance, cleaner molecule or emission is inferred. The actual whole assembled product is independently weighed in its declared conditioning state; a wet-dry article difference is not automatically water if finish, soil or other matter also changes. Establish liquid/retained/vapor water independently with actual compatible sampling and all real transfers; do not label a drain, droplet/mist or collected liquid as vapor. Where actual identified IR-active vapor measurement is required, the retained complete EPA320 method and its actual FTIR Protocol supply heated extractive transport/reference-spectrum/interference/background/state/analyte-spike-recovery and uncertainty procedures within their real scope. This is not a particulate/mist/totalVOC method or FTIR measurement of homonuclear N2/O2/monatomic Ar; no source-specific actual release, calibrated reference, matrix recovery or field eligibility is claimed. Its complete dated50-page PDF includes the FTIR Protocol/addendum/appendices, not an unavailable reference. PDF16 Eq3/4 use a tracer mixture fraction while the same-page DF>=10 legend conflicts: preserve original bytes and distinguish conserved corrected common-mole-basis phi=(tracer_spiked-tracer_native)/(tracer_direct-tracer_native), nonzero denominator, representative matched no-unaccounted-loss mixing, expected analyte=phi*analyte_direct+(1-phi)*analyte_native, from its reciprocal dilution ratio. This identity supplies no numerical concentration, setting or acceptance tolerance. Full Methods1–3 retain actual source geometry/traverse/non-cyclonic/size/location and calibrated velocity/state/density/flow restrictions; Method3 restricted matrix/interferences, N2/CO remainder and argon omission are not universal air composition, pure N2 or measured Ar. A duct result is not automatically uncontained fugitive-source coverage. Real collected condensate/mist/effluent is one whole wet receiver event, separate from actual final released species/medium. An actual necessary unestablished specific sampling/preservation/matrix/phase programme remains hold, not solved by a future SOP or finitecheck. Routine actual calibration/sampling/recovery in an already established eligible programme remains study qualification, not proof no method exists. No combustion, boiler, reacting water or thermal-drying recipe is presumed; any actual on-site generation requires its full real producer, fuels/air/O2/water/species/control/energy/waste interfaces and applicable methods before completeness. These dated EPA Internet copies do not assert regulatory conformity or actual study success.

Only independently evidenced ordinary H2O evaporation from actual wet test/cleanup/drying or natural moisture loss, not fictional repair or reaction water. Keep liquid/retained/phase water separately and do not infer multiple unknown water/species flows from one residual. This is ordinary molecular H2O in vapour phase to air; isotopically enriched water and ice are excluded.

- Selected flow: Ordinary H2O water vapour to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service_wastes`
- Sources: `epa-method320`

### Process: Actual sewing equipment fleet and observed service (`factory_assets`)

#### Inputs

##### Product flows

###### Umbrella canopy and tip sewing machine (`asset_sewing_receipt`)

Every actual sewing machine, cutting tool, tool, extraction/handling unit and reusable cloth keeps a complete actual configured fleet: new/used receipts, external returns received/sent, real retirement/whole waste, installed/opening/closing holdings and disjoint repair/fluid changes. HF and CITTA manufacturing context shows actual sewing/cutting operations, not the same Peerless plant, installed machine or shared SKU. A whole line/provider already including a machine and a separate purchase of that machine cannot both be added. Measure actual complete configuration mass M if count/mass conversion is needed; Item(s) is not kg and no machine mass or lifetime is supplied. Actual service h must match a complete real provider history and observed original-cohort use, unused/unassigned capacity and inherited burdens; physical fleet kg is not scaled by a service share. Separately supplied oil/filter/belt and whole contaminated removed items need their own atomic interfaces when actually present; contained parts remain nested in a whole asset. Receipt/return/shipment/retirement cards disclose physical V only; they are not a second capital purchase when the actual compatible service history already owns the same upstream manufacture. Actual provider-service scope and separately metered operation/repair must be nonoverlapping. A cotton cloth has the same full gross receipt/return/whole-waste and opening/closing fleet record; actual laundering or replacement must carry all disjoint real provider and utility burdens. No cloth lifetime or laundering load is assumed. HF source explicitly describes sewing machines for canopy seams and a machine for sewn tips, not a mandatory number/model or two separate machine purchases. This actual receipt card applies only to a complete configured unit. Physical gross kg and actual observed compatible h service remain separate; complete provider history/current electricity/repair inclusions are never charged twice.

- Selected flow: Umbrella canopy and tip sewing machine
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `hf-manufacturing-2025`; `hf-tour-counter`; `ilcd-detailed-2010`

###### Umbrella canopy and tip sewing machine (`asset_sewing_erin`)

Every actual sewing machine, cutting tool, tool, extraction/handling unit and reusable cloth keeps a complete actual configured fleet: new/used receipts, external returns received/sent, real retirement/whole waste, installed/opening/closing holdings and disjoint repair/fluid changes. HF and CITTA manufacturing context shows actual sewing/cutting operations, not the same Peerless plant, installed machine or shared SKU. A whole line/provider already including a machine and a separate purchase of that machine cannot both be added. Measure actual complete configuration mass M if count/mass conversion is needed; Item(s) is not kg and no machine mass or lifetime is supplied. Actual service h must match a complete real provider history and observed original-cohort use, unused/unassigned capacity and inherited burdens; physical fleet kg is not scaled by a service share. Separately supplied oil/filter/belt and whole contaminated removed items need their own atomic interfaces when actually present; contained parts remain nested in a whole asset. Receipt/return/shipment/retirement cards disclose physical V only; they are not a second capital purchase when the actual compatible service history already owns the same upstream manufacture. Actual provider-service scope and separately metered operation/repair must be nonoverlapping. A cotton cloth has the same full gross receipt/return/whole-waste and opening/closing fleet record; actual laundering or replacement must carry all disjoint real provider and utility burdens. No cloth lifetime or laundering load is assumed. HF source explicitly describes sewing machines for canopy seams and a machine for sewn tips, not a mandatory number/model or two separate machine purchases. This actual erin card applies only to a complete configured unit. Physical gross kg and actual observed compatible h service remain separate; complete provider history/current electricity/repair inclusions are never charged twice.

- Selected flow: Umbrella canopy and tip sewing machine
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `hf-manufacturing-2025`; `hf-tour-counter`; `ilcd-detailed-2010`

###### Umbrella sewing-machine service (`asset_sewing_service`)

Every actual sewing machine, cutting tool, tool, extraction/handling unit and reusable cloth keeps a complete actual configured fleet: new/used receipts, external returns received/sent, real retirement/whole waste, installed/opening/closing holdings and disjoint repair/fluid changes. HF and CITTA manufacturing context shows actual sewing/cutting operations, not the same Peerless plant, installed machine or shared SKU. A whole line/provider already including a machine and a separate purchase of that machine cannot both be added. Measure actual complete configuration mass M if count/mass conversion is needed; Item(s) is not kg and no machine mass or lifetime is supplied. Actual service h must match a complete real provider history and observed original-cohort use, unused/unassigned capacity and inherited burdens; physical fleet kg is not scaled by a service share. Separately supplied oil/filter/belt and whole contaminated removed items need their own atomic interfaces when actually present; contained parts remain nested in a whole asset. Receipt/return/shipment/retirement cards disclose physical V only; they are not a second capital purchase when the actual compatible service history already owns the same upstream manufacture. Actual provider-service scope and separately metered operation/repair must be nonoverlapping. A cotton cloth has the same full gross receipt/return/whole-waste and opening/closing fleet record; actual laundering or replacement must carry all disjoint real provider and utility burdens. No cloth lifetime or laundering load is assumed. HF source explicitly describes sewing machines for canopy seams and a machine for sewn tips, not a mandatory number/model or two separate machine purchases. This actual service card applies only to a complete configured unit. Physical gross kg and actual observed compatible h service remain separate; complete provider history/current electricity/repair inclusions are never charged twice.

- Selected flow: Umbrella sewing-machine service
- Flow property / unit: Time / h
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `hf-manufacturing-2025`; `hf-tour-counter`; `ilcd-detailed-2010`

#### Outputs

##### Product flows

###### Umbrella canopy and tip sewing machine (`asset_sewing_eoout`)

Every actual sewing machine, cutting tool, tool, extraction/handling unit and reusable cloth keeps a complete actual configured fleet: new/used receipts, external returns received/sent, real retirement/whole waste, installed/opening/closing holdings and disjoint repair/fluid changes. HF and CITTA manufacturing context shows actual sewing/cutting operations, not the same Peerless plant, installed machine or shared SKU. A whole line/provider already including a machine and a separate purchase of that machine cannot both be added. Measure actual complete configuration mass M if count/mass conversion is needed; Item(s) is not kg and no machine mass or lifetime is supplied. Actual service h must match a complete real provider history and observed original-cohort use, unused/unassigned capacity and inherited burdens; physical fleet kg is not scaled by a service share. Separately supplied oil/filter/belt and whole contaminated removed items need their own atomic interfaces when actually present; contained parts remain nested in a whole asset. Receipt/return/shipment/retirement cards disclose physical V only; they are not a second capital purchase when the actual compatible service history already owns the same upstream manufacture. Actual provider-service scope and separately metered operation/repair must be nonoverlapping. A cotton cloth has the same full gross receipt/return/whole-waste and opening/closing fleet record; actual laundering or replacement must carry all disjoint real provider and utility burdens. No cloth lifetime or laundering load is assumed. HF source explicitly describes sewing machines for canopy seams and a machine for sewn tips, not a mandatory number/model or two separate machine purchases. This actual eoout card applies only to a complete configured unit. Physical gross kg and actual observed compatible h service remain separate; complete provider history/current electricity/repair inclusions are never charged twice.

- Selected flow: Umbrella canopy and tip sewing machine
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `hf-manufacturing-2025`; `hf-tour-counter`; `ilcd-detailed-2010`

##### Waste flows

###### Retired whole umbrella sewing machine (`asset_sewing_w`)

Every actual sewing machine, cutting tool, tool, extraction/handling unit and reusable cloth keeps a complete actual configured fleet: new/used receipts, external returns received/sent, real retirement/whole waste, installed/opening/closing holdings and disjoint repair/fluid changes. HF and CITTA manufacturing context shows actual sewing/cutting operations, not the same Peerless plant, installed machine or shared SKU. A whole line/provider already including a machine and a separate purchase of that machine cannot both be added. Measure actual complete configuration mass M if count/mass conversion is needed; Item(s) is not kg and no machine mass or lifetime is supplied. Actual service h must match a complete real provider history and observed original-cohort use, unused/unassigned capacity and inherited burdens; physical fleet kg is not scaled by a service share. Separately supplied oil/filter/belt and whole contaminated removed items need their own atomic interfaces when actually present; contained parts remain nested in a whole asset. Receipt/return/shipment/retirement cards disclose physical V only; they are not a second capital purchase when the actual compatible service history already owns the same upstream manufacture. Actual provider-service scope and separately metered operation/repair must be nonoverlapping. A cotton cloth has the same full gross receipt/return/whole-waste and opening/closing fleet record; actual laundering or replacement must carry all disjoint real provider and utility burdens. No cloth lifetime or laundering load is assumed. HF source explicitly describes sewing machines for canopy seams and a machine for sewn tips, not a mandatory number/model or two separate machine purchases. This actual w card applies only to a complete configured unit. Physical gross kg and actual observed compatible h service remain separate; complete provider history/current electricity/repair inclusions are never charged twice.

- Selected flow: Retired whole umbrella sewing machine
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single section 8 result for this atomic exchange in its declared native unit; preserve raw quantities and perform no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `hf-manufacturing-2025`; `hf-tour-counter`; `ilcd-detailed-2010`


## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_scope` | attributional shared processes | Apply this hierarchy only where the study goal requires attributional allocation. First separate dedicated operations and then virtual subdivision for exchanges uniquely attributable to one umbrella configuration or service cohort. | `ilcd-detailed-2010` |
| `allocation_cause` | remaining individual burdens | For each remaining exchange identify and justify its determining physical causality; use actual meter/task records and a causal driver for that exchange. Do not freely choose physical or economic allocation and do not assign one universal mass/time key to all exchanges. | `ilcd-detailed-2010` |
| `allocation_residual` | genuinely residual shared burdens | Only genuinely residual burdens use contemporaneous market values in the actual condition at the common process exit. Remove later transport/packing/service value from the compared prices and disclose uncertainty. All allocated vectors sum to the unallocated vector; physical gross movement remains unchanged. | `ilcd-detailed-2010` |
| `allocation_no_credit` | scrap, returns and packaging | Rejected umbrellas, returned packaging and mixed waste do not automatically become coproducts or receive avoided-production credit. Demonstrate actual status, recipient, joint process and compatible treatment; report any separate recycling-model choice explicitly. |  |

Manufacturer process pages do not support the allocation hierarchy. The ILCD text is used qualitatively within its attributional scope; the multifunctional-printer QFD figure and recycling equations are adjacent countercontexts, not adopted umbrella factors.

## 8. Foreground Data Collection, Calculation, and Quality Rules

Collection protocols take only raw totals/readings, identities, stock quantities and independent inherited vectors. Their aggregation_rule cell declares the final reference basis for the single calculation below; no protocol divides a raw value. For original Qc services, keep separate cohorts and their historical burdens, record only actual increments in H and leave future services unknown.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | manufacture | complete reference product | unique release and mass ledger | article_id; cohort_id; first_release_timestamp; configuration; BOM; net_mass_kg; measured_M_kg; packaging_tare; retained_water; conditioning; acceptance; original_Qc; rejected_count; actual_Q0_Qc; full_disjoint_fates_original_material_water; T_accept; whole_Qt_receiver; disjoint_compatible_service_A; actual_J_H2O_X | Calibrated whole-article weighing with declared functional sleeve; net packaging tare; reconcile unique releases and actual test/conditioning records; collect raw total mass and count without division. For the newly accepted cohort Q=Q0. Q0 is independently fixed from unique first quality-release events for complete same-configuration umbrellas after every required factory operation and test, ready for the declared factory supply gate. It includes the declared functional matching reusable sleeve and all actual retained articles and water at release and excludes outer packaging tare. Reconcile each original Q0 on its original-material/configuration basis across disjoint net remaining external deliveries, every actual on-site accepted FG/held/returned/rework state, irreversible losses and other terminal dispositions. Gross return first leaves its old delivery position. Dispatch, return, repacking, retest or reacceptance never creates new Q. Current surviving wet mass and original water/material losses cannot both be restored and counted again. Opening old cohorts and later observed-H services use original Qc/Q0, not current output; delivery plus closing FG is sufficient only when all other postgate states/exits are absent. Q=0 or unknown retains actual raw loads without a per-unit result. | kg; item | Each lot, meter interval and physical transfer | Complete reporting window; original release and H where applicable | Declared factory, supplier handover and recipient | per 1 kg reference flow | Calibrated raw records, traceable BOM/transfer ids, stock and vector closure |
| cp_materials | manufacture | each supplied article | raw materials and stock vectors | flow_id; lot; supplier; form; composition; supplied_BOM_overlap; gross_V; native_unit; opening_raw; closing_raw; opening_WIP; closing_WIP; moisture; each_inherited_exchange_vector; raw_count; measured_unit_mass; sampling; actual_Q0_Qc; full_disjoint_fates_original_material_water; T_accept; whole_Qt_receiver; disjoint_compatible_service_A; actual_J_H2O_X | Supplier/BOM/scale/issue-return records; independently measure stock quantities and each inherited burden vector; reconcile whole articles and subledger composition before any normalization. Keep complete physical raw/WIP/non-WIP/FG/return, packaging, installed-fluid and every actual equipment-fleet ledger separate from reference events and per-exchange burden vectors. Own opening WIP carries actual earlier foreground burdens once; only substantiated still-unused/unassigned closing WIP carries them forward. For attribution, A may add unassigned inherited opening burden to period raw burden and remove only demonstrated still-unassigned closing burden and a disjoint justified other-system/cohort handover. Already-net consumption is not stock-corrected a second time; accepted closing FG and services already performed for it are not deleted. A complete provider aggregate and its embedded material/transport/asset/history decomposition are mutually exclusive. Preserve failed attempts, idle/start-stop, inspection, samples, cleanout and repair loads. Actual complete upstreams match the whole supplied article/preparation and true availability point; no receipt or purchased-service label hides known on-site manufacture. Actual provider inclusion schedules cover current electricity, repair, transport and operating supplies as well as capital: an aggregate already including a metered foreground operation and that separate operation cannot both be charged. | kg; item; m2; m | Each lot, meter interval and physical transfer | Complete reporting window; original release and H where applicable | Declared factory, supplier handover and recipient | per 1 kg reference flow | Calibrated raw records, traceable BOM/transfer ids, stock and vector closure |
| cp_utilities | manufacture | electricity and water individually | unscaled meter observations | meter_id; state; voltage; source; native_unit; readings_or_rate; interval; calibration; task; idle; start_stop; cleanup; wet_test; drying; failure; allocated_share_evidence | Take raw meter differences or integrate actual rates once; retain all zero-output and failed tasks; no pre-normalization. Measure actual liquid density if needed and keep disjoint meter coverage. | kWh; kg; m3; rate | Each lot, meter interval and physical transfer | Complete reporting window; original release and H where applicable | Declared factory, supplier handover and recipient | per 1 kg reference flow | Calibrated raw records, traceable BOM/transfer ids, stock and vector closure |
| cp_wastes | manufacture | each actual waste/species | gross waste and release ledger | transfer_id; waste_or_species; type; composition; state; wet_mass; phase_water; gross_volume; density; media; recipient; originW_independently_measured; mixed_total; paired_transfer; failure_status; actual_Q0_Qc; full_disjoint_fates_original_material_water; T_accept; whole_Qt_receiver; disjoint_compatible_service_A; actual_J_H2O_X | Weigh each real outgoing Waste or sample/measure a real molecular release; reconcile full wet balances and independent originW subaccounts without duplicate outputs; no pre-normalization or assumed chemistry. One actual contaminated film, carton, cloth, machine, filter, rejected umbrella part or liquid consignment has one whole receiver event Qt containing substrate/article, retained fabric/soil/finish matter and water once. Dry tare and measured originW/components are nonadditive nested analyses, not extra exported wastes unless physically separated before the boundary. Match its actual receiver/treatment/provider and extensive unit. Physical Qt and Qt/Q disclosure are not automatically the service demand: use only evidenced compatible nonoverlapping service A with the original cohort Qc/Q0, keeping physical transfer full. Unknown attribution remains unknown. Arithmetic illustration only: a shared10kg consignment is never shrunk to2.5kg by25% attribution and never charged as10kg again to every cohort. Different dry/wet or provider units require the actual full-composition/state bridge, not a hidden conversion or pure-component proxy. | kg; native unit | Each lot, meter interval and physical transfer | Complete reporting window; original release and H where applicable | Declared factory, supplier handover and recipient | per 1 kg reference flow | Calibrated raw records, traceable BOM/transfer ids, stock and vector closure |
| cp_fg | fg_service | whole-article transfers and stocks | cohort gross physical ledger | article_id; original_cohort; original_Qc; opening_FG; closing_FG; historical_burden_vector; first_release_link; gross_dispatch; external_return_received; outward_return; original_delivery; actual_reversal; condition; authority; result; H; actual_Q0_Qc; full_disjoint_fates_original_material_water; T_accept; whole_Qt_receiver; disjoint_compatible_service_A; actual_J_H2O_X | Match serialized/lot transfer and warehouse records to original releases; collect gross quantities with rejected/unauthorized movements intact; retain historical vectors; internal verified handovers cancel only on consolidation. For the newly accepted cohort Q=Q0. Q0 is independently fixed from unique first quality-release events for complete same-configuration umbrellas after every required factory operation and test, ready for the declared factory supply gate. It includes the declared functional matching reusable sleeve and all actual retained articles and water at release and excludes outer packaging tare. Reconcile each original Q0 on its original-material/configuration basis across disjoint net remaining external deliveries, every actual on-site accepted FG/held/returned/rework state, irreversible losses and other terminal dispositions. Gross return first leaves its old delivery position. Dispatch, return, repacking, retest or reacceptance never creates new Q. Current surviving wet mass and original water/material losses cannot both be restored and counted again. Opening old cohorts and later observed-H services use original Qc/Q0, not current output; delivery plus closing FG is sufficient only when all other postgate states/exits are absent. Q=0 or unknown retains actual raw loads without a per-unit result. | kg; item | Each lot, meter interval and physical transfer | Complete reporting window; original release and H where applicable | Declared factory, supplier handover and recipient | per 1 kg reference flow | Calibrated raw records, traceable BOM/transfer ids, stock and vector closure |
| cp_service_materials | fg_service | actual incremental replacement inputs | original-cohort repair ledger | original_Qc; H; task; component_lot; actual_gross_V; native_unit; old_component_exit; installation; authority; success; opening_stock; closing_stock; inherited_vector; actual_Q0_Qc; full_disjoint_fates_original_material_water; T_accept; whole_Qt_receiver; disjoint_compatible_service_A; actual_J_H2O_X | Only actually performed repairs; match replacement supplier/BOM and old-part physical exit, preserving unauthorized and failed tasks. Original umbrella burden is carried once and not repurchased. Keep complete physical raw/WIP/non-WIP/FG/return, packaging, installed-fluid and every actual equipment-fleet ledger separate from reference events and per-exchange burden vectors. Own opening WIP carries actual earlier foreground burdens once; only substantiated still-unused/unassigned closing WIP carries them forward. For attribution, A may add unassigned inherited opening burden to period raw burden and remove only demonstrated still-unassigned closing burden and a disjoint justified other-system/cohort handover. Already-net consumption is not stock-corrected a second time; accepted closing FG and services already performed for it are not deleted. A complete provider aggregate and its embedded material/transport/asset/history decomposition are mutually exclusive. Preserve failed attempts, idle/start-stop, inspection, samples, cleanout and repair loads. Actual complete upstreams match the whole supplied article/preparation and true availability point; no receipt or purchased-service label hides known on-site manufacture. Actual provider inclusion schedules cover current electricity, repair, transport and operating supplies as well as capital: an aggregate already including a metered foreground operation and that separate operation cannot both be charged. | kg; item | Each lot, meter interval and physical transfer | Complete reporting window; original release and H where applicable | Declared factory, supplier handover and recipient | per 1 kg reference flow | Calibrated raw records, traceable BOM/transfer ids, stock and vector closure |
| cp_service_utilities | fg_service | actual storage/handling/test/repair utilities | original-cohort raw service observations | original_Qc; H; task; meter; raw_reading; raw_rate; state; voltage; water_quality; density; calibration; idle; cleanup; failure | Record actually performed services inside H before any division; retain causal meter allocation evidence and zero/failed work, future unperformed services unknown. | kWh; kg; m3; rate | Each lot, meter interval and physical transfer | Complete reporting window; original release and H where applicable | Declared factory, supplier handover and recipient | per 1 kg reference flow | Calibrated raw records, traceable BOM/transfer ids, stock and vector closure |
| cp_service_wastes | fg_service | actual post-release waste/species | original-cohort physical exit ledger | original_Qc; H; task; gross_V; wet_mass; species; media; originW; old_part; recipient; waste_status; actual_repair_result; physical_stock; inherited_vector; actual_Q0_Qc; full_disjoint_fates_original_material_water; T_accept; whole_Qt_receiver; disjoint_compatible_service_A; actual_J_H2O_X | Retain all actual waste and moisture movement even where work failed or was unauthorized; pair replaced parts and eliminate same-side duplicate collection only with traceable evidence. One actual contaminated film, carton, cloth, machine, filter, rejected umbrella part or liquid consignment has one whole receiver event Qt containing substrate/article, retained fabric/soil/finish matter and water once. Dry tare and measured originW/components are nonadditive nested analyses, not extra exported wastes unless physically separated before the boundary. Match its actual receiver/treatment/provider and extensive unit. Physical Qt and Qt/Q disclosure are not automatically the service demand: use only evidenced compatible nonoverlapping service A with the original cohort Qc/Q0, keeping physical transfer full. Unknown attribution remains unknown. Arithmetic illustration only: a shared10kg consignment is never shrunk to2.5kg by25% attribution and never charged as10kg again to every cohort. Different dry/wet or provider units require the actual full-composition/state bridge, not a hidden conversion or pure-component proxy. | kg; native unit | Each lot, meter interval and physical transfer | Complete reporting window; original release and H where applicable | Declared factory, supplier handover and recipient | per 1 kg reference flow | Calibrated raw records, traceable BOM/transfer ids, stock and vector closure |
| cp_packaging | fg_service | one named packaging article per pool | P I ER S EO W stock ledger | article_type; material; supplier; tare; original_Qc; H; opening_empty; opening_attached_WIP_FG; opening_reusable; P; I; ER; closing_empty; closing_attached_WIP_FG; closing_reusable; S_gross_shipments; EO; W; internal_reuse; inherited_vector; actual_Q0_Qc; full_disjoint_fates_original_material_water; T_accept; whole_Qt_receiver; disjoint_compatible_service_A; actual_J_H2O_X | Count/weigh each packaging article and every actual purchase/return/dispatch/disposal; reconcile empty, attached and reusable pools. Internal reuse cancels; do not collect pre-divided values or multiply an acquisition burden for each trip. For each actual whole wet corrugated-carton, PE-bag, sealing-tape or plastic-crate pool use O_empty+O_attachedWIP+O_attachedFG+O_reusable+P+I_other+ERin+J_in+H2O_in-X_in=C_empty+C_attachedWIP+C_attachedFG+C_reusable+S_gross+EOout+W_whole+J_out+H2O_out-X_out. I_other is the sum of actual separately identified otherwise received whole packaging, including real supplier-included packaging when present, distinct from P and ERin and not another purchase; internal reuse R_internal cancels between matched positions and is not I_other. J is additional real non-water material and H2O is additional actual water transfer only to the extent not already included in another whole wet leg. O/C and every whole leg retain all contained matter: actual new material/water retained in C never erases its true influx. X subtracts only independently proved overlap with OTHER same-side flow terms, never C, real increments, opposite directions or card existence. Trace actual J/water sources/destinations with specific physical records and internal pairs; do not invent a generic provider, extra Q, separate constituent waste or balancing flow. Gross shipments, external returns received/sent and true whole waste stay physically full regardless of environmental use shares. These four specific article pools are conditional on actual configuration; these are actual conditional packaging choices, not a universal material, tare, repair, water uptake or mass. The inherited I cards mean this I_other whole-article transfer, never the internal R_internal loop or a generic unknown balancing addition. | kg; item | Each lot, meter interval and physical transfer | Complete reporting window; original release and H where applicable | Declared factory, supplier handover and recipient | per 1 kg reference flow | Calibrated raw records, traceable BOM/transfer ids, stock and vector closure |
| cp_assets | factory_assets | Actual whole equipment and observed service | physical_fleet_and_service_history | unit_id; full_configuration; measured_M_kg_if_conversion; physical_O_C; receipt; ERin; EOout; whole_Qt; actual_h; repair_fluid_history; full_provider_scope; original_Q0_Qc; inherited_vectors; unused_capacity | Every actual sewing machine, cutting tool, tool, extraction/handling unit and reusable cloth keeps a complete actual configured fleet: new/used receipts, external returns received/sent, real retirement/whole waste, installed/opening/closing holdings and disjoint repair/fluid changes. HF and CITTA manufacturing context shows actual sewing/cutting operations, not the same Peerless plant, installed machine or shared SKU. A whole line/provider already including a machine and a separate purchase of that machine cannot both be added. Measure actual complete configuration mass M if count/mass conversion is needed; Item(s) is not kg and no machine mass or lifetime is supplied. Actual service h must match a complete real provider history and observed original-cohort use, unused/unassigned capacity and inherited burdens; physical fleet kg is not scaled by a service share. Separately supplied oil/filter/belt and whole contaminated removed items need their own atomic interfaces when actually present; contained parts remain nested in a whole asset. Receipt/return/shipment/retirement cards disclose physical V only; they are not a second capital purchase when the actual compatible service history already owns the same upstream manufacture. Actual provider-service scope and separately metered operation/repair must be nonoverlapping. A cotton cloth has the same full gross receipt/return/whole-waste and opening/closing fleet record; actual laundering or replacement must carry all disjoint real provider and utility burdens. No cloth lifetime or laundering load is assumed. | kg; h | Each actual transfer/use and stock close | Actual observed original-cohort H | Actual configured machine/provider scope | per 1 kg reference flow | Calibrated configuration mass; actual fleet and hours; complete provider/history nonoverlap |
| cp_cloth_manufacture | manufacture | Actual cotton cloth and observed use | physical_fleet_and_service_history | cloth_id; cotton_composition; measured_M_kg_if_conversion; physical_O_C; receipt; ERin; EOout; whole_Qt; actual_h; repair_fluid_history; full_provider_scope; original_Q0_Qc; inherited_vectors; unused_capacity | Every actual sewing machine, cutting tool, tool, extraction/handling unit and reusable cloth keeps a complete actual configured fleet: new/used receipts, external returns received/sent, real retirement/whole waste, installed/opening/closing holdings and disjoint repair/fluid changes. HF and CITTA manufacturing context shows actual sewing/cutting operations, not the same Peerless plant, installed machine or shared SKU. A whole line/provider already including a machine and a separate purchase of that machine cannot both be added. Measure actual complete configuration mass M if count/mass conversion is needed; Item(s) is not kg and no machine mass or lifetime is supplied. Actual service h must match a complete real provider history and observed original-cohort use, unused/unassigned capacity and inherited burdens; physical fleet kg is not scaled by a service share. Separately supplied oil/filter/belt and whole contaminated removed items need their own atomic interfaces when actually present; contained parts remain nested in a whole asset. Receipt/return/shipment/retirement cards disclose physical V only; they are not a second capital purchase when the actual compatible service history already owns the same upstream manufacture. Actual provider-service scope and separately metered operation/repair must be nonoverlapping. A cotton cloth has the same full gross receipt/return/whole-waste and opening/closing fleet record; actual laundering or replacement must carry all disjoint real provider and utility burdens. No cloth lifetime or laundering load is assumed. | kg; h | Each actual transfer/use and stock close | Actual observed original-cohort H | Actual configured machine/provider scope | per 1 kg reference flow | Calibrated configuration mass; actual fleet and hours; complete provider/history nonoverlap |
| cp_cloth_fg_service | fg_service | Actual cotton cloth and observed use | physical_fleet_and_service_history | cloth_id; cotton_composition; measured_M_kg_if_conversion; physical_O_C; receipt; ERin; EOout; whole_Qt; actual_h; repair_fluid_history; full_provider_scope; original_Q0_Qc; inherited_vectors; unused_capacity | Every actual sewing machine, cutting tool, tool, extraction/handling unit and reusable cloth keeps a complete actual configured fleet: new/used receipts, external returns received/sent, real retirement/whole waste, installed/opening/closing holdings and disjoint repair/fluid changes. HF and CITTA manufacturing context shows actual sewing/cutting operations, not the same Peerless plant, installed machine or shared SKU. A whole line/provider already including a machine and a separate purchase of that machine cannot both be added. Measure actual complete configuration mass M if count/mass conversion is needed; Item(s) is not kg and no machine mass or lifetime is supplied. Actual service h must match a complete real provider history and observed original-cohort use, unused/unassigned capacity and inherited burdens; physical fleet kg is not scaled by a service share. Separately supplied oil/filter/belt and whole contaminated removed items need their own atomic interfaces when actually present; contained parts remain nested in a whole asset. Receipt/return/shipment/retirement cards disclose physical V only; they are not a second capital purchase when the actual compatible service history already owns the same upstream manufacture. Actual provider-service scope and separately metered operation/repair must be nonoverlapping. A cotton cloth has the same full gross receipt/return/whole-waste and opening/closing fleet record; actual laundering or replacement must carry all disjoint real provider and utility burdens. No cloth lifetime or laundering load is assumed. | kg; h | Each actual transfer/use and stock close | Actual observed original-cohort H | Actual configured machine/provider scope | per 1 kg reference flow | Calibrated configuration mass; actual fleet and hours; complete provider/history nonoverlap |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| native_units | raw_fields | Convert each raw numerator to its declared native unit before allocation: kWh × 3.6 = MJ; count × independently measured same-lot unit mass = kg; fabric area × independently measured same-lot areal mass = kg; liquid volume × independently measured density at recorded state = kg; integrate an actual rate once. Preserve originals and uncertainty; no preset material factors. | raw_fields; measured_conversion_evidence | native_numerator |  |
| burden_continuity | burden vectors only | Keep complete physical raw/WIP/non-WIP/FG/return, packaging, installed-fluid and every actual equipment-fleet ledger separate from reference events and per-exchange burden vectors. Own opening WIP carries actual earlier foreground burdens once; only substantiated still-unused/unassigned closing WIP carries them forward. For attribution, A may add unassigned inherited opening burden to period raw burden and remove only demonstrated still-unassigned closing burden and a disjoint justified other-system/cohort handover. Already-net consumption is not stock-corrected a second time; accepted closing FG and services already performed for it are not deleted. A complete provider aggregate and its embedded material/transport/asset/history decomposition are mutually exclusive. Preserve failed attempts, idle/start-stop, inspection, samples, cleanout and repair loads. Actual complete upstreams match the whole supplied article/preparation and true availability point; no receipt or purchased-service label hides known on-site manufacture. Actual provider inclusion schedules cover current electricity, repair, transport and operating supplies as well as capital: an aggregate already including a metered foreground operation and that separate operation cannot both be charged. For an independently unassigned burden vector only, A_i=O_unassigned_i+B_period_i-C_still_unassigned_i-H_disjoint_other_i; actual original cohorts and provider coverage determine each term, never physical residual fitting. | native_numerator; stock_vectors; allocation_evidence | A_i | `ilcd-detailed-2010` |
| single_normalization | all inventory rows | result_i = N_i / D_c, once only. N_i is complete native gross V_i for every physical flow, or A_i for an allocated utility/service burden; D_c is Q of new first-release manufacture or original Qc of the observed service cohort. Q and Qc are measured kg at original release; keep cohort results separate before an explicit mass-weighted combination. For D_c=0 retain raw N_i and vectors without a unit result. first_whole_release is exactly 1 kg by definition. | native_numerator; A_i; gross_V_i; Q; original_Qc | result_i |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_configuration | whole product and suppliers | Traceable disjoint BOM, native identity/restriction audit, supplier complete-article state, actual steel ribs/metal shaft/polyester/plastic and sleeve evidence; auxiliary UUID gaps disclosed individually. | Supplier specifications; whole-product photographs; weighing; release records |
| quality_complete_window | every real activity and stock | Include failed and zero-output runs, start-stop/idle/cleanup, actual wet tests/drying/repairs, full raw/WIP/non-WIP vectors and observed services through H; future services unknown. | Raw meters; stock ledgers; failures; cohort timestamps |
| quality_physical | mass, water, elements and species | Independent physical balances and sampling, conditioned whole mass, each true waste stream and non-additive originW; no residual fitting multiple unknowns or assumed molecular conversion. | Calibrations; scales; density/assay/state data; recipient tickets |
| quality_sources | source use and uncertainty | Complete original context and product/route/state applicability; industrial sources support manufacture and never LCA allocation by themselves. No transferred recipe or factory factor; missing actual foreground quantities are collection requirements, not measured values. | Source-specific context and use assessment; field-level lineage |
| quality_method | actual required species/phase/matrix | This profile receives already finished canopy fabric and a complete frame. Matching sleeve colour or appearance does not prove the same fibre, finish or areal mass as the canopy. One polyester input card covers only real cuts from the same independently verified supplied textile; a genuinely different sleeve, reinforcement or strap material needs its own specific atomic article/provider and actual cutting record before completeness, never a guessed composition or duplicate whole-fabric purchase. Real prior fibre formation, weaving/dyeing/coating/printing and frame metallurgy/forming/finishing remain inside their complete compatible actual upstream providers once. An actual known on-site operation is not moved upstream by renaming a receipt. HF factory-tour fiberglass golf ribs, epoxy versus screws, eight-gores, test-cycle and spray examples are retained contrary context, not requirements for this steel-rib manual folding profile. Actual supplied finish chemistry, printed/dyed or RPET variants and all real order-specific operations must be disclosed; no finish, adhesive, fluorinated substance, cleaner molecule or emission is inferred. The actual whole assembled product is independently weighed in its declared conditioning state; a wet-dry article difference is not automatically water if finish, soil or other matter also changes. Establish liquid/retained/vapor water independently with actual compatible sampling and all real transfers; do not label a drain, droplet/mist or collected liquid as vapor. Where actual identified IR-active vapor measurement is required, the retained complete EPA320 method and its actual FTIR Protocol supply heated extractive transport/reference-spectrum/interference/background/state/analyte-spike-recovery and uncertainty procedures within their real scope. This is not a particulate/mist/totalVOC method or FTIR measurement of homonuclear N2/O2/monatomic Ar; no source-specific actual release, calibrated reference, matrix recovery or field eligibility is claimed. Its complete dated50-page PDF includes the FTIR Protocol/addendum/appendices, not an unavailable reference. PDF16 Eq3/4 use a tracer mixture fraction while the same-page DF>=10 legend conflicts: preserve original bytes and distinguish conserved corrected common-mole-basis phi=(tracer_spiked-tracer_native)/(tracer_direct-tracer_native), nonzero denominator, representative matched no-unaccounted-loss mixing, expected analyte=phi*analyte_direct+(1-phi)*analyte_native, from its reciprocal dilution ratio. This identity supplies no numerical concentration, setting or acceptance tolerance. Full Methods1–3 retain actual source geometry/traverse/non-cyclonic/size/location and calibrated velocity/state/density/flow restrictions; Method3 restricted matrix/interferences, N2/CO remainder and argon omission are not universal air composition, pure N2 or measured Ar. A duct result is not automatically uncontained fugitive-source coverage. Real collected condensate/mist/effluent is one whole wet receiver event, separate from actual final released species/medium. An actual necessary unestablished specific sampling/preservation/matrix/phase programme remains hold, not solved by a future SOP or finitecheck. Routine actual calibration/sampling/recovery in an already established eligible programme remains study qualification, not proof no method exists. No combustion, boiler, reacting water or thermal-drying recipe is presumed; any actual on-site generation requires its full real producer, fuels/air/O2/water/species/control/energy/waste interfaces and applicable methods before completeness. These dated EPA Internet copies do not assert regulatory conformity or actual study success. | Actual complete eligible procedure versus ordinary unperformed site/lot QA; preserve specific necessary unestablished method hold |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_complete_article` | reference product and source context | Check whole non-electric manual folding construction, steel ribs, metal shaft, polyester canopy, plastic handle, every supplied/onsite part and functional sleeve. Verify complete native identity fields and source applicability; a name/classification match or registration success alone is insufficient. | `peerless-style-0001`; `hf-manufacturing-2025`; `citta-factory` |
| `validation_q` | release and measured denominator | Recompute Q from unique first releases in declared conditioning state and reconcile full functional BOM excluding shipping packaging. Reinspection/repair/delivery never adds new Q. A zero-output batch has retained loads and no unit result. |  |
| `validation_normalization` | raw records and results | Verify raw values remain unnormalized; unit/rate conversion and genuine burden allocation precede the only section 8 normalization. Inventory cards and aggregation labels reference that result without another division. Inspect every table cell, card field, description, qualifier, formula input/output and source id. |  |
| `validation_closure` | manufacture, FG and combined gates | Independently close each material, relevant element, water/species and complete wet mass with raw/WIP/non-WIP stock vectors; reconcile manufacture plus FG with internal transfers cancelled. Do not force residuals or infer species/chemistry from one balance. |  |
| `validation_pools` | packing and service cohorts | Check all actual P/I/ER/S/EO/W movements and opening/closing empty, attached and reusable stock for each packaging article. Use gross physical shipments and original Qc for services; verify failed/rejected/unauthorized activities remain recorded. |  |
| `validation_native` | UUID/provider and sources | Verify exact reference property to unit-group reference unit and all other properties; preserve supplier-state, CAS, polymer/grade/route, geography, media and dataset type. Missing auxiliary identities remain explicit and cannot be replaced by incompatible UUIDs. Engineering consistency does not establish scientific approval, translation review or publication. |  |

### Complete applicability and accounting context

Normative scope is this complete manufacturing profile. Read the whole section and its conditions before applying an individual rule. A scientific conclusion or translation approval is not implied by an engineering check.

This manufacturing profile covers one complete non-electric handheld manual folding rain umbrella: a supplied folding frame with steel ribs and a metal shaft, a purchased finished polyester canopy fabric, a supplied plastic handle, and its declared functional fittings and matching reusable fabric sleeve. The whole finished Product family is narrowed by these physical qualifiers; it is never an exchange combining umbrellas with walking-sticks, seat-sticks, whips or riding-crops. Steel-rib construction is required for this profile; aluminium- or glass-fibre-rib variants require a reviewed extension. Loose ribs, umbrella cloth and pre-cut panels alone cannot be the finished reference product.

Peerless Style 0001 establishes a real manual folding product with steel ribs, a metal shaft, polyester canopy, plastic handle and matching sleeve. HF supplies complete manufacturing context; CITTA independently corroborates textile cutting, sewing, assembly and finished-goods checking. These sources are a transparent technical synthesis, not records of one SKU or factory order. This profile chooses receipt of a completed frame and finished roll fabric, then canopy and sleeve cutting/sewing, fitting, mechanical assembly, actual testing/cleaning and first whole-product quality release. Onsite fibre formation, metallurgy, frame fabrication, coating, printing and adhesive curing are not inferred from an assembly account. Sources: `peerless-style-0001`; `hf-manufacturing-2025`; `citta-factory`.

Record actual configuration and order requirements. No default umbrella weight, rib count, canopy area, fabric areal mass, dimension, density, finish chemistry, yield, drying temperature/time, weather rating, lifetime, age suitability, certification or emission factor is supplied. Marketing descriptions and AQL examples establish neither service-life equivalence nor a universal acceptance threshold. An undisclosed water-repellent treatment is not evidence for a fluorinated, PU or silicone formulation.

One physical whole manufactured manual folding steel-rib umbrella with metal shaft, polyester canopy, plastic handle and declared functional sleeve; production mix at plant, finished-product/manufactured route. The official broad family basename is preserved, but only this article is exchanged; it never aggregates canes/whips or loose parts. No fixed native composition, CAS, rib count, performance or item mass is supplied. Actual provider and supply boundary must match this narrowed configuration.

All required qualifiers belong in dataset metadata or equivalent full reference context. Product net mass includes actual component/retained water and the functional sleeve once; shipping cartons/bags/tape/crates are separately inventoried packaging.

Ordinary coating-provider or auxiliary identity gaps do not erase real operations. If an actual route or whole-product identity falls outside this profile, report that scope as incomplete; do not invent a successful process or replace it with purchased finished-product repacking.
| cohort_full_fates | actual declared configuration | For the newly accepted cohort Q=Q0. Q0 is independently fixed from unique first quality-release events for complete same-configuration umbrellas after every required factory operation and test, ready for the declared factory supply gate. It includes the declared functional matching reusable sleeve and all actual retained articles and water at release and excludes outer packaging tare. Reconcile each original Q0 on its original-material/configuration basis across disjoint net remaining external deliveries, every actual on-site accepted FG/held/returned/rework state, irreversible losses and other terminal dispositions. Gross return first leaves its old delivery position. Dispatch, return, repacking, retest or reacceptance never creates new Q. Current surviving wet mass and original water/material losses cannot both be restored and counted again. Opening old cohorts and later observed-H services use original Qc/Q0, not current output; delivery plus closing FG is sufficient only when all other postgate states/exits are absent. Q=0 or unknown retains actual raw loads without a per-unit result. | ilcd-detailed-2010 |
| provider_history | actual declared configuration | Keep complete physical raw/WIP/non-WIP/FG/return, packaging, installed-fluid and every actual equipment-fleet ledger separate from reference events and per-exchange burden vectors. Own opening WIP carries actual earlier foreground burdens once; only substantiated still-unused/unassigned closing WIP carries them forward. For attribution, A may add unassigned inherited opening burden to period raw burden and remove only demonstrated still-unassigned closing burden and a disjoint justified other-system/cohort handover. Already-net consumption is not stock-corrected a second time; accepted closing FG and services already performed for it are not deleted. A complete provider aggregate and its embedded material/transport/asset/history decomposition are mutually exclusive. Preserve failed attempts, idle/start-stop, inspection, samples, cleanout and repair loads. Actual complete upstreams match the whole supplied article/preparation and true availability point; no receipt or purchased-service label hides known on-site manufacture. Actual provider inclusion schedules cover current electricity, repair, transport and operating supplies as well as capital: an aggregate already including a metered foreground operation and that separate operation cannot both be charged. | ilcd-detailed-2010 |
| physical_transfer | actual declared configuration | T_accept is the actual physical transfer at the declared manufacture-to-FG-service gate; Q0 is the separately measured first-release reference-event denominator. Where the same configuration, state, event and window make them coincide, demonstrate that equality from independent records, never fit Q0 from physical closure. The finished reference row declares the unit and is not another external shipment. Manufacturing, FG-service and consolidated gates retain every real wet stock and gross exchange; consolidation cancels the one actual internal T_accept only, not external dispatch or real return. For an actually reacting species i, keep measured G_i formation and C_i consumption in its species equation; do not conserve reacting molecules by assumption or infer them from elemental closure. Chemical reactions create no net total-mass/element source; phase transfer is not chemical creation. Water additions/evaporation and all other terms must be mutually disjoint from water already included in whole supplied articles, carrier legs or releases. Unknown terms remain unresolved, not residual-fitted. | ilcd-detailed-2010 |
| whole_wet_pack | actual declared configuration | For each actual whole wet corrugated-carton, PE-bag, sealing-tape or plastic-crate pool use O_empty+O_attachedWIP+O_attachedFG+O_reusable+P+I_other+ERin+J_in+H2O_in-X_in=C_empty+C_attachedWIP+C_attachedFG+C_reusable+S_gross+EOout+W_whole+J_out+H2O_out-X_out. I_other is the sum of actual separately identified otherwise received whole packaging, including real supplier-included packaging when present, distinct from P and ERin and not another purchase; internal reuse R_internal cancels between matched positions and is not I_other. J is additional real non-water material and H2O is additional actual water transfer only to the extent not already included in another whole wet leg. O/C and every whole leg retain all contained matter: actual new material/water retained in C never erases its true influx. X subtracts only independently proved overlap with OTHER same-side flow terms, never C, real increments, opposite directions or card existence. Trace actual J/water sources/destinations with specific physical records and internal pairs; do not invent a generic provider, extra Q, separate constituent waste or balancing flow. Gross shipments, external returns received/sent and true whole waste stay physically full regardless of environmental use shares. These four specific article pools are conditional on actual configuration; these are actual conditional packaging choices, not a universal material, tare, repair, water uptake or mass. The inherited I cards mean this I_other whole-article transfer, never the internal R_internal loop or a generic unknown balancing addition. | ilcd-detailed-2010 |
| receiver_service | actual declared configuration | One actual contaminated film, carton, cloth, machine, filter, rejected umbrella part or liquid consignment has one whole receiver event Qt containing substrate/article, retained fabric/soil/finish matter and water once. Dry tare and measured originW/components are nonadditive nested analyses, not extra exported wastes unless physically separated before the boundary. Match its actual receiver/treatment/provider and extensive unit. Physical Qt and Qt/Q disclosure are not automatically the service demand: use only evidenced compatible nonoverlapping service A with the original cohort Qc/Q0, keeping physical transfer full. Unknown attribution remains unknown. Arithmetic illustration only: a shared10kg consignment is never shrunk to2.5kg by25% attribution and never charged as10kg again to every cohort. Different dry/wet or provider units require the actual full-composition/state bridge, not a hidden conversion or pure-component proxy. | ilcd-detailed-2010 |
| actual_fleets | actual declared configuration | Every actual sewing machine, cutting tool, tool, extraction/handling unit and reusable cloth keeps a complete actual configured fleet: new/used receipts, external returns received/sent, real retirement/whole waste, installed/opening/closing holdings and disjoint repair/fluid changes. HF and CITTA manufacturing context shows actual sewing/cutting operations, not the same Peerless plant, installed machine or shared SKU. A whole line/provider already including a machine and a separate purchase of that machine cannot both be added. Measure actual complete configuration mass M if count/mass conversion is needed; Item(s) is not kg and no machine mass or lifetime is supplied. Actual service h must match a complete real provider history and observed original-cohort use, unused/unassigned capacity and inherited burdens; physical fleet kg is not scaled by a service share. Separately supplied oil/filter/belt and whole contaminated removed items need their own atomic interfaces when actually present; contained parts remain nested in a whole asset. Receipt/return/shipment/retirement cards disclose physical V only; they are not a second capital purchase when the actual compatible service history already owns the same upstream manufacture. Actual provider-service scope and separately metered operation/repair must be nonoverlapping. A cotton cloth has the same full gross receipt/return/whole-waste and opening/closing fleet record; actual laundering or replacement must carry all disjoint real provider and utility burdens. No cloth lifetime or laundering load is assumed. | ilcd-detailed-2010 |
| actual_method | actual declared configuration | This profile receives already finished canopy fabric and a complete frame. Matching sleeve colour or appearance does not prove the same fibre, finish or areal mass as the canopy. One polyester input card covers only real cuts from the same independently verified supplied textile; a genuinely different sleeve, reinforcement or strap material needs its own specific atomic article/provider and actual cutting record before completeness, never a guessed composition or duplicate whole-fabric purchase. Real prior fibre formation, weaving/dyeing/coating/printing and frame metallurgy/forming/finishing remain inside their complete compatible actual upstream providers once. An actual known on-site operation is not moved upstream by renaming a receipt. HF factory-tour fiberglass golf ribs, epoxy versus screws, eight-gores, test-cycle and spray examples are retained contrary context, not requirements for this steel-rib manual folding profile. Actual supplied finish chemistry, printed/dyed or RPET variants and all real order-specific operations must be disclosed; no finish, adhesive, fluorinated substance, cleaner molecule or emission is inferred. The actual whole assembled product is independently weighed in its declared conditioning state; a wet-dry article difference is not automatically water if finish, soil or other matter also changes. Establish liquid/retained/vapor water independently with actual compatible sampling and all real transfers; do not label a drain, droplet/mist or collected liquid as vapor. Where actual identified IR-active vapor measurement is required, the retained complete EPA320 method and its actual FTIR Protocol supply heated extractive transport/reference-spectrum/interference/background/state/analyte-spike-recovery and uncertainty procedures within their real scope. This is not a particulate/mist/totalVOC method or FTIR measurement of homonuclear N2/O2/monatomic Ar; no source-specific actual release, calibrated reference, matrix recovery or field eligibility is claimed. Its complete dated50-page PDF includes the FTIR Protocol/addendum/appendices, not an unavailable reference. PDF16 Eq3/4 use a tracer mixture fraction while the same-page DF>=10 legend conflicts: preserve original bytes and distinguish conserved corrected common-mole-basis phi=(tracer_spiked-tracer_native)/(tracer_direct-tracer_native), nonzero denominator, representative matched no-unaccounted-loss mixing, expected analyte=phi*analyte_direct+(1-phi)*analyte_native, from its reciprocal dilution ratio. This identity supplies no numerical concentration, setting or acceptance tolerance. Full Methods1–3 retain actual source geometry/traverse/non-cyclonic/size/location and calibrated velocity/state/density/flow restrictions; Method3 restricted matrix/interferences, N2/CO remainder and argon omission are not universal air composition, pure N2 or measured Ar. A duct result is not automatically uncontained fugitive-source coverage. Real collected condensate/mist/effluent is one whole wet receiver event, separate from actual final released species/medium. An actual necessary unestablished specific sampling/preservation/matrix/phase programme remains hold, not solved by a future SOP or finitecheck. Routine actual calibration/sampling/recovery in an already established eligible programme remains study qualification, not proof no method exists. No combustion, boiler, reacting water or thermal-drying recipe is presumed; any actual on-site generation requires its full real producer, fuels/air/O2/water/species/control/energy/waste interfaces and applicable methods before completeness. These dated EPA Internet copies do not assert regulatory conformity or actual study success. | epa-method320; epa-method1; epa-method2; epa-method3 |

Cards describe one actual exchange. A conditional row is absent only with recorded physical evidence; actual unlisted inputs, component returns, treatment outputs or species require additional atomic cards before a complete dataset. Card quantity text and protocol aggregation labels identify the result of the single section 8 normalization; they perform no new arithmetic.

Manufacturer process pages do not support the allocation hierarchy. The ILCD text is used qualitatively within its attributional scope; the multifunctional-printer QFD figure and recycling equations are adjacent countercontexts, not adopted umbrella factors.

Collection protocols take only raw totals/readings, identities, stock quantities and independent inherited vectors. Their aggregation_rule cell declares the final reference basis for the single calculation below; no protocol divides a raw value. For original Qc services, keep separate cohorts and their historical burdens, record only actual increments in H and leave future services unknown.

Q is the sum of measured net masses at each unique first whole-product quality release, including the declared functional sleeve and retained constituent water once. Use calibrated scales and the same BOM/conditioning scope under cp_release. Already released closing FG is already in Q; do not subtract it as manufacturing closing output.

For one same-configuration complete article define measured net mass M using calibrated whole-article weighing under cp_release; for counted component lots use independently measured lot-specific unit mass, sample size and uncertainty. Convert count to mass before the single normalization. Never infer umbrella mass from carton shipping weight or a secondary property.

Weigh complete finished roll fabric as supplied. Area/length records require actual width and same-lot measured areal mass. Nonrectangular canopy area is measured from the real panel geometry, not a bounding rectangle. Coating, contained water and polyester remain non-additive composition subledgers of one purchased fabric.

Keep raw meter units and convert kWh × 3.6 to MJ once. Water mass is independently weighed; volume requires measured substance/state-specific density. Integrated gas/liquid volumes are not multiplied by time again; actual rates are integrated over the measured interval. Do not use water density for another substance or the native water secondary volume coefficient as a measured density.

Every physical receipt/dispatch/return/waste retains full gross V in its native unit and the correct Q or original Qc denominator. Allocation applies only to associated burden vectors and never scales the physical transfer. Incoming article mass and embedded component/water mass cannot both be added to the same side.

Convert each raw numerator to its declared native unit before allocation: kWh × 3.6 = MJ; count × independently measured same-lot unit mass = kg; fabric area × independently measured same-lot areal mass = kg; liquid volume × independently measured density at recorded state = kg; integrate an actual rate once. Preserve originals and uncertainty; no preset material factors.

Keep complete physical raw/WIP/non-WIP/FG/return, packaging, installed-fluid and every actual equipment-fleet ledger separate from reference events and per-exchange burden vectors. Own opening WIP carries actual earlier foreground burdens once; only substantiated still-unused/unassigned closing WIP carries them forward. For attribution, A may add unassigned inherited opening burden to period raw burden and remove only demonstrated still-unassigned closing burden and a disjoint justified other-system/cohort handover. Already-net consumption is not stock-corrected a second time; accepted closing FG and services already performed for it are not deleted. A complete provider aggregate and its embedded material/transport/asset/history decomposition are mutually exclusive. Preserve failed attempts, idle/start-stop, inspection, samples, cleanout and repair loads. Actual complete upstreams match the whole supplied article/preparation and true availability point; no receipt or purchased-service label hides known on-site manufacture. Actual provider inclusion schedules cover current electricity, repair, transport and operating supplies as well as capital: an aggregate already including a metered foreground operation and that separate operation cannot both be charged. For an independently unassigned burden vector only, A_i=O_unassigned_i+B_period_i-C_still_unassigned_i-H_disjoint_other_i; actual original cohorts and provider coverage determine each term, never physical residual fitting.

result_i = N_i / D_c, once only. N_i is complete native gross V_i for every physical flow, or A_i for an allocated utility/service burden; D_c is Q of new first-release manufacture or original Qc of the observed service cohort. Q and Qc are measured kg at original release; keep cohort results separate before an explicit mass-weighted combination. For D_c=0 retain raw N_i and vectors without a unit result. first_whole_release is exactly 1 kg by definition.

For the newly accepted cohort Q=Q0. Q0 is independently fixed from unique first quality-release events for complete same-configuration umbrellas after every required factory operation and test, ready for the declared factory supply gate. It includes the declared functional matching reusable sleeve and all actual retained articles and water at release and excludes outer packaging tare. Reconcile each original Q0 on its original-material/configuration basis across disjoint net remaining external deliveries, every actual on-site accepted FG/held/returned/rework state, irreversible losses and other terminal dispositions. Gross return first leaves its old delivery position. Dispatch, return, repacking, retest or reacceptance never creates new Q. Current surviving wet mass and original water/material losses cannot both be restored and counted again. Opening old cohorts and later observed-H services use original Qc/Q0, not current output; delivery plus closing FG is sufficient only when all other postgate states/exits are absent. Q=0 or unknown retains actual raw loads without a per-unit result.

Keep complete physical raw/WIP/non-WIP/FG/return, packaging, installed-fluid and every actual equipment-fleet ledger separate from reference events and per-exchange burden vectors. Own opening WIP carries actual earlier foreground burdens once; only substantiated still-unused/unassigned closing WIP carries them forward. For attribution, A may add unassigned inherited opening burden to period raw burden and remove only demonstrated still-unassigned closing burden and a disjoint justified other-system/cohort handover. Already-net consumption is not stock-corrected a second time; accepted closing FG and services already performed for it are not deleted. A complete provider aggregate and its embedded material/transport/asset/history decomposition are mutually exclusive. Preserve failed attempts, idle/start-stop, inspection, samples, cleanout and repair loads. Actual complete upstreams match the whole supplied article/preparation and true availability point; no receipt or purchased-service label hides known on-site manufacture. Actual provider inclusion schedules cover current electricity, repair, transport and operating supplies as well as capital: an aggregate already including a metered foreground operation and that separate operation cannot both be charged.

T_accept is the actual physical transfer at the declared manufacture-to-FG-service gate; Q0 is the separately measured first-release reference-event denominator. Where the same configuration, state, event and window make them coincide, demonstrate that equality from independent records, never fit Q0 from physical closure. The finished reference row declares the unit and is not another external shipment. Manufacturing, FG-service and consolidated gates retain every real wet stock and gross exchange; consolidation cancels the one actual internal T_accept only, not external dispatch or real return. For an actually reacting species i, keep measured G_i formation and C_i consumption in its species equation; do not conserve reacting molecules by assumption or infer them from elemental closure. Chemical reactions create no net total-mass/element source; phase transfer is not chemical creation. Water additions/evaporation and all other terms must be mutually disjoint from water already included in whole supplied articles, carrier legs or releases. Unknown terms remain unresolved, not residual-fitted.

For each actual whole wet corrugated-carton, PE-bag, sealing-tape or plastic-crate pool use O_empty+O_attachedWIP+O_attachedFG+O_reusable+P+I_other+ERin+J_in+H2O_in-X_in=C_empty+C_attachedWIP+C_attachedFG+C_reusable+S_gross+EOout+W_whole+J_out+H2O_out-X_out. I_other is the sum of actual separately identified otherwise received whole packaging, including real supplier-included packaging when present, distinct from P and ERin and not another purchase; internal reuse R_internal cancels between matched positions and is not I_other. J is additional real non-water material and H2O is additional actual water transfer only to the extent not already included in another whole wet leg. O/C and every whole leg retain all contained matter: actual new material/water retained in C never erases its true influx. X subtracts only independently proved overlap with OTHER same-side flow terms, never C, real increments, opposite directions or card existence. Trace actual J/water sources/destinations with specific physical records and internal pairs; do not invent a generic provider, extra Q, separate constituent waste or balancing flow. Gross shipments, external returns received/sent and true whole waste stay physically full regardless of environmental use shares. These four specific article pools are conditional on actual configuration; these are actual conditional packaging choices, not a universal material, tare, repair, water uptake or mass. The inherited I cards mean this I_other whole-article transfer, never the internal R_internal loop or a generic unknown balancing addition.

One actual contaminated film, carton, cloth, machine, filter, rejected umbrella part or liquid consignment has one whole receiver event Qt containing substrate/article, retained fabric/soil/finish matter and water once. Dry tare and measured originW/components are nonadditive nested analyses, not extra exported wastes unless physically separated before the boundary. Match its actual receiver/treatment/provider and extensive unit. Physical Qt and Qt/Q disclosure are not automatically the service demand: use only evidenced compatible nonoverlapping service A with the original cohort Qc/Q0, keeping physical transfer full. Unknown attribution remains unknown. Arithmetic illustration only: a shared10kg consignment is never shrunk to2.5kg by25% attribution and never charged as10kg again to every cohort. Different dry/wet or provider units require the actual full-composition/state bridge, not a hidden conversion or pure-component proxy.

Every actual sewing machine, cutting tool, tool, extraction/handling unit and reusable cloth keeps a complete actual configured fleet: new/used receipts, external returns received/sent, real retirement/whole waste, installed/opening/closing holdings and disjoint repair/fluid changes. HF and CITTA manufacturing context shows actual sewing/cutting operations, not the same Peerless plant, installed machine or shared SKU. A whole line/provider already including a machine and a separate purchase of that machine cannot both be added. Measure actual complete configuration mass M if count/mass conversion is needed; Item(s) is not kg and no machine mass or lifetime is supplied. Actual service h must match a complete real provider history and observed original-cohort use, unused/unassigned capacity and inherited burdens; physical fleet kg is not scaled by a service share. Separately supplied oil/filter/belt and whole contaminated removed items need their own atomic interfaces when actually present; contained parts remain nested in a whole asset. Receipt/return/shipment/retirement cards disclose physical V only; they are not a second capital purchase when the actual compatible service history already owns the same upstream manufacture. Actual provider-service scope and separately metered operation/repair must be nonoverlapping. A cotton cloth has the same full gross receipt/return/whole-waste and opening/closing fleet record; actual laundering or replacement must carry all disjoint real provider and utility burdens. No cloth lifetime or laundering load is assumed.

This profile receives already finished canopy fabric and a complete frame. Matching sleeve colour or appearance does not prove the same fibre, finish or areal mass as the canopy. One polyester input card covers only real cuts from the same independently verified supplied textile; a genuinely different sleeve, reinforcement or strap material needs its own specific atomic article/provider and actual cutting record before completeness, never a guessed composition or duplicate whole-fabric purchase. Real prior fibre formation, weaving/dyeing/coating/printing and frame metallurgy/forming/finishing remain inside their complete compatible actual upstream providers once. An actual known on-site operation is not moved upstream by renaming a receipt. HF factory-tour fiberglass golf ribs, epoxy versus screws, eight-gores, test-cycle and spray examples are retained contrary context, not requirements for this steel-rib manual folding profile. Actual supplied finish chemistry, printed/dyed or RPET variants and all real order-specific operations must be disclosed; no finish, adhesive, fluorinated substance, cleaner molecule or emission is inferred. The actual whole assembled product is independently weighed in its declared conditioning state; a wet-dry article difference is not automatically water if finish, soil or other matter also changes. Establish liquid/retained/vapor water independently with actual compatible sampling and all real transfers; do not label a drain, droplet/mist or collected liquid as vapor. Where actual identified IR-active vapor measurement is required, the retained complete EPA320 method and its actual FTIR Protocol supply heated extractive transport/reference-spectrum/interference/background/state/analyte-spike-recovery and uncertainty procedures within their real scope. This is not a particulate/mist/totalVOC method or FTIR measurement of homonuclear N2/O2/monatomic Ar; no source-specific actual release, calibrated reference, matrix recovery or field eligibility is claimed. Its complete dated50-page PDF includes the FTIR Protocol/addendum/appendices, not an unavailable reference. PDF16 Eq3/4 use a tracer mixture fraction while the same-page DF>=10 legend conflicts: preserve original bytes and distinguish conserved corrected common-mole-basis phi=(tracer_spiked-tracer_native)/(tracer_direct-tracer_native), nonzero denominator, representative matched no-unaccounted-loss mixing, expected analyte=phi*analyte_direct+(1-phi)*analyte_native, from its reciprocal dilution ratio. This identity supplies no numerical concentration, setting or acceptance tolerance. Full Methods1–3 retain actual source geometry/traverse/non-cyclonic/size/location and calibrated velocity/state/density/flow restrictions; Method3 restricted matrix/interferences, N2/CO remainder and argon omission are not universal air composition, pure N2 or measured Ar. A duct result is not automatically uncontained fugitive-source coverage. Real collected condensate/mist/effluent is one whole wet receiver event, separate from actual final released species/medium. An actual necessary unestablished specific sampling/preservation/matrix/phase programme remains hold, not solved by a future SOP or finitecheck. Routine actual calibration/sampling/recovery in an already established eligible programme remains study qualification, not proof no method exists. No combustion, boiler, reacting water or thermal-drying recipe is presumed; any actual on-site generation requires its full real producer, fuels/air/O2/water/species/control/energy/waste interfaces and applicable methods before completeness. These dated EPA Internet copies do not assert regulatory conformity or actual study success.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset only after all compatible upstream and treatment links are completed |
| downstream_use | Inventory for the declared whole manual folding rain-umbrella configuration with separate observed service-cohort supplement |
| allowed_use | Configuration-specific manufacturing comparisons only with matched gates, conditioning, BOM and service coverage |
| excluded_use | Whole CPC38921 coverage; lifetime/performance equivalence; other rib constructions; carbon-neutral/certification claims; automatic recycling credits; future service estimates presented as observations |
| required_metadata | All reference qualifiers, native IDs/property/unit groups, original Qc, H, actual service links, stage/provider boundaries and unresolved auxiliaries |
| required_quality_disclosure | Raw data, stock/vector closure, conversion/normalization lineage, rejected/failed work, source applicability, uncertainty and upstream gaps; scientific and translation review states |
| update_trigger | Change in whole-product construction, steel-rib supply, fibre/finish, handle/formulation, release gate, native property, actual route, supplier boundary or service/waste model |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `peerless-style-0001` | literature | Peerless Umbrella, Style 0001 — The ONE, https://www.peerlessumbrella.com/product/style-0001/ (complete publisher HTML snapshot 2026-10-23) | Real whole manual folding product construction and matching sleeve; no default mass/dimension/lifetime or identical-SKU factory evidence |
| `hf-manufacturing-2025` | literature | HF Umbrella, Umbrella Manufacturing Process: From Specification to Final Inspection, 9 December 2025, https://www.hfumbrella.com/umbrella-manufacturing-process (complete publisher HTML snapshot 2026-10-23) | Full receipt, cutting/sewing, canopy/frame fitting, mechanical inspection, finishing and packing context; optional tests/printing are order dependent; not an allocation source |
| `citta-factory` | literature | CITTA Umbrella, Inside CITTA umbrella production, https://cittaumbrella.com/umbrella-factory/ (complete publisher HTML snapshot 2026-10-23) | Independent manufacturer corroboration of fabric preparation, sewing/component assembly and finished-goods checking; no numeric factor or full upstream fabrication proof |
| `ilcd-detailed-2010` | official_guidance | European Commission JRC, ILCD Handbook — General guide for Life Cycle Assessment — Detailed guidance, first edition March 2010, §§7.9.2–7.9.3, printed pp255–272 (PDF pp275–292), https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Qualitative attributional allocation hierarchy and 100% vector conservation only; no numeric transfer, no consequential substitution, no automatic recycling formula or QFD allocation of this single-function article |
| hf-tour-counter | literature | HF Umbrella,The Umbrella Manufacturing Process:An8-Step Factory Tour,30Jan2025. https://www.hfumbrella.com/eight-steps-for-umbrella-manufacturing | Actual sewing-machine operations and contrary fiberglass-golf/adhesive/screw/printed/8-gores/test examples; no number, chemistry, cycle or performance default. |
| un-cpc3-umbrella-boundary | official_guidance | UNSD,CPC3.0 Explanatory Notes,30June2025,complete3892/38921/38922andneighbours. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Current whole38921 versus parts38922 context only, no whole-category coverage or accepted mapping. |
| epa-method320 | official_guidance | US EPA Method320,14Jan2019 complete dated50-page PDF with actual FTIR Protocol/appendices. https://www.epa.gov/sites/default/files/2019-06/documents/method_320.pdf | Actual identified IR-active vapor sampling/reference/interference/spike programme and actualDFsource inconsistency/physical correction; no all-phase applicability or actualQA. |
| epa-method1 | official_guidance | US EPA Method1,28Apr2020 complete dated copy. https://www.epa.gov/sites/production/files/2017-08/documents/method_1_3.pdf | Actual geometry/traverse/non-cyclonic/size/location scope. |
| epa-method2 | official_guidance | US EPA Method2,2Aug2017 complete dated copy. https://www.epa.gov/sites/default/files/2017-08/documents/method_2.pdf | Actual calibrated velocity/pressure/temperature/density/flow; no nominal air recipe. |
| epa-method3 | official_guidance | US EPA Method3,3Aug2017 complete dated copy. https://www.epa.gov/sites/default/files/2017-08/documents/method_3.pdf | Restricted matrix/interference and N2CO remainder/Ar omission, not pure nitrogen or measured argon. |
