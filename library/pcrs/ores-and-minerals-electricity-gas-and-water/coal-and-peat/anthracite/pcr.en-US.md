---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.coal-and-peat.anthracite
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
content_maturity: authored_methodology
translation_status: canonical
---

# Anthracite

## 1. Scope and Applicability

This PCR covers production of uncalcined bulk anthracite from primary mines through declared mine or preparation-plant gate. Rank, physical preparation and accepted market grade must be distinguished. It excludes bituminous coal, lignite, peat, briquettes, coke, calcined anthracite, activated carbon and sale of untreated coal refuse. Downstream transport and combustion are separate datasets. `un-ires-2018`.


Classification context: CPC 3.0 leaf 11011 is recorded from the official structure (30 June 2025), https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv; it is classification evidence, not a methodology source. IRES chapter III, SIEC 011, defines anthracite using gross calorific value on a moist, ash-free basis and vitrinite reflectance. Retain the laboratory rank evidence and its basis; the delivered kg reference is not that analytical basis. The exclusions and production gate above are the PCR scope. `un-ires-2018`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.coal-and-peat.anthracite |
| classification_refs | CPC 3.0: 11011 |
| covered_products | Raw or physically prepared bulk anthracite of declared grade |
| excluded_products | Other coal ranks; agglomerated or chemically/thermally transformed products; untreated refuse fuel |
| representative_product | Uncalcined saleable bulk anthracite |
| production_route | Surface or underground extraction; conditional physical preparation; storage and loading |
| market_state | Bulk solid at declared moisture, size and gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply anthracite as a material/fuel input; no useful-heat function claimed |
| How much | 1 kg net accepted anthracite |
| How well | Declared rank analysis, size grade, moisture, ash, sulfur and net calorific value with analytical basis |
| How long or cycle | One supply at the declared production gate |
| reference_flow_link | `anthracite_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | hard coal, anthracite `9ff1d63b-2eab-4f82-969a-71dd1474f0f1` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Mine and plant country/location; reporting year; extraction method; rank evidence; raw/washed state; moisture and ash basis; size; sulfur; net calorific value and basis; gate; water sources; allocation method |

These qualifiers must be disclosed in dataset metadata and reference-flow comments; a missing qualifier makes the reference definition incomplete. As a PCR comparability requirement, mass comparisons require the same moisture and ash basis; record measured moisture for any dry/as-received conversion. IRES distinguishes rank GCV basis and fuel-specific calorific values; `un-ires-2018`.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | `anthracite_output` | Mass | kg | Use calibrated net weighing at declared moisture; exclude transport tare. All exchanges are per 1 kg reference flow using cp_anthracite_output. |
| `energy_units` | Electricity rows | Energy | MJ | Convert metered kWh to MJ using 1 kWh = 3.6 MJ; do not infer coal heating value from mass. |
| `water_basis` | Water rows | Mass or volume | kg; m3 | Preserve row unit. Convert volume-based purchased water to mass only using measured density and temperature; record gross abstraction separately from consumption and recirculation. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | In-situ anthracite for an integrated mine; purchased raw anthracite for a standalone preparation site |
| starting_condition_role | Natural resource or purchased feed respectively |
| product_classification_scope | Anthracite, without using classification to replace rank/state evidence |
| recursive_input_rule | Purchased anthracite is one input with a distinct upstream dataset; never recurse to the same foreground dataset. Internal transfers cancel. |
| upstream_dataset_requirement | Purchased feed must include extraction burdens; link electricity, fuel and material production, plus waste treatment without duplicated activities |
| disclosure | Site route, starting state, gate, foreground/upstream partition and exclusions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_coverage | production | Include extraction where foreground, internal haulage, ventilation, dewatering, applicable preparation, storage/loading, pollution controls and attributable waste treatment. Collect development, closure and rehabilitation burdens attributable to output and disclose their amortization. | `ifc-mining-ehs-2007` |
| boundary_routes | inventory | Omit conditional exchanges only with documented absence. Before dataset completion add separate atomic rows for actual non-diesel dryer fuels, other explosives, flocculants, used oil, overburden, land occupation/transformation and individual water/air pollutants. Do not substitute this minimum route inventory for a site audit. | `ifc-mining-ehs-2007`, `epa-ap42-coal-cleaning-1995` |
| boundary_partition | emissions | Model purchased diesel supply without combustion when direct emissions are foreground. Exclude downstream customer transport/use; report capital equipment exclusions and test materiality. On-site treated water requires separate receiving-compartment discharges and species, not a wastewater emission to nature. | `ifc-mining-ehs-2007` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| mining | Extraction and mine handling | `conditional` | The foreground site extracts primary anthracite; omit only when fully represented by purchased-feed upstream datasets. | Foreground production | per 1 kg reference flow |
| preparation | Physical preparation | `conditional` | Crushing, screening, separation or dewatering occurs before the declared gate. | Foreground production | per 1 kg reference flow |
| dispatch | Storage and dispatch | `required` | Always | Foreground production | per 1 kg reference flow |

### Process: Extraction and mine handling (`mining`)

#### Inputs

##### Product flows

###### Mine electricity (`mine_electricity`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Include ventilation, pumping, cutting and internal haulage meters.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect attributable period quantity with cp_mine_electricity; divide by accepted net anthracite output in kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mine_electricity`
- Sources: `ifc-mining-ehs-2007`

###### Mobile-equipment diesel (`mine_diesel`)

Include if diesel equipment operates; exclude contractor transport already counted in a service dataset.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable period quantity with cp_mine_diesel; divide by accepted net anthracite output in kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mine_diesel`
- Sources: `ifc-mining-ehs-2007`

###### Porous granular ANFO (`mine_anfo`)

Include only when supplier records confirm porous granular ANFO blasting.

- Selected flow: Porous granular ammonium oil explosive `c136e796-f073-46c0-b3c5-5d54ed985fcf`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable period quantity with cp_mine_anfo; divide by accepted net anthracite output in kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mine_anfo`
- Sources: `ifc-mining-ehs-2007`

###### Mineral lubricating oil (`mine_oil`)

Include when mineral lubricating oil is consumed by mining equipment.

- Selected flow: lubricating oil `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable period quantity with cp_mine_oil; divide by accepted net anthracite output in kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mine_oil`
- Sources: `ifc-mining-ehs-2007`

##### Elementary flows

###### River-water abstraction (`mine_river_water`)

Include only direct river abstraction; purchased water is an upstream product exchange.

- Selected flow: river water `805a7346-1664-4483-afe3-4b224be5e361`
- Flow property / unit: Volume / m3
- Amount rule: Collect attributable period quantity with cp_mine_river_water; divide by accepted net anthracite output in kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mine_river_water`
- Sources: `ifc-mining-ehs-2007`

###### Groundwater abstraction (`mine_groundwater`)

Include direct groundwater abstraction and separately identify pumped mine water; do not treat all pumping as consumption.

- Selected flow: ground water `4f462198-40cd-4184-8733-86648a20dc3f`
- Flow property / unit: Volume / m3
- Amount rule: Collect attributable period quantity with cp_mine_groundwater; divide by accepted net anthracite output in kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mine_groundwater`
- Sources: `ifc-mining-ehs-2007`

###### Anthracite resource extraction (`coal_resource`)

Record in-situ anthracite removed, excluding overburden; reconcile mineral matter and moisture basis.

- Selected flow: Anthracite, in ground
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable period quantity with cp_coal_resource; divide by accepted net anthracite output in kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coal_resource`
- Sources: `ifc-mining-ehs-2007`

#### Outputs

##### Waste flows

###### Mining coal gangue (`mine_gangue`)

Include separated coal gangue transferred to waste management; record destination and wet mass.

- Selected flow: Coal gangue `a5fa448c-4a0f-4ead-b9b3-8bd843d346b9`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable period quantity with cp_mine_gangue; divide by accepted net anthracite output in kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mine_gangue`
- Sources: `ifc-mining-ehs-2007`

##### Elementary flows

###### Fugitive mine methane (`mine_methane`)

Record net fossil methane released after capture or oxidation, to unspecified air; captured gas is not an emission.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable period quantity with cp_mine_methane; divide by accepted net anthracite output in kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mine_methane`
- Sources: `ifc-mining-ehs-2007`

###### On-site combustion CO2 (`mine_co2`)

Include measured or validated fuel-carbon-accounted fossil CO2 from site combustion; purchased fuel supply excludes combustion.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable period quantity with cp_mine_co2; divide by accepted net anthracite output in kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mine_co2`
- Sources: `ifc-mining-ehs-2007`

###### Fugitive PM10 (`mine_pm10`)

Record PM10 to unspecified air from mine operations after controls; do not combine with overlapping particle-size totals.

- Selected flow: PM10, emission to unspecified air
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable period quantity with cp_mine_pm10; divide by accepted net anthracite output in kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mine_pm10`
- Sources: `ifc-mining-ehs-2007`

### Process: Physical preparation (`preparation`)

#### Inputs

##### Product flows

###### Preparation feed anthracite (`prep_feed`)

Include only purchased raw anthracite at a standalone preparation site; supplier extraction and raw-state dataset must be compatible. Record internal transfers in mass-balance records, not as external exchanges.

- Selected flow: hard coal, anthracite `9ff1d63b-2eab-4f82-969a-71dd1474f0f1`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable period quantity with cp_prep_feed; divide by accepted net anthracite output in kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_feed`
- Sources: `epa-ap42-coal-cleaning-1995`

###### Preparation electricity (`prep_electricity`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Include crushing, screening, separation and mechanical dewatering electricity.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect attributable period quantity with cp_prep_electricity; divide by accepted net anthracite output in kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_electricity`
- Sources: `epa-ap42-coal-cleaning-1995`

###### Purchased process water (`prep_water`)

Include externally supplied make-up water for wet preparation or dust control; exclude internal recirculation.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable period quantity with cp_prep_water; divide by accepted net anthracite output in kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_water`
- Sources: `epa-ap42-coal-cleaning-1995`

###### Magnetite make-up (`prep_magnetite`)

Include only when dense-medium separation uses magnetite; supplier invoices must identify Fe3O4 and replenishment losses.

- Selected flow: Magnetite (Fe3O4)
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable period quantity with cp_prep_magnetite; divide by accepted net anthracite output in kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_magnetite`
- Sources: `epa-ap42-coal-cleaning-1995`

###### Dryer diesel (`prep_diesel`)

Include only a diesel-fired thermal dryer; mechanical dewatering alone does not imply a fuel input.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable period quantity with cp_prep_diesel; divide by accepted net anthracite output in kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_diesel`
- Sources: `epa-ap42-coal-cleaning-1995`

#### Outputs

##### Waste flows

###### Coarse coal gangue (`prep_gangue`)

Record coarse mineral coal gangue reject separately from fine sludge.

- Selected flow: Coal gangue `a5fa448c-4a0f-4ead-b9b3-8bd843d346b9`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable period quantity with cp_prep_gangue; divide by accepted net anthracite output in kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_gangue`
- Sources: `epa-ap42-coal-cleaning-1995`

###### Coal-washing fine sludge (`prep_sludge`)

Include fine coal-washing sludge exported for disposal; collect solids fraction and moisture, distinct from saleable coal fines.

- Selected flow: Coal-washing fine sludge
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable period quantity with cp_prep_sludge; divide by accepted net anthracite output in kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_sludge`
- Sources: `epa-ap42-coal-cleaning-1995`

###### Untreated coal-washing effluent (`prep_effluent`)

Include this single aqueous effluent stream only when transferred to external treatment; collect solids and pollutant composition.

- Selected flow: Untreated coal-washing effluent
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable period quantity with cp_prep_effluent; divide by accepted net anthracite output in kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_effluent`
- Sources: `epa-ap42-coal-cleaning-1995`

##### Elementary flows

###### Dryer fossil CO2 (`prep_co2`)

Include only on-site fuel combustion; do not duplicate a combustion process dataset.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable period quantity with cp_prep_co2; divide by accepted net anthracite output in kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_co2`
- Sources: `epa-ap42-coal-cleaning-1995`

###### Preparation PM10 (`prep_pm10`)

Record handling, crushing and dryer PM10 to unspecified air after controls; identify emission points.

- Selected flow: PM10, emission to unspecified air
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable period quantity with cp_prep_pm10; divide by accepted net anthracite output in kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prep_pm10`
- Sources: `epa-ap42-coal-cleaning-1995`

### Process: Storage and dispatch (`dispatch`)

#### Inputs

##### Product flows

###### Storage and loading electricity (`gate_electricity`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Meter attributable storage, conveyors and loading electricity.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect attributable period quantity with cp_gate_electricity; divide by accepted net anthracite output in kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gate_electricity`
- Sources: `ifc-mining-ehs-2007`

#### Outputs

##### Product flows

###### Accepted anthracite reference product (`anthracite_output`)

Exactly 1 kg accepted net bulk product at the production gate, at declared moisture and grade.

- Selected flow: hard coal, anthracite `9ff1d63b-2eab-4f82-969a-71dd1474f0f1`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_anthracite_output`
- Sources: `ifc-mining-ehs-2007`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | shared_processes | Prefer subdivision with submetered activities before allocation. For this attributional supply dataset, do not net avoided-product credits into the reference inventory; any system-expansion comparison is separate and disclosed. | `ghg-product-standard-2011` |
| allocation_physical | saleable_outputs | When subdivision cannot separate jointly produced grades, justify a causal physical allocation driver. Use same-basis saleable mass only when comparable grade/state demonstrates that mass tracks burdens; test an energy/value alternative for materially different grades. | `ghg-product-standard-2011` |
| allocation_waste | gangue_and_sludge | Do not allocate product burdens to wastes without economic value; include attributable treatment. If gangue, fines or captured methane are actually sold, collect quantities and gate values, reclassify as co-products and justify physical or, if unsupported, economic allocation consistently. | `ghg-product-standard-2011` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mine_electricity` | `mining` | `mine_electricity` | Primary activity record | period; site; row quantity; unit; grade/composition; opening/closing stock; accepted net anthracite output; allocation share; route condition | Read calibrated electricity submeter and invoices; retain kWh readings, voltage and 3.6 MJ/kWh conversion. | MJ | Each delivery/meter interval; aggregate reporting period | Representative complete year or documented campaign including seasonal variation | Declared mine/plant and gate | per 1 kg reference flow | Calibration, invoices, laboratory reports, stock reconciliation and allocation worksheet |
| `cp_mine_diesel` | `mining` | `mine_diesel` | Primary activity record | period; site; row quantity; unit; grade/composition; opening/closing stock; accepted net anthracite output; allocation share; route condition | Calibrated weighbridge/scale or traceable inventory records; reconcile opening, receipts, transfers and closing stock. | kg | Each delivery/meter interval; aggregate reporting period | Representative complete year or documented campaign including seasonal variation | Declared mine/plant and gate | per 1 kg reference flow | Calibration, invoices, laboratory reports, stock reconciliation and allocation worksheet |
| `cp_mine_anfo` | `mining` | `mine_anfo` | Primary activity record | period; site; row quantity; unit; grade/composition; opening/closing stock; accepted net anthracite output; allocation share; route condition | Calibrated weighbridge/scale or traceable inventory records; reconcile opening, receipts, transfers and closing stock. | kg | Each delivery/meter interval; aggregate reporting period | Representative complete year or documented campaign including seasonal variation | Declared mine/plant and gate | per 1 kg reference flow | Calibration, invoices, laboratory reports, stock reconciliation and allocation worksheet |
| `cp_mine_oil` | `mining` | `mine_oil` | Primary activity record | period; site; row quantity; unit; grade/composition; opening/closing stock; accepted net anthracite output; allocation share; route condition | Calibrated weighbridge/scale or traceable inventory records; reconcile opening, receipts, transfers and closing stock. | kg | Each delivery/meter interval; aggregate reporting period | Representative complete year or documented campaign including seasonal variation | Declared mine/plant and gate | per 1 kg reference flow | Calibration, invoices, laboratory reports, stock reconciliation and allocation worksheet |
| `cp_mine_river_water` | `mining` | `mine_river_water` | Primary activity record | period; site; row quantity; unit; grade/composition; opening/closing stock; accepted net anthracite output; allocation share; route condition | Read abstraction meter and source records; distinguish dewatering and consumed water. | m3 | Each delivery/meter interval; aggregate reporting period | Representative complete year or documented campaign including seasonal variation | Declared mine/plant and gate | per 1 kg reference flow | Calibration, invoices, laboratory reports, stock reconciliation and allocation worksheet |
| `cp_mine_groundwater` | `mining` | `mine_groundwater` | Primary activity record | period; site; row quantity; unit; grade/composition; opening/closing stock; accepted net anthracite output; allocation share; route condition | Read abstraction meter and source records; distinguish dewatering and consumed water. | m3 | Each delivery/meter interval; aggregate reporting period | Representative complete year or documented campaign including seasonal variation | Declared mine/plant and gate | per 1 kg reference flow | Calibration, invoices, laboratory reports, stock reconciliation and allocation worksheet |
| `cp_coal_resource` | `mining` | `coal_resource` | Primary activity record | period; site; row quantity; unit; grade/composition; opening/closing stock; accepted net anthracite output; allocation share; route condition | Reconcile geological extraction surveys, coal-only tonnage, loss records and moisture/mineral-matter basis. | kg | Each delivery/meter interval; aggregate reporting period | Representative complete year or documented campaign including seasonal variation | Declared mine/plant and gate | per 1 kg reference flow | Calibration, invoices, laboratory reports, stock reconciliation and allocation worksheet |
| `cp_mine_gangue` | `mining` | `mine_gangue` | Primary activity record | period; site; row quantity; unit; grade/composition; opening/closing stock; accepted net anthracite output; allocation share; route condition | Calibrated weighbridge/scale or traceable inventory records; reconcile opening, receipts, transfers and closing stock. | kg | Each delivery/meter interval; aggregate reporting period | Representative complete year or documented campaign including seasonal variation | Declared mine/plant and gate | per 1 kg reference flow | Calibration, invoices, laboratory reports, stock reconciliation and allocation worksheet |
| `cp_mine_methane` | `mining` | `mine_methane` | Primary activity record | period; site; row quantity; unit; grade/composition; opening/closing stock; accepted net anthracite output; allocation share; route condition | Use site monitoring with flow, concentration and operating duration; retain validated species-specific method when direct continuous measurement is unavailable. | kg | Each delivery/meter interval; aggregate reporting period | Representative complete year or documented campaign including seasonal variation | Declared mine/plant and gate | per 1 kg reference flow | Calibration, invoices, laboratory reports, stock reconciliation and allocation worksheet |
| `cp_mine_co2` | `mining` | `mine_co2` | Primary activity record | period; site; row quantity; unit; grade/composition; opening/closing stock; accepted net anthracite output; allocation share; route condition | Use site monitoring with flow, concentration and operating duration; retain validated species-specific method when direct continuous measurement is unavailable. | kg | Each delivery/meter interval; aggregate reporting period | Representative complete year or documented campaign including seasonal variation | Declared mine/plant and gate | per 1 kg reference flow | Calibration, invoices, laboratory reports, stock reconciliation and allocation worksheet |
| `cp_mine_pm10` | `mining` | `mine_pm10` | Primary activity record | period; site; row quantity; unit; grade/composition; opening/closing stock; accepted net anthracite output; allocation share; route condition | Use site monitoring with flow, concentration and operating duration; retain validated species-specific method when direct continuous measurement is unavailable. | kg | Each delivery/meter interval; aggregate reporting period | Representative complete year or documented campaign including seasonal variation | Declared mine/plant and gate | per 1 kg reference flow | Calibration, invoices, laboratory reports, stock reconciliation and allocation worksheet |
| `cp_prep_feed` | `preparation` | `prep_feed` | Primary activity record | period; site; row quantity; unit; grade/composition; opening/closing stock; accepted net anthracite output; allocation share; route condition | Calibrated weighbridge/scale or traceable inventory records; reconcile opening, receipts, transfers and closing stock. | kg | Each delivery/meter interval; aggregate reporting period | Representative complete year or documented campaign including seasonal variation | Declared mine/plant and gate | per 1 kg reference flow | Calibration, invoices, laboratory reports, stock reconciliation and allocation worksheet |
| `cp_prep_electricity` | `preparation` | `prep_electricity` | Primary activity record | period; site; row quantity; unit; grade/composition; opening/closing stock; accepted net anthracite output; allocation share; route condition | Read calibrated electricity submeter and invoices; retain kWh readings, voltage and 3.6 MJ/kWh conversion. | MJ | Each delivery/meter interval; aggregate reporting period | Representative complete year or documented campaign including seasonal variation | Declared mine/plant and gate | per 1 kg reference flow | Calibration, invoices, laboratory reports, stock reconciliation and allocation worksheet |
| `cp_prep_water` | `preparation` | `prep_water` | Primary activity record | period; site; row quantity; unit; grade/composition; opening/closing stock; accepted net anthracite output; allocation share; route condition | Calibrated weighbridge/scale or traceable inventory records; reconcile opening, receipts, transfers and closing stock. | kg | Each delivery/meter interval; aggregate reporting period | Representative complete year or documented campaign including seasonal variation | Declared mine/plant and gate | per 1 kg reference flow | Calibration, invoices, laboratory reports, stock reconciliation and allocation worksheet |
| `cp_prep_magnetite` | `preparation` | `prep_magnetite` | Primary activity record | period; site; row quantity; unit; grade/composition; opening/closing stock; accepted net anthracite output; allocation share; route condition | Calibrated weighbridge/scale or traceable inventory records; reconcile opening, receipts, transfers and closing stock. | kg | Each delivery/meter interval; aggregate reporting period | Representative complete year or documented campaign including seasonal variation | Declared mine/plant and gate | per 1 kg reference flow | Calibration, invoices, laboratory reports, stock reconciliation and allocation worksheet |
| `cp_prep_diesel` | `preparation` | `prep_diesel` | Primary activity record | period; site; row quantity; unit; grade/composition; opening/closing stock; accepted net anthracite output; allocation share; route condition | Calibrated weighbridge/scale or traceable inventory records; reconcile opening, receipts, transfers and closing stock. | kg | Each delivery/meter interval; aggregate reporting period | Representative complete year or documented campaign including seasonal variation | Declared mine/plant and gate | per 1 kg reference flow | Calibration, invoices, laboratory reports, stock reconciliation and allocation worksheet |
| `cp_prep_gangue` | `preparation` | `prep_gangue` | Primary activity record | period; site; row quantity; unit; grade/composition; opening/closing stock; accepted net anthracite output; allocation share; route condition | Calibrated weighbridge/scale or traceable inventory records; reconcile opening, receipts, transfers and closing stock. | kg | Each delivery/meter interval; aggregate reporting period | Representative complete year or documented campaign including seasonal variation | Declared mine/plant and gate | per 1 kg reference flow | Calibration, invoices, laboratory reports, stock reconciliation and allocation worksheet |
| `cp_prep_sludge` | `preparation` | `prep_sludge` | Primary activity record | period; site; row quantity; unit; grade/composition; opening/closing stock; accepted net anthracite output; allocation share; route condition | Calibrated weighbridge/scale or traceable inventory records; reconcile opening, receipts, transfers and closing stock. | kg | Each delivery/meter interval; aggregate reporting period | Representative complete year or documented campaign including seasonal variation | Declared mine/plant and gate | per 1 kg reference flow | Calibration, invoices, laboratory reports, stock reconciliation and allocation worksheet |
| `cp_prep_effluent` | `preparation` | `prep_effluent` | Primary activity record | period; site; row quantity; unit; grade/composition; opening/closing stock; accepted net anthracite output; allocation share; route condition | Calibrated weighbridge/scale or traceable inventory records; reconcile opening, receipts, transfers and closing stock. | kg | Each delivery/meter interval; aggregate reporting period | Representative complete year or documented campaign including seasonal variation | Declared mine/plant and gate | per 1 kg reference flow | Calibration, invoices, laboratory reports, stock reconciliation and allocation worksheet |
| `cp_prep_co2` | `preparation` | `prep_co2` | Primary activity record | period; site; row quantity; unit; grade/composition; opening/closing stock; accepted net anthracite output; allocation share; route condition | Use site monitoring with flow, concentration and operating duration; retain validated species-specific method when direct continuous measurement is unavailable. | kg | Each delivery/meter interval; aggregate reporting period | Representative complete year or documented campaign including seasonal variation | Declared mine/plant and gate | per 1 kg reference flow | Calibration, invoices, laboratory reports, stock reconciliation and allocation worksheet |
| `cp_prep_pm10` | `preparation` | `prep_pm10` | Primary activity record | period; site; row quantity; unit; grade/composition; opening/closing stock; accepted net anthracite output; allocation share; route condition | Use site monitoring with flow, concentration and operating duration; retain validated species-specific method when direct continuous measurement is unavailable. | kg | Each delivery/meter interval; aggregate reporting period | Representative complete year or documented campaign including seasonal variation | Declared mine/plant and gate | per 1 kg reference flow | Calibration, invoices, laboratory reports, stock reconciliation and allocation worksheet |
| `cp_gate_electricity` | `dispatch` | `gate_electricity` | Primary activity record | period; site; row quantity; unit; grade/composition; opening/closing stock; accepted net anthracite output; allocation share; route condition | Read calibrated electricity submeter and invoices; retain kWh readings, voltage and 3.6 MJ/kWh conversion. | MJ | Each delivery/meter interval; aggregate reporting period | Representative complete year or documented campaign including seasonal variation | Declared mine/plant and gate | per 1 kg reference flow | Calibration, invoices, laboratory reports, stock reconciliation and allocation worksheet |
| `cp_anthracite_output` | `dispatch` | `anthracite_output` | Primary activity record | period; site; row quantity; unit; grade/composition; opening/closing stock; accepted net anthracite output; allocation share; route condition | Calibrated weighbridge/scale or traceable inventory records; reconcile opening, receipts, transfers and closing stock. | kg | Each delivery/meter interval; aggregate reporting period | Representative complete year or documented campaign including seasonal variation | Declared mine/plant and gate | per 1 kg reference flow | Calibration, invoices, laboratory reports, stock reconciliation and allocation worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `period_normalization` | all inventory rows | Divide attributable reporting-period exchange by accepted net anthracite output in kg; internal transfer pairs use identical measured quantity and cancel on consolidation. | row-specific cp records; cp_anthracite_output; allocation worksheet | Exchange per 1 kg reference flow | `ghg-product-standard-2011` |
| `electricity_conversion` | electricity rows | Convert kWh readings to MJ by multiplying by 3.6 before period normalization. | kWh | MJ | `un-ires-2018` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| rank_state | `anthracite_output` | Verify anthracite rank, raw/washed status and same analytical basis; mass is not useful energy. | `un-ires-2018` |
| completeness | all inventory rows | Perform site exchange audit, waste fate and water/coal balances; distinguish measured zero, absent route and missing observation. | `ifc-mining-ehs-2007`; cp records |
| representativeness | dataset | Use matched production and exchange periods; disclose location, uncertainty, substitution and unmeasured closure burdens. No default industry range replaces collection. | cp records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | reference_flow | Verify net 1 kg output, all qualifiers, kg/MJ/m3 units and denominator consistency; compare dry and as-received values only after measured-moisture conversion. | `un-ires-2018` |
| validate_balance | inventory | Reconcile feed, saleable grades, rejects, moisture changes, stocks and transfers. Identify missing emissions and waste treatment, and ensure no duplicate resource, fuel combustion or internal transfers. | `ifc-mining-ehs-2007` |
| validate_evidence | dataset | Every nonzero exchange needs a compatible upstream dataset or direct emission/waste fate, collection evidence and reviewed identity. Keep unresolved identities and missing ranges explicit; do not publish a proxy as verified or impute zero from missing records. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Supply of declared grade and route anthracite to downstream LCA |
| excluded_use | Customer useful heat, other coal ranks or transformed carbon products without additional modelling |
| required_metadata | Reference qualifiers; site/year; boundary; route; source datasets; allocation; collection coverage |
| required_quality_disclosure | Identity gaps; missing measurements/ranges; uncertainty; route absences; closure/capital coverage |
| update_trigger | Changed mine/grade/route, moisture basis, energy supply, allocation or material monitoring results |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-ires-2018` | `official_guidance` | International Recommendations for Energy Statistics, United Nations, 2018, chapter III SIEC 011 (p. 27); chapter IV paragraphs 4.21–4.24 and 4.33–4.38 (pp. 44–47). https://unstats.un.org/unsd/energystats/methodology/documents/IRES-web.pdf. Retrieved 2026-10-01. | Anthracite rank and analytical basis; energy units and fuel-specific calorific values. PCR mass comparability and declared raw/washed state are authoring requirements; no default calorific-value range adopted |
| `epa-ap42-coal-cleaning-1995` | `official_guidance` | 11.10 Coal Cleaning, EPA AP-42, November 1995. https://www.epa.gov/sites/default/files/2020-10/documents/c11s10.pdf. Retrieved 2026-09-30. | Physical preparation and dust collection; no default factors adopted |
| `ifc-mining-ehs-2007` | `official_guidance` | Environmental, Health, and Safety Guidelines, IFC, Mining, 10 December 2007. https://www.ifc.org/content/dam/ifc/doc/2000/2007-mining-ehs-guidelines-en.pdf. Retrieved 2026-09-30. | Mining water, waste and lifecycle coverage; no numeric limits adopted |
| `ghg-product-standard-2011` | `standard` | Product Life Cycle Accounting and Reporting Standard, WRI/WBCSD, 2011, chapter 9. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf. Retrieved 2026-09-30. | Allocation hierarchy as a method reference, not a complete LCA impact method |
