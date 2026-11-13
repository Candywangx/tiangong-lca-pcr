---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.wet-process-untrimmed-wood-softboard
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Wet-process untrimmed wood softboard at drying and conditioning gate

## 1. Scope and Applicability

This method covers one declared grade of uncoated, single-layer, low-density wood-fibre softboard made from received clean wood chips by hot-water softening, atmospheric refining, aqueous stock preparation, wet forming, vacuum/cold-roll dewatering, indirect drying and conditioning. Its product is the dried and conditioned board handed over to a downstream trimming/finishing process. The handoff must be a real measured material state with a receiver specification, quantity, moisture and inherited inventory; merely renaming an internal wet mat does not establish this boundary. EPA distinguishes the board dryer from finishing, and USDA describes cellulosic softboard drying before optional post-drying treatments. [epa-wet-fibreboard-2002; usda-wood-handbook-2021]

Use this route only when natural fibre bonding and separately received paraffin wax, native starch and aluminium sulfate sizing are documented, with each absent ingredient explicitly not applicable. Do not presume any recipe or dosage. Purchased whole sizing emulsions need their own identity and formulation model before inclusion. This scope uses purchased natural-gas-derived heat only, with net delivery through an indirect heat-transfer boundary; it excludes onsite combustion, steam injection and heat-generation equipment. Other fuel sources, mixed-source heat and other supply boundaries require a separately evidenced route and atomic utility identity before using this method. It excludes dry-process MDF, hot-consolidated hardboard/HDF, particleboard, non-wood fibreboard, resin-bonded or asphalt-treated board, facings/laminates, and post-handoff dry trimming, sanding, coating, packing and dispatch. A product sold after those operations needs its actual finishing inventory and its own reference state. [epa-wet-fibreboard-2002; usda-wood-handbook-2021]

CPC 3.0 separates MDF (31441), hardboard (31442), and other fibreboard (31449). This wet-laid wood softboard intermediate is a narrower subset of 31449; neither a classification label nor a broad flow name proves a particular grade, utility source, building performance or methodology approval. [un-cpc3-2025]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.wet-process-untrimmed-wood-softboard |
| classification_refs | CPC 3.0 31449 Other fibreboard; narrower |
| covered_products | Uncoated single-layer wet-laid low-density wood softboard, dried and conditioned before dry trimming/finishing |
| excluded_products | MDF; hardboard/HDF; particleboard; non-wood fibreboard; wet mats; resin-bonded/asphalt-treated/faced board; finished trimmed and packed board |
| representative_product | Declared wood-softboard grade transferred as dried and conditioned untrimmed board to a finishing receiver |
| production_route | Received wood chips → hot-water softening/atmospheric refining → stock preparation → wet forming/cold dewatering → indirect drying/conditioning |
| market_state | Measured manufacturing intermediate at the drying/conditioning handoff; no finished building-product or dispatch claim |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply dried and conditioned untrimmed wet-process wood softboard to its finishing receiver |
| How much | 1 kg net accepted dried and conditioned board at the declared handoff; denominator Q is newly accepted board including closing accepted intermediate stock once |
| How well | Declare grade, density/conditioning test, net moisture, thickness and actual area; meet the receiving finishing specification; no assumed thermal resistance, finished dimensions or strength class |
| How long or cycle | One manufacturing cohort through first acceptance at the drying/conditioning handoff; no assumed use life or finishing yield |
| reference_flow_link | board |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Dried and conditioned board `5677877c-d6cd-423a-a0de-1aa6420a3c4e` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | wood species and origin; low-density softboard grade and density test; wood-only furnish; single-layer/no facing; wet forming and cold dewatering; no hot hardboard consolidation; exact sizing ingredients/assays/hydration; measured net moisture/conditioning; untrimmed area/thickness; real drying-gate receiver and acceptance specification; purchased natural-gas heat boundary; chip solid/bulk volume protocol; cohort/stock/handoff records |

Qualifiers must accompany each concrete data package. The Tiangong identity denotes wet-process dried/conditioned board entering trimming/finishing; the specific softboard grade and untrimmed handoff must be evidenced by the producer and receiver. Its mass reference is not a claim that finishing has already occurred.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | board | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | cp_reference weighs net newly accepted board at the drying/conditioning gate. Q includes newly accepted closing stock once; exclude packaging, unreleased WIP/rejects and previously accepted returns. Normalize production exchanges per 1 kg reference flow using that same Q. |
| geometry | board | Mass; Volume; area | kg; m3; m2 | cp_reference measures untrimmed area A, thickness t and conditioned density rho on the same specimens/moisture basis as mass m; check m = A × t × rho. Area per reference kg = 1/(t × rho). Never use chip bulk density or downstream trimmed dimensions. |
| moisture | wood_chips; board; rejected_sized_board; captured_unsized_fibre; sludge | Mass | kg | cp_material records wet mass, water and dry solids: dry-basis u = water/dry solids; wet-basis w = water/wet total; u = w/(1-w), dry solids = wet total/(1+u). Separate wood and sizing solids; no fixed conversion moisture. |
| chip_volume | wood_chips | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | cp_material declares actual supplier solid/bulk volume and packing, density, temperature and moisture. Convert measured wet mass to volume only with matched measured wet density; upstream linkage remains incomplete until supplier m3 is compatible. |
| energy | electricity; heat | Energy; net delivered heat | MJ | cp_energy converts metered kWh using 3.6 MJ/kWh. Heat requires matched supply/return mass, temperature, pressure, fluid and enthalpy; supplier fuel heating value or gross steam energy cannot stand in for net delivered thermal energy. |
| transport | freight_chips | Mass times distance | t*km | cp_transport uses actual transported wet tonnes and each loaded km; 1 t*km = 1000 kg*km. Retain load/return convention and confirm provider boundaries; never invent density, payload or distance. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Delivered clean wood chips, with known origin, species, moisture, supplier gate and solid/bulk volume basis |
| starting_condition_role | foreground_gate_input |
| product_classification_scope | Wet-process low-density wood softboard at the drying/conditioning handoff, subset of CPC31449 |
| recursive_input_rule | Internal fibre/white-water recirculation stays in the physical ledger once; an externally received same-category board needs a separate verified identity and inherited provider rather than an invented recursive chain |
| upstream_dataset_requirement | Compatible forestry/residue-generation/chipping provider, electricity, sizing, water, purchased heat, actual transport and waste-treatment providers; identity alone never establishes their inventory vectors |
| disclosure | Actual site, period, starting condition, drying handoff, supplier/receiver, utility/control/treatment boundaries, loops, stock movements, losses and excluded finishing/use/end-of-life |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_stages | wet_board | Include chip receipt/storage, hot-water softening, atmospheric refining/screening, actual washing, formulation, wire laying, vacuum/cold dewatering, indirect drying/conditioning, handoff inspection and associated fibre/water recovery and emission control. Keep stage-specific raw balances within the integrated unit. | `epa-wet-fibreboard-2002`; `usda-wood-handbook-2021` |
| boundary_handoff | board | End at measured acceptance of dried/conditioned untrimmed board by the finishing receiver. Include its upstream manufacturing burdens once. Exclude later dry trimming/sanding/coating/packing/dispatch; a downstream model must carry this board input and add those measured operations and losses before claiming finished board. | `epa-wet-fibreboard-2002`; `usda-wood-handbook-2021` |
| boundary_utilities | wet_board | Purchased natural-gas-derived indirect heat is the only heat route covered and does not justify onsite fuel or boiler emissions. Other heat sources/mixes are outside this route until separately evidenced. Actual steam injection, combustion, additional chemical/refrigerant, external packaging or direct discharge requires a separately evidenced atomic exchange and scope review. Unlisted exchanges are not zero. | `epa-wet-fibreboard-2002` |
| boundary_providers | wet_board | Keep source chipping/preparation, transport, heat generation and external treatment in their actual providers without overlap. Carbon uptake carried in the chip provider is counted once. Wastewater transferred to treatment is a waste exchange, not an elementary release of the same water and pollutants. | |

Track stage states separately: chip receipt; hot-water softening/refining; screened stock and sizing; wet mat after cold dewatering; dry board; conditioned board accepted at handoff; fibre/water recovery. Every internal transfer preserves wet quantity, moisture, composition and inherited inventory vector at both ends. Do not invent a product sale or Q for each internal stage. EPA/USDA historical temperatures, times, moisture and recipe observations are not modern plant defaults. [epa-wet-fibreboard-2002; usda-wood-handbook-2021]

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| wet_board | Integrated wet-process untrimmed softboard production | required | Declared wood-only, cold-dewatered route with purchased natural-gas indirect heat only and a real drying/conditioning handoff | Receipt/refining/stock/forming/drying/conditioning/control; retain stage meters and physical states | board |

### Process: Integrated wet-process untrimmed softboard production (`wet_board`)

#### Inputs

##### Product flows

###### Wood Chip (`wood_chips`)

Received clean wood chips only. Retain source forest/residue status, species, preparation, supplier gate and measured moisture/volume. The broad identity does not prove supplier allocation, solid/bulk packing or a dry-mass conversion.

- Selected flow: Wood Chip `3fa2a6a7-224c-4d99-bd55-a214f0a83161`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Use cp_material and cp_stock to retain this atomic exchange gross quantity, unit, stage and origin. Reconcile with cohort and opening/closing raw, WIP and accepted-board stock; assign causally to the same newly accepted cohort and divide by Q from cp_reference (per 1 kg reference flow). Previously accepted returns never create Q; their services use the matched original accepted subset mass and inherited vector under allocation_stock, never this new-production denominator. Missing records are unknown, not zero; use not_applicable only with evidence of absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

###### Alternating current (`electricity`)

User-side grid-average electricity at 1–35 kV for refining, pumps, vacuum, dryer fans, conditioning and control. The selected CN identity is usable only with compatible geography/voltage and provider; other supplies need separately verified identities.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use cp_energy and cp_stock to retain this atomic exchange gross quantity, unit, stage and origin. Reconcile with cohort and opening/closing raw, WIP and accepted-board stock; assign causally to the same newly accepted cohort and divide by Q from cp_reference (per 1 kg reference flow). Previously accepted returns never create Q; their services use the matched original accepted subset mass and inherited vector under allocation_stock, never this new-production denominator. Missing records are unknown, not zero; use not_applicable only with evidence of absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

###### Process Water (`process_water`)

External make-up process water only; retain supplier quality and wet mass. Recovered white water, condensate returned inside the boundary and internal dilution loops are not repeated purchases.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_material and cp_stock to retain this atomic exchange gross quantity, unit, stage and origin. Reconcile with cohort and opening/closing raw, WIP and accepted-board stock; assign causally to the same newly accepted cohort and divide by Q from cp_reference (per 1 kg reference flow). Previously accepted returns never create Q; their services use the matched original accepted subset mass and inherited vector under allocation_stock, never this new-production denominator. Missing records are unknown, not zero; use not_applicable only with evidence of absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

###### Paraffin wax (`paraffin`)

Separately received neat petroleum paraffin used in the declared sizing formulation; record assay and actual retained/lost wax. Purchased whole wax emulsions are outside this ingredient-only formulation scope until separately modelled.

- Selected flow: Paraffin wax `17bff97f-179d-49d4-9e97-5128bd6020a6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_material and cp_stock to retain this atomic exchange gross quantity, unit, stage and origin. Reconcile with cohort and opening/closing raw, WIP and accepted-board stock; assign causally to the same newly accepted cohort and divide by Q from cp_reference (per 1 kg reference flow). Previously accepted returns never create Q; their services use the matched original accepted subset mass and inherited vector under allocation_stock, never this new-production denominator. Missing records are unknown, not zero; use not_applicable only with evidence of absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

###### Starch (`starch`)

Separately received unmodified native starch only where actually used; record botanical origin, grade, moisture and actual retention. Modified starch or resin adhesive is a different input and requires scope review.

- Selected flow: Starch `e5842f16-31b3-4ea4-b16a-f7b06beeb6c3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_material and cp_stock to retain this atomic exchange gross quantity, unit, stage and origin. Reconcile with cohort and opening/closing raw, WIP and accepted-board stock; assign causally to the same newly accepted cohort and divide by Q from cp_reference (per 1 kg reference flow). Previously accepted returns never create Q; their services use the matched original accepted subset mass and inherited vector under allocation_stock, never this new-production denominator. Missing records are unknown, not zero; use not_applicable only with evidence of absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

###### Aluminium sulfate, powder (`alum`)

Separately received aluminium sulfate powder precipitation aid where actually used; record hydration state, assay and any separately supplied dilution water. Do not infer a universal alum recipe or full solids retention.

- Selected flow: Aluminium sulfate, powder `1c9f77ea-7da1-42a6-a2ec-d2d4580913c7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_material and cp_stock to retain this atomic exchange gross quantity, unit, stage and origin. Reconcile with cohort and opening/closing raw, WIP and accepted-board stock; assign causally to the same newly accepted cohort and divide by Q from cp_reference (per 1 kg reference flow). Previously accepted returns never create Q; their services use the matched original accepted subset mass and inherited vector under allocation_stock, never this new-production denominator. Missing records are unknown, not zero; use not_applicable only with evidence of absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

###### Lubricating oil (`lubricant`)

Petroleum lubricating oil consumed by the included line; reconcile receipts, stocks and maintenance. Identify its actual grade; inventory amounts are not taken from the identity record heating value.

- Selected flow: Lubricating oil `66628f20-9d33-4997-bd6c-6357453fa268`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_material and cp_stock to retain this atomic exchange gross quantity, unit, stage and origin. Reconcile with cohort and opening/closing raw, WIP and accepted-board stock; assign causally to the same newly accepted cohort and divide by Q from cp_reference (per 1 kg reference flow). Previously accepted returns never create Q; their services use the matched original accepted subset mass and inherited vector under allocation_stock, never this new-production denominator. Missing records are unknown, not zero; use not_applicable only with evidence of absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

###### Rigid Truck transport (`freight_chips`)

Only actual non-articulated diesel cargo HDV total weight >31.0 t matching this transport identity and provider load/empty-return convention. Record wet transported mass and actual leg distance. Chip production and separately purchased transport must not overlap. Other vehicles/modes require separate atomic service cards.

- Selected flow: Rigid Truck transport `fba6a49d-22e7-4ce6-81d1-3aa2bfd41ba4`
- Flow property / unit: Mass times distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` / t*km
- Amount rule: Use cp_transport and cp_stock to retain this atomic exchange gross quantity, unit, stage and origin. Reconcile with cohort and opening/closing raw, WIP and accepted-board stock; assign causally to the same newly accepted cohort and divide by Q from cp_reference (per 1 kg reference flow). Previously accepted returns never create Q; their services use the matched original accepted subset mass and inherited vector under allocation_stock, never this new-production denominator. Missing records are unknown, not zero; use not_applicable only with evidence of absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_transport`
- Sources: `epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

###### Net purchased natural-gas industrial heat (`heat`)

Net purchased natural-gas industrial heat for hot-water softening and indirect drying. Measure supply/return enthalpy and provider boundary. A fuel-volume or steam-gross-energy record is not this delivered-heat identity; its UUID remains unresolved.

- Selected flow: Net purchased natural-gas industrial heat
- Flow property / unit: Net delivered thermal energy / MJ
- Amount rule: Use cp_energy and cp_stock to retain this atomic exchange gross quantity, unit, stage and origin. Reconcile with cohort and opening/closing raw, WIP and accepted-board stock; assign causally to the same newly accepted cohort and divide by Q from cp_reference (per 1 kg reference flow). Previously accepted returns never create Q; their services use the matched original accepted subset mass and inherited vector under allocation_stock, never this new-production denominator. Missing records are unknown, not zero; use not_applicable only with evidence of absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

#### Outputs

##### Product flows

###### Dried and conditioned board (`board`)

Newly accepted untrimmed wood softboard after drying and conditioning, transferred to a finishing receiver under the declared grade/specification. Measure net Q at that handoff; retain dry solids, sizing, water, geometry and inherited exchange vector. It is neither a wet mat nor trimmed finished board.

- Selected flow: Dried and conditioned board `5677877c-d6cd-423a-a0de-1aa6420a3c4e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reference`
- Sources: `epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

##### Waste flows

###### Rejected sized wood-softboard panels (`rejected_sized_board`)

One collected stream of rejected sized dried/conditioned wood-softboard panels failing acceptance at the drying handoff, exported as non-agglomerated wood waste. Record its actual sizing composition, conditioned moisture, contaminants, measured mass and recipient/treatment separately. It excludes captured unsized fibre dust, wet mat clipping and internally recovered material. Internal recovery is a separate physical loop; downstream dry trimming remains excluded.

- Selected flow: Wood waste `2ef9d37a-2fbf-42f6-8ccf-5d6677d5cfd8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_waste and cp_stock to retain this atomic exchange gross quantity, unit, stage and origin. Reconcile with cohort and opening/closing raw, WIP and accepted-board stock; assign causally to the same newly accepted cohort and divide by Q from cp_reference (per 1 kg reference flow). Previously accepted returns never create Q; their services use the matched original accepted subset mass and inherited vector under allocation_stock, never this new-production denominator. Missing records are unknown, not zero; use not_applicable only with evidence of absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

###### Captured unsized wood-fibre dust (`captured_unsized_fibre`)

One dry unsized wood-fibre dust stream collected by the chip-receipt dust extractor before contact with sizing chemicals, where this collector actually exists. Record collector/stage, dry wood and moisture, contaminants, mass and actual external recovery/treatment status. It excludes sized panel rejects, wet slurry/sludge and particles released to air. If returned inside the line, retain its measured recovery loop instead of an external waste exchange. Absence must be evidenced; any other collector or mixed stream requires its own atomic row.

- Selected flow: Wood waste `2ef9d37a-2fbf-42f6-8ccf-5d6677d5cfd8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_waste and cp_stock to retain this atomic exchange gross quantity, unit, stage and origin. Reconcile with cohort and opening/closing raw, WIP and accepted-board stock; assign causally to the same newly accepted cohort and divide by Q from cp_reference (per 1 kg reference flow). Previously accepted returns never create Q; their services use the matched original accepted subset mass and inherited vector under allocation_stock, never this new-production denominator. Missing records are unknown, not zero; use not_applicable only with evidence of absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

###### Sludge (`sludge`)

One dewatered fibre-recovery sludge stream exported for treatment, measured wet with dry solids and water separately. Verify contamination, recipient acceptance and treatment boundary; a generic sludge identity never proves treatability.

- Selected flow: Sludge `725c8f6e-7975-4155-a250-1f95ef70c508`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_waste and cp_stock to retain this atomic exchange gross quantity, unit, stage and origin. Reconcile with cohort and opening/closing raw, WIP and accepted-board stock; assign causally to the same newly accepted cohort and divide by Q from cp_reference (per 1 kg reference flow). Previously accepted returns never create Q; their services use the matched original accepted subset mass and inherited vector under allocation_stock, never this new-production denominator. Missing records are unknown, not zero; use not_applicable only with evidence of absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

###### Used lubricating oil (`waste_oil`)

Used lubricating oil separately collected for external treatment; record generated mass, contamination and destination and reconcile with oil stocks. It is not combined with sludge or fibre waste.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_waste and cp_stock to retain this atomic exchange gross quantity, unit, stage and origin. Reconcile with cohort and opening/closing raw, WIP and accepted-board stock; assign causally to the same newly accepted cohort and divide by Q from cp_reference (per 1 kg reference flow). Previously accepted returns never create Q; their services use the matched original accepted subset mass and inherited vector under allocation_stock, never this new-production denominator. Missing records are unknown, not zero; use not_applicable only with evidence of absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

###### Untreated wood-fibreboard process wastewater (`effluent`)

One liquid purge transferred to external treatment, excluding internally recirculated white water. Record volume, measured density, dry solids, dissolved organics, pollutants and treatment acceptance. Identity is unresolved; never substitute treated water or a direct elementary water release.

- Selected flow: Untreated wood-fibreboard process wastewater
- Flow property / unit: Mass / kg
- Amount rule: Use cp_waste and cp_stock to retain this atomic exchange gross quantity, unit, stage and origin. Reconcile with cohort and opening/closing raw, WIP and accepted-board stock; assign causally to the same newly accepted cohort and divide by Q from cp_reference (per 1 kg reference flow). Previously accepted returns never create Q; their services use the matched original accepted subset mass and inherited vector under allocation_stock, never this new-production denominator. Missing records are unknown, not zero; use not_applicable only with evidence of absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

##### Elementary flows

###### carbon monoxide (biogenic) (`co_bio`)

Only independently measured CAS630-08-0 with demonstrated wood-carbon origin, actual phase/compartment and source/control interval. No automatic burner emission is assumed in this indirect purchased-heat route. Air, unspecified only; a known finer actual outdoor compartment requires a separately verified matching identity.

- Selected flow: carbon monoxide (biogenic) `8a313a02-e251-11e6-bf01-fe55135034f3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_emissions and cp_stock to retain this atomic exchange gross quantity, unit, stage and origin. Reconcile with cohort and opening/closing raw, WIP and accepted-board stock; assign causally to the same newly accepted cohort and divide by Q from cp_reference (per 1 kg reference flow). Previously accepted returns never create Q; their services use the matched original accepted subset mass and inherited vector under allocation_stock, never this new-production denominator. Missing records are unknown, not zero; use not_applicable only with evidence of absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

###### formic acid (`formic_acid`)

Only independently detected CAS64-18-6 source-specific release with gas/aerosol partition and actual air compartment. Do not infer from acetic acid, total VOC, condensable PM or COD. Air, unspecified only, CAS64-18-6; a known finer outdoor compartment requires a separately verified identity.

- Selected flow: formic acid `08a91e70-3ddc-11dd-9424-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_emissions and cp_stock to retain this atomic exchange gross quantity, unit, stage and origin. Reconcile with cohort and opening/closing raw, WIP and accepted-board stock; assign causally to the same newly accepted cohort and divide by Q from cp_reference (per 1 kg reference flow). Previously accepted returns never create Q; their services use the matched original accepted subset mass and inherited vector under allocation_stock, never this new-production denominator. Missing records are unknown, not zero; use not_applicable only with evidence of absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

###### particles (PM2.5) (`pm25`)

Released filterable PM2.5 to outdoor air; use matched source and control conditions. Captured dust remains recovered material or waste.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_emissions and cp_stock to retain this atomic exchange gross quantity, unit, stage and origin. Reconcile with cohort and opening/closing raw, WIP and accepted-board stock; assign causally to the same newly accepted cohort and divide by Q from cp_reference (per 1 kg reference flow). Previously accepted returns never create Q; their services use the matched original accepted subset mass and inherited vector under allocation_stock, never this new-production denominator. Missing records are unknown, not zero; use not_applicable only with evidence of absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

###### particles (PM2.5 - PM10) (`pmcoarse`)

Released filterable PM2.5–PM10 to outdoor air; compute from comparable cumulative PM10 minus PM2.5 only where both measurements cover the same source/time/control.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_emissions and cp_stock to retain this atomic exchange gross quantity, unit, stage and origin. Reconcile with cohort and opening/closing raw, WIP and accepted-board stock; assign causally to the same newly accepted cohort and divide by Q from cp_reference (per 1 kg reference flow). Previously accepted returns never create Q; their services use the matched original accepted subset mass and inherited vector under allocation_stock, never this new-production denominator. Missing records are unknown, not zero; use not_applicable only with evidence of absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

###### particles (> PM10) (`pmover10`)

Released filterable particles above PM10 to outdoor air; comparable total filterable PM minus PM10. Condensable particles are not silently assigned to this fraction.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_emissions and cp_stock to retain this atomic exchange gross quantity, unit, stage and origin. Reconcile with cohort and opening/closing raw, WIP and accepted-board stock; assign causally to the same newly accepted cohort and divide by Q from cp_reference (per 1 kg reference flow). Previously accepted returns never create Q; their services use the matched original accepted subset mass and inherited vector under allocation_stock, never this new-production denominator. Missing records are unknown, not zero; use not_applicable only with evidence of absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

###### formaldehyde (`formaldehyde`)

Wood-derived formaldehyde to outdoor air where detected in refining/drying/conditioning; resin-free does not prove zero. Retain detection limits.

- Selected flow: formaldehyde `08a91e70-3ddc-11dd-941b-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_emissions and cp_stock to retain this atomic exchange gross quantity, unit, stage and origin. Reconcile with cohort and opening/closing raw, WIP and accepted-board stock; assign causally to the same newly accepted cohort and divide by Q from cp_reference (per 1 kg reference flow). Previously accepted returns never create Q; their services use the matched original accepted subset mass and inherited vector under allocation_stock, never this new-production denominator. Missing records are unknown, not zero; use not_applicable only with evidence of absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

###### methanol (`methanol`)

Methanol released to outdoor air where measured; exact species, not methylbenzyl alcohol or total VOC. No regional sawmill survey factor is transferred.

- Selected flow: methanol `fe0acd60-3ddc-11dd-a935-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_emissions and cp_stock to retain this atomic exchange gross quantity, unit, stage and origin. Reconcile with cohort and opening/closing raw, WIP and accepted-board stock; assign causally to the same newly accepted cohort and divide by Q from cp_reference (per 1 kg reference flow). Previously accepted returns never create Q; their services use the matched original accepted subset mass and inherited vector under allocation_stock, never this new-production denominator. Missing records are unknown, not zero; use not_applicable only with evidence of absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

###### acetic acid (`acetic_acid`)

Acetic acid (CAS 64-19-7) released to outdoor air where measured in wood processing; do not substitute indolylacetic acid. The identity uses air, unspecified; a known finer outdoor compartment requires a verified compatible identity. Collect species mass, not total VOC-as-carbon.

- Selected flow: acetic acid `08a91e70-3ddc-11dd-92c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_emissions and cp_stock to retain this atomic exchange gross quantity, unit, stage and origin. Reconcile with cohort and opening/closing raw, WIP and accepted-board stock; assign causally to the same newly accepted cohort and divide by Q from cp_reference (per 1 kg reference flow). Previously accepted returns never create Q; their services use the matched original accepted subset mass and inherited vector under allocation_stock, never this new-production denominator. Missing records are unknown, not zero; use not_applicable only with evidence of absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

###### carbon dioxide (biogenic) (`co2bio`)

Biogenic carbon dioxide actually released from wood degradation or oxidation inside the declared boundary; retain it in LCI even if a GHG convention excludes it from an indicator. No combustion is assumed in this purchased-heat route.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_emissions and cp_stock to retain this atomic exchange gross quantity, unit, stage and origin. Reconcile with cohort and opening/closing raw, WIP and accepted-board stock; assign causally to the same newly accepted cohort and divide by Q from cp_reference (per 1 kg reference flow). Previously accepted returns never create Q; their services use the matched original accepted subset mass and inherited vector under allocation_stock, never this new-production denominator. Missing records are unknown, not zero; use not_applicable only with evidence of absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

###### methane (biogenic) (`ch4bio`)

Biogenic methane only where measured or supported by a site-specific degradation model; identify wood/organic carbon origin. No assumed wastewater-treatment emissions outside the gate.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_emissions and cp_stock to retain this atomic exchange gross quantity, unit, stage and origin. Reconcile with cohort and opening/closing raw, WIP and accepted-board stock; assign causally to the same newly accepted cohort and divide by Q from cp_reference (per 1 kg reference flow). Previously accepted returns never create Q; their services use the matched original accepted subset mass and inherited vector under allocation_stock, never this new-production denominator. Missing records are unknown, not zero; use not_applicable only with evidence of absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

###### water vapour (`water_vapour`)

Net water evaporated from wet mats to outdoor air; reconcile make-up water, chip/board moisture, recycled white water, condensate, wastewater and sludge water.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_emissions and cp_stock to retain this atomic exchange gross quantity, unit, stage and origin. Reconcile with cohort and opening/closing raw, WIP and accepted-board stock; assign causally to the same newly accepted cohort and divide by Q from cp_reference (per 1 kg reference flow). Previously accepted returns never create Q; their services use the matched original accepted subset mass and inherited vector under allocation_stock, never this new-production denominator. Missing records are unknown, not zero; use not_applicable only with evidence of absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_direct | wet_board | Retain gross physical vector V separately from attributed burden A. First subdivide actual operations, or virtually assign exchanges exclusive to one function using stage/cohort evidence. For a remaining inseparable multifunctional operation, identify the determining physical causal relationship separately for each exchange. Only residual exchanges lacking such a relationship use evidenced market values of the co-functions in their actual condition at the split point. Missing causality, compatible prices or study-context justification remains unresolved; no blanket mass/time/equal share. | `ilcd-attributional-allocation-2010` |
| allocation_recovery | rejected_sized_board; captured_unsized_fibre; sludge | Internal recovered fibre and white water are loops with actual recovery energy and losses; they are not co-product credits. For externally transferred residue establish legal/material status, receiver use, composition, price where relevant and actual treatment. Keep shared generation burdens separate from post-split recovery/treatment burdens. Unknown status or allocation remains unresolved. This limited hierarchy does not establish recycling allocation or substitution benefits; those require an explicit compatible study method. | `ilcd-attributional-allocation-2010` |
| allocation_sources | wood_chips | Carry source forestry/residue generation and chipping burdens from the compatible upstream provider once. A residue label does not prove zero upstream burden. Do not allocate incoming wood, contained water and sizing partitions as separate purchases when one whole supply is received. | `ilcd-attributional-allocation-2010` |
| allocation_stock | board | For identified original cohort c, Qc is its original first-accepted net kg at this same drying/conditioning handoff; Ec is its inherited production exchange vector and xc = Ec/Qc. Preserve original acceptance evidence and opening/closing stocks. A returned/reinspected/reconditioned subset retains its original accepted net mass q_c within Qc and the matched xc; actual later service exchanges are assigned only to that traced subset, normalized by q_c (Qc only when the whole cohort is serviced), and recorded separately from new production. Never divide old-board services by unrelated new Q or recreate production. Unknown Qc, original accepted subset mass or inherited vector remains unresolved, even if a new output weight is available. | `ilcd-attributional-allocation-2010` |

This is an attributional intermediate-inventory method. ILCD sections 7.9.2–3 support the limited subdivision and exchange-specific allocation hierarchy only where allocation is appropriate for the declared study context; they do not authorize substitution, recycling credits or a general ILCD-compliance claim. The explicit cohort/stock and handoff requirements are additional author prescriptions. Retain each causal relationship and residual market-value calculation with evidence, limitations and sensitivity; unavailable allocation evidence remains unresolved. Exported residues never receive an automatic avoided-product credit.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_reference | wet_board | board | accepted handoff and stock records | grade; batch; date; first acceptance; wet net mass; moisture; area; thickness; density; receiving specification; stock status | Calibrated net weighing and matched moisture/geometry tests at drying/conditioning handoff; reconcile producer and receiver  Q = newly first-accepted net kg, including closing newly accepted board once; exclude packaging, rejects, WIP and previously accepted returns; denominator for per 1 kg reference flow| kg; m2; m; kg/m3 | each cohort/handoff | matched production and stock interval | actual line and receiver | per 1 kg reference flow | scale calibration; laboratory/test method; signed handoff; stock reconciliation |
| cp_material | wet_board | wood_chips; process_water; paraffin; starch; alum; lubricant | receipts, formulation and stage material balances | supplier/grade; source; batch; wet mass; dry solids; water; volume basis; density; assay/hydration; stage; opening/closing stocks | Weigh receipts and withdrawals, sample moisture/assay, meter external water, retain actual separate formulation and stage ledger  Reconcile net consumption and stage/cohort attribution with cp_stock; divide same-cohort total by Q from cp_reference per 1 kg reference flow; internal recirculation is not repeated input| kg; m3 | delivery/batch and meter interval | same cohort period as Q | actual included line | per 1 kg reference flow | supplier specifications; calibration; moisture replicates; recipe and retention records |
| cp_energy | wet_board | electricity; heat | utility meters and enthalpy records | start/end reading; time; stage; voltage/geography; fluid composition; supply/return mass/temperature/pressure; enthalpy; provider boundary | Use synchronized line/stage meters, reconcile invoice boundary and net heat; subtract separately metered out-of-scope finishing  Retain stage totals and cp_stock attribution; convert kWh × 3.6, calculate net supply-minus-return heat; divide same-cohort MJ by Q per 1 kg reference flow| MJ; kWh | meter interval aligned to batches | same cohort period as Q | included stages and actual natural-gas heat or electricity supplier | per 1 kg reference flow | calibration; enthalpy method; meter coverage; utility background compatibility |
| cp_transport | wet_board | freight_chips | supplier shipment and vehicle records | wet tonnes; origin/destination; loaded km; vehicle/fuel; load/return convention; provider included stages | Verify actual waybills and route legs; compare chip and freight provider boundaries  Sum wet t × loaded km by compatible provider and cohort; divide by Q per 1 kg reference flow; no generic empty-return factor| t; km; t*km | each incoming shipment | same cohort period as Q | actual chip supply chain | per 1 kg reference flow | waybill; route evidence; vehicle identity; boundary reconciliation |
| cp_waste | wet_board | rejected_sized_board; captured_unsized_fibre; effluent; sludge; waste_oil | outgoing waste and treatment records | source stage; wet mass; dry solids; water; density/volume for effluent; pollutant concentration; legal status; receiver; treatment; stock | Weigh each atomic stream, sample sludge/effluent and document treatment acceptance; distinguish recycled internal material  Reconcile each stream with cp_stock, water/solids/pollutant ledgers; volume × measured compatible density gives effluent kg; divide same-cohort totals by Q per 1 kg reference flow| kg; m3; mg/l | each load and representative sample interval | same cohort period as Q | included line/control and actual receiver | per 1 kg reference flow | scale/flow calibration; sampling methods; manifests; receiver acceptance |
| cp_emissions | wet_board | individual elementary emission cards | source-specific stack/fugitive measurement and water balance | species/CAS; phase; compartment; time; source; controls; concentration; dry/wet gas basis; reference T/P; flow; operating hours; detection limit; moisture inputs/outputs | Matched species concentration and volumetric-flow measurement; integrate across actual operation; reconcile evaporated water independently  For matching bases sum C × gas volume × 10^-6 kg/mg, add measured fugitives once; use cp_stock to attribute cohort then divide by Q per 1 kg reference flow; retain below-detection bounds, not invented zeros| kg; mg/m3; m3/h; h | representative intervals for every source/control state | same cohort period as Q | included chip/refining/forming/drying/conditioning/control sources | per 1 kg reference flow | test method; raw time series; phase/compartment match; calibration; uncertainty; controls |
| cp_stock | wet_board | every exchange and inherited vector | raw/WIP/accepted-board ledger | opening/closing quantities and exchange vectors; receipts; transfers; first acceptance; returns; rejects; losses; cohort; stage; timestamps | Trace actual lots through receipt, refining, stock, mat, dry and conditioned states; reconcile both ends of each internal transfer  Opening + external entries = outgoing + closing + measured losses for each conserved constituent; retain inherited vector and assign only demonstrable current-cohort contributions before dividing by Q per 1 kg reference flow; no division for Q=0| row-native unit; kg dry solids; kg water | each cohort and period close | same interval as Q with prior cohort links | actual included stores/line and handoff | per 1 kg reference flow | immutable lot history; stocktake; producer/receiver reconciliation; discrepancy explanation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_reference | all inventory rows | For new production only, x_i = E_i,cohort / Q after cp_stock attribution; E_i,cohort excludes inherited old-board production and old-board services. Q > 0 is required; the board row is Q/Q = 1. Q=0, idle or cleanup intervals retain raw burdens and documented later attribution; do not divide by zero or discard them. | raw exchange; causal cohort link; Q | row-native unit per 1 kg reference flow | |
| calc_stock | every conserved constituent and inherited exchange | opening stock + actual entries = actual exits + closing stock + measured losses. Keep raw/WIP/accepted stock and their exchange vectors distinct. Reused/returned board retains original Qc, Ec and accepted subset q_c; its service ledger uses q_c, never unrelated new Q. Missing original denominator/vector remains unresolved. Internal transfers cancel in the integrated boundary. | stage/lot/stock records; V and A vectors | auditable constituent and burden reconciliation | |
| calc_solids_water | chips; slurry; wet mat; dry/conditioned board; wastes | Wet total = water + wood dry solids + actual sizing dry solids. Track source component retention/loss and water in each stage; internal white water cancels externally. Water inputs + opening water = board water + effluent/sludge/reject water + net evaporation + closing water + other measured exits. | measured masses; moisture; formulation; water/condensate records | stage balances and net evaporation | `usda-wood-handbook-2021` |
| calc_heat | heat | H = sum(m_supply × h_supply - m_return × h_return) over matched actual boundary/interval; use measured composition and consistent reference states. Resolve identity/property/provider before final background linkage. | mass flows; fluid; T; P; enthalpy reference | net delivered MJ then per 1 kg reference flow | |
| calc_emissions | elementary emissions | Species mass = matching concentration × matching gas volume with explicit unit conversion; cumulative particle fractions can be differenced only for matched sources/time/basis. PM2.5, PM2.5–PM10 and >PM10 are nonoverlapping. Total VOC-as-carbon, COD, filterable and condensable PM are distinct measurements, not interchangeable species. | source-specific concentrations; gas flow/time; detection limits; controls | individual emitted species kg per 1 kg reference flow | `epa-wet-fibreboard-2002` |
| calc_carbon | wood and carbon-bearing sizing | Reconcile measured incoming carbon with board/waste/stock carbon and emitted carbon by source. Never invent universal wood carbon content, uptake, degradation gas yields or 100% sizing retention. Carry verified upstream uptake once and retain biogenic emissions separately. | actual composition and source fractions; stage stocks; measured species | source-specific carbon ledger and explicit unresolved residual | |
| calc_downstream | finishing receiver | Carry the complete drying-gate board inventory per accepted kg. Finished output requires actual received board mass, finishing inputs/emissions and losses; no assumed 1:1 yield. Geometric partitions are not extra purchases. | handoff quantity/vector; actual downstream records | compatible intermediate provider link; no finished-product result without finishing | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_scope | reference and every exchange | Same declared grade, wood-only wet cold-dewatered route, drying handoff, site and coherent period; retain actual stage state and source/provider boundary. Extra route components require explicit extension. | producer/receiver specifications; route observations; process diagram |
| dq_identity | UUID-bearing and unresolved rows | Full flow name, type, quantitative reference/property/unit, geography, route and emission compartment must fit the actual exchange. Resolve heat/effluent and any additional exchange before claiming a complete background-linked study. | direct record and support chain; supplier/receiver compatibility; explicit gaps |
| dq_measurement | materials, utilities and releases | Retain raw measured values, calibration, sampling coverage, uncertainty and detection bounds. Missing records remain unknown. Independently compare water, dry solids, sizing and carbon ledgers and investigate residuals instead of inventing closure factors. | cp_reference to cp_stock evidence and uncertainty log |
| dq_sources | literature and quantities | EPA 2002 and USDA 2021 support qualitative route/state distinctions. Their historical figures are not general consumption, moisture, recipe, emission-factor or performance defaults. No compatible multi-source empirical quantity range is established here. | source/page applicability assessment and actual foreground records |
| dq_functions | product claims | No kg-based comparison of thermal/acoustic/building service without tested configuration, dimensions, moisture, performance and scenario alignment. The untrimmed intermediate does not prove a finished product standard. | actual test report and downstream finishing specification |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | board | Confirm actual wet wood softboard and drying/conditioning receiver handoff. Reject substitution by MDF, hardboard, wet mat, particleboard, faced/resinated board or finished trimmed output. Check all reference qualifiers and producer/receiver quantity/state agreement. | `un-cpc3-2025`; `epa-wet-fibreboard-2002`; `usda-wood-handbook-2021` |
| validate_basis | all rows | Same positive Q and cohort must support every normalized exchange. Check first acceptance, opening/closing raw/WIP/accepted stocks, returns and inherited vectors; reconcile dry solids, sizing, water and carbon. Missing causal split or unknown residual is inconclusive. | |
| validate_flows | all rows | Each card is one actual atomic exchange. Check UUID full-record identity/property/unit and actual background/provider scope; missing heat/effluent identity or any necessary additional exchange remains an explicit gap. A valid UUID does not validate quantity, occurrence or treatment. | |
| validate_emissions | releases and wastes | Distinguish captured material, external treatment transfers and actual elementary releases; retain species, phase, compartment, controls and detection bounds. Avoid particle/VOC or wastewater double counting; unmeasured release is not zero. | `epa-wet-fibreboard-2002` |
| validate_completion | study | Report performed/skipped checks, findings and unresolved coverage. Do not claim a complete linked study, finished-product comparison, independent scientific approval or publication from a method/check result alone. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Candidate guidance for a site-specific wet-process untrimmed wood-softboard intermediate provider; an actual study must disclose its own evidence/status |
| downstream_use | Feed a matched trimming/finishing process with the accepted dried/conditioned board quantity and inherited complete exchange vector |
| allowed_use | Transparent gate-to-gate inventory; cradle-to-handoff only with complete compatible upstream/transport/treatment links and explicit unresolved coverage |
| excluded_use | Finished-board, packaged dispatch or building-function declaration; default recipe/energy/emission factors; methodology or study approval by classification alone |
| required_metadata | All reference qualifiers; real supplier/receiver/handoff; site/period; grade; route/stage states; Q; stock/cohort links; raw units/moisture; provider boundaries; identity/property/unit evidence; allocation rationale |
| required_quality_disclosure | Calibration; sampling; uncertainty; source age/applicability; missing exchange/identity/provider/quantity; unresolved balances; actual performed/skipped checks; study review state |
| update_trigger | Changed grade/formulation/furnish, utility/heat/control/treatment, handoff specification, upstream provider, major stock/yield behavior or new compatible evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD, CPC Version 3.0 official structure, 30 June 2025; [official structure CSV](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv), entries 31441, 31442, 31449 | Classification distinction only; no method approval or complete coverage claim |
| epa-wet-fibreboard-2002 | official_guidance | US EPA, AP-42 Section 10.6.4 Hardboard and Fiberboard Manufacturing, September 2002, printed pp.10.6.4-4–5, Figure 10.6.4-3 and emissions discussion; [official PDF](https://www.epa.gov/sites/default/files/2020-10/documents/c10s0604.pdf) | Wet wood route, additives, cold dewatering, board drying before finishing, source/control-specific emission attention; historical factors/settings are not adopted |
| usda-wood-handbook-2021 | official_guidance | USDA Forest Products Laboratory, Wood Handbook—Wood as an Engineering Material, FPL-GTR-282 (2021), Chapter 11, printed p.11-15, Cellulosic Fiberboard and Finishing Techniques; [official PDF](https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf) | Low-density wet-laid cellulosic softboard, natural bonding, sizing, cold dewatering, drying before post-treatment; no universal recipe or quantitative defaults |
| ilcd-attributional-allocation-2010 | official_guidance | European Commission JRC, ILCD Handbook: General guide for Life Cycle Assessment—Detailed guidance, first edition March 2010, sections 7.9.2–3, printed pp.255–258 and 266–267; [official PDF](https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf) | Attributional-context subdivision/virtual subdivision, exchange-specific determining physical causality and residual market-value hierarchy; no blanket compliance, recycling credit or consequential-substitution claim |
