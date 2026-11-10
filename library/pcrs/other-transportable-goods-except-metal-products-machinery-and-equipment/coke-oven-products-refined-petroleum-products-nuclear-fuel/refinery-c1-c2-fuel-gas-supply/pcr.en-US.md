---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.refinery-c1-c2-fuel-gas-supply
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---


# Refinery C1/C2 fuel-gas supply

## 1. Scope and Applicability

The physical subject is a non-condensable C1/C2 fuel-gas mixture supplied to refinery receiving units or external customers from mineral-petroleum refinery distillation or conversion off-gases after light-ends separation, conditional treatment and metering. Actual composition may contain hydrogen, methane, ethane and olefins. No default composition, calorific value, density, pressure, yield or emission factor is prescribed. Section 2.12 of `jrc-refining-2015` supports C1/C2 fractions for sale or refinery fuel; section 2.10 also states that most refinery fuel gas needs rapid own use and cannot normally be sold. An export therefore requires an actual receiving specification and delivery meter, not an assumed universal market outlet.

Excluded are extracted/purified natural gas or LNG, isolated ethane products, liquefied propane/butane LPG, purified olefin monomers, separately purified hydrogen, coke-oven gas, blast-furnace or converter gas, gasification manufacture of syngas, biogenic gas and combustion-only heat supply. Methane content does not make the refinery mixture natural gas; hydrogen content does not make it a separate hydrogen product. The CPC original lists natural gas under 12020, hydrogen and other inorganic gases under 34210, liquefied propane/butanes under 33410 and named olefins under 33421; 33429 is only a residual classification title. When imported natural gas or LPG is blended into the delivered header, independently review mixture applicability and classification; never conceal these inputs.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.refinery-c1-c2-fuel-gas-supply |
| classification_refs | CPC 3.0 33429; narrower product and route boundary |
| covered_products | Conditioned refinery C1/C2 fuel-gas mixture with a declared receiving specification |
| excluded_products | Natural gas; LPG; olefin monomers; isolated hydrogen; gasification syngas; biogenic gas; heat-only supply |
| representative_product | Conditioned refinery C1/C2 fuel gas |
| production_route | Refinery gas/liquid light ends → compression/cooling/absorption/fractionation → conditional amine treatment/regeneration → delivery metering; own use separately recorded |
| market_state | Accepted gaseous fuel; not liquefied LPG or a pure chemical monomer |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of conditioned refinery fuel gas with declared composition and acceptance specification |
| How much | 1 m3 first-accepted dry-gas output at the on-site usage or storage handover, at explicitly declared temperature and absolute pressure, excluding entrained liquid; retain moisture/compressibility corrections and independently measured mass and energy |
| How well | Measured composition, gross/net calorific value, water and sulphur; matches receiving pressure and quality specification |
| How long or cycle | One declared representative period including startup, shutdown and abnormal release events |
| reference_flow_link | reference_gas |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Gas `084a3bc0-51e3-4c71-bd26-236efaeba2b5` |
| Reference flow property | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` |
| Reference unit group | Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` |
| Reference unit | m3 |
| Required qualifiers | Source refinery units; composition/grade/receiver; mineral-petroleum and fossil-carbon origin; wet/dry state; entrained liquid; temperature/absolute pressure/compressibility; moisture; density method; gross/net calorific value and basis; sulphur species; meter/delivery pressure; foreground boundary; period/site; own use/export/flare; unique first-acceptance event/cohort and locked original dry-volume basis; complete D_new/FG_new/L_new destinations and inherited services; parent burden/allocation; provider quantity basis |

The broad whole-product Gas identity denotes the gaseous material at on-site usage or storage facilities. Apply it here only to the measured refinery C1/C2 mixture at that accepted handover, preserving source units, composition, phase and receiving specification; it is neither pure methane nor a natural-gas provider. Its classification metadata is not an applicability decision. The native Volume reference establishes m3 only; declare and verify actual temperature, absolute pressure, moisture, compressibility and any provider quantity/burden basis independently, without a fixed density or heating value. Use no background provider before those bases match.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| dry_volume | reference_gas | Volume | m3 | Q is the independently measured sum of unique first-acceptance event dry-gas volumes from cp_delivery, locked at the declared reference temperature, absolute pressure, moisture and acceptance-composition-specific compressibility. Reconcile all D_new, FG_new and L_new portions with acceptance_event_bridge on that original basis. Preserve raw meter states and measured mass/species records; actual later volumes with changed composition or phase are not automatically additive. No summing unlike raw m3/Nm3, universal normal state, density or heating value; verify provider/reference-state compatibility independently. |
| gas_state_conversion | raw_gas; reference_gas; natural_gas | Volume | m3 | Where only water is removed, convert V_measured to V_reference_dry as V_measured times (1 minus measured water mole fraction) times P_measured/P_reference times T_reference/T_measured times Z_reference_dry/Z_measured. Use absolute pressure, kelvin, synchronized actual mixture composition and matching compressibility definitions; omit moisture correction only for an already dry meter. Any hydrocarbon condensation or species removal requires a separate material ledger, not this same-mixture conversion. Do not invent standard P/T/Z or assume Z equals 1. |
| utility_basis | steam; natural_gas | Mass; Energy; Volume | kg; MJ; m3 | Record steam carrier mass separately from net heat and return water. With mass in kg and enthalpy in kJ/kg, delivered heat is (sum supply mass times supply enthalpy minus sum return mass times return enthalpy)/1000 MJ on one convention; include make-up/blowdown/losses in water and enthalpy accounts. Select compatible mass- or heat-based provider quantity once, without adding both or applying a second enthalpy factor. Natural-gas m3 requires matching temperature/absolute-pressure/moisture/compressibility; NCV and GCV stay distinct. |
| physical_basis | all inventory rows | Recorded exchange property | Recorded exchange unit | Retain raw exchange vectors, raw/WIP/finished-gas stocks and inherited service vectors by acceptance cohort. Same-cohort production totals are normalized by positive Q; opening or purchased finished gas, stock dispatch, return, retest and reacceptance do not create Q. Accepted gas later lost, downgraded, scrapped or returned to WIP retains its original first event and services. Old-cohort services use that original Q/volume basis; unknown or zero Q leaves raw totals with no division. Physical whole-mass/C/H/O/N/S/water/energy ledgers are independent of event quantities and attributed burdens. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified gas/liquid light ends from refinery parent processes with measured quantity/composition and parent burden |
| starting_condition_role | Physical foreground inlet, not a zero-burden waste-gas assumption |
| product_classification_scope | Refinery C1/C2 fuel-gas supply subset; no claim to complete CPC33429 coverage |
| recursive_input_rule | Link actual refinery parent processes; match both ends of returned gas/recycled liquid, without repeated external purchases |
| upstream_dataset_requirement | Verify refinery off-gas burdens, purchased materials, utilities and external sulphur recovery/wastewater treatment; disclose gaps |
| disclosure | Ownership and interfaces of gas plant/amine loop/heating/flare/sulphur recovery/refinery combustion/export meters and internal links |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_supply | supply | Include actual separation, cleaning, regeneration, compression, cooling, metering, losses and supply-unit-owned utilities and flares. Link purchased utilities to compatible backgrounds; not every schematic operation is mandatory. | `jrc-refining-2015` |
| boundary_combustion | reference_gas | After the supply outlet, refinery own-use combustion and external customer combustion are separate receiving processes. Retain full physical gas records and equal transfers; do not add downstream customer emissions to manufacture or delete refinery combustion. | `jrc-refining-2015` |
| boundary_complete | supply | Add each actual feed, formulation component, refrigerant, waste, pollutant and particulate size separately from the equipment walkdown. Separate aqueous treatment handover from environmental discharge; retain gas/liquid/solid products and water/carbon/sulphur/energy interfaces. Known biogenic input requires a separate biogenic CO2 row and renewed applicability review; a GHG reporting convention cannot remove it from LCI. | `jrc-refining-2015` |

### Physical Interfaces and Separate Service Burdens

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| link_ledgers | supply | These are interfaces to actual units and ledgers, not mandatory additional manufacturing processes. Record each stream once at the declared boundary; an internal link has two equal endpoints and cancels in the consolidated balance. Keep upstream burden inheritance, physical quantities and service attribution separate. |  |
| link_feed | raw_gas; raw_condensate | Pair refinery-parent output with supply input using source-unit, stream id, period, phase, composition, moisture and quantity state; inherit documented parent burdens. A wet inlet volume is not automatically equal to dry product volume. | `jrc-refining-2015` |
| link_loops | supply | Pair actual rich/lean amine, absorber gasoline recycle, flash gas returned to the fuel header, knockout condensate returned to refining and cooling-water/steam-return circuits. Record circulation, makeup, bleed, retained inventory and transfers separately; neither endpoint becomes a repeated purchase, sale or emission. | `jrc-refining-2015` |
| link_products | reference_gas; propane; butane; naphtha | Pair each own-use/export/storage outlet with its receiver, retaining acceptance events, gross outlets, linked returns, stocks/linepack and post-acceptance losses/downgrades/rework. The 1 m3 denominator is independently locked unique first acceptance Q, checked with disjoint exhaustive D_new + FG_new + L_new on its original basis. Opening or purchased accepted stock, return/retest/reacceptance and stock dispatch add no Q. Unaccepted WIP or supply-service fuel drawn before first acceptance adds no Q; later diversion of already accepted gas preserves Q and belongs once in L_new. Accepted product transferred to a separate refinery fuel receiver belongs once in D_new. Separate C3/C4/C5-plus outlets remain full physical quantities. | `jrc-refining-2015` |
| link_recovery | acid_gas; spent_amine; wastewater; filter_solids; offspec_condensate | Pair each whole-mixture transfer with its actual recovery/treatment receiver. Retain H2S, CO2, hydrocarbons, salts, carrier water and moisture without replacing the whole stream with one species. Link recovered sulphur, water, tail gas and returned materials at the receiver; include actual receiver burdens once under the declared boundary/allocation. | `jrc-refining-2015`; `epa-refinery-monitoring-2015` |
| link_combustion | supply | Identify actual supply-owned heater/flare operations and receiving refinery/customer combustion separately. For included operations retain air/O2, humidity, fuel, all actual exhaust constituents including N2/O2, recovered heat and losses; expand each required actual LCI exchange atomically. Do not manufacture a generic combustion or mixing process to complete a diagram. | `jrc-refining-2015` |
| link_packaging | supply | Determine actual pipeline/bulk/container delivery, material stocks and returns. Add each actual packaging material, seal, replacement part, cleaning input and resulting waste as its own row when present. For reusable tanks/cylinders collect tare, fleet stock, fill/empty returns, heel, losses, cleaning/inspection/repair and measured service cycles; container mass is not gas mass or a fresh container purchase per fill. Include owned or supplier service burdens once and explain any exclusion. | `jrc-refining-2015`; `eu-pef-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| supply | Refinery light-gas separation, treatment and delivery | required | Actual delivered refinery fuel gas | foreground production | per reference flow |

### Process: Refinery fuel-gas supply (`supply`)

#### Inputs

##### Product flows

###### Raw petroleum-refinery off-gas (`raw_gas`)

Distillation or conversion gas supplied to the gas plant; retain source unit, composition, wet/dry basis, pressure and parent burden.

- Selected flow: Raw petroleum-refinery off-gas
- Flow property / unit: Volume / m3
- Amount rule: Use same-period measured totals from cp_feed, normalized by first-accepted dry-gas output Q per reference flow; never multiply physical transfers by allocation shares.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_feed`
- inclusion_condition: required
- Sources: `jrc-refining-2015`

Preserve the separately measured pre-treatment and accepted post-treatment physical streams. A broad product-flow identity never supplies their composition, recovery, density, calorific value or upstream burden; these remain actual collection and provider requirements.

###### Unstabilized refinery light hydrocarbon condensate (`raw_condensate`)

Liquid light ends fed to the separation plant, only if present; measure phase and composition separately from gas.

- Selected flow: Unstabilized refinery light hydrocarbon condensate
- Flow property / unit: Mass / kg
- Amount rule: Use same-period measured totals from cp_feed, normalized by first-accepted dry-gas output Q per reference flow; never multiply physical transfers by allocation shares.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_feed`
- inclusion_condition: Liquid feed present
- Sources: `jrc-refining-2015`

###### Purchased alternating-current electricity (`electricity`)

Meter compression, chilling, pumping, regeneration and export handling; allocate shared meters once.

- Selected flow: Alternating current `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Unit group: Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Use same-period measured totals from cp_utilities, normalized by first-accepted dry-gas output Q per reference flow; never multiply physical transfers by allocation shares.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- inclusion_condition: required
- Sources: `jrc-refining-2015`

Use only actual China (CN) 35–330 kV consumer-side grid-average supply; other voltages/mixes require a separate identity. Convert metered kWh to MJ using 3.6; the native property label Net calorific value is not a fuel heating-value assumption for electricity.

###### Process steam supplied to gas separation and amine regeneration (`steam`)

Collect inlet/outlet enthalpy, pressure, temperature, dryness, mass and condensate return. The atomic exchange is physical steam mass; calculate net heat independently from matched supply/return enthalpy and mass. Carrier water, returned condensate, make-up, blowdown and losses remain in the water ledger. A compatible supplier burden is applied once on its stated mass or heat basis, with no duplicate heat purchase or repeated conversion factor. Unknown supplier heat basis is pending; MJ alone does not establish net delivered heat.

- Selected flow: Process steam supplied to gas separation and amine regeneration
- Flow property / unit: Mass / kg
- Amount rule: Use same-period measured totals from cp_utilities, normalized by first-accepted dry-gas output Q per reference flow; never multiply physical transfers by allocation shares.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- inclusion_condition: Steam heating used
- Sources: `jrc-refining-2015`

###### Industrial process-water makeup (`water`)

Record separately purchased process, cooling or dilution water by its actual source and treatment, distinguishing recirculation, recovered condensate and carrier water already included in a delivered solution. Different water qualities require separate actual rows; embedded solution water is a component-ledger quantity, not a second water purchase.

- Selected flow: Industrial process-water makeup
- Flow property / unit: Mass / kg
- Amount rule: Use same-period measured totals from cp_utilities, normalized by first-accepted dry-gas output Q per reference flow; never multiply physical transfers by allocation shares.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- inclusion_condition: Water makeup used
- Sources: `jrc-refining-2015`

###### Methyldiethanolamine solvent makeup (`mdea`)

This row measures the whole delivered MDEA makeup grade, including its carrier water when it is an aqueous stock. Record actual assay, additives, whole-stock mass, active MDEA mass and embedded water in a component ledger. A 50% stock is not neat MDEA and the BREF operating-solution description is not a purchase-grade or concentration default. Do not book both the whole solution and its components as independent purchases. Separately added dilution water belongs to the water row; other purchased grades or additives require their own actual atomic identities.

- Selected flow: Methyldiethanolamine solvent makeup
- Flow property / unit: Mass / kg
- Amount rule: Use same-period measured totals from cp_materials, normalized by first-accepted dry-gas output Q per reference flow; never multiply physical transfers by allocation shares.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- inclusion_condition: MDEA solvent route
- Sources: `jrc-refining-2015`

###### Gaseous nitrogen for purging (`nitrogen`)

Record externally supplied gaseous protective-atmosphere nitrogen, its actual purity and metered consumption; match the supplier route. The selected global identity does not establish a supplier process or purity. Do not substitute a bottling-line or source-specific paper-mill nitrogen identity. Retain nitrogen dissolved in products, emitted or held in stocks in the N balance.

- Selected flow: Nitrogen gas `50626f35-0e0d-4139-b9f9-7e9ff238ba62`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use same-period measured totals from cp_materials, normalized by first-accepted dry-gas output Q per reference flow; never multiply physical transfers by allocation shares.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- inclusion_condition: Nitrogen purge used
- Sources: `jrc-refining-2015`

###### Light petroleum gasoline absorbent makeup (`absorbent`)

External makeup only; recycled absorber liquid remains in the internal ledger. Record grade and composition.

- Selected flow: Light petroleum gasoline absorbent makeup
- Flow property / unit: Mass / kg
- Amount rule: Use same-period measured totals from cp_materials, normalized by first-accepted dry-gas output Q per reference flow; never multiply physical transfers by allocation shares.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- inclusion_condition: Refrigerated absorption used
- Sources: `jrc-refining-2015`

###### Natural gas for separately metered utility combustion (`natural_gas`)

Only a declared gas-plant utility fuel, not the refinery-gas reference product or an unrecorded header blend. Match temperature, absolute pressure, moisture, compressibility and supplier m3 definition; secondary mass factors are not density.

- Selected flow: Natural gas, gaseous `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Unit group: Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: Use same-period measured totals from cp_utilities, normalized by first-accepted dry-gas output Q per reference flow; never multiply physical transfers by allocation shares.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- inclusion_condition: Natural-gas utility combustion inside the declared foreground
- Sources: `jrc-refining-2015`

#### Outputs

##### Product flows

###### Conditioned refinery C1/C2 fuel gas (`reference_gas`)

First-accepted dry-gas output at the metered on-site usage or storage handover; 1 m3. Q counts unique first-accepted production once, including all later D_new/FG_new/L_new destinations on its locked original basis; post-acceptance loss or return to WIP does not reduce Q. Retain separate own-use, external-delivery and stock branches, their full physical volumes, and equal receiving inputs. First acceptance is not an extra external output; later dispatch of opening or purchased accepted stock, returns and reacceptance are not new production. Do not identify this whole mixture as pure methane, ethane, hydrogen or natural gas.

- Selected flow: Gas `084a3bc0-51e3-4c71-bd26-236efaeba2b5`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Unit group: Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: 1 m3
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_delivery`
- inclusion_condition: First acceptance into refinery usage or storage; external delivery requires actual receiving acceptance
- Sources: `jrc-refining-2015`

Preserve the separately measured pre-treatment and accepted post-treatment physical streams. A broad product-flow identity never supplies their composition, recovery, density, calorific value or upstream burden; these remain actual collection and provider requirements.

###### Separated liquefied propane fraction (`propane`)

Record actual C3 fraction grade and accepted delivery, separately from C1/C2 gas. Its product methodology belongs to the LPG route.

- Selected flow: Liquefied petroleum gas `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use same-period measured totals from cp_products, normalized by first-accepted dry-gas output Q per reference flow; never multiply physical transfers by allocation shares.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_products`
- inclusion_condition: C3 coproduct produced
- Sources: `jrc-refining-2015`

Restrict this row to the actual C3-rich liquefied petroleum-gas fraction, recording composition, liquefied delivery and its independent outlet total; the broad LPG identity does not merge the two rows, assume pure chemical grade or impose generic impurity ranges.

###### Separated liquefied butane fraction (`butane`)

Record actual C4 composition, including normal/iso fractions and olefin content, at its own delivery gate.

- Selected flow: Liquefied petroleum gas `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use same-period measured totals from cp_products, normalized by first-accepted dry-gas output Q per reference flow; never multiply physical transfers by allocation shares.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_products`
- inclusion_condition: C4 coproduct produced
- Sources: `jrc-refining-2015`

Restrict this row to the actual C4-rich liquefied petroleum-gas fraction, recording composition, liquefied delivery and its independent outlet total; the broad LPG identity does not merge the two rows, assume pure chemical grade or impose generic impurity ranges.

###### Debutanized light gasoline fraction (`naphtha`)

Record C5-plus physical outlet, internal recycle, accepted sale and stock change without assuming universal yield. Identify the actual net product and blending receiver; a separated gasoline-range stream is not automatically a finished motor-gasoline grade.

- Selected flow: Debutanized light gasoline fraction
- Flow property / unit: Mass / kg
- Amount rule: Use same-period measured totals from cp_products, normalized by first-accepted dry-gas output Q per reference flow; never multiply physical transfers by allocation shares.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_products`
- inclusion_condition: C5-plus liquid produced
- Sources: `jrc-refining-2015`

###### Hydrogen-sulphide-bearing amine regenerator acid gas (`acid_gas`)

Physical mixture transferred to sulphur recovery; measure H2S, CO2, water and other constituents. It is not an H2S air emission. Link receiving recovery and its sulphur, water and tail-gas records.

- Selected flow: Hydrogen-sulphide-bearing amine regenerator acid gas
- Flow property / unit: Mass / kg
- Amount rule: Use same-period measured totals from cp_products, normalized by first-accepted dry-gas output Q per reference flow; never multiply physical transfers by allocation shares.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_products`
- inclusion_condition: Amine regeneration used
- Sources: `jrc-refining-2015`

###### Steam condensate returned to the heat supplier (`condensate_return`)

Record return mass and enthalpy for the same steam interface; no automatic avoided-water or heat credit.

- Selected flow: Steam condensate returned to the heat supplier
- Flow property / unit: Mass / kg
- Amount rule: Use same-period measured totals from cp_utilities, normalized by first-accepted dry-gas output Q per reference flow; never multiply physical transfers by allocation shares.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- inclusion_condition: Condensate return crosses the unit boundary
- Sources: `jrc-refining-2015`

##### Waste flows

###### Spent MDEA solution sent for regeneration or disposal (`spent_amine`)

Retain water, amine, heat-stable salts and hydrocarbon contamination; record receiver and actual fate.

- Selected flow: Spent MDEA solution sent for regeneration or disposal
- Flow property / unit: Mass / kg
- Amount rule: Use same-period measured totals from cp_waste, normalized by first-accepted dry-gas output Q per reference flow; never multiply physical transfers by allocation shares.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- inclusion_condition: MDEA solution removed
- Sources: `jrc-refining-2015`

###### Gas-treatment filter solids (`filter_solids`)

Record actual moisture, sulphur, sorbent and hydrocarbon content; dust and sludge cannot share a dry-mass assumption.

- Selected flow: Residue from Filtration `f1b6f4e0-72d1-4e9b-afcc-cfca4e75b184`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use same-period measured totals from cp_waste, normalized by first-accepted dry-gas output Q per reference flow; never multiply physical transfers by allocation shares.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- inclusion_condition: Solids removed from gas treatment
- Sources: `jrc-refining-2015`

###### Refinery gas-plant sour wastewater for treatment (`wastewater`)

Meter aqueous handover, dissolved/suspended hydrocarbon and sulphur compounds; this is not freshwater discharge. Do not adopt manganese-residue washing wastewater.

- Selected flow: Refinery gas-plant sour wastewater for treatment
- Flow property / unit: Volume / m3
- Amount rule: Use same-period measured totals from cp_waste, normalized by first-accepted dry-gas output Q per reference flow; never multiply physical transfers by allocation shares.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- inclusion_condition: Aqueous purge leaves the gas plant
- Sources: `jrc-refining-2015`

###### Off-spec petroleum hydrocarbon condensate for treatment (`offspec_condensate`)

Only external waste handover, not internal return to refining. Retain composition and hazardous status; reassess product status from actual acceptance.

- Selected flow: Waste oil `e620bc79-43f0-41a8-9589-9b5fe50ffef2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use same-period measured totals from cp_waste, normalized by first-accepted dry-gas output Q per reference flow; never multiply physical transfers by allocation shares.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- inclusion_condition: Off-spec condensate handed over as waste
- Sources: `jrc-refining-2015`

##### Elementary flows

###### Carbon dioxide, fossil, to outdoor air (`co2_air`)

Record only the actual species crossing to outdoor air, unspecified subcompartment pending identity verification. Collect monitor/LDAR/vent/flare records; no default positive emission or historical AP-42 factor.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use same-period measured totals from cp_air, normalized by first-accepted dry-gas output Q per reference flow; never multiply physical transfers by allocation shares.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- inclusion_condition: Venting of inlet CO2 or fossil-carbon utility/flare combustion
- Sources: `jrc-refining-2015`; `epa-refinery-monitoring-2015`

###### Carbon monoxide, fossil, to outdoor air (`co_air`)

Record only the actual species crossing to outdoor air, unspecified subcompartment pending identity verification. Collect monitor/LDAR/vent/flare records; no default positive emission or historical AP-42 factor.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use same-period measured totals from cp_air, normalized by first-accepted dry-gas output Q per reference flow; never multiply physical transfers by allocation shares.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- inclusion_condition: Actual incomplete fossil combustion or CO-containing venting
- Sources: `jrc-refining-2015`; `epa-refinery-monitoring-2015`

###### Methane, fossil, to outdoor air (`ch4_air`)

Record only the actual species crossing to outdoor air, unspecified subcompartment pending identity verification. Collect monitor/LDAR/vent/flare records; no default positive emission or historical AP-42 factor.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use same-period measured totals from cp_air, normalized by first-accepted dry-gas output Q per reference flow; never multiply physical transfers by allocation shares.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- inclusion_condition: Methane-bearing leaks, vents or flare slip
- Sources: `jrc-refining-2015`; `epa-refinery-monitoring-2015`

###### Ethane to outdoor air (`ethane_air`)

Record only the actual species crossing to outdoor air, unspecified subcompartment pending identity verification. Collect monitor/LDAR/vent/flare records; no default positive emission or historical AP-42 factor.

- Selected flow: ethane `4d9a8790-3ddd-11dd-9219-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use same-period measured totals from cp_air, normalized by first-accepted dry-gas output Q per reference flow; never multiply physical transfers by allocation shares.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- inclusion_condition: Ethane-bearing leaks or vents
- Sources: `jrc-refining-2015`; `epa-refinery-monitoring-2015`

###### Benzene to outdoor air (`benzene_air`)

Record only the actual species crossing to outdoor air, unspecified subcompartment pending identity verification. Collect monitor/LDAR/vent/flare records; no default positive emission or historical AP-42 factor.

- Selected flow: benzene `08a91e70-3ddc-11dd-9202-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use same-period measured totals from cp_air, normalized by first-accepted dry-gas output Q per reference flow; never multiply physical transfers by allocation shares.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- inclusion_condition: Benzene is present in actual released gas or liquid vapour
- Sources: `jrc-refining-2015`; `epa-refinery-monitoring-2015`

###### Hydrogen sulphide to outdoor air (`h2s_air`)

Record only the actual species crossing to outdoor air, unspecified subcompartment pending identity verification. Collect monitor/LDAR/vent/flare records; no default positive emission or historical AP-42 factor.

- Selected flow: hydrogen sulfide `08a91e70-3ddc-11dd-94a9-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use same-period measured totals from cp_air, normalized by first-accepted dry-gas output Q per reference flow; never multiply physical transfers by allocation shares.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- inclusion_condition: H2S crosses the environmental air boundary
- Sources: `jrc-refining-2015`; `epa-refinery-monitoring-2015`

###### Sulphur dioxide to outdoor air (`so2_air`)

Record only the actual species crossing to outdoor air, unspecified subcompartment pending identity verification. Collect monitor/LDAR/vent/flare records; no default positive emission or historical AP-42 factor.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use same-period measured totals from cp_air, normalized by first-accepted dry-gas output Q per reference flow; never multiply physical transfers by allocation shares.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- inclusion_condition: Sulphur-bearing gas combustion within the supply boundary
- Sources: `jrc-refining-2015`; `epa-refinery-monitoring-2015`

###### Nitrogen oxides to outdoor air, reported as NO2-equivalent mass (`nox_air`)

Retain this monitor reporting quantity separately from physical species mass. An NO2-equivalent result is neither actual NO2 mass nor an unweighted NO/NO2 species sum. Establish the monitor conversion and matching LCI/LCIA quantity definition before use; no generic Nitrogen oxides UUID or physical kg binding is adopted. Actual NO and NO2 belong to the species/element ledger and, when resolved for LCI, to separate atomic rows; do not also count the aggregate.

- Selected flow: Nitrogen oxides to outdoor air, reported as NO2-equivalent mass
- Flow property / unit: NO2-equivalent reported emission quantity / kg NO2-equivalent
- Amount rule: Use same-period measured totals from cp_air, normalized by first-accepted dry-gas output Q per reference flow; never multiply physical transfers by allocation shares.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- inclusion_condition: Actual monitoring and selected LCI quantity both establish NO2-equivalent NOx, excluding N2O
- Sources: `jrc-refining-2015`; `epa-refinery-monitoring-2015`

###### Dinitrogen monoxide to outdoor air (`n2o_air`)

Record only the actual species crossing to outdoor air, unspecified subcompartment pending identity verification. Collect monitor/LDAR/vent/flare records; no default positive emission or historical AP-42 factor.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use same-period measured totals from cp_air, normalized by first-accepted dry-gas output Q per reference flow; never multiply physical transfers by allocation shares.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- inclusion_condition: Actual monitored or justified combustion N2O
- Sources: `jrc-refining-2015`; `epa-refinery-monitoring-2015`

###### hydrogen (`hydrogen_air`)

Measure the actual gaseous species release using composition, compatible temperature/pressure/moisture/flow and event duration.

- Selected flow: hydrogen `08a91e70-3ddc-11dd-949c-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use actual same-period release totals from cp_air divided by total first-accepted dry-gas output Q, per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- inclusion_condition: Hydrogen-bearing leakage, venting or flare slip
- Sources: `jrc-refining-2015`; `epa-refinery-monitoring-2015`

###### ethylene (`ethene_air`)

Measure the actual gaseous species release using composition, compatible temperature/pressure/moisture/flow and event duration.

- Selected flow: ethylene `fe0acd60-3ddc-11dd-a47d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use actual same-period release totals from cp_air divided by total first-accepted dry-gas output Q, per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- inclusion_condition: Ethylene is present in the actual released refinery gas
- Sources: `jrc-refining-2015`; `epa-refinery-monitoring-2015`

###### water vapour (`water_vapour_air`)

Measure the actual gaseous species release using composition, compatible temperature/pressure/moisture/flow and event duration. Reconcile evaporation, entrained gas moisture, cooling and combustion-generated water against the physical water balance; do not repeat condensate/liquid discharge or treat it as water withdrawal.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use actual same-period release totals from cp_air divided by total first-accepted dry-gas output Q, per reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- inclusion_condition: Actual gaseous water emitted by cooling, steam losses, gas moisture or foreground combustion
- Sources: `jrc-refining-2015`; `epa-refinery-monitoring-2015`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_parent | raw_gas; raw_condensate | Obtain refinery-parent off-gas/liquid burden and allocation evidence; retain full physical coproduct outputs including own use. Residual naming, own use or avoided flaring cannot establish zero burden or substitution credit. | `eu-pef-2021` |
| allocation_services | supply | Attribute dedicated services using separate meters and process subdivision first; justify residual common-service allocation with measured drivers. Where a relevant physical causal relationship is unestablished, retain review and scenario sensitivity, without universal mass, heating-value or price shares. | `eu-pef-2021` |
| allocation_service_account | supply | Keep compression, steam, cooling, treatment, loading, storage, container cleaning/maintenance, return and retest service vectors separate. Subdivide new production and each old accepted cohort before justified residual allocation. Attach inherited and later services to their original accepted cohort and original Q/volume basis, preserving the previous vector rather than replacing it. Unknown/zero original Q retains raw service totals without division; no reassignment to current Q, repeated product or automatic return credit. | `eu-pef-2021` |
| allocation_ledgers | all inventory rows | Keep conserved physical gas/liquid/solid products, own use, flare, waste and stocks separate from attributed environmental burdens. Attribute burdens using justified allocation before dividing by total first-accepted dry-gas output Q; physical coproduct rows use full totals over the same original-cohort Q denominator, without mechanical multiplication by an environmental share. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

The authoritative Q is the independently measured dry-gas volume summed once over unique first-acceptance events at the fixed reference gate and locked to each original acceptance composition and declared T/P/moisture/Z basis. Reconcile the complete Q = D_new + FG_new + L_new destination bridge defined in acceptance_event_bridge, including all post-acceptance net losses and other later states. The three portions are disjoint net parcel states, not gross throughput; returns, rework, retests and reacceptance do not repeat Q. Acceptance Q is a reference-event account, not another external physical output. Preserve original event quantities, physical mass/species/water/energy records, original-cohort service vectors and unexplained gaps. Positive known original Q is required for normalization; failed operations and zero/unknown-Q activities retain raw burdens.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_feed | supply | raw_gas; raw_condensate | Feed/source ledger | flow/mass; T/P; wet/dry; compressibility; density; species composition; gas/liquid entrainment; source units; parent burden | Calibrated metering and synchronized sampling, reconciled to source records; no typical-composition substitution. | kg; m3; MJ; kWh; composition | Per batch/continuous and each event | Same representative period, including startup/shutdown | Declared gas plant and all handover points | per reference flow | Calibration; synchronized samples; handover; provenance; completeness; balances/uncertainty |
| cp_delivery | supply | reference_gas | Unique first-acceptance ledger | unique event/cohort id; first acceptance date/specification and independently measured locked dry volume; original composition/T/P/moisture/Z; gross new dispatch and linked returns; D_new; FG_new; each L_new loss/vent/flare/scrap/downgrade/net-return/rework-WIP destination; opening/closing accepted finished gas/linepack; purchased FG; pre-acceptance WIP/rejects; prior-event links for return/retest/reacceptance; own-use/export/service branches; raw meter volumes/states; independently measured mass/density/species; later composition/phase changes and additions; NCV/GCV and basis | Meter the actual first acceptance/storage/header handover independently of dispatch/invoice and deduplicate event ids. Reconcile original events to exhaustive net destinations using acceptance_event_bridge. Convert same-mixture gas state with gas_state_conversion only within its scope; retain moisture/condensate and use measured mass/species/phase mapping for later changes. Paired gross transfers and linked returns remain auditable; no change of Q to force closure | kg; m3; MJ; composition | Per handover/batch/continuous and event | Same representative period including opening/closing stocks and original-cohort history | Declared gas-plant usage/storage acceptance gates and all destinations | Q = sum of unique first-acceptance dry volumes; verify Q = D_new + FG_new + L_new on the locked original basis; two-term bridge only with evidenced absence of all other destinations; no new Q from opening/purchased FG or reacceptance; positive-known Q only | Acceptance/specification records; paired meters; complete destination and return records; original state/composition/Z and mass/species evidence; unique cohort register; reconciliation |
| cp_utilities | supply | electricity; steam; water; natural_gas; condensate_return | Utility ledger | dedicated meters; energy provider; voltage; steam supply/return state/enthalpy/mass; water source; natural-gas m3 definition; own fuel | Collect calibrated meters and provider basis at each interface; unknown heat/gas compatibility remains pending; shared meters are not repeated. | kg; m3; MJ; kWh; composition | Per batch/continuous and each event | Same representative period, including startup/shutdown | Declared gas plant and all handover points | per reference flow | Calibration; synchronized samples; handover; provenance; completeness; balances/uncertainty |
| cp_materials | supply | mdea; nitrogen; absorbent | Material/formulation ledger | actual grade/CAS/concentration; active component; solution water; fresh makeup; circulation; stocks; provider | Collect purchase/issue/formulation/analysis records; separate circulation from makeup; add every additive as its own atomic row. | kg; m3; MJ; kWh; composition | Per batch/continuous and each event | Same representative period, including startup/shutdown | Declared gas plant and all handover points | per reference flow | Calibration; synchronized samples; handover; provenance; completeness; balances/uncertainty |
| cp_products | supply | propane; butane; naphtha; acid_gas | Coproduct/recovery-interface ledger | full gas/liquid physical mass; composition; product/waste acceptance; stocks; sulphur-recovery receipt and sulphur/water/tail-gas outputs | Meter every outlet/receiver separately; acid-gas transfer to sulphur recovery is not air release; retain full physical quantities. | kg; m3; MJ; kWh; composition | Per batch/continuous and each event | Same representative period, including startup/shutdown | Declared gas plant and all handover points | per reference flow | Calibration; synchronized samples; handover; provenance; completeness; balances/uncertainty |
| cp_waste | supply | spent_amine; filter_solids; wastewater; offspec_condensate | Waste/aqueous ledger | mass/volume; moisture; composition; dissolved/suspended constituents; waste status; receiver; fate; treatment burden | Weigh/sample and reconcile external handover; distinguish return, external treatment and final environmental discharge, avoiding repeated water/solids. | kg; m3; MJ; kWh; composition | Per batch/continuous and each event | Same representative period, including startup/shutdown | Declared gas plant and all handover points | per reference flow | Calibration; synchronized samples; handover; provenance; completeness; balances/uncertainty |
| cp_air | supply | co2_air; co_air; ch4_air; ethane_air; benzene_air; h2s_air; so2_air; nox_air; n2o_air; hydrogen_air; ethene_air; water_vapour_air | Air-release ledger | species; compartment/subcompartment; carbon origin; concentration; flow; T/P/moisture; duration; LDAR; flare; NOx quantity definition | Collect actual continuous/periodic monitoring, leak surveys and vent/flare logs; use measured compound speciation rather than assigning total VOC to benzene/ethane. Keep measured/uncorrected versus oxygen-corrected concentration, moisture and flow on compatible bases. A Method19 F-factor route requires actual fuel composition, HHV and matched wet/dry assumptions, not a generic natural-gas factor; integrate compatible concentration, flow and duration; exclude N2O from NOx and avoid repeated NO/NO2 plus aggregate NOx. | kg; m3; MJ; kWh; composition | Per batch/continuous and each event | Same representative period, including startup/shutdown | Declared gas plant and all handover points | per reference flow | Calibration; synchronized samples; handover; provenance; completeness; balances/uncertainty |
| cp_scope | supply | supply | Boundary/balance/attribution ledger | equipment; all exchanges; parents/receivers; gas/liquid/solid; whole mass; C/H/O/N/S; carrier water; humidity; reaction water; energy; paired internal links; opening/closing stocks; returns; packaging/container fleet; maintenance; common services; drivers; uncertainty/gaps | Walk down each unit, retaining physical balances and an independent burden-allocation ledger; do not auto-accept allocation without causal evidence. | kg; m3; MJ; kWh; composition | Per batch/continuous and each event | Same representative period, including startup/shutdown | Declared gas plant and all handover points | per reference flow | Calibration; synchronized samples; handover; provenance; completeness; balances/uncertainty |
| cp_interfaces | supply | supply | Paired stream and cohort service register | stream/cohort id; sender/receiver; product status; phase/composition; raw quantity state; opening/closing raw/WIP/finished-gas stocks and linepack; first acceptance; returns/retests; makeup/circulation/bleed; container tare/fleet/heel/cycles/returns; cleaning/repair inputs/wastes; dedicated/shared service vectors; original cohort accepted Q and volume basis; inherited burdens | Reconcile both endpoints, stocks, returns and acceptance ids. Retain raw exchange, stock and inherited-service vectors before normalization; each additional actual material/emission/waste is atomic. Meter new-production and old-cohort handling, storage, cleaning and retest services separately. Unknown quantities and original denominators remain gaps. | kg; m3; MJ; kWh; composition | Per handover/event; period stock close | All cohorts present during representative period | Declared gas plant, storage/header and service ownership boundary | Current production uses its Q; old-cohort services attach to original cohort Q on original volume basis; zero/unknown Q remains raw | Calibration; synchronized samples; paired receipts; cohort/state/stock reconciliation; provider and service-driver evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_records | all inventory rows | Q is the independently measured sum of unique first-acceptance dry-gas event volumes at the fixed reference gate, not inferred from dispatch plus closing stock. Verify the complete acceptance_event_bridge on the original declared T/P/moisture/composition/Z basis before division. Opening/purchased accepted gas, returns, retests, reacceptance, pre-acceptance rejects/WIP and internal moves add no Q. Once accepted, later loss, rejection, downgrade, service-fuel diversion or transfer back to WIP does not subtract Q. Divide attributable current-cohort production exchange totals by positive known Q once; output is 1 m3. Retain failed-operation, rework, storage, retest and loss-related activities, attributed to their evidenced original cohort; no burden disappears or moves to new production merely because accepted gas changes state. Preserve full physical transfers/stock reconciliation separately from burden allocation. Zero/unknown Q keeps raw totals without normalization. Separate unlike specifications or quantity states into compatible groups. | cp_feed; cp_delivery; cp_utilities; cp_materials; cp_products; cp_waste; cp_air; cp_scope; cp_interfaces | Same-cohort inventory per reference flow and independent burden ledger |  |
| balance_whole | supply | For the same boundary/period, sum physical whole-stream inputs minus outputs equals closing minus opening material stock. Where the boundary includes finished-gas storage/linepack, use actual external transfers/releases and all raw/WIP/FG stock changes; first acceptance is an internal state change, not an extra output. Include humidity, air/O2 and all actual exhaust constituents when combustion is inside the boundary. Count a whole solution or mixture once; its component ledger is a decomposition, not additional mass. Cancel internal pairs/returns/rework; preserve external gross outward and linked returns separately. Keep these physical quantities independent of acceptance-event Q and allocation. No reaction mass creation/destruction term or fictitious closure flow is allowed. | cp_feed; cp_products; cp_utilities; cp_materials; cp_waste; cp_air; cp_scope; cp_interfaces | Whole-mass ledger and uncertainty-resolved residual |  |
| balance_elements | supply | For each of C/H/O/N/S, sum inlet element masses minus outlet element masses equals element stock change, using actual constituent masses and molecular stoichiometry or measured elemental assay. Include hydrogen, amines, hydrocarbons, salts, water, air and humidity. Element generation and consumption are zero; reactions redistribute species but do not create or destroy elements. Unknown constituents remain unresolved; never assign zero to close the ledger. | cp_scope; cp_interfaces | Five separate conserved-element ledgers |  |
| balance_water_species | supply | Whole-stream water includes solution carrier, separate dilution, wet gas, steam/condensate, wet solids, wastewater and vapour. For each actual reactive species, inlet minus outlet plus reaction generation G minus consumption C equals species stock change. Evidence G/C using actual reaction stoichiometry, extent and measured species/period records; do not assume species conservation or assign unknown terms zero. Reaction water is included once in the resulting streams and never added as a source to whole-mass or element balances; do not double-count its H/O. | cp_scope; cp_materials; cp_utilities; cp_waste; cp_air | Water/species ledger reconciled to whole mass and elements |  |
| gas_energy_basis | reference_gas; raw_gas; natural_gas | Record dry reference volume at actual declared P/T/Z, composition and provider basis. Physical mass equals same-state volume times independently established same-state density; retain removed moisture/entrained liquid separately. Delivery chemical energy equals volume times the matching mixture volumetric NCV, or mass times matching mass NCV. State combustion reference temperature and product-water convention, keeping GCV distinct; NCV is supplied-mixture heat potential, not pure-methane energy or useful heat. Native secondary coefficients cannot establish any of these conversions. | cp_feed; cp_delivery; cp_utilities | Compatible volume, whole mass and mixture-energy ledgers |  |
| energy_closure | supply | Reconcile chemical energy, electrical work, steam supply/return enthalpy, material sensible/latent enthalpy, exported/recovered heat, losses and stored energy under one declared reference convention. Avoid counting both fuel energy and its internally generated heat as external inputs; if chemical enthalpy is included, do not also add the same reaction heat. Separate energy quantities from service burden allocation. | cp_scope; cp_utilities; cp_interfaces | Energy ledger without repeated internal conversion |  |
| nox_reporting | nox_air | Only for a documented NO plus NO2 reporting convention, equivalent mass is actual NO mass times molar-mass(NO2)/molar-mass(NO) plus actual NO2 mass. Verify monitoring and LCI/LCIA definitions before application; N2O stays separate. Use actual NO/NO2 species masses for whole-mass and N/O ledgers, never the equivalent mass; choose species or compatible aggregate once for impact calculations. | cp_air | Separate NO2-equivalent reporting quantity and physical species ledger | `epa-refinery-monitoring-2015` |
| cohort_service_carry | supply | Preserve raw inputs/outputs, raw/WIP/finished-gas stocks and inherited burden/service vectors. For cohort c with known positive original Q_c, later attributable service increment is S_c/Q_c using that cohort's original declared volume basis; add it to its existing per-reference vector. Opening-stock dispatch, internal moves, returns, rework of previously accepted product and retests do not create another reference output. Unknown/zero Q_c leaves S_c raw with an unresolved normalization, never division or reassignment to new Q. | cp_interfaces; cp_scope; cp_delivery | Auditable original-cohort burden vector and raw service gaps |  |
| acceptance_event_bridge | all inventory rows | Q = sum of independently measured unique first-acceptance dry-gas event volumes; lock each original event and cross-check Q = D_new + FG_new + L_new with zero opening stock for that newly accepted cohort. D_new is accepted product delivered to actual own-use/export receivers net of linked returns, FG_new is closing accepted finished gas/linepack, and L_new comprises every other net post-acceptance disposition: loss/leak/vent/flare, scrapping/disposal, downgrade, net return held outside FG, service-fuel diversion and closing rework/WIP or other custody. The three portions must be disjoint and exhaustive on the same original acceptance-composition/T/P/moisture/Z dry-volume basis. Deduct a linked return from D_new and assign it once to its actual closing FG/WIP/other destination; gross rework/reacceptance loops add neither Q nor another destination. Where composition, condensation, chemical reaction or phase changes, trace accepted-origin constituents by measured mass/species and map each portion to its original event-volume equivalent; do not add condensate m3 or flare-exhaust m3 to dry fuel-gas m3, apply same-mixture P/T/Z correction across species removal, or count later added material in Q. Keep actual mass/C/H/O/N/S/water/energy records separate. Q = D_new + FG_new is permitted only with evidence that all other post-acceptance destinations are absent and L_new = 0. For 100 m3 first accepted, 60 m3 net delivered, 30 m3 closing FG and 10 m3-equivalent post-acceptance loss on this basis, Q remains 100 m3, not 90 m3. Opening/purchased FG, retests and reacceptance create no Q; retain their original service vectors. Missing original quantities or unexplained bridge residuals remain unresolved and block complete normalization; never relock Q or assume zero loss. | cp_delivery; cp_interfaces; cp_scope; cp_products; cp_waste; cp_air | Auditable locked event Q and complete original-basis destination bridge, separate from physical and burden ledgers |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_balance | supply | Reconcile feed/makeup, gas/liquid/solid products, own use, waste, vent/flare and stocks through physical whole-mass/C/H/O/N/S/water/energy balances, with opening/closing stocks, carrier water, humidity, actual reaction-species changes, container returns and paired internal streams. Separately reconcile independently measured unique first-acceptance Q to exhaustive D_new/FG_new/L_new, with original mixture/state evidence for post-acceptance changes, rework and net returns. Investigate differences using propagated uncertainty, without invented closure tolerance, zero loss or adjusted Q. | cp_scope; cp_delivery; cp_interfaces |
| quality_evidence | all inventory rows | Collect future actual SKU, composition, acceptance and amounts through real protocols; process literature is not a completed site survey, and single-site/historical values are not universal recipes or defaults. | cp_scope; cp_delivery |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | reference_gas | Verify the complete native whole-product identity, source-route, phase/composition qualifiers, reference property and unit chain before a reference link; for the broad Gas identity require the actual accepted refinery-mixture usage/storage gate. Contradictory positive origin/state/route fields block linkage until corrected or authoritatively resolved; a metadata debt cannot exempt them. Unknown future amounts remain collection requirements, not automatic zero. No natural-gas, pure-hydrogen or LPG substitution. |  |
| validate_inventory | all inventory rows | Each row is one atomic exchange with actual compartment/species/fossil-biogenic origin/quantity definitions; failed infrastructure is not a no-match result. Keep concrete unresolved physical identities; no broad correction-flow substitution. |  |
| validate_records | supply | Check bilingual reference, ordered rule/protocol ids, deduplicated first events and locked Q, actual quality admission/storage/header gate, original-cohort service bases, complete physical and separate allocation ledgers, parent burdens and equal internal links. Require Q = D_new + FG_new + L_new with disjoint exhaustive net destinations and one original acceptance dry-gas T/P/moisture/composition/Z basis; two-term reduction requires evidenced absence of every other destination. Check losses, scrap, downgrade, net returns, closing rework/WIP and accepted-gas service diversion, without erasing their activities or adding Q from opening/purchased FG/reacceptance. Verify mass/species mapping across composition/phase changes and no duplicated returns/destination or first acceptance as extra physical output. Missing records, provider incompatibility, zero/unknown original denominators or unexplained balances prohibit dataset completeness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Fuel-gas supply input to matching receiving processes |
| allowed_use | Only completed, identity/quantity/provider-compatible refinery C1/C2 fuel-gas supply data; measured composition/calorific conversion |
| excluded_use | Methodology alone is not a completed foreground/background dataset; no automatic natural-gas/LPG/olefin/hydrogen substitution, exported-gas combustion or whole-refinery representation |
| required_metadata | Source units/route; composition; delivery state/quality; provider basis; export/own use; site/period; boundary/allocation; receiving specification |
| required_quality_disclosure | Unresolved identities and primary metering/background/balance/release/waste/allocation/survey-coverage gaps |
| update_trigger | Changed source/composition/route/treatment/steam or header blending/receiving specification/allocation |

## 11. Data Sources
| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| jrc-refining-2015 | official_guidance | European Commission JRC, Best Available Techniques Reference Document for the Refining of Mineral Oil and Gas, 2015; section 2.10 pp.66–67 (PDF100–101), 2.12 pp.76–77 (PDF110–111), 4.10.2.2 p.353 (PDF387), 4.23.5.1 pp.479–481 (PDF513–515), Annex8.2.2 p.673 (PDF707). https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/REF_BREF_2015.pdf | Refinery-gas identity, own-use/sale limitations, separation and amine interfaces; process evidence only, without transferred schematic states, historical quantities or recipes; independence key: jrc-refining-2015 |
| un-cpc-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025, entries12020,33410,33421,33429,34210 (PDF57,156,157,160). https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification titles and adjacent identities only, not universal manufacture or full 33429 mapping; independence key: unsd-cpc3-2025 |
| eu-pef-2021 | official_guidance | European Commission, Commission Recommendation (EU) 2021/2279, Annex I, section 4.5 p.63. https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | Generic subdivision and relevant physical-relationship principles only; specific product rules prevail. Not refinery production evidence, allocation shares or full PEF compliance; independence key: ec-pef-2021 |
| epa-refinery-monitoring-2015 | official_guidance | US EPA, Emissions Estimation Protocol for Petroleum Refineries, Version3, April2015, sections2.1 (PDF24–25),4.1–4.2 (PDF49–51),5.5 (PDF92). https://www.epa.gov/sites/default/files/2020-11/documents/protocol_report_2015.pdf | Actual leak speciation, combustion concentration wet/dry and volume-state compatibility, HHV limitations of F factors, and sulphur-recovery event scope only; no historical emission factors or default recovery efficiencies; independence key: us-epa-refinery-protocol-2015 |
