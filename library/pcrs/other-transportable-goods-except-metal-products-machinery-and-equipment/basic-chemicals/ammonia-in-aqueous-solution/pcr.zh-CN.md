---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.ammonia-in-aqueous-solution
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 封闭吸收法散装氨水

## 1. 范围与适用性

本方法适用于一个明确散装氨水等级：分别供入已制造无水氨及外购高纯去离子水，经封闭吸收/混合、调浓、实际使用的间接冷却、仅用水的尾气回收、检验、储存与厂界装载。hill-process-2021支持制造与质控顺序；yara-solution独立佐证氨气溶解和散装交付。不将来源等级、密度、配方、收率、能耗或认证设为通用默认值。

排除作为最终产品的无水氨、铵盐、UAN/APP或多营养元素配方肥、含添加剂清洁制剂、废物回收氨、电子高纯净化生产线、消费品包装、分销和使用。直接合成氨属于另链接的上游氨数据集。此边界采用外购间接冷却（发生外购冷却时）、厂外废水处理及无前景燃烧；若存在自制冷却公用工程、直接排水、酸洗尾气、氮封、制冷剂泄漏或其他化学品，必须作有记录的原子流扩展。用途标签本身不建立另一个PCR。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.ammonia-in-aqueous-solution |
| classification_refs | CPC 3.0 34652；建议narrower制造路线子集，接受待定 |
| covered_products | 无额外溶质、浓度明确且实测的散装NH3水溶液 |
| excluded_products | 第1节所列无水氨及不兼容路线/配方 |
| representative_product | 实际合格SKU；无默认浓度 |
| production_route | 已制造无水氨与外购去离子水封闭吸收 |
| market_state | 厂界散装水溶液，净溶液质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供指定氨水溶液 |
| How much | 1 kg合格净供货整份溶液 |
| How well | 实际NH3含量、水、杂质及验收规格；记录温度和密度 |
| How long or cycle | 覆盖实际厂界交接的同场址、等级、路线及库存核算期间 |
| reference_flow_link | aq_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 氨水 `058124f8-5e84-4070-b6c0-4bacac3a0024` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 场址及期间; 等级及实测NH3质量分数; 水和杂质; 净溶液基准; 验收Q; 密度温度方法; 原料路线及供方; 库存/返工负荷; 冷却服务参考; 供电地域电压及交付组合; 排放介质及气量干湿基; 废物接收方; 分配; 厂界状态 |

必需限定信息须在数据集元数据、过程说明或参考流描述中声明；缺失则数据包不完整。活性NH3及氮质量为伴随子账，不是替代参考输出。

## 4. 计量与单位规则

Q限定为实际厂界交接的合格净供货溶液kg；尚未交接的期末成品存货不计入Q。退回并再次交付的同一实物不得重复计入累计合格产出；按原始批次追溯退回、返工和交接。实物平衡保留全部期初/期末原料、在制品和成品库存，以实际厂界净交付作参考输出；独立生产量账仅用于核对，不能再与同批期末成品库存相加。期间负荷按批次及实测规则从期初库存释放或转入期末库存；库存不是无负荷采购或遗漏。

保留同场址/等级/状态/路线生产池完整原始期间总量：开停、失败及零产出运行、停机、退回、返工、期初期末在制品和库存及其携带负荷。核对最终验收、装运与库存，每份合格实物仅计一次，排除包装及内部循环。匹配期初释放与期末留存负荷，不删除失败运行负荷，不平均成功批次强度。先作实物换算，再以正Q对匹配归属池总量仅除一次。全池Q为零时仅保留原始总量和库存/去向记录，不生成归一结果。以证据划分不兼容池，不为取得正分母而划池。

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| measure_reference | aq_product | Mass | kg | 采用1 kg合格净供货整份溶液，Q按kg记录，不再除NH3分数。 |
| measure_materials | nh3_feed, di_water, ammoniacal_liquor | Mass | kg | 整份外购流仅跨界一次，NH3、水和杂质是组分子账，不重复采购。液体体积按匹配温度组成的独立实测密度换算。 |
| measure_energy | electricity, cooling_service | Net calorific value for electricity; delivered cooling duty for cooling | MJ | 电力kWh × 3.6 = MJ。冷量为累计冷媒质量乘实测焓差；服务基准须独立于数据库属性标签核实。 |
| measure_emissions | nh3_air, water_air | Mass | kg | 浓度乘匹配累计气量，不再乘时间；仅对流率作时间积分。保留温压干湿基及NH3与N口径。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收已制造无水氨、外购去离子水、电力及外购间接冷却，保留可追溯上游供给 |
| starting_condition_role | 前景转化入口；从摇篮到厂界结果必须链接上游供给和废物处理 |
| product_classification_scope | CPC 34652路线子集，不代表所有回收或配制氨溶液 |
| recursive_input_rule | 内部退回溶液属循环，不新增上游氨；购买成品氨水稀释不属于此路线 |
| upstream_dataset_requirement | 匹配氨合成路线和纯度、制水及交付、实际电网及冷却服务；链接废物去向不重复计量 |
| disclosure | 披露实际配置、等级、来源、库存负荷、遗漏、介质、地域及公用工程供方口径 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_complete | aq_absorption | 纳入接收、实际汽化、吸收、调浓、间接冷却、尾气回收、清洗、失败运行、储存及厂界装载；一个前景过程内保留各阶段计量。 | hill-process-2021; hill-handling-2021 |
| boundary_losses | aq_absorption | 分别闭合截获/回用/处置NH3和大气NH3；厂外废水处理为链接活动，不是前景空气或水排放。实际直接环境排放须增加接收介质物种行。 | hill-handling-2021; lvic-balance-2007 |
| boundary_extensions | aq_absorption | 不静默省略实际公用工程、化学品、包装、直接排放或废物；须以核实原子行和原始方法证据扩展，否则声明案例不适用。 | lvic-balance-2007 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| aq_absorption | 封闭吸收、验收与散装交付 | required | 指定路线及实际条件公用工程 | 一个集成前景单元，保留阶段记录和内部循环 | per 1 kg reference flow |

### 过程：封闭吸收与散装交付（`aq_absorption`）

#### 输入

##### 产品流

###### 无水氨 (`nh3_feed`)

计量整份接收的已制造无水氨，包括实际杂质。原生身份为工厂生产混合，未声明地域或CAS。保留供方NH3含量、水分、状态、温压及上游合成路线；记录不规定纯度或环境负荷。

- 选定流: 无水氨 `a0e3299b-9484-4ec3-89d3-cd1e2d6c2225`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 完整期间归属进料kg，以实际交接质量或兼容体积/密度换算；匹配原始期间总量仅除以Q一次。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1 kg参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_materials`
- 来源: `hill-process-2021`

###### 去离子水 (`di_water`)

外购去离子水，工厂生产混合，离子交换或反渗透，CAS 7732-18-5，地域未特指。包括吸收/调浓及实际清洗、水洗尾气用水。供方制水和交付属于上游；此行不表示直接取水。

- 选定流: 去离子水 `5b3acbab-2518-4406-8736-d21f222d757a`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按库存核对完整期间购入/消耗kg；分表区分进入产品、水洗与清洗的量，但不重复采购；匹配原始期间总量仅除以Q一次。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1 kg参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_materials`
- 来源: `hill-process-2021`

###### 交流电 (`electricity`)

原生身份限定CN、<1 kV、用户侧消费组合、电网平均供电。仅符合该供电条件时使用此UUID。计量接氨/实际汽化、吸收泵、控制、储罐与装载电耗。外购冷却服务已含能源须经记录从本表分离；其他地域/电压需另核身份及供方。

- 选定流: 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 完整归属电表kWh乘3.6换为MJ；保留各表和公用工程分摊记录后再匹配原始期间总量仅除以Q一次。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1 kg参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_electricity`
- 来源: `lvic-balance-2007`

###### 间接工艺冷却服务 (`cooling_service`)

条件性外购间接冷却服务，以工艺换热器交付冷量计。保留供回温、压力、冷媒组成及累计流量。数据库净热值/MJ标签不证明交付冷量；须有供方服务参考及匹配焓差基准。不采用啤酒厂能耗或默认制冷系数。未用本服务的场址记录不适用；自建公用工程须另作完整证据扩展。

- 选定流: 间接工艺冷却服务
- 流属性/单位: 交付冷量 / MJ；流属性及单位组UUID未决
- 数量规则: 供方兼容焓差乘已累计冷媒质量得到实测期间净交付冷量MJ，保留热损和边界；匹配原始期间总量仅除以Q一次。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1 kg参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_cooling`
- 来源: `lvic-balance-2007`

#### 输出

##### 产品流

###### 氨水 (`aq_product`)

唯一参考产品输出为厂界合格散装NH3水溶液，不是纯NH3或分离的NH4OH。原生CAS 1336-21-6、工厂生产混合，未限定浓度、处理路线或地域。声明实际等级及NH3质量分数；产品身份不提供供方背景数据集。

- 选定流: 氨水 `058124f8-5e84-4070-b6c0-4bacac3a0024`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 1 千克
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1 kg参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_product`
- 来源: `hill-process-2021`

##### 废物流

###### 含氨清洗废液 (`ammoniacal_liquor`)

仅在实际同槽收集且组成兼容时，以一个水性废物流记录围堵泄漏液、水洗排液及清洗废液。不兼容支流须新增独立原子行。分别记录整份湿kg、NH3当量/总氮、水、接收方与处理；氨氮指标及其他行业洗水均非本流身份。内部回收液不得两次跨界计量。

- 选定流: 含氨清洗废液
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 完整外送湿废物kg及独立化验组分kg，包含失败与泄漏；此出口不计厂外处理排放；匹配原始期间总量仅除以Q一次。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1 kg参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_waste`
- 来源: `hill-handling-2021`

##### 基本流

###### 氨 (`nh3_air`)

CAS 7664-41-7，向空气排放，子介质未特指，按kg NH3。包括治理后的实际排气筒、逸散、储罐呼吸、泄压、装载与维护损失。记录接收空气位置；已知更细子介质时另核相应流。此处为空气环境而非室内暴露。不用校正流、默认正排放或监管申报比例。

- 选定流: 氨 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 以校准浓度和匹配累计气量获得独立测量/模型NH3期间kg；只有流率才积分时间，不将累计体积再次乘时间。不得用同一残差同时反推NH3与失水；匹配原始期间总量仅除以Q一次。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1 kg参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_emissions`
- 来源: `hill-handling-2021`

###### 水蒸气 (`water_air`)

CAS 7732-18-5，向空气排放未特指，仅水蒸气。在兼容干湿基及温压下测出相对于进气水分的工艺净增水量；液滴夹带属不同交换。此流不代表淡水排液或取水。

- 选定流: 水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 由独立湿度/冷凝和累计气量记录得到期间净排放kg；相变不生成反应水；匹配原始期间总量仅除以Q一次。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1 kg参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_emissions`
- 来源: `lvic-balance-2007`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_physical | aq_absorption | 分配环境负荷前保留完整实物输入输出及内部循环质量。内部回收NH3/水不是共产品或避免采购抵扣。湿废物保留整份实物质量。 | lvic-balance-2007 |
| allocation_shared | aq_absorption | 优先独立计量和实物归属；公用工程共用时记录实测因果驱动和总和为一的份额，保留未分配总量并使失败/库存负荷归属匹配池。不用分配比例乘实物共产品输出。 | lvic-balance-2007 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | aq_absorption | aq_product | lot and stock ledger | lot IDs; accepted net kg; NH3 fraction; water; impurities; temperature; density; acceptance; dispatch; returns; opening/closing stock and WIP; carried burdens | 校准磅秤/罐表、温度匹配密度和留样化验；供应商CoA/本厂QC；唯一批次验收账；原始汇总规则：核对Q及每项负荷移动；返工后同一实物仅验收一次而非每次加工均计 | kg; kg/kg; deg C | 每批及库存结算 | 完整指定期间，含失败及零产出运行 | 同场址等级状态路线池及实际公用工程/废物边界 | 每 1 kg 参考流 | 校准、时间戳、样品链、原始日志、库存核对和不确定度 |
| cp_materials | aq_absorption | nh3_feed; di_water | custody transfer and consumption | delivery mass; volume; density; T/P; NH3 assay; water and impurity fractions; source route; provider; opening/closing feed stocks; stage water meters | 校准交接质量、匹配密度温度和供方化验；分别计量实际原料及清洗水；原始汇总规则：核对完整外部消耗和库存，组分仅作子账不新增采购交换 | kg; m3; kg/m3; deg C; kPa; kg/kg | 每次交接及批次 | 完整指定期间，含失败及零产出运行 | 同场址等级状态路线池及实际公用工程/废物边界 | 每 1 kg 参考流 | 校准、时间戳、样品链、原始日志、库存核对和不确定度 |
| cp_electricity | aq_absorption | electricity | meter and utility assignment | meter start/end; kWh; voltage; grid region; delivered mix; utility boundaries; submeter shares; failed-run and standby usage | 可校准分表及账单；区分外购冷却内含能源和本过程用电；原始汇总规则：先完整汇总期间表差，再乘3.6并作池归属 | kWh; MJ | 连续累计及期末 | 完整指定期间，含失败及零产出运行 | 同场址等级状态路线池及实际公用工程/废物边界 | 每 1 kg 参考流 | 校准、时间戳、样品链、原始日志、库存核对和不确定度 |
| cp_cooling | aq_absorption | cooling_service | service receipt and enthalpy measurements | provider; service reference; integrated coolant mass; flow rates and duration when used; supply/return T/P; composition; heat capacity/enthalpy method; losses; boundary | 以经校准冷量计和供回焓差、供方服务定义核对，不以净热值标签代替；原始汇总规则：仅对流率积分；汇总净交付冷量，不同时计服务及内含资源 | kg; kg/s; s; deg C; kPa; kJ/kg; MJ | 连续及期末 | 完整指定期间，含失败及零产出运行 | 同场址等级状态路线池及实际公用工程/废物边界 | 每 1 kg 参考流 | 校准、时间戳、样品链、原始日志、库存核对和不确定度 |
| cp_waste | aq_absorption | ammoniacal_liquor | waste manifest and assay | wet kg; NH3 equivalent; total N; water; impurity species; sample time; compatible receiver; destination; return/recovery; stock | 计量外送整份废液并独立化验，保留转移联单和处理接收条件；原始汇总规则：外送湿kg只汇总一次，内部回收抵消，核对组分与携带负荷 | kg; kg/kg | 每次清运及库存结算 | 完整指定期间，含失败及零产出运行 | 同场址等级状态路线池及实际公用工程/废物边界 | 每 1 kg 参考流 | 校准、时间戳、样品链、原始日志、库存核对和不确定度 |
| cp_emissions | aq_absorption | nh3_air; water_air | source test and event log | outlet; NH3 concentration; humidity in/out; gas flow rate/duration or integrated volume; T/P; wet/dry basis; controls; loading/relief/maintenance events; species convention; uncertainty | 校准源测试/逸散方法和水分测试；覆盖排气、储运及非正常事件，保留低于检出限处理；原始汇总规则：在兼容基准汇总互不重叠的物种/出口/事件，不用未解释残差作排放因子 | kg; mg/m3; m3; m3/s; s; deg C; kPa | 测试期加完整运行/事件记录 | 完整指定期间，含失败及零产出运行 | 同场址等级状态路线池及实际公用工程/废物边界 | 每 1 kg 参考流 | 校准、时间戳、样品链、原始日志、库存核对和不确定度 |

### 计算规则

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_normalize | all inventory rows | Q > 0时x_i = B_i / Q。B_i为单位换算及期初期末负荷转移后匹配归属的原始期间总量。Q = 0不产生x_i。aq_product = 1 kg/kg。 | B_i; Q | 归一交换 | lvic-balance-2007 |
| calc_components | nh3_feed, aq_product, ammoniacal_liquor | m_NH3eq = m_whole × 实测w_NH3eq。氮质量采用声明的N/NH3分子质量比或独立实测氮；水为整份质量乘独立实测水分数，不是未测平衡余项。 | m_whole; w_NH3eq; measured water fraction; molecular mass convention | 组分子账 | hill-process-2021; hill-spec-2020 |
| calc_balances | aq_absorption | 对总实物质量及各元素：外部物质输入+全部期初实物库存=实际厂界合格净交付+外送废物+环境排放+全部期末实物库存+记录残差。Q不包含尚留存的成品库存。电力及间接冷却服务在独立能源账内；未进入工艺物料边界的冷媒循环质量不作原料。内部循环抵消。保留NH3当量、总N、H、O及水账；依据不确定度调查残差，不强制凑平衡。 | all external mass; opening stock; closing stock; assays; emission records | 实物平衡残差 | lvic-balance-2007 |
| calc_water_species | aq_absorption | 水中酸碱形态不表示采购纯NH4OH或证明净生成反应水。分别记录实际溶解NH3/NH4+口径、蒸发/冷凝和水相。不虚构反应水、干有机物生成或COD折算水；额外反应须独立测量/反应证据支持反应程度及物种平衡。 | species convention; assays; phase measurements; reaction evidence if applicable | 独立水及物种账 | lvic-balance-2007; yara-solution |
| calc_gas | nh3_air, water_air | m = 浓度 × 兼容累计气量并作明确单位换算；仅有气流率时V = integral(rate dt)。水按出气减进气湿度净量。不将累计体积再乘时间，不重复测量和模型出口。 | concentration; integrated volume; gas rate if used; duration if used; humidity; T/P; wet/dry basis | 原始物种kg | lvic-balance-2007 |
| calc_cooling | cooling_service | h以kJ/kg计时H_MJ = sum[m_coolant × (h_return - h_supply)] / 1000，并作边界一致的净修正。该冷量不同于电力输入或净热值标签，不用未测COP换算电耗。 | integrated coolant mass; supply enthalpy; return enthalpy; boundary corrections | 原始交付冷量MJ | lvic-balance-2007 |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| quality_identity | all inventory rows | 核对完整原生身份、已声明CAS、全部名称组成、介质、路线、等级、地域及准确属性单位基准。UUID有效不表示背景数据集兼容。 | 原生直读记录；供方声明 |
| quality_pool | all inventory rows | 必须有完整匹配期间和库存负荷轨迹、失败记录、无重复Q及归一前单位换算。 | 原始池及库存核对 |
| quality_ranges | all inventory rows | 未建立通用配方、收率、能耗、密度或排放范围；采集现场值及不确定度，明确保留经验范围缺口，不虚构先验。 | 来源范围及实际采集记录 |
| quality_completeness | aq_absorption | 核对无添加剂散装路线及条件公用工程/排放/废物适用性，含非正常事件。普通辅助身份缺口须在相应数据集链接完整前明确解决供方/流身份。 | 流程图；测试报告；公用工程及接收证据 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | aq_product | 仅允许一个链接aq_product的参考产品输出，为1 kg合格整份溶液；归一须有实测等级/浓度及唯一正Q。活性NH3和N仍为分析量。 | lvic-balance-2007 |
| validate_pool | all inventory rows | 检查失败/零产出/返工/在制品完整覆盖、期初期末负荷转移及一次归一；Q = 0不得有每kg结果。 | lvic-balance-2007 |
| validate_balances | aq_absorption | 分配前检查独立证据支持的整份质量、N/H/O、组分及相态水账；调查不确定度/残差，不同时拟合未知出口与反应水。 | lvic-balance-2007 |
| validate_identity | all inventory rows | 重查每一原生身份/属性/单位及地域、等级、路线、组合、接收介质限制。辅助链接未决须明确为不完整，不静默近似匹配。 | lvic-balance-2007 |
| validate_no_duplicates | aq_absorption | 检查内部回收抵消、整份溶液与组分、外购服务与内含资源、废物转移与处理排放；不重复任何实物或负荷交换。 | lvic-balance-2007 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 向化工或脱硝用户提供浓度及交付基准匹配的氨水供给 |
| allowed_use | 仅适用于声明的路线/等级/场址/期间，且上游和废物链接范围完整 |
| excluded_use | 排除纯氨质量、仅营养元素肥效、消费清洁配方、回收氨、下游脱硝抵扣或通用路线均值 |
| required_metadata | 全部参考限定信息、原生流限制、供方兼容性、库存负荷、边界及分配 |
| required_quality_disclosure | 覆盖范围、原始测量、不确定度、辅助UUID/供方缺口、范围缺口和残差 |
| update_trigger | 浓度、路线、供电地域/电压、供方、冷却、排放控制或废物去向变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-2025 | official_guidance | UNSD CPC 3.0 structure, 30 June 2025, row 34652; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 仅支持分类名称，不提供工艺、配方或接受决定 |
| hill-process-2021 | handbook | Hill Brothers, Ammonium Hydroxide Manufacturing Process, Rev.12/2021, p.1; https://www.hillbrothers.com/wp-content/uploads/2021/12/AmmoniumHydroxide-ManufacturingProcess-PP-12-7-2021.pdf | 封闭水/无水氨制造、温度/比重浓度质控及装运CoA。单一生产者案例；不规定通用等级、配方、收率、能耗或认证。 |
| hill-spec-2020 | handbook | Hill Brothers, Aqua Ammonia Industrial Grade Product Specifications, Rev.12/2020, p.1; https://www.hillbrothers.com/wp-content/uploads/2021/01/AquaAmmonia-Industrial-Grade-PS-12-17-2020.pdf | 含量按NH3质量分数表达，密度依等级和温度。所列规格/密度数值不作默认值，不证明实际场址合规。 |
| hill-handling-2021 | handbook | Hill Brothers, Aqua Ammonia General Safety and Handling, Rev.4/2021, p.1; https://www.hillbrothers.com/wp-content/uploads/2021/04/AquaAmmonia-GeneralSafetyHandling-4-26-2021.pdf | 储罐蒸气控制、泄漏围堵及装载区收集支持损失边界。操作指导不提供定量排放因子或假定治理效率。 |
| yara-solution | handbook | Yara Australia, Ammonia solution, accessed 2026-10-16; https://www.yara.com.au/chemical-and-environmental-solutions/nox-reduction-for-industrial-plants/reagents-for-nox-control/ammonia-solution/ | 独立生产者佐证氨气溶解及散装液体交付。使用性能宣传、浓度示例和物流不作前景数量默认值。 |
| lvic-balance-2007 | official_guidance | European Commission, LVIC-AAF BREF, August 2007, section 1.4.6, printed p.19 / PDF p.47; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/lvic_aaf.pdf | 氮、水及公用工程平衡的一般方法。历史集成化工背景；案例不是氨水配方、公用工程基准或该子行业BAT限值。本文采集和归一公式为PCR核算规则，不是复制的工厂数量。 |
