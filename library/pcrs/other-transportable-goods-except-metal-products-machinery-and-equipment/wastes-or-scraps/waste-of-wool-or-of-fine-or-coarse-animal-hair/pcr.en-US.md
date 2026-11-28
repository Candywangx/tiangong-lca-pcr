---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.waste-of-wool-or-of-fine-or-coarse-animal-hair
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Undyed sheep-wool yarn clearing cuts for recovery

## 1. Scope and Applicability

This PCR specifies one physical supply: undyed sheep-wool hard yarn cuts removed by automatic winding/clearing and segregated for an authorised receiver's material recovery. The foreground receives already spun, steam-relaxed, unwaxed 100% sheep-wool singles on spinning bobbins; it includes the complete source winding/clearing operation that creates the cuts, joint separation from saleable wound yarn, dedicated cut collection/sorting and first quality release. Actual post-release packing, storage, handling, returns and dispatch are retained in a separate cohort service ledger. It is not a purchased-waste repacking shortcut.

The route is a transparent technical synthesis: Woolmark's 2020 guide documents bobbin-to-cone winding, fault cutting, rejoining and prior steam relaxation; the Natural Fibre Company's own mill page distinguishes hard waste (spun-yarn pieces) from raw waste, card waste, noils and bobbin waste. These sources do not describe one common SKU, factory, modern order, numeric yield, oil content or recycling acceptance specification. Verify the exact supplied and accepted states in each dataset. Previously washed wool can retain grease and processing oil; neither is assumed zero.

Exclude combing noils (separately enumerated as CPC 26140), loose spinning fly as reference product, card waste, garnetted/reclaimed fibres (CPC39213), virgin wool/top/sliver, other animal species, blends, dyed/bleached/carbonised or chemically finished yarn, newly waxed yarn, fabric/garment tearing, and yarn sold as conforming yarn. This narrower candidate does not cover the whole 39212 leaf. The complete CPC3 explanatory note supplies the 39212 title without a further body; it is not evidence for an invented detailed definition or a legal exemption. Additional actual processes and exchanges must be collected even when unauthorised for this route; record the load and an uncovered-route finding rather than deleting them.

UNIDO's historical report distinguishes twisted-thread hard waste from soft pre-spinning waste and describes garnetting as a later reopening operation (paragraphs 81–85). At first release and actual handover the reference lot must still consist of spun-yarn offcuts, not already reopened fibre, mixed fibre or recovered textile articles. Outsourced sorting requires the contractor's actual process and handover records; purchased finished cuts, transfers and resale never create new first-release Q. This historical source supplies no modern site quantities. [Sources: `unido-hard-waste`]

Ellis's 2013 field-based design study reports receiving hard spun-yarn waste from Woolyarns and documents automatic winding fault removal alongside pure-wool and blended production. It corroborates a real hard-waste supply form, not this lot's undyed/unwaxed state, composition, receiver permission or process values. Those conditions still require lot records. [Sources: `ellis-wool-waste-2013`]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.waste-of-wool-or-of-fine-or-coarse-animal-hair |
| classification_refs | CPC 3.0:39212, accepted narrower association for the specified undyed sheep-wool yarn clearing cuts |
| covered_products | Only unwaxed undyed 100% sheep-wool spun-yarn clearing cuts from the declared winding route |
| excluded_products | Noils; garnetted stock; loose spinning fly; raw wool; top; conforming yarn; other species; blended or treated yarn waste |
| representative_product | One traceable lot of short spun-yarn cuts accepted as segregated recovery feedstock |
| production_route | Received steam-relaxed singles on bobbins → automatic winding and fault clearing → source-segregated cut collection → manual sorting and first release → cohort storage/packing/dispatch |
| market_state | Unopened spun-yarn pieces at declared moisture and inherited-oil condition; recovery function and receiver acceptance documented; no recycled-fibre or zero-burden claim |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply segregated sheep-wool yarn clearing cuts for an explicitly accepted material-recovery route |
| How much | 1 kg net cuts at their first quality-release gate |
| How well | One lot-specific composition and contamination specification accepted by the named receiver; no universal purity or yield |
| How long or cycle | One declared manufacturing cohort; later services preserve its original Q_c; no lifetime functional equivalence |
| reference_flow_link | `reference_cuts` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Undyed sheep-wool yarn clearing cuts for recovery |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 100% sheep-wool species and composition; spun-yarn cut form; winding/clearing source; absence of noils and garnetting; upstream washing and spinning history; prior steam-relaxation state; undyed and unwaxed state; excluded chemical treatment flags; inherited grease and processing-oil condition; moisture test and wet/dry basis; yarn count and twist; cut-length distribution or measured gap; contaminant identities and specification; receiver identity and accepted recovery function; legal waste/product status and transfer permissions; first-release lot and Q definition; site and reporting period; full WIP/unused/FG cohort balances; allocation evidence and common gate; packaging articles and ownership; utility boundary and meter state; failure and Q0 records |

Declare each qualifier in the dataset metadata or equivalent original record. The mass of accepted cuts is a physical reference, not an assertion of equivalent yarn performance, treatment authorisation or complete classification coverage.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is the sum of net cut masses at their first documented quality release, excluding every packaging article. Use cp_acceptance. Same-cohort closing FG is already inside Q; do not add it again. |
| moisture_mass | all fibre gates | Mass | kg | Keep as-weighed wet mass and independently measured wet-basis moisture, inherited oil and dry wool matter. Dry wool mass excludes free water, oil and non-wool matter using independent assays. There is no chemical conversion, reaction water or fixed regain assumption. |
| energy_units | electricity rows | Energy `f6811440-ee37-11de-8a39-0800200c9a66` | MJ | Convert raw kWh to MJ using 3.6 before attribution and normalize_once. This is metered technical energy, linked to Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`, not a claim about an unresolved supplier flow's native property. Verify that property independently before linkage; shared unit groups do not prove net calorific value. Do not infer electricity mass. |
| air_volume | splicing_air | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Use integrated meter volume once at its measured pressure/temperature/moisture state. Integrate only an actual rate over time. Any state conversion needs measured absolute pressure, temperature and gas-specific compressibility; volume-to-mass needs independent air density at that state, never water density or an unrelated secondary property. |
| emission_quantity | external_pm; water_vapour_release | Mass | kg | Concentration times already integrated outlet volume gives mass; do not multiply by time again. Only concentration times volume rate is integrated over operating time. Keep independent species, particle fraction, blank corrections and moisture evidence. |
| packaging_mass | packaging articles | Mass | kg | Measure each empty article configuration and count on calibrated scales. Count-to-mass conversion uses that article measurement; no nominal fill capacity or guessed per-item mass. Keep every bobbin, cone and sack ledger separately. |
| one_denominator | all inventory rows | Mass | kg | The final basis is per 1 kg reference flow. Protocols collect unnormalised raw records. Compute attributed A_j before the single division A_j/Q in normalize_once; cards and aggregation reference the same result. H is residence exposure for service attribution, never another denominator. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Already manufactured undyed unwaxed 100% sheep-wool singles, steam-relaxed upstream and supplied on spinning bobbins; prior oil/moisture disclosed |
| starting_condition_role | Actual feed to the winding source process that forms yarn cuts; not purchased finished recovery feedstock |
| product_classification_scope | A narrow non-garnetted spun-wool-yarn waste candidate under39212; noils26140 and garnetted stock39213 excluded |
| recursive_input_rule | Do not replace the declared manufactured-yarn feed by purchased cuts or a zero-burden recycled-fibre average. Rework and returns preserve their original history and cancel internal transfers. |
| upstream_dataset_requirement | One compatible supplier chain for wool husbandry/shearing/scouring/top-making/spinning/prior relaxation; actual utility, maintenance and packaging/treatment suppliers with no duplicated unit operation |
| disclosure | Site, period, source winding gate, initial supply condition, first-release gate, service cohorts, gross and attributed ledgers, all stocks, excluded routes, utilities, legal/receiver status and evidence gaps |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_source | joint_winding | Include receipt, bobbin handling, winding, sensing, actual clearing cuts, rejoining, suction and source segregation. Preserve the full main-yarn/cuts/reject output ledger even when only a small share of burdens is attributed to cuts. | woolmark-spinning-2020 |
| boundary_acceptance | cut_acceptance | Include dedicated collection, identified closed-container transfer, manual sorting, contamination tests, net weighing and first-release decision against a named receiver specification. A market description alone is not proof of legal or technical acceptance. | woolmark-spinning-2020; nfc-hard-waste |
| boundary_service | release_service | Retain all actual packing, storage, handling, dispatch, external returns and incremental rework. Attribute these to original released cohorts using Q_c; do not rename dispatch or reinspection as manufacture. |  |
| boundary_utilities | all processes | This selected route has upstream steam-relaxed feed, no new steam setting, no dyeing/washing/waxing and no garnetting. Retain existing grease/oil and moisture in the feed. Actual in-boundary steam, fuel, humidification, coolant, cleaning formulation, compressor or additional material requires an explicit process extension with each purchased preparation, utility, waste and emission species; preserve its real load while reporting uncovered scope. Never copy an assumed boiler or silently zero a real operation. | woolmark-spinning-2020 |
| boundary_inheritance | raw and intermediate stocks | Retain failed lots, Q0 periods, starts/stops, idle/cleanup, rework and all opening/closing WIP and unused non-WIP material. Each physical transfer carries its own inherited exchange vector. Document whether raw records are gross or already net; do not deduct stock a second time. No Q0 inventory is erased or converted into a fabricated per-kg value. |  |
| boundary_gates | manufacturing; FG; combined system | Q is an internal first-release transfer from manufacture to FG, not a second external production term. Reconcile manufacture through Q and closing WIP, FG through openingFG+Q+returns and closingFG+gross shipments+real losses, then cancel internal Q/transfers at the combined physical gate. Production, FG and combined gates use identical moisture/tare/cohort definitions. |  |
| boundary_legal | dataset function and receiver | Declare the recovered-material supply function separately from any waste-treatment service. Verify the actual legal waste/product state, receiver permissions, acceptance tests, contract, ownership and common-gate value. Do not assume exemption, end-of-waste status, a positive price, an eligible treatment service or an avoided virgin-wool credit. Negative-value treatment routes require their own functional boundary before use. | ilcd-allocation-2010 |
| boundary_atomic | inventory and upstream interfaces | Each row is one actual supplied article/preparation/material or one waste/emission. Whole purchased preparations are acquired once; constituent, moisture and oil assays are non-additive subledgers. Add a separate card for every real unlisted input/output. A mixed-output total and its source partitions cannot be overlapping additional providers. |  |
| boundary_handover | cut_acceptance; release_service | Verify source-site manufacture, contractor identity/processes and actual first-release/receiver handovers. First release and handover retain spun-yarn offcuts; garnetting, mixed fibre and recovered articles are excluded. Transfers, resale and reinspection cannot create Q. | unido-hard-waste |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| joint_winding | Source winding and clearing | required | Received steam-relaxed singles; complete common source operation | Source winding and clearing | per 1 kg reference flow |
| cut_acceptance | Dedicated cut collection and first release | required | Only source-segregated hard spun-yarn cuts | Dedicated cut collection and first release | per 1 kg reference flow |
| release_service | Released-cohort storage packing and dispatch | required | Actual post-release events; original cohort retained | Released-cohort storage packing and dispatch | per 1 kg reference flow |

Keep two non-additive views: V_j is each gross physical movement or stock at the actual gate; A_j is the converted, stock-reconciled and attributed numerator for the target. Physical diagnostic rows preserve the complete source operation; they are not additional providers/credits in the allocated cuts dataset. Internal transfers cancel by lot. All conditional rows need actual presence or documented absence. Every real unlisted material, preparation, packaging article, waste, utility and environmental species requires a new atomic card and linked raw protocol before dataset completeness can be claimed.

For each packaging article keep physical P/N/ER/S/EO/W and stocks complete. Diagnostic tare rows do not create another provider, but actual acquisition, transport, wear and service burden vectors must enter A_j once under allocation_gate. Check supplier inclusion exchange by exchange; missing supplier data is an explicit gap, never zero. A loan or free receipt may still carry real transport or service burdens.

### Process: Source winding and clearing (`joint_winding`)

#### Inputs

##### Product flows

###### Steam-relaxed unwaxed wool singles on spinning bobbins (`single_yarn_feed`)

Receive already manufactured non-retail singles: this category requires 100% sheep wool, undyed, previously steam-relaxed and without applied yarn wax. The selected semantic supply is undyed unwaxed 100% sheep-wool singles. Its native flow UUID remains unresolved; verify composition, manufacturing state, prior relaxation and inherited processing oil from supplier records. Upstream spinning, scouring, top-making and prior steam relaxation are linked exactly once; they are not assumed absent. Bobbin tare is a separate exchange.

Quantity execution: Use normalize_once with cp_joint after raw_units, inventory_carry and allocation_gate; use attributed A_j; retain raw gross V_j independently.

- Selected flow: Undyed unwaxed sheep-wool singles
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_joint`
- Sources: `woolmark-spinning-2020`

###### Winding and clearing electricity (`winding_electricity`)

Meter this stage including suction, start/stop, failed runs, idle operation and cleanup. Metered AC is recorded at the point of use; its supplier flow UUID and native reference property remain unresolved; voltage, supply technology, generation mix, provider geography, delivery boundary and line-loss allocation are unspecified. Link actual supply separately; exclude compressor electricity already included in purchased compressed air and assign other-function exclusive equipment separately.

Quantity execution: Use normalize_once with cp_winding_energy after raw_units, inventory_carry and allocation_gate; use attributed A_j; retain raw gross V_j independently.

- Selected flow: Alternating current
- Flow property / unit: Energy `f6811440-ee37-11de-8a39-0800200c9a66` / MJ
- Amount rule: Collected exchange per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_winding_energy`
- Sources: `woolmark-spinning-2020`

###### Purchased splicing air at point of use (`splicing_air`)

Conditional on actual pneumatic splicing supplied across the declared utility boundary. The selected physical supply requires filtered, compressed, oil-separated, cooled and dried air at the on-site point of use. Its native flow UUID is unresolved; do not infer a fuel identity. Volume is actual m3 with measured pressure, temperature, moisture and meter basis, not an assumed normal volume. The supplier carries compression electricity, cooling, drying, oil and condensate burdens; do not add them again here. An in-boundary compressor needs its own complete inventory before claiming this route.

Quantity execution: Use normalize_once with cp_air after raw_units, inventory_carry and allocation_gate; use attributed A_j; retain raw gross V_j independently.

- Selected flow: Compressed air
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collected exchange per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `woolmark-spinning-2020`

###### Mineral-base winding-machine lubricating oil (`machine_oil`)

Conditional on actual mineral-base maintenance oil. Record the whole purchased oil as one supply preparation; carrier/additive assays are a composition subledger, not additional purchases. A native PAO total-synthesis lubricant cannot substitute for mineral oil. A different actual lubricant requires its own chemically specific card and supply evidence.

Quantity execution: Use normalize_once with cp_maintenance after raw_units, inventory_carry and allocation_gate; use attributed A_j; retain raw gross V_j independently.

- Selected flow: Mineral-base winding-machine lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_maintenance`
- Sources:

###### Spinning bobbins received with yarn (`bobbin_receipt`)

First non-purchased physical tare N received with the yarn (not a return unless its earlier site outbound is evidenced), tracked by owner, article configuration, material composition, count, measured empty mass and stock state. Reusable supplier property is not a newly consumed purchase each turn; assign only evidenced manufacture/wear/service burdens without guessing lifetime. It is not part of net yarn or recovered-cut mass.

Quantity execution: Use normalize_once with cp_bobbin after raw_units, inventory_carry and allocation_gate; retain gross V_j as a diagnostic physical ledger only; never add an extra provider.

- Selected flow: Reusable empty spinning bobbin
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_bobbin`
- Sources:



###### Same spinning bobbin returned to site (`bobbin_external_return`)

Conditional physical ER movement only. P is purchase; N is first non-purchased external receipt regardless of supplier coverage; ER requires the same article and prior site outbound proof. Record actual owner, count, measured tare and provider inclusion; assign real acquisition/transport/service burden once, retaining diagnostic V_j separately. No stock or internal reuse is a new receipt.

- Selected flow: Reusable empty spinning bobbin
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_bobbin`
- Sources:


###### Purchased spinning bobbin (`bobbin_purchase`)

Conditional physical P movement only. P is purchase; N is first non-purchased external receipt regardless of supplier coverage; ER requires the same article and prior site outbound proof. Record actual owner, count, measured tare and provider inclusion; assign real acquisition/transport/service burden once, retaining diagnostic V_j separately. No stock or internal reuse is a new receipt.

- Selected flow: Reusable empty spinning bobbin
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_bobbin`
- Sources:

###### Paperboard cone for the main yarn (`paper_cone_input`)

Purchased P only, conditional on actual paperboard cone configuration. Record the whole article and measured empty mass; a plastic or composite tube is a different exchange. Cone filling and its manufacturing burden are normally exclusive to the saleable main yarn and must be separated from the cuts while the physical cone ledger remains complete.

Quantity execution: Use normalize_once with cp_cone after raw_units, inventory_carry and allocation_gate; retain gross V_j as a diagnostic physical ledger only; never add an extra provider.

- Selected flow: Empty paperboard yarn cone
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cone`
- Sources:



###### Same paperboard cone returned to site (`paper_cone_external_return`)

Conditional physical ER movement only. P is purchase; N is first non-purchased external receipt regardless of supplier coverage; ER requires the same article and prior site outbound proof. Record actual owner, count, measured tare and provider inclusion; assign real acquisition/transport/service burden once, retaining diagnostic V_j separately. No stock or internal reuse is a new receipt.

- Selected flow: Empty paperboard yarn cone
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cone`
- Sources:


###### First non-purchased paperboard cone receipt (`paper_cone_nonpurchase`)

Conditional physical N movement only. P is purchase; N is first non-purchased external receipt regardless of supplier coverage; ER requires the same article and prior site outbound proof. Record actual owner, count, measured tare and provider inclusion; assign real acquisition/transport/service burden once, retaining diagnostic V_j separately. No stock or internal reuse is a new receipt.

- Selected flow: Empty paperboard yarn cone
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cone`
- Sources:

#### Outputs

##### Product flows

###### Cleared wound wool yarn at the common gate (`cleared_yarn`)

The intact manufactured non-retail yarn is the main output; this route requires 100% sheep wool and the same undyed/unwaxed state as the feed. Native at-plant manufactured yarn with at least 85% wool is a family identity, not evidence of the narrower lot. Keep full gross mass V_yarn and its actual cone tare separately. This diagnostic gross output is not an extra provider or avoided-product credit in the allocated cuts dataset.

Quantity execution: Use normalize_once with cp_joint after raw_units, inventory_carry and allocation_gate; retain gross V_j as a diagnostic physical ledger only; never add an extra provider.

- Selected flow: Undyed unwaxed sheep-wool singles
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_joint`
- Sources: `woolmark-spinning-2020`

###### Unaccepted clearing cuts transferred to sorting (`cuts_transfer_out`)

Actual short spun-yarn pieces cut out by a clearer, before waste-lot acceptance. They are not noils, unspun spinning fly or fibres produced by garnetting. Transfer to cuts_transfer_in by unique lot; preserve gross mass and inherited per-exchange burden vector; cancel this internal transfer in the combined boundary.

Quantity execution: Use normalize_once with cp_joint after raw_units, inventory_carry and allocation_gate; retain gross V_j as a diagnostic physical ledger only; never add an extra provider.

- Selected flow: Unaccepted undyed sheep-wool yarn clearing cuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_joint`
- Sources: `woolmark-spinning-2020`; `nfc-hard-waste`

###### Empty spinning bobbins returned to supplier (`bobbin_return`)

Record actual external outgoing tare by article and owner, distinct from internal reuse and net fibre mass. Match the relevant packaging balance; gross returns are not negative new purchases or a new co-product.

Quantity execution: Use normalize_once with cp_bobbin after raw_units, inventory_carry and allocation_gate; retain gross V_j as a diagnostic physical ledger only; never add an extra provider.

- Selected flow: Reusable empty spinning bobbin
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_bobbin`
- Sources:

###### Paperboard cones accompanying main yarn (`paper_cone_out`)

Record actual external outgoing tare by article and owner, distinct from internal reuse and net fibre mass. Match the relevant packaging balance; gross returns are not negative new purchases or a new co-product.

Quantity execution: Use normalize_once with cp_cone after raw_units, inventory_carry and allocation_gate; retain gross V_j as a diagnostic physical ledger only; never add an extra provider.

- Selected flow: Empty paperboard yarn cone
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cone`
- Sources:

##### Waste flows


###### Paperboard cone returned externally (`paper_cone_returned_out`)

Conditional actual EO movement for this specific article; weigh tare separately from wool, trace ownership and destination, retain V_j and assign actual transport/service/treatment burden once under allocation_gate and normalize_once. Missing evidence is not zero.

- Selected flow: Empty paperboard yarn cone
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cone`
- Sources:

##### Waste flows

###### Captured sheep-wool winding fly (`captured_wool_fly`)

Conditional separately collected loose fly from winding/suction, never blended into the hard-cut reference. Weigh the collected material excluding filters; its treatment destination and legal transfer are explicit. Airborne releases are a separate exchange.

Quantity execution: Use normalize_once with cp_joint after raw_units, inventory_carry and allocation_gate; retain gross V_j as a diagnostic physical ledger only; never add an extra provider.

- Selected flow: Captured sheep-wool winding fly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_joint`
- Sources:

###### Spent mineral-base winding-machine oil (`spent_machine_oil`)

Conditional spent liquid mineral oil, with composition, retained equipment stock and off-site treatment documented. Do not turn total oil issue into an assumed emission or waste fraction.

Quantity execution: Use normalize_once with cp_maintenance after raw_units, inventory_carry and allocation_gate; retain gross V_j as a diagnostic physical ledger only; never add an extra provider.

- Selected flow: Spent mineral-base winding-machine oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_maintenance`
- Sources:

###### Discarded spinning bobbin (`damaged_bobbin`)

Conditional actual discarded article; retain material composition and destination. Track this item as the W term of the bobbin balance rather than deleting the reusable-stock loss.

Quantity execution: Use normalize_once with cp_bobbin after raw_units, inventory_carry and allocation_gate; retain gross V_j as a diagnostic physical ledger only; never add an extra provider.

- Selected flow: Discarded spinning bobbin
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_bobbin`
- Sources:

##### Elementary flows


###### Discarded paperboard yarn cone (`paper_cone_waste`)

Conditional actual W movement for this specific article; weigh tare separately from wool, trace ownership and destination, retain V_j and assign actual transport/service/treatment burden once under allocation_gate and normalize_once. Missing evidence is not zero.

- Selected flow: Discarded paperboard yarn cone
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cone`
- Sources:

##### Elementary flows

###### External winding particulate release (`external_pm`)

Conditional actual emission to ambient air with unspecified subcompartment and unspecified particle-size fraction. Indoor suction recirculation and captured dust are not this elementary emission. Native definition does not impose its historical clinker example, chemical composition, stack height or LCIA factor. Use a specific verified fraction/compartment when measured and avoid overlap; missing monitoring is not zero.

Quantity execution: Use normalize_once with cp_emissions after raw_units, inventory_carry and allocation_gate; use attributed A_j; retain raw gross V_j independently.

- Selected flow: Particulate matter, particle size unspecified
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources:

### Process: Dedicated cut collection and first release (`cut_acceptance`)

#### Inputs

##### Product flows

###### Cut collection and sorting electricity (`sorting_electricity`)

Meter this stage including suction, start/stop, failed runs, idle operation and cleanup. Metered AC is recorded at the point of use; its supplier flow UUID and native reference property remain unresolved; voltage, supply technology, generation mix, provider geography, delivery boundary and line-loss allocation are unspecified. Link actual supply separately; exclude compressor electricity already included in purchased compressed air and assign other-function exclusive equipment separately.

Quantity execution: Use normalize_once with cp_sort_energy after raw_units, inventory_carry and allocation_gate; use attributed A_j; retain raw gross V_j independently.

- Selected flow: Alternating current
- Flow property / unit: Energy `f6811440-ee37-11de-8a39-0800200c9a66` / MJ
- Amount rule: Collected exchange per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_sort_energy`
- Sources: `woolmark-spinning-2020`

###### Unaccepted clearing cuts received from winding (`cuts_transfer_in`)

Exactly the physical lot in cuts_transfer_out, not a second purchase. Keep isolated by sheep-wool composition, previous steam/treatment/oil condition and cleared-fault origin. Closed containers and lot-linked manual sorting must prevent noils, spinning fly, dyed yarn and other fibres entering this stream.

Quantity execution: Use normalize_once with cp_acceptance after raw_units, inventory_carry and allocation_gate; retain gross V_j as a diagnostic physical ledger only; never add an extra provider.

- Selected flow: Unaccepted undyed sheep-wool yarn clearing cuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`
- Sources: `woolmark-spinning-2020`; `nfc-hard-waste`

##### Elementary flows

###### Measured ambient water-vapour uptake (`ambient_water_uptake`)

Conditional independently demonstrated water sorption during passive handling. Keep direction, physical water state and measured moisture with the actual lot; do not use an emissions-to-air identity for resource uptake. Simultaneous gross uptake/release needs separate independent flux evidence; a net moisture test alone cannot solve both.

Quantity execution: Use normalize_once with cp_moisture after raw_units, inventory_carry and allocation_gate; use attributed A_j; retain raw gross V_j independently.

- Selected flow: Water vapour taken up from ambient air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_moisture`
- Sources:

#### Outputs

##### Product flows

###### First released yarn clearing cuts (`reference_cuts`)

First net mass released after source-specific sorting and buyer acceptance of non-garnetted spun sheep-wool yarn pieces. Q counts each physical piece once, including same-campaign closing finished goods; subsequent packing, dispatch, reinspection and returned already released pieces do not create production. Lot records must verify100% sheep wool, undyed/unwaxed state, prior steam relaxation, inherited grease/oil, contaminants and receiver-authorised intended recovery.

- Selected flow: Undyed sheep-wool yarn clearing cuts for recovery
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `woolmark-spinning-2020`; `nfc-hard-waste`

##### Waste flows

###### Rejected contaminated wool yarn cuts (`rejected_yarn_cuts`)

Conditional rejected physical cut pieces that fail the declared buyer specification; keep contamination, reason, mass and actual destination. Never substitute the mass of a contaminant assay for the whole rejected piece or add a component subledger a second time.

Quantity execution: Use normalize_once with cp_acceptance after raw_units, inventory_carry and allocation_gate; retain gross V_j as a diagnostic physical ledger only; never add an extra provider.

- Selected flow: Rejected contaminated sheep-wool yarn cuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`
- Sources: `woolmark-spinning-2020`

##### Elementary flows

###### Measured passive water-vapour release (`water_vapour_release`)

Conditional independently measured net evaporation to ambient air, unspecified subcompartment, from the declared passive handling; native water CAS7732-18-5 and mass property must apply. This is neither steam input nor a chemical reaction-water factor. Do not infer evaporation and dust loss from one unexplained mass residual. If a known air subcompartment applies, use that exact verified flow instead.

Quantity execution: Use normalize_once with cp_moisture after raw_units, inventory_carry and allocation_gate; use attributed A_j; retain raw gross V_j independently.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_moisture`
- Sources:

### Process: Released-cohort storage packing and dispatch (`release_service`)

#### Inputs

##### Product flows

###### Released-cohort packing and storage electricity (`service_electricity`)

Meter this stage including suction, start/stop, failed runs, idle operation and cleanup. Metered AC is recorded at the point of use; its supplier flow UUID and native reference property remain unresolved; voltage, supply technology, generation mix, provider geography, delivery boundary and line-loss allocation are unspecified. Link actual supply separately; exclude compressor electricity already included in purchased compressed air and assign other-function exclusive equipment separately.

Quantity execution: Use normalize_once with cp_service_energy after raw_units, inventory_carry and allocation_gate; use attributed A_j; retain raw gross V_j independently.

- Selected flow: Alternating current
- Flow property / unit: Energy `f6811440-ee37-11de-8a39-0800200c9a66` / MJ
- Amount rule: Collected exchange per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service_energy`
- Sources: `woolmark-spinning-2020`

###### Released cuts entering storage and packing (`released_cuts_in`)

Internal receipt of the reference_cuts lots with their original Q_c and burden vectors. It cancels on consolidation. Opening released stock retains its historical cohort; no re-creation of historical manufacture, no addition of closing FG to Q and no substitution of dispatch tonnage as denominator.

Quantity execution: Use normalize_once with cp_service after raw_units, inventory_carry and allocation_gate; retain gross V_j as a diagnostic physical ledger only; never add an extra provider.

- Selected flow: Undyed sheep-wool yarn clearing cuts for recovery
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `ilcd-allocation-2010`

###### Previously released yarn cuts returned by receiver (`returned_cuts_in`)

Conditional physical receiver return linked to the original outgoing record and cohort. Reverse its prior delivery assignment, carry inherited burdens exactly and assign only real new inspection/rework activity to that cohort. Reinspection does not make a new first-release Q. Contaminated returns require quarantine and actual separate treatment; do not blend them into new production.

Quantity execution: Use normalize_once with cp_service after raw_units, inventory_carry and allocation_gate; retain gross V_j as a diagnostic physical ledger only; never add an extra provider.

- Selected flow: Undyed sheep-wool yarn clearing cuts for recovery
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources:

###### New woven polypropylene sacks acquired (`pp_sack_purchase`)

Conditional actual single woven PP sack configuration, with composition, coating/liner, owner, empty mass and count measured. Different liners, closures and ties are separately added atomic exchanges when present. Purchases P, first non-purchased external receipts N and traceable same-article returns ER are distinct; internal reuse is none of these. A native25kg seed bag at farm gate cannot establish this no-fixed-capacity waste sack.

Quantity execution: Use normalize_once with cp_pack after raw_units, inventory_carry and allocation_gate; retain gross V_j as a diagnostic physical ledger only; never add an extra provider.

- Selected flow: Woven polypropylene yarn-waste sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources:


###### First non-purchased woven PP sack receipt (`pp_sack_nonpurchase`)

Conditional physical N movement only. P is purchase; N is first non-purchased external receipt regardless of supplier coverage; ER requires the same article and prior site outbound proof. Record actual owner, count, measured tare and provider inclusion; assign real acquisition/transport/service burden once, retaining diagnostic V_j separately. No stock or internal reuse is a new receipt.

- Selected flow: Woven polypropylene yarn-waste sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources:

###### Polypropylene sacks returned from outside (`pp_sack_external_return`)

Conditional actual single woven PP sack configuration, with composition, coating/liner, owner, empty mass and count measured. Different liners, closures and ties are separately added atomic exchanges when present. Purchases P, first non-purchased external receipts N and traceable same-article returns ER are distinct; internal reuse is none of these. A native25kg seed bag at farm gate cannot establish this no-fixed-capacity waste sack.

Quantity execution: Use normalize_once with cp_pack after raw_units, inventory_carry and allocation_gate; retain gross V_j as a diagnostic physical ledger only; never add an extra provider.

- Selected flow: Woven polypropylene yarn-waste sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources:

#### Outputs

##### Product flows

###### Previously released cuts physically dispatched (`dispatched_cuts`)

Gross physical shipments S, excluding packaging, linked to first-release cohort and receiver records. Keep gross shipments and receiver returns separate rather than hiding them in net sales. This transfer is a diagnostic service outlet, not a second production reference or provider alongside reference_cuts; Q_c is unchanged.

Quantity execution: Use normalize_once with cp_service after raw_units, inventory_carry and allocation_gate; retain gross V_j as a diagnostic physical ledger only; never add an extra provider.

- Selected flow: Undyed sheep-wool yarn clearing cuts for recovery
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources:

###### Polypropylene sack tare accompanying gross shipments (`pp_sack_shipped`)

Physical S or EO term of the individual PP-sack balance. Keep attached opening/closing WIP and FG sacks in their stock accounts. Tare does not enter recovered-yarn Q, become another sack purchase after internal reuse, or generate a co-product credit.

Quantity execution: Use normalize_once with cp_pack after raw_units, inventory_carry and allocation_gate; retain gross V_j as a diagnostic physical ledger only; never add an extra provider.

- Selected flow: Woven polypropylene yarn-waste sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources:

###### Empty polypropylene sacks returned to external owner (`pp_sack_returned_out`)

Physical S or EO term of the individual PP-sack balance. Keep attached opening/closing WIP and FG sacks in their stock accounts. Tare does not enter recovered-yarn Q, become another sack purchase after internal reuse, or generate a co-product credit.

Quantity execution: Use normalize_once with cp_pack after raw_units, inventory_carry and allocation_gate; retain gross V_j as a diagnostic physical ledger only; never add an extra provider.

- Selected flow: Woven polypropylene yarn-waste sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources:

##### Waste flows

###### Discarded woven polypropylene sack (`pp_sack_waste`)

Actual W term, with composition/coating and destination established. A PP-waste native identity fixed to mechanical recycling cannot represent an unverified disposal route. Weigh residual yarn separately or record it as a non-additive component of the whole waste article; do not double-count wool mass.

Quantity execution: Use normalize_once with cp_pack after raw_units, inventory_carry and allocation_gate; retain gross V_j as a diagnostic physical ledger only; never add an extra provider.

- Selected flow: Discarded woven polypropylene yarn-waste sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collected exchange per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_applicability | attributional multi-output winding | Use this hierarchy only where attributional multifunctionality genuinely requires allocation. First establish the functions, physical source operation and recovery/treatment status; the shared waste category or existence of a buyer alone does not decide allocation. Keep full gross V_j separately from attributed A_j. | ilcd-allocation-2010 |
| allocation_subdivision | all exchanges | First use actual subdivision and independent metering, then defensible virtual subdivision. Dedicated cut collection/sorting goes to cuts; main-yarn-only cones and finishing go to main yarn. For each remaining exchange test the determining physical causal relationship to each function, including actual machine time, tension/control or other evidenced drivers; mass fraction by itself is not proof. | ilcd-allocation-2010 |
| allocation_residual | only remaining common-process exchanges | Only genuinely remaining exchanges use a justified second criterion: contemporaneous market values for every real co-function in the exact state and at the same common-process exit/entry gate. Remove downstream sorting/packing/transport value added; document derivation when that gate has no traded price. For residual exchange j only, a_cuts,j = gate_value_cuts / sum(gate_value_functions). Keep currencies, period, quantities, negative-value cases, representativeness and sensitivity; do not select physical or economic allocation arbitrarily or apply a single universal share to causally distinct exchanges. | ilcd-allocation-2010 |
| allocation_upstream | feed and inherited activity | Apply the evidenced per-exchange attribution once to the received yarn supplier vector and included common-stage activities; do not acquire cut feed a second time or repeat the supplier spinning/relaxation process. Preserve shares summing to one across the real functions, direct burdens, generating-stage waste treatment and gross physical yields. Existing allocated supplier burdens are not allocated again as if newly unallocated data. | ilcd-allocation-2010 |
| allocation_services | released cohorts | Assign exclusive service events directly to their original released cohort; shared services require the same exchange-specific causality hierarchy. Actual residence exposure H may inform storage allocation but normalization still uses original Q_c. No re-release or returned shipment creates Q. Do not credit avoided wool, energy or waste treatment without a separately justified model outside this PCR. | ilcd-allocation-2010 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

Collection stores raw, unnormalised records including zero-output and failed periods. The phrase per 1 kg reference flow below identifies the eventual result only; collection and aggregation do not pre-divide the raw numerator. Keep source-specific facts, literal units, net/gross flags and measured uncertainty. A site may not claim missing monitoring as zero.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_joint | joint_winding | feed; main yarn; unaccepted cuts; captured fly | lot weighing and source records | lot; machine; supplier; yarn count/twist; sheep species/composition; undyed/unwaxed flags; prior steam-relaxation record; inherited oil; gross feed and tare; main-yarn net mass; clearing-cut net mass; fly mass; rejection reasons; opening/closing WIP; unused-yarn stocks; all failures/Q0; raw gross/net basis | Calibrated scales at receipt and physical separation; trace the cleared fault to its machine/lot and weigh each actual destination independently. Pair before/after moisture and oil tests; reconcile the entire source operation, not merely its waste bin. | kg | each lot and all shifts | Complete declared period including all failure/Q0/start-stop/idle/cleanup/rework events | Named actual site and the single specified process/cohort | per 1 kg reference flow | Scale calibration; supplier state/chain; clearers logs; independent masses; closed inventory ledger |
| cp_acceptance | cut_acceptance | internal cuts; accepted Q; rejected cuts | segregation and first-release weighing | source lot; sealed container; receipt; tare; first-release timestamp; unique physical lot IDs; Q mass; moisture; oil; wool assay; contamination; cut length; receiver specification and acceptance; rework; rejects and destination; opening/closing WIP; legal state | Segregate source winding cuts and manually inspect/sort against the receiver contract. Weigh net mass once at first release; retain negative/failed acceptance and independent reject weights. Confirm sheep wool and no prohibited treatment; do not relabel noils or loosen yarn by garnetting. | kg | each collection and release decision | Complete declared period including all failure/Q0/start-stop/idle/cleanup/rework events | Named actual site and the single specified process/cohort | per 1 kg reference flow | Lot traceability; analytical methods; buyer test; permissions; scale/tare evidence |
| cp_winding_energy | joint_winding | stage electricity | meter readings | meter; stage; start/end kWh; operating interval; failed/start-stop/idle/cleanup intervals; meter coverage; compressor exclusion; cohort; supplier; voltage; generation mix; line losses; raw attribution status | Read stage submeter, preserving complete metered intervals and dedicated/shared equipment boundaries. Use tested balances when dedicated metering is unavailable and disclose uncertainty; never add rated power as if measured energy. | kWh | each shift and event | Complete declared period including all failure/Q0/start-stop/idle/cleanup/rework events | Named actual site and the single specified process/cohort | per 1 kg reference flow | Meter calibration; coverage diagram; tested energy balance; provider records |
| cp_sort_energy | cut_acceptance | stage electricity | meter readings | meter; stage; start/end kWh; operating interval; failed/start-stop/idle/cleanup intervals; meter coverage; compressor exclusion; cohort; supplier; voltage; generation mix; line losses; raw attribution status | Read stage submeter, preserving complete metered intervals and dedicated/shared equipment boundaries. Use tested balances when dedicated metering is unavailable and disclose uncertainty; never add rated power as if measured energy. | kWh | each shift and event | Complete declared period including all failure/Q0/start-stop/idle/cleanup/rework events | Named actual site and the single specified process/cohort | per 1 kg reference flow | Meter calibration; coverage diagram; tested energy balance; provider records |
| cp_service_energy | release_service | stage electricity | meter readings | meter; stage; start/end kWh; operating interval; failed/start-stop/idle/cleanup intervals; meter coverage; compressor exclusion; cohort; supplier; voltage; generation mix; line losses; raw attribution status | Read stage submeter, preserving complete metered intervals and dedicated/shared equipment boundaries. Use tested balances when dedicated metering is unavailable and disclose uncertainty; never add rated power as if measured energy. | kWh | each shift and event | Complete declared period including all failure/Q0/start-stop/idle/cleanup/rework events | Named actual site and the single specified process/cohort | per 1 kg reference flow | Meter calibration; coverage diagram; tested energy balance; provider records |
| cp_air | joint_winding | external splicing air | utility volume meter and supplier record | meter; cumulative m3 or rate/time flag; absolute pressure; temperature; humidity; compressibility if converted; filter/oil-separation/cooling/drying state; splicer; leakage; supplier energy boundary | Verify actual pneumatic route and treatment state; retain raw volume and meter conditions. Measure leakage and failed cycles; distinguish purchase at use point from an included compressor. No invented standard-state conversion or default density. | m3 | each metered interval and campaign | Complete declared period including all failure/Q0/start-stop/idle/cleanup/rework events | Named actual site and the single specified process/cohort | per 1 kg reference flow | Calibration; state measurements; utility supplier scope; flow chain |
| cp_maintenance | joint_winding | mineral oil and spent oil separately | issued material and waste logs | whole preparation identity; SDS; composition assay; purchases; issued amount; unused stock; equipment hold-up; spent mass; off-site recipient; raw net/gross flag; attributable equipment | Reconcile weighed new oil, stock, retained oil and separately weighed spent oil; identify mineral-base composition and true generating operation. Obtain compatible supply/treatment datasets; do not equate oil loss with a measured environmental species. | kg | each issue and maintenance event | Complete declared period including all failure/Q0/start-stop/idle/cleanup/rework events | Named actual site and the single specified process/cohort | per 1 kg reference flow | SDS; scales; stock and waste-transfer records; equipment assignment |
| cp_bobbin | joint_winding | spinning bobbin article ledger | article mass/count and ownership records | article/configuration; composition; coating/liner; owner; measured empty mass; counts; I0_empty; I0_attachedWIP; I0_attachedFG; I0_reusable; P; N; ER; I1_empty; I1_attachedWIP; I1_attachedFG; I1_reusable; S; EO; W; internal reuse; wear/service burden; cohort | Weigh each actual empty article and count it at every physical gate. P records purchases only; N records first non-purchased receipt with feed or separately borrowed/free-transferred articles, whether or not covered by a supplier inventory. ER requires the same physical article and an earlier site outbound identifier; an untraceable external receipt is not ER. Reconcile attached and empty stocks independently; internal reuse cancels. Add every real purchase/return/waste card missing from the selected configuration; a stock loss cannot be hidden as zero. | kg; item | each receipt/dispatch/return and stock close | Complete declared period including all failure/Q0/start-stop/idle/cleanup/rework events | Named actual site and the single specified process/cohort | per 1 kg reference flow | Calibrated tare; actual configuration; ownership; signed transfers; per-article balance |
| cp_cone | joint_winding | paperboard cone article ledger | article mass/count and ownership records | article/configuration; composition; coating/liner; owner; measured empty mass; counts; I0_empty; I0_attachedWIP; I0_attachedFG; I0_reusable; P; N; ER; I1_empty; I1_attachedWIP; I1_attachedFG; I1_reusable; S; EO; W; internal reuse; wear/service burden; cohort | Weigh each actual empty article and count it at every physical gate. P records purchases only; N records first non-purchased receipt with feed or separately borrowed/free-transferred articles, whether or not covered by a supplier inventory. ER requires the same physical article and an earlier site outbound identifier; an untraceable external receipt is not ER. Reconcile attached and empty stocks independently; internal reuse cancels. Add every real purchase/return/waste card missing from the selected configuration; a stock loss cannot be hidden as zero. | kg; item | each receipt/dispatch/return and stock close | Complete declared period including all failure/Q0/start-stop/idle/cleanup/rework events | Named actual site and the single specified process/cohort | per 1 kg reference flow | Calibrated tare; actual configuration; ownership; signed transfers; per-article balance |
| cp_pack | release_service | woven PP sack article ledger | article mass/count and ownership records | article/configuration; composition; coating/liner; owner; measured empty mass; counts; I0_empty; I0_attachedWIP; I0_attachedFG; I0_reusable; P; N; ER; I1_empty; I1_attachedWIP; I1_attachedFG; I1_reusable; S; EO; W; internal reuse; wear/service burden; cohort | Weigh each actual empty article and count it at every physical gate. P records purchases only; N records first non-purchased receipt with feed or separately borrowed/free-transferred articles, whether or not covered by a supplier inventory. ER requires the same physical article and an earlier site outbound identifier; an untraceable external receipt is not ER. Reconcile attached and empty stocks independently; internal reuse cancels. Add every real purchase/return/waste card missing from the selected configuration; a stock loss cannot be hidden as zero. | kg; item | each receipt/dispatch/return and stock close | Complete declared period including all failure/Q0/start-stop/idle/cleanup/rework events | Named actual site and the single specified process/cohort | per 1 kg reference flow | Calibrated tare; actual configuration; ownership; signed transfers; per-article balance |
| cp_emissions | joint_winding | actual external particulate release | independent outlet monitoring | outlet; ambient/recirculated flag; subcompartment; size fraction; concentration; integrated volume or true rate; matching time; controls; blank; moisture; uncertainty; sampled operating modes | Measure external outlet concentration and exhaust volume under representative operating, failure and cleanup conditions; distinguish gas state and integrated volume from rate. Keep capture samples separate. No historic cement factor or unspecified PM characterisation is imported. | kg; mg/m3; m3 | each monitoring condition and campaign | Complete declared period including all failure/Q0/start-stop/idle/cleanup/rework events | Named actual site and the single specified process/cohort | per 1 kg reference flow | Lab report; methods; volumetric/time basis; LCIA coverage review |
| cp_moisture | cut_acceptance | water and non-additive composition subledgers | paired measurements and independent flux tests | lot; as-weighed net mass; wet-basis water; method; oil/grease assay; non-wool matter; independent uptake/release flux; time; moisture of all inputs/outputs/stocks; optional N/S assays and uncertainty | Use traceable gravimetric moisture and separate composition tests at matching gates; preserve water, oil and wool dry matter independently. Confirm sorption or evaporation by independent evidence before selecting its elementary exchange; one residual cannot determine two unknown fluxes. | kg; fraction | each lot and changed ambient condition | Complete declared period including all failure/Q0/start-stop/idle/cleanup/rework events | Named actual site and the single specified process/cohort | per 1 kg reference flow | Independent assays/flux tests; calibration; matching conditions; uncertainty |
| cp_service | release_service | released FG and receiver returns | cohort stock and dispatch service records | original cohort; Q_c; first-release IDs; O_FG; Q; receiver return R; C_FG; gross shipment S; real loss D; prior delivery reversal; inherited vector; service/rework event; residence H; ownership; receiver acceptance; attached tare | Track each physical FG lot and all external returns back to original release. Reconcile weighed gross movements separately from invoiced net sales. Assign service to the original cohort and record incremental rework only; reinspection is not production. | kg; kg day | each stock/dispatch/return/service event | Complete declared period including all failure/Q0/start-stop/idle/cleanup/rework events | Named actual site and the single specified process/cohort | per 1 kg reference flow | Signed dispatch/return; original lot and burden history; FG reconciliation |
| cp_allocation | joint_winding | exchange-specific common-stage attribution | causal and common-gate value evidence | functions; independently metered stages; virtual-subdivision rationale; exchange-specific causal driver; physical experiment; all gate quantities/values; actual product/waste state; currency; period; value-added removal; supplier allocated/unallocated flag; shares; uncertainty/sensitivity | Perform the hierarchy in section7 for each exchange. Retain the original gross source ledger, physical causal study and only genuinely remaining common-gate market-value calculation. Do not infer a fixed yield, economic ratio or burden-free state from the word waste. | native units; currency | each cohort and changed source/value period | Complete declared period including all failure/Q0/start-stop/idle/cleanup/rework events | Named actual site and the single specified process/cohort | per 1 kg reference flow | Causal evidence; source gate ledger; price derivation; shares and sensitivity |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| raw_units | all inventory rows | Convert each raw record to its selected native property/unit first. Use energy_units, air_volume and emission_quantity; integrated volumes are not rates. Preserve original values, units and conversion provenance. | raw_values; raw_unit_labels; meter_state; cp_joint; cp_acceptance; cp_winding_energy; cp_sort_energy; cp_service_energy; cp_air; cp_maintenance; cp_bobbin; cp_cone; cp_pack; cp_emissions; cp_moisture; cp_service; cp_allocation | converted unnormalised physical records |  |
| inventory_carry | all inventory rows | For each physical lot and exchange-vector component j retain opening WIP/unused stock burden + new acquisitions/activity − closing WIP/unused stock burden; transfer the resulting vector with the actual material. Use stock terms only once: a verified net-consumption record already incorporating that stock movement is not deducted again. Preserve gross and net definitions at each gate. | opening_WIP_vector; opening_unused_vector; new_acquisitions_activity_vector; closing_WIP_vector; closing_unused_vector; raw_net_gross_flag; cp_joint; cp_acceptance; cp_winding_energy; cp_sort_energy; cp_service_energy; cp_air; cp_maintenance; cp_bobbin; cp_cone; cp_pack; cp_emissions; cp_moisture; cp_service; cp_allocation | inherited and current unnormalised exchange vectors |  |
| allocation_gate | all inventory rows | Derive A_j from the converted and stock-reconciled vector using dedicated/virtual subdivision, exchange-specific determining physical causality and only remaining common-gate values under section7. Keep physical V_j unchanged and retain existing supplier allocation. Service A_j is assigned to original cohort c. | converted_stock_reconciled_vector; causal_drivers; residual_common_gate_values; cp_joint; cp_acceptance; cp_winding_energy; cp_sort_energy; cp_service_energy; cp_air; cp_maintenance; cp_bobbin; cp_cone; cp_pack; cp_emissions; cp_moisture; cp_service; cp_allocation | A_j before normalization; gross V_j in separate ledger | ilcd-allocation-2010 |
| normalize_once | all inventory rows | For Q>0 compute the attributed exchange once as q_j = A_j / Q. For a diagnostic physical row only, the same rule may compute V_j / Q while retaining raw V_j and forbidding an extra provider/credit. The reference_cuts output is exactly 1 kg. Services use the original Q_c in place of Q; H never replaces Q_c. Cards/aggregation only reference this stored result and never divide it again. Q0 keeps actual raw burdens with no unit result until a justified cohort assignment exists. | A_j; Q; Q_c; V_j; cp_joint; cp_acceptance; cp_winding_energy; cp_sort_energy; cp_service_energy; cp_air; cp_maintenance; cp_bobbin; cp_cone; cp_pack; cp_emissions; cp_moisture; cp_service; cp_allocation | single normalized result with physical/attributed role flag |  |
| physical_ledger | all inventory rows | Keep gross V_j for feed, main yarn, cuts, rejects, captures, emissions and all stocks independent of allocation. Reconcile whole physical mass and separately dry wool, water, oil and measured foreign matter at manufacturing, FG and combined gates. For any claimed element balance use independent assays and actual species; no fixed keratin formula or invented reaction water, no COD/VOC-to-chemical-mass substitution. Diagnostic V_j and partitions are not overlapping providers. | V_j; gross_stocks; water_oil_component_assays; actual_species; cp_joint; cp_acceptance; cp_winding_energy; cp_sort_energy; cp_service_energy; cp_air; cp_maintenance; cp_bobbin; cp_cone; cp_pack; cp_emissions; cp_moisture; cp_service; cp_allocation | independent physical mass/component balances and explained uncertainty |  |
| fg_cohort_balance | reference_cuts; released_cuts_in; returned_cuts_in; dispatched_cuts | For each cohort reconcile O_FG + new Q + receiver returns R = C_FG + gross shipments S + actual losses D, including documented cross-gate transfers separately. First-release Q includes its closing FG once. Return R reverses the original delivery assignment and inherits history; only real incremental work is new. Cancel Q and internal transfers when joining manufacturing to FG; never add Q and same-batch closing FG as two outputs. | O_FG; Q; R; C_FG; S; D; cohort_history; cp_acceptance; cp_service | cohort FG reconciliation; Q unchanged by services |  |
| packaging_balance | bobbin_purchase; bobbin_external_return; paper_cone_nonpurchase; paper_cone_external_return; paper_cone_returned_out; paper_cone_waste; pp_sack_nonpurchase; bobbin_receipt; bobbin_return; damaged_bobbin; paper_cone_input; paper_cone_out; pp_sack_purchase; pp_sack_external_return; pp_sack_shipped; pp_sack_returned_out; pp_sack_waste | For each actual article/configuration separately: I0_empty + I0_attachedWIP + I0_attachedFG + I0_reusable + P + N + ER = I1_empty + I1_attachedWIP + I1_attachedFG + I1_reusable + S + EO + W. P is purchased acquisition; N is first non-purchased external receipt, including with feed, loans and free transfers regardless of supplier inventory coverage; ER is only a real return traceable to the same article previously sent out by this site; S tare accompanying gross physical shipment; EO external return out; W actual waste. Internal reuse cancels. All nonzero physical terms need individual exchange cards; stock terms are not new flows. Assign burdens by ownership/actual wear/service; no repeated purchase, product-Q addition or automatic co-product credit. | I0_empty; I0_attachedWIP; I0_attachedFG; I0_reusable; P; N; ER; I1_empty; I1_attachedWIP; I1_attachedFG; I1_reusable; S; EO; W; cp_bobbin; cp_cone; cp_pack | per-article physical balances and independent burden assignment |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_source | feed and cuts | Confirm lot species/purity, yarn form, prior steam relaxation, undyed/unwaxed state, oil/moisture and exact winding origin. Industry synthesis is not a claim of one SKU; missing essential identity is an unresolved dataset finding. | Supplier declarations; tests; source-machine and clearing records |
| dq_receiver | reference_cuts | Obtain the receiver specification, independent acceptance record, intended recovery, actual legal classification/permissions and functional status. Reject generic claims of recycling approval or waste exemption. | Contract; acceptance; authorised transfer evidence |
| dq_fullperiod | all processes | Cover complete declared shifts/campaigns including failures, Q0, idle, startup/shutdown, cleanup and rework. Disclose sampling, missing periods, uncertainty, stock-vector inheritance and raw net/gross status. Absence requires evidence; unknown is not zero. | Meter/scale records; all lot events; gap register |
| dq_balance | physical and attributed ledgers | Keep independently measured masses, water/oil and relevant element assays; no residual-fitting of two unknowns. Retain V_j and A_j and avoid duplicate source partitions/providers. Historic burdens, current incremental loads and packaging tare remain distinct. | Independent gate balances; assays; cohort vectors; unit conversions |
| dq_method | allocation and utilities | Verify native hard facets and exact reference-property/unit chain; supplier selection remains site-specific. Retain per-exchange causal evidence and common-gate price derivation; no universal factor, range, yield, moisture or avoided-product credit. | Full native record; provider boundary; causal/value evidence; sensitivity |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | dataset | Require every reference qualifier and the single sheep-wool winding-cut boundary. Noils, carding-only waste, spinning fly, garnetting, other species/blends or excluded treatments are uncovered. Preserve actual unapproved process loads instead of omitting them. | un-cpc3-notes-2025; woolmark-spinning-2020; nfc-hard-waste |
| validate_reference | reference_cuts | Use one linked product output at1 kg; Q is the measured first-release net mass with matching EN/ZH definitions and no packaging. ClosingFG, reinspection, dispatch and returns cannot inflate Q. An unresolved core native identity cannot be reported as verified coverage. |  |
| validate_normalization | all inventory rows | Require complete unnormalised raw units and stock/causal attribution before the sole normalization. Check every card/protocol/calculation agrees; no second A/Q, no H denominator and no per-unit Q0 result. |  |
| validate_physical | manufacturing; FG; combined gates | Reconcile independent whole mass, dry wool, free water, oil and actual contaminants; inspect actual relevant elements/species if claimed. Manufacturing Q and FG transfer cancel on consolidation. Never solve both moisture and dust with one residual or equate particulate/COD/VOC indicators with an invented chemical species. |  |
| validate_stocks | all lots | Inspect inherited vectors for every opening/closing WIP and unused non-WIP stock, gross/net flags and original FG/returned cohorts. Keep failed, cleanup and idle burdens; reverse original delivery assignment before actual return/rework attribution. |  |
| validate_packaging | each real packaging article | Require the complete I/P/N/ER/S/EO/W balance, same-article return provenance and supplier-burden reconciliation for bobbins, cones and sacks separately. Add exact real missing components and outgoing flows; no component/tare enters product Q or becomes an automatic credit or duplicate acquisition. |  |
| validate_allocation | each attributed exchange | Verify attributional applicability, actual/virtual subdivision, exchange-specific determining physical causality and only remaining common-gate values at actual state/time. Reject arbitrary mass/economic shares, double supplier allocation or a missing real co-function. | ilcd-allocation-2010 |
| validate_interfaces | native identities and datasets | Match all basename, route/form, species, CAS, geography, medium, type and property restrictions; a query or direct-read success alone is insufficient. Check supply/treatment functions and utility boundaries independently; physical diagnostic outputs and source partitions must not create duplicate providers. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Attributional supply of one specified non-garnetted wool yarn-cut feedstock; not a generic waste-treatment service |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Only the verified sheep-wool winding-cut state and authorised receiver recovery route with complete inherited upstream burden and original first-release basis |
| excluded_use | Noils26140, garnetted stock39213, loose fly, other fibres, legal exemption, certification, zero-burden recycling, avoided virgin-wool claims or automatic full39212 coverage |
| required_metadata | Lot/source machine; input treatment/grease/moisture; first-release Q and original cohorts; native/provider chains; physical and attributed ledgers; stock/return history; receiver/legal acceptance; packaging; causal and residual-value evidence |
| required_quality_disclosure | Core/auxiliary identity gaps; actual coverage/omissions; measurement and stock uncertainty; scientific review state; allocation sensitivity; monitoring and LCIA coverage; source-specific limits |
| update_trigger | Change of source route/species, yarn treatment, receiver specification/legal status, technology/utility boundary, packaging, stocks/return practice, allocation evidence or native identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-notes-2025 | official_guidance | UNSD. CPC Ver.3.0 Explanatory Notes,30June2025. PDF pp117 and199–201. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification titles and adjacent26140/39213 distinction only;39212 has no further note body; no manufacturing or legal approval |
| woolmark-spinning-2020 | handbook | The Woolmark Company. Worsted and woollen spinning — Facilitator Guide,2020. PDF/printed pp230–239, Module9 post-spinning operations. https://www.woolmarklearningcentre.com/globalassets/woolmark-learning-centre/10-resources/facilitator-guides/gd2891-worsted-woollen-spinning-facilitator-guide_2020_final.pdf | Qualitative source winding/clearing/cut formation and prior steam relaxation; contaminant and pneumatic alternatives; no numerical process settings, purity, yields, allocations or current-factory claim |
| nfc-hard-waste | literature | The Natural Fibre Company. Recycling Our Waste and By-Products, undated mill page; retrieved 2026-11-21. https://www.thenaturalfibre.co.uk/our-services/recycling-our-waste-materials/ | First-party market-form distinction: hard waste is small spun-yarn pieces, separately listed from noils/card/raw/bobbin waste; not a100% sheep-wool SKU or authorised industrial recovery specification |
| ilcd-allocation-2010 | official_guidance | European Commission JRC. ILCD Handbook — General guide for LCA, Detailed guidance, first edition March2010, §§7.9.2–7.9.3; PDF pp275–292. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional allocation applicability, actual/virtual subdivision, determining physical causality per exchange and remaining common-gate market value; complete recycling provisions retained; no numeric factor or automatic credit |
| unido-hard-waste | official_guidance | UNIDO. Processing problems and selection of machinery in the woollen and worsted industry, ID/33, 1970, PDF p33 / printed p29, paragraphs 81–85. https://downloads.unido.org/ot/46/85/4685604/00001-10000_02436D.pdf | Historical distinction between soft pre-spinning waste, twisted-thread hard waste and later garnetting; no contemporary site values, product grade, legal status or transfer identity |
| ellis-wool-waste-2013 | literature | Stacey Ellis. Transforming waste: Textile design process intervention: Adding value to wool waste. Massey University, 2013, printed pp13–14, 35, 37 (PDF pp14–15, 36, 38). https://mro.massey.ac.nz/server/api/core/bitstreams/058e9a43-81f9-4afe-b894-b96301b2eafb/content | Independent field observation of received hard spun-yarn waste, auto-winder fault removal and coexistence of wool/blended streams; not proof of this lot's species, finish, modern quantities or receiver/legal acceptance |
