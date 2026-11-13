---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-medical-and-orthopaedic-goods
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 无菌未装液不带针三件式注射器的常温自营批发服务

## 1. 范围与适用性

适用真实原厂无菌屏障密封一次性未装液不带针三件式聚丙烯皮下注射器，常温企业物理货批中拥有买入转售。声明型号完整筒推杆活塞润滑油墨包含BOM、容量与真实内含、无菌放行屏障有效期批包装状态。不是装药泵针产品，也非商户灭菌开包重包装液临床使用测试路线。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-medical-and-orthopaedic-goods |
| classification_refs | CPC3.0:61074；较窄48150原无菌未装液不带针三件式PP注射器 |
| covered_products | 不变原无菌屏障密封器械完成物理商业批发货批 |
| excluded_products | 带针装液散装非无菌其他器械商户灭菌解析开包重包装液临床测试使用零售代理 |
| representative_product | 真实型号批BOM未装液不带针屏障有效期数量净质量包装状态最终企业验收货批 |
| production_route | 放行完整原无菌屏障器械接收 -> 常温库存订单搬运 -> 发出 -> 最终企业验收 |
| market_state | 物理服务；成品完整器械原无菌外包为非交换商品库存 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 已完成无菌未装液不带针三件式注射器自营批发货批服务 |
| How much | 1 Item(s)，一个唯一最终验收商业货批，不器械箱数容量 |
| How well | 真实型号未装液不带针三件式BOM无菌放行屏障有效期状态买方门槛来源证据 |
| How long or cycle | 真实接收存储退回发出最终验收时间戳时区截止待机清洁完整共享资产寿命 |
| reference_flow_link | `accepted_service` |

| 字段 | 值 |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 已完成无菌未装液不带针三件式注射器自营批发货批服务 |
| reference_flow_property | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | 数量单位 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | actual_factoryfinished_unfilled_withoutneedle_singleuse_state; actual_threepiece_PP_configuration_model_lot_ids; actual_complete_BOM_barrel_plunger_stopper_lube_ink; actual_included_versus_separate_accessory_scope; actual_original_sterile_release_barrier_integrity_source; actual_primary_shelf_carton_case_count_hierarchy; actual_net_complete_device_mass_and_barrier_carton_tare; actual_nominal_capacity_unit_not_filled_contents; actual_expiry_condition_source_observation_period; actual_merchant_ownership_resale_B2B_finalgate_reversals; actual_exclusive_stock_return_component_residual_fates; actual_full_resource_provider_asset_carrier_receiver_scope |

来源所有权转售及企业买方关联冲销后最终验收建立 N；仅收货非完成。未完成取消冲销期间保留资源集合责任，含 N=0 且不除。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| commercial_count | accepted_service | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 参考为 1 Item(s)，一个完成商业验收服务；包装层级产品容量不乘服务 N。 |
| device_net_basis | 非交换器械审计 | Count; Mass | 真实原生数量单位; kg | 经真实父初包货架包纸箱外箱链接用来源核实因子单位基准方法来源计唯一器械件；EACH*真实数量一次或TOTAL原样，不父子叠为额外器械。完整器械净质量=真实包装毛量-初级屏障皮重-二三级运输皮重，原生基准兼容，含真实筒推杆活塞润滑油墨包含配件。独立部件BOM视图不加整质量。来源或代表计量可保持不开包，不规定商户开包。标称mL容量死腔非水药物空气清单或装液质量。 |
| actual_identity_native | 真实变量交换 | 真实原生属性 | 真实原生单位 | 真实材料服务接收物种介质状态决定具体属性单位支持，通用电能源不能燃料热值数量替代。器械PP润滑残留内含不因组成作独立服务投入。 经核实的电力流可按独立确认的电能基准及单位组使用ILCD名为净热值的参考属性；该属性名称不授权套用燃料热值系数。 |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 完整原无菌屏障密封出厂放行未装液不带针一次性三件式PP型号批BOM真实包装有效期状态 |
| starting_condition_role | 非交换商品器械完整BOM原初包外包库存流经量 |
| product_classification_scope | 481/61074医疗商品中较窄48150器械状态，不全部医疗矫形产品 |
| recursive_input_rule | 仅完整不重叠服务接收门槛，不递归同批发服务或重复资源资产承运 |
| upstream_dataset_requirement | 需完整真实型号配置制造门槛：材料模塑筒推杆活塞装配真实润滑印刷真实灭菌及必要解析放行原无菌屏障纸箱包装。相关缺阶段在外组装一次；原PP或未灭菌散装件不代表密封放行无菌器械。匹配原归属需求损失量单位状态来源换算基线阶段损失覆盖责任集成。 |
| disclosure | 全部限定真实型号BOM数量层级容量与内含净器械无菌屏障纸箱有效期状态库存去向；来源原归属损失基线额外原生量完整终态驱动覆盖责任集成；真实完整服务资产承运接收 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| service_boundary | 真实声明路线 | 本项为常温物理批发附加，含真实接收库存订单搬运发出记录待机清洁例外处理。全部交易注射器BOM无菌屏障原包装制造含损失商品上游留服务交换外；非独立器械足迹。真实服务搬运接收处理内一次。 |  |
| complete_source | 真实声明路线 | 需完整真实型号配置制造门槛：材料模塑筒推杆活塞装配真实润滑印刷真实灭菌及必要解析放行原无菌屏障纸箱包装。相关缺阶段在外组装一次；原PP或未灭菌散装件不代表密封放行无菌器械。匹配原归属需求损失量单位状态来源换算基线阶段损失覆盖责任集成。 |  |
| scope_exclusions | 真实声明路线 | 不假商户灭菌解析开包重包接针药物水装填泵临床性能污染测试使用。真实额外作业需另审完整范围。标称容量非内含；无菌有效期为真实来源状态限定，不通用寿命剂量组成感染主张。 |  |
| provider_and_receiver | 真实声明路线 | 服务资源全寿命资产承运空驶接收处理须完整不重叠一责任。直接释放需真实物种介质证据。继承润滑灭菌残留保持来源链接商品内含，直至有据真实持留外送直接去向；不标签作运行化学投入排放。 |  |


## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| original_sterile_syringe_trade | 原无菌屏障注射器库存自营贸易 | required | 真实不变原屏障器械拥有转售常温企业最终验收 | 接收订单发出批次真实清洁期间跨期共享库房搬运记录设施及真实例外 | `accepted_service` |

不由无菌标签生成灭菌主动调控临床测试节点。链接每真实期间事件批及互斥持留退回接收路径，含拒收未完成职责。真实变量品号材料服务废物物种配置据前景证据展开，不未知作零。

### 过程：原无菌屏障注射器库存自营贸易 (`original_sterile_syringe_trade`)

#### 输入

##### 产品流

###### 实际使用点交流电 (`warehouse_electricity_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Energy / kWh
- 数量规则：归属真实实测原生量 / N；cp_power。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_power`

范围证据需求：需真实设备计量服务时间边界物理全部用户比例。不容量无菌有效期转能耗因子。

###### 实际液态处理自来水供给 (`housekeeping_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Volume / m3
- 数量规则：归属真实实测原生量 / N；cp_water。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

范围证据需求：需真实来源用途收集持留直接记录组成接收。包装含水空筒体积不能量化水废水蒸发。

###### 实际独立记录的合成洗涤剂投入 (`housekeeping_consumables_synthetic_detergent`)

仅适用于产品配方、供应状态及用途记录确认的实际合成表面活性洗涤剂。记录扣除包装皮重的材料净量，区分浓缩液与稀释水，整体配方与组分不得相加重复计入。肥皂、消毒剂、抹布、滤材等仍按各自实际身份记录，不预设清洁配方、剂量或发生。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位：Mass / kg
- 数量规则：归属真实实测原生量 / N；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据需求：需真实品号配方载体原生库存量单位基准方法来源匹配未用退回；不假消毒灭菌剂种类剂量。

###### 实际独立记录的聚乙烯包装薄膜 (`added_shipping_protection_pe_film`)

仅适用于实际独立供应、供本服务新增包裹或衬垫使用的聚乙烯薄膜，须确认实际聚合物配方与薄膜净量。该身份为工厂门通用生产组合，仍须记录实际供给门、供应方及另负责任的交付负荷。不预设LDPE/HDPE牌号、再生比例、厚度或用量。PVC、PET、PP、多层复合材料、胶黏标签、填充包装及继承商品包装仍按余项独立身份处理；整体供应与组分不得重复计量，不预设发生。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass / kg
- 数量规则：归属真实实测原生量 / N；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据需求：需原生数量面积长度质量库存皮重材料换算证据，与原屏障周转承载物不同。

###### 用于新增运输保护的纸板箱 (`added_shipping_protection_paperboard_carton`)

仅覆盖本过程有独立实际证据的“用于新增运输保护的纸板箱”。记录自身物态、净量 kg、事件来源及交接门。其他状态或接收方需在`added_shipping_protection`下独立确定身份，本卡不能替代；记录缺失不证明发生或为零。 仅在新增包装确认为纸板箱时使用，记录结构、纸板箱净质量及供应门。塑料筐、木箱或身份实质不同的复合箱需另设流卡；排除继承包装和周转资产。不预设纤维等级、再生成分比例或每箱质量。

- 选定流：用于新增运输保护的纸板箱
- 流属性/单位：Mass / kg
- 数量规则：`added_shipping_protection_paperboard_carton`实际独占归属的 kg / 验收 N，仅归一化一次；已按参考流给出的数量不得再次除以 N。
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

###### 已完成无菌未装液不带针三件式注射器自营批发货批服务 (`accepted_service`)

一个真实唯一所有权买入转售商业货批，由企业买方最终验收原厂无菌屏障密封的一次性未装液不带针三件式聚丙烯皮下注射器。真实器械配置完整BOM包装批有效期状态门槛限定服务；器械包装数标称容量为独立描述。

- 选定流：已完成无菌未装液不带针三件式注射器自营批发货批服务
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_devices`

范围证据需求：需真实所有权转售企业买方最终验收冲销证据制造者品号未装液不带针无菌放行屏障状态完整产品质量包装期间。不容量每箱数无菌寿命器械等服务默认。

###### 退回供应方的未使用合成洗涤剂 (`matched_unused_supply_returns_detergent_return`)

仅覆盖本过程有独立实际证据的“退回供应方的未使用合成洗涤剂”。记录自身物态、净量 kg、事件来源及交接门。其他状态或接收方需在`matched_unused_supply_returns`下独立确定身份，本卡不能替代；记录缺失不证明发生或为零。 将未使用材料的配方、供应状态和原生质量严格匹配到投入`housekeeping_consumables_synthetic_detergent`。本卡为可用对外退料，不是废物、期末库存或内部循环。仅在总量供应口径下列此输出；投入已扣除该退料时必须省略对应退料输出，不自动抵扣避免生产。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位：Mass / kg
- 数量规则：`matched_unused_supply_returns_detergent_return`实际独占归属的 kg / 验收 N，仅归一化一次；已按参考流给出的数量不得再次除以 N。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需事件关联的原生 kg、状态组成、接收或供应门、归属记录及整件组分或对应投入的排他关联，使用协议`cp_supplies`。不提供默认数值或换算因子；其他原生单位须有换算证据后使用。

###### 退回供应方的未使用聚乙烯薄膜 (`matched_unused_supply_returns_pe_film_return`)

仅覆盖本过程有独立实际证据的“退回供应方的未使用聚乙烯薄膜”。记录自身物态、净量 kg、事件来源及交接门。其他状态或接收方需在`matched_unused_supply_returns`下独立确定身份，本卡不能替代；记录缺失不证明发生或为零。 将未使用材料的配方、供应状态和原生质量严格匹配到投入`added_shipping_protection_pe_film`。本卡为可用对外退料，不是废物、期末库存或内部循环。仅在总量供应口径下列此输出；投入已扣除该退料时必须省略对应退料输出，不自动抵扣避免生产。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass / kg
- 数量规则：`matched_unused_supply_returns_pe_film_return`实际独占归属的 kg / 验收 N，仅归一化一次；已按参考流给出的数量不得再次除以 N。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需事件关联的原生 kg、状态组成、接收或供应门、归属记录及整件组分或对应投入的排他关联，使用协议`cp_supplies`。不提供默认数值或换算因子；其他原生单位须有换算证据后使用。

##### 废物流

###### 废弃完整无菌未填充无针三件式注射器 (`discarded_whole_units_atomic_case`)

仅在实际独立记录确认“废弃完整无菌未填充无针三件式注射器”时适用。本卡只覆盖该命名实物状态及自身实际净量、保留组成和接收门。其他部件、碎片、游离液、独立包装及清理载体仍属于`discarded_whole_units`中的身份核实事项；不得移动边界、预设事件、将库存差当废弃，或把仍保留在整体流内的组分另算出口。实际混收流须匹配自身准确身份。原有原生单位数量协议只用于本独占具体情形，其他实际去向分别协调。

- 选定流：废弃完整无菌未填充无针三件式注射器
- 流属性/单位：Mass / kg
- 数量规则：归属真实实测原生量 / N；cp_devices。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_devices`

范围证据需求：需真实唯一型号批件包装质量数量状态决定接收处理来源损失换算覆盖责任。绝非全PP千克或容量作废液。

###### 实际单独收集的纸类包装废物 (`separated_packaging_waste_paper_pack`)

仅适用于本节点实际独立废弃、单独收集的纸类包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：包装废弃物，纸类 `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- 流属性/单位：Mass / kg
- 数量规则：归属真实实测原生量 / N；cp_fates。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据需求：需真实材料原生数量面积质量持留污染来源库存整件混合排除接收承运处理；不回收标记抵扣或假感染分类。


###### 实际单独收集的金属包装废物 (`separated_packaging_waste_metal_pack`)

仅适用于本节点实际独立废弃、单独收集的金属包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：金属包装废物 `cdda6013-c0c5-4c72-990a-f5668fe71069`
- 流属性/单位：Mass / kg
- 数量规则：归属真实实测原生量 / N；cp_fates。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据需求：需真实材料原生数量面积质量持留污染来源库存整件混合排除接收承运处理；不回收标记抵扣或假感染分类。


###### 实际单独收集的塑料包装废物 (`separated_packaging_waste_plastic_pack`)

仅适用于实际独立废弃、单独收集的空塑料包装，保留实际组成、含水状态及接收方。含残留商品的混合包装、污染混合流、设备内保温泡沫、一次性抹布及复合包装不使用本分支；整体混合流中的组分仅作不可相加审计，运输处理责任计入一次。不预设排空、回收、发生或数量。

- 选定流：塑料包装废物 `919351c4-3e25-4092-9934-73ecec021a3b`
- 流属性/单位：Mass / kg
- 数量规则：归属真实实测原生量 / N；cp_fates。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据需求：需真实材料原生数量面积质量持留污染来源库存整件混合排除接收承运处理；不回收标记抵扣或假感染分类。

###### 废弃独立分离的无针注射器针筒 (`nonusable_separated_parts_syringe_barrel`)

仅覆盖本过程有独立实际证据的“废弃独立分离的无针注射器针筒”。记录自身物态、净量 kg、事件来源及交接门。其他状态或接收方需在`nonusable_separated_parts`下独立确定身份，本卡不能替代；记录缺失不证明发生或为零。 仅在实际独立收集并转移至废物接收方时启用，不得用于仍保留在整件、包装或收集混合物中的组分。保留组成只作不可相加记录。不预设开包、切割、拆解、主动干燥、回收率或处理路线，处理及运输责任只归属一次。

- 选定流：废弃独立分离的无针注射器针筒
- 流属性/单位：Mass / kg
- 数量规则：`nonusable_separated_parts_syringe_barrel`实际独占归属的 kg / 验收 N，仅归一化一次；已按参考流给出的数量不得再次除以 N。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据要求：需事件关联的原生 kg、状态组成、接收或供应门、归属记录及整件组分或对应投入的排他关联，使用协议`cp_fates`。不提供默认数值或换算因子；其他原生单位须有换算证据后使用。

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

##### 基本流

## 7. 分配与联产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| final_commercial_N | 真实声明路线 | N 按来源核实所有权买入转售企业买方关联冲销后唯一最终真实商业验收计数，不收货器械初包纸箱数货币。取消冲销未完成失败职责保留真实资源期间集合归属；N=0 不除。拒收未决商品非验收参考输出。 |  |
| source_assignment | 真实声明路线 | 真实归属原门槛量直接追溯计量原生有据，或原量*兼容集合驱动/正数完整全部终态驱动和。各竞争验收转移期末未售损坏留存可用其他出口退回真实整件部分混合液损失具原生量单位基准方法状态时间来源责任原集合期间换算互斥分子链接。不仅验收分母或中间移动双计。匹配原成品无菌完整器械包装状态真实总需求兼容基线覆盖额外未覆盖需求覆盖责任，缺需求损失在外集成一次，不无关覆盖或负差抵扣。 |  |
| independent_supply_stock | 真实声明路线 | S=归属期初+真实外部净收货-含回收留存独立供应期末。选总输入 S 单列匹配同范围未用外部输出，或耗用输入 S-return 省该输出。不数值 S+退回双抵回收作新收货删未退溢漏废物供应负担。继承器械内含包装不冲无关服务供应。 |  |
| all_user_lifetime | 真实声明路线 | 真实资源归属用兼容集合全部用户物理驱动。资产当量=真实兼容作业集合使用驱动/完整全部用户期间寿命驱动，具实测历史加有据剩余使用终止。各操作数原生单位基准方法状态时间来源换算；完整制造维护清洁更换终结不确定性敏感性更新。服务完整覆盖替代匹配自有负担。 |  |
| physical_fates | 真实声明路线 | 可用完好器械退回仍非交换商品；真实独立可用材料整件部件包材混合清洁固体游离液直接物种需互斥真实决策接收。整件部分混合废物保留真实组成润滑残留包装为非叠加内含审计，不另废物化学交换。继承持留量循验收退回期末整件部分混合废物或真实独立转移；未知不默认放空。不自动感染锐器分类回收替代抵扣。 |  |



| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| source_scope_normalization | 非交换商品与服务组合 | 原始外部商品库存、来源归属损失及缺阶段新增上游集成量均保留有证据的实际原始作用域。逐量识别一个实际货批、目标服务集合或已经每参考流，并记录来源目标作用域编号与数量口径。来源集合全部出口分母仅把原始量归属该目标范围，不自动等于目标验收服务N。仅与1 Item(s)服务组合时，以同目标范围原始归属量除正数唯一验收source_same_scope_N，记录验收编号时间冲销证据，取得每参考量。有证单货批source_same_scope_N=1，已每参考量不再除。保留实际原始集成量来源链接，不缩小真实上游补阶段量，不用无关N除整个来源集合；N0责任披露不除。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_devices | original_sterile_syringe_trade | 最终器械货批验收产品BOM库存原来源 | 真实物理来源事件原生操作数账 | merchant_id; ownership_purchase_resale_evidence; business_buyer_id; consignment_id; acceptance_gate; acceptance_gate_source; final_acceptance_record_id; reversal_record_ids; reversal_source; N; manufacturer; model_SKU; lot; unit_id; carton_id; shelfpack_id; primary_pack_id; parent_child_exclusion_links; package_level; included_component_ids; separately_supplied_component_ids; without_needle_evidence; unfilled_evidence; single_use_evidence; sterile_release_source; original_sterile_barrier_evidence; barrier_integrity_observation; expiry_date; expiry_source; observation_timestamp; observation_timezone; observation_time_source; barrel_material; plunger_material; stopper_material; lubricant_identity; ink_identity; actual_BOM; composition_method; composition_source; sample_id; sample_representativeness; EACH_or_TOTAL; scale_id; calibration; receipt_timestamp; receipt_timezone; receipt_time_source; dispatch_timestamp; dispatch_timezone; dispatch_time_source; final_acceptance_timestamp; acceptance_timezone; acceptance_time_source; cutoff_period; disposition; receiver_classification_evidence; transport_scope; treatment_scope; content_transfer_link; stream_exclusion_ids; unknown_discrepancy; actual_upstream_sterilization_method_source; actual_upstream_aeration_release_evidence; constituent_id; inherited_species_identity; source_constituent_gate; constituent_nonadditive_transfer_links; original_gate_dataset_id; original_gate_reference; baseline_stage_coverage; baseline_loss_coverage; direct_assignment_evidence; allocation_method; allocation_source; source_cohort_id; source_cohort_driver_record_ids; source_all_exit_driver_records; driver_record_id; driver_exit_state; driver_original_source_link; driver_owner; driver_source_cohort_id; driver_period; driver_exclusivity_key; coverage_reconciliation; loss_burden_owner; already_included_loss_coverage; completed_integration_result; unit_count; unit_count_unit; unit_count_basis; unit_count_method; unit_count_state; unit_count_sample_time; unit_count_source; unit_count_conversion_factor; unit_count_conversion_unit; unit_count_conversion_source; units_per_primary; units_per_primary_unit; units_per_primary_basis; units_per_primary_method; units_per_primary_state; units_per_primary_sample_time; units_per_primary_source; units_per_primary_conversion_factor; units_per_primary_conversion_unit; units_per_primary_conversion_source; primaries_per_carton; primaries_per_carton_unit; primaries_per_carton_basis; primaries_per_carton_method; primaries_per_carton_state; primaries_per_carton_sample_time; primaries_per_carton_source; primaries_per_carton_conversion_factor; primaries_per_carton_conversion_unit; primaries_per_carton_conversion_source; cartons_per_case; cartons_per_case_unit; cartons_per_case_basis; cartons_per_case_method; cartons_per_case_state; cartons_per_case_sample_time; cartons_per_case_source; cartons_per_case_conversion_factor; cartons_per_case_conversion_unit; cartons_per_case_conversion_source; nominal_capacity; nominal_capacity_unit; nominal_capacity_basis; nominal_capacity_method; nominal_capacity_state; nominal_capacity_sample_time; nominal_capacity_source; nominal_capacity_conversion_factor; nominal_capacity_conversion_unit; nominal_capacity_conversion_source; gross_packed_mass; gross_packed_mass_unit; gross_packed_mass_basis; gross_packed_mass_method; gross_packed_mass_state; gross_packed_mass_sample_time; gross_packed_mass_source; gross_packed_mass_conversion_factor; gross_packed_mass_conversion_unit; gross_packed_mass_conversion_source; primary_barrier_tare; primary_barrier_tare_unit; primary_barrier_tare_basis; primary_barrier_tare_method; primary_barrier_tare_state; primary_barrier_tare_sample_time; primary_barrier_tare_source; primary_barrier_tare_conversion_factor; primary_barrier_tare_conversion_unit; primary_barrier_tare_conversion_source; secondary_tertiary_tare; secondary_tertiary_tare_unit; secondary_tertiary_tare_basis; secondary_tertiary_tare_method; secondary_tertiary_tare_state; secondary_tertiary_tare_sample_time; secondary_tertiary_tare_source; secondary_tertiary_tare_conversion_factor; secondary_tertiary_tare_conversion_unit; secondary_tertiary_tare_conversion_source; net_complete_device_mass; net_complete_device_mass_unit; net_complete_device_mass_basis; net_complete_device_mass_method; net_complete_device_mass_state; net_complete_device_mass_sample_time; net_complete_device_mass_source; net_complete_device_mass_conversion_factor; net_complete_device_mass_conversion_unit; net_complete_device_mass_conversion_source; barrel_mass; barrel_mass_unit; barrel_mass_basis; barrel_mass_method; barrel_mass_state; barrel_mass_sample_time; barrel_mass_source; barrel_mass_conversion_factor; barrel_mass_conversion_unit; barrel_mass_conversion_source; plunger_mass; plunger_mass_unit; plunger_mass_basis; plunger_mass_method; plunger_mass_state; plunger_mass_sample_time; plunger_mass_source; plunger_mass_conversion_factor; plunger_mass_conversion_unit; plunger_mass_conversion_source; stopper_mass; stopper_mass_unit; stopper_mass_basis; stopper_mass_method; stopper_mass_state; stopper_mass_sample_time; stopper_mass_source; stopper_mass_conversion_factor; stopper_mass_conversion_unit; stopper_mass_conversion_source; lubricant_mass; lubricant_mass_unit; lubricant_mass_basis; lubricant_mass_method; lubricant_mass_state; lubricant_mass_sample_time; lubricant_mass_source; lubricant_mass_conversion_factor; lubricant_mass_conversion_unit; lubricant_mass_conversion_source; ink_mass; ink_mass_unit; ink_mass_basis; ink_mass_method; ink_mass_state; ink_mass_sample_time; ink_mass_source; ink_mass_conversion_factor; ink_mass_conversion_unit; ink_mass_conversion_source; included_accessory_mass; included_accessory_mass_unit; included_accessory_mass_basis; included_accessory_mass_method; included_accessory_mass_state; included_accessory_mass_sample_time; included_accessory_mass_source; included_accessory_mass_conversion_factor; included_accessory_mass_conversion_unit; included_accessory_mass_conversion_source; actual_component_fraction; actual_component_fraction_unit; actual_component_fraction_basis; actual_component_fraction_method; actual_component_fraction_state; actual_component_fraction_sample_time; actual_component_fraction_source; actual_component_fraction_conversion_factor; actual_component_fraction_conversion_unit; actual_component_fraction_conversion_source; holding_duration; holding_duration_unit; holding_duration_basis; holding_duration_method; holding_duration_state; holding_duration_sample_time; holding_duration_source; holding_duration_conversion_factor; holding_duration_conversion_unit; holding_duration_conversion_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; temperature_conversion_factor; temperature_conversion_unit; temperature_conversion_source; humidity; humidity_unit; humidity_basis; humidity_method; humidity_state; humidity_sample_time; humidity_source; humidity_conversion_factor; humidity_conversion_unit; humidity_conversion_source; opening; opening_unit; opening_basis; opening_method; opening_state; opening_sample_time; opening_source; opening_conversion_factor; opening_conversion_unit; opening_conversion_source; net_receipts; net_receipts_unit; net_receipts_basis; net_receipts_method; net_receipts_state; net_receipts_sample_time; net_receipts_source; net_receipts_conversion_factor; net_receipts_conversion_unit; net_receipts_conversion_source; buyer_returns; buyer_returns_unit; buyer_returns_basis; buyer_returns_method; buyer_returns_state; buyer_returns_sample_time; buyer_returns_source; buyer_returns_conversion_factor; buyer_returns_conversion_unit; buyer_returns_conversion_source; closing_unsold; closing_unsold_unit; closing_unsold_basis; closing_unsold_method; closing_unsold_state; closing_unsold_sample_time; closing_unsold_source; closing_unsold_conversion_factor; closing_unsold_conversion_unit; closing_unsold_conversion_source; damaged_retained; damaged_retained_unit; damaged_retained_basis; damaged_retained_method; damaged_retained_state; damaged_retained_sample_time; damaged_retained_source; damaged_retained_conversion_factor; damaged_retained_conversion_unit; damaged_retained_conversion_source; accepted_transfer; accepted_transfer_unit; accepted_transfer_basis; accepted_transfer_method; accepted_transfer_state; accepted_transfer_sample_time; accepted_transfer_source; accepted_transfer_conversion_factor; accepted_transfer_conversion_unit; accepted_transfer_conversion_source; supplier_returns; supplier_returns_unit; supplier_returns_basis; supplier_returns_method; supplier_returns_state; supplier_returns_sample_time; supplier_returns_source; supplier_returns_conversion_factor; supplier_returns_conversion_unit; supplier_returns_conversion_source; useful_other_exits; useful_other_exits_unit; useful_other_exits_basis; useful_other_exits_method; useful_other_exits_state; useful_other_exits_sample_time; useful_other_exits_source; useful_other_exits_conversion_factor; useful_other_exits_conversion_unit; useful_other_exits_conversion_source; whole_unit_discard; whole_unit_discard_unit; whole_unit_discard_basis; whole_unit_discard_method; whole_unit_discard_state; whole_unit_discard_sample_time; whole_unit_discard_source; whole_unit_discard_conversion_factor; whole_unit_discard_conversion_unit; whole_unit_discard_conversion_source; part_exit; part_exit_unit; part_exit_basis; part_exit_method; part_exit_state; part_exit_sample_time; part_exit_source; part_exit_conversion_factor; part_exit_conversion_unit; part_exit_conversion_source; retained_device_in_mixed; retained_device_in_mixed_unit; retained_device_in_mixed_basis; retained_device_in_mixed_method; retained_device_in_mixed_state; retained_device_in_mixed_sample_time; retained_device_in_mixed_source; retained_device_in_mixed_conversion_factor; retained_device_in_mixed_conversion_unit; retained_device_in_mixed_conversion_source; retained_pack_in_whole; retained_pack_in_whole_unit; retained_pack_in_whole_basis; retained_pack_in_whole_method; retained_pack_in_whole_state; retained_pack_in_whole_sample_time; retained_pack_in_whole_source; retained_pack_in_whole_conversion_factor; retained_pack_in_whole_conversion_unit; retained_pack_in_whole_conversion_source; source_constituent_quantity; source_constituent_quantity_unit; source_constituent_quantity_basis; source_constituent_quantity_method; source_constituent_quantity_state; source_constituent_quantity_sample_time; source_constituent_quantity_source; source_constituent_quantity_conversion_factor; source_constituent_quantity_conversion_unit; source_constituent_quantity_conversion_source; constituent_retained_accepted; constituent_retained_accepted_unit; constituent_retained_accepted_basis; constituent_retained_accepted_method; constituent_retained_accepted_state; constituent_retained_accepted_sample_time; constituent_retained_accepted_source; constituent_retained_accepted_conversion_factor; constituent_retained_accepted_conversion_unit; constituent_retained_accepted_conversion_source; constituent_retained_returned; constituent_retained_returned_unit; constituent_retained_returned_basis; constituent_retained_returned_method; constituent_retained_returned_state; constituent_retained_returned_sample_time; constituent_retained_returned_source; constituent_retained_returned_conversion_factor; constituent_retained_returned_conversion_unit; constituent_retained_returned_conversion_source; constituent_retained_closing; constituent_retained_closing_unit; constituent_retained_closing_basis; constituent_retained_closing_method; constituent_retained_closing_state; constituent_retained_closing_sample_time; constituent_retained_closing_source; constituent_retained_closing_conversion_factor; constituent_retained_closing_conversion_unit; constituent_retained_closing_conversion_source; constituent_retained_whole_waste; constituent_retained_whole_waste_unit; constituent_retained_whole_waste_basis; constituent_retained_whole_waste_method; constituent_retained_whole_waste_state; constituent_retained_whole_waste_sample_time; constituent_retained_whole_waste_source; constituent_retained_whole_waste_conversion_factor; constituent_retained_whole_waste_conversion_unit; constituent_retained_whole_waste_conversion_source; constituent_retained_part_waste; constituent_retained_part_waste_unit; constituent_retained_part_waste_basis; constituent_retained_part_waste_method; constituent_retained_part_waste_state; constituent_retained_part_waste_sample_time; constituent_retained_part_waste_source; constituent_retained_part_waste_conversion_factor; constituent_retained_part_waste_conversion_unit; constituent_retained_part_waste_conversion_source; constituent_retained_mixed_waste; constituent_retained_mixed_waste_unit; constituent_retained_mixed_waste_basis; constituent_retained_mixed_waste_method; constituent_retained_mixed_waste_state; constituent_retained_mixed_waste_sample_time; constituent_retained_mixed_waste_source; constituent_retained_mixed_waste_conversion_factor; constituent_retained_mixed_waste_conversion_unit; constituent_retained_mixed_waste_conversion_source; constituent_independent_useful_exit; constituent_independent_useful_exit_unit; constituent_independent_useful_exit_basis; constituent_independent_useful_exit_method; constituent_independent_useful_exit_state; constituent_independent_useful_exit_sample_time; constituent_independent_useful_exit_source; constituent_independent_useful_exit_conversion_factor; constituent_independent_useful_exit_conversion_unit; constituent_independent_useful_exit_conversion_source; constituent_independent_contained_exit; constituent_independent_contained_exit_unit; constituent_independent_contained_exit_basis; constituent_independent_contained_exit_method; constituent_independent_contained_exit_state; constituent_independent_contained_exit_sample_time; constituent_independent_contained_exit_source; constituent_independent_contained_exit_conversion_factor; constituent_independent_contained_exit_conversion_unit; constituent_independent_contained_exit_conversion_source; constituent_independent_liquid_exit; constituent_independent_liquid_exit_unit; constituent_independent_liquid_exit_basis; constituent_independent_liquid_exit_method; constituent_independent_liquid_exit_state; constituent_independent_liquid_exit_sample_time; constituent_independent_liquid_exit_source; constituent_independent_liquid_exit_conversion_factor; constituent_independent_liquid_exit_conversion_unit; constituent_independent_liquid_exit_conversion_source; constituent_direct_release; constituent_direct_release_unit; constituent_direct_release_basis; constituent_direct_release_method; constituent_direct_release_state; constituent_direct_release_sample_time; constituent_direct_release_source; constituent_direct_release_conversion_factor; constituent_direct_release_conversion_unit; constituent_direct_release_conversion_source; unresolved_constituent_discrepancy; unresolved_constituent_discrepancy_unit; unresolved_constituent_discrepancy_basis; unresolved_constituent_discrepancy_method; unresolved_constituent_discrepancy_state; unresolved_constituent_discrepancy_sample_time; unresolved_constituent_discrepancy_source; unresolved_constituent_discrepancy_conversion_factor; unresolved_constituent_discrepancy_conversion_unit; unresolved_constituent_discrepancy_conversion_source; original_gate_quantity; original_gate_quantity_unit; original_gate_quantity_basis; original_gate_quantity_method; original_gate_quantity_state; original_gate_quantity_sample_time; original_gate_quantity_source; original_gate_quantity_conversion_factor; original_gate_quantity_conversion_unit; original_gate_quantity_conversion_source; assigned_source_quantity; assigned_source_quantity_unit; assigned_source_quantity_basis; assigned_source_quantity_method; assigned_source_quantity_state; assigned_source_quantity_sample_time; assigned_source_quantity_source; assigned_source_quantity_conversion_factor; assigned_source_quantity_conversion_unit; assigned_source_quantity_conversion_source; original_gate_loss_quantity; original_gate_loss_quantity_unit; original_gate_loss_quantity_basis; original_gate_loss_quantity_method; original_gate_loss_quantity_state; original_gate_loss_quantity_sample_time; original_gate_loss_quantity_source; original_gate_loss_quantity_conversion_factor; original_gate_loss_quantity_conversion_unit; original_gate_loss_quantity_conversion_source; baseline_covered_source_quantity; baseline_covered_source_quantity_unit; baseline_covered_source_quantity_basis; baseline_covered_source_quantity_method; baseline_covered_source_quantity_state; baseline_covered_source_quantity_sample_time; baseline_covered_source_quantity_source; baseline_covered_source_quantity_conversion_factor; baseline_covered_source_quantity_conversion_unit; baseline_covered_source_quantity_conversion_source; additional_uncovered_source_quantity; additional_uncovered_source_quantity_unit; additional_uncovered_source_quantity_basis; additional_uncovered_source_quantity_method; additional_uncovered_source_quantity_state; additional_uncovered_source_quantity_sample_time; additional_uncovered_source_quantity_source; additional_uncovered_source_quantity_conversion_factor; additional_uncovered_source_quantity_conversion_unit; additional_uncovered_source_quantity_conversion_source; source_cohort_driver; source_cohort_driver_unit; source_cohort_driver_basis; source_cohort_driver_method; source_cohort_driver_state; source_cohort_driver_sample_time; source_cohort_driver_source; source_cohort_driver_conversion_factor; source_cohort_driver_conversion_unit; source_cohort_driver_conversion_source; source_all_exit_driver; source_all_exit_driver_unit; source_all_exit_driver_basis; source_all_exit_driver_method; source_all_exit_driver_state; source_all_exit_driver_sample_time; source_all_exit_driver_source; source_all_exit_driver_conversion_factor; source_all_exit_driver_conversion_unit; source_all_exit_driver_conversion_source; driver_quantity; driver_quantity_unit; driver_quantity_basis; driver_quantity_method; driver_quantity_state; driver_quantity_sample_time; driver_quantity_source; driver_quantity_conversion_factor; driver_quantity_conversion_unit; driver_quantity_conversion_source; cohort_driver; cohort_driver_unit; cohort_driver_basis; cohort_driver_method; cohort_driver_state; cohort_driver_sample_time; cohort_driver_source; cohort_driver_conversion_factor; cohort_driver_conversion_unit; cohort_driver_conversion_source; all_user_driver; all_user_driver_unit; all_user_driver_basis; all_user_driver_method; all_user_driver_state; all_user_driver_sample_time; all_user_driver_source; all_user_driver_conversion_factor; all_user_driver_conversion_unit; all_user_driver_conversion_source; attribution_share; attribution_share_unit; attribution_share_basis; attribution_share_method; attribution_share_state; attribution_share_sample_time; attribution_share_source; attribution_share_conversion_factor; attribution_share_conversion_unit; attribution_share_conversion_source; source_assignment_scope_id; source_assignment_scope_kind; source_quantity_basis; source_target_scope_id; source_same_scope_N; source_same_scope_N_unit; source_same_scope_N_basis; source_same_scope_N_method; source_same_scope_N_state; source_same_scope_N_sample_time; source_same_scope_N_source; source_same_scope_acceptance_ids; source_already_per_reference; raw_integration_scope_link; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | 核实商户所有权买入转售企业买方及来源最终验收冲销ID；N 按冲销后唯一最终商业验收计数，不收货器械包装数。失败取消冲销未完成事件保留资源集合期间归属；N=0 不除。链接真实未装液不带针一次性三件式PP配置完整BOM及来源无菌放行原屏障有效期观察状态，不商户开包测试灭菌。区分完整装配净量标称容量与真实液内含屏障纸箱皮重，用来源或真实代表计量。核对互斥库存来源集合整件部分混合液直接决策。来源归属直接追溯或兼容正数完整全部终态记录，各原生量基准方法状态时间来源责任，含期末可用其他退回损失。继承润滑残留物种按真实验收退回期末整件部分混合废物持留、独立可用容纳液外送直接释放闭合；持留为非叠加内含，不额外出口或未知作泄漏。  原始外部商品库存、来源归属损失及缺阶段新增上游集成量均保留有证据的实际原始作用域。逐量识别一个实际货批、目标服务集合或已经每参考流，并记录来源目标作用域编号与数量口径。来源集合全部出口分母仅把原始量归属该目标范围，不自动等于目标验收服务N。仅与1 Item(s)服务组合时，以同目标范围原始归属量除正数唯一验收source_same_scope_N，记录验收编号时间冲销证据，取得每参考量。有证单货批source_same_scope_N=1，已每参考量不再除。保留实际原始集成量来源链接，不缩小真实上游补阶段量，不用无关N除整个来源集合；N0责任披露不除。 只归属独立确认的实物情形，其他实际去向按来源分别保留；每个原生记录只属于一个交换，任何总量仅作不可相加审计。 | Item(s); 真实件数层级质量容量状态时间单位 | 每真实事件及匹配计量期间 | 完整职责来源集合截止相关资产寿命 | 真实节点库房订单责任全部共享用户 | 每参考流 | 各原生单位基准方法状态采样时间来源校准换算不确定性完整责任 |
| cp_power | original_sterile_syringe_trade | 真实库房用电完整归属 | 真实物理来源事件原生操作数账 | meter_id; equipment_scope; period_start; period_end; timezone; timestamp_source; idle_cleanup_scope; provider_overlap; uncertainty; opening_reading; opening_reading_unit; opening_reading_basis; opening_reading_method; opening_reading_state; opening_reading_sample_time; opening_reading_source; opening_reading_conversion_factor; opening_reading_conversion_unit; opening_reading_conversion_source; closing_reading; closing_reading_unit; closing_reading_basis; closing_reading_method; closing_reading_state; closing_reading_sample_time; closing_reading_source; closing_reading_conversion_factor; closing_reading_conversion_unit; closing_reading_conversion_source; energy; energy_unit; energy_basis; energy_method; energy_state; energy_sample_time; energy_source; energy_conversion_factor; energy_conversion_unit; energy_conversion_source; cohort_driver; cohort_driver_unit; cohort_driver_basis; cohort_driver_method; cohort_driver_state; cohort_driver_sample_time; cohort_driver_source; cohort_driver_conversion_factor; cohort_driver_conversion_unit; cohort_driver_conversion_source; all_user_driver; all_user_driver_unit; all_user_driver_basis; all_user_driver_method; all_user_driver_state; all_user_driver_sample_time; all_user_driver_source; all_user_driver_conversion_factor; all_user_driver_conversion_unit; all_user_driver_conversion_source; attribution_share; attribution_share_unit; attribution_share_basis; attribution_share_method; attribution_share_state; attribution_share_sample_time; attribution_share_source; attribution_share_conversion_factor; attribution_share_conversion_unit; attribution_share_conversion_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 计量真实完整设备期间原生因果集合全部用户物理驱动，含待机清洁未完成职责；不无菌标签转能耗。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kWh | 每真实事件及匹配计量期间 | 完整职责来源集合截止相关资产寿命 | 真实节点库房订单责任全部共享用户 | 每参考流 | 各原生单位基准方法状态采样时间来源校准换算不确定性完整责任 |
| cp_water | original_sterile_syringe_trade | 真实清洁供应持留游离液 | 真实物理来源事件原生操作数账 | source_id; event_id; period; timezone; timestamp_source; composition_identity; composition_method; composition_source; parent_source_link; receiver; receiver_classification_evidence; transport_scope; treatment_scope; stream_exclusion_ids; retained_whole_solid_link; fate_evidence; unknown_discrepancy; supplied_volume; supplied_volume_unit; supplied_volume_basis; supplied_volume_method; supplied_volume_state; supplied_volume_sample_time; supplied_volume_source; supplied_volume_conversion_factor; supplied_volume_conversion_unit; supplied_volume_conversion_source; collected_free_volume; collected_free_volume_unit; collected_free_volume_basis; collected_free_volume_method; collected_free_volume_state; collected_free_volume_sample_time; collected_free_volume_source; collected_free_volume_conversion_factor; collected_free_volume_conversion_unit; collected_free_volume_conversion_source; retained_volume; retained_volume_unit; retained_volume_basis; retained_volume_method; retained_volume_state; retained_volume_sample_time; retained_volume_source; retained_volume_conversion_factor; retained_volume_conversion_unit; retained_volume_conversion_source; composition_fraction; composition_fraction_unit; composition_fraction_basis; composition_fraction_method; composition_fraction_state; composition_fraction_sample_time; composition_fraction_source; composition_fraction_conversion_factor; composition_fraction_conversion_unit; composition_fraction_conversion_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; density_conversion_factor; density_conversion_unit; density_conversion_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; temperature_conversion_factor; temperature_conversion_unit; temperature_conversion_source; cohort_driver; cohort_driver_unit; cohort_driver_basis; cohort_driver_method; cohort_driver_state; cohort_driver_sample_time; cohort_driver_source; cohort_driver_conversion_factor; cohort_driver_conversion_unit; cohort_driver_conversion_source; all_user_driver; all_user_driver_unit; all_user_driver_basis; all_user_driver_method; all_user_driver_state; all_user_driver_sample_time; all_user_driver_source; all_user_driver_conversion_factor; all_user_driver_conversion_unit; all_user_driver_conversion_source; attribution_share; attribution_share_unit; attribution_share_basis; attribution_share_method; attribution_share_state; attribution_share_sample_time; attribution_share_source; attribution_share_conversion_factor; attribution_share_conversion_unit; attribution_share_conversion_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 测真实供应用途持留收集直接流组成密度温度原生来源实际接收门槛；整件混合废物内持留液非叠加。容量未装液状态库存余额不量化水药物废液。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | m3; 真实组成密度温度单位 | 每真实事件及匹配计量期间 | 完整职责来源集合截止相关资产寿命 | 真实节点库房订单责任全部共享用户 | 每参考流 | 各原生单位基准方法状态采样时间来源校准换算不确定性完整责任 |
| cp_supplies | original_sterile_syringe_trade | 真实独立运行物资匹配未用退回 | 真实物理来源事件原生操作数账 | material_id; SKU; formulation_identity; source_scope_match; useful_return_acceptance; external_receiver; stock_representation; actual_use; internal_recovery_link; actual_fate; production_owner; inherited_component_exclusion; native_supply; native_supply_unit; native_supply_basis; native_supply_method; native_supply_state; native_supply_sample_time; native_supply_source; native_supply_conversion_factor; native_supply_conversion_unit; native_supply_conversion_source; opening; opening_unit; opening_basis; opening_method; opening_state; opening_sample_time; opening_source; opening_conversion_factor; opening_conversion_unit; opening_conversion_source; gross_receipts; gross_receipts_unit; gross_receipts_basis; gross_receipts_method; gross_receipts_state; gross_receipts_sample_time; gross_receipts_source; gross_receipts_conversion_factor; gross_receipts_conversion_unit; gross_receipts_conversion_source; receipt_tare; receipt_tare_unit; receipt_tare_basis; receipt_tare_method; receipt_tare_state; receipt_tare_sample_time; receipt_tare_source; receipt_tare_conversion_factor; receipt_tare_conversion_unit; receipt_tare_conversion_source; net_receipts; net_receipts_unit; net_receipts_basis; net_receipts_method; net_receipts_state; net_receipts_sample_time; net_receipts_source; net_receipts_conversion_factor; net_receipts_conversion_unit; net_receipts_conversion_source; closing_including_recovered; closing_including_recovered_unit; closing_including_recovered_basis; closing_including_recovered_method; closing_including_recovered_state; closing_including_recovered_sample_time; closing_including_recovered_source; closing_including_recovered_conversion_factor; closing_including_recovered_conversion_unit; closing_including_recovered_conversion_source; matched_unused_external_return; matched_unused_external_return_unit; matched_unused_external_return_basis; matched_unused_external_return_method; matched_unused_external_return_state; matched_unused_external_return_sample_time; matched_unused_external_return_source; matched_unused_external_return_conversion_factor; matched_unused_external_return_conversion_unit; matched_unused_external_return_conversion_source; active_fraction; active_fraction_unit; active_fraction_basis; active_fraction_method; active_fraction_state; active_fraction_sample_time; active_fraction_source; active_fraction_conversion_factor; active_fraction_conversion_unit; active_fraction_conversion_source; carrier_fraction; carrier_fraction_unit; carrier_fraction_basis; carrier_fraction_method; carrier_fraction_state; carrier_fraction_sample_time; carrier_fraction_source; carrier_fraction_conversion_factor; carrier_fraction_conversion_unit; carrier_fraction_conversion_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; density_conversion_factor; density_conversion_unit; density_conversion_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; temperature_conversion_factor; temperature_conversion_unit; temperature_conversion_source; cohort_driver; cohort_driver_unit; cohort_driver_basis; cohort_driver_method; cohort_driver_state; cohort_driver_sample_time; cohort_driver_source; cohort_driver_conversion_factor; cohort_driver_conversion_unit; cohort_driver_conversion_source; all_user_driver; all_user_driver_unit; all_user_driver_basis; all_user_driver_method; all_user_driver_state; all_user_driver_sample_time; all_user_driver_source; all_user_driver_conversion_factor; all_user_driver_conversion_unit; all_user_driver_conversion_source; attribution_share; attribution_share_unit; attribution_share_basis; attribution_share_method; attribution_share_state; attribution_share_sample_time; attribution_share_source; attribution_share_conversion_factor; attribution_share_conversion_unit; attribution_share_conversion_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 真实独立供应账 S=期初+真实外部净收货-含回收留存期末。总输入 S 单列同范围匹配未用外部输出，或耗用输入 S-return 省输出。不数值 S+退回双抵回收作新收货删未退废物负担。工厂残留润滑屏障不冲无关运行供应。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kg; 真实原生材料比例密度温度单位 | 每真实事件及匹配计量期间 | 完整职责来源集合截止相关资产寿命 | 真实节点库房订单责任全部共享用户 | 每参考流 | 各原生单位基准方法状态采样时间来源校准换算不确定性完整责任 |
| cp_provider | original_sterile_syringe_trade | 原生完成完整外部服务覆盖 | 真实物理来源事件原生操作数账 | provider_id; job_id; completion_gate; completion_time; timezone; timestamp_source; operation; extra_operation_review; resource_scope; electricity_coverage; full_life_asset_coverage; maintenance_EOL_coverage; carrier_empty_coverage; receiver_coverage; dataset_id; overlap_owner; completed_native_jobs; completed_native_jobs_unit; completed_native_jobs_basis; completed_native_jobs_method; completed_native_jobs_state; completed_native_jobs_sample_time; completed_native_jobs_source; completed_native_jobs_conversion_factor; completed_native_jobs_conversion_unit; completed_native_jobs_conversion_source; cohort_driver; cohort_driver_unit; cohort_driver_basis; cohort_driver_method; cohort_driver_state; cohort_driver_sample_time; cohort_driver_source; cohort_driver_conversion_factor; cohort_driver_conversion_unit; cohort_driver_conversion_source; all_user_driver; all_user_driver_unit; all_user_driver_basis; all_user_driver_method; all_user_driver_state; all_user_driver_sample_time; all_user_driver_source; all_user_driver_conversion_factor; all_user_driver_conversion_unit; all_user_driver_conversion_source; attribution_share; attribution_share_unit; attribution_share_basis; attribution_share_method; attribution_share_state; attribution_share_sample_time; attribution_share_source; attribution_share_conversion_factor; attribution_share_conversion_unit; attribution_share_conversion_source | 核实真实原生作业量单位完成资源资产承运接收互斥责任。发票箱器械数不自动作服务作业。灭菌解析装液重包测试需另审完整路线。 | Item(s); 真实服务方原生单位 | 每真实事件及匹配计量期间 | 完整职责来源集合截止相关资产寿命 | 真实节点库房订单责任全部共享用户 | 每参考流 | 各原生单位基准方法状态采样时间来源校准换算不确定性完整责任 |
| cp_assets | original_sterile_syringe_trade | 全部用户完整寿命资产当量 | 真实物理来源事件原生操作数账 | asset_id; job_cohort_id; asset_native_unit; manufacture_scope; maintenance_cleaning_scope; replacement_scope; EOL_scope; all_period_scope; cohort_driver_identity; lifetime_driver_identity; observed_history_records; remaining_use_evidence; termination_evidence; burden_owner; provider_overlap; uncertainty; sensitivity; update_evidence; asset_equivalent; asset_equivalent_unit; asset_equivalent_basis; asset_equivalent_method; asset_equivalent_state; asset_equivalent_sample_time; asset_equivalent_source; asset_equivalent_conversion_factor; asset_equivalent_conversion_unit; asset_equivalent_conversion_source; cohort_used_driver; cohort_used_driver_unit; cohort_used_driver_basis; cohort_used_driver_method; cohort_used_driver_state; cohort_used_driver_sample_time; cohort_used_driver_source; cohort_used_driver_conversion_factor; cohort_used_driver_conversion_unit; cohort_used_driver_conversion_source; all_user_used_driver; all_user_used_driver_unit; all_user_used_driver_basis; all_user_used_driver_method; all_user_used_driver_state; all_user_used_driver_sample_time; all_user_used_driver_source; all_user_used_driver_conversion_factor; all_user_used_driver_conversion_unit; all_user_used_driver_conversion_source; observed_history_driver; observed_history_driver_unit; observed_history_driver_basis; observed_history_driver_method; observed_history_driver_state; observed_history_driver_sample_time; observed_history_driver_source; observed_history_driver_conversion_factor; observed_history_driver_conversion_unit; observed_history_driver_conversion_source; remaining_driver; remaining_driver_unit; remaining_driver_basis; remaining_driver_method; remaining_driver_state; remaining_driver_sample_time; remaining_driver_source; remaining_driver_conversion_factor; remaining_driver_conversion_unit; remaining_driver_conversion_source; complete_lifetime_driver; complete_lifetime_driver_unit; complete_lifetime_driver_basis; complete_lifetime_driver_method; complete_lifetime_driver_state; complete_lifetime_driver_sample_time; complete_lifetime_driver_source; complete_lifetime_driver_conversion_factor; complete_lifetime_driver_conversion_unit; complete_lifetime_driver_conversion_source; cohort_driver; cohort_driver_unit; cohort_driver_basis; cohort_driver_method; cohort_driver_state; cohort_driver_sample_time; cohort_driver_source; cohort_driver_conversion_factor; cohort_driver_conversion_unit; cohort_driver_conversion_source; all_user_driver; all_user_driver_unit; all_user_driver_basis; all_user_driver_method; all_user_driver_state; all_user_driver_sample_time; all_user_driver_source; all_user_driver_conversion_factor; all_user_driver_conversion_unit; all_user_driver_conversion_source; attribution_share; attribution_share_unit; attribution_share_basis; attribution_share_method; attribution_share_state; attribution_share_sample_time; attribution_share_source; attribution_share_conversion_factor; attribution_share_conversion_unit; attribution_share_conversion_source | 各资产用真实兼容作业集合当量及全部用户期间寿命驱动，实测历史加有据剩余使用终止。各使用实测剩余寿命操作数保留原生单位基准方法状态时间来源换算。完整制造维护清洁更换终结、不确定性敏感性更新；服务替代覆盖自有范围，产品有效期非资产寿命。 | Item(s); 真实兼容驱动当量单位 | 每真实事件及匹配计量期间 | 完整职责来源集合截止相关资产寿命 | 真实节点库房订单责任全部共享用户 | 每参考流 | 各原生单位基准方法状态采样时间来源校准换算不确定性完整责任 |
| cp_freight | original_sterile_syringe_trade | 真实唯一包装货载路段逐记录比例 | 真实物理来源事件原生操作数账 | load_id; leg_id; unique_load_leg_key; origin; destination; carrier; period; timezone; timestamp_source; load_extent_EACH_or_TOTAL; actual_cargo_pack_support; parent_child_load_exclusion; tare_role; carrier_resource_scope; empty_scope; commodity_service_owner; share_derivation; repeat_count; repeat_count_unit; repeat_count_basis; repeat_count_method; repeat_count_state; repeat_count_sample_time; repeat_count_source; repeat_count_conversion_factor; repeat_count_conversion_unit; repeat_count_conversion_source; gross_load; gross_load_unit; gross_load_basis; gross_load_method; gross_load_state; gross_load_sample_time; gross_load_source; gross_load_conversion_factor; gross_load_conversion_unit; gross_load_conversion_source; noncargo_tare; noncargo_tare_unit; noncargo_tare_basis; noncargo_tare_method; noncargo_tare_state; noncargo_tare_sample_time; noncargo_tare_source; noncargo_tare_conversion_factor; noncargo_tare_conversion_unit; noncargo_tare_conversion_source; direct_payload; direct_payload_unit; direct_payload_basis; direct_payload_method; direct_payload_state; direct_payload_sample_time; direct_payload_source; direct_payload_conversion_factor; direct_payload_conversion_unit; direct_payload_conversion_source; distance; distance_unit; distance_basis; distance_method; distance_state; distance_sample_time; distance_source; distance_conversion_factor; distance_conversion_unit; distance_conversion_source; cohort_driver; cohort_driver_unit; cohort_driver_basis; cohort_driver_method; cohort_driver_state; cohort_driver_sample_time; cohort_driver_source; cohort_driver_conversion_factor; cohort_driver_conversion_unit; cohort_driver_conversion_source; all_user_driver; all_user_driver_unit; all_user_driver_basis; all_user_driver_method; all_user_driver_state; all_user_driver_sample_time; all_user_driver_source; all_user_driver_conversion_factor; all_user_driver_conversion_unit; all_user_driver_conversion_source; attribution_share; attribution_share_unit; attribution_share_basis; attribution_share_method; attribution_share_state; attribution_share_sample_time; attribution_share_source; attribution_share_conversion_factor; attribution_share_conversion_unit; attribution_share_conversion_source | 保留独立原生毛皮载荷次数距离量基准方法状态时间来源兼容换算。载荷保留真实屏障纸箱货物承载物。EACH 真实有据次数一次；TOTAL 不变。该记录因果原生驱动比例留唯一货载路段求和项内，N 一次；父件内含BOM包材不得重复货物毛量。 | kg*km; 真实原生质量距离次数单位 | 每真实事件及匹配计量期间 | 完整职责来源集合截止相关资产寿命 | 真实节点库房订单责任全部共享用户 | 每参考流 | 各原生单位基准方法状态采样时间来源校准换算不确定性完整责任 |
| cp_fates | original_sterile_syringe_trade | 真实部件包装混合材料去向 | 真实物理来源事件原生操作数账 | event_id; original_unit_id; parent_lot; original_source_link; material_component_identity; included_component_scope; moisture_reported_basis; matching_nonwater_definition; moisture_species_method_scope; nonwater_volatiles_exclusion; actual_BOM; composition_method; composition_source; source_constituent_link; sample_id; sample_representativeness; EACH_or_TOTAL; transfer_class_Product_or_Waste; useful_receiver_acceptance; whole_part_mixed_view; supplied_material_link; content_transfer_link; stream_exclusion_ids; decision; actual_receiver; receiver_classification_evidence; transfer_gate; transport_scope; treatment_recovery_scope; inherited_production_owner; prior_loss_coverage; commodity_loss_link; original_gate_conversion_evidence; unknown_discrepancy; actual_water_mass; actual_water_mass_unit; actual_water_mass_basis; actual_water_mass_method; actual_water_mass_state; actual_water_mass_sample_time; actual_water_mass_source; actual_water_mass_conversion_factor; actual_water_mass_conversion_unit; actual_water_mass_conversion_source; native_count; native_count_unit; native_count_basis; native_count_method; native_count_state; native_count_sample_time; native_count_source; native_count_conversion_factor; native_count_conversion_unit; native_count_conversion_source; gross; gross_unit; gross_basis; gross_method; gross_state; gross_sample_time; gross_source; gross_conversion_factor; gross_conversion_unit; gross_conversion_source; tare; tare_unit; tare_basis; tare_method; tare_state; tare_sample_time; tare_source; tare_conversion_factor; tare_conversion_unit; tare_conversion_source; net_complete_or_part; net_complete_or_part_unit; net_complete_or_part_basis; net_complete_or_part_method; net_complete_or_part_state; net_complete_or_part_sample_time; net_complete_or_part_source; net_complete_or_part_conversion_factor; net_complete_or_part_conversion_unit; net_complete_or_part_conversion_source; component_fraction; component_fraction_unit; component_fraction_basis; component_fraction_method; component_fraction_state; component_fraction_sample_time; component_fraction_source; component_fraction_conversion_factor; component_fraction_conversion_unit; component_fraction_conversion_source; moisture_if_actual; moisture_if_actual_unit; moisture_if_actual_basis; moisture_if_actual_method; moisture_if_actual_state; moisture_if_actual_sample_time; moisture_if_actual_source; moisture_if_actual_conversion_factor; moisture_if_actual_conversion_unit; moisture_if_actual_conversion_source; wet_basis_water_fraction; wet_basis_water_fraction_unit; wet_basis_water_fraction_basis; wet_basis_water_fraction_method; wet_basis_water_fraction_state; wet_basis_water_fraction_sample_time; wet_basis_water_fraction_source; wet_basis_water_fraction_conversion_factor; wet_basis_water_fraction_conversion_unit; wet_basis_water_fraction_conversion_source; dry_basis_water_ratio; dry_basis_water_ratio_unit; dry_basis_water_ratio_basis; dry_basis_water_ratio_method; dry_basis_water_ratio_state; dry_basis_water_ratio_sample_time; dry_basis_water_ratio_source; dry_basis_water_ratio_conversion_factor; dry_basis_water_ratio_conversion_unit; dry_basis_water_ratio_conversion_source; dry_cleanup_carrier; dry_cleanup_carrier_unit; dry_cleanup_carrier_basis; dry_cleanup_carrier_method; dry_cleanup_carrier_state; dry_cleanup_carrier_sample_time; dry_cleanup_carrier_source; dry_cleanup_carrier_conversion_factor; dry_cleanup_carrier_conversion_unit; dry_cleanup_carrier_conversion_source; retained_fluid; retained_fluid_unit; retained_fluid_basis; retained_fluid_method; retained_fluid_state; retained_fluid_sample_time; retained_fluid_source; retained_fluid_conversion_factor; retained_fluid_conversion_unit; retained_fluid_conversion_source; retained_device_material; retained_device_material_unit; retained_device_material_basis; retained_device_material_method; retained_device_material_state; retained_device_material_sample_time; retained_device_material_source; retained_device_material_conversion_factor; retained_device_material_conversion_unit; retained_device_material_conversion_source; retained_packaging; retained_packaging_unit; retained_packaging_basis; retained_packaging_method; retained_packaging_state; retained_packaging_sample_time; retained_packaging_source; retained_packaging_conversion_factor; retained_packaging_conversion_unit; retained_packaging_conversion_source; retained_source_constituent; retained_source_constituent_unit; retained_source_constituent_basis; retained_source_constituent_method; retained_source_constituent_state; retained_source_constituent_sample_time; retained_source_constituent_source; retained_source_constituent_conversion_factor; retained_source_constituent_conversion_unit; retained_source_constituent_conversion_source; stream_exclusion_quantity; stream_exclusion_quantity_unit; stream_exclusion_quantity_basis; stream_exclusion_quantity_method; stream_exclusion_quantity_state; stream_exclusion_quantity_sample_time; stream_exclusion_quantity_source; stream_exclusion_quantity_conversion_factor; stream_exclusion_quantity_conversion_unit; stream_exclusion_quantity_conversion_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; density_conversion_factor; density_conversion_unit; density_conversion_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; temperature_conversion_factor; temperature_conversion_unit; temperature_conversion_source; cohort_driver; cohort_driver_unit; cohort_driver_basis; cohort_driver_method; cohort_driver_state; cohort_driver_sample_time; cohort_driver_source; cohort_driver_conversion_factor; cohort_driver_conversion_unit; cohort_driver_conversion_source; all_user_driver; all_user_driver_unit; all_user_driver_basis; all_user_driver_method; all_user_driver_state; all_user_driver_sample_time; all_user_driver_source; all_user_driver_conversion_factor; all_user_driver_conversion_unit; all_user_driver_conversion_source; attribution_share; attribution_share_unit; attribution_share_basis; attribution_share_method; attribution_share_state; attribution_share_sample_time; attribution_share_source; attribution_share_conversion_factor; attribution_share_conversion_unit; attribution_share_conversion_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 记录真实物理整件部分包材混合可用废物状态接收，真实BOM材料组成原生实测量。干载体持留液器械包材来源组成各需单位基准方法状态采样时间来源排除；非叠加内含视图不可再加物理输出。不由无菌标签破损有效期自动感染锐器分类。如含水换算相关，仅有据水/收到态湿基比例或兼容水/非水干基比值且原生比例因子；含其他挥发物干燥失重不自动作水。处理运输来源负担责任一次。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kg; 真实原生部件组成状态单位 | 每真实事件及匹配计量期间 | 完整职责来源集合截止相关资产寿命 | 真实节点库房订单责任全部共享用户 | 每参考流 | 各原生单位基准方法状态采样时间来源校准换算不确定性完整责任 |
| cp_species | original_sterile_syringe_trade | 真实直接具名物质接收介质 | 真实物理来源事件原生操作数账 | event_id; source_operation; named_substance_or_particle; particle_size_evidence; receiving_medium; original_source_constituent_link; direct_or_retained_role; measurement_method; measurement_source; factor_complete; composition_identity; fate_identity; uncertainty; receiver_scope_exclusion; measured_release; measured_release_unit; measured_release_basis; measured_release_method; measured_release_state; measured_release_sample_time; measured_release_source; measured_release_conversion_factor; measured_release_conversion_unit; measured_release_conversion_source; activity; activity_unit; activity_basis; activity_method; activity_state; activity_sample_time; activity_source; activity_conversion_factor; activity_conversion_unit; activity_conversion_source; factor; factor_unit; factor_basis; factor_method; factor_state; factor_sample_time; factor_source; factor_conversion_factor; factor_conversion_unit; factor_conversion_source; component_fraction; component_fraction_unit; component_fraction_basis; component_fraction_method; component_fraction_state; component_fraction_sample_time; component_fraction_source; component_fraction_conversion_factor; component_fraction_conversion_unit; component_fraction_conversion_source; fate_fraction; fate_fraction_unit; fate_fraction_basis; fate_fraction_method; fate_fraction_state; fate_fraction_sample_time; fate_fraction_source; fate_fraction_conversion_factor; fate_fraction_conversion_unit; fate_fraction_conversion_source; cohort_driver; cohort_driver_unit; cohort_driver_basis; cohort_driver_method; cohort_driver_state; cohort_driver_sample_time; cohort_driver_source; cohort_driver_conversion_factor; cohort_driver_conversion_unit; cohort_driver_conversion_source; all_user_driver; all_user_driver_unit; all_user_driver_basis; all_user_driver_method; all_user_driver_state; all_user_driver_sample_time; all_user_driver_source; all_user_driver_conversion_factor; all_user_driver_conversion_unit; all_user_driver_conversion_source; attribution_share; attribution_share_unit; attribution_share_basis; attribution_share_method; attribution_share_state; attribution_share_sample_time; attribution_share_source; attribution_share_conversion_factor; attribution_share_conversion_unit; attribution_share_conversion_source | 识真实直接事件物质介质，实测或采用兼容有据活动因子组成去向原生量一次。若完整系数已覆盖某组成或去向比例，不要再次乘该比例。来源灭菌不证明商户直接残留排放；持留验收退回期末整件部分混合内含及真实独立转移须闭合，方解释未知差异。 | kg; 真实兼容活动比例单位 | 每真实事件及匹配计量期间 | 完整职责来源集合截止相关资产寿命 | 真实节点库房订单责任全部共享用户 | 每参考流 | 各原生单位基准方法状态采样时间来源校准换算不确定性完整责任 |

### 计算规则

| rule_id | 适用对象 | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | 全部交换 | 真实归属量/正数唯一最终 N 一次；accepted_service 为 1 Item(s)。N 为来源核实所有权转售企业冲销后验收，不供应收货。未完成冲销失败资源事件保留真实期间集合责任；N=0 不除。 | 真实归属原生量; N; 协议 | 每参考流量 |  |
| unit_hierarchy_net_mass | 非交换器械审计 | 经真实父初包货架包纸箱外箱链接用来源核实因子单位基准方法来源计唯一器械件；EACH*真实数量一次或TOTAL原样，不父子叠为额外器械。完整器械净质量=真实包装毛量-初级屏障皮重-二三级运输皮重，原生基准兼容，含真实筒推杆活塞润滑油墨包含配件。独立部件BOM视图不加整质量。来源或代表计量可保持不开包，不规定商户开包。标称mL容量死腔非水药物空气清单或装液质量。 | 真实父子件ID; 原生数量因子; 毛屏障纸箱皮净器械真实BOM抽样状态单位方法来源; 标称容量来源; cp_devices | 唯一原生器械数完整产品净质量审计 |  |
| original_gate_assignment | 服务外商品 | 真实归属原门槛量直接追溯计量原生有据，或原量*兼容集合驱动/正数完整全部终态驱动和。各竞争验收转移期末未售损坏留存可用其他出口退回真实整件部分混合液损失具原生量单位基准方法状态时间来源责任原集合期间换算互斥分子链接。不仅验收分母或中间移动双计。匹配原成品无菌完整器械包装状态真实总需求兼容基线覆盖额外未覆盖需求覆盖责任，缺需求损失在外集成一次，不无关覆盖或负差抵扣。 | 原归属损失基线覆盖额外原生量单位基准方法状态时间来源; 直接追溯或正数完整全部终态集合驱动; 换算覆盖责任集成; cp_devices | 完整无菌器械来源需求损失在外一次 |  |
| inherited_constituent_balance | 真实继承物种审计 | 对各真实继承来源组成物种用兼容单位状态基准，来源量=验收持留+退回持留+期末持留+整件废物内持留+部件废物内持留+混合废物内持留+真实独立可用外送+真实独立容纳外送+真实独立液外送+真实直接释放+明确未决差异。各项具自身原生单位基准方法状态时间来源换算互斥转移键；已入集合退回来源不第二收货。持留内含为其产品废物载体非叠加审计，不额外物理交换；不差异强作大气或无菌环氧乙烷标签推因子。接收处理排放一次。 | 真实来源物种量; 持留验收退回期末整件部件混废; 独立可用容纳液直接; 原生单位基准方法状态时间来源排除; cp_devices; cp_fates; cp_water; cp_species | 真实继承内含闭合审计，未知保持明确 |  |
| supply_stock | 独立供应 | S=归属期初+真实外部净收货-含回收留存独立供应期末。选总输入 S 单列匹配同范围未用外部输出，或耗用输入 S-return 省该输出。不数值 S+退回双抵回收作新收货删未退溢漏废物供应负担。继承器械内含包装不冲无关服务供应。 | 期初; 真实外部净收货; 回收期末; 匹配未用同范围外出; 选定口径; cp_supplies | 不重复供应退回量 |  |
| full_lifetime_share | 资产资源 | 真实资源归属用兼容集合全部用户物理驱动。资产当量=真实兼容作业集合使用驱动/完整全部用户期间寿命驱动，具实测历史加有据剩余使用终止。各操作数原生单位基准方法状态时间来源换算；完整制造维护清洁更换终结不确定性敏感性更新。服务完整覆盖替代匹配自有负担。 | 真实作业集合当量; 全部用户使用历史剩余终止全寿命驱动原生单位基准方法状态时间来源; cp_assets | 完整归属资源资产 |  |
| freight_record_sum | packed_freight | 对唯一 load_id+leg_id 求和[(换算真实包装载荷kg)*(仅EACH时真实有据次数，否则 1)*(换算真实距离km)*(该记录真实因果比例)]/正数 N。TOTAL 不变，N 一次。载荷为真实直接货物计量或兼容毛量减有据车辆非货物皮重，保留同运器械屏障纸箱货物承载物。毛皮载荷次数距离各具独立原生单位基准方法状态时间来源换算因子单位来源。逐记录比例由真实兼容集合全部用户驱动得出留求和项内；父子BOM内含不重复货物。 | 唯一货载路段; EACH/TOTAL/次数; 毛皮直接载荷; 同运屏障纸箱承载物; 距离换算; 该记录驱动比例; N; cp_freight | 每参考服务kg*km |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| quality_identity | 真实交换 | 最终使用前核实真实具体身份门槛介质属性单位；语义卡不证明临床质量交换UUID。 | 完整身份支持详情真实批门槛记录 |
| quality_complete_BOM | 器械包装来源去向 | 真实完整装配BOM包含与独立部件容量与未装液内含屏障有效期来源状态净质量层级抽样互斥持留组成证据。不通用PP配方容量感染处置推断。 | 真实制造型号批部件质量来源放行包装接收记录 |
| quality_full_chain | 完整声明路线 | 成品无菌屏障型号需求损失原生全部终态来源集成外一次；真实资源服务承运全寿命资产接收处理内一次，具不确定性更新。 | 原生换算来源覆盖责任集成计量寿命真实接收决策 |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| warehouse_electricity | original_sterile_syringe_trade | 电表记录对应哪个供电点、交直流状态、电压和供应方数据集？核对已列交流电卡与其他有证据的供电，不得将交流电 UUID 用于其他能源。 真实起重照明记录归属待机清洁；无菌标签不创建商户灭菌器解析设备洁净室运行调控系统。临床器械推力泄漏测试非库房能耗。 范围证据需求：需真实设备计量服务时间边界物理全部用户比例。不容量无菌有效期转能耗因子。 计量证据：协议`cp_power`；原记录口径 Energy / kWh。原数量约束“归属真实实测原生量 / N；cp_power。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`warehouse_electricity_ac`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_power`; 实际来源关联原生记录 |
| housekeeping_water | original_sterile_syringe_trade | 供应记录是否证明为处理自来水，还是其他明确水质或水源？核实供水状态及交接门，不得用自来水卡替代其他水。 仅真实场地设备用水，不注射器装液冲洗灭菌配药临床泄漏测试。标称筒容量死腔不建立液体投入。 范围证据需求：需真实来源用途收集持留直接记录组成接收。包装含水空筒体积不能量化水废水蒸发。 计量证据：协议`cp_water`；原记录口径 Volume / m3。原数量约束“归属真实实测原生量 / N；cp_water。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`housekeeping_water_liquid_tap`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_water`; 实际来源关联原生记录 |
| housekeeping_consumables | original_sterile_syringe_trade | 取得下述清洁或维护职责实际采购品号、配方或安全数据表、供应浓度、物态、用途及库存领用记录。逐项核实洗涤剂以外的实际材料；不得由本 PCR 预设药剂、滤材或剂量。 仅真实库房制剂擦拭吸附过滤物资。工厂筒身活塞润滑剂油墨灭菌残留屏障包装组成属继承商品内含，不新耗商户化学物。 范围证据需求：需真实品号配方载体原生库存量单位基准方法来源匹配未用退回；不假消毒灭菌剂种类剂量。 计量证据：协议`cp_supplies`；原记录口径 Mass / kg。原数量约束“归属真实实测原生量 / N；cp_supplies。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`housekeeping_consumables_synthetic_detergent`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_supplies`; 实际来源关联原生记录 |
| added_shipping_protection | original_sterile_syringe_trade | 取得包装物料单或规格、材料或复合层身份及新增与继承包装的责任。按该记录逐项确定尚缺的套袋、封口、标签、捆扎带或支撑件身份；一体复合包装不得拆成可相加的材料交换。 仅真实供应新增外绑带标签膜护件。原无菌屏障制造者纸箱继承托盘裹膜生产属上游商品；不规定打开更换无菌初级包装。 范围证据需求：需原生数量面积长度质量库存皮重材料换算证据，与原屏障周转承载物不同。 计量证据：协议`cp_supplies`；原记录口径 Mass / kg。原数量约束“归属真实实测原生量 / N；cp_supplies。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`added_shipping_protection_pe_film`; `added_shipping_protection_paperboard_carton`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_supplies`; 实际来源关联原生记录 |
| physical_external_jobs | original_sterile_syringe_trade | 取得本记录中明列各职责的供应商合同或完成结果记录、原生计量物理单位及包含资源。确定各项服务结果身份；检验、清洁、装卸为不同服务，价格或小时不得改称件数。 仅计真实完成合同作业且资源资产门槛完整；质量时间货运服务用真实原生属性。灭菌解析开包重包装液临床检验在本路线外，不藏入通用搬运服务。 范围证据需求：需完成原生量单位时间来源电力完整资产生命周期承运接收范围及一重叠责任。 计量证据：协议`cp_provider`；原记录口径 Count / Item(s)。原数量约束“归属真实实测原生量 / N；cp_provider。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_provider`; 实际来源关联原生记录 |
| complete_shared_assets | original_sterile_syringe_trade | 对本记录中明列的每种资产取得资产编号、配置及匹配的完整生命周期数据集。待补的是各资产或服务身份及全寿命全部使用者分母；仓库、叉车、托盘不能共用一条计数交换，也不能套用默认寿命。 真实共享建筑货架搬运记录设备周转托盘容器含制造维护清洁更换终结。一次性无菌包装交易注射器为商品，不反复制造服务资产。 范围证据需求：需全部用户期间兼容作业寿命驱动单位基准方法状态时间来源实测历史加有据剩余终止不确定性敏感性更新。注射器有效期非库房资产寿命。 计量证据：协议`cp_assets`；原记录口径 Count / Item(s)。原数量约束“归属真实实测原生量 / N；cp_assets。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_assets`; 实际来源关联原生记录 |
| packed_freight | original_sterile_syringe_trade | 对实际入库、出库、退运及废物运输段取得运输方式或车辆、温控服务、起终点、实际载荷和距离及供应方覆盖。方式或配置未明确前不能选择运输流；不同运输方式不得合成一条 kg*km 流。 物理载荷含完整注射器真实无菌屏障纸箱货物承载物同运。仅移有据车辆非货物皮重。容量净PP部件BOM非完整货物；上游服务商户承运覆盖互斥。 范围证据需求：需唯一货载路段EACH/TOTAL次数口径独立毛皮载荷距离单位换算，具该记录因果比例总和项内N一次。 计量证据：协议`cp_freight`；原记录口径 Mass * distance / kg*km。原数量约束“归属真实实测原生量 / N；cp_freight。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_freight`; 实际来源关联原生记录 |
| matched_unused_supply_returns | original_sterile_syringe_trade | 将对外退料凭据匹配到唯一投入品号、状态、原生单位及接收方。采用净消耗投入时省略对应退料交换；商品退货及期末库存另作审计记录。 仅真实同范围未用独立供应以可用状态外送。正常可用完好器械退回仍非交换商品。继承润滑剂灭菌残留屏障留存周转资产不扣无关本期运行供应。 范围证据需求：需来源及库存选择总输入 S 单列匹配未用输出，或耗用输入 S-return 省输出，不 S+退回双抵或删废物供应负担。 计量证据：协议`cp_supplies`；原记录口径 Mass / kg。原数量约束“归属真实实测原生量 / N；cp_supplies。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`matched_unused_supply_returns_detergent_return`; `matched_unused_supply_returns_pe_film_return`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_supplies`; 实际来源关联原生记录 |
| useful_separated_material | original_sterile_syringe_trade | 取得下述具体回收出口的独立交接记录、实际材料或复合状态、质量验收及接收方。按真实交接判定产品或废物，不预设回收产品身份或替代抵扣。 仅真实外部验收可用材料具来源BOM状态量接收证据，不常规拆解再处理或无菌临床可用主张。正常完好整件退回仍非交换商品。器械内持留润滑剂残留随该器械去向，不独立可用化学物外送。 范围证据需求：需真实独立转移原生材料部件身份原来源门槛换算责任可用接收整件混合液排除，不价值可回收性替代抵扣。 计量证据：协议`cp_fates`；原记录口径 Mass / kg。原数量约束“归属真实实测原生量 / N；cp_fates。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_fates`; 实际来源关联原生记录 |
| discarded_whole_units | original_sterile_syringe_trade | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 物理整件废物含真实筒身推杆活塞润滑油墨持留组成及实际随送屏障纸箱。这些质量为非叠加内含审计。无菌标签到期破损隔离召回本身不证明微生物污染感染锐器或真实废弃决定。 范围证据需求：需真实唯一型号批件包装质量数量状态决定接收处理来源损失换算覆盖责任。绝非全PP千克或容量作废液。 计量证据：协议`cp_devices`；原记录口径 Mass / kg。原数量约束“归属真实实测原生量 / N；cp_devices。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`discarded_whole_units_atomic_case`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_devices`; 实际来源关联原生记录 |
| nonusable_separated_parts | original_sterile_syringe_trade | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 仅真实分离收集部件材料，含原生状态接收有据的真实独立容纳不可用继承组成材料，或另审额外作业废物。复合部件保留真实橡胶润滑油墨继承残留；整件组分审计不可重复质量。不假常规针锐器临床使用测试废物。 范围证据需求：需真实部件材料原生数量质量BOM来源抽样状态接收分类处理整件持留排除。屏障破损不识别感染废物。 计量证据：协议`cp_fates`；原记录口径 Mass / kg。原数量约束“归属真实实测原生量 / N；cp_fates。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`nonusable_separated_parts_syringe_barrel`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_fates`; 实际来源关联原生记录 |
| separated_packaging_waste | original_sterile_syringe_trade | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 仅真实物理分离屏障纸膜纸箱新增运输物资在记录接收门槛。原生产留商品上游。整件混合废物持留包装为其非叠加内含，不本第二出口；产品活塞润滑油墨非包材皮重。 范围证据需求：需真实材料原生数量面积质量持留污染来源库存整件混合排除接收承运处理；不回收标记抵扣或假感染分类。 计量证据：协议`cp_fates`；原记录口径 Mass / kg。原数量约束“归属真实实测原生量 / N；cp_fates。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`separated_packaging_waste_paper_pack`; `separated_packaging_waste_metal_pack`; `separated_packaging_waste_plastic_pack`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_fates`; 实际来源关联原生记录 |
| spent_housekeeping_solids | original_sterile_syringe_trade | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 仅真实废擦拭吸附过滤混合残物。干载体持留液器械BOM包材量各有原生证据父来源排除链接，仍该物理废物非叠加内含。不自动生物负担灭菌剂量。 范围证据需求：需真实干材持留量单位基准方法状态采样时间来源毛皮闭合真实接收处理；不丢部件转擦拭物微生物排放因子。 计量证据：协议`cp_fates`；原记录口径 Mass / kg。原数量约束“归属真实实测原生量 / N；cp_fates。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`spent_housekeeping_solids_spent_wipe`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_fates`; 实际来源关联原生记录 |
| collected_housekeeping_liquid | original_sterile_syringe_trade | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 仅真实游离液有实测组成状态密度温度接收。整件吸附固体持留液润滑残留为其非叠加内含，不此第二流。未装液标称容量不表示洗水药物残留医疗废液。 范围证据需求：需真实体积原生来源组成BOM来源门槛链接接收承运处理排除，不质量余额有效期推废水量。 计量证据：协议`cp_water`；原记录口径 Volume / m3。原数量约束“归属真实实测原生量 / N；cp_water。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_water`; 实际来源关联原生记录 |
| identified_direct_species | original_sterile_syringe_trade | 按排放或采样记录确定各实测排放的来源事件、化学物或粒径身份、来源属性及接收介质。物种、粒径或介质不明须保留具体证据缺口；化学品总用量或库存损失不能提供这些身份。 仅真实事件具名物质颗粒介质及兼容实测有据量。工厂灭菌标签可能继承残留不证明商户环氧乙烷挥发物微生物颗粒排放。验收退回期末整件部分混合废物中持留来源组成循各物理去向，不以余额相减作大气。 范围证据需求：需真实物种介质来源门槛内含或真实活动因子组成去向原生单位支持。完整系数不双乘覆盖比例，接收排放一次归责。 计量证据：协议`cp_species`；原记录口径 Mass / kg。原数量约束“归属真实实测原生量 / N；cp_species。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_species`; 实际来源关联原生记录 |


## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| final_gate | 真实声明路线 | N 按来源核实所有权买入转售企业买方关联冲销后唯一最终真实商业验收计数，不收货器械初包纸箱数货币。取消冲销未完成失败职责保留真实资源期间集合归属；N=0 不除。拒收未决商品非验收参考输出。 |  |
| actual_device_basis | 真实声明路线 | 核实未装液不带针一次性三件式PP型号及完整原生BOM质量数量层级屏障有效期状态记录。容量为限定非装液。来源无菌状态不证明破损到期后临床可用或要求商户测试。 |  |
| upstream_and_fates | 真实声明路线 | 需完整真实型号制造模塑装配润滑印刷灭菌放行屏障包来源门槛、来源量状态单位换算及直接或正数完整全部终态归属含期末可用其他退回损失基线额外覆盖责任集成外一次。验收退回期末整件部分混合废物内持留来源组成保持非叠加内含；真实可用容纳液直接去向真实接收分类处理闭合一次。不原PP基线未知残留排放感染锐器回收默认。 |  |
| full_native_coverage | 真实声明路线 | 真实资源服务资产承运接收覆盖全部用户全寿命原生驱动来源须完整互斥。唯一货运EACH/TOTAL记录次数一次完整货物包装承载物该比例总和内N一次。真实数量、兼容原生单位状态基准方法时间来源、核实具体身份及适用验收覆盖证据仍强制，未知不作零。缺少通用数值范围单独披露，不因此阻止其他证据完整的实际数据包，不编造界限。主张来源支持区间需可追溯来源与兼容基准；只有经验合理性界限才另需独立可比参考证据，不用同批最大值自证。保留适用实际来源特定验收区间与不确定性要求。 |  |
| validate_concrete_identity_decisions | all inventory rows | 将每项实际身份核实事项落实到实物明确的流卡和原生数量，或提供不适用证据。证据检查点 ID 不是交换。发生、物种、状态、接收方或服务配置缺失时阻断最终数据完成，不默认零。按规定保持整体与组分、总量投入与对应退料的排他关系。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 真实身份数量审查后可作 secondary_dataset; background_dataset |
| downstream_use | 完整真实器械链的物理自营常温原无菌屏障未装液不带针三件式PP注射器批发附加 |
| allowed_use | 真实型号批未装液不带针完整BOM原屏障有效期状态数量净质量包装期间最终企业门槛 |
| excluded_use | 独立器械足迹带针装液散装非无菌其他型号商户灭菌解析开包重包装液临床测试使用零售代理容量器械箱价格代服务 |
| required_metadata | 全部限定器械BOM原生层级净质量屏障纸箱有效期来源状态库存持留物种去向；原归属损失基线额外来源量终态记录换算覆盖责任集成；完整服务资产承运接收 |
| required_quality_disclosure | 未决真实身份支持有意义范围缺口；型号BOM无菌状态来源批接收残留寿命换算不确定性 |
| update_trigger | 型号BOM屏障有效期来源状态去向真实干预服务资产承运接收最终验收损失覆盖变化 |


## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-medical-trade | official_guidance | UNSD CPC3.0 explanatory notes printed30661074group481and48150syringes: https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 较窄真实注射器服务属于医疗商品481/61074；分类不建立器械配方服务数临床质量。 |
| bd-sterile-syringe-product | handbook | BD300613 current manufacturer product page: https://www.bd.com/en-uk/products-and-solutions/products/product-page.300613 | 定性无菌一次性器械真实型号容量件货架外箱层级有效期采集问题。不通用容量包装数寿命临床性能国家许可或标识作新制造投入。 |
| bd-k251350-device-summary | handbook | BD manufacturer510(k) summary,K251350,prepared30June2025,in10page FDApublic record: https://www.accessdata.fda.gov/cdrh_docs/pdf25/K251350.pdf | 三件式PP筒推杆活塞润滑油墨装配无菌方法初级纸膜二级包装来源问题的技术背景。须真实型号BOM方法包装证据，不通用牌号比例接头容量环氧乙烷剂量无菌保证水平寿命临床法规主张。PCR来源库存寿命货运数学另声明，不归因本申报因子。 |
