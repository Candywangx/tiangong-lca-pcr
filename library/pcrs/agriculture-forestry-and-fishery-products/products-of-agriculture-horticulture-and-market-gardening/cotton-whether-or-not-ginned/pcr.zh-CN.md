---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cotton-whether-or-not-ginned
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 棉花，不论是否轧花

## 1. 范围与适用性

涵盖棉花种植、收获和农场门籽棉，以及可选的轧花至轧花厂门皮棉。必须选择一条路线。不含纱线、织物、榨油、运输和使用。

## 2. 产品类别标识

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cotton-whether-or-not-ginned |
| classification_refs | CPC 3.0: 0 > 01 > 019 > 0192 > 01921; mapping relation: exact |
| covered_products | seed cotton at farm gate; ginned cotton lint at gin gate |
| excluded_products | yarn; fabric; cottonseed oil or meal; synthetic fibre |
| representative_product | accepted seed cotton or accepted lint, route declared |
| production_route | managed cultivation and harvest; optional mechanical ginning, cleaning and grading |
| market_state | unprocessed seed cotton or cleaned ginned lint, moisture and grade declared |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | accepted cotton in declared seed-cotton or lint state |
| How much | 1,000 kg |
| How well | cultivar, route, moisture, grade, contamination and acceptance declared |
| How long or cycle | one crop cycle and harvest lot; linked gin batch when applicable |
| reference_flow_link | reference_product_at_declared_handoff |

| Field | Value |
| --- | --- |
| Reference amount | 1000 |
| Reference product flow | Accepted seed cotton or ginned cotton lint, declared route |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | seed cotton at farm gate or lint at gin gate; geography; crop year; cultivar; moisture; grade; technology |

每份前景数据包须声明实际路线、终端产品状态和交接门，保留原始称量、质量平衡及批次追溯记录。以该门的唯一交接参考输出归一化，前序工序采用实测转移数量。

唯一参考输出为 `reference_product_at_declared_handoff`，由下列实际路线在声明交接门的产品承接。原路线输出编号用于追溯实际来源和物理状态，不再分别固定为参考数量。

## 4. 计量与单位规则
| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | accepted product | Mass | kg | Weigh at declared hand-off; do not combine seed-cotton and lint masses. |
| `moisture_alignment` | biomass | Mass | kg wet; kg dry | Preserve wet mass and moisture; convert with lot-specific fraction. |
| `normalization` | field and gin records | Area; Mass | ha; kg | Collect by field-cycle or batch, then normalize once. |

## 5. 系统边界

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | prepared field before current-cycle inputs |
| starting_condition_role | foreground entry; crop-attributed preparation included |
| product_classification_scope | CPC 3.0 `01921` |
| recursive_input_rule | same-category input uses its supplying dataset and is not recursively recreated |
| upstream_dataset_requirement | representative upstream dataset; unresolved identity selected from foreground evidence before publication |
| disclosure | route, irrigation, harvest, moisture, grade, gin technology, batch, co-product destinations and exclusions |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_field` | cultivation | Include crop-attributed preparation, planting, nutrients, protection, irrigation, energy and direct emissions. | `ipcc-2019-refinement`; `fao-gap-framework-2003` |
| `boundary_harvest` | harvest | Separate harvest, grading, rejects, loss and farm hand-off from crop growth. | `fao-gap-framework-2003`; `mass-balance-identity` |
| `boundary_gin` | ginning | Include intake, conditioning, separation, cleaning, grading and bale preparation; stop before spinning. | `usda-cotton-ginning` |
| `boundary_routes` | alternatives | Keep rainfed/irrigated, picker/stripper and saw/roller technology strata separate before weighting. | `fao-gap-framework-2003`; `usda-cotton-ginning` |
| `boundary_route_delta_evidence` | production and technology deltas | Managed cultivation is the production parent. Irrigation changes water, pumping energy and field-emission records; harvest equipment changes energy, losses and contamination; saw versus roller ginning changes conditioning, separation, cleaning and quality records. These routes coexist in the category but are mutually exclusive within one stratum. | `fao-gap-framework-2003`; `usda-cotton-ginning` |
| `boundary_conditioning_stabilization` | ginned route | Raw seed cotton enters ginning; drying or moisture conditioning, separation and cleaning prepare moisture-safe graded lint for bale hand-off. Conditioning energy and service inputs are recorded in gin energy; cottonseed is an intended co-product; trash, moisture change, dust, rejects and loss remain separately classified. | `usda-cotton-ginning`; `mass-balance-identity` |
| `boundary_single_period` | all routes | Model one crop cycle and its linked harvest and gin batches in one linked accounting interval; single-period; no storage, replacement or termination is included. Temporary holding is assigned to the linked lot. | `mass-balance-identity` |

## 6. 过程清单结构

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `cotton_cultivation` | Managed cotton cultivation | required | one field crop cycle | managed biological production parent; alternative production route delta separates rainfed and irrigated inventory, calculation and validation requirements | ha planted |
| `cotton_harvest` | Harvest, grading and farm hand-off | required | one harvest lot | harvest and grading-sorting of incoming harvestable seed cotton; picker/stripper alternative technology delta changes equipment, loss and contamination records | 1000 kg accepted seed cotton |
| `cotton_ginning` | Ginning and lint hand-off | conditional | ginned route only | material treatment by separation; primary conditioning by drying/cleaning; preservation stabilization to moisture-safe lint; saw/roller alternative technology delta; batch or continuous production | 1000 kg accepted lint |
| declared_reference_handoff | 声明交接门的产品计量 | required |  | foreground | reference_product_at_declared_handoff |

### Process: Managed cotton cultivation (`cotton_cultivation`)

#### Inputs

##### Product flows

###### Cotton planting seed (`cotton_seed`)

按规定的物料状态、路线和去向记录该流。

- 选定流：棉花播种用种子
- 流属性/单位: Mass / kg
- 数量规则: measured seed mass sown
- 数值来源模式: foreground_record (`foreground_record`)
- 适用范围: site_specific (`site_specific`)
原始活动或阶段基准：per ha planted in one crop cycle.

- 归一化基准：每声明的参考流
- 基准类型: crop_cycle (`crop_cycle`)
- 证据类型: collected_record (`collected_record`)
- 采集协议: `cp_field_inputs`
- 来源:
- 数量范围: 数量校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100
  - 单位: kg/ha crop cycle
  - 基准: planting seed per hectare
  - 基准类型: crop_cycle (`crop_cycle`)
  - 证据类型: reasoned_estimate (`reasoned_estimate`)

###### Irrigation water (`irrigation_water`)

按规定的物料状态、路线和去向记录该流。

- 选定流：灌溉供水
- 流属性/单位: Volume / m3
- 数量规则: metered or calculated delivered water
- 数值来源模式: foreground_record (`foreground_record`)
- 适用范围: site_specific (`site_specific`)
原始活动或阶段基准：per ha irrigated in one crop cycle.

- 归一化基准：每声明的参考流
- 基准类型: crop_cycle (`crop_cycle`)
- 证据类型: collected_record (`collected_record`)
- 采集协议: `cp_irrigation`
- 来源:
- 数量范围: 数量校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 12000
  - 单位: m3/ha crop cycle
  - 基准: delivered irrigation water
  - 基准类型: crop_cycle (`crop_cycle`)
  - 证据类型: reasoned_estimate (`reasoned_estimate`)

###### 柴油 (`field_energy_diesel`)

实际柴油田间机械建植及作物照护；灌溉泵动力另行确认，保留田块及作物周期归属。

仅在本节点设备及采购记录确认使用此燃料时启用。记录牌号、配方、供应商及实际质量，体积按有证据的密度换算，不用默认密度。UUID标识燃料产品，不是燃烧服务或排放因子；实际前景燃烧另行计入，避免重复已含燃烧的上游服务。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按`cp_energy`仅采集归属本节点的该载能体数量。包含能耗的服务及共用量仅对账归属一次；归属量乘声明参考数量，再除以相同产品单位下匹配的最终合格产出数量。保留过程原生吞吐记录，不对最终参考量再次归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：per declared reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：`route-energy-fao`

执行第8节`field_energy_identification`要求。不继承原集合卡的数值范围或默认值。

##### Elementary flows

###### Agricultural land occupation (`land_occupation`)

按规定的物料状态、路线和去向记录该流。

- 选定流：耕地占用 `b88d3b6d-229e-477e-bce1-e16376f75c7b`
- 流属性/单位: Area*time / ha*a
- 数量规则: area multiplied by occupation duration
- 数值来源模式: calculated_value (`calculated_value`)
- 适用范围: site_specific (`site_specific`)
原始活动或阶段基准：per ha planted in one crop cycle.

- 归一化基准：每声明的参考流
- 基准类型: crop_cycle (`crop_cycle`)
- 证据类型: calculated_from_collection (`calculated_from_collection`)
- 采集协议: `cp_field_trace`
- 来源:
- 数量范围: 数量校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 2
  - 单位: ha*a/ha crop cycle
  - 基准: occupation duration
  - 基准类型: crop_cycle (`crop_cycle`)
  - 证据类型: reasoned_estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Harvestable seed cotton internal transfer (`standing_seed_cotton`)

按规定的物料状态、路线和去向记录该流。

- 选定流：可采收籽棉
- 流属性/单位: Mass / kg
- 数量规则: harvest output plus measured field loss
- 数值来源模式: calculated_value (`calculated_value`)
- 适用范围: site_specific (`site_specific`)
原始活动或阶段基准：per ha planted in one crop cycle.

- 归一化基准：每声明的参考流
- 基准类型: crop_cycle (`crop_cycle`)
- 证据类型: calculated_from_collection (`calculated_from_collection`)
- 采集协议: `cp_mass_balance`
- 来源:
- 数量范围: 数量校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10000
  - 单位: kg/ha crop cycle
  - 基准: harvestable seed cotton
  - 基准类型: crop_cycle (`crop_cycle`)
  - 证据类型: reasoned_estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct nitrous oxide to air (`direct_n2o`)

按规定的物料状态、路线和去向记录该流。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位: Mass / kg N2O
- 数量规则: IPCC calculation from collected N activity
- 数值来源模式: calculated_value (`calculated_value`)
- 适用范围: site_specific (`site_specific`)
原始活动或阶段基准：per ha planted in one crop cycle.

- 归一化基准：每声明的参考流
- 基准类型: crop_cycle (`crop_cycle`)
- 证据类型: calculated_from_collection (`calculated_from_collection`)
- 采集协议: `cp_field_emissions`
- 来源:
- 数量范围: 数量校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 50
  - 单位: kg N2O/ha crop cycle
  - 基准: direct N2O
  - 基准类型: crop_cycle (`crop_cycle`)
  - 证据类型: reasoned_estimate (`reasoned_estimate`)

###### Ammonia to air (`ammonia_air`)

按规定的物料状态、路线和去向记录该流。

- 选定流：氨 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位: Mass / kg NH3
- 数量规则: measured or modelled NH3
- 数值来源模式: calculated_value (`calculated_value`)
- 适用范围: site_specific (`site_specific`)
原始活动或阶段基准：per ha planted in one crop cycle.

- 归一化基准：每声明的参考流
- 基准类型: crop_cycle (`crop_cycle`)
- 证据类型: calculated_from_collection (`calculated_from_collection`)
- 采集协议: `cp_field_emissions`
- 来源:
- 数量范围: 数量校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 200
  - 单位: kg NH3/ha crop cycle
  - 基准: NH3 per hectare
  - 基准类型: crop_cycle (`crop_cycle`)
  - 证据类型: reasoned_estimate (`reasoned_estimate`)

###### Nitrate to receiving water (`nitrate_water`)

按规定的物料状态、路线和去向记录该流。

- 选定流：硝酸根向接收水体排放
- 流属性/单位: Mass / kg NO3-
- 数量规则: measured or modelled by compartment and basis
- 数值来源模式: calculated_value (`calculated_value`)
- 适用范围: site_specific (`site_specific`)
原始活动或阶段基准：per ha planted in one crop cycle.

- 归一化基准：每声明的参考流
- 基准类型: crop_cycle (`crop_cycle`)
- 证据类型: calculated_from_collection (`calculated_from_collection`)
- 采集协议: `cp_field_emissions`
- 来源:
- 数量范围: 数量校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 500
  - 单位: kg nitrate/ha crop cycle
  - 基准: nitrate per hectare
  - 基准类型: crop_cycle (`crop_cycle`)
  - 证据类型: reasoned_estimate (`reasoned_estimate`)

最终交换质量为 kg NO3-；按 N 计的活动量、因子和筛查保留在独立台账。仅对归属于该化学物种的 N 质量乘 62/14，换算一次后按合格参考产出归一化一次。不得将养分总平衡、土壤留存或不明差额当作该排放。各实际接收环境分别记录；气体体积记录须有实测温压及有据质量换算，不能与化合物质量互换。

### Process: Harvest, grading and farm hand-off (`cotton_harvest`)

#### Inputs

##### Product flows

###### Harvestable seed cotton internal input (`harvestable_seed_cotton_input`)

按规定的物料状态、路线和去向记录该流。

- 选定流：可采收籽棉
- 流属性/单位: Mass / kg
- 数量规则: linked transfer from cultivation
- 数值来源模式: calculated_value (`calculated_value`)
- 适用范围: site_specific (`site_specific`)
原始活动或阶段基准：per harvest lot.

- 归一化基准：每声明的参考流
- 基准类型: process_output (`process_output`)
- 证据类型: calculated_from_collection (`calculated_from_collection`)
- 采集协议: `cp_mass_balance`
- 来源:
- 数量范围: 数量校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1000
  - 上限: 1500
  - 单位: kg/1000 kg accepted seed cotton
  - 基准: harvest input balance
  - 基准类型: process_output (`process_output`)
  - 证据类型: reasoned_estimate (`reasoned_estimate`)

###### 柴油 (`harvest_energy_diesel`)

实际柴油收获机械及出口前批次移动；人工或其他动力路线按自身证据处理，不套用本投入。

仅在本节点设备及采购记录确认使用此燃料时启用。记录牌号、配方、供应商及实际质量，体积按有证据的密度换算，不用默认密度。UUID标识燃料产品，不是燃烧服务或排放因子；实际前景燃烧另行计入，避免重复已含燃烧的上游服务。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按`cp_energy`仅采集归属本节点的该载能体数量。包含能耗的服务及共用量仅对账归属一次；归属量乘声明参考数量，再除以相同产品单位下匹配的最终合格产出数量。保留过程原生吞吐记录，不对最终参考量再次归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：per declared reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：`route-energy-fao`

执行第8节`harvest_energy_identification`要求。不继承原集合卡的数值范围或默认值。

#### Outputs

##### Product flows

###### Accepted seed cotton (`accepted_seed_cotton`)

按规定的物料状态、路线和去向记录该流。

- 选定流：农场门籽棉
- 流属性/单位: Mass / kg
原始产出计量与核对要求：weighed accepted output

- 数量规则：实测净转移质量，保留批次、实际产品状态和含水率基准；在声明交接门对账至最终参考输出。
- 数值来源模式: foreground_record (`foreground_record`)
- 适用范围: product_specific (`product_specific`)
原始活动或阶段基准：1000 kg accepted seed cotton.

- 归一化基准：每声明的参考流
- 基准类型: reference_flow (`reference_flow`)
- 证据类型: collected_record (`collected_record`)
- 采集协议: `cp_mass_balance`
- 来源: mass-balance-identity
- 数量范围: 数量校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1000
  - 上限: 1000
  - 单位: kg
  - 基准: unginned reference flow
  - 基准类型: reference_flow (`reference_flow`)
  - 证据类型: method_formula (`method_formula`)
  - 来源: `mass-balance-identity`

### Process: Ginning and lint hand-off (`cotton_ginning`)

#### Inputs

##### Product flows

###### Seed cotton internal input (`gin_seed_cotton`)

按规定的物料状态、路线和去向记录该流。

- 选定流：籽棉
- 流属性/单位: Mass / kg
- 数量规则: weighed gin intake
- 数值来源模式: foreground_record (`foreground_record`)
- 适用范围: site_specific (`site_specific`)
原始活动或阶段基准：per 1000 kg accepted lint.

- 归一化基准：每声明的参考流
- 基准类型: process_output (`process_output`)
- 证据类型: collected_record (`collected_record`)
- 采集协议: `cp_gin_batch`
- 来源:
- 数量范围: 数量校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1500
  - 上限: 4000
  - 单位: kg seed cotton/1000 kg lint
  - 基准: gin intake
  - 基准类型: process_output (`process_output`)
  - 证据类型: reasoned_estimate (`reasoned_estimate`)

###### 交流电 (`gin_energy_electricity`)

实际轧花电动机械、输送风机及控制设备。干燥热须确认已安装燃烧器及供能；保留现有棉籽与皮棉分配，不向两种产品各计整厂能耗。

仅对本节点有记录的交流用电启用。该身份未特指电压、技术及供应方，须记录并选择兼容上游供应。保留实测kWh，按1 kWh = 3.6 MJ准确换算为MJ；不得将电能视为燃烧燃料或有效热。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性 / 单位：能量（数据库参考属性：净热值） `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：按`cp_gin_batch`仅采集归属本节点的该载能体数量。包含能耗的服务及共用量仅对账归属一次；归属量乘声明参考数量，再除以相同产品单位下匹配的最终合格产出数量。保留过程原生吞吐记录，不对最终参考量再次归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：per declared reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_gin_batch`
- 来源：`cotton-gin-energy`

执行第8节`gin_energy_identification`要求。不继承原集合卡的数值范围或默认值。

#### Outputs

##### Product flows

###### Intended ginned cotton lint output (`ginned_lint`)

按规定的物料状态、路线和去向记录该流。

- 选定流：轧花皮棉
- 流属性/单位: Mass / kg
原始产出计量与核对要求：weighed accepted lint

- 数量规则：实测净转移质量，保留批次、实际产品状态和含水率基准；在声明交接门对账至最终参考输出。
- 数值来源模式: foreground_record (`foreground_record`)
- 适用范围: product_specific (`product_specific`)
原始活动或阶段基准：1000 kg accepted lint.

- 归一化基准：每声明的参考流
- 基准类型: reference_flow (`reference_flow`)
- 证据类型: collected_record (`collected_record`)
- 采集协议: `cp_gin_batch`
- 来源: mass-balance-identity
- 数量范围: 数量校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1000
  - 上限: 1000
  - 单位: kg
  - 基准: ginned reference flow
  - 基准类型: reference_flow (`reference_flow`)
  - 证据类型: method_formula (`method_formula`)
  - 来源: `mass-balance-identity`

###### Intended cottonseed co-product output (`cottonseed_coproduct`)

按规定的物料状态、路线和去向记录该流。

- 选定流：棉籽联产品
- 流属性/单位: Mass / kg
- 数量规则: weighed separated cottonseed by destination
- 数值来源模式: foreground_record (`foreground_record`)
- 适用范围: site_specific (`site_specific`)
原始活动或阶段基准：per 1000 kg accepted lint.

- 归一化基准：每声明的参考流
- 基准类型: process_output (`process_output`)
- 证据类型: collected_record (`collected_record`)
- 采集协议: `cp_gin_batch`
- 来源:
- 数量范围: 数量校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 2500
  - 单位: kg/1000 kg lint
  - 基准: cottonseed output
  - 基准类型: process_output (`process_output`)
  - 证据类型: reasoned_estimate (`reasoned_estimate`)

##### Waste flows

###### Gin trash and rejected material (`gin_trash`)

按规定的物料状态、路线和去向记录该流。

- 选定流：轧花杂物及废弃棉花
- 流属性/单位: Mass / kg
- 数量规则: weighed or balanced exit by destination
- 数值来源模式: foreground_record (`foreground_record`)
- 适用范围: site_specific (`site_specific`)
原始活动或阶段基准：per 1000 kg accepted lint.

- 归一化基准：每声明的参考流
- 基准类型: process_output (`process_output`)
- 证据类型: collected_record (`collected_record`)
- 采集协议: `cp_gin_batch`
- 来源:
- 数量范围: 数量校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg/1000 kg lint
  - 基准: gin trash
  - 基准类型: process_output (`process_output`)
  - 证据类型: reasoned_estimate (`reasoned_estimate`)

##### Elementary flows

###### Gin particulate matter to air (`gin_particulate`)

按规定的物料状态、路线和去向记录该流。

- 选定流：颗粒物向空气排放，粒径分段已声明
- 流属性/单位: Mass / kg
- 数量规则: measured or calculated after control
- 数值来源模式: calculated_value (`calculated_value`)
- 适用范围: technology_specific (`technology_specific`)
原始活动或阶段基准：per 1000 kg accepted lint.

- 归一化基准：每声明的参考流
- 基准类型: process_output (`process_output`)
- 证据类型: calculated_from_collection (`calculated_from_collection`)
- 采集协议: `cp_gin_batch`
- 来源:
- 数量范围: 数量校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 50
  - 单位: kg/1000 kg lint
  - 基准: controlled particulate
  - 基准类型: process_output (`process_output`)
  - 证据类型: reasoned_estimate (`reasoned_estimate`)


### 过程：声明边界的产品交接计量（`declared_reference_handoff`）
该节点记录既有系统边界上的实际交接数量，用于对账和参考数量归一化。它不代表新增物理工序，不自动引入干燥、冷却、储存、包装或运输。每份数据包须声明一条实际路线、一个终端产品状态、含水率或干物质基准及交接门。仅将该路线在此交接门的合格产品传入本节点；其他路线不得作为额外投入，联产品另行记录并按第 7 节处理。前序工序的投入、损失和排放只计一次。以实际交接净质量作为归一化分母；计量对账节点不改变质量、产率或分配结果。
#### 输入
##### 产品流
###### 实际路线的交接产品（`actual_route_product_for_handoff`）
记录实际终端路线交付的合格产品；与交接门称重和批次记录对账。
- 选定流：合格籽棉或轧花皮棉，路线已声明
- 流属性 / 单位：质量 / kg
- 数量规则：实际交接门的实测合格产品净质量，按参考数量归一化；不得汇总前序各阶段数量，不得计入其他路线或联产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_declared_reference_handoff`
- 数量范围：交接数量归一化恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 同状态交接净质量
  - 基准：同一交接状态的实测净质量归一化；不表示物理工序的产率
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`declared-handoff-measurement-definition`

##### 废物流
该计量节点不产生新的废物投入。
##### 基本流
该计量节点不产生新的资源投入。
#### 输出
##### 产品流
###### 声明交接门的参考产品（`reference_product_at_declared_handoff`）
- 选定流：合格籽棉或轧花皮棉，路线已声明
- 流属性 / 单位：质量 / kg
- 数量规则：1000 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_declared_reference_handoff`
实际状态的产品 UUID 须独立核实；当前未确认时保持待核实，不继承前序或其他路线的 UUID。
- 数量范围：交接数量归一化恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 同状态交接净质量
  - 基准：同一交接状态的实测净质量归一化；不表示物理工序的产率
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`declared-handoff-measurement-definition`

##### 废物流
实际损失已在发生工序记录；不得在此重复记录。
##### 基本流
实际排放已在发生工序记录；不得在此重复记录。

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_field` | cultivation | Attribute to linked seed cotton; residues left in field receive no product allocation. | `mass-balance-identity` |
| `allocation_gin` | lint and cottonseed | Prefer subdivision; otherwise declared economic allocation with mass sensitivity. | `iso-14044`; `mass-balance-identity` |
| `allocation_reject` | rework/rejects | Return rework once; route rejects by destination and exclude from accepted output. | `mass-balance-identity` |
| `allocation_runs` | gin runs | Assign startup, cleaning and changeover once by meter or throughput-time driver. | `mass-balance-identity` |

## 8. 前景数据采集、计算与质量规则

### 完成数据集前确认具体投入身份

依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。

| requirement_id | collection_protocol_id | 保留的采集范围 |
| --- | --- | --- |
| `nutrient_supply_specific_input` | `cp_field_inputs` | 作业 cotton_cultivation：按规定的物料状态、路线和去向记录该流。 原数量方法：measure each supplied product once and calculate nutrient content |


### 按实际路线确认能源身份

按实际产品状态、作业、设备及供能记录选择能源交换。下列条件式卡片不是必用或穷尽的燃料清单。逐项记录适用性、所用载能体、供应商、服务期间、原生数量及分配；对于尚未表示的实际投入，须另建物理身份具体的卡片并核验UUID。未识别投入仍是明确的完整性缺口，不得记为零或笼统能源交换。人工、环境干燥或绕过某节点的证据，仅能支持相应作业的未使用结论。即使未列示例卡，也须保留全部必需作业的调查。

区分外购供能与现场转换。自产电力通过内部连接衔接前景发电过程，其实际燃料及排放只在发电节点计入一次；同一内部转移不得再计外购电力供应。外购热亦不得重复计入供应商侧燃料。将共用电表、承包服务已含能耗与现有卡片对账，同一物理数量仅归属一次。保留原始量、输出吞吐、共用服务分配及出口后活动排除要求。逐载能体仅进行一次期间与输出归属，以相同产品单位下匹配的最终合格产出缩放至声明参考数量，不再次归一化已归一化数量。过程原生强度须通过实测吞吐衔接最终产出。这些要求不设用量默认值，也不证明数据集完整。

| requirement_id | collection_protocol_id | 必需作业及证据 |
| --- | --- | --- |
| `field_energy_identification` | `cp_energy` | 实际柴油田间机械建植及作物照护；灌溉泵动力另行确认，保留田块及作物周期归属。 原始活动或阶段基准：per ha planted in one crop cycle. (`route-energy-fao`) |
| `harvest_energy_identification` | `cp_energy` | 实际柴油收获机械及出口前批次移动；人工或其他动力路线按自身证据处理，不套用本投入。 原始活动或阶段基准：per 1000 kg accepted seed cotton. (`route-energy-fao`) |
| `gin_energy_identification` | `cp_gin_batch` | 实际轧花电动机械、输送风机及控制设备。干燥热须确认已安装燃烧器及供能；保留现有棉籽与皮棉分配，不向两种产品各计整厂能耗。 原始活动或阶段基准：per 1000 kg accepted lint. (`cotton-gin-energy`) |


先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_trace` | `cotton_cultivation` | land and identity | field log | field, area, dates, cultivar | records and maps；原始汇总与分配：preserve strata | ha | field-cycle | complete cycle | all fields | 每声明的参考流 | maps and logs |
| `cp_field_inputs` | `cotton_cultivation` | inputs | invoice/application log | identity, amount, analysis, date | reconcile purchase and use；原始汇总与分配：sum once `nutrient_supply_specific_input`: 作业 cotton_cultivation：按规定的物料状态、路线和去向记录该流。 原数量方法：measure each supplied product once and calculate nutrient content 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 `crop_protection_specific_input`: 按规定的物料状态、路线和去向记录该流。  数量规则: measured formulation and active substance 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 | native | event | complete cycle | all fields | 每声明的参考流 | invoices and logs |
| `cp_irrigation` | `cotton_cultivation` | water | meter | volume, source, field | meter or balance；原始汇总与分配：sum delivered | m3 | event | complete cycle | irrigated fields | 每声明的参考流 | calibration |
| `cp_energy` | cultivation; harvest | energy | meter/fuel log | carrier, quantity, equipment | reconcile meters and invoices；原始汇总与分配：by node 按路线确认要求：`field_energy_identification`: 实际柴油田间机械建植及作物照护；灌溉泵动力另行确认，保留田块及作物周期归属。 原始活动或阶段基准：per ha planted in one crop cycle. (`route-energy-fao`) `harvest_energy_identification`: 实际柴油收获机械及出口前批次移动；人工或其他动力路线按自身证据处理，不套用本投入。 原始活动或阶段基准：per 1000 kg accepted seed cotton. (`route-energy-fao`) 对每项适用投入核验实际使用、设备及供能，完成数据集前须按每种实际载能体分别建立具体交换。身份或数量证据缺失仍为待补证，不记为零。区分外购供应、内部发电及承包服务包含项，仅计入一次能耗；不以条件式示例替代未核实路线。 | MJ; kWh | operation | full route | all equipment | 每声明的参考流 | invoices and meters |
| `cp_field_emissions` | `cotton_cultivation` | emissions | calculation | N, factors, compartments | disclosed IPCC tier；原始汇总与分配：field then aggregate | kg/ha | field-cycle | complete cycle | all fields | 每声明的参考流 | factor provenance |
| `cp_mass_balance` | cultivation; harvest | biomass | lot mass | intake, accepted, reject, loss, moisture | calibrated scales；原始汇总与分配：close per lot | kg | lot | all lots | all included fields and harvest lots | 每声明的参考流 | calibration |
| `cp_gin_batch` | `cotton_ginning` | batch flows | batch log | intake, lint, seed, trash, energy, grade, controls | scales and meters；原始汇总与分配：close per batch 按路线确认要求：`gin_energy_identification`: 实际轧花电动机械、输送风机及控制设备。干燥热须确认已安装燃烧器及供能；保留现有棉籽与皮棉分配，不向两种产品各计整厂能耗。 原始活动或阶段基准：per 1000 kg accepted lint. (`cotton-gin-energy`) 对每项适用投入核验实际使用、设备及供能，完成数据集前须按每种实际载能体分别建立具体交换。身份或数量证据缺失仍为待补证，不记为零。区分外购供应、内部发电及承包服务包含项，仅计入一次能耗；不以条件式示例替代未核实路线。 | kg; MJ; kWh | batch | all batches | all included gin lines | 每声明的参考流 | calibration and bale records |
| `cp_declared_reference_handoff` | declared_reference_handoff | reference_product_at_declared_handoff | 交接计量与验收记录 | route, terminal_output_row_id, product_state, gate, lot, net_mass_kg, moisture_basis, acceptance, tare | 采用校准衡器或可追溯称重记录，将实际终端工序交接批次与验收净质量、产品状态及含水率对账；剔除包装皮重，不汇总前序阶段数量。 | kg | 每交接批次 | 声明报告期 | 声明交接门 | 每声明的参考流 | 校准或称重凭证、验收和批次追溯 |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_moisture` | biomass | dry mass = wet mass × (1 − moisture fraction) | wet mass; moisture | dry mass | `mass-balance-identity` |
| `calc_emissions` | soil | apply declared IPCC tier once to collected N activity | N activity; factors | direct emissions | `ipcc-2019-refinement` |
| `calc_normalization` | nodes | 选定籽棉或皮棉路线完成平衡和联产品归属后，最终交换 = 应归属的原始交换总量 * 1,000 kg / 匹配参考状态的最终合格产出 kg。局部强度 q_i = Q/O_i 须先用实际关联吞吐还原贡献 Q = q_i*O_i；不得把 O_i 当作最终产出，也不得再次除以产出归一化最终参考量。 | totals; accepted output | per 1000 kg | `mass-balance-identity` |
| `calc_gin_balance` | gin | intake = lint + seed + trash + moisture change + loss | batch masses | balance | `mass-balance-identity` |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | 最终基本交换使用已识别物质的质量和一个实际接收环境，养分／活动台账另存：该物种的 N2O-N × 44/28 为 N2O，NH3-N × 17/14 为 NH3，硝酸盐氮 × 62/14 为硝酸盐，磷酸盐磷 × 95/31 为磷酸盐。若选定流为元素磷，则报告 kg P，仅在物种口径有据时将磷酸盐质量乘 31/95。只有方法输出按元素计时才换算一次，实测化合物质量不得再换算。总养分损失不得无据归于单一物种，土壤残余／留存养分不是排放。保留直接／间接路径台账，不重复所选方法或上游清单已经包含的路径。因子不确定性范围只按其声明基准检查因子，不是最终化合物数量或场址排放的允许界限。用合格参考数量和匹配实测产出，将可归属化合物质量归一化一次。活动量、身份或接收环境未知时保留证据缺口，不得宣称完整。 | `cp_field_emissions`; 物种特定活动量台账、方法路径和因子基准、匹配合格产出 | 按身份区分的交换和对账活动记录 |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product | Route, gate, cultivar, moisture and grade present. | lot/bale record |
| `dq_completeness` | all | One complete crop cycle and all linked batches; missingness quantified. | reconciliation |
| `dq_calibration` | quantities | Current calibration or uncertainty assessment. | certificates |
| `dq_strata` | routes | Alternative routes remain separate until transparent weighting. | stratum ledger |

## 9. 验证规则

| rule_id | Applies to | Rule | severity |
| --- | --- | --- | --- |
| `validate_route` | reference | Exactly one route and gate declared. | error |
| `validate_reference_identity` | reference | Before activation bind exact Product UUID, property and unit group. | error |
| `validate_nutrients` | cultivation | 每种实际肥料或改良剂产品单独列卡，保留实物质量、配方、养分组成和施用记录；养分量不是同一产品的另一次投入，不使用集合或分组标识代替具体流身份。 | error |
| `validate_balance` | harvest/gin | Close mass balance within declared uncertainty. | error |
| `validate_states` | outputs | Every accepted, downgraded, reworked and discarded state has one destination. | error |
| `validate_runs` | gin | Startup, cleaning and changeover are assigned once. | error |
| `validate_route_deltas` | alternative routes | Name the parent activity, evidence each changed inventory/calculation/validation category, and select one mutually exclusive route per stratum. | error |
| `validate_conditioning_states` | ginning | Record raw seed-cotton intake, any drying/moisture-conditioning inputs, prepared moisture-safe lint, cottonseed, trash, dust, rejects, loss and each hand-off. | error |
| `validate_single_period` | all routes | Confirm one linked accounting interval and require single-period records; no storage, replacement or termination. | error |

## 10. 已发布数据集配置

| Field | Value |
| --- | --- |
| dataset_role | foreground cotton production dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | studies matching route, geography, grade and technology |
| excluded_use | yarn, fabric or oil without downstream processes; substitution between seed cotton and lint |
| required_metadata | route, gate, crop year, cultivar, irrigation, harvest, moisture, grade, gin technology, allocation and destinations |
| required_quality_disclosure | coverage, calibration, route weights, balance, emission tier, allocation sensitivity and unresolved identities |
| update_trigger | changed agronomy, technology, yield, grade, markets, allocation, emission method or identity |

证据适用性：引用的一般农场记录和采后框架不提供作物特定的产量、寿命、交接截止点或 LCA 分配默认值。这些属于本 PCR 的方法选择，应按实际物种、路线和期间限定，取得兼容的农艺证据后才能声称完整。作者暂定范围仅为筛查辅助，不是经验验收限值，也不能替代实测。

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `usda-cotton-ginning` | official guidance | USDA Cotton Ginners Handbook | ginning boundary and records |
| `ipcc-2019-refinement` | method_factor | IPCC 2019 Refinement, Volume 4 | field emissions |
| `iso-14044` | standard | ISO 14044:2006 | allocation |
| `mass-balance-identity` | method_factor | conservation of mass with moisture adjustment | balances and normalization |

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `declared-handoff-measurement-definition` | `method_factor` | 本 PCR 第 3、6、8 节的净质量归一化定义：同一状态、同一交接门的实测净质量作为自身归一化分母，质量比为 1；交接计量不增加物理工序。 | 同阶段和交接计量恒等式；属于定义，不是实测产率、经验默认值或外部文献。 |
| `fao-gap-framework-2003` | official_guidance | FAO Committee on Agriculture, COAG/2003/6, Development of a Framework for Good Agricultural Practices, section IV paragraphs 24–26 and Annex, https://www.fao.org/4/y8704e/y8704e.htm | 仅为一般监测和农场记录背景；作物特定路线、寿命、数量范围及 LCA 分配属于 PCR 选择，须补充适用证据。 |
| `cotton-gin-energy` | handbook | Funk and Hardin (2017), Energy Utilization and Conservation in Cotton Gins, Cotton Ginners Handbook. https://www.cotton.org/journal/2017-21/2/156.cfm | 支持电动输送、轧花设备及独立干燥需求，不强制采用每包强度或特定燃料身份。 |
| `route-energy-fao` | official_guidance | FAO, Energy-smart food for people and climate (2011), Annex 2; and Energy use in agriculture and industry, Annex IV. https://www.fao.org/4/i2454e/i2454e00.pdf ; https://www.fao.org/4/Q1085e/q1085e0d.htm | 仅支持设备及载能体可能性，适用性由现场记录确定；不采用能耗强度、燃料比例或默认组合。 |
