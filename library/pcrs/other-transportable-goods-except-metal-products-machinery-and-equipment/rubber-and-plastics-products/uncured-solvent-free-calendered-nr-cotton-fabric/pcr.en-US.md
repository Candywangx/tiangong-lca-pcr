---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.uncured-solvent-free-calendered-nr-cotton-fabric
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Uncured solvent-free calendered natural-rubber cotton fabric

## 1. Scope and Applicability

This manufacturing method covers uncured non-tyre roll fabric made by solvent-free calendering of a purchased fully compounded solid natural-rubber compound onto coating-ready 100% cotton woven fabric, on one or both faces, followed by cooling, inspection, winding, packing, actual finished-stock storage and net dispatch. This is a bounded synthesis of independent industrial primary sources, not a claim that one supplier supplies the complete stated configuration. NR/cotton identity, solvent-free calender technology and uncured market state have separate evidence. The method is distinct from aqueous PU direct coating and from greige nylon tyre cord; changing end use alone does not create this boundary. Sources: `hubner-calender-2019`; `rosich-calender-state`; `colmant-nr-cotton`; `epa-rubber-2008`.

Exclude tyre cord (even if rubber-coated), uncoated cloth, unsupported rubber sheet, finished belts/gloves/garments, PVC/PU thermoplastic coatings, other elastomers/textiles, latex dipping, solvent spreading, wet coagulation, adhesive priming, on-site raw-rubber compounding, vulcanisation and partially cured goods. Supplier compound manufacture and cotton cultivation/spinning/weaving/finishing are upstream. Use/end-of-life and transport beyond the declared dispatch handover are outside the foreground. Actual additional chemicals, fuels, cleaning or emission species cannot be omitted: extend the atomic inventory and substantiate materially different routes before claiming applicability.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.uncured-solvent-free-calendered-nr-cotton-fabric |
| classification_refs | CPC 3.0:36250; narrower |
| covered_products | Uncured solvent-free solid-NR-compound-coated 100% cotton woven roll fabric, excluding tyre cord |
| excluded_products | Exclude tyre cord (even if rubber-coated), uncoated cloth, unsupported rubber sheet, finished belts/gloves/garments, PVC/PU thermoplastic coatings, other elastomers/textiles, latex dipping, solvent spreading, wet coagulation, adhesive priming, on-site raw-rubber compounding, vulcanisation and partially cured goods. Supplier compound manufacture and cotton cultivation/spinning/weaving/finishing are upstream. Use/end-of-life and transport beyond the declared dispatch handover are outside the foreground. Actual additional chemicals, fuels, cleaning or emission species cannot be omitted: extend the atomic inventory and substantiate materially different routes before claiming applicability. |
| representative_product | Uncured solvent-free calendered natural-rubber cotton fabric |
| production_route | Purchased complete NR compound -> warmup -> calender onto ready cotton -> cool -> inspect/trim/wind -> quality release P -> actual storage/packing -> net dispatch Q |
| market_state | Uncured composite rolls at declared dispatch handover; measurable moisture state, no service-life claim |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply non-tyre uncured rubberised cotton fabric for later conversion |
| How much | 1 kg actual net accepted delivered complete composite fabric |
| How well | Declared cotton construction, complete NR compound, coating faces/add-on, dimensions, moisture and uncured-state acceptance; no finished-article performance equivalence |
| How long or cycle | One declared delivery reporting period with opening/closing stock history; no use lifetime |
| reference_flow_link | delivered_fabric |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Rubberized textile fabrics, except tyre cord fabric `994a7636-5769-4127-ba3c-2e50b1d84f6a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | NR compound grade and complete formulation and supply state; 100% cotton woven construction and supplied finish; coated faces and rubber add-on and total thickness and areal mass; actual uncured state and acceptance criteria; moisture measurement and net composite weighing procedure; site and period and utility technology and supply geography; opening and closing WIP/finished stock with carried burdens; net delivery gate and unique roll/cohort IDs and returns and redelivery; liner and core and wrap and strap and real storage/dispatch coverage; waste recipient and air species and actual controls |

Declare every qualifier in the data package. Q is net delivery, not newly released P, dry rubber, fibre-only mass, invoice gross weight or m2. The supplied composite includes all retained formulation and measured moisture; detachable packaging is separate. Native finished-product status does not imply vulcanisation.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh accepted delivered complete rolls, deduct measured detachable liner/core/wrap/strap tare and reconcile returns under cp_dispatch. Same grade, state and cohort; P is a separate release ledger. |
| composition_mass | all inventory rows | Mass | kg | Retain whole supplied compound and fabric masses. Assayed rubber, fillers, curatives, cotton and moisture are conserved subledgers, not duplicate procurement. Use actual same-state area times kg/m2 for area records; no dry-mass/wet-mass substitution. |
| utility_units | all inventory rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | For electricity convert raw kWh by exactly 3.6 MJ/kWh. Steam heat is measured mass times inlet-minus-return enthalpy, with actual state; no fuel double count. Integrated volume is already integrated: only a rate is multiplied by duration. Density is independently measured, never a secondary flow-property coefficient. |
| stock_basis | all inventory rows | Mass | kg | Use actual delivery Q>0. Preserve opening/closing raw material, WIP and finished-stock mass and carried burdens. Undelivered stock is not Q; returns/reacceptance do not create new output. Cancel internal stage transfers and normalise only once using calc_normalise. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Supplier complete solid uncured NR compound and finished coating-ready cotton web received, prior textile finishing completed; no latex solution preparation or on-site raw ingredient compounding |
| starting_condition_role | upstream product input |
| product_classification_scope | Narrow non-tyre uncured NR/cotton calendered subset, no whole CPC leaf coverage |
| recursive_input_rule | Purchased already rubberised fabric is one actual upstream composite input, never uncoated cotton or recursively recreated embedded coating. A purchased-fabric-only rewinding route is outside this manufacturing profile. Match and cancel internal compound/web/released-roll transfers. |
| upstream_dataset_requirement | Link representative compound (all ingredients and mixing), cotton cultivation/spinning/weaving/finishing, energy, water, each packaging and external waste-treatment supply. Supplier complete formulation does not mean foreground starts with pure NR. |
| disclosure | State actual site, routes, utilities, handover, inherited stock burdens, treatment destinations, inbound transport coverage and missing upstream datasets. A foreground-only result is not complete cradle-to-gate. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_stages | all processes | Include actual warmup, calender/cooling, inspection/trim/winding, storage, packing, dispatch preparation, failed/zero-output batches, idle/start-up, returns/rework and controls. Actual fuels, chemicals or identified emission species need their own cards and evidence. | `hubner-calender-2019`; `epa-rubber-2008` |
| boundary_uncured | all processes | Stop this route before any intentional vulcanisation. Neither mechanical bonding nor physical water loss proves curing. A required primer, solvent/latex application, reaction or curing operation requires separately evidenced extension; do not erase its loads to fit this scope. | `rosich-calender-state` |
| boundary_waste | waste outputs | Liquid purge and solid wastes cross the site gate at documented treatment handover; retain actual water content and species. Off-site treatment is linked once, not counted again as direct elementary discharge. Direct release or on-site treatment needs its complete separate inventory. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| warmup | Compound receipt and warmup | required | Actual declared manufacturing cohort; preserve all exchanges and matched stocks | foreground manufacture | per 1 kg reference flow |
| calender | Calender coating and cooling | required | Actual declared manufacturing cohort; preserve all exchanges and matched stocks | foreground manufacture | per 1 kg reference flow |
| finish | Inspection, trimming and release | required | Actual declared manufacturing cohort; preserve all exchanges and matched stocks | foreground manufacture | per 1 kg reference flow |
| dispatch | Finished-stock storage, packing and net dispatch | required | Actual declared manufacturing cohort; preserve all exchanges and matched stocks | foreground manufacture | per 1 kg reference flow |

All cards share the final delivered-composite denominator. Internal transfers remain visible for stage balances and cancel when consolidated; released_roll and delivered_fabric intentionally share the native UUID. Only delivered_fabric is the reference. Stock changes are ledger states, not extra product exits. For an actual cleaning event, add each purchased cleaner/water, contaminated wipe and wastewater stream separately; absence requires a documented dry-cleaning/no-consumption observation, never a missing record.

### Process: Compound receipt and warmup (`warmup`)

#### Inputs

##### Product flows

###### Fully compounded uncured natural-rubber compound (`nr_compound`)

One purchased solid NR-based calendering compound, including its actual fillers, curatives, processing aids, residual moisture and volatiles. Supplier formulation/assay and total received mass are required; constituent subledgers are not duplicate purchases. No latex, rubber solution, tyre-specific or belt-specific grade is inferred.

- Selected flow: Fully compounded uncured natural-rubber compound
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; cp_warmup; one report operation.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_warmup
- Sources: `hubner-calender-2019`; `epa-rubber-2008`

###### Electricity at the warmup mill (`warmup_power`)

Meter drives, warmup, local extraction and attributable start-up/idle/rework separately from downstream meters. No electricity UUID or country mix is asserted.

- Selected flow: Electricity at the warmup mill
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: A_i / Q; cp_warmup; one report operation.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_warmup
- Sources:

###### Mineral lubricating oil (`lubricating_oil`)

Actual mineral lubricating oil replenished to machinery; collect additions and opening/closing oil inventory, including oil retained in equipment. A different lubricant needs its own atomic row.

- Selected flow: Mineral lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; cp_warmup; one report operation.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_warmup
- Sources:

#### Outputs

##### Product flows

###### Warm uncured natural-rubber compound strip (`warm_compound`)

Internal solid-compound transfer to calendering with measured mass and temperature; warmup is not vulcanisation. Cancel the matched input on site aggregation, retaining losses and energy.

- Selected flow: Warm uncured natural-rubber compound strip
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; cp_warmup; one report operation.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_warmup
- Sources: `epa-rubber-2008`

##### Waste flows

###### Uncured NR compound reject (`compound_reject`)

Weigh separately collected rubber-only rejects handed to external treatment. Internal recirculated trim is a transfer, not a second purchase, output credit or new accepted product.

- Selected flow: Uncured NR compound reject
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; cp_warmup; one report operation.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_warmup
- Sources:

###### Spent mineral lubricating oil (`spent_oil`)

Actual drained oil to documented external recipient, separately from retained oil and contaminated solid wipes.

- Selected flow: Spent mineral lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; cp_warmup; one report operation.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_warmup
- Sources:

### Process: Calender coating and cooling (`calender`)

#### Inputs

##### Product flows

###### Warm uncured natural-rubber compound strip (`compound_feed`)

Matched internal warm_compound transfer; no upstream compound production duplicated here.

- Selected flow: Warm uncured natural-rubber compound strip
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; cp_calender; one report operation.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_calender
- Sources: `epa-rubber-2008`

###### Coating-ready woven cotton fabric (`cotton_web`)

Purchased 100% cotton woven web with actual weave, finish, moisture and areal mass. Previous desizing/scouring/drying belongs to its upstream supply. No on-site primer/dip is assumed; a required adhesion treatment must be separately inventoried and reviewed before use.

- Selected flow: Coating-ready woven cotton fabric
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; cp_calender; one report operation.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_calender
- Sources: `colmant-nr-cotton`

###### Electricity at the calender (`calender_power`)

Meter calender rolls, cooling pumps, extraction, actual electric auxiliary heating and compressed-air generation within disjoint coverage. Purchased compressed air is not also counted for the same compressor.

- Selected flow: Electricity at the calender
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: A_i / Q; cp_calender; one report operation.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_calender
- Sources:

###### Purchased steam heat (`steam_heat`)

Conditional purchased indirect roller heat for warmup/calendering. Record delivered steam mass, state, inlet/outlet enthalpy and condensate route as a physical subledger; report net transferred MJ. Do not purchase the same steam again as water or repeat boiler fuel/background emissions.

- Selected flow: Purchased steam heat
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: A_i / Q; cp_utilities; one report operation.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_utilities
- Sources:

###### Supplied cooling-water makeup (`cooling_makeup`)

Fresh supplied water entering the cooling loop, not total recirculated throughput. Weigh or convert volume with independently measured water density at its actual state.

- Selected flow: Supplied cooling-water makeup
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; cp_utilities; one report operation.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_utilities
- Sources:

###### Activated carbon (`activated_carbon`)

Only if an actual carbon adsorption unit treats mill/calender exhaust; measure fresh replacements and retained bed inventory. No solvent recovery or abatement efficiency is invented.

- Selected flow: Activated carbon
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; cp_utilities; one report operation.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_utilities
- Sources:

#### Outputs

##### Product flows

###### Uncured NR-coated cotton web (`coated_web`)

Internal uninspected composite from solid-compound coating on one or both faces. Preserve total rubber compound, cotton and moisture; no solution drying, latex coagulation or curing yield is claimed.

- Selected flow: Uncured NR-coated cotton web
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; cp_calender; one report operation.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_calender
- Sources: `hubner-calender-2019`; `epa-rubber-2008`

###### Returned steam condensate (`steam_condensate`)

Only the actual condensate returned across the supplier boundary; record mass/state separately from net delivered heat. It is an internal utility return with no automatic avoided-product credit.

- Selected flow: Returned steam condensate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; cp_utilities; one report operation.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_utilities
- Sources:

##### Waste flows

###### Cooling-loop blowdown water (`cooling_blowdown`)

Actual liquid purge handed to off-site treatment; report contaminants and recipient. It is not an elementary discharge to a river.

- Selected flow: Cooling-loop blowdown water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; cp_utilities; one report operation.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_utilities
- Sources:

###### Spent exhaust-adsorption activated carbon (`spent_carbon`)

Only when adsorption is present; retain actual sorbed species, moisture and disposal route without crediting unverified solvent recovery.

- Selected flow: Spent exhaust-adsorption activated carbon
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; cp_utilities; one report operation.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_utilities
- Sources:

##### Elementary flows

###### Water vapour to air (`evaporated_water`)

Measured cooling evaporation and physical moisture release, separated from liquid purge. There is no assumed net reaction water in this non-curing solid-compound route.

- Selected flow: Water vapour to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; cp_utilities; one report operation.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_utilities
- Sources:

###### Toluene to air (`toluene_air`)

Conditional actual residual-compound release from warmup and calendering after controls, with source-resolved sampling. Solvent-free application does not prove zero residual volatiles. The two units have separate raw emission coverage; no EPA tyre/neoprene emission factor is transferred to NR cotton.

- Selected flow: Toluene to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; cp_emissions; one report operation.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_emissions
- Sources: `epa-rubber-2008`

###### Benzene to air (`benzene_air`)

Conditional species-specific measured release from the actual compound/operations; no generic VOC or mass-balance residual is substituted. Record the medium as air and retain detection/quantification limits.

- Selected flow: Benzene to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; cp_emissions; one report operation.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_emissions
- Sources: `epa-rubber-2008`

### Process: Inspection, trimming and release (`finish`)

#### Inputs

##### Product flows

###### Uncured NR-coated cotton web (`inspection_feed`)

Matched coated_web transfer to inspection, trim and winding; retain rejected lengths, samples and rework.

- Selected flow: Uncured NR-coated cotton web
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; cp_finish; one report operation.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_finish
- Sources:

###### Electricity for inspection and winding (`finish_power`)

Actual inspection, trimming, winding and attributable pre-release storage/handling electricity.

- Selected flow: Electricity for inspection and winding
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: A_i / Q; cp_finish; one report operation.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_finish
- Sources:

###### Polyethylene film (`interleaf`)

One actual PE interleaf film preventing roll blocking; separately weigh the detachable liner and exclude it from composite fabric mass. Native identity is production mix at plant, PE CAS 9002-88-4, Mass; no location/grade/release coating is specified. The native luggage classification is inconsistent with the PE film identity and remains disclosed metadata debt. A silicone-coated or other composite liner requires another identity.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; cp_finish; one report operation.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_finish
- Sources:

###### Cardboard tube or Paper core (`winding_core`)

One paperboard winding core; native Product identity is production mix at plant with no stated geography, grade or treatment route, Mass. Measure tare, supplier construction and actual reuse cycles; no broad packaging placeholder or steel core substitution.

- Selected flow: Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; cp_finish; one report operation.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_finish
- Sources:

#### Outputs

##### Product flows

###### Rubberized textile fabrics, except tyre cord fabric (`released_roll`)

Internal quality-released uncured NR/cotton roll, measured as P, not terminal delivered Q. Native identity: finished product manufactured, production mix at plant, Product flow, Mass; geography, CAS, recipe, cotton percentage and curing state are unspecified. Only the declared non-tyre NR/cotton subset is selected; qualify its actual state and supplier independently. Cancel the matched warehouse input, never sum P and delivered Q.

- Selected flow: Rubberized textile fabrics, except tyre cord fabric `994a7636-5769-4127-ba3c-2e50b1d84f6a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; cp_finish; one report operation.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_finish
- Sources: `rosich-calender-state`

##### Waste flows

###### Uncured NR-coated cotton scrap (`composite_reject`)

Actual composite trim, rejected fabric and destructive samples handed to treatment; retain rubber/cotton/moisture composition. Cotton-only or rubber-only scrap must not be hidden in this row.

- Selected flow: Uncured NR-coated cotton scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; cp_finish; one report operation.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_finish
- Sources:

###### Uncoated cotton fabric trim (`cotton_trim`)

Only actual segregated uncoated trim; record pre-coating origin and mass once, even if the common finishing team owns collection.

- Selected flow: Uncoated cotton fabric trim
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; cp_finish; one report operation.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_finish
- Sources:

###### Polyethylene interleaf offcuts (`pe_trim`)

Clean PE interleaf waste measured separately from the retained liner and contaminated composite scrap.

- Selected flow: Polyethylene interleaf offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; cp_finish; one report operation.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_finish
- Sources:

###### Discarded paperboard winding core (`paper_core_waste`)

Actual damaged/end-of-life paperboard cores; reused cores remain in the asset/material ledger.

- Selected flow: Discarded paperboard winding core
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; cp_finish; one report operation.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_finish
- Sources:

### Process: Finished-stock storage, packing and net dispatch (`dispatch`)

#### Inputs

##### Product flows

###### Rubberized textile fabrics, except tyre cord fabric (`warehouse_feed`)

Internal released_roll transfer at P plus separately identified opening finished-stock cohorts and their carried burdens. Native Product identity is finished product manufactured, production mix at plant, Mass; no geography, CAS, recipe or curing state is specified. It is not an external purchase or another accepted output.

- Selected flow: Rubberized textile fabrics, except tyre cord fabric `994a7636-5769-4127-ba3c-2e50b1d84f6a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; cp_dispatch; one report operation.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_dispatch
- Sources:

###### Electricity for finished-roll storage and dispatch (`dispatch_power`)

Actual matched-cohort finished storage, handling and shipping preparation electricity, including returned-roll handling and reinspection. Older/undelivered stock retains its measured carried burden.

- Selected flow: Electricity for finished-roll storage and dispatch
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: A_i / Q; cp_dispatch; one report operation.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_dispatch
- Sources:

###### Polyethylene film (`pe_wrap`)

One external PE wrap, separately weighed from interleaf. Native production mix at plant; PE CAS 9002-88-4, Mass; no geography or specific grade/processing route. Luggage classification metadata is inconsistent; no supplier recipe, recycled content or packaging quantity is inferred.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; cp_dispatch; one report operation.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_dispatch
- Sources:

###### Polypropylene strapping (`pp_strap`)

Actual PP strap used on the roll; measure its own mass and reject/stock ledger. It is a packaging component, not a finished rubber belt.

- Selected flow: Polypropylene strapping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; cp_dispatch; one report operation.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_dispatch
- Sources:

#### Outputs

##### Product flows

###### Rubberized textile fabrics, except tyre cord fabric (`delivered_fabric`)

Terminal net delivered accepted uncured NR/cotton composite, Q. Native identity is finished product manufactured, production mix at plant, Product flow, Mass; geography, CAS, recipe, textile construction, supplier and curing state are unspecified. Actual composite mass includes cotton, entire retained rubber formulation and measured moisture, excludes liner/core/wrap/strap. Its narrow physical applicability must accompany the generic native name.

- Selected flow: Rubberized textile fabrics, except tyre cord fabric `994a7636-5769-4127-ba3c-2e50b1d84f6a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: fixed_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: identity_reference
- Collection protocol: cp_dispatch
- Sources: `rosich-calender-state`; `colmant-nr-cotton`

##### Waste flows

###### Polyethylene wrapping-film waste (`wrap_waste`)

Actual separately weighed clean external wrap waste; contaminated film needs its own waste identity and recipient.

- Selected flow: Polyethylene wrapping-film waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; cp_dispatch; one report operation.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_dispatch
- Sources:

###### Polypropylene strapping waste (`strap_waste`)

Actual separately weighed PP strap waste; do not combine with PE film or rubber-coated textile waste.

- Selected flow: Polypropylene strapping waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q; cp_dispatch; one report operation.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_dispatch
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | all processes | Separate batch/cohort and disjoint meter records before sharing burdens. Internal transfers and recirculated trim do not create coproduct credits. No automatic mass, area, processing-time or sales-value proxy for every utility. | `ilcd-allocation-2010` |
| allocation_residual | actual coproducts | Identify real externally supplied coproducts without renaming them as waste. Demonstrate determining physical causality for residual shared burdens; if unavailable, disclose and justify economic allocation using actual co-function values at handover, with sensitivity. Methodology review is needed for the actual multifunctional case; this profile supplies no default shares or substitution credits. | `ilcd-allocation-2010` |
| asset_manufacture_conservation | existing capital/reusable manufacture attribution | Within the applicable allocation decision context, original manufacture burden attributed across uses of actual capital equipment or reusable articles already included in foreground production, packaging or observed services uses one persistent same-asset ledger across all crops, products, cohorts, manufacturing/postrelease services, owners and observation periods. D is its supported whole installed service: all realized historical service plus supported remaining service in the same units as actual beneficiary use u; D must be finite and positive. Period capacity, remaining-only capacity, the physical asset/article mass alone, or current-period product Q alone is not D; supported whole-service throughput in mass units may be used when it demonstrates the causal service and matches u. This does not amortize the manufactured reference product over downstream life or change its declared reference gate/Q. The fractions u/D and all previously assigned manufacture shares together must never exceed 1. Changes of window, custody, provider or repair never restart the original manufacture balance. Replacements have distinct identities and only their real new manufacture vectors; actual repair and treatment increments remain separately accounted. Revised capacity evidence requires transparent reconciliation of prior shares and sensitivity, not a fresh ledger. Keep full physical mass and stock movements independent of burden shares. Unknown D, prior shares or beneficiary coverage requires review and no final manufacture-attributed amount; no assumed lifetime, utilization, zero or arbitrary division is permitted. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_warmup | warmup | Complete compound and warmup ledger | foreground_record | lot/roll ID; timestamp; material/species; state; raw mass/energy/volume; meter coverage; failed/zero-output run; return/rework transfer; opening/closing WIP mass and embodied burden | Owner: warmup production lead. Retain unnormalised receipts, assays, issued whole compound, internal returns, temperatures and disjoint meter totals, including all failed runs, idle/start-up and raw/WIP stock changes with inherited burdens. No A/Q at collection. | kg; MJ | Each batch, event or meter interval | Complete matched reporting period plus identified opening/closing cohort history | Declared site and disjoint process coverage | per 1 kg reference flow | Calibrated scales/meters; supplier formulation; stock and transfer reconciliation |
| cp_calender | calender | Substrate, compound and composite ledger | foreground_record | lot/roll ID; timestamp; material/species; state; raw mass/energy/volume; meter coverage; failed/zero-output run; return/rework transfer; opening/closing WIP mass and embodied burden | Owner: calender production lead. Collect raw warm-strip/cotton feed, coating settings, complete web mass, rubber/cotton/water subledgers, failed web and transfers. Measure same-state width/area/areal mass when conversion is necessary; preserve raw records without division. | kg; m; m2; MJ | Each batch, event or meter interval | Complete matched reporting period plus identified opening/closing cohort history | Declared site and disjoint process coverage | per 1 kg reference flow | Coating/uncured-state tests; scales; dimensions; signed lot balance |
| cp_utilities | calender | Shared utility and control ledger | foreground_record | water/steam mass; temperature/pressure; enthalpy; raw integrated volume or rate and duration; makeup; recirculation; condensate; blowdown; evaporation; carbon bed stocks | Owner: utilities engineer. Keep raw disjoint totals and physical water/steam balances for the whole period, including failed runs, storage and controls. Purchased heat uses delivered mass and measured enthalpy difference; no extra water procurement for its steam. Assign measured branch coverage before cohort attribution; do not divide by Q here. | kg; MJ; m3 | Each batch, event or meter interval | Complete matched reporting period plus identified opening/closing cohort history | Declared site and disjoint process coverage | per 1 kg reference flow | Meter calibration; measured density/enthalpy; purge receipts; abatement records |
| cp_emissions | calender | Separate warmup and calender air-species coverage | foreground_record | species; CAS; medium; sample time; inlet/outlet concentration; air volume basis; integrated gas volume or rate and duration; control capture; detection limit; run/cohort | Owner: environmental monitoring lead. Retain raw species-resolved tests for mill and calender, including failed runs and fugitive coverage. Integrated volume times concentration gives mass; rate requires duration. Keep actual controls and emitted versus captured mass distinct; no aggregate VOC/closure residual assigned to a substance and no A/Q at collection. Add one card for every additional actual species. | kg; mg/m3; m3; m3/h; h | Each batch, event or meter interval | Complete matched reporting period plus identified opening/closing cohort history | Declared site and disjoint process coverage | per 1 kg reference flow | Sampling methods; detection limits; gas-state conversion; compound assay; no unsupported universal emission factor |
| cp_finish | finish | Release P, trim, liner and core ledger | foreground_record | lot/roll ID; timestamp; material/species; state; raw mass/energy/volume; meter coverage; failed/zero-output run; return/rework transfer; opening/closing WIP mass and embodied burden | Owner: quality/release lead. Weigh uncured composite and detachable packaging separately; test accepted state and record unique first release P, samples, rejects and return/reinspection history. Carry opening/closing WIP and associated burden; a reaccepted returned roll is not new production. Keep raw numerators and P without dividing. | kg; MJ | Each batch, event or meter interval | Complete matched reporting period plus identified opening/closing cohort history | Declared site and disjoint process coverage | per 1 kg reference flow | Acceptance tests; roll IDs; net/tare weighing; WIP and rejection reconciliation |
| cp_dispatch | dispatch | Net Q, finished stock and inherited burdens | foreground_record | roll/cohort IDs; P receipt; opening/closing finished mass and carried input/emission/energy burdens; gross/net dispatch; returns; redeliveries; packaging tare; storage/handling/dispatch energy; actual handover acceptance | Owner: dispatch/warehouse lead. Collect original delivery and return acceptances and raw stock/cohort burdens, preserving prior-period history. Q is unique net accepted delivered composite mass after return reconciliation at the declared handover, excluding undelivered finished stock and packaging. Re-delivery/reinspection never duplicates the same retained delivery. Keep all original raw quantities and burdens; no A/Q at collection. | kg; MJ | Each batch, event or meter interval | Complete matched reporting period plus identified opening/closing cohort history | Declared site and disjoint process coverage | per 1 kg reference flow | Signed dispatch/returns; calibrated weighbridge; stock history and burden bridge; no P=Q assumption |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_normalise | all inventory rows | For each exchange i, a_i = A_i / Q exactly once. A_i is the raw burden attributed to net delivered cohorts: opening embodied burden plus actual period burdens including failed runs/rework minus closing retained-stock burden, reconciled through cp_dispatch; stage transfers cancel. Q is positive unique net accepted delivered composite kg. Cards and aggregation_rule describe this same report operation, not successive divisions. Preserve signed return corrections and original periods; no Q for a zero-delivery period, retain its burdens for future stock/campaign reconciliation. | A_i; Q; cp_warmup; cp_calender; cp_finish; cp_dispatch; cp_utilities; cp_emissions | a_i |  |
| calc_conversions | all inventory rows | Convert raw units before normalisation: electricity MJ = kWh * 3.6; mass = volume * independently measured density; integrated air volume * species concentration gives species mass with unit/state conversion, while flow rate requires duration. Area * same-state areal mass gives composite mass. Steam net heat = measured mass * actual enthalpy difference. Do not apply time twice or infer water/speciation from COD or closure residuals. | cp_utilities; cp_emissions; cp_calender | converted_raw_amount |  |
| calc_balances | all inventory rows | At each stage use complete raw input + opening stock + actual returns = external exit + internal transfer + closing stock, with packaging/water/steam ledgers separately reconciled. At dispatch opening finished stock + P + physical returns = gross dispatch + closing finished stock + actual losses; gross/returned/redelivered histories produce unique Q, never presume Q=P. Carry burden vectors with every retained/returned cohort. Conserve rubber formulation, cotton, water and measured relevant elements; actual emitted species are independently measured. No reaction-water term is assumed for this non-curing route. | cp_warmup; cp_calender; cp_finish; cp_dispatch; cp_utilities; cp_emissions | reconciled_mass_and_burdens |  |
| asset_manufacture_share | existing capital/reusable manufacture attribution | For each included original asset manufacture vector B, f_current = u_current / D only after the persistent ledger verifies the supported whole installed-service denominator, all beneficiaries and prior assigned shares. Attribute f_current * B once to the actual beneficiary before the existing single reference normalization. Check prior_shares + all current/new beneficiary shares <= 1; carry the remaining original balance. Capacity revisions reconcile the historical ledger. Full physical asset/packaging mass and actual gross stocks/returns never receive f_current. Unknown D or history leaves the final attributed result unavailable, without suppressing actual repair/replacement/service burdens. | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | conserved attributed manufacture vector |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all inventory rows | Confirm supply form, complete native limitations and supplier compatibility independently; blank auxiliary UUIDs require later matching, not invented backgrounds. PE luggage-classification debt is retained; actual paperboard/PE composition and tare must be measured. | Supplier specifications, direct identity audit, calibrated scales |
| quality_stock | all processes | Retain complete raw logs, zero-output burdens, WIP/finished opening/closing and burden vectors. Prove same grade/route/uncured state/cohort for Q and A_i; no duplicate returns, acceptance or normalisation. | Cohort bridge, original acceptance, period ledgers and reconciliation |
| quality_species | air and water | Solvent-free is an application route, not zero emissions. Screen actual formulation and monitoring for every species, medium, detection limit and treatment; no aggregate VOC or residual becomes a named chemical. | Independent analyses, sampling reports, abatement and recipient evidence |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | delivered_fabric | Require one explicit linked terminal Product output consistent with the reference UUID, 1 kg composite basis, positive unique Q and declared qualifiers. Intermediate/released-roll outputs sharing the UUID remain visible and cancel internally. |  |
| validate_completeness | all processes | Require every actual atomic exchange and all raw period/stock/carried-burden records; independently reconcile physical mass/elements, actual species and water phases. Missing measurements or unsupported balances are findings, never a zero/default or a fabricated numerical factor. |  |
| validate_route | all processes | Reject applicability for tyres, PVC/PU, wet latex/solvent/coagulation, primer-dependent, on-site raw ingredient mixing or cured-state routes without a separately evidenced method. Do not infer native supply geography where absent; preserve PE classification debt and provider/recipe limitations in consumed context. | `hubner-calender-2019`; `rosich-calender-state` |
| validate_asset_manufacture_conservation | existing capital/reusable manufacture attribution | For every included capital/reusable manufacture attribution verify same-asset continuity, whole installed service in matched units, all historical/current beneficiaries, prior assigned manufacture shares and cumulative share <= 1. Reject a reset by period, cohort, provider, owner or repair. Check distinct real replacement and incremental repair/treatment vectors separately and preserve gross physical mass. A missing denominator, unexplained previous allocation or incomplete beneficiary ledger requires explicit review and an unavailable final attributed amount; structural inspection cannot claim empirical completeness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Qualified intermediate uncured composite at the declared dispatch handover |
| allowed_use | Same NR/cotton construction and uncured solid-calender route with compatible state and inventory completeness |
| excluded_use | Whole CPC coverage, rubber/fibre-only mass, cured/PVC/PU/tyre cord equivalence, finished belt/glove performance or unsupported cradle-to-gate completeness |
| required_metadata | All reference qualifiers, Q/P distinction, process map, cohort/stock bridge, supplier states, actual geography and utility/transport/treatment links |
| required_quality_disclosure | Measured moisture/composition, raw numerators and burdens, auxiliary UUID/provider gaps, PE classification inconsistency, primary technology synthesis limits, all omissions and uncertain allocations |
| update_trigger | Formulation, substrate/finish, curing state, gate, utility/site, process/controls, stock accounting or supplier change |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| hubner-calender-2019 | handbook | HÜBNER Image Brochure, September 2019, printed pp.34–35; https://www.hubner-group.com/fileadmin/user_upload/hubner-group.com/downloads/broschueren/HUBNER_Image_Brochure_EN_Web_2019-09.pdf | Solvent-free solid-compound calender coating and textile families. Technology evidence only; not one SKU recipe, uncured-state proof, geographic inventory or quantified performance. |
| rosich-calender-state | handbook | ROSICH Y PUIGDENGOLAS, Calendering; https://www.rosich.com/en/calendering/ | Industrial calendered textile supports and cured/uncured supply states. The page also lists separate rubber sheets; do not treat them as fabric. No SKU recipe or universal dimensions/quality ranges adopted. |
| colmant-nr-cotton | handbook | Colmant Coated Fabrics, Natural rubber coated cotton fabric; https://www.colmant-coated-fabrics.com/our-products/coated-fabrics/cotton/natural-rubber-coated-cotton-fabric/ | NR/cotton product identity only; indicative noncontractual supplier properties are not recipe, calender setting, inventory or lifetime defaults. |
| epa-rubber-2008 | official_guidance | US EPA, Emission Factor Documentation for AP-42 Section 4.12, Draft Final November 2008, §§3.3.1–3.3.2,4.1.2,4.1.4; https://www.epa.gov/sites/default/files/2020-10/documents/db04s12.pdf | Warmup, pressure/temperature calender bonding, cooling/cutting and separate mill/calender emission coverage. Tyre/neoprene tests are not NR/cotton emission factors, a required compound recipe or proof of curing. |
| ilcd-allocation-2010 | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA Detailed guidance, first edition 2010, §7.9.3, printed p.257; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Multifunctionality: subdivision, demonstrated determining physical causality and residual economic allocation. General LCA method, not a product-specific mass/time/energy allocation coefficient. |
