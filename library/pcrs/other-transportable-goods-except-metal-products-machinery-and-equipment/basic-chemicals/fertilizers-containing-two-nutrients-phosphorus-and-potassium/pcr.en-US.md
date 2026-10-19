---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.fertilizers-containing-two-nutrients-phosphorus-and-potassium
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Dry blended PK fertilizer from TSP and potassium chloride

## 1. Scope and Applicability

This draft addresses physical dry blending of purchased granular triple superphosphate (TSP) and fertilizer-grade potassium chloride (MOP) into a nitrogen-free PK fertilizer. Receiving, separate storage, weighing, screening, mixing, dry dust control, final storage/acceptance and bulk loading or sack filling form one foreground unit; retain separate stage records. Purchased conditioning remains part of the complete supplied granule. Include limestone only where actually used and proven compatible. Ancillary contained cleaning is separately recorded. BREF §7.2.1 distinguishes mechanical blending from reactive routes; the producer PK list corroborates this TSP/MOP combination. No cited example fixes the recipe, grade, yield, energy or emission amount.

Exclude DAP, MAP, other NP, NK, NPK and potassium nitrate; single-species potassium phosphates; organic formulations; intentional liquid formulation, wet granulation, compaction, acidulation, neutralisation and on-site coating. Upstream TSP acidulation and KCl production remain necessary linked burdens. An observed additional chemical, fuel, coating, treatment, package component or emission must be retained and added atomically before a dataset is complete. Actual reaction invalidates a no-reaction claim and needs method review; it cannot be hidden as a balance correction. The generic compound-fertilizer reference is used only for this declared physical TSP/MOP PK subset under the disclosed source-context and provider-compatibility conditions; it does not broaden the product or route scope.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.fertilizers-containing-two-nutrients-phosphorus-and-potassium |
| classification_refs | CPC 3.0 34645; proposed narrower relation, no accepted mapping |
| covered_products | TSP/MOP physical PK blends with actual accepted composition; compatible limestone only when documented |
| excluded_products | Other nutrient combinations, potassium-phosphate synthesis, reacted/granulated/compacted/coated production and liquid or organic products |
| representative_product | One real accepted TSP/MOP PK SKU; no prescribed nutrient grade |
| production_route | Purchased granules, physical screening/blending, dry dust collection and dispatch |
| market_state | Solid blend at plant gate, actual moisture and conditioning included; transport packaging excluded from net fertilizer mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a physically blended fertilizer with phosphorus and potassium and no intentionally added nitrogen |
| How much | 1 kg accepted net finished fertilizer |
| How well | Actual nutrient assays, solubility, moisture, particle distribution, homogeneity and agreed storage/delivery acceptance |
| How long or cycle | One complete declared manufacturing and storage period through plant-gate delivery; no agronomic service-life claim |
| reference_flow_link | pk_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Multi-nutrient compound fertilizer, formulation unspecified `b4e892e2-0421-4512-88e7-a5f8ae556d7a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Actual SKU; full recipe including coating/filler; no intentional N source; total and water-soluble P2O5 and K2O-equivalent assays with methods; elemental reporting if used; moisture; free acidity; feed and product particle distributions; blending/conditioning route; delivery state; packaging; suppliers and their quantity bases; site/period; storage acceptance and segregation; waste destinations; measurement and allocation coverage |

The selected generic whole compound-fertilizer Product/Mass/kg identity is conditional on the actual nitrogen-free TSP/MOP dry blend, its delivered state and complete supplied mass basis. Compound fertilizer can include physical blends; a complex-granule, pure-component, nutrient-equivalent or residual n.e.c. identity does not establish this finished blend. Required qualifiers belong in the concrete data package. The native source describes an unspecified linseed field-input fertilizer at Zhangjiakou, Hebei, not this plant-gate product instance; its formulation/provider uncertainty and upstream cut-off are source-context debts, not permission to use that geography/provider or omit burdens. Verify actual composition, supplier reference and background compatibility, and retain full upstream production and delivery.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | pk_product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | B is the sum of net newly completed fertilizer of this exact SKU/state/route crossing the final acceptance/release gate during the declared period, counted once and excluding packaging, resale of already completed opening stock and sold off-grade output. Weigh gross and tare independently; retain moisture and all raw totals. |
| period_coverage | all inventory rows | Consistent exchange property | per 1 kg reference flow | Preserve the complete same-product/state/route period, including start-up, shutdown, failed/zero-output batches, cleaning, rework and work in progress. Attribute its full resource/emission pool, then normalize once by positive B. If the whole pool has B = 0, retain totals and do not invent a normalized result. |
| material_basis | feed_tsp; feed_kcl; limestone_filler; pk_product | Mass | kg | Supplied fertilizer mass is not nutrient-equivalent mass or pure active-component mass. Record water, coating and impurities within supplied mass; component assays are parallel balances, not repeated purchased exchanges. Retain both P versus P2O5 and K versus K2O conventions and use documented molar conversion only when needed. |
| provider_basis | all inventory rows | Native reference property | native reference unit | Store supplier reference quantity separately from period demand. Verify state, grade, actual kg/m3/MJ definitions and any density, pressure, temperature, wet/dry or normal/actual volume conditions. Identity lookup alone proves no provider compatibility. |
| package_basis | bag_pp; liner_pe; waste_pp; waste_pe | Mass | kg | Weigh each actual empty component and retain counts/capacity as separate checks. Do not infer package mass from fertilizer capacity or impose a default number of bags. |
| emission_basis | pm25; pm2510; pm10plus; carbonate_co2 | Mass | kg | Concentration times an already integrated compatible gas volume gives mass; multiply by time only when integrating a volume flow rate. Retain pressure/temperature, moisture, normal/actual volume, operating coverage and detection limits; no repeated time multiplier. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased complete granular TSP, MOP and any proven-compatible actual filler/packaging at the foreground receipt gate |
| starting_condition_role | Foreground collection boundary, not an upstream cut-off |
| product_classification_scope | Only the defined physical TSP/MOP PK subtype within the broad CPC leaf |
| recursive_input_rule | Record an external same-category blend once with its actual quantity and qualified provider; keep internal returned material in transfer/WIP records without a second purchase or credit |
| upstream_dataset_requirement | Link supplier-compatible TSP, KCl, conditioning, filler, electricity, water and packaging production plus actual inbound transport and waste-treatment services; reveal missing links rather than zero burdens |
| disclosure | Declare grades, locations, period, storage, meters, transport, capital-equipment treatment, packaging, external treatment and all cut-offs with reasons and sensitivity |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_stages | blend | Collect all operated stages in the period, including dust control, packing, ancillary cleaning and failed batches. Keep upstream acidulation separate from the blending foreground, with complete supply links. | eu-jrc-lvic-aaf-2007; efba-solid-blending-2016 |
| boundary_actual | all inventory rows | Conditional absence requires evidence. Retain every actual observed exchange and its origin/destination; additional carriers, reagents, releases, transport and treatment require separate atomic rows and methods before use. A no-output operation is not omitted. | efba-solid-blending-2016; origin-pk-sds-2016 |
| boundary_capital | blend | Declare actual assets and capital scope. If equipment burdens are included, retain physical asset quantity/materials, service period, productive capacity and measured allocation separately from period service equivalents, with individually identified exchanges. No fictitious per-kg equipment mass or default lifetime; any exclusion needs a documented scope decision and sensitivity. | efba-solid-blending-2016 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| blend | Receiving, dry blending, control, acceptance and dispatch | required | Actual TSP/MOP physical PK production | Single foreground unit with stage meters and internal return/WIP ledger | 1 kg accepted net finished PK fertilizer |

### Process: Dry PK blending and dispatch (`blend`)

#### Inputs

##### Product flows

###### Calcium superphosphate (`feed_tsp`)

Purchased granular TSP made by phosphate-rock/phosphoric-acid acidulation. Require the actual supplier grade, moisture, P assay, free acidity and any upstream coating. Record the complete supplied granule mass; do not treat it as pure monocalcium phosphate or purchase its constituents again. The native comment supports TSP but the synonym SSP and mineral classification conflict; retain supplier clarification and use no native percentage as a default.

- Selected flow: Calcium superphosphate `2e8dcdd0-493e-4426-ad0e-e9871e139405`
- Flow property / unit: Mass / kg
- Amount rule: Use cp_material for actual attributable period quantity; retain raw totals and report per 1 kg reference flow only when B is positive. No default amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_material
- Sources: `efba-solid-blending-2016`

###### Potassium chloride (`feed_kcl`)

Purchased fertilizer-grade granular MOP; actual KCl assay, K2O-equivalent assay, moisture, impurities, particle distribution, conditioning and provider basis are required. The chemical UUID does not establish a particular commercial nutrient grade or upstream process dataset. Its native reference is Volume/m3, not Mass/kg. Keep measured complete supplied kg in the physical ledger and measure the corresponding provider-compatible volume convention, granule packing, moisture and bulk density. No generic density or secondary property coefficient supplies this conversion; an undefined provider m3 basis leaves the linkage incomplete.

- Selected flow: Potassium chloride `c0f36a80-f6a0-4926-9a92-9c80f5fcb662`
- Flow property / unit: Volume / m3
- Amount rule: Retain actual supplied kg and measured corresponding m3. Use the independently measured density for that same packing/moisture convention only when compatible with the provider reference; report m3 per 1 kg reference flow once using positive B. No default conversion.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_material
- Sources: `efba-solid-blending-2016`

###### limestone powder (`limestone_filler`)

Conditional natural ground limestone filler only if the recipe actually uses it and compatibility with acidic TSP is demonstrated. Verify the actual physical grade and fineness, carbonate/mineral composition, free acidity and storage stability. The retrieved a3317ee0-aae8-4d22-b720-fe24bc73d3c4 record is not adopted: its CAS 587-26-8 identifies lanthanum carbonate, conflicting with its limestone name/comment. Do not transfer its 200–600 mesh restriction to this unresolved row or substitute quicklime or precipitated carbonate. Unexpected reaction gas requires separate measurement and route review.

- Selected flow: Ground natural limestone filler
- Flow property / unit: Mass / kg
- Amount rule: Use cp_material for actual attributable period quantity; retain raw totals and report per 1 kg reference flow only when B is positive. No default amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_material
- Sources: `origin-pk-sds-2016`; `efba-solid-blending-2016`; `pubchem-lanthanum-carbonate-168924`

###### Alternating current (`electricity`)

User-side grid electricity below 1 kV in China (CN) only; meter reception, conveying, screening, blending, dust extraction, compressed-air generation and packing separately where possible. Verify the actual delivery voltage, location, period and provider reference. A different purchased voltage requires its verified flow and conversion boundary, not this UUID by assumption.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Retain metered campaign kWh and convert once using 1 kWh = 3.6 MJ; attribute shared consumption before division by B.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_energy
- Sources: `efba-solid-blending-2016`

###### Woven polypropylene fertilizer sack (`bag_pp`)

Conditional bagged delivery. Weigh the actual empty PP sack component and retain issued counts and capacity separately. No fixed bag count or kg per bag is prescribed. The seed-specific 25 kg bag record is not adopted. A complete composite sack must not be represented as pure PP resin.

- Selected flow: Woven polypropylene fertilizer sack
- Flow property / unit: Mass / kg
- Amount rule: Use cp_pack for actual attributable period quantity; retain raw totals and report per 1 kg reference flow only when B is positive. No default amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_pack
- Sources: `efba-solid-blending-2016`

###### Polyethylene film (`liner_pe`)

Conditional physically separate PE liner. Verify polymer CAS 9002-88-4, thickness/grade, empty component mass and upstream film/conversion coverage. Use this only for the PE film component, not the entire lined PP sack. The native luggage classification is a disclosed defect.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass / kg
- Amount rule: Use cp_pack for actual attributable period quantity; retain raw totals and report per 1 kg reference flow only when B is positive. No default amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_pack
- Sources: `efba-solid-blending-2016`

###### Tap water (`cleaning_water`)

Conditional ancillary cleaning water, not added formulation water. Retain metered m3 and measured density/temperature if converting to kg; do not adopt the database secondary volume coefficient as measured density. Collect the entire cleaning cycle, including no-output periods, and the corresponding wastewater fate.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: Use cp_water for actual attributable period quantity; retain raw totals and report per 1 kg reference flow only when B is positive. No default amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_water
- Sources: `origin-pk-sds-2016`

##### Elementary flows

###### Water vapour absorbed from ambient air (`humidity_uptake`)

Conditional real atmospheric moisture uptake during hygroscopic storage; determine independently from representative inlet/outlet moisture, stock and environmental observations. Ambient-air resource identity is unresolved; an air emission or liquid-water flow cannot replace it. Do not force the water-balance residual into uptake.

- Selected flow: Water vapour absorbed from ambient air
- Flow property / unit: Mass / kg
- Amount rule: Use cp_water for actual attributable period quantity; retain raw totals and report per 1 kg reference flow only when B is positive. No default amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_water
- Sources: `origin-pk-sds-2016`; `efba-solid-blending-2016`

#### Outputs

##### Product flows

###### Dry blended TSP and potassium chloride PK fertilizer (`pk_product`)

The sole quantitative reference is accepted net supplied fertilizer, including its actual moisture and supplied conditioning, excluding packaging. Final acceptance occurs after storage/packing and checks composition and segregation. Use the selected generic reference only with the physical-subset, whole-mass and source-context conditions in Section 3; no source recipe or upstream cut-off is inherited.

- Selected flow: Multi-nutrient compound fertilizer, formulation unspecified `b4e892e2-0421-4512-88e7-a5f8ae556d7a`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_product
- Sources: `bartholomews-pk-blends`; `efba-solid-blending-2016`

###### Off-specification TSP and KCl PK blend sold for nutrient use (`offgrade_product`)

Conditional real sale with demonstrated nutrient function, quality and receiver acceptance. Keep its full physical mass and assays; exclude it from accepted target output B. It is not simultaneously a waste. No credit or allocation factor is assumed.

- Selected flow: Off-specification TSP and KCl PK blend sold for nutrient use
- Flow property / unit: Mass / kg
- Amount rule: Use cp_waste for actual attributable period quantity; retain raw totals and report per 1 kg reference flow only when B is positive. No default amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_waste
- Sources: `efba-solid-blending-2016`

##### Waste flows

###### Discarded off-specification TSP and KCl PK blend (`reject_fertilizer`)

Actual off-spec blend sent to external treatment, with composition, moisture and contamination declared; exclude separately collected dust. Record treatment acceptance and destination. Reworked material staying inside the foreground is a separately tracked internal transfer, not another external input or waste.

- Selected flow: Discarded off-specification TSP and KCl PK blend
- Flow property / unit: Mass / kg
- Amount rule: Use cp_waste for actual attributable period quantity; retain raw totals and report per 1 kg reference flow only when B is positive. No default amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_waste
- Sources: `efba-solid-blending-2016`

###### Dust (`captured_dust`)

Actual collected fertilizer dust leaving the site for waste treatment. Verify its TSP/KCl/filler composition, moisture, impurities and receiver conditions against this broad waste identity. Internally returned captured dust stays in the physical return ledger; it is neither emitted PM nor an avoided-production credit.

- Selected flow: Dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass / kg
- Amount rule: Use cp_waste for actual attributable period quantity; retain raw totals and report per 1 kg reference flow only when B is positive. No default amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_waste
- Sources: `efba-solid-blending-2016`

###### Polypropylene Wastes (`waste_pp`)

Only separated PP sack waste accepted for the native mechanical recycling route. Measure polymer and adhered fertilizer separately and document receiver acceptance. Contaminated, composite or differently treated waste requires a compatible identity; do not claim this route without evidence.

- Selected flow: Polypropylene Wastes `88215d1b-e6b6-4ec7-af7f-83375e80637b`
- Flow property / unit: Mass / kg
- Amount rule: Use cp_waste for actual attributable period quantity; retain raw totals and report per 1 kg reference flow only when B is positive. No default amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_waste
- Sources: `efba-solid-blending-2016`

###### Discarded polyethylene fertilizer liner (`waste_pe`)

Keep separated liner waste with measured contamination and actual destination. The retrieved cleaned PE waste at a recycling plant does not establish the identity of uncleaned fertilizer liner at this factory gate; retain the unresolved UUID.

- Selected flow: Discarded polyethylene fertilizer liner
- Flow property / unit: Mass / kg
- Amount rule: Use cp_waste for actual attributable period quantity; retain raw totals and report per 1 kg reference flow only when B is positive. No default amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_waste
- Sources: `efba-solid-blending-2016`

###### Contained PK fertilizer equipment-cleaning wastewater (`cleaning_effluent`)

Conditional separately collected cleaning liquid sent to off-site treatment; retain the full wet mass, water and dissolved/suspended P/K/Cl and carbonate composition. Do not use source-specific PV or manganese wastewater. If treatment/discharge actually occurs on site, extend the inventory with its real reagents, sludge and individually speciated receiving-medium releases before dataset use.

- Selected flow: Contained PK fertilizer equipment-cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Use cp_water for actual attributable period quantity; retain raw totals and report per 1 kg reference flow only when B is positive. No default amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_water
- Sources: `origin-pk-sds-2016`

##### Elementary flows

###### particles (PM2.5) (`pm25`)

Actual residual PM below 2.5 micrometres released to outdoor air, unspecified subcompartment. Include representative stack and fugitive releases after controls. Indoor occupational dust concentration is not the mass released across the site boundary.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use cp_air for actual attributable period quantity; retain raw totals and report per 1 kg reference flow only when B is positive. No default amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: `efba-solid-blending-2016`

###### particles (PM2.5 - PM10) (`pm2510`)

Actual outdoor-air particles in the non-overlapping 2.5–10 micrometre bin. Derive from cumulative PM10 minus PM2.5 only when sampling boundaries, time coverage, gas basis and methods are compatible; no negative residual or nested double counting.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use cp_air for actual attributable period quantity; retain raw totals and report per 1 kg reference flow only when B is positive. No default amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: `efba-solid-blending-2016`

###### particles (> PM10) (`pm10plus`)

Actual outdoor-air particles above 10 micrometres, separate from the two finer bins. Use total suspended particles minus compatible cumulative PM10 only with validated size coverage; no default split. Captured dust that remains in a bin is not an air release.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use cp_air for actual attributable period quantity; retain raw totals and report per 1 kg reference flow only when B is positive. No default amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: `efba-solid-blending-2016`

###### water vapour (`water_vapour`)

Conditional actual water evaporated to outdoor air, unspecified subcompartment, from ancillary cleaning or handling. Determine independently from measured moisture/air observations and retained physical records; neither COD nor an unexplained balance residual establishes evaporation or reaction-water generation.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use cp_water for actual attributable period quantity; retain raw totals and report per 1 kg reference flow only when B is positive. No default amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_water
- Sources: `origin-pk-sds-2016`

###### Carbon dioxide from mineral carbonate to outdoor air (`carbonate_co2`)

Conditional observed mineral-carbon release if free acid and carbonate filler actually react. Measure the species, mineral carbon origin, quantity and receiving air compartment, reconcile consumed carbonate and resulting water, and reopen the no-reaction applicability decision. Atmospheric resource CO2 and delayed-emission correction records are rejected. No positive emission, zero emission, carbonate conversion or reaction yield is assumed.

- Selected flow: Carbon dioxide from mineral carbonate to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Use cp_air for actual attributable period quantity; retain raw totals and report per 1 kg reference flow only when B is positive. No default amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: `origin-pk-sds-2016`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| physical_ledger | all inventory rows | Preserve the full unallocated material/water/P/K/Cl/mineral-carbon and packaging ledger, with opening/closing stocks, all failed lots and paired equal internal returns. Do not multiply physical outputs by an allocation share or credit internal recycling. | efba-solid-blending-2016 |
| burden_attribution | blend | First separate grade campaigns and directly measured operations. Attribute common electricity, cleaning and dust control by measured causal duty; retain all same-route zero-output events in the attributable pool. Keep environmental-burden allocation in a separate ledger. If a genuine off-grade nutrient co-product is sold, document function/quality and first seek subdivision; any remaining allocation needs a justified method, sum-to-one shares and sensitivity before completed use. | efba-solid-blending-2016 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

Retain raw period totals before any attribution or normalization. The final acceptance/release gate defines completion: all preceding storage and packing remain in blend. Opening/closing process stocks include feeds and unaccepted WIP; completed goods after that gate have a separate warehouse ledger and must not be counted both as completed output B and closing process stock. A reworked lot is counted once when finally accepted, never once per pass. Retain original period pools and trace opening/closing WIP embodied burdens in a separate carryover ledger; their transfer must not erase failed-batch consumption or create free incoming WIP. Undefined carryover attribution remains pending. A protocol belongs only to process_id blend. All aggregation uses the same complete product/state/route period and positive accepted net B, including unsuccessful and no-output batches. Raw zero-output pools remain reportable and are never divided by zero.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | blend | pk_product | foreground_record | SKU; gross; tare; accepted net mass B; P/P2O5 and K/K2O assays; solubility; moisture; sieve results; start/end pre-acceptance stocks/WIP; separate completed-goods warehouse ledger; one-time release event; failed lots; WIP embodied-burden carryover | Calibrated final net weighing and representative composition/segregation sampling at receipt, storage and dispatch | kg | Each batch/stage and linked representative monitoring period | Complete declared period including start/stop, failed/zero-output events, rework, storage and WIP | Actual selected site, SKU/state/route | per 1 kg reference flow | Calibration, original logs, certificates, sampling scope, stock/transfer reconciliation and receiver/provider records |
| cp_material | blend | feed_tsp; feed_kcl; limestone_filler | foreground_record | lot; supplier; complete supplied mass; KCl measured m3, packing convention, moisture and independently measured bulk density; opening/closing feed stock; metered charge; full formulation; nutrient and impurity assay; coating; moisture; free acidity; compatibility; internal returns | Calibrated receipt/feed scales, compatible KCl volume/bulk-density measurement and stock reconciliation; retain grade certificates, real physical tests and supplied quantity definition | kg; m3 | Each batch/stage and linked representative monitoring period | Complete declared period including start/stop, failed/zero-output events, rework, storage and WIP | Actual selected site, SKU/state/route | per 1 kg reference flow | Calibration, original logs, certificates, sampling scope, stock/transfer reconciliation and receiver/provider records |
| cp_energy | blend | electricity | foreground_record | stage; kWh; meter; voltage; period; start/stop/idle consumption; shared loads; equipment duty; supplier reference amount; provider region/year | Read calibrated stage meters including fans and packing; reconcile site bills and measured common-load attribution | MJ | Each batch/stage and linked representative monitoring period | Complete declared period including start/stop, failed/zero-output events, rework, storage and WIP | Actual selected site, SKU/state/route | per 1 kg reference flow | Calibration, original logs, certificates, sampling scope, stock/transfer reconciliation and receiver/provider records |
| cp_pack | blend | bag_pp; liner_pe | foreground_record | supplier; actual sack and liner grade; total issue; empty component mass; package counts; capacity; stock change; shipped mass; damaged mass | Weigh actual empty components separately; reconcile purchased, issued, shipped, retained and discarded packaging without conflating capacity and material mass | kg | Each batch/stage and linked representative monitoring period | Complete declared period including start/stop, failed/zero-output events, rework, storage and WIP | Actual selected site, SKU/state/route | per 1 kg reference flow | Calibration, original logs, certificates, sampling scope, stock/transfer reconciliation and receiver/provider records |
| cp_waste | blend | offgrade_product; reject_fertilizer; captured_dust; waste_pp; waste_pe | foreground_record | origin; actual full wet mass; dry matter; P/K/Cl/mineral carbon; polymer; contamination; internal return quantity; offgrade sale; receiver; treatment; transfer receipts | Weigh separate physical streams and internal transfers; verify sale/function or waste status and destination, never assign both statuses to the same material | kg | Each batch/stage and linked representative monitoring period | Complete declared period including start/stop, failed/zero-output events, rework, storage and WIP | Actual selected site, SKU/state/route | per 1 kg reference flow | Calibration, original logs, certificates, sampling scope, stock/transfer reconciliation and receiver/provider records |
| cp_water | blend | cleaning_water; humidity_uptake; cleaning_effluent; water_vapour | foreground_record | cleaning cycle; measured supply mass or m3; density/temperature; wet effluent; dissolved/suspended material; raw/product/stock moisture; ambient humidity; independently measured evaporation/uptake; destination | Meter complete cleaning periods, sample water and solids separately and measure moisture exchange independently; retain unexplained residual, no COD-based water generation | kg | Each batch/stage and linked representative monitoring period | Complete declared period including start/stop, failed/zero-output events, rework, storage and WIP | Actual selected site, SKU/state/route | per 1 kg reference flow | Calibration, original logs, certificates, sampling scope, stock/transfer reconciliation and receiver/provider records |
| cp_air | blend | pm25; pm2510; pm10plus; carbonate_co2 | foreground_record | source; species; mineral carbon origin; size bins; concentration; integrated gas volume or flow rate/time; actual/normal and wet/dry bases; pressure; temperature; controls; fugitives; represented hours; detection limits | Measure residual stack and fugitive releases under represented operating states; match concentration and volume basis, distinguish integrated volume from volume rate; verify mineral-carbon source if CO2 occurs | kg | Each batch/stage and linked representative monitoring period | Complete declared period including start/stop, failed/zero-output events, rework, storage and WIP | Actual selected site, SKU/state/route | per 1 kg reference flow | Calibration, original logs, certificates, sampling scope, stock/transfer reconciliation and receiver/provider records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalization | all inventory rows | Divide each full attributable period exchange by positive accepted net B once; retain raw totals. Target reference output is exactly 1 kg. If B = 0, report the period totals and unresolved normalization, not a fabricated unit inventory. | cp_product; cp_material; cp_energy; cp_pack; cp_waste; cp_water; cp_air | Exchanges per 1 kg reference flow and preserved raw totals | efba-solid-blending-2016 |
| energy_conversion | electricity | Convert metered kWh to MJ using 3.6, once; preserve provider reference quantity separately. The native flow property is Net calorific value, not a renamed generic electricity property. | cp_energy; cp_product | MJ per 1 kg reference flow | efba-solid-blending-2016 |
| kcl_volume_basis | feed_kcl | Preserve measured supplied kg for mass/P/K/Cl balances; use measured compatible m3, or supplied kg divided by measured density for the identical supplier volume/packing/moisture definition. Keep supplier reference m3 separate from campaign m3 demand, then divide once by positive B. Undefined solid/bulk volume convention is unresolved, never a default conversion. | cp_material; cp_product | m3 per 1 kg reference flow and parallel kg ledger | efba-solid-blending-2016 |
| material_balance | all inventory rows | Received supplied materials plus opening in-process stock and measured environmental uptake equal accepted product, sold off-grade, discarded fertilizer/dust, actual releases and closing in-process stock/WIP (excluding the already counted released target output), on matching wet and dry bases. Keep internal returns equal on both sides and cancel only in the aggregate. Balance P, K and Cl from measured composition across each outlet; solubility assays do not equal total elemental content. Packaging has a separate stock/ship/waste ledger. Preserve residuals and measurement uncertainty; never tune yield, losses or emissions to force closure. | cp_product; cp_material; cp_waste; cp_water; cp_air; cp_pack | Full unallocated physical and element ledgers | efba-solid-blending-2016 |
| water_carbon_balance | all inventory rows | Balance molecular water and measured mineral/organic carbon independently of wet total mass. Distinguish material moisture, contained cleaning liquid, real vapour exchange and any evidenced reaction generation/consumption. A measured carbonate reaction needs stoichiometric/species and route review; no residual or COD value establishes reaction water, evaporated water or CO2. Packaging/coating carbon retained in product or waste is not a direct air emission. | cp_material; cp_water; cp_air; cp_waste; cp_pack | Water and carbon ledgers with explained and unexplained differences | origin-pk-sds-2016 |
| air_mass | pm25; pm2510; pm10plus; carbonate_co2 | Multiply compatible concentration by integrated gas volume; or integrate concentration times volume flow rate over time. Never multiply an already integrated volume by time again. Retain residual post-control emissions separately from collected solids and non-overlapping particle bins. | cp_air | Measured campaign mass then one normalization | efba-solid-blending-2016 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all inventory rows | Confirm whole supplied identity, grade, CAS where relevant, native property and provider quantity basis. Blank UUIDs are explicit gaps, never zero exchanges; chemical components do not substitute for complete preparations. | cp_material; cp_pack; cp_product |
| quality_representative | pk_product | Demonstrate actual accepted PK composition and no intentional N source; retain sampling, compatibility, storage and segregation results. Do not transplant a supplier example or SDS minimum as a recipe or universal grade. | bartholomews-pk-blends; origin-pk-sds-2016; efba-solid-blending-2016 |
| quality_completeness | all inventory rows | Distinguish demonstrated absence, measured zero, below detection, missing measurement and unresolved identity. Include complete period stocks/WIP and every real outlet. An incomplete upstream/treatment link or measurement relationship remains disclosed. | cp_product; cp_waste; cp_air; cp_water |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | pk_product | Require one compatible whole finished-blend reference identity with Mass/kg, matching route and delivery state. Verify the conditional generic identity against the actual whole PK product and provider basis with source-context debts disclosed. Mechanical checks alone do not establish physical or provider compatibility. | eu-jrc-lvic-aaf-2007 |
| validate_period | all inventory rows | Verify bilingual denominator/aggregation equality, all original totals and exactly one division by positive B. No discarded failed batches or fabricated zero-output normalization. Each protocol belongs to blend and covers its linked rows. | efba-solid-blending-2016 |
| validate_physics | all inventory rows | Check unallocated wet/dry mass, water, P, K, Cl, carbon, packaging and stock/return ledgers separately from allocated burdens. Investigate residuals and reaction indications; no default recipe, assay, loss, water generation or emission factor. | origin-pk-sds-2016; efba-solid-blending-2016 |
| validate_air | pm25; pm2510; pm10plus; carbonate_co2; water_vapour | Verify species/origin, outdoor-air medium, native reference property, compatible sampling/volume basis and non-overlapping particulate bins. Correction/resource flows do not replace emissions; captured dust is not emitted again. | efba-solid-blending-2016 |
| validate_scope | blend | Verify actual dry physical route and complete supplied coating/ingredient coverage. Real additional process or exchange requires atomic inventory and source-supported method extension, not silent omission or a scope change to satisfy checks. | eu-jrc-lvic-aaf-2007; bartholomews-pk-blends |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Candidate foreground production methodology for the declared physical PK subtype; scientific approval pending |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Future verified plant-gate supply inventory for the defined TSP/MOP PK blend |
| excluded_use | Unverified product/provider links, universal PK coverage, pure potassium phosphate, other nutrient combinations, field fertilization emissions or agronomic equivalence |
| required_metadata | All reference qualifiers; full raw period totals and positive B; actual upstream quantity links; site/route; sampling and balance ledgers; allocation and capital scope |
| required_quality_disclosure | Conditional generic reference and source-context debts; withdrawn limestone CAS conflict; package/waste/atmospheric-uptake/mineral-CO2 gaps; native metadata conflicts; provider and measurement uncertainties; independent scientific review pending |
| update_trigger | Verified finished reference available, different ingredients/coating/route/voltage, changed grade, waste/treatment fate, provider quantity basis or monitoring methods |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | official_guidance | UN Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025, p.166. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification context only; the leaf does not prescribe a route or canonical identity |
| `eu-jrc-lvic-aaf-2007` | official_guidance | European Commission, LVIC-AAF BREF, August 2007, §§7.1 and 7.2.1, printed pp.283/285, PDF pp.311/313. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2022-03/LVIC-AAF.pdf?download=1 | PK nutrient reporting and distinction of mechanical blending from reacted routes; no plant size, recipe or consumption defaults |
| `bartholomews-pk-blends` | literature | Bartholomews, Bespoke Fertiliser Blends, PK subsection, web snapshot 15 October 2026. https://www.bartholomews.co.uk/blends | Producer corroboration of TSP/MOP PK blends; supplier examples and coated TSP do not establish a universal recipe, particle size or coating composition |
| `origin-pk-sds-2016` | literature | Origin Fertilisers (UK), Group 9 nitrogen-free P and PK SDS, Revision B, 17 June 2016, §§1,3,6–10. https://originsoilnutrition.co.uk/wp-content/uploads/2021/01/1.-Origin-SDS-Group-9.pdf | Historical product-family identity, possible limestone, moisture/compatibility and containment; not a complete formulation, current legal instruction or normal-operation emission factor |
| `efba-solid-blending-2016` | handbook | EFBA, Handbook of Solid Fertiliser Blending, Code of Good Practice for Quality, third edition 2016, March 2017 file, §§2–5,7–9. https://fertiliser-society.org/wp-content/uploads/2019/11/Blender-Handbook-2017-efba.pdf | Dry-blend definition, weighing/calibration, material compatibility, segregation and sampling; no table examples or historical legal provisions become defaults |
| `pubchem-lanthanum-carbonate-168924` | dataset | NCBI PubChem, CID168924 molecular formula and IUPAC name, CAS-name query 587-26-8, retained 15 October 2026. https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/587-26-8/property/MolecularFormula,IUPACName/JSON | Chemical-identity counterevidence only: CAS587-26-8 resolves to lanthanum carbonate (C3La2O9), supporting rejection of the contradictory limestone record; no limestone grade, recipe, exchange amount or conversion factor follows |
