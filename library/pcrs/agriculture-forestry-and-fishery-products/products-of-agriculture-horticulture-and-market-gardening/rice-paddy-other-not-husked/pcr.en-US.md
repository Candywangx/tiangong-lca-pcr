---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.rice-paddy-other-not-husked
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Rice paddy, other (not husked)

## 1. Scope and Applicability

This PCR applies to the cultivation and farm-gate handover of paddy rice that remains in the husk and is classified as CPC 3.0 code 01132, “Rice paddy, other (not husked).” It covers irrigated and rainfed production, and direct-seeded and transplanted establishment, provided that the production route, water regime, geography, crop season, and farm-gate condition are declared.

The foreground boundary begins immediately before the first land-preparation or seed-bed activity for the crop cycle and ends when unprocessed paddy is handed over at the farm gate. It includes land and seed-bed preparation, crop establishment, nutrient and crop-protection management, water management, field operations, harvest, threshing, and any on-farm cleaning, drying, or storage performed before handover. Upstream production of purchased inputs is represented by linked datasets. Direct field emissions are included. Milling, husking, parboiling, off-farm processing, packaging, and transport after farm-gate handover are excluded.

The PCR is dataset-production first. It defines the foreground records needed to construct a paddy cultivation data package and its downstream `process` or `lifecyclemodel` projection. It does not prescribe globally representative default inventory quantities where no reliable globally applicable evidence exists.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.rice-paddy-other-not-husked` |
| classification_refs | CPC 3.0 `01132`, exact |
| covered_products | Unprocessed paddy rice, other than seed rice, delivered with the husk intact at the farm gate |
| excluded_products | Rice seed; husked or brown rice; semi-milled or wholly milled rice; broken rice; parboiled rice; packaged rice; and rice after off-farm processing |
| representative_product | Rice paddy, other (not husked) |
| production_route | Irrigated or rainfed; direct-seeded or transplanted; route must be declared |
| market_state | As-received, unprocessed, not husked paddy at farm-gate handover; moisture and impurity basis must be declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Unprocessed rice paddy covered by CPC 3.0 `01132`, with the husk intact |
| How much | 1,000 kg as-received wet mass at farm-gate handover |
| How well | Cultivar or species, production geography, crop season, establishment method, water regime, farm-gate condition, moisture content, impurity basis, drying or storage status, residue fate, and allocation method are declared |
| How long or cycle | One complete crop cycle from the declared starting condition through farm-gate handover |
| reference_flow_link | Exact TianGong product flow UUID `bdbb913b-620c-42a0-baf6-c5802a2b6c4b` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg as-received wet mass |
| Reference product flow | Rice paddy, other (not husked), UUID `bdbb913b-620c-42a0-baf6-c5802a2b6c4b` |
| Reference flow property | Mass, UUID `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass, UUID `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Cultivar or species; production geography; crop season or year; establishment method; water regime during cultivation and pre-season; organic-amendment type and rate; farm-gate condition; moisture content on a wet basis and measurement method; impurity or foreign-matter basis; whether drying or storage is included; residue fate; allocation method |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package. A “storage-ready” claim additionally requires measured moisture at or below 14% on a wet basis and disclosure of drying timing and storage status; 14% is not a universal moisture default for all farm-gate paddy.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measurement_reference_mass` | Reference paddy output | Mass | kg | Report as-received wet mass. Record moisture content on a wet basis and the measurement method; do not silently convert the reference amount to dry matter. |
| `measurement_moisture_state` | Paddy and biomass co-products | Mass and moisture fraction | kg and % wet basis or % dry basis, explicitly identified | Record sampling time, method, and basis. Use dry-matter conversion only as a separate calculated field. |
| `measurement_area_cycle` | Land, yield, and field emissions | Area and crop-cycle duration | ha and day or crop cycle | Record cultivated and harvested area, sowing or transplanting date, harvest date, and the area associated with the reference output. |
| `measurement_nitrogen_basis` | Fertilizers, organic amendments, and residues | Mass and nitrogen content | kg product and kg N | Record product amount and nitrogen content separately. State whether a value is product mass, nutrient mass, fresh matter, or dry matter. |
| `measurement_energy_fuel` | Fuel and electricity | Mass, volume, or energy as appropriate | kg, L, kWh, or MJ | Preserve the measured purchase or meter unit and document any density, net-calorific-value, or conversion factor used. |
| `measurement_water` | Irrigation water | Volume or mass | m3 or kg | Measure delivered field water where possible; if converted, use 1,000 kg/m3 only where water density at the stated conditions supports that approximation and disclose it. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | Paddy cultivation foreground | Include land or seed-bed preparation, establishment, nutrient and crop-protection management, irrigation and drainage management, other field operations, harvest, threshing, and on-farm cleaning, drying, or storage before handover when performed. | `fao-rice-production-guidelines` |
| `boundary_upstream_inputs` | Purchased inputs | Link upstream datasets for seed, fertilizers and soil amendments, crop-protection products, irrigation-water supply, fuels, electricity, and other material inputs. | `epd-international-food-beverage-2025-03` |
| `boundary_direct_field_emissions` | Managed paddy field | Include rice methane and managed-soil direct and indirect N2O; include CO2 from urea and liming where relevant. | `ipcc-2019-cropland-rice`; `ipcc-2019-managed-soils` |
| `boundary_postharvest_condition` | On-farm post-harvest operations | Include cleaning, drying, and storage only when they occur before the declared farm-gate handover; identify their energy, losses, duration, and final moisture. | `fao-rice-postharvest-operations` |
| `boundary_exclusions` | Downstream activities | Exclude husking, milling, parboiling, off-farm processing, consumer packaging, and transport after farm-gate handover. | `epd-international-food-beverage-2025-03` |
| `boundary_same_category_input` | Re-entering paddy or seed | Treat externally supplied seed as an upstream product input. Do not count internally retained seed or recirculating paddy both as output and purchased input; document the accounting treatment. | `fao-rice-production-guidelines` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Managed field available immediately before the first land-preparation or seed-bed activity attributable to the crop cycle |
| starting_condition_role | Foreground crop-cycle start; prior land-use change is separately assessed and linked when applicable |
| product_classification_scope | CPC 3.0 `01132` only |
| recursive_input_rule | Purchased inputs cross the foreground boundary once and require upstream datasets; internal recirculation is recorded without double counting |
| upstream_dataset_requirement | Use geography-, technology-, and time-representative upstream datasets and disclose substitutions or proxies |
| disclosure | Declare all included on-farm post-harvest operations, excluded activities, cut-offs, and any boundary deviations |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `paddy_cultivation_and_farm_gate_handoff` | Paddy cultivation and farm-gate handover | `required` | Always | Foreground production | 1,000 kg reference paddy |

### Process: Paddy cultivation and farm-gate handover (`paddy_cultivation_and_farm_gate_handoff`)

This unit process covers the full crop cycle and all on-farm operations performed before the declared farm-gate handover. No TianGong process is selected as a default because the closest process candidate does not use the exact paddy product flow as its quantitative reference.

#### Inputs

##### Product flows

###### Seed rice (`seed_rice_input`)

Record seed placed into the crop, distinguishing purchased and internally retained seed and avoiding double counting.

- Selected flow: Rice Seeds, UUID `14c42414-b19b-47c4-863f-1b86b50ff6bf`
- Flow property / unit: Mass / kg, UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group UUID `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Foreground mass applied during the crop cycle, normalized to the reference output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg reference paddy
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `fao-rice-production-guidelines`

###### Irrigation water (`irrigation_water_input`)

Record water delivered to the field, not rainfall. Preserve measurement points and conversion assumptions.

- Selected flow: Natural water used for irrigation, UUID `4ad684b1-8e85-4dee-8d9c-55d1fa2d4432`
- Flow property / unit: Mass / kg, UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group UUID `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Metered or calculated delivered field water for the crop cycle; convert volume only with a disclosed density assumption
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg reference paddy
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_management`
- Sources: `irri-alternate-wetting-drying`; `ipcc-2019-cropland-rice`

###### Fertilizers and soil amendments (`fertilizer_amendment_inputs`)

Record each commercial mineral fertilizer, organic amendment, lime, and urea separately. Resolve the exact TianGong product flow matching the actual product; no generic UUID is prescribed.

- Selected flow: Dataset-specific fertilizer or amendment product flow; resolve at construction time
- Flow property / unit: Mass / kg product and kg nutrient where applicable
- Amount rule: Foreground applied mass by product, nutrient content, application date, and method
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg reference paddy
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `ipcc-2019-managed-soils`; `fao-rice-production-guidelines`

###### Crop-protection products (`crop_protection_inputs`)

Record each herbicide, insecticide, fungicide, or other crop-protection product separately and state whether the quantity is formulated product or active ingredient.

- Selected flow: Dataset-specific product flow; resolve at construction time
- Flow property / unit: Mass / kg formulated product or kg active ingredient, explicitly identified
- Amount rule: Foreground applied mass by product, active substance, date, and application method
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg reference paddy
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `fao-rice-production-guidelines`

###### Diesel fuel (`diesel_fuel_input`)

Record diesel consumed by tractors, pumps, harvesters, dryers, and other included on-farm operations.

- Selected flow: Diesel oil, UUID `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg, UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group UUID `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Foreground fuel use allocated to the crop cycle; disclose density conversion from volume where used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg reference paddy
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_operations`
- Sources: `fao-rice-production-guidelines`

###### Electricity (`electricity_input`)

Record metered electricity used for pumping, drying, storage, and other included operations. Resolve a geography-, voltage-, and market-appropriate TianGong electricity flow; the investigated candidate is not a valid default because its property and applicability do not match this PCR's requirements.

- Selected flow: Dataset-specific electricity flow; resolve at construction time
- Flow property / unit: Energy / kWh or MJ, consistent with the selected flow
- Amount rule: Metered consumption assigned to the crop cycle and included operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg reference paddy
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_operations`
- Sources: `fao-rice-production-guidelines`; `fao-rice-postharvest-operations`

##### Waste flows

No waste input is prescribed. Record imported organic materials as product inputs or waste inputs according to their legal and dataset status, with composition and nitrogen content disclosed.

##### Elementary flows

###### Land occupation or transformation (`land_use_input`)

Record cultivated area and applicable land occupation or transformation using the location-specific elementary flow available in TianGong. No universal land-use UUID is prescribed.

- Selected flow: Location- and land-class-specific elementary flow; resolve at construction time
- Flow property / unit: Area or area-time / ha, m2, or m2·a as required by the selected flow
- Amount rule: Foreground area attributable to the crop cycle, with prior land-use state and transformation timing documented where relevant
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg reference paddy
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_identity_yield`
- Sources: `ipcc-2019-cropland-rice`

#### Outputs

##### Product flows

###### Reference paddy (`reference_paddy_output`)

This is the quantitative reference output. Record as-received wet mass and measured moisture at handover.

- Selected flow: Rice paddy, other (not husked), UUID `bdbb913b-620c-42a0-baf6-c5802a2b6c4b`
- Flow property / unit: Mass / kg, UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group UUID `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Normalize the as-received output to 1,000 kg after recording the unnormalized crop-cycle output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg reference paddy
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_crop_identity_yield`
- Sources: `epd-international-food-beverage-2025-03`; `fao-rice-postharvest-operations`

###### Exported feed-grade straw (`exported_straw_output`)

Include only straw that leaves the foreground system as a feed-grade product. If the destination or grade differs, resolve the actual product or waste flow instead.

- Selected flow: Straw, UUID `b1dd1313-1bc0-4baf-8cfb-50e8ea2a307c`, conditional on feed-grade export
- Flow property / unit: Mass / kg dry matter, with moisture recorded
- Amount rule: Measured exported mass converted to dry matter using measured moisture
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg reference paddy
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue_management`
- Sources: `ipcc-2019-managed-soils`

##### Waste flows

###### Rejected paddy and exported residues (`exported_waste_output`)

Record rejected or damaged paddy and residues leaving the system as waste under their actual destination and waste status; no universal UUID is prescribed.

- Selected flow: Dataset-specific waste flow; resolve at construction time
- Flow property / unit: Mass / kg, with moisture or dry-matter basis declared
- Amount rule: Measured mass leaving the foreground boundary as waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg reference paddy
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_management`
- Sources: `fao-rice-postharvest-operations`; `ipcc-2019-managed-soils`

##### Elementary flows

###### Biogenic methane to air (`rice_methane_output`)

Calculate methane from rice cultivation using the applicable IPCC tier and locally appropriate water-regime, pre-season, organic-amendment, soil, and cultivar factors.

- Selected flow: Methane, biogenic, to air, unspecified, UUID `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass / kg, UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group UUID `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: `calc_rice_methane_ipcc`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg reference paddy
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_water_management`
- Sources: `ipcc-2019-cropland-rice`

###### Nitrous oxide to air (`soil_n2o_output`)

Calculate direct and indirect N2O from managed soils using the applicable IPCC tier and the collected nitrogen and residue records.

- Selected flow: Nitrous oxide, to air, unspecified, UUID `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg, UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group UUID `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: `calc_soil_n2o_ipcc`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg reference paddy
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_material_inputs`
- Sources: `ipcc-2019-managed-soils`

###### Fossil carbon dioxide to air (`lime_urea_co2_output`)

Calculate CO2 released from lime and urea applications where those materials are used. Fuel combustion emissions belong to the applicable fuel-use modelling path and must not be double counted.

- Selected flow: Carbon dioxide, fossil, to air, unspecified, UUID `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg, UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group UUID `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: `calc_lime_urea_co2_ipcc`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg reference paddy
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_material_inputs`
- Sources: `ipcc-2019-managed-soils`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | Multi-output operations | First avoid allocation by process subdivision or system expansion where technically justified and consistently modelled. | `eu-pef-2021-2279` |
| `allocation_residue_status` | Straw and other residues | Straw retained, incorporated, or burned in-field is not a co-product output; record its fate and associated inputs or emissions. Straw leaving as a product or waste must be classified by actual destination. | `ipcc-2019-managed-soils` |
| `allocation_physical_relation` | Unavoidable allocation | If allocation cannot be avoided, use a relevant underlying physical relationship between inputs, outputs, and functions and document it. | `eu-pef-2021-2279` |
| `allocation_other_relation` | No defensible physical relation | Use another relationship, including economic allocation, only when a physical relationship is not possible; disclose prices, reference period, and a sensitivity result. | `eu-pef-2021-2279` |
| `allocation_disclosure` | All allocated datasets | Report unallocated totals, allocation factors, allocated totals, method rationale, and mass-balance reconciliation. This PCR prescribes no universal straw allocation factor. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_crop_identity_yield` | `paddy_cultivation_and_farm_gate_handoff` | Crop identity, area, dates, output, land | Field and harvest record | cultivar/species; field ID; geography; area; establishment method; sowing/transplanting and harvest dates; harvested wet mass; moisture; impurities; losses | Field log, calibrated scale, moisture meter, and geospatial or cadastral record | ha; day; kg; % wet basis | Each field and crop cycle | Complete crop cycle | Each included farm or field stratum | Sum mass and area only after preserving field strata; report weighted moisture method | Instrument IDs, calibration, field logs, weighbridge or scale tickets |
| `cp_material_inputs` | `paddy_cultivation_and_farm_gate_handoff` | Seed, fertilizer, amendments, crop protection | Purchase and application record | product; supplier; amount; nutrient or active content; application date; method; field; retained-seed status | Invoice plus application log and stock reconciliation | kg product; kg nutrient or active ingredient | Each application | Complete crop cycle | Each included farm or field stratum | Sum by exact product and field; do not combine product mass with nutrient or active mass | Invoices, labels, application logs, stock records |
| `cp_water_management` | `paddy_cultivation_and_farm_gate_handoff` | Irrigation and methane controls | Meter, pump, and field-water record | delivered water; source; pump energy; flooding/drainage dates; water depth; pre-season regime; organic amendments; cultivation period | Meter or calibrated pump record plus field observation; AWD tube where AWD is claimed | m3 or kg; day; cm | Each irrigation event and regime change | Pre-season and complete crop cycle | Each included field or water-management stratum | Sum delivered water; preserve regime-day strata for methane calculation | Meter calibration, pump curve, field log, AWD tube observations |
| `cp_energy_operations` | `paddy_cultivation_and_farm_gate_handoff` | Fuel, electricity, machinery, drying | Meter, purchase, and operating-hour record | fuel type and amount; electricity; equipment; hours; operation; drying load; allocation key | Meter, invoice, fuel log, and equipment-hour record | kg, L, kWh, MJ, h | Each operation or billing period | Complete crop cycle and included storage | Each farm and shared facility | Allocate shared use using documented physical driver; disclose conversion factors | Invoices, meter readings, equipment logs, calibration or density source |
| `cp_residue_management` | `paddy_cultivation_and_farm_gate_handoff` | Straw, residues, rejects | Mass and destination record | residue type; fresh mass; moisture; dry mass; retained/incorporated/burned/exported fate; buyer or waste destination | Scale or sampled yield ratio with measured moisture; destination document | kg fresh; % moisture; kg dry matter | Each harvest and removal | Complete crop cycle | Each included field or facility | Sum by fate and destination; estimated amounts remain separately flagged | Scale tickets, sampling record, sales or waste transfer record |
| `cp_postharvest_condition` | `paddy_cultivation_and_farm_gate_handoff` | Cleaning, drying, storage, handover | Batch and facility record | intake and output mass; moisture before/after; rejects; energy; drying start; storage duration; handover condition | Batch scales, moisture meter, dryer and storage log | kg; % wet basis; kWh or MJ; day | Each batch | Harvest through farm-gate handover | Each included on-farm facility | Reconcile batch mass, moisture, rejects, and reference output | Batch logs, meter readings, calibration, handover record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All inventory flows | Normalized amount = crop-cycle amount × 1,000 / measured reference-paddy wet mass. Preserve the unnormalized record and factor. | Crop-cycle flow amount; reference-paddy wet mass | Amount per 1,000 kg paddy | `epd-international-food-beverage-2025-03` |
| `calc_yield` | Crop performance | Wet yield = measured harvested paddy wet mass / harvested area; report moisture alongside yield. | Paddy wet mass; harvested area; moisture | kg/ha at stated moisture | `fao-rice-production-guidelines` |
| `calc_water_mass` | Irrigation water | Water mass = measured volume × documented density; do not include rainfall as irrigation input. | Delivered volume; density | kg water | `irri-alternate-wetting-drying` |
| `calc_rice_methane_ipcc` | Rice methane | CH4 crop = sum over water-regime strata of adjusted daily emission factor × cultivation period × harvested area. Derive the adjusted factor from the applicable baseline factor and water-regime-during-cultivation, pre-season-water, organic-amendment, soil, and cultivar factors for the selected IPCC tier. | Area; cultivation days; water-regime strata; organic amendments; applicable factors | kg CH4 per crop and per 1,000 kg paddy | `ipcc-2019-cropland-rice` |
| `calc_soil_n2o_ipcc` | Managed-soil N2O | Calculate direct and indirect N2O-N from the applicable synthetic-N, organic-N, crop-residue, mineralisation, volatilisation, and leaching terms for the selected IPCC tier; convert N2O-N to N2O using the method's molecular-weight ratio and normalize once. | Nitrogen inputs; residues; area; climate and management factors | kg N2O per crop and per 1,000 kg paddy | `ipcc-2019-managed-soils` |
| `calc_lime_urea_co2_ipcc` | Lime and urea CO2 | Apply the selected IPCC carbon-emission factors to recorded lime and urea applications, convert carbon to CO2 as specified by the method, and normalize once. | Lime and urea amounts and types; factors | kg fossil CO2 per crop and per 1,000 kg paddy | `ipcc-2019-managed-soils` |
| `calc_moisture_dry_matter` | Paddy and biomass | Dry mass = wet mass × (1 − moisture fraction on wet basis). Do not replace the wet-mass reference flow with dry mass. | Wet mass; wet-basis moisture fraction | kg dry matter | `fao-rice-postharvest-operations` |
| `calc_allocation` | Co-product systems | Apply the documented hierarchy and factor to unallocated totals; factors must sum to one for the allocated system and mass balance must reconcile. | Unallocated inventory; output quantities or other justified drivers; factors | Allocated inventory and reconciliation | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Product and production route | Exact CPC 01132 paddy identity, cultivar/species, establishment route, irrigation class, geography, and crop season are declared. | Dataset metadata and field records |
| `dq_measurement` | Mass, moisture, water, energy | Scales, moisture meters, water meters, and energy meters are calibrated or their uncertainty is documented. | Calibration certificates, instrument logs, uncertainty statement |
| `dq_temporal` | Foreground inventory | Data cover a complete crop cycle and any included on-farm storage; multi-year averaging preserves year-level records and weather context. | Dated records and aggregation workbook |
| `dq_completeness` | Inputs, outputs, and emissions | Material, water, energy, residue, loss, and direct-emission records reconcile to the declared boundary; exclusions and missing observations are explicit. | Completeness checklist and mass balance |
| `dq_geography_technology` | Foreground and linked datasets | Geography, irrigation and establishment technology, electricity, and upstream inputs match the represented system or are disclosed as proxies. | Representativeness assessment and dataset links |
| `dq_ghg_method` | CH4, N2O, and CO2 | State IPCC tier, equation version, factors, water-regime strata, nitrogen terms, and all overrides; do not substitute unlabelled generic emission values. | Calculation workbook and source references |
| `dq_residue_allocation` | Straw and other outputs | Residue fate, product or waste status, moisture, destination, allocation hierarchy, and sensitivity are documented. | Destination records and allocation worksheet |
| `dq_postharvest` | Cleaning, drying, storage | Included operations, losses, energy, timing, duration, and moisture before and after are batch-reconciled. | Batch and facility records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | Dataset identity | Fail if the product is seed rice, husked, milled, broken, parboiled, or otherwise outside CPC 01132, or if the reference flow UUID is not `bdbb913b-620c-42a0-baf6-c5802a2b6c4b`. | `epd-international-food-beverage-2025-03` |
| `validate_reference_mass` | Quantitative reference | Fail if the reference output is not 1,000 kg as-received wet mass using the specified Mass property and Units of mass group, or if moisture basis is absent. | `fao-rice-postharvest-operations` |
| `validate_qualifiers` | Required metadata | Fail if any required reference-flow qualifier is missing; report whether the absence blocks comparability or calculation. | `fao-rice-production-guidelines`; `ipcc-2019-cropland-rice` |
| `validate_boundary` | Included and excluded activities | Fail if a required foreground operation or applicable direct field emission is omitted without justification, or if downstream milling or off-farm processing is included without an explicit boundary deviation. | `fao-rice-production-guidelines`; `ipcc-2019-managed-soils` |
| `validate_activity_data` | Foreground records | Fail if seed, material, water, energy, output, or residue records rely on an unlabelled default; flag missing calibration, unit basis, time, field, or product identity. | `fao-rice-production-guidelines`; `irri-alternate-wetting-drying` |
| `validate_emissions` | CH4, N2O, and lime/urea CO2 | Fail if applicable direct emissions are absent, double counted, or calculated without traceable activity data, tier, factors, equations, and normalization. | `ipcc-2019-cropland-rice`; `ipcc-2019-managed-soils` |
| `validate_allocation` | Co-products and residues | Fail if allocation is used before avoidance is considered, residue status is unclear, factors do not reconcile, or an economic method lacks price-period disclosure and sensitivity. | `eu-pef-2021-2279` |
| `validate_storage_ready` | Storage-ready claim | When storage-ready paddy is claimed, fail if measured moisture exceeds 14% wet basis or if drying timing and storage status are not recorded. Do not apply this rule to paddy explicitly declared as harvested or otherwise not storage-ready. | `fao-rice-postharvest-operations` |
| `validate_traceability` | Sources and calculations | Fail if source IDs, TianGong flow UUIDs, foreground records, conversion factors, or calculation workbooks cannot be traced to the submitted data package. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground paddy-cultivation data package and reviewed farm-gate process projection |
| downstream_use | LCA process and lifecycle-model construction for food, feed, and other paddy-rice supply chains |
| allowed_use | CPC 01132 unprocessed, not-husked paddy represented at the declared farm gate and moisture basis |
| excluded_use | Seed rice; husked, milled, broken, parboiled, or packaged rice; generic rice datasets without verifiable product and boundary identity |
| required_metadata | All reference-flow qualifiers; process boundary; field and crop-cycle identity; source links; foreground collection protocols; IPCC tier and factors; residue fate; allocation; data-quality disclosures |
| required_quality_disclosure | Temporal, geographic, and technological representativeness; completeness; instrument calibration or uncertainty; proxies; missing records; calculation choices |
| update_trigger | Change in product classification, farm-gate condition, production route, water regime, geography, crop season, process boundary, emission method, residue fate, allocation, or material data source |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `epd-international-food-beverage-2025-03` | standard | EPD International, PCR 2025:03 Food and beverage products, version 1.0.1, valid to 2030-07-14, https://www.environdec.com/pcr-library/pcr_fbd3e8c6-483c-48f5-d22f-08da0b49f7f5 (retrieved 2026-08-07) | Sector PCR context, declared-unit basis, upstream and downstream boundary framing |
| `eu-pef-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32021H2279R(01) (retrieved 2026-08-07) | Allocation hierarchy, disclosure, and sensitivity |
| `ipcc-2019-cropland-rice` | method_factor | IPCC 2019 Refinement to the 2006 Guidelines, Volume 4, Chapter 5 Cropland, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch05_Cropland.pdf (retrieved 2026-08-07) | Rice methane equation, water-regime and organic-amendment factors, crop-cycle stratification |
| `ipcc-2019-managed-soils` | method_factor | IPCC 2019 Refinement to the 2006 Guidelines, Volume 4, Chapter 11 N2O Emissions from Managed Soils, and CO2 Emissions from Lime and Urea Application, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf (retrieved 2026-08-07) | Direct and indirect N2O, residue nitrogen, lime and urea CO2 |
| `fao-rice-production-guidelines` | extension_guidance | FAO, Production guidelines for rice, https://openknowledge.fao.org/bitstreams/2ca3d2f4-30d0-4080-b7fe-21f84e984db8/download (retrieved 2026-08-07) | Cultivation process decomposition and foreground data collection |
| `fao-rice-postharvest-operations` | official_guidance | FAO, Rice Post-harvest Operations, https://www.fao.org/fileadmin/user_upload/inpho/docs/Post_Harvest_Compendium_-_RICE.pdf (retrieved 2026-08-07) | Moisture measurement, conditional drying and storage-ready criterion, post-harvest records |
| `irri-alternate-wetting-drying` | extension_guidance | International Rice Research Institute, Alternate Wetting and Drying, https://ghgmitigation.irri.org/mitigation-technologies/alternate-wetting-and-drying (retrieved 2026-08-07) | Conditional AWD field protocol and water-regime observations |
