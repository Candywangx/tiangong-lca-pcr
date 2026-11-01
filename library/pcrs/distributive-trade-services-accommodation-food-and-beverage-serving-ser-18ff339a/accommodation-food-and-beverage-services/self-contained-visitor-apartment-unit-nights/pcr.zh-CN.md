---
pcr_id: pcr.self-contained-visitor-apartment-unit-nights
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 自包含访客公寓单元夜住宿服务

## 1. 范围与适用性

本PCR覆盖真实单一物理不可拆分、私用厨房卫生间的自包含访客公寓或单间，清洁少于每日。实际单元图及可预订交付记录须确认拓扑，排可分隔（lock-off）或连通房的父单元—子单元组合、多单元合并产品及共享床。自助入住仅是所研究门禁方式，不证明无人或零服务。同物理单元仅因分时产权标签不改变适用性。因此CPC63112为proxy坐标：官方法律范围排分时产权且可含无厨房房间，本方法设施物理范围较窄但可能跨产权，不宣称exact或narrower覆盖。[unsd-cpc3-63112; unsd-cpc3-63113; numa-faq; numa-studio-context]

不提供通用面积客容量清洁安排布草质量停留长度寿命温度公用强度漏率或数值区间。须声明真实配套覆盖和经营方住客责任。HCMI公开资料仅为运营碳语境，不是全LCA边界或默认因子。[wsha-hcmi-context]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.self-contained-visitor-apartment-unit-nights |
| classification_refs | CPC3.0:63112 proxy；实际物理适用不单由产权决定 |
| covered_products | 实际不可拆私用自包含访客公寓单元夜，有厨房私卫且清洁少于每日，声明真实门禁支持配套范围 |
| excluded_products | 可分隔（lock-off）或连通房的父单元—子单元组合、多单元合并、共享床宿舍、永久半永久住宅、机构照护营地及未复核独立餐饮游乐包 |
| representative_product | 实际物业单元图独立unit_id、厨房私卫电器、本地服务夜访客群停留长度及交付服务记录，不采用品牌数值默认 |
| production_route | 实际备妥单元门禁支持→入住单元共用设施运行→实际周转非每日清洁布草→退房接收维护事件关联 |
| market_state | 有真实服务期间限定的已交付入住单元夜，不是出售资产预订权可售房积分 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 实际交付的私用不可拆自包含访客公寓入住单元夜 |
| How much | 1 Item(s) |
| How well | 实际私用厨房卫生间、非可拆拓扑、有效访客服务、少于每日清洁及真实配套公用布草范围；占用质量须声明不统一 |
| How long or cycle | 按有来源物业日历时区DST及交付区间的一实际本地服务夜，保留停留长度抵离周转期间，无固定24h |
| reference_flow_link | occupied_unit_night |

| 字段 | 值 |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 实际已入住自包含访客公寓单元夜 |
| reference_flow_property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | 物品数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | property_id; operator_id; unit_id; unit_plan_source; indivisible_non_lockoff_confirmation; private_kitchen_bathroom_scope; bookable_unit_inventory_link; visitor_stay_id; service_night_id; actual_guest_count; actual_arrival_departure; local_night_definition; time_zone; DST_rule_source; room_change_transfer_ids; complimentary_status; cancellation_no_show_reversal_ids; actual_housekeeping_service_regime; actual_cleaning_linen_events; included_ancillary_scope; meter_provider_coverage; reporting_period |


## 4. 计量与单位规则

| rule_id | 适用于 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| unit_night_count | occupied_unit_night | Count | Item(s) | 一个实际交付的私用不可拆分单元入住夜，按撤销后有效访客入住及本地服务夜日历关联。多住客不使单元夜翻倍，多实际单元则分别记录。不是预订、住客夜、可售夜、积分或固定小时。 |
| native_record_scope | 全部清单行 | 实际相容属性 | 实际原生单位及各行目标单位 | 每数量驱动保留原生单位基准方法状态来源及样品事件时点。原始、已归属、已每参考流数量采用互斥口径，换算及单件总量重复次数须有证据，来源规格不自动成为前景实测量。 |
| linen_water_basis | cp_linen; cp_fates | Mass | kg | 分别识别清洁干态、调湿态、使用后湿装载纺织品与容器皮重。实际水/湿样分数区别水/干非水比例，须同样品相容定义并先换算百分数。污物其他挥发物不自动是水或纤维损失。 |
| water_medium | cp_water; cp_environment; cp_fates | Mass; Volume | kg; m3 | 真实供水体积，需要时才用相容密度温度转质量；不得由输入水减某出口推蒸气废水。蒸气为实际水物种向空气释放，受控接收液是废物，实际直排另须物种环境证据。 |
| unique_packed_work | freight | Mass * Length | t*km | 唯一装载区段，真实整包布草用品保留液体随货支承载荷，非货物皮重独立。EACH乘实际件数一次，TOTAL不变；各记录本份额在SUM内，同范围正数N仅一次。 |


## 5. 系统边界

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| real_route | 纳入实际预订、门禁、远程支持，单元和共用设施已入住及空置连续运行，周转及少于每日的客房清洁，实际布草服务、维护、用品和接收交接。自助入住不证明无人服务或无清洁。资源以真实作业而非品牌或产权标签确定。 |  |
| unit_topology | 仅实际单一、物理不可拆分、单独交付并有私用厨房和卫生间的自包含访客公寓或单间。须有单元平面图、独立门禁和可预订交付库存证据。排除可拆锁亲子组合、连通或多单元合并产品及共享床住宿。拓扑未知不得默认不可拆。 |  |
| service_resource_boundary | 入住期间通过经营方提供的设备和设施发生的实际电力、供热、冷热水及厨房负荷均为住宿资源。未提供餐食不证明烹饪能耗为零。住客交通、自购食品和个人用品在选定服务外；经营方真实供应用品、零食或捆绑配套服务须纳入其真实供给覆盖，不得悄然排除。实际独立输出及共同物业租户保留竞争责任记录。 |  |
| full_chain_assets | 这是住宿生产而非交易商品批发。须归属完整建筑场址、装修、家具、暖通、电器、布草生命周期，以及维护、更换、退役、寿命终结和真实公用工程材料服务上游。租金管理费或分时度假积分不是物理资产服务。完整服务数据集只能替代已证实相匹配的物理范围。缺失真实上游阶段或处理，在完整链使用前必须实际集成一次，并有已完成数据集关联、时点时区、来源、责任、数量覆盖证据；待办计划不够。 |  |
| period_vacancy | 声明真实报告、计量、服务夜日历、清洁批次、库存和全资产阶段。可售未售、取消未到、封房维护、未完成入住期间保留实际待客、清洁、支持及资产资源；不得虚构入住夜或擦除N=0资源。配对跨期库存布草资产延续保留原来源及先前归属，不是新采购制造或新服务夜。 |  |
| laundry_interface | 采用实际经营方布草处理事件；仅真实在已复核设备作业内实施才计现场直接资源，或采用真实完整承包洗涤范围。住客个人洗衣设施可用不证明经营方布草处理路线。分别识别洗涤烘干整烫、电热燃料、化学品、水废水处理、纺织品租用制造、资产运输覆盖；真实缺项补一次，仅在别处已计一次时才移除重叠。住宿标签不推定工业洗衣或锅炉转换技术。 |  |
| fates_and_refrigerant | 供水、保留水分、独立受控液体接收转移和真实直接向空气释放的水蒸气是不同状态角色。实际混合物流保留非加和组成审计，无关材料物种接收交换分别展开。暖通电器原厂充注、当前独立补给、未耗用品退回、回收期末、可用外送、受控废物流体和直接物种各自互斥并保留责任原生证据。补加、库存差、气味或标签既不证明排放，也不证明零。 |  |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际备妥的私用不可拆自包含访客公寓，有真实厨房私卫电器布草服务清单，实际门禁清洁安排和报告资产期初状态 |
| starting_condition_role | 住宿生产边界，纳入应归属基础设施供应上游，不排除全部既有建筑负担 |
| product_classification_scope | CPC3.0:63112 proxy；少于每日清洁语境匹配，厨房私用不可拆物理子范围也可能为分时产权，不主张精确或较窄集合覆盖 |
| recursive_input_rule | 真实完整清洁洗涤数字配套公用服务仅按互斥物理范围输入，不递归重复输入同完成公寓夜或服务商已含公用资产；业主使用产权不自动为另一物理服务投入 |
| upstream_dataset_requirement | 实际完整公用材料纺织建筑装修设备服务商生产及最终处理覆盖一次，真实缺阶段在完整链前须实际完成集成，有数据集关联时区来源责任原生量覆盖，不是待办 |
| disclosure | 实际单元图不可拆、访客入住夜日历占用、可售空置封房取消未到资源、清洁布草配套任务和场址服务商接收全寿命责任及未解数据 |


## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| apartment_unit_service | 自包含访客公寓单元住宿服务 | required | 实际有证不可拆私用厨房私卫访客单元及已交付入住服务夜 | foreground | occupied_unit_night |

一个综合住宿节点负责真实已入住空置设施连续运行及索引门禁周转住中布草维护任务，不制造虚构生产或交易商品仓储节点。真实上游服务商有独立责任交接记录及匹配完整服务。其他实际物业消费者输出全部枚举于分配台账，不复制本参考输出。

### 过程：自包含访客公寓单元住宿服务 (`apartment_unit_service`)

#### 输入

##### 产品流

###### 实际使用点交流电 (`electricity_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 绑定：`fixed`
- 流属性/单位：Energy / kWh
- 数量规则：sum(exclusive actual attributed electricity records)/positive_same_scope_N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

范围证据需求：须实际区间kWh或有证区间平均功率时长、进口计量系数、作业覆盖及全部使用者池分子分母，纳必要空置失败义务；无每夜默认基准。

###### 实际外购交付的有效热量 (`delivered_heat_delivered_heat`)

仅记录有证据能量基准、实际跨越本节点边界交付的有效热量。保留供回状态、温度品位、覆盖范围及实际损失责任。通用热能身份不预设天然气、蒸汽质量、锅炉效率或温度；制冷、燃料能量及缺少蒸汽转能量证据的情形不使用该身份。

- 选定流：热能 `4f19a302-7b3b-11dd-ad8b-0800200c9a66`
- 绑定：`fixed`
- 流属性/单位：Energy / MJ
- 数量规则：sum(exclusive compatible attributed delivered thermal energy)/positive_same_scope_N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

范围证据需求：须真实服务商供给表计、冷热身份质量期间原生单位换算和同池范围，不以气候面积假设温度负荷。

###### 实际液态处理自来水供给 (`supplied_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 绑定：`fixed`
- 流属性/单位：Volume / m3
- 数量规则：sum(exclusive actual attributed supply volume records)/positive_same_scope_N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

范围证据需求：须实际表计供应账单、原生量及需要时相容密度温度、全部消费者区间份额池与真实去向，无每客升数洗涤余量。

###### 实际独立记录的合成洗涤剂投入 (`cleaning_materials_synthetic_detergent`)

仅适用于产品配方、供应状态及用途记录确认的实际合成表面活性洗涤剂。记录扣除包装皮重的材料净量，区分浓缩液与稀释水，整体配方与组分不得相加重复计入。肥皂、消毒剂、抹布、滤材等仍按各自实际身份记录，不预设清洁配方、剂量或发生。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：实际相容已归属总S或仅耗S-unused_outward_return，再/positive_same_scope_N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据需求：各真实身份组成、净期初收货期末、EACH/TOTAL件数单件或密度温度、配对退回范围来源必需；无洗涤捕集用量默认。

###### 声明纺织品基准的真实完整经营方布草洗涤服务 (`laundry_service`)

条件性经营方床品毛巾服务商服务，不是清洁纺织品制造或默认住客个人洗衣。质量基准为实际服务商接收清洁干态或明确换算原生态，按件批等须展开实际相容原生交换。洗涤烘干整烫能水化学废水处理资产运输租用覆盖，缺项完成一次。

- 选定流：声明纺织品基准的真实完整经营方布草洗涤服务
- 流属性/单位：Mass / kg
- 数量规则：sum(actual compatible attributed laundry-service quantity)/positive_same_scope_N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_linen`

范围证据需求：须真实服务商事件质量和清洁干态与使用湿态质量皮重换算、完整作业运输布草租用责任，无每夜kg或后备百分比。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 实际已入住自包含访客公寓单元夜 (`occupied_unit_night`)

一个实际已交付私用不可拆厨房私卫访客入住夜，清洁少于每日并有真实配套范围。有效访客服务、本地夜日历时区DST、更房免费撤销记录决定资格。拒绝某次清洁不自动拒收已交付住宿。非一预订住客夜积分容量夜固定24h。

- 选定流：实际已入住自包含访客公寓单元夜
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_stays`

范围证据需求：须真实物业经营方单元图非可拆证据、有效服务夜交付ID日历、实际人数停留长度更房免费取消未到撤销和服务配套限定，不设标准群体小时。

##### 废物流

##### 基本流

###### 实际有独立证据的向空气排放化石二氧化碳 (`direct_species_release_co2_fossil_air`)

仅在实际证据确认化石来源、二氧化碳物种和向空气直接释放时适用。保留报告的碳或CO2基准，碳转CO2须独立有证据的化学计量，不预设系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：实际相容已归属实测物种或适用活动系数且仅必要组成去向，再/positive_same_scope_N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_environment`

范围证据需求：须真实物种粒级介质独立质量或适用来源活动系数及必要组成去向、捕集受控资产责任取样时间证据，无未知按零或通用VOC混合。

###### 实际有独立证据的向空气排放化石甲烷 (`direct_species_release_methane_fossil_air`)

仅在实际证据确认化石来源、甲烷物种和向空气直接释放时适用。生物源或来源未知甲烷仍在余项要求中，不得改标化石源；不预设泄漏发生、气体比例、数量或排放系数。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：实际相容已归属实测物种或适用活动系数且仅必要组成去向，再/positive_same_scope_N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_environment`

范围证据需求：须真实物种粒级介质独立质量或适用来源活动系数及必要组成去向、捕集受控资产责任取样时间证据，无未知按零或通用VOC混合。

###### 实际有独立证据的向空气排放氧化亚氮 (`direct_species_release_nitrous_oxide_air`)

仅在实际证据确认氧化亚氮物种及向空气直接释放时适用。原生数量为N2O质量，不是氮质量或氮气质量，不预设排放系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：实际相容已归属实测物种或适用活动系数且仅必要组成去向，再/positive_same_scope_N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_environment`

范围证据需求：须真实物种粒级介质独立质量或适用来源活动系数及必要组成去向、捕集受控资产责任取样时间证据，无未知按零或通用VOC混合。

## 7. 分配与联产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| service_count_scope | N为实际已入住合格delivered_unit_night_service_id唯一计数，关联真实unit_id/service_night_id、有效访客入住、撤销与房间更换；免费但真实合格服务可计，取消未到未提供重复更换夜不计。本地夜日历时区DST及实际交付证据决定切夜，不以24h或付款替代。实际住客数停留长度另列。仅同范围正N归一化，N0保留真实原始资源。 |  |
| direct_and_shared | 有证据时直接追踪实际区间任务资源，否则以有据相容物理因果驱动分配至全部真实单元类型、共用设施、租户配套及期间，涵盖闲置空置封房未完事件。记录完整全部使用者分子分母数量和原生元数据。不默认等单元、住客数、仅面积、最大容量、价格积分毛利分配。属于本真实住宿供给池的必要待客空置及失败取消未到工作，必须进入该池总量再除真实入住N；仅列台账不能移除负担。仅有真实责任证据才分离其他消费者输出。N0资源保留来源至延续至承接期间至最终消解关联；归属未明阻断最终包。 |  |
| turnover_period | 每周转住中重复清洁维护门禁事件关联真实入住单元期间。周转资源按明确因果规则只计入其真实服务的入住群组一次，不是每夜一个相同清洁。失败取消未到工作及拒收布草用品保留原资源和真实再用重洗退回废弃路径，不形成新完成输出。 |  |
| full_life | 建筑装修设备重复布草采用完整制造维护更换退役寿命终结，按相容job_driver/lifetime_all_user_driver，寿命为已观察全部使用历史加有来源剩余服务，真实等价不确定性敏感性更新。年度入住N不是整资产寿命。寿命驱动是完整相容全使用者责任服务基准，不用分子遗漏闲置责任的标称可售capacity或日历小时。实际闲置封房失败义务全部归入负责池消费者一次，不在寿命分母与入住输出分摊之间消失。共有租赁管理分时产权按实际物理生命周期责任划分一次，不重复服务商承运已有资产负担。 |  |
| provider_ancillary | 真实洗涤数字清洁配套服务量须有物理单位等价及匹配质量范围。明确原服务包量与已换算已归属量，仅需要时才乘等价份额。匹配材料能水化学废水处理资产运输上游，真实缺项完成一次。实际捆绑附加服务不得消失；其他物业独立输出以全部消费者责任记录归属，不自动增输出抵扣。 |  |
| supply_return | S=opening+net_receipts-closing，留存回收含于期末，实际净材料收货排供应容器皮重。选择总输入S并单列配对可用未耗外送输出，或仅耗用输入S-unused_outward_return并省去匹配输出。仅抵同范围独立未耗用品，不抵回收安装流体布草资产或无关库存。实际资源归属后同范围N一次，不二次退回抵扣。 |  |
| refrigerant_owner | 原厂充注可能已在暖通电器生命周期内，其来源须区别独立运行供应和已装回收库存。回收在真实外送前为内部转移，留存回收为期末。实际可用回收安装流体外送不自动抵扣，绝不抵无关当前补给；仅同范围独立未耗供应可按仅耗用口径相抵。实际独立受控废物流体和直接物种各有数量去向接收责任。 |  |
| exclusive_receivers | 真实可用纺织品资产用品输出、独立废材料、实际混合捕集、受控废水废冷媒及直接物种有互斥实体成员，保留组成不另加整股。接收运输处理寿命终结一次；完整生命周期服务已含相同事件时保留物理审计，只有明确覆盖证据才移除重复处理交换负担，而不遗漏真实去向。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_stays | apartment_unit_service | 实际节点交换事件及解释性物理责任审计 | 实际单元拓扑访客入住服务夜台账 | actual_guest_count; actual_guest_count_unit; actual_guest_count_basis; actual_guest_count_method; actual_guest_count_state; actual_guest_count_source; actual_guest_count_sample_time; actual_occupied_unit_nights; actual_occupied_unit_nights_unit; actual_occupied_unit_nights_basis; actual_occupied_unit_nights_method; actual_occupied_unit_nights_state; actual_occupied_unit_nights_source; actual_occupied_unit_nights_sample_time; available_unit_nights; available_unit_nights_unit; available_unit_nights_basis; available_unit_nights_method; available_unit_nights_state; available_unit_nights_source; available_unit_nights_sample_time; vacant_unit_nights; vacant_unit_nights_unit; vacant_unit_nights_basis; vacant_unit_nights_method; vacant_unit_nights_state; vacant_unit_nights_source; vacant_unit_nights_sample_time; blocked_unit_nights; blocked_unit_nights_unit; blocked_unit_nights_basis; blocked_unit_nights_method; blocked_unit_nights_state; blocked_unit_nights_source; blocked_unit_nights_sample_time; no_show_cancelled_nights; no_show_cancelled_nights_unit; no_show_cancelled_nights_basis; no_show_cancelled_nights_method; no_show_cancelled_nights_state; no_show_cancelled_nights_source; no_show_cancelled_nights_sample_time; delivered_interval_duration; delivered_interval_duration_unit; delivered_interval_duration_basis; delivered_interval_duration_method; delivered_interval_duration_state; delivered_interval_duration_source; delivered_interval_duration_sample_time; stay_length; stay_length_unit; stay_length_basis; stay_length_method; stay_length_state; stay_length_source; stay_length_sample_time; same_scope_N; same_scope_N_unit; same_scope_N_basis; same_scope_N_method; same_scope_N_state; same_scope_N_source; same_scope_N_sample_time; property_id; operator_id; event_id; reporting_period; pool_id; responsible_pool_owner; consumer_ids; all_consumer_driver_records; raw_converted_attributed_perreference_state; assignment_scope_ids; time_zone; time_source; coverage_owner; overlap_exclusion; uncertainty_source; numerator_driver; numerator_driver_unit; numerator_driver_basis; numerator_driver_method; numerator_driver_state; numerator_driver_source; numerator_driver_sample_time; denominator_driver; denominator_driver_unit; denominator_driver_basis; denominator_driver_method; denominator_driver_state; denominator_driver_source; denominator_driver_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; unit_id; unit_plan_source; indivisible_non_lockoff_confirmation; independent_access_source; private_kitchen_bathroom_scope; bookable_unit_inventory_link; visitor_stay_id; delivered_unit_night_service_id; room_change_parent_service_link; unit_time_segment_records; visitor_away_from_residence_evidence; service_night_id; night_calendar_definition; night_calendar_source; night_start_end_local; actual_arrival_departure; interval_start_end_UTC; DST_rule_source; room_change_transfer_ids; complimentary_status; cancellation_no_show_reversal_ids; service_delivery_evidence; actual_housekeeping_service_regime; actual_cleaning_linen_event_links; included_ancillary_scope; resource_source_event_link; unproductive_reason; necessary_pool_obligation_evidence; idle_failed_resources_in_pool_total; other_consumer_separation_evidence; carry_from_period_link; carry_to_receiving_period_link; carry_resolution_link; carry_resolution_status; unallocated_resource_blocker | 按单元图独立门禁和可预订交付范围确认真实单一不可拆私用厨房私卫单元，未知可拆组合共享床排除。追踪有效访客及实际已交付单元夜，采用本地夜日历时区DST抵离更房撤销，不用价格预订积分。同一替换交付服务夜各真实单元时间段关联一delivered_unit_night_service_id，保留两段资源不重N；同一预订的实际分别提供单元有不同ID。真实合格免费夜可计，未到取消未提供不计；住客白天暂离不擦除有效服务夜。拒绝失败一次清洁不自动拒收真实住宿。客数停留长度小时另列。必要空置待客维护取消失败任务资产留负责池后再除真实N，N0保留来源延续承接消解关联，归属未明阻断最终包。 | 实际单元夜住客计数和原生时间单位；Item(s)仅计一合格单元夜 | 每真实事件及相容计量服务库存寿命区间 | 真实单元夜入住任务报告期间及来源延续消解阶段 | 真实物业单元共用区域及服务商接收交接，全部相关消费者 | 每参考流 | 原始来源校准方法及原生单位基准状态来源样品事件时点；真实责任覆盖不确定性，未知不得按零处理 |
| cp_utilities | apartment_unit_service | 实际节点交换事件及解释性物理责任审计 | 实际电力外供冷热及燃料区间 | reading_start; reading_start_unit; reading_start_basis; reading_start_method; reading_start_state; reading_start_source; reading_start_sample_time; reading_end; reading_end_unit; reading_end_basis; reading_end_method; reading_end_state; reading_end_source; reading_end_sample_time; meter_factor; meter_factor_unit; meter_factor_basis; meter_factor_method; meter_factor_state; meter_factor_source; meter_factor_sample_time; integrated_energy; integrated_energy_unit; integrated_energy_basis; integrated_energy_method; integrated_energy_state; integrated_energy_source; integrated_energy_sample_time; interval_average_power; interval_average_power_unit; interval_average_power_basis; interval_average_power_method; interval_average_power_state; interval_average_power_source; interval_average_power_sample_time; elapsed_duration; elapsed_duration_unit; elapsed_duration_basis; elapsed_duration_method; elapsed_duration_state; elapsed_duration_source; elapsed_duration_sample_time; actual_utility_quantity; actual_utility_quantity_unit; actual_utility_quantity_basis; actual_utility_quantity_method; actual_utility_quantity_state; actual_utility_quantity_source; actual_utility_quantity_sample_time; fuel_net_quantity; fuel_net_quantity_unit; fuel_net_quantity_basis; fuel_net_quantity_method; fuel_net_quantity_state; fuel_net_quantity_source; fuel_net_quantity_sample_time; fuel_volume; fuel_volume_unit; fuel_volume_basis; fuel_volume_method; fuel_volume_state; fuel_volume_source; fuel_volume_sample_time; fuel_density; fuel_density_unit; fuel_density_basis; fuel_density_method; fuel_density_state; fuel_density_source; fuel_density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; density_pressure; density_pressure_unit; density_pressure_basis; density_pressure_method; density_pressure_state; density_pressure_source; density_pressure_sample_time; composition; composition_unit; composition_basis; composition_method; composition_state; composition_source; composition_sample_time; all_user_interval_driver; all_user_interval_driver_unit; all_user_interval_driver_basis; all_user_interval_driver_method; all_user_interval_driver_state; all_user_interval_driver_source; all_user_interval_driver_sample_time; property_id; operator_id; event_id; reporting_period; pool_id; responsible_pool_owner; consumer_ids; all_consumer_driver_records; raw_converted_attributed_perreference_state; assignment_scope_ids; same_scope_N_source; time_zone; time_source; coverage_owner; overlap_exclusion; uncertainty_source; numerator_driver; numerator_driver_unit; numerator_driver_basis; numerator_driver_method; numerator_driver_state; numerator_driver_source; numerator_driver_sample_time; denominator_driver; denominator_driver_unit; denominator_driver_basis; denominator_driver_method; denominator_driver_state; denominator_driver_source; denominator_driver_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; same_scope_N; same_scope_N_unit; same_scope_N_basis; same_scope_N_method; same_scope_N_state; same_scope_N_sample_time; utility_identity; meter_id; source_import_register; provider_id; interval_start; interval_end; interval_start_end_UTC; average_power_method; averaging_population; actual_duty_cycle_source; cycling_standby_fans_defrost_coverage; nameplate_instantaneous_exclusion; already_integrated_quantity_flag; thermal_vs_fuel_scope; guest_kitchen_appliance_hotwater_coverage; fuel_upstream_and_combustion_owner; provider_overlap; resource_source_event_link; unproductive_reason; necessary_pool_obligation_evidence; idle_failed_resources_in_pool_total; other_consumer_separation_evidence; carry_from_period_link; carry_to_receiving_period_link; carry_resolution_link; carry_resolution_status; unallocated_resource_blocker; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 读真实进口表计系数或供方物理量，纳入住空置共用清洁住客厨房电器热水任务。已积分kWh不再乘时长；仅同实际经过区间的平均功率且含循环风机化霜闲置才能乘时长，不用瞬时铭牌。真实燃料体积换算须相容实际密度温度压力状态来源。外供热与现场燃料转换资产燃烧排放范围互斥。识别原量已归属每参考流状态及各原生驱动，必要非生产池负荷保留，不置待机零或仅列台账。 | 原生电力kWh、热能MJ或有据源单位、燃料kg或相容体积换算 | 每真实事件及相容计量服务库存寿命区间 | 真实单元夜入住任务报告期间及来源延续消解阶段 | 真实物业单元共用区域及服务商接收交接，全部相关消费者 | 每参考流 | 原始来源校准方法及原生单位基准状态来源样品事件时点；真实责任覆盖不确定性，未知不得按零处理 |
| cp_water | apartment_unit_service | 实际节点交换事件及解释性物理责任审计 | 真实供水受控废水水状态台账 | meter_start; meter_start_unit; meter_start_basis; meter_start_method; meter_start_state; meter_start_source; meter_start_sample_time; meter_end; meter_end_unit; meter_end_basis; meter_end_method; meter_end_state; meter_end_source; meter_end_sample_time; meter_factor; meter_factor_unit; meter_factor_basis; meter_factor_method; meter_factor_state; meter_factor_source; meter_factor_sample_time; supply_volume; supply_volume_unit; supply_volume_basis; supply_volume_method; supply_volume_state; supply_volume_source; supply_volume_sample_time; supply_mass; supply_mass_unit; supply_mass_basis; supply_mass_method; supply_mass_state; supply_mass_source; supply_mass_sample_time; contained_effluent_volume; contained_effluent_volume_unit; contained_effluent_volume_basis; contained_effluent_volume_method; contained_effluent_volume_state; contained_effluent_volume_source; contained_effluent_volume_sample_time; contained_effluent_mass; contained_effluent_mass_unit; contained_effluent_mass_basis; contained_effluent_mass_method; contained_effluent_mass_state; contained_effluent_mass_source; contained_effluent_mass_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; retained_water; retained_water_unit; retained_water_basis; retained_water_method; retained_water_state; retained_water_source; retained_water_sample_time; actual_water_vapour_mass; actual_water_vapour_mass_unit; actual_water_vapour_mass_basis; actual_water_vapour_mass_method; actual_water_vapour_mass_state; actual_water_vapour_mass_source; actual_water_vapour_mass_sample_time; direct_discharge_species_quantity; direct_discharge_species_quantity_unit; direct_discharge_species_quantity_basis; direct_discharge_species_quantity_method; direct_discharge_species_quantity_state; direct_discharge_species_quantity_source; direct_discharge_species_quantity_sample_time; water_stock_opening; water_stock_opening_unit; water_stock_opening_basis; water_stock_opening_method; water_stock_opening_state; water_stock_opening_source; water_stock_opening_sample_time; water_stock_closing; water_stock_closing_unit; water_stock_closing_basis; water_stock_closing_method; water_stock_closing_state; water_stock_closing_source; water_stock_closing_sample_time; component_quantity; component_quantity_unit; component_quantity_basis; component_quantity_method; component_quantity_state; component_quantity_source; component_quantity_sample_time; composition; composition_unit; composition_basis; composition_method; composition_state; composition_source; composition_sample_time; property_id; operator_id; event_id; reporting_period; pool_id; responsible_pool_owner; consumer_ids; all_consumer_driver_records; raw_converted_attributed_perreference_state; assignment_scope_ids; same_scope_N_source; time_zone; time_source; coverage_owner; overlap_exclusion; uncertainty_source; numerator_driver; numerator_driver_unit; numerator_driver_basis; numerator_driver_method; numerator_driver_state; numerator_driver_source; numerator_driver_sample_time; denominator_driver; denominator_driver_unit; denominator_driver_basis; denominator_driver_method; denominator_driver_state; denominator_driver_source; denominator_driver_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; same_scope_N; same_scope_N_unit; same_scope_N_basis; same_scope_N_method; same_scope_N_state; same_scope_N_sample_time; supply_id; meter_provider_id; interval_start; interval_end; direct_vs_provider_scope; sanitary_cleaning_laundry_stream_id; collection_transfer_id; receiver_id; receiver_treatment_scope; whole_stream_component_membership; retained_water_exclusion; actual_evaporation_measurement_source; actual_discharge_medium; sample_id; resource_source_event_link; unproductive_reason; necessary_pool_obligation_evidence; idle_failed_resources_in_pool_total; other_consumer_separation_evidence; carry_from_period_link; carry_to_receiving_period_link; carry_resolution_link; carry_resolution_status; unallocated_resource_blocker; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 采实际经营方厨房私卫清洁布草任务供水和全部消费者真实归属。独立确定卫生清洁洗涤受控接收流数量组成处理，体积转质量须相容密度温度。向空气水蒸气或实际直排物种须独立证据，不以供水减废水推断。布草清理库存保留水是非加和审计。真实混合接收流保整股，实际不同接收流分别展开。住客来源组成不按标准每客负荷推定。 | 实际原生m3/L/kg及独立组成状态换算，不用默认水平衡余差 | 每真实事件及相容计量服务库存寿命区间 | 真实单元夜入住任务报告期间及来源延续消解阶段 | 真实物业单元共用区域及服务商接收交接，全部相关消费者 | 每参考流 | 原始来源校准方法及原生单位基准状态来源样品事件时点；真实责任覆盖不确定性，未知不得按零处理 |
| cp_operations | apartment_unit_service | 实际节点交换事件及解释性物理责任审计 | 真实清洁周转支持维护任务事件 | task_quantity; task_quantity_unit; task_quantity_basis; task_quantity_method; task_quantity_state; task_quantity_source; task_quantity_sample_time; repeat_count; repeat_count_unit; repeat_count_basis; repeat_count_method; repeat_count_state; repeat_count_source; repeat_count_sample_time; task_duration; task_duration_unit; task_duration_basis; task_duration_method; task_duration_state; task_duration_source; task_duration_sample_time; served_unit_nights; served_unit_nights_unit; served_unit_nights_basis; served_unit_nights_method; served_unit_nights_state; served_unit_nights_source; served_unit_nights_sample_time; occupant_driver; occupant_driver_unit; occupant_driver_basis; occupant_driver_method; occupant_driver_state; occupant_driver_source; occupant_driver_sample_time; area_driver; area_driver_unit; area_driver_basis; area_driver_method; area_driver_state; area_driver_source; area_driver_sample_time; idle_resource_quantity; idle_resource_quantity_unit; idle_resource_quantity_basis; idle_resource_quantity_method; idle_resource_quantity_state; idle_resource_quantity_source; idle_resource_quantity_sample_time; failed_resource_quantity; failed_resource_quantity_unit; failed_resource_quantity_basis; failed_resource_quantity_method; failed_resource_quantity_state; failed_resource_quantity_source; failed_resource_quantity_sample_time; property_id; operator_id; event_id; reporting_period; pool_id; responsible_pool_owner; consumer_ids; all_consumer_driver_records; raw_converted_attributed_perreference_state; assignment_scope_ids; same_scope_N_source; time_zone; time_source; coverage_owner; overlap_exclusion; uncertainty_source; numerator_driver; numerator_driver_unit; numerator_driver_basis; numerator_driver_method; numerator_driver_state; numerator_driver_source; numerator_driver_sample_time; denominator_driver; denominator_driver_unit; denominator_driver_basis; denominator_driver_method; denominator_driver_state; denominator_driver_source; denominator_driver_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; same_scope_N; same_scope_N_unit; same_scope_N_basis; same_scope_N_method; same_scope_N_state; same_scope_N_sample_time; task_id; task_type; stay_unit_night_links; scheduled_actual_declined_failed_status; turnover_stayover_changeover_id; batch_run_id; continuous_operation_interval; provider_or_direct_owner; cleaning_linen_return_reclean_reject_links; actual_operation_source; included_ancillary_responsibility; resource_source_event_link; unproductive_reason; necessary_pool_obligation_evidence; idle_failed_resources_in_pool_total; other_consumer_separation_evidence; carry_from_period_link; carry_to_receiving_period_link; carry_resolution_link; carry_resolution_status; unallocated_resource_blocker | 真实到前退房少于每日住中清洁、门禁支持维护布草更换关联入住单元期间和任务批次连续区间，不规定品牌时间表或每夜一次清洁。拒绝失败任务保留实际工作资源，但不自动拒收已交付住宿。真实重复重洗拒收物料保留原负担及后续使用退回接收关联。必要空置封房未到取消工作归负责住宿池，只有证据才分离其他产品租户，不漏闲置。 | 实际原生任务计数时间面积或其他相容物理驱动与有来源换算 | 每真实事件及相容计量服务库存寿命区间 | 真实单元夜入住任务报告期间及来源延续消解阶段 | 真实物业单元共用区域及服务商接收交接，全部相关消费者 | 每参考流 | 原始来源校准方法及原生单位基准状态来源样品事件时点；真实责任覆盖不确定性，未知不得按零处理 |
| cp_supplies | apartment_unit_service | 实际节点交换事件及解释性物理责任审计 | 实际净清洁洗衣住客用品及物料库存 | native_quantity; native_quantity_unit; native_quantity_basis; native_quantity_method; native_quantity_state; native_quantity_source; native_quantity_sample_time; actual_count; actual_count_unit; actual_count_basis; actual_count_method; actual_count_state; actual_count_source; actual_count_sample_time; count_multiplier; count_multiplier_unit; count_multiplier_basis; count_multiplier_method; count_multiplier_state; count_multiplier_source; count_multiplier_sample_time; per_piece_mass; per_piece_mass_unit; per_piece_mass_basis; per_piece_mass_method; per_piece_mass_state; per_piece_mass_source; per_piece_mass_sample_time; receipt_gross; receipt_gross_unit; receipt_gross_basis; receipt_gross_method; receipt_gross_state; receipt_gross_source; receipt_gross_sample_time; container_tare; container_tare_unit; container_tare_basis; container_tare_method; container_tare_state; container_tare_source; container_tare_sample_time; net_receipts; net_receipts_unit; net_receipts_basis; net_receipts_method; net_receipts_state; net_receipts_source; net_receipts_sample_time; opening; opening_unit; opening_basis; opening_method; opening_state; opening_source; opening_sample_time; closing; closing_unit; closing_basis; closing_method; closing_state; closing_source; closing_sample_time; retained_recovery; retained_recovery_unit; retained_recovery_basis; retained_recovery_method; retained_recovery_state; retained_recovery_source; retained_recovery_sample_time; unused_outward_return; unused_outward_return_unit; unused_outward_return_basis; unused_outward_return_method; unused_outward_return_state; unused_outward_return_source; unused_outward_return_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; composition; composition_unit; composition_basis; composition_method; composition_state; composition_source; composition_sample_time; attributed_supply_quantity; attributed_supply_quantity_unit; attributed_supply_quantity_basis; attributed_supply_quantity_method; attributed_supply_quantity_state; attributed_supply_quantity_source; attributed_supply_quantity_sample_time; property_id; operator_id; event_id; reporting_period; pool_id; responsible_pool_owner; consumer_ids; all_consumer_driver_records; raw_converted_attributed_perreference_state; assignment_scope_ids; same_scope_N_source; time_zone; time_source; coverage_owner; overlap_exclusion; uncertainty_source; numerator_driver; numerator_driver_unit; numerator_driver_basis; numerator_driver_method; numerator_driver_state; numerator_driver_source; numerator_driver_sample_time; denominator_driver; denominator_driver_unit; denominator_driver_basis; denominator_driver_method; denominator_driver_state; denominator_driver_source; denominator_driver_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; same_scope_N; same_scope_N_unit; same_scope_N_basis; same_scope_N_method; same_scope_N_state; same_scope_N_sample_time; material_SKU; formulation_identity; EACH_TOTAL_extent; supply_stock_scope; matched_unused_return_ids; gross_or_consumed_convention; provider_included_material_exclusion; reusable_linen_asset_exclusion; inherited_installed_fluid_exclusion; source_stock_carry_links; actual_guest_supply_inclusion; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 逐实际独立配方SKU原生材料状态记录，不套统一卫生住客包。净收货按同单位排容器皮重。核对期初加净收货减期末含留存回收，选总输入加真实同库存可用未耗输出，或仅耗输入减配对未耗退回并省输出。保留损失耗后材料负担，不抵无关已装冷媒重复布草。原生EACH/TOTAL实际件数单件密度温度换算、原始已归属范围及全部使用者份额保留，服务商材料一次。 | 实际原生材料单位及相容kg换算，每独立SKU分别展开 | 每真实事件及相容计量服务库存寿命区间 | 真实单元夜入住任务报告期间及来源延续消解阶段 | 真实物业单元共用区域及服务商接收交接，全部相关消费者 | 每参考流 | 原始来源校准方法及原生单位基准状态来源样品事件时点；真实责任覆盖不确定性，未知不得按零处理 |
| cp_linen | apartment_unit_service | 实际节点交换事件及解释性物理责任审计 | 实际重复纺织品周转洗涤服务寿命护理记录 | textile_count; textile_count_unit; textile_count_basis; textile_count_method; textile_count_state; textile_count_source; textile_count_sample_time; actual_count; actual_count_unit; actual_count_basis; actual_count_method; actual_count_state; actual_count_source; actual_count_sample_time; clean_dry_textile_mass; clean_dry_textile_mass_unit; clean_dry_textile_mass_basis; clean_dry_textile_mass_method; clean_dry_textile_mass_state; clean_dry_textile_mass_source; clean_dry_textile_mass_sample_time; conditioned_textile_mass; conditioned_textile_mass_unit; conditioned_textile_mass_basis; conditioned_textile_mass_method; conditioned_textile_mass_state; conditioned_textile_mass_source; conditioned_textile_mass_sample_time; used_wet_loaded_mass; used_wet_loaded_mass_unit; used_wet_loaded_mass_basis; used_wet_loaded_mass_method; used_wet_loaded_mass_state; used_wet_loaded_mass_source; used_wet_loaded_mass_sample_time; container_tare; container_tare_unit; container_tare_basis; container_tare_method; container_tare_state; container_tare_source; container_tare_sample_time; wet_sample_mass; wet_sample_mass_unit; wet_sample_mass_basis; wet_sample_mass_method; wet_sample_mass_state; wet_sample_mass_source; wet_sample_mass_sample_time; water_quantity; water_quantity_unit; water_quantity_basis; water_quantity_method; water_quantity_state; water_quantity_source; water_quantity_sample_time; w_wet; w_wet_unit; w_wet_basis; w_wet_method; w_wet_state; w_wet_source; w_wet_sample_time; w_dry; w_dry_unit; w_dry_basis; w_dry_method; w_dry_state; w_dry_source; w_dry_sample_time; percent_to_ratio_factor; percent_to_ratio_factor_unit; percent_to_ratio_factor_basis; percent_to_ratio_factor_method; percent_to_ratio_factor_state; percent_to_ratio_factor_source; percent_to_ratio_factor_sample_time; dry_nonwater_mass; dry_nonwater_mass_unit; dry_nonwater_mass_basis; dry_nonwater_mass_method; dry_nonwater_mass_state; dry_nonwater_mass_source; dry_nonwater_mass_sample_time; soil_quantity; soil_quantity_unit; soil_quantity_basis; soil_quantity_method; soil_quantity_state; soil_quantity_source; soil_quantity_sample_time; laundry_native_service_quantity; laundry_native_service_quantity_unit; laundry_native_service_quantity_basis; laundry_native_service_quantity_method; laundry_native_service_quantity_state; laundry_native_service_quantity_source; laundry_native_service_quantity_sample_time; physical_equivalence; physical_equivalence_unit; physical_equivalence_basis; physical_equivalence_method; physical_equivalence_state; physical_equivalence_source; physical_equivalence_sample_time; textile_lifecycle_event_quantity; textile_lifecycle_event_quantity_unit; textile_lifecycle_event_quantity_basis; textile_lifecycle_event_quantity_method; textile_lifecycle_event_quantity_state; textile_lifecycle_event_quantity_source; textile_lifecycle_event_quantity_sample_time; job_driver; job_driver_unit; job_driver_basis; job_driver_method; job_driver_state; job_driver_source; job_driver_sample_time; observed_all_user_driver; observed_all_user_driver_unit; observed_all_user_driver_basis; observed_all_user_driver_method; observed_all_user_driver_state; observed_all_user_driver_source; observed_all_user_driver_sample_time; remaining_driver; remaining_driver_unit; remaining_driver_basis; remaining_driver_method; remaining_driver_state; remaining_driver_source; remaining_driver_sample_time; lifetime_all_user_driver; lifetime_all_user_driver_unit; lifetime_all_user_driver_basis; lifetime_all_user_driver_method; lifetime_all_user_driver_state; lifetime_all_user_driver_source; lifetime_all_user_driver_sample_time; driver_equivalence; driver_equivalence_unit; driver_equivalence_basis; driver_equivalence_method; driver_equivalence_state; driver_equivalence_source; driver_equivalence_sample_time; property_id; operator_id; event_id; reporting_period; pool_id; responsible_pool_owner; consumer_ids; all_consumer_driver_records; raw_converted_attributed_perreference_state; assignment_scope_ids; same_scope_N_source; time_zone; time_source; coverage_owner; overlap_exclusion; uncertainty_source; numerator_driver; numerator_driver_unit; numerator_driver_basis; numerator_driver_method; numerator_driver_state; numerator_driver_source; numerator_driver_sample_time; denominator_driver; denominator_driver_unit; denominator_driver_basis; denominator_driver_method; denominator_driver_state; denominator_driver_source; denominator_driver_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; same_scope_N; same_scope_N_unit; same_scope_N_basis; same_scope_N_method; same_scope_N_state; same_scope_N_sample_time; textile_id_batch; textile_material_BOM; bedding_towel_service_identity; change_wash_event_id; stay_unit_night_task_links; clean_dry_conditioned_soiled_basis; water_sample_id_component_scope; water_definition_source; LOD_other_volatiles_exclusion; EACH_TOTAL_extent; provider_id; care_quality_and_finish; wash_dry_finish_coverage; energy_water_chemicals_effluent_treatment_coverage; textile_rental_manufacture_repair_EOL_owner; transport_asset_scope; actual_on_site_laundry_equipment_route; manufacture_replacement_retirement_links; remaining_life_source; full_all_user_care_cycle_records; sensitivity_update_source; resource_source_event_link; unproductive_reason; necessary_pool_obligation_evidence; idle_failed_resources_in_pool_total; other_consumer_separation_evidence; carry_from_period_link; carry_to_receiving_period_link; carry_resolution_link; carry_resolution_status; unallocated_resource_blocker | 追踪实际经营方纺织品、清洁干态调湿使用湿态污物质量、容器皮重及真实更洗重洗拒收事件，住客洗衣可用非经营方布草证据。水分限同样品相容湿干定义及百分换算，其他挥发污物不作水或纤维。真实服务商接收质量件数质量等价有来源，无每夜kg默认。明确洗烘整烫电热燃料水化学废水处理租用制造资产运输覆盖，真实缺阶段以已完成集成证据补一次。纺织品制造维修更换寿命终结按完整全部用户已观察有来源剩余相容服务归属，含不确定性敏感性更新，服务包已含护理不再计。退役可用布草按真实接收，不是每夜新套。 | 实际纺织件数、清洁干调湿使用湿态kg和服务商单位、相容寿命驱动等价 | 每真实事件及相容计量服务库存寿命区间 | 真实单元夜入住任务报告期间及来源延续消解阶段 | 真实物业单元共用区域及服务商接收交接，全部相关消费者 | 每参考流 | 原始来源校准方法及原生单位基准状态来源样品事件时点；真实责任覆盖不确定性，未知不得按零处理 |
| cp_providers | apartment_unit_service | 实际节点交换事件及解释性物理责任审计 | 真实洗涤外部支持物业配套服务范围 | actual_native_quantity; actual_native_quantity_unit; actual_native_quantity_basis; actual_native_quantity_method; actual_native_quantity_state; actual_native_quantity_source; actual_native_quantity_sample_time; physical_equivalence; physical_equivalence_unit; physical_equivalence_basis; physical_equivalence_method; physical_equivalence_state; physical_equivalence_source; physical_equivalence_sample_time; attributed_package_quantity; attributed_package_quantity_unit; attributed_package_quantity_basis; attributed_package_quantity_method; attributed_package_quantity_state; attributed_package_quantity_source; attributed_package_quantity_sample_time; integrated_missing_quantity; integrated_missing_quantity_unit; integrated_missing_quantity_basis; integrated_missing_quantity_method; integrated_missing_quantity_state; integrated_missing_quantity_source; integrated_missing_quantity_sample_time; property_id; operator_id; event_id; reporting_period; pool_id; responsible_pool_owner; consumer_ids; all_consumer_driver_records; raw_converted_attributed_perreference_state; assignment_scope_ids; same_scope_N_source; time_zone; time_source; coverage_owner; overlap_exclusion; uncertainty_source; numerator_driver; numerator_driver_unit; numerator_driver_basis; numerator_driver_method; numerator_driver_state; numerator_driver_source; numerator_driver_sample_time; denominator_driver; denominator_driver_unit; denominator_driver_basis; denominator_driver_method; denominator_driver_state; denominator_driver_source; denominator_driver_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; same_scope_N; same_scope_N_unit; same_scope_N_basis; same_scope_N_method; same_scope_N_state; same_scope_N_sample_time; provider_id; contract_service_id; actual_event_ids; actual_delivered_quality; native_service_unit_definition; raw_converted_attributed_perreference_package_state; included_ancillary_obligation; actual_use_vs_availability_basis; material_energy_water_chemicals_effluent_treatment_asset_freight_matrix; operator_direct_overlap; upstream_dataset_link; missing_actual_stages; integration_status; integration_dataset_link; integration_time; integration_time_zone; integration_source; integration_owner; integration_coverage_once_evidence; resource_source_event_link; unproductive_reason; necessary_pool_obligation_evidence; idle_failed_resources_in_pool_total; other_consumer_separation_evidence; carry_from_period_link; carry_to_receiving_period_link; carry_resolution_link; carry_resolution_status; unallocated_resource_blocker | 取得实际已完成物理服务包任务或真实已包含义务、原生单位质量等价来源，不用费用积分订单当物理量。记录原始已换算已归属每参考流状态，仅乘尚需换算份额。明确全部材料能水化学废水处理ICT资产布草租用运输及直接重叠。真实缺阶段资源量在完整链前必须按已完成状态数据集关联时区来源责任原生量覆盖证据集成一次，计划不够。真实租户独立输出责任保留，池待客不消失。 | 实际原生服务单位有来源物理等价；仅真实定义经核包可用Item(s) | 每真实事件及相容计量服务库存寿命区间 | 真实单元夜入住任务报告期间及来源延续消解阶段 | 真实物业单元共用区域及服务商接收交接，全部相关消费者 | 每参考流 | 原始来源校准方法及原生单位基准状态来源样品事件时点；真实责任覆盖不确定性，未知不得按零处理 |
| cp_assets | apartment_unit_service | 实际节点交换事件及解释性物理责任审计 | 完整寿命建筑装修设备设施责任 | event_quantity; event_quantity_unit; event_quantity_basis; event_quantity_method; event_quantity_state; event_quantity_source; event_quantity_sample_time; job_driver; job_driver_unit; job_driver_basis; job_driver_method; job_driver_state; job_driver_source; job_driver_sample_time; observed_all_user_driver; observed_all_user_driver_unit; observed_all_user_driver_basis; observed_all_user_driver_method; observed_all_user_driver_state; observed_all_user_driver_source; observed_all_user_driver_sample_time; remaining_driver; remaining_driver_unit; remaining_driver_basis; remaining_driver_method; remaining_driver_state; remaining_driver_source; remaining_driver_sample_time; lifetime_all_user_driver; lifetime_all_user_driver_unit; lifetime_all_user_driver_basis; lifetime_all_user_driver_method; lifetime_all_user_driver_state; lifetime_all_user_driver_source; lifetime_all_user_driver_sample_time; driver_equivalence; driver_equivalence_unit; driver_equivalence_basis; driver_equivalence_method; driver_equivalence_state; driver_equivalence_source; driver_equivalence_sample_time; retired_material_quantity; retired_material_quantity_unit; retired_material_quantity_basis; retired_material_quantity_method; retired_material_quantity_state; retired_material_quantity_source; retired_material_quantity_sample_time; retained_fluid_quantity; retained_fluid_quantity_unit; retained_fluid_quantity_basis; retained_fluid_quantity_method; retained_fluid_quantity_state; retained_fluid_quantity_source; retained_fluid_quantity_sample_time; property_id; operator_id; event_id; reporting_period; pool_id; responsible_pool_owner; consumer_ids; all_consumer_driver_records; raw_converted_attributed_perreference_state; assignment_scope_ids; same_scope_N_source; time_zone; time_source; coverage_owner; overlap_exclusion; uncertainty_source; numerator_driver; numerator_driver_unit; numerator_driver_basis; numerator_driver_method; numerator_driver_state; numerator_driver_source; numerator_driver_sample_time; denominator_driver; denominator_driver_unit; denominator_driver_basis; denominator_driver_method; denominator_driver_state; denominator_driver_source; denominator_driver_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; same_scope_N; same_scope_N_unit; same_scope_N_basis; same_scope_N_method; same_scope_N_state; same_scope_N_sample_time; asset_id; asset_role_BOM; unit_building_common_scope; manufacture_source; maintenance_source; replacement_events; retirement_EOL_events; observed_history_boundary; remaining_life_source; all_user_all_period_records; idle_responsibility_in_numerator_and_denominator; nominal_capacity_not_lifetime_evidence; shared_ownership_lease_timeshare_responsibility; provider_carrier_overlap; current_EOLevent_treatment_coverage; initial_fluid_charge_owner; textile_lifecycle_exclusion; uncertainty_sensitivity_update_source; resource_source_event_link; unproductive_reason; necessary_pool_obligation_evidence; idle_failed_resources_in_pool_total; other_consumer_separation_evidence; carry_from_period_link; carry_to_receiving_period_link; carry_resolution_link; carry_resolution_status; unallocated_resource_blocker | 识别真实建筑场址装修家具暖通电器门禁ICT支承和完整制造维护更换退役寿命终结，产权租金分时费不是物理服务。采用全部使用者已观察历史加有来源剩余相容寿命驱动及实际等价不确定性敏感性更新。寿命分母非年度入住N，也不是分子遗漏闲置责任的标称capacity日历小时。必要闲置封房失败义务归负责池消费者一次，全部消费者期间闭合。布草生命周期和服务商承运已含事件区别。实际寿命终结交接处理唯一责任，记录相同覆盖避免双处理而不丢去向。 | 实际原生资产事件作业历史剩余寿命驱动及有据物理等价 | 每真实事件及相容计量服务库存寿命区间 | 真实单元夜入住任务报告期间及来源延续消解阶段 | 真实物业单元共用区域及服务商接收交接，全部相关消费者 | 每参考流 | 原始来源校准方法及原生单位基准状态来源样品事件时点；真实责任覆盖不确定性，未知不得按零处理 |
| cp_freight | apartment_unit_service | 实际节点交换事件及解释性物理责任审计 | 真实唯一整包用品布草维护接收运输 | actual_count; actual_count_unit; actual_count_basis; actual_count_method; actual_count_state; actual_count_source; actual_count_sample_time; cargo_mass_quantity; cargo_mass_quantity_unit; cargo_mass_quantity_basis; cargo_mass_quantity_method; cargo_mass_quantity_state; cargo_mass_quantity_source; cargo_mass_quantity_sample_time; cargo_count_multiplier; cargo_count_multiplier_unit; cargo_count_multiplier_basis; cargo_count_multiplier_method; cargo_count_multiplier_state; cargo_count_multiplier_source; cargo_count_multiplier_sample_time; gross_load_mass; gross_load_mass_unit; gross_load_mass_basis; gross_load_mass_method; gross_load_mass_state; gross_load_mass_source; gross_load_mass_sample_time; cargo_container_pack_mass; cargo_container_pack_mass_unit; cargo_container_pack_mass_basis; cargo_container_pack_mass_method; cargo_container_pack_mass_state; cargo_container_pack_mass_source; cargo_container_pack_mass_sample_time; noncargo_vehicle_container_tare; noncargo_vehicle_container_tare_unit; noncargo_vehicle_container_tare_basis; noncargo_vehicle_container_tare_method; noncargo_vehicle_container_tare_state; noncargo_vehicle_container_tare_source; noncargo_vehicle_container_tare_sample_time; whole_payload; whole_payload_unit; whole_payload_basis; whole_payload_method; whole_payload_state; whole_payload_source; whole_payload_sample_time; payload_conversion; payload_conversion_unit; payload_conversion_basis; payload_conversion_method; payload_conversion_state; payload_conversion_source; payload_conversion_sample_time; distance; distance_unit; distance_basis; distance_method; distance_state; distance_source; distance_sample_time; distance_conversion; distance_conversion_unit; distance_conversion_basis; distance_conversion_method; distance_conversion_state; distance_conversion_source; distance_conversion_sample_time; actual_transport_work; actual_transport_work_unit; actual_transport_work_basis; actual_transport_work_method; actual_transport_work_state; actual_transport_work_source; actual_transport_work_sample_time; record_share; record_share_unit; record_share_basis; record_share_method; record_share_state; record_share_source; record_share_sample_time; property_id; operator_id; event_id; reporting_period; pool_id; responsible_pool_owner; consumer_ids; all_consumer_driver_records; raw_converted_attributed_perreference_state; assignment_scope_ids; same_scope_N_source; time_zone; time_source; coverage_owner; overlap_exclusion; uncertainty_source; numerator_driver; numerator_driver_unit; numerator_driver_basis; numerator_driver_method; numerator_driver_state; numerator_driver_source; numerator_driver_sample_time; denominator_driver; denominator_driver_unit; denominator_driver_basis; denominator_driver_method; denominator_driver_state; denominator_driver_source; denominator_driver_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; same_scope_N; same_scope_N_unit; same_scope_N_basis; same_scope_N_method; same_scope_N_state; same_scope_N_sample_time; load_id; leg_id; unique_load_leg_key; cargo_EACH_TOTAL_extent; count_repeat_convention; cargo_membership; linen_water_pack_support_scope; empty_return_coverage; provider_receiver_overlap; actual_carrier_asset_fuel_coverage | 按真实唯一装载区段和整包货物或互斥组成，含污布保留水包装支承，不用清洁干布重作整载荷。EACH乘实际相容件数一次TOTAL不变，仅非货物承运皮重。本记录实际有来源份额放唯一工作量求和内，再除同范围正N；已归属每参考流不变。真实距离质量原生换算及空返服务商接收责任完整，不默认纳住客交通。 | 实际kg/t距离单位转t*km及有来源件数本记录份额基准 | 每真实事件及相容计量服务库存寿命区间 | 真实单元夜入住任务报告期间及来源延续消解阶段 | 真实物业单元共用区域及服务商接收交接，全部相关消费者 | 每参考流 | 原始来源校准方法及原生单位基准状态来源样品事件时点；真实责任覆盖不确定性，未知不得按零处理 |
| cp_refrigerant | apartment_unit_service | 实际节点交换事件及解释性物理责任审计 | 实际原厂充注独立供应安装回收及出口角色台账 | factory_charge_quantity; factory_charge_quantity_unit; factory_charge_quantity_basis; factory_charge_quantity_method; factory_charge_quantity_state; factory_charge_quantity_source; factory_charge_quantity_sample_time; factory_charge_actual_receipt_in_period; factory_charge_actual_receipt_in_period_unit; factory_charge_actual_receipt_in_period_basis; factory_charge_actual_receipt_in_period_method; factory_charge_actual_receipt_in_period_state; factory_charge_actual_receipt_in_period_source; factory_charge_actual_receipt_in_period_sample_time; other_actual_receipts; other_actual_receipts_unit; other_actual_receipts_basis; other_actual_receipts_method; other_actual_receipts_state; other_actual_receipts_source; other_actual_receipts_sample_time; other_actual_exits; other_actual_exits_unit; other_actual_exits_basis; other_actual_exits_method; other_actual_exits_state; other_actual_exits_source; other_actual_exits_sample_time; standalone_receipt_gross; standalone_receipt_gross_unit; standalone_receipt_gross_basis; standalone_receipt_gross_method; standalone_receipt_gross_state; standalone_receipt_gross_source; standalone_receipt_gross_sample_time; supply_container_tare; supply_container_tare_unit; supply_container_tare_basis; supply_container_tare_method; supply_container_tare_state; supply_container_tare_source; supply_container_tare_sample_time; standalone_net_receipts; standalone_net_receipts_unit; standalone_net_receipts_basis; standalone_net_receipts_method; standalone_net_receipts_state; standalone_net_receipts_source; standalone_net_receipts_sample_time; opening_installed; opening_installed_unit; opening_installed_basis; opening_installed_method; opening_installed_state; opening_installed_source; opening_installed_sample_time; opening_stored; opening_stored_unit; opening_stored_basis; opening_stored_method; opening_stored_state; opening_stored_source; opening_stored_sample_time; opening_recovered; opening_recovered_unit; opening_recovered_basis; opening_recovered_method; opening_recovered_state; opening_recovered_source; opening_recovered_sample_time; closing_installed; closing_installed_unit; closing_installed_basis; closing_installed_method; closing_installed_state; closing_installed_source; closing_installed_sample_time; closing_stored; closing_stored_unit; closing_stored_basis; closing_stored_method; closing_stored_state; closing_stored_source; closing_stored_sample_time; closing_recovered; closing_recovered_unit; closing_recovered_basis; closing_recovered_method; closing_recovered_state; closing_recovered_source; closing_recovered_sample_time; actual_makeup_transfer; actual_makeup_transfer_unit; actual_makeup_transfer_basis; actual_makeup_transfer_method; actual_makeup_transfer_state; actual_makeup_transfer_source; actual_makeup_transfer_sample_time; recovery_transfer; recovery_transfer_unit; recovery_transfer_basis; recovery_transfer_method; recovery_transfer_state; recovery_transfer_source; recovery_transfer_sample_time; unused_standalone_return; unused_standalone_return_unit; unused_standalone_return_basis; unused_standalone_return_method; unused_standalone_return_state; unused_standalone_return_source; unused_standalone_return_sample_time; usable_recovered_export; usable_recovered_export_unit; usable_recovered_export_basis; usable_recovered_export_method; usable_recovered_export_state; usable_recovered_export_source; usable_recovered_export_sample_time; contained_waste; contained_waste_unit; contained_waste_basis; contained_waste_method; contained_waste_state; contained_waste_source; contained_waste_sample_time; direct_release; direct_release_unit; direct_release_basis; direct_release_method; direct_release_state; direct_release_source; direct_release_sample_time; retained_in_whole_asset_waste; retained_in_whole_asset_waste_unit; retained_in_whole_asset_waste_basis; retained_in_whole_asset_waste_method; retained_in_whole_asset_waste_state; retained_in_whole_asset_waste_source; retained_in_whole_asset_waste_sample_time; retained_in_part_waste; retained_in_part_waste_unit; retained_in_part_waste_basis; retained_in_part_waste_method; retained_in_part_waste_state; retained_in_part_waste_source; retained_in_part_waste_sample_time; component_quantity; component_quantity_unit; component_quantity_basis; component_quantity_method; component_quantity_state; component_quantity_source; component_quantity_sample_time; composition_fraction; composition_fraction_unit; composition_fraction_basis; composition_fraction_method; composition_fraction_state; composition_fraction_source; composition_fraction_sample_time; fate_fraction; fate_fraction_unit; fate_fraction_basis; fate_fraction_method; fate_fraction_state; fate_fraction_source; fate_fraction_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; property_id; operator_id; event_id; reporting_period; pool_id; responsible_pool_owner; consumer_ids; all_consumer_driver_records; raw_converted_attributed_perreference_state; assignment_scope_ids; same_scope_N_source; time_zone; time_source; coverage_owner; overlap_exclusion; uncertainty_source; numerator_driver; numerator_driver_unit; numerator_driver_basis; numerator_driver_method; numerator_driver_state; numerator_driver_source; numerator_driver_sample_time; denominator_driver; denominator_driver_unit; denominator_driver_basis; denominator_driver_method; denominator_driver_state; denominator_driver_source; denominator_driver_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; same_scope_N; same_scope_N_unit; same_scope_N_basis; same_scope_N_method; same_scope_N_state; same_scope_N_sample_time; asset_fluid_id; fluid_SKU; component_species_ids; composition_fraction_basis_source; fate_fraction_basis_source; source_charge_supply_provenance; fluid_lot_charge_role_partition; stored_excludes_separately_reported_recovered; factory_entry_not_in_opening_or_other_receipts; other_receipts_exclusion_ids; other_exits_exclusion_ids; factory_charge_supply_coverage_owner; standalone_supply_stock_scope; supply_gross_consumed_choice; matched_unused_supply_return_ids; installed_recovery_internal_transfer_ids; receiver_export_treatment_id; retained_whole_part_fate_exclusion; direct_species_medium_source; actual_stock_discrepancy_blocker | 追踪实际命名流体混合物及每来源充注独立供应的单位基准方法状态时间来源。原厂充注可在资产生命周期内；opening_stored/closing_stored排已单列回收子库存，每lot/charge/role只属一个库存类别。原厂充注仅未在期初或任一其他收货内才作本期新收货，other_actual_receipts/exits按真实排除ID排所有单列项。回收是内部转移非新收货。核期初真实收货安装转移回收与期末已装存储回收、可用外送受控废物流体直接释放、随整部件废物保留流体的非加和内容。补加非漏失，余差非排放零。独立总供应配未耗输出或仅耗省输出，仅同范围未耗库存可相抵，回收原厂流体外送不能减无关当前补给。真实组成去向基准来源接收介质处理一次，不假定物种抵扣。 | 各实际流体组成原生kg或相容体积密度温度换算，整部件保留量非加和 | 每真实事件及相容计量服务库存寿命区间 | 真实单元夜入住任务报告期间及来源延续消解阶段 | 真实物业单元共用区域及服务商接收交接，全部相关消费者 | 每参考流 | 原始来源校准方法及原生单位基准状态来源样品事件时点；真实责任覆盖不确定性，未知不得按零处理 |
| cp_fates | apartment_unit_service | 实际节点交换事件及解释性物理责任审计 | 实际独立可用与废物接收物流及保留组成 | native_transfer_quantity; native_transfer_quantity_unit; native_transfer_quantity_basis; native_transfer_quantity_method; native_transfer_quantity_state; native_transfer_quantity_source; native_transfer_quantity_sample_time; actual_count; actual_count_unit; actual_count_basis; actual_count_method; actual_count_state; actual_count_source; actual_count_sample_time; count_multiplier; count_multiplier_unit; count_multiplier_basis; count_multiplier_method; count_multiplier_state; count_multiplier_source; count_multiplier_sample_time; whole_stream_mass; whole_stream_mass_unit; whole_stream_mass_basis; whole_stream_mass_method; whole_stream_mass_state; whole_stream_mass_source; whole_stream_mass_sample_time; container_tare; container_tare_unit; container_tare_basis; container_tare_method; container_tare_state; container_tare_source; container_tare_sample_time; component_quantity; component_quantity_unit; component_quantity_basis; component_quantity_method; component_quantity_state; component_quantity_source; component_quantity_sample_time; retained_water; retained_water_unit; retained_water_basis; retained_water_method; retained_water_state; retained_water_source; retained_water_sample_time; retained_fluid; retained_fluid_unit; retained_fluid_basis; retained_fluid_method; retained_fluid_state; retained_fluid_source; retained_fluid_sample_time; retained_textile_solid; retained_textile_solid_unit; retained_textile_solid_basis; retained_textile_solid_method; retained_textile_solid_state; retained_textile_solid_source; retained_textile_solid_sample_time; retained_capture_substrate; retained_capture_substrate_unit; retained_capture_substrate_basis; retained_capture_substrate_method; retained_capture_substrate_state; retained_capture_substrate_source; retained_capture_substrate_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; composition; composition_unit; composition_basis; composition_method; composition_state; composition_source; composition_sample_time; property_id; operator_id; event_id; reporting_period; pool_id; responsible_pool_owner; consumer_ids; all_consumer_driver_records; raw_converted_attributed_perreference_state; assignment_scope_ids; same_scope_N_source; time_zone; time_source; coverage_owner; overlap_exclusion; uncertainty_source; numerator_driver; numerator_driver_unit; numerator_driver_basis; numerator_driver_method; numerator_driver_state; numerator_driver_source; numerator_driver_sample_time; denominator_driver; denominator_driver_unit; denominator_driver_basis; denominator_driver_method; denominator_driver_state; denominator_driver_source; denominator_driver_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; same_scope_N; same_scope_N_unit; same_scope_N_basis; same_scope_N_method; same_scope_N_state; same_scope_N_sample_time; transfer_id; parent_material_textile_asset_ids; stream_id; material_identity; origin_guest_operator_provider; EACH_TOTAL_extent; whole_component_membership; separate_material_exclusion; mixed_capture_exclusion; contained_liquid_exclusion; retained_whole_asset_fluid_exclusion; receiver_id; receiver_Product_Waste_status; receiver_status_source; actual_usable_acceptance; treatment_transport_owner; upstream_lifecycle_identical_treatment_coverage; unused_supply_return_match; actual_export_not_closing; no_automatic_credit; sample_id | 追踪真实拒收维修重洗再用退回废弃及接收状态，不把污迹气味标签作自动废物或零。每实际独立材料接收物流分别记录，真实混合股保留整股，各组成是独立原生量的非加和审计。住客废物处理可为住宿义务而不导入全部食品制造。整资产部件保留流体随整股不另作流体废物。净量真实EACH/TOTAL原生组成密度来源和母体关联；接收运输处理与相同全寿命服务覆盖唯一责任。期末内部延续非外送，仅耗用品省配对未耗输出。 | 实际独立接收股kg件数体积和有据换算，各保留组成有独立原生元数据 | 每真实事件及相容计量服务库存寿命区间 | 真实单元夜入住任务报告期间及来源延续消解阶段 | 真实物业单元共用区域及服务商接收交接，全部相关消费者 | 每参考流 | 原始来源校准方法及原生单位基准状态来源样品事件时点；真实责任覆盖不确定性，未知不得按零处理 |
| cp_environment | apartment_unit_service | 实际节点交换事件及解释性物理责任审计 | 实际独立有证环境资源摄取与物种介质释放 | direct_measurement; direct_measurement_unit; direct_measurement_basis; direct_measurement_method; direct_measurement_state; direct_measurement_source; direct_measurement_sample_time; activity; activity_unit; activity_basis; activity_method; activity_state; activity_source; activity_sample_time; applicable_factor; applicable_factor_unit; applicable_factor_basis; applicable_factor_method; applicable_factor_state; applicable_factor_source; applicable_factor_sample_time; composition_fraction; composition_fraction_unit; composition_fraction_basis; composition_fraction_method; composition_fraction_state; composition_fraction_source; composition_fraction_sample_time; fate_fraction; fate_fraction_unit; fate_fraction_basis; fate_fraction_method; fate_fraction_state; fate_fraction_source; fate_fraction_sample_time; release_quantity; release_quantity_unit; release_quantity_basis; release_quantity_method; release_quantity_state; release_quantity_source; release_quantity_sample_time; resource_quantity; resource_quantity_unit; resource_quantity_basis; resource_quantity_method; resource_quantity_state; resource_quantity_source; resource_quantity_sample_time; retained_captured_quantity; retained_captured_quantity_unit; retained_captured_quantity_basis; retained_captured_quantity_method; retained_captured_quantity_state; retained_captured_quantity_source; retained_captured_quantity_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; property_id; operator_id; event_id; reporting_period; pool_id; responsible_pool_owner; consumer_ids; all_consumer_driver_records; raw_converted_attributed_perreference_state; assignment_scope_ids; same_scope_N_source; time_zone; time_source; coverage_owner; overlap_exclusion; uncertainty_source; numerator_driver; numerator_driver_unit; numerator_driver_basis; numerator_driver_method; numerator_driver_state; numerator_driver_source; numerator_driver_sample_time; denominator_driver; denominator_driver_unit; denominator_driver_basis; denominator_driver_method; denominator_driver_state; denominator_driver_source; denominator_driver_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; same_scope_N; same_scope_N_unit; same_scope_N_basis; same_scope_N_method; same_scope_N_state; same_scope_N_sample_time; species_or_resource_identity; particle_class_definition; receiving_or_origin_medium; factor_scope_complete; composition_basis_source; fate_basis_source; factor_applicability_source; capture_contained_exclusions; water_vapour_phase_evidence; combustion_refrigerant_chemical_scope; measurement_location; sample_id; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 基本流绑定前确定实际资源物种颗粒及来源接收介质，向空气水蒸气不是液废或环境液体排放。用实测或相容活动适用系数，仅乘完整系数尚未涵盖且需要的组成去向。排保留捕集受控，未知库存差气味安全表库存非释放或零。资源摄取区别购买产品，不凭余差推氧气取水质量。保留原生单位基准方法状态时点来源和真实责任范围。 | 实际物种资源kg及有据系数测量单位，独立相态介质身份 | 每真实事件及相容计量服务库存寿命区间 | 真实单元夜入住任务报告期间及来源延续消解阶段 | 真实物业单元共用区域及服务商接收交接，全部相关消费者 | 每参考流 | 原始来源校准方法及原生单位基准状态来源样品事件时点；真实责任覆盖不确定性，未知不得按零处理 |

### 计算规则

| rule_id | 适用于 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| occupied_n | cp_stays | N=count_unique_eligible(delivered_unit_night_service_id)，为撤销及更换房核对后的真实有效访客入住服务。一交付服务夜内替换房的全部单元时间段关联一个service_id，不重复N但保留两段资源；真实分别供给两单元则有不同service_ids，不因一个预订合并。采用有来源本地服务夜日历时区DST和实际区间；免费真实合格夜可计，取消未到未提供夜不计。住客拒绝或某清洁任务失败不自动使已提供合格住宿夜被拒收。N0不除，保留真实池资源来源延续承接期间消解关联；责任未明阻断最终化。 | 实际交付夜入住拓扑占用转移记录 | 同范围实际入住单元夜分母 |  |
| resource_scope | cp_utilities; cp_water; cp_operations | 每记录原量采用attributed_resource=compatible_converted_raw_quantity*that_record_documented_share；已归属记录直接用已归属量不变。目标target_cohort互斥记录求和，仅一次q_per_reference=raw_target_cohort_quantity/positive_same_target_N。Already_per_reference不再除。归一化前核对全部使用者及完整期间。 | 记录范围单位换算原生分子分母全部使用者记录N | 每单元夜实际归属资源 |  |
| meter_or_average | cp_utilities | 真实能量为已积分计量进口记录，或actual interval-average power*matching elapsed_duration并作有据原生换算。平均功率须覆盖该实际区间循环待机风机化霜，瞬时铭牌不是耗电量。已积分kWh不再乘时长。购买热服务与燃料现场转换范围互斥，燃烧物种独立有证据。 | 原生进口读数系数或实际区间平均功率经过时间覆盖 | 归属前实际场址能量 |  |
| supply_stock | cp_supplies | S=opening+net_receipts-closing，留存回收含期末；net_receipts=receipt_gross-container_tare仅同实际材料状态单位。总S输入配未耗unused_outward_return输出，或仅耗S-unused_outward_return输入且省匹配输出。EACH乘匹配实际件数一次TOTAL不变，真实单件密度温度换算。原量全部使用者份额后同范围N一次。 | 实际净库存范围件数换算匹配未耗退回 | 互斥材料输入退回口径 |  |
| linen_cycle | cp_linen | 按真实纺织品标识批次和实际洗涤更换事件计数；clean_dry_textile_mass、used_wet_loaded_mass、污染保留水及容器皮重独立。dry_nonwater_mass=wet_sample_mass*(1-w_wet)仅实际水/收到湿分数；同样品相容w_dry=water/dry_nonwater，在百分数转比例后用w_wet=w_dry/(1+w_dry)。干非水可能含污物而非清洁纤维。实际洗涤服务单位换算和纺织品生命周期驱动须有来源相容清洁使用状态，不用标称kg或床数。 | 纺织品事件质量水定义及服务商单位来源 | 实际布草周转服务生命周期归属审计 |  |
| complete_lifetime | cp_assets; cp_linen | lifetime_all_user_driver=compatible_observed_all_user_driver+compatible_sourced_remaining_driver。asset_equivalent=event_quantity*job_driver/lifetime_all_user_driver，对互斥完整寿命事件求和，同范围N一次。重复布草制造更换寿命终结采用已观察加有来源剩余真实使用护理循环服务，涵盖全部使用者及废损；不是每夜新全套或年度N作寿命。 | 完整寿命事件原生作业观察剩余等价责任记录 | 完整建筑设备纺织品服务负担 |  |
| complete_provider | cp_providers | provider_service=sum(actual_native_quantity*physical_equivalence_if_not_already_converted*documented_share_if_not_already_attributed)，明确原量已换算已归属状态。原生物理等价和全部使用者份额须匹配服务商单位质量覆盖。真实缺失上游材料能水化学废水处理资产运输阶段，在完整链前须实际补一次，有完成数据集关联时点时区来源责任数量覆盖证据；待办不是完成。再同范围N一次。 | 真实物理服务包换算状态完整责任矩阵 | 真实完整互斥上游服务 |  |
| freight_sum | cp_freight | actual_payload为真实包装货物质量，含实际布草保留水和全部包装随货支承，仅排非货物车辆容器皮重。EACH乘匹配actual_count一次TOTAL不变。每唯一装载区段原生载荷距离换算transport_work。freight_per_reference=sum_unique_load_leg(transport_work*THAT_record_actual_share)/positive_same_scope_N。已归属每参考流记录不再乘份额或除N，真实空返服务商接收范围唯一责任。 | 原生载荷毛皮重件数距离换算份额覆盖记录 | 每单元夜实际运输t*km |  |
| fluid_roles | cp_refrigerant | 各真实流体来源库存状态须核对opening_installed+opening_stored+opening_recovered+factory_charge_actual_receipt_in_period+standalone_net_receipts+other_actual_receipts等于closing_installed+closing_stored+closing_recovered+unused_standalone_return+usable_recovered_export+contained_waste+direct_release+retained_in_whole_asset_waste+retained_in_part_waste+other_actual_exits，采用相容原生状态，内部补加回收转移相抵一次。opening_stored和closing_stored必须排除已单列的回收子库存；按真实lot/charge/role标识使已装库存回收角色互斥。factory_charge_actual_receipt_in_period仅计本期实际新进入且未在期初或任一其他收货内的原厂充注；other_actual_receipts和other_actual_exits排除每一已列项。已装回收是内部转移，不是新收货。区分补给交付、已装转移、释放；混合物组成按有来源组成去向基准换算。未知差额保留缺口，不作空气排放或零。原厂充注与独立供应责任覆盖明确。 | 实际初始运行库存转移回收外送废物物种来源覆盖 | 互斥实体冷媒传热流体角色审计 |  |
| water_receivers | cp_water; cp_fates; cp_environment | 真实供水其他已证水和库存，与独立实测有来源受控废水、材料保留液水分、实际直接向空气水蒸气及已证其他出口核对。每真实混合物组成有原生相容状态密度温度和独立来源。不凭未知差额制造出口或闭合成蒸气污水纯水释放。混合整股保留组成非加和。 | 真实水原生库存接收状态及独立相态量 | 不凭余差推断的水状态接收审计 |  |
| actual_outlets_species | cp_fates; cp_environment | 实际receiver_transfer_per_reference=compatible actual independent transfer quantity attributed to same cohort/positiveN；库存内部转移非外送，仅耗用供应省配对退回。release_mass=actual measured species mass或相容activity*applicable_species_factor，仅加完整系数尚未覆盖且需要的组成去向。须真实物种粒级空气水土介质及捕集受控排除，再归属同范围N一次。材料库存气味标签余差既不证明释放也不证明零。 | 真实整股组成互斥接收或原生物种介质系数证据 | 实际独立交接及直接物种量 |  |

### 数据质量要求

| requirement_id | 适用于 | 要求 | 证据 |
| --- | --- | --- | --- |
| actual_unit_stay | cp_stays | 真实不可拆单元拓扑厨房私卫服务制度和有效访客单元夜交付日历证据；公开示例不是目标平面图或无人服务证明。 | 单元图库存服务记录真实入住撤销证据 |
| native_temporal_quality | 全部采集协议 | 原生单位基准方法状态来源样品事件时点代表期间不确定性；DST实际经过时间不按标称夜小时。保留计量校准换算原始已归属每参考流范围。 | 原始校准记录及完整消费者日历覆盖 |
| lifecycle_provider_coverage | cp_assets; cp_linen; cp_providers | 完整全使用者已观察有来源剩余寿命及真实上游服务商接收覆盖；真实缺阶段在完整链前完成集成并有状态关联时区责任数量证据。 | 完整寿命及互斥物理责任矩阵 |
| fate_identity_gaps | cp_fates; cp_environment; cp_refrigerant | 须真实物种介质接收和独立组成状态量，不用余差。未知不按零；未声明采用范围时通用区间不是必需，实际数量不确定性验收仍须证据。 | 真实交接测量适用系数证据和明确未解限制 |
| complete_electricity | apartment_unit_service | 最终使用前，按下方完整采集定义将`electricity`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_utilities` |
| complete_delivered_heat | apartment_unit_service | 最终使用前，按下方完整采集定义将`delivered_heat`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_utilities` |
| complete_site_fuel | apartment_unit_service | 最终使用前，按下方完整采集定义将`site_fuel`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_utilities` |
| complete_supplied_water | apartment_unit_service | 最终使用前，按下方完整采集定义将`supplied_water`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_water` |
| complete_cleaning_materials | apartment_unit_service | 最终使用前，按下方完整采集定义将`cleaning_materials`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_supplies` |
| complete_guest_supplies | apartment_unit_service | 最终使用前，按下方完整采集定义将`guest_supplies`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_supplies` |
| complete_refrigerant_supply | apartment_unit_service | 最终使用前，按下方完整采集定义将`refrigerant_supply`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_refrigerant` |
| complete_property_provider | apartment_unit_service | 最终使用前，按下方完整采集定义将`property_provider`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_providers` |
| complete_included_ancillary_service | apartment_unit_service | 最终使用前，按下方完整采集定义将`included_ancillary_service`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_providers` |
| complete_full_life_assets | apartment_unit_service | 最终使用前，按下方完整采集定义将`full_life_assets`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_assets` |
| complete_linen_lifecycle | apartment_unit_service | 最终使用前，按下方完整采集定义将`linen_lifecycle`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_linen` |
| complete_freight | apartment_unit_service | 最终使用前，按下方完整采集定义将`freight`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_freight` |
| complete_direct_resource_uptake | apartment_unit_service | 最终使用前，按下方完整采集定义将`direct_resource_uptake`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_environment` |
| complete_unused_supply_return | apartment_unit_service | 最终使用前，按下方完整采集定义将`unused_supply_return`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_fates` |
| complete_usable_recovered_fluid | apartment_unit_service | 最终使用前，按下方完整采集定义将`usable_recovered_fluid`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_refrigerant` |
| complete_usable_material_export | apartment_unit_service | 最终使用前，按下方完整采集定义将`usable_material_export`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_fates` |
| complete_separate_waste_materials | apartment_unit_service | 最终使用前，按下方完整采集定义将`separate_waste_materials`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_fates` |
| complete_spent_mixed_capture | apartment_unit_service | 最终使用前，按下方完整采集定义将`spent_mixed_capture`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_fates` |
| complete_retired_textile_asset_waste | apartment_unit_service | 最终使用前，按下方完整采集定义将`retired_textile_asset_waste`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_fates` |
| complete_contained_effluent | apartment_unit_service | 最终使用前，按下方完整采集定义将`contained_effluent`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_water` |
| complete_contained_fluid_waste | apartment_unit_service | 最终使用前，按下方完整采集定义将`contained_fluid_waste`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_refrigerant` |
| complete_direct_species_release | apartment_unit_service | 最终使用前，按下方完整采集定义将`direct_species_release`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_environment` |


### 强制清单完成记录

以下记录是强制物理采集和情形展开要求，不是单条清单交换。原有节点、方向、流类型、数量基准、采集协议、库存去向、供应接收和来源义务全部继续有效。正文对这些编号的引用对应这些完成要求。前景数据集完成前，必须将每项真实物料、服务、资产全寿命、废物流或物种介质分别展开为具原生数量和排他覆盖的独立身份交换。保留固定卡只覆盖其真实受支持情形，其余真实情形须无重叠协调。身份、发生或数量缺失仍待采集，不能填零或删项。内部配对交接和组分审计视图不可相加；必要全寿命与供应商阶段必须实际完成一次。

#### electricity

责任节点与原流角色：apartment_unit_service / inputs / product

实际交付给单元共用设施、厨房电器热水制冷通风、真实清洁和门禁数字支持的场址用电，按声明覆盖。未供餐或自助门禁不代表厨房烹饪待机零负荷；服务商已含量须互斥但不遗漏。

本卡为独立身份分支`electricity_ac`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：含入住及待客义务的实际住宿用电
- 流属性/单位：Energy / kWh
- 数量规则：sum(exclusive actual attributed electricity records)/positive_same_scope_N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

范围证据需求：须实际区间kWh或有证区间平均功率时长、进口计量系数、作业覆盖及全部使用者池分子分母，纳必要空置失败义务；无每夜默认基准。

#### delivered_heat

责任节点与原流角色：apartment_unit_service / inputs / product

仅真实计量供热供冷，按实际能量质量边界，不是气体质量或暖通铭牌需求。只有完整供给范围已证时，才从直接燃料转换清单排除同一热任务。

本卡为独立身份分支`delivered_heat_delivered_heat`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际外部交付供热或供冷服务
- 流属性/单位：Energy / MJ
- 数量规则：sum(exclusive compatible attributed delivered thermal energy)/positive_same_scope_N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

范围证据需求：须真实服务商供给表计、冷热身份质量期间原生单位换算和同池范围，不以气候面积假设温度负荷。

#### site_fuel

责任节点与原流角色：apartment_unit_service / inputs / product

仅实际运行路线中的供热热水备用设备等真实燃料身份状态组成和净供给。气体体积转质量须真实相容密度温度压力基准，不设通用燃料；燃烧物种及转换资产范围一次。

- 选定流：已复核现场设施设备的真实燃料供应
- 流属性/单位：Mass / kg
- 数量规则：sum(actual compatible attributed net fuel quantity)/positive_same_scope_N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

范围证据需求：须实际物种配方进口库存耗用、原生质量或有证体积换算、运行范围与物理份额；不能用燃料特定热值系数替代电能。

#### supplied_water

责任节点与原流角色：apartment_unit_service / inputs / product

向经营方设施提供的住客私卫厨房及真实清洁布草作业供水，纳实际负责池待客泄漏义务。继承布草水分或实测废水不是新增供水，不自动供水等于污水。

本卡为独立身份分支`supplied_water_liquid_tap`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：住宿和直接服务任务的实际供水
- 流属性/单位：Volume / m3
- 数量规则：sum(exclusive actual attributed supply volume records)/positive_same_scope_N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

范围证据需求：须实际表计供应账单、原生量及需要时相容密度温度、全部消费者区间份额池与真实去向，无每客升数洗涤余量。

#### cleaning_materials

责任节点与原流角色：apartment_unit_service / inputs / product

条件性实际SKU，包括直接覆盖内真实清洁剂洗涤剂抹布吸收滤材，各独立配方原生单位分别展开。服务商已含化学品不再直接投入；净材料排容器，不规定消毒剂剂量洗涤次数。

本卡为独立身份分支`cleaning_materials_synthetic_detergent`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际净量清洁洗衣和事故耗材
- 流属性/单位：Mass / kg
- 数量规则：实际相容已归属总S或仅耗S-unused_outward_return，再/positive_same_scope_N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据需求：各真实身份组成、净期初收货期末、EACH/TOTAL件数单件或密度温度、配对退回范围来源必需；无洗涤捕集用量默认。

#### guest_supplies

责任节点与原流角色：apartment_unit_service / inputs / product

真实洗浴用品纸巾点心或其他物料按实际SKU原生量覆盖，不把住客自购食品用品当经营方采购，也不推实际配套为零。独立真实产品分别展开，重复餐具电器按生命周期资产。

- 选定流：经营方实际提供的净量住客用品
- 流属性/单位：Mass / kg
- 数量规则：实际相容已归属总供应或仅耗净量/positive_same_scope_N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据需求：须真实SKU包装内容皮重分发库存供应退回证据，耗用与重复责任及食品配套范围，不设每客夜标准包。

#### refrigerant_supply

责任节点与原流角色：apartment_unit_service / inputs / product

仅实际维护作业中独立供给且有名称组成状态的流体。资产生命周期已归属的原厂充注不是每期新收货；补给交付未耗库存已装转移不同于直接释放。

- 选定流：真实独立运行冷媒或传热流体补给
- 流属性/单位：Mass / kg
- 数量规则：实际已归属独立总供应或同范围仅耗供应，再/positive_same_scope_N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerant`

范围证据需求：须流体SKU组成质量分数基准来源、净供应库存、原厂独立负担责任及未耗退回口径，不设通用冷媒补加等于漏失或未知零。

#### property_provider

责任节点与原流角色：apartment_unit_service / inputs / product

仅实际物理定义服务量等价和完整范围，不因远程前台认定直接人员工作缺席。合同费用工时本身不是Item(s)，最终包前保留真实原生服务交换和经核物理等价。

- 选定流：真实互斥清洁远程支持或物业运行服务包
- 流属性/单位：Count / Item(s)
- 数量规则：sum(exclusive actual compatible attributed physical packages)/positive_same_scope_N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_providers`

范围证据需求：须真实任务门禁支持服务单位物理等价、分配驱动和材料公用ICT资产运输处理矩阵，无费用转服务。

#### included_ancillary_service

责任节点与原流角色：apartment_unit_service / inputs / product

条件性住宿合同真实捆绑早餐停车健身等第三方服务，按实际质量供给责任原生单位。物业标签不是实际使用或数量默认，真实已包含义务不得消失；住客另购且不属选定合同的服务区别记录。

- 选定流：经营方真实包含的外部配套服务
- 流属性/单位：Count / Item(s)
- 数量规则：实际完整已归属配套服务的经核原生等价量/positive_same_scope_N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_providers`

范围证据需求：须真实包含、使用或可用性义务、供方单位数量质量和全部覆盖全用户归属证据，不假定早餐泳池健身或金额等价。

#### full_life_assets

责任节点与原流角色：apartment_unit_service / inputs / product

按全使用者阶段归属完整建筑场址装修家具暖通电器门禁数字设施及真实支承，区别布草卡。既有租赁共有产权不擦除内含负担；无合理Item(s)等价的真实原生资产单位须展开。

- 选定流：建筑装修家具设备基础设施的真实全寿命服务
- 流属性/单位：Count / Item(s)
- 数量规则：sum(actual complete-life event equivalents*job_driver/lifetime_all_user_driver)/positive_same_scope_N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`

范围证据需求：须真实资产制造维护更换寿命终结、完整全使用者已观察及有来源剩余原生驱动与池闲置责任、等价不确定性敏感性覆盖，不用年度N或最大capacity寿命。

#### linen_lifecycle

责任节点与原流角色：apartment_unit_service / inputs / product

真实床品毛巾纺织品制造修补更换寿命终结等价量，基准为有据清洁干态，涵盖全部用户循环拒收物料，不是每夜新套。洗涤护理按现场或外包一次；数据集已含同护理须明确重叠归属，不能擦除护理任务。

- 选定流：真实重复使用经营方布草纺织品全寿命服务
- 流属性/单位：Mass / kg
- 数量规则：sum(actual textile lifecycle event quantity*job_driver/lifetime_all_user_driver)/positive_same_scope_N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_linen`

范围证据需求：须真实纺织品ID组成原生清洁干质量、周转维修废损、已观察有来源剩余寿命驱动及上游护理寿命终结责任，无床数等kg或寿命默认。

#### freight

责任节点与原流角色：apartment_unit_service / inputs / product

真实布草用品维护废物等服务责任内运输，住客交通不默认纳入。货物含实际污布保留水包装随货支承一次，不只干布草。

- 选定流：实际唯一装载区段的用品布草接收运输
- 流属性/单位：Mass * Length / t*km
- 数量规则：sum_unique_load_leg(actual_transport_work*THAT_record_share)/positive_same_scope_N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_freight`

范围证据需求：须唯一装载区段实际整包载荷EACH/TOTAL件数非货物皮重距离原生换算及本记录份额空返服务商接收覆盖，无里程载量默认。

#### direct_resource_uptake

责任节点与原流角色：apartment_unit_service / inputs / elementary

仅真实运行系统及平衡需要、跨声明边界的真实资源身份来源介质。购买水燃料为产品供应，不重复资源开采；不凭余差推空气氧气或其他摄取。

- 选定流：有独立证据的实际环境资源摄取
- 流属性/单位：Mass / kg
- 数量规则：实际相容已归属实测或有据资源质量/positive_same_scope_N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_environment`

范围证据需求：须资源物种来源介质、直接取用测量或适用原生推导和范围来源，不因有燃烧空气而假定摄取。

#### unused_supply_return

责任节点与原流角色：apartment_unit_service / outputs / product

仅总输入口径，真实未耗可用用品从匹配库存外送；仅耗用输入省此交换。未耗独立冷媒只有匹配供应库存才可退回，回收安装流体不是未耗退回。期末回收安装流体布草资产转移或无关来源不作该抵扣。

- 选定流：实际配对可用未耗独立用品外送退回
- 流属性/单位：Mass / kg
- 数量规则：实际匹配已归属未耗外送材料质量/positive_same_scope_N，仅总输入口径
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据需求：须同库存SKU状态净量来源配对与真实可用接收交付证据，非期末或自动避免生产抵扣。

#### usable_recovered_fluid

责任节点与原流角色：apartment_unit_service / outputs / product

真实独立接收可用回收流体出口，区别保留安装库存回收及受控废物。来源可能是资产已归属原厂充注，不得抵无关当前补给。实体交接不自动避免生产抵扣。

- 选定流：真实可用回收冷媒或传热流体外送
- 流属性/单位：Mass / kg
- 数量规则：实际相容已归属可用回收流体外送质量/positive_same_scope_N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerant`

范围证据需求：须真实充注独立来源、流体组成原生量和接收可用外送证据、期末保留直接废物排除，不因回收即推外送。

#### usable_material_export

责任节点与原流角色：apartment_unit_service / outputs / product

条件性真实可用出口，排未耗用品退回期末和服务参考流，须真实接收状态保留内容。不同产品按实际原生交换展开，不自动再用回收抵扣。

- 选定流：真实独立接收可用纺织材料或资产相关外送
- 流属性/单位：Mass / kg
- 数量规则：实际独立已归属可用外送质量/positive_same_scope_N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据需求：须实际材料布草资产身份、原生净量保留水及真实接收生命周期责任互斥，无假定回收比例。

#### separate_waste_materials

责任节点与原流角色：apartment_unit_service / outputs / waste

条件性各实际纸塑料食物包装等独立材料接收物流，无关流分别展开。住客来源废物处置可属住宿责任，而不导入全部住客自购食品生产。无统一混合配方或强制回收。

- 选定流：实际独立交接的服务及住客来源固废
- 流属性/单位：Mass / kg
- 数量规则：实际相容已归属独立材料交接质量/positive_same_scope_N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据需求：须真实来源物流材料状态净皮重保留内容、独立接收分类运输处理范围，不由采购减库存推废物或标准每客废物率。

#### spent_mixed_capture

责任节点与原流角色：apartment_unit_service / outputs / waste

仅真实混合废流，基材保留液残渣在实测整股内，组成不另加出口。排实际单收液材料直接物种；不同接收独立流展开，真实混合物保留整股。

- 选定流：实际废混合清理抹布吸收材滤材
- 流属性/单位：Mass / kg
- 数量规则：实际已归属混合捕集净交接质量/positive_same_scope_N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据需求：须基材输入清理事件整股质量及各保留组成原生量基准方法状态时点来源接收排除关联，无吸收率或余差污染物。

#### retired_textile_asset_waste

责任节点与原流角色：apartment_unit_service / outputs / waste

条件性真实布草家具设备部件废流按接收材料状态展开，保留流体内容非加和。真实寿命终结处理一次：同处理已在全寿命资产服务范围内不再加负担，但物理去向和实际缺处理仍须覆盖。

- 选定流：实际独立废弃布草设备资产相关物料
- 流属性/单位：Mass / kg
- 数量规则：实际相容已归属独立退役物料交接质量/positive_same_scope_N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据需求：须真实退役拒收决定、原资产布草谱系、整件组成净皮重状态来源接收处理责任，无统一寿命或自动整电器废弃。

#### contained_effluent

责任节点与原流角色：apartment_unit_service / outputs / waste

条件性实际受控收集液，声明真实水固体化学住客来源组成。独立卫生清洁洗涤接收流分别展开，真实混合接收流保留非加和组成。非直接环境排口纯水或自动供水总量。

- 选定流：实际独立收集并送处理的卫生清洁洗涤废水
- 流属性/单位：Mass / kg
- 数量规则：实际相容已归属受控接收废水质量/positive_same_scope_N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

范围证据需求：须实际体质量相容密度温度、收集来源接收处理及保留液排除真实组成，不由客数清洁配方设污水COD系数。

#### contained_fluid_waste

责任节点与原流角色：apartment_unit_service / outputs / waste

仅独立交接的实际受控废流体，有真实身份组成状态接收处理，非直接大气物种。退役电器部件内保留流体随整股，是非加和内容审计而非额外流体出口。

- 选定流：实际受控废冷媒或传热流体
- 流属性/单位：Mass / kg
- 数量规则：实际相容已归属独立受控废流体质量/positive_same_scope_N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerant`

范围证据需求：须实际回收收集转移充注来源、混合组成去向接收及整资产保留直接排除，处理一次，不默认排空漏失。

#### direct_species_release

责任节点与原流角色：apartment_unit_service / outputs / elementary

条件性实际物种粒级介质分别展开。仅有证据才计向空气水蒸气及真实燃烧冷媒化学直排物种。受控废水捕集物库存气味缺失质量不等于基本流释放或零。

本卡为独立身份分支`direct_species_release_co2_fossil_air`; `direct_species_release_methane_fossil_air`; `direct_species_release_nitrous_oxide_air`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际向已证环境释放的物种或颗粒
- 流属性/单位：Mass / kg
- 数量规则：实际相容已归属实测物种或适用活动系数且仅必要组成去向，再/positive_same_scope_N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_environment`

范围证据需求：须真实物种粒级介质独立质量或适用来源活动系数及必要组成去向、捕集受控资产责任取样时间证据，无未知按零或通用VOC混合。


## 9. 验证规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| reference_delivery | 参考数量名称关联Count必须表示实际私用不可拆分公寓入住单元夜，扣撤销并有平面图可预订拓扑访客日历更房DST交付证据。非预订住客可售夜积分或固定24h。拓扑未知排除。 |  |
| resources_not_erased | 真实厨房电器热水共用区支持和清洁资源纳入，不因自助或无餐食销售推无人无清洁无烹饪负荷。空置封房取消未到未完成期间及N0保留实际资源资产归属。必要池待客失败义务必须进入负责住宿池总量再除真实入住N，仅列台账不是排除。住客拒绝清洁不自动从N删除真实已提供夜。 |  |
| complete_life_and_users | 真实完整全部使用者建筑装修设备布草生命周期，已观察加有来源剩余及相容正驱动；各服务商承运配套租户和阶段责任一次。无年度N寿命积分费用驱动默认仅面积等客人分配或跨期重复制造。 |  |
| provider_laundry | 真实布草状态服务单位及完整能水化学废水处理纺织租用资产运输覆盖须匹配现场或外包、原生换算和真实补阶段完成。住客洗衣机可用非经营方布草证据。未付未计量供应范围不置零。 |  |
| quantity_return_freight | 各操作数有自身原生单位基准方法状态事件时点来源及换算归属范围；净供应排容器皮重，总输入配输出或仅耗输入省输出。EACH/TOTAL相容实际件数一次，本记录运输份额SUM内/N一次；已归属每参考流不再变。 |  |
| actual_fates | 真实水蒸气向空气基本流区别受控液废物和实际直排物种；整股混合独立接收成员非加和。原厂独立未耗回收期末可用外送废物直接冷媒角色明确，不抵无关供应或补加作排放。接收运输处理唯一责任，不自动避免生产抵扣。fluid_roles中stored排单列回收子库存，原厂新入排期初其他收货，其他收支排每一已列项，按真实lot/charge/role分区，内部回收不作外收。 |  |
| evidence_and_language | 最终交换须实际数量原生来源、具体身份及属性单位核实；候选身份未明或单缺通用数值Range不代表零或方法无效。实际采用规格外源区间须相容可追溯基准，经验警戒区间须独立可比观测。ENZH规则卡片CP原字段和官方投影一致。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 每实际交付已入住公寓单元夜的住宿前景生产，含完整上游基础设施接收接口 |
| downstream_use | 真实经核实互斥上游服务生命周期接收组合一次，不是仅运营GHG或预订产权计数 |
| allowed_use | 实际单一不可拆私用自包含访客单元、厨房私卫、少于每日清洁并有真实记录；同物理方法不随匹配产权标签改变 |
| excluded_use | 未知可拆锁连通亲子合并共享床拓扑、永久照护营地、无证完整链或导入品牌HCMI默认因子 |
| required_metadata | property_id; operator_id; unit_id; unit_plan_source; indivisible_non_lockoff_confirmation; private_kitchen_bathroom_scope; bookable_unit_inventory_link; visitor_stay_id; service_night_id; actual_guest_count; actual_arrival_departure; local_night_definition; time_zone; DST_rule_source; room_change_transfer_ids; complimentary_status; cancellation_no_show_reversal_ids; actual_housekeeping_service_regime; actual_cleaning_linen_events; included_ancillary_scope; meter_provider_coverage; reporting_period |
| required_quality_disclosure | 实际量属性单位身份、服务夜入住住客可售期间区别、全使用者资源原量已归属范围全资产已观察剩余及服务商洗涤配套去向覆盖、不确定性未明限制 |
| update_trigger | 真实拓扑服务制度夜日历配套访客支持资源布草服务商生命周期接收物种或物理分配证据改变 |


## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-63112 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/63112 | 实际标题说明为访客提供少于每日清洁，并在该分类排除分时产权及半永久寄宿；标题不证明无人或无清洁。 |
| unsd-cpc3-63113 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/63113 | 分时访客住宿单列分类，不单凭产权证明另一物理住宿方法。 |
| numa-faq | literature | https://pages.numastays.com/faq | 公开运营示例：PIN数字支持、周转及非每日清洁、实际配套和物业洗衣可用性；不规定通用频次剂量、无人或经营方布草外包。 |
| numa-studio-context | literature | https://numastays.com/de/locations/germany/berlin/mitte/nook/extra-large-studio-with-kitchen | 已发表索引房型有私卫厨房语境，直接页面设施可能未加载；不推目标平面图不可拆性面积容量电器清单，须真实单元证据。 |
| wsha-hcmi-context | literature | https://sustainablehospitalityalliance.org/resource/hotel-carbon-measurement-initiative/ | 公开运营碳语境中的入住客房每日指标、现场能耗冷媒和适用外包作业；非全LCA边界或当前完整方法背书，不导入示例后备系数基准排除。 |
