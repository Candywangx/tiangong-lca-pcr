---
pcr_id: pcr.constructions-and-construction-services.construction-services.assembly-and-erection-of-prefabricated-constructions
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Mechanically surface-anchored prefabricated park bench installation services

## 1. Scope and Applicability

This PCR governs first mechanical surface anchoring of one factory-assembled, four-legged freestanding/surface-mount park bench on an accepted compatible existing reinforced-concrete slab. It supplies an installed-bench handover service. The Austin bench is an illustrative route, not a mandatory brand. Its historical 10/2009 guide confirms factory assembly and the mechanical freestanding detail; current project-specific bench and anchor instructions and verified slab compatibility govern actual construction. Cantilever, epoxy anchoring, new slab/caisson/paver construction, onsite furniture fabrication, later maintenance and bench use/end of life are excluded. CPC 3.0 54400 includes street-furniture installation, but this narrower PCR covers only this defined route. Sources: `lf-austin-installation-2009`; `un-cpc3-notes-2025`; `lf-austin-product`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.assembly-and-erection-of-prefabricated-constructions |
| classification_refs | CPC 3.0 54400; proposed narrower relation |
| covered_products | First accepted mechanical surface anchoring of factory-assembled four-legged park benches on compatible existing concrete |
| excluded_products | Cantilever or epoxy systems; new foundations/slabs; onsite seat/support fabrication; unanchored placement; later maintenance |
| representative_product | Austin backed/backless four-legged freestanding/surface-mount bench, supplied complete with ordered arms |
| production_route | Accept slab/design; protect and position bench; remove glides; level; mark/move; drill; compressed-air clear; reposition; mechanically anchor; inspect and close corrections |
| market_state | Complete accepted installation at signed site handover, with declared actual model and anchor configuration |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted mechanical surface anchoring of a complete factory-assembled four-legged park bench |
| How much | 1 Item(s) complete accepted installation |
| How well | Level undamaged bench; all required mechanical anchors installed and fastened under the actual approved design/current instructions; compatible slab verified; corrections closed and handover signed |
| How long or cycle | One first-installation job from received supply and host acceptance through signed handover; no assumed service life or maintenance cycle |
| reference_flow_link | `accepted_installation` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted mechanically surface-anchored prefabricated park bench installation service |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | Actual bench model/length/material/finish/supports/arms; anchor SKUs/count/design/current instructions; slab strength/cure/thickness/condition/reinforcement/edge and spacing compatibility; levelling arrangement; site/date; acceptance/correction evidence; upstream supply and service boundaries |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| count_reference | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Count complete accepted installations only; bench, leg, seat and anchor counts are not installation equivalence. |
| retain_measurements | inventory records | Actual exchange property | Actual documented unit | Retain native mass, count, energy and service measurements. Mass requires measured or traceable SKU masses; do not convert geometry or time to mass/energy without actual evidence. Verify each support property and unit group before final exchange construction; unresolved Energy/Duration or service support cannot be borrowed from count. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Factory-assembled bench and separately supplied mechanical anchor hardware received; existing reinforced slab already constructed and explicitly accepted for actual anchor/bench system |
| starting_condition_role | Upstream supply gates and accepted existing host interface; unknown pre-existing concrete is not default accepted |
| product_classification_scope | Narrow street-furniture installation service subset of CPC 3.0 54400 |
| recursive_input_rule | Any purchased same-category installation contribution is an explicit bounded subcontract input with its actual gate/coverage; do not recursively recreate it or claim a completed installation as an uninstalled bench. |
| upstream_dataset_requirement | Separate upstream bench, hardware, packaging and actual resource/service datasets with geography/time/technology and included transport/energy coverage. Retain unresolved coverage; no fabricated proxy. |
| disclosure | Record host evidence, ownership, actual instructions, receipt/acceptance dates, stock/returns, correction history and all shared asset consumers/periods. Existing slab production is outside this service gate; newly required slab work changes the boundary. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `scope_eligibility` | foreground_system_boundary | This PCR governs first mechanical surface anchoring of one factory-assembled, four-legged freestanding/surface-mount park bench on an accepted compatible existing reinforced-concrete slab. It supplies an installed-bench handover service. The Austin bench is an illustrative route, not a mandatory brand. Its historical 10/2009 guide confirms factory assembly and the mechanical freestanding detail; current project-specific bench and anchor instructions and verified slab compatibility govern actual construction. Cantilever, epoxy anchoring, new slab/caisson/paver construction, onsite furniture fabrication, later maintenance and bench use/end of life are excluded. CPC 3.0 54400 includes street-furniture installation, but this narrower PCR covers only this defined route. Sources: `lf-austin-installation-2009`; `un-cpc3-notes-2025`; `lf-austin-product`. | `un-cpc3-notes-2025`; `lf-austin-installation-2009`; `lf-austin-product` |
| host_gate | bench_install | Confirm actual bench/anchor design, slab condition/strength/cure/thickness and compatible reinforcement, edge distances/spacing before drilling. Historical guide numbers qualify only its system; no universal anchor torque, load test or slab acceptance default is inferred. | `lf-austin-installation-2009` |
| field_integration | bench_install | Join the supplied complete bench, separate anchors/washers and conditional levelling parts at the host interface. Include positioning, drilling, compressed-air clearing, fastening and inspection; do not invent onsite seat/support assembly. | `lf-austin-installation-2009` |
| sharing_scope | resources and logistics | Identify each actual drill/compressor/lift/access asset and service period, every consumer job/node/period including bench_install, and its bounded provider coverage. One local node does not erase shared use on other jobs. |  |
| correction_gate | bench_install | Loose/failed fixings, uneven supports, finish damage or unaccepted concrete block accepted output. Record internal corrections in bench_install and all repeated resource/material use; unresolved defects remain rejects. Major repair, epoxy substitution or new host construction requires boundary review. | `lf-austin-installation-2009` |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| bench_install | Mechanical bench-to-slab assembly integration and acceptance | required | Compatible accepted existing slab and actual mechanical system; conditional materials/services follow recorded activity | Own component interface, drilling/cleaning/fastening, inspection and closed rework loop; supplier returns and actual waste exits originate here | 1 Item(s) accepted installation |


### Process: Mechanical bench-to-slab assembly integration and acceptance (`bench_install`)

#### Inputs

##### Product flows

###### Factory-assembled four-legged park bench at supply gate (`assembled_bench`)

The complete bench arrives with its specified supports and ordered arms already attached. Preserve actual model, length, materials, finish, support and arm configuration; do not substitute raw metal/wood or fabricate component assembly onsite.

- Selected flow: Factory-assembled four-legged park bench at supply gate
- Flow property / unit: Number of items / Item(s)
- Amount rule: Record complete benches entering the job, including replacements, with serial/lot and fate reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `lf-austin-installation-2009`; `lf-austin-product`

Range evidence need: Obtain delivery/acceptance and replacement counts for this configuration and comparable jobs before deriving a supply-to-accepted-output interval.

###### Mechanical sleeve-anchor fixing products (`mechanical_sleeve_anchors`)

Actual approved mechanical sleeve-anchor products, identified by their individual supplier SKU, material/state and supply-package contents. Record the complete fixing product as supplied; do not add another manufacturing burden for its factory-included components. This card covers anchors only, not separate washer products or an undifferentiated hardware total. Activate only for actual independently supplied fixing products in the approved mechanical route; no epoxy anchoring is introduced. Range evidence need: obtain the actual anchor design, fixing count, same-SKU mass evidence, independent receipt/stock/return/waste records and uncertainty before deriving anchor-only bounds. Historical guide dimensions are not a consumption factor.

- Selected flow: Mechanical sleeve-anchor fixing products
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Record this anchor SKU's gross received/issued mass, with vehicle/container tare removed and before outward usable returns. Keep installed, discarded, actual usable outward returns and retained closing stock in this same SKU/state ledger, then normalize attributable job totals once by the accepted installation count. Do not copy the former combined hardware total into this card.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `lf-austin-installation-2009`

###### Separately supplied stainless-steel anchor washers (`stainless_anchor_washers`)

Actual stainless-steel washer products supplied separately for the approved mechanical anchors. Identify each washer SKU and supply gate; distinguish these from conditional levelling washers/shims in levelling_shim / levelling_washer. A washer already included in the complete anchor SKU remains a nonadditive BOM observation under that anchor, with no second washer-supply exchange. Actual supply-package evidence determines whether this separate exchange occurs. Range evidence need: obtain separately supplied washer counts, same-SKU masses, receipts, installed/return/waste/closing records and uncertainty; do not allocate a guessed fraction of a combined hardware mass.

- Selected flow: Separately supplied stainless-steel anchor washers
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Record independently received/issued washer mass by its own SKU, before outward usable returns and excluding washers already covered by the anchor product. Reconcile installed, waste, actual outward usable returns and closing stock separately; normalize this independently measured attributable total once by the accepted installation count.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `lf-austin-installation-2009`

###### Conditional stainless-steel levelling shim (`levelling_shim`)

Stainless-steel shim supplied separately for actual approved bench levelling; not an anchor washer. Activate only for the evidenced actual independent product/service/dispatch. Record each actual SKU/state/provider or receiver separately; different actual identities are not merged into one exchange. A complete mixed carrier or supplied assembly remains whole; a constituent still included within it is not a second exchange. No occurrence, chemical composition, return/recovery fraction or quantity is assumed.

- Selected flow: Conditional stainless-steel levelling shim
- Flow property / unit: Mass / kg
- Amount rule: Measure this child independently at receipt/issue, net of container tare and before outward usable returns; reconcile installed/consumed, actual waste, outward returns and closing stock by the same SKU/state. Retain stock withdrawals attributable to this job. Included upstream packaging retains its physical custody/exit ledger without a second product-supply burden. Normalize this independently attributable job total once by N, the complete accepted installation count; all correction attempts remain included and N = 0 blocks normalization. Never copy or divide a former family total into this child. Range evidence need: independently collected quantities, actual identity/state, conversion and measurement uncertainty, and comparable observations for this child; no family interval or default coefficient is inherited.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

###### Conditional additional stainless-steel levelling washer (`levelling_washer`)

Additional stainless-steel washer actually used as an approved levelling part; distinguish its physical quantity from anchor washers and complete fixing packages. Activate only for the evidenced actual independent product/service/dispatch. Record each actual SKU/state/provider or receiver separately; different actual identities are not merged into one exchange. A complete mixed carrier or supplied assembly remains whole; a constituent still included within it is not a second exchange. No occurrence, chemical composition, return/recovery fraction or quantity is assumed.

- Selected flow: Conditional additional stainless-steel levelling washer
- Flow property / unit: Mass / kg
- Amount rule: Measure this child independently at receipt/issue, net of container tare and before outward usable returns; reconcile installed/consumed, actual waste, outward returns and closing stock by the same SKU/state. Retain stock withdrawals attributable to this job. Included upstream packaging retains its physical custody/exit ledger without a second product-supply burden. Normalize this independently attributable job total once by N, the complete accepted installation count; all correction attempts remain included and N = 0 blocks normalization. Never copy or divide a former family total into this child. Range evidence need: independently collected quantities, actual identity/state, conversion and measurement uncertainty, and comparable observations for this child; no family interval or default coefficient is inherited.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

###### Separately supplied protective wrapping film (`packaging_wrap`)

Actual separately supplied wrapping-film product identified by material, SKU and received condition. Activate only for the evidenced actual independent product/service/dispatch. Record each actual SKU/state/provider or receiver separately; different actual identities are not merged into one exchange. A complete mixed carrier or supplied assembly remains whole; a constituent still included within it is not a second exchange. No occurrence, chemical composition, return/recovery fraction or quantity is assumed.

- Selected flow: Separately supplied protective wrapping film
- Flow property / unit: Mass / kg
- Amount rule: Measure this child independently at receipt/issue, net of container tare and before outward usable returns; reconcile installed/consumed, actual waste, outward returns and closing stock by the same SKU/state. Retain stock withdrawals attributable to this job. Included upstream packaging retains its physical custody/exit ledger without a second product-supply burden. Normalize this independently attributable job total once by N, the complete accepted installation count; all correction attempts remain included and N = 0 blocks normalization. Never copy or divide a former family total into this child. Range evidence need: independently collected quantities, actual identity/state, conversion and measurement uncertainty, and comparable observations for this child; no family interval or default coefficient is inherited.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

###### Separately supplied protective foam pad (`packaging_foam`)

Actual separately supplied protective foam-pad product identified by polymer/formulation, SKU and received condition. Activate only for the evidenced actual independent product/service/dispatch. Record each actual SKU/state/provider or receiver separately; different actual identities are not merged into one exchange. A complete mixed carrier or supplied assembly remains whole; a constituent still included within it is not a second exchange. No occurrence, chemical composition, return/recovery fraction or quantity is assumed.

- Selected flow: Separately supplied protective foam pad
- Flow property / unit: Mass / kg
- Amount rule: Measure this child independently at receipt/issue, net of container tare and before outward usable returns; reconcile installed/consumed, actual waste, outward returns and closing stock by the same SKU/state. Retain stock withdrawals attributable to this job. Included upstream packaging retains its physical custody/exit ledger without a second product-supply burden. Normalize this independently attributable job total once by N, the complete accepted installation count; all correction attempts remain included and N = 0 blocks normalization. Never copy or divide a former family total into this child. Range evidence need: independently collected quantities, actual identity/state, conversion and measurement uncertainty, and comparable observations for this child; no family interval or default coefficient is inherited.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

###### Separately supplied transport pallet (`packaging_pallet`)

Actual separately supplied complete pallet product identified by material, SKU and received condition; do not split the complete pallet into duplicate constituent supplies. Activate only for the evidenced actual independent product/service/dispatch. Record each actual SKU/state/provider or receiver separately; different actual identities are not merged into one exchange. A complete mixed carrier or supplied assembly remains whole; a constituent still included within it is not a second exchange. No occurrence, chemical composition, return/recovery fraction or quantity is assumed.

- Selected flow: Separately supplied transport pallet
- Flow property / unit: Mass / kg
- Amount rule: Measure this child independently at receipt/issue, net of container tare and before outward usable returns; reconcile installed/consumed, actual waste, outward returns and closing stock by the same SKU/state. Retain stock withdrawals attributable to this job. Included upstream packaging retains its physical custody/exit ledger without a second product-supply burden. Normalize this independently attributable job total once by N, the complete accepted installation count; all correction attempts remain included and N = 0 blocks normalization. Never copy or divide a former family total into this child. Range evidence need: independently collected quantities, actual identity/state, conversion and measurement uncertainty, and comparable observations for this child; no family interval or default coefficient is inherited.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

###### Actual electricity for drilling and field tools (`electricity`)

Record site/provider/voltage and metering boundary for electric drilling, fastening, charging and cleanup. Compressor or hired-service electricity is included here only when excluded from the corresponding service dataset.

- Selected flow: Actual electricity for drilling and field tools
- Flow property / unit: Energy / kWh
- Amount rule: Meter attributable electricity; separate direct meters from documented shared allocation and included service energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_resources`

Range evidence need: Require meter records, task duration, equipment operating state and all shared consumers; neither power rating alone nor an assumed Energy support identity defines a valid range.

###### Compressed-air hole-cleaning service (`compressed_air_service`)

Hole clearing with compressed air is an explicit installation task. Record compressor/air supply identity, pressure/delivery basis, effective cleaning time and energy coverage; characterize entrained drilling releases separately. Time is a provider service denominator, not conversion of air volume to time.

- Selected flow: Compressed-air hole-cleaning service
- Flow property / unit: Duration / h
- Amount rule: Record actual cleaning service hours and documented compressor provision burdens; This card has Duration/h only and applies to an actual complete per-hour compressor-cleaning provision service. Retain pressure, air volume and operating/idle observations as auxiliary data; they are not alternate exchange units or an assumed conversion. Other actual provision references and uncovered own-asset/energy burdens require independent children under atomic_equipment_services before final construction.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_resources`
- Sources: `lf-austin-installation-2009`

Range evidence need: Require measured operating/idle time, air-delivery evidence and actual provider service boundary; no generic air quantity, time or energy factor is supported.

###### Conditional complete hourly drilling-tool provision service (`drill_provision`)

One actual drilling-tool provision function, explicitly referenced to one service hour with declared asset lifecycle, maintenance/wear and energy coverage. Activate only for the evidenced actual independent product/service/dispatch. Record each actual SKU/state/provider or receiver separately; different actual identities are not merged into one exchange. A complete mixed carrier or supplied assembly remains whole; a constituent still included within it is not a second exchange. No occurrence, chemical composition, return/recovery fraction or quantity is assumed.

- Selected flow: Conditional complete hourly drilling-tool provision service
- Flow property / unit: Duration / h
- Amount rule: Record attributable actual service hours for this one provision function, with service boundary and all-consumer causal allocation. This card applies only to a real complete per-hour provision dataset; other service references or uncovered asset/material/energy burdens require separately identified children under the refinement rule, not an invented time conversion. Normalize this independently attributable job total once by N, the complete accepted installation count; all correction attempts remain included and N = 0 blocks normalization. Never copy or divide a former family total into this child. Range evidence need: independently collected quantities, actual identity/state, conversion and measurement uncertainty, and comparable observations for this child; no family interval or default coefficient is inherited.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_resources`

###### Conditional complete hourly lifting provision service (`lifting_provision`)

One actual lifting provision function, explicitly referenced to one service hour with declared asset lifecycle, maintenance/wear and energy coverage. Manual handling alone does not activate a powered lifting service. Activate only for the evidenced actual independent product/service/dispatch. Record each actual SKU/state/provider or receiver separately; different actual identities are not merged into one exchange. A complete mixed carrier or supplied assembly remains whole; a constituent still included within it is not a second exchange. No occurrence, chemical composition, return/recovery fraction or quantity is assumed.

- Selected flow: Conditional complete hourly lifting provision service
- Flow property / unit: Duration / h
- Amount rule: Record attributable actual service hours for this one provision function, with service boundary and all-consumer causal allocation. This card applies only to a real complete per-hour provision dataset; other service references or uncovered asset/material/energy burdens require separately identified children under the refinement rule, not an invented time conversion. Normalize this independently attributable job total once by N, the complete accepted installation count; all correction attempts remain included and N = 0 blocks normalization. Never copy or divide a former family total into this child. Range evidence need: independently collected quantities, actual identity/state, conversion and measurement uncertainty, and comparable observations for this child; no family interval or default coefficient is inherited.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_resources`

###### Conditional complete hourly access-equipment provision service (`access_provision`)

One actual access-equipment provision function, explicitly referenced to one service hour with declared asset lifecycle, maintenance/wear and energy coverage. Activate only for the evidenced actual independent product/service/dispatch. Record each actual SKU/state/provider or receiver separately; different actual identities are not merged into one exchange. A complete mixed carrier or supplied assembly remains whole; a constituent still included within it is not a second exchange. No occurrence, chemical composition, return/recovery fraction or quantity is assumed.

- Selected flow: Conditional complete hourly access-equipment provision service
- Flow property / unit: Duration / h
- Amount rule: Record attributable actual service hours for this one provision function, with service boundary and all-consumer causal allocation. This card applies only to a real complete per-hour provision dataset; other service references or uncovered asset/material/energy burdens require separately identified children under the refinement rule, not an invented time conversion. Normalize this independently attributable job total once by N, the complete accepted installation count; all correction attempts remain included and N = 0 blocks normalization. Never copy or divide a former family total into this child. Range evidence need: independently collected quantities, actual identity/state, conversion and measurement uncertainty, and comparable observations for this child; no family interval or default coefficient is inherited.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_resources`

###### Conditional localized finish-damage repair material (`touchup_material`)

Only actual minor mechanical handling damage closed before handover activates this card. Identify approved touch-up formulation, amount and curing/cleaning requirements. Substantial refinishing or chemical anchoring requires boundary review outside this dry mechanical route.

- Selected flow: Conditional localized finish-damage repair material
- Flow property / unit: Mass / kg
- Amount rule: Measure actual consumed repair product; retain its solids/solvent composition and disposal. Recorded absence is zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_repairs`
- Sources: `lf-austin-installation-2009`

Range evidence need: Actual approved product, damage area, measured use and manufacturer composition are required; no normal painting consumption is assumed.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted mechanically surface-anchored prefabricated park bench installation service (`accepted_installation`)

One complete actual bench is level, undamaged and mechanically fixed at every required connection on accepted compatible existing reinforced concrete. All corrections are closed and signed site handover records identify bench and anchors.

- Selected flow: Accepted mechanically surface-anchored prefabricated park bench installation service
- Flow property / unit: Number of items / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `lf-austin-installation-2009`

Range evidence need: Exactly one accepted installation defines the reference, not a yield range; obtain job acceptance/reject histories to quantify acceptance uncertainty.

###### Complete benches returned to supplier after installation rejection or as usable surplus (`bench_returns`)

A complete bench leaving bench_install for supplier return has its condition, serial number, actual receiving party custody acknowledgement and transfer record. Installation rejection is distinct from supplier refusal to receive it. Confirm its actual usable/returnable product status; if actually waste, identify the corresponding actual waste child under atomic_discarded_materials instead. It is not an accepted installed output. Retained bench stock or an unreceived proposed return is not an outbound product exchange.

- Selected flow: Complete benches returned to supplier after installation rejection or as usable surplus
- Flow property / unit: Number of items / Item(s)
- Amount rule: Record actual complete benches transferred out and connect them to their receipt and rejection event without avoided-production credit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Require actual return/reject records by cause and recipient; no universal return rate is available.

###### Removed usable nylon glide transferred for reuse (`usable_nylon_glides`)

Actual removed nylon glide in usable state at acknowledged outward custody transfer; it was part of the supplied bench, not a new glide input. Activate only for the evidenced actual independent product/service/dispatch. Record each actual SKU/state/provider or receiver separately; different actual identities are not merged into one exchange. A complete mixed carrier or supplied assembly remains whole; a constituent still included within it is not a second exchange. No occurrence, chemical composition, return/recovery fraction or quantity is assumed.

- Selected flow: Removed usable nylon glide transferred for reuse
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this actual outward transfer in its stated unit, identify source lot, state, recipient and acknowledged custody/treatment. Retained stock and a planned return are not outward exchanges. Pair this fate once with source receipts/removal; no net-purchase subtraction plus explicit return, avoided-production credit, carrier/contents duplication or guessed recovery. Normalize this independently attributable job total once by N, the complete accepted installation count; all correction attempts remain included and N = 0 blocks normalization. Never copy or divide a former family total into this child. Range evidence need: independently collected quantities, actual identity/state, conversion and measurement uncertainty, and comparable observations for this child; no family interval or default coefficient is inherited.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

###### Unused usable sleeve anchor transferred outward (`unused_anchor_return`)

Actual unused complete sleeve-anchor SKU transferred outward in usable state. Activate only for the evidenced actual independent product/service/dispatch. Record each actual SKU/state/provider or receiver separately; different actual identities are not merged into one exchange. A complete mixed carrier or supplied assembly remains whole; a constituent still included within it is not a second exchange. No occurrence, chemical composition, return/recovery fraction or quantity is assumed.

- Selected flow: Unused usable sleeve anchor transferred outward
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this actual outward transfer in its stated unit, identify source lot, state, recipient and acknowledged custody/treatment. Retained stock and a planned return are not outward exchanges. Pair this fate once with source receipts/removal; no net-purchase subtraction plus explicit return, avoided-production credit, carrier/contents duplication or guessed recovery. Normalize this independently attributable job total once by N, the complete accepted installation count; all correction attempts remain included and N = 0 blocks normalization. Never copy or divide a former family total into this child. Range evidence need: independently collected quantities, actual identity/state, conversion and measurement uncertainty, and comparable observations for this child; no family interval or default coefficient is inherited.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

###### Unused usable stainless-steel anchor washer transferred outward (`unused_anchor_washer_return`)

Actual unused separately supplied stainless-steel anchor washer transferred outward in usable state; no second return of a component still inside a returned complete anchor. Activate only for the evidenced actual independent product/service/dispatch. Record each actual SKU/state/provider or receiver separately; different actual identities are not merged into one exchange. A complete mixed carrier or supplied assembly remains whole; a constituent still included within it is not a second exchange. No occurrence, chemical composition, return/recovery fraction or quantity is assumed.

- Selected flow: Unused usable stainless-steel anchor washer transferred outward
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this actual outward transfer in its stated unit, identify source lot, state, recipient and acknowledged custody/treatment. Retained stock and a planned return are not outward exchanges. Pair this fate once with source receipts/removal; no net-purchase subtraction plus explicit return, avoided-production credit, carrier/contents duplication or guessed recovery. Normalize this independently attributable job total once by N, the complete accepted installation count; all correction attempts remain included and N = 0 blocks normalization. Never copy or divide a former family total into this child. Range evidence need: independently collected quantities, actual identity/state, conversion and measurement uncertainty, and comparable observations for this child; no family interval or default coefficient is inherited.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

###### Unused usable stainless-steel levelling shim transferred outward (`unused_shim_return`)

Actual unused stainless-steel levelling shim transferred outward in usable state. Activate only for the evidenced actual independent product/service/dispatch. Record each actual SKU/state/provider or receiver separately; different actual identities are not merged into one exchange. A complete mixed carrier or supplied assembly remains whole; a constituent still included within it is not a second exchange. No occurrence, chemical composition, return/recovery fraction or quantity is assumed.

- Selected flow: Unused usable stainless-steel levelling shim transferred outward
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this actual outward transfer in its stated unit, identify source lot, state, recipient and acknowledged custody/treatment. Retained stock and a planned return are not outward exchanges. Pair this fate once with source receipts/removal; no net-purchase subtraction plus explicit return, avoided-production credit, carrier/contents duplication or guessed recovery. Normalize this independently attributable job total once by N, the complete accepted installation count; all correction attempts remain included and N = 0 blocks normalization. Never copy or divide a former family total into this child. Range evidence need: independently collected quantities, actual identity/state, conversion and measurement uncertainty, and comparable observations for this child; no family interval or default coefficient is inherited.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

###### Unused usable stainless-steel levelling washer transferred outward (`unused_levelling_washer_return`)

Actual unused stainless-steel levelling washer transferred outward in usable state; distinguish anchor-washer receipts. Activate only for the evidenced actual independent product/service/dispatch. Record each actual SKU/state/provider or receiver separately; different actual identities are not merged into one exchange. A complete mixed carrier or supplied assembly remains whole; a constituent still included within it is not a second exchange. No occurrence, chemical composition, return/recovery fraction or quantity is assumed.

- Selected flow: Unused usable stainless-steel levelling washer transferred outward
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this actual outward transfer in its stated unit, identify source lot, state, recipient and acknowledged custody/treatment. Retained stock and a planned return are not outward exchanges. Pair this fate once with source receipts/removal; no net-purchase subtraction plus explicit return, avoided-production credit, carrier/contents duplication or guessed recovery. Normalize this independently attributable job total once by N, the complete accepted installation count; all correction attempts remain included and N = 0 blocks normalization. Never copy or divide a former family total into this child. Range evidence need: independently collected quantities, actual identity/state, conversion and measurement uncertainty, and comparable observations for this child; no family interval or default coefficient is inherited.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

###### Usable protective wrapping film transferred outward (`usable_wrap_return`)

Actual usable wrapping-film product transferred outward for reuse, by material/SKU and recipient. Activate only for the evidenced actual independent product/service/dispatch. Record each actual SKU/state/provider or receiver separately; different actual identities are not merged into one exchange. A complete mixed carrier or supplied assembly remains whole; a constituent still included within it is not a second exchange. No occurrence, chemical composition, return/recovery fraction or quantity is assumed.

- Selected flow: Usable protective wrapping film transferred outward
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this actual outward transfer in its stated unit, identify source lot, state, recipient and acknowledged custody/treatment. Retained stock and a planned return are not outward exchanges. Pair this fate once with source receipts/removal; no net-purchase subtraction plus explicit return, avoided-production credit, carrier/contents duplication or guessed recovery. Normalize this independently attributable job total once by N, the complete accepted installation count; all correction attempts remain included and N = 0 blocks normalization. Never copy or divide a former family total into this child. Range evidence need: independently collected quantities, actual identity/state, conversion and measurement uncertainty, and comparable observations for this child; no family interval or default coefficient is inherited.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

###### Usable protective foam pad transferred outward (`usable_foam_return`)

Actual usable foam-pad product transferred outward for reuse, by polymer/formulation/SKU and recipient. Activate only for the evidenced actual independent product/service/dispatch. Record each actual SKU/state/provider or receiver separately; different actual identities are not merged into one exchange. A complete mixed carrier or supplied assembly remains whole; a constituent still included within it is not a second exchange. No occurrence, chemical composition, return/recovery fraction or quantity is assumed.

- Selected flow: Usable protective foam pad transferred outward
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this actual outward transfer in its stated unit, identify source lot, state, recipient and acknowledged custody/treatment. Retained stock and a planned return are not outward exchanges. Pair this fate once with source receipts/removal; no net-purchase subtraction plus explicit return, avoided-production credit, carrier/contents duplication or guessed recovery. Normalize this independently attributable job total once by N, the complete accepted installation count; all correction attempts remain included and N = 0 blocks normalization. Never copy or divide a former family total into this child. Range evidence need: independently collected quantities, actual identity/state, conversion and measurement uncertainty, and comparable observations for this child; no family interval or default coefficient is inherited.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

###### Usable complete transport pallet transferred outward (`usable_pallet_return`)

Actual complete usable pallet transferred outward at acknowledged custody handover. Activate only for the evidenced actual independent product/service/dispatch. Record each actual SKU/state/provider or receiver separately; different actual identities are not merged into one exchange. A complete mixed carrier or supplied assembly remains whole; a constituent still included within it is not a second exchange. No occurrence, chemical composition, return/recovery fraction or quantity is assumed.

- Selected flow: Usable complete transport pallet transferred outward
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this actual outward transfer in its stated unit, identify source lot, state, recipient and acknowledged custody/treatment. Retained stock and a planned return are not outward exchanges. Pair this fate once with source receipts/removal; no net-purchase subtraction plus explicit return, avoided-production credit, carrier/contents duplication or guessed recovery. Normalize this independently attributable job total once by N, the complete accepted installation count; all correction attempts remain included and N = 0 blocks normalization. Never copy or divide a former family total into this child. Range evidence need: independently collected quantities, actual identity/state, conversion and measurement uncertainty, and comparable observations for this child; no family interval or default coefficient is inherited.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

##### Waste flows

###### Separately dispatched failed sleeve-anchor waste (`failed_anchor_waste`)

Actual failed sleeve-anchor product dispatched as its own identified waste stream; include retained components in the whole assembly mass. Activate only for the evidenced actual independent product/service/dispatch. Record each actual SKU/state/provider or receiver separately; different actual identities are not merged into one exchange. A complete mixed carrier or supplied assembly remains whole; a constituent still included within it is not a second exchange. No occurrence, chemical composition, return/recovery fraction or quantity is assumed.

- Selected flow: Separately dispatched failed sleeve-anchor waste
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this actual outward transfer in its stated unit, identify source lot, state, recipient and acknowledged custody/treatment. Retained stock and a planned return are not outward exchanges. Pair this fate once with source receipts/removal; no net-purchase subtraction plus explicit return, avoided-production credit, carrier/contents duplication or guessed recovery. Normalize this independently attributable job total once by N, the complete accepted installation count; all correction attempts remain included and N = 0 blocks normalization. Never copy or divide a former family total into this child. Range evidence need: independently collected quantities, actual identity/state, conversion and measurement uncertainty, and comparable observations for this child; no family interval or default coefficient is inherited.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

###### Separately dispatched damaged nylon-glide waste (`damaged_glide_waste`)

Actual damaged nylon glide dispatched as its own identified waste stream. Activate only for the evidenced actual independent product/service/dispatch. Record each actual SKU/state/provider or receiver separately; different actual identities are not merged into one exchange. A complete mixed carrier or supplied assembly remains whole; a constituent still included within it is not a second exchange. No occurrence, chemical composition, return/recovery fraction or quantity is assumed.

- Selected flow: Separately dispatched damaged nylon-glide waste
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this actual outward transfer in its stated unit, identify source lot, state, recipient and acknowledged custody/treatment. Retained stock and a planned return are not outward exchanges. Pair this fate once with source receipts/removal; no net-purchase subtraction plus explicit return, avoided-production credit, carrier/contents duplication or guessed recovery. Normalize this independently attributable job total once by N, the complete accepted installation count; all correction attempts remain included and N = 0 blocks normalization. Never copy or divide a former family total into this child. Range evidence need: independently collected quantities, actual identity/state, conversion and measurement uncertainty, and comparable observations for this child; no family interval or default coefficient is inherited.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

###### Separately dispatched spent touch-up container waste (`spent_repair_container`)

Actual spent container of the approved minor touch-up formulation at its receiving gate; include retained residue within the measured whole carrier, without a duplicate residue exchange. Activate only for the evidenced actual independent product/service/dispatch. Record each actual SKU/state/provider or receiver separately; different actual identities are not merged into one exchange. A complete mixed carrier or supplied assembly remains whole; a constituent still included within it is not a second exchange. No occurrence, chemical composition, return/recovery fraction or quantity is assumed.

- Selected flow: Separately dispatched spent touch-up container waste
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this actual outward transfer in its stated unit, identify source lot, state, recipient and acknowledged custody/treatment. Retained stock and a planned return are not outward exchanges. Pair this fate once with source receipts/removal; no net-purchase subtraction plus explicit return, avoided-production credit, carrier/contents duplication or guessed recovery. Normalize this independently attributable job total once by N, the complete accepted installation count; all correction attempts remain included and N = 0 blocks normalization. Never copy or divide a former family total into this child. Range evidence need: independently collected quantities, actual identity/state, conversion and measurement uncertainty, and comparable observations for this child; no family interval or default coefficient is inherited.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

###### Separately dispatched protective wrapping-film waste (`waste_wrap`)

Actual separately dispatched wrapping-film waste, identified by material, contamination state and receiver. Activate only for the evidenced actual independent product/service/dispatch. Record each actual SKU/state/provider or receiver separately; different actual identities are not merged into one exchange. A complete mixed carrier or supplied assembly remains whole; a constituent still included within it is not a second exchange. No occurrence, chemical composition, return/recovery fraction or quantity is assumed.

- Selected flow: Separately dispatched protective wrapping-film waste
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this actual outward transfer in its stated unit, identify source lot, state, recipient and acknowledged custody/treatment. Retained stock and a planned return are not outward exchanges. Pair this fate once with source receipts/removal; no net-purchase subtraction plus explicit return, avoided-production credit, carrier/contents duplication or guessed recovery. Normalize this independently attributable job total once by N, the complete accepted installation count; all correction attempts remain included and N = 0 blocks normalization. Never copy or divide a former family total into this child. Range evidence need: independently collected quantities, actual identity/state, conversion and measurement uncertainty, and comparable observations for this child; no family interval or default coefficient is inherited.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

###### Separately dispatched protective foam-pad waste (`waste_foam`)

Actual separately dispatched foam-pad waste, identified by polymer/formulation, contamination state and receiver. Activate only for the evidenced actual independent product/service/dispatch. Record each actual SKU/state/provider or receiver separately; different actual identities are not merged into one exchange. A complete mixed carrier or supplied assembly remains whole; a constituent still included within it is not a second exchange. No occurrence, chemical composition, return/recovery fraction or quantity is assumed.

- Selected flow: Separately dispatched protective foam-pad waste
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this actual outward transfer in its stated unit, identify source lot, state, recipient and acknowledged custody/treatment. Retained stock and a planned return are not outward exchanges. Pair this fate once with source receipts/removal; no net-purchase subtraction plus explicit return, avoided-production credit, carrier/contents duplication or guessed recovery. Normalize this independently attributable job total once by N, the complete accepted installation count; all correction attempts remain included and N = 0 blocks normalization. Never copy or divide a former family total into this child. Range evidence need: independently collected quantities, actual identity/state, conversion and measurement uncertainty, and comparable observations for this child; no family interval or default coefficient is inherited.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

###### Separately dispatched complete transport-pallet waste (`waste_pallet`)

Actual separately dispatched complete pallet waste, identified by material, contamination state and receiver; its constituent materials are not additional waste quantities. Activate only for the evidenced actual independent product/service/dispatch. Record each actual SKU/state/provider or receiver separately; different actual identities are not merged into one exchange. A complete mixed carrier or supplied assembly remains whole; a constituent still included within it is not a second exchange. No occurrence, chemical composition, return/recovery fraction or quantity is assumed.

- Selected flow: Separately dispatched complete transport-pallet waste
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this actual outward transfer in its stated unit, identify source lot, state, recipient and acknowledged custody/treatment. Retained stock and a planned return are not outward exchanges. Pair this fate once with source receipts/removal; no net-purchase subtraction plus explicit return, avoided-production credit, carrier/contents duplication or guessed recovery. Normalize this independently attributable job total once by N, the complete accepted installation count; all correction attempts remain included and N = 0 blocks normalization. Never copy or divide a former family total into this child. Range evidence need: independently collected quantities, actual identity/state, conversion and measurement uncertainty, and comparable observations for this child; no family interval or default coefficient is inherited.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

###### Captured concrete drilling debris and dust (`captured_drilling_dust`)

Drilling and compressed-air clearing generate debris from the existing slab. Record captured material, particle/composition evidence and actual waste destination; existing slab construction burden is not a new material input.

- Selected flow: Captured concrete drilling debris and dust
- Flow property / unit: Mass / kg
- Amount rule: Measure net as-collected concrete-debris mass in kg at its actual treatment transfer, excluding container tare. Record moisture and any dry-solids mass as auxiliary evidence, not a second dry/wet exchange view. Distinguish this actual captured carrier from airborne particulate and other dispatched waste to avoid duplicate release.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`
- Sources: `lf-austin-installation-2009`

Range evidence need: Need actual bore geometry, concrete characterization, capture method and measured debris; hole dimensions alone do not establish mass without supported density and capture evidence.

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| retain_corrections | bench_install | Keep all installation attempts, drilling/clearing, failed anchors and minor repair burdens associated with the accepted job; exclude unresolved rejects from accepted counts. Internal correction is a loop within bench_install, not a second successful product. Trace usable supplier returns, stock and discard separately; no assumed recovery or avoided-production credits. |  |
| shared_attribution | shared resources | Allocate metered or provider-documented resource burdens with actual causal service time/load evidence over the complete asset consumer ledger and stated period; enumerate this job and other consumer nodes/jobs/periods. Disclose chosen driver and unallocated balance. If driver evidence is absent keep attribution incomplete; no default equal share or invented asset lifetime. |  |
| coverage_overlap | materials and service boundaries | Use one owner for each physical event and each upstream burden. A gross receipt with explicit outward return must not also subtract that return from purchases. Opening/closing stock reconciliation is separate from crossed-boundary returns. Split provider-included electricity/fuel/air/equipment/transport from separately metered exchanges; never add both. |  |
| no_coproduct_default | outgoing usable products | Usable glides/packaging/hardware and supplier-returned benches are documented custody exits, not automatically economic co-products. Retain job burdens without substitution credit; any actual multi-output attribution requires separately evidenced review. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_materials | bench_install | Bench hardware shims packaging receipts and use | Receipt and material ledger |job_id; model; serial_lot; sku; actual_configuration; supply_gate; received_count; measured_mass; unit_mass_basis; opening_stock; closing_stock; installed; damaged; return_id; upstream_coverage; flow_row_id; supplier_package_id; supplied_component_membership; supplier_included_component_ids; material_state; same_SKU_mass_evidence; native_record_unit; original_hardware_total_audit_ref; flow_row_id; actual_child_id; family_role; identity_evidence; material_or_service_state; property_name; exchange_unit; independent_quantity; quantity_basis; conversion_evidence; owner_id; source_lot; recipient_or_medium; coverage_evidence; activation_evidence; absence_evidence; uncertainty; reconciliation_status; range_evidence |Record gross job-boundary hardware/shim receipts/issues, then reconcile installed, wasted, actual outward returns and closing stock separately without netting the same return from the input. Use calibrated weighing or supplier SKU masses. Packaging already included upstream stays in the custody/exit ledger without a second supply exchange; keep actual mass. Record glides removed from bench without inventing a separate new glide input. Normalize attributable job totals by accepted complete installation count; reconcile failed attempts. For mechanical_sleeve_anchors and stainless_anchor_washers, each physical line has one flow_row_id, SKU/state, supplier package and independently measured or traceable kg quantity. Retain actual count as an auxiliary observation only, converting it to kg solely with the same-SKU mass evidence when required. Record package/BOM membership so a factory-included washer is not purchased again; levelling_shim / levelling_washer retain separate levelling-use evidence. The previous combined hardware quantity is audit-only and never a second exchange or a quantity copied into each child. Maintain the actual child register for this node and protocol. Each line identifies one independent product/service/dispatch/substance, one explicit property/unit, independent raw quantity and conversion, actual state/gate/medium, owner, time and evidence. Retain all original material/activity/exit categories and conditional absence checks. Former family totals are nonexchange audit observations only; never copy them to each child or sum heterogeneous units as an exchange. No normal default quantity or occurrence is created by a conditional card. | Item(s); kg | Each receipt/use/stock change | Entire first-installation job including corrections | Actual job and supplier gates | per reference flow | Traceable invoices, scale checks, SKU weights, stock/transfer records and configuration match |
| cp_resources | bench_install | Electricity compressed air shared assets and services | Meters and service ledger |job_id; asset_id; provider; meter_start; meter_end; native_unit; operating_hours; idle_hours; air_delivery; pressure; service_period; consumer_id; consumer_driver; total_driver; included_energy; maintenance_coverage; flow_row_id; actual_child_id; family_role; identity_evidence; material_or_service_state; property_name; exchange_unit; independent_quantity; quantity_basis; conversion_evidence; owner_id; source_lot; recipient_or_medium; coverage_evidence; activation_evidence; absence_evidence; uncertainty; reconciliation_status; range_evidence |Meter direct use; record compressor cleaning and actual lifting/tool sessions. Enumerate every consumer and period in each shared ledger; document causal driver and reconciliation to total burden. Preserve actual air delivery and provider units. Include electricity once according to service coverage; divide job-attributable totals by accepted count. Maintain the actual child register for this node and protocol. Each line identifies one independent product/service/dispatch/substance, one explicit property/unit, independent raw quantity and conversion, actual state/gate/medium, owner, time and evidence. Retain all original material/activity/exit categories and conditional absence checks. Former family totals are nonexchange audit observations only; never copy them to each child or sum heterogeneous units as an exchange. No normal default quantity or occurrence is created by a conditional card. | kWh; h; actual provider units | Every task/session and shared period close | Full job and complete relevant shared-service periods | Actual site/job plus every external consumer of shared assets | per reference flow | Meter calibration, compressor/provider records, task logs, all-consumer ledger and overlap/driver evidence |
| cp_logistics | bench_install | Material return and waste freight | Route and cargo records |job_id; leg_id; carrier; vehicle; origin; destination; loaded_distance; actual_cargo_mass; load_share; empty_leg; transfer_id; upstream_transport_coverage; flow_row_id; actual_child_id; family_role; identity_evidence; material_or_service_state; property_name; exchange_unit; independent_quantity; quantity_basis; conversion_evidence; owner_id; source_lot; recipient_or_medium; coverage_evidence; activation_evidence; absence_evidence; uncertainty; reconciliation_status; range_evidence |Use shipment/transfer records and evidenced routes/cargo masses; attribute shared/empty legs with actual logistics evidence, state overlap with supplied datasets and reconcile outbound recipient. Normalize attributable service by accepted count. Maintain the actual child register for this node and protocol. Each line identifies one independent product/service/dispatch/substance, one explicit property/unit, independent raw quantity and conversion, actual state/gate/medium, owner, time and evidence. Retain all original material/activity/exit categories and conditional absence checks. Former family totals are nonexchange audit observations only; never copy them to each child or sum heterogeneous units as an exchange. No normal default quantity or occurrence is created by a conditional card. | t*km; kg; km | Every actual leg | Receipt to handover and attributed return/waste legs | Actual routes serving job | per reference flow | Carrier documents, route evidence, cargo weighings, load ledger and dataset-boundary comparison |
| cp_repairs | bench_install | Conditional minor finish repair | Damage repair log | job_id; damage_id; area; approved_product; formulation; used_mass; solids; solvent_species; curing; method; waste_id; approval; closure | Document actual mechanical damage, approved minor repair and measured product consumption. Link to release/residue evidence and signed closure; no repair becomes a normal painting route. Divide job totals by accepted count; major work triggers boundary review. | kg; actual repair units | Every actual repair or documented absence | Full job before acceptance | Actual damaged bench and repair supplier | per reference flow | Approved product data/composition, measured use, photographs and signed repair closure |
| cp_acceptance | bench_install | Accepted reference output | Inspection and handover | job_id; bench_serial; model; length; material; finish; support; arms; anchor_sku; fixing_count; current_instructions; slab_evidence; level; fastener_check; defects; correction_closure; accepted_count; signoff_date | Inspect actual slab/anchor compatibility before drilling and finished installed bench after all corrections. Reconcile every required fixing, levelling and support/finish condition with current instructions and signed handover. Count only complete accepted installations; denominator excludes unresolved rejects. | Item(s) | Each acceptance and correction close | First-installation job through signed handover | Actual installed bench and host interface | per reference flow | Design/current instructions, slab records, pre/post inspections and signed client acceptance |
| cp_fates | bench_install | Bench returns usable glides packaging hardware and discard | Custody stock and waste ledger |job_id; transfer_id; source_receipt; material; condition; count; measured_mass; fate; recipient; receipt_ack; opening_stock; closing_stock; reject_cause; treatment; hazard; flow_row_id; actual_child_id; family_role; identity_evidence; material_or_service_state; property_name; exchange_unit; independent_quantity; quantity_basis; conversion_evidence; owner_id; source_lot; recipient_or_medium; coverage_evidence; activation_evidence; absence_evidence; uncertainty; reconciliation_status; range_evidence |Pair actual outward transfers to receipt and condition. Separate complete bench returns, usable material returns, retained stock and actual waste; bench_install owns rejection/correction exits. Weigh by material and reconcile recipient/treatment; do not subtract a return twice. Normalize job totals by accepted count. Maintain the actual child register for this node and protocol. Each line identifies one independent product/service/dispatch/substance, one explicit property/unit, independent raw quantity and conversion, actual state/gate/medium, owner, time and evidence. Retain all original material/activity/exit categories and conditional absence checks. Former family totals are nonexchange audit observations only; never copy them to each child or sum heterogeneous units as an exchange. No normal default quantity or occurrence is created by a conditional card. | Item(s); kg | Every transfer/reject and stock close | Entire job and recorded linked outbound fates | Job boundary and actual receivers | per reference flow | Recipient acknowledgement, scales, stock balance, reject photos and waste/treatment receipts |
| cp_releases | bench_install | Captured debris airborne particulate and conditional repair release | Debris and emission records |job_id; bore_id; concrete_composition; particle_size; captured_mass; moisture_basis; uncollected_release; substance; compartment; measurement_method; capture_efficiency_evidence; repair_id; uncertainty; treatment_id; flow_row_id; actual_child_id; family_role; identity_evidence; material_or_service_state; property_name; exchange_unit; independent_quantity; quantity_basis; conversion_evidence; owner_id; source_lot; recipient_or_medium; coverage_evidence; activation_evidence; absence_evidence; uncertainty; reconciliation_status; range_evidence |Measure captured debris and separately characterize uncaptured release by substance/size and receiving air; applicable emission calculations retain actual activity and method uncertainty. For minor repair link product composition and actual release conditions. Reconcile captured/emitted masses on stated basis, avoid treating whole removed concrete as airborne or whole repair product as solvent; normalize by accepted count. Maintain the actual child register for this node and protocol. Each line identifies one independent product/service/dispatch/substance, one explicit property/unit, independent raw quantity and conversion, actual state/gate/medium, owner, time and evidence. Retain all original material/activity/exit categories and conditional absence checks. Former family totals are nonexchange audit observations only; never copy them to each child or sum heterogeneous units as an exchange. No normal default quantity or occurrence is created by a conditional card. | kg; actual sampling units | Each drilling/clearing and actual repair event | All installation and correction tasks | Actual bench installation exposure/control conditions | per reference flow | Sampling/scale quality, method applicability, material/species evidence, treatment receipt and uncertainty statement |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_job | non-reference inventory | q_ref = q_job / N; N = complete accepted installations in the declared comparable job lot; retain all attributable correction burdens and disclose any rejected-job treatment. Do not normalize if N is zero. | q_job; accepted_count N; linked collection protocol | q_ref per reference flow |  |
| stock_custody | material ledger | Reconcile opening stock plus receipts against installed/consumed material, actual outward usable returns, discard and closing stock by consistent material/unit. Returns are explicit exits; never also deduct them from gross receipts. | cp_materials; cp_fates; transfer_id | Reconciled material/custody ledger |  |
| shared_ledger | shared resource rows | Attribute actual shared burden using documented causal job_driver / total_driver for the complete declared consumer period; reconcile all consumer shares and unallocated residual. Service boundary excludes separately counted included energy. | cp_resources; consumer ledger; provider coverage | Attributable resource amounts and disclosed residual |  |
| freight_activity | actual independent freight exchanges required by atomic_freight | Calculate each evidenced loaded-leg cargo mass in tonnes times actual distance in km, retaining actual loading/empty-return allocation evidence. Do not invent mass or distance. | cp_logistics | t*km by actual leg |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| actual_identity | all exchanges | Resolve actual model/SKU/provider/substance, state, receiving compartment and property/unit before final dataset exchanges. Each inventory card has exactly one explicit property and unit. Actual records identify independent exchanges within that semantic identity; removed families are nonexchange refinement requirements, never quantity-bearing placeholder flows. Unresolved identity or mandatory child coverage remains a finalization blocker. | Supply data, provider detail and concrete identity/support confirmation |
| host_and_gate | reference | Unknown existing slab is not accepted; retain actual compatibility and instruction evidence, every required fixing and closed defects. Historical dimensions are illustrative system evidence. | cp_acceptance; `lf-austin-installation-2009` |
| complete_job | all quantities | Cover receipts through final correction/acceptance, stock/custody, shared periods and outbound waste; disclose missing meters, release characterization and provider coverage. | All linked protocols and reconciliations |
| range_evidence | all cards | No universal inventory interval is evidenced here. Obtain card-specific actual observations/method uncertainties before range authoring; exact reference is definition. Do not present unmeasured emission or service quantities as zero. | Linked protocol, card Range evidence need and uncertainty evidence |
| atomic_packaging_supply | bench_install; cp_materials | Other actual packaging, including a genuinely composite packing assembly; identify each actual material/formulation/SKU and one supply gate; preserve included-upstream physical mass without second supply burden. This is a mandatory nonexchange refinement scope, not an inventory card. Before dataset completion enumerate every actual independent child with one explicit property/unit, independent quantity and method, actual gate/state/medium, owner and evidence; link its actual exchange or a documented absence for each applicable condition. Keep the original receipt, stock, correction, return, capture and fate obligations. Missing identity, quantity, applicability or coverage is incomplete, never zero or automatically not applicable. | cp_materials; actual_child_register |
| atomic_equipment_services | bench_install; cp_resources | Other actual asset/tool/maintenance/wear requirements and any service outside the three complete hourly provision scopes; define actual function, one property/unit, lifecycle coverage and causal all-consumer attribution; expand uncovered resources once. This is a mandatory nonexchange refinement scope, not an inventory card. Before dataset completion enumerate every actual independent child with one explicit property/unit, independent quantity and method, actual gate/state/medium, owner and evidence; link its actual exchange or a documented absence for each applicable condition. Keep the original receipt, stock, correction, return, capture and fate obligations. Missing identity, quantity, applicability or coverage is incomplete, never zero or automatically not applicable. | cp_resources; actual_child_register |
| atomic_freight | bench_install; cp_logistics | Every actual inbound, usable-return, waste and attributable shared/empty leg: record mode/provider, origin/destination and included upstream gates, cargo and distance, actual reference unit and burden owner. For a t*km service calculate real cargo tonnes times loaded km per leg; allocate empty/shared burdens using evidenced causal carrier scope without fictional empty cargo. Supplement uncovered legs; included legs retain custody evidence without duplicate transport. This is a mandatory nonexchange refinement scope, not an inventory card. Before dataset completion enumerate every actual independent child with one explicit property/unit, independent quantity and method, actual gate/state/medium, owner and evidence; link its actual exchange or a documented absence for each applicable condition. Keep the original receipt, stock, correction, return, capture and fate obligations. Missing identity, quantity, applicability or coverage is incomplete, never zero or automatically not applicable. | cp_logistics; actual_child_register |
| atomic_usable_returns | bench_install; cp_fates | Every other actual usable removed part, packaging or surplus product transferred outward; record actual material/SKU, usable state, recipient and custody acknowledgement. Same-custodian closing stock is not an exchange. No reuse potential, automatic coproduct, substitution credit or double return deduction. This is a mandatory nonexchange refinement scope, not an inventory card. Before dataset completion enumerate every actual independent child with one explicit property/unit, independent quantity and method, actual gate/state/medium, owner and evidence; link its actual exchange or a documented absence for each applicable condition. Keep the original receipt, stock, correction, return, capture and fate obligations. Missing identity, quantity, applicability or coverage is incomplete, never zero or automatically not applicable. | cp_fates; actual_child_register |
| atomic_discarded_materials | bench_install; cp_fates | Every other actual irreparable bench part, failed fixing, damaged packaging or repair residue, and genuinely mixed dispatched waste carrier; identify material/formulation, hazard, as-dispatched state and treatment receiver. Preserve all correction losses. Never split a mixed carrier into additional duplicate constituent waste; exclude captured_drilling_dust and any already listed dispatch. This is a mandatory nonexchange refinement scope, not an inventory card. Before dataset completion enumerate every actual independent child with one explicit property/unit, independent quantity and method, actual gate/state/medium, owner and evidence; link its actual exchange or a documented absence for each applicable condition. Keep the original receipt, stock, correction, return, capture and fate obligations. Missing identity, quantity, applicability or coverage is incomplete, never zero or automatically not applicable. | cp_fates; actual_child_register |
| atomic_airborne_releases | bench_install; cp_releases | Actual uncaptured drilling/clearing particulate by evidenced substance/particle-size fraction and receiving-air compartment, plus independently identified solvent species from actual activated minor finish repair. Retain measured activity, emission method applicability and uncertainty, composition, captured/emitted partition and actual repair/cure conditions. Generic dust/VOC, product content or unclosed mass balance is not a verified pollutant or zero emission; no epoxy VOC is introduced. This is a mandatory nonexchange refinement scope, not an inventory card. Before dataset completion enumerate every actual independent child with one explicit property/unit, independent quantity and method, actual gate/state/medium, owner and evidence; link its actual exchange or a documented absence for each applicable condition. Keep the original receipt, stock, correction, return, capture and fate obligations. Missing identity, quantity, applicability or coverage is incomplete, never zero or automatically not applicable. | cp_releases; actual_child_register |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| scope_gate | job | Reject this route if cantilever/epoxy, unaccepted slab or new slab/foundation work is required; current actual bench/anchor instructions and compatible concrete precede drilling. | `lf-austin-installation-2009` |
| handover_complete | accepted_installation | Require complete level undamaged installed bench, all specified mechanical fixings, closed corrections and signed handover; rejected/returned bench is not an accepted output. | `lf-austin-installation-2009` |
| inventory_complete | bench_install | Reconcile separately supplied bench/hardware/shims, protective packaging, actual drilling/clearing electricity and compressed air, actual assets/logistics, usable glides/packaging/stock, captured waste and characterized airborne release. Record actual minor repair only when activated. | `lf-austin-installation-2009` |
| shared_and_fates | allocation | Check complete asset consumers/periods, attributable driver evidence and one owner per burden. No service/energy overlap, double return subtraction, invented recovery credit or stock-as-return exchange. |  |
| binding_and_uncertainty | final foreground dataset | All concrete exchanges need verified identity/property/unit; no generic dust/VOC UUID or borrowed service support. Unresolved records/ranges/support remain explicit incompleteness even if candidate structural checks pass. |  |
| close_atomic_packaging_supply | bench_install; cp_materials | Block final foreground completion unless atomic_packaging_supply is reconciled to independent actual exchanges or evidenced nonactivation; check child identity/state, one property/unit, raw-to-reference quantity, one burden owner, all affected stock/fates and upstream coverage. A candidate structural check cannot close this method gate. |  |
| close_atomic_equipment_services | bench_install; cp_resources | Block final foreground completion unless atomic_equipment_services is reconciled to independent actual exchanges or evidenced nonactivation; check child identity/state, one property/unit, raw-to-reference quantity, one burden owner, all affected stock/fates and upstream coverage. A candidate structural check cannot close this method gate. |  |
| close_atomic_freight | bench_install; cp_logistics | Block final foreground completion unless atomic_freight is reconciled to independent actual exchanges or evidenced nonactivation; check child identity/state, one property/unit, raw-to-reference quantity, one burden owner, all affected stock/fates and upstream coverage. A candidate structural check cannot close this method gate. |  |
| close_atomic_usable_returns | bench_install; cp_fates | Block final foreground completion unless atomic_usable_returns is reconciled to independent actual exchanges or evidenced nonactivation; check child identity/state, one property/unit, raw-to-reference quantity, one burden owner, all affected stock/fates and upstream coverage. A candidate structural check cannot close this method gate. |  |
| close_atomic_discarded_materials | bench_install; cp_fates | Block final foreground completion unless atomic_discarded_materials is reconciled to independent actual exchanges or evidenced nonactivation; check child identity/state, one property/unit, raw-to-reference quantity, one burden owner, all affected stock/fates and upstream coverage. A candidate structural check cannot close this method gate. |  |
| close_atomic_airborne_releases | bench_install; cp_releases | Block final foreground completion unless atomic_airborne_releases is reconciled to independent actual exchanges or evidenced nonactivation; check child identity/state, one property/unit, raw-to-reference quantity, one burden owner, all affected stock/fates and upstream coverage. A candidate structural check cannot close this method gate. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground first-installation service data package with explicit upstream supply and accepted existing host interface |
| downstream_use | secondary_dataset; background_dataset; downstream process and lifecyclemodel projections |
| allowed_use | Declared first mechanical surface anchoring of comparable fully assembled four-legged park bench at the same qualified gate |
| excluded_use | Furniture manufacture, cantilever/epoxy anchoring, new foundations/slabs, maintenance/use/end of life, safety design or generic equivalence across unspecified bench systems |
| required_metadata | All reference qualifiers; job/site/time; actual instructions and host/design acceptance; supplier/service boundaries; consumer ledger; stock/custody and corrections |
| required_quality_disclosure | Unresolved concrete flow/support identities; missing quantities/ranges; release characterization; actual shared attribution/overlap; conditional activation and acceptance coverage |
| update_trigger | Changed bench/anchor/host system or instructions; altered service boundary; changed material/finish repair or refinishing; new verified identities or quantity/range evidence |


## 11. Data Sources

| source_id | type | reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-notes-2025 | official_guidance | UN CPC Ver.3.0 Explanatory Notes, 30 June 2025, p.290: https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | CPC 54400 street-furniture installation scope; narrower category context only |
| lf-austin-installation-2009 | handbook | Landscape Forms Austin Bench Instructions 10/2009, pp.1 and 4 mechanical freestanding surface-mount detail: https://files.landscapeforms.com/production/uploads/products/austin-bench/resources/LF_AustinBench_Installation_Guide.pdf?dm=1711139817 | Factory assembly; separate hardware; protective handling; glides/levelling; mark/move/drill/compressed-air clear; actual anchor tightening; qualified historical system route |
| lf-austin-product | handbook | Landscape Forms current Austin Bench product page: https://www.landscapeforms.com/products/austin-bench | Current four-legged freestanding/surface-mount and arm/back options; no inventory quantities or site-specific engineering |
