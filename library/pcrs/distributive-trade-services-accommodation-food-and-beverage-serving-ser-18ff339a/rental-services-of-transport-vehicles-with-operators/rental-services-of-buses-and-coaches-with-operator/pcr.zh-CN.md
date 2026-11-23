---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.rental-services-of-transport-vehicles-with-operators.rental-services-of-buses-and-coaches-with-operator
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 配驾驶员的巴士及客车租赁服务

## 1. 范围与适用性

本PCR覆盖配操作驾驶员按一段时间出租巴士及客车，通常不依赖距离；承租方决定车辆如何何时运行及班次路线其他运行事项。所供产品是按原租用义务提供真实带操作车辆可用性。参考为一次独立完成验收租用约定，声明正值真实验收可用时间、车辆或原定车队配置容量操作责任区域作业交还车端口。允许待命可无乘客无距离而履行可用。不同租时容量控制作业画像不能因各计一项就等价。

排除本地城市郊区巴士客车包车服务64118及长途包车64223、作为运输销售的客运、无驾驶员车辆租用、仅操作劳动及资产制造。月账单全车预订驾驶员存在距离收费燃料付款人不能独定带操作租赁；核实真实直接供应功能及承租方运行指令。独立下游客运分开。真实驾驶员工作准备合格待命调位失败救援替车必要支持仍在因果租用边界。不强制通用租约法律车大小驾驶时限条款。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.rental-services-of-transport-vehicles-with-operators.rental-services-of-buses-and-coaches-with-operator |
| classification_refs | CPC 3.0 66011; exact |
| covered_products | 全部真实配驾驶员且承租方指令的按期巴士客车租赁 |
| excluded_products | 64118/64223包车承运、裸租、仅操作劳动、资产制造 |
| representative_product | 已验收配驾驶员巴士或客车租用约定 |
| production_route | 真实带操作租用可用运行待命周转及归属完整服务资产生命 |
| market_state | 正值真实验收可用时间原租用范围及真实承租供应责任 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 功能对象（What） | 已验收配驾驶员巴士或客车租用约定 |
| 数量（How much） | 1项原始有界独立验收带操作租用约定，须正值真实验收可用时间H |
| 质量（How well） | 真实巴士客车或原车队配置容量承租指令操作驾驶责任原可用质量及验收替车交接 |
| 时间或周期（How long or cycle） | 原真实租期验收可用区间加因果准备调位待命失败替车还车及完整全用户服务资产生命 |
| 参考流关联（reference_flow_link） | `accepted_operated_bus_hire` |

| 字段 | 值 |
| --- | --- |
| 参考数量（Reference amount） | 1 |
| 参考产品流（Reference product flow） | 已验收配驾驶员巴士或客车租用约定 |
| 参考流属性（Reference flow property） | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组（Reference unit group） | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位（Reference unit） | Item(s) |
| 必要限定项（Required qualifiers） | genuine_operated_rental_not_64118_64223_charter; original_hire_obligation; positive_actual_accepted_availability_time; actual_bus_coach_fleet_configuration_capacity; renter_schedule_route_operational_direction; provider_driver_maintenance_safety_responsibility; availability_quality_replacement_delivery_redelivery_gates; actual_region_duty_standby_position_failure; fuel_energy_payer_independent_native_supply; all_user_same_asset_useful_life_capacity_time; provider_phase_event_site_period_coverage; exhaustive_node_owned_atomic_expansions; uncertainty |

各限定项须在真实数据集元数据参考说明申明；缺少必须事实则参考不完整。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| hire_count | 参考产品 | 物品数量 | Item(s) | 一项为一原始独立验收带操作租用义务，具正真实验收可用H及原配置容量区域控制端口。真实验收可用不要求正距离乘客载荷乘客占用。不逐行程换班账单购油验收替车新增输出。真实原始独立有界租用可分别计数，失败部分不得事后重设完成。 |
| native_quantity | 全部行 | 真实原生属性 | 真实原生单位 | 区分真实可用驾驶待命不可用替车区间，记车辆配置容量全部用户。保留真实原生物料状态端口及换算所需实测密度组成温压低位热值。外部交流用原生低位热值MJ，核实1 kWh = 3.6 MJ；内部发电非第二外购电。不按乘客公里分制造或假定怠速零能。 |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 原带操作租用真实车辆驾驶员可用验收接口 |
| starting_condition_role | 采集门不消除更早准备期初客户燃料既有资产生命 |
| product_classification_scope | 完整66011配驾驶员按期租用，排除64118/64223包车 |
| recursive_input_rule | 真实原生带操作租用供应方仅一次替代精确自营已含范围且缺口保留 |
| upstream_dataset_requirement | 真实功能原生单位端口车辆容量时间控制区域作业生命供应范围 |
| disclosure | genuine_operated_rental_not_64118_64223_charter; original_hire_obligation; positive_actual_accepted_availability_time; actual_bus_coach_fleet_configuration_capacity; renter_schedule_route_operational_direction; provider_driver_maintenance_safety_responsibility; availability_quality_replacement_delivery_redelivery_gates; actual_region_duty_standby_position_failure; fuel_energy_payer_independent_native_supply; all_user_same_asset_useful_life_capacity_time; provider_phase_event_site_period_coverage; exhaustive_node_owned_atomic_expansions; uncertainty |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| full_rental_function | 全部节点 | 本PCR覆盖配操作驾驶员按一段时间出租巴士及客车，通常不依赖距离；承租方决定车辆如何何时运行及班次路线其他运行事项。所供产品是按原租用义务提供真实带操作车辆可用性。参考为一次独立完成验收租用约定，声明正值真实验收可用时间、车辆或原定车队配置容量操作责任区域作业交还车端口。允许待命可无乘客无距离而履行可用。不同租时容量控制作业画像不能因各计一项就等价。 | unsd-cpc3-66011 |
| carriage_exclusion | 全部节点 | 排除本地城市郊区巴士客车包车服务64118及长途包车64223、作为运输销售的客运、无驾驶员车辆租用、仅操作劳动及资产制造。月账单全车预订驾驶员存在距离收费燃料付款人不能独定带操作租赁；核实真实直接供应功能及承租方运行指令。独立下游客运分开。真实驾驶员工作准备合格待命调位失败救援替车必要支持仍在因果租用边界。不强制通用租约法律车大小驾驶时限条款。 | unsd-cpc3-66011 |
| whole_actual_duty | operated_hire; turnaround_support | 含真实驾驶操作工作必要调度准备检验运行应待命车库客户交还车调位停留清洗故障搜救不可用责任真实验收替车。记录承租班次路线指令与供应驾驶维护安全责任，不意味着不受限危险控制。真实准备空调热充电辅助负荷无乘客仍保留。人支持按真实应承担供应服务，不虚构代谢饮食因子。 | guardian-leasing |
| native_supply_title | 全部节点 | 真实消耗燃料充电能及归属供应损失无论所有者承租驾驶付款产权均兼容上游供应充电一次，含期初客户能源。闭合购买库存提取使用返还，购买提取非两供应储备不全消耗。记录真实柴油电混合气其他动力，不假定全存在。内部电回收物非新购产品。 | ghg-product-2011 |
| all_user_asset_life | lifecycle_support | 须真实车辆总成动力电池充电空调轮胎制动部件车库道路车间支持设施及全部真实生命事件。保留制造建设安装投产维护修理更换退役及已含初始件，供应整总成可一身份。同资产同组阶段按有据有效生命可用容量时间或兼容因果作业归全部实际租用自营承运支持用户，不按乘客通量或每约定整制造。既有租赁资产不免费。各未知真实身份必须展开，不作清单桶。 | ghg-product-2011 |
| exact_native_provider | 全部节点 | 真实租用分租驾驶支持充电清洗维护救援处理设施供应方保留原生功能单位端口覆盖阶段事件场址期间。仅一次替代精确匹配自营供应直接生命范围且必要缺口保留。分包或含油账单不证明完整生命或去掉承租付款能源。同一供应义务不重复最终客运租用输出。 | ghg-product-2011 |
| exclusive_fates | 全部节点 | 库存接收期末使用返还回收外运废物环境项互斥，内部回收不另加接收使用外运；回收物只留存真实后用或一个目的。区分供应水直接取用循环径流蒸发耗用，按真实来源接收子介质原生状态。真实收集混合物可一已识别废物流，不全组分排放或自动循环信用。 | ghg-product-2011 |
| mandatory_atomic_completion | 全部节点 | 各cp_expand_为清单外必需同节点采集要求。逐真实事件须发生或有据未发生及穷尽子登记；逐实际子项唯一行单一可识别产品配方总成功能服务收集废物流物质粒径、真实方向类型状态端口原生属性单位数量来源同节点协议已核UUID接收全用户供应范围。分独立身份替代物环境子介质，不绑要求标签总尾气NOx/VOC/PM或资产废物列表。真实总成收集混合物不虚构组分。适用身份数量去向范围未知阻断完整前景包最终交换；检查通过不解决事实。 | ghg-product-2011 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| operated_hire | 巴士客车配驾驶员可用真实作业 | required | 真实承租指令适用租赁 | foreground | accepted_operated_bus_hire |
| turnaround_support | 准备周转驾驶支持 | required | 真实应准备支持责任 | foreground | accepted_operated_bus_hire |
| lifecycle_support | 全用户资产维护原生供应生命 | required | 真实归属完整服务系统生命 | foreground | accepted_operated_bus_hire |

全部节点关联同一验收租用约定，条件原子卡仅真实发生适用；下列必须展开要求不是虚构交换或零结论。替车换班下游行程不自动新增租用输出。

### 过程：巴士客车配驾驶员可用真实作业 (`operated_hire`)

#### 输入

##### 产品流

###### 柴油 (`actual_diesel`)

仅条件真实通用柴油配方端口，其他已知等级另展开身份。含真实归属使用损失及兼容期初客户供应一次无论付款，不全储备或重复购买提取。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 / kg
- 数量规则：真实归属原生量 / 兼容验收约定N仅一次
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_hire`
- 来源：

###### 交流电 (`operation_ac`)

仅真实兼容运行车辆充电端口外供交流，记充损期初电池能上游端口；内部发电已知直流供应方已含范围排除。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：低位热值 / MJ
- 数量规则：真实归属原生量 / 兼容验收约定N仅一次
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_hire`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收配驾驶员巴士或客车租用约定 (`accepted_operated_bus_hire`)

一个原始独立验收带操作租用义务具正真实验收可用时间及原车辆车队配置容量控制端口作业。不得用客运或制造代理替代。

- 选定流：已验收配驾驶员巴士或客车租用约定
- 流属性/单位：物品数量 / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_hire`
- 来源：`ghg-product-2011`

##### 废物流

##### 基本流

### 过程：准备周转驾驶支持 (`turnaround_support`)

#### 输入

##### 产品流

###### 交流电 (`turnaround_ac`)

真实独立计量车库周转清洗支持端口外供交流，区别车辆充电供应方已含范围，同一物理电不重复。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：低位热值 / MJ
- 数量规则：真实归属原生量 / 兼容验收约定N仅一次
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_turnaround`
- 来源：

###### 自来水 (`supplied_tapwater`)

仅真实兼容供应自来水产品端口，原水取用收集废水耗水独立且真实发生必须展开，上游配送范围明确。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 / kg
- 数量规则：真实归属原生量 / 兼容验收约定N仅一次
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_turnaround`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：全用户资产维护原生供应生命 (`lifecycle_support`)

#### 输入

##### 产品流

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废润滑油 (`used_lubricating_oil`)

真实兼容产生端口收集废润滑油，处理另列除非证明已含，不全部车间废物含油水燃料污泥轮胎制动物。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：质量 / kg
- 数量规则：真实归属原生量 / 兼容验收约定N仅一次
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_life`
- 来源：

##### 基本流

## 7. 分配与联产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| direct_first | 全部节点 | 先直接分配真实原生事件供应；不可分共同池选择并论证同功能因果需求，因果分离不可行时才用明确有据替代，披露不确定性敏感性及全部真实接收者。付款收入乘客通量账单比例不自动作物理分配。 | ghg-product-2011 |
| same_asset_full_life | lifecycle_support | 每同资产同组阶段按正值兼容全寿命可用容量时间或有据因果作业在全部真实租用、自营承运、待命支持用户节点场址期间中归属一次。初始整总成部件与另供更换件互斥。预测寿命需求须来源敏感性更新；不假定寿命或既有资产零负荷。 |  |
| failure_and_return | 全部节点 | 按真实产生节点时序标记不可用、失败、取消、退回、修理及替车，回收返工闭环和真实退出关联该节点。负荷留在负责的一致服务池，拒收待核作业不计验收N。履行原租用的验收替车不新增一项；真实范围变更保留原历史。 |  |
| intended_outputs | 全部节点 | 列举真实预期输出与交接，含不同原生共同服务和回收产品，无则明确未发生。本义务唯一租用参考输出不重复行程客票客户运输。区分预期产品、残余、废物与内部循环。先直接归属，再明确有据跨输出分配；不自动反事实回收抵扣。 |  |
| provider_cells | 全部节点 | 原生供应方需求仅替代精确已含阶段事件场址期间一次；保留真实服务功能单位接口、全用户资产生命及剩余供应直接维护退役缺口。含盖供应方与其已含前景交换不得叠加，付款产权不等于覆盖。 |  |

## 8. 前景数据采集、计算与质量规则

合格Count、可用容量时间、原生库存供应全寿命归属及必须原子完成为PCR明确建模选择。不提供通用租时乘客占用可用因子驾驶员资源率燃料排放因子资产寿命或回收抵扣。各cp_expand_为清单外必须同节点要求；未知真实子项在发生未发生及穷尽已核原生子记录完成前仍待核。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_hire | operated_hire | native_events | 验收租用及运行原生记录 | original_hire_id;chronological_amendment;vehicle_or_fleet;configuration;capacity;renter_directions;driver_provider;responsibilities;gates;region;duty;H;driving_standby_unavailable_replacement_intervals;N;fuel_stock;AC_meter;initial_energy;payer;source;receiver | 关联原始合同、调度、验收、车辆驾驶日志、校准仪表及库存返还记录；无论付款停租均保留物理作业，逐项独立限定H及N。 | 实际原生单位 | 各真实事件及一致租用队列 | 真实合同报告及全寿命期间 | 本节点全部真实车辆驾驶员车库车间支持供应方用户 | 每个声明的参考流 | 原始合同校准库存仪表事件记录原生来源接收子项证据及不确定性 |
| cp_turnaround | turnaround_support | native_events | 准备周转及驾驶员记录 | hire_id;site;driver;event;physical_transfer_id;own_or_provider;disjoint_AC_meter;supplied_water;native_stock;service;source;receiver;period;duty | 采集真实应承担准备、检验、清洗、支持用品服务；将水及互斥支持交流计量与车辆充电及供应方精确范围核对。 | 实际原生单位 | 各真实事件及一致租用队列 | 真实合同报告及全寿命期间 | 本节点全部真实车辆驾驶员车库车间支持供应方用户 | 每个声明的参考流 | 原始合同校准库存仪表事件记录原生来源接收子项证据及不确定性 |
| cp_life | lifecycle_support | native_events | 全用户资产生命及维护记录 | asset_id; assembly_initial_inclusions; technology; useful_life; forecast_or_observation; every_user_node_site_period; native_capacity_time; phase_event; initial_replacement_retirement; provider_covered_cells; opening_closing_stock; generated_collected_lubricant; internal_receipts_dispatches; transfer_id; receiver; source; uncertainty | 核对真实资产部件服务登记、全寿命用户需求、维护及交接收据；保留因果阶段归属、预测不确定性、供应方精确范围；收集油非处理。 | 实际原生单位 | 各真实事件及一致租用队列 | 真实合同报告及全寿命期间 | 本节点全部真实车辆驾驶员车库车间支持供应方用户 | 每个声明的参考流 | 原始合同校准库存仪表事件记录原生来源接收子项证据及不确定性 |
| cp_expand_fuels | operated_hire | collection_requirement | 必须身份展开：fuels | event_id;occurrence_or_evidenced_absence;exhaustive_child_register;child_row_id;single_identity;direction;flow_type;actual_state_gate;native_property_unit_quantity;verified_UUID_support;source_receiver_compartment;node_protocol;every_user_life;provider_phase_site_period;uncertainty | 识别逐项真实动力及辅助燃料、配方、气体、外供电或热，含已知柴油等级、充电损失、期初及客户持有能源；证明固定卡精确覆盖，其他原生产品逐项新增。记录柴油、电动、混合动力共存、能源路径、真实上游供应方及互斥计量库存接口。 本要求在清单之外，禁止绑定其标签。最终前景交换前须解决每真实子项及发生或未发生证据；缺失事实仍为阻断项。 | 实际原生单位 | 各真实事件及一致租用队列 | 真实合同报告及全寿命期间 | 本节点全部真实车辆驾驶员车库车间支持供应方用户 | 每个声明的参考流 | 原始合同校准库存仪表事件记录原生来源接收子项证据及不确定性 |
| cp_expand_operation_materials | operated_hire | collection_requirement | 必须身份展开：operation_materials | event_id;occurrence_or_evidenced_absence;exhaustive_child_register;child_row_id;single_identity;direction;flow_type;actual_state_gate;native_property_unit_quantity;verified_UUID_support;source_receiver_compartment;node_protocol;every_user_life;provider_phase_site_period;uncertainty | 识别运行节点逐项真实润滑剂、冷却液、制冷剂、还原剂配方、流体、清洁或驾驶员用品及包装。完整供应配方可保留单一身份；分别记录真实补充、初装、库存、回收及捕集物，不虚构组分。 本要求在清单之外，禁止绑定其标签。最终前景交换前须解决每真实子项及发生或未发生证据；缺失事实仍为阻断项。 | 实际原生单位 | 各真实事件及一致租用队列 | 真实合同报告及全寿命期间 | 本节点全部真实车辆驾驶员车库车间支持供应方用户 | 每个声明的参考流 | 原始合同校准库存仪表事件记录原生来源接收子项证据及不确定性 |
| cp_expand_operation_services | operated_hire | collection_requirement | 必须身份展开：operation_services | event_id;occurrence_or_evidenced_absence;exhaustive_child_register;child_row_id;single_identity;direction;flow_type;actual_state_gate;native_property_unit_quantity;verified_UUID_support;source_receiver_compartment;node_protocol;every_user_life;provider_phase_site_period;uncertainty | 识别逐项真实带操作分租、替班驾驶、调度、交还车、调位、故障救援、回收及其他运行功能服务；记录原生功能单位、合同客户操作责任、来源接收方、供应方精确已含供应/直接/资产阶段及剩余缺口一次。 本要求在清单之外，禁止绑定其标签。最终前景交换前须解决每真实子项及发生或未发生证据；缺失事实仍为阻断项。 | 实际原生单位 | 各真实事件及一致租用队列 | 真实合同报告及全寿命期间 | 本节点全部真实车辆驾驶员车库车间支持供应方用户 | 每个声明的参考流 | 原始合同校准库存仪表事件记录原生来源接收子项证据及不确定性 |
| cp_expand_operation_resources | operated_hire | collection_requirement | 必须身份展开：operation_resources | event_id;occurrence_or_evidenced_absence;exhaustive_child_register;child_row_id;single_identity;direction;flow_type;actual_state_gate;native_property_unit_quantity;verified_UUID_support;source_receiver_compartment;node_protocol;every_user_life;provider_phase_site_period;uncertainty | 按物质或资源、原生属性状态、来源及区室识别运行时各真实直接自然资源取用，含区别供应自来水的真实原水取用；分别记录真实取用、消耗、循环及返回。 本要求在清单之外，禁止绑定其标签。最终前景交换前须解决每真实子项及发生或未发生证据；缺失事实仍为阻断项。 | 实际原生单位 | 各真实事件及一致租用队列 | 真实合同报告及全寿命期间 | 本节点全部真实车辆驾驶员车库车间支持供应方用户 | 每个声明的参考流 | 原始合同校准库存仪表事件记录原生来源接收子项证据及不确定性 |
| cp_expand_operation_wastes | operated_hire | collection_requirement | 必须身份展开：operation_wastes | event_id;occurrence_or_evidenced_absence;exhaustive_child_register;child_row_id;single_identity;direction;flow_type;actual_state_gate;native_property_unit_quantity;verified_UUID_support;source_receiver_compartment;node_protocol;every_user_life;provider_phase_site_period;uncertainty | 识别逐项真实独立收集运行废物流、捕集尾气物、废流体、损坏产品或外运回收物及真实接收处理服务；记录产生、收集、储存、交接及去向，不用车辆废物总桶或全作排放。 本要求在清单之外，禁止绑定其标签。最终前景交换前须解决每真实子项及发生或未发生证据；缺失事实仍为阻断项。 | 实际原生单位 | 各真实事件及一致租用队列 | 真实合同报告及全寿命期间 | 本节点全部真实车辆驾驶员车库车间支持供应方用户 | 每个声明的参考流 | 原始合同校准库存仪表事件记录原生来源接收子项证据及不确定性 |
| cp_expand_operation_releases | operated_hire | collection_requirement | 必须身份展开：operation_releases | event_id;occurrence_or_evidenced_absence;exhaustive_child_register;child_row_id;single_identity;direction;flow_type;actual_state_gate;native_property_unit_quantity;verified_UUID_support;source_receiver_compartment;node_protocol;every_user_life;provider_phase_site_period;uncertainty | 按确切物质或实测粒径、碳源、相态及接收区室识别真实燃烧、蒸发、制冷剂逸散、轮胎/制动/道路磨损、泄漏、水或土壤排放。区分物质质量、元素质量及CO2e，以及总生成与捕集留存转移质量。NOx、VOC、PM及尾气总量是须展开物质粒径的证据，不是身份。 本要求在清单之外，禁止绑定其标签。最终前景交换前须解决每真实子项及发生或未发生证据；缺失事实仍为阻断项。 | 实际原生单位 | 各真实事件及一致租用队列 | 真实合同报告及全寿命期间 | 本节点全部真实车辆驾驶员车库车间支持供应方用户 | 每个声明的参考流 | 原始合同校准库存仪表事件记录原生来源接收子项证据及不确定性 |
| cp_expand_operation_cooutputs | operated_hire | collection_requirement | 必须身份展开：operation_cooutputs | event_id;occurrence_or_evidenced_absence;exhaustive_child_register;child_row_id;single_identity;direction;flow_type;actual_state_gate;native_property_unit_quantity;verified_UUID_support;source_receiver_compartment;node_protocol;every_user_life;provider_phase_site_period;uncertainty | 列举真实独立预期共同服务或产品及交接，无则提供明确未发生证据；区分另一边界的下游客运、内部工作、残余物与废物。仅新增真实独立原子输出卡及有据归属决策，不自动替代抵扣。 本要求在清单之外，禁止绑定其标签。最终前景交换前须解决每真实子项及发生或未发生证据；缺失事实仍为阻断项。 | 实际原生单位 | 各真实事件及一致租用队列 | 真实合同报告及全寿命期间 | 本节点全部真实车辆驾驶员车库车间支持供应方用户 | 每个声明的参考流 | 原始合同校准库存仪表事件记录原生来源接收子项证据及不确定性 |
| cp_expand_turnaround_products | turnaround_support | collection_requirement | 必须身份展开：turnaround_products | event_id;occurrence_or_evidenced_absence;exhaustive_child_register;child_row_id;single_identity;direction;flow_type;actual_state_gate;native_property_unit_quantity;verified_UUID_support;source_receiver_compartment;node_protocol;every_user_life;provider_phase_site_period;uncertainty | 识别准备、检验、周转的逐项真实清洁剂配方、消毒剂、驾驶员用品、备耗品、包装、燃料、热、水及能源产品。证明独立计量交流及自来水精确覆盖；每种不同产品接口有独立子项，车辆充电不重复。 本要求在清单之外，禁止绑定其标签。最终前景交换前须解决每真实子项及发生或未发生证据；缺失事实仍为阻断项。 | 实际原生单位 | 各真实事件及一致租用队列 | 真实合同报告及全寿命期间 | 本节点全部真实车辆驾驶员车库车间支持供应方用户 | 每个声明的参考流 | 原始合同校准库存仪表事件记录原生来源接收子项证据及不确定性 |
| cp_expand_driver_services | turnaround_support | collection_requirement | 必须身份展开：driver_services | event_id;occurrence_or_evidenced_absence;exhaustive_child_register;child_row_id;single_identity;direction;flow_type;actual_state_gate;native_property_unit_quantity;verified_UUID_support;source_receiver_compartment;node_protocol;every_user_life;provider_phase_site_period;uncertainty | 识别租用应承担的逐项真实准备、车库、清洗、检验、驾驶员支持住宿、管理、服务移动及支持供应方。不虚构饮食代谢流；记录真实原生用品服务、责任、场址期间及供应方已含项目，包括客户或第三方提供。 本要求在清单之外，禁止绑定其标签。最终前景交换前须解决每真实子项及发生或未发生证据；缺失事实仍为阻断项。 | 实际原生单位 | 各真实事件及一致租用队列 | 真实合同报告及全寿命期间 | 本节点全部真实车辆驾驶员车库车间支持供应方用户 | 每个声明的参考流 | 原始合同校准库存仪表事件记录原生来源接收子项证据及不确定性 |
| cp_expand_turnaround_resources | turnaround_support | collection_requirement | 必须身份展开：turnaround_resources | event_id;occurrence_or_evidenced_absence;exhaustive_child_register;child_row_id;single_identity;direction;flow_type;actual_state_gate;native_property_unit_quantity;verified_UUID_support;source_receiver_compartment;node_protocol;every_user_life;provider_phase_site_period;uncertainty | 按资源、来源区室、原生属性识别准备支持各真实直接自然资源取用；区分购水、原水取用及耗水、循环、返回。 本要求在清单之外，禁止绑定其标签。最终前景交换前须解决每真实子项及发生或未发生证据；缺失事实仍为阻断项。 | 实际原生单位 | 各真实事件及一致租用队列 | 真实合同报告及全寿命期间 | 本节点全部真实车辆驾驶员车库车间支持供应方用户 | 每个声明的参考流 | 原始合同校准库存仪表事件记录原生来源接收子项证据及不确定性 |
| cp_expand_turnaround_wastes | turnaround_support | collection_requirement | 必须身份展开：turnaround_wastes | event_id;occurrence_or_evidenced_absence;exhaustive_child_register;child_row_id;single_identity;direction;flow_type;actual_state_gate;native_property_unit_quantity;verified_UUID_support;source_receiver_compartment;node_protocol;every_user_life;provider_phase_site_period;uncertainty | 识别逐项真实分开收集的洗车废水、污水、清洗残余、包装及其他收集流、真实接收处理服务与互斥物理交接。真实收集混合物可保留一已识别流，组分排放须另有证据。 本要求在清单之外，禁止绑定其标签。最终前景交换前须解决每真实子项及发生或未发生证据；缺失事实仍为阻断项。 | 实际原生单位 | 各真实事件及一致租用队列 | 真实合同报告及全寿命期间 | 本节点全部真实车辆驾驶员车库车间支持供应方用户 | 每个声明的参考流 | 原始合同校准库存仪表事件记录原生来源接收子项证据及不确定性 |
| cp_expand_turnaround_releases | turnaround_support | collection_requirement | 必须身份展开：turnaround_releases | event_id;occurrence_or_evidenced_absence;exhaustive_child_register;child_row_id;single_identity;direction;flow_type;actual_state_gate;native_property_unit_quantity;verified_UUID_support;source_receiver_compartment;node_protocol;every_user_life;provider_phase_site_period;uncertainty | 按真实物质粒径及空气/水/土壤来源接收区室识别准备支持的全部真实直接排放、逸散物、泄漏、消耗蒸发及出水；区分送处理转移与环境释放。 本要求在清单之外，禁止绑定其标签。最终前景交换前须解决每真实子项及发生或未发生证据；缺失事实仍为阻断项。 | 实际原生单位 | 各真实事件及一致租用队列 | 真实合同报告及全寿命期间 | 本节点全部真实车辆驾驶员车库车间支持供应方用户 | 每个声明的参考流 | 原始合同校准库存仪表事件记录原生来源接收子项证据及不确定性 |
| cp_expand_vehicle_assets | lifecycle_support | collection_requirement | 必须身份展开：vehicle_assets | event_id;occurrence_or_evidenced_absence;exhaustive_child_register;child_row_id;single_identity;direction;flow_type;actual_state_gate;native_property_unit_quantity;verified_UUID_support;source_receiver_compartment;node_protocol;every_user_life;provider_phase_site_period;uncertainty | 识别逐项真实初始车辆整总成及另供动力、电池、充电机、空调、轮胎制动等部件，覆盖制造、安装、投产、维护、修理、更换、退役。保留整总成已含初始部件及真实技术差异；每资产事件按兼容完整有效寿命在全部真实租用、自营承运、待命及支持用户间归属一次。 本要求在清单之外，禁止绑定其标签。最终前景交换前须解决每真实子项及发生或未发生证据；缺失事实仍为阻断项。 | 实际原生单位 | 各真实事件及一致租用队列 | 真实合同报告及全寿命期间 | 本节点全部真实车辆驾驶员车库车间支持供应方用户 | 每个声明的参考流 | 原始合同校准库存仪表事件记录原生来源接收子项证据及不确定性 |
| cp_expand_infrastructure_assets | lifecycle_support | collection_requirement | 必须身份展开：infrastructure_assets | event_id;occurrence_or_evidenced_absence;exhaustive_child_register;child_row_id;single_identity;direction;flow_type;actual_state_gate;native_property_unit_quantity;verified_UUID_support;source_receiver_compartment;node_protocol;every_user_life;provider_phase_site_period;uncertainty | 识别逐项真实可归属车库、道路、车间、充电设施、工具及支持设施总成，含原生建设维护更换报废阶段及每消费节点场址期间用户。既有或租赁资产不为零；供应方已含整资产与部件不得重叠。 本要求在清单之外，禁止绑定其标签。最终前景交换前须解决每真实子项及发生或未发生证据；缺失事实仍为阻断项。 | 实际原生单位 | 各真实事件及一致租用队列 | 真实合同报告及全寿命期间 | 本节点全部真实车辆驾驶员车库车间支持供应方用户 | 每个声明的参考流 | 原始合同校准库存仪表事件记录原生来源接收子项证据及不确定性 |
| cp_expand_maintenance_products | lifecycle_support | collection_requirement | 必须身份展开：maintenance_products | event_id;occurrence_or_evidenced_absence;exhaustive_child_register;child_row_id;single_identity;direction;flow_type;actual_state_gate;native_property_unit_quantity;verified_UUID_support;source_receiver_compartment;node_protocol;every_user_life;provider_phase_site_period;uncertainty | 识别尚未含于供应总成或供应方的逐项真实更换件、润滑剂制冷剂冷却液配方、修理维护材料、耗品、包装及维护能源水供应；按真实接口跟踪初装、更换、库存及回收。 本要求在清单之外，禁止绑定其标签。最终前景交换前须解决每真实子项及发生或未发生证据；缺失事实仍为阻断项。 | 实际原生单位 | 各真实事件及一致租用队列 | 真实合同报告及全寿命期间 | 本节点全部真实车辆驾驶员车库车间支持供应方用户 | 每个声明的参考流 | 原始合同校准库存仪表事件记录原生来源接收子项证据及不确定性 |
| cp_expand_life_providers | lifecycle_support | collection_requirement | 必须身份展开：life_providers | event_id;occurrence_or_evidenced_absence;exhaustive_child_register;child_row_id;single_identity;direction;flow_type;actual_state_gate;native_property_unit_quantity;verified_UUID_support;source_receiver_compartment;node_protocol;every_user_life;provider_phase_site_period;uncertainty | 识别逐项真实车辆租赁、制造修理维护检验、设施、运输、回收处理功能服务及原生单位接口。建阶段事件场址期间覆盖矩阵，精确替代自营已含范围一次并补缺口，不用通用向自身购服务代理。 本要求在清单之外，禁止绑定其标签。最终前景交换前须解决每真实子项及发生或未发生证据；缺失事实仍为阻断项。 | 实际原生单位 | 各真实事件及一致租用队列 | 真实合同报告及全寿命期间 | 本节点全部真实车辆驾驶员车库车间支持供应方用户 | 每个声明的参考流 | 原始合同校准库存仪表事件记录原生来源接收子项证据及不确定性 |
| cp_expand_life_wastes | lifecycle_support | collection_requirement | 必须身份展开：life_wastes | event_id;occurrence_or_evidenced_absence;exhaustive_child_register;child_row_id;single_identity;direction;flow_type;actual_state_gate;native_property_unit_quantity;verified_UUID_support;source_receiver_compartment;node_protocol;every_user_life;provider_phase_site_period;uncertainty | 识别维护、更换、退役逐项真实收集流，含电池、轮胎、制动物、流体、拆除总成及真实回收处理服务。废润滑油卡仅覆盖兼容产生端口收集流。明确各接收方、物理转移及报废分配，不自动循环抵扣。 本要求在清单之外，禁止绑定其标签。最终前景交换前须解决每真实子项及发生或未发生证据；缺失事实仍为阻断项。 | 实际原生单位 | 各真实事件及一致租用队列 | 真实合同报告及全寿命期间 | 本节点全部真实车辆驾驶员车库车间支持供应方用户 | 每个声明的参考流 | 原始合同校准库存仪表事件记录原生来源接收子项证据及不确定性 |
| cp_expand_life_releases_resources | lifecycle_support | collection_requirement | 必须身份展开：life_releases_resources | event_id;occurrence_or_evidenced_absence;exhaustive_child_register;child_row_id;single_identity;direction;flow_type;actual_state_gate;native_property_unit_quantity;verified_UUID_support;source_receiver_compartment;node_protocol;every_user_life;provider_phase_site_period;uncertainty | 将各真实直接资源取用及维护资产生命周期释放分别识别为子项，按资源或确切物质粒径、方向类型、原生属性、来源接收区室记录。跟踪制冷剂库存、捕集物、泄漏及真实生命事件去向，不用投入释放合并卡或假定全释放。 本要求在清单之外，禁止绑定其标签。最终前景交换前须解决每真实子项及发生或未发生证据；缺失事实仍为阻断项。 | 实际原生单位 | 各真实事件及一致租用队列 | 真实合同报告及全寿命期间 | 本节点全部真实车辆驾驶员车库车间支持供应方用户 | 每个声明的参考流 | 原始合同校准库存仪表事件记录原生来源接收子项证据及不确定性 |
| cp_expand_life_cooutputs | lifecycle_support | collection_requirement | 必须身份展开：life_cooutputs | event_id;occurrence_or_evidenced_absence;exhaustive_child_register;child_row_id;single_identity;direction;flow_type;actual_state_gate;native_property_unit_quantity;verified_UUID_support;source_receiver_compartment;node_protocol;every_user_life;provider_phase_site_period;uncertainty | 识别逐项真实独立交接预期回收材料产品或独立维护服务，无则未发生取证；区分废物、残余、内部循环。须具体输出身份、真实质量需求及明确直接优先归属，不作反事实替代抵扣。 本要求在清单之外，禁止绑定其标签。最终前景交换前须解决每真实子项及发生或未发生证据；缺失事实仍为阻断项。 | 实际原生单位 | 各真实事件及一致租用队列 | 真实合同报告及全寿命期间 | 本节点全部真实车辆驾驶员车库车间支持供应方用户 | 每个声明的参考流 | 原始合同校准库存仪表事件记录原生来源接收子项证据及不确定性 |
| cp_expand_operation_physical_transfers | operated_hire | collection_requirement | 必须身份展开：operation_physical_transfers | event_id;occurrence_or_evidenced_absence;exhaustive_child_register;child_row_id;single_identity;direction;flow_type;actual_state_gate;native_property_unit_quantity;verified_UUID_support;source_receiver_compartment;node_protocol;every_user_life;provider_phase_site_period;uncertainty | 识别本节点全部真实相关且分别量化的噪声、振动、热、生物或其他物理转移，记录真实来源接收、频率地点期间及已核原生属性单位数量。各独立物理交换分开，不虚构质量单位或未知适用当零。 本要求在清单之外，禁止绑定其标签。最终前景交换前须解决每真实子项及发生或未发生证据；缺失事实仍为阻断项。 | 实际原生单位 | 各真实事件及一致租用队列 | 真实合同报告及全寿命期间 | 本节点全部真实车辆驾驶员车库车间支持供应方用户 | 每个声明的参考流 | 原始合同校准库存仪表事件记录原生来源接收子项证据及不确定性 |
| cp_expand_turnaround_physical_transfers | turnaround_support | collection_requirement | 必须身份展开：turnaround_physical_transfers | event_id;occurrence_or_evidenced_absence;exhaustive_child_register;child_row_id;single_identity;direction;flow_type;actual_state_gate;native_property_unit_quantity;verified_UUID_support;source_receiver_compartment;node_protocol;every_user_life;provider_phase_site_period;uncertainty | 识别本节点全部真实相关且分别量化的噪声、振动、热、生物或其他物理转移，记录真实来源接收、频率地点期间及已核原生属性单位数量。各独立物理交换分开，不虚构质量单位或未知适用当零。 本要求在清单之外，禁止绑定其标签。最终前景交换前须解决每真实子项及发生或未发生证据；缺失事实仍为阻断项。 | 实际原生单位 | 各真实事件及一致租用队列 | 真实合同报告及全寿命期间 | 本节点全部真实车辆驾驶员车库车间支持供应方用户 | 每个声明的参考流 | 原始合同校准库存仪表事件记录原生来源接收子项证据及不确定性 |
| cp_expand_life_physical_transfers | lifecycle_support | collection_requirement | 必须身份展开：life_physical_transfers | event_id;occurrence_or_evidenced_absence;exhaustive_child_register;child_row_id;single_identity;direction;flow_type;actual_state_gate;native_property_unit_quantity;verified_UUID_support;source_receiver_compartment;node_protocol;every_user_life;provider_phase_site_period;uncertainty | 识别本节点全部真实相关且分别量化的噪声、振动、热、生物或其他物理转移，记录真实来源接收、频率地点期间及已核原生属性单位数量。各独立物理交换分开，不虚构质量单位或未知适用当零。 本要求在清单之外，禁止绑定其标签。最终前景交换前须解决每真实子项及发生或未发生证据；缺失事实仍为阻断项。 | 实际原生单位 | 各真实事件及一致租用队列 | 真实合同报告及全寿命期间 | 本节点全部真实车辆驾驶员车库车间支持供应方用户 | 每个声明的参考流 | 原始合同校准库存仪表事件记录原生来源接收子项证据及不确定性 |
| cp_acceptance_cohort | operated_hire | 参考义务兼容性与跨期队列 | 原约验收与事件台账 | obligation_id;original_amendments;function;configuration;capacity_native_unit;accepted_H;quality;technical_commercial_roles;region_duty;delivery_redelivery_gates;compatibility_decision;opening_ongoing;new_obligations;completed_accepted;failed_cancelled;closing_ongoing;event_id;contributing_node;period;pool_owner;provider_cells;quantity_method;range_evidence | 逐原始义务核对合同、验收与完整周期事件，保留截止点状态及贡献节点，执行reference_compatibility与completed_obligation_cohort。未完成负荷随自身义务保留；失败归属须因果证据。按发生或有证据未发生完成真实子项登记；行级护栏须独立兼容证据。 | Item(s); actual time and capacity units; actual native units | 逐真实义务及报告截止点 | 完整义务周期及可追踪期间 | 本节点参考义务及明确关联贡献者 | 每个声明参考流，按兼容完整履约队列汇总 | 原约及时序变更、验收、校准计量与事件所有者、独立样本和换算依据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_once | 全部节点 | q_ref = sum(q_attributed_native) / N。N为独立验收原始合格租用约定的一致正计数，不平均不同租用强度；逐项保留真实H、容量、配置、区域作业。 选择分子及N前须执行reference_compatibility与completed_obligation_cohort。 | q_attributed_native; N; H | 每合格Item(s)原生量 |  |
| asset_phase_share | lifecycle_support | q_asset_phase = q_native_phase * d_hire / D_all_users。采用兼容正值同资产全寿命因果可用容量时间需求，含全部真实用户且阶段份额闭合。不同资产组阶段供应方范围不用虚构共同分母。乘客公里不自动作制造分母。 仅当证据证明目标租用/队列覆盖同一资产/事件相关寿命内全部兼容使用者需求时，才允许份额为1。全部真实使用者的份额须合计为1；不得默认计入整项资产。 | q_native_phase; d_hire; D_all_users | 阶段归属原生资产量 |  |
| exclusive_stock | 全部节点 | opening + external_receipts + internal_receipts + generated = closing + actual_use + outward + loss，逐项界定库存边界、兼容计量状态及互不重叠期间。generated为有证据的本库存产生量，包括收集废物或捕集物，不是第二次外部供应。各项须互斥；内部转入转出以transfer_id配对，在合并边界抵消，同一库存边界内循环不新增接收或使用量。区分初装、储备、返还及回收；耗用/损失的供应产品（含期初/客户库存）无论谁付款均计兼容上游供应一次，不将自行产生废物再次作为采购。 | opening; external_receipts; internal_receipts; generated; closing; actual_use; outward; loss | 闭合原生物料能源库存 |  |
| external_ac | operated_hire; turnaround_support | E_MJ = 3.6 * E_kWh，仅兼容外供交流，原生低位热值。运行充电与周转互斥计量、期初储能、损失、供应方接口范围须闭合。内部发电不另作外购产品。 | E_kWh; meter_gate; initial_energy; provider_coverage | 原生外供交流MJ一次 |  |
| release_fates | 全部节点 | 各真实物质粒径按实际技术作业碳源接收区室测量或有据兼容计算；总生成、留存、捕集、转移、真实释放去向互斥闭合。原始尾气NOx/VOC/PM合计非物质质量。收集废物流不等于组分排放；CO2e非CO2质量。 | native_activity; compatible_method; actual_species_fraction; fates | 各真实区室特定释放 |  |
| site_period_aggregation | 全部节点 | 将全部车辆驾驶员车库车间道路支持供应方及真实合同报告生命周期期间索引；各物理转移事件唯一所有者并关联共同租用边界。归属原始量先汇总后归一化，论证队列选择权重代表性，遗漏重叠保留待核。 | site_id; period; event_owner; native_quantity; cohort; N | 完整一致归属队列 |  |
| reference_compatibility | 全部真实行及义务 | 在合并或比较每次租用结果前，逐原始义务记录兼容性决策。须具有相同所供功能、兼容真实配置与采用原生单位的所租容量或功能能力、针对所声明每次租用参考相等的验收可用时间H、等价验收质量、运行与商业责任、交还接口、地区及作业。单位换算须已核支持；容差仅涵盖有证据的测量不确定性，不得掩盖不同服务功能或时长。H不同或容量、控制、作业、接口不兼容时保持分层，除非每项受影响数量均有记录且受物理证据支持地转换为一个明确声明的共同参考。Count、价格、名义车队容量及相同CPC代码均不能证明等价。事实缺失阻断合并；一项仍为一个真实原始验收义务。 | cp_acceptance_cohort; actual native records | 有证据的兼容队列、唯一归属与行级证据决策 |  |
| completed_obligation_cohort | 参考输出及关联贡献节点 | 本次租用参考采用明确的完整履约队列。逐报告截止点保留期初在履行义务、本期新增义务、已完成验收义务、终止失败或取消义务及期末在履行义务，记录原始编号及时序变更。各实物事件归属真实义务及节点或一个有证据的共享池。对每项计入N的义务收齐整个因果服务周期，包括报告窗口之前的事件；不得将日历期内全部采购或在履行合同活动除以该期完成数。在履行活动随自身义务保留至以后核对，不得当零或计为验收的小数项。失败或取消负荷保持独立可追踪，仅可经有记录的因果服务池归属进入验收队列，不得任意转嫁其他产品或期间。期间与完整义务台账须核对且事件不重复。N=0时保留负荷，不报告有限每项强度。按期间提供的服务输出须另有明确兼容参考并经审查，不得静默重释本Count。 | cp_acceptance_cohort; actual native records | 有证据的兼容队列、唯一归属与行级证据决策 |  |
| foreground_expansion_reconciliation | 全部真实行及义务 | 逐必须展开协议建立由其声明节点负责的适用性登记，状态为已发生、有证据未发生或待核。已发生分支须有穷尽真实子项清单；逐子项记录唯一行编号、方向类型、真实身份状态接口、原生属性单位数量及方法、来源接收去向、实物转移编号及协议、供应商精确已含阶段事件场址期间，以及适用时资产全部使用者寿命归属。未发生决策须有带日期原始记录及明确节点期间范围；无证据即待核。先在兼容库存转换接收接口核对未分配的真实物料、水、碳和能源台账，再分配环境负荷；已分配数量不能替代实物守恒。内部转移须有配对原生量及唯一保管事件所有者，不是新增外部供应或释放。不绑定协议标签或虚构混合物流组分。真实发生性、身份、数量、去向或覆盖待核阻断具体前景包完成；PCR合同检查本身不能关闭该登记。 | cp_acceptance_cohort; actual native records | 有证据的兼容队列、唯一归属与行级证据决策 |  |
| conditional_range_guardrails | 全部真实行及义务 | 固定参考输出量属于归一化定义，不是观测得率分布。对其他每个真实清单行，在采用数值QA护栏前采集独立兼容参考样本或物理方法约束。记录行及节点、发生条件、配置容量与H分层、供应商状态接口、原生单位及换算依据、样本来源期间、方法、上下界及不确定性。仅在相同声明基准上比较同类数量；每次租用的分子不能直接与每小时或每质量上下界比较。不得使用待验证批次自身最小或最大值验证自身。兼容数值范围缺失属于待核证据需求，不是零、已接受默认值或异常的证明。不虚构通用每次租用区间，不以暂定估计替代测量。升级审核状态前须审查每个必需行级范围决策及支持证据；待核范围保持披露。 | cp_acceptance_cohort; actual native records | 有证据的兼容队列、唯一归属与行级证据决策 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| original_hire_evidence | 参考产品 | 原始合同及时序变更证明按期租用、承租方班次路线指令、操作责任、接口、真实验收H及N；付款不能独证，可用可零距离乘客占用。 | cp_hire |
| technology_parent_delta | 全部节点 | 母活动为巴士客车配驾驶员租用可用；记录真实驱动充电辅助实现及拓扑、材料、计算、资产生命、验证差异。不声称柴油电动混合为通用路线，共存互斥及原生库存计量路径须当前车辆运行证据。 | cp_expand_fuels;cp_expand_vehicle_assets |
| atomic_completion | every cp_expand_ | 每必须同节点要求须穷尽真实发生未发生及子登记。逐真实子项单一身份、唯一原生行、数量、已核UUID支持、来源接收接口及原始全用户供应生命覆盖。适用身份数量去向范围未知阻断完整前景生产。 | all cp_expand_ protocols |
| all_user_provider_life | lifecycle_support | 记录真实全寿命用户阶段技术初始更换退役事件及供应方精确范围；校准测量或有据兼容方法预测保留不确定敏感性。既有租赁资产客户付能源不免费。 | cp_life |
| sites_periods_fates | 全部节点 | 全部真实贡献者报告生命周期期间物理转移库存接收方关联一个因果租用边界；证明场址期间事件流不漏不重，保留真实环境物质介质废物去向，不缺失当零。 | cp_hire;cp_turnaround;cp_life |
| cohort_and_evidence_gate | all contributing nodes | 逐义务兼容性、跨期状态、真实子项及独立范围证据须可追踪。未知事实不当零，未完成义务不混入完成队列。 | cp_acceptance_cohort |

## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| reference_acceptance | 全部节点 | 按真实直接功能承租指令核完整带操作租用范围及64118/64223排除；参考关联名称Count支持N正验收H配置容量控制接口区域作业一致。不设正距离乘客占用门。 |  |
| atomic_final_gate | 全部节点 | 各必须cp_expand_须有据发生未发生及穷尽真实子项，具独立原子已核原生身份量接口同节点协议。真实适用身份数量去向来源接收全用户供应范围待核阻断完整前景包最终交换。要求不是已解决清单行，自动PCR检查通过不等于真实前景完成。 |  |
| route_and_native_energy | 全部节点 | 母带操作租用及真实技术差异共存互斥库存计量接口须取证。条件卡仅精确真实身份状态接口适用。外供交流原生低位热值MJ/kWh转换一次，无内部能源重复或付款排除。 |  |
| full_life_and_providers | 全部节点 | 须正值兼容同资产全用户全寿命归属阶段期间场址所有者初始更换互斥供应方精确范围缺口。不按乘客通量分制造、无依据的每约定整项资产归属、无据预测或自营供应负荷重复。 |  |
| failure_cooutputs_sites | 全部节点 | 按产生节点追拒收失败取消退回修理替车到真实闭环退出，保负荷排待核拒收N。列预期输出交接区别废物残余，论证因果归属，列全部场址期间用户，原生量汇总后一次归一化。 |  |
| native_fates | 全部节点 | 按真实来源接收物质粒径碳源相态资源环境区室兼容方法闭合库存全部物理交接。收集废物处理产品回收环境释放独立，不假定零、全库存释放或自动替代抵扣。 |  |
| reference_compatibility_gate | 全部贡献节点 | 合并前按实际功能、配置容量、验收H、质量、责任、作业及接口核查reference_compatibility；无支持组合须保持分层。 |  |
| completed_obligation_cohort_gate | 全部贡献节点 | 依据截止点状态及完整周期事件唯一归属核查completed_obligation_cohort；不得将未完成活动或待归属失败负荷静默除以完成数N，N=0不报告有限强度。 |  |
| foreground_expansion_reconciliation_gate | 全部贡献节点 | 分配前逐必须同节点协议、具体子项及实物台账核查foreground_expansion_reconciliation；适用性、身份、数量、去向或供应商重叠待核阻断前景完成。 |  |
| conditional_range_guardrails_gate | 全部贡献节点 | 将conditional_range_guardrails与固定参考定义分别核查；数值护栏须独立兼容证据、共同基准及已审核范围，不得用待验批次自证或虚构通用上下界。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 合格巴士客车配驾驶员租用前景清单供下游process/lifecyclemodel投影。 |
| allowed_use | 真实独立验收按期租用，承租运行指令正值H及统一容量配置控制接口区域作业，完成原子展开原生上游完整全用户生命身份数据审核后使用。 |
| excluded_use | 64118/64223包车客运裸租仅操作劳动未限定Count不同租用平均客户能源免费正距离占用作强制可用门或待核展开当零。 |
| required_metadata | genuine_operated_rental_not_64118_64223_charter; original_hire_obligation; positive_actual_accepted_availability_time; actual_bus_coach_fleet_configuration_capacity; renter_schedule_route_operational_direction; provider_driver_maintenance_safety_responsibility; availability_quality_replacement_delivery_redelivery_gates; actual_region_duty_standby_position_failure; fuel_energy_payer_independent_native_supply; all_user_same_asset_useful_life_capacity_time; provider_phase_event_site_period_coverage; exhaustive_node_owned_atomic_expansions; uncertainty; compatibility_decision; completed_obligation_cohort; row_range_evidence_status |
| required_quality_disclosure | 原约变更租用H失败替车原生来源库存全部真实场址期间用户完整资产生命供应范围及待核子项数量身份去向缺口不确定性。 |
| update_trigger | 真实功能承租操作责任配置容量时间接口区域作业技术能源供应商寿命分配真实材料废物物质区室去向变化。 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-66011 | official_guidance | UNSD,CPC Version3.0,66011,current note accessed23October2026. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/66011 | 实际官方说明仅支持按期租用承租班次路线及64118/64223排除，无能源因子通用租条车队默认。 |
| guardian-leasing | literature | Guardian Bus Lines,Bus Leasing,actual body accessed23October2026. https://guardianbuslines.ca/services/bus-leasing.php | 单一供应方例仅支持限定租期专用车公司驾驶员容量服务区域维护替车问题，不建立全球条款全部技术CPC归属或数量默认。 |
| ghg-product-2011 | standard | WRI/WBCSD,Product Life Cycle Accounting and Reporting Standard,2011,ch6-9. https://ghgprotocol.org/product-standard | 仅一般功能生命周期数据质量分配原则；合格租用Count可用容量时间原生库存供应完整全用户生命及原子完成门为PCR明确建模选择，不声称标准原式。 |
