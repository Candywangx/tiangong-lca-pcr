---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.unmanufactured-tobacco
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 未加工烟草

## 1. 范围与适用性

本 PCR 覆盖在田间/农场门交付的采收青烟叶，或经声明的晾制、火管烘制、烟道烘制或晒制路线并完成分级包装后交付的未加工调制烟叶。一个数据集只能选择一种终端市场状态和门点。卷烟、雪茄、吸用混合物、切丝、均质或再造烟草、尼古丁提取及其他烟草或尼古丁制成品均不在范围内。

## 2. 产品类别标识

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.unmanufactured-tobacco |
| classification_refs | CPC 3.0: 01970 Unmanufactured tobacco; mapping relation: exact |
| covered_products | fresh harvested tobacco leaf; air-, fire-, flue-, or sun-cured leaf remaining unmanufactured |
| excluded_products | manufactured tobacco and nicotine products, including cut, blended, reconstituted, extracted, smoking, oral, and heated products |
| representative_product | 处于一种已声明青叶或调制状态的烟叶 |
| production_route | managed cultivation and harvest, followed conditionally by exactly one curing route and grading/packing |
| market_state | green leaf at field/farm gate or cured graded leaf at curing/farm hand-off; state, curing method, moisture, grade, variety, crop year, geography, and package form declared |

青烟叶与调制烟叶路线可同属本类别，但在单个数据集中必须作为互斥的终端参考。晾制、火管烘制、烟道烘制和晒制是替代技术，不得默认同时发生。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 所选终端门点的未加工烟叶 |
| How much | 1,000 kg 接收状态烟叶 |
| How well | 已声明的青叶或调制状态、适用时的调制方法、水分、等级、品种、产地、作物年份和验收规格 |
| How long or cycle | 一个作物周期；调制烟叶还包括匹配的调制和分级批次 |
| reference_flow_link | reference_product_at_declared_handoff |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1000 |
| Reference product flow | 未加工烟草，生产混合，农场门，鲜叶未加工 仅用于青烟叶；调制烟叶标识未解析 |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 终端烟叶状态；调制方法或不适用；品种/市场类别；地理；作物年份；水分基准；等级；包装形式；门点；纳入的操作 |

固定的鲜叶 UUID 不得用于标识调制烟叶。

每份前景数据包须声明实际路线、终端产品状态和交接门，保留原始称量、质量平衡及批次追溯记录。以该门的唯一交接参考输出归一化，前序工序采用实测转移数量。

唯一参考输出为 `reference_product_at_declared_handoff`，由下列实际路线在声明交接门的产品承接。原路线输出编号用于追溯实际来源和物理状态，不再分别固定为参考数量。

## 4. 计量与单位规则
| rule_id | 适用于 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass_as_received` | terminal leaf | Mass | kg | 报告接收态质量及实测含水率，保留含水率基准以比较干物质。 |
| `area_to_reference_conversion` | field flows | activity-specific property | activity-specific unit | 先将同周期田间总量归一化至收获绿叶，再通过匹配调制及分级平衡转换为调制叶。 |
| `nutrient_content_basis` | nutrient inputs | nutrient mass | kg N, kg P2O5, kg K2O | Preserve product mass, formulation, assay, and elemental/oxide basis separately. |
| `curing_energy_basis` | curing energy | energy or carrier mass | MJ, kWh, kg, m3 | 保留载能体及实测数量，记录每项交付能源换算。 |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | prepared field or transplant bed at crop-cycle start, with planting material and purchased inputs crossing the foreground boundary |
| starting_condition_role | start of managed tobacco leaf production |
| product_classification_scope | fresh and cured unmanufactured tobacco leaf corresponding to CPC 01970 |
| recursive_input_rule | tobacco seed/seedlings link to distinct propagation datasets and shall not recurse to this harvested-leaf PCR |
| upstream_dataset_requirement | compatible datasets for planting material, nutrients, crop protection, irrigation, fuels, electricity, curing energy, and packaging |
| disclosure | variety; nursery boundary; crop dates; geography; area; irrigation; yield; residue fate; terminal state/gate; curing method/fuel; barn; batches; moisture; grade; rejects; packaging; allocation |

### 边界规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | all routes | Include nursery or purchased transplant input, field preparation, transplanting, management, harvest, and direct field emissions through green-leaf hand-off. | `who-tobacco-environment-2017` |
| `boundary_curing_route` | cured route | Include exactly the declared air, fire, flue, or sun curing route, barn/structure service, energy, drying loss, combustion emissions, handling, and conditioning. | `who-tobacco-environment-2017` |
| `boundary_grading_packing` | cured route | Include pre-gate grading and packing; distinguish accepted grades, downgraded useful leaf, rework, rejects, and waste. | `who-tobacco-environment-2017` |
| `boundary_manufacturing_exclusion` | all routes | Stop before product manufacture, extraction, cutting, blending, reconstitution, distribution, retail, and use. |  |
| `boundary_direct_emissions` | soil and curing combustion | Include managed-soil and foreground combustion emissions from the same activity records used for nutrients and fuels. | `ipcc-2019-managed-soils`; `emep-eea-2023-guidebook`; `ipcc-2006-stationary-combustion` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | 作用 | 定量参照 |
| --- | --- | --- | --- | --- | --- |
| `tobacco_field_production` | Tobacco field production and harvest | required | always | managed biological production and separate leaf harvest | hectare and harvested green-leaf mass for 一个作物周期 |
| `tobacco_leaf_curing` | Tobacco leaf curing | conditional | terminal product is cured leaf | stabilize leaf by one declared curing technology | incoming green leaf and accepted cured leaf per batch |
| `cured_leaf_grading_packing` | Cured-leaf grading and packing | conditional | cured leaf is graded, reworked, or packed before hand-off | grade and present cured leaf | incoming and accepted packed-leaf mass |
| declared_reference_handoff | 声明交接门的产品计量 | required |  | foreground | reference_product_at_declared_handoff |

### 过程：烟草田间生产与采收 (`tobacco_field_production`)

#### 输入
##### 产品流

###### 尿素肥料投入（`tobacco_field_agricultural_nutrient_inputs`）

仅当声明的过程实际使用尿素肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：尿素肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的尿素肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
原始活动或阶段基准：每公顷并换算至 1,000 kg 终端烟叶.

- 归一化基准：每声明的参考流
- 基准类型： 作物周期（`crop_cycle`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_field_records`

###### 磷酸一铵肥料投入（`tobacco_field_agricultural_nutrient_inputs_monoammonium_phosphate`）

仅当声明的过程实际使用磷酸一铵肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：磷酸一铵肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的磷酸一铵肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
原始活动或阶段基准：每公顷并换算至 1,000 kg 终端烟叶.

- 归一化基准：每声明的参考流
- 基准类型： 作物周期（`crop_cycle`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_field_records`

###### 氯化钾肥料投入（`tobacco_field_agricultural_nutrient_inputs_potassium_chloride`）

仅当声明的过程实际使用氯化钾肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：氯化钾肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的氯化钾肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
原始活动或阶段基准：每公顷并换算至 1,000 kg 终端烟叶.

- 归一化基准：每声明的参考流
- 基准类型： 作物周期（`crop_cycle`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_field_records`

###### 施用的牛粪肥投入（`tobacco_field_agricultural_nutrient_inputs_cattle_manure`）

仅当声明的过程实际使用施用的牛粪肥时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：施用的牛粪肥
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的施用的牛粪肥数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
原始活动或阶段基准：每公顷并换算至 1,000 kg 终端烟叶.

- 归一化基准：每声明的参考流
- 基准类型： 作物周期（`crop_cycle`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_field_records`

###### 农业石灰石投入（`tobacco_field_agricultural_nutrient_inputs_agricultural_limestone`）

仅当声明的过程实际使用农业石灰石时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：农业石灰石
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的农业石灰石数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
原始活动或阶段基准：每公顷并换算至 1,000 kg 终端烟叶.

- 归一化基准：每声明的参考流
- 基准类型： 作物周期（`crop_cycle`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_field_records`

###### 灌溉水 (`tobacco_irrigation_water_input`)

记录施用于烟田的水量，并区分灌溉和降雨。

- 选定流： 灌溉水供应
- 流属性/单位： Volume / m3
- 数量规则： 计量或计算的施用水量；雨养田以证据记录为零
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
原始活动或阶段基准：每公顷并换算至终端烟叶.

- 归一化基准：每声明的参考流
- 基准类型： 作物周期（`crop_cycle`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_field_records`
- 数量范围： Provisional irrigation screen
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 8,000
  - 单位： m3/ha
  - 基准： 一个作物周期
  - 基准类型： 作物周期（`crop_cycle`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 中压电力（`tobacco_field_energy_input`）

仅在本过程实际使用中压电力时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：每公顷并换算至终端烟叶。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：计量本过程和期间实际使用的中压电力，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`crop_cycle`
- 证据类型：`collected_record`
- 采集协议：`cp_field_records`

###### 柴油（`tobacco_field_energy_input_diesel`）

仅在本过程实际使用柴油时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：每公顷并换算至终端烟叶。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：计量本过程和期间实际使用的柴油，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`crop_cycle`
- 证据类型：`collected_record`
- 采集协议：`cp_field_records`

作物保护必需记录：完成前景数据包前，逐项列明实际施用的每一种制剂，保留商品名、有效成分、盐或化学形态、浓度、必要时的密度、施用量、日期和处理面积。每项交换选用一个物理上明确的产品身份；有效成分释放按物质及接收区室另行计算。缺少配方身份属于完整性缺口，不得用通用农药、虚构示例或假定为零替代。

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 采收青烟叶 (`green_leaf_output`)

将合格采收青烟叶记录为终端产品，或记录为转入调制的实测中间产品。

- 选定流： 未加工烟草，生产混合，农场门，鲜叶未加工 `e903dd1d-1d82-41e7-9526-2ae250746688`
- 流属性/单位： Mass / kg
原始产出计量与核对要求：在声明水分、等级和门点下实测的合格青烟叶质量

- 数量规则：实测净转移质量，保留批次、实际产品状态和含水率基准；在声明交接门对账至最终参考输出。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
原始活动或阶段基准：per hectare; scale to 1,000 kg only when green leaf is terminal.

- 归一化基准：每声明的参考流
- 基准类型： 作物周期（`crop_cycle`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_harvest_records`
- 数量范围： Provisional green-leaf yield screen
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 500
  - 上限： 8,000
  - 单位： kg/ha
  - 基准： 一个作物周期
  - 基准类型： 作物周期（`crop_cycle`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 废物流

###### 田间残余物和淘汰叶 (`field_residue_waste_output`)

按去向记录非产品茎秆、根、淘汰叶和采收损失。

- 选定流： 烟草田间残余物和淘汰青叶
- 流属性/单位： Mass / kg
- 数量规则： 按残余物类别和去向实测或平衡的质量
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
原始活动或阶段基准：per 1,000 kg harvested green leaf.

- 归一化基准：每声明的参考流
- 基准类型： 过程输出（`process_output`）
- 证据类型： 由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_harvest_records`
- 数量范围： Provisional residue screen
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1,500
  - 单位： kg/1,000 kg harvested green leaf
  - 基准： all non-product biomass and rejected leaf by fate
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 基本流

###### 排放到空气的一氧化二氮 (`field_n2o_air_output`)

将计算的管理土壤一氧化二氮记录到已确认的未指定空气介质。

- 选定流： Nitrous oxide, emissions to air, unspecified `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位： Mass / kg N2O
- 数量规则： calculate from collected N inputs and residues with an applicable method
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
原始活动或阶段基准：每公顷并换算至终端烟叶.

- 归一化基准：每声明的参考流
- 基准类型： 氮投入（`n_input`）
- 证据类型： 由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_field_emissions`
- 来源： `ipcc-2019-managed-soils`
- 数量范围： Broad method-result screen
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 100
  - 单位： kg N2O/ha
  - 基准： 一个作物周期; method calculation governs
  - 基准类型： 作物周期（`crop_cycle`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 排放到空气的氨 (`field_ammonia_air_output`)

将计算的肥料相关氨挥发记录到已确认的未指定空气介质。

- 选定流： Ammonia, emissions to air, unspecified `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位： Mass / kg NH3
- 数量规则： calculate by nutrient product, method, timing, weather, and factor
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
原始活动或阶段基准：每公顷并换算至终端烟叶.

- 归一化基准：每声明的参考流
- 基准类型： 氮投入（`n_input`）
- 证据类型： 由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_field_emissions`
- 来源： `emep-eea-2023-guidebook`
- 数量范围： Broad method-result screen
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 200
  - 单位： kg NH3/ha
  - 基准： 一个作物周期; method calculation governs
  - 基准类型： 作物周期（`crop_cycle`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 排放到水体的硝酸盐 (`field_nitrate_water_output`)

将计算或监测的硝酸盐损失记录到已确认的未指定水体介质。

- 选定流： Nitrate, emissions to water, unspecified `fe0acd60-3ddc-11dd-aa31-0050c2490048`
- 流属性/单位： Mass / kg nitrate
- 数量规则： calculate only with applicable leaching/runoff method or monitored balance
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
原始活动或阶段基准：每公顷并换算至终端烟叶.

- 归一化基准：每声明的参考流
- 基准类型： 氮投入（`n_input`）
- 证据类型： 由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_field_emissions`
- 来源： `ipcc-2019-managed-soils`
- 数量范围： Broad method-result screen
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1,000
  - 单位： kg nitrate/ha
  - 基准： 一个作物周期; selected method governs
  - 基准类型： 作物周期（`crop_cycle`）
  - 证据类型： 推理估算（`reasoned_estimate`）

### 过程：烟叶调制 (`tobacco_leaf_curing`)

#### 输入
##### 产品流

###### 进入调制的青烟叶 (`curing_green_leaf_input`)

记录转入所选调制路线的实测采收青烟叶批次。

- 选定流： 未加工烟草，生产混合，农场门，鲜叶未加工 `e903dd1d-1d82-41e7-9526-2ae250746688`
- 流属性/单位： Mass / kg
- 数量规则： 实测青烟叶批次质量和水分
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
原始活动或阶段基准：per batch and converted to 1,000 kg cured leaf.

- 归一化基准：每声明的参考流
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_curing_records`
- 数量范围： Green-to-cured mass ratio
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 2
  - 上限： 12
  - 单位： kg green leaf/kg accepted cured leaf
  - 基准： 声明水分状态的匹配批次
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 中压电力（`curing_energy_input`）

仅在本过程实际使用中压电力时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：per 1,000 kg accepted cured leaf。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：计量本过程和期间实际使用的中压电力，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_curing_records`

###### 柴油（`curing_energy_input_diesel`）

仅在本过程实际使用柴油时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：per 1,000 kg accepted cured leaf。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：计量本过程和期间实际使用的柴油，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_curing_records`

###### 购入蒸汽（`curing_energy_input_steam`）

仅在本过程实际使用购入蒸汽时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：per 1,000 kg accepted cured leaf。

- 选定流：购入蒸汽
- 流属性/单位：能量 / MJ
- 数量规则：计量本过程和期间实际使用的购入蒸汽，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_curing_records`

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 调制烟叶 (`cured_leaf_output`)

不得复用鲜叶 UUID。

- 选定流： 未加工调制烟叶
- 流属性/单位： Mass / kg
- 数量规则： 在声明水分和调制方法下实测的调制烟叶质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 技术特定（`technology_specific`）
原始活动或阶段基准：per batch and converted to 1,000 kg accepted cured leaf.

- 归一化基准：每声明的参考流
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_curing_records`
- 数量范围： Cured output fraction
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0.08
  - 上限： 0.50
  - 单位： kg cured leaf/kg incoming green leaf
  - 基准： 声明水分状态的匹配批次
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 废物流

###### 调制淘汰物 (`curing_reject_waste_output`)

记录调制期间淘汰的烟叶及各非有用去向，并与蒸发水分开。

- 选定流： 烟叶调制淘汰物和无用叶
- 流属性/单位： Mass / kg
- 数量规则： measured rejects plus reconciled non-water loss by fate; evaporated water is not waste
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
原始活动或阶段基准：per 1,000 kg accepted cured leaf.

- 归一化基准：每声明的参考流
- 基准类型： 过程输出（`process_output`）
- 证据类型： 由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_curing_records`
- 数量范围： Provisional curing-reject screen
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 300
  - 单位： kg/1,000 kg incoming green leaf
  - 基准： matched batch, excluding evaporated water
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 基本流

###### 调制产生的化石二氧化碳 (`curing_fossil_co2_air_output`)

仅记录现场调制燃烧产生的化石二氧化碳。

- 选定流： Carbon dioxide (fossil), emissions to air, unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位： Mass / kg CO2
- 数量规则： fuel quantity × carrier-specific carbon and oxidation factors; zero without on-site fossil combustion
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 技术特定（`technology_specific`）
原始活动或阶段基准：per 1,000 kg accepted cured leaf.

- 归一化基准：每声明的参考流
- 基准类型： 燃料清单（`fuel_inventory`）
- 证据类型： 由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_curing_records`
- 来源： `ipcc-2006-stationary-combustion`
- 数量范围： Route-conditional combustion screen
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 5,000
  - 单位： kg fossil CO2/1,000 kg accepted cured leaf
  - 基准： zero without fossil combustion
  - 基准类型： 燃料清单（`fuel_inventory`）
  - 证据类型： 推理估算（`reasoned_estimate`）

### 过程：调制烟叶分级与包装 (`cured_leaf_grading_packing`)

#### 输入
##### 产品流

###### 进入分级的调制烟叶 (`grading_cured_leaf_input`)

记录转入分级包装的实测调制烟叶批次。

- 选定流： 未加工调制烟叶
- 流属性/单位： Mass / kg
- 数量规则： 实测进料批次质量和水分
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
原始活动或阶段基准：per batch and converted to 1,000 kg packed leaf.

- 归一化基准：每声明的参考流
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_grading_records`
- 数量范围： Grading input-output ratio
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 1
  - 上限： 1.5
  - 单位： kg incoming/kg accepted packed leaf
  - 基准： 匹配的分级批次
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 分级调制烟叶 (`graded_cured_leaf_output`)

记录合格终端调制烟叶等级或明确声明的等级混合物。

- 选定流： 分级未加工调制烟叶
- 流属性/单位： Mass / kg
原始产出计量与核对要求：按等级、声明水分和包装形式实测的合格质量

- 数量规则：实测净转移质量，保留批次、实际产品状态和含水率基准；在声明交接门对账至最终参考输出。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
原始活动或阶段基准：terminal output scaled to 1,000 kg.

- 归一化基准：每声明的参考流
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_grading_records`
- 数量范围： Terminal reference quantity
  - 范围角色： 允许范围（`allowed_range`）
  - 下限： 1,000
  - 上限： 1,000
  - 单位： kg
  - 基准： 终端调制烟叶参考流
  - 基准类型： 参考流（`reference_flow`）
  - 证据类型： 方法公式（`method_formula`）
  - 来源： `reference-normalization-rule`

###### 降级调制烟叶 (`downgraded_leaf_output`)

仅在降级烟叶离开过程并进入具名有用去向时将其记录为产品。

- 选定流： 进入声明用途的降级调制烟叶
- 流属性/单位： Mass / kg
- 数量规则： measured leaf transferred to named useful destination; exclude internal rework
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
原始活动或阶段基准：per 1,000 kg accepted packed leaf.

- 归一化基准：每声明的参考流
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_grading_records`
- 数量范围： Provisional downgraded-product screen
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 300
  - 单位： kg/1,000 kg incoming cured leaf
  - 基准： 已记录有用去向
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 废物流

###### 拒收的调制烟叶（`grading_reject_waste_output`）

仅在拒收的调制烟叶跨越声明的过程边界时记录；保留批次、物理状态、适用时的组成及实际去向。其他材料独立记录，不得将本卡用作选择器或材料集合。
原始活动或阶段基准：per 1,000 kg accepted packed leaf。

- 选定流：拒收的调制烟叶
- 流属性/单位：质量 / kg
- 数量规则：实测拒收的调制烟叶的净数量，与关联批次和过程平衡核对后，仅归一到声明参考输出一次；保留含水率及适用的密度换算证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_grading_records`

###### 废纸板包装（`grading_reject_waste_output_paper_waste`）

仅在废纸板包装跨越声明的过程边界时记录；保留批次、物理状态、适用时的组成及实际去向。其他材料独立记录，不得将本卡用作选择器或材料集合。
原始活动或阶段基准：per 1,000 kg accepted packed leaf。

- 选定流：废纸板包装
- 流属性/单位：质量 / kg
- 数量规则：实测废纸板包装的净数量，与关联批次和过程平衡核对后，仅归一到声明参考输出一次；保留含水率及适用的密度换算证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_grading_records`

###### 废聚乙烯包装薄膜（`grading_reject_waste_output_film_waste`）

仅在废聚乙烯包装薄膜跨越声明的过程边界时记录；保留批次、物理状态、适用时的组成及实际去向。其他材料独立记录，不得将本卡用作选择器或材料集合。
原始活动或阶段基准：per 1,000 kg accepted packed leaf。

- 选定流：废聚乙烯包装薄膜
- 流属性/单位：质量 / kg
- 数量规则：实测废聚乙烯包装薄膜的净数量，与关联批次和过程平衡核对后，仅归一到声明参考输出一次；保留含水率及适用的密度换算证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_grading_records`

##### 基本流


### 过程：声明边界的产品交接计量（`declared_reference_handoff`）
该节点记录既有系统边界上的实际交接数量，用于对账和参考数量归一化。它不代表新增物理工序，不自动引入干燥、冷却、储存、包装或运输。每份数据包须声明一条实际路线、一个终端产品状态、含水率或干物质基准及交接门。仅将该路线在此交接门的合格产品传入本节点；其他路线不得作为额外投入，联产品另行记录并按第 7 节处理。前序工序的投入、损失和排放只计一次。以实际交接净质量作为归一化分母；计量对账节点不改变质量、产率或分配结果。
#### 输入
##### 产品流
###### 实际路线的交接产品（`actual_route_product_for_handoff`）
记录实际终端路线交付的合格产品；与交接门称重和批次记录对账。
- 选定流：未加工烟草，生产混合，农场门，鲜叶未加工 仅用于青烟叶；调制烟叶标识未解析
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
- 选定流：未加工烟草，生产混合，农场门，鲜叶未加工 仅用于青烟叶；调制烟叶标识未解析
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

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | all nodes | 田间、调制、分级及批次记录分开；分配前按运行时间、吞吐量或占用容量归属共享仪表/设备。 | `iso-14044-2006` |
| `allocation_leaf_grades` | useful grades | 保留等级及直接负担；无法细分时按同期交接经济价值分配，并披露质量分配敏感性。 | `iso-14044-2006` |
| `allocation_residue_reject` | residues, rework, rejects | 不向内部返工或废物分配，防止返工叶成为第二份产出。 |  |
| `allocation_shared_infrastructure` | shared barns/assets | 按有据使用量，将共享资产在批次/期间间归属一次；防止跨节点双计。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

清单完整性：具名条件卡是单项交换示例，不是穷尽配方，也不要求使用这些产品。完成前景数据包前，逐项列出所有实际种植材料、养分产品、作物保护制剂、资产材料、作业服务、载能体、包装材料、废物流及适用的基本物质，使用明确的物理身份、状态、原始属性/单位、来源或接收区室及实测或按方法计算的数量。身份或数量缺失属于完整性缺口，不得假定为零。保留实际批次和阶段基准；不得将中间转移累加为额外最终产出，也不得重复计入采购服务已包含的负荷。

先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


### 数据采集协议

| protocol_id | process_id | 流作用 | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_records` | `tobacco_field_production` | planting, nutrients, water, energy, protection | log, invoice, meter, contractor record | field; area; variety; product; formulation; amount; assay; date; operation | reconcile inputs to field/cycle；原始汇总与分配：sum by identity/field; normalize with matched yield | item; kg; L; m3; MJ; ha | each event | full cycle | all fields | 每声明的参考流 | invoices; labels; calibrated meters; logs |
| `cp_harvest_records` | `tobacco_field_production` | green leaf, residue, reject | harvest ticket, scale, moisture, destination | field; date; mass; moisture; grade; residue; fate | weigh/reconcile each picking；原始汇总与分配：separate accepted leaf and every residue fate | kg; percent; ha | each picking | full cycle | all fields | 每声明的参考流 | calibration; lot trace; moisture test |
| `cp_field_emissions` | `tobacco_field_production` | emissions | nutrient, soil, weather, residue, model | N; residue N; soil; climate; application; drainage; factors; model | 在同一兼容路线/产品/状态内，先逐田块核算应归属原始总量。汇总最终强度=应归属原始数量之和×声明参考量/匹配最终合格产出之和。来源为每公顷率 e_h、y_h 时，先以 e_h×面积、y_h×面积还原原始总量，不能再对田块总量作面积加权。每产品强度按匹配产出加权，不能按面积或不加权平均。原分配仅执行一次，保留期间/吞吐和全部来源单位换算，不兼容路线分开。 | kg N; kg emission; ha | each event/cycle | full cycle | all fields | 每声明的参考流 | activity and factor provenance; model file |
| `cp_curing_records` | `tobacco_leaf_curing` | leaf, energy, rejects, emissions | batch, scale, moisture, meter, barn log | batch; method; barn; input mass/moisture; carrier; energy; time; outputs | match each run to inputs/outputs/meters；原始汇总与分配：reconcile mass; allocate shared services by measured driver | kg; percent; kWh; MJ; h | 每批次/周期 | 完整调制期 | 所有调制设施和场址 | 每声明的参考流 | calibrated scale/meter; invoice; barn log |
| `cp_grading_records` | `cured_leaf_grading_packing` | grades, packaging, rework, rejects | batch, scale, grade, issue, destination | batch; input; moisture; accepted; downgrade; rework; reject; packaging |reconcile grades/destinations；原始汇总与分配：count rework once and close mass balance cured_leaf_packaging_input_specific_input：必需的投入身份确认要求，不是选定交换。保留的采集范围：分别记录实际包裹物、纸箱、袋、内衬、托盘、板条箱、捆扎带和可重复使用包装。本参数化 set 级卡不带固定 UUID。 原始活动或阶段基准：per 1,000 kg accepted packed leaf. 每一实际投入分别保留实际材料或物种、物理状态、原生属性和单位、实测数量、期间、去向及唯一交接。完成数据集前，对每一实际身份建立物理上明确的独立交换，并确认兼容 UUID 或保留其确切未解析身份。保留原产量关联、归一化、分配以及复用或存货义务。材料或功能类别不是一条交换；不将已退役类别范围复制到组分，不编造配方，不从缺失记录推定零数量。不得重复计入实际数量或已由其他卡片表示的产品。 | kg; item; percent | 每批次 | 完整分级期 | 所有分级和包装场址 | 每声明的参考流 | calibration; grade sheet; package record |
| `cp_declared_reference_handoff` | declared_reference_handoff | reference_product_at_declared_handoff | 交接计量与验收记录 | route, terminal_output_row_id, product_state, gate, lot, net_mass_kg, moisture_basis, acceptance, tare | 采用校准衡器或可追溯称重记录，将实际终端工序交接批次与验收净质量、产品状态及含水率对账；剔除包装皮重，不汇总前序阶段数量。 | kg | 每交接批次 | 声明报告期 | 声明交接门 | 每声明的参考流 | 校准或称重凭证、验收和批次追溯 |
| `cp_phase1_environment_coverage` | tobacco_field_production | 按实际节点的管理环境覆盖 | 场址活动方法台账 | 场址及实际管理节点；面积；有日期占用区间；共同使用者；建植/未产期历史；实际前后土地类别及转化日期/面积；碳核算覆盖；上游土地覆盖 | 按实际负责生产节点及匹配批次/期间采集原始记录，保留来源、方法适用性和不确定性。与现有协议及供应覆盖核对，不新增重复事件；不适用须明示有据，缺少证据属于缺口。 | 适用的原生活动单位、kg N或物质、面积/时间 | 事件及年度/批次核对 | 匹配生产/队列期间 | 全部实际管理生产节点 | 执行适用覆盖核算后最终归一化一次 | 原始记录、方法工作表及适用性证据 |

### 计算规则

| rule_id | 适用于 | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_field_to_green_leaf` | field flows | 作物周期数量 / 匹配鲜叶质量仅得到每 kg 鲜叶的中间强度。鲜叶参考结果按应归属总量 * 1,000 kg / 最终合格鲜叶质量计算。烤制叶参考结果须按 calc_green_to_cured_leaf 的实际关联鲜叶投入/合格烤制叶 kg 换算鲜叶中间强度，再乘 1,000 kg；烤制和分级贡献在同一最终基准上相加一次。保留实际批次、损失、产出份额和单位；不得对直接烤制数量套鲜叶转换或重复归一化最终强度。 | amount; area; green leaf | amount/kg green leaf |  |
| `calc_green_to_cured_leaf` | cured route | green-leaf-normalized amount × green-leaf input / cured output | masses; moisture; rejects | amount/kg cured leaf | `mass-balance-identity` |
| `calc_nutrient_content` | nutrient supply | product amount × declared nutrient fraction | identity; amount; assay | nutrient by product |  |
| `calc_managed_soil_emissions` | field emissions | 采用适用 IPCC/区域方法，覆盖投入、残体、挥发及淋失。 | activity; soil; climate; factors | emissions by pathway | `ipcc-2019-managed-soils` |
| `calc_curing_combustion` | curing | 燃料数量×载能体特定因子；外购电力不属于现场燃烧。 | carrier; amount; factor | pollutant/batch | `ipcc-2006-stationary-combustion` |
| `calc_curing_mass_balance` | curing | green wet mass = cured leaf + rejects + water/other loss within uncertainty | masses; moisture | reconciled outputs | `mass-balance-identity` |
| `calc_grading_mass_balance` | grading | input = accepted + downgraded + rejects + loss; count rework once | batch masses; routes | reconciled grades | `mass-balance-identity` |
| `tobacco_planting_material_input_identity_and_fate` | `tobacco_field_production` | 对于本作业原有 tobacco_planting_material_input 采集角色，建立交换前须确定实际物理形态、物种／材料、组成、状态及供给／处理边界。与该角色相关且实际使用／产生的各种种子批次、移栽苗、根冠、插条、幼虫阶段、配方、包衣、保藏剂或分离残余物须各有具体卡片；这些例子是备选，不是必需配方。保留原采集记录和路线特定来源证据。计数种植记录匹配按质量的供应数据时，须使用实测或供应商支持的单位质量；计数与质量是关联属性，不是两次采购。不得合并独立果壳／外皮或不同药剂；真实混合物流须有组成与接收者证据且只计一次。完整性通过前，记录每项适用数量和原生单位、链接相容的已核验 UUID 或明确未解析身份，保留库存／退回归属，并将可归属原始数量按合格参考产出归一化一次。缺失记录不是零，原聚合范围不是单项投入默认值。 | `cp_field_records` | 按身份区分的交换和对账活动记录 |  |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | 最终基本交换使用已识别物质的质量和一个实际接收环境，养分／活动台账另存：该物种的 N2O-N × 44/28 为 N2O，NH3-N × 17/14 为 NH3，硝酸盐氮 × 62/14 为硝酸盐，磷酸盐磷 × 95/31 为磷酸盐。若选定流为元素磷，则报告 kg P，仅在物种口径有据时将磷酸盐质量乘 31/95。只有方法输出按元素计时才换算一次，实测化合物质量不得再换算。总养分损失不得无据归于单一物种，土壤残余／留存养分不是排放。保留直接／间接路径台账，不重复所选方法或上游清单已经包含的路径。因子不确定性范围只按其声明基准检查因子，不是最终化合物数量或场址排放的允许界限。用合格参考数量和匹配实测产出，将可归属化合物质量归一化一次。活动量、身份或接收环境未知时保留证据缺口，不得宣称完整。 | `cp_field_emissions`; 物种特定活动量台账、方法路径和因子基准、匹配合格产出 | 按身份区分的交换和对账活动记录 |  |

### 环境覆盖计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_managed_land_coverage` | 实际管理生产节点 | 逐实际自主管理生产场址采集占用面积及有日期的占用区间，包括应归属的建植/未产期与生产期。占用量为面积乘实际时长，明确换为所选面积时间单位（1 ha=10,000 m2，时间按年）；只有每作物周期公顷数而无时长不能得到面积时间。建立、管理区间重叠时划分区间或取并集，同一面积时间只计一次，实际共同使用者份额合计为一。土地转化按声明土地利用方法，另记实际前/后土地类别、事件面积和日期；转化使用面积单位，不能与占用量相加。种植、持续占用或前土地资料缺失不能证明发生转化，也不能证明零转化。适用时保留历史事件归属及碳库/排放方法覆盖，不编造转化或通用固碳信用。分别建立兼容基本流身份，采用已核实UUID或明确未决身份，归属一次后按匹配最终参考产出归一化。外购已完成的生物投入承接兼容上游土地覆盖一次，不在本地重复。适用土地身份、面积、时长或前状态证据缺失属于完整性缺口；有据无转化可记录为不适用。 | cp_phase1_environment_coverage | 按匹配最终参考量的应归属原生环境数量 |  |

### 数据质量要求

| requirement_id | 适用于 | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_route_identity` | reference | 区分绿叶/调制叶及晾晒/明火/烤房/日晒路线，保留品种、等级、含水率、作物年度及交接点。 | crop, curing, grade, sales records |
| `dq_temporal_alignment` | all rows | 将田间、收获、调制、分级、能源及产出匹配至同一作物/批次，并披露代理数据。 | dated records |
| `dq_mass_moisture` | transformations | Use calibrated masses and paired moisture at green, cured, and packed states. | calibration; moisture records |
| `dq_route_completeness` | curing | 记录载能体及燃烧位置，零能源须有被动路线证据。 | barn log; invoice; meter |
| `dq_identity_resolution` | parameterized/unresolved | Resolve every emitted exchange to one verified UUID before process publication. | identity review record |

## 9. 验证规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_terminal_route` | reference | 恰选一条终端路线：1,000 kg 绿叶或1,000 kg 调制分级叶；调制叶不得使用鲜叶 UUID。 |  |
| `validation_curing_method` | cured route | 每批声明一种主要调制方法，纳入其能源、烟房服务、排放、拒收物及交接。 | `who-tobacco-environment-2017` |
| `validation_mass_balance` | harvest/curing/grading | 在有据不确定性内核对质量、水分、等级、返工、拒收及损失。 | `mass-balance-identity` |
| `validation_nutrient_emissions` | field | 将养分/残体氮与 N2O、NH3 及硝酸根方法核对，避免重叠路径。 | `ipcc-2019-managed-soils`; `emep-eea-2023-guidebook` |
| `validation_rework` | curing/grading | 将返工关联来源且只计一次；拒收物不作合格参考产品。 |  |
| `validation_shared_assets` | barns/meters/equipment | Apply one attribution driver per period and prevent double counting. | `iso-14044-2006` |
| `validation_flow_identity` | every flow | 分别核验每种实际交换的具体流 UUID、物理状态、流属性和单位；未确认时明确保留未解析身份。 |  |

## 10. 发布数据集配置

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground unmanufactured tobacco leaf production dataset |
| downstream_use | `secondary_dataset`; `background_dataset` after review and publication |
| allowed_use | LCA of green or cured unmanufactured tobacco preserving geography, crop year, state, curing technology, grade, moisture, gate, and allocation |
| excluded_use | manufactured tobacco/nicotine products or a different curing route, grade, geography, or gate without reviewed proxy decision |
| required_metadata | variety/market class; geography; crop year; area; yield; terminal state/gate; curing method; barn/energy; moisture; grade; packaging; residue/reject fate; allocation; identity resolution |
| required_quality_disclosure | foreground coverage; proxy periods; missing records; range exceedances; emission methods; meter/fuel reconciliation; mass/moisture balance; unresolved identities |
| update_trigger | reviewed route evidence, technology or emission-method change, 具体流身份核验|

## 11. 数据来源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `who-tobacco-environment-2017` | official_guidance | WHO, Tobacco and its environmental impact: an overview, 2017, https://iris.who.int/bitstream/handle/10665/255574/9789241512497-eng.pdf | cultivation and air/fire/flue/sun curing routes |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement, Volume 4, Chapter 11 | managed-soil nitrogen pathways |
| `emep-eea-2023-guidebook` | method_factor | EEA, EMEP/EEA Air Pollutant Emission Inventory Guidebook 2023 | agricultural ammonia context |
| `ipcc-2006-stationary-combustion` | method_factor | IPCC 2006 Guidelines, Volume 2, Chapter 2 | curing combustion calculations |
| `iso-14044-2006` | standard | ISO 14044:2006 | allocation and disclosure |
| `mass-balance-identity` | method_factor | Conservation of mass for matched harvest, curing, and grading batches | batch calculations and validation |
| `reference-normalization-rule` | method_factor | PCR normalization: terminal reference output equals 1,000 kg | exact terminal range |

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `declared-handoff-measurement-definition` | `method_factor` | 本 PCR 第 3、6、8 节的净质量归一化定义：同一状态、同一交接门的实测净质量作为自身归一化分母，质量比为 1；交接计量不增加物理工序。 | 同阶段和交接计量恒等式；属于定义，不是实测产率、经验默认值或外部文献。 |
