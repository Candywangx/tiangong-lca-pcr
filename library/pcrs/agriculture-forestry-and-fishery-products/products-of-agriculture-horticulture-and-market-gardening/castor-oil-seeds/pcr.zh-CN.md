---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.castor-oil-seeds
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 蓖麻籽

## 1. 范围与适用性

本 PCR 覆盖蓖麻（*Ricinus communis*）受控种植以及在生产者或初级调理交接点交付收获未加工蓖麻籽。包括一年生或短寿命多年生栽培、申报的分批采摘或一次终期收获、蒴果/种子分离、干燥、清理、分级及不合格物料路径。排除蓖麻油提取、压榨、精炼、粕或衍生物制造以及认证播种用种子。经营者必须申报路线、收获模式、水分基准和准确的生产者或调理交接点。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.castor-oil-seeds |
| classification_refs | CPC 3.0：01447（精确分类语境）; mapping relation: narrower |
| covered_products | 经蒴果分离及必要干燥、清理和分级的收获未加工蓖麻种子 |
| excluded_products | 播种用种子；完整蒴果；蓖麻油；压榨饼粕；精炼油；衍生物；其他油籽 |
| representative_product | 用于榨油、压榨前的清洁分级蓖麻籽 |
| production_route | 受控一年生作物或短寿命多年生植株；分批采摘或终期收获；蒴果/种子分离；干燥；清理；分级；生产者或初级调理交接。一年生和多年生路线作为替代路线共存，在各自清单完成前不得合并。人工和机械路线是附着于相应母活动的技术替代。 |
| market_state | 已收获、未加工、无大块蒴壳、具有申报水分和等级且尚未榨油的种子 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 在申报生产者或初级调理交接点交付的蓖麻籽 |
| How much | 申报水分下 1,000 kg 净种子质量 |
| How well | 已脱蒴、清理、分级，并申报水分、等级、杂质、路线、收获模式和交接点 |
| How long or cycle | 一个一年生作物周期，或多年生植株的报告年度及建植/生产阶段 |
| reference_flow_link | accepted_castor_seed |

| Field | Value |
| --- | --- |
| Reference amount | 1000 |
| Reference product flow | 蓖麻籽 `d52055a9-c05b-4edd-ad58-f3271a360458` |
| Reference flow property | Mass（质量）`93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass（质量）`93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 蓖麻；收获未加工种子；净质量；水分及其基准；一年生/多年生路线；分批采摘/终期收获；等级；杂质；生产者/调理交接；地理；期间 |

详情读取确认了产品流、Castor Seed、精确 CPC 01447 和质量属性。平台地理、交接点和路线字段为空，因此必须由前景数据包提供，不得从 UUID 推断。

## 4. 计量与单位规则
| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 合格种子 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告不含包装和大块蒴壳的净种子质量。 |
| `moisture_basis` | 蒴果、种子、拒收物和损失 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg 及湿基 % | 每次交接测量水分；干物质=湿质量×（1−含水率），并披露换算。 |
| `area_period` | 栽培 | 面积和时间 | ha 及报告期 | 多年生植株须区分建植、生产年度、替换和终止记录。 |
| `energy_consistency` | 机械和干燥能源 | 与载体匹配 | 原始单位及 MJ | 保留实测载体单位，并使用有记录的换算。 |

## 5. 系统边界

前景边界始于申报的受控田块或多年生植株，止于合格种子交接。栽培、收获、分离、干燥/清理和分级是具有独立物料状态、损失、投入及交接的责任节点。分批采摘连接田块和批次；终期收获关闭作物周期。蓖麻油提取在边界外。

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 已建植田块或植株，并申报地理、面积、品种、路线、年龄或阶段、前期土地利用及土壤管理语境 |
| starting_condition_role | 前景受控生物生产起点；多年生建植和终止通过跨期归属保持可见 |
| product_classification_scope | CPC 3.0 01447；分类不定义水分、交接点、路线或等级 |
| recursive_input_rule | 购入蓖麻播种材料是区别于参考产品的上游投入；混入批次的购入收获蓖麻籽需要独立上游数据集和质量披露 |
| upstream_dataset_requirement | 购入播种材料、养分、水、植保产品、能源和外部服务在具体身份解析后需要代表性上游数据集 |
| disclosure | 申报路线、阶段、收获模式、技术、水分、内部交接、拒收/返工路径及准确交接点 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_to_seed` | 前景系统 | 包括作物管理、蒴果采收、种子分离、干燥、清理、分级和内部转移；排除榨油。 | `fao-ecocrop-ricinus-communis`; `icar-castor-depodder-2009` |
| `route_separation` | 一年生及多年生路线 | 在加权混合前分别建模建植、生产、替换、终止和投入特征。 | `fao-ecocrop-ricinus-communis` |
| `conditioning_gate` | 收获后节点 | 包括生产者调理；当外部初级调理者供应参考产品时，将其作为前景或透明上游过程建模。 | `icar-castor-depodder-2009` |
| `material_state_control` | 种子及残余物 | 分开记录种子、蒴壳残余物、拒收物、粉尘和去向；不得假定蓖麻残余物可作饲料。 | `fao-ecocrop-ricinus-communis` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | 作用 | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `cultivation` | 蓖麻田间栽培 | `required` | 一年生作物周期或多年生植株的申报生产期 | 管理蓖麻直至蒴果达到可收获成熟度 | 申报田块面积与期间 |
| `harvest` | 分批采摘或终期收获 | `required` | 必须申报收获模式 | 独立于栽培和调理采收成熟蒴果 | 采收成熟蒴果 kg |
| `pod_seed_separation` | 蒴果与种子分离 | `required` | 收获蒴果在种子交接前处理 | 按记录路线从蒴果中分离种子 | 接收蒴果 kg |
| `drying_cleaning` | 种子干燥与清理 | `required` | 仅当进料水分已达规范时主动干燥量可为零 | 稳定水分并去除杂质 | 接收原始种子 kg |
| `grading_handoff` | 分级与交接 | `required` | 每批必须分为合格、降级/返工或拒收 | 形成申报等级与最终合格状态 | 接收干燥清洁种子 kg |

栽培按田块及作物周期或多年生阶段记录。收获后节点按批次、生产周期或连续报告期记录。投入、产出、清洁、换批及共用负荷必须带相同运行或期间标识；同一共用负荷不得同时作为生产周期总量和批次分摊量重复计入。

### 过程：蓖麻田间栽培 (`cultivation`)

#### 输入
##### 产品流

###### 尿素肥料投入（`nutrient_supply`）

仅当声明的过程实际使用尿素肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：尿素肥料
- 数量规则：记录该过程和期间实际使用的尿素肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg 产品
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每田块面积及作物周期或生产期.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_field_inputs`

###### 磷酸一铵肥料投入（`nutrient_supply_monoammonium_phosphate`）

仅当声明的过程实际使用磷酸一铵肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：磷酸一铵肥料
- 数量规则：记录该过程和期间实际使用的磷酸一铵肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg 产品
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每田块面积及作物周期或生产期.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_field_inputs`

###### 氯化钾肥料投入（`nutrient_supply_potassium_chloride`）

仅当声明的过程实际使用氯化钾肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：氯化钾肥料
- 数量规则：记录该过程和期间实际使用的氯化钾肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg 产品
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每田块面积及作物周期或生产期.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_field_inputs`

###### 施用的牛粪肥投入（`nutrient_supply_cattle_manure`）

仅当声明的过程实际使用施用的牛粪肥时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：施用的牛粪肥
- 数量规则：记录该过程和期间实际使用的施用的牛粪肥数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg 产品
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每田块面积及作物周期或生产期.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_field_inputs`

###### 农业石灰石投入（`nutrient_supply_agricultural_limestone`）

仅当声明的过程实际使用农业石灰石时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：农业石灰石
- 数量规则：记录该过程和期间实际使用的农业石灰石数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg 产品
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每田块面积及作物周期或生产期.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_field_inputs`

###### 灌溉水供应 (`irrigation_water`)

记录供应的灌溉水；降雨不是产品投入。

- 选定流: 由前景记录选定的灌溉过程用水
- 流属性/单位: Mass / kg
- 数量规则: 计量或测量送至田块的水量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每田块面积及申报期间.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_field_inputs`
- 数量范围: 灌溉 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 20000000
  - 单位: kg/ha
  - 基准: 每公顷及期间；雨养生产可为零
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 中压电力投入（`cultivation_energy`）

仅当本过程实际供应中压电力时记录这一单独交换。其他能源、水源或材料须分别建立原子清单行，身份经核实或明确标记待核实。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：计量本过程在声明期间实际使用的中压电力数量；只有实际路线不使用时才记为不适用。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每田块面积及申报期间.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy_records`

###### 柴油投入（`cultivation_energy_diesel`）

仅当本过程实际供应柴油时记录这一单独交换。其他能源、水源或材料须分别建立原子清单行，身份经核实或明确标记待核实。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：计量本过程在声明期间实际使用的柴油数量；只有实际路线不使用时才记为不适用。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每田块面积及申报期间.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy_records`

#### 输出
##### 产品流

###### 可收获成熟蒴果作物 (`mature_capsules`)

成熟蒴果向收获节点的内部交接；不是市场参考产品。

- 选定流: 内部前景物料状态；无需外部 UUID
- 流属性/单位: Mass / kg
- 数量规则: 由收获记录计算可收获蒴果质量
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每田块及期间.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 由采集数据计算 (`calculated_from_collection`)
- 采集协议: `cp_harvest_lots`
- 数量范围: 蒴果产量 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 20000
  - 单位: kg/ha
  - 基准: 按实测水分计的每公顷湿蒴果质量
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流

###### 氧化亚氮，排放至空气（`field_emissions`）

仅在实测或所选适用方法确认该排放路径时，将氧化亚氮，排放至空气作为单一物质和接收介质交换记录。保留实际接收区室并核实具体流身份；其他物质单独建卡，本卡不预设必有排放。
原始活动或阶段基准：每田块面积及期间。

- 选定流：氧化亚氮，排放至空气
- 流属性/单位：质量 / kg N2O
- 数量规则：实测或按方法计算氧化亚氮，排放至空气的质量，保留活动数据、因子、物质基准和接收区室；仅归一到声明参考输出一次。 以 N2O-N 报告时，按 44/28 换算为 N2O 一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`crop_cycle`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_field_emissions`

###### 氨，排放至空气（`field_emissions_nh3`）

仅在实测或所选适用方法确认该排放路径时，将氨，排放至空气作为单一物质和接收介质交换记录。保留实际接收区室并核实具体流身份；其他物质单独建卡，本卡不预设必有排放。
原始活动或阶段基准：每田块面积及期间。

- 选定流：氨，排放至空气
- 流属性/单位：质量 / kg NH3
- 数量规则：实测或按方法计算氨，排放至空气的质量，保留活动数据、因子、物质基准和接收区室；仅归一到声明参考输出一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`crop_cycle`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_field_emissions`

###### 一氧化氮，排放至空气（`field_emissions_no`）

仅在实测或所选适用方法确认该排放路径时，将一氧化氮，排放至空气作为单一物质和接收介质交换记录。保留实际接收区室并核实具体流身份；其他物质单独建卡，本卡不预设必有排放。
原始活动或阶段基准：每田块面积及期间。

- 选定流：一氧化氮，排放至空气
- 流属性/单位：质量 / kg NO
- 数量规则：实测或按方法计算一氧化氮，排放至空气的质量，保留活动数据、因子、物质基准和接收区室；仅归一到声明参考输出一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`crop_cycle`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_field_emissions`

###### 硝酸根，排放至水体（`field_emissions_nitrate`）

仅在实测或所选适用方法确认该排放路径时，将硝酸根，排放至水体作为单一物质和接收介质交换记录。保留实际接收区室并核实具体流身份；其他物质单独建卡，本卡不预设必有排放。
原始活动或阶段基准：每田块面积及期间。

- 选定流：硝酸根，排放至水体
- 流属性/单位：质量 / kg NO3-
- 数量规则：实测或按方法计算硝酸根，排放至水体的质量，保留活动数据、因子、物质基准和接收区室；仅归一到声明参考输出一次。 以硝酸盐氮报告时，按 62/14 换算为 NO3- 一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`crop_cycle`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_field_emissions`

###### 化石二氧化碳，排放至空气（`field_emissions_co2_fossil`）

仅在实测或所选适用方法确认该排放路径时，将化石二氧化碳，排放至空气作为单一物质和接收介质交换记录。保留实际接收区室并核实具体流身份；其他物质单独建卡，本卡不预设必有排放。
原始活动或阶段基准：每田块面积及期间。

- 选定流：化石二氧化碳，排放至空气
- 流属性/单位：质量 / kg CO2
- 数量规则：实测或按方法计算化石二氧化碳，排放至空气的质量，保留活动数据、因子、物质基准和接收区室；仅归一到声明参考输出一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`crop_cycle`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_field_emissions`

### 过程：分批采摘或终期收获 (`harvest`)

#### 输入
##### 产品流

###### 来自栽培的成熟蒴果 (`harvest_capsule_input`)

将每次收获事件连接到其田块的内部投入。

- 选定流: 内部前景物料状态；无需外部 UUID
- 流属性/单位: Mass / kg
- 数量规则: 分配至每次采摘或终期收获事件的质量
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每次收获事件.

- 归一化基准：每声明的参考流
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 由采集数据计算 (`calculated_from_collection`)
- 采集协议: `cp_harvest_lots`
- 数量范围: 收获事件核算范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100
  - 单位: percent of field-period mature capsule mass
  - 基准: 各事件份额应与扣除田间损失后的 100% 核对
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 中压电力投入（`harvest_energy`）

仅当本过程实际供应中压电力时记录这一单独交换。其他能源、水源或材料须分别建立原子清单行，身份经核实或明确标记待核实。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：计量本过程在声明期间实际使用的中压电力数量；只有实际路线不使用时才记为不适用。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
原始活动或阶段基准：每 kg 采收蒴果.

- 归一化基准：每声明的参考流
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy_records`

###### 柴油投入（`harvest_energy_diesel`）

仅当本过程实际供应柴油时记录这一单独交换。其他能源、水源或材料须分别建立原子清单行，身份经核实或明确标记待核实。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：计量本过程在声明期间实际使用的柴油数量；只有实际路线不使用时才记为不适用。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
原始活动或阶段基准：每 kg 采收蒴果.

- 归一化基准：每声明的参考流
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy_records`

#### 输出
##### 产品流

###### 已收获蓖麻蒴果 (`harvested_capsules`)

向分离节点移交的内部已采收蒴果状态，保留采摘顺序和水分。

- 选定流: 内部前景物料状态；无需外部 UUID
- 流属性/单位: Mass / kg
- 数量规则: 每次事件离开的实测净蒴果质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每次收获事件.

- 归一化基准：每声明的参考流
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_harvest_lots`
- 数量范围: 收获蒴果批量范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0.1
  - 上限: 1000000
  - 单位: kg/event
  - 基准: 按实测水分计的湿蒴果质量
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 未回收蓖麻蒴果（`harvest_loss`）

将田间损失和伴生物料与已采收蒴果分开；身份与去向依据实测记录。

- 选定流: 未回收蓖麻蒴果
- 流属性/单位: Mass / kg
- 数量规则: 实测、抽样或质量平衡得出的损失
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每 kg 采收蒴果.

- 归一化基准：每声明的参考流
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 由采集数据计算 (`calculated_from_collection`)
- 采集协议: `cp_harvest_lots`
- 数量范围: 收获损失 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg captured capsules
  - 基准: 在相同水分基准下的损失
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

### 过程：蒴果与种子分离 (`pod_seed_separation`)

#### 输入
##### 产品流

###### 收获蒴果投入 (`separation_capsule_input`)

连接分离运行与收获批次的内部投入。

- 选定流: 内部前景物料状态；无需外部 UUID
- 流属性/单位: Mass / kg
- 数量规则: 投入该运行的实测蒴果质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每次分离运行.

- 归一化基准：每声明的参考流
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning_lots`
- 数量范围: 分离运行投入范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0.1
  - 上限: 1000000
  - 单位: kg/run
  - 基准: 按实测水分计的蒴果质量
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 中压电力投入（`separation_energy`）

仅当本过程实际供应中压电力时记录这一单独交换。其他能源、水源或材料须分别建立原子清单行，身份经核实或明确标记待核实。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：计量本过程在声明期间实际使用的中压电力数量；只有实际路线不使用时才记为不适用。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
原始活动或阶段基准：每 kg 原始分离种子.

- 归一化基准：每声明的参考流
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy_records`

###### 柴油投入（`separation_energy_diesel`）

仅当本过程实际供应柴油时记录这一单独交换。其他能源、水源或材料须分别建立原子清单行，身份经核实或明确标记待核实。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：计量本过程在声明期间实际使用的柴油数量；只有实际路线不使用时才记为不适用。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
原始活动或阶段基准：每 kg 原始分离种子.

- 归一化基准：每声明的参考流
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy_records`

#### 输出
##### 产品流

###### 原始分离蓖麻籽 (`raw_separated_seed`)

已脱离大块蒴壳但尚未达到最终水分、洁净度或等级的内部种子。

- 选定流: 内部前景物料状态；无需外部 UUID
- 流属性/单位: Mass / kg
- 数量规则: 离开分离节点的实测原始种子质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每次分离运行.

- 归一化基准：每声明的参考流
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning_lots`
- 数量范围: 原始种子回收 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0.05
  - 上限: 1
  - 单位: kg/kg capsule input
  - 基准: 按记录水分计每 kg 蒴果投入的原始种子
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 蓖麻果壳（`pod_residues`）

按状态和去向记录蒴壳、碎片及未回收物料；不得假定饲料用途。

- 选定流: 蓖麻果壳
- 流属性/单位: Mass / kg
- 数量规则: 按去向计量残余物或质量平衡差额
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每 kg 原始分离种子.

- 归一化基准：每声明的参考流
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 由采集数据计算 (`calculated_from_collection`)
- 采集协议: `cp_conditioning_lots`
- 数量范围: 蒴壳残余物 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10
  - 单位: kg/kg raw seed
  - 基准: 在相同水分基准下的残余物
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

### 过程：种子干燥与清理 (`drying_cleaning`)

#### 输入
##### 产品流

###### 原始分离种子投入 (`drying_seed_input`)

将调理批次连接到分离节点并保留进料水分和杂质信息。

- 选定流: 内部前景物料状态；无需外部 UUID
- 流属性/单位: Mass / kg
- 数量规则: 接收的实测原始种子质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每个干燥清理批次.

- 归一化基准：每声明的参考流
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning_lots`
- 数量范围: 调理批次投入范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0.1
  - 上限: 1000000
  - 单位: kg/lot
  - 基准: 按实测水分计的原始种子
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 中压电力投入（`conditioning_energy`）

仅当本过程实际供应中压电力时记录这一单独交换。其他能源、水源或材料须分别建立原子清单行，身份经核实或明确标记待核实。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：计量本过程在声明期间实际使用的中压电力数量；只有实际路线不使用时才记为不适用。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
原始活动或阶段基准：每 kg 干燥清洁种子.

- 归一化基准：每声明的参考流
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy_records`

###### 柴油投入（`conditioning_energy_diesel`）

仅当本过程实际供应柴油时记录这一单独交换。其他能源、水源或材料须分别建立原子清单行，身份经核实或明确标记待核实。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：计量本过程在声明期间实际使用的柴油数量；只有实际路线不使用时才记为不适用。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
原始活动或阶段基准：每 kg 干燥清洁种子.

- 归一化基准：每声明的参考流
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy_records`

#### 输出
##### 产品流

###### 干燥清洁蓖麻籽 (`dry_clean_seed`)

具有申报水分和杂质、可供分级但尚未验收的内部产出。

- 选定流: 内部前景物料状态；无需外部 UUID
- 流属性/单位: Mass / kg
- 数量规则: 干燥和清理后的实测种子质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每个调理批次.

- 归一化基准：每声明的参考流
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning_lots`
- 数量范围: 干燥清洁回收 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0.1
  - 上限: 1
  - 单位: kg/kg raw seed
  - 基准: 每 kg 投入的产出并披露水分换算
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 蓖麻籽清理筛出物（`cleaning_rejects`）

当去向不同时，分别记录蒴壳碎片、石块、土壤、粉尘及受损种子。

- 选定流: 蓖麻籽清理筛出物
- 流属性/单位: Mass / kg
- 数量规则: 扣除移除水分后的实测拒收物质量
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每 kg 干燥清洁种子.

- 归一化基准：每声明的参考流
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 由采集数据计算 (`calculated_from_collection`)
- 采集协议: `cp_conditioning_lots`
- 数量范围: 清理拒收物 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg output
  - 基准: 每 kg 产出的非水拒收物
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流

###### 排至空气的移除水分 (`water_to_air`)

当数据模型要求该交换时，根据匹配的湿基含水率测量计算移除水分。

- 选定流: 按数据包约定待解析的排至空气水身份
- 流属性/单位: Mass / kg
- 数量规则：在闭合水质量控制体上确定有据蒸发量：进入材料的水 + 实际加水 + 期初水库存 - 全部合格品/联产品/拒收物/残体出口带水 - 单独液体排出/转出水 - 期末水库存。逐材料流采用实测湿质量乘湿基含水率，液体体积采用兼容密度；内部循环抵销。适用时保留实际降雨/复湿，总鲜干质量差并非全为水。各项和蒸发路径须独立有据；未解释或负平衡需调查，不能强记为水蒸气释放或截为零。水量与干物质损失及其他挥发物分开，按原匹配最终参考量归属并归一化一次。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每 kg 干燥清洁种子.

- 归一化基准：每声明的参考流
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 由采集数据计算 (`calculated_from_collection`)
- 采集协议: `cp_conditioning_lots`
- 数量范围: 移除水分 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 2
  - 单位: kg water/kg output
  - 基准: 无需干燥时为零
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

### 过程：分级与交接 (`grading_handoff`)

#### 输入
##### 产品流

###### 干燥清洁种子投入 (`grading_seed_input`)

连接到调理批次并保留水分和杂质信息的内部投入。

- 选定流: 内部前景物料状态；无需外部 UUID
- 流属性/单位: Mass / kg
- 数量规则: 投入分级的实测种子质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每个分级批次.

- 归一化基准：每声明的参考流
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_grading_handoff`
- 数量范围: 分级批次投入范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0.1
  - 上限: 1000000
  - 单位: kg/lot
  - 基准: 每批干燥清洁质量
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

#### 输出
##### 产品流

###### 交接时合格蓖麻籽 (`accepted_castor_seed`)

唯一参考产品：经分离、必要干燥、清理和分级后、榨油前的收获未加工种子。

- 选定流: 蓖麻籽 `d52055a9-c05b-4edd-ad58-f3271a360458`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
原始产出计量与核对要求：申报水分下 1,000 kg 净合格种子

- 数量规则：1000 千克
- 数值来源模式: 固定值 (`fixed_value`)
- 适用范围: 产品特定 (`product_specific`)
原始活动或阶段基准：一个参考流.

- 归一化基准：每声明的参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 身份引用 (`identity_reference`)
- 采集协议: `cp_grading_handoff`
- 数量范围: 参考流等式校验
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1000
  - 上限: 1000
  - 单位: kg
  - 基准: 每参考流的净合格种子
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 降级蓖麻籽（`downgraded_rework_seed`）

将不合格种子送至一个申报的内部返工回路或外部降级去向；具体外部身份延期解析。

- 选定流: 降级蓖麻籽
- 流属性/单位: Mass / kg
- 数量规则: 合格等级之外的实测质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每 kg 合格种子.

- 归一化基准：每声明的参考流
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_grading_handoff`
- 数量范围: 降级/返工 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg accepted seed
  - 基准: 每 kg 合格产出的不合格质量
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 拒收蓖麻籽（`grading_rejects`）

按状态和去向记录丢弃种子及杂质；从合格产出中排除。

- 选定流: 拒收蓖麻籽
- 流属性/单位: Mass / kg
- 数量规则: 离开分级节点的实测拒收物质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每 kg 合格种子.

- 归一化基准：每声明的参考流
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_grading_handoff`
- 数量范围: 最终拒收物 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg accepted seed
  - 基准: 每 kg 合格产出的拒收物
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_mass_balance_first` | 所有节点 | 分配前完成物理质量和干物质平衡；保持水分损失、残余物、田间损失、返工、降级、拒收物和合格种子可见。 |  |
| `allocation_single_intended_product` | 作物路线 | 默认仅合格种子是预期产品。残余物和拒收物承担至其去向的负荷；任何联产品主张须披露功能及与目标一致的分配。 |  |
| `allocation_rework` | 返工回路 | 负荷随物料返回分离、清理、干燥或分级；返料只计一次，合格前不得计入合格产出。 |  |
| `allocation_run_period` | 共用运行 | 用披露的因果驱动因素一次分配共用能源、清洁及换批负荷；不得同时计入运行总量和批次份额。 |  |
| `allocation_multi_period` | 多年生路线 | 区分建植、生产、替换和终止；按有证据的生产产出归属各阶段并防止重复归属。 | `fao-ecocrop-ricinus-communis` |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_residual_precedence` | 未规定主方法分支的剩余共同负担 | 本 PCR 要求研究作联产品分配决策但未规定主方法的地方，统一执行以下优先顺序；已明确规定的类别专属主方法保持有效。先直接归属可分开的产出专属作业。剩余共同负担 B 只有在实测作业或生物服务记录证明驱动量 d_i 代表因果消耗时，才采用该物理驱动。产品可称量、有价值或等级较低本身均不构成因果依据，不能在面积、时间、质量和收入间任意切换。可比等级接受相同共同搬运服务时，仅在服务需求、状态及水分基准可比且有据时采用实测处理质量。份额 a_i=d_i/sum(d_j)，B_i=B*a_i。该共同作业没有可辩护的因果物理驱动时，采用同交接点、同期间经济份额 a_i=(q_i*p_i)/sum(q_j*p_j)，纳入全部独立预期产出，匹配数量/价格单位、币种和代表性价格，使用产出专属下游加工之前的价值。缺价格或分母证据使分配结果不完整，不能把产品价格记零或改称单一产出系统。披露合计为一的份额和重要替代方法敏感性；敏感性方法不是可任意替换的主结果。废物、留存残余和内部转移不获得联产品份额，其应归属的生产/处理负担仍保留在产出可售产品的路线中。未分配物理数量和质量平衡另行保留。本分支不自动给予替代信用；单独界定的替代情景须保留总清单及实际被替代功能证据。 | `ghg-protocol-product-standard-2011` |

## 8. 前景数据采集、计算与质量规则

清单完整性：具名条件卡是单项交换示例，不是穷尽配方，也不要求使用这些产品。完成前景数据包前，逐项列出所有实际种植材料、养分产品、作物保护制剂、资产材料、作业服务、载能体、包装材料、废物流及适用的基本物质，使用明确的物理身份、状态、原始属性/单位、来源或接收区室及实测或按方法计算的数量。身份或数量缺失属于完整性缺口，不得假定为零。保留实际批次和阶段基准；不得将中间转移累加为额外最终产出，也不得重复计入采购服务已包含的负荷。

先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_inputs` | `cultivation` | 养分和灌溉 | 票据、施用日志、仪表 | field_id; route; phase; product; composition; quantity; unit; date | 核对采购与田间施用；原始汇总与分配：按田块、物料和期间汇总，保留零用量 | 原始单位及 kg | 每次施用 | 作物周期或生产期 | 每个田块 | 每声明的参考流 | 票据、仪表、施用及校准记录 |
| `cp_energy_records` | 所有节点 | 燃料和电力 | 领用、仪表、设备日志 | process_id; run_id; carrier; quantity; unit; equipment; hours; driver | 直接计量或有记录的计算；原始汇总与分配：按载体和节点汇总且只分配一次 | 原始单位及 MJ | 每次运行或期间 | 完整前景期 | 每个田块/设施 | 每声明的参考流 | 票据、仪表、日志、换算因子 |
| `cp_harvest_lots` | `harvest` | 蒴果和田间损失 | 称量单和样本 | field_id; event_id; date; pattern; technology; mass; moisture; loss | 每批称量并记录损失抽样；原始汇总与分配：水分核对后汇总事件 | kg 及湿基 % | 每次事件 | 所有采摘或终期收获 | 每个田块 | 每声明的参考流 | 校准、样本、追溯 |
| `cp_field_emissions` | `cultivation` | 物质 | 测量和计算 | substance; compartment; activity; factor; result; unit; method | 实测或使用申报方法；原始汇总与分配：保留物质及环境介质身份 | kg 物质 | 事件或期间 | 完整期间 | 每个田块 | 每声明的参考流 | 方法、原始数据、计算 |
| `cp_conditioning_lots` | `pod_seed_separation`; `drying_cleaning` | 种子、残余物、水分 | 批次表和测试 | run_id; masses; moisture; residues; rejects; destination; technology ；含拒收物/残体的全部进出水；实际加水/降雨；单独液体转出；期初期末水库存；含水率及密度；有据蒸发| 称量投入产出并抽样水分；原始汇总与分配：按运行核对湿质量和干物质 | kg 及湿基 % | 每次运行/批次 | 所有供应批次 | 每个场址 | 每声明的参考流 | 秤、测水方法、追溯 |
| `cp_grading_handoff` | `grading_handoff` | 合格、降级、返工、拒收 | 分级及发运记录 | lot_id; masses; grade; impurity; moisture; destinations; gate | 称量各状态并连接发运/返工；原始汇总与分配：仅合格量进入参考产出，返工只计一次 | kg 及等级指标 | 每批 | 所有供应批次 | 每个场址 | 每声明的参考流 | 秤、规范、追溯 |
| `cp_phase1_environment_coverage` | cultivation | 按实际节点的管理环境覆盖 | 场址活动方法台账 | 实际生产节点；土壤/介质路线；气候土壤；肥料产品量及组成；残体去向及氮；相关矿化/有机土/排泄活动；方法层级方程版本；路径因子及单位；石灰尿素；实际燃料；物质/环境；供应覆盖; 场址及实际管理节点；面积；有日期占用区间；共同使用者；建植/未产期历史；实际前后土地类别及转化日期/面积；碳核算覆盖；上游土地覆盖 | 按实际负责生产节点及匹配批次/期间采集原始记录，保留来源、方法适用性和不确定性。与现有协议及供应覆盖核对，不新增重复事件；不适用须明示有据，缺少证据属于缺口。 | 适用的原生活动单位、kg N或物质、面积/时间 | 事件及年度/批次核对 | 匹配生产/队列期间 | 全部实际管理生产节点 | 执行适用覆盖核算后最终归一化一次 | 原始记录、方法工作表及适用性证据 |

### 计算规则

| rule_id | 适用对象 | Formula or rule | 投入 | 产出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_moisture_conversion` | 物料交接 | 干物质=湿质量×（1−湿基含水率）；目标湿质量=干物质÷（1−目标含水率） | 质量、实测水分、目标水分 | 水分一致质量 |  |
| `calc_stage_yield` | 所有节点 | 转移产出干物质÷投入干物质 | 连接的质量和水分 | 阶段产率 |  |
| `calc_field_yield` | 田间路线 | 合格产出干物质÷占用面积，保留路线阶段和收获事件 | 产出、水分、面积、期间 | kg 干物质/ha-期间 |  |
| `calc_shared_run` | 生产周期/连续运行 | 共用负荷×批次驱动量÷运行总驱动量 | 运行负荷和驱动量 | 一次分配的批次负荷 |  |
| `calc_perennial_attribution` | 多年生路线 | 按有证据的生产产出归属阶段负荷；披露剩余植株和终止处理 | 阶段记录及产出 | 期间负荷 | `fao-ecocrop-ricinus-communis` |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | 最终基本交换使用已识别物质的质量和一个实际接收环境，养分／活动台账另存：该物种的 N2O-N × 44/28 为 N2O，NH3-N × 17/14 为 NH3，硝酸盐氮 × 62/14 为硝酸盐，磷酸盐磷 × 95/31 为磷酸盐。若选定流为元素磷，则报告 kg P，仅在物种口径有据时将磷酸盐质量乘 31/95。只有方法输出按元素计时才换算一次，实测化合物质量不得再换算。总养分损失不得无据归于单一物种，土壤残余／留存养分不是排放。保留直接／间接路径台账，不重复所选方法或上游清单已经包含的路径。因子不确定性范围只按其声明基准检查因子，不是最终化合物数量或场址排放的允许界限。用合格参考数量和匹配实测产出，将可归属化合物质量归一化一次。活动量、身份或接收环境未知时保留证据缺口，不得宣称完整。 | `cp_field_emissions`; 物种特定活动量台账、方法路径和因子基准、匹配合格产出 | 按身份区分的交换和对账活动记录 |  |

### 环境覆盖计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_managed_environment_coverage` | 实际管理生产节点 | 针对实际自主管理生产节点，逐项记录土壤直接 N2O、挥发/沉降间接 N2O、淋溶/径流间接 N2O、NH3/NOx 与养分损失，以及实际施石灰/尿素 CO2 的适用性。主核算依次采用有代表性的路径实测、经验证且适用于作物/土壤/管理的场址或国家方法；否则 N2O 与石灰/尿素 CO2 采用适用的2006 IPCC及2019修订管理土壤方程，按气候和投入类别选因子。保留确切版本、方程、层级、活动量及因子单位和气候/管理适用性，不规定通用剂量或因子。无土/设施路线须采用适用于实际介质的方法，不强套土壤因子。化肥、有机投入、残体、实际相关矿化/有机土和排泄物路径使用同一田块期间氮台账；路径不适用须证明，缺数不能填零。直接及各间接分量分别计算，逐项只分配到匹配的现有或新增具体卡一次，不将总量与组成重复相加。N2O-N 乘44/28转分子 N2O 一次。NH3、NOx及养分/农药损失采用适用实测或有据物质/去向模型；总N/P或未解释平衡差不等于某化合物释放。保留实际接收环境及分子、元素或报告口径，间接形成不能在来源台账再扣同一氮。实际本地燃烧另按燃料特定的燃烧方法记录；外购电、热和服务承接上游覆盖一次。有据释放按具体身份建卡，复用现有匹配卡，采用已核实UUID或明确未决身份。适用方法、活动量、因子或身份缺失会阻止完整性，不构成有据零值；原始活动/释放总量归属后按匹配合格参考产出归一化一次。 | cp_phase1_environment_coverage | 按匹配最终参考量的应归属原生环境数量 | `review-ipcc-soils-2019` |
| `calc_managed_land_coverage` | 实际管理生产节点 | 逐实际自主管理生产场址采集占用面积及有日期的占用区间，包括应归属的建植/未产期与生产期。占用量为面积乘实际时长，明确换为所选面积时间单位（1 ha=10,000 m2，时间按年）；只有每作物周期公顷数而无时长不能得到面积时间。建立、管理区间重叠时划分区间或取并集，同一面积时间只计一次，实际共同使用者份额合计为一。土地转化按声明土地利用方法，另记实际前/后土地类别、事件面积和日期；转化使用面积单位，不能与占用量相加。种植、持续占用或前土地资料缺失不能证明发生转化，也不能证明零转化。适用时保留历史事件归属及碳库/排放方法覆盖，不编造转化或通用固碳信用。分别建立兼容基本流身份，采用已核实UUID或明确未决身份，归属一次后按匹配最终参考产出归一化。外购已完成的生物投入承接兼容上游土地覆盖一次，不在本地重复。适用土地身份、面积、时长或前状态证据缺失属于完整性缺口；有据无转化可记录为不适用。 | cp_phase1_environment_coverage | 按匹配最终参考量的应归属原生环境数量 |  |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 每批核实物种、收获未加工状态、CPC 语境、等级、水分和交接点。 | 规范、详情证据、发运记录 |
| `dq_traceability` | 过程图 | 无重复质量地连接田块、事件、分离运行、调理批次、分级/返工和发运。 | 标识符和核算 |
| `dq_temporal` | 路线 | 覆盖一年生周期或报告的多年生期间，并识别期间外的建植、替换和终止。 | 日期记录 |
| `dq_measurement` | 质量/水分 | 使用校准秤和有记录的测水方法；披露抽样及缺口。 | 校准和测试记录 |
| `dq_completeness` | 所有卡 | 每张适用卡及去向记录零值、实测值或有记录的缺口。 | 完整清单和质量平衡 |
| `dq_technology` | 替代路线 | 聚合前识别人工/机械收获和分离以及自然/主动干燥。 | 设备和运行记录 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 要求固定 Castor Seed UUID、质量属性/单位组及所有 PCR 补充的交接点、路线、状态和水分限定词。 |  |
| `validate_route` | 栽培/收获 | 每条未分段记录要求一个一年生或多年生路线及一个分批采摘或终期收获声明；事件与田块总量核对。 | `fao-ecocrop-ricinus-communis` |
| `validate_process_chain` | 过程图 | 要求栽培、收获、分离、干燥/清理及分级交接；购买干燥能源为零须有水分证据。 | `icar-castor-depodder-2009` |
| `validate_mass_moisture` | 物料节点 | 核对湿质量和干物质，并分开报告移除水分、残余物、损失、返工、降级和拒收物。 |  |
| `validate_flow_resolution` | 交换 | 最终 TIDAS 生成前，将每项实际交换按物质/物料状态、方向、去向、属性和单位核实到具体 UUID；尚未核实的身份保留在 manifest。 |  |
| `validate_nutrient_cardinality` | 栽培 | 分别核验每种实际交换的具体流 UUID、物理状态、流属性和单位；未确认时明确保留未解析身份。 |  |
| `validate_period_attribution` | 多年生路线 | 要求建植、生产、替换、终止及剩余植株处理并防止重复归属。 | `fao-ecocrop-ricinus-communis` |
| `validate_rework_reject` | 收获后节点 | 每种不合格状态终止于返工、降级、回收或废弃，合格前不得计入合格产出。 |  |
| `validate_run_attribution` | 运行 | 要求运行/期间标识和一个分配驱动因素；拒绝运行总量与批次份额重复。 |  |
| `validate_extraction_exclusion` | 系统 | 拒绝将种子压榨、蓖麻油提取、精炼或衍生物制造纳入边界。 |  |

## 10. 发布数据集概况

| Field | Value |
| --- | --- |
| dataset_role | 申报生产者或初级调理交接点的收获未加工蓖麻籽前景数据集 |
| downstream_use | 经代表性审查后可作 `secondary_dataset`；`background_dataset` |
| allowed_use | 榨油前种子供应；仅在水分、交接点、路线、等级和分配一致时比较 |
| excluded_use | 榨油/精炼；粕/衍生物；播种用种子认证；安全评估；未披露路线混合 |
| required_metadata | 地理；期间；品种；路线；植株阶段；收获模式；面积；技术；干燥模式；水分；等级；杂质；交接点；分配；返工；具体身份 |
| required_quality_disclosure | 一手数据占比；缺口；不确定性；超出 Range；平衡；逐行流身份核实证据；延期身份决定；多年生归属 |
| update_trigger | 规范、交接点、路线、收获模式、技术、水分、等级、供应组合、分配、流身份或 UUID 证据变化 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-ecocrop-ricinus-communis` | official_guidance | FAO EcoCrop，*Ricinus communis*，https://ecocrop.apps.fao.org/ecocrop/srv/en/cropView?id=1866 | 物种/种子身份；一年生与短寿命多年生语境；路线及期间申报 |
| `icar-castor-depodder-2009` | official_guidance | ICAR News，2009 年 4–6 月，“Castor depodder and decorticator”，https://icar.gov.in/sites/default/files/2022-04/ICAR-News-April-June-09.pdf | 蒴果/种子分离；清理/分级；水分敏感的机械路线 |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 一般分配优先顺序及可比交接点经济价值基准。适用条件和明确的剩余分支是本 PCR 的方法约定；该来源不规定本产品因果系数、价格或产出数量。 |
| `review-ipcc-soils-2019` | official_guidance | IPCC 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 管理土壤直接/间接N2O及石灰/尿素CO2方法语境；因子须匹配实际适用性及场址活动，不是产品默认值。 |
