---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.other-plates-sheets-film-foil-and-strip-of-plastics
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Unfaced CO2/ethanol-extruded polystyrene foam boards at net delivery

## 1. Scope and Applicability

This PCR covers manufacturing and actual net accepted factory dispatch of rigid closed-cell extruded polystyrene flat boards without facings, reinforcement, adhesive backing, added flame retardant or chemically decomposing blowing-agent concentrates. Start with purchased GPPS granules, complete purchased colour masterbatch, industrial liquid CO2 and unformulated ethanol; include actual inorganic nucleation or polymeric melt modifier only when supplier identity and compatibility are established. The route includes receipt, feed preparation, metering, melt mixing, gas injection, physical expansion/extrusion, cooling, trimming/cutting, internal recovery, conditioning, quality release, FG storage, wrapping, handling and dispatch. It is not purchased-finished-board repacking. Source synthesis defines a reproducible route, not a claim of one contemporary order, one factory recipe or cross-supplier SKU equivalence.

Exclude non-cellular film/sheet, EPS bead-moulded products, flexible polyurethane foams, rubber sheets/belts/tubing, profiles and pipes, faced/laminated composite panels, structural sandwich elements, chemically blown or HFC/HCFC/pentane-blown variants, and chemically recycled-resin manufacture. The CPC 3.0 original structure and explanatory-notes page 177 repeat the 36330 non-cellular exclusions and the residual 36390 title; they contain no additional substantive 36390 note. Treat cellular-board placement in 36390 as a reasoned narrower classification context, never full-leaf coverage or an accepted mapping. Adjacent building-article categories require separate applicability review for assembled articles.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.other-plates-sheets-film-foil-and-strip-of-plastics |
| classification_refs | CPC 3.0 36390; narrower |
| covered_products | Unfaced rigid closed-cell CO2/ethanol-extruded GPPS flat boards |
| excluded_products | Non-cellular sheet; EPS bead foam; rubber; profiles/pipes; faced panels; chemically blown or flame-retarded variants |
| representative_product | Cut flat XPS board supplied as wrapped bundles; no board-to-building functional equivalence presumed |
| production_route | Purchased raw formulations to physical extrusion expansion; cooling/cutting; conditioning; actual net dispatch |
| market_state | Actual accepted factory-dispatch board state with residual cell gas disclosed |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply the declared unfaced XPS board as a material intermediate |
| How much | 1 kg net accepted dispatched board excluding packaging |
| How well | Declared dimensions and tested thermal/compression properties at actual conditioning state; kg does not establish equal insulation service |
| How long or cycle | One declared production/delivery accounting period with linked historical stocks and returns; no assumed building service life |
| reference_flow_link | delivered_board |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Foamed Plastic `3a86ddd1-28f8-45ba-9255-74a405e09f03` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual polymer grade and GPPS identity; complete commercial formulation grades and constituent assays; CO2 origin and supply state; ethanol purity and water content; absence of chemical blowing agent and added flame retardant; closed-cell unfaced board construction; board dimensions and directly measured mass/density state; thermal and compression performance with test basis; actual site and electricity supply; manufacturing and FG accounting periods; dispatch gate and acceptance criteria; conditioning age and retained CO2/ethanol; WIP/FG cohorts and inherited exchange vectors; gross dispatch and original-delivery reversal links; individual packaging forms and reuse boundary |

Declare every required qualifier in dataset metadata, process notes or reference-flow description. The complete native restrictions and classification inconsistency are repeated in the consumed board flow descriptions; a broad UUID alone cannot establish applicability.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use actual net accepted dispatched board mass, excluding all transport packaging, at recorded age, temperature and residual-gas state. Weigh calibrated gross and tare separately. Q = G - R0; G is accepted outward board mass and R0 is traceably reversed original delivered mass, not current return weight. Keep P, WIP and FG distinct under cp_stock and cp_stock_delivery. |
| normalize_control | all inventory rows |  |  | Collect only raw readings and records. Convert original units/rates, reconcile stock vectors and assign shared exchanges before the single normalize_once operation. Inventory cards and protocol aggregation refer to the same operation; neither divides again. Q<=0 retains raw loads without a unit result. No unmeasured loss, future factory amount or missing UUID is an observed zero. |
| state_conversion | all inventory rows |  |  | Use kg for physical mass. If a raw liquid or gas record is an integrated volume, multiply only by independently established density at that substance composition, pressure and temperature; do not multiply by time again. Integrate genuine rates over time before conversion; convert kWh and MJ on one stated meter boundary, never mixing electricity with thermal duty. Counted boards or pallets need directly measured configuration mass, never a guessed item mass or a density inferred from an unrelated flow coefficient. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased GPPS granules and complete commercial formulations with CO2/ethanol at actual supply state |
| starting_condition_role | foreground_entry |
| product_classification_scope | CPC 3.0 36390; narrower |
| recursive_input_rule | Paired internal regrind cancels; actual external XPS inputs require state and upstream-burden disclosure |
| upstream_dataset_requirement | Each actual external supply needs a compatible independently bounded upstream dataset; flow identity is not a provider |
| disclosure | Exact physical route; actual supply forms; net dispatch Q; complete WIP/FG/return vectors; utility and packaging boundaries; residual cell gases |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_complete | all inventory rows | Include all operations from actual purchased raw-material supply through net accepted factory dispatch, with upstream datasets for each external input and real transport/service boundary. Manufacturing is complete physical foam conversion; do not stop at film wrapping. Add each actual drying input, fuel, purchased heat, refrigerant, treatment chemical, capture medium, discharge species or additional packaging as a separate named card with its own supply state and collection protocol. Unknown occurrence is an open dataset requirement, not zero or an unnamed other stream. | `finnfoam-xps-2021`; `gabriel-xps-masterbatches` |
| b_terminal | all inventory rows | Use Q only at actual net accepted factory dispatch. P is first quality-released board, not delivered output. Keep manufacturing, FG and combined physical gates separate: P transferred internally cancels in the combined gate. Closing FG may contain current P and its inherited burdens; do not add that stock again as production. No delivery, repeat acceptance or reinspection creates new P. Reject Q<=0 for unit results while retaining all actual loads and signed corrections. | `finnfoam-xps-2021` |
| b_stock | all inventory rows | Tag every WIP, trim/regrind and FG cohort with physical mass, polymer/formulation composition, CO2/ethanol retained mass and a vector of raw exchange burdens. Record opening and closing stock at both gates, failed and zero-output lots, startup/shutdown, idle, cleanup, purges, destructive tests and rework. Carry actual historical vectors without replacing them with the current product average. Distinguish real new increments from internal transfers and sold/rejected material. | `finnfoam-xps-2021`; `jrc-ilcd-2010` |
| b_gas_water | all inventory rows | Keep each real species and destination independent: CO2 and ethanol in board cells, vents, fugitives, recovered material, condensate and wastewater; residual styrene and PS particles where present. Physical foaming itself has no stoichiometric reaction water. Moisture, free liquid, vapour and any structurally bound water require their own evidence. Do not fit CO2 and ethanol to a single total-mass residual. Purchased CO2 and its eventual release are different exchanges and never an automatic credit. | `finnfoam-xps-2021`; `gabriel-xps-masterbatches` |
| b_returns | all inventory rows | For each actual customer return link the original dispatch, original delivered mass R0 and original per-exchange burden vector. Reverse that original delivery exactly once; measure current returned physical mass independently, including age-related gas loss, damage and contamination. Returned historical burdens are transfers, not new purchases or new production; add only real inspection/rework/transport increments and record subsequent fate. Untraceable reversals make net-delivery data incomplete; do not invent historical burdens. | `jrc-ilcd-2010` |
| b_recursion | all inventory rows | Do not purchase internal board scrap again. If an external same-category XPS input actually occurs, distinguish raw recycled material from already finished board and disclose its inherited upstream scope. Outside waste or chemically recycled polymer cannot silently inherit this virgin-GPPS physical route. Include actual collection and reprocessing; no automatic displaced-virgin credit. | `finnfoam-xps-2021`; `jrc-ilcd-2010` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | Raw supply to extruded cut quality-released board | required | All actual manufacturing operations and internal recovery | foreground | P kg internal first release; normalize to net dispatch through cohort vectors |
| delivery | Conditioning FG storage packaging and net dispatch | required | All actual stock and dispatch events including returns | reference_process | Q kg actual net accepted dispatch |

### Process: Manufacturing from raw materials (`manufacture`)

#### Inputs

##### Product flows

###### Virgin GPPS granules (`gpps`)

Whole purchased GPPS granules only. Native identity specifies general-purpose granulate and Product flow with Mass; no CAS, synonyms, grade, process route, geography, purity or extra properties are provided. Match actual molecular-weight distribution and extrusion grade through supplier records. HIPS, SBS, EPS beads and crosslinked styrene resins are incompatible; this UUID is not an upstream process or a quantity.

- Selected flow: polystyrene (general purpose) granulate (GPPS) `4f19f11e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources: `finnfoam-xps-2021`

###### Liquid carbon dioxide physical blowing agent (`carbon_dioxide`)

Record the whole delivered industrial CO2 supply and actual purity, origin, pressure and liquid state. No UUID is adopted: inspected liquid-CO2 candidate fixes a welding proxy and Mass*time, which cannot identify this kg exchange. Do not substitute welding shielding gas, chemical-industry waste or an elementary emission. Recovered industrial CO2 is not a negative emission or an automatic avoided-production credit.

- Selected flow: Liquid carbon dioxide for polymer foaming
- Flow property / unit: Mass / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources: `finnfoam-xps-2021`

###### Unformulated ethanol co-blowing agent (`ethanol`)

Native identity is ethanol, CAS 64-17-5, volatile liquid, production mix at plant, Product flow with Mass; route, grade, purity and geography are unspecified and there are no extra properties. Use only for separately supplied unformulated ethanol. Record assay and incidental water as composition subaccounts of the same purchase, never second purchases. A deliberately aqueous or denatured formulation needs its own whole-formulation row and compatible identity; this UUID does not identify such a recipe or fermentation/fuel/extraction route.

- Selected flow: Ethanol `df7bb021-85c3-4d72-ad46-29e83afe64e2`
- Flow property / unit: Mass / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources: `finnfoam-xps-2021`

###### Purchased polystyrene colour masterbatch (`colour_masterbatch`)

One complete commercial pigment/carrier formulation, measured as delivered pellets. Declare its exact supplier grade, pigment identities and carrier composition; do not infer the pigment from board colour. Carrier and pigment assays are subaccounts and not additional GPPS or pigment purchases. This supply choice is a transparent technical synthesis of the board and masterbatch sources, not evidence that Finnfoam uses a named Gabriel grade. On-site compounding instead requires every actually purchased pigment and carrier plus real mixing energy and losses as separate cards.

- Selected flow: Polystyrene-carried colour masterbatch for XPS boards
- Flow property / unit: Mass / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources: `finnfoam-xps-2021`; `gabriel-xps-masterbatches`

###### Conditional inorganic nucleating pellets (`nucleating_masterbatch`)

Include only if this whole supplied formulation or a separately qualified equivalent is actually charged. Historical supplier sheet specifies polystyrene carrier and fine purified inorganic filler, not the filler chemical identity. It discusses halogenated propellants and chemical-nucleator alternatives; it does not prove a current CO2/ethanol recipe. Obtain compatibility trials and current composition before using the named grade. No chemical gas generation is assigned to inorganic filler, and no carrier or filler mass is purchased twice.

- Selected flow: Polystyrene-carried inorganic nucleating masterbatch SB 78690 NU
- Flow property / unit: Mass / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources: `gabriel-xps-masterbatches`

###### Conditional polymeric melt lubricant concentrate (`modifier`)

A separate whole purchased formulation only where actually used and trial-qualified. Historical processing-aid guidance does not establish its amount, current supplier composition or a guaranteed energy saving. Exclude chemically decomposing blowing-agent concentrates from this physical-only route; actual use triggers a separately evidenced reaction inventory and scope review.

- Selected flow: Styrene-polymer processing-aid masterbatch PS 78330 MOD
- Flow property / unit: Mass / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources: `gabriel-xps-masterbatches`

###### Manufacturing electricity (`electricity_mfg`)

Meter receiving, optional feed drying, dosing, melting, screw drive, gas dosing, cooling/chilling, cutting, grinding, extraction and cleaning. Keep failed runs, startup, shutdown and idle consumption; recycled trim is not free processing. Shared circuits follow the exchange-specific attribution decision. No generic steam or boiler is presumed.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources: `finnfoam-xps-2021`

###### External cooling-water supply (`cooling_water`)

Conditional external utility-water inlet only. Internal circulation is not repeated purchase or freshwater withdrawal. Record temperature, pressure, quality and supplier water/energy agreement; compare water-only supply with a supplied cooling service to prevent duplicate refrigeration power. Use measured water mass or independently verified water density at the recorded state.

- Selected flow: Liquid cooling water
- Flow property / unit: Mass / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `finnfoam-xps-2021`

###### Conditional gearbox lubricant makeup (`gear_oil`)

Include actual makeup or replacement attributable to equipment service; identify exact formulation. Do not treat internal oil circulation as new consumption or hide lubricants in electricity.

- Selected flow: Mineral gearbox lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources: `finnfoam-xps-2021`

###### Incoming road-freight service (`freight`)

Actual incoming road legs only; retain loaded mass, distance, loading and relevant empty movement. Exclude legs already included in the chosen upstream supply boundary. Add each actually used rail or sea service separately; a tkm is not a mass flow or a kg product conversion.

- Selected flow: Diesel-lorry road freight transport
- Flow property / unit: Mass*distance / t*km
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_transport`
- Sources: `finnfoam-xps-2021`

#### Outputs

##### Product flows

###### Manufactured board handoff to conditioning and delivery (`board_handoff`)

Internal first quality-release transfer P only, not the denominator Q. Narrow native broad closed/open-cell rigid/flexible resin-foam identity to unfaced rigid closed-cell XPS extruded with CO2 and ethanol, without added flame retardant or chemical blowing agent. Native Product/Mass has no CAS, route, grade, performance, geography or extra property. The native non-cellular 36330 classification contradicts its consistently cellular names, synonyms and comment: disclose this isolated classification defect, never use it as classification evidence. Identity is not a supplier process, density, thermal performance or equivalence proof. Carry each raw-exchange burden vector and gas state into FG.

- Selected flow: Foamed Plastic `3a86ddd1-28f8-45ba-9255-74a405e09f03`
- Flow property / unit: Mass / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stock`
- Sources: `finnfoam-xps-2021`

###### External cooling-water return (`water_return`)

Record a real external Product return at its measured mass and thermal state, paired with the inlet and supplier agreement. Internal exchanger return cancels inside the system. Exported sensible heat requires actual inlet/outlet temperatures and enthalpy evidence; it is neither negative water nor automatic useful-heat coproduct.

- Selected flow: Returned liquid cooling water
- Flow property / unit: Mass / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `finnfoam-xps-2021`

##### Waste flows

###### Externally discarded XPS offcuts (`waste_board`)

Actual unrecycled cut pieces, rejected boards and purges of the same documented material state leaving as this waste stream. Internally ground/re-extruded material is paired in the stock ledger and cancels; external disposal, recycling and any separately sold secondary output retain their real status and destination. Never assume zero because a case source reports full internal recovery.

- Selected flow: Waste unfaced XPS board offcuts
- Flow property / unit: Mass / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources: `finnfoam-xps-2021`

###### Captured XPS cutting dust (`waste_dust`)

Collected particulate waste measured independently from board offcuts and uncaptured air emissions. Actual return to the melt is an internal stock transfer with real collection/grinding burden, not external recycling or a new virgin input.

- Selected flow: Captured polystyrene foam dust
- Flow property / unit: Mass / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources: `finnfoam-xps-2021`

###### Empty raw-material PE sack (`waste_bag`)

One emptied supplier sack stream, where present; count actual empty sack mass and retained residue separately. If purchased material data include its packaging, do not purchase that sack again. Keep sacks distinct from finished-board wrapping.

- Selected flow: Waste polyethylene raw-material sack
- Flow property / unit: Mass / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources: `finnfoam-xps-2021`

###### Conditional spent gearbox oil (`waste_oil`)

Actual separately collected oil for external handling; reconcile makeup, equipment stock and leakage. Add independently identified leakage species and receiving medium if it occurs.

- Selected flow: Spent mineral gearbox lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources: `finnfoam-xps-2021`

###### Conditional cooling-water blowdown (`cooling_blowdown`)

Waste stream only when sent to external wastewater treatment. Report actual composition and destination; a direct environmental discharge instead requires each measured constituent as elementary flows with no duplicated treated-water flow. COD is an indicator and cannot identify a chemical mass.

- Selected flow: Cooling-circuit aqueous blowdown
- Flow property / unit: Mass / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `finnfoam-xps-2021`

##### Elementary flows

###### Foaming CO2 to air (`co2_air_mfg`)

Measure species-specific vent, fugitive and pre-handoff conditioning losses; distinguish fossil/recovered/biogenic supply origin with evidence. CO2 retained in cells is a physical product subaccount, not an emission at the same time or a sequestration credit.

- Selected flow: Carbon dioxide to air from physical blowing agent
- Flow property / unit: Mass / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `finnfoam-xps-2021`

###### Foaming ethanol to air (`ethanol_air_mfg`)

Measure actual ethanol mass by concentration and exhaust volume at matched state or independently supported species balance. Do not equate total VOC, a carbon-equivalent response, or total board mass loss to ethanol. Captured ethanol and dissolved ethanol remain separate destinations.

- Selected flow: Ethanol to air
- Flow property / unit: Mass / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `finnfoam-xps-2021`

###### Conditional residual styrene to air (`styrene_air`)

Include only measured or independently estimated residual monomer release from heating/melt handling; identify CAS 100-42-5 and uncertainty. It cannot be inferred from total VOC or assumed equal to the PS input.

- Selected flow: Styrene to air
- Flow property / unit: Mass / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `finnfoam-xps-2021`

###### Uncaptured polymer dust to air (`ps_air`)

Actual uncaptured polystyrene particle mass only; total particulate sampling needs composition attribution and size evidence. Do not convert a concentration limit into an observed emission or sum captured dust twice.

- Selected flow: Polystyrene particulate matter to air
- Flow property / unit: Mass / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `finnfoam-xps-2021`

###### Conditional cooling/drying water vapour (`water_vapour`)

Actual evaporation only, including measured feed moisture where drying occurs. This physical route has no presumed reaction water or structural water generation; bound moisture, liquid water and vapour remain independent states.

- Selected flow: Water vapour to air
- Flow property / unit: Mass / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `finnfoam-xps-2021`

### Process: FG conditioning packaging and delivery (`delivery`)

#### Inputs

##### Product flows

###### Board from manufacturing and opening FG (`fg_in`)

Physical lot transfer from current P or opening FG only, with separate inherited per-exchange burdens and residual CO2/ethanol. Same native broad foam identity and classification defect as board_handoff; no fixed polymer grade, density, route, geography, supply mix or other property is implied. Current P is not increased by delivery or reinspection. This internal product input cancels board_handoff in the combined system and is never a second purchase.

- Selected flow: Foamed Plastic `3a86ddd1-28f8-45ba-9255-74a405e09f03`
- Flow property / unit: Mass / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stock_delivery`
- Sources: `finnfoam-xps-2021`

###### Actual returned board (`returned_board`)

Customer-returned physical XPS of this exact scope only. Keep current returned mass and condition distinct from original delivered mass R0 and original burden vector being reversed. Same broad Product/Mass foam identity and native classification defect apply; mixed contaminated demolition waste, EPS bead foam and faced panels cannot use this row. Reinspection creates no production; only actual additional rework adds new burden.

- Selected flow: Foamed Plastic `3a86ddd1-28f8-45ba-9255-74a405e09f03`
- Flow property / unit: Mass / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stock_delivery`
- Sources: `finnfoam-xps-2021`

###### Board bundle PE wrapping film (`wrap`)

One purchased PE wrapping film. Native CAS 9002-88-4, production mix at plant, Product/Mass; no grade, thickness, branching, recycled content, geography or extra properties. The comment distinguishes competing PET, not a PET constituent; native luggage/leather classification is isolated metadata debt. Confirm supplier composition and wrapping form; multilayer/PET films require a separate identity. Opening empty/attached stock and external returns are not new purchases.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `finnfoam-xps-2021`

###### Conditional reusable wooden pallet (`pallet`)

Include actual pallet supply and lifetime/service accounting if used; collect physical mass and unique reuse histories. Count use, purchases, returns and end-of-life separately; do not assume a fixed trips-per-pallet factor or convert item counts to kg without weighing the actual configuration.

- Selected flow: Reusable wooden transport pallet
- Flow property / unit: Mass / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `finnfoam-xps-2021`

###### Conditional polypropylene bundle strap (`strap`)

Actual separately supplied PP strap only; no combined packaging-material row. Obtain actual formulation and mass, and reconcile the strap independently of film and pallet.

- Selected flow: Polypropylene transport strapping
- Flow property / unit: Mass / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `finnfoam-xps-2021`

###### Conditional paper bundle label (`label`)

One complete supplied paper/adhesive label, not separate paper and adhesive purchases. Retain peel-off liner as its own actual waste stream when present.

- Selected flow: Self-adhesive paper identification label
- Flow property / unit: Mass / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `finnfoam-xps-2021`

###### Conditioning storage and dispatch electricity (`electricity_delivery`)

Meter actual storage ventilation, conditioning, wrapping, handling and loading after handoff; include idle and failed dispatches and real return/rework increments. Allocate dedicated circuits before shared consumption. Count incoming P once; current closing FG retains its inherited burdens.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy_delivery`
- Sources: `finnfoam-xps-2021`

#### Outputs

##### Product flows

###### Net accepted dispatched XPS reference product (`delivered_board`)

The only reference row: net delivery at the declared factory dispatch gate, excluding packaging. Q is actual accepted outward board mass G less traceable reversals of original delivered board mass R0; current return mass is a distinct physical ledger. Native broad foam Product/Mass identity has no CAS, grade, geography, fixed technology or extra property; narrow it to unfaced closed-cell GPPS boards, physically blown with CO2/ethanol, no added flame retardant and no chemical blowing concentrate, actual dimensions, performance and residual cell gas. Native non-cellular 36330 classification is inconsistent with all cellular identity text and is not adopted as coverage evidence. This UUID establishes neither thermal equivalence nor an upstream provider. Board mass includes its actual remaining gas at dispatch; it is not dry-resin mass or an assumed density conversion.

- Selected flow: Foamed Plastic `3a86ddd1-28f8-45ba-9255-74a405e09f03`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_stock_delivery`
- Sources: `finnfoam-xps-2021`

###### Outbound Polyethylene film (`out_wrap`)

Actual packaging leaving with gross physical shipments or returning externally, tracked by separate destination and status subledger. It is not net board Q, a second purchase or an automatic coproduct. Opening and closing empty/attached/reusable stock remain explicit. Same PE-film native limitations as wrap: CAS 9002-88-4; production mix at plant; no grade, thickness, recycled content, geography or additional property; luggage classification is inconsistent metadata and PET is only a comparison. Actual compatible single PE film only.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `finnfoam-xps-2021`

###### Outbound Reusable wooden transport pallet (`out_pallet`)

Actual packaging leaving with gross physical shipments or returning externally, tracked by separate destination and status subledger. It is not net board Q, a second purchase or an automatic coproduct. Opening and closing empty/attached/reusable stock remain explicit.

- Selected flow: Reusable wooden transport pallet
- Flow property / unit: Mass / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `finnfoam-xps-2021`

###### Outbound Polypropylene transport strapping (`out_strap`)

Actual packaging leaving with gross physical shipments or returning externally, tracked by separate destination and status subledger. It is not net board Q, a second purchase or an automatic coproduct. Opening and closing empty/attached/reusable stock remain explicit.

- Selected flow: Polypropylene transport strapping
- Flow property / unit: Mass / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `finnfoam-xps-2021`

###### Outbound Self-adhesive paper identification label (`out_label`)

Actual packaging leaving with gross physical shipments or returning externally, tracked by separate destination and status subledger. It is not net board Q, a second purchase or an automatic coproduct. Opening and closing empty/attached/reusable stock remain explicit.

- Selected flow: Self-adhesive paper identification label
- Flow property / unit: Mass / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `finnfoam-xps-2021`

##### Waste flows

###### Waste polyethylene wrapping film (`waste_wrap`)

Only the actual separately identified waste stream sent to its documented destination. Include handling of opening FG, failed shipments and returns; internal reuse/rework is paired and cancels physically, but its real added burdens remain.

- Selected flow: Waste polyethylene wrapping film
- Flow property / unit: Mass / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `finnfoam-xps-2021`

###### Waste wooden pallet (`waste_pallet`)

Only the actual separately identified waste stream sent to its documented destination. Include handling of opening FG, failed shipments and returns; internal reuse/rework is paired and cancels physically, but its real added burdens remain.

- Selected flow: Waste wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `finnfoam-xps-2021`

###### Waste polypropylene strapping (`waste_strap`)

Only the actual separately identified waste stream sent to its documented destination. Include handling of opening FG, failed shipments and returns; internal reuse/rework is paired and cancels physically, but its real added burdens remain.

- Selected flow: Waste polypropylene strapping
- Flow property / unit: Mass / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `finnfoam-xps-2021`

###### Waste paper identification label (`waste_label`)

Only the actual separately identified waste stream sent to its documented destination. Include handling of opening FG, failed shipments and returns; internal reuse/rework is paired and cancels physically, but its real added burdens remain.

- Selected flow: Waste paper identification label
- Flow property / unit: Mass / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `finnfoam-xps-2021`

###### Silicone-coated paper label release liner (`waste_liner`)

Only the actual separately identified waste stream sent to its documented destination. Include handling of opening FG, failed shipments and returns; internal reuse/rework is paired and cancels physically, but its real added burdens remain.

- Selected flow: Silicone-coated paper label release liner
- Flow property / unit: Mass / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `finnfoam-xps-2021`

###### Rejected unfaced XPS board (`rejected_fg`)

Only the actual separately identified waste stream sent to its documented destination. Include handling of opening FG, failed shipments and returns; internal reuse/rework is paired and cancels physically, but its real added burdens remain.

- Selected flow: Rejected unfaced XPS board
- Flow property / unit: Mass / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stock_delivery`
- Sources: `finnfoam-xps-2021`

##### Elementary flows

###### CO2 from FG conditioning and storage (`co2_air_fg`)

Measure CO2 loss from actual manufacturing cohorts and opening FG up to dispatch or other exit, retaining closing FG cell-gas stock. Do not copy the case report of complete CO2 loss in one month; age, state, temperature, ventilation and origin are actual records. This is not combustion CO2.

- Selected flow: Carbon dioxide to air from physical blowing agent
- Flow property / unit: Mass / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species_delivery`
- Sources: `finnfoam-xps-2021`

###### Ethanol from FG conditioning and storage (`ethanol_air_fg`)

Actual ethanol release only, with independent species concentration/volume or retained-species evidence and inherited opening/closing FG amounts. The case source omits some downstream ethanol impacts; that is not a permission to omit real foreground ethanol. Keep un-emitted delivered ethanol in the board subaccount for downstream disclosure.

- Selected flow: Ethanol to air
- Flow property / unit: Mass / kg
- Amount rule: a_i, the single final result defined in section 8; do not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species_delivery`
- Sources: `finnfoam-xps-2021`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_context | all inventory rows | The hierarchy applies within the declared attributional scenario to actual residual multifunctionality; complete preceding conditions remain part of every allocation rule. | `jrc-ilcd-2010` |
| a_scenario | all inventory rows | Apply these allocation rules only to an attributional inventory in a declared scenario requiring partitioning; they do not establish a consequential substitution model or a product comparison. The industrial sources support manufacturing and supply forms, not this allocation hierarchy. | `jrc-ilcd-2010` |
| a_subdivide | all inventory rows | First assign dedicated meters, batches, formulation purchases, waste measurements and transport/service records to their specific product. Subdivide physically distinguishable operations; use evidenced virtual subdivision for exclusive exchanges when complete subdivision is infeasible. Keep the reason, data and residual shared pool for each exchange; do not allocate a whole factory uniformly. | `jrc-ilcd-2010` |
| a_causality | all inventory rows | For every genuinely residual shared exchange identify the determining physical causal relationship: quantify how changes in the delivered functions change that exchange, including throughput/heat duty for melting or chilling and occupancy-duration for storage where supported. A convenient mass, volume, time or energy ratio alone is not causal proof. Use different justified criteria for different exchanges; preserve complete pool reconciliation and uncertainty. | `jrc-ilcd-2010` |
| a_residual_value | all inventory rows | Only if a residual exchange has no identifiable determining physical causality, document that conclusion and use contemporaneous market values of the co-functions at the same common process gate and actual state, quantity, quality and packaging condition. Remove separately attributable downstream finishing before comparison. Record quantities, values, period, currency, gate, evidence and sensitivity. Missing or negative/ambiguous values require review rather than a fabricated ratio. Never choose physical or economic allocation freely. | `jrc-ilcd-2010` |
| a_recovery | all inventory rows | Internal regrind and reusable packaging are transfers with real handling burden, not coproducts or avoided virgin supply. Classify actual secondary outputs by function, quality, ownership, destination and waste/product status; subdivision and the preceding exchange-specific hierarchy apply only to genuine co-functions. Do not import the case EPD annual mass shares, zero production-waste assumption, incineration credits or one-month emission assumption. | `jrc-ilcd-2010` |
| asset_manufacture_conservation | existing capital/reusable manufacture attribution | Within the applicable allocation decision context, original manufacture burden attributed across uses of actual capital equipment or reusable articles already included in foreground production, packaging or observed services uses one persistent same-asset ledger across all crops, products, cohorts, manufacturing/postrelease services, owners and observation periods. D is its supported whole installed service: all realized historical service plus supported remaining service in the same units as actual beneficiary use u; D must be finite and positive. Period capacity, remaining-only capacity, the physical asset/article mass alone, or current-period product Q alone is not D; supported whole-service throughput in mass units may be used when it demonstrates the causal service and matches u. This does not amortize the manufactured reference product over downstream life or change its declared reference gate/Q. The fractions u/D and all previously assigned manufacture shares together must never exceed 1. Changes of window, custody, provider or repair never restart the original manufacture balance. Replacements have distinct identities and only their real new manufacture vectors; actual repair and treatment increments remain separately accounted. Revised capacity evidence requires transparent reconciliation of prior shares and sensitivity, not a fresh ledger. Keep full physical mass and stock movements independent of burden shares. Unknown D, prior shares or beneficiary coverage requires review and no final manufacture-attributed amount; no assumed lifetime, utilization, zero or arbitrary division is permitted. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory.

All protocol fields are unnormalised raw records. aggregation_rule names the final reference basis only and points to the single normalize_once operation defined below; it does not instruct another division. Record actual absence with evidence, not an invented zero.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_exchange | manufacture | individual material and waste | weighing; purchase; issue; waste | row_id; supplier grade; lot; original quantity and unit; assay; date; opening and closing raw stock; actual issues; waste ticket; destination | Use calibrated weighing and traceable delivery/issue/return tickets. Reconcile whole purchased formulations once and maintain constituent subaccounts. Record every actual stream and non-occurrence evidence separately; retain raw totals before attribution or normalization. | kg; original units | each lot and event | complete actual reporting interval including failed/idle periods | actual line and stores | per 1 kg reference flow | calibration; invoices; stock reconciliation; tickets; formulation assay |
| cp_energy | manufacture | individual electricity and actual additional utility | meter readings; machine logs | meter_id; row_id; start/end readings; time interval; original unit; equipment state; shared pool; activity driver; supply boundary | Read submeter differences and real power logs; integrate actual rate samples once. Attribute dedicated circuits before justified shared-pool decisions. Collect startup, idle, cleanup, cooling, regrinding and dispatch records without dividing by output. Add actual fuel/heat/refrigerant rows separately if present. | kWh; MJ; original units | continuous meters and every state transition | same complete periods as stock ledger | line and actual utility/warehouse boundary | per 1 kg reference flow | meter calibration; energy reconciliation; pool decision evidence |
| cp_energy_delivery | delivery | individual electricity and actual additional utility | meter readings; machine logs | meter_id; row_id; start/end readings; time interval; original unit; equipment state; shared pool; activity driver; supply boundary | Read submeter differences and real power logs; integrate actual rate samples once. Attribute dedicated circuits before justified shared-pool decisions. Collect startup, idle, cleanup, cooling, regrinding and dispatch records without dividing by output. Add actual fuel/heat/refrigerant rows separately if present. | kWh; MJ; original units | continuous meters and every state transition | same complete periods as stock ledger | line and actual utility/warehouse boundary | per 1 kg reference flow | meter calibration; energy reconciliation; pool decision evidence |
| cp_water | manufacture | cooling-water inlet return and blowdown | water meter; thermal state; treatment ticket | row_id; mass or integrated volume; rate flag; temperature; pressure; composition; density evidence; inlet/outlet; internal circulation; evaporation; blowdown; supplier water-energy agreement | Measure each external water port and thermal state independently; distinguish internal recycle from external Product return and waste to treatment from environmental discharge. Use an actual matched-state density or direct mass. Do not assume a steam system or copy nonexistent condensate. | kg; degC; original units | each actual operating interval | complete manufacturing periods | actual external utility ports | per 1 kg reference flow | water balance; state measurements; supplier contract; density source |
| cp_stock | manufacture | P WIP FG delivery and return burden vectors | calibrated weighing; cohort ledger; dispatch records | cohort_id; configuration; raw opening/closing WIP; raw opening/closing FG; trim and regrind; P; G; original delivery R0; current returned mass; original burden vector by row; incremental rework; retained CO2 and ethanol; age; rejects; destination | Weigh every lot on calibrated scales at handoff and dispatch and retain gross/tare records; link all stock and return events to unique original cohorts. Preserve the historical raw exchange vector independently of current purchases. Record original dispatch reversal and current returned physical state separately; reconcile manufacture, FG and combined gates before allocating any remaining pool. | kg; original exchange units | every handoff dispatch return and reporting boundary | current period plus actual historical cohort records | line FG stores and actual factory dispatch gate | per 1 kg reference flow | calibrated gross/tare; cohort traceability; full vector rollforward; acceptance and return evidence |
| cp_stock_delivery | delivery | P WIP FG delivery and return burden vectors | calibrated weighing; cohort ledger; dispatch records | cohort_id; configuration; raw opening/closing WIP; raw opening/closing FG; trim and regrind; P; G; original delivery R0; current returned mass; original burden vector by row; incremental rework; retained CO2 and ethanol; age; rejects; destination | Weigh every lot on calibrated scales at handoff and dispatch and retain gross/tare records; link all stock and return events to unique original cohorts. Preserve the historical raw exchange vector independently of current purchases. Record original dispatch reversal and current returned physical state separately; reconcile manufacture, FG and combined gates before allocating any remaining pool. | kg; original exchange units | every handoff dispatch return and reporting boundary | current period plus actual historical cohort records | line FG stores and actual factory dispatch gate | per 1 kg reference flow | calibrated gross/tare; cohort traceability; full vector rollforward; acceptance and return evidence |
| cp_species | manufacture | each chemical species and receiving medium | species measurements; retained-product tests; exhaust records | species; CAS; phase; origin; medium; point; concentration and response basis; original gas/liquid volume; rate flag; time; temperature; pressure; moisture correction; independently measured retained mass; capture; uncertainty | Use species-selective sampling with calibrated flow measurement and matched pressure/temperature/moisture basis; retain integrated volume as volume. Independently measure retained gases and composition over relevant ages. Establish independent total mass and carbon/other relevant elemental closure without assigning two unknowns from one residual. Total VOC/COD/TOC/PM indicators are not chemical identities. | kg; measured concentration; original volume/rate units | representative operating states plus each conditioning age window | all manufacture and FG intervals including idle and failures | actual vents fugitive points stocks and external ports | per 1 kg reference flow | calibration; speciation; sampling/state basis; independent assays; capture evidence; balance uncertainty |
| cp_species_delivery | delivery | each chemical species and receiving medium | species measurements; retained-product tests; exhaust records | species; CAS; phase; origin; medium; point; concentration and response basis; original gas/liquid volume; rate flag; time; temperature; pressure; moisture correction; independently measured retained mass; capture; uncertainty | Use species-selective sampling with calibrated flow measurement and matched pressure/temperature/moisture basis; retain integrated volume as volume. Independently measure retained gases and composition over relevant ages. Establish independent total mass and carbon/other relevant elemental closure without assigning two unknowns from one residual. Total VOC/COD/TOC/PM indicators are not chemical identities. | kg; measured concentration; original volume/rate units | representative operating states plus each conditioning age window | all manufacture and FG intervals including idle and failures | actual vents fugitive points stocks and external ports | per 1 kg reference flow | calibration; speciation; sampling/state basis; independent assays; capture evidence; balance uncertainty |
| cp_pack | delivery | each film pallet strap label and waste | individual packaging stock and destination ledger | packaging_id; composition; original units; measured configuration mass; opening empty; opening attached WIP/FG; opening reusable; purchases; external return received; closing empty/attached/reusable; gross physical shipment; external return out; waste; internal reuse | Weigh and reconcile each packaging form separately, including incoming supplier packaging and attached stock when relevant. Distinguish gross physical shipments from net board Q and external return receipts from purchases. Internal reuse cancels in the physical equation and carries its real service burden. No fixed reuse count or item-to-kg guess. | kg; original units | each packaging transaction and stock boundary | same delivery reporting interval and linked cohort histories | actual empty attached and reusable stores | per 1 kg reference flow | weighing; individual stock balance; return and waste records; service-life evidence |
| cp_transport | manufacture | one actual incoming road service | freight tickets; route and loading records | leg_id; material lot; mode; original mass; route distance; loading; empty movement; provider boundary; inherited delivery scope | Retain actual leg records and distinguish service activity from vehicle fuel already covered by a provider. Convert kg to tonnes and distance to km before attribution; collect raw activity only. Add other real transport modes as separate atomic service rows. | t*km; original units | each incoming delivery leg | actual supply reporting interval | actual supplier-to-foreground logistics boundary | per 1 kg reference flow | waybills; routing; loading; no overlap with supplied input dataset |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_once | gpps; carbon_dioxide; ethanol; colour_masterbatch; nucleating_masterbatch; modifier; electricity_mfg; cooling_water; gear_oil; freight; board_handoff; water_return; waste_board; waste_dust; waste_bag; waste_oil; cooling_blowdown; co2_air_mfg; ethanol_air_mfg; styrene_air; ps_air; water_vapour; fg_in; returned_board; wrap; pallet; strap; label; electricity_delivery; out_wrap; out_pallet; out_strap; out_label; waste_wrap; waste_pallet; waste_strap; waste_label; waste_liner; rejected_fg; co2_air_fg; ethanol_air_fg | a_i = A_i / Q. A_i is the raw exchange numerator after actual unit conversion, attribution and inherited stock/return corrections; Q is net accepted dispatch in kg. Execute this one division only when Q>0. Each card and aggregation field references this same result; delivered_board is the 1 kg reference identity, not a second division. | A_i; Q; cp_stock_delivery | a_i | `jrc-ilcd-2010` |
| raw_unit_conversion | all inventory rows | Convert original measured quantity into the row unit before attribution. Integrated liquid/gas volume times an independently evidenced matched-state density gives mass; true rate requires integration over the actual time interval first. Do not use total VOC or COD as a specific chemical mass, count as mass, or a secondary flow coefficient as physical density. | original_quantity; original_unit; state; density_evidence; rate_flag | converted_raw_amount | `finnfoam-xps-2021` |
| stock_vector_rollforward | all inventory rows | For each exchange i retain opening WIP/FG/regrind burdens, current attributable additions and traceable return burden reversals; reconcile them to closing WIP/FG/regrind, gross delivered cohorts and other real exits at the same gates. A_i for net delivery is gross delivered historical/current vector less the exact original vector of reversed deliveries, including real incremental rework only once. Do not expense all current production when some remains in closing stock; do not erase opening burdens or substitute current average burdens. | opening_vectors; current_raw_additions; closing_vectors; gross_dispatch_vectors; reversed_original_vectors; real_other_exit_vectors | A_i | `jrc-ilcd-2010` |
| net_delivery_gate | delivered_board | Q = G - R0, in kg at the declared accepted dispatch state. G is gross accepted outward product mass excluding packaging. R0 is the original delivered mass for traceable delivery reversals, not the current physical returned mass. Preserve cohort and period links and signed corrections; if Q<=0 retain loads without a unit result. | G; R0; cp_stock_delivery | Q | `jrc-ilcd-2010` |
| physical_gates | all inventory rows | Manufacturing: opening physical WIP/regrind plus actual material inputs and physical returns equals closing WIP/regrind plus handoff P plus waste and individual emissions. FG: opening FG plus P plus current physical customer returns equals closing FG plus gross physical outbound board plus rejects and individual storage emissions. Combine by cancelling internal P and paired internal transfers. Packaging is outside board mass, balanced separately. Independently reconcile polymer/material composition and relevant elements; cell-gas exchange and measured moisture remain explicit. | opening_physical_stocks; actual_inputs; actual_returns; closing_physical_stocks; P; gross_physical_outputs; species_outputs | gate_balance_residuals | `finnfoam-xps-2021` |
| packaging_balance | wrap; pallet; strap; label; out_wrap; out_pallet; out_strap; out_label; waste_wrap; waste_pallet; waste_strap; waste_label; waste_liner; waste_bag | For each packaging form: opening empty + opening attached WIP/FG + opening reusable + purchases + external return received = closing empty + closing attached WIP/FG + closing reusable + packaging with gross physical shipments + external return out + waste. Cancel internal reuse; preserve destination subledgers and actual handling burden. Never divide gross packaging departures by a supposed net-package count or put them inside board Q. | opening_pack_stocks; pack_purchases; external_returns_in; closing_pack_stocks; gross_pack_departures; external_returns_out; pack_waste | individual_pack_balance | `finnfoam-xps-2021`; `jrc-ilcd-2010` |
| species_closure | all inventory rows | For each species separately reconcile opening retained stock + purchased constituent content + actual formation/transfer = closing retained stock + delivered content + waste/treatment/recovery + measured release + actual destruction. This physical route has no assumed chemical formation. Use independently measured retained CO2 and ethanol or independent species measurements; one total mass loss cannot solve both. Keep air/water ingress and displaced cell gas explicit if material. Neither COD nor carbon balance alone proves molecular species. | species_inputs; independent_retained_assays; species_measurements; actual_destinations | species_residuals | `finnfoam-xps-2021`; `gabriel-xps-masterbatches` |
| asset_manufacture_share | existing capital/reusable manufacture attribution | For each included original asset manufacture vector B, f_current = u_current / D only after the persistent ledger verifies the supported whole installed-service denominator, all beneficiaries and prior assigned shares. Attribute f_current * B once to the actual beneficiary before the existing single reference normalization. Check prior_shares + all current/new beneficiary shares <= 1; carry the remaining original balance. Capacity revisions reconcile the historical ledger. Full physical asset/packaging mass and actual gross stocks/returns never receive f_current. Unknown D or history leaves the final attributed result unavailable, without suppressing actual repair/replacement/service burdens. | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | conserved attributed manufacture vector |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Confirm actual material supply form, entire formulation and native identity restrictions. An auxiliary UUID/provider gap requires completion before quantitative use but does not by itself negate the authored core route. EPS granules, welding CO2 proxies and chemically decomposing concentrates cannot be accepted through a name/classification match. | direct native restrictions; supplier specifications; raw assay; source-specific trials |
| dq_period | all inventory rows | Use actual site, technology, dates, complete periods and cohort histories; do not treat the historical 2019 EPD as current certification or its three-site supply mixes as the current factory. Preserve all failed acquisition/query/registration records outside canonical content and never interpret failure as no match. | meter periods; full stock histories; primary originals; original acquisition versus present extraction |
| dq_closure | all inventory rows | Report independent physical mass, relevant elemental and species balances with measurement uncertainty and investigation of residuals. Do not fit several unknown losses to one residual or turn missing measurements into zero. Keep process/FG/combined gates and each packaging balance consistent. | calibrated raw measurements; independent assays; reconciliation and uncertainty |
| dq_sources | all inventory rows | Distinguish qualitative route evidence, historical supplied-form examples and actual foreground quantities. No published recipe percentage, density, energy saving, total recovery or emission fraction is a default. Different suppliers are not the same SKU or factory. Scientific review and translation review remain separate from projection and measurement checks. | complete original context; actual supplier and foreground evidence; applicability record |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_evidence_scope | all inventory rows | Validation evaluates complete evidence and declared relationships. Real unknowns remain incomplete and require review; a schema or finite check cannot turn them into established factory facts. | `jrc-ilcd-2010` |
| v_scope | all inventory rows | Verify the exact scoped polymer, supply forms, physical CO2/ethanol route, absent facings/reinforcement/chemical blowing/added flame retardant, and all required qualifiers. Do not assert full CPC 36390 coverage or accept the native erroneous 36330 code as positive mapping. | `un-cpc3-2025`; `finnfoam-xps-2021`; `gabriel-xps-masterbatches` |
| v_quantity | all inventory rows | Confirm net accepted dispatch Q, exactly one linked reference output and one execution of normalize_once, raw-only collection, real original-unit conversions and complete attribution. Q<=0, untraceable original delivery reversals, missing historical vectors or unknown critical species relations prevent a defensible unit result; preserve actual data and report incompleteness. | `jrc-ilcd-2010` |
| v_balances | all inventory rows | Reconcile complete physical mass and relevant elements independently of species closure at manufacture, FG and combined gates; include retained gases, evaporation, returns, all stocks and every waste destination. Investigate nonclosure against uncertainty, not arbitrary fixed tolerance or fitted losses. External water returns require actual thermal state and supplier agreement. | `finnfoam-xps-2021` |
| v_packaging | all inventory rows | For each actual packaging form check opening/closing empty, attached and reusable stock, purchases, external returns, gross physical departures and waste. Internal reuse cancels physically and retains actual service burden. Packaging is excluded from net board Q; never net its gross departures against board returns. | `finnfoam-xps-2021`; `jrc-ilcd-2010` |
| v_allocation | all inventory rows | Inspect each residual shared exchange for dedicated assignment/subdivision, virtual subdivision, determining physical causality, and only then actual common-gate contemporaneous market value. Require documented residual pools and sensitivity; no fixed split, free choice or automatic recycling/carbon/energy credit. | `jrc-ilcd-2010` |
| v_completeness | all inventory rows | Check every typed flow card, description, qualifier, protocol cell, formula input/output, source field and source-id list against canonical Markdown, including full normative unit/heading/ancestor context and native restrictions. A schema/current-fingerprint or finite measurement pass does not establish source applicability, factory completeness, scientific approval or translation review. Report missing rows, evidence, unsupported relations and site data explicitly. | `jrc-ilcd-2010` |
| validate_asset_manufacture_conservation | existing capital/reusable manufacture attribution | For every included capital/reusable manufacture attribution verify same-asset continuity, whole installed service in matched units, all historical/current beneficiaries, prior assigned manufacture shares and cumulative share <= 1. Reject a reset by period, cohort, provider, owner or repair. Check distinct real replacement and incremental repair/treatment vectors separately and preserve gross physical mass. A missing denominator, unexplained previous allocation or incomplete beneficiary ledger requires explicit review and an unavailable final attributed amount; structural inspection cannot claim empirical completeness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Actual scoped material supply only; preserve net delivery and retained cell gas |
| allowed_use | Compatible physically extruded unfaced XPS board supply with actual grade and state disclosure |
| excluded_use | Generic all-plastics coverage; structural/faced assemblies; alternative blowing chemistries; equal thermal service claims from mass alone |
| required_metadata | actual polymer grade and GPPS identity; complete commercial formulation grades and constituent assays; CO2 origin and supply state; ethanol purity and water content; absence of chemical blowing agent and added flame retardant; closed-cell unfaced board construction; board dimensions and directly measured mass/density state; thermal and compression performance with test basis; actual site and electricity supply; manufacturing and FG accounting periods; dispatch gate and acceptance criteria; conditioning age and retained CO2/ethanol; WIP/FG cohorts and inherited exchange vectors; gross dispatch and original-delivery reversal links; individual packaging forms and reuse boundary |
| required_quality_disclosure | Historical versus actual sources; full route and allocation decisions; missing auxiliary identities/providers; stock and species uncertainty; unresolved measurements and omitted scope |
| update_trigger | Changed supply formulation or blowing chemistry; added FR/facing; changed dispatch gate; new recovery route; source revision or identity contradiction |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure and Explanatory Notes, 30 June 2025, PDF p.177 and adjacent pp.176–178; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Title-only classification context and narrower cellular-board residual interpretation; not manufacturing evidence or accepted mapping. |
| finnfoam-xps-2021 | literature | Finnfoam Oy / AB / UAB, Finnfoam XPS Insulation, RTS_113_21, published 2021-06-10, data year 2019, pp.2–6; expired 2026-06-04; https://finnfoam.lt/wp-content/uploads/2023/03/finnfoamxps_rts-epd_113-21.pdf | Historical raw-material-to-board route and conditioning/packaging evidence; independent foreground protocols control amounts. Do not transfer its allocation, emission omissions, zero-scrap, density or downstream-credit assumptions. |
| gabriel-xps-masterbatches | handbook | Gabriel-Chemie, Additive and Colour Preparations for Extruded Polystyrene Foams, collected sheets dated 1994–2010, pp.2–8 and 15–20; https://gabriel-chemie.com/storage/xps-foam_en.pdf | Whole supplied colour/inorganic nucleator/polymeric processing-aid formulations; physical versus chemical nucleation and historical halogenated/FR counterexamples. No same-SKU or CO2-recipe/dosage approval. |
| jrc-ilcd-2010 | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA — Detailed guidance, first edition March 2010, section 7.9, PDF pp.275–288 / printed pp.255–268; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional subdivision and exchange-specific determining causality followed by residual common-gate market value. PCR stock/return and collection rules are explicit operational requirements, not measured factory facts from ILCD. |
