---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.coal-and-peat.bituminous-coal
status: candidate
language: en-US
sync_with: pcr.zh-CN.md
---

# Bituminous Coal

## 1. Scope and Applicability

This PCR covers unagglomerated bituminous coal from underground or surface extraction through physical preparation, storage and mine/preparation-gate loading. It supports coal supplied for thermal or metallurgical use without including its eventual combustion or coke conversion. Raw and cleaned saleable coal require different declared preparation states; they are not interchangeable datasets. CPC identifies rank, not a universal quality specification. [Sources: `epa-coal-cleaning-1995`, `ipcc-fugitive-2019`].

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.coal-and-peat.bituminous-coal |
| classification_refs | CPC 3.0: 11012 |
| covered_products | Unagglomerated bituminous coal, raw or physically cleaned; declared thermal or metallurgical grade |
| excluded_products | Anthracite; sub-bituminous coal; lignite; peat; coal briquettes; coke; coal tar; coal gas; chemically converted coal |
| representative_product | Saleable bulk bituminous coal at declared moisture, ash, sulfur and calorific value |
| production_route | Underground or surface mining, with site-specific physical preparation; disclose purchased-feed-only operations |
| market_state | Bulk solid at mine or preparation gate, as received; no packaging mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply bituminous coal as a material and fuel feedstock |
| How much | 1 kg net saleable coal |
| How well | Declared rank, raw/cleaned state, grade, total moisture, ash, sulfur, net calorific value and test basis; caking properties when claimed |
| How long or cycle | One production and gate-supply event; representative declared reporting period |
| reference_flow_link | `saleable_coal` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Bituminite `f10e7264-fc49-491a-a886-f717e3c7a437` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | mine and basin; mining method; raw or cleaned state; coal grade; moisture/ash/sulfur test bases; net calorific value and its basis; preparation route; storage duration; gate location; reporting period; methane management; allocation |

Required qualifiers must accompany the foreground package. Mass is the reference quantity; calorific value is a qualifier, not an assumed coal-to-energy conversion.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net coal mass on the declared as-received moisture basis from cp_gate_mass; exclude container and packaging tare. |
| energy_unit | mine_electricity; prep_electricity | Energy | MJ | Preserve meter kWh and report electrical energy in MJ using 1 kWh = 3.6 MJ; do not apply a fuel heating value to electricity. |
| moisture_basis | all inventory rows | Mass | kg | Record wet and dry quantities separately; use measured moisture for any conversion and reconcile water in product and rejects. Never combine dry yield with an unconverted wet denominator. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Coal seam for integrated mining; traceable raw-coal receipt for a purchased-feed preparation dataset |
| starting_condition_role | Elementary resource extraction or externally supplied product input, explicitly distinguished |
| product_classification_scope | Bituminous coal rank; separately disclose raw, cleaned and internally burned quantities |
| recursive_input_rule | Purchased bituminous coal uses a separate upstream dataset and measured receipt. Internal mine-to-preparation and coal-fuel transfers are reconciled once and do not restart extraction. |
| upstream_dataset_requirement | Link supplied electricity, diesel, chemicals, water and externally treated wastes to compatible regional datasets. Purchased-feed-only operation must add a separate raw-coal product input and upstream mine dataset. |
| disclosure | Mining method, mine depth, seams, preparation, gate, time coverage, purchased-feed status, water recirculation, reclamation and infrastructure coverage |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_operations | all inventory rows | Include extraction, stripping and internal haulage, ventilation and drainage, applicable preparation, stockpiling and loading, plus associated waste handling. Exclude downstream transport, combustion, coking and gasification. | epa-coal-cleaning-1995; ifc-mining-2007 |
| boundary_gases | mine_methane; prep_methane; mine_co2; prep_co2 | Separate seam-gas releases, combustion and post-mining releases within the gate. Report gas utilisation, oxidation and flaring explicitly; captured methane is not an atmospheric emission or automatic negative credit. | ipcc-fugitive-2019 |
| boundary_completeness | foreground package | Assess land occupation/transformation, exploration, infrastructure, rehabilitation and post-closure liabilities; include material contributions using stated lifetime production allocation or disclose justified omissions. Add each actual material, pollutant and treatment output as a separate atomic row; this inventory is a core collection template, not an exhaustive site bill. | ifc-mining-2007; ipcc-fugitive-2019 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| mine | Extraction and mine services | required | Integrated mining dataset; purchased-feed-only datasets retain upstream mining linkage instead | Foreground production | per 1 kg reference flow |
| preparation | Physical preparation | conditional | Crushing, screening, washing, dewatering or drying occurs | Conditioning and storage | per 1 kg reference flow |
| gate | Saleable coal gate accounting | required | All datasets | Reference output | per 1 kg reference flow |

For a preparation-free route, assign stockyard and gate-handling emissions to mine rows and omit preparation rows with documented absence. For a thermal dryer, add each additional fuel, reagent and emission species (including CO, NOx and SO2) in the preparation process separately; the coal-fuel card applies only to coal-fired dryers.

### Process: Extraction and mine services (`mine`)

#### Inputs

##### Product flows

###### Electricity (`mine_electricity`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Meter extraction, ventilation, pumping, conveying and waste handling electricity; document voltage and supplier.

- Selected flow: Electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` ; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect attributable exchange per 1 kg reference flow using cp_mine_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mine_energy`
- Sources: `ifc-mining-2007`

###### Diesel fuel (`mine_diesel`)

Measure diesel consumed by mine equipment and internal haulage; reconcile fuel stocks and record density for volume records.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect attributable exchange per 1 kg reference flow using cp_mine_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mine_energy`
- Sources: `ifc-mining-2007`

###### Process Water (`mine_water`)

Measure externally supplied make-up water for dust suppression and operation; exclude internal recirculation.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect attributable exchange per 1 kg reference flow using cp_mine_water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mine_water`
- Sources: `ifc-mining-2007`

###### Ammonium nitrate (`mine_explosive`)

Include only where ammonium nitrate crosses the mine boundary for blasting; record its actual mass, separately from fuel oil and other explosive constituents.

- Selected flow: Ammonium nitrate `4d621a16-cd12-4fc1-9499-21cd8001941f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect attributable exchange per 1 kg reference flow using cp_mine_materials.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mine_materials`
- Sources: `ifc-mining-2007`

##### Elementary flows

###### Hard coal, in ground (`coal_resource`)

Record extracted coal mass excluding mineral waste, on declared moisture basis; retain seam and extraction-loss records.

- Selected flow: Hard coal, in ground
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable exchange per 1 kg reference flow using cp_mine_mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mine_mass`
- Sources: `ifc-mining-2007`

#### Outputs

##### Waste flows

###### Coal mine waste rock (`mine_rock`)

Measure coal-bearing waste rock sent to dumps or backfill; declare mineral composition and destination. Record surface overburden separately when present.

- Selected flow: Coal gangue `a5fa448c-4a0f-4ead-b9b3-8bd843d346b9`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect attributable exchange per 1 kg reference flow using cp_mine_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mine_waste`
- Sources: `ifc-mining-2007`

###### Coal mine drainage water for treatment (`mine_effluent`)

Include when mine drainage is exported for treatment; measure quantity and pollutant concentrations, destination and treatment coverage.

- Selected flow: Coal mine drainage water for treatment
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable exchange per 1 kg reference flow using cp_mine_water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mine_water`
- Sources: `ifc-mining-2007`

###### Waste lubricating oil (`mine_oil`)

Include maintenance waste oil when generated; weigh separately and retain licensed treatment records.

- Selected flow: Waste lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable exchange per 1 kg reference flow using cp_mine_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mine_waste`
- Sources: `ifc-mining-2007`

##### Elementary flows

###### Methane, fossil (`mine_methane`)

Measure atmospheric methane from ventilation and drainage; distinguish vented, captured, utilised and destroyed gas. Add site-specific post-closure attribution when included.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect attributable exchange per 1 kg reference flow using cp_mine_gas.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mine_gas`
- Sources: `ipcc-fugitive-2019`

###### Carbon dioxide, fossil (`mine_co2`)

Include direct fossil carbon dioxide from on-site fuel use, seam gas, oxidation and flaring; document source-specific measurement or calculation.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect attributable exchange per 1 kg reference flow using cp_mine_gas.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mine_gas`
- Sources: `ipcc-fugitive-2019`

###### Carbon monoxide, fossil (`mine_co`)

Include fossil carbon monoxide from on-site combustion when present; quantify with applicable measurement or documented source model.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect attributable exchange per 1 kg reference flow using cp_mine_gas.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mine_gas`
- Sources: `ifc-mining-2007`

###### Nitrogen oxides, as NO2 (`mine_nox`)

Include combustion or blasting nitrogen oxides when present; preserve the NO2-equivalent reporting basis; do not substitute nitrous oxide.

- Selected flow: Nitrogen oxides, as NO2
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable exchange per 1 kg reference flow using cp_mine_gas.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mine_gas`
- Sources: `ifc-mining-2007`

###### Sulfur dioxide (`mine_so2`)

Include sulfur dioxide from on-site combustion when present; use monitored release or fuel-sulfur records with documented retention.

- Selected flow: Sulfur dioxide
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable exchange per 1 kg reference flow using cp_mine_gas.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mine_gas`
- Sources: `ifc-mining-2007`

###### Particulate matter, particle size unspecified (`mine_pm`)

Measure total airborne particulate matter after controls from extraction and haulage; document size information. Do not add total PM to overlapping size fractions.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect attributable exchange per 1 kg reference flow using cp_mine_gas.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mine_gas`
- Sources: `ifc-mining-2007`

### Process: Physical preparation (`preparation`)

#### Inputs

##### Product flows

###### Electricity (`prep_electricity`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Meter crushing, screening, separation, dewatering, dust collection and stockyard electricity within the preparation boundary.

- Selected flow: Electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` ; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect attributable exchange per 1 kg reference flow using cp_preparation_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_energy`
- Sources: `epa-coal-cleaning-1995`

###### Process Water (`prep_water`)

Include make-up water where wet cleaning or dust suppression operates; reconcile reuse and water retained in coal and rejects.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect attributable exchange per 1 kg reference flow using cp_preparation_water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_water`
- Sources: `epa-coal-cleaning-1995`

###### Magnetite powder (`prep_magnetite`)

Include magnetite make-up only in a magnetite dense-medium circuit; measure purchases and stock changes, excluding internal medium circulation.

- Selected flow: Magnetite powder
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable exchange per 1 kg reference flow using cp_preparation_materials.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_materials`
- Sources: `epa-coal-cleaning-1995`

###### Bituminite (`dryer_coal`)

Include coal fuel where a coal-fired dryer operates; weigh fuel separately from saleable output. Internally supplied fuel has an internal transfer, not duplicate extraction.

- Selected flow: Bituminite `f10e7264-fc49-491a-a886-f717e3c7a437`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect attributable exchange per 1 kg reference flow using cp_preparation_mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_mass`
- Sources: `epa-coal-cleaning-1995`

#### Outputs

##### Waste flows

###### Coal washing reject (`prep_reject`)

Include rejects where separation operates; measure wet and dry mass, residual carbon and destination; distinguish sold coproducts from wastes.

- Selected flow: Coal gangue `a5fa448c-4a0f-4ead-b9b3-8bd843d346b9`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect attributable exchange per 1 kg reference flow using cp_preparation_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_waste`
- Sources: `epa-coal-cleaning-1995`

###### Coal washing wastewater for treatment (`prep_effluent`)

Include exported wash-water purge where a wet circuit operates; record suspended solids, pollutant concentrations and external treatment.

- Selected flow: Coal washing wastewater for treatment
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable exchange per 1 kg reference flow using cp_preparation_water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_water`
- Sources: `epa-coal-cleaning-1995`

##### Elementary flows

###### Methane, fossil (`prep_methane`)

Collect post-mining atmospheric methane released during processing and storage up to the gate; do not include downstream transport.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect attributable exchange per 1 kg reference flow using cp_preparation_gas.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_gas`
- Sources: `ipcc-fugitive-2019`

###### Carbon dioxide, fossil (`prep_co2`)

Include direct fossil carbon dioxide from thermal drying and coal oxidation where present; distinguish combustion from seam-gas release.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect attributable exchange per 1 kg reference flow using cp_preparation_gas.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_gas`
- Sources: `ipcc-fugitive-2019`

###### Particulate matter, particle size unspecified (`prep_pm`)

Measure particulate matter after controls from crushing, screening, storage and drying; preserve source and particle-size evidence.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect attributable exchange per 1 kg reference flow using cp_preparation_gas.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_gas`
- Sources: `epa-coal-cleaning-1995`

### Process: Saleable coal gate accounting (`gate`)

#### Outputs

##### Product flows

###### Bituminite (`saleable_coal`)

1 kg; establish net saleable coal mass with calibrated weighing and declared as-received moisture.

- Selected flow: Bituminite `f10e7264-fc49-491a-a886-f717e3c7a437`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gate_mass`
- Sources: `ifc-mining-2007`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | foreground burdens | Use separate meters and records to assign separable operations to coal grades and exported gas. Record allocation factors, quantities and rationale in cp_allocation. No avoided-product credit is assumed. |  |
| allocation_joint | joint coal outputs | For inseparable coal-grade outputs, justify the physical relationship before allocation; use net calorific energy when burdens follow energy-bearing coal production, with measured grade-specific mass and heating value. If unsuitable, disclose another justified basis and sensitivity. Do not allocate to waste solely because it contains carbon. |  |
| allocation_gas | mine_methane; mine_co2 | Distinguish methane captured, used internally, exported and released. Retain joint-process burdens and explicit allocation separately from emission accounting; do not subtract captured quantities from already measured net releases. | ipcc-fugitive-2019 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mine_energy | mine | energy | meter and stock records | meter readings; electricity kWh; diesel kg; tank levels; density; voltage | Read meters and reconcile fuel receipts, closing/opening stocks and equipment logs; report electricity in MJ. Divide each period total by net saleable coal kg from cp_gate_mass for the same period. | MJ; kg | Continuous or each batch; reconcile monthly | Declared representative 12-month period, or justified shorter campaign | Same mine/preparation and gate boundary | per 1 kg reference flow | Calibration, raw records, assays, coverage and uncertainty |
| cp_mine_water | mine | water | water balance | make-up mass; recirculated mass; drainage; purge; moisture; dissolved and suspended pollutants | Meter supply and purge separately; record density for volume-to-mass conversion and sample effluent chemistry. Divide each period total by net saleable coal kg from cp_gate_mass for the same period. | kg | Continuous or each batch; reconcile monthly | Declared representative 12-month period, or justified shorter campaign | Same mine/preparation and gate boundary | per 1 kg reference flow | Calibration, raw records, assays, coverage and uncertainty |
| cp_mine_materials | mine | materials | material stock records | chemical identity; purity; purchases; inventories; ammonium nitrate; magnetite recovery | Reconcile receipts and stocks for each chemical; separate individual formulation constituents and internal recycling. Divide each period total by net saleable coal kg from cp_gate_mass for the same period. | kg | Continuous or each batch; reconcile monthly | Declared representative 12-month period, or justified shorter campaign | Same mine/preparation and gate boundary | per 1 kg reference flow | Calibration, raw records, assays, coverage and uncertainty |
| cp_mine_mass | mine | mass | weighing and assay | coal net mass; tare; moisture; ash; grade; fuel or resource role | Calibrated weighbridge or belt scale and representative coal sampling; reconcile output, internal fuel and stocks. Divide each period total by net saleable coal kg from cp_gate_mass for the same period. | kg | Continuous or each batch; reconcile monthly | Declared representative 12-month period, or justified shorter campaign | Same mine/preparation and gate boundary | per 1 kg reference flow | Calibration, raw records, assays, coverage and uncertainty |
| cp_mine_waste | mine | waste | waste tracking | waste type; wet mass; dry mass; destination; residual coal; treatment; reuse | Weigh each rock, reject and oil stream separately; retain manifests and composition assays. Divide each period total by net saleable coal kg from cp_gate_mass for the same period. | kg | Continuous or each batch; reconcile monthly | Declared representative 12-month period, or justified shorter campaign | Same mine/preparation and gate boundary | per 1 kg reference flow | Calibration, raw records, assays, coverage and uncertainty |
| cp_mine_gas | mine | gas | emission monitoring | source; gas flow; concentration; temperature; pressure; moisture; duration; capture; flare; particle size; model factors | Use calibrated outlet flow and concentration monitoring or a documented site-specific model; integrate releases after controls, separately by species and source, without subtracting capture twice. Divide each period total by net saleable coal kg from cp_gate_mass for the same period. | kg | Continuous or each batch; reconcile monthly | Declared representative 12-month period, or justified shorter campaign | Same mine/preparation and gate boundary | per 1 kg reference flow | Calibration, raw records, assays, coverage and uncertainty |
| cp_preparation_energy | preparation | energy | meter and stock records | meter readings; electricity kWh; diesel kg; tank levels; density; voltage | Read meters and reconcile fuel receipts, closing/opening stocks and equipment logs; report electricity in MJ. Divide each period total by net saleable coal kg from cp_gate_mass for the same period. | MJ; kg | Continuous or each batch; reconcile monthly | Declared representative 12-month period, or justified shorter campaign | Same mine/preparation and gate boundary | per 1 kg reference flow | Calibration, raw records, assays, coverage and uncertainty |
| cp_preparation_water | preparation | water | water balance | make-up mass; recirculated mass; drainage; purge; moisture; dissolved and suspended pollutants | Meter supply and purge separately; record density for volume-to-mass conversion and sample effluent chemistry. Divide each period total by net saleable coal kg from cp_gate_mass for the same period. | kg | Continuous or each batch; reconcile monthly | Declared representative 12-month period, or justified shorter campaign | Same mine/preparation and gate boundary | per 1 kg reference flow | Calibration, raw records, assays, coverage and uncertainty |
| cp_preparation_materials | preparation | materials | material stock records | chemical identity; purity; purchases; inventories; ammonium nitrate; magnetite recovery | Reconcile receipts and stocks for each chemical; separate individual formulation constituents and internal recycling. Divide each period total by net saleable coal kg from cp_gate_mass for the same period. | kg | Continuous or each batch; reconcile monthly | Declared representative 12-month period, or justified shorter campaign | Same mine/preparation and gate boundary | per 1 kg reference flow | Calibration, raw records, assays, coverage and uncertainty |
| cp_preparation_mass | preparation | mass | weighing and assay | coal net mass; tare; moisture; ash; grade; fuel or resource role | Calibrated weighbridge or belt scale and representative coal sampling; reconcile output, internal fuel and stocks. Divide each period total by net saleable coal kg from cp_gate_mass for the same period. | kg | Continuous or each batch; reconcile monthly | Declared representative 12-month period, or justified shorter campaign | Same mine/preparation and gate boundary | per 1 kg reference flow | Calibration, raw records, assays, coverage and uncertainty |
| cp_preparation_waste | preparation | waste | waste tracking | waste type; wet mass; dry mass; destination; residual coal; treatment; reuse | Weigh each rock, reject and oil stream separately; retain manifests and composition assays. Divide each period total by net saleable coal kg from cp_gate_mass for the same period. | kg | Continuous or each batch; reconcile monthly | Declared representative 12-month period, or justified shorter campaign | Same mine/preparation and gate boundary | per 1 kg reference flow | Calibration, raw records, assays, coverage and uncertainty |
| cp_preparation_gas | preparation | gas | emission monitoring | source; gas flow; concentration; temperature; pressure; moisture; duration; capture; flare; particle size; model factors | Use calibrated outlet flow and concentration monitoring or a documented site-specific model; integrate releases after controls, separately by species and source, without subtracting capture twice. Divide each period total by net saleable coal kg from cp_gate_mass for the same period. | kg | Continuous or each batch; reconcile monthly | Declared representative 12-month period, or justified shorter campaign | Same mine/preparation and gate boundary | per 1 kg reference flow | Calibration, raw records, assays, coverage and uncertainty |
| cp_gate_mass | gate | mass | weighing and assay | coal net mass; tare; moisture; ash; grade; fuel or resource role | Calibrated weighbridge or belt scale and representative coal sampling; reconcile output, internal fuel and stocks. Divide each period total by net saleable coal kg from cp_gate_mass for the same period. | kg | Continuous or each batch; reconcile monthly | Declared representative 12-month period, or justified shorter campaign | Same mine/preparation and gate boundary | per 1 kg reference flow | Calibration, raw records, assays, coverage and uncertainty |
| cp_allocation | gate | joint outputs | allocation ledger | grade mass; net calorific value; gas exports; separate meters; joint costs; allocation shares | Document subdivision and justified joint-output basis; test sensitivity to alternatives | kg; MJ | Reporting period | Same reporting period | Entire foreground boundary | Shares sum to unity for jointly allocated burdens; final result per 1 kg reference flow | Product assay, allocation rationale and sensitivity |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | all inventory rows | Divide the attributable reporting-period quantity in its declared unit by net saleable reference-coal mass in kg for the same period. Internal transfers cancel in the integrated package; reference output is 1 kg. | Measured exchange; cp_gate_mass; cp_allocation | Amount per 1 kg reference flow |  |
| methane_accounting | mine_methane; prep_methane | Integrate source-specific flow and methane concentration over time with stated temperature, pressure, moisture and mass conversion. Distinguish measured net releases from gross estimates adjusted for documented recovery; add combustion products separately. | Monitoring; capture/use/flare records | Fossil methane mass to air | ipcc-fugitive-2019 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_coal | saleable_coal | Verify coal rank, quality and net gate mass; identify moisture and calorific bases with each assay. | Weighing and representative coal assays |
| quality_coverage | all inventory rows | Retain positive, zero and missing records distinctly. Quantify uncertainty, monitoring gaps and estimation methods. Neither missing UUID nor absent literature range implies zero exchange. | Collection protocols and uncertainty ledger |
| quality_water | mine_water; prep_water; mine_effluent; prep_effluent | Reconcile fresh supply, mine drainage, reuse, discharge and water retained in output; report discharge loads by pollutant where on-site treatment is modelled. | ifc-mining-2007 |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | saleable_coal | Require all reference qualifiers and exactly 1 kg net reference output at declared moisture. Check EN/ZH inventory identity and denominator agreement. |  |
| validate_balance | all inventory rows | Reconcile coal, water, energy and waste records across the same period. Investigate balance residuals against documented measurement uncertainty rather than an invented universal tolerance. | ifc-mining-2007 |
| validate_emissions | mine_methane; prep_methane; mine_co2; prep_co2 | Reject double counting of gas capture, internal fuels or upstream electricity emissions. Verify atmospheric compartment and fossil origin; do not replace a missing species UUID with another chemical. | ipcc-fugitive-2019 |
| validate_extensions | foreground package | Verify each applicable site exchange, waste treatment and land contribution is included or explicitly justified; publish unresolved identity and range gaps with the dataset. | ifc-mining-2007 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production data package |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Declared mine-gate bituminous coal supply in material and energy supply chains |
| excluded_use | Other coal ranks; coke or electricity production; downstream combustion; universal mining average without route evidence |
| required_metadata | Reference qualifiers, period, region, gate, upstream links, unit conversions, allocation and completeness |
| required_quality_disclosure | Measurement uncertainty, estimates, omitted processes, unresolved identities and range evidence, infrastructure and closure assumptions |
| update_trigger | Change in seam, route, moisture/grade, methane management, energy supply, allocation or new verified measurements |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| epa-coal-cleaning-1995 | official_guidance | US EPA. 11.10 Coal Cleaning. AP-42, November 1995. https://www.epa.gov/sites/default/files/2020-10/documents/c11s10.pdf Retrieved 2026-09-30 | Physical preparation, dust and dryer source collection; pp. 11.10-1–11.10-3; no factors adopted |
| ipcc-fugitive-2019 | official_guidance | IPCC. 2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories. Volume 2, Chapter 4: Fugitive Emissions. https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/2_Volume2/19R_V2_4_Ch04_Fugitive_Emissions.pdf Retrieved 2026-09-30 | Coal seam gas, post-mining releases, recovery and monitoring; sections 4.1.1–4.1.3; no default factors adopted |
| ifc-mining-2007 | official_guidance | World Bank Group. Environmental, Health, and Safety Guidelines for Mining. 10 December 2007. https://www.ifc.org/content/dam/ifc/doc/2000/2007-mining-ehs-guidelines-en.pdf Retrieved 2026-10-01 | Water balance, waste rock, tailings, air and life-cycle scope; pp. 2–6, 12; no numerical limits adopted |
