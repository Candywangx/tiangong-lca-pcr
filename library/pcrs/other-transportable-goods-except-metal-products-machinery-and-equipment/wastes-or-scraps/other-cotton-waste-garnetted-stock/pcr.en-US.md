---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.other-cotton-waste-garnetted-stock
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Mechanically garnetted cotton fibre from known pre-consumer knitted fabric cuttings

## 1. Scope and Applicability

This protocol is limited to one known pre-consumer 100% cotton navy-blue single-jersey production-cutting supply, mechanically converted by actual sorting, accessory removal, cutting, conditioning and tearing/opening into unspun recovered cotton fibre. The paper does not fully disclose dye/finish chemistry; obtain actual lot records rather than inferring dye identity or absence of finish from colour. The study also reports failed HVI testing of dyed recovered fibres with hard lumps (§2.2); require a suitable declared method rather than assuming virgin-grey-cotton HVI applicability. Require real receiver specification and legal/product acceptance, without assumed waste-status exemption.

PrecisionTex independently describes colour-sorted postindustrial pure cotton clips mechanically converted into loose fibre for spinners. Its broader catalogue does not prove a navy single-jersey lot, actual delivery, packaging or environmental savings for this scope. The evidence is a transparent technical synthesis: Heliyon separately illustrates knitted cuttings and recovered fibres but also studies other mixed pre-consumer/post-consumer inputs and subsequent virgin-cotton blending/spinning. Those are outside this endpoint. ANDRITZ supplies independent equipment context, not proof that one SKU/factory uses every option. No case blend fraction, water percentage, residence time, throughput, yield or fibre-quality value is a category default. Exclude 39214 non-garnetted carding/combing noil, raw cotton, linters, silk/wool, chemical dissolution/regeneration, unresolved blends and yarn/fabric endpoints.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.other-cotton-waste-garnetted-stock |
| classification_refs | CPC 3.0:39215, accepted narrower association for mechanically garnetted fibre from the specified cotton-jersey cuttings. |
| covered_products | Mechanically garnetted unspun cotton fibre supplied from one verified pre-consumer navy-blue 100% cotton single-jersey production-cutting lot. |
| excluded_products | Non-garnetted carding/combing noil of 39214; silk; wool/hair; cotton linters; raw/ginned cotton; yarn/fabric as output; post-consumer or unresolved blends; chemical dissolution/regeneration; virgin-cotton blends and downstream spinning. |
| representative_product | A known navy-blue knitted-cutting-derived garnetted cotton lot; technical synthesis, not an asserted single factory/order for every unit operation or package. |
| production_route | Reception; composition/colour sorting; actual attachment removal; cutting; actual water conditioning; mechanical tearing/opening and suction/dust collection; first quality release; cohort-traced baling/packaging/storage/handling/dispatch. |
| market_state | Unspun mechanically recovered cotton fibre feedstock, retaining declared dye/finish and measured water; receiver/product acceptance required. No assumed yarn quality or waste-status exemption. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply unspun mechanically garnetted cotton fibre from the known knitted cutting stratum |
| How much | 1 kg net fibre at the first quality-release gate, excluding packaging |
| How well | Meets measured composition/retained dye-finish/moisture and receiver fibre-length, short-fibre and unopened-lump specification; no default yarn-performance claim |
| How long or cycle | One unique first-release cohort plus its services to the declared site dispatch endpoint; no service-life claim |
| reference_flow_link | released_fibre |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Mechanically garnetted navy-blue cotton fibre |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | single source factory and lot; 100% cotton fibre composition with test method; single-jersey knitted cutting supply form; pre-consumer origin and prior knitting history; navy-blue colour and actual dye and finish chemistry; supplier retained finish and contamination assay; actual sorting and hard-point removal; cutter and mechanical opener route with pass count; actual conditioning water and other supplied formulations; measured moisture and as-released net mass excluding packaging; fibre length and short-fibre and unopened-lump acceptance methods; receiver specification and evidence of acceptance; legal and product or waste transfer status at each gate; first-release cohort Qc and rework and return history; opening and closing unused stock and WIP burden vectors; opening and closing FG and gross dispatch H; each packaging material stocks and P N ER S EO W; site period actual utility voltage geography and provider; allocation study context and per-exchange causal evidence; upstream completed operations and inherited burden convention; dust short fibre foreign-material and emission destinations |

Declare every required qualifier in metadata, product/reference-flow description, process notes or equivalent fields; justify any non-applicability. Q is newly first-quality-released mass, already including closing FG once. Qc retains original cohort Q for later services; H is gross physical throughput only. The native terminal Product UUID remains unresolved and cannot be replaced by a generic waste-cotton or other classification candidate.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| meas_reference | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use measured as-released net fibre mass excluding packaging; declare water and retained dye/finish separately. Do not assume a dry basis or cotton-regain percentage; Q is first release, not gross shipment. |
| meas_energy | electricity | Energy `f6811440-ee37-11de-8a39-0800200c9a66` | MJ | Preserve original meter kWh; convert to MJ by 3.6 once before attribution. Energy is a collection interface, not an adopted supplier reference property; verify actual voltage, geography, provider and native property/unit chain before linking. A common energy unit group alone cannot establish Net calorific value. |
| meas_water | water and moisture | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use separate measured liquid, sorbed-water, ambient-uptake, vapour and drain records. Independent density at recorded state supports volume conversion; a secondary coefficient or assumed water value does not. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | One known pre-consumer single-jersey cotton-cutting lot in its actual navy-blue dyed/finished supply state, with composition and prior-process evidence. |
| starting_condition_role | Supplied fabric residual before garnetting; complete upstream supply burden linked once, not purchased finished recycled fibre. |
| product_classification_scope | Mechanical garnetted cotton subset only; distinct from carded/combed cotton and non-garnetted noil and wool stock. |
| recursive_input_rule | Carry actual external garnetted inputs with verified prior burden and cohort; model only additional work and never duplicate earlier conversion or new Q. |
| upstream_dataset_requirement | Represent all completed cotton/fabric/dyeing/finishing supply, utilities, whole supplied formulations, actual packages and each receiver/treatment once with representative providers or explicit gaps. A waste label alone does not erase burden. |
| disclosure | Supply composition/form/dye/finish; site/period; actual equipment/passes and utilities; first-release Q/Qc; all failures/rework/stocks; inherited vectors; gross V versus A; packaging; allocation and legal/receiver status; missing identities. |

The following rules apply within the single-stream mechanical route above; conditional operations enter only when actually performed. All quantities require the declared foreground protocols; protocol prescriptions are not already collected plant data.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| sb_start | supplied textile cuttings | Begin at reception of one verified 100% cotton navy-blue single-jersey cutting lot. Carry all already completed cotton/fabric/dyeing/finishing operations through the supplied-input upstream dataset exactly once; identify their stages and burden convention. Collection/sorting/transport not in that provider and actually inside the selected supply system must be added once. Do not replace manufacturing by purchased garnetted fibre plus packaging. | `hel-cotton-recycling-2022`; `jrc-ilcd-2010`; `precisiontex-cotton-clips` |
| sb_route | reclaim | Include actual composition/colour sorting, hard-point removal, cutting, conditioning, mechanical tearing/opening with every pass, suction/filtration, internal refeeding, quality tests and actual maintenance. Keep all failed runs, zero-output periods, idle, start-stop, cleanup and rework. An unapproved actual operation is disclosed and retained, not hidden in a zero amount; assess applicability before using the result. | `hel-cotton-recycling-2022`; `andritz-textile-recycling` |
| sb_release | released_fibre | Q is newly first-released net fibre mass at the acceptance gate. First-released material remaining in closing FG is already part of Q. Storage, baling, wrapping, handling and dispatch are retained as original-cohort services with denominator Qc. Dispatch/retesting/return never creates new Q; consolidated internal transfers cancel. No closing FG addition to production output. | `hel-cotton-recycling-2022`; `jrc-ilcd-2010` |
| sb_fuel | conditional additional exchanges | No combustion, steam, thermal regeneration, wet bleaching/dye removal or solvent dissolution is assumed for dry garnetting. If any actual carrier, fuel, purchased compressed air, refrigerant, chemical preparation, direct species emission, metal/plastic accessory or package component crosses the chosen boundary, add one physically specific conditional card per actual exchange and its entire supplier/receiver chain. Keep real activity and its uncertainty, not a generic other/zero bucket. Substantive chemical regeneration changes applicability. | `hel-cotton-recycling-2022`; `andritz-textile-recycling` |
| sb_water | water and material balances | This route mechanically separates fibres and does not posit a chemical reaction. Preserve physically sorbed/free water and actual measured vapour, drainage and ambient moisture exchange separately from dry fibre/dye/finish/foreign matter. Independently measure total mass, water and relevant material/element constituents; a single residual cannot fit two unknowns. Dissolved COD/VOC indicators are not specific chemical masses. No invented reaction water or generic water density. | `hel-cotton-recycling-2022` |
| sb_packaging | each packaging material | For each real package independently reconcile I + P + N + ER = C + S + EO + W. I/C encompass empty stock, package attached to WIP/FG and reusable stock. P is gross purchase, N first non-purchase external receipt with incoming material or separately borrowed/transferred without charge regardless of supplier inventory coverage, ER a proven same-item return from a prior site dispatch, S outward with gross physical dispatch H, EO all other outward transfers including supplier/loan returns or free transfers, and W discarded. Internal reuse cancels; attached packaging is excluded from fibre Q, not purchased again and not automatically a coproduct. The PE film/PP strap cards are conditional examples, not evidence of their use in the experiment; other actual components require their own complete cards. | `andritz-textile-recycling`; `jrc-ilcd-2010` |
| sb_recursive | same-category inputs | An actual external previously garnetted-fibre input is a supplied intermediate carrying its original burden, not evidence that the cutting-to-fibre route occurred again. Model such rework separately and link the prior cohort. Do not recursively reconstruct the same upstream conversion, count it as new cutting supply or count it toward new Q. | `jrc-ilcd-2010` |
| sb_outsourced | outsourced conversion and handoff | Identify the actual operator, receiving and delivery gates, input/output lot states, first-release authority and supplier inventory for each outsourced cutting/opening or baling operation. Include each actual conversion and transport once, through the provider or disaggregated foreground records. A transfer or resale of already released fibre creates no new production or Q. Missing supplier records remain a collection hold. | `jrc-ilcd-2010`; `hel-cotton-recycling-2022` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| reclaim | Mechanical recovery and first release | required | Actual mechanical conversion of the known cotton cutting stratum | foreground manufacturing | new first-release Q |
| finish | Original-cohort baling storage handling and dispatch | required | Actual services and actual packaging; conditional cards require records | cohort service | original cohort Qc; H is not denominator |

### Process: Mechanical recovery and first release (`reclaim`)

#### Inputs

##### Product flows

###### Navy-blue 100% cotton single-jersey production cuttings (`knit_cuttings`)

One composition-verified pre-consumer fabric supply lot, before opening. Keep its whole supplied mass including measured moisture and retained dye/finish; fibre assay is a subledger, not another purchase. Require source factory, prior knitting/dyeing/finishing and upstream burden vector; no free burden is inferred from the word waste. Do not substitute mixed hard waste, noil, virgin lint or post-consumer clothing.

- Selected flow: Navy-blue 100% cotton single-jersey production cuttings
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this exchange value from the sole §8.2 normalized result; perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `hel-cotton-recycling-2022`; `andritz-textile-recycling`

###### Previously released garnetted cotton fibre returned for rework (`rework_return`)

Trace the original cohort and original production burden separately from new incremental rework. An internal return from finishing cancels on consolidation; an actual external return is recorded once with its inherited vector. Return and retesting do not create first-release production.

- Selected flow: Previously released garnetted cotton fibre returned for rework
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this exchange value from the sole §8.2 normalized result; perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `hel-cotton-recycling-2022`; `andritz-textile-recycling`

###### Tap water (`water_conditioning`)

Conditional municipal potable treated water used for actual fabric conditioning or cleaning, supplied to the plant. This is a Product supply, not groundwater abstraction, steam, wastewater or deionized water. Use measured mass; supplier flow UUID and native reference property remain unresolved. A secondary volume coefficient is not a measured density. Measure spray and any cleaning supply separately in raw records; no published spray percentage is a default.

- Selected flow: Tap water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this exchange value from the sole §8.2 normalized result; perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `hel-cotton-recycling-2022`; `andritz-textile-recycling`

###### Alternating current (`reclaim_electricity`)

Metered alternating-current electricity for actual sorting, cutting, opener drives, suction, filtration, compressors and attributable idle/start-stop/cleanup. Collect voltage, geography, supplier and consumption mix without assuming a CN provider. The collection interface uses Technical flow property Energy and MJ; preserve meter kWh and convert once by 3.6. The supplier flow UUID and its native reference property remain unresolved. Verify the actual provider property/unit chain before linking; sharing Units of energy does not establish a Net calorific value reference property.

- Selected flow: Alternating current
- Flow property / unit: Energy `f6811440-ee37-11de-8a39-0800200c9a66` / MJ
- Amount rule: Use this exchange value from the sole §8.2 normalized result; perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `hel-cotton-recycling-2022`; `andritz-textile-recycling`

###### Mineral lubricating oil formulation (`mineral_oil`)

Conditional on actual machinery maintenance using this one purchased mineral-oil formulation. Record the entire supplied formulation once with grade, SDS and additive/water subaccounts. It is not synthetic PAO lubricant or a fibre-finishing oil. For actual other formulations add one card for each supplied formulation; record spent oil and leaks with real destinations.

- Selected flow: Mineral lubricating oil formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this exchange value from the sole §8.2 normalized result; perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_aux`
- Sources: `hel-cotton-recycling-2022`; `andritz-textile-recycling`

##### Elementary flows

###### Atmospheric water vapour absorbed by cotton (`ambient_water`)

Only actual independently measured net ambient moisture uptake across this manufacturing gate. Keep water intake distinct from liquid conditioning water and emitted water vapour; no inferred uptake chosen to force a balance. Record direction and real ambient state; a net-outflow record belongs on the emission card.

- Selected flow: Atmospheric water vapour absorbed by cotton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this exchange value from the sole §8.2 normalized result; perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `hel-cotton-recycling-2022`; `andritz-textile-recycling`

#### Outputs

##### Product flows

###### Mechanically garnetted navy-blue cotton fibre (`released_fibre`)

Unique first-quality-release gate after sorting, actual accessory removal, cutting, actual conditioning, mechanical tearing/opening and measured quality acceptance. Unspun fibre feedstock from the single known 100% cotton knitted-cutting stratum; preserve retained dye/finish and moisture declarations. No carded/combed sliver, yarn, fabric, wool, noil or dissolved/regenerated cellulose. Q includes first-released material still in closing finished stock exactly once; later baling/storage/dispatch belong to the same cohort service ledger. Native terminal Product UUID is unresolved.

- Selected flow: Mechanically garnetted navy-blue cotton fibre
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release`
- Sources: `hel-cotton-recycling-2022`; `andritz-textile-recycling`

###### Previously released garnetted cotton fibre after rework (`reworked_fibre`)

Physical reworked return to the original cohort; not additional Q. Preserve original inherited burden and add only actual incremental rework. Separate irrecoverable rejects, short fibres and captured dust. Internal movement cancels at the combined gate.

- Selected flow: Previously released garnetted cotton fibre after rework
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this exchange value from the sole §8.2 normalized result; perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `hel-cotton-recycling-2022`; `andritz-textile-recycling`

###### Unused navy-blue cotton knitted cuttings returned to supplier (`unused_cutting_return`)

Only an actual unused supply return with unchanged physical identity, lot and inherited procurement vector. Distinguish opening/closing unused stock from WIP; do not reverse processing burdens never incurred or subtract a return already netted in raw procurement.

- Selected flow: Unused navy-blue cotton knitted cuttings returned to supplier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this exchange value from the sole §8.2 normalized result; perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `hel-cotton-recycling-2022`; `andritz-textile-recycling`

##### Waste flows

###### Captured navy-blue cotton textile dust (`captured_dust`)

Weigh one separately contained cotton-textile dust stream at filtration or cleanup; retain fibre/dye/finish/water assays and actual receiver/treatment. It is not an air emission or pure cellulose by assumption. Separate sorting dust from mechanically removed short fibres and avoid weighing the same collector twice.

- Selected flow: Captured navy-blue cotton textile dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this exchange value from the sole §8.2 normalized result; perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Sources: `hel-cotton-recycling-2022`; `andritz-textile-recycling`

###### Separated short garnetted cotton fibre (`short_fibre`)

Weigh the separately collected short-fibre stream with retained dye/finish and moisture. Reject-grade waste is the base destination; any actual product sale requires documented specification, acceptance, legal status and the allocation decision, with a separate Product row replacing the same physical waste quantity rather than adding another output. No fixed recovery yield or credit.

- Selected flow: Separated short garnetted cotton fibre
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this exchange value from the sole §8.2 normalized result; perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Sources: `hel-cotton-recycling-2022`; `andritz-textile-recycling`

###### Removed steel textile fastener (`steel_accessory`)

Conditional only if an actual steel fastener is removed; verify composition and receiver. Do not call all foreign matter steel, or use a steel-machining/melting scrap identity for untreated fasteners. Add individual cards for each real non-steel accessory; absence requires inspection evidence.

- Selected flow: Removed steel textile fastener
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this exchange value from the sole §8.2 normalized result; perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Sources: `hel-cotton-recycling-2022`; `andritz-textile-recycling`

###### Rejected unopened navy-blue cotton knitted cutting (`unopened_reject`)

Actual rejected fabric pieces leaving the boundary after sorting or failed opening, classified by contamination and destination. Retain failed/unauthorized-run quantities and burdens. Internal refeeding is a tracked transfer that cancels, not another purchase or a disposal credit.

- Selected flow: Rejected unopened navy-blue cotton knitted cutting
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this exchange value from the sole §8.2 normalized result; perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Sources: `hel-cotton-recycling-2022`; `andritz-textile-recycling`

###### Spent mineral lubricating oil formulation (`spent_oil`)

Conditional on actual removal of the single mineral lubricant formulation, including contamination and moisture. Match maintenance stores and actual hazardous/non-hazardous receiver records; other chemicals and oily absorbents need their own specific rows.

- Selected flow: Spent mineral lubricating oil formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this exchange value from the sole §8.2 normalized result; perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_aux`
- Sources: `hel-cotton-recycling-2022`; `andritz-textile-recycling`

###### Cotton-conditioning drain water (`conditioning_effluent`)

Conditional actual liquid drainage collected for treatment. Record water and individually analysed dye/finish/solid species in non-additive composition subaccounts; COD is an oxygen-demand indicator, not a named chemical mass. Direct release, if actual, requires individual measured species and receiving compartments rather than reusing this treatment transfer as an elementary release.

- Selected flow: Cotton-conditioning drain water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this exchange value from the sole §8.2 normalized result; perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `hel-cotton-recycling-2022`; `andritz-textile-recycling`

##### Elementary flows

###### water vapour (`water_evaporation`)

Conditional independently quantified H2O evaporation to air, unspecified subcompartment, during the reported operation. CAS7732-18-5 controls identity; broad historical synonyms do not authorize isotope substitution, liquid discharge, long-term release or steam purchase. Preserve water balance and actual air state; do not solve this and an unknown dust loss from one residual.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this exchange value from the sole §8.2 normalized result; perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `hel-cotton-recycling-2022`; `andritz-textile-recycling`

###### Particulate matter, particle size unspecified (`air_particulate`)

Measure actual cotton-textile particulate released to air after controls, including fugitive release, with subcompartment and sampling state declared. Flow UUID remains unresolved; no clinker example or generic control factor establishes a cotton emission. If measured size fractions are used, replace the total by non-overlapping fractions; do not add total and fractions. Chemical assays are non-additive subaccounts. Occupational concentration alone is insufficient: match exhaust volume/time and sampling state.

- Selected flow: Particulate matter, particle size unspecified
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this exchange value from the sole §8.2 normalized result; perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `hel-cotton-recycling-2022`; `andritz-textile-recycling`

### Process: Original-cohort finishing and dispatch (`finish`)

#### Inputs

##### Product flows

###### First-released garnetted navy-blue cotton fibre (`cohort_transfer`)

Internal transfer of released_fibre to the original cohort service ledger. Qc is that cohort original first-release mass, including its closing FG once; H is gross physical handling/dispatch and never a new denominator. Retain historical opening FG burden and external-return history; cancel this transfer on consolidation.

- Selected flow: First-released garnetted navy-blue cotton fibre
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this exchange value from the sole §8.2 normalized result; perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fg`
- Sources: `hel-cotton-recycling-2022`; `andritz-textile-recycling`

###### Alternating current (`finish_electricity`)

Metered alternating-current electricity for actual baling, storage, handling and dispatch services, including failed and zero-dispatch intervals, attributed to the original cohort. Collect voltage, geography, supplier and consumption mix without assuming a CN provider. The collection interface uses Technical flow property Energy and MJ; preserve meter kWh and convert once by 3.6. The supplier flow UUID and its native reference property remain unresolved. Verify the actual provider property/unit chain before linking; sharing Units of energy does not establish a Net calorific value reference property.

- Selected flow: Alternating current
- Flow property / unit: Energy `f6811440-ee37-11de-8a39-0800200c9a66` / MJ
- Amount rule: Use this exchange value from the sole §8.2 normalized result; perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service_energy`
- Sources: `hel-cotton-recycling-2022`; `andritz-textile-recycling`

###### Externally returned garnetted navy-blue cotton fibre (`fg_external_return`)

Actual returned previously dispatched fibre identified to original delivery and cohort. Preserve original production burden and reverse the original delivery movement with a return link, not a new Q or automatic negative manufacture. Record actual incremental inspection/repack/rework only.

- Selected flow: Externally returned garnetted navy-blue cotton fibre
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this exchange value from the sole §8.2 normalized result; perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fg`
- Sources: `hel-cotton-recycling-2022`; `andritz-textile-recycling`

###### Polyethylene film (`film_purchase`)

Conditional on this declared packaging material actually being used; the industry source does not establish its plant use. Single supplied PE film, CAS9002-88-4; no PET or PE resin substitution. The verified archive identifies a Product flow under Materials production / Plastics, with Mass reference property; it establishes no actual provider mix or packaging use. Supplier density/grade/thickness and multilayer composition require records; no secondary coefficient is a measured density. P is gross new external procurement only; retain purchase returns separately. Internal reuse is not procurement. For this material independently close I + P + N + ER = C + S + EO + W, where I/C include empty, attached WIP/FG and reusable stocks. Internal reuse cancels. Inherited burdens follow each physical gate; split actual additional packaging components into their own cards.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this exchange value from the sole §8.2 normalized result; perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_film`
- Sources: `andritz-textile-recycling`; `jrc-ilcd-2010`

###### Polyethylene film (`film_first_received`)

N is this one packaging material first received externally without purchase, attached to incoming material or separately borrowed or transferred without charge. Record it regardless of supplier inventory coverage; it is not a proven return of an item previously dispatched by this site. Preserve physical mass, ownership, inherited burdens and actual transport/service incurred once. Unknown provider data stays unresolved. Internal reuse is not N; close I + P + N + ER = C + S + EO + W independently for this material.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this exchange value from the sole §8.2 normalized result; perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_film`
- Sources: `andritz-textile-recycling`; `jrc-ilcd-2010`

###### Polyethylene film (`film_received`)

Conditional on this declared packaging material actually being used; the industry source does not establish its plant use. Single supplied PE film, CAS9002-88-4; no PET or PE resin substitution. The verified archive identifies a Product flow under Materials production / Plastics, with Mass reference property; it establishes no actual provider mix or packaging use. Supplier density/grade/thickness and multilayer composition require records; no secondary coefficient is a measured density. ER is only a true external return traceable to the same physical item previously dispatched from this site, with original dispatch link, identity, condition and inherited vector. Unlinked or first non-purchase arrivals belong to N, not ER; investigate unproven history. Do not count a return as new purchase. For this material independently close I + P + N + ER = C + S + EO + W, where I/C include empty, attached WIP/FG and reusable stocks. Internal reuse cancels. Inherited burdens follow each physical gate; split actual additional packaging components into their own cards.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this exchange value from the sole §8.2 normalized result; perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_film`
- Sources: `andritz-textile-recycling`; `jrc-ilcd-2010`

###### Polypropylene bale strap (`strap_purchase`)

Conditional on this declared packaging material actually being used; the industry source does not establish its plant use. One actual PP bale strap article, not PP resin, farm-gate twine, a cable tie or polyester strap. Record grade, dimensions and measured mass; polymer assay is not a second procurement. P is gross new external procurement only; retain purchase returns separately. Internal reuse is not procurement. For this material independently close I + P + N + ER = C + S + EO + W, where I/C include empty, attached WIP/FG and reusable stocks. Internal reuse cancels. Inherited burdens follow each physical gate; split actual additional packaging components into their own cards.

- Selected flow: Polypropylene bale strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this exchange value from the sole §8.2 normalized result; perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_strap`
- Sources: `andritz-textile-recycling`; `jrc-ilcd-2010`

###### Polypropylene bale strap (`strap_first_received`)

N is this one packaging material first received externally without purchase, attached to incoming material or separately borrowed or transferred without charge. Record it regardless of supplier inventory coverage; it is not a proven return of an item previously dispatched by this site. Preserve physical mass, ownership, inherited burdens and actual transport/service incurred once. Unknown provider data stays unresolved. Internal reuse is not N; close I + P + N + ER = C + S + EO + W independently for this material.

- Selected flow: Polypropylene bale strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this exchange value from the sole §8.2 normalized result; perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_strap`
- Sources: `andritz-textile-recycling`; `jrc-ilcd-2010`

###### Polypropylene bale strap (`strap_received`)

Conditional on this declared packaging material actually being used; the industry source does not establish its plant use. One actual PP bale strap article, not PP resin, farm-gate twine, a cable tie or polyester strap. Record grade, dimensions and measured mass; polymer assay is not a second procurement. ER is only a true external return traceable to the same physical item previously dispatched from this site, with original dispatch link, identity, condition and inherited vector. Unlinked or first non-purchase arrivals belong to N, not ER; investigate unproven history. Do not count a return as new purchase. For this material independently close I + P + N + ER = C + S + EO + W, where I/C include empty, attached WIP/FG and reusable stocks. Internal reuse cancels. Inherited burdens follow each physical gate; split actual additional packaging components into their own cards.

- Selected flow: Polypropylene bale strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this exchange value from the sole §8.2 normalized result; perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_strap`
- Sources: `andritz-textile-recycling`; `jrc-ilcd-2010`

#### Outputs

##### Product flows

###### Dispatched garnetted navy-blue cotton fibre (`gross_dispatch`)

Gross unwrapped fibre mass leaving the site, linked to each dispatch and original cohort; exclude packaging tare. This is physical service throughput, not a second first-release output. Repeated dispatch/return histories are explicit; closing FG is a stock, not an additional production output.

- Selected flow: Dispatched garnetted navy-blue cotton fibre
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this exchange value from the sole §8.2 normalized result; perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fg`
- Sources: `hel-cotton-recycling-2022`; `andritz-textile-recycling`

###### Garnetted navy-blue cotton fibre sent to rework (`fg_rework_transfer`)

Actual original-cohort transfer to rework_return, cancelling internally in the consolidated model; preserve its historical vector without generating another procurement. External rework providers and actual transport are represented once if used.

- Selected flow: Garnetted navy-blue cotton fibre sent to rework
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this exchange value from the sole §8.2 normalized result; perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fg`
- Sources: `hel-cotton-recycling-2022`; `andritz-textile-recycling`

###### Polyethylene film (`film_shipped`)

Conditional on this declared packaging material actually being used; the industry source does not establish its plant use. Single supplied PE film, CAS9002-88-4; no PET or PE resin substitution. The verified archive identifies a Product flow under Materials production / Plastics, with Mass reference property; it establishes no actual provider mix or packaging use. Supplier density/grade/thickness and multilayer composition require records; no secondary coefficient is a measured density. S is packaging actually accompanying gross physical dispatch H, including repeated shipments. It is outside cotton Q and is not automatically a coproduct. For this material independently close I + P + N + ER = C + S + EO + W, where I/C include empty, attached WIP/FG and reusable stocks. Internal reuse cancels. Inherited burdens follow each physical gate; split actual additional packaging components into their own cards.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this exchange value from the sole §8.2 normalized result; perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_film`
- Sources: `andritz-textile-recycling`; `jrc-ilcd-2010`

###### Polyethylene film (`film_returned`)

Conditional on this declared packaging material actually being used; the industry source does not establish its plant use. Single supplied PE film, CAS9002-88-4; no PET or PE resin substitution. The verified archive identifies a Product flow under Materials production / Plastics, with Mass reference property; it establishes no actual provider mix or packaging use. Supplier density/grade/thickness and multilayer composition require records; no secondary coefficient is a measured density. EO is all actual outward packaging movement distinct from S and W, including supplier/loan returns and free transfers. Match receiver and stock movement, no reuse credit. For this material independently close I + P + N + ER = C + S + EO + W, where I/C include empty, attached WIP/FG and reusable stocks. Internal reuse cancels. Inherited burdens follow each physical gate; split actual additional packaging components into their own cards.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this exchange value from the sole §8.2 normalized result; perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_film`
- Sources: `andritz-textile-recycling`; `jrc-ilcd-2010`

###### Polypropylene bale strap (`strap_shipped`)

Conditional on this declared packaging material actually being used; the industry source does not establish its plant use. One actual PP bale strap article, not PP resin, farm-gate twine, a cable tie or polyester strap. Record grade, dimensions and measured mass; polymer assay is not a second procurement. S is packaging actually accompanying gross physical dispatch H, including repeated shipments. It is outside cotton Q and is not automatically a coproduct. For this material independently close I + P + N + ER = C + S + EO + W, where I/C include empty, attached WIP/FG and reusable stocks. Internal reuse cancels. Inherited burdens follow each physical gate; split actual additional packaging components into their own cards.

- Selected flow: Polypropylene bale strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this exchange value from the sole §8.2 normalized result; perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_strap`
- Sources: `andritz-textile-recycling`; `jrc-ilcd-2010`

###### Polypropylene bale strap (`strap_returned`)

Conditional on this declared packaging material actually being used; the industry source does not establish its plant use. One actual PP bale strap article, not PP resin, farm-gate twine, a cable tie or polyester strap. Record grade, dimensions and measured mass; polymer assay is not a second procurement. EO is all actual outward packaging movement distinct from S and W, including supplier/loan returns and free transfers. Match receiver and stock movement, no reuse credit. For this material independently close I + P + N + ER = C + S + EO + W, where I/C include empty, attached WIP/FG and reusable stocks. Internal reuse cancels. Inherited burdens follow each physical gate; split actual additional packaging components into their own cards.

- Selected flow: Polypropylene bale strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this exchange value from the sole §8.2 normalized result; perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_strap`
- Sources: `andritz-textile-recycling`; `jrc-ilcd-2010`

##### Waste flows

###### Rejected previously released garnetted cotton fibre (`fg_reject`)

Actual loss during storage/handling/dispatch attributed to the original cohort; retain its production history and measured contamination. A downgraded sale requires separate accepted Product classification and allocation; do not count the same mass in both.

- Selected flow: Rejected previously released garnetted cotton fibre
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this exchange value from the sole §8.2 normalized result; perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fg`
- Sources: `hel-cotton-recycling-2022`; `andritz-textile-recycling`

###### Waste polyethylene bale film (`film_waste`)

Conditional on this declared packaging material actually being used; the industry source does not establish its plant use. Single supplied PE film, CAS9002-88-4; no PET or PE resin substitution. The verified archive identifies a Product flow under Materials production / Plastics, with Mass reference property; it establishes no actual provider mix or packaging use. Supplier density/grade/thickness and multilayer composition require records; no secondary coefficient is a measured density. W is one separately weighed packaging waste stream with actual contamination and receiver/treatment; never add on-site reuse as waste. For this material independently close I + P + N + ER = C + S + EO + W, where I/C include empty, attached WIP/FG and reusable stocks. Internal reuse cancels. Inherited burdens follow each physical gate; split actual additional packaging components into their own cards.

- Selected flow: Waste polyethylene bale film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this exchange value from the sole §8.2 normalized result; perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_film`
- Sources: `andritz-textile-recycling`; `jrc-ilcd-2010`

###### Waste polypropylene bale strap (`strap_waste`)

Conditional on this declared packaging material actually being used; the industry source does not establish its plant use. One actual PP bale strap article, not PP resin, farm-gate twine, a cable tie or polyester strap. Record grade, dimensions and measured mass; polymer assay is not a second procurement. W is one separately weighed packaging waste stream with actual contamination and receiver/treatment; never add on-site reuse as waste. For this material independently close I + P + N + ER = C + S + EO + W, where I/C include empty, attached WIP/FG and reusable stocks. Internal reuse cancels. Inherited burdens follow each physical gate; split actual additional packaging components into their own cards.

- Selected flow: Waste polypropylene bale strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this exchange value from the sole §8.2 normalized result; perform no further division.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_strap`
- Sources: `andritz-textile-recycling`; `jrc-ilcd-2010`

## 7. Allocation and Co-product Handling

These rules apply only to the allocation-requiring attributional supply study declared above. Industrial manufacturing evidence does not establish LCA allocation; other recycling situations or substitution methods are not presumed.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| al_context | attributional studies | This is an attributional supplied-fibre protocol restricted to studies that require allocation. State the study situation and the applicable burden-transfer policy; this text does not establish full ILCD compliance or a universal recycling formula. Product supply, waste-treatment service and negative-value waste functions must be distinguished using actual legal status, receiver acceptance, contracts and market evidence. If the actual system primarily provides treatment, do not publish it as this Product-supply dataset without resolving the functional boundary. | `jrc-ilcd-2010` |
| al_subdivide | each attributable exchange | First avoid allocation by dedicated measurement, physical subdivision or defensible virtual subdivision. Assign exclusive material inputs, specific processing/quality operations and attributable services to the actual function/cohort they serve. A supplied whole formulation is procured once; component assay is not a second input. Preserve gross physical V independently of attributional numerator A. | `jrc-ilcd-2010` |
| al_causality | remaining shared exchanges | For each remaining exchange identify the determining physical causality between that exchange and the supplied function. Embodied fibre, water, specific cutting/opening work, suction and time-dependent storage can have different causal drivers. Demonstrate the relationship from measured states/operations; a common mass share or price choice for every exchange is not justified merely by coproduct masses. | `jrc-ilcd-2010` |
| al_residual | truly residual common-process burdens | Only for genuinely unresolved shared burdens after those steps use a declared common-process gate and contemporaneous market values of the actual co-functions in their real exit or entry states. Identify moisture/quality, packaged/unpackaged state, units, prices, time/geography, quantities and sensitivity. Missing or nonpositive values do not authorize invented shares or a credit; unresolved treatment/recycling allocation is a study hold. The method is not a free physical/economic choice and has no fixed percentages. | `jrc-ilcd-2010` |
| al_no_credit | cotton dust and secondary outputs | Retain captured dust, short fibre, unopened reject and every removed accessory separately with actual destination. Product promotion needs a demonstrated accepted function and separate allocation; otherwise retain the waste treatment burden. Do not presume virgin-cotton displacement, landfill avoidance, recycling efficiency or a substitution credit. Physical output totals and source partitions of one mixed stream are alternative views, not additive providers. A new physical flow belongs in an explicit card; an OTHER reconciliation adjustment is permitted only for an exactly proven same-side duplicate, never an unexplained balancing quantity. | `jrc-ilcd-2010`; `hel-cotton-recycling-2022` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Protocols collect raw, unnormalized records and states only; aggregation_rule names the final result target basis. §8.2 alone executes A/Qc; cards and protocols refer to that same result without repeated division. Raw V closes physical gates; A is the attributable burden numerator and cannot replace V in mass closure.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | reclaim | released_fibre | release and quality | lot; source composition; dye/finish declaration; net first-release mass Q; moisture; fibre-length test; short-fibre test; unopened-lump inspection; receiver/legal acceptance; first-release timestamp; original cohort Qc; closing FG identifier | Weigh net fibre on calibrated scales after documented quality acceptance; match each lot to one first release and preserve retained dye/finish and moisture basis. No default quality threshold, strength or recycled fraction is asserted. | kg | each lot and failed lot | all reporting period including Q0; retain original cohort history | declared site and each original cohort | per 1 kg reference flow | calibrated weighing; composition and quality test; acceptance/lot trace |
| cp_material | reclaim | knit_cuttings; rework_return; reworked_fibre; unused_cutting_return | raw stock and stage ledger | physical gross V; lot; supplied state; received mass; opening/closing unused raw stock; opening/closing WIP by stage; actual return; refeed transfer; moisture; dry fibre/dye/finish assay; inherited per-exchange burden vector; actual new activity; procurement already net flag | Use calibrated gross/tare weighing and complete stage-labelled stocktake. Trace unused non-WIP procurement burdens separately from WIP procurement plus only processing actually incurred. Retain every failed lot and physical return; no normalization in collection. | kg | each receipt transfer and stocktake | opening through closing; all failed/idle/cleanup/rework | declared site and each original cohort | per 1 kg reference flow | scales; upstream inventories; purchase/return/stage journals |
| cp_water | reclaim | water_conditioning; ambient_water; water_evaporation; conditioning_effluent | water balance | lot; liquid-water mass; actual spray; cleaning water; uptake/vapour direction; measured vapour mass; actual drain mass; moisture in all stocks and outlets; independent species assay; flow-integrated volume or true rate; density temperature pressure and independent method | Weigh or meter each actual water stream with matched condition-specific density when converting liquid volume. Measure moisture and actual vapour/drainage independently. Integrate a true rate over time once; an already integrated volume is not multiplied by time. No density inferred from a secondary flow-property coefficient, no residual fit of multiple unknowns. | kg | each conditioning/cleaning event and stocktake | full period with ambient moisture changes | declared site and each original cohort | per 1 kg reference flow | meter/scale calibration; moisture and air-state observations; independent balance |
| cp_energy | reclaim | reclaim_electricity | raw energy | lot; drive and suction meter start/end; kWh; electricity voltage geography supplier; operating mode; failed/idle/start-stop/cleanup duration; shared driver; raw converted MJ | Read complete raw meter differences for opener, cutting, suction and services. Convert kWh to MJ once before attribution; retain any actual fuel or purchased-air activity as its own added atomic exchange and emissions. No output division in collection. | MJ | each shift with lot and mode mapping | full period including failed/Q0 idle and cleanup | declared site and each original cohort | per 1 kg reference flow | meters; bills; operating-mode records; causal allocation evidence |
| cp_aux | reclaim | mineral_oil; spent_oil | raw formulation and maintenance | supplier formulation; grade SDS; whole purchased mass; opening/closing unused and installed stocks; actual maintenance dose; spent oil; leaks; constituent subaccounts; inherited burdens | Reconcile one whole supplied formulation and actual removals; no double purchase of assay components. Identify each actual extra auxiliary or leaked species and add its own exchange; no optional lubricant is assumed consumed. | kg | each maintenance and stocktake | complete maintenance period attributed to cohorts | declared site and each original cohort | per 1 kg reference flow | SDS invoices; stocks; removal and receiver records |
| cp_residue | reclaim | captured_dust; short_fibre; steel_accessory; unopened_reject | separate physical outlets | lot; outlet identity; gross/tare mass; moisture; fibre/dye/finish/foreign constituent assays; collector identity; refeed; receiver; destination; legal status; product acceptance and price if applicable | Weigh each separately collected outlet and match actual receiver/treatment. Keep combined outlet totals and source partitions non-additive; separate dust, short fibres, fabric reject and each accessory. No recovery ratio or avoided virgin material is inferred. | kg | each container lot and dispatch | all failed and successful runs with cleanup | declared site and each original cohort | per 1 kg reference flow | weighing; assays; waste/acceptance receipts; collector log |
| cp_air | reclaim | air_particulate | actual environmental release | source; stack/fugitive; sampled concentration; matched exhaust volume or true rate; operating time; sampling temperature pressure moisture; size fraction; actual controls; gross particulate mass; non-additive chemical assay; uncertainty | Use representative environmental sampling and matched dry/wet/standard-state exhaust data. Concentration times integrated volume yields mass; concentration times actual rate is integrated once. Do not use occupational exposure or captured filter weight as an air release, and do not add total PM and its overlapping size/species subaccounts. | kg | each emission assessment with operating modes | whole period including fugitive idle and cleanup | declared site and each original cohort | per 1 kg reference flow | sampling method; airflow calibration; state conversion; uncertainty |
| cp_fg | finish | cohort_transfer; fg_external_return; gross_dispatch; fg_rework_transfer; fg_reject | original-cohort FG ledger | original cohort Qc; opening/closing FG; first-release receipt; actual external return and original delivery reversal link; rework out/in; gross dispatch H; actual reject; net fibre mass excluding package; inherited vector; service activity | Weigh and trace each lot movement through opening, receipt, baling, storage, handling, rework and dispatch. Keep first-release Qc fixed; record closing FG as stock once and preserve historical production burden. Actual incremental services follow the served cohort, not current-period shipment as denominator. | kg | each movement and opening/closing stocktake | retain historical cohorts and all service periods | declared site and each original cohort | per 1 kg reference flow | lot reconciliation; calibrated scales; original dispatch and return history |
| cp_service_energy | finish | finish_electricity | raw service energy | cohort; Qc; baler and warehouse meter; actual time; occupancy driver; kWh and converted MJ; failed or zero dispatch; original-cohort inherited vector | Collect raw complete service-meter differences and occupancy/mode data. Convert units before defensible cohort attribution. All service periods, including zero dispatch, remain. No division by H and no current production substituted for original Qc. | MJ | each service shift and stock interval | all original-cohort service lifetime within stated endpoint | declared site and each original cohort | per 1 kg reference flow | submeters; utility state; time/occupancy records; allocation evidence |
| cp_pack_film | finish | film_purchase; film_first_received; film_received; film_shipped; film_returned; film_waste | raw packaging material ledger | cohort; one material grade and supplied form; I and C empty/attached WIP/FG/reusable stocks; P gross purchases; N first non-purchase external receipts; ER same-item returns with prior site dispatch link; S gross-dispatch attachment; EO external returns out; W waste; internal reuse transfer; physical V; inherited vector; actual new activity | Weigh this actual packaging material separately and reconcile I + P + N + ER = C + S + EO + W over the same gate and period. Attribute burden to original fibre cohort Qc after raw collection, keep packaging away from cotton Q, and do not procure internal reuse again. Collect unit/item history, receipt category, supplier inventory coverage, ownership, provider and actual purchase/transport/service burden. First non-purchase arrivals remain physical receipts even when upstream supply covers their burdens. Count each actually borne burden once; missing provider data stays unresolved rather than zero. | kg | each package movement and stocktake | all production storage dispatch return and Q0 service intervals | declared site and each original cohort | per 1 kg reference flow | purchase and return records; calibrated tare; physical stock balance; receiver receipts |
| cp_pack_strap | finish | strap_purchase; strap_first_received; strap_received; strap_shipped; strap_returned; strap_waste | raw packaging material ledger | cohort; one material grade and supplied form; I and C empty/attached WIP/FG/reusable stocks; P gross purchases; N first non-purchase external receipts; ER same-item returns with prior site dispatch link; S gross-dispatch attachment; EO external returns out; W waste; internal reuse transfer; physical V; inherited vector; actual new activity | Weigh this actual packaging material separately and reconcile I + P + N + ER = C + S + EO + W over the same gate and period. Attribute burden to original fibre cohort Qc after raw collection, keep packaging away from cotton Q, and do not procure internal reuse again. Collect unit/item history, receipt category, supplier inventory coverage, ownership, provider and actual purchase/transport/service burden. First non-purchase arrivals remain physical receipts even when upstream supply covers their burdens. Count each actually borne burden once; missing provider data stays unresolved rather than zero. | kg | each package movement and stocktake | all production storage dispatch return and Q0 service intervals | declared site and each original cohort | per 1 kg reference flow | purchase and return records; calibrated tare; physical stock balance; receiver receipts |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| raw_convert | all inventory rows | Convert raw measurements into declared exchange units before attribution: electricity_kWh * 3.6 gives electricity_MJ. Integrate a true mass/volume rate once; use an independent density at the actual material state for volume-to-mass. Record original and converted values; no product division here. | raw_measurement; conversion_evidence | converted_raw | `hel-cotton-recycling-2022`; `jrc-ilcd-2010` |
| attribute_vector | all inventory rows | For each exchange e and original cohort c retain gross physical V separately. A_ec = inherited opening unused-stock/WIP vector + actual current attributable activity - inherited closing unused-stock/WIP vector - actual outward unused-return vector, only where those terms were not already netted. WIP carries only actual stage burdens; unused non-WIP carries procurement only. Apply dedicated/subdivision then determining causality then genuinely residual allocation under §7; retain failed/Q0/idle/cleanup/rework activity, no negative duplicate subtraction. FG already released carries its historical cohort vector, not a second manufacture. | converted_raw; opening_vector; closing_vector; actual_activity; allocation_evidence | A_ec | `jrc-ilcd-2010` |
| normalize_once | all inventory rows | The only product normalization is n_ec = A_ec / Qc for Qc > 0, where Qc is the original cohort newly first-released net fibre mass. For current newly first-released cohorts Qc = Q. Each non-reference card consumes this sole result from §8.2; its basis and protocol aggregation label name the result target and do not perform another division. The reference row is 1 kg. Services and packaging use the same original Qc, never H; a Qc=0 run retains actual burdens for explicit disposition and emits no unit result. | A_ec; Qc; cp_release; cp_fg | n_ec | `jrc-ilcd-2010` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_scope | product and route | Maintain the single physical supply stratum, prior dye/finish history and receiver/legal acceptance; unknown chemistry must be obtained before species modelling. No extrapolation of mixed-case measurements to the single-stream output. | composition tests; supplier declarations; actual process and acceptance records |
| dq_temporal | all protocols | Cover full opening-to-closing periods and original FG cohorts with all successful/failed/Q0/idle/start-stop/cleanup/rework activity. Reconcile clocks, batches and meter coverage; retain gaps and uncertainty. | unfiltered raw logs; period and cohort reconciliation |
| dq_atomic | all flows | One actual supplied material/formulation/carrier/waste/species per card. Quantify whole supplies once and keep components, mixed outlet partitions and assays non-additive. Any real unlisted exchange gets its own identity, unit, protocol and receiver/provider. | purchase specifications; SDS; outlet and stock ledgers |
| dq_uncertainty | mass water energy and emissions | Use calibrated weights/meters and representative tests; document sampling state and uncertainty. Check independent total mass and relevant material/element balances. Never invent a tolerance, density, mass-per-bale or species from a residual. | calibration; raw tests; uncertainty and residual review |
| dq_identity | all UUID-bearing exchanges | Respect native hard restrictions and exact property/unit chain; no supplier or secondary property coefficient establishes applicability by itself. Archived PE-film identity does not establish current provider or actual material use. Core Product identity remains a hold until verified. | full native records; exact support references; provider evidence |

## 9. Validation Rules

The scoped CPC mapping is accepted. Scientific approval and the core identity remain pending.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| vr_identity | reference product | Verify the single supplied cotton cutting composition and dyed/finished state, mechanical route, unspun garnetted output and receiver/legal acceptance. A generic textile classification, cotton-name match, query success or state100 is insufficient. Do not replace the unresolved terminal Product identity with yellow-stained waste, non-garnetted cotton waste, carded/combed cotton, wool stock or construction waste. | `hel-cotton-recycling-2022`; `un-cpc3-2025` |
| vr_quantity | all rows and cohorts | Validate the one first-release Q gate and all raw V balances before allocation; preserve failed and Q0 periods and stock vectors. Check that A contains only actual attributable burdens and that the single §8.2 normalization is applied once. Service uses original Qc; H and closing FG cannot inflate production. Unknown/unsupported relationships remain a review finding, not a scientific pass. | `jrc-ilcd-2010`; `hel-cotton-recycling-2022` |
| vr_balance | physical manufacturing and FG gates | Manufacturing mass closure uses opening unused raw stock, WIP and ancillary-material stocks including installed lubricant, plus actual receipts/returns and actual added water/materials, against closing unused raw stock, WIP and ancillary-material stocks, first-release Q, previously released rework output and every actual return, reject, short-fibre, captured-dust, accessory, spent lubricant, leak, vapour, air particulate and liquid outlet. FG closure is opening FG + first-release Q + actual returns + rework receipts = closing FG + gross fibre dispatch H + rework transfer + actual FG waste. Preserve each moisture/constituent basis; package material balances are separate. Cancel matched internal transfers for the combined gate; assess residuals against measured uncertainty, not an invented tolerance or hidden output. | `hel-cotton-recycling-2022`; `jrc-ilcd-2010` |
| vr_atomic | each actual exchange | No real input/outlet may be hidden by an absent auxiliary UUID, a not-applicable flag or an other collection. Every adopted native name, CAS, route, form, geography, medium, type and all property/unit restrictions must be compatible. Preserve the exact official Chinese basename. Where supplier or chemical identity remains unknown, keep a specific physical candidate and the explicit gap. | `jrc-ilcd-2010` |
| vr_sources | evidence and data quality | Source case observations do not supply universal water percentages, yields, fibre quality, blend fractions, residence times, power use or credits. Require raw lot-level records and calibration, retain counterexamples and uncertainty, and disclose actual changes of route or supplied state. Technical/translation checks do not approve science, mapping or publication. | `hel-cotton-recycling-2022`; `andritz-textile-recycling`; `jrc-ilcd-2010` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Attributional supply of unspun mechanically garnetted cotton fibre; Product output only after native identity and real receiver/legal acceptance are established. |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Known-stratum garnetted cotton supply modelling with original-cohort service burden and explicit upstream inheritance. |
| excluded_use | Universal recycling credits or yields; virgin lint/noil substitution; wool stock; unknown mixed fibres; chemical regeneration; waste-treatment service disguised as product supply; unverified footprint publication. |
| required_metadata | All §3 qualifiers; source/receiver and supplier state; original cohort Qc; actual processes/utilities; stock/return/rework history; packaging gate; attribution and provider links. |
| required_quality_disclosure | Measured/proxy/gap separation; complete failed/Q0 coverage; raw V and A; native restrictions; source-case limits; stock vectors; uncertainty and remaining core identity hold. |
| update_trigger | Change of supply composition/dye/finish, cutting/opening route, receiver/legal function, quality gate, utility identity, allocation context, stock convention or evidence. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UN Statistics Division, CPC Version 3.0 full Explanatory Notes, 30 June 2025, PDF pp200–201; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification context and adjacent 39211–39218 distinctions only; full UNSD explanatory notes, PDF pp200–201, give no further inclusion/exclusion text for 39215; not product acceptance or manufacturing evidence. |
| hel-cotton-recycling-2022 | literature | Heliyon 8 (2022), e11275, Recycled fibers from pre- and post-consumer textile waste as blend constituents in manufacturing 100% cotton yarns in ring spinning: A sustainable and eco-friendly approach; https://doi.org/10.1016/j.heliyon.2022.e11275; full article https://pmc.ncbi.nlm.nih.gov/articles/PMC9626686/ | §§2.1–2.2 and Figs1–4 identify 100% cotton navy-blue single-jersey cuttings and separately illustrated recovered fibre. Actual cutting/water-conditioning/multi-cylinder tearing/baling route; adjacent hard-waste/post-consumer/blending cases constrain applicability. Qualitative synthesis only; no case blend, spray, residence, throughput or fibre-quality factor transferred. |
| andritz-textile-recycling | extension_guidance | ANDRITZ, Machines and equipment for textile recycling lines; https://www.andritz.com/products-en/group/nonwoven-textile/textile-recycling/recycling-equipment | Manufacturer primary equipment context: composition/colour sorting, hard-point removal, cutting, optional dust/metal detection, tearing and baling alternatives. No proof all optional equipment, PE film or PP strap is used; no plant yield, chemistry, energy or LCA allocation factor. |
| jrc-ilcd-2010 | official_guidance | European Commission JRC, ILCD Handbook General guide for Life Cycle Assessment, Detailed guidance, First edition March 2010, §§7.9.2–7.9.3, printed pp255–272; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Allocation-requiring attributional context only: subdivision/virtual subdivision, exchange-specific determining physical causality and truly residual contemporaneous gate-state market values. Preserve situation restrictions and recycling-specific caveats; not a cotton recipe, universal cut-off policy, fixed share or default credit. Foreground stock/cohort protocols are explicit study prescriptions, not measured plant facts. |
| precisiontex-cotton-clips | extension_guidance | PrecisionTex, 100% Cotton Clips, Technical Description and Technical Specifications; https://www.precisiontex.es/en/products/recycled-cotton-clips | Independent commercial description of colour/composition-sorted postindustrial cotton clips mechanically converted to loose spinning fibre. Not proof of navy single-jersey scope, this study product, package, lot delivery, measured quality, inventory or claimed environmental savings. |
