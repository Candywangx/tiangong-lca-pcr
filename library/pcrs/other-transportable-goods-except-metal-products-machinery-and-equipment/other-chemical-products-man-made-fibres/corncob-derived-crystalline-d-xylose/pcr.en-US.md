---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.corncob-derived-crystalline-d-xylose
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Corncob-derived crystalline D-xylose — sulfuric-acid hydrolysis and methanol-washed crystals

## 1. Scope and Applicability

This PCR covers one separated chemical product: crystalline D-xylose (CAS 58-86-6; C5H10O5) extracted from corncobs by sulfuric-acid hydrolysis, calcium-carbonate neutralisation, carbon/ion-exchange refining, evaporation, cooling crystallisation, methanol-assisted centrifugal washing, hot-air drying and bag packing. USP confirms the chemical identity, crystal form and corncob processing sequence; ENCO describes the selected technical route. Neither source supplies an audited factory recipe. No numeric purity, moisture, hydrate, solvent residue, drying loss, reaction-water amount or yield is prescribed. [usp-fcc-xylose-2015; enco-xylose-technology]

Exclude L-xylose, unspecified stereoisomer mixtures, arabinose, ribose, other sugars/CAS identities, xylitol, sugar ethers, sugar esters and their salts, formulated sweeteners, glucose/fructose/lactose/maltose/sucrose products, mixed food syrups, starch and cellulose products. Exclude xylose solution as the final product, separately declared stoichiometric xylose hydrates, other biomass feedstocks, oxalic-acid/enzymatic routes, and water-only crystal washing. These require their own applicability assessment; do not substitute this reference UUID across them.

The terminal reference gate is actual net factory-gate delivery, not new quality release. Q is strictly positive net kg of unique accepted deliveries of this same product, route, state and period, excluding packaging. Track first quality release R separately, with failed/zero-output runs, returns, rework, opening/closing WIP and finished goods and their inherited exchange burdens. R and Q need not equal. An undelivered crystal remains in closing finished goods, never in Q. Reverse a cancelled/returned delivery and its burdens against its original transaction; reinspection or redelivery cannot create duplicate production or duplicate net delivery.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.corncob-derived-crystalline-d-xylose |
| classification_refs | CPC 3.0 35240; narrower candidate context only; no accepted mapping asserted |
| covered_products | Chemically identified crystalline D-xylose from the single corncob route above |
| excluded_products | Exclude L-xylose, unspecified stereoisomer mixtures, arabinose, ribose, other sugars/CAS identities, xylitol, sugar ethers, sugar esters and their salts, formulated sweeteners, glucose/fructose/lactose/maltose/sucrose products, mixed food syrups, starch and cellulose products. Exclude xylose solution as the final product, separately declared stoichiometric xylose hydrates, other biomass feedstocks, oxalic-acid/enzymatic routes, and water-only crystal washing. These require their own applicability assessment; do not substitute this reference UUID across them. |
| representative_product | D-xylose crystals, CAS 58-86-6, at measured delivery moisture and residual solvent |
| production_route | Corncob sulfuric-acid hydrolysis; calcium carbonate; powdered carbon; cation and anion exchange; evaporative concentration; cooling crystals; methanol wash; drying; packing; stock and dispatch |
| market_state | Bagged crystalline solid, declared grade, tested actual moisture and residual methanol; no solution or implicit hydrate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply separated crystalline D-xylose from the stated route |
| How much | 1 kg net accepted crystalline product actually delivered at factory gate |
| How well | Meet the declared product specification using measured identity, assay basis, moisture, phase and residual solvent; no default purity or drying-zero-residue claim |
| How long or cycle | Complete stated reporting period with traceable cohort and inventory carryover |
| reference_flow_link | delivered_xylose |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Xylose `379f8fcb-e63e-4097-aa56-ada4ace47df0` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | D identity and CAS; non-hydrate crystal phase confirmation; assay method and assay basis; actual moisture and residual methanol; corncob origin; sulfuric-acid/calcium-carbonate/methanol route; batch and period; site geography; supplier and native-name compatibility; actual net-delivery gate; opening and closing WIP/finished-stock masses and carried burdens; first release versus delivery; returns/rework lineage; bag composition; utility route; allocation and waste destinations |

All required qualifiers belong in concrete dataset metadata, process notes, reference comments or product descriptions; missing qualifiers make the reference definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use delivered net crystal mass Q excluding packaging; segregate each CAS, route, grade and physical state. R is first quality-release mass, not a substitute for Q. |
| `solution_subledger` | purchased formulations | Mass | kg | Book each whole purchased acid, alkali or methanol formulation once. Assayed solute and carrier water are composition subledgers, not further external purchases; separately added water is a separate input. |
| `water_species` | hydrolysis and refining | Mass and elemental balance | kg | Measure biomass composition, water, species and outlet phases independently. Hydrolytic water consumption, carbonate neutralisation products and ion-exchange/regeneration water follow evidenced actual chemistry; free water, hydrate water and evaporation remain separate. Never solve unknown reaction water and an unknown outlet from one closure residual; COD is not a sugar/species assay. |
| `raw_units` | all measured exchanges | Original property with conversion trace | kg; kWh; MJ; m3 | Retain volume temperature/composition and measured density, steam enthalpy/condensate and meter integration basis. Integrate a rate once over time; an already integrated liquid/gas volume gets no further time multiplier. Do not interpret a secondary native property factor as density. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual received corncobs, whole commercial reagents, replacement media and bags; matched upstream supply chains |
| starting_condition_role | Foreground gate-in, with internally separated production and warehouse/dispatch ledgers |
| product_classification_scope | Only the named chemically identified solid D-xylose; classification is context |
| recursive_input_rule | Purchased seed D-xylose is one external input with inherited upstream burden. Recovered seed, dust, mother liquor, condensate and rework are internal transfers, never fresh purchases or fresh output. |
| upstream_dataset_requirement | Match actual commercial form, concentration, origin, geography and technology of each external input; unresolved providers remain disclosed |
| disclosure | Receipt through actual net delivery, including production release, failed batches, stock carryover, warehouse/handling/packing/dispatch, rework, utility supply, emissions, off-site treatment and any on-site treatment expansion |

### Boundary Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_operations` | xylose_supply | Include reception, hydrolysis, residue separation, neutralisation, carbon/ion exchange, concentration/crystallisation, methanol washing, drying, QC, packing, storage, handling and loading actually performed. Separate production and post-release ledgers; cancel internal handoffs on consolidation. | `enco-xylose-technology` |
| `boundary_utilities` | utility and treatment systems | The supplied-utility inventory below uses external electricity and steam with condensate accounting. If the site has a boiler, direct-fired dryer, refrigerated utility, on-site effluent treatment or solvent recovery, expand the process inventory with each actual fuel, reagent, refrigerant, recovered output and pollutant as separate atomic rows before claiming coverage; retain their complete burdens. Off-site treatment is linked once to the measured waste, not counted as foreground discharge. |  |
| `boundary_identity` | reference and intermediate streams | The selected native identity is Xylose / 木糖, a Product flow with biomass-extraction, food-safety-compliant, five-carbon-sugar and factory production-mix name components, crystalline D-xylose synonyms and xylan/corncob comments. The bilingual raw/原生 qualifier is retained as a virgin biomass-origin qualifier, not a measured purity. Native geography is empty: no CN/HK or other location of supply is asserted. CAS, exact purity, hydration, sulfuric-acid route detail, supplier and production quantities are unspecified in that row. Its 23210 classification conflicts with the proposed chemically pure residual-sugar context; record this metadata debt separately from physical identity. Comment claims about calorie content, healing or other benefits and synthetic derivatives are not adopted. A concrete dataset must verify D identity, actual crystal state, grade, residual methanol and source compatibility; the broad identity is no supplier/background-production dataset. |  |
| `boundary_solvent` | methanol wash and drying | Test residual solvent and trace methanol in purchased formulation, recycled mother liquor, recovered solvent, purge and air. Do not adopt a generic assertion that drying removes every trace or that methanol-washed mother liquor is food-grade. Exported mother liquor requires actual composition/destination and product-or-waste evidence. | `enco-xylose-technology` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| xylose_supply | Corncob to net delivered crystalline D-xylose | required | always; include actual technical operations | internally separate production and post-release warehouse/dispatch ledgers; cancel handoffs on consolidation | 1 kg reference flow |

This composite process preserves measured unit-operation subledgers. Internal hydrolysate/refined liquid, first release and warehouse receipt are neither purchases nor extra terminal products. If subdivided into unit processes, use the same identity on both sides of each physical handoff and cancel it; do not hide actual intermediates or co-products sharing the reference UUID.

### Process: Corncob to net delivery (`xylose_supply`)

#### Inputs

##### Product flows

###### Received corncobs (`corncobs`)

Use actual received/consumed whole biomass with measured moisture, xylan and other components; do not equate corncob mass to xylose or glucose.

- Selected flow: Received corncobs
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Unnormalised exchange numerator A attributable to the same net-delivery cohort divided by Q, reported once
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `usp-fcc-xylose-2015`; `enco-xylose-technology`

###### Sulfuric acid aqueous formulation (`sulfuric_solution`)

Whole commercial acid solution once, with actual assay and carrier-water subledger; on-site dilution water is separate.

- Selected flow: Sulfuric acid aqueous formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Unnormalised exchange numerator A attributable to the same net-delivery cohort divided by Q, reported once
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `enco-xylose-technology`

###### Calcium carbonate powder (`calcium_carbonate`)

Record actual supplied powder purity and dose; calcium sulfate phase, dissolved calcium and carbonate-derived CO2 are measured or independently supported, never assigned from a generic gypsum factor.

- Selected flow: Calcium carbonate powder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Unnormalised exchange numerator A attributable to the same net-delivery cohort divided by Q, reported once
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `enco-xylose-technology`

###### Powdered activated carbon (`activated_carbon`)

Fresh make-up/replacement only; internal reuse retains its burden and is not another purchase.

- Selected flow: Powdered activated carbon
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Unnormalised exchange numerator A attributable to the same net-delivery cohort divided by Q, reported once
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_media`
- Sources: `enco-xylose-technology`

###### Strong-acid cation-exchange resin (`cation_resin`)

Track actual supplied ionic form, wet conditioning, additions, regeneration and lifetime burden; no assumed dry or hydrogen form.

- Selected flow: Strong-acid cation-exchange resin
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Unnormalised exchange numerator A attributable to the same net-delivery cohort divided by Q, reported once
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_media`
- Sources: `enco-xylose-technology`

###### Strong-base anion-exchange resin (`strong_anion_resin`)

Track actual supplied form and service-cycle replacement independently.

- Selected flow: Strong-base anion-exchange resin
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Unnormalised exchange numerator A attributable to the same net-delivery cohort divided by Q, reported once
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_media`
- Sources: `enco-xylose-technology`

###### Weak-base anion-exchange resin (`weak_anion_resin`)

Track this separate resin and its conditioning/regeneration; do not combine with the strong-base resin.

- Selected flow: Weak-base anion-exchange resin
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Unnormalised exchange numerator A attributable to the same net-delivery cohort divided by Q, reported once
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_media`
- Sources: `enco-xylose-technology`

###### Hydrochloric acid aqueous formulation (`hydrochloric_solution`)

Whole supplied regenerant once; retain assay, storage losses, regenerations and rinse transfers.

- Selected flow: Hydrochloric acid aqueous formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Unnormalised exchange numerator A attributable to the same net-delivery cohort divided by Q, reported once
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `enco-xylose-technology`

###### Sodium hydroxide aqueous formulation (`sodium_hydroxide_solution`)

Whole supplied alkaline regenerant once, including actual concentration and carried water.

- Selected flow: Sodium hydroxide aqueous formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Unnormalised exchange numerator A attributable to the same net-delivery cohort divided by Q, reported once
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `enco-xylose-technology`

###### Methanol crystal-washing liquid (`methanol_liquid`)

Whole externally acquired liquid at actual water/purity specification. Recycled wash is internal; assay the methanol subledger and trace all residual/outlet pathways.

- Selected flow: Methanol crystal-washing liquid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Unnormalised exchange numerator A attributable to the same net-delivery cohort divided by Q, reported once
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `enco-xylose-technology`

###### Supplied process water (`process_water`)

Separately supplied make-up for washing, hydrolysis, dilution, rinsing and cooling; carrier water and internal condensate/recycle are separate subledgers, not more procurement.

- Selected flow: Supplied process water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Unnormalised exchange numerator A attributable to the same net-delivery cohort divided by Q, reported once
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `enco-xylose-technology`

###### Purchased D-xylose crystallisation seed (`purchased_seed`)

Include only externally acquired seed if used, with identity and inherited supplier burden; recycled own crystals remain internal.

- Selected flow: Xylose `379f8fcb-e63e-4097-aa56-ada4ace47df0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Unnormalised exchange numerator A attributable to the same net-delivery cohort divided by Q, reported once
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `enco-xylose-technology`

###### Purchased electricity (`electricity`)

All manufacturing, air movement, pumps, controls, QA, warehouse, handling and dispatch loads, including failed batches, downtime and rework; allocate shared loads by recorded causes.

- Selected flow: Purchased electricity
- Flow property / unit: Energy / kWh
- Amount rule: Unnormalised exchange numerator A attributable to the same net-delivery cohort divided by Q, reported once
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Sources: `enco-xylose-technology`

###### Purchased steam (`steam`)

Retain pressure, temperature, enthalpy and metered mass; include drying/evaporation and losses. Preserve condensate return and avoid buying the same heat again in MJ.

- Selected flow: Purchased steam
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Unnormalised exchange numerator A attributable to the same net-delivery cohort divided by Q, reported once
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Sources: `enco-xylose-technology`

###### Woven plastic outer xylose sack (`woven_sack`)

One supplied outer sack; declare actual polymer, additives and supplier mass without assuming a generic polypropylene grade. Include unused rejects and replacement packing.

- Selected flow: Woven plastic outer xylose sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Unnormalised exchange numerator A attributable to the same net-delivery cohort divided by Q, reported once
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packing`
- Sources: `enco-xylose-technology`

###### Plastic film inner xylose bag (`film_liner`)

One separately acquired liner; document actual polymer and mass. If purchased as one assembled lined sack, replace these two purchase rows with one specific supplied article and retain composition subledgers.

- Selected flow: Plastic film inner xylose bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Unnormalised exchange numerator A attributable to the same net-delivery cohort divided by Q, reported once
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packing`
- Sources: `enco-xylose-technology`

#### Outputs

##### Product flows

###### Net delivered D-xylose crystals (`delivered_xylose`)

Unique terminal Product output. Q is actual net accepted delivered product, after inventory/return reconciliation; the reporting output is exactly 1 kg. R and stock transfers are internal accounting facts, not additional final outputs.

- Selected flow: Xylose `379f8fcb-e63e-4097-aa56-ada4ace47df0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_delivery`
- Sources: `usp-fcc-xylose-2015`; `enco-xylose-technology`

###### Returned steam condensate (`condensate_return`)

Record actual external return, temperature and enthalpy, with one consistent utility-provider boundary; internal reuse is not an export.

- Selected flow: Returned steam condensate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Unnormalised exchange numerator A attributable to the same net-delivery cohort divided by Q, reported once
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `enco-xylose-technology`

##### Waste flows

###### Wet hydrolysed corncob residue (`cob_residue`)

One physical residue stream, with actual moisture, residual carbohydrate and destination. Product use requires evidenced status and allocation; no automatic zero burden or fuel credit.

- Selected flow: Wet hydrolysed corncob residue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Unnormalised exchange numerator A attributable to the same net-delivery cohort divided by Q, reported once
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Sources: `enco-xylose-technology`

###### Spent decolourisation filter cake (`filter_cake`)

One collected cake, including its actual precipitated calcium sulfate, spent carbon, entrained sugar and liquid where co-filtered. Keep mixed-cake composition; never recast as pure gypsum or duplicate its carbon/water as separate disposal mass.

- Selected flow: Spent decolourisation filter cake
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Unnormalised exchange numerator A attributable to the same net-delivery cohort divided by Q, reported once
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Sources: `enco-xylose-technology`

###### Spent strong-acid cation-exchange resin (`spent_cation`)

Actual retired resin, ionic/contaminant loading and wet mass, linked to replacement/service-life allocation.

- Selected flow: Spent strong-acid cation-exchange resin
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Unnormalised exchange numerator A attributable to the same net-delivery cohort divided by Q, reported once
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Sources: `enco-xylose-technology`

###### Spent strong-base anion-exchange resin (`spent_strong_anion`)

Separate retired resin; no blanket annual replacement default.

- Selected flow: Spent strong-base anion-exchange resin
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Unnormalised exchange numerator A attributable to the same net-delivery cohort divided by Q, reported once
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Sources: `enco-xylose-technology`

###### Spent weak-base anion-exchange resin (`spent_weak_anion`)

Separate retired resin with actual treatment destination.

- Selected flow: Spent weak-base anion-exchange resin
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Unnormalised exchange numerator A attributable to the same net-delivery cohort divided by Q, reported once
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Sources: `enco-xylose-technology`

###### Methanol-containing xylose mother-liquor purge (`mother_liquor_purge`)

Whole physically exported purge with sugar, water and methanol subledgers. Internal recycle is not waste output; any actual separate solvent recovery/product export needs an additional specific row and burden allocation.

- Selected flow: Methanol-containing xylose mother-liquor purge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Unnormalised exchange numerator A attributable to the same net-delivery cohort divided by Q, reported once
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Sources: `enco-xylose-technology`

###### Collected process wastewater for external treatment (`wastewater`)

One collected aqueous drain after source routing, excluding separately removed mother liquor. Preserve actual dissolved sugars, salts and solvent; mass/COD do not infer individual species. Actual on-site treatment requires inventory expansion.

- Selected flow: Collected process wastewater for external treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Unnormalised exchange numerator A attributable to the same net-delivery cohort divided by Q, reported once
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `enco-xylose-technology`

###### Rejected woven plastic outer sacks (`sack_scrap`)

Only actual removed outer-sack scrap; packaging delivered with product remains in the package subledger and is not factory waste.

- Selected flow: Rejected woven plastic outer sacks
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Unnormalised exchange numerator A attributable to the same net-delivery cohort divided by Q, reported once
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packing`
- Sources: `enco-xylose-technology`

###### Rejected plastic film inner bags (`liner_scrap`)

Only actual liner scrap or replacements removed; keep destination and mass separate from the outer sack.

- Selected flow: Rejected plastic film inner bags
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Unnormalised exchange numerator A attributable to the same net-delivery cohort divided by Q, reported once
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packing`
- Sources: `enco-xylose-technology`

##### Elementary flows

###### Methanol to air (`methanol_air`)

Matched drying, washing, storage and fugitive sources after controls; monitor species and flows or use an independently supported source-specific model, not solvent purchase minus an arbitrary assumed remainder.

- Selected flow: Methanol to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Unnormalised exchange numerator A attributable to the same net-delivery cohort divided by Q, reported once
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `enco-xylose-technology`

###### D-xylose dust to air (`sugar_dust`)

Only uncaptured emitted sugar dust; cyclone/bag-filter recovery and screened lumps routed back are internal rework, retaining energy and losses.

- Selected flow: D-xylose dust to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Unnormalised exchange numerator A attributable to the same net-delivery cohort divided by Q, reported once
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `enco-xylose-technology`

###### Water vapour to air (`water_air`)

Net process/drying/utility water vapour supported by independent moisture/condensate measurements; separate air carrier, reaction water, retained water and utility condensate.

- Selected flow: Water vapour to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Unnormalised exchange numerator A attributable to the same net-delivery cohort divided by Q, reported once
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `enco-xylose-technology`

###### Carbon dioxide from carbonate neutralisation to air (`carbonate_co2`)

Use actual carbonate consumption and independently evidenced speciation/reaction extent or monitoring; distinguish mineral carbonate carbon from biomass carbon. No empirical closure factor.

- Selected flow: Carbon dioxide from carbonate neutralisation to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Unnormalised exchange numerator A attributable to the same net-delivery cohort divided by Q, reported once
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `enco-xylose-technology`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | shared production and services | Use segregated process meters and cohort traceability before allocating joint burdens. Record shared utility, treatment and warehouse drivers; never omit failed/zero-output runs. Attribute their burdens to the supported same-product cohort or a separately justified cause, not an invented positive output. | `jrc-ilcd-allocation-2010` |
| `allocation_residue` | residue and mother liquor | Document whether each actual output is waste or a usable co-product, its measured composition and destination. No automatic avoided-product credit. If inseparable useful co-products exist, first identify and apply supported determining physical causal relationships to each exchange, including virtual subdivision where possible. Only remaining burdens that cannot be assigned this way may use documented market values for actual co-functions at the same process-exit condition; explain why physical assignment is unavailable, document matched-period quantities/prices, and report sensitivity. Record the whole period before allocation. | `jrc-ilcd-allocation-2010` |
| `allocation_carryover` | WIP and finished goods | Transfer the original exchange-burden vector with each WIP, first release, stock movement, return and rework batch. Internal transfers cancel across production and warehouse ledgers. Carry undelivered burdens into closing finished goods and opening burdens into actual deliveries, without adding the same released mass again as an external output. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

Each protocol_id has one process_id owner. collection_method retains unnormalised raw-period numerators and complete opening/closing carried burdens. aggregation_rule states the final reporting basis only; report_once performs that operation once, never an A/Q step at collection. Preserve original exchange-burden vectors across periods, not only aggregate impact scores.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_materials | xylose_supply | biomass and whole purchased reagents | scale, issue, purchase and assay records | lot; supplier; chemical/CAS; form; opening/closing material stocks; receipts; issues; returns; gross/tare/net mass; concentration; water; density/temperature; seed origin; routing; batch | Materials owner reconciles actual whole-supply consumption by lot from calibrated scales and stores records, retaining raw mass and composition subledgers. On-site blends retain separate actual acquired ingredients, blend energy and losses. Include rejected/zero-output batches and all return/rework movements; perform no division by Q. | kg; mass fraction; m3; kg/m3 | each receipt and batch | complete declared period plus opening/closing inheritance | all included operations and warehouse/dispatch of this process | per 1 kg reference flow | tickets; supplier COA; moisture and carbohydrate speciation methods; concentration and density records; inventory reconciliation |
| cp_media | xylose_supply | carbon and each resin | replacement and service-cycle log | identity; wet/dry basis; ion form; purchased mass; opening/closing installed stock; additions; retired mass; conditioning; regeneration cycles; attributable service period; burden vector | Media owner reconciles each medium independently from purchase, installed-stock and cycle records; retain actual conditioning liquids, regeneration and spent-media routes. Carry prior-service burdens and closing unconsumed life; no default lifetime or per-kg normalisation at collection. | kg; cycles | each addition, regeneration and retirement | complete declared period plus opening/closing inheritance | all included operations and warehouse/dispatch of this process | per 1 kg reference flow | supplier form/specification; service log; stock and burden reconciliation |
| cp_water | xylose_supply | external water, condensate and aqueous drain | water meter and liquid routing record | meter; raw integrated volume or rate/time; temperature; density; source; drain; condensate return; internally reused volume; sample composition; whole-stream mass; carrier-water subledger | Water owner reads calibrated meters and matched sample/scale records for each actual stream; preserve integrated readings, material formulation water, internal reuse and external treatment transfer separately. Measure net water balance without assigning reaction water from its residual; retain raw totals only. | kg; m3; kg/m3 | continuous and each transfer | complete declared period plus opening/closing inheritance | all included operations and warehouse/dispatch of this process | per 1 kg reference flow | meter calibration; routing diagram; temperature/composition-matched density; sample chain |
| cp_utilities | xylose_supply | each energy carrier and support load | meter, invoice and equipment log | electricity readings; steam mass/pressure/temperature/enthalpy; condensate; source; equipment hours; failed and zero-output time; shared driver; QA; warehouse; handling; dispatch; rework | Utilities owner retains the complete period raw metered inputs and engineering allocation evidence by carrier, including idle, failure and post-release operations. Separate purchased utility from on-site generation to prevent double counting; retain raw totals before any reference division. | kWh; kg steam; MJ; hours | continuous and each invoice period | complete declared period plus opening/closing inheritance | all included operations and warehouse/dispatch of this process | per 1 kg reference flow | calibration; invoice reconciliation; run logs; shared-driver evidence |
| cp_packing | xylose_supply | each bag component and scrap | packing issue, scale and supplier record | component; actual polymer/composition; supplier article; assembled/separate purchase; opening/closing stocks; issues; returned unused items; packing/repacking batch; delivered package mass; scrap mass; burden | Packing owner weighs representative actual components and counts actual issues/returns, retaining raw kg, stock carryover and loss/repack records. One assembled supplied sack is one procurement; constituent masses are only subledgers. Product net mass excludes the bag; no division during collection. | kg; items; kg/item | each component receipt and packing batch | complete declared period plus opening/closing inheritance | all included operations and warehouse/dispatch of this process | per 1 kg reference flow | supplier composition; calibrated scales; issue/return/scrap records |
| cp_delivery | xylose_supply | release, WIP, stock, returns and net delivery | QC, batch genealogy, warehouse and dispatch records | D identity/CAS; assay method/basis; phase; moisture; methanol result/detection limit; batch and cohort; first release R; opening/closing WIP and FG mass; inherited burden vectors; gross/tare/net gate delivery; accepted/reversed transaction; return; rework; stock losses; package | Release/warehouse owner separately signs the production and post-release ledgers; weighs actual outgoing net product on calibrated scales and links accepted deliveries, reversals and returns to original lot/transaction. Preserve raw Q and R records, all zero-output runs, opening/closing WIP/FG and their burdens. Never relabel reinspection as first release or undelivered stock as delivered product; collection performs no inventory normalisation. | kg; mass fraction; kg-exchange burden vectors | each batch, transaction and period close | complete declared period plus opening/closing inheritance | all included operations and warehouse/dispatch of this process | per 1 kg reference flow | scale calibration; analytical method/detection limits; phase evidence; unique transaction register; signed dual-ledger burden roll-forward |
| cp_residues | xylose_supply | each residue, purge and retired resin | weighing, assay and treatment manifest | physical stream; whole wet mass; moisture; actual species; methanol; residual sugar; sulfate/calcium/carbon; origin batch; destination; waste/product evidence; revenue if relevant; opening/closing stocks; inherited burdens | Residue owner samples and weighs each physically separate exported stream, preserving the whole mixed cake or mother liquor and composition subledgers. Retain raw destination/treatment burdens and residue stock carryover; independently substantiate species and reaction extent instead of deriving them from COD or balance closure. | kg wet; mass fraction; kg species | each batch and removal | complete declared period plus opening/closing inheritance | all included operations and warehouse/dispatch of this process | per 1 kg reference flow | sampling plan; analysis; scale; manifests; documented chemistry; product/waste and allocation decision |
| cp_emissions | xylose_supply | each measured air species | source monitoring and activity record | source; actual species; concentration; dry/wet gas basis; temperature/pressure; rate and duration or integrated volume; control efficiency evidence; captured return; residual solvent; operating interval; carbonate consumption/speciation | Environment owner matches measured species concentration to the correct gas volume/operating interval after controls, retaining independently evidenced calculations where used. Rate times duration is integrated once; integrated volume receives no second time factor. Keep measured raw pollutant mass, detection limits and unmeasured gaps without presumed zeroes. | kg; mg/m3; m3; hours | each monitoring interval plus full operating coverage | complete declared period plus opening/closing inheritance | all included operations and warehouse/dispatch of this process | per 1 kg reference flow | calibration; gas conditions; sample chain; monitor report; activity/speciation basis; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| assemble_delivery_burden | all inventory rows | For each original exchange component, assemble the attributable unnormalised delivery-cohort numerator A from opening WIP and FG carried burdens plus complete period burdens, less closing WIP/FG carried burdens and separately justified other-product burdens. Reconcile returns, waste treatment, media service-life and internal handoffs once; zero-output/rework burdens remain. Preserve raw source units and conversion traces. No division here. | cp_materials; cp_media; cp_water; cp_utilities; cp_packing; cp_delivery; cp_residues; cp_emissions | A, unnormalised delivery-cohort exchange vector |  |
| report_once | all inventory rows | Reported exchange = A / Q, exactly once, after raw unit conversion and burden roll-forward; Q is strictly positive net accepted factory-gate delivery kg from the unique transaction register. This is the same reporting operation named by card amount expressions and aggregation_rule, never a second sequential division. For the terminal product the numerator is Q and the output is 1 kg. | A; Q; cp_delivery | exchange per 1 kg reference flow |  |
| physical_reconciliation | production and post-release ledgers | Independently reconcile complete physical material/water/element ledgers: opening stock plus actual inputs and transfers equals closing stock plus actual outputs and transfers within measurement uncertainty. Record first release R once in production and its counterpart warehouse receipt once, then cancel them on consolidation. Finished stock opening plus receipts and returns reconciles gross dispatch, closing stock, rework withdrawals and losses. Support actual hydrolysis, carbonate products, ion exchange, sugar degradation and phase/water changes independently; never use two unknown outlets to fit one residual. | cp_delivery; cp_materials; cp_water; cp_residues; cp_emissions | signed physical and burden ledgers; independently supported species accounting |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | reference product | Verify D identity/CAS and actual crystal phase, grade, moisture, assay basis and residual methanol against site/supplier records. Native broad identity and no-geography data cannot supply missing grade, route, supplier or location facts. | COA; analytical and phase evidence; full native fields; usp-fcc-xylose-2015 |
| dq_coverage | all raw records | Keep the complete matched period and causal cohort, including failed/zero-output batches, prior and closing WIP/FG burden vectors, losses, returns, rework, stock/packing/warehouse/dispatch and actual treatment burdens. Missing burdens are gaps, not zeroes. | signed dual ledgers and completeness reconciliation |
| dq_measurement | each exchange | Retain calibration, uncertainty, original units, assay versus mass-fraction basis, density conditions, gas integration and source-specific reaction/species evidence; do not impose source typical numbers. | raw meter/scale/sample records and conversion file |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_product` | product identity | Reject substitution among CAS, D/L forms, sugar ethers/esters, syrup, hydrates and other routes. Require the full declared qualifiers and the selected route, not the classification label alone. | `usp-fcc-xylose-2015` |
| `validate_gate` | net delivery and inventory | Require Q > 0, unique accepted net delivery transactions, first release R separately, physical FG/WIP reconciliation and inherited burdens. Undelivered stock never enters Q; returns/reinspection never fabricate first production or duplicate delivery. |  |
| `validate_numerator` | all inventory rows | Require complete matched raw-period records, failed/zero-output/rework burdens and inventory carryover, original conversions and one final A/Q operation. Raw collection, card formula and aggregation metadata are not three sequential normalisations. |  |
| `validate_atomic` | inventory and supplied preparations | Each actual external exchange must be one specific flow. Whole purchased solutions/assembled articles are procured once with constituent subledgers. Expand actual additional fuel, treatment reagent, solvent-recovery, packaging or pollutant rows explicitly before claiming completeness. |  |
| `validate_chemistry` | physical and species balances | Require independent measured physical mass/elements and evidence for actual species, hydrolytic/reaction water, structural/free water and phase changes. Never infer xylose from COD, impose zero residual methanol or force closure by unknown water and unknown waste. | `enco-xylose-technology` |
| `validate_native` | UUID and provider compatibility | Read complete native names, route, geography, CAS/comment, medium/type and all properties and the exact referenced property/unit versions. Preserve the disclosed 23210 metadata debt and empty geography; do not substitute latest support, infer density from a secondary factor, or claim native format checks approve methodology or mapping. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process foreground manufacturing and actual net-delivery dataset for the stated D-xylose route |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Only route/state/grade/geography/boundary-compatible D-xylose supply after explicit provider and evidence review |
| excluded_use | Generic sugar markets; other CAS/states/routes; unreviewed food/pharmaceutical claims; automatic classification acceptance; silent substitution for starch/cellulose or glucose |
| required_metadata | D identity and CAS; non-hydrate crystal phase confirmation; assay method and assay basis; actual moisture and residual methanol; corncob origin; sulfuric-acid/calcium-carbonate/methanol route; batch and period; site geography; supplier and native-name compatibility; actual net-delivery gate; opening and closing WIP/finished-stock masses and carried burdens; first release versus delivery; returns/rework lineage; bag composition; utility route; allocation and waste destinations |
| required_quality_disclosure | Source scope/age, foreground coverage, native metadata debt and unspecified geography, all unresolved auxiliary/provider UUIDs, raw and carried burden records, independent chemistry/phase evidence, monitoring gaps, uncertainty and allocation sensitivity |
| update_trigger | Chemical identity, feedstock/route, wash solvent, crystal/solution/grade, site, utility/treatment, supplier, package, inventory gate, allocation or evidence change |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| usp-fcc-xylose-2015 | standard | USP FCC, Xylose monograph public preview (2015), DOI 10.31003/FCC_F104507_07_01; https://doi.usp.org/USPFCC/FCC_F104507_07_01.html (accessed 2026-10-16) | D-xylose/CAS/formula, crystal supply form and corncob process sequence only. Public preview, not acquired full monograph; no numeric purity, hydration or moisture limit, inventory, yield or route-specific operating factor. |
| enco-xylose-technology | literature | Hangzhou Enco Machinery Co., Ltd., Xylose Technology, undated publisher technical page; https://www.encocn.com/xylose-technology (snapshot 2026-10-16) | Qualitative corncob sulfuric hydrolysis, calcium-carbonate refining, carbon/resin stages, crystal/mother-liquor handling, methanol wash, drying and lined-bag packing. One equipment-vendor route, not measured factory inventory or independent numeric ranges. Alternative routes, typical parameters, imprecise chemistry/health claims and undetectable-methanol assertion not adopted. |
| jrc-ilcd-allocation-2010 | official_guidance | European Commission JRC, ILCD Handbook, General guide for Life Cycle Assessment, Detailed guidance, first edition March2010, §7.9.3, printed257–258/PDF277–278; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional virtual subdivision, determining physical causality and the context for economic relationships at the process gate support shared-process/co-product allocation choices. No xylose recipe, yield, allocation share, substitution credit or plant quantity, and no claim that the handbook literally prescribes this PCR stock-cohort implementation. |
