---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.sweet-potatoes
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 甘薯


## 1. 范围与适用性

本 PCR 覆盖 *Ipomoea batatas* 收获后新鲜储藏根的管理生产、收获、谨慎搬运、去土、分级以及可选熟化/储藏，交接点为农场或初级整理。必须声明未熟化/熟化状态、损伤等级、去土状态、水分或收到态基准及交接点。种苗、蔓段或作种用根不得作为参考产品；淀粉、薯片、粉、泥、粉丝及其他加工品不在范围内。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.sweet-potatoes |
| classification_refs | CPC 3.0: 01530 Sweet potatoes; mapping relation: narrower |
| covered_products | 农场或初级整理交接的鲜食 *Ipomoea batatas* 储藏根，可未熟化或熟化 |
| excluded_products | 作为参考产品的种苗、蔓段、种用根；淀粉、薯片、粉、泥、粉丝及其他加工品 |
| representative_product | 按收到态质量计量的可销售新鲜甘薯储藏根 |
| production_route | 田间管理生产为母活动；收获独立移出储藏根；初级整理去土分级；熟化/储藏为可选保存路线。各技术路线差异须单独声明。 |
| market_state | 鲜的未加工储藏根；声明熟化、损伤、去土、水分基准和交接状态 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | *Ipomoea batatas* 收获后鲜储藏根 |
| How much | 收到态 1,000 kg |
| How well | 声明的合格等级、未熟化/熟化、损伤和去土状态 |
| How long or cycle | 一个作物周期及其初级整理；适用时加熟化/储藏时长 |
| reference_flow_link | reference_product_at_declared_handoff |

| Field | Value |
| --- | --- |
| Reference amount | 1000 |
| Reference product flow | Sweet potatoes |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species = *Ipomoea batatas*；储藏根；未熟化或熟化；损伤等级；去土状态；水分或收到态基准；农场或初级整理交接；作物周期；适用时储藏时长 |

每份前景数据包须声明实际路线、终端产品状态和交接门，保留原始称量、质量平衡及批次追溯记录。以该门的唯一交接参考输出归一化，前序工序采用实测转移数量。

唯一参考输出为 `reference_product_at_declared_handoff`，由下列实际路线在声明交接门的产品承接。原路线输出编号用于追溯实际来源和物理状态，不再分别固定为参考数量。

## 4. 计量与单位规则
| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考根和内部根状态 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录收到态毛质量，另记土壤、剔除物和水分基准。 |
| `water_volume` | 灌溉、清洗和废水 | Volume 或声明密度的 Mass | m3 或 kg | 区分供应、循环和排出水并记录测点。 |
| `energy_carrier` | 机械、电力、热和储藏能源 | 载能体适用属性 | MJ、kWh、kg 或 L | 保留实际载能体及转换基准，禁止合并移动燃料、固定热和电力。 |
| `condition_mass_balance` | 收获、分级、熟化和储藏 | Mass | kg | 每事件或批次核对投入根、合格根、降级根、剔除物、土壤/固体和测得损失。 |

## 5. 系统边界

边界自声明作物周期的已准备管理田块开始，包括种植、管理、收获、场内转运、去土、分级及交接；仅当交付熟化或储藏根时包括熟化/储藏。

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 声明前茬、整地、土壤、种植材料来源及雨养/灌溉状态的管理田块 |
| starting_condition_role | 管理生物生产的起始条件 |
| product_classification_scope | CPC 3.0 01530 的鲜 *Ipomoea batatas* 储藏根 |
| recursive_input_rule | 外部进入的同类根须使用带状态和交接限定的上游产品数据集，禁止在本前景系统内递归重建。 |
| upstream_dataset_requirement | 种植材料、能源、水、养分、运输和处理服务须按具体前景记录选择兼容上游数据集。 |
| disclosure | 声明品种、地点、作物周期、路线、收获模式、熟化/储藏、损伤、去土、水分基准和交接。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | 田间生产 | 纳入作物周期的管理投入、田间操作、目标根、残体和损失。 | `fao-sweet-potato-postharvest` |
| `boundary_harvest` | 收获 | 独立记录从管理作物到新挖根交接，并区分附带土壤、蔓、损伤根和未收集损失。 | `fao-sweet-potato-postharvest` |
| `boundary_conditioning` | 初级整理 | 纳入谨慎搬运、去土、适用时清洗、分级及所有等级和残余物去向。 | `fao-sweet-potato-postharvest` |
| `boundary_curing` | 熟化/储藏 | 仅对熟化或储藏交付纳入保存投入、条件、时长及损失。 | `fao-sweet-potato-postharvest` |
| `boundary_processed_exclusion` | 产品范围 | 加工食品和种植材料参考产品排除在外。 | `fao-sweet-potato-postharvest` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `field_production` | 甘薯田间管理生产 | required | Every package / 每个数据包 | Produces managed crop and standing roots / 生产管理作物和田间储藏根 | kg accepted roots / kg 合格根 |
| `harvest_capture` | 收获与收集 | required | Every package / 每个数据包 | Removes roots and hands them to conditioning / 移出储藏根并交接初级整理 | kg accepted roots / kg 合格根 |
| `primary_conditioning` | 去土、分级与初级交接 | required | Every package / 每个数据包 | Creates accepted, downgraded, rejected, soil, solid, and wastewater states / 形成合格、降级、剔除、土壤、固体和废水状态 | kg accepted roots / kg 合格根 |
| `curing_storage` | 熟化与储藏 | conditional | Only cured or stored hand-off / 仅熟化或储藏后交接 | Preserves roots and creates cured hand-off / 保存储藏根并形成熟化交接 | kg accepted roots / kg 合格根 |
| declared_reference_handoff | 声明交接门的产品计量 | required |  | foreground | reference_product_at_declared_handoff |

各作物周期、收获事件、整理批次和熟化/储藏批次必须独立编号。手工/机械、雨养/灌溉、干法/湿法去土、渐进/一次收获是路线差异，须保存其拓扑、清单、计算和验证证据。

### 过程：甘薯田间管理生产（`field_production`）

#### 输入
##### 产品流

###### 尿素肥料投入（`nutrient_supply`）

仅当声明的过程实际使用尿素肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：尿素肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的尿素肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：foreground_record（`foreground_record`）
- 适用范围：site_specific（`site_specific`）
原始活动或阶段基准：每 1,000 kg 合格参考根或声明的关联事件.

- 归一化基准：每声明的参考流
- 基准类型：reference_flow（`reference_flow`）
- 证据类型：collected_record（`collected_record`）
- 采集协议：`cp_field_cycle_records`

###### 磷酸一铵肥料投入（`nutrient_supply_monoammonium_phosphate`）

仅当声明的过程实际使用磷酸一铵肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：磷酸一铵肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的磷酸一铵肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：foreground_record（`foreground_record`）
- 适用范围：site_specific（`site_specific`）
原始活动或阶段基准：每 1,000 kg 合格参考根或声明的关联事件.

- 归一化基准：每声明的参考流
- 基准类型：reference_flow（`reference_flow`）
- 证据类型：collected_record（`collected_record`）
- 采集协议：`cp_field_cycle_records`

###### 氯化钾肥料投入（`nutrient_supply_potassium_chloride`）

仅当声明的过程实际使用氯化钾肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：氯化钾肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的氯化钾肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：foreground_record（`foreground_record`）
- 适用范围：site_specific（`site_specific`）
原始活动或阶段基准：每 1,000 kg 合格参考根或声明的关联事件.

- 归一化基准：每声明的参考流
- 基准类型：reference_flow（`reference_flow`）
- 证据类型：collected_record（`collected_record`）
- 采集协议：`cp_field_cycle_records`

###### 施用的牛粪肥投入（`nutrient_supply_cattle_manure`）

仅当声明的过程实际使用施用的牛粪肥时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：施用的牛粪肥
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的施用的牛粪肥数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：foreground_record（`foreground_record`）
- 适用范围：site_specific（`site_specific`）
原始活动或阶段基准：每 1,000 kg 合格参考根或声明的关联事件.

- 归一化基准：每声明的参考流
- 基准类型：reference_flow（`reference_flow`）
- 证据类型：collected_record（`collected_record`）
- 采集协议：`cp_field_cycle_records`

###### 农业石灰石投入（`nutrient_supply_agricultural_limestone`）

仅当声明的过程实际使用农业石灰石时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：农业石灰石
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的农业石灰石数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：foreground_record（`foreground_record`）
- 适用范围：site_specific（`site_specific`）
原始活动或阶段基准：每 1,000 kg 合格参考根或声明的关联事件.

- 归一化基准：每声明的参考流
- 基准类型：reference_flow（`reference_flow`）
- 证据类型：collected_record（`collected_record`）
- 采集协议：`cp_field_cycle_records`

###### 灌溉水供应（`irrigation_water`）

跨越边界的灌溉供水；降雨仅作场址背景仅在声明条件下跨越该过程边界。

- 选定流：跨越边界的灌溉供水；降雨仅作场址背景
- 流属性/单位：声明的兼容属性 / m3
- 数量规则：与声明的过程事件和去向关联的测量值或计算值
- 数值来源模式：foreground_record（`foreground_record`）
- 适用范围：site_specific（`site_specific`）
原始活动或阶段基准：每 1,000 kg 合格参考根或声明的关联事件.

- 归一化基准：每声明的参考流
- 基准类型：reference_flow（`reference_flow`）
- 证据类型：collected_record（`collected_record`）
- 采集协议：`cp_field_cycle_records`
- 来源：
- 数量范围：暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：m3
  - 基准：每 1,000 kg 合格参考根或声明的关联事件；以评审证据替代暂定界限
  - 基准类型：reference_flow（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 中压电力（`field_energy`）

仅在本过程实际使用中压电力时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：每 1,000 kg 合格参考根或声明的关联事件。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：计量本过程和期间实际使用的中压电力，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_field_cycle_records`

###### 柴油（`field_energy_diesel`）

仅在本过程实际使用柴油时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：每 1,000 kg 合格参考根或声明的关联事件。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：计量本过程和期间实际使用的柴油，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_field_cycle_records`

##### 废物流


##### 基本流


#### 输出
##### 产品流

###### 移交收获的田间储藏根（`standing_roots_internal`）

内部待收获储藏根状态仅在声明条件下跨越该过程边界。

- 选定流：内部待收获储藏根状态
- 流属性/单位：声明的兼容属性 / kg
- 身份状态：internal: foreground graph link only
- 数量规则：与声明的过程事件和去向关联的测量值或计算值
- 数值来源模式：calculated_value（`calculated_value`）
- 适用范围：site_specific（`site_specific`）
原始活动或阶段基准：每 1,000 kg 合格参考根或声明的关联事件.

- 归一化基准：每声明的参考流
- 基准类型：crop_cycle（`crop_cycle`）
- 证据类型：calculated_from_collection（`calculated_from_collection`）
- 采集协议：`cp_field_cycle_records`
- 来源：
- 数量范围：暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：1000000
  - 单位：kg
  - 基准：每 1,000 kg 合格参考根或声明的关联事件；以评审证据替代暂定界限
  - 基准类型：crop_cycle（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）


##### 废物流

###### 田间残体和未收集根损失（`field_residue_loss`）

按去向记录的蔓叶、损伤根和未收集根仅在声明条件下跨越该过程边界。

- 选定流：按去向记录的蔓叶、损伤根和未收集根
- 流属性/单位：声明的兼容属性 / kg
- 身份状态：internal/deferred: resolve only recorded boundary-exit destinations
- 数量规则：与声明的过程事件和去向关联的测量值或计算值
- 数值来源模式：calculated_value（`calculated_value`）
- 适用范围：site_specific（`site_specific`）
原始活动或阶段基准：每 1,000 kg 合格参考根或声明的关联事件.

- 归一化基准：每声明的参考流
- 基准类型：reference_flow（`reference_flow`）
- 证据类型：calculated_from_collection（`calculated_from_collection`）
- 采集协议：`cp_field_cycle_records`
- 来源：
- 数量范围：暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3000
  - 单位：kg
  - 基准：每 1,000 kg 合格参考根或声明的关联事件；以评审证据替代暂定界限
  - 基准类型：reference_flow（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）


##### 基本流

###### 氧化亚氮，排放至空气（`field_emissions`）

仅在实测或所选适用方法确认该排放路径时，将氧化亚氮，排放至空气作为单一物质和接收介质交换记录。保留实际接收区室并核实具体流身份；其他物质单独建卡，本卡不预设必有排放。
原始活动或阶段基准：每 1,000 kg 合格参考根或声明的关联事件。

- 选定流：氧化亚氮，排放至空气
- 流属性/单位：质量 / kg N2O
- 数量规则：实测或按方法计算氧化亚氮，排放至空气的质量，保留活动数据、因子、物质基准和接收区室；仅归一到声明参考输出一次。 以 N2O-N 报告时，按 44/28 换算为 N2O 一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_field_cycle_records`

###### 氨，排放至空气（`field_emissions_nh3`）

仅在实测或所选适用方法确认该排放路径时，将氨，排放至空气作为单一物质和接收介质交换记录。保留实际接收区室并核实具体流身份；其他物质单独建卡，本卡不预设必有排放。
原始活动或阶段基准：每 1,000 kg 合格参考根或声明的关联事件。

- 选定流：氨，排放至空气
- 流属性/单位：质量 / kg NH3
- 数量规则：实测或按方法计算氨，排放至空气的质量，保留活动数据、因子、物质基准和接收区室；仅归一到声明参考输出一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_field_cycle_records`

###### 一氧化氮，排放至空气（`field_emissions_no`）

仅在实测或所选适用方法确认该排放路径时，将一氧化氮，排放至空气作为单一物质和接收介质交换记录。保留实际接收区室并核实具体流身份；其他物质单独建卡，本卡不预设必有排放。
原始活动或阶段基准：每 1,000 kg 合格参考根或声明的关联事件。

- 选定流：一氧化氮，排放至空气
- 流属性/单位：质量 / kg NO
- 数量规则：实测或按方法计算一氧化氮，排放至空气的质量，保留活动数据、因子、物质基准和接收区室；仅归一到声明参考输出一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_field_cycle_records`

###### 硝酸根，排放至水体（`field_emissions_nitrate`）

仅在实测或所选适用方法确认该排放路径时，将硝酸根，排放至水体作为单一物质和接收介质交换记录。保留实际接收区室并核实具体流身份；其他物质单独建卡，本卡不预设必有排放。
原始活动或阶段基准：每 1,000 kg 合格参考根或声明的关联事件。

- 选定流：硝酸根，排放至水体
- 流属性/单位：质量 / kg NO3-
- 数量规则：实测或按方法计算硝酸根，排放至水体的质量，保留活动数据、因子、物质基准和接收区室；仅归一到声明参考输出一次。 以硝酸盐氮报告时，按 62/14 换算为 NO3- 一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_field_cycle_records`

###### 化石二氧化碳，排放至空气（`field_emissions_co2_fossil`）

仅在实测或所选适用方法确认该排放路径时，将化石二氧化碳，排放至空气作为单一物质和接收介质交换记录。保留实际接收区室并核实具体流身份；其他物质单独建卡，本卡不预设必有排放。
原始活动或阶段基准：每 1,000 kg 合格参考根或声明的关联事件。

- 选定流：化石二氧化碳，排放至空气
- 流属性/单位：质量 / kg CO2
- 数量规则：实测或按方法计算化石二氧化碳，排放至空气的质量，保留活动数据、因子、物质基准和接收区室；仅归一到声明参考输出一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_field_cycle_records`

### 过程：收获与收集（`harvest_capture`）

#### 输入
##### 产品流

###### 来自田间生产的储藏根（`standing_roots_harvest_input`）

与作物周期关联的内部储藏根状态仅在声明条件下跨越该过程边界。

- 选定流：与作物周期关联的内部储藏根状态
- 流属性/单位：声明的兼容属性 / kg
- 身份状态：internal: paired foreground graph link
- 数量规则：与声明的过程事件和去向关联的测量值或计算值
- 数值来源模式：calculated_value（`calculated_value`）
- 适用范围：site_specific（`site_specific`）
原始活动或阶段基准：每 1,000 kg 合格参考根或声明的关联事件.

- 归一化基准：每声明的参考流
- 基准类型：process_output（`process_output`）
- 证据类型：calculated_from_collection（`calculated_from_collection`）
- 采集协议：`cp_harvest_event_records`
- 来源：
- 数量范围：暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：2000
  - 单位：kg
  - 基准：每 1,000 kg 合格参考根或声明的关联事件；以评审证据替代暂定界限
  - 基准类型：process_output（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 中压电力（`harvest_energy`）

仅在本过程实际使用中压电力时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：每 1,000 kg 合格参考根或声明的关联事件。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：计量本过程和期间实际使用的中压电力，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_harvest_event_records`

###### 柴油（`harvest_energy_diesel`）

仅在本过程实际使用柴油时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：每 1,000 kg 合格参考根或声明的关联事件。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：计量本过程和期间实际使用的柴油，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_harvest_event_records`

###### 农场内道路运输服务（`harvest_transport`）

单独建模的收获点至初级整理运输仅在声明条件下跨越该过程边界。

- 选定流：单独建模的收获点至初级整理运输
- 流属性/单位：声明的兼容属性 / tkm
- 数量规则：与声明的过程事件和去向关联的测量值或计算值
- 数值来源模式：foreground_record（`foreground_record`）
- 适用范围：route_specific（`route_specific`）
原始活动或阶段基准：每 1,000 kg 合格参考根或声明的关联事件.

- 归一化基准：每声明的参考流
- 基准类型：transport_service（`transport_service`）
- 证据类型：collected_record（`collected_record`）
- 采集协议：`cp_harvest_event_records`
- 来源：
- 数量范围：暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：tkm
  - 基准：每 1,000 kg 合格参考根或声明的关联事件；以评审证据替代暂定界限
  - 基准类型：transport_service（`transport_service`）
  - 证据类型：推理估算（`reasoned_estimate`）


##### 废物流


##### 基本流


#### 输出
##### 产品流

###### 移交初级整理的新收获根（`harvested_roots_internal`）

去土和分级前的新挖储藏根仅在声明条件下跨越该过程边界。

- 选定流：去土和分级前的新挖储藏根
- 流属性/单位：声明的兼容属性 / kg
- 身份状态：internal: paired foreground graph link
- 数量规则：与声明的过程事件和去向关联的测量值或计算值
- 数值来源模式：calculated_value（`calculated_value`）
- 适用范围：site_specific（`site_specific`）
原始活动或阶段基准：每 1,000 kg 合格参考根或声明的关联事件.

- 归一化基准：每声明的参考流
- 基准类型：process_output（`process_output`）
- 证据类型：calculated_from_collection（`calculated_from_collection`）
- 采集协议：`cp_harvest_event_records`
- 来源：
- 数量范围：暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：2000
  - 单位：kg
  - 基准：每 1,000 kg 合格参考根或声明的关联事件；以评审证据替代暂定界限
  - 基准类型：process_output（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）


##### 废物流

###### 收获损伤和未收集损失（`harvest_rejects`）

按去向记录的切伤、擦伤、破损或未收集根仅在声明条件下跨越该过程边界。

- 选定流：按去向记录的切伤、擦伤、破损或未收集根
- 流属性/单位：声明的兼容属性 / kg
- 身份状态：internal/deferred: destination determines product, recovery, or waste identity
- 数量规则：与声明的过程事件和去向关联的测量值或计算值
- 数值来源模式：calculated_value（`calculated_value`）
- 适用范围：site_specific（`site_specific`）
原始活动或阶段基准：每 1,000 kg 合格参考根或声明的关联事件.

- 归一化基准：每声明的参考流
- 基准类型：process_output（`process_output`）
- 证据类型：calculated_from_collection（`calculated_from_collection`）
- 采集协议：`cp_harvest_event_records`
- 来源：
- 数量范围：暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1,000 kg 合格参考根或声明的关联事件；以评审证据替代暂定界限
  - 基准类型：process_output（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）


##### 基本流


### 过程：去土、分级与初级交接（`primary_conditioning`）

#### 输入
##### 产品流

###### 来自收获的新鲜储藏根（`harvested_roots_conditioning_input`）

带损伤和附土状态的内部收获根仅在声明条件下跨越该过程边界。

- 选定流：带损伤和附土状态的内部收获根
- 流属性/单位：声明的兼容属性 / kg
- 身份状态：internal: paired foreground graph link
- 数量规则：与声明的过程事件和去向关联的测量值或计算值
- 数值来源模式：calculated_value（`calculated_value`）
- 适用范围：site_specific（`site_specific`）
原始活动或阶段基准：每 1,000 kg 合格参考根或声明的关联事件.

- 归一化基准：每声明的参考流
- 基准类型：process_output（`process_output`）
- 证据类型：calculated_from_collection（`calculated_from_collection`）
- 采集协议：`cp_conditioning_run_records`
- 来源：
- 数量范围：暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：2000
  - 单位：kg
  - 基准：每 1,000 kg 合格参考根或声明的关联事件；以评审证据替代暂定界限
  - 基准类型：process_output（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 清洗水供应（`conditioning_water`）

湿法去土时使用的工艺水仅在声明条件下跨越该过程边界。

- 选定流：湿法去土时使用的工艺水
- 流属性/单位：声明的兼容属性 / m3
- 数量规则：与声明的过程事件和去向关联的测量值或计算值
- 数值来源模式：foreground_record（`foreground_record`）
- 适用范围：site_specific（`site_specific`）
原始活动或阶段基准：每 1,000 kg 合格参考根或声明的关联事件.

- 归一化基准：每声明的参考流
- 基准类型：process_output（`process_output`）
- 证据类型：collected_record（`collected_record`）
- 采集协议：`cp_conditioning_run_records`
- 来源：
- 数量范围：暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：m3
  - 基准：每 1,000 kg 合格参考根或声明的关联事件；以评审证据替代暂定界限
  - 基准类型：process_output（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 初级整理电力供应（`conditioning_electricity`）

清洗、输送、分选、分级或沥水用电仅在声明条件下跨越该过程边界。

- 选定流：清洗、输送、分选、分级或沥水用电
- 流属性/单位：声明的兼容属性 / kWh
- 数量规则：与声明的过程事件和去向关联的测量值或计算值
- 数值来源模式：foreground_record（`foreground_record`）
- 适用范围：site_specific（`site_specific`）
原始活动或阶段基准：每 1,000 kg 合格参考根或声明的关联事件.

- 归一化基准：每声明的参考流
- 基准类型：process_output（`process_output`）
- 证据类型：collected_record（`collected_record`）
- 采集协议：`cp_conditioning_run_records`
- 来源：
- 数量范围：暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：kWh
  - 基准：每 1,000 kg 合格参考根或声明的关联事件；以评审证据替代暂定界限
  - 基准类型：process_output（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 废水处理服务（`conditioning_wastewater_treatment`）

排出清洗废水的外部处理服务仅在声明条件下跨越该过程边界。

- 选定流：排出清洗废水的外部处理服务
- 流属性/单位：声明的兼容属性 / m3
- 数量规则：与声明的过程事件和去向关联的测量值或计算值
- 数值来源模式：foreground_record（`foreground_record`）
- 适用范围：site_specific（`site_specific`）
原始活动或阶段基准：每 1,000 kg 合格参考根或声明的关联事件.

- 归一化基准：每声明的参考流
- 基准类型：process_output（`process_output`）
- 证据类型：collected_record（`collected_record`）
- 采集协议：`cp_conditioning_run_records`
- 来源：
- 数量范围：暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：m3
  - 基准：每 1,000 kg 合格参考根或声明的关联事件；以评审证据替代暂定界限
  - 基准类型：process_output（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）


##### 废物流


##### 基本流


#### 输出
##### 产品流

###### 合格未熟化鲜甘薯根（`fresh_reference_product`）

Sweet potatoes `03d4145f-cc49-4e7b-8c45-d6ce90a90057`仅在声明条件下跨越该过程边界。

- 选定流：Sweet potatoes `03d4145f-cc49-4e7b-8c45-d6ce90a90057`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 身份状态：fixed: detail-confirmed CPC 01530 Product flow with Mass at farm gate
原始产出计量与核对要求：与声明的过程事件和去向关联的测量值或计算值

- 数量规则：实测净转移质量，保留批次、实际产品状态和含水率基准；在声明交接门对账至最终参考输出。
- 数值来源模式：fixed_value（`fixed_value`）
- 适用范围：product_specific（`product_specific`）
原始活动或阶段基准：每 1,000 kg 合格参考根或声明的关联事件.

- 归一化基准：每声明的参考流
- 基准类型：reference_flow（`reference_flow`）
- 证据类型：method_formula（`method_formula`）
- 来源：`mass-balance-identity`
- 数量范围：固定定量参考量
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1000
  - 上限：1000
  - 单位：kg
  - 基准：每 1,000 kg 合格参考根或声明的关联事件；以评审证据替代暂定界限
  - 基准类型：reference_flow（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

###### 按声明去向分流的降级根（`downgraded_roots`）

立即食用、饲料、返工或回收等级仅在声明条件下跨越该过程边界。

- 选定流：立即食用、饲料、返工或回收等级
- 流属性/单位：声明的兼容属性 / kg
- 身份状态：internal/deferred: resolve external identity only after destination is known
- 数量规则：与声明的过程事件和去向关联的测量值或计算值
- 数值来源模式：calculated_value（`calculated_value`）
- 适用范围：site_specific（`site_specific`）
原始活动或阶段基准：每 1,000 kg 合格参考根或声明的关联事件.

- 归一化基准：每声明的参考流
- 基准类型：process_output（`process_output`）
- 证据类型：calculated_from_collection（`calculated_from_collection`）
- 采集协议：`cp_conditioning_run_records`
- 来源：
- 数量范围：暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1,000 kg 合格参考根或声明的关联事件；以评审证据替代暂定界限
  - 基准类型：process_output（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）


##### 废物流

###### 甘薯根修整拒收物（`conditioning_residuals`）

本条件卡仅代表声明过程中一种实际材料、产品或废物流。依据路线记录核实其身份、物理状态、期间和去向；其他不同物流须分别建卡。本模板不推定必然使用或产生。

- 选定流：甘薯根修整拒收物
- 流属性 / 单位: 质量 / kg
- 身份状态: 待核实材料和去向
- 数量规则: 按本过程及期间单独计量或计算这一种已确认物流，记录其独立单位和去向；不得合并其他产品或废物状态。
- 数值来源模式：calculated_value（`calculated_value`）
- 适用范围：site_specific（`site_specific`）
原始活动或阶段基准：每 1,000 kg 合格参考根或声明的关联事件.

- 归一化基准：每声明的参考流
- 基准类型：process_output（`process_output`）
- 证据类型：calculated_from_collection（`calculated_from_collection`）
- 采集协议：`cp_conditioning_run_records`
- 来源：

###### 整理工艺废水（`conditioning_residuals_wastewater`）

本条件卡仅代表声明过程中一种实际材料、产品或废物流。依据路线记录核实其身份、物理状态、期间和去向；其他不同物流须分别建卡。本模板不推定必然使用或产生。

- 选定流：整理工艺废水；具体路线身份待核实
- 流属性 / 单位: 体积 / m3 废水
- 身份状态: 待核实材料和去向
- 数量规则: 按本过程及期间单独计量或计算这一种已确认物流，记录其独立单位和去向；不得合并其他产品或废物状态。
- 数值来源模式：calculated_value（`calculated_value`）
- 适用范围：site_specific（`site_specific`）
原始活动或阶段基准：每 1,000 kg 合格参考根或声明的关联事件.

- 归一化基准：每声明的参考流
- 基准类型：process_output（`process_output`）
- 证据类型：calculated_from_collection（`calculated_from_collection`）
- 采集协议：`cp_conditioning_run_records`
- 来源：

##### 基本流


### 过程：熟化与储藏（`curing_storage`）

#### 输入
##### 产品流

###### 进入熟化或储藏的合格未熟化根（`uncured_roots_curing_input`）

来自初级整理的内部合格状态仅在声明条件下跨越该过程边界。

- 选定流：来自初级整理的内部合格状态
- 流属性/单位：声明的兼容属性 / kg
- 身份状态：internal: cured-route foreground link
- 数量规则：与声明的过程事件和去向关联的测量值或计算值
- 数值来源模式：calculated_value（`calculated_value`）
- 适用范围：site_specific（`site_specific`）
原始活动或阶段基准：每 1,000 kg 合格参考根或声明的关联事件.

- 归一化基准：每声明的参考流
- 基准类型：storage_duration（`storage_duration`）
- 证据类型：calculated_from_collection（`calculated_from_collection`）
- 采集协议：`cp_curing_storage_records`
- 来源：
- 数量范围：暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：2000
  - 单位：kg
  - 基准：每 1,000 kg 合格参考根或声明的关联事件；以评审证据替代暂定界限
  - 基准类型：storage_duration（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 中压电力（`curing_electricity`）

条件性单物质交换：仅在实际路线和记录证明使用或排放中压电力时纳入。其他产品、燃料、废物或排放物种须分别建立原子清单行，独立记录数量、状态和身份；不得从示例推定必然使用。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：依据实际路线记录，仅计量或计算本过程与期间的中压电力；不得混合其他物种或能源。
- 数值来源模式：foreground_record（`foreground_record`）
- 适用范围：site_specific（`site_specific`）
原始活动或阶段基准：每 1,000 kg 合格参考根或声明的关联事件.

- 归一化基准：每声明的参考流
- 基准类型：storage_duration（`storage_duration`）
- 证据类型：collected_record（`collected_record`）
- 采集协议：`cp_curing_storage_records`

###### 购入区域供热（`curing_heat`）

仅在本过程实际使用购入区域供热时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：每 1,000 kg 合格参考根或声明的关联事件。

- 选定流：购入区域供热
- 流属性/单位：能量 / MJ
- 数量规则：计量本过程和期间实际使用的购入区域供热，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_curing_storage_records`

##### 废物流


##### 基本流


#### 输出
##### 产品流

###### 合格熟化鲜甘薯根（`cured_reference_product`）

Sweet potatoes `03d4145f-cc49-4e7b-8c45-d6ce90a90057`仅在声明条件下跨越该过程边界。

- 选定流：愈伤调制后的甘薯贮藏根，声明实际状态
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 身份状态：fixed: detail-confirmed CPC 01530 Product flow with Mass at farm gate
原始产出计量与核对要求：与声明的过程事件和去向关联的测量值或计算值

- 数量规则：实测净转移质量，保留批次、实际产品状态和含水率基准；在声明交接门对账至最终参考输出。
- 数值来源模式：fixed_value（`fixed_value`）
- 适用范围：product_specific（`product_specific`）
原始活动或阶段基准：每 1,000 kg 合格参考根或声明的关联事件.

- 归一化基准：每声明的参考流
- 基准类型：reference_flow（`reference_flow`）
- 证据类型：method_formula（`method_formula`）
- 来源：`mass-balance-identity`
- 数量范围：固定定量参考量
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1000
  - 上限：1000
  - 单位：kg
  - 基准：每 1,000 kg 合格参考根或声明的关联事件；以评审证据替代暂定界限
  - 基准类型：reference_flow（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`


身份适用性：按所选实际物种/器官、播种或商品用途、鲜/调制/干燥及带壳状态、等级、供应方和声明交接点核对具体身份及Mass/kg支持。本PCR保留语义路线和计量定义，但不宣称一个固定UUID覆盖全部替代状态。鲜态流不能自动绑定调制/干燥产物，含义不清的果核/果仁流不能证明两种状态，商品籽不能证明播种种子身份。已有核验绑定仅用于其有据状态，否则明确保持UUID未决，直至详情确认。不得为强制匹配而改变产品边界、数量或路线。

##### 废物流

###### 熟化和储藏剔除物（`curing_storage_rejects`）

腐烂、发芽、冷害或严重损伤根仅在声明条件下跨越该过程边界。

- 选定流：腐烂、发芽、冷害或严重损伤根
- 流属性/单位：声明的兼容属性 / kg
- 身份状态：internal/deferred: recorded destination determines external identity
- 数量规则：与声明的过程事件和去向关联的测量值或计算值
- 数值来源模式：calculated_value（`calculated_value`）
- 适用范围：site_specific（`site_specific`）
原始活动或阶段基准：每 1,000 kg 合格参考根或声明的关联事件.

- 归一化基准：每声明的参考流
- 基准类型：storage_duration（`storage_duration`）
- 证据类型：calculated_from_collection（`calculated_from_collection`）
- 采集协议：`cp_curing_storage_records`
- 来源：
- 数量范围：暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1,000 kg 合格参考根或声明的关联事件；以评审证据替代暂定界限
  - 基准类型：storage_duration（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）


##### 基本流

###### 测得的向空气蒸发水分损失（`curing_moisture_loss`）

由进出料和水分测量单独识别的水损失仅在声明条件下跨越该过程边界。

- 选定流：由进出料和水分测量单独识别的水损失
- 流属性/单位：声明的兼容属性 / kg water
- 身份状态：unresolved: resolve water-to-air compartment only after separate measurement
- 数量规则：与声明的过程事件和去向关联的测量值或计算值
- 数值来源模式：foreground_record（`foreground_record`）
- 适用范围：site_specific（`site_specific`）
原始活动或阶段基准：每 1,000 kg 合格参考根或声明的关联事件.

- 归一化基准：每声明的参考流
- 基准类型：storage_duration（`storage_duration`）
- 证据类型：collected_record（`collected_record`）
- 采集协议：`cp_curing_storage_records`
- 来源：
- 数量范围：暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg water
  - 基准：每 1,000 kg 合格参考根或声明的关联事件；以评审证据替代暂定界限
  - 基准类型：storage_duration（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）



### 过程：声明边界的产品交接计量（`declared_reference_handoff`）
该节点记录既有系统边界上的实际交接数量，用于对账和参考数量归一化。它不代表新增物理工序，不自动引入干燥、冷却、储存、包装或运输。每份数据包须声明一条实际路线、一个终端产品状态、含水率或干物质基准及交接门。仅将该路线在此交接门的合格产品传入本节点；其他路线不得作为额外投入，联产品另行记录并按第 7 节处理。前序工序的投入、损失和排放只计一次。以实际交接净质量作为归一化分母；计量对账节点不改变质量、产率或分配结果。
#### 输入
##### 产品流
###### 实际路线的交接产品（`actual_route_product_for_handoff`）
记录实际终端路线交付的合格产品；与交接门称重和批次记录对账。
- 选定流：Sweet potatoes
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
- 选定流：Sweet potatoes
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
| `allocation_subdivide` | 所有节点 | 优先按作物周期、收获事件、整理批次和储藏批次细分。 | `mass-balance-identity` |
| `allocation_rejects` | 剔除、返工和降级根 | 保留原生产负担，返工负担仅增加一次，剔除物不得计入合格产出。 | `mass-balance-identity` |
| `allocation_shared_runs` | 共用批次 | 仅对不可细分记录使用声明的物理驱动分配，并证明总和守恒且无重复。 | `mass-balance-identity` |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_residual_precedence` | 未规定主方法分支的剩余共同负担 | 本 PCR 要求研究作联产品分配决策但未规定主方法的地方，统一执行以下优先顺序；已明确规定的类别专属主方法保持有效。先直接归属可分开的产出专属作业。剩余共同负担 B 只有在实测作业或生物服务记录证明驱动量 d_i 代表因果消耗时，才采用该物理驱动。产品可称量、有价值或等级较低本身均不构成因果依据，不能在面积、时间、质量和收入间任意切换。可比等级接受相同共同搬运服务时，仅在服务需求、状态及水分基准可比且有据时采用实测处理质量。份额 a_i=d_i/sum(d_j)，B_i=B*a_i。该共同作业没有可辩护的因果物理驱动时，采用同交接点、同期间经济份额 a_i=(q_i*p_i)/sum(q_j*p_j)，纳入全部独立预期产出，匹配数量/价格单位、币种和代表性价格，使用产出专属下游加工之前的价值。缺价格或分母证据使分配结果不完整，不能把产品价格记零或改称单一产出系统。披露合计为一的份额和重要替代方法敏感性；敏感性方法不是可任意替换的主结果。废物、留存残余和内部转移不获得联产品份额，其应归属的生产/处理负担仍保留在产出可售产品的路线中。未分配物理数量和质量平衡另行保留。本分支不自动给予替代信用；单独界定的替代情景须保留总清单及实际被替代功能证据。 | `ghg-protocol-product-standard-2011` |

## 8. 前景数据采集、计算与质量规则

清单完整性：具名条件卡是单项交换示例，不是穷尽配方，也不要求使用这些产品。完成前景数据包前，逐项列出所有实际种植材料、养分产品、作物保护制剂、资产材料、作业服务、载能体、包装材料、废物流及适用的基本物质，使用明确的物理身份、状态、原始属性/单位、来源或接收区室及实测或按方法计算的数量。身份或数量缺失属于完整性缺口，不得假定为零。保留实际批次和阶段基准；不得将中间转移累加为额外最终产出，也不得重复计入采购服务已包含的负荷。

先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_cycle_records` | `field_production` | 全部田间卡片 | 日志、发票、仪表、田测 | 田块、品种、周期、种植材料、养分、水、能源、根、残体、损失、排放输入 | 按田块和周期核对；原始汇总与分配：关联全部收获后归一化 | 声明单位 | 每次活动 | 完整周期 | 农场和田块 | 每声明的参考流 | 发票、校验、田表、分析 |
| `cp_harvest_event_records` | `harvest_capture` | 全部收获卡片 | 称量、设备、路线、损失调查 | 周期、事件、模式、质量、损伤、能源、距离、载荷、去向 | 每事件记录；原始汇总与分配：求和且禁止运输/机械重复 | 声明单位 | 每次收获 | 全部关联收获 | 田块和事件 | 每声明的参考流 | 称量、设备、交接 |
| `cp_conditioning_run_records` | `primary_conditioning` | 全部整理卡片 | 批次、称量、仪表、等级、去向票据 | 进料、去土、用水、用电、等级、残余物、废水和处理 | 每批质量平衡；原始汇总与分配：状态和去向总和核对 | 声明单位 | 每批 | 全部参考产品批次 | 场址和生产线 | 每声明的参考流 | 校准、等级协议、票据 |
| `cp_curing_storage_records` | `curing_storage` | 全部熟化/储藏卡片 | 批次、温湿度、仪表、检查 | 进料、条件、时长、能源、出料、剔除和水分 | 从装入到交接追踪；原始汇总与分配：核对进料、合格、剔除和水损失 | 声明单位 | 每批和周期读数 | 完整时长 | 储藏场址和批次 | 每声明的参考流 | 传感器、仪表、追溯 |
| `cp_declared_reference_handoff` | declared_reference_handoff | reference_product_at_declared_handoff | 交接计量与验收记录 | route, terminal_output_row_id, product_state, gate, lot, net_mass_kg, moisture_basis, acceptance, tare | 采用校准衡器或可追溯称重记录，将实际终端工序交接批次与验收净质量、产品状态及含水率对账；剔除包装皮重，不汇总前序阶段数量。 | kg | 每交接批次 | 声明报告期 | 声明交接门 | 每声明的参考流 | 校准或称重凭证、验收和批次追溯 |
| `cp_phase1_environment_coverage` | field_production | 按实际节点的管理环境覆盖 | 场址活动方法台账 | 实际生产节点；土壤/介质路线；气候土壤；肥料产品量及组成；残体去向及氮；相关矿化/有机土/排泄活动；方法层级方程版本；路径因子及单位；石灰尿素；实际燃料；物质/环境；供应覆盖; 场址及实际管理节点；面积；有日期占用区间；共同使用者；建植/未产期历史；实际前后土地类别及转化日期/面积；碳核算覆盖；上游土地覆盖 | 按实际负责生产节点及匹配批次/期间采集原始记录，保留来源、方法适用性和不确定性。与现有协议及供应覆盖核对，不新增重复事件；不适用须明示有据，缺少证据属于缺口。 | 适用的原生活动单位、kg N或物质、面积/时间 | 事件及年度/批次核对 | 匹配生产/队列期间 | 全部实际管理生产节点 | 执行适用覆盖核算后最终归一化一次 | 原始记录、方法工作表及适用性证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | 全部清单 | 记录量 × 1,000 kg / 同基准合格参考根质量 | 记录量、参考根质量 | 归一化量 | `mass-balance-identity` |
| `calc_transport_work` | 运输 | tkm = 运输吨数 × 载货距离 | 载荷、距离 | tkm | `mass-balance-identity` |
| `calc_root_mass_balance` | 各节点 | 进料减去合格、降级、剔除、固体、样品和单独测得水损失 | 关联质量记录 | 未解释差值 | `mass-balance-identity` |
| `calc_dry_mass_conversion` | 干物质比较 | 干质量 = 收到态质量 × (1 − 水分分数) | 收到态质量、水分 | 干质量 | `mass-balance-identity` |
| `planting_material_identity_and_fate` | `field_production` | 对于本作业原有 planting_material 采集角色，建立交换前须确定实际物理形态、物种／材料、组成、状态及供给／处理边界。与该角色相关且实际使用／产生的各种种子批次、移栽苗、根冠、插条、幼虫阶段、配方、包衣、保藏剂或分离残余物须各有具体卡片；这些例子是备选，不是必需配方。保留原采集记录和路线特定来源证据。计数种植记录匹配按质量的供应数据时，须使用实测或供应商支持的单位质量；计数与质量是关联属性，不是两次采购。不得合并独立果壳／外皮或不同药剂；真实混合物流须有组成与接收者证据且只计一次。完整性通过前，记录每项适用数量和原生单位、链接相容的已核验 UUID 或明确未解析身份，保留库存／退回归属，并将可归属原始数量按合格参考产出归一化一次。缺失记录不是零，原聚合范围不是单项投入默认值。 | `cp_field_cycle_records` | 按身份区分的交换和对账活动记录 |  |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | 最终基本交换使用已识别物质的质量和一个实际接收环境，养分／活动台账另存：该物种的 N2O-N × 44/28 为 N2O，NH3-N × 17/14 为 NH3，硝酸盐氮 × 62/14 为硝酸盐，磷酸盐磷 × 95/31 为磷酸盐。若选定流为元素磷，则报告 kg P，仅在物种口径有据时将磷酸盐质量乘 31/95。只有方法输出按元素计时才换算一次，实测化合物质量不得再换算。总养分损失不得无据归于单一物种，土壤残余／留存养分不是排放。保留直接／间接路径台账，不重复所选方法或上游清单已经包含的路径。因子不确定性范围只按其声明基准检查因子，不是最终化合物数量或场址排放的允许界限。用合格参考数量和匹配实测产出，将可归属化合物质量归一化一次。活动量、身份或接收环境未知时保留证据缺口，不得宣称完整。 | `cp_field_cycle_records`; 物种特定活动量台账、方法路径和因子基准、匹配合格产出 | 按身份区分的交换和对账活动记录 |  |

### 环境覆盖计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_managed_environment_coverage` | 实际管理生产节点 | 针对实际自主管理生产节点，逐项记录土壤直接 N2O、挥发/沉降间接 N2O、淋溶/径流间接 N2O、NH3/NOx 与养分损失，以及实际施石灰/尿素 CO2 的适用性。主核算依次采用有代表性的路径实测、经验证且适用于作物/土壤/管理的场址或国家方法；否则 N2O 与石灰/尿素 CO2 采用适用的2006 IPCC及2019修订管理土壤方程，按气候和投入类别选因子。保留确切版本、方程、层级、活动量及因子单位和气候/管理适用性，不规定通用剂量或因子。无土/设施路线须采用适用于实际介质的方法，不强套土壤因子。化肥、有机投入、残体、实际相关矿化/有机土和排泄物路径使用同一田块期间氮台账；路径不适用须证明，缺数不能填零。直接及各间接分量分别计算，逐项只分配到匹配的现有或新增具体卡一次，不将总量与组成重复相加。N2O-N 乘44/28转分子 N2O 一次。NH3、NOx及养分/农药损失采用适用实测或有据物质/去向模型；总N/P或未解释平衡差不等于某化合物释放。保留实际接收环境及分子、元素或报告口径，间接形成不能在来源台账再扣同一氮。实际本地燃烧另按燃料特定的燃烧方法记录；外购电、热和服务承接上游覆盖一次。有据释放按具体身份建卡，复用现有匹配卡，采用已核实UUID或明确未决身份。适用方法、活动量、因子或身份缺失会阻止完整性，不构成有据零值；原始活动/释放总量归属后按匹配合格参考产出归一化一次。 | cp_phase1_environment_coverage | 按匹配最终参考量的应归属原生环境数量 | `review-ipcc-soils-2019` |
| `calc_managed_land_coverage` | 实际管理生产节点 | 逐实际自主管理生产场址采集占用面积及有日期的占用区间，包括应归属的建植/未产期与生产期。占用量为面积乘实际时长，明确换为所选面积时间单位（1 ha=10,000 m2，时间按年）；只有每作物周期公顷数而无时长不能得到面积时间。建立、管理区间重叠时划分区间或取并集，同一面积时间只计一次，实际共同使用者份额合计为一。土地转化按声明土地利用方法，另记实际前/后土地类别、事件面积和日期；转化使用面积单位，不能与占用量相加。种植、持续占用或前土地资料缺失不能证明发生转化，也不能证明零转化。适用时保留历史事件归属及碳库/排放方法覆盖，不编造转化或通用固碳信用。分别建立兼容基本流身份，采用已核实UUID或明确未决身份，归属一次后按匹配最终参考产出归一化。外购已完成的生物投入承接兼容上游土地覆盖一次，不在本地重复。适用土地身份、面积、时长或前状态证据缺失属于完整性缺口；有据无转化可记录为不适用。 | cp_phase1_environment_coverage | 按匹配最终参考量的应归属原生环境数量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 证实物种、储藏根用途、品种、熟化、损伤、去土、水分基准和交接。 | 批次、检查和交接记录 |
| `dq_traceability` | 过程图 | 关联作物周期、收获事件、整理批次和储藏批次。 | 稳定标识符 |
| `dq_completeness` | 清单 | 覆盖重大投入、水、能源、根状态、残体、损失、运输、处理和条件性公用工程。 | 完整性核对 |
| `dq_route_delta` | 替代路线 | 每项拓扑、清单、计算或验证差异须有当前记录。 | 路线证据矩阵 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 按所选实际物种/器官、播种或商品用途、鲜/调制/干燥及带壳状态、等级、供应方和声明交接点核对具体身份及Mass/kg支持。本PCR保留语义路线和计量定义，但不宣称一个固定UUID覆盖全部替代状态。鲜态流不能自动绑定调制/干燥产物，含义不清的果核/果仁流不能证明两种状态，商品籽不能证明播种种子身份。已有核验绑定仅用于其有据状态，否则明确保持UUID未决，直至详情确认。不得为强制匹配而改变产品边界、数量或路线。 | `fao-sweet-potato-postharvest` |
| `validate_reference_uuid` | 参考身份 | 按所选实际物种/器官、播种或商品用途、鲜/调制/干燥及带壳状态、等级、供应方和声明交接点核对具体身份及Mass/kg支持。本PCR保留语义路线和计量定义，但不宣称一个固定UUID覆盖全部替代状态。鲜态流不能自动绑定调制/干燥产物，含义不清的果核/果仁流不能证明两种状态，商品籽不能证明播种种子身份。已有核验绑定仅用于其有据状态，否则明确保持UUID未决，直至详情确认。不得为强制匹配而改变产品边界、数量或路线。 |  |
| `validate_exclusions` | 范围 | 种植材料或任何加工品作为参考产品时失败。 | `fao-sweet-potato-postharvest` |
| `validate_graph_links` | 过程图 | 要求周期、收获、整理和储藏批次链路完整。 |  |
| `validate_rejects` | 所有剔除状态 | 要求每个降级、返工、回收或废弃去向明确，且不得计入合格产出。 | `fao-sweet-potato-postharvest` |
| `validate_mass_balance` | 各节点 | 报告差值；无独立水分测量时禁止把总损失标为向空气排水。 | `mass-balance-identity` |
| `validate_flow_resolution` | 所有卡片 | 分别核验每种实际交换的具体流 UUID、物理状态、流属性和单位；未确认时明确保留未解析身份。 |  |
| `validate_curing` | 熟化路线 | 要求方法、温度、相对湿度、时长及进出状态；未熟化路线省略该节点。 | `fao-sweet-potato-postharvest` |

## 10. 发布数据集配置

| Field | Value |
| --- | --- |
| dataset_role | 鲜甘薯储藏根前景生产数据包 |
| downstream_use | 生成过程和生命周期模型；匹配地理、路线、状态和质量时可作二手或背景数据集 |
| allowed_use | 对身份、周期、熟化、损伤、去土、水分基准和交接相容的鲜根路线建模 |
| excluded_use | 种植材料生产、加工品、未披露的熟化混合、其他根茎作物替代 |
| required_metadata | 品种、地理、周期/事件/批次、路线、灌溉、熟化条件、储藏时长、损伤、去土、水分、交接、UUID、具体流身份核验 |
| required_quality_disclosure | 数据期、覆盖率、实测/计算份额、仪表、质量平衡、路线证据、分配、代表性和缺口 |
| update_trigger | 边界、身份、具体流身份核验|

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-sweet-potato-postharvest` | official_guidance | FAO, *Prevention of post-harvest food losses: Sweet potato crop profile*, https://www.fao.org/4/t0073e/T0073E08.htm | 谨慎收获、去土、损伤分级、熟化/储藏和边界 |
| `mass-balance-identity` | method_factor | 与进料、产出、残余物、样品和测得水分记录关联的质量守恒恒等式 | 归一化、节点核对、干质量转换和固定参考量 |

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `declared-handoff-measurement-definition` | `method_factor` | 本 PCR 第 3、6、8 节的净质量归一化定义：同一状态、同一交接门的实测净质量作为自身归一化分母，质量比为 1；交接计量不增加物理工序。 | 同阶段和交接计量恒等式；属于定义，不是实测产率、经验默认值或外部文献。 |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 一般分配优先顺序及可比交接点经济价值基准。适用条件和明确的剩余分支是本 PCR 的方法约定；该来源不规定本产品因果系数、价格或产出数量。 |
| `review-ipcc-soils-2019` | official_guidance | IPCC 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 管理土壤直接/间接N2O及石灰/尿素CO2方法语境；因子须匹配实际适用性及场址活动，不是产品默认值。 |
