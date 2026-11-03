---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.garnetted-stock-of-wool-or-of-fine-or-coarse-animal-hair
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Garnetted stock of wool or of fine or coarse animal hair

## 1. Scope and Applicability

This method covers a traceable single stream of nominal mono-fibre previously coloured sheep-wool woven-fabric manufacturing offcuts transformed by dry mechanical garnetting/fraying into loose recovered fibre stock. Nominal composition is a supplier specification to verify with actual assays; it is not an assumption of 100% wool. Keep every measured residual co-fibre and original dye/finish constituent and disclose its acceptance limit. Unidentified mixed scraps and deliberate wool/synthetic recipe production need separate scope evidence.

The defining conversion is real pinned-cylinder mechanical reopening, not receipt/packing of finished fibre. Sources support selecting this dry route from documented alternatives; they do not establish one same factory/SKU or transferable amounts. Scope stops at first quality release; necessary later storage/packing/dispatch remains in a separate incremental service account. Exclude ungarnetted wool waste/noils (39212), silk (39211), cotton noils/waste (39214), recovered cotton (39215), yarn, fabric, carded webs and chemical dissolution. [Sources: `bianco-mwool-2022`; `manteco-project43`; `manteco-recype`; `woolmark-recycling`; `manteco-report-2023`]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.garnetted-stock-of-wool-or-of-fine-or-coarse-animal-hair |
| classification_refs | CPC 3.0:39213; narrower sheep-wool dry-garnetting method scope; no accepted mapping established here |
| covered_products | Loose mechanically garnetted sheep-wool fibre stock from one traceable nominal mono-fibre previously coloured woven-wool manufacturing-offcut stream. Actual residual co-fibres and finishes remain declared. |
| excluded_products | Ungarnetted wool waste and noils; silk or cotton recycling stock; deliberate mixed-fibre recipes; other animal-hair routes without new evidence; virgin tops/slivers; yarn; fabric; felt/web; wet shredding; chemical dissolution/regeneration. |
| representative_product | Previously coloured loose recycled sheep-wool stock for a receiver-qualified subsequent woollen preparation process; no universal fibre purity or length assumed. |
| production_route | Receipt and composition/colour sorting → remove actual non-fibre attachments → cutting where needed → dry pinned-cylinder garnetting/fraying and dust capture → first quality release → ambient storage and actual packing/dispatch service. |
| market_state | As-supplied loose recovered fibre stock at recorded moisture; not yarn or untreated waste. Legal material status and receiver specification are mandatory actual records. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply receiver-qualified mechanically reopened sheep-wool stock as feedstock for a later textile process. |
| How much | 1 kg net as-supplied fibre stock at its first quality release. |
| How well | Known offcut composition and prior finish; measured moisture and fibre-length/unopened-fraction evidence; actual receiver acceptance. No claim of equivalent virgin-wool performance. |
| How long or cycle | One first-release production cohort; later handling follows its original released mass Qc and creates no new output. |
| reference_flow_link | `garnetted_first_release` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Garnetted stock of wool or of fine or coarse animal hair `100b8912-d4db-48d2-ae76-a244dc191ddb` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | sheep-wool species and supplier lot; nominal mono-fibre input specification; measured wool and each residual co-fibre fraction with method and uncertainty; original fabric construction and prior colouring/finish including hazardous residues; previously coloured woven-fabric offcut origin; dry pinned-cylinder route and machine settings; fibre length distribution and unopened fraction; dust and foreign-matter acceptance limits agreed with receiver; actual moisture method and sampling state; legal by-product or waste status at each transfer; upstream burden ownership and cut-off rationale; receiving and first-release gates; batch and period with opening/closing WIP and FG; unique first-release cohort Q and historic Qc; supplier geography and utility interface; gross dispatch/returns and packaging composition; actual ancillary operations and external treatment destinations |

Declare every required qualifier in dataset metadata or equivalent product/process/reference-flow description. Missing qualifiers leave applicability incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg | kg | Q is the sum of unique first accepted net fibre masses in the cohort. Use calibrated gross-minus-tare weighing; exclude every packaging component. Use measured as-supplied moisture; dry mass is a separate subaccount. |
| raw_units | all inventory rows | native property of each atomic flow | kg; MJ; native measured units | Retain original units and meter intervals; 1 t = 1000 kg and 1 kWh = 3.6 MJ. Convert before attribution. A volume total is not a rate: integrate only actual rates. Any volume-to-mass conversion uses independently measured density of that same material at recorded temperature/pressure. Never infer lubricant density from water or from a native secondary-property coefficient. |
| first_release_only | reference product and FG service | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg | kg | Closing FG from this cohort is already part of Q. Dispatch/reinspection/rework of previously released fibre does not increase Q. Cancel paired internal transfer at consolidation; do not add closing FG to Q again. H denotes gross handled/shipped mass for service allocation and is never a production denominator. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | One identified lot of previously coloured nominal mono-fibre woven sheep-wool manufacturing offcuts at receipt; transport and previous burden ownership explicitly linked once. |
| starting_condition_role | Recovered-material input to an attributional material-supply process; not a declaration of burden-free waste treatment. |
| product_classification_scope | Mechanically garnetted wool stock; unprocessed noils/waste stop before the defining mechanical operation. This method selects sheep wool; it does not authorize all hair species implied by the broad catalog title. |
| recursive_input_rule | Already garnetted stock received from elsewhere requires a compatible burden-bearing supplier dataset and a separate input card. It is not re-created by receipt or repacking. Internal recirculation is tracked physically and cancels once at consolidation. |
| upstream_dataset_requirement | Retain source offcut-forming process and its allocation decision; collection/sorting/transport already supplied are linked without repeating. Determine actual legal and LCA status separately. A missing inherited burden or undocumented cut-off is unresolved rather than zero. |
| disclosure | Actual composition/finish and contamination; each receipt/release/dispatch gate; legal transfer and receiver acceptance; process/utility geography; wet or chemical operations if observed; inventories and inherited burden vectors; normalization and allocation evidence. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_route | garnetting | Include receipt weighing; composition/colour sorting; removal of actual hard attachments; necessary cutting; dry pinned-cylinder fraying/garnetting; extraction/filtering; first quality inspection and any pre-release rework. Do not replace this route by purchase of finished fibre and packing. Sources establish a technical synthesis rather than one contemporary factory or SKU. | `bianco-mwool-2022`; `manteco-project43`; `manteco-recype`; `woolmark-recycling`; `manteco-report-2023` |
| b_actual | all processes | Retain all failed runs; zero-output periods; starts/stops; idle extraction/lighting; cleanup; rework; spills and actual ancillary operations. Base route has no deliberate fibre wetting/redyeing/heated drying and uses electric handling. If fuel use or such operations occur, preserve raw loads and add individually identified fuel/chemical/emission cards and method evidence before completing the package; absence must be demonstrated, never inferred from a short source inventory. | `bianco-mwool-2022`; `woolmark-recycling` |
| b_input_status | offcut_receipt | Use the Product-typed recovered-offcut identity only for the documented secondary-material supply function with legal transfer and receiver acceptance. The word waste in its basename does not make it a native Waste flow. If the actual receipt is a waste-treatment function, declare that function and obtain a matching Waste identity and reviewed boundary/allocation; retain the real input and burdens while unresolved. No default zero formation burden or avoided production credit. | `bianco-mwool-2022`; `ilcd-attributional-2010` |
| b_fg | fg_service | Keep storage; bale packing; electric handling; dispatch; returns and actual post-release rework in an incremental service account linked to original Qc. Production transfer Q cancels internally with service receipt; outward fibre is the service exit of the same cohort. Closing FG is stock; shipment is not a second production output. Historic FG keeps its original per-exchange burden vector and receives only true current service increments. | `bianco-mwool-2022`; `ilcd-attributional-2010` |
| b_external | all processes | Trace external upstream production/transport and downstream treatment once through compatible providers. Retain actual outgoing product/waste type and destination. No copied boiler; purchased steam; condensate or heat-return exchange is assumed in this dry electric route. Any real heat/water return requires its own physical state/enthalpy and supplier water-energy agreement. | `bianco-mwool-2022` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| garnetting | Integrated receipt-to-first-release dry garnetting | required | all selected-route lots and failed/no-output intervals | receipt → sorting/trim removal → cutting → pinned opening/extraction → first inspection/rework | garnetted_first_release |
| fg_service | Actual post-release storage packing handling and dispatch | required | all actual service events including old-cohort stocks and returns | incremental service account; original Qc; H is not output | original_Qc |

Stages of the integrated manufacturing process retain separate raw subledgers/meters and physical WIP gates; internal stage transfers are not additional external purchases. Descriptions below are binding context of each card. Environmental amount a_i (service: a_service_i_c) and physical stock-movement amount v_i_c are distinct already normalized results of their single section 8 calculations; the latter is not another environmental input or production Q. Unresolved flows remain one specific physical exchange. Actual additional materials/trim species/fuels/emissions require their own cards; this list is not permission to omit them.

### Process: Dry wool-offcut garnetting (`garnetting`)

#### Inputs

##### Product flows

###### Previously coloured wool-fabric offcuts (`offcut_receipt`)

One supplied manufacturing-offcut lot is weighed as a whole including its actual wool/co-fibre/moisture/finish constituents; assay fractions are subaccounts and not extra purchases. Native type is Product; production mix at plant; unspecified treatment; no grade or purity fixed. Apply only with documented secondary-material supply function and actual legal/receiver acceptance under b_input_status; it is not a substitute for untreated noils or a Waste-treatment input. The declared measurement unit group is Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg.

- Selected flow: Waste of wool or of fine or coarse animal hair `e226b1a0-644f-4951-b218-48c260375a6a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `bianco-mwool-2022`; `manteco-project43`; `woolmark-recycling`

###### Electricity for sorting cutting garnetting extraction and all support (`manufacturing_electricity`)

Record submetered or causally assigned raw electricity for receipt/sorting/cutting/pinned cylinders/filters/lighting and all failed/idle/cleanup time. Only China grid-average consumption mix supplied to the user below 1 kV matches this native flow. Retain metering point and upstream generation/transmission/loss boundary; do not add included losses again. Other voltage/geography/source interfaces need their own identity/provider. The native reference property is Net calorific value in MJ; use 3.6 MJ per measured kWh for electrical energy without treating electricity as a combustible fuel. The declared measurement unit group is Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: a_i
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility`
- Sources: `bianco-mwool-2022`; `ilcd-attributional-2010`

###### Mineral-oil machine lubricant (`machine_oil`)

Conditional on actual maintenance use. Weigh the whole purchased formulation once; carrier oil/additives are not extra purchases. No UUID is assigned: the available furfural-refined candidate has incompatible CAS 98-01-1 and the PAO candidate fixes a different chemistry/route. Record actual formulation and loss/retention paths; another real lubricant needs its own atomic card. The declared measurement unit group is Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg.

- Selected flow: Mineral-oil-based machinery lubricating formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `ilcd-attributional-2010`

###### Tap water for actual ancillary cleanup (`cleanup_water`)

Only actual municipal potable treated supply matches native water-production/supply to consumer/plant. Dry fibre fraying does not establish zero cleanup water. Record actual cleanup use if present; never transfer wet-shredding water or use the native volume coefficient as measured density. A different water grade or raw-water withdrawal requires its own identity. The declared measurement unit group is Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility`
- Sources: `bianco-mwool-2022`; `woolmark-recycling`

##### Waste flows

No such exchange is assumed. If observed, retain the raw amount and add its own specific card before completing the inventory.

##### Elementary flows

No such exchange is assumed. If observed, retain the raw amount and add its own specific card before completing the inventory.

#### Outputs

##### Product flows

###### First accepted loose garnetted fibre stock (`garnetted_first_release`)

The native flow is a manufactured Product at plant with no fixed grade/composition/geography. Use only loose sheep-wool stock physically reopened from the declared offcuts; retain measured residual co-fibres/finish/moisture and receiver quality. The native Chinese general comment uses carding/web wording; the formal bilingual basename and English garnetted identity govern this selection, which does not authorize a carded web or yarn. Q counts each first accepted mass once including its part retained as closing FG; no reinspection/redispatch output. The declared measurement unit group is Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg.

- Selected flow: Garnetted stock of wool or of fine or coarse animal hair `100b8912-d4db-48d2-ae76-a244dc191ddb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_release`
- Sources: `bianco-mwool-2022`; `manteco-project43`; `manteco-recype`; `woolmark-recycling`; `manteco-report-2023`

##### Waste flows

###### Rejected unopened wool-fabric offcuts (`unopened_offcut_reject`)

Measure actual sorting rejects before garnetting and their composition/receiver; no fictional conversion to accepted fibre. Keep its upstream burden and actual treatment. Inspected Waste fiber fabric fixes unknown blends; Textile solid waste fixes China making-up/assembly origin. Neither is an unconditional binding for this known wool-stream sorting reject. The declared measurement unit group is Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg.

- Selected flow: Rejected previously coloured wool-fabric offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `bianco-mwool-2022`; `woolmark-recycling`

###### Rejected opened short wool fibres (`short_fibre_reject`)

Measure actual short-fibre rejects separately from unopened cloth and collected dust; destination and legal/product status need evidence. Ungarnetted wool-spinning-waste identity is not suitable. The declared measurement unit group is Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg.

- Selected flow: Rejected short garnetted sheep-wool fibres
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `bianco-mwool-2022`; `woolmark-recycling`

###### Collected wool dust (`collected_wool_dust`)

Weigh actual collector/filter catch; include filter cleaning and disposal. This is collected solid Waste, not an emission to air and not spinning fly; no Waste UUID confirmed. The declared measurement unit group is Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg.

- Selected flow: Collected dry sheep-wool garnetting dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `bianco-mwool-2022`; `woolmark-recycling`

###### Separated iron/steel attachments (`ferrous_trim`)

Only actual separated iron/steel hardware is this stream; sort other metals and non-metal trims into their own cards. No UUID assigned: the inspected scrap-steel flow prescribes pretreatment/melting/sorting and is Product-typed rather than this untreated Waste. No avoided-pig-iron credit. The declared measurement unit group is Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg.

- Selected flow: Separated iron-and-steel textile attachments
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `bianco-mwool-2022`; `woolmark-recycling`

###### Ancillary cleanup wastewater (`cleanup_wastewater`)

Conditional on actual cleanup discharge to an external treatment receiver. Weigh or independently convert measured volume; identify suspended solids and dissolved constituents. A COD/VOC result is an indicator, not a specific chemical mass. Do not bind manganese-slag washing water or direct-water-discharge restrictions to sewer-bound wastewater. The declared measurement unit group is Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg.

- Selected flow: Untreated wool-line cleanup wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `bianco-mwool-2022`; `woolmark-recycling`

###### Used machine lubricant (`used_machine_oil`)

Conditional actual petroleum-based or synthetic lubricant contaminated through use; native Waste at generation with no fixed treatment route. Include spill/retention account and real collector destination. No automatic regeneration credit; do not substitute a fresh oil input. The declared measurement unit group is Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `ilcd-attributional-2010`

##### Elementary flows

###### Actual uncaptured wool-line particles (`airborne_particulates`)

Native elementary emission to air with unspecified subcompartment and particle size; its source-specific cement example is not an emission factor or route restriction. Use actual monitored release only when that size resolution matches. Split proven size fractions and separate species using suitable identities; do not add total PM to overlapping fractions or captured dust. Flow identity establishes no LCIA coverage. The declared measurement unit group is Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `bianco-mwool-2022`; `woolmark-recycling`

###### Actual evaporated free water (`water_vapour`)

Native H2O CAS 7732-18-5 emission to air with unspecified subcompartment; only real gaseous water leaving the boundary belongs here. Do not treat all native synonym terms as isotopic water or liquid/ice identity. Separate incoming fibre moisture; free/adsorbed water; wastewater and vapor. Dry mechanical opening is not evidence of a chemical reaction or a required evaporation amount; do not infer two unknowns from one residual. The declared measurement unit group is Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_i
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `bianco-mwool-2022`

### Process: Post-release fibre cohort service (`fg_service`)

#### Inputs

##### Product flows

###### Electricity for storage packing and dispatch (`service_electricity`)

Keep actual bale press/electric handling/lighting and all idle/return/rework service time separate from production metering; attribute to each original first-release cohort. Only China grid-average consumption mix supplied to the user below 1 kV matches this native flow. Retain metering point and upstream generation/transmission/loss boundary; do not add included losses again. Other voltage/geography/source interfaces need their own identity/provider. The native reference property is Net calorific value in MJ; use 3.6 MJ per measured kWh for electrical energy without treating electricity as a combustible fuel. The declared measurement unit group is Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: a_service_i_c
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `bianco-mwool-2022`; `ilcd-attributional-2010`

###### Single-material HDPE bale wrap (`hdpe_wrap`)

Actual manufactured HDPE film only. Native Plastic film allows several resin families and gives no grade/geography; this card selects one HDPE article with supplier composition and processing burden, not resin pellets or a resin selector. The case paper assumes bales but gives no universal size/mass for this article. Component ledger: P_open + I + ER = P_close + S + EO + W. P stocks cover empty/attached-WIP/attached-FG/reusable separately; I is actual outside purchase; ER outside return received; S leaves with gross shipments; EO is other outward return; W actual waste. Internal reuse cancels and is neither purchase nor product Q. No automatic coproduct credit. Inputs already netted must not be netted again. The declared measurement unit group is Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg.

- Selected flow: Plastic film `b01e4bd9-5ada-4676-8a90-be5f167c00fc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_service_i_c
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `bianco-mwool-2022`; `ilcd-attributional-2010`

###### Iron/non-alloy-steel bale binding wire (`steel_tie`)

Only one actual iron/non-alloy-steel baling wire is recorded. Native basename and comments explicitly cover flexible iron/steel wire binding textile bales; no processing route/geography is fixed. Its CPC leaf is fencing wire, an isolated classification inconsistency rather than evidence of barbs on this exchange. Declare actual diameter/coating/grade and provider; barbed fencing wire, wire rope or plastic strap is not this selected article. Include manufacture once. Component ledger: P_open + I + ER = P_close + S + EO + W. P stocks cover empty/attached-WIP/attached-FG/reusable separately; I is actual outside purchase; ER outside return received; S leaves with gross shipments; EO is other outward return; W actual waste. Internal reuse cancels and is neither purchase nor product Q. No automatic coproduct credit. Inputs already netted must not be netted again. The declared measurement unit group is Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg.

- Selected flow: Baling wire `56ddb6db-1bf1-4c3c-b3db-bb00063774a8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_service_i_c
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `bianco-mwool-2022`; `ilcd-attributional-2010`

###### Original-cohort internal stock receipt (`fg_received_stock`)

Record the paired physical receipt from first release or a documented carried cohort. It is an internal transfer that cancels with manufacturing transfer Q at consolidation, not another purchase or newly created burden. Retain the original per-exchange vector and original Qc; keep physical amount V_i_c separate from environmental A_service_i_c. Native manufactured Product at plant has no fixed composition/grade/geography; this card requires the same known sheep-wool offcut-derived dry garnetted loose fibre and measured moisture/residual co-fibres/finish as the first-release card. The native Chinese comment has carding/web wording; no web or yarn is authorized. The declared measurement unit group is Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg.

- Selected flow: Garnetted stock of wool or of fine or coarse animal hair `100b8912-d4db-48d2-ae76-a244dc191ddb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: v_i_c
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `bianco-mwool-2022`; `ilcd-attributional-2010`

###### Actual externally returned original-cohort fibre (`fg_returned_stock`)

Conditional actual return received from an identified earlier dispatch, still physically qualifying as this stock. Keep gross return and reverse only its identified original delivery in net-delivery reports; never erase its historic burden or create new Q. A contaminated/rejected return requires its own actual Waste identity/card rather than unchanged Product status. Native manufactured Product at plant has no fixed composition/grade/geography; this card requires the same known sheep-wool offcut-derived dry garnetted loose fibre and measured moisture/residual co-fibres/finish as the first-release card. The native Chinese comment has carding/web wording; no web or yarn is authorized. The declared measurement unit group is Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg.

- Selected flow: Garnetted stock of wool or of fine or coarse animal hair `100b8912-d4db-48d2-ae76-a244dc191ddb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: v_i_c
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `bianco-mwool-2022`; `ilcd-attributional-2010`

##### Waste flows

No such exchange is assumed. If observed, retain the raw amount and add its own specific card before completing the inventory.

##### Elementary flows

No such exchange is assumed. If observed, retain the raw amount and add its own specific card before completing the inventory.

#### Outputs

##### Product flows

###### Gross original-cohort fibre dispatched (`fg_gross_dispatch`)

The gross physical service exit is the same loose stock previously first released, not another quantitative reference or another production output. It excludes packaging mass. Record every dispatch before subtracting returns; H may describe service throughput but never replaces Qc. This flow carries the original burden vector plus true service increments once. Native manufactured Product at plant has no fixed composition/grade/geography; this card requires the same known sheep-wool offcut-derived dry garnetted loose fibre and measured moisture/residual co-fibres/finish as the first-release card. The native Chinese comment has carding/web wording; no web or yarn is authorized. The declared measurement unit group is Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg.

- Selected flow: Garnetted stock of wool or of fine or coarse animal hair `100b8912-d4db-48d2-ae76-a244dc191ddb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: v_i_c
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `bianco-mwool-2022`; `ilcd-attributional-2010`

###### Actual outward return of original-cohort fibre (`fg_outward_return`)

Conditional actual outward return of still qualifying stock to an identified supplier/receiver. Record gross mass and its original cohort without counting disposal as delivery or reducing first-release Q. If the material is no longer this Product, classify the real separate Waste and preserve its history and new treatment burden. Native manufactured Product at plant has no fixed composition/grade/geography; this card requires the same known sheep-wool offcut-derived dry garnetted loose fibre and measured moisture/residual co-fibres/finish as the first-release card. The native Chinese comment has carding/web wording; no web or yarn is authorized. The declared measurement unit group is Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg.

- Selected flow: Garnetted stock of wool or of fine or coarse animal hair `100b8912-d4db-48d2-ae76-a244dc191ddb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: v_i_c
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `bianco-mwool-2022`; `ilcd-attributional-2010`

##### Waste flows

###### Discarded HDPE bale film (`hdpe_wrap_waste`)

Measure only actual discarded component W from its own complete packaging ledger; outside returned packaging remains EO and internal reuse is not waste. A mixture sent once to one receiver is one physical treatment load with non-additive composition partitions; do not add a second full-mass provider for each constituent. Native matching Waste UUID remains unresolved. The cleaned mechanical-recycling PE candidate does not describe uncleaned discarded bale film; the wafer-production steel-wire candidate does not describe bale ties. The declared measurement unit group is Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg.

- Selected flow: Discarded HDPE bale film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_service_i_c
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `bianco-mwool-2022`

###### Discarded iron/non-alloy-steel binding wire (`steel_tie_waste`)

Measure only actual discarded component W from its own complete packaging ledger; outside returned packaging remains EO and internal reuse is not waste. A mixture sent once to one receiver is one physical treatment load with non-additive composition partitions; do not add a second full-mass provider for each constituent. Native matching Waste UUID remains unresolved. The cleaned mechanical-recycling PE candidate does not describe uncleaned discarded bale film; the wafer-production steel-wire candidate does not describe bale ties. The declared measurement unit group is Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg.

- Selected flow: Discarded iron/non-alloy-steel bale wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_service_i_c
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `bianco-mwool-2022`

###### Discarded previously released wool stock (`fg_discard`)

Conditional actual discard after first release, measured separately from shipment and return. Preserve the historic burden vector and attribute only true new sorting/rework/treatment burdens; original Qc does not become new Q or vanish. A specific matching Waste UUID is unresolved; spinning-fly and Product stock identities do not fit this Waste. The declared measurement unit group is Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg.

- Selected flow: Discarded previously released garnetted sheep-wool fibres
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: a_service_i_c
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `bianco-mwool-2022`; `ilcd-attributional-2010`

##### Elementary flows

No such exchange is assumed. If observed, retain the raw amount and add its own specific card before completing the inventory.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_scope | all allocation decisions | The following hierarchy applies only within the declared attributional study situation where allocation is required. Source recycling/cut-off assumptions are not automatically carried across. | `ilcd-attributional-2010` |
| a_hierarchy | shared inventory | In an attributional study situation requiring allocation, first collect dedicated operations separately or apply justified virtual subdivision. Next identify the determining physical causality for each exchange and each co-function; justify which measured change drives that specific exchange. Do not apply one mass share to every flow. | `ilcd-attributional-2010` |
| a_residual | residual common process | Only inventory still unresolved after those steps may use contemporaneous market value at the common process exit and actual material condition. Remove later packing/transport/conditioning value and their dedicated burdens. Keep signed fees and legal waste function separate; a negative/zero value is not evidence for allocation exemption or a fabricated positive coproduct. No fixed allocation factor; no automatic substitution credit or CFF. | `ilcd-attributional-2010` |
| a_services | fg_service | Assign serial services by measured intensity/duration where causally justified; parallel storage/transport uses actual limiting volume/area or mass with duration/distance and evidence. Preserve losses; return handling; cleanup and idle service. Add its true incremental burden vector to the original cohort using Qc once; gross H informs causality only. | `ilcd-attributional-2010` |
| a_inheritance | WIP and unused material | Keep per-exchange inherited vectors for opening/closing raw WIP and unused non-WIP material separately at every physical gate. An input issue already net of unused returns is not netted again. Move burden with the same material and method; never erase failed-batch burden or assign prior-release burden anew. | `ilcd-attributional-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

All protocols collect original unnormalized measurements, stock changes and inherited per-exchange burden vectors. The aggregation_rule cell states the target reporting basis; it performs no division. Conversion, allocation and normalization are distinct sequential steps below. Gross physical V supports balance checks; environmental A supports the unit inventory; neither substitutes for the other. No numeric plant recipe, yield, density, allocation percentage or emission factor is supplied by this PCR.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | garnetting | receipt and each material/reject/dust/waste exchange | lot_mass | row_id; batch; physical_gate; timestamp; supplied_whole_mass; gross; tare; original_unit; constituent_assays; legal_status; receiver; opening_raw_WIP; closing_raw_WIP; opening_unused_nonWIP; closing_unused_nonWIP; per_exchange_inherited_vectors; issue_is_already_net; actual_loss_destination | Calibrated scales and lot-linked issue/return/collector records; retain each whole supplied formulation. Survey each real trim species and receiving function. Record raw unnormalized quantities and uncertainty; treat original mixture constituents as subaccounts. | original mass unit; kg after conversion | each event and stock close | all runs and complete declared period | all foreground material gates | per 1 kg reference flow | calibration; supplier composition; manifests; recipient receipts; burden lineage |
| cp_utility | garnetting | each electricity and cleanup-water input | meter | row_id; meter_start; meter_end; interval; unit; voltage; geography; provider_boundary; measured_density; temperature; pressure; conversion; allocation_driver; failed_idle_cleanup_load | Read calibrated interval/submeters and invoices; distinguish total from rate; independently measure density when converting volume. Retain raw totals and dedicated/shared observations before allocation or division. | kWh; kg; native meter units | each shift and event | complete period including no-output time | receipt sorting cutting opening extraction and ancillary support | per 1 kg reference flow | meter calibration; supply invoice; causal driver; zero-output log |
| cp_release | garnetting | first released reference output | release_mass | batch; first_release_id; acceptance_time; gross_mass; each_packaging_tare; net_fibre_mass; original_unit; moisture; wool_fraction; each_residual_fraction; length_distribution; unopened_fraction; receiver_specification; opening_FG; closing_FG; prior_release_flag | Weigh with a calibrated scale and reconcile net mass with unique first acceptance record; test composition/moisture and opening quality on representative samples. Keep original lot data; exclude reinspection and previously released returns from new Q. | kg | each first release | complete production cohort | first quality-release gate | per 1 kg reference flow | scale calibration; laboratory method; receiver acceptance; unique batch register |
| cp_air | garnetting | each actual air emission | monitoring | row_id; species; phase; medium; particle_size; concentration; actual_flow_rate; integrated_volume_flag; sampling_interval; inlet_outlet_moisture; captured_dust; independent_water_measurements; detection_limit; actual_control_state | Use matched monitoring of concentration and actual exhaust flow with consistent standard/actual conditions; integrate rates once. Already integrated gas volumes are not multiplied by time again. Independently quantify free water and other exits; preserve censored results and uncertainty. | original concentration and volume/rate units; kg after conversion | representative operation and abnormal/cleanup events | full period with measured coverage and gaps | actual air outlets including fugitive releases | per 1 kg reference flow | sampling method; matched flow; control logs; phase/media proof |
| cp_service | fg_service | post-release increment and physical FG gates | cohort_service | original_cohort_id; original_Qc; opening_FG; closing_FG; internal_received; internal_sent; gross_dispatch; returned_received; outward_returns; original_delivery_reverse; true_added_rework; discard; H; meter_units; service_interval; limiting_driver; historic_burden_vector | Link scale/ticket/meter events to the original release; keep all gross movements and reverse only the identified original delivery when reporting net delivery. Collect actual service increments without production re-counting or any division. | kg; kWh; native units | each movement and period close | current period plus inherited cohort history | storage packing handling dispatch and returns | per 1 kg reference flow | original acceptance register; stock counts; returns; causal service allocation |
| cp_packaging | fg_service | each packaging material and waste row | component_ledger | component_id; P_open_empty; P_open_attached_WIP; P_open_attached_FG; P_open_reusable; I; ER; P_close_empty; P_close_attached_WIP; P_close_attached_FG; P_close_reusable; S; EO; W; internal_reuse; unit; composition; provider; physical_destination; source_partition | Weigh/count and independently determine net component mass where counts are used. Reconcile every component at empty/attached/reusable gates and supplier/receiver records. Return raw P/I/ER/S/EO/W and reuse entries; composition partitions of one mixture remain non-additive. | kg; counts retained separately | each purchase use dispatch return discard and close | full period and inherited packaging stocks | each actual packaging component | per 1 kg reference flow | weighing evidence; complete component reconciliation; receiver receipt |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_raw_units | all inventory rows | Convert each unnormalized record to its selected exchange unit first. Compute concentration times matched integrated volume or integrate concentration times actual rate once; retain standard-state factors. No default density or source-table yield. | raw_records; measured_conversion; cp_material; cp_utility; cp_air | converted_raw_vector | `bianco-mwool-2022` |
| c_release | garnetted_first_release | Q = sum(unique first accepted net fibre mass); closing FG of the same cohort is already included. A prior first release cannot become another Q through rework or shipment. Q = 0 retains real inventory without a unit result. | cp_release; first_release_id; accepted_net_mass | Q | `bianco-mwool-2022` |
| c_burden | all inventory rows | A_i = opening_inherited_i + current_attributed_i - closing_inherited_i - explicitly_separated_other_function_i. Establish dedicated/virtual subdivisions and exchange-specific causality before calculating A_i. Use physically assigned raw-WIP and unused-nonWIP vectors separately. Inherited vectors already net in current_attributed_i are not deducted again; internal transfers cancel; record each signed movement exactly once. | converted_raw_vector; cp_material; cp_service; allocation_decision | A_i | `ilcd-attributional-2010` |
| c_single_intensity | all inventory rows | a_i = A_i / Q for production; service increments use a_service_i_c = A_service_i_c / Qc of the original cohort. Perform each division once after conversion/attribution. Cards use a_i or a_service_i_c as already normalized results. Protocol aggregation fields declare this target reporting basis only; collectors never divide and cards never divide again. For Q = 0 report raw vector only; no invented denominator or pass. | A_i; Q; A_service_i_c; Qc | a_i; a_service_i_c | `ilcd-attributional-2010` |
| c_stock_intensity | fg_received_stock; fg_returned_stock; fg_gross_dispatch; fg_outward_return | v_i_c = V_i_c / Qc. Assign each gross physical movement to its real original cohort before dividing once by its original released mass. V_i_c is physical kg and is not A_service_i_c or an additional burden/purchase. No new Q is created by receipt/return/dispatch; retain absolute stocks and signed transfer links alongside the unit display. | cp_service; V_i_c; Qc | v_i_c | `ilcd-attributional-2010` |
| c_physical | all material gates | For each physical gate: opening stock + gross external received + paired internal received = closing stock + gross external dispatched + paired internal sent + actual waste + actual emissions. V is this gross physical movement ledger in consistent units; A is the attributed environmental exchange vector and is not V. At the combined gate internal Q transfers cancel; accepted stock remaining in closing FG is never another output added to Q. Reconcile total wet mass and relevant dry fibre/elements independently with actual species/phase evidence. No reaction water is assumed for mechanical fraying. | cp_material; cp_release; cp_service; cp_air | gross_V; gate_residuals; inherited_vector_transfers | `bianco-mwool-2022` |
| c_packaging | hdpe_wrap; steel_tie; hdpe_wrap_waste; steel_tie_waste | For each separate component: P_open + I + ER = P_close + S + EO + W. P includes empty/attached-WIP/attached-FG/reusable stock; S follows gross physical shipments rather than net Q; internal reuse cancels. Component receipt with returned product is ER once even if attached. One mixed disposal gets one total treatment provider; source/composition partitions reconcile to that total and do not add providers. | cp_packaging; P_open; I; ER; P_close; S; EO; W | component_balance_residuals | `bianco-mwool-2022` |
| c_completeness | all inventory rows | F contains every real newly observed exchange X absent from the current cards; add an atomic row with its own identity/unit/source/protocol before completion. Exclude X from F only for an exact same-side duplicate already itemized in OTHER; document its exact original row. OTHER is not a hiding place for unknown materials or emissions. Preserve all failure/zero-output loads. | physical_survey; all_raw_records; exact_duplicate_links | F; X; completeness_gaps | `ilcd-attributional-2010` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Confirm full native names/synonyms/comments/CAS; route/form/grade/geography/media/type and every property. A matched name or classification alone is insufficient; provider compatibility and scientific approval are separate from UUID identity. | direct native record; exact property-unit chain; lot/source limitations |
| dq_foreground | all processes | Require complete actual site-period records and explicit uncertainty; no reference range or factory recipe is invented. Assess representativeness of the chosen offcut stream; the mixed 2019 company study is qualitative route evidence only. | calibration; records; sampling design; missing-data log |
| dq_balance | all material gates | Independently reconcile wet mass; dry wool and each residual co-fibre; actual water states and relevant elements. Retained dye/finish is not destroyed by opening. Do not treat oil/water or dust/evaporation as two variables fitted to one residual. | independent assays and gate balances with uncertainty |
| dq_sources | all rules | Keep primary full-context evidence and applicability limits. Manufacturer pages/report and the collaborating paper do not constitute independent factory replications. General allocation guidance does not supply industrial values; a verified fragment never proves numeric applicability. | source locations; original/extraction provenance; applicability decisions |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_scope | all datasets | Reject unknown blended streams; undemonstrated mechanical opening; unprocessed noils; yarn/fabric/felt/web or wet/chemical alternatives presented as this product. Confirm actual wool composition and receiver/first-release gate. | `bianco-mwool-2022`; `manteco-project43`; `manteco-recype`; `woolmark-recycling`; `manteco-report-2023` |
| v_reference | reference output | Require one referenced Product output; Mass/kg; net first accepted Q; matching bilingual basis. Q includes same-cohort closing FG once and excludes packaging/old FG/new shipment counts. Q = 0 yields no normalized production dataset. | `bianco-mwool-2022` |
| v_accounting | all processes | Verify gross V separately from A; all raw units and rate/total conversions; prior burdens; opening/closing raw WIP and unused non-WIP; all failed/idle/cleanup/rework; original-Qc service and signed returns. Single division only; unknown core mass/burden/gate relationships remain inconclusive. | `ilcd-attributional-2010` |
| v_packaging | all packaging | Reconcile every component P/I/ER/S/EO/W across all empty/attached/reusable states and gross dispatch; cancel internal reuse. A mixture gets one physical treatment total with non-additive source partitions. | `bianco-mwool-2022` |
| v_identity | all inventory rows | Require actual native hard-facet and dataset-type compatibility and exact support chain before UUID use. Unresolved auxiliary identity remains specifically named and disclosed; it is not zero or an exemption. Missing core terminal identity or real method/boundary evidence prevents a complete usable result. Check exact-flow LCIA coverage separately. | `ilcd-attributional-2010` |
| v_completeness | all processes | Audit every actual new atomic X and F; remove only documented exact same-side OTHER duplicates. An actual unlisted chemical/fuel/return/emission is a required row, never a zero placeholder. Preserve real loads of any observed out-of-scope activity until its extension is resolved; no fabricated credit. | `bianco-mwool-2022`; `ilcd-attributional-2010` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | attributional secondary material supply dataset after actual receipt/release function and burden ownership are established |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Declared woollen preparation input compatible with measured composition/moisture/length and supplier geography; carry inherited inventory and actual service increments once. |
| excluded_use | Automatic virgin-wool substitution; fixed recycling credit; waste-treatment service without proper boundary; noils or raw wool; yarn/fabric; implicit wet/chemical processing; LCIA completeness from a flow name. |
| required_metadata | sheep-wool species and supplier lot; nominal mono-fibre input specification; measured wool and each residual co-fibre fraction with method and uncertainty; original fabric construction and prior colouring/finish including hazardous residues; previously coloured woven-fabric offcut origin; dry pinned-cylinder route and machine settings; fibre length distribution and unopened fraction; dust and foreign-matter acceptance limits agreed with receiver; actual moisture method and sampling state; legal by-product or waste status at each transfer; upstream burden ownership and cut-off rationale; receiving and first-release gates; batch and period with opening/closing WIP and FG; unique first-release cohort Q and historic Qc; supplier geography and utility interface; gross dispatch/returns and packaging composition; actual ancillary operations and external treatment destinations |
| required_quality_disclosure | Measured period/site/coverage; moisture/composition method; prior waste-forming burden and allocation; complete cohort/gate/stock/return/packaging vectors; uncertainty; unresolved auxiliaries and unsupported LCIA coverage. |
| update_trigger | Input species/intentional blend/finish or legal function change; dry-to-wet/chemical route; release gate or normalization change; actual utility/provider interface; new material/emission; changed receiver specification. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| bianco-mwool-2022 | literature | Bianco I.; Gerboni R.; Picerno G.; Blengini G.A. (2022). Resources 11:41. https://doi.org/10.3390/resources11050041 ; §2.1; Figure 1; Appendix A Tables A3–A7. | Qualitative industrial dry fraying and adjacent wet shredding/untreated spinning-waste alternatives; sorting and packaging. Table A6 values and avoided pig-iron credit are not defaults. The study uses mixed source routes and 2019 data; its zero-burden and CFF assumptions are not adopted. |
| manteco-project43 | extension_guidance | Manteco. Project43. https://manteco.com/project/project-43/ ; dated web snapshot 2026-10-25. | Manufacturer evidence of traceable garment-making wool-fabric offcuts and mono-fibre/bi-fibre alternatives; supports selecting the nominal mono-fibre route with actual assay rather than treating all offcuts as pure wool. |
| manteco-recype | extension_guidance | Manteco. How are recycled wool colors created without dyeing? Updated 12 January 2023. https://manteco.com/how-are-recycled-wool-colors-created-without-dyeing/ ; snapshot 2026-10-25. | Existing colour retained through composition/colour sorting and mechanical recovery. Downstream colour-recipe blending and trial carding are separate activities; no quoted savings or recipe ratios are transferred. |
| woolmark-recycling | extension_guidance | The Woolmark Company. Recycled Wool: The Ultimate Circular Solution. https://www.woolmark.com/industry/sustainability/recycled-wool-the-ultimate-circular-solution/ ; snapshot 2026-10-25. | Independent industry guidance for fibre/colour/quality sorting; trim removal; cutting; distinction from downstream carding/spinning and open-loop chemical or thermal options. Certification thresholds do not establish this lot composition. |
| manteco-report-2023 | literature | Manteco. Sustainability Report 2023. https://manteco.com/wp-content/uploads/2024/09/Manteco-2023-Sustainability-Report.pdf ; PDF pp.24–26; printed pp.46–51. | Primary manufacturer flow diagram separates garment-making offcuts and fraying/shredding from later carding/spinning; existing-colour route. Same company evidence as the paper/web pages; not an independent numeric confirmation. |
| ilcd-attributional-2010 | official_guidance | European Commission JRC. ILCD Handbook: General guide for LCA — Detailed guidance. First edition March 2010. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf ; §§7.9.2–7.9.3; printed pp.255–272. | Only attributional situations where allocation is required: subdivision/virtual subdivision; exchange-specific determining physical causality; residual common-process-gate market value. Not evidence for an automatic recycling cut-off or an industrial recipe. |
