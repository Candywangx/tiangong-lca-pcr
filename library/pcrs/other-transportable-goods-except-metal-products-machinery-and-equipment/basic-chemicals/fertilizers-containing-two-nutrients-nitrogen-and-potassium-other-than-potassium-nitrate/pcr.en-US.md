---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.fertilizers-containing-two-nutrients-nitrogen-and-potassium-other-than-potassium-nitrate
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Dry compacted NK fertilizer from ammonium sulphate and potassium chloride

## 1. Scope and Applicability

This method covers bulk solid NK composite granules produced by dry mixing purchased ammonium sulphate and potassium chloride particles, roller-pressure compaction/briquetting, crushing, sizing/polishing, dry classification, internal fines return, dry dust capture, final acceptance, storage and bulk dispatch. Each finished granule contains the two feed components; a mere physical mixture of separate finished granules is outside this method. Sulfur in ammonium sulphate is retained and reported; “NK” describes the N/P/K grouping and does not assert absence of secondary nutrient sulfur. The route distinction follows BREF §7.2.1; Toray JP2019043797A describes the specific AS/KCl compression, sizing and recycling route, and the equipment-maker technical note independently explains the dry unit operations. No cited case fixes recipe, particle size, pressure, speed, density, strength, moisture, yield, energy or emissions for a future plant.

Exclude potassium nitrate, intentional phosphorus/pesticide addition, organic formulations, other feed chemistries, liquid NK, wet/binder-assisted granulation, added process humidification, thermal drying, chemical synthesis and on-site coating. Incidental feed moisture/conditioning remains part of supplied material and must be characterised; incompatibility or real reaction requires review. Purchased feeds retain their actual upstream routes and burdens. Ancillary contained cleaning and pressure-circuit maintenance are included when real. The maker's diagram includes optional humidification/coating: these are outside the selected dry uncoated route, not presumed absent at every plant. Its broad low-pollution claims prove no zero release. Any observed additional fuel, reagent, packaging, maintenance material, transport or release requires its own atomic row, method and evidence before dataset completion.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.fertilizers-containing-two-nutrients-nitrogen-and-potassium-other-than-potassium-nitrate |
| classification_refs | CPC 3.0 34647; proposed narrower subset, independent mapping acceptance pending |
| covered_products | Binderless dry roller-compacted AS/KCl solid composite granules, no intentional P or pesticide addition; sulfur retained |
| excluded_products | KNO3, separate-granule blends, wet/binder/coated/liquid routes and other feed chemistries |
| representative_product | One actual accepted AS/KCl NK SKU with measured composition; no prescribed grade |
| production_route | Dry mixing → roller compaction → crushing/sizing → classification and fines return → acceptance/storage/bulk loading |
| market_state | Net bulk fertilizer at plant gate, actual retained moisture/impurities included; no delivery sacks |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a solid composite-granule fertilizer containing N and K, excluding potassium nitrate |
| How much | 1 kg accepted net supplied bulk product |
| How well | Declared actual N and K/K2O-equivalent assays, sulfur, moisture, homogeneity, size, hardness/attrition, storage stability and agreed acceptance |
| How long or cycle | One complete manufacturing/storage period through plant-gate release; no field response or agronomic lifetime claim |
| reference_flow_link | nk_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Fertilizers containing two nutrients: nitrogen and potassium, other than potassium nitrate `1dfc674e-e405-47ee-8abd-b118ec240fa5` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Actual SKU and complete feed recipe; AS/KCl grades and supplier upstream routes; whole supplied mass and constituent assays; no intentional P/pesticide/KNO3; N chemical forms and total N; K versus K2O reporting and assay methods; S and Cl; moisture and free acidity; feed/product size distributions; compression/crushing/sizing and recycle records; hardness/attrition/homogeneity and storage acceptance; bulk delivery; site and period; final gate B; feed/WIP/finished-stock boundaries and carried burdens; native electricity CN/voltage and supplier references; KCl/oil volume conventions; water/air measurements; waste destinations; allocation/capital scope |

Declare all qualifiers in actual dataset metadata, process notes or reference-flow comments. The reference is supplied-product mass, not a nutrient-as-N/K functional unit and not proof of agronomic equivalence.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| net_product | nk_product | Mass | kg | B is the unique net newly completed accepted bulk product crossing the final release gate during the period. Weigh gross/tare with calibrated scales; exclude already completed opening-stock resale, internal return passes, discarded off-grade and any containers. Count each finally accepted lot once. Record actual moisture, not a hypothetical dry fertilizer. |
| period_pool | all inventory rows | Consistent native property | per 1 kg reference flow | Retain the complete same SKU/state/route raw production pool including start/stop, failed/zero-output batches, cleaning, rework, feed/WIP/stock changes and carried burdens. Convert raw units then attribute burdens and divide once by positive B. If total B=0, retain totals without a normalized result. |
| feed_basis | feed_as; feed_kcl; nk_product | Mass | kg | Whole supplied material is the exchange; N, K, K2O, S, Cl, moisture and conditioning are measured subledgers. K2O is a reporting equivalent, not an actual oxide reagent. Preserve elemental and oxide bases with documented molar conversion; do not count constituent water or active salts twice. |
| provider_basis | feed_kcl; hydraulic_oil; electricity; cleaning_water | Native reference property | native unit | Separate physical identity from supplier background quantity. For Volume/m3 define solid/bulk/liquid basis, packing, temperature, moisture and measured compatible density; native secondary property ratios supply no density. Match electricity CN/<1kV/user mix; other supplies need compatible verified links. |
| air_basis | pm25; pm2510; pm10plus; ammonia_air; water_vapour | Mass | kg | Use compatible concentration times already integrated gas volume, or integrate concentration times gas-flow rate over time. Never multiply integrated volume by time again. Preserve wet/dry, normal/actual, temperature, pressure and detection basis; no overlapping PM total and bins. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased AS/KCl particles, actual hydraulic-fluid formulation and cleaning water at receipt; metered delivered electricity |
| starting_condition_role | Foreground upstream-product interface, not a cradle-to-gate cut-off |
| product_classification_scope | Only the dry binderless uncoated AS/KCl composite-granule subset of NK excluding KNO3 |
| recursive_input_rule | External same-category material requires measured quantity, history and compatible provider; internal mixture/compacts/fines remain equal two-sided transfers, no second purchase or credit |
| upstream_dataset_requirement | Link actual feed manufacture, conditioning, utilities, maintenance materials, inbound transport and external waste treatment; disclose missing providers, do not erase burdens |
| disclosure | Site/period, complete stage coverage, stock/WIP/burden carryover, capital and transport boundaries, exclusions, sampling, grade and provider basis |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_stages | compact | Include actual reception, feed preparation, weighing/mixing, force feeding, roller hydraulics, crushing, sizing, classification, all recirculation passes, dust control, storage, bulk loading and final release. Aggregate one foreground unit while retaining separate stage records. | toray-nk-compaction-2019; sahut-compaction-1999 |
| boundary_actual | all inventory rows | No intentional binder/water/coating/thermal route is modelled. Ancillary contained cleaning and maintenance remain actual exchanges. Additional observed exchanges or chemical transformations require source-supported atomic extension and review; an exclusion cannot hide an operated stage. | eu-jrc-lvic-aaf-2007; toray-nk-compaction-2019 |
| boundary_capital | compact | Declare actual capital/equipment scope and any exclusion rationale with sensitivity. If included, retain measured asset quantity, materials, service period, capacity and allocation separately from operational service; no fictitious per-kg machine mass or default life. External transport and treatment cannot be implied by feed identity. | sahut-compaction-1999 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| compact | Receipt, dry mixing, compaction, crushing/sizing/classification, recycle/dust control, storage and bulk dispatch | required | Actual binderless dry AS/KCl route; auxiliaries conditional on operation | foreground | 1 kg accepted net bulk NK product |

Physical stages: receipt → feed preparation/mixing → roller compaction → crushing/sizing → classification → acceptance/storage/bulk delivery. Fines, oversize and actual rework return to their observed destinations within this unit, each pass measured independently; transfer ends retain equal mass and carried burdens, with no intermediate reference-product export.

### Process: Dry NK compaction and delivery (`compact`)

#### Inputs

##### Product flows

###### Ammonium sulphate (`feed_as`)

Purchased solid ammonium sulphate particles, not ammonium persulphate, aqueous slurry or nitrogen-equivalent mass. Record the complete supplied solid including moisture and impurities, actual N/S assay, free acidity, size distribution and supplier manufacture. The broad finished-product native record imposes no geography or synthesis route; do not infer one from another AS record or transplant the patent caprolactam example.

- Selected flow: Ammonium sulphate `7f128b59-9df7-4b5d-ad0f-00103b916cf7`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual attributable complete-period quantity using cp_feed; report per 1 kg reference flow only with positive B. No default amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_feed
- Sources: toray-nk-compaction-2019; sahut-compaction-1999

###### Potassium chloride (`feed_kcl`)

Purchased fertilizer-grade KCl particles, CAS 7447-40-7, including supplied conditioning and moisture. Retain measured supplied kg for physical K/Cl balances. Native reference is Volume/m3; retain independently measured compatible supplier volume, solid/bulk convention, packing, moisture, temperature and density. Unspecified provider volume leaves background linkage incomplete. The English comment describes sylvite/brine production; its Chinese mineral-word mistranslation does not change the consistent KCl name/CAS/classification. No specific geography, nutrient grade or density is encoded. Incompatible additives require scope review.

- Selected flow: Potassium chloride `c0f36a80-f6a0-4926-9a92-9c80f5fcb662`
- Flow property / unit: Volume / m3
- Amount rule: Collect the actual attributable complete-period quantity using cp_feed; report per 1 kg reference flow only with positive B. No default amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_feed
- Sources: toray-nk-compaction-2019; sahut-compaction-1999

###### Alternating current (`electricity`)

This identity is explicitly CN, below 1 kV, grid-average consumption mix delivered to the user. Use only for that actual supply; another location, voltage or generator needs its compatible verified flow/provider before dataset completion. Meter reception, grinding if used, blending, force feed, roller hydraulics, crushing, sizing, screens, recycling conveyors, dust fans and bulk loading; retain idle/start/stop energy. Native property is Net calorific value/MJ. Convert metered kWh once by 3.6 MJ/kWh without inventing fuel efficiency.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the actual attributable complete-period quantity using cp_energy; report per 1 kg reference flow only with positive B. No default amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_energy
- Sources: toray-nk-compaction-2019; sahut-compaction-1999

###### Hydraulic Fluid (`hydraulic_oil`)

Conditional whole purchased petroleum-oil-compatible hydraulic-fluid formulation for the actual roller-pressure circuit. The native lubricant classification is under preparations containing at least 70% petroleum oils, while its broad comment also mentions synthetic base oil: require actual supplier composition compatible with that category; do not extend this identity to water-glycol or synthetic-ester hydraulic fluids. Record oil grade, complete additives, actual replacements/top-ups, opening/closing circuit inventory and losses. Native reference Volume/m3 has no route or geography limit; match actual supplier temperature/volume definition and independently measured density when mass is needed. Secondary coefficients are not measured density. Do not inventory the base oil and additives again as duplicate purchases.

- Selected flow: Hydraulic Fluid `30691a38-a947-4b41-991e-194f6c9aa88f`
- Flow property / unit: Volume / m3
- Amount rule: Collect the actual attributable complete-period quantity using cp_maintenance; report per 1 kg reference flow only with positive B. No default amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_maintenance
- Sources: toray-nk-compaction-2019; sahut-compaction-1999

###### Tap water (`cleaning_water`)

Conditional contained ancillary cleaning water, not intentional process humidification or binder water. Record the complete cleaning event, including no-output periods, mass or calibrated volume with measured compatible density, and wastewater destination. Native supplied treated water has no geography limit. Direct environmental discharge requires treatment/emission methods and additional atomic species rows before dataset completion.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual attributable complete-period quantity using cp_water; report per 1 kg reference flow only with positive B. No default amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_water
- Sources: toray-nk-compaction-2019; sahut-compaction-1999

##### Elementary flows

###### Atmospheric water vapour absorbed into NK solids (`humidity_uptake`)

Conditional measured environmental moisture uptake. It is neither purchased water nor a negative vapour emission. Independently determine uptake using moisture/air measurements with stock and temperature coverage; do not infer it from an unexplained mass residual. The searched Volume-based resource water record does not establish a compatible mass exchange, so UUID remains unresolved.

- Selected flow: Atmospheric water vapour absorbed into NK solids
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual attributable complete-period quantity using cp_water; report per 1 kg reference flow only with positive B. No default amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_water
- Sources: toray-nk-compaction-2019; sahut-compaction-1999

#### Outputs

##### Product flows

###### Fertilizers containing two nutrients: nitrogen and potassium, other than potassium nitrate (`nk_product`)

Only final accepted bulk AS/KCl composite granules are this reference output. Native name is broad manufactured NK fertilizer at plant; no fixed recipe, CAS, geography or competing granulation route is imposed. The optional pesticide list is not a required formulation; this method excludes pesticide addition. Record actual accepted nutrient composition, moisture, strength, size distribution and route. Intermediate blend/compacts and recycled fines remain internal transfers within compact, never second reference outputs.

- Selected flow: Fertilizers containing two nutrients: nitrogen and potassium, other than potassium nitrate `1dfc674e-e405-47ee-8abd-b118ec240fa5`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_product
- Sources: un-cpc-3-2025; toray-nk-compaction-2019

##### Waste flows

###### Discarded ammonium sulphate and potassium chloride NK granules (`reject_nk`)

Only actual discarded off-specification granules cross this waste boundary. Record complete moisture, N/K/S/Cl composition and receiver. Reworked lots and internal fines are internal transfers. A sale as fertilizer is a product function requiring separate identity/allocation review, not a waste disposal or automatic avoided-product credit. Do not substitute ammonium-chloride waste.

- Selected flow: Discarded ammonium sulphate and potassium chloride NK granules
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual attributable complete-period quantity using cp_waste; report per 1 kg reference flow only with positive B. No default amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_waste
- Sources: toray-nk-compaction-2019; sahut-compaction-1999

###### Dust (`captured_dust`)

Only separately collected AS/KCl process dust actually leaving for external management. The broad native waste-dust identity has no material-treatment/geography limit; constrain actual composition, moisture, contamination and receiver. Captured dust returned to compact is an equal internal transfer and not an external waste or air emission. No native housekeeping sentence is a monitoring frequency or quantity default.

- Selected flow: Dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual attributable complete-period quantity using cp_waste; report per 1 kg reference flow only with positive B. No default amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_waste
- Sources: toray-nk-compaction-2019; sahut-compaction-1999

###### Waste oil (`waste_oil`)

Conditional spent hydraulic lubricating oil generated by in-plant equipment maintenance, consistent with the native as-generated maintenance lubricating/cutting-oil category. Constrain this row to the actual hydraulic lubricating stream, including additives/water/contamination and external receiver. Not recycled oil sold as product and not a combined waste collection.

- Selected flow: Waste oil `2a68e97a-21fe-43f7-a86e-3e39b653e10a`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual attributable complete-period quantity using cp_maintenance; report per 1 kg reference flow only with positive B. No default amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_maintenance
- Sources: toray-nk-compaction-2019; sahut-compaction-1999

###### Contained NK equipment-cleaning wastewater (`cleaning_effluent`)

Conditional separately collected aqueous cleaning stream sent to a named external wastewater receiver. Meter whole wet stream; sample dissolved N/K/S/Cl and suspended solids separately. These subledgers are not duplicate wet exchanges. No electrolytic-manganese washing-water identity or manure candidate is compatible. Unknown treatment/provider remains disclosed, not zero burden.

- Selected flow: Contained NK equipment-cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual attributable complete-period quantity using cp_water; report per 1 kg reference flow only with positive B. No default amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_water
- Sources: toray-nk-compaction-2019; sahut-compaction-1999

##### Elementary flows

###### particles (PM2.5) (`pm25`)

Residual released particles up to 2.5 micrometres after actual controls, plus attributable fugitives. Native medium: emissions to outdoor air, unspecified subcompartment; not indoor exposure, resource uptake or a correction flow. Record actual source/height/location and use a more specific compatible flow only after verification. Measure full period mass without default release; do not add total PM to the size bins.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual attributable complete-period quantity using cp_air; report per 1 kg reference flow only with positive B. No default amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: toray-nk-compaction-2019; sahut-compaction-1999

###### particles (PM2.5 - PM10) (`pm2510`)

Only the non-overlapping 2.5–10 micrometre fraction, not total PM10. Native medium: emissions to outdoor air, unspecified subcompartment; not indoor exposure, resource uptake or a correction flow. Record actual source/height/location and use a more specific compatible flow only after verification. Measure full period mass without default release; do not add total PM to the size bins.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual attributable complete-period quantity using cp_air; report per 1 kg reference flow only with positive B. No default amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: toray-nk-compaction-2019; sahut-compaction-1999

###### particles (> PM10) (`pm10plus`)

Only particles greater than 10 micrometres; retain this interval even when a monitoring regime focuses on finer PM. Native medium: emissions to outdoor air, unspecified subcompartment; not indoor exposure, resource uptake or a correction flow. Record actual source/height/location and use a more specific compatible flow only after verification. Measure full period mass without default release; do not add total PM to the size bins.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual attributable complete-period quantity using cp_air; report per 1 kg reference flow only with positive B. No default amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: toray-nk-compaction-2019; sahut-compaction-1999

###### ammonia (`ammonia_air`)

Conditional independently measured NH3 gas, CAS 7664-41-7, from actual solids storage/handling or cleaning; no assumed positive emission or default factor. Convert ammonia-N to NH3 only with a documented molar basis. Native medium: emissions to outdoor air, unspecified subcompartment; not indoor exposure, resource uptake or a correction flow. Record actual source/height/location and use a more specific compatible flow only after verification. Measure full period mass without default release; do not add total PM to the size bins.

- Selected flow: ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual attributable complete-period quantity using cp_air; report per 1 kg reference flow only with positive B. No default amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: toray-nk-compaction-2019; sahut-compaction-1999

###### water vapour (`water_vapour`)

Conditional independently measured molecular water vapour, CAS 7732-18-5; distinguish free-water evaporation, bound-water release and any separately proven chemical formation. No dryer is assumed and the mass residual is not evaporation. Native medium: emissions to outdoor air, unspecified subcompartment; not indoor exposure, resource uptake or a correction flow. Record actual source/height/location and use a more specific compatible flow only after verification. Measure full period mass without default release; do not add total PM to the size bins.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual attributable complete-period quantity using cp_air; report per 1 kg reference flow only with positive B. No default amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: toray-nk-compaction-2019; sahut-compaction-1999

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | compact | Subdivide by actual SKU/state/route and stage meters before allocation. Share common electricity/maintenance by documented measured causation or service duty; retain complete failed and idle burden pools and justify any residual allocation. No default economic/mass fraction. | toray-nk-compaction-2019; sahut-compaction-1999 |
| allocation_physical | all inventory rows | Keep the complete unallocated physical mass/water/element and internal-transfer ledger separate from the attributed environmental-burden ledger. Never multiply physical product outlets or paired internal transfers by an allocation fraction. Internal returns carry their existing burdens and extra processing energy; no avoided-feed credit. | toray-nk-compaction-2019; sahut-compaction-1999 |
| allocation_outputs | reject_nk; captured_dust; waste_oil | No routine co-product is presumed. Classify each actual external output once by function, legal/receiver status and composition. A sold off-grade fertilizer or recovered oil product needs separately reviewed identity and allocation; do not silently call it waste or automatically assign substitution credit. | toray-nk-compaction-2019; sahut-compaction-1999 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

Preserve raw totals before attribution and never select only productive events. The final release gate defines unique completed B; all preceding actual storage and bulk loading remain in compact. Feed and unaccepted WIP have opening/closing process-stock ledgers; released finished goods have a separate warehouse ledger and B cannot be counted again as closing process stock. Rework counts once at final acceptance; all repeat energy remains. A separate burden-carryover ledger records opening/closing WIP embodied burdens and attribution without erasing failed consumption or creating free WIP. Every protocol belongs only to compact and covers the same complete SKU/state/route period; B=0 retains all events and burdens without an invented normalized result. Keep a receipt/store reconciliation separately from metered production charges: opening feed stock plus receipts minus closing feed stock and unchanged external returns must reconcile with actual charges and separately identified losses. The production-pool physical ledger uses those complete charges plus opening post-charge WIP; its closing WIP excludes uncharged feed stock. The whole-site receipt ledger includes both feed stores and WIP. Do not add receipts and charges as two purchased exchanges. Attribute supplier burdens to actual production demand, transfer measured closing feed/WIP embodied burdens to the carryover ledger, and retain every failed-run burden in the matched pool.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | compact | nk_product | foreground_record | SKU; one-time release event; gross/tare/net B; N forms and total N; K/K2O; S/Cl; moisture; free acidity; feed/product sieves; crush strength/attrition; homogeneity; start/end feed/WIP; finished-stock ledger; carried burdens | Calibrated final net scale and representative lot assays, sieve/strength/storage checks; retain agreed test method, sampling, scale uncertainty and rejected lots | kg | Every batch/stage and associated representative monitoring | Complete period including start/stop, failed/zero-output, rework, storage and WIP | Actual same-SKU/state/route site | per 1 kg reference flow | Calibration, original logs, assays/sampling, paired transfer/stock reconciliation and supplier/receiver evidence |
| cp_feed | compact | feed_as; feed_kcl | foreground_record | Supplier; grade/route; complete supplied kg; component/coating/water assay; KCl m3 convention, packing, moisture, temperature and independently measured density; stock/charge/returns; particle sizes; roller settings; pass counts | Calibrated receipt/feed weighing, metered charges and supplier-compatible volume/density tests; reconcile stocks and measured internal transfers; inspect actual granulation route | kg; m3 | Every batch/stage and associated representative monitoring | Complete period including start/stop, failed/zero-output, rework, storage and WIP | Actual same-SKU/state/route site | per 1 kg reference flow | Calibration, original logs, assays/sampling, paired transfer/stock reconciliation and supplier/receiver evidence |
| cp_energy | compact | electricity | foreground_record | Stage kWh; meter; site/time; CN delivery; voltage; supplier quantity; press/force-feed/crusher/screen/fan/load duty; failed/idle/start/stop energy; common load attribution | Calibrated stage meters and bills, all repeat processing passes; measure common loads separately and preserve conversion and attribution records | MJ | Every batch/stage and associated representative monitoring | Complete period including start/stop, failed/zero-output, rework, storage and WIP | Actual same-SKU/state/route site | per 1 kg reference flow | Calibration, original logs, assays/sampling, paired transfer/stock reconciliation and supplier/receiver evidence |
| cp_maintenance | compact | hydraulic_oil; waste_oil | foreground_record | Complete oil formulation; supplier volume/temperature; grade; density; top-up/replacement; opening/closing hydraulic stock; waste wet kg and additives/water; spill/capture; receiver | Meter whole purchased fluid volume; independently measure compatible density for mass; weigh spent oil and reconcile circuit stocks; retain supplier/maintenance/receiver evidence | m3; kg | Every batch/stage and associated representative monitoring | Complete period including start/stop, failed/zero-output, rework, storage and WIP | Actual same-SKU/state/route site | per 1 kg reference flow | Calibration, original logs, assays/sampling, paired transfer/stock reconciliation and supplier/receiver evidence |
| cp_waste | compact | reject_nk; captured_dust | foreground_record | Origin; actual full mass; moisture; dry matter; N/K/S/Cl; contamination; each internal return and external waste; receiver/function/treatment; transfer receipt | Weigh each separated dust/reject stream and both ends of every return; independently verify waste status, destination and composition | kg | Every batch/stage and associated representative monitoring | Complete period including start/stop, failed/zero-output, rework, storage and WIP | Actual same-SKU/state/route site | per 1 kg reference flow | Calibration, original logs, assays/sampling, paired transfer/stock reconciliation and supplier/receiver evidence |
| cp_water | compact | cleaning_water; cleaning_effluent; humidity_uptake | foreground_record | Complete cleaning cycles; supplied and effluent wet kg or metered m3 with measured density; dissolved ions and suspended solids; feed/product/stock moisture; air humidity, temperature and independent uptake/evaporation observations | Meter full contained cleaning events; representative independent liquid/solid/air sampling and moisture tests; distinguish phase exchange from evidenced reaction water; preserve unexplained residual | kg | Every batch/stage and associated representative monitoring | Complete period including start/stop, failed/zero-output, rework, storage and WIP | Actual same-SKU/state/route site | per 1 kg reference flow | Calibration, original logs, assays/sampling, paired transfer/stock reconciliation and supplier/receiver evidence |
| cp_air | compact | pm25; pm2510; pm10plus; ammonia_air; water_vapour | foreground_record | Species/source/location/height; outdoor compartment; non-overlapping size fractions; concentration; integrated gas volume or volume flow/time; pressure; temperature; wet/dry and normal/actual; controls/fugitives; detection limit; represented hours | Measure residual stack and fugitive releases over representative full operating states; match sampling and gas-volume basis, distinguish integrated volume from flow rate; no generic factor or forced balance | kg | Every batch/stage and associated representative monitoring | Complete period including start/stop, failed/zero-output, rework, storage and WIP | Actual same-SKU/state/route site | per 1 kg reference flow | Calibration, original logs, assays/sampling, paired transfer/stock reconciliation and supplier/receiver evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalization | all inventory rows | Preserve raw matched full-period totals and stock/WIP burden transfers. After compatible raw unit conversion and documented burden attribution, divide each attributable exchange once by positive B. Reference output is exactly 1 kg; B=0 retains totals without a unit inventory. | cp_product; cp_feed; cp_energy; cp_maintenance; cp_waste; cp_water; cp_air | Exchanges per 1 kg reference flow, original totals and carried-burden ledger | toray-nk-compaction-2019; sahut-compaction-1999 |
| provider_conversion | feed_kcl; hydraulic_oil; cleaning_water | Keep physical kg and provider-native m3 separately. Use independently measured corresponding mass/volume density for the identical material, packing, moisture and temperature definition; do not use a database secondary coefficient or an unrelated patent density. Resolve unknown provider basis before claiming a complete background link. | cp_feed; cp_maintenance; cp_water | Compatible period kg and m3 before normalization | toray-nk-compaction-2019; sahut-compaction-1999 |
| electricity_conversion | electricity | Convert measured kWh using exactly 3.6 MJ/kWh once; retain native Net calorific value property. Include all repeat press/crush/classification passes and actual common loads, then normalize by B once. | cp_energy; cp_product | MJ per 1 kg reference flow | toray-nk-compaction-2019; sahut-compaction-1999 |
| physical_balance | all inventory rows | On matched complete period boundaries, complete measured production charges plus opening post-charge stock/WIP and independently measured environmental uptake equal accepted product plus actual discarded solids, contained effluent, actual releases and closing post-charge stock/WIP. Reconcile uncharged feed stocks separately through the receipt ledger. Exclude already released B from closing process stocks; completed-goods warehouse stocks have a separate ledger. Equal internal return transfers cancel only in the aggregate. Balance whole wet mass, dry solids, N/K/S/Cl and actual oil/additive carbon separately; no theoretical recipe or residual-assigned loss. | cp_product; cp_feed; cp_maintenance; cp_waste; cp_water; cp_air | Complete unallocated physical and elemental ledgers | toray-nk-compaction-2019; sahut-compaction-1999 |
| water_species | all inventory rows | Separate whole wet inputs from constituent/carrier-water subledgers. Dry compression itself establishes no net chemical water formation or consumption. Measure free-water phase exchange and any structural/bound-water change independently. Evidence of real reaction requires species/stoichiometry and separate generation/consumption evidence and scope review; never fit unknown reaction water and an unknown outlet to one residual, or use COD as dry matter/reaction water. | cp_feed; cp_water; cp_air; cp_product | Water/species ledgers and disclosed residuals | toray-nk-compaction-2019; sahut-compaction-1999 |
| air_mass | pm25; pm2510; pm10plus; ammonia_air; water_vapour | Multiply compatible concentration by already integrated gas volume, or integrate concentration times volume flow rate over time. Preserve each represented operating state, wet/dry and pressure/temperature bases. Convert nitrogen-reported NH3 with documented molar mass basis only. Keep PM bins disjoint, captured solids separate, and normalize full attributable mass by B once. | cp_air; cp_product | Species kg per 1 kg reference flow | toray-nk-compaction-2019; sahut-compaction-1999 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all inventory rows | Verify full native name components, route/state/grade, geography where declared, CAS, type/medium and exact reference property/unit version chain. Keep unknowns distinct from contradictions; broad identity does not prove supplier amount, recipe or background suitability. | cp_product; cp_feed; cp_energy; cp_maintenance |
| quality_measurement | all inventory rows | Preserve original calibrated measurements, assay methods, sampling coverage, uncertainty and detection limits. Missing UUID or monitoring is not measured zero; retain actual exchanges and unresolved links. No borrowed patent or maker yield/pressure/recipe/energy/density default. | cp_product; cp_water; cp_air |
| quality_period | all inventory rows | Use complete same-SKU/state/route pools including failed/zero-output batches and rework. Trace opening/closing WIP embodied burdens in a separate carryover ledger so incoming WIP is not free and failed burdens are not discarded. Unresolved carryover allocation remains incomplete dataset evidence. | cp_product; cp_feed; cp_energy; cp_maintenance |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | nk_product | Require exactly one final product reference row with compatible broad NK identity and Mass/kg. Verify actual AS/KCl composite-granule state/route, no KNO3 or intentional P/pesticide, positive unique B and all qualifiers. Native broad identity is not universal methodology coverage. | un-cpc-3-2025; toray-nk-compaction-2019 |
| validate_period | all inventory rows | Check raw totals, failed/zero-output coverage, stock/WIP and burden carryover, internal return equality and one normalization. B=0 cannot yield a normalized inventory. Every collection protocol belongs to compact and covers its actual linked rows. | toray-nk-compaction-2019; sahut-compaction-1999 |
| validate_physics | all inventory rows | Reconcile complete physical wet/dry mass, molecular/structural/free water, actual species, N/K/S/Cl and oil/additive carbon independently of allocated burdens. No balance-residual emissions, reaction water or hidden assumed outlet. Reject incompatible real reactions or additional routes until reviewed. | toray-nk-compaction-2019 |
| validate_links | feed_kcl; hydraulic_oil; electricity; cleaning_water; reject_nk; cleaning_effluent; humidity_uptake | Verify provider-native quantities and complete treatment/transport links separately from identities. Explicit electricity CN/user-mix/voltage limits apply only to that record. An ordinary auxiliary identity gap requires disclosure and dataset repair, not deletion or automatic methodology demotion. | sahut-compaction-1999 |
| validate_air | pm25; pm2510; pm10plus; ammonia_air; water_vapour | Verify actual outdoor species/subcompartment, sampling/volume bases and non-overlapping bins. Total PM is a check, not an added fourth exchange. Separate captured dust, indoor exposure and environmental releases. A maker pollution assertion does not establish measured absence. | sahut-compaction-1999 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Verified plant-gate supply inventory for the defined dry AS/KCl compacted NK subtype |
| allowed_use | Actual matched bulk supply with complete collected quantities, upstream/treatment links and disclosed review requirements |
| excluded_use | Universal NK/NPK coverage, potassium nitrate, nutrient-equivalent agronomic comparison, field emissions, wet/binder/coated/liquid routes or invented quantities |
| required_metadata | All reference qualifiers; actual native name/location/property restrictions; raw totals and B; sampling, stock/WIP and carryover; provider references; allocation, capital and transport boundaries |
| required_quality_disclosure | Scientific review pending; unresolved auxiliary UUIDs; provider-volume compatibility; measurement uncertainty, detection and completeness; patent/manufacturer evidence limitations |
| update_trigger | Changed recipe/feed/conditioning, actual reaction, binder/water/coating/thermal route, package/delivery, grid/geography, provider basis, output function or measurement method |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc-3-2025 | official_guidance | UN Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025, p.166. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification only: 34647 excludes potassium nitrate; optional listed substances are not a required recipe or accepted mapping. |
| eu-jrc-lvic-aaf-2007 | official_guidance | European Commission/JRC, LVIC-AAF BREF, August 2007, §7.1 and §7.2.1, printed pp.283/285, PDF pp.311/313. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2022-03/LVIC-AAF.pdf?download=1 | Nutrient reporting and separation of mechanical blending/compaction from acid and Odda routes; Figure 7.1 does not describe the dry route. No plant or emission/consumption default. |
| toray-nk-compaction-2019 | literature | Toray Industries, JP2019043797A, published 22 March 2019, claims 6–14; detailed description on PDF pp.7–10 and examples from p.13. https://patents.google.com/patent/JP2019043797A/en | Primary patent evidence for AS/KCl dry mixing, roller briquetting, crushing, sizing, classification, fines return and measured quality attributes. Japanese text is primary; English is machine translation. Claimed/experimental recipe, moisture, density, size, pressure, speed, strength and yields are case limits, not universal defaults; future site acceptance and collection are mandatory. |
| sahut-compaction-1999 | literature | F.Dehont, Sahut-Conreur, Compaction-granulation of Fertilizer: An Economical Process for a la carte Formulations, Powder Handling & Processing 11(3), July/September 1999, PDF pp.1–3. https://d20854696ijsuu.cloudfront.net/files/22081/download/686683/1-3.pdf | Equipment-maker original: dry pressure agglomeration, stages, fines/oversize circulation and dust control; historical qualitative support. Figure includes optional humidification/coating, excluded here; no productivity, yield, density, energy or zero-effluent assertion becomes a default or demonstrated absence. |

Online originals checked 16 October 2026. Historical documents support physical methodology, not current regulatory advice or scientific approval.
