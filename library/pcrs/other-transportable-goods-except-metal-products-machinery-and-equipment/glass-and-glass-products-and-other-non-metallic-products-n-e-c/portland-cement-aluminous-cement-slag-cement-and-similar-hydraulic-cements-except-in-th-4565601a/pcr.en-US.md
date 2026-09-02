---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.portland-cement-aluminous-cement-slag-cement-and-similar-hydraulic-cements-except-in-th-4565601a
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Portland cement, aluminous cement, slag cement and similar hydraulic cements, except in the form of clinkers

## 1. Scope and Applicability

This PCR governs foreground data packages for finished hydraulic cement delivered from a cement manufacturing or grinding facility. It covers Portland cement, Portland-composite and blended cement, slag cement, aluminous or calcium-aluminate cement, and similar hydraulic binders when sold as cement rather than as clinker. It is intended for building, infrastructure, mortar, concrete, and other downstream supply-chain studies that need a product-specific cement input.

The foreground package shall represent a declared cement product, site, route, reporting period, and delivery form. It shall distinguish cement family and standard designation, strength class and declared test ages, clinker type and source, clinker-to-cement ratio, main constituents, calcium sulfate or gypsum, supplementary cementitious materials, minor additions and grinding aids, grinding or blending route, thermal energy, electricity, fossil and alternative fuels, and bulk or packaged delivery. A production-volume-weighted product mix is allowed only when its member products and weights are disclosed and the mix is the intended reference product.

This PCR does not cover cement clinker as the reference product, ready-mixed or site-mixed concrete, mortar, refractory cement compositions, cement articles, or construction systems. It does not authorize a Portland-cement dataset to represent aluminous cement, a single strength grade to represent all grades, or a site- or region-specific dataset to represent the whole category.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.portland-cement-aluminous-cement-slag-cement-and-similar-hydraulic-cements-except-in-th-4565601a |
| classification_refs | CPC 3.0: 37440 |
| covered_products | Finished Portland, Portland-composite, blended, slag, aluminous or calcium-aluminate, and similar hydraulic cements, excluding clinker form |
| excluded_products | Cement clinker; ready-mixed concrete; mortar; refractory compositions; cement or concrete articles; lime; non-hydraulic binders |
| representative_product | A declared finished hydraulic cement formulation meeting its stated product standard and strength class |
| production_route | Integrated cement manufacture with on-site clinker production, or separate grinding and blending using purchased clinker or other hydraulic intermediates |
| market_state | Dry finished cement at the factory gate, supplied in bulk or packaged form with delivery form declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Finished hydraulic cement of the declared family, formulation, strength class, route, site, and delivery form |
| How much | 1,000 kg net dry cement, excluding packaging tare |
| How well | Conforming to the declared cement standard or specification and supported by lot or reporting-period quality records for the declared strength class and other required performance properties |
| How long or cycle | One production lot or one representative reporting period; no service life is assigned at the cement factory gate |
| reference_flow_link | `finished_hydraulic_cement` output from `storage_quality_and_dispatch` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg net dry finished cement |
| Reference product flow | Various Cement Products `eb61e60c-c9e9-4f78-b1c4-30f47476ec0c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | cement family and standard designation; strength class and declared test ages; clinker or hydraulic-intermediate type and source; clinker-to-cement ratio; mass fractions of main constituents; calcium sulfate or gypsum content; supplementary cementitious materials; minor additions and grinding aids; integrated or separate-grinding route; plant and geography; reporting period; bulk or packaged delivery; packaging inclusion; dry-mass convention |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_dry_mass` | Finished cement reference output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all inventory amounts to exactly 1,000 kg net dry finished cement; exclude packaging tare and reconcile moisture or loss-on-drying treatment with the declared product specification. |
| `component_mass_fractions` | Clinker, gypsum or calcium sulfate, slag, fly ash, pozzolana, limestone, aluminous constituents, and other main additions | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg and dry-mass fraction | Calculate every constituent fraction from reconciled dry mass entering the declared cement product; do not infer a category-average recipe. |
| `clinker_factor` | Portland and blended cement routes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg/kg cement | Report net clinker consumed per net finished cement output for the represented product or production-weighted mix; report a route-appropriate hydraulic-intermediate ratio instead for aluminous cement when Portland clinker is not the intermediate. |
| `thermal_energy_basis` | Kiln, dryer, and other thermal fuel use | Energy based on lower heating value | MJ | Convert each recorded fuel quantity using a source- and period-specific lower heating value, and keep kiln, non-kiln, fossil, alternative, mixed, and biogenic fuel categories separate. |
| `electricity_basis` | Grinding, conveying, blending, storage, packing, pollution control, and conditional clinker production | Energy | kWh | Use metered purchased and on-site-generated electricity by process where available; report exports separately and do not use a regional default as a foreground reading. |
| `transport_service_basis` | Inbound constituent, fuel, and packaging transport | Transport service | tonne-kilometre | Calculate transported dry mass multiplied by actual route distance for each mode and route; keep supplier and transport geography explicit. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Primary minerals, industrial by-products or secondary constituents, clinker or other hydraulic intermediates, fuels, electricity, water, packaging, and transport services at their documented upstream source or supplier boundary |
| starting_condition_role | Cradle-to-gate upstream inputs feeding a product-specific cement foreground system |
| product_classification_scope | Finished hydraulic cements corresponding to the semantic product boundary represented by CPC 3.0 code 37440; classification is context, not canonical PCR identity |
| recursive_input_rule | Externally purchased cement used as an input shall use a separate upstream cement dataset with its own qualifiers; internal returned cement, recirculated dust, and rework remain internal loops and shall not be counted again as gross product inputs or outputs. |
| upstream_dataset_requirement | Use source-, technology-, geography-, and period-representative datasets for clinker or other hydraulic intermediates, supplementary constituents, fuels, electricity, transport, and packaging. Purchased clinker shall carry its upstream quarrying, raw-meal, kiln, fuel, electricity, and direct-emission burdens rather than being treated as burden-free. |
| disclosure | Declare facilities and route, product formulation and production weights, constituent origins and status, clinker or hydraulic-intermediate factor, kiln and non-kiln energy separation, fuel categories and biogenic fractions, electricity supply, direct emissions, dust and waste treatment, delivery form, geography, period, allocation, exclusions, and data gaps. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_cradle_to_gate` | Product system | Include upstream production and transport of constituents and energy, conditional on-site clinker or hydraulic-intermediate production, component preparation, grinding or blending, storage, quality control, pollution control, packing when applicable, and factory-gate dispatch. | `gcca-cement-co2-energy-protocol-v3-1`; `eu-jrc-clm-bref-2013`; `epd-international-cpcr-001` |
| `boundary_product_exclusions` | Reference product | Exclude clinker as the reference output, concrete, mortar, refractory compositions, cement articles, and downstream construction or use; model those products under their own product systems. | `unsd-cpc-3-0-explanatory-notes-2024`; `gcca-cement-co2-energy-protocol-v3-1` |
| `boundary_product_differentiation` | Product and market mixes | Keep Portland, blended, slag, aluminous, and other hydraulic cement formulations separate unless a disclosed production-volume-weighted mix is the declared reference product; never extrapolate one grade, plant, or region to the whole category. | `epd-international-cpcr-001`; `iso-14044-2006` |
| `boundary_energy_and_fuels` | Energy inventory | Separate electricity from thermal energy and kiln fuels from non-kiln fuels; identify conventional fossil, alternative, mixed, and biomass fuels, their lower heating values, fossil and biogenic fractions, and use location. | `gcca-cement-co2-energy-protocol-v3-1` |
| `boundary_emissions_and_internal_loops` | Direct releases, dust, and rework | Assign direct releases to the process where they occur; disclose monitoring or calculation method; keep returned dust and internal rework as internal loops; report externally treated dust, off-spec cement, and other wastes once at the boundary. | `gcca-cement-co2-energy-protocol-v3-1`; `eu-jrc-clm-bref-2013` |
| `boundary_delivery_form` | Storage and dispatch | Include packaging manufacture and packing losses for packaged cement; omit packaging for bulk cement and declare the loading and factory-gate delivery condition in both cases. | `epd-international-cpcr-001` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `integrated_clinker_production` | Integrated clinker or hydraulic-intermediate production | conditional | Include when clinker or another hydraulic intermediate is produced inside the declared cement foreground system; otherwise use a qualified upstream supplier dataset. | Produce the route-specific hydraulic intermediate and record kiln raw materials, fuels, electricity, direct emissions, dust, and wastes. | Reconciled intermediate mass consumed by the represented cement output |
| `constituent_receipt_and_preparation` | Constituent receipt and preparation | required | Include receipt, inbound transport, storage, crushing, drying, and preparation steps that occur before final grinding or blending. | Establish product-specific dry constituent inputs and supplier identities. | Dry constituent mass delivered to cement finishing per reference flow |
| `cement_grinding_and_blending` | Cement grinding, blending, and homogenization | required | Include inter-grinding, separate grinding, blending, conveying, process dust control, and internal recirculation used for the declared product. | Convert clinker or other hydraulic intermediates and additions into finished cement. | Net bulk finished cement sent to storage per reference flow |
| `storage_quality_and_dispatch` | Storage, quality control, packing, and dispatch | required | Include silos, quality testing, loading, and conditional bagging or other packaging through the factory gate. | Release conforming bulk or packaged cement as the reference product. | 1,000 kg net dry finished cement |

### Process: Integrated clinker or hydraulic-intermediate production (`integrated_clinker_production`)

#### Inputs

##### Product flows

###### Route-specific mineral feed (`hydraulic_intermediate_mineral_feed`)

Record the measured dry masses of limestone and corrective materials for Portland clinker, or the route-specific alumina- and calcium-bearing feeds for aluminous cement. Do not impose a Portland raw-meal recipe on a non-Portland route.

- Selected flow: Route-specific mineral feed
- Flow property / unit: Mass / kg
- Amount rule: measured dry mineral feed entering intermediate production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net dry finished cement
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_mass_balance`
- Sources: `eu-jrc-clm-bref-2013`

###### Kiln thermal fuels (`kiln_thermal_fuels`)

Record every conventional kiln and calciner fuel and any fuel used to dry or prepare clinker raw materials or kiln fuels.

- Selected flow: Declared conventional kiln fuels
- Flow property / unit: Mass or volume plus lower-heating-value energy / kg, Nm3, and MJ
- Amount rule: measured fuel quantity multiplied by source- and period-specific lower heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net dry finished cement
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel_and_thermal_energy`
- Sources: `gcca-cement-co2-energy-protocol-v3-1`

###### Alternative and biomass kiln fuels (`kiln_alternative_fuels`)

Record alternative, waste-derived, mixed, and biomass fuels separately, including their origin, regulatory status, lower heating value, moisture, fossil carbon, and biogenic carbon fractions.

- Selected flow: Declared alternative, mixed, or biomass fuel
- Flow property / unit: Mass or volume plus lower-heating-value energy / kg, Nm3, and MJ
- Amount rule: measured fuel quantity and verified fuel properties by fuel category
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net dry finished cement
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_and_thermal_energy`
- Sources: `gcca-cement-co2-energy-protocol-v3-1`

###### Electricity for intermediate production (`intermediate_production_electricity`)

Record metered electricity for quarry operations under operational control, raw-material and fuel preparation, kiln systems, cooling, conveying, and pollution control.

- Selected flow: Electricity, declared plant supply
- Flow property / unit: Energy / kWh
- Amount rule: metered purchased plus on-site-generated electricity consumed, with exports reported separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net dry finished cement
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_electricity`
- Sources: `gcca-cement-co2-energy-protocol-v3-1`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Clinker or other hydraulic intermediate (`hydraulic_intermediate_output`)

Record the dry mass of the route-specific intermediate supplied to cement finishing. This is an internal output in an integrated system and is not the PCR reference product.

- Selected flow: Route-specific cement clinker or hydraulic intermediate
- Flow property / unit: Mass / kg
- Amount rule: reconciled intermediate production and stock-transfer mass consumed by the declared cement product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net dry finished cement
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_intermediate_mass_balance`
- Sources: `gcca-cement-co2-energy-protocol-v3-1`

##### Waste flows

###### Kiln and bypass dust sent outside the process (`discarded_kiln_dust`)

Record dust that leaves the kiln system for treatment, disposal, or external use; do not count dust returned to the kiln or raw mill as an external waste.

- Selected flow: Cement kiln or bypass dust, declared destination
- Flow property / unit: Mass / kg
- Amount rule: measured dry dust leaving the process boundary by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net dry finished cement
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dust_rework_and_waste`
- Sources: `gcca-cement-co2-energy-protocol-v3-1`; `eu-jrc-clm-bref-2013`

##### Elementary flows

###### Direct fossil carbon dioxide (`direct_fossil_carbon_dioxide`)

Record direct fossil carbon dioxide from calcination and fuel combustion separately from declared biogenic carbon dioxide.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured or calculated direct fossil CO2 using documented plant data and method inputs
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net dry finished cement
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `gcca-cement-co2-energy-protocol-v3-1`

###### Direct nitrogen oxides (`direct_nitrogen_oxides`)

Record monitored or permit-accounted nitrogen oxides from the declared intermediate-production system.

- Selected flow: Nitrogen oxides `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- Flow property / unit: Mass / kg
- Amount rule: measured release or documented calculation from monitored concentration and gas flow
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net dry finished cement
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-clm-bref-2013`

###### Direct sulfur dioxide (`direct_sulfur_dioxide`)

Record monitored or permit-accounted sulfur dioxide from the declared intermediate-production system.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured release or documented calculation from monitored concentration and gas flow
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net dry finished cement
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-clm-bref-2013`

###### Direct particulate matter (`direct_particulate_matter`)

Record particulate releases using the monitored particle fraction. The selected flow below is used only when the monitoring result is explicitly the greater-than-PM10 fraction; other fractions require their matching flow identity.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured release for the explicitly matched particle-size fraction
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net dry finished cement
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-clm-bref-2013`

### Process: Constituent receipt and preparation (`constituent_receipt_and_preparation`)

#### Inputs

##### Product flows

###### Clinker or hydraulic-intermediate input (`clinker_or_intermediate_input`)

Record each purchased or internally transferred clinker or hydraulic-intermediate type separately, including supplier, route, geography, and dry mass.

- Selected flow: Declared clinker or hydraulic intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured dry mass received plus reconciled stock movement and internal transfers
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net dry finished cement
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_intermediate_mass_balance`
- Sources: `gcca-cement-co2-energy-protocol-v3-1`

###### Main mineral constituents (`main_mineral_constituents`)

Record slag, fly ash, natural or calcined pozzolana, limestone, aluminous constituents, and every other declared main constituent separately on a reconciled dry-mass basis.

- Selected flow: Declared main mineral constituent
- Flow property / unit: Mass / kg
- Amount rule: measured dry mass consumed by constituent and supplier
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net dry finished cement
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cement_composition_and_output`
- Sources: `gcca-cement-co2-energy-protocol-v3-1`

###### Calcium sulfate and gypsum (`calcium_sulfate_and_gypsum`)

Record natural, synthetic, or recycled calcium sulfate materials separately with source and dry mass.

- Selected flow: Declared calcium sulfate or gypsum
- Flow property / unit: Mass / kg
- Amount rule: measured dry mass consumed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net dry finished cement
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cement_composition_and_output`
- Sources: `gcca-cement-co2-energy-protocol-v3-1`

###### Minor additions and grinding aids (`minor_additions_and_grinding_aids`)

Record every addition or aid that remains in or is consumed for the product, using supplier identity and formulation records.

- Selected flow: Declared minor addition or grinding aid
- Flow property / unit: Mass / kg
- Amount rule: measured or batch-formula mass consumed
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net dry finished cement
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cement_composition_and_output`
- Sources: `epd-international-cpcr-001`

###### Inbound transport services (`inbound_transport_services`)

Record actual mode, route, distance, payload basis, and transported mass for clinker, constituents, fuels, and packaging.

- Selected flow: Declared freight transport service
- Flow property / unit: Transport service / tonne-kilometre
- Amount rule: transported dry mass in tonnes multiplied by route distance in kilometres, by mode and supplier route
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net dry finished cement
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_inbound_transport`
- Sources: `epd-international-cpcr-001`

###### Thermal energy for constituent drying (`constituent_drying_thermal_energy`)

Include thermal fuel used to dry or thermally prepare mineral constituents before grinding when that operation occurs in the declared system.

- Selected flow: Declared non-kiln drying fuel
- Flow property / unit: Mass or volume plus lower-heating-value energy / kg, Nm3, and MJ
- Amount rule: measured fuel quantity multiplied by source- and period-specific lower heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net dry finished cement
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel_and_thermal_energy`
- Sources: `gcca-cement-co2-energy-protocol-v3-1`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared cement constituents (`prepared_cement_constituents`)

Record the reconciled dry mass of prepared constituents transferred to grinding or blending, by constituent.

- Selected flow: Prepared route-specific cement constituent
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass after preparation and stock reconciliation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net dry finished cement
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cement_composition_and_output`
- Sources: `eu-jrc-clm-bref-2013`

##### Waste flows

##### Elementary flows

### Process: Cement grinding, blending, and homogenization (`cement_grinding_and_blending`)

#### Inputs

##### Product flows

###### Prepared formulation constituents (`prepared_formulation_constituents`)

Transfer the product-specific clinker or hydraulic intermediate, gypsum or calcium sulfate, main constituents, and additions from preparation without collapsing their identities.

- Selected flow: Prepared route-specific cement constituents
- Flow property / unit: Mass / kg
- Amount rule: reconciled dry constituent mass charged to the grinding or blending system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net dry finished cement
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cement_composition_and_output`
- Sources: `gcca-cement-co2-energy-protocol-v3-1`

###### Grinding and blending electricity (`grinding_and_blending_electricity`)

Record metered electricity for mills, separators, blending, conveying, internal recirculation, and dust collection.

- Selected flow: Electricity, declared plant supply
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity consumed by cement finishing equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net dry finished cement
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_electricity`
- Sources: `gcca-cement-co2-energy-protocol-v3-1`

###### Process water and cooling water (`cement_finishing_water`)

Record water crossing the foreground boundary and distinguish consumptive use, recirculation, and discharge when applicable.

- Selected flow: Water, declared source and use
- Flow property / unit: Volume or Mass / m3 or kg
- Amount rule: metered withdrawal minus documented internal recirculation, with discharge reported separately
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net dry finished cement
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_balance`
- Sources: `eu-jrc-clm-bref-2013`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Bulk finished cement to storage (`bulk_finished_cement_to_storage`)

Record conforming dry cement transferred to the declared product silo by family, standard designation, strength class, and production lot.

- Selected flow: Various Cement Products `eb61e60c-c9e9-4f78-b1c4-30f47476ec0c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net dry mass transferred to storage after deducting externally discarded off-spec material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net dry finished cement
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cement_composition_and_output`
- Sources: `gcca-cement-co2-energy-protocol-v3-1`

##### Waste flows

###### Off-spec cement and collected dust sent outside the process (`off_spec_cement_and_dust`)

Record material sent to external recycling, treatment, or disposal. Internal mill returns and dust recirculation remain internal loops.

- Selected flow: Off-spec cement or collected cement dust, declared destination
- Flow property / unit: Mass / kg
- Amount rule: measured dry mass leaving the process boundary by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net dry finished cement
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dust_rework_and_waste`
- Sources: `eu-jrc-clm-bref-2013`

##### Elementary flows

###### Grinding and handling particulate release (`cement_finishing_particulate_release`)

Record direct particulate releases from mills, separators, silos, conveyors, and dust-control systems with the monitored size fraction.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured release for the explicitly matched particle-size fraction
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net dry finished cement
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-clm-bref-2013`

### Process: Storage, quality control, packing, and dispatch (`storage_quality_and_dispatch`)

#### Inputs

##### Product flows

###### Bulk cement from finishing (`bulk_cement_from_finishing`)

Transfer only the declared conforming cement from grinding or blending and maintain lot, silo, and product identity.

- Selected flow: Various Cement Products `eb61e60c-c9e9-4f78-b1c4-30f47476ec0c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net dry mass received into the declared product silo
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net dry finished cement
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cement_composition_and_output`
- Sources: `gcca-cement-co2-energy-protocol-v3-1`

###### Packaging materials (`cement_packaging_materials`)

Include bags, liners, pallets, stretch film, and other packaging only for the declared packaged delivery form.

- Selected flow: Declared cement packaging material
- Flow property / unit: Mass / kg
- Amount rule: packaging issue records minus documented reusable packaging returns, by material
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net dry finished cement
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_and_dispatch`
- Sources: `epd-international-cpcr-001`

###### Storage, packing, and loading energy (`storage_packing_loading_energy`)

Record metered electricity and any mobile-equipment fuel used for silos, quality sampling, packing, and loading.

- Selected flow: Declared electricity and equipment fuel
- Flow property / unit: Energy / kWh and MJ
- Amount rule: measured energy assigned to storage, packing, and loading by meter or documented physical driver
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net dry finished cement
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_electricity`
- Sources: `eu-jrc-clm-bref-2013`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished hydraulic cement (`finished_hydraulic_cement`)

This is the reference output. It shall retain the declared cement family, standard designation, strength class, clinker or hydraulic-intermediate ratio, main constituent fractions, production route, site, period, and delivery form.

- Selected flow: Various Cement Products `eb61e60c-c9e9-4f78-b1c4-30f47476ec0c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg (Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`)
- Amount rule: exactly 1,000 kg net dry conforming finished cement, excluding packaging tare
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg net dry finished cement
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `unsd-cpc-3-0-explanatory-notes-2024`

##### Waste flows

###### Packaging and loading waste (`packaging_and_loading_waste`)

Record damaged packaging and loading losses sent outside the facility by material and destination.

- Selected flow: Declared packaging or loading waste
- Flow property / unit: Mass / kg
- Amount rule: measured mass leaving the foreground system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net dry finished cement
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_dispatch`
- Sources: `epd-international-cpcr-001`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | Shared facility processes | Prefer product-line metering, batch records, silo identity, and process subdivision so that clinker production, constituent preparation, grinding, blending, storage, and packing burdens are assigned directly before any allocation. | `iso-14044-2006`; `epd-international-cpcr-001` |
| `allocation_clinker_transfers` | Produced, purchased, sold, and internally transferred clinker | Use a reconciled clinker mass balance; count upstream clinker production once, include purchased clinker as an upstream product input, and do not treat internal transfers or stock movements as new production. | `gcca-cement-co2-energy-protocol-v3-1` |
| `allocation_multi_product_cement` | Shared grinding, blending, storage, and dispatch | Assign directly metered inputs and releases first. Allocate only the remaining shared burden using a documented physical driver that reflects the shared operation, such as dry throughput, mill time, metered energy, or packing count; disclose the driver and affected products. | `iso-14044-2006`; `epd-international-cpcr-001` |
| `allocation_product_mix` | Declared production-volume-weighted cement mix | Weight product-specific inventories by reconciled net dry output over the same site and reporting period. Do not use an unweighted average or combine materially different sites, regions, routes, or product families without explicit scope justification. | `iso-14044-2006` |
| `allocation_secondary_constituents_and_fuels` | Slag, fly ash, waste-derived constituents, alternative fuels, and other secondary inputs | Preserve the upstream dataset's documented waste, by-product, recycling, and allocation convention. Do not assume zero upstream burden or grant an avoided-burden credit without an explicitly selected programme rule and disclosed sensitivity. | `iso-14044-2006`; `epd-international-cpcr-001` |
| `allocation_internal_recycling` | Returned dust, internal rework, and off-spec cement returned to production | Model internal recirculation as an internal loop without a co-product credit; record only additional energy, losses, and material that cross the foreground boundary. | `gcca-cement-co2-energy-protocol-v3-1` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cement_composition_and_output` | `constituent_receipt_and_preparation`; `cement_grinding_and_blending`; `storage_quality_and_dispatch` | constituent inputs, formulation, net cement output, product qualifiers | batch tickets, weighbridge records, dosing system, laboratory and silo records | product code; standard; strength class and ages; constituent identity and supplier; wet and dry mass; moisture; batch or silo; output mass; lot; route; delivery form | Reconcile batch formulation, calibrated scales, silo transfers, and laboratory release records to the declared product. | kg dry mass and mass fraction | Per batch or lot, aggregated monthly | One representative continuous reporting period, normally 12 months unless seasonality and campaign production are otherwise justified | Every facility contributing to the declared product | Sum dry constituent and net output masses by product; calculate production-weighted values only from disclosed product outputs. | Scale calibration; laboratory certificate; formulation approval; stock reconciliation; signed production report |
| `cp_intermediate_mass_balance` | `integrated_clinker_production`; `constituent_receipt_and_preparation` | produced, purchased, sold, transferred, stocked, and consumed clinker or hydraulic intermediate | weighbridge, production meter, stock survey, transfer and purchase records | intermediate type; supplier; produced; purchased; sold; internal in and out; opening and closing stock; consumed dry mass | Reconcile the complete site mass balance by intermediate type and product use. | kg dry mass | Monthly with annual reconciliation | Same reporting period as cement output | All producing and receiving facilities in scope | Opening stock plus production plus purchases plus transfers in equals consumption plus sales plus transfers out plus closing stock, subject to documented reconciliation variance. | Stock survey; calibrated scales; invoices; transfer records; management-approved reconciliation |
| `cp_fuel_and_thermal_energy` | `integrated_clinker_production`; `constituent_receipt_and_preparation` | kiln, calciner, drying, and other thermal fuels | meter, weighbridge, invoices, fuel laboratory and supplier certificates | fuel identity; use location; mass or volume; moisture; lower heating value; fossil carbon; biogenic carbon; alternative-fuel status | Measure each fuel stream and pair it with source- and period-specific fuel properties. | kg, Nm3, MJ lower heating value | Per delivery and meter period, aggregated monthly | Same reporting period as production | Each kiln, dryer, and thermal unit | Sum energy by fuel and use location; retain fossil, alternative, mixed, and biomass categories separately. | Meter calibration; weighbridge record; fuel analysis; supplier certificate; fuel ledger |
| `cp_process_electricity` | all processes | electricity by process and supply type | submeter, utility invoice, on-site generation and export meter | purchased electricity; on-site generation; process consumption; export; meter boundary; voltage; supplier and geography | Use process submeters where available; otherwise allocate residual shared electricity with a documented physical driver. | kWh | Continuous or invoice period, aggregated monthly | Same reporting period as production | Each facility and process in scope | Purchased plus on-site electricity consumed minus separately reported exports; do not net exports against unrelated process consumption. | Meter calibration; utility invoice; generation and export records; allocation workbook |
| `cp_direct_air_emissions` | `integrated_clinker_production`; `cement_grinding_and_blending` | direct fossil and biogenic CO2, NOx, SO2, particulate fractions, and other regulated releases | continuous monitoring, stack test, permit report, mass balance or approved calculation | pollutant; flow identity; concentration; gas flow; operating hours; measured mass; calculation inputs; fossil and biogenic split; particle fraction | Prefer measured releases; where calculated, retain formula, factors, measurement inputs, and approval basis. | kg and supporting monitoring units | Continuous monitoring or each required test period | Same reporting period as production and covering normal and relevant abnormal operation | Every emitting point in the declared system | Sum by matched elementary flow and emitting process; do not map an unspecified dust result to a size-specific flow. | Calibration and QA report; stack-test report; permit submission; calculation workbook |
| `cp_dust_rework_and_waste` | `integrated_clinker_production`; `cement_grinding_and_blending` | returned dust, internal rework, off-spec cement, external recycling, treatment and disposal | dust collector, weighbridge, stock, waste transfer and rework records | material; dry mass; origin; internal return; external destination; treatment; stock change | Reconcile dust and off-spec material by origin and destination, separating internal loops from boundary-crossing waste. | kg dry mass | Monthly | Same reporting period as production | All dust-control and rework points | Internal returns are not external outputs; sum only measured external destinations as waste outputs. | Waste manifest; weighbridge record; collector log; rework authorization; stock reconciliation |
| `cp_inbound_transport` | `constituent_receipt_and_preparation` | inbound clinker, constituents, fuels, and packaging | supplier dispatch, weighbridge, carrier and route records | material; supplier origin; destination; mode; distance; payload; mass; backhaul assumption | Match each delivered mass to its actual route and mode; document route estimates when carrier records are incomplete. | tonne, km, tonne-kilometre | Per shipment, aggregated monthly | Same reporting period as production | All included suppliers and receiving facilities | Sum mass multiplied by route distance by material, supplier, mode, and route. | Bill of lading; weighbridge ticket; carrier record; route evidence |
| `cp_water_balance` | `cement_grinding_and_blending` | withdrawals, consumed water, recirculation and discharge | water meter, utility bill, tank and discharge records | source; withdrawal; recirculation; evaporation or product retention; discharge; destination | Reconcile water by source and destination without treating internal recirculation as a new withdrawal. | m3 or kg | Continuous or monthly | Same reporting period as production | Each facility in scope | Sum withdrawals by source and report recirculation and discharge separately. | Meter calibration; utility bill; discharge report; balance reconciliation |
| `cp_packaging_and_dispatch` | `storage_quality_and_dispatch` | packaging inputs, reusable returns, packing waste, product loading, bulk or packaged form | packaging issue, packing-line count, warehouse, weighbridge and dispatch records | package material and mass; units issued; reusable returns; damage; loading loss; net cement mass; delivery form | Reconcile packaging issues and waste to packed product; record no packaging input for bulk delivery. | kg packaging and kg net cement | Per batch or dispatch, aggregated monthly | Same reporting period as production | Every packing and loading line in scope | Sum packaging by material per packaged output; keep bulk and packaged products separate unless production-weighted mix is declared. | Supplier specification; packing count; warehouse issue; weighbridge and dispatch record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All inventory rows | normalized amount = reporting-period amount / reporting-period net dry finished cement output × 1,000 kg | reporting-period amount; net dry finished cement output | amount per 1,000 kg net dry finished cement | `iso-14044-2006` |
| `calc_component_fraction` | Every cement constituent | constituent dry-mass fraction = constituent dry mass consumed / net dry finished cement output | dry constituent mass; net dry cement output | product-specific constituent mass fraction | `gcca-cement-co2-energy-protocol-v3-1` |
| `calc_clinker_or_intermediate_factor` | Portland, blended, slag, aluminous, and similar routes | clinker or route-specific hydraulic-intermediate factor = reconciled intermediate dry mass consumed / net dry finished cement output | produced, purchased, sold, transferred, stocked and consumed intermediate mass; cement output | declared clinker-to-cement or hydraulic-intermediate ratio | `gcca-cement-co2-energy-protocol-v3-1` |
| `calc_fuel_energy` | Each thermal fuel | lower-heating-value energy = measured fuel quantity × source- and period-specific lower heating value; retain fuel categories and use locations separately | fuel mass or volume; lower heating value; use location; category | MJ by fuel, process, fossil/alternative/mixed/biomass category | `gcca-cement-co2-energy-protocol-v3-1` |
| `calc_transport_service` | Inbound transport | transport service = transported dry mass in tonnes × one-way or documented route distance in kilometres | mass; mode; route distance | tonne-kilometre by material, mode and route | `epd-international-cpcr-001` |
| `calc_direct_release` | Direct air emissions | normalized release = measured or approved calculated reporting-period release / net dry finished cement output × 1,000 kg | release mass or monitored concentration and gas flow; operating time; cement output | kg matched elementary flow per reference flow | `eu-jrc-clm-bref-2013`; `gcca-cement-co2-energy-protocol-v3-1` |
| `calc_product_mix` | Allowed declared cement mix | mixed inventory = sum of each product-specific inventory multiplied by its reconciled net dry production share over the same site and period | product-specific inventory; net dry output by product | production-volume-weighted declared mix inventory | `iso-14044-2006` |
| `calc_mass_balance` | Cement formulation and losses | reconcile clinker or intermediate, other constituents, additions and stock changes against finished cement, external dust, off-spec material and other documented losses; investigate and disclose residual variance | all dry inputs; stock changes; internal returns; finished cement; external wastes and losses | reconciled mass balance and disclosed variance | `gcca-cement-co2-energy-protocol-v3-1` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product | Cement family, standard designation, strength class and test ages, formulation, route, site, period, and delivery form shall be explicit and mutually consistent. | Product specification; formulation approval; laboratory release; dataset metadata |
| `dq_composition_completeness` | Cement formulation | Report all main constituents, calcium sulfate or gypsum, supplementary materials, minor additions, and grinding aids on a reconciled dry-mass basis; investigate and disclose any residual mass-balance variance. | Batch formulation; scale records; stock reconciliation; mass-balance workbook |
| `dq_temporal_representativeness` | All foreground records | Use one common representative period and disclose shutdowns, campaigns, abnormal operation, substitutions, and missing months. | Production calendar; meter coverage; maintenance and incident log |
| `dq_site_and_route_representativeness` | Facilities and suppliers | Include every facility materially contributing to the declared product and keep integrated and separate-grinding routes distinct. | Facility list; process map; supplier register; transfer records |
| `dq_energy_and_fuel_traceability` | Electricity and thermal energy | Retain meter boundaries, allocation drivers, fuel lower heating values, alternative-fuel status, and fossil/biogenic fractions; do not substitute an unqualified generic energy value. | Meter register; invoices; fuel analyses; allocation workbook |
| `dq_emission_flow_matching` | Direct emissions | Match each monitoring result to the correct elementary flow, compartment, fossil or biogenic origin, and particle-size fraction; unresolved matches remain disclosed data gaps. | Monitoring report; flow-selection record; calculation workbook |
| `dq_upstream_dataset_matching` | Clinker, other intermediates, constituents, fuels, electricity, transport and packaging | Select datasets matching declared identity, technology, geography, period, and supplier status; disclose proxies and do not use a single regional cement dataset as a category default. | Supplier evidence; dataset metadata; proxy justification and sensitivity |
| `dq_measurement_control` | Mass, energy, water and emission records | Use calibrated instruments or controlled commercial records and retain checks showing completeness and unit conversions. | Calibration certificate; invoice; laboratory QA; internal audit |
| `dq_no_hidden_estimates` | Missing foreground data | Identify every estimate and replacement method. This PCR provides no default inventory quantities, performance thresholds, legal limits, or reasoned-estimate ranges. | Data-gap register; estimation method; reviewer sign-off |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Fail unless the reference output is exactly 1,000 kg net dry finished cement using product flow `eb61e60c-c9e9-4f78-b1c4-30f47476ec0c`, Mass property `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass group `93a60a57-a4c8-11da-a746-0800200c9a66`, and unit kg. | `unsd-cpc-3-0-explanatory-notes-2024` |
| `validate_required_qualifiers` | Reference product metadata | Fail if cement family and standard designation, strength class and ages, clinker or hydraulic-intermediate type and source, factor, main constituent fractions, gypsum or calcium sulfate, additions, route, site, period, delivery form, and dry-mass convention are missing. | `epd-international-cpcr-001`; `gcca-cement-co2-energy-protocol-v3-1` |
| `validate_category_boundary` | Product applicability | Fail if the reference product is clinker, concrete, mortar, refractory composition, cement article, lime, or another non-cement product, or if a single grade, site, or regional cement is presented as the whole category. | `unsd-cpc-3-0-explanatory-notes-2024`; `gcca-cement-co2-energy-protocol-v3-1` |
| `validate_composition_and_factor` | Formulation | Fail if clinker or route-specific hydraulic-intermediate factor and all declared constituent fractions cannot be reproduced from reconciled dry-mass records or if materially different formulations are averaged without production weights. | `gcca-cement-co2-energy-protocol-v3-1` |
| `validate_energy_and_fuels` | Energy inventory | Fail if electricity and thermal energy are not separate, kiln and non-kiln fuels are conflated, or conventional, alternative, mixed and biomass fuels lack their required identity, lower heating value, use location, and fossil/biogenic split. | `gcca-cement-co2-energy-protocol-v3-1` |
| `validate_process_boundary` | Process map | Fail if applicable clinker or hydraulic-intermediate production, constituent preparation, grinding or blending, storage, pollution control, quality control, packing, or dispatch is omitted without a disclosed upstream dataset or exclusion rationale. | `eu-jrc-clm-bref-2013`; `epd-international-cpcr-001` |
| `validate_direct_releases` | Direct emissions and wastes | Fail if direct releases are not assigned to their emitting process, monitoring or calculation methods are absent, particle fractions are mismatched, or internal dust and rework are double-counted as external waste. | `eu-jrc-clm-bref-2013`; `gcca-cement-co2-energy-protocol-v3-1` |
| `validate_mass_balance` | Intermediate and finished cement mass | Fail if clinker or hydraulic-intermediate, constituent, stock, output, waste and loss records do not form a documented reconciliation or if internal transfers are counted as new production. | `gcca-cement-co2-energy-protocol-v3-1` |
| `validate_allocation` | Shared processes and secondary inputs | Fail if direct assignment and subdivision were not attempted, the remaining allocation driver is undisclosed, or waste/by-product inputs are assigned zero burden or avoided-burden credit without an explicit programme rule. | `iso-14044-2006`; `epd-international-cpcr-001` |
| `validate_packaging_and_delivery` | Factory-gate delivery | Fail if delivery form is absent, packaging is omitted for packaged cement, or packaging is included as product tare in the 1,000 kg net cement reference amount. | `epd-international-cpcr-001` |
| `validate_geography_period_and_mix` | Representativeness | Fail if facilities, geography, reporting period, product production weights, and upstream dataset matches are insufficient to reproduce the declared product or mix. | `iso-14044-2006`; `epd-international-cpcr-001` |
| `validate_no_cross_category_extrapolation` | Dataset use | Fail if Portland cement is used as a default for aluminous cement, if a single strength grade or formulation is generalized to all cement, or if a single plant or region is generalized beyond its declared representativeness. | `unsd-cpc-3-0-explanatory-notes-2024`; `iso-14044-2006` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific or disclosed production-volume-weighted secondary_dataset and background_dataset for finished hydraulic cement at the factory gate |
| downstream_use | Foreground packages and downstream process or lifecyclemodel projections for concrete, mortar, construction products, buildings, infrastructure, and other users of the declared cement |
| allowed_use | The declared cement family, standard, strength class, formulation or explicit production mix, route, facility set, geography, reporting period, and bulk or packaged delivery form |
| excluded_use | Clinker; concrete; mortar; refractory compositions; cement articles; unspecified cement averages; other strength classes, formulations, routes, facilities, regions, or periods without representativeness evidence |
| required_metadata | Canonical PCR id; product and reference-flow UUIDs; cement family and standard; strength class and ages; constituent fractions; clinker or hydraulic-intermediate factor; route; facilities; geography; period; delivery and packaging form; allocation; upstream datasets; collection protocols |
| required_quality_disclosure | Meter and scale coverage; laboratory and composition evidence; mass-balance variance; energy and fuel categorization; direct-emission methods; supplier and dataset matching; production weights; exclusions; proxies; missing data; uncertainty and sensitivity where relevant |
| update_trigger | Change in cement family or standard, strength class, formulation or clinker factor, supplier or hydraulic intermediate, kiln or grinding technology, thermal or electrical energy mix, alternative-fuel use, facility set, allocation, delivery form, geography, reporting period, or any material data-quality gap |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-explanatory-notes-2024` | official_guidance | United Nations Statistics Division, *Draft CPC Version 3.0 Explanatory Notes*, code 37440 and adjacent codes 37430 and 37510, 1 November 2024, https://unstats.un.org/unsd/classifications/Meetings/UNCEISC2024_2nd/Session7_Bk2_CPC3_Exp_Notes_1Nov2024.pdf (accessed 2026-08-08) | Product-category boundary, finished-cement identity, clinker and concrete exclusions |
| `epd-international-cpcr-001` | standard | EPD International, c-PCR-001 *Cement and building lime (EN 16908)*, registration 2019:14-c-PCR-001, version 1.0.0; refers to EN 16908:2017+A1:2022 and PCR 2019:14, https://www.environdec.com/pcr-library/pcr2019-14-c-pcr-001 (accessed 2026-08-08) | Cement-specific construction-product PCR context, cradle-to-gate product definition, packaging, allocation, quality and reporting rules |
| `gcca-cement-co2-energy-protocol-v3-1` | handbook | Global Cement and Concrete Association, *Cement CO2 and Energy Protocol*, Version 3.1, Internet Manual for printout, https://cement-co2-protocol.org/en/Content/Resources/Downloads/GCCA_Internet_Manual.pdf (accessed 2026-08-08) | Cement definition, clinker and mineral-component mass balance, clinker factor, grinding and blending, kiln and non-kiln fuel separation, alternative fuels, electricity, direct CO2 and dust accounting |
| `eu-jrc-clm-bref-2013` | official_guidance | European Commission Joint Research Centre, *Best Available Techniques Reference Document for the Production of Cement, Lime and Magnesium Oxide*, EUR 26129 EN, 2013, DOI 10.2788/12850, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/CLM_Published_def_0.pdf (accessed 2026-08-08) | Process decomposition, material and fuel preparation, kiln systems, product preparation and storage, packing and dispatch, emissions and waste monitoring |
| `iso-14044-2006` | standard | ISO 14044:2006, *Environmental management — Life cycle assessment — Requirements and guidelines*, confirmed current in 2022 with published amendments, https://www.iso.org/standard/38498.html (accessed 2026-08-08) | LCI scope, data consistency, allocation, reporting, interpretation and review framework |
