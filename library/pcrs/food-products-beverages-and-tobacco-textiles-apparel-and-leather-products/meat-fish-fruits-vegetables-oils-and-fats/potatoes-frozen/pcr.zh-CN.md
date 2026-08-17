---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.potatoes-frozen
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 冷冻马铃薯

## 1. 范围与适用性

本 PCR 适用于通过冷冻保存、以未烹制状态供应，或仅经水煮或蒸制后供应的整颗或切制马铃薯。范围覆盖冷冻马铃薯产品的工厂门生产，包括原料马铃薯接收与准备、申报的水煮或蒸制步骤、冻结、包装以及生产设施内申报时长的冻藏。

冷冻土豆泥、冷冻薯条、冷冻薯片、经油脂预煮的马铃薯、调味马铃薯预制菜，以及以油炸、制泥、烘烤或与其他主要配料配方加工为定义性转化的产品不属于本 PCR。投入马铃薯的农业生产采用上游数据集表示，不在前景工厂过程中重复构建。默认工厂门边界不包括出厂配送、零售储存、消费者制备和生命末期；研究明确扩展范围时，应将这些阶段单独建模和报告。

本 PCR 为申报的产品、设施、技术、地域和参考期生产前景数据包。下列候选范围均为有意设置得较宽的 QA 筛查区间，而不是默认清单值。用于发布关键建模时，必须以实测前景数据或经评审的来源证据替换。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.potatoes-frozen |
| classification_refs | CPC 3.0：21313，Potatoes, frozen（`exact`） |
| covered_products | 冷冻的整颗或切制马铃薯，未烹制或仅经水煮或蒸制 |
| excluded_products | 冷冻土豆泥；冷冻薯条；冷冻薯片；经油脂预煮的马铃薯；烘烤、调味、配方加工或其他方式制备的马铃薯产品 |
| representative_product | 生产设施门口的净重冷冻马铃薯产品 |
| production_route | 接收与分选 -> 视情况清洗、去皮和切制 -> 可选水煮或蒸制 -> 视情况冷却或脱水 -> 冻结 -> 包装 -> 申报的冻藏 |
| market_state | 冷冻、已包装或以其他方式达到可发运状态、位于工厂；申报未烹制、水煮或蒸制状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 满足所申报 CPC 21313 产品状态和质量规格的冷冻马铃薯 |
| How much | 1 kg 产品净重，不含包装 |
| How well | 在生产设施达到可发运状态；申报冷冻状态、切制形式、带皮状态及未烹制、水煮或蒸制路线；排除制泥、油炸、切片制脆片、油脂预煮和配方加工的马铃薯产品 |
| How long or cycle | 一个生产批次，直至申报的工厂冻藏期结束 |
| reference_flow_link | rf_frozen_potatoes_at_plant |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净重冷冻马铃薯产品 |
| 参考产品流 | Potatoes, frozen / 冷冻土豆 `cca3d996-be28-4f23-915d-6432bd1bdac3` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 未烹制、水煮或蒸制路线；整颗或切制形式；带皮状态；冻结技术；包装形式和净重；工厂门点位；冻藏时长和温度记录；地域；参考期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告 1 kg 净重冷冻马铃薯产品；参考数量不包含一级、二级和三级包装质量，并将包装作为单独清单投入记录。 |
| `mass_balance_basis` | 马铃薯、中间产品、最终产品、不合格品和马铃薯残余物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用同一湿重基准上的批次或生产期实测质量。申报对质量平衡有重大影响的沥水、冰衣、附着水或水分变化约定。 |
| `water_measurement` | 工艺用水和废水 | 质量或将实测体积换算为质量 | kg | 优先采用水表、发票、罐体或批次记录。将体积换算为质量时，保留实测体积、所用密度、重要时的温度基准及换算过程。 |
| `energy_measurement` | 电力、燃料、蒸汽、热水和外购冷量 | 计量能量或供应商数量 | kWh、MJ、kg 或有记录的供应商单位 | 保留原始载能体及单位；具备计量条件时分开冻结与储存，并记录所有换算以及分摊到参考流的方法。 |
| `frozen_state_record` | 冻结出口和冻藏 | 实测温度与时间 | deg C 以及 h 或 d | 记录产品温度或代表性空气温度、监测位置、适用时的设定值、温度偏离处理和数据集代表的储存时长；应用产品规格或适用冷链要求，不虚构通用阈值。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 加工设施接收的新鲜马铃薯，并申报接收质量、产地或供应商组、加工前储存条件以及质量或剔除状态 |
| starting_condition_role | 由接收与采购记录支持的前景工厂门起始条件 |
| product_classification_scope | CPC 3.0 代码 21313 下的冷冻马铃薯：未烹制或经水煮/蒸制；排除制泥、薯条、薯片、油脂预煮及其他方式制备的马铃薯产品 |
| recursive_input_rule | 若外购冷冻马铃薯或退回的冷冻马铃薯返工料进入前景系统，将其作为带有独立上游数据集的单独产品投入记录，不在本数据包中递归重建同一产品类别生产。 |
| upstream_dataset_requirement | 对新鲜马铃薯、水、载能体、制冷剂、包装、加工助剂及外部废物处理采用在时间、地域和技术上有代表性的上游数据集。 |
| disclosure | 申报切制形式、带皮状态、未烹制/水煮/蒸制路线、准备工序、冻结技术、包装形式、冻藏时长、冷链监测基准、排除工序及工厂门外的任何范围扩展。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `system_boundary_rule_1` | 前景工厂生产 | 纳入接收与分选、准备、所申报的条件性烹制路线、使用时的冷却或脱水、冻结、包装、工厂冻藏，以及申报门点前发生的直接公用工程、制冷剂损失、废物、废水和现场处理。 | `codex-cxc-8-1976` |
| `system_boundary_rule_2` | 上游投入 | 将每项外购产品或服务投入链接到代表性上游数据集；不得仅因马铃薯生产、电力、燃料、供水、包装生产、制冷剂生产或外部处理位于前景设施之外而省略。 | `eu-pef-2021-2279` |
| `system_boundary_rule_3` | 条件性烹制 | 仅当参考产品以水煮或蒸制状态销售时，纳入水煮或蒸制及相应冷却或脱水；未记录按产量加权的汇总方法时，数据集不得混合未烹制和已烹制路线。 | `un-cpc-3-0-21313` |
| `system_boundary_rule_4` | 下游阶段 | 默认工厂门数据集排除出厂运输、配送储存、零售、消费者制备和生命末期。申报研究纳入时，应作为单独下游阶段建模和披露。 | `eu-pef-2021-2279` |
| `system_boundary_rule_5` | 冷链与损失 | 纳入冻结和申报工厂储存期所对应的电力或外购冷量、制冷剂补充量或计算泄漏、温度监测、产品损失和废物处理。 | `codex-cxc-8-1976` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receiving_preparation` | 接收、分选、清洗、去皮和切制 | `required` | 始终纳入；只有在记录证明未使用时，单项准备工序才可为零 | 前景准备 | 每 kg 转移到下一过程的准备后马铃薯，并归一化至 1 kg 参考产品 |
| `cooking_conditioning` | 水煮或蒸制、冷却和脱水 | `conditional` | 仅对水煮或蒸制参考产品纳入 | 前景热调理 | 每 kg 转移到冻结的熟制马铃薯，并归一化至 1 kg 参考产品 |
| `freezing_packaging` | 冻结与包装 | `required` | 始终纳入 | 前景冻结与包装 | 1 kg 净重冷冻马铃薯产品 |
| `frozen_storage` | 工厂冻藏 | `required` | 对工厂门所代表的储存时长纳入 | 前景储存 | 1 kg 净重冷冻马铃薯产品及其申报储存时长 |
| `outbound_distribution` | 冷藏出厂配送 | `excluded_by_default` | 仅当申报研究扩展到生产设施门外时纳入 | 下游配送 | 扩展范围下的吨公里及储存时间 |

### 过程：接收、分选、清洗、去皮和切制（`receiving_preparation`）

#### 输入

##### 产品流

###### 接收的新鲜马铃薯（`raw_potatoes_input`）

记录进入准备过程的新鲜马铃薯质量，包括后续剔除的批次，并将该投入链接到代表性上游马铃薯生产数据集。

- 选定流：新鲜马铃薯（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：分配到生产批次或生产期的实测接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净重冷冻马铃薯参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_mass_balance`
- 来源：
- 数量范围：暂定原料马铃薯投入 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.9
  - 上限：2.0
  - 单位：kg
  - 基准：每 1 kg 净重冷冻马铃薯参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 供应的准备用水（`preparation_water_input`）

记录用于清洗、去皮、切制、水送或可归属于所代表生产的卫生清洁且跨越过程边界的水。

- 选定流：工艺用水（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：实测或核算平衡后的准备用水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净重冷冻马铃薯参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_water`
- 来源：
- 数量范围：暂定准备用水 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 净重冷冻马铃薯参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 供应的准备工序电力（`preparation_electricity_input`）

记录输送、分选、清洗、去皮、切制、泵送及可归属准备辅助设备的电力。

- 选定流：供应至场址的电力（Tiangong UUID 未解决）
- 流属性/单位：Energy / kWh
- 数量规则：计量或核算平衡后的准备工序电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净重冷冻马铃薯参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_energy`
- 来源：
- 数量范围：暂定准备工序电力 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kWh
  - 基准：每 1 kg 净重冷冻马铃薯参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

通常不预期废物投入。适用时，将进入现场处理的返回废物作为单独行记录。

##### 基本流

不规定直接基本流投入。适用时，将直接取用的水记录为基本流投入，不得与外购水重复。

#### 输出

##### 产品流

###### 转移的准备后马铃薯（`prepared_potatoes_output`）

依据实测转移质量或经核算的准备工序质量平衡计算准备后马铃薯产出。

- 选定流：用于冻结或烹制的准备后马铃薯（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量，或接收实测质量减去实测剔除物和可核算损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净重冷冻马铃薯参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_mass_balance`
- 来源：
- 数量范围：暂定准备工序产率 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.6
  - 上限：1.2
  - 单位：kg
  - 基准：每 1 kg 净重冷冻马铃薯参考产品的准备后马铃薯产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 分选、去皮和修整残余物（`preparation_residue_output`）

按去向记录马铃薯残余物和剔除物，并区分可销售副产品、动物饲料用途、回收和废物处理。

- 选定流：马铃薯准备残余物（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：按去向实测的残余物质量，或附有核算证据的质量平衡差额
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净重冷冻马铃薯参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_mass_balance`
- 来源：
- 数量范围：暂定准备残余物 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.8
  - 单位：kg
  - 基准：每 1 kg 净重冷冻马铃薯参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 准备工序废水（`preparation_wastewater_output`）

记录离开前景设施或进入现场处理的废水，并申报去向和处理状态。

- 选定流：马铃薯准备废水（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：实测排放量或经核算的水平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净重冷冻马铃薯参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_water`
- 来源：
- 数量范围：暂定准备废水 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 净重冷冻马铃薯参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

只有在本过程边界内实际发生且有实测或带引证的计算方法支持时，才记录现场水处理或燃料燃烧的直接排放。

### 过程：水煮或蒸制、冷却和脱水（`cooking_conditioning`）

#### 输入

##### 产品流

###### 用于烹制的准备后马铃薯（`prepared_potatoes_cooking_input`）

当产品在冻结前经水煮或蒸制时，记录从准备工序转移的准备后马铃薯。

- 选定流：用于烹制的准备后马铃薯（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：等于已烹制路线从准备工序实测或核算后的转移量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：已烹制路线每 1 kg 净重冷冻马铃薯参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_cooking_mass_balance`
- 来源：`un-cpc-3-0-21313`
- 数量范围：暂定已烹制路线投入 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.6
  - 上限：1.3
  - 单位：kg
  - 基准：已烹制路线每 1 kg 净重冷冻马铃薯参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 供应的烹制和冷却用水（`cooking_water_input`）

记录水煮、以水供应的蒸汽发生、冷却及可归属清洁用水，并避免与外购蒸汽重复计算。

- 选定流：工艺用水（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：实测或核算后的烹制与冷却用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：已烹制路线每 1 kg 净重冷冻马铃薯参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cooking_utilities`
- 来源：
- 数量范围：暂定烹制用水 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：已烹制路线每 1 kg 净重冷冻马铃薯参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 供应的烹制热能（`cooking_thermal_energy_input`）

记录可归属于水煮或蒸制的外购蒸汽、热水或现场燃料，保留载能体并避免锅炉燃料与输送蒸汽重复计算。

- 选定流：热能载体或蒸汽（Tiangong UUID 未解决）
- 流属性/单位：Energy 或供应商数量 / MJ、kg 蒸汽或有记录的单位
- 数量规则：计量或核算的热能消耗，并采用有记录的因子换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：已烹制路线每 1 kg 净重冷冻马铃薯参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cooking_utilities`
- 来源：
- 数量范围：暂定烹制能耗 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：MJ
  - 基准：已烹制路线每 1 kg 净重冷冻马铃薯参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

通常不预期废物投入。仅在适用时记录进入处理的返回烹制废物。

##### 基本流

适用时将直接取用的水记录为基本流投入，并避免与外购工艺用水重复。

#### 输出

##### 产品流

###### 转移到冻结的熟制马铃薯（`cooked_potatoes_output`）

记录沥水或脱水后转移到冻结的熟制马铃薯质量，并申报水煮或蒸制路线。

- 选定流：用于冻结的水煮或蒸制马铃薯（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：申报沥水或脱水后的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：已烹制路线每 1 kg 净重冷冻马铃薯参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cooking_mass_balance`
- 来源：`un-cpc-3-0-21313`
- 数量范围：暂定熟制产品产出 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.6
  - 上限：1.3
  - 单位：kg
  - 基准：已烹制路线每 1 kg 净重冷冻马铃薯参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 烹制与冷却废水（`cooking_wastewater_output`）

记录水煮、冷却、沥水及可归属清洁产生的废水，并申报处理去向。

- 选定流：烹制与冷却废水（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：实测排放量或经核算的水平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：已烹制路线每 1 kg 净重冷冻马铃薯参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cooking_utilities`
- 来源：
- 数量范围：暂定烹制废水 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：已烹制路线每 1 kg 净重冷冻马铃薯参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

仅当热量在现场产生且具备带引证的燃料到排放计算或实测烟气记录时，记录直接燃烧排放。

### 过程：冻结与包装（`freezing_packaging`）

#### 输入

##### 产品流

###### 进入冻结的马铃薯产品（`potatoes_to_freezing_input`）

记录进入冻结设备的未烹制准备后马铃薯或熟制调理马铃薯；除非记录产量份额和路线清单，不得汇总不同路线。

- 选定流：进入冻结的准备后或熟制马铃薯（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：来自适用上游前景过程的实测转移质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净重冷冻马铃薯参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_freezing_mass_balance`
- 来源：`codex-cxc-8-1976`
- 数量范围：暂定冻结设备投入 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.6
  - 上限：1.3
  - 单位：kg
  - 基准：每 1 kg 净重冷冻马铃薯参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 供应的冻结与包装电力（`freezing_electricity_input`）

记录冻结设备、制冷辅助设备、输送机、包装设备和可归属除霜的电力；具备计量条件时与工厂储存分开。

- 选定流：供应至场址的电力（Tiangong UUID 未解决）
- 流属性/单位：Energy / kWh
- 数量规则：计量或核算后的冻结与包装电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净重冷冻马铃薯参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_energy`
- 来源：`codex-cxc-8-1976`
- 数量范围：暂定冻结电力 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.02
  - 上限：2
  - 单位：kWh
  - 基准：每 1 kg 净重冷冻马铃薯参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 供应的包装材料（`packaging_material_input`）

按材料和质量记录每种一级、二级和三级包装；仅纳入可归属于参考产品的份额。

- 选定流：按材料类型划分的包装材料（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：物料清单质量加实测或核算后的生产线损耗
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净重冷冻马铃薯参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：
- 数量范围：暂定包装质量 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg
  - 基准：每 1 kg 净重冷冻马铃薯参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

通常不预期废物投入。只有当外部产生废物实际属于申报前景系统时，才记录接收用于处理的废物。

##### 基本流

本过程不规定直接基本流投入。

#### 输出

##### 产品流

###### 冷冻马铃薯参考产品（`frozen_potatoes_output`）

这是定量参考产出。记录冻结后的产品净重，不包含包装质量。

- 选定流：Potatoes, frozen / 冷冻土豆 `cca3d996-be28-4f23-915d-6432bd1bdac3`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：固定参考产出 1 kg 净重冷冻马铃薯产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：
- 来源：

##### 废物流

###### 包装线损耗（`packaging_waste_output`）

按材料和处理去向分别记录包装边角料及不合格包装产品。

- 选定流：按材料类型划分的包装废物（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：实测边角料或包装质量平衡差额
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净重冷冻马铃薯参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：
- 数量范围：暂定包装废物 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：kg
  - 基准：每 1 kg 净重冷冻马铃薯参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 冻结系统制冷剂排放（`freezing_refrigerant_emission`）

依据设备特定的补充、回收和库存变化记录计算排放到空气的制冷剂；明确制冷剂物种，不得将未指明物种的汇总量作为已表征基本流报告。

- 选定流：排放到空气的制冷剂物种（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：分配到冻结和包装设备的计算制冷剂损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净重冷冻马铃薯参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_freezing_refrigerant`
- 来源：
- 数量范围：暂定制冷剂损失 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.02
  - 单位：kg
  - 基准：每 1 kg 净重冷冻马铃薯参考产品排放的制冷剂
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：工厂冻藏（`frozen_storage`）

#### 输入

##### 产品流

###### 进入储存的已包装冷冻马铃薯（`stored_product_input`）

记录转入冻藏的参考产品，并核算储存损失和发运质量。

- 选定流：Potatoes, frozen / 冷冻土豆 `cca3d996-be28-4f23-915d-6432bd1bdac3`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归一化至可发运产出的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每发运 1 kg 净重冷冻马铃薯参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_product_records`
- 来源：`codex-cxc-8-1976`
- 数量范围：暂定储存投入 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1.1
  - 单位：kg
  - 基准：每发运 1 kg 净重冷冻马铃薯参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 供应的冻藏电力（`storage_electricity_input`）

记录申报储存时长内制冷、风机、照明、除霜及可归属储存辅助设备的电力。

- 选定流：供应至场址的电力（Tiangong UUID 未解决）
- 流属性/单位：Energy / kWh
- 数量规则：采用占用质量-时间或其他披露的因果驱动因子分配的计量或核算储存电力
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：申报储存时长内每 1 kg 净重冷冻马铃薯参考产品
- 基准类型：储存时长（`storage_duration`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_storage_energy`
- 来源：`codex-cxc-8-1976`
- 数量范围：暂定储存电力 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kWh
  - 基准：申报工厂储存时长内每 1 kg 净重冷冻马铃薯参考产品
  - 基准类型：储存时长（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

通常不预期废物投入。

##### 基本流

本过程不规定直接基本流投入。

#### 输出

##### 产品流

###### 可发运冷冻马铃薯产品（`dispatch_ready_product_output`）

记录经过所代表储存期后，在申报工厂门点位的合格冷冻马铃薯产品净重。

- 选定流：Potatoes, frozen / 冷冻土豆 `cca3d996-be28-4f23-915d-6432bd1bdac3`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：固定参考产出 1 kg 净重可发运冷冻马铃薯产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：
- 来源：

##### 废物流

###### 冻藏产品损失（`storage_product_loss_output`）

按处理或回收去向记录损坏、解冻、不符合规格或其他原因损失的产品。

- 选定流：冷冻马铃薯产品损失（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：实测库存核销或核算后的储存质量平衡差额
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每发运 1 kg 净重冷冻马铃薯参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_product_records`
- 来源：
- 数量范围：暂定冻藏损失 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg
  - 基准：每发运 1 kg 净重冷冻马铃薯参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 冻藏制冷剂排放（`storage_refrigerant_emission`）

依据储存系统补充、回收和库存变化记录计算排放到空气的制冷剂，并明确制冷剂物种。

- 选定流：排放到空气的制冷剂物种（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：按设备服务及占用质量-时间分配的计算制冷剂损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：申报储存时长内每 1 kg 净重冷冻马铃薯参考产品
- 基准类型：储存时长（`storage_duration`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_storage_refrigerant`
- 来源：
- 数量范围：暂定储存制冷剂 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.02
  - 单位：kg
  - 基准：申报储存时长内每 1 kg 净重冷冻马铃薯参考产品排放的制冷剂
  - 基准类型：储存时长（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | 共享前景工序 | 在可行时，通过细分未烹制与已烹制路线、冻结线、包装形式和储存期，并直接计量其材料和能源使用来避免分配。 | `eu-pef-2021-2279` |
| `allocation_rule_2` | 马铃薯残余物和可销售次级产出 | 首先将每项产出分类为参考产品、可销售共产品、可回收材料或废物，并保持经核算的质量平衡。未经论证，不得向可销售产出分配零负荷。 | `eu-pef-2021-2279` |
| `allocation_rule_3` | 不可避免的共享负荷 | 无法细分时，采用实测质量、设备时间、热负荷或占用质量-时间等物理因果驱动因子。仅在不存在可辩护的物理关系时采用经济分配，并披露价格、参考期、分配份额和敏感性检查。 | `eu-pef-2021-2279` |
| `allocation_rule_4` | 再循环、回收和被替代产品 | 将收集和处理负荷保留在申报边界内，任何再循环或替代信用仅在下游模型中按一种披露的方法应用；不得在前景数据集中同时计算回收材料产出和避免产品信用。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_mass_balance` | `receiving_preparation` | 原料马铃薯、准备后转移和残余物 | 地磅、接收、批次、转移、剔除和废物记录 | lot_id; received_mass; prepared_transfer_mass; reject_or_residue_mass; destination; inventory_change; timestamp | 校准秤及核算后的生产记录 | kg | 每批次 | 所有被代表的生产日 | 所有纳入的接收和准备生产线 | 按路线汇总可归属质量，除以合格参考产品产出，并核算库存变化 | 校准记录；批次可追溯性；签署的质量平衡核算 |
| `cp_preparation_water` | `receiving_preparation` | 准备用水和废水 | 水表、发票、罐体和排放记录 | opening_reading; closing_reading; water_source; discharge_quantity; production_period; shared_use_driver | 优先使用校准水表；无专用计量时核算发票或罐体记录 | kg 或采用有记录换算的 m3 | 连续或每生产班次 | 与被代表生产相同的时期 | 所有纳入的准备设备及可归属于产品的卫生清洁 | 扣除非生产及不可归属用水，再归一化至合格产出 | 水表校准；发票；水平衡检查；分配记录 |
| `cp_preparation_energy` | `receiving_preparation` | 准备工序电力 | 电表和设备运行时间记录 | meter_open; meter_close; runtime; rated_load_if_needed; production_period; shared_use_driver | 优先使用专用电表；否则采用经记录因果分配并与设施电表核算 | kWh | 连续或每班次 | 与被代表生产相同的时期 | 所有纳入的准备设备 | 汇总实测用量或计算核算后的分配用量，并归一化至合格产出 | 电表校准；发票核算；分配工作表 |
| `cp_cooking_mass_balance` | `cooking_conditioning` | 准备后投入和熟制转移 | 批次和秤记录 | batch_id; route; prepared_input_mass; cooked_output_mass; drain_or_dewater_condition; timestamp | 校准的批次秤或生产线秤 | kg | 每个熟制批次 | 所有被代表的已烹制路线生产 | 所有纳入的水煮、蒸制、冷却和脱水生产线 | 按水煮或蒸制路线汇总，并归一化至各自合格产出 | 校准；批次可追溯性；质量平衡检查 |
| `cp_cooking_utilities` | `cooking_conditioning` | 烹制用水、废水、蒸汽、燃料和电力 | 计量、供应商、锅炉、批次和排放记录 | carrier; quantity; unit; meter_readings; batch_id; wastewater_quantity; conversion_factor | 条件允许时专用计量；否则采用有记录的工程核算 | kg、kWh、MJ 或供应商单位 | 每批次、班次或计量期 | 与被代表的已烹制路线生产相同的时期 | 所有纳入的烹制、冷却及可归属公用工程设备 | 按路线汇总，避免蒸汽/燃料重复计算，采用有记录的因子换算，并归一化至已烹制路线产出 | 仪表校准；供应商记录；换算工作表；水与能源核算 |
| `cp_freezing_mass_balance` | `freezing_packaging` | 冻结设备投入和冷冻产出 | 转移、冻结设备和包装记录 | route; input_mass; frozen_net_output_mass; rejected_mass; inventory_change; timestamp | 校准的生产线秤和包装记录 | kg | 每批次或班次 | 所有被代表的冻结生产 | 所有纳入的冻结和包装生产线 | 按路线核算投入、产出、损失和库存变化，并归一化至净重参考产品 | 校准；批次可追溯性；质量平衡检查 |
| `cp_freezing_energy` | `freezing_packaging` | 冻结与包装电力 | 分表、设施电表、运行时间和生产记录 | meter_open; meter_close; freezer_runtime; defrost_energy; packed_output_mass; shared_use_driver | 优先使用专用分表；否则采用有记录的工程或因果分配 | kWh | 连续或每班次 | 与被代表的冻结生产相同的时期 | 所有纳入的冻结、制冷辅助和包装设备 | 尽可能分开冻结与储存，并将可归属用量归一化至净重包装产出 | 电表校准；发票核算；分配工作表 |
| `cp_packaging_records` | `freezing_packaging` | 包装投入和废物 | 物料清单、采购、领用、退回和边角料记录 | package_format; material; unit_mass; units_used; scrap_mass; returned_mass; packed_output_mass | 件数乘以经核验单件质量，并与材料领用和边角料核算 | kg | 每种包装形式的批次或生产期 | 与被代表生产相同的时期 | 所有纳入的包装形式和包装生产线 | 按材料计算每 kg 产品净重的净材料投入和边角料 | 供应商规格；抽样称重；库存核算 |
| `cp_freezing_refrigerant` | `freezing_packaging` | 冻结系统制冷剂损失 | 维护、采购、回收、充注和设备记录 | refrigerant_species; opening_charge; additions; recovery; closing_charge; equipment_id; service_date | 采用经核验维护记录的设备特定质量平衡 | kg | 每次维护且至少每年 | 覆盖被代表生产期 | 服务于被代表生产的所有冻结系统设备 | 计算净损失，并采用设备服务、运行时间或冷负荷驱动因子分配 | 维护证书；钢瓶称重；设备日志；计算工作表 |
| `cp_storage_product_records` | `frozen_storage` | 储存产品投入、产出、时长和损失 | 仓库管理、发运、核销和温度记录 | lot_id; mass_in; mass_out; entry_time; dispatch_time; write_off_mass; loss_reason; temperature_series | 仓库记录与定期实物盘点核算 | kg 和 d | 每次移动并每日监测 | 完整的申报工厂储存期 | 服务于被代表产品的所有冻藏库房和批次 | 计算占用质量-时间，并将发运加损失与接收及库存变化核算 | 库存核算；批次可追溯性；温度监测完整性 |
| `cp_storage_energy` | `frozen_storage` | 冻藏电力 | 分表、设施电表、占用和运行记录 | meter_open; meter_close; occupied_mass_time; defrost_energy; shared_use_driver; period | 优先使用专用分表；否则基于储存服务采用有记录的因果分配 | kWh | 连续或每月计量期 | 完整的申报工厂储存期 | 所有纳入的冷库和可归属储存辅助设备 | 将可归属用量分配至占用质量-时间，并归一化至申报参考产品时长 | 电表校准；发票核算；占用记录；分配工作表 |
| `cp_storage_refrigerant` | `frozen_storage` | 储存系统制冷剂损失 | 维护、采购、回收、充注和设备记录 | refrigerant_species; opening_charge; additions; recovery; closing_charge; equipment_id; service_date | 采用经核验维护记录的设备特定质量平衡 | kg | 每次维护且至少每年 | 覆盖申报的工厂储存期 | 服务于被代表产品的所有储存系统设备 | 计算净损失，并按设备服务及占用质量-时间分配 | 维护证书；钢瓶称重；设备日志；计算工作表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calculation_rule_1` | 所有清单行 | 归一化数量 = 所代表时期的可归属数量 / 同期净重合格冷冻马铃薯产出。 | 可归属数量；净重合格产出 | 每 1 kg 参考产品的数量 | `eu-pef-2021-2279` |
| `calculation_rule_2` | 准备与烹制质量平衡 | 核算期初库存 + 投入 = 产出 + 残余物 + 量化时废水携带固形物 + 期末库存 + 记录的无法解释差额；报告无法解释差额，不得强制平衡。 | 实测质量；库存变化；残余物和损失记录 | 核算后的质量平衡及无法解释差额 |  |
| `calculation_rule_3` | 混合的未烹制、水煮或蒸制生产 | 仅在计算路线特定清单后汇总：综合数量 = sum(路线数量 x 合格路线产出) / sum(合格路线产出)。 | 路线特定数量；路线特定合格产出 | 按产量加权的综合数量 | `un-cpc-3-0-21313` |
| `calculation_rule_4` | 储存电力 | 储存数量 = 可归属储存电力 / 占用产品净重-时间，再乘以申报参考产品储存时长。 | 电力；占用质量-时间；申报时长 | 申报时长内每 kg 参考产品的 kWh | `codex-cxc-8-1976` |
| `calculation_rule_5` | 制冷剂排放 | 制冷剂损失 = 期初充注量 + 补充量 - 回收量 - 期末充注量，并按记录的转移调整；仅分配服务于被代表产品的设备份额。 | 充注库存；补充；回收；转移；分配驱动因子 | 每参考流排放的制冷剂物种 kg |  |
| `calculation_rule_6` | 包装 | 按材料的包装投入 = 经核验单件质量 x 使用件数 + 可归属生产线损耗 - 在同一核算处理下退回的可重复使用包装；按产品净重归一化。 | 单件质量；件数；损耗；退回；产品净重 | 每参考流的包装材料 kg |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `data_quality_1` | 产品身份与范围 | 保留 CPC 21313 范围、切制形式、带皮状态、未烹制/水煮/蒸制路线、排除制泥或油炸产品、包装形式、工厂门及所代表储存期的证据。 | 产品规格；标签；批次配方或路线记录；`un-cpc-3-0-21313` |
| `data_quality_2` | 时间代表性 | 覆盖包括正常生产、卫生清洁、除霜、启动、停机和储存条件的代表性运行时期，或披露排除项及其预期影响。 | 生产日历；计量覆盖；停机和清洁日志；`eu-pef-2021-2279` |
| `data_quality_3` | 地域与技术代表性 | 识别设施地域、电力与燃料供应、水源、准备与烹制配置、冻结技术、制冷剂物种、包装形式和储存系统。 | 设施元数据；供应商记录；设备台账；`eu-pef-2021-2279` |
| `data_quality_4` | 完整性与核算 | 在所代表时期内核算产品质量、水、能源、包装、废物和制冷剂；量化缺失覆盖、分配份额、库存变化和无法解释差额。 | 签署的核算；计量与发票交叉检查；完整性声明 |
| `data_quality_5` | 暂定范围 | 所有 `reasoned_estimate` 范围仅作为 QA 筛查。对范围外数值进行标记评审；用于发布关键用途前，以代表性前景数据或来源证据替换，除非评审者明确接受。 | 评审记录；替代来源或获批准的前景汇总 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | 参考流与身份 | 确认 canonical PCR id、产品流 UUID、Mass UUID、Units of mass UUID、kg 参考单位、1 kg 净重参考数量及所有必需限定信息；拒绝制泥、油炸、薯片、油脂预煮或其他方式制备的产品。 | `un-cpc-3-0-21313` |
| `validation_rule_2` | 路线与过程覆盖 | 要求包含准备、冻结与包装以及申报的工厂储存；仅对水煮或蒸制产品要求烹制调理，并确认采用路线特定清单或按产量加权汇总。 | `un-cpc-3-0-21313`; `codex-cxc-8-1976` |
| `validation_rule_3` | 质量平衡 | 检查原料马铃薯投入、中间转移、最终产出、残余物、损失、重要时废水相关质量和库存变化是否核算；报告任何无法解释差额，不得静默强制闭合。 |  |
| `validation_rule_4` | 冷链清单 | 确认已纳入冻结与储存电力或外购冷量、申报储存时长、温度记录、重要时除霜、制冷剂物种与损失及冷冻产品损失，或明确论证为零或不可获得。 | `codex-cxc-8-1976` |
| `validation_rule_5` | 分配与完整性 | 确认共享负荷采用细分、直接计量或披露的因果驱动因子；核验分配份额之和为一，并确认未重复计算再循环或替代收益。 | `eu-pef-2021-2279` |
| `validation_rule_6` | 证据就绪性 | 报告未解决的 Tiangong 清单流 UUID、缺失采集覆盖及每个保留的 `reasoned_estimate`；在问题解决或经评审明确接受前，候选指南对发布而言结论不足。 | `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 冷冻马铃薯生产的工厂门前景数据集 |
| downstream_use | 完成方法学评审、身份解析和证据质量评审后，可作为 `secondary_dataset`；`background_dataset` |
| allowed_use | 对未烹制或仅经水煮/蒸制的冷冻整颗或切制马铃薯建模，并申报路线、包装、工厂储存、地域、技术和参考期 |
| excluded_use | 冷冻土豆泥、薯条、薯片、油脂预煮或配方加工马铃薯产品；除非单独建模，否则不用于下游冷链、零售、消费者制备或生命末期 |
| required_metadata | canonical PCR id；产品流 UUID；CPC 引用；产品形式；带皮和烹制状态；设施地域；参考期；技术；包装形式；净重；储存时长与温度监测基准；分配；上游数据集身份 |
| required_quality_disclosure | 前景覆盖；计量和质量平衡完整性；分配份额；路线汇总；时间、地域和技术代表性；制冷剂方法；排除项；未解决 UUID；保留的推理估算及评审状态 |
| update_trigger | 产品范围、烹制路线、准备产率、冻结或储存技术、制冷剂、包装形式、分配、设施能源或供水、储存时长、上游数据集或代表性前景证据发生重大变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-21313` | `official_guidance` | 联合国统计司，《Central Product Classification Version 3.0 Explanatory Notes》，子类 21313，第 81、83 页，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索日期 2026-08-11） | 产品类别纳入与排除范围；未烹制/水煮/蒸制冷冻马铃薯与其他方式制备马铃薯的区分 |
| `codex-cxc-8-1976` | `standard` | Codex Alimentarius，CXC 8-1976，《Code of Practice for the Processing and Handling of Quick Frozen Foods》，最后修订于 2008 年，https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/（检索日期 2026-08-11） | 速冻、处理、储存和冷链的高层过程与记录范围；未从该来源采用产品特定定量范围 |
| `eu-pef-2021-2279` | `official_guidance` | 欧盟委员会，《Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods》，Official Journal L 471，https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279（检索日期 2026-08-11） | 生命周期清单完整性、代表性和可核验数据、分配披露、数据集质量及下游使用控制 |
