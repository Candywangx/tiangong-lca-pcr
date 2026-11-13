---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-articles-for-lighting
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 盒装一体式LED顶灯自营批发

## 1. 范围与适用性

本PCR覆盖新厂家盒装、市电供电一体式LED顶灯未通电无电池，自所有权接收经普通常温库存完整性条件管理装卸至真实买方验收转售的自营企业间实体商人服务。须记录实际型号品项一体LED模组驱动配置灯体扩散罩安装板、厂家定义随附件配件与可选另售安装配件、整灯包装数量净皮重状态及采用验收。缺少另售物品不自动为所供灯具不完整。

排除裸替换灯泡电池应急便携其他照明配置、灯具部件制造、拆解维修、安装接线调试通电测试演示、用户运行常规清灯、重包、零售收费代理纯仓储。此路线实际检验仅未通电状态下的目视检查文件完整性核对，不隐含电测组装；任何真实变化作业须先范围复核建模，继承盒普通常温存放不激活保鲜包装生产节点。

全部完整灯具LED驱动灯体扩散罩配件继承包装制造含损失上游均在本附加外。完整链条前实际原完整盒装灯具交接归属需求及同一基线阶段损失覆盖须单独关联一次，实际商人装卸声明接收处理在此一次。厂家网页手册仅识别一个真实一体市电产品及材料包装区分，不把功率流明寿命重量合规或消费者安装保养要求变商人默认保证。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-articles-for-lighting |
| classification_refs | CPC3 61043；所含465内较窄46533一体式LED顶灯 |
| covered_products | 新原盒未通电市电一体式LED顶灯无电池实际自营常温服务 |
| excluded_products | 裸灯泡电池应急便携配置；制造维修通电测试演示安装用户使用；零售代理纯仓储 |
| representative_product | 厂家定义完整灯具型号部件包装状态的真实商业验收货批 |
| production_route | 完整厂家盒装灯具交接 -> 所有权接收未通电常温库存装卸 -> 企业间验收转售 |
| market_state | 计数商业服务；灯具件模组部件包装额定值另为商品元数据审计 |


## 3. 参考流

| Field | Value |
| --- | --- |
| What | 已完成盒装一体式LED顶灯自营批发货批 |
| How much | 1 Item(s) |
| How well | 实际厂家完整一体LED顶灯未通电无电池配置数量状态及商业验收，不自动保证安装安全或运行寿命 |
| How long or cycle | 真实接收常温存放装卸验收区间，库存报表和资产阶段另索引；无用户点灯周期 |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 已完成盒装一体式LED顶灯自营批发货批 |
| reference_flow_property | 数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | 数量单位组 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | consignment_id; merchant_ownership_resale; business_buyer_gate; model_SKU_lot_ids; integrated_LED_driver_configuration; mains_unpowered_no_battery_evidence; body_diffuser_mountingplate_state; manufacturer_included_component_manifest; included_vs_separate_hardware; whole_fixture_package_component_mapping; actual_native_counts_net_tare_basis; actual_pack_condition_acceptance; actual_start_end_duration_unit; site_campaign_period; original_complete_boxed_gate; assigned_gate_demand_loss_owner |

N>0为冲回后唯一真实最终验收商业货批，不把一灯一包模组数流明瓦数寿命小时等同服务数，未完成拒收期间保留实际资源。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| service_count | accepted_service | Count | Item(s) | 用唯一真实商人商业验收，不用灯件数包装行，数量支持不识别产品。 |
| whole_part_pack | 商品 | 实际数量；Mass | 实际整件部件包装单位；kg | 按厂家整灯身份映射实际LED驱动灯体扩散罩安装配件包装，随附与另售配件需实际清单合同，净灯具质量应扣除实际外盒、衬材等皮重，所列包重不自动为净整灯或裸模组重。 |
| unpowered_ratings | 商品元数据 | 实际型号状态证据 | 真实来源原生额定值，不是服务功能单位 | 以实际供方证据记未通电无电池型号谱系，功率流明寿命不是批发电力照明量，不假定安装或通电验证。 |
| conversion_basis | 全部实际交换 | 兼容原生属性 | 实际原生单位 | 按需收毛净皮重数量质量证据及因子单位基准来源密度单位温度来源，不假定标准部件包数标称质量。 |


## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 实际供方完整原盒新市电一体LED顶灯未通电无电池，型号部件随附另售配件包装数量条件证据 |
| starting_condition_role | 商人服务继承完整实体商品，不制造通电或输出已安装照明 |
| product_classification_scope | 46533仅LED顶灯内较窄61043照明批发，不证明裸灯泡全部照明分类 |
| recursive_input_rule | 商品整灯部件继承包装为非交换库存，不当作业用电材料安装服务消耗递归制造同灯。 |
| upstream_dataset_requirement | 单独完整原盒整灯交接含实际LED模组驱动电气灯体扩散罩随附件制造组装放行继承包装，仅裸灯泡模组驱动金属前阶段不完整。 |
| disclosure | 实际整件部件包装谱系随附件未通电无电池条件数量时间交接、原需求损失及全部服务资产服务商货运处理归属缺口 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| commodity_manufacture | 整灯部件包装 | 全部继承灯具部件包装生产含损失上游在服务外，实际实体装卸声明接收处理在此一次。 |  |
| manufacturer_state | luminaire_wholesale | 用真实厂家型号随附内容未通电状态证据，一个一体接线产品仅区分整灯材料另售配件，不把额定值包重用户清洁安装安全标识变通用作业量保证。 | ikea-integrated-ceiling-fixture; ikea-integrated-fixture-manual |
| ambient_only | 实际商人作业 | 继承盒常温库存不新建包装保鲜节点，服务商辅助不纳入通电电测演示接线组装调试，实际变更需范围审核。 |  |
| period_exit | 全部实际事件 | 索引型号、商品货批、包装、服务货批及作业期间及接收核对清洁闲置失败未完成发运退回最终验收，缺随附件盒压损扩散罩灯体损坏真实碎屑需实际接收去向，未知库存差额不等于废整灯数量或物种排放。 |  |


## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| luminaire_wholesale | 未通电盒装顶灯商人服务 | required | 完整盒装一体LED顶灯未通电无电池自营企业验收 | 实体接收完整性条件库存装卸交接，不输出安装或照明服务 | `accepted_service` |

商业货批与仓库作业连续辅助期间重叠，先关联真实未通电状态下的目视检查文件核对、清洁切换闲置拒收未完成资源，再归属验收货批。不默认开每盒拆模组通电检测。缺实际随附驱动安装板或损坏扩散罩等先核厂家清单，另售螺丝不当缺件；真实隔离退回降级废弃有接收路径，不默认维修拆解。期间无验收资源不消失，说明跨期后仅按N一次。

### 过程：未通电盒装顶灯商人服务 (`luminaire_wholesale`)

#### 输入

##### 产品流

###### 实际使用点交流电 (`electricity_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Energy / kWh
- 数量规则：经cp_energy归属真实原生量及兼容有据换算至每参考货批。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

范围证据要求：需真实仓库计量区间全部使用方货批份额并保留闲置失败，不用额定瓦数乘库存时长或每灯默认电耗。

###### 实际液态处理自来水供给 (`facility_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Volume / m3
- 数量规则：经cp_supplies归属真实原生量及兼容有据换算至每参考货批。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需分用途计量领用量供方覆盖实际去向，包装水分或清洁水收货不是实测废水体积。

###### 实际独立记录的聚乙烯包装薄膜 (`new_outer_protection_pe_film`)

仅适用于实际独立供应、供本服务新增包裹或衬垫使用的聚乙烯薄膜，须确认实际聚合物配方与薄膜净量。该身份为工厂门通用生产组合，仍须记录实际供给门、供应方及另负责任的交付负荷。不预设LDPE/HDPE牌号、再生比例、厚度或用量。PVC、PET、PP、多层复合材料、胶黏标签、填充包装及继承商品包装仍按余项独立身份处理；整体供应与组分不得重复计量，不预设发生。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass / kg
- 数量规则：经cp_supplies归属真实原生量及兼容有据换算至每参考货批。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需真实继承新增层级品项原生数量面积质量换算证据，托盘循环用全寿命资产，不复制产品页固定包装重。

###### 实际独立记录的合成洗涤剂投入 (`operating_supplies_synthetic_detergent`)

仅适用于产品配方、供应状态及用途记录确认的实际合成表面活性洗涤剂。记录扣除包装皮重的材料净量，区分浓缩液与稀释水，整体配方与组分不得相加重复计入。肥皂、消毒剂、抹布、滤材等仍按各自实际身份记录，不预设清洁配方、剂量或发生。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位：Mass / kg
- 数量规则：经cp_supplies归属真实原生量及兼容有据换算至每参考货批。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需品项配方浓度净库存供应退回及清理载体吸附内容接收证据，仅有电子塑料或化学危害标签不证明购入排放。

###### 实际独立确认的供应柴油 (`fuel_supply_diesel_supply`)

仅适用于本运行燃料要求内实际独立确认的柴油。通用身份为Mass/kg；记录实际配方、供应方、供给门及原生库存范围。原生数量为升时，最终换算kg须有实际相容密度、温度状态、质量体积比单位及来源，不使用目录默认密度或热值。供应库存与燃烧量是不同记录；其他燃料保留余项，购买燃料或未解释库存差不证明燃烧及排放。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Volume / L
- 数量规则：经cp_supplies归属真实原生量及兼容有据换算至每参考货批。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需期初净收期末可用退回及互斥燃烧废损，适用密度温度换算证据，不假定购燃料全用于验收货批。

###### 用于新增运输保护的纸板箱 (`new_outer_protection_paperboard_carton`)

仅覆盖本过程有独立实际证据的“用于新增运输保护的纸板箱”。记录自身物态、净量 kg、事件来源及交接门。其他状态或接收方需在`new_outer_protection`下独立确定身份，本卡不能替代；记录缺失不证明发生或为零。 仅在新增包装确认为纸板箱时使用，记录结构、纸板箱净质量及供应门。塑料筐、木箱或身份实质不同的复合箱需另设流卡；排除继承包装和周转资产。不预设纤维等级、再生成分比例或每箱质量。

- 选定流：用于新增运输保护的纸板箱
- 流属性/单位：Mass / kg
- 数量规则：`new_outer_protection_paperboard_carton`实际独占归属的 kg / 验收 N，仅归一化一次；已按参考流给出的数量不得再次除以 N。
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

###### 已完成盒装一体式LED顶灯自营批发货批 (`accepted_service`)

一个新原盒未通电市电供电一体式LED顶灯且无电池、真实商人所有企业验收货批，实际型号整件部件完整性条件限定实体服务，不生产光输出安装产品。

- 选定流：已完成盒装一体式LED顶灯自营批发货批
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_consignment`

范围证据要求：需品项型号模组驱动器灯体扩散罩安装板及声明随附另售配件、真实灯具包装数量净皮重状态时间交接，不件等货批、不额定流明小时或通用盒数量。

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

仅覆盖本过程有独立实际证据的“退回供应方的未使用聚乙烯薄膜”。记录自身物态、净量 kg、事件来源及交接门。其他状态或接收方需在`usable_supply_returns`下独立确定身份，本卡不能替代；记录缺失不证明发生或为零。 将未使用材料的配方、供应状态和原生质量严格匹配到投入`new_outer_protection_pe_film`。本卡为可用对外退料，不是废物、期末库存或内部循环。仅在总量供应口径下列此输出；投入已扣除该退料时必须省略对应退料输出，不自动抵扣避免生产。

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

###### 废弃完整盒装集成LED吸顶灯 (`discarded_luminaire_packs_atomic_case`)

仅在实际独立记录确认“废弃完整盒装集成LED吸顶灯”时适用。本卡只覆盖该命名实物状态及自身实际净量、保留组成和接收门。其他部件、碎片、游离液、独立包装及清理载体仍属于`discarded_luminaire_packs`中的身份核实事项；不得移动边界、预设事件、将库存差当废弃，或把仍保留在整体流内的组分另算出口。实际混收流须匹配自身准确身份。原有原生单位数量协议只用于本独占具体情形，其他实际去向分别协调。

- 选定流：废弃完整盒装集成LED吸顶灯
- 流属性/单位：Mass / kg
- 数量规则：经cp_luminaires归属真实原生量及兼容有据换算至每参考货批。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_luminaires`

范围证据要求：需真实处置接收原生量净皮重组成、整件部件原交接当量及处理覆盖，包装损坏或缺另售螺丝不证明整灯废弃。

###### 废弃独立脱落的一体式LED灯具驱动器 (`discarded_luminaire_packs_led_driver`)

仅覆盖本过程有独立实际证据的“废弃独立脱落的一体式LED灯具驱动器”。记录自身物态、净量 kg、事件来源及交接门。其他状态或接收方需在`discarded_luminaire_packs`下独立确定身份，本卡不能替代；记录缺失不证明发生或为零。 仅在实际独立收集并转移至废物接收方时启用，不得用于仍保留在整件、包装或收集混合物中的组分。保留组成只作不可相加记录。不预设开包、切割、拆解、主动干燥、回收率或处理路线，处理及运输责任只归属一次。

- 选定流：废弃独立脱落的一体式LED灯具驱动器
- 流属性/单位：Mass / kg
- 数量规则：`discarded_luminaire_packs_led_driver`实际独占归属的 kg / 验收 N，仅归一化一次；已按参考流给出的数量不得再次除以 N。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_luminaires`

范围证据要求：需事件关联的原生 kg、状态组成、接收或供应门、归属记录及整件组分或对应投入的排他关联，使用协议`cp_luminaires`。不提供默认数值或换算因子；其他原生单位须有换算证据后使用。

###### 废弃场所清洁擦拭物，保留实际污染物 (`other_wastes_spent_wipe`)

仅覆盖本过程有独立实际证据的“废弃场所清洁擦拭物，保留实际污染物”。记录自身物态、净量 kg、事件来源及交接门。其他状态或接收方需在`other_wastes`下独立确定身份，本卡不能替代；记录缺失不证明发生或为零。 仅在实际独立收集并转移至废物接收方时启用，不得用于仍保留在整件、包装或收集混合物中的组分。保留组成只作不可相加记录。不预设开包、切割、拆解、主动干燥、回收率或处理路线，处理及运输责任只归属一次。 按接收状态确定实际擦拭物基材及保留污染物。滤芯、散装吸附材料或独立收集液体不是本擦拭物流。废弃整体质量含保留污染物一次，干擦拭物供应质量只作组分审计。

- 选定流：废弃场所清洁擦拭物，保留实际污染物
- 流属性/单位：Mass / kg
- 数量规则：`other_wastes_spent_wipe`实际独占归属的 kg / 验收 N，仅归一化一次；已按参考流给出的数量不得再次除以 N。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据要求：需事件关联的原生 kg、状态组成、接收或供应门、归属记录及整件组分或对应投入的排他关联，使用协议`cp_fates`。不提供默认数值或换算因子；其他原生单位须有换算证据后使用。

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

##### 基本流

###### 实际有独立证据的向空气排放化石二氧化碳 (`direct_species_co2_fossil_air`)

仅在实际证据确认化石来源、二氧化碳物种和向空气直接释放时适用。保留报告的碳或CO2基准，碳转CO2须独立有证据的化学计量，不预设系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：经cp_releases归属真实原生量及兼容有据换算至每参考货批。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_releases`

范围证据要求：需真实化学来源介质兼容实测量或活动燃烧因子组成去向原生换算，不把裸灯泡物质或消费者运行排放套入未通电一体灯。


###### 实际有独立证据的向空气排放化石甲烷 (`direct_species_methane_fossil_air`)

仅在实际证据确认化石来源、甲烷物种和向空气直接释放时适用。生物源或来源未知甲烷仍在余项要求中，不得改标化石源；不预设泄漏发生、气体比例、数量或排放系数。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：经cp_releases归属真实原生量及兼容有据换算至每参考货批。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_releases`

范围证据要求：需真实化学来源介质兼容实测量或活动燃烧因子组成去向原生换算，不把裸灯泡物质或消费者运行排放套入未通电一体灯。


###### 实际有独立证据的向空气排放氧化亚氮 (`direct_species_nitrous_oxide_air`)

仅在实际证据确认氧化亚氮物种及向空气直接释放时适用。原生数量为N2O质量，不是氮质量或氮气质量，不预设排放系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：经cp_releases归属真实原生量及兼容有据换算至每参考货批。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_releases`

范围证据要求：需真实化学来源介质兼容实测量或活动燃烧因子组成去向原生换算，不把裸灯泡物质或消费者运行排放套入未通电一体灯。

## 7. 分配与联产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| actual_shared_use | 全部服务行 | 先归属直接事件量，共享仓库装卸辅助需全部使用方期间含闲置拒收未完成的有据兼容物理驱动，再仅除正验收N一次，不自动平均灯发票或收入。 |  |
| asset_scope | shared_assets | 完整制造维护实际更换寿命终结及实际已用兼容寿命驱动、观察历史有来源证据剩余退役不确定性敏感性更新，资产当量或全寿命服务商一次视图，不并用重复按N。 |  |
| supply_return | 作业用品 | 实际原生独立品项状态S=归属期初+净外收-含回收留存期末，总量保留出口用S/N及真实匹配可用退回，净消耗(S-匹配退回)/N并省对应退回交换。内部循环库存废损保留上游生产，不作不相关或负量扣减。 |  |
| original_whole_gate | 商品 | 以原单位状态实际整件部件换算互斥分配，将完整原盒整灯来源量核对归属验收需求有证据废弃状态变化需求期末可用退回其他出口。缺损一个部件不自动整灯损失。新增关联需求=实际所需原交接需求减同一基线已含需求损失，阶段状态匹配在外一次，裸模组材料缺整灯制造组装装盒在外补齐。不用额定流明瓦数寿命或标称包重乘数。 |  |
| receiver_nonoverlap | 全部出口 | 整废灯包LED驱动灯体扩散罩包装组分审计、清理载体吸附内容游离液为不可相加实测接收视图，处理一归属，可用商品退回仍库存审计，不自动避免制造回收抵扣，来源接收未知阻完整链条。 |  |
| commodity_link_scope | nonexchange commodity interface | 原交接库存及已完成外部集成保留实际记录的原始数量。声明source_assignment_scope_id、实际target_consignment_ids/target_cohort_id及source_assignment_quantity_basis，分为single_consignment_case、target_cohort_total或already_per_reference。仅当正same_target_scope_N准确覆盖已分配目标范围时，目标群原始总量才按source_link_per_service_quantity=source_link_assigned_raw_quantity/same_target_scope_N形成与1个accepted_service组合且仅用一次的接口，须原生单位状态来源及接收撤销证据。单货批N=1与已每参考量不再除一次。外部实际库存或阶段集成记录不得按服务N缩量，也不得以整个来源群N去除较窄目标已分配量；保留原始量与明确仅一次关联。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_consignment | luminaire_wholesale | accepted_service | 实际未通电灯具商业验收 | site_id; campaign_id; period_id; consignment_id; supplier_id; contract_id; ownership_start; resale_risk; business_buyer; model; SKU; lot_ids; integrated_LED_configuration; driver_configuration; mains_supply_evidence; no_battery_evidence; unpowered_state_record; manufacturer_release; original_boxed_gate; included_component_manifest; separate_hardware_manifest; actual_whole_fixture_quantity; fixture_unit; actual_package_quantity; package_unit; package_fixture_mapping; adopted_condition_acceptance; actual_start; actual_end; time_zone; duration; duration_unit; acceptance_record; reversal_id; N | 核实商人所有权转售最终买方交接及型号定义完整随附内容未通电无电池状态，不把另售安装件运行额定值变服务供应。 | Item(s) | 每验收冲回 | 实际关联服务库存报表资产期间 | 实际商人买方交接 | per reference flow | 真实原生记录范围校准状态证据不确定性 |
| cp_luminaires | luminaire_wholesale | 商品备查; discarded_luminaire_packs | 整灯部件包装原交接库存 | site_id; campaign_id; period_id; consignment_id; lot_id; event_id; event_time; time_zone; model; SKU; serial_or_batch_id; complete_fixture_id; LED_module_id; driver_id; body_id; diffuser_id; mounting_plate_id; actual_material_composition; composition_unit; composition_basis; composition_source; manufacturer_BOM_source; included_parts_hardware; separately_sold_hardware; supplied_component_counts; component_units; component_package_mapping; missing_included_item; unpowered_state; no_battery_evidence; fixture_count; fixture_unit; package_count; package_unit; gross_pack_mass; net_fixture_mass; fixture_mass_unit; inherited_pack_tare; other_tare; tare_unit; mass_conversion_factor; conversion_unit; conversion_basis; conversion_source; count_to_mass_factor; count_factor_unit; count_factor_basis; count_factor_source; actual_measurement_method; calibration; sample_selection; sample_time; sample_quantity; sample_unit; sample_representativeness; temperature; temperature_unit; relative_humidity; humidity_unit; moisture_if_measured; moisture_unit; moisture_component_basis; moisture_wet_dry_basis; moisture_method; moisture_source; condition_state; damage_record; opening; external_receipts; buyer_returns; physical_dispatch; net_accepted_dispatch; closing; supplier_returns; useful_other_exits; actual_discard; discard_unit; discard_composition; discard_receiver; discard_treatment_scope; collected_fragment_quantity; fragment_unit; state_change; state_change_method; state_change_unit; state_change_basis; state_change_source; unexplained_residual; original_gate_quantity; original_gate_unit; original_gate_state; original_gate_dataset; original_gate_conversion_method; original_gate_conversion_factor; original_conversion_unit; original_conversion_basis; original_conversion_source; whole_part_method; whole_part_factor; whole_part_unit; whole_part_basis; whole_part_source; exclusive_exit_allocation; source_stage_coverage; missing_upstream_stage; assigned_gate_demand; assigned_gate_demand_unit; assigned_gate_demand_state; assigned_gate_demand_source; baseline_same_loss_coverage; baseline_covered_demand; baseline_demand_unit; baseline_demand_state; baseline_demand_source; assignment_driver; assignment_driver_unit; all_exit_driver; all_exit_driver_unit; allocation_method; allocation_source; additional_gate_demand; additional_gate_demand_unit; additional_gate_demand_state; additional_gate_demand_source; commodity_owner; adjustment_status; uncertainty; source_assignment_scope_id; source_assignment_quantity_basis; target_consignment_ids; target_cohort_id; source_quantity_already_per_reference; external_raw_integration_quantity_preserved; once_only_service_link_evidence; source_link_assigned_raw_quantity; source_link_assigned_raw_quantity_unit; source_link_assigned_raw_quantity_basis; source_link_assigned_raw_quantity_method; source_link_assigned_raw_quantity_state; source_link_assigned_raw_quantity_source; source_link_assigned_raw_quantity_sample_time; same_target_scope_N; same_target_scope_N_unit; same_target_scope_N_basis; same_target_scope_N_method; same_target_scope_N_state; same_target_scope_N_source; same_target_scope_N_sample_time; source_link_per_service_quantity; source_link_per_service_quantity_unit; source_link_per_service_quantity_basis; source_link_per_service_quantity_method; source_link_per_service_quantity_state; source_link_per_service_quantity_source; source_link_per_service_quantity_sample_time; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | 追踪厂家实际整件部件随附另售清单未通电状态净皮重测量全部库存退回接收出口，归属新增需求单位状态在有据换算后须匹配实际原交接基准及专门来源互斥整件部件分配，保留未知而非假定缺部件等整损失排放。 只归属独立确认的实物情形，其他实际去向按来源分别保留；每个原生记录只属于一个交换，任何总量仅作不可相加审计。 | 实际整灯部件包装单位及kg状态 | 每库存移动条件事件 | 实际关联服务库存报表资产期间 | 实际厂家型号货批完整原盒交接 | per reference flow | 真实原生记录范围校准状态证据不确定性 |
| cp_energy | luminaire_wholesale | electricity; fuel_supply | 真实仓库计量燃烧记录 | site_id; period_id; consignment_id; event_id; asset_id; start_time; end_time; time_zone; duration; duration_unit; meter_id; carrier; reading_start; reading_end; reading_unit; actual_driver; driver_unit; all_consumer_driver; all_consumer_unit; idle_failed_cleaning_scope; actual_burn; burn_unit; burn_method; nonburned_return; nonburned_waste; nonburned_loss; closing; provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 计真实仓库服务能源并与未通电商品分开，重建燃烧需完整互斥原生去向调查未知损失，不等购燃料。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | 实际能源燃料单位 | 每实际区间事件 | 实际关联服务库存报表资产期间 | 全部仓库辅助使用方 | per reference flow | 真实原生记录范围校准状态证据不确定性 |
| cp_supplies | luminaire_wholesale | facility_water; new_outer_protection; operating_supplies; fuel_supply; usable_supply_returns | 实际原生库存清理匹配退回供应 | site_id; period_id; consignment_id; event_id; event_time; time_zone; SKU; formulation; concentration; concentration_unit; composition_basis; composition_source; native_unit; opening; receipt_gross; receipt_tare; receipt_net; closing; retained_recovery; usable_external_return; return_recipient; matched_input_id; original_supply_owner; gross_consumed_view; omit_matched_return_exchange; actual_waste; actual_loss; inherited_new_pack_level; dry_cleanup_carrier_quantity; carrier_unit; actual_cleanup_event; density; density_unit; density_source; temperature; temperature_unit; conversion_factor; factor_unit; factor_basis; factor_source; actual_purpose; provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 收真实同状态净收库存供应去向，区分新增外保护服务辅助和继承灯部件包，同范围退回净额需原来源省匹配出口，不强制清灯安装配件。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 柴油升转kg须有实际相容密度、温度状态、质量体积比单位及来源，不预设换算。 | 实际原生品项单位 | 每收领退盘点 | 实际关联服务库存报表资产期间 | 实际独立服务供应 | per reference flow | 真实原生记录范围校准状态证据不确定性 |
| cp_assets | luminaire_wholesale | shared_assets | 完整寿命全部使用方资产台账 | site_id; period_id; consignment_id; asset_id; consumer_id; phase_id; event_date; manufacture_dataset; maintenance; replacement; end_of_life; driver_used; driver_used_unit; lifetime_driver; lifetime_driver_unit; observed_history; evidenced_remaining; remainder_source; termination; attribution_view; uncertainty; sensitivity; update_trigger | 列全部真实资产使用方期间完整阶段兼容已用寿命驱动及有来源证据剩余，保持资产当量或完整服务商一种视图。 | Item(s)或实际寿命原生单位 | 每资产事件期间复核 | 实际关联服务库存报表资产期间 | 全部真实使用方完整资产寿命 | per reference flow | 真实原生记录范围校准状态证据不确定性 |
| cp_providers | luminaire_wholesale | provider_services | 实际未通电物理成果范围 | site_id; period_id; consignment_id; provider_id; service_id; event_date; completed_unpowered_result; physical_quantity; native_unit; duration; duration_unit; visual_document_completeness_scope; completion_evidence; material_coverage; energy_coverage; chemical_coverage; asset_lifecycle_coverage; freight_coverage; treatment_coverage; direct_release_coverage; actual_driver; driver_unit; all_consumer_driver; all_consumer_unit; missing_coverage; changed_powered_or_installation_scope | 核实真实未通电装卸视检文件完整性成果原生物理单位，核对全部直接服务商责任，通电测试安装调试为范围变化非普通辅助。 | 实际服务商原生物理单位 | 每实际成果 | 实际关联服务库存报表资产期间 | 实际外部服务责任 | per reference flow | 真实原生记录范围校准状态证据不确定性 |
| cp_freight | luminaire_wholesale | freight | 实际完整盒装货载旅程台账 | site_id; period_id; consignment_id; leg_id; event_date; mode; provider_id; actual_cargo; cargo_unit; fixture_component_mass; inherited_pack_mass; added_outer_pack_mass; other_included_tare; tare_scope; load_conversion_factor; load_factor_unit; load_factor_basis; load_factor_source; distance; distance_unit; distance_conversion_factor; distance_factor_unit; distance_factor_basis; distance_factor_source; empty_return_scope; actual_driver; driver_unit; all_consumer_driver; all_consumer_unit; provider_native_unit; supplier_delivered_coverage; duplicate_leg_check | 采用真实运输整灯部件包装皮重及距离原生换算，兼容不重叠份额真实服务商到货空返退回范围一次。 | kg*km或实际原生货运单位 | 每实际纳入路段 | 实际关联服务库存报表资产期间 | 实际商品服务废物旅程范围 | per reference flow | 真实原生记录范围校准状态证据不确定性 |
| cp_fates | luminaire_wholesale | environmental_water; other_wastes; contained_wastewater; water_outfalls | 实际来源接收混合清理记录 | site_id; period_id; consignment_id; event_id; event_time; time_zone; material_source; source_location; native_quantity; native_unit; dry_carrier_mass; carrier_unit; carrier_basis; carrier_source; absorbed_liquid_mass; absorbed_liquid_unit; absorbed_liquid_basis; absorbed_liquid_source; collected_fragment_mass; collected_fragment_unit; collected_fragment_basis; collected_fragment_source; moisture_component_basis; composition; concentration; concentration_unit; composition_basis; composition_source; mixed_wet_mass; dry_mass; mass_unit; collected_free_volume; received_volume; volume_unit; density; density_unit; density_source; temperature; temperature_unit; conversion_factor; factor_unit; factor_basis; factor_source; purchased_direct_water; receiver; receiving_medium; treatment_dataset; treatment_coverage; direct_outfall; overlapping_component_view; actual_driver; driver_unit; all_consumer_driver; all_consumer_unit; uncertainty | 计量实际原生来源接收混固及单独游离液，含组分单位基准来源组成处理归属，整包组分载体吸附液排口不可相加，潮湿事故本身不提供任一量。 | 实际原生质量体积组成单位 | 每实际来源清理接收排口事件 | 实际关联服务库存报表资产期间 | 实际来源接收服务范围 | per reference flow | 真实原生记录范围校准状态证据不确定性 |
| cp_releases | luminaire_wholesale | direct_species | 实际来源物种介质测量方法 | site_id; period_id; consignment_id; event_id; start_time; end_time; time_zone; duration; duration_unit; source_role; actual_component_identity; actual_species; receiving_medium; particle_size_basis; measured_quantity; measurement_unit; actual_activity; activity_unit; actual_burn; burn_unit; factor; factor_unit; factor_basis; factor_source; composition; composition_basis; composition_source; release_fraction; fate_basis; fate_source; gas_volume; volume_unit; pressure; pressure_unit; temperature; temperature_unit; molecular_conversion; conversion_unit; conversion_source; method; method_version; provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 要求真实来源物种介质证据兼容测量或活动因子全部原生操作数，产品额定材料存在损坏库存差额不是释放法，完整因子不再乘组成去向。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kg真实物种及原生操作数 | 每真实实测模型区间 | 实际关联服务库存报表资产期间 | 实际来源受纳介质 | per reference flow | 真实原生记录范围校准状态证据不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | 全部服务行 | 归属真实直接兼容全部使用方份额，保留失败拒收未完成闲置活动，实际货批群总量仅除正验收N一次。 | cp_consignment; cp_energy; cp_supplies; cp_assets; cp_providers; cp_freight; cp_fates; cp_releases | 实际每参考清单 |  |
| whole_part_stock | 商品 | 分别核真实同状态整灯部件包装库存：期初+外收+买方退回-期末-实物发运-供方退回-可用其他出口-真实废弃=未知差额。配内部移动映射随附件到整灯，另售物品不在完整性定义内，另核真实净毛皮重状态不确定性，缺一部件包损不能识别整灯损失排放。 | cp_luminaires | 审计真实整件部件包装状态去向 |  |
| source_assignment | 商品接口 | 按原单位状态将实际完整原盒整灯交接量映射验收需求及互斥有证据废弃状态变化期末可用退回其他出口份额。整件部件换算及归属基线新增需求单位状态来源需实际有据兼容互斥驱动，新增关联需求在服务外一次核同已含阶段损失，模组材料前阶段缺整灯组装装盒在外补齐。 | cp_luminaires; cp_consignment | 明确单独关联完整原交接需求 |  |
| transport_quantity | freight | 实际kg*km=真实纳入整灯部件包装皮重货载换kg×真实距离换km，具有来源因子基准不重叠服务商共享范围一次，其他原生货运单位保留准确支持服务。 | cp_freight | 每参考真实原生货运 |  |
| release_evidence | direct_species; direct_species_co2_fossil_air; direct_species_methane_fossil_air; direct_species_nitrous_oxide_air | 用真实物种介质实测或兼容活动燃烧来源特定因子及所需组成去向浓度气体压力温度换算一次，完整因子不再乘。未通电灯具标签破件未知质量差额不提供物种量。 | cp_releases; cp_energy; cp_luminaires | 每参考实际有据物种 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| identity_completeness | 全部实际行 | 最终交换前需真实型号清单整件部件材料服务物种接收身份原生支持，数量流明灯件身份不是计数商业服务身份。 | 真实供方清单详情身份支持记录 |
| unpowered_boundary | luminaire_wholesale | 核实未通电市电无电池路线及厂家实际随附另售内容，不把通电测试安装用户清洁或额定值乘入批发资源。 | cp_consignment; cp_providers；真实型号证据 |
| source_lifetime_fates | 全部责任 | 完整原盒交接实际单位状态来源需求基线损失在外、全部使用方全资产寿命期间接收服务商货运处理一次，混合清理整件部件固液证据未知明确。 | 覆盖矩阵测量独立范围数据 |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | luminaire_wholesale | 电表记录对应哪个供电点、交直流状态、电压和供应方数据集？核对已列交流电卡与其他有证据的供电，不得将交流电 UUID 用于其他能源。 计量真实照明电动叉装装卸及业务辅助，商品灯具保持未通电，铭牌功率光通量下游照明寿命不是批发用电输入。 范围证据要求：需真实仓库计量区间全部使用方货批份额并保留闲置失败，不用额定瓦数乘库存时长或每灯默认电耗。 计量证据：协议`cp_energy`；原记录口径 Energy / kWh。原数量约束“经cp_energy归属真实原生量及兼容有据换算至每参考货批。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`electricity_ac`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_energy`; 实际来源关联原生记录 |
| facility_water | luminaire_wholesale | 供应记录是否证明为处理自来水，还是其他明确水质或水源？核实供水状态及交接门，不得用自来水卡替代其他水。 仅采用实际设施清洁辅助水，不由用户保养要求推每盒灯具常规水洗湿擦。 范围证据要求：需分用途计量领用量供方覆盖实际去向，包装水分或清洁水收货不是实测废水体积。 计量证据：协议`cp_supplies`；原记录口径 Volume / m3。原数量约束“经cp_supplies归属真实原生量及兼容有据换算至每参考货批。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`facility_water_liquid_tap`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_supplies`; 实际来源关联原生记录 |
| new_outer_protection | luminaire_wholesale | 取得包装物料单或规格、材料或复合层身份及新增与继承包装的责任。按该记录逐项确定尚缺的套袋、封口、标签、捆扎带或支撑件身份；一体复合包装不得拆成可相加的材料交换。 记录真实服务新增外箱膜绑带标签，原灯盒衬材产品配件属于继承商品，另售安装螺丝不自动由批发服务供应。 范围证据要求：需真实继承新增层级品项原生数量面积质量换算证据，托盘循环用全寿命资产，不复制产品页固定包装重。 计量证据：协议`cp_supplies`；原记录口径 Mass / kg。原数量约束“经cp_supplies归属真实原生量及兼容有据换算至每参考货批。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`new_outer_protection_pe_film`; `new_outer_protection_paperboard_carton`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_supplies`; 实际来源关联原生记录 |
| operating_supplies | luminaire_wholesale | 取得下述清洁或维护职责实际采购品号、配方或安全数据表、供应浓度、物态、用途及库存领用记录。逐项核实洗涤剂以外的实际材料；不得由本 PCR 预设药剂、滤材或剂量。 按原生状态展开实际清洁剂润滑剂擦布吸附材滤材记录耗材，更换LED模组驱动器安装接线紧固件用户清灯不是此未通电路线普通输入。 范围证据要求：需品项配方浓度净库存供应退回及清理载体吸附内容接收证据，仅有电子塑料或化学危害标签不证明购入排放。 计量证据：协议`cp_supplies`；原记录口径 Mass / kg。原数量约束“经cp_supplies归属真实原生量及兼容有据换算至每参考货批。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`operating_supplies_synthetic_detergent`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_supplies`; 实际来源关联原生记录 |
| fuel_supply | luminaire_wholesale | 库存记录对应哪种燃料牌号、配方及供给门？核实已列柴油以外的实际燃料及原生单位；体积转质量前取得实际密度。 保留真实牌号原生燃料库存及燃烧未燃去向，完整合同承运叉装可能已承担该负担。 范围证据要求：需期初净收期末可用退回及互斥燃烧废损，适用密度温度换算证据，不假定购燃料全用于验收货批。 计量证据：协议`cp_supplies`；原记录口径 Volume / L。原数量约束“经cp_supplies归属真实原生量及兼容有据换算至每参考货批。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`fuel_supply_diesel_supply`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_supplies`; 实际来源关联原生记录 |
| provider_services | luminaire_wholesale | 取得本记录中明列各职责的供应商合同或完成结果记录、原生计量物理单位及包含资源。确定各项服务结果身份；检验、清洁、装卸为不同服务，价格或小时不得改称件数。 仅展开真实仓储装卸未通电状态下的目视检查或文件完整性核对卫生维护业务辅助，厂测证为继承证据，不隐含通电电测演示调试安装。 范围证据要求：需真实完成成果原生单位材料能源资产货运处理覆盖，公开使用额定值证书不证明执行批发测试。 计量证据：协议`cp_providers`；原记录口径 Count / Item(s)。原数量约束“经cp_providers归属真实原生量及兼容有据换算至每参考货批。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_providers`; 实际来源关联原生记录 |
| shared_assets | luminaire_wholesale | 对本记录中明列的每种资产取得资产编号、配置及匹配的完整生命周期数据集。待补的是各资产或服务身份及全寿命全部使用者分母；仓库、叉车、托盘不能共用一条计数交换，也不能套用默认寿命。 对全部使用方期间按完整寿命纳入真实建筑货架叉装计量信息设备及周转装卸运输资产。 范围证据要求：需制造维护更换寿命终结兼容已用寿命驱动单位、观察历史有来源剩余退役不确定性敏感性更新，商品宣传LED寿命不代表仓库资产寿命。 计量证据：协议`cp_assets`；原记录口径 Count / Item(s)。原数量约束“经cp_assets归属真实原生量及兼容有据换算至每参考货批。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_assets`; 实际来源关联原生记录 |
| freight | luminaire_wholesale | 对实际入库、出库、退运及废物运输段取得运输方式或车辆、温控服务、起终点、实际载荷和距离及供应方覆盖。方式或配置未明确前不能选择运输流；不同运输方式不得合成一条 kg*km 流。 对真实路段采用实际完整灯具随附部件原外包装皮重范围，不用裸LED模组重或把灯数当服务数代货载量。 范围证据要求：需实际载荷部件包装皮重范围距离兼容换算份额来源、供方到货共享空返退回覆盖一次，不把包装列重定为每件净重。 计量证据：协议`cp_freight`；原记录口径 Mass*distance / kg*km。原数量约束“经cp_freight归属真实原生量及兼容有据换算至每参考货批。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_freight`; 实际来源关联原生记录 |
| environmental_water | luminaire_wholesale | 按取水许可或计量记录确定实际取水口、地表水体或含水层、位置及水源实测量。地表水和地下水需不同源身份；购买水用量不能证明直接取水。 仅记录真实服务作业水源地点提取，与购入设施水继承包装受潮事件分开。 范围证据要求：需水源计量用途区间实体取水边界，纸箱损坏不意味着取水或每灯升水因子。 计量证据：协议`cp_fates`；原记录口径 Volume / m3。原数量约束“经cp_fates归属真实原生量及兼容有据换算至每参考货批。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_fates`; 实际来源关联原生记录 |
| usable_supply_returns | luminaire_wholesale | 将对外退料凭据匹配到唯一投入品号、状态、原生单位及接收方。采用净消耗投入时省略对应退料交换；商品退货及期末库存另作审计记录。 仅实际同范围独立品项状态退回匹配作业供应，净消耗输入省对应出口，内部回收留存周转为期末，可用商品灯部件退回仍商品审计。 范围证据要求：需真实接收原生转移匹配原输入状态归属，不作不相关或负量扣减、不把期末当外退或自动避免生产抵扣。 计量证据：协议`cp_supplies`；原记录口径 Mass / kg。原数量约束“经cp_supplies归属真实原生量及兼容有据换算至每参考货批。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`usable_supply_returns_detergent_return`; `usable_supply_returns_pe_film_return`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_supplies`; 实际来源关联原生记录 |
| discarded_luminaire_packs | luminaire_wholesale | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 采用废整灯缺损部件碎屑原混合包装真实接收量状态，LED驱动金属塑料盒组分审计不重复废物制造输入，不假定拆解回收处理。 范围证据要求：需真实处置接收原生量净皮重组成、整件部件原交接当量及处理覆盖，包装损坏或缺另售螺丝不证明整灯废弃。 计量证据：协议`cp_luminaires`；原记录口径 Mass / kg。原数量约束“经cp_luminaires归属真实原生量及兼容有据换算至每参考货批。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`discarded_luminaire_packs_atomic_case`; `discarded_luminaire_packs_led_driver`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_luminaires`; 实际来源关联原生记录 |
| other_wastes | luminaire_wholesale | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 按原生接收状态记录真实耗擦布吸附材滤材维护组分新增保护，混合清理载体加捕集液碎屑化学为一种兼容接收视图，不另重复整商品液废。 范围证据要求：需真实接收混合重干载体吸液碎屑单位基准来源组成接收处理，部件残屑不单独量化耗固废或支持回收抵扣。 计量证据：协议`cp_fates`；原记录口径 Mass / kg。原数量约束“经cp_fates归属真实原生量及兼容有据换算至每参考货批。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`other_wastes_spent_wipe`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_fates`; 实际来源关联原生记录 |
| contained_wastewater | luminaire_wholesale | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 记录真实设施作业送处理游离液，与吸附清理固体包装内部水分分开，不假定洗灯浸泡下游用户清洁。 范围证据要求：需收集接收体积组成基准事件来源处理归属，进清洁水湿擦布质量不是该体积，不重复直接排口。 计量证据：协议`cp_fates`；原记录口径 Volume / m3。原数量约束“经cp_fates归属真实原生量及兼容有据换算至每参考货批。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`contained_wastewater_aqueous_cleaning`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_fates`; 实际来源关联原生记录 |
| water_outfalls | luminaire_wholesale | 确定直接排口、接收水体或土壤介质、实测水量及独立分析的污染物种。送处理的下水道转移不是该排口；接收介质未明时不能确定基本流。 仅真实到达直接环境排口的水列此并有真实介质水质，容装转移处理吸附清理保留各自接收角色。 范围证据要求：需真实地点区间原生体积组成介质证据，湿盒事故记录污水收集发票不证明直接排水。 计量证据：协议`cp_fates`；原记录口径 Volume / m3。原数量约束“经cp_fates归属真实原生量及兼容有据换算至每参考货批。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_fates`; 实际来源关联原生记录 |
| direct_species | luminaire_wholesale | 按排放或采样记录确定各实测排放的来源事件、化学物或粒径身份、来源属性及接收介质。物种、粒径或介质不明须保留具体证据缺口；化学品总用量或库存损失不能提供这些身份。 仅对真实燃烧维护清理商品事故按实测方法支持来源物种粒径介质展开，LED标签驱动材料存在潮湿破扩散罩库存短缺本身不证明汞挥发物粉尘等排放。 范围证据要求：需真实化学来源介质兼容实测量或活动燃烧因子组成去向原生换算，不把裸灯泡物质或消费者运行排放套入未通电一体灯。 计量证据：协议`cp_releases`；原记录口径 Mass / kg。原数量约束“经cp_releases归属真实原生量及兼容有据换算至每参考货批。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`direct_species_co2_fossil_air`; `direct_species_methane_fossil_air`; `direct_species_nitrous_oxide_air`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_releases`; 实际来源关联原生记录 |


## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| accepted_commercial | accepted_service | 核实真实唯一自营最终企业验收货批N>0及全部物理限定，不得以灯具件数、包装数、流明或瓦数代替服务身份。 |  |
| complete_model | 商品 | 要求真实整灯部件包装映射随附另售清单净皮重原生数量条件，不假定裸灯模组为完整46533灯具。 | ikea-integrated-ceiling-fixture; ikea-integrated-fixture-manual |
| unpowered_scope | luminaire_wholesale | 检查无电池未通电常温实体服务，服务商不隐通电电测演示安装调试用户清洁，真实变化须范围复核。 |  |
| source_gate_loss | 商品接口 | 核实际完整原盒来源阶段原单位状态整件部件换算互斥归属期末可用出口及同基线阶段损失在外一次，未知库存差额不得默认归零或作为损失量。 |  |
| all_users_life | 全部资源 | 需全部事件期间使用方及制造维护更换寿命终结兼容已用寿命单位观察有来源剩余、一次按N服务商资产视图，未完成失败保留负担。 |  |
| outlet_stock_views | 全部真实清单 | 核原生供应去向接收换算来源、净消耗省匹配退回，整灯组分混合清理游离液直接物种不可相加且处理一归属，不自动抵扣。 |  |
| validate_concrete_identity_decisions | all inventory rows | 将每项实际身份核实事项落实到实物明确的流卡和原生数量，或提供不适用证据。证据检查点 ID 不是交换。发生、物种、状态、接收方或服务配置缺失时阻断最终数据完成，不默认零。按规定保持整体与组分、总量投入与对应退料的排他关系。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 实际身份完整性复核后secondary_dataset；background_dataset |
| downstream_use | 单独关联完整原盒商品归属需求损失覆盖的未通电一体LED顶灯商人服务附加 |
| allowed_use | 真实新原盒市电一体LED顶灯无电池未通电、型号随附内容包装状态匹配并企业验收 |
| excluded_use | 独立灯具足迹或裸灯泡；照明使用小时功能单位；通电测试演示安装用户使用；电池应急便携照明；零售代理纯仓储 |
| required_metadata | 实际品项型号货批整件部件随附另售配件清单市电未通电无电池证据、灯包装数净皮重条件时间交接、地点期间原归属需求损失及服务资产服务商货运处理归属 |
| required_quality_disclosure | 流支持清单条件数量不确定性未知库存来源需求接收覆盖、全部使用方资产剩余假设原生换算证明独立范围缺口 |
| update_trigger | 型号模组驱动部件随附件形式、电池通电作业安装范围、供方交接损失覆盖、库存去向服务商资产货运处理或计量方法变化 |


## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-lighting-wholesale | official_guidance | UNSD CPC3 explanatory notes (30 June2025), printed pages252–253/303,46533 and61043/group465. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅分类支持较窄照明批发内仅LED一体顶灯，不假定裸灯泡。 |
| ikea-integrated-ceiling-fixture | official_guidance | IKEA, KABOMBA integrated-LED ceiling lamp604.898.13, current public manufacturer product body/materials/packaging. https://www.ikea.com/us/en/p/kabomba-led-ceiling-lamp-matte-black-60489813/ | 仅完整一体市电灯具金属塑料扩散罩及随附另售配件包装问题，不采用额定重量寿命合规用户保养安装默认。 |
| ikea-integrated-fixture-manual | official_guidance | IKEA, KABOMBA AA-2260612-7, official manufacturer instructions, integrated non-changeable LED statement. https://www.ikea.com/us/en/assembly_instructions/kabomba-led-ceiling-lamp-matte-black__AA-2260612-7-2.pdf | 确认实际样例一体LED身份，安装通电合规要求仍为下游型号背景，不是批发作业检测要求。 |
