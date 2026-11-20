---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.waste-and-scrap-of-copper
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Source-segregated new copper-tube cutting offcuts for copper recovery

## 1. Scope and Applicability

This PCR develops one specific product: solid tubular offcuts formed when an identified lot of new unalloyed, uncoated copper tube is measured and mechanically cut into useful tube lengths, separately collected, inspected, prepared as actually necessary, weighed and first released to an identified copper recycler's clean-tube feed specification. Purchased finished scrap that is only repacked does not fulfil this manufacturing scope. The selected route is dry hand-operated disc cutting and hand reaming, with actual auxiliary handling and supply transport recorded. A powered saw, wet cutting, chemical stripping, melting or granulation is a different route requiring added evidence and explicit exchanges before use. The offcuts retain tubular form; a wheel's displacement of metal is not a measured kerf loss. Reaming chips are a distinct stream.

The selected route is an author synthesis of Swagelok's measured cut-to-length and burr-removal operations, ReMA's clean-tubing trade distinction, and Midland Metals' clean-tube offcut reception. These independent technical/trade sources do not describe one factory or order and provide no inventory, yield or allocation factor. Actual source grade, route configuration, receiver agreement and quantities must be collected. `swagelok-tube-preparation`; `rema-specs-2026`; `midland-copper-reception`

Retain the actual source grade certificate and impurity analysis through useful lengths and offcuts. “Unalloyed” does not establish chemically pure Cu. No generic composition becomes a lot assay, yield or default conversion.

Midland's separate manufacturing-scrap page documents collection of manufacturing copper scrap, loose forms, metal cuttings and calibrated weighing with traceability records. Read it with the clean-tube acceptance on its Trades page; these are two pages from one receiver, not independent confirmations of one tube lot. Its container examples do not specify a steel drum for this product. A weigh ticket, payment or waste-transfer note alone does not establish the declared Product material-supply function; retain the actual source-to-receiver agreement and matching lot records. `midland-manufacturing-reception`; `midland-copper-reception`

Exclude copper-alloy, silver-copper, plated, tinned, insulated, solder-contaminated and clad feed; old installed pipe, cables, electronic waste, mixed-source scrap, powders, filings and chips as the reference product, slag/ash/dross, smelting or refining products, remelting ingots, and waste-treatment service references. Reusable useful-length tube remains tube stock, not automatically a scrap product. There is no default copper assay, moisture, density, yield, recycling fraction, historical zero burden or avoided-primary credit. The accepted narrower association covers these offcuts under CPC 3.0:39361. `un-cpc3-2025`

The full UNSD explanatory notes (30 June 2025), p.204, list 39361 without further inclusion/exclusion prose. Its neighbour classes distinguish nickel/aluminium/other-metal scrap and battery scrap (39380); p.203 separates metallic ashes/residues (39320), precious-metal and ferrous scrap. These are classification distinctions. The clean new-tube, hand-route and unpressed restrictions are this PCR's narrower methodological scope, not extra UNSD text. Useful copper tube and recovered refined metal remain outside this scrap reference. `un-cpc3-2025`

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.waste-and-scrap-of-copper |
| classification_refs | CPC 3.0:39361, accepted narrower association for the specified clean new copper-tube offcuts |
| covered_products | One source-segregated lot of clean solid unalloyed uncoated new-tube cutting offcuts first accepted to a specified copper-recovery feed requirement |
| excluded_products | Copper-alloy or coated scrap; old pipe; wire/cables; electronics; mixed-source feed; chips/powders; slag/ash; ingots; waste-treatment service |
| representative_product | Tubular residual end lengths from new copper tube cut-to-length preparation |
| production_route | Qualified whole new tube receipt -> measure/layout -> hand disc cutting and actual hand reaming -> segregate tubular residuals -> necessary manual foreign-object removal -> net weighing/identity checks -> first recycler-feed release -> original-cohort storage/packing/dispatch and actual receiver receipt |
| market_state | Solid tubular unrefined recovery feed; measured whole offcut mass; no fixed grade or assay claim |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply source-segregated new copper-tube cutting offcuts for an identified copper-recovery receiver |
| How much | 1 kg net whole accepted tubular offcuts at unique first quality release |
| How well | Verified source chemistry/form and clean unalloyed uncoated state satisfying the actual receiver feed agreement; no generic waste-treatment role |
| How long or cycle | One first-release cohort; later services retain original Q_c and actual observed service horizon H |
| reference_flow_link | released_offcuts |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Clean unalloyed uncoated new copper-tube cutting offcuts |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | new source tube lot and original upstream burden owner; actual grade and full alloy/impurity assay; uncoated untinned unsoldered state; tubular shape and dimensions; true disc-cut/ream configuration; useful-length tube and chip separation; actual receiver identity and clean-feed acceptance; lawful Product material supply role rather than Waste treatment; unique first-release id and tare-corrected whole net Q; measured moisture and assay bases; site and reporting period; each opening/closing raw/WIP/FG stock and inherited per-exchange vector; allocation context and true joint process; all failures/Q0/start-stop/idle/cleanup/rework; original Q_c and actual service H and gross dispatch/return history; actual country/voltage/supplier; each packaging pool and provider ownership; each actual waste species/destination and emission medium |

Every qualifier shall be present in the foreground package and the complete reference exchange description. A blank UUID is an identity gap, not a permission to use any copper flow. A broader native Product material identity with no conflicting restriction still requires independent evidence of this actual source, state, supply function and receiver, plus its exact Mass-to-kg chain. A generic name or classification alone neither establishes nor rules out compatibility; fixed chemistry, grade, shape, route, use and type constraints cannot be waived.

The reference product is one clean unpressed tubular new-copper offcut stream, not mixed scrap or a waste-treatment service. Select a compatible material-supply identity only after confirming its complete native restrictions, actual lot and receiver evidence, and Mass-to-kg chain. Preserve inherited tube/preparation burdens once; no recovered-cathode or virgin-Cu substitution.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | cp_release measures unique first-release whole net mass Q, excluding containers, detached foreign material and unreleased WIP. It is not contained-Cu mass or shipment mass. Closing released FG is already inside Q. |
| native_units | all inventory rows | actual extensive property | row-specific | Retain original units and reference state; convert g to kg or kWh to MJ once. Integrate genuine rates only. An already integrated gas/liquid volume is not multiplied by duration; volume-to-mass needs independent substance-specific density at its actual state. No guessed item mass, bulk density or water-density default. |
| species_balance | all inventory rows | whole mass and independent elemental/species accounts | kg | Whole tube/offcut mass and elemental Cu are separate non-additive ledgers. Assay is not another purchase. Do not fit two unknown moisture/metal losses to one balance residual or infer a named chemical emission from total PM/COD/VOC. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received identified new whole unalloyed uncoated copper tube, with actual upstream production and delivery history |
| starting_condition_role | foreground_starting_condition |
| product_classification_scope | Solid tubular new-copper cutting offcuts subset of CPC 3.0:39361 |
| recursive_input_rule | Already prepared purchased copper scrap cannot create new manufacturing Q. Internal remnants/returns carry their inherited vectors and cancel at matched gates. Released returns retain their original cohort and are never re-counted as production. |
| upstream_dataset_requirement | One compatible upstream owner for the whole supplied tube including actual mining/recovery/refining and tube forming; each whole supplied tool/container and each actual utility/transport provider |
| disclosure | Starting state and end gate; full source and receiver conditions; actual route; unique release; physical and burden accounts; all stock vectors; allocation; actual packaging/services; unknowns and source limitations |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| sb_chain | manufacturing and receiving chain | Include real whole-tube receipt, layout/cutting into useful lengths and tubular residuals, actual reaming, source segregation, manual removal of detached foreign material, weighing and first acceptance to the specified recovery-feed conditions. Include actual storage/packing/handling and delivery through documented receiver receipt as original-cohort services. No already-finished-scrap packing shortcut. | `swagelok-tube-preparation`; `midland-copper-reception` |
| sb_upstream | each supplied whole input | Inherit actual copper tube history once. Refining, alloy/grade preparation and forming already in the chosen upstream dataset are not new foreground steps. Assay/active ingredient/carrier-water subaccounts never repeat a whole purchase. A real onsite formulation instead needs separate purchased ingredients, mixing loads and losses. Match one provider per exchange; disclose boundary and recycling ownership. | `jrc-ilcd-2010` |
| sb_quality | first acceptance | Retain solid clean unalloyed uncoated tubular offcuts separately from wire, nodules, chips, brass, old pipe with fittings and residues. ReMA Candy supports a clean-tubing trade description, not a universal copper percentage or acceptance for a specific lot. Oils/fuels/hazardous substances violate the cited receiver conditions. Contaminated material needs another evidenced route and actual outputs. | `rema-specs-2026`; `midland-copper-reception` |
| sb_q | manufacturing and FG gates | Q is the whole net mass newly released once for the specified recycler feed. Closing released FG is already included in Q and cannot be added beside Q as another manufacturing output. Keep the FG physical gate: opening FG + first-release transfer + actual received returns = closing FG + gross dispatch + actual rejects/losses. Cancel first-release internal transfers in the consolidated gate. Delivery or re-inspection never creates another Q. | `jrc-ilcd-2010` |
| sb_history | each exchange and stock | Record each opening/closing raw stock, WIP, unused input and FG quantity with its inherited exchange-burden vector and allocation state. Complete numerator history includes all failed lots, Q0 periods, start/stop, idle, cleanup, sampling and real rework. Carry unfinished attributable vectors forward exactly once; do not subtract released closing FG manufacture from manufacturing burden. Retain unassigned uncertainty. | `jrc-ilcd-2010` |
| sb_service | postrelease cohort | Store actual duration H and original Q_c for storage/packing/handling/transport through receiver receipt. Services use original Q_c; H is an observation/allocation driver, never a production denominator. Actual returns retain original manufacture and only incremental service/rework burdens; internal cohort handovers cancel. Correct a voided release in the original ledger with an audit trail, never manufacture the same batch twice. | `jrc-ilcd-2010`; `midland-copper-reception` |
| sb_packages | every physical packaging article | For each article/material separately, opening empty + opening attached WIP + opening attached FG + opening reusable pool + external purchases P + first external nonpurchase receipts N + external return received ER = corresponding closing stocks C + packaging accompanying gross physical shipments S + external empty/other returns EO + packaging waste W. Keep ownership and provider history. Internal reuse cancels; it is not another purchase, product Q or automatic coproduct. If an exact shipment term X is already in same-side OTHER, remove X from that OTHER entry only; do not remove an independent leg or both sides. Include original tube packaging and later offcut packaging if actually present. P includes components acquired with a purchased whole consignment even without a separate invoice. N is the actual first inward borrowed, leased, entrusted or genuinely nonpurchase supplier-accompanied article, distinct from P and ER; ER requires the same article's documented prior outward movement. Record each actual receiving-side atomic material/form/type/direction, original measured quantity/unit and scope, receipt id/time/origin, ownership/custody, cohort, inherited vector and provider boundary. Unknown history remains unknown, not zero. Reuse the matching whole-steel-drum input card for disjoint P/N physical interfaces, retaining each recoverable raw leg separately; a different actual article/material requires its own atomic exchange. Physical ingress does not itself assign a procurement burden: inherit the actual owner vector and count manufacture, included delivery and actual incremental rental/return/repair services once, without duplicating whole articles and their components. | `jrc-ilcd-2010` |
| sb_complete | every actual route-dependent exchange | Every real additional supplied preparation, fuel, water stream, packaging component, maintenance item, waste and emitted species requires a separate atomic exchange/protocol before use. No other/zero bundle can hide it. The dry hand route does not prove zero auxiliary electricity or cleanup load. No boiler/steam/condensate is presumed; a real external return must keep its Product role, actual thermal state/enthalpy and supply agreement. | `swagelok-tube-preparation`; `jrc-ilcd-2010` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | New-tube cutting and segregated offcut preparation | required | Actual source lot and documented hand route | joint manufacture then dedicated offcut preparation | released_offcuts |
| cohort_service | Original-cohort service through receiver receipt | required | Actual activities from unique first release through actual receipt/returns | incremental services with original Q_c; no new production | original cohort Q_c |

Inventory quantities are already expressed per 1 kg reference flow. Section 8 alone calculates the quotient; cards and protocol aggregation consume that same result without another division. Raw collection is never pre-normalized. Whole physical V, attributed A and incremental service B retain distinct tags. All descriptions below are binding context. Actual absent conditional exchanges need a documented absence record; missing measurement is not absence.

### Process: New-tube cutting and offcut preparation (`manufacture`)

#### Inputs

##### Product flows

###### Whole new source tube (`source_tube`)

One identified whole new unalloyed uncoated copper tube lot, with actual dimensions, temper, grade, impurity analysis and upstream burden owner. It cannot represent rod, sheet, alloy scrap or a waste-treatment input. Weigh the whole input once; keep gross physical V, attributed A and analytical Cu separate.

- Selected flow: New unalloyed uncoated copper tube
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the already calculated single-quotient result for this exchange from section 8; retain raw records under cp_tube.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_tube`
- Sources: `swagelok-tube-preparation`; `jrc-ilcd-2010`

###### Auxiliary handling and premises electricity (`electricity_m`)

Conditional on actual low-voltage alternating-current electricity consumed by handling or premises. Declare country, voltage, grid mix or specific tariff and the actual user-side delivery gate; generation or high-voltage supply is not interchangeable. Energy is recorded in MJ, not mass or a literal fuel purchase; verify the selected flow's actual property compatibility before binding its UUID. Record meter/duty/voltage/country and supplier compatibility; kWh to MJ once. Hand cutting does not establish zero site/handling/idle/cleanup load. A different real supply needs a separately verified identity.

- Selected flow: Low-voltage alternating-current electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the already calculated single-quotient result for this exchange from section 8; retain raw records under cp_energy_m.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_m`
- Sources: `jrc-ilcd-2010`

###### Steel disc-cutter replacement wheel (`cutter_wheel`)

One supplied steel cutter wheel only where supplier composition and actual dry hand-tool configuration confirm it. Keep original acquisition/remaining-use history and observed wear, not an assumed mass per cut or default lifetime. A carbide wheel or complete mixed-material tool needs its own correct whole identity and separate accounting; no pure-steel substitution.

- Selected flow: Steel tube-cutter wheel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the already calculated single-quotient result for this exchange from section 8; retain raw records under cp_tools.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_tools`
- Sources: `swagelok-tube-preparation`; `jrc-ilcd-2010`

###### Steel hand reamer (`reamer`)

One actual supplied steel hand reamer if confirmed; record stock, measured renewal and duty history. It serves useful-tube end preparation; dedicated allocation must follow the actual function rather than automatically charging scrap mass. A composite tool is one whole supplied article and requires its actual identity, not imagined separate purchases.

- Selected flow: Steel tube-end hand reamer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the already calculated single-quotient result for this exchange from section 8; retain raw records under cp_tools.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_tools`
- Sources: `swagelok-tube-preparation`; `jrc-ilcd-2010`

###### Manufacturing steel collection drum (`drum_m`)

Conditional on one actual separately identified reusable steel drum. Determine whole supplied composition and measured article mass; no generic CTUe or resin binding and no assumed kg/item. Manufacturing and service acquisitions are disjoint external receipts in the same identified pool. Existing stock/returns carry history, internal reuse is not another purchase. Record every pool leg under sb_packages, actual ownership and one upstream provider. No default packaging design is supplied.

- Selected flow: Reusable steel drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the already calculated single-quotient result for this exchange from section 8; retain raw records under cp_pack_m.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_m`
- Sources: `midland-copper-reception`; `jrc-ilcd-2010`

#### Outputs

##### Product flows

###### First released tubular offcuts (`released_offcuts`)

One whole solid unpressed tubular residual stream from the identified new-tube hand-cutting lot, clean, unalloyed, uncoated, untinned, unsoldered and free of foreign fittings, oil, fuel and hazardous contamination under the actual receiver agreement. First material-feed release is recorded once in whole net kg, excluding drums, chips, detached contaminants and unreleased WIP. All reference qualifiers apply. Keep actual source grade and impurity assay; do not substitute pure Cu, cathode, mixed scrap or a treatment service.

- Selected flow: Clean unalloyed uncoated new copper-tube cutting offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release`
- Sources: `rema-specs-2026`; `midland-copper-reception`; `jrc-ilcd-2010`

###### Joint useful cut tube lengths (`useful_tube`)

Useful conforming tube lengths from the same source and route, not a second scrap stream. Keep actual unalloyed uncoated grade, shape and temper as for source_tube. Weigh physical useful output independently; an allocated burden share is not physical mass. Reusable remnants remain source/WIP stock rather than scrap Q.

- Selected flow: New unalloyed uncoated copper tube
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the once-calculated physical-audit result v_i from section 8 for this exchange; no additional model provider or automatic credit. Retain raw records under cp_tube.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_tube`
- Sources: `swagelok-tube-preparation`; `jrc-ilcd-2010`

##### Waste flows

###### Distinct reaming chips (`copper_chips`)

Actual collected reaming chips only; weigh and characterise whole chips with their true contamination and destination. They are not tubular first-release output and are not inferred wheel kerf. Recovered chips and uncaptured elemental copper are disjoint quantities. No matching native Waste identity has been adopted.

- Selected flow: Unalloyed copper reaming chips
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the once-calculated physical-audit result v_i from section 8 for this exchange; no additional model provider or automatic credit. Retain raw records under cp_waste.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `swagelok-tube-preparation`

###### Unaccepted copper tube residuals (`rejected_tube_m`)

Actual rejected tubular pieces in one source/contamination state and one documented destination. Characterise coatings/foreign material if present and use an appropriately different atomic identity when the state differs. A returned accepted lot is a cohort movement, not automatically waste or new production. Retain actual original burden and incremental handling/rework with no automatic recovery credit.

- Selected flow: Rejected unalloyed copper tube offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the once-calculated physical-audit result v_i from section 8 for this exchange; no additional model provider or automatic credit. Retain raw records under cp_waste.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `midland-copper-reception`; `jrc-ilcd-2010`

###### Discarded steel cutter wheel (`worn_wheel`)

Conditional actual disposal of this one steel article, separately weighed with composition and destination. Reconcile its opening/closing tool stock, renewal and measured wear. Detached copper contamination is a subaccount only; a composite or differently contaminated article requires the correct whole Waste identity. No default disposal fraction or recycling credit.

- Selected flow: Worn steel tube-cutter wheel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the once-calculated physical-audit result v_i from section 8 for this exchange; no additional model provider or automatic credit. Retain raw records under cp_tools.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_tools`
- Sources: `jrc-ilcd-2010`

###### Discarded steel reamer (`worn_reamer`)

Conditional actual disposal of this one steel article, separately weighed with composition and destination. Reconcile its opening/closing tool stock, renewal and measured wear. Detached copper contamination is a subaccount only; a composite or differently contaminated article requires the correct whole Waste identity. No default disposal fraction or recycling credit.

- Selected flow: Worn steel tube-end reamer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the once-calculated physical-audit result v_i from section 8 for this exchange; no additional model provider or automatic credit. Retain raw records under cp_tools.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_tools`
- Sources: `jrc-ilcd-2010`

###### Manufacturing drum disposal (`drum_waste_m`)

Actual whole steel drum discarded from this identified pool, with actual remaining contamination and destination; no use of the reusable Product identity as a Waste binding. Link W to sb_packages, preserving acquisition history and one provider owner. External empty return is EO, not W. No guessed tare or default lifetime.

- Selected flow: Discarded steel drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the once-calculated physical-audit result v_i from section 8 for this exchange; no additional model provider or automatic credit. Retain raw records under cp_pack_m.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_m`
- Sources: `jrc-ilcd-2010`

##### Elementary flows

###### Actual metallic copper emission to air (`copper_air`)

Conditional only on independently identified and measured uncaptured metallic Cu entering the actual air compartment. Record sampling method, particle/species/medium identity and captured-versus-emitted partition. Total PM is not automatically metallic Cu or copper oxide. Collected reaming chips are Waste, not an elementary air emission. An unmeasured loss remains unknown, not zero.

- Selected flow: Metallic copper to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the once-calculated physical-audit result v_i from section 8 for this exchange; no additional model provider or automatic credit. Retain raw records under cp_air.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `jrc-ilcd-2010`

### Process: Original-cohort service through receiver receipt (`cohort_service`)

#### Inputs

##### Product flows

###### Original-cohort storage and dispatch electricity (`electricity_s`)

Conditional on actual low-voltage alternating-current electricity consumed by handling or premises. Declare country, voltage, grid mix or specific tariff and the actual user-side delivery gate; generation or high-voltage supply is not interchangeable. Energy is recorded in MJ, not mass or a literal fuel purchase; verify the selected flow's actual property compatibility before binding its UUID. Record meter/duty/voltage/country and supplier compatibility; kWh to MJ once. Hand cutting does not establish zero site/handling/idle/cleanup load. A different real supply needs a separately verified identity.

- Selected flow: Low-voltage alternating-current electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the already calculated single-quotient result for this exchange from section 8; retain raw records under cp_energy_s.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_s`
- Sources: `jrc-ilcd-2010`

###### Incremental original-cohort steel shipping drum (`drum_s`)

Conditional on one actual separately identified reusable steel drum. Determine whole supplied composition and measured article mass; no generic CTUe or resin binding and no assumed kg/item. Manufacturing and service acquisitions are disjoint external receipts in the same identified pool. Existing stock/returns carry history, internal reuse is not another purchase. Record every pool leg under sb_packages, actual ownership and one upstream provider. No default packaging design is supplied.

- Selected flow: Reusable steel drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the already calculated single-quotient result for this exchange from section 8; retain raw records under cp_pack_s.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_s`
- Sources: `midland-copper-reception`; `jrc-ilcd-2010`

###### Actual road delivery through receiver receipt (`road_freight`)

Actual purchased road-freight service for the original released cohort through documented recycler receipt, including actual return movements when present. Record vehicle/load/distance, gross payload including packaging, loading constraint and one provider. Do not add truck manufacture, fuel or emissions again where already inside this provider. If own-fleet operation is modelled, replace this service by its evidenced atomic fuel/electricity and every actual species before use.

- Selected flow: Road freight transport service
- Flow property / unit: Transport service / t*km
- Amount rule: Use the already calculated single-quotient result for this exchange from section 8; retain raw records under cp_freight.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freight`
- Sources: `midland-copper-reception`; `jrc-ilcd-2010`

###### Actual external returned drum received (`drum_return_received`)

Conditional actual movement of the same individually identified whole reusable steel drum under sb_packages. Preserve measured whole article mass, composition, ownership and original acquisition vector. This is a physical-audit movement with no new procurement provider, new manufacturing Q, purchase burden or coproduct credit. ER is external return received, S accompanies gross physical dispatch including subsequently returned shipments, and EO is external empty return; do not net these independent legs. Internal reuse does not cross the external gate.

- Selected flow: Reusable steel drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the already calculated single-quotient result for this exchange from section 8; retain raw records under cp_pack_s.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_s`
- Sources: `jrc-ilcd-2010`

#### Outputs

##### Product flows

###### Drum accompanying gross physical dispatch (`drum_dispatch`)

Conditional actual movement of the same individually identified whole reusable steel drum under sb_packages. Preserve measured whole article mass, composition, ownership and original acquisition vector. This is a physical-audit movement with no new procurement provider, new manufacturing Q, purchase burden or coproduct credit. ER is external return received, S accompanies gross physical dispatch including subsequently returned shipments, and EO is external empty return; do not net these independent legs. Internal reuse does not cross the external gate.

- Selected flow: Reusable steel drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the once-calculated physical-audit result v_i from section 8 for this exchange; no additional model provider or automatic credit. Retain raw records under cp_pack_s.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_s`
- Sources: `jrc-ilcd-2010`

###### Actual external empty drum return (`drum_return_sent`)

Conditional actual movement of the same individually identified whole reusable steel drum under sb_packages. Preserve measured whole article mass, composition, ownership and original acquisition vector. This is a physical-audit movement with no new procurement provider, new manufacturing Q, purchase burden or coproduct credit. ER is external return received, S accompanies gross physical dispatch including subsequently returned shipments, and EO is external empty return; do not net these independent legs. Internal reuse does not cross the external gate.

- Selected flow: Reusable steel drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the once-calculated physical-audit result v_i from section 8 for this exchange; no additional model provider or automatic credit. Retain raw records under cp_pack_s.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_s`
- Sources: `jrc-ilcd-2010`

##### Waste flows

###### Actual original-cohort copper tube rejection (`rejected_tube_s`)

Actual rejected tubular pieces in one source/contamination state and one documented destination. Characterise coatings/foreign material if present and use an appropriately different atomic identity when the state differs. A returned accepted lot is a cohort movement, not automatically waste or new production. Retain actual original burden and incremental handling/rework with no automatic recovery credit.

- Selected flow: Rejected unalloyed copper tube offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the once-calculated physical-audit result v_i from section 8 for this exchange; no additional model provider or automatic credit. Retain raw records under cp_service.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `midland-copper-reception`; `jrc-ilcd-2010`

###### Original-cohort drum disposal (`drum_waste_s`)

Actual whole steel drum discarded from this identified pool, with actual remaining contamination and destination; no use of the reusable Product identity as a Waste binding. Link W to sb_packages, preserving acquisition history and one provider owner. External empty return is EO, not W. No guessed tare or default lifetime.

- Selected flow: Discarded steel drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the once-calculated physical-audit result v_i from section 8 for this exchange; no additional model provider or automatic credit. Retain raw records under cp_pack_s.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_s`
- Sources: `jrc-ilcd-2010`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| al_context | method context | Use this method only within an explicitly attributional study requiring allocation. Document study context and the actual recycling chain/ownership. Industrial tube/receiver publications supply no LCA allocation factors. Consequential substitution requires a separately justified method. | `jrc-ilcd-2010` |
| al_subdivide | each joint exchange | First isolate dedicated work, meters and material records by real or virtual subdivision. Assign each embodied part of the whole tube and dedicated scrap preparation to its actual function. Keep the useful-length tube gate and scrap gate separate. Cutting geometry needed by useful tube does not automatically imply that all cutting energy follows scrap mass. | `jrc-ilcd-2010` |
| al_causality | remaining shared exchanges | For each remaining exchange identify and test its determining physical causality. Material embodiment, cutting duty, handling time and occupied space can govern different exchanges; none is a universal allocation key. Preserve source-specific coefficients and justification, with the sum of attributed burdens equal to the original total. | `jrc-ilcd-2010` |
| al_residual | genuinely unresolved shared burden | Only after subdivision and exchange-specific determining physical causality leave a remainder may actual contemporaneous market values at the same process gate, physical state and period allocate that remainder. Reverse downstream transport/preparation/packaging differences to reconstruct that gate. Keep unknown values unresolved; no fixed share, free choice of physical/economic methods or use of retail/refined-metal prices for raw offcuts. | `jrc-ilcd-2010` |
| al_recycling | tube history and next recovery system | Identify the true joint process and actual inherited burden, value sign and change in inherent properties consistently with ILCD 7.9.3 VI and the selected study method. Do not treat material embodiment alone as allocation of every loss or processing load. Positive/negative waste value and finite recycling cycles need evidence; no universal cutoff, recycling fraction or avoided-primary credit. Missing chain history stays a declared unresolved contribution, not zero. No duplicate upstream provider or automatic credit at a waste outlet. | `jrc-ilcd-2010` |
| al_accounts | physical and attributed quantities | Preserve gross physical V_i for balances and attributed burden A_i as separate tags. Joint useful tubes, offcuts and waste are physical outputs with nonoverlapping quantities; origin partitions of one mixed outlet are subaccounts, not another whole outlet/provider. Do not use attributed fractions as measured physical weights. | `jrc-ilcd-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

Raw fields and methods collect only undivided measurements/records. The aggregation column declares the final reporting basis and consumes the sole section 8 quotient; it is not an instruction to divide raw collection first. Shared meters and stock corrections require disjoint attribution.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_tube | manufacture | source tube and useful joint tubes | lot weigh/stock and supplier records | lot; chemistry and assay basis; grade; coating; tube dimensions; temper; supplier; whole receipt; opening and closing raw/WIP; issued mass; useful output; reusable remnants; each inherited exchange vector; uncertainty | Weigh whole source lots and useful tube lengths on calibrated scales; reconcile layout and measured residuals with paired internal transfers and stock. Keep raw quantities undivided and Cu assays as nonadditive subaccounts. Preserve provider history; repeated references to one upstream tube dataset do not add a second provider. | kg | each receipt/cutting lot and period close | entire lot plus opening/closing history including failed periods | same declared source and cutting site | per reference flow | certificates; calibrated weighing; stock bridge; supplier boundary; raw-to-useful/offcut layout |
| cp_release | manufacture | unique first accepted tubular offcuts | calibrated net weight and first-release agreement | lot; unique first-release id and timestamp; gross and tare; net whole mass Q; actual moisture and dry assay basis; solid tubular form; grade and impurities; coating/contamination inspection; receiver criteria and agreement; released closing FG | Weigh each first-accepted lot with calibrated gross/tare or direct net weighing. Check source chemistry and actual recycler specification. Sum net newly accepted mass once; keep rejected/unreleased stock separate. Preserve actual measured basis without assuming dry purity. Store undivided Q; closing released FG is already included. | kg | each unique release and reporting close | all release events including Q0 and rejected lots | source and specified receiver-feed interface | per reference flow | release signatures; scale calibration; photos/assays; real receiver requirements; duplicate-id audit |
| cp_energy_m | manufacture | electricity by actual duty | meter and supplier record | meter ids; opening/closing readings; original kWh or integrated MJ; rate timestamps if actual power rate; duty; country; voltage; supply mix; failed/start-stop/idle/cleanup/rework load; original cohort id; allocation | Read actual duty and facility meters; reconcile nonoverlapping duties without adding the facility total again. Convert kWh to MJ once, integrate genuine power rates only. Retain raw undivided load; check native country, voltage and consumption supply against the real provider. Assign original-cohort services separately. | MJ | each duty and reporting period | full same manufacturing period or actual cohort service H | actual meters and country/voltage boundary | per reference flow | calibration; bills; duty bridge; actual provider and allocation records |
| cp_energy_s | cohort_service | electricity by actual duty | meter and supplier record | meter ids; opening/closing readings; original kWh or integrated MJ; rate timestamps if actual power rate; duty; country; voltage; supply mix; failed/start-stop/idle/cleanup/rework load; original cohort id; allocation | Read actual duty and facility meters; reconcile nonoverlapping duties without adding the facility total again. Convert kWh to MJ once, integrate genuine power rates only. Retain raw undivided load; check native country, voltage and consumption supply against the real provider. Assign original-cohort services separately. | MJ | each duty and reporting period | full same manufacturing period or actual cohort service H | actual meters and country/voltage boundary | per reference flow | calibration; bills; duty bridge; actual provider and allocation records |
| cp_tools | manufacture | steel wheels reamers and their actual waste | supplier and stock/wear/disposal record | specific article; whole composition; measured article mass; opening/closing tools; acquisitions; external returns; measured wear; remaining-use history; disposal mass and contamination; duty; destination | Record each steel tool separately using actual whole article identity and measured mass. Keep supply once and stock/use/waste histories; no fixed lifetime or guessed kg/item. Reconcile detached material and actual destination; an unresolved identity never permits grouping unlike tools. Retain raw undivided records. | kg | each acquisition/renewal/disposal and period close | full tool history serving the cohort | actual tool and cutting site | per reference flow | supplier composition; article weighing; issue/return/wear logs; waste ticket |
| cp_pack_m | manufacture | one steel drum pool and waste | whole article supplier and disjoint physical-receipt packaging ledger | article/material; measured whole mass; owner/provider; opening empty/WIP/FG/reusable; external purchase P; first external nonpurchase receipt N; external return received ER; corresponding closing C; shipment-attached S on gross movements; external return EO; waste W; internal reuse; exact OTHER duplicate X; original cohort; each receiving-side material/form/type/direction; original quantity/unit and conversion scope; receipt id/time/origin; custody; inherited vector; ER prior outward article id/event; supplier-included scope; actual rental/return/repair loads | Measure gross/tare or weigh actual articles, preserving whole supplied composition and real owner. Keep each pool and material separate under sb_packages; manufacturing/service receipts are disjoint. Internal reuse cancels. Keep all raw undivided legs and inherited vectors; no new purchase burden on mere return or movement. Record measured wear/retirement and actual empty-return transport. Separately recover each actual P/N/ER inward leg on the matching steel-drum input interface: bundled purchased components remain P without separate invoices; first borrowed/leased/entrusted/genuinely nonpurchase accompanied articles are N, never fabricated ER or opening stock. ER must match the same article's prior outward record. Physical receipts and procurement/burden ownership are separate accounts; carry real vectors and one provider scope including actual incremental services, with unknown history retained rather than zero. Do not manufacture a whole container and its already-included components twice. | kg | each receipt/packing/shipment/return/disposal and stock close | complete pool including attached and reusable opening/closing stocks | same article pool and actual supplier/receiver network | per reference flow | article measurements; invoices; pool bridge; dispatch and return tickets; waste record; provider ownership; first-receipt/custody agreement; prior-outward linkage; inherited-vector and service-scope evidence |
| cp_pack_s | cohort_service | one steel drum pool and waste | whole article supplier and disjoint physical-receipt packaging ledger | article/material; measured whole mass; owner/provider; opening empty/WIP/FG/reusable; external purchase P; first external nonpurchase receipt N; external return received ER; corresponding closing C; shipment-attached S on gross movements; external return EO; waste W; internal reuse; exact OTHER duplicate X; original cohort; each receiving-side material/form/type/direction; original quantity/unit and conversion scope; receipt id/time/origin; custody; inherited vector; ER prior outward article id/event; supplier-included scope; actual rental/return/repair loads | Measure gross/tare or weigh actual articles, preserving whole supplied composition and real owner. Keep each pool and material separate under sb_packages; manufacturing/service receipts are disjoint. Internal reuse cancels. Keep all raw undivided legs and inherited vectors; no new purchase burden on mere return or movement. Record measured wear/retirement and actual empty-return transport. Separately recover each actual P/N/ER inward leg on the matching steel-drum input interface: bundled purchased components remain P without separate invoices; first borrowed/leased/entrusted/genuinely nonpurchase accompanied articles are N, never fabricated ER or opening stock. ER must match the same article's prior outward record. Physical receipts and procurement/burden ownership are separate accounts; carry real vectors and one provider scope including actual incremental services, with unknown history retained rather than zero. Do not manufacture a whole container and its already-included components twice. | kg | each receipt/packing/shipment/return/disposal and stock close | complete pool including attached and reusable opening/closing stocks | same article pool and actual supplier/receiver network | per reference flow | article measurements; invoices; pool bridge; dispatch and return tickets; waste record; provider ownership; first-receipt/custody agreement; prior-outward linkage; inherited-vector and service-scope evidence |
| cp_waste | manufacture | distinct copper chips and rejected tubular pieces | segregated weigh and destination records | one stream identity; source lot; species and contamination; wet/dry basis; separately weighed quantity; opening/closing waste/WIP; measured whole and Cu; treatment destination; actual owner | Weigh each real stream independently before transfer. Preserve chips versus tube shape and actual contamination. Non-valued losses still retain their burdens; no inferred recovery credit or mass-balance-fitted species. Keep collected chips separate from airborne loss and keep raw undivided quantities. | kg | each event and period close | all normal/failed/cleanup events and stock carryover | actual source and treatment transfer gate | per reference flow | calibrated tickets; sample analysis; transfer documents; destination and stock bridge |
| cp_air | manufacture | actual metallic Cu to air | species-resolved emission measurement | source and medium; sampled metallic Cu species and particle class; actual air state; measured mass or concentration and independently measured volume/rate; timestamps; capture fraction independently observed; uncertainty | Use independent species/particle evidence and measured uncaptured mass for the actual air compartment. Convert original units and integrate genuine rates once; integrated volume is not multiplied by duration. Do not infer Cu from total PM, copper oxide or one balance residual. Retain unknown loss explicitly; no fabricated zero. Store raw undivided emission. | kg | each representative actual emission duty/event | full matched period including failed/cleanup duties | actual emission outlet and receiving air medium | per reference flow | sampling QA; species identification; flow/state calibration; capture/emission partition |
| cp_service | cohort_service | postrelease history and actual reject stream | cohort FG movement and incremental service record | original release id; original Q_c; observed H; opening/closing FG vectors; gross shipment; receiver receipt; returns; reverse original delivery link; rejected copper tube mass/state; actual incremental rework/handling; all actual new flows | Reconcile opening FG plus first-release transfer and returns with closing FG, gross dispatch and actual rejects/loss. Preserve original manufacture and service history; reverse original shipment as a movement, then assign only real additional loads. Do not create a second Q by receiving/releasing the same lot. H controls observed duty only. Keep raw undivided quantities and all unresolved contributions. | kg | each movement/service/rejection and stock close | original cohort to actual receipt/returns and measured H | real source warehouse, carrier and specified receiver | per reference flow | release/dispatch/receiver tickets; return/rework linkage; stock history; incremental meters |
| cp_freight | cohort_service | one purchased road-freight service | carrier activity and consignment record | original cohort; carrier; actual road vehicle and load; route and distance; gross product-plus-packaging payload; actual returns; load limiting factor; supplier boundary; t*km | Use actual gross payload mass and distance once and record the original mass and km separately; retain loading/empty-return allocation. Keep raw undivided service with one provider. No double counting a provider-inclusive truck, fuel or emission; own-fleet operation needs explicit replacement exchanges. | t*km | each journey | all actual cohort delivery and return journeys | actual source-to-receiver road route | per reference flow | weighbridge and consignment; route/distance evidence; carrier model boundary; loading allocation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_numerator | all inventory rows | Convert raw records to each actual extensive unit before exchange-specific attribution. For exchange i/cohort c form A_i_c from current attributable manufacture plus inherited opening WIP/unused input vector minus closing unfinished/unused unassigned vector, with disjoint stock corrections once. Do not subtract already-released FG manufacture. Keep all failed/Q0/start-stop/idle/cleanup/rework load. B_i_c is separate actual postrelease service, with original Q_c; V_i is independent gross physical amount. | cp_tube; cp_energy_m; cp_tools; cp_pack_m; cp_waste; cp_air; cp_service; cp_energy_s; cp_pack_s; cp_freight | A_i_c; B_i_c; V_i | `jrc-ilcd-2010` |
| calc_gates | all physical gates | Raw store: opening + external receipts = closing + issue + actual losses. Manufacture: opening WIP + issued whole tube and actual other physical inputs = closing WIP + first-released Q + joint useful tube + distinct chips/rejects and other actual physical outputs/transformations. Q already includes released closing FG. FG: opening FG + first-release transfer + actual returns = closing FG + gross dispatch + actual rejects/loss. Consolidation cancels matched internal transfers; do not add origins to a whole mixed outlet. Independently reconcile Cu/other elements and identified species; packaging pools follow sb_packages. | cp_tube; cp_release; cp_waste; cp_air; cp_tools; cp_service; cp_pack_m; cp_pack_s | physical and elemental residuals; V_i | `swagelok-tube-preparation`; `jrc-ilcd-2010` |
| calc_single_quotient | all inventory rows | For Q>0 execute x_i = A_i / Q once for the attributed manufacturing account and v_i = V_i / Q once for the separate physical-audit account. Actual original-cohort service uses s_i_c = B_i_c / Q_c once, with original Q_c>0. These are parallel tagged views, never sequential divisions or two upstream providers. Cards/aggregation only consume the respective result. Reference product is 1 kg; other physical outputs are audit quantities, not additional credits or a second allocation of already-attributed x_i. With Q=0 retain all real loads and inherited vectors without a unit result. | A_i_c; B_i_c; V_i; cp_release; cp_service | x_i; v_i; s_i_c | `jrc-ilcd-2010` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_source | tube and receiver | Verify actual new unalloyed uncoated tube lot and sole receiver feed requirement; retain contrary product states and uncertainties. No same-factory claim from technical synthesis. | supplier chemistry/form; receiver agreement; independent primary context |
| dq_units | each atomic exchange | Keep original unit, measured basis/state and exact native property/unit chain; no default density, purity, yield or item mass. | calibrated raw records; exact property/unit references |
| dq_history | all loads and stocks | Retain each inherited exchange vector and all failed/Q0/start-stop/idle/cleanup/rework loads; no missing stock or history replaced by zero. | raw/WIP/FG bridges; original release and period; incremental service history |
| dq_allocation | each shared exchange | Record subdivision, determining causality and only genuine residual common-gate market values; document actual true joint/recycling history and unresolved terms. | attribution matrix; common gate/state/period; inventory conservation |
| dq_completeness | source projection and bilingual rules | Audit every table cell and card field, complete descriptions/qualifiers/ancestors, calculation inputs/outputs and all four source fields; distinguish schema/finite checks from science and translation approval. | full raw-to-typed comparison; current source/content hashes; bilingual review |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| val_identity | reference and all native bindings | Require complete source/route/form/chemistry/grade/coating/contamination/type/geography/property compatibility. Recheck all formal name fields, synonyms and comments, not a classification label alone. A broader Product material identity requires independent actual source/state/function/receiver evidence and an exact property/unit-group/real-unit chain; a generic material placeholder is insufficient. Do not waive fixed CAS, chemistry, grade, shape, route, use or type restrictions. A candidate with conflicting type, pressed form, hydrometallurgical route or fixed assay cannot identify this unpressed material feed. Unresolved core output identity prevents treating the method as complete. | `rema-specs-2026`; `midland-copper-reception`; `midland-manufacturing-reception` |
| val_q | all first-release cohorts | Check unique Q against first release and whole net weighing. Do not add closing released FG to Q, re-count dispatch/reinspection or make H a production denominator. Keep all failed/Q0 burdens without a unit result. Reconcile manufacturing, FG and consolidated physical gates. | `jrc-ilcd-2010` |
| val_once | inventory and collection | Verify original extensive units/reference states and attribution before the sole section 8 quotient. Collection stores raw undivided records; cards and aggregation consume the same result once. Separate burden quantities from physical audit quantities and services from production. | `jrc-ilcd-2010` |
| val_balance | whole mass elements and species | Reconcile full tube mass, useful tubes, tubular offcuts, chips, all losses and WIP independently of Cu/other-element balances; packaging is separate. Actual species/phase/free water/chemical transformation require independent evidence. Do not invent evaporation, oxygen, reaction water, copper density or a loss amount to close a residual. | `swagelok-tube-preparation`; `jrc-ilcd-2010` |
| val_packs | each packaging material and pool | Check every opening empty/WIP/FG/reusable term and P/N/ER/C/S/EO/W against gross physical movement, return records and one upstream owner. Internal reuse cancels and X only removes an exact same-side OTHER duplicate. Acquiring a returned article does not create new manufacturing purchase burdens. Verify separately measured first nonpurchase receiving interfaces, original units/scope, receipt id/time/origin, material/form/type/direction, ownership/custody/cohort and inherited vectors; ER requires the same article's prior outward record. Bundled purchased components remain P. Unknown history is not zero; no receipt creates Q, automatic credit or duplicate whole/component/provider burdens. | `jrc-ilcd-2010` |
| val_completeness | actual route and all fields | Every flow is atomic; actual additional substances/materials/energy/wastes need explicit cards. Check both languages for all qualifiers, complete descriptions, raw fields, formula inputs/outputs, source fields and rule context. Missing measurements/provider confirmation remain unknown, not pass or zero. Mechanical finite/schema checks establish neither scientific review nor translation approval. | `jrc-ilcd-2010` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Qualified source-segregated new-tube offcut supply to the specified copper-recovery interface, with original-cohort services and inherited history |
| allowed_use | Declared matching attributional source/route/form/acceptance state and compatible provider boundaries |
| excluded_use | Whole CPC coverage; alloy/old pipe/cable/slag/ingot equivalence; waste-treatment service; recycled-copper ingot or cathode substitution; invented recovery credit |
| required_metadata | All reference qualifiers; raw lot/stock/meter/transport/receiver records; every native restriction; source edition/context; unique gate and allocation history |
| required_quality_disclosure | Measured and unknown quantities separated; whole/elemental/species accounts; all failed/Q0 and stock burdens; provider/recycling uncertainty; no scientific or translation approval implied |
| update_trigger | Different feed source/grade/coating/shape; powered/wet/chemical/thermal route; receiver requirement or supply role change; new native identity/property or provider; changed recycling ownership/history |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD CPC Version 3.0 Explanatory Notes, 30 June 2025, pp.203–204, 393/3936/39361 and neighbouring categories; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification scope only; no manufacturing, acceptance or mapping approval |
| swagelok-tube-preparation | extension_guidance | Southern Alberta Fluid System Technologies / Swagelok, Best Practice: Tube End Preparation, undated publisher page; https://safst.swagelok.com/en/resources/weekly-column/tube-preparation | Wheel displacement versus sawing, measuring/cutting and distinct reaming burrs; qualitative mechanism only, no kerf/yield factor |
| rema-specs-2026 | standard | ReMA ISRI Specifications, January 2026, Red Metals printed pp.4–5 / PDF pp.8–9, Candy with adjacent Cliff/Berry/Clove/Drove; https://www.isrispecs.org/wp-content/uploads/2026/01/2026-January-ReMA_ISRI_Specifications.pdf | Clean unalloyed uncoated tube-feed trade distinction; wire/nodules/alloy/residue counterexamples; buyer agreement; no copied purity number |
| midland-copper-reception | extension_guidance | Midland Metals Limited, Trades, publisher page; https://midlandmetalsrecycling.co.uk/trades/ | Receiver accepts clean copper-tube lengths/offcuts; distinguishes used pipe with fittings and brass; weigh ticket and oil/fuel/hazard exclusions; no same-order acceptance proof |
| midland-manufacturing-reception | extension_guidance | Midland Metals Limited, Manufacturing Scrap, undated publisher page; https://midlandmetalsrecycling.co.uk/manufacturing-scrap-2/ | Manufacturing copper scrap, loose forms/metal cuttings and calibrated weighing/traceability; same receiver as Trades, not independent lot confirmation; no tube-specific drum, composition, supply-role approval or inventory factor |
| jrc-ilcd-2010 | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA – Detailed guidance, first edition March 2010, §§7.9.2–7.9.3 printed pp.255–272 / PDF pp.275–292, including VI recycling limitations; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional subdivision, exchange-specific determining causality, residual common-gate values, recycling history and inventory conservation; no industrial quantities or automatic credit |
