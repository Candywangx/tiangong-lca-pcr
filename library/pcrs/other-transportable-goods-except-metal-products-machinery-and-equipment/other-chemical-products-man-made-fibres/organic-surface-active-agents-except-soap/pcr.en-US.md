---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.organic-surface-active-agents-except-soap
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# C12 sodium dodecyl sulfate dry powder: SO3 sulfation, neutralization and dried supply

## 1. Scope and Applicability

This PCR covers one nonsoap organic surfactant: straight-chain C12, non-ethoxylated sodium dodecyl sulfate (SDS, CAS151-21-3) supplied as dry powder including its measured moisture and incidental salts. The selected route is air-diluted film sulfation of n-dodecanol using purchased liquid SO3, purchased aqueous-NaOH neutralization, vacuum/film drying, actual packaging, finished storage and net factory-gate delivery. This is a narrower manufacturing method within CPC35310, not coverage of the entire surfactant class. Chemithon supports industrial unit operations; Thermo A11183.18 establishes a powder supply form, not that vendor’s manufacturing route. The actual site must independently substantiate the complete route and every operation needed to meet its declared grade.

Exclude SLES, mixed-chain SLS with different EO/alkyl distributions, other counterions, paste/aqueous-solution supply, soap, finished detergent/disinfectant formulations and downstream dilution/formulation/washing, as well as chlorosulfonic-acid, sulfuric-acid/oleum, sulfamic-acid and onsite sulfur-burning routes. The selected drying route is not presumed to be spray drying; different drying routes need new evidence. No supplier recipe, temperature, yield, energy, purity threshold or zero emission is a default. The catalogue heading99% dry basis differs from the actual supplier-CofA minimum98.5% dry basis; US loss-on-drying and non-US Karl Fischer water limits are not interchangeable or general acceptance thresholds.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.organic-surface-active-agents-except-soap |
| classification_refs | CPC 3.0 35310; narrower |
| covered_products | Whole supplied C12 SDS dry powder of the actual declared grade |
| excluded_products | SLES; mixed-chain SLS; other salts; liquid/paste supply; soap; whole downstream formulations |
| representative_product | Sodium n-dodecyl sulfate powder with declared actual assay, moisture and inorganic salts |
| production_route | Purchased n-dodecanol and liquid SO3 → dry-air film sulfation → aqueous-NaOH neutralization → vacuum/film drying → actual finishing, packaging, storage and delivery |
| market_state | Whole dry powder at actual net factory-gate delivery; net powder excludes packaging, not active kg or fixed moisture |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply C12 sodium dodecyl sulfate powder meeting the declared grade |
| How much | 1 kg net actually delivered whole powder |
| How well | Proven actual identity, alkyl/EO profile, assay, moisture, salt and quality acceptance; not washing-service equivalence |
| How long or cycle | One complete actual period and matched cohorts at factory delivery; no default shelf life |
| reference_flow_link | delivered_powder |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Sodium dodecyl sulfate `e15fed31-c5b7-4582-a841-abd0e9b68bea` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual C12 identity and CAS; alkyl and EO distributions; sodium salt; powder form and grade; water/assay/salt methods and dry/as-supplied bases; complete manufacturing and drying route; delivery gate and cohorts; returns/rework genealogy; opening/closing WIP and finished stocks with carried burdens; packaging; site and period; upstream supply and provider basis; actual G/R and original-reference-state D_rev net-delivery bridge; steam-water and external condensate masses T/P/quality/enthalpy and single upstream owner; air species in/out and gross H2O source/phase non-additive views |

This reference points only to terminal row delivered_powder; its complete native limitations are retained in that card. All required qualifiers must be declared in the data package. Q is unique physical powder mass actually net delivered and accepted for the declared cohorts and complete period; it is not newly released production P. Unique lot/delivery/return genealogy deducts final returns and distinguishes first from repeat handovers; reacceptance or reshipment creates no new production, and the same finally supplied material is counted once. Undelivered closing finished stock is excluded from Q.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use actual delivered net whole-powder mass, excluding drum/liner/pallet; distinguish as-supplied, dry, active and pure-C12 mass bases. |
| one_normalization | all inventory rows | Native extensive property | kg; kWh; MJ as declared | Convert complete raw-period numerators and retain matched carried stock burdens; only normalize_delivery divides once. Collection never divides by Q. An integrated volume receives no further time multiplier; native secondary factors are not density. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual purchased n-dodecanol, liquid SO3, aqueous NaOH and water received at plant, with opening stocks and carried burdens |
| starting_condition_role | Upstream manufactured chemical inputs; foreground begins with sulfation, not downstream detergent formulation |
| product_classification_scope | CPC35310 subset: C12 non-ethoxylated sodium salt dry powder |
| recursive_input_rule | If SDS solution/powder is purchased, record its whole procurement and background; do not also claim the same upstream synthesis occurred onsite. Reassess the boundary; constituent decomposition never creates duplicate procurement. |
| upstream_dataset_requirement | Match whole supplied material, assay/water/salt, route, grade, geography/year, transport interface and supplier quantity basis; a broad UUID does not prove background quantities. |
| disclosure | Disclose actual foreground operations, packaging and storage/handling/loading, utilities, controls, testing, cleaning and waste treatment; external transport interfaces and cut-offs. No assumed zero burdens. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_units | sds | Include receipt/storage, SO3 vaporization, air treatment, film sulfation/cooling, prompt neutralization, vacuum/film drying, actual powder finishing, testing, packing, finished storage and factory loading; retain start-up/shutdown, failed runs, rework, cleaning and controls. | `chemithon-sulfation-1997` |
| boundary_interfaces | sds | Retain real upstream chemical and steam backgrounds. Model external inbound/outbound transport at declared interfaces separately; process simplification never removes actually included burdens. Downstream formulation, dilution and washing services need separate data. | `chemithon-sulfation-1997` |
| boundary_stocks | sds | The production ledger retains opening raw material/WIP, real material issues/returns, new release P, closing raw material/WIP and every real waste/species outlet, cancelling internal transfers. FG physical ledger: opening FG/rework WIP + P + measured gross physical returns R + other actual inward transfers + actual added materials/water = disjoint closing FG/rework WIP + measured gross physical dispatch G + other real outward transfers/returns + actual rejects, effluents and species outlets. Independently measure each handover mass, composition and moisture; real rework need not be isomass. Each addition/removal has an atomic row before data use. Cancel P on consolidation. gross_physical_dispatch and physical_return are non-additive custody views of G and R, not new production/purchase/background or quantities added to delivered_powder Q. Q remains unique net delivered accepted powder at the declared reference state; reverse the ORIGINAL accepted delivery quantity D_rev, not blindly the current returned mass R. Only proven matching state, acceptance, cohort and timing permit Q=G-D_rev; only separately proven unchanged mass/state permits D_rev=R. Rework or outside moisture change requires measured physical bridge terms, not renaming R as D_rev. Late returns correct their original delivery/report or an explicit separate adjustment, never an unrelated current Q. Trace reshipment once without creating new production or imposing first release P as denominator. |  |
| boundary_packaging | sds | For each complete drum or liner separately: opening empty + attached-to-WIP/FG + reusable stocks + actual new external acquisitions + actual external returns received = disjoint corresponding closing stocks + packages accompanying gross physical dispatch + separate external returns sent + actual waste. Measure full physical quantities; net powder Q, economic attribution and reuse cycles never shrink gross packaging movement. Internal reuse is not another purchase or credit. Returned packages incur new manufacture only for a real new acquisition; retain existing history and actual cleaning separately without duplication, checking supplier-included production once. Packaging is neither powder composition nor net powder delivery, and empty/attached/reusable states must not overlap. |  |
| boundary_nonwip | sds | Keep raw materials, WIP/FG, cooling-loop water, steam/condensate, heat-transfer fluids, oil/refrigerant charges and actual abatement consumables in separate physical opening/closing quantity, composition/state and per-exchange inherited-vector accounts; equipment hold-up is not WIP again. Instantiate specific substance accounts only when present. Declare whether raw records are receipts, actual issues or consumption already corrected for stocks; never add opening minus closing again to an already corrected consumption record. For an uncorrected ledger, derive real attribution released/carried from independent stock genealogy and include it in B_i once; installed charge and internal circulation are not new period consumption. Missing history remains a quantitative-package gap, not zero. Reconcile gross steam received, external condensate return, leakage and each water loop independently; charge thermal-service upstream burden once under the provider convention. |  |
| boundary_air_steam | sds | Steam-water supply and external condensate return are distinct gross Mass exchanges. steam_heat is the single owner of the matched upstream supplier water/energy convention; their physical cards do not add repeated boiler/treatment backgrounds or automatic return credit. Record real grade, T/P/phase/enthalpy, stock changes, flash/leaks and each receiver, never assume supply=return. Ambient air has no extra additive bulk exchange: measure the aggregate only as a non-additive raw check and record each actual N2/O2/Ar/atmospheric CO2/H2O Resource input and each real gaseous outlet separately. No fixed air recipe, purchased compressed-air default or fossil/biogenic attribution. Actual different supplies, droplet/aerosol/condensate phases and receivers require their own atomic rows before data use. | `chemithon-sulfation-1997` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| sds | Sulfation–neutralization–drying–net delivery | required | Declared C12 route and complete actual period, all real auxiliaries and carried stocks | foreground | delivered_powder |

### Process: C12 powder manufacture and net delivery (`sds`)

This consolidated process retains internal unit and finished-warehouse ledgers and cancels their handovers. Report quantities for the emission/packaging cards where actually present; evidenced absence must be stated, and unmeasured never means zero. Add each actual extra reagent, packaging component, fuel, adsorbent, sludge or emitted species as an independent atomic row.

#### Inputs

##### Product flows

###### n-Dodecanol feed (`dodecanol`)

Separately acquired C12 straight-chain primary alcohol, CAS112-53-8, with actual assay, water and homolog profile. Mixed C12/14 alcohol, ethoxylated alcohol and a rheology-additive hit do not establish this feed. Purchased wet alcohol is recorded whole; constituents remain non-additive subledgers.

- Selected flow: n-Dodecanol
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured gross raw amount for this directional physical exchange, reported once per reference flow as specified in section 8; inherited burden attribution and allocation never change physical mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_material`
- Sources: `chemithon-sulfation-1997`

###### Purchased liquid sulfur trioxide (`so3`)

Whole actual liquid SO3 supply, CAS7446-11-9, including evidenced stabilizer/impurity fractions; vaporization and dry-air dilution occur onsite. Oleum, sulfuric acid, SO2 and SOx control products are different exchanges. Onsite sulfur combustion is outside this selected route; using it requires a separately evidenced process and all fuel, catalyst and species exchanges.

- Selected flow: Liquid sulfur trioxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured gross raw amount for this directional physical exchange, reported once per reference flow as specified in section 8; inherited burden attribution and allocation never change physical mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_material`
- Sources: `chemithon-sulfation-1997`

###### Purchased aqueous sodium hydroxide (`naoh_solution`)

Record actual supplied solution once with supplier assay and grade. NaOH active mass and carrier water are subledgers. Do not substitute a fixed30% solution,95–98% solid or0.2N reagent for an unverified actual strength. The equipment supplier example of50wt% is not a default.

- Selected flow: Aqueous sodium hydroxide reagent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured gross raw amount for this directional physical exchange, reported once per reference flow as specified in section 8; inherited burden attribution and allocation never change physical mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_material`
- Sources: `chemithon-sulfation-1997`

###### Separately acquired deionised water (`water`)

Native Product flow, CAS7732-18-5, production mix at plant, has no geography or numeric quality standard; name-route says ion exchange or reverse osmosis, pure substance. The comment additionally mentions distillation, possible production/consumption mixes and plant/consumer supply. Restrict this choice to actual ion-exchange/RO DI water at its documented supply interface; distillation, actual conductivity, delivery and provider burdens require separate confirmation. The sole property is reference Mass factor1; there is no volume/density property. Count only separately acquired water, including actual DI cleaning/cooling make-up if used; exclude carrier water already in reagents and internal recirculation. Other actual water grades require their own rows.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured gross raw amount for this directional physical exchange, reported once per reference flow as specified in section 8; inherited burden attribution and allocation never change physical mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_material`
- Sources: `chemithon-sulfation-1997`

###### Purchased electricity (`electricity`)

Meter mixing, pumping, SO3 vaporization auxiliaries, air compression/drying, cooling, vacuum, drying auxiliaries, milling if present, cleaning, laboratory, packaging, warehouse and electric loading. Keep failed runs and all genuine rework. Require actual voltage, grid/site/year and provider basis; no generic kWh/kg default.

- Selected flow: Electricity supplied to manufacturing site
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable converted raw-period numerator and matched carried burdens divided once by positive net delivered Q, as specified in section 8.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_energy`
- Sources: `chemithon-sulfation-1997`

###### Purchased steam heat (`steam_heat`)

Actual useful heat at the declared steam import gate from independently measured inlet, external-return and other outlet enthalpy flows with actual stock/loss terms under the supplier convention, covering the dryer, liquid-SO3 vaporizer and any air-dryer regeneration actually using that steam. Do not assume equal inlet/return mass or apply one return state to the whole inlet. Do not count only dryer duty while omitting vaporization heat; other actual heat sources require their own exchanges, and regeneration is not presumed to use steam. Retain line losses and actual start-up/standby allocation. Keep steam mass, condensate and leakage in a separate utility-water ledger. Do not add a duplicate boiler fuel burden when the steam provider already supplies it; onsite fuel combustion requires individual fuel and emission rows.

- Selected flow: Steam heat
- Flow property / unit: Energy / MJ
- Amount rule: Actual attributable converted raw-period numerator and matched carried burdens divided once by positive net delivered Q, as specified in section 8.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_energy`
- Sources: `chemithon-sulfation-1997`

###### Steam water supplied to site (`steam_water_supply`)

Actual gross water mass entering as externally supplied steam, separate from steam_heat MJ. Record meter, actual dryness/quality, temperature, pressure, phase and specific enthalpy, supplier interface, opening/closing line hold-up and real leaks/losses. No fixed pressure, equal supply/return mass or water purity is assumed. Match the actual steam grade before binding its UUID; a pressure-specific steam identity is not universal. steam_heat owns the ONE upstream steam-generation/treatment/delivery burden under the declared supplier water/heat convention; this kg card is the physical utility-water ledger and does not buy a second steam background. Separately acquired process water excludes this same steam water.

- Selected flow: Steam water supplied to site
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured gross raw amount for this directional physical exchange, reported once per reference flow as specified in section 8; inherited burden attribution and allocation never change physical mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_energy`
- Sources: `chemithon-sulfation-1997`

###### HDPE shipping drum (`drum`)

One actual complete HDPE drum article including its integral closure; weigh it separately from net powder. Its actual composition, supplier, capacity, reuse/loss and cleaning determine the burden. Resin or generic plastic packaging is not a verified complete drum provider. Additional separately acquired closures or labels get their own rows.

- Selected flow: HDPE shipping drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured gross raw amount for this directional physical exchange, reported once per reference flow as specified in section 8; inherited burden attribution and allocation never change physical mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources: `chemithon-sulfation-1997`

###### Polyethylene drum liner (`liner`)

One actual separately acquired polyethylene liner, including evidenced grade, thickness and virgin/recycled content. Do not add another liner if already included in a whole purchased drum system. Count real packaging reject and replacement burdens.

- Selected flow: Polyethylene drum liner
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured gross raw amount for this directional physical exchange, reported once per reference flow as specified in section 8; inherited burden attribution and allocation never change physical mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources: `chemithon-sulfation-1997`

###### HDPE shipping drum (`drum_return_received`)

Actual external return received of this usable HDPE drum; reconcile any contained powder separately without duplication. This is not new acquisition; retain ownership and history. One actual complete HDPE drum article including its integral closure; weigh it separately from net powder. Its actual composition, supplier, capacity, reuse/loss and cleaning determine the burden. Resin or generic plastic packaging is not a verified complete drum provider. Additional separately acquired closures or labels get their own rows.

- Selected flow: HDPE shipping drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured gross raw amount for this directional physical exchange, reported once per reference flow as specified in section 8; inherited burden attribution and allocation never change physical mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources: `chemithon-sulfation-1997`

###### Polyethylene drum liner (`liner_return_received`)

Only an actual usable PE-liner return received, with condition and history; neither presume contaminated liners are reusable nor treat this as a new acquisition. One actual separately acquired polyethylene liner, including evidenced grade, thickness and virgin/recycled content. Do not add another liner if already included in a whole purchased drum system. Count real packaging reject and replacement burdens.

- Selected flow: Polyethylene drum liner
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured gross raw amount for this directional physical exchange, reported once per reference flow as specified in section 8; inherited burden attribution and allocation never change physical mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources: `chemithon-sulfation-1997`

##### Waste flows

###### Sodium dodecyl sulfate (`physical_return`)

Non-additive custody physical view: actual gross returned powder R received and weighed at its current state; retain original delivery quantity D_rev, original moisture/composition and actual additions/removals of material/water. Never assume R equals D_rev. Rewashing/redrying/screening and waste retain their true atomic directions. This is neither new purchase nor production; attach no repeated manufacturing background and do not add this view to net Q. Reverse the original delivered quantity at its original reference state; late returns do not reduce unrelated current Q. The same complete native identity restrictions as delivered_powder follow. Native identity explicitly describes the12-carbon sodium organosulfate CH3(CH2)11OSO3Na, an anionic amphiphile with a hydrocarbon tail and polar head used in cleaning/hygiene. The native name declares Production mix, at plant, with no grade or route; no geography/locationOfSupply or CAS field. The sole property is reference Mass factor1. Native class35499 is a classification defect relative to this specific surfactant identity, retained for upstream correction; it is not chemical exclusion evidence. This UUID conditionally locates the whole C12 powder with measured moisture and incidental salts, not pure-active kg, SLES, mixed-chain SLS, a supplier process, guaranteed assay or density. Confirm actual lot identity, alkyl distribution, non-ethoxylation, form, assay/water/salt fractions, manufacturing route and delivery/provider basis. The catalogue powder specification proves a market form, not the vendor’s route.

- Selected flow: Sodium dodecyl sulfate `e15fed31-c5b7-4582-a841-abd0e9b68bea`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured gross raw amount for this directional physical exchange, reported once per reference flow as specified in section 8; inherited burden attribution and allocation never change physical mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_delivery`
- Sources: `chemithon-sulfation-1997`

##### Elementary flows

###### dinitrogen (`n2_in`)

Independently measure actual gas/species mass at the actual inlet or outlet from calibrated dry/wet flow, temperature, pressure, humidity and species analysis; no fixed atmospheric composition, process quantity or assumed inlet/outlet equality. Record source/state and actual transformations/hold-up; add every other observed species separately. Native Elementary/Mass reference index0 factor1, CAS7727-37-9, Resources from air / Renewable element resources from air. Only this species entering in ambient air is represented, not air-separation/liquid purchased gas or an emission. Native isotope/alternative-phase aliases do not authorize replacing the actual ordinary gas; no geography, recipe or amount default.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured gross raw amount for this directional physical exchange, reported once per reference flow as specified in section 8; inherited burden attribution and allocation never change physical mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_species`
- Sources: `chemithon-sulfation-1997`

###### oxygen (`o2_in`)

Independently measure actual gas/species mass at the actual inlet or outlet from calibrated dry/wet flow, temperature, pressure, humidity and species analysis; no fixed atmospheric composition, process quantity or assumed inlet/outlet equality. Record source/state and actual transformations/hold-up; add every other observed species separately. Native Elementary/Mass reference index0 factor1, CAS7782-44-7, Resources from air / Renewable element resources from air. Only this species entering in ambient air is represented, not air-separation/liquid purchased gas or an emission. Native isotope/alternative-phase aliases do not authorize replacing the actual ordinary gas; no geography, recipe or amount default.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured gross raw amount for this directional physical exchange, reported once per reference flow as specified in section 8; inherited burden attribution and allocation never change physical mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_species`
- Sources: `chemithon-sulfation-1997`

###### argon (`ar_in`)

Independently measure actual gas/species mass at the actual inlet or outlet from calibrated dry/wet flow, temperature, pressure, humidity and species analysis; no fixed atmospheric composition, process quantity or assumed inlet/outlet equality. Record source/state and actual transformations/hold-up; add every other observed species separately. Native Elementary/Mass reference index0 factor1, CAS7440-37-1, Resources from air / Renewable element resources from air. Only this species entering in ambient air is represented, not air-separation/liquid purchased gas or an emission. Native isotope/alternative-phase aliases do not authorize replacing the actual ordinary gas; no geography, recipe or amount default.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured gross raw amount for this directional physical exchange, reported once per reference flow as specified in section 8; inherited burden attribution and allocation never change physical mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_species`
- Sources: `chemithon-sulfation-1997`

###### Atmospheric carbon dioxide entering with air (`co2_in`)

Independently measure actual gas/species mass at the actual inlet or outlet from calibrated dry/wet flow, temperature, pressure, humidity and species analysis; no fixed atmospheric composition, process quantity or assumed inlet/outlet equality. Record source/state and actual transformations/hold-up; add every other observed species separately. Actual atmospheric CO2, CAS124-38-9, Resource input. Do not infer fossil/biogenic/land-use-change origin or carbon removal credit from atmospheric pass-through. Keep the actual incoming CO2 mass separate from new process formation/absorption and gross outlet CO2. Identity remains unbound until the true resource medium and origin convention match; a fossil/biogenic emission or a purchased CO2 Product is not this flow.

- Selected flow: Atmospheric carbon dioxide entering with air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured gross raw amount for this directional physical exchange, reported once per reference flow as specified in section 8; inherited burden attribution and allocation never change physical mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_species`
- Sources: `chemithon-sulfation-1997`

###### Atmospheric water vapour entering with humid air (`h2o_air_in`)

Independently measure actual gas/species mass at the actual inlet or outlet from calibrated dry/wet flow, temperature, pressure, humidity and species analysis; no fixed atmospheric composition, process quantity or assumed inlet/outlet equality. Record source/state and actual transformations/hold-up; add every other observed species separately. Actual incoming gaseous H2O humidity, CAS7732-18-5, Resource from air, excluding purchased water/steam and recirculated internal moisture. Determine kg independently from measured humidity and actual gas flow/state; bulk wet-air m3 is not water volume or kg. A native Volume-based water-in-air identity cannot silently supply a Mass conversion/density. Match the actual gas Resource before UUID adoption; isotope/ice/liquid resources are not substitutes.

- Selected flow: Atmospheric water vapour entering with humid air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured gross raw amount for this directional physical exchange, reported once per reference flow as specified in section 8; inherited burden attribution and allocation never change physical mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_species`
- Sources: `chemithon-sulfation-1997`

#### Outputs

##### Product flows

###### Sodium dodecyl sulfate (`gross_physical_dispatch`)

Non-additive custody physical view: record actual gross dispatch G only, not another production output in addition to the 1kg net reference. Retain each handover net powder mass, composition/moisture, acceptance, cohort and original delivery ID including reshipments; unaccepted or off-state G remains separate, never automatically Q. Do not reduce actual G by stock-burden corrections or economic allocation and never add it to net Q. The same complete native identity restrictions as delivered_powder follow. Native identity explicitly describes the12-carbon sodium organosulfate CH3(CH2)11OSO3Na, an anionic amphiphile with a hydrocarbon tail and polar head used in cleaning/hygiene. The native name declares Production mix, at plant, with no grade or route; no geography/locationOfSupply or CAS field. The sole property is reference Mass factor1. Native class35499 is a classification defect relative to this specific surfactant identity, retained for upstream correction; it is not chemical exclusion evidence. This UUID conditionally locates the whole C12 powder with measured moisture and incidental salts, not pure-active kg, SLES, mixed-chain SLS, a supplier process, guaranteed assay or density. Confirm actual lot identity, alkyl distribution, non-ethoxylation, form, assay/water/salt fractions, manufacturing route and delivery/provider basis. The catalogue powder specification proves a market form, not the vendor’s route.

- Selected flow: Sodium dodecyl sulfate `e15fed31-c5b7-4582-a841-abd0e9b68bea`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured gross raw amount for this directional physical exchange, reported once per reference flow as specified in section 8; inherited burden attribution and allocation never change physical mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_delivery`
- Sources: `chemithon-sulfation-1997`

###### Steam condensate returned to external supplier (`external_condensate_return`)

Actual gross liquid steam-condensate return crossing the external supplier interface, Product return rather than wastewater or atmospheric H2O. Record independent return mass, actual temperature/pressure/phase/enthalpy, water quality/contamination, receiver/ownership and stocks/losses. Do not force its mass or quality equal to supplied steam; distinguish internally reused condensate, actual exported waste and flash vapour, each on its real phase/destination. This mass return carries only the documented supplier return convention; it is not a second heat purchase, generic avoided-production credit or a duplicate water background. The steam_heat owner accounts the supplier energy/water burden once.

- Selected flow: Steam condensate returned to external supplier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured gross raw amount for this directional physical exchange, reported once per reference flow as specified in section 8; inherited burden attribution and allocation never change physical mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_energy`
- Sources: `chemithon-sulfation-1997`

###### Net delivered C12 sodium dodecyl sulfate powder (`delivered_powder`)

Terminal reference Product output after actual packing, finished storage and factory loading. Native identity explicitly describes the12-carbon sodium organosulfate CH3(CH2)11OSO3Na, an anionic amphiphile with a hydrocarbon tail and polar head used in cleaning/hygiene. The native name declares Production mix, at plant, with no grade or route; no geography/locationOfSupply or CAS field. The sole property is reference Mass factor1. Native class35499 is a classification defect relative to this specific surfactant identity, retained for upstream correction; it is not chemical exclusion evidence. This UUID conditionally locates the whole C12 powder with measured moisture and incidental salts, not pure-active kg, SLES, mixed-chain SLS, a supplier process, guaranteed assay or density. Confirm actual lot identity, alkyl distribution, non-ethoxylation, form, assay/water/salt fractions, manufacturing route and delivery/provider basis. The catalogue powder specification proves a market form, not the vendor’s route.

- Selected flow: Sodium dodecyl sulfate `e15fed31-c5b7-4582-a841-abd0e9b68bea`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: fixed_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: method_formula
- Collection protocol: `cp_delivery`
- Sources: `thermo-sds-a11183-2026`; `chemithon-sulfation-1997`

###### HDPE shipping drum (`drum_gross_shipped`)

Full HDPE drum mass accompanying gross physical shipments, including old stock/reshipments; never shrink it by powder net delivery Q, allocation or reuse. One actual complete HDPE drum article including its integral closure; weigh it separately from net powder. Its actual composition, supplier, capacity, reuse/loss and cleaning determine the burden. Resin or generic plastic packaging is not a verified complete drum provider. Additional separately acquired closures or labels get their own rows.

- Selected flow: HDPE shipping drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured gross raw amount for this directional physical exchange, reported once per reference flow as specified in section 8; inherited burden attribution and allocation never change physical mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources: `chemithon-sulfation-1997`

###### HDPE shipping drum (`drum_return_sent`)

Actual usable HDPE drum returned separately to an external owner, disjoint from gross attached shipments and without automatic credit. One actual complete HDPE drum article including its integral closure; weigh it separately from net powder. Its actual composition, supplier, capacity, reuse/loss and cleaning determine the burden. Resin or generic plastic packaging is not a verified complete drum provider. Additional separately acquired closures or labels get their own rows.

- Selected flow: HDPE shipping drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured gross raw amount for this directional physical exchange, reported once per reference flow as specified in section 8; inherited burden attribution and allocation never change physical mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources: `chemithon-sulfation-1997`

###### Polyethylene drum liner (`liner_gross_shipped`)

Full PE-liner mass with actual gross physical shipments, including reshipments; never net it by powder returns or burden allocation. One actual separately acquired polyethylene liner, including evidenced grade, thickness and virgin/recycled content. Do not add another liner if already included in a whole purchased drum system. Count real packaging reject and replacement burdens.

- Selected flow: Polyethylene drum liner
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured gross raw amount for this directional physical exchange, reported once per reference flow as specified in section 8; inherited burden attribution and allocation never change physical mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources: `chemithon-sulfation-1997`

###### Polyethylene drum liner (`liner_return_sent`)

Only an actual separately returned usable PE liner, with receiver and contamination records, not also counted in attached shipment. One actual separately acquired polyethylene liner, including evidenced grade, thickness and virgin/recycled content. Do not add another liner if already included in a whole purchased drum system. Count real packaging reject and replacement burdens.

- Selected flow: Polyethylene drum liner
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured gross raw amount for this directional physical exchange, reported once per reference flow as specified in section 8; inherited burden attribution and allocation never change physical mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources: `chemithon-sulfation-1997`

##### Waste flows

###### Exported manufacturing wastewater (`wastewater`)

One actual wastewater stream sent across the treatment boundary, with water, sulfate, sodium, SDS and other actual constituents assayed as subledgers. Include actual scrubber purge, cleaning and condensate only where they physically join this stream. Condensate reused internally is not exported again. A treatment-service mass is not an elementary discharge; if treatment is onsite, model its actual inputs, sludge and individual final species instead without duplicating this transfer.

- Selected flow: Wastewater from sodium dodecyl sulfate manufacture
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured gross raw amount for this directional physical exchange, reported once per reference flow as specified in section 8; inherited burden attribution and allocation never change physical mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_outlet`
- Sources: `chemithon-sulfation-1997`

###### Disposed off-specification SDS powder (`solid_reject`)

Measure actual disposed spill, contaminated captured powder and irrecoverable reject separately from internal recovered powder. Recovered powder reused onsite is an internal transfer, not a co-product or avoided-production credit. Preserve its original and reprocessing burdens; whole wet reject water remains in the physical ledger.

- Selected flow: Off-specification sodium dodecyl sulfate powder for disposal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured gross raw amount for this directional physical exchange, reported once per reference flow as specified in section 8; inherited burden attribution and allocation never change physical mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_outlet`
- Sources: `chemithon-sulfation-1997`

###### Discarded HDPE shipping drum (`spent_drum`)

Actual discarded complete HDPE drum with contained contamination subledger and specific treatment receiver; never simultaneously count it as usable return or shipped drum, or dispose its contained powder a second time. One actual complete HDPE drum article including its integral closure; weigh it separately from net powder. Its actual composition, supplier, capacity, reuse/loss and cleaning determine the burden. Resin or generic plastic packaging is not a verified complete drum provider. Additional separately acquired closures or labels get their own rows.

- Selected flow: Discarded HDPE shipping drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured gross raw amount for this directional physical exchange, reported once per reference flow as specified in section 8; inherited burden attribution and allocation never change physical mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources: `chemithon-sulfation-1997`

###### Discarded polyethylene liner (`spent_liner`)

Actual failed/used liners discarded within this boundary, including evidenced contamination. No assumption that all delivered packaging is already waste at the manufacturer. Other discarded drum material and treatment sludge require separate specific rows if present.

- Selected flow: Discarded polyethylene drum liner
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured gross raw amount for this directional physical exchange, reported once per reference flow as specified in section 8; inherited burden attribution and allocation never change physical mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_outlet`
- Sources: `chemithon-sulfation-1997`

##### Elementary flows

###### dinitrogen (`n2_out`)

Independently measure actual gas/species mass at the actual inlet or outlet from calibrated dry/wet flow, temperature, pressure, humidity and species analysis; no fixed atmospheric composition, process quantity or assumed inlet/outlet equality. Record source/state and actual transformations/hold-up; add every other observed species separately. Actual gross gaseous outlet including unchanged carrier gas. Native Elementary/Mass reference index0 factor1, CAS7727-37-9, Emissions to air, unspecified. A known more-specific actual compartment requires its own verified identity, never downgrade. Resource-input identities cannot be used as Emission outputs. Retain gross inlet/outlet and net change for each species instead of dropping unchanged carrier mass while retaining pollutants. Ordinary gas identity does not authorize radioactive-isotope/liquid/other-element aliases.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured gross raw amount for this directional physical exchange, reported once per reference flow as specified in section 8; inherited burden attribution and allocation never change physical mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_species`
- Sources: `chemithon-sulfation-1997`

###### oxygen (`o2_out`)

Independently measure actual gas/species mass at the actual inlet or outlet from calibrated dry/wet flow, temperature, pressure, humidity and species analysis; no fixed atmospheric composition, process quantity or assumed inlet/outlet equality. Record source/state and actual transformations/hold-up; add every other observed species separately. Actual gross gaseous outlet including unchanged carrier gas. Native Elementary/Mass reference index0 factor1, CAS7782-44-7, Emissions to air, unspecified. A known more-specific actual compartment requires its own verified identity, never downgrade. Resource-input identities cannot be used as Emission outputs. Retain gross inlet/outlet and net change for each species instead of dropping unchanged carrier mass while retaining pollutants. Ordinary gas identity does not authorize radioactive-isotope/liquid/other-element aliases.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured gross raw amount for this directional physical exchange, reported once per reference flow as specified in section 8; inherited burden attribution and allocation never change physical mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_species`
- Sources: `chemithon-sulfation-1997`

###### argon (`ar_out`)

Independently measure actual gas/species mass at the actual inlet or outlet from calibrated dry/wet flow, temperature, pressure, humidity and species analysis; no fixed atmospheric composition, process quantity or assumed inlet/outlet equality. Record source/state and actual transformations/hold-up; add every other observed species separately. Actual gross gaseous outlet including unchanged carrier gas. Native Elementary/Mass reference index0 factor1, CAS7440-37-1, Emissions to air, unspecified. A known more-specific actual compartment requires its own verified identity, never downgrade. Resource-input identities cannot be used as Emission outputs. Retain gross inlet/outlet and net change for each species instead of dropping unchanged carrier mass while retaining pollutants. Ordinary gas identity does not authorize radioactive-isotope/liquid/other-element aliases.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured gross raw amount for this directional physical exchange, reported once per reference flow as specified in section 8; inherited burden attribution and allocation never change physical mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_species`
- Sources: `chemithon-sulfation-1997`

###### Atmospheric carbon dioxide returned to air (`co2_out`)

Independently measure actual gas/species mass at the actual inlet or outlet from calibrated dry/wet flow, temperature, pressure, humidity and species analysis; no fixed atmospheric composition, process quantity or assumed inlet/outlet equality. Record source/state and actual transformations/hold-up; add every other observed species separately. Actual gross gaseous CO2 outlet and its atmospheric-origin pass-through, CAS124-38-9; separately account actual newly formed CO2, absorption into liquids and stock changes. No fossil, biogenic or land-use origin or climate credit is presumed; further characterization requires independent actual origin and compartment evidence. Queried fossil/biogenic Emission/Resource candidates cannot be forced onto ordinary atmospheric pass-through; keep the specific UUID gap.

- Selected flow: Atmospheric carbon dioxide returned to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured gross raw amount for this directional physical exchange, reported once per reference flow as specified in section 8; inherited burden attribution and allocation never change physical mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_species`
- Sources: `chemithon-sulfation-1997`

###### SDS emitted to air (`sds_air`)

Actual post-control/fugitive SDS mass supported by measured dust and independent composition. Native SLES or ammonium dodecyl sulfate hits are different chemicals. Do not add the same chemical dust mass again as total particulate matter; any alternative particulate characterization must be explicitly reconciled with non-overlapping particle-size fractions.

Native Elementary flow CAS151-21-3, reference Mass index0 factor1, with no fixed geography, grade, manufacturing route, particle size or emission amount. The receiving compartment is strictly Emissions to air, unspecified. Use only when that compartment matches the actual study inventory; real indoor, urban, stack-height or long-term evidence requires a separately verified matching flow instead of downgrading to unspecified air. Broad synonyms mentioning ether sulfate or sulfonate do not change this CAS151-21-3 sodium sulfate-ester identity; never bind SLES, ammonium salt or total uncharacterised dust. Independently establish presence, species, state and actual outlet quantity; the UUID does not prove an emission.

- Selected flow: sodium dodecyl sulphate `fe0acd60-3ddc-11dd-a1f3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured gross raw amount for this directional physical exchange, reported once per reference flow as specified in section 8; inherited burden attribution and allocation never change physical mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_species`
- Sources: `chemithon-sulfation-1997`

###### Sulfur trioxide emitted to air (`so3_air`)

Use independently supported actual SO3 outlet species and subcompartment. SOx as SO2-equivalent, acid mist and sulfate aerosol are not automatically SO3 mass. No conversion from total sulfur/COD or closure residual establishes this species.

- Selected flow: Sulfur trioxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured gross raw amount for this directional physical exchange, reported once per reference flow as specified in section 8; inherited burden attribution and allocation never change physical mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_species`
- Sources: `chemithon-sulfation-1997`

###### Sulfur dioxide emitted to air (`so2_air`)

Only actual measured residual SO2 after control, including evidenced feed impurity contribution. Do not invent a sulfur-burner emission factor for the purchased-liquid-SO3 route or transfer laboratory reaction yield into an outlet default.

Native Elementary flow CAS7446-09-5, reference Mass index0 factor1, with no fixed geography, grade, manufacturing route, particle size or emission amount. The receiving compartment is strictly Emissions to air, unspecified. Use only when that compartment matches the actual study inventory; real indoor, urban, stack-height or long-term evidence requires a separately verified matching flow instead of downgrading to unspecified air. This is molecular SO2 mass, not SOx expressed as SO2 equivalents. Independently establish presence, species, state and actual outlet quantity; the UUID does not prove an emission.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured gross raw amount for this directional physical exchange, reported once per reference flow as specified in section 8; inherited burden attribution and allocation never change physical mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_species`
- Sources: `chemithon-sulfation-1997`

###### Sulfuric acid mist emitted to air (`acid_mist_air`)

Keep actual H2SO4 mist separate from SO3, sulfate salt aerosol and captured scrubber waste. Sampling artefacts or SO3-equivalent reporting require documented analytical conversion and uncertainty; they do not prove simultaneous independent species amounts.

Native Elementary flow CAS7664-93-9, reference Mass index0 factor1, with no fixed geography, grade, manufacturing route, particle size or emission amount. The receiving compartment is strictly Emissions to air, unspecified. Use only when that compartment matches the actual study inventory; real indoor, urban, stack-height or long-term evidence requires a separately verified matching flow instead of downgrading to unspecified air. Use independently assayed H2SO4 chemical mass within mist, not whole aqueous-droplet mass or sulfate salt; broad solution/ester synonyms establish no concentration or different chemical. Independently establish presence, species, state and actual outlet quantity; the UUID does not prove an emission.

- Selected flow: sulphuric acid `d1e249b9-59b4-45c4-b1cb-ad89a2dd167b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured gross raw amount for this directional physical exchange, reported once per reference flow as specified in section 8; inherited burden attribution and allocation never change physical mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_species`
- Sources: `chemithon-sulfation-1997`

###### n-Dodecanol emitted to air (`dodecanol_air`)

Actual unreacted alcohol escaping after vacuum/vent treatment, measured with independently verified species and outlet volume or integrated mass. Generic VOC totals do not identify C12 alcohol; recovered condensate is an internal material transfer or actual waste, not also air release.

Native Elementary flow CAS112-53-8, reference Mass index0 factor1, with no fixed geography, grade, manufacturing route, particle size or emission amount. The receiving compartment is strictly Emissions to air, unspecified. Use only when that compartment matches the actual study inventory; real indoor, urban, stack-height or long-term evidence requires a separately verified matching flow instead of downgrading to unspecified air. The CAS fixes C12 primary alcohol, not dodecane or a C8–18 mixture mentioned among broad aliases. Independently establish presence, species, state and actual outlet quantity; the UUID does not prove an emission.

- Selected flow: dodecan-1-ol `9569ddaf-0a84-4f35-9697-5a84c94b7e38`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured gross raw amount for this directional physical exchange, reported once per reference flow as specified in section 8; inherited burden attribution and allocation never change physical mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_species`
- Sources: `chemithon-sulfation-1997`

###### Water vapour emitted to air (`water_air`)

Measure the complete actual gross gaseous H2O at each external outlet after condensate separation, including uncondensed carrier humidity and process-source water vapour. Retain non-additive source subledgers for atmospheric humidity, reagent water, independently proven reaction water, actual steam leaks and other real sources. Net increment E is only a reconciliation view derived from the same gross inlet/outlet and other real water outlets/stocks; never add another copy of H2O emission for E. Gaseous H2O excludes droplets, aerosol-carried water, condensate and internal reuse; each follows its actual phase and receiver in separate atomic rows. Drying is physical transfer, not proof of reaction water; retain actual free/bound/hydration state and do not treat loss-on-drying as pure water.

Native Elementary flow CAS7732-18-5, reference Mass index0 factor1, with no fixed geography, grade, manufacturing route, particle size or emission amount. The receiving compartment is strictly Emissions to air, unspecified. Use only when that compartment matches the actual study inventory; real indoor, urban, stack-height or long-term evidence requires a separately verified matching flow instead of downgrading to unspecified air. Use normal H2O vapour only, not ice, heavy/tritiated water or bound oxygen mentioned among broad aliases; no density, hydration or reaction-water factor follows. Independently establish presence, species, state and actual outlet quantity; the UUID does not prove an emission.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured gross raw amount for this directional physical exchange, reported once per reference flow as specified in section 8; inherited burden attribution and allocation never change physical mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_species`
- Sources: `chemithon-sulfation-1997`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | sds | First subdivide by actual cohort and unit meters; retain shared-unit start-up and failed burdens. Use evidenced causal drivers such as runtime/throughput for shared services, disclosing driver, values and uncertainty; no default sales-value allocation. |  |
| allocation_recycle | sds | No co-product is presumed. Internal acid/paste/powder/condensate recycling and handover P create no extra purchase, production or credit. An actually saleable by-product requires proven quality/function and independent export plus allocation review; wastewater, sludge and salt impurities are not automatically co-products. | `chemithon-sulfation-1997` |
| asset_manufacture_conservation | existing capital/reusable manufacture attribution | Within the applicable allocation decision context, original manufacture burden attributed across uses of actual capital equipment or reusable articles already included in foreground production, packaging or observed services uses one persistent same-asset ledger across all crops, products, cohorts, manufacturing/postrelease services, owners and observation periods. D is its supported whole installed service: all realized historical service plus supported remaining service in the same units as actual beneficiary use u; D must be finite and positive. Period capacity, remaining-only capacity, the physical asset/article mass alone, or current-period product Q alone is not D; supported whole-service throughput in mass units may be used when it demonstrates the causal service and matches u. This does not amortize the manufactured reference product over downstream life or change its declared reference gate/Q. The fractions u/D and all previously assigned manufacture shares together must never exceed 1. Changes of window, custody, provider or repair never restart the original manufacture balance. Replacements have distinct identities and only their real new manufacture vectors; actual repair and treatment increments remain separately accounted. Revised capacity evidence requires transparent reconciliation of prior shares and sensitivity, not a fresh ledger. Keep full physical mass and stock movements independent of burden shares. Unknown D, prior shares or beneficiary coverage requires review and no final manufacture-attributed amount; no assumed lifetime, utilization, zero or arbitrary division is permitted. For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Each protocol has a distinct owner. Physical event m_i and inherited/attributed burden B_i are separate ledgers; never modify event mass by a burden correction. Gross custody G/R, net reference Q, air bulk/species and water source/E views have explicit non-additivity. collection_method retains raw-period numerators, stocks and carried burdens without division by Q. aggregation_rule declares only the final reporting basis; it neither performs A/Q during collection nor divides again after a card formula. Only normalize_delivery owns normalization.

### Data Collection Protocols

For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | sds | chemical and water supply | purchase charge and assay records | lot_id; supply_mass; charge_mass; water_fraction; assay; CAS; alkyl_EO_profile; grade; raw_unit; temperature; density_evidence; opening_closing_feed_stock; supplier_basis | owner=receiving and production material custodian; match invoices, calibrated weighing/tank meters, charges, supplier CoA and actual assays for the whole wet supply; retain raw mass/volume and unnormalized carried burdens, without duplicate receipt-plus-charge procurement. | kg; m3; mass fraction; degC | each lot and continuous meter records | complete actual reporting period including failed and zero-output runs | actual same site, product, route and supply state | per 1 kg reference flow | calibration, CoA, weigh tickets, stock and supplier originals |
| cp_energy | sds | electricity and steam heat | meter and utility records | meter_id; start_end; raw_electricity; gross_steam_mass; steam_grade_dryness_quality; inlet_T_P_phase_specific_enthalpy; external_condensate_return_mass_T_P_phase_specific_enthalpy_quality_receiver; opening_closing_steam_condensate_holdup; actual_leaks_flash_other_outlets_losses; supplier_water_energy_owner; start_stop; allocation_driver; warehouse_loading; each_carried_burden_vector | owner=utility metering custodian; independently measure gross steam water supplied, actual liquid condensate returned and each real loss/hold-up in native mass/state, and actual enthalpy flows separately from heat MJ. Meter every real matched branch and all electricity, abnormal/idle/rework periods; no supply-return mass/quality equality. steam_heat owns the supplier background once; physical kg cards and internal circulation create no second procurement. Retain unnormalized observations, conversions and exchange-specific history; only normalize_delivery reports unit results. | kWh; MJ; kg; h | continuous meters reconciled each period | same complete period and cohort carryover | actual manufacturing and warehouse utility scope | per 1 kg reference flow | meter calibration, enthalpy basis, supplier bills and allocation evidence |
| cp_pack | sds | drum and liner | packaging and dispatch records | article_id; composition; net_article_mass; ownership; opening_closing_empty_attached_WIP_FG_reusable_stocks; new_external_acquisition; gross_external_return_received; gross_physical_dispatch; separate_external_return_sent; waste; receiver; cleaning; each_historical_exchange_vector; supplier_inclusion | owner=packaging and logistics custodian; weigh and stocktake each drum/liner article by material and direction and close boundary_packaging. Keep raw gross physical quantities separate from attributed upstream burden vectors. Trace actual attached/empty/reusable transitions once; no collection division by Q or shrinking physical output on reuse. | kg; item | each packaging and dispatch lot | complete actual packaging, storage and delivery period | actual onsite packaging and delivery interface | per 1 kg reference flow | article bill, weighing, reuse and logistics originals |
| cp_delivery | sds | terminal powder output | quality acceptance and net delivery records | lot_id; release_P; gross_tare_net; G_actual_dispatch_state_mass; eligible_accepted_delivery_entries; R_actual_return_mass_state; original_delivery_id_mass_state; D_rev_original_accepted_quantity; repeat_handovers; actual_rework_add_remove_water; acceptance; grade; water_method; dry_wet_assay; salt; cohort; reporting_interval; dispatch_gate | owner=quality release and delivery acceptance custodian; preserve each gross physical G/R event with separately weighed composition/moisture and original accepted quantity/state D_rev. Determine eligible net Q only by delivery_mass_bridge and unique genealogy, not assumed G-R or first-release P. Record all actual rework additions/removals and identify late original-report adjustments. G/R cards are non-additive custody observations and delivered_powder is the net reporting reference; retain raw amounts without stock-burden/economic shrinkage or repeated procurement. Collect unnormalized records; only normalize_delivery reports unit results. | kg; mass fraction | each release, delivery and return | complete period and associated opening/closing cohorts | one actual net factory-delivery gate | per 1 kg reference flow | calibrated net weights, assay originals, delivery and return genealogy |
| cp_stocks | sds | raw material WIP FG and disjoint non-WIP loop charge and rework histories | stage genealogy and burden ledger | stage; lot_id; opening_closing_mass_composition_state; each_inherited_exchange_vector; raw_receipt_issue_or_already_corrected_consumption; disjoint_nonWIP_water_fluid_charge_stocks; release_P; internal_transfer; gross_dispatch_and_returns; original_delivery_reversal; actual_rework_material_water_in; actual_removed_material_effluent_species_out; failure; zero_output; loss; driver | owner=production costing and stock genealogy custodian; retain opening/closing physical stocks and each historical exchange vector by stage and separate non-WIP equipment loop, linking new raw inputs, failed runs, real rework additions/removals/water and actual outlets. Do not correct again when material consumption already uses real issues/returns/stock changes; include WIP/FG and non-WIP history released to the attributable B_i once. Link returned old deliveries to original delivery and complete history before adding real incremental rework; preserve historical normalization bases for interpretation/reversal, while this report denominator still matches declared net delivery Q. Cancel internal P; collect raw ledgers without B_i/Q. | kg; kWh; MJ; original exchange units | each lot and opening/closing reconciliation | complete period plus historical carryover genealogy | same product, route, state and real manufacturing/warehouse stages | per 1 kg reference flow | stocktakes, stage ledgers, allocation drivers and historical burden originals |
| cp_outlet | sds | air water and exported waste | physical outlet and waste records | stream_id; stage; nonadditive_bulk_wet_air_in_out_raw_aggregate; individual_gas_species_in_out; raw_mass; rate; duration; integrated_volume; temperature; pressure; humidity; composition; separate_gas_droplet_aerosol_condensate_phases; condensate_reuse; waste_destination; treatment_boundary; uncertainty | owner=site environment and waste custodian; measure each actual external phase/directional inlet/outlet independently. Retain bulk air/gas totals only as non-additive checks against independently measured species sums; no bulk air_in Resource/Emission row is added to species. Distinguish gas H2O, droplets/aerosol water, collected condensate, actual offsite waste and internal reuse. New actual phase/receiver/formulation requires its own atomic row before data use. Physical raw movements stay gross, without burden-vector corrections, allocation or collection division; no residual fits multiple unknowns. | kg; m3; h; degC; Pa | continuous/each lot outlet and waste handover | complete actual period including control start-up and failed runs | actual outlets and treatment boundary | per 1 kg reference flow | calibrated meters, waste manifests, water/composition and treatment evidence |
| cp_species | sds | actual species reaction and water | analytical species and reaction-extent records | species; CAS; actual_Resource_or_Emission_medium; N2_O2_Ar_atmospheric_CO2_H2O_each_in_out_mass; dry_wet_flow_T_P; inlet_outlet_humidity; nonadditive_atmospheric_process_H2O_source_fractions_and_E; CO2_origin_evidence_without_default; gas_liquid_droplet_aerosol_state; raw_concentration; analytical_basis; rate_duration; method; recovery; detection_limit; reaction_extent; acid_alkali_assay; free_bound_water; hydration_state; uncertainty | owner=analytical chemistry and emissions monitoring custodian; independently sample each actual inlet/outlet species and phase with matched gas flow/T/P/wet-dry bases. N2/O2/Ar/atmospheric CO2 and humidity have real Resource inputs and gross gas outlets; no fixed atmosphere fractions, equal pass-through or fossil/biogenic default. Report water_air as gross gaseous H2O with non-additive atmospheric/process origins; net E is only a check. Separately collect phase water and actual reaction extent/acid-base assays, interferences, detection limits and uncertainties. Never solve several species or reaction water from COD/one residual; retain unnormalized quantities, no physical allocation or stock-burden reduction. | kg; mol; mg/m3; m3; mass fraction | each batch and outlet monitoring representative of the complete period | same cohorts and complete period including abnormal and rework activity | actual reaction stages and post-control/fugitive outlets | per 1 kg reference flow | independent assay/species reports, volume/concentration bases, reaction evidence and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_delivery | all inventory rows | Keep TWO linked ledgers. Physical directional events retain their measured gross raw quantities m_i after unit conversion; report m_i/Q once where a unit view is needed. Do not subtract inherited burdens or apply economic allocation to physical mass. In particular G, R, steam-water supply/condensate return, each gas species and packaging directions retain actual event quantities; the G/R custody views and net reference Q are alternatives, never additive production/purchase. Separately, delivery-cohort BURDEN numerator B_i equals matched opening raw-material/WIP/FG/non-WIP inherited exchange vectors plus complete actual-period attributable exchanges minus only documented vectors retained in closing/undelivered stock or transferred to independent cohorts. Preserve failed/zero-output runs, losses, actual rework, packaging, storage/loading and original-delivery reversals; use genealogy and causal allocation once. Already stock-corrected consumption is not corrected again. No glass/powder stock scalar substitutes for every exchange vector. Divide each completed B_i/Q exactly once after conversion/attribution; it is the burden result, not a correction of physical m_i. A physical view never buys the same background again: steam_heat owns the steam supplier water/energy convention once and G/R carries existing SDS history without another procurement. Cards and aggregation only reference these same single reporting operations. Q from delivery_mass_bridge stays the declared net-delivery gate, never P or an unrelated historical Q. For Q<=0 retain raw physical/burden records without a unit result and resolve eligibility/adjustments before dataset completion. | cp_material; cp_energy; cp_pack; cp_delivery; cp_stocks; cp_outlet; cp_species | Exchange amount per 1 kg reference flow |  |
| delivery_mass_bridge | delivered_powder; gross_physical_dispatch; physical_return | From original accepted delivery/return genealogy, Q is the sum of eligible accepted delivery entries at their actually weighed declared reference state minus D_rev, the sum of original accepted-entry quantities reversed. G is all physical dispatch; R is the actual physical returned quantity at its current mass/composition/moisture. D_rev uses the ORIGINAL accepted quantity/state and is not inferred from R. Q=G-D_rev is permitted only where all G has matching acceptance/reference state, cohort, reporting interval and unique-event evidence. G-R is not a net-delivery shortcut when moisture, composition, screening/rework or timing changed. Reconcile each measured addition/removal and distinct original versus returned state; no assumed isomass. Reshipments count only as actual eligible events after original reversal, never as new production or duplicated final supply; late old-cohort returns update the original report or an explicit separate adjustment. delivered_powder=1kg is the net reference view, while G/Q and R/Q are non-additive custody observations, not a third powder output or another supplier purchase. Preserve actual first release P internally and retained/failed/zero-Q burdens; no unmeasured bridge term is zero. | cp_delivery; cp_stocks; cp_species | Measured G/R and original-state reversals linked to net Q |  |
| raw_conversions | all inventory rows | Use calibrated mass or actual volume times independent substance-specific density with composition/temperature/pressure and phase bases retained. Rate integrates only over its true measured interval; integrated gas/liquid volume receives no second time multiplier. Gas species use measured concentration/composition and matched dry/wet gas quantity; do not substitute bulk-air volume for water volume or fix atmospheric fractions. For the declared steam boundary use actual entering enthalpy flow minus independently measured returning/exported enthalpy flows and the actual stock/other-outlet terms under the supplier convention; do not assume equal steam/condensate mass or quality and do not apply one return enthalpy to all supplied steam. Retain line losses and actual leakage destinations; utility-water kg and heat MJ reconcile separately. kWh and MJ remain explicit. | cp_material; cp_energy; cp_outlet; cp_species | Converted raw numerators before normalization |  |
| constituent_ledger | dodecanol; so3; naoh_solution; delivered_powder; wastewater | Each constituent mass equals whole actual supply/outlet mass times independently assayed mass fraction on a compatible basis. Converting dry assay to as-supplied needs actual same-lot water; loss-on-drying is not automatically water. Active titration equivalents, C12 profile and EO are distinct. Count a purchased formulation/solution once; constituent/carrier-water subledgers never duplicate procurement. Onsite blending instead records actual separately acquired constituents and real blending energy/loss. | cp_material; cp_delivery; cp_species | Non-additive constituent/carrier-water subledgers | `thermo-sds-a11183-2026` |
| mass_elements_water | all inventory rows | Use ACTUAL G and R in physical manufacture/FG and consolidated gates, not Q as a substitute for gross movement. External physical inputs including steam-water and each ambient species + opening disjoint raw/WIP/FG/non-WIP stocks = G + external condensate return + every actual gas/liquid/solid outlet + closing stocks + other independently identified outward transfers; cancel P and internal recirculation. R is an external physical input at its measured return state; original delivery reversal D_rev belongs to the reporting bridge, not an extra physical outlet. Q is a non-additive net reference view. Reconcile complete mass and C/H/O/Na/S, plus relevant N/Ar and every actual species, independently. Bulk wet-air/gas observations are non-additive checks against species sums, never extra Resource/Emission alongside contained species. Gaseous H2O includes all uncondensed carrier and process-source water; source fractions and net increment E are non-additive subledgers, not more H2O outputs. Droplets, condensate, aerosol-carried water and other real phases have separate atomic receiver-specific flows. Independently distinguish reagent/carrier water, incoming humidity, steam water/leaks, free/bound/structural water, reaction extent and actual water outlets. One residual cannot solve several unknown species or water terms. Close steam and other non-WIP loops with actual hold-up/losses; physical steam kg is not MJ. Preserve the complete per-article packaging equation and all gross directions; neither burden allocation nor stock-vector attribution shrinks physical events. | cp_material; cp_delivery; cp_stocks; cp_outlet; cp_species | Independent physical, element and stage-water balances |  |
| reaction_species | sds | Stoichiometric checks only: C12H25OH+SO3→C12H25OSO3H forms no net water; C12H25OSO3H+NaOH→C12H25OSO3Na+H2O. Actual reaction water needs independent acid-base assay, reaction extent and side-reaction evidence, never complete conversion presumed from delivered powder kg. Actual SO3 hydration, free-sulfuric-acid neutralization and organosulfate hydrolysis need separately supported extents and water consumption/formation. Never import water/HCl from sulfuric-acid/oleum or chlorosulfonic routes. Outlet species require independent concentration/volume/medium evidence; COD, total sulfur and closure residuals neither identify species nor fit unknown reaction water and another unknown outlet together. | cp_material; cp_species; cp_outlet | Independent reaction-extent and actual species/reaction-water records | `chemithon-sulfation-1997` |
| asset_manufacture_share | existing capital/reusable manufacture attribution | For each included original asset manufacture vector B, f_current = u_current / D only after the persistent ledger verifies the supported whole installed-service denominator, all beneficiaries and prior assigned shares. Attribute f_current * B once to the actual beneficiary before the existing single reference normalization. Check prior_shares + all current/new beneficiary shares <= 1; carry the remaining original balance. Capacity revisions reconcile the historical ledger. Full physical asset/packaging mass and actual gross stocks/returns never receive f_current. Unknown D or history leaves the final attributed result unavailable, without suppressing actual repair/replacement/service burdens. | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | conserved attributed manufacture vector |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_quality | reference and inputs | Independently verify C12/EO/sodium/form/grade/route; distinguish whole supply from active/water/salt subledgers. All native name, comment, geography, medium and property limits apply; classification labels or similar names do not replace chemical identity. | `thermo-sds-a11183-2026` |
| cohort_quality | all inventory rows | Trace complete actual periods/cohorts, failed zero-output runs, rework and historical stock burdens; separate release P from actual net delivery Q. Never delete actually included storage, packaging and loading burdens. | cp_stocks; cp_delivery; cp_energy; cp_pack |
| species_quality | water and outlets | Independently calibrate mass/volume, assay and species analysis; retain detection limits, wet/dry gas, temperature/pressure and uncertainty. Physical/element balances and reaction-water evidence stand separately; no residual or COD fitting. | cp_outlet; cp_species |
| transferability | dataset | Thermo specifies no manufacturing route; Chemithon1997 is equipment technical guidance covering broad alcohol/ether sulfates and other chemical routes, not this product’s factory inventory. Adopt applicable unit principles only; no example recipe, conditions, yield, heat/electricity, moisture or active level becomes a general default. | `chemithon-sulfation-1997`; `thermo-sds-a11183-2026` |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | delivered_powder | Reference must select one unique terminal Product row with the same UUID and physical row in both languages; never rename/hide intermediate acid/paste or a real co-product to evade checks. The package must substantiate every reference qualifier and actual route; SLES/other chain distributions/salts/supply concentrations are not interchangeable. | `thermo-sds-a11183-2026` |
| validate_gate | all inventory rows | Check Q from actual accepted reference-state delivery entries and original D_rev with complete event/custody genealogy. Independently verify G and R physical masses and rework/moisture changes; never equate R to D_rev without matching-state evidence or substitute net Q for G in a physical balance. P is internal, undelivered FG not Q, and G/R custody views add no production or procurement to the net reference. Normalize physical event quantities and separately attributed burden vectors once only; Q<=0 retains raw records without a unit result. |  |
| validate_balance | all inventory rows | Validate actual steam input and external condensate output in Mass with T/P/phase/quality/enthalpy and independently measured stocks/losses; one supplier burden owner prevents double steam-water/heat background. Require separate actual Resource air-species inputs and gross gaseous species outputs with true compartments; bulk air, source-water fractions and net E are non-additive views. Never use an Emission as Resource or assume atmospheric CO2 fossil/biogenic origin. Independently close all physical/species/element/phase-water gates using G/R and actual additions/outlets, not Q. No duplicate whole supply and constituents; no extra time for integrated volume; no COD or shared residual fitting of multiple species/reaction-water unknowns. |  |
| validate_completeness | dataset | Each row requires raw evidence, protocol owner, actual quantity basis and compatible flow/property/medium. Disclose unmatched auxiliary UUIDs/backgrounds without invented defaults or deleted real burdens. Format validation does not establish scientific methodology approval. |  |
| validate_asset_manufacture_conservation | existing capital/reusable manufacture attribution | For every included capital/reusable manufacture attribution verify same-asset continuity, whole installed service in matched units, all historical/current beneficiaries, prior assigned manufacture shares and cumulative share <= 1. Reject a reset by period, cohort, provider, owner or repair. Check distinct real replacement and incremental repair/treatment vectors separately and preserve gross physical mass. A missing denominator, unexplained previous allocation or incomplete beneficiary ledger requires explicit review and an unavailable final attributed amount; structural inspection cannot claim empirical completeness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Manufacturing and net-delivery background for the actual C12 SDS powder grade |
| allowed_use | Compatible C12/non-EO/sodium/powder grade and supply basis; actual delivered kg with evidenced constituent conversion |
| excluded_use | SLES, mixed-chain SLS, other salts/concentration supplies, washing performance, whole downstream formulations or unverified vendor route |
| required_metadata | Actual product/grade, all qualifiers, period/site, route, delivery gate, Q/P, carried stock burdens, supply chain and all actual auxiliaries |
| required_quality_disclosure | Assay basis/uncertainty, failure/rework completeness, species/reaction-water evidence, UUID/provider limits, unresolved data/cut-offs and shared-service allocation |
| update_trigger | Changed alkyl/EO/salt/moisture/grade/route/drying/delivery gate/packaging/background or new primary evidence |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| chemithon-sulfation-1997 | literature | Norman C. Foster, Chemithon, Sulfonation and Sulfation Processes (1997), printed pp2,6,17,26–27,32–33; https://www.chemithon.com/Resources/pdfs/Technical_papers/Sulfo%20and%20Sulfa%201.pdf ; retrieved2026-10-16 | Figures18/29 identify carrier-air and steam/condensate physical interfaces, not measured air composition, steam grade, return amount or a supplier credit. Unit principles for C12 sulfation diagram, liquid-SO3 supply, acid/NaOH neutralization, drying and formulation boundary. Historical equipment guidance also covers other chemistries/ether sulfates; no recipe, conditions, active/moisture, yield or energy example is a general default. Reaction-water stoichiometry is derived for the shown acid reacting with NaOH; actual quantity still requires independent evidence. |
| thermo-sds-a11183-2026 | literature | Thermo Scientific, Sodium n-dodecyl sulfate A11183.18 Product Specification, print2026-10-16; https://assets.thermofisher.com/chem-specs-pdf/retrievePdf?countryCode=cn&erp_type=CN_E1_LCD&rootSku=A11183&sku=A11183.18 ; retrieved2026-10-16 | CAS151-21-3 and C12 powder market form; dry assay and regional moisture-method distinction. Heading99% versus supplier-CofA minimum98.5% dry basis; US loss-on-drying≤2.0% and non-US Karl Fischer water<2.0% have separate applicability. Amendable specification proves no route, production origin, actual lot assay or pure-water loss; no general threshold. |
