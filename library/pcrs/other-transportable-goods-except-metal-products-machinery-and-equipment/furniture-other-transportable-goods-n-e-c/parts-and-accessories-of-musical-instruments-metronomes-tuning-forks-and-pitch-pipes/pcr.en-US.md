---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.parts-and-accessories-of-musical-instruments-metronomes-tuning-forks-and-pitch-pipes
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Spring-driven mechanical metronome manufacture

This is a qualitative technical synthesis of a complete mechanical-metronome assembly route from actual supplied components to first complete quality release. Manufacturer supply-state evidence and a historical factory-adjustment patent have different roles; they do not describe one measured order or establish a universal recipe. All later factory quantities require real collection. Unknown is not zero.

## 1. Scope and Applicability

Applies only to newly manufactured complete battery-free spring-driven pendulum metronomes in a plastic case, without a bell, assembled from a compatible complete adjusted supplied mechanical works and actual finished enclosure parts/tempo scale. The terminal function is adjustable musical beat indication rather than time-of-day display, an acoustic musical instrument, a bare mechanism or purchased finished-product repacking. This narrow method requires the complete supplied spring/escapement/weighted-pendulum ownership, fitting and final musical-tempo test/adjustment gate. Genuine onsite component manufacture is outside this evidenced default route until its own raw stock, actual processing, energy, whole formulations, losses and acceptance evidence are added explicitly. No material is hidden behind an assumed complete assembly when actually supplied separately.

Electronic/digital/battery or quartz metronomes; bell-equipped variants; tuners, tuning forks and pitch pipes; whole clocks/watches and clock-as-metronome substitution; toys; complete musical instruments; separately marketed gears, springs, shells, pendulums, weights or movements; wood-case manufacture; consumer use, retail and product end-of-life. Actual manufacturing samples, rejects, failed work, startup/idle/cleanup, WIP and onsite postrelease service are retained within their declared gates.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.parts-and-accessories-of-musical-instruments-metronomes-tuning-forks-and-pitch-pipes |
| classification_refs | CPC 3.0 38360; narrower; current accepted association: `classifications/mappings/cpc-3.0-to-pcr.yaml` and `docs/adr/cpc3-additional34-20261029-38360.md`; complete method scope/exclusions apply, not full-leaf or scientific/translation approval |
| covered_products | Complete newly manufactured no-bell battery-free spring-driven weighted-pendulum metronome in a plastic case |
| excluded_products | Electronic/digital/battery or quartz metronomes; bell-equipped variants; tuners, tuning forks and pitch pipes; whole clocks/watches and clock-as-metronome substitution; toys; complete musical instruments; separately marketed gears, springs, shells, pendulums, weights or movements; wood-case manufacture; consumer use, retail and product end-of-life. Actual manufacturing samples, rejects, failed work, startup/idle/cleanup, WIP and onsite postrelease service are retained within their declared gates. |
| representative_product | Actually specified complete plastic-cased spring metronome; no universal mass or tempo/precision threshold |
| production_route | Receive complete adjusted no-bell works and finished plastic shell/bottom/cover with declared tempo-scale/key scope; verify compatible supply state; fit and close the assembly; wind/start under actual specification; observe beats and alternate half-cycles against calibrated timing; adjust only where actual mechanism/specification permits; inspect and first-release the complete instrument; retain later actual storage/handling/packing service separately |
| market_state | Complete newly first-quality-released instrument at factory; packing excluded from net product mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide an adjustable visible/audible musical beat from an actual hand-wound spring and weighted pendulum |
| How much | 1 kg of complete newly first-released instruments of the same declared configuration |
| How well | Actual manufacturer/specification acceptance and traceable beat/half-cycle/functional observations; no universal numeric precision or certification claim |
| How long or cycle | Production cohort with first-release events; later service recorded over explicit actual H for original cohort c and original Q_c; no invented lifetime |
| reference_flow_link | finished_metronome |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | complete no-bell spring-drive and pendulum function; model and full accepted configuration including key and scale state; complete supplied works BOM and component upstream owner; plastic resin and actual enclosure supply/finish; actual musical-tempo specification and test setup; calibrated timer and measured half-cycles uncertainty and disposition; independently weighed complete net mass and moisture; first-release Q and raw WIP non-WIP vectors; original released cohort Q_c and observed service H; all actual failed or unpermitted work and posttests; each package pool six gross legs and one upstream owner; actual environmental moisture and whole-article water ownership; capital asset physical stocks versus actual service burden; exact native identity restrictions and compatible provider; attributional allocation need and exchange-specific driver; site and period with full physical gates and reconciliation |

Declare every required qualifier in the actual dataset metadata or equivalent product/reference context. The full native restrictions in the finished-output card also constrain this reference object.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| net_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Independently weigh the complete accepted configuration with a calibrated balance excluding sales/transit packaging, recording scale uncertainty and moisture state. Q sums new first-release net mass once; complete released closing FG remains in Q. Counts identify actual serials but supply neither guessed kg nor density from secondary coefficients. |
| native_units | all inventory rows | Native extensive property per row | per row | Preserve each native mass/energy/volume unit. Apply actual unit conversion and justified attribution before the only quotient. Integrated kWh/MJ/m3 is not multiplied by duration; integrate only a true measured rate. Substance density must be independently measured at the actual state; no general water-density substitution. |
| ledger_basis | all inventory rows | Declared row dimension | per reference flow | Use calc_single_quotient once only. A gross card uses the actual complete V and never a stock-corrected burden vector. A burden card uses its one legitimately assigned exchange vector. Manufacturing uses Q; service/packing uses the original Q_c over actual H. Protocols collect undivided raw observations and aggregation only references the same calculation. Q=0 keeps real loads and yields no unit result. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual complete supplied adjusted works and actual finished plastic enclosure components/tempo-scale/key state with embodied upstream manufacture retained |
| starting_condition_role | Manufacturing foreground starting from supplied functional assembly and enclosure articles; not bought-finished-metronome repacking |
| product_classification_scope | One physical complete spring-driven no-bell metronome subset of CPC 3.0 38360; classification is not canonical identity |
| recursive_input_rule | A purchased finished metronome is not this default manufacturing feed. Real returned original instruments retain their original burden and serial history, with incremental service only; components and complete works are identified by real supply state |
| upstream_dataset_requirement | One verified compatible upstream provider per actual whole supplied works/article/formulation; disclose cutoffs without treating UUID identity as provider approval |
| disclosure | Supply completeness and physical material state; scope of manufacturer/patent synthesis; actual site period; acceptance Q; all stocks/vectors; actual H; packing/asset/thermal/water ownership; true unresolved rows |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_complete | manufacture | Retain actual complete works, weighted pendulum, actual tempo scale, key, case shell/bottom/front cover and mounting/closure to one complete instrument. Verify included versus separate supply; no extra spring/gear cutting, spring metallurgy, polymer moulding, machining lubricant or yield is inferred from operation or a parts catalogue. All actual additional onsite processes require explicit atomic inputs, losses and evidence before use. | `wittner-parts`; `wittner-plastic` |
| boundary_release | manufacture | Include actual fitting, winding/starting, beat observations and allowed adjustment, inspection, failures, Q=0 periods, startup/stop/idle/cleanup and rework up to first complete quality release. A supplier-adjusted movement still requires the installed complete instrument to meet its actual specification; no copied patent setting or catalogue tempo is a universal threshold. | `wittner-parts`; `wittner-manual`; `franz-metronome-patent` |
| boundary_first_q | first-release gate | Q contains every newly first-released complete instrument once, including released closing FG. Manufacturing closing burden Bclose includes only raw/WIP and unassigned non-WIP stores or unused charges; never subtract the manufacturing burden of already released FG. Do not count both Q and its closing FG as two outputs. Internal same-product transfers cancel in the combined boundary and never create another purchase or Q. |  |
| boundary_raw_vectors | all stocks | Keep independent physical quantities and every inherited exchange vector for opening/closing raw, WIP, unassigned non-WIP stores and unused service charge. Convert raw units and justify attribution before normalization. Already stock-corrected consumption is not stock-corrected again. Ordinary manufacturing failures, samples, waste, external sales or disposal do not themselves transfer burdens away. |  |
| boundary_service | handling and packaging | Keep actual postrelease storage, handling, packing, reinspection and real rework as incremental service to original cohort c with original Q_c over explicit observed H. Already performed service remains assigned when the instruments stay in FG; only unused/unassigned future service may carry forward. Shipments, returns and reacceptance are not new production. Unknown future service is disclosed, not zero-filled or extrapolated. |  |
| boundary_postwork | actual postrelease work | Record actual manufacturer/spec permission, posttests, acceptance/hold and final disposition for real postrelease work; do not assume damaged parts are repairable. These gates govern authorized work and continued conformity, not whether already performed material/energy/water/losses exist. Failed, unpermitted or nonconforming work retains original-cohort burden and actual hold/waste disposition. Passive environmental humidity exchange does not require a fictional repair permission. |  |
| boundary_packing | each real package pool | Record P/I/ER/S/EO/W per actual folding-carton and PE-film pool, with conditional cards for each real direction. Distinguish empty, WIP-attached, FG-attached and reusable opening/closing states. Gross S follows gross physical shipments, not net product Q or economic share. Supplier-included I keeps real ingress plus one upstream owner. A single mixed waste outlet has one atomic Waste exchange and nonadditive pool Wraw subaccounts; separated W cards activate only for genuine separate outlets. |  |
| boundary_water_overlap | whole wet material and water | Whole supplied articles/preparations contain their supplied water/components once. Use disjoint onsite additions or an explicit whole-article/component bridge, never overlapping totals. X_in/X_out removes duplicate OTHER same-side flow terms only; it cannot delete actual new material/water ingress because retained in closing stock. Keep actual influx and full closing wet mass together, including natural storage uptake/desorption. Measure real water phases/species independently; no residual fits two unknowns. |  |
| boundary_energy | actual energy and thermal carrier | No boiler, steam, fuel, compressed-air supply or combustion emission is presumed for this assembly route. If actually present add each carrier/fuel/gas species as its own card before use. Real steam/heat exchange needs distinct carrier mass and actual thermodynamic state/enthalpy, external Product return-water legs and a single supplier energy/water owner; no double purchase of provider heat/steam/water. Keep integrated volumes versus rates explicit. |  |
| boundary_assets | assets | Keep real physical fixture/equipment and each new/used maintenance part/fluid, wet opening/closing stock, receipts/returns/discards and actual service burden separately. Gross physical asset legs are not reduced by allocation shares; no fixed lifetime or one whole asset per kg. Add any actual material or species missing from the conditional inventory before a dataset claims completeness. |  |
| packaging_receipt_basis | packaging | For each actual whole packaging article, P records paid procurement (standalone or bundled, with or without a separate invoice). I records first non-purchased external ingress, including standalone gifts, loans, rental/pool issues and unpaid supplier-attached packaging; supplier attachment is only one I subset. ER requires the same item or an auditable matching batch linked to this site's own prior outward record; another party's prior use alone is not a return. P/I/ER are disjoint. The existing matching physical-article cards and raw subledgers cover these origins subject to every native material/form/state qualification; incompatible actual articles require their own atomic rows, never a substitute UUID. X_in/X_out remain separate measured material/water-change terms, not a substitute for whole-article receipt. Keep gross wet quantities, owner/custodian, payment/non-purchase basis, provenance, prior-outward links, actual state/unit and inherited manufacture/service vectors. A free receipt is neither a new manufacture nor automatically burden-free: attribute actual service and incremental transport/handling once to the proper original cohort/denominator and retain genuinely unused service separately, without a default lifetime or credit. Stock, physical gross legs and burden vectors remain separate. This is the declared conserving foreground-accounting implementation, not a claim that the cited source prescribes these variable names. | ilcd-allocation |

## 6. Process Inventory Structure

Every card below is conditional on its actual event and exact physical compatibility. Burden and gross-disclosure dimensions are distinct, with their conditions retained in each complete description. Future real exchanges outside these candidates must be added individually; an unmeasured or failed event is never silently zero. Card source_ids support qualitative product/supply or allocation context only; every non-fixed amount comes from its actual collection protocol and never from a manufacturer catalogue or native comment.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | Receive compatible components; fit; adjust/test; first release | required | Actual new complete plastic-cased no-bell spring metronome assembly | manufacturing foreground | finished_metronome |
| handling | Actual original-cohort postrelease service | conditional | Actual storage/handling/return/reinspection/rework over H | incremental service and gross disclosure | Q_c; no new Q |
| packaging | Actual package service and six directional material events | conditional | Each real folding-carton or PE-film pool and actual packing work | service burden plus distinct physical disclosure | Q_c; no new Q |
| assets | Actual fixture capital service and maintenance stocks | conditional | Actual installed asset/service and physical movement only | capital service separated from physical asset | assigned cohort Q or Q_c; no new Q |

### Process: Receive compatible components; fit; adjust/test; first release (`manufacture`)

#### Inputs

##### Product flows

###### Complete adjusted movement supply (`complete_works`)

Receive one compatible complete no-bell spring movement with its actually supplied frame, spring drive, escapement, bearings, weighted pendulum and any supplied key/lubrication. Verify BOM against the complete-work supply state; do not separately buy its gears, spring, oil or weights. A bare frame or spring box is not this input. UUID remains unresolved for this single actual article/preparation; verify exact specification, complete supply scope, state and provider before binding. The name is not a collective fallback and does not establish actual occurrence or quantity. Burden dimension: prepare A for the named original cohort once; retain a separate full raw gross V ledger for this exchange. Do not turn a supplier-included component into another purchase. This manufacturing row binds Q_star to first-release Q.

- Selected flow: Complete adjusted spring-driven metronome works with weighted pendulum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q_star; the sole quotient defined in section 8 for this row; cp_components.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_components`
- Sources: `wittner-parts`

###### Finished plastic case shell with declared scale state (`case_shell`)

Receive the actual finished plastic outer shell for a complete no-bell mechanical metronome. Include integral printed scale/finish in this one supplied article; if the scale is a separate supply use scale_plate once and exclude it here. Disclose resin and actual supplier-completed manufacture without inventing onsite moulding. Native Product: one unspecified plastic enclosure part; industry-average-estimate mix, with no fixed polymer, CAS, manufacturing route, geographic supply or secondary property. Synonyms describe plastic enclosure/casing/chassis/shell. It does not prove injection moulding, ABS/PS grade, pigmentation, finish, transparency, optical quality or this supplier. Use only the single finished housing article named by this card, with actual resin/finish/supplier scope disclosed; do not adopt the native mix label as a measured amount. Burden dimension: prepare A for the named original cohort once; retain a separate full raw gross V ledger for this exchange. Do not turn a supplier-included component into another purchase. This manufacturing row binds Q_star to first-release Q.

- Selected flow: Plastic housing `8751d2f6-df48-47d3-ac51-d34f96fbec96`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q_star; the sole quotient defined in section 8 for this row; cp_components.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_components`
- Sources: `wittner-parts`

###### Finished plastic bottom (`case_bottom`)

Receive one compatible finished case bottom as a separate enclosure component only when not already in the supplied shell. Mount/close it after works installation as the actual design specifies; do not add a generic material percentage. Native Product: one unspecified plastic enclosure part; industry-average-estimate mix, with no fixed polymer, CAS, manufacturing route, geographic supply or secondary property. Synonyms describe plastic enclosure/casing/chassis/shell. It does not prove injection moulding, ABS/PS grade, pigmentation, finish, transparency, optical quality or this supplier. Use only the single finished housing article named by this card, with actual resin/finish/supplier scope disclosed; do not adopt the native mix label as a measured amount. Burden dimension: prepare A for the named original cohort once; retain a separate full raw gross V ledger for this exchange. Do not turn a supplier-included component into another purchase. This manufacturing row binds Q_star to first-release Q.

- Selected flow: Plastic housing `8751d2f6-df48-47d3-ac51-d34f96fbec96`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q_star; the sole quotient defined in section 8 for this row; cp_components.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_components`
- Sources: `wittner-parts`

###### Finished transparent plastic front cover (`front_cover`)

Receive one actual compatible transparent front cover, separate from the case shell and the shipping packaging. Transparency/polymer and supplied finish require actual specification; no glass substitution or assumed clear-resin grade. Native Product: one unspecified plastic enclosure part; industry-average-estimate mix, with no fixed polymer, CAS, manufacturing route, geographic supply or secondary property. Synonyms describe plastic enclosure/casing/chassis/shell. It does not prove injection moulding, ABS/PS grade, pigmentation, finish, transparency, optical quality or this supplier. Use only the single finished housing article named by this card, with actual resin/finish/supplier scope disclosed; do not adopt the native mix label as a measured amount. Burden dimension: prepare A for the named original cohort once; retain a separate full raw gross V ledger for this exchange. Do not turn a supplier-included component into another purchase. This manufacturing row binds Q_star to first-release Q.

- Selected flow: Plastic housing `8751d2f6-df48-47d3-ac51-d34f96fbec96`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q_star; the sole quotient defined in section 8 for this row; cp_components.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_components`
- Sources: `wittner-parts`

###### Separately supplied tempo scale (`scale_plate`)

Conditional only for one separately supplied actual tempo scale not integral to case/frontplate/complete works. Record plate material, markings and configuration from supplier specification; the aluminium Taktell examples do not establish Maelzel material. Any actual onsite printing requires individual whole inks/solvents/energy and losses to be added before use, not hidden in this finished-plate row. UUID remains unresolved for this single actual article/preparation; verify exact specification, complete supply scope, state and provider before binding. The name is not a collective fallback and does not establish actual occurrence or quantity. Burden dimension: prepare A for the named original cohort once; retain a separate full raw gross V ledger for this exchange. Do not turn a supplier-included component into another purchase. This manufacturing row binds Q_star to first-release Q.

- Selected flow: Finished mechanical-metronome tempo scale plate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q_star; the sole quotient defined in section 8 for this row; cp_components.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_components`
- Sources: `wittner-parts`

###### Separately supplied winding key (`winding_key`)

Conditional only for the separately supplied compatible key outside the complete-works BOM. Record actual material/coating and supplied key scope; supplied key included in complete_works has no second purchase. Record temporary bottom storage for dispatch without creating a second product or excluding the key from accepted net configuration. UUID remains unresolved for this single actual article/preparation; verify exact specification, complete supply scope, state and provider before binding. The name is not a collective fallback and does not establish actual occurrence or quantity. Burden dimension: prepare A for the named original cohort once; retain a separate full raw gross V ledger for this exchange. Do not turn a supplier-included component into another purchase. This manufacturing row binds Q_star to first-release Q.

- Selected flow: Finished mechanical-metronome winding key
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q_star; the sole quotient defined in section 8 for this row; cp_components.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_components`
- Sources: `wittner-parts`; `wittner-manual`

###### Separately supplied assembly steel screw (`assembly_screw`)

Conditional for actual assembly steel fasteners not supplied in the complete works or enclosure. Follow actual specification and tightening/inspection records; no invented screw count or torque. Native Product is a steel screw, auxiliary assembly fastener, production mix at plant GLO, Mass/kg only; no fixed steel grade, coating, geometry, CAS or supplier. Use only a real steel screw with actual specification and stage owner, not a complete movement, brass screw, wooden repair or other fastener. Burden dimension: prepare A for the named original cohort once; retain a separate full raw gross V ledger for this exchange. Do not turn a supplier-included component into another purchase. This manufacturing row binds Q_star to first-release Q.

- Selected flow: Steel screw `895204f6-6425-4814-afc5-cb97e530e892`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q_star; the sole quotient defined in section 8 for this row; cp_components.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_components`
- Sources: `wittner-parts`

###### Actual extra whole oil formulation (`onsite_oil`)

Conditional for actual extra manufacturer-specified mineral-oil lubricant preparation used onsite. Purchase the whole supplied formulation once, with assays/additives/carrier only as nonadditive subaccounts. No oil is required merely because a mechanism has moving parts; supplied internal lubrication belongs to complete_works. PAO synthetic, wax/solvent and fixed-calorific-value candidates do not establish this unknown formulation. UUID remains unresolved for this single actual article/preparation; verify exact specification, complete supply scope, state and provider before binding. The name is not a collective fallback and does not establish actual occurrence or quantity. Burden dimension: prepare A for the named original cohort once; retain a separate full raw gross V ledger for this exchange. Do not turn a supplier-included component into another purchase. This manufacturing row binds Q_star to first-release Q.

- Selected flow: Whole mineral lubricating-oil preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q_star; the sole quotient defined in section 8 for this row; cp_components.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_components`
- Sources: `ilcd-allocation`

###### Actual tap water for assembly cleaning (`manufacturing_water`)

Conditional for actual tap-water use in cleaning/support; no wet-production step is assumed. Measure all actual successful/failed cleanup and retain raw influx even when some water remains in closing wet stock. Native Product is treated tap/municipal/city/potable/public-supply water, production mix in factory, water-production supply, reference Mass/kg with secondary Volume coefficient 0.001. Treatment/quality varies locally; no fixed CAS/geography or factory density is verified. Bind only actual treated plumbing supply, not humidity, raw reservoir water, reaction water or steam. Do not use the secondary coefficient as measured density: independently measure this water state for volume-to-mass conversion. Burden dimension: prepare A for the named original cohort once; retain a separate full raw gross V ledger for this exchange. Do not turn a supplier-included component into another purchase. This manufacturing row binds Q_star to first-release Q.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q_star; the sole quotient defined in section 8 for this row; cp_water.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `ilcd-allocation`

###### Assembly and calibration electricity (`manufacturing_electricity`)

Measure actual assembly tools, timing instrumentation, illumination and attributable support, including start/stop, idle, failed runs and cleanup. A hand-wound spring needs no battery; any electric test equipment is manufacturing support, not an electronic-metronome product. Preserve raw meter kWh then use the exact native energy-group factor 3.6 MJ/kWh before attribution and the single quotient. Native Product is CN grid-average alternating current below 1 kV, consumption mix to user; reference Net calorific value/MJ, not Mass. Apply this UUID only to a genuinely compatible CN low-voltage grid-consumption supply with the included generation/transmission boundary; another geography/voltage or own-generation route requires a different verified flow/provider. No direct grid-stack emission or second delivery-service purchase is inferred. Burden dimension: prepare A for the named original cohort once; retain a separate full raw gross V ledger for this exchange. Do not turn a supplier-included component into another purchase. This manufacturing row binds Q_star to first-release Q.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: A_row / Q_star; the sole quotient defined in section 8 for this row; cp_energy.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources: `ilcd-allocation`

##### Waste flows

##### Elementary flows

###### Actual atmospheric H2O uptake (`manufacture_humidity_uptake`)

Conditional for measured ordinary moisture uptake in the actual product/material/packing/asset pool during work or natural storage/handling. Retain true influx and full closing wet mass simultaneously. Exclude whole-supplied moisture already counted in its article ingress; X only removes another same-side overlap. Native Elementary resource is Water, in air; renewable material resource from air, reference Volume/m3 only, with no fixed CAS/geography or localized Chinese basename. Measure the water-substance vapour volume at its recorded state, not total moist-air volume. Determine its actual H2O mass independently with calibrated humidity/state/composition measurements and same-substance density; no liquid-water density or forced balance residual. This is actual environmental moisture uptake including passive storage, not purchased water or a permit-controlled repair. Gross physical disclosure only: A is the actual complete directional gross leg V in its native unit; no stock correction or economic scaling of V. This card creates no procurement, supplier burden, credit or new Q; any genuine burden dimension has one separate owner. This manufacturing row binds Q_star to first-release Q.

- Selected flow: Water, in air `d73aff1b-0b31-434f-8e44-87a08c93e13f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: A_row / Q_star; the sole quotient defined in section 8 for this row; cp_moisture.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_moisture`
- Sources:

#### Outputs

##### Product flows

###### First released complete mechanical metronome (`finished_metronome`)

Q is the sum of independently measured net masses of newly first-released complete instruments of the declared configuration after actual beat/calibration/functional acceptance. Check mounted works/pendulum and weight retention, winding/starting, marked tempo positions, observed timing and alternating half-cycle behaviour, case stability and closure under an actual documented specification. Record traceable timer calibration, setup/level/state, repeated observations, uncertainty, adjustments, acceptance/hold and examiner. No universal range, accuracy threshold, cycle life or certification is set. Native identity is one manufactured finished Product at plant, production mix, Mass/kg; no grade, CAS or geography is fixed. The broad family includes complete metronomes as well as other articles: bind only this complete battery-free spring/pivoted-pendulum tempo instrument in the declared plastic case. The unrelated general comment “384 Sports goods” is a taxonomy annotation defect; it does not change the consistent finished-metronome physical identity. It supplies no clock, movement-only, electronic drive, toy or factory-performance approval. Only first complete quality release is a manufacturing reference output; later storage/shipment/retest is not another release. This manufacturing row binds Q_star to first-release Q.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources: `wittner-parts`; `wittner-plastic`; `wittner-manual`; `franz-metronome-patent`

##### Waste flows

###### Actual separately discharged aqueous cleaning liquor (`spent_cleaning_liquor`)

Conditional for one actual separate aqueous cleaning-liquor outlet before treatment. Record whole liquor mass, real dissolved/suspended composition, independent water/species measurements and actual destination; COD is an indicator not a named chemical. No default wastewater or onsite treatment train, and no reuse of manganese-washing/municipal/treated-effluent identities. A common measured outlet receives all applicable source subaccounts once. UUID remains unresolved for this single actual article/preparation; verify exact specification, complete supply scope, state and provider before binding. The name is not a collective fallback and does not establish actual occurrence or quantity. Gross physical disclosure only: A is the actual complete directional gross leg V in its native unit; no stock correction or economic scaling of V. This card creates no procurement, supplier burden, credit or new Q; any genuine burden dimension has one separate owner. This manufacturing row binds Q_star to first-release Q.

- Selected flow: Spent aqueous metronome-cleaning liquor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q_star; the sole quotient defined in section 8 for this row; cp_waste.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources:

###### One actual mixed assembly/test waste outlet (`single_mixed_waste`)

Use only when there is one compatible actual mixed outlet. Weigh the complete wet container output once. Source Wraw for rejected instruments, loose parts, sample losses, case/film/carton pools and actual maintenance residues is independently measured/reconciled and nonadditive to the total. Keep opening/closing mixed-waste stocks. Separate real outlets require specific separate cards; activate no duplicate separated-paper/PE/fixture-waste card for material already in this container. Ordinary rejects/sales retain manufacture and treatment burdens. Native Waste is the single mixed manufacturing-waste stream from final assembly/factory testing at plant, production mix GLO, Mass/kg; no quantified amount, CAS, composition split or treatment is given. Bind only a genuinely compatible actual single mixed outlet, not a collection of independently dispatched wastes, WEEE or landfill service. Record source-pool Wraw and stock/composition separately without adding them to the measured container total; treatment provider is linked once. Gross physical disclosure only: A is the actual complete directional gross leg V in its native unit; no stock correction or economic scaling of V. This card creates no procurement, supplier burden, credit or new Q; any genuine burden dimension has one separate owner. This manufacturing row binds Q_star to first-release Q.

- Selected flow: Manufacturing waste, mixed `8a42279e-b14c-408f-98de-e52e0ea3ef3a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q_star; the sole quotient defined in section 8 for this row; cp_waste.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Actual H2O vapour to air (`manufacture_water_vapour`)

Conditional for independently established ordinary H2O vapour leaving work or natural storage/handling. Keep evaporation/desorption distinct from liquid waste, free/structural water and any real chemical reaction. Do not infer a gas species from VOC/COD or use one residual to fit two unknowns. Native Elementary flow is ordinary H2O water vapour, CAS 7732-18-5, Mass/kg, emissions to air unspecified; no fixed geography or additional property. The extensive synonym list includes ice/heavy/tritiated-water aliases, which do not authorize those materials or phases. Bind only actual ordinary-water vapour to air; reject the otherwise similarly named native emissions-to-water versions, liquid wastewater, isotope species or purchased steam. Gross physical disclosure only: A is the actual complete directional gross leg V in its native unit; no stock correction or economic scaling of V. This card creates no procurement, supplier burden, credit or new Q; any genuine burden dimension has one separate owner. This manufacturing row binds Q_star to first-release Q.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q_star; the sole quotient defined in section 8 for this row; cp_moisture.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_moisture`
- Sources:

### Process: Actual original-cohort postrelease service (`handling`)

#### Inputs

##### Product flows

###### Actual complete instrument physically returned into custody (`fg_received`)

Conditional actual gross custody event for the original released serial/cohort, with independently weighed current configuration and moisture. This is not a new product purchase, reference release, negative output or original-delivery reversal. Keep G and R, opening/closing FG, complete original history and any removed/added part or H2O difference. Native identity is one manufactured finished Product at plant, production mix, Mass/kg; no grade, CAS or geography is fixed. The broad family includes complete metronomes as well as other articles: bind only this complete battery-free spring/pivoted-pendulum tempo instrument in the declared plastic case. The unrelated general comment “384 Sports goods” is a taxonomy annotation defect; it does not change the consistent finished-metronome physical identity. It supplies no clock, movement-only, electronic drive, toy or factory-performance approval. Gross physical disclosure only: A is the actual complete directional gross leg V in its native unit; no stock correction or economic scaling of V. This card creates no procurement, supplier burden, credit or new Q; any genuine burden dimension has one separate owner. This actual service/event row binds Q_star to original Q_c over observed H.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q_star; the sole quotient defined in section 8 for this row; cp_service.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources:

###### Actual original-cohort service electricity (`service_electricity`)

Collect incremental storage/handling/reinspection/rework electricity for original cohort c over observed horizon H, with its original Q_c. Retain already performed service even for closing FG; carry only unused/unassigned future service charges. Actual failed or unpermitted work still keeps its electricity and hold/waste disposition. Native Product is CN grid-average alternating current below 1 kV, consumption mix to user; reference Net calorific value/MJ, not Mass. Apply this UUID only to a genuinely compatible CN low-voltage grid-consumption supply with the included generation/transmission boundary; another geography/voltage or own-generation route requires a different verified flow/provider. No direct grid-stack emission or second delivery-service purchase is inferred. Burden dimension: prepare A for the named original cohort once; retain a separate full raw gross V ledger for this exchange. Do not turn a supplier-included component into another purchase. This actual service/event row binds Q_star to original Q_c over observed H.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: A_row / Q_star; the sole quotient defined in section 8 for this row; cp_service_energy.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service_energy`
- Sources: `ilcd-allocation`

###### Actually installed replacement complete works (`replacement_works`)

Conditional only for actual postrelease work with one real replacement complete works outside the old assembly. Record manufacturer/specification permission, postwork tests, acceptance/hold/disposition, old works removal, new supply owner and any real losses. Lack of permission or failed tests does not erase performed input or manufacture burden. Reinspection does not create new Q; no assumed restoration of a broken part. UUID remains unresolved for this single actual article/preparation; verify exact specification, complete supply scope, state and provider before binding. The name is not a collective fallback and does not establish actual occurrence or quantity. Burden dimension: prepare A for the named original cohort once; retain a separate full raw gross V ledger for this exchange. Do not turn a supplier-included component into another purchase. This actual service/event row binds Q_star to original Q_c over observed H.

- Selected flow: Complete adjusted spring-driven metronome works with weighted pendulum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q_star; the sole quotient defined in section 8 for this row; cp_service.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `wittner-parts`

###### Actual service tap water (`service_water`)

Conditional real cleaning/support water over original-cohort H. Keep gross influx and complete closing wet-stock water; no automatic restoration or hypothetical cleaning. Actual unpermitted/failed cleaning still consumes real water and needs real waste/disposition records. Native Product is treated tap/municipal/city/potable/public-supply water, production mix in factory, water-production supply, reference Mass/kg with secondary Volume coefficient 0.001. Treatment/quality varies locally; no fixed CAS/geography or factory density is verified. Bind only actual treated plumbing supply, not humidity, raw reservoir water, reaction water or steam. Do not use the secondary coefficient as measured density: independently measure this water state for volume-to-mass conversion. Burden dimension: prepare A for the named original cohort once; retain a separate full raw gross V ledger for this exchange. Do not turn a supplier-included component into another purchase. This actual service/event row binds Q_star to original Q_c over observed H.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q_star; the sole quotient defined in section 8 for this row; cp_service.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `ilcd-allocation`

##### Waste flows

##### Elementary flows

###### Actual atmospheric H2O uptake (`service_humidity_uptake`)

Conditional for measured ordinary moisture uptake in the actual product/material/packing/asset pool during work or natural storage/handling. Retain true influx and full closing wet mass simultaneously. Exclude whole-supplied moisture already counted in its article ingress; X only removes another same-side overlap. Native Elementary resource is Water, in air; renewable material resource from air, reference Volume/m3 only, with no fixed CAS/geography or localized Chinese basename. Measure the water-substance vapour volume at its recorded state, not total moist-air volume. Determine its actual H2O mass independently with calibrated humidity/state/composition measurements and same-substance density; no liquid-water density or forced balance residual. This is actual environmental moisture uptake including passive storage, not purchased water or a permit-controlled repair. Gross physical disclosure only: A is the actual complete directional gross leg V in its native unit; no stock correction or economic scaling of V. This card creates no procurement, supplier burden, credit or new Q; any genuine burden dimension has one separate owner. This actual service/event row binds Q_star to original Q_c over observed H.

- Selected flow: Water, in air `d73aff1b-0b31-434f-8e44-87a08c93e13f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: A_row / Q_star; the sole quotient defined in section 8 for this row; cp_service_moisture.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service_moisture`
- Sources:

#### Outputs

##### Product flows

###### Actual complete instrument physically shipped from custody (`fg_shipped`)

Conditional actual gross custody event for the original released serial/cohort, with independently weighed current configuration and moisture. This is not a new product purchase, reference release, negative output or original-delivery reversal. Keep G and R, opening/closing FG, complete original history and any removed/added part or H2O difference. Native identity is one manufactured finished Product at plant, production mix, Mass/kg; no grade, CAS or geography is fixed. The broad family includes complete metronomes as well as other articles: bind only this complete battery-free spring/pivoted-pendulum tempo instrument in the declared plastic case. The unrelated general comment “384 Sports goods” is a taxonomy annotation defect; it does not change the consistent finished-metronome physical identity. It supplies no clock, movement-only, electronic drive, toy or factory-performance approval. Gross physical disclosure only: A is the actual complete directional gross leg V in its native unit; no stock correction or economic scaling of V. This card creates no procurement, supplier burden, credit or new Q; any genuine burden dimension has one separate owner. This actual service/event row binds Q_star to original Q_c over observed H.

- Selected flow: Parts and accessories of musical instruments, metronomes, tuning forks and pitch pipes `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q_star; the sole quotient defined in section 8 for this row; cp_service.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources:

##### Waste flows

##### Elementary flows

###### Actual H2O vapour to air (`service_water_vapour`)

Conditional for independently established ordinary H2O vapour leaving work or natural storage/handling. Keep evaporation/desorption distinct from liquid waste, free/structural water and any real chemical reaction. Do not infer a gas species from VOC/COD or use one residual to fit two unknowns. Native Elementary flow is ordinary H2O water vapour, CAS 7732-18-5, Mass/kg, emissions to air unspecified; no fixed geography or additional property. The extensive synonym list includes ice/heavy/tritiated-water aliases, which do not authorize those materials or phases. Bind only actual ordinary-water vapour to air; reject the otherwise similarly named native emissions-to-water versions, liquid wastewater, isotope species or purchased steam. Gross physical disclosure only: A is the actual complete directional gross leg V in its native unit; no stock correction or economic scaling of V. This card creates no procurement, supplier burden, credit or new Q; any genuine burden dimension has one separate owner. This actual service/event row binds Q_star to original Q_c over observed H.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q_star; the sole quotient defined in section 8 for this row; cp_service_moisture.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service_moisture`
- Sources:

### Process: Actual package service and six directional material events (`packaging`)

#### Inputs

##### Product flows

###### Folding sales carton upstream burden ownership (`carton_burden`)

Conditional for this actual single package material. One owner carries new whole-article upstream burden; supplier-included ingress I belongs to the original supplier article unless its burden is explicitly disjoint, not a second P. Return/reuse carries history without automatic new supply or credit. Prepare the burden vector independently of the six gross legs; do not mistake an internal use or stock-adjusted issue for another purchase. Native Product is one folding paperboard/cardboard box at plant, unspecified grade, cut/fold/laminate route; Mass/kg only and no fixed CAS/geography. The Chinese comment includes printing and delivery flat for filling, and says the board is not durable for continued transport use; the English comment is truncated. Bind only one compatible folding sales carton, not a reusable transit crate or a prescribed recycled-fibre blend. Real return legs do not assert durability. Actual board/adhesive/ink already supplied in the whole box have one upstream owner. Burden dimension: prepare A for the named original cohort once; retain a separate full raw gross V ledger for this exchange. Do not turn a supplier-included component into another purchase. This actual service/event row binds Q_star to original Q_c over observed H.

- Selected flow: Paper box `12d5d744-7725-4dbc-b102-43c80547f777`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q_star; the sole quotient defined in section 8 for this row; cp_packaging.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-allocation`

###### Folding sales carton — P: actual separately purchased whole package article received (`carton_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. P: actual paid standalone or bundled whole package article received. Activate only for this actual event/material pool; P and I are disjoint and include whole wet supply once. Keep opening/closing empty, WIP-attached, FG-attached and reusable states, actual moisture influx/loss, damage and internal reuse. Internal reuse cancels; complete closing wet mass never deletes a new ingress. Native Product is one folding paperboard/cardboard box at plant, unspecified grade, cut/fold/laminate route; Mass/kg only and no fixed CAS/geography. The Chinese comment includes printing and delivery flat for filling, and says the board is not durable for continued transport use; the English comment is truncated. Bind only one compatible folding sales carton, not a reusable transit crate or a prescribed recycled-fibre blend. Real return legs do not assert durability. Actual board/adhesive/ink already supplied in the whole box have one upstream owner. Gross physical disclosure only: A is the actual complete directional gross leg V in its native unit; no stock correction or economic scaling of V. This card creates no procurement, supplier burden, credit or new Q; any genuine burden dimension has one separate owner. This actual service/event row binds Q_star to original Q_c over observed H.

- Selected flow: Paper box `12d5d744-7725-4dbc-b102-43c80547f777`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q_star; the sole quotient defined in section 8 for this row; cp_packaging.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources:

###### Folding sales carton — I: actual supplier-included package ingress (`carton_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. I: actual supplier-included package ingress. Activate only for this actual event/material pool; P and I are disjoint and include whole wet supply once. Keep opening/closing empty, WIP-attached, FG-attached and reusable states, actual moisture influx/loss, damage and internal reuse. Internal reuse cancels; complete closing wet mass never deletes a new ingress. Native Product is one folding paperboard/cardboard box at plant, unspecified grade, cut/fold/laminate route; Mass/kg only and no fixed CAS/geography. The Chinese comment includes printing and delivery flat for filling, and says the board is not durable for continued transport use; the English comment is truncated. Bind only one compatible folding sales carton, not a reusable transit crate or a prescribed recycled-fibre blend. Real return legs do not assert durability. Actual board/adhesive/ink already supplied in the whole box have one upstream owner. Gross physical disclosure only: A is the actual complete directional gross leg V in its native unit; no stock correction or economic scaling of V. This card creates no procurement, supplier burden, credit or new Q; any genuine burden dimension has one separate owner. This actual service/event row binds Q_star to original Q_c over observed H.

- Selected flow: Paper box `12d5d744-7725-4dbc-b102-43c80547f777`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q_star; the sole quotient defined in section 8 for this row; cp_packaging.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources:

###### Folding sales carton — ER: actual external returned package received (`carton_er`)

ER: actual external returned package received. Activate only for this actual event/material pool; P and I are disjoint and include whole wet supply once. Keep opening/closing empty, WIP-attached, FG-attached and reusable states, actual moisture influx/loss, damage and internal reuse. Internal reuse cancels; complete closing wet mass never deletes a new ingress. Native Product is one folding paperboard/cardboard box at plant, unspecified grade, cut/fold/laminate route; Mass/kg only and no fixed CAS/geography. The Chinese comment includes printing and delivery flat for filling, and says the board is not durable for continued transport use; the English comment is truncated. Bind only one compatible folding sales carton, not a reusable transit crate or a prescribed recycled-fibre blend. Real return legs do not assert durability. Actual board/adhesive/ink already supplied in the whole box have one upstream owner. Gross physical disclosure only: A is the actual complete directional gross leg V in its native unit; no stock correction or economic scaling of V. This card creates no procurement, supplier burden, credit or new Q; any genuine burden dimension has one separate owner. This actual service/event row binds Q_star to original Q_c over observed H.

- Selected flow: Paper box `12d5d744-7725-4dbc-b102-43c80547f777`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q_star; the sole quotient defined in section 8 for this row; cp_packaging.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources:

###### Polyethylene wrapping film upstream burden ownership (`pe_film_burden`)

Conditional for this actual single package material. One owner carries new whole-article upstream burden; supplier-included ingress I belongs to the original supplier article unless its burden is explicitly disjoint, not a second P. Return/reuse carries history without automatic new supply or credit. Prepare the burden vector independently of the six gross legs; do not mistake an internal use or stock-adjusted issue for another purchase. Native Product is polyethylene film, CAS 9002-88-4, production mix at plant, Mass/kg only; no fixed density, resin branching grade, thickness, geography or extrusion route. Its comment describes PE packaging film and contrasts rival PET: PET/polyester, PP, granulate or an extrusion service is not this material. Bind only a real single PE film layer, with actual additives/coating and provider checked; do not purchase its ethylene/resin a second time. Burden dimension: prepare A for the named original cohort once; retain a separate full raw gross V ledger for this exchange. Do not turn a supplier-included component into another purchase. This actual service/event row binds Q_star to original Q_c over observed H.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q_star; the sole quotient defined in section 8 for this row; cp_packaging.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-allocation`

###### Polyethylene wrapping film — P: actual separately purchased whole package article received (`pe_film_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. P: actual paid standalone or bundled whole package article received. Activate only for this actual event/material pool; P and I are disjoint and include whole wet supply once. Keep opening/closing empty, WIP-attached, FG-attached and reusable states, actual moisture influx/loss, damage and internal reuse. Internal reuse cancels; complete closing wet mass never deletes a new ingress. Native Product is polyethylene film, CAS 9002-88-4, production mix at plant, Mass/kg only; no fixed density, resin branching grade, thickness, geography or extrusion route. Its comment describes PE packaging film and contrasts rival PET: PET/polyester, PP, granulate or an extrusion service is not this material. Bind only a real single PE film layer, with actual additives/coating and provider checked; do not purchase its ethylene/resin a second time. Gross physical disclosure only: A is the actual complete directional gross leg V in its native unit; no stock correction or economic scaling of V. This card creates no procurement, supplier burden, credit or new Q; any genuine burden dimension has one separate owner. This actual service/event row binds Q_star to original Q_c over observed H.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q_star; the sole quotient defined in section 8 for this row; cp_packaging.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources:

###### Polyethylene wrapping film — I: actual supplier-included package ingress (`pe_film_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. I: actual supplier-included package ingress. Activate only for this actual event/material pool; P and I are disjoint and include whole wet supply once. Keep opening/closing empty, WIP-attached, FG-attached and reusable states, actual moisture influx/loss, damage and internal reuse. Internal reuse cancels; complete closing wet mass never deletes a new ingress. Native Product is polyethylene film, CAS 9002-88-4, production mix at plant, Mass/kg only; no fixed density, resin branching grade, thickness, geography or extrusion route. Its comment describes PE packaging film and contrasts rival PET: PET/polyester, PP, granulate or an extrusion service is not this material. Bind only a real single PE film layer, with actual additives/coating and provider checked; do not purchase its ethylene/resin a second time. Gross physical disclosure only: A is the actual complete directional gross leg V in its native unit; no stock correction or economic scaling of V. This card creates no procurement, supplier burden, credit or new Q; any genuine burden dimension has one separate owner. This actual service/event row binds Q_star to original Q_c over observed H.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q_star; the sole quotient defined in section 8 for this row; cp_packaging.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources:

###### Polyethylene wrapping film — ER: actual external returned package received (`pe_film_er`)

ER: actual external returned package received. Activate only for this actual event/material pool; P and I are disjoint and include whole wet supply once. Keep opening/closing empty, WIP-attached, FG-attached and reusable states, actual moisture influx/loss, damage and internal reuse. Internal reuse cancels; complete closing wet mass never deletes a new ingress. Native Product is polyethylene film, CAS 9002-88-4, production mix at plant, Mass/kg only; no fixed density, resin branching grade, thickness, geography or extrusion route. Its comment describes PE packaging film and contrasts rival PET: PET/polyester, PP, granulate or an extrusion service is not this material. Bind only a real single PE film layer, with actual additives/coating and provider checked; do not purchase its ethylene/resin a second time. Gross physical disclosure only: A is the actual complete directional gross leg V in its native unit; no stock correction or economic scaling of V. This card creates no procurement, supplier burden, credit or new Q; any genuine burden dimension has one separate owner. This actual service/event row binds Q_star to original Q_c over observed H.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q_star; the sole quotient defined in section 8 for this row; cp_packaging.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources:

###### Actual package-service electricity (`packaging_electricity`)

Conditional measured incremental packing/support load for the original cohort and horizon. It is not another manufacturing Q or a per-carton guessed factor. Native Product is CN grid-average alternating current below 1 kV, consumption mix to user; reference Net calorific value/MJ, not Mass. Apply this UUID only to a genuinely compatible CN low-voltage grid-consumption supply with the included generation/transmission boundary; another geography/voltage or own-generation route requires a different verified flow/provider. No direct grid-stack emission or second delivery-service purchase is inferred. Burden dimension: prepare A for the named original cohort once; retain a separate full raw gross V ledger for this exchange. Do not turn a supplier-included component into another purchase. This actual service/event row binds Q_star to original Q_c over observed H.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: A_row / Q_star; the sole quotient defined in section 8 for this row; cp_pack_energy.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_energy`
- Sources: `ilcd-allocation`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Folding sales carton — S: actual package leaving on gross physical shipments (`carton_s`)

S: actual package leaving on gross physical shipments. Activate only for this actual event/material pool; P and I are disjoint and include whole wet supply once. Keep opening/closing empty, WIP-attached, FG-attached and reusable states, actual moisture influx/loss, damage and internal reuse. Internal reuse cancels; complete closing wet mass never deletes a new ingress. Native Product is one folding paperboard/cardboard box at plant, unspecified grade, cut/fold/laminate route; Mass/kg only and no fixed CAS/geography. The Chinese comment includes printing and delivery flat for filling, and says the board is not durable for continued transport use; the English comment is truncated. Bind only one compatible folding sales carton, not a reusable transit crate or a prescribed recycled-fibre blend. Real return legs do not assert durability. Actual board/adhesive/ink already supplied in the whole box have one upstream owner. Gross physical disclosure only: A is the actual complete directional gross leg V in its native unit; no stock correction or economic scaling of V. This card creates no procurement, supplier burden, credit or new Q; any genuine burden dimension has one separate owner. This actual service/event row binds Q_star to original Q_c over observed H.

- Selected flow: Paper box `12d5d744-7725-4dbc-b102-43c80547f777`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q_star; the sole quotient defined in section 8 for this row; cp_packaging.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources:

###### Folding sales carton — EO: actual package returned outward to an external owner (`carton_eo`)

EO: actual package returned outward to an external owner. Activate only for this actual event/material pool; P and I are disjoint and include whole wet supply once. Keep opening/closing empty, WIP-attached, FG-attached and reusable states, actual moisture influx/loss, damage and internal reuse. Internal reuse cancels; complete closing wet mass never deletes a new ingress. Native Product is one folding paperboard/cardboard box at plant, unspecified grade, cut/fold/laminate route; Mass/kg only and no fixed CAS/geography. The Chinese comment includes printing and delivery flat for filling, and says the board is not durable for continued transport use; the English comment is truncated. Bind only one compatible folding sales carton, not a reusable transit crate or a prescribed recycled-fibre blend. Real return legs do not assert durability. Actual board/adhesive/ink already supplied in the whole box have one upstream owner. Gross physical disclosure only: A is the actual complete directional gross leg V in its native unit; no stock correction or economic scaling of V. This card creates no procurement, supplier burden, credit or new Q; any genuine burden dimension has one separate owner. This actual service/event row binds Q_star to original Q_c over observed H.

- Selected flow: Paper box `12d5d744-7725-4dbc-b102-43c80547f777`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q_star; the sole quotient defined in section 8 for this row; cp_packaging.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources:

###### Polyethylene wrapping film — S: actual package leaving on gross physical shipments (`pe_film_s`)

S: actual package leaving on gross physical shipments. Activate only for this actual event/material pool; P and I are disjoint and include whole wet supply once. Keep opening/closing empty, WIP-attached, FG-attached and reusable states, actual moisture influx/loss, damage and internal reuse. Internal reuse cancels; complete closing wet mass never deletes a new ingress. Native Product is polyethylene film, CAS 9002-88-4, production mix at plant, Mass/kg only; no fixed density, resin branching grade, thickness, geography or extrusion route. Its comment describes PE packaging film and contrasts rival PET: PET/polyester, PP, granulate or an extrusion service is not this material. Bind only a real single PE film layer, with actual additives/coating and provider checked; do not purchase its ethylene/resin a second time. Gross physical disclosure only: A is the actual complete directional gross leg V in its native unit; no stock correction or economic scaling of V. This card creates no procurement, supplier burden, credit or new Q; any genuine burden dimension has one separate owner. This actual service/event row binds Q_star to original Q_c over observed H.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q_star; the sole quotient defined in section 8 for this row; cp_packaging.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources:

###### Polyethylene wrapping film — EO: actual package returned outward to an external owner (`pe_film_eo`)

EO: actual package returned outward to an external owner. Activate only for this actual event/material pool; P and I are disjoint and include whole wet supply once. Keep opening/closing empty, WIP-attached, FG-attached and reusable states, actual moisture influx/loss, damage and internal reuse. Internal reuse cancels; complete closing wet mass never deletes a new ingress. Native Product is polyethylene film, CAS 9002-88-4, production mix at plant, Mass/kg only; no fixed density, resin branching grade, thickness, geography or extrusion route. Its comment describes PE packaging film and contrasts rival PET: PET/polyester, PP, granulate or an extrusion service is not this material. Bind only a real single PE film layer, with actual additives/coating and provider checked; do not purchase its ethylene/resin a second time. Gross physical disclosure only: A is the actual complete directional gross leg V in its native unit; no stock correction or economic scaling of V. This card creates no procurement, supplier burden, credit or new Q; any genuine burden dimension has one separate owner. This actual service/event row binds Q_star to original Q_c over observed H.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q_star; the sole quotient defined in section 8 for this row; cp_packaging.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources:

##### Waste flows

###### Folding sales carton — W: actual separate package-waste outlet (`carton_w`)

W: actual separate package-waste outlet. Activate only for this actual event/material pool; P and I are disjoint and include whole wet supply once. Keep opening/closing empty, WIP-attached, FG-attached and reusable states, actual moisture influx/loss, damage and internal reuse. Internal reuse cancels; complete closing wet mass never deletes a new ingress. If there is just one mixed physical waste outlet, do not activate this separate outlet: record its pool-specific Wraw in cp_packaging and only the single_mixed_waste exchange, with total/source subaccounts never summed together. The sixth leg remains measured and traceable even without another external exchange. Native Waste is cardboard packaging waste, generated during packing at plant GLO production mix, Mass/kg; no treatment, CAS, coating or supplier is specified. Its general comment estimates this waste at 2% of packaging based on industry-average expert judgement. That estimate is not an observed quantity or default for this method: collect the actual separate cardboard-waste leg and do not infer it from a fixed packaging-loss percentage. Use only an actual separate cardboard-waste outlet. If cardboard instead enters the one actual mixed-waste container, this separate Waste card is inapplicable and its Wraw stays as a nonadditive source subledger of the mixed card. Gross physical disclosure only: A is the actual complete directional gross leg V in its native unit; no stock correction or economic scaling of V. This card creates no procurement, supplier burden, credit or new Q; any genuine burden dimension has one separate owner. This actual service/event row binds Q_star to original Q_c over observed H.

- Selected flow: Packaging waste, cardboard `72270223-04b1-4986-a546-94e5a0821317`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q_star; the sole quotient defined in section 8 for this row; cp_packaging.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources:

###### Polyethylene wrapping film — W: actual separate package-waste outlet (`pe_film_w`)

W: actual separate package-waste outlet. Activate only for this actual event/material pool; P and I are disjoint and include whole wet supply once. Keep opening/closing empty, WIP-attached, FG-attached and reusable states, actual moisture influx/loss, damage and internal reuse. Internal reuse cancels; complete closing wet mass never deletes a new ingress. If there is just one mixed physical waste outlet, do not activate this separate outlet: record its pool-specific Wraw in cp_packaging and only the single_mixed_waste exchange, with total/source subaccounts never summed together. The sixth leg remains measured and traceable even without another external exchange. UUID remains unresolved for this single actual article/preparation; verify exact specification, complete supply scope, state and provider before binding. The name is not a collective fallback and does not establish actual occurrence or quantity. Gross physical disclosure only: A is the actual complete directional gross leg V in its native unit; no stock correction or economic scaling of V. This card creates no procurement, supplier burden, credit or new Q; any genuine burden dimension has one separate owner. This actual service/event row binds Q_star to original Q_c over observed H.

- Selected flow: Waste polyethylene packaging film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q_star; the sole quotient defined in section 8 for this row; cp_packaging.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources:

##### Elementary flows

### Process: Actual fixture capital service and maintenance stocks (`assets`)

#### Inputs

##### Product flows

###### Actual test-fixture service burden (`fixture_service_burden`)

Conditional for the real complete beat-test fixture in use, not one whole fixture per kg metronome. Record actual installation, measured service driver/capacity, prior burden, unused/unassigned charge and contemporaneous maintenance. Capital physical mass and service burden are independent; no fixed lifetime or allocation ratio. If electric timing/control equipment is a distinct supplied asset add its own atomic identity and actual service record. UUID remains unresolved for this single actual article/preparation; verify exact specification, complete supply scope, state and provider before binding. The name is not a collective fallback and does not establish actual occurrence or quantity. Burden dimension: prepare A for the named original cohort once; retain a separate full raw gross V ledger for this exchange. Do not turn a supplier-included component into another purchase. Bind the actual asset service/event to one recorded manufacturing cohort Q or original postrelease cohort Q_c and observed H; report these cohorts separately without merging denominators.

- Selected flow: Complete metronome beat-test fixture
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q_star; the sole quotient defined in section 8 for this row; cp_assets.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `ilcd-allocation`

###### Actual new complete fixture received (`fixture_new`)

Conditional for this real asset event. Keep complete opening/closing physical asset, new/used status, custody and full wet state; do not shrink physical mass by its burden share. Installed fluids and replacement parts have disjoint actual material ledgers. A discarded fixture inside the one mixed outlet is a nonadditive source Wraw, not this second external outlet. UUID remains unresolved for this single actual article/preparation; verify exact specification, complete supply scope, state and provider before binding. The name is not a collective fallback and does not establish actual occurrence or quantity. Gross physical disclosure only: A is the actual complete directional gross leg V in its native unit; no stock correction or economic scaling of V. This card creates no procurement, supplier burden, credit or new Q; any genuine burden dimension has one separate owner. Bind the actual asset service/event to one recorded manufacturing cohort Q or original postrelease cohort Q_c and observed H; report these cohorts separately without merging denominators.

- Selected flow: Complete metronome beat-test fixture
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q_star; the sole quotient defined in section 8 for this row; cp_asset_gross.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset_gross`
- Sources:

###### Actual used complete fixture returned in (`fixture_returned`)

Conditional for this real asset event. Keep complete opening/closing physical asset, new/used status, custody and full wet state; do not shrink physical mass by its burden share. Installed fluids and replacement parts have disjoint actual material ledgers. A discarded fixture inside the one mixed outlet is a nonadditive source Wraw, not this second external outlet. UUID remains unresolved for this single actual article/preparation; verify exact specification, complete supply scope, state and provider before binding. The name is not a collective fallback and does not establish actual occurrence or quantity. Gross physical disclosure only: A is the actual complete directional gross leg V in its native unit; no stock correction or economic scaling of V. This card creates no procurement, supplier burden, credit or new Q; any genuine burden dimension has one separate owner. Bind the actual asset service/event to one recorded manufacturing cohort Q or original postrelease cohort Q_c and observed H; report these cohorts separately without merging denominators.

- Selected flow: Complete metronome beat-test fixture
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q_star; the sole quotient defined in section 8 for this row; cp_asset_gross.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset_gross`
- Sources:

###### Actual new repair screw burden (`repair_screw_burden`)

Conditional for actual new steel-screw repair of the real fixture, with supplier scope distinct from the complete new asset. Retain performed failed/unpermitted work and actual removed old material; new water/material influx is not cancelled because retained in closing asset stock. Native Product is a steel screw, auxiliary assembly fastener, production mix at plant GLO, Mass/kg only; no fixed steel grade, coating, geometry, CAS or supplier. Use only a real steel screw with actual specification and stage owner, not a complete movement, brass screw, wooden repair or other fastener. Burden dimension: prepare A for the named original cohort once; retain a separate full raw gross V ledger for this exchange. Do not turn a supplier-included component into another purchase. Bind the actual asset service/event to one recorded manufacturing cohort Q or original postrelease cohort Q_c and observed H; report these cohorts separately without merging denominators.

- Selected flow: Steel screw `895204f6-6425-4814-afc5-cb97e530e892`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q_star; the sole quotient defined in section 8 for this row; cp_assets.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `wittner-parts`

###### Actual new repair screw physically received (`repair_screw_received`)

Conditional actual single steel-screw event, not a whole fixture or a new whole movement. Preserve new/used state and actual full mass independently of service burden. Waste old screws in the actual mixed container remain source-specific Wraw of its single outlet; reuse outward is not automatic coproduct credit. Native Product is a steel screw, auxiliary assembly fastener, production mix at plant GLO, Mass/kg only; no fixed steel grade, coating, geometry, CAS or supplier. Use only a real steel screw with actual specification and stage owner, not a complete movement, brass screw, wooden repair or other fastener. Gross physical disclosure only: A is the actual complete directional gross leg V in its native unit; no stock correction or economic scaling of V. This card creates no procurement, supplier burden, credit or new Q; any genuine burden dimension has one separate owner. Bind the actual asset service/event to one recorded manufacturing cohort Q or original postrelease cohort Q_c and observed H; report these cohorts separately without merging denominators.

- Selected flow: Steel screw `895204f6-6425-4814-afc5-cb97e530e892`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q_star; the sole quotient defined in section 8 for this row; cp_asset_gross.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset_gross`
- Sources: `wittner-parts`

###### Actual fixture-maintenance tap water (`asset_water`)

Conditional actual maintenance/cleaning tap-water addition. Retain real influx and full wet closing installed-fluid/material stock; the X correction removes only another same-side duplicated term and never this retained addition. Failed/unpermitted work remains measured. Native Product is treated tap/municipal/city/potable/public-supply water, production mix in factory, water-production supply, reference Mass/kg with secondary Volume coefficient 0.001. Treatment/quality varies locally; no fixed CAS/geography or factory density is verified. Bind only actual treated plumbing supply, not humidity, raw reservoir water, reaction water or steam. Do not use the secondary coefficient as measured density: independently measure this water state for volume-to-mass conversion. Burden dimension: prepare A for the named original cohort once; retain a separate full raw gross V ledger for this exchange. Do not turn a supplier-included component into another purchase. Bind the actual asset service/event to one recorded manufacturing cohort Q or original postrelease cohort Q_c and observed H; report these cohorts separately without merging denominators.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q_star; the sole quotient defined in section 8 for this row; cp_assets.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `ilcd-allocation`

###### Actual whole fixture-maintenance oil preparation (`asset_oil`)

Conditional only for real specified mineral-oil preparation added to the actual fixture; no fluid-filled fixture is presumed. Separate installed opening/closing charge, new addition, old drainage and losses, with one supply owner. Whole oil/carrier/additives are not separately repurchased. UUID remains unresolved for this single actual article/preparation; verify exact specification, complete supply scope, state and provider before binding. The name is not a collective fallback and does not establish actual occurrence or quantity. Burden dimension: prepare A for the named original cohort once; retain a separate full raw gross V ledger for this exchange. Do not turn a supplier-included component into another purchase. Bind the actual asset service/event to one recorded manufacturing cohort Q or original postrelease cohort Q_c and observed H; report these cohorts separately without merging denominators.

- Selected flow: Whole mineral lubricating-oil preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q_star; the sole quotient defined in section 8 for this row; cp_assets.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `ilcd-allocation`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Actual usable complete fixture transferred outward (`fixture_outward`)

Conditional for this real asset event. Keep complete opening/closing physical asset, new/used status, custody and full wet state; do not shrink physical mass by its burden share. Installed fluids and replacement parts have disjoint actual material ledgers. A discarded fixture inside the one mixed outlet is a nonadditive source Wraw, not this second external outlet. UUID remains unresolved for this single actual article/preparation; verify exact specification, complete supply scope, state and provider before binding. The name is not a collective fallback and does not establish actual occurrence or quantity. Gross physical disclosure only: A is the actual complete directional gross leg V in its native unit; no stock correction or economic scaling of V. This card creates no procurement, supplier burden, credit or new Q; any genuine burden dimension has one separate owner. Bind the actual asset service/event to one recorded manufacturing cohort Q or original postrelease cohort Q_c and observed H; report these cohorts separately without merging denominators.

- Selected flow: Complete metronome beat-test fixture
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q_star; the sole quotient defined in section 8 for this row; cp_asset_gross.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset_gross`
- Sources:

###### Actually removed reusable old screw outward (`used_screw_out`)

Conditional actual single steel-screw event, not a whole fixture or a new whole movement. Preserve new/used state and actual full mass independently of service burden. Waste old screws in the actual mixed container remain source-specific Wraw of its single outlet; reuse outward is not automatic coproduct credit. Native Product is Steel screw, Mass/kg only, without a fixed supply mix, material grade, route, geography, new/used state, CAS, synonym or comment. The preserved source-classification locator is not material evidence. Bind only the actual removed intact reusable steel screw from this fixture, with current condition documented; no new procurement/provider burden or automatic reuse credit. Gross physical disclosure only: A is the actual complete directional gross leg V in its native unit; no stock correction or economic scaling of V. This card creates no procurement, supplier burden, credit or new Q; any genuine burden dimension has one separate owner. Bind the actual asset service/event to one recorded manufacturing cohort Q or original postrelease cohort Q_c and observed H; report these cohorts separately without merging denominators.

- Selected flow: Steel screw `35a4d7dc-1c42-4eb2-a48a-0f9a5abce9d6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q_star; the sole quotient defined in section 8 for this row; cp_asset_gross.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset_gross`
- Sources:

##### Waste flows

###### Actual separate discarded fixture outlet (`fixture_discard`)

Conditional for this real asset event. Keep complete opening/closing physical asset, new/used status, custody and full wet state; do not shrink physical mass by its burden share. Installed fluids and replacement parts have disjoint actual material ledgers. A discarded fixture inside the one mixed outlet is a nonadditive source Wraw, not this second external outlet. UUID remains unresolved for this single actual article/preparation; verify exact specification, complete supply scope, state and provider before binding. The name is not a collective fallback and does not establish actual occurrence or quantity. Gross physical disclosure only: A is the actual complete directional gross leg V in its native unit; no stock correction or economic scaling of V. This card creates no procurement, supplier burden, credit or new Q; any genuine burden dimension has one separate owner. Bind the actual asset service/event to one recorded manufacturing cohort Q or original postrelease cohort Q_c and observed H; report these cohorts separately without merging denominators.

- Selected flow: Discarded metronome beat-test fixture
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_row / Q_star; the sole quotient defined in section 8 for this row; cp_asset_gross.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset_gross`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_scope | attributional study | Apply this hierarchy only where the attributional goal and decision context require allocation. Separate multifunctional-process allocation from comparison of multifunctional products; no free substitution/allocation choice or QFD numerical share is adopted. | `ilcd-allocation` |
| allocation_subdivide | each burden exchange | Assign dedicated components and stages first; use supported real or virtual subdivision before sharing. A complete supplied works/formulation carries its embodied components once, while a genuine separate component keeps its own owner and a paired internal handoff. | `ilcd-allocation` |
| allocation_causal | remaining burden exchanges | For each still-shared exchange establish its determining physical causal relationship and measure the actual driver. Timing/test equipment burden may depend on measured occupation/capacity; a component input follows the instrument receiving it. Justify each exchange; a mass/time/count relation does not automatically govern all flows. | `ilcd-allocation` |
| allocation_residual | true residual common process | Only a real unresolved residual after subdivision and determining causality uses contemporaneous market values for the actual quantity/quality/state at the same common process gate. Retain prices, period, currency and justified transport/conditioning adjustments; no fixed ratio, automatic credit or arbitrary physical/economic choice. Missing determining/value evidence remains unresolved. | `ilcd-allocation` |
| allocation_waste | rejects samples waste and physical ledgers | Ordinary failed units, samples, manufacturing waste and their treatment burdens remain with their manufacturing cohort even when sold or exported. Transfer a vector once only for a real independent cohort/function and a justified allocation/handover. Every actual gross physical leg remains full and unscaled, and no waste sale creates a negative burden or avoided-production credit. | `ilcd-allocation` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | manufacture | first complete acceptance and mass | test and calibrated weighing | model; serial; full BOM; key and scale inclusion; spring-drive state; level and setup; actual tempo specification; timing instrument; calibration; measured beat intervals; alternate half-cycles; uncertainty; adjustment; pass or hold; prior release; net mass; moisture; packaging tare | Observe actual complete installed instrument against the real documented specification using a calibrated timing reference; record setup and independent repeated intervals and any permitted adjustment, uncertainty and disposition. Weigh accepted complete net configuration independently with a calibrated scale. Capture raw records only; no universal patent/manual threshold or catalogue mass. | kg | each first release and every failed/held test | complete new-manufacturing cohort | actual complete configuration at first-release gate | per reference flow | timer/scale calibration; specification; raw intervals; signed acceptance and holds; full configuration |
| cp_components | manufacture | individual supplied article/preparation | purchase receiving issue and inherited-stock ledger | row_id; lot; actual material and complete supply scope; gross V; original unit; all separate purchases; supplier included parts; opening raw; closing raw; opening WIP; closing WIP; non-WIP unassigned stores; every inherited exchange vector; losses; failures; startup; idle; cleanup; rework; internal handoff; legitimate other-cohort transfer; already stock-corrected flag | Reconcile complete works and case articles to actual supplier BOM and raw receipts/issues. Weigh each single article/preparation or traceably sampled matched lot; preserve both complete physical gross quantities and all inherited burden dimensions without division. Confirm no duplicate purchases for gears/spring/pendulum/oil within supplied works. | actual native extensive unit | every lot/event and opening/closing | full production period and inherited pre-period history | actual suppliers and assembly site | per reference flow | supplier BOM; receipts; stock count; scales; paired handoff; original vectors; failure logs |
| cp_energy | manufacture | actual electricity burden | meter and equipment/service records | row_id; actual supply location; voltage; generation/mix boundary; meter; opening reading; closing reading; cumulative or rate; timestamps; actual phase; failed runs; idle; cleanup; own and shared driver; original cohort; H; unused charge | Read undivided real meters for the actual stage including unsuccessful work/support. Preserve raw kWh or genuine rate integration; perform unit conversion and justified exchange-specific attribution later. Keep already performed cohort service even for closing FG; no second denominator in collection. | kWh raw; MJ after exact conversion | each meter interval and actual operating state | actual cohort period or original cohort observed H | actual circuit and stage; provider boundary declared | per reference flow | meter calibration; bills; circuit map; raw readings; driver evidence; actual horizon |
| cp_service_energy | handling | actual electricity burden | meter and equipment/service records | row_id; actual supply location; voltage; generation/mix boundary; meter; opening reading; closing reading; cumulative or rate; timestamps; actual phase; failed runs; idle; cleanup; own and shared driver; original cohort; H; unused charge | Read undivided real meters for the actual stage including unsuccessful work/support. Preserve raw kWh or genuine rate integration; perform unit conversion and justified exchange-specific attribution later. Keep already performed cohort service even for closing FG; no second denominator in collection. | kWh raw; MJ after exact conversion | each meter interval and actual operating state | actual cohort period or original cohort observed H | actual circuit and stage; provider boundary declared | per reference flow | meter calibration; bills; circuit map; raw readings; driver evidence; actual horizon |
| cp_pack_energy | packaging | actual electricity burden | meter and equipment/service records | row_id; actual supply location; voltage; generation/mix boundary; meter; opening reading; closing reading; cumulative or rate; timestamps; actual phase; failed runs; idle; cleanup; own and shared driver; original cohort; H; unused charge | Read undivided real meters for the actual stage including unsuccessful work/support. Preserve raw kWh or genuine rate integration; perform unit conversion and justified exchange-specific attribution later. Keep already performed cohort service even for closing FG; no second denominator in collection. | kWh raw; MJ after exact conversion | each meter interval and actual operating state | actual cohort period or original cohort observed H | actual circuit and stage; provider boundary declared | per reference flow | meter calibration; bills; circuit map; raw readings; driver evidence; actual horizon |
| cp_water | manufacture | actual supplied cleaning/support water | supply and wet-stock records | row_id; raw amount; original unit; phase; temperature; independent same-substance density; opening and closing wet stock; gross influx; evaporation; actual liquid waste; whole-article included water; other same-side X; failed cleanup; inherited vectors | Measure actual tap supply independently from actual liquid waste and air moisture. Preserve gross input plus full wet closing stock; use X only for another same-side duplicate. Do not infer local density from native secondary Volume coefficient or one balance residual. | native Mass/kg with original meter unit | each real water event and stock boundary | complete actual manufacturing period | actual cleaning/support and wet material pools | per reference flow | supply tickets; calibrated meter/scale; state-specific density; independent water balance |
| cp_moisture | manufacture | actual directional environmental H2O | calibrated moisture/state and wet-stock observations | row_id; material or product pool; actual ordinary H2O; raw water-substance vapour volume; mass independently observed; temperature; pressure; calibrated humidity; gas composition and flow; actual adsorption/desorption; whole wet article ingress; opening wet mass; full closing wet mass; X other same-side; original cohort; H | Independently establish ordinary H2O ingress and egress during work or natural storage with calibrated moisture/state/composition observations and matched water-substance density. Resource volume is actual H2O vapour volume, not bulk air; output is actual H2O vapour mass to air. Keep full wet stocks and no artificial permission for natural exchange. No forced two-unknown residual or second count of supplied article water. | m3 H2O vapour input; kg H2O output and mass subledger | each actual interval and pool-stock boundary | actual work period or original cohort H | declared product/material/package/asset pool within actual gate | per reference flow | humidity/state calibration; composition; independent mass/density evidence; gross wet balance |
| cp_service_moisture | handling | actual directional environmental H2O | calibrated moisture/state and wet-stock observations | row_id; material or product pool; actual ordinary H2O; raw water-substance vapour volume; mass independently observed; temperature; pressure; calibrated humidity; gas composition and flow; actual adsorption/desorption; whole wet article ingress; opening wet mass; full closing wet mass; X other same-side; original cohort; H | Independently establish ordinary H2O ingress and egress during work or natural storage with calibrated moisture/state/composition observations and matched water-substance density. Resource volume is actual H2O vapour volume, not bulk air; output is actual H2O vapour mass to air. Keep full wet stocks and no artificial permission for natural exchange. No forced two-unknown residual or second count of supplied article water. | m3 H2O vapour input; kg H2O output and mass subledger | each actual interval and pool-stock boundary | actual work period or original cohort H | declared product/material/package/asset pool within actual gate | per reference flow | humidity/state calibration; composition; independent mass/density evidence; gross wet balance |
| cp_waste | manufacture | single actual mixed outlet and actual separate liquid outlet | container stock and disposal records | row_id; unique outlet; whole wet container V; opening waste stock; closing waste stock; independently measured source Wraw; failed units; component samples; carton W; PE W; service residues; old fixture/screw; actual liquid composition; water/species tests; destination; treatment-provider owner; legitimate transfer justification | Weigh each actual outlet once. For one mixed container keep independently measured origin-pool Wraw and stock/composition subaccounts without adding them to its gross total; link actual treatment once. If genuine separate outlets exist retain separate specific cards/providers. No assumed wastewater or symmetrical gas/liquid outputs and no burden deduction simply for waste sale/disposal. | kg for these actual whole-waste streams | every waste stock/event and dispatch | full matched production/service history | actual single external outlet with source pools retained | per reference flow | calibrated weights; source submetering; custody; composition; actual treatment tickets |
| cp_service | handling | original-cohort actual service and gross FG events | original release custody and postwork logs | row_id; original serial; original Q_c; H start/end; opening FG physical/burden history; complete closing wet FG; G; R; actual added/removed key or component; actual water/material ingress/egress; permission status; posttests; acceptance/hold; failed/unpermitted work; disposition; raw incremental burden; unused/unassigned charge; each inherited vector; already stock-corrected flag | Trace every actual event to original release and complete net configuration. Weigh current gross G/R independently, including real wet/part differences; do not presume return mass equals original delivery or reverse manufacture. Capture all actual service and failed/unpermitted work raw; acceptance controls continued conformity, never erasure of performed flows. Retain already performed service with its cohort even for held FG. | actual native extensive unit | each custody/work event and H boundary | original cohort history plus observed H only | actual custody/service gate | per reference flow | original acceptance; full BOM; current weights; permission/tests; dispositions; raw meters |
| cp_packaging | packaging | each real material pool six legs and separate burden owner | whole-article physical pool ledger | row_id; actual folding carton or PE film; composition/layer; upstream owner; full wet state; opening empty/WIP/FG/reusable; P; I; ER; gross S; EO; Wraw; closing empty/WIP/FG/reusable; natural H2O in/out; other same-side X; actual separate outlet or mixed-container locator; internal reuse; original cohort Q_c; H; every inherited burden vector ; packaging receipt origin; payment/non-purchase evidence; owner/custodian; same-item prior outward ID | Measure six actual directional legs separately for each real pool without division; no implied zero for unmeasured events. Whole P/I ingress includes supplied water/components once and is disjoint. Retain full wet closing stock plus real new influx, internal-reuse cancellation and attached states. Wraw joins one mixed container as nonadditive composition/source subledger unless actually separately dispatched. Keep stock-corrected burden ownership independent from gross V.  For packaging only, apply packaging_receipt_basis; standalone non-purchase is I, never invented ER or X. | kg whole actual article in measured wet state | every real leg and opening/closing pool state | actual original-cohort service H plus inherited stocks | each layer and physical destination; no generic packaging pool | per reference flow | material-specific weights; supplier included-pack BOM; six-leg tickets; gross shipments; mixed outlet bridge |
| cp_assets | assets | actual asset/repair service burden | installation maintenance stocks and real duty records | row_id; actual fixture specification; new/used; complete physical opening/closing wet stock; raw receipts/returns/dispatch/discard; actual new screw; old screw; installed fluid/water opening/closing; every real addition/drainage; other same-side X; actual driver/capacity; original cohort; observed H; performed charge; unused/unassigned charge; each inherited vector; permission/tests/failure/disposition | Record complete physical events and all installed-fluid/repair material stocks without economic scaling. Prepare actual service burden independently by measured capacity/occupation evidence, with no fixed lifetime and no whole asset per kg. New material/water retained in closing stock still has real influx; X only deduplicates OTHER same-side flow terms. Retain all performed failures and actual disposition. | actual native extensive unit | each actual asset/repair event and stock boundary | inherited asset history and actual service horizon | actual installed/test fixture and distinct parts/fluid pools | per reference flow | asset register; calibrated mass; maintenance tickets; actual duty/capacity; wet balance; vectors |
| cp_asset_gross | assets | actual asset/repair physical event | installation maintenance stocks and real duty records | row_id; actual fixture specification; new/used; complete physical opening/closing wet stock; raw receipts/returns/dispatch/discard; actual new screw; old screw; installed fluid/water opening/closing; every real addition/drainage; other same-side X; actual driver/capacity; original cohort; observed H; performed charge; unused/unassigned charge; each inherited vector; permission/tests/failure/disposition | Record complete physical events and all installed-fluid/repair material stocks without economic scaling. Prepare actual service burden independently by measured capacity/occupation evidence, with no fixed lifetime and no whole asset per kg. New material/water retained in closing stock still has real influx; X only deduplicates OTHER same-side flow terms. Retain all performed failures and actual disposition. | actual native extensive unit | each actual asset/repair event and stock boundary | inherited asset history and actual service horizon | actual installed/test fixture and distinct parts/fluid pools | per reference flow | asset register; calibrated mass; maintenance tickets; actual duty/capacity; wet balance; vectors |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_first_release | finished_metronome | Q = sum of independently weighed net masses of newly first-released complete instruments; retain first-released closing FG in Q; keep actual rejected/held serials outside new output until real first acceptance. | cp_release | Q |  |
| calc_raw_units | all inventory rows | Convert each undivided raw observation into its row native extensive unit before attribution; use the exact electricity-group factor 3.6 MJ/kWh. Integrate only a true rate over its actual interval; preserve already integrated quantities. Independently measured same-substance state/density is required when volume and mass are bridged. | raw_quantity; original_unit; actual_state; independent_density; cp_energy; cp_water; cp_moisture | U_native |  |
| calc_manufacture_vector | all burden rows in manufacture | A_m = Bopen_m + U_m - Bclose_m - Tother_m; each symbol is one raw exchange-vector dimension after conversion and supported attribution. Bclose_m is raw/WIP or unassigned non-WIP/unused charge only; already released closing FG is excluded. If a recorded consumption is already net of stock use its reconciled attributable vector directly, without a second stock correction. Tother_m requires a real distinct cohort/function and legitimate once-only burden transfer; ordinary waste/sales/rejects/samples and treatment remain with manufacturing. | Bopen_m; U_m; Bclose_m; Tother_m; cp_components; cp_water | A_m | `ilcd-allocation` |
| calc_service_vector | all burden rows in handling packaging assets | A_cH is actual performed incremental burden assigned to original cohort c over observed H plus legitimately used inherited charge; carry forward only unused/unassigned charge. Do not subtract performed service for held/closing FG. Preserve original Q_c and all actual failed/unpermitted work; no manufactured output is created. Assign each asset/service burden dimension once using the justified hierarchy; do not apply it to gross physical legs. | actual_performed_burden; inherited_used_charge; unused_charge; Q_c; H; cp_service; cp_packaging; cp_assets | A_cH | `ilcd-allocation` |
| calc_gross_event | all gross physical cards | A_V = V_leg_actual_full; preserve the actual complete directional gross event in its own native unit and wet/phase state. No Bopen+U-Bclose substitution, economic share, procurement, supplier burden, credit or second production. The genuine burden dimension has one independent owner. Physical stock equations are reconciliations, not corrections to V. | V_leg_actual_full; cp_service; cp_packaging; cp_asset_gross; cp_moisture; cp_waste | A_V |  |
| calc_single_quotient | all inventory rows | a_row = A_row / Q_star exactly once for positive Q_star; A_row is A_m for manufacturing burden, A_cH for original-cohort service burden, and actual full V for gross disclosure. Q_star is manufacturing Q or original cohort Q_c as explicitly attached to that row/event; each is the same 1 kg reference mass convention. Reference output is exactly 1 kg. Q_star=0 retains all actual loads/stocks and yields no per-unit result. Cards and aggregation only reference this quotient; collection never divides. | A_row; Q_star; cp_release; cp_service; cp_packaging; cp_assets | a_row |  |
| calc_pack_balance | each actual carton and PE-film pool | Opening_full_wet + P + I + ER + real_H2O_in + other_disjoint_in - X_in = Closing_full_wet + gross_S + EO + Wraw + real_H2O_out + other_disjoint_out - X_out. Opening/closing include empty, WIP-attached, FG-attached and reusable states. Whole P/I already includes its supplied components/water once; disjoint bridges prevent overlap. X removes OTHER same-side duplicate flow terms only, never a retained real influx or full closing stock. Internal reuse cancels. Wraw in one mixed container is a source subledger, not an added external exchange. | Opening_full_wet; P; I; ER; gross_S; EO; Wraw; Closing_full_wet; real_H2O_in; real_H2O_out; X_in; X_out; cp_packaging | package_pool_residual |  |
| calc_physical_gates | manufacture handling packaging assets | Independently reconcile full actual incoming and outgoing masses and complete wet opening/closing stocks at each physical gate, with actual elemental/species balances where relevant. Preserve original Q/FG cohort bridge, G/R changes, real additions/removals and passive moisture; cancel paired internal handoffs only in the combined gate. Do not multiply gross legs by burden shares or fit two unknowns to one residual. Heat energy and carrier mass are independent; any real external return water has its own Product leg. | raw_gross_masses; wet_opening_stock; wet_closing_stock; Q; G; R; real_species_measurements; cp_components; cp_service; cp_packaging; cp_asset_gross | gate_residuals |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Retain exact physical identity, supply completeness, all native property/media/CAS/route/form/geography restrictions and official Chinese basename where present; core output must be a compatible complete metronome. Identity does not approve provider quality or copy quantitative coefficients. | complete native identity and primary product/BOM evidence |
| dq_measurement | all collected records | No invented mass, density, spring material, gear tolerance, tempo range, precision, calibration threshold, life, recipe, output or generic loss percentage. Preserve calibration, state, uncertainty, independent raw observations and original units. | actual scales/timers/meters and raw specifications |
| dq_completeness | all real gates | Retain actual failures/zero-output/startup/idle/cleanup/rework and all inherited raw/WIP/non-WIP vectors. Add each truly present unlisted input/output as a specific atomic card before claiming complete data; missing observations remain unknown rather than zero or other. | reconciliation of all activity and physical/burden ledgers |
| dq_single_owner | whole supplied articles and gross cards | Keep one upstream owner per whole supplied works/article/formulation, and one treatment owner per real waste outlet. Gross disclosure cards cannot be imported as supplier-backed purchases or credits; preserve description and cohort dimension during consumption. | whole/component disjoint BOM and provider ownership bridge |
| dq_service | original cohort and observed H | Retain original first-release mass/history and full current G/R configuration/water, actual postwork permission/tests/disposition and already performed service even for closing FG. Future horizon gaps remain explicit and cannot create new Q. | original release; custody; work/testing records; actual H |
| dq_quality_scope | source evidence and native families | Manufacturer spare-parts/complete-product evidence supports the disclosed supply route; operating instructions support function/test setup only. The independent historical patent gives a factory-adjustment example, not proof of a current supplier design or universal threshold. Qualitative method synthesis supplies no measured factory quantity. | complete primary originals; source applicability and counterexamples |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | finished_metronome | Require the compatible complete no-bell spring-driven plastic-cased instrument at first quality release, complete reference UUID and Mass/kg chain, explicit finished_metronome link and every required qualifier. A component, bare mechanism or electronic/clock/toy identity cannot close the reference gate. |  |
| validate_calibration | release records | Require an actual product specification, calibrated timing reference and raw observations including setting/level/state, repeatability/uncertainty, alternate half-cycle behaviour and actual acceptance/hold. A user manual or patent example does not establish manufacturer certification or numeric acceptance limits. | `wittner-manual`; `franz-metronome-patent` |
| validate_denominator | all inventory rows | Require matching raw collection and selected cohort, one positive Q_star for the single A/Q calculation, all finite measurement checks and complete bilingual agreement. No repeated division, guessed count-to-kg or Q=0 unit result. Gross cards must use complete V and have no new provider burden or credit. |  |
| validate_stocks | manufacture and service | Check every physical stock and inherited vector; manufacturing Bclose cannot include burden of already released FG, Q and closing FG are not two outputs, and stock-corrected records are not corrected again. Already performed original-cohort service cannot be removed because of held FG. |  |
| validate_postwork | actual real work | Check actual permission, posttests, acceptance/hold and disposition without erasing failed/unpermitted work quantities. Do not assume broken parts can recover; record real new/old parts and fluid/water flows. Passive environmental moisture has no invented repair permit. |  |
| validate_packages | each actual material pool | Check all six actual packaging directions with full empty/WIP/FG/reusable opening/closing states, whole P/I once, gross S, real H2O exchange and internal-reuse cancellation. Wraw joins a single mixed outlet without an extra duplicate W exchange; separate W cards require real separate outlets. X only deduplicates other same-side flow terms and cannot remove retained true influx/full closing wet mass. |  |
| validate_physical | all real gates | Require independent full gross mass and relevant element/species balances across manufacturing, FG, packaging, assets and the combined gate. Whole supplied wet material and components must be disjoint; natural uptake/loss remains actual. No fabricated gas species from VOC/COD/elemental totals or a residual fitted to two unknowns; native extensive units stay distinct. |  |
| validate_allocation | each burden dimension | Check allocation need, exclusive/virtual subdivision, exchange-specific determining causality and only the true residual common-gate contemporaneous value evidence. Gross legs remain full; ordinary rejects/waste/sales/sample and treatment burdens cannot be deducted without a real other cohort/function and justified once-only transfer. | `ilcd-allocation` |
| validate_complete_context | consumer data and unresolved identities | Consume every card description and the full normative chapter/ancestor context, not just UUID and amount. Core reference identity or terminal-method absence is a true hold; an unresolved auxiliary identity/provider or future site amount alone does not mean this complete methodology is missing. Concrete datasets with unresolved actual identities, unsupported conversions or missing core measurements remain incomplete; no guidance/engineering pass is scientific, translation, mapping or publication approval. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Qualified complete mechanical-metronome manufacturing supply; actual original-cohort services as explicitly bounded supplements |
| allowed_use | Actual matching no-bell plastic-cased spring instrument with verified provider/BOM and measured first-release data |
| excluded_use | Unqualified comparative precision/lifetime claims; other instrument families; net-delivery production denominator; electronic/clock substitution; importing gross-disclosure rows as supplier purchases or credits |
| required_metadata | All section3 qualifiers; site period; first-release mass; complete supply and installed component state; actual allocation; each row cohort/dimension; full normative context |
| required_quality_disclosure | Actual unknowns and core versus auxiliary gaps; source-case limitations; provider compatibility; test calibration/uncertainty; stocks/failures; actual H and future horizon gaps; complete gross versus burden ledger bridge |
| update_trigger | Different drive/bell/case/supply completeness; real onsite component fabrication; changed actual test or first-release gate; additional chemicals/emissions/thermal carriers; altered provider/native limitations or service horizon |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| wittner-parts | handbook | https://wittner-gmbh.de/wittner_metronome_maelzel_spare_parts.html ; https://wittner-gmbh.de/pdf/ersatzteilliste.pdf | Complete adjusted works and separate compatible cases/bottoms/covers/key/pendulum supply states; full four-page parts illustrations and adjacent incomplete-part counterexamples. This supports supplied-component assembly, not a measured contemporary factory/order or onsite gear/spring fabrication. |
| wittner-plastic | handbook | https://wittner-gmbh.de/wittner_metronome_maelzel_plastic_casing.html | Actual complete plastic-cased mechanical battery-free products with/without bell; scope here chooses the no-bell subset only, without transferring unreported polymer grade or moulding process. |
| wittner-manual | handbook | https://wittner-gmbh.de/pdf/maelzel_gebrauchsanleitung.pdf | Complete operating manual: musical beat function, winding key, horizontal placement, gentle start and movable weight/scale; informs test-condition collection only. Not a factory-manufacturing or calibration-threshold/certification source. |
| franz-metronome-patent | literature | US4012901A (1977-03-22), Damage-resistant mechanical metronome; https://patents.google.com/patent/US4012901A/en ; https://patentimages.storage.googleapis.com/69/ed/33/1c1b5dccc9749f/US4012901.pdf | Complete patent description/claims and six figures: disclosed spring-driven escapement/pendulum construction and postassembly factory adjustment of alternating half-cycle asymmetry. Historical independent example only; no proof Wittner uses this design and no universal tolerance, material recipe or factory yield. |
| ilcd-allocation | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA — Detailed guidance, first edition March 2010, sections7.9.1–7.9.3 (PDF275–288); https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Qualitative attributional allocation context: subdivision/virtual subdivision, exchange-specific determining physical causality and true residual common-gate state-specific market value; QFD and incorrect-price-gate examples delimit use. No industrial manufacturing or numeric allocation evidence. |
