---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-nuts-excluding-wild-edible-nuts-and-groundnuts-in-shell
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他带壳坚果（不包括野生食用坚果和落花生）

## 1. 范围与适用性

本PCR覆盖一个明确声明的残余栽培坚果物种和批次，交付时包围果仁的硬壳保持完整。路线可在采收后于农场门结束，也可包括适合该物种的肉质或纤维质外果皮去除、干燥、分级和包装后交付。排除每种已有独立CPC叶节点的坚果、野生食用坚果、落花生、果仁或其他去壳坚果、加工坚果食品以及混合物种产品。

数据集必须表示一个物种、果园或种植园系统、采收年度、批次或汇总规则、外果皮/硬壳状态、含水率基准、等级和交付点。不得利用该残余类别混合不同物种、湿态与干态，或农场门与调理设施门。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-nuts-excluding-wild-edible-nuts-and-groundnuts-in-shell |
| classification_refs | CPC 3.0: 01379 其他带壳坚果（不包括野生食用坚果和落花生）; mapping relation: exact |
| covered_products | 一个声明的栽培残余坚果物种，包括仅在属于CPC 01379时的槟榔、可乐果、银杏果、澳洲坚果、美洲山核桃、意大利松子或松子 |
| excluded_products | 已有具名CPC叶节点的坚果；野生食用坚果；落花生；去壳果仁；加工坚果；混合物种批次 |
| representative_product | 一个声明的栽培残余坚果物种，硬壳完整 |
| production_route | 受管理多年生栽培与采收，并按条件包括去外果皮、干燥、分级和包装 |
| market_state | 农场门鲜品，或声明农场/初级调理设施门的调理/干燥带壳产品 |

农场门鲜品路线和调理/干燥路线可并存，但一个数据集只能选择一个终端状态和交付点。物种特定脱外果皮，以及被动、环境或加热干燥属于替代技术；除非前景路线实际同时采用，否则不得合并。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 所选终端交付点的一个声明栽培残余带壳坚果物种 |
| How much | 1,000 kg按接收状态计的合格产品 |
| How well | 声明物种、必要时品种、产地、果园系统、采收年度、批次、外果皮状态、完整硬壳状态、含水率基准、等级、包装形式和交付点 |
| How long or cycle | 一个生产采收年度以及交付点前包括的匹配采后批次 |
| reference_flow_link | `reference_product_at_declared_handoff` |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1000 |
| Reference product flow | 其他坚果（不包括野生坚果和落花生），带壳 `85d33932-8c99-4207-8011-1bec84102f55` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 物种；必要时品种；产地；果园或种植园系统；采收年度；批次/汇总规则；外果皮状态；硬壳完整性；含水率及基准；等级；包装形式；交付点；包含作业 |

固定流识别残余CPC类别及鲜品/未加工农场门概念。包括后续调理时，数据集必须披露改变后的状态和实际交付点，不得暗示物种中性的干燥产品规格。

唯一参考产出为 `declared_reference_handoff` 的 `reference_product_at_declared_handoff`，它仅对既有声明交接点的实际合格产品作必需计量。`grading_packing` 的实体活动仍为条件性活动；省略该活动不取消参考产出。选择实际最后纳入的产品交接并记录过程/产出 id，物种、物理状态、等级、含水率基准及交接点必须与第3节一致。原 `reference_product_output` 行仅在其作业实际发生时记录该作业实测产出，不是另一笔最终销售。旁路不新增加工、得率假设或负担，也不改变产品边界。

## 4. 计量与单位规则
| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass_as_received` | 终端带壳坚果 | Mass | kg | 报告按接收状态计的合格质量和实测含水率；保留含水率基准用于干物质比较。 |
| `shell_state_identity` | 所有产品质量 | Mass | kg | 区分可去除外果皮与硬壳；合格参考产品保留硬壳。 |
| `area_to_reference_conversion` | 果园流 | 活动特定属性 | 活动特定单位 | 将年度生产面积总量归一到同一采收年度和合格终端质量。 |
| `nutrient_content_basis` | 养分投入 | 养分质量 | kg N、kg P2O5、kg K2O | 分别保留产品质量、配方、含量和元素或氧化物基准。 |
| `batch_mass_balance` | 脱外果皮、干燥、分级、包装 | Mass | kg | 将进料质量核算至合格等级、降级产品、剔除物、去除外果皮和水分损失，不得将蒸发水计为废物。 |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 报告期开始时已建成并处于生产期的果园或种植园；年化建园和补植投入跨越边界 |
| starting_condition_role | 声明生产采收年度的起点 |
| product_classification_scope | 属于CPC 01379且保留硬壳的一个栽培残余坚果物种 |
| recursive_input_rule | 同类别带壳坚果投入链接至其实际状态和交付点的独立上游数据集，不通过本PCR重复创建 |
| upstream_dataset_requirement | 种植材料、养分、植保、灌溉、能源、包装以及外部处理废物的兼容数据集 |
| disclosure | 物种；果园系统；树龄和生产面积；地理；采收年度；分摊期间；产量；外果皮/硬壳状态；含水率；等级；交付点；调理路线；批次；剔除物；包装；共享资产 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_species_lot` | 所有路线 | 仅包括一个残余栽培坚果物种和声明批次或汇总规则；排除具名CPC坚果叶节点、野生坚果、落花生和混合物种汇总。 |  |
| `boundary_productive_period` | 果园路线 | 包括归属于声明采收年度的年度生产作业、采收、直接田间排放、年化建园和补植负荷。 |  |
| `boundary_postharvest` | 调理路线 | 仅包括声明交付点前实际进行的去外果皮、清洁、干燥、分级和包装；保留匹配批次平衡和含水状态。 | `fao-codex-tree-nut-aflatoxin` |
| `boundary_food_safety` | 干燥与贮存 | 记录采收到干燥的时间、干燥方法、终点含水率、贮存条件和霉变剔除物，以评估污染预防。 | `fao-codex-tree-nut-aflatoxin` |
| `boundary_downstream_exclusion` | 所有路线 | 在破硬壳、果仁分离、烘烤、盐渍、食品制造、分销、零售和消费之前停止。 |  |
| `boundary_direct_emissions` | 土壤和现场燃烧 | 使用与清单相同的养分、残余物和燃料记录计算管理土壤与现场燃烧排放。 | `ipcc-2019-managed-soils`; `emep-eea-2023-guidebook`; `ipcc-2006-stationary-combustion` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `orchard_production_harvest` | 受管理坚果生产与采收 | `required` | 始终 | 多年生作物生产与采收 | 生产面积和一个采收年度 |
| `primary_hulling_drying` | 初级脱外果皮与干燥 | `conditional` | 在声明的交付点前进行去外果皮或干燥 | 调理并稳定带硬壳坚果 | 匹配的进料批次与合格带壳批次 |
| `grading_packing` | 分级与包装 | `conditional` | 在声明的交付点前进行分级或包装 | 区分等级并准备交付 | 匹配的进料、各等级、剔除物和包装质量 |
| `declared_reference_handoff` | 声明交接点合格产品计量 | required | 每条实际选定路线，包括条件处理/包装/储存的旁路 | 仅计量及核对，不新增实体加工 | 1000 kg 同一声明交接点净合格产品 |

### 过程：受管理坚果生产与采收 (`orchard_production_harvest`)

#### 输入
##### 产品流

###### 补植和建园用种植材料 (`planting_material_input`)

仅记录在评估期内进入系统的苗木、嫁接苗、种子或砧木，并区分建园与补植。

- 选定流：物种特定坚果种植材料
- 流属性/单位: Mass or number / kg or item
- 数量规则: 按物种、苗龄和建园用途计量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
原始活动或阶段基准：每生产公顷和报告期.

- 归一化基准：每声明的参考流
- 基准类型: `crop_cycle`
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_orchard_inputs`
- 数量范围: 种植材料暂定筛查范围
  - 范围角色: 质量保证护栏 (`qa_guardrail`)
  - 下限: 0
  - 上限: 2000
  - 单位: items/ha·year
  - 基准: 年化建园与补植植株数
  - 基准类型: `crop_cycle`
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 灌溉水 (`irrigation_water_input`)

记录施用于生产面积的水量，并与有效降雨区分。

- 选定流：灌溉供水
- 流属性/单位: Volume / m3
- 数量规则: 计量或计算施用灌溉水量；雨养系统以证据记录为零
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每生产公顷和采收年度.

- 归一化基准：每声明的参考流
- 基准类型: `crop_cycle`
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_orchard_inputs`
- 数量范围: 灌溉暂定筛查范围
  - 范围角色: 质量保证护栏 (`qa_guardrail`)
  - 下限: 0
  - 上限: 15000
  - 单位: m3/ha·year
  - 基准: 一个生产采收年度
  - 基准类型: `crop_cycle`
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 柴油 (`field_energy_input_diesel`)

实际柴油果园机械的地表管理、喷施、采收或内部搬运；启用前确认坚果种类及设备。

仅在本节点设备及采购记录确认使用此燃料时启用。记录牌号、配方、供应商及实际质量，体积按有证据的密度换算，不用默认密度。UUID标识燃料产品，不是燃烧服务或排放因子；实际前景燃烧另行计入，避免重复已含燃烧的上游服务。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按`cp_orchard_inputs`仅采集归属本节点的该载能体数量。包含能耗的服务及共用量仅对账归属一次；归属量乘声明参考数量，再除以相同产品单位下匹配的最终合格产出数量。保留过程原生吞吐记录，不对最终参考量再次归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：per declared reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_orchard_inputs`
- 来源：`route-energy-fao`

执行第8节`field_energy_input_identification`要求。不继承原集合卡的数值范围或默认值。

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 初级调理前采收坚果 (`harvested_nuts_output`)

记录声明物种以及肉质或纤维质外果皮是否仍保留；包围果仁的硬壳保持完整。

- 选定流：已收获的其他栽培坚果物种
- 流属性/单位: Mass / kg
- 数量规则: 计量合格采收质量并记录含水率与外果皮状态
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每生产公顷和采收年度.

- 归一化基准：每声明的参考流
- 基准类型: `crop_cycle`
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_harvest_records`
- 数量范围: 采收产量暂定筛查范围
  - 范围角色: 质量保证护栏 (`qa_guardrail`)
  - 下限: 100
  - 上限: 20000
  - 单位: kg/ha·year
  - 基准: 声明采收时状态
  - 基准类型: `crop_cycle`
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 果园残余物与采收剔除物 (`orchard_residue_output`)

按去向分别记录修剪物、落地物、剔除坚果和附带生物质。

- 选定流：果园残余物及废弃收获材料
- 流属性/单位: Mass / kg
- 数量规则: 按残余物类别和去向计量或核算质量
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每1000 kg合格采收坚果.

- 归一化基准：每声明的参考流
- 基准类型: `process_output`
- 证据类型: 依据采集计算 (`calculated_from_collection`)
- 采集协议: `cp_harvest_records`
- 数量范围: 残余物暂定筛查范围
  - 范围角色: 质量保证护栏 (`qa_guardrail`)
  - 下限: 0
  - 上限: 3000
  - 单位: kg/1,000 kg accepted harvest
  - 基准: 按去向记录全部非产品生物质和剔除物
  - 基准类型: `process_output`
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流

###### 排放至空气的氧化亚氮 (`soil_n2o_output`)

使用相同养分和残余物记录计算管理土壤直接及适用的间接N2O。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位: Mass / kg N2O
- 数量规则: 对采集的氮投入和残余物采用适用管理土壤方法
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每生产公顷和采收年度.

- 归一化基准：每声明的参考流
- 基准类型: `n_input`
- 证据类型: 依据采集计算 (`calculated_from_collection`)
- 采集协议: `cp_orchard_emissions`
- 来源: `ipcc-2019-managed-soils`
- 数量范围: 宽幅方法结果筛查范围
  - 范围角色: 质量保证护栏 (`qa_guardrail`)
  - 下限: 0
  - 上限: 150
  - 单位: kg N2O/ha·year
  - 基准: 以方法计算为准
  - 基准类型: `crop_cycle`
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 排放至空气的氨 (`ammonia_air_output`)

按肥料产品、施用方式、天气和所选因子计算挥发。

- 选定流：氨 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位: Mass / kg NH3
- 数量规则: 对采集的氮投入采用适用挥发方法
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每生产公顷和采收年度.

- 归一化基准：每声明的参考流
- 基准类型: `n_input`
- 证据类型: 依据采集计算 (`calculated_from_collection`)
- 采集协议: `cp_orchard_emissions`
- 来源: `emep-eea-2023-guidebook`
- 数量范围: 宽幅方法结果筛查范围
  - 范围角色: 质量保证护栏 (`qa_guardrail`)
  - 下限: 0
  - 上限: 300
  - 单位: kg NH3/ha·year
  - 基准: 以方法计算为准
  - 基准类型: `crop_cycle`
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 排放至水体的硝酸盐 (`nitrate_water_output`)

仅采用地点适用的淋溶或径流方法计算或监测硝酸盐损失。

- 选定流：硝酸根 `fe0acd60-3ddc-11dd-aa31-0050c2490048`
- 流属性/单位: Mass / kg nitrate
- 数量规则: 所选淋溶/径流方法或监测平衡
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每生产公顷和采收年度.

- 归一化基准：每声明的参考流
- 基准类型: `n_input`
- 证据类型: 依据采集计算 (`calculated_from_collection`)
- 采集协议: `cp_orchard_emissions`
- 来源: `ipcc-2019-managed-soils`
- 数量范围: 宽幅方法结果筛查范围
  - 范围角色: 质量保证护栏 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1500
  - 单位: kg nitrate/ha·year
  - 基准: 以所选方法为准
  - 基准类型: `crop_cycle`
  - 证据类型: 推理估算 (`reasoned_estimate`)

### 过程：初级脱外果皮与干燥 (`primary_hulling_drying`)

#### 输入
##### 产品流

###### 进入初级调理的采收坚果 (`conditioning_nuts_input`)

记录匹配的进料批次，包括物种、外果皮状态、硬壳状态、含水率和来源。

- 选定流：已收获的其他栽培坚果物种
- 流属性/单位: Mass / kg
- 数量规则: 计量进料批次质量和含水率
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每个调理批次并换算至合格产品.

- 归一化基准：每声明的参考流
- 基准类型: `process_output`
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning_records`
- 数量范围: 进料产出比暂定范围
  - 范围角色: 质量保证护栏 (`qa_guardrail`)
  - 下限: 1
  - 上限: 3
  - 单位: kg incoming/kg accepted in-shell nuts
  - 基准: 匹配批次；声明外果皮状态
  - 基准类型: `process_output`
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 调理与清洁用水 (`conditioning_water_input`)

仅记录用于清洗、湿式清洁或调理的供应工艺水；干式路线可记录为零。

- 选定流：生产用水供应
- 流属性/单位: Volume / m3
- 数量规则: 计量或按批次计算用水；路线不启用时为零
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每1000 kg合格带壳坚果.

- 归一化基准：每声明的参考流
- 基准类型: `process_output`
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning_records`
- 数量范围: 路线条件用水筛查范围
  - 范围角色: 质量保证护栏 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10
  - 单位: m3/1,000 kg accepted product
  - 基准: 干式路线为零
  - 基准类型: `process_output`
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 交流电 (`conditioning_energy_input_electricity`)

实际电动脱壳设备及干燥风机，分作业保留记录；干燥热载体按实际加热器确认。

仅对本节点有记录的交流用电启用。该身份未特指电压、技术及供应方，须记录并选择兼容上游供应。保留实测kWh，按1 kWh = 3.6 MJ准确换算为MJ；不得将电能视为燃烧燃料或有效热。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性 / 单位：能量（数据库参考属性：净热值） `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：按`cp_conditioning_records`仅采集归属本节点的该载能体数量。包含能耗的服务及共用量仅对账归属一次；归属量乘声明参考数量，再除以相同产品单位下匹配的最终合格产出数量。保留过程原生吞吐记录，不对最终参考量再次归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：per declared reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_conditioning_records`
- 来源：`route-energy-fao`

执行第8节`conditioning_energy_input_identification`要求。不继承原集合卡的数值范围或默认值。

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 调理后的带壳坚果 (`conditioned_in_shell_output`)

记录完成所需去外果皮和干燥后的声明物种；硬壳保持完整。

- 选定流：其他带壳坚果，不含野生食用坚果及花生
- 流属性/单位: Mass / kg
- 数量规则: 计量合格质量、含水率、外果皮状态和交付点
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
原始活动或阶段基准：按匹配批次；适用时换算至1000 kg终端产品.

- 归一化基准：每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning_records`
- 数量范围: 调理产品产出比例
  - 范围角色: 质量保证护栏 (`qa_guardrail`)
  - 下限: 0.3
  - 上限: 1
  - 单位: kg accepted/kg incoming harvest
  - 基准: 匹配的湿基至干基及脱外果皮平衡
  - 基准类型: `process_output`
  - 证据类型: 推理估算 (`reasoned_estimate`)

该行的实际中间状态或联产品等级须独立核实 UUID，不使用参考输出 UUID 代替。

##### 废物流

###### 去除的外果皮与调理剔除物 (`hulls_rejects_output`)

按去向分别记录外果皮、杂质、腐败坚果和其他剔除物；合格产品的硬壳不是废物。

- 选定流：移出外果皮及整理拒收物
- 流属性/单位: Mass / kg
- 数量规则: 按类别和去向计量并进行匹配物料平衡核算
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每1000 kg采收坚果进料.

- 归一化基准：每声明的参考流
- 基准类型: `process_output`
- 证据类型: 依据采集计算 (`calculated_from_collection`)
- 采集协议: `cp_conditioning_records`
- 数量范围: 物料平衡剔除物筛查范围
  - 范围角色: 质量保证护栏 (`qa_guardrail`)
  - 下限: 0
  - 上限: 700
  - 单位: kg/1,000 kg incoming harvest
  - 基准: 不包括蒸发水
  - 基准类型: `process_output`
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流

###### 现场干燥排放的化石二氧化碳 (`drying_fossil_co2_output`)

仅记录现场燃料燃烧产生的化石CO2；无现场化石燃料燃烧时为零。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位: Mass / kg CO2
- 数量规则: 燃料量乘以载体特定碳含量和氧化因子
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 技术特定 (`technology_specific`)
原始活动或阶段基准：每1000 kg合格带壳坚果.

- 归一化基准：每声明的参考流
- 基准类型: `fuel_inventory`
- 证据类型: 依据采集计算 (`calculated_from_collection`)
- 采集协议: `cp_conditioning_records`
- 来源: `ipcc-2006-stationary-combustion`
- 数量范围: 路线条件燃烧筛查范围
  - 范围角色: 质量保证护栏 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1500
  - 单位: kg fossil CO2/1,000 kg accepted product
  - 基准: 无现场化石燃料燃烧时为零
  - 基准类型: `fuel_inventory`
  - 证据类型: 推理估算 (`reasoned_estimate`)

### 过程：分级与包装 (`grading_packing`)

#### 输入
##### 产品流

###### 进入分级的带壳坚果 (`grading_nuts_input`)

记录匹配的物种特定批次及其含水率、外果皮状态、缺陷和前序调理。

- 选定流：已整理或农场门带壳坚果
- 流属性/单位: Mass / kg
- 数量规则: 计量进料批次质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每个分级批次并换算至包装产品.

- 归一化基准：每声明的参考流
- 基准类型: `process_output`
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_grading_records`
- 数量范围: 分级进料产出比暂定范围
  - 范围角色: 质量保证护栏 (`qa_guardrail`)
  - 下限: 1
  - 上限: 1.5
  - 单位: kg incoming/kg accepted packed nuts
  - 基准: 匹配批次
  - 基准类型: `process_output`
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 交流电 (`grading_energy_input_electricity`)

出口前实际电动输送、分选、称重及包装。

仅对本节点有记录的交流用电启用。该身份未特指电压、技术及供应方，须记录并选择兼容上游供应。保留实测kWh，按1 kWh = 3.6 MJ准确换算为MJ；不得将电能视为燃烧燃料或有效热。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性 / 单位：能量（数据库参考属性：净热值） `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：按`cp_grading_records`仅采集归属本节点的该载能体数量。包含能耗的服务及共用量仅对账归属一次；归属量乘声明参考数量，再除以相同产品单位下匹配的最终合格产出数量。保留过程原生吞吐记录，不对最终参考量再次归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：per declared reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_grading_records`
- 来源：`route-energy-fao`

执行第8节`grading_energy_input_identification`要求。不继承原集合卡的数值范围或默认值。

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 合格的其他带壳坚果 (`reference_product_output`)

仅在 `grading_packing` 作业实际发生时记录该作业实测合格产出，保留物种、状态、等级、含水率、批次和真实移出交接点。此稳定行 id 表示实际路线产出；唯一最终参考产出为 reference_product_at_declared_handoff。保留原始产出并关联选定最终批次，不作为另一份最终产品重复计数。所列 UUID 仅适用于已独立确认的物理状态/交接点；不相容的上游/中间状态须另行核实或明确保持身份未解析。保留原阶段计量及采集记录。

- 选定流：其他坚果（不包括野生坚果和落花生），带壳 `85d33932-8c99-4207-8011-1bec84102f55`
- 流属性/单位: Mass / kg
原始产出计量及核对：按 `cp_grading_records` 称量实际作业净合格批次产出，保留毛重/皮重、拒收、库存、含水率及匹配后续批次记录，在最终归一化前核对。

- 数量规则：按 `cp_grading_records` 实测实际作业净合格产出；保留原始批次数量及实际阶段处理量，依第8节最终交接归一化规则换算一次，不规定固定中间得率
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：实测实际作业/批次产出及处理量，在一次最终参考归一化前保留。

- 归一化基准：每声明的参考流
- 基准类型: `reference_flow`
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading_records`

###### 降级但可用的带壳坚果 (`downgraded_nuts_output`)

分别记录每种仍有用途的较低等级，不得计入合格参考产品。

- 选定流：按声明去向记录的降级带壳坚果
- 流属性/单位: Mass / kg
- 数量规则: 按等级和去向计量降级质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
原始活动或阶段基准：每1000 kg分级进料.

- 归一化基准：每声明的参考流
- 基准类型: `process_output`
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_grading_records`
- 数量范围: 降级产品暂定筛查范围
  - 范围角色: 质量保证护栏 (`qa_guardrail`)
  - 下限: 0
  - 上限: 500
  - 单位: kg/1,000 kg incoming batch
  - 基准: 匹配分级批次
  - 基准类型: `process_output`
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 分级与包装剔除物 (`grading_rejects_output`)

按处理去向分别记录不可用坚果、壳碎片、杂质和破损包装。

- 选定流：按声明去向记录的分级及包装拒收物
- 流属性/单位: Mass / kg
- 数量规则: 按类别和去向计量剔除物质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每1000 kg分级进料.

- 归一化基准：每声明的参考流
- 基准类型: `process_output`
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_grading_records`
- 数量范围: 剔除物暂定筛查范围
  - 范围角色: 质量保证护栏 (`qa_guardrail`)
  - 下限: 0
  - 上限: 300
  - 单位: kg/1,000 kg incoming batch
  - 基准: 匹配分级批次
  - 基准类型: `process_output`
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流

### 过程：声明交接点合格产品计量（`declared_reference_handoff`）
本计量不新增加工、废物产生或排放。保留全部真实上游作业和损失，仅旁路有据未发生的活动。选择一个实际终端产品批次，系统汇总时将其成对内部转移抵销一次；不得把未启用路线、共产品或来源产出与交接产出相加为合格最终产出。

#### 输入
##### 产品流
###### 同一交接点实际路线合格产品 (`actual_route_product_for_handoff`)

仅计量既有声明交接点的合格产品，并匹配一份实际终端来源记录。成对内部转移与本参考表示同一事件，不是两笔销售。按实际物种/状态/交接点独立核实身份；仅对鲜态农场门产品确认的标识不能代表不相容调理状态或独立包装场状态。身份缺失须明确保留，不得靠复制相邻产出的 UUID 解决。
- 选定流：其他坚果（不包括野生坚果和落花生），带壳 `85d33932-8c99-4207-8011-1bec84102f55`
- 流属性/单位：质量 / kg
- 数量规则：本同一交接点实测净合格质量，按 R/R × 1000 kg 归一化；成对投入与合格产出相等，保留原始 R
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_declared_reference_handoff`

##### 废物流
##### 基本流
#### 输出
##### 产品流
###### 声明交接点参考产品 (`reference_product_at_declared_handoff`)

仅计量既有声明交接点的合格产品，并匹配一份实际终端来源记录。成对内部转移与本参考表示同一事件，不是两笔销售。按实际物种/状态/交接点独立核实身份；仅对鲜态农场门产品确认的标识不能代表不相容调理状态或独立包装场状态。身份缺失须明确保留，不得靠复制相邻产出的 UUID 解决。
- 选定流：其他坚果（不包括野生坚果和落花生），带壳 `85d33932-8c99-4207-8011-1bec84102f55`
- 流属性/单位：质量 / kg
- 数量规则：1000 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_declared_reference_handoff`

##### 废物流
实际废物保留在其产生作业，不在此重复。
##### 基本流
实际释放保留在其负责的实体作业，不在此重复。

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_productive_year` | 多年生果园 | 将年度作业直接归属于声明生产年度；依据有记录的使用寿命和生产面积对建园、补植和共享多年生基础设施进行年化。 |  |
| `allocation_grade_outputs` | 分级 | 优先采用物理细分。一个不可分割批次产生多个有用等级时，报告各自质量并在批次内采用明确论证且一致的分配；不得将有用降级坚果归为废物。 |  |
| `allocation_hulls_residues` | 外果皮与残余物 | 无经济功能且丢弃时按残余物处理且不给予抵扣；作为联产品出售或利用时，披露去向并单独采用经评审的分配或替代情景。 |  |
| `allocation_shared_assets` | 共享设备与贮存 | 按实测运行时间、吞吐量、占用面积时间或其他因果驱动量分配；防止同一年度或批次负荷同时进入果园和调理节点。 |  |
| `allocation_rework` | 重新分级或再干燥物料 | 将返工归回产生该物料的批次，只计一次新增能源和损失，并仅在达到合格等级时计为产品。 |  |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_residual_precedence` | 未规定主方法分支的剩余共同负担 | 本 PCR 要求研究作联产品分配决策但未规定主方法的地方，统一执行以下优先顺序；已明确规定的类别专属主方法保持有效。先直接归属可分开的产出专属作业。剩余共同负担 B 只有在实测作业或生物服务记录证明驱动量 d_i 代表因果消耗时，才采用该物理驱动。产品可称量、有价值或等级较低本身均不构成因果依据，不能在面积、时间、质量和收入间任意切换。可比等级接受相同共同搬运服务时，仅在服务需求、状态及水分基准可比且有据时采用实测处理质量。份额 a_i=d_i/sum(d_j)，B_i=B*a_i。该共同作业没有可辩护的因果物理驱动时，采用同交接点、同期间经济份额 a_i=(q_i*p_i)/sum(q_j*p_j)，纳入全部独立预期产出，匹配数量/价格单位、币种和代表性价格，使用产出专属下游加工之前的价值。缺价格或分母证据使分配结果不完整，不能把产品价格记零或改称单一产出系统。披露合计为一的份额和重要替代方法敏感性；敏感性方法不是可任意替换的主结果。废物、留存残余和内部转移不获得联产品份额，其应归属的生产/处理负担仍保留在产出可售产品的路线中。未分配物理数量和质量平衡另行保留。本分支不自动给予替代信用；单独界定的替代情景须保留总清单及实际被替代功能证据。 | `ghg-protocol-product-standard-2011` |

## 8. 前景数据采集、计算与质量规则

### 完成数据集前确认具体投入身份

依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。

| requirement_id | collection_protocol_id | 保留的采集范围 |
| --- | --- | --- |
| `agricultural_nutrient_inputs_specific_input` | `cp_orchard_inputs` | 作业 orchard_production_harvest：各矿质肥料、有机肥料和含养分改良剂按具体产品分别列卡，并保留产品、含量、施用事件和养分基准。 原数量方法：每种施用产品只采集一次并计算声明养分量 |
| `crop_protection_input_specific_input` | `cp_orchard_inputs` | 作业 orchard_production_harvest：记录每种实际制剂、活性成分、浓度和施用事件；不指定通用固定身份。 原数量方法：按产品和施用事件计量制剂量 |
| `packaging_input_specific_input` | `cp_grading_records` | 作业 grading_packing：记录实际使用的袋、内衬、纸箱、周转箱、托盘或其他声明包装；由前景记录确定一个适用包装组和具体交换。 原数量方法：计量随合格产品交付的包装；可重复使用物按有据可查的周转次数分摊 |


### 按实际路线确认能源身份

按实际产品状态、作业、设备及供能记录选择能源交换。下列条件式卡片不是必用或穷尽的燃料清单。逐项记录适用性、所用载能体、供应商、服务期间、原生数量及分配；对于尚未表示的实际投入，须另建物理身份具体的卡片并核验UUID。未识别投入仍是明确的完整性缺口，不得记为零或笼统能源交换。人工、环境干燥或绕过某节点的证据，仅能支持相应作业的未使用结论。即使未列示例卡，也须保留全部必需作业的调查。

区分外购供能与现场转换。自产电力通过内部连接衔接前景发电过程，其实际燃料及排放只在发电节点计入一次；同一内部转移不得再计外购电力供应。外购热亦不得重复计入供应商侧燃料。将共用电表、承包服务已含能耗与现有卡片对账，同一物理数量仅归属一次。保留原始量、输出吞吐、共用服务分配及出口后活动排除要求。逐载能体仅进行一次期间与输出归属，以相同产品单位下匹配的最终合格产出缩放至声明参考数量，不再次归一化已归一化数量。过程原生强度须通过实测吞吐衔接最终产出。这些要求不设用量默认值，也不证明数据集完整。

| requirement_id | collection_protocol_id | 必需作业及证据 |
| --- | --- | --- |
| `field_energy_input_identification` | `cp_orchard_inputs` | 实际柴油果园机械的地表管理、喷施、采收或内部搬运；启用前确认坚果种类及设备。 原始活动或阶段基准：每生产公顷和采收年度. (`route-energy-fao`) |
| `conditioning_energy_input_identification` | `cp_conditioning_records` | 实际电动脱壳设备及干燥风机，分作业保留记录；干燥热载体按实际加热器确认。 原始活动或阶段基准：每1000 kg合格带壳坚果. (`route-energy-fao`) |
| `grading_energy_input_identification` | `cp_grading_records` | 出口前实际电动输送、分选、称重及包装。 原始活动或阶段基准：每1000 kg包装坚果. (`route-energy-fao`) |


先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_orchard_inputs` | `orchard_production_harvest` | 建园、养分、水、植保、能源 | 发票、田间日志、仪表、承包记录 | 物种、品种、地块、生产面积、树龄、投入身份、配方、含量、数量、单位、日期、载体、用途 | 将采购和施用记录核对至地块；原始汇总与分配：按地块和投入汇总，建园年化后除以合格终端质量 按路线确认要求：`field_energy_input_identification`: 实际柴油果园机械的地表管理、喷施、采收或内部搬运；启用前确认坚果种类及设备。 原始活动或阶段基准：每生产公顷和采收年度. (`route-energy-fao`) 对每项适用投入核验实际使用、设备及供能，完成数据集前须按每种实际载能体分别建立具体交换。身份或数量证据缺失仍为待补证，不记为零。区分外购供应、内部发电及承包服务包含项，仅计入一次能耗；不以条件式示例替代未核实路线。 `agricultural_nutrient_inputs_specific_input`: 作业 orchard_production_harvest：各矿质肥料、有机肥料和含养分改良剂按具体产品分别列卡，并保留产品、含量、施用事件和养分基准。 原数量方法：每种施用产品只采集一次并计算声明养分量 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 `crop_protection_input_specific_input`: 作业 orchard_production_harvest：记录每种实际制剂、活性成分、浓度和施用事件；不指定通用固定身份。 原数量方法：按产品和施用事件计量制剂量 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 | 原始单位及ha | 每次事件 | 完整声明采收年度；保留建园年化期间 | 每个纳入的果园地块和共享服务 | 每声明的参考流 | 发票、经校准仪表记录、施用日志、面积图、使用寿命证据 |
| `cp_harvest_records` | `orchard_production_harvest` | 采收、合格产品、残余物、剔除物 | 称量单、采收日志、采样记录 | 物种、地块、日期、毛重/皮重、合格质量、外果皮状态、含水率、等级、剔除/残余物类别、去向 | 校准称量和代表性含水率采样；原始汇总与分配：按批次汇总合格与非产品质量；保留物种和状态 | kg、%、ha | 每批 | 完整采收期 | 每个纳入果园地块和收集点 | 每声明的参考流 | 校准证书、批次ID、含水率记录、去向记录 |
| `cp_orchard_emissions` | `orchard_production_harvest` | 土壤和养分排放 | 计算型前景记录 | 按形态的氮投入、残余物、土壤/气候参数、因子版本、可用时的监测损失 | 对`cp_orchard_inputs`采用有记录的适用方法；原始汇总与分配：按地块计算后按终端产品质量加权 | kg物质 | 每报告年度 | 同一采收年度及方法规定的相关滞后期 | 每个纳入的管理地块 | 每声明的参考流 | 因子来源、计算工作簿、投入核对、评审检查 |
| `cp_conditioning_records` | `primary_hulling_drying` | 脱外果皮、清洁、干燥、产出、剔除物、排放 | 批次表、秤、仪表、燃料记录、含水率测试 | 物种、批次、进料质量/含水率/外果皮状态、方法、时间、温度、水、载体、能源、合格质量/含水率、外果皮、剔除物、去向 | 匹配批次测量和物料平衡；原始汇总与分配：按批次核算干物质和损失，再按吞吐量加权 按路线确认要求：`conditioning_energy_input_identification`: 实际电动脱壳设备及干燥风机，分作业保留记录；干燥热载体按实际加热器确认。 原始活动或阶段基准：每1000 kg合格带壳坚果. (`route-energy-fao`) 对每项适用投入核验实际使用、设备及供能，完成数据集前须按每种实际载能体分别建立具体交换。身份或数量证据缺失仍为待补证，不记为零。区分外购供应、内部发电及承包服务包含项，仅计入一次能耗；不以条件式示例替代未核实路线。 | kg、%、m3、kWh、MJ | 每批 | 数据集代表的所有批次 | 每条纳入的调理线/场址 | 每声明的参考流 | 秤和仪表校准、含水率方法、批次ID、燃料发票、平衡闭合 |
| `cp_grading_records` | `grading_packing` | 等级、返工、包装、剔除物、能源 | 批次表、秤记录、包装规格 | 物种、批次、进料质量、等级准则、合格/降级/剔除质量、返工、包装身份/质量/复用、能源、去向 | 匹配分级运行核算；原始汇总与分配：按等级和去向汇总；共享运行按实测吞吐量分配 按路线确认要求：`grading_energy_input_identification`: 出口前实际电动输送、分选、称重及包装。 原始活动或阶段基准：每1000 kg包装坚果. (`route-energy-fao`) 对每项适用投入核验实际使用、设备及供能，完成数据集前须按每种实际载能体分别建立具体交换。身份或数量证据缺失仍为待补证，不记为零。区分外购供应、内部发电及承包服务包含项，仅计入一次能耗；不以条件式示例替代未核实路线。 `packaging_input_specific_input`: 作业 grading_packing：记录实际使用的袋、内衬、纸箱、周转箱、托盘或其他声明包装；由前景记录确定一个适用包装组和具体交换。 原数量方法：计量随合格产品交付的包装；可重复使用物按有据可查的周转次数分摊 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 | kg、item、kWh | 每次运行或批次 | 数据集代表的所有分级和包装运行 | 每条纳入的生产线/场址 | 每声明的参考流 | 秤校准、等级检验、包装规格、批次关联、平衡闭合 |
| `cp_phase1_environment_coverage` | orchard_production_harvest | 按实际节点的管理环境覆盖 | 场址活动方法台账 | 实际生产节点；土壤/介质路线；气候土壤；肥料产品量及组成；残体去向及氮；相关矿化/有机土/排泄活动；方法层级方程版本；路径因子及单位；石灰尿素；实际燃料；物质/环境；供应覆盖 | 按实际负责生产节点及匹配批次/期间采集原始记录，保留来源、方法适用性和不确定性。与现有协议及供应覆盖核对，不新增重复事件；不适用须明示有据，缺少证据属于缺口。 | 适用的原生活动单位、kg N或物质、面积/时间 | 事件及年度/批次核对 | 匹配生产/队列期间 | 全部实际管理生产节点 | 执行适用覆盖核算后最终归一化一次 | 原始记录、方法工作表及适用性证据 |

### 计算规则

| rule_id | 适用对象 | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_area_normalization` | 果园流 | 年度地块总量 / 同一采收年度合格终端质量 × 1,000 | 地块投入或排放；合格终端质量 | 每1000 kg参考产品的数量 |  |
| `calc_establishment_annualization` | 建园与多年生资产 | 归属数量 / 有记录的生产使用年限，再按生产面积分配 | 建园数量；使用寿命；面积 | 年度负荷 |  |
| `calc_batch_mass_balance` | 调理与分级 | 进料质量 = 合格 + 降级 + 剔除 + 去除外果皮 + 实测或计算水分损失 ± 闭合误差 | 匹配批次质量和含水率 | 核算后的批次清单 | `mass-balance-identity` |
| `calc_dry_matter` | 含水率换算 | 按接收质量 ×（1 − 湿基含水率） | 质量；实测含水率及基准 | 干物质质量 | `mass-balance-identity` |
| `calc_fossil_co2` | 现场干燥燃烧 | 燃料量 × 净热值 × 碳因子 × 氧化因子 × 44/12（因子为碳质量时） | 能源载体记录；所选因子 | kg化石CO2 | `ipcc-2006-stationary-combustion` |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | 最终基本交换使用已识别物质的质量和一个实际接收环境，养分／活动台账另存：该物种的 N2O-N × 44/28 为 N2O，NH3-N × 17/14 为 NH3，硝酸盐氮 × 62/14 为硝酸盐，磷酸盐磷 × 95/31 为磷酸盐。若选定流为元素磷，则报告 kg P，仅在物种口径有据时将磷酸盐质量乘 31/95。只有方法输出按元素计时才换算一次，实测化合物质量不得再换算。总养分损失不得无据归于单一物种，土壤残余／留存养分不是排放。保留直接／间接路径台账，不重复所选方法或上游清单已经包含的路径。因子不确定性范围只按其声明基准检查因子，不是最终化合物数量或场址排放的允许界限。用合格参考数量和匹配实测产出，将可归属化合物质量归一化一次。活动量、身份或接收环境未知时保留证据缺口，不得宣称完整。 | `cp_orchard_emissions`; 物种特定活动量台账、方法路径和因子基准、匹配合格产出 | 按身份区分的交换和对账活动记录 |  |

### 环境覆盖计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_managed_environment_coverage` | 实际管理生产节点 | 针对实际自主管理生产节点，逐项记录土壤直接 N2O、挥发/沉降间接 N2O、淋溶/径流间接 N2O、NH3/NOx 与养分损失，以及实际施石灰/尿素 CO2 的适用性。主核算依次采用有代表性的路径实测、经验证且适用于作物/土壤/管理的场址或国家方法；否则 N2O 与石灰/尿素 CO2 采用适用的2006 IPCC及2019修订管理土壤方程，按气候和投入类别选因子。保留确切版本、方程、层级、活动量及因子单位和气候/管理适用性，不规定通用剂量或因子。无土/设施路线须采用适用于实际介质的方法，不强套土壤因子。化肥、有机投入、残体、实际相关矿化/有机土和排泄物路径使用同一田块期间氮台账；路径不适用须证明，缺数不能填零。直接及各间接分量分别计算，逐项只分配到匹配的现有或新增具体卡一次，不将总量与组成重复相加。N2O-N 乘44/28转分子 N2O 一次。NH3、NOx及养分/农药损失采用适用实测或有据物质/去向模型；总N/P或未解释平衡差不等于某化合物释放。保留实际接收环境及分子、元素或报告口径，间接形成不能在来源台账再扣同一氮。实际本地燃烧另按燃料特定的燃烧方法记录；外购电、热和服务承接上游覆盖一次。有据释放按具体身份建卡，复用现有匹配卡，采用已核实UUID或明确未决身份。适用方法、活动量、因子或身份缺失会阻止完整性，不构成有据零值；原始活动/释放总量归属后按匹配合格参考产出归一化一次。 | cp_phase1_environment_coverage | 按匹配最终参考量的应归属原生环境数量 | `review-ipcc-soils-2019` |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 必须明确植物学/通用物种、必要时品种、批次、CPC残余类别资格、硬壳状态、外果皮状态、含水率、等级和交付点。 | 产品规格、批次记录、照片或检验记录 |
| `dq_completeness` | 所有过程 | 核对声明期间的生产面积、采收、每个调理/分级批次、能源、水、剔除物和去向。 | 完整性清单和物料平衡闭合 |
| `dq_temporal` | 多年生路线 | 使用一个代表性采收年度或披露有论证的多年平均；平均前保留年度特定产量和投入记录。 | 带日期记录和平均计算表 |
| `dq_measurement` | 质量与含水率 | 使用校准秤和有记录的代表性含水率方法；披露湿/干基和采样频率。 | 校准与采样记录 |
| `dq_route` | 条件作业 | 仅包括实际进行的脱外果皮、干燥、分级、包装、返工和贮存活动，并披露未启用节点。 | 过程图、批次日志、交付点声明 |

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_declared_reference_handoff` | `declared_reference_handoff` | 实际合格终端产品及成对转移 | 称量/批次/验收记录 | 物种；状态；等级；含水率/基准；交接点；actual_terminal_process_id；actual_terminal_output_row_id；lot/transfer_id；毛/皮/净质量 R；阶段原始总量/吞吐量；库存、拒收及去向 | 在既有交接点称量净合格 R，匹配唯一实际同批次/同状态终端来源，并核对前序损失及库存。若未发生条件性准备，采用最后实际纳入的适格产品产出，不虚构该准备作业。保留原活动记录及全部必需限定项。 | kg 及原生活动单位 | 每个合格批次 | 匹配生产及交接期间 | 既有声明生产者/初级交接点 | 每声明的参考流 | 校准称量、验收/等级记录、批次链、启用/旁路证据及闭合平衡 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_final_handoff_normalization` | 全部前景数量及实际路线产出 | R 为匹配单一物种/状态/等级/交接点/期间且实测为正的合格最终质量 kg，剔除皮重、拒收、共产品及留存库存。物理台账＝原始物理数量/R×1000 kg，不乘负荷分配份额；归属清单贡献＝可归属原始数量/R×1000 kg，保留分子原生单位及原有产品/期间归属。阶段强度 q_i＝Q_i/O_i 须先按实际关联 O_i 还原 Q_i＝q_i×O_i；已最终归一化后不得再次除以 R。交接两侧均为同一实测事件 R/R×1000 kg，不是另一实体得率。仅纳入实际启用作业，旁路须记录并有据。R 缺失/非正或终端记录未关联会阻断完整归一化结果，不能记零。保留原始阶段数据，成对内部转移抵销一次。 | cp_declared_reference_handoff; original linked collection protocols | 按声明最终参考报告的原生数量 | `declared-handoff-measurement-definition` |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | severity |
| --- | --- | --- | --- |
| `validate_residual_identity` | 参考产品 | 数据集未指定一个栽培物种并证明其不属于具名CPC坚果叶节点、野生坚果、落花生、去壳果仁或混合批次时拒绝。 | error |
| `validate_shell_state` | 参考产品 | 缺少硬壳完整性、外果皮状态、含水率基准、等级或终端交付点，或信息内部不一致时拒绝。 | error |
| `validate_reference_mass` | 终端产出 | 合格参考产出必须等于1000 kg，并排除尚未合格的降级、剔除和返工物料。 | error |
| `validate_route_activation` | 条件节点 | 脱外果皮、干燥、分级、包装及其投入/排放在未启用时必须为零或不存在；启用时必须有匹配批次记录。 | error |
| `validate_nutrient_binding` | 果园养分 | 分别核验每种实际交换的具体流 UUID、物理状态、流属性和单位；未确认时明确保留未解析身份。 | error |
| `validate_mass_balance` | 采收、调理、分级 | 将合格、降级、剔除、外果皮、残余物和水分损失项与进料质量核对，并披露闭合误差。 | error |
| `validate_ranges` | 所有清单卡 | 超出范围的值应标记复核；暂定范围仅用于筛查，不得替代前景证据或作为生产限值。 | warning |
| `validate_uuid_use` | 固定绑定 | 确认UUID、流类型、属性、类别、状态和交付点；过程发布前将参数化卡解析为经核实的具体UUID。 | error |
| `validate_multi_period` | 多年生负荷 | 建园、补植或共享基础设施在不同采收年度间重复归属时拒绝。 | error |


| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_final_handoff_bypass` | 实际选定路线及全部条件旁路状态 | 按实际记录检查可选处理/包装/储存启用及省略两种状态：始终保留唯一必需交接参考；来源产品/状态/交接点与第3节一致；启用的实体行保留实测吞吐量，未启用实体活动不新增交换。要求原始合格质量、上游闭合、唯一转移配对及一次最终归一化；未知状态或缺少身份不得当作已成立分支。 | `declared-handoff-measurement-definition` |

## 10. 发布数据集概况

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个声明栽培残余带壳坚果物种的前景产品系统 |
| downstream_use | `secondary_dataset`；仅在物种、路线、状态、地理和交付点与接收研究匹配时用作`background_dataset` |
| allowed_use | 在声明物种、状态、技术、期间、地理和交付点内进行比较与供应链建模 |
| excluded_use | 无组成证据的物种中性平均；具名CPC坚果；野生坚果；落花生；去壳果仁；加工坚果；湿/干状态或农场/调理交付点之间的替代 |
| required_metadata | 物种、品种、产地、果园系统、生产面积和树龄、采收年度、批次/汇总、外果皮和硬壳状态、含水率基准、等级、交付点、过程启用、分配、包装、UUID解析 |
| required_quality_disclosure | 覆盖率、测量方法、缺失数据、范围例外、批次物料平衡闭合、多年平均、共享资产归属、分配选择、未解析身份 |
| update_trigger | 物种/类别修正、交付点或路线变化、重大技术变化、新代表性记录、排放因子修订、重大产量/含水率变化或经核实身份变化 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-codex-tree-nut-aflatoxin` | official_guidance | Codex Alimentarius / FAO, Code of Practice for the Prevention and Reduction of Aflatoxin Contamination in Tree Nuts, https://www.fao.org/4/j2262e/j2262e22.htm | 及时脱外果皮/干燥、含水率和贮存控制、批次状态、剔除物 |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html | 管理土壤N2O计算 |
| `emep-eea-2023-guidebook` | method_factor | European Environment Agency, EMEP/EEA air pollutant emission inventory guidebook 2023, https://www.eea.europa.eu/publications/emep-eea-guidebook-2023 | 农业氨排放计算 |
| `ipcc-2006-stationary-combustion` | method_factor | IPCC, 2006 Guidelines, Volume 2, Chapter 2, https://www.ipcc-nggip.iges.or.jp/public/2006gl/vol2.html | 现场燃料燃烧CO2计算 |
| `mass-balance-identity` | method_factor | 应用于匹配前景记录的质量守恒恒等式 | 批次核算和精确参考量 |
| `route-energy-fao` | official_guidance | FAO, Energy-smart food for people and climate (2011), Annex 2; and Energy use in agriculture and industry, Annex IV. https://www.fao.org/4/i2454e/i2454e00.pdf ; https://www.fao.org/4/Q1085e/q1085e0d.htm | 仅支持设备及载能体可能性，适用性由现场记录确定；不采用能耗强度、燃料比例或默认组合。 |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 一般分配优先顺序及可比交接点经济价值基准。适用条件和明确的剩余分支是本 PCR 的方法约定；该来源不规定本产品因果系数、价格或产出数量。 |
| `review-ipcc-soils-2019` | official_guidance | IPCC 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 管理土壤直接/间接N2O及石灰/尿素CO2方法语境；因子须匹配实际适用性及场址活动，不是产品默认值。 |

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `declared-handoff-measurement-definition` | method_factor | 本 PCR 第3、6及8节：同一合格交接质量除以自身再乘声明参考数量；属于物理转移配对及量纲归一化恒等式，不是经验得率或新增实体操作。 | 唯一合格参考及实测路线吞吐关联 |
