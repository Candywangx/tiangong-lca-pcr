---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.anhydrous-methylamine-methanol-ammonolysis
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Anhydrous monomethylamine by catalytic methanol ammonolysis

## 1. Scope and Applicability

This method covers industrial anhydrous monomethylamine (methylamine, MMA, CAS74-89-5) as a pressurized liquefied product for chemical synthesis, made by catalytic methanol ammonolysis followed by separation, final conditioning, storage and bulk loading. Actual liquid ammonia is received and vaporized; the selected catalyst family is silica-doped alumina. BASF demonstrates the commercial reaction and MMA/DMA/TMA recycle; Eastman demonstrates the actual anhydrous market form. The method defines LCA records, boundaries and checks, not operating instructions or an assumed production recipe. [basf-methylamines; eastman-mma-product]

Scope excludes aqueous/organic-solvent MMA solutions, methylamine salts, dimethylamine or trimethylamine as the reference product, aniline, amino acids, heterocycles, resins and formulated downstream products. CPC34150 excludes lysine and its esters/salts and glutamic acid/salts; heterocyclic compounds belong to the separately named CPC34160 boundary. Methylamine is an acyclic monoamine, independently supported by HS292111; classification alone never proves flow compatibility. Only this narrower MMA product/route subset is addressed. [un-cpc3-2025; un-hs-methylamines]

The foreground receives external methanol, liquid ammonia and utilities and includes gas-phase catalytic synthesis, amine/water separation, actual recycles, recovery, conditioning and loading. It selects externally supplied electricity/steam, indirect heat exchange, closed-loop cooling, water-based noncombustion recovery when present, and offsite waste treatment. Onsite upstream methanol/ammonia manufacture, boilers, combustion abatement, reactive-acid scrubbing, catalyst regeneration, solvent-based alternate separation, alternate synthetic routes and container manufacture require separately described linked processes; their actual burdens cannot disappear by using this method. No specific pressure, temperature, purity, yield, catalyst loading, product ratio, heat demand or emission factor is prescribed. [epa-amination-1979; basf-methylamines]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.anhydrous-methylamine-methanol-ammonolysis |
| classification_refs | CPC 3.0 34150; narrower product and route boundary |
| covered_products | Customer-accepted anhydrous free-base monomethylamine, full commercial grade mass, supplied as liquefied gas under pressure |
| excluded_products | Named CPC lysine/glutamic-acid exclusions; heterocycles; MMA solutions/salts; reference DMA/TMA; downstream formulations; alternate routes |
| representative_product | Actual industrial anhydrous MMA grade used as a chemical synthesis intermediate |
| production_route | Methanol and liquid-ammonia supply; vaporisation; silica-alumina catalytic ammonolysis; actual amine/water distillation and recycle; conditioning and loading |
| market_state | Full net anhydrous commercial product at its declared first-acceptance gate, actual liquid/vapour state and pressure/temperature; included subsequent bulk-loading services remain with its original cohort; tanker/container tare excluded |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Anhydrous monomethylamine intermediate at the declared plant first-acceptance gate, with included later factory-supply services attributed to its original cohort |
| How much | 1 kg full accepted supplied product |
| How well | Actual anhydrous free-base grade, customer acceptance and measured MMA/water/ammonia/DMA/TMA/methanol/other-impurity profile; no generic assay threshold |
| How long or cycle | Declared representative production cohort and accounting period, including startup, shutdown and stock/service reconciliation |
| reference_flow_link | finished_mma |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Methylamine `d73cc0da-c78b-4ec2-8924-b391edb05a06` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | CAS and actual SKU; free-base anhydrous state; complete composition and analytical recovery; full supplied net mass; actual temperature/pressure and liquid/vapour split; synthesis/catalyst route; site/period/cohort; stock and unique first acceptance; actual supply/treatment providers and quantity bases; recycle/coproduct destinations; allocation; remaining services and uncertainty |

Declare all qualifiers in the dataset metadata or equivalent fields. The broader native product includes anhydrous pressurized material and solution alternatives; this PCR selects the former and preserves whole commercial mass. Trace water and impurities are included in supplied mass and analyzed separately. The supplier specification identifies relevant analytes and methods, but does not impose one supplier's numerical limits on every eligible dataset. [eastman-mma-product; eastman-mma-spec]

The declared reference gate is the actual first-acceptance gate for the full anhydrous commercial grade. Its event mass is locked once. Eligible closing FG meets that same acceptance gate; packaging/storage/loading services still outstanding within the declared factory-supply boundary are explicitly accrued or later attributed to the original cohort and original Q. The acceptance-event ledger is separate from actual physical dispatch/stock/loss ledgers. Do not add locked Q again as an external physical product on top of dispatch, closing stock and post-gate exits. Where post-gate material handling is a separate process/state, retain real paired transfers and actual losses; internal acceptance is not a second external output.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `mass_reference` | finished_mma | Mass | kg | Calibrated mass-flow or net weighing, same grade/cohort and actual state; exclude tare. All stage rows normalize to the same full-product reference kg using cp_reference and cp_stocks. |
| `whole_and_species` | material, waste and physical ledgers | Mass | kg | Measured whole-stream mass times same-lot mass fraction gives component mass. Preserve water, counterions, stabilizers and unknown fractions. Never exchange a whole preparation and its contained species twice. |
| `gas_basis` | gaseous meters and providers | Mass | kg | Convert gas volume only with actual absolute pressure, temperature, wet/dry composition, compressibility and provider reference definition. Do not use product-datasheet density charts without their state, basis and independent verification. |
| `heat_basis` | steam and condensate | Mass and useful heat | kg; MJ | Record physical steam/condensate mass and states; useful heat uses the actual supply-return enthalpy difference and consistent provider convention. Avoid double-purchasing steam mass and its heat. |
| `nitrogen_analytics` | cp_waste; cp_air | Mass | kg | Preserve molecular species versus as-N analytical bases and overlap of ammonia-N, organic-N, TKN and total-N. TKN may underrecover industrial amines; neither it nor COD identifies the entire molecular mixture. [epa-tkn-1993] |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | External methanol/liquid ammonia/catalyst at receiving gate, complete compatible upstream supply; purchased utilities |
| starting_condition_role | Foreground unit receiving gate, upstream supplies represented by linked backgrounds |
| product_classification_scope | Anhydrous acyclic monomethylamine by the declared route only |
| recursive_input_rule | Internal amine recycle remains a measured equal-ended physical link; purchased MMA, external recovered amines or other products require their own supply identity and inherited burdens, never zero-burden recursion |
| upstream_dataset_requirement | Match feed production route/composition, utility state/quantity, catalyst formulation and actual transport/treatment. Missing provider support remains incomplete linkage |
| disclosure | Sites, stage gates, route/catalyst, period/cohort, physical balances and stock vectors, coproduct/recycle destination, water/heat conventions, treatment links and allocation |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_stages` | all stages | Cover receipt/preparation, reaction, separation/recycle, conditioning, storage/loading and actual recovery. Include startup/shutdown and losses, without applying historical process temperatures or yields as requirements. | epa-amination-1979; basf-methylamines |
| `boundary_links` | all supplies and transfers | Preserve full physical quantities, composition and stock change at every stage link. Cancel paired internal exchanges only during aggregation; do not cancel their inherited supply burdens or external losses. | epa-amination-1979 |
| `boundary_treatment` | waste and emissions | Collected streams carry full mass/composition to compatible transport/treatment; actual uncollected final environmental releases stay elementary exchanges. Include any extra actual process and atomic exchange before claiming complete coverage. | epa-amination-1979 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| synthesis | Feed preparation and catalytic synthesis | required | Declared methanol/liquid-ammonia route | Physical conversion stage | crude_out |
| separation | Amine/water separation and recovery | required | Actual separation and recycle train | Physical separation and joint-product stage | mma_cut_out |
| finishing | Conditioning, acceptance, storage and loading | required | Anhydrous product gate | Final product and service stage | finished_mma |

Receipt/vaporisation → synthesis → crude mixture → ammonia/amine/water separation → anhydrous MMA cut → conditioning/acceptance/storage/loading. Retain actual branch flows to DMA/TMA products or recycle. EPA Figures2.1/2.2 show alternative historical trains, not a required column count or plant recipe. Reactor and column subledgers retain actual species and thermal circuits. Only finished_mma is the final PCR reference output. [epa-amination-1979; basf-methylamines]

### Process: Feed preparation and synthesis (`synthesis`)

#### Inputs

##### Product flows

###### External methanol feed (`methanol_feed`)

Whole received liquid and measured water/impurities; distinguish net external supply from recovered internal methanol. Match the actual upstream production route; a fossil market-average flow cannot stand for renewable methanol.

- Selected flow: Industrial methanol liquid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / unique first-accepted full-product Q; use cp_material, cp_reference and cp_stocks. Conditional absence requires documented not_applicable; never assume a zero amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_material
- Sources: epa-amination-1979

###### External liquid ammonia (`ammonia_feed`)

Record anhydrous liquid supply, actual composition, receiving temperature/pressure and vaporisation duty. Recycled ammonia-rich mixture is a separate internal stream. This identity is not ammonia-N or aqueous ammonia.

- Selected flow: Liquid ammonia `4a4c19b6-a44c-4b9a-ae10-f4d15d07c9cd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / unique first-accepted full-product Q; use cp_material, cp_reference and cp_stocks. Conditional absence requires documented not_applicable; never assume a zero amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_material
- Sources: epa-amination-1979

###### Silica-alumina catalyst formulation (`catalyst_charge`)

Actual commercial catalyst SKU including support, additives and retained moisture; lifetime-charge records determine the attributable amount. Neither pure alumina nor a coal-to-olefin spent catalyst represents the whole purchased catalyst. No loading or lifetime default.

- Selected flow: Silica-doped alumina methylamine catalyst formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / unique first-accepted full-product Q; use cp_material, cp_reference and cp_stocks. Conditional absence requires documented not_applicable; never assume a zero amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_material
- Sources: basf-methylamines

###### Ammonia-rich amine recycle returned (`recycle_in`)

Same physical stream as recycle_out, including actual ammonia, mono/di/trimethylamine, methanol and water fractions. Preserve equal transfer mass and composition. Recycled reacting amines are not inert dilution or zero-burden new feed.

- Selected flow: Ammonia-rich methylamine recycle mixture
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / unique first-accepted full-product Q; use cp_links, cp_reference and cp_stocks. Conditional absence requires documented not_applicable; never assume a zero amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_links
- Sources: basf-methylamines; epa-amination-1979

###### Reaction-stage electricity (`electricity_reaction`)

Submeter feed transfer, vaporisation auxiliaries, pumps and control equipment; declare supply voltage, grid/contract, geography and losses.

- Selected flow: Electrical energy supplied to the synthesis stage
- Flow property / unit: Electrical energy / MJ
- Amount rule: Measured attributable exchange total / unique first-accepted full-product Q; use cp_utility, cp_reference and cp_stocks. Conditional absence requires documented not_applicable; never assume a zero amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_utility
- Sources: epa-amination-1979

###### Feed-preparation steam (`steam_reaction`)

Meter delivered steam mass with temperature, pressure, dryness and condensate-return state; distinguish indirect heating from direct material input. Internal reaction-heat recovery is not a new purchased steam input.

- Selected flow: Purchased feed-preparation steam
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / unique first-accepted full-product Q; use cp_utility, cp_reference and cp_stocks. Conditional absence requires documented not_applicable; never assume a zero amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_utility
- Sources: epa-amination-1979

###### Heat-transfer fluid makeup (`thermal_fluid`)

Conditional on this actual heat-transfer circuit. Record full supplied preparation, ratio and other constituents; meter makeup and stock change rather than counting circulation repeatedly. A different fluid requires its own atomic row.

- Selected flow: Biphenyl-diphenyl ether heat-transfer fluid preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / unique first-accepted full-product Q; use cp_material, cp_reference and cp_stocks. Conditional absence requires documented not_applicable; never assume a zero amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_material
- Sources: epa-amination-1979

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Crude methylamine reaction mixture transferred (`crude_out`)

Equal-ended link to crude_in, using complete stream mass and measured composition including reaction water and noncondensable gases. Carry constituent and inherited exchange ledgers with the transfer.

- Selected flow: Crude methylamines-ammonia-methanol-water mixture
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / unique first-accepted full-product Q; use cp_links, cp_reference and cp_stocks. Conditional absence requires documented not_applicable; never assume a zero amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_links
- Sources: epa-amination-1979

##### Waste flows

###### Spent silica-alumina catalyst (`spent_catalyst`)

Weigh actual removed wet formulation, contamination and destination; include replacement and offsite regeneration/treatment through compatible backgrounds. No zero burden from calling it recyclable.

- Selected flow: Spent silica-alumina methylamine catalyst
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / unique first-accepted full-product Q; use cp_waste, cp_reference and cp_stocks. Conditional absence requires documented not_applicable; never assume a zero amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_waste
- Sources: basf-methylamines

###### Spent heat-transfer fluid (`spent_thermal_fluid`)

Only when the corresponding actual circuit is present; characterize full transfer and treatment. A leak to environment is an actual species release, not this collected waste.

- Selected flow: Spent biphenyl-diphenyl ether heat-transfer fluid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / unique first-accepted full-product Q; use cp_waste, cp_reference and cp_stocks. Conditional absence requires documented not_applicable; never assume a zero amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_waste
- Sources: epa-amination-1979

##### Elementary flows

### Process: Separation and recovery (`separation`)

#### Inputs

##### Product flows

###### Crude reaction mixture received (`crude_in`)

Receive the identical mass, composition and burden vector of crude_out; do not buy this internal link again as an external background.

- Selected flow: Crude methylamines-ammonia-methanol-water mixture
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / unique first-accepted full-product Q; use cp_links, cp_reference and cp_stocks. Conditional absence requires documented not_applicable; never assume a zero amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_links
- Sources: epa-amination-1979

###### Separation electricity (`electricity_separation`)

Meter compression, distillation auxiliaries, vacuum, pumps and noncombustion recovery equipment separately from synthesis and final handling.

- Selected flow: Electrical energy supplied to the separation stage
- Flow property / unit: Electrical energy / MJ
- Amount rule: Measured attributable exchange total / unique first-accepted full-product Q; use cp_utility, cp_reference and cp_stocks. Conditional absence requires documented not_applicable; never assume a zero amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_utility
- Sources: epa-amination-1979

###### Distillation steam (`steam_separation`)

Record gross supplied steam and return condensate separately; derive useful heat only from actual compatible supply/return states. Do not add heat and steam as two purchases for one service.

- Selected flow: Purchased distillation steam
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / unique first-accepted full-product Q; use cp_utility, cp_reference and cp_stocks. Conditional absence requires documented not_applicable; never assume a zero amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_utility
- Sources: epa-amination-1979

###### Extractive-distillation and wash water (`water_separation`)

Actual deionised water grade only; measure new external process/wash/scrubbing water. Reaction water and returned internal condensate are not new water supply.

- Selected flow: Water, deionised, at plant `84f17134-bde4-4f48-8d8c-7cabf6ea8c63`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / unique first-accepted full-product Q; use cp_utility, cp_reference and cp_stocks. Conditional absence requires documented not_applicable; never assume a zero amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_utility
- Sources: epa-amination-1979

###### Closed-loop cooling makeup (`cooling_separation`)

Meter net external makeup; reconcile evaporation, blowdown and stock. Internal circulation is not repeated consumption; disclose water provider and cooling boundary.

- Selected flow: Cooling water `df413bba-3c03-412b-a80a-c6082b6b9b33`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / unique first-accepted full-product Q; use cp_utility, cp_reference and cp_stocks. Conditional absence requires documented not_applicable; never assume a zero amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_utility
- Sources: epa-amination-1979

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Purified monomethylamine transferred (`mma_cut_out`)

Equal-ended link to mma_cut_in; record full anhydrous product cut, assay, temperature/pressure and inherited exchange vectors. This intermediate is not another accepted final reference output.

- Selected flow: Methylamine `d73cc0da-c78b-4ec2-8924-b391edb05a06`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / unique first-accepted full-product Q; use cp_links, cp_reference and cp_stocks. Conditional absence requires documented not_applicable; never assume a zero amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_links
- Sources: eastman-mma-spec; epa-amination-1979

###### Saleable dimethylamine coproduct (`dma_coproduct`)

CAS124-40-3; only net saleable export after recycle and stock reconciliation. Full commercial grade mass and assay, separately from aqueous grades and monomethylamine. If completely recycled, no external coproduct exists.

- Selected flow: Anhydrous dimethylamine
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / unique first-accepted full-product Q; use cp_material, cp_reference and cp_stocks. Conditional absence requires documented not_applicable; never assume a zero amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_material
- Sources: basf-methylamines; epa-amination-1979

###### Saleable trimethylamine coproduct (`tma_coproduct`)

CAS75-50-3; distinguish actual net product export from recycled ammonia-rich azeotrope. Preserve whole grade mass and impurity/water profile; do not substitute triethylamine.

- Selected flow: Anhydrous trimethylamine
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / unique first-accepted full-product Q; use cp_material, cp_reference and cp_stocks. Conditional absence requires documented not_applicable; never assume a zero amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_material
- Sources: basf-methylamines; epa-amination-1979

###### Ammonia-rich amine recycle recovered (`recycle_out`)

Return to recycle_in with measured stream composition, not an assumed pure-ammonia quantity. Each amine may react further; chemical species need not individually balance across the reactor although elements must.

- Selected flow: Ammonia-rich methylamine recycle mixture
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / unique first-accepted full-product Q; use cp_links, cp_reference and cp_stocks. Conditional absence requires documented not_applicable; never assume a zero amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_links
- Sources: basf-methylamines; epa-amination-1979

###### Clean utility condensate returned (`condensate_return`)

Only uncontaminated indirect-heating condensate crossing the declared supply boundary; specify state and provider heat convention. Contaminated process condensate belongs to wastewater.

- Selected flow: Clean steam condensate returned to utility supplier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / unique first-accepted full-product Q; use cp_utility, cp_reference and cp_stocks. Conditional absence requires documented not_applicable; never assume a zero amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_utility
- Sources: epa-amination-1979

##### Waste flows

###### Aqueous amine distillation and wash bleed (`separation_wastewater`)

Full collected stream, water and individually measured mono/di/trimethylamine, ammonia, methanol and other components; COD and as-N indicators remain analyses. Record recipient, transport and treatment; never replace full wastewater with nitrogen kg.

- Selected flow: Aqueous methylamine-process wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / unique first-accepted full-product Q; use cp_waste, cp_reference and cp_stocks. Conditional absence requires documented not_applicable; never assume a zero amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_waste
- Sources: epa-amination-1979

###### Organic distillation residue (`heavy_bottoms`)

Characterize one physically segregated wet residue, stock-adjusted transfer mass and actual receiving treatment; unidentified nitrogen is a stated gap, not automatically one named amine.

- Selected flow: Methylamine distillation heavy residue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / unique first-accepted full-product Q; use cp_waste, cp_reference and cp_stocks. Conditional absence requires documented not_applicable; never assume a zero amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_waste
- Sources: epa-amination-1979


###### Cooling-loop blowdown (`cooling_blowdown`)

One actual cooling-water blowdown stream, with treatment chemicals and contamination measured as constituents; link its full wet mass to actual offsite treatment. Distinguish it from process distillation wastewater and clean condensate.

- Selected flow: Cooling-water blowdown wastewater
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable whole-stream mass / unique accepted full-product Q; use cp_waste, cp_reference and cp_stocks.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_waste
- Sources: epa-amination-1979

###### Collected purge gas to offsite treatment (`purge_wastegas`)

Full captured gas mixture to a named offsite recipient, with composition, mass and recipient treatment. Final uncollected outdoor releases are elementary exchanges; captured gas cannot be counted twice as an emission.

- Selected flow: Collected methylamine-process purge gas mixture
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / unique first-accepted full-product Q; use cp_waste, cp_reference and cp_stocks. Conditional absence requires documented not_applicable; never assume a zero amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_waste
- Sources: epa-amination-1979

##### Elementary flows


###### Water evaporation to outdoor air (`water_air`)

Record actual cooling-loop and other aqueous evaporative losses as water mass; distinguish evaporation from water retained in product, collected condensate, wastewater and captured droplets. Conditional absence needs water-balance evidence.

- Selected flow: Water vapour to outdoor air, unspecified
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable evaporated water mass / unique accepted full-product Q; use cp_utility, cp_reference and cp_stocks.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_utility
- Sources: epa-amination-1979

###### Methylamine release to outdoor air (`mma_air`)

CAS74-89-5; measured species mass at final control outlets and fugitive points of synthesis/separation. Keep capture and atmospheric release distinct; no historical emission-factor default. Record absent status only with measured route coverage.

- Selected flow: Methylamine to outdoor air, unspecified
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / unique first-accepted full-product Q; use cp_air, cp_reference and cp_stocks. Conditional absence requires documented not_applicable; never assume a zero amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: epa-amination-1979

###### Dimethylamine release to outdoor air (`dma_air`)

CAS124-40-3; measured species mass at final control outlets and fugitive points of synthesis/separation. Keep capture and atmospheric release distinct; no historical emission-factor default. Record absent status only with measured route coverage.

- Selected flow: Dimethylamine to outdoor air, unspecified
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / unique first-accepted full-product Q; use cp_air, cp_reference and cp_stocks. Conditional absence requires documented not_applicable; never assume a zero amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: epa-amination-1979

###### Trimethylamine release to outdoor air (`tma_air`)

CAS75-50-3; measured species mass at final control outlets and fugitive points of synthesis/separation. Keep capture and atmospheric release distinct; no historical emission-factor default. Record absent status only with measured route coverage.

- Selected flow: Trimethylamine to outdoor air, unspecified
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / unique first-accepted full-product Q; use cp_air, cp_reference and cp_stocks. Conditional absence requires documented not_applicable; never assume a zero amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: epa-amination-1979

###### Ammonia release to outdoor air (`ammonia_air`)

CAS7664-41-7; measured species mass at final control outlets and fugitive points of synthesis/separation. Keep capture and atmospheric release distinct; no historical emission-factor default. Record absent status only with measured route coverage.

- Selected flow: Ammonia to outdoor air, unspecified
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / unique first-accepted full-product Q; use cp_air, cp_reference and cp_stocks. Conditional absence requires documented not_applicable; never assume a zero amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: epa-amination-1979

###### Methanol release to outdoor air (`methanol_air`)

CAS67-56-1; measured species mass at final control outlets and fugitive points of synthesis/separation. Keep capture and atmospheric release distinct; no historical emission-factor default. Record absent status only with measured route coverage.

- Selected flow: Methanol to outdoor air, unspecified
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / unique first-accepted full-product Q; use cp_air, cp_reference and cp_stocks. Conditional absence requires documented not_applicable; never assume a zero amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: epa-amination-1979

### Process: Final conditioning and loading (`finishing`)

#### Inputs

##### Product flows

###### Purified monomethylamine received (`mma_cut_in`)

Identical to mma_cut_out; retain mass, assay, liquid/vapour split, actual pressure/temperature and existing burdens. Off-spec return loops do not create a new product acceptance.

- Selected flow: Methylamine `d73cc0da-c78b-4ec2-8924-b391edb05a06`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / unique first-accepted full-product Q; use cp_links, cp_reference and cp_stocks. Conditional absence requires documented not_applicable; never assume a zero amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_links
- Sources: eastman-mma-product; eastman-mma-spec

###### Final conditioning and loading electricity (`electricity_finish`)

Meter actual compression/refrigeration, storage and loading duties; quantify refrigerant leakage separately if present. Reused containers are not net product mass.

- Selected flow: Electrical energy supplied to methylamine conditioning and loading
- Flow property / unit: Electrical energy / MJ
- Amount rule: Measured attributable exchange total / unique first-accepted full-product Q; use cp_utility, cp_reference and cp_stocks. Conditional absence requires documented not_applicable; never assume a zero amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_utility
- Sources: eastman-mma-product

###### Nitrogen blanketing makeup (`nitrogen_blanketing`)

Only where actually used; record supplied gas mass, purity, stock and purge destination. It is molecular N2, not ammonia or fertilizer nitrogen. A documented closed system without nitrogen is not_applicable.

- Selected flow: nitrogen `4f19ca0f-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / unique first-accepted full-product Q; use cp_material, cp_reference and cp_stocks. Conditional absence requires documented not_applicable; never assume a zero amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_material
- Sources: eastman-mma-product

###### Compressor lubricating oil makeup (`compressor_oil`)

Conditional on lubricated equipment; actual whole SKU, oil type, additives, fill/removal and lifetime allocation, not generic petroleum mass or circulating charge each period.

- Selected flow: Compressor lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / unique first-accepted full-product Q; use cp_material, cp_reference and cp_stocks. Conditional absence requires documented not_applicable; never assume a zero amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_material
- Sources: eastman-mma-product

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted anhydrous monomethylamine (`finished_mma`)

One declared reference output is 1 kg full anhydrous commercial grade at its actual first-acceptance gate, excluding tanker/container tare. Closing accepted FG meets that same gate. Included later packaging/storage/loading services and losses remain with that original event cohort and Q. Record actual post-gate transfer ends, final dispatch, stocks and losses in the physical ledger; do not add the acceptance event as another external material output.

- Selected flow: Methylamine `d73cc0da-c78b-4ec2-8924-b391edb05a06`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_reference
- Sources: eastman-mma-product; eastman-mma-spec

##### Waste flows

###### Loading and cleaning wastewater (`loading_wastewater`)

Keep separately collected loading/cleaning stream and its actual composition, water, mass and offsite recipient; do not merge by label with separation wastewater unless physically combined before one measured gate.

- Selected flow: Methylamine-contaminated loading wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / unique first-accepted full-product Q; use cp_waste, cp_reference and cp_stocks. Conditional absence requires documented not_applicable; never assume a zero amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_waste
- Sources: eastman-mma-product

###### Spent compressor oil (`spent_oil`)

Record actual removed oil and contaminants, storage change and recipient; treatment burdens remain linked.

- Selected flow: Spent compressor lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / unique first-accepted full-product Q; use cp_waste, cp_reference and cp_stocks. Conditional absence requires documented not_applicable; never assume a zero amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_waste
- Sources: eastman-mma-product

##### Elementary flows

###### Methylamine handling release to outdoor air (`loading_mma_air`)

CAS74-89-5; meter/model species-specific residual storage/loading loss using validated evidence; distinguish captured vapour returned to stock from final ambient release. Do not use nitrogen analytical kg as methylamine mass.

- Selected flow: Methylamine to outdoor air, unspecified
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / unique first-accepted full-product Q; use cp_air, cp_reference and cp_stocks. Conditional absence requires documented not_applicable; never assume a zero amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: eastman-mma-product; epa-tkn-1993

###### Nitrogen release to outdoor air (`nitrogen_air`)

Only actual N2 blanketing exhaust crossing the environment boundary; reconcile supplied gas and retained/captured gas. No implication of nitrogen-fertilizer emissions.

- Selected flow: Molecular nitrogen to outdoor air, unspecified
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable exchange total / unique first-accepted full-product Q; use cp_air, cp_reference and cp_stocks. Conditional absence requires documented not_applicable; never assume a zero amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: eastman-mma-product

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_hierarchy` | joint synthesis/separation | First assess justified subdivision of attributable equipment/services or supported system expansion under the declared study method. Where allocation remains necessary, assess a justified physical relationship; economic allocation is a disclosed fallback with actual matched-period quantities/prices and sensitivity. No automatic equal, mass, nitrogen or sales-value share is imposed. | ef-allocation-2021 |
| `allocation_physical` | all stage ledgers | Preserve full unallocated masses, actual component changes and C/N/water balances independently of the environmental attribution matrix. A recycled amine can react to another amine; do not demand individual molecular conservation or scale physical feed, waste, emissions or coproduct masses by an environmental share. | epa-amination-1979; basf-methylamines; ef-allocation-2021 |
| `allocation_recycles` | amine recycle and waste | Internal recycle is neither external saleable coproduct nor avoided virgin product credit. Distinguish actual DMA/TMA product export, return to reaction, off-spec return, captured vapour and waste transfer. Treatment and potential recovery credits must follow one documented compatible model without double counting. | epa-amination-1979; ef-allocation-2021 |
| `allocation_cohorts` | raw, WIP and finished stocks | Keep a vector of each exchange's inherited burdens for raw feed, work in progress and finished product. Allocate new-period activities to the cohorts that caused them. Carry closing burdens forward; opening finished stock does not inherit a second share of new production or create another reference denominator. For every stock parcel and exchange, distinguish physical supplier quantity, carried inventory coefficients, linked provider LCI and new foreground services. If historical upstream LCI is already embedded in the chosen input provider, do not add an overlapping inherited vector again. Reconcile provenance, inventory coverage and state gate for each actual demand; use an explicit non-overlapping representation, never count the same supply or service twice and never erase unknown burdens to force closure. | ef-allocation-2021 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

The declared study window covers a representative complete operating period, including startup/shutdown, maintenance, off-spec processing, abnormal events and stock endpoints. Describe the actual selected route and additional facilities before collection; conditional cards are not a mandatory recipe. Collect every extra actual chemical, refrigerant, fuel, waste and species release as a separate exchange. Refrigeration may be indirect or absent; when present, its actual refrigerant makeup/leakage and provider must be added individually. Supporting equipment, reusable pressure containers and transport follow a disclosed capital/supply boundary; purchased cylinder-packaged supply is outside the selected bulk-gate profile unless explicitly modelled. Source absence is never a numerical zero.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_reference` | finishing | accepted final product | unique acceptance and mass records | cohort/lot ID; first-acceptance timestamp; actual grade and state; net mass; assay; dispatch event; new closing FG; opening FG; return/retest; remaining service; unique event net full mass and locked original Q; parcel-linked post-acceptance event/time/destination; net D_new/F_new_close/L_new; temporary rework/return and cancellation links | Calibrated net scale or mass-flow record with matched sample and release certificate. Link every mass parcel to one first acceptance; identify new production, old dispatch, rejection, return and retest separately. Aggregation controls: per 1 kg reference flow; Q is the full net mass of unique new first acceptances, not all dispatch. Lock actual first-acceptance event Q and reconcile mutually disjoint net D/FG/L destinations on the original acceptance basis; the two-term bridge applies only when L is zero. The declared reference gate is the actual first-acceptance gate for the full anhydrous commercial grade. Its event mass is locked once. Eligible closing FG meets that same acceptance gate; packaging/storage/loading services still outstanding within the declared factory-supply boundary are explicitly accrued or later attributed to the original cohort and original Q. The acceptance-event ledger is separate from actual physical dispatch/stock/loss ledgers. Do not add locked Q again as an external physical product on top of dispatch, closing stock and post-gate exits. Where post-gate material handling is a separate process/state, retain real paired transfers and actual losses; internal acceptance is not a second external output. | kg; mass fraction | each lot/dispatch and period endpoints | complete declared operating period | same grade/route/site and acceptance gate | per 1 kg reference flow | calibration, tare, lab recovery, acceptance register and parcel/stock reconciliation |
| `cp_material` | synthesis; separation; finishing | each external material and saleable coproduct | receipts, withdrawals and composition | row/stage; whole SKU mass; opening/closing raw/WIP/FG; CAS; all constituents; actual provider; catalyst lot/full formulation and lifetime; net product export | Stock-adjusted calibrated receipts/withdrawals and batch assays; distinguish new supply from internal return and net DMA/TMA export. Record actual catalyst and oil lifetimes and activity attribution, not an assumed factor. Aggregation controls: per 1 kg reference flow; preserve absolute physical quantities and attributable exchange vectors before normalization | kg; mass fraction | each receipt/withdrawal, assay and campaign; period endpoints | complete period plus inherited stock history | actual site, equipment and cohort | per 1 kg reference flow | invoices, calibration, assays, supplier declarations, lifetime records and inventory reconciliation |
| `cp_links` | synthesis; separation; finishing | crude mixture, purified MMA and recycle links | stage mass and constituent transfer records | paired row IDs; interval; whole mass; water/amine/methanol/ammonia fractions; gases; pressure/temperature; stock; inherited burdens | Synchronized calibrated meters/weighing and representative same-stream assays at both ends; investigate discrepancies, retention and actual leaks before aggregation. Preserve internal chemical conversion and recycle destinations. Aggregation controls: per 1 kg reference flow; identical physical mass/composition/burden at paired transfer ends; cancel links only in aggregate | kg; mass fraction | each transfer and aligned meter interval | complete period and opening/closing WIP | same physical stream and matched stage gates | per 1 kg reference flow | meter calibration, stream sampling, lag/stock reconciliation and signed link register |
| `cp_utility` | synthesis; separation; finishing | each utility and return | stage-meter and provider records | row/stage; kWh/MJ; steam and condensate kg; pressure/temperature/dryness/enthalpy; water makeup/circulation/evaporation/blowdown; cooling boundary; provider; later service cohort | Time-aligned stage meters and invoices; identify net imported electricity/steam/water, internal heat, clean condensate return and physical cooling losses. Record actual grid voltage and reference quantity; later storage/loading uses original cohort identifiers. Aggregation controls: per 1 kg reference flow; one purchase per actual service, consistent supplied/returned states, separate internal circulation | kg; MJ; kWh; state units | meter interval, service event and period endpoints | complete period and later linked service intervals | actual supply/return and equipment boundaries | per 1 kg reference flow | calibrated meters, invoices, state measurements, verified conversions and service register |
| `cp_waste` | synthesis; separation; finishing | each segregated waste transfer | weighing, analysis and recipient records | row/stage; wet whole kg; water and CAS constituents; gas composition; nitrogen/COD methods and overlap; detection/recovery; stock; recipient; transport/treatment | Segregated calibrated weighing/metering and representative matrix-specific assays; verify each recipient/treatment quantity and distinguish full waste stream from analytical contained species. Keep clean return separate from contaminated wastewater. Aggregation controls: per 1 kg reference flow; full transfer mass before species analysis; no emission double counting | kg; mass fraction; analytical concentration and basis | each transfer, representative composite and period endpoints | complete period including startup/cleaning | named physical stream and actual recipient gate | per 1 kg reference flow | manifests, lab recovery/blanks, detection limits, recipient/provider acceptance and stock reconciliation |
| `cp_air` | synthesis; separation; finishing | each final outdoor-air release | validated species tests and flow/activity records | stage/source; species/CAS; final compartment; concentration; flow; wet/dry/standard state; time; capture efficiency evidence; captured destination; leaks; detection limit | Representative species-specific final-outlet tests and actual fugitive inventory, including abnormal events. Verify concentration/flow/state/time compatibility and amine recovery. Separate ambient release, captured transfer and internal vapour return. Aggregation controls: per 1 kg reference flow; sum actual species mass once over covered source/time intervals | kg; concentration; gas volume/time | test campaign plus continuous/activity records; all emitting modes | complete declared operating period | actual vent, fugitives and control train | per 1 kg reference flow | source tests, calibration, sampling recovery, blanks, uncertainty, measured control and source register |
| `cp_stocks` | synthesis; separation; finishing | raw/WIP/FG cohort and exchange inheritance | linked stock and burden-vector ledger | every stock parcel; opening/closing full mass and composition; first-acceptance cohort; original Q; each inherited exchange; period additions; sale/waste/return; later storage/loading service; provider-embedded historical LCI and inherited-vector overlap map; actual supply/service demand IDs | Reconcile opening stock, new activities, physical transfers and closing stock by parcel and each exchange. Retain previous-period coefficients and provenance. Unknown inherited burdens remain unknown; never set them to zero or spread them over unrelated new production. Aggregation controls: per 1 kg reference flow; carry each cohort's burdens and use its original positive Q for later services; Q=0 or unknown stays raw For every stock parcel and exchange, distinguish physical supplier quantity, carried inventory coefficients, linked provider LCI and new foreground services. If historical upstream LCI is already embedded in the chosen input provider, do not add an overlapping inherited vector again. Reconcile provenance, inventory coverage and state gate for each actual demand; use an explicit non-overlapping representation, never count the same supply or service twice and never erase unknown burdens to force closure. | kg; each exchange's own unit | period endpoints, every cohort transition and later service event | current period and linked prior/later cohorts | same actual stocks, acceptance gate and environmental allocation | per 1 kg reference flow | signed stock reconciliation, immutable acceptance IDs, previous burden vectors and uncertainty register |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_acceptance` | finished_mma | Q is the finite positive net full-product mass of actual uniquely identified first-acceptance events for the new cohort; lock it at the declared acceptance gate. Reconcile the same parcels on their original acceptance basis through the mutually disjoint net-state bridge Q = D_new + F_new_close + L_new: net new-cohort dispatch, new-cohort closing accepted FG, and separately evidenced post-acceptance loss/disposal or later-state destinations not already in dispatch/FG. The two-term dispatch-plus-FG bridge is valid only when L_new is zero. Opening FG, previously accepted returns/retests/redelivery and gross internal transfers never create a second event or enlarge Q. Follow temporary rework/return parcels to their eventual net state; do not retain both a temporary L entry and its later dispatch/FG. Closing FG must satisfy the same accepted grade and declared gate, with remaining included loading services accrued or added to that original cohort. Zero or unknown event Q remains raw with normalization unavailable; L_new is not a balancing plug. | cp_reference; cp_stocks | unique accepted full-product Q | eastman-mma-product; eastman-mma-spec |
| `calc_normalize` | all inventory rows | For exchange j and product cohort k, normalized amount = attributable exchange j for cohort k / original accepted full-product Q of cohort k. Attribute current activities and inherited stocks before dividing. Keep absolute physical totals alongside the allocated vector. Never divide by all dispatch, net stock change, pure MMA content, contained N or coproduct mass. The locked first-acceptance event Q is not recomputed from surviving output after post-gate losses. Keep unallocated physical exchange numerators separate from the environmental attribution matrix; physical coproducts are not divided or reduced by allocation shares. | cp_reference; cp_stocks; linked row protocol | per 1 kg reference flow inventory | ef-allocation-2021 |
| `calc_stock_vectors` | all inventory rows | For each exchange j, opening raw/WIP inherited burden plus new attributable activity equals burdens transferred to new cohorts, retained closing raw/WIP, other cohorts and disclosed residual destinations. Reconcile finished-stock exchange vectors independently: opening FG plus new accepted FG equals dispatch, closing FG and measured loss destinations. Preserve allocations and signs without discarding inherited coefficients. For every stock parcel and exchange, distinguish physical supplier quantity, carried inventory coefficients, linked provider LCI and new foreground services. If historical upstream LCI is already embedded in the chosen input provider, do not add an overlapping inherited vector again. Reconcile provenance, inventory coverage and state gate for each actual demand; use an explicit non-overlapping representation, never count the same supply or service twice and never erase unknown burdens to force closure. | cp_stocks; cp_material; cp_links | exchange-specific carry-forward and reconciliation | ef-allocation-2021 |
| `calc_later_services` | electricity_finish; loading_mma_air; all later services | Later storage/loading/retest/return handling is additional exchange activity of the original accepted cohort. Divide it by that cohort's original Q and revise/accrue its service inventory without creating new product output or reallocating old stock to current new production. If original Q or inherited vector is unknown, report the raw service total and unresolved normalization. | cp_stocks; cp_utility; cp_air; cp_reference | service attribution to original cohort | ef-allocation-2021 |
| `calc_components` | physical stream ledgers | Component kg = measured whole-stream kg multiplied by same-stream measured component mass fraction; reconcile water and quantified unknowns. Whole supplied MMA and its trace constituents are one commercial exchange; component analysis does not create extra purchased products or releases. As-N requires a verified species/formula conversion, never assumed amine identity. | cp_material; cp_links; cp_reference; cp_waste | whole-stream and constituent ledgers | eastman-mma-spec; epa-tkn-1993 |
| `calc_balance` | all physical stages | Reconcile measured total mass and C/N/H/O elemental content across feed, reaction water, actual amine conversion, saleable products, all wastes/releases and stock change. Species-specific MMA/DMA/TMA/methanol/ammonia changes follow actual chemistry; only conserved elements, not all reacting species, must close. Unknown composition prevents asserted closure. Never impose theoretical recipe/yield as measured input. | cp_material; cp_links; cp_waste; cp_air; cp_stocks | physical element and mass checks | epa-amination-1979; basf-methylamines; epa-tkn-1993 |
| `calc_release` | all elementary rows | Species kg = sum of compatible measured concentration in mg/m3 times gas flow in m3/h times hours, multiplied by 0.000001; use actual compatible states and validated recovery. This is a conversion, not an emission default. Correct overlapping source/time intervals and keep captured material outside emitted mass. | cp_air; cp_reference; cp_stocks | raw species kg and attributable normalized release | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all rows | Verify full native name, type, physical state/composition, route/comment, reference property and provider quantity. Unresolved ordinary UUIDs/providers remain gaps; never substitute a related species, generic use proxy, elementary product or pure component for preparation. | Direct identities and actual supply/treatment records |
| `dq_cohorts` | reference and stocks | Unique first-acceptance events lock original Q; reconcile disjoint net dispatch/closing-FG/post-gate L destinations, full raw/WIP/FG exchange inheritance, equal-ended links and original-cohort later services. Keep provider-embedded history and inherited vectors non-overlapping. Preserve zero/unknown-denominator records and unknown burdens. | cp_reference; cp_links; cp_stocks |
| `dq_analysis` | material, waste and air | Actual assay/method/state and matrix recovery; whole preparation versus contained species; as-N/COD analytical overlap; detection-limit and unidentified fractions. | eastman-mma-spec; epa-tkn-1993 |
| `dq_completeness` | completed datasets | Record measured, justified not_applicable and unresolved states separately. Add every extra actual exchange before claiming complete coverage; disclose missing provider links, maintenance/capital boundaries, transport, temporal/region mismatch and uncertainty. | cp_material; cp_utility; cp_waste; cp_air; cp_stocks |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | finished_mma | One explicit final product-output link, 1 kg whole anhydrous commercial MMA, correct native Product identity, full qualifiers, actual route and positive unique accepted Q. Elementary methylamine, aqueous MMA, pure-N mass and duplicate first acceptance fail. | eastman-mma-product; eastman-mma-spec; un-hs-methylamines |
| `validate_physical` | all stages | Match link ends, stock change, full stream and species/element accounting independently from allocation. Reacting amines may interconvert; unexplained composition or balance residual cannot be hidden by an allocation factor. | epa-amination-1979; basf-methylamines |
| `validate_stocks` | raw/WIP/FG and later services | Verify each inherited exchange vector, event-locked original Q and mutually disjoint net D_new/F_new_close/L_new bridge, including actual same-period post-acceptance losses. Use original Q for later services. Opening FG, returns, gross rework and retests never enlarge Q. Q=0 or unknown remains unnormalized; lost provenance cannot become zero burden. Check provider-embedded historical LCI against inherited vectors to exclude duplicate actual demand. | ef-allocation-2021 |
| `validate_quantities` | all rows | Same full-product reference basis and ordered rules/protocols in both languages; retain provider pressure/state/quantity, no duplicate heat/steam or whole-preparation/component exchange, no nitrogen analytical substitution. | eastman-mma-spec; epa-tkn-1993 |
| `validate_coverage` | completed datasets | Complete actual stage, utility, transport, treatment, release and capital-boundary disclosure; correct every missing actual atomic exchange or label incomplete. Historical EPA diagrams and manufacturer catalyst claims do not establish site inventory, universal recipe, scientific approval or methodology acceptance. | epa-amination-1979; basf-methylamines; ef-allocation-2021 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Independently accepted complete site/grade/cohort dataset for compatible anhydrous MMA intermediate supply |
| allowed_use | Same actual product form and declared methanol-ammonia route, provider quantity and boundaries; retain uncertainty and cohort pins |
| excluded_use | Whole CPC34150; MMA solutions/salts; DMA/TMA reference; heterocycles; assumed recipe/emission factor; extrapolation from one supplier to an industry |
| required_metadata | Product CAS/SKU/full assay/state, first acceptance and original Q, site/period/route/catalyst, all stock vectors, providers/quantities, recycles/coproducts, physical balances, allocation and remaining services |
| required_quality_disclosure | Actual coverage, measured/not_applicable/unresolved exchanges, analytical recovery, balances, stock inheritance, provider compatibility, source independence and uncertainty |
| update_trigger | Product/form/route/catalyst change, supply or treatment change, acceptance or assay revision, new exchange, stock/service correction or contrary original evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD CPC Version3.0 Structure,30June2025,34150 and34160; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Official class boundary/exclusions only; neither product-flow nor route proof |
| un-hs-methylamines | official_guidance | UNSD HS2012,292111,acyclic monoamines; https://unstats.un.org/unsd/classifications/Econ/Detail/EN/32/292111 | Independent acyclic amine-function classification; no LCI defaults |
| eastman-mma-product | literature | Eastman product71104079,Monomethylamine Anhydrous(MMA)-EU,Product description,2026-11-08 snapshot; https://www.eastman.com/en/products/product-detail/71104079/monomethylamine-anhydrous-mma-eu | Actual anhydrous liquefied market form and industrial intermediate; distinguishes solution alternatives; not universal properties or recipe |
| eastman-mma-spec | standard | Eastman Sales SpecificationT51007,effective2017-06-27,page1,71104079; https://www.eastman.com/supplemental/salespecs/71104079.pdf | Actual anhydrous grade,trace components and GC/Karl Fischer measurement example; numerical limits not generalized |
| basf-methylamines | literature | BASF Fine Chemicals,Alkyl Amines section,2026-11-08 snapshot; https://chemical-catalysts-and-adsorbents.basf.com/global/en/hydrogenation-catalysts/industries-we-serve/fine-chemicals | Commercial methanol/ammonia route,silica-doped-alumina catalyst,three amine products and recycle; excludes operating/performance/loading defaults |
| epa-amination-1979 | official_guidance | EPA IMPQCE01/79-05,Toxic Pollutant Identification:Amination Processes,January1979,§2.1.1–2.1.3,printed2-1–2-6/PDF57–62,Figures2.1/2.2; https://nepis.epa.gov/Exe/ZyPDF.cgi/9100C2XP.PDF?Dockey=9100C2XP.PDF | Historical original process/recycle/separation/waste topology; plant cases and numeric recipes/yields/waste loads not adopted |
| epa-tkn-1993 | method_factor | EPA Method351.2,Revision2.0,August1993,§§1.1,2.2–2.3,12.3; https://www.epa.gov/sites/default/files/2015-08/documents/method_351-2_1993.pdf | Nitrogen analytical basis and incomplete industrial-amine recovery limitation; no species mass or effluent defaults |
| ef-allocation-2021 | official_guidance | Commission Recommendation(EU)2021/2279,AnnexI§4.5,PDF63–64; https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | Multifunctionality hierarchy only; foreground cohort/stock rules are explicit collection conventions,not source-specific allocation shares or PEF conformity |
