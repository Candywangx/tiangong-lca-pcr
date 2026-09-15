---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.phosphoric-acid
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 磷酸

## 1. 范围与适用性

本 PCR 适用于生产者厂门交付的正磷酸（H3PO4）成品之前景生产。湿法、热法/炉法以及明确声明的净化或浓缩变体均可纳入，但必须声明工艺路线、交付产品 H3PO4 质量分数、品级、物态和地理范围。本规则保持路线中立：数据集必须建模实际运行路线，未经明确情景说明不得用湿法、热法或单一浓度清单替代另一条路线。

本范围不包括磷酸酯、磷酸盐和磷肥；未换算并报告为正磷酸基准的多聚磷酸或超磷酸；仅作为路线特定中间产品销售的含磷石膏浆湿法稀酸；以及生产者厂门之后的使用、分销、配制或中和。

前景边界从磷酸厂接收工艺原料和公用工程开始，到符合声明条件并进入散装储存或装载状态的磷酸产品结束。外购磷矿石、硫酸、黄磷、电力、燃料、水和处理化学品的生产须连接上游数据集。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.phosphoric-acid |
| classification_refs | CPC 3.0:34232 Phosphoric acid（精确分类语境） |
| covered_products | 以所含 H3PO4 为基准的正磷酸溶液或酸产品；湿法、炉法/热法以及明确声明的净化或浓缩变体 |
| excluded_products | 磷酸酯；磷酸盐和磷肥；未换算为正磷酸基准的多聚磷酸或超磷酸；仅作为中间产品销售的含磷石膏浆湿法稀酸；下游配方和用途 |
| representative_product | 生产者厂门的磷酸成品，声明交付 H3PO4 质量分数、品级、路线、物态和地点 |
| production_route | 路线特定前景建模：湿法酸解、分离和浓缩；或热法氧化和水合；适用时包括净化/后处理 |
| market_state | 分销前、生产者厂门的散装液体或其他声明物态；浓度和品级为必需限定信息 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产者厂门合格磷酸产品中所含正磷酸（H3PO4） |
| How much | 1 kg 所含 H3PO4 |
| How well | 声明交付 H3PO4 质量分数、品级/规格、生产路线、杂质或纯度基准、物态和地理范围 |
| How long or cycle | 代表所声明生产批次或年度生产组合的一个报告期 |
| reference_flow_link | 交付产品质量 = 1 kg H3PO4 / 实测 H3PO4 质量分数；全部前景清单按所含 H3PO4 基准归一化 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 交付磷酸中 1 kg 所含 H3PO4 |
| 参考产品流 | 磷酸 `9396269a-cf0d-4b38-ae6d-ab6b91e1dc87` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 交付 H3PO4 质量分数；浓度试验基准；产品品级/规格；湿法、热法/炉法或其他声明路线；净化步骤；物态；生产者厂门状态；地理范围；报告期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_h3po4_mass` | 参考产品和全部归一化清单 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 以校准质量记录确定交付产品质量，并以声明的产品试验方法确定 H3PO4 质量分数；按交付质量乘以 H3PO4 质量分数归一化。无文件化换算不得把 P2O5 百分比当作 H3PO4 百分比。 |
| `solution_water_consistency` | 产品水分和浓缩平衡 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在统一声明的湿基或干基分析口径上报告产品浓度并保持溶液水分平衡；浓缩蒸发水不属于产品 H3PO4。 |
| `route_separation` | 路线特定清单 | 各记录使用的质量和能量属性 | kg；kWh；MJ | 湿法和热法/炉法须使用分离的前景过程链或分开加权的生产组合组分；聚合前披露权重。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 湿法为场址接收的磷矿石和硫酸；热法为场址接收的黄磷及氧化剂/水；另包括外购公用工程和处理材料 |
| starting_condition_role | 前景厂门起始条件；外购投入的开采和生产由上游数据集表示 |
| product_classification_scope | CPC 3.0:34232 范围内的正磷酸产品；路线特定中间酸仅作为投入或内部产出，不得静默改变 canonical 产品 |
| recursive_input_rule | 进入浓缩、净化、调配或回用的外购磷酸作为技术系统投入记录，附供应商数据集和 H3PO4 浓度；不得在当前边界内递归主张其生产 |
| upstream_dataset_requirement | 每项外购物料、能源载体、电力、供水、运输服务和废物处理投入均连接地理与技术具有代表性的上游数据集 |
| disclosure | 声明路线、品级、交付 H3PO4 质量分数、纳入的净化/浓缩步骤、磷石膏及其他残余物的处理去向、分配方法、地理范围和报告期 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_route_gate` | 前景生产链 | 从接收路线原料到反应、分离、浓缩或水合、路线特定净化、排放控制、残余物处理、储存和装载至声明厂门产品的所有实际运行单元均须纳入。 | `us-epa-phosphoric-acid-supply-chain-2023`; `us-epa-ap42-phosphoric-acid`; `eu-jrc-lvic-aaf-bref-2007` |
| `boundary_wet_process` | 湿法路线 | 适用时纳入场内磷矿制备、硫酸酸解、消化/结晶、过滤或固液分离、稀酸处理、浓缩、尾气洗涤、磷石膏处理、工艺水回用和废水处理。 | `us-epa-ap42-phosphoric-acid`; `eu-jrc-lvic-aaf-bref-2007` |
| `boundary_thermal_process` | 热法/炉法路线 | 纳入黄磷处理、氧化/燃烧、水合或吸收、冷却、尾气控制以及达到声明产品所需的浓缩或净化。若黄磷生产不在报告场址，则作为上游数据集连接。 | `us-epa-phosphoric-acid-supply-chain-2023`; `us-epa-ap42-phosphoric-acid` |
| `boundary_no_silent_exclusion` | 全部路线 | 每项排除均须说明理由和披露；含氟气体、颗粒物、工艺废水、磷石膏、废处理材料或不合格酸不得因回用、出售或处理而直接省略。 | `eu-jrc-lvic-aaf-bref-2007`; `eu-environmental-footprint-recommendation-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `wet_acidulation_separation` | 湿法酸解与分离 | conditional | 使用硫酸酸解磷矿生产湿法酸时必需 | 前景反应、结晶、过滤、尾气控制和磷石膏分离 | 分离后稀酸中 1 kg 所含 H3PO4 |
| `wet_concentration` | 湿法浓缩与后处理 | conditional | 报告场址浓缩或后处理湿法稀酸时必需 | 前景蒸发、浓缩、冷却、洗涤和产品后处理 | 湿法成品酸中 1 kg 所含 H3PO4 |
| `thermal_oxidation_hydration` | 热法氧化与水合 | conditional | 以黄磷氧化并水合生产磷酸时必需 | 前景炉法/燃烧、水合/吸收、冷却、尾气控制和后处理 | 热法成品酸中 1 kg 所含 H3PO4 |
| `purification` | 产品净化 | conditional | 使用萃取、吸附、沉淀、离子交换或其他净化步骤达到声明品级时必需 | 前景净化及相关残余物/废水处理 | 净化酸中 1 kg 所含 H3PO4 |
| `storage_loading` | 合格产品储存与装载 | required | 始终必需 | 最终质量放行、储存损失、转移和装载 | 放行产品中 1 kg 所含 H3PO4 |

### 过程：湿法酸解与分离（`wet_acidulation_separation`）

#### 输入

##### 产品流

###### 制备后的磷矿石（`phosphate_rock_input`）

记录干基和收到基磷矿石、P2O5 品位、水分、碳酸盐及含氟相关组成和供应商来源。

- 选定流：Phosphate rock, declared grade
- 流属性/单位：Mass / kg
- 数量规则：实测进入酸解的干基和收到基质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 稀酸产出中所含 H3PO4
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_materials`
- 来源：`us-epa-ap42-phosphoric-acid`; `eu-jrc-lvic-aaf-bref-2007`
- 数量范围：暂定磷矿石筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 稀酸产出中所含 H3PO4
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 硫酸（`sulfuric_acid_input`）

分别记录交付酸质量、含量、回用酸贡献和供应商数据集。

- 选定流：Sulfuric acid, declared concentration
- 流属性/单位：Mass / kg
- 数量规则：实测交付质量和投入酸含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 稀酸产出中所含 H3PO4
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_materials`
- 来源：`us-epa-phosphoric-acid-supply-chain-2023`; `us-epa-ap42-phosphoric-acid`
- 数量范围：暂定硫酸筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：5
  - 单位：kg
  - 基准：每 1 kg 稀酸产出中所含 H3PO4
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 工艺水与洗涤水（`wet_process_water`）

分别记录新水、回用水和排水，以保持工厂水量平衡。

- 选定流：Process water
- 流属性/单位：Mass / kg
- 数量规则：计量新水与按来源实测的内部回用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 稀酸产出中所含 H3PO4
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_energy`
- 来源：`eu-jrc-lvic-aaf-bref-2007`
- 数量范围：暂定湿法用水筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 稀酸产出中所含 H3PO4 的新水
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 电力与燃料（`wet_energy_input`）

分别记录计量电力以及各种燃料或蒸汽载体，并分别连接上游数据集。

- 选定流：Electricity, steam, and fuels by carrier
- 流属性/单位：Energy / kWh or MJ
- 数量规则：分配至湿法酸解与分离的计量消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 稀酸产出中所含 H3PO4
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_energy`
- 数量范围：暂定综合能耗筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kWh-equivalent
  - 基准：每 1 kg 稀酸产出中所含 H3PO4；披露载体换算
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 湿法稀磷酸（`weak_acid_output`）

记录浓缩前稀酸质量及实测 H3PO4 或 P2O5 含量，并保留分析换算。

- 选定流：Wet-process weak phosphoric acid, route-specific intermediate
- 流属性/单位：Mass / kg
- 数量规则：实测稀酸质量和含量，按所含 H3PO4 归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 稀酸产出中所含 H3PO4
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算值（`calculated_from_collection`）
- 采集协议：`cp_product_quality`
- 来源：`us-epa-ap42-phosphoric-acid`
- 数量范围：湿法稀酸典型浓度
  - 范围角色：典型范围（`typical_range`）
  - 下限：26
  - 上限：30
  - 单位：mass % P2O5
  - 基准：浓缩前离开湿法生产的稀酸
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`us-epa-ap42-phosphoric-acid`

##### 废物流

###### 磷石膏（`phosphogypsum_output`）

记录分离石膏质量、水分、组成、储存或销售状态、运输和最终去向；共产品或废物分类遵循实际处置。

- 选定流：Phosphogypsum, declared disposition
- 流属性/单位：Mass / kg
- 数量规则：实测过滤及后续处理离开的湿基和干基质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 稀酸产出中所含 H3PO4
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residues_emissions`
- 来源：`eu-jrc-lvic-aaf-bref-2007`
- 数量范围：BREF 磷石膏产生量筛查范围
  - 范围角色：典型范围（`typical_range`）
  - 下限：4
  - 上限：5
  - 单位：kg phosphogypsum/kg P2O5 manufactured
  - 基准：湿法生产的 P2O5 产出基准
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`eu-jrc-lvic-aaf-bref-2007`

###### 湿法废水（`wet_wastewater_output`）

记录内部回用后的净排水以及氟化物、磷酸盐、悬浮物、酸度和处理路线。

- 选定流：Wastewater, phosphoric-acid production
- 流属性/单位：Mass / kg
- 数量规则：工艺水和洗涤水回用后的实测净排放
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 稀酸产出中所含 H3PO4
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residues_emissions`
- 来源：`eu-jrc-lvic-aaf-bref-2007`
- 数量范围：暂定净废水筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 稀酸产出中所含 H3PO4
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 向空气排放的氟化物（`wet_fluoride_air`）

按声明的物种基准记录各受控和非受控排口的 HF、SiF4 或总氟实测值。

- 选定流：Fluoride compounds to air, species declared
- 流属性/单位：Mass / kg
- 数量规则：烟气浓度乘以干基标准气量和运行时间
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 稀酸产出中所含 H3PO4
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算值（`calculated_from_collection`）
- 采集协议：`cp_residues_emissions`
- 来源：`us-epa-ap42-phosphoric-acid`; `eu-jrc-lvic-aaf-bref-2007`
- 数量范围：湿法 BAT 氟化物浓度筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：5
  - 单位：mg/Nm3 as HF
  - 基准：受控湿法尾气浓度，不是产品归一化排放因子
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`eu-jrc-lvic-aaf-bref-2007`

### 过程：湿法浓缩与后处理（`wet_concentration`）

#### 输入

##### 产品流

###### 稀磷酸进料（`weak_acid_input`）

按实测质量和含量记录转移稀酸，并与 `weak_acid_output` 对账。

- 选定流：Wet-process weak phosphoric acid, route-specific intermediate
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量乘以实测 H3PO4 质量分数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 湿法成品酸中所含 H3PO4
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算值（`calculated_from_collection`）
- 采集协议：`cp_product_quality`

###### 浓缩公用工程（`concentration_energy_water`）

分别记录蒸发器和后处理设备的蒸汽、电力、冷却水和燃料。

- 选定流：Steam, electricity, fuel, and cooling water by carrier
- 流属性/单位：Energy or mass / kWh, MJ, or kg
- 数量规则：分配至浓缩和后处理的计量公用工程
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 湿法成品酸中所含 H3PO4
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_energy`
- 数量范围：暂定浓缩公用工程筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：kWh-equivalent
  - 基准：每 1 kg 湿法成品酸中所含 H3PO4；披露载体换算
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 湿法磷酸成品（`wet_finished_acid`）

记录产品质量、交付 H3PO4 质量分数、采用时的 P2O5 结果、品级和放行规格。

- 选定流：磷酸 `9396269a-cf0d-4b38-ae6d-ab6b91e1dc87`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：交付产品质量 = 1 kg H3PO4 / 实测 H3PO4 质量分数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：成品中 1 kg 所含 H3PO4
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算值（`calculated_from_collection`）
- 采集协议：`cp_product_quality`
- 来源：`us-epa-ap42-phosphoric-acid`; `us-epa-phosphoric-acid-supply-chain-2023`
- 数量范围：暂定交付产品质量筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：100
  - 单位：kg product
  - 基准：每 1 kg 所含 H3PO4；用实测 H3PO4 质量分数的精确倒数替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 浓缩冷凝液与废水（`concentration_wastewater`）

记录冷凝液回用及净排放，并记录磷酸盐、氟化物、酸度和处理去向。

- 选定流：Concentration condensate or wastewater, disposition declared
- 流属性/单位：Mass / kg
- 数量规则：实测离开前景回用循环的净冷凝液或废水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 湿法成品酸中所含 H3PO4
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residues_emissions`
- 数量范围：暂定浓缩水量筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 湿法成品酸中所含 H3PO4
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：热法氧化与水合（`thermal_oxidation_hydration`）

#### 输入

##### 产品流

###### 黄磷（`elemental_phosphorus_input`）

记录黄磷质量、纯度、供应商和上游生产数据集；除非在报告边界内，不得并入上游电炉生产。

- 选定流：Elemental phosphorus, declared grade
- 流属性/单位：Mass / kg
- 数量规则：实测黄磷投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 热法成品酸中所含 H3PO4
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_materials`
- 来源：`us-epa-phosphoric-acid-supply-chain-2023`; `us-epa-ap42-phosphoric-acid`
- 数量范围：暂定黄磷筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：1
  - 单位：kg
  - 基准：每 1 kg 热法成品酸中所含 H3PO4
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 氧化剂与水合水（`thermal_air_water`）

分别记录干空气或氧气供应以及净新鲜水合/冷却水。

- 选定流：Air or oxygen; process water
- 流属性/单位：Mass / kg
- 数量规则：按监测流量计量或计算氧化剂，并实测净用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 热法成品酸中所含 H3PO4
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_materials`
- 来源：`us-epa-ap42-phosphoric-acid`
- 数量范围：暂定水合水筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg water
  - 基准：每 1 kg 热法成品酸中所含 H3PO4
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 热法公用工程（`thermal_energy_input`）

按载体分别记录电力、蒸汽、冷却和辅助燃料。

- 选定流：Electricity, steam, and fuels by carrier
- 流属性/单位：Energy / kWh or MJ
- 数量规则：分配至氧化、水合、冷却和后处理的计量消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 热法成品酸中所含 H3PO4
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_energy`
- 数量范围：暂定热法公用工程筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：kWh-equivalent
  - 基准：每 1 kg 热法成品酸中所含 H3PO4；披露载体换算
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 热法磷酸成品（`thermal_finished_acid`）

记录产品质量、实测 H3PO4 质量分数、品级、杂质基准和放行规格。

- 选定流：磷酸 `9396269a-cf0d-4b38-ae6d-ab6b91e1dc87`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：交付产品质量 = 1 kg H3PO4 / 实测 H3PO4 质量分数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：成品中 1 kg 所含 H3PO4
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算值（`calculated_from_collection`）
- 采集协议：`cp_product_quality`
- 来源：`us-epa-phosphoric-acid-supply-chain-2023`; `us-epa-ap42-phosphoric-acid`
- 数量范围：暂定交付产品质量筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：100
  - 单位：kg product
  - 基准：每 1 kg 所含 H3PO4；用实测 H3PO4 质量分数的精确倒数替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 热法废水与残余物（`thermal_waste_output`）

按处理去向分别记录净废水、不合格酸、滤渣和废处理材料。

- 选定流：Thermal-route wastewater and residues by type
- 流属性/单位：Mass / kg
- 数量规则：实测离开回用循环的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 热法成品酸中所含 H3PO4
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residues_emissions`
- 数量范围：暂定热法废物筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 热法成品酸中所含 H3PO4
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 热法颗粒物及含磷空气排放（`thermal_air_emissions`）

按受控排口记录实测颗粒物和含磷物种。

- 选定流：Particulate and phosphorus-bearing emissions to air, species declared
- 流属性/单位：Mass / kg
- 数量规则：实测浓度乘以标准化气量和运行时间
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 热法成品酸中所含 H3PO4
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算值（`calculated_from_collection`）
- 采集协议：`cp_residues_emissions`
- 来源：`us-epa-ap42-phosphoric-acid`
- 数量范围：暂定热法空气排放筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg
  - 基准：每 1 kg 热法成品酸中所含 H3PO4
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：产品净化（`purification`）

#### 输入

##### 产品流

###### 粗酸与净化材料（`purification_inputs`）

记录粗酸质量和含量，以及达到声明品级使用的每种萃取剂、吸附剂、沉淀剂、离子交换材料和公用工程。

- 选定流：Crude phosphoric acid and purification materials by type
- 流属性/单位：Mass / kg
- 数量规则：实测投入质量及报告期库存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净化产品中所含 H3PO4
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_purification`
- 来源：`us-epa-phosphoric-acid-supply-chain-2023`
- 数量范围：暂定净化材料筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 净化产品中所含 H3PO4 的综合净化材料；仍须分别报告各材料
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 净化磷酸（`purified_acid_output`）

记录实测产品质量、H3PO4 质量分数、品级和杂质规格以及粗酸回收率。

- 选定流：磷酸 `9396269a-cf0d-4b38-ae6d-ab6b91e1dc87`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：交付产品质量 = 1 kg H3PO4 / 实测 H3PO4 质量分数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：净化产品中 1 kg 所含 H3PO4
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算值（`calculated_from_collection`）
- 采集协议：`cp_product_quality`
- 来源：`us-epa-phosphoric-acid-supply-chain-2023`
- 数量范围：暂定交付产品质量筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：100
  - 单位：kg product
  - 基准：每 1 kg 所含 H3PO4；用实测 H3PO4 质量分数的精确倒数替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 净化残余物与废水（`purification_waste`）

分别记录废溶剂、吸附剂、污泥、滤饼、再生液和废水及其处理去向。

- 选定流：Purification waste by type and destination
- 流属性/单位：Mass / kg
- 数量规则：实测废物质量和离开回收循环的净废水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净化产品中所含 H3PO4
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_purification`
- 数量范围：暂定净化废物筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 净化产品中所含 H3PO4 的综合残余物与废水；仍须分别报告各流
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：合格产品储存与装载（`storage_loading`）

#### 输入

##### 产品流

###### 进入储存的放行磷酸（`released_acid_input`）

按质量和 H3PO4 含量记录进入合格储存的路线特定成品酸或净化酸。

- 选定流：磷酸 `9396269a-cf0d-4b38-ae6d-ab6b91e1dc87`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测转移质量和含量并与生产产出对账
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门装载产品中所含 H3PO4
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算值（`calculated_from_collection`）
- 采集协议：`cp_product_quality`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 生产者厂门磷酸（`reference_product_output`）

该流为质量放行和装载后的参考产品。记录实际装载质量、H3PO4 含量、路线、品级、物态、批次或生产组合身份以及容器或散装转移状态。

- 选定流：磷酸 `9396269a-cf0d-4b38-ae6d-ab6b91e1dc87`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：装载产品质量 = 1 kg H3PO4 / 实测交付 H3PO4 质量分数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：生产者厂门产品中 1 kg 所含 H3PO4
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算值（`calculated_from_collection`）
- 采集协议：`cp_product_quality`
- 数量范围：暂定交付产品质量筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：100
  - 单位：kg product
  - 基准：每 1 kg 所含 H3PO4；用实测 H3PO4 质量分数的精确倒数替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 储存和装载损失（`storage_loading_losses`）

按去向记录泄漏、不合格退料、罐底料、清洗液、呼吸气洗涤液和包装残余物。

- 选定流：Storage and loading waste by type
- 流属性/单位：Mass / kg
- 数量规则：根据储存与装载对账实测损失和废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门装载产品中所含 H3PO4
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residues_emissions`
- 数量范围：暂定储存损失筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg
  - 基准：每 1 kg 厂门装载产品中所含 H3PO4
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 全部多功能工厂操作 | 首先通过计量和细分，避免对可直接归属于磷酸或其他产出的反应、分离、浓缩、净化、公用工程、排放控制和残余物处理进行分配。 | `eu-environmental-footprint-recommendation-2021` |
| `allocation_phosphogypsum_status` | 磷石膏和回收氟硅酸 | 仅当该流作为质量受控产品离场且具有可证市场或有益用途时，才作为共产品；否则作为废物建模并纳入实际处理、储存或处置负担。披露水分和避免负担假设。 | `eu-jrc-lvic-aaf-bref-2007` |
| `allocation_physical_then_other` | 不可分离共产品 | 若无法实施细分或系统扩展，采用与功能相关、文件化且可量化的物理关系；若不存在可辩护的物理关系，则使用场址和期间特定的相对经济价值等其他关系，并说明放弃前序层级的理由。 | `eu-environmental-footprint-recommendation-2021` |
| `allocation_recycle_no_double_count` | 内部回用酸、洗涤液、水和回收材料 | 内部回用作为内部转移；仅统计跨越前景边界的净外购投入和净产出，同时保留总回用量用于质量平衡 QA。不得对同一数量同时给予共产品信用并免除处理负担。 | `eu-jrc-lvic-aaf-bref-2007`; `eu-environmental-footprint-recommendation-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_wet_materials` | `wet_acidulation_separation` | 磷矿石、硫酸、回用酸 | 地磅、批次记录、化验、库存 | material_id; supplier; wet_mass; dry_mass; moisture; P2O5_assay; acid_assay; recycle_mass; timestamp | 校准秤和与批次关联的实验室证书 | kg; mass % | 每次收货和每批；月度对账 | 完整声明报告期 | 声明场址范围内全部湿法生产线 | 分别汇总净外购和内部转移；按实测 H3PO4 产出归一化 | 校准、实验室 QA/QC、供应商证书、库存对账 |
| `cp_thermal_materials` | `thermal_oxidation_hydration` | 黄磷、氧化剂、水合水 | 批次表、质量流量计、罐存、化验 | phosphorus_mass; phosphorus_purity; air_or_oxygen_flow; water_mass; recycle_mass; timestamp | 校准罐计量/流量计和实验室化验 | kg; Nm3 | 连续或逐批；月度对账 | 完整声明报告期 | 声明场址范围内全部热法生产线 | 按载体汇总，仅用文件化密度或组成换算 | 校准、化验 QA/QC、库存和气体流量对账 |
| `cp_water_energy` | all applicable processes | 新水/回用水及各能源载体 | 公用工程表计、发票、蒸汽/燃料平衡 | meter_id; opening; closing; carrier; energy_content; allocation_key; recycle_water; period | 优先校准分表；与工厂总量和发票对账 | kg; m3; kWh; MJ | 连续/月度 | 完整声明报告期 | 各过程线及共享公用工程 | 优先直接分表；仅对不可分共享公用工程采用文件化分配 | 校准、发票、表计覆盖和对账 |
| `cp_product_quality` | all product-output processes | 酸质量、H3PO4/P2O5 含量、品级和批次 | 罐秤/流量计、实验室证书、放行记录 | batch_id; product_mass; sample_id; H3PO4_fraction; P2O5_fraction; conversion_method; grade; route; impurity_results; release_time | 校准质量计量和经验证的产品化验 | kg; mass % | 每批或每罐；报告期加权平均 | 完整声明报告期 | 声明数据集全部放行产品 | 按批计算并汇总所含 H3PO4；路线/品级组合按所含 H3PO4 加权 | 校准、认证方法、空白/平行样、放行批准、质量平衡 |
| `cp_residues_emissions` | all applicable processes | 磷石膏、废水、空气排放、泄漏和残余物 | 秤、流量计、烟气/水监测、废物联单 | stream_id; mass_or_flow; moisture; concentration; species; gas_volume; operating_time; destination; manifest_id | 直接测量及法规或等效监测 | kg; m3; mg/Nm3; mg/L | 连续/定期；至少报告期对账 | 完整声明报告期 | 场址范围内每个排口和残余物去向 | 浓度乘以实测载体流量；按物种和去向汇总；说明低于检出限处理 | 校准、实验室 QA/QC、检出限、许可和联单 |
| `cp_purification` | `purification` | 净化材料、回收和残余物 | 批次表、库存、化验、废物联单 | crude_acid_mass; crude_assay; material_mass; recovered_mass; product_assay; residue_mass; destination | 批次对账和实验室化验 | kg; mass % | 每批；月度对账 | 完整声明报告期 | 每套纳入的净化装置 | 所含 H3PO4 平衡和库存期间净材料消耗 | 化验 QA/QC、库存对账、废物联单 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_contained_h3po4` | 每项酸投入和产出 | 所含 H3PO4 质量 = 实测交付酸质量 × 实测 H3PO4 质量分数 | product_mass; H3PO4_fraction | kg contained H3PO4 |  |
| `calc_p2o5_conversion` | 以 P2O5 报告的记录 | 仅以文件化化学计量因子将 P2O5 含量换算为 H3PO4，并同时保留原始值和换算值；禁止把两种百分比互换 | P2O5_fraction; conversion_method | H3PO4_fraction with audit field | `us-epa-ap42-phosphoric-acid` |
| `calc_reference_normalization` | 全部前景行 | 归一化数量 = 报告期净数量 / 报告期合格厂门产品中所含 H3PO4 | net_flow_amount; qualified_product_mass; H3PO4_fraction | amount per 1 kg contained H3PO4 |  |
| `calc_route_mix` | 生产组合数据集 | 各路线先归一化后聚合；路线权重 = 路线所含 H3PO4 产出 / 全部所含 H3PO4 产出 | route outputs and normalized inventories | disclosed contained-H3PO4-weighted production mix | `eu-environmental-footprint-recommendation-2021` |
| `calc_emission_mass` | 烟气和废水物种 | 排放质量 = 实测浓度 × 实测载气或水量，并说明温度、压力、水分、单位换算、未检出处理和运行时间 | concentration; carrier_flow; conditions; operating_time | kg species per reporting period | `us-epa-ap42-phosphoric-acid`; `eu-jrc-lvic-aaf-bref-2007` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 产品流身份、CPC 语境、路线、品级、物态、H3PO4 化验基准、地理范围和厂门状态必须完整且相互一致。 | Tiangong UUID 核实、产品规格、批次放行记录 |
| `dq_mass_balance` | 各路线和报告期 | 对磷元素投入、产品及中间体所含 H3PO4、回用、磷石膏/残余物、废水、排放、库存变化和已记录损失进行对账并解释残差。 | 签署的物料平衡和化验记录 |
| `dq_temporal` | 前景记录 | 可行时使用具有代表性的连续 12 个月；否则披露较短生产期、停机、启动、异常运行和平均方法。 | 表计覆盖、生产日历、批次清单 |
| `dq_representativeness` | 前景和上游数据集 | 评价技术、地理、时间代表性和精度；主要物料、能源、产品、残余物和直接排放须采用质量更高的场址特定数据。 | 数据质量评价和来源元数据；`eu-environmental-footprint-recommendation-2021` |
| `dq_completeness` | 全部路线 | 覆盖全部实际运行过程图阶段和各项物质排放，包括回用、销售、储存或处理的流；量化数据覆盖并说明排除理由。 | 过程图、表计清单、许可、废物联单、排除记录 |
| `dq_uncertainty` | 推理估算和未检出值 | 每项 `reasoned_estimate` 均标为暂定，在用于发布关键规则前由前景或经审查外部证据替换；声明检出限及未检出替代方法。 | 不确定性清单和审查记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 产品流 UUID、Mass 属性 UUID、Units of mass UUID、CPC 34232 语境或参考单位 kg 缺失或不一致时失败。 |  |
| `validate_required_qualifiers` | 数据集元数据 | 缺失交付 H3PO4 质量分数、分析基准、品级、路线、净化状态、物态、生产者厂门状态、地理范围或报告期时失败。 | `us-epa-phosphoric-acid-supply-chain-2023` |
| `validate_route_structure` | 过程图和清单 | 必须包含完整适用的湿法链或热法链、适用净化和必需的储存/装载；未披露路线权重的生产组合失败。 | `us-epa-ap42-phosphoric-acid`; `eu-jrc-lvic-aaf-bref-2007` |
| `validate_h3po4_balance` | 产品归一化 | 根据产品质量和含量重算所含 H3PO4，并要求在声明测量不确定度内与 1 kg 参考基准一致；未记录 P2O5 至 H3PO4 换算时失败。 |  |
| `validate_wet_streams` | 湿法 | 要求磷矿石、硫酸、工艺水、稀酸、磷石膏去向、含氟空气排放、废水、能源及适用浓缩公用工程；任何省略均须记录为零或给出排除理由。 | `us-epa-ap42-phosphoric-acid`; `eu-jrc-lvic-aaf-bref-2007` |
| `validate_thermal_streams` | 热法 | 要求黄磷、氧化剂、水合水、公用工程、产品化验、颗粒物/含磷空气排放和净废水/残余物；任何省略均须记录为零或给出排除理由。 | `us-epa-ap42-phosphoric-acid`; `us-epa-phosphoric-acid-supply-chain-2023` |
| `validate_allocation` | 共产品和废物 | 磷石膏、回收氟硅酸或其他产出在缺乏市场/用途证据及分配层级披露时获得共产品信用，或内部回用重复计算时失败。 | `eu-jrc-lvic-aaf-bref-2007`; `eu-environmental-footprint-recommendation-2021` |
| `validate_source_and_estimate_status` | 范围和规则 | 外部范围和方法规则须有 source id；每项 `reasoned_estimate` 须有暂定标识和未解决证据说明。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 按生产者厂门 1 kg 所含 H3PO4 归一化的磷酸前景生产数据集 |
| downstream_use | `secondary_dataset`；在路线、浓度、地理、分配和数据质量经审查后可作为 `background_dataset` |
| allowed_use | 路线和品级匹配的 LCA 模型、化学品和磷肥供应链，以及必需限定信息与数据集相符的已披露生产组合 |
| excluded_use | 在湿法和热法、不同浓度、品级、地理或净化状态之间静默替代；把稀酸或浆料中间体当作成品酸；边界之外的下游使用或分销主张 |
| required_metadata | canonical PCR id；产品流 UUID；CPC 语境；生产者；地理范围；报告期；路线及路线权重；交付 H3PO4 和 P2O5 含量及换算方法；品级/规格；物态；纳入净化；技术；分配；残余物去向；上游数据集身份 |
| required_quality_disclosure | 表计和实验室覆盖；质量平衡残差；技术/地理/时间代表性和精度；排除；未检出处理；来源版本；暂定 `reasoned_estimate` 行；不确定性和审查状态 |
| update_trigger | 路线、浓度或品级、净化装置、主要供应商或能源组合、排放控制、磷石膏去向、分配方法、地理范围、参考流身份或显著改变重要范围/规则的证据发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `us-epa-ap42-phosphoric-acid` | `official_guidance` | U.S. EPA, AP-42 Chapter 8.9, Phosphoric Acid. https://www.epa.gov/sites/default/files/2020-09/documents/8.9_phosphoric_acid.pdf（检索于 2026-08-09） | 湿法和热法过程分解；稀酸浓度语境；氟化物和颗粒物排放点；控制和计量规则 |
| `us-epa-phosphoric-acid-supply-chain-2023` | `official_guidance` | U.S. EPA, Phosphoric Acid Supply Chain Profile, 2023. https://www.epa.gov/system/files/documents/2023-03/Phosphoric%20Acid%20Supply%20Chain%20Profile.pdf（检索于 2026-08-09） | 湿法与热法路线；工业级与净化/高纯产品区分；硫酸依赖及净化边界 |
| `eu-jrc-lvic-aaf-bref-2007` | `official_guidance` | European Commission JRC, Reference Document on Best Available Techniques for the Manufacture of Large Volume Inorganic Chemicals – Ammonia, Acids and Fertilisers, August 2007. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2022-03/LVIC-AAF.pdf（检索于 2026-08-09） | 湿法边界；P2O5 效率；氟化物控制；工艺水回用；废水处理；磷石膏和氟硅酸去向；有来源 QA 范围 |
| `eu-environmental-footprint-recommendation-2021` | `standard` | European Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32021H2279R(01)（检索于 2026-08-09） | 功能单位与中间产品口径；多功能层级；细分、物理和经济分配；数据质量与代表性 |
