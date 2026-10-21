---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.artificial-waxes-and-prepared-waxes
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Prepared paraffin–soy wax by physical blending

## 1. Scope and Applicability

This PCR covers solid, solvent-carrier-free prepared paraffin–soy wax made by physical thermal blending of separately supplied petroleum paraffin and an identified soy-derived wax feedstock, followed by cooling/forming, quality release and actual net delivery at the declared site gate. IGI 6006A is a real representative commercial blend, not a disclosed plant recipe. Apply only after the foreground owner confirms this non-reactive route, all actual acquired ingredients and the supplied solid state. This method is a narrower prepared-wax subset of CPC 35332, not a method for the entire leaf or for every wax application.

Exclude unformulated petroleum paraffin, microcrystalline/mineral wax and mineral-wax-only mixtures; unmixed animal/vegetable wax; a hydrogenated fat alone; separate chemically defined compounds; unblended FT/GTL wax; polyethylene/polypropylene wax synthesis and ordinary polymer resin; wax emulsions/solutions; oxidation, saponification, esterification, hydrogenation or plastic cracking on site; finished polishes, adhesives, cosmetics, dental wax preparations, wax melts and wick-bearing candles. Synthetic wax is not classified merely by its name: some FT-like mineral products remain outside HS 3404. A new use, brand or melting point alone does not create a PCR. Existing petroleum-wax methodology may supply the paraffin input, never duplicate this blend production.

WCO Chapter 34 Note 5 supports prepared wax/fat mixtures while explicitly excluding pure mineral wax even when intermixed and wax dispersed in a liquid medium. The representative product page prohibits food contact; the broader SDS statement of no known restrictions must not erase this SKU-specific limitation. The series SDS keeps exact composition proprietary and does not establish a fixed soy hydrogenation degree, CAS, additive list, mass ratio, melt point, energy use or recovery yield for this SKU. Obtain current lot/SKU specifications and the actual site recipe; do not add fragrance or wick production to this wax-material route. Manufacturer site capabilities demonstrate industrial blending, not a verified 6006A factory or its utility technology.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.artificial-waxes-and-prepared-waxes |
| classification_refs | CPC 3.0:35332; narrower |
| covered_products | Solid prepared paraffin–soy wax from physical blending, before fragrance addition or candle manufacture. |
| excluded_products | Exclude unformulated petroleum paraffin, microcrystalline/mineral wax and mineral-wax-only mixtures; unmixed animal/vegetable wax; a hydrogenated fat alone; separate chemically defined compounds; unblended FT/GTL wax; polyethylene/polypropylene wax synthesis and ordinary polymer resin; wax emulsions/solutions; oxidation, saponification, esterification, hydrogenation or plastic cracking on site; finished polishes, adhesives, cosmetics, dental wax preparations, wax melts and wick-bearing candles. Synthetic wax is not classified merely by its name: some FT-like mineral products remain outside HS 3404. A new use, brand or melting point alone does not create a PCR. Existing petroleum-wax methodology may supply the paraffin input, never duplicate this blend production. |
| representative_product | IGI 6006A |
| production_route | Qualified petroleum paraffin + soy-derived solid wax → weigh/melt/blend → cool/form → QC/pack/store → net accepted delivery; actual site confirmation required. |
| market_state | Solid wax material, before downstream candle formulation; actual shape, grade and temperature declared, packaging excluded from Q. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted net-delivered prepared paraffin–soy wax. |
| How much | 1 kg |
| How well | Actual declared SKU/lot acceptance specification; 6006A food-contact exclusion preserved; no universal blend ratio or physical-property target. |
| How long or cycle | Actual complete reporting interval and linked carried cohorts, without a service-life claim. |
| reference_flow_link | wax_ref |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Artificial waxes and prepared waxes `554ecf09-e83f-4f0d-b777-342cf04a7643` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual recipe and whole commercial input identities; petroleum/soy source and treatment; SKU/lot grade and solid form; no solvent carrier; actual site and period; net-delivery gate; G/R/Q and distinct P; raw/WIP/FG stocks and carried inventory; returns/rework lineage; packaging and logistics; native broad-identity limits and paraffin classification debt; providers and allocation; acceptance restrictions |

The reference identity is the native broad Artificial waxes and prepared waxes Product flow, finished product/manufactured, production mix at plant, with Mass as its only declared property. It provides no CAS, molecular formula, composition, grade, geography/locationOfSupply or environmental medium. Its brief generic comment supplies no recipe. The qualified paraffin–soy blend is contained in this broad identity; the UUID does not prove an IGI provider, recipe, geographic mix, food approval or background inventory. Preserve these limits in every dataset and in selected guidance.

The terminal gate is actual net accepted delivery, not newly released production. Let G be the complete wax mixture mass actually handed out across that gate and R the matched returned mass, both after packaging tare; Q = G - R for the same product, route, physical state and reconciled cohort. Require Q > 0. Deduplicate physical lots and reconcile all return/redelivery events; reinspection or redelivery creates no new production. Keep new quality-release mass P separately and never assume P = Q. Retain opening/closing finished stock and its carried inventory burdens; undelivered finished wax is not Q. Prior-period returns need linked historical burdens and an explicit correction, not a burden-free input. Unresolved or non-positive net delivery cannot be normalized.

Keep raw physical mass/element ledgers separate from attribution of historical inventory burdens. For each actual interval include failed and zero-output runs, start-up/shutdown, rejects, cleaning, return treatment, rework, raw-material/WIP/finished-stock opening and closing quantities and their carried burdens. Internal melt transfers, remelt loops and production-to-warehouse handovers have matching sender/receiver entries and cancel on consolidation. Production records P once; do not add that same cohort’s closing finished stock as another production output. The warehouse/despatch account retains real storage, packaging, handling/loading and dispatch burdens and stock changes, rather than deleting these activities. Its merger with manufacturing cancels internal handover, not actual services.

Declare every required qualifier in dataset metadata or equivalent product/process evidence. Identity UUIDs do not supply inventory amounts or compatible providers.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use 1 kg complete accepted net-delivered blend after tare, with actual permitted composition; no dry/active-wax conversion. |
| mass_conversion | material and water | Mass | kg | Use calibrated net weights; volume requires actual lot density at measured temperature and traceable conversion. No SDS series density or secondary property coefficient is a universal density. |
| utility_units | electricity and heat | Energy | kWh; MJ | Retain electricity kWh and purchased net heat MJ as distinct numerator units. Convert 1 kWh = 3.6 MJ only when needed for a verified provider basis; no fuel heating value on electricity. |
| integration | flow meters | Mass; volume; energy | kg; m3; kWh; MJ | Integrate rate over measured duration once. An already integrated liquid/gas volume receives no extra time multiplier; preserve gas T/P, composition and wet/dry basis if introduced. |
| single_normalization | all inventory | Reference mass | kg | Collection retains raw totals and stock-carried inventory vectors without division. Only calc_normalize reports A_del_i / Q once; card and aggregation wording denote that same operation. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Separately acquired qualified petroleum paraffin and identified soy-derived wax at blending-site receipt; actual auxiliary supplies, opening stocks and carried burdens declared. |
| starting_condition_role | Upstream material manufacture is linked by compatible providers; no fictitious on-site refinery, soybean hydrogenation or polymer synthesis. |
| product_classification_scope | Prepared solid paraffin–soy wax subset of CPC 35332; positive HS34 Note5(c) mixture context; neither a whole-leaf mapping nor a customs ruling. |
| recursive_input_rule | A purchased finished blend enters at its actual downstream handoff with upstream burden; never count its constituents again as purchases or pretend to blend it anew. Such supply needs an explicit route variant. |
| upstream_dataset_requirement | Match actual grade/form/composition, petroleum versus soy source, geography, time, supplier gate and transport; include energy, packaging and treatment services without duplicating foreground activities. |
| disclosure | Recipe/lot scope, supplied form, net-delivery gate, P/G/R/Q, stocks and burden carry, included operations and services, sources/providers, native limits, failed runs, mass/species results, allocation and unresolved gaps. |

Melting, mixing, crystallisation and solidification change phase or structure and do not themselves create reaction water. Distinguish supplied moisture, retained/free water, evaporation, cleaning water and actual outlet water; do not fit reaction water or an unknown outlet to a mass residual. Any genuine chemical modification requires independent reaction/species and route evidence and a reviewed scope extension. Conserve whole mass and applicable C/H/O elements with measured material composition before burden allocation. Identify actual emitted substances and receiving media independently; SDS decomposition possibilities, COD or closure residuals cannot be emission factors. Unexplained imbalance remains a finding.

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_route | wax_blend_delivery | Include receipt, weighed dosing, actual heating/melting, agitation, cooling/forming, quality control, rework, packing, storage, handling/loading and actual dispatch; use measured stage records within one consolidated external inventory. | igi-wax-blending;igi-6000-sds-2018 |
| b_gate | terminal gate | Apply the actual net-delivery gate and cohort/stock rules above. Keep production and warehouse accounts separately auditable and cancel their internal transfer once. |  |
| b_ingredients | procurement | Record each actual purchased commercial material whole, including permitted water/oil/additives. Assays are component subledgers, not duplicate purchases. Separately acquired ingredients have separate rows. No inferred 6006A bill of materials. | igi-candle-waxes;igi-6000-sds-2018 |
| b_utilities | site condition | This inventory supports electrically driven equipment and purchased indirect heat, with water/cleaning and packaging as actually used. On-site combustion, chemical treatment, extra ingredients, refrigerant leakage or different transport modes require additional specific atomic exchanges and evidence before dataset completeness; never omit actual loads. | igi-wax-blending |
| b_physics | mass and species | Apply the independent mass/element and actual species rules above. Phase change is not chemical modification and no default reaction-water term is allowed. | igi-6000-sds-2018 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| wax_blend_delivery | Prepared wax physical blending and actual delivery | required | Declared qualified non-reactive paraffin–soy route | foreground_production | 1 kg net accepted delivered wax |

Stage logs retain receipt, blend/form, first release P and finished warehouse/despatch as distinct accounts. This external inventory has one terminal reference output. Do not rename real intermediates or coproducts to hide UUID ambiguity. Conditional rows require measured presence or evidenced absence; unsupported provider matching is a declared gap.

### Process: Prepared wax physical blending and actual delivery (`wax_blend_delivery`)

#### Inputs

##### Product flows

###### Petroleum paraffin wax feed (`paraffin`)

Native petroleum-fraction wax at plant; name includes 39.9MJ but no verified heat factor. Native CAS, composition, grade, geography/locationOfSupply, medium and comment are absent; only Mass is declared. Active CPC12010 describes crude petroleum while preserved source class399 is residual goods: disclose this classification debt, do not turn it into a physical route contradiction. Verify actual refined paraffin lot; reject plastic-recycling wax and do not claim that the generic UUID proves refinery, purity or supplier.

- Selected flow: Paraffin wax `17bff97f-179d-49d4-9e97-5128bd6020a6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: A_del_paraffin / Q, reported once from the complete raw-period numerator and stock-carried inventory; no default amount.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_materials
- Sources: igi-wax-blending;igi-candle-waxes;igi-6000-sds-2018

###### Soy-derived solid wax ingredient (`soy_wax`)

One separately acquired commercial soy-based wax, not a selector among oils. Declare supplier composition, hydrogenation/other treatment if actually present, water and additives; public 6006A evidence does not fix these. Count the whole input once, with constituents only in subledgers. UUID and provider remain unresolved.

- Selected flow: Soy-derived solid wax feedstock
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: A_del_soy_wax / Q, reported once from the complete raw-period numerator and stock-carried inventory; no default amount.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_materials
- Sources: igi-wax-blending;igi-candle-waxes;igi-6000-sds-2018

###### Purchased electricity (`electricity`)

Meter melting if electric, agitation, cooling/forming, ventilation, quality work, electric handling and warehouse services separately enough to prevent double charging. Verify voltage, mix, geography and provider.

- Selected flow: Electricity for wax blending and handling
- Flow property / unit: Energy / kWh
- Amount rule: A_del_electricity / Q, reported once from the complete raw-period numerator and stock-carried inventory; no default amount.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_utilities
- Sources: igi-wax-blending;igi-candle-waxes;igi-6000-sds-2018

###### Purchased indirect process heat (`heat`)

Conditional measured external indirect heat; record supply/return enthalpy, transfer losses and service boundary. Do not duplicate electrically supplied melting energy or invent steam consumption.

- Selected flow: Purchased net process heat
- Flow property / unit: Energy / MJ
- Amount rule: A_del_heat / Q, reported once from the complete raw-period numerator and stock-carried inventory; no default amount.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_utilities
- Sources: igi-wax-blending;igi-candle-waxes;igi-6000-sds-2018

###### Supplied cooling/cleaning water (`water`)

One identified water supply; submeter actual cooling makeup and cleaning. Count supplied water once, distinguish circulating internal water, product moisture and exported wastewater.

- Selected flow: Supplied freshwater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: A_del_water / Q, reported once from the complete raw-period numerator and stock-carried inventory; no default amount.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_utilities
- Sources: igi-wax-blending;igi-candle-waxes;igi-6000-sds-2018

###### Corrugated shipping carton (`carton`)

Actual carton mass after separating liner; excluded from wax Q but its manufacture, losses and handling stay included. No inferred standard pack size.

- Selected flow: Corrugated cardboard carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: A_del_carton / Q, reported once from the complete raw-period numerator and stock-carried inventory; no default amount.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_packaging
- Sources: igi-wax-blending;igi-candle-waxes;igi-6000-sds-2018

###### Polyethylene bag liner (`liner`)

Actual single-material liner, if used; distinguish new supply, reuse and scrap. A whole purchased composite package needs its own identity rather than duplicate component purchases.

- Selected flow: Polyethylene bag liner
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: A_del_liner / Q, reported once from the complete raw-period numerator and stock-carried inventory; no default amount.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_packaging
- Sources: igi-wax-blending;igi-candle-waxes;igi-6000-sds-2018

###### Diesel-truck freight service (`road_freight`)

Include actual supply logistics and in-scope dispatch transport to the declared gate only. Retain vehicle/load/distance/empty-return evidence; do not add its background fuel/emissions again in foreground. Other modes need distinct rows.

- Selected flow: Road freight by diesel truck
- Flow property / unit: Transport service / tkm
- Amount rule: A_del_road_freight / Q, reported once from the complete raw-period numerator and stock-carried inventory; no default amount.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_logistics
- Sources: igi-wax-blending;igi-candle-waxes;igi-6000-sds-2018

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted net-delivered prepared wax (`wax_ref`)

Terminal delivered solid paraffin–soy blend only; apply all native broad-identity limitations in §3. Whole accepted mixture after tare, not dry constituents, newly released production P or inventory still held. The reference identity is the native broad Artificial waxes and prepared waxes Product flow, finished product/manufactured, production mix at plant, with Mass as its only declared property. It provides no CAS, molecular formula, composition, grade, geography/locationOfSupply or environmental medium. Its brief generic comment supplies no recipe. The qualified paraffin–soy blend is contained in this broad identity; the UUID does not prove an IGI provider, recipe, geographic mix, food approval or background inventory. Preserve these limits in every dataset and in selected guidance.

- Selected flow: Artificial waxes and prepared waxes `554ecf09-e83f-4f0d-b777-342cf04a7643`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: fixed_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: method_formula
- Collection protocol: cp_output
- Sources: igi-wax-blending;igi-candle-waxes;igi-6000-sds-2018

##### Waste flows

###### Rejected wax sent to treatment (`waste_wax`)

Only actual non-saleable wax leaving for treatment, with contamination and receiver; internal remelt remains internal, actual saleable downgrade needs a separately evidenced Product output.

- Selected flow: Rejected paraffin–soy wax waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: A_del_waste_wax / Q, reported once from the complete raw-period numerator and stock-carried inventory; no default amount.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_residuals
- Sources: igi-wax-blending;igi-candle-waxes;igi-6000-sds-2018

###### Cleaning/cooling wastewater (`wastewater`)

Actual exported aqueous stream including its water and measured wax/oil load, destination and treatment boundary; no elementary water release to sewer, no COD-to-species conversion.

- Selected flow: Wax-contaminated process wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: A_del_wastewater / Q, reported once from the complete raw-period numerator and stock-carried inventory; no default amount.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_residuals
- Sources: igi-wax-blending;igi-candle-waxes;igi-6000-sds-2018

###### Discarded corrugated carton (`waste_carton`)

Actual input/output packaging scrap assigned to its cohort and receiver; not all purchased carton mass is necessarily discarded on site.

- Selected flow: Discarded corrugated cardboard
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: A_del_waste_carton / Q, reported once from the complete raw-period numerator and stock-carried inventory; no default amount.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_residuals
- Sources: igi-wax-blending;igi-candle-waxes;igi-6000-sds-2018

###### Discarded polyethylene liner (`waste_liner`)

Actual separate liner waste with contamination/recovery information; not clean-polymer equivalence without evidence.

- Selected flow: Discarded polyethylene bag liner
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: A_del_waste_liner / Q, reported once from the complete raw-period numerator and stock-carried inventory; no default amount.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_residuals
- Sources: igi-wax-blending;igi-candle-waxes;igi-6000-sds-2018

##### Elementary flows

###### Water vapour to air (`water_air`)

Conditional actual evaporation from supplied/retained water, cooling or cleaning. Measure or derive from independently complete water records, with receiving air compartment; not reaction-water generation.

- Selected flow: Water vapour, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: A_del_water_air / Q, reported once from the complete raw-period numerator and stock-carried inventory; no default amount.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_residuals
- Sources: igi-wax-blending;igi-candle-waxes;igi-6000-sds-2018

###### Paraffin-wax aerosol to air (`wax_air`)

Conditional identified paraffin-wax particulate release after controls; retain sampling/speciation, exhaust volume and receiving air. Do not infer whole organic aerosol or other chemical species from SDS or a balance gap. Add separately evidenced actual substances when present.

- Selected flow: Paraffin wax aerosol, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: A_del_wax_air / Q, reported once from the complete raw-period numerator and stock-carried inventory; no default amount.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_residuals
- Sources: igi-wax-blending;igi-candle-waxes;igi-6000-sds-2018

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_subdivide | shared plant and warehouse | Use direct batch/operation measurements and subdivision before allocating shared services; retain the complete failed/rework interval and stock-carried burdens. | eu-pef-allocation-2021 |
| a_coproduct | real saleable downgrade | Only actual separately accepted saleable output may be a coproduct, with its own quantity/receiver and explicit Product row before claiming completeness. Internal remelt and waste receive no fictitious product output or avoided virgin-wax credit. Justify physical or other allocation using calc_allocate; no default mass or economic percentage. | eu-pef-allocation-2021 |
| asset_manufacture_conservation | existing capital/reusable manufacture attribution | Within the applicable allocation decision context, original manufacture burden attributed across uses of actual capital equipment or reusable articles already included in foreground production, packaging or observed services uses one persistent same-asset ledger across all crops, products, cohorts, manufacturing/postrelease services, owners and observation periods. D is its supported whole installed service: all realized historical service plus supported remaining service in the same units as actual beneficiary use u; D must be finite and positive. Period capacity, remaining-only capacity, the physical asset/article mass alone, or current-period product Q alone is not D; supported whole-service throughput in mass units may be used when it demonstrates the causal service and matches u. This does not amortize the manufactured reference product over downstream life or change its declared reference gate/Q. The fractions u/D and all previously assigned manufacture shares together must never exceed 1. Changes of window, custody, provider or repair never restart the original manufacture balance. Replacements have distinct identities and only their real new manufacture vectors; actual repair and treatment increments remain separately accounted. Revised capacity evidence requires transparent reconciliation of prior shares and sensitivity, not a fresh ledger. Keep full physical mass and stock movements independent of burden shares. Unknown D, prior shares or beneficiary coverage requires review and no final manufacture-attributed amount; no assumed lifetime, utilization, zero or arbitrary division is permitted. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory.

Each protocol owner collects unnormalized raw-period records only. The aggregation_rule column declares the final reporting basis, not a collection-side division. For each row i, A_del_i is the complete stock-reconciled inventory numerator defined by calc_stock; every A_del_<row_id> uses that row-specific component. Only calc_normalize performs A_del_i / Q once. Its formula, the cards and this reporting-basis column describe the same operation, never successive normalizations.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | wax_blend_delivery | terminal product | weighing and delivery ledger | owner: warehouse/despatch lead; SKU; route; state; cohort/lot; tare; G; R; P; accepted delivery timestamp; returns/reinspection/redelivery links | Retain unnormalized calibrated net weights and complete movement/acceptance records, distinguish P from delivery, trace each physical mass once and preserve prior-period return burden references. | kg | each movement and close | complete actual interval including failed runs | declared site gate and cohort | per 1 kg reference flow | calibration; signed acceptance; returns trace |
| cp_materials | wax_blend_delivery | ingredient input | lot weighing and procurement | owner: production supervisor; separate material/SKU/CAS if supplied; actual route/grade; whole supply weight; water/active assay; receipt/consumption; raw stock opening/closing; internal reuse | Retain raw weighed receipts and actual consumption by material, reconcile stock changes without counting purchases and consumption twice. Keep assay subledgers separate from commercial purchases, no division by Q. | kg | each lot and run | same complete interval and carried lots | receipt to dosing and remelt | per 1 kg reference flow | supplier CoA/SDS; recipe; scales; stock ledger |
| cp_utilities | wax_blend_delivery | electricity, heat and supplied water in separate subledgers | meters and utility service records | owner: utilities engineer; meter/start/end; carrier; unit; supply/return state; power/flow rate and duration if applicable; integrated volume flag; temperature/density; all stage/run identifiers | Retain unnormalized meter differences or raw rate-duration observations for each actual stage including idle, failed, rework and warehouse loads. Measure net imported heat independently; no A/Q at collection. | kWh; MJ; kg | each shift/run and meter interval | complete interval, no failed-run deletion | production plus declared warehouse/handling services | per 1 kg reference flow | meters; calibration; utility bills; stage logs |
| cp_packaging | wax_blend_delivery | carton and liner separately | packaging issue/return records | owner: packing supervisor; packaging material; net item mass/count; issues/returns; opening/closing stocks; reuse/loss; actual wax lot; tare | Record raw quantities by each actual package material and cohort including damaged/reused packages. Exclude packaging from wax mass, retain its real burdens; composite purchased packages are whole commercial inputs. | kg | each packing lot | complete included storage and delivery interval | packing and warehouse | per 1 kg reference flow | purchase/issue documents; tare tests; reuse logs |
| cp_logistics | wax_blend_delivery | road freight | shipment and service records | owner: logistics lead; origin/destination; mode; vehicle; actual payload mass; route distance; empty return; load allocation; declared gate | Retain raw mass-distance/service records for actual included legs without division; distinguish internal handling, inbound transport and terminal delivery to avoid duplicate carrier services. | tkm | each shipment | all included legs and matched cohort | declared supply and dispatch boundary | per 1 kg reference flow | waybills; route evidence; carrier basis |
| cp_residuals | wax_blend_delivery | each waste and elementary emission separately | weighing, effluent and exhaust records | owner: EHS lead; substance/stream; total mass; water/wax/element assays; destination/medium; treatment handoff; gas volume already integrated or rate/time; sampling condition; controls; recovery | Keep all raw residues/releases from normal, failed, cleaning and rework periods. Distinguish exported wastewater from direct water release. Independently support actual species and water phase movement, never infer reaction water or emissions from COD/residual. | kg | each waste movement and monitoring interval | complete interval including incidents | actual receiver/air compartment | per 1 kg reference flow | manifests; treatment receipts; sampling/assays; mass balance |
| cp_stock | wax_blend_delivery | raw, WIP and finished stock and burdens | physical and carried-inventory ledgers | owner: inventory accountant; raw/WIP/FG opening/closing mass; lot; route/state; carried inventory vector B; date; failed/rework/return links; warehouse handovers | Retain unnormalized physical stocks and their historical inventory vectors separately, including opening/closing WIP and finished wax. Record failed-period burdens and all production/warehouse handovers; trace return historical burdens and no new production on reacceptance. | kg; row-specific inventory units | each movement and interval close | actual interval with prior-period lineage | production plus finished warehouse | per 1 kg reference flow | stock count; reconciled transfer records; historical inventories |
| cp_quality | wax_blend_delivery | identity and batch acceptance | specification and test records | owner: quality manager; SKU; complete recipe/whole commercial ingredients; supplier CAS if known; origin/route; physical state; approved specification; test methods; acceptance/rejection; geography/period | Preserve real lot composition and tests without replacing proprietary ranges by a universal formula. Verify solvent-free solid wax character and actual process; retain food-contact prohibition for representative 6006A and all native limitations. | kg; specification units | each SKU/lot/change | current lot and complete interval | supplier and manufacturing site | per 1 kg reference flow | CoA/SDS; actual recipe; signed release; versioned tests |
| cp_allocation | wax_blend_delivery | shared services and real coproducts | metering and allocation decision | owner: LCA lead; direct/shared load; product cohorts; physical relationship; measured driver; actual saleable output/value if needed; rejected alternatives | Keep raw totals and evidence for subdivision, physical causality and any justified alternative. Reject/waste is not a fictitious valuable coproduct. No collection-side division by Q. | row-specific numerator units | each interval and scope change | matched complete interval | shared plant/warehouse assets | per 1 kg reference flow | meters; allocation rationale; sensitivity; receiver records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_units | raw conversions | m = V × rho(T, lot) for an already integrated material volume; rate readings are integrated over duration once. Electricity MJ = 3.6 × kWh only for a matching provider basis. Exhaust species mass uses measured concentration and compatible actual integrated dry/wet gas volume; never multiply integrated volume by time again. Preserve conversions, uncertainty and original units. | cp_materials; cp_utilities; cp_residuals; temperature; lot density; meter basis | raw converted numerator by row |  |
| calc_gate | wax_ref | Q = G - R from cp_output for the reconciled same product/route/state cohort, after tare and event deduplication, Q > 0. P is newly quality-released wax and is recorded separately. Preserve opening/closing FG stocks and historical burden on prior-period returns; neither undelivered FG nor reinspection is extra delivery or new production. | cp_output; cp_stock; cp_quality; G; R; P | Q |  |
| calc_allocate | shared burdens | Assign direct burdens first; subdivide shared operations where feasible. Otherwise use an evidenced causal physical driver; justify any other relationship and sensitivity after explaining why earlier options fail. Keep real saleable coproducts separate and preserve the unallocated gross mass/element ledger; no automatic waste credit. | cp_allocation; raw period inventory | attributed raw period inventory | eu-pef-allocation-2021 |
| calc_stock | all delivered-cohort rows | For inventory/burden component i, A_del_i = A_period_i + B_open_WIP_i + B_open_FG_i - B_close_WIP_i - B_close_FG_i, after documented cohort attribution and explicit historical-return corrections. A_period_i uses raw consumed inputs/services, includes all failed/zero-output/rework loads and actual included warehouse/packing/handling/dispatch; raw-material receipts and raw stock changes establish consumption once. B terms are carried inventory vectors, not invented current physical exchanges. Cancel paired internal transfers. Unresolved stock burden or all-failed period without positive supplied Q stays carried/pending, never dropped or normalized. | cp_materials; cp_utilities; cp_packaging; cp_logistics; cp_residuals; cp_stock; calc_allocate; historical-return corrections | A_del_i |  |
| calc_normalize | all reported inventory | q_i = A_del_i / Q once after raw conversion, stock reconciliation and attribution. Every card formula and protocol aggregation refers to this same reporting operation, never sequential division. The reference output is Q / Q = 1 kg. Do not divide at collection or normalize failed runs separately. | A_del_i; Q; calc_gate; calc_stock | q_i per 1 kg reference flow |  |
| calc_balance | physical ledger | Reconcile opening raw/WIP/FG mass + external material receipts + physical returns against gross external deliveries, exported waste, measured releases and closing raw/WIP/FG, separating packaging, utility water and wax component subledgers without double counting. Internal P/warehouse transfers cancel. Conserve applicable C/H/O with actual assays; actual species and water formation/consumption need independent evidence. A residual is unresolved, not an adjustable reaction-water or outlet term. This check does not perform a second normalization. | cp_stock; cp_materials; cp_output; cp_residuals; actual composition | physical closure and unresolved findings | igi-6000-sds-2018 |
| asset_manufacture_share | existing capital/reusable manufacture attribution | For each included original asset manufacture vector B, f_current = u_current / D only after the persistent ledger verifies the supported whole installed-service denominator, all beneficiaries and prior assigned shares. Attribute f_current * B once to the actual beneficiary before the existing single reference normalization. Check prior_shares + all current/new beneficiary shares <= 1; carry the remaining original balance. Capacity revisions reconcile the historical ledger. Full physical asset/packaging mass and actual gross stocks/returns never receive f_current. Unknown D or history leaves the final attributed result unavailable, without suppressing actual repair/replacement/service burdens. | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | conserved attributed manufacture vector |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inputs and wax_ref | Verify actual source/route/form/SKU and all native full-field limits; retain paraffin classification debt and 6006A food-contact prohibition. | cp_quality; supplier originals; full native records |
| dq_period | all rows | Complete matched actual intervals including failed/zero-output/rework, stocks and historical burdens; no deleted warehouse/packing/handling/dispatch or duplicate normalization. | cp_output; cp_stock; cp_utilities; calc_normalize |
| dq_balance | physical mass and species | Gross physical mass/elements close within documented measurement uncertainty; independent species and water records, no fabricated residual terms. | cp_materials; cp_residuals; calc_balance |
| dq_provider | concrete dataset | Resolve actual auxiliary identities, compatible upstream quantities/geography/time and treatment routes before a completed linkage claim; preserve uncertainty and missing metadata. | provider records; unresolved register; sensitivity |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_identity | product and route | Verify the prepared paraffin–soy mixture, non-reactive route and solid carrier-free delivery; preserve every native name/route/mix/absence/metadata debt and actual SKU restrictions. Class label alone, broad UUID or tool schema success cannot establish applicability or science approval. | wco-hs34-2022;igi-6006a |
| v_measurement | all rows | Require positive unique actual supplied Q, complete matching interval raw numerators, failed/zero-output/rework and return records, opening/closing WIP/FG burdens and one normalization. Distinguish P from Q; keep all included real warehouse/packing/handling/dispatch loads and cancel only internal handovers. |  |
| v_mass | whole materials and actual species | Require whole-purchase versus component reconciliation, independent mass/element and actual-species evidence, no phase-change reaction water, no volume-time duplication and no fitted outlets. Report unresolved mass or emission speciation explicitly. | igi-6000-sds-2018 |
| v_complete | dataset completion | Each conditional atomic row needs evidence of presence with quantity or genuine non-applicability. Add actual additional inputs, wastes and species as specific rows; missing auxiliary UUID/provider blocks that dataset linkage, not an otherwise authored PCR. Unresolved final reference identity or method scope does block usable methodology. |  |
| validate_asset_manufacture_conservation | existing capital/reusable manufacture attribution | For every included capital/reusable manufacture attribution verify same-asset continuity, whole installed service in matched units, all historical/current beneficiaries, prior assigned manufacture shares and cumulative share <= 1. Reject a reset by period, cohort, provider, owner or repair. Check distinct real replacement and incremental repair/treatment vectors separately and preserve gross physical mass. A missing denominator, unexplained previous allocation or incomplete beneficiary ledger requires explicit review and an unavailable final attributed amount; structural inspection cannot claim empirical completeness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Input wax material for further formulation/candle manufacture, conditional on actual grade/gate compatibility. |
| allowed_use | Matched solid paraffin–soy prepared wax with declared net-delivery and complete inventory. |
| excluded_use | Finished candle/use-stage combustion, food-contact approval, pure paraffin/synthetic-wax synthesis, emulsion or generic whole-leaf coverage. |
| required_metadata | Required qualifiers in §3; process/site and date; all protocols/units; stock and return burden lineage; packaging/logistics; allocation; providers; native limitations. |
| required_quality_disclosure | Actual evidence coverage, failed runs and raw numerator completeness, unresolved UUID/provider/species gaps, measurement uncertainty and exact boundaries; not a claim of scientific approval. |
| update_trigger | Recipe, supplier/route, physical state, acceptance restriction, energy/treatment, gate, inventory practice, source or native identity changes. |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes (30 June 2025), PDF p.172, subclass 35332; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification coordinate and adjacent polishing preparations only; no recipe or acceptance decision. |
| wco-hs34-2022 | official_guidance | WCO, HS Nomenclature 2022, Chapter 34, Note 5 and headings 3404–3406; https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0634_2022e.pdf?la=en | Positive wax/fat mixture identity and exclusions, including mineral-wax-only mixtures and liquid-medium dispersions; classification context, not a customs determination for IGI. |
| igi-6006a | literature | The International Group, IGI 6006A product page; https://igiwax.com/product/igi-6006a/ | Real specialty wax formulation for further container-candle manufacture; product page says not for food contact. No factory, recipe, quantity or certification default. |
| igi-candle-waxes | literature | The International Group, Waxes for Candles, IGI 6006A row; https://igiwax.com/application/candles/ | Paraffin-soy blend identity and soft white/off-white market character; fragrance capacity is downstream context, not fragrance already present or a universal loading. |
| igi-wax-blending | literature | The International Group, Wax Blending capabilities; https://igiwax.com/capabilities/wax-blending/ | Industrial physical blending, solidification/forming and packaging interfaces; multiple North American sites, no assignment of 6006A to one site, energy source or exact recipe. |
| igi-6000-sds-2018 | literature | The International Group, 6000 Series SDS 929124, Version 02, 11 April 2018, pp.1–2,4,9; https://igiwax.com/app/uploads/2024/11/6000-Series-929124_USA_English.pdf | Series includes 6006A; mixture, solid forms, stable normal use and proprietary composition. Broad series percentages and property ranges are not a 6006A recipe, density conversion, process emission factor or target. Hazardous decomposition under abnormal conditions does not prescribe normal emissions. |
| eu-pef-allocation-2021 | official_guidance | European Commission, Recommendation (EU) 2021/2279, Annex I §4.5, pp.63–64; https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | Generic multifunctionality hierarchy only; no wax share, automatic avoided burden or claim of full PEF/CFF conformity. |
