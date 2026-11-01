---
pcr_id: pcr.own-account-wholesale-of-wet-salted-bovine-hides
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 湿盐腌牛原皮自营批发服务

## 1. 范围与适用性

本 PCR 覆盖自营购入已湿盐腌但未鞣制的牛类原皮，在声明库房接收检查，通过有记录的状态监测、库存轮转、已运行的通风及容纳式排液维持既有保藏状态，整理商业批次并向企业客户完成转售的物理服务。本项为分销服务附加项，不是第二份原皮生产数据集。水分、内含盐、可分离散盐与游离卤水，使总重量不足以独立描述商品。

排除养殖、屠宰剥皮、初始保藏、主动重新盐腌或浸卤、浸水、去肉、生产性修边、鞣制与皮革制造；排除干皮、非牛类原皮、已鞣皮革、零售、仅收费代理及不发生商品买入转售的独立仓储。如果实际条件要求新保藏或其他改变产品的作业，须在最终定稿前审查其有界工序、投入及出口，不得悄悄排除该活动或视作普通存放。FAO2009 与 JRC2013 区分已保藏状态的接收保存及加工；本项不从其套用盐腌配方或默认保存期限。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.own-account-wholesale-of-wet-salted-bovine-hides |
| classification_refs | CPC 3.0:61015；narrower：已湿盐腌牛原皮的自营库房批发服务 |
| covered_products | 已经保藏的湿盐腌牛原皮的企业买方验收物理批发批次服务 |
| excluded_products | 原皮商品生产、保藏与鞣制；干皮、其他动物皮或皮革；收费代理；纯所有权转移；仅仓储服务 |
| representative_product | 一个牛类类型、保藏状态、张数等级、兼容湿质量、盐水分基准及责任交付点明确的已完成企业客户批次 |
| production_route | 所有权与收货检查 -> 原皮状态检查和实际库房条件保存 -> 发货转售验收；追踪真实渗漏、退回及不合格品 |
| market_state | 服务在有记录的买方验收处完成；原皮仍为实际声明状态的已保藏未鞣商品 |


## 3. 参考流

| Field | Value |
| --- | --- |
| What | 已完成的湿盐腌牛原皮自营批发批次服务 |
| How much | 1 Item(s)，即一个独立完成并验收的商业批次；没有固定皮张数、千克、平方米或利润等价 |
| How well | 买方验收实际种类类型、既有保藏状态、等级缺陷、物理数量、盐水分及声明的库房交付条件；不保证下游皮革得率 |
| How long or cycle | 实际入库保存发货至验收期间，加上归属的清洁待机、资产寿命期间与库存截止 |
| reference_flow_link | `accepted_trade` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 已完成的湿盐腌牛原皮自营批发批次服务 |
| reference_flow_property | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | 数量单位 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | bovine_species; already_wet_salted_state; upstream_curing_gate; actual_ownership_and_business_buyer; unique_consignment_id; hide_count_and_grade; as_received_and_drained_net_mass; free_brine_and_salt_basis; moisture_and_incorporated_salt_basis; warehouse_condition_and_duration; inspection_and_buyer_acceptance_gate; actual_transport_and_treatment_responsibility; stock_period_and_return_reject_fates; original_gate_loss_adjustment_link |

采用 N>0，即记录取消与冲销后的唯一已验收合同批次数。失败发运、未验收原皮或内部托盘移动不产生验收服务单位。相应实际资源仍归属适当的验收批次集合，或明确披露的未完成期间责任；不得仅因未完成期间 N 为零就删除负担。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| service_count | 参考产品 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 一次唯一实际完成的买方验收为一个服务；无合同交付门槛证据，不得把托盘、皮张、发票行或吨数重定义为批次。 |
| hide_state | 商品与 discarded_hides; discarded_hides_atomic_case | 数量与质量 | hides; kg | 记录总量、包装皮重、可分离游离卤水散盐和沥液后原皮净质量，并注明实际沥液方法时间温度。内含水盐须保留明确分析基准；不得认定全部干物质为胶原或水损失为皮损失。 |
| native_unit | 所有实际供应与服务 | 实际原生属性 | 实际原生单位 | 保留供应商服务商单位；数量、面积、长度、体积、时间变体须对应具体交换。数量质量面积密度换算需实际兼容测量来源，且仅为不可重复叠加视图。 |
| fluid_state | contained_liquids; cleanup_residues; actual_releases; actual_releases_co2_fossil_air; actual_releases_methane_fossil_air; actual_releases_nitrous_oxide_air | 体积与质量 | m3; kg | 区分容纳态盐卤清洁液、游离盐、有机固体与实际直接物质释放。采用实测密度温度及组成去向基准，不假定水盐胶原差额。 |


## 5. 系统边界

前景始于有记录的已保藏原皮进入批发商所有权，止于声明的企业客户验收交付。一个节点负责有界保存干预：可用已保藏入库状态、实际维持状态及检查后的客户门槛。本较窄路径要求实际运行并监测的通风保存、容纳式排液和受检库存轮转；被动标签或未监控堆存不足以证明该干预。额外冷却仅在实际运行时计入，不能从湿盐腌标签推断。清洁接触材料、盐液容纳、不合格检查及所有真实服务公共投入均纳入。

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 在已识别上游保藏商品交付点已湿盐腌、未鞣制的牛原皮，具有实际等级张数、状态特定数量及盐水分信息 |
| starting_condition_role | 商品库存流经审计，不是在本服务附加项中耗用的原皮上游生产交换 |
| product_classification_scope | CPC61015 原皮皮革批发中的湿盐腌牛原皮物理自营批次服务子集 |
| recursive_input_rule | 仅可使用独立合同且资源不重叠的真实上游服务；不得为自身批次递归采购相同服务 |
| upstream_dataset_requirement | 实际服务物资、资产、服务商和接收处理须单位兼容且范围完整；商品生产与原交付点损失负担另行链接 |
| disclosure | 所有权买方门槛；来源保藏状态；库房条件时间；张数状态特定质量；盐水分游离液基准；正数 N；期间；退回不合格损失调整；资源服务商运输责任 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| scope_addon | whole service | 本附加服务排除全部交易原皮上游生产，含损失部分的上游负担。全链完整前，须在链接商品链中分别定量计入原交付点损失商品调整与可售商品负担且各仅一次。本服务保留实际损失搬运处理及服务资源。 |  |
| scope_preserved | salted_hide_trade | 记录原皮前后状态、已运行通风与容纳式排液干预、状态监测库存轮转、实际保存环境、检查条件及验收门槛。贸易分级不是鞣制制造；实际新保藏浸水修边等变化须在最终数据前明确审查工序范围。 | fao-hides-value-2009; jrc-hide-reception-2013 |
| scope_outlets | actual inventory | 按不同来源接收方归属实际卤水滴液、散盐、损坏原皮、包材和清洁流。容纳态废物不是直接环境排放；真实取水排口与物质须按实际介质明确展开，不假定为零。 |  |
| scope_overlap | all responsibilities | 为自有设备、外部服务、运输、温控及接收处理记录仅一次归属，包括上游服务或商品数据集已含资源。覆盖不明则不能视为最终数据完整。 |  |


## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| salted_hide_trade | 湿盐腌原皮检查保存与自营贸易 | required | 实际买入转售所有权和物理库房责任 | 单一保鲜责任：从已盐腌可用原皮受检入库至维持状态的企业客户验收；收发货清洁采用批次模式，共享库房按连续期间核算 | `accepted_trade` |

保留最少且有独立意义的节点。该责任内的批次检查、商业分级及包装不意味着新增制造节点。实际不合格原皮从本节点进入有记录的退回、降级、回收或处置路径；重复搬运保留资源，不产生第二次验收服务。变量卡须按实际原生单位、材料、服务商、物质与接收方展开。真实运行的制冷系统须记录工质供应、回收、废物及大气组分；实际环境水源或排口须专门交换，不得默默遗漏。

### 过程：湿盐腌原皮检查保存与自营贸易 (`salted_hide_trade`)

#### 输入

##### 产品流

###### 实际使用点交流电 (`electricity_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Energy / kWh
- 数量规则：分配的实测电量 / N；cp_utilities。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

范围证据需求：应确认设备、库房条件、计量期间与包括待机清洁的全部消费方分配；不默认制冷或仓储能耗基准。

###### 自营场内搬运车辆柴油 (`liquid_diesel`)

仅适用于责任范围内实际柴油搬运车辆；其他实际燃料按各自属性单位展开。购入燃料与实际燃烧分别记录。

固定身份表示以Mass/kg为参考基准的通用供应柴油；实际牌号、配方、供应方及热值仍须记录，不能预设。保留原生升记录；最终换算为kg须有实际相容密度、温度状态、质量体积比单位及来源，目录不提供默认密度。缺密度时体积转质量仍不完整，不能填零或假定值。供应柴油不等于燃烧柴油、运输服务或直接排放。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Volume / L
- 数量规则：分配的柴油供应量 / N；cp_fuel。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fuel`

范围证据需求：需校准库存收货、实测使用或完整去向审计、发动机范围及实际燃烧因子基准；溢漏不算燃烧。

###### 实际液态处理自来水供给 (`cleaning_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Volume / m3
- 数量规则：实测分配的购入水量 / N；cp_water。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

范围证据需求：需按用途计量体积，并提供兼容的废水、持留及蒸发证据及换算温度密度；不能把全部液体出口等同该进水。

###### 实际独立记录的合成洗涤剂投入 (`hygiene_preparations_synthetic_detergent`)

仅适用于产品配方、供应状态及用途记录确认的实际合成表面活性洗涤剂。记录扣除包装皮重的材料净量，区分浓缩液与稀释水，整体配方与组分不得相加重复计入。肥皂、消毒剂、抹布、滤材等仍按各自实际身份记录，不预设清洁配方、剂量或发生。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位：Mass / kg
- 数量规则：分配的制剂供应量 / N；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据需求：需原生采购单位、组成与活性载体基准、实际稀释及实测换算；不得从历史指南假定消毒剂、浓度、化学去向或许可。

###### 实际独立记录的聚乙烯包装薄膜 (`packing_material_pe_film`)

仅适用于实际独立供应、供本服务新增包裹或衬垫使用的聚乙烯薄膜，须确认实际聚合物配方与薄膜净量。该身份为工厂门通用生产组合，仍须记录实际供给门、供应方及另负责任的交付负荷。不预设LDPE/HDPE牌号、再生比例、厚度或用量。PVC、PET、PP、多层复合材料、胶黏标签、填充包装及继承商品包装仍按余项独立身份处理；整体供应与组分不得重复计量，不预设发生。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass / kg
- 数量规则：分配的包材供应量 / N；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据需求：需实际包材身份、单位及库存退回记录；仅可作有证据的质量换算，质量视图不得重复相加。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已完成的湿盐腌牛原皮自营批发批次服务 (`accepted_trade`)

具有买入转售所有权、已保藏原皮状态检查及库房交付记录并获买方验收的物理批次服务；原皮商品本身不是本服务流。

- 选定流：已完成的湿盐腌牛原皮自营批发批次服务
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_trade`

范围证据需求：参考计数仅定义归一化，不等于皮张数、质量、面积、等级或商业利润；须记录实际买方门槛和批次组成。

##### 废物流

###### 废弃湿盐渍牛皮 (`discarded_hides_atomic_case`)

仅在实际独立记录确认“废弃湿盐渍牛皮”时适用。本卡只覆盖该命名实物状态及自身实际净量、保留组成和接收门。其他部件、碎片、游离液、独立包装及清理载体仍属于`discarded_hides`中的强制完成记录；不得移动边界、预设事件、将库存差当废弃，或把仍保留在整体流内的组分另算出口。实际混收流须匹配自身准确身份。原有原生单位数量协议只用于本独占具体情形，其他实际去向分别协调。

- 选定流：废弃湿盐渍牛皮
- 流属性/单位：Mass / kg
- 数量规则：实测分配的废弃原皮质量 / N；cp_trade。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_trade`

范围证据需求：需皮张数、兼容的接收或沥液湿质量、盐水与游离卤水证据及原供应门槛链接；不得从湿废物千克推断胶原质量或原鲜皮负担。

###### 实际单独收集的纸类包装废物 (`packing_waste_paper_pack`)

仅适用于本节点实际独立废弃、单独收集的纸类包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：包装废弃物，纸类 `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- 流属性/单位：Mass / kg
- 数量规则：实测废包材量 / N；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

范围证据需求：需材料、污染湿状态、数量及接收处理覆盖；收集不能证明回收利用或避免生产。


###### 实际单独收集的金属包装废物 (`packing_waste_metal_pack`)

仅适用于本节点实际独立废弃、单独收集的金属包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：金属包装废物 `cdda6013-c0c5-4c72-990a-f5668fe71069`
- 流属性/单位：Mass / kg
- 数量规则：实测废包材量 / N；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

范围证据需求：需材料、污染湿状态、数量及接收处理覆盖；收集不能证明回收利用或避免生产。


###### 实际单独收集的塑料包装废物 (`packing_waste_plastic_pack`)

仅适用于实际独立废弃、单独收集的空塑料包装，保留实际组成、含水状态及接收方。含残留商品的混合包装、污染混合流、设备内保温泡沫、一次性抹布及复合包装不使用本分支；整体混合流中的组分仅作不可相加审计，运输处理责任计入一次。不预设排空、回收、发生或数量。

- 选定流：塑料包装废物 `919351c4-3e25-4092-9934-73ecec021a3b`
- 流属性/单位：Mass / kg
- 数量规则：实测废包材量 / N；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

范围证据需求：需材料、污染湿状态、数量及接收处理覆盖；收集不能证明回收利用或避免生产。

##### 基本流

###### 实际有独立证据的向空气排放化石二氧化碳 (`actual_releases_co2_fossil_air`)

仅在实际证据确认化石来源、二氧化碳物种和向空气直接释放时适用。保留报告的碳或CO2基准，碳转CO2须独立有证据的化学计量，不预设系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实测或有依据实际活动核算的物质释放量 / N；cp_releases。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_releases`

范围证据需求：需实际释放或兼容的物种因子、组成和去向以及单位、基准、来源、不确定性；未知库存或原皮质量差额不得自动当作气体或水体释放。


###### 实际有独立证据的向空气排放化石甲烷 (`actual_releases_methane_fossil_air`)

仅在实际证据确认化石来源、甲烷物种和向空气直接释放时适用。生物源或来源未知甲烷仍在余项要求中，不得改标化石源；不预设泄漏发生、气体比例、数量或排放系数。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实测或有依据实际活动核算的物质释放量 / N；cp_releases。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_releases`

范围证据需求：需实际释放或兼容的物种因子、组成和去向以及单位、基准、来源、不确定性；未知库存或原皮质量差额不得自动当作气体或水体释放。


###### 实际有独立证据的向空气排放氧化亚氮 (`actual_releases_nitrous_oxide_air`)

仅在实际证据确认氧化亚氮物种及向空气直接释放时适用。原生数量为N2O质量，不是氮质量或氮气质量，不预设排放系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实测或有依据实际活动核算的物质释放量 / N；cp_releases。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_releases`

范围证据需求：需实际释放或兼容的物种因子、组成和去向以及单位、基准、来源、不确定性；未知库存或原皮质量差额不得自动当作气体或水体释放。

## 7. 分配与联产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| alloc_count | all inventory | 通过因果期间和批次驱动量向实际验收集合 N 分配真实完整服务负担；保留失败、不合格、未完成及清洁责任并定义跨期结转，不得除零或删除活动。金额利润不能转成物理服务。 |  |
| alloc_goods | merchandise audit | 按期初、净收货、买方退回、期末、销售、退供应方、降级及废弃核对皮张数和状态兼容质量。水盐变化不自动等于原皮损失；胶原或有机原皮当量须有自身实际定义和分析，不能仅由干质量差额推断。原交付点损失数量、换算来源、数据集、边界责任与集成证据在本服务之外追踪。 |  |
| alloc_stock | service supplies and usable_supply_return | 逐项原生物资采用 S = 归属期初 + 外部净收货 - 包含回收结存的期末；适用时以实测毛重皮重取得净收货。内部领用不另算采购。选择总供应输入 S 并单独记录匹配可用外退输出；或选择仅耗用输入 S 减匹配可用外退，并省去该匹配外退交换，不再抵扣，最后归一化一次。期末库存不是外退；未退废物溢漏保留上游供应负担。 |  |
| alloc_assets | warehouse_assets | 实际资产须含完整制造、维护、更换与寿命终结。本集合资产当量 = 本集合兼容驱动量 / 全寿命驱动量，覆盖全部用户期间，再除 N 一次。采用实测寿命或已发生历史加有依据的剩余使用及终止，并记录驱动单位来源敏感性更新。完整寿命的单位驱动服务不与相同资产当量视图相加。 |  |
| alloc_period | shared own/provider resources | 各报告、清洁、收货及发货期间按兼容单位和证据，用集合驱动量 / 全消费方驱动量分配实际完整资源；核对待机换批，避免重叠批次重复分配。库存与寿命责任跨期仅结转一次。 |  |
| alloc_reject | rejects and outlets | 可售降级与退供货方原皮保留商品审计属性；只有实际废弃并有接收证据时才按废物记录。卤水散盐接触包材流分开，采用真实处置回收负担，不自动作联产品或避免材料生产抵扣。 |  |



| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| source_scope_normalization | 非交换商品与服务组合 | 原始外部商品库存、来源归属损失及缺阶段新增上游集成量均保留有证据的实际原始作用域。逐量识别一个实际货批、目标服务集合或已经每参考流，并记录来源目标作用域编号与数量口径。来源集合全部出口分母仅把原始量归属该目标范围，不自动等于目标验收服务N。仅与1 Item(s)服务组合时，以同目标范围原始归属量除正数唯一验收source_same_scope_N，记录验收编号时间冲销证据，取得每参考量。有证单货批source_same_scope_N=1，已每参考量不再除。保留实际原始集成量来源链接，不缩小真实上游补阶段量，不用无关N除整个来源集合；N0责任披露不除。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_trade | salted_hide_trade | 批发验收、商品状态与损失链接 | 所有权收货检查发货及供应批次记录 | site_id; node_id; period_id; consignment_id; source_lot_id; supplier_id; buyer_id; purchase_resale_evidence; upstream_curing_gate; intake_time; acceptance_time; reversal_id; bovine_species; hide_count; grade; defects; as_received_gross_mass; package_tare; separable_free_brine_mass; separable_loose_salt_mass; drained_net_hide_mass; mass_unit; draining_method; draining_duration; temperature; temperature_unit; moisture_fraction; moisture_basis; moisture_source; incorporated_salt_fraction; salt_basis; salt_source; opening_count; receipts_count; buyer_return_count; closing_count; accepted_sale_count; supplier_return_count; downgrade_count; discarded_count; discarded_mass; commodity_dataset_id; upstream_reference_gate; original_gate_loss_quantity; original_gate_loss_unit; original_gate_loss_state; conversion_method; conversion_factor; conversion_basis; conversion_source; loss_burden_owner; already_included_scope; integration_result; receiver_id; N; source_assignment_scope_id; source_assignment_scope_kind; source_quantity_basis; source_target_scope_id; source_same_scope_N; source_same_scope_N_unit; source_same_scope_N_basis; source_same_scope_N_method; source_same_scope_N_state; source_same_scope_N_sample_time; source_same_scope_N_source; source_same_scope_acceptance_ids; source_already_per_reference; raw_integration_scope_link; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | 检查已盐腌收货状态；统计唯一买方验收批次，核对张数与兼容状态质量，追踪实际不合格品退回及独立商品链中定量原交付点损失调整。  原始外部商品库存、来源归属损失及缺阶段新增上游集成量均保留有证据的实际原始作用域。逐量识别一个实际货批、目标服务集合或已经每参考流，并记录来源目标作用域编号与数量口径。来源集合全部出口分母仅把原始量归属该目标范围，不自动等于目标验收服务N。仅与1 Item(s)服务组合时，以同目标范围原始归属量除正数唯一验收source_same_scope_N，记录验收编号时间冲销证据，取得每参考量。有证单货批source_same_scope_N=1，已每参考量不再除。保留实际原始集成量来源链接，不缩小真实上游补阶段量，不用无关N除整个来源集合；N0责任披露不除。 只归属独立确认的实物情形，其他实际去向按来源分别保留；每个原生记录只属于一个交换，任何总量仅作不可相加审计。 | Item(s); hides; kg | 每次收货检查发货退回或废弃 | 实际入库至验收及报告截止 | 全部实际收货保存交付点 | 每参考流 | 所有权与企业验收、校准称重、状态检查、盐水分析及损失链接集成证明 |
| cp_utilities | salted_hide_trade | 实际用电作业 | 电表设备占用记录 | site_id; node_id; period_id; consignment_id; equipment_id; room_id; meter_id; start_reading; end_reading; energy_unit; actual_operation; temperature; temperature_unit; cohort_driver; all_consumers_driver; driver_unit; attribution_share; driver_evidence; provider_overlap; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 测量实际用电并按兼容期间向全部消费集合分配，含待机清洁；保留外部完整服务的重叠责任核对。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kWh | 每个计量作业期间 | 收货保存发货及归属待机清洁 | 实际库房用电范围 | 每参考流 | 计量校准、设备范围及全部消费方核对 |
| cp_fuel | salted_hide_trade | 柴油供应及实际燃烧 | 燃料库存车辆记录 | site_id; node_id; period_id; consignment_id; equipment_id; fuel_id; native_unit; opening_stock; gross_receipts; receipt_tare; net_receipts; closing_including_recovered_stock; outward_usable_return; nonburned_waste; uncontained_loss; measured_burn; burn_method; all_fates_complete; uncertainty; cohort_driver; all_consumers_driver; driver_unit; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 记录原生库存及收货净量；区分实际燃烧、期末库存、可用外退、未燃废物及真实未容纳损失。去向审计不完整须调查，不推断燃烧。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 柴油升转kg须有实际相容密度、温度状态、质量体积比单位及来源，不预设换算。 | L | 每次燃料事件与截止 | 实际运行车辆期间 | 仅纳入的柴油车辆 | 每参考流 | 罐体收货校准、净量及完整无重叠去向 |
| cp_water | salted_hide_trade | 清洁水及真实盐水性出口 | 水表收集采样接收记录 | site_id; node_id; period_id; consignment_id; event_id; fluid_id; fluid_origin; purchased_cleaning_water; volume_unit; collected_drips; collected_cleaning_waste; retained_liquid; direct_intake; direct_outfall; receiving_medium; measured_evaporation; density; density_unit; temperature; temperature_unit; salt_or_chloride_fraction; composition_basis; composition_source; organic_state; receiver_id; treatment_gate; provider_overlap; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 购入清洁水与已保藏原皮流出的水盐分别测量；记录已收集盐液、化学组成与接收方。直接取排水和真实物种须独立交换，不用差额估计水。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | m3; kg for evidenced mass view | 每次用水滴液收集清洁或交接 | 实际库房清洁期间 | 水供应至实际容纳处理边界 | 每参考流 | 水表、收集质量体积、组成采样来源与接收证据 |
| cp_supplies | salted_hide_trade | 包材清洁供应与可用外退 | 实际原生品号库存收退记录 | site_id; node_id; period_id; consignment_id; sku_id; material; formulation; native_unit; opening; gross_receipts; receipt_tare; net_receipts; closing_including_recovered_stock; outward_usable_return; waste; native_quantity; measured_mass; unit_mass; density; density_unit; temperature; temperature_unit; active_fraction; composition_basis; composition_source; dilution; conversion_factor; conversion_basis; conversion_source; representation; receiver_id; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 收集实际原生品号库存收货及匹配未用外退；保留上游交换单位并证明质量视图，不重复叠加原生和质量数量。不隐藏新原皮保藏处理。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kg; actual SKU native unit | 每次供应使用退回及截止 | 全部归属搬运包装清洁期间 | 实际服务耗材 | 每参考流 | 供应商品号单位、校准换算、匹配退回及库存范围 |
| cp_providers | salted_hide_trade | 完整外部服务作业 | 合同完成及原生范围记录 | site_id; node_id; period_id; consignment_id; provider_id; job_id; contract_id; actual_completed_gate; physical_quantity; native_unit; scope_start; scope_end; included_resources; omitted_resources; treatment_scope; overlap_owner; cohort_driver; all_consumers_driver; driver_unit; N | 核实每次完整计数作业的实际完成及全部资源；其他计量方式须用实际原生交换及支持，不把金额工时转为次数。 | Item(s); actual provider native unit | 每次已完成作业 | 相关合同履行期间 | 明确服务商责任 | 每参考流 | 物理完成、合同范围、完整寿命原生支持与重叠账 |
| cp_assets | salted_hide_trade | 共享全寿命库房资源 | 资产生命周期及实际兼容驱动记录 | site_id; node_id; period_id; consignment_id; asset_id; asset_native_unit; manufacture_dataset; maintenance_scope; replacement_events; end_of_life_scope; driver_id; cohort_driver; cohort_driver_unit; lifetime_driver; lifetime_driver_unit; observed_history_driver; observed_history_driver_unit; evidenced_remaining_driver; evidenced_remaining_driver_unit; remainder_source; all_consumers; termination_state; uncertainty; sensitivity_evidence; update_evidence; provider_overlap; N | 取得完整制造维护更换与寿命终结；按全部消费方期间的兼容集合全寿命驱动量分配。采用真实寿命使用量或已发生历史加有证据的剩余使用与终止，不假定折旧寿命。 | Item(s); actual asset/service native unit | 每次购置维护更换及期间 | 已发生历史加有依据未来使用至终止 | 全部纳入共享资产 | 每参考流 | 资产支持清单、驱动单位、实测有据寿命、敏感性及服务不重复 |
| cp_transport | salted_hide_trade | 实际归属运输活动 | 载荷路线承运边界记录 | site_id; node_id; period_id; consignment_id; transfer_id; mode; load_gross; tare; net_load_mass; mass_unit; distance; distance_unit; mass_conversion_factor; mass_conversion_unit; mass_conversion_source; distance_conversion_factor; distance_conversion_unit; distance_conversion_source; temperature_control_scope; empty_return_scope; cohort_driver; all_consumers_driver; driver_unit; attribution_share; provider_dataset; overlap_owner; N; load_id; leg_id; gross_basis; tare_basis; tare_source; payload_includes_cargo_pack_brine; load_each_or_total; repeated_load_count; repeated_load_count_unit; repeated_load_count_source; that_record_share; that_record_share_basis; that_record_share_source; unique_leg_check | 匹配状态一致的真实载荷距离，使用有依据单位因子和共享载荷比例；声明的空返温控覆盖仅计一次。  实际包装货载保留商品水盐游离卤水及全部货包支撑；从车辆毛重取得时仅减车辆非货皮，不扣货包，记录毛皮基准。唯一载荷路段每次量乘真实重复数一次而总量不变，各实际包装kg乘km乘该记录完整全消费方份额置求和内，再正验收N一次，已归属不再分配。 | kg*km | 每个实际运输路段 | 明确归属的进出货资源废物路段 | 声明的运输责任边界 | 每参考流 | 载荷皮重、实际路线单位因子与完整承运覆盖 |
| cp_waste | salted_hide_trade | 包材及实际容纳态清洁残余 | 分类计量接收处理记录 | site_id; node_id; period_id; consignment_id; event_id; material; stream_id; quantity; native_unit; wet_state; salt_fraction; organic_fraction; absorbent_fraction; composition_basis; composition_source; receiver_id; receiving_treatment; treatment_dataset; transport_owner; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 称量实际分类包材散盐吸附物及化学废物，确定真实回收处置接收方；区分整液残余视图与物质排放。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kg; actual waste native unit | 每个收集流及交接 | 全部归属保存清洁期间 | 前景出口至真实处理范围 | 每参考流 | 称重组成基准与接收去向证据 |
| cp_releases | salted_hide_trade | 实际直接物质介质交换 | 测量或活动因子化学记录 | site_id; node_id; period_id; consignment_id; event_id; substance; receiving_medium; actual_release; release_unit; actual_activity; activity_unit; factor; factor_unit; factor_basis; factor_source; factor_complete; composition; composition_basis; composition_source; fate; fate_basis; fate_source; uncertainty; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 要求真实物质介质，采用实测释放或匹配物种因子及整液组成去向证据；完整物种因子不再乘组成去向，不从未解释差额推定排放。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kg | 每个实际释放来源事件 | 全部归属作业清洁期间 | 仅实际直接来源，不含外部已计排放 | 每参考流 | 测量或来源活动匹配及不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| per_consignment | 所有清单行 | 报告归属物理交换量 / N 一次；accepted_trade 为 1 Item(s)。N 统计唯一验收批次，不是皮张数。 | 归属数量; N; 关联协议 | 每参考流交换量 |  |
| allocate_period | electricity; external_jobs; freight; electricity_ac | 将实测完整期间数量乘集合兼容驱动量 / 全消费方驱动量；汇总不重叠期间后采用 per_consignment。 | 期间数量; 集合驱动量; 全消费方驱动量; 单位; 覆盖责任 | 归属物理数量 |  |
| asset_equivalent | warehouse_assets | 以集合兼容驱动量除实际完整寿命驱动量取得资产当量，再采用 per_consignment。只能采用资产当量或完整单位驱动服务其中一种口径。 | 完整资产生命周期; 集合驱动量; 寿命驱动量; 单位; 历史; 有据剩余; 终止; cp_assets | 归属资产当量 |  |
| supply_stock | liquid_diesel; hygiene_preparations; packing_material; usable_supply_return; hygiene_preparations_synthetic_detergent; packing_material_pe_film | S = 归属期初 + 外部净收货 - 包含回收结存的期末。采用总供应输入 S 并单独记录匹配未用外退输出；或采用仅耗用输入 S 减匹配外退，并省去该匹配外退交换，不再抵扣。未燃废物溢漏与实际燃烧为独立去向。 | 期初; 毛收货; 收货皮重; 净收货; 期末; 可用外退; 选定口径; 燃烧; cp_fuel; cp_supplies | 一致上游供应及不可叠加的可用退回视图 |  |
| hide_loss_link | discarded_hides; discarded_hides_atomic_case | 通过批次分析的盐水分状态与有据换算，将实际废弃原皮数量对应到原商品参考门槛；在独立商品链定量计入本项排除的上游损失负担，记录责任及仅一次集成证明，不用通用湿皮鲜皮或胶原换算。 | 来源批次; 上游门槛数据集; 实际张数兼容质量; 盐水分游离卤水基准; 换算数量单位基准来源; 损失责任已含范围; 集成结果; cp_trade | 独立定量的原交付点商品损失调整 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| q_identity | 所有交换 | 最终交换使用前核实具体 UUID、属性单位组及实际门槛；明确保留语义及支持缺口。 | 详情兼容及支持证据 |
| q_condition | cp_trade | 区分湿盐腌与鲜皮干皮已鞣或新保藏产品，记录检查及范围变动处置。 | 入库门槛状态及作业记录 |
| q_quantity | 商品和液体 | 使用实测张数、毛皮重沥液状态、组成基准及真实出口；不得把盐水废物千克等同胶原或鲜皮投入千克。 | 校准称重分析沥液及供应换算依据 |
| q_coverage | 所有资源 | 自有外部原生单位、全寿命资产及实际废物环境范围完整且仅一次；调查缺记录和差额。 | 资源期间接收寿命核对 |
| q_integration | 完整商品链 | 原交付点可售损失商品负担与本服务分别链接，不重复资源或遗漏损失；单独服务不是完整原皮足迹。 | 定量集成记录与范围责任 |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | salted_hide_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_utilities`识别`electricity`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_utilities`; 实际来源关联原生记录 |
| cleaning_water | salted_hide_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_water`识别`cleaning_water`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_water`; 实际来源关联原生记录 |
| hygiene_preparations | salted_hide_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`hygiene_preparations`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| packing_material | salted_hide_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`packing_material`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| external_jobs | salted_hide_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_providers`识别`external_jobs`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_providers`; 实际来源关联原生记录 |
| warehouse_assets | salted_hide_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_assets`识别`warehouse_assets`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_assets`; 实际来源关联原生记录 |
| freight | salted_hide_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_transport`识别`freight`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_transport`; 实际来源关联原生记录 |
| usable_supply_return | salted_hide_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`usable_supply_return`内每项实际outputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| discarded_hides | salted_hide_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_trade`识别`discarded_hides`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。`discarded_hides_atomic_case`只覆盖自身独占实物状态，其他实际去向仍须完成。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_trade`; 实际来源关联原生记录 |
| contained_liquids | salted_hide_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_water`识别`contained_liquids`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_water`; 实际来源关联原生记录 |
| packing_waste | salted_hide_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_waste`识别`packing_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_waste`; 实际来源关联原生记录 |
| cleanup_residues | salted_hide_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_waste`识别`cleanup_residues`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_waste`; 实际来源关联原生记录 |
| actual_releases | salted_hide_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_releases`识别`actual_releases`内每项实际outputs/elementary物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_releases`; 实际来源关联原生记录 |


### 强制清单完成记录

以下为强制采集和展开定义，不是交换，也不是填零占位符。正文引用的集合或余项编号对应这些完成要求。最终前景数据集完成前，每个实际情形都须成为具自身证据的原子交换；第6节条件卡不预设发生。独立投入、资产全寿命、互斥供应运输结果、实际废物接收流及每个实际基本流物种介质均须保留，不能因未分配通用UUID而静默漏掉。独占实际情形须与原生总量协调，组分视图不可重复相加。

#### electricity

计量实际照明、通风、搬运及已运行的温控用电；外部完整作业已包含的同项电力不再重复计入。

本卡为独立身份分支`electricity_ac`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际牛原皮库房作业电力
- 流属性/单位：Energy / kWh
- 数量规则：分配的实测电量 / N；cp_utilities。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

范围证据需求：应确认设备、库房条件、计量期间与包括待机清洁的全部消费方分配；不默认制冷或仓储能耗基准。

#### cleaning_water

用水用于实际地面和接触设备清洁，不虚构洗皮或浸水工序；环境取水须另列来源明确的基本流输入。

本卡为独立身份分支`cleaning_water_liquid_tap`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际场地与设备清洁购入水
- 流属性/单位：Volume / m3
- 数量规则：实测分配的购入水量 / N；cp_water。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

范围证据需求：需按用途计量体积，并提供兼容的废水、持留及蒸发证据及换算温度密度；不能把全部液体出口等同该进水。

#### hygiene_preparations

按品号、配方及实际场地设备用途记录；向原皮另加防腐剂会改变声明路径，最终数据前须审查范围。

本卡为独立身份分支`hygiene_preparations_synthetic_detergent`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际供应的库房清洁制剂
- 流属性/单位：Mass / kg
- 数量规则：分配的制剂供应量 / N；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据需求：需原生采购单位、组成与活性载体基准、实际稀释及实测换算；不得从历史指南假定消毒剂、浓度、化学去向或许可。

#### packing_material

本批发作业实际使用的包裹、捆扎与衬材，和随商品携带的盐卤分开；按数量、面积或长度供应的材料须展开实际原生上游交换。

本卡为独立身份分支`packing_material_pe_film`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：按质量核算的原皮防护包材
- 流属性/单位：Mass / kg
- 数量规则：分配的包材供应量 / N；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据需求：需实际包材身份、单位及库存退回记录；仅可作有证据的质量换算，质量视图不得重复相加。

#### external_jobs

仅代表已物理完成、合同计数且已披露全部资源覆盖的服务；非计数的运输、处理、搬运或冷却合同须按原生单位展开。

- 身份采集要求：完整计数的第三方库房支持作业
- 流属性/单位：Count / Item(s)
- 数量规则：分配的已完成作业数量 / N；cp_providers。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_providers`

范围证据需求：需实际完成门槛、物理原生单位与资源处理边界；发票金额或工时不能证明一次完整作业。

#### warehouse_assets

建筑、容纳式排液设备、货架托盘、衡器与搬运设备的实际完整寿命负担分配给全部消费批次与期间。

- 身份采集要求：共享牛原皮库房资产的完整寿命当量
- 流属性/单位：Count / Item(s)
- 数量规则：分配的完整资产当量 / N；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`

范围证据需求：需制造、维护、更换及寿命终结，并有兼容的实测寿命驱动量或历史加有依据的剩余使用；不设固定折旧年限或寿命产量。

#### freight

纳入路段采用实际运输质量状态、路线和方式；商品供应方与承运服务可能已承担运输，须确定含空返和温控范围的唯一责任方。

- 身份采集要求：原皮及服务资源实际归属货运
- 流属性/单位：Mass * distance / kg*km
- 数量规则：分配的实际千克乘千米 / N；cp_transport。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_transport`

范围证据需求：需兼容的质量距离单位、换算因子来源、皮重载荷基准、分配驱动量比例与承运完整上游覆盖；不得假定额定载重即实际载荷。

#### usable_supply_return

实际未用服务物资外退须对应原供应与接收所有者；周转托盘循环和期末库存是不同账务事件。

- 身份采集要求：可用未耗用且按质量核算的物资退给外部
- 流属性/单位：Mass / kg
- 数量规则：实际分配的可用外退量 / N；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据需求：需对应原生身份、状态、数量并选择总供应含出口或仅耗用口径；不再抵扣，也不将期末库存视为退回。

#### discarded_hides

按实际状态与路径记录损坏、腐败或其他不合格废弃原皮；可售降级原皮或退供货方商品不自动成为废物。

- 身份采集要求：已核实接收交接处实际废弃牛原皮
- 流属性/单位：Mass / kg
- 数量规则：实测分配的废弃原皮质量 / N；cp_trade。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_trade`

范围证据需求：需皮张数、兼容的接收或沥液湿质量、盐水与游离卤水证据及原供应门槛链接；不得从湿废物千克推断胶原质量或原鲜皮负担。

#### contained_liquids

按实际组成与收集事件区分批发阶段滴液渗出液和购入清洁水，按接收处理展开；不得虚构浸水废液。

- 身份采集要求：送处理的已收集含盐滴液与实际清洁废水
- 流属性/单位：Volume / m3
- 数量规则：实际分配的收集水性废物量 / N；cp_water。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

范围证据需求：需实测体积质量、密度温度、氯盐与有机组成及接收门槛；直接排口须有实际介质的水与物种交换，不能以容纳态废物代替。

#### packing_waste

记录实际分类衬材、包裹和捆扎废物及已核实去向；可退用物资与商品盐不自动属于废包材。

本卡为独立身份分支`packing_waste_paper_pack`; `packing_waste_metal_pack`; `packing_waste_plastic_pack`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：已用污染或分类包材
- 流属性/单位：Mass / kg
- 数量规则：实测废包材量 / N；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

范围证据需求：需材料、污染湿状态、数量及接收处理覆盖；收集不能证明回收利用或避免生产。

#### cleanup_residues

按实际身份状态记录地面清扫物、散盐、吸附剂及污接触材料；按接收兼容性展开，包括实际制冷剂或化学废物。

- 身份采集要求：实际容纳态干式或吸附式库房清洁残余
- 流属性/单位：Mass / kg
- 数量规则：实测分配的容纳态残余量 / N；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

范围证据需求：需独立的水盐有机物吸附剂基准及实际处置回收记录；整份残余不是实测物质排放。

#### actual_releases

实际燃烧、粉尘、水土溢排、蒸发或制冷剂组分须按核实物质与介质展开；气味、盐度、化学需氧量或总卤水不能作为单一具体物种身份。

本卡为独立身份分支`actual_releases_co2_fossil_air`; `actual_releases_methane_fossil_air`; `actual_releases_nitrous_oxide_air`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：向实际接收介质释放的已识别物质
- 流属性/单位：Mass / kg
- 数量规则：实测或有依据实际活动核算的物质释放量 / N；cp_releases。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_releases`

范围证据需求：需实际释放或兼容的物种因子、组成和去向以及单位、基准、来源、不确定性；未知库存或原皮质量差额不得自动当作气体或水体释放。

## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_gate | accepted_trade | 须有企业买方买入转售、唯一正数验收集合及全部状态张数等级门槛限定；排除纯财务收费代理及取消输出。 |  |
| v_state | merchandise | 须明确湿盐腌状态、游离盐卤、内含盐水及实际环境期限；不作通用换算温度或保藏保证。实际新保藏加工超出声明路径时，最终定稿前须审查范围。 | fao-hides-value-2009; jrc-hide-reception-2013 |
| v_units | all inventory | 全部实际原生单位、换算、N 分母与属性支持须一致；数量不等质量面积，利润不等服务，不替用能源属性。 |  |
| v_fates | returned/rejected/liquid material | 证明真实来源、退回降级废弃回收及接收方，含未退损失处理。区分容纳态液体与真实介质物质释放；库存或沥液原皮差额均不能证明排放。 |  |
| v_assets | warehouse_assets and shared resources | 要求全寿命制造维护更换终结、兼容驱动及历史剩余终止来源；全消费方期间总量闭合，不重复外部服务与资产。 |  |
| v_chain | service and commodity system | 全部交易原皮上游生产在服务之外；全链完整前须有仅一次定量链接的原交付点损失调整与可售负担，并证明盐水状态差异。 |  |
| v_data | all concrete releases/providers | 实际物质介质、液体组成去向单位来源、服务物理完成门槛或重叠责任缺失时，最终包不完整；不得用猜测零值或相近 UUID 填补。 |  |


## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 确定具体交换身份及实际数量后可用作 secondary_dataset; background_dataset |
| downstream_use | 独立建模兼容商品链中的湿盐腌牛原皮物理自营批发附加服务 |
| allowed_use | 声明的企业客户买入转售、库房作业、状态等级张数质量及期间质量分层，披露限制 |
| excluded_use | 本身作为完整原皮皮革足迹；养殖屠宰保藏鞣制；鲜皮干皮非牛皮；零售收费代理；金额利润数据集 |
| required_metadata | 全部参考限定；上游保藏商品门槛；正数 N；商品盐水库存及损失链接；库房资源服务运输接收范围；资产完整寿命 |
| required_quality_disclosure | 未决流及支持、条件性实际展开、测量分析换算不确定性、范围需求、外部寿命期间范围与独立商品损失集成状态 |
| update_trigger | 保藏状态或实际作业、状态等级盐水基准、资产使用寿命、资源服务运输处理范围、损失换算或验收门槛变化 |


## 11. 数据来源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-wholesale-2025 | official_guidance | UNSD. CPC Version3.0 explanatory notes, division61; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅用于自营企业客户批发分类，不提供资源排放默认值。 |
| fao-hides-value-2009 | official_guidance | Leach,I.; Wilson,R.T. (2009). Higher value addition through hides and skins. FAO Diversification booklet8, preservation and marketing chapters; https://www.fao.org/4/i0523e/i0523e.pdf | 仅用于保藏状态、商户存储销售及状态数量问题；不作历史数值规定或财务物理因子。 |
| jrc-hide-reception-2013 | official_guidance | Black,M. et al. (2013). BAT Reference Document for the Tanning of Hides and Skins, EUR26130EN, sections2.1–2.2; https://eippcb.jrc.ec.europa.eu/sites/default/files/2019-11/TAN_Published_def.pdf | 用于接收分级保存与保藏浸水去肉的工序边界；按保藏状态选择接收态托盘保存条件。鞣厂背景不自动代表批发法律或最佳技术合规。 |
