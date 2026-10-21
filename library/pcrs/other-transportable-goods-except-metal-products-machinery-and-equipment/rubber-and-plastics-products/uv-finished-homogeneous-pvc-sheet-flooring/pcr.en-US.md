---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.uv-finished-homogeneous-pvc-sheet-flooring
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# UV-finished homogeneous PVC sheet flooring from onsite compounding

## 1. Scope and Applicability

This bounded manufacturing method starts with purchased PVC resin and separately supplied formulation ingredients. It includes onsite batching/plasticisation, calendering and chipping, chip blending/scattering and consolidation into a compact through-pattern sheet, factory UV finishing, annealing, cooling, trimming/rolling, tests and first quality release. It covers non-foamed, non-conductive, unbacked homogeneous flexible PVC flooring rolls. A thin protective finish does not turn the body into a printed multilayer floor. The representative branch uses DOTP, ground calcium carbonate, a supplied calcium-zinc stabilizer formulation and a supplied UV-curable polyurethane-acrylate floor-coating formulation; actual pigment and processing additions remain separately identified. [ahf-homogeneous-2023; prodinex-pvc-2025; arkema-vinyl-formulation]

This is a transparent technical synthesis, not a claim that the sources describe one SKU, recipe, factory or contemporary order. AHF documents the complete homogeneous sheet route and real coated roll endpoint. Prodinex independently documents adjacent dryback flooring ingredients but uses a different multilayer pressing route. Arkema demonstrates ingredient choices and alternative additives in LVT substrates, including a separate tin-stabilized rigid formulation; neither is homogeneous-sheet production proof. No source mass fractions, phr, size, density, energy, losses, lifetime, certification or allocation key is a default here. In particular the Prodinex steam supply and waste/packaging boundary statements are not transferred; the AHF area allocation is not this method's allocation rule.

Exclude paper wallpaper, paper-backed vinyl wallpaper, plastic wall/ceiling coverings, self-adhesive stock, printed/decor-film multilayer flooring, SPC/WPC rigid cores, backed/foam/textile products, conductive or safety-grit constructions, PVC-free polymers, linoleum, tiles/block-slicing routes, purchased finished-floor repacking and integrated polymerisation. A materially different construction or manufacturing route needs separate applicability review; this subset does not cover all CPC 36910.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.uv-finished-homogeneous-pvc-sheet-flooring |
| classification_refs | CPC 3.0:36910; narrower semantic subset; no accepted mapping implied |
| covered_products | Compact unbacked non-conductive homogeneous flexible PVC flooring rolls with factory UV protective finish |
| excluded_products | Paper/vinyl wallpaper; plastic wall/ceiling coverings; self-adhesive material; heterogeneous printed floors; rigid cores; foam/backing/reinforcement; conductive/grit floors; tiles; other polymers; purchased-finished-floor repacking |
| representative_product | One specified through-pattern roll grade with DOTP and a supplied CaZn stabilizer, ground calcium carbonate and a supplied polyurethane-acrylate UV finish; no fixed recipe or product weight |
| production_route | Raw ingredients → onsite mixing/plasticisation → calendered chip intermediate → blending/scattering/consolidation → UV coating/curing → annealing/cooling → trim/roll/test → first release → separately observed FG services |
| market_state | Cooled conditioned cured rolls at first quality release; cores and detachable packages excluded from product net mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture a specified resilient interior floor covering for separately modelled installation |
| How much | 1 kg net newly first-quality-released finished flooring |
| How well | Actual through-pattern construction and coating cure, thickness/width/length, dimensional stability, residual indentation and declared slip/fire/emission acceptance evidence; no universal threshold or certification implied |
| How long or cycle | One unique first-release cohort plus a declared observed FG service interval; no assumed installed life or replacement equivalence |
| reference_flow_link | released_floor |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Floor coverings of plastics, in rolls or in the form of tiles, wall or ceiling coverings of plastics `97494e7c-4947-433c-9b86-cf2baa643329` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | PVC resin form and supplier grade; each whole purchased formulation and its composition/assay/carrier; DOTP identity and CaZn system; filler mineral/particle specification; each pigment and processing additive; chip/consolidation route and actual thermal equipment; unbacked non-foamed non-conductive through-pattern body; UV finish SKU and supplied wet/solids chemistry and cure evidence; coating retention and any measured volatiles; roll dimensions and net conditioned mass plus measured kg/m2; grade-specific acceptance tests; first-release Q and unique release/rework/return IDs; complete WIP/FG stocks and each inherited exchange burden vector; site/period and measured voltage/provider; cooling/heat supply and actual return states; each package composition and gross-shipment/return ledger; native generic-flow restrictions and upstream compatibility |

Declare every qualifier in metadata, process notes, reference comments or equivalent dataset fields. The native reference UUID is a broad manufactured-plastics covering family with no fixed polymer, formulation, CAS, size, geography or provider. Its finished-product/production-mix-at-plant context admits this one qualified floor roll; it does not identify a wall covering, tile basket, certified grade or ready-made background dataset. Preserve each selected card's full restrictions when consuming guidance. Net kg does not establish equal installed area or service life.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is unique newly first-quality-released net flooring kg for the same grade/state cohort, using calibrated gross-minus-core/package tare at a declared conditioning/moisture state. Include retained cured finish. Retesting, shipping or returning an already released roll never creates Q; closing FG already contains its first-release Q. |
| area_conversion | reference product | Mass and area | kg; m2 | Measure net same-lot finished mass m and usable roll area S independently; g = m/S kg/m2 and an area s converts to s*g kg. Exclude core, overlap, package and test/reject area. Do not copy source grammage, infer density from thickness or guess kg per roll. |
| supply_basis | all inventory rows | Mass and supplied state | kg | Each purchased formulation is one complete supplied exchange counted once. Active fraction, carrier water and assay are subledgers, not additional purchases. Actual onsite formulation uses each separately purchased ingredient, energy and loss. Supplied nonvolatile solids do not automatically equal retained cured mass. |
| energy_units | make_electricity; fg_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | The native energy chain is Units of energy 93a60a57-a3c8-11da-a746-0800200c9a66 with reference MJ. Convert integrated kWh to MJ using 3.6 before attribution; measured power rates alone require integration. Nameplate power is not consumption. |
| physical_state | all inventory rows | Mass and actual state | kg; m3; h | Integrate only genuine rates. Integrated gas/liquid volume is already an amount. Volume-to-mass conversion requires independently measured density of that substance at its actual composition/T/P; distinguish standard/actual and wet/dry gas. Do not apply water density to coating, solvent, effluent or gas or infer density from secondary flow properties. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Delivered PVC resin, each separately supplied formulation ingredient and utilities; inherited WIP and internal regrind with original exchange burden vectors |
| starting_condition_role | Foreground receipt gate; upstream resin/ingredient/coating manufacture retained in matched supplier datasets |
| product_classification_scope | Qualified homogeneous flexible PVC floor rolls within CPC 36910, independent of native broad flow labels |
| recursive_input_rule | Purchased finished flooring is a distinct upstream product with disclosed omitted stages, never a substitute for resin compounding. Internal chips, sheet trim and rework retain burden history and cancel as internal transfers. |
| upstream_dataset_requirement | Match actual polymer/formulation, supplied wet state, mineral grade, coating system, electricity delivery voltage/geography/period, water treatment and packaging providers; include inbound transport explicitly. A flow UUID alone proves no provider compatibility. |
| disclosure | Report manufacture through first release and a separately dated observed FG packing/storage/handling/dispatch ledger. Disclose unobserved service tails, capital treatment, background/transport links and separate installation/use/end-of-life modules. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | floor_make | Retain every real mixing/plasticisation/calendering/chipping, chip handling/consolidation, coating/UV cure, annealing/cooling, trimming/rolling/test step, including failed and zero-output lots, startup/shutdown, idle, cleanup, purge, test samples and actual regrinding/rework. The chip intermediate is not a purchased finished floor. | ahf-homogeneous-2023 |
| boundary_formulation | floor_make | Identify every separately purchased ingredient and whole supplied formulation. The listed branch is a technical synthesis, not a universal recipe. Add a distinct physically named input/outlet card for every actual unlisted pigment, additive, cleaning reagent, filter, lubricant, fuel, refrigerant or treatment chemical before dataset use; unknown amounts are not zero and cannot be hidden under other. | ahf-homogeneous-2023; prodinex-pvc-2025; arkema-vinyl-formulation |
| boundary_utilities | floor_make | Record actual cooling/heating circuits and inlet/outlet states. The representative electric heating/UV branch assumes no combustion or purchased steam. If actually supplied, add the specific heat/steam/hot-water Product input and each real condensate/heat-exchange-water Product return, mass/T/P/enthalpy and provider energy/water convention. A boiler requires its own measured fuel, air/water, ash and individual species; an adjacent EPD's steam is not evidence of a circuit here. | ahf-homogeneous-2023; prodinex-pvc-2025 |
| boundary_service | fg_service | Keep first release Q separate from subsequent packing, storage, handling and dispatch. Pair internal Q transfer once. Keep opening/closing FG, physical returns, original shipment reversal and incremental service/rework by original release lot. Old lots retain old denominators/burden vectors; their delivery or reinspection creates no new Q. | ilcd-allocation-2010 |
| boundary_water_species | floor_make | Keep total physical mass and relevant C/Cl/Ca/Ti balances independent from measured chemical-species evidence. Water in a formulation, retained/free/phase water and actual reaction water are distinct; fusion, annealing or UV crosslinking does not justify default reaction water. Do not solve two unknown emissions/water quantities with one residual or convert VOC/COD into an assumed chemical mass. | ahf-homogeneous-2023; arkema-vinyl-formulation |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| floor_make | Ingredient-to-first-release flooring manufacture | required | Selected homogeneous chip-consolidation and UV-finish route including actual conditional additions/outlets | Foreground production and WIP/regrind burden carry | per 1 kg reference flow |
| fg_service | Observed finished-goods services | required | Original release lot and actual observed interval; disclose open service tails | Separate FG/package/return and incremental service ledger | per 1 kg reference flow |

For every non-reference card, A_i is the undivided attributed exchange numerator in that card's own unit after raw-unit conversion and stock/burden reconciliation. Section 8 normalize_once performs A_i / Q exactly once. Collection methods retain raw totals; the aggregation field states the final reporting basis only. Card text and aggregation references do not repeat division. Conditional absence needs actual route evidence; unknown is not not_applicable. Every physical stream is separate even when one protocol or meter serves several cards.

### Process: Ingredient-to-first-release manufacture (`floor_make`)

#### Inputs

##### Product flows

###### PVC resin powder (`pvc_resin`)

One purchased virgin PVC resin powder grade for onsite compounding; record K-value/particle specification and actual moisture, supplier and lot. This is neither waste PVC nor complete precompounded pellets. Tiangong flow UUID is unresolved; retain this single specific exchange and verify complete supply/chemistry/form/destination and compatible identity before actual dataset use, without a generic substitute. Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: PVC resin powder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_material collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: ahf-homogeneous-2023; arkema-vinyl-formulation

###### Ground limestone filler (`limestone`)

Native Product is limestone filler/CaCO3 received at plant with production-mix context. It has no CAS, fixed grade, particle size, ground/precipitated route, geography, supplier or general comment. Its CPC 15200 is a broad calcareous-rock grouping; the coherent material identity does not prove filler quality. Use only the actual ground-limestone filler with measured moisture/purity/particle and any surface treatment; match its upstream provider independently, not quicklime or precipitated carbonate.  Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: Calcium carbonate `dfce1026-0ad5-4362-87de-4b425a583e6b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_material collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: ahf-homogeneous-2023; prodinex-pvc-2025; arkema-vinyl-formulation

###### DOTP plasticizer (`dotp`)

Native Product is clear liquid DOTP CAS 6422-86-2, also dioctyl terephthalate, synthetic plasticizer at factory; route text describes 2-ethylhexanol plus terephthalic acid. It is not DEHP/DINP or the ortho-phthalate isomer. Native CPC 34170 is an imperfect generic organic grouping, not evidence overriding the coherent CAS/name/route. No fixed purity, grade, geography or provider is supplied. Record whole supplied grade and impurities once; any materially different chemical or synthesis/provider needs independent compatibility.  Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: Bis(2-ethylhexyl) terephthalate `1b7a939f-e831-4fd8-b5bc-feb88fba435d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_material collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: prodinex-pvc-2025; arkema-vinyl-formulation

###### Supplied calcium-zinc stabilizer (`cazn_stabilizer`)

One whole supplied CaZn formulation with actual carrier, salts, assay and supplier specification; not pure calcium or zinc stearate. Embedded carrier/additives remain subledgers. A co-stabilizer alone cannot identify this complete formulation. Tiangong flow UUID is unresolved; retain this single specific exchange and verify complete supply/chemistry/form/destination and compatible identity before actual dataset use, without a generic substitute. Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: Calcium-zinc PVC heat-stabilizer formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_material collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: ahf-homogeneous-2023; prodinex-pvc-2025; arkema-vinyl-formulation

###### Titanium dioxide pigment (`titanium_dioxide`)

Conditional separately purchased TiO2 pigment, with actual rutile/anatase form, surface treatment and supplied composition. If present inside a purchased masterbatch, count that whole masterbatch once instead and add its named card; do not buy its TiO2 again. Other actual colours require their own single pigment or whole supplied preparation cards. Tiangong flow UUID is unresolved; retain this single specific exchange and verify complete supply/chemistry/form/destination and compatible identity before actual dataset use, without a generic substitute. Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: Titanium dioxide pigment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_material collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: arkema-vinyl-formulation

###### Epoxidized soybean oil (`esbo`)

Conditional one purchased epoxidized soybean oil grade when actually added; record epoxy specification and supplied composition. It is not automatically included merely because an adjacent LVT recipe uses it. Tiangong flow UUID is unresolved; retain this single specific exchange and verify complete supply/chemistry/form/destination and compatible identity before actual dataset use, without a generic substitute. Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: Epoxidized soybean oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_material collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: arkema-vinyl-formulation

###### Stearic acid lubricant (`stearic_acid`)

Conditional separately supplied stearic acid only; record commercial purity and fatty-acid mixture. A formulated lubricant blend requires its own complete supplied identity, not a pure-acid proxy. Tiangong flow UUID is unresolved; retain this single specific exchange and verify complete supply/chemistry/form/destination and compatible identity before actual dataset use, without a generic substitute. Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: Stearic acid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_material collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: arkema-vinyl-formulation

###### Acrylic processing-aid preparation (`acrylic_aid`)

Conditional one complete purchased acrylic processing-aid preparation with supplier chemistry and physical form; not a generic additive basket or an assumed impact modifier. Actual distinct modifier or lubricant needs a separate named card. Tiangong flow UUID is unresolved; retain this single specific exchange and verify complete supply/chemistry/form/destination and compatible identity before actual dataset use, without a generic substitute. Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: Acrylic PVC processing-aid formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_material collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: arkema-vinyl-formulation

###### Supplied UV floor finish (`uv_finish`)

One whole ready-to-apply purchased floor finish, on its actual supplied wet mass. Record oligomer/reactive diluent/photoinitiator, water and solvent fractions as composition subledgers and verify cure/retention and any measured loss; do not assume 100% solids, zero VOC or water-forming condensation. AHF supports UV coating and the adjacent Prodinex case names polyurethane acrylate; this synthesis does not identify AHF coating chemistry or a shared SKU. Actual onsite preparation must instead list every purchased component and its mixing energy/loss. Tiangong flow UUID is unresolved; retain this single specific exchange and verify complete supply/chemistry/form/destination and compatible identity before actual dataset use, without a generic substitute. Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: UV-curable polyurethane-acrylate floor-coating formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_finish collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish`
- Sources: ahf-homogeneous-2023; prodinex-pvc-2025

###### Manufacturing electricity (`make_electricity`)

Native Product is customer-side <1 kV alternating-current consumption mix and grid-average supply, not hydropower generation, voltage-transformation service or a power-plant output. The native supply geography is CN. Bind this UUID only at an actual Chinese <1 kV grid-average customer gate and match provider/period independently; another geography or voltage requires its own verified identity. The Korean AHF case does not authorise using this CN flow for Korea. Reconcile actual transformer/distribution losses at the declared gate without double purchasing the same electricity. Native reference property is Net calorific value/MJ, not Mass. Meter every real mixing, heating, calender, chip handling/consolidation, UV, annealing, cooling, trimming, extraction, compressor and cleanup/idle load. Thermal power supplies are actual equipment records, not an assumed steam circuit.  Measurement support chain: Units of energy 93a60a57-a3c8-11da-a746-0800200c9a66, reference MJ.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_energy collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources: ahf-homogeneous-2023

###### Tap-water makeup (`make_water`)

Conditional actual tap water entering cooling/cleanup; native Product has no fixed treatment route, grade, geography, supplier, synonyms or general comment. Its active CPC is natural water; a preserved historical other-goods classification is archival only. Do not substitute raw river abstraction, deionized water or purchased heat-exchange-water service. Record actual supply quality/provider and independent loop stocks, purge, entrainment, retained water and net vapour.  Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: Water, tap `6a8b6455-e9bb-4cb9-81ea-5e83413d5fe1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_water collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources:

###### Isopropanol cleaner (`clean_ipa`)

Conditional one actual isopropanol cleaning preparation, including its supplied water and impurities once. No cleaning recipe is prescribed; if another cleaner is used replace this with the actual individually named supply and outlet, and trace residual solvent and contaminated wipes separately. Tiangong flow UUID is unresolved; retain this single specific exchange and verify complete supply/chemistry/form/destination and compatible identity before actual dataset use, without a generic substitute. Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: Isopropanol cleaning preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_material collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources:

###### Old released-floor rework receipt (`returned_floor_rework`)

Native Product is a manufactured plastic-covering family at plant, with no fixed polymer, CAS, recipe, dimensions, grade, geography, provider or performance; synonyms are empty. Its floor/wall/ceiling alternatives are not a mixed exchange here: this card is one specified compact unbacked non-conductive homogeneous flexible PVC floor roll with cured UV finish. Neither the broad classification nor UUID establishes background compatibility or installed service equivalence. Conditional physical receipt paired with fg_service rework_to_make; retain original release/shipment and inherited burden vectors. Only actual additional processing is new; original mass never becomes new Q.  Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: Floor coverings of plastics, in rolls or in the form of tiles, wall or ceiling coverings of plastics `97494e7c-4947-433c-9b86-cf2baa643329`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_stock collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stock`
- Sources: ilcd-allocation-2010

##### Waste flows

##### Elementary flows

###### Net oxygen uptake from air (`oxygen_uptake`)

Conditional independently evidenced net molecular O2 uptake where actual ozone generation or coating chemistry consumes it. Keep oxygen, ozone and any water/reaction products as separate species; do not infer uptake or reaction water from a total mass residual. Bulk recirculating/pass-through air is not automatically consumed oxygen. Native CAS 7782-44-7; Elementary resource from air, renewable element resource, Mass/kg. Use only independently measured net molecular O2 uptake, not pass-through air, an emitted oxygen flow or purchased oxygen. Native liquid-oxygen synonyms do not establish a bought supply or a phase conversion. Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_species collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources:

#### Outputs

##### Product flows

###### Newly first-released flooring (`released_floor`)

Native Product is a manufactured plastic-covering family at plant, with no fixed polymer, CAS, recipe, dimensions, grade, geography, provider or performance; synonyms are empty. Its floor/wall/ceiling alternatives are not a mixed exchange here: this card is one specified compact unbacked non-conductive homogeneous flexible PVC floor roll with cured UV finish. Neither the broad classification nor UUID establishes background compatibility or installed service equivalence. This is the only reference output: newly accepted net Q, including retained finish, after actual cure/conditioning and quality tests. Exclude cores/packages/rejects and previously released rework. Q transfers once to FG and cancels internally in a combined physical ledger; do not add closing FG as another production output.  Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: Floor coverings of plastics, in rolls or in the form of tiles, wall or ceiling coverings of plastics `97494e7c-4947-433c-9b86-cf2baa643329`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources: ahf-homogeneous-2023

###### Reworked old flooring back to FG (`old_rework_back`)

Native Product is a manufactured plastic-covering family at plant, with no fixed polymer, CAS, recipe, dimensions, grade, geography, provider or performance; synonyms are empty. Its floor/wall/ceiling alternatives are not a mixed exchange here: this card is one specified compact unbacked non-conductive homogeneous flexible PVC floor roll with cured UV finish. Neither the broad classification nor UUID establishes background compatibility or installed service equivalence. Conditional accepted return of old released material after incremental rework, paired with fg_service old_rework_receipt. Preserve original denominator and cumulative burden; no duplicate first release.  Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: Floor coverings of plastics, in rolls or in the form of tiles, wall or ceiling coverings of plastics `97494e7c-4947-433c-9b86-cf2baa643329`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_stock collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stock`
- Sources: ilcd-allocation-2010

###### Transferred PVC regrind product (`sold_pvc_regrind`)

Conditional one separately identified uncoated regrind sold as a useful material; actual quality, buyer specification, gate, legal/economic state and burdens are required. Not finished flooring or automatic coproduct credit. Material sent for waste treatment remains the separate waste card; unresolved waste/recycling method requires review. Tiangong flow UUID is unresolved; retain this single specific exchange and verify complete supply/chemistry/form/destination and compatible identity before actual dataset use, without a generic substitute. Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: Uncoated flexible PVC compound regrind
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_material collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: ilcd-allocation-2010

##### Waste flows

###### Uncoated compound scrap sent out (`uncoated_scrap`)

One actual uncoated trim/purge stream leaving for a declared treatment destination. Keep internal chipping/reuse as transfers with inherited vectors, not new purchases or negative waste. Separate materially different purge/reject composition. Tiangong flow UUID is unresolved; retain this single specific exchange and verify complete supply/chemistry/form/destination and compatible identity before actual dataset use, without a generic substitute. Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: Uncoated flexible PVC compound scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_material collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources:

###### Cured coated-floor rejects (`coated_scrap`)

One segregated coated offcut/reject stream, with actual cured coating and contamination. Do not merge with uncoated regrind; its reuse limit and treatment are evidenced separately. Tiangong flow UUID is unresolved; retain this single specific exchange and verify complete supply/chemistry/form/destination and compatible identity before actual dataset use, without a generic substitute. Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: UV-coated flexible PVC flooring scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_material collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources:

###### Captured compound dust (`captured_dust`)

One physically co-collected filter-dust waste with measured PVC/mineral/pigment composition. It is not an emission; separately collected resin/filler/pigment dust requires separate cards. Include weighed actual filter/wipe carrier on its own material/waste card if replaced. Tiangong flow UUID is unresolved; retain this single specific exchange and verify complete supply/chemistry/form/destination and compatible identity before actual dataset use, without a generic substitute. Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: PVC flooring compound filter dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_material collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources:

###### Uncured finish waste (`spent_finish`)

Conditional one segregated uncured liquid residue at its actual solids/water/solvent state, including expired material and cleanup drain. Cure sludge and contaminated wipes, if physically distinct, need separate named outlets. Tiangong flow UUID is unresolved; retain this single specific exchange and verify complete supply/chemistry/form/destination and compatible identity before actual dataset use, without a generic substitute. Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: Uncured polyurethane-acrylate floor-coating residue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_finish collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish`
- Sources:

###### Cooling-loop blowdown (`cooling_purge`)

Conditional one actual blowdown effluent with measured dissolved/suspended composition and receiver. Internal circulating water is not external consumption; supplier-owned clean return is a Product return instead. Tiangong flow UUID is unresolved; retain this single specific exchange and verify complete supply/chemistry/form/destination and compatible identity before actual dataset use, without a generic substitute. Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: Cooling-loop blowdown wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_water collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources:

###### Spent isopropanol cleaner (`spent_ipa`)

Conditional separate spent cleaning solution with actual contamination/water/solvent; record recipient and recovery/treatment. Carrier liquid, retained product residue and air losses must reconcile independently. Tiangong flow UUID is unresolved; retain this single specific exchange and verify complete supply/chemistry/form/destination and compatible identity before actual dataset use, without a generic substitute. Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: Spent isopropanol cleaning solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_species collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources:

##### Elementary flows

###### Net water vapour to air (`water_vapour`)

Conditional actual H2O vapour, measured independently from loop/humidity and formulation records. Distinguish liquid droplets, free/retained/phase water and any independently proven reaction water; the thermal/UV route alone creates no stoichiometric water. Native CAS 7732-18-5; Elementary emission to air, unspecified, Mass/kg. Require actual species and compartment evidence. Native mixture/solution synonyms do not permit substituting a whole formulation or total indicator; indoor, water, soil, long-term or more specific air compartments require another verified identity. Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_water collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources:

###### Hydrogen chloride to air (`hcl_air`)

Conditional measured HCl species from actual degradation or upset; include failed runs. Determine medium, time and capture; no default emission factor or residual-to-HCl assignment. Captured chloride is a separate measured effluent/waste constituent. Native CAS 7647-01-0; Elementary emission to air, unspecified, Mass/kg. Require actual species and compartment evidence. Native mixture/solution synonyms do not permit substituting a whole formulation or total indicator; indoor, water, soil, long-term or more specific air compartments require another verified identity. Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: hydrogen chloride `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_species collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources:

###### Isopropanol to air (`ipa_air`)

Conditional actual isopropanol CAS 67-63-0 emitted during cleaning, supported by chemical-specific measurements. Total VOC or cleaner deficit alone is not isopropanol mass. Other actual volatile compounds require separate chemical cards. Native CAS 67-63-0; Elementary emission to air, unspecified, Mass/kg. Require actual species and compartment evidence. Native mixture/solution synonyms do not permit substituting a whole formulation or total indicator; indoor, water, soil, long-term or more specific air compartments require another verified identity. Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_species collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources:

###### UV-system ozone to air (`ozone_air`)

Conditional O3 only when the actual lamp/exhaust creates a measured release. Ozone-free lamps/LEDs require evidence for absence. Record separate oxygen consumption/return where material; ozone is not oxygen mass or generic oxidant. Tiangong flow UUID is unresolved; retain this single specific exchange and verify complete supply/chemistry/form/destination and compatible identity before actual dataset use, without a generic substitute. Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: Ozone to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_species collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources:

###### Escaped compound aerosol (`escaped_dust`)

Conditional one actual composition-defined compound aerosol, with receptor medium and disjoint size fractions as required. Do not combine separate pure filler/pigment aerosols or call all dust PVC. Captured dust and escaped particulate are different destinations; no opacity-to-species conversion. Tiangong flow UUID is unresolved; retain this single specific exchange and verify complete supply/chemistry/form/destination and compatible identity before actual dataset use, without a generic substitute. Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: PVC flooring compound particulate to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_species collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources:

### Process: Observed finished-goods services (`fg_service`)

#### Inputs

##### Product flows

###### Paired first-release FG receipt (`release_to_stock`)

Native Product is a manufactured plastic-covering family at plant, with no fixed polymer, CAS, recipe, dimensions, grade, geography, provider or performance; synonyms are empty. Its floor/wall/ceiling alternatives are not a mixed exchange here: this card is one specified compact unbacked non-conductive homogeneous flexible PVC floor roll with cured UV finish. Neither the broad classification nor UUID establishes background compatibility or installed service equivalence. Pair physical Q with released_floor once and carry its entire per-exchange burden vector. Closing FG already contains this Q. This internal transfer cancels in consolidation.  Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: Floor coverings of plastics, in rolls or in the form of tiles, wall or ceiling coverings of plastics `97494e7c-4947-433c-9b86-cf2baa643329`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_fg collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: ilcd-allocation-2010

###### Customer physical return (`customer_return`)

Native Product is a manufactured plastic-covering family at plant, with no fixed polymer, CAS, recipe, dimensions, grade, geography, provider or performance; synonyms are empty. Its floor/wall/ceiling alternatives are not a mixed exchange here: this card is one specified compact unbacked non-conductive homogeneous flexible PVC floor roll with cured UV finish. Neither the broad classification nor UUID establishes background compatibility or installed service equivalence. Conditional physical return matched to original gross shipment and first release. Reverse the original delivery and its historical vector; distinguish commercial credit without physical movement. Inspection or redelivery makes no new Q.  Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: Floor coverings of plastics, in rolls or in the form of tiles, wall or ceiling coverings of plastics `97494e7c-4947-433c-9b86-cf2baa643329`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_fg collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: ilcd-allocation-2010

###### Old-floor rework return receipt (`old_rework_receipt`)

Native Product is a manufactured plastic-covering family at plant, with no fixed polymer, CAS, recipe, dimensions, grade, geography, provider or performance; synonyms are empty. Its floor/wall/ceiling alternatives are not a mixed exchange here: this card is one specified compact unbacked non-conductive homogeneous flexible PVC floor roll with cured UV finish. Neither the broad classification nor UUID establishes background compatibility or installed service equivalence. Pair with old_rework_back; preserve original lot mass and burden plus actual incremental processing. No new first-release denominator.  Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: Floor coverings of plastics, in rolls or in the form of tiles, wall or ceiling coverings of plastics `97494e7c-4947-433c-9b86-cf2baa643329`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_fg collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: ilcd-allocation-2010

###### FG service electricity (`fg_electricity`)

Native Product is customer-side <1 kV alternating-current consumption mix and grid-average supply, not hydropower generation, voltage-transformation service or a power-plant output. The native supply geography is CN. Bind this UUID only at an actual Chinese <1 kV grid-average customer gate and match provider/period independently; another geography or voltage requires its own verified identity. The Korean AHF case does not authorise using this CN flow for Korea. Reconcile actual transformer/distribution losses at the declared gate without double purchasing the same electricity. Native reference property is Net calorific value/MJ, not Mass. This separately measured ledger covers only actual packing, storage, handling and loading including idle/cleanup. Assign to original release cohorts and preserve observed duration; do not mix manufacturing meters or allocate old stock services to new Q.  Measurement support chain: Units of energy 93a60a57-a3c8-11da-a746-0800200c9a66, reference MJ.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_fg_energy collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg_energy`
- Sources: ilcd-allocation-2010

###### Paperboard winding core (`paper_core`)

Conditional one whole actual winding tube with its adhesive included once; distinguish support core from flooring. Keep individual opening empty/attached-WIP/attached-FG/reusable stocks, purchases and external returns received against closing stocks, gross physical shipping, external returns and waste. Internal reuse cancels and is not a purchase, Q or automatic coproduct. Tiangong flow UUID is unresolved; retain this single specific exchange and verify complete supply/chemistry/form/destination and compatible identity before actual dataset use, without a generic substitute. Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: Paperboard winding core
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_package collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_package`
- Sources: ahf-homogeneous-2023

###### Kraft-paper roll wrap (`paper_wrap`)

Conditional actual single paper wrap with measured composition/coating; no assumed grammage or package ratio. Keep individual opening empty/attached-WIP/attached-FG/reusable stocks, purchases and external returns received against closing stocks, gross physical shipping, external returns and waste. Internal reuse cancels and is not a purchase, Q or automatic coproduct. Tiangong flow UUID is unresolved; retain this single specific exchange and verify complete supply/chemistry/form/destination and compatible identity before actual dataset use, without a generic substitute. Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: Kraft-paper roll wrapping sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_package collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_package`
- Sources: ahf-homogeneous-2023

###### Corrugated roll-protection sleeve (`corrugated_sleeve`)

Conditional one actual corrugated sleeve as supplied, including its own adhesive; separate end discs if they are separate articles. Keep individual opening empty/attached-WIP/attached-FG/reusable stocks, purchases and external returns received against closing stocks, gross physical shipping, external returns and waste. Internal reuse cancels and is not a purchase, Q or automatic coproduct. Tiangong flow UUID is unresolved; retain this single specific exchange and verify complete supply/chemistry/form/destination and compatible identity before actual dataset use, without a generic substitute. Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: Corrugated paperboard roll-protection sleeve
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_package collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_package`
- Sources: ahf-homogeneous-2023

###### LDPE protective film (`ldpe_wrap`)

Conditional actual LDPE film, not resin pellets, multilayer film or all plastic wrapping. Keep individual opening empty/attached-WIP/attached-FG/reusable stocks, purchases and external returns received against closing stocks, gross physical shipping, external returns and waste. Internal reuse cancels and is not a purchase, Q or automatic coproduct. Tiangong flow UUID is unresolved; retain this single specific exchange and verify complete supply/chemistry/form/destination and compatible identity before actual dataset use, without a generic substitute. Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: LDPE protective wrapping film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_package collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_package`
- Sources: ahf-homogeneous-2023

###### Wood shipping pallet (`wood_pallet`)

Conditional one actual wood pallet, composition/moisture and reusable life recorded; return trips and repairs are real service history. Keep individual opening empty/attached-WIP/attached-FG/reusable stocks, purchases and external returns received against closing stocks, gross physical shipping, external returns and waste. Internal reuse cancels and is not a purchase, Q or automatic coproduct. Tiangong flow UUID is unresolved; retain this single specific exchange and verify complete supply/chemistry/form/destination and compatible identity before actual dataset use, without a generic substitute. Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: Wood shipping pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_package collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_package`
- Sources: ahf-homogeneous-2023

###### Polypropylene securing strap (`pp_strap`)

Conditional actual PP strap; PET/steel strapping requires a different named article and its own ledger. Keep individual opening empty/attached-WIP/attached-FG/reusable stocks, purchases and external returns received against closing stocks, gross physical shipping, external returns and waste. Internal reuse cancels and is not a purchase, Q or automatic coproduct. Tiangong flow UUID is unresolved; retain this single specific exchange and verify complete supply/chemistry/form/destination and compatible identity before actual dataset use, without a generic substitute. Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: Polypropylene securing strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_package collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_package`
- Sources: ahf-homogeneous-2023

###### Pallet external return received (`pallet_return_in`)

Conditional same actual reusable pallet returned from outside; retain prior cycle burden/service and condition. Physical receipt is not a new pallet purchase. Tiangong flow UUID is unresolved; retain this single specific exchange and verify complete supply/chemistry/form/destination and compatible identity before actual dataset use, without a generic substitute. Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: Wood shipping pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_package collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_package`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Paperboard winding core with gross shipment (`paper_core_out`)

Conditional actual whole packaging article physically shipped with the product, measured at gross outbound movement and matched to its own package ledger and original release cohort. Preserve this external exit even if the same packaging is later returned. Do not net it against returns, subtract it by allocation shares, add it to flooring Q, create another purchase or assume a coproduct credit. Owner-directed empty pallet returns remain the separate pallet_return_out exchange. Conditional one whole actual winding tube with its adhesive included once; distinguish support core from flooring. Keep individual opening empty/attached-WIP/attached-FG/reusable stocks, purchases and external returns received against closing stocks, gross physical shipping, external returns and waste. Internal reuse cancels and is not a purchase, Q or automatic coproduct. Tiangong flow UUID is unresolved; retain this single specific exchange and verify complete supply/chemistry/form/destination and compatible identity before actual dataset use, without a generic substitute. Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: Paperboard winding core
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_package collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_package`
- Sources: ahf-homogeneous-2023

###### Kraft-paper roll wrap with gross shipment (`paper_wrap_out`)

Conditional actual whole packaging article physically shipped with the product, measured at gross outbound movement and matched to its own package ledger and original release cohort. Preserve this external exit even if the same packaging is later returned. Do not net it against returns, subtract it by allocation shares, add it to flooring Q, create another purchase or assume a coproduct credit. Owner-directed empty pallet returns remain the separate pallet_return_out exchange. Conditional actual single paper wrap with measured composition/coating; no assumed grammage or package ratio. Keep individual opening empty/attached-WIP/attached-FG/reusable stocks, purchases and external returns received against closing stocks, gross physical shipping, external returns and waste. Internal reuse cancels and is not a purchase, Q or automatic coproduct. Tiangong flow UUID is unresolved; retain this single specific exchange and verify complete supply/chemistry/form/destination and compatible identity before actual dataset use, without a generic substitute. Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: Kraft-paper roll wrapping sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_package collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_package`
- Sources: ahf-homogeneous-2023

###### Corrugated roll-protection sleeve with gross shipment (`corrugated_sleeve_out`)

Conditional actual whole packaging article physically shipped with the product, measured at gross outbound movement and matched to its own package ledger and original release cohort. Preserve this external exit even if the same packaging is later returned. Do not net it against returns, subtract it by allocation shares, add it to flooring Q, create another purchase or assume a coproduct credit. Owner-directed empty pallet returns remain the separate pallet_return_out exchange. Conditional one actual corrugated sleeve as supplied, including its own adhesive; separate end discs if they are separate articles. Keep individual opening empty/attached-WIP/attached-FG/reusable stocks, purchases and external returns received against closing stocks, gross physical shipping, external returns and waste. Internal reuse cancels and is not a purchase, Q or automatic coproduct. Tiangong flow UUID is unresolved; retain this single specific exchange and verify complete supply/chemistry/form/destination and compatible identity before actual dataset use, without a generic substitute. Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: Corrugated paperboard roll-protection sleeve
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_package collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_package`
- Sources: ahf-homogeneous-2023

###### LDPE protective film with gross shipment (`ldpe_wrap_out`)

Conditional actual whole packaging article physically shipped with the product, measured at gross outbound movement and matched to its own package ledger and original release cohort. Preserve this external exit even if the same packaging is later returned. Do not net it against returns, subtract it by allocation shares, add it to flooring Q, create another purchase or assume a coproduct credit. Owner-directed empty pallet returns remain the separate pallet_return_out exchange. Conditional actual LDPE film, not resin pellets, multilayer film or all plastic wrapping. Keep individual opening empty/attached-WIP/attached-FG/reusable stocks, purchases and external returns received against closing stocks, gross physical shipping, external returns and waste. Internal reuse cancels and is not a purchase, Q or automatic coproduct. Tiangong flow UUID is unresolved; retain this single specific exchange and verify complete supply/chemistry/form/destination and compatible identity before actual dataset use, without a generic substitute. Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: LDPE protective wrapping film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_package collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_package`
- Sources: ahf-homogeneous-2023

###### Wood shipping pallet with gross shipment (`wood_pallet_out`)

Conditional actual whole packaging article physically shipped with the product, measured at gross outbound movement and matched to its own package ledger and original release cohort. Preserve this external exit even if the same packaging is later returned. Do not net it against returns, subtract it by allocation shares, add it to flooring Q, create another purchase or assume a coproduct credit. Owner-directed empty pallet returns remain the separate pallet_return_out exchange. Conditional one actual wood pallet, composition/moisture and reusable life recorded; return trips and repairs are real service history. Keep individual opening empty/attached-WIP/attached-FG/reusable stocks, purchases and external returns received against closing stocks, gross physical shipping, external returns and waste. Internal reuse cancels and is not a purchase, Q or automatic coproduct. Tiangong flow UUID is unresolved; retain this single specific exchange and verify complete supply/chemistry/form/destination and compatible identity before actual dataset use, without a generic substitute. Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: Wood shipping pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_package collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_package`
- Sources: ahf-homogeneous-2023

###### Polypropylene securing strap with gross shipment (`pp_strap_out`)

Conditional actual whole packaging article physically shipped with the product, measured at gross outbound movement and matched to its own package ledger and original release cohort. Preserve this external exit even if the same packaging is later returned. Do not net it against returns, subtract it by allocation shares, add it to flooring Q, create another purchase or assume a coproduct credit. Owner-directed empty pallet returns remain the separate pallet_return_out exchange. Conditional actual PP strap; PET/steel strapping requires a different named article and its own ledger. Keep individual opening empty/attached-WIP/attached-FG/reusable stocks, purchases and external returns received against closing stocks, gross physical shipping, external returns and waste. Internal reuse cancels and is not a purchase, Q or automatic coproduct. Tiangong flow UUID is unresolved; retain this single specific exchange and verify complete supply/chemistry/form/destination and compatible identity before actual dataset use, without a generic substitute. Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: Polypropylene securing strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_package collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_package`
- Sources: ahf-homogeneous-2023

###### Pallet returned externally (`pallet_return_out`)

Conditional actual pallet returned to its owner, recorded separately from pallets accompanying gross shipments. Return itself establishes no sale or coproduct. Tiangong flow UUID is unresolved; retain this single specific exchange and verify complete supply/chemistry/form/destination and compatible identity before actual dataset use, without a generic substitute. Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: Wood shipping pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_package collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_package`
- Sources:

###### Gross physical flooring dispatch (`gross_dispatch`)

Native Product is a manufactured plastic-covering family at plant, with no fixed polymer, CAS, recipe, dimensions, grade, geography, provider or performance; synonyms are empty. Its floor/wall/ceiling alternatives are not a mixed exchange here: this card is one specified compact unbacked non-conductive homogeneous flexible PVC floor roll with cured UV finish. Neither the broad classification nor UUID establishes background compatibility or installed service equivalence. Record physical dispatch including repeat deliveries by original release ID, excluding packages. Keep credit/reversal records and original burdens. Gross shipments are not net new production; old FG is not divided by the current new cohort Q.  Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: Floor coverings of plastics, in rolls or in the form of tiles, wall or ceiling coverings of plastics `97494e7c-4947-433c-9b86-cf2baa643329`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_fg collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: ilcd-allocation-2010

###### Old flooring sent to real rework (`rework_to_make`)

Native Product is a manufactured plastic-covering family at plant, with no fixed polymer, CAS, recipe, dimensions, grade, geography, provider or performance; synonyms are empty. Its floor/wall/ceiling alternatives are not a mixed exchange here: this card is one specified compact unbacked non-conductive homogeneous flexible PVC floor roll with cured UV finish. Neither the broad classification nor UUID establishes background compatibility or installed service equivalence. Conditional physical transfer paired with returned_floor_rework. Keep original lot/burden, actual processing need and physical return; inspection alone is not manufacture.  Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: Floor coverings of plastics, in rolls or in the form of tiles, wall or ceiling coverings of plastics `97494e7c-4947-433c-9b86-cf2baa643329`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_fg collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: ilcd-allocation-2010

##### Waste flows

###### Paperboard winding core waste (`paper_core_waste`)

Conditional one whole actual winding tube with its adhesive included once; distinguish support core from flooring. This card is only the physically discarded version of that single packaging article, weighed by actual destination. No mixed packaging waste and no second upstream purchase. Tiangong flow UUID is unresolved; retain this single specific exchange and verify complete supply/chemistry/form/destination and compatible identity before actual dataset use, without a generic substitute. Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: Discarded paperboard winding core
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_package collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_package`
- Sources:

###### Kraft-paper roll wrap waste (`paper_wrap_waste`)

Conditional actual single paper wrap with measured composition/coating; no assumed grammage or package ratio. This card is only the physically discarded version of that single packaging article, weighed by actual destination. No mixed packaging waste and no second upstream purchase. Tiangong flow UUID is unresolved; retain this single specific exchange and verify complete supply/chemistry/form/destination and compatible identity before actual dataset use, without a generic substitute. Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: Discarded kraft-paper roll wrapping sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_package collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_package`
- Sources:

###### Corrugated roll-protection sleeve waste (`corrugated_sleeve_waste`)

Conditional one actual corrugated sleeve as supplied, including its own adhesive; separate end discs if they are separate articles. This card is only the physically discarded version of that single packaging article, weighed by actual destination. No mixed packaging waste and no second upstream purchase. Tiangong flow UUID is unresolved; retain this single specific exchange and verify complete supply/chemistry/form/destination and compatible identity before actual dataset use, without a generic substitute. Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: Discarded corrugated paperboard roll-protection sleeve
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_package collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_package`
- Sources:

###### LDPE protective film waste (`ldpe_wrap_waste`)

Conditional actual LDPE film, not resin pellets, multilayer film or all plastic wrapping. This card is only the physically discarded version of that single packaging article, weighed by actual destination. No mixed packaging waste and no second upstream purchase. Tiangong flow UUID is unresolved; retain this single specific exchange and verify complete supply/chemistry/form/destination and compatible identity before actual dataset use, without a generic substitute. Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: Discarded ldpe protective wrapping film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_package collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_package`
- Sources:

###### Wood shipping pallet waste (`wood_pallet_waste`)

Conditional one actual wood pallet, composition/moisture and reusable life recorded; return trips and repairs are real service history. This card is only the physically discarded version of that single packaging article, weighed by actual destination. No mixed packaging waste and no second upstream purchase. Tiangong flow UUID is unresolved; retain this single specific exchange and verify complete supply/chemistry/form/destination and compatible identity before actual dataset use, without a generic substitute. Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: Discarded wood shipping pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_package collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_package`
- Sources:

###### Polypropylene securing strap waste (`pp_strap_waste`)

Conditional actual PP strap; PET/steel strapping requires a different named article and its own ledger. This card is only the physically discarded version of that single packaging article, weighed by actual destination. No mixed packaging waste and no second upstream purchase. Tiangong flow UUID is unresolved; retain this single specific exchange and verify complete supply/chemistry/form/destination and compatible identity before actual dataset use, without a generic substitute. Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: Discarded polypropylene securing strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_package collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_package`
- Sources:

###### FG flooring scrapped (`fg_reject`)

Conditional storage/handling/customer-return material actually scrapped; original release burden follows that lot. Incremental handling/treatment is additional; retain destination separately from manufacturing reject. Tiangong flow UUID is unresolved; retain this single specific exchange and verify complete supply/chemistry/form/destination and compatible identity before actual dataset use, without a generic substitute. Measurement support chain: Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, reference kg.

- Selected flow: UV-coated flexible PVC flooring scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; one final reporting operation in section 8; cp_fg collects undivided raw amounts only.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_scenario | all inventory rows | This method is attributional and applies where allocation is required by the study goal/context. Establish actual functions and physical/legal/economic state of every output; the industrial manufacturing sources do not establish LCA allocation. Do not freely choose between physical/economic keys or claim complete ILCD/EPD conformance. | ilcd-allocation-2010 |
| allocation_subdivide | floor_make; fg_service | First collect dedicated operations and exclusive inputs by grade, lot and service. Use real subdivision, then technically justified virtual subdivision where a quantitative relationship identifies exclusive exchanges; record infeasibility and potential distortion for any retained shared process. Internal chips/regrind retain original burdens, never displacing a second purchase by an automatic credit. | ilcd-allocation-2010 |
| allocation_causality | all inventory rows | For each remaining exchange identify and substantiate the determining physical causal relationship to each co-function, including the actual load/temperature/cure/time/space mechanism as relevant. Material incorporation, heat duty and occupied space-time need not use the same key. Surface-area or mass shares alone are not causal proof, even if used by an industrial EPD. Retain drivers, sums and sensitivity. | ilcd-allocation-2010 |
| allocation_residual | all inventory rows | Only genuinely residual exchanges without a supported determining causal relationship use contemporaneous market values at the common process gate in the actual condition, quality, quantity and packaging state. Remove evidenced subsequent processing, storage, packaging and transport value. Document price basis, missing/negative/zero values and sensitivity; missing values need review, not equal or fixed shares. | ilcd-allocation-2010 |
| allocation_conserve | all inventory rows | All assigned shares reconcile to the undivided exchange. A useful externally transferred material requires actual specification and a justified function; waste fees or recovery do not automatically create coproducts, zero burdens or avoided-production credits. Waste/recycling cases needing an additional method remain explicitly unresolved until supported; this PCR supplies no default recycled-content or end-of-life formula. | ilcd-allocation-2010 |
| allocation_fg | fg_service | Assign each observed service to its original released lot and preserve old denominators. Returns reverse their actual prior shipment/vector and receive only real incremental service/rework. Unattributed startup/idle/failed-campaign loads remain visible and require justified assignment; they cannot disappear because output is zero. | ilcd-allocation-2010 |
| asset_manufacture_conservation | existing capital/reusable manufacture attribution | Within the applicable allocation decision context, original manufacture burden attributed across uses of actual capital equipment or reusable articles already included in foreground production, packaging or observed services uses one persistent same-asset ledger across all crops, products, cohorts, manufacturing/postrelease services, owners and observation periods. D is its supported whole installed service: all realized historical service plus supported remaining service in the same units as actual beneficiary use u; D must be finite and positive. Period capacity, remaining-only capacity, the physical asset/article mass alone, or current-period product Q alone is not D; supported whole-service throughput in mass units may be used when it demonstrates the causal service and matches u. This does not amortize the manufactured reference product over downstream life or change its declared reference gate/Q. The fractions u/D and all previously assigned manufacture shares together must never exceed 1. Changes of window, custody, provider or repair never restart the original manufacture balance. Replacements have distinct identities and only their real new manufacture vectors; actual repair and treatment increments remain separately accounted. Revised capacity evidence requires transparent reconciliation of prior shares and sensitivity, not a fresh ledger. Keep full physical mass and stock movements independent of burden shares. Unknown D, prior shares or beneficiary coverage requires review and no final manufacture-attributed amount; no assumed lifetime, utilization, zero or arbitrary division is permitted. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory.

All protocols collect undivided raw records, never pre-normalized intensities. Each reported exchange is generated once by normalize_once; aggregation_rule below declares that reporting basis. Keep unconverted readings, conversions, attribution decisions, per-exchange inherited vectors and the final computation as separate records.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | floor_make | Individual resin/filler/plasticizer/stabilizer/pigment/additive/cleaner inputs and actual scrap/product transfers | weighing_and_supply_record | lot_id; supplier_grade; physical_form; whole_formulation; gross_mass; tare; net_mass; assay; moisture; opening_raw; receipts; closing_raw; issued_mass; recovery_transfer; waste_destination; raw_unit; calibration_id | Weigh each actual complete supply and issue separately; reconcile opening plus receipts minus closing raw stock, excluding separately tracked supplier containers. Link raw resin mixing through chip/sheet stages and each reject/purge destination. Preserve whole preparation and composition subledgers; no normalized values collected. | kg | every receipt/issue/run/waste transfer | complete campaign including failed and zero-output trials plus stock cutoffs | one specified line and compatible grade/formulation cohort | per 1 kg reference flow | calibrated weighing; invoices; batch sheets; supplier specifications; waste tickets; material reconciliation |
| cp_finish | floor_make | uv_finish; spent_finish | coating_and_cure_record | coating_sku; formulation; supplied_wet_mass; solids_water_solvent; opening_finish; receipts; closing_finish; application_mass; retained_cured_mass; uncured_residue; volatile_species; coat_area; lamp_type; UV_dose; cure_test; raw_unit | Weigh whole supplied finish, application issues and actual residues; determine retained finish on matched test pieces and validate cure independently. Retain measured constituents and actual evaporative/chemical fates; no assumed full retention, condensation water or zero volatiles. | kg; m2; measured UV dose | each coating lot and cure interval | full coat/cure campaign including lamp warmup and cleanup | actual coating station and same finished grade | per 1 kg reference flow | coating SDS/TDS and supplier composition; calibrated scales; before/after tests; cure and UV equipment records |
| cp_energy | floor_make | make_electricity | meter_record | meter_id; voltage; provider; geography; interval_start; interval_end; kWh_start; kWh_end; measured_power_rate; operating_state; causal_driver; idle_load; shared_load; allocation_decision | Read integrated calibrated meter differences for each real unit operation and ancillary system; integrate only actual power rates if needed. Preserve undivided raw energy, convert kWh to MJ then attribute under section 7 and carry stock vectors; normalize_once alone generates the reported intensity. | kWh; MJ | each production/idle/startstop/cleanup interval | full campaign matched to WIP and release cohort | declared actual customer-side voltage and provider; electric branch only | per 1 kg reference flow | submeter calibration; bills; equipment/load map; time logs; allocation sensitivity |
| cp_water | floor_make | make_water; cooling_purge; water_vapour | water_state_balance_record | raw_unit; opening_loop; closing_loop; opening_loop_B_i; closing_loop_B_i; makeup; internal_recirculation; liquid_purge; entrained_droplets; supplied_carrier_water; retained_water; humidity_in; humidity_out; measured_vapour; density_evidence; temperature; pressure; actual_rate; duration; receiver | Independently meter/weigh actual makeup, loop stocks, liquid outlets, retained water and vapour; collect composition and actual state. Preserve integrated readings and integrate only rates. Reconcile separate heat-supplier return arrangements if present; do not use a mass residual to invent two water/species quantities. Preserve separately accounted loop-water quantities and their exchange-specific inherited burden vectors at both cutoffs; do not also include the same stocks in WIP or raw stores. | kg; m3; h | each interval and stock cutoff | complete operation and cleanup | actual cooling/cleaning circuit and its external interfaces | per 1 kg reference flow | calibrated meters; water-quality assays; humidity records; receiver and heat/water contracts |
| cp_species | floor_make | hcl_air; ipa_air; ozone_air; escaped_dust; spent_ipa; oxygen_uptake | species_specific_monitoring | species_id; CAS; actual_medium; sampling_point; measured_concentration; integrated_volume; actual_volume_rate; sampling_interval; T; P; wet_dry_basis; capture_efficiency; composition; uncertainty; detection_limit; waste_mass; receiver | Use actual chemical-specific sampling and state-correct volumes; concentration times integrated volume is already an amount, while a true volume rate must first be integrated. Keep each gas species and each destination separate and particle bins disjoint. Do not convert total VOC/COD/opacity to an assumed species, or count captured matter again as air release. Add actual unlisted species before use. | kg; source measurement units | every representative operating state including upsets and cleanup | full campaign with sampling representativeness disclosed | actual process exhaust/air uptake/cleaning receiver | per 1 kg reference flow | monitoring method and calibration; laboratory speciation; limits/uncertainty; capture and waste transfer evidence |
| cp_release | floor_make | released_floor | unique_release_record | grade; roll_id; original_lot; first_release_flag; release_time; gross_mass; core_tare; package_tare; net_mass; moisture_state; measured_length; measured_width; retained_finish; accepted_test; reject_mass; repeat_release_id | Weigh conditioned accepted rolls on calibrated scales, subtract all detachable tare and match cure/dimensional/performance acceptance. Deduplicate by original first-release ID and exclude old released rework, repeats and rejected tests. Sum net unique new released mass as Q; independently measure usable area for any area conversion. | kg; m; m2 | every roll and release decision | same campaign and stock cutoff | same specified product grade and physical state | per 1 kg reference flow | calibration/tare records; first-release register; test results; dedup/reject trail; actual area/mass sampling |
| cp_stock | floor_make | Every raw exchange and chip/sheet/WIP/rework transfer | lot_and_burden_vector_record | lot_id; parent_lot; opening_WIP; closing_WIP; opening_in_process; closing_in_process; opening_in_process_B_i; closing_in_process_B_i; internal_chip; internal_regrind; current_raw_exchange_i; opening_B_i; closing_B_i; transfer_B_i; cohort_id; historical_Q; failure_load; allocation_record; physical_outlet | Track quantity and every exchange-specific inherited burden vector through mixing/chips/sheet/cure and real rework. Carry opening vectors plus attributable current undivided additions and reconcile closing/transfer vectors without equating mass fraction to every exchange burden. No hypothetical same-intensity stock is assumed. Preserve failed-campaign loads even if Q is zero. Include separately accounted in-process inventories, including cooling-loop water and actual equipment/finish charges, with their own physical states and inherited vectors. Identify and eliminate overlap with raw stocks, WIP and FG. | kg and each exchange's native unit | each lot transfer and opening/closing cutoff | all relevant prior-lot histories plus complete current campaign | line/WIP/regrind/rework interfaces with matching cohorts | per 1 kg reference flow | lot genealogy; measured stock; per-exchange vector reconciliation; historical release/return records; missing-vector disclosure |
| cp_fg | fg_service | release_to_stock; customer_return; old_rework_receipt; gross_dispatch; rework_to_make; fg_reject | finished_stock_return_record | original_release_id; original_Q; opening_FG; new_Q_transfer; old_rework_receipt; physical_customer_return; original_dispatch; reverse_B_i; gross_dispatch; rework_to_make; FG_waste; closing_FG; opening_B_i; closing_B_i; incremental_service_i; observation_dates | Weigh physical FG/returns and retain original release/shipment vectors; reverse actual prior delivery for physical returns and identify incremental rework. Reconcile the FG gate independently; carry old cohorts separately from new Q. Pair internal transfers with manufacture and cancel only those matched transfers in consolidation. | kg and each exchange's native unit | every stock/shipment/return/rework movement | original histories and declared observed FG interval | specified FG store and original release cohorts | per 1 kg reference flow | stocktake; dispatch/return slips; historic burden records; commercial versus physical return distinction |
| cp_fg_energy | fg_service | fg_electricity | service_meter_record | meter_id; kWh_start; kWh_end; voltage; provider; geography; original_release_id; occupied_space; duration; handling_load; idle_cleanup; attribution_driver | Separately meter actual packing/storage/handling/loading and real idle/cleanup; convert raw energy before attribution, assign to original release lot using documented service mechanism and carry its historic denominator. Do not put old-cohort services in new production Q. | kWh; MJ | each service interval | explicit observed service window including old FG | actual FG service equipment and customer-side supply | per 1 kg reference flow | service meters; load/space-time records; calibration; cohort assignment and open-tail disclosure |
| cp_package | fg_service | Each named package input, gross outward shipment, waste and pallet external return | individual_package_stock_record | package_article; supplier_composition; raw_unit; unit_net_mass; opening_empty; opening_attached_WIP; opening_attached_FG; opening_reusable; purchases; external_return_received; closing_empty; closing_attached_WIP; closing_attached_FG; closing_reusable; gross_ship_out; external_return_out; waste; internal_reuse; repair; cycle_history | For each article weigh/measure actual whole supplied mass and reconcile its separate physical ledger. Delivered ingredient/coating containers need their own specifically named input/return/waste cards when present, whether separately invoiced or bundled. Attached shipping packages follow gross physical shipments including repeats, not net product Q. Count internal reuse as a cancelling transfer and external returns as their own movements. Preserve real per-article mass if purchasing counts; never guess kg/item. | kg; item with separately measured kg/item | each receipt/application/shipment/return/disposal and cutoff | full supply and FG service interval with prior cycle history | each named package across raw/WIP/FG/reusable locations | per 1 kg reference flow | weighing; purchase/return records; packaging specifications; stocktake; cycle/repair and gross-shipment reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| raw_unit_conversion | all inventory rows | Preserve original readings. Convert calibrated raw mass/energy/volume/rates into each row unit before attribution; kWh * 3.6 gives MJ. An independently measured rate is integrated once, whereas an integrated amount is not multiplied by time. State-specific density is independently evidenced. | cp_material; cp_finish; cp_energy; cp_water; cp_species; cp_fg_energy; cp_package | Undivided converted raw exchange amounts | |
| cohort_numerator | all inventory rows | For each exchange i, reconcile opening inherited B_i plus section-7-attributed undivided current additions against closing/transfer B_i. Carry actual WIP, regrind, prior released lots and failed-campaign vectors independently. Assign the resulting A_i to its own original release cohort, retaining waste burdens unless an evidenced co-function assignment changes them. Do not subtract waste mass as an avoided input or use a single stock ratio for every B_i. Carry separately accounted in-process stock vectors through the same reconciliation, including loop water, without treating a stock movement as new production or erasing retained historical burden. | cp_stock; cp_fg; cp_material; cp_finish; cp_energy; cp_water; cp_species; cp_fg_energy; cp_package | A_i in the card unit before any division | ilcd-allocation-2010 |
| release_denominator | released_floor | Q = sum of unique newly first-released conditioned net flooring kg in cp_release, including retained finish and excluding detachable package/core. Do not add closing FG or re-released/returned/reworked old material to Q. | cp_release; cp_stock; cp_fg | Q | |
| normalize_once | all inventory rows | x_i = A_i / Q once for Q > 0; Q belongs to that original release cohort. The released_floor reference output is 1 kg. For Q = 0 retain real raw/attributed burdens and stocks in a failed-campaign ledger and report no unit result; future assignment requires evidence. Card/aggregation references identify this same operation and never divide x_i again. | A_i; Q; cp_stock; cp_fg; cp_release | x_i per 1 kg reference flow, or no unit result for Q = 0 | |
| manufacturing_physical_gate | floor_make | Opening WIP + opening separately accounted in-process stocks + net actual non-uptake material issues + old released rework received + separately measured net uptake = closing WIP + closing separately accounted in-process stocks + new Q + old rework back to FG + external product/waste/elementary material outlets. Include cooling-loop water and actual equipment/finish charges among in-process stocks only when not already counted in raw stocks or WIP; reconcile each circuit/material separately. Count every physical input, including net oxygen uptake, exactly once; chemical reaction creates no total mass. Internal chip/regrind transfers cancel and electricity is outside physical mass. Apply corresponding independent C/Cl/Ca/Ti balances; unknown species are not fitted residuals. | cp_material; cp_finish; cp_stock; cp_release; cp_water; cp_species | Manufacturing mass and independent relevant element/species reconciliations |  |
| fg_physical_gate | fg_service | Opening FG + Q transfer + customer physical returns + old rework receipt = closing FG + gross physical dispatch + rework_to_make + FG waste. Perform the same reconciliation for each inherited burden vector, adding only actual services/rework and reversing original delivery. | cp_fg; cp_stock; cp_release; cp_fg_energy | FG quantity/vector reconciliation | |
| combined_physical_gate | floor_make; fg_service | After matched Q and rework transfers cancel: opening WIP + opening FG + opening separately accounted in-process stocks + external non-uptake material issues + customer physical returns + separately measured net uptake = closing WIP + closing FG + closing separately accounted in-process stocks + gross physical dispatch + external product/waste/elementary material outlets. Include the same loop/equipment/finish stocks as the manufacturing gate without duplicating raw/WIP/FG inventories. Every input and uptake appears once. Q remains a first-release production statistic, not an extra external physical output beside FG. Keep packaging outside product net mass and in package_balance. | cp_stock; cp_fg; cp_release; cp_material; cp_finish; cp_water; cp_species | Consolidated physical reconciliation without duplicate Q |  |
| package_balance | fg_service | For each package article separately: opening empty + opening attached WIP + opening attached FG + opening reusable + purchases + external returns received = closing empty + closing attached WIP + closing attached FG + closing reusable + attached gross physical shipments out + external returns out + waste. Internal reuse cancels. Do not replace gross shipments with net Q or treat returned/reused articles as another purchase or coproduct. | cp_package; cp_fg | Separate physical and burden ledger for each package | |
| area_descriptor | reference product | g = same-lot conditioned net m / measured usable area S; area s corresponds to s*g kg. Preserve measured mass, area, thickness, finish and acceptance state; no density inferred from this ratio. | cp_release | Grade/state-specific measured kg/m2 and area descriptor | |
| asset_manufacture_share | existing capital/reusable manufacture attribution | For each included original asset manufacture vector B, f_current = u_current / D only after the persistent ledger verifies the supported whole installed-service denominator, all beneficiaries and prior assigned shares. Attribute f_current * B once to the actual beneficiary before the existing single reference normalization. Check prior_shares + all current/new beneficiary shares <= 1; carry the remaining original balance. Capacity revisions reconcile the historical ledger. Full physical asset/packaging mass and actual gross stocks/returns never receive f_current. Unknown D or history leaves the final attributed result unavailable, without suppressing actual repair/replacement/service burdens. | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | conserved attributed manufacture vector |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Preserve complete supplied preparation and one atomic physical exchange; match all native CAS/form/route/type/property restrictions, official Chinese UUID names and actual provider. Blank auxiliary UUIDs remain explicit identity work, not a generic binding. | Supplier specifications; exact native records; compatible provider review; individually named unresolved rows |
| dq_primary | floor_make | Collect real undivided measurements covering raw ingredients through cured inspected rolls, including every failed/idle/cleanup/rework state. Published cases are route evidence, not primary factory quantities. | Calibrated meters/scales; batch sheets; full-period logs; stock and cure evidence |
| dq_vectors | floor_make; fg_service | Preserve all opening/closing WIP/FG quantities and every exchange-specific historic vector, actual first-release/dispatch/return lineage and incremental services. Unknown histories or open service tails remain explicit completeness gaps in the dataset. Separately accounted in-process circuit/charge quantities and each inherited exchange vector obey the same duty, without overlapping product/raw inventories. | Lot genealogy; historical B_i; return reversals; observed interval and physical gates |
| dq_species | floor_make | Independently support total mass/element balances, real species and water states. Report detection limits, representativeness, uncertainty and unresolved fates; balance closure alone is not species identification. | Independent material/element/speciation/water records and sensitivity |
| dq_complete | all inventory rows | Add every actual missing single material, utility, package, waste, gas species and destination before declaring a dataset complete. Explain evidenced absence; never hide actual flows in zero/other. | Equipment and supplier inventory; outlet survey; per-article package balance; unmeasured/gap register |
| dq_source_limits | all inventory rows | No case-specific recipes, energy/steam, source lifetime/certifications, waste omission or industrial area-allocation transfer. Technical synthesis and attributional-method conditions remain visible. | Source-specific route/state assessment; declared dataset bounds; section-7 decisions |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | reference product | Verify actual compact through-pattern PVC roll construction and the complete chip-consolidation/UV-finish route, including real raw-material receipt and final tests. A generic covering UUID or CPC leaf alone does not establish applicability. | ahf-homogeneous-2023 |
| validate_reference | released_floor | Verify all required qualifiers, one unique first-release Q, actual conditioned net mass/tare and retained finish, same bilingual reference link/basis, and no repeated release or FG double count. | ahf-homogeneous-2023 |
| validate_accounting | all inventory rows | Verify unit conversion and real attribution before the undivided A_i; perform normalize_once once only for positive original-cohort Q. Q-zero loads remain visible without a unit result. Check complete finite measurement relationships without calling unknowns passed. | ilcd-allocation-2010 |
| validate_gates | floor_make; fg_service | Independently reconcile manufacturing, FG and consolidated physical gates, all WIP/FG exchange vectors and each packaging ledger. Historic customer returns reverse original shipment/vector; actual additional rework is separately attributable, never new production. Check opening and closing separately accounted in-process stocks, including cooling-loop water, in both manufacturing and combined equations, with each actual uptake and input counted once. | ilcd-allocation-2010 |
| validate_species | floor_make | Independently verify water states, mass/element and species evidence. Reject one-residual/two-unknown closure, integrated-volume double integration, guessed density, total-VOC/COD-to-species conversion or captured-plus-air double counting. | |
| validate_allocation | all inventory rows | Verify the attributional context, subdivision and exclusive/virtual assignments, exchange-specific determining physical causality, then only genuine residual common-gate contemporaneous market value. No fixed shares, arbitrary mass/area/economic choice, automatic recovery credit or unsupported waste-method claim. | ilcd-allocation-2010 |
| validate_completeness | all inventory rows | Check each actual atomic flow and destination, composition/provider limits, exact UUID property/unit chain, old failure records and missing data. Ordinary auxiliary/provider work is distinct from unresolved core route/terminal/method gaps; missing factory evidence blocks that dataset's completeness, not a fabricated scientific approval. | |
| validate_asset_manufacture_conservation | existing capital/reusable manufacture attribution | For every included capital/reusable manufacture attribution verify same-asset continuity, whole installed service in matched units, all historical/current beneficiaries, prior assigned manufacture shares and cumulative share <= 1. Reject a reset by period, cohort, provider, owner or repair. Check distinct real replacement and incremental repair/treatment vectors separately and preserve gross physical mass. A missing denominator, unexplained previous allocation or incomplete beneficiary ledger requires explicit review and an unavailable final attributed amount; structural inspection cannot claim empirical completeness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Manufacturing supply inventory for the same qualified PVC sheet grade, route and declared gate; separately linked installation and life-cycle modules |
| allowed_use | Mass-based manufacturing modelling after matching product/finish/supplier/voltage/state; area conversion only with same-grade measured kg/m2 |
| excluded_use | Generic coverage of all CPC 36910; wallpaper/wall/ceiling/adhesive/rigid-core/foam/tile routes; installed-lifetime comparison; EPD certification; default recipe/steam/credit; scientific or translation approval |
| required_metadata | Product and each supplied preparation; route and equipment; first-release cohort and Q; net mass/area/state; cure and acceptance; site/period/voltage/providers; WIP/FG vectors and return lineage; each package and observed services; upstream and downstream boundary |
| required_quality_disclosure | Sampling/calibration/uncertainty; source transfer limits; native identity and provider restrictions; unresolved auxiliary UUIDs; actual missing quantities/stocks/species; Q-zero failures; allocation sensitivity; unobserved FG service tails |
| update_trigger | Changed resin/formulation/coating/construction/route; new energy or heat circuit/provider; revised acceptance/return policy; materially changed stock/service regime; better primary evidence or corrected native identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| ahf-homogeneous-2023 | literature | AHF Products / SCS, SCS-EPD-08964, 10 May 2023, AHF Contract Homogeneous Sheet, PDF pp.3–6 and p.11: https://www.ahfcontract.com/cdn/content/sites/10/EPD-AHFContract-Homogeneous.pdf?download=true | Homogeneous coated roll endpoint, raw-ingredient-to-chip/consolidation/UV/annealing/roll route, quality checks and paper/board packaging; 2021 South Korea case only. No recipe/grammage/lifetime/performance/area allocation transferred. |
| prodinex-pvc-2025 | literature | Stichting MRPI, Prodinex PVC/LVT dryback flooring, 1.1.00809.2025, 24 April 2025, PDF pp.2–4: https://www.mrpi.nl/epd-files/epd/1.1.00809.2025%20MRPI%20EPD_PVC%20flooring%20Prodinex.pdf | Independent adjacent material example naming DOTP, CaZn and polyurethane acrylate; multilayer hot-press counterexample. No homogeneous-route proof, quantitative transfer, steam assumption, loss/default waste boundary, certification or allocation authority. |
| arkema-vinyl-formulation | extension_guidance | Arkema Plastic Additives, Plastic Additives for Luxury Vinyl Tile, undated publisher page: https://plasticadditives.arkema.com/en/innovation/luxury-vinyl-tile/ | Technical material-choice synthesis and conditional ESBO/stearic-acid/acrylic-aid/TiO2 cards; North American LVT substrate examples and alternative rigid tin-stabilized recipe remain countercontext, not homogeneous-floor recipe, mandatory additions or numeric defaults. |
| ilcd-allocation-2010 | official_guidance | European Commission JRC, ILCD Handbook: General guide for Life Cycle Assessment — Detailed guidance, first edition 2010, §§7.9.2–7.9.3, PDF pp.275–288, printed pp.255–268: https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Conditional attributional subdivision/virtual subdivision, exchange-specific determining physical causality, genuine residual common-process-gate economic value and conservation. No industrial recipe, waste/recycling default, QFD product-function allocation or full-method conformity claim. |
