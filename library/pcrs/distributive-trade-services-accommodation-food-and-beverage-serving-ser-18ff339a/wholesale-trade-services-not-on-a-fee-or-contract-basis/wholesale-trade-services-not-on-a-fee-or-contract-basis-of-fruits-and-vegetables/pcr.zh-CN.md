---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-fruits-and-vegetables
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 普通空气冷藏鲜苹果自营批发服务

## 1. 范围与适用性

本 PCR 描述自营商人的实体批发服务：购入已收获分选且完整的新鲜 Malus domestica 苹果，在实际运营普通空气机械制冷库房中保管后向企业买方验收转售。接收状态和所有权、实际库房冷却保管、温湿监测、装卸、继承包装追踪、实际拒收退回去向及商业交接构成一个有界保鲜批发职责。可用前状态为具有品种等级、热和品质记录的完整接收苹果，维持后的状态为经历声明库房区间后仍完整且符合实际买方交接要求的果实。

范围排除果园生产收获、初级分选或包装厂制造、气调或改良气氛储存、打蜡或果实化学处理、洗果水冷、切片、制汁、强制催熟、零售、收费佣金代理及独立出售的纯仓储。实际必需加工或不同气氛会改变路线，需审核边界，不能藏为普通冷却。本 PCR 不规定温度、湿度、停留上限、未来货架期、能耗强度或损失百分比。

本过程是服务附加，不是交付苹果足迹。成功售出和损失苹果商品的全部上游制造均排除在服务交换外，完整链条使用前，实际原交接点数量及损失或状态变化需求必须在单独关联商品系统仅核对一次。对接收货批中不符合要求部分实际挑出拒收、损失处理及声明接收处理仍属服务职责，但不据此授权初级分选加工产品路线。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-fruits-and-vegetables` |
| classification_refs | CPC 3.0 `61021`；较窄普通空气冷藏完整鲜苹果批发服务 |
| covered_products | 通过运营普通空气冷库的已收获分选完整鲜苹果自营企业间货批服务 |
| excluded_products | 其他果蔬；果园或初级包装厂生产；气调改良气氛储存、化学打蜡、洗果切片制汁催熟；零售代理纯仓储服务 |
| representative_product | 一个具有品种等级数量状态及温度时间限定信息的实际验收冷藏苹果批发货批 |
| production_route | 取得所有权接收可用完整苹果 -> 实际普通空气库房冷却保管及监测保鲜 -> 企业间验收转售交接 |
| market_state | 计数批发服务，配有单独果实包装流转和原交接点商品台账 |


## 3. 参考流

| Field | Value |
| --- | --- |
| What | 已完成的普通空气冷藏鲜苹果批发货批服务 |
| How much | 1 个实际完成验收批发货批服务 |
| How well | 在声明商业交接点验收的实际品种等级、完整品质及普通空气保鲜热或水分状态，不推断保证未来货架期 |
| How long or cycle | 实际接收冷却保管至交接区间，分别归属报表库存及资产服务期间 |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 已完成的普通空气冷藏鲜苹果批发货批服务 |
| reference_flow_property | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | 数量单位组 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | consignment_id; ownership_resale_risk; business_buyer; cultivar_and_grade; actual_net_fruit_mass; mass_and_moisture_state; intake_quality_temperature; room_route_and_id; actual_temperature_humidity_history; actual_start_end_duration_unit; accepted_quality_gate; inherited_and_new_packaging; origin_geography_period; freight_and_treatment_coverage; refrigerant_system_scope; original_gate_commodity_adjustment |

N > 0 是实际撤销冲回后的唯一已验收商业货批数，不是箱托盘车辆或发票行。保留每批实际数量状态及库房区间，一个计数服务不等于相同果重热负荷或时长。不得拆分文件稀释负担。实际包元数据或等效字段须声明全部限定信息。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| service_reference | 参考产品 | 物品数量 | Item(s) | 采用实际验收商业货批及 N > 0；果重状态与实际冷却品质时间为限定信息，不是 Count 到 kg 的默认换算。 |
| fruit_state | 果实备查台账与 discarded_apples | 质量及实际水分品质状态 | kg；实际温度与时长单位 | 各实际状态测量排除包装皮重的净果质量，核对退回期末发运及独立有证据生理水分装卸影响；湿质量差额不能证明不可恢复干物质、CO2、水蒸气或废物。 |
| native_unit | 所有清单行 | 实际兼容原生属性 | 实际原生单位 | 保留实际数量面积体积质量时间用品及服务身份。换算需实际状态、因子单位来源及适用密度组成温度，不可相加审计视图不新增交换。 |
| refrigerant_boundary | refrigerant_supply、recovered_refrigerant、spent_refrigerant 与 refrigerant_releases | 按实际化学物或混合物的质量 | kg | 采用明确一致设备系统及适用容器库存边界和实际区间，外部净供应、内部充注回收、期末库存、容装外送及实测释放分开，不假定补充等于泄漏。 |


## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 已收获分选且可用完整的商人所有苹果，具有实际供方交接、品种等级、净质量水分温度品质及继承包装状态 |
| starting_condition_role | 商品流转事实及保鲜前状态，不是苹果生产输入，也不代表完整链条零负担 |
| product_classification_scope | CPC61021 中自营冷藏苹果货批批发子集 |
| recursive_input_rule | 不把转售果实或相同货批递归为批发服务生产。上游合同保鲜辅助仅在物理职责独立且资源不重叠时作为输入。 |
| upstream_dataset_requirement | 已验证实际用品、服务商范围、制冷及周转资产全寿命数据；完整链条前单独匹配原交接点果实生产及量化商品调整 |
| disclosure | 全部实际果实包装状态、继承新增负担、库房时间温度、储存退回拒收废物接收处理、制冷剂去向、运输和商品调整归属覆盖 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| service_boundary | apple_cold_wholesale | 苹果商品全部生产包括实际损失商品均排除在服务交换外，实际服务作业、直接交换及声明损失处理处置仅计一次。完整链条包须单独量化关联原交接点商品输入损失需求及已有覆盖。 |  |
| preservation_boundary | apple_cold_wholesale | 声明接收可用完整状态、实际普通空气库房冷却保管及买方交接时维持后的完整状态，包括实际拒收及温度偏离；采用实际品种条件，不设通用安全温度或货架期率。 | fao-temperature-humidity |
| compatibility_boundary | apple_cold_wholesale | 按相关性采集实际库房湿度循环、货批隔离及共储商品兼容或乙烯观察。普通空气制冷不是气调改良气氛或果实化学处理，来源示例不规定数值制度。 | fao-horticultural-storage |
| actual_fates | 全部实际资源出口 | 继承包装为备查流，除非证明实际新增服务负担。区分果实处置、用品外退、制冷剂回收、容装废物水、实际环境输入和已识别物种输出，未知去向需证据而不是假定未发生。 |  |


## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| apple_cold_wholesale | 普通空气苹果保鲜与商人批发综合作业 | required | 实际自营苹果购入转售及运营普通空气库房保鲜 | 有界保鲜责任：接收可用状态 -> 实际冷却保管状态 -> 企业间验收货批；保留实际拒收损失退回 | `accepted_service` |

本独立节点承担实际保鲜干预和批发交接，不为拆分活动虚构第二个果实生产输出或未测内部冷却服务。库房冷却可跨重叠货批连续运行，发运拒收退回清洁关联货批和作业期。追踪实际前后状态及损失残余出口。未满足验收不增加已验收 N，但该库存实际能源照料仍归属。

### 过程：普通空气苹果保鲜与商人批发综合作业 (`apple_cold_wholesale`)

#### 输入

##### 产品流

###### 实际使用点交流电 (`electricity_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Energy / kWh
- 数量规则：每参考流的实际可归属苹果库房制冷及批发实际电力；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

范围证据要求：需实际区间、库房货批载荷时长、热状态及全部使用方分配。独立电耗校验需品种载荷气候库房范围可比，不设每 kg 或每日默认电耗。

###### 实际独立确认的供应柴油 (`fuel_supply_diesel_supply`)

仅适用于本运行燃料要求内实际独立确认的柴油。通用身份为Mass/kg；记录实际配方、供应方、供给门及原生库存范围。原生数量为升时，最终换算kg须有实际相容密度、温度状态、质量体积比单位及来源，不使用目录默认密度或热值。供应库存与燃烧量是不同记录；其他燃料保留余项，购买燃料或未解释库存差不证明燃烧及排放。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Volume / L
- 数量规则：每参考流的实际可归属自有装卸与辅助实际燃料供应；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需实际库存收货退回记录、牌号、必要密度温度换算及互斥燃烧未燃去向，不将购入燃料等同燃烧。

###### 实际液态处理自来水供给 (`water_supply_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Volume / m3
- 数量规则：每参考流的实际可归属实际购入设施清洁或湿度辅助用水；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需实际计量用途期间及供方覆盖、实际加湿或清洁去向及分配，不由设施水费推断果实水分吸收或损失。

###### 实际独立记录的合成洗涤剂投入 (`operating_supplies_synthetic_detergent`)

仅适用于产品配方、供应状态及用途记录确认的实际合成表面活性洗涤剂。记录扣除包装皮重的材料净量，区分浓缩液与稀释水，整体配方与组分不得相加重复计入。肥皂、消毒剂、抹布、滤材等仍按各自实际身份记录，不预设清洁配方、剂量或发生。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属实际库房清洁与维护用品；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需品项配方浓度、净库存退回及实际废物释放去向和换算来源，不把安全限值或施用品量当排放因子。

###### 实际独立记录的聚乙烯包装薄膜 (`additional_packaging_pe_film`)

仅适用于实际独立供应、供本服务新增包裹或衬垫使用的聚乙烯薄膜，须确认实际聚合物配方与薄膜净量。该身份为工厂门通用生产组合，仍须记录实际供给门、供应方及另负责任的交付负荷。不预设LDPE/HDPE牌号、再生比例、厚度或用量。PVC、PET、PP、多层复合材料、胶黏标签、填充包装及继承商品包装仍按余项独立身份处理；整体供应与组分不得重复计量，不预设发生。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属实际新增或更换服务包装用品；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需继承新增更换身份、实际品项原生数量质量面积、状态、接收方及匹配换算。周转筐需实测寿命服务，不能每次计全新制造。

##### 废物流

##### 基本流

###### 苹果呼吸从环境空气摄入的氧气 (`environmental_gases_oxygen_air`)

仅覆盖本过程有独立实际证据的“苹果呼吸从环境空气摄入的氧气”。记录自身物态、净量 kg、事件来源及交接门。其他状态或接收方需在`environmental_gases`下独立确定身份，本卡不能替代；记录缺失不证明发生或为零。 仅在有支持的苹果呼吸模型需要时记录环境空气中的 O2 摄入，单位 kg O2。它不是购买氧气、通风空气流量或排放。需独立取得摄入量，或使用含完整参数的有效化学计量模型，果实失重本身不充分。

- 选定流：苹果呼吸从环境空气摄入的氧气
- 流属性/单位：Mass / kg
- 数量规则：`environmental_gases_oxygen_air`实际独占归属的 kg / 验收 N，仅归一化一次；已按参考流给出的数量不得再次除以 N。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_releases`

范围证据要求：需事件关联的原生 kg、状态组成、接收或供应门、归属记录及整件组分或对应投入的排他关联，使用协议`cp_releases`。不提供默认数值或换算因子；其他原生单位须有换算证据后使用。

#### 输出

##### 产品流

###### 已完成的普通空气冷藏鲜苹果批发货批服务 (`accepted_service`)

一个实际自营企业间转售货批，具有普通空气冷却保管、完整苹果状态品质及约定验收商业交接；苹果商品不是本服务流身份。

- 选定流：已完成的普通空气冷藏鲜苹果批发货批服务
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_consignment`

范围证据要求：数量仅定义归一化；实际品种等级净果质量状态、温湿时间历史、所有权及验收交接为必需项，不设每数量通用 kg、储存寿命或温度。

###### 退回供应方的未使用合成洗涤剂 (`usable_supply_returns_detergent_return`)

仅覆盖本过程有独立实际证据的“退回供应方的未使用合成洗涤剂”。记录自身物态、净量 kg、事件来源及交接门。其他状态或接收方需在`usable_supply_returns`下独立确定身份，本卡不能替代；记录缺失不证明发生或为零。 将未使用材料的配方、供应状态和原生质量严格匹配到投入`operating_supplies_synthetic_detergent`。本卡为可用对外退料，不是废物、期末库存或内部循环。仅在总量供应口径下列此输出；投入已扣除该退料时必须省略对应退料输出，不自动抵扣避免生产。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位：Mass / kg
- 数量规则：`usable_supply_returns_detergent_return`实际独占归属的 kg / 验收 N，仅归一化一次；已按参考流给出的数量不得再次除以 N。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需事件关联的原生 kg、状态组成、接收或供应门、归属记录及整件组分或对应投入的排他关联，使用协议`cp_supplies`。不提供默认数值或换算因子；其他原生单位须有换算证据后使用。

###### 退回供应方的未使用聚乙烯薄膜 (`usable_supply_returns_pe_film_return`)

仅覆盖本过程有独立实际证据的“退回供应方的未使用聚乙烯薄膜”。记录自身物态、净量 kg、事件来源及交接门。其他状态或接收方需在`usable_supply_returns`下独立确定身份，本卡不能替代；记录缺失不证明发生或为零。 将未使用材料的配方、供应状态和原生质量严格匹配到投入`additional_packaging_pe_film`。本卡为可用对外退料，不是废物、期末库存或内部循环。仅在总量供应口径下列此输出；投入已扣除该退料时必须省略对应退料输出，不自动抵扣避免生产。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass / kg
- 数量规则：`usable_supply_returns_pe_film_return`实际独占归属的 kg / 验收 N，仅归一化一次；已按参考流给出的数量不得再次除以 N。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需事件关联的原生 kg、状态组成、接收或供应门、归属记录及整件组分或对应投入的排他关联，使用协议`cp_supplies`。不提供默认数值或换算因子；其他原生单位须有换算证据后使用。

##### 废物流

###### 实际废弃完整苹果 (`discarded_apples`)

计量实际拒收变质或装卸损坏且送有记录废物接收方的果实，保留实际状态质量；质量降级仍可能有可用商业出口，不自动为废物。

本卡仅覆盖实际独立收集并交付的废弃完整苹果；独立收集的果实碎片使用`discarded_apple_fragments`，液体、包装或清理载体另行确定身份。不同状态或处理接收路线不得合计到本卡。保留实际收集水果质量、含水状态及接收方，排除包装皮重及非食物清理载体。整体混合包装须匹配自身身份，不能将混合毛重当苹果量。仍可商业使用的退货不是废物，不预设腐败、处置、处理或损失系数。

- 选定流：食物残渣 `55feef47-26fa-48d1-bcf5-1eb581143bd7`
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属废弃完整苹果；cp_apples。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_apples`

范围证据要求：需实际关联货批废物质量皮重状态及接收处理覆盖、商品调整原交接点追踪和单独解决水分呼吸影响；不以质量差额或 FAO 历史范围代替。

###### 收集并送处理的场所清洁水性废水 (`contained_wastewater_aqueous_cleaning`)

仅覆盖本过程有独立实际证据的“收集并送处理的场所清洁水性废水”。记录自身物态、净量 m3、事件来源及交接门。其他状态或接收方需在`contained_wastewater`下独立确定身份，本卡不能替代；记录缺失不证明发生或为零。 仅在实际独立收集并转移至废物接收方时启用，不得用于仍保留在整件、包装或收集混合物中的组分。保留组成只作不可相加记录。不预设开包、切割、拆解、主动干燥、回收率或处理路线，处理及运输责任只归属一次。 本卡为场所清洁水性废水，保留实际溶解或悬浮负荷及实测接收体积。排除独立收集的未稀释商品、非水液体、冷凝水或生活污水；若转移前实际混合，另定该真实混合物身份，不得叠加组分体积或称其为纯清洁水。不从供水量推算本数量。

- 选定流：收集并送处理的场所清洁水性废水
- 流属性/单位：Volume / m3
- 数量规则：`contained_wastewater_aqueous_cleaning`实际独占归属的 m3 / 验收 N，仅归一化一次；已按参考流给出的数量不得再次除以 N。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据要求：需事件关联的原生 m3、状态组成、接收或供应门、归属记录及整件组分或对应投入的排他关联，使用协议`cp_fates`。不提供默认数值或换算因子；其他原生单位须有换算证据后使用。

###### 收集的苹果果实碎片，不含包装或清理载体 (`discarded_apple_fragments`)

仅覆盖本过程有独立实际证据的“收集的苹果果实碎片，不含包装或清理载体”。记录自身物态、净量 kg、事件来源及交接门。其他状态或接收方需在`apple_waste_state`下独立确定身份，本卡不能替代；记录缺失不证明发生或为零。 仅在实际独立收集并转移至废物接收方时启用，不得用于仍保留在整件、包装或收集混合物中的组分。保留组成只作不可相加记录。不预设开包、切割、拆解、主动干燥、回收率或处理路线，处理及运输责任只归属一次。

- 选定流：食物残渣 `55feef47-26fa-48d1-bcf5-1eb581143bd7`
- 流属性/单位：Mass / kg
- 数量规则：`discarded_apple_fragments`实际独占归属的 kg / 验收 N，仅归一化一次；已按参考流给出的数量不得再次除以 N。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_apples`

范围证据要求：需事件关联的原生 kg、状态组成、接收或供应门、归属记录及整件组分或对应投入的排他关联，使用协议`cp_apples`。不提供默认数值或换算因子；其他原生单位须有换算证据后使用。

##### 基本流

###### 实际独立举证的生物源二氧化碳向空气排放 (`respiration_releases_biogenic_co2_air`)

仅适用于按有支持的物种、来源及时间基准确定的实际苹果呼吸生物源CO2向空气直接排放，单位为kgCO2而非kgC。水果库存损失不能确定CO2，不预设呼吸系数或发生。仅在未建立更细接收子介质时用未细分空气身份；化石源及未知来源碳分开。氧摄入与水蒸气仍为独立举证数量。

- 选定流：二氧化碳（生物源） `08a91e70-3ddc-11dd-9c15-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属实际已识别果实呼吸或水蒸气释放；cp_releases。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_releases`

范围证据要求：需兼容实际状态、温度时间序列、底物基准及完整模型测量操作数、不确定性和受纳子介质；未知湿质量变化不默认为 CO2、水蒸气或干物质损失。


###### 实际独立举证的水蒸气向空气排放 (`respiration_releases_vapour_air`)

仅适用于独立证据确认的H2O水蒸气向空气直接释放，保留实际来源、状态及原生kgH2O。质量差、液态融水、受控废水、水中污染物及未解释库存差均非水蒸气证据。保留继承商品来源及不可相加审计，不新增供水、不预设蒸发或重复上游供应商负荷；其他接收介质保留独立身份。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属实际已识别果实呼吸或水蒸气释放；cp_releases。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_releases`

范围证据要求：需兼容实际状态、温度时间序列、底物基准及完整模型测量操作数、不确定性和受纳子介质；未知湿质量变化不默认为 CO2、水蒸气或干物质损失。

###### 实际有独立证据的向空气排放化石二氧化碳 (`other_releases_co2_fossil_air`)

仅在实际证据确认化石来源、二氧化碳物种和向空气直接释放时适用。保留报告的碳或CO2基准，碳转CO2须独立有证据的化学计量，不预设系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属实际已识别燃烧清洁及其他直接释放；cp_releases。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_releases`

范围证据要求：需实测物种或兼容实际活动物种因子，必要时有组成去向来源；不把清洁制剂总量、安全限值或未知库存转成排放。


###### 实际有独立证据的向空气排放化石甲烷 (`other_releases_methane_fossil_air`)

仅在实际证据确认化石来源、甲烷物种和向空气直接释放时适用。生物源或来源未知甲烷仍在余项要求中，不得改标化石源；不预设泄漏发生、气体比例、数量或排放系数。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属实际已识别燃烧清洁及其他直接释放；cp_releases。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_releases`

范围证据要求：需实测物种或兼容实际活动物种因子，必要时有组成去向来源；不把清洁制剂总量、安全限值或未知库存转成排放。


###### 实际有独立证据的向空气排放氧化亚氮 (`other_releases_nitrous_oxide_air`)

仅在实际证据确认氧化亚氮物种及向空气直接释放时适用。原生数量为N2O质量，不是氮质量或氮气质量，不预设排放系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属实际已识别燃烧清洁及其他直接释放；cp_releases。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_releases`

范围证据要求：需实测物种或兼容实际活动物种因子，必要时有组成去向来源；不把清洁制剂总量、安全限值或未知库存转成排放。

## 7. 分配与联产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocate_operation | apple_cold_wholesale | 优先使用直接货批库房事件计量，按有证据且兼容热载荷或占用体积时间等驱动在全部实际使用方间分配有记录共享制冷场地辅助，解释闲置除霜清洁和失败拒收库存。不默认平均货批、收入或脱离时长载荷的仅 kg 驱动，归属总量仅除以 N 一次。 |  |
| allocate_assets | shared_assets | 列出实际资产筐托盘全部使用方和期间，以完整制造维护更换寿命终结及实际已用驱动 / 全寿命驱动归属。全寿命驱动来自观察量或观察历史加有证据剩余使用退役，附不确定性敏感性。资产当量份额 / N 或全寿命服务商原生数量 / N 二选一，不并用；继承周转包装库存不能证明服务内全新制造。 |  |
| allocate_supplies | 实际服务用品 | 每个实际原生品项状态 S = 可归属期初库存 + 净外部收货 - 期末。选择保留可用外退的总量口径 S / N，或净消耗口径 (S - 匹配可用外退) / N；采用后者时，实际数据集必须省略对应可用退回交换，不能再把它发出作为另一抵扣。期末包括可用回收留存，废物或未收集损失保留供应上游负担。内部包装循环和继承商品包装不创造新供应，设备瓶内制冷剂范围单独核对。 |  |
| allocate_commodity | 果实备查台账 | 全部果实生产在本服务外，将实际追踪且归属本货批作业期的原交接点数量（含有证据不可恢复果实或生理状态变化份额）关联兼容商品数据集，保留原交接点状态单位、期末库存、可用退回其他出口、实际验收净发运及已有损失覆盖。当前苹果质量差额不是原交接点损失量，仅新增商品基线未含原交接点需求，不再附通用得率乘数。本服务已有实际处理处置排除在商品仅生产调整外；缺追踪状态换算归属时阻止完整链条声明。 |  |
| allocate_outlets | recovered_refrigerant 及全部残余 | 实际可用回收退回和可用降级苹果外送需实际状态数量接收方，不自动抵扣避免原生制冷剂、新箱、果实或废物处理。果实仍为备查，不新增批发输出。若出现预期加工联产，最终数据前审核独立边界分配。 |  |
| commodity_link_scope | nonexchange commodity interface | 原交接库存及已完成外部集成保留实际记录的原始数量。声明source_assignment_scope_id、实际target_consignment_ids/target_cohort_id及source_assignment_quantity_basis，分为single_consignment_case、target_cohort_total或already_per_reference。仅当正same_target_scope_N准确覆盖已分配目标范围时，目标群原始总量才按source_link_per_service_quantity=source_link_assigned_raw_quantity/same_target_scope_N形成与1个accepted_service组合且仅用一次的接口，须原生单位状态来源及接收撤销证据。单货批N=1与已每参考量不再除一次。外部实际库存或阶段集成记录不得按服务N缩量，也不得以整个来源群N去除较窄目标已分配量；保留原始量与明确仅一次关联。 |  |

资产数据集已含制冷剂制造或工厂原始充注时，该负担仅在资产侧归属；只有实际服务承担且未覆盖的新增或补充供应进入 refrigerant_supply。明确核对制造、原始充注、回收充注和作业维护覆盖，不把同一工质重复计入。

接收商品交接点为已收获分选且具有实际包装的状态。仅有果园门比较数据集可能缺少中间分选包装、损失和运输，应在本附加过程外组装实际缺失前序范围，归属明确且阶段不重复。关联损失或状态变化需求之前，将原交接点商品数量匹配实际声明前序状态。
制冷剂净额处理必须匹配来源及范围。可用外部回收可能来自工厂预充工质，其生产已由资产数据集承担，而非当期独立作业补充购入。绝不能从不相关或当期补充量中扣减此类回收，也不能产生负补充供应。只有实物匹配、同范围独立供应库存数量且具有充注供应来源证据时，才允许净消耗扣减，并须省略对应退回交换。其他情形保留实际回收 Product 转移、不自动抵扣，保留原资产充注上游归属，采用实际非负作业供应库存口径。回收质量、继承充注和当期补充为不同物理及负担视图。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_consignment | apple_cold_wholesale | accepted_service | 实际所有权及验收货批台账 | site_id; campaign_id; period_id; consignment_id; contract_id; seller; business_buyer; ownership_start; resale_risk; source_lot_ids; cultivar; grade; fruit_net_mass; mass_unit; moisture_state; intake_quality; intake_temperature; temperature_unit; actual_start; actual_end; time_zone; duration; duration_unit; commercial_gate; accepted_quality; acceptance_record; cancellation_id; N | 核对实际自营企业间货批、验收撤销及货批状态记录，保留实际交接与温度时间限定信息，不以发票托盘拆分新增服务。 | Item(s) | 每个实际货批及冲回 | 实际接收到交接区间及相关期间 | 商人冷库及约定企业买方交接点 | per reference flow | 商业所有权品质及实际温度时间证据 |
| cp_apples | apple_cold_wholesale | fruit memorandum and discarded_apples | 状态关联果实与包装库存台账 | site_id; room_id; campaign_id; period_id; consignment_id; lot_id; cultivar; grade; event_id; state; event_time; time_zone; gross_mass; tare_mass; net_fruit_mass; mass_unit; moisture_value; moisture_basis; moisture_method; moisture_source; temperature; temperature_unit; humidity; humidity_unit; occupancy_start; occupancy_end; duration; duration_unit; opening_stock; external_receipts; buyer_return; physical_dispatch; net_accepted_dispatch; supplier_return; usable_other_exit; closing_stock; measured_discard; measured_water_change; measured_physiological_change; state_change_method; state_change_source; unexplained_residual; receiver; treatment_coverage; inherited_package_id; package_state; original_gate_quantity; original_gate_unit; original_gate_state; original_gate_conversion_method; original_gate_conversion_factor; original_gate_conversion_unit; original_gate_conversion_basis; original_gate_conversion_source; original_gate_dataset; predecessor_boundary; inherited_sorting_packing_scope; missing_predepot_stage; upstream_stage_owner; original_gate_attribution; baseline_loss_coverage; commodity_adjustment_owner; commodity_adjustment_status; uncertainty; source_assignment_scope_id; source_assignment_quantity_basis; target_consignment_ids; target_cohort_id; source_quantity_already_per_reference; external_raw_integration_quantity_preserved; once_only_service_link_evidence; source_link_assigned_raw_quantity; source_link_assigned_raw_quantity_unit; source_link_assigned_raw_quantity_basis; source_link_assigned_raw_quantity_method; source_link_assigned_raw_quantity_state; source_link_assigned_raw_quantity_source; source_link_assigned_raw_quantity_sample_time; same_target_scope_N; same_target_scope_N_unit; same_target_scope_N_basis; same_target_scope_N_method; same_target_scope_N_state; same_target_scope_N_source; same_target_scope_N_sample_time; source_link_per_service_quantity; source_link_per_service_quantity_unit; source_link_per_service_quantity_basis; source_link_per_service_quantity_method; source_link_per_service_quantity_state; source_link_per_service_quantity_source; source_link_per_service_quantity_sample_time; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 按事件测实际净果及状态，保留原货批和继承包装，核对物理库存退回出口及独立有证据水分生理变化，不强迫未知 kg 成为废物或物种；追踪原交接点商品需求及实际废物接收方。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kg 及实际状态温度时长单位 | 每次库存发运退回废弃及相关热区间 | 全部果实库存库房及商品关联期间 | 实际货批库房及原始接收交接点 | per reference flow | 校准称重皮重、实际品质温度及有证据原交接点去向关联 |
| cp_energy | apple_cold_wholesale | electricity and actual fuel burn | 库房及辅助能源台账 | site_id; room_id; campaign_id; period_id; consignment_id; asset_id; event_id; start_time; end_time; time_zone; duration; duration_unit; energy_carrier; meter_id; reading_start; reading_end; reading_unit; compressor_fan_defrost_scope; thermal_load_evidence; ambient_temperature; temperature_unit; occupied_volume; volume_unit; occupancy_time; occupancy_unit; all_consumer_driver; driver_used; driver_unit; idle_cleaning_scope; actual_burn; burn_unit; burn_method; carried_closing; usable_nonburned_return; contained_nonburned_waste; unrecovered_nonburned_loss; provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 计量实际制冷装卸辅助及实测燃烧，核对库房载荷、全部使用方时间和实际闲置除霜；仅在原生去向完整互斥且调查未知损失时重建燃烧，不重复服务商能源。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | 实际能源或燃料单位 | 每个实际计量作业区间 | 实际归属库房作业及相关期间 | 全部纳入制冷装卸辅助使用方 | per reference flow | 计量校准、热或使用驱动及完整覆盖燃烧证据 |
| cp_refrigerant | apple_cold_wholesale | refrigerant_supply, recovered_refrigerant, spent_refrigerant and refrigerant_releases | 分化学物设备及瓶内工质台账 | site_id; system_id; period_id; consignment_id; event_id; event_time; time_zone; boundary_scope; refrigerant_identity; blend_composition; composition_basis; composition_source; native_mass_unit; installed_opening; container_opening; external_net_receipts; receipt_gross; receipt_tare; installed_closing; container_closing; internal_charge; internal_recovery; usable_external_recovery; contained_external_waste; other_external_handoff; measured_release; measurement_method; release_species; receiving_medium; release_interval; factor; factor_unit; factor_basis; factor_source; unresolved_balance; uncertainty; actual_receiver; treatment_coverage; supplier_coverage; factory_charge_coverage; asset_manufacture_coverage; original_charge_owner; operating_makeup_owner; charge_origin_id; charge_origin_type; charge_upstream_owner; factory_charge_dataset; recovered_charge_provenance; matched_standalone_supply_lot; matched_standalone_supply_quantity; recovery_netting_eligibility; unrelated_makeup_netting_prohibited; attribution_driver; all_consumer_driver | 在明确一致设备及适用容器区间称量实际化学物混合物，分别记录内部充注回收与外部供应出口；采用直接释放测量或完整有证据物理去向及不确定性，任何未知差额仍为缺口而非自动泄漏。 | 实际化学物或混合物及单独识别物种的 kg | 每次充注回收维护释放及库存边界 | 实际设备及储存服务区间 | 实际制冷边界及外部接收方 | per reference flow | 化学物详情、实际称重充注回收接收及完整去向覆盖 |
| cp_supplies | apple_cold_wholesale | fuel, water, operating supplies, additional_packaging and usable_supply_returns | 原生品项及继承新增边界台账 | site_id; campaign_id; period_id; consignment_id; event_id; event_time; time_zone; SKU; material_state; formulation; concentration; concentration_unit; composition_basis; composition_source; native_unit; opening_quantity; receipt_gross; receipt_tare; receipt_net; closing_quantity; recovered_closing; usable_external_return; contained_waste; uncontained_loss; inherited_or_new; inherited_package_id; new_or_replacement_scope; density; density_unit; temperature; temperature_unit; conversion_factor; factor_unit; factor_source; gross_or_consumed_view; matched_stock_input_id; external_return_id; return_input_match; omit_matched_return_exchange; supply_scope; actual_water_purpose; provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 采用扣皮实际净外部收货及匹配原生库存退回，未证明实际新增更换服务责任时继承包装不进入新输入；实际水化学燃料去向分开，不把供应当排放。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 柴油升转kg须有实际相容密度、温度状态、质量体积比单位及来源，不预设换算。 | 实际品项原生单位 | 每个外部事件及盘点 | 全部实际归属期间 | 实际用品品项状态及服务责任 | per reference flow | 实际库存收货退回及继承新增覆盖和换算来源 |
| cp_assets | apple_cold_wholesale | shared_assets | 全寿命库房设备筐服务台账 | site_id; room_id; period_id; consignment_id; asset_id; package_asset_id; configuration; consumer_id; phase_id; event_date; manufacture_dataset; maintenance_record; replacement_record; end_of_life_record; driver_used; driver_unit; driver_used_unit; driver_lifetime; driver_lifetime_unit; observed_history; evidenced_remaining_use; remaining_source; termination_assumption; attribution_view; uncertainty; sensitivity; update_trigger | 列出全部实际使用方和期间，包括周转包装，以观察和有证据剩余使用及一种归属视图将完整寿命范围匹配物理驱动。 | Item(s) 或实际寿命服务原生单位 | 每个实际资产事件及期间复核 | 实际及有证据剩余服务寿命 | 实际库房装卸筐资产的全部使用方期间 | per reference flow | 完整资产寿命及实际有证据服务假设 |
| cp_providers | apple_cold_wholesale | provider_services | 物理成果及上游覆盖台账 | site_id; room_id; period_id; consignment_id; provider_id; service_id; event_date; actual_result; physical_quantity; native_unit; duration; duration_unit; completion_record; upstream_dataset; energy_coverage; refrigerant_coverage; material_coverage; asset_lifecycle_coverage; transport_coverage; waste_treatment_coverage; emission_coverage; attribution_driver; driver_unit; all_consumer_driver; missing_coverage | 核实实际完成物理成果和服务商原生数量及热或服务范围，再将全部直接上游资源与处理责任核对仅一次；未知必要覆盖仍是缺口。 | 实际服务商原生单位 | 每个实际完成成果 | 实际服务商区间 | 全部纳入服务商责任 | per reference flow | 成果完成物理单位及完整覆盖矩阵 |
| cp_freight | apple_cold_wholesale | freight | 实际载荷路线冷链路段台账 | site_id; period_id; consignment_id; leg_id; event_date; route; mode; provider_id; net_load; load_unit; load_tare; load_conversion_factor; load_conversion_unit; load_conversion_source; distance; distance_unit; distance_conversion_factor; distance_conversion_unit; distance_conversion_source; refrigerated_scope; actual_temperature; temperature_unit; transport_energy_coverage; transport_refrigerant_coverage; provider_native_unit; empty_return_method; attribution_driver; driver_unit; all_consumer_driver; upstream_coverage; duplicate_leg_check | 记录实际原生服务商成果，或净载乘距离及兼容明确换算，完整制冷及空返责任，排除重叠到货产品或服务商作业。 | kg*km 或实际服务商原生单位 | 每个实际货运路段 | 全部纳入进出场退回废物路段 | 声明实际运输责任 | per reference flow | 实际载荷距离冷链及服务商覆盖证据 |
| cp_fates | apple_cold_wholesale | environmental_water, other_wastes, contained_wastewater and water_outfalls | 实际原生数量接收与水去向台账 | site_id; period_id; consignment_id; event_id; event_time; time_zone; actual_material; state; native_unit; measured_mass; mass_unit; collected_volume; received_volume; volume_unit; water_source; water_role; purchased_or_direct; density; density_unit; temperature; temperature_unit; composition; concentration; concentration_unit; concentration_basis; composition_source; receiving_medium; receiver; treatment_dataset; treatment_coverage; direct_outfall_id; inherited_or_service_waste; uncertainty | 测量实际来源去向、原生数量及组成接收，区分直接取水、容装废水、直接排口、残余材料和处理范围；不由果重差额推水废物，不重复继承包装废物。 | 实际材料或水原生单位 | 每个实际取水废物转移排口 | 完整实际责任及收集区间 | 实际直接边界及外部接收处理 | per reference flow | 计量收集接收及组成覆盖证据 |
| cp_releases | apple_cold_wholesale | environmental_gases, respiration_releases and other_releases | 实际化学物介质测量或物理模型台账 | site_id; room_id; period_id; consignment_id; lot_id; event_id; start_time; end_time; time_zone; duration; duration_unit; cultivar; fruit_state; actual_fruit_quantity; fruit_quantity_unit; temperature_series; temperature_unit; humidity_series; humidity_unit; species; receiving_medium; intake_or_release_role; measured_quantity; measurement_unit; measurement_method; actual_activity; activity_unit; substrate_basis; physical_model; model_version; model_operands; operand_units; operand_sources; oxygen_intake_if_required; water_role; emission_factor; factor_unit; factor_basis; factor_source; actual_burn; burn_unit; composition_fraction; composition_basis; composition_source; release_fraction; fate_basis; fate_source; molecular_conversion; conversion_source; upstream_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 采用实际物质介质测量，或完整验证且匹配果实状态品种温度时间的方法及全部操作数单位来源，区分环境摄入和不同释放，不将未知库存差额指定为物种；完整因子仅计一次，不额外乘组成去向。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | 实际物种 kg 及兼容活动模型单位 | 每个测量模型区间及实际状态变化 | 实际边界内果实库房作业期间 | 每个实际来源及受纳介质 | per reference flow | 实际测量模型有效性操作数及不确定性，覆盖不重复 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| service_normalization | 所有清单行 | 使用兼容全部使用方物理驱动，将实际直接及有证据共享数量归属实际货批期间，再将可归属总量除以正已验收 N 一次；失败拒收撤销尝试保留实际责任，不增加已验收数量。 | cp_consignment; cp_apples; cp_energy; cp_refrigerant; cp_supplies; cp_assets; cp_providers; cp_freight; cp_fates; cp_releases | 每参考流的实际作业数量 |  |
| fruit_state_reconciliation | 果实备查台账 | 核对实际相同状态净果及物理库存事件：期初 + 外部收货 + 买方退回 - 期末 - 实物发运 - 供方退回 - 可用其他外送 - 实测废弃果实；将独立有证据水分生理状态变化保留为各自兼容物理视图，并调查未知差额。内部转移抵消，不同湿状态质量不能组成干物质或 CO2 平衡；如使用气体摄入及物种去向，需各自模型。 | cp_apples; cp_releases | 实际果实库存状态核对，不是推断物种或生产损失 |  |
| original_gate_demand | 果实备查台账 | 以明确原状态换算证据，将各货批实际原交接点数量追踪到验收货批、期末库存、供方可用出口及实际可归属不可恢复或状态变化份额。在服务外将实际可归属原交接点数量关联商品数据集；基线已有同一损失时核对，缺失需求仅加一次。不把原交接点损失设为当前质量差额，不规定通用乘数，不重复服务废物处理。 | cp_apples; cp_consignment | 服务交换外的原交接点商品数量损失接口 |  |
| refrigerant_fates | refrigerant_supply、recovered_refrigerant、spent_refrigerant 与 refrigerant_releases | 在明确一致设备及适用容器边界，期初库存 + 实际外部净收货 - 期末库存 - 可用外部回收 - 容装外部废物 - 其他有记录外送 = 需实测或有证据释放及不确定性调查的差额。内部充注回收抵消，不自动将未知差额标为泄漏，不单用补充量作释放。混合到物种换算需实际组成去向证据且仅用一次，完整物种因子不再相乘。 | cp_refrigerant | 每参考流实际供应回收废物释放工质视图 |  |
| physical_species | environmental_gases、respiration_releases 与 other_releases; respiration_releases_biogenic_co2_air; respiration_releases_vapour_air; other_releases_co2_fossil_air; other_releases_methane_fossil_air; other_releases_nitrous_oxide_air | 采用实际物质介质测量或经验证且匹配实际品种状态温度时间的物理模型，具有明确底物、摄入释放角色、全部操作数及不确定性。果实失水与呼吸为单独状态影响，不是质量差额标签。实际燃烧物种采用实测或完整核对燃烧及兼容来源特定因子，不将总供应、清洁化学物或安全限值转成排放。 | cp_apples; cp_energy; cp_releases | 实际已识别且不重叠摄入释放数量 |  |
| freight_quantity | freight | 每个实际 kg*km 路段用换算到 kg 的净载乘换算到 km 的实际距离，保留准确单位因子来源、冷链资源范围及空返。如服务商采用其他物理单位，保留匹配数量负担，不用数量价格代理。 | cp_freight | 每参考流实际兼容货运数量 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| identity_quality | 所有清单行 | 最终交换前核实实际服务材料化学物种身份及属性单位支持；数量属性及语义角色不确定产品 UUID。 | 具体流详情支持证据 |
| thermal_quality | apple_cold_wholesale | 保留实际品种等级、接收维持状态及校准温湿时间证据、品质交接和偏离。不设通用冷度或保证货架期，来源表格不是默认值。 | cp_apples；cp_energy；实际买方验收 |
| stock_loss_quality | 果实备查台账 | 解决实际质量皮重状态退回去向、原交接点数量及已有损失覆盖；未知果实差额不能靠假设成为 CO2、废物或原交接点损失。 | cp_apples；原状态换算及不确定性 |
| refrigerant_quality | 全部制冷角色 | 记录准确化学物混合物、有界库存充注回收外部接收及实际释放证据，未知差额或铭牌容量不是泄漏。 | cp_refrigerant 和完整物理台账 |
| coverage_quality | apple_cold_wholesale | 继承新增包装、完整寿命资产及直接服务商货运处理商品边界仅核对一次。未知数量或缺方法仍是缺口，经验范围需独立可比数据。 | 完整覆盖及缺失数据清单 |
| period_quality | shared_assets 及全部库存 | 跨期间关联实际库房货批库存和资产阶段、更换退役及使用方，保留失败货批负担，避免期初期末重复归属。 | cp_assets；cp_apples；实际阶段期间记录 |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | apple_cold_wholesale | 电表记录对应哪个供电点、交直流状态、电压和供应方数据集？核对已列交流电卡与其他有证据的供电，不得将交流电 UUID 用于其他能源。 计量实际压缩机、循环或除霜、装卸、照明及业务辅助；纳入失败货批与实际闲置清洁范围，不仅成功销售。 范围证据要求：需实际区间、库房货批载荷时长、热状态及全部使用方分配。独立电耗校验需品种载荷气候库房范围可比，不设每 kg 或每日默认电耗。 计量证据：协议`cp_energy`；原记录口径 Energy / kWh。原数量约束“每参考流的实际可归属苹果库房制冷及批发实际电力；cp_energy。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`electricity_ac`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_energy`; 实际来源关联原生记录 |
| refrigerant_supply | apple_cold_wholesale | 取得回路或设备编号、工质名称、组成及维护记录。区分新增补充、设备充注、可用回收液、封闭不可用液和实际释放的各化学物质；现有路线证据未确定化学身份。 展开实际化学物或混合工质身份、实测外部补充及设备瓶内库存范围。新充注、可用回收和其后释放为不同事件，不假定制冷剂类型或年泄漏率。 范围证据要求：需准确化学物或混合组成、实际购入净质量、设备及瓶内库存、充注回收留存转移去向和不确定性；补充量不能单独证明排放。 计量证据：协议`cp_refrigerant`；原记录口径 Mass / kg。原数量约束“每参考流的实际可归属实际供应制冷工质补充；cp_refrigerant。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_refrigerant`; 实际来源关联原生记录 |
| fuel_supply | apple_cold_wholesale | 库存记录对应哪种燃料牌号、配方及供给门？核实已列柴油以外的实际燃料及原生单位；体积转质量前取得实际密度。 记录实际牌号原生数量和库存调整供应，燃烧另行计量，不新增完整雇用运输或装卸服务已覆盖燃料。 范围证据要求：需实际库存收货退回记录、牌号、必要密度温度换算及互斥燃烧未燃去向，不将购入燃料等同燃烧。 计量证据：协议`cp_supplies`；原记录口径 Volume / L。原数量约束“每参考流的实际可归属自有装卸与辅助实际燃料供应；cp_supplies。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`fuel_supply_diesel_supply`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_supplies`; 实际来源关联原生记录 |
| water_supply | apple_cold_wholesale | 供应记录是否证明为处理自来水，还是其他明确水质或水源？核实供水状态及交接门，不得用自来水卡替代其他水。 仅计普通空气库房作业内实际设施辅助用水。果实清洗或水冷在本路线外，购水不是实测废水、呼吸水或直接取水。 范围证据要求：需实际计量用途期间及供方覆盖、实际加湿或清洁去向及分配，不由设施水费推断果实水分吸收或损失。 计量证据：协议`cp_supplies`；原记录口径 Volume / m3。原数量约束“每参考流的实际可归属实际购入设施清洁或湿度辅助用水；cp_supplies。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`water_supply_liquid_tap`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_supplies`; 实际来源关联原生记录 |
| operating_supplies | apple_cold_wholesale | 取得下述清洁或维护职责实际采购品号、配方或安全数据表、供应浓度、物态、用途及库存领用记录。逐项核实洗涤剂以外的实际材料；不得由本 PCR 预设药剂、滤材或剂量。 按原生单位状态展开实际清洁制剂、滤材、润滑剂及检验耗材。本证据检查点不授权蜡、杀菌处理或其他苹果化学加工输入。 范围证据要求：需品项配方浓度、净库存退回及实际废物释放去向和换算来源，不把安全限值或施用品量当排放因子。 计量证据：协议`cp_supplies`；原记录口径 Mass / kg。原数量约束“每参考流的实际可归属实际库房清洁与维护用品；cp_supplies。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`operating_supplies_synthetic_detergent`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_supplies`; 实际来源关联原生记录 |
| additional_packaging | apple_cold_wholesale | 取得包装物料单或规格、材料或复合层身份及新增与继承包装的责任。按该记录逐项确定尚缺的套袋、封口、标签、捆扎带或支撑件身份；一体复合包装不得拆成可相加的材料交换。 仅记录本服务承担的实际新增或更换包覆、封签、标签或破损容器替换；继承箱筐是备查流转，不自动计全新制造。 范围证据要求：需继承新增更换身份、实际品项原生数量质量面积、状态、接收方及匹配换算。周转筐需实测寿命服务，不能每次计全新制造。 计量证据：协议`cp_supplies`；原记录口径 Mass / kg。原数量约束“每参考流的实际可归属实际新增或更换服务包装用品；cp_supplies。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`additional_packaging_pe_film`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_supplies`; 实际来源关联原生记录 |
| provider_services | apple_cold_wholesale | 取得本记录中明列各职责的供应商合同或完成结果记录、原生计量物理单位及包含资源。确定各项服务结果身份；检验、清洁、装卸为不同服务，价格或小时不得改称件数。 按服务商原生单位展开实际制冷维护、检测、雇用装卸、卫生、业务辅助及合同冷藏，直接库房与完整雇用服务不得重叠。 范围证据要求：需实际完成成果和原生物理数量、完整能源制冷剂资产运输废物范围及缺失覆盖；时数价格不自动等于服务 Item(s)。 计量证据：协议`cp_providers`；原记录口径 Count / Item(s)。原数量约束“每参考流的实际可归属实际外部冷库及批发辅助成果；cp_providers。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_providers`; 实际来源关联原生记录 |
| shared_assets | apple_cold_wholesale | 对本记录中明列的每种资产取得资产编号、配置及匹配的完整生命周期数据集。待补的是各资产或服务身份及全寿命全部使用者分母；仓库、叉车、托盘不能共用一条计数交换，也不能套用默认寿命。 纳入实际冷库、制冷设备、装卸机械、秤、周转筐托盘及信息设备的可归属完整寿命服务；果实生产资产在范围外。 范围证据要求：需制造维护更换寿命终结、全部使用方及观察和有证据剩余服务驱动。需兼容占用体积时间或装卸循环证据，不设周转筐寿命或固定年数。 计量证据：协议`cp_assets`；原记录口径 Count / Item(s)。原数量约束“每参考流的实际可归属按寿命归属的冷库装卸及周转资产；cp_assets。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_assets`; 实际来源关联原生记录 |
| freight | apple_cold_wholesale | 对实际入库、出库、退运及废物运输段取得运输方式或车辆、温控服务、起终点、实际载荷和距离及供应方覆盖。方式或配置未明确前不能选择运输流；不同运输方式不得合成一条 kg*km 流。 记录实际承担进出场退回废物路段、载荷距离、冷链服务能源覆盖及空返，不重复同一到货运输或车辆能源。 范围证据要求：需实际净载皮重、路线方式距离及明确单位换算、完整冷链路段服务商范围和共享全部使用方驱动；不预设公里数或每货批吨数。 计量证据：协议`cp_freight`；原记录口径 Mass*distance / kg*km。原数量约束“每参考流的实际可归属实际不重叠苹果及服务用品货运；cp_freight。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_freight`; 实际来源关联原生记录 |
| environmental_water | apple_cold_wholesale | 按取水许可或计量记录确定实际取水口、地表水体或含水层、位置及水源实测量。地表水和地下水需不同源身份；购买水用量不能证明直接取水。 仅按实际水源位置和用途展开直接取水；购水、冷凝水收集和苹果水分为不同物理角色。 范围证据要求：需实际水源计量或独立有证据原生数量及用途；直接取水范围未知不是默认零，也不是重复购水输入。 计量证据：协议`cp_fates`；原记录口径 Volume / m3。原数量约束“每参考流的实际可归属实际分水源直接环境取水；cp_fates。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_fates`; 实际来源关联原生记录 |
| environmental_gases | apple_cold_wholesale | 按排放或采样记录确定各实测排放的来源事件、化学物或粒径身份、来源属性及接收介质。物种、粒径或介质不明须保留具体证据缺口；化学品总用量或库存损失不能提供这些身份。 仅在所选呼吸或物料模型明确要求且有证据时展开实际已识别摄入，例如氧。普通空气循环不自动成为购气交换，未知果实质量不是氧量。 范围证据要求：需实际气体身份、摄入角色介质和兼容测量或完整物理模型操作数来源；缺证据保留未决，不创造化学计量默认值。 计量证据：协议`cp_releases`；原记录口径 Mass / kg。原数量约束“每参考流的实际可归属物理模型要求时的实际已识别环境气体摄入；cp_releases。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`environmental_gases_oxygen_air`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_releases`; 实际来源关联原生记录 |
| usable_supply_returns | apple_cold_wholesale | 将对外退料凭据匹配到唯一投入品号、状态、原生单位及接收方。采用净消耗投入时省略对应退料交换；商品退货及期末库存另作审计记录。 将未用用品与实际输入品项原生状态及库存口径匹配；继承苹果包装和果实供方买方退货保留各自流转备查，不列为此处新增用品外退。 已证明匹配退回采用净消耗核算时，须省略该具体退回交换；保留本语义卡不授权再次抵扣。 范围证据要求：需实际外部接收转移、原生数量及对应输入；留存库存、废弃物及内部周转筐循环不是可用外退。 计量证据：协议`cp_supplies`；原记录口径 Mass / kg。原数量约束“每参考流的实际可归属实际可用作业用品外退；cp_supplies。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`usable_supply_returns_detergent_return`; `usable_supply_returns_pe_film_return`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_supplies`; 实际来源关联原生记录 |
| recovered_refrigerant | apple_cold_wholesale | 取得回路或设备编号、工质名称、组成及维护记录。区分新增补充、设备充注、可用回收液、封闭不可用液和实际释放的各化学物质；现有路线证据未确定化学身份。 记录实际可用回收化学物或混合工质跨境交付及接收方；仍在设备或瓶库存边界的回收气体是期末库存，不自动抵扣原生工质。 回收工厂预充工质量绝不能扣减不相关当期补充，须保留实际资产充注来源及上游负担归属。 范围证据要求：需实际回收称重、纯度混合状态、接收方和一致设备储存边界；不把每次抽空等于回收量，也不将每 kg 回收等于避免生产。 计量证据：协议`cp_refrigerant`；原记录口径 Mass / kg。原数量约束“每参考流的实际可归属实际对外交付可用回收制冷剂；cp_refrigerant。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_refrigerant`; 实际来源关联原生记录 |
| spent_refrigerant | apple_cold_wholesale | 取得回路或设备编号、工质名称、组成及维护记录。区分新增补充、设备充注、可用回收液、封闭不可用液和实际释放的各化学物质；现有路线证据未确定化学身份。 记录实际污染或不可用回收工质及接收处理，与可用回收、内部库存和直接化学释放区分。 范围证据要求：需实际容装净重、化学物混合组成、接收方和处理范围；抽空设备容量或服务发票不是实测废物或泄漏。 计量证据：协议`cp_refrigerant`；原记录口径 Mass / kg。原数量约束“每参考流的实际可归属实际容装送处理的不可用制冷工质；cp_refrigerant。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_refrigerant`; 实际来源关联原生记录 |
| other_wastes | apple_cold_wholesale | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 按状态原生单位接收方展开实际破损包装、废滤材、维护油及清洁废物，避免重复果实和制冷剂卡已归属数量。 范围证据要求：需实际材料组分、质量数量体积换算及处理接收覆盖；更换包装不证明继承全部包装在本服务废弃。 计量证据：协议`cp_fates`；原记录口径 Mass / kg。原数量约束“每参考流的实际可归属实际非果实非制冷剂容装废物；cp_fates。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_fates`; 实际来源关联原生记录 |
| contained_wastewater | apple_cold_wholesale | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 记录实际清洁维护或冷凝混合水送处理的实测水相状态与接收方；本路线不洗果，容装废水不是第二次直接排口。 范围证据要求：需实际收集接收体积、组成浓度基准和处理归属方；购入水和苹果失水不能直接证明本体积。 计量证据：协议`cp_fates`；原记录口径 Volume / m3。原数量约束“每参考流的实际可归属实际收集送处理的设施废水；cp_fates。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`contained_wastewater_aqueous_cleaning`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_fates`; 实际来源关联原生记录 |
| water_outfalls | apple_cold_wholesale | 确定直接排口、接收水体或土壤介质、实测水量及独立分析的污染物种。送处理的下水道转移不是该排口；接收介质未明时不能确定基本流。 按实际直接排口受纳介质及实测水质展开，不把容装处理转移或推断果实蒸散列为本排水流。 范围证据要求：需实际排口体积区间、受纳方和水质；载体水与单独污染物质量视图不能相加为一个当量材料流。 计量证据：协议`cp_fates`；原记录口径 Volume / m3。原数量约束“每参考流的实际可归属实际设施水直接排入环境；cp_fates。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_fates`; 实际来源关联原生记录 |
| refrigerant_releases | apple_cold_wholesale | 取得回路或设备编号、工质名称、组成及维护记录。区分新增补充、设备充注、可用回收液、封闭不可用液和实际释放的各化学物质；现有路线证据未确定化学身份。 按实际实测泄漏或完整审计物理去向证据展开准确化学物种和介质，必要时附混合组成与不确定性；未知充注差额不自动为释放。 范围证据要求：需一致边界期间下实际化学物充注回收留存废物其他转移操作数，测量方法或兼容完整因子；不采用铭牌量乘通用年漏率，不将补充量等同泄漏。 计量证据：协议`cp_refrigerant`；原记录口径 Mass / kg。原数量约束“每参考流的实际可归属向声明介质的实际已识别制冷工质物种释放；cp_refrigerant。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_refrigerant`; 实际来源关联原生记录 |
| respiration_releases | apple_cold_wholesale | 按排放或采样记录确定各实测排放的来源事件、化学物或粒径身份、来源属性及接收介质。物种、粒径或介质不明须保留具体证据缺口；化学品总用量或库存损失不能提供这些身份。 仅实际物种介质特定测量或经过验证且品种状态温度时间匹配模型可确定释放。生物源 CO2、水蒸气和摄入氧为不同物理角色，不由果重损失通用换算。 范围证据要求：需兼容实际状态、温度时间序列、底物基准及完整模型测量操作数、不确定性和受纳子介质；未知湿质量变化不默认为 CO2、水蒸气或干物质损失。 计量证据：协议`cp_releases`；原记录口径 Mass / kg。原数量约束“每参考流的实际可归属实际已识别果实呼吸或水蒸气释放；cp_releases。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`respiration_releases_biogenic_co2_air`; `respiration_releases_vapour_air`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_releases`; 实际来源关联原生记录 |
| other_releases | apple_cold_wholesale | 按排放或采样记录确定各实测排放的来源事件、化学物或粒径身份、来源属性及接收介质。物种、粒径或介质不明须保留具体证据缺口；化学品总用量或库存损失不能提供这些身份。 从实际燃烧清洁或其他作业展开实际物质和介质，与制冷剂、果实呼吸及上游服务商处理区分。 范围证据要求：需实测物种或兼容实际活动物种因子，必要时有组成去向来源；不把清洁制剂总量、安全限值或未知库存转成排放。 计量证据：协议`cp_releases`；原记录口径 Mass / kg。原数量约束“每参考流的实际可归属实际已识别燃烧清洁及其他直接释放；cp_releases。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`other_releases_co2_fossil_air`; `other_releases_methane_fossil_air`; `other_releases_nitrous_oxide_air`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_releases`; 实际来源关联原生记录 |
| apple_waste_state | apple_cold_wholesale | 按批次废物凭据确认完整苹果或独立收集的果实碎片、含水状态及接收处理路线；分别使用`discarded_apples`和`discarded_apple_fragments`。两卡不得覆盖同一质量，尚未确定的状态或接收方阻断完成。 | `cp_apples`; receiver records |

## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_gate | accepted_service | 核实实际所有权转售、企业买方、唯一验收货批 N > 0 及全部实际品种等级净质量状态温度时间商业限定信息；箱车辆及撤销尝试不得增加数量。 |  |
| validate_preservation | apple_cold_wholesale | 检查可用前状态、实际普通空气库房干预、维持后完整验收状态及全部拒收损失退回出口和实际输入角色，不推断气调改良气氛化学洗果加工或数值制度。 |  |
| validate_fruit | 果实备查台账 | 核对物理果实包装状态和实际原交接点归属需求及损失覆盖，以兼容方法解决未知差异，绝不以质量差额指定物种；缺商品关联阻止完整链条准备。 |  |
| validate_refrigerant | refrigerant_supply、recovered_refrigerant、spent_refrigerant 与 refrigerant_releases | 检查一致设备储存边界、实际化学物混合物及供应库存回收废物转移释放全部去向和不确定性，不采用补充或铭牌乘默认年率，不对完整因子额外乘物种分数。 |  |
| validate_real_exchanges | 所有清单行 | 每个实际展开原生交换需本节点协议及身份状态接收证据，不把继承箱计新用品、周转资产每次计新制造或容装废物水计直接排放。实际环境水气物种角色需独立证据，不默认为零。 |  |
| validate_allocation_period | shared_assets 与 apple_cold_wholesale | 检查全部实际使用方期间、实际货批作业与连续库房、闲置失败清洁归属、完整资产寿命及观察和有证据剩余服务。一个物理资源只有一个归属且按 N 归一化一次。 |  |
| validate_concrete_identity_decisions | all inventory rows | 将每项实际身份核实事项落实到实物明确的流卡和原生数量，或提供不适用证据。证据检查点 ID 不是交换。发生、物种、状态、接收方或服务配置缺失时阻断最终数据完成，不默认零。按规定保持整体与组分、总量投入与对应退料的排他关系。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 完成具体身份及实际前景完整性审核后作为 secondary_dataset；background_dataset |
| downstream_use | 关联单独匹配商品生产及原交接点调整的普通空气冷藏苹果批发服务附加过程 |
| allowed_use | 实际商人所有完整鲜苹果库房冷却保管货批，具有匹配品种数量状态温度时间及商业验收交接 |
| excluded_use | 独立苹果足迹或果园生产；全部水果平均；气调改良气氛果实处理加工零售代理；货币服务代理；无实际商品调整的完整链条声明 |
| required_metadata | 实际商人场址库房期间货批及所有权、品种等级净果皮重水分状态、接收维持温湿时间品质、实际包装制冷服务商货运处理范围及商品关联归属状态 |
| required_quality_disclosure | 具体身份支持及未决实际数据、库存状态生理和制冷不确定性、全部使用方全寿命资产假设、缺失覆盖方法及独立范围限制 |
| update_trigger | 实际品种等级库房气氛路线交接、冷却品质证据、制冷剂资产服务商范围、包装、损失状态商品覆盖或记录方法变化 |


## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-fruit-wholesale | official_guidance | UNSD CPC Version 3.0 explanatory notes, division61/subclass61021 (30 June 2025). https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅支持自营果蔬批发分类，本完整冷藏苹果服务为较窄子集。 |
| fao-temperature-humidity | official_guidance | FAO, Small-Scale Postharvest Handling Practices: A Manual for Horticultural Crops, section6 Temperature and relative humidity control. https://www.fao.org/4/x5403e/x5403e08.htm | 定性支持库房制冷、呼吸失水及品种冷害状态问题，不采用温度能源时长生理因子或货架期值。 |
| fao-horticultural-storage | official_guidance | FAO, Small-Scale Postharvest Handling Practices: A Manual for Horticultural Crops, section7 Storage of horticultural crops. https://www.fao.org/4/x5403e/x5403e09.htm | 支持实际接收品质、循环湿度及共储兼容问题；数值储存表和气调示例不是本路线默认值。 |
