---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.tobacco-refuse
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Tobacco refuse — separately supplied redried FCV long stems

## 1. Scope and Applicability

This methodology addresses one separately supplied material: clean, unblended, unformed long midrib stems from flue-cured Virginia (FCV) tobacco after GLT separation, redrying and conditioning. The material is a residual industrial feedstock for a declared reconstitution receiver; it is not reconstituted sheet itself. Long-stem supply, redrying/conditioning and industrial uses are documented by the manufacturer/merchant; GLTCL separately offers stems and scrap and separately describes cut rolled expanded stem. Those commercial descriptions support a narrow technical synthesis, not a claim that one factory, SKU or current order has been audited. No numerical moisture, nicotine, stem yield, price, density, heating value or allocation share is prescribed.

Start at an identified hand-off of loose, already separated/redried/conditioned stems before the reporting operator's final collection, necessary impurity removal, grading, weighing and first quality release. Include the actual holding, packing, handling and dispatch service for that material. The supplier carries cultivation, curing, leaf conditioning, threshing/separation and stem redrying burdens once into the hand-off dataset. Do not purchase parent leaf again or rebuild an entire threshing or cigarette plant. This starting condition is a declared modelling option supported by the supply chain; the data producer must establish the actual hand-off and supplier boundary.

Exclude green or whole cured leaves, stemmed lamina, a separate dust/fines or leaf-fragment product, deliberate blends, flavoured/cased or cut filler, rolled/expanded stems, reconstituted or homogenized sheet, extracted residues, nicotine/extracts, pressed fuel pellets, cigarettes and used filters. Ordinary export-carton packing does not establish pelletisation; declare any compaction and confirm that it is reversible containment rather than a newly formed article. If actual additional drying, wet treatment, expansion, extraction, blending or forming occurs, keep all physical flows and burdens and explicitly extend/review the route; never omit the operation to make the material qualify. Downstream extraction/reconstitution/combustion and substitution credits are outside this foreground.

The first release is the first acceptance of this complete product in the represented supply chain, including outsourced preparation. Obtain supplier release and hand-off records: if the incoming stems already passed that same product gate, their resale or transfer cannot create Q. Treat it as historical-cohort service using original Qc, or relocate the foreground gate to the actual producer and include its operations once.

Sizing here means separation by screening, with no deliberate cutting, grinding or pulverising. Record incidental breakage separately and establish the actual long-stem specification; the customs sample does not set a universal length.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.tobacco-refuse |
| classification_refs | CPC 3.0 39180, accepted narrower redried FCV long-stem association under docs/adr/2026-11-22-accept-cpc-39180-redried-flue-cured-virginia-long-midribs.md |
| covered_products | One separately graded FCV long-stem residual supply lot at measured as-supplied moisture. |
| excluded_products | Exclude green or whole cured leaves, stemmed lamina, a separate dust/fines or leaf-fragment product, deliberate blends, flavoured/cased or cut filler, rolled/expanded stems, reconstituted or homogenized sheet, extracted residues, nicotine/extracts, pressed fuel pellets, cigarettes and used filters. Ordinary export-carton packing does not establish pelletisation; declare any compaction and confirm that it is reversible containment rather than a newly formed article. If actual additional drying, wet treatment, expansion, extraction, blending or forming occurs, keep all physical flows and burdens and explicitly extend/review the route; never omit the operation to make the material qualify. Downstream extraction/reconstitution/combustion and substitution credits are outside this foreground. |
| representative_product | Unblended redried FCV long tobacco stems for an identified industrial reconstitution receiver. |
| production_route | Loose separated/redried/conditioned stem hand-off → collection/necessary cleaning and sizing → weighing and first quality release → holding/actual packing/handling/dispatch. |
| market_state | One unmanufactured midrib-stem material; dry means declared measured moisture, not zero water; no default nicotine or downstream recovery functionality. |

Classification is bounded by the frozen June 2025 CPC note and the October 2026 CPC3 row 1876 (HS 2022 2401.30). HQ 961890 ultimately addresses actual use and proof timing; its analysis distinguishes flue-cured uncut, unground, unpulverised stems from threshed leaf; HQ H185715 places its puffed-stem product beyond raw refuse. Sample-based NY N026926 independently describes dried, not deliberately cut/ground/pulverised cigar-leaf midribs within 2401.30; it is not FCV and its dimensions and duty treatment are not transferred. H185715 also discusses rolled/steamed/dried stems within 2401, so exclusion of all rolled stems here is a methodological narrowing, not a universal customs rule. HMRC corroborates midribs/stems and excludes smoking preparations. These sources support material-state contrasts, not current tariff advice, receiver approval, numerical specifications or an accepted CPC mapping. DIMON’s 2004 producer filing independently documents redrying and separate stem packing; it establishes neither this lot’s moisture nor its yield or allocation.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | One qualified supply of the complete long-stem residual material for the declared industrial receiver use. |
| How much | 1 kg net as-supplied material at the declared release moisture; packaging excluded. |
| How well | Conforms to the declared receiver specification for identity, long-stem form, moisture, lamina/fines, foreign matter and contamination. No universal specification or concentration is assumed. |
| How long or cycle | One first whole-lot quality release; holding and dispatch are separate services and create no additional production. |
| reference_flow_link | `rf_stems` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Unblended redried FCV long tobacco stems |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | FCV tobacco type and botanical identity; origin and crop year; flue-curing location and history; supplier and separation hand-off; redrying and conditioning history; long-stem midrib form and size specification; no deliberate lamina/dust blending; expansion/flavouring/extraction/agglomeration status; measured moisture and test basis; net supplied mass and dry-matter bridge; lamina and fines content; foreign matter and contamination acceptance; declared industrial receiver use and acceptance specification; Product/Waste decision and treatment owner; package composition and tare; first-release lot identity and gate; reporting period and facility geography; upstream burden owner and allocation evidence; opening/closing WIP and FG with inherited load vectors; return lineage and original Qc |

Declare every qualifier in the dataset metadata, reference comment or equivalent full consumable product context. Missing core identity is not repaired by an auxiliary UUID.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `net_release` | reference product | Mass | kg | Q is net mass of the complete material first passing the declared release gate during H; count each batch once, include qualifying closing FG, and exclude opening already-released FG, dispatch, reinspection and repeated release. Moisture and physical state must match the reference. |
| `separate_ledgers` | all exchanges and stocks | native measured property | native | Keep grossV physical movements, inventory/environmental load vectors A and production quantity Q separately. Physical mass is never reduced by an economic or service share. Opening and closing raw material/WIP/FG have both physical quantity and inherited load vectors. |
| `moisture_bridge` | tobacco material and inventories | Mass and water mass fraction | kg | Retain measured wet mass, moisture method and basis; dry matter = wet mass × (1 - measured wet-basis water fraction). The bridge is non-additive. Nicotine and fibre are component subledgers, not additional purchased inputs or denominators. |
| `units_before_assignment` | raw numerators | native measured property | native | Convert original units and integrate genuine rates before attribution; an already integrated gas/liquid volume is not multiplied by time. Density must be independently established for that substance, temperature and pressure; no default water density for a suspension, carton or stem. Preserve electricity kWh; 1 kWh = 3.6 MJ is an energy conversion, not a heat-supply claim. |
| `cohort_basis` | current and historical service cohorts | native measured property | native | Whole-H physical balances keep every gross crossing. For unit reporting, identify each actual release cohort first: current production uses its sole first-release Q; historical FG and returned-lot service uses original Qc in a separate historical cohort report, never current Q. Preserve the original full physical ledger alongside cohort-tagged events without economic scaling. A mixed or untraceable cohort cannot be normalised as if wholly current production. |
| `water_species` | mass and relevant element balances | Mass | kg | Keep actual free, phase-change, structural and reaction water distinct where supported by evidence. Do not invent a reaction or assign an unidentified water/element residual to nicotine, nitrogen gas or another species. Resolve important unidentified atmospheric/aqueous exits with independent sampling before declaring closure. |

Metered electricity uses technical Energy and Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` (MJ reference; kWh factor 3.6). Verify the actual supplier flow and its native reference property separately before linking; a shared unit group never establishes net calorific value.

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Start at an identified hand-off of loose, already separated/redried/conditioned stems before the reporting operator's final collection, necessary impurity removal, grading, weighing and first quality release. Include the actual holding, packing, handling and dispatch service for that material. The supplier carries cultivation, curing, leaf conditioning, threshing/separation and stem redrying burdens once into the hand-off dataset. Do not purchase parent leaf again or rebuild an entire threshing or cigarette plant. This starting condition is a declared modelling option supported by the supply chain; the data producer must establish the actual hand-off and supplier boundary. |
| starting_condition_role | Supplier-to-foreground hand-off; the supplier owns all pre-handoff leaf separation/redrying burdens once. |
| product_classification_scope | CPC tobacco refuse context narrowed to the single unmanufactured long-stem supply state; no broader residual mixture. |
| recursive_input_rule | Record same-category incoming stems once with their actual upstream provider and burden vector. A returned released batch retains its original Qc and load lineage and is not a second fresh purchase. |
| upstream_dataset_requirement | Require actual supplier cultivation/curing/separation/stem-redrying boundary and allocation evidence; retain transport when it actually occurs. Link each fresh utility/material and each treatment owner once; a flow identity is not a provider dataset. |
| disclosure | Declare receiving use/specification, legal and disposition status, geographic and temporal scope, every real operation, supplier burden coverage, physical stock/return ledgers, allocation evidence, source limitations and unresolved identity. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_material` | applicability | This methodology addresses one separately supplied material: clean, unblended, unformed long midrib stems from flue-cured Virginia (FCV) tobacco after GLT separation, redrying and conditioning. The material is a residual industrial feedstock for a declared reconstitution receiver; it is not reconstituted sheet itself. Long-stem supply, redrying/conditioning and industrial uses are documented by the manufacturer/merchant; GLTCL separately offers stems and scrap and separately describes cut rolled expanded stem. Those commercial descriptions support a narrow technical synthesis, not a claim that one factory, SKU or current order has been audited. No numerical moisture, nicotine, stem yield, price, density, heating value or allocation share is prescribed. | `stalwart-stem-supply`; `gltcl-stem-portfolio`; `unsd-cpc3-2025`; `cbp-stems-961890`; `cbp-cigar-midribs-n026926`; `unsd-cpc3-2026`; `hmrc-tobacco-scope` |
| `boundary_handoff` | upstream and foreground | Start at an identified hand-off of loose, already separated/redried/conditioned stems before the reporting operator's final collection, necessary impurity removal, grading, weighing and first quality release. Include the actual holding, packing, handling and dispatch service for that material. The supplier carries cultivation, curing, leaf conditioning, threshing/separation and stem redrying burdens once into the hand-off dataset. Do not purchase parent leaf again or rebuild an entire threshing or cigarette plant. This starting condition is a declared modelling option supported by the supply chain; the data producer must establish the actual hand-off and supplier boundary. | `stalwart-stem-supply`; `jrc-ilcd-2010-allocation`; `dimon-processing-2004` |
| `boundary_real_operations` | complete foreground | Include start/stop, idle, trials, failures, contaminated/rejected lots, cleanup, actual repair inputs, maintenance replacements and rework. Unsupported or unauthorised operations still retain their actual physical flows and burdens; they may require route extension rather than zero quantities. Add an individual card for every actual missing fuel, heat carrier, chemical formulation, package, waste or measured substance. | `stalwart-stem-supply`; `gltcl-stem-portfolio` |
| `boundary_product_waste` | material status | Establish Product versus discarded Waste from specification, documented receiver use/acceptance, actual legal/disposition status and provider method. The label refuse, low price or sale alone proves neither zero upstream burden nor harmlessness. A contaminated or disposal lot cannot inherit the qualified reference identity automatically. | `stalwart-stem-supply`; `jrc-ilcd-2010-allocation` |
| `boundary_exclusions` | route contrasts | Exclude green or whole cured leaves, stemmed lamina, a separate dust/fines or leaf-fragment product, deliberate blends, flavoured/cased or cut filler, rolled/expanded stems, reconstituted or homogenized sheet, extracted residues, nicotine/extracts, pressed fuel pellets, cigarettes and used filters. Ordinary export-carton packing does not establish pelletisation; declare any compaction and confirm that it is reversible containment rather than a newly formed article. If actual additional drying, wet treatment, expansion, extraction, blending or forming occurs, keep all physical flows and burdens and explicitly extend/review the route; never omit the operation to make the material qualify. Downstream extraction/reconstitution/combustion and substitution credits are outside this foreground. | `stalwart-stem-supply`; `gltcl-stem-portfolio`; `unsd-cpc3-2025`; `cbp-puffed-stems-h185715`; `hmrc-tobacco-scope` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `stem_preparation` | Stem collection, grading and first release | `required` | Every qualifying loose hand-off; include each actual supporting operation. | Prepare and first release the single long-stem material. | 1 kg reference flow |
| `supply_services` | Released-stem holding, actual packing and dispatch | `required` | Every represented lot; only actual package components apply. | Deliver material without creating another Q. | 1 kg reference flow |

All cards report the declared reference basis. Their descriptions and collection protocols refer to `calc_normalize`: collect unnormalised raw records first, prepare units and attribution once, and create parallel physical/environmental unit records once. The aggregation-rule cell names the final reporting basis, not a division in collection. No amount range or assumed zero is prescribed. Conditional cards require evidence of occurrence or documented absence; an actual missing item requires a new atomic card.

### Process: Stem collection, grading and first release (`stem_preparation`)

#### Inputs

##### Product flows

###### Loose stem hand-off (`received_stems`)

Weigh the complete residual material once, retaining moisture and its non-additive constituent analyses. Accept only separated long midribs in the declared FCV curing/redrying state, with no deliberate blending, expansion, flavouring, extraction or forming. Identify the actual supplier and one inherited upstream A; neither a cured leaf UUID nor a cigarette/dust identity substitutes for stems.

Use `calc_normalize` once for the raw physical numerator and independently attributed environmental vector; keep the complete grossV/A/Q and source/route restrictions above in consumable context.

- Selected flow: Unblended redried FCV long tobacco stems
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the raw event records and the single normalisation operation specified in Section 8; preserve physical movements and independently attributed loads.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `stalwart-stem-supply`; `gltcl-stem-portfolio`

###### Purchased low-voltage electricity (`preparation_power`)

Meter this process and actual shared supporting equipment including idle/cleanup periods. Use the real regional voltage/supply provider once; a CN grid or hydropower-specific identity is not an automatic Zimbabwe/Bangladesh supply match. Do not add a second energy input for the same kWh.

Use `calc_normalize` once for the raw physical numerator and independently attributed environmental vector; keep the complete grossV/A/Q and source/route restrictions above in consumable context.

- Selected flow: Low-voltage alternating-current electricity
- Flow property / unit: Energy `f6811440-ee37-11de-8a39-0800200c9a66` / kWh
- Amount rule: Use the raw event records and the single normalisation operation specified in Section 8; preserve physical movements and independently attributed loads.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_preparation`
- Sources: `jrc-ilcd-2010-allocation`

###### Actual wet-cleaning water (`cleaning_water`)

Conditional on real wet cleaning with treated municipal/potable piped supply. The native family is supplied tap water; it does not represent raw abstraction, deionised water, steam or untreated process water. Use measured kg or independent actual-state density conversion; the secondary volume coefficient is not measured density. Provider/source/treatment and demand remain foreground-specific.

Use `calc_normalize` once for the raw physical numerator and independently attributed environmental vector; keep the complete grossV/A/Q and source/route restrictions above in consumable context.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the raw event records and the single normalisation operation specified in Section 8; preserve physical movements and independently attributed loads.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `jrc-ilcd-2010-allocation`

###### Replacement woven steel sieve (`new_screen`)

Only an actual replacement screen consumed by this operation; record the complete supplied screen, grade, mass, service record and retired counterpart. Do not insert a hypothetical replacement rate or treat fresh repair material as a deduction.

Use `calc_normalize` once for the raw physical numerator and independently attributed environmental vector; keep the complete grossV/A/Q and source/route restrictions above in consumable context.

- Selected flow: Stainless-steel woven sieve screen
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the raw event records and the single normalisation operation specified in Section 8; preserve physical movements and independently attributed loads.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_maintenance`
- Sources: `jrc-ilcd-2010-allocation`

##### Waste flows

##### Elementary flows

###### Measured ambient moisture uptake (`humidity_absorbed`)

Conditional on independently established uptake during holding/grading. Keep an explicit direction and water phase; an air-emission UUID is not a resource input identity. Do not infer uptake and evaporation simultaneously from one unexplained mass residual.

Use `calc_normalize` once for the raw physical numerator and independently attributed environmental vector; keep the complete grossV/A/Q and source/route restrictions above in consumable context.

- Selected flow: Water vapour absorbed from ambient air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the raw event records and the single normalisation operation specified in Section 8; preserve physical movements and independently attributed loads.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `stalwart-stem-supply`

#### Outputs

##### Product flows

###### First qualified long-stem release (`rf_stems`)

This is the sole production reference: 1 kg of the whole net as-supplied material. Q includes conforming closing FG and excludes previously released opening FG, repeat inspections and dispatch. The same Q transferred to service stock is internal and cancels on consolidation. Moisture/nicotine/fibre remain subledgers, not extra products.

Use `calc_normalize` once for the raw physical numerator and independently attributed environmental vector; keep the complete grossV/A/Q and source/route restrictions above in consumable context.

- Selected flow: Unblended redried FCV long tobacco stems
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`
- Sources: `stalwart-stem-supply`

###### Separately accepted lamina fragments (`lamina_separated`)

Conditional on actual removal and separate industrial Product acceptance. Never add this leaf material to the stem reference or assume it exists in a clean hand-off. Weigh it and retain its own condition, receiver, lineage and burden assignment. If discarded, create a separate Waste card instead.

Use `calc_normalize` once for the raw physical numerator and independently attributed environmental vector; keep the complete grossV/A/Q and source/route restrictions above in consumable context.

- Selected flow: Separated cured FCV lamina fragments
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the raw event records and the single normalisation operation specified in Section 8; preserve physical movements and independently attributed loads.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `gltcl-stem-portfolio`; `stalwart-stem-supply`

##### Waste flows

###### Discarded rejected long stems (`rejected_stems`)

Include actual failed/contaminated lots not recovered as reference Product; record moisture, reason, quantity and the single authorised treatment owner. A returned already-released lot retains original Qc and A.

Use `calc_normalize` once for the raw physical numerator and independently attributed environmental vector; keep the complete grossV/A/Q and source/route restrictions above in consumable context.

- Selected flow: Discarded contaminated FCV long tobacco stems
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the raw event records and the single normalisation operation specified in Section 8; preserve physical movements and independently attributed loads.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residuals`
- Sources: `stalwart-stem-supply`; `gltcl-stem-portfolio`; `jrc-ilcd-2010-allocation`

###### Captured stem dust (`captured_dust`)

Weigh collected filter/cleanup dust as a physical solid at its real destination. This is neither a long-stem Product nor measured nicotine nor an air emission. Split any differently composed filter medium as another card; do not use an aluminium-content reference for this whole organic material.

Use `calc_normalize` once for the raw physical numerator and independently attributed environmental vector; keep the complete grossV/A/Q and source/route restrictions above in consumable context.

- Selected flow: Captured FCV tobacco-stem dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the raw event records and the single normalisation operation specified in Section 8; preserve physical movements and independently attributed loads.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residuals`
- Sources: `stalwart-stem-supply`; `gltcl-stem-portfolio`; `jrc-ilcd-2010-allocation`

###### Removed stones (`removed_stones`)

Conditional on actual stone removal; weigh the mineral material separately from plastic, metal, soil fines and tobacco. Additional different foreign matter requires its own atomic row.

Use `calc_normalize` once for the raw physical numerator and independently attributed environmental vector; keep the complete grossV/A/Q and source/route restrictions above in consumable context.

- Selected flow: Stones removed from tobacco stems
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the raw event records and the single normalisation operation specified in Section 8; preserve physical movements and independently attributed loads.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residuals`
- Sources: `stalwart-stem-supply`; `gltcl-stem-portfolio`; `jrc-ilcd-2010-allocation`

###### Retired steel sieve (`spent_screen`)

Record only an actual retired counterpart and destination. Keep attached tobacco separate by non-additive measured composition; recovery is not an automatic avoided-steel credit.

Use `calc_normalize` once for the raw physical numerator and independently attributed environmental vector; keep the complete grossV/A/Q and source/route restrictions above in consumable context.

- Selected flow: Spent stainless-steel woven sieve screen
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the raw event records and the single normalisation operation specified in Section 8; preserve physical movements and independently attributed loads.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_maintenance`
- Sources: `stalwart-stem-supply`; `gltcl-stem-portfolio`; `jrc-ilcd-2010-allocation`

###### Wet-cleaning wastewater (`washwater`)

Conditional on actual wet cleaning. Measure this single aqueous waste stream with actual solids and destination; it is not manganese-slag washing water. COD/TOC/total nitrogen are indicators, not identified nicotine or another molecular emission; treatment occurs once under its actual owner.

Use `calc_normalize` once for the raw physical numerator and independently attributed environmental vector; keep the complete grossV/A/Q and source/route restrictions above in consumable context.

- Selected flow: Tobacco-stem handling cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the raw event records and the single normalisation operation specified in Section 8; preserve physical movements and independently attributed loads.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `stalwart-stem-supply`; `gltcl-stem-portfolio`; `jrc-ilcd-2010-allocation`

##### Elementary flows

###### Measured evaporation to air (`water_to_air`)

Conditional measured ordinary non-isotopic H2O, CAS 7732-18-5, emitted to air with unspecified subcompartment. Native synonym lists also contain heavy/tritiated water and ice terms; those do not authorise isotope, liquid or solid-water substitution. Do not use the lower-stratosphere/upper-troposphere sibling. Establish evaporation independently using actual humidity/air-flow or a constrained measured water balance; do not fit two unknowns to one residual.

Use `calc_normalize` once for the raw physical numerator and independently attributed environmental vector; keep the complete grossV/A/Q and source/route restrictions above in consumable context.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the raw event records and the single normalisation operation specified in Section 8; preserve physical movements and independently attributed loads.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `stalwart-stem-supply`

### Process: Released-stem holding, actual packing and dispatch (`supply_services`)

#### Inputs

##### Product flows

###### Purchased low-voltage electricity (`service_power`)

Meter this process and actual shared supporting equipment including idle/cleanup periods. Use the real regional voltage/supply provider once; a CN grid or hydropower-specific identity is not an automatic Zimbabwe/Bangladesh supply match. Do not add a second energy input for the same kWh.

Use `calc_normalize` once for the raw physical numerator and independently attributed environmental vector; keep the complete grossV/A/Q and source/route restrictions above in consumable context.

- Selected flow: Low-voltage alternating-current electricity
- Flow property / unit: Energy `f6811440-ee37-11de-8a39-0800200c9a66` / kWh
- Amount rule: Use the raw event records and the single normalisation operation specified in Section 8; preserve physical movements and independently attributed loads.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_service`
- Sources: `jrc-ilcd-2010-allocation`

###### Released material transferred to service stock (`released_stems_to_service`)

Receive the paired first-release transfer and its A vector once. This internal movement is not a fresh supplier purchase or second Q; previously released opening FG and external returned stems remain separately tagged with original Qc and burden lineage. Cancel only verified paired endpoints on consolidation.

Use `calc_normalize` once for the raw physical numerator and independently attributed environmental vector; keep the complete grossV/A/Q and source/route restrictions above in consumable context.

- Selected flow: Unblended redried FCV long tobacco stems
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the raw event records and the single normalisation operation specified in Section 8; preserve physical movements and independently attributed loads.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `stalwart-stem-supply`; `jrc-ilcd-2010-allocation`

###### External returned released stems (`returned_stems`)

Conditional actual return: preserve the original delivery reversal, original Qc, remaining inherited burdens and the fresh incremental work F. Reinspection creates no new output. Never pair a genuine new repair input with an unrelated outgoing quantity as a duplicate X.

Use `calc_normalize` once for the raw physical numerator and independently attributed environmental vector; keep the complete grossV/A/Q and source/route restrictions above in consumable context.

- Selected flow: Unblended redried FCV long tobacco stems
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the raw event records and the single normalisation operation specified in Section 8; preserve physical movements and independently attributed loads.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `jrc-ilcd-2010-allocation`

###### C48 tobacco export carton (`c48_carton`)

One complete supplied transport carton, with actual construction/composition, tare, provider and procurement recorded. Source C48 packing does not establish the lamina carton weight, fixed fibre fraction or liner for stems. Supplier identity must positively establish the actual export transport role. This card records purchases only; first non-purchased receipts and genuine same-article returns have separate cards. Internal reuse is not external receipt.

Use `calc_normalize` once for the raw physical numerator and independently attributed environmental vector; keep the complete grossV/A/Q and source/route restrictions above in consumable context.

- Selected flow: C48 paperboard tobacco export carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the raw event records and the single normalisation operation specified in Section 8; preserve physical movements and independently attributed loads.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `stalwart-stem-supply`; `gltcl-stem-portfolio`

###### Actual separate LDPE liner (`ldpe_liner`)

Conditional only when the actual stem package uses this single finished liner; confirm grade, form, thickness and composition without borrowing lamina packaging. A raw polyethylene resin identity does not establish a finished liner. This card records purchases only; first non-purchased receipts and genuine same-article returns have separate cards. Count the whole purchased article once; any additive assay is non-additive.

Use `calc_normalize` once for the raw physical numerator and independently attributed environmental vector; keep the complete grossV/A/Q and source/route restrictions above in consumable context.

- Selected flow: Finished low-density polyethylene carton liner
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the raw event records and the single normalisation operation specified in Section 8; preserve physical movements and independently attributed loads.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `stalwart-stem-supply`


###### First non-purchased external receipt of C48 carton (`carton_first_receipt`)

Record every first external receipt of this article with incoming material or by separate loan/free transfer, whether or not the material supplier inventory covers it. This is not a prior site dispatch return. Record actual ownership and any procurement, transport or service burden once; missing supplier coverage remains unresolved, never zero.

- Selected flow: C48 paperboard tobacco export carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the raw event records and the single normalisation operation specified in Section 8; preserve physical movements and independently attributed loads.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `stalwart-stem-supply`; `gltcl-stem-portfolio`


###### Traceable same-article return of C48 carton (`carton_return_in`)

Only classify as return when the same physical article is traceable to an earlier dispatch from this site. Retain its original load lineage and new transport/service once; unmatched receipts belong to first external receipts until evidence resolves them. Internal reuse creates no crossing.

- Selected flow: C48 paperboard tobacco export carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the raw event records and the single normalisation operation specified in Section 8; preserve physical movements and independently attributed loads.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `stalwart-stem-supply`; `gltcl-stem-portfolio`


###### First non-purchased external receipt of LDPE liner (`liner_first_receipt`)

Record every first external receipt of this article with incoming material or by separate loan/free transfer, whether or not the material supplier inventory covers it. This is not a prior site dispatch return. Record actual ownership and any procurement, transport or service burden once; missing supplier coverage remains unresolved, never zero.

- Selected flow: Finished low-density polyethylene carton liner
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the raw event records and the single normalisation operation specified in Section 8; preserve physical movements and independently attributed loads.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `stalwart-stem-supply`


###### Traceable same-article return of LDPE liner (`liner_return_in`)

Only classify as return when the same physical article is traceable to an earlier dispatch from this site. Retain its original load lineage and new transport/service once; unmatched receipts belong to first external receipts until evidence resolves them. Internal reuse creates no crossing.

- Selected flow: Finished low-density polyethylene carton liner
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the raw event records and the single normalisation operation specified in Section 8; preserve physical movements and independently attributed loads.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `stalwart-stem-supply`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Actual externally dispatched long stems (`shipped_stems`)

Measure gross physical external shipments S as net stem mass excluding packaging, with actual moisture and gross dispatch document. This is a service/delivery movement, not first production and not an extra saleable co-product on top of Q. Preserve separate opening/closing FG and return reversals; Q already includes conforming closing FG.

Use `calc_normalize` once for the raw physical numerator and independently attributed environmental vector; keep the complete grossV/A/Q and source/route restrictions above in consumable context.

- Selected flow: Unblended redried FCV long tobacco stems
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the raw event records and the single normalisation operation specified in Section 8; preserve physical movements and independently attributed loads.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `stalwart-stem-supply`; `gltcl-stem-portfolio`

###### External C48 carton return (`carton_return_out`)

Only an actual documented external return of this single article. Retain its physical gross quantity, attached-stock origin and inherited load owner. A return is neither fresh procurement, product Q nor automatic co-product credit; distinguish it from internal reuse and discarded waste. No reusable service life is assumed.

Use `calc_normalize` once for the raw physical numerator and independently attributed environmental vector; keep the complete grossV/A/Q and source/route restrictions above in consumable context.

- Selected flow: C48 paperboard tobacco export carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the raw event records and the single normalisation operation specified in Section 8; preserve physical movements and independently attributed loads.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `stalwart-stem-supply`; `gltcl-stem-portfolio`; `jrc-ilcd-2010-allocation`

###### External LDPE liner return (`liner_return_out`)

Only an actual documented external return of this single article. Retain its physical gross quantity, attached-stock origin and inherited load owner. A return is neither fresh procurement, product Q nor automatic co-product credit; distinguish it from internal reuse and discarded waste. No reusable service life is assumed.

Use `calc_normalize` once for the raw physical numerator and independently attributed environmental vector; keep the complete grossV/A/Q and source/route restrictions above in consumable context.

- Selected flow: Finished low-density polyethylene carton liner
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the raw event records and the single normalisation operation specified in Section 8; preserve physical movements and independently attributed loads.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `stalwart-stem-supply`; `gltcl-stem-portfolio`; `jrc-ilcd-2010-allocation`

##### Waste flows

###### Discarded C48 carton (`carton_waste`)

Weigh actual damaged/discarded carton separately, retaining contamination and treatment owner; do not treat disposal as an outgoing reusable return.

Use `calc_normalize` once for the raw physical numerator and independently attributed environmental vector; keep the complete grossV/A/Q and source/route restrictions above in consumable context.

- Selected flow: Discarded C48 paperboard tobacco carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the raw event records and the single normalisation operation specified in Section 8; preserve physical movements and independently attributed loads.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `stalwart-stem-supply`; `jrc-ilcd-2010-allocation`

###### Discarded LDPE liner (`liner_waste`)

Conditional on actual liner waste; keep polymer and attached tobacco/moisture as non-additive composition records. No avoided-resin credit or second purchase for internal reuse.

Use `calc_normalize` once for the raw physical numerator and independently attributed environmental vector; keep the complete grossV/A/Q and source/route restrictions above in consumable context.

- Selected flow: Discarded low-density polyethylene carton liner
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the raw event records and the single normalisation operation specified in Section 8; preserve physical movements and independently attributed loads.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `stalwart-stem-supply`; `jrc-ilcd-2010-allocation`

###### Stems discarded after release (`service_rejected_stems`)

Keep storage/return contamination losses with original release identity/Qc and inherited A plus actual incremental service burdens. Do not silently reduce current Q or assign all old-FG burdens to current fresh production.

Use `calc_normalize` once for the raw physical numerator and independently attributed environmental vector; keep the complete grossV/A/Q and source/route restrictions above in consumable context.

- Selected flow: Discarded contaminated FCV long tobacco stems
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the raw event records and the single normalisation operation specified in Section 8; preserve physical movements and independently attributed loads.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `stalwart-stem-supply`; `jrc-ilcd-2010-allocation`

##### Elementary flows

For each carton, liner and any actual pallet or other article, reconcile the disjoint purchase, first non-purchased external receipt and same-article return channels. Add a separate atomic card for each actual unlisted article and movement; do not assume a pallet exists. Pair internal reuse. Record outgoing attached packaging and its stock owner without a second purchase; trace actual upstream coverage and incremental transport/service once, with supplier gaps explicit.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_owner` | pre-handoff supplier | Require the supplier to identify the actual joint leaf/stem separation process and the single upstream owner. Preserve its substantiated attributional allocation once. Collection/grading/dispatch dedicated to stems belongs to stems; later lamina/cigarette-only operations do not. If separation is actually inside the foreground, extend it with the complete parent leaf, lamina, stems, dust, water/steam, other actual residues and losses rather than importing already allocated stems too. | `stalwart-stem-supply`; `jrc-ilcd-2010-allocation` |
| `allocation_hierarchy` | genuinely joint environmental loads | For attributional studies only: first direct assignment and actual or virtual subdivision; next establish an exchange-specific determining physical causal relationship. Only genuinely remaining loads may use contemporaneous market values of all co-functions at the same joint-process gate in their actual state. Derive gate-equivalent values from later sales by removing documented dedicated handling/conditioning/packing/transport. Do not choose mass/economic allocation freely or impose fixed shares; test sensitivity and preserve the 100 percent load reconciliation. | `jrc-ilcd-2010-allocation` |
| `allocation_physical` | grossV and residual outputs | Allocation partitions environmental A only. Keep all actual physical products, waste, captured solids and emissions unscaled in grossV. Composition subledgers do not duplicate the complete material. Reuse/sale/refuse status creates no automatic zero burden, recovery fraction or substitution credit. | `jrc-ilcd-2010-allocation` |
| `allocation_stock` | stocks and returns | Carry physical raw/WIP/FG stocks and each inherited A vector separately by lot. Assign current-batch post-release services to their first-release Q once; opening previously released FG and returns retain original Qc and history. Keep real fresh incremental work F; X may remove only a proven duplicate within OTHER on the same ledger side. Q = 0 retains all actual flows and load ownership and yields no unit result. H is an observation window, not another divisor. | `jrc-ilcd-2010-allocation` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

Collect only original unnormalised records. Every aggregation basis below refers to `calc_normalize` and its sole division step; the collection stage performs no division. First compute original-unit conversions and actual attribution while preserving grossV. Each lot/exchange carries its original Qc, H and inherited vector; post-release service for old FG does not become current production.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material` | `stem_preparation` | stem hand-off and separated lamina | raw_record | event ID; material identity; supplier; crop/origin; curing/redrying/conditioning; actual operation; gross/tare/net wet mass; measured moisture/basis; long-stem size; lamina/fines/foreign matter; Product/Waste status; upstream provider; inherited A; raw/WIP opening/closing mass and A | Calibrated weighment and representative laboratory/sieve tests plus supplier boundary and receiving-use documents. Collect original unnormalised event records, including rejected receipts; separate components without adding them to the whole. | kg | Each event/lot; reconcile the complete H | One coherent full reporting window H including all operating states | Every included boundary and its supporting equipment | per 1 kg reference flow | Scale calibration; sampling/test reports; chain of custody; allocation file |
| `cp_release` | `stem_preparation` | sole first-release Q | raw_record | lot ID; first-release time and gate; gross/tare/net mass; measured release moisture; receiver specification/result; prior release ID; original Qc; opening/closing WIP and FG; failure/rework/repeat flags | Weigh the complete accepted material on a calibrated scale excluding packaging, test its moisture/grade and reconcile unique first releases to WIP and FG. Include conforming closing FG; collect raw release masses before any division. | kg | Each event/lot; reconcile the complete H | One coherent full reporting window H including all operating states | Every included boundary and its supporting equipment | per 1 kg reference flow | Acceptance certificates; scale/tare records; unique batch/release registry |
| `cp_water` | `stem_preparation` | tap water; wastewater; atmospheric H2O | raw_record | separate stream ID/direction; substance/phase; native meter units; integrated volume versus rate; temperature/pressure; independent density; humidity and air volume; timing; wet mass/moisture stocks; wastewater composition/destination; actual identified species | Collect raw water/aqueous weighments or independent actual-state volume-density measurements and upstream/downstream humidity with gas volume. Keep measured species separate from COD/TOC/total nitrogen and PM indicators. Check independent water/solids/element balances; one residual cannot determine two unknown transfers. | kg | Each event/lot; reconcile the complete H | One coherent full reporting window H including all operating states | Every included boundary and its supporting equipment | per 1 kg reference flow | Meter and sampling calibration; laboratory reports; actual-state density and balance uncertainty |
| `cp_maintenance` | `stem_preparation` | each replacement sieve | raw_record | new article ID/grade/form; gross/tare/net kg; old screen ID/kg; service and failure date; downtime; attached tobacco; extra real repair water/material/energy F; provider and treatment owner | Use actual purchase/issue/retirement and repair records; weigh each supplied replacement and retired article; add individually identified fresh repair exchanges rather than subtracting them as X. | kg | Each event/lot; reconcile the complete H | One coherent full reporting window H including all operating states | Every included boundary and its supporting equipment | per 1 kg reference flow | Purchase/issue records; service report; weighment; waste destination |
| `cp_residuals` | `stem_preparation` | each solid residual at actual destination | raw_record | event/lot; single material; gross/tare/net mass; moisture; cause; captured versus emitted; return/rework; receiver/treatment owner; original Qc; attached component analyses | Weigh each segregated container and record failed, contaminated and zero-output periods; retain dust as collected solids and record actual species/medium separately if environmental release is established. | kg | Each event/lot; reconcile the complete H | One coherent full reporting window H including all operating states | Every included boundary and its supporting equipment | per 1 kg reference flow | Container tickets; sampling; operating logs; receiving/treatment records |
| `cp_service` | `supply_services` | FG movements and service load lineage | raw_record | lot; paired transfer ID; first release Q; original Qc; opening/closing FG wet mass/moisture and A; gross external shipments S; returned receipts R; original delivery reversal; reinspection; failed storage lot; real new work F; OTHER same-side duplicate X; single burden owner | Reconcile every stock movement and shipment/return document with the original release and A vector. Preserve all raw service events before normalisation; current and historical cohorts stay distinguishable. Delivery and reinspection do not create Q. | kg | Each event/lot; reconcile the complete H | One coherent full reporting window H including all operating states | Every included boundary and its supporting equipment | per 1 kg reference flow | FG register; dispatch and return documents; paired transfer proof; inherited-burden ledger |
| `cp_packaging` | `supply_services` | one material per packaging ledger | raw_record | single article composition/grade; unit tare or measured mass; empty opening stock; attached opening WIP/FG; reusable opening stock; fresh purchases; first non-purchased external receipts (arriving with material, borrowed or freely transferred); traceable same-article returns received; corresponding closing stocks; gross physical dispatch-out; external return-out; waste; internal reuse; actual provider; inherited A | Reconcile each packaging article independently across empty, attached and reusable stocks. Weigh actual supplied articles or traceable count × independently measured unit tare; do not infer mass from C48 naming or source net tobacco pack weights. Keep internal reuse paired and purchases counted once. | kg | Each event/lot; reconcile the complete H | One coherent full reporting window H including all operating states | Every included boundary and its supporting equipment | per 1 kg reference flow | BOM; actual unit-mass checks; stock/return/dispatch/waste tickets; provider records |
| `cp_energy_preparation` | `stem_preparation` | each process electricity | raw_record | meter IDs; start/end kWh; timestamp; voltage; supplier/geography; process; equipment states; idle/start/stop/cleanup; raw shared load; subdivision/causal driver; per-lot A; service original Qc | Collect meter differences and traceable equipment records in original units; retain shared gross readings before assigning attributable loads. Record actual new energy inputs separately and never infer a boiler from an electricity record. | kWh | Each event/lot; reconcile the complete H | One coherent full reporting window H including all operating states | Every included boundary and its supporting equipment | per 1 kg reference flow | Meter certificates; invoices; complete operating-state and assignment logs |
| `cp_energy_service` | `supply_services` | each process electricity | raw_record | meter IDs; start/end kWh; timestamp; voltage; supplier/geography; process; equipment states; idle/start/stop/cleanup; raw shared load; subdivision/causal driver; per-lot A; service original Qc | Collect meter differences and traceable equipment records in original units; retain shared gross readings before assigning attributable loads. Record actual new energy inputs separately and never infer a boiler from an electricity record. | kWh | Each event/lot; reconcile the complete H | One coherent full reporting window H including all operating states | Every included boundary and its supporting equipment | per 1 kg reference flow | Meter certificates; invoices; complete operating-state and assignment logs |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_unit_prepare` | raw numerators | Convert only documented original units; rate integration uses its actual interval once; keep cumulative volumes unchanged; measured mass = volume × independently measured same-substance actual-state density. | raw value; raw unit; rate interval; independent density/state; conversion evidence | grossV in declared native reporting units | `jrc-ilcd-2010-allocation` |
| `calc_assignment` | environmental inventory vectors | A = inherited attributable opening/upstream load + attributable real fresh F + assigned joint-process load - attributable closing load - documented transferred/reversed load - proven same-side duplicate X; follow Section 7. Do not apply this partition to grossV. Keep original Qc/H and each exchange vector; provider/treatment owner once. | opening A; upstream A; F; joint-load drivers; closing A; transfer/reversal A; OTHER duplicate X | A | `jrc-ilcd-2010-allocation` |
| `calc_normalize` | all inventory rows | After actual cohort selection (current first-release Q or original historical Qc), for the selected Q > 0 only: physical unit record = grossV / Q; environmental unit record = A / Q. These are parallel ledgers, never consecutive divisions; each numerator is divided once. The reference output is 1 kg. Q = 0 retains real raw flows/load ownership without a unit result. H, Qc, moisture, nicotine and dry matter are not extra divisors. | grossV; A; Q; original Qc; cohort identity | parallel unit physical and environmental records | `jrc-ilcd-2010-allocation` |
| `calc_manufacturing_balance` | manufacturing material gate | Opening raw/WIP + all physical receipts + actual uptake/additions = closing raw/WIP + first-release Q + separately measured material outputs/losses. Reconcile wet total mass, independent water/dry matter and relevant elements with actual species/state evidence; do not multiply any physical term by allocation shares. | opening raw/WIP; receipts; uptake/additions; closing raw/WIP; Q; atomic outputs/losses | manufacturing closure and uncertainty | `stalwart-stem-supply` |
| `calc_fg_balance` | FG service gate and consolidation | Opening FG + paired current-release transfer + external returns received + actual additions = closing FG + gross external shipments + externally discarded material + other real physical exits. Q already contains current conforming closing FG. On consolidation cancel paired internal Q endpoints; do not add closing FG to Q again. Keep return reversals and original Qc/A independent from current first production. | opening FG; paired Q transfer; returns; additions; closing FG; gross shipments; atomic exits | FG and consolidated physical closure | `stalwart-stem-supply`; `jrc-ilcd-2010-allocation` |
| `calc_package_balance` | each packaging article | Opening empty + opening attached WIP/FG + opening reusable + fresh purchases + first non-purchased external receipts + traceable same-article returns received = corresponding closing stocks + packaging with gross physical dispatch + external return-out + waste. Internal reuse cancels; packaging is excluded from product Q, repeated purchases and automatic co-product credits. | opening packaging stocks; purchases; external receipts; closing stocks; dispatch packaging; external returns; waste | per-article physical closure | `stalwart-stem-supply`; `gltcl-stem-portfolio` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | material and receiver | Establish every reference qualifier and actual industrial acceptance. A native family may support the narrow use only with positive whole-object compatibility, including curing, stem versus leaf/dust, processing state and supply/receiver function. No adjacent UUID may substitute for missing core identity. | Actual supplier and receiver records; native-object audit |
| `dq_sources` | external evidence | Sources are qualitative commercial descriptions plus independent allocation guidance. Stalwart FCV long-stem state is not a GLTCL factory batch. Do not transfer lamina, cut-rag, CRES, dust or historical specification numbers to this material. | Source-specific scope/state/scale/period review |
| `dq_completeness` | all foreground records | Use complete coherent H and all operating states; each applicable atomic exchange has original-unit records, burden owner and inclusion decision. Unmeasured core physical/chemical transfers remain unknown, not zero; measure independent quantities before declaring a balance closed. | Raw logs; uncertainty; stock and species/element closures |
| `dq_provider` | background and treatment links | Verify each actual regional/technology provider separately from flow identity. Ordinary missing provider, packaging grade or auxiliary UUID requires collection/review and does not by itself disprove the stem material; a true core identity or route contradiction blocks finalisation. | Supplier datasets; treatment documents; explicit gap register |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_core_identity` | reference product and transfer rows | Require a verified compatible Product identity for the whole unmanufactured long-stem material before finalisation. Green/whole/stripped leaf, formulated tobacco, reconstituted/extracted residue, cellulose, wood, cigarette and dust Waste identities do not qualify. A successful read or CPC code alone does not establish applicability. | `unsd-cpc3-2025`; `stalwart-stem-supply`; `gltcl-stem-portfolio` |
| `validate_reference` | sole Q and normalisation | Require the linked first-release row to be 1 kg at the same measured moisture/state in both languages. Reject shipment/closing-FG double production, repeat releases, dry-matter/component denominators and more than one division by Q. Retain Q = 0 loads without a unit result. | `stalwart-stem-supply`; `jrc-ilcd-2010-allocation` |
| `validate_ledgers` | manufacturing, FG and combined gates | Require complete grossV, water/dry-matter and relevant-element reconciliation independently of attributed A. Keep physical and load stocks distinct, pair internal transfer endpoints, retain historical FG/return Qc/A, and document real F and only same-side OTHER duplicate X. Do not fit missing water and solids/species to one residual. | `jrc-ilcd-2010-allocation` |
| `validate_atomicity` | all actual operations | Reject collective selected flows and omitted actual utilities/materials/emissions. One complete purchased formulation/article is purchased once; carrier water and assays are non-additive subledgers. On-site mixing adds each purchased input and actual energy/loss separately. Captured dust is not atmospheric nicotine; COD/TOC/total nitrogen and PM indicators do not identify molecular species. | `stalwart-stem-supply`; `gltcl-stem-portfolio` |
| `validate_packaging` | each actual package | Require the complete empty/attached/reusable opening/closing ledger plus purchases, first non-purchased external receipts and traceable same-article return receipts, gross dispatch-out, external return-out and waste. Verify actual article composition and tare; internal reuse cancels and cannot inflate Q or purchases. | `stalwart-stem-supply`; `gltcl-stem-portfolio` |
| `validate_allocation` | supplier and common-process loads | Require Section 7 attributional hierarchy, substantiated single upstream carry-in, exchange-specific causal tests and common-gate actual-state market evidence for residual allocation only. Dedicated downstream leaf/cigarette operations and default avoided-fuel/extraction credits are rejected. | `jrc-ilcd-2010-allocation` |
| `validate_route_and_quality` | applicability and uncertainty | Any actual unlisted operation, unidentified important emission, missing core hand-off/terminal evidence or unresolved mass/species relationship requires explicit review/extension. Ordinary foreground measurements remain collection requirements; engineering checks establish neither scientific approval nor translation approval. | `stalwart-stem-supply`; `jrc-ilcd-2010-allocation` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Attributional foreground unit-process guidance for one qualified long-stem residual supply. |
| downstream_use | A matching industrial receiver may link the complete material once as a secondary/background input after core identity and provider review. |
| allowed_use | Declared separated/redried/conditioned FCV long-stem state, receiver specification, first-release Q and documented hand-off. |
| excluded_use | Universal tobacco-refuse coverage; leaf/dust blends; extracted/expanded/formed products; downstream yield, nicotine concentration, fuel function or automatic substitution credit. |
| required_metadata | FCV tobacco type and botanical identity; origin and crop year; flue-curing location and history; supplier and separation hand-off; redrying and conditioning history; long-stem midrib form and size specification; no deliberate lamina/dust blending; expansion/flavouring/extraction/agglomeration status; measured moisture and test basis; net supplied mass and dry-matter bridge; lamina and fines content; foreign matter and contamination acceptance; declared industrial receiver use and acceptance specification; Product/Waste decision and treatment owner; package composition and tare; first-release lot identity and gate; reporting period and facility geography; upstream burden owner and allocation evidence; opening/closing WIP and FG with inherited load vectors; return lineage and original Qc |
| required_quality_disclosure | Native identity/provider compatibility; raw physical and inherited-load ledgers; uncertainty and missing measurements; allocation; actual route extensions; source scope and unreviewed methodological/translation state. |
| update_trigger | Change of curing/redrying state, raw tobacco type, stem/leaf/fines boundary, processing route, receiving use/specification, supplier burden coverage, package, stock/return accounting or allocation evidence. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-2025` | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | UNSD, CPC Ver. 3.0 explanatory notes (30 June 2025), pp. 116 and 199–200; CPC 01970, 25010/25020/25091/25092 and 39180 context. Classification labels do not specify stem manufacture or prove native flow applicability. |
| `stalwart-stem-supply` | literature | https://stalwarttobacco.com/ | Manufacturer/merchant product and operations page, undated snapshot: GLT separation/redrying, FCV long versus short midribs, buyer-specific moisture/foreign matter and C48 supply; fines, cut-rag and lamina contrasts. Qualitative supply evidence, not an audited lot or universal numeric specification. |
| `gltcl-stem-portfolio` | literature | https://gltcbd.com/our_products | GLTCL Product Portfolio, complete undated page: separately graded stems/scrap, industrial export application, and separate CRES/lamina/cut-rag/cigarette product states. Do not transfer listed net pack weights, blend ratios, chemistry or filling values to this method. |
| `jrc-ilcd-2010-allocation` | official_guidance | https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | JRC ILCD Handbook, first edition March 2010, §§7.9.2–7.9.3, printed pp.255–272 (PDF275–292): attributional subdivision/virtual subdivision, exchange-specific determining physical causality, residual economic values at actual joint-process state/gate and 100 percent load reconciliation. No industrial tobacco specification, numeric yield or default recovery credit. |
| `unsd-cpc3-2026` | official_guidance | https://unsdsna.azure-api.net/files/pages/cpc/CPC_Ver3_Exp_Notes_2026-10-23_for_Website.xlsx | October 2026 CPC3 row 1876, HS 2022 2401.30; classification only; frozen coordinate unchanged. |
| `cbp-stems-961890` | official_guidance | https://rulings.cbp.gov/ruling/961890 | HQ 961890, 17 September 1998, material distinction for flue-cured uncut/unground/unpulverised stems; no current tariff/use claim. |
| `cbp-puffed-stems-h185715` | official_guidance | https://rulings.cbp.gov/ruling/H185715 | HQ H185715, 13 April 2012, puffing route counterexample and limits of processing contrasts; not evidence that all rolled stems leave 2401. |
| `hmrc-tobacco-scope` | official_guidance | https://www.gov.uk/guidance/classifying-tobacco | Raw/unmanufactured tobacco section, updated 7 August 2023; midribs/stems and smoking-preparation contrast only. |
| `dimon-processing-2004` | literature | https://www.sec.gov/Archives/edgar/data/939930/000093993004000026/f10k2004.htm | DIMON 2004 filing, ITEM 1 BUSINESS, Processing: historical industrial redrying and separate stem packing; multiple tobaccos/formats, no same-lot quantitative transfer. |
| `cbp-cigar-midribs-n026926` | official_guidance | https://rulings.cbp.gov/ruling/N026926 | NY N026926, 12 May 2008, actual dried cigar-leaf midrib samples, not purposefully cut/ground/pulverised. State/form countercheck only; cigar variety, sample lengths, downstream use and duty treatment do not establish FCV specifications. |
