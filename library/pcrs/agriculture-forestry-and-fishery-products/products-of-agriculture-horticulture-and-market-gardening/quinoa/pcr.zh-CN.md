---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.quinoa
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 藜麦籽粒

## 1. 范围与适用性

本 PCR 覆盖收获后在农场交付的栽培藜麦（Chenopodium quinoa）籽粒。范围包括雨养和灌溉生产、常规和有机管理，以及在交付前发生且位于农场边界内的可选干燥或清选。产品仍为收获籽粒，不作为脱壳藜麦或藜麦粉处理。

范围不包括认证种子繁育、藜麦叶或饲草、全株服务、爆米藜麦或熟制藜麦、脱壳籽粒、面粉、片状产品、包装食品、场外储存、加工和配送。数据集必须说明干燥、清选或农场内临时储存是否位于所声明的农场边界内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.quinoa |
| classification_refs | CPC 3.0: 01194 Quinoa; mapping relation: narrower |
| covered_products | 农场交付、用于食品、饲料或进一步加工的收获藜麦籽粒 |
| excluded_products | 认证种子；叶或饲草；爆米、熟制、脱壳、碾磨、压片或包装产品；场外服务 |
| representative_product | 未加工收获藜麦籽粒 |
| production_route | 藜麦种植、收获以及有条件的农场内籽粒整理 |
| market_state | 在农场交付、声明水分、杂质和用途状态的未加工籽粒 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 农场交付的藜麦籽粒 |
| How much | 1,000 kg 按收到状态的籽粒 |
| How well | 已收获、未加工，并声明水分、异物、损伤和用途的籽粒 |
| How long or cycle | 一个声明的藜麦种植周期 |
| reference_flow_link | reference_product_at_declared_handoff |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1000 |
| 参考产品流 | Quinoa, production mix, at farm gate, harvested grain, unprocessed |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 品种；生产地理位置；收获年份；雨养或灌溉状态；收获日期；交付水分；异物基础；用途；是否包含整理 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

每份前景数据包须声明实际路线、终端产品状态和交接门，保留原始称量、质量平衡及批次追溯记录。以该门的唯一交接参考输出归一化，前序工序采用实测转移数量。

唯一参考输出为 `reference_product_at_declared_handoff`，由下列实际路线在声明交接门的产品承接。原路线输出编号用于追溯实际来源和物理状态，不再分别固定为参考数量。

## 4. 计量与单位规则
| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass_as_received` | 参考藜麦籽粒 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告按收到状态的籽粒质量和实测水分；每次干物质换算都保留水分基础。 |
| `area_to_reference_conversion` | 按面积计的田间流 | 活动特定属性 | 活动特定单位 | 用同一地块、同一种植周期的可销售籽粒产量，将每公顷种植周期总量换算并缩放到 1,000 kg 籽粒。 |
| `nutrient_content_basis` | 养分施用 | 养分质量 | kg N、kg P2O5 或 kg K2O | 分别保留配方产品质量和声明的养分含量基础，不得只根据产品名称推断养分质量。 |
| `water_and_energy_units` | 灌溉和能源 | 体积、质量或能量 | m3、kg、MJ 或 kWh | 以计量器的原生单位记录灌溉水和能源，记录换算并保留抽水或载能体假设。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 藜麦种植周期开始时已整备的农田，种子和购买的管理投入从此边界进入 |
| starting_condition_role | 管理型藜麦籽粒生产的开始 |
| product_classification_scope | 对应 CPC 3.0 code 01194 的栽培藜麦籽粒 |
| recursive_input_rule | 购买或保留的藜麦播种种子作为明确的种子投入，并连接独立的上游种子供应数据集，不得回接本收获籽粒过程 |
| upstream_dataset_requirement | 种子、肥料、土壤改良剂、农药产品、燃料、电力、灌溉供水和外包服务的兼容上游数据集 |
| disclosure | 品种、地理位置、地块面积、播种与收获日期、前茬、耕作、灌溉、投入、产量、水分、残余物去向、整理和分配背景 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle_to_farm_gate` | 所有符合要求的数据集 | 纳入田间整备、播种、作物管理、收获，以及在声明的农场交付前完成的农场内清选或干燥。 | `fao-quinoa-cultivation-guide`; `iso-14044-2006` |
| `boundary_direct_field_emissions` | 管理土壤和作物投入 | 使用适用于地理区域的方法，纳入与养分和残余物核算使用同一活动数据的直接和间接含氮排放。 | `ipcc-2019-managed-soils`; `emep-eea-2023-guidebook` |
| `boundary_residue_fate` | 藜麦残余物 | 区分还田、焚烧、作为有用产品移出和作为废物移出；移出的残余物氮不得计入土壤残余物氮。 | `ipcc-2019-managed-soils` |
| `boundary_post_farm_gate_exclusion` | 下游活动 | 排除场外运输、储存、脱壳、碾磨、食品或饲料制造、包装和使用，除非研究明确扩展到本 PCR 之外。 | `iso-14044-2006` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `quinoa_field_production` | 藜麦田间生产与收获 | required | always | 管理型生物生产和收获 | 一个种植周期的种植面积和收获籽粒质量 |
| `quinoa_grain_conditioning` | 农场内藜麦籽粒整理 | conditional | 在农场交付前发生干燥、清选、分选或临时处理，且未包含在田间记录中 | 为声明的农场交付状态准备收获籽粒 | 进入和接收的籽粒质量 |
| declared_reference_handoff | 声明交接门的产品计量 | required |  | foreground | reference_product_at_declared_handoff |

### 过程：藜麦田间生产与收获（`quinoa_field_production`）

#### 输入
##### 产品流

###### 藜麦播种种子（`quinoa_seed_input`）

记录进入种植周期的购买或保留藜麦种子。不得用收获籽粒参考流替代种子身份。

- 选定流：播种用藜麦种子
- 流属性/单位：Mass / kg
- 数量规则：实测播种种子质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每公顷种植面积，并以同周期可销售产量换算.

- 归一化基准：每声明的参考流
- 基准类型：种植周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quinoa_field_activity_records`
- 来源：`fao-quinoa-cultivation-guide`
- 数量范围：初始藜麦播种量筛选范围
  - 范围角色：典型范围（`typical_range`）
  - 下限：4
  - 上限：15
  - 单位：kg seed/ha
  - 基准：条播或可比建植方式；超出范围须说明理由
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 尿素肥料（`quinoa_field_production_agricultural_nutrient_inputs_urea`）

**quinoa_field_production_agricultural_nutrient_inputs 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

逐一采集每种肥料产品。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。
原始活动或阶段基准：每公顷种植面积，并换算到 1,000 kg 籽粒.

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：尿素 `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_quinoa_field_activity_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quinoa_field_activity_records`
- 来源：`fao-fertilizer-identities`

仅当实际配方及等级兼容时使用此产品身份。保留供应商组成及质量记录，不以养分质量、稀释溶液质量或服务活动替代产品质量。UUID本身不提供剂量或排放因子。

###### 硫酸铵肥料（`quinoa_field_production_agricultural_nutrient_inputs_ammonium_sulfate`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：硫酸铵 `8c6f0cbb-16d7-4dc9-8d55-e8dea17d7faf`
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_quinoa_field_activity_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quinoa_field_activity_records`
- 来源：`fao-fertilizer-identities`

仅当实际配方及等级兼容时使用此产品身份。保留供应商组成及质量记录，不以养分质量、稀释溶液质量或服务活动替代产品质量。UUID本身不提供剂量或排放因子。

###### 重过磷酸钙肥料（`quinoa_field_production_agricultural_nutrient_inputs_triple_superphosphate`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：重过磷酸钙肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_quinoa_field_activity_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quinoa_field_activity_records`
- 来源：`fao-fertilizer-identities`

###### 氯化钾肥料（`quinoa_field_production_agricultural_nutrient_inputs_potassium_chloride`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：氯化钾肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_quinoa_field_activity_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quinoa_field_activity_records`
- 来源：`fao-fertilizer-identities`

###### 作为肥料施用的牛粪（`quinoa_field_production_agricultural_nutrient_inputs_cattle_manure`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：作为肥料施用的牛粪
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_quinoa_field_activity_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quinoa_field_activity_records`
- 来源：`fao-organic-nutrients`

###### 施入土壤的植物残体堆肥（`quinoa_field_production_agricultural_nutrient_inputs_plant_compost`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：施入土壤的植物残体堆肥
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_quinoa_field_activity_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quinoa_field_activity_records`
- 来源：`fao-organic-nutrients`

###### 供应的灌溉水（`irrigation_water_input`）

将进入田间的水与降水分开记录；仅在证明为雨养田时使用零值。

- 选定流：灌溉供水
- 流属性/单位：Volume / m3
- 数量规则：计量体积或经验证的泵流量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每公顷种植面积，并换算到 1,000 kg 籽粒.

- 归一化基准：每声明的参考流
- 基准类型：种植周期（`crop_cycle`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_quinoa_field_activity_records`
- 数量范围：暂定灌溉筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：7000
  - 单位：m3/ha
  - 基准：一个种植周期，包括零灌溉的雨养生产
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 柴油 (`field_mobile_fuel_input_diesel`)

仅适用于本作业有记录的柴油机械。保留燃料牌号及配方，体积按实测或供应商支持的密度换算。其他动力系统按实际载能体记录，不用柴油当量替代。执行`field_mobile_fuel_input_specific_input`，本示例不是必用投入。不重复计入机械服务包含项，也不对现场发电内部转移的电力再计外购供电；实际燃料燃烧及发电排放仍须单独核算。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按`cp_quinoa_field_activity_records`采集`quinoa_field_production`的该载能体用量。共用量仅归属一次，归属原始量乘声明参考数量，再除以相同产品单位下匹配的最终合格产出数量；保留实测阶段吞吐及原有分配规则，不对已归一化量再次归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：per declared reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_quinoa_field_activity_records`
- 来源：`route-energy-fao`

###### 灌溉或田间设备用电（`field_electricity_input`）

仅记录前景边界内田间设备或灌溉抽水使用的外购电力。

- 选定流：电力供应
- 流属性/单位：Energy / kWh
- 数量规则：将电表读数或泵能耗计算分配至藜麦田
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每公顷种植面积，并换算到 1,000 kg 籽粒.

- 归一化基准：每声明的参考流
- 基准类型：种植周期（`crop_cycle`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_quinoa_field_activity_records`
- 数量范围：暂定田间用电筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：900
  - 单位：kWh/ha
  - 基准：适用时包括田间设备和灌溉抽水
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 藜麦种植的土地占用（`land_occupation_input`）

将地块面积和种植周期占用时间作为基本资源投入记录。

- 选定流：农业种植用地占用
- 流属性/单位：Area-time / m2*a
- 数量规则：种植面积乘以占用时间
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每公顷种植面积，并换算到 1,000 kg 籽粒.

- 归一化基准：每声明的参考流
- 基准类型：种植周期（`crop_cycle`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_quinoa_field_activity_records`

###### 从环境中提取的灌溉水（`irrigation_withdrawal_input`）

在前景操作者从自然来源抽水时记录直接取水。不得重复计算已由上游灌溉供水数据集表示的水。

- 选定流：灌溉用自然水资源取用
- 流属性/单位：Mass or volume / kg or m3
- 数量规则：计量取水量或经验证的水源流量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每公顷种植面积，并换算到 1,000 kg 籽粒.

- 归一化基准：每声明的参考流
- 基准类型：种植周期（`crop_cycle`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_quinoa_field_activity_records`

#### 输出
##### 产品流

###### 送往整理的收获藜麦籽粒（`harvested_quinoa_grain_output`）

记录离开田间过程的已收获、可销售籽粒。包含整理时这是内部产品转移，不包含整理时这是终端参考输出。

- 选定流：藜麦 `21dd21b4-e6ec-43c2-b2c8-c18f47567236`
- 流属性/单位：Mass / kg
原始产出计量与核对要求：按声明水分和异物基础记录收获籽粒实测质量

- 数量规则：实测净转移质量，保留批次、实际产品状态和含水率基准；在声明交接门对账至最终参考输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：田间过程输出缩放到 1,000 kg 参考籽粒.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quinoa_harvest_output_records`
- 数量范围：暂定田间产量筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：250
  - 上限：5000
  - 单位：kg grain/ha
  - 基准：一个种植周期的可销售收获籽粒
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 用于声明用途的移出藜麦秸秆或残余物（`removed_quinoa_residue_output`）

只有在残余物被测量并有意转移至声明用途时，才记录从田间移出的地上残余物。留在田间或翻入土壤的残余物通过残余物去向和排放计算记录，不作为产品共产品。

- 选定流：用于声明用途的藜麦作物残余物
- 流属性/单位：Mass / kg dry matter
- 数量规则：按去向和水分基础记录移出残余物实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 接收籽粒.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quinoa_harvest_output_records`
- 数量范围：暂定移出残余物筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：6000
  - 单位：kg dry matter/1,000 kg grain
  - 基准：残余物留在田间时为零；必须声明去向和水分
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 收获损失和非市场籽粒（`field_harvest_loss_output`）

仅在对质量平衡有意义时记录留在田间或整理前被剔除的籽粒实测量。说明其留在田间、饲喂、堆肥或作为废物处理的去向。

- 选定流：不可销售藜麦籽粒及收获损失
- 流属性/单位：Mass / kg
- 数量规则：按去向记录或计算收获籽粒与可销售籽粒的差值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 接收籽粒.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_quinoa_harvest_output_records`
- 数量范围：暂定田间损失筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：200
  - 单位：kg/1,000 kg harvested grain
  - 基准：按记录去向的损失或非市场籽粒
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 排放到空气的氧化亚氮（`nitrous_oxide_emission`）

纳入与氮投入、残余物去向和适用排水或淋失路径有关的直接和间接土壤 N2O。

- 选定流：一氧化二氮向环境空气排放
- 流属性/单位：Mass / kg N2O
- 数量规则：使用适用于地理区域的土壤排放方法计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 接收籽粒.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_quinoa_emission_activity`

###### 排放到空气的氨（`ammonia_emission`）

根据施用方式和当地因子纳入肥料及有机养分施用的氨挥发。

- 选定流：氨向环境空气排放
- 流属性/单位：Mass / kg NH3
- 数量规则：根据氮源、施用方式和适用挥发因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 接收籽粒.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_quinoa_emission_activity`

###### 排放到空气的氮氧化物（`nitrogen_oxides_emission`）

在所选方法要求时，纳入田间燃料燃烧和含氮农业排放产生的氮氧化物。

- 选定流：氮氧化物向环境空气排放
- 流属性/单位：Mass / kg NOx
- 数量规则：根据燃料活动和适用农业排放方法计算，不重复计算上游燃料数据集
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 接收籽粒.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_quinoa_emission_activity`

###### 释放到水中的硝酸盐（`nitrate_water_emission`）

在排水、土壤和养分记录支持时，纳入管理田地的硝酸盐淋失或径流。

- 选定流：硝酸根向水体排放
- 流属性/单位：Mass / kg nitrate
- 数量规则：用适用于地理区域的方法计算氮淋失或径流
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 接收籽粒.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_quinoa_emission_activity`

###### 释放到水中的磷酸盐（`phosphate_water_emission`）

当土壤、坡度和养分数据支持场址或区域方法时，纳入径流或侵蚀造成的磷酸盐释放。

- 选定流：磷酸根向水体排放
- 流属性/单位：Mass / kg phosphate
- 数量规则：用所选方法计算径流或侵蚀损失，并说明结果是模型值还是实测值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 接收籽粒.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_quinoa_emission_activity`

### 过程：农场内藜麦籽粒整理（`quinoa_grain_conditioning`）

#### 输入
##### 产品流

###### 进入整理的收获籽粒（`conditioning_grain_input`）

当清选或干燥位于农场边界内时，记录从田间过程接收的籽粒。

- 选定流：藜麦 `21dd21b4-e6ec-43c2-b2c8-c18f47567236`
- 流属性/单位：Mass / kg
- 数量规则：按记录水分测量进入批次质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 接收籽粒.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quinoa_conditioning_records`

###### 籽粒整理用电（`conditioning_electricity_input`）

记录边界内风机、清选机、输送机和其他整理设备使用的电力。

- 选定流：电力供应
- 流属性/单位：Energy / kWh
- 数量规则：将电表读数分配到匹配的藜麦整理批次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
原始活动或阶段基准：每 1,000 kg 接收籽粒.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_quinoa_conditioning_records`
- 数量范围：暂定整理用电筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：180
  - 单位：kWh/1,000 kg grain
  - 基准：包括清选、输送和风机运行
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 干燥供应的热能（`conditioning_heat_input`）

记录交付前降低籽粒水分所使用的供应热量或燃料能量。

- 选定流：谷物干燥用工艺热量
- 流属性/单位：Energy / MJ
- 数量规则：将实测燃料或交付热量换算为能量，并保留载能体身份
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
原始活动或阶段基准：每 1,000 kg 接收籽粒.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_quinoa_conditioning_records`
- 数量范围：暂定干燥能耗筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1400
  - 单位：MJ/1,000 kg grain
  - 基准：不进行主动干燥时为零；批次记录补齐前为宽泛候选估算
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 整理供应的用水（`conditioning_water_input`）

仅在用水跨越整理过程边界时记录除尘或清洁用水。

- 选定流：生产用水
- 流属性/单位：Mass or volume / kg or m3
- 数量规则：将计量用水量匹配到整理批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
原始活动或阶段基准：每 1,000 kg 接收籽粒.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quinoa_conditioning_records`

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 农场交付的整理后藜麦籽粒（`conditioned_quinoa_grain_output`）

记录在包含的清选或干燥后、处于声明水分和异物状态的接收籽粒。

- 选定流：藜麦 `21dd21b4-e6ec-43c2-b2c8-c18f47567236`
- 流属性/单位：Mass / kg
原始产出计量与核对要求：按声明交付水分和杂质基础记录接收籽粒实测质量

- 数量规则：实测净转移质量，保留批次、实际产品状态和含水率基准；在声明交接门对账至最终参考输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：终端输出缩放到 1,000 kg 参考籽粒.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quinoa_conditioning_records`
- 数量范围：声明农场交付水分筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：8
  - 上限：14
  - 单位：percent moisture, wet basis
  - 基准：必须声明市场状态；超出范围需产品规格证据
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 用于声明用途的藜麦筛下物（`useful_screenings_output`）

仅在筛下物或降级籽粒被测量并有意转移至声明用途时将其记录为产品。

- 选定流：用于声明用途的藜麦筛下物
- 流属性/单位：Mass / kg
- 数量规则：按去向记录有用筛下物实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 接收籽粒.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quinoa_conditioning_records`
- 数量范围：暂定有用筛下物筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：120
  - 单位：kg/1,000 kg incoming grain
  - 基准：没有有用筛下物交付时为零
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 异物和剔除籽粒（`conditioning_reject_waste_output`）

按材料身份和去向记录石块、土壤、杂草材料、污染籽粒、粉尘和其他剔除物。

- 选定流：藜麦整理异物及废弃籽粒
- 流属性/单位：Mass / kg
- 数量规则：按材料类别和去向记录剔除物实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 接收籽粒.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quinoa_conditioning_records`
- 数量范围：暂定整理剔除物筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：180
  - 单位：kg/1,000 kg incoming grain
  - 基准：整理批次；将有用筛下物与废物分开
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流


### 过程：声明边界的产品交接计量（`declared_reference_handoff`）
该节点记录既有系统边界上的实际交接数量，用于对账和参考数量归一化。它不代表新增物理工序，不自动引入干燥、冷却、储存、包装或运输。每份数据包须声明一条实际路线、一个终端产品状态、含水率或干物质基准及交接门。仅将该路线在此交接门的合格产品传入本节点；其他路线不得作为额外投入，联产品另行记录并按第 7 节处理。前序工序的投入、损失和排放只计一次。以实际交接净质量作为归一化分母；计量对账节点不改变质量、产率或分配结果。
#### 输入
##### 产品流
###### 实际路线的交接产品（`actual_route_product_for_handoff`）
记录实际终端路线交付的合格产品；与交接门称重和批次记录对账。
- 选定流：藜麦，农场门收获籽粒，生产混合，未经加工
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
- 选定流：藜麦，农场门收获籽粒，生产混合，未经加工
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

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 田间生产和整理 | 在分配前优先分别记录田间生产、整理、籽粒、有用筛下物、移出残余物和废物。 | `iso-14044-2006` |
| `allocation_retained_residue` | 还田或翻入土壤的残余物 | 不将留存残余物作为共产品；将其管理和相关排放纳入田间生产，并防止与移出残余物重复计算。 | `ipcc-2019-managed-soils` |
| `allocation_removed_residue` | 可销售的移出残余物 | 不能分拆共享田间负荷时，使用同期声明的农场交付价值进行经济分配并披露水分基础；以质量分配作敏感性分析。 | `iso-14044-2006` |
| `allocation_conditioning_outputs` | 有用筛下物和剔除籽粒 | 将有意转移且具有正价值的输出视为共产品，其他剔除物视为废物；只有无法分拆时才在整理交付点采用经济分配。 | `iso-14044-2006` |

具体身份卡不继承原集合卡的数量范围。实际数量由原始记录、库存/计量对账及声明参考流计算；在取得对应身份、单位、期间和边界一致的证据前，不提供默认量或数值筛查范围。缺少范围是质量披露项，并非零投入或完整性证明。

## 8. 前景数据采集、计算与质量规则

### 完成数据集前确认具体投入身份

依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。

| requirement_id | collection_protocol_id | 保留的采集范围 |
| --- | --- | --- |
| `field_mobile_fuel_input_specific_input` | `cp_quinoa_field_activity_records` | 作业 quinoa_field_production：记录田间作业消耗的柴油或其他机械燃料；不得包含在上游投入数据集中的燃料。 原数量方法：按作业实测燃料用量或经验证的承包商分摊 |
| `crop_protection_input_specific_input` | `cp_quinoa_input_identity_records` | 作业 quinoa_field_production：按产品、有效成分和施用事件记录每种除草剂、杀虫剂、杀菌剂或其他农药制剂。制剂身份在验证兼容产品流前保持证据缺口。 原数量方法：按产品和事件记录制剂实测质量 |


先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_quinoa_field_activity_records` | `quinoa_field_production` | seed, nutrients, water, fuel, electricity, amendments, crop protection | field log, invoice, application record, meter, or contractor record | field_id; area; cultivar; input_product; amount; nutrient_content; date; operation; irrigation; contractor_scope | 将物理投入和作业与每个地块、种植周期核对；原始汇总与分配：按物理身份汇总；不合并产品后计算养分含量；使用同周期面积和产量归一化 `field_mobile_fuel_input_specific_input`: 作业 quinoa_field_production：记录田间作业消耗的柴油或其他机械燃料；不得包含在上游投入数据集中的燃料。 原数量方法：按作业实测燃料用量或经验证的承包商分摊 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 `soil_amendment_input_specific_input`: 仅在石灰、石膏、堆肥或其他改良剂跨越所声明的田间边界时记录，并识别其组成和施用事件。 按材料和地块记录改良剂实测质量 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 | kg; kg nutrient; L; m3; kWh; ha | each event | complete crop cycle | all represented fields | 每声明的参考流 | invoices; labels; calibrated meters; field logs |
| `cp_quinoa_input_identity_records` | `quinoa_field_production` | seed, crop protection, amendments | seed certificate, product label, invoice, supplier record | product_name; active_ingredient; formulation; lot; supplier; amount; application_date; field_id | 保留投入身份，并将每项投入匹配到施用记录；原始汇总与分配：不合并身份或有效成分不同的制剂 `crop_protection_input_specific_input`: 作业 quinoa_field_production：按产品、有效成分和施用事件记录每种除草剂、杀虫剂、杀菌剂或其他农药制剂。制剂身份在验证兼容产品流前保持证据缺口。 原数量方法：按产品和事件记录制剂实测质量 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 | kg; percent; date | each input event | complete crop cycle | all represented suppliers and fields | 每声明的参考流 | labels; certificates; supplier documents |
| `cp_quinoa_harvest_output_records` | `quinoa_field_production` | grain, residue, harvest loss, residue fate | weighbridge, yield monitor, moisture test, bale record, field inspection | field_id; harvest_date; grain_mass; grain_moisture; residue_mass; residue_moisture; fate; destination | 将收获和移出质量与地块面积、种植周期核对；原始汇总与分配：分别汇总接收籽粒以及各残余物或损失去向 | kg; percent; ha | each harvest | complete crop cycle | all represented fields | 每声明的参考流 | scale or yield-monitor calibration; moisture records; destination evidence |
| `cp_quinoa_emission_activity` | `quinoa_field_production` | soil and crop emissions | nutrient, soil, weather, residue, drainage, and emission-model records | fertilizer_N; organic_N; residue_N; application_method; soil; climate; drainage; factor_set; model_version | 在同一兼容路线/产品/状态内，先逐田块核算应归属原始总量。汇总最终强度=应归属原始数量之和×声明参考量/匹配最终合格产出之和。来源为每公顷率 e_h、y_h 时，先以 e_h×面积、y_h×面积还原原始总量，不能再对田块总量作面积加权。每产品强度按匹配产出加权，不能按面积或不加权平均。原分配仅执行一次，保留期间/吞吐和全部来源单位换算，不兼容路线分开。 | kg N; kg emission; ha | each event and crop-cycle calculation | complete crop cycle | all represented fields | 每声明的参考流 | source records; factor provenance; model file; nutrient-balance review |
| `cp_quinoa_conditioning_records` | `quinoa_grain_conditioning` | incoming grain, energy, water, accepted grain, screenings, rejects | batch ticket, scale, moisture test, meter, fuel, and destination record | batch_id; incoming_mass; incoming_moisture; electricity; heat; water; accepted_mass; accepted_moisture; screenings; rejects | 将批次和计量器与接收输出核对；原始汇总与分配：汇总匹配批次；按时间或处理质量分配共享计量器；闭合湿质量平衡 | kg; percent; kWh; MJ; m3 | each batch or meter period | all pre-gate conditioning | all included equipment and batches | 每声明的参考流 | calibrated scales and moisture meters; meter reconciliation |
| `cp_declared_reference_handoff` | declared_reference_handoff | reference_product_at_declared_handoff | 交接计量与验收记录 | route, terminal_output_row_id, product_state, gate, lot, net_mass_kg, moisture_basis, acceptance, tare | 采用校准衡器或可追溯称重记录，将实际终端工序交接批次与验收净质量、产品状态及含水率对账；剔除包装皮重，不汇总前序阶段数量。 | kg | 每交接批次 | 声明报告期 | 声明交接门 | 每声明的参考流 | 校准或称重凭证、验收和批次追溯 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_area_to_reference_flow` | field flows | 每公顷种植周期量 / 每公顷可销售籽粒产量 × 1,000 kg | flow amount; area; same-cycle grain mass | amount per 1,000 kg grain |  |
| `calc_nutrient_content` | fertilizer and amendment inputs | 产品质量 × 声明养分比例；保留元素或氧化物等效基础 | product identity; mass; assay; reporting basis | kg N, kg P2O5, kg K2O by source |  |
| `calc_managed_soil_n2o` | soil N2O | 对肥料氮、有机氮、还田残余物氮、挥发和淋失路径采用选定的 IPCC 层级或区域方法 | nitrogen activity; residue fate; soil and climate; factors | kg N2O by pathway | `ipcc-2019-managed-soils` |
| `calc_ammonia_volatilization` | ammonia to air | 根据肥料类型、施用方式、时间和适用因子计算 | nitrogen product records; application details; factors | kg NH3 | `emep-eea-2023-guidebook` |
| `calc_conditioning_mass_balance` | grain conditioning | 进入湿籽粒 = 接收籽粒 + 有用筛下物 + 剔除物 + 水分及其他实测损失，且在不确定度内闭合 | masses; moisture; loss records | reconciled outputs per accepted grain | `mass-balance-identity` |
| `calc_dry_matter_conversion` | grain and residue | 按收到质量 ×（1 − 实测水分比例）= 干物质质量；同时保留两种基础 | mass; moisture result | as-received and dry-matter values | `fao-quinoa-cultivation-guide` |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | 最终基本交换使用已识别物质的质量和一个实际接收环境，养分／活动台账另存：该物种的 N2O-N × 44/28 为 N2O，NH3-N × 17/14 为 NH3，硝酸盐氮 × 62/14 为硝酸盐，磷酸盐磷 × 95/31 为磷酸盐。若选定流为元素磷，则报告 kg P，仅在物种口径有据时将磷酸盐质量乘 31/95。只有方法输出按元素计时才换算一次，实测化合物质量不得再换算。总养分损失不得无据归于单一物种，土壤残余／留存养分不是排放。保留直接／间接路径台账，不重复所选方法或上游清单已经包含的路径。因子不确定性范围只按其声明基准检查因子，不是最终化合物数量或场址排放的允许界限。用合格参考数量和匹配实测产出，将可归属化合物质量归一化一次。活动量、身份或接收环境未知时保留证据缺口，不得宣称完整。 | `cp_quinoa_emission_activity`; 物种特定活动量台账、方法路径和因子基准、匹配合格产出 | 按身份区分的交换和对账活动记录 |  |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 确认是藜麦而不是苋属、荞麦或混合籽粒；保留品种、用途、市场状态和交付信息。 | crop, lot, and sales records |
| `dq_temporal_alignment` | 所有前景行 | 使用同一种植周期的投入、收获、产量、残余物、排放和整理记录；披露代理年份。 | dated field and batch records |
| `dq_mass_and_moisture` | 籽粒和残余物 | 为每次基础换算保留秤或产量监测器校准记录和水分测量。 | calibration and moisture-test records |
| `dq_input_identity` | 种子、农药和改良剂 | 保留产品标签、制剂或有效成分、供应商、批次和施用事件；正式发布过程前解析 UUID。 | labels; certificates; invoices; identity review |
| `dq_completeness` | 过程图和流 | 核对每个代表地块和整理批次，并区分零值、不适用、代理值和缺失值。 | field roster; batch reconciliation |
| `dq_emission_method` | 基本流排放 | 披露方法层级、因子、土壤和气候输入、排水假设，以及数值是实测还是模型值。 | method version; factor provenance; model inputs |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_output` | 终端输出 | 缩放后必须只有一个终端藜麦籽粒输出且等于 1,000 kg，使用固定参考 UUID，并声明水分和质量限定信息。 |  |
| `validation_process_route` | 过程图 | 田间生产只纳入一次；整理仅在农场交付前发生时纳入，并避免重复计算内含的能源、水或剔除物。 |  |
| `validation_crop_cycle_reconciliation` | 田间清单 | 面积、投入、收获输出、残余物去向、损失和排放应对应同一种植周期和代表地块。 |  |
| `validation_nitrogen_balance` | 氮清单 | 用已披露的选定方法和因子核对养分含量、还田及移出残余物氮和排放路径。 | `ipcc-2019-managed-soils` |
| `validation_conditioning_balance` | 整理过程 | 在不确定度内核对进入湿籽粒与接收籽粒、筛下物、剔除物、水分损失和其他实测损失。 | `mass-balance-identity` |
| `validation_flow_identity` | 每个流 | 分别核验每种实际交换的具体流 UUID、物理状态、流属性和单位；未确认时明确保留未解析身份。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景藜麦籽粒生产数据集 |
| downstream_use | `secondary_dataset`；审查和发布后可作为 `background_dataset` |
| allowed_use | 以及保留所声明地理位置、水分、残余物、分配和整理背景的下游系统的农场交付藜麦籽粒 LCA |
| excluded_use | 认证种子、叶或饲草、爆米或脱壳产品、碾磨、食品或饲料制造，或没有经过审查代理决定的其他作物 |
| required_metadata | 地理位置；品种；收获年份；地块面积；产量；水分；用途；耕作；灌溉；种子；养分；农药；残余物去向；整理；分配；身份解析 |
| required_quality_disclosure | 前景覆盖；代理投入；缺失记录；范围超限；排放方法；计量器和质量平衡核对 |
| update_trigger | 新的经审查藜麦证据、重大路线变化、修订排放方法、具体流身份核验|

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-quinoa-cultivation-guide` | official_guidance | FAO, Guía de cultivo de la quínoa, https://www.fao.org/family-farming/detail/en/c/411552/ | 藜麦生长阶段、建植、收获和收获后背景 |
| `feedipedia-quinoa` | official_guidance | FAO Feedipedia, Quinoa (Chenopodium quinoa), https://feedipedia.org/node/229 | 作物身份、播种量背景、收获损失和产品状态背景 |
| `fao-56-crop-evapotranspiration` | official_guidance | FAO Irrigation and drainage paper 56, Crop evapotranspiration, https://www.fao.org/4/X0490E/X0490E00.htm | 灌溉测量和作物水分核算背景 |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 管理土壤 N2O、挥发和淋失路径、残余物氮及防重复计算 |
| `emep-eea-2023-guidebook` | method_factor | European Environment Agency, EMEP/EEA Air Pollutant Emission Inventory Guidebook 2023, https://www.eea.europa.eu/en/analysis/publications/emep-eea-guidebook-2023 | 农业氨和空气排放方法背景 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | 边界、分配层级和披露 |
| `mass-balance-identity` | method_factor | Conservation of mass applied to matched grain-conditioning batches | 整理质量平衡计算和校验 |

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `declared-handoff-measurement-definition` | `method_factor` | 本 PCR 第 3、6、8 节的净质量归一化定义：同一状态、同一交接门的实测净质量作为自身归一化分母，质量比为 1；交接计量不增加物理工序。 | 同阶段和交接计量恒等式；属于定义，不是实测产率、经验默认值或外部文献。 |
| `fao-fertilizer-identities` | official_guidance | FAO Fertilizer Specifications, https://www.fao.org/agriculture/crops/thematic-sitemap/theme/spi/plantnutrition/fertspecs/en/ | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `fao-organic-nutrients` | official_guidance | FAO How to Make and Use Compost, https://www.fao.org/4/i2230e/i2230e.pdf | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `route-energy-fao` | official_guidance | FAO, Energy-smart food for people and climate (2011), Annex 2; and Energy use in agriculture and industry, Annex IV. https://www.fao.org/4/i2454e/i2454e00.pdf ; https://www.fao.org/4/Q1085e/q1085e0d.htm | 仅支持设备及载能体可能性，适用性由现场记录确定；不采用能耗强度、燃料比例或默认组合。 |
