---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.coal-and-peat.peat-briquettes
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Peat briquettes

## 1. Scope and Applicability

This PCR covers binderless, uncarbonized peat compressed into dried fuel blocks. Its distinctive production requirements are moisture removal and mechanical compression, rather than peat extraction alone. Binder-containing mixed fuels, peat pellets, raw peat, peat coke, coal briquettes and horticultural growing media are excluded. The definition follows `un-energy-peat-products-2024`; classification identity follows `un-cpc-structure-2025`. The Chinese category title 泥炭压块 describes mechanically pressed fuel; UUID-bearing flow displays retain the database term 泥炭团块.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.coal-and-peat.peat-briquettes |
| classification_refs | CPC 3.0: 11052; `un-cpc-structure-2025` |
| covered_products | Binderless dried peat fuel blocks |
| excluded_products | Raw peat; peat pellets; peat coke; coal briquettes; binder-containing mixed fuels; growing media |
| representative_product | Accepted binderless peat briquette |
| production_route | Receive and prepare peat; dry; compress; cool and finish; wrap if applicable |
| market_state | Unburned solid fuel at factory gate, declared moisture, net mass excluding packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply peat briquette fuel for downstream combustion |
| How much | 1 kg net accepted product at factory gate |
| How well | Declare as-sold moisture, ash, net calorific value and mechanical acceptance criteria; no universal heating performance is assumed |
| How long or cycle | One production reporting period; downstream combustion duration is outside this production dataset |
| reference_flow_link | briquettes |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Peat briquettes `0035aeea-b20b-4287-abac-d501f59c957f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Peat source and extraction boundary; site and year; binder absence; product moisture wet basis; ash and calorific-value test basis; briquette form and acceptance; thermal route; wrapping material; upstream drainage coverage |

Required qualifiers must be declared in the foreground data package. This mass reference is a production declared unit; comparisons of delivered heat additionally require measured calorific value and downstream efficiency.

## 4. Measurement and Unit Rules

Energy-unit conversion and fuel-specific calorific-value conventions follow `un-ires-2018`, paragraphs 4.23 and 4.33–4.38. Calorific value must correspond to actual moisture, composition and measurement state; gross and net bases must not be interchanged.

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | Use calibrated net weighing of accepted briquettes, excluding wrapping. All inventory amounts use per 1 kg reference flow. |
| moisture_basis | peat_feed; peat_fuel; briquettes | Mass | kg | Record wet-basis moisture for each weighed stream. Keep as-received and dry matter separate; do not substitute dry mass for as-sold reference mass. |
| electricity_conversion | prep_electricity; dry_electricity; press_electricity | Net calorific value | MJ | Convert electricity meter kWh to MJ using 1 kWh = 3.6 MJ. This is an exact unit conversion, not a fuel calorific-value estimate. |
| gas_volume | natural_gas_fuel | Volume | m3 | Declare meter temperature, pressure and reference-volume convention. Never convert gas volume into heat without measured supplier calorific value on the same basis. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Unagglomerated peat received at the briquetting plant; declared moisture and source |
| starting_condition_role | Foreground gate-to-gate production starting input |
| product_classification_scope | Binderless peat briquette fuel; CPC 11052 is classification context |
| recursive_input_rule | Purchased briquettes used as fuel require a supplier dataset; internal recirculation is measured for balance but is not a fresh input or co-product. Never recurse into this same dataset. |
| upstream_dataset_requirement | Link peat supply including extraction, land effects and drainage greenhouse gases; link utilities, fuel, packaging and waste treatment. UN guidance does not treat peat as renewable; IPCC wetland guidance identifies extraction-area and ditch activity requirements. |
| disclosure | Declare foreground start, upstream linkage and gaps, reporting period, peatland source, heat supplier or on-site fuel route, recycling, air location and waste fate. A plant-only dataset must not be labelled cradle-to-gate. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_production | foreground | Include receiving, preparation, drying, pressing, cooling, finishing, actual wrapping, dust control and on-site thermal supply. Record each actual additional exchange separately by substance and state. | `un-energy-peat-products-2024` |
| boundary_upstream | peat_supply | Keep extraction and drainage burdens in a linked upstream dataset; do not assume burden-free peat or zero drainage emissions. IPCC national guidance informs upstream coverage, not a factory emission factor. | `ipcc-wetlands-2013` |
| boundary_internal | internal_transfers | Interstage peat and internally generated steam are internal transfers. Measure them for reconciliation without repeating external inputs; purchased heat excludes on-site generated heat. |  |
| boundary_use | downstream | Exclude customer delivery, final fuel combustion and consumer ash treatment; model these separately for heat-service comparisons. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| prepare | Peat reception and preparation | required | Entire binderless briquette line | Foreground production | per 1 kg reference flow |
| dry | Drying and moisture control | required | Moisture conditioning before pressing | Foreground production | per 1 kg reference flow |
| finish | Compression, finishing and wrapping | required | Accepted briquette production | Foreground production | per 1 kg reference flow |
| boiler | On-site thermal supply | conditional | On-site fuel combustion supplies production heat | Foreground production | per 1 kg reference flow |

### Process: Peat reception and preparation (`prepare`)

#### Inputs

##### Product flows

###### Peat feedstock (`peat_feed`)

Always; externally supplied unagglomerated peat.

- inclusion_condition: Always; externally supplied unagglomerated peat.
- Selected flow: Peat `485febdb-01e0-47ad-8ebe-c500a35669bd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured reporting-period exchange divided by accepted net briquette output mass; use cp_prepare.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prepare`

###### Preparation electricity (`prep_electricity`)

Always; conveying, milling and screening.

- inclusion_condition: Always; conveying, milling and screening.
- Selected flow: Alternating current `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured reporting-period exchange divided by accepted net briquette output mass; use cp_prepare.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prepare`

### Process: Drying and moisture control (`dry`)

#### Inputs

##### Product flows

###### Dryer electricity (`dry_electricity`)

Always; fans and dryer drives.

- inclusion_condition: Always; fans and dryer drives.
- Selected flow: Alternating current `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured reporting-period exchange divided by accepted net briquette output mass; use cp_dry.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry`

###### Purchased steam heat (`purchased_heat`)

Only when steam heat is purchased across the plant boundary. Exclude internally generated heat.

- inclusion_condition: Only when steam heat is purchased across the plant boundary. Exclude internally generated heat.
- Selected flow: Process heat from steam `fcf9e128-688f-42f0-9dca-85d2319cfac5`
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured reporting-period exchange divided by accepted net briquette output mass; use cp_dry.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry`

###### Tap water make-up (`tap_water`)

Only when tap water is consumed in cooling or steam-system make-up.

- inclusion_condition: Only when tap water is consumed in cooling or steam-system make-up.
- Selected flow: Tap water `3a8411b6-e476-4f98-9d77-0d492661a07f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: Measured reporting-period exchange divided by accepted net briquette output mass; use cp_dry.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry`

#### Outputs

##### Elementary flows

###### Peat moisture evaporation (`evaporated_water`)

Always when moisture is removed into air; separate from liquid effluent.

- inclusion_condition: Always when moisture is removed into air; separate from liquid effluent.
- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Determine evaporated moisture from measured feed and product moisture with a reconciled water balance using cp_dry.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dry`

###### PM10 to air (`pm10_air`)

When measured particulate emissions occur from drying or handling; record actual air location.

- inclusion_condition: When measured particulate emissions occur from drying or handling; record actual air location.
- Selected flow: particles (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured reporting-period exchange divided by accepted net briquette output mass; use cp_dry.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry`

### Process: Compression, finishing and wrapping (`finish`)

#### Inputs

##### Product flows

###### Pressing and finishing electricity (`press_electricity`)

Always; presses, cooling and finishing equipment.

- inclusion_condition: Always; presses, cooling and finishing equipment.
- Selected flow: Alternating current `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured reporting-period exchange divided by accepted net briquette output mass; use cp_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish`

###### Polyethylene wrapping film (`polyethylene_film`)

Only when polyethylene film is used for sale-ready wrapping.

- inclusion_condition: Only when polyethylene film is used for sale-ready wrapping.
- Selected flow: Polyethylene packaging film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured reporting-period exchange divided by accepted net briquette output mass; use cp_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish`

#### Outputs

##### Product flows

###### Accepted briquette output (`briquettes`)

Always; net accepted mass after finishing, excluding packaging.

- inclusion_condition: Always; net accepted mass after finishing, excluding packaging.
- Selected flow: Peat briquettes `0035aeea-b20b-4287-abac-d501f59c957f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish`

##### Waste flows

###### Discarded peat fines (`peat_reject`)

Only when peat fines leave for waste treatment; internal rework is not an exchange.

- inclusion_condition: Only when peat fines leave for waste treatment; internal rework is not an exchange.
- Selected flow: Waste peat fines
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured reporting-period exchange divided by accepted net briquette output mass; use cp_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish`

### Process: On-site thermal supply (`boiler`)

#### Inputs

##### Product flows

###### Natural gas fuel (`natural_gas_fuel`)

Only for an on-site natural gas burner supplying production heat.

- inclusion_condition: Only for an on-site natural gas burner supplying production heat.
- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: Measured reporting-period exchange divided by accepted net briquette output mass; use cp_boiler.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_boiler`

###### Peat fuel (`peat_fuel`)

Only when raw peat is burned on site for production heat; do not include this mass in peat_feed.

- inclusion_condition: Only when raw peat is burned on site for production heat; do not include this mass in peat_feed.
- Selected flow: Peat `485febdb-01e0-47ad-8ebe-c500a35669bd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured reporting-period exchange divided by accepted net briquette output mass; use cp_boiler.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_boiler`

#### Outputs

##### Waste flows

###### Peat combustion fly ash (`peat_fly_ash`)

Only for peat-fired equipment with a separately collected fly-ash stream.

- inclusion_condition: Only for peat-fired equipment with a separately collected fly-ash stream.
- Selected flow: Peat combustion fly ash
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured reporting-period exchange divided by accepted net briquette output mass; use cp_boiler.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_boiler`

###### Peat combustion bottom ash (`peat_bottom_ash`)

Only for peat-fired equipment with a separately collected bottom-ash stream.

- inclusion_condition: Only for peat-fired equipment with a separately collected bottom-ash stream.
- Selected flow: Peat combustion bottom ash
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured reporting-period exchange divided by accepted net briquette output mass; use cp_boiler.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_boiler`

##### Elementary flows

###### Direct fossil carbon dioxide (`combustion_co2`)

Only when on-site fuel combustion occurs; disclose peat-carbon classification and actual air location.

- inclusion_condition: Only when on-site fuel combustion occurs; disclose peat-carbon classification and actual air location.
- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured reporting-period exchange divided by accepted net briquette output mass; use cp_boiler.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_boiler`

###### Direct nitrogen dioxide (`combustion_no2`)

When nitrogen dioxide is emitted; total NOx reported as NO2 equivalent must not be silently treated as pure NO2.

- inclusion_condition: When nitrogen dioxide is emitted; total NOx reported as NO2 equivalent must not be silently treated as pure NO2.
- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured reporting-period exchange divided by accepted net briquette output mass; use cp_boiler.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_boiler`

###### Direct carbon monoxide (`combustion_co`)

When carbon monoxide is emitted from on-site combustion.

- inclusion_condition: When carbon monoxide is emitted from on-site combustion.
- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured reporting-period exchange divided by accepted net briquette output mass; use cp_boiler.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_boiler`

###### Direct sulfur dioxide (`combustion_so2`)

When sulfur dioxide is emitted from on-site combustion.

- inclusion_condition: When sulfur dioxide is emitted from on-site combustion.
- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured reporting-period exchange divided by accepted net briquette output mass; use cp_boiler.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_boiler`

###### Direct methane (`combustion_ch4`)

When methane is emitted from on-site fuel combustion.

- inclusion_condition: When methane is emitted from on-site fuel combustion.
- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured reporting-period exchange divided by accepted net briquette output mass; use cp_boiler.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_boiler`

###### Direct nitrous oxide (`combustion_n2o`)

When nitrous oxide is emitted from on-site fuel combustion.

- inclusion_condition: When nitrous oxide is emitted from on-site fuel combustion.
- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured reporting-period exchange divided by accepted net briquette output mass; use cp_boiler.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_boiler`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocate_subdivide | shared_operations | First subdivide using line meters, weighed production and thermal-supply records. Shared heat generation is assigned by measured delivered heat; electricity by submeter readings. Document any remaining allocation and test sensitivity. | `ghg-product-standard-2011` |
| allocate_rework | peat_reject | Internal fines recirculation receives no avoided-product credit. Treat discarded fines and ash as waste unless documented sale establishes a co-product; subdivision precedes allocation by demonstrated physical relationships; use a disclosed, justified economic relationship only when the physical basis cannot be established or used. | `ghg-product-standard-2011` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

`ghg-product-standard-2011`, Chapter 8 supports foreground activity collection and quality assessment; Chapter 9 supports subdivision and the allocation hierarchy. Its formal scope is GHG accounting; this PCR extends exchange-specific collection and disclosed data quality to water, materials and waste records. Knowledge of finished-product reference mass alone does not establish input or emission activity data.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_prepare | prepare | Every exchange in this process | Meter, weighing and laboratory records | peat source; received mass; moisture; electricity; stock changes; reporting dates | Use calibrated scales and meters, traceable supplier receipts and representative moisture tests; quantify actual emissions after controls by substance, air compartment and method. Preserve zero/absent and missing values separately. | kg; MJ; m3 according to each row | Each batch and meter period; representative emission testing | One complete declared production year; disclose shorter campaigns and seasonal coverage | Assigned briquetting line and attributable site services | per 1 kg reference flow | Calibration; scale tickets; test method; allocation log; balance closure |
| cp_dry | dry | Every exchange in this process | Meter, weighing and laboratory records | inlet and outlet mass and moisture; electricity; purchased heat; tap water; liquid discharge; condensate; PM10 test; sampling times | Use calibrated scales and meters, traceable supplier receipts and representative moisture tests; quantify actual emissions after controls by substance, air compartment and method. Preserve zero/absent and missing values separately. | kg; MJ; m3 according to each row | Each batch and meter period; representative emission testing | One complete declared production year; disclose shorter campaigns and seasonal coverage | Assigned briquetting line and attributable site services | per 1 kg reference flow | Calibration; scale tickets; test method; allocation log; balance closure |
| cp_finish | finish | Every exchange in this process | Meter, weighing and laboratory records | accepted net briquette mass; moisture; ash; net calorific value; packaging film mass; press electricity; rejects; stock changes | Use calibrated scales and meters, traceable supplier receipts and representative moisture tests; quantify actual emissions after controls by substance, air compartment and method. Preserve zero/absent and missing values separately. | kg; MJ; m3 according to each row | Each batch and meter period; representative emission testing | One complete declared production year; disclose shorter campaigns and seasonal coverage | Assigned briquetting line and attributable site services | per 1 kg reference flow | Calibration; scale tickets; test method; allocation log; balance closure |
| cp_boiler | boiler | Every exchange in this process | Meter, weighing and laboratory records | fuel peat mass and moisture; gas volume pressure and temperature; delivered heat; fuel carbon and sulfur; each measured emitted substance; fly ash; bottom ash | Use calibrated scales and meters, traceable supplier receipts and representative moisture tests; quantify actual emissions after controls by substance, air compartment and method. Preserve zero/absent and missing values separately. | kg; MJ; m3 according to each row | Each batch and meter period; representative emission testing | One complete declared production year; disclose shorter campaigns and seasonal coverage | Assigned briquetting line and attributable site services | per 1 kg reference flow | Calibration; scale tickets; test method; allocation log; balance closure |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | all inventory rows | Divide attributable reporting-period exchange totals by accepted net briquette mass in kg. The briquettes reference output is exactly 1 kg. | cp_prepare; cp_dry; cp_finish; cp_boiler | Each amount per 1 kg reference flow |  |
| water_balance | evaporated_water | Water evaporated equals water entering in peat and make-up minus water in products, rejects, liquid discharges and condensate leaving, adjusted for stock change. Prevent duplication of boiler moisture and plant drying moisture. | cp_prepare; cp_dry; cp_finish | Evaporated water per 1 kg reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | briquettes | Confirm binderless, uncarbonized peat block and declared moisture; exclude packaging from reference mass. | `un-energy-peat-products-2024`; cp_finish |
| quality_upstream | peat_feed; peat_fuel | Disclose peat extraction geography, source period and drainage emissions coverage. No carbon-neutral assumption. | `un-energy-peat-products-2024`; `ipcc-wetlands-2013` |
| quality_complete | all inventory rows | Reconcile dry matter, water, energy and rejected material. Record actual additional fuels, water discharges, packaging components and emitted species as individual exchanges with their own identity checks; do not hide them in a total-material row. Explain missing values and unresolved flow identities. | cp_prepare; cp_dry; cp_finish; cp_boiler |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_basis | all inventory rows | Require one consistent 1 kg net accepted briquette denominator, identical reporting periods and a linked collection protocol for each row. |  |
| validate_route | foreground | Verify binder absence, product state, actual thermal route and utility-source separation. On-site heat and purchased heat must not count the same burden twice. | `un-energy-peat-products-2024` |
| validate_balance | foreground | Require documented mass and moisture reconciliation, waste fate and emissions completeness. Unexplained deviations and missing pollutant quantities require further collection, not a zero substitution. |  |
| validate_identity | all inventory rows | Resolve or explicitly disclose every flow UUID gap; supplier background datasets must fit geography, year, technology and declared state. Do not substitute a coal ash flow for peat ash or nitrous oxide for nitrogen dioxide. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Binderless peat briquette production; linked fuel-supply modelling with explicit extraction boundary |
| excluded_use | Binder-containing mixtures, carbonized peat, growing media, carbon-neutral claims, direct comparison of useful heat without downstream modelling |
| required_metadata | Site; year; peat origin; moisture; ash; calorific-value basis; route; reference unit; upstream links; wrapping; allocation |
| required_quality_disclosure | Meter and test coverage; seasonal coverage; uncertainty; unresolved UUIDs; missing upstream drainage data; absent external intensity benchmarks |
| update_trigger | Change of peat source, heat route, moisture specification, product acceptance, utility supplier or material emissions data |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-structure-2025 | official_guidance | CPC Version 3.0 Structure (UNSD), 30 June 2025, rows 443-445. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Classification identity; original source retained 2026-09-10 |
| un-energy-peat-products-2024 | official_guidance | Guidelines for the 2022 United Nations Statistics Division Annual Questionnaire on Energy Statistics, May 2024, p. 8, Peat and Peat products. https://unstats.un.org/unsd/energy/energy-questionnaire-guidelines.pdf | Binderless dried compressed fuel definition; non-renewable peat context; retrieved 2026-09-30 |
| ipcc-wetlands-2013 | official_guidance | 2013 Supplement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories: Wetlands, 2014 published edition, Chapter 2, p. 2.28. https://www.ipcc-nggip.iges.or.jp/public/wetlands/pdf/Wetlands_Supplement_Entire_Report.pdf | Upstream peat extraction and drainage activity coverage only; no adopted emission factors; retrieved 2026-09-30 |
| un-ires-2018 | official_guidance | International Recommendations for Energy Statistics. United Nations, 2018; Chapter IV, paragraphs 4.23 and 4.33–4.38 (printed pp. 44, 46–47). https://unstats.un.org/unsd/energystats/methodology/documents/IRES-web.pdf | Energy-unit conversion, measured calorific value and moisture basis; original retrieved 2026-10-01 |
| ghg-product-standard-2011 | standard | Product Life Cycle Accounting and Reporting Standard. WRI/WBCSD, 2011; Chapters 8 and 9 (printed pp. 47–48 and 63). https://docs.wbcsd.org/2011/09/Product_Life_Cycle_Accounting_Reporting_Standard.pdf | GHG foreground data quality, subdivision and allocation hierarchy prioritizing physical relationships; original retrieved 2026-09-30 |
