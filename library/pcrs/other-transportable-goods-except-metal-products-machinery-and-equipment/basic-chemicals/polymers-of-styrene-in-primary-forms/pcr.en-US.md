---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.polymers-of-styrene-in-primary-forms
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# General-purpose polystyrene granules by continuous mass polymerization

## 1. Scope and Applicability

This method covers non-expanded, non-rubber-modified general-purpose polystyrene (GPPS) granules made from purchased styrene monomer by thermally initiated continuous-mass free-radical polymerization, vacuum devolatilization, monomer/solvent condensation and recovery, extrusion, cooling, pelletizing and accepted storage. The primary resin is supplied for subsequent conversion. Conversion, recovery loops, residual monomer, oligomers and delivered-pellet mass require product-specific accounting.

Exclude HIPS, polybutadiene-modified resins, expandable EPS beads, expanded or moulded articles, SAN/ABS/SBS copolymers, syndiotactic/coordination-catalysed PS, suspension/emulsion routes, waste-plastic regranulation and onsite styrene manufacture. Upstream EBSM/POSM monomer supply belongs to the purchased background, not the onsite polymerization route. The representative thermal route does not prescribe rubber, catalyst or chemical initiator additions. If actually used, reassess applicability and add each complete formulation and its independent species ledger before use; do not transplant HIPS or latex inventories.

Use `styrenics-ps-2022` sections 2.1–2.3 and `epa-ap42-ps-1991` sections 6.6.3.1–6.6.3.2.1/Figure 6.6.3-2 for physical scope and topology. The European industry average and historical US description supply no default site/SKU recipe, solvent content, residual monomer, yield or energy demand.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.polymers-of-styrene-in-primary-forms |
| classification_refs | CPC 3.0 34720; narrower GPPS scope; no accepted mapping implied |
| covered_products | Non-expanded GPPS primary granules from the declared thermal continuous-mass route |
| excluded_products | HIPS; EPS; foamed/moulded articles; styrenic copolymers; suspension/emulsion PS; regranulated waste; onsite monomer |
| representative_product | Transparent non-rubber-modified GPPS granules; actual grade and acceptance limits declared per dataset |
| production_route | Thermal continuous mass free-radical polymerization with vacuum devolatilization and recovery, then pelletizing |
| market_state | Net accepted supplied solid granules at producer gate, unpacked product mass; not dry-polymer or monomer-equivalent mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply GPPS primary resin for further conversion |
| How much | 1 kg accepted net supplied granules |
| How well | Meet measured declared grade acceptance; residual monomer, moisture, oligomers, additives and pellet size have no default |
| How long or cycle | Same grade, route and supplied state in the reporting period; no article service-life claim |
| reference_flow_link | out_gpps |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | polystyrene (general purpose) granulate (GPPS) `4f19f11e-7b3b-11dd-ad8b-0800200c9a66` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual site/geography and period; grade/SKU and thermal mass route; evidence of no rubber/blowing agent/copolymer; complete supplied state and net mass; measured residual monomer/solvent/oligomers/moisture and additives; molecular or melt-flow characterization with test conditions; pellet acceptance/rejection; recovery recycle and purge; supply and abatement boundaries |

Declare these qualifiers in dataset metadata, process notes, reference-flow comments or equivalent fields. The native reference flow specifies neither CAS, route nor supply location; absence of those fields does not establish arbitrary grade or provider compatibility.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use 1 kg accepted net supplied pellets as the one common basis; include actual residuals/additives/moisture, exclude packaging and free drainage. |
| whole_formulation | in_styrene, in_white_oil | Mass | kg | Purchased formulations are whole external commercial inputs; assay, active content and carrier water are constituent subledgers. Onsite blending records separately acquired ingredients and actual blending burdens without inventing an additional purchased formulation. |
| raw_units | all inventory rows | Native property | kg; MJ | Preserve raw-period records before convert_raw handles native units; density needs temperature/pressure/composition evidence and is not a secondary-property coefficient. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased inhibited styrene and actual commercial aids/solvents, onsite storage through accepted GPPS pellet dispatch |
| starting_condition_role | foreground_starting_point |
| product_classification_scope | Thermal-mass GPPS subset of CPC3.0 34720; other products in that leaf are not automatically covered |
| recursive_input_rule | Pair each internal recovered styrene/solvent/reworked PS transfer without new purchases or production; any purchased GPPS requires separate identity, origin and upstream burden and cannot hide a regranulation route |
| upstream_dataset_requirement | Independently matched backgrounds for actual monomer, each aid, energy, water, packaging and external treatment; disclose geography/year/technology/whole-formulation basis and missing coverage |
| disclosure | Disclose onsite reaction/devolatilization/recovery/pelletizing, external and onsite utilities/abatement, stocks/WIP, logistics, purge, releases and capital cut-offs; no automatic zero consumption or emission |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_operations | p_gpps | Include receipt/storage, blending, reactor circulation, vacuum devolatilization, condensation/distillation recovery, extrusion/cooling/pelletizing, acceptance/rework/stocks and attributable cleaning/abatement. Retain internal-loop amounts/compositions without duplicating external exchanges; monomer backgrounds cannot replace onsite polymerization. | `styrenics-ps-2022`; `epa-ap42-ps-1991` |
| boundary_complete | all inventory rows | Cards are common atomic interfaces, not a fixed recipe. Before dataset completion, add separate atomic rows and collection links for every actual other aid (including whole antioxidant/initiator formulations), solvent, fuel, refrigerant, packaging, treatment chemical, sludge or release species. Only demonstrated absence permits not_applicable; missing measurement is not zero. | `styrenics-ps-2022`; `epa-ap42-ps-1991` |
| boundary_water | p_gpps | Bulk GPPS is distinct from suspension/emulsion routes. Cooling-bath and seal-water loops are not aqueous reaction solvent. Record makeup, blowdown, entrainment, condensation, evaporation and stocks; distinguish wastewater transfers from post-treatment releases without duplicating whole wastewater and its constituents. | `styrenics-ps-2022`; `epa-ap42-ps-1991` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| p_gpps | Continuous-mass GPPS production, recovery and pelletizing | required | Declared thermal GPPS route; retain separate stage raw records | foreground | out_gpps; 1 kg |

Reaction, devolatilization/recovery and pelletizing form one aggregated foreground process p_gpps, with separate stage meters and accountable owners. Recovered loops and intermediate melt are not external terminal products.

### Process: Continuous-mass GPPS production (`p_gpps`)

#### Inputs

##### Product flows

###### Purchased styrene monomer (`in_styrene`)

Record the complete purchased commercial liquid, assay, inhibitor and water content, tank opening/closing stocks and actual issue to this route. An elemental emission is not a purchased monomer. Assayed styrene is a constituent ledger, not a second purchase.

- Selected flow: Styrene monomer, inhibited commercial liquid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reported exchange amount for this row from the sole period calculation in section 8; the linked protocol retains raw amounts and this card performs no second calculation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_feed`
- Sources: `styrenics-ps-2022`; `epa-ap42-ps-1991`

###### Purchased ethylbenzene (`in_ethylbenzene`)

Conditional separate solvent purchase only. Ethylbenzene already contained in purchased styrene or in internal condensate is a subledger, not an additional external input. Record actual use or documented absence.

- Selected flow: Ethylbenzene
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reported exchange amount for this row from the sole period calculation in section 8; the linked protocol retains raw amounts and this card performs no second calculation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_feed`
- Sources: `styrenics-ps-2022`; `epa-ap42-ps-1991`

###### Purchased toluene (`in_toluene`)

Conditional solvent purchase; native production mix at plant, CAS 108-88-3, no locationOfSupply or fixed route. Its CPC35499 classification conflicts with the specific chemical identity and remains disclosed metadata debt; the UUID establishes identity only, never supplier quantity or solvent fraction.

- Selected flow: Toluene `33ac34b7-d691-4eda-8563-daef49a05157`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reported exchange amount for this row from the sole period calculation in section 8; the linked protocol retains raw amounts and this card performs no second calculation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_feed`
- Sources: `styrenics-ps-2022`; `epa-ap42-ps-1991`

###### White mineral oil addition (`in_white_oil`)

Conditional processing aid: record the whole delivered oil or one identified commercial formulation, its composition and actual issue. Do not substitute an elementary oil emission or infer an oil dosage from the resin output.

- Selected flow: White mineral oil (petroleum)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reported exchange amount for this row from the sole period calculation in section 8; the linked protocol retains raw amounts and this card performs no second calculation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_feed`
- Sources: `styrenics-ps-2022`; `epa-ap42-ps-1991`

###### Purchased medium-voltage electricity (`in_electricity`)

Meter reaction circulation, vacuum, recovery distillation, extrusion, pelletizing, cooling, storage and attributable abatement. Match actual voltage, geography, year and provider. CN or BR native supply interfaces cannot silently serve an unspecified site.

- Selected flow: Medium-voltage alternating current
- Flow property / unit: Delivered energy / MJ
- Amount rule: Reported exchange amount for this row from the sole period calculation in section 8; the linked protocol retains raw amounts and this card performs no second calculation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: `styrenics-ps-2022`; `epa-ap42-ps-1991`

###### Purchased steam heat (`in_steam_heat`)

Conditional purchased heat at the declared delivery/condensate-return boundary. Use heat-meter data or measured steam mass and independently supported enthalpy difference. A gross calorific-value property does not by itself establish delivered steam heat. Do not add boiler fuel for the same purchased heat.

- Selected flow: Delivered process heat from steam
- Flow property / unit: Delivered energy / MJ
- Amount rule: Reported exchange amount for this row from the sole period calculation in section 8; the linked protocol retains raw amounts and this card performs no second calculation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: `styrenics-ps-2022`; `epa-ap42-ps-1991`

###### Deionised make-up water (`in_water`)

Use only for actual externally supplied deionised make-up water; native record has no geography, CAS or route declaration. Measure net additions to pellet cooling, seal water or direct contact separately from internal circulation. Other water qualities and onsite deionisation require their own actual inputs and burdens.

- Selected flow: de-ionised water `4f197bf0-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reported exchange amount for this row from the sole period calculation in section 8; the linked protocol retains raw amounts and this card performs no second calculation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `styrenics-ps-2022`; `epa-ap42-ps-1991`

###### Nitrogen blanketing gas (`in_nitrogen`)

Conditional tank or equipment blanketing. Preserve integrated meter volume and reference conditions; apply a supported density once, never multiply an integrated volume by operating time again. Do not infer zero or gas purity.

- Selected flow: Nitrogen gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reported exchange amount for this row from the sole period calculation in section 8; the linked protocol retains raw amounts and this card performs no second calculation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: `styrenics-ps-2022`; `epa-ap42-ps-1991`

###### Polyethylene dispatch bag (`in_bag`)

Conditional complete PE bag for supplied pellets; native CAS9002-88-4, production mix at plant, no specified geography or grade. Weigh actual bags; no default count-to-mass factor. Exclude packaging mass from Q. Other packaging components require separate atomic rows.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reported exchange amount for this row from the sole period calculation in section 8; the linked protocol retains raw amounts and this card performs no second calculation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `styrenics-ps-2022`; `epa-ap42-ps-1991`

#### Outputs

##### Product flows

###### Accepted supplied GPPS pellets (`out_gpps`)

Terminal reference output: the actual accepted net supplied resin including declared residual monomer, additives and measured moisture, excluding packaging and free drainage. Native GPPS granulate record declares neither CAS, geography, route, specific SKU nor additional properties; it supplies a broad physical identity only. Factory grade, acceptance and thermal continuous-mass route must be established independently.

- Selected flow: polystyrene (general purpose) granulate (GPPS) `4f19f11e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_output`
- Sources: `styrenics-ps-2022`; `epa-ap42-ps-1991`

##### Waste flows

###### Recovery-column bottoms purge (`out_bottoms`)

Actual external purge containing measured styrene, ethylbenzene and oligomers; characterize composition, water, destination and hazard. Internal recovery is not waste. Offsite fuel sale needs separate co-product classification and allocation evidence; do not assume a fuel credit.

- Selected flow: Styrene-recovery distillation bottoms
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reported exchange amount for this row from the sole period calculation in section 8; the linked protocol retains raw amounts and this card performs no second calculation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residues`
- Sources: `styrenics-ps-2022`; `epa-ap42-ps-1991`

###### Discarded GPPS pellets (`out_ps_reject`)

Only irreversibly discarded pellets sent outside this foreground. Record rework separately without treating internal remelt as new purchases or a second accepted output. A native polystyrene-wastes Product flow is not automatically this waste exchange.

- Selected flow: Discarded off-spec GPPS pellets
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reported exchange amount for this row from the sole period calculation in section 8; the linked protocol retains raw amounts and this card performs no second calculation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residues`
- Sources: `styrenics-ps-2022`; `epa-ap42-ps-1991`

###### Aqueous effluent to treatment (`out_wastewater`)

Wastewater delivered to an external treatment process: measure whole effluent, species and treatment destination. Its water and dissolved styrene are constituent ledgers, not duplicate whole waste flows or direct releases to nature. Onsite treatment requires actual treatment inputs and final discharge species before completion.

- Selected flow: Styrene-containing process wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reported exchange amount for this row from the sole period calculation in section 8; the linked protocol retains raw amounts and this card performs no second calculation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `styrenics-ps-2022`; `epa-ap42-ps-1991`

##### Elementary flows

###### Styrene released to air (`out_styrene_air`)

CAS100-42-5, emissions to air unspecified. Count actual post-control stack and fugitive styrene from storage, feed, vacuum, recovery and pellet handling, without adding pre-control gas or internal condensate. Record actual compartment; replace this unspecified-air identity where a more specific supported compartment is required.

- Selected flow: styrene `08a91e70-3ddc-11dd-9910-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reported exchange amount for this row from the sole period calculation in section 8; the linked protocol retains raw amounts and this card performs no second calculation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `styrenics-ps-2022`; `epa-ap42-ps-1991`

###### Ethylbenzene released to air (`out_ethylbenzene_air`)

CAS100-41-4, emissions to air unspecified; determine actual species independently from sampling and flow records. Ethylbenzene impurity or optional solvent losses are not all styrene, and cannot be fitted to a carbon closure residual.

- Selected flow: ethyl benzene `fe0acd60-3ddc-11dd-a2eb-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reported exchange amount for this row from the sole period calculation in section 8; the linked protocol retains raw amounts and this card performs no second calculation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `styrenics-ps-2022`; `epa-ap42-ps-1991`

###### Toluene released to air (`out_toluene_air`)

CAS108-88-3, emissions to air unspecified; apply only where toluene is actually present. Use a separate post-control species measurement; never assign total VOC, COD or a neighbouring chemical UUID to this row.

- Selected flow: toluene `4d9a8790-3ddd-11dd-9bb5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reported exchange amount for this row from the sole period calculation in section 8; the linked protocol retains raw amounts and this card performs no second calculation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `styrenics-ps-2022`; `epa-ap42-ps-1991`

###### Water vapour released to air (`out_water_vapour`)

CAS7732-18-5, emissions to air unspecified. Separately quantify physical evaporation and any independently demonstrated chemical water formation/consumption. Pellet quenching, drying or steam condensation changes phase; it does not prove addition polymerization generates water.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reported exchange amount for this row from the sole period calculation in section 8; the linked protocol retains raw amounts and this card performs no second calculation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `styrenics-ps-2022`; `epa-ap42-ps-1991`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | p_gpps | First separate GPPS grades, HIPS/EPS changeovers and utilities by independent meters and work orders. Retain target-grade startup/shutdown, cleaning, failures and discard burdens; successful operating hours alone are not a completeness boundary. | `styrenics-ps-2022`; `epa-ap42-ps-1991`; `jrc-ilcd-allocation-2010` |
| allocation_recovery | p_gpps | Internal reuse is not a co-product and earns no substitution credit. Externally sold recovered styrene or bottoms fuel requires independent commodity quality/destination evidence and subdivision first; allocate inseparable burdens using a demonstrated causal physical relation. If unavailable, disclose and independently review an economic method and sensitivity, without default mass/price shares. Complete physical closure before allocation. | `styrenics-ps-2022`; `epa-ap42-ps-1991`; `jrc-ilcd-allocation-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Every collection_method retains unnormalized raw-period records and never executes A/Q. Only normalize_period owns normalization; cards and aggregation_rule describe that same reported result; aggregation states reporting granularity, not an instruction to divide during collection. Each protocol owner is an actually assigned site person or signed accountable role.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | p_gpps | out_gpps | acceptance_and_stock_ledger | lot ID; grade/SKU; thermal route; acceptance/rejection; net supplied mass; tare/free drainage; residual styrene/solvents/oligomers/moisture/additives; opening/closing finished stock; sales/returns/rework/WIP links | Owner: production QA and warehouse. Retain unnormalized calibrated lot weights, lab results, acceptance events and stock movements; reconcile production against dispatch and finished stocks. Do not divide by Q. | kg; mass fraction; test conditions | each lot and each stock movement | one complete matched production period including failed/zero-output runs and adjacent-period carry links | actual line, grade and supplied state | Q is unique positive newly accepted production of the same grade/route/state in the matched cohort, reconciled to dispatch plus closing minus opening accepted stock with returns/rework corrections; cp_output does not normalize exchanges. A reaccepted return is counted once only. | calibration; signed acceptance; lot uniqueness; stock reconciliation |
| cp_feed | p_gpps | in_styrene; in_ethylbenzene; in_toluene; in_white_oil | receipts_tank_issue_and_assay | purchase and issue lot IDs; full formulation mass; active fractions; water/inhibitor/impurity; opening/closing tank stock; internal recovered monomer/solvent; purge; stage; failed-run links | Owner: materials custodian and laboratory. Retain whole delivered formulation and raw tank/issue/assay records in original units, including offspec runs and corrections; separate external receipts from internal recovery. No per-kg division. | kg; m3; density at actual conditions; mass fraction | each delivery, issue and assay | same full period as cp_output plus opening/closing WIP burden carry | actual supplier, tank, recipe and reactor train | per 1 kg reference flow | invoices; weighbridge; calibrated tank; supplier COA; independent assay; formulation closure |
| cp_utilities | p_gpps | in_electricity; in_steam_heat; in_nitrogen | meter_and_delivery_records | stage and timestamp; meter readings and multipliers; native units; voltage; heat delivery/return boundary; steam pressure/temperature/enthalpy; gas volume basis; integrated-vs-rate flag; shared-load allocation; failures; WIP links | Owner: site utilities engineer. Preserve raw start/end meters or rates with durations, integrated volumes, invoices and stage logs. Retain all target-related failed/zero-output operation, recovery, cleaning and abatement. Do not divide by production. | kWh; MJ; kg; m3 with conditions; rates with duration | continuous logs with period-end reconciliation | same full period and carry links as cp_output | reaction, recovery, extrusion/cooling, storage and attributable common services | per 1 kg reference flow | meter calibration; invoices; heat-state evidence; allocation rationale; downtime logs |
| cp_water | p_gpps | in_water; out_wastewater; out_water_vapour | water_balance_and_sampling | source and quality; raw makeup; recirculation; seal/quench loops; drains; evaporation; condensate; wastewater wet mass; species concentrations; actual reaction-water evidence; opening/closing water stocks; destination | Owner: water/effluent engineer and laboratory. Retain independent raw intake/outlet meters, wet mass, temperature/density and representative sampling before normalization; no inferred outlet or reaction water from a common closure residual. | kg; m3; mass fraction; concentration with units | meters continuously; event-linked representative samples | same complete period including cleaning, failures and WIP changes | declared external supply, direct contact and wastewater delivery boundary | per 1 kg reference flow | meter calibration; sample chain; moisture analyses; phase-change and reaction-water evidence |
| cp_pack | p_gpps | in_bag | packaging_issue_ledger | PE bag identity; counts; measured unit masses; damaged/returned bags; opening/closing stocks; lot linkage; other packaging components | Owner: dispatch packaging custodian. Preserve raw counts and independently weighed bag masses, issues and losses with batch links; no output-normalized collection. | count; kg per measured bag; kg | each issue and representative lot weighing | same matched period including losses and returns | actual supplied pellet packaging system | per 1 kg reference flow | weighing records; issue/return reconciliation; composition certificate |
| cp_residues | p_gpps | out_bottoms; out_ps_reject | waste_manifest_and_composition | stream ID; raw wet mass; water; styrene/ethylbenzene/oligomer content; destination; recovered-vs-purged status; rework; rejected lots; stock changes | Owner: recovery supervisor and waste manager. Preserve unnormalized weighed purges, waste transfers and independent composition samples; retain failures and returned/reworked lots without calling them new product. | kg; mass fraction | each purge and transfer with representative samples | same complete period with residue stocks and burden carry | actual recovery and external waste/recovery destination | per 1 kg reference flow | waste tickets; destination receipts; sampling; recovery reconciliation |
| cp_emissions | p_gpps | out_styrene_air; out_ethylbenzene_air; out_toluene_air | post_control_species_and_fugitives | species; CAS; control boundary; stack/fugitive source; air subcompartment; flow and concentration conditions; duration; integrated flag; sampling; capture/destruction; startup/failure periods | Owner: site environmental engineer and accredited sampling laboratory. Preserve raw post-control species concentrations, measured gas flow/time or integrated gas amount and fugitive evidence. Do not use COD or total VOC as a specific chemical mass and do not divide by Q. | kg; mg/m3 with conditions; m3; time for rates only | continuous where available plus event-representative tests | complete same period including startups, failures, shutdowns and abnormal releases | storage, feed, reactor vents, vacuum/recovery and pellet handling to actual air compartment | per 1 kg reference flow | test report; raw meter logs; detection limits; calibration; control status; fugitive method |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| convert_raw | all inventory rows | Before normalization only, convert native raw amounts: tonnes to kg; integrated liquid m3 times measured density at matched composition/temperature; integrate rates with corresponding duration, never multiply an integrated volume by time again; derive species mass from independent concentration and volume at consistent conditions; kWh times 3.6 gives MJ, while steam delivered heat needs independently supported actual enthalpy difference. Native property factors establish neither material density nor supplier amounts. | cp_feed; cp_utilities; cp_water; cp_pack; cp_residues; cp_emissions | converted raw-period amounts | `styrenics-ps-2022`; `epa-ap42-ps-1991` |
| match_period | all inventory rows | Retain complete physical period balances and trace each exchange numerator A_e to the target newly accepted production using lots/stocks/work orders. Include related failures/zero-output runs, startup, losses, rework and opening-WIP carried burdens released this period; deduct only the same explicitly traced burdens carried into closing WIP/other products. Opening/closing WIP needs mass, conversion/composition and accumulated burden by exchange, not blind mass subtraction from energy. Pair internal recovery/rework without repeating first inputs or reaccepted returns as new production. Keep physical and attributable burden ledgers separately. Retain zero-Q periods with explicit subsequent attribution, without deletion or division by zero. | converted raw-period amounts; cp_output; WIP burden ledger; lot genealogy | A_e; Q; matched-period audit ledger | `styrenics-ps-2022`; `epa-ap42-ps-1991` |
| normalize_period | all inventory rows | Sole normalization owner: after convert_raw and match_period, divide each numerator A_e once by the same cohort positive accepted supplied output Q in kg, reporting exchanges per 1 kg reference flow. Cards and aggregation_rule point to that same result without another division; out_gpps is fixed at 1 kg. Q must be positive and includes measured supplied-state residuals/additives/moisture, excludes packaging/free drainage, and cannot be replaced by feed mass, dry polymer, sales stock release or unaccepted quantity. | A_e; Q; convert_raw; match_period | single per-reference exchange report | `styrenics-ps-2022`; `epa-ap42-ps-1991` |
| close_species | p_gpps | Before allocation, independently close total physical mass and relevant C/H/O elements: external inputs plus opening stocks equal actual outputs plus closing stocks; internal loops cancel. Separately build an actual species/reaction ledger from feed composition, conversion/polymer and oligomers, residual monomer/solvent, purge and speciated releases. The main n C8H8 to (C8H8)n addition forms no chemical water; ideal atom correspondence is not a 1:1 actual yield or zero residual monomer. Any side-reaction/initiator/abatement water formation or consumption needs independent reactions, species and extent evidence; physical condensation/evaporation/structural or free-water changes remain separate. Never solve unknown reaction water and an unknown outlet from one closure residual. Retain discrepancies as uncertainty/investigation, not COD or residual-fitted species. | cp_feed; cp_output; cp_water; cp_residues; cp_emissions; physical stock ledger | independent physical elemental and actual species/water balances | `styrenics-ps-2022`; `epa-ap42-ps-1991` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | out_gpps | Trace actual grade, thermal route, pellet state and full acceptance criteria to the same lots; neither neighbouring plastic UUIDs nor absent native CAS establish them. | lot COA; route/recipe records; supply and acceptance signatures |
| quality_period | all inventory rows | Include failures/zero-output runs, returns/rework, opening/closing WIP and carried burdens once and explain period mismatches. | physical and burden ledgers; work orders; stocks; unique normalize_period report |
| quality_limits | all inventory rows | Match every native name component, geography, route, grade, medium, property and reference unit to measurements; UUIDs are not providers or quantities. Disclose toluene classification debt, unspecified geography/grade and unresolved UUID/background coverage. | complete native identity; provider/background comparison; sampling/calibration and uncertainty |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | out_gpps | Reject HIPS/EPS/copolymer/foamed-article substitution; the unique out_gpps terminal Product output must agree with the reference UUID. Preserve intermediates and real co-products without renaming to hide shared UUIDs. | `styrenics-ps-2022`; `epa-ap42-ps-1991` |
| validate_measurement | all inventory rows | Check raw periods, native conversions, complete WIP carry, unique positive Q and the sole normalize_period report. Collection must not execute A/Q; cards/aggregation cannot normalize again. Missing data, unexplained imbalance or unsupported conversion makes the concrete dataset incomplete. | `styrenics-ps-2022`; `epa-ap42-ps-1991` |
| validate_completeness | p_gpps | Check all actual atomic exchanges and background coverage, whole formulations without duplicate procurement, independent physical/element and species/reaction-water ledgers, internal recycle versus external purge and pre/post-control boundaries; Schema or UUID checks do not establish scientific approval. | `styrenics-ps-2022`; `epa-ap42-ps-1991` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Upstream supply of GPPS pellets of the declared grade, route, state and geography |
| allowed_use | LCA of compatible resin supply after applicability verification and complete upstream/treatment linking |
| excluded_use | No foam/moulded functionality, HIPS/EPS/copolymer substitution or functional material ranking solely from per-kg resin results |
| required_metadata | period; site; grade/recipe and route; supplied state/acceptance; reference UUID/unit; stocks/WIP/zero-output; all operation/supply/abatement boundaries; background versions/coverage; allocation and sources |
| required_quality_disclosure | measured versus estimated data; native limits/classification debt; residual monomer/solvent/moisture; sampling representativeness; detection/meter uncertainty; physical/species imbalance; unmatched UUID/background and independent scientific review state |
| update_trigger | change in grade/feed/initiation/solvent/supply or abatement boundary, equipment or acceptance; new residual/moisture evidence; identity/property/background revision |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| styrenics-ps-2022 | literature | Styrenics Circular Solutions/PlasticsEurope, General-Purpose Polystyrene (GPPS) and High-Impact Polystyrene (HIPS), November 2022, sections 2.1–2.3, PDF pp.9–10. https://www.styrenics.info/wp-content/uploads/2022/12/221107_Eco-profile_PS.pdf | GPPS/HIPS physical distinction, primary granule delivery and continuous mass/devolatilization/recovery/pelletizing. Qualitative European-industry scope only; no average recipe, numerical factor, background, yield or energy default and no HIPS rubber passage applied to GPPS. |
| epa-ap42-ps-1991 | official_guidance | US EPA, AP-42 Section 6.6.3 Polystyrene, September 1991, reformatted January 1995; 6.6.3.1–6.6.3.2.1 and Figure 6.6.3-2, PDF pp.1–5. https://www.epa.gov/sites/default/files/2020-10/documents/c06s06-3.pdf | Thermal continuous mass route, monomer recovery/vents/oligomer purge and cooling/pelletizing; independent GPPS/HIPS/EPS boundary support. Historical US topology, not current site data; no emission factors, temperature, conversion or negligible-emission claims adopted. |
| jrc-ilcd-allocation-2010 | official_guidance | European Commission JRC, ILCD Handbook, General guide for Life Cycle Assessment, Detailed guidance, first edition March2010, §7.9.3, printed257–258/PDF277–278; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional virtual subdivision, determining physical causality and residual process-gate market value support the allocation-method choice. No GPPS recipe, fixed mass/price share, off-grade cut-off, recovered-material substitution credit or full PEF/CFF approval is adopted. |
