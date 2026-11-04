---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.waste-of-man-made-fibres
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Unopened PET weaving-selvedge yarn waste for recycling

## 1. Scope and Applicability

This method covers one residual-material boundary: known single-polymer PET continuous-filament yarn remnants separated at the selvedge of mechanical weaving, segregated at source, dry collected, composition-sorted and packed to first acceptance as unopened recycling feedstock. The fibre component is PET only; inherited supplier spin finish and actual moisture remain part of the supplied material and require separate composition subledgers. It is neither virgin fibre production nor the manufacture of regenerated fibre. The selected branch uses purchased undyed, unsized PET filament yarn and has no on-site yarn formation, sizing, desizing, dyeing, washing of the residue, heated drying, melting, tearing/opening or chemical regeneration. Do not assume this branch applies to every polyester waste lot.

Getzner establishes actual polyester weaving-selvedge generation and collection, Nam Phong establishes separate normal/sized/water-jet yarn-waste streams and sorting, and Hi-Sing describes a typically clean undyed selvedge-yarn supply form. JRC distinguishes PET from PBT/PTT and describes yarn-to-weaving operations and lubricant/sizing counterexamples. Together these support a transparent technical synthesis, not one SKU, factory, proven absence of finish, or a default industrial inventory. Hi-Sing's typical wording does not certify an actual lot. Purchased-yarn certificates and source records must confirm the selected PET, treatment and dry-handled branch. [getzner-polyester-2024; namphong-yarn-waste; hising-polyester-selvedge; jrc-textiles-2023]

CPC 3.0:39216 has a title-only entry in the complete explanatory notes; it gives no compulsory process, moisture, composition or allocation rule. This PCR remains a narrower candidate methodology within that category. The accepted narrower relation is governed by classifications/mappings/cpc-3.0-to-pcr.yaml and the ADRs referenced by its acceptance.decision_ref fields. Mapping acceptance does not establish scientific approval, reviewed translation or PCR publication; actual lot composition, source-process and receiver applicability must satisfy this method’s independent gates. Exclude cotton/wool/silk wastes and blends, qualified yarn, virgin fibres, bottle flakes, pellets, fabric clips, worn articles and already opened or regenerated fibre. Wool noils belong to 26140 and are a different product and method. [unsd-cpc-2025]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.waste-of-man-made-fibres |
| classification_refs | CPC 3.0:39216 Waste of man-made fibres; narrower candidate methodology |
| covered_products | Unopened PET filament selvedge-yarn residue from the declared dry mechanical weaving branch; first accepted recycling-feedstock lot |
| excluded_products | Other fibre polymers; blends; cotton or wool wastes/noils; staple soft waste; qualified yarn; fabric clips; PET bottles/flakes/pellets; melted, opened, carded or chemically regenerated output |
| representative_product | One composition-defined undyed PET filament selvedge waste lot retaining declared supplier finish and measured as-accepted moisture |
| production_route | Purchased filament yarn → receipt/warping/drawing-in → mechanical weaving and selvedge separation → dedicated collection → dry sorting and inspection → packing → first feedstock acceptance → cohort-specific storage/handling |
| market_state | Packed unopened dry-handled yarn residue for an identified recycler acceptance specification; dry-handled does not mean oven-dry or oil-free |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a composition-defined unopened PET selvedge-yarn recycling feedstock |
| How much | 1 kg net newly first-accepted residue, excluding packaging |
| How well | Meet the actual recycler specification for PET identity, unopened form, size/dye/finish state, moisture and contamination; no universal numerical limits supplied |
| How long or cycle | One declared first-release cohort; subsequent dispatch or reinspection creates no new production |
| reference_flow_link | accepted_pet_waste |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Waste of man-made fibres `f814e607-ba2f-4727-b842-e32eff57e4d1` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | PET polymer evidence and fibre fractions; source mill and weaving operation; filament construction and yarn grade; virgin/recycled origin and supplier route; undyed and unsized confirmation; supplier finish identity and measured content; moisture method and weighing state; unopened yarn-remnant form; foreign-material analysis and acceptance limits; source collection and sorting route; receiving recycler specification and intended route; first-release lot/time and unique release identifier; net mass and packaging tare; site and reporting period; electricity country and voltage; allocation drivers and output status; WIP/finished-stock quantities and inherited exchange vectors; gross dispatch and external returns; packaging component ledgers; unresolved UUID/provider restrictions |

All required qualifiers must be carried in the actual data-package metadata, reference comment or equivalent complete product context. Missing qualifiers are incomplete applicability, not a presumed normal state.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is the sum of unique newly positive first-release net masses from cp_release after sorting and packing. Include actual moisture and inherited finish; subtract every packaging tare. Retests, regrades, stock transfers, dispatch and returned previously released lots do not increase Q. |
| whole_supply | pet_yarn | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Purchase/issue complete supplied yarn once. Assayed PET, supplier finish and carrier water are constituent subledgers, not additional purchased inputs. Separately procured auxiliaries need their own atomic rows. |
| unit_conversion | all inventory rows | Original measured property | kg; MJ; m3 | Convert raw quantities before attribution: kWh to MJ uses 3.6; integrate actual rates once over their measured interval. Already integrated volumes are not multiplied by time. Volume-to-mass needs independently evidenced material-specific density at the measured state; no water density for oil/air and no kg per item assumption. |
| physical_components | physical ledgers | Mass and actual composition | kg | Reconcile whole mass and PET, water and actual finish separately. No reaction water or polymer conversion is assumed in this mechanical route. Free water, phase change and inherited moisture differ from chemically bound water. Never fit two unknown losses with one balance residual or translate COD/VOC indicators into a named chemical mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Complete purchased PET filament yarn at the source weaving-site gate, including its actual finish/moisture and incoming packaging; follow the source residue to the same declared acceptance condition |
| starting_condition_role | Physical source-process input, not purchased finished waste feedstock |
| product_classification_scope | Narrow unopened PET weaving-yarn waste within CPC 3.0:39216 |
| recursive_input_rule | Same-category internal residue/rework carries its original per-exchange burden vector and cancels internally. External same-category waste is outside this source-generation branch unless origin and inherited burden are reconstructed without repeating source manufacture. |
| upstream_dataset_requirement | One compatible upstream provider per purchased exchange with actual boundary, polymer, finish, route, geography and time; include upstream yarn manufacture exactly once. Document whether incoming cores/transport are included before adding them. |
| disclosure | Disclose all source weaving, separation, sorting, acceptance, WIP/FG and post-release service gates, output status and upstream exclusions; foreground completeness is not cradle-to-gate completeness. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | p_source; p_prepare | Include source yarn receipt, warping and loom preparation, actual weaving and selvedge cutting/separation, dedicated collection, sorting, inspection and real packing. Track both source fabric and waste. A bought-waste repacking model cannot replace this chain. | jrc-textiles-2023; getzner-polyester-2024; namphong-yarn-waste |
| boundary_branch | product and route | Use only source-confirmed PET filament residue in the declared undyed, unsized and unopened branch. Size/dye/other-polymer, water-jet wet residue, fabric clips and opened fibre require a different applicability review. Missing condition evidence is unresolved; do not code it as absent. | jrc-textiles-2023; namphong-yarn-waste; hising-polyester-selvedge |
| boundary_completeness | all processes | Retain failed and zero-output runs, starts/stops, idle, cleaning, changeovers, rejects and actual rework. Add each actually present input, waste or emitted species as a separately named atomic row with a protocol before asserting completeness. No catch-all other input/output or automatic zero allowance is permitted. | jrc-textiles-2023 |
| boundary_utilities | electricity; air; water; heat | Use one provider for each utility. If compressed air is purchased, include that supply once; if generated on site, collect compressor electricity and actual cooling water/oil/condensate as separate exchanges and cancel internal air, rather than adding a purchased-air burden. No boiler, steam, fuel combustion, heat return or condensate return is presumed. Any actual external heat/water return needs a separate Product return with state/enthalpy and the supplier agreement. | jrc-textiles-2023 |
| boundary_stock | Q; WIP; FG; V | Q is newly first released output. Closing FG already contains any Q still held, so never add closing FG to Q as another manufacturing output. Maintain opening FG + Q + external returns received = closing FG + gross physical dispatch V + actual FG losses/transfers. A returned old lot and its original dispatch/reversal retain original cohort burdens; only real incremental repair adds burden, not production. |  |
| boundary_services | p_supply | Keep storage, handling, loading and any repacking after first release in a raw service journal H by original cohort Qc. Join H to that cohort inventory before its one normalization. H is not divided here, cannot be assigned to current Q merely because an old lot ships now, and cannot create a second reference output. Combine gates by cancelling internal released-material transfers. |  |
| boundary_native | UUID-bearing rows | The reference UUID is a generic Product flow with unspecified treatment, no PET CAS or grade and no moisture/finish guarantee. It identifies only man-made fibre residue; all PET/source/unopened/supply restrictions in §3 and accepted_pet_waste remain compulsory. The PET reject Waste flow explicitly also covers textiles despite its plastics classification; this classification difference does not make bottle flakes or resin eligible. |  |

## 6. Process Inventory Structure

The following cards express inventories for the same 1 kg newly first-released reference cohort. Raw physical source/preparation/supply balances are retained independently and never scaled by burden shares. Source cards expose the attributable source inventory; T cards and source_fabric expose gross physical diagnostics, not a second source supply. Exactly one source representation is used in the combined model. A conditional card is not proof that an operation occurs: demonstrate absence, otherwise measure the actual exchange. Any actual additional material, packaging component, fuel, utility return, contaminant or emitted species must be added individually with a real protocol and native review; no unlisted load is hidden in zero or an other-material aggregate.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| p_source | Source weaving and selvedge generation | required | Actual source cohort | Joint source with fabric and separated residue | Gross fabric and residue quantities retained; attributable vector to T |
| p_prepare | Dedicated collection sorting packing and acceptance | required | Matched source residue | Residual feedstock preparation | Unique new first-release Q |
| p_supply | Released-cohort storage handling and loading | required | Actual service events; replacement packing only when real | Raw H service by original cohort | Original Qc; no new production |

### Process: Source weaving and selvedge generation (`p_source`)

#### Inputs

##### Product flows

###### Whole supplied PET filament yarn (`pet_yarn`)

Record all warp, weft and any PET-only catch/selvedge yarn once by actual construction and supply grade. The whole purchased supply includes measured moisture and finish. A generic native polyester-filament candidate has conflicting bilingual reaction-route wording and does not prove this prepared grade; retain this precise identity without a UUID until compatible supplier/native evidence is available. Do not add PET resin, assay components or the upstream yarn-making energy again.

- Selected flow: Undyed unsized PET continuous-filament yarn with supplier spin finish
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single §8 calculation on this row’s raw attributable A_i and matched Q; do not renormalize the result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `jrc-textiles-2023`

###### Source-process electricity (`source_electricity`)

Only CN grid-average electricity delivered to the user below 1 kV matches this UUID. Preserve its native Net calorific value energy property with MJ reference unit; it is an electricity accounting property, not a combustion assumption. Use measured kWh × 3.6 once. Different country, voltage or generation route requires another verified provider. Include actual motors, suction, lighting, idle and cleaning; no default consumption.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the single §8 calculation on this row’s raw attributable A_i and matched Q; do not renormalize the result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `jrc-textiles-2023`

###### Whole mineral loom-lubricating oil (`loom_oil`)

When this exact oil formulation is used, record whole supplied oil including additives and any carrier; do not purchase its assay twice. Supplier grade/SDS is required. A native petroleum oil fixed at 40.5 MJ/kg and a PAO synthesis oil do not establish this unspecified grade; no UUID or calorific-value default is adopted. Add a separate row for any actual different maintenance formulation.

- Selected flow: Mineral-based loom lubricating oil formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single §8 calculation on this row’s raw attributable A_i and matched Q; do not renormalize the result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `jrc-textiles-2023`

###### Municipal water for ancillary cleaning (`source_water`)

Conditional ancillary equipment/floor cleaning or actual utility makeup only; residue washing is outside this branch. This native flow is treated municipal/potable supply at plant, Mass reference. It is not raw water, deionised water or steam. Measure its mass or use independently established density/state for a meter-volume conversion; the native secondary volume factor is not independent density evidence.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single §8 calculation on this row’s raw attributable A_i and matched Q; do not renormalize the result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources:

###### Externally supplied compressed air (`source_air`)

Conditional actual external air service for loom auxiliaries or collection, not a presumed requirement of every mechanical loom. The generic Volume flow gives no pressure, temperature, dryness, oil grade or normal-volume guarantee. Declare and measure these conditions and use m3 at the declared state. An internal compressor instead follows boundary_utilities; do not add its electricity to a purchased-air provider covering it.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Use the single §8 calculation on this row’s raw attributable A_i and matched Q; do not renormalize the result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources:

###### Incoming yarn paperboard core (`incoming_paper_core`)

One paperboard cylindrical yarn support, not a carton, wooden beam or plastic cone. Its native plant-production Mass flow supports only this physical article. Include the core supply once only if not already in the yarn provider boundary; record incoming attached cores and supplier returns under cp_pack. Core mass is excluded from yarn and Q.

- Selected flow: Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single §8 calculation on this row’s raw attributable A_i and matched Q; do not renormalize the result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources:

#### Outputs

##### Product flows

###### Co-produced PET greige woven fabric (`source_fabric`)

Retain the full unallocated gross fabric output and its status in cp_physical for the joint-source balance and allocation denominator. This diagnostic co-output is not another waste reference or an avoided-product credit. A native polyester mesh specifically fixes mesh structure and cannot identify arbitrary support fabric; leave UUID unresolved. Do not force the fabric mass to equal Q.

- Selected flow: Undyed unsized PET filament greige woven fabric
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s unallocated gross physical numerator with the single §8 calculation and the same Q once; preserve its inherited burden vector separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_physical`
- Sources: `jrc-textiles-2023`; `getzner-polyester-2024`

###### Separated unopened PET selvedge residue (`separated_pet_residue`)

This is the measured unopened PET-only filament selvedge remnant before final sorting. Native identity is generic man-made-fibre waste Product flow, at plant, unspecified treatment, with no CAS, grade, finish or moisture guarantee. Require source/lot PET analysis and all §3 conditions; exclude blends, soft staple waste, fabric clips, qualified yarn, opened fibre and bottle/regranulate routes. Carry the original source exchange vector with the physical T transfer; T is neither a second purchased input nor terminal Q.

- Selected flow: Waste of man-made fibres `f814e607-ba2f-4727-b842-e32eff57e4d1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s unallocated gross physical numerator with the single §8 calculation and the same Q once; preserve its inherited burden vector separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_transfer`
- Sources: `getzner-polyester-2024`; `namphong-yarn-waste`

##### Waste flows

###### Source PET yarn reject (`source_pet_reject`)

Only an identified PET yarn/fibre reject with actual destination is eligible for this generic waste-PET Mass identity. Native comments cover textiles and containers and specify no fibre grade or treatment; CPC plastics classification differs from the accepted fibre-product category and does not select the route. Keep bottle, pellet, non-PET, oily mixture and fabric-structure streams separate. Measure every reject including failed runs; no fixed loss or automatic recycling credit.

- Selected flow: Waste Polyethylene terephthalate `04d3fab8-c5d0-41c5-87b6-449116c1dbab`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single §8 calculation on this row’s raw attributable A_i and matched Q; do not renormalize the result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources:

###### Discarded paperboard yarn core (`paper_core_waste`)

Only paperboard cores actually discarded; supplier-return cores are a separate external Product return, not this waste. Generic paper-packaging candidates with a fixed 2% loss or kitchen-paper meaning are not used. Actual plastic/metal supports require separately named flows.

- Selected flow: Discarded paperboard yarn core
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single §8 calculation on this row’s raw attributable A_i and matched Q; do not renormalize the result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources:

###### Spent mineral loom oil (`spent_loom_oil`)

Record this actual spent formulation separately from supplied oil and spills. No assumed oil/water/additive ratio or regeneration treatment applies. Reconcile oil held in equipment, transferred to fibre, recovered, wasted and any independently identified release; missing destinations remain gaps.

- Selected flow: Spent mineral-based loom lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single §8 calculation on this row’s raw attributable A_i and matched Q; do not renormalize the result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `jrc-textiles-2023`

###### Ancillary equipment-cleaning wastewater (`ancillary_cleaning_water`)

Conditional actual cleaning-water transfer with measured receiving treatment route and composition. Do not bind a native part-degreasing flow fixed as discharged to water to external treatment. Whole aqueous solution mass and water/each measured solute are separate linked ledgers, not duplicate solution and solute purchases. Direct environmental discharge needs independently identified species and media rows.

- Selected flow: Equipment-cleaning wastewater to external treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single §8 calculation on this row’s raw attributable A_i and matched Q; do not renormalize the result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources:

##### Elementary flows

###### PET fibre particulate to air (`source_pet_air`)

Conditional measured PET fibre particulate actually escaping to air, with particle/form and PET fraction established independently. Captured lint belongs to the physical reject ledger, not this emission. Total dust or a generic terephthalate chemical search result does not establish PET emission mass or CAS identity. Record each other actual emitted chemical separately and never infer two species from one residual.

- Selected flow: PET fibre particulate to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single §8 calculation on this row’s raw attributable A_i and matched Q; do not renormalize the result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources:

###### Actual water evaporation to air (`source_water_vapour`)

Only independently established actual water evaporation, including measured material moisture change or ancillary water use. No reaction water or heated drying is assumed. A broad native water-vapour candidate mixes water/heavy-water/ice synonyms; no UUID is adopted without resolving physical-species applicability. Close water and whole mass independently, rather than solving both PET and water losses with one residual.

- Selected flow: Water vapour to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single §8 calculation on this row’s raw attributable A_i and matched Q; do not renormalize the result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources:

### Process: Dedicated collection sorting packing and acceptance (`p_prepare`)

#### Inputs

##### Product flows

###### Matched source residue transfer (`received_pet_residue`)

This is the measured unopened PET-only filament selvedge remnant before final sorting. Native identity is generic man-made-fibre waste Product flow, at plant, unspecified treatment, with no CAS, grade, finish or moisture guarantee. Require source/lot PET analysis and all §3 conditions; exclude blends, soft staple waste, fabric clips, qualified yarn, opened fibre and bottle/regranulate routes. Carry the original source exchange vector with the physical T transfer; T is neither a second purchased input nor terminal Q.

- Selected flow: Waste of man-made fibres `f814e607-ba2f-4727-b842-e32eff57e4d1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s unallocated gross physical numerator with the single §8 calculation and the same Q once; preserve its inherited burden vector separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prepare_transfer`
- Sources: `getzner-polyester-2024`; `namphong-yarn-waste`

###### Collection sorting and packing electricity (`prepare_electricity`)

Only CN grid-average electricity delivered to the user below 1 kV matches this UUID. Preserve its native Net calorific value energy property with MJ reference unit; it is an electricity accounting property, not a combustion assumption. Use measured kWh × 3.6 once. Different country, voltage or generation route requires another verified provider. Include actual motors, suction, lighting, idle and cleaning; no default consumption.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the single §8 calculation on this row’s raw attributable A_i and matched Q; do not renormalize the result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prepare_energy`
- Sources:

###### Polyethylene feedstock bag (`prepare_pe_bag`)

One complete polyethylene bag, CAS 9002-88-4, physically compatible with the native plant-production Mass flow. It is not PP woven seed packaging or a resin pellet. Actual thickness, printing/lamination, supplier, tare and reuse status require evidence; do not presume a bag count or film grade. Count new supply once and keep all attached/empty/reusable stocks and gross outbound bags under cp_pack.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single §8 calculation on this row’s raw attributable A_i and matched Q; do not renormalize the result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prepare_pack`
- Sources:

###### Polypropylene bale strapping (`prepare_pp_band`)

One polypropylene strapping band only when actually used for the same waste lot. The farm-gate twine, seed-capacity bag, PP resin/chips and steel band candidates have different physical form or hard use/composition facets, so none supplies this UUID. Record measured whole band supply and cp_pack movements without a default weight or reuse credit.

- Selected flow: Polypropylene strapping band
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single §8 calculation on this row’s raw attributable A_i and matched Q; do not renormalize the result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prepare_pack`
- Sources:

#### Outputs

##### Product flows

###### Newly first-accepted unopened PET waste (`accepted_pet_waste`)

One PET-only filament selvedge-yarn residue lot newly first accepted after source segregation, dry sorting and real packing. It remains unopened yarn remnant with actual measured moisture and inherited supplier finish, not dry pure PET by assumption. Native Waste of man-made fibres is a generic Product flow at plant with unspecified treatment and no CAS/grade/route/moisture/finish specification; adoption supplies only broad physical identity. Mandatory qualifiers are every element of §3: PET proof and fibre fractions; source mill/operation; filament/grade/origin/supplier route; undyed/unsized proof; finish identity/content; moisture method/state; unopened form; impurity analysis/limits; collection/sorting route; recycler specification/destination; first-release ID/time; net mass/tare; site/period; electricity country/voltage; allocation/output status; WIP/FG quantities/inherited vectors; gross dispatch/returns; component packaging ledgers; unresolved provider/UUID restrictions. Preserve them in the actual data-package context. Do not use this UUID for virgin/qualified yarn, blends, bottle flakes, pellets, fabric clips, opened or regenerated fibre.

- Selected flow: Waste of man-made fibres `f814e607-ba2f-4727-b842-e32eff57e4d1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release`
- Sources: `getzner-polyester-2024`; `namphong-yarn-waste`; `hising-polyester-selvedge`; `jrc-textiles-2023`

##### Waste flows

###### Sorted PET yarn reject (`prepare_pet_reject`)

Only an identified PET yarn/fibre reject with actual destination is eligible for this generic waste-PET Mass identity. Native comments cover textiles and containers and specify no fibre grade or treatment; CPC plastics classification differs from the accepted fibre-product category and does not select the route. Keep bottle, pellet, non-PET, oily mixture and fabric-structure streams separate. Measure every reject including failed runs; no fixed loss or automatic recycling credit.

- Selected flow: Waste Polyethylene terephthalate `04d3fab8-c5d0-41c5-87b6-449116c1dbab`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single §8 calculation on this row’s raw attributable A_i and matched Q; do not renormalize the result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prepare_waste`
- Sources:

###### Discarded polyethylene bag (`prepare_pe_waste`)

Only the actual single-material PE bag waste, including damaged bags; do not combine strapping, cores or product into this row. External reusable returns are separate Product returns, and reused bags are not newly purchased. No matched waste UUID is asserted from a cleaned mixed-polyethylene recycling flow.

- Selected flow: Discarded polyethylene bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single §8 calculation on this row’s raw attributable A_i and matched Q; do not renormalize the result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prepare_pack`
- Sources:

###### Discarded polypropylene band (`prepare_pp_waste`)

Record actual broken/discarded PP bands separately; keep external returns and internal reuse distinct. A native PP-waste record prescribing a mechanical recycling route is not presumed compatible with an unconfirmed actual destination.

- Selected flow: Discarded polypropylene strapping band
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single §8 calculation on this row’s raw attributable A_i and matched Q; do not renormalize the result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prepare_pack`
- Sources:

##### Elementary flows

###### Sorting PET fibre particulate to air (`prepare_pet_air`)

Conditional measured PET fibre particulate actually escaping to air, with particle/form and PET fraction established independently. Captured lint belongs to the physical reject ledger, not this emission. Total dust or a generic terephthalate chemical search result does not establish PET emission mass or CAS identity. Record each other actual emitted chemical separately and never infer two species from one residual.

- Selected flow: PET fibre particulate to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single §8 calculation on this row’s raw attributable A_i and matched Q; do not renormalize the result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prepare_emission`
- Sources:

### Process: Released-cohort storage handling and loading (`p_supply`)

#### Inputs

##### Product flows

###### Released-cohort storage handling electricity (`supply_electricity`)

Only CN grid-average electricity delivered to the user below 1 kV matches this UUID. Preserve its native Net calorific value energy property with MJ reference unit; it is an electricity accounting property, not a combustion assumption. Use measured kWh × 3.6 once. Different country, voltage or generation route requires another verified provider. Include actual motors, suction, lighting, idle and cleaning; no default consumption. Record raw H for the original release cohort including actual loading and idle service. No second normalization or new product output is created.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the single §8 calculation on this row’s raw attributable A_i and matched Q; do not renormalize the result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources:

###### Actual replacement polyethylene bag (`supply_pe_bag`)

One complete polyethylene bag, CAS 9002-88-4, physically compatible with the native plant-production Mass flow. It is not PP woven seed packaging or a resin pellet. Actual thickness, printing/lamination, supplier, tare and reuse status require evidence; do not presume a bag count or film grade. Count new supply once and keep all attached/empty/reusable stocks and gross outbound bags under cp_pack. Conditional incremental repacking only; first-release packing is already in p_prepare, and retained reused bags add no new purchase.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single §8 calculation on this row’s raw attributable A_i and matched Q; do not renormalize the result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources:

###### Actual replacement polypropylene band (`supply_pp_band`)

One polypropylene strapping band only when actually used for the same waste lot. The farm-gate twine, seed-capacity bag, PP resin/chips and steel band candidates have different physical form or hard use/composition facets, so none supplies this UUID. Record measured whole band supply and cp_pack movements without a default weight or reuse credit. Only actual incremental replacement belongs in the original cohort service journal.

- Selected flow: Polypropylene strapping band
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single §8 calculation on this row’s raw attributable A_i and matched Q; do not renormalize the result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources:

#### Outputs

##### Waste flows

###### Repacking polyethylene bag waste (`supply_pe_waste`)

Conditional removed PE bag of the original cohort. Measure without an automatic packaging loss coefficient; include it in cp_pack and H with an actual treatment destination.

- Selected flow: Discarded polyethylene bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single §8 calculation on this row’s raw attributable A_i and matched Q; do not renormalize the result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources:

###### Repacking polypropylene band waste (`supply_pp_waste`)

Conditional removed PP band of the original cohort. Do not combine it with PE bags or count internal reuse as external discard.

- Selected flow: Discarded polypropylene strapping band
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single §8 calculation on this row’s raw attributable A_i and matched Q; do not renormalize the result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_scope | multifunctionality | This is attributional accounting only for cases requiring allocation, consistent with the chosen study decision context. Industrial process evidence and a price sign do not themselves establish an allocation rule or legal waste/end-of-waste status. | ilcd-attributional-2010 |
| allocation_dedicated | all exchanges | First subdivide or virtually subdivide measured source operations and separate exclusive fabric-only operations from residue-only collection/sorting/packing. Assign identifiable yarn embodied in each physical output and dedicated activities to that output; retain non-valued losses and their causal burdens. Embodied mass assignment is not permission to mass-allocate every remaining exchange. | ilcd-attributional-2010 |
| allocation_causality | remaining common exchanges | For every remaining exchange independently identify the determining physical causal relationship. Metered operating demand and limiting volume/mass with duration may support particular services only with site evidence. A shared mass fraction, common electricity meter or arbitrary physical/economic choice is insufficient. Preserve exchange-specific shares, denominators, failed-operation burdens and uncertainty across all outputs. | ilcd-attributional-2010 |
| allocation_residual | unresolved common-process residual only | Only a genuine residual without a determining physical relation uses contemporaneous market value of every co-function at the same common-process gate in its actual condition. Derive gate-equivalent prices transparently if only later sorted/packed/transported prices exist. Document all quantities, price period/currency, output status, residual exchange list and sensitivity. Undefined or zero total value, negative-value service ambiguity or absent prices remains unresolved; no fixed ratio, arbitrary equal shares or automatic zero burden. | ilcd-attributional-2010 |
| allocation_once | source burden and transfers | Carry each allocated source exchange vector with separated residue through T and WIP once. Choose an explicit joint-source representation or an inherited upstream vector for that same source segment, never both. Subsequent exclusive sorting/packing adds its real burden. Gross output V and mass-balance records stay unallocated; allocation shares alter attributable inventory A, not physical material amounts. | ilcd-attributional-2010 |
| allocation_no_credit | reuse and treatment | Internal reuse cancels with its inherited vector and incremental rework retained. Recycling destination does not establish avoided virgin PET credit. Waste-treatment inputs, exported secondary materials, reusable packaging and services remain separate. A downstream consequential or substitution study needs its own method and cannot silently change this inventory. | ilcd-attributional-2010 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Collection stores original unnormalised records only. The aggregation_rule column declares the final target basis, per 1 kg reference flow; it does not instruct a collection-time division. Conversion, source attribution, WIP vector movement and raw H assembly precede the sole A_i/Q calculation below. Preserve all raw numerators when Q=0. Packaging movements and gross physical source outputs retain separate unallocated diagnostics.

Protocol IDs are single process identifiers: cp_energy/cp_transfer/cp_physical/cp_pack/cp_waste/cp_emission describe the source-stage instances. Their cp_prepare_* and cp_supply_* rows instantiate the same ledger specifications at the named process. References to a ledger family in the rules include those explicit instances; formula Inputs enumerate them. cp_service is the raw original-cohort service journal, and packaging movements also appear in cp_supply_pack without adding a second purchase.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | p_prepare | accepted_pet_waste | weighing | lot_id; first_release_id; first_release_time; gross_mass; each_tare; net_mass; moisture; finish_content; PET_analysis; receiver_acceptance; repeat_flag | Calibrated weighing and composition testing at actual packed feedstock acceptance; retain full certificates and exclude repeats. Record raw masses, not unit inventory. | kg | each lot and first release | Complete declared cohort and opening/closing period | Dedicated preparation site and matched source/first-release cohort | per 1 kg reference flow | Original logs; calibration; composition; acceptance; provider boundary; uncertainty |
| cp_material | p_source | pet_yarn; loom_oil | material_ledger | exchange_id; supplied_formulation; supplier_grade; lot; receipt; issue; return; opening; closing; moisture; assay; upstream_boundary | Weigh complete supply and reconcile stock/issue by source cohort; separate measured constituent subledgers without duplicate purchasing. Preserve raw original units and conversion evidence. | kg | each receipt issue and stock cutoff | Complete declared cohort and opening/closing period | Source weaving site and matched source cohort | per 1 kg reference flow | Original logs; calibration; composition; acceptance; provider boundary; uncertainty |
| cp_energy | p_source | source_electricity | meter | meter; country; voltage; supplier; start; end; kWh; power_rate; duration; batch; idle; cleaning; shared_driver | Read calibrated submeters and reconcile bills; separate stages and actual operating/idle/failed states. Preserve raw kWh or rates and interval before conversion and attribution. | kWh; MJ | meter interval and each cohort | Complete declared cohort and opening/closing period | Source weaving site and matched source cohort | per 1 kg reference flow | Original logs; calibration; composition; acceptance; provider boundary; uncertainty |
| cp_prepare_energy | p_prepare | prepare_electricity | meter | meter; country; voltage; supplier; start; end; kWh; power_rate; duration; batch; idle; cleaning; shared_driver | Read calibrated submeters and reconcile bills; separate stages and actual operating/idle/failed states. Preserve raw kWh or rates and interval before conversion and attribution. | kWh; MJ | meter interval and each cohort | Complete declared cohort and opening/closing period | Dedicated preparation site and matched source/first-release cohort | per 1 kg reference flow | Original logs; calibration; composition; acceptance; provider boundary; uncertainty |
| cp_transfer | p_source | separated_pet_residue | transfer | transfer_id; source_lot; destination_lot; gross_mass; tare; net_mass; moisture; finish; inherited_vector; opening_WIP; closing_WIP | Match weighed two-sided internal transfer T by unique ID; retain gross physical mass and unnormalised per-exchange inherited burden vector. No second external provider. | kg | each transfer and period cutoff | Complete declared cohort and opening/closing period | Source weaving site and matched source cohort | per 1 kg reference flow | Original logs; calibration; composition; acceptance; provider boundary; uncertainty |
| cp_prepare_transfer | p_prepare | received_pet_residue | transfer | transfer_id; source_lot; destination_lot; gross_mass; tare; net_mass; moisture; finish; inherited_vector; opening_WIP; closing_WIP | Match weighed two-sided internal transfer T by unique ID; retain gross physical mass and unnormalised per-exchange inherited burden vector. No second external provider. | kg | each transfer and period cutoff | Complete declared cohort and opening/closing period | Dedicated preparation site and matched source/first-release cohort | per 1 kg reference flow | Original logs; calibration; composition; acceptance; provider boundary; uncertainty |
| cp_physical | p_source | source_fabric | mass_balance | stream; lot; opening_WIP; closing_WIP; opening_FG; closing_FG; actual_inputs; fabric_output; T; Q; gross_V; external_returns; original_dispatch_reversal; losses; PET; water; finish; inherited_vector | Independently weigh full unallocated physical streams at each gate and combined gate; assay components independently. Carry stock burden vectors by lot and exchange; report residuals and uncertainty before any allocation. | kg | each lot and opening/closing cutoff | Complete declared cohort and opening/closing period | Source weaving site and matched source cohort | per 1 kg reference flow | Original logs; calibration; composition; acceptance; provider boundary; uncertainty |
| cp_prepare_physical | p_prepare | all physical streams | mass_balance | stream; lot; opening_WIP; closing_WIP; opening_FG; closing_FG; actual_inputs; fabric_output; T; Q; gross_V; external_returns; original_dispatch_reversal; losses; PET; water; finish; inherited_vector | Independently weigh full unallocated physical streams at each gate and combined gate; assay components independently. Carry stock burden vectors by lot and exchange; report residuals and uncertainty before any allocation. | kg | each lot and opening/closing cutoff | Complete declared cohort and opening/closing period | Dedicated preparation site and matched source/first-release cohort | per 1 kg reference flow | Original logs; calibration; composition; acceptance; provider boundary; uncertainty |
| cp_supply_physical | p_supply | all physical streams | mass_balance | stream; lot; opening_WIP; closing_WIP; opening_FG; closing_FG; actual_inputs; fabric_output; T; Q; gross_V; external_returns; original_dispatch_reversal; losses; PET; water; finish; inherited_vector | Independently weigh full unallocated physical streams at each gate and combined gate; assay components independently. Carry stock burden vectors by lot and exchange; report residuals and uncertainty before any allocation. | kg | each lot and opening/closing cutoff | Complete declared cohort and opening/closing period | Declared supply service site and original released cohort | per 1 kg reference flow | Original logs; calibration; composition; acceptance; provider boundary; uncertainty |
| cp_pack | p_source | incoming_paper_core; paper_core_waste | component_ledger | component; material; opening_empty; opening_attached_WIP_FG; opening_reusable; purchase; external_return_received; closing_empty; closing_attached_WIP_FG; closing_reusable; gross_outbound; external_return_out; waste; internal_reuse; provider_inclusion; measured_item_mass | For each paper core, PE bag and PP band separately: opening empty + attached WIP/FG + reusable + external purchases + external returns received = closing empty + attached WIP/FG + reusable + packaging on gross physical dispatch + external returns out + waste. Internal reuse cancels. Track inbound supplier-attached supply once and empty/core Product returns separately. Count-to-mass uses a measured configuration sample; never invent a per-item kg. | kg; item | each component movement and cutoff | Complete declared cohort and opening/closing period | Source weaving site and matched source cohort | per 1 kg reference flow | Original logs; calibration; composition; acceptance; provider boundary; uncertainty |
| cp_prepare_pack | p_prepare | prepare_pe_bag; prepare_pp_band; prepare_pe_waste; prepare_pp_waste | component_ledger | component; material; opening_empty; opening_attached_WIP_FG; opening_reusable; purchase; external_return_received; closing_empty; closing_attached_WIP_FG; closing_reusable; gross_outbound; external_return_out; waste; internal_reuse; provider_inclusion; measured_item_mass | For each paper core, PE bag and PP band separately: opening empty + attached WIP/FG + reusable + external purchases + external returns received = closing empty + attached WIP/FG + reusable + packaging on gross physical dispatch + external returns out + waste. Internal reuse cancels. Track inbound supplier-attached supply once and empty/core Product returns separately. Count-to-mass uses a measured configuration sample; never invent a per-item kg. | kg; item | each component movement and cutoff | Complete declared cohort and opening/closing period | Dedicated preparation site and matched source/first-release cohort | per 1 kg reference flow | Original logs; calibration; composition; acceptance; provider boundary; uncertainty |
| cp_supply_pack | p_supply | supply_pe_bag; supply_pp_band; supply_pe_waste; supply_pp_waste | component_ledger | component; material; opening_empty; opening_attached_WIP_FG; opening_reusable; purchase; external_return_received; closing_empty; closing_attached_WIP_FG; closing_reusable; gross_outbound; external_return_out; waste; internal_reuse; provider_inclusion; measured_item_mass | For each paper core, PE bag and PP band separately: opening empty + attached WIP/FG + reusable + external purchases + external returns received = closing empty + attached WIP/FG + reusable + packaging on gross physical dispatch + external returns out + waste. Internal reuse cancels. Track inbound supplier-attached supply once and empty/core Product returns separately. Count-to-mass uses a measured configuration sample; never invent a per-item kg. | kg; item | each component movement and cutoff | Complete declared cohort and opening/closing period | Declared supply service site and original released cohort | per 1 kg reference flow | Original logs; calibration; composition; acceptance; provider boundary; uncertainty |
| cp_waste | p_source | source_pet_reject; spent_loom_oil | weighing | row_id; composition; source_lot; gross; tare; net; moisture; status; destination; treatment; return_or_disposal; failed_run | Weigh each atomic waste including failed/cleanup lots; retain actual treatment receipt, composition and stock changes. No disappearance of unknown waste or zero production burdens. | kg | each waste movement | Complete declared cohort and opening/closing period | Source weaving site and matched source cohort | per 1 kg reference flow | Original logs; calibration; composition; acceptance; provider boundary; uncertainty |
| cp_prepare_waste | p_prepare | prepare_pet_reject | weighing | row_id; composition; source_lot; gross; tare; net; moisture; status; destination; treatment; return_or_disposal; failed_run | Weigh each atomic waste including failed/cleanup lots; retain actual treatment receipt, composition and stock changes. No disappearance of unknown waste or zero production burdens. | kg | each waste movement | Complete declared cohort and opening/closing period | Dedicated preparation site and matched source/first-release cohort | per 1 kg reference flow | Original logs; calibration; composition; acceptance; provider boundary; uncertainty |
| cp_water | p_source | source_water; ancillary_cleaning_water | water_balance | supply; quality; meter; mass; integrated_volume; actual_rate; interval; temperature; density_evidence; wastewater_mass; water_fraction; actual_solutes; destination; losses | Collect raw water supply and whole cleaning solution separately; distinguish integrated quantity from rate and measure independent density/state if converting. Identify external treatment versus actual environmental discharge without using COD as a solute mass. | kg; m3 | each actual cleaning and meter interval | Complete declared cohort and opening/closing period | Source weaving site and matched source cohort | per 1 kg reference flow | Original logs; calibration; composition; acceptance; provider boundary; uncertainty |
| cp_air | p_source | source_air | meter | provider; external_or_internal; pressure; temperature; dryness; oil_grade; metered_volume; standard_or_actual_basis; rate; time; compressor_boundary; condensate | Measure actual state-specific m3 or integrate a real rate once; any normal-volume conversion needs declared conditions and independent physical evidence. Distinguish purchased supply and internal compressor inputs; collect real condensate and cooling-water returns separately when present. | m3 | each use and meter interval | Complete declared cohort and opening/closing period | Source weaving site and matched source cohort | per 1 kg reference flow | Original logs; calibration; composition; acceptance; provider boundary; uncertainty |
| cp_emission | p_source | source_pet_air; source_water_vapour | monitoring | species; polymer_fraction; particle_form; medium; concentration; integrated_gas_volume; actual_gas_rate; interval; moisture_change; inlet; outlet; captured_mass; uncertainty; detection_limit | Use independent composition-resolved monitoring and state-matched gas volume; multiply concentration by integrated volume once or integrate a rate once. Captured lint, total PM, water evaporation and actual other chemicals are distinct. Unknown composition remains unquantified rather than a fabricated species. | kg; m3 | actual monitoring interval and cohort | Complete declared cohort and opening/closing period | Source weaving site and matched source cohort | per 1 kg reference flow | Original logs; calibration; composition; acceptance; provider boundary; uncertainty |
| cp_prepare_emission | p_prepare | prepare_pet_air | monitoring | species; polymer_fraction; particle_form; medium; concentration; integrated_gas_volume; actual_gas_rate; interval; moisture_change; inlet; outlet; captured_mass; uncertainty; detection_limit | Use independent composition-resolved monitoring and state-matched gas volume; multiply concentration by integrated volume once or integrate a rate once. Captured lint, total PM, water evaporation and actual other chemicals are distinct. Unknown composition remains unquantified rather than a fabricated species. | kg; m3 | actual monitoring interval and cohort | Complete declared cohort and opening/closing period | Dedicated preparation site and matched source/first-release cohort | per 1 kg reference flow | Original logs; calibration; composition; acceptance; provider boundary; uncertainty |
| cp_service | p_supply | supply_electricity; supply_pe_bag; supply_pp_band; supply_pe_waste; supply_pp_waste | service_ledger | original_cohort; original_Qc; row_id; raw_H; original_unit; duration; occupied_volume; power; dispatch; external_return; reinspection; incremental_rework; replacement_packaging; removed_packaging; all_stock_vectors | Keep storage/handling/loading/repacking as raw H of the original release cohort, with every packaging movement also in cp_pack. Retain old-stock burdens, original dispatch reversal and real incremental rework. Join H only to its Qc before the single final calculation; no division in this collection step and no added production. | kg; MJ; m3 | each service event and stock cutoff | Complete declared cohort and opening/closing period | Declared supply service site and original released cohort | per 1 kg reference flow | Original logs; calibration; composition; acceptance; provider boundary; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calculate_q | accepted_pet_waste | Q = sum of unique newly positive first-release net masses after actual tare deduction. Link each physical release once to its cohort; never add closing FG or reinspection to Q. | cp_release; cp_physical; cp_prepare_physical; cp_supply_physical | Q |  |
| convert_raw | all inventory rows | Convert each original record into its stated numerator unit, retaining rate/integrated distinction and state evidence. Apply the measured exchange-specific attribution hierarchy to source burdens; keep full gross physical quantities in parallel. | cp_material; cp_energy; cp_prepare_energy; cp_water; cp_air; cp_emission; cp_prepare_emission; cp_pack; cp_prepare_pack; cp_supply_pack; cp_waste; cp_prepare_waste; cp_physical; cp_prepare_physical; cp_supply_physical | converted raw exchange ledgers | ilcd-attributional-2010 |
| assemble_a | all inventory rows | A_i = inherited opening-WIP attributable vector_i + attributable current source/dedicated exchange_i - inherited closing-WIP vector_i + matched original-cohort raw H_i. Carry released Q burden into FG once; closing FG is not a second manufacturing deduction/addition. Track previous cohorts separately. Internal T/rework vectors cancel on combination; no duplicate source provider. | cp_transfer; cp_prepare_transfer; cp_physical; cp_prepare_physical; cp_supply_physical; cp_service; converted raw exchange ledgers | A_i | ilcd-attributional-2010 |
| calculate_inventory | all inventory rows | x_i = A_i / Q is the sole final unit-inventory calculation for Q greater than zero. Physical diagnostic transfer/co-output amounts use their unallocated gross numerator / the same Q once, without applying burden shares. The reference output is 1 kg. Cards and aggregation declarations only reference this single calculation; they do not divide again. For Q=0 retain unnormalised A, H, physical ledgers and stocks, issue no unit result. | A_i; Q; cp_physical; cp_prepare_physical; cp_supply_physical | x_i and gross physical diagnostics per 1 kg reference flow |  |
| reconcile_gates | all processes | At each manufacturing gate: opening WIP + full physical inputs = closing WIP + actual physical outputs/losses. Reconcile FG with boundary_stock and each packaging component with cp_pack. Combined gates cancel internal T, rework and released Q movements; gross dispatch V remains distinct from new production Q. Independently check PET, finish and water without invented residual species. | cp_physical; cp_prepare_physical; cp_supply_physical; cp_pack; cp_prepare_pack; cp_supply_pack; cp_transfer; cp_prepare_transfer; cp_water; cp_emission; cp_prepare_emission | gate balances and uncertainty |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | reference and inputs | Whole primary documents and actual supplier/source/receiver records must support polymer, physical form, treatment and acceptance; classification and generic native identity alone do not. | PET analysis; supplier TDS/SDS; source and receiver records |
| quality_period | all records | Use matching site/cohort/period and retain zero-output, failed, start-stop, idle, cleanup and rework. Bound all stock changes with inherited vectors and measurement uncertainty. | raw logs; opening/closing stock sheets; calibration |
| quality_allocation | source multifunctionality | Retain subdivision feasibility, per-exchange determining physical drivers, residual gate-matched price evidence and sensitivity; no fixed allocation/default zero residue burden. | ilcd-attributional-2010; site attribution worksheet |
| quality_sources | external sources | Sources establish qualitative method and product/process existence only. No source supplies a default recipe, emission, oil dose, moisture, machine weight, yield or factory consumption. Typical clean/undyed wording and a pilot recycling example do not prove every lot or commercial performance. | jrc-textiles-2023; getzner-polyester-2024; namphong-yarn-waste; hising-polyester-selvedge |
| quality_gaps | unresolved identities and conditions | Keep each unbound atomic name and actual uncertainty visible. Ordinary provider/auxiliary gaps require later matching, while a true product, endpoint or method evidence gap blocks conformity and must remain draft/inconclusive. | manifest review metadata; explicit data-package findings |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | product and source | Verify the complete §3 qualifier list against supplier certificates, process logs, physical inspection and the receiving specification. PET must be demonstrated, not inferred from the word polyester. Excluded treatment or an unresolved true endpoint/source condition prevents a conforming result. | jrc-textiles-2023; namphong-yarn-waste |
| validate_measurement | all inventory rows | Reference row is exactly 1 kg matching the declared first-release Q; all other rows use the same cohort denominator once after raw conversion and attribution. For Q=0 retain raw burdens, WIP and failure reasons, and issue no unit result. |  |
| validate_mass | source; preparation; supply; combined gate | Reconcile full unallocated physical mass and independent PET/water/finish subledgers at each gate and combined gate with internal T/rework/Q transfers cancelled. Do not balance allocated A against gross physical outputs, duplicate closing FG, invent reaction water or infer species from total dust/COD. Report measured residuals and uncertainty. |  |
| validate_packaging | each packaging component | Individually close the complete cp_pack six-leg ledger including attached WIP/FG, gross dispatch, external returns and waste. Reconcile product tare without adding packaging to Q or turning reuse into new procurement or a co-product credit. |  |
| validate_native | all UUIDs | Use verified flow type, every native basename/synonym/comment, CAS, treatment, state, geography, medium and property facets. Preserve reference-property → unit-group → actual unit compatibility; a generic flow is not evidence of a supplier match. Leave incompatible or unresolved atomic identities blank and disclose them. |  |
| validate_completeness | data package | Report accepted input, checks performed, skipped scope, findings and completeness separately. Missing records, unresolved conditions, unknown species and unclosed balances are not passes. Engineering checks do not approve science, translation, mapping or publication. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | One declared unopened PET weaving-residue cohort as recycling feedstock, with verified source and foreground boundaries |
| allowed_use | Attributional source-generation and preparation inventory with disclosed compatible upstream links and pending methodology review |
| excluded_use | Other fibre families or blends; PET flakes/resin; opened/regenerated fibre; arbitrary waste cut-off or substitution credit; legal end-of-waste certification |
| required_metadata | PET polymer evidence and fibre fractions; source mill and weaving operation; filament construction and yarn grade; virgin/recycled origin and supplier route; undyed and unsized confirmation; supplier finish identity and measured content; moisture method and weighing state; unopened yarn-remnant form; foreign-material analysis and acceptance limits; source collection and sorting route; receiving recycler specification and intended route; first-release lot/time and unique release identifier; net mass and packaging tare; site and reporting period; electricity country and voltage; allocation drivers and output status; WIP/finished-stock quantities and inherited exchange vectors; gross dispatch and external returns; packaging component ledgers; unresolved UUID/provider restrictions |
| required_quality_disclosure | Q gate; raw and normalized ledgers; all allocation decisions; WIP/FG inherited vectors; H service scope; gross V/returns; packaging balances; unknowns; native/provider limitations; measurement and temporal coverage |
| update_trigger | Polymer/source/finish/moisture or receiver-gate change; introduced treatment; different utility/provider; new native evidence; changed allocation drivers or material stock discrepancy |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc-2025 | official_guidance | UNSD, CPC Ver.3.0 Explanatory Notes, 30 June 2025, pp.117 and 199–201. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Title-only 39216 and adjacent fibre-waste/noil exclusions; classification context only |
| jrc-textiles-2023 | official_guidance | European Commission JRC, Best Available Techniques Reference Document for the Textiles Industry, EUR31316EN (2023), §§2.1.1.1, 2.4, 2.5.1, pp.15–16 and 33–37. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2023-01/TXT_BREF_2023_for_publishing%20ISSN%201831-9424_final_1_revised.pdf | PET/PBT/PTT distinction; source yarn/warping/weaving; sizing, oil and adjacent knitting counterexamples; no numerical defaults |
| getzner-polyester-2024 | literature | Getzner Textil, High-quality recycled yarn, 15 July 2024. https://www.getzner.at/en/stories/press-releases/high-quality-recycled-yarn | Primary industrial report of all-polyester weaving-selvedge generation and collection; downstream yarn recycling is outside this gate |
| namphong-yarn-waste | literature | Nam Phong Group, Yarn Waste, publisher product page. https://namphongindustry.com/en/danh-muc-san-pham/ptextilep/yarn-waste.html | Primary collection/sorting and composition separation; normal/sized/water-jet polyester and blended/cotton alternatives are distinct |
| hising-polyester-selvedge | literature | Hi-Sing Textile, 100pct Polyester Selvedge Yarn Waste, publisher product page. https://www.hisingtextile.com/product/100pct-polyester-selvedge-yarn-waste/ | Corroborative unopened selvedge-yarn market form and typical clean/undyed state only; not actual lot certification or proof of unsized status |
| ilcd-attributional-2010 | official_guidance | European Commission JRC, ILCD Handbook, General guide for Life Cycle Assessment—Detailed guidance, first edition March 2010, §§7.9.1–7.9.3, pp.255–268. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional cases requiring allocation: subdivision/virtual subdivision; exchange-specific determining physical causality; only residual common-process gate/condition-matched market values; no fixed ratios |
