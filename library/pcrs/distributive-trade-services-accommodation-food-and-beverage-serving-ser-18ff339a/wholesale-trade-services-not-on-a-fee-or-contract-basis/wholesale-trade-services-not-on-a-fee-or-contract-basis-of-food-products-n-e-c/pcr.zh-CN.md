---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-food-products-n-e-c
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 密封包装干制硬粒小麦粗粒粉意面自营批发服务

## 1. 范围与适用性

本PCR覆盖制造商完成成形干燥包装放行后，普通硬粒小麦粗粒粉干制意面的原封包装自营批发。商户接收核对真实产品SKU形状源批日期、净量包装水分状态，普通常温库存存放电动搬运后由真实商业买方验收。供方干燥及继承密封不证明商户新增保鲜介入。

排除原粮粗粒粉面粉制造、意面混合成形干燥、鲜蛋馅熟意面、面条古斯米成餐、水合烹煮再干燥、产品化学处理、零售再包装再密封、未审专用温控、代理零售独立仓储运输。外包排除操作仍实际存在，须另审范围。不采用消费者份量烹煮换算、通用保质期或食品安全保证。

全部商品意面继承包装制造负担及损失的上游均在服务外。完整链条前须独立成品干燥包装门槛系统，具有真实归属需求和相容损失调整一次。真实商户搬运清理及接收处理在服务中一次覆盖。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-food-products-n-e-c |
| classification_refs | CPC 3.0:61029; 密封普通干制硬粒小麦粗粒粉意面商户服务较窄子集 |
| covered_products | 制造商原封普通干制硬粒小麦粗粒粉意面常温自营批发 |
| excluded_products | 鲜蛋馅熟水合意面面条古斯米成餐；谷物面粉意面制造再干燥再包装；代理零售独立仓储 |
| representative_product | 真实供方放行普通干意面SKU形状源批密封包装至唯一验收商业批次 |
| production_route | 制造商干燥包装成品放行→商户接收库存包装检查→普通常温搬运存放→真实商业买方验收 |
| market_state | 真实干意面包装日期水分限定的已完成服务，不是制造输出或熟食份数 |


## 3. 参考流

| Field | Value |
| --- | --- |
| What | 已完成的密封干制硬粒小麦意面自营批发服务 |
| How much | 1 Item(s) |
| How well | 真实成品干密封状态、净质量声明水分基准、包装日期条件及买方标准限定验收服务 |
| How long or cycle | 真实制造放行商户接收存放发运验收时间及关联未完成群组，无标准仓储时长 |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 已完成的密封干制硬粒小麦意面自营批发批次 |
| reference_flow_property | 01846770-4cfe-4a25-8ad9-919d8d378345 |
| reference_unit_group | 5beb6eed-33a9-47b8-9ede-1dfe8f679159 |
| reference_unit | Item(s) |
| required_qualifiers | supplier_id; product_sku; pasta_shape; source_lot_id; finished_dried_packed_gate; plain_durum_semolina_state; sealed_pack_state; pack_count; pack_unit; net_pasta_mass; mass_unit; moisture_value; moisture_basis; moisture_source; inherited_pack_tare; actual_date_mark; date_type; merchant_id; buyer_gate; reporting_period; actual_storage_conditions |


## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| commercial_count | accepted_service | Count | Item(s) | N计唯一最终商业买方验收批次，不计包件托盘发票kg或份数。 |
| pasta_mass_basis | 商品审计 | Mass; Count | kg; Item(s) | 记录实测主包外包支撑皮重后的接收状态意面净质量及包装数量。水分湿基干基、方法来源时间在干物质换算前明确，分析视图不新增交换。 |
| native_supplies_outlets | 新供给废物 | native property | native unit | 需真实单位材料单件质量密度温度等原生换算来源，无标准包装配方比。 |
| physical_equivalence | 供方资产 | Count | Item(s) | 实际已定义实体完成服务包或完整整资产等价，匹配数据范围；其他原生单位适当展开。 |
| transport_native | freight | mass*distance | kg*km | 真实运输状态意面加包装支撑质量乘实际km及互斥份额，干物质不暗替载荷。 |
| species_native | direct_species | Mass | kg | 真实物种介质粒径身份和实测相容量或有据因子组成去向基准，不把捕集细料水分余差转排放。 |


## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 制造商实际放行已完成干燥密封包装的普通硬粒小麦粗粒粉意面，真实SKU形状源批日期净量水分包装状态 |
| starting_condition_role | 制造放行后商户实体常温自营批发增量模块 |
| product_classification_scope | 食品批发较窄子集，独立成品意面商品系统 |
| recursive_input_rule | 不将交易意面作为原粉烹煮材料或递归同服务投入。商品库存需求在交换外，实际供给实体外包独立范围。 |
| upstream_dataset_requirement | 独立原门槛商品覆盖谷物种植磨制粗粒粉、真实意面生产成形干燥及继承包装最终放行一次。原粮粗粒粉不能代表干燥包装成品。真实相容归属需求与损失上游服务外另量化。 |
| disclosure | 真实产权产品包装日期水分方法基准净量皮重期间；原门槛归属数量状态单位来源换算责任既有损失覆盖；真实破碎拒收退回接收去向；完整资源供方资产运输处理范围 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| finished_commodity | 全部商品 | 全部谷物磨粉意面制造干燥继承包装及损失上游在服务外，源需求匹配真实干燥包装成品放行，不因转售新制造。 |  |
| dry_pack_condition | 接收验收商品 | 记录真实环境水分暴露密封完整来源日期SKU买方标准。制造商消费者FAQ仅支持定性干存日期背景，不强加通用消费者存储数字时温或自动丢弃门槛。 | barilla-dry-pasta-storage |
| manufactured_state | 成品供方门槛 | 硬粒小麦、粗粒粉和制造干燥意面为不同上游阶段。制造商FAQ支持该区分，不是制造配方通用含水测定或熟食份量因子。 | barilla-pasta-product-state |
| all_periods_attempts | 真实库存尝试 | 源批批次事件期间记录真实期初接收发运退回拒收破包期末配对内部移动。未完成失败重复尝试保留资源，只有最终唯一验收计N。 |  |
| physical_scope | 供给供方资产接收方 | 直接供方承运资产处理实际负担唯一责任。外包处理再包装不能消失，范围扩展须审。利润库存差或推测替代信用不能代替实体记录。 |  |


## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `ambient_wholesale` | 密封干意面商户库存搬运与验收交接 | required | 真实自营原封普通硬粒小麦干意面接收常温存放电动搬运至商业验收 | 唯一实体商户服务承担库存包装日期水分资源责任，不另设制造保鲜节点 | `accepted_service` |

真实节点承担实际接收检查存放搬运卫生事件。意面包装库存为非交换商品审计；条件性供给包装件资产残料环境物种仅据实际记录展开。完整拒收、可用破碎意面、已弃物料与真实直接释放是不同状态。

### 过程：密封干意面商户库存搬运与验收交接 (`ambient_wholesale`)

#### 输入

##### 产品流

###### 实际使用点交流电 (`electricity_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Energy / kWh
- 数量规则：每参考流实际归属电量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

数量范围证据需求：需源表期间、真实设备充电范围及全使用者分配，含待机卫生未完成订单；无每吨意面电耗、名义设备时数或制造干燥负荷。

###### 实际液态处理自来水供给 (`cleaning_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Volume / m3
- 数量规则：每参考流实际归属购入清洁水量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

数量范围证据需求：需实际水表事件、供水处理和归属记录；无烹煮水比、默认排污比例或由意面湿重差额产生的用水。

###### 实际独立记录的合成洗涤剂投入 (`hygiene_supplies_synthetic_detergent`)

仅适用于产品配方、供应状态及用途记录确认的实际合成表面活性洗涤剂。记录扣除包装皮重的材料净量，区分浓缩液与稀释水，整体配方与组分不得相加重复计入。肥皂、消毒剂、抹布、滤材等仍按各自实际身份记录，不预设清洁配方、剂量或发生。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属新卫生供给质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：需真实配方耗材状态、期初接收期末未用退回及组成去向；无通用清理包或化学释放比例。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已完成的密封干制硬粒小麦意面自营批发批次 (`accepted_service`)

一项制造商原封普通硬粒小麦粗粒粉干意面、商户拥有并由商业买方实际唯一验收的批次。真实供方SKU形状源批放行、包装单位数、意面净质量及声明水分基准、继承皮重日期状态历史期间买方门槛限定服务。不等于标准件数质量发票或熟食份数。

- 选定流：已完成的密封干制硬粒小麦意面自营批发批次
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_pasta`

数量范围证据需求：需真实供方放行商业门槛及产品包装水分日期限定；无固定载荷保质窗口水分百分比缺陷容差或验收率。

###### 退回供应方的未使用合成洗涤剂 (`unused_mass_returns_detergent_return`)

仅覆盖本过程有独立实际证据的“退回供应方的未使用合成洗涤剂”。记录自身物态、净量 kg、事件来源及交接门。其他状态或接收方需在`unused_mass_returns`下独立确定身份，本卡不能替代；记录缺失不证明发生或为零。 将未使用材料的配方、供应状态和原生质量严格匹配到投入`hygiene_supplies_synthetic_detergent`。本卡为可用对外退料，不是废物、期末库存或内部循环。仅在总量供应口径下列此输出；投入已扣除该退料时必须省略对应退料输出，不自动抵扣避免生产。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位：Mass / kg
- 数量规则：`unused_mass_returns_detergent_return`实际独占归属的 kg / 验收 N，仅归一化一次；已按参考流给出的数量不得再次除以 N。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需事件关联的原生 kg、状态组成、接收或供应门、归属记录及整件组分或对应投入的排他关联，使用协议`cp_supplies`。不提供默认数值或换算因子；其他原生单位须有换算证据后使用。

##### 废物流

###### 废弃密封干硬粒小麦意面包装整件 (`intact_pack_waste_atomic_case`)

仅在实际独立记录确认“废弃密封干硬粒小麦意面包装整件”时适用。本卡只覆盖该命名实物状态及自身实际净量、保留组成和接收门。其他部件、碎片、游离液、独立包装及清理载体仍属于`intact_pack_waste`中的身份核实事项；不得移动边界、预设事件、将库存差当废弃，或把仍保留在整体流内的组分另算出口。实际混收流须匹配自身准确身份。原有原生单位数量协议只用于本独占具体情形，其他实际去向分别协调。

- 选定流：废弃密封干硬粒小麦意面包装整件
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属密封整包废物质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_pasta`

数量范围证据需求：需真实拒收SKU批次日期状态、整包质量皮重覆盖和接收处置；最佳食用日期已过本身不证明丢弃污染或环境释放。

###### 废弃散装干硬粒小麦意面碎片 (`loose_pasta_waste_atomic_case`)

仅在实际独立记录确认“废弃散装干硬粒小麦意面碎片”时适用。本卡只覆盖该命名实物状态及自身实际净量、保留组成和接收门。其他部件、碎片、游离液、独立包装及清理载体仍属于`loose_pasta_waste`中的身份核实事项；不得移动边界、预设事件、将库存差当废弃，或把仍保留在整体流内的组分另算出口。实际混收流须匹配自身准确身份。原有原生单位数量协议只用于本独占具体情形，其他实际去向分别协调。

- 选定流：废弃散装干硬粒小麦意面碎片
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属已收集意面残料质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需实际收集质量水分基准去向和拒收可用状态；不把库存差等于洒落、破碎比等于丢弃率或捕集细料等于颗粒排放。

###### 实际单独收集的纸类包装废物 (`packaging_waste_paper_pack`)

仅适用于本节点实际独立废弃、单独收集的纸类包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：包装废弃物，纸类 `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属分离包装废物质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需实际材料SKU皮重剩余意面净转移与接收分选处理；无标准袋纸质量或再生料替代系数。


###### 实际单独收集的金属包装废物 (`packaging_waste_metal_pack`)

仅适用于本节点实际独立废弃、单独收集的金属包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：金属包装废物 `cdda6013-c0c5-4c72-990a-f5668fe71069`
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属分离包装废物质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需实际材料SKU皮重剩余意面净转移与接收分选处理；无标准袋纸质量或再生料替代系数。


###### 实际单独收集的塑料包装废物 (`packaging_waste_plastic_pack`)

仅适用于实际独立废弃、单独收集的空塑料包装，保留实际组成、含水状态及接收方。含残留商品的混合包装、污染混合流、设备内保温泡沫、一次性抹布及复合包装不使用本分支；整体混合流中的组分仅作不可相加审计，运输处理责任计入一次。不预设排空、回收、发生或数量。

- 选定流：塑料包装废物 `919351c4-3e25-4092-9934-73ecec021a3b`
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属分离包装废物质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需实际材料SKU皮重剩余意面净转移与接收分选处理；无标准袋纸质量或再生料替代系数。

###### 收集的干硬粒小麦面食细屑 (`loose_pasta_waste_pasta_fines`)

仅覆盖本过程有独立实际证据的“收集的干硬粒小麦面食细屑”。记录自身物态、净量 kg、事件来源及交接门。其他状态或接收方需在`loose_pasta_waste`下独立确定身份，本卡不能替代；记录缺失不证明发生或为零。 仅在实际独立收集并转移至废物接收方时启用，不得用于仍保留在整件、包装或收集混合物中的组分。保留组成只作不可相加记录。不预设开包、切割、拆解、主动干燥、回收率或处理路线，处理及运输责任只归属一次。

- 选定流：收集的干硬粒小麦面食细屑
- 流属性/单位：Mass / kg
- 数量规则：`loose_pasta_waste_pasta_fines`实际独占归属的 kg / 验收 N，仅归一化一次；已按参考流给出的数量不得再次除以 N。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据要求：需事件关联的原生 kg、状态组成、接收或供应门、归属记录及整件组分或对应投入的排他关联，使用协议`cp_outlets`。不提供默认数值或换算因子；其他原生单位须有换算证据后使用。

###### 废弃场所清洁擦拭物，保留实际污染物 (`cleanup_waste_spent_wipe`)

仅覆盖本过程有独立实际证据的“废弃场所清洁擦拭物，保留实际污染物”。记录自身物态、净量 kg、事件来源及交接门。其他状态或接收方需在`cleanup_waste`下独立确定身份，本卡不能替代；记录缺失不证明发生或为零。 仅在实际独立收集并转移至废物接收方时启用，不得用于仍保留在整件、包装或收集混合物中的组分。保留组成只作不可相加记录。不预设开包、切割、拆解、主动干燥、回收率或处理路线，处理及运输责任只归属一次。 按接收状态确定实际擦拭物基材及保留污染物。滤芯、散装吸附材料或独立收集液体不是本擦拭物流。废弃整体质量含保留污染物一次，干擦拭物供应质量只作组分审计。

- 选定流：废弃场所清洁擦拭物，保留实际污染物
- 流属性/单位：Mass / kg
- 数量规则：`cleanup_waste_spent_wipe`实际独占归属的 kg / 验收 N，仅归一化一次；已按参考流给出的数量不得再次除以 N。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据要求：需事件关联的原生 kg、状态组成、接收或供应门、归属记录及整件组分或对应投入的排他关联，使用协议`cp_outlets`。不提供默认数值或换算因子；其他原生单位须有换算证据后使用。

###### 收集并送处理的场所清洁水性废水 (`wastewater_aqueous_cleaning`)

仅覆盖本过程有独立实际证据的“收集并送处理的场所清洁水性废水”。记录自身物态、净量 m3、事件来源及交接门。其他状态或接收方需在`wastewater`下独立确定身份，本卡不能替代；记录缺失不证明发生或为零。 仅在实际独立收集并转移至废物接收方时启用，不得用于仍保留在整件、包装或收集混合物中的组分。保留组成只作不可相加记录。不预设开包、切割、拆解、主动干燥、回收率或处理路线，处理及运输责任只归属一次。 本卡为场所清洁水性废水，保留实际溶解或悬浮负荷及实测接收体积。排除独立收集的未稀释商品、非水液体、冷凝水或生活污水；若转移前实际混合，另定该真实混合物身份，不得叠加组分体积或称其为纯清洁水。不从供水量推算本数量。

- 选定流：收集并送处理的场所清洁水性废水
- 流属性/单位：Volume / m3
- 数量规则：`wastewater_aqueous_cleaning`实际独占归属的 m3 / 验收 N，仅归一化一次；已按参考流给出的数量不得再次除以 N。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据要求：需事件关联的原生 m3、状态组成、接收或供应门、归属记录及整件组分或对应投入的排他关联，使用协议`cp_outlets`。不提供默认数值或换算因子；其他原生单位须有换算证据后使用。

##### 基本流

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| source_gate_quantity | 商品 | 采用相容状态单位水分基准及来源分配换算，将真实干燥包装原门槛投入归属验收批次群组。含有据原供给材料及普通水分状态变化份额，不假定为干意面损失；退回期末其他出口互斥归属。最终发运质量加丢弃干料不能替代原门槛需求。真实相容损失由服务外唯一责任者核对既有覆盖调整一次。不明湿重差为待解，非默认损失或零。 |  |
| all_consumer_driver | 仓库期间 | 用真实源期间和全部使用者事件期间的搬运空间时间等有据因果驱动，带原生单位来源理由，含待机卫生失败未完成群组。不默认均分批次或意面质量比；未完成资源结转不造N。 |  |
| new_supply_returns | 服务新供给 | S=opening_supply+net_receipts-closing_supply。总输入S/N并单独输出实际匹配原生未用外退，或仅耗用(S-usable_outward_return)/N并省去该退回交换、不另扣减。须同范围独立供给库存配对；留存回收属期末，继承商品资产内容物不减少无关当期供给。 |  |
| full_lifetime_assets | shared_assets | asset_equivalent=(job_driver/life_driver)/N，对应相容完整整资产及全部使用者期间。含制造维护真实替换退役寿命末端、观测历史有据剩余、不确定性敏感性更新。直接供方当期事件仅在同负担已归属他处一次后移除；不每轮新制造托盘或重复租金资产。 |  |
| actual_fates | 全部真实出口 | 可用商业退回留存拒收为商品库存出口，不是负服务。完整包废物和实际分离意面包装混合清理液体为互斥状态。记录真实原生组成去向接收方，组分分析不重复实体转移物种；处理唯一责任，无默认回收替代信用。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_pasta` | ambient_wholesale | 参考及非交换成品意面包装库存 | pasta_pack_acceptance_stock_record | site_id; merchant_id; warehouse_id; supplier_id; cohort_id; consignment_id; event_id; period_id; reference_gate_id; accepted_consignment_ids; N; ownership_resale_record; product_sku; pasta_shape; source_lot_id; finished_dried_packed_gate; manufacturer_release_date_time; plain_durum_semolina_state; sealed_pack_state; product_ingredients_evidence; pack_material; actual_date_mark; date_type; date_source; applicable_acceptance_criteria; receipt_date_time; hold_start; hold_end; duration; duration_unit; dispatch_date_time; buyer_acceptance_date_time; actual_storage_conditions; temperature; temperature_unit; humidity; humidity_unit; exposure_event; pack_integrity; visual_condition; broken_usable_quantity; actual_rejected_quantity; pack_count; pack_unit; packs_per_case; case_count; labelled_net_mass; labelled_mass_unit; gross_quantity; primary_pack_tare; outer_pack_tare; pallet_support_tare; tare_unit; net_pasta_mass; mass_unit; moisture_value; moisture_unit; moisture_basis; moisture_method; moisture_source; sample_id; sample_time; moisture_fraction; dry_matter_quantity; dry_matter_unit; basis_conversion; conversion_source; opening_quantity; receipts; buyer_dispatch; supplier_return; buyer_return; closing_quantity; recovered_closing; stock_unit; stock_state; internal_transfer_id; actual_breach_event; collected_pasta_residue; residue_unit; residue_moisture; residue_moisture_basis; residue_composition_source; intact_waste_transfer_mass; intact_waste_unit; actual_loss_fate; unknown_weight_difference; discrepancy_investigation; receiver; transfer_id; unfinished_consignment_ids; unfinished_resource_attribution; carried_resource_link; commodity_dataset_id; original_commodity_gate; original_gate_state; source_gate_input_quantity; source_gate_input_unit; source_gate_quantity_source; assigned_source_gate_quantity; assigned_source_gate_unit; assigned_source_gate_state; assigned_moisture_state_change_share; state_share_unit; state_share_source; source_gate_allocation_basis; source_gate_allocation_source; source_gate_conversion; source_gate_conversion_source; exclusive_other_exit_coverage; loss_adjustment_id; loss_adjustment_quantity; loss_adjustment_unit; loss_adjustment_basis; loss_adjustment_source; loss_owner; already_included_loss_coverage; commodity_overlap_check; buyer_signature; calibration; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | 核对真实干燥包装成品放行、商户产权SKU形状源批日期买方标准与最终唯一验收。实测包装支撑皮重后接收状态意面净量，记录含水测定基准方法样品时间，区别干物质分析转换与原门槛状态。核对库存真实退回期末内部移动、可用破碎及拒收破包收集料不明质量变化。原成品门槛需求和相容损失采用真实来源换算责任既有覆盖在服务外一次。 只归属独立确认的实物情形，其他实际去向按来源分别保留；每个原生记录只属于一个交换，任何总量仅作不可相加审计。 | Item(s); 实际意面kg及相容水分状态原生单位 | 每次接收检查移动拒收破包验收盘点或水分测定 | 供方放行至商户验收及前后库存失败未完成群组 | 一个真实商户责任及独立制造商商品买方接口 | per reference flow | 真实SKU日期包装放行买方证据；校准质量皮重及相容水分来源去向调查 |
| `cp_supplies` | ambient_wholesale | 真实卫生包装供给及未用退回 | new_supply_stock_record | site_id; cohort_id; event_id; period_id; supply_id; product_sku; product_state; native_property; native_unit; unit_definition; opening_supply; gross_receipts; receipt_tare; net_receipts; closing_supply; recovered_closing; actual_use; usable_outward_return; outward_return_id; return_receiver; supply_return_pair_id; same_scope_supply_match; selected_supply_view; per_piece_mass; per_piece_mass_unit; density; density_unit; density_temperature; density_source; conversion; conversion_source; composition; composition_basis; composition_source; actual_fate; provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 采集真实原生SKU接收库存使用期末与匹配未用外退。新增次包清洁卫生供给不同于继承商品包装及已用混合废物。总供给加输出或仅耗用省去输出选一路，独立原生换算组成。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kg; Item(s); 真实原生单位换算 | 每次真实接收使用退回库存事件 | 完整供给使用退回期间含未完成群组 | 具名独立直接供给范围排除外包已含资源 | per reference flow | 真实SKU单位库存配对、校准净量、换算组成来源 |
| `cp_utilities` | ambient_wholesale | 源表全部使用者归属 | utility_period_driver_record | site_id; cohort_id; period_id; meter_id; utility_source; provider; meter_unit; opening_reading; closing_reading; import_quantity; export_quantity; direct_submeter_quantity; conversion; conversion_source; all_consumers; all_periods; consumer_driver; total_driver; driver_unit; driver_basis; driver_source; allocation_rationale; handling_events; occupied_space; space_unit; start_time; end_time; duration; duration_unit; idle_quantity; hygiene_event_id; breach_cleanup_event_id; equipment_charging_coverage; actual_water_source; recirculation; actual_makeup; provider_overlap; calibration; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 用实际进出口源表或匹配分表及互斥期间。按全使用者搬运空间时间等因果驱动归属，含待机卫生失败未完成。不含制造干燥烹煮水或未审专用温控负荷。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kWh; m3; 真实表驱动单位 | 每个真实匹配表使用者事件期间 | 全部服务源期间使用者待机清洁未完成群组 | 直接公用资源供给处理范围排除供方重叠 | per reference flow | 源表校准方向及全使用者驱动证据理由 |
| `cp_provider` | ambient_wholesale | 真实实体服务包 | physical_package_record | provider_id; package_id; native_quantity; native_unit; package_definition; equivalent_conversion; conversion_source; site_id; cohort_id; event_id; period_id; actual_start; actual_end; duration; duration_unit; included_energy; included_materials; included_assets; included_transport; included_treatment; excluded_resources; direct_overlap; other_provider_overlap; actual_completion; uncertainty | 取得真实完整实体服务包原生单位完成数量和全资源结果范围。直接供方承运处理资产责任匹配一次。真实意面处理再包装须另审，不隐藏于外包。 | Item(s)等价或实际单独展开原生单位 | 每次已完成实体服务事件 | 真实服务包来源运营处理期间 | 具名实体外包及明确排除 | per reference flow | 真实合同完成原生换算和范围矩阵 |
| `cp_assets` | ambient_wholesale | 全寿命仓库搬运基础设施 | asset_lifetime_driver_record | asset_id; asset_type; asset_identity; asset_equivalent_unit; dataset_scope; manufacture_coverage; maintenance_coverage; replacements; replacement_unit; retirement; end_of_life; history_start; history_end; observed_driver; observed_driver_unit; remaining_driver; remaining_driver_unit; remainder_source; life_driver; life_driver_unit; job_driver; job_driver_unit; all_consumers; all_periods; driver_basis; driver_source; reuse_cycles; actual_turns; uncertainty; sensitivity; update_trigger; direct_event_scope; provider_asset_coverage; carrier_asset_coverage; overlap_owner; conversion; conversion_source | 识别真实整资产匹配全寿命数据，含制造维护替换退役末端、观测全使用者历史及有据剩余不确定性敏感性更新。作业寿命驱动单位相容并划分直接供方承运责任，避免每轮托盘制造或租金重复。 | Item(s)等价; 实际相容全使用者寿命驱动单位 | 每个真实资产期间维护替换退役复核 | 完整制造至寿命末端历史剩余及全部使用者期间 | 一个真实完整资产责任及明确重叠归属 | per reference flow | 资产范围历史有据剩余及驱动单位不确定性 |
| `cp_freight` | ambient_wholesale | 真实运输整载荷 | shipment_work_record | shipment_id; carrier_id; mode; supplier_gate; destination_gate; cohort_id; consignment_id; period_id; actual_start; actual_end; as_transported_pasta_mass; primary_pack_mass; inherited_outer_mass; added_pack_mass; transported_pallet_support_mass; mass_unit; whole_payload_mass; route_distance; distance_unit; load_share; share_basis; share_source; multi_drop_coverage; empty_leg_coverage; return_coverage; native_work_unit; work_conversion; conversion_source; carrier_energy_scope; carrier_asset_scope; direct_overlap; uncertainty | 采集真实运输状态意面及互斥主包继承新增外包支撑、实际路线距离份额。记录空返多点退回和原生换算，承运内含能源资产一次。 | kg*km; 实际载荷距离原生工作量单位 | 每次真实运输与实际退回段 | 约定运输门槛及匹配空返退回期间 | 具名承运工作数据覆盖排除 | per reference flow | 真实载荷路线份额及相容换算 |
| `cp_outlets` | ambient_wholesale | 收集意面包装清理液体出口 | outlet_receiver_record | site_id; cohort_id; event_id; period_id; stream_id; material_identity; stream_state; classification; gross_quantity; tare_quantity; net_quantity; quantity_unit; moisture_value; moisture_basis; moisture_method; moisture_source; remaining_pasta; remaining_pasta_unit; composition; composition_basis; composition_source; retained_fluid; intact_pack_exclusion; loose_pasta_exclusion; separate_pack_exclusion; density; density_unit; density_temperature; density_source; volume; volume_unit; conversion; conversion_source; pollutant_load; pollutant_unit; load_source; collection_method; receiver; transfer_id; receiver_acceptance; treatment_route; treatment_scope; provider_coverage; direct_release_exclusion; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | 实测分离意面包装混合清理固体或已收集液体的原生状态。声明水分剩余内容物及非叠加组分，避免整包组分重复和留存库存外送。接收分类验收处理供方边界一次，污染负荷独立有据。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 只归属独立确认的实物情形，其他实际去向按来源分别保留；每个原生记录只属于一个交换，任何总量仅作不可相加审计。 | kg; m3; 实际流状态原生单位 | 每次真实收集转移接收验收 | 实际清理损失接收期间，留存库存另记 | 真实围控接收接口，不是直接环境排放 | per reference flow | 真实净量水分密度组成负荷来源和接收处理 |
| `cp_environment` | ambient_wholesale | 真实直接物种接收介质 | direct_species_record | site_id; cohort_id; event_id; period_id; substance_identity; particle_size; receiving_medium; release_state; measured_mass; measured_mass_unit; activity; activity_unit; species_factor; factor_unit; factor_source; factor_scope; factor_complete; measured_whole_stream_release; whole_stream_unit; composition; composition_basis; composition_source; fate; fate_basis; fate_source; temperature; temperature_unit; pressure; pressure_unit; density; density_source; conversion; conversion_source; retained_captured_quantity; receiver_treatment_coverage; applicability; calibration; uncertainty | 选择身份前明确真实物种适用粒径接收介质。实测物种质量、适用活动因子或真实整流组成去向结合原生换算选一路。完整物种因子不再乘组成去向。捕集细料围控废物不明质量差不是直接释放。 | kg物种; 实际活动整流浓度原生单位 | 每次真实释放或有据匹配监测期间 | 实际释放期间及证据适用性，无库存余差代理 | 具名直接环境接口排除接收处理 | per reference flow | 实测校准或匹配因子组成去向来源换算不确定性 |

### 计算规则

| rule_id | Applies to | Rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| accepted_consignment | accepted_service | N为reference_gate_id上最终唯一accepted_consignment_ids数量；accepted_service=1 Item(s)。 | cp_pasta | 附产品包装日期水分时间门槛的已完成实际服务 |  |
| pasta_content_moisture | 非交换意面审计 | net_pasta_mass=gross_quantity-primary_pack_tare-outer_pack_tare-pallet_support_tare，边界相容。真实所报水分按来源换算分数；仅湿基时dry_matter_quantity=net_pasta_mass*(1-moisture_fraction)，干基时dry_matter_quantity=net_pasta_mass/(1+moisture_fraction)。采用声明基准方法样品时间，干物质与接收视图不叠加交换。 | cp_pasta | 真实内容物皮重和水分基准分析审计 |  |
| finished_gate_demand | 非交换源门槛 | assigned_source_gate_quantity为真实相容有据source_gate_input_quantity向验收群组分配换算，含有据assigned_moisture_state_change_share，排除互斥归属退回期末其他出口。commodity_source_gate_demand=assigned_source_gate_quantity/N位于服务外。真实loss_adjustment_quantity/unit/basis/source/owner与already_included_loss_coverage核对一次；禁止最终质量加废料捷径及湿重差损失推断。 | cp_pasta; N | 独立成品干燥包装需求及相容真实上游损失接口 |  |
| new_supply_stock | 卫生包装供给; 未用退回 | S=opening_supply+net_receipts-closing_supply；net_receipts=gross_receipts-receipt_tare。总输入S/N并单独匹配输出usable_outward_return/N，或仅耗用(S-usable_outward_return)/N并省去该退回交换。留存回收含于期末，需真实原生换算来源。 | cp_supplies; N | 每参考流实际供给和所选未用退回约定 |  |
| meter_attribution | electricity; cleaning_water; electricity_ac; cleaning_water_liquid_tap | actual_meter_quantity=closing_reading-opening_reading按真实进出口方向，或匹配direct_submeter_quantity；attributable_quantity=(actual_meter_quantity*consumer_driver/total_driver)/N，互斥全使用者期间含待机卫生未完成资源。 | cp_utilities; N | 每参考流实际购入公用资源量 |  |
| physical_provider | provider_packages | provider_quantity=native_quantity*equivalent_conversion/N，仅有实际匹配实体完成单位和完整资源范围一次时成立。 | cp_provider; N | 每参考流真实等价外包数量 |  |
| asset_equivalent | shared_assets | asset_equivalent=(job_driver/life_driver)/N；life_driver=observed_driver+remaining_driver，单位相容且完整全使用者历史剩余有据，含真实替换寿命末端；仅一种视图不重复归一化。 | cp_assets; N | 每参考流相容完整资产等价份额 |  |
| whole_load_freight | freight | whole_payload_mass=as_transported_pasta_mass+primary_pack_mass+inherited_outer_mass+added_pack_mass+transported_pallet_support_mass，载荷组成真实互斥；freight_work=whole_payload_mass*route_distance*load_share/N，先真实原生换算及空返退回互斥覆盖。 | cp_freight; N | 每参考流真实整载荷运输工作量 |  |
| contained_outlets | 实际废物出口 | intact_pack_waste=intact_waste_transfer_mass/N，仅真实完整包。其他outlet_quantity=(gross_quantity-tare_quantity)/N，采用真实原生流单位或实测体积/N，并按需声明水分组成密度温度。整流组分视图不重复，留存内部移动不作外送。 | cp_pasta; cp_outlets; N | 每参考流真实互斥已收集出口及接收处理 |  |
| species_mass | direct_species | species_mass=measured_mass/N OR activity*species_factor/N OR measured_whole_stream_release*composition*fate/N，先相容有据原生换算并选一路。factor_complete防止再乘组成去向，整流物种不重复实体出口。 | cp_environment; N | 每参考流真实物种质量接收介质 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| finished_state | 接收验收商品 | 真实普通干制硬粒小麦成品及密封SKU形状源批日期买方条件，不用原粗粒粉门槛或通用消费者质量仓储阈值。 | 制造商真实放行日期产品买方验收 |
| mass_moisture_loss | 商品实际去向 | 接收净量皮重水分基准方法样品时间相容；可用破碎拒收丢弃水分变化不明差额不同。原门槛归属需求损失来源状态单位责任覆盖在服务外一次。 | cp_pasta相容实测数量状态去向和商品关联 |
| complete_resources | 全部使用者供方资产承运接收 | 真实原生驱动期间、完整实体包及全寿命资产观测剩余来源替换末端、当期重叠及卫生未完成尝试一次覆盖。 | 源表库存驱动供方承运接收寿命记录 |
| specific_exchange_ranges | 真实展开行 | 最终数据前验证具体身份属性单位接收物种角色，经验范围需可比证据不造阈值。 | 实际详情支持数值适用证据 |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | ambient_wholesale | 电表记录对应哪个供电点、交直流状态、电压和供应方数据集？核对已列交流电卡与其他有证据的供电，不得将交流电 UUID 用于其他能源。 实际电动库存搬运设备充电、照明、普通通风、检验卫生设备用电，计量供方边界真实。不含现场燃烧、专用制冷除湿、产品再干燥或其他稳定介入，实际新增操作须复审路线。 数量范围证据需求：需源表期间、真实设备充电范围及全使用者分配，含待机卫生未完成订单；无每吨意面电耗、名义设备时数或制造干燥负荷。 计量证据：协议`cp_utilities`；原记录口径 Energy / kWh。原数量约束“每参考流实际归属电量”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`electricity_ac`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_utilities`; 实际来源关联原生记录 |
| cleaning_water | ambient_wholesale | 供应记录是否证明为处理自来水，还是其他明确水质或水源？核实供水状态及交接门，不得用自来水卡替代其他水。 仅实际外购地面设备清洁公用水，不水合意面、不推制造用水、不把产品水分变化等于公用水投入，不重复外包内含水。卫生事件液体接收范围明确。 数量范围证据需求：需实际水表事件、供水处理和归属记录；无烹煮水比、默认排污比例或由意面湿重差额产生的用水。 计量证据：协议`cp_utilities`；原记录口径 Volume / m3。原数量约束“每参考流实际归属购入清洁水量”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`cleaning_water_liquid_tap`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_utilities`; 实际来源关联原生记录 |
| hygiene_supplies | ambient_wholesale | 取得下述清洁或维护职责实际采购品号、配方或安全数据表、供应浓度、物态、用途及库存领用记录。逐项核实洗涤剂以外的实际材料；不得由本 PCR 预设药剂、滤材或剂量。 按实际SKU状态原生质量库存展开具名配方清洁产品及质量计擦拭吸附物，用于仓库表面设备或真实破包清理。不规定意面化学处理、配方消毒剂量或未记录虫控化学品。 数量范围证据需求：需真实配方耗材状态、期初接收期末未用退回及组成去向；无通用清理包或化学释放比例。 计量证据：协议`cp_supplies`；原记录口径 Mass / kg。原数量约束“每参考流实际归属新卫生供给质量”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`hygiene_supplies_synthetic_detergent`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_supplies`; 实际来源关联原生记录 |
| added_packing | ambient_wholesale | 取得包装物料单或规格、材料或复合层身份及新增与继承包装的责任。按该记录逐项确定尚缺的套袋、封口、标签、捆扎带或支撑件身份；一体复合包装不得拆成可相加的材料交换。 仅实际新增外运输箱捆带膜或保护支撑，定义真实单位材料并在需要时换算单件质量。制造商原封标签和继承外包装属于商品审计，不是新制造投入。循环托盘为全寿命资产。 数量范围证据需求：需真实包装单位库存使用未用退回及单件材料质量；无默认零售包装质量每箱袋数膜耗或自动新增外包。 计量证据：协议`cp_supplies`；原记录口径 Count / Item(s)。原数量约束“每参考流实际归属新次级运输包装件数”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_supplies`; 实际来源关联原生记录 |
| provider_packages | ambient_wholesale | 取得本记录中明列各职责的供应商合同或完成结果记录、原生计量物理单位及包含资源。确定各项服务结果身份；检验、清洁、装卸为不同服务，价格或小时不得改称件数。 真实供方定义的接收检查卫生搬运维护服务包，完成单位与完整资源匹配。发票利润金融不定义无资源Count。外包再干燥水合熏蒸产品处理或再包装仍属真实材料操作，须另审范围。 数量范围证据需求：需实际服务包原生单位完成数量换算及能源材料资产处理范围；无标准价格时长或不明任务等价。 计量证据：协议`cp_provider`；原记录口径 Count / Item(s)。原数量约束“每参考流实际归属已完成实体服务包等价量”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_provider`; 实际来源关联原生记录 |
| shared_assets | ambient_wholesale | 对本记录中明列的每种资产取得资产编号、配置及匹配的完整生命周期数据集。待补的是各资产或服务身份及全寿命全部使用者分母；仓库、叉车、托盘不能共用一条计数交换，也不能套用默认寿命。 真实仓库货架电动搬运循环托盘衡器条件监测设备，采用相容完整整资产等价，制造维护实际替换退役寿命末端覆盖全部使用者期间，托盘每轮使用不是新制造。 数量范围证据需求：需真实资产全寿命原生全使用者驱动、观测历史有据剩余及不确定性；不默认寿命轮数年利用率或零退役。 计量证据：协议`cp_assets`；原记录口径 Count / Item(s)。原数量约束“每参考流实际归属完整资产等价量”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_assets`; 实际来源关联原生记录 |
| freight | ambient_wholesale | 对实际入库、出库、退运及废物运输段取得运输方式或车辆、温控服务、起终点、实际载荷和距离及供应方覆盖。方式或配置未明确前不能选择运输流；不同运输方式不得合成一条 kg*km 流。 真实约定运输退回段，采用实际意面加主包继承新增外包及运输托盘支撑。分析干物质不自动是载荷。承运内含能源车辆资产及多点空返范围唯一负责。 数量范围证据需求：需实际运输状态载荷路线距离份额空返退回原生换算；无干熟份量比、名义箱重或默认路程。 计量证据：协议`cp_freight`；原记录口径 mass*distance / kg*km。原数量约束“每参考流实际归属整载荷运输工作量”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_freight`; 实际来源关联原生记录 |
| unused_count_returns | ambient_wholesale | 将对外退料凭据匹配到唯一投入品号、状态、原生单位及接收方。采用净消耗投入时省略对应退料交换；商品退货及期末库存另作审计记录。 真实外退未用新Count包装须匹配同范围供给库存原生单位及接收方验收。留存内部移动为库存。选总输入与单独退回输出，或仅耗用并省去该退回交换，不重复扣减。 数量范围证据需求：需原供给配对真实件数单位接收方及所选视图；无标准退回率或替代包装生产信用。 计量证据：协议`cp_supplies`；原记录口径 Count / Item(s)。原数量约束“每参考流实际归属未用包装外退件数”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_supplies`; 实际来源关联原生记录 |
| unused_mass_returns | ambient_wholesale | 将对外退料凭据匹配到唯一投入品号、状态、原生单位及接收方。采用净消耗投入时省略对应退料交换；商品退货及期末库存另作审计记录。 实际未耗用质量计服务供给外退，精确匹配原独立投入库存范围及产品状态。商业意面退回为商品移动，不是负服务供给；已用污染物为废物。 数量范围证据需求：需真实供给退回配对校准净量和接收状态；不得抵扣无关当期供给商品库存或继承资产组分。 计量证据：协议`cp_supplies`；原记录口径 Mass / kg。原数量约束“每参考流实际归属未用供给外退质量”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`unused_mass_returns_detergent_return`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_supplies`; 实际来源关联原生记录 |
| intact_pack_waste | ambient_wholesale | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 仅实际转移给废物接收方的密封成品包，计内容物加包装完整状态。可用商业退回和留存拒收库存不同，同一内含意面包装不再作额外重复实体出口。损失上游在服务外，实际搬运接收处理一次。 数量范围证据需求：需真实拒收SKU批次日期状态、整包质量皮重覆盖和接收处置；最佳食用日期已过本身不证明丢弃污染或环境释放。 计量证据：协议`cp_pasta`；原记录口径 Mass / kg。原数量约束“每参考流实际归属密封整包废物质量”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`intact_pack_waste_atomic_case`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_pasta`; 实际来源关联原生记录 |
| loose_pasta_waste | ambient_wholesale | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 真实破包搬运失误后物理收集的干意面碎片细料，记录实际水分状态组成及残留污染基准。破碎可能仅改状态而不损失；清扫捕集物为已收集废物，不自动等于空气粉尘或纯干固体。 数量范围证据需求：需实际收集质量水分基准去向和拒收可用状态；不把库存差等于洒落、破碎比等于丢弃率或捕集细料等于颗粒排放。 计量证据：协议`cp_outlets`；原记录口径 Mass / kg。原数量约束“每参考流实际归属已收集意面残料质量”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`loose_pasta_waste_atomic_case`; `loose_pasta_waste_pasta_fines`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_outlets`; 实际来源关联原生记录 |
| packaging_waste | ambient_wholesale | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 实际分开转移的主包继承或新增次包，记录材料状态及残留内容物，排除完整包废物和混合清理流已含部分。转售不产生新零售包制造或自动回收信用。 数量范围证据需求：需实际材料SKU皮重剩余意面净转移与接收分选处理；无标准袋纸质量或再生料替代系数。 计量证据：协议`cp_outlets`；原记录口径 Mass / kg。原数量约束“每参考流实际归属分离包装废物质量”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`packaging_waste_paper_pack`; `packaging_waste_metal_pack`; `packaging_waste_plastic_pack`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_outlets`; 实际来源关联原生记录 |
| cleanup_waste | ambient_wholesale | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 真实已用擦拭吸附物清洁残余按声明混合实体流转移，所含意面流体化学品仅在实测流中记录。清洁供给及组分分析为非叠加视图，避免重复散意面或分离包装出口。 数量范围证据需求：需实测净量状态组分基准保留液体及排除流记录；不将购入耗材等于废重或意面水分自动变成废水。 计量证据：协议`cp_outlets`；原记录口径 Mass / kg。原数量约束“每参考流实际归属混合清理固体质量”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`cleanup_waste_spent_wipe`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_outlets`; 实际来源关联原生记录 |
| wastewater | ambient_wholesale | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 实际收集清洁事故液体至接收方，具有原生体积或相容质量密度温度换算、真实悬浮溶解负荷及供方范围。本路线不煮洗水合意面。已收集液体及污染负荷分析不同于直接环境物种。 数量范围证据需求：需实际收集接收、密度温度或体积基准及处理负荷证据；无熟意面用水比默认COD或排水百分比。 计量证据：协议`cp_outlets`；原记录口径 Volume / m3。原数量约束“每参考流实际归属已收集废水体积”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`wastewater_aqueous_cleaning`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_outlets`; 实际来源关联原生记录 |
| direct_species | ambient_wholesale | 按排放或采样记录确定各实测排放的来源事件、化学物或粒径身份、来源属性及接收介质。物种、粒径或介质不明须保留具体证据缺口；化学品总用量或库存损失不能提供这些身份。 仅对独立确定的真实物种接收介质，以实测质量或适用活动因子组成去向建模。捕集清扫细料、包装残余围控废水不是直接物种。水分差气味视觉缺陷配料表不证明粉尘二氧化碳水汽或化学物释放。 数量范围证据需求：需实际物质、适用粒径、介质、释放活动因子组成去向换算来源；无余差排气、不把面粉粉尘因子移用于密封意面、不以SDS等于释放。 计量证据：协议`cp_environment`；原记录口径 Mass / kg。原数量约束“每参考流实际归属直接释放物种质量”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_environment`; 实际来源关联原生记录 |


## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| reference_gate_check | accepted_service | N>0唯一最终商业验收批次，附真实成品干燥包装放行SKU形状日期净量皮重水分基准状态时间，不是包kg或熟份参考。 |  |
| processing_check | 全部路线 | 无隐藏磨粉意面制造水合烹煮再干燥再包装产品处理或未审温控，含实际外包操作。 |  |
| commodity_loss_check | 非交换商品 | 成品门槛归属量及有据水分状态份额、互斥退回期末其他出口、真实相容原门槛损失来源单位状态责任既有覆盖在服务外一次。湿重差不等于干固体损失废物物种，不默认零。 |  |
| physical_owner_check | 资源期间资产 | 真实全部使用者源期间因果驱动单位及全寿命剩余末端、直接供方承运处理范围、新供给退回及未完成资源一次，不每轮制造托盘。 |  |
| state_outlet_check | 真实去向 | 商业可用退回留存拒收不同于整包废物、捕集意面分离包装混合清理液体及实测直接物种。不重复组分、不把捕集细料等于空中粉尘，接收处理真实归属。 |  |
| bilingual_raw_contract | 全部内容 | 原始七身份五功能六边界六参考七画像及每协议十二字段和每公式正文非空，行证据单位原操作数来源规则双语确定性投影对齐；检查不证明产品质量或最终UUID。 |  |
| validate_concrete_identity_decisions | all inventory rows | 将每项实际身份核实事项落实到实物明确的流卡和原生数量，或提供不适用证据。证据检查点 ID 不是交换。发生、物种、状态、接收方或服务配置缺失时阻断最终数据完成，不默认零。按规定保持整体与组分、总量投入与对应退料的排他关系。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 实际前景完整并验证具体交换后作为secondary_dataset或background_dataset |
| downstream_use | 实体常温自营密封干意面服务增量，关联独立干燥包装成品需求及真实相容损失一次，不是完整交付意面足迹 |
| allowed_use | 声明普通干制硬粒小麦粗粒粉SKU形状密封包，经真实商户商业验收群组门槛，附质量水分日期包装期间 |
| excluded_use | 原粮面粉制造鲜蛋馅熟水合意面面条古斯米成餐，再干燥再包装处理未审温控，零售代理独立仓储，安全保质期保证 |
| required_metadata | 供方SKU形状源批成品放行商户买方；真实净量继承皮重包装数、日期类型值水分方法基准来源样品时间；真实条件库存去向期间；全使用者资源供方资产承运接收；原门槛归属数量状态单位来源换算分配损失责任既有覆盖 |
| required_quality_disclosure | 真实质量皮重校准水分基准原生换算相容；可用破碎与实际拒收丢弃捕集残料不明变化；原门槛需求损失及重叠；因果全使用者驱动全寿命剩余不确定性；具体流支持范围缺口 |
| update_trigger | 产品SKU配料干密封日期验收或仓储状态改变；新增处理再干燥再包温控；资产供方承运接收边界改变；实质损失拒收释放或来源证据更新 |


## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| barilla-dry-pasta-storage | literature | Barilla制造商FAQ，意面及酱料存放。https://www.barilla.com/en-us/help-with/storage-reheat-and-product-faqs/pasta-and-pasta-sauce-storage | 制造商消费者定性干存水分及产品包装日期背景；不采用通用批发时长损失质量因子、熟面酱料方法或数字条件。 |
| barilla-pasta-product-state | literature | Barilla制造商意面产品FAQ。https://www.barilla.com/en-us/help-with/storage-reheat-and-product-faqs/general-product-faqs | 制造商硬粒小麦粗粒粉制造干燥成品阶段区分和真实日期视觉状态背景；不采用消费者份量烹煮换算通用水分测定限值或保证。 |
