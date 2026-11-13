---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-wickerwork-cork-goods-cooper-ff9a5f21
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 成品上油山毛榉实木砧板自营批发

## 1. 范围与适用性

本PCR覆盖供方完整成品上油实木山毛榉厨房砧板，经普通常温接收库存条件管理装卸至真实验收商业交接的自营企业间实体批发。须声明实际品项材种实木形式成品几何出厂油整理状态、净成品板与包装皮重、水分条件供买验收证据，不以典型尺寸密度质量油水数值定义商业服务。

排除木材生产窑干加工成型打磨、商人上油涂层消毒食品接触测试、消费者手洗使用、维修重新整理重包、竹工程木塑料替代、零售代理纯仓储。真实独立数量组分测量需实际方法状态样品来源及各自原生单位基准，不规定常规破坏检测处理。转化主动调湿变化需新路线复核，继承整理包装常温存放不创建保鲜包装节点。

全部继承完整板木材出厂整理包装制造含损失商品上游均在服务外，完整链条前实际完整原成品交接归属需求及同基线阶段损失覆盖须单独关联一次，真实商人装卸接收处理在此一次。厂家产品样例仅确认实木山毛榉及油为成品组成，不是服务上油配方或净重水分耐久食品安全保证。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-wickerwork-cork-goods-cooper-ff9a5f21 |
| classification_refs | CPC3 61046；所含319内较窄31912上油实木山毛榉厨具 |
| covered_products | 实际常温商人所有成品上油实木山毛榉砧板企业间商业货批服务 |
| excluded_products | 原木、未完成加工的木材或其他材种材料替代；制造干燥打磨上油测试洗涤重新整理；零售代理纯仓储 |
| representative_product | 实际品项货批完整已完成上油的山毛榉砧板及供应包装状态，经商业验收交接 |
| production_route | 完整成品上油供方交接 -> 所有权接收常温库存装卸 -> 企业间验收转售 |
| market_state | 计数实体服务；板件成品净重木水整理组分包装另为商品审计 |


## 3. 参考流

| Field | Value |
| --- | --- |
| What | 已完成成品上油实木山毛榉砧板自营批发货批 |
| How much | 1 Item(s) |
| How well | 实际完整成品实木山毛榉上油状态数量水分条件及商业验收，不担保未来食品使用或耐久 |
| How long or cycle | 真实接收常温存放装卸验收区间，另列库存报表期间和资产阶段 |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 已完成成品上油实木山毛榉砧板自营批发货批 |
| reference_flow_property | 数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | 数量单位组 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | consignment_id; merchant_ownership_resale; business_buyer_gate; SKU_lot_board_ids; beech_species_solid_form_evidence; finished_geometry_condition; inherited_factory_oil_finish_state; complete_finished_supplier_gate; actual_board_pack_counts; net_board_pack_tare_basis; moisture_native_unit_basis_method; component_measurement_state_time_source; actual_ambient_condition_acceptance; actual_start_end_duration_unit; site_campaign_period; original_gate_assigned_demand_loss_owner |

N>0为冲回后真实唯一最终验收商业货批，板件包装数kg尺寸面积含油量不等服务数，失败未完成跨期资源仍保留。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| commercial_count | accepted_service | Count | Item(s) | 计真实最终验收商人货批标识，不板件订单发票拆分，数量支持本身不识别服务。 |
| finished_net_components | 商品 | 真实原生Count/Mass及组分属性 | 实际件；kg；单独声明组分单位 | 成品板净质量不含实际包装及皮重，但包含成品木材、留存水分和出厂油的实际状态，独立测油水时各保留组分量单位基准方法状态取样时间来源，整板kg不是该组分单位，不定通用木密度回潮或涂层份额。 |
| native_conversion | 真实交换 | 兼容原生属性 | 实际原生单位 | 仅有据时记录真实数量质量密度换算，含因子单位基准来源温度状态，标称尺寸乘通用密度不能定实际净商品货运重。 |


## 5. 系统边界

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 实际供方完整成品上油实木山毛榉砧板，材种形式整理几何净皮重水分状态供应包装证据 |
| starting_condition_role | 实体商人服务继承成品厨具，不是原木调湿新整理 |
| product_classification_scope | 31912成品木厨具内较窄61046木器批发，不是竹或全部木器平均 |
| recursive_input_rule | 商品成品板留存出厂油水包装为非交换商品库存，不作为当期服务油木水消耗递归制造。 |
| upstream_dataset_requirement | 单独完整成品板交接覆盖实际适用木准备干燥成型整理上油放行继承包制造，仅锯材原山毛榉或油前阶段不完整。 |
| disclosure | 实际品项材种实木整理水分及独立组分基准状态取样时间来源净皮重条件数量时间验收、完整交接需求损失及服务资产服务商货运处理归属未知 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| commodity_finish | 成品板包装 | 全部商品制造含继承出厂整理及损失上游在服务外，真实实体装卸声明接收处理在此一次，商品留存油不是当期服务油。 |  |
| source_example | board_wholesale | 真实厂家证据确认成品厨板实木山毛榉及油，材料整理与包装列重分开，用户首次使用前清洗、仅手洗的要求及尺寸重量资料，不规定仓库处理或数值含量。 | ikea-beech-oiled-board |
| component_state | 商品审计 | 水分整理变化开裂翘曲真实废弃碎片实测释放不同，独立组分需原生单位基准方法状态时间来源，未知成品质量差额不是水油木损失污染物。 |  |
| ambient_events | 真实商人事件 | 继承上油包装常温存放不激活运营保鲜整理包装，索引全部真实收核清洁闲置失败未完成发运退回最终验收及货批作业期间，干燥上油卫生测试变化须范围复核。 |  |


## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| board_wholesale | 成品上油山毛榉砧板商人接收验收 | required | 实际成品上油实木山毛榉砧板自营企业验收 | 实体接收条件库存装卸商业交接，不干燥上油食品使用 | `accepted_service` |

商业货批与仓库作业连续辅助期间重叠，先关联真实收货目视文件状态核对清洁切换闲置拒收未完成，再归属验收群。不默认每板测水油或食品接触试验。开裂翘曲污染包装损坏等不合格需真实隔离退回降级废弃接收路径，不默认打磨重新上油修复；真实独立测量样品移除退回去向单独记录。无验收期间资源仍保留，说明跨期后仅按N一次。

### 过程：成品上油山毛榉砧板商人接收验收 (`board_wholesale`)

#### 输入

##### 产品流

###### 实际使用点交流电 (`electricity_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Energy / kWh
- 数量规则：以cp_energy实际原生量按有据兼容证据归属换算至每参考货批。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

范围证据要求：需真实计量区间全部使用方归属含失败闲置及匹配仓库范围，不由继承木材水分推每板能源或干燥因子。

###### 实际液态处理自来水供给 (`facility_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Volume / m3
- 数量规则：以cp_supplies实际原生量按有据兼容证据归属换算至每参考货批。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需用途计量原生体积供方范围实际去向，板水分测量含油或湿包装不能量化购水废水。

###### 实际独立记录的聚乙烯包装薄膜 (`new_outer_protection_pe_film`)

仅适用于实际独立供应、供本服务新增包裹或衬垫使用的聚乙烯薄膜，须确认实际聚合物配方与薄膜净量。该身份为工厂门通用生产组合，仍须记录实际供给门、供应方及另负责任的交付负荷。不预设LDPE/HDPE牌号、再生比例、厚度或用量。PVC、PET、PP、多层复合材料、胶黏标签、填充包装及继承商品包装仍按余项独立身份处理；整体供应与组分不得重复计量，不预设发生。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass / kg
- 数量规则：以cp_supplies实际原生量按有据兼容证据归属换算至每参考货批。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需实际继承新增包装层级品项实测重或有据数量面积换算，不定包重或每交付全新托盘。

###### 实际独立记录的合成洗涤剂投入 (`operating_supplies_synthetic_detergent`)

仅适用于产品配方、供应状态及用途记录确认的实际合成表面活性洗涤剂。记录扣除包装皮重的材料净量，区分浓缩液与稀释水，整体配方与组分不得相加重复计入。肥皂、消毒剂、抹布、滤材等仍按各自实际身份记录，不预设清洁配方、剂量或发生。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位：Mass / kg
- 数量规则：以cp_supplies实际原生量按有据兼容证据归属换算至每参考货批。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需品项用途净收库存退回组成及耗清理载体吸附内容来源，商品板表面整理油不证明新购润滑剂或化学释放。

###### 实际独立确认的供应柴油 (`fuel_supply_diesel_supply`)

仅适用于本运行燃料要求内实际独立确认的柴油。通用身份为Mass/kg；记录实际配方、供应方、供给门及原生库存范围。原生数量为升时，最终换算kg须有实际相容密度、温度状态、质量体积比单位及来源，不使用目录默认密度或热值。供应库存与燃烧量是不同记录；其他燃料保留余项，购买燃料或未解释库存差不证明燃烧及排放。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Volume / L
- 数量规则：以cp_supplies实际原生量按有据兼容证据归属换算至每参考货批。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需期初净收期末可用退回及完整互斥燃烧废损和适用密度温度换算来源，收货不默认等燃烧量。

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

###### 已完成成品上油实木山毛榉砧板自营批发货批 (`accepted_service`)

一个真实商人所有企业验收、供方完整成品上油实木山毛榉厨房砧板实际供应形式货批，品项材种形态整理状态数量限定服务，不是制造砧板或食品使用保证。

- 选定流：已完成成品上油实木山毛榉砧板自营批发货批
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_consignment`

范围证据要求：需实际板包标识数量、山毛榉实木形式出厂整理证据净皮重水分条件时间商业交接，不板等货批、不定尺寸净重水分范围油剂量。

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

###### 废弃成品涂油实心山毛榉砧板 (`discarded_board_packs_atomic_case`)

仅在实际独立记录确认“废弃成品涂油实心山毛榉砧板”时适用。本卡只覆盖该命名实物状态及自身实际净量、保留组成和接收门。其他部件、碎片、游离液、独立包装及清理载体仍属于`discarded_board_packs`中的身份核实事项；不得移动边界、预设事件、将库存差当废弃，或把仍保留在整体流内的组分另算出口。实际混收流须匹配自身准确身份。原有原生单位数量协议只用于本独占具体情形，其他实际去向分别协调。

- 选定流：废弃成品涂油实心山毛榉砧板
- 流属性/单位：Mass / kg
- 数量规则：以cp_boards实际原生量按有据兼容证据归属换算至每参考货批。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_boards`

范围证据要求：需真实处置原生量状态净皮重接收处理原成品交接当量，外观缺陷湿重变化本身不是废板kg或油木损失。

###### 收集的涂油实心山毛榉砧板碎片 (`discarded_board_packs_beech_board_fragment`)

仅覆盖本过程有独立实际证据的“收集的涂油实心山毛榉砧板碎片”。记录自身物态、净量 kg、事件来源及交接门。其他状态或接收方需在`discarded_board_packs`下独立确定身份，本卡不能替代；记录缺失不证明发生或为零。 仅在实际独立收集并转移至废物接收方时启用，不得用于仍保留在整件、包装或收集混合物中的组分。保留组成只作不可相加记录。不预设开包、切割、拆解、主动干燥、回收率或处理路线，处理及运输责任只归属一次。

- 选定流：收集的涂油实心山毛榉砧板碎片
- 流属性/单位：Mass / kg
- 数量规则：`discarded_board_packs_beech_board_fragment`实际独占归属的 kg / 验收 N，仅归一化一次；已按参考流给出的数量不得再次除以 N。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_boards`

范围证据要求：需事件关联的原生 kg、状态组成、接收或供应门、归属记录及整件组分或对应投入的排他关联，使用协议`cp_boards`。不提供默认数值或换算因子；其他原生单位须有换算证据后使用。

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
- 数量规则：以cp_releases实际原生量按有据兼容证据归属换算至每参考货批。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_releases`

范围证据要求：需真实来源兼容实测物种或实际活动燃烧因子组成去向原生换算，整板质量不能替代独立实测油水组分或物种单位。


###### 实际有独立证据的向空气排放化石甲烷 (`direct_species_methane_fossil_air`)

仅在实际证据确认化石来源、甲烷物种和向空气直接释放时适用。生物源或来源未知甲烷仍在余项要求中，不得改标化石源；不预设泄漏发生、气体比例、数量或排放系数。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：以cp_releases实际原生量按有据兼容证据归属换算至每参考货批。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_releases`

范围证据要求：需真实来源兼容实测物种或实际活动燃烧因子组成去向原生换算，整板质量不能替代独立实测油水组分或物种单位。


###### 实际有独立证据的向空气排放氧化亚氮 (`direct_species_nitrous_oxide_air`)

仅在实际证据确认氧化亚氮物种及向空气直接释放时适用。原生数量为N2O质量，不是氮质量或氮气质量，不预设排放系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：以cp_releases实际原生量按有据兼容证据归属换算至每参考货批。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_releases`

范围证据要求：需真实来源兼容实测物种或实际活动燃烧因子组成去向原生换算，整板质量不能替代独立实测油水组分或物种单位。

## 7. 分配与联产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| event_shared | 全部服务清单 | 先归属直接事件，再用全部真实使用方期间含拒收未完成闲置的有证据兼容物理共享驱动，归属验收群总量仅除正N一次，不自动平均板订单或金额。 |  |
| asset_full_life | shared_assets | 完整制造维护真实更换寿命终结及兼容实际已用寿命驱动、观察历史有来源证据剩余退役不确定性敏感性更新，资产当量或全寿命服务商一种视图，不并用重复按N。 |  |
| supply_stock_returns | 作业用品 | 实际原生独立品项状态S=归属期初+净外收-含回收留存期末，总量保留出口用S/N及真实匹配可用外退，净消耗(S-匹配退回)/N并省该出口，内部循环库存废损保留上游，不作不相关或负量扣减；继承整理不能抵当期设备润滑剂。 |  |
| original_finished_gate | 商品 | 每个实际来源货批状态仅选一种分配视图：直接追踪实测归属量，保留单位状态来源及来源到互斥出口记录证据；或Q归属目标=Q实际来源×D目标/D全部出口。实际来源量须有单位状态来源，D全部出口>0并覆盖兼容完整来源出口记录。每条验收、可用其他出口、退回、期末结转、有证据损失记录均保留数量单位基准来源链接及唯一目标归属，全部出口驱动等于全部竞争记录驱动之和。目标合并验收需求与所归属有证据损失份额时，标识互斥损失记录及分配证据仅一次，并从其他目标移除；不得只用验收作分母、把未知损失当零或叠加直接与驱动分配视图。归属新增基线需求在有来源换算后匹配原单位状态，原成品制造仍在服务外。 新增关联需求=实际所需原交接需求减同一基线已含需求损失，阶段状态匹配后在服务外一次；原木或仅整理前阶段缺成品阶段在外补齐，不用标称质量密度水分油乘数。 |  |
| fate_views | 全部真实出口 | 整成品板包装废物与木水整理组分审计、清理干载体吸液碎屑游离液为不可相加接收视图，处理一归属，可用板整理包出口仍商品审计，不自动避免制造回收抵扣，来源接收未知阻完整链条。 |  |
| commodity_link_scope | nonexchange commodity interface | 原交接库存及已完成外部集成保留实际记录的原始数量。声明source_assignment_scope_id、实际target_consignment_ids/target_cohort_id及source_assignment_quantity_basis，分为single_consignment_case、target_cohort_total或already_per_reference。仅当正same_target_scope_N准确覆盖已分配目标范围时，目标群原始总量才按source_link_per_service_quantity=source_link_assigned_raw_quantity/same_target_scope_N形成与1个accepted_service组合且仅用一次的接口，须原生单位状态来源及接收撤销证据。单货批N=1与已每参考量不再除一次。外部实际库存或阶段集成记录不得按服务N缩量，也不得以整个来源群N去除较窄目标已分配量；保留原始量与明确仅一次关联。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_consignment | board_wholesale | accepted_service | 实际成品板商业验收 | site_id; campaign_id; period_id; consignment_id; supplier_id; contract_id; ownership_start; resale_risk; business_buyer; SKU; lot_ids; board_ids; species_identity; solid_form_evidence; finished_geometry; factory_oil_finish_evidence; supplied_presentation; manufacturer_release; complete_finished_gate; actual_board_quantity; board_unit; actual_pack_quantity; pack_unit; adopted_condition_quality; actual_start; actual_end; time_zone; duration; duration_unit; acceptance_record; reversal_id; N | 核实真实成品上油山毛榉实木形式商人所有转售最终企业验收及原生量状态约定品质，继承整理证据不是油购入。 | Item(s) | 每真实验收冲回 | 实际关联服务库存报表资产期间 | 实际商人商业买方交接 | per reference flow | 真实原生记录状态方法校准覆盖不确定性 |
| cp_boards | board_wholesale | 商品备查; discarded_board_packs | 成品板木水油状态原交接库存台账 | site_id; campaign_id; period_id; consignment_id; lot_id; board_id; event_id; event_time; time_zone; SKU; species; species_source; solid_form; form_source; length; width; thickness; dimension_unit; geometry_method_source; factory_finish_identity; factory_finish_source; net_finished_board_mass; board_mass_unit; gross_pack_mass; inherited_pack_tare; other_tare; tare_unit; mass_conversion_factor; conversion_unit; conversion_basis; conversion_source; count_to_mass_factor; count_factor_unit; count_factor_basis; count_factor_source; actual_measurement_method; calibration; board_count; board_unit; pack_count; pack_unit; component_water_quantity; component_water_unit; component_water_basis; component_water_method; component_water_state; component_water_sample_time; component_water_source; moisture_reading; moisture_unit; moisture_wet_dry_basis; moisture_method; moisture_source; component_oil_quantity; component_oil_unit; component_oil_basis; component_oil_method; component_oil_state; component_oil_sample_time; component_oil_source; component_wood_quantity; component_wood_unit; component_wood_basis; component_wood_method; component_wood_state; component_wood_sample_time; component_wood_source; sample_selection; sample_quantity; sample_unit; sample_representativeness; sample_removal; sample_return; sample_fate; temperature; temperature_unit; relative_humidity; humidity_unit; conditioning_state; condition_record; defects; pack_state; opening; external_receipts; buyer_returns; physical_dispatch; net_accepted_dispatch; closing; supplier_returns; useful_other_exits; actual_discard; discard_unit; discard_composition; discard_receiver; discard_treatment_scope; collected_fragments; fragment_unit; state_change; state_change_method; state_change_unit; state_change_basis; state_change_source; unexplained_residual; original_gate_quantity; original_gate_unit; original_gate_state; original_gate_dataset; original_gate_conversion_method; original_gate_conversion_factor; original_conversion_unit; original_conversion_basis; original_conversion_source; whole_component_method; whole_component_factor; whole_component_unit; whole_component_basis; whole_component_source; exclusive_exit_allocation; source_stage_coverage; missing_upstream_stage; assigned_gate_demand; assigned_gate_demand_unit; assigned_gate_demand_state; assigned_gate_demand_source; baseline_same_loss_coverage; baseline_covered_demand; baseline_demand_unit; baseline_demand_state; baseline_demand_source; assignment_driver; assignment_driver_unit; all_exit_driver; all_exit_driver_unit; allocation_method; allocation_source; additional_gate_demand; additional_gate_demand_unit; additional_gate_demand_state; additional_gate_demand_source; commodity_owner; adjustment_status; uncertainty; original_gate_quantity_source; original_gate_direct_record; assignment_view; traced_assigned_quantity; traced_assigned_unit; traced_assigned_state; traced_assigned_source; traced_source_exit_links; target_group_definition; target_exit_record_ids; target_driver_quantity; target_driver_unit; target_driver_basis; target_driver_source; target_driver_record_links; source_all_exit_driver_quantity; source_all_exit_driver_unit; source_all_exit_driver_basis; source_all_exit_driver_source; competing_exit_driver_records; exit_category; exit_driver_quantity; exit_driver_unit; exit_driver_basis; exit_driver_source; exit_driver_record_links; loss_owner_links; allocation_scope_basis; source_assignment_scope_id; source_assignment_quantity_basis; target_consignment_ids; target_cohort_id; source_quantity_already_per_reference; external_raw_integration_quantity_preserved; once_only_service_link_evidence; source_link_assigned_raw_quantity; source_link_assigned_raw_quantity_unit; source_link_assigned_raw_quantity_basis; source_link_assigned_raw_quantity_method; source_link_assigned_raw_quantity_state; source_link_assigned_raw_quantity_source; source_link_assigned_raw_quantity_sample_time; same_target_scope_N; same_target_scope_N_unit; same_target_scope_N_basis; same_target_scope_N_method; same_target_scope_N_state; same_target_scope_N_source; same_target_scope_N_sample_time; source_link_per_service_quantity; source_link_per_service_quantity_unit; source_link_per_service_quantity_basis; source_link_per_service_quantity_method; source_link_per_service_quantity_state; source_link_per_service_quantity_source; source_link_per_service_quantity_sample_time; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | 每个实际来源货批状态仅选一种分配视图：直接追踪实测归属量，保留单位状态来源及来源到互斥出口记录证据；或Q归属目标=Q实际来源×D目标/D全部出口。实际来源量须有单位状态来源，D全部出口>0并覆盖兼容完整来源出口记录。每条验收、可用其他出口、退回、期末结转、有证据损失记录均保留数量单位基准来源链接及唯一目标归属，全部出口驱动等于全部竞争记录驱动之和。目标合并验收需求与所归属有证据损失份额时，标识互斥损失记录及分配证据仅一次，并从其他目标移除；不得只用验收作分母、把未知损失当零或叠加直接与驱动分配视图。归属新增基线需求在有来源换算后匹配原单位状态，原成品制造仍在服务外。 只归属独立确认的实物情形，其他实际去向按来源分别保留；每个原生记录只属于一个交换，任何总量仅作不可相加审计。 | 实际件kg成品状态及单独声明组分单位 | 每真实库存移动测量状态事件 | 实际关联服务库存报表资产期间 | 实际供方成品板货批原交接 | per reference flow | 真实原生记录状态方法校准覆盖不确定性 |
| cp_energy | board_wholesale | electricity; fuel_supply | 实际仓库计量燃烧证据 | site_id; period_id; consignment_id; event_id; asset_id; start_time; end_time; time_zone; duration; duration_unit; meter_id; carrier; reading_start; reading_end; reading_unit; actual_driver; driver_unit; all_consumer_driver; all_consumer_unit; idle_cleaning_failed_scope; actual_burn; burn_unit; burn_method; nonburned_return; nonburned_waste; nonburned_loss; closing; provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 计实际仓库辅助区间全部使用方份额，燃烧另实测或完整互斥原生去向调查未知损失后重建，不用交付燃料板水分代理。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | 实际能源燃料原生单位 | 每真实区间事件 | 实际关联服务库存报表资产期间 | 全部纳入服务使用方 | per reference flow | 真实原生记录状态方法校准覆盖不确定性 |
| cp_supplies | board_wholesale | facility_water; new_outer_protection; operating_supplies; fuel_supply; usable_supply_returns | 实际服务供应继承整理区分台账 | site_id; period_id; consignment_id; event_id; event_time; time_zone; SKU; formulation; concentration; concentration_unit; composition_basis; composition_source; native_unit; actual_equipment_or_facility_purpose; inherited_factory_finish_exclusion; opening; receipt_gross; receipt_tare; receipt_net; closing; retained_recovery; usable_external_return; return_recipient; matched_input_id; original_supply_owner; gross_consumed_view; omit_matched_return_exchange; actual_waste; actual_loss; inherited_new_pack_level; dry_cleanup_carrier_quantity; carrier_unit; actual_cleanup_event; density; density_unit; density_source; temperature; temperature_unit; conversion_factor; factor_unit; factor_basis; factor_source; provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 采用真实同状态服务用品净收期末外退清理载体，证明设备设施用途与继承板整理分开，同范围退回净额保留原输入归属省匹配出口。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 柴油升转kg须有实际相容密度、温度状态、质量体积比单位及来源，不预设换算。 | 实际原生品项单位 | 每收领退盘点 | 实际关联服务库存报表资产期间 | 实际独立服务供应 | per reference flow | 真实原生记录状态方法校准覆盖不确定性 |
| cp_assets | board_wholesale | shared_assets | 完整寿命真实使用方记录 | site_id; period_id; consignment_id; asset_id; consumer_id; phase_id; event_date; manufacture_dataset; maintenance; replacement; end_of_life; driver_used; driver_used_unit; lifetime_driver; lifetime_driver_unit; observed_history; evidenced_remaining; remainder_source; termination; attribution_view; uncertainty; sensitivity; update_trigger | 列真实仓库装卸周转资产全部使用方期间完整寿命兼容已用寿命驱动及有来源剩余退役，资产或完整服务商一种视图。 | Item(s)或实际寿命原生单位 | 每资产事件期间复核 | 实际关联服务库存报表资产期间 | 全部真实使用方全资产寿命 | per reference flow | 真实原生记录状态方法校准覆盖不确定性 |
| cp_providers | board_wholesale | provider_services | 实际完成物理辅助范围 | site_id; period_id; consignment_id; provider_id; service_id; event_date; completed_result; physical_quantity; native_unit; duration; duration_unit; actual_visual_document_measurement_scope; component_sample_scope; completion_evidence; material_coverage; energy_coverage; chemical_coverage; asset_lifecycle_coverage; freight_coverage; treatment_coverage; direct_release_coverage; actual_driver; driver_unit; all_consumer_driver; all_consumer_unit; missing_coverage; changed_treatment_or_test_scope | 核真实成果原生单位及独立测量样品资源，辅助不隐商人干燥上油消毒食品接触测试或消费者洗涤，直接服务商范围一次。 | 实际服务商原生物理单位 | 每真实完成成果 | 实际关联服务库存报表资产期间 | 实际外部责任 | per reference flow | 真实原生记录状态方法校准覆盖不确定性 |
| cp_freight | board_wholesale | freight | 实际成品状态货载真实路段台账 | site_id; period_id; consignment_id; leg_id; event_date; mode; provider_id; actual_cargo; cargo_unit; finished_board_mass; inherited_pack_mass; added_outer_pack_mass; other_included_tare; tare_scope; load_conversion_factor; load_factor_unit; load_factor_basis; load_factor_source; distance; distance_unit; distance_conversion_factor; distance_factor_unit; distance_factor_basis; distance_factor_source; empty_return_scope; actual_driver; driver_unit; all_consumer_driver; all_consumer_unit; provider_native_unit; supplier_delivered_coverage; duplicate_leg_check; measurement_view; weigh_record_link; quantity_source; unique_load_id; load_count; quantity_each_or_total; each_load_quantity; each_load_unit; total_load_quantity; total_load_unit; vehicle_gross; vehicle_gross_unit; vehicle_gross_source; vehicle_gross_conversion_factor; vehicle_gross_factor_unit; vehicle_gross_factor_basis; vehicle_gross_factor_source; vehicle_non_cargo_tare; vehicle_tare_unit; vehicle_tare_source; vehicle_tare_conversion_factor; vehicle_tare_factor_unit; vehicle_tare_factor_basis; vehicle_tare_factor_source; cargo_pack_mass; cargo_pack_unit; retained_board_oil_moisture_basis; share_driver_source; share_scope; normalization_count_N; N_record_link | 选择实际实测含包装货载，或相同状态车辆毛重仅减实际车辆及非货物皮重；载荷保留实际原有新增货包及板内留存水油，不能当皮重扣除。每个唯一载荷路段只用一种载荷视图，原生量须标明每次或已为总量：仅每次量乘有据重复载荷次数，总量不得再乘，不把组分审计量加到整载荷。实际载荷换kg真实距离换km，保留因子单位基准来源。每载荷路段仅按兼容完整全部使用方份额归属一次，求和唯一记录归属kg*km后仅除验收N一次；供方到货服务商空返范围不重叠。 | kg*km或实际原生货运单位 | 每纳入真实路段 | 实际关联服务库存报表资产期间 | 实际商品服务废物货运范围 | per reference flow | 真实原生记录状态方法校准覆盖不确定性 |
| cp_fates | board_wholesale | environmental_water; other_wastes; contained_wastewater; water_outfalls | 实际来源接收混合清理游离液台账 | site_id; period_id; consignment_id; event_id; event_time; time_zone; material_source; source_location; native_quantity; native_unit; dry_carrier_mass; carrier_unit; carrier_basis; carrier_source; absorbed_liquid_mass; absorbed_liquid_unit; absorbed_liquid_basis; absorbed_liquid_source; collected_fragment_mass; collected_fragment_unit; collected_fragment_basis; collected_fragment_source; actual_oil_water_wood_component_role; component_native_quantity; component_unit; component_basis; component_method; component_state; component_sample_time; component_source; composition; concentration; concentration_unit; composition_basis; composition_source; mixed_wet_mass; dry_mass; mass_unit; collected_free_volume; received_volume; volume_unit; density; density_unit; density_source; temperature; temperature_unit; conversion_factor; factor_unit; factor_basis; factor_source; purchased_direct_water; receiver; receiving_medium; treatment_dataset; treatment_coverage; direct_outfall; overlapping_component_view; actual_driver; driver_unit; all_consumer_driver; all_consumer_unit; uncertainty | 计真实原生来源接收量状态含混合载体吸附内容碎屑单独游离液，独立油水木组分需各自原生单位基准方法状态时间来源，不以整板质量代替；整包组分固液不可相加处理一归属。 | 实际原生质量体积及独立组分单位 | 每来源清理接收排口事件 | 实际关联服务库存报表资产期间 | 实际来源接收服务范围 | per reference flow | 真实原生记录状态方法校准覆盖不确定性 |
| cp_releases | board_wholesale | direct_species | 实际来源物种介质测量方法 | site_id; period_id; consignment_id; event_id; start_time; end_time; time_zone; duration; duration_unit; source_role; actual_component_identity; native_component_quantity; component_unit; component_basis; component_method; component_state; component_sample_time; component_source; actual_species; receiving_medium; particle_size_basis; measured_quantity; measurement_unit; actual_activity; activity_unit; actual_burn; burn_unit; factor; factor_unit; factor_basis; factor_source; composition; composition_basis; composition_source; release_fraction; fate_basis; fate_source; gas_volume; volume_unit; pressure; pressure_unit; temperature; temperature_unit; molecular_conversion; conversion_unit; conversion_source; method; method_version; provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 用真实实测物种介质或兼容有据活动因子及全部原生操作数，整板重气味生物碳差额本身不是释放法，独立组分单位基准完整因子组成去向仅一次。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kg已识别物种及真实原生操作数 | 每真实实测模型区间 | 实际关联服务库存报表资产期间 | 实际来源受纳介质 | per reference flow | 真实原生记录状态方法校准覆盖不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | 全部服务行 | 归属真实直接有据兼容全部使用方份额，保留失败拒收未完成闲置，再仅将实际归属群总量除正验收N一次。 | cp_consignment; cp_energy; cp_supplies; cp_assets; cp_providers; cp_freight; cp_fates; cp_releases | 实际每参考服务清单 |  |
| board_stock_state | 商品 | 核真实同状态板包库存：期初+外收+买方退回-期末-实物发运-供方退回-可用其他出口-真实废弃-净样品移除=未知差额。配内部移动，成品净皮重水分条件独立测量含不确定性，单测木水油时各用原生量单位基准方法状态时间来源及兼容不重叠视图，不由整板差额推组分损失排放。 | cp_boards | 审计真实成品组分状态去向 |  |
| source_gate_demand | 商品接口 | 每个实际来源货批状态仅选一种分配视图：直接追踪实测归属量，保留单位状态来源及来源到互斥出口记录证据；或Q归属目标=Q实际来源×D目标/D全部出口。实际来源量须有单位状态来源，D全部出口>0并覆盖兼容完整来源出口记录。每条验收、可用其他出口、退回、期末结转、有证据损失记录均保留数量单位基准来源链接及唯一目标归属，全部出口驱动等于全部竞争记录驱动之和。目标合并验收需求与所归属有证据损失份额时，标识互斥损失记录及分配证据仅一次，并从其他目标移除；不得只用验收作分母、把未知损失当零或叠加直接与驱动分配视图。归属新增基线需求在有来源换算后匹配原单位状态，原成品制造仍在服务外。 独立核对实际所需关联需求与同一基线阶段损失覆盖，在服务外仅一次补缺失兼容需求，不再把原制造叠为服务输入。 | cp_boards; cp_consignment | 明确单独关联完整成品交接需求 |  |
| actual_freight | freight | 选择实际实测含包装货载，或相同状态车辆毛重仅减实际车辆及非货物皮重；载荷保留实际原有新增货包及板内留存水油，不能当皮重扣除。每个唯一载荷路段只用一种载荷视图，原生量须标明每次或已为总量：仅每次量乘有据重复载荷次数，总量不得再乘，不把组分审计量加到整载荷。实际载荷换kg真实距离换km，保留因子单位基准来源。每载荷路段仅按兼容完整全部使用方份额归属一次，求和唯一记录归属kg*km后仅除验收N一次；供方到货服务商空返范围不重叠。 | cp_freight | 每参考实际原生货运 |  |
| actual_species | direct_species; direct_species_co2_fossil_air; direct_species_methane_fossil_air; direct_species_nitrous_oxide_air | 用真实已识别物种介质实测或兼容活动燃烧因子，原生组分气体浓度换算操作数所需组成去向一次，完整因子不再乘，实测组分油水不自动释放，板重生物碳不是物种量。 | cp_releases; cp_boards; cp_energy | 每参考实际有据物种 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| identity_finish | 全部行 | 最终交换前解决实际山毛榉实木出厂油状态及各服务材料物种接收原生身份支持，数量支持不识别板或服务。 | 真实供方样品身份详情支持证据 |
| component_method | 商品组分测量 | 各独立木水油测量量具有原生单位基准方法状态取样时间来源真实样品代表性，不以整板kg标称水分标准油量替代。 | cp_boards; cp_fates; cp_releases |
| source_scope_life | 全部责任 | 完整成品交接原单位状态来源归属基线需求在外，实际服务商接收处理一次及全部使用方完整资产阶段有来源剩余，披露未知差额去向独立范围缺口。 | 真实覆盖矩阵原生测量寿命证明 |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | board_wholesale | 电表记录对应哪个供电点、交直流状态、电压和供应方数据集？核对已列交流电卡与其他有证据的供电，不得将交流电 UUID 用于其他能源。 计量真实照明电动装卸业务辅助，不纳入窑干打磨油固化或食品接触测试能源。 范围证据要求：需真实计量区间全部使用方归属含失败闲置及匹配仓库范围，不由继承木材水分推每板能源或干燥因子。 计量证据：协议`cp_energy`；原记录口径 Energy / kWh。原数量约束“以cp_energy实际原生量按有据兼容证据归属换算至每参考货批。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`electricity_ac`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_energy`; 实际来源关联原生记录 |
| facility_water | board_wholesale | 供应记录是否证明为处理自来水，还是其他明确水质或水源？核实供水状态及交接门，不得用自来水卡替代其他水。 纳入真实设施卫生辅助水，与继承木材水分下游手洗分开，消费者首次使用前清洗不是商人洗板作业。 范围证据要求：需用途计量原生体积供方范围实际去向，板水分测量含油或湿包装不能量化购水废水。 计量证据：协议`cp_supplies`；原记录口径 Volume / m3。原数量约束“以cp_supplies实际原生量按有据兼容证据归属换算至每参考货批。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`facility_water_liquid_tap`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_supplies`; 实际来源关联原生记录 |
| new_outer_protection | board_wholesale | 取得包装物料单或规格、材料或复合层身份及新增与继承包装的责任。按该记录逐项确定尚缺的套袋、封口、标签、捆扎带或支撑件身份；一体复合包装不得拆成可相加的材料交换。 记录真实新增服务外箱膜绑带标签，不新计继承零售包标签或成品油制造，周转装卸运输设备属寿命服务。 范围证据要求：需实际继承新增包装层级品项实测重或有据数量面积换算，不定包重或每交付全新托盘。 计量证据：协议`cp_supplies`；原记录口径 Mass / kg。原数量约束“以cp_supplies实际原生量按有据兼容证据归属换算至每参考货批。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`new_outer_protection_pe_film`; `new_outer_protection_paperboard_carton`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_supplies`; 实际来源关联原生记录 |
| operating_supplies | board_wholesale | 取得下述清洁或维护职责实际采购品号、配方或安全数据表、供应浓度、物态、用途及库存领用记录。逐项核实洗涤剂以外的实际材料；不得由本 PCR 预设药剂、滤材或剂量。 按原生配方真实使用展开设备润滑剂清洁剂擦布吸附材滤材行政耗材，出厂砧板油为继承商品不自动为当期服务油，不引入打磨上油消毒或强制处理。 范围证据要求：需品项用途净收库存退回组成及耗清理载体吸附内容来源，商品板表面整理油不证明新购润滑剂或化学释放。 计量证据：协议`cp_supplies`；原记录口径 Mass / kg。原数量约束“以cp_supplies实际原生量按有据兼容证据归属换算至每参考货批。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`operating_supplies_synthetic_detergent`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_supplies`; 实际来源关联原生记录 |
| fuel_supply | board_wholesale | 库存记录对应哪种燃料牌号、配方及供给门？核实已列柴油以外的实际燃料及原生单位；体积转质量前取得实际密度。 真实牌号原生库存供应与燃烧未燃出口分开，核雇用装卸运输是否已含燃料。 范围证据要求：需期初净收期末可用退回及完整互斥燃烧废损和适用密度温度换算来源，收货不默认等燃烧量。 计量证据：协议`cp_supplies`；原记录口径 Volume / L。原数量约束“以cp_supplies实际原生量按有据兼容证据归属换算至每参考货批。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`fuel_supply_diesel_supply`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_supplies`; 实际来源关联原生记录 |
| provider_services | board_wholesale | 取得本记录中明列各职责的供应商合同或完成结果记录、原生计量物理单位及包含资源。确定各项服务结果身份；检验、清洁、装卸为不同服务，价格或小时不得改称件数。 以原生物理单位用真实完成仓储装卸目视文件条件核对卫生维护业务辅助，供方材种整理记录不证明商人新做水分油分食品接触测试。 范围证据要求：需真实执行成果单位测量范围及完整材料能源资产货运处理覆盖，消费者保养要求或证书本身不是已执行服务。 计量证据：协议`cp_providers`；原记录口径 Count / Item(s)。原数量约束“以cp_providers实际原生量按有据兼容证据归属换算至每参考货批。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_providers`; 实际来源关联原生记录 |
| shared_assets | board_wholesale | 对本记录中明列的每种资产取得资产编号、配置及匹配的完整生命周期数据集。待补的是各资产或服务身份及全寿命全部使用者分母；仓库、叉车、托盘不能共用一条计数交换，也不能套用默认寿命。 跨全部真实使用方期间完整寿命覆盖建筑货架叉装计量信息周转托盘箱，商品砧板不是仓库资本品。 范围证据要求：需制造维护真实更换寿命终结兼容已用寿命驱动单位、观察有来源剩余退役不确定性敏感性更新，不设通用寿命每程全新箱。 计量证据：协议`cp_assets`；原记录口径 Count / Item(s)。原数量约束“以cp_assets实际原生量按有据兼容证据归属换算至每参考货批。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_assets`; 实际来源关联原生记录 |
| freight | board_wholesale | 对实际入库、出库、退运及废物运输段取得运输方式或车辆、温控服务、起终点、实际载荷和距离及供应方覆盖。方式或配置未明确前不能选择运输流；不同运输方式不得合成一条 kg*km 流。 计真实运输板含留存整理水分及实际包装皮重路段，净成品板干木组分所列包重不同，供方到货空返退回共享范围一归属。 载荷包括实际原有新增货包和板内留存水油；采用车辆毛重时仅扣车辆及非货物皮重。 范围证据要求：需真实载荷状态皮重距离原生换算份额来源，不用面积厚度通用密度或标称每板kg默认货载。 计量证据：协议`cp_freight`；原记录口径 Mass*distance / kg*km。原数量约束“以cp_freight实际原生量按有据兼容证据归属换算至每参考货批。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_freight`; 实际来源关联原生记录 |
| environmental_water | board_wholesale | 按取水许可或计量记录确定实际取水口、地表水体或含水层、位置及水源实测量。地表水和地下水需不同源身份；购买水用量不能证明直接取水。 仅直接运营水供时记真实提取地点用途，继承板水分或环境吸湿不创造服务取水。 范围证据要求：需水源计量区间提取边界并与购水分开，不将木板水分含量转提取升数。 计量证据：协议`cp_fates`；原记录口径 Volume / m3。原数量约束“以cp_fates实际原生量按有据兼容证据归属换算至每参考货批。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_fates`; 实际来源关联原生记录 |
| usable_supply_returns | board_wholesale | 将对外退料凭据匹配到唯一投入品号、状态、原生单位及接收方。采用净消耗投入时省略对应退料交换；商品退货及期末库存另作审计记录。 仅真实同范围独立品项状态外退匹配服务供应，净消耗省对应退回交换，回收留存内部循环为期末，商品板整理包退回仍商品审计。 范围证据要求：需接收原生转移匹配原输入来源，不以原板整理回收扣不相关仓库油、不负供应或自动抵扣。 计量证据：协议`cp_supplies`；原记录口径 Mass / kg。原数量约束“以cp_supplies实际原生量按有据兼容证据归属换算至每参考货批。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`usable_supply_returns_detergent_return`; `usable_supply_returns_pe_film_return`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_supplies`; 实际来源关联原生记录 |
| discarded_board_packs | board_wholesale | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 用拒收开裂翘曲损坏板真实碎片原混包实际接收量组成，整成品板及木水油包组分审计不可相加，上游成品制造在服务外。 范围证据要求：需真实处置原生量状态净皮重接收处理原成品交接当量，外观缺陷湿重变化本身不是废板kg或油木损失。 计量证据：协议`cp_boards`；原记录口径 Mass / kg。原数量约束“以cp_boards实际原生量按有据兼容证据归属换算至每参考货批。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`discarded_board_packs_atomic_case`; `discarded_board_packs_beech_board_fragment`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_boards`; 实际来源关联原生记录 |
| other_wastes | board_wholesale | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 按原生接收状态记耗擦布吸附材滤材设备残余新增外保护，干载体加吸液收集碎屑为混合视图，不重复整板液废、不虚构打磨板屑。 范围证据要求：需接收混合湿干重及载体吸液碎屑各原生单位基准来源组成处理归属，继承油存在或新擦布购入均不量化耗固废。 计量证据：协议`cp_fates`；原记录口径 Mass / kg。原数量约束“以cp_fates实际原生量按有据兼容证据归属换算至每参考货批。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`other_wastes_spent_wipe`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_fates`; 实际来源关联原生记录 |
| contained_wastewater | board_wholesale | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 记真实设施作业送处理游离液，与木水分留存整理吸附清理固体分开，不假定批发洗板上油食品接触消毒废水。 范围证据要求：需收集接收体积组成事件来源接收处理范围，购水水分检测湿擦布重不是废水体积代理。 计量证据：协议`cp_fates`；原记录口径 Volume / m3。原数量约束“以cp_fates实际原生量按有据兼容证据归属换算至每参考货批。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`contained_wastewater_aqueous_cleaning`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_fates`; 实际来源关联原生记录 |
| water_outfalls | board_wholesale | 确定直接排口、接收水体或土壤介质、实测水量及独立分析的污染物种。送处理的下水道转移不是该排口；接收介质未明时不能确定基本流。 仅真实跨直接环境排口水列此，容装转移为Waste，板包内部水分变化在真实去向确认前仍状态审计。 范围证据要求：需真实地点区间原生体积组成介质证据，湿板污渍清理事件不证明直接排水。 计量证据：协议`cp_fates`；原记录口径 Volume / m3。原数量约束“以cp_fates实际原生量按有据兼容证据归属换算至每参考货批。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_fates`; 实际来源关联原生记录 |
| direct_species | board_wholesale | 按排放或采样记录确定各实测排放的来源事件、化学物或粒径身份、来源属性及接收介质。物种、粒径或介质不明须保留具体证据缺口；化学品总用量或库存损失不能提供这些身份。 仅从真实燃烧维护清理材料事件展开有支持化学物种粒径介质，出厂整理木生物碳气味开裂板质量差额不自动为油挥发物粉尘CO2水蒸气排放。 范围证据要求：需真实来源兼容实测物种或实际活动燃烧因子组成去向原生换算，整板质量不能替代独立实测油水组分或物种单位。 计量证据：协议`cp_releases`；原记录口径 Mass / kg。原数量约束“以cp_releases实际原生量按有据兼容证据归属换算至每参考货批。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`direct_species_co2_fossil_air`; `direct_species_methane_fossil_air`; `direct_species_nitrous_oxide_air`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_releases`; 实际来源关联原生记录 |


## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| commercial_acceptance | accepted_service | 需真实唯一自营最终企业验收货批N>0及全部材种形式整理数量状态时间交接限定，不得以板件数或kg商品量替代服务身份。 |  |
| finished_components | 商品 | 核成品净与毛包装皮重及独立木水油原生组分单位基准方法状态样品时间来源，出厂整理仍继承商品非服务油，未知差额不得直接视为损失量或物种排放，也不得默认归零。 | ikea-beech-oiled-board |
| actual_route_exits | board_wholesale | 查真实常温装卸开裂翘曲污染样品退回降级废弃路径，不把商人干燥上油打磨消毒食品测试消费者洗涤藏服务商中。 |  |
| original_finished_source | 商品接口 | 要求实际来源量单位状态来源及直接追踪或可复算驱动分配一种视图；用完整验收可用其他出口退回期末结转有证据损失记录驱动重算全部出口分母，每条有数量单位基准来源链接，分母正且兼容记录互斥，不仅验收分母、不叠直接驱动视图。核目标损失份额一次、原单位状态换算及服务外同基线阶段损失覆盖，未知记录损失不能默认零。 |  |
| all_users_asset | 全部服务资源 | 需实际事件期间全部使用方及完整资产制造维护更换寿命终结、兼容已用寿命单位观察有来源剩余退役及一次按N服务商资产视图，没有验收的期间仍保留实际资源负担。 |  |
| nonadditive_stock_fates | 全部真实清单 | 核实测原生供应退回来源接收换算、净消耗省匹配退回及整板组分混合清理游离液直接物种不重叠、一处理归属不自动抵扣。 |  |
| packed_freight | freight | 核唯一载荷路段标识、每次总量次数来源、实测含包货载或车辆毛重减非货物皮重一种视图、保留货包油水、原生因子单位来源、完整分配份额及最后仅一次按N归一化。 |  |
| validate_concrete_identity_decisions | all inventory rows | 将每项实际身份核实事项落实到实物明确的流卡和原生数量，或提供不适用证据。证据检查点 ID 不是交换。发生、物种、状态、接收方或服务配置缺失时阻断最终数据完成，不默认零。按规定保持整体与组分、总量投入与对应退料的排他关系。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 实际身份完整性审核后secondary_dataset；background_dataset |
| downstream_use | 单独关联完整成品来源商品实际归属需求损失覆盖的上油实木山毛榉砧板商人服务附加 |
| allowed_use | 实际供方完整上油实木山毛榉厨板常温自营企业货批，兼容原生成品组分包装状态证据 |
| excluded_use | 独立板足迹原木其他材料；商人干燥打磨上油食品接触测试洗涤；消费者食品使用；零售代理纯仓储 |
| required_metadata | 实际品项材种实木形式整理几何板包标识数净皮重水分及独立组分单位基准方法状态取样时间来源、真实条件时间验收地点期间、完整成品交接需求损失及服务资产服务商货运处理归属 |
| required_quality_disclosure | 身份支持组分采样状态数量不确定性、继承整理与真实服务供应、原需求基线覆盖接收缺口未知库存、全部使用方寿命剩余假设独立范围限制 |
| update_trigger | 木材种形式整理包装水分组分测量验收或主动干燥上油处理、来源交接损失覆盖、服务商资产货运处理原生换算法变化 |


## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-woodware-wholesale | official_guidance | UNSD CPC3 explanatory notes (30 June2025),31912 wood kitchenware and61046/group319. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅分类支持成品木厨具内较窄木器商人服务，不是31913或原木制造。 |
| ikea-beech-oiled-board | official_guidance | IKEA, PROPPMATT chopping board302.334.18, current public manufacturer product/materials/pack body. https://www.ikea.com/ma/en/p/proppmaett-chopping-board-beech-30233418/ | 仅实际成品实木山毛榉油形式及净重包装区分问题，不采用尺寸重量水分油配方寿命食品使用保证或把消费者洗涤当商人作业。 |
