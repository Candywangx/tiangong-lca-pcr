---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.cane-sugar
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 甘蔗糖

## 1. 范围与适用性

本 PCR 适用于糖厂内未精炼甘蔗糖的前景生产，边界从收取采收后的甘蔗开始，经过蔗汁提取、澄清、蒸发、结晶、离心、干燥、冷却，直至散装出厂或按声明方式包装。产品范围为 CPC 3.0 代码 23511。若报告糖厂运行现场蒸汽与发电设施或现场废水处理设施，则须纳入；否则，购入公用工程和转移处理的废水须作为独立交换跨越前景边界。

甘蔗种植及入厂运输不属于前景过程图，但必须由可追溯的上游数据集表征。甜菜糖、精制糖、加香或着色糖，以及以糖浆或糖蜜为参考产品的情形均不在本 PCR 范围内。原糖生产之后的精炼阶段需要适用其他产品系统规则，不得隐含在本 PCR 内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.cane-sugar` |
| classification_refs | CPC 3.0 `23511` 甘蔗糖 |
| covered_products | 由部分纯化甘蔗汁结晶、未经后续精炼的部分纯化蔗糖；包括仍属于 CPC 23511 且已声明的原糖或耕地白糖路线。 |
| excluded_products | 甜菜糖；精制糖；加香或着色糖；液体糖和糖浆；以糖蜜为声明参考产品的产品；仅含种植的数据库。 |
| representative_product | 符合声明规格、离开糖厂的甘蔗糖。 |
| production_route | 甘蔗接收与预处理；压榨或扩散；蔗汁澄清；蒸发；结晶与离心；干燥与冷却；可选包装。 |
| market_state | 糖厂门口的散装或按声明方式包装的产品；须披露等级、水分或旋光度基准及包装状态。 |

Codex 对原蔗糖的定义仅用作产品身份和质量限定信息，不作为清单数量来源。CPC 范围决定分类；声明的产品规格决定数据集是否代表目标甘蔗糖等级。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 符合声明等级和规格、由甘蔗生产且未经后续精炼的甘蔗糖。 |
| How much | 糖厂门口 1 kg 符合规格甘蔗糖的净质量。 |
| How well | 声明等级或标准、旋光度或蔗糖基准、水分基准、相关颜色或路线限定，以及产品属于原糖、耕地白糖、散装还是包装。 |
| How long or cycle | 一个完整榨季或至少连续 12 个月且代表正常运行；披露停机和异常生产期。 |
| reference_flow_link | 过程 `sugar_finishing` 的输出行 `cane_sugar_output`。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 甘蔗糖；Tiangong UUID 未解决。 |
| 参考流属性 | 质量（`93a60a56-a3c8-11da-a746-0800200b9a66`） |
| 参考单位组 | 质量单位组（`93a60a57-a4c8-11da-a746-0800200c9a66`） |
| 参考单位 | kg |
| 必需限定信息 | 甘蔗来源区域及上游数据集；入厂甘蔗状态；声明的糖等级或规格；旋光度或蔗糖基准；水分基准；原糖或耕地白糖路线；亚硫酸法或其他澄清路线；散装或包装配置；场址、技术与榨季；公用工程配置；共产品去向与分配方法。 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `measure_reference_mass` | 甘蔗糖参考输出 | 质量 | kg | 使用经校准衡器确定符合规格产品的净质量，排除包装质量，并将全部交换归一化到恰好 1 kg。 |
| `measure_material_mass` | 甘蔗、化学品、燃料、产品、共产品、固体废物、污泥及空气或水排放 | 质量 | kg | 优先采用直接质量记录；否则须记录实测输入、密度或组成、换算公式和不确定性。 |
| `measure_water` | 工艺水、洗涤水、冷凝水和废水 | 体积或质量 | m3 或 kg | 原始记录保留计量单位；仅在记录密度和温度基准后换算。淡水、回收冷凝水和废水不得合并。 |
| `measure_electricity` | 外购、自产、消耗和外送电力 | 能量 | kWh | 使用结算级或经校准分表，并区分现场发电、内部消耗、输入和外送。 |
| `measure_thermal_energy` | 蒸汽和外购热 | 能量 | MJ | 根据实测质量流量、压力、温度、冷凝水状态和有记录的焓值计算；不得与燃料或电力合并。 |
| `measure_concentration_load` | 废水物质 | 质量 | kg | 根据时间匹配的处理后流量与浓度记录计算排放负荷；保留实测分析物身份和采样基准。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在糖厂门口收取并称量的已采收甘蔗。 |
| starting_condition_role | 前景糖厂系统的上游产品输入。 |
| product_classification_scope | 仅 CPC 3.0 `23511`。 |
| recursive_input_rule | 所有跨边界购入的材料、燃料、电力、热、水和包装组件均链接独立上游数据集；不得把这些上游过程递归纳入糖厂前景过程图。 |
| upstream_dataset_requirement | 甘蔗种植及运输、公用工程、化学品、燃料、包装和外部废物处理使用符合区域、技术和时间代表性的数据库。 |
| disclosure | 声明糖厂路线、内部回用、共产品去向、废水路线、锅炉或热电联产配置、外送能源及全部排除项。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_mill_gate` | 前景系统 | 纳入从甘蔗接收到符合规格糖出厂的全过程，以及服务于这些阶段的全部现场作业。 | `us-epa-ap42-cane-sugar-1997`, `ifc-sugar-manufacturing-ehs-2007` |
| `boundary_upstream_cane` | 甘蔗种植与运输 | 种植和入厂运输不纳入前景过程图，但须以可追溯上游数据集表征。 | `eu-pef-2021-2279` |
| `boundary_internal_recycling` | 甘蔗渣、冷凝水、水、蒸汽、电力及中间蔗汁或糖浆 | 一致建模内部转移，不得把同一内部回用流同时计作避免产品和外部输出。 | `eu-pef-2021-2279`, `ifc-sugar-manufacturing-ehs-2007` |
| `boundary_conditional_routes` | 热电联产、可选澄清化学品、包装和废水处理 | 仅在路线实际运行时纳入条件过程或交换；只有场址证据证明不适用时才记录 `not_applicable`。 | `us-epa-ap42-cane-sugar-1997`, `ifc-sugar-manufacturing-ehs-2007` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `cane_reception_extraction` | 甘蔗接收、清理、预处理与蔗汁提取 | `required` | 始终 | 接收甘蔗并分离原料甘蔗汁、甘蔗渣、清理残余物和废水。 | 转移至澄清的原料甘蔗汁净质量。 |
| `juice_clarification` | 蔗汁加热、澄清与过滤 | `required` | 始终 | 去除悬浮物和非糖物质，产出澄清蔗汁。 | 转移至蒸发的澄清蔗汁净质量。 |
| `juice_evaporation` | 多效蔗汁蒸发 | `required` | 始终 | 将澄清蔗汁浓缩为甘蔗糖浆。 | 转移至结晶的浓缩甘蔗糖浆净质量。 |
| `sugar_crystallization` | 真空煮糖结晶与离心 | `required` | 始终 | 分离湿甘蔗糖晶体和糖蜜。 | 转移至后处理的湿甘蔗糖晶体净质量。 |
| `sugar_finishing` | 干燥、冷却、分级及出厂或包装 | `required` | 始终 | 生产符合规格的参考产品。 | 1 kg 符合规格甘蔗糖净质量。 |
| `steam_power_generation` | 现场锅炉或热电联产 | `conditional` | 糖厂现场燃烧甘蔗渣或其他燃料时纳入。 | 供应蒸汽或电力，并核算燃料、灰渣和烟气排放。 | 向前景过程供应的蒸汽与电力净量。 |
| `wastewater_treatment` | 现场甘蔗糖厂废水处理 | `conditional` | 废水在报告场址内处理时纳入。 | 处理工艺废水，并核算出水、污泥和处理排放。 | 处理废水体积。 |

### 过程：甘蔗接收、清理、预处理与蔗汁提取（`cane_reception_extraction`）

#### 输入

##### 产品流

###### 入厂甘蔗（`sugar_cane_input`）

甘蔗跨越糖厂边界，是主要原料。记录地磅净质量，并链接有代表性的种植与入厂运输数据库。

- 选定流：甘蔗；Tiangong UUID 未解决。
- 流属性/单位：质量 / kg
- 数量规则：记录报告期入厂甘蔗净质量，并归一化到 1 kg 符合规格甘蔗糖。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_feed`
- 来源：`us-epa-ap42-cane-sugar-1997`

###### 甘蔗洗涤水（`cane_washing_water_input`）

本行仅表示提取前湿法清洗甘蔗所用淡水或供水。

- 选定流：甘蔗洗涤水
- 流属性/单位：体积 / m3
- 数量规则：采用湿法清理时记录实测用量；只有已记录干法清理路线时才标记不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_water_energy`
- 来源：`us-epa-ap42-cane-sugar-1997`, `ifc-sugar-manufacturing-ehs-2007`

###### 渗浸水（`imbibition_water_input`）

压榨或扩散过程中用于回收残余蔗糖的水须与甘蔗洗涤水分开。

- 选定流：渗浸水
- 流属性/单位：体积 / m3
- 数量规则：记录供应至提取工序的实测渗浸水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_water_energy`
- 来源：`us-epa-ap42-cane-sugar-1997`

###### 提取用电（`extraction_electricity_input`）

甘蔗输送、预处理、压榨或扩散用电作为单独公用工程交换。

- 选定流：糖厂中压电力
- 流属性/单位：能量 / kWh
- 数量规则：记录接收、预处理与提取的分表电耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_water_energy`
- 来源：`ifc-sugar-manufacturing-ehs-2007`

###### 提取用蒸汽（`extraction_steam_input`）

仅在路线实际使用提取调质蒸汽时记录。

- 选定流：糖厂工艺蒸汽
- 流属性/单位：能量 / MJ
- 数量规则：根据实测蒸汽质量和状态计算供应能量；未使用蒸汽时记录不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_water_energy`
- 来源：`ifc-sugar-manufacturing-ehs-2007`

#### 输出

##### 产品流

###### 原料甘蔗汁（`raw_cane_juice_output`）

提取的蔗汁作为内部产品流转移至澄清过程。

- 选定流：原料甘蔗汁（`db15cb0e-919a-4c23-a926-69509fef15e2`）
- 流属性/单位：质量 / kg
- 数量规则：记录实测原料甘蔗汁质量，或根据流量与密度记录计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_outputs`
- 来源：`us-epa-ap42-cane-sugar-1997`

###### 甘蔗渣（`bagasse_output`）

纤维残余物离开提取过程，进入内部燃料利用、销售或废物管理；其去向决定分配处理。

- 选定流：甘蔗渣（`f13cc16c-a598-48a2-b226-fdd991eac633`）
- 流属性/单位：质量 / kg
- 数量规则：按不同去向记录甘蔗渣质量与水分；内部锅炉进料不得同时计作外售共产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_outputs`
- 来源：`us-epa-ap42-cane-sugar-1997`, `ifc-sugar-manufacturing-ehs-2007`

##### 废物流

###### 清理产生的蔗叶（`cane_leaves_waste`）

接收环节去除的蔗叶和蔗梢应作为独立固体废物或回收生物质流记录。

- 选定流：糖厂甘蔗清理产生的蔗叶
- 流属性/单位：质量 / kg
- 数量规则：按去向记录实测质量；除非有已记录的有用产品去向，否则分类为废物。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_outputs`
- 来源：`ifc-sugar-manufacturing-ehs-2007`

###### 甘蔗清理土壤（`cane_cleaning_soil_waste`）

从入厂甘蔗去除的土壤不得与蔗叶或废水固体合并。

- 选定流：甘蔗清理产生的土壤
- 流属性/单位：质量 / kg
- 数量规则：记录收集土壤质量和处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_outputs`
- 来源：`ifc-sugar-manufacturing-ehs-2007`

###### 甘蔗洗涤废水（`cane_washing_wastewater_output`）

湿法清理废水作为具体废水流转移至处理或场外管理。

- 选定流：甘蔗洗涤废水
- 流属性/单位：体积 / m3
- 数量规则：采用湿法清理时，按去向记录实测排放体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_outputs`
- 来源：`ifc-sugar-manufacturing-ehs-2007`

### 过程：蔗汁加热、澄清与过滤（`juice_clarification`）

#### 输入

##### 产品流

###### 原料甘蔗汁（`raw_cane_juice_input`）

扣除已记录的库存变化或损失后，本内部转移须与提取输出匹配。

- 选定流：原料甘蔗汁（`db15cb0e-919a-4c23-a926-69509fef15e2`）
- 流属性/单位：质量 / kg
- 数量规则：记录澄清过程收到的原料甘蔗汁，并与 `raw_cane_juice_output` 核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_clarification_inputs`
- 来源：`us-epa-ap42-cane-sugar-1997`

###### 熟石灰（`hydrated_lime_input`）

用于调节 pH 并辅助澄清的石灰作为独立化学品输入记录。

- 选定流：熟石灰（`0ef11ca4-62b6-4a66-b5d9-76d6539ec86e`）
- 流属性/单位：质量 / kg
- 数量规则：根据批次或加药记录，记录干基熟石灰质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_clarification_inputs`
- 来源：`us-epa-ap42-cane-sugar-1997`

###### 磷酸（`phosphoric_acid_input`）

仅在澄清路线实际投加磷酸时纳入。

- 选定流：磷酸，纯物质
- 流属性/单位：质量 / kg
- 数量规则：根据溶液浓度与实测加药量记录有效物质质量；否则记录不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_clarification_inputs`
- 来源：`us-epa-ap42-cane-sugar-1997`

###### 二氧化硫（`sulfur_dioxide_clarification_input`）

亚硫酸法澄清所用二氧化硫须与燃烧排放的二氧化硫区分。

- 选定流：二氧化硫，澄清剂
- 流属性/单位：质量 / kg
- 数量规则：采用亚硫酸法时记录供给蔗汁的有效二氧化硫质量；否则记录不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_clarification_inputs`
- 来源：`us-epa-ap42-cane-sugar-1997`

###### 聚丙烯酰胺絮凝剂（`clarification_flocculant_input`）

仅在投加时纳入聚合物絮凝剂，不得与石灰或磷酸合并。

- 选定流：聚丙烯酰胺絮凝剂
- 流属性/单位：质量 / kg
- 数量规则：根据浓度和加药记录计算有效聚合物质量；否则记录不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_clarification_inputs`
- 来源：`us-epa-ap42-cane-sugar-1997`

###### 澄清用蒸汽（`clarification_steam_input`）

蔗汁加热蒸汽须与电力和燃料分开记录。

- 选定流：糖厂工艺蒸汽
- 流属性/单位：能量 / MJ
- 数量规则：根据实测蒸汽质量和热力状态计算蒸汽能量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_clarification_utilities`
- 来源：`us-epa-ap42-cane-sugar-1997`

###### 澄清用电（`clarification_electricity_input`）

加热器、泵、澄清器、过滤器和辅助设备用电单独记录。

- 选定流：糖厂中压电力
- 流属性/单位：能量 / kWh
- 数量规则：记录澄清过程分表电耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_clarification_utilities`
- 来源：`ifc-sugar-manufacturing-ehs-2007`

###### 滤饼洗涤水（`filter_wash_water_input`）

澄清滤饼洗涤用水须与其他工艺水分开。

- 选定流：澄清滤饼洗涤水
- 流属性/单位：体积 / m3
- 数量规则：采用滤饼洗涤时记录实测用水；否则记录不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_clarification_utilities`
- 来源：`us-epa-ap42-cane-sugar-1997`

#### 输出

##### 产品流

###### 澄清蔗汁（`clarified_cane_juice_output`）

澄清蔗汁作为内部产品流转移至蒸发过程。

- 选定流：澄清蔗汁（`9d68309c-8623-4e3a-b9c7-ee9c11007ed5`）
- 流属性/单位：质量 / kg
- 数量规则：记录实测澄清蔗汁质量，或根据流量和密度计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_clarification_outputs`
- 来源：`us-epa-ap42-cane-sugar-1997`

###### 甘蔗滤饼共产品（`filter_cake_product_output`）

仅对具有已记录的有用去向及市场或替代功能的滤饼使用本产品行。

- 选定流：甘蔗滤饼（压滤泥）
- 流属性/单位：质量 / kg
- 数量规则：记录湿质量、水分、干质量和有用去向；同一质量不得同时报告为废物。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_clarification_outputs`
- 来源：`ifc-sugar-manufacturing-ehs-2007`

##### 废物流

###### 甘蔗滤饼废物（`filter_cake_waste_output`）

仅对送往处置或废物处理的滤饼使用本行。

- 选定流：甘蔗滤饼废物
- 流属性/单位：质量 / kg
- 数量规则：记录湿质量、水分、干质量和处理去向；同一质量不得同时报告为产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_clarification_outputs`
- 来源：`ifc-sugar-manufacturing-ehs-2007`

### 过程：多效蔗汁蒸发（`juice_evaporation`）

#### 输入

##### 产品流

###### 澄清蔗汁（`clarified_cane_juice_input`）

进入蒸发过程的澄清蔗汁须与前一过程输出核对。

- 选定流：澄清蔗汁（`9d68309c-8623-4e3a-b9c7-ee9c11007ed5`）
- 流属性/单位：质量 / kg
- 数量规则：记录转移质量并核对库存变化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_evaporation_records`
- 来源：`us-epa-ap42-cane-sugar-1997`

###### 蒸发用蒸汽（`evaporation_steam_input`）

多效蒸发器用蒸汽作为单独热力交换。

- 选定流：糖厂工艺蒸汽
- 流属性/单位：能量 / MJ
- 数量规则：根据实测蒸汽质量和热力状态计算能量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_evaporation_records`
- 来源：`us-epa-ap42-cane-sugar-1997`

###### 蒸发用电（`evaporation_electricity_input`）

泵、真空系统及蒸发辅助设备用电单独记录。

- 选定流：糖厂中压电力
- 流属性/单位：能量 / kWh
- 数量规则：记录蒸发过程分表电耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_evaporation_records`
- 来源：`ifc-sugar-manufacturing-ehs-2007`

#### 输出

##### 产品流

###### 浓缩甘蔗糖浆（`concentrated_cane_syrup_output`）

浓缩糖浆作为内部产品流转移至结晶过程。

- 选定流：浓缩甘蔗糖浆（`38f69d10-beb9-44de-a39f-e9c6bb39be5a`）
- 流属性/单位：质量 / kg
- 数量规则：记录糖浆质量，或根据实测流量、密度和固形物浓度计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_evaporation_records`
- 来源：`us-epa-ap42-cane-sugar-1997`

###### 回收工艺冷凝水（`evaporation_condensate_output`）

内部回用或排放的冷凝水作为独立水产品流跟踪。

- 选定流：回收工艺冷凝水
- 流属性/单位：体积 / m3
- 数量规则：按回用或排放去向记录实测冷凝水体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_evaporation_records`
- 来源：`ifc-sugar-manufacturing-ehs-2007`

### 过程：真空煮糖结晶与离心（`sugar_crystallization`）

#### 输入

##### 产品流

###### 浓缩甘蔗糖浆（`concentrated_cane_syrup_input`）

结晶过程收到的糖浆须与蒸发器输出核对。

- 选定流：浓缩甘蔗糖浆（`38f69d10-beb9-44de-a39f-e9c6bb39be5a`）
- 流属性/单位：质量 / kg
- 数量规则：记录转移糖浆质量并核对库存变化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crystallization_records`
- 来源：`us-epa-ap42-cane-sugar-1997`

###### 结晶用蒸汽（`crystallization_steam_input`）

真空煮糖罐用蒸汽须与电力和燃料分开记录。

- 选定流：糖厂工艺蒸汽
- 流属性/单位：能量 / MJ
- 数量规则：根据实测蒸汽质量和热力状态计算能量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crystallization_records`
- 来源：`us-epa-ap42-cane-sugar-1997`

###### 结晶用电（`crystallization_electricity_input`）

真空、搅拌、离心机和辅助设备用电作为独立交换。

- 选定流：糖厂中压电力
- 流属性/单位：能量 / kWh
- 数量规则：记录结晶与离心过程分表电耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crystallization_records`
- 来源：`ifc-sugar-manufacturing-ehs-2007`

###### 糖晶洗涤水（`crystal_wash_water_input`）

离心机内洗涤糖晶的水须与其他工艺水分开。

- 选定流：甘蔗糖晶体洗涤水
- 流属性/单位：体积 / m3
- 数量规则：记录供给离心机的实测洗涤水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crystallization_records`
- 来源：`us-epa-ap42-cane-sugar-1997`

###### 晶种糖（`seed_sugar_input`）

外部供应或未计入内部循环的结晶晶种糖应予记录。

- 选定流：甘蔗糖结晶晶种糖
- 流属性/单位：质量 / kg
- 数量规则：记录外部供应的晶种糖净质量；排除已计入产品质量的封闭内部循环。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crystallization_records`
- 来源：`us-epa-ap42-cane-sugar-1997`

###### 异丙醇（`isopropyl_alcohol_input`）

制备晶种浆所用异丙醇为条件输入，不得与晶种糖合并。

- 选定流：异丙醇
- 流属性/单位：质量 / kg
- 数量规则：用于制备晶种时记录纯物质质量；否则记录不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crystallization_records`
- 来源：`us-epa-ap42-cane-sugar-1997`

#### 输出

##### 产品流

###### 湿甘蔗糖晶体（`wet_cane_sugar_output`）

湿糖晶作为内部产品流转移至干燥与冷却过程。

- 选定流：湿甘蔗糖晶体
- 流属性/单位：质量 / kg
- 数量规则：记录转移至后处理的湿糖晶质量和水分。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crystallization_records`
- 来源：`us-epa-ap42-cane-sugar-1997`

###### 糖蜜（`molasses_output`）

离心分离的最终糖蜜作为独立产品或残余物流，其去向决定分配处理。

- 选定流：糖蜜（`dcc60867-03df-4ea1-be73-6d88987911bd`）
- 流属性/单位：质量 / kg
- 数量规则：记录质量、固形物或水分基准及去向；不得与废水合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crystallization_records`
- 来源：`us-epa-ap42-cane-sugar-1997`, `ifc-sugar-manufacturing-ehs-2007`

##### 废物流

###### 结晶与离心废水（`crystallization_wastewater_output`）

煮糖罐清洗、离心或洗糖废水作为具体废水流转移。

- 选定流：结晶与离心废水
- 流属性/单位：体积 / m3
- 数量规则：按去向记录实测废水；排除已单独报告的冷凝水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crystallization_records`
- 来源：`ifc-sugar-manufacturing-ehs-2007`

### 过程：干燥、冷却、分级及出厂或包装（`sugar_finishing`）

#### 输入

##### 产品流

###### 湿甘蔗糖晶体（`wet_cane_sugar_input`）

后处理接收的湿糖晶须与结晶输出核对。

- 选定流：湿甘蔗糖晶体
- 流属性/单位：质量 / kg
- 数量规则：记录湿糖晶接收质量和水分，并核对库存变化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`us-epa-ap42-cane-sugar-1997`

###### 后处理用电（`finishing_electricity_input`）

干燥风机、冷却、分级、输送和包装用电单独记录。

- 选定流：糖厂中压电力
- 流属性/单位：能量 / kWh
- 数量规则：记录后处理分表电耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`ifc-sugar-manufacturing-ehs-2007`

###### 后处理用蒸汽（`finishing_steam_input`）

用于糖干燥的蒸汽为条件输入，须与外购热分开。

- 选定流：糖厂工艺蒸汽
- 流属性/单位：能量 / MJ
- 数量规则：根据实测质量和热力状态计算蒸汽能量；否则记录不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`us-epa-ap42-cane-sugar-1997`

###### 外购干燥热（`purchased_drying_heat_input`）

仅在外部供应时报告外购热，不得与现场蒸汽合并。

- 选定流：甘蔗糖干燥用外购工艺热
- 流属性/单位：能量 / MJ
- 数量规则：记录实测外购热；否则记录不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`ifc-sugar-manufacturing-ehs-2007`

###### 牛皮纸糖袋（`kraft_sack_input`）

牛皮纸袋是一个包装组件，仅在声明包装配置使用时纳入。

- 选定流：甘蔗糖用牛皮纸袋
- 流属性/单位：质量 / kg
- 数量规则：使用时记录消耗纸袋净质量及已记录的生产损耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_packaging`
- 来源：`eu-pef-2021-2279`

###### 聚丙烯编织糖袋（`polypropylene_sack_input`）

聚丙烯编织袋须与纸袋和内衬分开记录。

- 选定流：甘蔗糖用聚丙烯编织袋
- 流属性/单位：质量 / kg
- 数量规则：使用时记录消耗编织袋净质量及已记录的生产损耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_packaging`
- 来源：`eu-pef-2021-2279`

###### 聚乙烯内衬（`polyethylene_liner_input`）

袋内聚乙烯内衬是独立包装组件。

- 选定流：甘蔗糖袋用聚乙烯内衬
- 流属性/单位：质量 / kg
- 数量规则：使用时记录消耗内衬净质量及已记录的生产损耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_packaging`
- 来源：`eu-pef-2021-2279`

#### 输出

##### 产品流

###### 甘蔗糖参考产品（`cane_sugar_output`）

这是唯一参考产品流，其净质量不包含包装质量。

- 选定流：甘蔗糖；Tiangong UUID 未解决。
- 流属性/单位：质量（`93a60a56-a3c8-11da-a746-0800200b9a66`）/ kg；单位组为质量单位组（`93a60a57-a4c8-11da-a746-0800200c9a66`）
- 数量规则：以报告期符合规格甘蔗糖净产量归一化全部交换后，设为恰好 1 kg。
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份参考（`identity_reference`）
- 采集协议：`cp_finishing_records`
- 来源：`unsd-cpc-3-0`, `codex-cxs-212-1999`

##### 废物流

###### 不合格甘蔗糖（`off_spec_sugar_waste`）

未循环回实测生产系统的不合格糖须与参考产品分开记录。

- 选定流：不合格甘蔗糖废物
- 流属性/单位：质量 / kg
- 数量规则：按循环、回收或处置去向记录净质量；排除已核对的内部循环。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-pef-2021-2279`

###### 废牛皮纸袋（`waste_kraft_sack_output`）

牛皮纸袋包装损耗作为独立废物交换。

- 选定流：废牛皮纸袋
- 流属性/单位：质量 / kg
- 数量规则：使用纸袋时记录废物质量和处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_packaging`
- 来源：`eu-pef-2021-2279`

###### 废聚丙烯编织袋（`waste_polypropylene_sack_output`）

聚丙烯编织袋损耗不得与纸或聚乙烯废物合并。

- 选定流：废聚丙烯编织袋
- 流属性/单位：质量 / kg
- 数量规则：使用聚丙烯编织袋时记录废物质量和处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_packaging`
- 来源：`eu-pef-2021-2279`

###### 废聚乙烯内衬（`waste_polyethylene_liner_output`）

聚乙烯内衬损耗作为独立废物交换。

- 选定流：废聚乙烯内衬
- 流属性/单位：质量 / kg
- 数量规则：使用内衬时记录废物质量和处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_packaging`
- 来源：`eu-pef-2021-2279`

##### 基本流

###### 小于 10 微米颗粒物（`finishing_pm10_to_air`）

干燥、冷却、输送或包装除尘后的糖尘以 PM10 空气排放报告。

- 选定流：颗粒物，小于 10 微米，排放至空气
- 流属性/单位：质量 / kg
- 数量规则：采用烟道或工作场所排风实测值换算排放负荷；若计算，须披露风量、浓度、治理和运行时间。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_air`
- 来源：`us-epa-ap42-cane-sugar-1997`, `ifc-sugar-manufacturing-ehs-2007`

### 过程：现场锅炉或热电联产（`steam_power_generation`）

#### 输入

##### 产品流

###### 锅炉燃料甘蔗渣（`bagasse_fuel_input`）

现场燃烧的甘蔗渣属于内部产品转移，须与提取输出中分配给锅炉的份额匹配。

- 选定流：甘蔗渣（`f13cc16c-a598-48a2-b226-fdd991eac633`）
- 流属性/单位：质量 / kg
- 数量规则：记录送入锅炉的收到基质量和水分，并与 `bagasse_output` 核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_fuels`
- 来源：`ifc-sugar-manufacturing-ehs-2007`

###### 天然气（`natural_gas_input`）

天然气为条件化石燃料，不得与燃油或生物质合并。

- 选定流：糖厂锅炉燃烧的天然气
- 流属性/单位：能量 / MJ
- 数量规则：使用时记录实测低位热值能量；否则记录不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_fuels`
- 来源：`ifc-sugar-manufacturing-ehs-2007`

###### 燃料油（`fuel_oil_input`）

锅炉燃烧或启动所用燃料油作为独立燃料交换。

- 选定流：糖厂锅炉燃烧的重质燃料油
- 流属性/单位：质量 / kg
- 数量规则：使用时记录供给质量和热值；否则记录不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_fuels`
- 来源：`ifc-sugar-manufacturing-ehs-2007`

###### 柴油（`diesel_input`）

锅炉启动用柴油须与本过程之外移动设备用柴油分开。

- 选定流：糖厂锅炉燃烧的柴油
- 流属性/单位：质量 / kg
- 数量规则：使用时记录锅炉消耗质量；否则记录不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_fuels`
- 来源：`ifc-sugar-manufacturing-ehs-2007`

###### 煤（`coal_input`）

仅在糖厂实际燃烧煤时纳入，不得与甘蔗渣或液体燃料合并。

- 选定流：糖厂锅炉燃烧的煤
- 流属性/单位：质量 / kg
- 数量规则：使用时记录收到基质量、水分和热值；否则记录不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_fuels`
- 来源：`ifc-sugar-manufacturing-ehs-2007`

###### 锅炉给水（`boiler_feedwater_input`）

锅炉补给水和处理给水须与工艺水和洗涤水分开。

- 选定流：锅炉给水
- 流属性/单位：体积 / m3
- 数量规则：记录扣除返回冷凝水后供应至锅炉系统的实测补水量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_fuels`
- 来源：`ifc-sugar-manufacturing-ehs-2007`

#### 输出

##### 产品流

###### 产出蒸汽（`generated_steam_output`）

供应前景过程的蒸汽为内部产品流；外送蒸汽须按去向另行披露。

- 选定流：糖厂工艺蒸汽
- 流属性/单位：能量 / MJ
- 数量规则：根据蒸汽质量流量和热力状态，扣除锅炉房自用后计算净供应能量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_outputs`
- 来源：`ifc-sugar-manufacturing-ehs-2007`

###### 产出电力（`generated_electricity_output`）

总发电、内部用电、输入电量和外送电量须分别计量。

- 选定流：糖厂现场发电
- 流属性/单位：能量 / kWh
- 数量规则：记录供应前景过程的净电量，并单独披露外送电量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_outputs`
- 来源：`ifc-sugar-manufacturing-ehs-2007`

##### 废物流

###### 锅炉灰（`boiler_ash_output`）

离开锅炉或颗粒物治理设施的灰渣作为独立固体废物或有用产品流。

- 选定流：糖厂锅炉灰
- 流属性/单位：质量 / kg
- 数量规则：按去向记录干湿质量；仅在有证据支持有用去向时分类为产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_outputs`
- 来源：`ifc-sugar-manufacturing-ehs-2007`

##### 基本流

###### 生物源二氧化碳（`biogenic_carbon_dioxide_to_air`）

甘蔗渣碳产生的二氧化碳须与化石二氧化碳分开报告。

- 选定流：二氧化碳，生物源，排放至空气
- 流属性/单位：质量 / kg
- 数量规则：采用实测碳含量与氧化平衡，或对实测甘蔗渣燃烧量应用已披露的权威因子。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stack_emissions`
- 来源：`ifc-sugar-manufacturing-ehs-2007`

###### 化石二氧化碳（`fossil_carbon_dioxide_to_air`）

天然气、燃料油、柴油或煤产生的二氧化碳须与生物源二氧化碳分开。

- 选定流：二氧化碳，化石源，排放至空气
- 流属性/单位：质量 / kg
- 数量规则：按燃料根据实测消耗、碳含量和氧化率计算或直接测量；仅在保留燃料分项记录后求和。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stack_emissions`
- 来源：`ifc-sugar-manufacturing-ehs-2007`

###### 燃烧甲烷（`combustion_methane_to_air`）

固定燃烧产生的未燃甲烷作为独立基本流报告。

- 选定流：甲烷，排放至空气
- 流属性/单位：质量 / kg
- 数量规则：采用直接测量，或将已披露的燃料与设备特定因子应用于实测燃料用量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stack_emissions`
- 来源：`ifc-sugar-manufacturing-ehs-2007`

###### 燃烧一氧化二氮（`combustion_nitrous_oxide_to_air`）

一氧化二氮不得与一氧化氮或二氧化氮合并。

- 选定流：一氧化二氮，排放至空气
- 流属性/单位：质量 / kg
- 数量规则：采用直接测量，或将已披露的燃料与设备特定因子应用于实测燃料用量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stack_emissions`
- 来源：`ifc-sugar-manufacturing-ehs-2007`

###### 一氧化碳（`carbon_monoxide_to_air`）

锅炉燃烧产生的一氧化碳作为独立基本流。

- 选定流：一氧化碳，排放至空气
- 流属性/单位：质量 / kg
- 数量规则：采用烟气实测，或将已披露的燃料和锅炉特定因子应用于实测燃料用量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stack_emissions`
- 来源：`us-epa-ap42-cane-sugar-1997`, `ifc-sugar-manufacturing-ehs-2007`

###### 一氧化氮（`nitrogen_monoxide_to_air`）

实测或计算的一氧化氮须与二氧化氮分开报告。

- 选定流：一氧化氮，排放至空气
- 流属性/单位：质量 / kg
- 数量规则：采用物种分离的烟气实测，或以已记录物种分配基准从氮氧化物实测值换算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stack_emissions`
- 来源：`us-epa-ap42-cane-sugar-1997`, `ifc-sugar-manufacturing-ehs-2007`

###### 二氧化氮（`nitrogen_dioxide_to_air`）

实测或计算的二氧化氮须与一氧化氮分开报告。

- 选定流：二氧化氮，排放至空气
- 流属性/单位：质量 / kg
- 数量规则：采用物种分离的烟气实测，或以已记录物种分配基准从氮氧化物实测值换算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stack_emissions`
- 来源：`us-epa-ap42-cane-sugar-1997`, `ifc-sugar-manufacturing-ehs-2007`

###### 燃烧二氧化硫（`combustion_sulfur_dioxide_to_air`）

燃烧产生的二氧化硫须与澄清剂二氧化硫区分。

- 选定流：二氧化硫，排放至空气
- 流属性/单位：质量 / kg
- 数量规则：采用烟气实测，或根据实测燃料硫、滞留率和治理效率计算并披露基准。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stack_emissions`
- 来源：`us-epa-ap42-cane-sugar-1997`, `ifc-sugar-manufacturing-ehs-2007`

###### 锅炉小于 10 微米颗粒物（`boiler_pm10_to_air`）

治理设施后的 PM10 须与糖干燥粉尘分开报告。

- 选定流：颗粒物，小于 10 微米，排放至空气
- 流属性/单位：质量 / kg
- 数量规则：采用烟气实测，或将已披露的燃料、锅炉和治理特定因子应用于实测燃料用量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stack_emissions`
- 来源：`us-epa-ap42-cane-sugar-1997`, `ifc-sugar-manufacturing-ehs-2007`

### 过程：现场甘蔗糖厂废水处理（`wastewater_treatment`）

#### 输入

##### 废物流

###### 甘蔗糖厂工艺废水（`mill_wastewater_input`）

本行接收扣除内部回用后的合并实测工艺废水。

- 选定流：甘蔗糖厂工艺废水
- 流属性/单位：体积 / m3
- 数量规则：按来源记录进水体积，并与前景过程的废水转移总量核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`ifc-sugar-manufacturing-ehs-2007`

##### 产品流

###### 废水处理用电（`wastewater_electricity_input`）

泵送、曝气、混合和脱水用电单独记录。

- 选定流：糖厂中压电力
- 流属性/单位：能量 / kWh
- 数量规则：记录处理系统分表读数。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`ifc-sugar-manufacturing-ehs-2007`

###### 氢氧化钠（`wastewater_sodium_hydroxide_input`）

废水 pH 调节用氢氧化钠为条件化学品输入。

- 选定流：氢氧化钠，纯物质
- 流属性/单位：质量 / kg
- 数量规则：根据溶液浓度和实测加药量记录有效物质质量；否则记录不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`ifc-sugar-manufacturing-ehs-2007`

###### 废水处理絮凝剂（`wastewater_flocculant_input`）

沉淀或污泥脱水用絮凝剂须与蔗汁澄清絮凝剂分开。

- 选定流：废水处理用聚丙烯酰胺絮凝剂
- 流属性/单位：质量 / kg
- 数量规则：根据浓度和加药记录计算有效聚合物质量；否则记录不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`ifc-sugar-manufacturing-ehs-2007`

#### 输出

##### 产品流

###### 内部回用处理水（`treated_water_reuse_output`）

现场回用的处理水为内部产品流，不得同时计作地表水排放。

- 选定流：糖厂内部回用处理水
- 流属性/单位：体积 / m3
- 数量规则：记录返回至已识别前景用途的实测处理水体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`ifc-sugar-manufacturing-ehs-2007`

##### 废物流

###### 废水处理污泥（`wastewater_sludge_output`）

污泥须与澄清滤饼和锅炉灰分开记录。

- 选定流：甘蔗糖厂废水处理污泥
- 流属性/单位：质量 / kg
- 数量规则：记录湿质量、干固体及处理或有用去向；避免与滤饼重复。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`ifc-sugar-manufacturing-ehs-2007`

##### 基本流

###### 废水处理甲烷（`wastewater_methane_to_air`）

厌氧处理释放且未捕集燃烧的甲烷须纳入。

- 选定流：甲烷，排放至空气
- 流属性/单位：质量 / kg
- 数量规则：分别测量捕集和排放气体，或对实测有机负荷应用已披露的处理特定算法；非厌氧路线则记录不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_emissions`
- 来源：`ifc-sugar-manufacturing-ehs-2007`

###### 废水处理生物源二氧化碳（`wastewater_biogenic_co2_to_air`）

生物处理释放的生物源二氧化碳须与化石燃烧排放分开。

- 选定流：二氧化碳，生物源，排放至空气
- 流属性/单位：质量 / kg
- 数量规则：采用实测气体流量与组成，或基于实测废水负荷的已披露碳平衡。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_emissions`
- 来源：`ifc-sugar-manufacturing-ehs-2007`

###### 排放至地表水的化学需氧量（`cod_to_water`）

残余化学需氧量为受监测水排放；存在物种数据时不能替代具体物质。

- 选定流：化学需氧量，排放至地表水
- 流属性/单位：质量 / kg
- 数量规则：将时间匹配的处理后出水体积乘以实验室 COD 浓度并换算为 kg 排放量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_emissions`
- 来源：`ifc-sugar-manufacturing-ehs-2007`

###### 排放至地表水的硝酸盐（`nitrate_to_water`）

只有实测或分析推导为硝酸盐时才报告；不得把总氮改名为硝酸盐。

- 选定流：硝酸盐，排放至地表水
- 流属性/单位：质量 / kg
- 数量规则：将时间匹配的出水体积乘以实测硝酸盐浓度并换算为 kg；否则保持未解决，不得由总氮推断。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_emissions`
- 来源：`ifc-sugar-manufacturing-ehs-2007`

###### 排放至地表水的磷酸盐（`phosphate_to_water`）

只有实测或分析推导为磷酸盐时才报告；不得把总磷改名为磷酸盐。

- 选定流：磷酸盐，排放至地表水
- 流属性/单位：质量 / kg
- 数量规则：将时间匹配的出水体积乘以实测磷酸盐浓度并换算为 kg；否则保持未解决，不得由总磷推断。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_emissions`
- 来源：`ifc-sugar-manufacturing-ehs-2007`

###### 排放至地表水的悬浮物（`suspended_solids_to_water`）

残余悬浮物根据时间匹配的处理后出水体积与实验室浓度计算。

- 选定流：悬浮物，排放至地表水
- 流属性/单位：质量 / kg
- 数量规则：将时间匹配的处理后出水体积乘以实测悬浮物浓度并换算为 kg 排放量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 甘蔗糖参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_emissions`
- 来源：`ifc-sugar-manufacturing-ehs-2007`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 多输出糖厂与公用工程过程 | 首先在技术可行且有可追溯数据支持时进行过程细分或系统扩展。 | `eu-pef-2021-2279` |
| `allocation_co_product_status` | 甘蔗渣、糖蜜、滤饼、灰、外送蒸汽和外送电力 | 分别判断各去向属于内部回用、具有有用功能的产品还是废物；不得为废物分配共产品抵扣或份额。 | `ifc-sugar-manufacturing-ehs-2007`, `eu-pef-2021-2279` |
| `allocation_physical_relation` | 剩余不可分共产品 | 无法细分或系统扩展时，采用能够反映输入与排放随共产品输出变化的物理因果关系；不得自动采用质量分配。 | `eu-pef-2021-2279` |
| `allocation_other_relation` | 缺乏可辩护物理关系的共产品 | 仅在证明前述选项不可行后，采用经济价值等其他已记录关系；披露价格、区域、期间、币种、平均方法及敏感性。 | `eu-pef-2021-2279` |
| `allocation_exported_energy` | 外送蒸汽或电力 | 区分内部供应与外送；一致应用系统扩展或所选分配关系，并披露任何替代数据库；不得抵扣总发电量。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色 | 记录类型 | 原始字段 | 采集方法 | 单位 | 频率 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_extraction_feed` | `cane_reception_extraction` | 入厂甘蔗 | 地磅记录 | 车辆毛重；皮重；甘蔗净重；供应方；田块或区域；接收时间 | 经校准地磅和交付核对 | kg | 每车 | 完整榨季或至少连续 12 个月 | 报告糖厂全部甘蔗接收点 | 汇总验收净质量；另行标记拒收批次 | 校准证书；交付台账；核对记录 |
| `cp_extraction_water_energy` | `cane_reception_extraction` | 水、电力与蒸汽 | 仪表与运行记录 | 仪表期初/期末；路线；蒸汽状态；停机时间 | 经校准仪表并与运行时数匹配 | 行单位 | 每班或每日 | 与参考输出相同期间 | 接收、预处理、压榨或扩散 | 按原子交换汇总；仅扣除已记录回流 | 仪表台账；路线图；运行日志 |
| `cp_extraction_outputs` | `cane_reception_extraction` | 蔗汁、甘蔗渣、残余物与废水 | 衡器、流量计、水分与去向记录 | 质量或体积；密度；水分；去向；库存变化 | 经校准衡器或流量计及实验室分析 | 行单位 | 每班或每日 | 与参考输出相同期间 | 提取与清理 | 按交换与去向汇总；核对质量和库存 | 校准；实验室结果；去向票据 |
| `cp_clarification_inputs` | `juice_clarification` | 蔗汁与澄清化学品 | 批次、加药与转移记录 | 蔗汁流量；化学品采购；浓度；剂量；路线 | 实测转移与经校准加药设备 | 行单位 | 每批或每班 | 与参考输出相同期间 | 澄清与过滤 | 按规定将溶液换算为有效物质质量 | 加药校准；分析证书；路线日志 |
| `cp_clarification_utilities` | `juice_clarification` | 蒸汽、电力与滤饼洗水 | 仪表记录 | 能量或体积；蒸汽状态；运行时间 | 分表与蒸汽平衡 | 行单位 | 每班或每日 | 与参考输出相同期间 | 澄清与过滤 | 按原子公用工程汇总 | 仪表校准；蒸汽平衡 |
| `cp_clarification_outputs` | `juice_clarification` | 澄清蔗汁与滤饼 | 流量、质量、水分与去向记录 | 蔗汁流量；密度；滤饼湿质量；干固体；去向 | 经校准流量计或衡器及实验室分析 | kg | 每班或每日 | 与参考输出相同期间 | 澄清与过滤 | 按去向汇总；禁止产品/废物重复 | 实验室结果；出货或废物记录；平衡 |
| `cp_evaporation_records` | `juice_evaporation` | 蔗汁、糖浆、冷凝水、蒸汽和电力 | 仪表与实验室记录 | 流量；密度；固形物；冷凝水去向；能量 | 经校准仪表和固形物分析 | 行单位 | 每班或每日 | 与参考输出相同期间 | 蒸发工段 | 按原子交换汇总并核对可溶性固形物 | 校准；实验室记录；蒸发平衡 |
| `cp_crystallization_records` | `sugar_crystallization` | 糖浆、公用工程、晶种材料、糖晶、糖蜜和废水 | 批次、仪表、衡器与实验室记录 | 批次质量；能量；水；晶种；糖晶水分；糖蜜固形物；废水 | 经校准批次系统、仪表、衡器和实验室分析 | 行单位 | 每批或每班 | 与参考输出相同期间 | 真空煮糖与离心工段 | 按原子交换汇总并核对糖固形物 | 批次单；校准；实验室结果 |
| `cp_finishing_records` | `sugar_finishing` | 湿糖、公用工程、成品糖和不合格糖 | 衡器、仪表、等级与发运记录 | 输入质量与水分；能量；合格质量；不合格质量；等级 | 经校准衡器与仪表；产品实验室检验 | 行单位 | 每批或每班 | 完整榨季或至少连续 12 个月 | 干燥、冷却、分级、筒仓和发运 | 合格糖净质量不含包装；核对不合格品与库存 | 衡器校准；分析证书；发运台账 |
| `cp_finishing_packaging` | `sugar_finishing` | 包装输入与废物 | 采购、物料清单与废物记录 | 组件身份；单件质量；数量；损耗；废物去向 | 供应商规格并经抽样称重和库存平衡核验 | kg | 每批或每月 | 与参考输出相同期间 | 包装线 | 各材料分别汇总；核对输入、包装存量与废物 | 供应商规格；抽样称重；废物票据 |
| `cp_finishing_air` | `sugar_finishing` | 糖尘 PM10 | 烟道或排风测试 | 风量；PM10 浓度；运行时间；治理状态 | 采用适用法规方法开展代表性测量 | kg | 测试活动及运行日志 | 代表报告期和设备状态 | 干燥器、冷却器、输送与包装排风 | 由浓度和风量换算排放负荷 | 测试报告；仪器校准；治理日志 |
| `cp_utility_fuels` | `steam_power_generation` | 燃料与给水 | 燃料仪表、衡器、采购和实验室记录 | 燃料量；水分；热值；硫；给水；运行时间 | 经校准仪表或衡器及燃料分析 | 行单位 | 每班或每次交付 | 与参考输出相同期间 | 现场锅炉与热电联产 | 各燃料分别汇总；核对库存与内部甘蔗渣 | 校准；燃料证书；库存平衡 |
| `cp_utility_outputs` | `steam_power_generation` | 蒸汽、电力和灰 | 仪表、热力与质量记录 | 蒸汽质量/状态；发电/用电/外送；灰质量/水分/去向 | 经校准仪表、衡器和能量平衡 | 行单位 | 每班或每日 | 与参考输出相同期间 | 锅炉、汽轮机、发电机与治理设备 | 扣除自用后计算净有用输出；外送另列 | 仪表校准；能量平衡；去向证据 |
| `cp_stack_emissions` | `steam_power_generation` | 各项烟气排放 | 烟气测试、连续监测、燃料分析和运行记录 | 污染物浓度；烟气流量；氧含量；运行状态；燃料；治理效率 | 优先直接测量；否则使用已披露的来源特定因子 | kg | 适用测试或监测频率 | 代表报告期燃料与锅炉状态 | 各烟囱与治理系统 | 各命名污染物分别计算并按运行时间加权 | 有资质报告；校准；因子引用；不确定性 |
| `cp_wastewater_records` | `wastewater_treatment` | 进水、电力、化学品、回用处理水和污泥 | 流量计、加药、仪表、质量和实验室记录 | 进水/回用流量；能量；浓度与剂量；污泥质量与固体；去向 | 经校准仪表、加药记录、衡器和实验室分析 | 行单位 | 每日或每批 | 与参考输出相同期间 | 现场处理厂 | 汇总原子输入输出；核对水力平衡 | 校准；实验室结果；污泥票据；平衡 |
| `cp_wastewater_emissions` | `wastewater_treatment` | 空气与水排放 | 匹配的流量、浓度、气体与处理状态记录 | 出水流量和分析物浓度；气体流量/组成；路线和捕集 | 代表性采样与实验室分析；气体实测或有记录碳平衡 | kg | 许可要求频率或代表性活动 | 代表报告期和处理状态 | 最终排口与处理气体点 | 在时间上匹配流量和浓度；各分析物分别计算 | 实验室 QA/QC；监管链；计算表；不确定性 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_reference_output` | 全部交换 | `Q_normalized = Q_reporting_period / M_conforming_cane_sugar_reporting_period` | 报告期交换量；符合规格甘蔗糖净质量 | 每 1 kg 甘蔗糖的交换量 | `eu-pef-2021-2279` |
| `internal_flow_reconciliation` | 蔗汁、糖浆、湿糖、甘蔗渣、冷凝水、蒸汽、电力和废水转移 | 发送过程输出等于接收过程输入，差异仅可来自单独记录的库存变化、实测损失、外送或其他去向。 | 发送输出；接收输入；库存；损失；去向 | 已核对内部转移 | `eu-pef-2021-2279` |
| `steam_energy` | 蒸汽交换 | 使用实测压力、温度、干度和冷凝水状态，按 `Q = m × (h_steam - h_return)` 计算。 | 蒸汽质量；蒸汽焓；返回焓 | 供应能量 MJ | `eu-pef-2021-2279` |
| `effluent_load` | 每种命名水排放 | 对时间匹配记录采用 `Load_kg = volume_m3 × concentration_mg_per_L × 0.001`。 | 出水体积；分析物浓度 | 排放质量 kg | `ifc-sugar-manufacturing-ehs-2007` |
| `combustion_emissions` | 每种命名锅炉排放 | 优先直接测量；否则采用“实测燃料活动量 × 已披露的燃料与技术特定因子”，并区分生物源和化石碳。 | 燃料活动量；因子或实测浓度与流量；治理状态 | 命名物质质量 kg | `us-epa-ap42-cane-sugar-1997`, `ifc-sugar-manufacturing-ehs-2007` |
| `co_product_allocation` | 剩余不可分共产品 | 采用第 7 节层级，并保留未分配清单、分配键、份额、敏感性以及产品/废物状态。 | 联合清单；产品数量或因果参数；使用时的价值 | 已分配清单 | `eu-pef-2021-2279` |
| `mass_balance` | 从提取到后处理及残余物管理 | 核对各过程的实测质量与干固形物，明确纳入水分蒸发、产品、残余物、废物、物质性排放和库存变化。 | 输入输出质量；水分或固形物；库存 | 过程平衡与未解释差异 | `us-epa-ap42-cane-sugar-1997`, `ifc-sugar-manufacturing-ehs-2007` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品与主要中间流 | 产品等级、路线、状态、流属性、单位和 Tiangong 身份须无歧义；未解决 UUID 须保持明确。 | 产品规格；实验室证书；流查询记录 |
| `dq_temporal` | 全部前景记录 | 覆盖一个完整榨季或至少连续 12 个月且代表正常运行；披露缺口、停机和异常生产期。 | 有日期台账；运行日历；缺口评估 |
| `dq_technology_geography` | 前景与上游数据集 | 识别糖厂技术、澄清路线、锅炉和废水配置、甘蔗来源区域及数据库地理范围。 | 过程图；设备清单；数据集元数据 |
| `dq_completeness` | 全部过程清单 | 核算每个适用的原子交换；每一遗漏行须以证据说明不适用或未解决，并说明可能影响。 | 完整性清单；路线证据；未解决项日志 |
| `dq_measurement` | 仪表、衡器、测试与实验室数据 | 使用有效校准和 QA/QC 证据，保留原始记录、单位、换算、检出限和不确定性。 | 证书；监管链；QA/QC 报告；计算表 |
| `dq_balance` | 材料、蔗糖固形物、水、蒸汽和电力 | 核对过程平衡并调查未解释差异，不得用虚构流强行闭合。 | 签署的平衡表；调查记录 |
| `dq_allocation` | 共产品与外送能源 | 保留产品/废物分类、去向、层级决定、分配关系、输入、份额和敏感性。 | 合同；发运记录；分配工作表；敏感性结果 |
| `dq_no_double_count` | 内部回用及废物/共产品去向 | 不得把同一实物量同时计作内部输入与外送、产品与废物、回用与排放、总能源与净能源。 | 跨过程核对与去向台账 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 失败条件 |
| --- | --- | --- | --- |
| `validate_reference_flow` | 参考产品 | 确认唯一 `cane_sugar_output` 为 1 kg 符合规格甘蔗糖净质量，并采用固定的质量与单位组 UUID。 | 缺失、多个、采用含包装毛质量、UUID 错误、单位错误或数量不为 1 kg。 |
| `validate_scope_route` | 数据集范围 | 确认 CPC 23511 范围、糖厂门起止点、路线限定信息，并纳入全部适用条件过程。 | 混入精制糖或甜菜糖，或遗漏运行中的热电联产、包装、澄清或处理路线。 |
| `validate_internal_transfers` | 内部流 | 扣除已记录库存与损失后，核对蔗汁、糖浆、湿糖、甘蔗渣、蒸汽、电力、冷凝水和废水的匹配转移。 | 存在未解释不匹配或重复计算。 |
| `validate_mass_balance` | 各前景过程 | 审查质量与干固形物平衡，以及甘蔗渣、糖蜜、滤饼、废水污泥、灰和不合格糖的去向。 | 存在物质性未解释差异或去向缺失。 |
| `validate_co_products` | 多输出过程 | 采用并记录第 7 节层级，区分内部回用、产品和废物。 | 自动或无记录分配、对废物分配、或抵扣内部总能源。 |
| `validate_water_waste` | 水与废物交换 | 分开洗蔗水、渗浸水、滤饼洗水、糖晶洗水、给水、冷凝水、废水、滤饼、污泥和灰。 | 存在集合占位、重复计算或处理去向缺失。 |
| `validate_air_emissions` | 后处理、锅炉与废水空气排放 | 各适用命名物质分别报告，并保留测量或因子来源及治理状态。 | 以“空气排放”、`NOx`、`VOC` 或其他集合占位替代可得原子物质。 |
| `validate_ranges` | 全部清单数量 | 只有至少两项相互独立、原文已核验且在边界、单位、产品和基准上相容的来源才能支持范围；归一化身份不是范围。 | 存在单一来源、直接复制端点、相等端点或无支持估计范围。 |
| `validate_uuid_identity` | 带 UUID 的流 | 通过公开 `state_code=100` 直读确认每个 UUID 的流类型、名称、属性与单位语义；未解决身份保持为空。 | 使用代理或语义不匹配 UUID，包括已拒绝的甘蔗候选。 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 声明糖厂甘蔗糖生产的前景数据包。 |
| downstream_use | 构建 `process` 与 `lifecyclemodel` 数据集，并单独链接上游和下游数据集。 |
| allowed_use | 在产品等级、路线、区域、期间、分配和数据质量相容时，用于糖厂门 LCI、供应链建模、热点分析与情景分析。 |
| excluded_use | 甜菜糖或精制糖；仅种植声明；未协调功能等效性、边界、分配、区域、期间和数据质量的比较声明；把未解决 UUID 当作已确认身份。 |
| required_metadata | 全部参考流限定信息；场址与技术；报告期；过程路线；上游数据集引用；共产品去向与分配；水、废水、锅炉和包装配置；排除项与未解决项。 |
| required_quality_disclosure | 一手数据覆盖；校准和实验室 QA/QC；平衡结果；缺口处理；代理或次级数据；分配敏感性；不确定性；原始来源核验范围。 |
| update_trigger | 产品等级、甘蔗来源、提取或澄清路线、能源或燃料组合、共产品去向、废水路线、包装、分配方法、报告期或适用法规发生显著变化。 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-0` | 标准（`standard`） | 联合国统计司，《Central Product Classification Version 3.0》，子类 23511 Cane sugar，官方分类门户，https://unstats.un.org/unsd/classifications/Econ/CPC，访问日期 2026-08-24。 | 分类身份，以及排除相邻甜菜糖、精制糖、加香或着色糖子类。 |
| `codex-cxs-212-1999` | 标准（`standard`） | Codex Alimentarius Commission，CXS 212-1999《Standard for Sugars》，官方 PDF，https://workspace.fao.org/sites/codex/Standards/CXS%20212-1999/CXS_212e.pdf，访问日期 2026-08-24。 | 原蔗糖身份与质量限定信息；不从该标准采用清单范围。 |
| `us-epa-ap42-cane-sugar-1997` | 官方指南（`official_guidance`） | 美国环境保护署，AP-42 第 9.10.1.1 节《Sugarcane Processing》，1997 年 6 月，官方 PDF，https://www.epa.gov/sites/default/files/2020-10/documents/c9s10-1a.pdf，访问日期 2026-08-24。 | 前景工艺顺序、蔗汁提取与澄清材料、结晶、甘蔗渣、糖蜜、滤饼和空气排放清单结构。 |
| `ifc-sugar-manufacturing-ehs-2007` | 官方指南（`official_guidance`） | 国际金融公司，《Environmental, Health, and Safety Guidelines for Sugar Manufacturing》，2007 年 4 月 30 日，官方 PDF，https://www.ifc.org/content/dam/ifc/doc/2000/2007-sugar-manufacturing-ehs-guidelines-en.pdf，访问日期 2026-08-24。 | 水、能源、甘蔗渣热电联产、固体残余物、废水处理、污泥、出水与空气监测，以及路线披露。 |
| `eu-pef-2021-2279` | 官方指南（`official_guidance`） | 欧盟委员会建议（EU）2021/2279《on the use of Environmental Footprint methods》，官方合并文本，https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng，访问日期 2026-08-24。 | 多功能性层级、前景与上游数据集区分、清单完整性、数据质量和透明计算规则。 |
