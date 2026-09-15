---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.aviation-gasoline
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 航空汽油

## 1. 范围与适用性

本 PCR 覆盖为航空活塞式火花点火发动机配制、并在炼厂或燃料终端厂界放行的成品航空汽油前景生产。含铅或无铅牌号均可适用，但数据包必须声明适用的航空燃料规范、牌号、配方路线、含铅状态、含氧化合物状态、生产地点、报告期和批次放行依据。

前景边界从航空汽油调合组分、牌号专用添加剂、公用工程和其他材料进入调合与放行作业开始，包括调合、添加剂注入、批次质量放行、场内储存及厂界装载。原油、炼厂调合组分、添加剂及外购公用工程的生产由上游数据集连接表示；仅在明确纳入前景时才把这些作业作为前景过程。飞机加油、超过所声明厂界的下游配送、燃料使用与燃烧、维护及飞机运行不在本 PCR 范围内。

Jet A、Jet A-1、其他煤油型涡轮燃料、汽油型喷气燃料、车用汽油及未指明类型的通用航空燃料均不包括。本 PCR 不主张不同航空汽油牌号可互换。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.aviation-gasoline |
| classification_refs | CPC 3.0:33312，Aviation gasoline，精确语义上下文；映射接受由本 PCR 之外的治理流程负责 |
| covered_products | 用于航空活塞式火花点火发动机的成品航空汽油，包括符合所声明适用规范的含铅和无铅牌号 |
| excluded_products | 航空涡轮燃料、汽油型喷气燃料、车用汽油、作为未成品出售的炼厂调合组分，以及没有声明燃料规范和牌号的通用航空燃料 |
| representative_product | 在调合设施厂界放行的 1 kg 符合规范的成品航空汽油 |
| production_route | 接收与规范相关的调合组分及添加剂；受控调合和添加剂注入；批次检测与放行；场内储存和装载 |
| market_state | 厂界生产混合成品液体燃料，已声明规范、牌号、含铅状态、含氧化合物状态和地点 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 为航空活塞式火花点火发动机使用而放行的成品航空汽油 |
| How much | 1 kg |
| How well | 符合所声明的适用航空汽油规范和牌号，并保留批次放行证据 |
| How long or cycle | 一个有代表性的报告期，由已放行生产批次归一化 |
| reference_flow_link | aviation_gasoline_output |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 航空汽油 `60324705-7a75-4213-82e6-30e7b9a24bc9` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 适用燃料规范及版本；牌号；含铅状态及实测或声明的铅含量；含氧化合物状态；配方路线；生产地点；报告期；批次放行状态；按体积记录换算质量时的产品温度和实测密度 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及所有质量归一化清单行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将每个清单量归一化至 1 kg 已放行航空汽油，并保留原始测量和换算记录。 |
| `volume_to_mass` | 以体积记录的液体吞吐或损失 | 实测批次密度和实测体积 | 换算后为 kg | 仅使用与相关产品、温度和批次相符的实测或有文件记录的密度把体积换算为质量，不得使用未声明的通用密度。 |
| `batch_mass_balance` | 调合、储存和装载 | Mass | kg | 在同一报告期内核对组分接收、内部转移、放行产品、返工、不合格物料、含产品废水、泄漏以及蒸发或逸散损失。 |
| `quality_identity` | 参考产品 | 所声明规范和牌号的属性 | 规范规定单位 | 保留批次证书或等效放行记录，证明所声明的航空汽油规范和牌号。牌号特定限值取自所声明规范，不作为通用 PCR 数值嵌入。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 航空汽油调合组分、牌号专用添加剂、公用工程和其他材料进入前景调合作业；任何场内组分生产均单独识别 |
| starting_condition_role | 成品航空汽油调合与放行的前景门到门生产起点 |
| product_classification_scope | 用于航空活塞式火花点火发动机的成品航空汽油；分类引用仅提供上下文，不定义 canonical PCR 身份 |
| recursive_input_rule | 返回调合或返工的成品航空汽油按单独输入记录一次，同时记录其既有数据集引用和质量；不得在同一前景系统中递归展开相同 PCR |
| upstream_dataset_requirement | 对每种外购调合组分、添加剂、能源载体、供水和研究目标所纳入的进厂运输连接有代表性的上游数据集 |
| disclosure | 声明设施及地点、报告期、规范和牌号、含铅和含氧化合物状态、配方路线、调合组分是否场内生产、储存与装载配置、蒸气控制状态以及所有边界排除项 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_required_operations` | 前景生产 | 纳入组分接收、调合、添加剂注入、批次质量放行、场内储存和厂界装载，以及相关公用工程、废物、泄漏和直接排放。 | `faa-ac-20-24d`; `epa-ap42-5-1`; `epa-ap42-5-2` |
| `boundary_upstream_links` | 外购投入 | 以连接的上游数据集表示调合组分、添加剂、外购公用工程、水及纳入的进厂运输；不得把其上游负荷视为零。 | `eu-pef-2021-2279` |
| `boundary_direct_emissions` | 调合、储存和装载 | 采集或计算场址特定的直接释放，包括设备泄漏、储罐损失、装载损失、溢漏和废水转移。采用工程方法时应使用设施工况和控制性能。 | `epa-ap42-5-1`; `epa-ap42-5-2` |
| `boundary_excluded_use` | 下游系统 | 排除超过所声明厂界的下游配送、飞机加油、燃料燃烧、飞机运行和维护；更宽范围研究如纳入这些活动，应作为单独过程报告。 | `eu-pef-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `blending_release` | 航空汽油调合、添加剂注入、检测与放行；Tiangong process `64853250-d002-406b-9226-77f1e17fd630` | required | 始终 | 前景生产和批次放行 | 1 kg 已放行航空汽油 |
| `storage_loading` | 已放行产品储存和厂界装载 | required | 始终 | 前景储存和发运 | 在所声明厂界交付的 1 kg 航空汽油 |

### 过程：航空汽油调合、添加剂注入、检测与放行（`blending_release`）

#### 输入

##### 产品流

###### 航空汽油基础调合组分（`base_blend_components`）

在记录允许时分别记录每种调合组分，包括组分身份、供应商或场内来源、质量、批次和上游数据集。只有在披露组分构成时才允许汇总为一个调合池投入。

- 选定流：场址为实际航空汽油调合组分选择的产品流
- 流属性/单位：Mass / kg
- 数量规则：投入已放行批次的组分实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行航空汽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_components`
- 来源：`faa-ac-20-24d`; `astm-d910`
- 数量范围：暂定调合组分质量筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.8
  - 上限：1.2
  - 单位：kg/kg 已放行航空汽油
  - 基准：在单独核算返工和损失前，每 kg 已放行产品投入的调合组分总质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 牌号专用添加剂包（`grade_specific_additives`）

记录实际使用的每种添加剂，并保留其功能、适用牌号、相关时的铅或金属含量、供应商、批次和质量。不得假定所有航空汽油牌号使用相同添加剂包。

- 选定流：场址为实际牌号专用添加剂选择的产品流
- 流属性/单位：Mass / kg
- 数量规则：注入已放行批次的添加剂实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行航空汽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_components`
- 来源：`faa-ac-20-24d`; `astm-d910`; `faa-pafi-fuel-best-practices`
- 数量范围：暂定添加剂包筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg/kg 已放行航空汽油
  - 基准：对所有单独计量牌号专用添加剂的宽泛初筛
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 外购电力（`blending_electricity`）

记录组分接收、调合、泵送、添加剂注入、检测和放行使用的计量电力，并采用与设施和报告期匹配的电力组合。

- 选定流：场址选择的电力供应产品流
- 流属性/单位：Energy / kWh
- 数量规则：可归属于调合与放行过程的分表计量或发票核对电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行航空汽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blending_utilities`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定电力筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kWh/kg 已放行航空汽油
  - 基准：调合、泵送、检测和放行电力的宽泛首轮筛选
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 工艺和清洗水（`blending_water`）

记录因设备清洗、实验室工作、泄漏响应或其他生产用途而跨越过程边界的水；通过细分排除无关场址用水。

- 选定流：场址选择的供水产品流
- 流属性/单位：Mass / kg
- 数量规则：可归属于已放行航空汽油批次的实测或分配用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行航空汽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blending_utilities`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定用水筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kg/kg 已放行航空汽油
  - 基准：工艺、实验室和清洗用水的宽泛首轮筛选
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已放行航空汽油（`aviation_gasoline_output`）

参考产品只有在所声明批次规范和牌号经验证后才放行。归一化数量来自已放行批次质量，而非容器名义容量。

- 选定流：航空汽油 `60324705-7a75-4213-82e6-30e7b9a24bc9`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：报告期已放行航空汽油质量除以报告期已放行航空汽油质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 已放行航空汽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_finished_product_release`
- 来源：`faa-ac-20-24d`; `astm-d910`

##### 废物流

###### 不合格物料和未回收泄漏（`off_spec_and_spill_waste`）

当处理路线不同时，分别记录不合格物料、受污染产品、实验室弃样和未回收泄漏。返回调合的物料记录为返工而非废物。

- 选定流：与实际物料和处理路线匹配的场址废物流
- 流属性/单位：Mass / kg
- 数量规则：送往各废物处理路线的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行航空汽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_rework`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定不合格物料和泄漏废物筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg/kg 已放行航空汽油
  - 基准：作为废物离开前景系统的物料宽泛首轮筛选
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 工艺废水（`blending_wastewater`）

记录跨越前景边界的废水，包括实测体积或质量及处理去向。返回生产的回收烃类应单独核算。

- 选定流：与实际处理路线匹配的场址废水流
- 流属性/单位：Mass / kg
- 数量规则：送往处理的实测废水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行航空汽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_rework`
- 来源：`epa-ap42-5-1`
- 数量范围：暂定废水筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kg/kg 已放行航空汽油
  - 基准：送往处理废水的宽泛首轮筛选
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 调合设备直接向空气释放（`blending_air_emissions`）

记录通风口、设备泄漏、置换蒸气和溢漏的监测或工程计算释放量。在监测或计算方法支持拆分时报告具名基本物质；不得把一个通用 VOC 总量当作完整的物种拆分清单。

- 选定流：场址为向空气释放的物质选择的基本流
- 流属性/单位：Mass / kg
- 数量规则：监测释放量，或使用实际吞吐量、物料性质、设备、控制和运行条件进行场址特定工程计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行航空汽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`epa-ap42-5-1`; `epa-ap42-5-2`
- 数量范围：暂定直接空气释放筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg/kg 已放行航空汽油
  - 基准：物质级审查前直接空气释放总质量的宽泛首轮筛选
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：已放行产品储存和厂界装载（`storage_loading`）

#### 输入

##### 产品流

###### 转入储存的已放行航空汽油（`released_product_to_storage`）

记录符合规范并已放行的航空汽油转入储存与装载阶段。这是前景内部连接，不作为另一个产品系统递归展开。

- 选定流：航空汽油 `60324705-7a75-4213-82e6-30e7b9a24bc9`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转入已放行产品储存的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在厂界装载的航空汽油
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_loading_throughput`
- 来源：`epa-ap42-5-2`
- 数量范围：暂定储存投入质量平衡筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.9
  - 上限：1.1
  - 单位：kg/kg 厂界装载产品
  - 基准：储存投入质量与装载产品、库存变化、返工、泄漏和蒸发相核对
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 储存和装载电力（`storage_loading_electricity`）

记录可归属于已放行航空汽油的储罐循环、泵送、仪表、蒸气控制和装载计量电力。

- 选定流：场址选择的电力供应产品流
- 流属性/单位：Energy / kWh
- 数量规则：可归属于储存和装载的分表计量或发票核对电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在厂界装载的航空汽油
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_loading_utilities`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定储存和装载电力筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kWh/kg 厂界装载产品
  - 基准：储存循环、蒸气控制和装载电力的宽泛首轮筛选
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 厂界交付的航空汽油（`plant_gate_aviation_gasoline`）

记录在所声明厂界装入交接容器或运输工具的实测质量。产品保持相同的已声明规范、牌号和批次放行身份。

- 选定流：航空汽油 `60324705-7a75-4213-82e6-30e7b9a24bc9`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：厂界装载交接质量归一化至 1 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 在厂界装载的航空汽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_storage_loading_throughput`
- 来源：`faa-ac-20-24d`; `astm-d910`

##### 废物流

###### 储存残油和装载泄漏废物（`storage_loading_waste`）

记录送往处理的残油、受污染排水和未回收装载泄漏。返回返工的回收物料应单独记录。

- 选定流：与实际物料和处理路线匹配的场址废物流
- 流属性/单位：Mass / kg
- 数量规则：储存和装载环节送往处理的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在厂界装载的航空汽油
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_loading_losses`
- 来源：`epa-ap42-5-2`
- 数量范围：暂定储存和装载废物筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg/kg 厂界装载产品
  - 基准：作为废物离开储存和装载阶段的物料宽泛首轮筛选
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 储存和装载向空气释放（`storage_loading_air_emissions`）

采用监测或场址特定工程方法记录呼吸、工作、静置、装载和逸散损失。使用工程方法时保留吞吐量、温度、蒸气压、装载方式、蒸气控制收集效率、控制效率和停机时间等输入。

- 选定流：场址为向空气释放的物质选择的基本流
- 流属性/单位：Mass / kg
- 数量规则：储存和装载的监测释放量或场址特定工程计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在厂界装载的航空汽油
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_storage_loading_losses`
- 来源：`epa-ap42-5-2`
- 数量范围：暂定储存和装载空气释放筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg/kg 厂界装载产品
  - 基准：物质级审查前直接空气释放总质量的宽泛首轮筛选
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 共用炼厂或终端作业 | 在技术可行时，通过分别计量或其他细分方式拆分航空汽油调合、检测、储存、装载和排放控制活动，以避免分配。 | `eu-pef-2021-2279` |
| `allocation_physical_driver` | 无法细分的共用公用工程和作业 | 无法细分时，使用有文件记录的因果物理驱动因素分配，例如计量能源、设备运行时间、批次质量吞吐量、储罐占用或装载吞吐量。对投入和直接排放一致地使用同一驱动因素。 | `eu-pef-2021-2279` |
| `allocation_other_relationship` | 剩余多功能负荷 | 只有在细分和相关物理关系均不可行时，才使用包括经济分配在内的其他关系。披露数值、期间、公式、受影响流和敏感性结果。 | `eu-pef-2021-2279` |
| `allocation_rework_and_waste` | 返工、不合格产品、回收蒸气和废物 | 返回调合的物料保留在质量平衡内，不计避免产品信用。按所声明处理路线分配废物处理；除非纳入单独论证的下游替代模型，否则不计回收材料信用。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_batch_components` | `blending_release` | `base_blend_components`; `grade_specific_additives` | 批次票据、储罐液位、质量流量计、配方单、供应商记录 | batch_id; component_id; supplier_or_on_site_source; mass; unit; additive_function; specification; grade; lead_content; oxygenate_status; timestamp | 将投料质量与配方和批次记录核对 | kg | 每批次 | 完整报告期 | 范围内全部调合线 | 汇总已接受投料并按已放行产品质量归一化 | 经校准的仪表或液位记录；签署配方；供应商批次可追溯性 |
| `cp_blending_utilities` | `blending_release` | `blending_electricity`; `blending_water` | 分表、发票、实验室和清洗日志 | meter_id; opening; closing; unit; timestamp; process_scope; allocation_driver | 优先直接分表，否则采用有文件记录的细分或因果分配 | kWh; kg | 连续或每账单期 | 完整报告期 | 范围内全部调合、检测和清洗作业 | 扣除无关负荷，汇总后按已放行产品质量归一化 | 仪表校准；发票核对；分配工作表 |
| `cp_finished_product_release` | `blending_release` | `aviation_gasoline_output` | 批次放行证书和交接或储罐质量记录 | batch_id; released_mass; unit; specification; edition; grade; lead_status; lead_content; oxygenate_status; test_results; release_decision; timestamp | 验证规范和牌号身份，仅汇总已放行产品 | kg | 每个已放行批次 | 完整报告期 | 范围内全部已放行批次 | 汇总已放行质量；不合格和返工批次单独保留 | 签署证书；实验室认可或 QA 记录；经校准质量测量或密度-体积测量 |
| `cp_waste_and_rework` | `blending_release` | `off_spec_and_spill_waste`; `blending_wastewater` | 废物联单、泄漏日志、废水表、返工票据 | event_or_batch_id; material_identity; mass_or_volume; density; destination; treatment_route; rework_status; timestamp | 测量每个出口并与批次质量平衡核对 | kg | 每次事件及每月核对 | 完整报告期 | 全部调合相关废物和废水 | 按物料及路线汇总；用实测密度换算体积 | 联单或仪表；事件记录；处理回执；质量平衡核对 |
| `cp_direct_air_emissions` | `blending_release` | `blending_air_emissions` | 监测结果、泄漏检测、吞吐量和工程计算输入 | source_id; substance; measured_concentration_or_factor; throughput; vapor_pressure; temperature; control_status; collection_efficiency; control_efficiency; downtime; result_mass; method | 优先直接监测，否则采用场址特定并有文件记录的工程计算 | kg | 按监测计划并覆盖每次物料事件 | 完整报告期 | 范围内全部通风口、泄漏、置换蒸气和溢漏 | 按具名物质汇总并按已放行产品质量归一化 | 方法引用；仪器 QA；输入记录；计算工作簿 |
| `cp_storage_loading_throughput` | `storage_loading` | `released_product_to_storage`; `plant_gate_aviation_gasoline` | 储罐库存、转移仪表、交接和批次记录 | tank_id; batch_id; opening_mass; receipts; loaded_mass; closing_mass; density; temperature; timestamp | 核对储存库存变化和交接转移 | kg | 每次转移并每月核对 | 完整报告期 | 范围内全部已放行产品储罐和装载台 | 按罐和批次进行质量平衡；按厂界装载质量归一化 | 经校准转移仪表；液位记录；交接文件；核对签字 |
| `cp_storage_loading_utilities` | `storage_loading` | `storage_loading_electricity` | 分表和发票记录 | meter_id; opening; closing; unit; timestamp; equipment_scope; allocation_driver | 优先直接分表，否则采用有文件记录的因果分配 | kWh | 连续或每账单期 | 完整报告期 | 范围内储罐、泵、蒸气控制和装载设备 | 汇总可归属用量并按装载质量归一化 | 仪表校准；发票核对；分配工作表 |
| `cp_storage_loading_losses` | `storage_loading` | `storage_loading_waste`; `storage_loading_air_emissions` | 储罐和装载日志、泄漏记录、蒸气控制日志、监测和计算输入 | tank_or_rack_id; substance_or_material; throughput; temperature; vapor_pressure; loading_method; control_status; collection_efficiency; control_efficiency; downtime; waste_mass; emission_mass; timestamp | 采用监测或场址特定储存装载计算并进行物料核对 | kg | 可得时每次装载事件并每月核对 | 完整报告期 | 范围内全部储罐和装载台 | 按物质或废物路线汇总并按装载质量归一化 | 控制装置记录；检查日志；事件记录；方法和计算工作簿 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个清单行 | 归一化量 = 报告期流量 / 报告期厂界装载航空汽油质量 | 所采集流量；装载参考产品质量 | 每 1 kg 参考产品的数量 | `eu-pef-2021-2279` |
| `calc_volume_to_mass` | 以体积测量的液体记录 | 质量 = 实测体积 × 与相关批次和温度对应的实测或有文件记录密度 | 体积；密度；温度；批次身份 | kg | `astm-d910` |
| `calc_batch_mass_balance` | 调合和储存阶段 | 期初库存 + 接收 + 转入 = 期末库存 + 放行或装载产品 + 转出 + 返工 + 废物 + 废水含产品 + 直接损失；调查并披露残余不平衡 | 库存、吞吐、返工、废物、废水、泄漏和排放记录 | 已核对质量平衡及残差 | `eu-pef-2021-2279` |
| `calc_direct_air_release` | 调合、储存和装载排放 | 有实测质量时优先使用；否则采用有文件记录的工程方法，并使用实际液体性质、吞吐量、设备、装载方式、控制收集效率、控制效率和停机时间 | 监测数据或设施特定方法输入 | 每种具名释放物质的 kg | `epa-ap42-5-1`; `epa-ap42-5-2` |
| `calc_shared_operation_allocation` | 共用公用工程和直接排放 | 优先细分；不可行时，分配量 = 共用量 × 有文件记录的因果物理驱动占比；只有在说明理由并进行敏感性分析时才使用其他关系 | 共用量；驱动总量；产品驱动量；分配理由 | 分配给航空汽油的数量 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 每个已放行批次必须保留适用规范及版本、牌号、含铅状态、含氧化合物状态、检测结果和放行决定。 | 批次证书和实验室 QA 记录；`faa-ac-20-24d`; `astm-d910` |
| `dq_primary_data` | 前景活动数据 | 使用设施和报告期特定的批次、仪表、库存、废物和排放记录。识别任何二手或模型替代及受影响清单行。 | 原始记录和替代登记；`eu-pef-2021-2279` |
| `dq_completeness` | 前景清单 | 覆盖所声明边界内所有环境相关的物料、能源、废物和基本流，包括逸散、储存、装载、泄漏和废水路线。 | 完整性核对和质量平衡；`eu-pef-2021-2279`; `epa-ap42-5-1`; `epa-ap42-5-2` |
| `dq_representativeness` | 数据集画像 | 报告前景数据的技术、地理和时间代表性以及精度，并识别数据集与所声明产品路线的差异。 | 数据质量评估；`eu-pef-2021-2279` |
| `dq_traceability` | 计算和分配 | 保留原始字段、单位、换算、计算版本、分配驱动因素、控制性能和审查签字，以便复现每个归一化数量。 | 计算工作簿、仪表记录、方法引用和审查记录 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | 参考流和数据集元数据 | 如果缺少或不一致的 Tiangong 参考产品流 UUID、Mass 流属性 UUID、Units-of-mass UUID、规范、牌号、含铅状态、含氧化合物状态、生产地点或报告期，则校验失败。 | `faa-ac-20-24d`; `astm-d910` |
| `validation_reference_amount` | 定量参考 | 确认厂界产品输出归一化后恰为 1 kg，且所有体积到质量换算均保留批次密度和温度证据。 | `astm-d910` |
| `validation_process_coverage` | 过程清单 | 确认已表示调合与放行以及储存与装载；如由单独连接过程替代其中一个，应明确说明且不得形成边界缺口。 | `epa-ap42-5-1`; `epa-ap42-5-2` |
| `validation_mass_balance` | 调合和储存 | 在一致期间内核对组分、产品、库存变化、返工、废物、废水、泄漏和直接损失质量；报告残差和调查，不得强制闭合。 | `eu-pef-2021-2279` |
| `validation_direct_emissions` | 向空气、水和废物的释放 | 确认已采集或计算场址特定释放及控制性能；若未具备所需设施输入和适用性说明，不得使用通用因子。 | `epa-ap42-5-1`; `epa-ap42-5-2` |
| `validation_allocation` | 共用作业 | 确认首先尝试细分，且每个剩余分配均说明驱动因素、公式、期间、受影响流，并在使用其他关系时提供敏感性分析。 | `eu-pef-2021-2279` |
| `validation_reasoned_estimates` | 暂定范围 | 将每个 `reasoned_estimate` 范围仅作为筛选标志。其不得替代前景值、定义符合性限值或支持公开比较主张。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 成品航空汽油生产的前景数据包，经审查后可发布为 `secondary_dataset` 或 `background_dataset` |
| downstream_use | 为炼厂或终端厂界、已声明规范的航空汽油构建 process 和 lifecyclemodel |
| allowed_use | 对所声明生产路线、牌号、设施地理、技术和报告期进行归因建模，并连接实际调合组分和公用工程上游数据集 |
| excluded_use | 飞机燃烧或运行；超过所声明厂界的下游配送；未经审查替代涡轮燃料、车用汽油、其他航空汽油牌号或未指明地理和技术；基于暂定范围的公开比较主张 |
| required_metadata | canonical PCR id；参考流 UUID；规范及版本；牌号；含铅和含氧化合物状态；配方路线；设施和地理；报告期；批次覆盖；组分来源；储存和装载配置；蒸气控制状态；分配方法；上游数据集引用 |
| required_quality_disclosure | 主数据占比；技术、地理和时间代表性；精度；质量平衡残差；缺失或模型化流；仅用于筛选的暂定范围；来源和控制方法局限 |
| update_trigger | 产品规范或牌号、配方或添加剂包、含铅或含氧化合物状态、组分来源、设施技术、储存或蒸气控制、分配方法、报告期代表性或任何重要数据缺口发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `faa-ac-20-24d` | official_guidance | 美国联邦航空管理局，AC 20-24D，Approval of Propulsion Fuels, Additives, and Lubricating Oils，https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_20-24D.pdf，检索日期 2026-08-09 | 航空汽油范围、航空活塞式火花点火用途、D910 的主要规范地位、牌号和燃料规范披露 |
| `astm-d910` | standard | ASTM International，D910，Standard Specification for Leaded Aviation Gasolines，https://store.astm.org/standards/d910，检索日期 2026-08-09 | 仅在 D910 是所声明适用规范时，用于所声明牌号身份及牌号特定的物理、化学、性能和试验要求 |
| `faa-pafi-fuel-best-practices` | official_guidance | 美国联邦航空管理局，PAFI Fuel Development and Testing Best Practices，https://www.faa.gov/sites/faa.gov/files/PAFI_Fuel_Development_Best%20Practices.pdf，检索日期 2026-08-09 | 牌号特定配方和批次属性证据；其中数值仅在所声明牌号和试验上下文匹配时适用 |
| `epa-ap42-5-1` | official_guidance | 美国环境保护署，AP-42 Section 5.1 Petroleum Refining，https://gaftp.epa.gov/ap42/ch05/s01/final/c05s01_jan1995.pdf，检索日期 2026-08-09 | 炼厂过程边界、设备泄漏、溢漏、排水、废水相关释放及监测控制上下文 |
| `epa-ap42-5-2` | official_guidance | 美国环境保护署，AP-42 Section 5.2 Transportation and Marketing of Petroleum Liquids，https://www.epa.gov/sites/default/files/2020-09/documents/5.2_transportation_and_marketing_of_petroleum_liquids.pdf，检索日期 2026-08-09 | 储存和装载损失机理、设施特定计算输入、蒸气收集和控制记录 |
| `eu-pef-2021-2279` | official_guidance | 欧盟委员会，Recommendation (EU) 2021/2279，Product Environmental Footprint Method，https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30，检索日期 2026-08-09 | 功能单位结构、完整性、主数据、分配层级、代表性、精度和透明数据缺口披露 |
