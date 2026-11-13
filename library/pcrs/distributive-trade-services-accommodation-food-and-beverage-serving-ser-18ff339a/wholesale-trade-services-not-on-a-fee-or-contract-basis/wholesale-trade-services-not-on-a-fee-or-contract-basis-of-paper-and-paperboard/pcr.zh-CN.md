---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-paper-and-paperboard
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 原整卷棕色牛皮箱纸板的常温自营批发服务

## 1. 范围与适用性

原整卷未涂布棕色牛皮箱纸板，真实等级品号纤维BOM整卷净纸对芯裹皮宽长数量代表调湿定量水状态，拥有买入转售常温企业贸易。排白面涂布湿强再生箱板裁长商户转换分切印刷瓦楞重包主动气候零售代理。不强加目录典型数值食品接触强度寿命主张，真实额外职责需审查完整范围。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-paper-and-paperboard |
| classification_refs | CPC3.0:61094;narrower32132 |
| covered_products | 已完成原整卷未涂布棕色牛皮箱纸板自营批发货批服务 |
| excluded_products | 白面涂布湿强再生箱板部分商品商户转换分切印刷瓦楞气候零售代理 |
| representative_product | 真实未涂布棕整卷品号BOM原生纸芯裹宽长定量水状态最终企业货批 |
| production_route | 放行原整卷接收 -> 常温库存订单搬运 -> 发出 -> 最终企业验收 |
| market_state | 物理批发附加，纸水芯裹非交换商品 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 已完成原整卷未涂布棕色牛皮箱纸板自营批发货批服务 |
| How much | 1 Item(s)，一个最终商业货批非卷千克面积价值 |
| How well | 真实品号纤维BOM整卷宽长净纸芯裹定量水状态最终门槛 |
| How long or cycle | 真实接收存储退回发出验收时间戳时区截止全部资产阶段 |
| reference_flow_link | `accepted_service` |

| 字段 | 值 |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 已完成原整卷未涂布棕色牛皮箱纸板自营批发货批服务 |
| reference_flow_property | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | 数量单位 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | merchant_ownership_resale; final_business_buyer_gate; uncoated_brown_fullreel_sku; grade_fibre_bom; unique_reel_lot_hierarchy; width_length_area_count; netpaper_corewrap_tare; grammage_water_sample_condition; period_timezone_condition; source_gate_completed_integration; provider_asset_freight_scope; receiver_fates |

真实来源所有权转售冲销后最终企业门槛建立N，仅收货不足。失败未完职责保资源N0不除。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| commercial_count | accepted_service | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 参考1 Item(s)完成商业服务，卷质量面积非乘数。 |
| reel_basis | 非交换商品 | Count; Mass; Area | 真实原生数量; kg; m2 | 收到净纸质量=唯一包装卷(毛-芯皮-裹皮-外包载体皮)之和，EACH真实有据次数一次TOTAL不变父子互斥。纸面积=唯一整卷真实兼容宽*长；面积*真实代表定量仅同纸调湿水状态且有据原生单位因子才转纸质量。调湿定量非干纤维质量Cobb吸水非水分比例名义厚*密度非实测卷质量。不规定商户开卷计量，可追溯供应记录可用。 |
| water_basis | 真实库存去向 | Mass; mass fraction | kg; 真实比例单位 | 先原生百分比换比。w_wet=水/asreceived、w_dry=水/匹配干非水；dry_nonwater=asreceived*(1-w_wet)，仅同样本状态定义w_wet=w_dry/(1+w_dry)。LOD可含其他挥发物非自动水。无真实BOM组成干非水不自动干纤维。水变调湿定量Cobb不证明纤维损蒸气。 |
| native_identity | 真实交换 | 真实原生属性 | 真实原生单位 | 核真实品号服务资产接收物种介质原生属性单位，通用电Energy不可燃料特定NCV/GCV换算系数或Count替代。 经核实的电力流可按独立确认的电能基准及单位组使用ILCD名为净热值的参考属性；该属性名称不授权套用燃料热值系数。 |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 真实放行原整卷未涂布棕箱纸品号BOM净纸芯裹水状态 |
| starting_condition_role | 成品纸水芯裹非交换库存流经量 |
| product_classification_scope | 321/61094中较窄32132，纸321排32194 |
| recursive_input_rule | 仅完整互斥真实服务接收门槛，不重复同批发资源资产承运 |
| upstream_dataset_requirement | 仅物理常温拥有转售批发，真实接收订单发运清洁在内。原整卷纸水芯裹完整来源森林纤维浆造纸真实干燥卷绕放行原包装含损商品上游留外为非交换库存，仅原浆不完整，本附加非独立纸LCA。 需真实原归属损失基线覆盖额外成品门槛量原生状态换算阶段损失责任覆盖。真实缺阶段额外需求须完整链前外部集成一次具COMPLETED状态链接时间时区来源责任原生量结果，待办记录不足。真实服务损失搬运接收处理内一次。 |
| disclosure | 全部限定原生库存水芯裹BOM定量条件来源全部终态基线额外真实完成集成完整资源去向 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| service | 真实贸易职责 | 仅物理常温拥有转售批发，真实接收订单发运清洁在内。原整卷纸水芯裹完整来源森林纤维浆造纸真实干燥卷绕放行原包装含损商品上游留外为非交换库存，仅原浆不完整，本附加非独立纸LCA。 |  |
| source | 真实贸易职责 | 需真实原归属损失基线覆盖额外成品门槛量原生状态换算阶段损失责任覆盖。真实缺阶段额外需求须完整链前外部集成一次具COMPLETED状态链接时间时区来源责任原生量结果，待办记录不足。真实服务损失搬运接收处理内一次。 |  |
| operations | 真实贸易职责 | 排白面涂布湿强再生箱板部分裁长商品商户转换分切印刷瓦楞重包主动气候调节零售代理。真实额外作业需单独完整审查。供应测试气候非商户气候运行。 |  |
| fates | 真实贸易职责 | 真实等级BOM状态水状态决定验收退回期末有用废物出口。湿凹痕水质量余差非自动整弃纤维损物种。整混载体持留纸芯裹液非叠加，真实独立出口接收处理一次不默认回收抵扣。 |  |
| resources | 真实贸易职责 | 完整真实商户服务资源全寿命共享设施搬运载体制造维护清洁更换终结全部用户期间具原生因果驱动。服务覆盖仅替换已覆盖直接职责，承运空程载体一个责任。 |  |


## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| brown_kraftliner_full_reel_trade | 棕色牛皮箱纸板整卷库存贸易 | required | 真实原整卷未涂布棕自营企业贸易 | 接收订单发出真实清洁批库存结转退回跨期共享设施 | `accepted_service` |

不激活造纸干燥卷绕转换节点。真实职责事件期间来源拒收链接有用持留真实接收路径，未决拒收不计验收服务。真实变量配置据记录展开未知非零。

### 过程：棕色牛皮箱纸板整卷库存贸易 (`brown_kraftliner_full_reel_trade`)

#### 输入

##### 产品流

###### 实际使用点交流电 (`warehouse_power_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Energy / kWh
- 数量规则：归属真实原生物理量 / N；cp_power。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_power`

范围证据需求：需计量设备服务期间全部消费者物理归属，不纸强度测试气候能因子。

###### 实际液态处理自来水供给 (`housekeeping_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Volume / m3
- 数量规则：归属真实原生物理量 / N；cp_water。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

范围证据需求：需供应持留自由液直接去向来源接收证据，Cobb吸水水余差不量化服务水。

###### 实际独立记录的合成洗涤剂投入 (`housekeeping_materials_synthetic_detergent`)

仅适用于产品配方、供应状态及用途记录确认的实际合成表面活性洗涤剂。记录扣除包装皮重的材料净量，区分浓缩液与稀释水，整体配方与组分不得相加重复计入。肥皂、消毒剂、抹布、滤材等仍按各自实际身份记录，不预设清洁配方、剂量或发生。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位：Mass / kg
- 数量规则：归属真实原生物理量 / N；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据需求：需真实原生用品品号配方载体库存换算来源，不通用清洁剂剂量。

###### 实际独立记录的聚乙烯包装薄膜 (`added_shipping_material_pe_film`)

仅适用于实际独立供应、供本服务新增包裹或衬垫使用的聚乙烯薄膜，须确认实际聚合物配方与薄膜净量。该身份为工厂门通用生产组合，仍须记录实际供给门、供应方及另负责任的交付负荷。不预设LDPE/HDPE牌号、再生比例、厚度或用量。PVC、PET、PP、多层复合材料、胶黏标签、填充包装及继承商品包装仍按余项独立身份处理；整体供应与组分不得重复计量，不预设发生。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass / kg
- 数量规则：归属真实原生物理量 / N；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据需求：需原生材料数量面积长度质量皮重库存记录，分原新增包装与纸净量。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已完成原整卷未涂布棕色牛皮箱纸板自营批发货批服务 (`accepted_service`)

一个唯一最终企业验收商业货批，原整卷未涂布棕色牛皮箱纸板由商户拥有买入转售常温贸易。真实等级品号纤维BOM整卷批宽长数量净纸对芯裹皮重代表定量水条件状态时间买方门槛限定服务。卷纸千克面积非N。

- 选定流：已完成原整卷未涂布棕色牛皮箱纸板自营批发货批服务
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_reels`

范围证据需求：需最终拥有转售企业门槛冲销真实未涂布棕色整卷品号BOM净量芯裹水定量证据，不目录典型值作真实。

###### 退回供应方的未使用合成洗涤剂 (`unused_supply_return_detergent_return`)

仅覆盖本过程有独立实际证据的“退回供应方的未使用合成洗涤剂”。记录自身物态、净量 kg、事件来源及交接门。其他状态或接收方需在`unused_supply_return`下独立确定身份，本卡不能替代；记录缺失不证明发生或为零。 将未使用材料的配方、供应状态和原生质量严格匹配到投入`housekeeping_materials_synthetic_detergent`。本卡为可用对外退料，不是废物、期末库存或内部循环。仅在总量供应口径下列此输出；投入已扣除该退料时必须省略对应退料输出，不自动抵扣避免生产。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位：Mass / kg
- 数量规则：`unused_supply_return_detergent_return`实际独占归属的 kg / 验收 N，仅归一化一次；已按参考流给出的数量不得再次除以 N。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需事件关联的原生 kg、状态组成、接收或供应门、归属记录及整件组分或对应投入的排他关联，使用协议`cp_supplies`。不提供默认数值或换算因子；其他原生单位须有换算证据后使用。

###### 退回供应方的未使用聚乙烯薄膜 (`unused_supply_return_pe_film_return`)

仅覆盖本过程有独立实际证据的“退回供应方的未使用聚乙烯薄膜”。记录自身物态、净量 kg、事件来源及交接门。其他状态或接收方需在`unused_supply_return`下独立确定身份，本卡不能替代；记录缺失不证明发生或为零。 将未使用材料的配方、供应状态和原生质量严格匹配到投入`added_shipping_material_pe_film`。本卡为可用对外退料，不是废物、期末库存或内部循环。仅在总量供应口径下列此输出；投入已扣除该退料时必须省略对应退料输出，不自动抵扣避免生产。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass / kg
- 数量规则：`unused_supply_return_pe_film_return`实际独占归属的 kg / 验收 N，仅归一化一次；已按参考流给出的数量不得再次除以 N。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需事件关联的原生 kg、状态组成、接收或供应门、归属记录及整件组分或对应投入的排他关联，使用协议`cp_supplies`。不提供默认数值或换算因子；其他原生单位须有换算证据后使用。

##### 废物流

###### 废弃原始整卷棕色牛皮箱纸板 (`whole_reel_waste_atomic_case`)

仅在实际独立记录确认“废弃原始整卷棕色牛皮箱纸板”时适用。本卡只覆盖该命名实物状态及自身实际净量、保留组成和接收门。其他部件、碎片、游离液、独立包装及清理载体仍属于`whole_reel_waste`中的身份核实事项；不得移动边界、预设事件、将库存差当废弃，或把仍保留在整体流内的组分另算出口。实际混收流须匹配自身准确身份。原有原生单位数量协议只用于本独占具体情形，其他实际去向分别协调。

- 选定流：废弃原始整卷棕色牛皮箱纸板
- 流属性/单位：Mass / kg
- 数量规则：归属真实原生物理量 / N；cp_reels。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_reels`

范围证据需求：需真实毛净皮水状态接收处理原成品门槛损失换算覆盖责任，不湿毛作干纤维损。

###### 实际独立收集的非包装废纸 (`nonusable_separated_material_paper`)

仅适用于接收门实际独立收集、纸或纸板身份及收集组成已确认的废纸流。非纸层压材料、复合碎屑、铁丝塑料混合物及污染清理固体保留各自余项身份。整书整卷、包装与本独立废纸出口物理互斥，仍留在整体流中的纸组分仅作不可相加审计。不预设制浆、粉碎、分选、回收信用或发生。

- 选定流：废纸（未指定） `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- 流属性/单位：Mass / kg
- 数量规则：归属真实原生物理量 / N；cp_fates。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据需求：需原生混合净质量水来源状态换算接收排除证据，不全部湿千克作纤维。

###### 实际单独收集的纸类包装废物 (`packing_waste_paper_pack`)

仅适用于本节点实际独立废弃、单独收集的纸类包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：包装废弃物，纸类 `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- 流属性/单位：Mass / kg
- 数量规则：归属真实原生物理量 / N；cp_fates。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据需求：需真实材料原生数面积质量皮重持留纸水真实接收承运处理链接，不回收标即抵扣。


###### 实际单独收集的金属包装废物 (`packing_waste_metal_pack`)

仅适用于本节点实际独立废弃、单独收集的金属包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：金属包装废物 `cdda6013-c0c5-4c72-990a-f5668fe71069`
- 流属性/单位：Mass / kg
- 数量规则：归属真实原生物理量 / N；cp_fates。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据需求：需真实材料原生数面积质量皮重持留纸水真实接收承运处理链接，不回收标即抵扣。


###### 实际单独收集的塑料包装废物 (`packing_waste_plastic_pack`)

仅适用于实际独立废弃、单独收集的空塑料包装，保留实际组成、含水状态及接收方。含残留商品的混合包装、污染混合流、设备内保温泡沫、一次性抹布及复合包装不使用本分支；整体混合流中的组分仅作不可相加审计，运输处理责任计入一次。不预设排空、回收、发生或数量。

- 选定流：塑料包装废物 `919351c4-3e25-4092-9934-73ecec021a3b`
- 流属性/单位：Mass / kg
- 数量规则：归属真实原生物理量 / N；cp_fates。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据需求：需真实材料原生数面积质量皮重持留纸水真实接收承运处理链接，不回收标即抵扣。

###### 废弃场所清洁擦拭物，保留实际污染物 (`spent_housekeeping_solids_spent_wipe`)

仅覆盖本过程有独立实际证据的“废弃场所清洁擦拭物，保留实际污染物”。记录自身物态、净量 kg、事件来源及交接门。其他状态或接收方需在`spent_housekeeping_solids`下独立确定身份，本卡不能替代；记录缺失不证明发生或为零。 仅在实际独立收集并转移至废物接收方时启用，不得用于仍保留在整件、包装或收集混合物中的组分。保留组成只作不可相加记录。不预设开包、切割、拆解、主动干燥、回收率或处理路线，处理及运输责任只归属一次。 按接收状态确定实际擦拭物基材及保留污染物。滤芯、散装吸附材料或独立收集液体不是本擦拭物流。废弃整体质量含保留污染物一次，干擦拭物供应质量只作组分审计。

- 选定流：废弃场所清洁擦拭物，保留实际污染物
- 流属性/单位：Mass / kg
- 数量规则：`spent_housekeeping_solids_spent_wipe`实际独占归属的 kg / 验收 N，仅归一化一次；已按参考流给出的数量不得再次除以 N。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据要求：需事件关联的原生 kg、状态组成、接收或供应门、归属记录及整件组分或对应投入的排他关联，使用协议`cp_fates`。不提供默认数值或换算因子；其他原生单位须有换算证据后使用。

###### 收集并送处理的场所清洁水性废水 (`free_liquid_waste_aqueous_cleaning`)

仅覆盖本过程有独立实际证据的“收集并送处理的场所清洁水性废水”。记录自身物态、净量 m3、事件来源及交接门。其他状态或接收方需在`free_liquid_waste`下独立确定身份，本卡不能替代；记录缺失不证明发生或为零。 仅在实际独立收集并转移至废物接收方时启用，不得用于仍保留在整件、包装或收集混合物中的组分。保留组成只作不可相加记录。不预设开包、切割、拆解、主动干燥、回收率或处理路线，处理及运输责任只归属一次。 本卡为场所清洁水性废水，保留实际溶解或悬浮负荷及实测接收体积。排除独立收集的未稀释商品、非水液体、冷凝水或生活污水；若转移前实际混合，另定该真实混合物身份，不得叠加组分体积或称其为纯清洁水。不从供水量推算本数量。

- 选定流：收集并送处理的场所清洁水性废水
- 流属性/单位：Volume / m3
- 数量规则：`free_liquid_waste_aqueous_cleaning`实际独占归属的 m3 / 验收 N，仅归一化一次；已按参考流给出的数量不得再次除以 N。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

范围证据要求：需事件关联的原生 m3、状态组成、接收或供应门、归属记录及整件组分或对应投入的排他关联，使用协议`cp_water`。不提供默认数值或换算因子；其他原生单位须有换算证据后使用。

##### 基本流

## 7. 分配与联产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| finalN | 真实贸易职责 | 核真实拥有转售买方冲销后唯一最终验收，收货卷千克面积价值非服务N。失败取消未完职责保真实资源集合期间N0不除。 |  |
| sourcecohort | 真实贸易职责 | 直接追溯或original_gate_quantity*numerator_driver/正数完整source_all_exit_driver。同兼容完整来源集合含各验收期末未售损坏持留有用其他退回真实整碎混液损失驱动，各原生元数据责任原链接互斥分子成员，非仅验收分母。上期期末到本期期初同量状态来源责任为一次结转非新购上游N或两个终态需求。匹配基线额外阶段损失覆盖责任真实完成缺阶段额外需求外部集成一次。 |  |
| stocklife | 真实贸易职责 | S=opening+net_receipts-closing，NET材料排容器皮重真实回收持留期末一次。总输入S单列匹配未用输出或耗用S-return输入省输出，不数值S+退回双抵。全寿命资产用兼容集合/完整全部用户寿命实测有据剩余终止不确定性更新。继承芯纸退回不扣无关用品。 |  |
| exclusive | 真实贸易职责 | 整部混包自由液有用直接转移保来源接收责任，内容非叠加不收集即避免生产抵扣。唯一货运记录比例各求和项内N一次。 |  |



| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| source_scope_normalization | 非交换商品与服务组合 | 原始外部商品库存、来源归属损失及缺阶段新增上游集成量均保留有证据的实际原始作用域。逐量识别一个实际货批、目标服务集合或已经每参考流，并记录来源目标作用域编号与数量口径。来源集合全部出口分母仅把原始量归属该目标范围，不自动等于目标验收服务N。仅与1 Item(s)服务组合时，以同目标范围原始归属量除正数唯一验收source_same_scope_N，记录验收编号时间冲销证据，取得每参考量。有证单货批source_same_scope_N=1，已每参考量不再除。保留实际原始集成量来源链接，不缩小真实上游补阶段量，不用无关N除整个来源集合；N0责任披露不除。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_reels | brown_kraftliner_full_reel_trade | 真实职责库存状态去向账 | 来源链接原生物理记录 | merchant_id;ownership_purchase_resale_evidence;business_buyer_id;acceptance_gate;acceptance_gate_source;final_acceptance_record_id;reversal_record_ids;unfinished_event_ids;supplier_id;manufacturer_id;source_grade_sku;source_lot;reel_id;parent_package_id;original_full_reel_evidence;uncoated_brown_identity_source;fibre_bom_records;component_composition_basis;component_composition_method;component_composition_source;core_material_source;wrap_material_source;count_extent_EACH_or_TOTAL;count_extent_source;condition_source;receipt_timestamp;storage_start;storage_end;dispatch_timestamp;acceptance_timestamp;timestamp_timezone;time_source;sample_id;sample_time;sample_state;grammage_condition_definition;grammage_condition_source;grammage_representativeness;width_length_source;moisture_definition;moisture_method;moisture_source;water_species_method_scope;matching_nonwater_definition;cobb_definition_source;source_gate_dataset_id;source_gate_reference;source_gate_state;baseline_stage_coverage;baseline_loss_coverage;missing_actual_stage_records;loss_owner;already_included_coverage;source_all_exit_driver_records;prior_period_closing_link;current_period_opening_link;terminal_exit_id;terminal_exit_kind;terminal_source_link;driver_owner;driver_exclusivity_key;numerator_record_links;direct_assignment_evidence;allocation_method;allocation_source;source_state_conversion_evidence;integration_status;integration_link;integration_timestamp;integration_timezone;integration_source;integration_owner;completed_integration_result;receiver_id;receiver_decision;treatment_scope;transfer_id;stream_exclusion_ids;opening_carried_quantity;opening_carried_quantity_unit;opening_carried_quantity_basis;opening_carried_quantity_method;opening_carried_quantity_state;opening_carried_quantity_sample_time;opening_carried_quantity_source;opening_carried_quantity_conversion_factor;opening_carried_quantity_conversion_unit;opening_carried_quantity_conversion_source;reel_count;reel_count_unit;reel_count_basis;reel_count_method;reel_count_state;reel_count_sample_time;reel_count_source;reel_count_conversion_factor;reel_count_conversion_unit;reel_count_conversion_source;reels_per_parent;reels_per_parent_unit;reels_per_parent_basis;reels_per_parent_method;reels_per_parent_state;reels_per_parent_sample_time;reels_per_parent_source;reels_per_parent_conversion_factor;reels_per_parent_conversion_unit;reels_per_parent_conversion_source;repeat_count;repeat_count_unit;repeat_count_basis;repeat_count_method;repeat_count_state;repeat_count_sample_time;repeat_count_source;repeat_count_conversion_factor;repeat_count_conversion_unit;repeat_count_conversion_source;width;width_unit;width_basis;width_method;width_state;width_sample_time;width_source;width_conversion_factor;width_conversion_unit;width_conversion_source;length;length_unit;length_basis;length_method;length_state;length_sample_time;length_source;length_conversion_factor;length_conversion_unit;length_conversion_source;paper_area;paper_area_unit;paper_area_basis;paper_area_method;paper_area_state;paper_area_sample_time;paper_area_source;paper_area_conversion_factor;paper_area_conversion_unit;paper_area_conversion_source;grammage;grammage_unit;grammage_basis;grammage_method;grammage_state;grammage_sample_time;grammage_source;grammage_conversion_factor;grammage_conversion_unit;grammage_conversion_source;conditioning_temperature;conditioning_temperature_unit;conditioning_temperature_basis;conditioning_temperature_method;conditioning_temperature_state;conditioning_temperature_sample_time;conditioning_temperature_source;conditioning_temperature_conversion_factor;conditioning_temperature_conversion_unit;conditioning_temperature_conversion_source;conditioning_relative_humidity;conditioning_relative_humidity_unit;conditioning_relative_humidity_basis;conditioning_relative_humidity_method;conditioning_relative_humidity_state;conditioning_relative_humidity_sample_time;conditioning_relative_humidity_source;conditioning_relative_humidity_conversion_factor;conditioning_relative_humidity_conversion_unit;conditioning_relative_humidity_conversion_source;packed_gross_mass;packed_gross_mass_unit;packed_gross_mass_basis;packed_gross_mass_method;packed_gross_mass_state;packed_gross_mass_sample_time;packed_gross_mass_source;packed_gross_mass_conversion_factor;packed_gross_mass_conversion_unit;packed_gross_mass_conversion_source;core_tare;core_tare_unit;core_tare_basis;core_tare_method;core_tare_state;core_tare_sample_time;core_tare_source;core_tare_conversion_factor;core_tare_conversion_unit;core_tare_conversion_source;wrap_tare;wrap_tare_unit;wrap_tare_basis;wrap_tare_method;wrap_tare_state;wrap_tare_sample_time;wrap_tare_source;wrap_tare_conversion_factor;wrap_tare_conversion_unit;wrap_tare_conversion_source;outer_pack_support_tare;outer_pack_support_tare_unit;outer_pack_support_tare_basis;outer_pack_support_tare_method;outer_pack_support_tare_state;outer_pack_support_tare_sample_time;outer_pack_support_tare_source;outer_pack_support_tare_conversion_factor;outer_pack_support_tare_conversion_unit;outer_pack_support_tare_conversion_source;net_asreceived_paper_mass;net_asreceived_paper_mass_unit;net_asreceived_paper_mass_basis;net_asreceived_paper_mass_method;net_asreceived_paper_mass_state;net_asreceived_paper_mass_sample_time;net_asreceived_paper_mass_source;net_asreceived_paper_mass_conversion_factor;net_asreceived_paper_mass_conversion_unit;net_asreceived_paper_mass_conversion_source;water_mass;water_mass_unit;water_mass_basis;water_mass_method;water_mass_state;water_mass_sample_time;water_mass_source;water_mass_conversion_factor;water_mass_conversion_unit;water_mass_conversion_source;wet_basis_water_fraction;wet_basis_water_fraction_unit;wet_basis_water_fraction_basis;wet_basis_water_fraction_method;wet_basis_water_fraction_state;wet_basis_water_fraction_sample_time;wet_basis_water_fraction_source;wet_basis_water_fraction_conversion_factor;wet_basis_water_fraction_conversion_unit;wet_basis_water_fraction_conversion_source;dry_basis_water_ratio;dry_basis_water_ratio_unit;dry_basis_water_ratio_basis;dry_basis_water_ratio_method;dry_basis_water_ratio_state;dry_basis_water_ratio_sample_time;dry_basis_water_ratio_source;dry_basis_water_ratio_conversion_factor;dry_basis_water_ratio_conversion_unit;dry_basis_water_ratio_conversion_source;dry_nonwater_mass;dry_nonwater_mass_unit;dry_nonwater_mass_basis;dry_nonwater_mass_method;dry_nonwater_mass_state;dry_nonwater_mass_sample_time;dry_nonwater_mass_source;dry_nonwater_mass_conversion_factor;dry_nonwater_mass_conversion_unit;dry_nonwater_mass_conversion_source;component_mass;component_mass_unit;component_mass_basis;component_mass_method;component_mass_state;component_mass_sample_time;component_mass_source;component_mass_conversion_factor;component_mass_conversion_unit;component_mass_conversion_source;component_fraction;component_fraction_unit;component_fraction_basis;component_fraction_method;component_fraction_state;component_fraction_sample_time;component_fraction_source;component_fraction_conversion_factor;component_fraction_conversion_unit;component_fraction_conversion_source;duration;duration_unit;duration_basis;duration_method;duration_state;duration_sample_time;duration_source;duration_conversion_factor;duration_conversion_unit;duration_conversion_source;original_gate_quantity;original_gate_quantity_unit;original_gate_quantity_basis;original_gate_quantity_method;original_gate_quantity_state;original_gate_quantity_sample_time;original_gate_quantity_source;original_gate_quantity_conversion_factor;original_gate_quantity_conversion_unit;original_gate_quantity_conversion_source;assigned_source_quantity;assigned_source_quantity_unit;assigned_source_quantity_basis;assigned_source_quantity_method;assigned_source_quantity_state;assigned_source_quantity_sample_time;assigned_source_quantity_source;assigned_source_quantity_conversion_factor;assigned_source_quantity_conversion_unit;assigned_source_quantity_conversion_source;source_loss_quantity;source_loss_quantity_unit;source_loss_quantity_basis;source_loss_quantity_method;source_loss_quantity_state;source_loss_quantity_sample_time;source_loss_quantity_source;source_loss_quantity_conversion_factor;source_loss_quantity_conversion_unit;source_loss_quantity_conversion_source;baseline_covered_source_quantity;baseline_covered_source_quantity_unit;baseline_covered_source_quantity_basis;baseline_covered_source_quantity_method;baseline_covered_source_quantity_state;baseline_covered_source_quantity_sample_time;baseline_covered_source_quantity_source;baseline_covered_source_quantity_conversion_factor;baseline_covered_source_quantity_conversion_unit;baseline_covered_source_quantity_conversion_source;additional_uncovered_source_quantity;additional_uncovered_source_quantity_unit;additional_uncovered_source_quantity_basis;additional_uncovered_source_quantity_method;additional_uncovered_source_quantity_state;additional_uncovered_source_quantity_sample_time;additional_uncovered_source_quantity_source;additional_uncovered_source_quantity_conversion_factor;additional_uncovered_source_quantity_conversion_unit;additional_uncovered_source_quantity_conversion_source;missing_stage_quantity;missing_stage_quantity_unit;missing_stage_quantity_basis;missing_stage_quantity_method;missing_stage_quantity_state;missing_stage_quantity_sample_time;missing_stage_quantity_source;missing_stage_quantity_conversion_factor;missing_stage_quantity_conversion_unit;missing_stage_quantity_conversion_source;integrated_source_quantity;integrated_source_quantity_unit;integrated_source_quantity_basis;integrated_source_quantity_method;integrated_source_quantity_state;integrated_source_quantity_sample_time;integrated_source_quantity_source;integrated_source_quantity_conversion_factor;integrated_source_quantity_conversion_unit;integrated_source_quantity_conversion_source;numerator_driver;numerator_driver_unit;numerator_driver_basis;numerator_driver_method;numerator_driver_state;numerator_driver_sample_time;numerator_driver_source;numerator_driver_conversion_factor;numerator_driver_conversion_unit;numerator_driver_conversion_source;source_all_exit_driver;source_all_exit_driver_unit;source_all_exit_driver_basis;source_all_exit_driver_method;source_all_exit_driver_state;source_all_exit_driver_sample_time;source_all_exit_driver_source;source_all_exit_driver_conversion_factor;source_all_exit_driver_conversion_unit;source_all_exit_driver_conversion_source;driver_quantity;driver_quantity_unit;driver_quantity_basis;driver_quantity_method;driver_quantity_state;driver_quantity_sample_time;driver_quantity_source;driver_quantity_conversion_factor;driver_quantity_conversion_unit;driver_quantity_conversion_source;accepted_quantity;accepted_quantity_unit;accepted_quantity_basis;accepted_quantity_method;accepted_quantity_state;accepted_quantity_sample_time;accepted_quantity_source;accepted_quantity_conversion_factor;accepted_quantity_conversion_unit;accepted_quantity_conversion_source;return_quantity;return_quantity_unit;return_quantity_basis;return_quantity_method;return_quantity_state;return_quantity_sample_time;return_quantity_source;return_quantity_conversion_factor;return_quantity_conversion_unit;return_quantity_conversion_source;closing_quantity;closing_quantity_unit;closing_quantity_basis;closing_quantity_method;closing_quantity_state;closing_quantity_sample_time;closing_quantity_source;closing_quantity_conversion_factor;closing_quantity_conversion_unit;closing_quantity_conversion_source;useful_other_exit_quantity;useful_other_exit_quantity_unit;useful_other_exit_quantity_basis;useful_other_exit_quantity_method;useful_other_exit_quantity_state;useful_other_exit_quantity_sample_time;useful_other_exit_quantity_source;useful_other_exit_quantity_conversion_factor;useful_other_exit_quantity_conversion_unit;useful_other_exit_quantity_conversion_source;whole_loss_quantity;whole_loss_quantity_unit;whole_loss_quantity_basis;whole_loss_quantity_method;whole_loss_quantity_state;whole_loss_quantity_sample_time;whole_loss_quantity_source;whole_loss_quantity_conversion_factor;whole_loss_quantity_conversion_unit;whole_loss_quantity_conversion_source;fragment_loss_quantity;fragment_loss_quantity_unit;fragment_loss_quantity_basis;fragment_loss_quantity_method;fragment_loss_quantity_state;fragment_loss_quantity_sample_time;fragment_loss_quantity_source;fragment_loss_quantity_conversion_factor;fragment_loss_quantity_conversion_unit;fragment_loss_quantity_conversion_source;mixed_loss_quantity;mixed_loss_quantity_unit;mixed_loss_quantity_basis;mixed_loss_quantity_method;mixed_loss_quantity_state;mixed_loss_quantity_sample_time;mixed_loss_quantity_source;mixed_loss_quantity_conversion_factor;mixed_loss_quantity_conversion_unit;mixed_loss_quantity_conversion_source;liquid_loss_quantity;liquid_loss_quantity_unit;liquid_loss_quantity_basis;liquid_loss_quantity_method;liquid_loss_quantity_state;liquid_loss_quantity_sample_time;liquid_loss_quantity_source;liquid_loss_quantity_conversion_factor;liquid_loss_quantity_conversion_unit;liquid_loss_quantity_conversion_source;cohort_driver;cohort_driver_unit;cohort_driver_basis;cohort_driver_method;cohort_driver_state;cohort_driver_sample_time;cohort_driver_source;cohort_driver_conversion_factor;cohort_driver_conversion_unit;cohort_driver_conversion_source;all_user_driver;all_user_driver_unit;all_user_driver_basis;all_user_driver_method;all_user_driver_state;all_user_driver_sample_time;all_user_driver_source;all_user_driver_conversion_factor;all_user_driver_conversion_unit;all_user_driver_conversion_source;attribution_share;attribution_share_unit;attribution_share_basis;attribution_share_method;attribution_share_state;attribution_share_sample_time;attribution_share_source;attribution_share_conversion_factor;attribution_share_conversion_unit;attribution_share_conversion_source; source_assignment_scope_id; source_assignment_scope_kind; source_quantity_basis; source_target_scope_id; source_same_scope_N; source_same_scope_N_unit; source_same_scope_N_basis; source_same_scope_N_method; source_same_scope_N_state; source_same_scope_N_sample_time; source_same_scope_N_source; source_same_scope_acceptance_ids; source_already_per_reference; raw_integration_scope_link; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | 核来源商户拥有买入转售企业买方冲销后唯一最终验收；N计商业货批非收货卷千克面积价值。失败取消冲销未完职责保真实资源集合期间N0不除。真实等级品号未涂布棕色整卷批BOM宽长定量测试状态对真实纸水芯裹皮重需原生证据非目录典型。不规定商户开卷分切调湿测试。上期期末按同原生量状态来源门槛责任经期末期初链接结转本期期初，不新购入重复来源负担FINALN或同来源集合两个终态需求。直接追溯或正数完整兼容全部终态驱动含验收期末未售损坏持留有用其他退回真实整碎混液损失，各原生元数据责任原链接互斥分子成员。完整森林纤维浆造纸真实干燥卷绕放行原包装门槛含损上游外一次，仅原浆不完整。原生原归属损失基线额外真实缺阶段量需匹配状态换算覆盖责任且完整链前真实完成外部集成链接时间时区来源责任原生集成量结果，非待办。真实服务搬运处理内一次。  原始外部商品库存、来源归属损失及缺阶段新增上游集成量均保留有证据的实际原始作用域。逐量识别一个实际货批、目标服务集合或已经每参考流，并记录来源目标作用域编号与数量口径。来源集合全部出口分母仅把原始量归属该目标范围，不自动等于目标验收服务N。仅与1 Item(s)服务组合时，以同目标范围原始归属量除正数唯一验收source_same_scope_N，记录验收编号时间冲销证据，取得每参考量。有证单货批source_same_scope_N=1，已每参考量不再除。保留实际原始集成量来源链接，不缩小真实上游补阶段量，不用无关N除整个来源集合；N0责任披露不除。 只归属独立确认的实物情形，其他实际去向按来源分别保留；每个原生记录只属于一个交换，任何总量仅作不可相加审计。 | Item(s); 真实卷面积质量定量水时间单位 | 各真实事件样本期间 | 完整职责来源集合截止资产阶段 | 真实商户职责每一共享消费者 | 每参考流 | 各原生量单位基准方法状态采样时间来源换算校准不确定性覆盖 |
| cp_power | brown_kraftliner_full_reel_trade | 真实职责库存状态去向账 | 来源链接原生物理记录 | meter_id;equipment_id;period_start;period_end;timezone;all_consumers;calibration_source;provider_coverage;coverage_owner;meter_opening;meter_opening_unit;meter_opening_basis;meter_opening_method;meter_opening_state;meter_opening_sample_time;meter_opening_source;meter_opening_conversion_factor;meter_opening_conversion_unit;meter_opening_conversion_source;meter_closing;meter_closing_unit;meter_closing_basis;meter_closing_method;meter_closing_state;meter_closing_sample_time;meter_closing_source;meter_closing_conversion_factor;meter_closing_conversion_unit;meter_closing_conversion_source;electricity;electricity_unit;electricity_basis;electricity_method;electricity_state;electricity_sample_time;electricity_source;electricity_conversion_factor;electricity_conversion_unit;electricity_conversion_source;power;power_unit;power_basis;power_method;power_state;power_sample_time;power_source;power_conversion_factor;power_conversion_unit;power_conversion_source;duration;duration_unit;duration_basis;duration_method;duration_state;duration_sample_time;duration_source;duration_conversion_factor;duration_conversion_unit;duration_conversion_source;cohort_driver;cohort_driver_unit;cohort_driver_basis;cohort_driver_method;cohort_driver_state;cohort_driver_sample_time;cohort_driver_source;cohort_driver_conversion_factor;cohort_driver_conversion_unit;cohort_driver_conversion_source;all_user_driver;all_user_driver_unit;all_user_driver_basis;all_user_driver_method;all_user_driver_state;all_user_driver_sample_time;all_user_driver_source;all_user_driver_conversion_factor;all_user_driver_conversion_unit;all_user_driver_conversion_source;attribution_share;attribution_share_unit;attribution_share_basis;attribution_share_method;attribution_share_state;attribution_share_sample_time;attribution_share_source;attribution_share_conversion_factor;attribution_share_conversion_unit;attribution_share_conversion_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 采真实表差有据功率时长原生换算完整全部消费者驱动待机清洁。完整服务覆盖仅替换已覆盖直接电资产。来源造纸测试气候非商户耗用。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kWh | 各真实事件样本期间 | 完整职责来源集合截止资产阶段 | 真实商户职责每一共享消费者 | 每参考流 | 各原生量单位基准方法状态采样时间来源换算校准不确定性覆盖 |
| cp_water | brown_kraftliner_full_reel_trade | 真实职责库存状态去向账 | 来源链接原生物理记录 | water_source_identity;composition;composition_method;composition_source;receiver_id;collection_id;transfer_id;treatment_scope;stream_exclusion_ids;supplied_volume;supplied_volume_unit;supplied_volume_basis;supplied_volume_method;supplied_volume_state;supplied_volume_sample_time;supplied_volume_source;supplied_volume_conversion_factor;supplied_volume_conversion_unit;supplied_volume_conversion_source;retained_fluid;retained_fluid_unit;retained_fluid_basis;retained_fluid_method;retained_fluid_state;retained_fluid_sample_time;retained_fluid_source;retained_fluid_conversion_factor;retained_fluid_conversion_unit;retained_fluid_conversion_source;free_liquid_volume;free_liquid_volume_unit;free_liquid_volume_basis;free_liquid_volume_method;free_liquid_volume_state;free_liquid_volume_sample_time;free_liquid_volume_source;free_liquid_volume_conversion_factor;free_liquid_volume_conversion_unit;free_liquid_volume_conversion_source;free_liquid_mass;free_liquid_mass_unit;free_liquid_mass_basis;free_liquid_mass_method;free_liquid_mass_state;free_liquid_mass_sample_time;free_liquid_mass_source;free_liquid_mass_conversion_factor;free_liquid_mass_conversion_unit;free_liquid_mass_conversion_source;direct_water;direct_water_unit;direct_water_basis;direct_water_method;direct_water_state;direct_water_sample_time;direct_water_source;direct_water_conversion_factor;direct_water_conversion_unit;direct_water_conversion_source;density;density_unit;density_basis;density_method;density_state;density_sample_time;density_source;density_conversion_factor;density_conversion_unit;density_conversion_source;temperature;temperature_unit;temperature_basis;temperature_method;temperature_state;temperature_sample_time;temperature_source;temperature_conversion_factor;temperature_conversion_unit;temperature_conversion_source;cohort_driver;cohort_driver_unit;cohort_driver_basis;cohort_driver_method;cohort_driver_state;cohort_driver_sample_time;cohort_driver_source;cohort_driver_conversion_factor;cohort_driver_conversion_unit;cohort_driver_conversion_source;all_user_driver;all_user_driver_unit;all_user_driver_basis;all_user_driver_method;all_user_driver_state;all_user_driver_sample_time;all_user_driver_source;all_user_driver_conversion_factor;all_user_driver_conversion_unit;all_user_driver_conversion_source;attribution_share;attribution_share_unit;attribution_share_basis;attribution_share_method;attribution_share_state;attribution_share_sample_time;attribution_share_source;attribution_share_conversion_factor;attribution_share_conversion_unit;attribution_share_conversion_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 分计真实供应持留自由收集直接水及原生基准状态来源。仅匹配组成密度温度单位来源换体积质量。纸水为继承库存，持留载体液非叠加未知余差非蒸发。需真实接收直接介质证据。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | m3; 真实密度温度组成单位 | 各真实事件样本期间 | 完整职责来源集合截止资产阶段 | 真实商户职责每一共享消费者 | 每参考流 | 各原生量单位基准方法状态采样时间来源换算校准不确定性覆盖 |
| cp_supplies | brown_kraftliner_full_reel_trade | 真实职责库存状态去向账 | 来源链接原生物理记录 | supply_sku;formulation;carrier_identity;composition_basis;composition_method;composition_source;stock_convention;same_scope_supply_match;return_id;receiver_id;opening;opening_unit;opening_basis;opening_method;opening_state;opening_sample_time;opening_source;opening_conversion_factor;opening_conversion_unit;opening_conversion_source;receipt_gross;receipt_gross_unit;receipt_gross_basis;receipt_gross_method;receipt_gross_state;receipt_gross_sample_time;receipt_gross_source;receipt_gross_conversion_factor;receipt_gross_conversion_unit;receipt_gross_conversion_source;receipt_container_tare;receipt_container_tare_unit;receipt_container_tare_basis;receipt_container_tare_method;receipt_container_tare_state;receipt_container_tare_sample_time;receipt_container_tare_source;receipt_container_tare_conversion_factor;receipt_container_tare_conversion_unit;receipt_container_tare_conversion_source;net_receipts;net_receipts_unit;net_receipts_basis;net_receipts_method;net_receipts_state;net_receipts_sample_time;net_receipts_source;net_receipts_conversion_factor;net_receipts_conversion_unit;net_receipts_conversion_source;closing;closing_unit;closing_basis;closing_method;closing_state;closing_sample_time;closing_source;closing_conversion_factor;closing_conversion_unit;closing_conversion_source;unused_out;unused_out_unit;unused_out_basis;unused_out_method;unused_out_state;unused_out_sample_time;unused_out_source;unused_out_conversion_factor;unused_out_conversion_unit;unused_out_conversion_source;used;used_unit;used_basis;used_method;used_state;used_sample_time;used_source;used_conversion_factor;used_conversion_unit;used_conversion_source;density;density_unit;density_basis;density_method;density_state;density_sample_time;density_source;density_conversion_factor;density_conversion_unit;density_conversion_source;temperature;temperature_unit;temperature_basis;temperature_method;temperature_state;temperature_sample_time;temperature_source;temperature_conversion_factor;temperature_conversion_unit;temperature_conversion_source;unit_mass;unit_mass_unit;unit_mass_basis;unit_mass_method;unit_mass_state;unit_mass_sample_time;unit_mass_source;unit_mass_conversion_factor;unit_mass_conversion_unit;unit_mass_conversion_source;unit_length;unit_length_unit;unit_length_basis;unit_length_method;unit_length_state;unit_length_sample_time;unit_length_source;unit_length_conversion_factor;unit_length_conversion_unit;unit_length_conversion_source;unit_area;unit_area_unit;unit_area_basis;unit_area_method;unit_area_state;unit_area_sample_time;unit_area_source;unit_area_conversion_factor;unit_area_conversion_unit;unit_area_conversion_source;component_fraction;component_fraction_unit;component_fraction_basis;component_fraction_method;component_fraction_state;component_fraction_sample_time;component_fraction_source;component_fraction_conversion_factor;component_fraction_conversion_unit;component_fraction_conversion_source;cohort_driver;cohort_driver_unit;cohort_driver_basis;cohort_driver_method;cohort_driver_state;cohort_driver_sample_time;cohort_driver_source;cohort_driver_conversion_factor;cohort_driver_conversion_unit;cohort_driver_conversion_source;all_user_driver;all_user_driver_unit;all_user_driver_basis;all_user_driver_method;all_user_driver_state;all_user_driver_sample_time;all_user_driver_source;all_user_driver_conversion_factor;all_user_driver_conversion_unit;all_user_driver_conversion_source;attribution_share;attribution_share_unit;attribution_share_basis;attribution_share_method;attribution_share_state;attribution_share_sample_time;attribution_share_source;attribution_share_conversion_factor;attribution_share_conversion_unit;attribution_share_conversion_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | S=opening+net_receipts-closing且真实回收持留期末一次。NET接收排容器皮重。总输入S单列匹配同范围未用外退输出，或耗用S-return输入省输出，不数值S+退回双抵。仅匹配独立用品扣减非继承芯裹纸资产退回。产废使用保完整供应上游。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kg; 真实原生用品比例密度温度单位 | 各真实事件样本期间 | 完整职责来源集合截止资产阶段 | 真实商户职责每一共享消费者 | 每参考流 | 各原生量单位基准方法状态采样时间来源换算校准不确定性覆盖 |
| cp_provider | brown_kraftliner_full_reel_trade | 真实职责库存状态去向账 | 来源链接原生物理记录 | provider_id;job_id;completion_evidence;scope_start;scope_end;electricity_coverage;asset_life_coverage;transport_empty_coverage;receiver_treatment_coverage;coverage_owner;exclusion_links;native_job_quantity;native_job_quantity_unit;native_job_quantity_basis;native_job_quantity_method;native_job_quantity_state;native_job_quantity_sample_time;native_job_quantity_source;native_job_quantity_conversion_factor;native_job_quantity_conversion_unit;native_job_quantity_conversion_source;cohort_driver;cohort_driver_unit;cohort_driver_basis;cohort_driver_method;cohort_driver_state;cohort_driver_sample_time;cohort_driver_source;cohort_driver_conversion_factor;cohort_driver_conversion_unit;cohort_driver_conversion_source;all_user_driver;all_user_driver_unit;all_user_driver_basis;all_user_driver_method;all_user_driver_state;all_user_driver_sample_time;all_user_driver_source;all_user_driver_conversion_factor;all_user_driver_conversion_unit;all_user_driver_conversion_source;attribution_share;attribution_share_unit;attribution_share_basis;attribution_share_method;attribution_share_state;attribution_share_sample_time;attribution_share_source;attribution_share_conversion_factor;attribution_share_conversion_unit;attribution_share_conversion_source | 确认完成物理原生作业量属性单位真实完整资源资产承运空驶接收门槛。完整服务仅替换已覆盖直接责任，部分职责保真实未覆盖清单。不费用卷面积定量换算。 | Item(s); 真实服务方原生单位 | 各真实事件样本期间 | 完整职责来源集合截止资产阶段 | 真实商户职责每一共享消费者 | 每参考流 | 各原生量单位基准方法状态采样时间来源换算校准不确定性覆盖 |
| cp_assets | brown_kraftliner_full_reel_trade | 真实职责库存状态去向账 | 来源链接原生物理记录 | asset_id;asset_bom_scope;manufacture_coverage;maintenance_cleaning_records;replacement_records;eol_scope;all_users_periods;remaining_use_evidence;termination_evidence;uncertainty;sensitivity;update_source;provider_coverage;full_life_burden;full_life_burden_unit;full_life_burden_basis;full_life_burden_method;full_life_burden_state;full_life_burden_sample_time;full_life_burden_source;full_life_burden_conversion_factor;full_life_burden_conversion_unit;full_life_burden_conversion_source;asset_equivalent;asset_equivalent_unit;asset_equivalent_basis;asset_equivalent_method;asset_equivalent_state;asset_equivalent_sample_time;asset_equivalent_source;asset_equivalent_conversion_factor;asset_equivalent_conversion_unit;asset_equivalent_conversion_source;cohort_used_driver;cohort_used_driver_unit;cohort_used_driver_basis;cohort_used_driver_method;cohort_used_driver_state;cohort_used_driver_sample_time;cohort_used_driver_source;cohort_used_driver_conversion_factor;cohort_used_driver_conversion_unit;cohort_used_driver_conversion_source;all_user_used_driver;all_user_used_driver_unit;all_user_used_driver_basis;all_user_used_driver_method;all_user_used_driver_state;all_user_used_driver_sample_time;all_user_used_driver_source;all_user_used_driver_conversion_factor;all_user_used_driver_conversion_unit;all_user_used_driver_conversion_source;observed_history_driver;observed_history_driver_unit;observed_history_driver_basis;observed_history_driver_method;observed_history_driver_state;observed_history_driver_sample_time;observed_history_driver_source;observed_history_driver_conversion_factor;observed_history_driver_conversion_unit;observed_history_driver_conversion_source;remaining_driver;remaining_driver_unit;remaining_driver_basis;remaining_driver_method;remaining_driver_state;remaining_driver_sample_time;remaining_driver_source;remaining_driver_conversion_factor;remaining_driver_conversion_unit;remaining_driver_conversion_source;complete_lifetime_driver;complete_lifetime_driver_unit;complete_lifetime_driver_basis;complete_lifetime_driver_method;complete_lifetime_driver_state;complete_lifetime_driver_sample_time;complete_lifetime_driver_source;complete_lifetime_driver_conversion_factor;complete_lifetime_driver_conversion_unit;complete_lifetime_driver_conversion_source;cohort_driver;cohort_driver_unit;cohort_driver_basis;cohort_driver_method;cohort_driver_state;cohort_driver_sample_time;cohort_driver_source;cohort_driver_conversion_factor;cohort_driver_conversion_unit;cohort_driver_conversion_source;all_user_driver;all_user_driver_unit;all_user_driver_basis;all_user_driver_method;all_user_driver_state;all_user_driver_sample_time;all_user_driver_source;all_user_driver_conversion_factor;all_user_driver_conversion_unit;all_user_driver_conversion_source;attribution_share;attribution_share_unit;attribution_share_basis;attribution_share_method;attribution_share_state;attribution_share_sample_time;attribution_share_source;attribution_share_conversion_factor;attribution_share_conversion_unit;attribution_share_conversion_source | 各真实原生资产作业当量使用全部用户实测剩余寿命驱动有独立单位基准方法状态时间来源换算。完整分母=实测历史+有据兼容剩余或有据全部用户期间终止。含制造维护清洁更换终结不确定性敏感性更新，非仅验收期间纸存储寿命。周转服务已覆盖载体一个责任，继承芯不假新增运行资产。 | Item(s); 真实兼容驱动当量单位 | 各真实事件样本期间 | 完整职责来源集合截止资产阶段 | 真实商户职责每一共享消费者 | 每参考流 | 各原生量单位基准方法状态采样时间来源换算校准不确定性覆盖 |
| cp_freight | brown_kraftliner_full_reel_trade | 真实职责库存状态去向账 | 来源链接原生物理记录 | load_id;leg_id;unique_load_leg_key;load_extent_EACH_or_TOTAL;carrier_id;actual_cargo_pack_support;tare_exclusion_evidence;empty_return_coverage;provider_coverage;repeat_count;repeat_count_unit;repeat_count_basis;repeat_count_method;repeat_count_state;repeat_count_sample_time;repeat_count_source;repeat_count_conversion_factor;repeat_count_conversion_unit;repeat_count_conversion_source;gross_load;gross_load_unit;gross_load_basis;gross_load_method;gross_load_state;gross_load_sample_time;gross_load_source;gross_load_conversion_factor;gross_load_conversion_unit;gross_load_conversion_source;noncargo_tare;noncargo_tare_unit;noncargo_tare_basis;noncargo_tare_method;noncargo_tare_state;noncargo_tare_sample_time;noncargo_tare_source;noncargo_tare_conversion_factor;noncargo_tare_conversion_unit;noncargo_tare_conversion_source;direct_payload;direct_payload_unit;direct_payload_basis;direct_payload_method;direct_payload_state;direct_payload_sample_time;direct_payload_source;direct_payload_conversion_factor;direct_payload_conversion_unit;direct_payload_conversion_source;distance;distance_unit;distance_basis;distance_method;distance_state;distance_sample_time;distance_source;distance_conversion_factor;distance_conversion_unit;distance_conversion_source;cohort_driver;cohort_driver_unit;cohort_driver_basis;cohort_driver_method;cohort_driver_state;cohort_driver_sample_time;cohort_driver_source;cohort_driver_conversion_factor;cohort_driver_conversion_unit;cohort_driver_conversion_source;all_user_driver;all_user_driver_unit;all_user_driver_basis;all_user_driver_method;all_user_driver_state;all_user_driver_sample_time;all_user_driver_source;all_user_driver_conversion_factor;all_user_driver_conversion_unit;all_user_driver_conversion_source;attribution_share;attribution_share_unit;attribution_share_basis;attribution_share_method;attribution_share_state;attribution_share_sample_time;attribution_share_source;attribution_share_conversion_factor;attribution_share_conversion_unit;attribution_share_conversion_source | 原生独立毛非货物皮直接载荷距离次数需自身单位基准方法状态时间来源换算。保承运纸水芯裹外包货物载体。EACH真实有据次数一次TOTAL不变，各唯一货载路段该兼容集合全部用户物理驱动比例在各求和项内，总和除正N一次。父子服务空程互斥，调湿干纸估计不默认真实货物。 | kg*km; 真实原生质量距离次数单位 | 各真实事件样本期间 | 完整职责来源集合截止资产阶段 | 真实商户职责每一共享消费者 | 每参考流 | 各原生量单位基准方法状态采样时间来源换算校准不确定性覆盖 |
| cp_fates | brown_kraftliner_full_reel_trade | 真实职责库存状态去向账 | 来源链接原生物理记录 | parent_reel_id;material_identity;source_lot_link;composition_basis;composition_method;composition_source;source_gate_link;state_change_conversion_evidence;receiver_id;receiver_classification;decision_source;treatment_scope;carrier_id;transfer_id;content_transfer_link;stream_exclusion_ids;sample_id;sample_time;sample_state;moisture_definition;moisture_method;moisture_source;water_species_method_scope;matching_nonwater_definition;gross_waste;gross_waste_unit;gross_waste_basis;gross_waste_method;gross_waste_state;gross_waste_sample_time;gross_waste_source;gross_waste_conversion_factor;gross_waste_conversion_unit;gross_waste_conversion_source;tare;tare_unit;tare_basis;tare_method;tare_state;tare_sample_time;tare_source;tare_conversion_factor;tare_conversion_unit;tare_conversion_source;net_material;net_material_unit;net_material_basis;net_material_method;net_material_state;net_material_sample_time;net_material_source;net_material_conversion_factor;net_material_conversion_unit;net_material_conversion_source;paper_fraction;paper_fraction_unit;paper_fraction_basis;paper_fraction_method;paper_fraction_state;paper_fraction_sample_time;paper_fraction_source;paper_fraction_conversion_factor;paper_fraction_conversion_unit;paper_fraction_conversion_source;dry_cleanup_carrier;dry_cleanup_carrier_unit;dry_cleanup_carrier_basis;dry_cleanup_carrier_method;dry_cleanup_carrier_state;dry_cleanup_carrier_sample_time;dry_cleanup_carrier_source;dry_cleanup_carrier_conversion_factor;dry_cleanup_carrier_conversion_unit;dry_cleanup_carrier_conversion_source;retained_fluid;retained_fluid_unit;retained_fluid_basis;retained_fluid_method;retained_fluid_state;retained_fluid_sample_time;retained_fluid_source;retained_fluid_conversion_factor;retained_fluid_conversion_unit;retained_fluid_conversion_source;retained_paper;retained_paper_unit;retained_paper_basis;retained_paper_method;retained_paper_state;retained_paper_sample_time;retained_paper_source;retained_paper_conversion_factor;retained_paper_conversion_unit;retained_paper_conversion_source;retained_core;retained_core_unit;retained_core_basis;retained_core_method;retained_core_state;retained_core_sample_time;retained_core_source;retained_core_conversion_factor;retained_core_conversion_unit;retained_core_conversion_source;retained_wrap;retained_wrap_unit;retained_wrap_basis;retained_wrap_method;retained_wrap_state;retained_wrap_sample_time;retained_wrap_source;retained_wrap_conversion_factor;retained_wrap_conversion_unit;retained_wrap_conversion_source;actual_source_paper_equivalent;actual_source_paper_equivalent_unit;actual_source_paper_equivalent_basis;actual_source_paper_equivalent_method;actual_source_paper_equivalent_state;actual_source_paper_equivalent_sample_time;actual_source_paper_equivalent_source;actual_source_paper_equivalent_conversion_factor;actual_source_paper_equivalent_conversion_unit;actual_source_paper_equivalent_conversion_source;actual_non_source_added_material;actual_non_source_added_material_unit;actual_non_source_added_material_basis;actual_non_source_added_material_method;actual_non_source_added_material_state;actual_non_source_added_material_sample_time;actual_non_source_added_material_source;actual_non_source_added_material_conversion_factor;actual_non_source_added_material_conversion_unit;actual_non_source_added_material_conversion_source;water_mass;water_mass_unit;water_mass_basis;water_mass_method;water_mass_state;water_mass_sample_time;water_mass_source;water_mass_conversion_factor;water_mass_conversion_unit;water_mass_conversion_source;wet_basis_water_fraction;wet_basis_water_fraction_unit;wet_basis_water_fraction_basis;wet_basis_water_fraction_method;wet_basis_water_fraction_state;wet_basis_water_fraction_sample_time;wet_basis_water_fraction_source;wet_basis_water_fraction_conversion_factor;wet_basis_water_fraction_conversion_unit;wet_basis_water_fraction_conversion_source;dry_basis_water_ratio;dry_basis_water_ratio_unit;dry_basis_water_ratio_basis;dry_basis_water_ratio_method;dry_basis_water_ratio_state;dry_basis_water_ratio_sample_time;dry_basis_water_ratio_source;dry_basis_water_ratio_conversion_factor;dry_basis_water_ratio_conversion_unit;dry_basis_water_ratio_conversion_source;cohort_driver;cohort_driver_unit;cohort_driver_basis;cohort_driver_method;cohort_driver_state;cohort_driver_sample_time;cohort_driver_source;cohort_driver_conversion_factor;cohort_driver_conversion_unit;cohort_driver_conversion_source;all_user_driver;all_user_driver_unit;all_user_driver_basis;all_user_driver_method;all_user_driver_state;all_user_driver_sample_time;all_user_driver_source;all_user_driver_conversion_factor;all_user_driver_conversion_unit;all_user_driver_conversion_source;attribution_share;attribution_share_unit;attribution_share_basis;attribution_share_method;attribution_share_state;attribution_share_sample_time;attribution_share_source;attribution_share_conversion_factor;attribution_share_conversion_unit;attribution_share_conversion_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 真实整独立有用不可用芯裹混合自由液直接转移需原生量单位基准方法状态采样时间来源换算接收决策。整混Waste持留纸水芯裹为内容审计非额外出口，不假常规去除再浆。来源纸当量需真实原收集水BOM污染状态，不湿毛作干纤维。仅同样本水定义原生百分比因子，LOD非自动水。未知差阻闭合不推腐解VOC物种自动回收抵扣，真实接收处理一次。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kg; 真实原生纸芯裹水单位 | 各真实事件样本期间 | 完整职责来源集合截止资产阶段 | 真实商户职责每一共享消费者 | 每参考流 | 各原生量单位基准方法状态采样时间来源换算校准不确定性覆盖 |
| cp_species | brown_kraftliner_full_reel_trade | 真实职责库存状态去向账 | 来源链接原生物理记录 | species_identity;receiving_medium;particle_size_basis;measurement_source;factor_source;factor_complete;composition_basis;composition_method;composition_source;fate_basis;fate_source;coverage_owner;contained_receiver_exclusion;species_mass;species_mass_unit;species_mass_basis;species_mass_method;species_mass_state;species_mass_sample_time;species_mass_source;species_mass_conversion_factor;species_mass_conversion_unit;species_mass_conversion_source;activity;activity_unit;activity_basis;activity_method;activity_state;activity_sample_time;activity_source;activity_conversion_factor;activity_conversion_unit;activity_conversion_source;factor;factor_unit;factor_basis;factor_method;factor_state;factor_sample_time;factor_conversion_factor;factor_conversion_unit;factor_conversion_source;component_fraction;component_fraction_unit;component_fraction_basis;component_fraction_method;component_fraction_state;component_fraction_sample_time;component_fraction_source;component_fraction_conversion_factor;component_fraction_conversion_unit;component_fraction_conversion_source;fate_fraction;fate_fraction_unit;fate_fraction_basis;fate_fraction_method;fate_fraction_state;fate_fraction_sample_time;fate_fraction_source;fate_fraction_conversion_factor;fate_fraction_conversion_unit;fate_fraction_conversion_source;cohort_driver;cohort_driver_unit;cohort_driver_basis;cohort_driver_method;cohort_driver_state;cohort_driver_sample_time;cohort_driver_source;cohort_driver_conversion_factor;cohort_driver_conversion_unit;cohort_driver_conversion_source;all_user_driver;all_user_driver_unit;all_user_driver_basis;all_user_driver_method;all_user_driver_state;all_user_driver_sample_time;all_user_driver_source;all_user_driver_conversion_factor;all_user_driver_conversion_unit;all_user_driver_conversion_source;attribution_share;attribution_share_unit;attribution_share_basis;attribution_share_method;attribution_share_state;attribution_share_sample_time;attribution_share_source;attribution_share_conversion_factor;attribution_share_conversion_unit;attribution_share_conversion_source | 用真实具名物种颗粒介质计量兼容有据化学活动因子，各操作数原生元数据覆盖。完整因子已覆盖组成去向比例不再乘该比例。捕集纤维持留液为容纳材料非直接释放，不得仅依据库存水分差额或纸中碳含量推定排放。 | kg; 真实兼容活动比例单位 | 各真实事件样本期间 | 完整职责来源集合截止资产阶段 | 真实商户职责每一共享消费者 | 每参考流 | 各原生量单位基准方法状态采样时间来源换算校准不确定性覆盖 |

### 计算规则

| rule_id | 适用对象 | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | 全部交换 | 每参考=真实归属原生物理量/正N，即来源核实冲销后唯一最终拥有转售企业验收。N0保真实职责无归一结果，非零负担。 | 原生量最终门槛冲销记录 | 每1 Item(s)服务原生量 |  |
| reel_mass_area | 非交换商品 | 收到净纸质量=唯一包装卷(毛-芯皮-裹皮-外包载体皮)之和，EACH真实有据次数一次TOTAL不变父子互斥。纸面积=唯一整卷真实兼容宽*长；面积*真实代表定量仅同纸调湿水状态且有据原生单位因子才转纸质量。调湿定量非干纤维质量Cobb吸水非水分比例名义厚*密度非实测卷质量。不规定商户开卷计量，可追溯供应记录可用。 | cp_reels;原生宽长数量定量毛芯裹皮证据 | 互斥净纸面积芯裹审计 |  |
| water_basis | 真实库存去向 | 先原生百分比换比。w_wet=水/asreceived、w_dry=水/匹配干非水；dry_nonwater=asreceived*(1-w_wet)，仅同样本状态定义w_wet=w_dry/(1+w_dry)。LOD可含其他挥发物非自动水。无真实BOM组成干非水不自动干纤维。水变调湿定量Cobb不证明纤维损蒸气。 | cp_reels;cp_fates;同样本水BOM证据 | 兼容原生纸水状态审计 |  |
| original_source | 服务外商品 | 直接追溯或assigned_source=original_gate_quantity*numerator_driver/正数完整source_all_exit_driver。记各兼容互斥终态需求含期末未售损坏持留有用其他退回真实整碎混液损失，自身原生元数据原链接责任互斥分子成员，非仅验收分母。链接期末期初同量状态来源责任结转非新上游购入FINALN两个终态需求。匹配原归属损失基线额外成品状态换算阶段损失覆盖责任。真实缺阶段额外需求须完整链前真实外部集成一次具COMPLETED状态链接时间时区来源责任原生集成量结果。 | cp_reels;完整原生来源覆盖换算集成记录 | 完成外部原门槛阶段损失集成 |  |
| physical_closure | 真实库存去向 | 来源纸水芯裹审计闭合到持留验收退回期末整Waste混Waste独立有用不可用包装自由液直接物种明确未知。各项自身原生单位基准方法状态时间来源换算，持留内容不额外出口。真实新增水污染分原纸当量，未知差非排放处置腐解。真实接收处理一次不自动抵扣。 | cp_reels;cp_fates;cp_water;cp_species;链接载体 | 互斥物理来源接收闭合 |  |
| supplies_assets | 独立用品资产 | S=opening+net_receipts-closing，NET接收排容器皮重持留期末回收一次。总S输入单列匹配未用输出或耗用S-return输入省输出。资产负担=full_life_burden*兼容cohort_used_driver/complete_lifetime_driver；寿命=observed_history_driver+有据remaining_driver或有据全部用户期间终止。各负担当量驱动自身原生元数据单位换算，正兼容分母不确定性敏感性更新。 | cp_supplies;cp_assets;原生库存完整历史 | 归属用品全寿命资产 |  |
| freight_sum | packed_freight | 货运=唯一货载路段求和[(换算真实载荷或换算毛-非货物皮重，保货物纸水芯裹包载体)*(仅EACH真实有据数TOTAL不变)*换算真实距离*该记录物理因果比例]/正N。各独立操作数自身原生单位基准方法状态时间来源换算。比例各求和项内N一次父子服务空程互斥。 | cp_freight;原生唯一货载路段驱动 | 每1 Item(s)服务真实kg*km |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| identity | 全部交换 | 最终数据前核真实具体门槛原生属性单位，目录品牌值非身份证明。 | 完整真实流支持前景记录 |
| reel_state | 库存去向 | 真实品号BOM净纸芯裹宽长代表定量条件水样本定义，非年度典型Cobb厚密度默认。 | 真实供应卷称BOM测试样本接收证据 |
| complete_chain | 来源服务 | 真实完成来源门槛阶段损失基线额外集成外一次具原生量覆盖责任链接时间来源结果非待办，完整真实服务资产承运接收职责内一次。 | 原生全部终态换算责任完成集成资源寿命库存承运接收记录 |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| warehouse_power | brown_kraftliner_full_reel_trade | 电表记录对应哪个供电点、交直流状态、电压和供应方数据集？核对已列交流电卡与其他有证据的供电，不得将交流电 UUID 用于其他能源。 真实照明起重记录设备待机清洁职责。供应造纸干燥卷绕下游印刷瓦楞非商户作业，不假主动气候控制。 范围证据需求：需计量设备服务期间全部消费者物理归属，不纸强度测试气候能因子。 计量证据：协议`cp_power`；原记录口径 Energy / kWh。原数量约束“归属真实原生物理量 / N；cp_power。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`warehouse_power_ac`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_power`; 实际来源关联原生记录 |
| housekeeping_water | brown_kraftliner_full_reel_trade | 供应记录是否证明为处理自来水，还是其他明确水质或水源？核实供水状态及交接门，不得用自来水卡替代其他水。 仅真实场地搬运设备水。纸水分为继承商品内容非新水输入规定商户调湿洗涤。 范围证据需求：需供应持留自由液直接去向来源接收证据，Cobb吸水水余差不量化服务水。 计量证据：协议`cp_water`；原记录口径 Volume / m3。原数量约束“归属真实原生物理量 / N；cp_water。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`housekeeping_water_liquid_tap`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_water`; 实际来源关联原生记录 |
| housekeeping_materials | brown_kraftliner_full_reel_trade | 取得下述清洁或维护职责实际采购品号、配方或安全数据表、供应浓度、物态、用途及库存领用记录。逐项核实洗涤剂以外的实际材料；不得由本 PCR 预设药剂、滤材或剂量。 仅真实独立库房用品过滤吸附物。纸纤维填料施胶剂继承芯裹包为商品内容非服务制造输入。 范围证据需求：需真实原生用品品号配方载体库存换算来源，不通用清洁剂剂量。 计量证据：协议`cp_supplies`；原记录口径 Mass / kg。原数量约束“归属真实原生物理量 / N；cp_supplies。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`housekeeping_materials_synthetic_detergent`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_supplies`; 实际来源关联原生记录 |
| added_shipping_material | brown_kraftliner_full_reel_trade | 取得包装物料单或规格、材料或复合层身份及新增与继承包装的责任。按该记录逐项确定尚缺的套袋、封口、标签、捆扎带或支撑件身份；一体复合包装不得拆成可相加的材料交换。 仅发运真实新增外裹带标签护物。原卷芯供应裹包生产留继承商品范围，不规定换芯开卷重包。周转载体按全寿命。 范围证据需求：需原生材料数量面积长度质量皮重库存记录，分原新增包装与纸净量。 计量证据：协议`cp_supplies`；原记录口径 Mass / kg。原数量约束“归属真实原生物理量 / N；cp_supplies。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`added_shipping_material_pe_film`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_supplies`; 实际来源关联原生记录 |
| external_physical_jobs | brown_kraftliner_full_reel_trade | 取得本记录中明列各职责的供应商合同或完成结果记录、原生计量物理单位及包含资源。确定各项服务结果身份；检验、清洁、装卸为不同服务，价格或小时不得改称件数。 真实原生存装作业且资源资产承运接收覆盖完整。纸转换分切印刷瓦楞干燥不藏不明搬运服务。 范围证据需求：需真实完成量单位互斥服务范围，不价格卷数面积定量。 计量证据：协议`cp_provider`；原记录口径 Count / Item(s)。原数量约束“归属真实原生物理量 / N；cp_provider。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_provider`; 实际来源关联原生记录 |
| shared_full_life_assets | brown_kraftliner_full_reel_trade | 对本记录中明列的每种资产取得资产编号、配置及匹配的完整生命周期数据集。待补的是各资产或服务身份及全寿命全部使用者分母；仓库、叉车、托盘不能共用一条计数交换，也不能套用默认寿命。 真实设施货架夹吊记录设备周转载体全部用户期间含制造维护清洁更换终结。交易整卷继承芯在商品范围，不默认新增商户资产输入。 范围证据需求：需原生当量驱动历史实测有据剩余寿命终止全部用户覆盖，不存储寿命保修默认。 计量证据：协议`cp_assets`；原记录口径 Count / Item(s)。原数量约束“归属真实原生物理量 / N；cp_assets。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_assets`; 实际来源关联原生记录 |
| packed_freight | brown_kraftliner_full_reel_trade | 对实际入库、出库、退运及废物运输段取得运输方式或车辆、温控服务、起终点、实际载荷和距离及供应方覆盖。方式或配置未明确前不能选择运输流；不同运输方式不得合成一条 kg*km 流。 真实载荷保承运纸水芯裹外包货物载体，仅扣车辆非货物皮重，调湿面积乘定量或干纤维非自动发运载荷。 范围证据需求：需唯一原生货载路段EACH/TOTAL次数毛皮载荷距离该记录比例求和内N一次。 计量证据：协议`cp_freight`；原记录口径 Mass * distance / kg*km。原数量约束“归属真实原生物理量 / N；cp_freight。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_freight`; 实际来源关联原生记录 |
| unused_supply_return | brown_kraftliner_full_reel_trade | 将对外退料凭据匹配到唯一投入品号、状态、原生单位及接收方。采用净消耗投入时省略对应退料交换；商品退货及期末库存另作审计记录。 仅总输入法真实同范围未用清洁新增包装用品。完整有用卷留库存，继承芯裹非当前独立供应。耗用输入省匹配输出不自动抵扣。 范围证据需求：需真实同品号供应匹配原生单位来源接收库存选择，不无关芯退回扣减。 计量证据：协议`cp_supplies`；原记录口径 Mass / kg。原数量约束“归属真实原生物理量 / N；cp_supplies。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`unused_supply_return_detergent_return`; `unused_supply_return_pe_film_return`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_supplies`; 实际来源关联原生记录 |
| useful_separated_material | brown_kraftliner_full_reel_trade | 取得下述具体回收出口的独立交接记录、实际材料或复合状态、质量验收及接收方。按真实交接判定产品或废物，不预设回收产品身份或替代抵扣。 仅真实有用独立事故材料分离原芯裹且具接收证据真实范围。不假常规商户去芯开卷转换。持留内容随完整拒收载体。 范围证据需求：需真实组成原生质量状态来源覆盖责任接收排除，不原生纤维回收抵扣假设。 计量证据：协议`cp_fates`；原记录口径 Mass / kg。原数量约束“归属真实原生物理量 / N；cp_fates。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_fates`; 实际来源关联原生记录 |
| whole_reel_waste | brown_kraftliner_full_reel_trade | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 仅有据不可用整卷转移。声明该物理流真实湿纸芯裹污染，湿凹痕测试未知不自动整卷弃。 范围证据需求：需真实毛净皮水状态接收处理原成品门槛损失换算覆盖责任，不湿毛作干纤维损。 计量证据：协议`cp_reels`；原记录口径 Mass / kg。原数量约束“归属真实原生物理量 / N；cp_reels。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`whole_reel_waste_atomic_case`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_reels`; 实际来源关联原生记录 |
| nonusable_separated_material | brown_kraftliner_full_reel_trade | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 仅真实独立纸碎芯裹事故容纳材料，排整混持留内容。不假分切边率再浆处置法，真实接收分类处理一次。 范围证据需求：需原生混合净质量水来源状态换算接收排除证据，不全部湿千克作纤维。 计量证据：协议`cp_fates`；原记录口径 Mass / kg。原数量约束“归属真实原生物理量 / N；cp_fates。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`nonusable_separated_material_paper`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_fates`; 实际来源关联原生记录 |
| packing_waste | brown_kraftliner_full_reel_trade | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 仅真实分开包装出口。整混废物持留芯裹为内容非额外出口，完整周转载体不自动废物。 范围证据需求：需真实材料原生数面积质量皮重持留纸水真实接收承运处理链接，不回收标即抵扣。 计量证据：协议`cp_fates`；原记录口径 Mass / kg。原数量约束“归属真实原生物理量 / N；cp_fates。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`packing_waste_paper_pack`; `packing_waste_metal_pack`; `packing_waste_plastic_pack`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_fates`; 实际来源关联原生记录 |
| spent_housekeeping_solids | brown_kraftliner_full_reel_trade | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 仅真实擦拭吸附过滤捕集清洁残留具真实持留纸液包。一个毛物理载体按内容审计，不重复独立纸液输出。 范围证据需求：需各载体液纸包原生量单位基准方法状态时间来源计量闭合接收证据。 计量证据：协议`cp_fates`；原记录口径 Mass / kg。原数量约束“归属真实原生物理量 / N；cp_fates。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`spent_housekeeping_solids_spent_wipe`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_fates`; 实际来源关联原生记录 |
| free_liquid_waste | brown_kraftliner_full_reel_trade | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 仅真实事故清洁自由液具计量组成接收。纸芯裹水湿擦拭持留水非额外自由水交换，Cobb非收集水。 范围证据需求：需原生体积密度温度来源收集处理排除链接，未知水余额非蒸发。 计量证据：协议`cp_water`；原记录口径 Volume / m3。原数量约束“归属真实原生物理量 / N；cp_water。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`free_liquid_waste_aqueous_cleaning`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_water`; 实际来源关联原生记录 |
| direct_species | brown_kraftliner_full_reel_trade | 按排放或采样记录确定各实测排放的来源事件、化学物或粒径身份、来源属性及接收介质。物种、粒径或介质不明须保留具体证据缺口；化学品总用量或库存损失不能提供这些身份。 仅真实计量有据兼容化学活动因子。纸损干量差水余额粉尘标签不识别纤维粒VOC水蒸气生物碳释放。持留废物处理范围另一次。 范围证据需求：需确切物种颗粒介质原生活动因子组成去向来源覆盖，不默认分解碳抵扣。 计量证据：协议`cp_species`；原记录口径 Mass / kg。原数量约束“归属真实原生物理量 / N；cp_species。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_species`; 实际来源关联原生记录 |


## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| service_count | 真实贸易职责 | 核商户拥有转售企业最终门槛冲销唯一N，非卷千克面积价值。失败未完资源保留N0不除。 |  |
| paper_state | 真实贸易职责 | 需真实未涂布棕整卷品号纤维BOM净纸芯裹宽长调湿定量水样本基准，年度典型测试气候芯尺寸非真实卷默认Cobb非水分干非水不自动纤维。不假商户转换气候。 |  |
| complete_source | 真实贸易职责 | 真实完整森林纤维浆造纸干卷放行原包装阶段损失覆盖责任全部终态原生原基线额外量换算真实完成缺阶段需求外部集成一次方完整链，原浆待办链接不完整。真实服务搬运接收处理内一次整芯裹混自由液物种互斥非叠加。 |  |
| native_coverage | 真实贸易职责 | 完整真实服务资源全部用户资产寿命原生库存货运操作数覆盖责任NET接收总或耗用省输出EACH/TOTAL各记录比例求和内N一次。真实数量、兼容原生单位状态基准方法时间来源、核实具体身份及适用验收覆盖证据仍强制，未知不作零。缺少通用数值范围单独披露，不因此阻止其他证据完整的实际数据包，不编造界限。主张来源支持区间需可追溯来源与兼容基准；只有经验合理性界限才另需独立可比参考证据，不用同批最大值自证。保留适用实际来源特定验收区间与不确定性要求。 |  |
| validate_concrete_identity_decisions | all inventory rows | 将每项实际身份核实事项落实到实物明确的流卡和原生数量，或提供不适用证据。证据检查点 ID 不是交换。发生、物种、状态、接收方或服务配置缺失时阻断最终数据完成，不默认零。按规定保持整体与组分、总量投入与对应退料的排他关系。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 真实身份数量审查后可作secondary_dataset; background_dataset |
| downstream_use | 真实完整成品来源链内物理整卷棕箱纸批发附加 |
| allowed_use | 真实未涂布棕整卷品号BOM净纸芯裹宽长定量水状态期间最终门槛 |
| excluded_use | 独立纸足迹白涂湿强再生箱板部分商品商户转换气候零售代理卷千克面积价值代服务待办链 |
| required_metadata | 全部限定原生BOM纸芯裹水样本定量条件库存去向来源全部终态原基线额外真实完成集成完整职责 |
| required_quality_disclosure | 未决身份支持范围品号组成水定量来源接收寿命不确定性集成状态 |
| update_trigger | 品号BOM卷芯裹水测试状态来源作业服务资产承运接收最终门槛覆盖变化 |


## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-paper-trade | official_guidance | UNSD CPC3.0 printed30961094paper321except32194;32132Kraftlineruncoated: https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅较窄纸贸易范围，不材料配方服务换算。 |
| sca-kraftliner-context | handbook | SCAKraftlinerproduct: https://www.sca.com/scakraftliner ; SCAKraftlinerspecificationApril2026: https://www.sca.com/siteassets/containerboard/produktblad/sca-kraftliner.pdf | 仅定性等级纤维层调湿问题，主要新纤维基层未漂面层非通用100%原生配方。2026年4月长期年度典型测试气候芯例非真实卷默认。不通用定量厚Cobb芯气候强度食品接触寿命失效因子。PCR原生来源库存水定量全寿命货运算术为独立声明前景方法非供应定量因子。 |
