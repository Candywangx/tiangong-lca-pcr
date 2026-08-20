---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-shrimps-and-prawns-frozen-dried-salted-or-in-brine
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 其他冷冻、干制、盐渍或盐水浸渍虾和对虾

## 1. 范围与适用性

本 PCR 覆盖 CPC 3.0 子类 21256：带壳或不带壳的其他虾和对虾，经且仅经一种声明的保藏路线——冷冻、干制、盐渍或盐水浸渍——并以合格可销售产品状态交付至加工厂门。数据集应声明物种、未熟或熟制状态、带壳/去头/去壳形态、保藏路线、包装介质、适用的含水率或盐度条件以及储存条件。

活、鲜或冷藏产品不在范围内。熟制、烟熏、腌渍调味、罐藏、裹粉、巴氏杀菌、灭菌或其他加工产品不在范围内。因此，烟熏是范围外路线，不得在本 PCR 下与冷冻、干制、盐渍或盐水浸渍叠加。即使 CXS 92-1981 的产品标准范围更宽，冷冻前已经熟制的产品也不属于 CPC 21256。

Tiangong 产品流 `Processed South American White Shrimp`（`e7d7c254-044d-4a15-9d72-2e2a871bb67b`）是 CPC 21256 内较窄的代表流。它不是通用类别流，其 UUID 不覆盖 CPC 21256 的所有物种、产品形态或保藏路线。仅当具体前景产品在语义上与加工南美白虾一致时使用该流；否则应保留本 PCR 的 CPC 21256 范围，但在发布前取得与所建模产品相匹配且经评审的产品流身份。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-shrimps-and-prawns-frozen-dried-salted-or-in-brine` |
| classification_refs | CPC 3.0 `21256` |
| covered_products | 其他非冷水虾和对虾，带壳或去壳、未熟，并经一种声明路线保藏：冷冻、干制、盐渍或盐水浸渍。 |
| excluded_products | 活、鲜、冷藏、熟制、烟熏、腌渍调味、罐藏、裹粉、巴氏杀菌、灭菌或其他加工甲壳类产品；另行分类的冷水虾和对虾。 |
| representative_product | 合格可销售保藏虾或对虾。所选 Tiangong 流仅代表加工南美白虾，范围窄于本 PCR 类别。 |
| production_route | 接收和整理未熟虾；只应用冷冻、干制、盐渍或盐水浸渍中的一种；按路线特定条件包装和储存。 |
| market_state | 加工厂门的未熟保藏产品，并声明产品形态、保藏路线、包装介质及温度/含水率/盐度条件。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在加工厂门供应合格可销售的 CPC 21256 虾或对虾产品。 |
| How much | 1 kg 净产品，不含包装，并按适用的路线特定质量条件计量。 |
| How well | 声明物种、产品形态、未熟状态、互斥保藏路线、包装介质及适用的冰衣、沥干质量、含水率、盐度和储存限定信息。 |
| How long or cycle | 在声明厂门交付的一个生产批次；不主张服务持续时间。 |
| reference_flow_link | `saleable_preserved_shrimp` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 合格可销售产品 |
| 参考产品流 | 加工南美白虾 `e7d7c254-044d-4a15-9d72-2e2a871bb67b` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种及可得时的学名; 南美白虾适用性或替代的经评审流身份; 带壳/去头/去壳形态; 未熟状态; 保藏路线; 包装介质; 不含包装; 冷冻时的去冰衣净重和储存温度; 干制时的含水率; 盐渍时的盐度; 盐水浸渍时的沥干方法和沥干质量; 如报告则包括可食比例 |

参考质量是产品质量，而不是仅可食部分质量。带壳销售时，壳及其他作为销售形态组成部分的材料计入参考质量；可食比例另行披露。二次和三次包装始终不计入 1 kg 参考流。带冰衣冷冻产品按不含冰衣的净重归一化。盐水浸渍产品采用声明沥干程序所得的沥干产品质量归一化；包装盐水另行编制清单。干制和盐渍产品在声明的销售含水率和盐度条件下称量。跨路线比较应匹配这些限定信息，或明确披露换算至共同干物质或可食产品基准的方法。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 所有结果归一化至 1 kg 可销售产品；排除包装和路线特定包装介质，除非其被明确界定为产品组成部分。 |
| `frozen_deglazed_mass` | 冷冻路线 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用去冰衣净产品质量，另行披露冰衣水，并记录冷冻储存温度；CXS 92-1981 要求净含量不含冰衣，并规定速冻储存条件为 -18 °C 或更低。 |
| `brined_drained_mass` | 盐水浸渍路线 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用记录了沥干方法和时间后的沥干产品质量；分别编制投入和排出盐水清单并披露盐浓度。 |
| `dried_salted_condition` | 干制或盐渍路线 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按销售状态计量，干制产品声明含水率，盐渍产品声明盐度；不得在湿基、干基或盐度调整质量之间静默换算。 |
| `presentation_mass` | 带壳、去头、去壳或其他形态 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 销售形态的组成部分计入产品质量；使用可食比例时另行报告；除非明确换算，否则只比较相同产品形态。 |
| `packaging_mass` | 包装 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按材料将包装作为独立产品投入计量；包装不得计入 1 kg 参考产品。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | 前景加工 | 纳入接收、分选、清洗、实际发生的修整或去壳、一个声明的保藏路线、包装、路线所需厂内储存、直接使用的公用工程、次品、废水或废盐水，以及设施直接控制直至移交的废物处理。 | `codex-cxc-52-2003`; `eu-pef-2021` |
| `exclusive_preservation_route` | 保藏路线 | 只建模一种范围内路线——冷冻、干制、盐渍或盐水浸渍。不得累加候选路线。烟熏和熟制会使产品超出 CPC 21256。 | `unsd-cpc-3-0`; `codex-cxs-92-1981` |
| `upstream_linkage` | 外购投入 | 将原料虾、水、能源载体、盐或配制盐水、包装及处理服务连接至地理和技术上适用的上游数据集；不得仅因其生产发生在前景设施外而遗漏。 | `eu-pef-2021` |
| `downstream_exclusion` | 下游阶段 | 排除厂门后的分销、零售、消费者制备、使用和报废，除非声明的研究范围扩展至这些阶段；每项扩展均应单独披露。 | `eu-pef-2021` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 加工设施接收的未熟其他虾或对虾，并声明来源、物种、产品形态、温度和接收质量。 |
| starting_condition_role | 前景起点；养殖或捕捞生产及入厂运输通过关联上游数据集表示，而不在此重新编写。 |
| product_classification_scope | 仅 CPC 3.0 21256：冷冻、干制、盐渍或盐水浸渍的其他虾和对虾。 |
| recursive_input_rule | 若投入已经是 CPC 21256 保藏虾产品，将其作为可见上游产品投入记录，只纳入实际追加操作；不得递归主张相同保藏步骤。 |
| upstream_dataset_requirement | 接收虾及每项材料或能源投入均需具有适用的来源路线、地理、技术、参考质量条件和时间覆盖。 |
| disclosure | 声明纳入的过程步骤、排除的上下游阶段、唯一保藏路线、未熟状态、质量条件、产率基准、废物去向及任何代理数据集。 |

## 6. 过程清单结构

仅在缺乏更强证据时，将以下范围作为候选阶段的宽泛筛选辅助。其只适用于声明的路线和实际设施技术，不是允许范围或典型合规区间，也不得代替前景计量。当获得经评审的来源支持范围，或至少三个代表性生产批次提供可追溯记录时，应替换每项 `reasoned_estimate`；超出暂定筛选范围的数值应调查，不得自动判为不合格。

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receiving_preparation` | 接收与整理 | required | 始终纳入；只记录实际执行的整理步骤。 | 前景原料接收、分选、清洗及产品形态整理。 | kg 已整理未熟虾产出 |
| `route_preservation` | 声明的保藏路线 | required | 声明且仅声明一种路线：冷冻、干制、盐渍或盐水浸渍。 | 前景保藏；各候选路线互斥。 | kg 声明条件下的保藏虾产出 |
| `packaging_storage` | 包装与路线特定储存 | required | 仅当声明产品状态和停留时间需要时纳入储存公用工程。 | 前景包装和厂门产品准备。 | 1 kg 可销售参考产品 |

### 过程：接收与整理（`receiving_preparation`）

#### 输入

##### 产品流

###### 接收的未熟虾或对虾（`received_raw_shrimp`）

记录进入设施的未熟虾称量值，包括声明的物种、来源、产品形态、温度和上游数据集。

- 选定流：未熟虾或对虾
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配至参考产品批次的实测接收批次质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_mass_balance`
- 数量范围：暂定原料筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：5
  - 单位：kg/kg 可销售产品
  - 基准：声明产品形态和一种保藏路线；以可追溯批次产率替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 整理用水（`preparation_water`）

记录清洗、适用时解冻和整理所用的计量饮用水或清洁海水；只有通过有记录的分配，方可排除非本产品批次用水。

- 选定流：过程用水
- 流属性/单位：Mass / kg
- 数量规则：归属于该批次的计量或发票核对用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_preservation_records`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定整理用水筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：kg/kg 可销售产品
  - 基准：设施整理用水；以代表性计量数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 已整理未熟虾（`prepared_raw_shrimp`）

按实际带壳/去头/去壳形态记录转入声明保藏路线的未熟虾实测质量。

- 选定流：已整理未熟虾或对虾
- 流属性/单位：Mass / kg
- 数量规则：整理后的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个接收与整理批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_mass_balance`
- 数量范围：暂定整理产率筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.2
  - 上限：1
  - 单位：kg/kg 接收未熟虾
  - 基准：声明产品形态；以批次质量平衡替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 虾壳、虾头、内脏和剔除物（`preparation_organic_residues`）

分别记录每个去向，并区分可销售共产品、副产品和废物状态。

- 选定流：虾整理有机残余物
- 流属性/单位：Mass / kg
- 数量规则：按去向实测或通过质量平衡计算残余物质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_batch_mass_balance`
- 数量范围：暂定有机残余物筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：4
  - 单位：kg/kg 可销售产品
  - 基准：声明带壳/去头/去壳形态；以批次质量平衡替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 整理废水（`preparation_wastewater`）

记录转入厂内或外部处理的废水，仅扣除有记录的内部回用量。

- 选定流：虾整理废水
- 流属性/单位：Mass / kg
- 数量规则：计量排放或水量平衡计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_utility_preservation_records`
- 数量范围：暂定整理废水筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：kg/kg 可销售产品
  - 基准：整理水量平衡；以代表性排放记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：声明的保藏路线（`route_preservation`）

只有所选唯一声明路线的行有效。不得将冷冻、干制、盐渍和盐水浸渍投入相加。

#### 输入

##### 产品流

###### 已整理未熟虾投入（`preservation_shrimp_input`）

记录从 `receiving_preparation` 接收的已整理未熟虾，不重复计算上游 CPC 21256 产品。

- 选定流：已整理未熟虾或对虾
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个保藏批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_mass_balance`

###### 冷冻及冻藏电力（`freezing_electricity`）

仅冷冻路线纳入，并记录制冷、冷冻、冰衣系统以及截至厂门可归属的厂内冻藏电力。

- 选定流：供应至设施的电力
- 流属性/单位：Energy / kWh
- 数量规则：分表计量电力或有记录的设备负荷计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 冷冻可销售产品和声明的储存时间
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_preservation_records`
- 来源：`codex-cxs-92-1981`
- 数量范围：暂定冷冻路线电力筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.05
  - 上限：5
  - 单位：kWh/kg 冷冻产品
  - 基准：冷冻加声明的厂内储存；以路线分表数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 干制能源（`drying_energy`）

仅干制路线纳入；数据可得时，将输入热量、燃料和电力按实际载体分别记录。

- 选定流：干制过程能源
- 流属性/单位：Energy / MJ
- 数量规则：计量能源载体用量，并在不隐藏载体身份的情况下换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 声明含水率下的干制可销售产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_preservation_records`
- 数量范围：暂定干制路线能源筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：50
  - 单位：MJ/kg 干制产品
  - 基准：声明最终含水率下的干制能源；以计量载体记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 食品级盐（`salting_salt`）

仅盐渍路线纳入；记录实际添加的食品级盐，并另行记录回收或排出的盐。

- 选定流：食品级盐
- 流属性/单位：Mass / kg
- 数量规则：批次投加盐称量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 盐渍可销售产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_preservation_records`
- 数量范围：暂定盐渍路线用盐筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：1
  - 单位：kg/kg 盐渍产品
  - 基准：声明盐度条件；以批次配方和盐度记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 配制盐水（`brining_solution`）

仅盐水浸渍路线纳入；记录投入盐水质量和盐浓度，并通过上游关联流纳入补充水和盐。

- 选定流：食品级盐水溶液
- 流属性/单位：Mass / kg
- 数量规则：批次投加盐水实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 沥干盐水浸渍可销售产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_preservation_records`
- 数量范围：暂定盐水投入筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：10
  - 单位：kg/kg 沥干盐水浸渍产品
  - 基准：声明盐水浓度和沥干方法；以批次配方记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 声明条件下的保藏虾（`preserved_shrimp_output`）

记录最终包装前按路线特定计量条件得到的保藏产品。

- 选定流：保藏虾或对虾
- 流属性/单位：Mass / kg
- 数量规则：根据路线采用实测去冰衣质量、销售含水率质量、销售盐度质量或沥干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个保藏批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_condition`
- 来源：`codex-cxs-92-1981`

##### 废物流

###### 废盐水和保藏废水（`spent_brine_wastewater`）

仅在盐水浸渍、盐渍、上冰衣、解冻或清洁产生时纳入；记录去向，且仅扣除有记录的内部回用。

- 选定流：废盐水或保藏废水
- 流属性/单位：Mass / kg
- 数量规则：计量排放或物料平衡计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_utility_preservation_records`
- 数量范围：暂定废盐水和废水筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 可销售产品
  - 基准：声明路线和回用；以排放和配方记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：包装与路线特定储存（`packaging_storage`）

#### 输入

##### 产品流

###### 保藏虾投入（`packaging_product_input`）

记录从 `route_preservation` 转入的路线条件化产品。

- 选定流：保藏虾或对虾
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个包装批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_mass_balance`

###### 包装材料（`packaging_materials`）

按材料分别记录一次、二次和分配的三次包装；均不属于 1 kg 参考产品的一部分。

- 选定流：按材料类型区分的包装材料
- 流属性/单位：Mass / kg
- 数量规则：包装领用称量，或与包装单元核对的物料清单计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 数量范围：暂定包装质量筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：0.5
  - 单位：kg/kg 可销售产品
  - 基准：声明包装配置；以物料清单记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 路线所需储存电力（`storage_electricity`）

只记录厂门前产品状态所需的储存电力，并按实际停留时间和储存负荷归一化；冷冻储存应维持声明的冷冻条件。

- 选定流：供应至储存系统的电力
- 流属性/单位：Energy / kWh
- 数量规则：按储存占用量和时间分配的分表计量电力
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 1 kg 可销售产品和声明的厂内停留时间
- 基准类型：储存时间（`storage_duration`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_storage_records`
- 来源：`codex-cxs-92-1981`
- 数量范围：暂定厂内储存电力筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kWh/kg 可销售产品
  - 基准：声明温度、负荷和停留时间；以储存分表记录替换
  - 基准类型：储存时间（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 可销售保藏虾参考产品（`saleable_preserved_shrimp`）

这是参考产出。依据适用计量规则，它仅包括产品，不含包装、冰衣和盐水包装介质。

- 选定流：加工南美白虾 `e7d7c254-044d-4a15-9d72-2e2a871bb67b`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在声明的路线特定质量条件下恰好 1 kg 合格可销售产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `avoid_allocation` | 可分离路线和批次 | 首先通过分离保藏路线、批次、仪表和独立计量的整理或包装步骤避免分配。 | `eu-pef-2021` |
| `physical_allocation` | 不可避免的联合生产 | 无法细分时，采用反映投入和排放如何随共产品产出变化且有记录的物理因果关系；质量本身并非自动具有因果性。 | `eu-pef-2021` |
| `economic_fallback` | 缺乏可辩护物理因果关系的有价值共产品 | 仅将经济分配作为有记录的后备方法，采用口径一致的价格并声明时间/地理基准；分配对结论有实质影响时披露敏感性结果。 | `eu-pef-2021` |
| `waste_and_residue_status` | 虾壳、虾头、内脏、次品及回收盐或盐水 | 声明法律和市场状态、去向及任何收入。没有离开系统并提供有用功能的证据时，不得将废物作为共产品给予抵扣。 | `eu-pef-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_batch_mass_balance` | `receiving_preparation`; `route_preservation`; `packaging_storage` | 原料、中间产品、产品、次品和残余物质量 | 校准秤记录和批次台账 | batch_id; species; origin; presentation; route; received_mass; transfer_mass; product_mass; residue_mass; destination | 在接收点和转移点直接称量 | kg | 每批 | 至少三个代表性批次；优选十二个月 | 每个设施和生产线 | 按批次求和，核对投入和产出，再除以路线条件化参考产出 | 秤校准；签字批次台账；核对说明 |
| `cp_utility_preservation_records` | `receiving_preparation`; `route_preservation` | 水、电力、热/燃料、盐/盐水、废水和废盐水 | 仪表、发票、配方单和排放日志 | batch_id; meter_start; meter_end; carrier; quantity; salt_mass; brine_mass; concentration; discharge_mass; reuse_mass | 尽可能分表计量；否则根据设施总量形成有记录的分配 | 原始载体单位、kg、kWh、MJ | 每批或按月并与产量核对 | 覆盖路线波动的代表性运行期 | 每个设施和保藏生产线 | 扣除有记录的回用量，只分配共享总量，并归一化至路线条件化参考产出 | 仪表校准；发票；配方单；分配记录 |
| `cp_product_condition` | `route_preservation` | 参考质量条件和产品质量 | 产品规格及实验室或生产记录 | species; raw_state; presentation; route; gross_mass; packaging_mass; glaze_mass; deglazed_mass; draining_method; drained_mass; moisture_content; salt_content; storage_temperature | 路线适用称量和有记录的检测方法 | kg、%、°C | 每批或经验证的抽样方案 | 与清单记录相同批次 | 每个产品规格和生产线 | 选择适用的路线特定净质量并保留全部限定信息 | 批准的规格；检测报告；抽样记录 |
| `cp_packaging_records` | `packaging_storage` | 按材料区分的包装 | 物料清单和包装领用记录 | packaging_type; material; unit_mass; units_used; returned_units; product_mass | 称量代表性单元并核对领用量 | kg | 每个包装配置及变更 | 当前配置 | 每条包装线 | 净包装质量除以可销售产品质量 | 供应商规格；秤校准；核对记录 |
| `cp_storage_records` | `packaging_storage` | 路线所需储存电力 | 电表和占用日志 | meter_start; meter_end; storage_temperature; product_mass; occupancy; residence_time | 分表计量或有记录的负荷/占用计算 | kWh、kg、h | 每月及重大运行变更时 | 代表性季节期间 | 每个储存系统 | 按有记录的占用量和时间分配，再按产品质量归一化 | 电表记录；温度日志；占用记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_mass` | 可销售产品 | 参考质量 = 包装后总质量 − 包装质量 − 冷冻带冰衣产品的冰衣质量 − 可分离包装盐水；盐水浸渍路线使用有记录的沥干质量。 | gross_mass; packaging_mass; glaze_mass; drained_mass; route | kg 参考产品 | `codex-cxs-92-1981` |
| `calc_route_yield` | 每个声明路线 | 路线产率 = 路线条件化可销售产品质量 / 接收未熟虾质量；结果保留产品形态、含水率、盐度、冰衣和沥干限定信息。 | product_mass; received_mass; qualifiers | kg/kg 及限定信息集合 |  |
| `calc_wastewater` | 水和盐水平衡 | 废水或废盐水 = 投入水/盐水 − 产品保留水 − 实测蒸发量 − 有记录回用量 − 另行回收流；存在估算项时报告不确定性。 | supplied_water; supplied_brine; retained_water; evaporation; reuse; recovered_streams | kg 排放 |  |
| `calc_storage_energy` | 设施储存 | 每 kg 储存电力 = 分配的储存电力 / 可销售产品质量，并保留温度、占用基准和停留时间。 | storage_electricity; product_mass; storage_temperature; occupancy; residence_time | kWh/kg |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_scope` | 产品身份 | 追溯物种、来源、未熟状态、产品形态、CPC 范围和保藏路线；使用所选 Tiangong 流时证明南美白虾适用性，否则记录经评审的替代流。 | 产品规格；供应商记录；流评审记录 |
| `dq_route_separation` | 过程清单 | 分开保存冷冻、干制、盐渍和盐水浸渍路线记录；不得把互斥路线平均为一个前景数据集。 | 批次路线字段；独立仪表或分配记录 |
| `dq_mass_condition` | 参考流 | 仅按所选路线和产品形态的适用性保留总质量、包装、冰衣/去冰衣、沥干、含水率、盐度、可食比例和储存条件证据。 | 协议 `cp_product_condition` 记录 |
| `dq_completeness` | 前景边界 | 核对所有主要材料、能源、产品、共产品、残余物、废水、盐水和包装流；解释每项实质质量不平衡和代理。 | 质量/能量核对；代理清单；数据缺口日志 |
| `dq_temporal_technology` | 代表性 | 使用代表当前设施技术和季节运行条件的记录；产品、路线、设备、能源供应、产率或废物去向发生实质变化后更新。 | 覆盖摘要；变更日志；设备和供应商记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validate_scope_route` | 产品和路线 | 产品应为未熟 CPC 21256 虾或对虾，并经冷冻、干制、盐渍或盐水浸渍中的恰好一种路线保藏；熟制和烟熏产品不符合本 PCR 范围。 | `unsd-cpc-3-0`; `codex-cxs-92-1981` |
| `validate_flow_semantics` | 参考流 UUID | 仅将 `e7d7c254-044d-4a15-9d72-2e2a871bb67b` 用于语义上与加工南美白虾一致的产品；UUID 本身绝不证明覆盖所有 CPC 21256 产品。 |  |
| `validate_reference_mass` | 参考流 | 确认恰好 1 kg 净可销售产品，不含包装，并记录适用的去冰衣、沥干、含水率、盐度、产品形态和可食比例限定信息。 | `codex-cxs-92-1981` |
| `validate_route_inventory` | 过程清单 | 未选保藏路线的行应为零或不存在；所选路线适用的全部材料和能源行应存在并关联记录。 |  |
| `validate_mass_balance` | 批次和过程产出 | 在各过程中将接收质量与产品、共产品、残余物、保留包装介质、废水和实测损失进行核对；调查并披露无法解释的不平衡。 | `eu-pef-2021` |
| `validate_reasoned_estimates` | 暂定范围 | 将每项 `reasoned_estimate` 标为暂定并记录适用性；获得经评审来源证据或至少三个代表性批次后替换；未经评审不得转为发布关键允许范围。 |  |
| `validate_allocation` | 多功能性 | 记录细分、分配基准、价格或物理因果关系、共产品状态，以及分配对结果有实质影响时的敏感性。 | `eu-pef-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个产品、设施、产品形态和互斥保藏路线的前景生产数据包。 |
| downstream_use | 可经评审后发布为 `secondary_dataset` 或 `background_dataset`，并投影至 `process` 和 `lifecyclemodel` 实体。 |
| allowed_use | 当参考质量和产品流语义匹配时，用于路线匹配的未熟冷冻、干制、盐渍或盐水浸渍其他虾/对虾建模。 |
| excluded_use | 使用所选白虾 UUID 通用表示全部 CPC 21256 产品；熟制或烟熏产品；没有共同且披露的质量基准时进行跨路线比较；把暂定范围当作已验证绩效。 |
| required_metadata | PCR id；CPC 代码；产品流 UUID 及语义限制；物种；来源；未熟状态；产品形态；保藏路线；设施和地理；参考质量条件；包装；储存；时间覆盖；分配；上游数据集；废物去向。 |
| required_quality_disclosure | 完整性和核对结果；仪表与秤覆盖；代理使用；分配敏感性；质量条件检测；路线分离；不确定性；剩余 `reasoned_estimate` 数值及替换计划。 |
| update_trigger | 物种或产品流身份、产品形态、保藏路线、设施技术、能源供应、储存条件、包装、产率、分配、废物去向、适用 CPC/Codex/PEF 指南发生变化，或出现可替代推理估算的更强证据。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0` | 官方指南（`official_guidance`） | 联合国统计司，《产品总分类（CPC）3.0 版》子类 21256 解释性说明，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索日期 2026-08-11）。 | 产品范围、纳入的保藏路线，以及对活/鲜/冷藏、熟制、烟熏和其他加工产品的排除。 |
| `codex-cxc-52-2003` | 官方指南（`official_guidance`） | Codex Alimentarius，CXC 52-2003，《鱼和渔业产品操作规范》，https://workspace.fao.org/sites/codex/Standards/CXC%2052-2003/CXC_052e.pdf（检索日期 2026-08-11）。 | 渔业产品加工中的接收、整理、过程控制、卫生、用水、操作和记录背景。 |
| `codex-cxs-92-1981` | 标准（`standard`） | Codex Alimentarius，CXS 92-1981，《速冻虾或对虾标准》，2024 年修订，https://workspace.fao.org/sites/codex/Standards/CXS%2092-1981/CXS_092e.pdf（检索日期 2026-08-11）。 | 冷冻路线产品定义、未熟/熟制状态声明、-18 °C 条件、冰衣水质量、不含冰衣的净含量、产品形态和储存标签。 |
| `eu-pef-2021` | 官方指南（`official_guidance`） | 欧盟委员会，《关于使用环境足迹方法的建议（EU）2021/2279》，附件 I 产品环境足迹方法，CELEX 32021H2279，https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279（检索日期 2026-08-11）。 | 生命周期清单完整性、系统边界披露、多功能性层级、数据质量和更新要求。 |
