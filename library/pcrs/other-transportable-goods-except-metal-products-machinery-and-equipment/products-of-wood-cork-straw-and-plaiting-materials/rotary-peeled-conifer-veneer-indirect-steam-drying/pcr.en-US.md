---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.rotary-peeled-conifer-veneer-indirect-steam-drying
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Unbonded rotary-peeled conifer veneer up to 6 mm — indirect steam drying

## 1. Scope and Applicability

This PCR covers single, unbonded coniferous veneer sheets of actual thickness up to 6 mm made from untreated logs by rotary peeling, clipping, indirect steam-coil drying, grading and dispatch. Include conditioning and every redrying pass. Purchased steam supplies all process heat; material handling is electric. The delivered sheet has no glue, backing, surface coating or preservative. Species identity is botanical: do not infer conifer status from trade names or the word softwood. [epa-veneer-2002]

Sawn or sliced veneer, hardwood veneer, green-only veneer, direct-fired drying, onsite combustion/thermal oxidation, wet exhaust scrubbing, resin composing, bonded panels and modified wood are outside this method. A change to any of these facts requires separate method review and explicit added processes; a shared wood UUID does not extend applicability. The method selects one real route within CPC 31511 and does not claim the entire classification leaf.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.rotary-peeled-conifer-veneer-indirect-steam-drying |
| classification_refs | CPC 3.0 31511; narrower |
| covered_products | Single unbonded rotary-peeled conifer sheets, dried, actual thickness <=6 mm |
| excluded_products | Hardwood or sliced/sawn sheets; bonded or backed products; treated wood; green-only output; direct-fired route |
| representative_product | A declared botanical conifer species, rotary-peeled unbonded sheet at measured dispatch moisture and declared thickness |
| production_route | Untreated log receipt -> debarking/bucking -> steam conditioning -> rotary peeling/clipping -> indirect steam drying/redrying -> grading/packing |
| market_state | Dried, unbonded, unbacked, untreated veneer at the declared mill gate; moisture and grading acceptance specified by the actual purchaser |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide unbonded conifer sheet furnish for a subsequent manufacturing process |
| How much | 1 kg net veneer at first acceptance in its declared dispatch-ready moisture state |
| How well | Actual thickness <=6 mm, declared species, dimensions, grade and moisture acceptance; no adhesive or backing |
| How long or cycle | One manufacturing and gate-delivery cycle; downstream service life is unspecified |
| reference_flow_link | accepted_veneer |

This is a declared material quantity, not proof of equal finished-product service.

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | botanical conifer species and source region; solid single sheet; actual thickness <=6 mm and length/width; rotary peeling route; dry-basis dispatch-ready moisture and measurement method; first-acceptance cohort and grading/acceptance criterion; unbonded/unbacked/uncoated/unpreserved state; purchased-steam indirect drying and redrying history; actual mill/provider, geography and production period; net wood mass excluding packaging; upstream log-provider boundary and matching heat delivery/return convention |

The Wood material UUID deliberately leaves these dimensions unspecified. Retain its native name and mass property; supply the narrower facts in exchange metadata and link the actual eligible provider. Reject a provider of particleboard, bonded veneer, hardwood or incompatible moisture/route even if it uses the same generic UUID. A missing qualifier or provider boundary makes the constructed dataset incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| net_output | reference product | Mass | kg | Independently measure Q as the sum of unique production-lot first-acceptance net wood masses during the selected period, each locked to its measured dry-basis moisture u0 at the declared dispatch-ready acceptance state, excluding packaging. Reconcile Q=D_new+FG_new+L_new under acceptance_event_bridge on that same first-acceptance basis; the terms are mutually exclusive and exhaustive. Only when all other post-acceptance dispositions are demonstrably absent (L_new=0) may Q=D_new+FG_new be used. Opening accepted FG, purchased finished sheets, returns, retests and reacceptance never add Q; rejects before first acceptance do not enter Q, and later loss or rejection never subtracts Q. Collect with cp_reference. Every inventory row is per 1 kg reference flow. |
| moisture_conversion | wood material and residues | Mass | kg | Use dry-basis moisture fraction u=(wet mass-dry mass)/dry mass; dry mass=wet mass/(1+u). Retain sampled wet and ovendry masses. For veneer sample four or five positions per sheet, weigh promptly and oven-dry to constant mass at 101–105 °C; report volatile-extractive bias. Do not apply lumber sample dimensions to thin sheets. [usda-wood-moisture-2021] |
| electricity_conversion | electricity | Energy | MJ | Convert metered kWh to MJ with 1 kWh=3.6 MJ, preserving actual delivery voltage and geography; sum all drying passes once. |
| steam_enthalpy | steam_heat | Transferred heat | MJ | Record steam kg, pressure, temperature, dryness and inlet enthalpy; every return/loss stream kg and enthalpy; derive net supplier heat as incoming enthalpy minus enthalpy leaving the supplier-system return boundary on a documented common datum. Declare treatment of unreturned condensate. Do not convert steam kg to MJ by a generic constant. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Untreated conifer logs at the mill receiving gate, with known bark inclusion, source, incoming moisture and stock |
| starting_condition_role | foreground_entry |
| product_classification_scope | CPC 3.0 31511; narrower |
| recursive_input_rule | Purchased same-category dried veneer is a separately qualified upstream input, not a log or zero-burden internal return. It is outside this log-fed route and requires explicit method review. Internal green veneer, redrying and recovered sheet returns are transfers and stocks, with only one unique first-acceptance event per quantity. Purchased finished sheets and their later acceptance or dispatch never enter this route's production Q. |
| upstream_dataset_requirement | Link compatible actual forestry/log production, inbound transport, electricity, delivered steam heat with agreed return convention, water, oil, packaging and external waste treatment. Mill foreground alone is gate-to-gate; cradle-to-gate use requires all upstream links with no supplier burden duplicated. |
| disclosure | Declare receiving and dispatch gates; species/site/period; stock changes; subcontracted stages; transport; utility providers; excluded capital goods and personnel; every cut-off and missing link. Downstream bonding, use and end of life are separate. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | veneer_mill | Include log yard losses, debarking, bucking, steam conditioning, peeling/clipping, every drying/redrying pass, cooling/grading, dry collection and packaging. Retain separate operation records so an integrated plywood mill stops this output before gluing or composing. | epa-veneer-2002 |
| boundary_heat | steam_heat | Only purchased indirect steam heat crosses this foreground boundary. Onsite boiler, direct-fired dryer or thermal oxidizer operation requires expansion with actual fuel and individual emissions; no boiler emissions are created from the supplier steam mass in this route. | epa-veneer-2002 |
| boundary_air | veneer_mill | Measure dryer conditioning and fugitive outlets after controls; captured dust and discharged water remain separate outputs. An indirect dryer can still release wood organics; absence of combustion does not establish zero emissions. | epa-veneer-2002 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| veneer_mill | Integrated rotary veneer mill to dry-sheet dispatch | required | Declared log-fed indirect-steam route | foreground | 1 kg reference flow |

The integrated unit retains operation ledgers for receipt/conditioning, peeling/clipping, drying/redrying and dispatch. They are not additional final products. Incoming and outgoing green-sheet transfer masses and moisture must agree; local operation meters allocate only burdens occurring before each physical branch.

### Process: Integrated rotary veneer manufacturing (`veneer_mill`)

#### Inputs

##### Product flows

###### Conifer veneer logs (`conifer_logs`)

Untreated solid conifer logs received for rotary peeling. Record botanical species, origin, bark inclusion, initial moisture, supplier and received net mass. This generic flow identity does not select a forestry dataset or turn veneer into logs.

- Selected flow: Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; preserve inherited vectors, original numerator units and the operation/destination ledger. Old-cohort service is kept separate.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_wood`
- Sources: `epa-veneer-2002`

###### Purchased electricity (`electricity`)

Include lathe drives, debarker, crosscut saw, clipper, conveyors, dryer fans, redrying, dust collection, lighting attributable to production and electric yard handling. Meter at the real delivery voltage and geography. Record kWh and convert by 3.6; no fuel-powered mobile equipment is included in this route.

- Selected flow: Purchased alternating-current electricity
- Flow property / unit: Energy / MJ
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; preserve inherited vectors, original numerator units and the operation/destination ledger. Old-cohort service is kept separate.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: `epa-veneer-2002`

###### Net imported steam heat (`steam_heat`)

Include log heating and indirect dryer coils, including redrying. The inventory exchange is transferred thermal energy, not steam commodity mass. Meter incoming steam and outgoing condensate separately; use pressure, temperature and enthalpy records to derive net delivered heat. Link one supplier heat dataset on the same return convention; do not add a second provider burden for steam mass.

- Selected flow: Net heat transferred from purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; preserve inherited vectors, original numerator units and the operation/destination ledger. Old-cohort service is kept separate.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: `epa-veneer-2002`

###### Log-conditioning makeup water (`makeup_water`)

Record tap-water makeup entering the log-conditioning bath and cleaning circuit. Recirculated bath water is an internal loop, not repeated purchased intake. Direct surface or groundwater abstraction needs its own elementary input and an expanded water account.

- Selected flow: Water, tap `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; preserve inherited vectors, original numerator units and the operation/destination ledger. Old-cohort service is kept separate.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: `epa-veneer-2002`

###### Hydraulic and bearing oil (`lubricating_oil`)

Include measured fresh petroleum oil charged to the rotary lathe and associated hydraulic machinery; use issue/return and stock records. Machine hydraulic circulation is not repeated oil input. Record distinct oil formulations separately if the site uses more than this single formulation.

- Selected flow: Petroleum hydraulic lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; preserve inherited vectors, original numerator units and the operation/destination ledger. Old-cohort service is kept separate.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_consumables`
- Sources: `epa-veneer-2002`

###### Dispatch LDPE wrap (`packaging_film`)

Include LDPE wrap actually retained on dispatched veneer bundles, plus attributable wrap loss. Exclude it from the net veneer denominator. Add one atomic exchange for every other actual packaging component; a missing pallet or strap is not represented by this film.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; preserve inherited vectors, original numerator units and the operation/destination ledger. Old-cohort service is kept separate.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_consumables`
- Sources: `corrim-western-plywood-2025`

##### Waste flows

No external exchange in the declared route.

##### Elementary flows

No external exchange in the declared route.

#### Outputs

##### Product flows

###### Accepted dried veneer (`accepted_veneer`)

One net unbonded sheet reference output at unique first acceptance in the declared dispatch-ready moisture state. Opening accepted finished goods dispatched later, purchased finished sheets, returns, retests and reacceptance are not new production output. Retain the entire locked first-acceptance quantity, including newly accepted closing FG and every later loss, downgrade, scrap or rework disposition, under acceptance_event_bridge. The 1 kg reference represents the event denominator; it is not an additional external physical output to add to actual dispatch, closing stock and waste. Declare conifer botanical species; rotary peeling; actual thickness not exceeding 6 mm; length/width; grading criterion; no glue, backing, coating or preservative; indirect purchased-steam drying and actual mill/provider. Generic Wood material is a mass identity only; every supplied fact must be evidenced at exchange level.

- Selected flow: Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_reference`
- Sources: `epa-veneer-2002`

###### Bark sold as fuel (`bark_coproduct`)

Only separately identified bark with a documented sale and useful fuel destination is a coproduct. Record its actual wet mass and moisture for dry-mass allocation. The native Wood material identity is not assumed to cover bark. Do not also enter the same bark as waste.

- Selected flow: Untreated conifer bark fuel coproduct
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; preserve inherited vectors, original numerator units and the operation/destination ledger. Old-cohort service is kept separate.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residues`
- Sources: `corrim-western-plywood-2025`

###### Saleable peeler core (`peel_core`)

Count the remaining cylindrical core from the lathe only when sold as an actual separate wood product. Record dimensions, net mass, moisture and destination. Its wood product service and allocation terminate at peeling; veneer drying burdens are not allocated to it.

- Selected flow: Untreated conifer peeler core
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; preserve inherited vectors, original numerator units and the operation/destination ledger. Old-cohort service is kept separate.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residues`
- Sources: `corrim-western-plywood-2025`

###### Saleable green clipping (`wood_clip_coproduct`)

One green clipping stream sold as furnish before drying, with buyer and acceptance evidence. Keep dry trim and rejected dry sheets in separate physical accounts. No avoided-product credit or automatic energy substitution is taken.

- Selected flow: Unbonded conifer veneer clipping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; preserve inherited vectors, original numerator units and the operation/destination ledger. Old-cohort service is kept separate.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residues`
- Sources: `corrim-western-plywood-2025`

##### Waste flows

###### Discarded bark (`bark_waste`)

Bark with no qualifying coproduct destination is a separately weighed waste to its actual external treatment. Record mass, moisture and receiver; do not assign it a coproduct allocation share or silently assume combustion.

- Selected flow: Untreated conifer bark waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; preserve inherited vectors, original numerator units and the operation/destination ledger. Old-cohort service is kept separate.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residues`
- Sources: `epa-veneer-2002`

###### Bucking sawdust waste (`bucking_sawdust`)

Uncontaminated sawdust from log bucking or ancillary wood cutting sent for actual external recovery/treatment. Native identity allows untreated combustion/recovery routes; select a compatible receiver and disclose the route. A sold useful sawdust product requires a separate coproduct account, not this waste card.

- Selected flow: sawdust waste `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; preserve inherited vectors, original numerator units and the operation/destination ledger. Old-cohort service is kept separate.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residues`
- Sources: `epa-veneer-2002`

###### Rejected dry sheet (`veneer_reject`)

Off-grade dried sheets and dry trim discarded outside the factory. Record drying pass, measured moisture, original acceptance identity (if any), and whether rejection occurred before or after first acceptance; include all actual production, redrying and failed-rework burdens. Post-acceptance rejection retains original Q0 and enters the original cohort's L_new only once on its first-acceptance basis. Internally returned sheets are stock/transfer records, not external waste; actual loss, downgrade or other disposition requires its own specific physical record and any applicable atomic exchange.

- Selected flow: Unbonded conifer veneer reject
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; preserve inherited vectors, original numerator units and the operation/destination ledger. Old-cohort service is kept separate.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residues`
- Sources: `epa-veneer-2002`

###### Spent conditioning bath water (`conditioning_effluent`)

Actual purge from the conditioning bath sent to external wastewater treatment, with measured volume/mass, density basis, receiving plant and analytes. Recirculation is not discharge. If treated onsite or discharged to the environment, add the treatment and individual releases before claiming completeness.

- Selected flow: Spent log-conditioning water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; preserve inherited vectors, original numerator units and the operation/destination ledger. Old-cohort service is kept separate.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_releases`
- Sources: `epa-veneer-2002`

###### Spent hydraulic oil (`spent_oil`)

Measure removed oil sent to a licensed actual receiver; reconcile new oil and inventory changes. Do not include circulating machine oil as a waste each production cycle.

- Selected flow: Spent petroleum hydraulic oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; preserve inherited vectors, original numerator units and the operation/destination ledger. Old-cohort service is kept separate.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residues`
- Sources: `epa-veneer-2002`

###### Captured dry wood dust (`collected_dust`)

Weigh the dry collector discharge separately from saw kerf and veneer rejects; record moisture and actual treatment destination. Collector capture is not an atmospheric emission or an automatic saleable coproduct. Retain dust remaining in filter equipment as stock change.

- Selected flow: Captured untreated conifer wood dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; preserve inherited vectors, original numerator units and the operation/destination ledger. Old-cohort service is kept separate.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residues`
- Sources: `epa-veneer-2002`

##### Elementary flows

###### Fine particulate release (`pm25`)

Outdoor-air release after actual dry collection, with source-specific sampling for particles up to 2.5 micrometres. Collected dust remains a solid residue. Report the actual air compartment and exclude duplicate stack/fugitive estimates.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; preserve inherited vectors, original numerator units and the operation/destination ledger. Old-cohort service is kept separate.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_releases`
- Sources: `epa-veneer-2002`

###### Coarse particulate release (`pmcoarse`)

Outdoor-air release greater than 2.5 and up to 10 micrometres, disjoint from pm25. Total PM10 already includes pm25 and cannot be added to both fractions. Quantify particles above 10 micrometres separately whenever present.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; preserve inherited vectors, original numerator units and the operation/destination ledger. Old-cohort service is kept separate.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_releases`
- Sources: `epa-veneer-2002`

###### Condensable organic aerosol (`condensable_organic_aerosol`)

Dryer condensable particulate release requires a defined sampling/filter temperature and phase definition. Measure separately from noncondensable gases; reconcile overlap with filterable PM and any total organic-carbon or VOC measurement before summation. It is not a proxy flow for all VOCs.

- Selected flow: Condensable organic particulate matter
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; preserve inherited vectors, original numerator units and the operation/destination ledger. Old-cohort service is kept separate.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_releases`
- Sources: `epa-veneer-2002`

###### Formaldehyde from wood heating (`formaldehyde`)

Screen actual conditioning/dryer exhaust for this individual substance and quantify detected releases to outdoor air, after controls. No glue or hot-press emission factor applies. Evidence of absence may support not_applicable; missing analysis is unknown. Add each other identified organic substance as its own atomic row.

- Selected flow: formaldehyde `08a91e70-3ddc-11dd-941b-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; preserve inherited vectors, original numerator units and the operation/destination ledger. Old-cohort service is kept separate.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_releases`
- Sources: `epa-veneer-2002`

###### Drying evaporation (`water_vapour`)

Water removed from wood and vented to outdoor air. Reconcile inlet/outlet wood moisture, rejects, redrying and stocks; exclude supplier steam generation and returned steam condensate. This exchange is not a credit and does not stand for organic emissions.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; preserve inherited vectors, original numerator units and the operation/destination ledger. Old-cohort service is kept separate.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_releases`
- Sources: `usda-wood-moisture-2021`

###### Particles above 10 micrometres (`pmover10`)

Quantify the outdoor-air fraction above 10 micrometres separately from the two finer fractions after controls. Retain the actual sampling cut and avoid adding total filterable dust again. A missing coarse fraction remains an emissions-completeness gap.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; preserve inherited vectors, original numerator units and the operation/destination ledger. Old-cohort service is kept separate.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_releases`
- Sources: `epa-veneer-2002`

###### Methanol screening and release (`methanol`)

EPA Table 10.5-3 identifies methanol, CAS 67-56-1, in indirect-heated softwood dryer heated-zone and cooling exhaust. Screen the actual plant and quantify its non-overlapping outdoor-air release after controls; do not use a table factor as a default. Nondetects require method and limit records.

- Selected flow: methanol `fe0acd60-3ddc-11dd-a935-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; preserve inherited vectors, original numerator units and the operation/destination ledger. Old-cohort service is kept separate.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_releases`
- Sources: `epa-veneer-2002`

###### Alpha-pinene screening and release (`alpha_pinene`)

EPA Table 10.5-3 identifies alpha-pinene, CAS 80-56-8, in indirect-heated softwood dryer exhaust. The selected native elementary flow is CAS 80-56-8, without a chosen enantiomer, to air unspecified. Retain substance/compartment evidence and quantify actual release; do not replace beta-pinene or limonene by this row. No table factor is transferred.

- Selected flow: pin-2(3)-ene `0a701083-c7e6-43d1-8ae5-e62050edc5dc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; preserve inherited vectors, original numerator units and the operation/destination ledger. Old-cohort service is kept separate.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_releases`
- Sources: `epa-veneer-2002`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | veneer_mill | First use operation meters and separate branch records. Assign veneer drying/redrying, final grading and packaging directly to accepted dried veneer and the rejects generated there. No upstream saleable green core or clipping receives downstream drying or packaging burden. | corrim-western-plywood-2025 |
| allocation_dry_mass | veneer_mill | For genuinely joint pre-separation operations, allocate burdens among useful outputs by their measured ovendry mass leaving that operation: share_i=dry_i/sum(dry_useful_outputs). Apply successively at debarking and peeling, retaining the green veneer stream into drying. Waste receives no product allocation share; retain its treatment burden with the responsible operation. Physical exchange quantities are never reduced by allocation shares. This dry-mass refinement is an explicit synthesis of the physical-mass precedent and moisture measurement. | corrim-western-plywood-2025; usda-wood-moisture-2021 |
| allocation_recovery | bark_coproduct; peel_core; wood_clip_coproduct | Require contracts, destination and moisture evidence before treating an output as useful. Internal recycling has no coproduct share or export credit. Do not combine attributional allocation with avoided-fuel credits. If physical subdivision/allocation cannot represent the actual functions, retain the problem for review and disclose an economic-allocation sensitivity using observed prices, never an invented default. | corrim-western-plywood-2025 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Production and service use separate cohort ledgers. Q is independently summed from unique first-acceptance events at their measured net wood mass and dry-basis moisture u0, not reconstructed from shipments or remaining saleable stock. Lock each event to its lot/parcel identity and first-acceptance date. Reconcile the new cohort on the same original acceptance basis as Q=D_new+FG_new+L_new: D_new is net dispatch after linked returns; FG_new is accepted closing finished goods; L_new covers every other actual net disposition, including retained returns outside FG, loss, scrap, downgrade, use and closing transfer back to rework/WIP. Trace linked returns to their final destination once, never in both D_new and another term. The new cohort has no opening accepted stock. These three destinations must be mutually exclusive and exhaustive; use the two-term form only with evidence that L_new=0. An unexplained residual remains unresolved, never an assumed zero loss or an adjustment to Q.

For each parcel j, convert destination masses with independently measured current dry-basis moisture u_j to the original acceptance-equivalent mass m_eq,j=m_current,j/(1+u_j)*(1+u0_j); sum only compatible parcel quantities and retain both measurements. Reconcile actual dry-wood losses on the same u0 basis. Subsequent moisture gain/loss is kept in the physical wood-water ledger; it does not change Q or create an extra lost-wood disposition when the same dry wood remains in dispatch/stock. Missing moisture, parcel genealogy or loss evidence blocks complete reconciliation. A 100 kg first acceptance, 60 kg net dispatch, 30 kg closing FG and 10 kg post-acceptance loss on this common basis retains Q=100 kg, not 90 kg; a cohort burden of 100 units remains 100/100=1 unit/kg.

Later dispatch, customer return, retest, redrying, failed rework or reacceptance of already accepted material never creates another denominator event or reduces the original cohort quantity Q0. A returned parcel still in rework at closing belongs to L_new; after successful reacceptance its destination may move to FG_new or D_new, without counting both its gross transfer and final destination. If rework fails, retain the actual failed activity, treatment and inherited vectors against the original Q0, including when that service produces no successful output. Opening accepted FG and purchased finished sheets never enter new-production Q; purchased sheets remain outside this log-fed route pending method review.

Carry opening and closing raw-material, work-in-process (WIP) and finished-goods stock by lot, physical state and inherited cumulative vectors: original physical exchange quantities in their own units and the separately attributed environmental burdens. Transfer the inherited raw/never-accepted-WIP vectors actually consumed or completed into the new cohort once, adding its measured production exchanges through first acceptance and any actual packing/dispatch services for that same new cohort once. Later services, including actual failed rework and loss treatment, remain attached to the original acceptance and its unchanged Q0; never fabricate future unperformed service. Retain untouched raw stock and never-accepted unfinished closing WIP with their vectors; accepted material returned to WIP retains its original acceptance cohort and vectors; neither their purchases nor their accumulated burdens are automatically charged to current accepted output. Internal transfers do not re-enter as external inputs. Resolve missing provenance or indivisible stock attribution before claiming complete normalization.

Opening accepted finished goods retain their original production vectors and original accepted net mass. Attribute later storage, dispatch, repacking, redrying or other service on an old accepted lot to that original cohort as a separately traceable service addition, divided by its original accepted net mass when known and positive, never by the new cohort Q. Do not rebook inherited production exchanges or pretend an old lot was newly manufactured. Shared meters must separate these cohorts using traceable activity records; unidentified service stays unnormalized pending attribution. If Q=0, keep all current new-production/WIP and unassigned exchange/burden vectors in their original units and carry them forward or retain them for review; no zero, infinite or invented per-kg production result is emitted. These are denominator-consistency rules, not factory amounts or a literature yield default.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_reference | veneer_mill | accepted_veneer | measurement | production cohort and immutable lot/parcel genealogy; unique first-acceptance id/date; species; dimensions; grade; calibrated first-accepted net mass Q0 and dry-basis moisture u0; tare; gross dispatch and linked returns; disjoint D_new, FG_new and each L_new destination; current mass/moisture and original-basis conversion; post-acceptance loss/scrap/downgrade/use; rework/WIP transfers, failed activity and reacceptance; opening accepted FG and purchased finished-sheet movements; opening/closing raw-material, WIP and FG masses and inherited physical-exchange/burden vectors; old-cohort original accepted net mass; mill/provider | Calibrated bundle weighing excluding film; thickness measurements and first purchaser-quality acceptance; moisture samples at four or five sheet positions, promptly weighed and dried to constant mass. Independently sum unique events for Q and reconcile Q=D_new+FG_new+L_new on the locked first-acceptance basis under acceptance_event_bridge. Trace each return to one final destination and retain both actual wet/dry quantities and equivalent-basis quantities. Record failed rework and service against original Q0; never count reacceptance or purchased/opening FG as new production. Trace consumed raw/WIP and inherited vectors to completed cohorts; retain untouched stock and old-cohort service separately. Never reset inherited vectors when a period changes. | kg | Every lot; reconcile the full production period | One common declared production period | Actual mill and declared route only | per 1 kg reference flow | Calibration, original event records, complete destination bridge, moisture/genealogy evidence, failed-activity records and missing-data disclosure |
| cp_wood | veneer_mill | conifer_logs | measurement | log supplier; botanical species; origin; incoming mass; bark; incoming/green veneer moisture; green transfer; stock change | Weigh incoming loads and independent branch transfers; retain chain-of-custody and representative moisture specimens by species and operation. | kg | Each receipt and branch lot | One common declared production period | Actual mill and declared route only | per 1 kg reference flow | Calibration, raw records, reconciliation and missing-data disclosure |
| cp_utilities | veneer_mill | electricity; steam_heat; makeup_water | measurement | meter id; stage; kWh; water kg; steam kg; inlet/return pressure temperature dryness and enthalpy; condensate return kg; losses; supplier boundary; calibration | Submeter conditioning, peeling and every drying/redrying pass; reconcile invoices and stock. Retain a full physical steam/condensate ledger and a single supplier net-heat account. | MJ; kg | Continuous meters; reconcile each reporting period | One common declared production period | Actual mill and declared route only | per 1 kg reference flow | Calibration, raw records, reconciliation and missing-data disclosure |
| cp_consumables | veneer_mill | lubricating_oil; packaging_film | measurement | material identity; fresh issue kg; returns; stock changes; packaging retained; loss; supplier | Reconcile purchases, issue and stock with actual consumption; weigh actual packaging components independently. | kg | Each issue and monthly balance | One common declared production period | Actual mill and declared route only | per 1 kg reference flow | Calibration, raw records, reconciliation and missing-data disclosure |
| cp_residues | veneer_mill | bark_coproduct; peel_core; wood_clip_coproduct; bark_waste; bucking_sawdust; veneer_reject; spent_oil; collected_dust | measurement | stage; physical stream; wet kg; dry-basis moisture; sale/waste status; destination; buyer/receiver; price if relevant; stock changes | Weigh each separate stream at its actual separation point; sample moisture and retain sale or waste-transfer evidence; reconcile internal returns and separately identify post-acceptance destinations against cp_reference without double-counting the returned parcel. | kg | Every output lot, reconciled to the period | One common declared production period | Actual mill and declared route only | per 1 kg reference flow | Calibration, raw records, reconciliation and missing-data disclosure |
| cp_releases | veneer_mill | conditioning_effluent; pm25; pmcoarse; pmover10; condensable_organic_aerosol; formaldehyde; methanol; alpha_pinene; water_vapour | measurement | outlet; operation; controls; measured concentration; exhaust flow; operating hours; size/phase; sampling/filter temperature; analyte; purge kg; wood water balance; nondetect limit | Measure representative normal and redrying operation after controls; combine source-specific concentration, flow and operating time. Retain uncertainty, nondetects and wood-water balance; add separate rows for every detected additional substance. | kg | Representative campaigns plus continuous activity logs | One common declared production period | Actual mill and declared route only | per 1 kg reference flow | Calibration, raw records, reconciliation and missing-data disclosure |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| cohort_accounting | all inventory rows | Assemble each new first-accepted cohort vector from inherited raw/WIP vectors actually completed plus measured additions through first acceptance and all actual attributable later services, loss treatment and failed rework, each once. Retain closing never-accepted WIP vectors and old accepted-FG vectors separately; rework of accepted material keeps its original cohort and unchanged Q0 rather than entering new-production WIP completion. Keep old-cohort service additions with original Q0, even with no successful rework output, never new Q. Q=0 retains unnormalized new-production vectors. Physical stock/exchange quantities, event denominators and allocated burdens remain separate. | cp_reference; cohort and stock identities; inherited vectors; attributable measurements | cumulative cohort vectors in original units | usda-wood-moisture-2021 |
| acceptance_event_bridge | all inventory rows | Q=sum of independently measured unique first-acceptance net wood masses at each parcel's original dry-basis u0. Reconcile Q=D_new+FG_new+L_new with disjoint and exhaustive net destinations: linked-return-adjusted dispatch, accepted closing FG, and every other actual post-acceptance destination (net retained return, loss, scrap, downgrade, use and closing rework/WIP). Convert destination quantities by m_eq,j=m_current,j/(1+u_j)*(1+u0_j), using measured moisture and parcel genealogy; track moisture-only changes separately from lost wood. Q=D_new+FG_new is conditional on demonstrated L_new=0. For 100 kg acceptance, 60 kg net dispatch, 30 kg FG and 10 kg loss, Q remains 100 kg. Reacceptance, opening FG and purchased finished sheets add no Q; failed rework retains its actual vectors and original Q0. Gross internal loops and Q are not extra external physical outputs. Unexplained residuals block complete reconciliation, never change Q. | cp_reference; cp_residues; cp_releases; original event masses/moistures; parcel destinations | locked Q and complete same-basis event/destination reconciliation |  |
| normalize_period | all inventory rows | For Q>0, divide each cumulative physical exchange vector of the new first-accepted cohort, assembled under cohort_accounting, by its first-accepted net mass Q in kg. Accepted output equals Q/Q=1 kg per 1 kg reference flow. Preserve each numerator unit. Q=0 prohibits new-output normalization and retains the unnormalized physical-exchange and burden vectors; old-cohort service uses its original accepted net mass. | cohort vectors; Q; original accepted net mass; cp_reference | per 1 kg reference flow | usda-wood-moisture-2021 |
| dry_mass_ledger | conifer_logs; accepted_veneer; bark_coproduct; peel_core; wood_clip_coproduct; bark_waste; bucking_sawdust; veneer_reject | For each actual stream/stock independently: dry=wet/(1+u). For the whole mill boundary including FG storage, reconcile opening dry stocks + actual external dry inputs = closing dry stocks + actual external dry product/waste transfers + measured dry losses/releases not already in those transfers. Include all raw/WIP/FG stocks and external returns once; partition all external destinations without overlap; Q and internal acceptance/rework transfers are not extra external outputs or inputs. Thus accepted closing FG is not counted again as Q. Keep the acceptance-equivalent bridge and physical water ledger separate. Before allocating burdens, reconcile operations on their explicitly declared physical boundaries. Never invent a yield, treat unexplained residuals as measured loss, or scale measured outputs to force closure. | wet kg; dry-basis u; actual stocks/external movements; cp_wood; cp_residues; cp_reference | dry kg by operation and whole-mill physical balance | usda-wood-moisture-2021; corrim-western-plywood-2025 |
| net_heat_ledger | steam_heat | H_in=sum(m_in*h_in); H_return=sum(m_return*h_return). Use the common datum and actual supplier system boundary to calculate net heat, in MJ, including documented unreturned condensate treatment. When h is kJ/kg, divide the resulting kJ by 1000; compare with heat meters and invoice convention. | cp_utilities; steam and return states; supplier convention | net delivered MJ | epa-veneer-2002 |
| release_period | pm25; pmcoarse; pmover10; condensable_organic_aerosol; formaldehyde; methanol; alpha_pinene | Integrate each identified concentration with its compatible dry/wet exhaust-flow basis and actual hours; correct units and retain detection limits. Separate each outlet and phase; add only non-overlapping masses, attribute them to the correct cohort under cohort_accounting and divide by that cohort denominator only when positive. | cp_releases; concentration; flow; hours | kg per 1 kg reference flow | epa-veneer-2002 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| species_state | accepted_veneer | Actual botanical species, grade, dimensions, moisture and unbonded state must be auditable; mixed-species lots retain composition and do not mask hardwood. | Supplier/species and acceptance records |
| representativeness | veneer_mill | Use a declared complete operating period covering normal production, stoppages, seasonal moisture and redrying; disclose exclusions, sampled operations, uncertainty and temporal/geographic differences from sources. No literature value is a factory measurement. | Period reconciliation and missing-record register |
| provider_matching | all inventory rows | Match each actual provider or treatment to flow type, mass/energy property, voltage, species/state, geography and delivered boundary. Unresolved native UUIDs remain explicit identity gaps; neither blank identity nor generic identity authorizes an incompatible provider. | Native records and actual provider/treatment documentation |
| emissions_completeness | cp_releases | Retain species-specific organic screening, phase/temperature conditions and coarse dust assessment. Total VOC is a quality cross-check, not an elementary exchange replacing individual compounds. Nondetect is bounded evidence, not an unqualified zero. | Test reports and outlet/phase register |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | accepted_veneer | Reject hardwood, sawn/sliced routes, thickness above 6 mm, adhesive/backing/preservation, missing botanical identity or missing required qualifiers. One generic Wood material UUID never establishes these facts or an eligible supplier. | epa-veneer-2002 |
| validate_measurement | all inventory rows | Require Q>0 for new-output normalization, finite nonnegative physical quantities and the same first-acceptance cohort/denominator in both languages. Q=0 retains unnormalized physical-exchange and burden vectors without an invented normalized output. Reject gross bundle mass, percent/fraction confusion, unconverted volume, double-counted redrying and unsupported steam-heat conversion. Compare mass/energy balances against documented instrument uncertainty; this PCR supplies no invented tolerance. | usda-wood-moisture-2021; epa-veneer-2002 |
| validate_cohort | all inventory rows | Independently verify unique first-acceptance event Q and the complete Q=D_new+FG_new+L_new bridge under acceptance_event_bridge, including measured moisture conversions, linked net returns, loss/scrap/downgrade and closing rework/WIP; allow the two-term form only with proven L_new=0. Reject deriving Q from remaining saleable quantities, loss omitted to force closure, duplicated return destinations, or Q added to the whole-mill physical stock balance. Opening accepted FG, purchased finished sheets, retests and reacceptance add no Q. Audit raw/WIP/FG inherited vectors and all actual services/failed rework against lot provenance and original Q0; reject missing/reset vectors, deletion of failed-activity burdens, stock mass treated as new production, old-cohort service divided by new Q, and any per-kg new-output result when Q=0. Unresolved event or destination evidence remains incomplete. | usda-wood-moisture-2021 |
| validate_allocation | veneer_mill | Useful-output shares sum to one at each joint operation; retain measured dry masses, destinations and stock changes. Reject assigning drying/packing to a core sold upstream, output mass reduced by allocation, waste counted as a saleable coproduct, or simultaneous allocation and avoided-fuel credit. | corrim-western-plywood-2025; usda-wood-moisture-2021 |
| validate_boundary_emissions | veneer_mill | Check all actual utilities, individual packaging components, residues, wastewater destinations and non-overlapping air species/phases. Missing evidence, identities or providers remain disclosed gaps. Changed onsite combustion/wet treatment requires expanded inventories; do not claim a complete cradle-to-gate result before all upstream links and treatment are verified. | epa-veneer-2002 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Qualified declared-species rotary veneer at its recorded gate; downstream plywood or other production may link this unbonded material input while modelling their own adhesives and subsequent operations. |
| excluded_use | Universal conifer veneer average; hardwood/sliced/sawn or bonded veneer; complete building service comparisons; automatic carbon-neutrality or avoided-energy claims. |
| required_metadata | All reference qualifiers; actual mill/provider; period; gates; species mix; physical operation and inherited stock/cohort ledgers; independently locked first-acceptance Q/Q0, disjoint D_new/FG_new/L_new destinations and original-basis moisture conversions; actual failed-rework/service vectors and physical stock balance; moisture method; utility boundaries; allocation shares; upstream and treatment links. |
| required_quality_disclosure | Collection and identity gaps; sampled outlets; detection limits and phase overlap; temporal/geographic applicability; allocation sensitivity; cut-offs; missing providers; no scientific or study approval inferred. |
| update_trigger | Species/state/thickness, sourcing, peeling route, heat provider, dryer/control technology, moisture acceptance, coproduct market or measurement basis changes. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| epa-veneer-2002 | official_guidance | US EPA, AP-42 §10.5 Plywood Manufacturing, January 2002, pp. 10.5-1–10.5-4 and Table 10.5-3 pp.10.5-10–10.5-11; https://www.epa.gov/sites/default/files/2020-10/documents/c10s05.pdf | Log conditioning, rotary peeling/clipping, indirect steam drying/redrying, unbonded-sheet stopping point, source/phase-specific emissions and indirect-softwood organic species screening (including CAS identity, without table factors). Plywood resin/pressing and numeric temperature/moisture/emission defaults are not transferred. |
| usda-wood-moisture-2021 | handbook | USDA Forest Products Laboratory, Wood Handbook—Wood as an Engineering Material, FPL-GTR-282 (2021), Chapter 13, printed pp.13–1–13–2, PDF pp.323–324; https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf | Dry-basis moisture, representative veneer sampling, prompt weighing, oven-drying and method limitations; dry-mass conversion, without prescribing output moisture or density. |
| corrim-western-plywood-2025 | literature | CORRIM, Life Cycle Assessment of Softwood Plywood Production – Western Region, edited 22 July 2025, §§3.2.1 and 3.2.6, PDF pp.12–13,16; https://corrim.org/wp-content/uploads/2025/07/LCA-Report-Western-Plywood-Report-Final-07222025.pdf | Physical allocation precedent, separately assigned packaging and upstream boundary. Regional integrated plywood inventories and averages are not veneer values; the staged dry-mass treatment is the explicit synthesis stated in this PCR. |
