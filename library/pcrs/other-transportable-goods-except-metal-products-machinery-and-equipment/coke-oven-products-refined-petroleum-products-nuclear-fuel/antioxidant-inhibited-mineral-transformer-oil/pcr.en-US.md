---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.antioxidant-inhibited-mineral-transformer-oil
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Antioxidant-inhibited mineral transformer oil

## 1. Scope and Applicability

This PCR covers new, liquid, antioxidant-inhibited petroleum mineral transformer insulating oil supplied at the blending/conditioning factory gate. The selected route purchases fully refined hydrotreated naphthenic mineral base oil, meters a DBPC (2,6-di-tert-butyl-p-cresol, BHT) concentrate in mineral transformer oil, blends, filters and when required dehydrates/degasses, tests and releases the finished whole oil. Include the actual receipt, storage, sampling, failed batches, repeated conditioning, packaging and dispatch preparation. At least 70% of the actual whole formulation by mass must be petroleum oil, with that oil its basic constituent; verify the entire recipe, not just hazard-reporting bands. The principal sold functions are dielectric insulation and heat transfer in oil-filled transformers. These are technical product functions with moisture, cleanliness, oxidation and electrical-release requirements, not an incidental application label on an unrestricted white oil. Sources: `iec-mineral-insulating-2020`; `ergon-hyvolt-iii-2021`; `ergon-hyvolt-sds-2024`; `ergon-bht-concentrate`; `enervac-e865a`.

Exclude virgin-base-oil refining from this foreground unit but retain its upstream burden. Exclude crude petroleum, gasolines/jet fuels, naphtha, kerosenes, white spirit, gas/diesel or fuel oils; products principally lubricating sliding surfaces or metal cutting; uninhibited/trace-inhibited products; ester, silicone, GTL or vegetable-oil insulating fluids; recycled/reclaimed/used oils and reinhibition of in-service oil; white medicinal oils; cable/capacitor impregnants; transformer assembly, first filling at customer equipment, operation and end of life. A different purchased antioxidant preparation or base blend requires documented composition/identity and recipe adaptation; it is not a licence to substitute an unresolved mixture with one pure component.

This narrower petroleum insulating-oil category is associated with CPC3.0 33390. Current 33380 is defined by principal friction/metal-cutting use. IEC and manufacturer evidence establish this category's electrical function; the product is not marketed as a fuel or solvent. The actual complete specification, composition, distillation and contract function must distinguish it from classes3331–3338. The cited SDS reports an initial boiling point only; that is not a complete distillation curve and temperature overlap alone cannot decide classification. Keep native33380 and historical broader lubricant/heavy-oil classifications visible for independent adjudication. Neither a native classification nor an IEC label is automatic mapping acceptance. CPCVersion2 explicitly included insulating oils in its broader33380 class; the listed one-to-many correspondence is from CPC Version2 to Version2.1, not directly to Version3.0, and is not a decision for this product under CPC3.0. Sources: `un-cpc3-2025`; `un-cpc2-insulating-counterevidence`.

The product datasheet establishes a real inhibited mineral transformer-oil category, and the concentrate brochure establishes a real whole DBPC/mineral-oil preparation. They do not prove that the cited finished-oil manufacturer uses that exact concentrate or conditioning train; the brochure also discusses in-service maintenance, which this PCR excludes. The chosen new-oil blending boundary is a disclosed method synthesis. An actual application must demonstrate its own new-production formulation, preparation and processing records; no named commercial product recipe or filter medium is inferred.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.antioxidant-inhibited-mineral-transformer-oil |
| classification_refs | CPC 3.0 33390; narrower product and route boundary |
| covered_products | New DBPC-inhibited petroleum mineral transformer oil, blended from actual fully refined hydrotreated naphthenic base and whole inhibitor concentrate, then conditioned and released |
| excluded_products | The distinct material, principal-function, recycling and downstream routes in section1; no entire residual-oil leaf coverage |
| representative_product | Whole liquid inhibited mineral transformer oil with actual contract, blend ticket and batch electrical/chemical acceptance |
| production_route | Purchased fully refined oil and DBPC concentrate → metering/blending → actual filtration/vacuum conditioning → release, packaging/storage and factory dispatch preparation |
| market_state | New bulk or packaged liquid whole oil, at plant; not an oil constituent, emissions surrogate, or provider screening inventory |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply complete new inhibited mineral transformer insulating oil at the declared factory acceptance gate |
| How much | 1 kg reference flow of accepted whole liquid oil, excluding detachable packaging |
| How well | Meet actual transformer-oil contract and standard/edition, inhibited state, composition, moisture/particle cleanliness, dielectric, oxidation and sulfur/contamination release requirements |
| How long or cycle | One actual complete production period with uniquely identified first-acceptance cohorts; no assigned transformer service life |
| reference_flow_link | reference_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Insulation oil `53bd72ac-2f0a-4d18-aa9f-158c82b3578f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual site and reporting period; new virgin-petroleum origin and whole recipe/mineral-oil share; hydrotreated naphthenic base and actual upstream gate; DBPC concentrate SKU, carrier, assay and dose; inhibited transformer grade with contract standard/edition and release tests; actual blending/conditioning sequence and number of passes; net mass and temperature/density when volume is used; factory gate and packaging/storage boundary; unique first-acceptance Q and dispatched/closing-FG split; raw/WIP/FG physical stocks and inherited burden vectors by cohort; external returns/retests/old-cohort service links; broad native identity and33380 metadata debt |

Declare every qualifier in consumable dataset context. The selected native whole product includes the at-plant electrical-insulation route and antioxidant formulation; its wider comment also describes other insulating-fluid families. Only the petroleum mineral transformer subset above is applicable. Its numeric dielectric statement, sweeping standard claim, other fluid families and CPC33380 tag do not become PCR acceptance limits. Actual batch evidence must establish grade, mineral composition and provider compatibility separately. Do not replace the whole oil by BHT, a base-oil ingredient, an emission, or the source-defined GLO refinery screening proxy.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reference is 1 kg accepted whole liquid oil excluding detachable packaging. cp_acceptance measures net mass; volume requires measured batch density at matching temperature, not the example SDS density. |
| same_reference_basis | all inventory rows | Row-specific physical quantity or energy | per 1 kg reference flow | Record raw amounts under the linked protocol, attribute their complete burden vectors to the relevant cohort, then divide once by its accepted mass. All cards and protocols declare this same basis. |
| whole_preparation | all inventory rows | Mass with separate constituent subledger | kg | A purchased concentrate is one whole exchange. Its contained BHT and carrier-oil masses describe composition only and are not additional purchased inputs. Keep actual assay, batch variation and residual inhibitor in losses. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased fully hydrotreated naphthenic oil and whole DBPC mineral-oil concentrate at receipt; actual opening raw/WIP/FG stock, packaging and carried burden vectors |
| starting_condition_role | Foreground blending and conditioning boundary, not a zero-burden upstream cutoff |
| product_classification_scope | Narrow new inhibited petroleum transformer-oil category, independently assessed against current CPC3.0 residual exclusions |
| recursive_input_rule | Internal oil recirculation is a stage transfer, not a fresh input or first acceptance. Purchased same-category oil and external returns need origin/state and inherited-burden evidence; used/recycled oil is outside this route |
| upstream_dataset_requirement | Match each whole base oil/concentrate/utility to actual production route, gate, year, geography and amount basis; refining burdens and justified refinery coproduct allocation remain upstream |
| disclosure | Report receipt-to-factory-gate stages, acceptance Q, dispatch/FG bridge, physical and burden stocks, recirculation, returns, test/conditioning losses, source and provider limits |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_complete_unit | oil_supply | Include metering/blending, actual heating/vacuum/filtration, storage, all repeated passes, testing, rejected runs, cleaning, packaging and dispatch preparation. Record receipt, blending, conditioning and supply as separate tagged stages inside this integrated unit. Source machine performance is not a mandatory operating recipe. | `enervac-e865a`; `ergon-bht-concentrate` |
| boundary_first_acceptance | reference_product | For positive Q, count uniquely newly accepted oil dispatched in this period plus newly accepted oil remaining in closing FG once. Opening already accepted FG, old returns, redelivery, internal transfers, repeated tests and conditioning throughput do not create Q. WIP/unaccepted oil is not closing accepted FG. Attribute post-acceptance losses and services to their original cohort, without re-acceptance or a second output. |  |
| boundary_stock_vectors | oil_supply | Maintain raw/WIP/FG masses and exchange-level inherited burden vectors separately at opening and closing; transfers move both. Withdrawals of opening stock bring their recorded inherited burdens; closing stocks retain appropriate upstream and current-stage burdens. Old-cohort storage/retest/return services belong to the original accepted cohort and its original accepted mass. Unknown inherited vectors or cohort denominator remain unknown. |  |
| boundary_no_downstream | oil_supply | Upstream refining and input transport remain linked backgrounds. Transformer manufacture, onsite filling, service oxidation/reinhibition and final disposal require distinct downstream models; no default longer-life credit is granted. | `iec-mineral-insulating-2020` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| oil_supply | Inhibited mineral-oil blending, conditioning and factory supply | required | Actual new mineral transformer-oil route in section1 | Integrated foreground with receipt, blend, condition/test and factory-supply stage tags | per 1 kg reference flow |

Receipt, blending, conditioning/test, and packaging/storage/dispatch records remain separately measured. Internal oil transfers pair equal masses/compositions and corresponding burden vectors; they cancel only on consolidation. External returns are real physical movements and must not be cancelled as internal recirculation. Add one atomic card per actual additional base grade, whole preparation, fuel, heat supply, refrigerant, packaging component, waste or emitted species. Conditional absence requires recorded evidence, not a blank amount. A shared meter never justifies combining different flows.

### Process: Inhibited mineral-oil blending, conditioning and factory supply (`oil_supply`)

#### Inputs

##### Product flows

###### Hydrotreated naphthenic mineral base oil (`hydrotreated_base`)

Required actual fully refined petroleum base; preserve supplier blend/composition, oil state, receipt gate, stocks and upstream refining burden. Add separate rows for additional actual base grades.

- Selected flow: Hydrotreated naphthenic mineral base oil
- Flow property / unit: Mass / kg
- Amount rule: Record the actual raw quantity attributable to its cohort under cp_material, then normalize once to per 1 kg reference flow; old-cohort services use their original cohort denominator separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `ergon-hyvolt-iii-2021`

###### DBPC concentrate in mineral transformer oil (`inhibitor_concentrate`)

Required whole commercial inhibitor preparation. Measure supplied mass and actual inhibitor/carrier assay; do not adopt the source nominal concentrate strength or count contained carrier oil twice.

- Selected flow: DBPC concentrate in mineral transformer oil
- Flow property / unit: Mass / kg
- Amount rule: Record the actual raw quantity attributable to its cohort under cp_material, then normalize once to per 1 kg reference flow; old-cohort services use their original cohort denominator separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `ergon-bht-concentrate`

###### Electricity (`electricity`)

Measure all pumping, mixing, electrical heating, vacuum, filtration, test equipment, storage and dispatch loads; reconcile shared meters and standby/failure energy.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: Record the actual raw quantity attributable to its cohort under cp_utility, then normalize once to per 1 kg reference flow; old-cohort services use their original cohort denominator separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utility`
- Sources: `enervac-e865a`

###### Nitrogen gas (`nitrogen_blanket`)

Conditional actual dry inert blanketing. Retain total supply, pressure/temperature, purity, venting and stocks; volume conversion requires the same gas-state basis.

- Selected flow: Nitrogen gas
- Flow property / unit: Mass / kg
- Amount rule: Record the actual raw quantity attributable to its cohort under cp_utility, then normalize once to per 1 kg reference flow; old-cohort services use their original cohort denominator separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utility`
- Sources:

###### Polypropylene oil-filter cartridge (`polypropylene_filter`)

Conditional actual polypropylene cartridge; record actual material and dry new cartridge mass separately from retained oil and water in spent filter. A different medium requires its own atomic row.

- Selected flow: Polypropylene oil-filter cartridge
- Flow property / unit: Mass / kg
- Amount rule: Record the actual raw quantity attributable to its cohort under cp_material, then normalize once to per 1 kg reference flow; old-cohort services use their original cohort denominator separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `enervac-e865a`

###### Carbon-steel oil drum (`steel_drum`)

Conditional actual drum supply. Separate tare, reuse cycles, return stocks and cleaning; no generic container lifetime. Bulk supply needs its actual logistics inventory.

- Selected flow: Carbon-steel oil drum
- Flow property / unit: Mass / kg
- Amount rule: Record the actual raw quantity attributable to its cohort under cp_packaging, then normalize once to per 1 kg reference flow; old-cohort services use their original cohort denominator separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources:

###### High-density polyethylene drum closure (`hdpe_closure`)

Conditional actual closure, separately weighed and linked to its drum cohort. Do not combine with steel drum mass or assume every package uses HDPE.

- Selected flow: High-density polyethylene drum closure
- Flow property / unit: Mass / kg
- Amount rule: Record the actual raw quantity attributable to its cohort under cp_packaging, then normalize once to per 1 kg reference flow; old-cohort services use their original cohort denominator separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources:

###### Equipment washing water (`wash_water`)

Conditional measured equipment cleaning water, segregated from oil conditioning and retained moisture. If the actual route uses another cleaning agent, add its own row and discharge.

- Selected flow: Equipment washing water
- Flow property / unit: Mass / kg
- Amount rule: Record the actual raw quantity attributable to its cohort under cp_utility, then normalize once to per 1 kg reference flow; old-cohort services use their original cohort denominator separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utility`
- Sources:

###### Mineral vacuum-pump lubricating oil (`vacuum_pump_oil`)

Conditional actual oil-sealed vacuum pump; record charges, additions, drains and stocks. Dry pumps require evidence of absence and their actual maintenance inputs.

- Selected flow: Mineral vacuum-pump lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Record the actual raw quantity attributable to its cohort under cp_material, then normalize once to per 1 kg reference flow; old-cohort services use their original cohort denominator separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

##### Waste flows

No default external waste input; any such input requires route reassessment.

##### Elementary flows

Add each actual direct resource abstraction separately; purchased water does not replace it.

#### Outputs

##### Product flows

###### Insulation oil (`reference_product`)

Whole new inhibited petroleum mineral transformer oil after actual blend, conditioning, batch acceptance and included factory-supply operations. Retain full native at-plant/electrical-route context and the broader-comment/classification limitations in section3.

- Selected flow: Insulation oil `53bd72ac-2f0a-4d18-aa9f-158c82b3578f`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `ergon-hyvolt-iii-2021`

##### Waste flows

###### Oil-contaminated aqueous condensate (`oil_water_residue`)

Actual separated water/condensate transferred to treatment; measure retained oil, dissolved species and receiver. It is not a direct water emission or a pure-water credit.

- Selected flow: Oil-contaminated aqueous condensate
- Flow property / unit: Mass / kg
- Amount rule: Record the actual raw quantity attributable to its cohort under cp_residue, then normalize once to per 1 kg reference flow; old-cohort services use their original cohort denominator separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue`
- Sources: `enervac-e865a`

###### Oil-contaminated polypropylene filter cartridge (`spent_filter`)

Actual spent cartridge transferred to treatment with whole as-transferred mass, oil/water/solids subledger and receiver; do not count retained oil again as another external waste.

- Selected flow: Oil-contaminated polypropylene filter cartridge
- Flow property / unit: Mass / kg
- Amount rule: Record the actual raw quantity attributable to its cohort under cp_residue, then normalize once to per 1 kg reference flow; old-cohort services use their original cohort denominator separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue`
- Sources: `enervac-e865a`

###### Rejected mineral transformer oil (`rejected_oil`)

Actual off-spec oil leaving the boundary for treatment or verified external recovery. Internal rework stays an internal transfer. Receiver evidence decides waste or separately declared coproduct status.

- Selected flow: Rejected mineral transformer oil
- Flow property / unit: Mass / kg
- Amount rule: Record the actual raw quantity attributable to its cohort under cp_residue, then normalize once to per 1 kg reference flow; old-cohort services use their original cohort denominator separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue`
- Sources:

###### Spent mineral vacuum-pump oil (`pump_waste_oil`)

Conditional drained pump oil; separate from rejected product, record actual composition, contamination, mass and treatment/recovery receiver.

- Selected flow: Spent mineral vacuum-pump oil
- Flow property / unit: Mass / kg
- Amount rule: Record the actual raw quantity attributable to its cohort under cp_residue, then normalize once to per 1 kg reference flow; old-cohort services use their original cohort denominator separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue`
- Sources:

##### Elementary flows

###### Water vapour to air (`vented_water`)

Actual uncondensed removed water released to air after controls; do not repeat the condensed aqueous waste quantity. Declare air compartment and sampling/balance evidence.

- Selected flow: Water vapour to air
- Flow property / unit: Mass / kg
- Amount rule: Record the actual raw quantity attributable to its cohort under cp_emission, then normalize once to per 1 kg reference flow; old-cohort services use their original cohort denominator separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources: `enervac-e865a`

###### Nitrogen to air (`vented_nitrogen`)

Conditional actual nitrogen released after blanketing/vacuum; reconcile fresh supply, dissolved gas, vents and stock. A carrier gas is not an invented VOC quantity.

- Selected flow: Nitrogen to air
- Flow property / unit: Mass / kg
- Amount rule: Record the actual raw quantity attributable to its cohort under cp_emission, then normalize once to per 1 kg reference flow; old-cohort services use their original cohort denominator separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources:

###### Mineral oil aerosol to air (`oil_mist`)

Actual released oil aerosol after controls; retain measured particle size and air compartment. Add each actually present volatile hydrocarbon separately; a total organic-carbon signal is not one identified species.

- Selected flow: Mineral oil aerosol to air
- Flow property / unit: Mass / kg
- Amount rule: Record the actual raw quantity attributable to its cohort under cp_emission, then normalize once to per 1 kg reference flow; old-cohort services use their original cohort denominator separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_trace_first | oil_supply | Subdivide batches/stages and meter or trace recipe/utility inputs first. Shared blending/vacuum loads use evidenced causal drivers, such as actual measured batch energy and pass time. If a residual common burden needs allocation among genuinely different oil grades, document the physical relationship, its measured shares and sensitivity before use; no universal mass, price or yield coefficient is prescribed. |  |
| allocation_physical_separate | oil_supply | Close unallocated physical mass, water, oil/inhibitor constituents and energy before any environmental-burden allocation. Burden shares sum to one for the eligible outputs but do not scale away physical waste or coproduct mass. Ordinary blending has no invented chemical-reaction yield or reaction sink. |  |
| allocation_recovery | rejected_oil | Waste remains a waste-service interface until actual receiver evidence establishes an independently marketable coproduct. Record recovery quantity, composition, destination and treatment inputs; grant no automatic displacement credit, zero-burden recycled oil or negative treatment amount. Internal recovered oil carries its original burdens and actual extra processing. |  |
| allocation_stock_cohorts | oil_supply | Carry each opening/closing raw/WIP/FG stock's exchange-level burden vector with its physical cohort. Allocate failure/rework, stock losses and actual acceptance-stage service to the relevant accepted cohorts using disclosed evidence. Old-cohort services augment their original cohort vector and use its original accepted mass; they do not inflate current Q or pass into the current new cohort by convenience. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

The authoritative Q is the independently measured net quantity summed once over unique first-acceptance events at the fixed reference gate, with each cohort quantity locked to its original event. Every dispatch-plus-closing-finished-stock expression below is a two-term bridge valid only where there are no other post-acceptance net exits. In the general case reconcile Q = D_new + F_new_close + L_new on the original acceptance-quantity basis: L_new separately traces accepted material lost, disposed of or transferred to another later state and absent from both D_new and F_new_close. The three sets are disjoint net parcel states, not gross movements. Internal loops, returns, rework, retests and temporary state changes cannot count the same accepted material again. Preserve actual event quantities and any unresolved bridge instead of reducing Q to conceal a loss. Acceptance Q is a reference-event account, not another external physical output added to dispatches or wastes. Subsequent services retain the original positive cohort Q; missing original quantities prohibit normalization.

For release, retain actual standard/edition, grade, full composition and principal contract function; oil/inhibitor identity and assay; net mass; moisture and particle cleanliness; dielectric breakdown/dissipation with sample conditioning; oxidation stability; sulfur/corrosive-sulfur, acidity and contamination tests appropriate to that contract. Use the full applicable standard and actual lab methods during data production. The IEC publisher scope and manufacturer example tables identify relevant tests but do not provide a universal numerical release specification. Source-specific PDS/SDS values and reporting bands, including their differing dates and flash-point values, must not be combined into a fictional common batch. Sources: `iec-mineral-insulating-2020`; `ergon-hyvolt-iii-2021`; `ergon-hyvolt-sds-2024`.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | oil_supply | base_concentrate_filter_pump | batch_and_stock | whole supplied SKU/composition/CAS; supplier gate; concentrate assay/carrier; receipts; opening/closing raw stocks and burden vectors; weighed consumption; transfer/return; filter/pump charges and residual oil | Calibrated net weighing or actual matched-temperature density/volume records, supplier certificates and stage/cohort stock reconciliation; no SDS-band recipe reconstruction | kg | Each receipt/batch/change and stock close | Actual complete reporting period including failed and zero-output runs | Receipt/blend/condition stages and input supply interfaces | per 1 kg reference flow | Calibrations, actual recipe, stock vectors, supplier data and mass/assay closure |
| cp_utility | oil_supply | energy_nitrogen_water | meters_and_state | electricity by stage/pass/standby; nitrogen mass/purity/T/P and provider basis; water receipt/cleaning; shared meter and burden allocation driver | Submeters and calibrated flow/mass records; reconcile electrical heating/pumping/vacuum and shared loads; measured gas-state/density conversions | kWh; kg | Continuous or each batch/pass and stock close | Same actual period with starts/stops, cleaning and failures | Actual integrated oil-supply unit and utility providers | per 1 kg reference flow | Meter/phase records, quantity-basis compatibility and energy/water/gas balances |
| cp_packaging | oil_supply | drum_closure | supplier_and_stock | each package component; tare; receipts/returns; reusable-unit id; actual service cycles/cleaning; opening/closing stocks and burden vectors | Weigh components separately; reconcile returnable packaging by actual cohort/cycles without default lifetime | kg | Each packaging operation and period close | Same reporting period with prior-cohort carry retained | Actual packaging/storage/dispatch stages | per 1 kg reference flow | Weighing, reuse/return receipts and actual stock/burden carry |
| cp_acceptance | oil_supply | accepted_oil_and_stock | cohort_release_ledger | new cohort id; recipe/assays; contract/standard edition; lab release; net whole mass; temperature/density if volume; first acceptance time; new dispatch and closing FG; opening FG; WIP; returns/retests/redelivery; physical/burden vectors | Calibrated net tank/dispatch weighing or matched-temperature volumetry; reconcile unique batch acceptance to physical raw/WIP/FG and paired transfer records | kg | Each acceptance, dispatch, return, retest and period stock close | Same actual complete period plus original-cohort histories | Complete blend/condition/release and included factory-supply operations | per 1 kg reference flow | Actual certificates, calibration, first-acceptance bridge, unique cohort links and inherited vectors |
| cp_residue | oil_supply | external_waste_and_recovery | weighing_and_receiver | each whole residue mass/composition/oil/water/solids; filter tare/retained oil; rejected product; pump drain; stock; receiver and treatment/recovery status | Weigh whole transfers and sample composition; reconcile treatment/recovery receipts and distinguish internal recirculation from external waste | kg | Each waste/recovery transfer and stock close | Same actual reporting period with cohort attribution | Actual separation/cleaning and external receivers | per 1 kg reference flow | Weighing, assays, receiver evidence and no duplicate retained-oil count |
| cp_emission | oil_supply | final_elementary_releases | monitoring_and_balance | actual water/nitrogen/oil-aerosol/each VOC species; medium/subcompartment; particle size; concentration/flow T/P/wet-dry basis; sampling duration; dissolved gas; capture/condensate; uncertainty | Paired concentration/flow monitoring integrated over actual operating periods, or independently checked oil/water/gas constituent balances; retain unknowns and detection limits | kg | Actual monitoring program and each material operating change | Same actual period including startup, vacuum passes and upsets | Actual vacuum exhaust, tanks, blending and control devices | per 1 kg reference flow | Species/size evidence, matched bases, control efficiency records and balanced final releases |

All protocols retain raw physical quantities and cohort tags before one normalization. The table aggregation basis describes the final report, not another division. Keep physical stock accounts and inherited environmental-burden vectors separately; actual multiple recipe inputs and repeated passes are not extra accepted output.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| accepted_once | reference_product | Q = D_new + F_new_close, where D_new is uniquely first-accepted oil dispatched and F_new_close is uniquely first-accepted oil held in closing accepted FG in this period; sets must be disjoint. Opening accepted FG, returned/retested/redelivered old oil and unaccepted WIP are excluded. Keep original accepted masses for older cohorts. | cp_acceptance | Positive new accepted mass Q and separate older-cohort denominators |  |
| normalize_once | all inventory rows | For each physical exchange direction i attributable to eligible accepted cohort c, report a_i,c = A_i,c / Q_c once, using the actual unallocated physical numerator A_i,c and that cohort's original accepted mass Q_c. Separately report its attributed environmental-burden vector B_c / Q_c, including inherited and genuine new service burdens. Neither vector allocation nor stock service attribution reduces actual physical movements. Do not add raw receipts to already stock-corrected consumption, or count both carried and newly purchased burden for the same oil. Do not divide physical coproducts by allocation shares. For Q_c = 0 or an unknown Q_c, retain raw numerators, stocks, vectors and unresolved attribution; do not divide, assume zero, discard failed runs or invent Q. | cp_material; cp_utility; cp_packaging; cp_acceptance; cp_residue; cp_emission | Exchanges per 1 kg reference flow by accepted cohort; explicit unresolved zero-output periods |  |
| stock_and_physical | oil_supply | For each stage and the aggregate boundary, opening mass + actual receipts/transfers in = actual transfers/dispatch out + final wastes/emissions + closing mass, with internal links cancelled only at aggregation. Reconcile oil, BHT, carrier oil, water and nitrogen subaccounts and energy separately. Blending/dehydration separates constituents without an invented reaction term. For inherited burden vectors use opening vector + attributable additions = vectors transferred out + closing vector, with actual loss/service attribution documented; a physical closure does not establish an unknown burden vector. | cp_material; cp_utility; cp_packaging; cp_acceptance; cp_residue; cp_emission | Physical and burden ledgers with explained residuals |  |
| preparation_constituents | inhibitor_concentrate | Contained BHT = measured whole concentrate mass multiplied by actual BHT mass fraction; carrier oil and other constituents use their actual measured fractions. Fractions sum to the whole preparation; these are composition subaccounts, not duplicate background purchases. Include inhibitor retained in product, WIP, removed residues and aerosol. | cp_material; cp_acceptance; cp_residue; cp_emission | Whole-preparation and constituent reconciliation | `ergon-bht-concentrate`; `ergon-hyvolt-sds-2024` |
| emission_integrate | oil_mist, vented_water, vented_nitrogen | Integrate matching species concentrations and exhaust flows over real time on the same T/P and wet/dry basis; distinguish captured condensate/retained filter oil from final air release. Dissolved air/nitrogen and residual water are real physical inputs/outputs even where non-characterised bulk air is omitted from impact modelling. Total organic carbon needs actual speciation or explicit unresolved status, not an invented hydrocarbon identity. | cp_emission; cp_residue; cp_utility | Final emitted species and control-device transfers without duplication | `enervac-e865a` |
| acceptance_event_bridge | all inventory rows | Lock Q to unique independently measured first-acceptance events. Use the two-term dispatch/closing-stock bridge only when L_new is zero; otherwise reconcile disjoint D_new, F_new_close and actual post-acceptance net exits L_new on the original acceptance basis. Retain original event Q for later losses/services and prevent internal/return/rework throughput duplication. Do not add Q as an extra external output. Unresolved event/stock evidence blocks complete normalization. | original acceptance events; net parcel-state bridge; original cohort quantities | auditable positive event Q and separate physical stock bridge |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | reference_product | Verify whole mineral inhibited oil, actual at-plant gate and electrical principal function; preserve broad native descriptions and contrary33380 metadata rather than silently treating the tag as proof or rejection. | Actual native original, product/contract evidence and independent classification decision |
| dq_recipe | oil_supply | Record actual whole recipe and supplier assays; hazard disclosure bands and source nominal concentrate strengths are not batch composition, universal recipes or production ranges. | Blend tickets, full composition certification and release assays |
| dq_cohorts | oil_supply | Reconcile first acceptance with disjoint new dispatch/closing FG; maintain raw/WIP/FG mass and burden histories; no stock drawdown, retest or return may mint new output. | Cohort ledgers, paired transfers and inherited vectors |
| dq_coverage | oil_supply | Disclose monitoring period, loads, failed batches, missing species/provider bases, unknown opening vectors, zero-output work and measurement uncertainty. An unresolved quantity or identity is not a zero exchange. | Actual records and explicit gap register |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | reference_product | Require one whole finished mineral-oil reference with net mass, real full Product/Mass/kg chain and declared route/gate; reject ingredient, emission, provider inventory, hard opposing family or unverified whole identity. |  |
| validate_applicability | oil_supply | Verify new petroleum origin, actual inhibited transformer function, full recipe/mineral share and agreed release standard/edition. A generic name or native33380 tag cannot settle current33390; retain actual physical/specification and principal-function evidence for independent decision. | `un-cpc3-2025`; `iec-mineral-insulating-2020`; `ergon-hyvolt-iii-2021` |
| validate_ledger | oil_supply | Check unique first acceptance, finite common denominator, original-cohort service attribution, physical and inherited-burden stocks, complete atomic exchanges, whole concentrate accounting, no double-normalization and explicit Q0 handling. Unsupported inherited burden is unresolved even when physical mass closes. |  |
| validate_interfaces | oil_supply | Check stage links, actual conditioning passes, water/gas/oil constituent closure, receiver/compartment and provider quantity basis. Reject duplicate retained oil, whole concentrate plus its carrier purchase, arbitrary credits or unmeasured-zero releases. | `enervac-e865a`; `ergon-bht-concentrate` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground new inhibited mineral transformer-oil blending and conditioning dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Declared petroleum mineral/DBPC route and factory gate, with actual qualified inputs, release and cohort/stock data |
| excluded_use | Entire33390; upstream refinery production represented by this foreground alone; uninhibited/recycled/ester/silicone/GTL oils; transformer lifetime benefits or downstream services |
| required_metadata | Reference qualifiers, route, contract/grade/standard edition, full recipe, Q bridge, stock/vector histories, actual provider and treatment/emission interfaces |
| required_quality_disclosure | Broad native scope and33380 debt, classification acceptance status, missing native auxiliary identities, source/specification/quantity limits and zero-output/stock burdens |
| update_trigger | Feed/concentrate/assay/route/conditioning or grade change; standard/contract changes; new identity/classification evidence; material stock/provider/monitoring changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD, CPC Version3.0 Explanatory Notes,30June2025,pp154–156,333 and3331–3339. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Current principal-use lubricant definition and residual-oil exclusions; independently assessed classification, not production quantities |
| iec-mineral-insulating-2020 | standard | IEC60296:2020,edition5,publisher scope/description,26June2020. https://webstore.iec.ch/en/publication/61025 | Unused versus recycled mineral insulating-oil scope, delivered state, insulation/heat transfer and cable/capacitor exclusion; publisher abstract only, not complete numerical standard |
| ergon-hyvolt-iii-2021 | handbook | Ergon,HyVolt III Electrical Insulating Oil Marketing Specification,15March2021,one-page complete table/notes. https://ergonspecialtyoils.com/files/naphthenic/HyVolt%20III_English.pdf | Real inhibited hydrotreated naphthenic oil and relevant contract test types; example grade specifications/typicals are not universal release or inventory values |
| ergon-hyvolt-sds-2024 | handbook | Ergon,HyVolt III SDS US,version21,revised26July2024,sections1,3,9. https://msds.ergon.com/files/ergon-lubes-naphthenics/2024-07-26%20SDS%20US%20-%20HYVOLT%20III.pdf | Real transformer-oil hydrocarbon/BHT mixture and physical state; hazard-reporting bands and initial boiling point are not full recipe or distillation curve |
| ergon-bht-concentrate | handbook | Ergon,Inhibitor Concentrate for Transformer Oils,HyVolt BHT brochure,whole-preparation specification and context,dated publisher snapshot6November2026. https://ergonspecialtyoils.com/hyvoltbht/HyVoltBHT_Brochure.pdf | Commercial DBPC/mineral-oil concentrate identity and constituent accounting; no default dose, maintenance interval or lifetime credit |
| enervac-e865a | handbook | ENERVAC,Transformer Oil Purifier/Degasification E865A,process description and performance qualifications,publisher snapshot6November2026. https://www.enervac.com/transformer-oil-purifier-e865a | Actual vacuum dehydration/degassing/filtration technology and water/gas/particle interfaces; no mandatory site process, pass count, efficiency or energy factor |
| un-cpc2-insulating-counterevidence | official_guidance | UNSD,CPC Version2 classification detail33380,Explanatory note and correspondence. https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1073/33380 | Historical broader33380 explicitly included insulating oils; counterevidence only, the listed one-to-many CPC2-to-2.1 correspondence does not establish adoption into currentCPC3.0 |
