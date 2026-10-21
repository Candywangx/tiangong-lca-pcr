---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.ep-multi-ply-vulcanized-conveyor-belts
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Complete EP multi-ply vulcanized rubber conveyor belts

## 1. Scope and Applicability

This method covers a real industrial subset: complete flat conveyor belting with multiple EP woven polyester-warp/polyamide-weft carcass plies, rubber skim between plies and SBR-based upper and lower rubber covers, laminated and sulfur-vulcanized, trimmed, inspected and supplied as open rolls. Actual ply count, EP finish, cover/skim formulations, edge form, dimensions, cure and acceptance specification are product-specific. Independent primary factory and commercial product evidence supports the structural/process synthesis; it does not establish one common SKU, formulation, cure condition, performance or lifetime. [fenner-belt-making-2023; fenner-superfort; somi-belt-process]

Exclude independently sold uncured cover/skim sheets, bare fabric carcasses, green builds, NN/EE or steelcord, proprietary single-ply designs, PVC/PU solid-woven belting, endless fabricated assemblies, profiled/sidewall belts and power-transmission belts. EP/NN/steelcord, recipes, grades, conditions, performance and service life are not interchangeable. Complete reinforcement/lamination/curing and supply distinguish this PCR from the external uncured SBR cover-sheet PCR; a changed application alone is not a new product methodology.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.ep-multi-ply-vulcanized-conveyor-belts |
| classification_refs | CPC3.0 36240; narrower industrial subset |
| covered_products | Complete EP multiple-ply flat sulfur-vulcanized conveyor belts, SBR-based top/bottom covers and independently specified skim |
| excluded_products | Uncured sheet/build or fabric alone; NN/EE/steelcord; single-ply; thermoplastic solid-woven; endless/profiled/sidewall and transmission belts |
| representative_product | One actual declared EP multi-ply open-roll configuration with complete layer BOM and actual acceptance records |
| production_route | Actual compounding or whole-compound supply → warm milling/calender covers and fabric → ply lamination/green inspection → sulfur press/end cooling → trim/test/real repair/QC → winding/packing/storage/factory delivery |
| market_state | Complete vulcanized open-roll belt at actual accepted net factory delivery |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply complete EP multi-ply conveyor belting of the independently declared specification |
| How much | 1 kg net accepted supplied belt at the factory gate |
| How well | Actual full-belt acceptance and EP/cover/skim configuration; no generic tensile, abrasion, adhesion, heat or fire class |
| How long or cycle | Actual supply period/state; no service life or conveyed tonne-kilometre is assumed |
| reference_flow_link | product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Conveyor or transmission belts or belting, of vulcanized rubber `1e587e97-03a2-4c50-8226-f8446a1dd1d9` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual plant and reporting period; EP warp/weft polymers weave finish and ply count; width length gauges and measured net mass configuration; each base rubber grade or whole supplied top bottom skim compound and recipe; complete actual sulfur cure system and press record; calendering layup edge state and repair history; actual final acceptance grade and application without performance equivalence; open roll supply and packaging composition tare and reuse; Q unique actual accepted net factory delivery distinct from new release P; raw WIP finished and packaging opening closing stocks carried burdens failures and rework; linked returns reversals redelivery and actual storage handling dispatch; complete native broad Product at plant finished state limits and provider compatibility |

Every Required qualifier must be declared in consumable dataset metadata, product description or process notes. cp_delivery determines actual unique net factory delivery Q; new quality release P stays separate. Retain the terminal card’s complete native limitations downstream.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 1 kg net supplied complete belt under cp_delivery; calibrated actual net mass excludes detachable packaging and preserves supplied moisture/retained material state. Native Mass does not establish density. |
| dimension_conversion | all inventory rows | Mass with measured dimensions | kg | Length/area/roll count converts to kg only with traceable paired net weighing for the same EP layup, width/gauges, compounds and roll configuration. Area uses actual length and width. No universal kg/m, kg/m2, roll weight or service transport amount; neither tensile data nor secondary property coefficients are density. |
| one_reporting_basis | all inventory rows | Physical quantity or energy declared by row | per 1 kg reference flow | Collect undivided raw period numerators with complete WIP/stock carried burdens. report_once is the only normalization after raw conversion and cohort attribution. Card A_i/Q and aggregation_rule denote that same operation, not successive divisions. |
| whole_preparation | all inventory rows | Whole supplied mass and constituent subledgers | kg | Bought compounds, oils, wet cements and dispersions count by whole supplied mass once. Active, carrier polymer/oil and water subledgers are not added procurement. Onsite blends use real separately acquired ingredients plus mixing energy/loss. Phr needs the actual recipe and measured base-rubber basis. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual purchased ingredients or whole uncured compounds, EP fabric and auxiliaries at plant receipt plus opening raw/WIP/finished/packaging stocks and carried burdens |
| starting_condition_role | Foreground receipt for complete-belt manufacturing/supply, not an upstream zero-burden cutoff |
| product_classification_scope | Narrow complete EP multi-ply conveyor-belt subset of CPC3.0 36240 |
| recursive_input_rule | Pair internal compounds, coated fabric, green belt, trim and release/warehouse transfers with burdens, without repurchase. External same-category finished belts are not automatic primary-route inputs; independently verify state/route and upstream data, avoiding infinite recursion |
| upstream_dataset_requirement | Match each actual grade/form/recipe/route, geography, period and utility to compatible provider evidence. Bought complete compounds include upstream mixing; physical native identity alone is not quantitative provider evidence |
| disclosure | Plant/period, actual EP structure/recipe/cure, supply state, Q/P gate, WIP/finished carry, actual storage/pack/dispatch and all source/native limits |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_complete | belt_supply | Include real onsite mixing or upstream whole-compound supply, warm milling/calender/fabric coating, ply layup/lamination and green checks, sulfur press/end cooling, trim/test samples/real repair/final QC, winding/packing, actual warehousing and factory handling/dispatch. Retain failures, zero-output runs, rework, cleaning and opening/closing WIP burdens. No duplicated bought-compound and ingredient charges. | `fenner-belt-making-2023`; `somi-belt-process`; `fenner-rubber-2024` |
| boundary_delivery | product | Q is actual unique net factory delivery, not new release P. Keep finished opening/closing stock and exchange-level carried burdens; undelivered stock stays outside Q. Separate production and store/dispatch ledgers and cancel internal P handovers on consolidation, retaining all real storage, packaging, handling and rework. Return/reacceptance never creates new P or duplicate delivered Q. |  |
| boundary_downstream | belt_supply | Receipt does not remove upstream burdens. Customer freight, installation/endless splicing, conveying service, use and end of life require downstream models beyond this open-roll factory gate. Real factory dispatch/loading energy remains inside. No assumed transport-service output or life/equivalence across EP, NN and steelcord. | `fenner-superfort`; `somi-belt-process` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| belt_supply | Complete EP multi-ply manufacturing and factory delivery | required | Actual §1 subset and route with independent stage records | Compound/mix → calender/fabric coat → ply lamination/green check → sulfur press/end cooling → trim/test/repair/QC → winding/packing/storage/dispatch; integrated unit | per 1 kg reference flow |

Retain separate stage records for every actual compound, EP ply, cure batch and supplied cohort. Compounds, coated fabric and green builds are internal states: subprocess models pair/cancel transfers and retain carried burdens. Only product is terminal reference. Concrete conditional cards are actual-record triggers, not a universal recipe. Add separate specific cards for every additional real grade, preparation, treatment, fuel/refrigerant, packaging article, external coproduct or elementary species. A real outward intermediate or coproduct remains explicit, regardless of shared UUID.

### Process: Complete manufacturing and factory delivery (`belt_supply`)

#### Inputs

##### Product flows

###### Dry styrene-butadiene rubber (`sbr`)

For actual onsite SBR-based cover mixing, weigh each actual grade separately, retaining polymerization route, bound styrene, oil extension and moisture. No recipe or emulsion/solution grade is inferred. Polymer embodied in a bought complete compound is not bought again.

- Selected flow: Dry styrene-butadiene rubber
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section8 after raw conversion and same-cohort burden attribution; collect under cp_material and verify actual applicability.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `fenner-belt-making-2023`

###### Dry natural rubber (`nr`)

Conditional actual blend ingredient; preserve each grade and supplied moisture. No NR/SBR ratio or rubber interchangeability.

- Selected flow: Dry natural rubber
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section8 after raw conversion and same-cohort burden attribution; collect under cp_material and verify actual applicability.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources:

###### Polybutadiene rubber (`br`)

Conditional actual ingredient with recorded catalyst/grade and form. Do not substitute SBR, NBR, EPDM or reclaimed rubber.

- Selected flow: Polybutadiene rubber
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section8 after raw conversion and same-cohort burden attribution; collect under cp_material and verify actual applicability.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources:

###### Carbon black (`carbon_black`)

Record actual filler grade and mass, capture, return and loss; no universal phr loading.

- Selected flow: Carbon black
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section8 after raw conversion and same-cohort burden attribution; collect under cp_material and verify actual applicability.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `fenner-belt-making-2023`

###### Precipitated silica (`silica`)

Only if actually separately charged; retain treatment, assay and moisture. Compound-bound filler is a constituent subledger.

- Selected flow: Precipitated silica
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section8 after raw conversion and same-cohort burden attribution; collect under cp_material and verify actual applicability.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources:

###### Paraffinic rubber process oil (`process_oil`)

Conditional actual whole oil grade; distinguish oil already within oil-extended rubber or a bought compound. Every different oil needs its own row, without aromatic/paraffinic equivalence.

- Selected flow: Paraffinic rubber process oil
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section8 after raw conversion and same-cohort burden attribution; collect under cp_material and verify actual applicability.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources:

###### Zinc oxide powder (`zinc_oxide`)

Conditional actual separately acquired cure activator, preserving grade/assay; do not duplicate preparation-bound zinc oxide.

- Selected flow: Zinc oxide powder
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section8 after raw conversion and same-cohort burden attribution; collect under cp_material and verify actual applicability.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `fenner-rubber-2024`

###### Stearic acid (`stearic_acid`)

Conditional actual ingredient. A commercial fatty-acid mixture needs a distinct whole-mixture row rather than pure-stearic-acid identity.

- Selected flow: Stearic acid
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section8 after raw conversion and same-cohort burden attribution; collect under cp_material and verify actual applicability.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources:

###### Elemental sulfur powder (`sulfur`)

Actual separate sulfur charge for onsite sulfur-curable mixing. An oil-treated or polymer-bound preparation is a different whole purchased input; no duplicate active/carrier purchase or assumed reaction-water yield.

- Selected flow: Elemental sulfur powder
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section8 after raw conversion and same-cohort burden attribution; collect under cp_material and verify actual applicability.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `fenner-belt-making-2023`

###### Rubber-bound N-cyclohexyl-2-benzothiazolesulfenamide preparation (`cbs_preparation`)

Conditional concrete accelerator preparation only if actually purchased. Weigh the entire preparation; CBS assay and binder are subledgers, not extra purchases. Different accelerators require separate rows. This is not a mandated industrial cure recipe.

- Selected flow: Rubber-bound N-cyclohexyl-2-benzothiazolesulfenamide preparation
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section8 after raw conversion and same-cohort burden attribution; collect under cp_material and verify actual applicability.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources:

###### Polymerized 2,2,4-trimethyl-1,2-dihydroquinoline (`tmq`)

Conditional actual antidegradant with form/assay. Other antioxidants are separate; no ingredient is inferred from a performance claim.

- Selected flow: Polymerized 2,2,4-trimethyl-1,2-dihydroquinoline
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section8 after raw conversion and same-cohort burden attribution; collect under cp_material and verify actual applicability.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources:

###### Paraffin wax (`wax`)

Conditional actual separate wax charge with grade and mass, excluding wax already contained in a purchased compound.

- Selected flow: Paraffin wax
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section8 after raw conversion and same-cohort burden attribution; collect under cp_material and verify actual applicability.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources:

###### Uncured SBR-based top-cover rubber compound (`bought_top`)

Only for actual external supply of this complete compound. Record actual grade/recipe, complete sulfur-curable package, received mass/moisture and carrier constituents. Do not repurchase embodied polymers/oil/additives or call an internal batch transfer a purchase. Retain upstream mixing data. Top, bottom and skim compounds are distinct and not interchangeable.

- Selected flow: Uncured SBR-based top-cover rubber compound
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section8 after raw conversion and same-cohort burden attribution; collect under cp_material and verify actual applicability.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `fenner-rubber-2024`

###### Uncured SBR-based bottom-cover rubber compound (`bought_bottom`)

Only for actual external supply of this complete compound. Record actual grade/recipe, complete sulfur-curable package, received mass/moisture and carrier constituents. Do not repurchase embodied polymers/oil/additives or call an internal batch transfer a purchase. Retain upstream mixing data. Top, bottom and skim compounds are distinct and not interchangeable.

- Selected flow: Uncured SBR-based bottom-cover rubber compound
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section8 after raw conversion and same-cohort burden attribution; collect under cp_material and verify actual applicability.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `fenner-rubber-2024`

###### Uncured rubber carcass skim compound (`bought_skim`)

Only for actual external supply of this complete compound. Record actual grade/recipe, complete sulfur-curable package, received mass/moisture and carrier constituents. Do not repurchase embodied polymers/oil/additives or call an internal batch transfer a purchase. Retain upstream mixing data. Top, bottom and skim compounds are distinct and not interchangeable.

- Selected flow: Uncured rubber carcass skim compound
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section8 after raw conversion and same-cohort burden attribution; collect under cp_material and verify actual applicability.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `fenner-rubber-2024`

###### Polyester-warp polyamide-weft conveyor-belt carcass fabric (`ep_fabric`)

Required multiple EP woven plies. Record actual warp/weft polymer grades, weave, areal mass, width, moisture and supplier adhesion-treatment state. Purchase finished fabric including its finish once. No NN/EE/steelcord, tyre cord or proprietary single-ply substitution; no assumed nylon6/66 or dipping chemistry.

- Selected flow: Polyester-warp polyamide-weft conveyor-belt carcass fabric
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section8 after raw conversion and same-cohort burden attribution; collect under cp_structure and verify actual applicability.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_structure`
- Sources: `fenner-belt-making-2023`; `fenner-superfort`

###### Uncured rubber bonding cement preparation (`rubber_cement`)

Conditional real whole supplied cement used in building or spot repair. Record full wet mass, actual rubber/solvent/water composition and application losses. Different cements/primers require separate rows. External cement is not automatically necessary between calendered plies, and supplier fabric finish is not a second purchase.

- Selected flow: Uncured rubber bonding cement preparation
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section8 after raw conversion and same-cohort burden attribution; collect under cp_material and verify actual applicability.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources:

###### Aqueous zinc-stearate anti-tack dispersion (`anti_tack`)

Conditional actual whole wet batch-off preparation; no assumed mandatory bath chemistry. Active and water are subledgers. Track actual dilution water, bath stocks, retained film, bleed and sludge. A different preparation is a separate specific row.

- Selected flow: Aqueous zinc-stearate anti-tack dispersion
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section8 after raw conversion and same-cohort burden attribution; collect under cp_material and verify actual applicability.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources:

###### Hydraulic mineral oil (`hydraulic_oil`)

Actual whole oil makeup for hydraulic equipment, with grade, leak/capture/disposal and opening/closing circuit stocks. Circulation is not repeated procurement.

- Selected flow: Hydraulic mineral oil
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section8 after raw conversion and same-cohort burden attribution; collect under cp_utility and verify actual applicability.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utility`
- Sources: `somi-belt-process`

###### Thermal mineral heat-transfer oil (`thermal_oil`)

Conditional actual circuit makeup and losses, separate from purchased heat or fuel. Record whole grade and stocks; circulating flow is not purchased consumption.

- Selected flow: Thermal mineral heat-transfer oil
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section8 after raw conversion and same-cohort burden attribution; collect under cp_utility and verify actual applicability.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utility`
- Sources: `somi-belt-process`

###### Alternating-current electricity (`electricity`)

Actual stage-tagged power for every mixing pass, calender/build/press, electric heating if real, cooling, compressors, extraction, tests/repair, winding, storage and dispatch handling, including failures and rework. Motor rating or installed capacity is not consumption.

- Selected flow: Alternating-current electricity
- Flow property / unit: Electrical energy / kWh
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section8 after raw conversion and same-cohort burden attribution; collect under cp_utility and verify actual applicability.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utility`
- Sources: `somi-belt-process`

###### Purchased saturated steam (`steam`)

Only for a real purchased steam route; record delivered enthalpy, pressure/temperature and mass, with condensate return. Do not buy its upstream fuel again. No presumption that the cited thermal-oil press uses steam.

- Selected flow: Purchased saturated steam
- Flow property / unit: Thermal energy / MJ
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section8 after raw conversion and same-cohort burden attribution; collect under cp_utility and verify actual applicability.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utility`
- Sources:

###### Purchased thermal energy (`heat`)

Conditional actual external metered heat at a defined interface and return condition. Keep it distinct from steam, electricity and onsite heater fuel; no simultaneous alternative charges without evidence.

- Selected flow: Purchased thermal energy
- Flow property / unit: Thermal energy / MJ
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section8 after raw conversion and same-cohort burden attribution; collect under cp_utility and verify actual applicability.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utility`
- Sources:

###### Natural gas (`natural_gas`)

Conditional actual onsite boiler/thermal-oil-heater fuel. Retain volume conditions, composition and heating value. Integrated volume is not multiplied by time again; other fuels and actual combustion species are separate.

- Selected flow: Natural gas
- Flow property / unit: Net calorific energy / MJ
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section8 after raw conversion and same-cohort burden attribution; collect under cp_utility and verify actual applicability.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utility`
- Sources:

###### Purchased industrial water (`water`)

Actual external makeup for contact, cooling, bath dilution and cleaning, with stage tags. Internal circulation is not new purchase; preparation carrier water stays in subledgers and evaporation/discharge is independently recorded.

- Selected flow: Purchased industrial water
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section8 after raw conversion and same-cohort burden attribution; collect under cp_utility and verify actual applicability.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utility`
- Sources: `somi-belt-process`

###### Reusable polyester anti-stick interleaving cloth (`release_cloth`)

Only for actual polyester composition verified by supplier. Record acquisition, pool stocks, real reuse and losses; no universal life. A different textile requires a separate article and reuse is not repurchase.

- Selected flow: Reusable polyester anti-stick interleaving cloth
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section8 after raw conversion and same-cohort burden attribution; collect under cp_pack and verify actual applicability.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources:

###### Wooden conveyor-belt shipping reel (`wood_reel`)

Actual whole reel with supplier composition and measured tare, ownership, pool and loss records; no duplicate wood purchase or assumed metres per reel.

- Selected flow: Wooden conveyor-belt shipping reel
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section8 after raw conversion and same-cohort burden attribution; collect under cp_pack and verify actual applicability.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources:

###### Polyethylene wrapping film (`wrap`)

Actual supplied protection film, separately weighed from belt Q and reusable cloth; record issued/returned mass and scrap.

- Selected flow: Polyethylene wrapping film
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section8 after raw conversion and same-cohort burden attribution; collect under cp_pack and verify actual applicability.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources:

###### Polypropylene packing strap (`strap`)

Actual strap with polymer specification, mass, returns and losses; steel strap is a separate article.

- Selected flow: Polypropylene packing strap
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section8 after raw conversion and same-cohort burden attribution; collect under cp_pack and verify actual applicability.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conveyor or transmission belts or belting, of vulcanized rubber (`product`)

Terminal complete sulfur-vulcanized flat belt: multiple EP polyester-warp/polyamide-weft plies, separate skim and SBR-based upper/lower covers, after trim, final QC, actual repair, winding/packing, warehousing and factory dispatch handling, supplied open-roll. Q is actual unique accepted net factory delivery, not newly released P, excluding detachable packaging. Native identity is Product flow; Production mix, at plant; Finished product, manufactured; Mass only. No fixed grade, polymer recipe, reinforcement, CAS or separate geography/locationOfSupply/medium is declared; unspecified geography is not a CN/HK/global representativeness claim. The native Chinese comment uses 流体 inconsistently with its official basename and Product type: preserve this metadata debt without interpreting liquid or density. Broad identity alone does not prove EP configuration, recipe, supplier amounts, performance/lifetime or quantitative provider compatibility; those require actual independently qualified specifications and evidence.

- Selected flow: Conveyor or transmission belts or belting, of vulcanized rubber `1e587e97-03a2-4c50-8226-f8446a1dd1d9`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `generic`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_delivery`
- Sources: `fenner-belt-making-2023`; `fenner-superfort`; `somi-belt-process`

###### Wooden conveyor-belt shipping reel (`supplied_wood_reel`)

Actual article accompanying supplied belt, separate from Q. Reconcile stock, outward article, return and reuse without a second material charge.

- Selected flow: Wooden conveyor-belt shipping reel
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section8 after raw conversion and same-cohort burden attribution; collect under cp_pack and verify actual applicability.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources:

###### Polyethylene wrapping film (`supplied_wrap`)

Actual article accompanying supplied belt, separate from Q. Reconcile stock, outward article, return and reuse without a second material charge.

- Selected flow: Polyethylene wrapping film
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section8 after raw conversion and same-cohort burden attribution; collect under cp_pack and verify actual applicability.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources:

###### Polypropylene packing strap (`supplied_strap`)

Actual article accompanying supplied belt, separate from Q. Reconcile stock, outward article, return and reuse without a second material charge.

- Selected flow: Polypropylene packing strap
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section8 after raw conversion and same-cohort burden attribution; collect under cp_pack and verify actual applicability.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources:

###### Returned steam condensate (`condensate`)

Conditional actual utility return with mass, enthalpy and receiving boundary; do not duplicate steam water/energy.

- Selected flow: Returned steam condensate
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section8 after raw conversion and same-cohort burden attribution; collect under cp_utility and verify actual applicability.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utility`
- Sources:

##### Waste flows

###### Uncured rubber compound waste (`uncured_scrap`)

Actual mixing/calender reject leaving the plant; internal reuse retains transfer and incremental burdens, not an external output.

- Selected flow: Uncured rubber compound waste
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section8 after raw conversion and same-cohort burden attribution; collect under cp_outlet and verify actual applicability.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlet`
- Sources:

###### Waste polyester-polyamide carcass fabric (`fabric_scrap`)

Actual uncoated EP offcuts with finish/moisture; rubberized offcuts are a separate composite stream.

- Selected flow: Waste polyester-polyamide carcass fabric
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section8 after raw conversion and same-cohort burden attribution; collect under cp_outlet and verify actual applicability.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlet`
- Sources:

###### Uncured EP-reinforced belt-build waste (`green_scrap`)

Actual outward reinforced green reject; rubber/fabric components are composition subledgers, not duplicate waste totals.

- Selected flow: Uncured EP-reinforced belt-build waste
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section8 after raw conversion and same-cohort burden attribution; collect under cp_outlet and verify actual applicability.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlet`
- Sources:

###### Vulcanized EP-reinforced conveyor-belt waste (`cured_scrap`)

Actual cured trim, destructive QC samples and final rejects, split by destination/quality. A saleable downgraded Product requires a separate explicit physical outlet and allocation; never hide or rename it to evade the reference rule.

- Selected flow: Vulcanized EP-reinforced conveyor-belt waste
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section8 after raw conversion and same-cohort burden attribution; collect under cp_outlet and verify actual applicability.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlet`
- Sources:

###### Carbon-black-containing collected mixing dust (`dust`)

Actual dust disposed externally. Separate internal return and airborne emissions; capture is not atmospheric release.

- Selected flow: Carbon-black-containing collected mixing dust
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section8 after raw conversion and same-cohort burden attribution; collect under cp_outlet and verify actual applicability.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlet`
- Sources:

###### Rubber-belt production wastewater (`wastewater`)

Actual wet wastewater to a defined treatment receiver with composition. For included onsite treatment cancel internal transfer and model each actual outlet; COD is not a substance or balance plug.

- Selected flow: Rubber-belt production wastewater
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section8 after raw conversion and same-cohort burden attribution; collect under cp_outlet and verify actual applicability.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlet`
- Sources:

###### Zinc-stearate-containing batch-off sludge (`sludge`)

Only if actual bath chemistry matches; record wet/solid/water and destination. Other sludge is a separate specific exchange.

- Selected flow: Zinc-stearate-containing batch-off sludge
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section8 after raw conversion and same-cohort burden attribution; collect under cp_outlet and verify actual applicability.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlet`
- Sources:

###### Spent hydraulic mineral oil (`spent_oil`)

Actual hydraulic oil disposal; spent thermal oil is a distinct additional stream if present.

- Selected flow: Spent hydraulic mineral oil
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section8 after raw conversion and same-cohort burden attribution; collect under cp_outlet and verify actual applicability.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlet`
- Sources:

###### Waste polyethylene film (`film_scrap`)

Actual protection-film waste with composition and receiver.

- Selected flow: Waste polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section8 after raw conversion and same-cohort burden attribution; collect under cp_outlet and verify actual applicability.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlet`
- Sources:

###### Waste polypropylene packing strap (`strap_scrap`)

Actual strap scrap/loss separately from film.

- Selected flow: Waste polypropylene packing strap
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section8 after raw conversion and same-cohort burden attribution; collect under cp_outlet and verify actual applicability.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlet`
- Sources:

###### Waste wooden shipping reel (`reel_scrap`)

Actual retired reel with destination, retaining reuse-pool accounting.

- Selected flow: Waste wooden shipping reel
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section8 after raw conversion and same-cohort burden attribution; collect under cp_outlet and verify actual applicability.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlet`
- Sources:

##### Elementary flows

###### Particulate matter smaller than10 micrometres, to air (`pm_air`)

Only actual supported atmospheric fraction and size definition, separate from captured dust and other sizes.

- Selected flow: Particulate matter smaller than10 micrometres, to air
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section8 after raw conversion and same-cohort burden attribution; collect under cp_emission and verify actual applicability.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources:

###### Styrene, to air (`styrene_air`)

Only actual independently supported species from mixing/curing/cement use; no generic VOC or assumed polymer monomer loss used as styrene.

- Selected flow: Styrene, to air
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section8 after raw conversion and same-cohort burden attribution; collect under cp_emission and verify actual applicability.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources:

###### Water vapour, to air (`water_air`)

Actual evaporation at matching conditions. Separate free/carrier/structural water, phase changes and independently evidenced chemical formation/consumption; no residual fit.

- Selected flow: Water vapour, to air
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section8 after raw conversion and same-cohort burden attribution; collect under cp_emission and verify actual applicability.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources:

###### Carbon dioxide, fossil, to air (`co2_air`)

Conditional actual onsite fuel carbon/oxidation evidence. Purchased utility upstream emissions are not emitted again onsite.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section8 after raw conversion and same-cohort burden attribution; collect under cp_emission and verify actual applicability.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources:

###### Nitrogen dioxide, to air (`no2_air`)

Only actual supported NO2. An NOx aggregate needs its reporting convention and cannot silently become pure NO2.

- Selected flow: Nitrogen dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section8 after raw conversion and same-cohort burden attribution; collect under cp_emission and verify actual applicability.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_scope | belt_supply | Apply the declared attributional case and ILCD7.9.2/7.9.3 hierarchy. First subdivide or virtually subdivide dedicated batches, lines, tests, storage and supply burdens using actual meters/transfers. Distinct recipe/product cohorts are not interchangeable and no blanket plant-wide mass/revenue share is assumed. | `ilcd-allocation-2010` |
| allocation_physical | belt_supply | For each remaining shared exchange establish determining physical causality from actual engineering evidence. A measured process relation or storage area/volume and duration may support its specific driver; generic mass, machine time or rated power alone does not. Retain drivers, equations and completeness for all products. | `ilcd-allocation-2010` |
| allocation_remaining | belt_supply | Only for remaining shared burdens that the preceding steps cannot attribute, document why and use actual coproduct market values at the same process exit condition, period and quantity/quality. Preserve prices/currency and evidence-backed deductions for later packaging/transport if required. Allocated inventories must sum to preallocation inventory. No arbitrary physical/economic switch, fixed split or full ILCD/PEF compliance claim. | `ilcd-allocation-2010` |
| allocation_returns | belt_supply | Internal trim/dust, returns and rework are not new coproducts, negative procurement or automatic recycling credits. Actual sold off-grade belts/rubber or recovered articles need explicit separate Product/Waste outlets, receivers, boundaries and supported allocation/treatment. Never hide them by renaming or sharing the reference UUID without their physical roles. | `ilcd-allocation-2010` |
| asset_manufacture_conservation | existing capital/reusable manufacture attribution | Within the applicable allocation decision context, original manufacture burden attributed across uses of actual capital equipment or reusable articles already included in foreground production, packaging or observed services uses one persistent same-asset ledger across all crops, products, cohorts, manufacturing/postrelease services, owners and observation periods. D is its supported whole installed service: all realized historical service plus supported remaining service in the same units as actual beneficiary use u; D must be finite and positive. Period capacity, remaining-only capacity, the physical asset/article mass alone, or current-period product Q alone is not D; supported whole-service throughput in mass units may be used when it demonstrates the causal service and matches u. This does not amortize the manufactured reference product over downstream life or change its declared reference gate/Q. The fractions u/D and all previously assigned manufacture shares together must never exceed 1. Changes of window, custody, provider or repair never restart the original manufacture balance. Replacements have distinct identities and only their real new manufacture vectors; actual repair and treatment increments remain separately accounted. Revised capacity evidence requires transparent reconciliation of prior shares and sensitivity, not a fresh ledger. Keep full physical mass and stock movements independent of burden shares. Unknown D, prior shares or beneficiary coverage requires review and no final manufacture-attributed amount; no assumed lifetime, utilization, zero or arbitrary division is permitted. For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

collection_method retains undivided raw period numerators and complete WIP/finished-stock carried burdens. aggregation_rule declares the final basis of the same single report_once operation, not normalization during collection.

### Data Collection Protocols

For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_delivery | belt_supply | terminal belt, release and stock | primary records and measurement ledger | site; period; layup; EP polymers and finish; cover/skim recipe; width/thickness/length; roll ID; tare; net mass; new release P; dispatch/acceptance ID; return/reversal/redelivery; Q; opening/closing WIP/finished stocks; exchange-level carried burdens | Owner: QC release manager and warehouse custodian jointly. Retain undivided real-period mass and signed release/delivery records. Calibrated net weighing excludes reels/wrap/straps. Pair actual length/area/roll count with the same configuration and net mass; no fixed kg per metre. Determine unique accepted net factory deliveries Q including carried finished stock, keeping new release P separate. A return/reinspection/redelivery links to the original lot and creates neither new P nor duplicate Q. Q must be positive to report. | kg; m; m2; roll count | each event and period reconciliation | complete real reporting period and opening/closing cohort links including failures, rework and carried burdens | actual plant and factory dispatch gate | per 1 kg reference flow | scale/dimension calibration; BOM and final QC; dispatch/return chain; physical stock and prior burdens |
| cp_material | belt_supply | each ingredient and whole compound/preparation | primary records and measurement ledger | material/grade ID; supplier; recipe version; gross/tare/net; assay/moisture/carrier; receipt/issue/return; stage/pass; failed/zero-output runs; WIP opening/closing mass and carried burdens | Owner: compounding materials custodian. Retain raw unnormalised period quantities for every purchased grade and every pass including failures, zero-output batches, rejects and rework. Whole supplied compounds/cements/oils/dispersions count once; assayed active/carrier/water are constituent subledgers. Onsite blends use independently acquired ingredients and real blending energy/loss. Pair internal transfers and stocks. | kg | each receipt and batch charge/pass | complete real reporting period and opening/closing cohort links including failures, rework and carried burdens | receiving, master/final mixing and preparations | per 1 kg reference flow | CoA; complete approved batch recipe; calibrated scales; issue/return and transfer records |
| cp_structure | belt_supply | EP fabric, calender, layup and cure | primary records and measurement ledger | fabric grade; warp/weft polymer; weave/finish; mass/area; width; ply count; top/skim/bottom mass/gauge; cut/trim; green/cured transfer; actual press temperature/pressure/time/tension; test/repair; failed cycles; WIP carry | Owner: calender/build engineer and cure/QC custodian. Record undivided actual fabric issues and each layer, paired green/cured transfers and actual cure/test/repair/acceptance record for the same configuration. Retain every failed cycle and WIP burdens. Actual site measurements, not literature settings, provide cure conditions and belt weight. | kg; m; m2; recorded process units | each roll, layup and cure cycle | complete real reporting period and opening/closing cohort links including failures, rework and carried burdens | fabric receipt, calender/build, cure/end cooling and final finishing | per 1 kg reference flow | fabric certificate; layer BOM; scales/dimensions; actual cure charts; destructive and visual QC |
| cp_utility | belt_supply | each utility, fuel and circuit oil | primary records and measurement ledger | stage/meter ID; interval; integrated reading or rate; supply/return conditions; heating value/enthalpy; mass/volume; makeup/return; circuit stocks; failed/rework activity; warehouse occupancy/handling | Owner: plant utilities engineer and warehouse energy custodian. Retain raw period meter deltas, fuel/oil issues and circuit makeup/losses for every stage, failed/zero-output runs and rework, actual storage, packing and dispatch. Keep supplied heat/steam/fuel boundaries and condensate returns. Rate times duration produces a numerator; integrated gas/liquid volume gets no further duration. Record every actual different fuel and refrigerant as a separate exchange; no rated-power substitute. | kWh; MJ; kg; m3 with conditions | each meter interval, refill and return | complete real reporting period and opening/closing cohort links including failures, rework and carried burdens | all plant stages and actual storage/dispatch | per 1 kg reference flow | meter calibration; invoices; enthalpy/heating-value basis; circuit balances; allocation evidence |
| cp_pack | belt_supply | each reel, cloth, film and strap | primary records and measurement ledger | article/material ID; measured tare; acquired/issued/returned/discarded; opening/closing pool; accompanying Product output; real reuse; damage/loss; cohort links | Owner: packing/dispatch custodian. Retain raw actual article mass and movements, separate from belt Q. Record supplier composition and measured article tare. Reusable reels/cloth use actual pools, returns and loss, without assumed uses or metres per roll. Retain all packing/repacking/handling burdens and outward packaging. | kg; article count | each packing, return, loss and stock count | complete real reporting period and opening/closing cohort links including failures, rework and carried burdens | finishing, packing, warehousing and dispatch | per 1 kg reference flow | supplier composition; tare measurement; pool ledger; dispatch/return/loss record |
| cp_outlet | belt_supply | each physical reject and external outlet | primary records and measurement ledger | stream/state; composition; wet/dry mass; receiver/treatment; internal return; Product/Waste status; opening/closing stock; samples; failed lots; carried burden | Owner: recovery/waste custodian and production stock accountant. Retain raw full-period outward quantities and composition for each actual uncured rubber, EP fabric, green/cured composite, captured dust, wastewater, oil and packaging stream. Separate each destination/grade, pair internal returns and establish true saleable coproducts and their allocation. | kg | each sample, transfer and outward dispatch | complete real reporting period and opening/closing cohort links including failures, rework and carried burdens | all production, rework and supply outlets | per 1 kg reference flow | weighbridge; manifests; assays; receiver/treatment proof; physical balances |
| cp_emission | belt_supply | each substance and receiving medium | primary records and measurement ledger | substance/medium; sample window; concentration; matched gas/liquid quantity; wet/dry/reference conditions; capture; actual water phases; independently evidenced reaction water; failed/rework activity | Owner: environmental monitoring custodian. Retain raw period measurements and supported species/phase conversions for actual mixing/calendering/curing/cement, onsite energy, rework and storage. Derive each species only from independent measurement/chemistry. Never fit an unknown emission and reaction water to one residual, COD or generic VOC. Captured waste/wastewater transfers are distinct from direct elementary releases. | kg; recorded source units | each supported sample and period integration | complete real reporting period and opening/closing cohort links including failures, rework and carried burdens | actual release point and receiving medium | per 1 kg reference flow | sampling/lab QA; calibration; gas/liquid conditions; species evidence and independent mass/element closure |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| report_once | all inventory rows | a_i = A_i / Q. A_i is each undivided atomic numerator uniquely attributed to the same actual supplied product/recipe/route/state cohort after raw conversions, dedicated/shared attribution and opening/closing raw-material, WIP and finished-stock burden adjustments. Q is positive unique accepted net factory-delivered belt kg from cp_delivery. Retain full-period failed/zero-output/rework burdens and opening carried burdens, carry closing undelivered burdens forward, then normalize once. Cards and aggregation_rule denote this same reporting operation. Reference output is Q/Q=1 kg. | A_i; Q; cp_delivery; cp_material; cp_structure; cp_utility; cp_pack; cp_outlet; cp_emission | a_i |  |
| raw_conversion | all inventory rows | Convert actual gross/tare/net mass to kg. Length/area/roll count requires paired net belt weighing and exact configuration in cp_delivery/cp_structure, never fixed kg/m or service amount. Material volume requires real same-state density. Rate times duration gives a numerator; integrated gas/liquid volumes get no extra time. Preserve gas conditions/heating value, steam mass/enthalpy and electrical/thermal units before report_once. | cp_delivery; cp_structure; cp_material; cp_utility; cp_pack; cp_outlet; cp_emission | converted raw numerators |  |
| physical_closure | belt_supply | Independently reconcile physical mass and elements for every control volume: opening stock plus actual external inflows equals closing stock plus all actual external outflows including each Product outlet, utility return, accompanying packaging, waste and elementary species. In production count new release P once; do not add the same cohort closing finished stock again as another production output. Separate finished-store accounting retains opening stock, internal P handover, Q, return/rework, closing stock and carried burdens. Cancel internal transfers on consolidation. Actual species, free/carrier/structural water and independently evidenced chemical water formation/consumption remain distinct. Never fit an unknown outlet and unknown reaction water to one closure residual or COD. Sulfur curing establishes no generic net water yield. | cp_delivery; cp_material; cp_structure; cp_utility; cp_pack; cp_outlet; cp_emission | raw physical mass element and burden ledgers |  |
| whole_inputs | belt_supply | Whole externally supplied compounds, oils, wet cements and dispersions count as single purchased preparations. Assayed active/polymer/carrier/water fractions reconcile within that mass, without duplicate procurement. Onsite mixing uses actual separately bought ingredients and real energy/losses. Packaging and reusable reel/cloth ledgers retain acquisition, opening/closing stock, accompanying outputs, returns/discard/reuse independent of belt Q. | cp_material; cp_pack; cp_delivery | nonduplicated preparations and packaging |  |
| asset_manufacture_share | existing capital/reusable manufacture attribution | For each included original asset manufacture vector B, f_current = u_current / D only after the persistent ledger verifies the supported whole installed-service denominator, all beneficiaries and prior assigned shares. Attribute f_current * B once to the actual beneficiary before the existing single reference normalization. Check prior_shares + all current/new beneficiary shares <= 1; carry the remaining original balance. Capacity revisions reconcile the historical ledger. Full physical asset/packaging mass and actual gross stocks/returns never receive f_current. Unknown D or history leaves the final attributed result unavailable, without suppressing actual repair/replacement/service burdens. | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | conserved attributed manufacture vector |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | belt_supply | Verify real multiple EP woven layers, distinct skim, SBR-based two covers and complete sulfur-vulcanized open-roll acceptance. Native broad names prove no EP/NN/steelcord, grade or life equivalence. | fabric/compound supplier records; complete layer BOM; cure/final acceptance |
| quality_period | all inventory rows | Complete period inputs/burdens include failures, zero-output batches, rework, WIP and finished-stock carry; Q is actual positive unique net delivery, never P, gross throughput or packed mass. | period/cohort and physical stock reconciliation; return links; exchange-level prior burdens |
| quality_units | all inventory rows | Calibrated mass/energy, same-configuration length/area/count conversion, whole preparations and independent physical/species evidence; no default weight, recipe, yield, service quantity, cure condition or reaction water. | calibration; assays; paired net weighing; condition/phase and species evidence |
| quality_projection | belt_supply | Preserve every native name component, comment debt, grade/form/route/geography/medium and exact property/unit restriction in consumable context. Both projections retain every raw table/source/protocol/calculation/quality field and full limitations. Schema/ID equality alone is insufficient. | complete direct original; primary sources; raw-to-typed audit; provider evidence |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | product | reference_flow_link selects one actual terminal Product output with the declared reference UUID: the independently qualified complete cured EP belt, never compound, green build, fabric or conveying service. Retain exact official Chinese basename and all native limits. Real other outputs retain their physical roles even if sharing UUID. |  |
| validate_delivery | all inventory rows | Verify positive unique net-delivery Q distinct from P, matched product/recipe/route/state/period and measured mass conversion. Reconcile full-period failures/rework, WIP/finished opening/closing masses and burdens, linked returns/reacceptance/redelivery and real storage/packing/handling/dispatch. report_once is the only normalization. |  |
| validate_balance | belt_supply | Check physical_closure and whole_inputs for every actual material/utility/packaging and Product/Waste/elementary outlet. Pair/cancel internal transfers, avoid double purchases and preserve independent water/species evidence without residual fitting. Complete all actual recipe/cure/utility/outlet rows before use. |  |
| validate_method | belt_supply | Enforce bounded EP structure and supply, collection owners, source/native/provider applicability, bilingual full-field retention and declared allocation hierarchy. Core reference/method contradictions block usable guidance; disclose ordinary future measurement/auxiliary UUID gaps without fabricating values. Scientific review is separate. | `fenner-belt-making-2023`; `somi-belt-process`; `ilcd-allocation-2010` |
| validate_asset_manufacture_conservation | existing capital/reusable manufacture attribution | For every included capital/reusable manufacture attribution verify same-asset continuity, whole installed service in matched units, all historical/current beneficiaries, prior assigned manufacture shares and cumulative share <= 1. Reject a reset by period, cohort, provider, owner or repair. Check distinct real replacement and incremental repair/treatment vectors separately and preserve gross physical mass. A missing denominator, unexplained previous allocation or incomplete beneficiary ledger requires explicit review and an unavailable final attributed amount; structural inspection cannot claim empirical completeness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Evidence-matched complete EP multi-ply cured open-roll belt supply to downstream installation/use models |
| allowed_use | Actual structure/compound/supplied state and compatible geography/technology/period/provider, explicit1 kg net factory delivery and packaging boundary |
| excluded_use | Default substitute for every36240 belt, uncured compound/fabric, conveying service, EP/NN/steelcord equivalence or fixed life; full ILCD/PEF/scientific approval claims |
| required_metadata | All Required qualifiers and complete native limits; protocol owners; actual recipe/structure/cure; Q/P and stock/carry ledgers; utilities/packaging/outlets and allocation |
| required_quality_disclosure | Actual coverage; missing future measurement/provider/auxiliary identities; source synthesis and independence limits; native metadata debt; uncertainty and pending review |
| update_trigger | Material changes in EP layup/finish, compound recipe, cure, supply state, process/boundary, Q gate/conversion, stock attribution or primary/native evidence |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| fenner-belt-making-2023 | literature | Quality in the making – how rubber conveyor belts are made; Mining & Quarry World December 2023; https://www.fennerdunlopemea.com/app/uploads/Quality-in-the-Making.-MQW-December-2023.pdf | Netherlands primary factory observation hosted by manufacturer, not a same-SKU recipe or universal amounts, duration, pressure, service or lifetime. Carbon black is incorrectly called a polymer in the prose; no chemical taxonomy, numerical performance comparisons or regulatory/safety claims are adopted. Article also discusses excluded steelcord and proprietary single/dual-ply structures. |
| fenner-superfort | literature | Superfort multi-ply conveyor belts; HTML snapshot 2026-10-16T11:17:40.555Z; https://www.fennerdunlopemea.com/conveyor-belts/superfort/ | Real supplied multi-ply EP product evidence only. No stock dimension, strength, universal cover formulation, performance, life, temperature or rate is transferred. Cover grades remain distinct; page does not establish a complete foreground inventory or any mass per metre. |
| somi-belt-process | literature | Stage-wise conveyor belt manufacturing; Web snapshot 2026-10-16; https://somiconveyor.com/our-usp | Indian plant process observation; selected textile multi-ply stages only. Cord creel/tension/comb steps are not EP-fabric instructions. No equipment count, power, throughput, process time, numeric recipe, magnetic-field claim or lifecycle factor is transferred. |
| fenner-rubber-2024 | literature | It’s all about the rubber; Mining & Quarry World October 2024; https://www.fennerdunlopemea.com/app/uploads/Its-all-about-the-rubber.-MQW.-OCT-2024-003.pdf | Same author/manufacturer family as quality paper, not independent corroboration. Mixing/compound outsourcing context only; no claimed mass shares, temperatures, comparisons, generic formula or performance. Carbon black polymer wording is a source error and is not adopted. |
| ilcd-allocation-2010 | official_guidance | ILCD Handbook: General guide for Life Cycle Assessment — Detailed guidance; First edition March 2010; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Declared attributional allocation case only, with complete7.9.2/7.9.3 context read. Subdivide first, determining physical causality per exchange, then remaining burdens by market value at identical exit conditions when causality is not determinable. No universal mass split, optional arbitrary method switch, avoided-production credit, full ILCD or PEF compliance. |
