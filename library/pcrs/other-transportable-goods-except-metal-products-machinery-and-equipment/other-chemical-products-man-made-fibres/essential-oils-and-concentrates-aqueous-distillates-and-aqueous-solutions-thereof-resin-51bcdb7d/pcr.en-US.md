---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.essential-oils-and-concentrates-aqueous-distillates-and-aqueous-solutions-thereof-resin-51bcdb7d
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Steam-distilled Lavandula angustifolia flowering-top essential oil

## 1. Scope and Applicability

This method covers one identified Lavandula angustifolia Mill. flowering-top essential oil obtained by contact with separately generated steam, condensation, oil/water phase separation and physical filtration, followed by actual quality release and in-scope packing/handling/storage. The foreground starts with weighed harvested flowering tops and delivered steam at the distiller; cultivation, feedstock transport and steam generation retain their compatible upstream burdens. The material is the whole separated essential oil, not isolated linalool, linalyl acetate or a constructed constituent mixture. Species, cultivar, flower/leaf/stem proportions, fresh/wilted/frozen state and moisture must be declared. No plant-part substitution, industrial yield, therapeutic action, fragrance efficacy or scent duration is assumed.

Exclude lavandin and spike lavender, isolated leaf/corolla/calyx oils, citrus expression, immersed-plant hydrodistillation, solvent extraction, resinoids/absolutes, downstream ethanol ultrasound extraction of residue, rectification/deterpenation and its terpene fractions, blending, diluted fragrance formulations and consumer perfume. An actual different route requires separate evidence and applicability assessment; CPC labels cannot merge it into this method.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.essential-oils-and-concentrates-aqueous-distillates-and-aqueous-solutions-thereof-resin-51bcdb7d |
| classification_refs | CPC3.0:35410; narrower |
| covered_products | Whole separated steam-distilled Lavandula angustifolia flowering-top oil, one declared cultivar/part/state cohort |
| excluded_products | Exclude lavandin and spike lavender, isolated leaf/corolla/calyx oils, citrus expression, immersed-plant hydrodistillation, solvent extraction, resinoids/absolutes, downstream ethanol ultrasound extraction of residue, rectification/deterpenation and its terpene fractions, blending, diluted fragrance formulations and consumer perfume. An actual different route requires separate evidence and applicability assessment; CPC labels cannot merge it into this method. |
| representative_product | One identified undiluted whole flowering-top oil, filtered and newly quality-released by net oil-phase mass |
| production_route | Harvested flowering-top receipt → externally supplied steam contact → condensation → oil/water separation → physical filtration → tests and first quality release; matched actual packing/storage/handling burdens retained |
| market_state | Undiluted whole separated liquid essential oil at first quality release; actual residual water/solvent and specification declared; packaging outside Q |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply specified whole lavender essential oil as an industrial fragrance raw material |
| How much | 1 kg net newly quality-released whole oil |
| How well | Botanically authenticated whole oil meeting actual declared identity, water/solvent and chromatographic specification; no fragrance or clinical equivalence inferred |
| How long or cycle | Complete actual reporting period and matched release cohort; no assumed service duration |
| reference_flow_link | released_oil |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Terpenic oil `57b62a9e-51b2-4ea5-a51b-fc30d8cce064` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species and cultivar; flower leaf stem proportions and harvested state; route and steam boundary; actual whole-oil identity and chromatographic test; actual residual water and solvent specifications; net mass tare and volume conversion temperature; first-release gate and unique Q; site and complete period; failed runs returns rework and samples; raw WIP finished stocks and carried exchange burdens; hydrolat leachate residue destinations and allocation; actual packaging warehouse handling dispatch scope; native classification debt and provider compatibility |

The selected Product identity is Terpenic oil, Production mix, at plant. Its route and name-property components are empty; CAS, formula, species, grade, medium and geography/locationOfSupply are unspecified. The comment describes plant-derived terpene-rich essential oil. Only primary Mass, meanValue 1.0, is declared; this is not density, purity, yield, a supplier quantity or an LCI provider. Use this broad identity only with the actual whole-oil botanical/route/release qualifiers. It does not identify an isolated pure chemical or a deterpenation by-product. The native CPC35499 residual classification conflicts with the explicit essential-oil physical description and proposed35410 context; retain this classification debt for source-owner clarification. No explicit native route, fixed grade, CAS or geographic restriction contradicts this qualified oil. Do not infer approval or repair the native class silently.

Q is the positive net mass of uniquely identified whole oil first accepted and newly quality-released in the actual reporting cohort, excluding packaging tare and separately separated aqueous phase. It includes measured residual water retained within the accepted oil specification; do not substitute dry constituents, biomass, all condensate, sales or actual deliveries. A released lot returned, filtered and reaccepted is not newly produced Q. Keep its further burdens with its original cohort. Production outputs already include Q; do not add that same released closing finished stock as another output. Keep a separate finished-store/dispatch mass and burden ledger: opening finished stock plus production release and traced physical returns equals dispatch plus closing stock and actual loss, with return reversals linked. Cancel internal release handover when consolidating. Retain real packing, warehouse, handling/dispatch and rework burdens assigned to the same cohort; do not presume release equals delivery.

Declare every required qualifier in the concrete dataset or equivalent records; absence makes applicability incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 1 kg net accepted whole oil at the first new quality-release gate; Q has the same scope as cp_acceptance and cp_stock, never all plant mass or all distillate. |
| liquid_conversion | liquid and steam ledgers | Mass | kg | Use calibrated net weighing or integrated volume times independently supported actual density at measured composition and temperature; steam mass conversion also requires its actual state. No volume/dry-weight yield as mass yield. |
| normalize_once | all inventory rows | Actual row property | row unit per 1 kg reference flow | Every collection protocol retains undivided actual-period measurements, including failed/zero-output runs, cleaning, returns/rework and raw-material/WIP/finished stock masses and their carried exchange burdens. Assign by genealogy and physical subdivision before allocation. For each exchange, A_i is the attributable converted numerator after opening-WIP carried burden and closing-WIP deferral, co-product attribution and matched in-scope finished-cohort burdens. Do not apply a WIP correction twice or subtract released finished stock from production Q. calc_normalize is the sole reporting division: A_i / Q. Its appearance on a card and in aggregation_rule denotes that same operation, never sequential division. A zero-output campaign has no stand-alone per-kg result; carry its burdens to the causally matched accepted cohort or disclose unresolved attribution. |
| water_and_species | phase ledgers | Mass | kg | Maintain separate physical total, water and actual species ledgers; no assumed reaction water from phase change. Oil density, GC relative area, COD and native meanValue are not substitutes for independent species mass evidence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Weighed harvested Lavandula angustifolia flowering tops and delivered steam received at distiller; actual other inputs and upstream burdens retained |
| starting_condition_role | foreground_input |
| product_classification_scope | Qualified flowering-top whole-oil subset of CPC3.0:35410, proposed narrower scope; classification acceptance separate |
| recursive_input_rule | Purchased same-category oil carries its supplied mass and prior burdens; do not treat rebottling, return or reacceptance as new extraction. Any actually blended purchased oil changes this route and requires evidence reassessment. |
| upstream_dataset_requirement | Match actual harvested species/state/moisture, cultivation/transport, steam and packaging provider reference amounts, grade, geography and time. Generic identity does not establish provider compatibility. |
| disclosure | Disclose botanical and release gate, site/period, exact steam boundary, complete stocks/carried burdens, all water phases, secondary destinations, allocation and included storage/dispatch. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_route | oil_production | Include receiving, any actual pre-distillation holding, steam contact, condenser cooling, separator operation, filtration, release tests, cleaning, pollution controls, actual packing/onsite storage/handling and in-scope dispatch activities, rejects and rework. Delivered steam generation is upstream; if generated onsite, expand the generator as a separate measured unit, replace the internal steam purchase, cancel internal steam transfer and include actual feedwater, fuel/electricity, blowdown and emissions once. No equipment setting or laboratory scale is a factory default. | wilson-lavender-2021 |
| b_phases | water and oil ledgers | Separate direct-contact steam mass/enthalpy, inherent plant water, cooling-circuit makeup/return, cleaning water, gross condensed distillate, separated oil, hydrolat, bottom leachate, wet spent biomass, vapour and actual releases. Condensed steam is water transferred internally, not new oil or new purchased water. Closed cooling circulation is not fresh abstraction. Internal recycled hydrolat/condensate cancels when consolidated; record makeup, purge and real losses. Distinguish oil dissolved/dispersed in each aqueous stream from accepted oil. | turrini-lavender-2021 |
| b_stock | all inventory rows | Q is the positive net mass of uniquely identified whole oil first accepted and newly quality-released in the actual reporting cohort, excluding packaging tare and separately separated aqueous phase. It includes measured residual water retained within the accepted oil specification; do not substitute dry constituents, biomass, all condensate, sales or actual deliveries. A released lot returned, filtered and reaccepted is not newly produced Q. Keep its further burdens with its original cohort. Production outputs already include Q; do not add that same released closing finished stock as another output. Keep a separate finished-store/dispatch mass and burden ledger: opening finished stock plus production release and traced physical returns equals dispatch plus closing stock and actual loss, with return reversals linked. Cancel internal release handover when consolidating. Retain real packing, warehouse, handling/dispatch and rework burdens assigned to the same cohort; do not presume release equals delivery. |  |
| b_complete | all inventory rows | Whole purchased formulations, including their carrier water/solvent, enter procurement once; constituent assays are subledgers. This route uses actual plant material and steam, not a synthetic reconstruction from pure aromatic chemicals. Listed cards are not an exclusion list: add a separate atomic card for every actual extra cleaning chemical, fuel, refrigerant, package component, transport service, waste or elementary species/medium. No actual burden may be removed to fit the example. Distribution after the disclosed scope, consumer use and end of life remain separate stages. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| oil_production | Steam distillation separation and release with cohort finishing ledger | required | Qualified separately generated delivered-steam flowering-top route | foreground | released_oil |

### Process: Steam distillation and whole-oil release (`oil_production`)

#### Inputs

##### Product flows

###### Harvested flowering tops (`flowering_tops`)

Actual weighed whole flowering tops with cultivar, part proportions, state and moisture. Wet purchase mass is not dry biomass or essential-oil mass; retain cultivation/holding/transport burdens.

- Selected flow: Lavandula angustifolia flowering tops
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q once after raw conversion and cohort attribution; sole reporting operation in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_material
- Sources: wilson-lavender-2021

###### Delivered contact steam (`contact_steam`)

Meter actual delivered steam mass, pressure, temperature, dryness and enthalpy/reference state with upstream generator provider. Count its water mass once in the physical ledger and energy service once through its provider; do not duplicate steam heat as another purchase.

- Selected flow: Water steam supplied to distillation
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q once after raw conversion and cohort attribution; sole reporting operation in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_utility
- Sources: wilson-lavender-2021

###### Metered electricity (`electricity`)

Submeter condenser circulation, pumps, filtration, tests, actual chilling/holding and handling; include matched shared loads without adding upstream steam-generator electricity twice. Voltage, region/time and provider must match actual supply.

- Selected flow: Electricity supplied to distillery
- Flow property / unit: Energy / kWh
- Amount rule: A_i / Q once after raw conversion and cohort attribution; sole reporting operation in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_utility
- Sources:

###### Cooling makeup water (`cooling_makeup`)

Record fresh delivered makeup only; retain circulating volume separately for operation checks, not as another procurement. Keep non-contact cooling water separate from distillate.

- Selected flow: Supplied cooling makeup water
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q once after raw conversion and cohort attribution; sole reporting operation in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_water
- Sources:

###### Equipment cleaning water (`washing_water`)

Actual cleaning and failed-batch washdown water, separate from steam condensate. Identify every real cleaning formulation in its own card; water inside such a purchased formulation is only a constituent subledger.

- Selected flow: Supplied equipment cleaning water
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q once after raw conversion and cohort attribution; sole reporting operation in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_water
- Sources:

###### Cellulose filter pad (`filter_pad`)

Conditional actual physical oil filtration consumable, weighed dry with supplier composition. A different real filter medium requires its own identity/card, not an assumed interchangeable dose.

- Selected flow: Cellulose oil-filtration pad
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q once after raw conversion and cohort attribution; sole reporting operation in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_finishing
- Sources: wilson-lavender-2021

###### Supplied steel drum (`steel_drum`)

Conditional one whole procured drum article for this oil cohort, including its supplied integral closure/coating. Record measured empty mass, reuse cycles and compatibility; do not add integral constituents as duplicate purchases. Separately procured closures or other real articles require separate cards. Packing may occur after release but remains in the cohort burden ledger.

- Selected flow: Coated steel drum
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q once after raw conversion and cohort attribution; sole reporting operation in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_finishing
- Sources:

###### Actual analytical solvent (`lab_hexane`)

Only actual onsite quality-test hexane, if used. The cited study dilutes analytical samples in hexane; this is no evidence of solvent extraction of the commercial oil. Measure purchased supplied solvent/assay, recovery and waste separately; outsource testing via its actual service inventory when applicable.

- Selected flow: Laboratory hexane
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q once after raw conversion and cohort attribution; sole reporting operation in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_finishing
- Sources: wilson-lavender-2021

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Newly released whole essential oil (`released_oil`)

The selected Product identity is Terpenic oil, Production mix, at plant. Its route and name-property components are empty; CAS, formula, species, grade, medium and geography/locationOfSupply are unspecified. The comment describes plant-derived terpene-rich essential oil. Only primary Mass, meanValue 1.0, is declared; this is not density, purity, yield, a supplier quantity or an LCI provider. Use this broad identity only with the actual whole-oil botanical/route/release qualifiers. It does not identify an isolated pure chemical or a deterpenation by-product. The native CPC35499 residual classification conflicts with the explicit essential-oil physical description and proposed35410 context; retain this classification debt for source-owner clarification. No explicit native route, fixed grade, CAS or geographic restriction contradicts this qualified oil. Do not infer approval or repair the native class silently.

- Selected flow: Terpenic oil `57b62a9e-51b2-4ea5-a51b-fc30d8cce064`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: fixed_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: method_formula
- Collection protocol: cp_acceptance
- Sources: wilson-lavender-2021

###### Qualified hydrolat coproduct (`hydrolat_sale`)

Only a separately measured qualified sold aqueous portion. Water and dissolved/dispersed aromatics remain in this mass; it is not reference oil Q and not a default oil-equivalent fragrance service. Unsold portions follow their actual recycle/disposal ledger.

- Selected flow: Lavandula angustifolia hydrolat
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q once after raw conversion and cohort attribution; sole reporting operation in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_residual
- Sources: turrini-lavender-2021

###### Actual sold spent biomass (`spent_biomass_sale`)

Only a genuinely sold specified portion with weighed wet mass, moisture and destination. Separate from discarded biomass and later extraction; no hypothetical fuel, feed or compost credit.

- Selected flow: Steam-distilled lavender biomass coproduct
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q once after raw conversion and cohort attribution; sole reporting operation in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_residual
- Sources: turrini-lavender-2021

##### Waste flows

###### Discarded hydrolat (`hydrolat_discard`)

Actual aqueous distillate sent to treatment, excluding sold or internally recycled portions. Record mass, measured water and constituent concentrations and provider; transferred pollutants are not simultaneous direct water emissions.

- Selected flow: Discarded lavender hydrolat
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q once after raw conversion and cohort attribution; sole reporting operation in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_residual
- Sources: turrini-lavender-2021

###### Still-bottom leachate (`still_leachate`)

Actual bottom liquid, distinct from condensed hydrolat; record water, dissolved solids and treatment route. No literature volume ratio supplies a factory default or oil output.

- Selected flow: Lavender distillation still leachate
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q once after raw conversion and cohort attribution; sole reporting operation in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_residual
- Sources: turrini-lavender-2021

###### Discarded wet plant residue (`wet_biomass_waste`)

Weigh complete wet residual plant material; assay moisture and retained oil independently. Exclude any separately sold portion. Inherent plant solids are not assumed converted entirely to oil.

- Selected flow: Wet steam-distilled lavender residue
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q once after raw conversion and cohort attribution; sole reporting operation in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_residual
- Sources: turrini-lavender-2021

###### Spent filter pad (`spent_filter`)

Conditional removed actual pad with retained oil/water; record complete wet waste mass and treatment without double counting its retained contents as separate discarded oil.

- Selected flow: Oil-contaminated cellulose filter pad
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q once after raw conversion and cohort attribution; sole reporting operation in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_residual
- Sources:

###### Irrecoverably rejected oil (`rejected_oil`)

Actual unrecovered off-spec oil leaving for waste treatment, not oil sent to internal rework and not all analytical samples by default. Keep rejection genealogy and its unsuccessful-run burdens.

- Selected flow: Rejected lavender essential oil
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q once after raw conversion and cohort attribution; sole reporting operation in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_residual
- Sources:

###### Cleaning effluent (`wash_effluent`)

Measured collected cleaning liquid with actual contaminants and destination. Waste treatment transfer is separate from any actual onsite treatment and direct elementary discharge.

- Selected flow: Lavender-equipment cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q once after raw conversion and cohort attribution; sole reporting operation in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_residual
- Sources:

###### Spent analytical hexane (`lab_solvent_waste`)

Conditional whole spent analytical solution, including dissolved sample oil, sent to its actual provider. Retain solvent recovery and separately measured air species; no assumed complete evaporation.

- Selected flow: Spent hexane analytical solution
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q once after raw conversion and cohort attribution; sole reporting operation in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_residual
- Sources:

##### Elementary flows

###### Direct cooling-water return (`cooling_return`)

Only actual non-contact cooling water released directly to freshwater; identify receiving compartment, quality and thermal discharge. Sewer or external treatment instead requires a waste card; circulating water is internal.

- Selected flow: Cooling water returned to freshwater
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q once after raw conversion and cohort attribution; sole reporting operation in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_residual
- Sources:

###### Actual water vapour release (`water_vapour_air`)

Actual unrecovered water vapour from the matched operation/cooling ledger; condensation is a phase change. Do not fit this outlet and unknown reaction water to a common closure residual.

- Selected flow: Water vapour to air
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q once after raw conversion and cohort attribution; sole reporting operation in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_residual
- Sources:

###### Measured linalool air loss (`linalool_air`)

Only independently quantified actual linalool reaching air after controls. It is one species, not all whole-oil VOC. Add separate identities/cards for every actual other emitted species and medium; GC area percent is not automatically a mass fraction or emission factor.

- Selected flow: Linalool to air
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q once after raw conversion and cohort attribution; sole reporting operation in section 8
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_residual
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_subdivide | oil and secondary outlets | Separate directly attributable filtration/packing/storage/testing burdens from joint distillation burdens first. Record hydrolat and spent biomass with their true destination and specification: sale as a qualified coproduct versus discarded waste are disjoint physical portions, never both the same mass. Residue ethanol extraction is a separate downstream process; no automatic credit for potential use. | turrini-lavender-2021 |
| a_joint | joint burdens | Use a documented demonstrable causal physical relationship where it exists. Otherwise use actual contemporaneous net revenue shares of qualified oil and genuinely sold coproducts for residual joint burdens, with prices, quantities, time basis and sensitivity disclosed. No default coefficient, automatic hydrolat-water mass allocation or credit for disposal. Apply allocation only to burdens, not to the independent physical mass/species balance. If evidence cannot justify attribution, the concrete dataset remains incomplete. |  |
| a_once | all inventory rows | Every collection protocol retains undivided actual-period measurements, including failed/zero-output runs, cleaning, returns/rework and raw-material/WIP/finished stock masses and their carried exchange burdens. Assign by genealogy and physical subdivision before allocation. For each exchange, A_i is the attributable converted numerator after opening-WIP carried burden and closing-WIP deferral, co-product attribution and matched in-scope finished-cohort burdens. Do not apply a WIP correction twice or subtract released finished stock from production Q. calc_normalize is the sole reporting division: A_i / Q. Its appearance on a card and in aggregation_rule denotes that same operation, never sequential division. A zero-output campaign has no stand-alone per-kg result; carry its burdens to the causally matched accepted cohort or disclose unresolved attribution. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Every collection protocol retains undivided actual-period measurements, including failed/zero-output runs, cleaning, returns/rework and raw-material/WIP/finished stock masses and their carried exchange burdens. Assign by genealogy and physical subdivision before allocation. For each exchange, A_i is the attributable converted numerator after opening-WIP carried burden and closing-WIP deferral, co-product attribution and matched in-scope finished-cohort burdens. Do not apply a WIP correction twice or subtract released finished stock from production Q. calc_normalize is the sole reporting division: A_i / Q. Its appearance on a card and in aggregation_rule denotes that same operation, never sequential division. A zero-output campaign has no stand-alone per-kg result; carry its burdens to the causally matched accepted cohort or disclose unresolved attribution.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | oil_production | Plant receipts/charges | collected_record | species; cultivar; plant-part proportions; state; lot; wet net mass; moisture; raw-stock opening/closing; upstream provider basis; transport | Store undivided actual receiving/charge weights and moisture assays, stock and transport records; preserve complete supplier and cultivation burdens for each lot. No A_i/Q in collection. | kg; moisture mass fraction; t km | Every actual batch/transfer and matched reporting period | Full period including failed/zero-output runs and all carried cohorts | Named actual plant, equipment owner and cohort | per 1 kg reference flow | Calibrated scales; botanical authentication; supplier records |
| cp_utility | oil_production | Steam and electricity meters | collected_record | steam kg; pressure; temperature; dryness; enthalpy; meter start/end; electricity kWh; failed runs; utility provider; actual duration | Utility owner stores undivided matched-period meters, control loads and shared-load attribution; preserve upstream generator boundary. Rates may be integrated with duration; already integrated totals receive no extra time factor. | kg; kWh; kPa; degC; kJ/kg | Every actual batch/transfer and matched reporting period | Full period including failed/zero-output runs and all carried cohorts | Named actual plant, equipment owner and cohort | per 1 kg reference flow | Calibration; steam supply contract; meter and equipment logs |
| cp_water | oil_production | Separate water pathways | collected_record | makeup kg or integrated volume; density and temperature; circuit recirculation; washwater; steam water; plant moisture; condensate gross mass; oil/hydrolat separation; recycle; purge | Water owner records undivided actual pathway amounts and transfers; keep each internal stream identifiable and preserve physical water closure independently of purchases. No total-loop-volume procurement. | kg; m3; kg/m3; degC | Every actual batch/transfer and matched reporting period | Full period including failed/zero-output runs and all carried cohorts | Named actual plant, equipment owner and cohort | per 1 kg reference flow | Separate meters; tank weights; density/temperature records |
| cp_acceptance | oil_production | First oil release | collected_record | lot lineage; species and part; route; whole-oil net weight; tare; residual water; residual solvent test; chromatographic identity; specification; first-release flag; returned/reaccepted mass; Q | Quality owner weighs and records undivided newly accepted whole oil by unique first-release identity; oil specification and water/solvent acceptance are actual declared tests/limits, not invented generic values. Keep samples, rejects and already released rework separate. | kg; measured composition | Every actual batch/transfer and matched reporting period | Full period including failed/zero-output runs and all carried cohorts | Named actual plant, equipment owner and cohort | per 1 kg reference flow | Net/tare weigh tickets; batch release and test records |
| cp_finishing | oil_production | Filtration packing and tests | collected_record | pad dry mass; drum empty mass; complete supplied article; actual analytical solvent mass/composition; sample draw; reuse; cleaning; warehouse and dispatch energy/service; time and lot | Finishing owner retains undivided actual consumables, package transactions and test/warehouse/handling loads, including after-release loads belonging to this cohort. Full supplied articles/solutions are purchases once; constituents are subledgers. | kg; kWh; actual service units | Every actual batch/transfer and matched reporting period | Full period including failed/zero-output runs and all carried cohorts | Named actual plant, equipment owner and cohort | per 1 kg reference flow | Invoices; weights; test and store submeter/service records |
| cp_residual | oil_production | Outlets emissions and coproducts | collected_record | hydrolat sale/discard/recycle; leachate; wet residue sale/discard; moisture; retained oil; rejected oil; used pad; washwater; spent lab solvent; cooling return; vapour; species/medium; control captures; composition; destination; price | Environmental owner records undivided separately measured actual outlets and disjoint destinations; assay actual species independently with uncertainty and mass closure. Retain failures and zero-output runs. COD is a water-quality measure, not a substitute mass/species ledger. | kg; composition; actual monetary units | Every actual batch/transfer and matched reporting period | Full period including failed/zero-output runs and all carried cohorts | Named actual plant, equipment owner and cohort | per 1 kg reference flow | Waste tickets; water/air tests; receiver receipts; sale invoices |
| cp_stock | oil_production | Cohort stock and burden lineage | collected_record | period; all batch runs; opening/closing raw stock and WIP; carried exchange burdens; new Q; opening/closing finished oil; dispatch; returns; rejects; rework; warehouse/packing/handling burdens; internal transfers; allocation evidence | Inventory owner stores undivided cohort mass/burden ledgers, including historical carried WIP and finished-stock burdens. Reconcile production and finished-store accounts separately; cancel internal transfers once on consolidation. Do not add released closing stock to Q or create new output on reacceptance. | kg; original exchange units | Every actual batch/transfer and matched reporting period | Full period including failed/zero-output runs and all carried cohorts | Named actual plant, equipment owner and cohort | per 1 kg reference flow | Full batch genealogy; stock counts; historical LCI records; allocation worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_convert | all inventory rows | Convert raw measurements to their actual numerator unit before attribution. Liquid mass = integrated volume times actual composition/temperature-matched density. Integrate rate over actual duration only when it is a rate. Preserve steam state/enthalpy and independently measured phase/species amounts; no default yield or second duration multiplier. | cp_material; cp_utility; cp_water; cp_residual | converted raw ledger |  |
| calc_attribute | all inventory rows | For each exchange, construct A_i from complete converted matched-period burdens plus attributable opening-WIP carried burdens minus closing-WIP deferred burdens, with physical subdivision and justified residual joint allocation, and actual in-scope finished-cohort packing/storage/handling burdens. Track old released returns/rework with the original cohort; reconcile separate finished mass/burden ledger and cancel internal transfers. Do not add released closing finished stock as production output. Physical outlet A_i retains its actual matched mass; burden allocation does not reduce or duplicate that physical outlet ledger. | cp_stock; cp_material; cp_utility; cp_water; cp_finishing; cp_residual | A_i |  |
| calc_normalize | all inventory rows | Report the attributable exchange amount per 1 kg reference flow as A_i / Q exactly once; Q is cp_acceptance unique positive newly released whole-oil net kg for the same cohort. The reference row is 1 kg. Card formulas and protocol aggregation point to this one operation, not repeated division. | A_i; Q; cp_acceptance; cp_stock | exchange amount per 1 kg reference flow |  |
| calc_physical | oil_production | Reconcile complete physical input mass plus opening process stock and real inward returns against actual outward oil/aqueous/solid/waste/emission masses plus closing process stock, preserving internal transfer cancellation and disjoint destinations. Newly released Q is a subset of unique accepted oil, not every oil re-transfer. Separately reconcile water and independently supported actual species/elements. No unknown reaction-water residual fitting. | cp_material; cp_water; cp_acceptance; cp_residual; cp_stock | independent physical water and species balance |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_identity | released_oil | Verify real species/part/cultivar and supplied oil state, actual test methods, residual water and solvent limits, grade and batch identity; no source default or molecular substitute. | cp_material; cp_acceptance |
| q_complete | all inventory rows | No missing failed runs, zero-output burdens, samples, WIP/stock carry or actual included warehouse/packaging/handling/rework. Keep uncertainty and unresolved attribution explicit. | cp_stock; cp_finishing |
| q_source | source applicability | Use the two studies for their verified botanical/physical route and stream distinction only. Utah frozen laboratory material and Italian Rosa residue work do not establish present industrial quantities or geography. Wilson Table2 mass ratio and printed inverted sentence conflict; no yield default is taken. | wilson-lavender-2021; turrini-lavender-2021 |
| q_provider | unbound auxiliaries | Resolve each actual auxiliary and elementary species/medium before dataset finalization; retain blank UUID rather than adopting a contrary route/grade. Native broad identity is not a provider LCI amount. | supplier and environmental primary records |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_identity | released_oil | Require exact species/part/route/state and full actual oil identity and acceptance records; verify generic Product UUID compatibility separately from provider quantities, grade and geography. The unique reference_flow_link must select released_oil in both languages with the same UUID. Auxiliary UUID/provider gaps require disclosure and later binding, not fabricated identities. |  |
| v_cohort | all inventory rows | Q must be positive unique first-release whole-oil net mass of the matched cohort. Include all failed runs, rework, WIP carry and real storage/packing/handling loads; trace zero-output burdens. Production and warehouse balances must reconcile without counting released closing finished stock twice or a return as new production. Any unavailable actual required record leaves the concrete dataset incomplete. |  |
| v_physical | physical and species ledgers | Close total physical mass with measured inputs, water phases, oil, all outputs and stock changes before allocation; independently verify actual molecular species and supported elemental balances. Steam condensation, evaporation and water redistribution are phase changes, not net reaction-water production. Do not infer a reaction-water term, missing VOC or second unknown outlet from the same closure residual; disclose uncertainty and investigated losses. No oil amount from COD, GC-area conversion, assumed extraction yield or biomass remainder. |  |
| v_dimension | all inventory rows | Normalize only once using calc_normalize after raw conversions, attribution and stock burdens. Volumes require actual independently supported composition/temperature-matched density; a native secondary coefficient is not density. Hydrolat, leachate, oil and cooling return remain separate. Each waste transfer, direct release and coproduct portion must have one physical destination and no duplicate mass. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Qualified industrial whole lavender oil input at the declared release gate |
| allowed_use | Actual same botanical part, steam route, oil state and gate with compatible provider basis and complete carried burdens |
| excluded_use | No service or therapeutic equivalence, other species, expressed/solvent/fractionated oils, hydrolat as oil, pure linalool as whole oil or assumed full35410 coverage |
| required_metadata | species and cultivar; flower leaf stem proportions and harvested state; route and steam boundary; actual whole-oil identity and chromatographic test; actual residual water and solvent specifications; net mass tare and volume conversion temperature; first-release gate and unique Q; site and complete period; failed runs returns rework and samples; raw WIP finished stocks and carried exchange burdens; hydrolat leachate residue destinations and allocation; actual packaging warehouse handling dispatch scope; native classification debt and provider compatibility |
| required_quality_disclosure | Primary measurements, provider compatibility, full stocks and water/species closure, allocation/uncertainty, native classification debt and unresolved auxiliary UUIDs |
| update_trigger | Change in species/part/state, route, supplier/provider, steam boundary, specification, reference gate, coproduct destination or material evidence |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| wilson-lavender-2021 | literature | Wilson et al. (2021), Molecules 26, 2343, section 4 and Table 2; https://doi.org/10.3390/molecules26082343 | Actual flowering-top steam distillation, condenser/separator and filtration; plant-part qualification. Utah July2020 laboratory case, frozen material; no industrial setpoints, density or default yield. Printed yield sentence is inverted relative to table masses and is not adopted. Analytical hexane is not an extraction route. |
| turrini-lavender-2021 | literature | Turrini et al. (2021), Applied Sciences 11, 5495, section 1, Figure 1 and section 2.1; https://doi.org/10.3390/app11125495 | Oil phase, hydrolat, still leachate and spent biomass are distinct; 2017 Albenga Italy cultivar Rosa case. Introductory volume/dry-weight yield and leachate concentration are not oil mass yields. Subsequent ethanol/ultrasound residue extraction is outside this oil route. |
