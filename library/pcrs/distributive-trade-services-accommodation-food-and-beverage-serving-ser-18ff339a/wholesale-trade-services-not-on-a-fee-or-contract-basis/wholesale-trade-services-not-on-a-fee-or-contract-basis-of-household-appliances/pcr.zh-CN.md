---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-household-appliances
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 未通电已包装家用冷藏冷冻箱的常温自营批发服务

## 1. 范围与适用性

本 PCR 定义制造者放行已包装电动家用冷藏冷冻箱的常温自营企业批发物理服务，从接收持存搬运到验收转售均未通电。真实型号序号配置原密封回路充注泡沫其他实际组成及包装状态限定货批。器具是商品，不是本服务运行的制冷机器。

排除制造压缩机运行演示待机使用食品冷库安装充注回收拆解修理主动重包专用冷链零售佣金代理。真实事故隔离退回已知废物释放仍记录；额外真实专业作业须有界审查完整覆盖，不虚构默认或省略。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-household-appliances |
| classification_refs | CPC3.0:61044；narrower：44811未通电包装家用冷藏冷冻箱常温自营服务 |
| covered_products | 真实放行包装未通电家用冷藏冷冻箱已完成物理商业企业批发货批 |
| excluded_products | 制造运行演示安装充注回收拆解修理器具、冷库冷链零售代理 |
| representative_product | 具真实型号序号未通电回路来源组成状态包装净皮重真实条件门槛的验收商业货批 |
| production_route | 放行包装未通电器具接收 -> 常温库存搬运发出 -> 真实企业验收及例外去向 |
| market_state | 完成物理贸易服务，不变未通电器具继承组成为非交换商品 |


## 3. 参考流

| Field | Value |
| --- | --- |
| What | 已完成的未通电已包装家用冷藏冷冻箱常温自营批发货批服务 |
| How much | 1 Item(s)，一个唯一验收商业货批，不是一台一包千克充注金额 |
| How well | 真实制造者型号序号未通电原回路充注包装状态、买方门槛记录例外 |
| How long or cycle | 真实接收持存发出退回验收事故期间及归属待机清洁截止共享资产完整寿命 |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 已完成的未通电已包装家用冷藏冷冻箱常温自营批发货批服务 |
| reference_flow_property | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | 数量单位 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | manufacturer_released_packed_household_electric_fridgefreezer; actual_manufacturer_model_serial_configuration; actual_unpowered_state_and_no_compressor_demo; factory_sealed_circuit_source_identity_charge_state; actual_inherited_foam_oil_battery_if_included; actual_accessories_and_original_package_instances; net_appliance_mass_and_original_package_tare; actual_transit_package_damage_acceptance_state; actual_receipt_stock_dispatch_acceptance_periods; ownership_resale_business_buyer; actual_incident_constituent_fates_and_receivers; actual_resource_provider_carrier_treatment_scope |

N>0 是记录冲销后真实唯一验收服务数。失败隔离事故未完成期间作业须有据责任集合归属，即使该期无服务完成。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| service_count | accepted_service | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 参考输出为 1 Item(s)，一个商业验收服务，不是器具数或组成质量。 |
| appliance_mass | nonexchange merchandise | Count and Mass | appliance units; packages; kg | 记录真实唯一序号包装毛皮重净器具质量及真实原生因子单位来源；净量含持留充注泡沫附件。不父器具内含材料质量新增叠库存。 |
| constituent_state | incident materials | actual native source property | kg; actual state units | 用真实工厂物种充注泡沫油电池记录单位状态基准来源；组成去向直接测量须匹配来源。条件危险不是定量流或全材料释放。 |
| native_support | all inventory | actual native property | actual native unit | 核实原生材料服务资产介质属性单位换算。通用电力须真实能源支持，不燃料特定热值系数或充注转服务。 经核实的电力流可按独立确认的电能基准及单位组使用ILCD名为净热值的参考属性；该属性名称不授权套用燃料热值系数。 |


## 5. 系统边界

本附加覆盖真实仓储贸易及真实事故，不是完整器具足迹或运行冷链。制造者用户安全仅定性风险背景，下列库存来源分配去向数学为声明 PCR 方法，不称博世实测释放因子。

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 真实制造者放行包装家用电动冷藏冷冻箱，未通电，原回路充注包含组成有记录 |
| starting_condition_role | 非交换商品，含继承出厂回路工质泡沫其他材料，不服务补充或运行资产 |
| product_classification_scope | 61044组448内较窄未通电包装44811家用冷藏冷冻箱服务 |
| recursive_input_rule | 真实物理服务须完整不重叠门槛，不递归同次销售或重复资源处理运输覆盖 |
| upstream_dataset_requirement | 真实完整兼容放行器具基线含实际柜体压缩机电气回路工厂充注泡沫附件包装，缺制造服务外一次补齐。金属塑料泡沫或运行冷库数据集单独不完整。真实资源服务接收范围须兼容 |
| disclosure | 全部限定；真实型号序号包装未通电回路来源充注继承材料状态；库存期间事故来源去向证据；原门槛需求损失覆盖责任集成；完整服务承运资产接收处理边界 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_addon | all inventory | 全部交易器具制造原包装及实际包含出厂充注泡沫油电池，不论售出损失，均在服务交换外。完整兼容已放行包装密封回路器具基线及定量原门槛归属需求状态损失其他出口覆盖责任须服务外一次集成，全链才完整。本贸易内真实事故搬运接收处理及真实直接释放负担服务内一次。 |  |
| boundary_unpowered | normal route | 常温物流接收转售未通电家用冷藏冷冻箱及继承密封回路。不含压缩机运行演示安装充注回收拆解修理专用冷链。真实额外专业干预调控须明确审查完整清单；排除不能隐实际作业或意味零。 |  |
| boundary_risk | condition and source | 博世用户安全文字仅支持真实运输状态重物搬运及条件性回路损伤风险问题。损伤风险不等实测释放，不假收集排空分解充注损失。不消费者冷藏冷冻化霜用电房间尺寸安装说明转商户作业因子。 | bosch-fridge-safety |
| boundary_constituents | inherited materials | 出厂充注其他包含材料是继承非交换商品组成，不运行补充投入。追真实来源物种量单位状态来源及持留外送废物直接去向，不假补充回收。真实独立可用转移不自动抵扣，不扣无关独立供应或造负补充。 |  |


## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| unpowered_fridge_trade | 未通电冷藏冷冻箱常温库存与自营贸易 | required | 真实自营常温未通电器具转售企业验收 | 一个接收库存搬运发出责任，真实订单清洁事故批次跨期共享设施 | `accepted_service` |

冰箱商品不创建运行制冷保鲜节点。正常器具未通电已包装；条件性真实事故材料直接路径按确切身份真实接收展开，不假排空回收。真实额外专业作业使用前须明确审查完整范围。

### 过程：未通电冷藏冷冻箱常温库存与自营贸易 (`unpowered_fridge_trade`)

#### 输入

##### 产品流

###### 实际使用点交流电 (`warehouse_electricity_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Energy / kWh
- 数量规则：归属实测库房电量 / N；cp_power。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_power`

范围证据需求：需真实库房计量期间完整设备服务范围及因果全部用户驱动；能效标签功率年耗不是实测贸易用电。

###### 实际液态处理自来水供给 (`housekeeping_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Volume / m3
- 数量规则：归属实测供应水 / N；cp_water。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

范围证据需求：需供应使用出口持留及相关原生密度温度组成证据；湿包事故观察不量化废水蒸发。

###### 实际独立记录的合成洗涤剂投入 (`actual_cleanup_supplies_synthetic_detergent`)

仅适用于产品配方、供应状态及用途记录确认的实际合成表面活性洗涤剂。记录扣除包装皮重的材料净量，区分浓缩液与稀释水，整体配方与组分不得相加重复计入。肥皂、消毒剂、抹布、滤材等仍按各自实际身份记录，不预设清洁配方、剂量或发生。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位：Mass / kg
- 数量规则：归属真实供应物资 / N；cp_materials。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`

范围证据需求：需品号配方干材活性载体基准真实库存使用退回原生换算密度温度来源，混合物内含部分不再加投入。

###### 实际独立记录的聚乙烯包装薄膜 (`extra_outer_materials_pe_film`)

仅适用于实际独立供应、供本服务新增包裹或衬垫使用的聚乙烯薄膜，须确认实际聚合物配方与薄膜净量。该身份为工厂门通用生产组合，仍须记录实际供给门、供应方及另负责任的交付负荷。不预设LDPE/HDPE牌号、再生比例、厚度或用量。PVC、PET、PP、多层复合材料、胶黏标签、填充包装及继承商品包装仍按余项独立身份处理；整体供应与组分不得重复计量，不预设发生。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass / kg
- 数量规则：归属真实新增外层供应 / N；cp_materials。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`

范围证据需求：需材料原生数量面积长度质量皮重库存换算证据，继承保温泡沫不等新增运输泡沫供应。

###### 用于新增运输保护的纸板箱 (`extra_outer_materials_paperboard_carton`)

仅覆盖本过程有独立实际证据的“用于新增运输保护的纸板箱”。记录自身物态、净量 kg、事件来源及交接门。其他状态或接收方需在`extra_outer_materials`下独立确定身份，本卡不能替代；记录缺失不证明发生或为零。 仅在新增包装确认为纸板箱时使用，记录结构、纸板箱净质量及供应门。塑料筐、木箱或身份实质不同的复合箱需另设流卡；排除继承包装和周转资产。不预设纤维等级、再生成分比例或每箱质量。

- 选定流：用于新增运输保护的纸板箱
- 流属性/单位：Mass / kg
- 数量规则：`extra_outer_materials_paperboard_carton`实际独占归属的 kg / 验收 N，仅归一化一次；已按参考流给出的数量不得再次除以 N。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`

范围证据要求：需事件关联的原生 kg、状态组成、接收或供应门、归属记录及整件组分或对应投入的排他关联，使用协议`cp_materials`。不提供默认数值或换算因子；其他原生单位须有换算证据后使用。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已完成的未通电已包装家用冷藏冷冻箱常温自营批发货批服务 (`accepted_service`)

一个真实唯一买入转售所有权商业企业货批，按声明型号序号配置未通电状态原密封回路组成包装状态门槛验收。器具托盘包数是独立商品量。

- 选定流：已完成的未通电已包装家用冷藏冷冻箱常温自营批发货批服务
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_appliances`

范围证据需求：需真实完成制造者型号序号配置来源充注身份状态净毛皮重期间及验收例外，不器具等服务千克充注或能效额定等价。

###### 退回供应方的未使用合成洗涤剂 (`unused_supply_return_detergent_return`)

仅覆盖本过程有独立实际证据的“退回供应方的未使用合成洗涤剂”。记录自身物态、净量 kg、事件来源及交接门。其他状态或接收方需在`unused_supply_return`下独立确定身份，本卡不能替代；记录缺失不证明发生或为零。 将未使用材料的配方、供应状态和原生质量严格匹配到投入`actual_cleanup_supplies_synthetic_detergent`。本卡为可用对外退料，不是废物、期末库存或内部循环。仅在总量供应口径下列此输出；投入已扣除该退料时必须省略对应退料输出，不自动抵扣避免生产。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位：Mass / kg
- 数量规则：`unused_supply_return_detergent_return`实际独占归属的 kg / 验收 N，仅归一化一次；已按参考流给出的数量不得再次除以 N。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`

范围证据要求：需事件关联的原生 kg、状态组成、接收或供应门、归属记录及整件组分或对应投入的排他关联，使用协议`cp_materials`。不提供默认数值或换算因子；其他原生单位须有换算证据后使用。

###### 退回供应方的未使用聚乙烯薄膜 (`unused_supply_return_pe_film_return`)

仅覆盖本过程有独立实际证据的“退回供应方的未使用聚乙烯薄膜”。记录自身物态、净量 kg、事件来源及交接门。其他状态或接收方需在`unused_supply_return`下独立确定身份，本卡不能替代；记录缺失不证明发生或为零。 将未使用材料的配方、供应状态和原生质量严格匹配到投入`extra_outer_materials_pe_film`。本卡为可用对外退料，不是废物、期末库存或内部循环。仅在总量供应口径下列此输出；投入已扣除该退料时必须省略对应退料输出，不自动抵扣避免生产。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass / kg
- 数量规则：`unused_supply_return_pe_film_return`实际独占归属的 kg / 验收 N，仅归一化一次；已按参考流给出的数量不得再次除以 N。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`

范围证据要求：需事件关联的原生 kg、状态组成、接收或供应门、归属记录及整件组分或对应投入的排他关联，使用协议`cp_materials`。不提供默认数值或换算因子；其他原生单位须有换算证据后使用。

##### 废物流

###### 废弃完整已包装家用冷藏冷冻冰箱 (`discarded_whole_appliances_atomic_case`)

仅在实际独立记录确认“废弃完整已包装家用冷藏冷冻冰箱”时适用。本卡只覆盖该命名实物状态及自身实际净量、保留组成和接收门。其他部件、碎片、游离液、独立包装及清理载体仍属于`discarded_whole_appliances`中的身份核实事项；不得移动边界、预设事件、将库存差当废弃，或把仍保留在整体流内的组分另算出口。实际混收流须匹配自身准确身份。原有原生单位数量协议只用于本独占具体情形，其他实际去向分别协调。

- 选定流：废弃完整已包装家用冷藏冷冻冰箱
- 流属性/单位：Mass / kg
- 数量规则：归属实测真实整机废物 / N；cp_appliances。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_appliances`

范围证据需求：需真实序号型号毛净包装皮重持留组成状态处置及原成品门槛需求损失换算责任；实际接收处理边界含残留制冷剂泡沫处理一次。

###### 实际单独收集的纸类包装废物 (`actual_pack_waste_paper_pack`)

仅适用于本节点实际独立废弃、单独收集的纸类包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：包装废弃物，纸类 `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- 流属性/单位：Mass / kg
- 数量规则：归属实测分离废包材 / N；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

范围证据需求：需材料皮重污染互斥整件部分废物流及运输处理范围。收集回收标记本身不作真实回收抵扣。


###### 实际单独收集的金属包装废物 (`actual_pack_waste_metal_pack`)

仅适用于本节点实际独立废弃、单独收集的金属包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：金属包装废物 `cdda6013-c0c5-4c72-990a-f5668fe71069`
- 流属性/单位：Mass / kg
- 数量规则：归属实测分离废包材 / N；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

范围证据需求：需材料皮重污染互斥整件部分废物流及运输处理范围。收集回收标记本身不作真实回收抵扣。


###### 实际单独收集的塑料包装废物 (`actual_pack_waste_plastic_pack`)

仅适用于实际独立废弃、单独收集的空塑料包装，保留实际组成、含水状态及接收方。含残留商品的混合包装、污染混合流、设备内保温泡沫、一次性抹布及复合包装不使用本分支；整体混合流中的组分仅作不可相加审计，运输处理责任计入一次。不预设排空、回收、发生或数量。

- 选定流：塑料包装废物 `919351c4-3e25-4092-9934-73ecec021a3b`
- 流属性/单位：Mass / kg
- 数量规则：归属实测分离废包材 / N；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

范围证据需求：需材料皮重污染互斥整件部分废物流及运输处理范围。收集回收标记本身不作真实回收抵扣。

###### 收集并送处理的场所清洁水性废水 (`contained_cleanup_liquid_aqueous_cleaning`)

仅覆盖本过程有独立实际证据的“收集并送处理的场所清洁水性废水”。记录自身物态、净量 m3、事件来源及交接门。其他状态或接收方需在`contained_cleanup_liquid`下独立确定身份，本卡不能替代；记录缺失不证明发生或为零。 仅在实际独立收集并转移至废物接收方时启用，不得用于仍保留在整件、包装或收集混合物中的组分。保留组成只作不可相加记录。不预设开包、切割、拆解、主动干燥、回收率或处理路线，处理及运输责任只归属一次。 本卡为场所清洁水性废水，保留实际溶解或悬浮负荷及实测接收体积。排除独立收集的未稀释商品、非水液体、冷凝水或生活污水；若转移前实际混合，另定该真实混合物身份，不得叠加组分体积或称其为纯清洁水。不从供水量推算本数量。

- 选定流：收集并送处理的场所清洁水性废水
- 流属性/单位：Volume / m3
- 数量规则：`contained_cleanup_liquid_aqueous_cleaning`实际独占归属的 m3 / 验收 N，仅归一化一次；已按参考流给出的数量不得再次除以 N。
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
| allocation_accepted | all duties | 采用真实唯一正数验收商业 N 及因果物理集合期间比例。失败隔离退回订单待机清洁事故响应未完成期间职责，即使当期无完成仍归属；器具托盘数利润不是 N。 |  |
| allocation_goods | nonexchange commodity | 按互斥序号组成状态闭合归属期初净收货买方退回期末验收转移退供其他外出真实整件部分损失，隔离为内部。原成品需求状态损失及真实材料损失按兼容原量换算覆盖责任服务外一次匹配，不整机负担乘泄漏千克或重复已含工厂充注生产。 |  |
| allocation_supplies | independent supplies and unused_supply_return | S=归属期初+真实外部净收货-含留存回收独立供应期末。总输入 S 并独立同范围匹配未用输出，或仅耗用输入 S-return 省匹配输出。内部回收非新收货，不数值 S+退回双扣或删废物溢漏上游负担。继承工厂材料外送属独立来源账，不扣独立补充清洁投入。 |  |
| allocation_full_life | shared resources/assets/providers | 兼容计量期间按集合物理驱动量/全部用户驱动量分完整资源。完整资产当量=兼容集合驱动量/全部用户期间完整寿命驱动量；含制造维护清洁更换终结，实测寿命或历史有据剩余终止单位不确定性敏感性更新。完整服务视图替代重叠自有覆盖不叠加。 |  |
| allocation_incident | actual constituents and outlets | 各真实继承物种材料来源与期初收货验收退回期末器具持留充注、真实废弃整机或废零件内持留材料（链接各物理废物出口的非叠加内含审计）、真实独立可用外转容纳独立废物其他废物吸附内容真实直接释放核对。回收留存非收货外送，未知差额阻完整。整机零件包材吸附工质独立工质流组成视图互斥。接收处理含残充注泡沫及其排放一次，不再商户直接释放。 |  |



| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| source_scope_normalization | 非交换商品与服务组合 | 原始外部商品库存、来源归属损失及缺阶段新增上游集成量均保留有证据的实际原始作用域。逐量识别一个实际货批、目标服务集合或已经每参考流，并记录来源目标作用域编号与数量口径。来源集合全部出口分母仅把原始量归属该目标范围，不自动等于目标验收服务N。仅与1 Item(s)服务组合时，以同目标范围原始归属量除正数唯一验收source_same_scope_N，记录验收编号时间冲销证据，取得每参考量。有证单货批source_same_scope_N=1，已每参考量不再除。保留实际原始集成量来源链接，不缩小真实上游补阶段量，不用无关N除整个来源集合；N0责任披露不除。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_appliances | unpowered_fridge_trade | 验收贸易及非交换器具组成库存 | 原始事件计量范围来源及去向记录 | consignment_id; manufacturer; model; serial; configuration; included_accessories; sealed_circuit_state; source_charge_record; foam_agent_record; battery_if_actual_record; product_unit_count; count_unit; physical_package_instance_id; package_quantity; package_unit; package_dimensions; dimension_unit; dimension_method; dimension_source; gross_package_mass; package_tare; net_appliance_mass; mass_unit; mass_conversion_factor; mass_conversion_unit; mass_conversion_source; material_composition; composition_basis; composition_source; retained_constituent_state; temperature; temperature_unit; condition_time; transit_condition; unpowered_evidence; opening; gross_receipts; receipt_tare; net_receipts; buyer_returns; closing; accepted_transfer; supplier_returns; quarantine_internal; other_exits; actual_whole_discard; actual_part_exit; disposition; physical_fate; receipt_time; dispatch_time; acceptance_time; ownership_gate; buyer_gate; original_gate_dataset_id; original_gate_reference; original_gate_quantity; original_gate_unit; original_gate_state; original_gate_quantity_source; allocation_method; allocation_source; direct_assignment_evidence; source_cohort_driver; source_cohort_driver_unit; source_all_exit_driver; source_all_exit_driver_unit; assigned_source_quantity; assigned_source_unit; assigned_source_quantity_source; original_gate_loss_quantity; original_gate_loss_unit; original_gate_loss_basis; loss_conversion; loss_conversion_unit; loss_conversion_source; state_change_evidence; burden_owner; already_included_loss_coverage; retained_charge_pack_fates; integration_result; N; source_assignment_scope_id; source_assignment_scope_kind; source_quantity_basis; source_target_scope_id; source_same_scope_N; source_same_scope_N_unit; source_same_scope_N_basis; source_same_scope_N_method; source_same_scope_N_state; source_same_scope_N_sample_time; source_same_scope_N_source; source_same_scope_acceptance_ids; source_already_per_reference; raw_integration_scope_link; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | 真实验收未通电型号序号包装组成关联互斥库存退回损伤去向。真实原成品来源量状态及直接或分配原生来源用于服务外归属需求损失，不充注质量等整机。  原始外部商品库存、来源归属损失及缺阶段新增上游集成量均保留有证据的实际原始作用域。逐量识别一个实际货批、目标服务集合或已经每参考流，并记录来源目标作用域编号与数量口径。来源集合全部出口分母仅把原始量归属该目标范围，不自动等于目标验收服务N。仅与1 Item(s)服务组合时，以同目标范围原始归属量除正数唯一验收source_same_scope_N，记录验收编号时间冲销证据，取得每参考量。有证单货批source_same_scope_N=1，已每参考量不再除。保留实际原始集成量来源链接，不缩小真实上游补阶段量，不用无关N除整个来源集合；N0责任披露不除。 只归属独立确认的实物情形，其他实际去向按来源分别保留；每个原生记录只属于一个交换，任何总量仅作不可相加审计。 | Item(s); appliance units; packages; kg; actual state units | 每真实事件及匹配计量期间 | 完整归属期间截止及寿命证据 | 本节点全部实际职责与共享用户 | 每参考流 | 原始校准、兼容单位状态基准换算来源、完整责任及不确定性 |
| cp_power | unpowered_fridge_trade | 库房电力真实物理归属 | 原始事件计量范围来源及去向记录 | meter_id; period_start; period_end; opening_reading; closing_reading; energy_unit; device_scope; idle_cleanup; cohort_driver; cohort_driver_unit; all_user_driver; all_user_driver_unit; attribution_share; share_source; provider_included_scope; source; uncertainty; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 计量真实库房设备范围期间含待机清洁，按兼容完整全部用户物理驱动分配，不商品运行标签。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kWh | 每真实事件及匹配计量期间 | 完整归属期间截止及寿命证据 | 本节点全部实际职责与共享用户 | 每参考流 | 原始校准、兼容单位状态基准换算来源、完整责任及不确定性 |
| cp_water | unpowered_fridge_trade | 真实水供应容纳液直接路径 | 原始事件计量范围来源及去向记录 | source_id; period; supplied_volume; retained_volume; collected_volume; volume_unit; actual_outfall; receiver; composition; composition_basis; composition_source; density; density_unit; density_source; temperature; temperature_unit; stream_exclusion_ids; evaporation_evidence; fate_basis; fate_source; transport_scope; treatment_scope; cohort_driver; all_user_driver; driver_unit; attribution_share; source; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 实测真实供应出口流及组成接收、持留液排除有据直接去向，不推化霜或制冷剂水替代。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | m3; actual composition units | 每真实事件及匹配计量期间 | 完整归属期间截止及寿命证据 | 本节点全部实际职责与共享用户 | 每参考流 | 原始校准、兼容单位状态基准换算来源、完整责任及不确定性 |
| cp_materials | unpowered_fridge_trade | 独立服务供应匹配退回 | 原始事件计量范围来源及去向记录 | material_id; SKU; native_quantity; native_unit; formulation; active_fraction; carrier_fraction; fraction_basis; fraction_source; opening; gross_receipts; receipt_tare; net_receipts; internal_issue; internal_recovery; closing_including_recovered; actual_use; matched_unused_external_return; source_scope_match; external_receiver; stock_representation; conversion_factor; conversion_unit; conversion_source; density; density_unit; density_source; temperature; temperature_unit; actual_fate; fate_basis; cohort_driver; all_user_driver; driver_unit; attribution_share; source; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 闭合真实原生独立供应库存退回来源。总 S 独立匹配退回或仅耗用 S-return 省输出。继承器具充注泡沫电池不作本供应或净扣减。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kg; actual native supply units | 每真实事件及匹配计量期间 | 完整归属期间截止及寿命证据 | 本节点全部实际职责与共享用户 | 每参考流 | 原始校准、兼容单位状态基准换算来源、完整责任及不确定性 |
| cp_provider | unpowered_fridge_trade | 真实完成外作业完整范围 | 原始事件计量范围来源及去向记录 | provider_id; job_id; native_quantity; native_unit; completed_gate; completion_time; actual_operation; bounded_extra_operation_review; resource_scope; electricity_coverage; full_asset_coverage; maintenance_EOL_coverage; carrier_empty_scope; treatment_scope; receiver_direct_release_coverage; upstream_dataset; overlap_owner; cohort_driver; all_user_driver; driver_unit; attribution_share; source; N | 核实真实原生完成完整资源资产运输处理直接释放范围。选定无回收修理路线外真实专业作业须声明审查，不作通用零资源作业。 | Item(s); actual provider units | 每真实事件及匹配计量期间 | 完整归属期间截止及寿命证据 | 本节点全部实际职责与共享用户 | 每参考流 | 原始校准、兼容单位状态基准换算来源、完整责任及不确定性 |
| cp_assets | unpowered_fridge_trade | 完整寿命共享设施归属 | 原始事件计量范围来源及去向记录 | asset_id; asset_native_unit; manufacture_scope; maintenance_cleaning_scope; replacement_scope; EOL_scope; burden_owner; provider_overlap; cohort_driver_identity; cohort_driver; cohort_driver_unit; lifetime_driver_identity; lifetime_driver; lifetime_driver_unit; all_user_driver; all_period_scope; observed_history; observed_unit; evidenced_remaining_use; remainder_unit; remainder_source; termination_basis; uncertainty; sensitivity; update_evidence; source; N | 采用真实完整生命周期兼容全部用户期间寿命驱动及实测寿命或历史加有据剩余终止不确定性敏感性更新。商品冰箱寿命非库房资产寿命。 | Item(s); actual compatible driver units | 每真实事件及匹配计量期间 | 完整归属期间截止及寿命证据 | 本节点全部实际职责与共享用户 | 每参考流 | 原始校准、兼容单位状态基准换算来源、完整责任及不确定性 |
| cp_transport | unpowered_fridge_trade | 真实包装载荷路段承运覆盖 | 原始事件计量范围来源及去向记录 | leg_id; origin; destination; carrier; period; physical_package_instances; gross_load; gross_load_source; load_tare; load_tare_role; load_tare_source; packed_payload_state; net_packed_load; load_unit; distance; distance_unit; distance_source; load_conversion_factor; load_conversion_unit; load_conversion_source; distance_conversion_factor; distance_conversion_unit; distance_conversion_source; empty_scope; carrier_resource_scope; extra_conditioning_review; commodity_service_owner; cohort_driver; all_user_driver; driver_unit; attribution_share; share_source; source; N | 采用真实完整包装货物路线换算因果比例；车辆非货物皮重不扣器具包装持留充注，不重复父项内含组成。 | kg*km; actual native leg units | 每真实事件及匹配计量期间 | 完整归属期间截止及寿命证据 | 本节点全部实际职责与共享用户 | 每参考流 | 原始校准、兼容单位状态基准换算来源、完整责任及不确定性 |
| cp_waste | unpowered_fridge_trade | 真实互斥整件部分包装清洁固流 | 原始事件计量范围来源及去向记录 | event_id; model; serial; physical_package_id; component_id; material; retained_charge_or_foam_or_battery; whole_or_part; native_count; count_unit; wet_mass; dry_mass; mass_unit; material_fraction; fraction_basis; fraction_source; moisture; moisture_unit; moisture_basis; moisture_method; moisture_source; sample_id; sample_state; sample_time; supplied_material_link; dry_cleanup_material_mass; retained_fluid_quantity; retained_fluid_unit; retained_fluid_basis; retained_fluid_source; contaminant_composition_basis; stream_exclusion_ids; stream_exclusion_quantity; stream_exclusion_unit; contamination; gross; tare; net; origin; actual_fate; receiver; transfer_gate; transport_scope; treatment_recovery_scope; residual_charge_foam_treatment_coverage; commodity_loss_link; cohort_driver; all_user_driver; driver_unit; attribution_share; source; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 测真实互斥整件部分包装吸附液流及内含视图接收完整运输处理含残留充注泡沫，不假拆解。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kg; actual material/count units | 每真实事件及匹配计量期间 | 完整归属期间截止及寿命证据 | 本节点全部实际职责与共享用户 | 每参考流 | 原始校准、兼容单位状态基准换算来源、完整责任及不确定性 |
| cp_incident | unpowered_fridge_trade | 真实继承组成库存来源去向释放 | 原始事件计量范围来源及去向记录 | event_id; model; serial; constituent_location; source_appliance_gate; source_material_identity; source_species; source_quantity; source_unit; source_state; source_quantity_basis; source_quantity_source; factory_charge_record; factory_charge_unit; composition; component_fraction; fraction_basis; fraction_source; source_material_production_owner; upstream_already_included_coverage; opening_retained_quantity; received_in_appliance_quantity; closing_retained_quantity; retained_in_whole_appliance_waste_quantity; retained_in_whole_appliance_waste_unit; retained_in_whole_appliance_waste_state; retained_in_whole_appliance_waste_source; retained_in_whole_appliance_waste_conversion_factor; retained_in_whole_appliance_waste_conversion_unit; retained_in_whole_appliance_waste_conversion_source; whole_appliance_waste_transfer_link; whole_appliance_waste_content_exclusion_link; retained_in_part_waste_quantity; retained_in_part_waste_unit; retained_in_part_waste_state; retained_in_part_waste_source; retained_in_part_waste_conversion_factor; retained_in_part_waste_conversion_unit; retained_in_part_waste_conversion_source; part_waste_transfer_link; part_waste_content_exclusion_link; returned_in_appliance_quantity; accepted_in_appliance_quantity; internal_transfer; actual_usable_external_export; usable_state_evidence; external_receiver; contained_external_waste; container_gross; container_tare; container_net; container_unit; retained_absorbed_other_stream; other_stream_exclusion_ids; actual_direct_release; release_unit; receiving_medium; measurement_source; activity; activity_unit; factor; factor_unit; factor_basis; factor_source; factor_complete; fate_fraction; fate_basis; fate_source; density; density_unit; density_source; temperature; temperature_unit; actual_intervention; bounded_operation_review; transfer_gate; transport_treatment_scope; receiver_emission_owner; unknown_discrepancy; fate_record_id; fate_quantity_operand_id; fate_quantity_unit; fate_quantity_state; fate_quantity_source; fate_conversion_factor; fate_conversion_unit; fate_conversion_source; shared_source_unit_state_applicability; physical_outlet_link; retained_content_exclusion_link; uncertainty; source_gate_loss_conversion_link; integration_result; cohort_driver; all_user_driver; driver_unit; attribution_share; source; N | 核对真实继承充注泡沫剂油电池材料来源及商品持留库存与真实可用外送容纳废物吸附实测直接介质。未知差额未决。废弃整机或废零件内持留材料须链接非叠加内含审计，具真实量单位状态来源换算转移排除链接。各来源去向量操作数按 fate_quantity_operand_id 链接单位状态来源换算记录；共用来源单位状态须逐操作数明确适用证据。真实专业回收销毁须审作业接收范围，不出厂充注作补充自动泄漏抵扣。 | kg; actual source stock/activity/state units | 每真实事件及匹配计量期间 | 完整归属期间截止及寿命证据 | 本节点全部实际职责与共享用户 | 每参考流 | 原始校准、兼容单位状态基准换算来源、完整责任及不确定性 |
| cp_species | unpowered_fridge_trade | 其他服务直接物种介质 | 原始事件计量范围来源及去向记录 | event_id; source_process; substance; receiving_medium; measured_release; release_unit; activity; activity_unit; factor; factor_unit; factor_basis; factor_source; factor_complete; component_fraction; fraction_basis; fraction_source; fate_fraction; fate_basis; fate_source; measurement_source; uncertainty; cohort_driver; all_user_driver; driver_unit; attribution_share; source; N | 识别真实独立服务物质介质，再实测或有据兼容活动因子组成去向一次，不虚构混合物变物种或差额释放。 | kg; actual compatible activity units | 每真实事件及匹配计量期间 | 完整归属期间截止及寿命证据 | 本节点全部实际职责与共享用户 | 每参考流 | 原始校准、兼容单位状态基准换算来源、完整责任及不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | all inventory | 真实归属物理量除正数唯一 N 一次；accepted_service 为 1 Item(s)。 | 归属量; N; 协议 | 每参考流量 |  |
| supply_stock | independent supplies and unused_supply_return | S=归属期初+真实外部净收货-含留存回收独立供应期末。总输入 S 并独立同范围匹配未用输出，或仅耗用输入 S-return 省匹配输出。内部回收非新收货，不数值 S+退回双扣或删废物溢漏上游负担。继承工厂材料外送属独立来源账，不扣独立补充清洁投入。 | 期初; 真实收货; 回收期末; 匹配未用外出; 口径; cp_materials | 不重复独立供应退回量 |  |
| full_life_share | resources/assets/providers | 兼容计量期间按集合物理驱动量/全部用户驱动量分完整资源。完整资产当量=兼容集合驱动量/全部用户期间完整寿命驱动量；含制造维护清洁更换终结，实测寿命或历史有据剩余终止单位不确定性敏感性更新。完整服务视图替代重叠自有覆盖不叠加。 | 计量期间资源范围; 集合全部用户寿命驱动单位; 实测历史剩余终止来源; cp_assets | 归属完整资源资产当量 |  |
| net_appliance_mass | nonexchange serial/package | 净器具质量=真实唯一物理包装实例求和（毛重-原运输包装皮重），按真实质量因子单位来源一次换算。持留充注泡沫附件在净产品内，不另加质量。逐实例或有据总量二选一，不总量再乘数量。 | 序号物理包装; 毛皮重; 原生质量换算来源; cp_appliances | 净器具商品质量，非交换审核 |  |
| original_gate_assignment | commodity outside service | 采用真实直接计量追溯归属来源量单位状态来源及直接证据；否则归属量=真实原门槛量*兼容来源集合驱动/来源全部出口驱动，具正数完整分母单位分配方法来源。不叠直接分配视图。原门槛整件部分需求损失须匹配真实器具材料状态来源换算覆盖责任，服务外集成一次。 | 原门槛量单位状态来源; 直接证据或方法来源集合全部出口驱动单位; 归属量来源; 换算损失覆盖责任; cp_appliances | 可重复原门槛归属商品量 |  |
| packed_freight | actual_freight | 真实路段求和[(实测包装货物原生载荷*载荷转kg因子)*(真实距离*距离转km因子)*真实比例]/N。包装货物含原新增货包持留组成；实测车辆非货物皮重角色仅排非货物，不产品包装。因子分配比例具兼容单位来源全部用户驱动；不器具内含组成货载双计。 | 真实包装载荷状态或毛重非货物皮重; 原生载荷距离; 因子单位来源; 比例全部用户驱动; N; cp_transport | 每参考服务kg*km |  |
| inherited_constituent_fates | cp_incident and actual inherited outlets | 各真实来源材料物种状态期间，来源持留期初+真实随器具收货量=验收退回期末持留量+真实整机废物内持留材料+真实零件废物内持留材料+真实独立可用外送+独立容纳废物+其他废物已含吸附内容+真实直接释放+明确未决差额，采用互斥兼容原生单位证据。内部回收转移为内部，不新收货外送。释放用直接测量或有据兼容真实活动*因子；仅不完整整工质因子需真实组分去向比例，完整物种因子不再乘。整机零件废物内持留项是链接已有物理废物出口的非叠加内含审计，不新建工质废物交换，不二次数量处理。差额不自动空气销毁；含这些持留材料的接收处理排放在接收范围一次。各来源、收货、持留、验收、退回、期末、整机废物内含、零件废物内含、可用、容纳、吸附、直接、未知量操作数须具识别去向记录、原生单位状态来源及真实兼容换算因子单位来源。仅明确每个链接操作数适用且兼容有据时可共用来源单位状态，不推单位状态来源。 | 来源物种量单位状态来源; 持留库存; 整机零件废物内持留材料及转移排除链接; 真实外送废物吸附排除; 逐操作数原生单位状态来源换算记录; 直接测量或活动因子组成去向单位基准来源; 接收责任; cp_incident | 不重复继承库存去向量及真实物种释放 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| quality_identity | all inventory | 最终使用前确认确切真实流状态门槛属性单位接收介质，条件类别按真实身份展开。 | 完整详情支持证明 |
| quality_incident | source/fates | 真实工厂来源量持留可用容纳吸附直接去向及明确未决差额，不充注转泄漏或整件部分重复。 | 型号序号原充注材料来源及实测去向接收 |
| quality_complete | all responsibilities | 真实资源服务承运全寿命资产接收处理覆盖完整，服务外原成品器具需求损失集成一次。 | 计量范围驱动寿命处理及原门槛换算覆盖集成 |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| warehouse_electricity | unpowered_fridge_trade | 电表记录对应哪个供电点、交直流状态、电压和供应方数据集？核对已列交流电卡与其他有证据的供电，不得将交流电 UUID 用于其他能源。 仅真实起重拣货照明记录设备及归属待机清洁。未通电商品服务不计器具压缩机演示待机额定或食物制冷能耗。 范围证据需求：需真实库房计量期间完整设备服务范围及因果全部用户驱动；能效标签功率年耗不是实测贸易用电。 计量证据：协议`cp_power`；原记录口径 Energy / kWh。原数量约束“归属实测库房电量 / N；cp_power。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`warehouse_electricity_ac`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_power`; 实际来源关联原生记录 |
| housekeeping_water | unpowered_fridge_trade | 供应记录是否证明为处理自来水，还是其他明确水质或水源？核实供水状态及交接门，不得用自来水卡替代其他水。 仅真实场地设备清洁，本路线不洗涤化霜制冰或加湿商品器具。真实环境取水单列。 范围证据需求：需供应使用出口持留及相关原生密度温度组成证据；湿包事故观察不量化废水蒸发。 计量证据：协议`cp_water`；原记录口径 Volume / m3。原数量约束“归属实测供应水 / N；cp_water。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`housekeeping_water_liquid_tap`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_water`; 实际来源关联原生记录 |
| actual_cleanup_supplies | unpowered_fridge_trade | 取得下述清洁或维护职责实际采购品号、配方或安全数据表、供应浓度、物态、用途及库存领用记录。逐项核实洗涤剂以外的实际材料；不得由本 PCR 预设药剂、滤材或剂量。 仅场地清洁或有据事故响应真实原生供应物资。不规定常规消毒密封剂制冷剂补充润滑剂电池修补耗材，出厂组成不作本供应。 范围证据需求：需品号配方干材活性载体基准真实库存使用退回原生换算密度温度来源，混合物内含部分不再加投入。 计量证据：协议`cp_materials`；原记录口径 Mass / kg。原数量约束“归属真实供应物资 / N；cp_materials。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`actual_cleanup_supplies_synthetic_detergent`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_materials`; 实际来源关联原生记录 |
| extra_outer_materials | unpowered_fridge_trade | 取得包装物料单或规格、材料或复合层身份及新增与继承包装的责任。按该记录逐项确定尚缺的套袋、封口、标签、捆扎带或支撑件身份；一体复合包装不得拆成可相加的材料交换。 仅真实新增箱绑带护件标签外套。原纸箱泡沫支撑膜附件袋出厂包装生产留商品系统服务外，不每转售再购。 范围证据需求：需材料原生数量面积长度质量皮重库存换算证据，继承保温泡沫不等新增运输泡沫供应。 计量证据：协议`cp_materials`；原记录口径 Mass / kg。原数量约束“归属真实新增外层供应 / N；cp_materials。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`extra_outer_materials_pe_film`; `extra_outer_materials_paperboard_carton`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_materials`; 实际来源关联原生记录 |
| external_physical_jobs | unpowered_fridge_trade | 取得本记录中明列各职责的供应商合同或完成结果记录、原生计量物理单位及包含资源。确定各项服务结果身份；检验、清洁、装卸为不同服务，价格或小时不得改称件数。 仅真实完成原生合同物理作业计数，资源资产门槛完整。不默许非例行充注回收拆解修理；真实此类服务干预须审查扩展作业完整覆盖。 范围证据需求：需真实完成单位资源资产运输处理直接释放覆盖重叠责任。工时质量面积时间货运须自身原生交换，不金额转次数。 计量证据：协议`cp_provider`；原记录口径 Count / Item(s)。原数量约束“归属已完成原生作业 / N；cp_provider。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_provider`; 实际来源关联原生记录 |
| complete_life_assets | unpowered_fridge_trade | 对本记录中明列的每种资产取得资产编号、配置及匹配的完整生命周期数据集。待补的是各资产或服务身份及全寿命全部使用者分母；仓库、叉车、托盘不能共用一条计数交换，也不能套用默认寿命。 含实际共享建筑货架起重信息托盘箱制造维护清洁更换终结及全部用户期间。交易冰箱是商品，不是商户制冷资产。 范围证据需求：需兼容集合寿命驱动身份单位实测历史有据剩余终止不确定性敏感性更新。不用商品器具寿命或每趟新托盘作服务资产分母。 计量证据：协议`cp_assets`；原记录口径 Count / Item(s)。原数量约束“归属完整资产当量 / N；cp_assets。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_assets`; 实际来源关联原生记录 |
| actual_freight | unpowered_fridge_trade | 对实际入库、出库、退运及废物运输段取得运输方式或车辆、温控服务、起终点、实际载荷和距离及供应方覆盖。方式或配置未明确前不能选择运输流；不同运输方式不得合成一条 kg*km 流。 真实包装载荷路段，含声明承运资源空返。本路线是常温未通电商品物流，不是食品冷链；真实特殊调控须明确审查范围。 范围证据需求：需实测包装货物车辆非货物皮重角色真实距离原生因子单位来源比例全部用户驱动，货包装持留充注留真实货载，不重复计商品组成。 计量证据：协议`cp_transport`；原记录口径 Mass * distance / kg*km。原数量约束“归属真实包装载荷距离 / N；cp_transport。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_transport`; 实际来源关联原生记录 |
| unused_supply_return | unpowered_fridge_trade | 将对外退料凭据匹配到唯一投入品号、状态、原生单位及接收方。采用净消耗投入时省略对应退料交换；商品退货及期末库存另作审计记录。 仅真实独立服务供应未用物资交有记录外部接收方。整器具退回继承充注泡沫留存回收物周转资产不扣本供应账。 范围证据需求：需原生同范围数量状态来源：总供应输入 S 独立匹配输出，或仅耗用 S-return 省该输出，不再抵扣。继承工厂工质外送不扣无关清洁供应，不造负补充。 计量证据：协议`cp_materials`；原记录口径 Mass / kg。原数量约束“归属实测同范围未用外退 / N；cp_materials。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`unused_supply_return_detergent_return`; `unused_supply_return_pe_film_return`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_materials`; 实际来源关联原生记录 |
| usable_inherited_incident_material | unpowered_fridge_trade | 取得下述具体回收出口的独立交接记录、实际材料或复合状态、质量验收及接收方。按真实交接判定产品或废物，不预设回收产品身份或替代抵扣。 仅真实独立转移且可用来源接收核实的工质材料，不假定制冷剂回收。常规回收拆解排除，真实专业干预须有界审查扩展。器具持留工质充注随真实验收、退回、期末、整机废弃或零件转移去向；仅持留绝不形成独立工质外送。 范围证据需求：需物种材料状态真实可用门槛来源充注外部量。工厂制造负担在商品系统一次，不自动抵扣或扣运行补充独立供应库存。 计量证据：协议`cp_incident`；原记录口径 Mass / kg。原数量约束“归属实测真实可用外部转移 / N；cp_incident。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_incident`; 实际来源关联原生记录 |
| discarded_whole_appliances | unpowered_fridge_trade | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 仅真实废弃决策接收门槛。运输凹损隔离标识问题退货或疑似回路损伤本身不证明整机废物充注释放。持留充注泡沫油实际电池包装含在实测整态，不再重复分离出口。 范围证据需求：需真实序号型号毛净包装皮重持留组成状态处置及原成品门槛需求损失换算责任；实际接收处理边界含残留制冷剂泡沫处理一次。 计量证据：协议`cp_appliances`；原记录口径 Mass / kg。原数量约束“归属实测真实整机废物 / N；cp_appliances。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`discarded_whole_appliances_atomic_case`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_appliances`; 实际来源关联原生记录 |
| actual_separated_parts | unpowered_fridge_trade | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 仅事故或另行审查干预真实分离零件，不假拆解。按真实金属塑料玻璃电气泡沫电池状态接收展开，持留工质内容作组成，不重复整机工质流。 范围证据需求：需真实零件材料毛皮重净量持留内容来源及整件部分工质排除接收处理。危险标签泡沫量电池存在本身不量化释放处置。 计量证据：协议`cp_waste`；原记录口径 Mass / kg。原数量约束“归属实测真实分离零件 / N；cp_waste。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_waste`; 实际来源关联原生记录 |
| actual_pack_waste | unpowered_fridge_trade | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 仅真实移除外部接收。器具内保温泡沫与原运输保护泡沫不同；留存原包装继续属商品，不自动仓库废物。 范围证据需求：需材料皮重污染互斥整件部分废物流及运输处理范围。收集回收标记本身不作真实回收抵扣。 计量证据：协议`cp_waste`；原记录口径 Mass / kg。原数量约束“归属实测分离废包材 / N；cp_waste。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`actual_pack_waste_paper_pack`; `actual_pack_waste_metal_pack`; `actual_pack_waste_plastic_pack`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_waste`; 实际来源关联原生记录 |
| spent_cleanup_solids | unpowered_fridge_trade | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 仅真实清洁事故收集固体及持留液油化学颗粒内容。内含为组成视图，不另叠液工质零件出口；供应清洁物来源接收可追溯。 范围证据需求：需原生供应链接持留液量单位基准来源整流毛皮重净量其他流排除真实处理。不从未知充注差额假制冷剂被擦拭物吸收。 计量证据：协议`cp_waste`；原记录口径 Mass / kg。原数量约束“归属实测真实废清洁固体 / N；cp_waste。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_waste`; 实际来源关联原生记录 |
| contained_cleanup_liquid | unpowered_fridge_trade | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 仅真实收集清洁液及真实组成接收方。不默认化霜水；事故制冷剂油作为真实独立容纳流转移不在此重复。 范围证据需求：需来源体积密度温度组成单位基准及处理运输排除证据，不整机工质库存差额变废水。 计量证据：协议`cp_water`；原记录口径 Volume / m3。原数量约束“归属实测真实容纳液 / N；cp_water。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`contained_cleanup_liquid_aqueous_cleaning`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_water`; 实际来源关联原生记录 |
| contained_inherited_incident_waste | unpowered_fridge_trade | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 仅有容器实测独立转移的制冷剂油或其他真实事故材料送真实接收处理。如真实回收干预须另审范围。器具持留充注泡沫及整件部分清洁废物已含吸附工质不作第二出口。 范围证据需求：需来源充注材料身份容器毛皮重净量组成去向基准来源接收转移处理覆盖库存排除。不默认收集销毁或自动供应扣减。 计量证据：协议`cp_incident`；原记录口径 Mass / kg。原数量约束“归属实测独立容纳事故废物 / N；cp_incident。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_incident`; 实际来源关联原生记录 |
| actual_inherited_species_release | unpowered_fridge_trade | 按排放或采样记录确定各实测排放的来源事件、化学物或粒径身份、来源属性及接收介质。物种、粒径或介质不明须保留具体证据缺口；化学品总用量或库存损失不能提供这些身份。 仅有证据的密封充注油泡沫剂或其他包含组成真实直接事故物种介质。出厂充注量损伤风险气味缺量本身不是释放量。下游接收处理排放在实际服务处理范围一次，不重复商户直接释放。 范围证据需求：需真实来源量物种状态单位来源、去向或完整物种因子、组分比例基准证据；不默认排空泡沫分解充注等泄漏电池变金属释放。 计量证据：协议`cp_incident`；原记录口径 Mass / kg。原数量约束“归属实测或有据真实物种释放 / N；cp_incident。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_incident`; 实际来源关联原生记录 |
| other_actual_direct_substances | unpowered_fridge_trade | 按排放或采样记录确定各实测排放的来源事件、化学物或粒径身份、来源属性及接收介质。物种、粒径或介质不明须保留具体证据缺口；化学品总用量或库存损失不能提供这些身份。 真实非继承直接来源如供应清洁剂溢漏须具名物质介质及有据测量活动。不整混合物库房气味未知水材料差额当物种量。 范围证据需求：需兼容活动因子组成去向单位基准来源不确定性，完整物种因子不重复乘组成去向。 计量证据：协议`cp_species`；原记录口径 Mass / kg。原数量约束“归属有据真实直接量 / N；cp_species。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_species`; 实际来源关联原生记录 |


## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_completion | accepted_service | 需真实自营企业验收商业完成全部限定正数唯一 N。器具包数能效标签制冷剂充注不是本计数服务。 |  |
| validate_unpowered | normal operation | 证明制造者型号序号未通电真实包装运输回路组成状态。不假用户运行能源制冷化霜安装回收修理，真实新增作业须声明审查清单。 | bosch-fridge-safety |
| validate_factory_fates | incident and inherited materials | 工厂来源材料物种量单位状态来源及真实持留可用废物吸附直接去向须有据。风险标签充注量气味差额非释放。整机废物及零件废物内持留材料须明确数量单位状态来源换算及转移排除链接；这些是内含审计，不额外工质输出。其他全部来源去向量须链接原生单位状态来源换算证据，或明确有据兼容共享来源适用。不工厂生产重复作补充、不未知差额记零、不整件部分工质双计、不可用转移扣无关供应。 |  |
| validate_chain | commodity outside service | 采用真实完整放行包装家用冷藏冷冻箱基线，按实际含柜体压缩机电气回路充注泡沫附件包装，缺制造服务外一次补齐。原门槛归属需求状态损失量换算来源及互斥出口覆盖责任集成须匹配真实器具材料状态；真实直接释放接收处理服务内一次。 |  |
| validate_native_scope | all physical duties | 核实具体原生身份属性单位完整服务承运共享全寿命资产接收范围全部用户驱动。真实独立继承来源分开；不套用燃料净总热值系数代替电能、不费用转次数、不商品寿命默认库房寿命。 经核实的电力流可按独立确认的电能基准及单位组使用ILCD名为净热值的参考属性；该属性名称不授权套用燃料热值系数。 |  |
| validate_concrete_identity_decisions | all inventory rows | 将每项实际身份核实事项落实到实物明确的流卡和原生数量，或提供不适用证据。证据检查点 ID 不是交换。发生、物种、状态、接收方或服务配置缺失时阻断最终数据完成，不默认零。按规定保持整体与组分、总量投入与对应退料的排他关系。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 具体身份数量证据审查后可用作 secondary_dataset; background_dataset |
| downstream_use | 完整放行器具商品链的常温未通电器具自营批发物理附加服务 |
| allowed_use | 真实声明型号序号配置包装未通电回路来源充注状态期间验收事故分层 |
| excluded_use | 独立完整器具足迹运行演示冷链安装充注回收拆解修理商品制造零售代理充注等泄漏器具等服务换算 |
| required_metadata | 全部限定，真实序号来源充注组成包装库存事故去向；原门槛需求状态损失换算覆盖责任集成；完整资源服务承运资产接收范围 |
| required_quality_disclosure | 未决真实身份支持前景数量范围证据来源充注去向差额实际接收范围、制造者用户来源限制寿命换算不确定性 |
| update_trigger | 型号配置组成充注来源包装库房作业真实事故干预服务资产承运接收范围验收损失去向证据变化 |


## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-appliances | official_guidance | UNSD.CPC3.0 explanatory notes,division61,61044; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 家用器具448含44811家用冷藏冷冻器具，仅分类。 |
| bosch-fridge-safety | handbook | Bosch.Digital user manual,Safety for refrigerator-freezer; https://media3.bosch-home.com/Documents/8001162009/en-GB/1827680111033913867-layer.html | 原厂用户文字仅运输状态重物运输及条件性回路损伤风险，不作实测物种充注默认释放房间尺寸用电制冷化霜安装或通用仓库数字要求。 |
