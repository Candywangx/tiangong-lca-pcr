---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.ammonium-sulphate
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Synthetic crystalline ammonium sulphate by ammonia–sulfuric acid neutralisation

## 1. Scope and Applicability

This PCR covers synthetic bulk crystalline ammonium sulphate ((NH4)2SO4, CAS 7783-20-2) made by neutralising anhydrous ammonia with concentrated sulfuric acid, crystallising in a saturator/evaporator, separating crystals, steam-heated drying, screening and enclosed bulk storage. `epa-as-ap42` §8.4.2 and Fig.8.4-1 establish this route separately from caprolactam and coke-oven coproduct recovery. Imported steam and actual cooling interfaces are retained; this selected route has no foreground fuel-fired dryer. The reference is uncoated crystal, not compacted granules or a nutrient mixture.

Exclude caprolactam/coke-oven/nickel/MMA coproduct recovery, ammonia recovered from waste or gas scrubbing, spent-acid recovery, gypsum conversion, ammonium bisulphate/persulphate, mixed NPK/ASN fertilisers, delivered solutions, wet crystal cake, compounded coatings and compacted/agglomerated products. Site-specific extensions require corresponding original route evidence, individual exchanges and independent applicability review. `yara-as-product` confirms marketed grade diversity and one supplier label only; it neither proves this manufacturing route nor sets purity, nutrient or moisture defaults.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.ammonium-sulphate |
| classification_refs | CPC 3.0:34612; proposed narrower relation for the selected synthetic crystal route |
| covered_products | Single-species synthetic crystalline ammonium sulphate with measured free water and impurities, uncoated bulk delivery |
| excluded_products | Recovered coproducts; other ammonium salts; mixed/solution/coated/compacted products |
| representative_product | Accepted net bulk synthetic ammonium-sulphate crystals at plant gate |
| production_route | Anhydrous NH3 + concentrated H2SO4 → reaction/crystallisation → centrifugal separation → steam-heated drying → screening/bulk handling; mother-liquor and captured-salt loops |
| market_state | Bulk uncoated crystalline solid, measured residual moisture/assay/particle size; no assumed commercial grade |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply synthetic crystalline ammonium sulphate as a chemical/nitrogen-and-sulfur fertiliser intermediate |
| How much | 1 kg reference flow |
| How well | Accepted declared grade; measured salt assay/free moisture/free acid/impurities/particle size and nutrient basis; no application-performance equivalence |
| How long or cycle | One manufacturing-gate supply; crop cycle and downstream fertiliser application excluded |
| reference_flow_link | reference_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Ammonium sulphate `7f128b59-9df7-4b5d-ad0f-00103b916cf7` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | site/period; actual SKU/grade; synthetic NH3/H2SO4 route; net accepted crystal mass; salt assay and wet/dry basis; free water/free acid/impurities; crystal size; uncoated bulk state; supplier identities; steam/cooling interfaces |

All qualifiers must be recorded in the actual data package. The 1 kg denominator includes measured residual free water and impurities in accepted product; neither dry pure salt nor nitrogen mass replaces it.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh net accepted product using cp_product; exclude transport tare. P is accepted net kg over the same represented period. Every inventory row is per 1 kg reference flow. |
| species_basis | ammonia_feed, acid_feed, reference_product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Retain supplied/product gross mass and separately measured component masses. Assay fractions state wet/dry basis; water and impurities are not active chemical. Molecular balance is a consistency diagnostic, never an invented yield or recipe. |
| steam_basis | steam, condensate | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Preserve incoming steam and outgoing condensate mass independently. cp_steam also records inlet/outlet enthalpy and Q_delivered in MJ. The Mass UUID proves neither a pressure nor a net-heat background basis; a compatible provider definition is mandatory. |
| electricity_basis | power | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Keep the database reference property Net calorific value; meter actual AC electricity and convert kWh to MJ by 3.6. This is an electrical-unit conversion, not a fuel calorific-value assumption. |
| water_mass | process_water, cooling_water, cooling_return | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Volume records require measured water density at the actual temperature/composition and a traceable conversion; no generic density default. Reconcile liquid/vapour/carrier water and upstream withdrawal separately. |

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| water_discharge_volume | liquid_water | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Preserve liquid discharge as m3 using its verified Volume identity. Convert to kg with measured discharge density only for the separate water-mass ledger, without altering the inventory reference unit. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Delivered anhydrous ammonia, concentrated sulfuric acid and actual utilities/materials at the plant input interface |
| starting_condition_role | Foreground interface; upstream production, transport and treatment are still required |
| product_classification_scope | Selected synthetic crystal subset of CPC 34612; classification does not define recipe or manufacture |
| recursive_input_rule | External same-category seed has an upstream provider; mother liquor, wet crystals, recovered fines and internal stock movements are retained as equal physical stage links within the integrated unit |
| upstream_dataset_requirement | Verify species/state/quantity/source/technology and supplier mass/energy basis. Identity-only UUIDs do not establish a complete upstream dataset |
| disclosure | Actual site, period, grade, route, provider interfaces, recovery/wastes, emissions/media, stocks, exclusions and missing measurements |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_route | as_production | Include receipt/vaporisation, reaction/crystallisation, crystal separation, steam-heated drying, screening, enclosed bulk storage, vacuum/cooling and exhaust control with actual maintenance/waste handling. Keep stage meters even when modelled as one unit. | epa-as-ap42, eu-lvic-aaf |
| b_recovery | as_production | Internal recycles have equal mass/component quantities at both ends. Record stock changes, spills, unrecovered salt and actual purges. Keep the unallocated physical process graph separately from the burden-attribution ledger. | epa-as-ap42, eu-lvic-aaf |
| b_receivers | as_production | Contaminated mother/scrubber/cooling purges and washdown go to characterised external treatment under this scope; preserve downstream treatment burdens. They are waste transfers, not site freshwater releases. Actual direct process-effluent treatment/discharge requires separately evidenced complete treatment/species exchanges. | eu-cww |
| b_completeness | as_production | Include actual startup/shutdown/idle/upset loads and residual releases after controls. Historical negligible emissions, closed loops and a found UUID do not prove zero. Actual packaging, coating, conditioning chemicals, filter/rag wastes, capital treatment and transport/treatment services must be disclosed; extensions need individual measured rows and evidence. | eu-cww, eu-lvic-aaf |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| as_production | Integrated synthetic crystal manufacture | required | Declared NH3/H2SO4 and steam-heated drying route | foreground production | 1 kg accepted net bulk crystal product |

Physical stages remain separately metered: feeds → saturator/crystalliser → centrifuge → steam-heated dryer → screen → bulk dispatch. Mother liquor and captured salt return to reaction/crystallisation; vacuum condensate, steam/return and cooling inlet/return retain their separate phase and provider identities. No generic supply quantity, yield, purity, coating, dryer factor or steam-energy intensity is prescribed.

### Process: Integrated synthetic crystal manufacture (`as_production`)

#### Inputs

##### Product flows

###### Ammonia, anhydrous, liquid (`ammonia_feed`)

Delivered anhydrous liquid ammonia, vaporised inside this unit when needed. Measure net supplied NH3 and actual assay, carrier water, vaporisation energy and losses; aqueous-ammonia delivery is outside this route.

- Selected flow: Ammonia, anhydrous, liquid `6928be4f-282b-4448-8f2a-f8c746621303`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual matched-period physical amount divided by accepted net product mass P; record through cp_inputs. No default quantity.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_inputs`
- Sources: `epa-as-ap42`, `eu-lvic-aaf`, `eu-cww`

###### Sulfuric acid (`acid_feed`)

Use this UUID only for actual industrial concentrated sulfuric acid within its 93–98% delivered mass-fraction definition. Measure delivered solution mass and H2SO4/water fractions independently; do not assume 98% or count active acid again as another input. Oleum, spent acid and incompatible concentrations require separate identities and route review.

- Selected flow: Sulfuric acid `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual matched-period physical amount divided by accepted net product mass P; record through cp_inputs. No default quantity.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_inputs`
- Sources: `epa-as-ap42`, `eu-lvic-aaf`, `eu-cww`

###### Ammonium sulphate (`external_seed`)

Conditional purchased crystalline ammonium sulphate used for seeding/startup or redissolution. Record its supplier route, composition and upstream burden. Internal fines/rework are internal links, not this external input; purchased salt is not counted as newly synthesised salt in the N/S reaction-yield ledger.

- Selected flow: Ammonium sulphate `7f128b59-9df7-4b5d-ad0f-00103b916cf7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual matched-period physical amount divided by accepted net product mass P; record through cp_inputs. No default quantity.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_inputs`
- Sources: `epa-as-ap42`, `eu-lvic-aaf`, `eu-cww`

###### Alternating current (`power`)

This UUID represents Chinese grid-average AC supplied to the user at 1–35 kV. Confirm actual country, voltage and provider loss boundary before linkage. Meter reaction circulation, centrifuge, vacuum, dryer fan, screening, cooling, scrubber and auxiliary loads separately; another grid/voltage requires its own identity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Unit group: `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Actual matched-period physical amount divided by accepted net product mass P; record through cp_energy. No default quantity.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `epa-as-ap42`, `eu-lvic-aaf`, `eu-cww`

###### Steam, in chemical industry (`steam`)

Imported chemical-industry steam is a physical Mass exchange, not a net delivered-MJ definition. Record inlet mass, pressure (gauge/absolute), temperature, steam quality, enthalpy and provider mass reference. Retain vacuum-system and dryer-stage meters; conditional evaporator heating is measured rather than inferred from a historical diagram. Returned condensate and losses stay separately visible.

- Selected flow: Steam, in chemical industry `7734613a-3ef2-47ce-aff0-9a1bd67906c6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual matched-period physical amount divided by accepted net product mass P; record through cp_steam. No default quantity.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steam`
- Sources: `epa-as-ap42`, `eu-lvic-aaf`, `eu-cww`

###### water, process (`process_water`)

Purchased process water for initial solution preparation, wash/scrubber makeup, cleaning and onsite cooling makeup where used. Record each use and water quality; include carrier water in separate component accounting, not twice in purchased-water totals. Internal recycled liquor is not fresh supply.

- Selected flow: water, process `2f102a77-b596-4289-8a8d-ce7d6e347a2d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual matched-period physical amount divided by accepted net product mass P; record through cp_water. No default quantity.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `epa-as-ap42`, `eu-lvic-aaf`, `eu-cww`

###### Cooling water (`cooling_water`)

Conditional externally supplied liquid cooling water crossing the unit interface. Measure inlet and paired return separately with temperature and composition. An onsite recirculation loop is an internal link; its makeup uses process_water and actual evaporative loss/blowdown uses the corresponding output rows. Do not count loop throughput as water consumption or purchase both the same water and a fully inclusive cooling service.

- Selected flow: Cooling water `df413bba-3c03-412b-a80a-c6082b6b9b33`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual matched-period physical amount divided by accepted net product mass P; record through cp_water. No default quantity.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `epa-as-ap42`, `eu-lvic-aaf`, `eu-cww`

###### Lubricating oil (`lubricant`)

Conditional petroleum-derived lubricating oil for actual pumps/centrifuge/fans. Verify SKU, base oil, additives, contamination and consumed/replaced mass; this is not a product anticaking coating or PAO lubricant. Its database calorific descriptor supplies no energy or recipe default.

- Selected flow: Lubricating oil `66628f20-9d33-4997-bd6c-6357453fa268`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual matched-period physical amount divided by accepted net product mass P; record through cp_inputs. No default quantity.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_inputs`
- Sources: `epa-as-ap42`, `eu-lvic-aaf`, `eu-cww`

#### Outputs

##### Product flows

###### Ammonium sulphate (`reference_product`)

Accepted net bulk crystalline ammonium sulphate at dispatch/storage gate, uncoated and not compacted. Weigh excluding transport tare; retain free moisture, salt assay, free acid, impurities, particle-size distribution and actual nutrient assays. Count final accepted product once; intermediate wet crystals and internal finished-stock transfers are not additional external products.

- Selected flow: Ammonium sulphate `7f128b59-9df7-4b5d-ad0f-00103b916cf7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product`
- Sources: `epa-as-ap42`, `eu-lvic-aaf`, `eu-cww`

###### Returned clean steam condensate (`condensate`)

Conditional recovered steam condensate returned across the provider interface. Verify actual phase-change condensate, purity, mass, temperature and receiver. Process-vapour condensate containing ammonium/acid is characterised separately and routed to reuse or waste; it must not be called clean boiler return. No automatic avoided-heat credit.

- Selected flow: Returned clean steam condensate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual matched-period physical amount divided by accepted net product mass P; record through cp_steam. No default quantity.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steam`
- Sources: `epa-as-ap42`, `eu-lvic-aaf`, `eu-cww`

###### Cooling water (`cooling_return`)

Conditional externally returned cooling water paired to cooling_water. Keep its physical quantity and temperature unchanged by environmental-burden attribution; evaporation, leaks, contamination and stock changes explain inlet/return differences. Internal cooling return is not this external output.

- Selected flow: Cooling water `df413bba-3c03-412b-a80a-c6082b6b9b33`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual matched-period physical amount divided by accepted net product mass P; record through cp_water. No default quantity.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `epa-as-ap42`, `eu-lvic-aaf`, `eu-cww`

##### Waste flows

###### Ammonium-sulphate mother-liquor purge (`mother_purge`)

Conditional mother liquor leaving for external treatment. Measure gross liquor mass, water, dissolved ammonium sulphate, free acid, impurities and receiver acceptance. Returned saturated liquor stays internal; external waste is not a freshwater emission or commercial salt product.

- Selected flow: Ammonium-sulphate mother-liquor purge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual matched-period physical amount divided by accepted net product mass P; record through cp_waste. No default quantity.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `epa-as-ap42`, `eu-lvic-aaf`, `eu-cww`

###### Ammonium-sulphate dryer-scrubber purge liquor (`scrubber_purge`)

Conditional discarded dryer-scrubber liquor; characterise dissolved/suspended salt, acid and water separately. Recycled scrubber capture is an internal salt/water return, not simultaneously waste and atmospheric emission.

- Selected flow: Ammonium-sulphate dryer-scrubber purge liquor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual matched-period physical amount divided by accepted net product mass P; record through cp_waste. No default quantity.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `epa-as-ap42`, `eu-lvic-aaf`, `eu-cww`

###### Aqueous cooling-tower blowdown (`cooling_blowdown`)

Conditional onsite cooling-loop blowdown sent to an external treatment receiver. Measure salts, actual dosed chemicals, contamination, water and disposal conditions. Any actual conditioning chemical must be added as its own verified atomic input before a complete dataset can be claimed; no biocide/antiscalant recipe is presumed.

- Selected flow: Aqueous cooling-tower blowdown
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual matched-period physical amount divided by accepted net product mass P; record through cp_waste. No default quantity.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `epa-as-ap42`, `eu-lvic-aaf`, `eu-cww`

###### Dust (`rejected_dust`)

Conditional segregated collected salt dust/spill residue rejected from recovery. Record actual salt/impurity/moisture composition and receiver; recovered reusable fines remain internal. Different contaminated residues require separate rows. No credit for disposal and no double counting as emitted PM.

- Selected flow: Dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual matched-period physical amount divided by accepted net product mass P; record through cp_waste. No default quantity.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `epa-as-ap42`, `eu-lvic-aaf`, `eu-cww`

###### Used lubricating oil (`waste_oil`)

Conditional used petroleum lubricating oil removed for authorised external handling. Record contamination, water, net mass and actual receiver/treatment; distinguish contaminated rags/filters as separately characterised wastes if present.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual matched-period physical amount divided by accepted net product mass P; record through cp_waste. No default quantity.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `epa-as-ap42`, `eu-lvic-aaf`, `eu-cww`

###### Ammonium-sulphate equipment-wash wastewater (`washdown`)

Conditional separately collected cleaning wastewater sent to external treatment. Measure gross aqueous mass, dissolved salt/free acid, actual cleaning chemicals and receiver conditions. Add each actually purchased cleaning formulation as one full commercial input with its actual carrier water and composition recorded separately. Components belong to composition balances; list a component as a separate purchase only when it was actually bought and dosed separately, without also purchasing it inside the same formulation. Cleaning supplies no universal reagent or default volume.

- Selected flow: Ammonium-sulphate equipment-wash wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual matched-period physical amount divided by accepted net product mass P; record through cp_waste. No default quantity.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `epa-as-ap42`, `eu-lvic-aaf`, `eu-cww`

###### Rejected ammonium-sulphate crystals for disposal (`rejected_crystals`)

Conditional off-spec crystalline product actually discarded rather than internally redissolved/reworked. Retain assay, moisture, contamination, mass and receiver; do not count it in accepted product P or simultaneously as recycled salt or waste dust.

- Selected flow: Rejected ammonium-sulphate crystals for disposal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual matched-period physical amount divided by accepted net product mass P; record through cp_waste. No default quantity.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `epa-as-ap42`, `eu-lvic-aaf`, `eu-cww`

##### Elementary flows

###### ammonia (`nh3_air`)

Actual NH3 released to outdoor air after abatement from receipt/vaporisation/reaction, vacuum vents, dryer and diffuse losses. Sum measured sources over the matched period; report NH3 mass, not ammonia-N without validated molecular conversion. No positive default or inferred zero.

- Selected flow: ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual matched-period physical amount divided by accepted net product mass P; record through cp_air. No default quantity.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `epa-as-ap42`, `eu-lvic-aaf`, `eu-cww`

###### sulphuric acid (`acid_air`)

Actual H2SO4 acid mist to outdoor air after control from receipt/handling/reaction where demonstrated. Measure species-specific mass and avoid counting it again in salt PM; indoor occupational concentration is not a plant-boundary release.

- Selected flow: sulphuric acid `d1e249b9-59b4-45c4-b1cb-ad89a2dd167b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual matched-period physical amount divided by accepted net product mass P; record through cp_air. No default quantity.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `epa-as-ap42`, `eu-lvic-aaf`, `eu-cww`

###### particles (PM2.5) (`pm25_air`)

Actual residual particulate at or below 2.5 micrometres to outdoor air from drying/screening/handling after capture. Use size-resolved representative measurements with filterable/condensable basis disclosed. Retain total-PM measurements as diagnostics, not another additive exchange.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual matched-period physical amount divided by accepted net product mass P; record through cp_air. No default quantity.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `epa-as-ap42`, `eu-lvic-aaf`, `eu-cww`

###### particles (PM2.5 - PM10) (`pm10_air`)

Actual outdoor particulate above 2.5 and at or below 10 micrometres. Derive from compatible simultaneous cumulative measurements only; cumulative PM10 is not this interval and is not summed with PM2.5. Missing size partition remains a data gap.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual matched-period physical amount divided by accepted net product mass P; record through cp_air. No default quantity.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `epa-as-ap42`, `eu-lvic-aaf`, `eu-cww`

###### particles (> PM10) (`pmgt10_air`)

Actual outdoor particulate above 10 micrometres, not cumulative PM10. Reconcile the three nonoverlapping bins to compatible total PM; sampled particles are not automatically pure ammonium sulphate and require compositional evidence for N/S balances.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual matched-period physical amount divided by accepted net product mass P; record through cp_air. No default quantity.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `epa-as-ap42`, `eu-lvic-aaf`, `eu-cww`

###### water vapour (`water_vapor`)

Net process water vapour reaching outdoor air from crystallisation/vacuum, drying and actual onsite cooling evaporation. Exclude incoming ambient humidity and captured condensate; document condensate recovery and moisture balances. Cooling supplied wholly upstream is not this site emission.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual matched-period physical amount divided by accepted net product mass P; record through cp_water. No default quantity.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `epa-as-ap42`, `eu-lvic-aaf`, `eu-cww`

###### Water (`liquid_water`)

Conditional uncontaminated noncontact cooling-water release to an identified freshwater body. Measure liquid quantity, temperature and receiving medium separately from return to a utility. Contaminated process water/purges go to external treatment under this scope; direct treated process-effluent release needs its own complete treatment/species inventory and route evidence. A water-resource withdrawal or water-vapour flow cannot represent this discharge.

- Selected flow: Water `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Unit group: `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: Actual matched-period physical amount divided by accepted net product mass P; record through cp_water. No default quantity.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `epa-as-ap42`, `eu-lvic-aaf`, `eu-cww`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_prime | as_production | The declared route makes ammonium sulphate as its prime product. Charge measured dedicated reaction, separation, drying and controls to accepted output; fine/coarse size grades of the same chemical are not invented coproduct species. Subdivide metered grade-specific finishing first and disclose actual production-weighted aggregation for a grade mixture. | epa-as-ap42 |
| a_physical | as_production | Keep actual recovered salt, liquid returns, wastes and emissions at their full physical quantities. Waste status requires composition and receiver evidence. No automatic substitution credit or negative waste burden; returned condensate/cooling water is not a saleable coproduct merely because it is listed as a product interface. | epa-as-ap42, eu-cww |
| a_shared | as_production | Assign shared utilities using measured stage services and matched meter boundaries before aggregation. Document driver, totals and uncertainty; do not split physical quantities by an environmental allocation share. Caprolactam/coke or other recovered-product allocation requires a separate parent-production method and is outside this prime-product route. | eu-lvic-aaf |

## 8. Foreground Data Collection, Calculation, and Quality Rules

All protocols retain raw unallocated totals for one complete matched site, route, grade, supplied state and representative production period, including attributable startup, shutdown, idle, upset, failed and zero-accepted-output operations, cleaning and rework. Reconcile raw-material, work-in-progress, rework and finished-product opening/closing stocks with their carried burdens; do not pair old-stock dispatches with current processing alone or lose failed-operation burdens. Establish unique positive accepted net product mass P from traceable production, returns, reacceptance, dispatch and stock records; internal rework is not new product output. Apply normalize_period exactly once to each reconciled raw exchange total. Inventory amount rules and protocol aggregation columns declare that final per 1 kg reference-flow basis, not additional divisions. If the complete pool has no positive P, retain totals for a justified matched wider period or report the unit result unavailable. This PCR requires future measured SKU/quantities; it supplies no real site dataset. Keep physical quantities, component balances and environmental attribution in separate ledgers.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | as_production | reference_product | acceptance_stock_assay | batch/SKU; net product mass P; tare; salt assay wet/dry basis; free moisture/free acid; impurities; N/S; size; rejected/reworked product; traceable returns/reacceptance; opening/closing stocks and WIP with carried burdens | Calibrated net weighing and representative validated matrix-specific assay; reconcile production, dispatch and accepted-stock movement without recounting internal rework. Nutrient label alone is not salt assay. | kg; mass fraction | each batch/continuous meters; representative samples and events | same represented period | declared compatible site/grade/route | per 1 kg reference flow | calibration; laboratory QA/recovery; acceptance/stock reconciliation |
| cp_inputs | as_production | ammonia_feed, acid_feed, external_seed, lubricant | receipt_dosing_stock | row_id; supplier/SKU/CAS; state/route; gross mass; assay; carrier water; additives; intake/return; stocks; batch dosing | Use calibrated receipts/dosing and stock changes for each atomic material. Retain both gross supplied mass and component fractions; require supplier/background mass-basis compatibility. | kg; mass fraction | each batch/continuous meters; representative samples and events | same represented period | declared compatible site/grade/route | per 1 kg reference flow | supplier originals; scale/doser calibration; route/grade certificates |
| cp_energy | as_production | power | electricity_meter | inlet kWh; country; voltage; provider; stage kWh; shared loads; idle/startstop; loss boundary | Read AC inlet and stage meters; allocate only shared burdens using observed service drivers; reconcile to inlet. Convert actual kWh to MJ. | kWh; MJ | each batch/continuous meters; representative samples and events | same represented period | declared compatible site/grade/route | per 1 kg reference flow | meter calibration; provider boundary; stage reconciliation |
| cp_steam | as_production | steam, condensate | steam_condensate_meter | inlet/outlet mass; pressure gauge/absolute; T; steam quality; enthalpy method; recovered condensate purity/receiver; vacuum/dryer stage meters; heat losses | Meter incoming steam and outgoing condensate separately. Use validated pressure-temperature-quality enthalpies and measured return/loss conditions; retain physical water balance and separately inspect delivered heat against provider definition. No assumed steam pressure or boiler efficiency. | kg; pressure; temperature; kJ/kg; MJ | each batch/continuous meters; representative samples and events | same represented period | declared compatible site/grade/route | per 1 kg reference flow | flowmeter calibration; enthalpy/provider originals; interface and uncertainty |
| cp_water | as_production | process_water, cooling_water, cooling_return, water_vapor, liquid_water | water_phase_balance | use-specific inlet; carrier water; actual density/T; two ends of internal loops; condensate; product moisture; wet waste; freshwater outlet; humidity; stocks | Meter liquid flows and actual density; reconcile carrier/free water, incoming steam, returns, net vapour and wet waste. Remove incoming humidity from vapour attribution; identify actual receiving water and temperature. Unknown phase/density remains incomplete. | kg; m3; temperature; humidity | each batch/continuous meters; representative samples and events | same represented period | declared compatible site/grade/route | per 1 kg reference flow | meter calibration; density conditions; phase closure and uncertainty |
| cp_waste | as_production | mother_purge, scrubber_purge, cooling_blowdown, rejected_dust, waste_oil, washdown, rejected_crystals | waste_transfer | row_id; source; gross mass; water/dry solids; salt/acid/contaminants; recovered fraction; receiver/treatment; acceptance; shipment | Weigh/sample each segregated stream at transfer; document composition, actual recipient and downstream treatment. Distinguish recovered internal salt, waste transfer and environmental releases; never treat all discarded material as saleable product. | kg; mass fraction | each batch/continuous meters; representative samples and events | same represented period | declared compatible site/grade/route | per 1 kg reference flow | scale/sample QA; manifests; receiver acceptance and provider linkage |
| cp_air | as_production | nh3_air, acid_air, pm25_air, pm10_air, pmgt10_air | outlet_monitoring | outlet/source; gas volume flow rate F or already integrated gas volume V; matched intervals and T/P wet/dry basis; species mass concentrations; aerosol sizes; filterable/condensable basis; operating hours; bypass/upset; inlet blanks/humidity | Measure outlet flow and species/size-resolved concentrations after abatement using validated representative source sampling; integrate load over matched operation/events. Historical AP42 factors describe configurations but supply no default here. Avoid overlap between acid aerosol and salt PM. | kg; gas volume; concentration; time | each batch/continuous meters; representative samples and events | same represented period | declared compatible site/grade/route | per 1 kg reference flow | sampling/calibration; limits of detection; size/species definitions; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | all inventory rows | For each non-reference row, divide its raw stock-reconciled matched-pool amount X_i by accepted net product mass P exactly once; X_i is not already per kg. Reconcile net dispatches, accepted-stock changes, returns/reacceptance and actual accepted production by lot so P is credited once, with the matched stock/WIP burdens defined above. Keep reference_product exactly 1 kg and numerator units unchanged. A non-positive complete-pool P gives no unit result. Electricity conversion and air-load integration prepare raw amounts for this same single normalization. All protocols retain raw unallocated totals for one complete matched site, route, grade, supplied state and representative production period, including attributable startup, shutdown, idle, upset, failed and zero-accepted-output operations, cleaning and rework. Reconcile raw-material, work-in-progress, rework and finished-product opening/closing stocks with their carried burdens; do not pair old-stock dispatches with current processing alone or lose failed-operation burdens. Establish unique positive accepted net product mass P from traceable production, returns, reacceptance, dispatch and stock records; internal rework is not new product output. Apply normalize_period exactly once to each reconciled raw exchange total. Inventory amount rules and protocol aggregation columns declare that final per 1 kg reference-flow basis, not additional divisions. If the complete pool has no positive P, retain totals for a justified matched wider period or report the unit result unavailable. This PCR requires future measured SKU/quantities; it supplies no real site dataset. Keep physical quantities, component balances and environmental attribution in separate ledgers. | X_i; P; cp_product | amount per 1 kg reference flow | eu-lvic-aaf |
| component_ledger | ammonia_feed, acid_feed, external_seed, reference_product | Component mass = measured gross mass × measured component fraction on the same basis. For dry-basis assays first remove separately measured free water. Compare actual molar N/S inputs, accepted salt, purges, captured/recycled salt and emissions to 2NH3 + H2SO4 → (NH4)2SO4. The reaction produces no stoichiometric water. Carrier water, free acid, impurities, external seed and stock changes explain departures; never force a theoretical yield. | gross mass; assay; wet/dry basis; cp_inputs; cp_product; cp_waste; cp_air | physical component/N/S ledger | epa-as-ap42, eu-lvic-aaf |
| electricity_conversion | power | Raw Energy_MJ = measured electricity_kWh × 3.6; reconcile and aggregate compatible meter boundaries before normalize_period. Do not divide by P in this conversion and again in normalize_period. | electricity_kWh; cp_energy | raw MJ before normalize_period | eu-lvic-aaf |
| steam_interface | steam, condensate | Keep mass-based inventory quantities separately. Delivered heat is the measured inlet enthalpy flow minus outgoing condensate/other physical enthalpy flows and storage change across the declared interface, converted from kJ to MJ. Use pressure, temperature and quality from cp_steam and the actual provider definition; disclose losses. A heat diagnosis neither changes kg to MJ nor creates an avoided-heat credit. | steam mass/conditions; returns; cp_steam | mass inventory and independent heat diagnosis | eu-lvic-aaf |
| air_load | nh3_air, acid_air, pm25_air, pm10_air, pmgt10_air | Obtain raw species mass from the time integral of matched species mass concentration C_i(t) and gas volume flow rate F(t), with explicit conversion to kg. For already integrated interval volume V_j, sum the compatible flow-weighted concentration C_i,j times V_j; do not multiply V_j by time again. Concentration times volume flow rate times interval duration is valid only for a justified constant or compatible interval-average basis. Preserve temperature, pressure, wet/dry state, blanks and event coverage, then apply normalize_period once. Size bins are PM≤2.5, PM2.5–10 and PM>10, using compatible simultaneous measurement bases; do not add cumulative PM10/total PM again. | outlet concentration; defined gas rate or integrated volume; matched interval; cp_air | raw kg before normalize_period | epa-as-ap42, eu-cww |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Verify every adopted UUID against species/CAS, state, hard route and geography; unresolved rows stay specific with no invented UUID. Keep physical identity distinct from provider/reference-quantity compatibility. | cp_product; cp_inputs; cp_energy; cp_steam; cp_water; cp_waste; cp_air; eu-lvic-aaf; eu-cww |
| dq_balance | all inventory rows | Reconcile matched-period gross mass, phase water and N/S balances including stocks, actual assay, carrier water, purges, emissions and internal-loop equality. Retain measurement uncertainty and diagnose rather than force closure. | cp_product; cp_inputs; cp_energy; cp_steam; cp_water; cp_waste; cp_air; eu-lvic-aaf; eu-cww |
| dq_evidence | all inventory rows | AP42 is historical US process/configuration evidence, LVIC-AAF supplies common integrated-site rules and CWW supplies stream/monitoring rules. No single-plant or supplier label becomes a general recipe, yield, range or emission factor. | cp_product; cp_inputs; cp_energy; cp_steam; cp_water; cp_waste; cp_air; eu-lvic-aaf; eu-cww |
| dq_complete | all inventory rows | Missing UUIDs, supplier bases, measurements and representative sampling remain explicit and prevent complete data-package claims. Report zero, nondetect, not-applicable and unmeasured separately; extend actual substances individually before downstream use. | cp_product; cp_inputs; cp_energy; cp_steam; cp_water; cp_waste; cp_air; eu-lvic-aaf; eu-cww |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_reference | as_production | Require exactly one external reference_product output, 1 kg accepted net bulk crystal; reject gross container, nutrient or dry-pure-salt denominator substitution. Require all qualifiers and the selected synthetic route. | epa-as-ap42, eu-lvic-aaf, eu-cww |
| v_inventory | as_production | Every row is one atomic exchange with compatible property/unit and matched-period per-1-kg aggregation. All actual exchanges and service providers must be present; no unresolved identity/basis/measurement can be called a complete linked dataset. | epa-as-ap42, eu-lvic-aaf, eu-cww |
| v_physical | as_production | Check internal-link equality, stock reconciliation and component/N/S/water closure with uncertainty, before environmental burden attribution. Preserve actual physical outputs and recovered quantities regardless of attribution shares. | epa-as-ap42, eu-lvic-aaf, eu-cww |
| v_emissions | as_production | Require actual post-control species/medium and nonoverlapping particle-size quantities. Acid mist and salt PM require separation or explicit overlap reconciliation. Do not infer caprolactam VOC or fuel-boiler emissions for this route; actual extensions require source evidence and their own species rows. | epa-as-ap42, eu-lvic-aaf, eu-cww |
| v_provider | as_production | Verify ammonia state, acid concentration, electricity country/voltage, steam pressure/quality/enthalpy/provider mass basis and condensate/cooling receiver definitions. A valid Mass or MJ property is insufficient to establish background compatibility. | epa-as-ap42, eu-lvic-aaf, eu-cww |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset or background_dataset only after actual foreground data production and separate review |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Declared synthetic bulk-crystal supply with compatible providers and disclosed quality |
| excluded_use | Recovered/byproduct manufacture; liquid/mixed/coated/compacted products; field application impacts; completed dataset claims with unresolved gaps |
| required_metadata | site/time/route/grade; reference/product mass basis; assay/moisture; providers; boundary, stocks, recycles, treatments and attribution decisions |
| required_quality_disclosure | measurement/sampling uncertainty; provider and identity gaps; coverage/exclusions; evidence applicability; scientific review state |
| update_trigger | Changed route/grade/assay, supplier/basis, utility interface, abatement, treatment or new material evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| epa-as-ap42 | official_guidance | US EPA AP-42 §8.4 Ammonium Sulfate, 7/93 (reformatted 1/95), pp.8.4-1–8.4-3, Fig.8.4-1; https://www.epa.gov/sites/default/files/2020-09/documents/8.4_ammonium_sulfate.pdf; retrieved 2026-10-13 | Synthetic route, crystal separation, steam-heated drying, salt recovery and particulate controls; historical factors/moisture/coating quantities not adopted |
| eu-lvic-aaf | official_guidance | European Commission LVIC-AAF BREF, August 2007, §§1.3, 1.4.3, 1.5.1, printed pp.12–13,16,32–33; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2022-03/LVIC-AAF.pdf?download=1; retrieved 2026-10-13 | Common integrated-site energy/mass/steam/water balances and heat interfaces only; no AS-specific production BAT or quantity default |
| eu-cww | official_guidance | European Commission CWW BREF, 2016, Chapter 4 BAT2–4 and water/treatment hierarchy, printed pp.543–548; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/CWW_Bref_2016_published.pdf; retrieved 2026-10-13 | Chemical-sector stream characterisation, monitoring and treatment interfaces; preserve actual matrix and receiving conditions |
| un-cpc3-as | official_guidance | UNSD CPC Version 3.0, 30 June 2025, subclass 34612; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/34612; retrieved 2026-10-13 | Classification identity/ancestry only; selected synthetic route is narrower |
| yara-as-product | handbook | Yara United States Ammonium Sulfate product page, APF producer identified; https://www.yara.us/crop-nutrition/fertilizer-products/other-fertilizers/ammonium-sulfate/; retrieved 2026-10-13 | Market grades and one supplier nutrient label only; no synthetic-route proof or composition default |
