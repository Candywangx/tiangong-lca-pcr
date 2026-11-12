---
pcr_id: pcr.constructions-and-construction-services.construction-services.general-construction-services-of-outdoor-sport-and-recreation-facilities
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Existing outdoor acrylic tennis hardcourt recoating services

## 1. Scope and Applicability

This PCR covers one bounded non-cushioned acrylic texture/colour and tennis-line recoating repair on an existing qualified outdoor dense asphalt court or compatible prior acrylic coating. The contract includes cleaning, loose-material removal, compatible localized nonstructural repairs, any specified compatible acrylic resurfacer, colour application and drying/curing, line marking, defect closure and signed repair handover. The actual product instruction and project specification govern.

Exclude porous macadam permeability-preserving spray systems, new pavement/base/drainage, structural crack or subsidence remediation, concrete acid etching, cushion/rubber layers, artificial grass or clay, new nets/posts/fences/lighting, indoor courts and future play or recurring maintenance. A failed structural/drainage qualification requires a different repair scope before recoating; painting is not evidence of qualification.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.general-construction-services-of-outdoor-sport-and-recreation-facilities |
| classification_refs | cpc:3.0:54270; narrower bounded repair category |
| covered_products | Non-cushioned dense-host outdoor tennis hardcourt acrylic recoating repair at accepted handover |
| excluded_products | New court construction; porous spray surfacing; structural remediation; concrete etching; cushioned and indoor systems |
| representative_product | Existing sound dense asphalt court cleaned/repaired, compatibly coated, cured and tennis-line marked |
| production_route | Qualified retained host -> clean/local repair accepted -> compatible acrylic system/colour coats -> dry/cure and tennis lines -> defect closure and accepted repair |
| market_state | Completed site-specific construction repair service; supplied coating materials remain inputs |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted existing outdoor acrylic tennis hardcourt recoating repair service |
| How much | 1 Item(s) actual accepted contract, with court IDs and treated/line geometry |
| How well | Qualified sound draining compatible host; approved product system, texture/colour, dimensional and specified play-surface acceptance; defects closed |
| How long or cycle | One dated repair campaign through signed handover and opening permission; enumerate preparation/coating/cure/line/rework dates and asset production, use, replacement and end-of-life periods across all jobs. No promised playing life. |
| reference_flow_link | `accepted_recoating_service` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted existing outdoor acrylic tennis hardcourt recoating repair service |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | contract/court IDs; location and dates; host material/prior coating condition and qualification; treated/line areas m2 and line dimensions m; actual approved products and supplied states; tint/coat/run records; weather/drying/cure; inspection/defect closure and handover criteria; asset periods and upstream coverage |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| counted_contract | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | One defined accepted repair contract is the reference; court counts and areas are attributes and do not establish equivalence between contracts. |
| wet_dry_mass | coating, tint, repair material and residual rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Preserve as-supplied wet quantities, actual added ingredients, applied wet amount and dry-film/evaporation quantities separately; volume-to-mass needs lot-specific density and temperature. Do not infer wet mass from dry thickness or universal coverage. |
| native_services | electricity, asset time and logistics | Actual compatible property | kWh; h; t.km as recorded | Keep native units; confirm complete support chain for actual exchanges. No count conversion of electricity, duration or transport. |

 Gross receipts/issues/outward quantities mean material quantity before netting returns or transfers, but after subtracting vehicle/container tare from measured gross load. Preserve measured gross load and tare separately; their difference, not vehicle/container gross weight, enters the material balance.


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Existing structurally sound, adequately draining dense asphalt/compatible acrylic outdoor court qualified by actual inspection; original construction is retained host stock. |
| starting_condition_role | Retained site asset for incremental repair; prior construction is outside this bounded service, current preparation/repair burdens remain. |
| product_classification_scope | Bounded outdoor sports facility repair within CPC54270, not all facilities or all repair systems. |
| recursive_input_rule | A supplied same-category repair subcontract is an upstream service with explicit court/activity coverage. Include once and exclude overlapping in-house inputs; never recursively recreate old court construction. |
| upstream_dataset_requirement | Actual supplied-state datasets for each product and service, with manufacturing, packaging, transport and complete-life asset coverage identified; unresolved identities/coverage block final concrete exchange finalization. |
| disclosure | Host qualification, geometry, repair limits, supplier system/instructions, receipts and stock, internal transfer owner, wastes/releases, logistics coverage, subcontract exclusions and period/asset ledger. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `scope_eligibility` | foreground_system_boundary | This PCR covers one bounded non-cushioned acrylic texture/colour and tennis-line recoating repair on an existing qualified outdoor dense asphalt court or compatible prior acrylic coating. The contract includes cleaning, loose-material removal, compatible localized nonstructural repairs, any specified compatible acrylic resurfacer, colour application and drying/curing, line marking, defect closure and signed repair handover. The actual product instruction and project specification govern. Exclude porous macadam permeability-preserving spray systems, new pavement/base/drainage, structural crack or subsidence remediation, concrete acid etching, cushion/rubber layers, artificial grass or clay, new nets/posts/fences/lighting, indoor courts and future play or recurring maintenance. A failed structural/drainage qualification requires a different repair scope before recoating; painting is not evidence of qualification. |  |
| incremental_host | retained host and prepare_host | Include actual inspection/preparation, cleaning/capture, loose removal and localized nonstructural repair before coating. Do not assign new-host burdens or avoided-new-court credit; structural/drainage failures are outside this approved recoating route. | sportmaster-maintenance; sportmaster-neutral-ready-mix-202406 |
| physical_gates | prepare_host; finish_surface | prepare_host owns dirty/loose or locally defective qualified host to clean smooth flush accepted host. finish_surface receives the same identified host area and owns optional compatible resurfacer, colour texture coats, drying/cure, lines and final repair handover. Transfer is physical state, not a second external product or extra court construction. | sportmaster-neutral-ready-mix-202406 |
| system_identity | all supplied coating-system products | Declare actual supplied product and recipe. Neutral Ready-Mix CMT68 requires separately supplied tint and no added application water; already coloured ready-mix and concentrate routes have different supply identities. Mixing/stirring is embedded, not a separate formulation output. Cleaning/tool water is separately measured. | sportmaster-neutral-ready-mix-202406; sportmaster-tennis-surfaces |
| residual_ownership | both nodes residual and release exchanges | Include actual current preparation and application residues, captured wastewater, packaging and actual elementary releases. Purchased water is a product; actual abstraction is elementary input; captured wastewater is waste transfer, not every dissolved substance discharged. No generic paint-water pollutant or broad VOC/PM identity. | sportmaster-neutral-ready-mix-202406 |
| complete_life | prep_assets_washer; prep_assets_pump; prep_assets_mixer; prep_assets_tool; atomic_prep_assets; finish_assets_mixer; finish_assets_paddle; finish_assets_squeegee; finish_assets_line_equipment; atomic_finish_assets | Index owned washers, mixers, applicators and marking tools by asset, consuming node, other jobs and period; include production, maintenance, replacements and end-of-life attribution. A provider service must explicitly cover these burdens or expose an added uncovered share; retain remaining life/stock with its carried burden. Complete-life attribution does not require an in-service asset to have retired already: completed life uses observed history; an in-service asset may use evidence-supported prospective remaining service, replacement/termination and end-of-life scenarios. Label forecasts separately from observations, disclose total service denominator/source, uncertainty and sensitivity, and update when actual life events or use evidence change. Missing justified complete coverage or denominator blocks finalization; never invent a lifetime or future retirement. |  |



## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| prepare_host | Clean and locally repair qualified existing host | required | Qualified existing dense host; actual cleaning and local repair extent | foreground treatment; accepted clean flush host handoff | Actual accepted treated area m2, linked to contract and transfer IDs |
| finish_surface | Apply compatible acrylic system and accept marked cured surface | required | Accepted prepared host; resurfacer only if actual specification requires | foreground surface finishing; final repair handover | 1 Item(s) accepted contract |

Production is a court-specific campaign, with material lots, tint/colour/line runs, coats and changeovers indexed. Failed preparation returns to prepare_host; defects/recoats repeat the owning operation under the same contract with all burdens retained. The final accepted service excludes unresolved rejected areas. No procurement or inspection-only node is created.

### Process: Clean and locally repair qualified existing host (`prepare_host`)

#### Inputs

##### Product flows

###### Actual supplied preparation water (`prep_supplied_water`)

Purchased/utility water for actual cleaning and repair preparation. Excludes coating dilution and separately recorded direct abstraction; recycle circulation is internal, fresh makeup remains separately metered.

- Selected flow: Actual supplied preparation water
- Flow property / unit: Mass / kg
- Amount rule: Gross actual water allocated to this contract from start/end meters or delivered lot; convert L or m3 using actual density/temperature and document accuracy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prep_materials`
- Sources: `sportmaster-maintenance`

Range evidence need: Collect site cleaning method, treated area, actual fresh water by wash event, density and meter uncertainty; no universal kg/m2 cleaning factor.

###### Compatible detergent formulation (`prep_cleaners_detergent`)

One independently identified compatible detergent formulation. This is a conditional independent object supported within the original prep_cleaners scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional requirement for each actual compatible detergent/biocide product, strength and supply state; expand separate concrete exchanges for different products, never sum heterogeneous chemical identities. Maintenance bleach/TSP recipes are not general preparation instructions.

- Selected flow: Compatible detergent formulation
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_prep_cleaners_detergent_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Gross measured lot issues by exact product, concentration and wash event; distinguish formulated product mass and active-ingredient content.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prep_materials`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Compatible biocide formulation (`prep_cleaners_biocide`)

One independently identified compatible biocide formulation. This is a conditional independent object supported within the original prep_cleaners scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional requirement for each actual compatible detergent/biocide product, strength and supply state; expand separate concrete exchanges for different products, never sum heterogeneous chemical identities. Maintenance bleach/TSP recipes are not general preparation instructions.

- Selected flow: Compatible biocide formulation
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_prep_cleaners_biocide_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Gross measured lot issues by exact product, concentration and wash event; distinguish formulated product mass and active-ingredient content.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prep_materials`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


###### Approved patch formulation (`prep_repairs_patch`)

One independently identified approved patch formulation. This is a conditional independent object supported within the original prep_repairs scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional separate exchange for every actual crack/patch/binder/filler ingredient at supplied state. Confirm compatibility and nonstructural repair limit; cement/sand added to a selected binder are separate identities, not inferred from every acrylic repair.

- Selected flow: Approved patch formulation
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_prep_repairs_patch_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Gross weighed receipt/issue by exact repair product or ingredient, batch and local defect location; retained stock and true returns remain separate ledger terms.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prep_materials`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Separately supplied repair binder (`prep_repairs_binder`)

One independently identified separately supplied repair binder. This is a conditional independent object supported within the original prep_repairs scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional separate exchange for every actual crack/patch/binder/filler ingredient at supplied state. Confirm compatibility and nonstructural repair limit; cement/sand added to a selected binder are separate identities, not inferred from every acrylic repair.

- Selected flow: Separately supplied repair binder
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_prep_repairs_binder_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Gross weighed receipt/issue by exact repair product or ingredient, batch and local defect location; retained stock and true returns remain separate ledger terms.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prep_materials`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Separately supplied repair filler (`prep_repairs_filler`)

One independently identified separately supplied repair filler. This is a conditional independent object supported within the original prep_repairs scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional separate exchange for every actual crack/patch/binder/filler ingredient at supplied state. Confirm compatibility and nonstructural repair limit; cement/sand added to a selected binder are separate identities, not inferred from every acrylic repair.

- Selected flow: Separately supplied repair filler
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_prep_repairs_filler_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Gross weighed receipt/issue by exact repair product or ingredient, batch and local defect location; retained stock and true returns remain separate ledger terms.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prep_materials`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Separately supplied repair cement (`prep_repairs_cement`)

One independently identified separately supplied repair cement. This is a conditional independent object supported within the original prep_repairs scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional separate exchange for every actual crack/patch/binder/filler ingredient at supplied state. Confirm compatibility and nonstructural repair limit; cement/sand added to a selected binder are separate identities, not inferred from every acrylic repair.

- Selected flow: Separately supplied repair cement
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_prep_repairs_cement_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Gross weighed receipt/issue by exact repair product or ingredient, batch and local defect location; retained stock and true returns remain separate ledger terms.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prep_materials`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Separately supplied repair sand (`prep_repairs_sand`)

One independently identified separately supplied repair sand. This is a conditional independent object supported within the original prep_repairs scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional separate exchange for every actual crack/patch/binder/filler ingredient at supplied state. Confirm compatibility and nonstructural repair limit; cement/sand added to a selected binder are separate identities, not inferred from every acrylic repair.

- Selected flow: Separately supplied repair sand
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_prep_repairs_sand_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Gross weighed receipt/issue by exact repair product or ingredient, batch and local defect location; retained stock and true returns remain separate ledger terms.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prep_materials`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


###### Preparation absorbent (`prep_consumables_absorbent`)

One independently identified preparation absorbent. This is a conditional independent object supported within the original prep_consumables scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional individual purchased absorbents, temporary protection/containment and disposable cleaning articles; expand by actual identity. Supplier-included packaging is already within material supply, not a second upstream purchase.

- Selected flow: Preparation absorbent
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_prep_consumables_absorbent_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual weighed/count-and-mass issues by article and use event; preserve product returns and closing usable stock.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prep_materials`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Temporary protection (`prep_consumables_protection`)

One independently identified temporary protection. This is a conditional independent object supported within the original prep_consumables scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional individual purchased absorbents, temporary protection/containment and disposable cleaning articles; expand by actual identity. Supplier-included packaging is already within material supply, not a second upstream purchase.

- Selected flow: Temporary protection
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_prep_consumables_protection_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual weighed/count-and-mass issues by article and use event; preserve product returns and closing usable stock.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prep_materials`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Disposable containment article (`prep_consumables_containment`)

One independently identified disposable containment article. This is a conditional independent object supported within the original prep_consumables scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional individual purchased absorbents, temporary protection/containment and disposable cleaning articles; expand by actual identity. Supplier-included packaging is already within material supply, not a second upstream purchase.

- Selected flow: Disposable containment article
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_prep_consumables_containment_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual weighed/count-and-mass issues by article and use event; preserve product returns and closing usable stock.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prep_materials`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Disposable cleaning article (`prep_consumables_cleaning`)

One independently identified disposable cleaning article. This is a conditional independent object supported within the original prep_consumables scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional individual purchased absorbents, temporary protection/containment and disposable cleaning articles; expand by actual identity. Supplier-included packaging is already within material supply, not a second upstream purchase.

- Selected flow: Disposable cleaning article
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_prep_consumables_cleaning_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual weighed/count-and-mass issues by article and use event; preserve product returns and closing usable stock.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prep_materials`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


###### Actual preparation electricity supply (`prep_electricity`)

Actual electricity used by washer/pumps/mixing/inspection within prepare_host, with supply voltage/geography/time and supplier coverage. Native electrical energy remains kWh; exact support identities require confirmation.

- Selected flow: Actual preparation electricity supply
- Flow property / unit: Energy / kWh
- Amount rule: Submeter readings by machine/event; justified disaggregation from shared meters with measured operating time/load, not nameplate-only consumption.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prep_operations`

Range evidence need: Obtain preparation-specific meter/run record and measured allocation uncertainty; no default kWh per area.

###### Actual gross preparation fuel supplied into node (`prep_fuel`)

Conditional separate exchange for each actual engine fuel grade/state. Fuel combustion is separate from electricity supply and from provider-covered machine service. Actual unconsumed usable fuel crossing custody uses the product-return row; unburned discarded/recovered liquid uses its waste row; actual released species use the elementary release row. Tank transfers internal to the same boundary do not create new consumption. The input exchange is gross fuel entering the node; actual consumed/burned fuel is a distinct derived activity, not this input amount.

- Selected flow: Actual gross preparation fuel supplied into node
- Flow property / unit: Mass / kg
- Amount rule: Record gross actual fuel supply/issue crossing into this node by exact grade and event, preserving opening/closing stocks and all true outward usable returns/transfers, unburned waste and actual releases separately. Do not net returns from this input when also recording their output. Calculate actual burned fuel separately using the section 8 fuel balance only for combustion activity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prep_operations`

Range evidence need: Collect engine/fuel grade, tank/issue records, actual density and run-specific consumption uncertainty; no generic diesel dose.

###### Actual preparation freight services (`prep_logistics`)

Separate actual inbound material/asset and outward residual trips by mode/provider, cargo state and leg. Retain load, distance, empty-leg treatment and upstream inclusion; never add a leg already covered by supply/provider.

- Selected flow: Actual preparation freight services
- Flow property / unit: Mass*distance / kg*km
- Amount rule: Actual cargo tonnes times actual leg kilometres per concrete service, with declared empty-return allocation; service support remains unresolved until confirmed.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prep_operations`

Range evidence need: Collect trip manifests, route distance, payload and provider scope to derive uncertainty by leg; no universal haul distance or loading factor.

###### Washer lifecycle-complete service (`prep_assets_washer`)

One independently identified washer lifecycle-complete service. This is a conditional independent object supported within the original prep_assets scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Individual washer, pump, mixer and tools used in preparation; each asset service keeps native use hours or documented own physical driver. Include actual complete-life production, maintenance/replacements and end-of-life share across prepare_host, finish_surface and other jobs/periods. Provider coverage must be explicit.

- Selected flow: Washer lifecycle-complete service
- Flow property / unit: Duration / h
- Amount rule: Independently collect this child service actual attributable job hours actual_prep_assets_washer_quantity, fixed Duration/h, then normalize once by original reference denominator C. Preserve the original asset/service CP task, period and all-consumer scope. Matching upstream burden per h must cover complete-life manufacture, maintenance, replacements and end of life using a compatible complete-life hour driver; never multiply this h exchange by an asset-equivalent fraction again. Owned-asset whole-life physical fractions remain non-exchange reconciliation. Fuel, electricity, transport or operator already included in the actual service have one owner under original coverage. C=0 or missing complete-life/service-unit/coverage evidence blocks completion; fees, shifts and counts cannot replace actual h. Original quantity convention: Actual preparation use time by asset/event and period; asset ledger supplies service share across complete life. A job use-hour is not an asset count or a second purchased asset.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prep_operations`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Pump lifecycle-complete service (`prep_assets_pump`)

One independently identified pump lifecycle-complete service. This is a conditional independent object supported within the original prep_assets scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Individual washer, pump, mixer and tools used in preparation; each asset service keeps native use hours or documented own physical driver. Include actual complete-life production, maintenance/replacements and end-of-life share across prepare_host, finish_surface and other jobs/periods. Provider coverage must be explicit.

- Selected flow: Pump lifecycle-complete service
- Flow property / unit: Duration / h
- Amount rule: Independently collect this child service actual attributable job hours actual_prep_assets_pump_quantity, fixed Duration/h, then normalize once by original reference denominator C. Preserve the original asset/service CP task, period and all-consumer scope. Matching upstream burden per h must cover complete-life manufacture, maintenance, replacements and end of life using a compatible complete-life hour driver; never multiply this h exchange by an asset-equivalent fraction again. Owned-asset whole-life physical fractions remain non-exchange reconciliation. Fuel, electricity, transport or operator already included in the actual service have one owner under original coverage. C=0 or missing complete-life/service-unit/coverage evidence blocks completion; fees, shifts and counts cannot replace actual h. Original quantity convention: Actual preparation use time by asset/event and period; asset ledger supplies service share across complete life. A job use-hour is not an asset count or a second purchased asset.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prep_operations`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Preparation mixer lifecycle-complete service (`prep_assets_mixer`)

One independently identified preparation mixer lifecycle-complete service. This is a conditional independent object supported within the original prep_assets scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Individual washer, pump, mixer and tools used in preparation; each asset service keeps native use hours or documented own physical driver. Include actual complete-life production, maintenance/replacements and end-of-life share across prepare_host, finish_surface and other jobs/periods. Provider coverage must be explicit.

- Selected flow: Preparation mixer lifecycle-complete service
- Flow property / unit: Duration / h
- Amount rule: Independently collect this child service actual attributable job hours actual_prep_assets_mixer_quantity, fixed Duration/h, then normalize once by original reference denominator C. Preserve the original asset/service CP task, period and all-consumer scope. Matching upstream burden per h must cover complete-life manufacture, maintenance, replacements and end of life using a compatible complete-life hour driver; never multiply this h exchange by an asset-equivalent fraction again. Owned-asset whole-life physical fractions remain non-exchange reconciliation. Fuel, electricity, transport or operator already included in the actual service have one owner under original coverage. C=0 or missing complete-life/service-unit/coverage evidence blocks completion; fees, shifts and counts cannot replace actual h. Original quantity convention: Actual preparation use time by asset/event and period; asset ledger supplies service share across complete life. A job use-hour is not an asset count or a second purchased asset.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prep_operations`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Preparation tool lifecycle-complete service (`prep_assets_tool`)

One independently identified preparation tool lifecycle-complete service. This is a conditional independent object supported within the original prep_assets scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Individual washer, pump, mixer and tools used in preparation; each asset service keeps native use hours or documented own physical driver. Include actual complete-life production, maintenance/replacements and end-of-life share across prepare_host, finish_surface and other jobs/periods. Provider coverage must be explicit.

- Selected flow: Preparation tool lifecycle-complete service
- Flow property / unit: Duration / h
- Amount rule: Independently collect this child service actual attributable job hours actual_prep_assets_tool_quantity, fixed Duration/h, then normalize once by original reference denominator C. Preserve the original asset/service CP task, period and all-consumer scope. Matching upstream burden per h must cover complete-life manufacture, maintenance, replacements and end of life using a compatible complete-life hour driver; never multiply this h exchange by an asset-equivalent fraction again. Owned-asset whole-life physical fractions remain non-exchange reconciliation. Fuel, electricity, transport or operator already included in the actual service have one owner under original coverage. C=0 or missing complete-life/service-unit/coverage evidence blocks completion; fees, shifts and counts cannot replace actual h. Original quantity convention: Actual preparation use time by asset/event and period; asset ledger supplies service share across complete life. A job use-hour is not an asset count or a second purchased asset.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prep_operations`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


##### Waste flows

##### Elementary flows


#### Outputs

##### Product flows

###### Accepted clean flush existing host surface at preparation handoff (`prepared_host_output`)

Physical retained court area that passed preparation inspection, linked by transfer ID to prepared_host_input. Original host is not an upstream newly built court; this internal interface carries preparation burdens once.

- Selected flow: Accepted clean flush existing host surface at preparation handoff
- Flow property / unit: Area / m2
- Amount rule: Measured accepted area by court/repair boundary and transfer ID; retain excluded or failed areas separately until corrected.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prep_state`
- Sources: `sportmaster-neutral-ready-mix-202406`

Range evidence need: Collect surveyed accepted geometry and tolerance, inspection and transfer record; no universal court area or assumed all-area acceptance.

###### Usable outward return of compatible detergent formulation (`prep_returns_prep_cleaners_detergent`)

Same usable unchanged SKU/state as prep_cleaners_detergent. This is a conditional independent object supported within the original prep_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional individual usable repair/cleaner/consumable products that actually leave this foreground custody for supplier or another job. Closing stock retained on site is not an output. Gross input remains recorded; no netting then exporting the same return again. Include actual usable unconsumed fuel outward returns/transfers by grade and lot; distinguish internal tank transfer and carried closing fuel stock.

- Selected flow: Usable outward return of compatible detergent formulation
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_prep_returns_prep_cleaners_detergent_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Weighed actual outward return by original lot identity, state, destination, custody time and upstream burden treatment; distinguish waste rejection.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prep_residuals`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of compatible biocide formulation (`prep_returns_prep_cleaners_biocide`)

Same usable unchanged SKU/state as prep_cleaners_biocide. This is a conditional independent object supported within the original prep_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional individual usable repair/cleaner/consumable products that actually leave this foreground custody for supplier or another job. Closing stock retained on site is not an output. Gross input remains recorded; no netting then exporting the same return again. Include actual usable unconsumed fuel outward returns/transfers by grade and lot; distinguish internal tank transfer and carried closing fuel stock.

- Selected flow: Usable outward return of compatible biocide formulation
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_prep_returns_prep_cleaners_biocide_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Weighed actual outward return by original lot identity, state, destination, custody time and upstream burden treatment; distinguish waste rejection.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prep_residuals`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of approved patch formulation (`prep_returns_prep_repairs_patch`)

Same usable unchanged SKU/state as prep_repairs_patch. This is a conditional independent object supported within the original prep_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional individual usable repair/cleaner/consumable products that actually leave this foreground custody for supplier or another job. Closing stock retained on site is not an output. Gross input remains recorded; no netting then exporting the same return again. Include actual usable unconsumed fuel outward returns/transfers by grade and lot; distinguish internal tank transfer and carried closing fuel stock.

- Selected flow: Usable outward return of approved patch formulation
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_prep_returns_prep_repairs_patch_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Weighed actual outward return by original lot identity, state, destination, custody time and upstream burden treatment; distinguish waste rejection.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prep_residuals`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of separately supplied repair binder (`prep_returns_prep_repairs_binder`)

Same usable unchanged SKU/state as prep_repairs_binder. This is a conditional independent object supported within the original prep_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional individual usable repair/cleaner/consumable products that actually leave this foreground custody for supplier or another job. Closing stock retained on site is not an output. Gross input remains recorded; no netting then exporting the same return again. Include actual usable unconsumed fuel outward returns/transfers by grade and lot; distinguish internal tank transfer and carried closing fuel stock.

- Selected flow: Usable outward return of separately supplied repair binder
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_prep_returns_prep_repairs_binder_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Weighed actual outward return by original lot identity, state, destination, custody time and upstream burden treatment; distinguish waste rejection.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prep_residuals`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of separately supplied repair filler (`prep_returns_prep_repairs_filler`)

Same usable unchanged SKU/state as prep_repairs_filler. This is a conditional independent object supported within the original prep_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional individual usable repair/cleaner/consumable products that actually leave this foreground custody for supplier or another job. Closing stock retained on site is not an output. Gross input remains recorded; no netting then exporting the same return again. Include actual usable unconsumed fuel outward returns/transfers by grade and lot; distinguish internal tank transfer and carried closing fuel stock.

- Selected flow: Usable outward return of separately supplied repair filler
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_prep_returns_prep_repairs_filler_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Weighed actual outward return by original lot identity, state, destination, custody time and upstream burden treatment; distinguish waste rejection.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prep_residuals`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of separately supplied repair cement (`prep_returns_prep_repairs_cement`)

Same usable unchanged SKU/state as prep_repairs_cement. This is a conditional independent object supported within the original prep_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional individual usable repair/cleaner/consumable products that actually leave this foreground custody for supplier or another job. Closing stock retained on site is not an output. Gross input remains recorded; no netting then exporting the same return again. Include actual usable unconsumed fuel outward returns/transfers by grade and lot; distinguish internal tank transfer and carried closing fuel stock.

- Selected flow: Usable outward return of separately supplied repair cement
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_prep_returns_prep_repairs_cement_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Weighed actual outward return by original lot identity, state, destination, custody time and upstream burden treatment; distinguish waste rejection.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prep_residuals`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of separately supplied repair sand (`prep_returns_prep_repairs_sand`)

Same usable unchanged SKU/state as prep_repairs_sand. This is a conditional independent object supported within the original prep_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional individual usable repair/cleaner/consumable products that actually leave this foreground custody for supplier or another job. Closing stock retained on site is not an output. Gross input remains recorded; no netting then exporting the same return again. Include actual usable unconsumed fuel outward returns/transfers by grade and lot; distinguish internal tank transfer and carried closing fuel stock.

- Selected flow: Usable outward return of separately supplied repair sand
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_prep_returns_prep_repairs_sand_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Weighed actual outward return by original lot identity, state, destination, custody time and upstream burden treatment; distinguish waste rejection.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prep_residuals`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of preparation absorbent (`prep_returns_prep_consumables_absorbent`)

Same usable unchanged SKU/state as prep_consumables_absorbent. This is a conditional independent object supported within the original prep_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional individual usable repair/cleaner/consumable products that actually leave this foreground custody for supplier or another job. Closing stock retained on site is not an output. Gross input remains recorded; no netting then exporting the same return again. Include actual usable unconsumed fuel outward returns/transfers by grade and lot; distinguish internal tank transfer and carried closing fuel stock.

- Selected flow: Usable outward return of preparation absorbent
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_prep_returns_prep_consumables_absorbent_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Weighed actual outward return by original lot identity, state, destination, custody time and upstream burden treatment; distinguish waste rejection.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prep_residuals`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of temporary protection (`prep_returns_prep_consumables_protection`)

Same usable unchanged SKU/state as prep_consumables_protection. This is a conditional independent object supported within the original prep_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional individual usable repair/cleaner/consumable products that actually leave this foreground custody for supplier or another job. Closing stock retained on site is not an output. Gross input remains recorded; no netting then exporting the same return again. Include actual usable unconsumed fuel outward returns/transfers by grade and lot; distinguish internal tank transfer and carried closing fuel stock.

- Selected flow: Usable outward return of temporary protection
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_prep_returns_prep_consumables_protection_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Weighed actual outward return by original lot identity, state, destination, custody time and upstream burden treatment; distinguish waste rejection.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prep_residuals`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of disposable containment article (`prep_returns_prep_consumables_containment`)

Same usable unchanged SKU/state as prep_consumables_containment. This is a conditional independent object supported within the original prep_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional individual usable repair/cleaner/consumable products that actually leave this foreground custody for supplier or another job. Closing stock retained on site is not an output. Gross input remains recorded; no netting then exporting the same return again. Include actual usable unconsumed fuel outward returns/transfers by grade and lot; distinguish internal tank transfer and carried closing fuel stock.

- Selected flow: Usable outward return of disposable containment article
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_prep_returns_prep_consumables_containment_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Weighed actual outward return by original lot identity, state, destination, custody time and upstream burden treatment; distinguish waste rejection.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prep_residuals`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of disposable cleaning article (`prep_returns_prep_consumables_cleaning`)

Same usable unchanged SKU/state as prep_consumables_cleaning. This is a conditional independent object supported within the original prep_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional individual usable repair/cleaner/consumable products that actually leave this foreground custody for supplier or another job. Closing stock retained on site is not an output. Gross input remains recorded; no netting then exporting the same return again. Include actual usable unconsumed fuel outward returns/transfers by grade and lot; distinguish internal tank transfer and carried closing fuel stock.

- Selected flow: Usable outward return of disposable cleaning article
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_prep_returns_prep_consumables_cleaning_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Weighed actual outward return by original lot identity, state, destination, custody time and upstream burden treatment; distinguish waste rejection.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prep_residuals`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of actual gross preparation fuel supplied into node (`prep_returns_prep_fuel_prep_fuel`)

Same usable unchanged SKU/state as prep_fuel. This is a conditional independent object supported within the original prep_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional individual usable repair/cleaner/consumable products that actually leave this foreground custody for supplier or another job. Closing stock retained on site is not an output. Gross input remains recorded; no netting then exporting the same return again. Include actual usable unconsumed fuel outward returns/transfers by grade and lot; distinguish internal tank transfer and carried closing fuel stock.

- Selected flow: Usable outward return of actual gross preparation fuel supplied into node
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_prep_returns_prep_fuel_prep_fuel_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Weighed actual outward return by original lot identity, state, destination, custody time and upstream burden treatment; distinguish waste rejection.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prep_residuals`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


##### Waste flows

###### Scraped loose coating waste (`prep_removed_solids_coating`)

One independently identified scraped loose coating waste. This is a conditional independent object supported within the original prep_removed_solids scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Separate actual scraped loose coating, dirt/debris and failed patch material by composition and waste classification/destination. Retained sound coating/host is starting stock, not incoming new material or waste.

- Selected flow: Scraped loose coating waste
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_prep_removed_solids_coating_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Weigh actual removed loads/containers with tare and moisture state, identify receiving treatment/custody and exclude mass remaining on host.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prep_residuals`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Collected dirt and debris (`prep_removed_solids_debris`)

One independently identified collected dirt and debris. This is a conditional independent object supported within the original prep_removed_solids scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Separate actual scraped loose coating, dirt/debris and failed patch material by composition and waste classification/destination. Retained sound coating/host is starting stock, not incoming new material or waste.

- Selected flow: Collected dirt and debris
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_prep_removed_solids_debris_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Weigh actual removed loads/containers with tare and moisture state, identify receiving treatment/custody and exclude mass remaining on host.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prep_residuals`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Removed failed patch waste (`prep_removed_solids_patch`)

One independently identified removed failed patch waste. This is a conditional independent object supported within the original prep_removed_solids scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Separate actual scraped loose coating, dirt/debris and failed patch material by composition and waste classification/destination. Retained sound coating/host is starting stock, not incoming new material or waste.

- Selected flow: Removed failed patch waste
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_prep_removed_solids_patch_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Weigh actual removed loads/containers with tare and moisture state, identify receiving treatment/custody and exclude mass remaining on host.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prep_residuals`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


###### Actual captured preparation wastewater for treatment (`prep_wastewater`)

Captured cleaning/rinse/repair water with suspended coating/debris and actual cleaner content transferred to an identified treatment receiver. Keep wastewater mixture wet mass separate from species actually discharged outside capture.

- Selected flow: Actual captured preparation wastewater for treatment
- Flow property / unit: Mass / kg
- Amount rule: Actual tank/load water balance or weighed wet wastewater after capture, with composition/sampling and downstream custody; avoid double counting captured solids already weighed separately.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prep_residuals`

Range evidence need: Collect capture volumes/density, rainfall/runoff ingress, solids separation and treatment receipts plus sampling uncertainty; no default capture efficiency or discharge fraction.

###### Discarded preparation container (`prep_used_articles_container`)

One independently identified discarded preparation container. This is a conditional independent object supported within the original prep_used_articles scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Separate each actual container, absorbent and containment/cleaning article by material and contamination. Reusable articles and supplier-owned packaging returned as products use custody records; packaging embedded upstream is not purchased again.

- Selected flow: Discarded preparation container
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_prep_used_articles_container_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual weighed waste by article/material, tare/residue separation, destination and event, recording any provider-included treatment once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prep_residuals`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Spent preparation absorbent (`prep_used_articles_absorbent`)

One independently identified spent preparation absorbent. This is a conditional independent object supported within the original prep_used_articles scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Separate each actual container, absorbent and containment/cleaning article by material and contamination. Reusable articles and supplier-owned packaging returned as products use custody records; packaging embedded upstream is not purchased again.

- Selected flow: Spent preparation absorbent
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_prep_used_articles_absorbent_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual weighed waste by article/material, tare/residue separation, destination and event, recording any provider-included treatment once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prep_residuals`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Spent containment article (`prep_used_articles_containment`)

One independently identified spent containment article. This is a conditional independent object supported within the original prep_used_articles scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Separate each actual container, absorbent and containment/cleaning article by material and contamination. Reusable articles and supplier-owned packaging returned as products use custody records; packaging embedded upstream is not purchased again.

- Selected flow: Spent containment article
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_prep_used_articles_containment_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual weighed waste by article/material, tare/residue separation, destination and event, recording any provider-included treatment once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prep_residuals`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Spent cleaning article (`prep_used_articles_cleaning`)

One independently identified spent cleaning article. This is a conditional independent object supported within the original prep_used_articles scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Separate each actual container, absorbent and containment/cleaning article by material and contamination. Reusable articles and supplier-owned packaging returned as products use custody records; packaging embedded upstream is not purchased again.

- Selected flow: Spent cleaning article
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_prep_used_articles_cleaning_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual weighed waste by article/material, tare/residue separation, destination and event, recording any provider-included treatment once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prep_residuals`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


###### Contained off-spec unburned fuel (`prep_fuel_wastes_fuel`)

One independently identified contained off-spec unburned fuel. This is a conditional independent object supported within the original prep_fuel_wastes scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional separate actual off-spec/unburned fuel, recovered free spill liquid and fuel-contaminated cleanup mixture sent to a waste receiver. Identify grade/composition and keep mixture mass distinct from its contained fuel. Usable outward fuel is a product return; actual uncontrolled substance releases belong to the elementary release row.

- Selected flow: Contained off-spec unburned fuel
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_prep_fuel_wastes_fuel_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Weighed actual unburned waste by grade/composition, original event and receiving custody, retaining fuel-content measurement where mixed; reconcile against the fuel balance without counting it as burned fuel.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prep_residuals`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Captured spill fuel liquid (`prep_fuel_wastes_spill_liquid`)

One independently identified captured spill fuel liquid. This is a conditional independent object supported within the original prep_fuel_wastes scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional separate actual off-spec/unburned fuel, recovered free spill liquid and fuel-contaminated cleanup mixture sent to a waste receiver. Identify grade/composition and keep mixture mass distinct from its contained fuel. Usable outward fuel is a product return; actual uncontrolled substance releases belong to the elementary release row.

- Selected flow: Captured spill fuel liquid
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_prep_fuel_wastes_spill_liquid_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Weighed actual unburned waste by grade/composition, original event and receiving custody, retaining fuel-content measurement where mixed; reconcile against the fuel balance without counting it as burned fuel.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prep_residuals`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Actual fuel-contaminated cleanup mixture (`prep_fuel_wastes_cleanup_mixture`)

One independently identified actual fuel-contaminated cleanup mixture. This is a conditional independent object supported within the original prep_fuel_wastes scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional separate actual off-spec/unburned fuel, recovered free spill liquid and fuel-contaminated cleanup mixture sent to a waste receiver. Identify grade/composition and keep mixture mass distinct from its contained fuel. Usable outward fuel is a product return; actual uncontrolled substance releases belong to the elementary release row.

- Selected flow: Actual fuel-contaminated cleanup mixture
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_prep_fuel_wastes_cleanup_mixture_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Weighed actual unburned waste by grade/composition, original event and receiving custody, retaining fuel-content measurement where mixed; reconcile against the fuel balance without counting it as burned fuel.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prep_residuals`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


##### Elementary flows


### Process: Apply compatible acrylic system and accept marked cured surface (`finish_surface`)

#### Inputs

##### Product flows

###### Accepted clean flush existing host surface at preparation handoff (`prepared_host_input`)

Receive the exact area/state/transfer ID from prepared_host_output after qualification, cleaning and flush localized repair. Carry preparation burden once; not new pavement supply and not an external additional accepted court.

- Selected flow: Accepted clean flush existing host surface at preparation handoff
- Flow property / unit: Area / m2
- Amount rule: Matched accepted measured transfer area by court and location; any rejected substrate returns to prepare_host with its rework events linked.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finish_state`
- Sources: `sportmaster-neutral-ready-mix-202406`

Range evidence need: Obtain matched area/transfer/inspection records with survey tolerance and any area change explained; do not set a generic standard court area.

###### Actual compatible acrylic resurfacer supplied product (`finish_surfacer`)

Conditional when actual host roughness/porosity and approved system require a dense compatible underlayment. Identify exact supplied product and state; factory-included sand/water remains inside supplied mass, any actually added recipe ingredients are separate exchanges.

- Selected flow: Actual compatible acrylic resurfacer supplied product
- Flow property / unit: Mass / kg
- Amount rule: Gross actual wet supplied resurfacer receipt/issue by lot and coat/run; record applied/stock/return/residue distinctly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finish_materials`
- Sources: `sportmaster-neutral-ready-mix-202406`; `sportmaster-tennis-surfaces`

Range evidence need: Obtain approved current product recipe, surface condition, actual coverage and lot mass; generic colour coverage is not surfacer kg/m2.

###### Actual supplied acrylic colour coating product (`finish_colour`)

Exact actual non-cushioned tennis colour product at supplied state. For Neutral Ready-Mix CMT68 the base is not yet tinted: actual ColorPlus pigment dispersion is a separate input and no water is added. Already coloured ready-mix and concentrates are distinct supplied identities; no mixing of their recipes.

- Selected flow: Actual supplied acrylic colour coating product
- Flow property / unit: Mass / kg
- Amount rule: Gross measured supplied wet coating by product/lot/run, retaining supplied sand/water/pigment status and applied, real outward return, remaining usable stock and residue accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finish_materials`
- Sources: `sportmaster-neutral-ready-mix-202406`; `sportmaster-tennis-surfaces`

Range evidence need: Obtain actual product/lot wet mass or density-supported volume, treated area, coats, weather and loss evidence. CMT68 approximate volume coverage cannot become universal kg/m2 or dry-film mass.

###### Actual separate approved pigment dispersion (`finish_tint`)

Conditional separate actual tint product/colour at supply gate when chosen base requires tint. Mandatory actual addition for Neutral Ready-Mix CMT68; absent only if genuinely factory-tinted supplied product requires none. Not raw pigment inferred from emulsion colour.

- Selected flow: Actual separate approved pigment dispersion
- Flow property / unit: Mass / kg
- Amount rule: Actual weighed dispersion additions by product lot, base pail/batch, colour and coat; record gross receipts/issues and unused stock/returns separately.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finish_materials`
- Sources: `sportmaster-neutral-ready-mix-202406`

Range evidence need: Obtain chosen current base/tint instructions and actual batch additions/density. CMT68 pail-specific volume instruction is not generic tint mass for other products.

###### Approved separately added sand (`finish_recipe_additions_sand`)

One independently identified approved separately added sand. This is a conditional independent object supported within the original finish_recipe_additions scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional zero/one/multiple distinct ingredients only when actual selected resurfacer or coating instruction requires addition. Expand each actual sand, water or other ingredient independently with supply state and role; never add dilution water to Neutral Ready-Mix CMT68 or charge factory-included filler/water twice.

- Selected flow: Approved separately added sand
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_finish_recipe_additions_sand_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Measured actual ingredient issues and additions by exact product/ingredient and batch, with source/density/state and no heterogeneous summation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_materials`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Approved separately added ingredient water (`finish_recipe_additions_water`)

One independently identified approved separately added ingredient water. This is a conditional independent object supported within the original finish_recipe_additions scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional zero/one/multiple distinct ingredients only when actual selected resurfacer or coating instruction requires addition. Expand each actual sand, water or other ingredient independently with supply state and role; never add dilution water to Neutral Ready-Mix CMT68 or charge factory-included filler/water twice.

- Selected flow: Approved separately added ingredient water
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_finish_recipe_additions_water_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Measured actual ingredient issues and additions by exact product/ingredient and batch, with source/density/state and no heterogeneous summation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_materials`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


###### Actual compatible acrylic tennis line paint (`finish_line_paint`)

Exact supplied line-marking paint of actual texture/colour and compatible system. Separate from field colour coating; any actual clear line primer is its own concrete product under the actual auxiliary-products requirement.

- Selected flow: Actual compatible acrylic tennis line paint
- Flow property / unit: Mass / kg
- Amount rule: Gross weighed actual line-paint issues by lot/run and measured applied/return/stock/residual terms; line length/width/area remain measured attributes.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finish_materials`
- Sources: `sportmaster-tennis-surfaces`

Range evidence need: Obtain actual line product instructions, line geometry and weighed application records; no area-to-paint-mass factor assumed.

###### Masking tape (`finish_auxiliaries_tape`)

One independently identified masking tape. This is a conditional independent object supported within the original finish_auxiliaries scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional distinct actual masking tape/protection/cleaning articles or approved line primer by supplied identity; expand separate exchanges, preserve reusable articles under asset ledger. No unrelated topcoat or adhesion promoter inferred automatically.

- Selected flow: Masking tape
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_finish_auxiliaries_tape_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Gross actual issues by product/run with weighed mass or actual measured piece-mass conversion and stock/return ledger.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_materials`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Finishing protection article (`finish_auxiliaries_protection`)

One independently identified finishing protection article. This is a conditional independent object supported within the original finish_auxiliaries scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional distinct actual masking tape/protection/cleaning articles or approved line primer by supplied identity; expand separate exchanges, preserve reusable articles under asset ledger. No unrelated topcoat or adhesion promoter inferred automatically.

- Selected flow: Finishing protection article
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_finish_auxiliaries_protection_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Gross actual issues by product/run with weighed mass or actual measured piece-mass conversion and stock/return ledger.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_materials`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Finishing cleaning article (`finish_auxiliaries_cleaning`)

One independently identified finishing cleaning article. This is a conditional independent object supported within the original finish_auxiliaries scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional distinct actual masking tape/protection/cleaning articles or approved line primer by supplied identity; expand separate exchanges, preserve reusable articles under asset ledger. No unrelated topcoat or adhesion promoter inferred automatically.

- Selected flow: Finishing cleaning article
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_finish_auxiliaries_cleaning_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Gross actual issues by product/run with weighed mass or actual measured piece-mass conversion and stock/return ledger.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_materials`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Approved line primer formulation (`finish_auxiliaries_primer`)

One independently identified approved line primer formulation. This is a conditional independent object supported within the original finish_auxiliaries scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional distinct actual masking tape/protection/cleaning articles or approved line primer by supplied identity; expand separate exchanges, preserve reusable articles under asset ledger. No unrelated topcoat or adhesion promoter inferred automatically.

- Selected flow: Approved line primer formulation
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_finish_auxiliaries_primer_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Gross actual issues by product/run with weighed mass or actual measured piece-mass conversion and stock/return ledger.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_materials`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


###### Actual supplied finishing tool and changeover cleaning water (`finish_tool_water`)

Actual purchased water for mixer/squeegee/line-equipment cleaning and any project-authorized surface rinse. This is distinct from formula water and does not imply dilution of the ready-mix; direct abstraction, if actual, requires a separately identified elementary source exchange.

- Selected flow: Actual supplied finishing tool and changeover cleaning water
- Flow property / unit: Mass / kg
- Amount rule: Actual makeup meter/delivery by cleaning/changeover event; internal recycled circulation excluded from fresh input, volume conversion uses actual density.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finish_materials`

Range evidence need: Collect actual wash method, changeover frequency, fresh makeup and capture balance with meter uncertainty; no fixed rinse or kg per paint pail.

###### Actual finishing electricity supply (`finish_electricity`)

Actual powered stirring, pumping/marking or acceptance equipment supply, preserving provider/geography/time and native kWh. Drying/curing electricity only if actual, not implied by weather drying.

- Selected flow: Actual finishing electricity supply
- Flow property / unit: Energy / kWh
- Amount rule: Metered equipment/event use with measured allocation from shared circuits and exclusion of provider-included energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finish_operations`

Range evidence need: Obtain actual equipment/event electricity and supply records, load/time evidence and uncertainty; no generic cure energy.

###### Actual gross finishing fuel supplied into node (`finish_fuel`)

Conditional each actual fuel product/grade for powered finishing or access equipment, distinct from already provider-covered service and upstream supplied transport. Actual unconsumed usable fuel crossing custody uses the product-return row; unburned discarded/recovered liquid uses its waste row; actual released species use the elementary release row. Tank transfers internal to the same boundary do not create new consumption. The input exchange is gross fuel entering the node; actual consumed/burned fuel is a distinct derived activity, not this input amount.

- Selected flow: Actual gross finishing fuel supplied into node
- Flow property / unit: Mass / kg
- Amount rule: Record gross actual fuel supply/issue crossing into this node by exact grade and event, preserving opening/closing stocks and all true outward usable returns/transfers, unburned waste and actual releases separately. Do not net returns from this input when also recording their output. Calculate actual burned fuel separately using the section 8 fuel balance only for combustion activity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finish_operations`

Range evidence need: Collect actual engine, fuel, tank/issue and run evidence; no standard fuel/area factor.

###### Actual finishing freight services (`finish_logistics`)

Distinct actual material/tool delivery, true returns and waste collection legs by cargo/mode/provider, documented distance/load and empty-leg convention. Upstream/provider-included legs are identified and excluded from added burden.

- Selected flow: Actual finishing freight services
- Flow property / unit: Mass*distance / kg*km
- Amount rule: Actual tonnes and actual kilometres by concrete transport leg and attributed service share.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finish_operations`

Range evidence need: Obtain real trip/payload/route and supplier inclusion evidence; no illustrative freight default.

###### Finishing mixer lifecycle-complete service (`finish_assets_mixer`)

One independently identified finishing mixer lifecycle-complete service. This is a conditional independent object supported within the original finish_assets scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Individual mixers, paddles, squeegees and line equipment with actual native service driver. Asset complete-life ledger links preparation/finishing, other contracts and periods, production, maintenance/replacement/termination and end-of-life once; provider-inclusive coverage or uncovered capital share explicitly recorded.

- Selected flow: Finishing mixer lifecycle-complete service
- Flow property / unit: Duration / h
- Amount rule: Independently collect this child service actual attributable job hours actual_finish_assets_mixer_quantity, fixed Duration/h, then normalize once by original reference denominator C. Preserve the original asset/service CP task, period and all-consumer scope. Matching upstream burden per h must cover complete-life manufacture, maintenance, replacements and end of life using a compatible complete-life hour driver; never multiply this h exchange by an asset-equivalent fraction again. Owned-asset whole-life physical fractions remain non-exchange reconciliation. Fuel, electricity, transport or operator already included in the actual service have one owner under original coverage. C=0 or missing complete-life/service-unit/coverage evidence blocks completion; fees, shifts and counts cannot replace actual h. Original quantity convention: Measured use time by asset/run and share of measured complete-life service across all consumers; hand tools may use another justified physical driver with its true property/unit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_operations`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Mixing paddle lifecycle-complete service (`finish_assets_paddle`)

One independently identified mixing paddle lifecycle-complete service. This is a conditional independent object supported within the original finish_assets scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Individual mixers, paddles, squeegees and line equipment with actual native service driver. Asset complete-life ledger links preparation/finishing, other contracts and periods, production, maintenance/replacement/termination and end-of-life once; provider-inclusive coverage or uncovered capital share explicitly recorded.

- Selected flow: Mixing paddle lifecycle-complete service
- Flow property / unit: Duration / h
- Amount rule: Independently collect this child service actual attributable job hours actual_finish_assets_paddle_quantity, fixed Duration/h, then normalize once by original reference denominator C. Preserve the original asset/service CP task, period and all-consumer scope. Matching upstream burden per h must cover complete-life manufacture, maintenance, replacements and end of life using a compatible complete-life hour driver; never multiply this h exchange by an asset-equivalent fraction again. Owned-asset whole-life physical fractions remain non-exchange reconciliation. Fuel, electricity, transport or operator already included in the actual service have one owner under original coverage. C=0 or missing complete-life/service-unit/coverage evidence blocks completion; fees, shifts and counts cannot replace actual h. Original quantity convention: Measured use time by asset/run and share of measured complete-life service across all consumers; hand tools may use another justified physical driver with its true property/unit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_operations`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Squeegee lifecycle-complete service (`finish_assets_squeegee`)

One independently identified squeegee lifecycle-complete service. This is a conditional independent object supported within the original finish_assets scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Individual mixers, paddles, squeegees and line equipment with actual native service driver. Asset complete-life ledger links preparation/finishing, other contracts and periods, production, maintenance/replacement/termination and end-of-life once; provider-inclusive coverage or uncovered capital share explicitly recorded.

- Selected flow: Squeegee lifecycle-complete service
- Flow property / unit: Duration / h
- Amount rule: Independently collect this child service actual attributable job hours actual_finish_assets_squeegee_quantity, fixed Duration/h, then normalize once by original reference denominator C. Preserve the original asset/service CP task, period and all-consumer scope. Matching upstream burden per h must cover complete-life manufacture, maintenance, replacements and end of life using a compatible complete-life hour driver; never multiply this h exchange by an asset-equivalent fraction again. Owned-asset whole-life physical fractions remain non-exchange reconciliation. Fuel, electricity, transport or operator already included in the actual service have one owner under original coverage. C=0 or missing complete-life/service-unit/coverage evidence blocks completion; fees, shifts and counts cannot replace actual h. Original quantity convention: Measured use time by asset/run and share of measured complete-life service across all consumers; hand tools may use another justified physical driver with its true property/unit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_operations`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Line equipment lifecycle-complete service (`finish_assets_line_equipment`)

One independently identified line equipment lifecycle-complete service. This is a conditional independent object supported within the original finish_assets scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Individual mixers, paddles, squeegees and line equipment with actual native service driver. Asset complete-life ledger links preparation/finishing, other contracts and periods, production, maintenance/replacement/termination and end-of-life once; provider-inclusive coverage or uncovered capital share explicitly recorded.

- Selected flow: Line equipment lifecycle-complete service
- Flow property / unit: Duration / h
- Amount rule: Independently collect this child service actual attributable job hours actual_finish_assets_line_equipment_quantity, fixed Duration/h, then normalize once by original reference denominator C. Preserve the original asset/service CP task, period and all-consumer scope. Matching upstream burden per h must cover complete-life manufacture, maintenance, replacements and end of life using a compatible complete-life hour driver; never multiply this h exchange by an asset-equivalent fraction again. Owned-asset whole-life physical fractions remain non-exchange reconciliation. Fuel, electricity, transport or operator already included in the actual service have one owner under original coverage. C=0 or missing complete-life/service-unit/coverage evidence blocks completion; fees, shifts and counts cannot replace actual h. Original quantity convention: Measured use time by asset/run and share of measured complete-life service across all consumers; hand tools may use another justified physical driver with its true property/unit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_operations`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


##### Waste flows

##### Elementary flows


#### Outputs

##### Product flows

###### Accepted existing outdoor acrylic tennis hardcourt recoating repair service (`accepted_recoating_service`)

Completed actual contract on identified qualified dense host: actual approved compatible system, colour/texture, fully dried/cured coats and tennis lines, closed defects and signed handover/opening permission. It is incremental repair, not new full-court construction, guaranteed porosity or an automatic ITF class.

- Selected flow: Accepted existing outdoor acrylic tennis hardcourt recoating repair service
- Flow property / unit: Number of items / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finish_state`
- Sources: `sportmaster-neutral-ready-mix-202406`; `sportmaster-tennis-surfaces`

Range evidence need: Definition fixes one accepted contract as denominator, not its area or service life. Collect signed court/area/system/dates/defect closure and actual acceptance evidence; no numerical dose/yield/life range can be inferred.

###### Usable outward return of actual compatible acrylic resurfacer supplied product (`finish_returns_finish_surfacer_finish_surfacer`)

Same usable unchanged SKU/state as finish_surfacer. This is a conditional independent object supported within the original finish_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Individual usable coating/tint/line/auxiliary lots actually exported to supplier or another job with destination and carried burden. Retained closing stock remains an internal stock term; actual waste does not become a product return by accounting choice. Include actual usable unconsumed fuel outward returns/transfers by grade and lot; distinguish internal tank transfer and carried closing fuel stock.

- Selected flow: Usable outward return of actual compatible acrylic resurfacer supplied product
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_finish_returns_finish_surfacer_finish_surfacer_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Gross weighed outward usable quantity by original supplied or documented mixed state, lot and custody event; do not net incoming receipt and count this export again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_residuals`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of actual supplied acrylic colour coating product (`finish_returns_finish_colour_finish_colour`)

Same usable unchanged SKU/state as finish_colour. This is a conditional independent object supported within the original finish_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Individual usable coating/tint/line/auxiliary lots actually exported to supplier or another job with destination and carried burden. Retained closing stock remains an internal stock term; actual waste does not become a product return by accounting choice. Include actual usable unconsumed fuel outward returns/transfers by grade and lot; distinguish internal tank transfer and carried closing fuel stock.

- Selected flow: Usable outward return of actual supplied acrylic colour coating product
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_finish_returns_finish_colour_finish_colour_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Gross weighed outward usable quantity by original supplied or documented mixed state, lot and custody event; do not net incoming receipt and count this export again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_residuals`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of actual separate approved pigment dispersion (`finish_returns_finish_tint_finish_tint`)

Same usable unchanged SKU/state as finish_tint. This is a conditional independent object supported within the original finish_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Individual usable coating/tint/line/auxiliary lots actually exported to supplier or another job with destination and carried burden. Retained closing stock remains an internal stock term; actual waste does not become a product return by accounting choice. Include actual usable unconsumed fuel outward returns/transfers by grade and lot; distinguish internal tank transfer and carried closing fuel stock.

- Selected flow: Usable outward return of actual separate approved pigment dispersion
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_finish_returns_finish_tint_finish_tint_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Gross weighed outward usable quantity by original supplied or documented mixed state, lot and custody event; do not net incoming receipt and count this export again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_residuals`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of actual compatible acrylic tennis line paint (`finish_returns_finish_line_paint_finish_line_paint`)

Same usable unchanged SKU/state as finish_line_paint. This is a conditional independent object supported within the original finish_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Individual usable coating/tint/line/auxiliary lots actually exported to supplier or another job with destination and carried burden. Retained closing stock remains an internal stock term; actual waste does not become a product return by accounting choice. Include actual usable unconsumed fuel outward returns/transfers by grade and lot; distinguish internal tank transfer and carried closing fuel stock.

- Selected flow: Usable outward return of actual compatible acrylic tennis line paint
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_finish_returns_finish_line_paint_finish_line_paint_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Gross weighed outward usable quantity by original supplied or documented mixed state, lot and custody event; do not net incoming receipt and count this export again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_residuals`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of approved separately added sand (`finish_returns_finish_recipe_additions_sand`)

Same usable unchanged SKU/state as finish_recipe_additions_sand. This is a conditional independent object supported within the original finish_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Individual usable coating/tint/line/auxiliary lots actually exported to supplier or another job with destination and carried burden. Retained closing stock remains an internal stock term; actual waste does not become a product return by accounting choice. Include actual usable unconsumed fuel outward returns/transfers by grade and lot; distinguish internal tank transfer and carried closing fuel stock.

- Selected flow: Usable outward return of approved separately added sand
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_finish_returns_finish_recipe_additions_sand_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Gross weighed outward usable quantity by original supplied or documented mixed state, lot and custody event; do not net incoming receipt and count this export again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_residuals`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of approved separately added ingredient water (`finish_returns_finish_recipe_additions_water`)

Same usable unchanged SKU/state as finish_recipe_additions_water. This is a conditional independent object supported within the original finish_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Individual usable coating/tint/line/auxiliary lots actually exported to supplier or another job with destination and carried burden. Retained closing stock remains an internal stock term; actual waste does not become a product return by accounting choice. Include actual usable unconsumed fuel outward returns/transfers by grade and lot; distinguish internal tank transfer and carried closing fuel stock.

- Selected flow: Usable outward return of approved separately added ingredient water
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_finish_returns_finish_recipe_additions_water_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Gross weighed outward usable quantity by original supplied or documented mixed state, lot and custody event; do not net incoming receipt and count this export again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_residuals`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of masking tape (`finish_returns_finish_auxiliaries_tape`)

Same usable unchanged SKU/state as finish_auxiliaries_tape. This is a conditional independent object supported within the original finish_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Individual usable coating/tint/line/auxiliary lots actually exported to supplier or another job with destination and carried burden. Retained closing stock remains an internal stock term; actual waste does not become a product return by accounting choice. Include actual usable unconsumed fuel outward returns/transfers by grade and lot; distinguish internal tank transfer and carried closing fuel stock.

- Selected flow: Usable outward return of masking tape
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_finish_returns_finish_auxiliaries_tape_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Gross weighed outward usable quantity by original supplied or documented mixed state, lot and custody event; do not net incoming receipt and count this export again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_residuals`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of finishing protection article (`finish_returns_finish_auxiliaries_protection`)

Same usable unchanged SKU/state as finish_auxiliaries_protection. This is a conditional independent object supported within the original finish_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Individual usable coating/tint/line/auxiliary lots actually exported to supplier or another job with destination and carried burden. Retained closing stock remains an internal stock term; actual waste does not become a product return by accounting choice. Include actual usable unconsumed fuel outward returns/transfers by grade and lot; distinguish internal tank transfer and carried closing fuel stock.

- Selected flow: Usable outward return of finishing protection article
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_finish_returns_finish_auxiliaries_protection_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Gross weighed outward usable quantity by original supplied or documented mixed state, lot and custody event; do not net incoming receipt and count this export again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_residuals`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of finishing cleaning article (`finish_returns_finish_auxiliaries_cleaning`)

Same usable unchanged SKU/state as finish_auxiliaries_cleaning. This is a conditional independent object supported within the original finish_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Individual usable coating/tint/line/auxiliary lots actually exported to supplier or another job with destination and carried burden. Retained closing stock remains an internal stock term; actual waste does not become a product return by accounting choice. Include actual usable unconsumed fuel outward returns/transfers by grade and lot; distinguish internal tank transfer and carried closing fuel stock.

- Selected flow: Usable outward return of finishing cleaning article
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_finish_returns_finish_auxiliaries_cleaning_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Gross weighed outward usable quantity by original supplied or documented mixed state, lot and custody event; do not net incoming receipt and count this export again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_residuals`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of approved line primer formulation (`finish_returns_finish_auxiliaries_primer`)

Same usable unchanged SKU/state as finish_auxiliaries_primer. This is a conditional independent object supported within the original finish_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Individual usable coating/tint/line/auxiliary lots actually exported to supplier or another job with destination and carried burden. Retained closing stock remains an internal stock term; actual waste does not become a product return by accounting choice. Include actual usable unconsumed fuel outward returns/transfers by grade and lot; distinguish internal tank transfer and carried closing fuel stock.

- Selected flow: Usable outward return of approved line primer formulation
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_finish_returns_finish_auxiliaries_primer_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Gross weighed outward usable quantity by original supplied or documented mixed state, lot and custody event; do not net incoming receipt and count this export again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_residuals`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of actual gross finishing fuel supplied into node (`finish_returns_finish_fuel_finish_fuel`)

Same usable unchanged SKU/state as finish_fuel. This is a conditional independent object supported within the original finish_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Individual usable coating/tint/line/auxiliary lots actually exported to supplier or another job with destination and carried burden. Retained closing stock remains an internal stock term; actual waste does not become a product return by accounting choice. Include actual usable unconsumed fuel outward returns/transfers by grade and lot; distinguish internal tank transfer and carried closing fuel stock.

- Selected flow: Usable outward return of actual gross finishing fuel supplied into node
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_finish_returns_finish_fuel_finish_fuel_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Gross weighed outward usable quantity by original supplied or documented mixed state, lot and custody event; do not net incoming receipt and count this export again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_residuals`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


##### Waste flows

###### Unusable wet coating waste (`finish_coating_wastes_coating`)

One independently identified unusable wet coating waste. This is a conditional independent object supported within the original finish_coating_wastes scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Actual surplus unusable coating, tint, line paint and scraped recoat rejects segregated by identity/composition, wet/dry state and treatment destination. Material retained as accepted dry film remains on the host; failed areas are reworked, not accepted extra service.

- Selected flow: Unusable wet coating waste
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_finish_coating_wastes_coating_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual weighed waste containers/loads with tare and wet state; retain originating batch/defect and treatment, exclude wastewater mass recorded separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_residuals`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Unusable tint dispersion waste (`finish_coating_wastes_tint`)

One independently identified unusable tint dispersion waste. This is a conditional independent object supported within the original finish_coating_wastes scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Actual surplus unusable coating, tint, line paint and scraped recoat rejects segregated by identity/composition, wet/dry state and treatment destination. Material retained as accepted dry film remains on the host; failed areas are reworked, not accepted extra service.

- Selected flow: Unusable tint dispersion waste
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_finish_coating_wastes_tint_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual weighed waste containers/loads with tare and wet state; retain originating batch/defect and treatment, exclude wastewater mass recorded separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_residuals`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Unusable line-paint waste (`finish_coating_wastes_line_paint`)

One independently identified unusable line-paint waste. This is a conditional independent object supported within the original finish_coating_wastes scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Actual surplus unusable coating, tint, line paint and scraped recoat rejects segregated by identity/composition, wet/dry state and treatment destination. Material retained as accepted dry film remains on the host; failed areas are reworked, not accepted extra service.

- Selected flow: Unusable line-paint waste
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_finish_coating_wastes_line_paint_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual weighed waste containers/loads with tare and wet state; retain originating batch/defect and treatment, exclude wastewater mass recorded separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_residuals`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Scraped recoat film reject (`finish_coating_wastes_removed_film`)

One independently identified scraped recoat film reject. This is a conditional independent object supported within the original finish_coating_wastes scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Actual surplus unusable coating, tint, line paint and scraped recoat rejects segregated by identity/composition, wet/dry state and treatment destination. Material retained as accepted dry film remains on the host; failed areas are reworked, not accepted extra service.

- Selected flow: Scraped recoat film reject
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_finish_coating_wastes_removed_film_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual weighed waste containers/loads with tare and wet state; retain originating batch/defect and treatment, exclude wastewater mass recorded separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_residuals`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


###### Discarded finish container (`finish_spent_articles_container`)

One independently identified discarded finish container. This is a conditional independent object supported within the original finish_spent_articles scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Separate containers, tape, protective sheets and cleaning articles by material/contamination/destination. Supplier-included packaging upstream burden counted once; reusable returns/remaining stock not classified as waste without evidence.

- Selected flow: Discarded finish container
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_finish_spent_articles_container_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Weighed actual article and packaging waste, identifying contained coating residue separately and provider-included disposal coverage.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_residuals`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Spent masking tape (`finish_spent_articles_tape`)

One independently identified spent masking tape. This is a conditional independent object supported within the original finish_spent_articles scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Separate containers, tape, protective sheets and cleaning articles by material/contamination/destination. Supplier-included packaging upstream burden counted once; reusable returns/remaining stock not classified as waste without evidence.

- Selected flow: Spent masking tape
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_finish_spent_articles_tape_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Weighed actual article and packaging waste, identifying contained coating residue separately and provider-included disposal coverage.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_residuals`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Spent protective sheet (`finish_spent_articles_sheet`)

One independently identified spent protective sheet. This is a conditional independent object supported within the original finish_spent_articles scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Separate containers, tape, protective sheets and cleaning articles by material/contamination/destination. Supplier-included packaging upstream burden counted once; reusable returns/remaining stock not classified as waste without evidence.

- Selected flow: Spent protective sheet
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_finish_spent_articles_sheet_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Weighed actual article and packaging waste, identifying contained coating residue separately and provider-included disposal coverage.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_residuals`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Spent finish cleaning article (`finish_spent_articles_cleaning`)

One independently identified spent finish cleaning article. This is a conditional independent object supported within the original finish_spent_articles scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Separate containers, tape, protective sheets and cleaning articles by material/contamination/destination. Supplier-included packaging upstream burden counted once; reusable returns/remaining stock not classified as waste without evidence.

- Selected flow: Spent finish cleaning article
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_finish_spent_articles_cleaning_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Weighed actual article and packaging waste, identifying contained coating residue separately and provider-included disposal coverage.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_residuals`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


###### Actual captured finishing wash wastewater (`finish_wastewater`)

Captured tool/changeover wash water and authorized rinses containing actual coating species transferred for treatment. Includes actual rain/runoff contamination managed by this repair; separately track already removed solids and actual outside-capture releases.

- Selected flow: Actual captured finishing wash wastewater
- Flow property / unit: Mass / kg
- Amount rule: Weighed/measured wet captured mixture and composition at transfer, density-supported volume conversion, event/run and downstream receiver.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finish_residuals`

Range evidence need: Collect actual cleaning/capture/rain balance and treatment receipts with composition/sampling uncertainty; no default all-water discharge or capture rate.

###### Contained finishing unburned fuel (`finish_fuel_wastes_fuel`)

One independently identified contained finishing unburned fuel. This is a conditional independent object supported within the original finish_fuel_wastes scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional separate actual off-spec/unburned fuel, recovered free spill liquid and fuel-contaminated cleanup mixture sent to a waste receiver. Identify grade/composition and keep mixture mass distinct from its contained fuel. Usable outward fuel is a product return; actual uncontrolled substance releases belong to the elementary release row.

- Selected flow: Contained finishing unburned fuel
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_finish_fuel_wastes_fuel_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Weighed actual unburned waste by grade/composition, original event and receiving custody, retaining fuel-content measurement where mixed; reconcile against the fuel balance without counting it as burned fuel.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_residuals`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Captured finishing spill liquid (`finish_fuel_wastes_spill_liquid`)

One independently identified captured finishing spill liquid. This is a conditional independent object supported within the original finish_fuel_wastes scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional separate actual off-spec/unburned fuel, recovered free spill liquid and fuel-contaminated cleanup mixture sent to a waste receiver. Identify grade/composition and keep mixture mass distinct from its contained fuel. Usable outward fuel is a product return; actual uncontrolled substance releases belong to the elementary release row.

- Selected flow: Captured finishing spill liquid
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_finish_fuel_wastes_spill_liquid_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Weighed actual unburned waste by grade/composition, original event and receiving custody, retaining fuel-content measurement where mixed; reconcile against the fuel balance without counting it as burned fuel.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_residuals`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Actual finishing fuel-contaminated mixture (`finish_fuel_wastes_cleanup_mixture`)

One independently identified actual finishing fuel-contaminated mixture. This is a conditional independent object supported within the original finish_fuel_wastes scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional separate actual off-spec/unburned fuel, recovered free spill liquid and fuel-contaminated cleanup mixture sent to a waste receiver. Identify grade/composition and keep mixture mass distinct from its contained fuel. Usable outward fuel is a product return; actual uncontrolled substance releases belong to the elementary release row.

- Selected flow: Actual finishing fuel-contaminated mixture
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_finish_fuel_wastes_cleanup_mixture_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator C; C=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Weighed actual unburned waste by grade/composition, original event and receiving custody, retaining fuel-content measurement where mixed; reconcile against the fuel balance without counting it as burned fuel.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_residuals`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


##### Elementary flows


## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| single_service | accepted_recoating_service | One accepted contract receives all attributable preparation, finishing and defect/recoat burdens. No marketable co-product is assumed; old host retention and waste are not co-products or substitution credits. Divide a multi-contract campaign only by traceable court/run physical use, with measured shares and distinct accepted denominators. |  |
| gross_stock | all material inputs, returns and waste outputs | Reconcile opening usable stock plus gross receipts against application/use, true usable outward returns, waste/residuals and closing usable stock by lot and supplied/mixed state. Do not net receipts then export the return again. Closing stock carries declared upstream burden forward; no negative waste or automatic avoided production credit. Distinguish issue from receipt and wet from dry quantities. |  |
| shared_complete_life | prep_assets_washer; prep_assets_pump; prep_assets_mixer; prep_assets_tool; atomic_prep_assets; finish_assets_mixer; finish_assets_paddle; finish_assets_squeegee; finish_assets_line_equipment; atomic_finish_assets; operational services | Use measured asset/utility service drivers for every consuming node, other contract and reporting period; shares sum to the complete-life total without duplicate ownership. Record production, maintenance/replacement/retirement and end-of-life coverage and actual remaining life. Provider-inclusive service replaces only evidenced covered burdens; add uncovered share once with disclosed uncertainty. Missing justified complete-life coverage or denominator blocks finalization; an evidence-supported prospective in-service scenario is allowed, with forecast/observed distinction, uncertainty, sensitivity and updates. |  |
| campaign_changeover | both node material and operation records | Define actual repair campaign by contract/court and actual tint batch, coat/colour/line run, weather window and changeover event; do not infer a production batch from a sold pail. Attribute measured mixing, wash, setup, inspection and rework to consuming runs/contracts using actual causal drivers. Shared event has one owner; if a campaign crosses periods, maintain stable IDs and carry attributed balances without charging the event twice. |  |
| rework_retention | both nodes failed areas and material returns | Failed dirty/defective host returns to prepare_host; deficient colour/lines/cure return to finish_surface or underlying repair with actual event/transfer link. Retain original and corrective burdens in this contract, account consumed materials and outgoing rejects once, and count final acceptance once only after closed defects. Distinguish external usable supplier returns from waste and internal rework. | sportmaster-neutral-ready-mix-202406 |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_prep_materials | prepare_host | Each actual supplied material, water source and recipe addition | lot and event ledger | contract_id; court_id; date; period_id; run_id; event_id; lot_id; product_identity; supply_state; formulation; gross_receipt_kg; issue_kg; opening_stock_kg; closing_stock_kg; outward_return_kg; scale_tare_kg; measured_gross_load_kg; water_meter_start_m3; water_meter_end_m3; density_kg_per_m3; temperature_degC; addition_identity; actual_recipe; supplier_coverage; actual_child_id; atomic_flow_row_id; parent_ledger_id; actual_object_sku_or_bounded_service; actual_state_gate; actual_receiving_medium_or_custodian; exchange_property; exchange_unit; independent_physical_quantity; same_identity_conversion_evidence; actual_activation_or_absence_evidence; source_stock_event_id; actual_owner_id; actual_period_id; package_inclusion_exclusion; one_burden_owner_evidence; child_reconciliation_status; child_range_evidence; legacy_parent_role; source_component_role; source_component_row_id; paired_atomic_row_id; actual_transfer_event_id; child_quantity_operands; own_node_helper_id; quantity_ledger_group_key; source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status | Collect delivery/stock/tare-weigh tickets and calibrated water meters by exact identity; distinguish receipts/issues, formulated/active content, factory included versus on-site added ingredient, bought versus abstracted water. Link actual tint batch/base and coating/run, record zero only with evidenced absence. Convert actual volumes only with documented density/temperature; derive uncertainty from scales/meters/lot variation. Retain the original PCR stock, event, denominator, attribution and closure methods above. Maintain an actual-child register by node, period and parent_ledger_id. Each quantity-bearing exchange has one independent physical product, complete formulation/assembly, defined bounded service, actual waste carrier or substance/medium, one fixed property/unit and its independently collected numerator. Retain all original roles, corrections and stock/WIP/fate records. Former family quantities remain non-exchange custody or closure diagnostics only; never copy/divide a family total or Range into children or sum unlike units as an exchange. Each actual SKU/state/provider/receiver is separate when it represents an independent exchange. A supplied complete package and its already included constituents are exclusive views; identical physical cables serving multiple duties are counted once. Missing actual child roster, quantity, activation/absence, identity/state/medium, method or unit support blocks final foreground completion; it is never zero or implicitly not applicable. Foreground records provide the operands; they cannot choose another reference denominator, allocation, stock or fate convention. actual_<row_id>_quantity aliases this record independent physical quantity keyed by atomic_flow_row_id under the original CP method and atomic_child_normalization, never another parent quantity. Actual child records retain legacy_parent_role and own_node_helper_id; independently collect every original role helper operand in child_quantity_operands, grouped by quantity_ledger_group_key material/source-state/current-state/period/unit. Real internal source and recipient match by paired_atomic_row_id and actual_transfer_event_id, never derived from a parent total or unexplained residual. Internal I=F is a reconciliation condition for the same actual material/SKU, state, event, custody boundary and gate, never an assignment formula. Each child retains its own actual dispatch quantity and receipt/custody evidence. The same signed custody measurement may be traceably reused without inventing another weighing. Never copy a family total into each child, overwrite a real receipt or force unknown quantities equal. Preserve discrepancies with original values/units, measurement uncertainty, actual transfer loss, state change and responsible-owner evidence; unresolved differences block completion. Internal quantities remain unnormalized physical amounts, divided by the original reference denominator only at each card final step; parent-role sums are QA only. | kg by concrete material/source; raw m3 with density | Every receipt, issue, addition, stock close and water-use event | Full repair campaign including failed attempts and changeovers; stock at campaign boundaries | Actual contract courts, supplier lots and withdrawal source | per reference flow | Supplier instructions/SDS; calibration/tare; invoices and stock/recipe reconciliation; exact lot/role and product compatibility; actual uncertainty and coverage; material balance uses measured gross load minus vehicle/container tare, before netting returns |
| cp_prep_operations | prepare_host | Actual electricity, fuel, logistics and complete-life asset shares | machine trip and asset service ledger | contract_id; court_id; date; period_id; run_id; event_id; asset_id; meter_start_kWh; meter_end_kWh; fuel_identity; fuel_issue_kg; fuel_density_kg_per_L; service_hours_h; cargo_t; distance_km; empty_leg_rule; provider_coverage; lifetime_service_h; other_consumers; production_burden; maintenance_event; replacement_event; termination_event; end_of_life_coverage; allocation_driver; opening_fuel_stock_kg; closing_fuel_stock_kg; gross_fuel_receipt_kg; true_fuel_outward_return_kg; fuel_transfer_boundary; unburned_fuel_waste_kg; fuel_spill_kg; actually_burned_fuel_kg; unburned_fuel_release_kg; actual_child_id; atomic_flow_row_id; parent_ledger_id; actual_object_sku_or_bounded_service; actual_state_gate; actual_receiving_medium_or_custodian; exchange_property; exchange_unit; independent_physical_quantity; same_identity_conversion_evidence; actual_activation_or_absence_evidence; source_stock_event_id; actual_owner_id; actual_period_id; package_inclusion_exclusion; one_burden_owner_evidence; child_reconciliation_status; child_range_evidence; legacy_parent_role; source_component_role; source_component_row_id; paired_atomic_row_id; actual_transfer_event_id; child_quantity_operands; own_node_helper_id; quantity_ledger_group_key; source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status | Meter actual equipment and record actual tank/issues/trips by job/run. Cross-check shared meter separation and payload/distance with operator/provider records. Asset ledger enumerates prepare_host, finish_surface and other jobs/periods, complete-life production/use/maintenance/replacement/termination/end-of-life; use measured causal service shares and document provider coverage and uncovered burdens. Each shared event has one owner. Completed asset life uses observed history; in-service remaining service/replacement/termination/end-of-life may use justified prospective scenarios, labelled forecast with total-service denominator/source, uncertainty/sensitivity and actual-event update triggers. Record the fuel input exchange as gross fuel crossing into this node. Reconcile opening/closing fuel and gross inputs with true outward usable returns/transfers, unburned waste, actual unrecovered release and actual burning; incident total spill includes recovered portions and must not be subtracted again. transfers internal to the boundary are not consumed fuel. Only actual burned fuel drives combustion factors; route unburned fuel by actual product/waste/elementary custody and substance state. Retain the original PCR stock, event, denominator, attribution and closure methods above. Maintain an actual-child register by node, period and parent_ledger_id. Each quantity-bearing exchange has one independent physical product, complete formulation/assembly, defined bounded service, actual waste carrier or substance/medium, one fixed property/unit and its independently collected numerator. Retain all original roles, corrections and stock/WIP/fate records. Former family quantities remain non-exchange custody or closure diagnostics only; never copy/divide a family total or Range into children or sum unlike units as an exchange. Each actual SKU/state/provider/receiver is separate when it represents an independent exchange. A supplied complete package and its already included constituents are exclusive views; identical physical cables serving multiple duties are counted once. Missing actual child roster, quantity, activation/absence, identity/state/medium, method or unit support blocks final foreground completion; it is never zero or implicitly not applicable. Foreground records provide the operands; they cannot choose another reference denominator, allocation, stock or fate convention. actual_<row_id>_quantity aliases this record independent physical quantity keyed by atomic_flow_row_id under the original CP method and atomic_child_normalization, never another parent quantity. Actual child records retain legacy_parent_role and own_node_helper_id; independently collect every original role helper operand in child_quantity_operands, grouped by quantity_ledger_group_key material/source-state/current-state/period/unit. Real internal source and recipient match by paired_atomic_row_id and actual_transfer_event_id, never derived from a parent total or unexplained residual. Internal I=F is a reconciliation condition for the same actual material/SKU, state, event, custody boundary and gate, never an assignment formula. Each child retains its own actual dispatch quantity and receipt/custody evidence. The same signed custody measurement may be traceably reused without inventing another weighing. Never copy a family total into each child, overwrite a real receipt or force unknown quantities equal. Preserve discrepancies with original values/units, measurement uncertainty, actual transfer loss, state change and responsible-owner evidence; unresolved differences block completion. Internal quantities remain unnormalized physical amounts, divided by the original reference denominator only at each card final step; parent-role sums are QA only. | kWh; kg by fuel; t.km by leg; h by asset | Every run, fuel issue, trip and asset event; reconcile campaign and period close | Full campaign and complete-life asset periods including other jobs | Actual node equipment, providers, supply routes and complete-life ledger | per reference flow | Calibrated meters; tank and trip evidence; measured driver/share sums; asset replacement/termination and coverage evidence; uncertainty and no duplicated provider burdens |
| cp_prep_state | prepare_host | Qualified retained host and accepted preparation handoff | inspection survey and handover record | contract_id; court_id; date; period_id; run_id; transfer_id; host_identity; structural_condition; drainage_condition; compatibility_evidence; defect_location; treated_area_m2; line_length_m; line_width_m; line_area_m2; repair_dimensions_mm; coat_id; tint_batch_id; weather_air_degC; weather_surface_degC; rain_record; dry_time_h; cure_time_h; product_instruction_revision; criterion_source; specified_tolerance; measured_result; rejected_area_m2; rework_event_id; signed_acceptance | Survey actual host/repair geometry with actual units, specified tolerance and criterion source. Inspect existing structure/drainage and prior-coating compatibility before work; record actual cleaning/flush localized repair inspection, failed-area correction and accepted clean prepared area transferred under matched transfer ID to finish_surface. Shared tracking fields identify the same contract, but final coating/curing/lines/service handover are owned by cp_finish_state. | m2; m; mm; actual host/preparation test units | Before preparation, after cleaning/local repair and each corrective preparation gate | Dated preparation phase through accepted paired transfer | Identified actual courts, treated portions and paired interfaces | per reference flow | Survey/inspection and actual criterion/instruction versions; signed transfer/handover; raw tests with actual acceptance tolerance; recorded defect closure and geometry/timing uncertainty |
| cp_prep_residuals | prepare_host | Each actual usable return, waste stream and environmental substance | custody, weighing and release record | contract_id; court_id; date; period_id; run_id; event_id; lot_id; original_node; outward_custody_id; destination; usable_or_waste; waste_composition; wet_mass_kg; dry_mass_kg; tare_kg; measured_gross_load_kg; wastewater_m3; density_kg_per_m3; rainfall_ingress_m3; separated_solids_kg; substance_identity; receiving_medium; particle_fraction; capture_method; factor_source; monitoring_result; uncertainty; upstream_burden_owner; activity_value; activity_unit; factor_value; factor_numerator_unit; factor_denominator_unit; factor_applicability; factor_capture_basis; factor_uncertainty; fuel_unburned_state; unburned_fuel_release_kg; actual_child_id; atomic_flow_row_id; parent_ledger_id; actual_object_sku_or_bounded_service; actual_state_gate; actual_receiving_medium_or_custodian; exchange_property; exchange_unit; independent_physical_quantity; same_identity_conversion_evidence; actual_activation_or_absence_evidence; source_stock_event_id; actual_owner_id; actual_period_id; package_inclusion_exclusion; one_burden_owner_evidence; child_reconciliation_status; child_range_evidence; legacy_parent_role; source_component_role; source_component_row_id; paired_atomic_row_id; actual_transfer_event_id; child_quantity_operands; own_node_helper_id; quantity_ledger_group_key; source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status | Weigh segregated outgoing residuals/usable returns with tare and wet state, verify receiver/custody and treatment coverage. Measure captured wastewater including actual rainfall ingress and separated solids; sample/speciate actual releases or use justified actual-product/process factors with capture and uncertainty. Never export retained stock, sum unknown substances or count captured wastewater as elementary discharge. Match failed/recoat events to original node and retain burdens. Retain the original PCR stock, event, denominator, attribution and closure methods above. Maintain an actual-child register by node, period and parent_ledger_id. Each quantity-bearing exchange has one independent physical product, complete formulation/assembly, defined bounded service, actual waste carrier or substance/medium, one fixed property/unit and its independently collected numerator. Retain all original roles, corrections and stock/WIP/fate records. Former family quantities remain non-exchange custody or closure diagnostics only; never copy/divide a family total or Range into children or sum unlike units as an exchange. Each actual SKU/state/provider/receiver is separate when it represents an independent exchange. A supplied complete package and its already included constituents are exclusive views; identical physical cables serving multiple duties are counted once. Missing actual child roster, quantity, activation/absence, identity/state/medium, method or unit support blocks final foreground completion; it is never zero or implicitly not applicable. Foreground records provide the operands; they cannot choose another reference denominator, allocation, stock or fate convention. actual_<row_id>_quantity aliases this record independent physical quantity keyed by atomic_flow_row_id under the original CP method and atomic_child_normalization, never another parent quantity. Actual child records retain legacy_parent_role and own_node_helper_id; independently collect every original role helper operand in child_quantity_operands, grouped by quantity_ledger_group_key material/source-state/current-state/period/unit. Real internal source and recipient match by paired_atomic_row_id and actual_transfer_event_id, never derived from a parent total or unexplained residual. Internal I=F is a reconciliation condition for the same actual material/SKU, state, event, custody boundary and gate, never an assignment formula. Each child retains its own actual dispatch quantity and receipt/custody evidence. The same signed custody measurement may be traceably reused without inventing another weighing. Never copy a family total into each child, overwrite a real receipt or force unknown quantities equal. Preserve discrepancies with original values/units, measurement uncertainty, actual transfer loss, state change and responsible-owner evidence; unresolved differences block completion. Internal quantities remain unnormalized physical amounts, divided by the original reference denominator only at each card final step; parent-role sums are QA only. | kg by actual product/waste/substance; raw wastewater m3 with density | Every outward load/return, capture/cleaning and release event | Full campaign through disposal/return and defect closure | Actual court capture boundary and downstream receiver/receiving medium | per reference flow | Waste/return tickets and receiving acceptance; calibrated scales; SDS/species/capture/monitoring or factor evidence; wet/dry/solids balances, custody and uncertainty |
| cp_finish_materials | finish_surface | Each actual supplied material, water source and recipe addition | lot and event ledger | contract_id; court_id; date; period_id; run_id; event_id; lot_id; product_identity; supply_state; formulation; gross_receipt_kg; issue_kg; opening_stock_kg; closing_stock_kg; outward_return_kg; scale_tare_kg; measured_gross_load_kg; water_meter_start_m3; water_meter_end_m3; density_kg_per_m3; temperature_degC; addition_identity; actual_recipe; supplier_coverage; actual_child_id; atomic_flow_row_id; parent_ledger_id; actual_object_sku_or_bounded_service; actual_state_gate; actual_receiving_medium_or_custodian; exchange_property; exchange_unit; independent_physical_quantity; same_identity_conversion_evidence; actual_activation_or_absence_evidence; source_stock_event_id; actual_owner_id; actual_period_id; package_inclusion_exclusion; one_burden_owner_evidence; child_reconciliation_status; child_range_evidence; legacy_parent_role; source_component_role; source_component_row_id; paired_atomic_row_id; actual_transfer_event_id; child_quantity_operands; own_node_helper_id; quantity_ledger_group_key; source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status | Collect delivery/stock/tare-weigh tickets and calibrated water meters by exact identity; distinguish receipts/issues, formulated/active content, factory included versus on-site added ingredient, bought versus abstracted water. Link actual tint batch/base and coating/run, record zero only with evidenced absence. Convert actual volumes only with documented density/temperature; derive uncertainty from scales/meters/lot variation. Retain the original PCR stock, event, denominator, attribution and closure methods above. Maintain an actual-child register by node, period and parent_ledger_id. Each quantity-bearing exchange has one independent physical product, complete formulation/assembly, defined bounded service, actual waste carrier or substance/medium, one fixed property/unit and its independently collected numerator. Retain all original roles, corrections and stock/WIP/fate records. Former family quantities remain non-exchange custody or closure diagnostics only; never copy/divide a family total or Range into children or sum unlike units as an exchange. Each actual SKU/state/provider/receiver is separate when it represents an independent exchange. A supplied complete package and its already included constituents are exclusive views; identical physical cables serving multiple duties are counted once. Missing actual child roster, quantity, activation/absence, identity/state/medium, method or unit support blocks final foreground completion; it is never zero or implicitly not applicable. Foreground records provide the operands; they cannot choose another reference denominator, allocation, stock or fate convention. actual_<row_id>_quantity aliases this record independent physical quantity keyed by atomic_flow_row_id under the original CP method and atomic_child_normalization, never another parent quantity. Actual child records retain legacy_parent_role and own_node_helper_id; independently collect every original role helper operand in child_quantity_operands, grouped by quantity_ledger_group_key material/source-state/current-state/period/unit. Real internal source and recipient match by paired_atomic_row_id and actual_transfer_event_id, never derived from a parent total or unexplained residual. Internal I=F is a reconciliation condition for the same actual material/SKU, state, event, custody boundary and gate, never an assignment formula. Each child retains its own actual dispatch quantity and receipt/custody evidence. The same signed custody measurement may be traceably reused without inventing another weighing. Never copy a family total into each child, overwrite a real receipt or force unknown quantities equal. Preserve discrepancies with original values/units, measurement uncertainty, actual transfer loss, state change and responsible-owner evidence; unresolved differences block completion. Internal quantities remain unnormalized physical amounts, divided by the original reference denominator only at each card final step; parent-role sums are QA only. | kg by concrete material/source; raw m3 with density | Every receipt, issue, addition, stock close and water-use event | Full repair campaign including failed attempts and changeovers; stock at campaign boundaries | Actual contract courts, supplier lots and withdrawal source | per reference flow | Supplier instructions/SDS; calibration/tare; invoices and stock/recipe reconciliation; exact lot/role and product compatibility; actual uncertainty and coverage; material balance uses measured gross load minus vehicle/container tare, before netting returns |
| cp_finish_operations | finish_surface | Actual electricity, fuel, logistics and complete-life asset shares | machine trip and asset service ledger | contract_id; court_id; date; period_id; run_id; event_id; asset_id; meter_start_kWh; meter_end_kWh; fuel_identity; fuel_issue_kg; fuel_density_kg_per_L; service_hours_h; cargo_t; distance_km; empty_leg_rule; provider_coverage; lifetime_service_h; other_consumers; production_burden; maintenance_event; replacement_event; termination_event; end_of_life_coverage; allocation_driver; opening_fuel_stock_kg; closing_fuel_stock_kg; gross_fuel_receipt_kg; true_fuel_outward_return_kg; fuel_transfer_boundary; unburned_fuel_waste_kg; fuel_spill_kg; actually_burned_fuel_kg; unburned_fuel_release_kg; actual_child_id; atomic_flow_row_id; parent_ledger_id; actual_object_sku_or_bounded_service; actual_state_gate; actual_receiving_medium_or_custodian; exchange_property; exchange_unit; independent_physical_quantity; same_identity_conversion_evidence; actual_activation_or_absence_evidence; source_stock_event_id; actual_owner_id; actual_period_id; package_inclusion_exclusion; one_burden_owner_evidence; child_reconciliation_status; child_range_evidence; legacy_parent_role; source_component_role; source_component_row_id; paired_atomic_row_id; actual_transfer_event_id; child_quantity_operands; own_node_helper_id; quantity_ledger_group_key; source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status | Meter actual equipment and record actual tank/issues/trips by job/run. Cross-check shared meter separation and payload/distance with operator/provider records. Asset ledger enumerates prepare_host, finish_surface and other jobs/periods, complete-life production/use/maintenance/replacement/termination/end-of-life; use measured causal service shares and document provider coverage and uncovered burdens. Each shared event has one owner. Completed asset life uses observed history; in-service remaining service/replacement/termination/end-of-life may use justified prospective scenarios, labelled forecast with total-service denominator/source, uncertainty/sensitivity and actual-event update triggers. Record the fuel input exchange as gross fuel crossing into this node. Reconcile opening/closing fuel and gross inputs with true outward usable returns/transfers, unburned waste, actual unrecovered release and actual burning; incident total spill includes recovered portions and must not be subtracted again. transfers internal to the boundary are not consumed fuel. Only actual burned fuel drives combustion factors; route unburned fuel by actual product/waste/elementary custody and substance state. Retain the original PCR stock, event, denominator, attribution and closure methods above. Maintain an actual-child register by node, period and parent_ledger_id. Each quantity-bearing exchange has one independent physical product, complete formulation/assembly, defined bounded service, actual waste carrier or substance/medium, one fixed property/unit and its independently collected numerator. Retain all original roles, corrections and stock/WIP/fate records. Former family quantities remain non-exchange custody or closure diagnostics only; never copy/divide a family total or Range into children or sum unlike units as an exchange. Each actual SKU/state/provider/receiver is separate when it represents an independent exchange. A supplied complete package and its already included constituents are exclusive views; identical physical cables serving multiple duties are counted once. Missing actual child roster, quantity, activation/absence, identity/state/medium, method or unit support blocks final foreground completion; it is never zero or implicitly not applicable. Foreground records provide the operands; they cannot choose another reference denominator, allocation, stock or fate convention. actual_<row_id>_quantity aliases this record independent physical quantity keyed by atomic_flow_row_id under the original CP method and atomic_child_normalization, never another parent quantity. Actual child records retain legacy_parent_role and own_node_helper_id; independently collect every original role helper operand in child_quantity_operands, grouped by quantity_ledger_group_key material/source-state/current-state/period/unit. Real internal source and recipient match by paired_atomic_row_id and actual_transfer_event_id, never derived from a parent total or unexplained residual. Internal I=F is a reconciliation condition for the same actual material/SKU, state, event, custody boundary and gate, never an assignment formula. Each child retains its own actual dispatch quantity and receipt/custody evidence. The same signed custody measurement may be traceably reused without inventing another weighing. Never copy a family total into each child, overwrite a real receipt or force unknown quantities equal. Preserve discrepancies with original values/units, measurement uncertainty, actual transfer loss, state change and responsible-owner evidence; unresolved differences block completion. Internal quantities remain unnormalized physical amounts, divided by the original reference denominator only at each card final step; parent-role sums are QA only. | kWh; kg by fuel; t.km by leg; h by asset | Every run, fuel issue, trip and asset event; reconcile campaign and period close | Full campaign and complete-life asset periods including other jobs | Actual node equipment, providers, supply routes and complete-life ledger | per reference flow | Calibrated meters; tank and trip evidence; measured driver/share sums; asset replacement/termination and coverage evidence; uncertainty and no duplicated provider burdens |
| cp_finish_state | finish_surface | Received host, coat/cure/line state and accepted final service | inspection survey and handover record | contract_id; court_id; date; period_id; run_id; transfer_id; host_identity; structural_condition; drainage_condition; compatibility_evidence; defect_location; treated_area_m2; line_length_m; line_width_m; line_area_m2; repair_dimensions_mm; coat_id; tint_batch_id; weather_air_degC; weather_surface_degC; rain_record; dry_time_h; cure_time_h; product_instruction_revision; criterion_source; specified_tolerance; measured_result; rejected_area_m2; rework_event_id; signed_acceptance | Survey actual court/repair and line geometry with units/tolerance. Inspect existing structure/drainage and coating compatibility before start; document clean flush repair gate and pair transfer IDs/areas. Record actual product instruction and weather/timing by coat/run, actual cure/line/specified surface tests and defects; final acceptance requires closed defects and opening permission. Each raw measured attribute retains actual unit, tolerance and criterion source; no universal ITF/porosity or court size. | Item(s) final contract; m2; m; mm; degC; h as raw attributes | Before preparation, each gate/coat, after defect correction and final handover | Dated complete repair campaign; final output counted once | Identified actual courts, treated portions and paired interfaces | per reference flow | Survey/inspection and actual criterion/instruction versions; signed transfer/handover; raw tests with actual acceptance tolerance; recorded defect closure and geometry/timing uncertainty |
| cp_finish_residuals | finish_surface | Each actual usable return, waste stream and environmental substance | custody, weighing and release record | contract_id; court_id; date; period_id; run_id; event_id; lot_id; original_node; outward_custody_id; destination; usable_or_waste; waste_composition; wet_mass_kg; dry_mass_kg; tare_kg; measured_gross_load_kg; wastewater_m3; density_kg_per_m3; rainfall_ingress_m3; separated_solids_kg; substance_identity; receiving_medium; particle_fraction; capture_method; factor_source; monitoring_result; uncertainty; upstream_burden_owner; activity_value; activity_unit; factor_value; factor_numerator_unit; factor_denominator_unit; factor_applicability; factor_capture_basis; factor_uncertainty; fuel_unburned_state; unburned_fuel_release_kg; actual_child_id; atomic_flow_row_id; parent_ledger_id; actual_object_sku_or_bounded_service; actual_state_gate; actual_receiving_medium_or_custodian; exchange_property; exchange_unit; independent_physical_quantity; same_identity_conversion_evidence; actual_activation_or_absence_evidence; source_stock_event_id; actual_owner_id; actual_period_id; package_inclusion_exclusion; one_burden_owner_evidence; child_reconciliation_status; child_range_evidence; legacy_parent_role; source_component_role; source_component_row_id; paired_atomic_row_id; actual_transfer_event_id; child_quantity_operands; own_node_helper_id; quantity_ledger_group_key; source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status | Weigh segregated outgoing residuals/usable returns with tare and wet state, verify receiver/custody and treatment coverage. Measure captured wastewater including actual rainfall ingress and separated solids; sample/speciate actual releases or use justified actual-product/process factors with capture and uncertainty. Never export retained stock, sum unknown substances or count captured wastewater as elementary discharge. Match failed/recoat events to original node and retain burdens. Retain the original PCR stock, event, denominator, attribution and closure methods above. Maintain an actual-child register by node, period and parent_ledger_id. Each quantity-bearing exchange has one independent physical product, complete formulation/assembly, defined bounded service, actual waste carrier or substance/medium, one fixed property/unit and its independently collected numerator. Retain all original roles, corrections and stock/WIP/fate records. Former family quantities remain non-exchange custody or closure diagnostics only; never copy/divide a family total or Range into children or sum unlike units as an exchange. Each actual SKU/state/provider/receiver is separate when it represents an independent exchange. A supplied complete package and its already included constituents are exclusive views; identical physical cables serving multiple duties are counted once. Missing actual child roster, quantity, activation/absence, identity/state/medium, method or unit support blocks final foreground completion; it is never zero or implicitly not applicable. Foreground records provide the operands; they cannot choose another reference denominator, allocation, stock or fate convention. actual_<row_id>_quantity aliases this record independent physical quantity keyed by atomic_flow_row_id under the original CP method and atomic_child_normalization, never another parent quantity. Actual child records retain legacy_parent_role and own_node_helper_id; independently collect every original role helper operand in child_quantity_operands, grouped by quantity_ledger_group_key material/source-state/current-state/period/unit. Real internal source and recipient match by paired_atomic_row_id and actual_transfer_event_id, never derived from a parent total or unexplained residual. Internal I=F is a reconciliation condition for the same actual material/SKU, state, event, custody boundary and gate, never an assignment formula. Each child retains its own actual dispatch quantity and receipt/custody evidence. The same signed custody measurement may be traceably reused without inventing another weighing. Never copy a family total into each child, overwrite a real receipt or force unknown quantities equal. Preserve discrepancies with original values/units, measurement uncertainty, actual transfer loss, state change and responsible-owner evidence; unresolved differences block completion. Internal quantities remain unnormalized physical amounts, divided by the original reference denominator only at each card final step; parent-role sums are QA only. | kg by actual product/waste/substance; raw wastewater m3 with density | Every outward load/return, capture/cleaning and release event | Full campaign through disposal/return and defect closure | Actual court capture boundary and downstream receiver/receiving medium | per reference flow | Waste/return tickets and receiving acceptance; calibrated scales; SDS/species/capture/monitoring or factor evidence; wet/dry/solids balances, custody and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| contract_attribution | all inventory rows | Sum separately identified event quantities attributed to the actual accepted contract; share a multi-contract event only by documented measured causal driver. All inventory is per reference flow. Retain incomplete/rejected attempt burdens until final acceptance. | node-specific protocols; court/run/event IDs; measured driver; signed accepted contract | Individual amount per 1 Item(s) accepted repair contract |  |
| lot_reconciliation | all material, stock, return and residual rows | Opening usable stock + gross receipts = actual application/use + true usable outward returns + waste/residual losses + closing usable stock, with actual within-process transformations and measurement difference disclosed by lot/state. Applied wet coating is partitioned into retained film and actual volatilized/other loss evidence; never equate wet mass and dry film. | node materials and residual protocols; supply state; lot; actual film and species evidence | Wet-material and stock closure; carried-forward burden and unresolved difference |  |
| volume_mass | water, coating, tint, fuel and wastewater volumes | Convert each actual lot volume using its own measured/documented density at declared temperature and compatible units; retain original volume, density and uncertainty. No source coverage volume or universal water-density assumption supplies an unmeasured coating mass. | actual volume; actual density; temperature; calibration | kg by actual lot/source |  |
| interface_match | prepared_host_output; prepared_host_input | Match transfer IDs, accepted area/state, court/location and tolerance in both nodes; carry preparation burden once into finish_surface without external additional host production. Explain any rejected/returned area with event linkage. | cp_prep_state; cp_finish_state; transfer IDs | Paired m2 physical handoff and single burden owner |  |
| asset_share | prep_assets_washer; prep_assets_pump; prep_assets_mixer; prep_assets_tool; atomic_prep_assets; finish_assets_mixer; finish_assets_paddle; finish_assets_squeegee; finish_assets_line_equipment; atomic_finish_assets | Attribute actual complete-life asset burdens by measured service use of this node/job/period divided by total complete-life service for all consumers, with replacement/termination/end-of-life coverage and retained remaining-life burden disclosed. Do not use contract count to replace true asset service units. | node operations protocols; complete-life ledger; provider inclusion | Native service quantity and attributed complete-life burden without overlap |  |
| fuel_consumption | prep_fuel; finish_fuel; prep_returns_prep_cleaners_detergent; prep_returns_prep_cleaners_biocide; prep_returns_prep_repairs_patch; prep_returns_prep_repairs_binder; prep_returns_prep_repairs_filler; prep_returns_prep_repairs_cement; prep_returns_prep_repairs_sand; prep_returns_prep_consumables_absorbent; prep_returns_prep_consumables_protection; prep_returns_prep_consumables_containment; prep_returns_prep_consumables_cleaning; prep_returns_prep_fuel_prep_fuel; atomic_prep_returns; finish_returns_finish_surfacer_finish_surfacer; finish_returns_finish_colour_finish_colour; finish_returns_finish_tint_finish_tint; finish_returns_finish_line_paint_finish_line_paint; finish_returns_finish_recipe_additions_sand; finish_returns_finish_recipe_additions_water; finish_returns_finish_auxiliaries_tape; finish_returns_finish_auxiliaries_protection; finish_returns_finish_auxiliaries_cleaning; finish_returns_finish_auxiliaries_primer; finish_returns_finish_fuel_finish_fuel; atomic_finish_returns; prep_fuel_wastes_fuel; prep_fuel_wastes_spill_liquid; prep_fuel_wastes_cleanup_mixture; atomic_prep_fuel_wastes; finish_fuel_wastes_fuel; finish_fuel_wastes_spill_liquid; finish_fuel_wastes_cleanup_mixture; atomic_finish_fuel_wastes; atomic_prep_releases; atomic_finish_releases | Actual burned fuel = opening node fuel stock + gross fuel inputs - closing node fuel stock - true usable outward returns/transfers - unburned fuel waste - actual unburned fuel released, by grade/event. All outlet terms are mutually exclusive; total incident spill is partitioned between recovered waste/retained material and actual release, never subtracted again as another term. This derived burned quantity drives combustion only; fuel input remains gross and recorded output returns/wastes are not netted twice. | node operations/residual protocols; actual tank/receipt/return/waste/release records | Actual burned fuel kg by grade/event, distinct from gross input exchange |  |
| species_release | atomic_prep_releases; atomic_finish_releases | For each actual substance and medium, calculate attributable measured activity times the applicable species factor with explicitly compatible numerator/denominator units and documented factor capture basis; apply measured capture correction only if not already included. Alternatively use direct monitoring mass integration from actual concentration/flow/time with compatible units. Use actual burned fuel, not returned/spilled fuel, for combustion; actual unburned releases use their own substance route. Propagate activity/factor/capture/monitoring uncertainty and identify unsupported species as missing evidence. | node residual and operations protocols; measured activity; species method/factor units/applicability; capture and uncertainty | kg by actual substance/medium per reference flow |  |
| atomic_child_normalization | prep_cleaners_detergent; prep_cleaners_biocide; prep_repairs_patch; prep_repairs_binder; prep_repairs_filler; prep_repairs_cement; prep_repairs_sand; prep_consumables_absorbent; prep_consumables_protection; prep_consumables_containment; prep_consumables_cleaning; prep_assets_washer; prep_assets_pump; prep_assets_mixer; prep_assets_tool; prep_returns_prep_cleaners_detergent; prep_returns_prep_cleaners_biocide; prep_returns_prep_repairs_patch; prep_returns_prep_repairs_binder; prep_returns_prep_repairs_filler; prep_returns_prep_repairs_cement; prep_returns_prep_repairs_sand; prep_returns_prep_consumables_absorbent; prep_returns_prep_consumables_protection; prep_returns_prep_consumables_containment; prep_returns_prep_consumables_cleaning; prep_returns_prep_fuel_prep_fuel; prep_removed_solids_coating; prep_removed_solids_debris; prep_removed_solids_patch; prep_used_articles_container; prep_used_articles_absorbent; prep_used_articles_containment; prep_used_articles_cleaning; prep_fuel_wastes_fuel; prep_fuel_wastes_spill_liquid; prep_fuel_wastes_cleanup_mixture; finish_recipe_additions_sand; finish_recipe_additions_water; finish_auxiliaries_tape; finish_auxiliaries_protection; finish_auxiliaries_cleaning; finish_auxiliaries_primer; finish_assets_mixer; finish_assets_paddle; finish_assets_squeegee; finish_assets_line_equipment; finish_returns_finish_surfacer_finish_surfacer; finish_returns_finish_colour_finish_colour; finish_returns_finish_tint_finish_tint; finish_returns_finish_line_paint_finish_line_paint; finish_returns_finish_recipe_additions_sand; finish_returns_finish_recipe_additions_water; finish_returns_finish_auxiliaries_tape; finish_returns_finish_auxiliaries_protection; finish_returns_finish_auxiliaries_cleaning; finish_returns_finish_auxiliaries_primer; finish_returns_finish_fuel_finish_fuel; finish_coating_wastes_coating; finish_coating_wastes_tint; finish_coating_wastes_line_paint; finish_coating_wastes_removed_film; finish_spent_articles_container; finish_spent_articles_tape; finish_spent_articles_sheet; finish_spent_articles_cleaning; finish_fuel_wastes_fuel; finish_fuel_wastes_spill_liquid; finish_fuel_wastes_cleanup_mixture | Record independent_physical_quantity separately by atomic_flow_row_id; actual_<row_id>_quantity is its named alias only, never a copied family amount. Materials retain original CP per-identity/state gross/net stock and outward-return conventions; transfers use actual paired custody quantity; usable exits and wastes use independent actual fate quantities. Number-of-items owned asset equivalents use this PCR original job_driver/full_life_driver complete-life fraction including manufacture, maintenance, replacement and end of life, with every consumer and a positive complete denominator. Duration/h service children instead use actual attributable job hours with the matching complete-life burden per hour; never multiply hours by the fraction again. Purchased services use only actual complete physical tasks whose real contract defines Item(s), with original actual attribution; hours, days and prices cannot become event counts. atomic_child_intensity = independent_physical_quantity / C, where C is unique complete finally accepted repair contracts in Item(s), never court counts or areas under the original acceptance rule; C=0 blocks normalization. Non-exchange parent role ledgers and original CP operands retain their stock, transfer, closure and ownership functions, without adding a second exchange or changing the method. | atomic_flow_row_id; independent_physical_quantity; exchange_property; exchange_unit; C; cp_prep_materials; cp_prep_operations; cp_prep_residuals; cp_finish_materials; cp_finish_operations; cp_finish_residuals | atomic_child_intensity |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_gate | all exchanges | Finalize each actual material/provider/waste/substance identity and compatible support/property/unit before concrete dataset exchange creation. Expand each conditional umbrella into distinct actual identities. Reference candidate meaning is exact accepted repair, not generic wall paint/full court. | Actual supplier/SDS/provider and custody/substance data; verified detail and support chain |
| host_scope | host and accepted service | Actual dense compatible host must qualify structurally and drain; existing acrylic does not prove sound underlying pavement. Record repair limits and actual current system compatibility. | Inspection/defect/drainage and substrate/coating compatibility records; current product instruction |
| timing_units | both nodes state/operations | Retain actual units, specified tolerances and source for temperature/time/geometry/power/test attributes. Weather, drying and cure are measured event data; manufacturer example settings apply only to actual selected product. | Dated actual weather/coat/cure/line/test logs with current criteria |
| completeness | all resources and exits | Reconcile receipts/issues/stock/true returns, wet/dry film, captured wastewater, actual species and waste custody; disclose any unreconciled difference. No presumed zero emissions, mandatory chemical recipe or missing actual local repairs. Record gross fuel input and reconcile actual burned activity separately from usable outward returns/transfers, retained stock, unburned waste and actual unrecovered release; incident spill totals must not duplicate recovered waste or environmental releases; route all exits by real custody/substance and do not treat unburned fuel as combustion activity. | Node ledgers, scale/meter uncertainty, actual species/capture and waste/return tickets |
| period_asset | shared services and assets | Enumerate full campaign and all relevant asset lifecycle/reporting periods; link replacement/termination and all consumers. Justify causal shares, provider exclusions and carried stock; missing justified complete-life coverage or denominator blocks finalization; completed life uses observed history and still-in-service life uses justified labelled prospective scenarios, with denominator/source, uncertainty/sensitivity and update triggers. | Asset and provider coverage ledger; period and event IDs; complete-life share sums |
| range_evidence | every inventory row | Numerical guardrails require independent compatible evidence by actual product/state/route/denominator. Current collection requests are explicit missing evidence, not a generic bound. Derive future empirical ranges from separate reviewed comparable campaigns and disclose sample/timing/uncertainty; do not validate a job with its own maximum. | Actual comparable independent records and uncertainty review; product-specific sources; explicit per-card Range evidence need |
| atomic_prep_cleaners | prepare_host; cp_prep_materials | Former prep_cleaners is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Conditional requirement for each actual compatible detergent/biocide product, strength and supply state; expand separate concrete exchanges for different products, never sum heterogeneous chemical identities. Maintenance bleach/TSP recipes are not general preparation instructions. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_prep_materials; actual_child_register; parent_ledger_id |
| atomic_prep_repairs | prepare_host; cp_prep_materials | Former prep_repairs is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Conditional separate exchange for every actual crack/patch/binder/filler ingredient at supplied state. Confirm compatibility and nonstructural repair limit; cement/sand added to a selected binder are separate identities, not inferred from every acrylic repair. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_prep_materials; actual_child_register; parent_ledger_id |
| atomic_prep_consumables | prepare_host; cp_prep_materials | Former prep_consumables is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Conditional individual purchased absorbents, temporary protection/containment and disposable cleaning articles; expand by actual identity. Supplier-included packaging is already within material supply, not a second upstream purchase. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_prep_materials; actual_child_register; parent_ledger_id |
| atomic_prep_assets | prepare_host; cp_prep_operations | Former prep_assets is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Individual washer, pump, mixer and tools used in preparation; each asset service keeps native use hours or documented own physical driver. Include actual complete-life production, maintenance/replacements and end-of-life share across prepare_host, finish_surface and other jobs/periods. Provider coverage must be explicit. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_prep_operations; actual_child_register; parent_ledger_id |
| atomic_prep_abstraction | prepare_host; cp_prep_materials | Former prep_abstraction is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Only actual direct withdrawal from identified source/compartment. Exclude purchased water and internal recirculation; use distinct source identities for different abstractions. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_prep_materials; actual_child_register; parent_ledger_id |
| atomic_prep_returns | prepare_host; cp_prep_residuals | Former prep_returns is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Conditional individual usable repair/cleaner/consumable products that actually leave this foreground custody for supplier or another job. Closing stock retained on site is not an output. Gross input remains recorded; no netting then exporting the same return again. Include actual usable unconsumed fuel outward returns/transfers by grade and lot; distinguish internal tank transfer and carried closing fuel stock. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_prep_residuals; actual_child_register; parent_ledger_id |
| atomic_prep_removed_solids | prepare_host; cp_prep_residuals | Former prep_removed_solids is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Separate actual scraped loose coating, dirt/debris and failed patch material by composition and waste classification/destination. Retained sound coating/host is starting stock, not incoming new material or waste. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_prep_residuals; actual_child_register; parent_ledger_id |
| atomic_prep_used_articles | prepare_host; cp_prep_residuals | Former prep_used_articles is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Separate each actual container, absorbent and containment/cleaning article by material and contamination. Reusable articles and supplier-owned packaging returned as products use custody records; packaging embedded upstream is not purchased again. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_prep_residuals; actual_child_register; parent_ledger_id |
| atomic_prep_fuel_wastes | prepare_host; cp_prep_residuals | Former prep_fuel_wastes is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Conditional separate actual off-spec/unburned fuel, recovered free spill liquid and fuel-contaminated cleanup mixture sent to a waste receiver. Identify grade/composition and keep mixture mass distinct from its contained fuel. Usable outward fuel is a product return; actual uncontrolled substance releases belong to the elementary release row. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_prep_residuals; actual_child_register; parent_ledger_id |
| atomic_prep_releases | prepare_host; cp_prep_residuals | Former prep_releases is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Conditional zero, one or multiple actual emissions by substance and receiving air/water/soil compartment, including engine exhaust, dust fraction and uncaptured rinse species where applicable. Expand distinct identities; broad VOC, PM and wastewater are not concrete elementary substances. Report the resulting modelled/derived species amount as calculated from collection; preserve direct monitoring results and whether a factor was used. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_prep_residuals; actual_child_register; parent_ledger_id |
| atomic_finish_recipe_additions | finish_surface; cp_finish_materials | Former finish_recipe_additions is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Conditional zero/one/multiple distinct ingredients only when actual selected resurfacer or coating instruction requires addition. Expand each actual sand, water or other ingredient independently with supply state and role; never add dilution water to Neutral Ready-Mix CMT68 or charge factory-included filler/water twice. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_finish_materials; actual_child_register; parent_ledger_id |
| atomic_finish_auxiliaries | finish_surface; cp_finish_materials | Former finish_auxiliaries is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Conditional distinct actual masking tape/protection/cleaning articles or approved line primer by supplied identity; expand separate exchanges, preserve reusable articles under asset ledger. No unrelated topcoat or adhesion promoter inferred automatically. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_finish_materials; actual_child_register; parent_ledger_id |
| atomic_finish_assets | finish_surface; cp_finish_operations | Former finish_assets is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Individual mixers, paddles, squeegees and line equipment with actual native service driver. Asset complete-life ledger links preparation/finishing, other contracts and periods, production, maintenance/replacement/termination and end-of-life once; provider-inclusive coverage or uncovered capital share explicitly recorded. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_finish_operations; actual_child_register; parent_ledger_id |
| atomic_finish_abstraction | finish_surface; cp_finish_materials | Former finish_abstraction is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Only actual fresh direct withdrawal from an identified source for tool/changeover cleaning or permitted separate ingredient role. Not purchased water or recirculation; no unapproved dilution of Neutral Ready-Mix. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_finish_materials; actual_child_register; parent_ledger_id |
| atomic_finish_returns | finish_surface; cp_finish_residuals | Former finish_returns is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Individual usable coating/tint/line/auxiliary lots actually exported to supplier or another job with destination and carried burden. Retained closing stock remains an internal stock term; actual waste does not become a product return by accounting choice. Include actual usable unconsumed fuel outward returns/transfers by grade and lot; distinguish internal tank transfer and carried closing fuel stock. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_finish_residuals; actual_child_register; parent_ledger_id |
| atomic_finish_coating_wastes | finish_surface; cp_finish_residuals | Former finish_coating_wastes is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Actual surplus unusable coating, tint, line paint and scraped recoat rejects segregated by identity/composition, wet/dry state and treatment destination. Material retained as accepted dry film remains on the host; failed areas are reworked, not accepted extra service. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_finish_residuals; actual_child_register; parent_ledger_id |
| atomic_finish_spent_articles | finish_surface; cp_finish_residuals | Former finish_spent_articles is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Separate containers, tape, protective sheets and cleaning articles by material/contamination/destination. Supplier-included packaging upstream burden counted once; reusable returns/remaining stock not classified as waste without evidence. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_finish_residuals; actual_child_register; parent_ledger_id |
| atomic_finish_fuel_wastes | finish_surface; cp_finish_residuals | Former finish_fuel_wastes is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Conditional separate actual off-spec/unburned fuel, recovered free spill liquid and fuel-contaminated cleanup mixture sent to a waste receiver. Identify grade/composition and keep mixture mass distinct from its contained fuel. Usable outward fuel is a product return; actual uncontrolled substance releases belong to the elementary release row. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_finish_residuals; actual_child_register; parent_ledger_id |
| atomic_finish_releases | finish_surface; cp_finish_residuals | Former finish_releases is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Conditional actual evaporation/emissions/discharge by identified substance and receiving medium from product SDS/composition and measured/modelled events. Do not call all wet coating water a pollutant, use generic VOC or sum unidentified emissions. Curing water and actual species are distinguished. Report the resulting modelled/derived species amount as calculated from collection; preserve direct monitoring results and whether a factor was used. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_finish_residuals; actual_child_register; parent_ledger_id |
| atomic_legacy_role_mapping | prepare_host; finish_surface | Legacy roles are non-exchange stock, activity, fate or closure keys in the original CP. Independent child exchanges carry quantities; atomic_ requirements retain mandatory remaining-roster refinement and finalization blocks. Original raw fields, helpers and native-unit operands retain their responsibilities and reconcile by child identity and compatible unit, never adding parent totals or unlike units. Source-table Applies-to migration: prep_cleaners => prep_cleaners_detergent, prep_cleaners_biocide, atomic_prep_cleaners; prep_repairs => prep_repairs_patch, prep_repairs_binder, prep_repairs_filler, prep_repairs_cement, prep_repairs_sand, atomic_prep_repairs; prep_consumables => prep_consumables_absorbent, prep_consumables_protection, prep_consumables_containment, prep_consumables_cleaning, atomic_prep_consumables; prep_assets => prep_assets_washer, prep_assets_pump, prep_assets_mixer, prep_assets_tool, atomic_prep_assets; prep_abstraction => atomic_prep_abstraction; prep_returns => prep_returns_prep_cleaners_detergent, prep_returns_prep_cleaners_biocide, prep_returns_prep_repairs_patch, prep_returns_prep_repairs_binder, prep_returns_prep_repairs_filler, prep_returns_prep_repairs_cement, prep_returns_prep_repairs_sand, prep_returns_prep_consumables_absorbent, prep_returns_prep_consumables_protection, prep_returns_prep_consumables_containment, prep_returns_prep_consumables_cleaning, prep_returns_prep_fuel_prep_fuel, atomic_prep_returns; prep_removed_solids => prep_removed_solids_coating, prep_removed_solids_debris, prep_removed_solids_patch, atomic_prep_removed_solids; prep_used_articles => prep_used_articles_container, prep_used_articles_absorbent, prep_used_articles_containment, prep_used_articles_cleaning, atomic_prep_used_articles; prep_fuel_wastes => prep_fuel_wastes_fuel, prep_fuel_wastes_spill_liquid, prep_fuel_wastes_cleanup_mixture, atomic_prep_fuel_wastes; prep_releases => atomic_prep_releases; finish_recipe_additions => finish_recipe_additions_sand, finish_recipe_additions_water, atomic_finish_recipe_additions; finish_auxiliaries => finish_auxiliaries_tape, finish_auxiliaries_protection, finish_auxiliaries_cleaning, finish_auxiliaries_primer, atomic_finish_auxiliaries; finish_assets => finish_assets_mixer, finish_assets_paddle, finish_assets_squeegee, finish_assets_line_equipment, atomic_finish_assets; finish_abstraction => atomic_finish_abstraction; finish_returns => finish_returns_finish_surfacer_finish_surfacer, finish_returns_finish_colour_finish_colour, finish_returns_finish_tint_finish_tint, finish_returns_finish_line_paint_finish_line_paint, finish_returns_finish_recipe_additions_sand, finish_returns_finish_recipe_additions_water, finish_returns_finish_auxiliaries_tape, finish_returns_finish_auxiliaries_protection, finish_returns_finish_auxiliaries_cleaning, finish_returns_finish_auxiliaries_primer, finish_returns_finish_fuel_finish_fuel, atomic_finish_returns; finish_coating_wastes => finish_coating_wastes_coating, finish_coating_wastes_tint, finish_coating_wastes_line_paint, finish_coating_wastes_removed_film, atomic_finish_coating_wastes; finish_spent_articles => finish_spent_articles_container, finish_spent_articles_tape, finish_spent_articles_sheet, finish_spent_articles_cleaning, atomic_finish_spent_articles; finish_fuel_wastes => finish_fuel_wastes_fuel, finish_fuel_wastes_spill_liquid, finish_fuel_wastes_cleanup_mixture, atomic_finish_fuel_wastes; finish_releases => atomic_finish_releases | original_protocols; actual_child_register; parent_ledger_id |
| atomic_child_routing | prepare_host; finish_surface | The following routes each child to its original role, node, unique unit and method CP. Independently apply that original role measurement, stock, source/fate, rework, share, conversion and normalization method to each actual identity/state child. Retain the original helper/selector role parameter as legacy_parent_role, but supply quantity operands from this child independent records; ROW_UNIT(child_row_id) is the explicit unit below. Reconcile stocks/transfers only within the same identity/state and compatible native unit, grouping different materials, media, states and units separately. Parent totals are non-exchange diagnostics, never copied as child operands or summed across unlike units. Unsupported original-helper applicability or missing actual conversion, denominator or evidence blocks finalization; field records cannot choose a new method. Original role-named formula operands remain ledger names rather than duplicate exchanges. A cross-unit legacy role executes by this mapping and actual child unit instead of inheriting a wrong fixed unit. Routing: prep_cleaners_detergent => role=prep_cleaners, node=prepare_host, property=Mass, unit=kg, CP=cp_prep_materials; prep_cleaners_biocide => role=prep_cleaners, node=prepare_host, property=Mass, unit=kg, CP=cp_prep_materials; prep_repairs_patch => role=prep_repairs, node=prepare_host, property=Mass, unit=kg, CP=cp_prep_materials; prep_repairs_binder => role=prep_repairs, node=prepare_host, property=Mass, unit=kg, CP=cp_prep_materials; prep_repairs_filler => role=prep_repairs, node=prepare_host, property=Mass, unit=kg, CP=cp_prep_materials; prep_repairs_cement => role=prep_repairs, node=prepare_host, property=Mass, unit=kg, CP=cp_prep_materials; prep_repairs_sand => role=prep_repairs, node=prepare_host, property=Mass, unit=kg, CP=cp_prep_materials; prep_consumables_absorbent => role=prep_consumables, node=prepare_host, property=Mass, unit=kg, CP=cp_prep_materials; prep_consumables_protection => role=prep_consumables, node=prepare_host, property=Mass, unit=kg, CP=cp_prep_materials; prep_consumables_containment => role=prep_consumables, node=prepare_host, property=Mass, unit=kg, CP=cp_prep_materials; prep_consumables_cleaning => role=prep_consumables, node=prepare_host, property=Mass, unit=kg, CP=cp_prep_materials; prep_assets_washer => role=prep_assets, node=prepare_host, property=Duration, unit=h, CP=cp_prep_operations; prep_assets_pump => role=prep_assets, node=prepare_host, property=Duration, unit=h, CP=cp_prep_operations; prep_assets_mixer => role=prep_assets, node=prepare_host, property=Duration, unit=h, CP=cp_prep_operations; prep_assets_tool => role=prep_assets, node=prepare_host, property=Duration, unit=h, CP=cp_prep_operations; prep_returns_prep_cleaners_detergent => role=prep_returns, node=prepare_host, property=Mass, unit=kg, CP=cp_prep_residuals; prep_returns_prep_cleaners_biocide => role=prep_returns, node=prepare_host, property=Mass, unit=kg, CP=cp_prep_residuals; prep_returns_prep_repairs_patch => role=prep_returns, node=prepare_host, property=Mass, unit=kg, CP=cp_prep_residuals; prep_returns_prep_repairs_binder => role=prep_returns, node=prepare_host, property=Mass, unit=kg, CP=cp_prep_residuals; prep_returns_prep_repairs_filler => role=prep_returns, node=prepare_host, property=Mass, unit=kg, CP=cp_prep_residuals; prep_returns_prep_repairs_cement => role=prep_returns, node=prepare_host, property=Mass, unit=kg, CP=cp_prep_residuals; prep_returns_prep_repairs_sand => role=prep_returns, node=prepare_host, property=Mass, unit=kg, CP=cp_prep_residuals; prep_returns_prep_consumables_absorbent => role=prep_returns, node=prepare_host, property=Mass, unit=kg, CP=cp_prep_residuals; prep_returns_prep_consumables_protection => role=prep_returns, node=prepare_host, property=Mass, unit=kg, CP=cp_prep_residuals; prep_returns_prep_consumables_containment => role=prep_returns, node=prepare_host, property=Mass, unit=kg, CP=cp_prep_residuals; prep_returns_prep_consumables_cleaning => role=prep_returns, node=prepare_host, property=Mass, unit=kg, CP=cp_prep_residuals; prep_returns_prep_fuel_prep_fuel => role=prep_returns, node=prepare_host, property=Mass, unit=kg, CP=cp_prep_residuals; prep_removed_solids_coating => role=prep_removed_solids, node=prepare_host, property=Mass, unit=kg, CP=cp_prep_residuals; prep_removed_solids_debris => role=prep_removed_solids, node=prepare_host, property=Mass, unit=kg, CP=cp_prep_residuals; prep_removed_solids_patch => role=prep_removed_solids, node=prepare_host, property=Mass, unit=kg, CP=cp_prep_residuals; prep_used_articles_container => role=prep_used_articles, node=prepare_host, property=Mass, unit=kg, CP=cp_prep_residuals; prep_used_articles_absorbent => role=prep_used_articles, node=prepare_host, property=Mass, unit=kg, CP=cp_prep_residuals; prep_used_articles_containment => role=prep_used_articles, node=prepare_host, property=Mass, unit=kg, CP=cp_prep_residuals; prep_used_articles_cleaning => role=prep_used_articles, node=prepare_host, property=Mass, unit=kg, CP=cp_prep_residuals; prep_fuel_wastes_fuel => role=prep_fuel_wastes, node=prepare_host, property=Mass, unit=kg, CP=cp_prep_residuals; prep_fuel_wastes_spill_liquid => role=prep_fuel_wastes, node=prepare_host, property=Mass, unit=kg, CP=cp_prep_residuals; prep_fuel_wastes_cleanup_mixture => role=prep_fuel_wastes, node=prepare_host, property=Mass, unit=kg, CP=cp_prep_residuals; finish_recipe_additions_sand => role=finish_recipe_additions, node=finish_surface, property=Mass, unit=kg, CP=cp_finish_materials; finish_recipe_additions_water => role=finish_recipe_additions, node=finish_surface, property=Mass, unit=kg, CP=cp_finish_materials; finish_auxiliaries_tape => role=finish_auxiliaries, node=finish_surface, property=Mass, unit=kg, CP=cp_finish_materials; finish_auxiliaries_protection => role=finish_auxiliaries, node=finish_surface, property=Mass, unit=kg, CP=cp_finish_materials; finish_auxiliaries_cleaning => role=finish_auxiliaries, node=finish_surface, property=Mass, unit=kg, CP=cp_finish_materials; finish_auxiliaries_primer => role=finish_auxiliaries, node=finish_surface, property=Mass, unit=kg, CP=cp_finish_materials; finish_assets_mixer => role=finish_assets, node=finish_surface, property=Duration, unit=h, CP=cp_finish_operations; finish_assets_paddle => role=finish_assets, node=finish_surface, property=Duration, unit=h, CP=cp_finish_operations; finish_assets_squeegee => role=finish_assets, node=finish_surface, property=Duration, unit=h, CP=cp_finish_operations; finish_assets_line_equipment => role=finish_assets, node=finish_surface, property=Duration, unit=h, CP=cp_finish_operations; finish_returns_finish_surfacer_finish_surfacer => role=finish_returns, node=finish_surface, property=Mass, unit=kg, CP=cp_finish_residuals; finish_returns_finish_colour_finish_colour => role=finish_returns, node=finish_surface, property=Mass, unit=kg, CP=cp_finish_residuals; finish_returns_finish_tint_finish_tint => role=finish_returns, node=finish_surface, property=Mass, unit=kg, CP=cp_finish_residuals; finish_returns_finish_line_paint_finish_line_paint => role=finish_returns, node=finish_surface, property=Mass, unit=kg, CP=cp_finish_residuals; finish_returns_finish_recipe_additions_sand => role=finish_returns, node=finish_surface, property=Mass, unit=kg, CP=cp_finish_residuals; finish_returns_finish_recipe_additions_water => role=finish_returns, node=finish_surface, property=Mass, unit=kg, CP=cp_finish_residuals; finish_returns_finish_auxiliaries_tape => role=finish_returns, node=finish_surface, property=Mass, unit=kg, CP=cp_finish_residuals; finish_returns_finish_auxiliaries_protection => role=finish_returns, node=finish_surface, property=Mass, unit=kg, CP=cp_finish_residuals; finish_returns_finish_auxiliaries_cleaning => role=finish_returns, node=finish_surface, property=Mass, unit=kg, CP=cp_finish_residuals; finish_returns_finish_auxiliaries_primer => role=finish_returns, node=finish_surface, property=Mass, unit=kg, CP=cp_finish_residuals; finish_returns_finish_fuel_finish_fuel => role=finish_returns, node=finish_surface, property=Mass, unit=kg, CP=cp_finish_residuals; finish_coating_wastes_coating => role=finish_coating_wastes, node=finish_surface, property=Mass, unit=kg, CP=cp_finish_residuals; finish_coating_wastes_tint => role=finish_coating_wastes, node=finish_surface, property=Mass, unit=kg, CP=cp_finish_residuals; finish_coating_wastes_line_paint => role=finish_coating_wastes, node=finish_surface, property=Mass, unit=kg, CP=cp_finish_residuals; finish_coating_wastes_removed_film => role=finish_coating_wastes, node=finish_surface, property=Mass, unit=kg, CP=cp_finish_residuals; finish_spent_articles_container => role=finish_spent_articles, node=finish_surface, property=Mass, unit=kg, CP=cp_finish_residuals; finish_spent_articles_tape => role=finish_spent_articles, node=finish_surface, property=Mass, unit=kg, CP=cp_finish_residuals; finish_spent_articles_sheet => role=finish_spent_articles, node=finish_surface, property=Mass, unit=kg, CP=cp_finish_residuals; finish_spent_articles_cleaning => role=finish_spent_articles, node=finish_surface, property=Mass, unit=kg, CP=cp_finish_residuals; finish_fuel_wastes_fuel => role=finish_fuel_wastes, node=finish_surface, property=Mass, unit=kg, CP=cp_finish_residuals; finish_fuel_wastes_spill_liquid => role=finish_fuel_wastes, node=finish_surface, property=Mass, unit=kg, CP=cp_finish_residuals; finish_fuel_wastes_cleanup_mixture => role=finish_fuel_wastes, node=finish_surface, property=Mass, unit=kg, CP=cp_finish_residuals | actual_child_register; legacy_parent_role; atomic_flow_row_id; independent_physical_quantity; exchange_unit; original_protocols |
| freight_single_unit | prep_logistics; finish_logistics | prep_logistics and finish_logistics use fixed Mass*distance/kg*km. Preserve original CP actual tonnes and km, attribute actual legs, then convert t*km to kg*km by multiplying by 1000 and normalize once by original C contract reference. The original t.km ticket notation is not another exchange. Retain actual empty-leg ownership and supplier-included exclusions without inventing empty cargo. | original_logistics_records; load_tonnes; distance_km; C |
| atomic_range_noninheritance | prep_cleaners_detergent; prep_cleaners_biocide; prep_repairs_patch; prep_repairs_binder; prep_repairs_filler; prep_repairs_cement; prep_repairs_sand; prep_consumables_absorbent; prep_consumables_protection; prep_consumables_containment; prep_consumables_cleaning; prep_assets_washer; prep_assets_pump; prep_assets_mixer; prep_assets_tool; prep_returns_prep_cleaners_detergent; prep_returns_prep_cleaners_biocide; prep_returns_prep_repairs_patch; prep_returns_prep_repairs_binder; prep_returns_prep_repairs_filler; prep_returns_prep_repairs_cement; prep_returns_prep_repairs_sand; prep_returns_prep_consumables_absorbent; prep_returns_prep_consumables_protection; prep_returns_prep_consumables_containment; prep_returns_prep_consumables_cleaning; prep_returns_prep_fuel_prep_fuel; prep_removed_solids_coating; prep_removed_solids_debris; prep_removed_solids_patch; prep_used_articles_container; prep_used_articles_absorbent; prep_used_articles_containment; prep_used_articles_cleaning; prep_fuel_wastes_fuel; prep_fuel_wastes_spill_liquid; prep_fuel_wastes_cleanup_mixture; finish_recipe_additions_sand; finish_recipe_additions_water; finish_auxiliaries_tape; finish_auxiliaries_protection; finish_auxiliaries_cleaning; finish_auxiliaries_primer; finish_assets_mixer; finish_assets_paddle; finish_assets_squeegee; finish_assets_line_equipment; finish_returns_finish_surfacer_finish_surfacer; finish_returns_finish_colour_finish_colour; finish_returns_finish_tint_finish_tint; finish_returns_finish_line_paint_finish_line_paint; finish_returns_finish_recipe_additions_sand; finish_returns_finish_recipe_additions_water; finish_returns_finish_auxiliaries_tape; finish_returns_finish_auxiliaries_protection; finish_returns_finish_auxiliaries_cleaning; finish_returns_finish_auxiliaries_primer; finish_returns_finish_fuel_finish_fuel; finish_coating_wastes_coating; finish_coating_wastes_tint; finish_coating_wastes_line_paint; finish_coating_wastes_removed_film; finish_spent_articles_container; finish_spent_articles_tape; finish_spent_articles_sheet; finish_spent_articles_cleaning; finish_fuel_wastes_fuel; finish_fuel_wastes_spill_liquid; finish_fuel_wastes_cleanup_mixture | Retired parent numerical ranges, per-exchange screening instructions and rationales are retained only in implementation audit, applying to neither new child exchanges nor parent-family sums and never proportionally allocated. Each new child has independent evidence needs for actual quantity, identity/state, measurement/conversion, uncertainty and comparable independent observations. Add its own interval only after review confirms applicability to this independent object; never validate a batch with its own maximum. Original ranges of unchanged semantically compatible atomic objects retain their original status. | independent_child_measurement; independent_range_evidence; implementation_range_audit |
| atomic_paired_quantity_provenance | actual internal child source and recipient transfers | Internal I=F is a reconciliation condition for the same actual material/SKU, state, event, custody boundary and gate, never an assignment formula. Each child retains its own actual dispatch quantity and receipt/custody evidence. The same signed custody measurement may be traceably reused without inventing another weighing. Never copy a family total into each child, overwrite a real receipt or force unknown quantities equal. Preserve discrepancies with original values/units, measurement uncertainty, actual transfer loss, state change and responsible-owner evidence; unresolved differences block completion. Internal quantities remain unnormalized physical amounts, divided by the original reference denominator only at each card final step; parent-role sums are QA only. | source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| accepted_scope | accepted_recoating_service | Require qualified dense draining compatible host and actual nonstructural repair limits; final output is one identified contract after accepted surface/texture/colour, actual coat/cure conditions, tennis lines, defect closure, signed handover/opening permission. No new court, universal ITF class, guaranteed porosity or service-life-equivalence assertion. | sportmaster-maintenance; sportmaster-neutral-ready-mix-202406 |
| recipe_identity | finish_colour; finish_tint; finish_recipe_additions_sand; finish_recipe_additions_water; atomic_finish_recipe_additions | Actual supply bill and current instructions must distinguish untinted Neutral Ready-Mix plus actual approved tint without added water from factory-tinted ready-mix or other product-specific concentrate/surfacer routes. Confirm exact product/lot/use and actual additions; tool cleaning water stays distinct. | sportmaster-neutral-ready-mix-202406; sportmaster-tennis-surfaces |
| transfer_rework | prepared_host_output; prepared_host_input; all reject paths | Require identical physical area/state and transfer ownership, with no second upstream host production. Failed host and failed finish events are linked to owning node; original/corrective burdens remain, waste exits close, unresolved rejected area cannot enter accepted output. |  |
| gross_balance | all material and residual rows | Require lot/state gross receipts, actual use/application, true outward usable returns, waste and closing-stock closure. Verify wet/dry mass and actual density conversions, captured-water/solids partition, actual substance and receiving medium. Supplier-included packaging/logistics/treatment is counted once. Fuel input is gross; separate derived burning excludes actual unburned returns, closing stock, waste and unrecovered releases without subtracting total incident spill a second time; all such exits have real product/waste/elementary ownership. Species calculations preserve activity/factor units, applicability, capture basis and uncertainty without double correction. |  |
| mode_period_complete | both node campaigns and assets | Require actual job/court/tint-batch/coat/weather/changeover indexing and all event owners, complete-life asset consumers/periods/production/maintenance/replacement/termination/end-of-life shares, provider coverage and remaining-life/stock burden. Share sums close and no duplicate event/period charging; missing justified complete-life coverage or denominator blocks finalization; completed life is observed, in-service remaining life/replacement/termination/end-of-life may be justified labelled forecasts with source, uncertainty/sensitivity and actual-event updates. |  |
| identity_and_ranges | all inventory rows | Require actual UUID detail and compatible support/property/unit confirmation for final concrete exchanges, and justified source-backed or independent empirical Range where available. Explicit current evidence needs remain gaps and are not bounds. Preserve native kWh/h/t.km and honest unresolved support; broad nearest matches and count conversions are invalid. |  |
| source_and_translation | complete foreground package | Require English/Chinese equivalence for identifiers, reference, physical roles, custody, quantities, measurement/CP/calculation/quality rules and Range decisions, with actual source/instruction versions and generated deterministic projection. |  |
| close_atomic_prep_cleaners | prepare_host; cp_prep_materials | Block final foreground completion until every actual object in atomic_prep_cleaners is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_prep_repairs | prepare_host; cp_prep_materials | Block final foreground completion until every actual object in atomic_prep_repairs is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_prep_consumables | prepare_host; cp_prep_materials | Block final foreground completion until every actual object in atomic_prep_consumables is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_prep_assets | prepare_host; cp_prep_operations | Block final foreground completion until every actual object in atomic_prep_assets is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_prep_abstraction | prepare_host; cp_prep_materials | Block final foreground completion until every actual object in atomic_prep_abstraction is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_prep_returns | prepare_host; cp_prep_residuals | Block final foreground completion until every actual object in atomic_prep_returns is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_prep_removed_solids | prepare_host; cp_prep_residuals | Block final foreground completion until every actual object in atomic_prep_removed_solids is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_prep_used_articles | prepare_host; cp_prep_residuals | Block final foreground completion until every actual object in atomic_prep_used_articles is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_prep_fuel_wastes | prepare_host; cp_prep_residuals | Block final foreground completion until every actual object in atomic_prep_fuel_wastes is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_prep_releases | prepare_host; cp_prep_residuals | Block final foreground completion until every actual object in atomic_prep_releases is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_finish_recipe_additions | finish_surface; cp_finish_materials | Block final foreground completion until every actual object in atomic_finish_recipe_additions is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_finish_auxiliaries | finish_surface; cp_finish_materials | Block final foreground completion until every actual object in atomic_finish_auxiliaries is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_finish_assets | finish_surface; cp_finish_operations | Block final foreground completion until every actual object in atomic_finish_assets is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_finish_abstraction | finish_surface; cp_finish_materials | Block final foreground completion until every actual object in atomic_finish_abstraction is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_finish_returns | finish_surface; cp_finish_residuals | Block final foreground completion until every actual object in atomic_finish_returns is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_finish_coating_wastes | finish_surface; cp_finish_residuals | Block final foreground completion until every actual object in atomic_finish_coating_wastes is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_finish_spent_articles | finish_surface; cp_finish_residuals | Block final foreground completion until every actual object in atomic_finish_spent_articles is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_finish_fuel_wastes | finish_surface; cp_finish_residuals | Block final foreground completion until every actual object in atomic_finish_fuel_wastes is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_finish_releases | finish_surface; cp_finish_residuals | Block final foreground completion until every actual object in atomic_finish_releases is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| atomic_pair_provenance_complete | actual internal child source and recipient transfers | Verify actual source/receipt evidence, original physical quantities/units and ownership for the same material/state/event/gate. Traceable reuse of the same signed measurement is allowed; copied parent totals, overwritten receipts and forced unknown equality are prohibited. Unexplained differences without uncertainty, actual loss or state-transition responsibility evidence block completion; verify exactly one normalization per card. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Site-specific foreground data package for one accepted incremental recoating repair; process/lifecyclemodel are downstream projections. |
| downstream_use | secondary_dataset; background_dataset only with transparent compatible scope and actual quality limitations |
| allowed_use | Declared dense-host outdoor acrylic tennis hardcourt repair at the measured qualified system, site and handover gate; use measured geometry and physical resources for any explicit comparison. |
| excluded_use | New full-court/base construction; structural/drainage repair; porous permeability-preserving spray; concrete etching; cushion systems; generic paint application; indoor facility; future play/maintenance or service-life-equivalent court claims. |
| required_metadata | Contract/court/location/time and treated/line geometry; host qualification/limits; actual product/system/supply states and instruction versions; lot/tint/coat/weather/cure/line/acceptance records; actual providers/upstream coverage; waste/release custody; asset complete-life periods and drivers; reference/stock/transfer ownership. |
| required_quality_disclosure | Actual identity/support gaps, per-card Range evidence needs, measured uncertainty and physical balances, missing species/capture/coverage, rework and open defects, provider inclusions and asset remaining-life/stock burdens. |
| update_trigger | Change of host/scope/product recipe/instruction, supply state, geometry/acceptance, capture or species evidence, equipment/provider/complete-life attribution, actual recipe/coat weather route, or reviewed comparable quantitative evidence. |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | United Nations, CPC Version3.0 Explanatory Notes 30June2025, printed288; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Outdoor tennis-ground repair/restoration classification scope; indoor exclusion; not a recipe or quantitative source |
| sportmaster-tennis-surfaces | literature | SportMaster, Tennis Court Surfaces, current manufacturer product page; https://www.sportmaster.net/tennis-court-surfaces/ | Compatible asphalt/prior acrylic systems; distinction among ready-mix, concentrate, tint, resurfacer, repair and tennis-line supplied products; excludes cushion route |
| sportmaster-maintenance | literature | SportMaster, Tennis Court Maintenance, current manufacturer guidance; https://www.sportmaster.net/maintenance/ | Condition/drainage inspection, cleaning damage risks and specialist repair/resurfacing context; maintenance chemical ratios and cycle are not prescribed preparation or service-life values |
| sportmaster-neutral-ready-mix-202406 | literature | ThorWorks/SportMaster, Neutral Ready-Mix CMT68 Technical Data Sheet, revised06/24; https://www.sportmaster.net/pdfs/specs/NeutralReadyMix.pdf | Clean/flush sound preparation, compatible dense underlayment, actual tint/no-added-water distinction, squeegee application and intercoat dry/cure/weather gate. Product-specific settings/volume coverage are not generic kg/m2 or universal acceptance conditions |
