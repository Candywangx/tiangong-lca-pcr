---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.waste-and-scrap-of-lead
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Source-segregated new rolled-lead sheet cutting offcuts for recycling

## 1. Scope and Applicability

This PCR covers source-segregated solid metal offcuts actually formed while one traced lot of new uncoated rolled lead sheet is laid out and manually cold-cut into roof-flashing blanks. It includes the original sheet receipt and inherited supply history, the joint cutting operation, segregation from usable remnants, actual necessary preparation, net weighing and first quality release against a specified lead-recycling receiver's requirements. Buying already-formed scrap and packing it does not fulfil this scope. The physical terminal is clean solid lead-sheet offcuts for recycling reception, before remelting or refining.

The representative sheet is the standard uncoated rolled construction sheet documented by Calder, not its tin-coated Heritage, colour-coated or preweathered alternatives. Its BS EN 12588 supply specification is a source-specific product description, not an assumed assay of an actual lot. LSTA documents fitting offcuts, suitable containers, segregation and scrap-merchant reception; Monument documents a hooked sheet-lead knife; WB Phillips documents clean roofing/flashings/sheet scrap reception with weighing and grading. Their combination is an explicit qualitative technical synthesis, not a same-SKU or same-factory order or a factory yield/energy dataset. Confirm the actual sheet certificate, hand-cutting configuration and receiver acceptance for each data package.

Exclude intact or dismantled batteries and their plates/paste; lead-bearing ash, slag, dross, dust or chemical sludge as the reference product; lead compounds; deliberately different lead-alloy feeds; coated/clad sheet and mixed origins; old corroded roof demolition; powders/turnings; unwrought metal or ingots; sheet manufacture itself; and finished roof installation/use. Actual cleanup dust is a separately managed outlet, never Q. Reusable remnants remain usable sheet until their real disposition establishes otherwise. No default purity, density, yield, legal threshold, zero upstream burden or recycling credit is supplied. This attributional method applies only where allocation is required by the study goal; it supplies no consequential substitution result. `un-cpc3-2025`; `calder-rolled-sheet`; `lsta-working-lead-2018`; `monument-lead-tools-2018`; `wbphillips-lead-reception` `jrc-ilcd-2010`

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.waste-and-scrap-of-lead |
| classification_refs | CPC 3.0:39364; narrower candidate scope; no accepted mapping |
| covered_products | Single-lot new uncoated rolled-lead flashing-cutting solid offcuts first accepted for specified recycling reception |
| excluded_products | Exclude intact or dismantled batteries and their plates/paste; lead-bearing ash, slag, dross, dust or chemical sludge as the reference product; lead compounds; deliberately different lead-alloy feeds; coated/clad sheet and mixed origins; old corroded roof demolition; powders/turnings; unwrought metal or ingots; sheet manufacture itself; and finished roof installation/use. Actual cleanup dust is a separately managed outlet, never Q. Reusable remnants remain usable sheet until their real disposition establishes otherwise. No default purity, density, yield, legal threshold, zero upstream burden or recycling credit is supplied. This attributional method applies only where allocation is required by the study goal; it supplies no consequential substitution result. |
| representative_product | Source-segregated new rolled-lead sheet cutting offcuts for recycling |
| production_route | Supplied rolled sheet receipt -> layout and manual cold cutting into flashing blanks and offcuts -> source segregation and actual necessary preparation -> weighing and first receiver-specification release |
| market_state | Solid unremelted metal offcuts; actual whole as-released net mass; measured surface condition and composition; no universal grade |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of original-source new rolled-lead sheet cutting offcuts for a specified lead-recycling receiver |
| How much | 1 kg whole net offcuts at unique first quality release |
| How well | Actual traceable sheet composition and clean solid offcut condition accepted to the specific receiver requirements; no presumed pure lead or recovery yield |
| How long or cycle | One original manufacturing cohort; performed later services retain original Q_c and observed H |
| reference_flow_link | released_offcuts |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Waste and scrap of lead `c814e493-f6ff-48a6-9b92-caba670f15e3` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | one traced new uncoated rolled-lead sheet lot to the documented BS EN 12588 supply specification; actual whole alloy composition and trace elements rather than assumed pure Pb; sheet dimensions and actual hand-cutting tool and layout; parent flashing-blank gate and inherited sheet burdens; solid offcut form and separation from reusable remnants batteries ash and sludge; actual oxide layers coatings free water and physical contamination subledgers; source segregation and actual necessary preparation; specified lead-recycling receiver and condition-specific acceptance; unique first-release identity and net whole Q excluding containers; opening and closing raw WIP and FG history with per-exchange vectors; all failures Q0 start stop idle cleanup and rework; attributed A separate from gross physical V; original Q_c and observed post-release service horizon H; actual site country electricity supply voltage and provider; separate complete pool and upstream ownership for every packaging component; every actual waste stream emitted species medium and destination |

Every qualifier is required in the actual package metadata or full exchange/process description; a UUID does not establish lot acceptance. The complete released_offcuts card retains these limits for downstream consumption.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is the net whole offcut mass uniquely first quality-released under cp_release. Exclude all packaging and removed foreign matter; retain actual adherent oxide and water as measured subaccounts of the whole. Q is neither contained-Pb mass nor dispatched mass. The finished row is 1 kg. |
| native_units | all inventory rows | actual extensive property | kg; MJ | Keep original units and reference states. Convert g to kg and kWh to MJ once. Integrate genuine mass/volume rates over their matched time only; cumulative volumes are not multiplied by time. Independent substance-specific density at the actual state is required for volume-to-mass conversion. No water-density default for other materials or kg-per-item guess. |
| quotient_once | all inventory rows | actual extensive property | per reference flow | Collect undivided raw numerators; conversion and exchange-specific attribution precede calc_once. Cards and aggregation only reference its single A/Q result. Service uses original Q_c; H is a horizon and never the production denominator. Q=0 retains actual burdens without a unit result. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Receipt of one traceable new uncoated rolled-lead sheet lot with its compatible upstream supply history |
| starting_condition_role | foreground_starting_condition |
| product_classification_scope | Only the defined clean solid new sheet-offcut subset of CPC 39364; not every lead-bearing waste |
| recursive_input_rule | Purchased prepared scrap does not create manufacturing Q. Internal reusable remnants and rework retain history and cancel matched internal transfers. Released returns retain the original cohort and cannot earn another Q. |
| upstream_dataset_requirement | One compatible provider for the whole rolled sheet including its actual recovery/refining/alloying/rolling and supply freight; actual knife and each utility and packaging article once |
| disclosure | one traced new uncoated rolled-lead sheet lot to the documented BS EN 12588 supply specification; actual whole alloy composition and trace elements rather than assumed pure Pb; sheet dimensions and actual hand-cutting tool and layout; parent flashing-blank gate and inherited sheet burdens; solid offcut form and separation from reusable remnants batteries ash and sludge; actual oxide layers coatings free water and physical contamination subledgers; source segregation and actual necessary preparation; specified lead-recycling receiver and condition-specific acceptance; unique first-release identity and net whole Q excluding containers; opening and closing raw WIP and FG history with per-exchange vectors; all failures Q0 start stop idle cleanup and rework; attributed A separate from gross physical V; original Q_c and observed post-release service horizon H; actual site country electricity supply voltage and provider; separate complete pool and upstream ownership for every packaging component; every actual waste stream emitted species medium and destination |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| sb_manufacture | make | Include original sheet receipt/storage and inherited sheet burden; layout and actual manual cold cutting of flashing blanks; segregation of offcuts from useful remnants; necessary physical sorting/foreign-object removal; actual weighing and receiver-specification first release. Do not replace these operations with purchased scrap packing. Include all real handling, tooling, metering, hygiene, controls, failed runs, start/stop, idle, cleanup, samples and rework. Later installation/finishing of the parent flashing is outside this joint-cutting gate. | `calder-rolled-sheet`; `lsta-working-lead-2018`; `monument-lead-tools-2018`; `wbphillips-lead-reception`; `jrc-ilcd-2010` |
| sb_whole_supply | purchased inputs | Purchase the whole supplied sheet once. Pb assay, trace elements, surface oxide, coating and water are analytical/physical subaccounts, not purchases of pure constituents. Upstream melting, refining and rolling already included in the supplier chain are not repeated onsite. Each whole supplied preparation or tool likewise has one owner; actual onsite mixing requires separate purchased ingredients plus real mixing energy and loss. Scrap status does not establish zero inherited burden. | `calder-rolled-sheet`; `jrc-ilcd-2010` |
| sb_first_release | manufacturing and FG gates | Q counts each unique accepted offcut lot once at its first receiver-specification quality release. Closing FG already released is included in Q; never add closing FG alongside Q as another manufacturing output or subtract its manufacturing vector. Internal first-release transfer cancels in the consolidated physical gate. Reinspection, shipment, return and rework are not new production. Unaccepted lots remain WIP or real waste with their historical burdens. | `wbphillips-lead-reception`; `jrc-ilcd-2010` |
| sb_service | service | Retain performed post-release storage, handling, packing and dispatch in an original-cohort service account with original Q_c and observed horizon H. Keep opening/closing FG and returns with complete historical manufacturing vectors. Do not deduct performed services for closing FG or normalize by H. No assumed storage duration, transport distance, useful tool life or repair success; document actual external freight in its own mode-specific atomic exchange if it is in scope. Net-delivery normalization requires a different reviewed stock/return model. | `lsta-working-lead-2018`; `jrc-ilcd-2010` |
| sb_stocks | every exchange and cohort | Retain opening/closing raw materials, WIP, unused tools/packaging and unassigned charges in original extensive units with per-exchange inherited burden vectors. Correct stocks once only; consumption already stock-adjusted is not corrected again. Include every zero-output and failed event. Q=0 carries all actual loads without a unit result. Internal reuse moves physical quantities and burden history together; matched internal legs cancel while real added work and losses remain. | `jrc-ilcd-2010` |
| sb_physical | manufacturing FG and consolidated gates | Reconcile full gross physical V independently of attributed A at each gate, including main blanks, usable remnants, offcuts, stocks, each waste outlet and real emissions. Close total mass and Pb plus each relevant trace element independently. Whole mixed outlets occur once; source partitions are disjoint and sum to the whole without being added again. Distinguish metal, actual oxide/carbonate phases, free water and other water states by independent measurement. One residual cannot solve two unknown species or water quantities. PM, COD and total-Pb indicators are not molecular mass. Any X correction removes only an exact duplicate OTHER term on the same side, never a stock or opposite-side leg. | `lsta-working-lead-2018`; `jrc-ilcd-2010` |
| sb_packaging | each packaging component pool | For each steel can and each actual film/bag/lid/strap/pallet component separately: opening empty + attached WIP + attached FG + reusable stocks + purchases P + supplier-included ingress I + first nonpurchase external ingress N_ext + external returns received ER = corresponding closing stocks + packaging on gross physical shipments S + external returns sent EO + waste W. Classify each actual external receipt exactly once: ER requires a traceable actual prior outward movement of the same component from this pool; among other receipts P covers every purchased component, including one paid within a whole-lot purchase price without a separate invoice, I covers genuinely nonpurchased components accompanying a supplier delivery, and N_ext covers all remaining first nonpurchase receipts, including third-party empty cans first borrowed or leased. I and N_ext are mutually exclusive; third-party first borrowing/leasing is not supplier-included I. Record actual material/water change independently. Internal reuse cancels and is neither a first external receipt nor another purchase nor Q nor automatic coproduct. S follows gross shipments regardless of return or allocation share. Physical receipt quantity is independent of procurement and burden attribution. Retain procurement mode, legal owner, custody, cohort, inherited per-exchange vectors and one documented upstream/burden/service owner per component receipt; do not invent a new manufacturing purchase, whole-load charge or credit for N_ext. ER retains original history with no fresh supply provider. Whole mixed disposal and disjoint source partitions do not create extra providers. | `lsta-working-lead-2018`; `jrc-ilcd-2010` |
| sb_actual_atoms | actual route | Each actual carrier, fuel, oil formulation, cleaning preparation, tool, packaging article, waste stream and emitted species needs a specific atomic exchange and independent actual query/identity review. No missing quantity is zero. The defined cold manual route does not presume cutting oil, patination, fuel, steam or a boiler. Any actual added substance or changed powered/thermal/chemical route must be explicitly included and reviewed before the package is complete. If external steam/heat carriers really occur, retain supplied and returned water kg, actual state/enthalpy and energy under one supplier convention; condensate exported is a Product return. | `lsta-working-lead-2018`; `monument-lead-tools-2018`; `jrc-ilcd-2010` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| make | Original sheet cutting and first offcut release | required | Actual operation and complete event history; absence needs evidence | foreground | per reference flow |
| service | Actual original-cohort post-release service | conditional | Actual operation and complete event history; absence needs evidence | foreground | per reference flow |
| pack | Each actual packaging component pool | conditional | Actual operation and complete event history; absence needs evidence | foreground | per reference flow |

Keep full descriptions with their ancestors. The manufacturing process aggregates the actual ordered sub-operations stated in sb_manufacture; stage logs retain matched internal transfers which cancel. Tagged physical companion and packaging legs are reconciliation accounts and cannot create duplicate upstream providers. Each card uses only the already-calculated calc_once result; protocols store raw undivided quantities. Unbound names remain single concrete exchanges requiring native/provider compatibility review.

### Process: Original sheet cutting and first offcut release (`make`)

#### Inputs

##### Product flows

###### Whole supplied new rolled-lead sheet (`sheet_feed`)

Record one traced whole standard rolled construction-sheet lot and its actual certificate composition, thickness, dimensions, surface and supply state. Source-specific Calder specification supports the chosen form; actual Pb/trace-element/oxide/water assays remain collected subaccounts. Exclude tin-coated Heritage, other coatings and different intentional alloys. Link one upstream recovery/refining/alloying/rolling/freight history; do not purchase constituents or repeat supplier melting. A refined-lead ingot, rod/profile, copper sheet or lead-tin-antimony alloy identity cannot substitute for this sheet.

Flow UUID remains unbound; do not substitute a generic family.

Use the reference unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` and reference unit kg.

- Selected flow: New uncoated BS EN 12588 rolled lead sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i for attributed load; v_i only for tagged physical reconciliation; performed service uses original-cohort s_i_c. Do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `calder-rolled-sheet`; `jrc-ilcd-2010`

###### Actual whole hooked sheet-lead knife (`lead_knife`)

One actual complete heat-treated hooked knife with wooden handle for the declared manual cutting operation; Monument 1027L is a documented tool example, not a required SKU or measured consumption. Record the supplied complete tool and actual service/retirement with unused/installed stock history; no knife per kilogram or assumed lifetime. A replacement steel shear blade is not this whole wooden-handled knife. Other actually used tools require separate atomic cards.

Flow UUID remains unbound; do not substitute a generic family.

Use the reference unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` and reference unit kg.

- Selected flow: Hooked sheet-lead knife with wooden handle
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i for attributed load; v_i only for tagged physical reconciliation; performed service uses original-cohort s_i_c. Do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_tool`
- Sources: `monument-lead-tools-2018`; `jrc-ilcd-2010`

###### Actual manufacturing ancillary electricity (`make_electricity`)

Conditional actual lighting, scale, vacuum-cleaning or handling electricity within the manufacturing scope; manual cutting does not imply powered cutting. Use the actual country, supply mix, voltage and meter/loss boundary with a compatible provider. Source-specific straw-power output and CN-only consumer identities cannot automatically represent a UK or otherwise different user supply. Meter raw kWh/MJ once and retain idle/cleanup loads.

Flow UUID remains unbound; do not substitute a generic family.

Use the reference unit group Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` and reference unit MJ.

- Selected flow: Purchased low-voltage alternating-current electricity at user meter
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use already-calculated x_i for attributed load; v_i only for tagged physical reconciliation; performed service uses original-cohort s_i_c. Do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources: `lsta-working-lead-2018`; `jrc-ilcd-2010`

###### Actual manufacturing hygiene and cleanup tap water (`make_water`)

Conditional actual piped treated potable municipal/public-supply water used for hygiene or necessary cleanup, not raw surface water, deionized water, cooling water or steam. Native identity is production mix/in-factory water supply with location-dependent treatment and quality; verify actual supplier and quality. Its reference is Mass/kg; the secondary volume coefficient is not measured site density. Weigh or independently measure density/state for metered-volume conversion. Keep water in wastewater, evaporation, retained stock and actual product surface separate.

Use the reference unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` and reference unit kg.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i for attributed load; v_i only for tagged physical reconciliation; performed service uses original-cohort s_i_c. Do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `lsta-working-lead-2018`; `jrc-ilcd-2010`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Unique first-released offcut reference output (`released_offcuts`)

The Product-flow native record is production mix at plant with unspecified treatment, no fixed CAS, alloy grade, purity, shape, geography or receiver. Restrict it here to clean solid offcuts actually formed from one traced new uncoated rolled BS EN 12588 sheet lot while manually cutting roof-flashing blanks, source-segregated and first accepted to a named lead-recycling receiver specification. Not a battery, chemical sludge, ash, dust, alloy ingot, pure-Pb assay or treatment service. The actual whole metal/oxide/free-water composition and physical contaminants are measured subaccounts, not added purchases. All required qualifiers in section 3 apply to this complete exchange description and upstream compatibility. Q excludes containers and removed foreign objects; closing released FG already belongs to Q. Required qualifiers: one traced new uncoated rolled-lead sheet lot to the documented BS EN 12588 supply specification; actual whole alloy composition and trace elements rather than assumed pure Pb; sheet dimensions and actual hand-cutting tool and layout; parent flashing-blank gate and inherited sheet burdens; solid offcut form and separation from reusable remnants batteries ash and sludge; actual oxide layers coatings free water and physical contamination subledgers; source segregation and actual necessary preparation; specified lead-recycling receiver and condition-specific acceptance; unique first-release identity and net whole Q excluding containers; opening and closing raw WIP and FG history with per-exchange vectors; all failures Q0 start stop idle cleanup and rework; attributed A separate from gross physical V; original Q_c and observed post-release service horizon H; actual site country electricity supply voltage and provider; separate complete pool and upstream ownership for every packaging component; every actual waste stream emitted species medium and destination.

Use the reference unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` and reference unit kg.

- Selected flow: Waste and scrap of lead `c814e493-f6ff-48a6-9b92-caba670f15e3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources: `calder-rolled-sheet`; `lsta-working-lead-2018`; `wbphillips-lead-reception`; `jrc-ilcd-2010`

###### Joint cut-to-shape flashing blank (`parent_blank`)

Measure the actual parent blank at the same joint cut gate before installation, welding or patination. Preserve its disjoint sheet history and allocation share. This is a physical companion reconciliation output, not an additional reference output or extra provider layered on the offcut dataset. Later parent work belongs to the parent chain.

Flow UUID remains unbound; do not substitute a generic family.

Use the reference unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` and reference unit kg.

- Selected flow: Uncoated rolled-lead roof-flashing blank
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i for attributed load; v_i only for tagged physical reconciliation; performed service uses original-cohort s_i_c. Do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `calder-rolled-sheet`; `monument-lead-tools-2018`; `jrc-ilcd-2010`

###### Actually reusable sheet remnant (`usable_remnant`)

Conditional actual useful remnant retained or externally supplied as sheet; identify geometry and actual use/status. Internal return is a paired transfer with inherited sheet vector and cancels; external sale is a separate physical companion output at its actual gate. Neither is Q or automatically scrap. Do not count the same piece both as remnant stock and offcut product.

Flow UUID remains unbound; do not substitute a generic family.

Use the reference unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` and reference unit kg.

- Selected flow: Reusable uncoated rolled-lead sheet remnant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i for attributed load; v_i only for tagged physical reconciliation; performed service uses original-cohort s_i_c. Do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `lsta-working-lead-2018`; `jrc-ilcd-2010`

##### Waste flows

###### Actual unreleased rejected solid cutoffs (`unreleased_cutoffs`)

Conditional solid cutoffs genuinely transferred as waste after failed acceptance or irrecoverable contamination. Trace origin, whole measured mass, actual contamination/status, destination and inherited burdens. WIP awaiting decision remains WIP. This waste is distinct from Q and separately captured cleanup dust; no default loss rate or automatic recovery credit.

Flow UUID remains unbound; do not substitute a generic family.

Use the reference unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` and reference unit kg.

- Selected flow: Unreleased rolled-lead solid cutoff waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i for attributed load; v_i only for tagged physical reconciliation; performed service uses original-cohort s_i_c. Do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `lsta-working-lead-2018`; `wbphillips-lead-reception`; `jrc-ilcd-2010`

###### Captured manufacturing cleanup dust (`make_dust`)

Conditional captured lead-bearing dry cleanup dust as one whole mixed waste stream. Independently measure total mass, actual Pb/trace elements and oxide/carbonate phases, moisture and receiver; composition partitions do not add to the whole. It is neither clean solid offcuts nor an elementary emission or generic pure lead. Keep each other actual waste outlet separate.

Flow UUID remains unbound; do not substitute a generic family.

Use the reference unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` and reference unit kg.

- Selected flow: Captured lead-bearing dry cleanup dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i for attributed load; v_i only for tagged physical reconciliation; performed service uses original-cohort s_i_c. Do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `lsta-working-lead-2018`; `jrc-ilcd-2010`

###### Manufacturing hygiene and cleanup wastewater (`make_wastewater`)

Conditional one whole actual lead-bearing hygiene/cleanup wastewater outlet to external treatment, with measured water and each solute/solid subaccount, actual destination and one treatment provider. Not an elementary discharge; treatment effluent to a real medium requires separately named species and quantities after treatment. Total Pb or COD alone cannot define PbO or any organic molecular mass.

Flow UUID remains unbound; do not substitute a generic family.

Use the reference unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` and reference unit kg.

- Selected flow: Lead-bearing hygiene and cleanup wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i for attributed load; v_i only for tagged physical reconciliation; performed service uses original-cohort s_i_c. Do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `lsta-working-lead-2018`; `jrc-ilcd-2010`

###### Retired whole cutting knife (`retired_knife`)

Conditional actual whole-tool retirement at its real destination, including blade and handle once if supplied/retired together. Record material/contamination composition and one receiving provider; if actually dismantled create disjoint blade and handle outlets instead, not in addition. Carry prior service history and no automatic metal recovery credit.

Flow UUID remains unbound; do not substitute a generic family.

Use the reference unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` and reference unit kg.

- Selected flow: Retired hooked sheet-lead knife with wooden handle
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i for attributed load; v_i only for tagged physical reconciliation; performed service uses original-cohort s_i_c. Do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_tool`
- Sources: `monument-lead-tools-2018`; `jrc-ilcd-2010`

##### Elementary flows

###### Residual manufacturing lead to air (`make_pb_air`)

Conditional actual residual lead emission to air after controls. Native Elementary flow CAS 7439-92-1 uses Mass/kg in emissions-to-air-unspecified; it represents metallic Pb and ions unless the applied LCIA method differentiates a preferred ion-specific flow. Retain independent actual species/phase evidence and elemental-Pb mass as an analytical basis; do not label kg of whole dust or PbO as kg Pb. If PbO/carbonate or another differentiated species is emitted, add its own confirmed atomic identity with explicit non-overlap before completion. This identity does not establish a stack height, non-urban compartment, zero release or measured legal compliance. Never duplicate offsite captured dust/treatment.

Use the reference unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` and reference unit kg.

- Selected flow: lead `4d9a8790-3ddd-11dd-91dc-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i for attributed load; v_i only for tagged physical reconciliation; performed service uses original-cohort s_i_c. Do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `lsta-working-lead-2018`; `jrc-ilcd-2010`

### Process: Actual original-cohort post-release service (`service`)

#### Inputs

##### Product flows

###### Actual post-release service electricity (`service_electricity`)

Conditional actual storage/handling/packing/dispatch electric load after first release, tagged to the original cohort Q_c and observed H. Match actual country, user voltage and supply/loss boundary; no default foreign grid or source-specific generation identity. Keep raw undivided service load, original FG history and returns; no new Q on shipment.

Flow UUID remains unbound; do not substitute a generic family.

Use the reference unit group Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` and reference unit MJ.

- Selected flow: Purchased low-voltage alternating-current electricity at user meter
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use already-calculated x_i for attributed load; v_i only for tagged physical reconciliation; performed service uses original-cohort s_i_c. Do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `lsta-working-lead-2018`; `jrc-ilcd-2010`

###### Actual post-release cleanup tap water (`service_water`)

Conditional actual piped treated potable municipal/public-supply water used for hygiene or necessary cleanup, not raw surface water, deionized water, cooling water or steam. Native identity is production mix/in-factory water supply with location-dependent treatment and quality; verify actual supplier and quality. Its reference is Mass/kg; the secondary volume coefficient is not measured site density. Weigh or independently measure density/state for metered-volume conversion. Keep water in wastewater, evaporation, retained stock and actual product surface separate. Tag solely to performed post-release service and original Q_c; do not repeat manufacturing water.

Use the reference unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` and reference unit kg.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i for attributed load; v_i only for tagged physical reconciliation; performed service uses original-cohort s_i_c. Do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `lsta-working-lead-2018`; `jrc-ilcd-2010`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Captured post-release handling dust (`service_dust`)

Conditional captured lead-bearing dry cleanup dust as one whole mixed waste stream. Independently measure total mass, actual Pb/trace elements and oxide/carbonate phases, moisture and receiver; composition partitions do not add to the whole. It is neither clean solid offcuts nor an elementary emission or generic pure lead. Keep each other actual waste outlet separate. Retain original cohort service history; collection/reinspection does not make another product Q.

Flow UUID remains unbound; do not substitute a generic family.

Use the reference unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` and reference unit kg.

- Selected flow: Captured lead-bearing dry cleanup dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i for attributed load; v_i only for tagged physical reconciliation; performed service uses original-cohort s_i_c. Do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `lsta-working-lead-2018`; `jrc-ilcd-2010`

###### Post-release cleanup wastewater (`service_wastewater`)

Conditional one whole actual lead-bearing hygiene/cleanup wastewater outlet to external treatment, with measured water and each solute/solid subaccount, actual destination and one treatment provider. Not an elementary discharge; treatment effluent to a real medium requires separately named species and quantities after treatment. Total Pb or COD alone cannot define PbO or any organic molecular mass. Attribute performed service to original Q_c.

Flow UUID remains unbound; do not substitute a generic family.

Use the reference unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` and reference unit kg.

- Selected flow: Lead-bearing hygiene and cleanup wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i for attributed load; v_i only for tagged physical reconciliation; performed service uses original-cohort s_i_c. Do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `lsta-working-lead-2018`; `jrc-ilcd-2010`

##### Elementary flows

###### Residual post-release handling lead to air (`service_pb_air`)

Conditional actual residual lead emission to air after controls. Native Elementary flow CAS 7439-92-1 uses Mass/kg in emissions-to-air-unspecified; it represents metallic Pb and ions unless the applied LCIA method differentiates a preferred ion-specific flow. Retain independent actual species/phase evidence and elemental-Pb mass as an analytical basis; do not label kg of whole dust or PbO as kg Pb. If PbO/carbonate or another differentiated species is emitted, add its own confirmed atomic identity with explicit non-overlap before completion. This identity does not establish a stack height, non-urban compartment, zero release or measured legal compliance. Never duplicate offsite captured dust/treatment. Apply only to actual post-release service of the original cohort.

Use the reference unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` and reference unit kg.

- Selected flow: lead `4d9a8790-3ddd-11dd-91dc-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i for attributed load; v_i only for tagged physical reconciliation; performed service uses original-cohort s_i_c. Do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `lsta-working-lead-2018`; `jrc-ilcd-2010`

### Process: Each actual packaging component pool (`pack`)

#### Inputs

##### Product flows

###### Steel-can first external receipt (`can_purchase`)

Conditional one actual complete suitable steel can, capacity no more than 300 L and without mechanical/thermal equipment or compressed-gas role, used for the defined offcuts. Native Steel can is Product Mass/kg; no fixed alloy, coating, dimensions, geography or supplier is stated. Active container classification and preserved older miscellaneous-goods label are separate metadata; the older label adds no physical identity. Verify composition/coating/lid/liner, receiver suitability and actual supplier. Separate independently supplied lid/liner if not part of the whole supply. It is not a large skip, intermodal container or automatic food-can proxy. This same Product input card records actual P, I or N_ext steel-can receipts, including a compatible third-party empty can first borrowed or leased, as disjoint receipt-level records under sb_packaging; its stable row_id does not require a purchase. Retain measured net kg and count-to-mass evidence, actual incoming interface/form/type/direction, receipt ID/time/source, procurement mode, legal owner, custody, cohort, inherited vectors and the single documented upstream/burden/service owner through cp_pack. A bundled purchased can remains P even without separate invoicing; a genuinely nonpurchased supplier-included can is I, not N_ext. Stock consumption/service attribution is not physical ingress; first borrowing does not create a new manufacturing purchase, whole-load charge or credit.

Use the reference unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` and reference unit kg.

- Selected flow: Steel can `b13f7ab0-5d1d-48ad-af1e-bf8da76083b7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i for attributed load; v_i only for tagged physical reconciliation; performed service uses original-cohort s_i_c. Do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `lsta-working-lead-2018`; `jrc-ilcd-2010`

###### External steel cans received back (`can_return_received`)

Conditional one actual complete suitable steel can, capacity no more than 300 L and without mechanical/thermal equipment or compressed-gas role, used for the defined offcuts. Native Steel can is Product Mass/kg; no fixed alloy, coating, dimensions, geography or supplier is stated. Active container classification and preserved older miscellaneous-goods label are separate metadata; the older label adds no physical identity. Verify composition/coating/lid/liner, receiver suitability and actual supplier. Separate independently supplied lid/liner if not part of the whole supply. It is not a large skip, intermodal container or automatic food-can proxy. Record ER only against a traceable actual prior outward movement of the same component from this pool, retaining outward/return IDs, times, custody, cohort and original per-exchange history; not another fresh purchase/provider. A third-party empty can first borrowed or leased has no such prior outward link and belongs to N_ext on can_purchase, never ER or internal reuse.

Use the reference unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` and reference unit kg.

- Selected flow: Steel can `b13f7ab0-5d1d-48ad-af1e-bf8da76083b7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i for attributed load; v_i only for tagged physical reconciliation; performed service uses original-cohort s_i_c. Do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `lsta-working-lead-2018`; `jrc-ilcd-2010`

###### Actual polyethylene sheet-protection film ingress (`pe_film_in`)

Conditional only if actual supplier packaging is this identified LDPE film; not an assertion that Calder supplies it. Record whole film composition/thickness, empty/attached-WIP/attached-FG/reusable opening/closing stocks and real destination. Other materials or separately supplied bag/strap/pallet/lid each need their own named card and pool; an absent film is not a packaging exclusion. Record each actual first external receipt as exactly one of P, I or N_ext under sb_packaging and cp_pack, with retained history and one upstream/burden/service owner; bundled purchased film is P, genuinely nonpurchased supplier-included film is I, and other first nonpurchase ingress is N_ext, never ER or internal reuse.

Flow UUID remains unbound; do not substitute a generic family.

Use the reference unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` and reference unit kg.

- Selected flow: Low-density polyethylene sheet-protection film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i for attributed load; v_i only for tagged physical reconciliation; performed service uses original-cohort s_i_c. Do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ilcd-2010`

###### Actual external sheet-protection film returned (`pe_film_er`)

Conditional only if actual supplier packaging is this identified LDPE film; not an assertion that Calder supplies it. Record whole film composition/thickness, empty/attached-WIP/attached-FG/reusable opening/closing stocks and real destination. Other materials or separately supplied bag/strap/pallet/lid each need their own named card and pool; an absent film is not a packaging exclusion. ER with history; no fresh supplier.

Flow UUID remains unbound; do not substitute a generic family.

Use the reference unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` and reference unit kg.

- Selected flow: Low-density polyethylene sheet-protection film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i for attributed load; v_i only for tagged physical reconciliation; performed service uses original-cohort s_i_c. Do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ilcd-2010`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Steel cans on gross physical shipment (`can_shipped`)

Conditional one actual complete suitable steel can, capacity no more than 300 L and without mechanical/thermal equipment or compressed-gas role, used for the defined offcuts. Native Steel can is Product Mass/kg; no fixed alloy, coating, dimensions, geography or supplier is stated. Active container classification and preserved older miscellaneous-goods label are separate metadata; the older label adds no physical identity. Verify composition/coating/lid/liner, receiver suitability and actual supplier. Separate independently supplied lid/liner if not part of the whole supply. It is not a large skip, intermodal container or automatic food-can proxy. Record S on gross actual shipment even if product later returns; never multiply physical can mass by an economic allocation share.

Use the reference unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` and reference unit kg.

- Selected flow: Steel can `b13f7ab0-5d1d-48ad-af1e-bf8da76083b7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i for attributed load; v_i only for tagged physical reconciliation; performed service uses original-cohort s_i_c. Do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `lsta-working-lead-2018`; `jrc-ilcd-2010`

###### Steel cans returned externally (`can_return_sent`)

Conditional one actual complete suitable steel can, capacity no more than 300 L and without mechanical/thermal equipment or compressed-gas role, used for the defined offcuts. Native Steel can is Product Mass/kg; no fixed alloy, coating, dimensions, geography or supplier is stated. Active container classification and preserved older miscellaneous-goods label are separate metadata; the older label adds no physical identity. Verify composition/coating/lid/liner, receiver suitability and actual supplier. Separate independently supplied lid/liner if not part of the whole supply. It is not a large skip, intermodal container or automatic food-can proxy. Record EO as a real external return, distinct from shipment and internal reuse.

Use the reference unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` and reference unit kg.

- Selected flow: Steel can `b13f7ab0-5d1d-48ad-af1e-bf8da76083b7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i for attributed load; v_i only for tagged physical reconciliation; performed service uses original-cohort s_i_c. Do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `lsta-working-lead-2018`; `jrc-ilcd-2010`

###### Actual sheet-protection film on gross shipment (`pe_film_ship`)

Conditional only if actual supplier packaging is this identified LDPE film; not an assertion that Calder supplies it. Record whole film composition/thickness, empty/attached-WIP/attached-FG/reusable opening/closing stocks and real destination. Other materials or separately supplied bag/strap/pallet/lid each need their own named card and pool; an absent film is not a packaging exclusion. S follows gross physical shipment, not Q.

Flow UUID remains unbound; do not substitute a generic family.

Use the reference unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` and reference unit kg.

- Selected flow: Low-density polyethylene sheet-protection film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i for attributed load; v_i only for tagged physical reconciliation; performed service uses original-cohort s_i_c. Do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ilcd-2010`

###### Actual sheet-protection film returned externally (`pe_film_eo`)

Conditional only if actual supplier packaging is this identified LDPE film; not an assertion that Calder supplies it. Record whole film composition/thickness, empty/attached-WIP/attached-FG/reusable opening/closing stocks and real destination. Other materials or separately supplied bag/strap/pallet/lid each need their own named card and pool; an absent film is not a packaging exclusion. EO is an external return; internal reuse cancels.

Flow UUID remains unbound; do not substitute a generic family.

Use the reference unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` and reference unit kg.

- Selected flow: Low-density polyethylene sheet-protection film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i for attributed load; v_i only for tagged physical reconciliation; performed service uses original-cohort s_i_c. Do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ilcd-2010`

##### Waste flows

###### Actually retired steel-can waste (`can_waste`)

Conditional W of the same measured steel-can pool, with actual contamination, composition, contents removal and receiver. Keep one whole disposal provider; content/steel/coating partitions are not added to the whole. Empty can waste is not Pb offcuts or Q and earns no automatic credit.

Flow UUID remains unbound; do not substitute a generic family.

Use the reference unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` and reference unit kg.

- Selected flow: Retired steel can for recycling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i for attributed load; v_i only for tagged physical reconciliation; performed service uses original-cohort s_i_c. Do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `lsta-working-lead-2018`; `jrc-ilcd-2010`

###### Actual retired sheet-protection film (`pe_film_waste`)

Conditional W of the same actual LDPE-film pool. Measure whole contaminated film once with its actual receiver and composition subaccounts; no pure-polymer purchase repeated and no invented recycling yield or emission.

Flow UUID remains unbound; do not substitute a generic family.

Use the reference unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` and reference unit kg.

- Selected flow: Retired low-density polyethylene sheet-protection film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use already-calculated x_i for attributed load; v_i only for tagged physical reconciliation; performed service uses original-cohort s_i_c. Do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ilcd-2010`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| al_context | study goal | Apply this hierarchy only in an attributional case requiring allocation. Establish the joint gate where traced sheet becomes cut flashing blanks, reusable remnants and collected offcuts, with each actual status and function. Do not infer allocation or end-of-waste approval from commercial scrap terminology. Record actual receiving permissions and contract conditions without invented legal thresholds. | `jrc-ilcd-2010` |
| al_subdivide | each exchange | First isolate dedicated operations or use justified virtual subdivision. Assign offcut-only segregation/weighing directly to offcuts and parent-only forming work directly to the parent. Trace physically embodied sheet portions and supplier history to their actual destinations; separately assign non-valued losses with a justified causal treatment. Embodiment is not a blanket mass-allocation rule. Do not give offcuts no history merely because they are secondary. | `jrc-ilcd-2010` |
| al_causality | remaining common exchanges | For each remaining exchange establish the determining physical causal relationship supported by the actual operation. Cutting length/time, retained material embodiment and occupied storage volume-time can have different roles; none is a universal default. A cut made to form the parent may be determined by the parent surface/shape rather than offcut mass, as illustrated by the ILCD tile/gravel counterexample. State the evidence, driver, affected exchange and sensitivity; do not apply one mass ratio to all exchanges. | `jrc-ilcd-2010` |
| al_residual | unresolved common-process residual only | Only after documented failure of subdivision and determining physical causality allocate the genuine remaining common-process residual by contemporaneous market values for each cofunction at the same joint gate and its actual condition/quantity. First evidence the applicable product/treatment function, actual status, boundary and valuation case. Derive unmatched later selling prices back to that gate by removing evidenced later preparation/packing/transport costs; do not import finished-roof or refined-lead prices. State actual status, currency, dates, sources, non-positive values, missing prices and sensitivity. Negative or offsetting values and unresolved product/treatment functions require explicit case-specific methodological review; hold generic residual shares and the affected unit result until an evidenced applicable method and its review decision resolve the case. Missing or incomparable prices, zero values or an undefined denominator also require documented defensible handling before residual shares or the affected unit result can be issued; do not fabricate shares. Preserve already assigned dedicated/causal burdens, full physical V and inherited histories, failed/Q0 events, performed original-cohort services and once-only provider accounting during the hold. Negative burdens, zero burdens, absolute-value keys and avoided-production credits are not defaults; a negative-value case may proceed under its evidenced applicable reviewed method. No fixed allocation percentage or automatic avoided-production credit. | `jrc-ilcd-2010` |
| al_internal | internal reuse and provider accounting | Internal reusable remnants or returned offcuts retain complete historical vectors; paired transfers cancel and actual incremental work remains. Reuse is not a new purchase, credit or second first release. Keep one upstream owner for each whole incoming article and each whole external waste stream; do not layer a whole-mixture provider and its constituent/source partitions. | `jrc-ilcd-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | make | whole sheet and physical companions | scale and lot tracking | lot; supplier; sheet certificate; grade and dimensions; gross; tare; whole net kg; assay basis; each element and phase; free water; parent blank kg; remnant kg; opening raw and WIP kg; closing raw and WIP kg; inherited exchange vectors; transport owner | Owner: manufacturing recorder. Weigh and identify each actual sheet/blank/remnant movement, preserve supplier chain and cross-check cut layout and stocks. Collect full unallocated gross physical records and raw extensive loads without Q division; do not treat supplier certificates as measured site moisture. | kg | each movement and period close | complete manufacturing cohort and inherited WIP | actual source/cutting site and joint gate | per 1 kg reference flow | calibrated scales; lot certificates; inventory and vector reconciliation |
| cp_release | make | unique first-release Q | weighing and receiver specification release | unique lot; first acceptance id and time; source certificate; solid form; gross; tare; net whole kg; oxide and water basis; foreign objects removed; receiver and specification; released closing FG; rejected kg; original Q_c | Owner: quality releaser. Independently weigh net whole offcuts and verify actual origin/composition/condition against the named receiver agreement. Deduplicate release ids and distinguish unreleased WIP, useful remnant, released FG, return and dispatch. Keep raw Q; no normalized amount in collection. | kg | every lot first release and reporting close | same cohort as numerator and original FG history | first receiver-specification release gate | per 1 kg reference flow | scale calibration; actual agreement; composition test; unique release register |
| cp_tool | make | whole knife service and retirement | tool issue service and stock log | whole tool identity; complete net kg; receipt; unused and installed opening/closing stocks; actual use time; sharpening work; retirement kg and destination; prior exchange vectors | Owner: tool custodian. Track actual complete tool supply and service assignment with actual use/retirement history; measure mass independently. Retain unused/installed service stock. Include real sharpening consumables/energy/outlets as new atomic rows; never invent useful life or knife mass. Raw records only. | kg | each issue service and retirement | complete cohort and prior service history | actual manual cutting station | per 1 kg reference flow | receipt; mass record; use log; retirement and stock reconciliation |
| cp_energy | make | manufacturing electricity | meter and activity log | meter id; supplier; country; voltage; loss boundary; cumulative start and end; unit; event time; start stop idle cleanup; dedicated and shared drivers; opening/closing unassigned load | Owner: utility recorder. Retain raw meter differences in kWh or MJ, classify actual sub-operations and collect independent drivers before attribution. No inferred electricity from rated power without measured operating time/load. Shared meter reconciliation retains all failed/zero-output and idle events. Do not divide by Q here. | kWh; MJ | each event and complete period | matched manufacturing period including failures | actual user meter and supply interface | per 1 kg reference flow | meter calibration; bills; event reconciliation; driver evidence |
| cp_water | make | tap water and whole cleanup wastewater | water and wastewater measurement | supplier water quality; raw meter unit; cumulative volume; actual density and state; whole wastewater kg; each solute and solid; actual species; water destinations; cleanup/hygiene event; treatment receiver | Owner: hygiene/cleanup recorder. Measure raw supplied and outgoing quantities independently; distinguish volume from rate and preserve actual density/state. Trace one whole wastewater provider and independent dissolved/solid composition. Include retained/evaporated water and true other outlets; a balance residual is not a measured species or second water unknown. No Q division. | kg; m3 | each actual cleanup and matched period | manufacturing cohort with water stocks | actual water and waste boundary | per 1 kg reference flow | water record; sampling methods; density conditions; receiving manifest |
| cp_waste | make | each solid waste stream | container scale and transfer record | named waste; origin lot; gross; tare; whole net kg; phase and composition; water; WIP decision; destination and actual status; internal/external flag; inherited vectors | Owner: waste recorder. Weigh unreleased cutoffs and cleanup dust separately as full actual streams with sampling and receiver records. Do not classify undecided WIP as waste or multiply by an economic share. Partition assays and origins without adding to whole mass or duplicating a provider. Collect raw amounts only. | kg | each actual outlet and closing stock | complete manufacturing period including cleanup | actual source and receiving gate | per 1 kg reference flow | calibration; sampling; destination record; physical and element closure |
| cp_emission | make | actual individual species to actual medium | monitor and speciation record | species; CAS if known; actual phase; Pb analytic basis; medium; post-control concentration; cumulative volume or actual rate; reference state; matched time; control status; detection limit and uncertainty | Owner: emission recorder. Measure after actual controls with matched concentration and volume/state, integrating a genuine rate only. Retain Pb versus oxide/ion/species conversion from independent composition and no double counting. Distinguish occupational concentration from environmental mass release and collected dust. Absence needs actual method and detection-limit evidence; unknown is not zero. Collect undivided raw quantities. | kg | actual measurement intervals and complete events | representative full period with controls and failures | each actual emission point and medium | per 1 kg reference flow | laboratory and monitor QA; species method; uncertainty and coverage |
| cp_service | service | each post-release exchange and original cohort | cohort service stock and return ledger | original lot and Q_c; observed H; actual service event; raw meter/scales/species; opening and closing FG history; gross dispatch; actual returns; further work and failures; each exchange vector; unassigned service stock | Owner: warehouse recorder. Retain each actual service in its own physical unit with country/voltage/water/species conditions as on the corresponding card and original stock histories. Trace every return and original release; no second Q or assumed net delivery. Use cp_water/cp_waste/cp_emission methods for the corresponding service streams. Keep raw undivided records and actual H. | kg; kWh; MJ | each service dispatch return and close | original cohort and actual observed extension H | actual warehouse handling and dispatch sites | per 1 kg reference flow | release-id trail; meters; stock/vector reconciliation; actual horizon |
| cp_pack | pack | each packaging component complete pool | component supply stock shipment return waste ledger | component and whole supply definition; composition; actual net kg and measured count-to-mass basis; incoming/outgoing interface form flow type and direction; unique receipt ID time and source record; procurement mode and actual purchase-price inclusion; legal owner and custody; cohort and inherited per-exchange vectors; opening and closing empty WIP-attached FG-attached reusable stocks; P; I; N_ext; ER; S; EO; W; linked same-component prior outward ID time and quantity for ER; internal reuse; actual water/material change; unique provider and prior burden/service owner | Owner: packaging custodian. Independently weigh/count each actual component with measured mass where counts need conversion. Classify every actual receipt once by sb_packaging: P includes components paid within a whole-lot purchase price without separate invoicing; I is genuinely nonpurchased supplier-included ingress; N_ext is remaining first nonpurchase ingress including third-party empty cans first borrowed/leased; ER needs the same component's actual prior outward record. Reconcile sb_packaging in raw physical amounts per component and cohort before burden attribution, retaining actual procurement, legal ownership, custody and inherited vectors. Trace one upstream/burden/service owner without a fabricated manufacturing purchase, whole-load charge or credit for N_ext. S uses gross physical shipment; returns keep history; no fresh supply provider on internal reuse/ER. Separate source partitions of a shared mixed outlet without adding them to the whole. No Q division during collection. | kg | each ingress movement dispatch return waste and close | complete manufacturing and original service cohort | actual supplier third-party custodian warehouse and receiving pool gates | per 1 kg reference flow | weighing; component certificates; receipt/outward links; complete component-pool closure; provider ownership |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_raw | all inventory rows | Convert each undivided original observation to its extensive row unit before allocation. For raw electricity kWh multiply once by 3.6 to MJ. For actual species concentration use matched cumulative volume, or integrate true rate over time, then apply independently evidenced element/species basis. Preserve reference states and uncertainty; no second time multiplication or inferred density. | cp_material; cp_release; cp_tool; cp_energy; cp_water; cp_waste; cp_emission; cp_service; cp_pack | raw_extensive_i | `jrc-ilcd-2010` |
| calc_assign | all inventory rows | Apply al_subdivide then al_causality then only the documented al_residual remainder separately by exchange. Apply al_residual including its hold before calc_once. For each manufacturing exchange form A_i from disjoint current attributable load plus inherited opening WIP/unused unassigned vector minus closing unfinished/unused unassigned vector. Correct stocks once. Released-FG manufacturing history stays in Q and is not subtracted. Failures and actual losses remain assigned explicitly. Form B_i_c separately for performed original-cohort service with its inherited unassigned service vectors. | raw_extensive_i; cp_material; cp_release; cp_tool; cp_service; cp_pack | A_i; B_i_c | `jrc-ilcd-2010` |
| calc_physical | manufacturing FG consolidated and packaging gates | Keep full V_i independent of A_i. At each gate reconcile opening plus gross external input with closing plus gross external output and independently evidenced transformations; cancel paired internal legs. Manufacturing output includes unique Q, joint parent blanks, actual external reusable remnants and wastes, without adding released closing FG beside Q. FG: opening FG plus first-release transfer plus actual returns equals closing FG plus gross dispatch plus actual waste/loss. Reconcile Pb and other elements independently and apply each separate sb_packaging pool. X removes only exact same-side OTHER duplication. | cp_material; cp_release; cp_waste; cp_water; cp_service; cp_pack | V_i; physical_residual; elemental_residual | `jrc-ilcd-2010` |
| calc_once | all inventory rows | For Q>0 execute x_i = A_i / Q once; the separately tagged physical audit is v_i = V_i / Q. Performed service is s_i_c = B_i_c / Q_c using the original first-release denominator only. These accounts are parallel and cannot become sequential divisions or duplicated providers. Cards and aggregation only reference these results. If the applicable Q or Q_c is zero retain complete raw loads and histories without producing a unit result. | A_i; B_i_c; V_i; cp_release; cp_service | x_i; v_i; s_i_c | `jrc-ilcd-2010` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | reference and sheet | Trace one uncoated rolled sheet lot, actual whole composition and solid offcut form through original cutting to a named recycling receiver. Distinguish batteries, coated alternatives, alloy feeds, dust/ash/sludge and usable remnants; no generic lead name establishes a lot. | supplier certificate; route records; actual receiver specification; assays |
| dq_completeness | every physical and burden account | Retain all applicable raw extensive quantities, failed/Q0/start-stop/idle/cleanup/rework events, WIP/FG vectors and actual service H. Missing data remain unknown; no zero or not_applicable without physical evidence. Add actual extra materials and species before completed-package release. | event register; meters; stocks; mass/element and complete component-pool closure |
| dq_representativeness | sources and upstream providers | Manufacturer/training/receiver sources establish the stated qualitative route and terminal, not a common factory BOM or environmental intensity. Declare actual site, country, period, suppliers, quantities, controls, status and technical transfer limits. Keep unmatched native identities unbound and concrete. | source applicability assessment; supplier and actual foreground records |
| dq_allocation | each common exchange | Document subdivision attempts, determining driver and uncertainty, remaining common-process residual, condition/gate/period-matched values and sensitivity. Do not inherit another draft's allocation approval or a blanket ratio. | exchange-specific allocation worksheet and raw evidence |
| dq_bilingual | all UUID-bearing and unbound rows | Preserve original native type/route/form/CAS/geography/property restrictions and exact unit chain in every applicable complete exchange description. Use official Chinese base names for UUID flows; translate unbound atomic names accurately. | complete native identity and projection context audit |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| vr_reference | released_offcuts | Exactly one Product output linked by reference_flow_link is 1 kg of the defined first-released whole offcuts. Q is measured independently of Pb assay and shipment. Closing released FG is already in Q; no repeated release on reinspection or return. | `lsta-working-lead-2018`; `jrc-ilcd-2010` |
| vr_route | make and actual receiver | Require evidence of original supplied sheet, actual cutting into parent blanks/offcuts, source segregation, actual necessary preparation and specified recycling reception. A purchased scrap packing record cannot pass origin coverage. Clean offcuts are not batteries or residues simply because Pb is present. | `lsta-working-lead-2018`; `jrc-ilcd-2010` |
| vr_units | all inventory rows | Retain native reference property/unit group/unit and all actual conditions. No rods-to-sheet, source-generation-to-user-electricity, foreign-grid substitution or pure-element-to-mixture substitution by name. Unbound auxiliaries/providers remain explicit gaps; a missing core reference or true terminal evidence keeps methodology draft. | `lsta-working-lead-2018`; `jrc-ilcd-2010` |
| vr_accounts | manufacturing FG service and package pools | Independently verify gross V, attributed A, each element, WIP history, unique Q and original Q_c services. Require separate complete packaging pools and one provider per whole ingress/outlet. No same-side X deduction without the exact duplicate OTHER term; no omitted stock or double-counted mixed outlet partitions. | `lsta-working-lead-2018`; `jrc-ilcd-2010` |
| vr_calculation | collection and published amounts | Protocols collect raw undivided amounts. Conversion/attribution precedes the sole calc_once quotient; amounts and aggregation do not divide again. Enforce the al_residual applicability decision and hold before any affected unit result. Q=0 retains loads and cannot yield a unit result. Measurements, uncertainty and unsupported relationships remain visible rather than being marked pass. | `lsta-working-lead-2018`; `jrc-ilcd-2010` |
| vr_species | each actual waste and emission | Keep every actual whole waste and emitted species/medium atomic, with independent composition/state evidence. Do not infer two unknowns from one residual or use PM/COD/total-metal as molecular mass. Unknown actual additional streams block completion of that dataset until measured or bounded explicitly. | `lsta-working-lead-2018`; `jrc-ilcd-2010` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Attributional foreground inventory for original formation and first recycling-feed release of the defined new lead-sheet offcuts |
| downstream_use | secondary_dataset; background_dataset; explicit linked flow/process/lifecycle-model use |
| allowed_use | Only with compatible sheet form/composition, original manual route, first-release basis, actual receiver and compatible upstream chain |
| excluded_use | Full CPC leaf coverage; battery/slag/ash/sludge treatment; purchased-scrap repacking; refined-lead or roof service claim; default recycling credit |
| required_metadata | one traced new uncoated rolled-lead sheet lot to the documented BS EN 12588 supply specification; actual whole alloy composition and trace elements rather than assumed pure Pb; sheet dimensions and actual hand-cutting tool and layout; parent flashing-blank gate and inherited sheet burdens; solid offcut form and separation from reusable remnants batteries ash and sludge; actual oxide layers coatings free water and physical contamination subledgers; source segregation and actual necessary preparation; specified lead-recycling receiver and condition-specific acceptance; unique first-release identity and net whole Q excluding containers; opening and closing raw WIP and FG history with per-exchange vectors; all failures Q0 start stop idle cleanup and rework; attributed A separate from gross physical V; original Q_c and observed post-release service horizon H; actual site country electricity supply voltage and provider; separate complete pool and upstream ownership for every packaging component; every actual waste stream emitted species medium and destination |
| required_quality_disclosure | source-specific qualitative synthesis; no factory numeric ranges; full raw/attributed/physical ledger coverage; actual stock and receiver evidence; ordinary UUID/provider gaps; real unresolved core/terminal holds if present; science and translation review state |
| update_trigger | Change in sheet composition/coating/form, cutting route, actual receiver, acceptance conditions, upstream history, controls, utilities, packaging, site or study allocation context |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc3-2025` | `official_guidance` | United Nations Statistics Division. CPC Version 3.0 Structure (30 June 2025). https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv ; classification detail https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/39364 | 39364 classification context and distinction from 39320 residues, 39350 iron/steel remelting ingots, 39380 batteries and 41542 sheet; not a product-method approval |
| `calder-rolled-sheet` | `handbook` | Calder Lead. Rolled lead sheet. https://calderlead.co.uk/products-and-services/building/rolled-lead-sheet/ (publisher snapshot 2026-10-26) | Actual standard rolled construction-sheet form and BS EN 12588 supply specification; roofing/flashing function and distinct coated alternatives; no batch assay or numeric inventory adopted |
| `lsta-working-lead-2018` | `extension_guidance` | Lead Sheet Training Academy. Working with Rolled Lead Sheet in Construction (May 2018), PDF pp. 3-6 / printed pp. 4-11. https://leadsheet.co.uk/app/uploads/2018/05/LSTA-WWLIC-0518.pdf | Clean solid new-sheet context versus old corrosion/hot-work counterexamples; fitting offcuts and source segregation; suitable containers and recycling merchant handoff; actual cleaning/water/dust controls and records; historical legal numbers and recycling percentages not adopted |
| `monument-lead-tools-2018` | `handbook` | Monument Tools. Product Catalogue (2018), PDF p. 26 Roofing with adjacent pp. 25 and 27. https://monument-tools.com/wp-content/uploads/2018/01/Monument-Tools-Cataogue-2018.pdf | Whole hooked heat-treated sheet-lead knife with wooden handle as manual cutting-tool evidence; adjacent snips, soldering and slate tools are not substituted or mandatory inputs |
| `wbphillips-lead-reception` | `literature` | WB Phillips Metals. Scrap Lead Recycling. https://wbphillipsmetals.co.uk/scrap-metal/scrap-lead-recycling/ (publisher snapshot 2026-10-26) | Primary receiver evidence for clean roofing/flashing/sheet scrap, segregation, calibrated weighing and grading; actual acceptance agreement still required, no price/yield/legal approval inferred |
| `jrc-ilcd-2010` | `official_guidance` | European Commission JRC. ILCD Handbook: General guide for Life Cycle Assessment — Detailed guidance. First edition March 2010, section 7.9.2-7.9.3, printed pp. 255-268 / PDF pp. 275-288. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional cases requiring allocation: dedicated/virtual subdivision, embodiment versus losses, exchange-specific determining physical causality and remaining common-process gate/condition-specific market value; methodological collection/accounting synthesis, no industrial recipe or universal allocation fraction |
