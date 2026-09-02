---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-pigs-frozen
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 冷冻猪肉

## 1. 范围与适用性

本 PCR 适用于以冷冻状态离开报告设施的食用家猪肉，包括胴体、半胴体、带骨分割肉和去骨分割肉。前景数据包覆盖未冻结猪肉的接收、为生产声明产品而在场址内进行的切割或修整、包装、冻结、冷冻存放及设施门口出厂。

养猪、饲料生产、动物饲养、活猪运输、屠宰和胴体整理位于默认前景起始条件的上游。必须使用与进厂猪肉相匹配的上游数据集表示这些阶段，不得静默遗漏。当同一报告组织运营这些阶段时，其清单仍须能够单独识别，并与本冷冻肉前景数据包链接。出厂门之后的下游配送、零售、解冻、烹饪、消费和生命末期不属于本 PCR，除非研究明确扩展边界。

本 PCR 不涵盖未经冻结即销售的鲜猪肉或冷藏猪肉、作为独立产品报告的食用内脏、炼制脂肪、皮张、调制或腌制猪肉产品、熟制猪肉或混合物种肉制品。生产者应声明分割或胴体形式、带骨状态、产品净质量、包装状态、冻结技术、目标出厂温度或温度规范、储存时长、地理范围和生产期。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-pigs-frozen |
| classification_refs | CPC 3.0: 21133 — 冷冻猪肉 |
| covered_products | 以冷冻猪肉净质量作为参考输出的食用冷冻猪胴体、半胴体、带骨猪肉分割肉和去骨猪肉分割肉 |
| excluded_products | 鲜猪肉或冷藏猪肉；单独销售的食用内脏；炼制脂肪；皮张；调制、腌制、熟制或混合物种肉制品 |
| representative_product | 冻结设施出厂门口的冷冻猪肉净分割肉 |
| production_route | 接收未冻结猪肉；按需准备和修整；包装；冻结；冷冻存放；出厂 |
| market_state | 在设施出厂门口处于冷冻状态的食用肉，按声明为已包装或未包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在报告设施出厂门口供应的冷冻食用猪肉 |
| How much | 1,000 kg 冷冻猪肉净质量，不含运输包装；只有在声明的商业规格明确计入包装时才可将包装计入产品质量 |
| How well | 符合所声明的分割或胴体形式、带骨状态、包装状态、冻结方法和出厂温度规范 |
| How long or cycle | 一个生产批次从接收、准备、冻结到声明的冷冻储存期结束并出厂 |
| reference_flow_link | `frozen_pork_reference_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 猪肉，冷冻 `e7b009bd-ea26-4617-9ccf-f14d12e2c0b6` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 猪种；胴体或分割形式；带骨或去骨状态；食用产品状态；净质量约定；包装状态；冻结技术；目标出厂温度或温度规范；冷冻储存时长；设施地理范围；生产期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考冷冻猪肉输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告 1,000 kg 冷冻猪肉净质量。除非所声明的商业规格包含包装，否则产品质量不含包装；若包含，仍须单独披露包装质量。 |
| `incoming_meat_mass` | 进厂未冻结猪肉和中间肉品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用校准秤记录，并保持一致的净质量和温度状态基准；记录皮重、带骨状态以及是否包含表面冰或冰衣。 |
| `energy_conversion` | 电力和燃料 | Energy 或载能体特定属性 | 电力用 kWh；燃料用声明单位 | 保留计费或计量的原始单位及换算因子。不得在没有明确换算和来源时用一次能源替代交付电力。 |
| `temperature_time` | 冻结和冷冻储存 | 温度和经过时间 | °C 及 h 或 d | 记录产品温度或经验证的替代温度、设备设定值、冻结开始和结束时间及储存时长；声明测量位置和采样频率。 |
| `refrigerant_mass` | 制冷剂补充、回收和计算排放 | Mass | kg | 按化学品或混合物名称分别记录每种制冷剂。计算排放前不得将不同制冷剂合并为一个质量行。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 上游屠宰和胴体整理完成后，在冻结设施门口接收的未冻结食用猪肉；须声明实际温度、胴体或分割形式、带骨状态、净质量和上游数据集引用 |
| starting_condition_role | 冷冻肉前景数据包的外购或内部转移上游产品投入 |
| product_classification_scope | 对应 CPC 3.0 代码 21133 的冷冻食用猪肉；分类仅是映射语境，不能替代语义产品边界 |
| recursive_input_rule | 若投入同一产品类别的冷冻猪肉，应将其作为单独定量的技术圈投入记录，带有自身上游数据集和声明用途；不得递归套用本 PCR 来隐藏该投入 |
| upstream_dataset_requirement | 为进厂未冻结猪肉所含的养猪、活猪运输、屠宰、胴体整理及任何场外冷藏运输链接具有代表性的上游数据集 |
| disclosure | 披露设施门、进厂肉品状态、所含准备作业、冻结技术、包装顺序、储存时长、截断、分配方法，以及作为单独链接清单表示的任何一体化上游阶段 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_foreground_operations` | frozen_pork_foreground | 纳入接收和温控搬运、在场址内进行的切割和修整、包装、冻结、截至出厂的冷冻储存、可归属于这些作业的清洁、电力、燃料、水、制冷剂管理、包装、废物、废水和直接排放。 | fao-meat-industry-2004; fao-leap-pig-2018 |
| `sb_upstream_linkage` | incoming_unfrozen_pig_meat | 通过与所声明进厂肉品状态相匹配、可单独识别的上游数据集表示养猪、活猪运输、屠宰、胴体整理和场外冷藏运输。 | fao-leap-pig-2018 |
| `sb_downstream_exclusion` | post_dispatch_stages | 排除出厂门之后的运输、配送、零售、解冻、烹饪、消费和生命末期，除非研究明确扩展系统并单独报告这些阶段。 | fao-leap-pig-2018 |
| `sb_cutoff_disclosure` | completeness_and_cutoffs | 绘制并保留过程和物流图，披露每项截断并论证排除；不得仅因 Tiangong UUID 未解析而排除某个流。 | fao-leap-pig-2018 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `meat_receipt_preparation` | 未冻结肉品接收与准备 | required | 始终要求；只有在报告设施内实际进行时才纳入切割、剔骨和修整活动 | 前景接收、温控搬运、准备和物料平衡 | 转入冻结的准备后猪肉 kg |
| `freezing_packaging` | 包装与冻结 | required | 始终要求；记录包装与冻结的实际先后顺序 | 转化为冷冻猪肉的前景过程 | 离开冻结作业的 1,000 kg 冷冻猪肉净质量 |
| `frozen_storage_dispatch` | 冷冻储存与出厂 | required | 始终要求；只有在有直接出厂记录时储存时长才可为零 | 前景冷冻存放和设施门口出厂 | 出厂的 1,000 kg 冷冻猪肉净质量 |

### 过程：未冻结肉品接收与准备（`meat_receipt_preparation`）

#### 输入

##### 产品流

###### 进厂未冻结猪肉（`incoming_unfrozen_pig_meat`）

未冻结食用猪肉从所声明的上游屠宰和胴体整理系统跨入前景门。其状态和上游数据集决定上游负荷是否完整。

- 选定流：未解析 — 进厂猪胴体或分割肉；不得使用冷冻参考产品 UUID
- 流属性/单位：Mass / kg
- 数量规则：批次接收并验收的净质量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 冷冻猪肉净参考输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_received_meat`
- 数量范围：暂定进厂肉品质量平衡 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：2500
  - 单位：kg
  - 基准：每 1,000 kg 冷冻猪肉净参考输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 准备和清洁用水（`preparation_water`）

记录可归属于本过程的产品接触准备、设备清洗和卫生用水，优先使用计量值，否则使用经核对的数值。

- 选定流：未解析 — 供水产品流
- 流属性/单位：Volume / m3
- 数量规则：可归属取水量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 冷冻猪肉净参考输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_wastewater`
- 数量范围：暂定准备用水 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：m3
  - 基准：每 1,000 kg 冷冻猪肉净参考输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转入冻结的准备后猪肉（`prepared_pig_meat`）

记录转入冻结作业的准备后猪肉净质量，分割和带骨状态应与参考产品一致。

- 选定流：未解析 — 准备后未冻结猪肉中间流
- 流属性/单位：Mass / kg
- 数量规则：净转移质量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 冷冻猪肉净参考输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- 数量范围：暂定准备后肉品质量平衡 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：2200
  - 单位：kg
  - 基准：每 1,000 kg 冷冻猪肉净参考输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 销售的修整共产品（`marketed_trimming_coproducts`）

按去向和产品角色分别记录销售的食用修整产物或送往炼制的修整产物。不得将其与废物合并。

- 选定流：未解析 — 按声明去向区分的修整共产品
- 流属性/单位：Mass / kg
- 数量规则：按类型实测共产品净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 冷冻猪肉净参考输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- 数量范围：暂定共产品质量 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1,000 kg 冷冻猪肉净参考输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 送往处理的准备固体废物（`preparation_solid_waste`）

记录送往已声明处理路线的非销售组织、受污染物料以及地面或筛分固体。

- 选定流：未解析 — 动物组织准备废物
- 流属性/单位：Mass / kg
- 数量规则：按处理路线实测或经质量平衡核对的废物质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 冷冻猪肉净参考输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_preparation_outputs`
- 数量范围：暂定准备废物 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1,000 kg 冷冻猪肉净参考输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 准备废水（`preparation_wastewater`）

记录前景过程排出、尚未进行场内或场外处理的废水，避免与产品中保留的水或所收集固体重复计算。

- 选定流：未解析 — 送往声明处理路线的废水
- 流属性/单位：Volume / m3
- 数量规则：排放量实测值或水量平衡计算值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 冷冻猪肉净参考输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_water_wastewater`
- 数量范围：暂定废水 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：m3
  - 基准：每 1,000 kg 冷冻猪肉净参考输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：包装与冻结（`freezing_packaging`）

#### 输入

##### 产品流

###### 准备后猪肉投入（`prepared_pig_meat_input`）

记录进入包装和冻结的准备后猪肉净质量。该数值应与 `meat_receipt_preparation` 的转移输出相核对。

- 选定流：未解析 — 准备后未冻结猪肉中间流
- 流属性/单位：Mass / kg
- 数量规则：净转移质量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 冷冻猪肉净参考输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- 数量范围：暂定冻结投入质量 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：2200
  - 单位：kg
  - 基准：每 1,000 kg 冷冻猪肉净参考输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 冻结电力（`freezing_electricity`）

有条件时记录专用电表；否则使用有文件依据的设备运行时间和功率数据，将经核对的设施电表读数分配给冻结过程。

- 选定流：未解析 — 供应至设施的市场电力
- 流属性/单位：Energy / kWh
- 数量规则：可归属于包装和冻结的电力实测值或计算值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 冷冻猪肉净参考输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_freezing_energy_temperature`
- 数量范围：暂定冻结电力 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：50
  - 上限：5000
  - 单位：kWh
  - 基准：每 1,000 kg 冷冻猪肉净参考输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 制冷剂补充（`refrigerant_makeup`）

按化学品或混合物名称分别记录每次制冷剂添加，并保留服务于该批次的制冷系统维修记录。

- 选定流：未解析 — 按声明化学品或混合物区分的制冷剂产品
- 流属性/单位：Mass / kg
- 数量规则：报告期内添加并归属于冻结的制冷剂实测质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 冷冻猪肉净参考输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`
- 数量范围：暂定制冷剂补充量 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1,000 kg 冷冻猪肉净参考输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 产品包装材料（`product_packaging`）

按材料和净质量记录一级、二级和三级包装，将可重复使用包装与消耗的包装分开。

- 选定流：未解析 — 按声明材料区分的包装材料
- 流属性/单位：Mass / kg
- 数量规则：采购或领用包装减去有记录的返还量和未使用库存变化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 冷冻猪肉净参考输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 数量范围：暂定包装质量 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：200
  - 单位：kg
  - 基准：每 1,000 kg 冷冻猪肉净参考输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 冷冻猪肉参考输出（`frozen_pork_reference_output`）

这是唯一使用已核验 Tiangong 参考产品流 UUID 的清单行。在冻结作业出口按声明的质量基准记录冷冻猪肉净质量。

- 选定流：猪肉，冷冻 `e7b009bd-ea26-4617-9ccf-f14d12e2c0b6`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1,000 kg 冷冻猪肉净质量的固定参考数量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：1,000 kg 冷冻猪肉净参考输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）

##### 废物流

###### 包装废料（`packaging_scrap`）

记录未成为产品包装的包装材料，按材料和处理路线区分。

- 选定流：未解析 — 按声明材料区分的包装废物
- 流属性/单位：Mass / kg
- 数量规则：废弃包装实测质量加库存核对损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 冷冻猪肉净参考输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 数量范围：暂定包装废料 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：200
  - 单位：kg
  - 基准：每 1,000 kg 冷冻猪肉净参考输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 排放到空气的制冷剂（`refrigerant_release_air`）

根据有文件记录的充注和维修平衡，分别计算每种制冷剂的排放；当有回收或库存变化记录时，不得把全部补充量都报告为排放。

- 选定流：未解析 — 所声明制冷剂排放到空气的基本流
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_refrigerant_release` 计算的制冷剂质量平衡排放
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 冷冻猪肉净参考输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`
- 数量范围：暂定制冷剂排放 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1,000 kg 冷冻猪肉净参考输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：冷冻储存与出厂（`frozen_storage_dispatch`）

#### 输入

##### 产品流

###### 进入储存的冷冻猪肉（`frozen_pork_storage_input`）

记录从冻结转入冷冻储存的净质量，包括有记录的转移损失，但净产品质量不包含包装质量。

- 选定流：未解析 — 内部冷冻猪肉中间流；不得把参考产品 UUID 重复用作外购投入
- 流属性/单位：Mass / kg
- 数量规则：转入储存的冷冻猪肉净质量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 冷冻猪肉净参考输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_dispatch`
- 数量范围：暂定储存投入质量 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：1200
  - 单位：kg
  - 基准：每 1,000 kg 冷冻猪肉净参考输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 冷冻储存电力（`storage_electricity`）

记录可归属于声明储存时长和出厂搬运的电力。使用专用计量，或依据有文件记录的负荷、容积和时间，从经核对的设施电表进行分配。

- 选定流：未解析 — 供应至设施的市场电力
- 流属性/单位：Energy / kWh
- 数量规则：声明批次和时长内储存及出厂电力的实测值或计算值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 冷冻猪肉净参考输出和声明储存时长
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_storage_dispatch`
- 数量范围：暂定冷冻储存电力 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5000
  - 单位：kWh
  - 基准：每 1,000 kg 冷冻猪肉净参考输出在声明储存时长内
  - 基准类型：储存时长（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 在设施门口出厂的冷冻猪肉（`frozen_pork_dispatched`）

记录出厂净质量，并确认其批次、产品限定信息和温度规范与参考流相同。

- 选定流：未解析 — 参考冷冻猪肉产品的出厂转移
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归一化至 1,000 kg 的出厂净质量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 冷冻猪肉净参考输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_dispatch`

##### 废物流

###### 储存与出厂产品损失（`storage_product_loss`）

按去向记录损坏、解冻、不合格或其他未出厂肉品，并与销售共产品分开。

- 选定流：未解析 — 送往声明处理路线的冷冻肉损失
- 流属性/单位：Mass / kg
- 数量规则：不合格质量实测值或对无法解释损失进行调查后的库存核对差额
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 冷冻猪肉净参考输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_storage_dispatch`
- 数量范围：暂定储存损失 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：200
  - 单位：kg
  - 基准：每 1,000 kg 冷冻猪肉净参考输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | shared_foreground_inputs | 在技术可行时，通过单独计量并细分接收、准备、冻结、包装、储存和废物处理作业来避免分配。 | fao-leap-pig-2018 |
| `allocation_frozen_pork_group` | covered_frozen_pork_presentations | 对属于声明覆盖产品组的胴体、半胴体、带骨或去骨冷冻猪肉形式不进行分配；除非研究目标要求单独计量的产品包，否则按其净质量汇总。 | fao-leap-pig-2018 |
| `allocation_coproduct_hierarchy` | marketed_non_reference_outputs | 无法细分时，仅对功能和市场相似的输出采用有文件依据的物理或生物物理关系；否则按同期经济净价值分配共同负荷，并对分配选择进行敏感性检验。 | fao-leap-pig-2018 |
| `allocation_waste_treatment` | waste_and_residual_outputs | 不得把以处置为目的的输出作为共产品。将可归属的收集和处理负荷保留在前景数据包中；若某输出有记录明确的市场和后续用途，应一致地重新分类并采用共产品层级。 | fao-leap-pig-2018 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_received_meat` | `meat_receipt_preparation` | 进厂未冻结猪肉 | 地磅、台秤、接收和供应商记录 | lot_id; supplier; upstream_dataset_id; gross_mass; tare_mass; net_mass; temperature; carcass_or_cut_form; bone_status; acceptance_status | 使用校准秤读数并与接收单据核对 | kg 和 °C | 每个接收批次 | 完整的代表性生产期，通常至少连续 12 个月；季节性生产则覆盖全部生产活动 | 数据集代表的全部设施和供应商 | 按相容产品限定信息汇总验收净质量；用 `calc_reference_normalization` 归一化 | 秤校准、皮重方法、接收单据、批次可追溯性和上游数据集匹配 |
| `cp_water_wastewater` | `meat_receipt_preparation` | 准备用水和废水 | 仪表、发票、分表估算和排放记录 | meter_start; meter_end; water_source; attributable_share; discharge_volume; retained_water; cleaning_event; treatment_route | 优先使用专用仪表；否则核对设施水量平衡和有文件依据的分配驱动量 | m3 | 仪表周期和每次重要清洁活动 | 与产品输出相同的期间 | 范围内全部准备和清洁作业 | 汇总可归属取水和排水；区分水源和处理路线；用 `calc_reference_normalization` 归一化 | 仪表校准、发票、分配依据、水量平衡核对和处理记录 |
| `cp_preparation_outputs` | `meat_receipt_preparation` | 准备后肉品、共产品和固体废物 | 转移秤、出成率表、销售记录和废物联单 | lot_id; prepared_meat_mass; coproduct_type; coproduct_mass; coproduct_destination; waste_type; waste_mass; treatment_route | 在每条输出路线使用校准质量记录 | kg | 每批次或班次 | 与进厂肉品相同的期间 | 范围内全部准备线 | 按输出角色和去向汇总；按 `calc_meat_mass_balance` 与进厂质量核对 | 秤校准、签字转移或销售记录、废物联单和经调查的核对差异 |
| `cp_freezing_energy_temperature` | `freezing_packaging` | 冻结电力和时间—温度轨迹 | 电表、设备日志和温度记录 | meter_start; meter_end; equipment_id; rated_power; runtime; lot_id; product_start_temperature; product_end_temperature; setpoint; freezing_start; freezing_end | 优先使用专用电表和产品温度记录仪；只有不能分表时才计算设备负荷 | kWh、°C 和 h | 仪表周期和每个批次 | 与冷冻输出相同的期间 | 范围内全部冻结设备和辅助负荷 | 汇总专用计量电力；否则按有文件依据的设备运行时间和负荷分配经核对电力；用 `calc_reference_normalization` 归一化 | 仪表校准、记录仪校准、设备记录、设施账单核对和分配计算 |
| `cp_refrigerant_balance` | `freezing_packaging` | 制冷剂补充和排放 | 制冷剂库存和维修记录 | refrigerant_id; system_id; opening_charge; additions; closing_charge; recovered_mass; returned_mass; service_date; operation_share | 按化学品或混合物进行制冷剂库存和维修记录质量平衡 | kg | 每次维修事件以及报告期期初和期末 | 与冻结和储存输出相同的期间 | 服务于范围内作业的全部制冷回路 | 用 `calc_refrigerant_release` 按制冷剂分别计算排放；共享系统使用有文件依据的作业份额分配 | 维修发票、钢瓶称量、技术人员记录、充注库存和核对审查 |
| `cp_packaging_materials` | `freezing_packaging` | 产品包装和包装废料 | 采购、库存、领用、重复使用和废物记录 | material_id; opening_stock; receipts; closing_stock; returned_reuse; packaged_product_assignment; scrap_mass; treatment_route | 由采购、领用和废物记录支持的库存核对 | kg | 每个库存期和材料变更时 | 与冷冻输出相同的期间 | 范围内全部一级、二级和三级包装 | 按材料计算包装消耗；分开可重复使用返还物和废料；用 `calc_reference_normalization` 归一化 | 供应商发票、盘点记录、材料规格、重复使用日志和废物联单 |
| `cp_storage_dispatch` | `frozen_storage_dispatch` | 储存和出厂猪肉、储存电力、温度、时长及损失 | 仓库、出厂、仪表和温度记录 | lot_id; storage_entry_mass; dispatch_mass; entry_time; dispatch_time; storage_zone; setpoint; temperature_log; meter_start; meter_end; load_share; rejected_mass; loss_fate | 校准出厂秤、连续或代表性温度记录仪，以及专用电表或经核对负荷分配 | kg、kWh、°C、h 和 d | 每个批次；电力仪表周期；按经验证频率记录温度 | 与冷冻输出相同的期间，并涵盖全部声明储存时长 | 范围内全部冷库和出厂搬运 | 按批次计算储存时长；按有文件依据的质量—时间、托盘空间—时间或经验证负荷份额分配储存电力；核对输出和损失；用 `calc_reference_normalization` 归一化 | 秤、仪表和记录仪校准；仓库台账；出厂记录；分配计算；损失调查 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部清单值 | normalized_value = attributable_period_value / net_frozen_pork_dispatched × 1,000 kg | 可归属期间值；按声明质量基准计算的冷冻猪肉出厂净质量 | 每 1,000 kg 冷冻猪肉净质量的清单值 |  |
| `calc_meat_mass_balance` | `meat_receipt_preparation` 和 `frozen_storage_dispatch` | 将接收或转移肉品质量与参考产品、单独销售的共产品、废物和有记录的水分或库存变化核对；调查并披露全部残差 | 进厂肉品；准备后肉品；冷冻输出；共产品；废物；库存变化；有记录的水分变化 | 批次和报告期质量平衡核对 | fao-leap-pig-2018 |
| `calc_refrigerant_release` | 服务于冻结和储存的制冷回路 | release = opening_charge + additions - closing_charge - recovered_mass - returned_mass；只有调查不一致记录后才可将结果下限设为零 | 按制冷剂区分的期初和期末充注量；补充量；回收量；返还量；可归属作业份额 | 按制冷剂区分并归一化至参考流的排放 kg |  |
| `calc_packaging_consumption` | 包装材料 | consumed_packaging = opening_stock + receipts - closing_stock - reusable_returns；分别报告废料和随产品包装 | 按材料区分的包装库存、接收量、可重复使用返还量、废料和产品分配 | 按材料区分的包装消耗 kg 和废料 kg |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity_traceability` | 产品和进厂肉品 | 保持从进厂未冻结肉品到准备、冻结、储存和出厂的批次链接，包括上游数据集 id 和每项必需产品限定信息。 | 接收记录、生产批次台账、仓库台账、出厂记录和上游数据集引用 |
| `dq_temporal_coverage` | 前景活动数据 | 使用一个一致的代表性期间，通常至少连续 12 个月；季节性或生产活动采用其他期间时须给出理由；披露偏离和库存变化。 | 带日期的仪表、生产、库存、维修和出厂记录；期间覆盖计算 |
| `dq_representativeness` | 设施、技术、地理范围和供应商 | 记录技术、地理和时间代表性、完整性及准确性；披露代理数据并评估其对结果的影响。 | 遵循 `fao-leap-pig-2018` 的数据质量评价和保留的代理数据理由 |
| `dq_measurement_control` | 质量、电力、水、制冷剂和温度 | 保留现行校准或验证证据，并调查缺失区间、负平衡、无法解释的仪表复位和单位不一致。 | 校准证书、维护记录、异常日志和核对工作表 |
| `dq_reasoned_estimates` | 全部暂定范围 | 每个 `reasoned_estimate` 范围仅作为宽幅 QA 筛查。不得将其中值或上下限作为最终前景值；在用于发布关键用途前，须用采集数据或经审查的来源证据替换。 | 显示替换证据或明确继续仅作 QA 使用的审查记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | reference_flow | 要求产品流 `e7b009bd-ea26-4617-9ccf-f14d12e2c0b6`、Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`、kg 及全部必需产品限定信息。 |  |
| `validation_process_coverage` | foreground_processes | 要求全部三个 process id，并明确声明实际切割、修整、包装顺序、冻结技术、冷冻储存时长和任何一体化上游阶段。 | fao-meat-industry-2004 |
| `validation_mass_balance` | meat_and_packaging_balances | 要求对进厂、中间、参考产品、共产品、废物、包装和库存变化质量进行核对；无法解释的残差属于发现项，不得静默归入参考产品。 | fao-leap-pig-2018 |
| `validation_energy_temperature` | freezing_and_storage | 要求电力记录、冻结时间—温度记录、储存时长、温度监测，以及共享电表采用的有文件依据的分配方法。 |  |
| `validation_refrigerant` | refrigeration_system | 要求制冷剂身份以及按制冷剂区分、非负且与记录核对的质量平衡；未解析的基本流 UUID 继续明确标识，不得复用参考产品 UUID。 |  |
| `validation_allocation` | multifunctional_outputs | 要求细分证据或所选物理、生物物理或经济分配键、产品分组、适用时的价格期间，以及对重要分配选择的敏感性分析。 | fao-leap-pig-2018 |
| `validation_estimate_status` | provisional_qa_ranges | 若最终清单量由 `reasoned_estimate` QA 校验范围填充，应标记为不符合，除非经审查证据明确授权该用途。 |  |
| `validation_data_quality` | dataset_completeness | 要求时间、技术、地理、完整性和准确性评价；披露截断、代理、缺失记录及跳过的校验检查。 | fao-leap-pig-2018 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 冻结设施出厂门口冷冻猪肉生产的前景数据包 |
| downstream_use | 方法学审查、来源解析和质量披露完成后可作 `secondary_dataset`；`background_dataset` |
| allowed_use | 用于与所声明产品限定信息、技术、地理范围、期间、上游链接和设施门相匹配的冷冻猪肉归因型 LCI 和生命周期模型构建 |
| excluded_use | 无支持的比较性声明；鲜肉或冷藏肉；调制或腌制猪肉；其他物种；遗漏所需上游猪肉数据集或用 QA 估算替代前景值的研究 |
| required_metadata | PCR id 和版本状态；产品及参考流 UUID；CPC 映射语境；分割或胴体形式；带骨状态；净质量约定；包装状态；冻结技术；出厂温度规范；储存时长；设施地理范围；期间；上游数据集 id；截断；分配方法；未解析 UUID |
| required_quality_disclosure | 记录覆盖；校准状态；仪表和秤分配；质量平衡残差；代理和估算使用；来源版本；时间、技术和地理代表性；完整性；不确定性和敏感性结果；跳过的检查 |
| update_trigger | 进厂肉品规格、供应商或上游数据集、分割组合、冻结或制冷技术、包装、储存时长、分配、设施地理范围、法规或代表性能耗和物料绩效发生重大变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-leap-pig-2018` | `official_guidance` | FAO. 2018. *Environmental performance of pig supply chains: Guidelines for assessment (Version 1).* Livestock Environmental Assessment and Performance Partnership. ISBN 978-92-5-130377-1. https://openknowledge.fao.org/3/i8686en/I8686EN.pdf（访问于 2026-08-11） | 猪产品功能单位和边界链接；物流核算；分配层级和敏感性；初级数据、数据缺口、代表性、完整性和质量规则 |
| `fao-meat-industry-2004` | `official_guidance` | FAO. 2004. *Good practices for the meat industry.* FAO Animal Production and Health Manual. ISBN 92-5-105146-1. https://www.fao.org/4/y5454e/y5454e00.htm（访问于 2026-08-11） | 肉类过程分解、胴体处理、设施卫生、可追溯性及面向 HACCP 的前景记录结构 |
