---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.polishes-and-creams-for-footwear-furniture-floors-coachwork-glass-or-metal
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Rice-wax and petroleum-paraffin solvent polishing paste

## 1. Scope and Applicability

This method covers colourless, non-aqueous rice-bran-wax/petroleum-paraffin polishing paste containing separately purchased refined rice wax, macrocrystalline petroleum paraffin, microcrystalline petroleum paraffin, polyethylene wax, esterified montan wax and white spirit. The foreground physically melts the wax ingredients, dissolves them in the solvent, cools, fills, checks, stores and hands over the solvent-retaining paste at the reporting plant. A concrete recipe and receiving use must be qualified; use labels alone do not define separate methods.

Exclude unformulated wax, solvent-free solid prepared wax, aqueous emulsions, acrylic-resin polishes, abrasive pastes, dye addition, aerosols, candles and onsite wax extraction/refining, polymerization, esterification, saponification or salt formation. Those transformations require independently evidenced extensions. Upstream purchased-wax treatments remain in their supplier inventories. Do not replace this method by a solid-wax method merely because it shares some wax inputs.

Clariant US20160060463A1, paragraph 0034 and Tables 1–2, supplies a laboratory example of these materials and hot dissolution followed by cooling/filling; it does not establish an industrial recipe, plant operating setpoints, mass yield, density, solids specification, energy intensity or present supplier. Its open-tin retention and shine tests are not manufacturing emission factors, polishing lifetime or service equivalence. WHO EHC187 distinguishes white-spirit vapour composition from liquid composition. All actual quantities and acceptance limits come from the protocols below.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.polishes-and-creams-for-footwear-furniture-floors-coachwork-glass-or-metal |
| classification_refs | CPC3.0:35333; narrower |
| covered_products | Colourless solvent-retaining rice-wax/petroleum-paraffin paste with purchased PE and esterified montan wax, qualified for actual receiver care use. |
| excluded_products | Exclude unformulated wax, solvent-free solid prepared wax, aqueous emulsions, acrylic-resin polishes, abrasive pastes, dye addition, aerosols, candles and onsite wax extraction/refining, polymerization, esterification, saponification or salt formation. Those transformations require independently evidenced extensions. Upstream purchased-wax treatments remain in their supplier inventories. Do not replace this method by a solid-wax method merely because it shares some wax inputs. |
| representative_product | One actual SKU within the six-material hot-dissolution route illustrated by Clariant Table2; no generic formulation. |
| production_route | Receipt → melt separately specified waxes → dissolve in white spirit → cool/fill → test/release P → warehouse/handling → actual net plant handover Q. |
| market_state | Non-aqueous solvent-retaining paste; actual phase, solids/water/solvent, temperature and acceptance specified; packaging outside reference mass. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Qualified solvent polishing paste at actual accepted plant handover. |
| How much | 1 kg |
| How well | Declared actual SKU specification, measured retained solvent/solids/water/phase and intended receiver use; no performance-equivalence claim. |
| How long or cycle | Complete actual reporting interval and linked carried cohorts; no polishing lifetime. |
| reference_flow_link | paste_ref |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Polishes and creams, for footwear, furniture, floors, coachwork, glass or metal `cf3e3bd0-5658-47b0-9630-629015baac7a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | recipe/SKU and individual whole purchased material identities; rice origin/refinement and petroleum/PE/montan routes and grades; actual solids/water/retained solvent/density/temperature/phase; intended receiver use; acceptance tests; plant and reporting period; net handover gate and P/G/R/Q; raw/WIP/finished/return stocks and carried burdens; utilities/controls; packaging/logistics; native limitations and paraffin classification debt; providers/allocation |

The reference is a broad manufactured finished Product flow, production mix at plant. All native name components, including its broad application list, apply; the comment is generic. No CAS, formula, grade/composition, geography/locationOfSupply or environmental medium is specified; Mass is the only declared property. It can identify the contained qualified paste but proves no formulation, factory, provider, application performance or geographic mix. Preserve the official Chinese basename, including its awkward coachwork wording, without interpreting it as an additional manufacturing route.

Both paraffin cards use the same broad petroleum-fraction Paraffin wax identity at plant. Its full name includes 39.9MJ; this is not adopted as a heat factor or density. CAS, formula, crystallinity, refining grade and geography/locationOfSupply are absent; the comment is empty, and Mass is its only property. Actual macro-/microcrystalline grades remain separate physical inputs verified by supplier records. Its active crude-petroleum CPC12010 classification and preserved source classification399 conflict with the paraffin physical name/route; retain this metadata debt for source-owner clarification. A waste-plastic chemical-recycling wax is a contrary route and is not substituted.

The terminal gate is actual net accepted handover at the plant, not newly quality-released production. Let G be uniquely identified gross outward accepted paste mass after package tare, R the linked returned/credit-reversed mass, and Q = G - R > 0 for the matched delivered cohort. A return and reacceptance is one physical cohort, not new production or a second counted delivery. Keep first-release P separately, excluding already released returned/reworked material. Do not assume P = Q. A different offsite delivered gate requires explicit transport and storage scope and a compatible reference identity.

Record raw-material, WIP and finished-goods opening/closing mass with their carried exchange inventories. Production records transfer P into the finished store; the finished store records Q, returns and closing stock. Cancel P as an internal transfer when consolidating; do not add its same-batch closing stock as a second production output. Undelivered finished goods are outside Q but retain their attributable carried burdens. Keep warehouse, packaging, handling, dispatch, failed/zero-output campaigns, cleaning and rework burdens in their real accounts; no burden disappears at a stock or return boundary. Use cohort-linked stock attribution before the sole normalization calc_normalize.

Every required qualifier must be declared in the dataset or equivalent product/process records; a missing qualifier makes applicability incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | paste_ref | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use 1 kg net actual delivered whole paste, after tare, with retained solvent/water; do not replace Q by dry wax, constituents, P or inventory. |
| liquid_conversion | liquid and molten rows | Mass | kg | Require actual lot density and measured temperature for a volume-to-mass conversion; no secondary property coefficient or generic recipe density. |
| integrated_volume | cp_residuals and cp_utilities | Volume | m3 | Rate multiplied/integrated over matching duration is valid; already integrated volume must not receive another time factor. Preserve gas composition and T/P, dry/wet basis. |
| normalize_once | all inventory rows | Actual row property | row unit per 1 kg reference flow | Collect undivided actual-period numerators, then convert, allocate and carry stock burdens; calc_normalize is the only division by Q, shared by card and aggregation wording. |
| water_species | physical and species ledgers | Mass | kg | The selected foreground is physical melting, dissolution and cooling. Melting/solidification, dissolution and solvent evaporation are phase/structural changes, not chemical reaction-water generation or consumption. Purchased esterified montan wax carries its actual upstream reaction inventory, not an invented onsite water term. Reconcile total physical mass and supported element balances separately from independently evidenced molecular species and water. No COD-equivalent closure, assumed VOC fraction or two unknown residual-fitted outlets. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Receipt of separately specified waxes, white spirit, actual utilities and packaging with their upstream inventories; no onsite wax synthesis assumed. |
| starting_condition_role | Physical foreground handover, with purchased-input burdens linked rather than reset. |
| product_classification_scope | Only the qualified solvent paste subset of CPC3.0:35333; the narrower classification association is accepted by classifications/mappings/cpc-3.0-to-pcr.yaml and docs/adr/0424-accept-polishes-and-creams-for-footwear-furniture-floors-coachwork-glass-or-metal.md. The PCR remains candidate/authored; independent scientific and translation review remain pending and publication is not approved. |
| recursive_input_rule | Bought finished paste or an externally prepared wax blend is a whole commercial input with its prior burden; do not recreate that procurement from component subledgers or treat remelting as first manufacture. |
| upstream_dataset_requirement | Match each actual ingredient state/route/grade and supplier quantity basis, geography and time; broad identity does not validate a background provider. |
| disclosure | Recipe/SKU, retained solvent and measured solids/water, actual density/state and intended receiver use, site/period, P/G/R/Q, stocks and burden lineage, utilities, controls, packaging/logistics, native limits, allocation and gaps. |

The selected foreground is physical melting, dissolution and cooling. Melting/solidification, dissolution and solvent evaporation are phase/structural changes, not chemical reaction-water generation or consumption. Purchased esterified montan wax carries its actual upstream reaction inventory, not an invented onsite water term. Reconcile total physical mass and supported element balances separately from independently evidenced molecular species and water. No COD-equivalent closure, assumed VOC fraction or two unknown residual-fitted outlets.

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_operations | paste_delivery | Include receipt, melting/dissolution, cooling, filling/quality control, finished warehouse, onsite handling and plant handover, rework, failed runs, cleaning and installed pollution controls. Identify actual inbound transport and downstream freight interfaces; retain any real service already included and disclose which gate owns it. | clariant-pastes-2016 |
| b_purchase | ingredient inputs | A whole purchased solution, dispersion or wax blend is procured once at supplied mass. Its assayed wax/active, solvent, water and additives are constituent subledgers, not extra purchases. This route uses separate purchases, so use their actual individual charges; no universal recipe. |  |
| b_controls | emissions and treatment | Collect capture, recycle, destruction and release separately for every actual solvent species and medium. Retained solvent in delivered paste is product content; later customer evaporation is outside this manufacturing gate. Offgas transferred to an external treatment provider is a waste transfer, not simultaneously a direct air release. | who-white-spirit-1996 |
| b_stocks | all rows | Record raw-material, WIP and finished-goods opening/closing mass with their carried exchange inventories. Production records transfer P into the finished store; the finished store records Q, returns and closing stock. Cancel P as an internal transfer when consolidating; do not add its same-batch closing stock as a second production output. Undelivered finished goods are outside Q but retain their attributable carried burdens. Keep warehouse, packaging, handling, dispatch, failed/zero-output campaigns, cleaning and rework burdens in their real accounts; no burden disappears at a stock or return boundary. Use cohort-linked stock attribution before the sole normalization calc_normalize. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| paste_delivery | Solvent paste manufacture and plant handover | required | Qualified six-material physical hot-dissolution route | foreground_production | 1 kg net delivered whole paste |

Keep separate stage logs for melt/dissolve, cool/fill, first release P, warehouse and handover Q within this consolidated external inventory. Preserve real intermediates/co-products in stage ledgers and their identities; cancel only internal transfers. Conditional rows are not assumed zero and do not cap inventory coverage.

### Process: Solvent paste manufacture and plant handover (`paste_delivery`)

#### Inputs

##### Product flows

###### Refined rice-bran wax (`rice_wax`)

Record the whole purchased chemically unmodified rice-bran wax with actual oil/water and refinement state; no crude montan or soybean triglyceride substitution. Supplier identity is unresolved.

- Selected flow: Refined rice-bran wax
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: A_rice_wax / Q, reported once from the complete raw-period numerator after conversion, allocation and stock-carried attribution; no default amount.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_materials
- Sources: clariant-pastes-2016

###### Macrocrystalline petroleum paraffin (`macro_paraffin`)

One separate macrocrystalline petroleum-wax charge. Preserve every paraffin limitation and classification debt in section3; actual grade and provider are measured separately from the generic identity. Both paraffin cards use the same broad petroleum-fraction Paraffin wax identity at plant. Its full name includes 39.9MJ; this is not adopted as a heat factor or density. CAS, formula, crystallinity, refining grade and geography/locationOfSupply are absent; the comment is empty, and Mass is its only property. Actual macro-/microcrystalline grades remain separate physical inputs verified by supplier records. Its active crude-petroleum CPC12010 classification and preserved source classification399 conflict with the paraffin physical name/route; retain this metadata debt for source-owner clarification. A waste-plastic chemical-recycling wax is a contrary route and is not substituted.

- Selected flow: Paraffin wax `17bff97f-179d-49d4-9e97-5128bd6020a6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: A_macro_paraffin / Q, reported once from the complete raw-period numerator after conversion, allocation and stock-carried attribution; no default amount.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_materials
- Sources: clariant-pastes-2016

###### Microcrystalline petroleum paraffin (`micro_paraffin`)

One separate microcrystalline petroleum-wax charge; not a second recording of macro_paraffin. The broad UUID has no crystallinity qualifier; preserve the full section3 limits and require actual grade evidence. Both paraffin cards use the same broad petroleum-fraction Paraffin wax identity at plant. Its full name includes 39.9MJ; this is not adopted as a heat factor or density. CAS, formula, crystallinity, refining grade and geography/locationOfSupply are absent; the comment is empty, and Mass is its only property. Actual macro-/microcrystalline grades remain separate physical inputs verified by supplier records. Its active crude-petroleum CPC12010 classification and preserved source classification399 conflict with the paraffin physical name/route; retain this metadata debt for source-owner clarification. A waste-plastic chemical-recycling wax is a contrary route and is not substituted.

- Selected flow: Paraffin wax `17bff97f-179d-49d4-9e97-5128bd6020a6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: A_micro_paraffin / Q, reported once from the complete raw-period numerator after conversion, allocation and stock-carried attribution; no default amount.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_materials
- Sources: clariant-pastes-2016

###### Polyethylene wax (`pe_wax`)

Purchased polyethylene wax with actual grade and synthesis/recovery route; not polyethylene glycol and not arbitrary waste-plastic paraffin. No onsite polymerization.

- Selected flow: Polyethylene wax
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: A_pe_wax / Q, reported once from the complete raw-period numerator after conversion, allocation and stock-carried attribution; no default amount.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_materials
- Sources: clariant-pastes-2016

###### Esterified montan wax (`montan_ester`)

Whole separately purchased esterified refined montan wax; upstream esterification burdens belong to its provider. This is not crude montan wax or an onsite esterification reagent pair.

- Selected flow: Esterified refined montan wax
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: A_montan_ester / Q, reported once from the complete raw-period numerator after conversion, allocation and stock-carried attribution; no default amount.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_materials
- Sources: clariant-pastes-2016

###### White-spirit liquid carrier (`white_spirit`)

Whole purchased white-spirit liquid mixture with actual boiling/composition/grade and supplier route. Keep liquid and vapour compositions distinct; no generic density, aromatic fraction or evaporation percentage. Internal recovered solvent is a transfer, not another purchase.

- Selected flow: White spirit petroleum solvent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: A_white_spirit / Q, reported once from the complete raw-period numerator after conversion, allocation and stock-carried attribution; no default amount.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_materials
- Sources: clariant-pastes-2016;who-white-spirit-1996

###### Metered electricity (`electricity`)

Include actual heating, agitation, cooling/refrigeration, filling, controls, lighting, warehouse and electric handling shares. Convert kWh to MJ once; verify voltage and provider, not a national default.

- Selected flow: Electricity
- Flow property / unit: Energy / MJ
- Amount rule: A_electricity / Q, reported once from the complete raw-period numerator after conversion, allocation and stock-carried attribution; no default amount.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_utilities
- Sources:

###### Purchased saturated steam (`steam`)

Conditional on actual purchased steam heating. Meter supplied useful heat and actual condensate-return enthalpy consistently. Do not also add the steam provider fuel or duplicate electric heating. Other actual fuels/heat carriers need their own cards and emissions.

- Selected flow: Saturated steam, purchased
- Flow property / unit: Energy / MJ
- Amount rule: A_steam / Q, reported once from the complete raw-period numerator after conversion, allocation and stock-carried attribution; no default amount.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_utilities
- Sources:

###### Cooling-water make-up (`cooling_water`)

Only external make-up, not cumulative internal circulation. Record actual closed-loop inventories, bleed and evaporation; include refrigeration and any actual refrigerant separately when present.

- Selected flow: Cooling water, supplied
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: A_cooling_water / Q, reported once from the complete raw-period numerator after conversion, allocation and stock-carried attribution; no default amount.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_utilities
- Sources:

###### Polish tin body (`tin_body`)

One actual purchased can body including any supplied lining as part of that article. Weigh net package consumption and scrap; do not separately repurchase its embodied tin/steel/lining constituents.

- Selected flow: Tinplate polish can body
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: A_tin_body / Q, reported once from the complete raw-period numerator after conversion, allocation and stock-carried attribution; no default amount.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_packaging
- Sources:

###### Polish tin lid (`tin_lid`)

One separately recorded lid. Verify actual closure article/composition; do not add this row if the entire purchased can already includes its lid mass and burden.

- Selected flow: Tinplate polish can lid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: A_tin_lid / Q, reported once from the complete raw-period numerator after conversion, allocation and stock-carried attribution; no default amount.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_packaging
- Sources:

###### Corrugated shipping carton (`carton`)

Conditional on an actual carton; measure its supplied mass and supplier composition/recycled-content basis. Additional real labels/liners/pallets remain separate exchanges, never assumed absent.

- Selected flow: Corrugated cardboard shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: A_carton / Q, reported once from the complete raw-period numerator after conversion, allocation and stock-carried attribution; no default amount.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_packaging
- Sources:

###### Inbound road freight service (`freight`)

Actual inbound road service when inside the disclosed boundary: payload net mass times travelled distance with route/return-load basis. Do not count both an embedded supplier delivered service and this same freight again. Onsite warehouse/loading services remain included even if freight is outside scope.

- Selected flow: Road freight transport
- Flow property / unit: Transport service / tkm
- Amount rule: A_freight / Q, reported once from the complete raw-period numerator after conversion, allocation and stock-carried attribution; no default amount.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_logistics
- Sources:

###### Cleaning water (`cleaning_water`)

Actual separately supplied cleaning water, conditional on that cleaning method; not a constituent added by default to the non-aqueous recipe or a duplicate of cooling make-up.

- Selected flow: Process cleaning water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: A_cleaning_water / Q, reported once from the complete raw-period numerator after conversion, allocation and stock-carried attribution; no default amount.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_utilities
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net accepted plant-handover paste (`paste_ref`)

Only terminal complete solvent-retaining paste after tare, subject to all native limits in section3. Q is actual net delivered mass, not dry wax/active content, newly released P or held inventory. The shared generic reference identity does not confer a recipe or receiver approval. The reference is a broad manufactured finished Product flow, production mix at plant. All native name components, including its broad application list, apply; the comment is generic. No CAS, formula, grade/composition, geography/locationOfSupply or environmental medium is specified; Mass is the only declared property. It can identify the contained qualified paste but proves no formulation, factory, provider, application performance or geographic mix. Preserve the official Chinese basename, including its awkward coachwork wording, without interpreting it as an additional manufacturing route.

- Selected flow: Polishes and creams, for footwear, furniture, floors, coachwork, glass or metal `cf3e3bd0-5658-47b0-9630-629015baac7a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: fixed_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: method_formula
- Collection protocol: cp_output
- Sources: clariant-pastes-2016

##### Waste flows

###### Discarded solvent-wax paste (`paste_waste`)

Measure real discarded paste/heel with retained solvent and wax; internal rework is not simultaneously waste. Assign actual receiver/treatment and avoid a second direct release of solvent still in transferred waste.

- Selected flow: Waste solvent-containing wax paste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: A_paste_waste / Q, reported once from the complete raw-period numerator after conversion, allocation and stock-carried attribution; no default amount.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_residuals
- Sources:

###### Cleaning wastewater (`wash_water`)

When aqueous cleaning occurs, measure external cleaning-water input separately and the actual wastewater quantity/contaminants, treatment destination and stocks. It is not reaction water or already treated elementary water emission.

- Selected flow: Wax-contaminated cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: A_wash_water / Q, reported once from the complete raw-period numerator after conversion, allocation and stock-carried attribution; no default amount.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_residuals
- Sources:

##### Elementary flows

###### Measured n-nonane release to air (`nonane_air`)

Conditional example of one identified hydrocarbon species after controls, only if actual solvent analysis/monitoring proves it. Never assign the complete white-spirit vapour mass to n-nonane. Add every other real species individually with its actual medium, including actual refrigerant/combustion releases. No inferred default presence or amount.

- Selected flow: n-Nonane to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: A_nonane_air / Q, reported once from the complete raw-period numerator after conversion, allocation and stock-carried attribution; no default amount.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_residuals
- Sources: who-white-spirit-1996

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_direct | all rows | Prefer subdivision and direct metering of this recipe/cohort. Allocate shared heat, electricity, warehouse and loading by an evidenced causal driver; retain raw whole-plant totals, driver units, attribution and sensitivity. Apply each allocation once before stock attribution and normalization. |  |
| a_outputs | real co-products and residues | No coproduct is assumed. Rejects, waste and internal recovered solvent are not invented valuable coproducts. If a real marketable coproduct crosses the boundary, preserve its own atomic row/identity, measure it and justify physical or other allocation; do not hide it by renaming a shared UUID. Gross mass balance is independent of environmental allocation. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

Retain undivided totals at collection. For reporting per 1 kg reference flow, invoke the sole calc_normalize after calc_stock; this is the same operation as each card formula, not another division.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | paste_delivery | plant handover and release | original period and lot records | owner: dispatch manager; SKU/lot; handover event; gross/tare/net G; return/credit links R; receiving acceptance; first-release P; time; gate | Retain undivided dated weights and acceptance/return ledgers. Link physical lots and eliminate duplicate event IDs; record P separately from delivery. A reaccepted return is not a new production run. No division by Q. | kg | each transfer and interval close | complete actual interval plus linked carried cohorts | declared plant and its documented supplier/receiver interfaces | per 1 kg reference flow | calibrated scales; signed handover and credits; lot lineage |
| cp_materials | paste_delivery | individual commercial ingredients | original period and lot records | owner: batch supervisor; input SKU/lot; actual supplied mass; rate/duration if relevant; density and temperature if volumetric; measured composition/solids/water; route/grade; returns; purchases/issues; failed runs | Retain complete unnormalized receipts/issues, weigh tickets and all batch charges including failed/zero-output and rework. Mark whole formulations and constituent subledgers. No formula substituted for measurement and no A/Q at collection. | kg; measured composition units | each lot/batch and reporting interval | complete actual interval plus linked carried cohorts | declared plant and its documented supplier/receiver interfaces | per 1 kg reference flow | supplier CoA/SDS; recipe revisions; raw scales and issue records |
| cp_stock | paste_delivery | raw, WIP, finished and return stocks | original period and lot records | owner: inventory accountant; opening/closing mass by lot/state; actual recipe content; exchange-vector carried burdens; internal P and rework transfers; returns; discarded stock; warehouse service totals | Keep undivided physical stock counts and historical carried exchange inventories. Identify production/warehouse/return boundaries and internal transfer IDs. Preserve burdens on undelivered stock and all failed campaigns; no current-period burden reset, equal-P/Q assumption or normalization. | kg; exchange-specific burden units | opening/closing; every stock/return event | complete actual interval plus linked carried cohorts | declared plant and its documented supplier/receiver interfaces | per 1 kg reference flow | stock reconciliation; versioned cohort burden vectors; rework trace |
| cp_utilities | paste_delivery | each utility and handling load | original period and lot records | owner: utility engineer; individual meter readings; kWh; steam flow/enthalpy/condensate; water make-up/bleed; cooling/refrigeration; warehouse/loading energy; actual fuels; failure/rework periods; shared driver | Retain raw period totals per carrier and each included stage, including standby, controls, failed and zero-output runs. Distinguish rates from already integrated readings; keep calibration, units, density and T/P where applicable. No division by output. | kWh; MJ; kg; m3; hours | metered interval aligned with batches and stocks | complete actual interval plus linked carried cohorts | declared plant and its documented supplier/receiver interfaces | per 1 kg reference flow | meters/invoices; steam conditions; equipment and allocations |
| cp_packaging | paste_delivery | each purchased packaging article | original period and lot records | owner: packaging manager; body/lid/carton SKU; purchased assembly scope; tare per item; counts; opening/closing stock; rejects; rework; recycled content/provider | Keep actual undivided article counts, weights and losses. Distinguish complete can from separately purchased body/lid. Include real labels/pallets etc separately. Packaging mass is outside paste Q; its real burdens remain. No normalization. | kg; count | each packaging lot and reporting interval | complete actual interval plus linked carried cohorts | declared plant and its documented supplier/receiver interfaces | per 1 kg reference flow | purchase specifications; weighed tares; rejects and stock ledgers |
| cp_logistics | paste_delivery | actual freight and dispatch | original period and lot records | owner: logistics manager; gate-owned services; payload net mass; route/distance; return loading; mode; warehouse and on-site handling records; embedded delivered supplier services | Retain undivided journey and included loading/warehouse records. Flag embedded freight to prevent duplicates; preserve actual declared scope and add actual modes/fuels as separate cards. No A/Q or tkm/Q at collection. | kg; km; tkm; raw energy units | each journey and complete interval | complete actual interval plus linked carried cohorts | declared plant and its documented supplier/receiver interfaces | per 1 kg reference flow | weighbills; distance/mode evidence; warehouse/loading meters |
| cp_residuals | paste_delivery | waste, emissions and solvent fate | original period and lot records | owner: environmental engineer; solvent input/product/stock/recycle/air/waste masses; actual liquid and vapour speciation; exhaust rate/time or integrated volume; T/P/wet-dry basis; concentrations; capture/destruction; waste receiver; cleaning wastewater; uncertainty | Retain complete undivided monitoring, stock/fate and waste-transfer totals through normal, failed, cleaning and rework periods. Match actual species, phase and medium. Integrated volume gets no additional time factor. Do not infer evaporative loss from recipe or open-tin tests. No division by Q. | kg; m3; mg/m3; time; species units | each event and complete monitored interval | complete actual interval plus linked carried cohorts | declared plant and its documented supplier/receiver interfaces | per 1 kg reference flow | analysis/calibration; sampling conditions; receiver records; uncertainty |
| cp_quality | paste_delivery | product and process qualification | original period and lot records | owner: quality manager; recipe; supplier/lot; all six ingredient identities and forms; intended receiver substrate/use; non-aqueous paste phase; measured solids/retained solvent/water/density at stated T; actual acceptance criteria and results; process observations; rejection reason | Keep original SKU/lot specifications and actual tests, including solids method and volatile loss conditions. Source examples do not supply a universal recipe, phase at all temperatures, density, receiver approval, polishing lifetime or VOC fraction. Retain native identity limitations and paraffin classification debt. | kg; specification/test units | each lot, recipe or source change | complete actual interval plus linked carried cohorts | declared plant and its documented supplier/receiver interfaces | per 1 kg reference flow | supplier originals; signed tests; process logs and native full records |
| cp_allocation | paste_delivery | shared services and real coproducts | original period and lot records | owner: LCA lead; direct/shared loads; output cohorts; measured causal driver and units; allocation rationale; actual coproduct quantities/values if required; sensitivity | Keep raw totals and allocation evidence without dividing by Q. Allocation does not change physical mass balance; do not allocate away failed/rework burdens or convert waste into a fictitious coproduct. | exchange-specific units | each interval and scope change | complete actual interval plus linked carried cohorts | declared plant and its documented supplier/receiver interfaces | per 1 kg reference flow | meters; measured drivers; rationale and sensitivity |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_convert | all inventory rows | Convert raw quantities to each row numerator unit once. Liquid mass = integrated volume times measured same-lot density at measured temperature. Rate totals = integral of rate over time; an already integrated gas/liquid volume is used without another time multiplier. Gas concentration and volume must share T/P and wet/dry conditions. Electricity MJ = kWh times3.6; package mass = actual count times measured article tare. | raw meter and assay records; cp_materials; cp_utilities; cp_packaging; cp_residuals | unallocated raw numerator in row unit |  |
| calc_allocate | all inventory rows | Use directly metered burdens first; attribute shared burdens by justified causal driver with units and a sum-to-total check. Apply once to raw complete-period burdens including failed/zero-output and rework; keep gross physical mass unallocated for balance. | cp_allocation; converted raw burdens | attributed exchange vector by cohort |  |
| calc_stock | all inventory rows | Retain opening plus incoming physical mass = external outputs plus closing physical mass for each stock boundary, with measured losses. Carry the same logic as exchange vectors: opening carried burdens plus actual period burdens = delivered-cohort burden A plus closing undelivered carried burdens plus other independently attributed exits. Reconcile raw/WIP/finished/return cohorts; cancel internal P and rework transfers. Retain real warehouse, packing and loading burden. A has raw numerator units, not per-kg units. | cp_stock; cp_output; attributed exchange vectors | A in each row numerator unit; closing carried inventory |  |
| calc_gate | paste_ref | Compute Q = G - R using unique accepted plant-handover events net of packaging and linked returns/credits. Match the actual supplied recipe, route, form and cohort; Q must be positive. P is a separate first-release register and is not substituted for Q. Reacceptance never invents new P or a duplicated Q. | cp_output; cp_stock | Q in kg; separate P register |  |
| calc_balance | all inventory rows | Reconcile complete raw physical mass at each declared boundary and for the consolidated cohort, including retained solvent, measured free/water content, waste, air releases, stocks and returns. Check supported elements independently. Speciate actual solvent fate with analytical evidence; no default VOC fraction, no liquid-to-vapour composition equality, no COD/closure-residual fit. Physical melting/dissolution/cooling has no stoichiometric reaction-water term. Any independently observed chemistry needs separate evidence and method extension. | cp_materials; cp_stock; cp_residuals; cp_quality | physical and species/water reconciliation; explicit uncertainty | who-white-spirit-1996 |
| calc_normalize | all inventory rows | Report amount = A / Q for the declared 1 kg reference flow, once only after raw conversion, allocation and cohort stock attribution. A is the undivided attributable exchange numerator in that row unit; Q is actual net accepted delivered paste kg from calc_gate of the same recipe/route/state/cohort. This is the sole output normalization. Cards and protocol aggregation describe this identical reporting operation, not subsequent divisions. | A; Q; calc_gate; calc_stock | amount per 1 kg reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all material rows | Actual grade, route, form and full native limitations must be retained; patent and generic UUID do not certify the current supplier or receiver use. | cp_quality; supplier originals |
| dq_period | all rows | Complete raw actual-period and carried burdens including failed, rework and zero-output runs; positive matched Q and no double normalization. | cp_output; cp_stock; calc_normalize |
| dq_balance | all physical streams | Independent mass/elements, actual species/water/phase evidence and stated uncertainty; unexplained closure is explicit and not fitted. | cp_materials; cp_residuals; calc_balance |
| dq_linkage | concrete foreground dataset | Resolve actual auxiliary identities/provider quantities and treatment before completed dataset linkage; preserve missing metadata and uncertainty rather than assigning arbitrary UUIDs or zero. | cp_quality; unresolved register; provider records |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_identity | paste_ref and ingredients | Verify actual recipe, non-aqueous solvent-retaining paste, receiving use, supplier origin/route/grade/form and full native limitations in section3. A schema-valid broad UUID or application label alone cannot establish scope, approval or provider compatibility. | clariant-pastes-2016 |
| v_gate | paste_ref | Require Q positive, unique and traceable to actual net plant handover, distinct P, returns/credits and same-cohort opening/closing stocks. Reacceptance never creates new P or duplicated Q. Missing gate/stock lineage blocks a completed dataset. |  |
| v_complete | all rows | Match complete raw-period numerators, failed/zero-output/rework burdens and carried WIP/finished-stock inventories to Q. Collection never divides by Q. After conversions, allocation and stock attribution, execute calc_normalize once; card formulas and aggregation rules refer to that same reporting operation. |  |
| v_balance | material and species accounts | Check complete physical mass and supported element balances with independently measured emissions, residue, stock and retained-solvent content; compare independent species and water records. Keep uncertainty and unexplained differences explicit. Do not close by fitting unknown reaction water and another unknown output, or use retention-test loss as factory VOC. | clariant-pastes-2016;who-white-spirit-1996 |
| v_coverage | concrete foreground package | Conditional rows require actual evidence of presence or absence. Add every real ingredient, energy carrier, packaging component, waste and elementary species as a separate atomic exchange; the illustrative species rows are not a complete emission list. Missing data are not zero. Resolve dataset-specific auxiliary/provider matching and uncertainty before claiming complete linkage. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Qualified solvent polishing paste as an input to actual receiving activities; retain plant handover and all recipe/state limits. |
| allowed_use | Same declared material route, physical state, SKU acceptance and gate with complete cohort inventory. |
| excluded_use | Whole CPC35333, aqueous/acrylic/abrasive/aerosol formulations, solid prepared wax, functional polishing-life comparison or default downstream VOC. |
| required_metadata | All section3 qualifiers; protocols and units; raw/WIP/finished/return burden lineage; actual receiving use; native full-field limits, sources/providers and allocation. |
| required_quality_disclosure | Actual evidence/measurement coverage, failed and zero-output periods, uncertainty, unresolved auxiliary/provider/speciation gaps and paraffin metadata debt; no scientific approval claim. |
| update_trigger | Recipe or supplied formulation, route, grade, phase, receiving use, controls, gate, stocks/returns, utility/provider, native identity or source changes. |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| clariant-pastes-2016 | literature | Clariant, US20160060463A1 (2016-03-03), paragraphs0034–0036, Tables1–2, claims3–7. https://patentimages.storage.googleapis.com/1a/22/93/b39a4825001f36/US20160060463A1.pdf | Primary patent laboratory route and distinct solvent-retaining paste materials. Example quantities/setpoints, shine and open-tin evaporation results are not industrial defaults or service-life evidence; actual plant qualification required. |
| who-white-spirit-1996 | official_guidance | WHO/IPCS, Environmental Health Criteria187: White Spirit (Stoddard Solvent), 1996, section5.3.1. https://www.inchem.org/documents/ehc/ehc/ehc187.htm | Independent technical description that liquid/vapour composition and evaporation conditions differ. Historical general solvent context, not paste recipe, current grade, density, emission factor or present legal determination. |
