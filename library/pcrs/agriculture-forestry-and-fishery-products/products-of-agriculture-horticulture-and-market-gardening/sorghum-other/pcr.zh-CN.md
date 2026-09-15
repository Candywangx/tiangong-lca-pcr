---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.sorghum-other
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 高粱，其他

## 1. 范围与适用性

本 PCR 用于非种用高粱籽粒生产的前景数据包。范围包括露地种植，以及为在农场门交付所声明未加工籽粒而必需的农场内活动。它适用于雨养和灌溉路线，并要求声明生产路线、地理位置、季节、品种或物种、水分基准和残余物管理方式。

本 PCR 不是默认清单。种子、养分、水、作物保护、能源、产量、损失和排放数值必须来自前景记录，或来自范围明确且在地理和时间上具有代表性的方法。统计数据或手册数值只有在其范围与前景系统相匹配时才可作为建模数值，否则只能用于合理性筛查。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.sorghum-other |
| classification_refs | CPC 3.0:01142，Sorghum, other（exact） |
| covered_products | 为收获非种用籽粒而种植、并以未加工籽粒状态在农场门交付的高粱属物种，主要包括 Sorghum vulgare、S. guineense 和 S. dura |
| excluded_products | 专门为种子用途种植的高粱；甜高粱（Sorghum saccharatum）；不交付代表性籽粒的纯饲草或生物质路线；高粱加工产品；下游饲料、食品、饮料或生物燃料制造 |
| representative_product | 在农场门交付的未加工、收获后的非种用高粱籽粒 |
| production_route | 一年生露地种植，可为雨养或灌溉，包括收获以及在所声明农场门节点之前有条件纳入的农场内清理、干燥和储存 |
| market_state | 具有已声明水分含量以及清洁度或等级的未加工收获籽粒 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在所声明农场门参考节点交付的收获后非种用高粱籽粒净质量 |
| How much | 1,000 kg |
| How well | 产品不是种用高粱或甜高粱；声明水分含量、杂质或等级，以及纳入的调理活动 |
| How long or cycle | 一个已声明作物周期；当轮作对投入、产量、残余物或土壤排放有重大影响时，数据期必须覆盖完整轮作周期 |
| reference_flow_link | 最后一个纳入的前景过程必须提供下表所示 Tiangong 产品流，且数量恰为 1,000 kg |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 高粱，其他 `ff8b6c96-9f97-4952-8832-abfbc4295b65` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 地理位置；田块或农场范围；作物年份或季节；品种或物种；雨养或灌溉路线；轮作和前期土地利用；收获面积；收获产量；收获水分；参考水分；纳入的清理、干燥或储存；残余物去向；共产品分配方法 |

构建前景数据包时，所有必需限定信息必须出现在数据集元数据、过程说明、参考流备注、产品说明或等效字段中。缺少限定信息会使参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将最后一个纳入过程严格归一化为所声明参考水分下 1,000 kg 高粱净质量；保留实测收货质量和水分。 |
| `moisture_basis` | 籽粒、筛下物和残余物 | 质量和水分分数 | kg 和 kg 水/kg 湿物料 | 声明每个质量是湿基、干基还是换算到指定水分；任何换算都必须保持干物质守恒并保留实测水分记录。 |
| `yield_area_basis` | 田间种植 | 质量和面积 | kg 和 ha | 在按 1,000 kg 归一化前记录收获面积、总收获质量和可销售质量；不得用全球平均产量反推面积。 |
| `nutrient_basis` | 肥料、粪肥、残余物和土壤改良剂 | 产品质量和养分质量 | kg 产品和 kg 养分 | 分别保留产品用量、养分分析以及 N/P/K 基准；不得把配制产品质量当作养分质量。 |
| `water_basis` | 灌溉水 | 质量或计量体积 | kg 或 m3 | 有计量体积时保留原始体积；换算为质量时声明密度假设并保留原始读数。 |
| `energy_basis` | 燃料、电力和热 | 交付质量、体积或能量 | kg、L、kWh 或 MJ | 保留采购或计量单位，并记录全部换算因子和热值基准。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `include_cultivation_operations` | 前景田间种植 | 纳入整地、播种、建苗、养分和土壤改良剂施用、作物保护、灌溉、田间能源、收获以及直接控制的田间作业。 | `fao-leap-feed-2016`; `icrisat-sorghum-handbook-2020` |
| `include_upstream_inputs` | 外购投入 | 记录每项跨越前景边界的外购投入，并链接具有代表性的上游数据集；不得用通用背景用量替代前景用量。 | `fao-leap-feed-2016` |
| `include_field_emissions` | 受管理田块 | 纳入适用的土壤直接和间接排放、肥料和残余物管理排放、研究方法要求的土地利用或土壤碳变化，以及尚未在其他位置表征的农场内直接燃烧排放。 | `fao-leap-feed-2016`; `ipcc-2019-managed-soils` |
| `conditional_postharvest` | 农场内收获后活动 | 只有在清理、干燥、处理和储存发生于所声明农场门参考节点之前时才纳入，并核对进入籽粒、输出籽粒、水分损失、筛下物、拒收物和其他输出。 | `fao-leap-feed-2016`; `icrisat-sorghum-handbook-2020` |
| `exclude_downstream_processing` | 下游系统 | 排除所声明农场门之后的运输以及碾磨、饲料制造、食品或饮料加工、生物燃料转化、使用和生命末期；研究在本 PCR 之外明确增加这些系统时除外。 | `fao-leap-feed-2016` |
| `justify_exclusions` | 截断和遗漏 | 识别每项排除的物料、能源、排放和过程，在可行时量化并说明理由；不得通过排除隐藏已知的重大贡献项。 | `fao-leap-feed-2016` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 所声明作物或轮作核算期开始时的受管理田块，并声明前期土地利用、土壤状况和田间现存作物残余物状态 |
| starting_condition_role | 前景数据采集的起始状态；它不消除所选 LCA 方法要求的前期土地利用、土壤碳或轮作影响 |
| product_classification_scope | CPC 3.0 01142 非种用高粱籽粒；种用高粱、甜高粱、纯饲草路线和高粱加工产品不属于本 PCR |
| recursive_input_rule | 前景系统内使用的外购非种用高粱籽粒必须作为具有自身上游数据集的可见产品输入，不得将其视为无来源的本 PCR 实例 |
| upstream_dataset_requirement | 跨越系统边界的种子、具有上游负荷的肥料、粪肥或改良剂、作物保护产品、供水、燃料、电力、热、农机服务、包装以及到农场运输必须使用具有代表性的上游数据集 |
| disclosure | 声明地理位置、田块或农场覆盖范围、作物年份和轮作、品种或物种、前期土地利用、雨养或灌溉状态、收获面积、产量、收获和参考水分、残余物去向、纳入的收获后作业、分配、排除项以及方法或因子版本 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `field_cultivation` | 高粱田间种植与收获 | `required` |  | 前景作物建植、管理、收获和受管理土壤排放核算 | 实测田块和作物周期记录，归一化到进入最后一个纳入过程的质量 |
| `on_farm_postharvest` | 农场内清理、干燥、处理与储存 | `conditional` | 任何作业发生于所声明农场门参考节点之前，或改变产品水分、质量、清洁度或损失时纳入 | 交付前的前景调理和储存 | 实测投入产出与能源平衡，归一化到 1,000 kg 最终参考产品 |

### 过程：高粱田间种植与收获（`field_cultivation`）

#### 输入

##### 产品流

###### 播种用种子（`sorghum_seed`）

记录进入田间过程的外购或自留播种用种子。所选 Tiangong 流明确表示种用产品，不是参考产品。

- 选定流：高粱，种子 `0ad65fec-228e-47cf-8d8d-6d00f56c18ed`
- 流属性/单位：Mass / kg
- 数量规则：分配到数据包所代表收获面积的实测播种用合格种子质量，包括补种
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 最终参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_inputs`

###### 肥料、粪肥和土壤改良剂（`nutrient_and_amendment_inputs`）

按产品分别记录配方、养分含量、施用量、施用位置和时间。为所报告配方选择精确 Tiangong 产品流；本 PCR 不规定通用肥料 UUID。

- 选定流：与前景记录相匹配的产品特定肥料、粪肥、石灰、尿素或土壤改良剂流
- 流属性/单位：Mass / kg 产品和 kg 养分
- 数量规则：实测采购和施用产品质量、养分分析及田块分配；重大时分别计入退回未用量和损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 最终参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_inputs`
- 来源：`fao-leap-feed-2016`

###### 作物保护产品（`crop_protection_inputs`）

施用时按配制产品分别记录除草剂、杀虫剂、杀菌剂、生物防治产品和种子处理剂，并记录活性成分。

- 选定流：产品特定作物保护流；仅在不存在精确配方流时，才把通用 农药 `23a65bba-3eb5-406c-ad26-6841bd151f9c` 作为后备身份
- 流属性/单位：Mass / kg 配制产品和 kg 活性成分
- 数量规则：实测配制产品施用量和活性成分含量，包括重复施用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 最终参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_inputs`
- 来源：`fao-leap-feed-2016`

###### 灌溉水（`irrigation_water`）

路线为灌溉种植时，记录取水量和输送量；区分水源、取水点、交付点和损失。

- 选定流：灌溉用水 `7b6bcebb-c84d-46b1-9568-1c1c9c6c8701`
- 流属性/单位：Mass / kg，并保留原始计量 m3
- 数量规则：对所代表田块计量或以其他记录证明的灌溉水交付量，并声明换算方法和输水边界
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 最终参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_inputs`
- 来源：`fao-leap-feed-2016`

###### 田间机械使用的柴油（`field_diesel`）

记录直接控制的种植和收获机械所消耗的柴油。当所链接燃烧数据集已经包含直接燃烧排放时，不得再次添加该排放。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg，适用时保留采购 L
- 数量规则：分配到所代表田间作业的实测领油、采购或机械使用记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 最终参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_inputs`

###### 电力和其他田间能源（`field_other_energy`）

灌溉、田间作业或收获使用电力、其他燃料和承包机械能源时，按能源载体分别记录。

- 选定流：与前景记录相匹配的能源载体特定 Tiangong 产品流
- 流属性/单位：能量或交付产品属性 / kWh、MJ、kg 或 L
- 数量规则：按能源载体和作业记录计量、发票或设备日志用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 最终参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_inputs`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 收获后的非种用高粱籽粒（`harvested_sorghum`）

记录总收获籽粒、可销售籽粒及其水分。只有当田间种植是最后一个纳入的前景过程时，本行才承载参考数量。

- 选定流：高粱，其他 `ff8b6c96-9f97-4952-8832-abfbc4295b65`
- 流属性/单位：Mass / kg
- 数量规则：实测收获质量，仅通过所声明的干物质守恒水分计算进行换算；未纳入后续前景过程时，把最终输出设为 1,000 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 最终参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_outputs`

###### 收获的高粱残余物和共产品（`harvested_residues`）

只有秸秆、茎叶、穗或其他收获生物质被移出田块或作为共产品管理时才记录。留在田间或还田的生物质仍进入残余物管理和排放计算。

- 选定流：场址特定高粱残余物或生物质流；不选择通用 UUID
- 流属性/单位：Mass / kg 湿质量和 kg 干物质
- 数量规则：按用途和去向实测或计算移出生物质，并保留水分和养分含量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 最终参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_outputs`
- 来源：`fao-leap-feed-2016`; `ipcc-2019-managed-soils`

##### 废物流

###### 离开田块的田间和收获废物（`field_wastes`）

只有毁坏籽粒、收集的污染物料、包装和其他废物跨越田间过程边界时才记录，并保留去向和处理路线。

- 选定流：与记录物料和处理去向相匹配的废物特定 Tiangong 流
- 流属性/单位：Mass / kg
- 数量规则：按类型和去向实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 最终参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_outputs`

##### 基本流

###### 受管理土壤的直接和间接一氧化二氮（`managed_soil_n2o`）

根据所声明 IPCC 层级或有依据的区域方法，计算适用合成和有机氮投入、作物残余物氮、矿化项、挥发以及淋溶或径流导致的直接和间接 N2O。

- 选定流：一氧化二氮 `29061478-6556-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg N2O
- 数量规则：对采集的氮活动数据应用所声明 IPCC 或经审查区域方程，保留 N2O-N 中间结果，并以 44/28 将 N2O-N 换算为 N2O
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 最终参考产品
- 基准类型：氮投入（`n_input`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_emission_activity`
- 来源：`ipcc-2019-managed-soils`
- 数量范围：IPCC 汇总 EF1 不确定性筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.002
  - 上限：0.018
  - 单位：kg N2O-N/kg 适用氮投入
  - 基准：每 kg 进入适用受管理土壤直接 EF1 项的氮；要求时使用分解因子或更高层级因子
  - 基准类型：氮投入（`n_input`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`ipcc-2019-managed-soils`

###### 氨和氮挥发（`managed_soil_ammonia`）

记录所选直接和间接排放方法所需的氨或其他挥发氮，同时避免重复计算肥料制造背景排放。

- 选定流：氨 `08a91e70-3ddc-11dd-96ae-0050c2490048`
- 流属性/单位：Mass / kg NH3 或 kg N，按所选方法要求声明
- 数量规则：按肥料或改良剂类型，使用所声明方法和分配因子，从采集的氮施用量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 最终参考产品
- 基准类型：氮投入（`n_input`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_emission_activity`
- 来源：`ipcc-2019-managed-soils`

###### 氮淋溶和径流（`managed_soil_n_leaching`）

只有所声明方法和场址条件表明该路径发生时，才记录氮淋溶和径流。

- 选定流：为受纳水体环境介质选择的介质特定氮或硝酸盐基本流
- 流属性/单位：Mass / kg N 或 kg 硝酸盐，并声明化学形态基准
- 数量规则：根据采集的氮活动数据和所声明淋溶或径流方法计算；保留 N 质量和化学形态质量之间的换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 最终参考产品
- 基准类型：氮投入（`n_input`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_emission_activity`
- 来源：`ipcc-2019-managed-soils`

###### 石灰和尿素施用产生的二氧化碳（`lime_urea_co2`）

使用石灰或尿素且所选清单方法要求该路径时，记录石灰和尿素施用产生的 CO2。

- 选定流：为所声明方法选择的环境介质特定 carbon dioxide 基本流
- 流属性/单位：Mass / kg CO2
- 数量规则：按产品类型采集石灰和尿素施用量，并使用所声明 IPCC 或经审查区域方法计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 最终参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_emission_activity`
- 来源：`ipcc-2019-managed-soils`

### 过程：农场内清理、干燥、处理与储存（`on_farm_postharvest`）

#### 输入

##### 产品流

###### 进入农场内调理的收获高粱（`incoming_harvested_sorghum`）

记录来自田间种植的内部转移和任何单独采购的籽粒。单独采购的籽粒仍必须作为具有自身上游数据集的可见输入。

- 选定流：高粱，其他 `ff8b6c96-9f97-4952-8832-abfbc4295b65`
- 流属性/单位：Mass / kg
- 数量规则：清理、干燥或储存前实测进入质量、水分和来源批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 最终参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_postharvest_balance`

###### 调理用电力和热能（`postharvest_energy`）

按能源载体分别记录用于清理、输送、干燥、通风和储存的电力、燃料和热。

- 选定流：与前景记录相匹配的能源载体特定 Tiangong 产品流
- 流属性/单位：能量或交付产品属性 / kWh、MJ、kg 或 L
- 数量规则：按作业和能源载体记录计量、发票或设备日志用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 调理后高粱输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_postharvest_balance`
- 来源：`fao-leap-feed-2016`; `icrisat-sorghum-handbook-2020`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 农场门调理后高粱（`farm_gate_sorghum`）

纳入农场内收获后调理时，本行是参考产品。

- 选定流：高粱，其他 `ff8b6c96-9f97-4952-8832-abfbc4295b65`
- 流属性/单位：Mass / kg
- 数量规则：所声明参考水分以及清洁度或等级下恰好 1,000 kg 净输出
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 最终参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 数量范围：参考流合规区间
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1000
  - 上限：1000
  - 单位：kg
  - 基准：所声明参考水分下的最终参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：身份引用（`identity_reference`）

##### 废物流

###### 筛下物、拒收籽粒和收获后废物（`postharvest_waste`）

按去向分别记录移除的杂质、筛下物、变质籽粒、作为废物收集的粉尘和包装废物；可销售共产品仍作为产品输出。

- 选定流：与物料和去向相匹配的废物特定 Tiangong 流
- 流属性/单位：Mass / kg
- 数量规则：按类型、水分和去向实测或通过质量平衡计算输出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 调理后高粱输出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_postharvest_balance`

##### 基本流

###### 干燥过程中移除的水（`drying_water_release`）

根据实测进出籽粒水分平衡计算移除的水；不得把它计为产品损失。

- 选定流：数据集约定要求时选择适当环境介质的水或水蒸气基本流
- 流属性/单位：Mass / kg 水
- 数量规则：保持干物质守恒的进出籽粒水质量差，加上单独测得的水释放量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 调理后高粱输出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_postharvest_balance`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `avoid_allocation_by_subdivision` | 可分离的田块、作业、批次和产品 | 在相关投入和输出可分别计量时，细分田块、收获和收获后记录。 | `fao-leap-feed-2016` |
| `apply_biophysical_causality` | 不可分离的联合生产 | 无法细分时，优先采用能反映投入和排放如何随联合产品变化的、有记录的生物物理因果关系。 | `fao-leap-feed-2016` |
| `fallback_economic_allocation` | 缺乏可辩护生物物理因果关系的不可分离共产品 | 只有在不存在因果基准时才使用具有代表性的经济分配；声明价格来源、地理范围、平均期、水分和质量基准以及敏感性。 | `fao-leap-feed-2016` |
| `residue_status_decision` | 高粱秸秆、茎叶、筛下物和其他残余物 | 分配前，根据实际管理方式和市场功能将每种残余物分类为田间保留生物质、废物或共产品；留在田间的残余物不是零负荷的外售产品。 | `fao-leap-feed-2016`; `ipcc-2019-managed-soils` |
| `allocation_mass_balance` | 被分配的输出集合 | 对水分基准一致的完整输出集合应用一个分配规则，并验证分配份额之和为 1；审查要求时报告未分配结果。 | `fao-leap-feed-2016` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_inputs` | `field_cultivation` | 种子、肥料、改良剂、作物保护、灌溉、燃料、电力和其他田间能源 | 发票、领用日志、施用日志、仪表读数、机械日志 | field_id; operation; date; product_id; formulation; nutrient_or_active_content; quantity; raw_unit; treated_area; irrigation_source; meter_start; meter_end; equipment | 将采购、库存、施用、仪表和机械记录核对到每个所代表田块和作物周期 | kg; kg nutrient; kg active ingredient; m3; L; kWh; MJ; ha | 每次施用或作业 | 完整作物周期，重大时包括完整轮作期 | 数据包代表的全部田块和直接控制作业 | 按田块、产品和作业求和；仅用有记录的因子换算；在解析产量和分配后归一化 | 发票；校准仪表记录；施用日志；设备日志；库存核对 |
| `cp_harvest_outputs` | `field_cultivation` | 收获籽粒、残余物、共产品和田间废物 | 地磅票、产量监测器、水分检测、面积记录、去向日志 | field_id; harvest_date; harvested_area; gross_mass; marketable_mass; moisture; residue_mass; residue_moisture; destination; waste_mass | 核对全部所代表田块的收获质量和面积，并按批次保留水分 | kg; kg dry matter; fraction moisture; ha | 每个收获批次 | 所代表作物周期的完整收获期 | 全部所代表田块和储存转移节点 | 按批次和田块求和；水分换算保持干物质守恒；保留排除量和损失量 | 秤校准；水分方法记录；票据或产量监测导出；去向证据 |
| `cp_emission_activity` | `field_cultivation` | 受管理土壤 N2O、挥发、淋溶或径流以及石灰或尿素 CO2 | 养分施用、残余物记录、土壤和气候数据、方法参数 | N_by_source; application_date; fertilizer_type; organic_N; residue_dry_mass; residue_N_content; lime_type_mass; urea_mass; soil_class; climate_class; leaching_condition; factor_id | 汇总 `cp_field_inputs` 和 `cp_harvest_outputs` 的活动数据；选择一个所声明 IPCC 层级或经审查区域方法，并保留每个因子 | kg N; kg product; kg dry matter; kg C; dimensionless factors | 每个活动事件，每个作物周期汇总一次 | 完整作物周期及方法要求的滞后期或轮作期 | 全部所代表受管理田块 | 每条路径只应用一次方程；在 44/28 换算前保留 N2O-N，防止直接和间接项重叠 | 来源记录；因子表和版本；公式工作簿或可复现计算；审查记录 |
| `cp_postharvest_balance` | `on_farm_postharvest` | 进入籽粒、调理后籽粒、能源、筛下物、废物和水分移除 | 秤票、水分检测、仪表、燃料和热日志、储存记录 | lot_id; input_mass; input_moisture; output_mass; output_moisture; screenings_mass; reject_mass; energy_carrier; energy_amount; storage_days; destination | 对每项纳入作业维持批次级投入产出、水分和能源平衡 | kg; fraction moisture; kWh; MJ; L; day | 每个批次和仪表周期 | 农场门之前全部纳入的调理和储存 | 数据包代表的全部农场内设备和仓储 | 保持干物质守恒；按能源载体和作业汇总；归一化到最终输出 | 校准秤和水分仪；公用事业或燃料记录；批次核对；储存日志 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_mass` | 全部前景清单行 | 归一化数量 = 作物周期数量 × 1,000 kg / 参考水分下分配给高粱的最终质量 | crop-cycle amount; allocated final mass; reference moisture | 每 1,000 kg 参考产品数量 |  |
| `convert_moisture_basis` | 籽粒和生物质质量 | m_at_reference = m_measured × (1 - moisture_measured) / (1 - moisture_reference)；使用质量分数并保留两个水分观测值 | measured wet mass; measured moisture fraction; reference moisture fraction | 所声明参考水分下的质量 |  |
| `calculate_ipcc_managed_soil_emissions` | 受管理土壤氮路径 | 对合成和有机氮、作物残余物氮、适用土壤氮矿化、挥发以及淋溶或径流应用所声明 IPCC 层级或经审查区域方程；用 44/28 将 N2O-N 换算为 N2O | N activity data; residue data; soil and climate class; method factors | 直接和间接 N2O 以及所报告氮路径 | `ipcc-2019-managed-soils` |
| `calculate_lime_urea_co2` | 石灰和尿素施用 | 按石灰材料和尿素质量分别应用所声明 IPCC 或经审查区域方法；不得与上游制造合并 | lime mass and type; urea mass; method factors | 石灰和尿素施用产生的田间 CO2 | `ipcc-2019-managed-soils` |
| `calculate_allocation_shares` | 不可分离共产品 | 从所声明因果或经济基准导出份额，并以每个产品基准除以完整共产品集合之和 | complete co-product quantities; causal parameter or representative prices | 总和为 1 的分配份额 | `fao-leap-feed-2016` |
| `screen_yield_context` | 所报告田间产量 | 仅与官方数据集中相同地理位置、作物定义和时期比较；差异是审查标志，不是替代值或合规失败 | foreground yield; geography; year; official comparator | 有记录的合理性审查 | `faostat-crops-livestock` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和投入 | 产品身份、Tiangong UUID、流类型、分类、属性和单位必须与实际物料或服务匹配；必须披露后备身份。 | UUID 读回以及产品或供应商规格 |
| `dq_primary_foreground` | 直接控制过程 | 在可行范围内，为前景田间和农场内收获后过程使用一次活动数据。 | 来源记录索引和数据采集覆盖声明 |
| `dq_temporal` | 作物和轮作数据 | 覆盖完整作物周期，重大时覆盖完整轮作；单年不具代表性时使用多年数据或披露变异。 | 作物日历、轮作记录、代表年份和变异声明 |
| `dq_geography_technology` | 全部投入和作业 | 代表实际地理位置、灌溉路线、种植实践、设备、能源载体和收获后技术。 | 田块清单、技术说明和上游数据集选择记录 |
| `dq_completeness` | 清单 | 核对边界内全部相关资源、排放、产品、残余物和废物，并记录每项排除。 | 物料和能源平衡、系统图和排除登记 |
| `dq_precision_uncertainty` | 实测和计算数值 | 保留仪器分辨率、抽样方法、变异、假设以及重大数值的不确定性或合理范围。 | 校准、抽样和不确定性记录 |
| `dq_method_traceability` | 计算排放和分配 | 保留方法名称、版本、因子来源、方程、中间值和分配敏感性。 | 可复现计算制品和因子登记 |
| `dq_moisture_balance` | 籽粒和残余物 | 为每次换算、损失或调理保留实测水分和干物质平衡。 | 水分检测和批次级质量平衡记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 最终参考流 | 要求产品流 `ff8b6c96-9f97-4952-8832-abfbc4295b65`、Mass 属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`、kg，并由一个最后纳入的前景过程输出恰好 1,000 kg。 | `unsd-cpc-3-01142` |
| `validate_product_scope` | 产品分类 | 拒绝把种用高粱、甜高粱、纯饲草路线和高粱加工产品作为本 PCR 的参考产品。 | `unsd-cpc-3-01142` |
| `validate_required_qualifiers` | 数据集元数据 | 缺少任何必需参考流限定信息，或收获水分和参考水分不明确时，合规失败。 | `fao-leap-feed-2016`; `icrisat-sorghum-handbook-2020` |
| `validate_process_completeness` | 过程清单 | 必须纳入田间种植和收获；调理或储存发生在农场门之前时必须有收获后记录；外购投入必须有上游链接，并说明排除理由。 | `fao-leap-feed-2016` |
| `validate_mass_moisture_balance` | 田间和收获后输出 | 核对籽粒、残余物、共产品、废物、筛下物和水分移除的干物质；必须调查并披露无法解释的不平衡。 | `icrisat-sorghum-handbook-2020` |
| `validate_allocation` | 共产品系统 | 要求细分或声明分配基准、完整输出集合、份额之和为 1，并在采用经济分配时进行敏感性分析。 | `fao-leap-feed-2016` |
| `validate_emission_method` | 受管理土壤和改良剂排放 | 要求完整活动数据、一个不重叠的已声明方法、明确因子版本、正确的 N 和化学形态换算，以及从 N2O-N 到 N2O 的 44/28 换算。 | `ipcc-2019-managed-soils` |
| `validate_no_double_counting` | 能源和田间排放 | 拒绝产品投入背景数据集、直接燃烧、受管理土壤路径和收获后作业之间的重复计算。 | `fao-leap-feed-2016`; `ipcc-2019-managed-soils` |
| `validate_data_quality` | 前景数据包 | 要求代表性、完整性、一致性、精度或不确定性、方法适宜性、来源覆盖以及每项代理的证据。 | `fao-leap-feed-2016` |
| `validate_screening_values` | QA 范围和统计比较 | 仅把范围和外部产量比较视为 QA 标志；除非经审查的地理特定规则明确规定，否则不得覆盖前景数值或成为合规阈值。 | `faostat-crops-livestock`; `ipcc-2019-managed-soils` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经审查后可作为 secondary_dataset 或 background_dataset 发布的前景农业生产数据包 |
| downstream_use | 构建农场门非种用高粱籽粒及其下游消费系统的 process 和 lifecyclemodel |
| allowed_use | 在所声明地理、时间、技术、水分和分配范围内进行归因型 LCA、供应链建模、热点分析和非比较性报告 |
| excluded_use | 种子生产、甜高粱或饲草高粱、高粱加工产品、缺乏依据的地理或技术转移，以及未满足适用审查要求的公开比较性主张 |
| required_metadata | PCR id 和版本；产品和 Tiangong 身份；地理位置；田块和农场范围；作物年份和轮作；品种或物种；前期土地利用；灌溉路线；面积和产量；水分基准；纳入作业；残余物去向；分配；上游数据集身份；方法和因子版本 |
| required_quality_disclosure | 一次数据覆盖率；时间、地理和技术代表性；排除项和代理；质量和水分核对；不确定性；排放因子层级；分配敏感性；未解决身份和范围缺口 |
| update_trigger | 产品范围、Tiangong 身份、种植或调理路线、地理位置、产量或水分基准、分配、排放方法、证据或前景数据质量发生重大变化 |

## 11. 数据源

| Source id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-01142` | 标准（`standard`） | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, subclass 01142, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索日期 2026-08-07） | 产品范围、纳入的高粱物种以及对种用高粱和甜高粱的排除 |
| `fao-leap-feed-2016` | 官方指南（`official_guidance`） | FAO LEAP Partnership, Environmental performance of animal feeds supply chains: Guidelines for assessment, 2016, https://openknowledge.fao.org/server/api/core/bitstreams/040bf0e7-e652-4eda-807c-37172c403671/content（检索日期 2026-08-07） | 作物生产边界、活动覆盖、前景数据、分配顺序、完整性、不确定性和数据质量规则 |
| `ipcc-2019-managed-soils` | 官方指南（`official_guidance`） | IPCC, 2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf（检索日期 2026-08-07） | 受管理土壤直接和间接 N2O 路径、氮活动数据、作物残余物、挥发、淋溶或径流、石灰和尿素 CO2 以及 EF1 筛查范围 |
| `icrisat-sorghum-handbook-2020` | 手册（`handbook`） | ICRISAT, Handbook on Sorghum Production for North Eastern Nigeria, https://oar.icrisat.org/11531/1/Handbook%20on%20Sorghum%20production%20for%20NE%20printed%20version.pdf（检索日期 2026-08-07） | 从整地到收获、干燥和储存的高粱特定候选作业以及水分和储存背景；不作为通用投入率默认值 |
| `faostat-crops-livestock` | 数据集（`dataset`） | FAO, FAOSTAT Production: Crops and livestock products, https://data.apps.fao.org/catalog/dataset/crop-production-yield-harvested-area-and-processed-global-national-annual-faostat（检索日期 2026-08-07） | 与地理位置和年份匹配的收获面积、产量和单产合理性背景；不替代前景数值，也不作为合规阈值 |
