---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-office-machinery-and-equipme-fa74b5b7
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 成品钢框软包访客椅自营批发

## 1. 范围与适用性

本规则覆盖实际原厂完整成品全新四脚主要钢框办公访客会议椅，座面和靠背均软包、带脚垫，以真实成品发运装配状态原包装经常温商人自营所有权转售企业物理批发。需真实品项物料表涂饰脚垫包装及所含与另售部件证据。排除脚轮气升任务机构写字板扶手套叠联排座凳、主要木框纯塑椅、制造软包翻新修理商人装配承载试验坐用零售收费代理纯仓储。实际新增操作需路线复核，来源选项不拼虚构品项。

这是服务附加：实际完整材料供应钢成形焊接聚合物泡沫制造成形软包所选涂饰装配放行原包生产含真实损失上游在外。完整链就绪前，同基线阶段损失覆盖及互斥来源归属后，匹配完整原交接需求单独量化关联一次。实际物理装卸接收运输处理在内一次，交易椅是商品库存，不是服务输入坐用服务或仓库资本。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-office-machinery-and-equipme-fa74b5b7 |
| classification_refs | CPC3 61083含38111主要金属框座椅，本四脚软包访客椅路线较窄，不是全部3812/451办公商品 |
| covered_products | 全新完整四脚主要钢框座背均软包脚垫访客会议椅常温自营企业货批服务 |
| excluded_products | 脚轮气升写字板套叠联排凳主要木框纯塑；制造商人装配软包翻新修理承载试验坐用；零售代理纯仓储 |
| representative_product | 真实品项批椅部件对应、框泡沫织物壳涂饰紧固脚垫及实际所含扶手附件、成品发运装配包装原生质量数量状态最终交接 |
| production_route | 完整原厂装配放行原包供方交接 -> 所有权接收常温库存条件完整装卸 -> 最终企业验收转售 |
| market_state | 数量物理批发服务，真实椅组分包装原生量状态仍非交换商品审计 |


## 3. 参考流

| Field | Value |
| --- | --- |
| What | 已完成成品钢框软包访客椅自营批发货批 |
| How much | 1 Item(s) |
| How well | 实际完整全新四脚主要钢框座背软包脚垫椅，有来源品项部件状态数量条件企业验收，不保证堆高承载未来坐用或寿命 |
| How long or cycle | 实际接收到最终验收、独立库存报告期间完整资产阶段，无验收事件资源保留 |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 已完成成品钢框软包访客椅自营批发货批 |
| reference_flow_property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | Count unit group `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | consignment_id; merchant_purchase_ownership_resale; actual_B2B_buyer; FINAL_gate_time_source_reversals; actual_model_SKU_lot_chair_ids; fourleg_primarily_steel_frame_evidence; seat_AND_back_upholstered_glides; actual_frame_shell_foam_textile_BOM; actual_finish_fastener_glide_inclusions; included_versus_separate_arms_accessories; factoryfinished_shippingassembly_pack_state; native_chair_part_count_net_gross_tare; independent_component_moisture_finish_basis; component_method_state_sampletime_source; actual_start_end_timezone_duration_unit_source; complete_source_assignment_baseline_coverage_owner |


## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule | source_ids |
| --- | --- | --- | --- | --- | --- |
| chair_part_native | 商品数重 | 数量；质量 | 真实原生椅部件数及kg，单位明确 | 追真实椅标识品项包装所含另售物料表真实成品发运装配状态，件套脚垫软垫仅有来源真实对应才换算，不标称每箱椅数缺部件等整椅损失。 | ki-strive-current |
| component_state | 独立框泡沫织物壳涂饰脚垫 | 真实组分质量面积体积或组成属性 | 各真实原生单位及量纲换算单位 | 各独立实测组分水分涂饰有单位基准方法状态取样时间来源代表总体，不由管几何标称钢级或来源厚度推钢泡沫质量；密度换算需真实材料状态密度单位温度单位来源。 | ki-strive-technical-2020 |
| water_definition | 真实组分水审计 | 质量；仅水质量分数比 | 真实水/原接收湿分数或兼容干水/非水比 | 仅同真实样品定义：w_wet=m_water/m_as_received；m_nonwater=m_as_received*(1-w_wet)；若r_dry=m_water/m_nonwater则w_wet=r_dry/(1+r_dry)，百分比先转比。其他挥发物干燥失重非水涂饰排放，未知水分不为零。 |  |
| FINAL_reference | 服务清单 | 数量分母；真实行原生物理属性 | Item(s)分母；各真实物理资源单位每Item(s) | 需真实购买所有权转售企业买方最终交接时间来源已核撤销，归属完整真实使用方事件期间后正唯一最终N除一次，N0保留资源不除，数量支持为计量不识别椅服务身份。 |  |


## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 全新完整原厂成品四脚主要钢框访客会议椅，座背均软包，真实脚垫物料表涂饰所含发运装配原包原生量状态 |
| starting_condition_role | 物理批发继承完整制造装配放行商品，不原钢泡沫聚合物或新增仓库坐椅资产 |
| product_classification_scope | 仅经38111较窄61083，不全座椅3812家具451机器 |
| recursive_input_rule | 真实交易椅留存组分水分涂饰继承包退回期末为非交换商品审计，不自动消耗钢泡沫织物涂饰或服务资本。 |
| upstream_dataset_requirement | 独立匹配实际配置完整材料钢成形焊接聚合物泡沫成形软包所选涂饰装配放行原包供方交接，原钢泡沫树脂未装部件组合不足完整阶段。 |
| disclosure | 真实品项批椅部件物料表脚垫涂饰所含发运装配包原生量净毛皮组分水方法状态时间来源、最终交接时间完整原来源归属基线覆盖和服务商资产货运接收归属未知 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| complete_commodity | 商品接口 | 完整实际制造装配放行原包含真实损失上游在服务外；原交接需求同基线阶段损失覆盖单独量化关联一次，实际服务接收运输处理一次。 |  |
| source_limits | guest_chair_wholesale | KI当前选项页和Jan2020旧技术规格仅为真实配置问题的定性来源。不把所有选项或另一品牌拼一品项，不默认管径钢级泡沫厚度比例涂层脚垫材质重量堆高承载寿命保修，不继承厂家试验施于商人。 | ki-strive-current; ki-strive-technical-2020 |
| unknown_fate | 商品状态 | 缺脚垫裂垫划伤潮湿与真实部件或整椅废弃不同，未知库存差非整椅损失化学释放零，镀铬存在非六价铬排放或默认回收。 |  |


## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| guest_chair_wholesale | 成品访客椅商人接收及最终企业交接 | required | 实际完整原厂四脚钢框座背软包脚垫椅自营最终企业交接 | 真实接收完整条件库存装卸商业验收，无制造装配软包涂饰承载试验坐用 | `accepted_service` |

商业货批与仓库批次连续辅助期间交叠。链接真实接收文件目视型号完整条件、既有或实际代表性量测来源、设施清理换批闲置取消失败拒收隔离未完成发运最终验收至批期间。无每椅承载试验或常规拆包拆椅。缺件破软包划伤湿损按真实决定链接供方退回期末待决可用其他出口或接收废弃；不是默认更换翻新重包或切除部件。真实新增含外包流程需范围复核，代表性样品实际移除退回去向负担一次。N0保持事件期间资源及有据群归属不除不删，正最终N才归一一次。

### 过程：成品访客椅商人接收及最终企业交接 (`guest_chair_wholesale`)

#### 输入

##### 产品流

###### 实际使用点交流电 (`electricity_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Energy / kWh
- 数量规则：按 cp_energy 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

范围证据要求：需真实计量区间完整全部使用方事件归属含闲置失败未完成及服务商覆盖，不每椅每保修年耗电。

###### 实际液态处理自来水供给 (`facility_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Volume / m3
- 数量规则：按 cp_supplies 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需水源用途原生供水区间独立实测去向，购水椅水分不是废水体积。

###### 实际独立记录的合成洗涤剂投入 (`operating_supplies_synthetic_detergent`)

仅适用于产品配方、供应状态及用途记录确认的实际合成表面活性洗涤剂。记录扣除包装皮重的材料净量，区分浓缩液与稀释水，整体配方与组分不得相加重复计入。肥皂、消毒剂、抹布、滤材等仍按各自实际身份记录，不预设清洁配方、剂量或发生。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_supplies 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需真实使用事件净库存组成及耗载体吸液捕集碎屑证据，不来源护理示例或假定消耗软包。

###### 实际独立确认的供应柴油 (`fuel_supply_diesel_supply`)

仅适用于本运行燃料要求内实际独立确认的柴油。通用身份为Mass/kg；记录实际配方、供应方、供给门及原生库存范围。原生数量为升时，最终换算kg须有实际相容密度、温度状态、质量体积比单位及来源，不使用目录默认密度或热值。供应库存与燃烧量是不同记录；其他燃料保留余项，购买燃料或未解释库存差不证明燃烧及排放。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Volume / L
- 数量规则：按 cp_supplies 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需原生期初净收期末退回去向燃料身份兼容密度温度换算来源，供油不证明燃烧。

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

###### 已完成成品钢框软包访客椅自营批发货批 (`accepted_service`)

一个唯一真实最终企业验收商业货批，商品为实际全新四脚主要钢框访客会议椅，座背均软包，带脚垫及完整实际原厂成品发运状态原包，椅垫脚垫数kg坐用时间不是服务参考。

- 选定流：已完成成品钢框软包访客椅自营批发货批
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_consignment`

范围证据要求：需商人购买所有权转售企业买方最终交接来源撤销、真实品项批椅部件物料表涂饰脚垫原生量装配包装状态条件时间，不通用品牌钢级泡沫重量堆高寿命保修性能保证。

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

##### 废物流

###### 废弃完整成品钢框架软包客椅 (`discarded_chairs_atomic_case`)

仅在实际独立记录确认“废弃完整成品钢框架软包客椅”时适用。本卡只覆盖该命名实物状态及自身实际净量、保留组成和接收门。其他部件、碎片、游离液、独立包装及清理载体仍属于`discarded_chairs`中的身份核实事项；不得移动边界、预设事件、将库存差当废弃，或把仍保留在整体流内的组分另算出口。实际混收流须匹配自身准确身份。原有原生单位数量协议只用于本独占具体情形，其他实际去向分别协调。

- 选定流：废弃完整成品钢框架软包客椅
- 流属性/单位：Mass / kg
- 数量规则：按 cp_chairs 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_chairs`

范围证据要求：需真实库存事件去向接收原生重数对应所含组分状态处理覆盖来源交接归属，不将部件损失变整椅替换默认回收。

###### 废弃独立分离的软垫接待椅坐垫，保留面料 (`discarded_chairs_chair_pad`)

仅覆盖本过程有独立实际证据的“废弃独立分离的软垫接待椅坐垫，保留面料”。记录自身物态、净量 kg、事件来源及交接门。其他状态或接收方需在`discarded_chairs`下独立确定身份，本卡不能替代；记录缺失不证明发生或为零。 仅在实际独立收集并转移至废物接收方时启用，不得用于仍保留在整件、包装或收集混合物中的组分。保留组成只作不可相加记录。不预设开包、切割、拆解、主动干燥、回收率或处理路线，处理及运输责任只归属一次。

- 选定流：废弃独立分离的软垫接待椅坐垫，保留面料
- 流属性/单位：Mass / kg
- 数量规则：`discarded_chairs_chair_pad`实际独占归属的 kg / 验收 N，仅归一化一次；已按参考流给出的数量不得再次除以 N。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_chairs`

范围证据要求：需事件关联的原生 kg、状态组成、接收或供应门、归属记录及整件组分或对应投入的排他关联，使用协议`cp_chairs`。不提供默认数值或换算因子；其他原生单位须有换算证据后使用。

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

###### 收集并送处理的场所清洁水性废水 (`contained_liquid_wastes_aqueous_cleaning`)

仅覆盖本过程有独立实际证据的“收集并送处理的场所清洁水性废水”。记录自身物态、净量 m3、事件来源及交接门。其他状态或接收方需在`contained_liquid_wastes`下独立确定身份，本卡不能替代；记录缺失不证明发生或为零。 仅在实际独立收集并转移至废物接收方时启用，不得用于仍保留在整件、包装或收集混合物中的组分。保留组成只作不可相加记录。不预设开包、切割、拆解、主动干燥、回收率或处理路线，处理及运输责任只归属一次。 本卡为场所清洁水性废水，保留实际溶解或悬浮负荷及实测接收体积。排除独立收集的未稀释商品、非水液体、冷凝水或生活污水；若转移前实际混合，另定该真实混合物身份，不得叠加组分体积或称其为纯清洁水。不从供水量推算本数量。

- 选定流：收集并送处理的场所清洁水性废水
- 流属性/单位：Volume / m3
- 数量规则：`contained_liquid_wastes_aqueous_cleaning`实际独占归属的 m3 / 验收 N，仅归一化一次；已按参考流给出的数量不得再次除以 N。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据要求：需事件关联的原生 m3、状态组成、接收或供应门、归属记录及整件组分或对应投入的排他关联，使用协议`cp_fates`。不提供默认数值或换算因子；其他原生单位须有换算证据后使用。

##### 基本流

## 7. 分配与联产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| actual_all_users | 服务资源 | 用直接真实追溯或量×兼容目标驱动/正完整全部使用方驱动，原生单位基准方法状态时间来源全部客户期间范围。保留闲置换批取消失败隔离未完成资源，实际所有权转售企业交接撤销后唯一最终N，仅N>0归属总量除一次，N0保留负担期间群证据，不默认价格椅数坐用时间驱动。 |  |
| complete_source_assignment | 商品接口 | 各完整实际来源批状态选直接实测追溯归属交接需求及量单位基准方法状态时间来源直接证据互斥终端链接，或实际来源量×目标驱动/来源全终端驱动。正完整分母含兼容竞争最终验收可用其他退回期末结转有据损失，各量单位基准方法状态时间来源链接归属，不仅验收不叠直接驱动。真实来源归属基线新增原生状态量换算互斥损失归属匹配完整制造装配放行包装椅交接。同基线阶段损失覆盖后所需新增在外一次，未知损失不零。 |  |
| supply_stock | 服务用品 | S=归属期初+净外收-含留存回收期末，二选一：(1)毛S/N记输入，实际匹配未用外退量/N单列输出；(2)净耗用(S-退回)/N记输入且省略对应退回输出。不得把退回量加到输入或重复抵扣。内部循环留存回收为期末，废弃消耗保留用品负担，不以继承椅部件回收扣不相关输入负量扣减或自动抵扣。 |  |
| full_asset_life | 资产服务商 | 真实已用驱动/完整寿命全部使用方驱动及兼容原生元数据分配完整制造维护真实更换寿命终结至全部使用方期间。需观察历史有据剩余退役不确定性敏感性更新，资产当量或完整寿命服务商二选一N一次，保修不为真实寿命。 |  |
| exclusive_fates | 库存接收 | 保留组分涂饰脚垫整椅、单收部件包装、混合清理载体吸液碎屑、游离容装液直接物种为不可相加互斥视图。核服务商覆盖后接收运输处理一归属，隔离退回待决不自动废物释放，不默认回收抵扣。 |  |
| commodity_link_scope | nonexchange commodity interface | 原交接库存及已完成外部集成保留实际记录的原始数量。声明source_assignment_scope_id、实际target_consignment_ids/target_cohort_id及source_assignment_quantity_basis，分为single_consignment_case、target_cohort_total或already_per_reference。仅当正same_target_scope_N准确覆盖已分配目标范围时，目标群原始总量才按source_link_per_service_quantity=source_link_assigned_raw_quantity/same_target_scope_N形成与1个accepted_service组合且仅用一次的接口，须原生单位状态来源及接收撤销证据。单货批N=1与已每参考量不再除一次。外部实际库存或阶段集成记录不得按服务N缩量，也不得以整个来源群N去除较窄目标已分配量；保留原始量与明确仅一次关联。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_consignment | guest_chair_wholesale | 最终验收服务 | 真实商人最终验收 | consignment_id; merchant_id; purchase_evidence; ownership_evidence; resale_evidence; business_buyer_id; acceptance_gate; acceptance_time; acceptance_source; reversal_ids; reversal_status_source; unique_FINAL_accepted_ids; N; N_period_cohort; model_SKU_lot_ids; chair_part_pack_genealogy; actual_BOM; completeness_condition_evidence; buyer_criteria_source; start_time; start_time_source; end_time; end_time_source; time_zone; time_unit; duration; duration_unit; duration_method; duration_source; site_id; campaign_id; reporting_period; cancelled_failed_rejected_unfinished_ids; no_acceptance_resource_owner; attribution_owner | 追真实商人购买所有权转售明确企业买方最终交接时间来源已核撤销，N为期间群唯一真实最终商业验收，不椅垫脚垫箱数坐用，收货发票本身不足。保留取消失败隔离未完成资源和时区时长原生方法单位来源，N0不除。 | 真实数量Item(s)及原生时间戳时长 | 每真实事件计量区间，原始记录可追溯 | 实际接收至最终验收、库存报告期间完整资产阶段 | 实际商人设施全部使用方及声明服务商接收方 | per reference flow | 原始量单位基准方法状态取样时间来源、校准代表性覆盖不确定性 |
| cp_chairs | guest_chair_wholesale | 非交换椅部件库存真实废弃 | 真实椅部件状态审计 | model_SKU; chair_ids; source_lot_id; manufacturer_configuration_source; evidence_date; fourleg_primarily_steel_frame_evidence; seat_upholstery_evidence; back_upholstery_evidence; glide_identity; actual_BOM; steel_grade; steel_grade_source; frame_identity; frame_finish_identity; finish_state_source; shell_identity; foam_identity; upholstery_identity; fastener_identity; arm_inclusions; separately_sold_accessories; actual_component_inclusions; shipping_assembly_state; assembly_state_source; original_pack_inclusions; pack_ids; chair_count; chair_count_unit; chair_count_basis; chair_count_method; chair_count_state; chair_count_sample_time; chair_count_source; part_count; part_count_unit; part_count_basis; part_count_method; part_count_state; part_count_sample_time; part_count_source; chair_part_genealogy; genealogy_source; component_measurement_population; condition; condition_method; condition_time; condition_source; receiver_disposition_decision; receiver_decision_source; buyer_criteria_source; m_as_received; m_as_received_unit; m_as_received_basis; m_as_received_method; m_as_received_state; m_as_received_sample_time; m_as_received_source; m_water; m_water_unit; m_water_basis; m_water_method; m_water_state; m_water_sample_time; m_water_source; water_fraction; water_fraction_unit; water_fraction_basis; water_fraction_method; water_fraction_state; water_fraction_sample_time; water_fraction_source; dry_water_ratio; dry_water_ratio_unit; dry_water_ratio_basis; dry_water_ratio_method; dry_water_ratio_state; dry_water_ratio_sample_time; dry_water_ratio_source; water_definition; nonwater_definition; percent_conversion_factor; percent_conversion_unit; percent_conversion_basis; percent_conversion_method; percent_conversion_state; percent_conversion_time; percent_conversion_source; LOD_value; LOD_value_unit; LOD_value_basis; LOD_value_method; LOD_value_state; LOD_value_sample_time; LOD_value_source; LOD_other_volatiles_evidence; finish_quantity; finish_quantity_unit; finish_quantity_basis; finish_quantity_method; finish_quantity_state; finish_quantity_sample_time; finish_quantity_source; composition_value; composition_value_unit; composition_value_basis; composition_value_method; composition_value_state; composition_value_sample_time; composition_value_source; composition_mass_or_volume; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_temperature; density_temperature_unit; density_temperature_source; density_source; native_conversion_factor; native_conversion_unit; native_conversion_basis; native_conversion_method; native_conversion_state; native_conversion_time; native_conversion_source; actual_native_quantity; native_unit; quantity_basis; quantity_method; quantity_state; quantity_sample_time; quantity_source; gross_mass; gross_unit; gross_basis; gross_method; gross_state; gross_sample_time; gross_source; packaging_tare; packaging_unit; packaging_basis; packaging_method; packaging_state; packaging_sample_time; packaging_source; net_finished_mass; net_mass_unit; net_mass_basis; net_mass_method; net_mass_state; net_mass_sample_time; net_mass_source; component_identity; component_quantity; component_unit; component_basis; component_method; component_state; component_sample_time; component_source; sample_representativeness; temperature; temperature_unit; temperature_source; opening; supplier_external_receipts; buyer_returns; closing; business_buyer_dispatch; supplier_returns; useful_other_exits; actual_discard; net_sample_removal; unknown_residual; stock_unit; stock_basis; stock_method; stock_state; stock_sample_time; stock_source; disposition_ids; receiver; treatment_coverage; actual_source_gate_quantity; source_gate_unit; source_gate_basis; source_gate_method; source_gate_state; source_gate_sample_time; source_gate_quantity_source; source_complete_stage_evidence; assignment_view; assigned_gate_demand; assigned_gate_demand_unit; assigned_gate_demand_basis; assigned_gate_demand_method; assigned_gate_demand_state; assigned_gate_demand_sample_time; assigned_gate_demand_source; direct_assignment_evidence; exclusive_terminal_links; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; source_all_terminal_driver; source_all_terminal_driver_unit; source_all_terminal_driver_basis; source_all_terminal_driver_method; source_all_terminal_driver_state; source_all_terminal_driver_sample_time; source_all_terminal_driver_source; competing_terminal_driver_records; terminal_record_quantity; terminal_record_unit; terminal_record_basis; terminal_record_method; terminal_record_state; terminal_record_sample_time; terminal_record_source; terminal_record_link; terminal_record_owner; original_gate_conversion_method; original_gate_conversion_factor; original_gate_conversion_unit; original_gate_conversion_basis; original_gate_conversion_state; original_gate_conversion_time; original_gate_conversion_source; baseline_demand; baseline_demand_unit; baseline_demand_basis; baseline_demand_method; baseline_demand_state; baseline_demand_sample_time; baseline_demand_source; baseline_stage_loss_coverage; additional_gate_demand; additional_gate_demand_unit; additional_gate_demand_basis; additional_gate_demand_method; additional_gate_demand_state; additional_gate_demand_sample_time; additional_gate_demand_source; exclusive_loss_assignment; commodity_adjustment_owner; source_assignment_scope_id; source_assignment_quantity_basis; target_consignment_ids; target_cohort_id; source_quantity_already_per_reference; external_raw_integration_quantity_preserved; once_only_service_link_evidence; source_link_assigned_raw_quantity; source_link_assigned_raw_quantity_unit; source_link_assigned_raw_quantity_basis; source_link_assigned_raw_quantity_method; source_link_assigned_raw_quantity_state; source_link_assigned_raw_quantity_source; source_link_assigned_raw_quantity_sample_time; same_target_scope_N; same_target_scope_N_unit; same_target_scope_N_basis; same_target_scope_N_method; same_target_scope_N_state; same_target_scope_N_source; same_target_scope_N_sample_time; source_link_per_service_quantity; source_link_per_service_quantity_unit; source_link_per_service_quantity_basis; source_link_per_service_quantity_method; source_link_per_service_quantity_state; source_link_per_service_quantity_source; source_link_per_service_quantity_sample_time; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | 记录真实品项批椅标识及完整框泡沫壳织物涂饰紧固脚垫所含扶手附件原包物料表，核四脚主要钢框座背软包脚垫且无排除机构。各独立椅部件组分涂饰水分量有原生单位基准方法状态取样时间来源代表总体，不标称管几何厚度整椅比例。发运装配状态原所含对应约束椅部件当量，不自动部件转整椅损失。仅水湿干定义百分比因子来源与干燥失重其他挥发物分开，密度换算需真实材料状态温度单位来源。用既有兼容记录或实际代表量测，不新增常规装拆承载试验。共享库存元数据覆盖兼容期初供方外收买方退回期末企业买方发运供方退回可用其他真实废弃净样品移除，收货排买方退回内部移动，发运排另记出口，内部移动消去。来源归属基线新增原生量及状态单位基准方法时间来源，直接真实追溯或正完整全终端竞争记录含期末退回可用其他有据损失各量单位基准方法状态时间来源链接归属，原状态换算互斥损失归属同基线覆盖，完整供方交接在外一次。未知差额缺组分不确立整椅损失释放或零。 只归属独立确认的实物情形，其他实际去向按来源分别保留；每个原生记录只属于一个交换，任何总量仅作不可相加审计。 | 真实原生椅部件数质量面积体积组成水分涂饰换算单位 | 每真实事件计量区间，原始记录可追溯 | 实际接收至最终验收、库存报告期间完整资产阶段 | 实际商人设施全部使用方及声明服务商接收方 | per reference flow | 原始量单位基准方法状态取样时间来源、校准代表性覆盖不确定性 |
| cp_energy | guest_chair_wholesale | 电力真实燃烧 | 真实计量燃烧区间 | meter_id; energy_quantity; energy_unit; meter_start; meter_end; interval; source; operation_purpose; burn_quantity; burn_unit; burn_basis; burn_source; fuel_identity; conversion_factor; conversion_unit; conversion_basis; conversion_source; event_ids; period_ids; target_driver; target_driver_unit; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_source; attribution_share; provider_coverage; target_driver_basis; all_consumer_driver_basis; attribution_owner; record_method; record_state; record_sample_time; record_source; target_driver_method; target_driver_state; target_driver_sample_time; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 读实际照明装卸设施辅助计量区间及独立有据燃烧，兼容原生量基准方法状态时间来源换算、完整物理全部使用方期间驱动保留闲置取消失败未完成事件，不由椅物料表推制造试验坐用能源。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | 真实kWh及原生燃烧量 | 每真实事件计量区间，原始记录可追溯 | 实际接收至最终验收、库存报告期间完整资产阶段 | 实际商人设施全部使用方及声明服务商接收方 | per reference flow | 原始量单位基准方法状态取样时间来源、校准代表性覆盖不确定性 |
| cp_supplies | guest_chair_wholesale | 服务用品匹配外退 | 真实用品退回 | supply_SKU; purpose; composition; composition_basis; composition_source; provenance_owner; period; opening; external_receipts_net; closing_including_retained_recovery; native_unit; quantity_basis; quantity_source; usable_external_return; return_unit; return_recipient; matched_input_id; matched_state_scope; internal_loop; retained_recovery; waste_quantity; waste_unit; burn_quantity; burn_unit; actual_fate_source; accounting_view; conversion_factor; conversion_unit; conversion_basis; conversion_source; density; density_unit; density_temperature; temperature_unit; density_source; target_driver; target_driver_unit; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_source; attribution_share; provider_coverage; target_driver_basis; all_consumer_driver_basis; attribution_owner; record_method; record_state; record_sample_time; record_source; target_driver_method; target_driver_state; target_driver_sample_time; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 净外收排用品容器皮重，共享原生单位基准方法状态时间来源约束各兼容期初收货期末回收退回去向操作数，不同独立组分自带单位。仅实际品项用途组成使用，清理有条件。S=期初+净收-含留存回收期末，毛输入与另记的匹配未用退回输出，或净消耗并省对应出口。保留来源接收实际密度温度换算全部使用方驱动，椅材料继承涂饰为商品，不作不相关负量扣减抵扣。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 柴油升转kg须有实际相容密度、温度状态、质量体积比单位及来源，不预设换算。 | 真实原生用品物理单位 | 每真实事件计量区间，原始记录可追溯 | 实际接收至最终验收、库存报告期间完整资产阶段 | 实际商人设施全部使用方及声明服务商接收方 | per reference flow | 原始量单位基准方法状态取样时间来源、校准代表性覆盖不确定性 |
| cp_assets | guest_chair_wholesale | 共享资产 | 全部使用方完整资产寿命 | asset_id; manufacture_scope; maintenance_scope; replacement_events; end_of_life_scope; provider_scope; consumers; periods; used_driver; used_driver_unit; used_driver_basis; used_driver_source; observed_life_driver; observed_driver_unit; observed_history_source; remaining_life_driver; remaining_driver_unit; remaining_evidence_source; termination_evidence; lifetime_all_consumer_driver; lifetime_driver_unit; lifetime_driver_basis; lifetime_driver_source; conversion_factor; conversion_unit; conversion_source; uncertainty; sensitivity; update_trigger; attribution_owner; already_per_reference; observed_driver_basis; remaining_driver_basis; conversion_basis; target_driver; target_driver_unit; target_driver_basis; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_source; attribution_share; used_driver_method; used_driver_state; used_driver_sample_time; observed_driver_method; observed_driver_state; observed_driver_sample_time; remaining_driver_method; remaining_driver_state; remaining_driver_sample_time; lifetime_driver_method; lifetime_driver_state; lifetime_driver_sample_time | 识别真实设施货架装卸计量信息周转支撑及每消费节点客户期间，完整制造维护真实更换终结，已用观察剩余寿命驱动各原生单位基准方法状态时间来源兼容换算。观察有据剩余退役不确定性敏感性更新、资产当量或完整服务商二选一N一次。交易椅来源保修堆高不确立商人资产寿命。 | 真实已用观察剩余寿命驱动单位；有支持资产当量Item(s) | 每真实事件计量区间，原始记录可追溯 | 实际接收至最终验收、库存报告期间完整资产阶段 | 实际商人设施全部使用方及声明服务商接收方 | per reference flow | 原始量单位基准方法状态取样时间来源、校准代表性覆盖不确定性 |
| cp_providers | guest_chair_wholesale | 辅助成果 | 真实物理成果覆盖 | provider_id; event_id; native_result; result_unit; result_basis; result_source; service_scope; measurement_method; sample_ids; sample_representativeness; sample_removed; sample_return; sample_fate; material_coverage; energy_coverage; asset_coverage; freight_coverage; receiver_treatment_coverage; excluded_testing_scope; period; conversion_factor; conversion_unit; conversion_source; target_driver; target_driver_unit; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_source; attribution_owner; target_driver_basis; all_consumer_driver_basis; attribution_share; record_method; record_state; record_sample_time; record_source; target_driver_method; target_driver_state; target_driver_sample_time; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time | 核已执行物理成果原生单位基准方法状态时间来源材料能源资产货运接收范围，厂家装配试验来源为继承证据，不新增商人工作。实际代表量测样品保留总体移除退回去向归属，不隐藏含外包承载试验装配软包翻新坐用，变路线需复核。 | 真实服务商原生物理成果单位 | 每真实事件计量区间，原始记录可追溯 | 实际接收至最终验收、库存报告期间完整资产阶段 | 实际商人设施全部使用方及声明服务商接收方 | per reference flow | 原始量单位基准方法状态取样时间来源、校准代表性覆盖不确定性 |
| cp_freight | guest_chair_wholesale | 货运 | 唯一载荷路段该记录份额 | load_id; leg_id; cargo_ids; load_quantity; load_unit; load_basis_each_or_total; load_source; repeated_load_count; repetition_source; actual_packed_payload; payload_unit; payload_state; payload_source; vehicle_gross; vehicle_gross_unit; gross_source; vehicle_noncargo_tare; noncargo_tare_unit; tare_source; original_cargo_pack; added_cargo_pack; retained_moisture_finish; load_conversion_factor; load_conversion_unit; load_conversion_basis; load_conversion_source; distance; distance_unit; distance_source; distance_conversion_factor; distance_conversion_unit; distance_conversion_basis; distance_conversion_source; empty_return_coverage; delivered_provider_coverage; target_driver; target_driver_unit; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_source; that_record_share; unique_scope_owner; already_per_reference; gross_conversion_factor; gross_conversion_unit; gross_conversion_basis; gross_conversion_source; tare_conversion_factor; tare_conversion_unit; tare_conversion_basis; tare_conversion_source; target_driver_basis; all_consumer_driver_basis; attribution_owner; record_method; record_state; record_sample_time; record_source; target_driver_method; target_driver_state; target_driver_sample_time; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; payload_basis; payload_method; payload_sample_time; gross_method; gross_state; gross_sample_time; tare_basis; tare_method; tare_state; tare_sample_time; distance_basis; distance_method; distance_state; distance_sample_time; that_record_share_basis; that_record_share_source; gross_basis | 用真实包装货物或同状态实测车辆毛重仅减车辆非货皮重，保留全部椅组分水分涂饰原新增货包支撑，不重复整物部件质量。gross_basis/tare_basis/source为原生车辆货物非货范围，与每载总量分开。原生货载毛皮距因子各单位基准方法状态时间来源，每载乘真实次数一次，总量不变。sum(唯一载荷路段：包装kg×真实km×that_record_share)，该记录完整兼容全部使用方份额置求和内，再正最终N除一次，已归一不再除。核空返退回服务商覆盖，N0货运保留。 | 真实原生包装质量距离兼容换kg*km | 每真实事件计量区间，原始记录可追溯 | 实际接收至最终验收、库存报告期间完整资产阶段 | 实际商人设施全部使用方及声明服务商接收方 | per reference flow | 原始量单位基准方法状态取样时间来源、校准代表性覆盖不确定性 |
| cp_fates | guest_chair_wholesale | 水源废物液体排口 | 真实水源接收混合游离液去向 | event_id; source_location; receiving_location; receiving_medium; flow_identity; native_quantity; native_unit; quantity_basis; quantity_source; interval; composition; composition_basis; composition_source; fate_basis; fate_source; mixed_receiver_mass; mixed_mass_unit; mixed_mass_basis; mixed_mass_source; carrier_mass; carrier_unit; carrier_basis; carrier_source; absorbed_liquid_mass; absorbed_liquid_unit; absorbed_liquid_basis; absorbed_liquid_source; collected_fragment_mass; collected_fragment_unit; collected_fragment_basis; collected_fragment_source; free_liquid_volume; liquid_volume_unit; liquid_volume_source; density; density_unit; density_temperature; temperature_unit; density_source; conversion_factor; conversion_unit; conversion_basis; conversion_source; receiver; receiver_transport_scope; receiver_treatment_scope; provider_coverage; nonadditive_view; attribution_owner; target_driver; target_driver_unit; target_driver_basis; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_source; attribution_share; record_method; record_state; record_sample_time; record_source; carrier_method; carrier_state; carrier_sample_time; absorbed_liquid_method; absorbed_liquid_state; absorbed_liquid_sample_time; collected_fragment_method; collected_fragment_state; collected_fragment_sample_time; target_driver_method; target_driver_state; target_driver_sample_time; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time | 量实际水源水接收混合清理固体各独立容装游离液或直接水排口，各载体吸液捕集椅织物泡沫涂层金属碎屑自带原生单位基准方法状态时间来源，整混合部件组分不可相加。各游离液真实原生身份体积组成接收运输处理，密度温度换算仅兼容证据。用品椅水分组分存在不量化耗废水去向化学释放。 | 真实原生混合质量游离液体积取水排口单位 | 每真实事件计量区间，原始记录可追溯 | 实际接收至最终验收、库存报告期间完整资产阶段 | 实际商人设施全部使用方及声明服务商接收方 | per reference flow | 原始量单位基准方法状态取样时间来源、校准代表性覆盖不确定性 |
| cp_releases | guest_chair_wholesale | 直接物种 | 真实物种介质因子覆盖 | event_id; species_identity; particle_size; receiving_medium; measurement; measurement_unit; measurement_basis; measurement_source; activity; activity_unit; activity_basis; activity_source; factor; factor_unit; factor_basis; factor_source; factor_coverage; burn_fraction; burn_fraction_source; composition; composition_unit; composition_basis; composition_source; fate_fraction; fate_basis; fate_source; conversion_factor; conversion_unit; conversion_basis; conversion_source; temperature; temperature_unit; temperature_source; pressure; pressure_unit; pressure_source; time_interval; period; provider_coverage; nonadditive_owner; target_driver; target_driver_unit; target_driver_basis; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_source; attribution_share; attribution_owner; record_method; record_state; record_sample_time; record_source; target_driver_method; target_driver_state; target_driver_sample_time; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; measurement_method; measurement_state; measurement_sample_time; activity_method; activity_state; activity_sample_time; factor_method; factor_state; factor_reference_time; composition_method; composition_state; composition_sample_time; fate_method; fate_state; fate_time; conversion_method; conversion_state; conversion_time | 通过实测或兼容真实事件活动因子原生单位基准方法状态时间来源识别真实化学物种粒径接收介质，钢铬泡沫聚合物粉末涂层存在缺重不为物种排放零或六价铬。完整物种系数已含组成去向比例不得再乘，仅必要兼容换算比例一次，若用气体换算需真实温压单位来源。 | 真实原生物种量兼容换kg | 每真实事件计量区间，原始记录可追溯 | 实际接收至最终验收、库存报告期间完整资产阶段 | 实际商人设施全部使用方及声明服务商接收方 | per reference flow | 原始量单位基准方法状态取样时间来源、校准代表性覆盖不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| actual_resources | 全部服务行 | N=真实商人所有权转售且核撤销后唯一最终企业验收，直接追溯或量×兼容目标驱动/正完整全部使用方驱动保留全部客户期间闲置取消失败隔离未完成负担原生元数据。N>0才归属总量/N一次，N0保留期间群证据。 | cp_consignment; cp_energy; cp_supplies; cp_assets; cp_providers; cp_freight; cp_fates; cp_releases | 实际每参考物理服务清单 |  |
| chair_stock | 商品审计 | 兼容原生库存：期初+供方外收+买方退回-期末-企业买方发运-供方退回-可用其他出口-真实废弃-净样品移除=未知差额。收货排买方退回内部移动，买方发运排另列出口，内部移动消去。真实椅部件包装配状态对应约束当量，缺脚垫软垫非整椅损失，未知质量非释放零。 | cp_chairs | 真实库存互斥终端状态 |  |
| component_water | 组分审计 | 仅实际同样品仅水w_wet=m_water/m_as_received：m_water=m_as_received*w_wet；m_nonwater=m_as_received*(1-w_wet)。若兼容r_dry=m_water/m_nonwater，则w_wet=r_dry/(1+r_dry)，百分比先按原生因子转比。独立组分涂饰真实原生单位基准方法状态取样时间来源，密度换算仅匹配真实材料状态温度。其他挥发物干燥失重非水排放，不通用椅重钢比例泡沫厚度。 | cp_chairs | 不可相加原生椅组分状态审计 |  |
| original_source | 商品接口 | 选有来源直接真实实测追溯归属交接需求及互斥终端证据，或实际来源量×目标驱动/全终端驱动。全终端驱动>0且等完整兼容竞争最终验收可用其他退回期末结转有据损失记录，各量单位基准方法状态时间来源链接归属，不仅验收不叠直接驱动。真实来源归属基线新增原生量状态元数据原换算互斥损失归属匹配完整制造装配放行原包椅交接。同已覆盖基线阶段损失需求后所需新增完整关联在外一次。 | cp_chairs; cp_consignment | 独立完整原交接需求损失关联 |  |
| record_freight | freight | 原生换算后真实包装货载或同状态车辆毛重仅减车辆非货皮重，保留内容全部货包不重复整物部件，每载真实次数一次总量不变。归属kg*km=sum(唯一载荷路段：包装货载kg×真实km×that_record_share)，该记录完整兼容全部使用方份额置求和内，再正最终N除一次，已归一不再除。N0货运保留。 | cp_freight; cp_consignment | 真实唯一每参考货运 |  |
| specific_species | direct_species | 真实物种粒径介质量=实测或兼容真实活动×因子，原生单位基准方法状态时间来源完整因子覆盖。完整物种系数已覆盖组成去向比例不得再乘，仅必要兼容比例气体换算一次并真实温压单位来源，商品材料涂饰存在划伤未知库存不为释放零或六价铬。 | cp_releases; cp_energy; cp_chairs | 真实有据每参考物种 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| actual_identity | 全部角色 | 最终交换前核实际四脚主要钢框座背软包脚垫椅品项物料表涂饰所含发运装配包装及各材料服务商水源接收物种原生支持。缓存18Oct2026数量证明为计量支持，不是新远程鲜度或流身份。 | 真实当前配置原生记录声明核验范围 |
| native_complete_scope | 全部操作数 | 各组分水分涂饰来源归属基线新增终端、资产已用观察剩余寿命及货载毛皮距份额操作数需兼容原生单位基准方法状态时间来源；有据换算密度温度单位适用时齐。真实未知阻计算不变零。 | cp_chairs; cp_assets; cp_freight; cp_fates; cp_releases |
| uncertainty | 全部接口 | 披露证据年代品项适用性和真实最终撤销条件对应来源终端基线损失去向资产寿命服务商接收不确定性敏感性更新，N0资源保留。方法不证明认证承载健康最终链就绪。 | 真实覆盖来源寿命证据各行范围证据需求 |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | guest_chair_wholesale | 电表记录对应哪个供电点、交直流状态、电压和供应方数据集？核对已列交流电卡与其他有证据的供电，不得将交流电 UUID 用于其他能源。 计量实际照明装卸设施业务辅助，不推钢管成形焊接泡沫成形软包涂饰商人装配承载试验或坐用能源。 范围证据要求：需真实计量区间完整全部使用方事件归属含闲置失败未完成及服务商覆盖，不每椅每保修年耗电。 计量证据：协议`cp_energy`；原记录口径 Energy / kWh。原数量约束“按 cp_energy 实际互斥归属物理量 / N”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`electricity_ac`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_energy`; 实际来源关联原生记录 |
| facility_water | guest_chair_wholesale | 供应记录是否证明为处理自来水，还是其他明确水质或水源？核实供水状态及交接门，不得用自来水卡替代其他水。 实际卫生设施水与泡沫织物水分继承涂饰分开，不假定常规洗椅湿洗软包或涂漆处理。 范围证据要求：需水源用途原生供水区间独立实测去向，购水椅水分不是废水体积。 计量证据：协议`cp_supplies`；原记录口径 Volume / m3。原数量约束“按 cp_supplies 实际互斥归属物理量 / N”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`facility_water_liquid_tap`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_supplies`; 实际来源关联原生记录 |
| new_outer_protection | guest_chair_wholesale | 取得包装物料单或规格、材料或复合层身份及新增与继承包装的责任。按该记录逐项确定尚缺的套袋、封口、标签、捆扎带或支撑件身份；一体复合包装不得拆成可相加的材料交换。 仅实际新增保护标签为服务用品，原袋箱泡沫支撑所供椅部件属完整供方交接，周转运输用具用全寿命分配。 范围证据要求：需新增继承包装层级品项净重或有据原生数面积换算库存，不默认每批全新整椅箱。 计量证据：协议`cp_supplies`；原记录口径 Mass / kg。原数量约束“按 cp_supplies 实际互斥归属物理量 / N”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`new_outer_protection_paperboard_carton`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_supplies`; 实际来源关联原生记录 |
| operating_supplies | guest_chair_wholesale | 取得下述清洁或维护职责实际采购品号、配方或安全数据表、供应浓度、物态、用途及库存领用记录。逐项核实洗涤剂以外的实际材料；不得由本 PCR 预设药剂、滤材或剂量。 按品项用途展开真实润滑清洁擦布吸附滤材办公用品，交易软包泡沫钢涂层脚垫为商品组分，不是新增服务输入，不套清洗翻新配方。 范围证据要求：需真实使用事件净库存组成及耗载体吸液捕集碎屑证据，不来源护理示例或假定消耗软包。 计量证据：协议`cp_supplies`；原记录口径 Mass / kg。原数量约束“按 cp_supplies 实际互斥归属物理量 / N”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`operating_supplies_synthetic_detergent`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_supplies`; 实际来源关联原生记录 |
| fuel_supply | guest_chair_wholesale | 库存记录对应哪种燃料牌号、配方及供给门？核实已列柴油以外的实际燃料及原生单位；体积转质量前取得实际密度。 用真实自有燃料库存，与实烧退回未燃废物分开，核雇用装卸货运覆盖，商品涂饰不是燃料。 范围证据要求：需原生期初净收期末退回去向燃料身份兼容密度温度换算来源，供油不证明燃烧。 计量证据：协议`cp_supplies`；原记录口径 Volume / L。原数量约束“按 cp_supplies 实际互斥归属物理量 / N”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`fuel_supply_diesel_supply`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_supplies`; 实际来源关联原生记录 |
| provider_services | guest_chair_wholesale | 取得本记录中明列各职责的供应商合同或完成结果记录、原生计量物理单位及包含资源。确定各项服务结果身份；检验、清洁、装卸为不同服务，价格或小时不得改称件数。 按真实物理成果记已作仓储装卸文件目视型号完整条件业务辅助，供方装配试验记录不产生商人装配软包承载试验或坐用。 范围证据要求：需真实成果单位方法来源材料能源资产货运接收覆盖，新增外包装配试验需路线复核样品去向归属。 计量证据：协议`cp_providers`；原记录口径 Count / Item(s)。原数量约束“按 cp_providers 实际互斥归属物理量 / N”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_providers`; 实际来源关联原生记录 |
| shared_assets | guest_chair_wholesale | 对本记录中明列的每种资产取得资产编号、配置及匹配的完整生命周期数据集。待补的是各资产或服务身份及全寿命全部使用者分母；仓库、叉车、托盘不能共用一条计数交换，也不能套用默认寿命。 跨全部使用方期间纳真实仓库货架装卸计量信息周转车托盘制造维护更换终结，交易椅客户坐用不是仓库资本，来源运输车不自动供应。 范围证据要求：需实际已用观察剩余寿命驱动各原生单位基准方法状态时间来源、有据剩余退役不确定性敏感性更新及资产或完整服务商二选一，保修堆高声明不确立寿命利用率。 计量证据：协议`cp_assets`；原记录口径 Count / Item(s)。原数量约束“按 cp_assets 实际互斥归属物理量 / N”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_assets`; 实际来源关联原生记录 |
| freight | guest_chair_wholesale | 对实际入库、出库、退运及废物运输段取得运输方式或车辆、温控服务、起终点、实际载荷和距离及供应方覆盖。方式或配置未明确前不能选择运输流；不同运输方式不得合成一条 kg*km 流。 货载保留真实整椅水分涂饰所含部件原新增货包支撑，同状态实测车辆毛重仅减车辆非货皮重，不扣货箱椅部件。 范围证据要求：需唯一载荷路段真实货载毛非货皮距、每载总量次数及该记录份额置求和内原生因子来源，标称椅重堆量或发货数不足。 计量证据：协议`cp_freight`；原记录口径 Mass*distance / kg*km。原数量约束“按 cp_freight 实际互斥归属物理量 / N”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_freight`; 实际来源关联原生记录 |
| environmental_water | guest_chair_wholesale | 按取水许可或计量记录确定实际取水口、地表水体或含水层、位置及水源实测量。地表水和地下水需不同源身份；购买水用量不能证明直接取水。 仅实际商人环境取水，与购水继承组分水分分开。 范围证据要求：需真实水源地点区间原生体积方法取水边界，软包水分不代理取水。 计量证据：协议`cp_fates`；原记录口径 Volume / m3。原数量约束“按 cp_fates 实际互斥归属物理量 / N”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_fates`; 实际来源关联原生记录 |
| usable_supply_returns | guest_chair_wholesale | 将对外退料凭据匹配到唯一投入品号、状态、原生单位及接收方。采用净消耗投入时省略对应退料交换；商品退货及期末库存另作审计记录。 仅真实同范围未用品项状态用品外退，净消耗输入省匹配退回交换，内部循环留存回收为期末，供方客户椅部件退回仍非交换库存。 范围证据要求：需真实接收原生转移匹配输入来源，不以继承椅涂饰包装回收扣不相关当期用品或造负输入自动抵扣。 计量证据：协议`cp_supplies`；原记录口径 Mass / kg。原数量约束“按 cp_supplies 实际互斥归属物理量 / N”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`usable_supply_returns_detergent_return`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_supplies`; 实际来源关联原生记录 |
| discarded_chairs | guest_chair_wholesale | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 真实接收决定区分留泡沫织物框涂饰脚垫整椅与独立破部件包装，整物组分视图不可相加，缺脚垫裂软垫划伤未知质量不证明整椅损失金属物种释放。 范围证据要求：需真实库存事件去向接收原生重数对应所含组分状态处理覆盖来源交接归属，不将部件损失变整椅替换默认回收。 计量证据：协议`cp_chairs`；原记录口径 Mass / kg。原数量约束“按 cp_chairs 实际互斥归属物理量 / N”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`discarded_chairs_atomic_case`; `discarded_chairs_chair_pad`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_chairs`; 实际来源关联原生记录 |
| other_wastes | guest_chair_wholesale | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 真实耗擦布吸附滤材服务新增包及混合捕集织物泡沫涂层金属碎屑保留接收混合物范围，载体吸液碎屑不额外重复流，不规定拆解研磨干燥配方。 范围证据要求：需接收混合物各载体吸液碎屑原生单位基准方法状态时间来源组成接收处理归属，新材收货组分存在不是废量。 计量证据：协议`cp_fates`；原记录口径 Mass / kg。原数量约束“按 cp_fates 实际互斥归属物理量 / N”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`other_wastes_spent_wipe`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_fates`; 实际来源关联原生记录 |
| contained_liquid_wastes | guest_chair_wholesale | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 仅真实单独游离液设施废水按原生身份状态组成体积接收方，与湿混固椅水分直接排水分开，不假定商人洗椅流程。 范围证据要求：需各不同液体实际收集接收体积组成原生方法状态时间来源运输处理范围，购水不为液废。 计量证据：协议`cp_fates`；原记录口径 Volume / m3。原数量约束“按 cp_fates 实际互斥归属物理量 / N”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`contained_liquid_wastes_aqueous_cleaning`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_fates`; 实际来源关联原生记录 |
| water_outfalls | guest_chair_wholesale | 确定直接排口、接收水体或土壤介质、实测水量及独立分析的污染物种。送处理的下水道转移不是该排口；接收介质未明时不能确定基本流。 仅真实直接水向已知环境介质，容装送接收为废物，化学物种需自身真实证据。 范围证据要求：需真实地点介质区间原生水量组成去向换算，潮软包供水不证明排放。 计量证据：协议`cp_fates`；原记录口径 Volume / m3。原数量约束“按 cp_fates 实际互斥归属物理量 / N”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_fates`; 实际来源关联原生记录 |
| direct_species | guest_chair_wholesale | 按排放或采样记录确定各实测排放的来源事件、化学物或粒径身份、来源属性及接收介质。物种、粒径或介质不明须保留具体证据缺口；化学品总用量或库存损失不能提供这些身份。 用真实化学物种粒径介质实测或兼容真实事件方法，继承粉末涂层铬泡沫聚合物化学、划伤缺重来源健康宣称既不证明真实排放也不证明零，含铬不确立六价铬。 范围证据要求：需确切物种介质原生实测或活动因子单位基准方法状态时间来源完整覆盖，完整物种系数已含组成去向比例不得再乘，不由椅物料表固定通用尘VOC身份。 计量证据：协议`cp_releases`；原记录口径 Mass / kg。原数量约束“按 cp_releases 实际互斥归属物理量 / N”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_releases`; 实际来源关联原生记录 |


## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| real_FINAL | accepted_service | 需商人购买所有权转售明确企业买方真实最终交接时间来源已核撤销唯一最终N全部16限定，供方收货椅件发票坐用小时不足。N0保留取消失败隔离未完成期间群资源不除。 |  |
| actual_configuration | 商品 | 核实际全新四脚主要钢框座背均软包脚垫完整物料表涂饰牌号所含发运装配原包，不混品牌选项来源管级泡沫重量堆高保修默认，不隐藏商人装配软包翻新承载试验坐用。 | ki-strive-current; ki-strive-technical-2020 |
| native_state | 商品量 | 需原生椅部件对应独立真实组分水分涂饰量单位基准方法状态取样时间来源，缺部件非整椅损失整椅组分包不可相加。真实密度温度换算或仅水湿干定义匹配样品百分比先转，其他挥发物干燥失重非水排放零。 |  |
| source_once | 商品接口 | 核原生来源归属基线新增状态单位基准方法时间来源原换算，直接真实追溯或正完整兼容竞争全终端记录含期末退回可用其他有据损失各量单位基准方法状态时间来源链接归属。互斥损失归属同基线阶段损失覆盖，完整制造装配放行包装交接在外一次，不仅验收不叠直接驱动。 |  |
| resources_once | 全部资源 | 完整全部使用方期间全资产观察有据剩余退役原生驱动不确定性更新、资产或服务商二选一N一次。用品毛S/N记输入且匹配未用退回量/N另记输出，或净消耗并省对应出口，不得作不相关或负量扣减，也不自动给予抵扣。货运保留全部内容货包仅减车辆非货皮重、原生毛皮每载总量该记录份额置求和内后正最终N一次。接收运输处理一次N0保留。 |  |
| actual_fates | guest_chair_wholesale | 真实批期间清理换批闲置取消失败拒收隔离未完成发运最终事件、缺件损伤退回待决样品废弃链接唯一真实接收归属。整椅部件混清理游离容装液直接物种不可相加，不默认回收缺质量等释放零含铬等六价铬或完整物种因子比例再乘。 |  |
| validate_concrete_identity_decisions | all inventory rows | 将每项实际身份核实事项落实到实物明确的流卡和原生数量，或提供不适用证据。证据检查点 ID 不是交换。发生、物种、状态、接收方或服务配置缺失时阻断最终数据完成，不默认零。按规定保持整体与组分、总量投入与对应退料的排他关系。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 实际身份完整性审核后secondary_dataset；background_dataset |
| downstream_use | 独立物理访客椅批发附加，完整制造装配放行原包供方交接需求损失覆盖关联一次 |
| allowed_use | 实际全新原厂成品四脚主要钢框座背均软包脚垫访客会议椅常温自营最终企业货批，有真实原生品项物料表涂饰发运装配包装状态证据 |
| excluded_use | 独立椅坐用寿命承载认证宣称；脚轮气升写字板套叠联排凳木框纯塑；制造商人装配软包翻新修理承载试验坐用零售代理纯仓储 |
| required_metadata | 商人购买所有权转售企业买方最终交接来源撤销N、品项批椅部件对应框级壳泡沫织物涂饰紧固脚垫所含扶手另售附件物料表发运装配原包原生数净毛皮独立组分水方法状态时间来源、地点期间时长完整来源归属基线覆盖和资源服务商资产货运接收归属 |
| required_quality_disclosure | 真实身份支持证据年代品项适用性最终撤销完整条件测量对应来源终端基线损失去向寿命服务商不确定性、实际原生换算各行证据缺口 |
| update_trigger | 实际椅框底座软包脚垫涂饰物料表所含发运装配包装状态验收或装配试验翻新坐用流程、来源归属覆盖服务商资产货运接收换算证据变化 |


## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-guest-chair-wholesale | official_guidance | UNSD CPC3 explanatory notes (30June2025),38111 and61083 printed307. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅分类，声明主要钢框椅服务经38111较窄61083，不全叶。 |
| ki-strive-current | official_guidance | KI Strive Stack Chair current manufacturer product/options page. https://www.ki.com/products/name/strive-stack-chair/ | 仅独立四脚座背软包脚垫配置问题，选项非一品项，不将堆高价格保修寿命舒适声明作清单默认。 |
| ki-strive-technical-2020 | official_guidance | KI Strive Seating Price List, actual current download technical specifications page8 datedJanuary2020. https://ki.widen.net/content/dll3oqwos7/pdf/Strive-Seating-Price-List.pdf?u=vzbxfu | 旧版钢管框PP聚氨酯泡沫座背软包所选涂饰脚垫定性例，需真实品项物料表，不通用管级尺寸钢级泡沫厚度质量堆高寿命保修试验商人操作默认或拼选项。 |
