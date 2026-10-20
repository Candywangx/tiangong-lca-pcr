---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.poppy-seed
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 罂粟籽

## 1. 范围与适用性

本规则覆盖一年生 Papaver somniferum L. 为获得籽粒而进行的种植、成熟蒴果收获、籽粒分离及农场门口前实际发生的通风、干燥或初步清洁。参考产品是农场门口未经加工的罂粟籽；食用、榨油及其他最终用途是需披露的下游路径，不改变本参考流。欧盟食品籽粒指南中的含水率及纯度指标仅属于该地区、该用途的条件性参考，不作为本产品类别的统一合格限值。排除榨油、食品深度清洁或脱碱处理、药用提取、鸦片制取、认证播种籽分级及离场运输。资料：`eu-poppy-2014`、`usu-seed-poppy`。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.poppy-seed` |
| classification_refs | CPC 3.0 01448（仅分类定位）; mapping relation: narrower |
| covered_products | 农场门口未经加工、已与成熟蒴果分离的罂粟籽；披露食用或油用去向与实测含水/杂质状态 |
| excluded_products | 蒴果、罂粟秸秆、鸦片乳汁、罂粟籽油、脱碱食品配料、认证播种籽 |
| representative_product | 按净质量计量的收获籽粒 |
| production_route | 直接播种的管理型作物生产 → 独立成熟蒴果收获与籽粒分离 → 仅在发生时记录农场初级处理；人工与机械收获分别记录能源、损失及籽粒损伤，不混作同一作业记录 |
| market_state | Production mix, at farm gate；Harvested grain, unprocessed |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 农场门口未经加工的罂粟籽 |
| How much | 1 kg 净籽粒 |
| How well | 声明批次含水率、杂质、损伤及目标市场；不预设食用品质等级 |
| How long or cycle | 单个有记录的一年生作物周期及关联收获批次 |
| reference_flow_link | farm_gate_seed |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | Poppy seed `c49b37e3-df47-4caf-9a6a-2df1a528800a` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | Papaver somniferum 籽粒；农场门口；未经加工；批次、含水率、杂质状态、主要去向、收获及初级处理方式 |
| 绑定模式 | `fixed` |

## 4. 计量与单位规则
| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 净参考籽粒 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按移交时实际含水和杂质状态称量；不得把蒴果或油计入。 |
| `field_to_gate` | 田间及收获输入 | 适用的质量、体积或能量 | 每公顷及每 kg | 将作物周期总量除以同周期净交付籽粒质量；记录面积、总产量和转换因子。 |
| `moisture_basis` | 籽粒及秸秆 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 比较质量平衡前注明各批次干湿基准；若干燥则记录前后含水率及水分损失。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已准备好播种的田块与进入本作物周期的具体播种籽、肥料及其他产品投入 |
| starting_condition_role | 对本季播种籽和外购投入建立上游产品交换；前期轮作与土地状态另行披露 |
| product_classification_scope | 收获的罂粟籽，不含蒴果、秸秆、乳汁、油或认证播种籽 |
| recursive_input_rule | 留用罂粟籽作为本季播种籽时记录真实数量与前期来源，禁止让同一周期的参考产出递归供给自身 |
| upstream_dataset_requirement | 每项外购产品投入均有适当的上游数据；未匹配具体流时标记待解析，不以笼统类别替代 |
| disclosure | 田块、作物周期、籽粒用途、收获方式、蒴果/秸秆去向、农场处理开关及含水/杂质状态 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `annual_crop_boundary` | 种植至农场门口 | 包含播种、田间管理、收获、籽粒分离和实际发生的农场初级处理；将收获从种植中单列，避免机械燃料混计；本数据包为单一报告期，不含跨期储存。 | `usu-seed-poppy` |
| `food_route_condition` | 食用去向批次 | 记录防止蒴果粉尘污染的操作和所需后续清洁，但欧盟食品用途建议不能强加于全部未加工农场门口产品。 | `eu-poppy-2014` |
| `route_delta` | 人工与机械收获 | 母节点为蒴果收获和籽粒分离；不同技术改变能源输入、籽粒损伤和掉落损失的记录字段。一个批次可有分段作业，但同一物料通过量只计一次。 | `eu-poppy-2014`; `usu-seed-poppy` |
| `conditioning_only_if_used` | 通风、干燥、初步清洁 | 每批原籽经本交接节点移交；仅在实际处理时记录前后含水率、能源、剔籽、收集的蒴果粉尘与其他异物；直接移交时这些附加交换为零。 | `eu-poppy-2014` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `field` | 种籽罂粟田间种植 | required | All included annual crop cycles | Establish and manage Papaver somniferum for seed, handing mature crop to harvest. | per cultivated hectare and linked crop cycle |
| `harvest` | 蒴果收获与籽粒释放 | required | All represented seed harvests | Independently capture mature capsules and release raw seed; track collected straw, dropped seed and broken capsules as distinct physical outputs. | per cultivated hectare and harvest lot |
| `conditioning` | 农场门口交接及条件性初级处理和稳定化 | required | Every raw-seed lot is handed off; ventilation, drying or preliminary cleaning only when performed | Record pre/post moisture, energy, rejected seed, captured capsule dust, other impurities and moisture loss separately when conditioning occurs; no food processing. | per linked raw-seed lot |

### 过程：种籽罂粟田间种植（`field`）

#### 输入
##### 产品流

###### 播种用罂粟籽（`sowing_seed`）

购入或留种的播种籽进入本作物周期。

- 选定流：Poppy seed for sowing
- 流属性/单位：质量 / kg
- 数量规则：实际播下的质量，不含未播出的库存。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每作物周期每公顷种植面积，并转换为每 kg 净参考籽粒.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_inputs`
- 数量范围：暂定 QA 筛查；实际数量以本地前景记录为准
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：kg/ha
  - 基准：每作物周期每公顷种植面积
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 尿素肥料投入（`field_agricultural_nutrient_inputs`）

仅当声明的过程实际使用尿素肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：尿素肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的尿素肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每作物周期每公顷种植面积，并转换为每 kg 净参考籽粒.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_inputs`

###### 磷酸一铵肥料投入（`field_agricultural_nutrient_inputs_monoammonium_phosphate`）

仅当声明的过程实际使用磷酸一铵肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：磷酸一铵肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的磷酸一铵肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每作物周期每公顷种植面积，并转换为每 kg 净参考籽粒.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_inputs`

###### 氯化钾肥料投入（`field_agricultural_nutrient_inputs_potassium_chloride`）

仅当声明的过程实际使用氯化钾肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：氯化钾肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的氯化钾肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每作物周期每公顷种植面积，并转换为每 kg 净参考籽粒.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_inputs`

###### 施用的牛粪肥投入（`field_agricultural_nutrient_inputs_cattle_manure`）

仅当声明的过程实际使用施用的牛粪肥时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：施用的牛粪肥
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的施用的牛粪肥数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每作物周期每公顷种植面积，并转换为每 kg 净参考籽粒.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_inputs`

###### 农业石灰石投入（`field_agricultural_nutrient_inputs_agricultural_limestone`）

仅当声明的过程实际使用农业石灰石时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：农业石灰石
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的农业石灰石数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每作物周期每公顷种植面积，并转换为每 kg 净参考籽粒.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_inputs`

###### 灌溉用水（`irrigation_water`）

仅供应的灌溉水作为前景产品输入；降雨另行披露。

- 选定流：Irrigation water
- 流属性/单位：体积 / m3
- 数量规则：计量或有记录的灌溉供水量；雨养田为零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每作物周期每公顷种植面积，并转换为每 kg 净参考籽粒.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_inputs`
- 数量范围：暂定 QA 筛查；实际数量以本地前景记录为准
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20000
  - 单位：m3/ha
  - 基准：每作物周期每公顷种植面积
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

作物保护必需记录：完成前景数据包前，逐项列明实际施用的每一种制剂，保留商品名、有效成分、盐或化学形态、浓度、必要时的密度、施用量、日期和处理面积。每项交换选用一个物理上明确的产品身份；有效成分释放按物质及接收区室另行计算。缺少配方身份属于完整性缺口，不得用通用农药、虚构示例或假定为零替代。

###### 柴油（`field_fuel`）

仅在本过程实际使用柴油时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：每作物周期每公顷种植面积，并转换为每 kg 净参考籽粒。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：计量本过程和期间实际使用的柴油，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`crop_cycle`
- 证据类型：`collected_record`
- 采集协议：`cp_field_energy`

##### 废物流

无。

##### 基本流

无。

#### 输出
##### 产品流

###### 成熟结籽罂粟植株（`mature_crop`）

从种植交给收获的中间在田生物量，并非参考籽粒。

- 选定流：Mature poppy crop
- 流属性/单位：质量 / kg
- 数量规则：实测或按质量平衡推算的可收获植株生物量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每作物周期每公顷种植面积，并转换为每 kg 净参考籽粒.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_harvest`
- 数量范围：暂定 QA 筛查；实际数量以本地前景记录为准
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30000
  - 单位：kg/ha
  - 基准：每作物周期每公顷种植面积
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 收获前田间植株残体（`field_residue`）

收获前留田的叶与茎，与收获阶段掉落的籽粒及破碎蒴果分别记录。

- 选定流：Field vegetation residue
- 流属性/单位：质量 / kg
- 数量规则：估计留田质量，并声明干鲜基准。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每作物周期每公顷种植面积，并转换为每 kg 净参考籽粒.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_harvest`
- 数量范围：暂定 QA 筛查；实际数量以本地前景记录为准
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30000
  - 单位：kg/ha
  - 基准：每作物周期每公顷种植面积
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 土壤直接氧化亚氮（`soil_n2o`）

依据有记录的氮投入及方法计算管理土壤直接 N2O；发布交换前解析物种与空气介质匹配的具体流。

- 选定流：Nitrous oxide to air
- 流属性/单位：质量 / kg
- 数量规则：按已声明方法计算的直接 N2O 质量，不使用笼统肥料系数。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每作物周期每公顷种植面积，并转换为每 kg 净参考籽粒.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：按采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_field_emissions`
- 来源：`ipcc-2019-soils`
- 数量范围：暂定 QA 筛查；实际数量以本地前景记录为准
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg N2O/ha
  - 基准：每作物周期每公顷种植面积
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：蒴果收获与籽粒释放（`harvest`）

#### 输入
##### 产品流

###### 进入收获的成熟植株（`mature_crop_input`）

将种植产出的成熟植株转入独立的蒴果与籽粒收获边界。

- 选定流：Mature poppy crop
- 流属性/单位：质量 / kg
- 数量规则：与田间产出相同的实测中间质量；不重复计上游负荷。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每作物周期每公顷种植面积，并转换为每 kg 净参考籽粒.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_harvest`
- 数量范围：暂定 QA 筛查；实际数量以本地前景记录为准
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30000
  - 单位：kg/ha
  - 基准：每作物周期每公顷种植面积
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 柴油（`harvest_fuel`）

仅在本过程实际使用柴油时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：每作物周期每公顷种植面积，并转换为每 kg 净参考籽粒。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：计量本过程和期间实际使用的柴油，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`crop_cycle`
- 证据类型：`collected_record`
- 采集协议：`cp_harvest_energy`

###### 收获分离用电（`harvest_electricity`）

若农场内使用电动籽粒分离，计量其用电；否则记零。

- 选定流：Electricity supply
- 流属性/单位：能量 / kWh
- 数量规则：收获分离阶段计量或按批次分摊的用电。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每作物周期每公顷种植面积，并转换为每 kg 净参考籽粒.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_energy`
- 数量范围：暂定 QA 筛查；实际数量以本地前景记录为准
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5000
  - 单位：kWh/ha
  - 基准：每作物周期每公顷种植面积
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

无。

##### 基本流

无。

#### 输出
##### 产品流

###### 原籽目标产出（`raw_seed`）

从成熟蒴果中分离的目标籽粒产出，尚未进行可选的农场干燥或清洁。

- 选定流：Raw poppy seed
- 流属性/单位：质量 / kg
- 数量规则：按收获批次称量的实测含水状态籽粒。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每作物周期每公顷种植面积，并转换为每 kg 净参考籽粒.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_harvest`
- 数量范围：瑞士田间试验籽粒产量示例，非通用限值
  - 范围角色：典型范围（`typical_range`）
  - 下限：200
  - 上限：1700
  - 单位：kg/ha
  - 基准：每作物周期每公顷种植面积
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`agroscope-poppy-2005`

###### 收集的蒴果与秸秆共产品（`collected_straw`）

仅在单独收集并销售或转移作已声明用途时作为共产品；否则归田间残体或废物。不得把鸦片乳汁计作籽粒。

- 选定流：Collected poppy capsule and straw
- 流属性/单位：质量 / kg
- 数量规则：称量收集的干或鲜生物量并说明含水基准；未收集则为零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每作物周期每公顷种植面积，并转换为每 kg 净参考籽粒.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_harvest`
- 数量范围：暂定 QA 筛查；实际数量以本地前景记录为准
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30000
  - 单位：kg/ha
  - 基准：每作物周期每公顷种植面积
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 收获掉落籽粒（`dropped_seed`）

蒴果采收或籽粒释放时落入田间的罂粟籽；不含荚壳碎片及清洁剔籽。将留田记录为去向。

- 选定流：Dropped poppy seed
- 流属性/单位：质量 / kg
- 数量规则：根据收获抽样估算或收集称量的落籽质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每作物周期每公顷种植面积，并转换为每 kg 净参考籽粒.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_harvest`
- 数量范围：暂定 QA 筛查；实际数量以本地前景记录为准
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5000
  - 单位：kg/ha
  - 基准：每作物周期每公顷种植面积
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 收获遗留的破碎蒴果（`broken_capsule`）

收获时留田且无法回收的蒴果壁物料；不含已收集蒴果秸秆共产品与收获前植株残体。

- 选定流：Broken poppy capsules
- 流属性/单位：质量 / kg
- 数量规则：称量或抽样估算留田荚壳碎片质量，并注明含水基准。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每作物周期每公顷种植面积，并转换为每 kg 净参考籽粒.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_harvest`
- 数量范围：暂定 QA 筛查；实际数量以本地前景记录为准
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg/ha
  - 基准：每作物周期每公顷种植面积
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

无。

### 过程：农场门口交接及条件性初级处理和稳定化（`conditioning`）

#### 输入
##### 产品流

###### 进入农场门口交接的原籽（`raw_seed_input`）

每批原籽进入农场门口交接；通风、干燥或初步清洁仅在实际发生时记录。

- 选定流：Raw poppy seed
- 流属性/单位：质量 / kg
- 数量规则：关联称量的原籽收获批次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每个初级处理籽粒批次，并转换为每 kg 净参考籽粒.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning`
- 数量范围：暂定 QA 筛查；实际数量以本地前景记录为准
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5000
  - 单位：kg/ha
  - 基准：每作物周期每公顷种植面积
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 干燥或清洁用电（`conditioning_electricity`）

仅在农场门口移交前实际使用时记录通风、干燥风机或吸风除尘设备用电。

- 选定流：Electricity supply
- 流属性/单位：能量 / kWh
- 数量规则：初级处理批次计量用电；节点未启用则为零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每个初级处理籽粒批次，并转换为每 kg 净参考籽粒.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning`
- 数量范围：暂定 QA 筛查；实际数量以本地前景记录为准
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kWh/kg conditioned seed output
  - 基准：每 kg 实际初级处理批次的产出籽粒
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 柴油（`conditioning_fuel`）

仅在本过程实际使用柴油时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：每个初级处理籽粒批次，并转换为每 kg 净参考籽粒。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：计量本过程和期间实际使用的柴油，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_conditioning`

##### 废物流

无。

##### 基本流

无。

#### 输出
##### 产品流

###### 农场门口未经加工的罂粟籽（`farm_gate_seed`）

参考籽粒在收获后离开农场，仅包含已声明的可选农场初级处理；并非油、可直接食用的精清洁籽粒或认证播种籽。

- 选定流：Poppy seed `c49b37e3-df47-4caf-9a6a-2df1a528800a`
- 流属性/单位：质量 / kg
原始产出计量与核对要求：按已声明含水及杂质状态称量的净移交籽粒。

- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每个初级处理籽粒批次，并转换为每 kg 净参考籽粒.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gate_lot`
- 数量范围：暂定 QA 筛查；实际数量以本地前景记录为准
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5000
  - 单位：kg/ha
  - 基准：每作物周期每公顷种植面积
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 农场清洁剔除籽粒（`rejected_seed`）

仅在初步清洁时记录：从合格批次剔出的非目标罂粟籽。记录处置或单独转移，不计入参考籽粒。

- 选定流：Rejected poppy seed
- 流属性/单位：质量 / kg
- 数量规则：单独称量的淘汰籽粒质量，不使用混合筛下物质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每个初级处理籽粒批次，并转换为每 kg 净参考籽粒.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning`
- 数量范围：暂定 QA 筛查；实际数量以本地前景记录为准
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5000
  - 单位：kg/ha
  - 基准：每作物周期每公顷种植面积
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 收集的蒴果壁粉尘（`captured_capsule_dust`）

仅在农场清洁收集蒴果来源粉尘时记录：单独计量收集固废及去向。逸散到空气的排放需另列物种和介质明确的交换。

- 选定流：Captured poppy capsule dust
- 流属性/单位：质量 / kg
- 数量规则：吸风除尘器或过滤器收集粉尘的称量值，或有凭据的固体平衡值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每个初级处理籽粒批次，并转换为每 kg 净参考籽粒.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning`
- 数量范围：暂定 QA 筛查；实际数量以本地前景记录为准
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2000
  - 单位：kg/ha
  - 基准：每作物周期每公顷种植面积
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 其他清除异物（`other_impurities`）

仅在初步清洁去除非籽粒、非蒴果的土粒、石子等异物时记录；物质和处置与剔籽及蒴果粉尘分开。

- 选定流：Foreign material removed from seed
- 流属性/单位：质量 / kg
- 数量规则：按物质类别单独称量的异物固体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每个初级处理籽粒批次，并转换为每 kg 净参考籽粒.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning`
- 数量范围：暂定 QA 筛查；实际数量以本地前景记录为准
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2000
  - 单位：kg/ha
  - 基准：每作物周期每公顷种植面积
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 干燥蒸发水分（`drying_water_vapour`）

仅在实际干燥时按干燥前后籽粒质量及含水率计算去除水分。

- 选定流：Water vapour to air
- 流属性/单位：质量 / kg
- 数量规则：在闭合水质量控制体上确定有据蒸发量：进入材料的水 + 实际加水 + 期初水库存 - 全部合格品/联产品/拒收物/残体出口带水 - 单独液体排出/转出水 - 期末水库存。逐材料流采用实测湿质量乘湿基含水率，液体体积采用兼容密度；内部循环抵销。适用时保留实际降雨/复湿，总鲜干质量差并非全为水。各项和蒸发路径须独立有据；未解释或负平衡需调查，不能强记为水蒸气释放或截为零。水量与干物质损失及其他挥发物分开，按原匹配最终参考量归属并归一化一次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每个初级处理籽粒批次，并转换为每 kg 净参考籽粒.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：按采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning`
- 数量范围：暂定 QA 筛查；实际数量以本地前景记录为准
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2000
  - 单位：kg/ha
  - 基准：每作物周期每公顷种植面积
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `single_output_default` | 仅出售籽粒的田块 | 未被收集或未形成独立用途的蒴果、秸秆及残体为留田残体或废物，不人为制造共产品。 | `eu-poppy-2014` |
| `straw_coproduct` | 籽粒加可销售蒴果/秸秆 | 若蒴果或秸秆单独收集并移交，记录两类产品质量、含水率、去向和交接点；先尽量按专属作业归属负荷，共享种植/收获负荷再按一致的干物质量分配并披露选择及敏感性。乳汁不属于籽粒。 | `eu-poppy-2014` |
| `run_linkage` | 批次或联合收获作业 | 每项投入、产出、清洁和换线事件关联唯一作业批次；跨批次共享燃料或电力按记录的作业时间或实测通量分摊一次，不得重复计入。 |  |

## 8. 前景数据采集、计算与质量规则

清单完整性：具名条件卡是单项交换示例，不是穷尽配方，也不要求使用这些产品。完成前景数据包前，逐项列出所有实际种植材料、养分产品、作物保护制剂、资产材料、作业服务、载能体、包装材料、废物流及适用的基本物质，使用明确的物理身份、状态、原始属性/单位、来源或接收区室及实测或按方法计算的数量。身份或数量缺失属于完整性缺口，不得假定为零。保留实际批次和阶段基准；不得将中间转移累加为额外最终产出，也不得重复计入采购服务已包含的负荷。

先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


所有范围都是地区示例或暂定 QA 筛查，不是清单默认数量。范围外数值需要复核但可保留有证据的真实记录；未启用条件节点的投入为零。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_inputs` | field | 播种籽、N/P/K 制剂、灌溉、植保 | 地块作业台账 | 地块、日期、面积、产品、配方、净量、水表读数 | 发票、施用记录及水表；原始汇总与分配：按物理产品归总，复合肥不重复 | kg、m3、ha | 每次施用 | 整个作物周期 | 每田块 | 每声明的参考流 | 发票、称量/计量及作业日志 |
| `cp_field_energy` | field | 田间燃料 | 机具日志 | 作业、设备、日期、耗油量、田块 | 油票和机器台账；原始汇总与分配：按实际作业量归属 | L | 每次作业 | 播种至收获前 | 每田块 | 每声明的参考流 | 油票、工时 |
| `cp_field_emissions` | field | 土壤 N2O | 氮收支计算底稿 | 合成/有机氮、残体氮、土壤/气候参数、所用因子 | 按声明的 IPCC 或等效方法计算；原始汇总与分配：保留源项和单位转换 | kg N2O | 每周期 | 整个作物周期 | 每田块 | 每声明的参考流 | 方法版本与输入凭据 |
| `cp_crop_harvest` | field/harvest | 成熟植株、原籽、收集的蒴果秸秆、收获前残体、落籽、破碎蒴果 | 收获批次台账 | 面积、批次、原籽重量与含水率、收集秸秆重量、收获前留田残体、落籽抽样质量、留田破碎蒴果质量及各自去向 | 地磅、秤、分别抽样与物料平衡；原始汇总与分配：相邻过程的成熟植株只对接一次；落籽与破碎蒴果分别汇总 | kg、ha、% | 每批次 | 收获全期 | 每田块/批次 | 每声明的参考流 | 秤单、物质抽样、去向单 |
| `cp_harvest_energy` | harvest | 收获燃料与用电 | 设备批次日志 | 作业批次、燃料、表计用电、设备 | 设备及能源记录；原始汇总与分配：共享作业按时间或通量只分摊一次 | L、kWh | 每作业批次 | 收获期 | 每设备/批次 | 每声明的参考流 | 油票、电表、工时 |
| `cp_conditioning` | conditioning | 原籽、用电、燃料、剔籽、收集的蒴果粉尘、其他异物和蒸发水 | 农场处理批次台账 | 处理开关、前后质量及含水率、电/燃料表计、单独称量的剔籽/收集粉尘/其他异物及各自处置 ；含拒收物和残体的全部进出材料带水；实际加水/降雨；单独液体转出；期初期末水库存；湿基含水率/密度；有据蒸发及不确定性| 称量、含水检测、能源表计、分类收集；原始汇总与分配：分物质平衡并对接原籽批次；逸散粉尘另行解析排放交换 | kg、%、kWh、L | 每处理批次 | 农场门口前 | 每处理批次 | 每声明的参考流 | 分类称重、检验、能源凭证与去向单 |
| `cp_gate_lot` | conditioning | 净参考籽粒 | 移交批次凭证 | 净重、含水率、杂质、主要去向、移交时间 | 地磅或校验秤及批次检验；原始汇总与分配：合计净质量作参考分母 | kg、% | 每交付批次 | 农场门口移交 | 每交付批次 | 每声明的参考流 | 秤单、批次号、检测单 |
| `cp_phase1_environment_coverage` | field | 按实际节点的管理环境覆盖 | 场址活动方法台账 | 场址及实际管理节点；面积；有日期占用区间；共同使用者；建植/未产期历史；实际前后土地类别及转化日期/面积；碳核算覆盖；上游土地覆盖 | 按实际负责生产节点及匹配批次/期间采集原始记录，保留来源、方法适用性和不确定性。与现有协议及供应覆盖核对，不新增重复事件；不适用须明示有据，缺少证据属于缺口。 | 适用的原生活动单位、kg N或物质、面积/时间 | 事件及年度/批次核对 | 匹配生产/队列期间 | 全部实际管理生产节点 | 执行适用覆盖核算后最终归一化一次 | 原始记录、方法工作表及适用性证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `per_kg_gate` | 田间、收获及初级处理各交换 | 已归属本周期的交换总量 / 同周期净交付籽粒 kg；中间流对接，不另加上游负荷。 | 交换量、净交付质量、批次连接 | 每 kg 参考籽粒交换 |  |
| `drying_loss` | 条件性干燥 | 前后净质量及湿基含水率得出蒸发水；校核干物质量和剔籽、蒴果粉尘、其他异物各自的固体去除量。 | 干燥前后质量、含水率及三类分开记录的固体去除量 | kg 蒸发水与平衡差 |  |
| `soil_n2o_method` | 管理土壤 | 使用已声明的 IPCC 区域/层级因子及全部适用氮源计算 N2O，注明直接与间接边界。 | 氮投入、残体氮、方法因子 | kg N2O | `ipcc-2019-soils` |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | 最终基本交换使用已识别物质的质量和一个实际接收环境，养分／活动台账另存：该物种的 N2O-N × 44/28 为 N2O，NH3-N × 17/14 为 NH3，硝酸盐氮 × 62/14 为硝酸盐，磷酸盐磷 × 95/31 为磷酸盐。若选定流为元素磷，则报告 kg P，仅在物种口径有据时将磷酸盐质量乘 31/95。只有方法输出按元素计时才换算一次，实测化合物质量不得再换算。总养分损失不得无据归于单一物种，土壤残余／留存养分不是排放。保留直接／间接路径台账，不重复所选方法或上游清单已经包含的路径。因子不确定性范围只按其声明基准检查因子，不是最终化合物数量或场址排放的允许界限。用合格参考数量和匹配实测产出，将可归属化合物质量归一化一次。活动量、身份或接收环境未知时保留证据缺口，不得宣称完整。 | `cp_field_emissions`; 物种特定活动量台账、方法路径和因子基准、匹配合格产出 | 按身份区分的交换和对账活动记录 |  |

### 环境覆盖计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_managed_land_coverage` | 实际管理生产节点 | 逐实际自主管理生产场址采集占用面积及有日期的占用区间，包括应归属的建植/未产期与生产期。占用量为面积乘实际时长，明确换为所选面积时间单位（1 ha=10,000 m2，时间按年）；只有每作物周期公顷数而无时长不能得到面积时间。建立、管理区间重叠时划分区间或取并集，同一面积时间只计一次，实际共同使用者份额合计为一。土地转化按声明土地利用方法，另记实际前/后土地类别、事件面积和日期；转化使用面积单位，不能与占用量相加。种植、持续占用或前土地资料缺失不能证明发生转化，也不能证明零转化。适用时保留历史事件归属及碳库/排放方法覆盖，不编造转化或通用固碳信用。分别建立兼容基本流身份，采用已核实UUID或明确未决身份，归属一次后按匹配最终参考产出归一化。外购已完成的生物投入承接兼容上游土地覆盖一次，不在本地重复。适用土地身份、面积、时长或前状态证据缺失属于完整性缺口；有据无转化可记录为不适用。 | cp_phase1_environment_coverage | 按匹配最终参考量的应归属原生环境数量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `lot_identity` | 全部批次 | 原籽、处理与净移交批次可追溯；用途、含水率、杂质状态完整。 | 批次号、秤单及检测单 |
| `mass_closure` | 收获及处理 | 植株、原籽、收集秸秆、收获前残体、落籽、破碎蒴果、剔籽、收集蒴果粉尘、其他异物与失水量在各自含水基准上逐项核对；同一物质不得跨节点重复计量。 | 分物质物料平衡表 |
| `conditional_zero` | 未启用初级处理 | 不生成干燥、清洁或稳定化能源与废物交换。 | 作业记录及移交单 |
| `source_limit` | 食品去向 | 欧盟建议仅用于有该市场用途的条件性质量管理，不据此剔除其他合法未加工籽粒。 | 用途声明与合规记录 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `gate_identity` | 参考流 | UUID、Mass、kg、农场门口及未经加工状态须一致；油、蒴果、秸秆及认证播种籽不得替代。 |  |
| `route_and_runs` | 收获技术与批次 | 明确人工/机械或混合作业的时间与通量；燃料、籽粒损失和换线记录只能归属一次。 | `eu-poppy-2014`; `usu-seed-poppy` |
| `coproduct_decision` | 蒴果/秸秆 | 有独立交接才作共产品，并披露实际分配基础；否则归残体/废物。 | `eu-poppy-2014` |
| `range_review` | 全部流卡 | 核对范围、单位、分母、证据与条件开关；超出暂定范围需调查但不自动改写真实数据。 |  |
| `moisture_and_contamination` | 食用去向及干燥 | 记录实际批次含水和蒴果粉尘风险；食品指南数值不是本通用参考流的通用合格线。 | `eu-poppy-2014` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 农场门口未加工罂粟籽前景数据包 |
| downstream_use | 可用作 `secondary_dataset` 或 `background_dataset` 构建过程及生命周期模型 |
| allowed_use | 有相同籽粒状态、门口边界和披露字段的种植、食用及油用上游建模 |
| excluded_use | 罂粟籽油、精制食品配料、药用提取及认证播种籽的替代数据 |
| required_metadata | 地区、季节、田块、品种/用途、收获技术、批次、净重、含水率、杂质、初级处理和秸秆去向 |
| required_quality_disclosure | 质量平衡、作业及能源记录覆盖、条件处理开关、排放方法、共产品分配及不确定性 |
| update_trigger | 生产路线、农场门口产品状态、用途、收获技术或数据年度发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `eu-poppy-2014` | `official_guidance` | European Commission Recommendation 2014/662/EU, https://eur-lex.europa.eu/eli/reco/2014/662/oj/eng | Food-route harvest and cleaning risks; conditional quality and contamination disclosure, not universal farm-gate thresholds. |
| `usu-seed-poppy` | `extension_guidance` | Utah State University, Seed Poppy in the Garden, https://extension.usu.edu/yardandgarden/research/seed-poppy-in-the-garden | Annual crop, mature capsule harvest, and separation route. |
| `agroscope-poppy-2005` | `literature` | Frick and Hebeisen, Poppy, an alternative plant, Agroscope, 2005, https://www.agrarforschungschweiz.ch/en/2005/01/poppy-an-alternative-plant/ | Regional field-trial seed-yield example of 2–17 dt/ha (200–1700 kg/ha). |
| `ipcc-2019-soils` | `method_factor` | IPCC 2019 Refinement, Volume 4 Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | Managed-soil N2O method and input completeness. |
