---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.five-layer-birch-faced-softwood-lumber-core-blockboard
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Five-layer birch-faced softwood lumber-core blockboard with PVAc core gluing and UF veneer bonding

## 1. Scope and Applicability

This rule covers an unfinished non-structural five-layer panel: one edge-glued solid pine/spruce strip core, one birch crossband on each side and two birch outer faces, with actual alternating 0/90/0/90/0 grain axes. Both faces and crossbands must be supplier-verified Betula pendula or Betula pubescens from temperate sources. A trade label such as “birch”, “Baltic”, “hardwood” or a country of sale does not establish species or origin. Collect botanical species, harvest origin and chain-of-custody evidence per veneer lot; unknown or mixed tropical outer plies are outside this rule. Paged documents commercial birch-faced solid-strip construction, while the JRC atlas supports the specified broadleaved European birch identities; neither establishes the composition of an unmeasured supplier lot. Sources: paged-blockboard-2026; paged-blockboard-2020; jrc-european-birch-2016.

The route starts with externally kiln-dried untreated coniferous sawn timber and externally dried unbonded birch veneers, uses supplied aqueous PVAc core-edge adhesive and supplied ready-to-use aqueous UF veneer adhesive, then presses with purchased net hot-water heat, conditions, trims, sands, accepts and wraps. Actual resin formulation and cure are collected, never inferred from bonding class. Exclude all-veneer plywood, conifer-faced blockboard, tropical-faced panels, three-layer/double-core constructions, MDF/particle cores, overlaid/decoratively re-veneered panels, densified wood, structural certification claims and onsite boiler/green-log manufacture. A plant that formulates glue or adds chemicals separately must extend the inventory with each actual ingredient before applying this route. Sources: unido-panel-adhesives-1977; epa-plywood-2002.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.five-layer-birch-faced-softwood-lumber-core-blockboard |
| classification_refs | CPC 3.0 31423 retained as a candidate narrower coverage association; mapping_acceptance = held_pending_classification_review under docs/adr/2026-11-10-hold-blockboard-cpc-associations.md. The 2026-11-06 batch-03 acceptance is historical and does not establish current positive mapping. Official 31413 notes include blockboard and central cores made from different materials, while 31423 also has crossed-veneer conditions; a solid-strip core cannot alone exclude 31413 or decide 31423. No replacement classification or whole-leaf coverage is asserted. |
| covered_products | Uncoated five-layer birch-faced pine/spruce strip-core blockboard with PVAc core joints and UF skin joints; both faces and crossbands botanically verified temperate Betula pendula/pubescens. |
| excluded_products | All-veneer plywood; coniferous or tropical faces; MDF/particle cores; two cores; three layers; overlays; structural or densified products; green-input/onsite-boiler routes. |
| representative_product | Net accepted sanded non-structural five-layer unfinished panel for subsequent furniture/joinery use; dimensions, adhesive recipe and performance are actual lot descriptors, not fixed defaults. |
| production_route | Dry timber sizing and core gluing; four separate birch veneer layup; UF hot pressing with purchased heat; conditioning and finish; first acceptance and wrapping. |
| market_state | Factory gate accepted unfinished panel; packaging reported separately; no service-life or whole-life function claimed. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply an unfinished birch-faced strip-core panel as an intermediate for specified furniture or joinery. |
| How much | 1 kg net accepted panel at declared final moisture, excluding packaging. |
| How well | Actual five-layer construction, species, dimensions, grain axes, bonding quality and agreed non-structural grade demonstrated per lot; no universal strength or moisture rating. |
| How long or cycle | One completion/first-acceptance cohort at factory gate; downstream lifetime is outside this reference. |
| reference_flow_link | panel |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Veneered panels and similar laminated wood, with at least one outer ply of non-coniferous wood other than tropical `53392205-1fb0-44c6-a275-cd064bf6d54a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | plant and period; core species; each veneer botanical species and harvest origin; five layers and grain axes; dry-input moisture; supplied PVAc and UF compositions; dimensions; final moisture and measurement method; net accepted mass; unique first-acceptance cohort; grade/bond tests; electricity voltage and provider; net heat interface; stock/burden history; packaging/treatment scope |

Each qualifier must be explicit in the data package. The reference UUID is a broader native product identity, not proof of the narrower construction or provider. It has Product flow type, Mass and kg support and the 3142/31423 classification. Its comment repeats the official crossed-veneer wording; the native 3142/31423 label is not a classification ruling. Official 31413 notes also include blockboard and alternative central-core materials, so the association remains held_pending_classification_review under docs/adr/2026-11-10-hold-blockboard-cpc-associations.md. No automatic exclusion from 31413 or reassignment to it follows from the solid-strip core. Sources: un-cpc-3-2025; un-cpc-31413-2025. Use only with the proved four-veneer plus solid-strip-core construction, both botanical faces, actual adhesive/state and supplier-compatible provider; unavailable matches remain unresolved. Neither a title match nor this locator establishes mapping acceptance.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reference output is 1 kg. Q is the sum of independently weighed unique first-acceptance event net whole-panel masses for cohort c at the declared gate, locked at measured acceptance moisture/composition and excluding packaging, cp_accept. Reconcile Q = D_new + FG_new + L_new under unique_acceptance; only evidenced zero other destinations permit the two-term bridge. Returns, loss, downgrade, scrap and returned WIP never reduce original Q; old opening FG, purchased finished panels, dispatch, retests and reacceptance do not create Q. Every attributable exchange q is converted once by normalize_reference: q_ref = q / Q. Q must be positive and measured; zero/missing Q preserves absolute records and an inconclusive result. Do not replace whole-panel Q by oven-dry wood, glue solids or dispatch mass. |
| moisture_basis | unbonded timber and veneers | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record wet mass m and dry-basis moisture u using sampled oven-dry mass; dry wood d = m / (1 + u); water w = m - d. Percentage dry-basis moisture is divided by 100 before use. Do not use a wet-basis fraction in this formula; adhesive-bearing panels/residues need a matrix-valid water method, not automatic oven-loss-as-water. Sources: usda-wood-handbook-2021. |
| energy_conversion | electricity and press heat | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` for the selected electricity identity; heat property remains unresolved | MJ | Convert electricity 1 kWh = 3.6 MJ; retain the native selected energy property. Heat requires verified delivered enthalpy and compatible property/unit support; never convert gross heat into delivered net heat by relabelling. |
| count_volume | weighed panel lots | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Sum individually measured net masses. Counts or cubic metres are descriptors unless same-lot density at the same moisture and geometry is measured; no manufacturer density range or nominal thickness substitutes for Q. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased kiln-dried untreated pine/spruce timber and dried unbonded birch veneer delivered at factory receiving; upstream forestry, sawing and drying belong to compatible upstream datasets. |
| starting_condition_role | Foreground gate-to-gate dry-input manufacturing boundary; upstream burdens retained for cradle-to-gate assembly. |
| product_classification_scope | Only the described five-layer birch-faced solid-strip product; classification does not choose a material or provider. |
| recursive_input_rule | A purchased same-category panel enters once with its upstream dataset and original burden vector; it does not become new raw wood or increase first-acceptance Q through reacceptance. Base dry-input route excludes purchased-panel manufacture; a rework extension must retain its history and be disclosed. |
| upstream_dataset_requirement | Match actual species, moisture, treatment, transport interface, adhesive supplied state, voltage and net-heat basis; unavailable matches remain explicit. |
| disclosure | Declare all receipts/stocks/WIP/finished goods, utilities, adhesive route, packaging, emissions, residues and offsite treatment. Foreground-only data cannot represent forestry or full cradle-to-grave performance. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_operations | birch_blockboard_manufacture | Include machining/core glue, four-veneer layup and pressing, conditioning, trimming/sanding, extraction, washing, acceptance and actual packaging. Include idle/startup losses attributable to the cohort; do not infer a boiler from purchased heat. | unido-panel-adhesives-1977; epa-plywood-2002 |
| b_stock | raw materials, WIP and accepted finished goods | Retain separate opening/receipt/consumption/transfer/closing mass, composition and inherited material/service burden vectors. Cancel internal transfers only at the aggregated factory boundary; no disappearance of pre-period burdens or duplicate upstream drying. | ilcd-handbook-2010 |
| b_interfaces | supplier and treatment interfaces | Connect upstream provision and outbound waste treatment once at the declared interfaces. Do not treat captured dust or offsite wastewater as direct environmental releases; no default avoided-energy, recycling or carbon-storage credit. | ilcd-handbook-2010; epa-plywood-2002 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| birch_blockboard_manufacture | Dry-input machining/core gluing → birch layup/hot press → condition/trim/sand → acceptance/wrap | required | Exact scoped species, construction and adhesive/heat route | Foreground aggregated manufacturing process with stage-resolved records; intermediate core/panel transfers remain internal | 1 kg net accepted reference panel |

### Process: Birch-faced strip-core panel manufacture (`birch_blockboard_manufacture`)

#### Inputs

##### Product flows

###### Core-strip stock (`core_timber`)

Kiln-dried untreated pine or spruce only, supplier-verified species and moisture; weigh withdrawals including machining loss. No green lumber, hardwood core or forest/drying duplication.

- Selected flow: Sawn coniferous timber `50904047-e5b0-4110-990a-53751d250267`
- Flow property / unit: Mass / kg
- Amount rule: q / Q for the completed cohort; cp_accept provides Q; retain unknown quantities as missing, never default zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wood`
- Sources: usda-wood-handbook-2021; paged-blockboard-2026

###### Birch face/back veneer (`face_birch`)

Exactly the two outer sheets; record face/back botanical identity separately, thickness, grain axis and dry-matter/water composition; no bonded plywood or decorative film substitution.

- Selected flow: Dried unbonded temperate birch face veneer
- Flow property / unit: Mass / kg
- Amount rule: q / Q for the completed cohort; cp_accept provides Q; retain unknown quantities as missing, never default zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wood`
- Sources: paged-blockboard-2026; jrc-european-birch-2016

###### Birch crossband veneer (`cross_birch`)

Two inner veneer sheets, one each side of the strip core, with grain perpendicular to core and faces. Track separately from outer sheets even when suppliers are shared.

- Selected flow: Dried unbonded temperate birch crossband veneer
- Flow property / unit: Mass / kg
- Amount rule: q / Q for the completed cohort; cp_accept provides Q; retain unknown quantities as missing, never default zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wood`
- Sources: paged-blockboard-2026; usda-wood-handbook-2021

###### Core edge adhesive (`pvac`)

Weigh supplied wet adhesive for strip-edge joints with formulation and water/non-water constituents. Generic adhesive, pure polymer and polyvinyl alcohol are not interchangeable.

- Selected flow: Supplied aqueous polyvinyl acetate wood adhesive
- Flow property / unit: Mass / kg
- Amount rule: q / Q for the completed cohort; cp_accept provides Q; retain unknown quantities as missing, never default zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_glue`
- Sources: unido-panel-adhesives-1977

###### Veneer bonding adhesive (`uf_mix`)

Record whole supplied formulated mixture crossing the gate, separately from PVAc; supplier must identify actual hardener/filler and wet composition. Do not also count embedded resin, hardener, filler or carrier water. No in-plant formulation covered.

- Selected flow: Supplied ready-to-use aqueous urea-formaldehyde wood-bonding adhesive
- Flow property / unit: Mass / kg
- Amount rule: q / Q for the completed cohort; cp_accept provides Q; retain unknown quantities as missing, never default zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_glue`
- Sources: epa-plywood-2002; unido-panel-adhesives-1977

###### Plant electricity (`electricity`)

Only matching customer-side 1–35 kV AC; convert meter kWh to MJ by 3.6. Reconcile non-overlapping core, press, extraction, finishing and packing circuits. Other voltages require an independently verified flow.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: q / Q for the completed cohort; cp_accept provides Q; retain unknown quantities as missing, never default zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: epa-plywood-2002

###### Press-circuit purchased heat (`heat`)

Meter delivered-minus-return enthalpy at named boundary; supplier must exclude upstream losses from delivered amount. A gross-calorific-value flow or fuel mass cannot stand for this heat. Onsite boilers are outside this route.

- Selected flow: Purchased net hot-water heat at press-circuit interface
- Flow property / unit: Delivered thermal energy (identity unresolved) / MJ
- Amount rule: q / Q for the completed cohort; cp_accept provides Q; retain unknown quantities as missing, never default zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: epa-plywood-2002

###### Equipment cleaning water (`wash_water`)

Meter external washing water only; use measured density for volume conversion. Recirculated water is an internal transfer; supplied adhesive carrier water is embedded, never another fresh-water input.

- Selected flow: Purchased tap water for adhesive-equipment washing
- Flow property / unit: Mass / kg
- Amount rule: q / Q for the completed cohort; cp_accept provides Q; retain unknown quantities as missing, never default zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: epa-plywood-2002

###### Dispatch wrapping film (`pe_wrap`)

Weigh net film attached to accepted lots plus observed film losses; opening/closing film rolls and earlier accepted lots retain their cohorts. Add each actual other package component as a separate card before use.

- Selected flow: Polyethylene wrapping film
- Flow property / unit: Mass / kg
- Amount rule: q / Q for the completed cohort; cp_accept provides Q; retain unknown quantities as missing, never default zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: ilcd-handbook-2010

###### Sanding consumable (`abrasive`)

When sanding uses this paper, collect net replaced mass and backing/coating specification. Other abrasive types require distinct exchanges; do not silently omit them.

- Selected flow: Aluminium-oxide coated abrasive paper
- Flow property / unit: Mass / kg
- Amount rule: q / Q for the completed cohort; cp_accept provides Q; retain unknown quantities as missing, never default zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: epa-plywood-2002

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted reference panel (`panel`)

Output is 1 kg net accepted unfinished panel; normalize by normalize_reference. Q locks unique first-acceptance events and reconciles all disjoint net destinations under unique_acceptance, including post-acceptance loss and closing returned WIP; wrapping is excluded. The normalized 1 kg is a reference coordinate, not an extra physical output or shipment. Reacceptance of returned panels retains original event/cohort Q.

- Selected flow: Veneered panels and similar laminated wood, with at least one outer ply of non-coniferous wood other than tropical `53392205-1fb0-44c6-a275-cd064bf6d54a`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_accept`
- Sources: paged-blockboard-2026

##### Waste flows

###### Pre-glue machining shavings (`clean_shavings`)

Weigh exported untreated shavings before any glue contact and disclose destination. Internal reuse is a transfer with retained burdens, never export and fresh input simultaneously.

- Selected flow: Untreated coniferous machining shavings waste
- Flow property / unit: Mass / kg
- Amount rule: q / Q for the completed cohort; cp_accept provides Q; retain unknown quantities as missing, never default zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue`
- Sources: usda-wood-handbook-2021

###### Bonded panel edge trim (`bonded_trim`)

Weigh bonded trim independently from clean shavings; record birch, core wood, cured adhesive and moisture constituents and verified treatment route. Separate pre-acceptance rejects from post-acceptance scrap using original event/cohort links; the latter enters L_new on the original acceptance basis without reducing Q. Preserve actual measured waste mass/state and associated treatment and failed-rework burdens in their own original-cohort ledgers.

- Selected flow: UF/PVAc-bonded birch-faced blockboard trimming waste
- Flow property / unit: Mass / kg
- Amount rule: q / Q for the completed cohort; cp_accept provides Q; retain unknown quantities as missing, never default zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue`
- Sources: epa-plywood-2002

###### Collected sanding dust (`sanding_dust`)

Weigh captured sanding dust with collection-system stocks; do not count captured matter as an air emission or assume untreated sawdust composition.

- Selected flow: UF/PVAc-containing blockboard sanding dust waste
- Flow property / unit: Mass / kg
- Amount rule: q / Q for the completed cohort; cp_accept provides Q; retain unknown quantities as missing, never default zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue`
- Sources: epa-plywood-2002

###### Edge-glue leftover (`pvac_waste`)

Weigh exported PVAc residue; retain wet composition and tank stocks. Separate from UF residue; record internal return separately.

- Selected flow: Uncured PVAc wood-adhesive residue waste
- Flow property / unit: Mass / kg
- Amount rule: q / Q for the completed cohort; cp_accept provides Q; retain unknown quantities as missing, never default zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_glue`
- Sources: unido-panel-adhesives-1977

###### Bonding-glue leftover (`uf_waste`)

Weigh exported UF-mixture residue with actual hardener/filler state and wet composition; cured lumps need their own physical record and treatment matching.

- Selected flow: Uncured formulated UF wood-adhesive residue waste
- Flow property / unit: Mass / kg
- Amount rule: q / Q for the completed cohort; cp_accept provides Q; retain unknown quantities as missing, never default zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_glue`
- Sources: unido-panel-adhesives-1977

###### Offsite wash-water waste (`wash_effluent`)

Measure exported wash wastewater, suspended solids and dissolved constituents; offsite treatment is a waste exchange, not direct elementary discharge to water.

- Selected flow: Adhesive-equipment wash wastewater to offsite treatment
- Flow property / unit: Mass / kg
- Amount rule: q / Q for the completed cohort; cp_accept provides Q; retain unknown quantities as missing, never default zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: epa-plywood-2002

###### Wrapping offcuts (`film_waste`)

Count only film lost during wrapping, with polymer and recipient evidence; no generic mixed-plastic substitution.

- Selected flow: Polyethylene wrapping-film trimming waste
- Flow property / unit: Mass / kg
- Amount rule: q / Q for the completed cohort; cp_accept provides Q; retain unknown quantities as missing, never default zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: ilcd-handbook-2010

###### Spent sanding paper (`spent_abrasive`)

Weigh spent paper plus adhered dust; subtract that adhered dust from separately weighed captured dust to avoid double count, using measured composition.

- Selected flow: Spent aluminium-oxide coated abrasive paper waste
- Flow property / unit: Mass / kg
- Amount rule: q / Q for the completed cohort; cp_accept provides Q; retain unknown quantities as missing, never default zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: epa-plywood-2002

##### Elementary flows

###### Formaldehyde released to air (`formaldehyde_air`)

Measure post-control stack and fugitive formaldehyde mass during production/conditioning and reconcile retained content. Selected native compartment is emissions to air, unspecified; refine only with verified actual compartment. Finished-product chamber class is not a factory emission factor.

- Selected flow: formaldehyde `08a91e70-3ddc-11dd-941b-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: q / Q for the completed cohort; cp_accept provides Q; retain unknown quantities as missing, never default zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: epa-plywood-2002

###### Methanol released to air (`methanol_air`)

Quantify if present in supplier adhesive or observed exhaust; retain detection limits and non-detect status. Do not assume zero or substitute total VOC mass.

- Selected flow: Methanol emitted to air, unspecified
- Flow property / unit: Mass / kg
- Amount rule: q / Q for the completed cohort; cp_accept provides Q; retain unknown quantities as missing, never default zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: epa-plywood-2002

###### Uncaptured filterable wood dust (`dust_air`)

Measure post-control and fugitive particulate mass with method/capture scope; no simultaneous total-PM and size-fraction double count. This exchange excludes captured dust.

- Selected flow: Filterable wood particulate matter emitted to air, unspecified
- Flow property / unit: Mass / kg
- Amount rule: q / Q for the completed cohort; cp_accept provides Q; retain unknown quantities as missing, never default zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: epa-plywood-2002

###### Evaporated water (`water_vapour`)

Determine actual water loss from matched measurements and supported species accounting, including adhesive cure formation/consumption where proven. Neither glue solids loss nor forced residual closure proves vapour mass.

- Selected flow: Water vapour emitted to air, unspecified
- Flow property / unit: Mass / kg
- Amount rule: q / Q for the completed cohort; cp_accept provides Q; retain unknown quantities as missing, never default zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: usda-wood-handbook-2021; unido-panel-adhesives-1977

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_single_product | scoped route | The base process has one accepted panel output and exported wastes. Assign its production burdens and required waste treatment to that panel cohort. Waste sale price alone does not prove a co-product. Retain physical residue masses unallocated and apply no avoided-product credit. | ilcd-handbook-2010 |
| a_multifunction | genuinely joint production | First subdivide by measured stage/circuit/lot records and isolate panel-specific adhesives and packaging. If a saleable residue is an actual co-product, add its correct product identity, output amount, function and provider/market evidence, then justify causal allocation for only inseparable shared burdens; disclose alternatives and sensitivity. A regional softwood-plywood mass allocation is contextual evidence, not a mandatory rule for this purchased-dry-input hardwood-faced route. | ilcd-handbook-2010; corrim-western-plywood-2025 |
| a_ledgers | all mass, species and burden accounts | Physical conservation and environmental burden partition are different ledgers. Never multiply panel, water, adhesive or waste physical masses by burden shares. Internal rework retains all earlier material and performed service burdens, adds actual new service only, and cannot generate extra first-acceptance output. Post-acceptance loss, scrap, downgrade or return to WIP cannot reverse Q; failed rework and later services remain attributable to the original cohort and its original Q, not current output or remaining stock. | ilcd-handbook-2010 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

The process has four measured stages: core preparation, bonding/pressing, conditioning/finishing, and acceptance/packing. Retain stage boundaries and internal transfers although the published foreground process is aggregated. Protocols define evidence to collect; they do not assert that a factory has supplied it. Every exchange uses the same 1 kg accepted-panel reference. A demonstrably absent conditional exchange may be marked not applicable with evidence; an unmeasured present exchange remains missing.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_accept | birch_blockboard_manufacture | panel and cohort stocks | foreground_record | panel/parcel ID; lot; first acceptance ID/time/gate; independently measured locked net mass and whole-panel acceptance moisture/composition; package tare; construction/species/grade; disjoint D_new/FG_new/L_new records; gross dispatch and linked returns; closing accepted FG; post-acceptance loss/use/downgrade/scrap; closing return-to-WIP; rework/retest/reacceptance links; old opening FG and purchased finished-panel receipts; original Q0/cohort; actual later masses and measured basis changes; raw/WIP/FG physical location | Calibrated net weighing after conditioning and grade/bond acceptance, independent of sales/dispatch. Deduplicate original event/parcel IDs and reconcile the full unique_acceptance bridge with signed net destinations. Record actual later composition/moisture separately and convert to original acceptance equivalents only from measured matched parcel/component histories; coordinate cp_wood/cp_glue/cp_water/cp_residue/cp_emission. Missing event, net-return, destination or conversion evidence remains unresolved, not a balancing loss estimate | kg | Each acceptance, custody/stock change and linked later service | Completion period plus original stock/cohort periods | One factory and exact route/configuration | per 1 kg reference flow using locked Q | Calibration, acceptance/parcel deduplication, net-return/destination evidence, measured basis conversion and original Q0/service history |
| cp_wood | birch_blockboard_manufacture | core_timber; face_birch; cross_birch | foreground_record | supplier and botanical species; harvest origin; treatment and dry state; wet and oven-dry sample masses; dimensions/grain axes; receipts/use/returns; opening/closing raw and WIP stocks; dry wood and water constituents; inherited burden vectors | Weigh lot withdrawals and stage transfers; sample unbonded wood separately by species and ply role for validated moisture analysis; trace each sheet to layup | kg | Every lot and opening/closing stock | Same completion period with retained incoming stock history | Same plant and lots as cp_accept | per 1 kg reference flow | Supplier certificates, sampling method, scales, kiln/start-state evidence and layup records |
| cp_glue | birch_blockboard_manufacture | pvac; uf_mix; pvac_waste; uf_waste | foreground_record | supplied wet mass; formulation; PVAc versus UF; water/non-water components; actual hardener/filler; batch losses; opening/closing tank/WIP states; interface spread; clamp/press times/temperature/pressure; cure extent; supported water generation G and consumption C; original burdens | Weigh whole supplied mixtures separately, reconcile applied/returned/residue masses; supplier composition plus matrix-valid water/volatile analysis. Establish actual same-lot foreground cure G/C by supported stoichiometry with measured reaction extent or validated matched analysis; retain unknown when evidence is absent | kg | Each glue batch and press lot | Completion period plus inherited adhesive/WIP history | Same factory and product lots | per 1 kg reference flow | Formulation/SDS, composition analysis, scales, process logs, bond tests and actual cure evidence |
| cp_energy | birch_blockboard_manufacture | electricity; heat; later services on old accepted stock | foreground_record | circuit/meter; voltage; kWh/MJ; supply/return mass and enthalpy; operating/idle hours; lot/stage; shared services attribution; actual service period; original accepted cohort and original Q; inherited opening/current/closing burden vectors | Read non-overlapping meters and reconcile invoices; measure net delivered press heat at named interface. Trace later storage/repacking/rework service to its original accepted cohort, never use current first-acceptance Q for an old cohort | MJ | Continuous meters; each period and service event | Completion period plus service events and original cohort periods | Matching plant/interface/supplier | per 1 kg reference flow | Meter calibration, time-matched invoices, enthalpy method, voltage and provider compatibility |
| cp_water | birch_blockboard_manufacture | wash_water; wash_effluent | foreground_record | fresh water mass/volume and density; recycle transfers; wastewater mass; dissolved/solid components; tank opening/closing stocks; destination; embedded adhesive water ownership | Meter external water and wastewater, weigh/convert only with measured density; collect compositional analysis and reconcile tanks; exclude internal recirculation from external totals | kg | Each washing event and period boundary | Same lots/period and tank carryover | Same plant with named offsite treatment | per 1 kg reference flow | Meters, density/laboratory records and treatment consignment |
| cp_residue | birch_blockboard_manufacture | clean_shavings; bonded_trim; sanding_dust | foreground_record | stage; wet mass; species; adhesive state; water/dry constituents; captured dust; internal transfers; opening/closing bin stocks; recipient/treatment; original cohort/first acceptance ID; pre-acceptance reject versus post-acceptance scrap/loss; actual state and original-acceptance-basis equivalent; original burden history | Separate and weigh unglued shavings, bonded trim and collected sanding dust; determine matrix-specific water and dry constituents; reconcile internal rework and offsite manifests. Reconcile post-acceptance scrap once to cp_accept L_new, retaining actual wet/dry/component waste quantities separately; neither disposal nor failed rework cancels original Q or performed burdens | kg | Each removal/return plus boundary stocks | Same completion lots and carryover | Same plant and actual waste recipient | per 1 kg reference flow | Scales, compositional analysis, physical segregation and waste tickets |
| cp_pack | birch_blockboard_manufacture | pe_wrap; abrasive; film_waste; spent_abrasive | foreground_record | polymer/backing specification; receipt/use/closing stocks; net package tare; replaced abrasive mass; adhered dust; waste route; acceptance cohort; later repacking event | Weigh each actual consumable and its losses independently; reconcile rolls/paper stocks; remove adhered-dust overlap; connect packaging placed on old FG to original accepted cohort | kg | Each lot, changeover and service event | Completion and original accepted-cohort periods | Exact plant/line and dispatch cohorts | per 1 kg reference flow | Tare/weighing records, material specification and waste manifests |
| cp_emission | birch_blockboard_manufacture | formaldehyde_air; methanol_air; dust_air; water_vapour | foreground_record | emission species/compartment; stack flow; inlet/outlet concentrations; time; capture efficiency; fugitive method; detection limit; condensation/retained mass; water-specific method; actual cure G/C; operating state | Integrate measured post-control concentration times matched gas volume and operating time, add non-overlapping fugitive mass and retain uncertainty. Resolve water separately from non-water volatiles and adhesive reactions; no generic VOC, chamber-test or softwood survey factor substitutes | kg | Representative campaign covering actual steady/startup/idle states, reconciled to complete period | Same completion lots and stocks | Factory air releases; treatment external | per 1 kg reference flow | Accredited method, full test conditions, detection limits, operating coverage and reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| unique_acceptance | panel | Q = sum of independently measured unique first-acceptance event net masses, locked at the declared gate on each original whole-panel moisture/composition basis. The complete bridge is Q = D_new + FG_new + L_new, using mutually exclusive signed net parcel/custody/destination records on that same basis and zero opening stock of this newly first-accepted cohort. D_new is net accepted dispatch after linked returns; FG_new is closing accepted FG; L_new is every other post-acceptance net destination, including actual loss/use/downgrade/scrap/waste and closing return to rework/WIP. Only if all other destinations are evidenced zero may Q = D_new + FG_new be used. A 100 kg acceptance = 60 kg net dispatch + 30 kg closing FG + 10 kg post-acceptance loss; Q stays 100 kg, not 90 kg. Internal gross loops and retest/reacceptance are not extra destinations or events; after reacceptance transfer a parcel once from closing WIP to FG/net dispatch without another Q. Old opening FG and purchased finished panels are separate original cohorts/receipts and do not enter new Q. Reconcile later moisture, PVAc/UF cure/volatiles, additions of glue/water, trimming and material state from actual matched parcel/component histories; original-acceptance equivalents do not include newly added material and are not physical mass replacements or an assumption of species conservation. Composite oven loss and generic wood/glue-solids factors do not establish the conversion. Unknown basis changes or unexplained destination residuals remain unresolved; never invent loss, reset Q or use sales/warehouse movements as event evidence. Preserve Q even if the whole accepted cohort is later lost. | cp_accept; cp_wood; cp_glue; cp_water; cp_residue; cp_emission; event/parcel and net destination histories | Locked Q in kg and separate actual physical ledgers | ilcd-handbook-2010 |
| normalize_reference | every current-cohort exchange | q_ref = q / Q; q is the actual exchange amount attributed to the same completed accepted cohort after stock and service reconciliation. Q is independently measured and locked by cp_accept under unique_acceptance, not reconstructed from dispatch and remaining stock; Q > 0 is required. Include attributable failed/zero-output, idle/startup, cleanup, loss-related and rework services, retaining prior burdens once. Later accepted-cohort service uses original Q under old_cohort_service; missing attribution remains unresolved. Retain kg/kg or MJ/kg as applicable; missing/zero Q leaves q absolute and result inconclusive. | q; Q; cp_accept; linked collection protocol | q_ref per 1 kg reference panel | ilcd-handbook-2010 |
| old_cohort_service | later services on previously accepted FG | s_ref,c = s_c / Q_c_original; s_c is measured later service assigned only to original accepted cohort c. Q0 = Q_c_original is the locked original first-acceptance event sum. Preserve it and all earlier burdens even after loss, scrap, downgrade, return to WIP, unsuccessful rework or when only some stock is dispatched now. Attach all actual later material/energy/packaging/waste/emission services to that original cohort once, retaining failed services rather than cancelling them on return or failure. Never divide by current Q, remaining stock or dispatch mass. If original Q is missing/zero, retain unnormalized service and block completeness. | s_c; Q_c_original; cp_accept; cp_energy; cp_pack | Original-cohort added service vector | ilcd-handbook-2010 |
| stock_conservation | each stage and factory boundary | Opening physical mass + external receipts + internal receipts = external outputs + internal transfers + closing mass, with all outputs including panel, residues and emissions. At the manufacturing gate, actual newly accepted output is outside that gate and cannot also be inside closing stock. For an extended boundary containing FG, count opening FG, purchased finished-panel receipts, actual net dispatch/transfers, losses and closing stock; acceptance is an internal state event and cannot be an extra external output. Returned WIP keeps its original acceptance link. Internal transfers cancel once on factory aggregation. Keep measured physical masses at actual wet/dry/component states separate from original-acceptance equivalents. Maintain dry wood by species, adhesive constituents, H2O, fossil/biogenic C and measured uncertainty; internal reactions conserve total mass/elements, not necessarily individual species. Never force an unknown residual into emissions. | cp_wood; cp_glue; cp_water; cp_residue; cp_emission; cp_accept | Auditable unallocated physical and elemental ledgers | usda-wood-handbook-2021 |
| water_species | actual H2O balance | H2O_open + H2O_external_in + G_H2O = H2O_external_out + H2O_close + C_H2O at aggregated boundary. Include timber/veneer/adhesive/product/waste water and actual evaporation; G/C are actual foreground reaction terms supported by cp_glue, not assumed zero, complete cure or generic resin synthesis. Upstream adhesive synthesis is not a second foreground term. Missing G/C or matrix-valid water data leaves this check inconclusive. | cp_glue; cp_wood; cp_water; cp_emission; cp_residue | Water balance and explicit unresolved terms | unido-panel-adhesives-1977; usda-wood-handbook-2021 |
| inherited_vectors | raw/WIP/FG and services | B_open + B_receipts + B_current_services = B_transferred + B_exported + B_close separately for each original material/service component. Carry prior embodied burdens through WIP and FG; add actual current services only once. Distinguish sold old FG from newly accepted current FG; unaccepted closing WIP retains its burdens instead of loading all current expense into Q. Carry-forward to a future first-acceptance denominator applies only to unaccepted material; accepted panels returned to WIP retain original Q0 and already performed burdens, and add later services under old_cohort_service. | All protocols; stage/cohort transfer records | Reconciled environmental burden vector | ilcd-handbook-2010 |
| electricity_units | electricity | MJ = 3.6 × kWh, then attribute by actual circuit/cohort and apply normalize_reference or old_cohort_service as appropriate. | cp_energy; Q or Q_c_original | MJ/kg for correct cohort | ilcd-handbook-2010 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | product and inputs | Prove each outer/crossband botanical species and origin, strip-core construction, axes and actual adhesive state. Common names, generic database labels and manufacturers' example variants do not prove a supplier lot. | cp_wood; cp_glue; cp_accept; jrc-european-birch-2016; paged-blockboard-2026 |
| dq_coverage | quantities and period | Use a declared contiguous period representative of the actual route with beginning/end stocks and linked older cohorts; justify coverage and uncertainty rather than impose an invented year/volume threshold. Missing data, zero, non-detect and evidence-backed not-applicable states remain distinct. Event Q, complete same-acceptance-basis destinations and original Q0/service attribution require independent evidence; a physical balance alone proves none of them. | Every protocol and primary source records |
| dq_chemistry | physical/species checks | Preserve supplied wet mixtures, separate physical mass from burden allocation, measure relevant water/volatile constituents and actual UF cure terms. A measured total loss or generic resin reaction cannot close an individual-species account. | cp_glue; cp_emission; cp_residue |
| dq_linkage | upstream and treatment | Flow identity does not prove provider compatibility. Verify actual property, reference unit/group, geography, date, moisture, voltage, supplied-mixture composition, waste adhesive state and recipient; keep unavailable bindings unresolved. | Complete native records plus supplier/treatment evidence |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_scope | target product | Reject incompatible layer count, core, veneer species, tropical/unknown faces, adhesive formulation route or heat boundary; require all reference qualifiers. A manufacturer's generic birch variant is insufficient proof of botanical lot identity. | paged-blockboard-2026; jrc-european-birch-2016 |
| v_basis | all exchanges | Require measured unique-first-acceptance Q and consistent q/Q for the current cohort; check old-service/Q_c_original separately. Q=0, unknown Q or unknown original Q gives unnormalized records and inconclusive completeness, never zero impacts. Verify the full disjoint same-basis Q = D_new + FG_new + L_new bridge, net linked returns and all post-acceptance loss/scrap/downgrade/closing WIP; two terms require evidenced zero other destinations. Old opening FG, purchased finished panels, returns, dispatch, retests and reacceptance must not increase Q or reduce locked Q0. Reject unsupported moisture/composition conversion or unexplained residual; preserve failed rework/later service burdens against original Q0. Keep event equivalents separate from actual physical/component inventories. | ilcd-handbook-2010 |
| v_balance | mass, water and burdens | Check physical total/elemental and species balances separately, including raw/WIP/FG and inherited service vectors. Account for actual cure G/C and measurement uncertainty; do not repair missing chemistry by guessed water emissions or erase prior-period burdens. | usda-wood-handbook-2021; unido-panel-adhesives-1977 |
| v_inventory | each native exchange | Require one atomic exchange per card; check actual Product/Waste/Elementary type, native reference property and complete unit-group conversion, supplier state and environmental compartment. Resolve missing reference/other UUIDs and providers before operational dataset use; report checks performed, skipped and unresolved separately. | ilcd-handbook-2010 |
| v_release_scope | interpretation | Factory process data and foreground check results do not establish scientific approval, structural compliance, an EPD, acceptable indoor-air performance or whole-life environmental superiority. No independent review or publication status is implied by a projection/check pass. | paged-blockboard-2026; epa-plywood-2002 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing unit-process dataset for the specifically qualified unfinished five-layer birch-faced strip-core panel. |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Assemble an explicitly scoped supplier-compatible cradle-to-gate model using matched upstream material/energy and treatment datasets; downstream furniture/joinery models retain this gate/state. |
| excluded_use | Whole-leaf classification coverage, conifer/tropical-faced or all-veneer substitution, structural claims, use-phase/chamber emissions, whole-life comparisons and universal density/recipe/factor defaults. |
| required_metadata | All reference qualifiers; stage/cohort/stock lineage; native flow/property/unit and provider identities; method boundary; actual test/measurement evidence; allocation and normalization equations; missing terms. |
| required_quality_disclosure | Foreground-only versus assembled boundary; unknown reference/other UUIDs or providers; actual coverage/uncertainty/detection limits; botanical/chemistry gaps; scientific and translation review status; held_pending_classification_review candidate association and decision ADR; original event Q/Q0, measured acceptance basis and complete net-destination residuals. |
| update_trigger | Changes in botanical supply, core/ply geometry, supplied adhesive formulation, voltage/heat source, measurement/stock/cohort basis, waste destination, native identity or new relevant evidence. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| paged-blockboard-2026 | literature | PAGED Plywood S.A., Paged Blockboard technical data sheet, 1 April 2026, pp.1–3; https://pagedplywood.com/wp-content/uploads/2026/04/20260401_TDS_Paged-Blockboard_EN.pdf | Actual solid-softwood-strip core with two birch/alder or pine veneer layers each side, unfinished non-structural product. Only birch subset used; no numeric performance, botanical supplier identity, recipe or factory inventory transferred. |
| paged-blockboard-2020 | literature | PAGED, Paged Blockboard product specification sheet, February 2020; https://www.pagedplywood.com/wp-content/uploads/2020/08/Paged_Blockboard_ProductSpecificationSheet_022020.pdf | Historical manufacturer corroboration of five-layer solid core and birch outer variant; same manufacturer is not an independent second source. No species/recipe/factor inference. |
| jrc-european-birch-2016 | official_guidance | Beck, Caudullo, de Rigo and Tinner, European Atlas of Forest Tree Species, 2016, pp.70–73, Betula pendula, Betula pubescens and other birches in Europe; https://forest.jrc.ec.europa.eu/media/atlas/Betula_spp.pdf | Botanical broadleaved European birch context; lot identity and harvest origin still need supplier evidence. No tree-to-panel quantity transfer. |
| unido-panel-adhesives-1977 | official_guidance | UNIDO ID/WG.248/9, Industrial application and formulation of synthetic resin adhesives in the wood based panel industry, 10 October 1977, section2.2 printed p.15 and section3.1; https://downloads.unido.org/ot/47/90/4790807/00001-10000_07656.pdf | Historical PVAc strip-edge gluing versus thermosetting skin bonding context; not proof of current supplier formulation, use rate, cure extent or performance. |
| usda-wood-handbook-2021 | handbook | USDA Forest Products Laboratory, Wood handbook—wood as an engineering material, FPL-GTR-282, 2021, chapters4,10,11; https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf | Unbonded-wood moisture basis and composite/adhesive/ply context; composite oven loss is not universally water, and no density/yield/cure factor is adopted. |
| epa-plywood-2002 | official_guidance | US EPA AP-42 section10.5 Plywood Manufacturing, January2002, pp.10.5-1–4; https://www.epa.gov/sites/default/files/2020-10/documents/c10s05.pdf | Qualitative UF interior bonding, pressing, finishing, extraction and emission-source questions. Broader plywood process includes upstream routes outside this dry-input boundary; no numerical recipe, press setting or emission factor adopted. |
| ilcd-handbook-2010 | official_guidance | European Commission JRC, ILCD Handbook General guide for Life Cycle Assessment—Detailed guidance, first edition March2010, section7.9; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional subdivision and transparent multifunctionality; foreground stock/cohort protocols implement auditable physical and burden accounting, not an official factory default. |
| corrim-western-plywood-2025 | literature | CORRIM, Life Cycle Assessment of Softwood Plywood Production—Western Region, edited22July2025, section3.2.6; https://corrim.org/wp-content/uploads/2025/07/LCA-Report-Western-Plywood-Report-Final-07222025.pdf | Counterexample of regional softwood integrated-route mass allocation and product-specific packaging; not direct evidence for this route's factors, density, yields, adhesive recipe or mandatory allocation. |
| un-cpc-3-2025 | official_guidance | United Nations Statistics Division, CPC Version3.0, 30June2025 explanatory notes and current subclass31423/parent3142; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/31423 | The 31423 title and crossed-veneer conditions are considered alongside 31413 blockboard/core notes; they do not independently decide this solid-strip-core construction. No official correction or current mapping acceptance inferred. |
| un-cpc-31413-2025 | official_guidance | United Nations Statistics Division, CPC Version3.0 subclass31413, hierarchy and explanatory notes; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/31413 | Contrary evidence: notes include blockboard and allow a central core of veneer or another material despite the solely-sheets hierarchy/title. A solid-strip core does not automatically exclude 31413; no reassignment or authoritative ruling inferred. |
