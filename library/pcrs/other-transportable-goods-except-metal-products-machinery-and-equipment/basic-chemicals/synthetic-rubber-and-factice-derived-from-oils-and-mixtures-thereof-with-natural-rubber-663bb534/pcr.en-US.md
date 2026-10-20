---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.synthetic-rubber-and-factice-derived-from-oils-and-mixtures-thereof-with-natural-rubber-663bb534
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Non-oil-extended 23% bound-styrene E-SBR dry rubber by emulsion polymerization

## 1. Scope and Applicability

This method covers redox-initiated emulsion polymerization of styrene and 1,3-butadiene, monomer recovery, salt/sulfuric-acid coagulation, washing, mechanical dewatering, drying and bale quality release of uncured, non-oil-extended E-SBR with 23% bound styrene. Latex is an intermediate, not the reference product. Declare temperature regime, actual grade, composition and acceptance independently; do not pool hot/cold regimes without disclosure. One integrated process represents these actual stages, whose records remain separately collected.

Exclude solution SBR, SBS, BR, NBR, EPDM, IIR, commercial latex, oil-extended or carbon-black masterbatch, natural-rubber mixtures, factice, waste-plastic recovery, tyres and compounded/vulcanized articles. Sharing CPC34800 does not establish interchangeability. The 1982 and 1996 US EPA sources support route and material roles only: historic conversion, temperature, recipe proportions, emission factors and control efficiencies are not site defaults. The 1996 report states that its principal information predates 1986 and cannot represent every facility. Patents support specific additive roles, not actual purchases or quantities. [epa-ap42-sbr; epa-sbr-1996; wo-shortstop-2014; us-stabilizer-2010]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.synthetic-rubber-and-factice-derived-from-oils-and-mixtures-thereof-with-natural-rubber-663bb534 |
| classification_refs | CPC 3.0:34800; narrow subset; positive mapping requires separate controller acceptance |
| covered_products | 23% bound-styrene, non-oil-extended uncured E-SBR dry bales |
| excluded_products | Latex, other elastomers, factice, oil-extended/masterbatch and vulcanized goods; section 1 |
| representative_product | Actual assayed 23% bound-styrene E-SBR dry rubber; not an assumed nominal-23.5% 1502 grade |
| production_route | Redox emulsion polymerization; shortstop; butadiene flash recovery and styrene steam stripping/recovery; salt/sulfuric-acid coagulation; rinsing/pressing; drying/baling/release |
| market_state | Uncured non-oil-extended dry rubber with actual retained moisture and stabilizer; packaging excluded from net rubber mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Quality-released dry E-SBR of the same grade and route |
| How much | 1 kg net as-supplied dry rubber |
| How well | 23% bound styrene; actual moisture, ash, soap/acid, stabilizer and Mooney viscosity satisfy declared acceptance specification; non-oil-extended and uncured |
| How long or cycle | One complete matched reporting period and cohort, counted at first positive quality release; no service-life claim |
| reference_flow_link | product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Styrene butadiene rubber `0387054c-15d6-4e16-9f8f-0766754a653a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual grade and assay evidence for 23% bound styrene; emulsion polymerization and redox system; hot/cold regime and temperature history; uncured dry form; non-oil extension and stabilizer; actual moisture and residual monomers; first quality-release gate; matched cohort Q and complete period; WIP and finished-stock carryover; actual site and supply geography; packaging and dispatch boundary |

Declare every required qualifier in foreground metadata, process notes, reference comments or equivalent fields.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is unique positive net dry-rubber mass first quality-released for the matched product/route/state cohort, including actual retained water/stabilizer and excluding packaging. Deduplicate bale/lot IDs; reacceptance creates no new Q. Q is neither shipment mass nor pure-polymer mass. |
| release_stock | all inventory rows | Mass | kg | Production output already includes released Q: do not add closing finished stock of that same Q as another production output. Keep a separate warehouse/dispatch ledger: opening finished stock + release receipts + actual returns = deliveries + closing stock + actual losses. Cancel release handoffs on consolidation and carry lot burdens. Retain included storage, packaging, handling and dispatch burdens with attribution periods; never impose deliveries = Q. Changing to a net-delivery gate requires rebuilding denominator and opening/closing finished-stock burden carryover before reporting. |
| wet_formulation | all inventory rows | Mass | kg | Purchase each whole external solution/formulation once; active, solvent, carrier water and hydration water are composition subledgers. Onsite preparation records separately acquired components, preparation energy and loss without another purchase of the prepared formulation. Convert intermediate latex and dry rubber using actual solids/moisture measurements. |
| unit_conversion | all inventory rows | Mass / Energy / Volume | kg; MJ; m3 | Convert tonnes to kg by 1000 and kWh to MJ by 3.6. Convert liquid volume with measured-condition density. Rate times actual duration is valid; integrated volume receives no further duration factor. Keep steam mass, enthalpy and condensate separate; a secondary-property coefficient is not density. |
| species_water | all inventory rows | Mass | kg | Check physical total mass and C/H/O/S/Na/Cl plus elements of the actual initiator system separately. Do not impose condensation water on addition polymerization. Any water formation/consumption in soap acidification, redox, inhibition, combustion or treatment requires independent species/reaction and measurement evidence; evaporation, hydration, free water and condensation are distinct transfers. Never fit unknown reaction water and an unknown outlet to one residual, or use COD/theoretical yield instead. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Receipt of fresh inhibited monomers and identified whole auxiliaries/utilities; not purchased-latex receipt |
| starting_condition_role | foreground_collection_boundary |
| product_classification_scope | Only the primary dry E-SBR subset defined here within CPC34800 |
| recursive_input_rule | Cancel internal latex, recovered monomer, mother liquor and rework transfers; external rubber/latex must declare upstream and carried burdens rather than recursively referencing this output |
| upstream_dataset_requirement | Match actual chemicals/whole formulations, steam mass/enthalpy, grid and waste-treatment boundaries; UUID identity supplies no quantity |
| disclosure | Disclose site, period, stages, hot/cold regime, outsourced treatment, included finished storage/packing/loading, carried burdens and exclusions |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_stages | all inventory rows | Include monomer storage/inhibitor removal, formulation preparation, polymerization/refrigeration, shortstop, flash/stripping with compression/condensation/absorption recovery, coagulation/rinsing/pressing, drying/baling/release, included actual storage/dispatch and pollution control; assign shared facilities by traceable records. | epa-ap42-sbr; epa-sbr-1996 |
| boundary_expand | all inventory rows | Named auxiliaries are concrete verifiable exchanges, not a universal recipe. Actual alkali, fatty-acid soap, reductant, chelant, absorber oil, nitrogen, refrigerant, fuel, packaging, treatment reagent, waste or emission requires its own atomic row and protocol. Use not_applicable only with evidence of absence; a blank UUID cannot remove a burden. | epa-ap42-sbr; epa-sbr-1996 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| esbr_line | Integrated monomer-to-release E-SBR line | required | Only section 1 route; separate stage records | foreground | product |

### Process: Integrated E-SBR line (`esbr_line`)

#### Inputs

##### Product flows

###### Fresh styrene monomer (`styrene`)

Purchased inhibited styrene as actually supplied; assay and inhibitor are composition subledgers. Recovered internal styrene is not another purchase.

- Selected flow: Styrene monomer
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_material
- Sources: epa-sbr-1996

###### Fresh 1,3-butadiene monomer (`butadiene`)

Record whole fresh monomer supply and actual purity/inhibitor, transfer losses and storage change; distinguish recovered circulation.

- Selected flow: 1,3-Butadiene monomer
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_material
- Sources: epa-sbr-1996

###### Rosin soap emulsifier solution (`soap`)

One purchased rosin soap solution. Declare actual sodium/potassium salts, solids and carrier water. If made onsite, replace this procurement by separate actual rosin acid, alkali and water inputs and include preparation energy/loss; never also purchase the same prepared solution.

- Selected flow: Rosin acid soap aqueous formulation
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_material
- Sources: epa-sbr-1996

###### Hydroperoxide initiator formulation (`initiator`)

Whole purchased formulation for the selected redox route; record actual isomer/species, active assay and solvent. The historical typical recipe is not proof of a supplier composition or dose.

- Selected flow: Diisopropylbenzene hydroperoxide formulation
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_material
- Sources: epa-sbr-1996

###### Ferrous sulfate activator (`activator`)

Record actual supplied hydration, solution strength and whole acquired mass; crystal water and carrier water are different subledgers. Additional reductant or chelant actually used requires its own atomic card.

- Selected flow: Ferrous sulfate
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_material
- Sources: epa-sbr-1996

###### Mercaptan chain transfer agent (`modifier`)

Record supplied mercaptan grade and mixture assay, separately from emulsifier and initiator; do not assume quantitative incorporation into polymer.

- Selected flow: tert-Dodecyl mercaptan
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_material
- Sources: epa-sbr-1996

###### Pyrophosphate buffer (`buffer`)

Record actual hydration/formulation and supply mass where this buffer is used; alternative buffer chemistry requires a separately identified row.

- Selected flow: Potassium pyrophosphate
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_material
- Sources: epa-sbr-1996

###### DEHA shortstop (`shortstop`)

Conditional whole purchased DEHA solution only when confirmed by plant recipe. Track stripping and recycle carryover; do not silently equate another hydroxylamine or mixed shortstop. The patent supports the role and volatility, not this plant dose.

- Selected flow: N,N-Diethylhydroxylamine aqueous formulation
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_material
- Sources: wo-shortstop-2014

###### Phenolic antioxidant formulation (`antioxidant`)

Conditional purchased styrenated phenol formulation; declare mono/di/tri constituents, surfactant/carrier and actual retained fraction. A separately purchased phosphite or other stabilizer requires another card. Do not infer a patent blend or dose for the actual site.

- Selected flow: Styrenated phenol antioxidant formulation
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_material
- Sources: us-stabilizer-2010

###### Coagulation sulfuric acid solution (`acid`)

Whole purchased acid solution with actual mass fraction for salt/acid coagulation. Active H2SO4 and its carrier water are subledgers; dilution water separately acquired is a water input.

- Selected flow: Sulfuric acid aqueous solution
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_material
- Sources: epa-ap42-sbr

###### Coagulation brine (`salt`)

Whole externally purchased NaCl brine when used. Onsite brine preparation instead records actual dry NaCl and separately supplied water, plus mixing burdens; recirculated mother liquor is an internal ledger.

- Selected flow: Sodium chloride brine
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_material
- Sources: epa-ap42-sbr

###### Fresh process water (`water`)

Separately imported water for emulsion preparation, monomer washing, crumb rinsing, cleaning and cooling makeup; exclude purchased-formulation water and internal recirculation. Record actual treatment and volume-to-mass density at measured conditions.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_material
- Sources: epa-ap42-sbr; epa-sbr-1996

###### Imported electricity (`electricity`)

Separate stage meters for polymerization/agitation, refrigeration, vacuum recovery, coagulation, pressing, dryer fans, baler, treatment, storage and loading; record actual grid/voltage/year. Onsite generation must include its fuel and emissions and avoid duplicate imported power.

- Selected flow: Electricity
- Flow property / unit: Energy / MJ
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_utility
- Sources: epa-ap42-sbr

###### Purchased steam (`steam`)

Record actual imported steam mass, pressure, temperature, enthalpy, direct injection and condensate-return basis. Utility background must match supplied steam mass; do not also buy the same steam heat as MJ. Onsite generation requires fuel, feedwater, treatment, blowdown and emissions.

- Selected flow: Industrial steam
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_utility
- Sources: epa-ap42-sbr

###### Bale wrapping film (`film`)

Conditional actual PE bale film; polymer, additives, thickness and supplier require evidence. Packaging is outside net rubber Q but its material, application and waste burdens remain. Other packaging components require separate cards.

- Selected flow: Polyethylene bale wrapping film
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_material
- Sources: epa-ap42-sbr

###### Handling diesel (`diesel`)

Conditional actual fuel for material handling/loading in the boundary. Retain separately measured combustion species; do not combine fuel and freight service or omit handling because shipment is not Q.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_utility
- Sources: epa-ap42-sbr

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted dry E-SBR (`product`)

Sole terminal reference row: uncured, non-oil-extended 23% bound-styrene E-SBR dry crumb baled after drying and quality release. Native CAS is 9003-55-8. The native comment describes E-SBR and broad molecular-weight distribution without a numeric energy factor. Native name fixes 23% styrene and emulsion route; locationOfSupply is absent, not CN/HK/GLO. Its 36220 classification conflicts with the primary-polymer physical identity and remains disclosed metadata debt. It supplies no brand, temperature, moisture, supplier recipe or background quantity. Do not silently treat nominal 23.5% grade as exactly 23%.

- Selected flow: Styrene butadiene rubber `0387054c-15d6-4e16-9f8f-0766754a653a`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: fixed_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: identity_reference
- Collection protocol: cp_release
- Sources: epa-ap42-sbr; epa-sbr-1996

###### Exported condensate (`condensate`)

Conditional external return to steam supplier, with measured mass/temperature and agreed supplier boundary. Internal condensate loops are not exports and are cancelled on consolidation.

- Selected flow: Steam condensate
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_utility
- Sources: epa-ap42-sbr

##### Waste flows

###### Coagulation and washing effluent (`effluent`)

One physically collected wastewater stream to offsite treatment, with whole wet mass and measured Na/Cl/S, residual monomers, solids, pH and organic load. Distinct incompatible destinations require separate rows. COD is not a chemical species and cannot close an elemental balance. Onsite treatment expands into actual reagents/sludge/direct discharge and species.

- Selected flow: Acidic saline rubber-process wastewater
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_output
- Sources: epa-sbr-1996

###### Rubber purge waste (`reject`)

Only material actually leaving for disposal, including failed/zero-output runs. Internal rework is a transfer, not external waste or new product. Sale of a separately accepted secondary grade requires an explicit coproduct ledger and allocation.

- Selected flow: Off-spec uncured E-SBR crumb for disposal
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_output
- Sources: epa-sbr-1996

###### PE film waste (`film_waste`)

Actual trim and rejected wrapping film to the declared treatment; do not combine with rubber waste.

- Selected flow: Waste polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_output
- Sources: epa-ap42-sbr

##### Elementary flows

###### Styrene to air (`styrene_air`)

Measured uncaptured styrene to declared air compartment from storage, vents, recovery, coagulation, drying, leaks and treatment; distinguish recovered vapor and destruction. No historic total-VOC factor is assigned wholly to this species.

- Selected flow: Styrene
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_emission
- Sources: epa-ap42-sbr; epa-sbr-1996

###### Butadiene to air (`butadiene_air`)

Separately measured 1,3-butadiene release by route and compartment. Captured/recycled monomer does not cross the external emission boundary.

- Selected flow: 1,3-Butadiene
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_emission
- Sources: epa-ap42-sbr; epa-sbr-1996

###### Evaporated water (`water_air`)

Water actually evaporated from crumb/drying/cooling and emitted to air, independently constrained by moisture/condensate measurements. It is not generic polymerization reaction water or an adjustable closure residual.

- Selected flow: Water vapour
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_emission
- Sources: epa-ap42-sbr

###### Fossil carbon dioxide (`co2`)

Conditional measured/calculated fossil CO2 for onsite fuel combustion or actual VOC oxidation. Track biogenic rosin carbon separately; do not label all oxidized carbon fossil. Purchased electricity/steam upstream emissions remain with their backgrounds.

- Selected flow: Carbon dioxide, fossil
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_emission
- Sources: epa-sbr-1996

###### Nitrogen dioxide to air (`nox`)

Conditional actual NO2 combustion emission with method and air compartment. A total NOx-as-NO2 instrument result is an equivalence metric, not all molecular NO2; speciate NO and other compounds into separate cards before elementary-flow reporting.

- Selected flow: Nitrogen dioxide
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_emission
- Sources: epa-sbr-1996

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_recycle | all inventory rows | Prefer subdivision and physical-causal metering. Internal monomer, mother liquor, latex and rework are not coproducts and receive no avoided-burden credit. Retain failed/zero-output, startup/shutdown, cleaning and rework burdens in the matched cohort; reacceptance after actual terminal release creates no new Q. | epa-ap42-sbr; jrc-ilcd-allocation-2010 |
| allocation_outputs | all inventory rows | Externally sold recovered monomer or independently accepted secondary rubber needs separate true product rows, amounts, quality, destination and burden allocation. Avoid allocation where feasible; otherwise disclose the justified physical relation, or justify alternatives and sensitivity when physical relations are unsuitable. Waste rubber/water is not automatically a coproduct; a sale is not automatically a negative emission. | epa-sbr-1996; jrc-ilcd-allocation-2010 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

Collection retains un-divided raw numerators. The aggregation_rule declares only the final reporting basis. It refers to the same single report_once operation as each amount card, not a separate calculation at collection.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | esbr_line | product | quality_release | lot/bale ID; grade; route; first positive release date; net mass; packaging tare; assay; moisture; WIP opening/closing; finished-stock opening/closing; returns; burden carryover | Owner: quality manager with production accountant. Calibrated net-bale weighing and release certificates establish raw Q. Record all batches including failed and zero-output runs, withdrawals and rework; attach opening/closing WIP and finished-stock quantities/compositions and carried upstream burdens without normalization. Reconcile independent warehouse/dispatch movements; do not add closing finished stock to already counted Q. | kg | every lot and continuous interval | same complete period and product/route/state cohort | actual declared site and included stages | per 1 kg reference flow | calibration, ledgers, assays and stock/burden reconciliation |
| cp_material | esbr_line | material | receipt_and_stock | stage; row_id; period; lot; supplied whole mass; purity/solids; species; carrier water; hydration; opening/closing stock; fresh receipt; recycle; spills; WIP carried inputs | Owner: materials accountant and stage operator. Collect un-divided raw receipts, weighings, stock movements and stage dosing; reconcile purchased whole formulation against constituent subledgers. Preserve all burdens for failed runs/rework and opening/closing WIP; no A/Q in collection. Actual additional chemicals and packaging get separate atomic rows. | kg; m3 | every lot and continuous interval | same complete period and product/route/state cohort | actual declared site and included stages | per 1 kg reference flow | calibration, ledgers, assays and stock/burden reconciliation |
| cp_utility | esbr_line | utility | meter_and_operation | stage; row_id; meter start/end; integrated volume; rate; duration; density; kWh; steam mass; pressure; temperature; enthalpy; condensate; fuel; carryover burden; storage/loading period | Owner: utilities engineer. Retain complete raw interval meters and stage logs for all production/recovery/drying/control/storage/loading including failures and standby; reconcile shared meters and carried burdens. Preserve raw integrated quantities and conversion evidence without dividing by Q. Track directly injected steam water and condensate separately from purchased heat. | MJ; kWh; kg; m3 | every lot and continuous interval | same complete period and product/route/state cohort | actual declared site and included stages | per 1 kg reference flow | calibration, ledgers, assays and stock/burden reconciliation |
| cp_output | esbr_line | waste | weigh_and_analyse | row_id; stream; stage; wet mass; moisture; species; Na/Cl/S; carbon; residual monomer; COD; treatment destination; rejects; recycled amount; opening/closing WIP | Owner: environment manager and waste custodian. Weigh each outgoing waste independently and retain analyses/manifests; record liquid whole mass and constituents separately. Retain untreated/treated interface and all failures, reject/rework movements and WIP burdens as raw period totals, without A/Q or residual-fitting. | kg; m3; mg/L | every lot and continuous interval | same complete period and product/route/state cohort | actual declared site and included stages | per 1 kg reference flow | calibration, ledgers, assays and stock/burden reconciliation |
| cp_emission | esbr_line | emission | monitor_and_speciate | row_id; species; stage; air/water compartment; sample method; concentration; flow; integrated gas volume; duration; moisture; standard/actual state; capture/destruction; fossil/biogenic carbon; WIP burden | Owner: environmental measurement lead. Collect raw representative species-specific tests plus complete matched flow records for normal and abnormal operations. Reconcile captured/recycled/destroyed material and actual reaction evidence. Raw concentration times matched integrated volume requires no extra time multiplication; no normalization during collection. Additional actual NO, CO, SO2, particulate or reagent emissions require separate cards. | kg; mg/m3; m3 | every lot and continuous interval | same complete period and product/route/state cohort | actual declared site and included stages | per 1 kg reference flow | calibration, ledgers, assays and stock/burden reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| report_once | all inventory rows | a_i = A_i / Q; A_i is the complete matched raw-period numerator after raw-unit conversion and cohort attribution, including opening WIP carried burdens less closing WIP carried burdens, failed/zero-output runs, rework, losses and actually included storage/packing/dispatch burdens. Reconcile finished-warehouse burdens and internal handoffs separately; never add closing finished stock already in Q as further production. Q is first positive released net mass from cp_release and must exceed zero. This is the sole division; cards and aggregation_rule point to this same reporting operation, never successive divisions. Reference output is 1 kg. | A_i; Q; cp_release; cp_material; cp_utility; cp_output; cp_emission | a_i | epa-ap42-sbr; epa-sbr-1996 |
| physical_closure | all inventory rows | Production cohort: opening WIP + actual external inputs + internal receipts = released Q + other real outlets + closing WIP + internal transfers out. Keep finished warehousing separate and cancel handoffs on consolidation. Reconcile whole physical mass independently, then audit elements by species composition; conversion of monomer into rubber is not water formation. Retain unexplained differences as uncertainty and investigation. | cp_release; cp_material; cp_output; cp_emission | physical_and_element_ledger | epa-ap42-sbr; epa-sbr-1996 |
| raw_convert | all inventory rows | Raw volume times measured density yields mass; interval concentration times integrated volume at matching conditions yields species mass after unit conversion; only rates receive duration multiplication. Water/active/carrier subledgers are not further purchases; retain steam mass, enthalpy and condensate without duplicate mass/heat procurement. Raw conversion precedes report_once and never divides by Q. | cp_material; cp_utility; cp_emission | converted_raw_numerators | epa-sbr-1996 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Retain complete native name components, CAS, route, state, geography/supply location, medium and property/unit; judge actual supplier/background compatibility independently. Reference identity fixes 23% styrene and emulsion route with disclosed 36220 classification debt; absent geography does not establish global applicability. | native identities; supplier certificates; actual grade assay |
| dq_complete | all inventory rows | Retain failed/zero-output runs, rework, WIP, finished stock and carried burdens; actual reagent/emission burdens cannot be deleted because unlisted or UUID-unmatched. Complete atomic expansion before producing quantitative data. | complete period and stage ledgers |
| dq_reaction | all inventory rows | Actual reaction species and water formation/consumption require evidence independently of water/element closure; measure residual monomer, volatilization and wastewater. Historical sources check route only. No site data means no claim of a completed LCI. | assays; reaction evidence; independent measurements |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | product | Only product is the terminal reference Product output and its UUID must match the reference. Require 23% bound styrene, emulsion route, dry form, non-oil extension, uncured state and production release gate consistently; intermediates/coproducts sharing a UUID or reacceptance cannot create output. | epa-ap42-sbr |
| validate_period | all inventory rows | Reconcile all raw-period numerators, stock and WIP carryover; Q > 0 with cohort deduplication. Release and net delivery quantities remain independent; forbid Q plus same-cohort closing finished stock. Retain actual storage/packing/dispatch/rework burdens, cancel consolidated handoffs and execute report_once once. | epa-ap42-sbr |
| validate_species | all inventory rows | Check physical mass and relevant elements, whole supply/subledgers and nonduplicate water/steam. Require independent actual-species/reaction-water evidence rather than COD, residual or theoretical yield. Disclose and resolve unknown actual recipe/species rather than invent values. | epa-sbr-1996 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Matching grade/form E-SBR as downstream rubber-compounding feedstock |
| allowed_use | Site-evidenced 23% bound-styrene E-SBR dry-rubber production data; candidate methodology requires review |
| excluded_use | Latex, other elastomers/routes, factice, waste plastics, compounded/vulcanized products or unverified 23.5%-grade substitution |
| required_metadata | All reference qualifiers, protocol owners, raw-period numerators, first release Q, WIP/stock and carried burdens, species and actual supply backgrounds |
| required_quality_disclosure | Historical-source limits, native classification debt, unresolved auxiliary UUID/backgrounds, measured coverage, unexplained differences and uncertainty |
| update_trigger | Changes to grade/styrene content, recipe, hot/cold regime, form, reference gate, recovery, pollution control or energy supply |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| epa-ap42-sbr | official_guidance | US EPA. AP-42 §6.10 Synthetic Rubber, August 1982, reformatted January 1995. https://www.epa.gov/sites/default/files/2020-10/documents/c06s10.pdf | pp.6.10-1–6.10-3 and Fig.6.10-1: monomers, recovery, acid/brine coagulation, rinsing/dewatering/drying and bale weighing; historical generic US process only, no default temperature/conversion/emission/control efficiency. |
| epa-sbr-1996 | official_guidance | US EPA. Locating and Estimating Air Emissions from Sources of 1,3-Butadiene, EPA-454/R-96-008, November 1996. https://www.epa.gov/sites/default/files/2020-11/documents/butadien.pdf | pp.5-1–5-5, Table5-1: emulsion/solution and latex/solid distinctions, material roles, recovery, washing/drying and emission sources; main information predates 1986. Typical recipe proportions/historical emissions are not site quantities or proof of 23% finished composition. |
| wo-shortstop-2014 | literature | WO2014052212A1. Alkyl hydroxylamine compounds and their use for shortstopping free radical polymerizations, 2014-04-03. https://patents.google.com/patent/WO2014052212A1/en | Background: DEHA shortstop and stripping/recycle carryover; role/destination evidence only, not patented alternatives, dose, efficiency or actual purchase. |
| us-stabilizer-2010 | literature | US7691927B2. Self-emulsifying liquid stabilizers, 2010-04-06. https://patents.google.com/patent/US7691927B2/en | Description: phenolic antioxidants including styrenated phenol and addition before coagulation; no adoption of patented blend ratios/performance or proof of site grade, supplied composition or quantity. |
| jrc-ilcd-allocation-2010 | official_guidance | European Commission JRC, ILCD Handbook, General guide for Life Cycle Assessment, Detailed guidance, first edition March2010, §7.9.3, printed257–258/PDF277–278; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional virtual subdivision, determining physical causality and a justified alternative relationship for remaining burdens support allocation choices. No E-SBR recipe, universal product/waste share, recovery yield, substitution credit, temperature or plant quantity is supplied. |
