---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.sugar-beet
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 糖用甜菜

## 1. 范围与适用性

本 PCR 适用于农场门交付、供制糖的新鲜未加工第一年糖用甜菜贮藏根。纳入田间建植、管理生产、田间直接排放、起收、去顶、干式去除过量附着土、分级、损失及已声明残余物去向。排除种子、饲料/食用甜菜、农场门后运输、糖厂清洗、切丝、扩散、汁液净化、制糖、浆粕和糖蜜。每个数据集应表示一致的雨养/灌溉、耕作、收获和整备路线，或透明加权的分层。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.sugar-beet` |
| classification_refs | `CPC:3.0:01801` Sugar beet; mapping relation: exact |
| covered_products | 供制糖的新鲜第一年 `Beta vulgaris` 贮藏根 |
| excluded_products | 种子、饲料/食用甜菜、切片根、汁液、糖、浆粕、糖蜜及糖厂整备产品 |
| representative_product | 去顶、基本无松散土且在农场门验收的新鲜根 |
| production_route | 管理年度田间生产→起收→农场初级整备→分级 |
| market_state | 新鲜未加工根；未经切丝或扩散 |

管理生物生产是父活动。灌溉、耕作和收获技术是有证据的差异；互斥路线记录必须分层。

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 农场门合格新鲜未加工糖用甜菜根 |
| How much | 1,000 kg fresh mass |
| How well | 已去顶；排除松散土/杂物；声明合同规格和实测含糖量 |
| How long or cycle | 一个年度作物周期及交付期 |
| reference_flow_link | accepted_sugar_beet_roots |

| Field | Value |
| --- | --- |
| Reference amount | 1000 |
| Reference product flow | Sugar beet `b48c1ece-b700-4491-86bb-ff46c0a4768b` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 品种；作物年；地理/地块；雨养或灌溉；耕作；收获和整备技术；鲜质量和皮重基准；含糖量/方法；等级规格；交付期 |

## 4. 计量与单位规则
| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| MU-01 | roots | Mass | kg | 使用校准秤；披露皮重及残余土/异物修正。 |
| MU-02 | area records | Mass, volume, energy | per ha | 使用同一地块/路线层的合格产量归一化。 |
| MU-03 | 各项养分产品 | Product mass and composition | kg product; kg nutrient/ha | 每种实际产品的质量、适用时的干物质、养分分析和石灰当量分别记入原子卡；养分总量另行计算。 |
| MU-04 | irrigation | Volume or mass | m3 or kg | 计量输水；降雨是背景信息而非产品投入。 |
| MU-05 | sugar quality | Mass fraction | % fresh mass | 声明取样和实验室方法；糖仅限定根品质而非参考产品。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 作物周期开始时已准备的地块和播种种子 |
| starting_condition_role | 前景年度作物周期起点 |
| product_classification_scope | `CPC:3.0:01801` fresh unprocessed roots |
| recursive_input_rule | 任何同类别外购根须单独追踪，且不得再次计为田间产出。 |
| upstream_dataset_requirement | 种子、能源、灌溉、植保及每种实际养分产品均需上游数据集。 |
| disclosure | 地理、作物年、地块面积、品种、路线、投入、产量、品质、损失、残余物和交接。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| SB-01 | full route | 保持生产、收获、整备和分级可独立核对。 | `fao-sugar-beet-white-sugar-2009` |
| SB-02 | exclusion | 止于农场门；排除所有糖厂制糖操作。 | `us-epa-sugarbeet-processing-ap42` |
| SB-03 | harvest | 区分田间、起收、整备、合格、降级、拒收、叶冠及土壤/杂物状态。 | `fao-land-management-root-crops` |
| SB-04 | routes | 互斥路线差异须分开记录并透明加权。 | `fao-crop-yield-water-2012` |
| SB-05 | residues | 留田叶冠是残余物；收集叶冠和销售降级根须有交接及分配。 | `mass-balance-identity` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| field_production | 管理田间生产 | required | every route | 按地块/作物周期的单一期间批量生产；无储存；无替换 | field, crop cycle, operating period or delivery batch |
| harvest_lifting | 根起收与收获 | required | every route | 从土壤独立移出并核算收获状态 | field, crop cycle, operating period or delivery batch |
| farm_conditioning | 农场初级整备 | required | every route | 替代技术路线差异：去顶完成及干式去除过量土壤/杂物 | field, crop cycle, operating period or delivery batch |
| grading_handoff | 分级与农场门交接 | required | every route | 合格、降级和拒收去向状态 | field, crop cycle, operating period or delivery batch |

这是单一期间、无储存、无替换的批量生产路线。生产按地块与作物周期、收获/整备作业期及交付批次索引；共享设备负荷只归属一次。

### 过程：管理田间生产 (`field_production`)

#### 输入
##### 产品流

###### 糖用甜菜种子 (`planting_seed`)

该流在声明过程边界处定量记录并与相邻状态核对。

- 选定流: 糖用甜菜种子
- 流属性/单位：Mass / kg
- 数量规则: 发出种子减去有记录的退回量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每公顷播种面积.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_field_inputs`
- 来源:
- 数量范围: 暂定种子质量筛查
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0.5
  - 上限: 10
  - 单位: kg/ha
  - 基准: 每公顷播种面积
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:

###### 尿素肥料投入（`agricultural_nutrient_supply`）

仅当声明的过程实际使用尿素肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：尿素肥料
- 数量规则：记录该过程和期间实际使用的尿素肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg 产品
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每公顷处理面积.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_field_inputs`

###### 磷酸一铵肥料投入（`agricultural_nutrient_supply_monoammonium_phosphate`）

仅当声明的过程实际使用磷酸一铵肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：磷酸一铵肥料
- 数量规则：记录该过程和期间实际使用的磷酸一铵肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg 产品
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每公顷处理面积.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_field_inputs`

###### 氯化钾肥料投入（`agricultural_nutrient_supply_potassium_chloride`）

仅当声明的过程实际使用氯化钾肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：氯化钾肥料
- 数量规则：记录该过程和期间实际使用的氯化钾肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg 产品
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每公顷处理面积.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_field_inputs`

###### 施用的牛粪肥投入（`agricultural_nutrient_supply_cattle_manure`）

仅当声明的过程实际使用施用的牛粪肥时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：施用的牛粪肥
- 数量规则：记录该过程和期间实际使用的施用的牛粪肥数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg 产品
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每公顷处理面积.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_field_inputs`

###### 农业石灰石投入（`agricultural_nutrient_supply_agricultural_limestone`）

仅当声明的过程实际使用农业石灰石时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：农业石灰石
- 数量规则：记录该过程和期间实际使用的农业石灰石数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg 产品
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每公顷处理面积.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_field_inputs`

###### 输送至田间的灌溉水 (`irrigation_water`)

该流在声明过程边界处定量记录并与相邻状态核对。

- 选定流: 输送至田间的灌溉水
- 流属性/单位：Mass / kg
- 数量规则: 计量体积或核验泵流量×时间；排除降雨
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每作物周期每公顷.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_irrigation`
- 来源: `fao-crop-yield-water-2012`

作物保护必需记录：完成前景数据包前，逐项列明实际施用的每一种制剂，保留商品名、有效成分、盐或化学形态、浓度、必要时的密度、施用量、日期和处理面积。每项交换选用一个物理上明确的产品身份；有效成分释放按物质及接收区室另行计算。缺少配方身份属于完整性缺口，不得用通用农药、虚构示例或假定为零替代。

保留实测 m3 和水密度，按 cr_02 转为 kg 一次后再进行最终归一化。

灌溉须区分作物蒸散需求、净灌溉量与总供水／取水量，核对有效降雨、土壤水库存变化、毛管补给、施用效率及实际供水边界，采用场址计量或有记录的水平衡。通用作物需水表不能确立通用灌溉上限。

###### 中压电力投入（`field_energy`）

仅当本过程实际供应中压电力时记录这一单独交换。其他能源、水源或材料须分别建立原子清单行，身份经核实或明确标记待核实。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：计量本过程在声明期间实际使用的中压电力数量；只有实际路线不使用时才记为不适用。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每作物周期每公顷.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_energy`

###### 柴油投入（`field_energy_diesel`）

仅当本过程实际供应柴油时记录这一单独交换。其他能源、水源或材料须分别建立原子清单行，身份经核实或明确标记待核实。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：计量本过程在声明期间实际使用的柴油数量；只有实际路线不使用时才记为不适用。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每作物周期每公顷.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_energy`

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 成熟田间糖用甜菜根 (`standing_mature_roots`)

该独立产品产出在声明过程边界处定量记录，拥有明确交接，并与相邻状态核对。

- 选定流: 成熟田间糖用甜菜根
- 流属性/单位：Mass / kg
- 数量规则: 起收根加抽样的起收前及未收获损失；排除土壤和叶冠
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每公顷.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_field_yield`
- 来源: `fao-sugar-beet-white-sugar-2009`, `uk-defra-sugar-beet-2024`
- 数量范围: 鲜根产量 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 30000
  - 上限: 80000
  - 单位: kg/ha
  - 基准: 每公顷
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 外部来源 (`external_source`)
  - 来源: `fao-sugar-beet-white-sugar-2009`, `uk-defra-sugar-beet-2024`

##### 废物流

###### 未采收糖用甜菜根（`field_root_loss`）

该流在声明过程边界处定量记录并与相邻状态核对。

- 选定流: 未采收糖用甜菜根
- 流属性/单位: 质量 / kg
- 数量规则: 代表性田间抽样外推至地块
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每 kg 成熟田间根.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_harvest_loss`
- 来源: `usda-ers-sugarbeet-harvest-loss-2019`

质量损失比例由同一地块的代表性根部取样和匹配的站立根质量确定。全国未收获面积统计仅作背景，不能作为 kg/kg 根部损失因子或通用界限。报告不确定性并调查损失，不施加固定阈值。

##### 基本流

###### 排放至空气的一氧化二氮 (`direct_n2o_air`)

该流在声明过程边界处定量记录并与相邻状态核对。

- 选定流: 排放至空气的一氧化二氮
- 流属性/单位：Mass / kg N2O
- 数量规则: 对采集的氮投入和残余氮应用声明的 IPCC 层级
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每作物周期每公顷.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 方法公式 (`method_formula`)
- 来源: `ipcc-2019-managed-soils`
- 数量范围: 管理土壤 N2O 筛查
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10
  - 单位: kg N2O/ha
  - 基准: 每作物周期每公顷
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:

报告 N2O 化合物质量；方法给出 N2O-N 时乘以 44/28 一次，已是 N2O 质量时不得再次转换。

### 过程：根起收与收获 (`harvest_lifting`)

#### 输入
##### 产品流

###### 转入收获的成熟田间根 (`harvest_root_input`)

该流在声明过程边界处定量记录并与相邻状态核对。

- 选定流: 转入收获的成熟田间根
- 流属性/单位：Mass / kg
- 数量规则: 等于同地块同周期的 standing_mature_roots
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每 kg 田间根.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 方法公式 (`method_formula`)
- 来源: `mass-balance-identity`
- 数量范围: 内部转移恒等
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1
  - 上限: 1
  - 单位: kg/kg standing roots
  - 基准: 每 kg 田间根
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `mass-balance-identity`

###### 中压电力投入（`harvest_energy`）

仅当本过程实际供应中压电力时记录这一单独交换。其他能源、水源或材料须分别建立原子清单行，身份经核实或明确标记待核实。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：计量本过程在声明期间实际使用的中压电力数量；只有实际路线不使用时才记为不适用。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 技术特定 (`technology_specific`)
原始活动或阶段基准：每公顷收获面积.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_energy`

###### 柴油投入（`harvest_energy_diesel`）

仅当本过程实际供应柴油时记录这一单独交换。其他能源、水源或材料须分别建立原子清单行，身份经核实或明确标记待核实。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：计量本过程在声明期间实际使用的柴油数量；只有实际路线不使用时才记为不适用。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 技术特定 (`technology_specific`)
原始活动或阶段基准：每公顷收获面积.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_energy`

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 起收的糖用甜菜原料根 (`lifted_raw_roots`)

该独立产品产出在声明过程边界处定量记录，拥有明确交接，并与相邻状态核对。

- 选定流: 起收的糖用甜菜原料根
- 流属性/单位：Mass / kg
- 数量规则: 校准载荷质量扣除皮重和单独计量的外运土壤/杂物
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每公顷收获面积.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_harvest_loads`
- 来源: `fao-sugar-beet-white-sugar-2009`, `uk-defra-sugar-beet-2024`
- 数量范围: 起收根产量筛查
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 28000
  - 上限: 80000
  - 单位: kg/ha
  - 基准: 每公顷收获面积
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 外部来源 (`external_source`)
  - 来源: `fao-sugar-beet-white-sugar-2009`, `uk-defra-sugar-beet-2024`

###### 有意收集的甜菜叶冠 (`collected_beet_tops`)

该独立产品产出在声明过程边界处定量记录，拥有明确交接，并与相邻状态核对。

- 选定流: 有意收集的甜菜叶冠
- 流属性/单位：Mass / kg
- 数量规则: 计量收集载荷；留田时为零
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 路线特定 (`route_specific`)
原始活动或阶段基准：每公顷收获面积.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_residues`
- 来源:
- 数量范围: 暂定收集叶冠筛查
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 30000
  - 单位: kg fresh tops/ha
  - 基准: 每公顷收获面积
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:

##### 废物流

###### 起挖拒收糖用甜菜根（`harvest_root_reject`）

该流在声明过程边界处定量记录并与相邻状态核对。

- 选定流: 起挖拒收糖用甜菜根
- 流属性/单位: 质量 / kg
- 数量规则: 田间抽样或载荷平衡差并记录去向
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每 kg 收获根投入.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_harvest_loss`
- 来源: `usda-ers-sugarbeet-harvest-loss-2019`
- 数量范围: 收获拒收/损失筛查
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 0.1
  - 单位: kg/kg harvest input
  - 基准: 每 kg 收获根投入
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:

##### 基本流

### 过程：农场初级整备 (`farm_conditioning`)

#### 输入
##### 产品流

###### 转入初级整备的起收根 (`conditioning_root_input`)

该流在声明过程边界处定量记录并与相邻状态核对。

- 选定流: 转入初级整备的起收根
- 流属性/单位：Mass / kg
- 数量规则: 等于代表载荷的 lifted_raw_roots
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每 kg 起收根.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 方法公式 (`method_formula`)
- 来源: `mass-balance-identity`
- 数量范围: 内部转移恒等
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1
  - 上限: 1
  - 单位: kg/kg lifted roots
  - 基准: 每 kg 起收根
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `mass-balance-identity`

###### 中压电力（`conditioning_energy`）

仅在本过程实际使用中压电力时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：每1000 kg起收根。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：计量本过程和期间实际使用的中压电力，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

###### 柴油（`conditioning_energy_diesel`）

仅在本过程实际使用柴油时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：每1000 kg起收根。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：计量本过程和期间实际使用的柴油，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 可供分级的农场整备根 (`conditioned_roots`)

该独立产品产出在声明过程边界处定量记录，拥有明确交接，并与相邻状态核对。

- 选定流: 可供分级的农场整备根
- 流属性/单位：Mass / kg
- 数量规则：按与lifted_raw_roots相同的净根组分基准计量合格整理根。核对：进入根组分+期初根库存+有据根吸水=合格整理根+拒收根组分+独立有据根损失+根失水+期末根库存。已从进入净根量排除的泥土、茎叶或杂质不得再扣一次。实际随载泥土、茎叶和杂质从毛载接收到各自移出另建组分账，不作为根产量损失。留存/返工转移配对，未解释差额须调查而非直接记为废物。匹配总量按最终合格根归一化一次。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每1000 kg起收根.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_conditioning_balance`
- 来源: `mass-balance-identity`
- 数量范围: 整备质量得率筛查
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 700
  - 上限: 1000
  - 单位: kg/1000 kg lifted roots
  - 基准: 每1000 kg起收根
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:

##### 废物流

###### 分离的有机杂物废弃物（`conditioning_rejects`）

本条件卡仅代表声明过程中一种实际材料、产品或废物流。依据路线记录核实其身份、物理状态、期间和去向；其他不同物流须分别建卡。本模板不推定必然使用或产生。

- 选定流：分离的有机杂物废弃物；具体路线身份待核实
- 流属性 / 单位: 质量 / kg 材料
- 数量规则: 按本过程及期间单独计量或计算这一种已确认物流，记录其独立单位和去向；不得合并其他产品或废物状态。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每1000 kg起收根.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning_balance`
- 来源:

###### 剔除的根茎废弃物（`conditioning_rejects_rejected_roots`）

本条件卡仅代表声明过程中一种实际材料、产品或废物流。依据路线记录核实其身份、物理状态、期间和去向；其他不同物流须分别建卡。本模板不推定必然使用或产生。

- 选定流：剔除的根茎废弃物；具体路线身份待核实
- 流属性 / 单位: 质量 / kg 根茎
- 数量规则: 按本过程及期间单独计量或计算这一种已确认物流，记录其独立单位和去向；不得合并其他产品或废物状态。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每1000 kg起收根.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning_balance`
- 来源:

##### 基本流

### 过程：分级与农场门交接 (`grading_handoff`)

#### 输入
##### 产品流

###### 转入分级的整备根 (`grading_root_input`)

该流在声明过程边界处定量记录并与相邻状态核对。

- 选定流: 转入分级的整备根
- 流属性/单位：Mass / kg
- 数量规则: 等于分配至交付批次的 conditioned_roots
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每 kg 整备根.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 方法公式 (`method_formula`)
- 来源: `mass-balance-identity`
- 数量范围: 内部转移恒等
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1
  - 上限: 1
  - 单位: kg/kg conditioned roots
  - 基准: 每 kg 整备根
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `mass-balance-identity`

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 糖用甜菜 `b48c1ece-b700-4491-86bb-ff46c0a4768b` (`accepted_sugar_beet_roots`)

该独立产品产出在声明过程边界处定量记录，拥有明确交接，并与相邻状态核对。

- 选定流: 糖用甜菜 `b48c1ece-b700-4491-86bb-ff46c0a4768b`
- 流属性/单位：质量 / kg

原参考状态单位说明：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

原始产出计量与核对要求：扣除皮重和异物后的校准合格交付质量

- 数量规则：1000 千克
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每1000 kg参考产品.

- 归一化基准：每声明的参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_grading`
- 来源:
- 数量范围: 参考流恒等
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1000
  - 上限: 1000
  - 单位: kg
  - 基准: 每1000 kg参考产品
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `mass-balance-identity`

###### 送往声明用途的降级根 (`downgraded_roots`)

该独立产品产出在声明过程边界处定量记录，拥有明确交接，并与相邻状态核对。

- 选定流: 送往声明用途的降级根
- 流属性/单位：Mass / kg
- 数量规则: 按批次和去向计量降级质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每 kg 分级投入.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_grading`
- 来源:
- 数量范围: 暂定降级比例筛查
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 0.2
  - 单位: kg/kg grading input
  - 基准: 每 kg 分级投入
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:

##### 废物流

###### 分级拒收根 (`grading_rejects`)

该流在声明过程边界处定量记录并与相邻状态核对。

- 选定流: 分级拒收根
- 流属性/单位：Mass / kg
- 数量规则: 计量拒收质量并关联回收、还田、处理或处置
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每 kg 分级投入.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_grading`
- 来源:
- 数量范围: 暂定分级拒收筛查
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 0.1
  - 单位: kg/kg grading input
  - 基准: 每 kg 分级投入
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:

##### 基本流

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| AL-01 | all nodes | 优先细分并直接归属地块、机器作业期和批次记录，再对共享负荷分配。 | `ghg-protocol-product-standard-2011` |
| AL-02 | roots and tops | 留田叶冠不是销售共产品。有意销售的叶冠先采用细分或有依据的物理关系；只有该关系不可用时，才将经济分配作为后备并说明原因。 | `ghg-protocol-product-standard-2011` |
| AL-03 | grade states | 分别核算可直接计量的等级特定作业；其余共享负荷采用有依据的物理关系，无法适用时采用有记录的同门点市场价值。保留价格、期间、全部共产品和敏感性，分配份额合计为一。废物不接受产品分配，但其处理负荷仍须纳入。 | `ghg-protocol-product-standard-2011` |
| AL-04 | rejects | 返工物料保留累积负荷且仅在最终交接计数。 | `mass-balance-identity` |

## 8. 前景数据采集、计算与质量规则

清单完整性：具名条件卡是单项交换示例，不是穷尽配方，也不要求使用这些产品。完成前景数据包前，逐项列出所有实际种植材料、养分产品、作物保护制剂、资产材料、作业服务、载能体、包装材料、废物流及适用的基本物质，使用明确的物理身份、状态、原始属性/单位、来源或接收区室及实测或按方法计算的数量。身份或数量缺失属于完整性缺口，不得假定为零。保留实际批次和阶段基准；不得将中间转移累加为额外最终产出，也不得重复计入采购服务已包含的负荷。

先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_field_inputs | field_production | seed, nutrient, protection | invoices/logs | identity; mass; composition; area; date | issue-return/application reconciliation；原始汇总与分配：sum by product and field | kg; ha | event | crop cycle | field | 每声明的参考流 | invoices, composition, logs |
| cp_irrigation | field_production | water | meter/pump log | meter; flow; duration; area | meter or flow×duration；原始汇总与分配：sum events | m3; kg | event | season | field/source | 每声明的参考流 | calibration/pump test |
| cp_energy | all operating nodes | energy | meter/fuel/machine log | carrier; quantity; period; field/load | direct meter or documented allocation；原始汇总与分配：assign once | L; kWh; MJ | period | full cycle | machine/site | 每声明的参考流 | meter and invoice reconciliation |
| cp_field_yield | field_production | roots | load and survey | lifted mass; loss sample; area | calibrated loads plus sampling；原始汇总与分配：lifted + scaled loss | kg; ha | field | harvest | field | 每声明的参考流 | scale and sampling plan |
| cp_harvest_loss | field_production; harvest_lifting | loss | survey/balance | mass; area; damage; destination | pre/post harvest sampling；原始汇总与分配：scale and reconcile | kg; ha | field | harvest | field | 每声明的参考流 | sample evidence |
| cp_harvest_loads | harvest_lifting | lifted roots | load tickets | gross; tare; field; date; soil correction ; 毛载及皮重；进入净根组分；分开的随载土/茎叶/杂质；每项根和非根移出；水分；期初期末库存；配对返工；最终合格根数量；差额不确定性| calibrated weighing；原始汇总与分配：corrected sum | kg | load | campaign | field/load | 每声明的参考流 | scale certificate |
| cp_residues | harvest_lifting | tops | load/destination | mass; basis; destination | calibrated weighing；原始汇总与分配：sum hand-offs | kg | load | campaign | field/destination | 每声明的参考流 | ticket/receiver |
| cp_conditioning_balance | farm_conditioning | roots/rejects | batch record | input; output; rejects; destination ; 毛载及皮重；进入净根组分；分开的随载土/茎叶/杂质；每项根和非根移出；水分；期初期末库存；配对返工；最终合格根数量；差额不确定性| calibrated mass balance；原始汇总与分配：reconcile states | kg | batch | campaign | site/field | 每声明的参考流 | scales and batch sheet |
| cp_grading | grading_handoff | grades | delivery record | input; accepted; downgraded; reject; sugar; tare | scale and receiving test；原始汇总与分配：reconcile grades | kg; % | batch | delivery | batch | 每声明的参考流 | scale, lab, receiver |
| `cp_phase1_environment_coverage` | field_production | 按实际节点的管理环境覆盖 | 场址活动方法台账 | 场址及实际管理节点；面积；有日期占用区间；共同使用者；建植/未产期历史；实际前后土地类别及转化日期/面积；碳核算覆盖；上游土地覆盖 | 按实际负责生产节点及匹配批次/期间采集原始记录，保留来源、方法适用性和不确定性。与现有协议及供应覆盖核对，不新增重复事件；不适用须明示有据，缺少证据属于缺口。 | 适用的原生活动单位、kg N或物质、面积/时间 | 事件及年度/批次核对 | 匹配生产/队列期间 | 全部实际管理生产节点 | 执行适用覆盖核算后最终归一化一次 | 原始记录、方法工作表及适用性证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| CR-01 | normalization | field amount / same-field accepted mass × 1000 kg | input/emission; accepted mass | per reference flow | `mass-balance-identity` |
| CR-02 | water | metered m3 × density; rainfall excluded | meter/flow; density | kg irrigation | `fao-crop-yield-water-2012` |
| CR-03 | root balance | 站立净根组分=已起收净根组分+独立有据田间根损失；后续各节点按同一根组分基准核对期初期末库存、实际根水分变化和互斥根去向。毛载泥土、茎叶和杂质单独平衡，不再从净根重复扣减。调查差额，按匹配最终产出归一化一次。 | linked mass records | reconciled states | `mass-balance-identity` |
| CR-04 | N2O | declared IPCC tier applied to collected N inputs | N records; factors | kg N2O | `ipcc-2019-managed-soils` |
| CR-05 | route aggregation | area-weight area intensities and accepted-mass-weight reference intensities | stratum records | production mix | `mass-balance-identity` |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | 最终基本交换使用已识别物质的质量和一个实际接收环境，养分／活动台账另存：该物种的 N2O-N × 44/28 为 N2O，NH3-N × 17/14 为 NH3，硝酸盐氮 × 62/14 为硝酸盐，磷酸盐磷 × 95/31 为磷酸盐。若选定流为元素磷，则报告 kg P，仅在物种口径有据时将磷酸盐质量乘 31/95。只有方法输出按元素计时才换算一次，实测化合物质量不得再换算。总养分损失不得无据归于单一物种，土壤残余／留存养分不是排放。保留直接／间接路径台账，不重复所选方法或上游清单已经包含的路径。因子不确定性范围只按其声明基准检查因子，不是最终化合物数量或场址排放的允许界限。用合格参考数量和匹配实测产出，将可归属化合物质量归一化一次。活动量、身份或接收环境未知时保留证据缺口，不得宣称完整。 | `cp_field_inputs`; 物种特定活动量台账、方法路径和因子基准、匹配合格产出 | 按身份区分的交换和对账活动记录 |  |

### 环境覆盖计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_managed_land_coverage` | 实际管理生产节点 | 逐实际自主管理生产场址采集占用面积及有日期的占用区间，包括应归属的建植/未产期与生产期。占用量为面积乘实际时长，明确换为所选面积时间单位（1 ha=10,000 m2，时间按年）；只有每作物周期公顷数而无时长不能得到面积时间。建立、管理区间重叠时划分区间或取并集，同一面积时间只计一次，实际共同使用者份额合计为一。土地转化按声明土地利用方法，另记实际前/后土地类别、事件面积和日期；转化使用面积单位，不能与占用量相加。种植、持续占用或前土地资料缺失不能证明发生转化，也不能证明零转化。适用时保留历史事件归属及碳库/排放方法覆盖，不编造转化或通用固碳信用。分别建立兼容基本流身份，采用已核实UUID或明确未决身份，归属一次后按匹配最终参考产出归一化。外购已完成的生物投入承接兼容上游土地覆盖一次，不在本地重复。适用土地身份、面积、时长或前状态证据缺失属于完整性缺口；有据无转化可记录为不适用。 | cp_phase1_environment_coverage | 按匹配最终参考量的应归属原生环境数量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| DQ-01 | traceability | 关联地块、载荷、批次及交付标识。 | registers and tickets |
| DQ-02 | completeness | 覆盖完整周期并核对所有根/残余物状态。 | completeness and balance report |
| DQ-03 | measurement | 使用校准仪器或披露方法和不确定性。 | calibration and workbook |
| DQ-04 | route | 加权前分开重大路线差异。 | route register |
| DQ-05 | range maturity | 在发布关键用途前以经审查证据替换推理筛查范围。 | review record |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| VR-01 | reference | 核验 UUID、1000 kg 合格根、限定信息和排除项。 | `mass-balance-identity` |
| VR-02 | boundary | 拒绝把糖厂切丝、扩散、制糖、浆粕或糖蜜纳入农场系统。 | `us-epa-sugarbeet-processing-ap42` |
| VR-03 | nutrients | 每种实际养分产品只记录一次，保留其配方和养分基准；不得将非肥料原料误作农业肥料。 |  |
| VR-04 | routes | 核验父活动、有证据差异、分层及加权。 | `fao-crop-yield-water-2012` |
| VR-05 | periods | 每条记录归于一个地块/时期/载荷/批次并仅计一次。 | `mass-balance-identity` |
| VR-06 | outputs | 核验每项交接、残余物/废物路线及分配决定。 | `mass-balance-identity` |
| VR-07 | rejects | 拒收质量有去向且绝不出现在合格产出中。 | `mass-balance-identity` |
| VR-08 | ranges | 调查超范围数值；范围不替代前景记录。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` or `background_dataset` |
| downstream_use | 新鲜糖用甜菜农场供应及追加农场门后运输/糖厂加工的模型 |
| allowed_use | 声明的地区、作物年和路线份额 |
| excluded_use | 种子、饲料/食用甜菜、糖厂门、糖、浆粕或糖蜜 |
| required_metadata | 参考限定、路线、产量、品质、损失/残余物去向、分配和证据 |
| required_quality_disclosure | 覆盖度、校准、估算、加权、质量平衡差及数据缺口 |
| update_trigger | 地区、路线、投入、产量/品质基准、分配或代表期发生重大变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-crop-yield-water-2012` | official_guidance | FAO, *Crop yield response to water* (2012), https://www.fao.org/4/i2800e/i2800e.pdf | water and route |
| `fao-sugar-beet-white-sugar-2009` | official_guidance | FAO, *Sugar beet: white sugar* (2009), https://www.fao.org/fileadmin/user_upload/tci/docs/AH1-%28eng%29Sugar%20beet%20white%20sugar.pdf | identity, route, yield |
| `fao-land-management-root-crops` | official_guidance | FAO land-management/root-harvest guidance, https://www.fao.org/4/x5648e/x5648e0f.htm | harvest, soil, loss |
| `us-epa-sugarbeet-processing-ap42` | official_guidance | US EPA AP-42 9.10.1.2, https://www.epa.gov/sites/default/files/2020-10/documents/c9s10-1b.pdf | factory exclusion |
| `usda-ers-sugarbeet-harvest-loss-2019` | dataset | USDA ERS sugarbeet harvest (2019), https://www.ers.usda.gov/data-products/chart-gallery/95396 | loss context |
| `uk-defra-sugar-beet-2024` | dataset | UK Defra, Agriculture in the UK 2024, https://www.gov.uk/government/statistics/agriculture-in-the-united-kingdom-2024/chapter-7-crops | yield/sugar context |
| `uk-nvz-nitrogen-2026` | official_guidance | UK nitrogen fertiliser guidance, https://www.gov.uk/guidance/using-nitrogen-fertilisers-in-nitrate-vulnerable-zones | N check |
| `ipcc-2019-managed-soils` | method_factor | IPCC 2019 Refinement, Volume 4 Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html | managed-soil N2O |
| `mass-balance-identity` | method_factor | Conservation-of-mass identity applied to linked foreground records | transfers and balance; not allocation-method selection |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), chapter 9, pp. 63–66; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 分配层级与同门点市场价值；不提供场址分配系数 |
