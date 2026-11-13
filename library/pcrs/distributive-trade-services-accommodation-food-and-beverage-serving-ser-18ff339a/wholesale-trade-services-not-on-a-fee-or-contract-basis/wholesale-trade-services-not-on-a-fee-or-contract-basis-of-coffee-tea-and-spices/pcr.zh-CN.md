---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-coffee-tea-and-spices
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 密封烘焙整粒咖啡豆自营批发

## 1. 范围与适用性

本PCR描述商人购入转售厂家放行密封烘焙整粒咖啡豆，经普通常温接收库存管理装卸并向企业买方验收交接的实体服务。实际配豆烘焙、包装封口阀、净含量、制造烘焙放行最佳食用日期、实际条件与买方品质标准为必要个案证据，不设代表包装重量或保质承诺。

排除生绿咖啡生产、烘焙研磨脱咖啡因速溶冲煮、开包重包新气体置换、零售收费代理及纯仓储。加工或专门温度干预须复核路线。NCA消费者指南仅支持空气水分热光及吸湿定性背景，不能要求批发商开启全部密封包冷冻、采用家庭鲜度数字或逐包重复检测。

全部咖啡及继承包装制造含损失所承载上游生产均在本服务外。完整链条前须将实际完整烘焙密封来源交接需求损失单独量化仅关联一次，实际服务装卸及声明接收处理在此仅计一次。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-coffee-tea-and-spices |
| classification_refs | CPC3 61027；密封烘焙整豆商人批发较窄子集 |
| covered_products | 厂家密封烘焙整豆常温自营企业间已完成服务 |
| excluded_products | 生绿研磨速溶冲煮咖啡；烘焙加工重包；零售代理纯仓储 |
| representative_product | 实际放行密封整豆品项烘焙货批的一次已验收商业货批 |
| production_route | 供方完整烘焙密封交接 -> 所有权接收常温存放装卸 -> 企业间验收转售 |
| market_state | 计数实体服务；咖啡内容物包装顶空仍为商品状态审计 |


## 3. 参考流

| Field | Value |
| --- | --- |
| What | 已完成密封烘焙整粒咖啡豆自营批发货批 |
| How much | 1 Item(s) |
| How well | 真实厂封烘焙整豆品项状态日期数量品质及商业验收，无自动安全鲜度保证 |
| How long or cycle | 实际接收存放装卸验收期间，库存报表及资产寿命另行索引 |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 已完成密封烘焙整粒咖啡豆自营批发货批 |
| reference_flow_property | 数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | 数量单位组 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | consignment_id; merchant_ownership_resale; business_buyer_gate; SKU_blend_whole_roast; manufacturer_release_gate; actual_roast_release_bestby_dates; package_seal_valve_state; net_contents_tare_basis; actual_moisture_method_basis; actual_conditions_exposure; actual_start_end_duration_unit; quality_acceptance_reversal; site_period_lot; supplier_stage_coverage; source_gate_assigned_demand; commodity_loss_owner_status |

N>0为冲回后实际唯一商业验收货批数，包数托盘订单或咖啡kg不等于本计数；未完成拒收期间仍保留实际资源。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| count_service | accepted_service | Count | Item(s) | 采用实际最终商业验收交接标识，不按发票包拆分或固定豆质量。 |
| net_state | 商品审计 | Mass; Count | kg；实际包装单位 | 区分湿基收到豆内容物皮重封口阀顶空货载，实测水分需湿干基准方法，不用绿豆水分默认。 |
| native_conversion | 全部实际交换 | 原生兼容属性 | 原生单位 | 保留数量状态密度温度换算因子单位基准来源，适用气体换算还需实际压力组成。 |


## 5. 系统边界

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 实际厂家放行烘焙整豆密封品项货批，具有日期封口阀净含量皮重水分品质证据 |
| starting_condition_role | 常温自营实体批发继承完整商品状态 |
| product_classification_scope | 61027所含2391内较窄咖啡批发，不能替代为生绿咖啡生产 |
| recursive_input_rule | 不把商品豆包装作为服务制造消耗输入，不递归同商人货批，另行追踪商品。 |
| upstream_dataset_requirement | 单独关联实际完整烘焙密封来源交接及实际已含绿咖啡烘焙冷却排气包装，缺阶段在服务外组装一次。 |
| disclosure | 实际货批日期净皮重水分状态验收条件；供方交接归属量换算基线损失；事件期间服务商资产货运处理归属与缺口 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| commodity_owner | 商品 | 全部商品生产含损失在服务外，实际实体装卸废物处理纳入一次。 |  |
| sealed_ambient | coffee_wholesale | 厂家密封是继承状态不是运营包装保鲜节点；实际湿度温度气味光照封口日期品质证据决定验收，消费者家庭要求不是批发流程默认。 | nca-coffee-storage |
| state_fates | 商品及释放 | 吸脱湿陈味实际气体释放开样破包供方退回废弃不同，库存差额不能证明任一物种或原交接损失。 |  |
| period_boundary | 全部库存服务事件 | 关联货批作业期间标识、全部失败拒收未完成验收作业、配对内部移库及实际接收出口；仅最终商业验收计N。 |  |


## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| coffee_wholesale | 密封烘焙整豆常温商人服务 | required | 放行密封烘焙整豆实际所有权转售及普通常温实体服务 | 接收货批条件管理装卸库存商业验收交接，不转化咖啡 | `accepted_service` |

实际货批与仓库作业及连续辅助期间重叠，先关联接收发运采样清洁闲置切换及拒收未完成事件再分配。破封霉变气味日期等拒收需真实隔离退回降级废弃路径，开包再加工为路线变化而非假定循环。期间没有验收事件N时仍保留资源负担并解释跨期归属。

### 过程：密封烘焙整豆常温商人服务 (`coffee_wholesale`)

#### 输入

##### 产品流

###### 实际使用点交流电 (`electricity_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Energy / kWh
- 数量规则：每参考流实际可归属实际仓库及装卸电力；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

范围证据要求：需实际表差、区间、全部使用方及完成货批归属；独立核对须仓库载荷范围匹配，不设通用咖啡每kg电耗。

###### 实际液态处理自来水供给 (`facility_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Volume / m3
- 数量规则：每参考流实际可归属实际购入卫生及设施用水；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需实际计量领用用途原生体积及供方边界；购水直接取水豆水分和接收废水为不同数量。

###### 实际独立记录的聚乙烯包装薄膜 (`outer_packaging_pe_film`)

仅适用于实际独立供应、供本服务新增包裹或衬垫使用的聚乙烯薄膜，须确认实际聚合物配方与薄膜净量。该身份为工厂门通用生产组合，仍须记录实际供给门、供应方及另负责任的交付负荷。不预设LDPE/HDPE牌号、再生比例、厚度或用量。PVC、PET、PP、多层复合材料、胶黏标签、填充包装及继承商品包装仍按余项独立身份处理；整体供应与组分不得重复计量，不预设发生。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际可归属实际新增外层装卸保护及标签；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需继承新增层级品项、实际面积数量质量及单件或面积换算来源；不每次批售制造全新咖啡初级包。

###### 实际独立记录的合成洗涤剂投入 (`operating_supplies_synthetic_detergent`)

仅适用于产品配方、供应状态及用途记录确认的实际合成表面活性洗涤剂。记录扣除包装皮重的材料净量，区分浓缩液与稀释水，整体配方与组分不得相加重复计入。肥皂、消毒剂、抹布、滤材等仍按各自实际身份记录，不预设清洁配方、剂量或发生。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际可归属实际仓库清洁维护用品；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需品项浓度期初收货期末组成净皮重和实际废弃退回释放；安全表或施用品量本身不是物种排放。

###### 实际独立确认的供应柴油 (`fuel_supply_diesel_supply`)

仅适用于本运行燃料要求内实际独立确认的柴油。通用身份为Mass/kg；记录实际配方、供应方、供给门及原生库存范围。原生数量为升时，最终换算kg须有实际相容密度、温度状态、质量体积比单位及来源，不使用目录默认密度或热值。供应库存与燃烧量是不同记录；其他燃料保留余项，购买燃料或未解释库存差不证明燃烧及排放。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Volume / L
- 数量规则：每参考流实际可归属实际装卸辅助燃料供应；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需牌号原生库存收退期末和实际互斥燃烧未燃去向，适用密度温度换算来源；不假定购入即燃烧。

###### 用于新增运输保护的纸板箱 (`outer_packaging_paperboard_carton`)

仅覆盖本过程有独立实际证据的“用于新增运输保护的纸板箱”。记录自身物态、净量 kg、事件来源及交接门。其他状态或接收方需在`outer_packaging`下独立确定身份，本卡不能替代；记录缺失不证明发生或为零。 仅在新增包装确认为纸板箱时使用，记录结构、纸板箱净质量及供应门。塑料筐、木箱或身份实质不同的复合箱需另设流卡；排除继承包装和周转资产。不预设纤维等级、再生成分比例或每箱质量。

- 选定流：用于新增运输保护的纸板箱
- 流属性/单位：Mass / kg
- 数量规则：`outer_packaging_paperboard_carton`实际独占归属的 kg / 验收 N，仅归一化一次；已按参考流给出的数量不得再次除以 N。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需事件关联的原生 kg、状态组成、接收或供应门、归属记录及整件组分或对应投入的排他关联，使用协议`cp_supplies`。不提供默认数值或换算因子；其他原生单位须有换算证据后使用。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已完成密封烘焙整粒咖啡豆自营批发货批 (`accepted_service`)

一个厂家放行密封烘焙整豆经常温接收存放装卸、商人拥有并完成企业间验收货批。豆质量包装日期状态为限定，不是制造商品的服务输出身份。

- 选定流：已完成密封烘焙整粒咖啡豆自营批发货批
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_consignment`

范围证据要求：数量仅为归一化；需真实品项配豆烘焙整豆封口阀日期净皮重水分基准条件时间商业验收；不设标准货批质量鲜度时长或开包冷冻要求。

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

仅覆盖本过程有独立实际证据的“退回供应方的未使用聚乙烯薄膜”。记录自身物态、净量 kg、事件来源及交接门。其他状态或接收方需在`usable_supply_returns`下独立确定身份，本卡不能替代；记录缺失不证明发生或为零。 将未使用材料的配方、供应状态和原生质量严格匹配到投入`outer_packaging_pe_film`。本卡为可用对外退料，不是废物、期末库存或内部循环。仅在总量供应口径下列此输出；投入已扣除该退料时必须省略对应退料输出，不自动抵扣避免生产。

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

###### 废弃密封烘焙整粒咖啡豆包装整件 (`discarded_coffee_packs_atomic_case`)

仅在实际独立记录确认“废弃密封烘焙整粒咖啡豆包装整件”时适用。本卡只覆盖该命名实物状态及自身实际净量、保留组成和接收门。其他部件、碎片、游离液、独立包装及清理载体仍属于`discarded_coffee_packs`中的身份核实事项；不得移动边界、预设事件、将库存差当废弃，或把仍保留在整体流内的组分另算出口。实际混收流须匹配自身准确身份。原有原生单位数量协议只用于本独占具体情形，其他实际去向分别协调。

- 选定流：废弃密封烘焙整粒咖啡豆包装整件
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际可归属实际废弃咖啡包及内容物；cp_stock。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_stock`

范围证据要求：需实际处置接收原生量净皮重组成、原供方交接当量及接收处理范围；短缺或日期本身不证明废弃。

###### 实际单独收集的纸类包装废物 (`other_wastes_paper_pack`)

仅适用于本节点实际独立废弃、单独收集的纸类包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：包装废弃物，纸类 `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际可归属实际作业及新增外包装废物；cp_fates。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据要求：需原生实测量换算组成及接收处理记录；收货清洁领用不是废物量，不自动回收抵扣。


###### 实际单独收集的金属包装废物 (`other_wastes_metal_pack`)

仅适用于本节点实际独立废弃、单独收集的金属包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：金属包装废物 `cdda6013-c0c5-4c72-990a-f5668fe71069`
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际可归属实际作业及新增外包装废物；cp_fates。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据要求：需原生实测量换算组成及接收处理记录；收货清洁领用不是废物量，不自动回收抵扣。


###### 实际单独收集的塑料包装废物 (`other_wastes_plastic_pack`)

仅适用于实际独立废弃、单独收集的空塑料包装，保留实际组成、含水状态及接收方。含残留商品的混合包装、污染混合流、设备内保温泡沫、一次性抹布及复合包装不使用本分支；整体混合流中的组分仅作不可相加审计，运输处理责任计入一次。不预设排空、回收、发生或数量。

- 选定流：塑料包装废物 `919351c4-3e25-4092-9934-73ecec021a3b`
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际可归属实际作业及新增外包装废物；cp_fates。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据要求：需原生实测量换算组成及接收处理记录；收货清洁领用不是废物量，不自动回收抵扣。

##### 基本流

###### 实际有独立证据的向空气排放化石二氧化碳 (`other_releases_co2_fossil_air`)

仅在实际证据确认化石来源、二氧化碳物种和向空气直接释放时适用。保留报告的碳或CO2基准，碳转CO2须独立有证据的化学计量，不预设系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际可归属实际装卸燃烧维护物种；cp_releases。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_releases`

范围证据要求：需实测物种或实际燃烧活动及兼容完整因子，所需组成去向仅一次；施用品金额危险分类不是排放质量。


###### 实际有独立证据的向空气排放化石甲烷 (`other_releases_methane_fossil_air`)

仅在实际证据确认化石来源、甲烷物种和向空气直接释放时适用。生物源或来源未知甲烷仍在余项要求中，不得改标化石源；不预设泄漏发生、气体比例、数量或排放系数。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际可归属实际装卸燃烧维护物种；cp_releases。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_releases`

范围证据要求：需实测物种或实际燃烧活动及兼容完整因子，所需组成去向仅一次；施用品金额危险分类不是排放质量。


###### 实际有独立证据的向空气排放氧化亚氮 (`other_releases_nitrous_oxide_air`)

仅在实际证据确认氧化亚氮物种及向空气直接释放时适用。原生数量为N2O质量，不是氮质量或氮气质量，不预设排放系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际可归属实际装卸燃烧维护物种；cp_releases。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_releases`

范围证据要求：需实测物种或实际燃烧活动及兼容完整因子，所需组成去向仅一次；施用品金额危险分类不是排放质量。

## 7. 分配与联产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| operations | 全部实际服务行 | 先归属直接事件用量，共享辅助采用全部真实使用方期间含拒收闲置的有依据兼容物理驱动，归属总量仅除正验收N一次，不自动用收入平均订单。 |  |
| assets | shared_assets | 采用实际已用/兼容全寿命驱动覆盖制造维护实际更换寿命终结。寿命为观察历史加有证据剩余服务退役及不确定性敏感性，资产当量或全寿命服务商一种视图，不并用或重复除N。 |  |
| supply_returns | 作业用品 | 每个实际原生品项状态S=归属期初+净外部收货-期末。保留出口总量用S/N及实际可用外退，净消耗用(S-匹配可用外退)/N并省略该退回交换。回收留存为期末，废损保留生产，不负值或不匹配扣减。 |  |
| source_gate | 咖啡包装备查 | 完整烘焙密封来源交接制造留在服务外。按货批以原单位状态换算将实际来源量映射验收发运期末可用退回其他出口及有证据废弃状态变化份额。新增归属需求=实际所需交接需求减基线已含同一需求损失，记录相同状态不重叠，不减不相关范围或产生负需求。仅绿咖啡数据缺烘焙包装阶段在外组装一次，不把水分变化顶空气体叫废豆kg。 |  |
| fates | 全部出口 | 实际接收处理有一个归属；可用品商品回收不自动抵扣避免生产，实际咖啡退回降级仍属非交换商品审计。来源需求状态接收覆盖未知阻止完整链条定稿。 |  |
| commodity_link_scope | nonexchange commodity interface | 原交接库存及已完成外部集成保留实际记录的原始数量。声明source_assignment_scope_id、实际target_consignment_ids/target_cohort_id及source_assignment_quantity_basis，分为single_consignment_case、target_cohort_total或already_per_reference。仅当正same_target_scope_N准确覆盖已分配目标范围时，目标群原始总量才按source_link_per_service_quantity=source_link_assigned_raw_quantity/same_target_scope_N形成与1个accepted_service组合且仅用一次的接口，须原生单位状态来源及接收撤销证据。单货批N=1与已每参考量不再除一次。外部实际库存或阶段集成记录不得按服务N缩量，也不得以整个来源群N去除较窄目标已分配量；保留原始量与明确仅一次关联。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_consignment | coffee_wholesale | accepted_service | 实际商业验收及继承状态台账 | site_id; campaign_id; period_id; consignment_id; lot_id; supplier_id; SKU; blend_species; roast_state; whole_bean_state; manufacturer_release; supplier_gate; roast_date; release_date; best_by_date; date_source; ownership_start; resale_risk; business_buyer; pack_configuration; seal_valve_state; net_contents; net_unit; tare; tare_unit; actual_temperature; temperature_unit; relative_humidity; humidity_unit; odor_light_exposure; actual_start; actual_end; time_zone; duration; duration_unit; acceptance_criteria; acceptance_record; reversal_id; N | 核实实际商人所有权转售及整豆烘焙厂封品项放行日期真实最终企业验收，保留数量条件而非逐包开启。 | Item(s) | 每货批冲回 | 实际关联服务库存报表区间 | 实际商人仓库商业交接 | per reference flow | 可追溯放行所有权日期条件验收 |
| cp_stock | coffee_wholesale | merchandise; discarded_coffee_packs | 实际咖啡包装状态及原交接库存台账 | site_id; period_id; consignment_id; lot_id; event_id; event_time; time_zone; SKU; pack_count; pack_unit; net_bean_mass; mass_unit; package_tare; moisture; moisture_unit; moisture_wet_dry_basis; moisture_method; moisture_source; sample_selection; sample_quantity; sample_unit; sample_removal; sample_return; sample_fate; seal_valve_state; temperature; temperature_unit; opening; external_receipts; buyer_returns; physical_dispatch; net_accepted_dispatch; closing; supplier_returns; useful_other_exit; discarded_quantity; discard_unit; discard_composition; discard_receiver; discard_treatment_scope; moisture_state_change; other_state_change; state_change_method; state_change_unit; state_change_basis; state_change_source; unexplained_residual; source_gate_quantity; source_gate_unit; source_gate_state; source_gate_dataset; source_gate_conversion_method; source_gate_conversion_factor; conversion_unit; conversion_basis; conversion_source; source_stage_coverage; missing_upstream_stage; assigned_gate_demand; baseline_same_loss_coverage; additional_gate_demand; commodity_owner; adjustment_status; uncertainty; source_assignment_scope_id; source_assignment_quantity_basis; target_consignment_ids; target_cohort_id; source_quantity_already_per_reference; external_raw_integration_quantity_preserved; once_only_service_link_evidence; source_link_assigned_raw_quantity; source_link_assigned_raw_quantity_unit; source_link_assigned_raw_quantity_basis; source_link_assigned_raw_quantity_method; source_link_assigned_raw_quantity_state; source_link_assigned_raw_quantity_source; source_link_assigned_raw_quantity_sample_time; same_target_scope_N; same_target_scope_N_unit; same_target_scope_N_basis; same_target_scope_N_method; same_target_scope_N_state; same_target_scope_N_source; same_target_scope_N_sample_time; source_link_per_service_quantity; source_link_per_service_quantity_unit; source_link_per_service_quantity_basis; source_link_per_service_quantity_method; source_link_per_service_quantity_state; source_link_per_service_quantity_source; source_link_per_service_quantity_sample_time; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | 核对实际兼容包数豆包装水分状态，追踪全部出口样品去向及实际原交接归属需求。差额保留未知而非猜气体废物，供方完整烘焙密封阶段损失覆盖独立。 只归属独立确认的实物情形，其他实际去向按来源分别保留；每个原生记录只属于一个交换，任何总量仅作不可相加审计。 | 实际原生包数及kg状态 | 每次移动盘点取样处置 | 实际关联服务库存报表区间 | 全部实际库存货批及原供方状态 | per reference flow | 称重皮重水分采样来源及匹配来源数量 |
| cp_energy | coffee_wholesale | electricity; fuel_supply | 实际计量燃烧台账 | site_id; campaign_id; period_id; consignment_id; event_id; asset_id; start_time; end_time; time_zone; duration; duration_unit; meter_id; energy_carrier; reading_start; reading_end; reading_unit; actual_driver; driver_unit; all_consumer_driver; all_consumer_unit; idle_cleaning_scope; actual_burn; burn_unit; burn_method; nonburned_return; nonburned_waste; nonburned_loss; closing; provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 计量实际服务用量燃烧和全部使用方分配；仅完整互斥原生库存去向才重建燃烧并调查未知损失。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | 实际能源燃料单位 | 每实际计量区间事件 | 实际关联服务库存报表区间 | 全部纳入装卸仓库辅助使用方 | per reference flow | 计量实际驱动完整燃烧服务商覆盖 |
| cp_supplies | coffee_wholesale | facility_water; outer_packaging; operating_supplies; fuel_supply; usable_supply_returns | 实际原生供应退回台账 | site_id; period_id; consignment_id; event_id; event_time; time_zone; SKU; chemical_formulation; concentration; concentration_unit; composition_basis; composition_source; native_unit; opening; receipt_gross; receipt_tare; receipt_net; closing; retained_recovery; usable_external_return; actual_waste; direct_loss; inherited_new_pack_level; matched_input_id; return_recipient; gross_consumed_view; omit_matched_return_exchange; original_supply_owner; density; density_unit; temperature; temperature_unit; conversion_factor; factor_unit; factor_basis; factor_source; actual_purpose; provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 采用扣皮净收货同状态库存实际外部去向，退回仅匹配独立范围。初级密封袋继承，外层保护另记。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 柴油升转kg须有实际相容密度、温度状态、质量体积比单位及来源，不预设换算。 | 实际原生供应单位 | 每次收货领用退回库存边界 | 实际关联服务库存报表区间 | 实际作业库存服务边界 | per reference flow | 原生收货库存退回匹配换算 |
| cp_assets | coffee_wholesale | shared_assets | 完整寿命使用方台账 | site_id; period_id; consignment_id; asset_id; consumer_id; phase_id; manufacture_dataset; maintenance; replacement; end_of_life; event_date; driver_used; driver_used_unit; lifetime_driver; lifetime_driver_unit; observed_history; evidenced_remaining; remainder_source; termination; attribution_view; uncertainty; sensitivity; update_trigger | 覆盖全部真实使用方期间及完整寿命，以一种视图匹配已用寿命单位及观察有证据剩余服务。 | Item(s)或实际寿命服务单位 | 每资产事件期间复核 | 实际关联服务库存报表区间 | 实际共享资产完整寿命 | per reference flow | 完整阶段实际驱动有证据剩余 |
| cp_providers | coffee_wholesale | provider_services | 完成物理成果及覆盖矩阵 | site_id; period_id; consignment_id; provider_id; service_id; event_date; completed_result; physical_quantity; native_unit; duration; duration_unit; completion_evidence; sample_scope; material_coverage; energy_coverage; chemical_coverage; asset_lifecycle_coverage; freight_coverage; treatment_coverage; direct_release_coverage; actual_driver; driver_unit; all_consumer_driver; all_consumer_unit; missing_coverage | 核实实际成果原生单位完整物理边界，已含服务商作业不重复直接输入并保留缺组成。 | 实际服务商原生物理单位 | 每实际完成成果 | 实际关联服务库存报表区间 | 实际外包责任 | per reference flow | 成果单位证明覆盖归属 |
| cp_freight | coffee_wholesale | freight | 实际货载距离台账 | site_id; period_id; consignment_id; leg_id; event_date; provider_id; mode; actual_load; load_unit; bean_net_mass; pack_mass; included_tare; tare_scope; load_conversion_factor; load_factor_unit; load_factor_basis; load_factor_source; distance; distance_unit; distance_conversion_factor; distance_factor_unit; distance_factor_source; empty_return_scope; actual_driver; driver_unit; all_consumer_driver; all_consumer_unit; provider_native_unit; supplier_delivered_coverage; duplicate_leg_check | 计量实际货载含声明包装皮重范围及真实距离，空返共享路段到货来源覆盖仅一次。 | kg*km或实际原生货运单位 | 每实际纳入路段 | 实际关联服务库存报表区间 | 全部实际纳入商品服务废物路段 | per reference flow | 货载距离换算唯一范围归属 |
| cp_fates | coffee_wholesale | environmental_water; other_wastes; contained_wastewater; water_outfalls | 实际水废物接收台账 | site_id; period_id; consignment_id; event_id; event_time; time_zone; material_source; native_quantity; native_unit; collected_volume; received_volume; volume_unit; mass; mass_unit; density; density_unit; temperature; temperature_unit; composition; concentration; concentration_unit; composition_basis; composition_source; conversion_factor; factor_unit; factor_source; purchased_direct_water; receiver; receiving_medium; treatment_dataset; treatment_coverage; direct_outfall; actual_driver; driver_unit; all_consumer_driver; all_consumer_unit; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 计量实际来源原生接收状态数量组成处理归属。购水环境取水容装液体直接排口物种为不同不可相加角色。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | 实际原生水废物单位 | 每实际取水接收排口事件 | 实际关联服务库存报表区间 | 实际来源接收责任 | per reference flow | 实际实测数量组成接收范围 |
| cp_releases | coffee_wholesale | coffee_species; other_releases | 实际来源物种介质释放台账 | site_id; period_id; consignment_id; event_id; start_time; end_time; time_zone; duration; duration_unit; source_role; SKU_lot_or_asset; chemical_species; receiving_medium; measured_quantity; measurement_unit; actual_activity; activity_unit; actual_burn; burn_unit; factor; factor_unit; factor_basis; factor_source; gas_volume; volume_unit; pressure; pressure_unit; temperature; temperature_unit; gas_composition; composition_basis; composition_source; molecular_conversion; conversion_unit; conversion_source; release_fraction; fate_basis; fate_source; method; method_version; provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 采用实际物种介质测量或具有全部操作数单位来源兼容实际来源状态时间方法。继承咖啡包装释放与直接作业化学分开，库存差额品质衰减不是排放法，完整因子不再乘组成去向。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kg已识别物种及实际操作数单位 | 每实际测量模型来源区间 | 实际关联服务库存报表区间 | 实际来源受纳介质 | per reference flow | 完整实测模型来源因子组成去向证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | 全部清单 | 先按事件再兼容全部使用方驱动归属实际量，保留拒收未完成闲置负担并仅除正验收N一次。 | cp_consignment; cp_energy; cp_supplies; cp_assets; cp_providers; cp_freight; cp_fates; cp_releases | 每参考实体服务清单 |  |
| stock_balance | 商品 | 相同状态包数：期初+外部收货+买方退回-期末-实物发运-供方退回-可用其他出口-实际废弃-净取样移除=未知差额，配对内部移动。另行核对湿豆净皮重水分状态实际不确定性，不强迫咖啡水气等差额或干物质。 | cp_stock | 审计库存实际组分状态去向 |  |
| commodity_demand | 商品接口 | 在实际烘焙密封原交接以原单位状态有证据换算，核对货批归属验收需求加分配有证据废弃状态变化需求与扣期末可用出口退回后的实际来源量。所需关联需求及已有同一基线损失阶段覆盖在服务外产生一次新增调整，不用通用得率乘数损失质量气体因子或重复处理。 | cp_stock; cp_consignment | 服务外明确完整来源交接需求调整 |  |
| species_release | coffee_species; other_releases; other_releases_co2_fossil_air; other_releases_methane_fossil_air; other_releases_nitrous_oxide_air | 用实际已识别物种介质实测或兼容活动燃烧来源特定因子。需气体体积到物种换算时保留实际压力温度组成分子换算单位来源，完整物种因子不再重复乘组成去向，不把差额变CO2香气水释放。 | cp_releases; cp_stock; cp_energy | 每参考实际有证据释放 |  |
| cargo_transport | freight | 实际kg*km=实测纳入货载换kg乘真实距离换km，保留不重叠共享路段归属服务商覆盖，其他原生单位需匹配服务数据。 | cp_freight | 每参考实际原生货运量 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| actual_identity | 全部行 | 最终交换前确认实际品项服务商物种状态接收及兼容支持，数量支持不是批发流身份。 | 实际详情身份支持前景证明 |
| supplier_state | 咖啡包装审计 | 保留实际整豆烘焙放行封口阀日期水分基准方法及适用买方品质条件证据，不设家庭鲜度或逐包分析默认。 | cp_consignment; cp_stock; nca-coffee-storage |
| coverage | 全部义务 | 全部使用方全寿命资产服务商范围匹配一次，原烘焙密封商品阶段归属损失覆盖在外明确，未知气体库存去向披露。 | 覆盖矩阵及独立原生测量 |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | coffee_wholesale | 电表记录对应哪个供电点、交直流状态、电压和供应方数据集？核对已列交流电卡与其他有证据的供电，不得将交流电 UUID 用于其他能源。 记录实际照明电动装卸及业务辅助计量范围。烘焙研磨冲煮电力在本服务外，常温存放不能证明有专用冷却干预。 范围证据要求：需实际表差、区间、全部使用方及完成货批归属；独立核对须仓库载荷范围匹配，不设通用咖啡每kg电耗。 计量证据：协议`cp_energy`；原记录口径 Energy / kWh。原数量约束“每参考流实际可归属实际仓库及装卸电力；cp_energy。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`electricity_ac`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_energy`; 实际来源关联原生记录 |
| facility_water | coffee_wholesale | 供应记录是否证明为处理自来水，还是其他明确水质或水源？核实供水状态及交接门，不得用自来水卡替代其他水。 纳入实际服务清洁卫生供应，继承豆内水分及饮品制备不是此输入；实际分析样品有单独记录辅助事件。 范围证据要求：需实际计量领用用途原生体积及供方边界；购水直接取水豆水分和接收废水为不同数量。 计量证据：协议`cp_supplies`；原记录口径 Volume / m3。原数量约束“每参考流实际可归属实际购入卫生及设施用水；cp_supplies。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`facility_water_liquid_tap`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_supplies`; 实际来源关联原生记录 |
| outer_packaging | coffee_wholesale | 取得包装物料单或规格、材料或复合层身份及新增与继承包装的责任。按该记录逐项确定尚缺的套袋、封口、标签、捆扎带或支撑件身份；一体复合包装不得拆成可相加的材料交换。 仅采用实际新增且不开启厂封的服务承担外纸箱缠膜捆扎标签。继承袋阀标签为商品状态，周转托盘为寿命服务。 范围证据要求：需继承新增层级品项、实际面积数量质量及单件或面积换算来源；不每次批售制造全新咖啡初级包。 计量证据：协议`cp_supplies`；原记录口径 Mass / kg。原数量约束“每参考流实际可归属实际新增外层装卸保护及标签；cp_supplies。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`outer_packaging_pe_film`; `outer_packaging_paperboard_carton`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_supplies`; 实际来源关联原生记录 |
| operating_supplies | coffee_wholesale | 取得下述清洁或维护职责实际采购品号、配方或安全数据表、供应浓度、物态、用途及库存领用记录。逐项核实洗涤剂以外的实际材料；不得由本 PCR 预设药剂、滤材或剂量。 按配方原生单位展开实际清洁剂吸附材滤材润滑剂检测耗材；配料烘焙添加和新充包气体为排除作业。 范围证据要求：需品项浓度期初收货期末组成净皮重和实际废弃退回释放；安全表或施用品量本身不是物种排放。 计量证据：协议`cp_supplies`；原记录口径 Mass / kg。原数量约束“每参考流实际可归属实际仓库清洁维护用品；cp_supplies。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`operating_supplies_synthetic_detergent`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_supplies`; 实际来源关联原生记录 |
| fuel_supply | coffee_wholesale | 库存记录对应哪种燃料牌号、配方及供给门？核实已列柴油以外的实际燃料及原生单位；体积转质量前取得实际密度。 保留实际牌号原生库存供应，实测燃烧另记；雇用装卸运输可能已含燃料，须有唯一覆盖归属。 范围证据要求：需牌号原生库存收退期末和实际互斥燃烧未燃去向，适用密度温度换算来源；不假定购入即燃烧。 计量证据：协议`cp_supplies`；原记录口径 Volume / L。原数量约束“每参考流实际可归属实际装卸辅助燃料供应；cp_supplies。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`fuel_supply_diesel_supply`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_supplies`; 实际来源关联原生记录 |
| provider_services | coffee_wholesale | 取得本记录中明列各职责的供应商合同或完成结果记录、原生计量物理单位及包含资源。确定各项服务结果身份；检验、清洁、装卸为不同服务，价格或小时不得改称件数。 以实际物理单位展开真实仓储装卸检验采样卫生维护业务辅助成果；继承供方证书不是另一次已执行检测。 范围证据要求：需完成成果原生数量及完整材料能源资产货运处理覆盖；发票金额毛利不能定义服务数量。 计量证据：协议`cp_providers`；原记录口径 Count / Item(s)。原数量约束“每参考流实际可归属实际合同物理批发辅助；cp_providers。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_providers`; 实际来源关联原生记录 |
| shared_assets | coffee_wholesale | 对本记录中明列的每种资产取得资产编号、配置及匹配的完整生命周期数据集。待补的是各资产或服务身份及全寿命全部使用者分母；仓库、叉车、托盘不能共用一条计数交换，也不能套用默认寿命。 在全部真实使用方期间记录完整仓库货架装卸测量信息设备及周转运输资产。 范围证据要求：需制造维护更换寿命终结、兼容已用寿命驱动单位、观察历史加有证据剩余退役不确定性敏感性；不设默认寿命或每程全新托盘。 计量证据：协议`cp_assets`；原记录口径 Count / Item(s)。原数量约束“每参考流实际可归属按寿命归属仓库及周转资产；cp_assets。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_assets`; 实际来源关联原生记录 |
| freight | coffee_wholesale | 对实际入库、出库、退运及废物运输段取得运输方式或车辆、温控服务、起终点、实际载荷和距离及供应方覆盖。方式或配置未明确前不能选择运输流；不同运输方式不得合成一条 kg*km 流。 计量含实际袋箱保护范围真实货载而非仅申报咖啡内容物；保留供方到货交接及空返退回路段不重复。 范围证据要求：需货载皮重范围实际路线载荷距离单位换算因子、全部使用方份额及服务商范围；不设包装百分比或按货批数推质量。 计量证据：协议`cp_freight`；原记录口径 Mass*distance / kg*km。原数量约束“每参考流实际可归属实际不重叠货载及服务货运；cp_freight。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_freight`; 实际来源关联原生记录 |
| environmental_water | coffee_wholesale | 按取水许可或计量记录确定实际取水口、地表水体或含水层、位置及水源实测量。地表水和地下水需不同源身份；购买水用量不能证明直接取水。 仅实际跨环境边界取水列此；继承咖啡吸湿为库存状态问题，不能证明公用取水。 范围证据要求：需实际水源地点用途计量区间并与购水分开；不由商品咖啡质量推固定水含量取水因子。 计量证据：协议`cp_fates`；原记录口径 Volume / m3。原数量约束“每参考流实际可归属实际直接分水源取水；cp_fates。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_fates`; 实际来源关联原生记录 |
| usable_supply_returns | coffee_wholesale | 将对外退料凭据匹配到唯一投入品号、状态、原生单位及接收方。采用净消耗投入时省略对应退料交换；商品退货及期末库存另作审计记录。 匹配实际独立品项状态外退接收；净消耗供应口径省略对应退回交换，继承咖啡包装豆仍为商品审计。 范围证据要求：需实际外部原生数量状态及匹配供应归属；期末库存内部周转不是外部转移，不自动抵避免生产。 计量证据：协议`cp_supplies`；原记录口径 Mass / kg。原数量约束“每参考流实际可归属实际匹配未用作业用品外退；cp_supplies。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`usable_supply_returns_detergent_return`; `usable_supply_returns_pe_film_return`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_supplies`; 实际来源关联原生记录 |
| discarded_coffee_packs | coffee_wholesale | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 采用送处理损坏拒收过期库存实际接收量状态；整包与豆包装组分为不可相加审计视图，本服务不列商品制造输入。 范围证据要求：需实际处置接收原生量净皮重组成、原供方交接当量及接收处理范围；短缺或日期本身不证明废弃。 计量证据：协议`cp_stock`；原记录口径 Mass / kg。原数量约束“每参考流实际可归属实际废弃咖啡包及内容物；cp_stock。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`discarded_coffee_packs_atomic_case`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_stock`; 实际来源关联原生记录 |
| other_wastes | coffee_wholesale | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 按接收状态展开真实清洁残余耗用品包覆及其他服务废物；排除整包废物已含豆初级包组分。 范围证据要求：需原生实测量换算组成及接收处理记录；收货清洁领用不是废物量，不自动回收抵扣。 计量证据：协议`cp_fates`；原记录口径 Mass / kg。原数量约束“每参考流实际可归属实际作业及新增外包装废物；cp_fates。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`other_wastes_paper_pack`; `other_wastes_metal_pack`; `other_wastes_plastic_pack`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_fates`; 实际来源关联原生记录 |
| contained_wastewater | coffee_wholesale | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 记录实际送接收处理液体，实际执行时才含分析样品辅助；豆水分不是购水或推定废水。 范围证据要求：需实际接收收集体积组成单位基准来源区间处理责任；不将进水等废水或重复直接排口。 计量证据：协议`cp_fates`；原记录口径 Volume / m3。原数量约束“每参考流实际可归属实际收集清洁或分析废水；cp_fates。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_fates`; 实际来源关联原生记录 |
| water_outfalls | coffee_wholesale | 确定直接排口、接收水体或土壤介质、实测水量及独立分析的污染物种。送处理的下水道转移不是该排口；接收介质未明时不能确定基本流。 记录实际直接受纳介质水质，容装送处理为Waste；排放体积及实测物种保留兼容不可相加基准。 范围证据要求：需实际排口地点体积组成状态证据，不用污水发票或清洁供水固定百分比。 计量证据：协议`cp_fates`；原记录口径 Volume / m3。原数量约束“每参考流实际可归属实际直接环境排水口；cp_fates。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_fates`; 实际来源关联原生记录 |
| coffee_species | coffee_wholesale | 按排放或采样记录确定各实测排放的来源事件、化学物或粒径身份、来源属性及接收介质。物种、粒径或介质不明须保留具体证据缺口；化学品总用量或库存损失不能提供这些身份。 实际咖啡顶空包装气体或水释放为条件角色，需实测物种介质或适用来源状态方法；烘焙排放在上游，未知豆质量变化不是CO2挥发香气水蒸气或其他物种。 范围证据要求：需实际化学组成来源受纳介质区间、兼容活动因子或气体体积压力温度换算及不确定性；库存差额香气衰减不能量化物种。 计量证据：协议`cp_releases`；原记录口径 Mass / kg。原数量约束“每参考流实际可归属继承咖啡或包装实际有证据物种释放；cp_releases。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_releases`; 实际来源关联原生记录 |
| other_releases | coffee_wholesale | 按排放或采样记录确定各实测排放的来源事件、化学物或粒径身份、来源属性及接收介质。物种、粒径或介质不明须保留具体证据缺口；化学品总用量或库存损失不能提供这些身份。 将实际燃烧清洁维护物种介质与咖啡来源释放及服务商已含上游排放分开。 范围证据要求：需实测物种或实际燃烧活动及兼容完整因子，所需组成去向仅一次；施用品金额危险分类不是排放质量。 计量证据：协议`cp_releases`；原记录口径 Mass / kg。原数量约束“每参考流实际可归属实际装卸燃烧维护物种；cp_releases。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`other_releases_co2_fossil_air`; `other_releases_methane_fossil_air`; `other_releases_nitrous_oxide_air`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_releases`; 实际来源关联原生记录 |


## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| commercial_gate | accepted_service | 核实实际唯一正企业间所有权转售验收及整豆烘焙封口日期净重水分时间限定，不用订单包kg等价。 |  |
| route_state | coffee_wholesale | 检查普通常温服务及真实品质封口拒收路径，不默加开包重包烘焙研磨家庭冷冻。 | nca-coffee-storage |
| stock_source | 商品 | 核对全部货批期间库存去向样品状态及完整烘焙密封原交接数量换算基线损失接口，不以差额推物种或称仅绿豆为完整交接。 |  |
| allocation_period | 全部资源 | 要求全部使用方事件期间及完整资产寿命观察有证据剩余兼容驱动和一次按N视图，失败未完成保留负担，直接服务商不重复。 |  |
| physical_fates | 全部实际交换 | 核实原生量换算组成接收处理覆盖，净消耗省略匹配退回；包装组分水物种视图不可相加，不自动避免抵扣。 |  |
| validate_concrete_identity_decisions | all inventory rows | 将每项实际身份核实事项落实到实物明确的流卡和原生数量，或提供不适用证据。证据检查点 ID 不是交换。发生、物种、状态、接收方或服务配置缺失时阻断最终数据完成，不默认零。按规定保持整体与组分、总量投入与对应退料的排他关系。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 实际身份完整性审核后作为secondary_dataset；background_dataset |
| downstream_use | 单独关联完整原烘焙密封商品及归属需求损失接口的实体咖啡批发附加 |
| allowed_use | 限定匹配实际常温厂家密封烘焙整豆自营验收货批 |
| excluded_use | 独立咖啡足迹；生绿研磨冲煮速溶；加工重包；家庭储存建议；零售代理纯仓储 |
| required_metadata | 实际品项配豆烘焙日期封口阀净皮重水分条件时间验收及货批商人地点期间；供方交接阶段归属量基线损失归属；服务商资产货运处理范围 |
| required_quality_disclosure | 实际身份支持缺口测量水分日期品质不确定性、来源交接未知库存气体去向限制、全部使用方寿命证据及缺独立范围数据 |
| update_trigger | 咖啡形式烘焙包装交接品质日期状态、实际加工专门保鲜、库存损失覆盖、服务商资产测量物种方法变化 |


## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-coffee-wholesale | official_guidance | UNSD CPC3 explanatory notes (30 June 2025), printed page301,61027/class2391. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅分类支持所选烘焙整豆批发为咖啡茶批发内较窄服务。 |
| nca-coffee-storage | official_guidance | National Coffee Association USA, Storage and shelf life, public consumer guidance. https://www.aboutcoffee.org/beans/storage-and-shelf-life/ | 仅包装条件水分气味品质定性背景；消费者开包冷冻数量鲜度时窗不是批发要求或定量因子。 |
