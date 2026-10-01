---
status: candidate
content_maturity: authored_methodology
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.coal-and-peat.sub-bituminous-coal
language: en-US
sync_with: pcr.zh-CN.md
---

# Sub-bituminous coal

## 1. Scope and Applicability

This PCR defines a foreground data package for mined, unagglomerated sub-bituminous coal at the mine gate, including physical preparation and mechanical dewatering where performed. Rank identification, as-received moisture, mine route and product quality are essential: a thermal-coal label alone does not establish this category. The rank lies between lignite and bituminous coal (`eia-coal-glossary`); the official classification distinguishes all three (`un-cpc-3-2025`).

Coal rank and moisture affect resource accounting, gas release, conditioning losses and downstream energy conversion, creating a material methodology need beyond a classification title. This mass-based gate unit is a declared product unit, not a claim that all coals deliver equivalent useful heat. It excludes lignite, bituminous coal, anthracite, peat, manufactured briquettes, coke, coal conversion, deliberate thermal upgrading and coal combustion by the consumer.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.coal-and-peat.sub-bituminous-coal |
| classification_refs | CPC 3.0: 11031; `un-cpc-3-2025` |
| covered_products | Mined sub-bituminous coal; crushed/screened or physically cleaned and mechanically dewatered coal of the same rank |
| excluded_products | Lignite; bituminous coal; anthracite; peat; briquettes; coke; thermally upgraded coal; power and heat |
| representative_product | Bulk saleable sub-bituminous coal, as received at mine gate |
| production_route | Surface or underground mining; conditional physical cleaning; crushing, screening, storage and loading |
| market_state | Unagglomerated bulk coal at declared moisture and particle-size specification |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply saleable sub-bituminous coal for subsequent fuel use |
| How much | 1 kg net product at the mine gate |
| How well | Declared sub-bituminous rank, measured as-received moisture, ash, sulfur, net calorific value and particle-size distribution; no generic rank inferred from calorific value alone |
| How long or cycle | One declared production reporting period with corresponding storage duration before release |
| reference_flow_link | saleable_coal |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Sub-bituminous coal `a3573912-328b-402e-8f64-f39e34a6a00c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Mine and seam; country and basin; reporting period; rank determination method; mining route; preparation route; gate location; as-received moisture and sampling basis; ash and sulfur bases; measured net calorific value and basis; size specification; storage duration; allocation; land and closure scenario |

Declare every required qualifier in the dataset metadata or equivalent product/reference-flow description; missing qualifiers leave the product unit incomplete. The Chinese term 次烟煤 is also used in the official IPCC Chinese energy chapter (`ipcc-energy-zh-2000`).

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | Use 1 kg net as-received saleable coal; exclude transport packaging and adjust dispatch mass for saleable stock changes using cp_coal. |
| moisture_basis | coal_resource; saleable_coal; conditioning_gangue | Mass | kg | Record paired mass and moisture samples; dry mass equals wet mass multiplied by one minus measured moisture mass fraction. Do not mix dry and as-received denominators (`eia-coal-glossary`). |
| electricity_units | electricity rows | Net calorific value | MJ | The selected database property represents energy in MJ; convert metered kWh to MJ by multiplying by 3.6. This unit identity does not imply electricity has a combustible fuel composition. |
| fuel_mass | mine_diesel | Mass | kg | Convert volume-based diesel records using the measured or supplier-certified density at the recorded temperature; no assumed universal density. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Coal seam in situ at the identified mine; externally supplied inputs at their physical entry points |
| starting_condition_role | Natural resource origin for extraction; technosphere entry for purchased inputs |
| product_classification_scope | Sub-bituminous rank only, independently verified before applying CPC 11031 |
| recursive_input_rule | Record externally purchased same-category coal once with its upstream supplier dataset; internal coal recirculation is not a new extraction input |
| upstream_dataset_requirement | Link electricity, diesel, explosives, lubricant, water supply and waste treatment to compatible background datasets; disclose missing coverage |
| disclosure | Mine boundary, preparation location, stock period, transfers, upstream links, excluded activities, land coverage and closure horizon |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_production` | foreground | Include seam access, topsoil/overburden operations, extraction, internal haulage, ventilation/dewatering, physical preparation, storage, dust control and loading through the declared mine gate. | `epa-surface-coal-1998` |
| `boundary_reclamation` | mine | Include attributable progressive reclamation and a disclosed closure/aftercare scenario; retain land cover before and after mining, occupied area and duration. Inventory all actual site-specific transformation-from and rehabilitation exchanges separately. | `ifc-mining-2007` |
| `boundary_gases` | mine; handling | Distinguish seam-gas release, mining and post-mining emissions, recovery and destruction. Include attributable oxidation, fires and closure emissions where relevant; a low-rank coal designation is not proof of zero methane. | `ipcc-coal-fugitives-2019` |
| `boundary_links` | background | Include upstream supplies and subsequent management of foreground wastes through linked datasets. Do not count on-site combustion twice through a fuel-supply dataset that already includes use. Capital equipment and infrastructure require a separately disclosed inclusion/cut-off assessment. | `ghgp-product-2011` |
| `boundary_exclusions` | downstream | Exclude consumer transport beyond the declared gate and consumer combustion; model them separately. Document any off-site preparation included before the gate. Thermal upgrading requires an extended reviewed inventory. | `eia-coal-mining` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| mine | Mining and attributable site management | required |  | foreground extraction | per 1 kg reference flow |
| conditioning | Physical cleaning and mechanical dewatering | conditional | Coal is physically cleaned before sale; wet operations apply only where documented | foreground conditioning | per 1 kg reference flow |
| handling | Crushing, screening, storage and gate loading | required |  | foreground release | 1 kg saleable coal |

These cards describe external exchanges of a consolidated mine-gate system. Run-of-mine coal transfers and recycled process water are internal ledgers, not duplicate elementary inputs. Allocate shared meters once. Conditional cards require an explicit applicability record; absence must be demonstrated rather than filled with a guessed zero. Extend the foreground dataset with separate atomic exchanges for any additional actual explosive formulation, cleaning reagent, discharged pollutant, land-cover transition or recovered gas product.

### Process: Mining and attributable site management (`mine`)

#### Inputs

##### Product flows

###### Diesel fuel (`mine_diesel`)

Measure diesel consumed by mining, haulage, dewatering and attributable reclamation equipment; report per 1 kg reference flow.

Inclusion condition: Diesel-powered equipment operates.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure diesel consumed by mining, haulage, dewatering and attributable reclamation equipment; report per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_diesel`
- Sources: `ifc-mining-2007`

###### Alternating current (`mine_electricity`)

Meter imported electricity for excavation, pumps and ventilation; report per 1 kg reference flow.

- Selected flow: Alternating current `65ec3424-071f-42ab-8800-810364539813`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Meter imported electricity for excavation, pumps and ventilation; report per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mine_power`
- Sources: `ifc-mining-2007`

###### Porous granular ammonium oil explosive (`mine_anfo`)

Reconcile porous granular ANFO issued, returned and consumed by blast; report per 1 kg reference flow.

Inclusion condition: Blasting uses porous granular ANFO of this specification.

- Selected flow: Porous granular ammonium oil explosive `c136e796-f073-46c0-b3c5-5d54ed985fcf`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reconcile porous granular ANFO issued, returned and consumed by blast; report per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `epa-surface-coal-1998`

###### lubricating oil (`mine_lubricant`)

Reconcile mineral lubricating oil consumption and stock movements; report per 1 kg reference flow.

- Selected flow: lubricating oil `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reconcile mineral lubricating oil consumption and stock movements; report per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `ifc-mining-2007`

###### Process Water (`mine_water`)

Measure externally supplied process-water mass for dust control; exclude internal recirculation; report per 1 kg reference flow.

Inclusion condition: Process water is purchased.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure externally supplied process-water mass for dust control; exclude internal recirculation; report per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `ifc-mining-2007`

##### Elementary flows

###### river water (`mine_river_water`)

Meter river abstraction for mining and dust control; report per 1 kg reference flow.

Inclusion condition: The mine directly abstracts river water.

- Selected flow: river water `805a7346-1664-4483-afe3-4b224be5e361`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Meter river abstraction for mining and dust control; report per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `ifc-mining-2007`

###### ground water (`mine_groundwater`)

Meter groundwater abstraction and mine dewatering separately; report water returned and consumed; report per 1 kg reference flow.

Inclusion condition: Groundwater abstraction or dewatering occurs.

- Selected flow: ground water `4f462198-40cd-4184-8733-86648a20dc3f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Meter groundwater abstraction and mine dewatering separately; report water returned and consumed; report per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `ifc-mining-2007`

###### Sub-bituminous coal in ground (`coal_resource`)

Record extracted coal resource mass on the declared moisture and mineral-matter basis, reconciled with run-of-mine coal, losses and saleable coal; report per 1 kg reference flow.

- Selected flow: Sub-bituminous coal in ground
- Flow property / unit: Mass / kg
- Amount rule: Record extracted coal resource mass on the declared moisture and mineral-matter basis, reconciled with run-of-mine coal, losses and saleable coal; report per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coal`
- Sources: `eia-coal-mining`

###### mineral extraction site (`mine_land_occupation`)

Measure occupied mine area integrated over time and attribute the production share using cp_land; report per 1 kg reference flow.

- Selected flow: mineral extraction site `b0744c5e-9859-470f-99dc-b117be5a32c5`
- Flow property / unit: Area*Time `93a60a56-a3c8-21da-a746-0800200c9a66` / m2*a
- Amount rule: Measure occupied mine area integrated over time and attribute the production share using cp_land; report per 1 kg reference flow.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_land`
- Sources: `ifc-mining-2007`

###### to mineral extraction site (`mine_land_transformation`)

Survey newly transformed mine area and attribute the production share using cp_land; report per 1 kg reference flow.

Inclusion condition: New land is converted for the represented mine.

- Selected flow: to mineral extraction site `68f57e2a-2909-423c-ad8e-6a695f59a48f`
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: Survey newly transformed mine area and attribute the production share using cp_land; report per 1 kg reference flow.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_land`
- Sources: `ifc-mining-2007`

#### Outputs

##### Waste flows

###### Coal-mine overburden waste rock (`mine_overburden`)

Measure overburden transferred to the spoil-management boundary, excluding separately retained topsoil; report per 1 kg reference flow.

Inclusion condition: Overburden waste rock crosses the mine-operation boundary.

- Selected flow: Coal-mine overburden waste rock
- Flow property / unit: Mass / kg
- Amount rule: Measure overburden transferred to the spoil-management boundary, excluding separately retained topsoil; report per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastes`
- Sources: `ifc-mining-2007`

###### Used lubricating oil (`mine_used_oil`)

Weigh segregated used lubricating oil sent to recovery or treatment; report per 1 kg reference flow.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh segregated used lubricating oil sent to recovery or treatment; report per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastes`
- Sources: `ifc-mining-2007`

###### Coal-mine drainage water for treatment (`mine_drainage`)

Record separately collected mine-drainage mass, suspended solids, acidity and dissolved constituents at transfer to treatment; report per 1 kg reference flow.

Inclusion condition: Drainage is transferred to a distinct treatment process.

- Selected flow: Coal-mine drainage water for treatment
- Flow property / unit: Mass / kg
- Amount rule: Record separately collected mine-drainage mass, suspended solids, acidity and dissolved constituents at transfer to treatment; report per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastes`
- Sources: `ifc-mining-2007`

##### Elementary flows

###### methane (fossil) (`mine_methane`)

Record emitted seam methane by measured vent flow and concentration or a disclosed basin-specific model; distinguish recovered, destroyed and leaked gas; report per 1 kg reference flow.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record emitted seam methane by measured vent flow and concentration or a disclosed basin-specific model; distinguish recovered, destroyed and leaked gas; report per 1 kg reference flow.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mine_gas`
- Sources: `ipcc-coal-fugitives-2019`

###### carbon dioxide (fossil) (`mine_carbon_dioxide`)

Account separately for engine combustion, seam gas and attributable oxidation or flaring, then sum current-air fossil CO2 without duplicate background combustion; report per 1 kg reference flow.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Account separately for engine combustion, seam gas and attributable oxidation or flaring, then sum current-air fossil CO2 without duplicate background combustion; report per 1 kg reference flow.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mine_gas`
- Sources: `ipcc-coal-fugitives-2019`

###### Nitrogen oxides to outdoor air, expressed as NO2 (`mine_nitrogen_oxides`)

Use engine/blast tests or explicitly applicable source-specific factors with activity and controls; keep NOx reporting basis; report per 1 kg reference flow.

- Selected flow: Nitrogen oxides to outdoor air, expressed as NO2
- Flow property / unit: Mass / kg
- Amount rule: Use engine/blast tests or explicitly applicable source-specific factors with activity and controls; keep NOx reporting basis; report per 1 kg reference flow.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion`
- Sources: `ifc-mining-2007`

###### Sulfur dioxide to outdoor air (`mine_sulfur_dioxide`)

Use engine tests or documented fuel-sulfur combustion accounting; do not substitute total sulfur oxides; report per 1 kg reference flow.

- Selected flow: Sulfur dioxide to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Use engine tests or documented fuel-sulfur combustion accounting; do not substitute total sulfur oxides; report per 1 kg reference flow.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion`
- Sources: `ifc-mining-2007`

###### particles (PM2.5) (`mine_fine_particles`)

Estimate the stated particle-size fraction from measured source activity and applicable controlled dust/engine models; report per 1 kg reference flow.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Estimate the stated particle-size fraction from measured source activity and applicable controlled dust/engine models; report per 1 kg reference flow.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mine_dust`
- Sources: `epa-surface-coal-1998`

###### particles (PM2.5 - PM10) (`mine_coarse_particles`)

Estimate the stated particle-size fraction from measured source activity and applicable controlled dust/engine models; report per 1 kg reference flow.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Estimate the stated particle-size fraction from measured source activity and applicable controlled dust/engine models; report per 1 kg reference flow.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mine_dust`
- Sources: `epa-surface-coal-1998`

### Process: Physical cleaning and mechanical dewatering (`conditioning`)

#### Inputs

##### Product flows

###### Alternating current (`conditioning_electricity`)

Meter cleaning and mechanical dewatering electricity without duplicating the mine meter; report per 1 kg reference flow.

- Selected flow: Alternating current `65ec3424-071f-42ab-8800-810364539813`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Meter cleaning and mechanical dewatering electricity without duplicating the mine meter; report per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_power`
- Sources: `epa-coal-cleaning-1995`

###### Process Water (`conditioning_water`)

Measure externally supplied make-up water, excluding circulation already inside the boundary; report per 1 kg reference flow.

Inclusion condition: Wet cleaning uses externally supplied process water.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure externally supplied make-up water, excluding circulation already inside the boundary; report per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `epa-coal-cleaning-1995`

#### Outputs

##### Waste flows

###### Coal gangue (`conditioning_gangue`)

Weigh mechanically separated rock-rich coal gangue on a declared moisture basis; do not classify saleable fines as waste; report per 1 kg reference flow.

- Selected flow: Coal gangue `a5fa448c-4a0f-4ead-b9b3-8bd843d346b9`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh mechanically separated rock-rich coal gangue on a declared moisture basis; do not classify saleable fines as waste; report per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastes`
- Sources: `epa-coal-cleaning-1995`

###### Coal-washing bleed water for treatment (`conditioning_effluent`)

Measure washing-circuit bleed transferred to treatment separately from mine drainage; record solids and dissolved contaminants; report per 1 kg reference flow.

Inclusion condition: Wet cleaning discharges a bleed stream to treatment.

- Selected flow: Coal-washing bleed water for treatment
- Flow property / unit: Mass / kg
- Amount rule: Measure washing-circuit bleed transferred to treatment separately from mine drainage; record solids and dissolved contaminants; report per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastes`
- Sources: `ifc-mining-2007`

### Process: Crushing, screening, storage and gate loading (`handling`)

#### Inputs

##### Product flows

###### Alternating current (`handling_electricity`)

Meter crushing, screening, conveyor and loading electricity; report per 1 kg reference flow.

- Selected flow: Alternating current `65ec3424-071f-42ab-8800-810364539813`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Meter crushing, screening, conveyor and loading electricity; report per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling_power`
- Sources: `epa-surface-coal-1998`

#### Outputs

##### Product flows

###### Sub-bituminous coal (`saleable_coal`)

1 kg

- Selected flow: Sub-bituminous coal `a3573912-328b-402e-8f64-f39e34a6a00c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coal`
- Sources: `eia-coal-glossary`

##### Elementary flows

###### methane (fossil) (`handling_methane`)

Record only post-mining methane from handling and storage before the gate, using disclosed handling duration and basin-specific data; exclude mining-stage methane; report per 1 kg reference flow.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record only post-mining methane from handling and storage before the gate, using disclosed handling duration and basin-specific data; exclude mining-stage methane; report per 1 kg reference flow.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handling_gas`
- Sources: `ipcc-coal-fugitives-2019`

###### particles (PM2.5) (`handling_fine_particles`)

Calculate the stated dust-size fraction from transfers, storage exposure and controls without repeating mine-stage sources; report per 1 kg reference flow.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Calculate the stated dust-size fraction from transfers, storage exposure and controls without repeating mine-stage sources; report per 1 kg reference flow.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handling_dust`
- Sources: `epa-surface-coal-1998`

###### particles (PM2.5 - PM10) (`handling_coarse_particles`)

Calculate the stated dust-size fraction from transfers, storage exposure and controls without repeating mine-stage sources; report per 1 kg reference flow.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Calculate the stated dust-size fraction from transfers, storage exposure and controls without repeating mine-stage sources; report per 1 kg reference flow.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handling_dust`
- Sources: `epa-surface-coal-1998`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | shared processes | Separate measured mine, preparation and loading operations before allocating; identify grades and recovered gas sold as distinct products. | `ghgp-product-2011` |
| `allocation_basis` | residual common burden | Use a demonstrated physical relationship for remaining common burdens. For coal grades, justify mass or energy allocation from the actual process relationship and measured moisture/NCV; if no physical relationship is defensible, use documented economic allocation with consistent price periods and a sensitivity result. | `ghgp-product-2011` |
| `allocation_waste` | waste treatment | Do not assign product revenue shares to discarded rock or treatment wastewater. Retain their management burdens with the causing production; disclose any genuine saleable by-product and avoid unsubstantiated displacement credits. | `ghgp-product-2011` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_coal | handling | Coal mass and quality | measurement and reconciled record | mine; seam; rank evidence; dispatch gross and tare; stock opening and closing; raw coal mass; moisture; ash; sulfur; NCV; sampling basis | Calibrated weighbridge and stock surveys; representative paired laboratory samples with method identifiers. | kg | per batch/month; retain annual total | one full declared reporting period; lifetime horizon for cp_land | identified mine and included preparation site | per 1 kg reference flow | Calibration; laboratory reports; transfer receipts; activity logs; method and uncertainty |
| cp_diesel | mine | Diesel consumption | measurement and reconciled record | delivery; tank stocks; equipment; operating hours; density; temperature; maintenance and reclamation use | Fuel meters and stock reconciliation, with volume-to-mass evidence. | kg | per batch/month; retain annual total | one full declared reporting period; lifetime horizon for cp_land | identified mine and included preparation site | per 1 kg reference flow | Calibration; laboratory reports; transfer receipts; activity logs; method and uncertainty |
| cp_materials | mine | ANFO and mineral lubricant, separate records | measurement and reconciled record | material identity; formulation; issued mass; returns; opening and closing stocks; task | Supplier specifications, blast sheets and maintenance ledgers; reconcile each material independently. | kg | per batch/month; retain annual total | one full declared reporting period; lifetime horizon for cp_land | identified mine and included preparation site | per 1 kg reference flow | Calibration; laboratory reports; transfer receipts; activity logs; method and uncertainty |
| cp_water | mine | External water and dewatering, separate circuits | measurement and reconciled record | source; abstraction; purchased supply; meter; circuit; recirculation; return; consumption; density if converted | Calibrated meters and source-resolved water balance including preparation; do not equate withdrawal with consumption. | kg or m3 by row | per batch/month; retain annual total | one full declared reporting period; lifetime horizon for cp_land | identified mine and included preparation site | per 1 kg reference flow | Calibration; laboratory reports; transfer receipts; activity logs; method and uncertainty |
| cp_wastes | mine | Separate waste transfers | measurement and reconciled record | stream; process; mass; moisture; composition; destination; manifest; on-site storage change | Weigh each waste stream; characterize drainage/bleed chemistry; reconcile with treatment receipt and separate on-site spoil movement. | kg | per batch/month; retain annual total | one full declared reporting period; lifetime horizon for cp_land | identified mine and included preparation site | per 1 kg reference flow | Calibration; laboratory reports; transfer receipts; activity logs; method and uncertainty |
| cp_mine_gas | mine | Mining gas and fossil CO2 sub-sources | measurement and reconciled record | source; vent/drain flow; concentration; temperature; pressure; raw coal output; recovery; destruction; flare; oxidation; engine fuel; time | Use time-integrated measurements or disclose a basin-specific estimation method with factor source and units; partition gas recovery and destruction. | kg | per batch/month; retain annual total | one full declared reporting period; lifetime horizon for cp_land | identified mine and included preparation site | per 1 kg reference flow | Calibration; laboratory reports; transfer receipts; activity logs; method and uncertainty |
| cp_handling_gas | handling | Post-mining methane | measurement and reconciled record | raw coal; residual gas model; throughput; storage duration; gate; temperature; losses | Disclose a basin-specific post-mining estimate and the portion before the gate; reconcile separately from mining gas. | kg | per batch/month; retain annual total | one full declared reporting period; lifetime horizon for cp_land | identified mine and included preparation site | per 1 kg reference flow | Calibration; laboratory reports; transfer receipts; activity logs; method and uncertainty |
| cp_combustion | mine | NOx and SO2, separate species | measurement and reconciled record | engine/blast; activity; fuel sulfur; test; factor source; controls; NOx mass convention | Source-specific tests or documented applicable models; attach fuel/control records and uncertainty. | kg | per batch/month; retain annual total | one full declared reporting period; lifetime horizon for cp_land | identified mine and included preparation site | per 1 kg reference flow | Calibration; laboratory reports; transfer receipts; activity logs; method and uncertainty |
| cp_land | mine | Occupation and transformation | measurement and reconciled record | GIS area; original cover; new disturbance; occupation start/end; rehabilitation; production horizon; attributable fraction | Survey parcel-level areas and periods; match lifetime burdens to the same mine production horizon; retain planned and realized records separately. | m2 or m2*a by row | per batch/month; retain annual total | one full declared reporting period; lifetime horizon for cp_land | identified mine and included preparation site | per 1 kg reference flow | Calibration; laboratory reports; transfer receipts; activity logs; method and uncertainty |
| cp_mine_power | mine | Mining electricity | measurement and reconciled record | meter; kWh; start/end; submeter shares; grid; voltage; self-generation separation | Calibrated meter; convert kWh to MJ; reconcile each submeter with the import total. | MJ | per batch/month; retain annual total | one full declared reporting period; lifetime horizon for cp_land | identified mine and included preparation site | per 1 kg reference flow | Calibration; laboratory reports; transfer receipts; activity logs; method and uncertainty |
| cp_conditioning_power | conditioning | Preparation electricity | measurement and reconciled record | meter; kWh; start/end; submeter shares; grid; voltage; self-generation separation | Calibrated meter; convert kWh to MJ; reconcile each submeter with the import total. | MJ | per batch/month; retain annual total | one full declared reporting period; lifetime horizon for cp_land | identified mine and included preparation site | per 1 kg reference flow | Calibration; laboratory reports; transfer receipts; activity logs; method and uncertainty |
| cp_handling_power | handling | Handling electricity | measurement and reconciled record | meter; kWh; start/end; submeter shares; grid; voltage; self-generation separation | Calibrated meter; convert kWh to MJ; reconcile each submeter with the import total. | MJ | per batch/month; retain annual total | one full declared reporting period; lifetime horizon for cp_land | identified mine and included preparation site | per 1 kg reference flow | Calibration; laboratory reports; transfer receipts; activity logs; method and uncertainty |
| cp_mine_dust | mine | Separate PM2.5 and PM2.5–PM10 | measurement and reconciled record | source activity; truck distance; material mass; silt; unbound moisture; wind; controls; size fraction; model version | Source tests or applicable dust model using site parameters; check geographic and tested-condition applicability; retain controls and fraction conversion. | kg | per batch/month; retain annual total | one full declared reporting period; lifetime horizon for cp_land | identified mine and included preparation site | per 1 kg reference flow | Calibration; laboratory reports; transfer receipts; activity logs; method and uncertainty |
| cp_handling_dust | handling | Separate PM2.5 and PM2.5–PM10 | measurement and reconciled record | source activity; truck distance; material mass; silt; unbound moisture; wind; controls; size fraction; model version | Source tests or applicable dust model using site parameters; check geographic and tested-condition applicability; retain controls and fraction conversion. | kg | per batch/month; retain annual total | one full declared reporting period; lifetime horizon for cp_land | identified mine and included preparation site | per 1 kg reference flow | Calibration; laboratory reports; transfer receipts; activity logs; method and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalization | all inventory rows except land and the reference product | Divide each attributable period exchange by net saleable as-received coal produced in the same period; derive production from dispatch plus closing minus opening saleable stocks. Convert tonnes to kg before division. | cp_coal; cp_diesel, cp_materials, cp_water, cp_wastes, cp_mine_gas, cp_handling_gas, cp_combustion, cp_land, cp_mine_power, cp_conditioning_power, cp_handling_power, cp_mine_dust, cp_handling_dust | exchange per 1 kg reference flow |  |
| land_normalization | mine_land_occupation; mine_land_transformation | Divide attributable occupation area-time or transformation area by cumulative saleable as-received coal over the matching mine production horizon; disclose future production assumptions and update against realized output. | cp_land; cp_coal | land exchange per 1 kg reference flow |  |
| gas_activity_basis | mine_methane; handling_methane | When an applicable gas model uses raw coal tonnes, calculate its gas total with that raw-coal activity first, then divide by saleable coal kg; never apply a raw-coal factor directly to saleable tonnes. | cp_mine_gas; cp_handling_gas; cp_coal | gas exchange per 1 kg reference flow | `ipcc-coal-fugitives-2019` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| rank_quality | saleable_coal | Verify rank and report each analytical basis; one heat-content value cannot substitute for rank evidence. | cp_coal; `eia-coal-glossary` |
| mass_water_balance | all inventory rows | Reconcile coal, moisture, gangue, stocks and water separately; explain losses and measurement gaps. | cp_coal; cp_water; cp_wastes |
| evidence_scope | emissions | Disclose model source, test conditions, mine route, controls and uncertainty; old US dust guidance supports process identification, not a universal industry benchmark. | cp_mine_dust; cp_handling_dust; `epa-surface-coal-1998` |
| completeness | foreground package | Expand with actual site-specific atomic exchanges; record missing measurements and upstream coverage. Do not default unmeasured methane, water, rejects or combustion to zero. | activity logs; `ifc-mining-2007` |
| range_evidence | all inventory rows | Collect foreground values. No external inventory range is prescribed because two independent boundary-compatible original sources have not established one for this product state and route. | Meters, assays, surveys and source applicability review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference product | Reject a reference other than 1 kg net as-received saleable sub-bituminous coal, or missing rank, moisture and gate qualifiers. | `eia-coal-glossary` |
| `validate_balances` | foreground | Verify meter coverage, stock reconciliation, dry/wet basis and allocation sums. Check raw-coal versus saleable denominator in gas calculations and independently evaluate all applicable source classes. | `ipcc-coal-fugitives-2019` |
| `validate_particles` | dust | Do not sum PM2.5 and inclusive PM10 as disjoint quantities; derive the 2.5–10 micrometre fraction only from compatible measurements/models. | `epa-surface-coal-1998` |
| `validate_identity` | inventory | Every row must be atomic with a compatible property, unit and compartment. An unresolved UUID does not justify a proxy. Wastewater transfers require treatment links and pollutant-resolved final emissions in the completed dataset. | `ifc-mining-2007` |
| `validate_disclosure` | dataset | Require explicit missing-data, conditional-route, closure and allocation disclosures; distinguish measured totals, estimates and external evidence. | `ghgp-product-2011` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | background_dataset |
| allowed_use | Mine-gate coal supply for separately modelled transport, fuel use and energy systems of the declared rank |
| excluded_use | Consumer electricity or heat; other coal ranks; thermally upgraded coal; undisclosed generic global coal |
| required_metadata | All reference qualifiers; process and supplier links; methods; units; geography; time; allocation; land/closure scope |
| required_quality_disclosure | Measured/modelled shares; completeness; unresolved flow identities; uncertainty; absent ranges; stock and water balances; cut-offs |
| update_trigger | Rank/state change; mine route or source-control change; revised gas model; new meters; changed allocation, stock or closure assumptions |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | official_guidance | CPC Version 3.0 Structure, 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv; accessed 2026-09-30 | Official classification identity, CSV rows 433–440 |
| `eia-coal-glossary` | official_guidance | EIA Glossary: Coal; https://www.eia.gov/tools/glossary/?id=coal; accessed 2026-09-30 | Coal rank and distinction between as-received and laboratory bases; entries Coal rank, Subbituminous coal, As-received condition |
| `eia-coal-mining` | official_guidance | Coal explained: Mining and transportation of coal; https://www.eia.gov/energyexplained/coal/mining-and-transportation.php; accessed 2026-09-30 | Surface/underground routes and conditional coal preparation; sections Removing coal and Processing coal |
| `epa-surface-coal-1998` | official_guidance | AP-42 Section 11.9 Western Surface Coal Mining, October 1998; https://www.epa.gov/sites/default/files/2020-10/documents/c11s09.pdf; accessed 2026-09-30 | Mining, handling, reclamation and dust activities, pp. 11.9-1 and 11.9-4; no transferred numerical emission factors |
| `epa-coal-cleaning-1995` | official_guidance | AP-42 Section 11.10 Coal Cleaning, November 1995; https://www.epa.gov/sites/default/files/2020-10/documents/c11s10.pdf; accessed 2026-09-30 | Physical cleaning and dewatering stages, pp. 11.10-1–3; thermal drying is outside this PCR |
| `ipcc-coal-fugitives-2019` | official_guidance | 2019 Refinement to the 2006 IPCC Guidelines, Volume 2 Chapter 4: Fugitive Emissions; https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/2_Volume2/19R_V2_4_Ch04_Fugitive_Emissions.pdf; accessed 2026-09-30 | Sections 4.1.1, 4.1.3 and 4.1.4: mining/post-mining gas accounting and distinction between raw coal activity and saleable output; no adopted factor range |
| `ifc-mining-2007` | official_guidance | Environmental, Health, and Safety Guidelines for Mining, 10 December 2007; https://www.ifc.org/content/dam/ifc/doc/2000/2007-mining-ehs-guidelines-en.pdf; accessed 2026-09-30 | Water balance, mine drainage, waste rock, used oil, air and land management, pp. 2–5, 9–12; management guidance rather than inventory ranges |
| `ghgp-product-2011` | standard | Product Life Cycle Accounting and Reporting Standard, WRI/WBCSD, 2011; https://docs.wbcsd.org/2011/09/Product_Life_Cycle_Accounting_Reporting_Standard.pdf; accessed 2026-09-30 | Chapter 9, pp. 63–67: allocation hierarchy and disclosure; applied here to attributable foreground exchanges |
| `ipcc-energy-zh-2000` | official_guidance | IPCC Good Practice Guidance and Uncertainty Management, Chapter 2 Energy, Chinese edition, 2000; https://www.ipcc-nggip.iges.or.jp/public/gp/chinese/2_Energy_CN.pdf; accessed 2026-09-30 | Chinese term 次烟煤, printed p. 2.29; terminology only, no calorific values transferred |
