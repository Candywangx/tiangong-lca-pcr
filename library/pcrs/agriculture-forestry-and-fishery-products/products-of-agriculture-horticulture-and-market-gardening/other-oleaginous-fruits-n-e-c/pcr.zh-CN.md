---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-oleaginous-fruits-n-e-c
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他含油果实，未另分类

## 1. 范围与适用性

本 PCR 覆盖一种明确声明、归入 CPC 01499 的 residual 含油果实物种，以鲜品在采收或农场交付点交付。每个数据集必须声明物种、品种（如重要）、一年生或多年生体系、地理范围、采收期、成熟度、水分状态、等级、批次规则、包装形式和交付点。不得用本 residual 类别汇总不同物种或不同产品状态。

排除所有具有具名 CPC 叶节点的油籽或含油果实，以及油提取、压榨、精炼、干燥成耐储商品、食品或化学品制造、分销和零售。多年生和一年生路线可以并存，但一个数据集只采用一种实际路线。冷却、清洗、分选、短时暂存和包装仅在农场交付前实际发生时纳入。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-oleaginous-fruits-n-e-c |
| classification_refs | CPC 3.0: 01499 其他含油果实，未另分类; mapping relation: exact |
| covered_products | 一种具名的 residual 含油果实物种，以鲜品在声明农场采收交付点交付 |
| excluded_products | 具有具名 CPC 叶节点的产品；混合物种；提取油、精炼油及制造品；分销和零售 |
| representative_product | 一种具名的 residual 含油果实鲜品 |
| production_route | 管理的一年生或多年生生产、采收，以及条件适用的分选、及时稳定处理和包装 |
| market_state | 声明成熟度、水分、等级和包装状态的鲜品，位于 harvest/farm gate |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 一种具名 residual 含油果实的合格鲜品 |
| How much | 1,000 kg 按接收状态计量的合格产品 |
| How well | 声明物种、品种（如重要）、来源、生产体系、采收期、成熟度、水分、等级、批次、包装和交付点 |
| How long or cycle | 一个声明采收期；多年生体系包含与该期相匹配的建园和更替归属 |
| reference_flow_link | `reference_product_at_declared_handoff` |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1000 |
| Reference product flow | 其他含油果实，未另分类 `d72a964f-f916-4c72-9f53-6a1126f1ecac` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 物种；品种（如重要）；一年生或多年生体系；来源；采收期；成熟度；水分及基准；等级；批次规则；包装；交付点；纳入操作 |

唯一参考产出为 `declared_reference_handoff` 的 `reference_product_at_declared_handoff`，它仅对既有声明交接点的实际合格产品作必需计量。`packing_handoff` 的实体活动仍为条件性活动；省略该活动不取消参考产出。选择实际最后纳入的产品交接并记录过程/产出 id，物种、物理状态、等级、含水率基准及交接点必须与第3节一致。原 `reference_product_output` 行仅在其作业实际发生时记录该作业实测产出，不是另一笔最终销售。旁路不新增加工、得率假设或负担，也不改变产品边界。

## 4. 计量与单位规则
| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `fresh_mass_basis` | 所有果实物流 | Mass | kg | 以按接收状态的鲜质量报告，并记录水分及其基准。 |
| `species_state_identity` | 产品与中间物流 | Mass | kg | 在所有节点保持物种、成熟度、水分、等级和批次身份。 |
| `period_normalization` | 管理生产 | 活动特定属性 | 活动特定单位 | 将生产面积和跨期投入归一到同一声明采收期及合格质量。 |
| `nutrient_basis` | 养分投入 | 养分质量 | kg N、kg P2O5、kg K2O | 分别保留产品质量、配方、测定值和元素或氧化物口径。 |
| `batch_balance` | 分选、稳定与包装 | Mass | kg | 平衡进入量、合格等级、降级品、剔除物和损失；不得把蒸发水计作废物。 |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 声明期开始时的生产田块或结果园；多年生路线纳入年化建园与更替 |
| starting_condition_role | 声明采收期的生产起点 |
| product_classification_scope | 一种归入 CPC 01499 的具名 residual 含油果实物种 |
| recursive_input_rule | 同类别外购鲜果以其实际状态和交付点连接独立上游数据集，不在本 PCR 中重建 |
| upstream_dataset_requirement | 与种植材料、养分、植保、灌溉、能源、包装及外部废物处理相兼容的数据集 |
| disclosure | 物种、体系、地理、面积、树龄（适用时）、采收期、产量、成熟度、水分、等级、交付点、批次、包装、剔除物、共享资产与归属 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_single_species` | 全部路线 | 每个数据集仅代表一种具名 residual 物种和一种鲜品状态；不得汇总异质物种。 |  |
| `boundary_productive_period` | 生产路线 | 纳入声明采收期的管理生产、采收、直接排放，以及适用的年化建园和更替负荷。 |  |
| `boundary_postharvest` | 条件路线 | 仅纳入声明交付点之前实际发生的清洁、分选、及时冷却或短时稳定处理和包装。 | `fao-postharvest-horticulture` |
| `boundary_extraction_exclusion` | 全部路线 | 在油提取、压榨、精炼、商品干燥、制造、分销和零售之前停止。 |  |
| `boundary_direct_emissions` | 土壤管理 | 使用同一养分和残余物记录及声明方法计算直接和相关间接排放。 | `ipcc-2019-managed-soils` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入 | 纳入条件 | 角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `managed_production_harvest` | 管理生产与采收 | `required` | 始终 | 管理一年生或多年生生产与采收 | 生产面积和声明采收期 |
| `sorting_stabilization` | 分选与及时稳定处理 | `conditional` | 在交付点之前进行分选、清洁、冷却、短时暂存或稳定处理 | 区分合格等级、降级品、剔除物和损失状态 | 匹配的进出批次 |
| `packing_handoff` | 包装与农场交付 | `conditional` | 在声明交付点之前进行包装或呈现 | 准备声明鲜品以供交付 | 匹配的包装批次和包装记录 |
| `declared_reference_handoff` | 声明交接点合格产品计量 | required | 每条实际选定路线，包括条件处理/包装/储存的旁路 | 仅计量及核对，不新增实体加工 | 1000 kg 同一声明交接点净合格产品 |

### 过程：管理生产与采收 (`managed_production_harvest`)

#### 输入
##### 产品流

###### 声明油料果实物种的苗木（`planting_material_input`）

本条件卡仅代表声明过程中一种实际材料、产品或废物流。依据路线记录核实其身份、物理状态、期间和去向；其他不同物流须分别建卡。本模板不推定必然使用或产生。

- 选定流：声明油料果实物种的苗木
- 流属性 / 单位: 质量 / kg
- 数量规则: 按本过程及期间单独计量或计算这一种已确认物流，记录其独立单位和去向；不得合并其他产品或废物状态。
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场地特定 (`site_specific`)
原始活动或阶段基准：建园年化及补植材料.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 收集记录 (`collected_record`)
- 采集协议: `cp_production_inputs`

###### 尿素肥料投入（`agricultural_nutrient_inputs`）

仅当声明的过程实际使用尿素肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：尿素肥料
- 数量规则：记录该过程和期间实际使用的尿素肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg 产品
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场地特定 (`site_specific`)
原始活动或阶段基准：分别保留的 N、P2O5 和 K2O 数量总和，不混合养分口径.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 收集记录 (`collected_record`)
- 采集协议: `cp_production_inputs`

###### 磷酸一铵肥料投入（`agricultural_nutrient_inputs_monoammonium_phosphate`）

仅当声明的过程实际使用磷酸一铵肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：磷酸一铵肥料
- 数量规则：记录该过程和期间实际使用的磷酸一铵肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg 产品
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场地特定 (`site_specific`)
原始活动或阶段基准：分别保留的 N、P2O5 和 K2O 数量总和，不混合养分口径.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 收集记录 (`collected_record`)
- 采集协议: `cp_production_inputs`

###### 氯化钾肥料投入（`agricultural_nutrient_inputs_potassium_chloride`）

仅当声明的过程实际使用氯化钾肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：氯化钾肥料
- 数量规则：记录该过程和期间实际使用的氯化钾肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg 产品
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场地特定 (`site_specific`)
原始活动或阶段基准：分别保留的 N、P2O5 和 K2O 数量总和，不混合养分口径.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 收集记录 (`collected_record`)
- 采集协议: `cp_production_inputs`

###### 施用的牛粪肥投入（`agricultural_nutrient_inputs_cattle_manure`）

仅当声明的过程实际使用施用的牛粪肥时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：施用的牛粪肥
- 数量规则：记录该过程和期间实际使用的施用的牛粪肥数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg 产品
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场地特定 (`site_specific`)
原始活动或阶段基准：分别保留的 N、P2O5 和 K2O 数量总和，不混合养分口径.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 收集记录 (`collected_record`)
- 采集协议: `cp_production_inputs`

###### 农业石灰石投入（`agricultural_nutrient_inputs_agricultural_limestone`）

仅当声明的过程实际使用农业石灰石时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：农业石灰石
- 数量规则：记录该过程和期间实际使用的农业石灰石数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg 产品
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场地特定 (`site_specific`)
原始活动或阶段基准：分别保留的 N、P2O5 和 K2O 数量总和，不混合养分口径.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 收集记录 (`collected_record`)
- 采集协议: `cp_production_inputs`

###### 灌溉水 (`irrigation_water_input`)

记录该节点的灌溉水，保持物种、状态、批次和去向可追溯。

- 选定流： 灌溉水供应
- 流属性 / 单位: 体积 / m3
- 数量规则: 计量或计算施用灌溉水量；雨养系统以证据记录零值
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场地特定 (`site_specific`)
原始活动或阶段基准：声明期间施用于生产面积的水.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 收集记录 (`collected_record`)
- 采集协议: `cp_production_inputs`
- 数量范围: 前景QA筛查范围
  - 范围角色: QA护栏 (`qa_guardrail`)
  - 下限: 0
  - 上限: 20000
  - 单位: m3/ha·year
  - 基准: 声明期间施用于生产面积的水
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估计 (`reasoned_estimate`)

###### 中压电力投入（`field_energy_input`）

仅当声明的过程实际使用中压电力时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：中压电力
- 数量规则：记录该过程和期间实际使用的中压电力数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：能量 / kWh
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场地特定 (`site_specific`)
原始活动或阶段基准：生产和采收作业的实际能源投入.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 收集记录 (`collected_record`)
- 采集协议: `cp_production_inputs`

###### 柴油投入（`field_energy_input_diesel`）

仅当声明的过程实际使用柴油时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：柴油
- 数量规则：记录该过程和期间实际使用的柴油数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场地特定 (`site_specific`)
原始活动或阶段基准：生产和采收作业的实际能源投入.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 收集记录 (`collected_record`)
- 采集协议: `cp_production_inputs`

必需植保记录：完成前景数据包前，逐一列出每种实际施用的制剂产品，保留商品名、有效成分、盐型或化学形态、浓度、必要时的密度、施用量、日期及处理面积。每项交换选择一个物理身份具体的产品。有效成分释放量须按物质和接收区室分别推导。缺少制剂身份属于完整性缺口，不得以通用农药、虚构示例或假定零值替代。

##### 废物流


##### 基本流


#### 输出
##### 产品流

###### 采收的鲜含油果实 (`harvested_fruit_output`)

记录该节点的采收的鲜含油果实，保持物种、状态、批次和去向可追溯。

- 选定流： 其他含油果实，未另分类
- 流属性 / 单位: 质量 / kg
- 数量规则: 计量合格鲜采收物质量并声明物种、成熟度、水分、等级和交付点
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场地特定 (`site_specific`)
原始活动或阶段基准：声明生产面积的合格鲜采收物.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 收集记录 (`collected_record`)
- 采集协议: `cp_harvest_records`
- 数量范围: 前景QA筛查范围
  - 范围角色: QA护栏 (`qa_guardrail`)
  - 下限: 100
  - 上限: 50000
  - 单位: kg/ha·harvest period
  - 基准: 声明生产面积的合格鲜采收物
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估计 (`reasoned_estimate`)


该行的实际中间状态或联产品等级须独立核实 UUID，不使用参考输出 UUID 代替。

##### 废物流

###### 田间残余物与采收剔除物 (`field_residue_output`)

记录该节点的田间残余物与采收剔除物，保持物种、状态、批次和去向可追溯。

- 选定流： 按去向区分的修剪物、附带生物质、落果和采收剔除物
- 流属性 / 单位: 质量 / kg
- 数量规则: 计量或平衡核算每类残余物及其去向
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场地特定 (`site_specific`)
原始活动或阶段基准：全部非产品生物质和剔除物，不包括合格果实.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 收集记录 (`collected_record`)
- 采集协议: `cp_harvest_records`
- 数量范围: 前景QA筛查范围
  - 范围角色: QA护栏 (`qa_guardrail`)
  - 下限: 0
  - 上限: 5000
  - 单位: kg/1,000 kg accepted fruit
  - 基准: 全部非产品生物质和剔除物，不包括合格果实
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估计 (`reasoned_estimate`)


##### 基本流

### 过程：分选与及时稳定处理 (`sorting_stabilization`)

#### 输入
##### 产品流

###### 进入处理的鲜果批次 (`incoming_fruit_input`)

记录该节点的进入处理的鲜果批次，保持物种、状态、批次和去向可追溯。

- 选定流： 声明物种和状态的采后鲜 residual 含油果实
- 流属性 / 单位: 质量 / kg
- 数量规则: 计量进入批次质量、成熟度、水分、温度和等级
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场地特定 (`site_specific`)
原始活动或阶段基准：分选或稳定处理前的匹配批次.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 收集记录 (`collected_record`)
- 采集协议: `cp_conditioning_batch`
- 数量范围: 前景QA筛查范围
  - 范围角色: QA护栏 (`qa_guardrail`)
  - 下限: 1
  - 上限: 2
  - 单位: kg incoming/kg accepted output
  - 基准: 分选或稳定处理前的匹配批次
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估计 (`reasoned_estimate`)

###### 清洁与处理用水 (`conditioning_water_input`)

记录该节点的清洁与处理用水，保持物种、状态、批次和去向可追溯。

- 选定流： 工艺水供应
- 流属性 / 单位: 体积 / m3
- 数量规则: 计量清洗或处理用水；干式路线记录零值
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场地特定 (`site_specific`)
原始活动或阶段基准：不用水路线为零.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 收集记录 (`collected_record`)
- 采集协议: `cp_conditioning_batch`
- 数量范围: 前景QA筛查范围
  - 范围角色: QA护栏 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10
  - 单位: m3/1,000 kg accepted output
  - 基准: 不用水路线为零
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估计 (`reasoned_estimate`)

###### 中压电力（`conditioning_energy_input`）

仅在本过程实际使用中压电力时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：农场交付前按路线发生的能源。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：计量本过程和期间实际使用的中压电力，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_conditioning_batch`

###### 柴油（`conditioning_energy_input_diesel`）

仅在本过程实际使用柴油时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：农场交付前按路线发生的能源。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：计量本过程和期间实际使用的柴油，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_conditioning_batch`

##### 废物流


##### 基本流


#### 输出
##### 产品流

###### 分选后的鲜含油果实 (`conditioned_fruit_output`)

记录该节点的分选后的鲜含油果实，保持物种、状态、批次和去向可追溯。

- 选定流： 其他含油果实，未另分类
- 流属性 / 单位: 质量 / kg
- 数量规则: 按等级计量合格鲜品；不得包含提取、干燥成商品或制造
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场地特定 (`site_specific`)
原始活动或阶段基准：分选与及时稳定处理后的匹配鲜品批次.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 收集记录 (`collected_record`)
- 采集协议: `cp_conditioning_batch`
- 数量范围: 前景QA筛查范围
  - 范围角色: QA护栏 (`qa_guardrail`)
  - 下限: 0.5
  - 上限: 1
  - 单位: kg accepted/kg incoming fresh fruit
  - 基准: 分选与及时稳定处理后的匹配鲜品批次
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估计 (`reasoned_estimate`)


该行的实际中间状态或联产品等级须独立核实 UUID，不使用参考输出 UUID 代替。

##### 废物流

###### 分选剔除物与移除物 (`sorting_reject_output`)

记录该节点的分选剔除物与移除物，保持物种、状态、批次和去向可追溯。

- 选定流： 按去向区分的腐败果、异物和移除生物材料
- 流属性 / 单位: 质量 / kg
- 数量规则: 计量每类剔除物和去向，排除蒸发水
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场地特定 (`site_specific`)
原始活动或阶段基准：匹配分选质量平衡.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 收集记录 (`collected_record`)
- 采集协议: `cp_conditioning_batch`
- 数量范围: 前景QA筛查范围
  - 范围角色: QA护栏 (`qa_guardrail`)
  - 下限: 0
  - 上限: 500
  - 单位: kg/1,000 kg incoming fruit
  - 基准: 匹配分选质量平衡
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估计 (`reasoned_estimate`)

###### 处理废水 (`conditioning_wastewater_output`)

记录该节点的处理废水，保持物种、状态、批次和去向可追溯。

- 选定流： 清洗或湿式处理产生的废水
- 流属性 / 单位: 体积 / m3
- 数量规则: 计量或计算排放量并记录去向和处理方式
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场地特定 (`site_specific`)
原始活动或阶段基准：干式路线为零.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 收集记录 (`collected_record`)
- 采集协议: `cp_conditioning_batch`
- 数量范围: 前景QA筛查范围
  - 范围角色: QA护栏 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10
  - 单位: m3/1,000 kg accepted output
  - 基准: 干式路线为零
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估计 (`reasoned_estimate`)


##### 基本流


### 过程：包装与农场交付 (`packing_handoff`)

#### 输入
##### 产品流

###### 待包装合格鲜果 (`packing_fruit_input`)

记录该节点的待包装合格鲜果，保持物种、状态、批次和去向可追溯。

- 选定流： 合格的声明 residual 含油果实
- 流属性 / 单位: 质量 / kg
- 数量规则: 计量进入包装的匹配合格质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场地特定 (`site_specific`)
原始活动或阶段基准：仅允许有记录的包装损失.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 收集记录 (`collected_record`)
- 采集协议: `cp_packing_lot`
- 数量范围: 前景QA筛查范围
  - 范围角色: QA护栏 (`qa_guardrail`)
  - 下限: 1
  - 上限: 1.1
  - 单位: kg/kg packed product
  - 基准: 仅允许有记录的包装损失
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估计 (`reasoned_estimate`)

###### 瓦楞纸箱投入（`packaging_input`）

仅当声明的过程实际使用瓦楞纸箱时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：瓦楞纸箱
- 数量规则：记录该过程和期间实际使用的瓦楞纸箱数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场地特定 (`site_specific`)
原始活动或阶段基准：全部一次性包装及归属的可复用包装损耗.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 收集记录 (`collected_record`)
- 采集协议: `cp_packing_lot`

###### 聚乙烯包装薄膜投入（`packaging_input_plastic_film`）

仅当声明的过程实际使用聚乙烯包装薄膜时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：聚乙烯包装薄膜
- 数量规则：记录该过程和期间实际使用的聚乙烯包装薄膜数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场地特定 (`site_specific`)
原始活动或阶段基准：全部一次性包装及归属的可复用包装损耗.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 收集记录 (`collected_record`)
- 采集协议: `cp_packing_lot`

##### 废物流


##### 基本流


#### 输出
##### 产品流

###### 声明农场交付点的鲜品 (`reference_product_output`)

仅在 `packing_handoff` 作业实际发生时记录该作业实测合格产出，保留物种、状态、等级、含水率、批次和真实移出交接点。此稳定行 id 表示实际路线产出；唯一最终参考产出为 reference_product_at_declared_handoff。保留原始产出并关联选定最终批次，不作为另一份最终产品重复计数。所列 UUID 仅适用于已独立确认的物理状态/交接点；不相容的上游/中间状态须另行核实或明确保持身份未解析。保留原阶段计量及采集记录。

- 选定流： 其他含油果实，未另分类 `d72a964f-f916-4c72-9f53-6a1126f1ecac`
- 流属性 / 单位: 质量 / kg
原始产出计量及核对：按 `cp_packing_lot` 称量实际作业净合格批次产出，保留毛重/皮重、拒收、库存、含水率及匹配后续批次记录，在最终归一化前核对。

- 数量规则：按 `cp_packing_lot` 实测实际作业净合格产出；保留原始批次数量及实际阶段处理量，依第8节最终交接归一化规则换算一次，不规定固定中间得率
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：实测实际作业/批次产出及处理量，在一次最终参考归一化前保留。

- 归一化基准：每声明的参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_lot`

##### 废物流

##### 基本流

### 过程：声明交接点合格产品计量（`declared_reference_handoff`）
本计量不新增加工、废物产生或排放。保留全部真实上游作业和损失，仅旁路有据未发生的活动。选择一个实际终端产品批次，系统汇总时将其成对内部转移抵销一次；不得把未启用路线、共产品或来源产出与交接产出相加为合格最终产出。

#### 输入
##### 产品流
###### 同一交接点实际路线合格产品 (`actual_route_product_for_handoff`)

仅计量既有声明交接点的合格产品，并匹配一份实际终端来源记录。成对内部转移与本参考表示同一事件，不是两笔销售。按实际物种/状态/交接点独立核实身份；仅对鲜态农场门产品确认的标识不能代表不相容调理状态或独立包装场状态。身份缺失须明确保留，不得靠复制相邻产出的 UUID 解决。
- 选定流：其他含油水果，未另列明。 `d72a964f-f916-4c72-9f53-6a1126f1ecac`
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
- 选定流：其他含油水果，未另列明。 `d72a964f-f916-4c72-9f53-6a1126f1ecac`
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
| `allocation_period` | 多年生生产 | 将建园、未结果期和更替负荷按有证据的生产寿命归属到声明采收期；不得在年度记录中重复计算。 |  |
| `allocation_grade` | 分选输出 | 只有合格的声明等级计入参考数量。实际销售且有独立预期用途的降级物料是单独的产品输出；保留其实测质量、去向，并在尽量细分过程后分配无法分开的上游负担。无产品功能的剔除物属于废物；保留其物理质量、去向和处置负担。 |  |
| `allocation_residue` | 残余物与剔除物 | 废物不获得联产品分配份额，但产生弃置材料的生产负担及应归属的收集和处理负担须保留在产出可售产品的路线中；缺少产品功能不能抹去这些负担。只有身份、接收方、功能、数量和交接均有据的独立预期产品才进入完整产品分配分母。收入或可能的替代用途本身不构成避免生产信用。 |  |
| `allocation_shared_assets` | 共享设施 | 按记录的面积、机器小时、质量或其他因果驱动因素将灌溉、设备、冷库和包装设施归属一次。 |  |
| `allocation_rework` | 返工和退回 | 将返工回路归于产生节点，返回物料不得作为新的进入量重复计数。 |  |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_residual_precedence` | 未规定主方法分支的剩余共同负担 | 本 PCR 要求研究作联产品分配决策但未规定主方法的地方，统一执行以下优先顺序；已明确规定的类别专属主方法保持有效。先直接归属可分开的产出专属作业。剩余共同负担 B 只有在实测作业或生物服务记录证明驱动量 d_i 代表因果消耗时，才采用该物理驱动。产品可称量、有价值或等级较低本身均不构成因果依据，不能在面积、时间、质量和收入间任意切换。可比等级接受相同共同搬运服务时，仅在服务需求、状态及水分基准可比且有据时采用实测处理质量。份额 a_i=d_i/sum(d_j)，B_i=B*a_i。该共同作业没有可辩护的因果物理驱动时，采用同交接点、同期间经济份额 a_i=(q_i*p_i)/sum(q_j*p_j)，纳入全部独立预期产出，匹配数量/价格单位、币种和代表性价格，使用产出专属下游加工之前的价值。缺价格或分母证据使分配结果不完整，不能把产品价格记零或改称单一产出系统。披露合计为一的份额和重要替代方法敏感性；敏感性方法不是可任意替换的主结果。废物、留存残余和内部转移不获得联产品份额，其应归属的生产/处理负担仍保留在产出可售产品的路线中。未分配物理数量和质量平衡另行保留。本分支不自动给予替代信用；单独界定的替代情景须保留总清单及实际被替代功能证据。 | `ghg-protocol-product-standard-2011` |

## 8. 前景数据采集、计算与质量规则

清单完整性：具名条件卡是单项交换示例，不是穷尽配方，也不要求使用这些产品。完成前景数据包前，逐项列出所有实际种植材料、养分产品、作物保护制剂、资产材料、作业服务、载能体、包装材料、废物流及适用的基本物质，使用明确的物理身份、状态、原始属性/单位、来源或接收区室及实测或按方法计算的数量。身份或数量缺失属于完整性缺口，不得假定为零。保留实际批次和阶段基准；不得将中间转移累加为额外最终产出，也不得重复计入采购服务已包含的负荷。

先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_production_inputs` | `managed_production_harvest` | 年度投入 | 发票、作业与计量记录 | 物种；面积；产品；数量；养分测定；能源载体；用水；日期 | 将采购、仓储和田间日志与声明面积核对；原始汇总与分配：按物种和采收期求和并归一到合格鲜果 | 原始单位及 kg、m3、MJ | 每事件并按期汇总 | 完整声明采收期 | 全部纳入田块或园区 | 每声明的参考流 | 发票、计量器、作业日志、校准和库存核对 |
| `cp_harvest_records` | `managed_production_harvest` | 采收物与残余物 | 批次称重和田间日志 | 批次；质量；物种；成熟度；水分；等级；剔除类别；去向 | 使用校准秤称重并与面积和容器记录核对；原始汇总与分配：按批次求和，物种和状态保持分开 | kg | 每采收批次 | 完整采收窗口 | 全部纳入采收点 | 每声明的参考流 | 磅单、秤校准、批次和去向记录 |
| `cp_emission_calculation` | `managed_production_harvest` | 直接排放 | 计算记录 | 含氮投入；残余物；土壤与气候；排放因子；环境区室 | 对同一投入记录应用声明的方法版本；原始汇总与分配：按具体物种和受纳区室分别计算 | kg 物质 | 每采收期 | 与生产投入相同期 | 全部纳入生产面积 | 每声明的参考流 | 方法版本、输入追溯、因子来源和复算 |
| `cp_conditioning_batch` | `sorting_stabilization` | 分选与稳定处理 | 匹配批次记录 | 进入和输出质量；等级；温度；水分；水；能源；剔除物；废水；时间 | 批次称重、计量和质量平衡；原始汇总与分配：匹配进出批次，干湿路线分开 | kg、m3、kWh、MJ | 每批次 | 全部纳入处理批次 | 声明农场或初级处理场地 | 每声明的参考流 | 秤和计量器校准、批次表、质量平衡签核 |
| `cp_packing_lot` | `packing_handoff` | 包装和交付 | 包装批次及交付记录 | 果实质量；材料；附件；复用次数；废料；等级；交付点 | 将领料、称重和交付单按批次核对；原始汇总与分配：按材料与批次汇总，可复用包装按实际损耗归属 | kg 或件 | 每包装批次 | 全部纳入交付批次 | 全部纳入包装点 | 每声明的参考流 | 物料单、磅单、交付单和库存核对 |
| `cp_phase1_environment_coverage` | managed_production_harvest | 按实际节点的管理环境覆盖 | 场址活动方法台账 | 场址及实际管理节点；面积；有日期占用区间；共同使用者；建植/未产期历史；实际前后土地类别及转化日期/面积；碳核算覆盖；上游土地覆盖 | 按实际负责生产节点及匹配批次/期间采集原始记录，保留来源、方法适用性和不确定性。与现有协议及供应覆盖核对，不新增重复事件；不适用须明示有据，缺少证据属于缺口。 | 适用的原生活动单位、kg N或物质、面积/时间 | 事件及年度/批次核对 | 匹配生产/队列期间 | 全部实际管理生产节点 | 执行适用覆盖核算后最终归一化一次 | 原始记录、方法工作表及适用性证据 |

### 计算规则

| rule_id | 适用对象 | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部节点 | 节点量 × 1000 / 声明交付点的合格鲜质量 | 节点量；合格鲜质量 | 每 1,000 kg 参考产品的量 |  |
| `calc_perennial_attribution` | 多年生路线 | 建园或更替总量 × 声明期间归属份额 | 建园、更替、生产寿命、归属方法 | 声明采收期的归属量 |  |
| `calc_batch_balance` | 分选和包装 | 进入质量 = 合格 + 降级 + 剔除 + 记录损失 | 匹配进出批次 | 平衡差和流量 |  |
| `calc_soil_emissions` | 土壤排放 | 声明方法应用于按来源区分的养分和残余物投入 | 养分、残余物、因子、区室 | 各具体排放物种质量 | `ipcc-2019-managed-soils` |
| `packing_waste_output_specific_exchanges` | `packing_handoff` | 将拒收果实及每种实际废包装材料分别枚举为实际物流。逐流计量，保留各自组成、状态、原生单位、批次／期间及去向；每个具体物流和边界角色建立一张独立卡。区分废物转移、外购处理服务及具体物质排放，不得把处理服务作为废水本身，也不得重复处理负荷。分别保留库存、返工、销售降级品及弃置废物；物理混合物流只计一次，不得再将其组分作为额外输出重复计入。 保留相连采集协议和实际过程归属，按原始阶段基准恢复各自可归属的原始分子量，再按匹配的合格参考产出归一化一次。缺少身份、数量、单位或去向会阻止数据集完整性通过；确认不存在必须有依据，不得默认零值。 | `cp_packing_lot` | 逐项独立交换；完成前必须补齐 |  |
| `soil_nitrogen_emissions_identity_and_fate` | `managed_production_harvest` | 逐项识别每种实际排放物质及接收环境，以独立活动量、方法、化学物种口径和原生单位量化各有据路径，区分元素 N/P 台账和最终化合物。土壤养分留存或质量平衡残差不得自动当作排放。 本规则替代含糊的聚合交换，不取消采集义务。数据集完整性通过前，每项实际交换须建立具体卡片、核实相容 UUID 或明确保留未解析身份，并记录数量、单位、阶段／期间、去向和证据。依据相连协议恢复可归属原始分子量，再按匹配的合格参考产出归一化一次。缺失数据不等于零，原聚合范围不得作为单项物流默认值。 | `cp_emission_calculation` | 按身份区分的交换和对账活动记录 |  |

### 环境覆盖计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_managed_land_coverage` | 实际管理生产节点 | 逐实际自主管理生产场址采集占用面积及有日期的占用区间，包括应归属的建植/未产期与生产期。占用量为面积乘实际时长，明确换为所选面积时间单位（1 ha=10,000 m2，时间按年）；只有每作物周期公顷数而无时长不能得到面积时间。建立、管理区间重叠时划分区间或取并集，同一面积时间只计一次，实际共同使用者份额合计为一。土地转化按声明土地利用方法，另记实际前/后土地类别、事件面积和日期；转化使用面积单位，不能与占用量相加。种植、持续占用或前土地资料缺失不能证明发生转化，也不能证明零转化。适用时保留历史事件归属及碳库/排放方法覆盖，不编造转化或通用固碳信用。分别建立兼容基本流身份，采用已核实UUID或明确未决身份，归属一次后按匹配最终参考产出归一化。外购已完成的生物投入承接兼容上游土地覆盖一次，不在本地重复。适用土地身份、面积、时长或前状态证据缺失属于完整性缺口；有据无转化可记录为不适用。 | cp_phase1_environment_coverage | 按匹配最终参考量的应归属原生环境数量 |  |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 全部产品物流 | 物种、生产体系、鲜品状态、成熟度、水分、等级、批次和交付点完整且一致。 | 批次和交付记录 |
| `dq_completeness` | 全部节点 | 质量、能源、水、养分、包装、剔除物和直接排放覆盖声明期间及全部纳入场地。 | 完整性核对与质量平衡 |
| `dq_temporal` | 全部节点 | 生产投入、采收和处理批次来自同一或明确对齐的采收期。 | 日期记录和归属表 |
| `dq_route` | 条件节点 | 不发生的处理记录为零并有证据；不得把提油或制造并入鲜品边界。 | 路线图、设备与批次记录 |

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_declared_reference_handoff` | `declared_reference_handoff` | 实际合格终端产品及成对转移 | 称量/批次/验收记录 | 物种；状态；等级；含水率/基准；交接点；actual_terminal_process_id；actual_terminal_output_row_id；lot/transfer_id；毛/皮/净质量 R；阶段原始总量/吞吐量；库存、拒收及去向 | 在既有交接点称量净合格 R，匹配唯一实际同批次/同状态终端来源，并核对前序损失及库存。若未发生条件性准备，采用最后实际纳入的适格产品产出，不虚构该准备作业。保留原活动记录及全部必需限定项。 | kg 及原生活动单位 | 每个合格批次 | 匹配生产及交接期间 | 既有声明生产者/初级交接点 | 每声明的参考流 | 校准称量、验收/等级记录、批次链、启用/旁路证据及闭合平衡 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_final_handoff_normalization` | 全部前景数量及实际路线产出 | R 为匹配单一物种/状态/等级/交接点/期间且实测为正的合格最终质量 kg，剔除皮重、拒收、共产品及留存库存。物理台账＝原始物理数量/R×1000 kg，不乘负荷分配份额；归属清单贡献＝可归属原始数量/R×1000 kg，保留分子原生单位及原有产品/期间归属。阶段强度 q_i＝Q_i/O_i 须先按实际关联 O_i 还原 Q_i＝q_i×O_i；已最终归一化后不得再次除以 R。交接两侧均为同一实测事件 R/R×1000 kg，不是另一实体得率。仅纳入实际启用作业，旁路须记录并有据。R 缺失/非正或终端记录未关联会阻断完整归一化结果，不能记零。保留原始阶段数据，成对内部转移抵销一次。 | cp_declared_reference_handoff; original linked collection protocols | 按声明最终参考报告的原生数量 | `declared-handoff-measurement-definition` |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 数据集 | 必须声明一种具名 residual 物种、一种生产体系、一种鲜品状态、等级和 farm/harvest gate。 |  |
| `validate_reference` | 参考产品 | 参考输出必须正好为 1,000 kg 合格鲜品，并带全部必要限定信息。 |  |
| `validate_boundary` | 全部路线 | 出现提油、精炼、制造、分销或零售即失败。 |  |
| `validate_period` | 多年生路线 | 建园、未结果期、更替及共享资产须有单次且可审计的跨期归属。 |  |
| `validate_balance` | 分选和包装 | 匹配批次质量平衡超出声明测量不确定度即失败。 |  |
| `validate_rework` | 剔除物与返工 | 降级品、返工、回收和废弃去向必须互斥且不得与合格产品重复。 |  |
| `validate_flow_binding` | 全部卡片 | 分别核验每种实际交换的具体流 UUID、物理状态、流属性和单位；未确认时明确保留未解析身份。 |  |
| `validate_ranges` | 全部卡片 | 每个范围的 lower 不得大于 upper；条件路线停用时数量为零；前景记录优先于 provisional 筛查范围。 |  |


| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_final_handoff_bypass` | 实际选定路线及全部条件旁路状态 | 按实际记录检查可选处理/包装/储存启用及省略两种状态：始终保留唯一必需交接参考；来源产品/状态/交接点与第3节一致；启用的实体行保留实测吞吐量，未启用实体活动不新增交换。要求原始合格质量、上游闭合、唯一转移配对及一次最终归一化；未知状态或缺少身份不得当作已成立分支。 | `declared-handoff-measurement-definition` |

## 10. 已发布数据集配置

| 字段 | 值 |
| --- | --- |
| dataset_role | 具名 residual 含油果实鲜品的前景单元过程或汇总农场门数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 已声明物种、体系、状态、等级、采收期和交付点的 LCA |
| excluded_use | 未披露的多物种平均；提取油或精炼油；制造品；其他具名 CPC 叶节点的替代 |
| required_metadata | 物种、体系、地理、采收期、面积、产量、成熟度、水分、等级、批次、包装、交付点、路线和归属 |
| required_quality_disclosure | 前景覆盖、测量方法、范围筛查结果、缺失值、跨期归属、质量平衡和未解析流身份 |
| update_trigger | 物种、体系、产量、路线、交付点、等级、包装、跨期归属或关键数据来源发生重大变化 |

## 11. 数据来源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `fao-postharvest-horticulture` | official_guidance | FAO, Prevention of post-harvest food losses: fruits, vegetables and root crops, https://www.fao.org/4/t0073e/t0073e00.htm | 鲜园艺品的采收后处理、分级、包装和损失控制原则 |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html | 管理土壤氮排放方法 |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 一般分配优先顺序及可比交接点经济价值基准。适用条件和明确的剩余分支是本 PCR 的方法约定；该来源不规定本产品因果系数、价格或产出数量。 |

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `declared-handoff-measurement-definition` | method_factor | 本 PCR 第3、6及8节：同一合格交接质量除以自身再乘声明参考数量；属于物理转移配对及量纲归一化恒等式，不是经验得率或新增实体操作。 | 唯一合格参考及实测路线吞吐关联 |
