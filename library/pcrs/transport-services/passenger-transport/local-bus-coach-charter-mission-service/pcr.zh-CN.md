---
pcr_id: pcr.local-bus-coach-charter-mission-service
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 本地巴士和客车包车任务服务

## 1. 范围与适用性

本PCR适用于城市及郊区内真实非定班带司机租用巴士或机动客车包车运输任务。运营方统一负责约定任务，定义真实团体服务对象角色、车辆活动路线目的地停站返程时长质量及履约接受。通常预定线路时刻、一般按时距离计价和常见多目的地不是绝对门槛。须声明真实本地地域功能班期控制责任，重复客户类型学生职工团体类似公开路线预约时刻计费单位均不能单独证明包车定班特定使用者运输或客户完全控制租赁。

参考为一项真实已完成本地完整团体包车任务，不是一个乘客运输区段座位可用巴士车辆小时天司机班次发票订单付款。任务可真正需要多辆并行车辆活动替代车辆司机更替内部运输区段等待，须保留完整真实成员数量而不增最终任务产出。合同订单可含多个独立交付任务，须按真实交付边界兼容质量区分，不按文件车队车辆计数。实际乘客区间载客为次级暴露，不得假定容量或作为将整任务拆为人次的分母。

须按真实原约定团体服务程度必要路线时长质量、时序修订及接受交付证明包车任务履行。保留提前终止中断部分失败未到取消活动及真实承诺交付差异，不能事后缩失败承诺范围造完整成功。真正修订接受任务或独立部分产出须真实范围可比性。不能套用任何静止可用即完成汽车租用的规则；待命取消无人情形只有实际合格包车任务义务接受证据独立证明完整履行时才计完成，否则保留因果负荷且不造产出。N为可比已完成本地任务数，N=0无有限任务强度。

本方法覆盖全部真实合格巴士客车驱动配置，不限条件柴油纯电客车示例。实际柴油生物燃料混动燃料电池电驱及其他真实驱动须自身完整车辆原生燃料供应储存动力控制辅助运营维护退役物种去向记录。厂商燃料电池客车为物理技术案例，不证明城市郊区包车资格或零全寿命负荷。普通有轨电车等非巴士客车产品不会因搭载同团体变成本包车。缺数据UUID是完成缺口而非驱动排除。

排除客户完全控制的带司机巴士租赁中非包车、最终观光巴士体验功能、普通公共特定使用者定班、独立预约及真实独立其他方式。须判断实际团体运输履行责任及客户控制内容，包车送团体到景点不自动观光；全部真实内含运输附带食品水导游无障碍司机休息过夜支持保留。独立销售不同产品须细分分配，不能默删。全部实际载客空载调位返程恢复等待失败司机支持平台场地道路充电及巴士组件全寿命活动按真实负责者全使用者分母覆盖一次。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.local-bus-coach-charter-mission-service |
| classification_refs | CPC3.0 64118 Local bus and coach charter services; dedicated full actual scope, exact |
| covered_products | 全部真实驱动配置的合格城市郊区内非定班运营负责租用巴士机动客车团体包车任务 |
| excluded_products | 非包车客户完全控制租赁、观光最终体验、公共特定使用者定班、独立预约、不同城际长途或非巴士客车功能 |
| representative_product | 已完成的本地城市及郊区巴士或客车包车任务 |
| production_route | 真实约定本地团体包车任务、全部车辆司机内部活动附带项完整寿命及有据接受完成 |
| market_state | 确定团体路线时长质量交付边界真实已完成本地包车任务 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 已完成的本地城市及郊区巴士或客车包车任务 |
| How much | 1项真实已完成本地完整团体包车任务 |
| How well | 实际城市郊区非定班包车控制责任团体车队司机连续性路线停站返程时长修订接受质量 |
| How long or cycle | 真实约定交付本地任务时段加支持完整活动资产寿命，披露时序范围变化 |
| reference_flow_link | completed_local_charter_mission |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已完成的本地城市及郊区巴士或客车包车任务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 物品数量单位 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | actual_64118_local_urban_suburban_geography; non_scheduled_operator_charter_vs_full_client_control; original_mission_group_extent_itinerary_stops_return; actual_vehicles_drivers_passengers_and_continuity; actual_duration_quality_accessibility; chronological_amendments_and_accepted_completion; partial_failed_cancelled_no_show_and_standby_evidence; actual_propulsion_native_supply_stock_and_fates; driver_and_included_incidental_function_boundaries; same_period_comparable_mission_strata; provider_native_demand_exact_covered_cells; same_asset_positive_all_user_useful_duty; known_substance_receiver_subcompartment_and_uncertainty |

必需限定信息须在数据包元数据过程说明参考流备注或等效处声明，缺失即定义不完整。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| mission_count | reference product | Number of items | Item(s) | N 为声明队列中真实完成且功能兼容包车任务的正数。按任务验收规则证明已交付路径团体质量；合同、发票、预留座位、车辆发车、团体人数或已付费部分作业均不能直接确定 N。 |
| actual_exposure | all inventory rows | Native compatible property | Actual native unit | 分别采集任务数、真实区间人数、车辆作业、真实距离及历时工作等待时长。旅客距离可由真实区间另行披露，但不得假设其或车小时将计数换成另一参考。 |
| native_chemistry | all inventory rows | Native compatible property | Actual native unit | 体积转质量须有真实兼容密度状态。电量 kWh 仅采用已核实3.6MJ/kWh。保留燃料碳源、溶液浓度、物种质量与C/N/CO2当量及真实受纳子区室，不默认转换或用通用尾气分子。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 真实承运负责任务、团体车队作业记录及有据供应端口 |
| starting_condition_role | 真实采集覆盖接口，不是上游或既有资产零负荷 |
| product_classification_scope | 仅64118真实城市郊区内非定班租用巴士客车包车，全部真实合格驱动，一般通常线路计价说明非绝对 |
| recursive_input_rule | 同功能外包完成任务在真实原生端口使用一次；仅展开缺单元，不增加最终任务 |
| upstream_dataset_requirement | 真实供应原生量边界技术地理期间生命周期质量兼容；缺阶段必补 |
| disclosure | 真实任务验收团体车辆路径时长、供应自有单元、附随功能、空驶失败作业、寿命分配及缺口 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| mission_boundary | charter_mission | 声明一次验收任务交付端口，含真实单程返程路径及多站等待。保留团体、旅客、车辆及承运组织角色，不将其等同。真实空驶、中断失败作业具有归属负荷，但不产生已完成任务输出。 |  |
| provider_ownership | charter_mission | 对每项真实活动、供应商、负荷阶段、车辆和期间指定唯一责任。完整外包运输或购入附驾驶车辆原生小时投入，只能按真实供应功能端口及覆盖使用，不自动等于最终包车任务。完整供应商结果与其确切已含前景组成只取其一；缺阶段仍须补齐。 | ghg-product-standard-2011 |
| actual_incidentals | charter_mission | 按约定任务确定真实已含驾驶休息住宿、安全无障碍支持、车上饮水食品及其他附随服务。每项真实供应结果须有原生数量范围。完整餐饮酒店支持供应结果替代已含能料废物组成；独立展开的配料服务不得重复。普通人类维生属于披露的边界惯例；真实工作专用支持仍须评估，不采用通用劳务能量因子。 |  |
| fuel_and_energy | charter_mission | 采用一个经核实整股混合燃料投入加组成碳源台账，或以真实物理组分供应替代对应整股覆盖，不能两者并计。供给净提取燃烧溢洒回收转移各不相同；供应提取不自动等于燃烧。内部电池放电再生不是另一笔外部供应。实际外供须有独立已核实身份端口数量，不再获得额外避免能源信用。 | ipcc-road-combustion-2006 |
| manufacture_scope | charter_mission | 交付客车制造卡仅承载已核实制造供货覆盖。同一资产完整寿命作业分配真实交付原生数量，不创造全寿命运输身份。未覆盖运行、初装更换电池、维修、道路站点充电资产及退役须独立补齐；供应商已含燃料直接排放或阶段替代对应本地数量。 |  |
| actual_fates | charter_mission | 独立识别收集废水、蒸发、废油、磨耗退役材料、回收产品、每种真实物种和受纳介质子区室及真实处理责任。未知库存损失或未运旅客不能凭余差制造排放废物。保留真实生物化石来源及粒径重叠规则。 |  |
| local_contract_fulfilment | charter_mission | 采用真实城市郊区非定班包车功能及运营客户控制，不将一般计费时刻说明作绝对测试。保留原约定时序修订任务程度车队司机连续性真实质量接受交付，不得失败后缩水，部分修订产出须真实独立接受可比。待命无人不得套汽车租用可用性自动计完成。 |  |
| actual_native_provider_scaling | purchased_local_mission | 真实验证供应原生u每单位q_u乘真实兼容需求A_u及有据任务全使用者份额/N一次。匹配完整任务数量供应仅覆盖自身真实阶段，小时天车辆距离等其他功能须自身身份实测需求，非改名任务。自营内部区段不增外购任务或最终产出。 |  |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| charter_mission | 本地巴士客车包车任务及归属全寿命 | required | 真实完成声明包车任务；物理行按实际发生条件 | foreground | completed_local_charter_mission |

全部真实车辆司机支持活动及内部乘客区段停站共享最终本地完成包车任务，不是额外最终产出自身外购。条件卡仅适用真实兼容身份覆盖，其他每真实交换须强制原子扩展。

### 过程：本地巴士客车包车任务及归属全寿命 (`charter_mission`)

#### 输入

##### 产品流

###### 柴油 (`diesel_supply`)

仅计与已核实身份兼容的真实柴油牌号混合供应。保留组分碳源及原生库存端口记录。整股供应加来源台账与替代它的物理组分供应属于互斥表达，不能相加。净提取、实际燃烧、溢洒回收转移分开；排放使用有据真实燃烧活动，不假设供应质量等于燃烧。 范围证据要求：真实任务数量供应商及适用来源方法依据为必需；不提供通用数量因子范围。 确认真实牌号配方状态原生供应边界，独立桥接工厂点至接收缺交付调节储存损失。外供交流非外供直流或内部整流电池回收，每其他实际供应须自身身份。

- 选定流: 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位: Mass / kg
- 数量规则: 真实归属兼容原生数量 / N个完成任务；cp_operation。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_operation`
- 来源: `ipcc-road-combustion-2006`

###### 交流电 (`charging_ac`)

声明充电接口真实交流输入，仅含该计量端口内损失。内部电池放电再生不是第二次供应。真实舱内电池调温及辅助用能按端口采集，不从额定电池容量推消耗。 范围证据要求：真实任务数量供应商及适用来源方法依据为必需；不提供通用数量因子范围。 确认真实牌号配方状态原生供应边界，独立桥接工厂点至接收缺交付调节储存损失。外供交流非外供直流或内部整流电池回收，每其他实际供应须自身身份。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: Energy / kWh
- 数量规则: 真实归属兼容原生数量 / N个完成任务；cp_operation。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_operation`
- 来源: `eea-electric-vehicles`

###### 交流电 (`support_ac`)

真实服务任务池且供应商充电未覆盖的兼容非充电场站调度用电。先分表再分配共享支持。购入住宿餐饮结果可能已含自身能源，不得在此再计。 范围证据要求：真实任务数量供应商及适用来源方法依据为必需；不提供通用数量因子范围。 确认真实牌号配方状态原生供应边界，独立桥接工厂点至接收缺交付调节储存损失。外供交流非外供直流或内部整流电池回收，每其他实际供应须自身身份。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: Energy / kWh
- 数量规则: 真实归属兼容原生数量 / N个完成任务；cp_support。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support`
- 来源: `ghg-product-standard-2011`

###### 自来水 (`tap_water`)

真实供应的兼容客车清洗支持自来水，不是旅客瓶装饮水或环境取水。保留真实原生体积状态；供应不能确定废水或蒸发。其他水质及饮用产品须独立身份。 范围证据要求：真实任务数量供应商及适用来源方法依据为必需；不提供通用数量因子范围。 确认真实牌号配方状态原生供应边界，独立桥接工厂点至接收缺交付调节储存损失。外供交流非外供直流或内部整流电池回收，每其他实际供应须自身身份。

- 选定流: 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位: Volume / m3
- 数量规则: 真实归属兼容原生数量 / N个完成任务；cp_support。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support`

###### 洗涤剂 (`detergent`)

仅计与本供应身份制剂端口兼容且有文件的真实合成表面活性剂清洗产品。消毒剂肥皂溶剂及其他实际产品各自交换，不合成通用清洁集合。 范围证据要求：真实任务数量供应商及适用来源方法依据为必需；不提供通用数量因子范围。 确认真实牌号配方状态原生供应边界，独立桥接工厂点至接收缺交付调节储存损失。外供交流非外供直流或内部整流电池回收，每其他实际供应须自身身份。

- 选定流: 洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位: Mass / kg
- 数量规则: 真实归属兼容原生数量 / N个完成任务；cp_support。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support`

###### 制冷剂，R134a (`r134a_supply`)

仅计供应商组成纯度及原生交付端口匹配的实际单一R134a独立供应。不由流名推定纯度阈值或原生回用比例。混合制冷剂及受污染回收混合物另有身份。初装充注仅有一个责任；补充不是泄漏，也不是空气基本流。 范围证据要求：真实任务数量供应商及适用来源方法依据为必需；不提供通用数量因子范围。 确认真实牌号配方状态原生供应边界，独立桥接工厂点至接收缺交付调节储存损失。外供交流非外供直流或内部整流电池回收，每其他实际供应须自身身份。

- 选定流: 制冷剂，R134a `b33b6abf-6a88-4ec1-ab79-6aa5aac69e8a`
- 流属性/单位: Mass / kg
- 数量规则: 真实归属兼容原生数量 / N个完成任务；cp_maintenance。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_maintenance`

###### 交付制造端口的完整柴油旅行客车 (`diesel_coach`)

仅在真实资产台账证明该完整客车配置及原生交付制造件数时适用。仅覆盖已核实制造供货，不是全寿命团体运输结果。记录原装电池部件，不得再加。供应商已含燃料直接排放维修退役替代对应本地量；缺阶段及实际道路站点充电资产仍须独立补齐。 范围证据要求：真实任务数量供应商及适用来源方法依据为必需；不提供通用数量因子范围。

- 选定流: 交付制造端口的完整柴油旅行客车
- 流属性/单位: Count / Item(s)
- 数量规则: 真实归属兼容原生数量 / N个完成任务；cp_assets。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `ghg-product-standard-2011`

###### 交付制造端口的完整纯电客车 (`electric_coach`)

仅在真实资产台账证明该完整客车配置及原生交付制造件数时适用。仅覆盖已核实制造供货，不是全寿命团体运输结果。记录原装电池部件，不得再加。供应商已含燃料直接排放维修退役替代对应本地量；缺阶段及实际道路站点充电资产仍须独立补齐。 范围证据要求：真实任务数量供应商及适用来源方法依据为必需；不提供通用数量因子范围。

- 选定流: 交付制造端口的完整纯电客车
- 流属性/单位: Count / Item(s)
- 数量规则: 真实归属兼容原生数量 / N个完成任务；cp_assets。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `ghg-product-standard-2011`

###### 燃料电池客车氢燃料供应 (`hydrogen_supply`)

仅适用有据纯度相态压力温度及供应交付边界真实独立供应氢分子燃料，不得从通名推气液储存生产路线热值燃料电池等级。闭合真实供应库存转移耗氢与独立泄漏排空回收，压缩液化交付调节损失须实际覆盖。氢产品不是其排放或产水，每真实释放接收相态独立。

- 选定流: 燃料电池客车氢燃料供应
- 流属性/单位: Mass / kg
- 数量规则: attributed_actual_net_hydrogen_supply_kg / N
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_operation`
- 来源: `irizar-fuelcell-coach-2026`

###### 交付制造边界完整氢燃料电池电驱客车 (`fuelcell_coach`)

仅适用制造供应边界真实完整匹配燃料电池电驱客车总成，准确底盘动力链电堆罐电池初始组件覆盖及交付原生量；案例不证明本地包车使用。同资产兼容研究活动/正数全使用者有效寿命活动仅分配制造，独立补实际更换电堆罐电池维护使用退役；不得另加内含初始组件或将纯电柴油车改名本总成。

- 选定流: 交付制造边界完整氢燃料电池电驱客车
- 流属性/单位: Count / Item(s)
- 数量规则: attributed_actual_FCE_coach_manufacture_equivalents / N
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `irizar-fuelcell-coach-2026`

###### 已完成的本地城市及郊区巴士或客车包车任务 (`purchased_local_mission`)

仅适用原生数量供应边界真实已完成且团体路线时长质量地域运营责任匹配的完整本地巴士客车包车任务，不是内部乘客区段车辆小时租用可用性或自营活动自身外购。其他真实供应原生单位功能须独立具体验证行及真实兼容需求换算。供应已含物理阶段车辆期间单元仅替换准确本地单元，补未含责任且归一一次。

- 选定流: 已完成的本地城市及郊区巴士或客车包车任务
- 流属性/单位: Count / Item(s)
- 数量规则: actual_matched_completed_provider_local_missions_attributed_to_cohort / N
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_provider`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已完成的本地城市及郊区巴士或客车包车任务 (`completed_local_charter_mission`)

准确一项按声明团体路线时长质量程度真实接受完成的城市郊区内巴士客车完整包车任务。多车班次内部区段停站人数是支持活动而非额外产出。原始N为有据兼容完成任务记录而非文件费用，未完成取消部分不得事后缩水计数。待命不自动为完成运输，须证明实际合格任务义务已交付。

- 选定流: 已完成的本地城市及郊区巴士或客车包车任务
- 流属性/单位: Count / Item(s)
- 数量规则: 1 Item(s)
- 数值来源模式: `fixed_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_missions`
- 来源: `unsd-coach-charter-2025`

##### 废物流

###### 废润滑油 (`spent_oil`)

处理前产生移交端口真实独立收集的石油基使用后油。保留所含组分净质量；含油水滤芯油脂和处理服务各不同。收集不能证明已再生处置。 范围证据要求：真实任务数量供应商及适用来源方法依据为必需；不提供通用数量因子范围。

- 选定流: 废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位: Mass / kg
- 数量规则: 真实归属兼容原生数量 / N个完成任务；cp_maintenance。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_maintenance`

###### 产生端口收集的液态客车清洗废水 (`wash_wastewater`)

仅为具有留存组成及接收端口的真实独立液态清洗出口。独立于供水计量，追踪库存回用蒸发及单独污泥废油。直接排出及处理服务须独立身份。 范围证据要求：真实任务数量供应商及适用来源方法依据为必需；不提供通用数量因子范围。

- 选定流: 产生端口收集的液态客车清洗废水
- 流属性/单位: Mass / kg
- 数量规则: 真实归属兼容原生数量 / N个完成任务；cp_maintenance。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_maintenance`

##### 基本流

###### 二氧化碳（化石源） (`co2_fossil`)

仅计自有来源真实释放此准确物质来源或粒径，采用实测或独立有据且适用的技术燃料控制活动计算。采用物种kg，不是C/N或CO2当量。区分尾气加热试剂非尾气及上游供应来源；不得把PM2.5与重叠PM10总PM作独立释放相加。R134a泄漏须有真实充注添加回收移出平衡及方法，不等于补充或未解释余差。 此身份为空气排放未指定子区室。仅在真实书面范围论证该子区室时采用；已知城市非城市近地面及其他受纳具体信息须另有经核实兼容行，不得合并丢弃或重复。受纳范围未知阻断完成。 范围证据要求：真实任务数量供应商及适用来源方法依据为必需；不提供通用数量因子范围。

- 选定流: 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 真实归属兼容原生数量 / N个完成任务；cp_emissions。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_emissions`
- 来源: `ipcc-road-combustion-2006`

###### 甲烷 (化石源) (`ch4_fossil`)

仅计自有来源真实释放此准确物质来源或粒径，采用实测或独立有据且适用的技术燃料控制活动计算。采用物种kg，不是C/N或CO2当量。区分尾气加热试剂非尾气及上游供应来源；不得把PM2.5与重叠PM10总PM作独立释放相加。R134a泄漏须有真实充注添加回收移出平衡及方法，不等于补充或未解释余差。 此身份为空气排放未指定子区室。仅在真实书面范围论证该子区室时采用；已知城市非城市近地面及其他受纳具体信息须另有经核实兼容行，不得合并丢弃或重复。受纳范围未知阻断完成。 范围证据要求：真实任务数量供应商及适用来源方法依据为必需；不提供通用数量因子范围。

- 选定流: 甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 真实归属兼容原生数量 / N个完成任务；cp_emissions。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_emissions`
- 来源: `ipcc-road-combustion-2006`

###### 一氧化二氮 (`n2o`)

仅计自有来源真实释放此准确物质来源或粒径，采用实测或独立有据且适用的技术燃料控制活动计算。采用物种kg，不是C/N或CO2当量。区分尾气加热试剂非尾气及上游供应来源；不得把PM2.5与重叠PM10总PM作独立释放相加。R134a泄漏须有真实充注添加回收移出平衡及方法，不等于补充或未解释余差。 此身份为空气排放未指定子区室。仅在真实书面范围论证该子区室时采用；已知城市非城市近地面及其他受纳具体信息须另有经核实兼容行，不得合并丢弃或重复。受纳范围未知阻断完成。 范围证据要求：真实任务数量供应商及适用来源方法依据为必需；不提供通用数量因子范围。

- 选定流: 一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 真实归属兼容原生数量 / N个完成任务；cp_emissions。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_emissions`
- 来源: `ipcc-road-combustion-2006`

###### 颗粒物 (PM2.5) (`pm25`)

仅计自有来源真实释放此准确物质来源或粒径，采用实测或独立有据且适用的技术燃料控制活动计算。采用物种kg，不是C/N或CO2当量。区分尾气加热试剂非尾气及上游供应来源；不得把PM2.5与重叠PM10总PM作独立释放相加。R134a泄漏须有真实充注添加回收移出平衡及方法，不等于补充或未解释余差。 此身份为空气排放未指定子区室。仅在真实书面范围论证该子区室时采用；已知城市非城市近地面及其他受纳具体信息须另有经核实兼容行，不得合并丢弃或重复。受纳范围未知阻断完成。 范围证据要求：真实任务数量供应商及适用来源方法依据为必需；不提供通用数量因子范围。

- 选定流: 颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 真实归属兼容原生数量 / N个完成任务；cp_emissions。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_emissions`
- 来源: `eea-electric-vehicles`

###### HFC-134a (`r134a_air`)

仅计自有来源真实释放此准确物质来源或粒径，采用实测或独立有据且适用的技术燃料控制活动计算。采用物种kg，不是C/N或CO2当量。区分尾气加热试剂非尾气及上游供应来源；不得把PM2.5与重叠PM10总PM作独立释放相加。R134a泄漏须有真实充注添加回收移出平衡及方法，不等于补充或未解释余差。 此身份为空气排放未指定子区室。仅在真实书面范围论证该子区室时采用；已知城市非城市近地面及其他受纳具体信息须另有经核实兼容行，不得合并丢弃或重复。受纳范围未知阻断完成。 天工直读无官方中文baseName，选定流保留原名HFC-134a；实际物质为CAS811-97-2的1,1,1,2-四氟乙烷。 范围证据要求：真实任务数量供应商及适用来源方法依据为必需；不提供通用数量因子范围。

- 选定流: HFC-134a `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 真实归属兼容原生数量 / N个完成任务；cp_maintenance。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_maintenance`
- 来源: `ghg-product-standard-2011`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| mission_first | charter_mission | 先直接归属任务专用车辆、人员作业及支持，再分配共享池。团体任务为声明服务产出；真实人数车辆区段是支持暴露记录，不增加最终共产品输出。不得将任务清单除团体人数来制造本参考。 |  |
| shared_physical | charter_mission | 剩余共用资源采用真实有据因果驱动，覆盖所有服务任务产品和期间。真实车距离、占用车辆时间、面积时间或实测资源仅在关系有据时适用；座位、报价运力、票款及均分不是默认值。人距离与吨距离不能作同一单位相加。 | ghg-product-standard-2011 |
| empty_failure | charter_mission | 真实前后调位、待命等待返库及失败部分任务保留在有据服务池。N=0保留分子待解决期间边界，不存在有限每任务强度。已付费取消或未用客车可用性不自动等于完成包车任务。 |  |
| asset_lifetime | charter_mission | 对每辆物理客车部件，真实交付制造件数乘研究兼容作业，除以同一资产有据正的全用户寿命作业，得到归属制造量，再除完成任务N。分母包含实际定班包车及其他用户。制造更换维修退役互斥；年度采购折旧租金不能代原生物理需求。 |  |
| other_outputs | charter_mission | 独立货运餐饮住宿导游等真实产品采用细分或经复核兼容分配。任务真实已含运输附随服务仍在其中。实际能源材料回收须有自身去向及声明方法，不自动给避免汽车、肥料、原生材料或电网信用。 |  |

## 8. 前景数据采集、计算与质量规则

完成覆盖原生缩放分配记账公式是本PCR明确方法设计，外部来源仅支持已述真实定义物理背景，不声称UN、EU、Irizar、IPCC、EEA或GHGProtocol规定这些全寿命本地包车任务公式。缺通用范围不免除强制真实量。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_missions | charter_mission | completed_local_charter_mission | mission_and_party_ledger | 任务ID；承运控制；组织者；真实团体；区间人数；行李；起讫；路径；停靠；返程边界；真实时长；车辆替换；质量；验收；部分取消；期间；真实距离;original_promised_scope;timestamped_amendments;actual_delivered_quality;partial_failed_release;independently_accepted_output;operator_vs_client_control;local_geography;fleet_driver_replacement_continuity | 核对约定运输任务与真实调度团体路径验收记录。计数前定义单返程及多站边界。N为真实完成且功能兼容任务之和；实际旅客及每车区段为独立暴露记录，不额外增加任务。验收完成缺失保持未解；付款不产生完成。 按时序闭合原真实修订范围，不得事后缩失败范围收费当完成或自动汽车可用性产出。记录跨车队内部区段司机更替的真实本地包车边界，仅实际接受兼容完成任务入N。 | Item(s);persons;km;h | 逐真实任务；核对队列 | 相同真实任务队列期间；完整寿命资产接口披露 | 仅真实归属任务供应来源单元；核对全用户 | 每声明的参考流 | 真实原始记录；范围校准；原生单位来源证明；不确定性闭合 |
| cp_operation | charter_mission | diesel_supply;charging_ac;hydrogen_supply | meter_stock_duty_ledger | 任务车辆作业；油品混合；组成碳源；整股组分表达；供应；期初期末；净提取；真燃烧；溢洒；回收；转移；总交流；损失；储能；再生；外供；载客空驶等待失败；全用户；供应范围;hydrogen_grade_phase_pressure;H2_stock_supply_reaction_leak_vent;external_DC_swap;actual_other_fuels_hybrid_duties | 使用核对表计燃料库存及调度辅助记录。整股与替代组分投入表达互斥，供给净提取燃烧溢洒回收分别记录。直接排放使用有据真实燃烧来源活动。以因果全用户驱动归属真实兼容供应能量数量，除N一次。 对真实氢其他驱动独立闭合原生供应储存消耗泄漏排空回收及每相态接收，不得燃料产品当直接排放或水蒸气当废物。 | kg;kWh;native volume;km;h | 逐表计库存作业；完整任务池 | 相同真实任务队列期间；完整寿命资产接口披露 | 仅真实归属任务供应来源单元；核对全用户 | 每声明的参考流 | 真实原始记录；范围校准；原生单位来源证明；不确定性闭合 |
| cp_support | charter_mission | support_ac;tap_water;detergent | support_provider_and_procurement | 任务工单；供应功能；驾驶休息过夜；食品饮水安全无障碍；供应原生单位；数量；真实范围；配料供应覆盖；电水材料；全用户；库存；去向；不确定性 | 检查真实任务纳入项工单供应记录表计。独立识别每项真实餐食饮水酒店安全人员等支持结果及原生单位；完整供应替代已含前景组成。仅排除有据无关或独立定义功能。工作专用支持须评估，不采用通用人体食物燃料因子。按因果驱动归属真实未覆盖原生量，再除N一次。 | native supplier units;kWh;m3;kg | 逐真实任务供应表计；期间对齐 | 相同真实任务队列期间；完整寿命资产接口披露 | 仅真实归属任务供应来源单元；核对全用户 | 每声明的参考流 | 真实原始记录；范围校准；原生单位来源证明；不确定性闭合 |
| cp_maintenance | charter_mission | r134a_supply;spent_oil;wash_wastewater;r134a_air | maintenance_and_receiver_ledger | 车辆设备；制冷剂CAS；供应等级纯度；初末充注；添加移出回收；来源；净量；组分；清洗废水；库存回用蒸发；接收；处理范围；真实介质；供应覆盖 | 读取真实监测平衡工单库存接收记录。区分制冷剂供应大气泄漏及回收产品废物；废油洗车水按实际组成去向独立计量。不得由水新油投入推废物，或将未解释充注差额作泄漏。归属不重叠事件量，再除N一次。 | kg;m3;actual native units | 逐维修释放转移；资源池闭合 | 相同真实任务队列期间；完整寿命资产接口披露 | 仅真实归属任务供应来源单元；核对全用户 | 每声明的参考流 | 真实原始记录；范围校准；原生单位来源证明；不确定性闭合 |
| cp_assets | charter_mission | diesel_coach;electric_coach;fuelcell_coach | same_asset_lifetime_register | 资产队列；配置；真实交付件数；制造端口；原装电池部件；研究兼容作业；全用户寿命总作业；其他包车定班用途；预测来源；更换；维修退役；供应覆盖；不确定性 | 读取真实供货工程作业退役记录。交付量研究作业及正寿命总作业须对应同一物理资产队列和全用户。归属制造=真实原生交付量乘研究作业/兼容寿命总作业，再除N，仅含制造。未覆盖运行更换维修道路站点充电退役数量须独立补齐；供应已含阶段替代对应本地数据。 | Item(s);asset-native units;km;h | 完整物理寿命及期间队列份额 | 相同真实任务队列期间；完整寿命资产接口披露 | 仅真实归属任务供应来源单元；核对全用户 | 每声明的参考流 | 真实原始记录；范围校准；原生单位来源证明；不确定性闭合 |
| cp_emissions | charter_mission | co2_fossil;ch4_fossil;n2o;pm25 | species_source_medium_ledger | 任务车辆来源；燃料辅助试剂；技术控制；真燃烧活动；因子来源版本；原生因子基准；物种质量；化石生物；粒径；气水土子区室；范围重叠；不确定性 | 实测来源或采用独立有据适用的物种技术燃料控制活动方法。核对基准及真实来源覆盖，保留已知受纳具体性并论证未指定空气。仅汇总不重叠兼容物种质量，再除N一次；供应燃料或CO2当量不能自动确定物种释放。 | kg of each actual species | 真实事件或有据监测模型期间 | 相同真实任务队列期间；完整寿命资产接口披露 | 仅真实归属任务供应来源单元；核对全用户 | 每声明的参考流 | 真实原始记录；范围校准；原生单位来源证明；不确定性闭合 |
| cp_provider | charter_mission | purchased_local_mission | provider_native_coverage_record | provider_ID;matched_local_mission_group_extent;native_unit_u;q_per_u;actual_demand_A_u;actual_conversion;covered_lifecycle_vehicle_period_cells;remaining_owner;all_user_share;normalization;uncertainty |  验证真实供应功能原生单位团体路线质量时长地域真实需求及完整已含单元台账。q_u*A_u*有据任务全使用者份额/N一次，数量仅适用真实完整匹配供应任务，小时天区段车辆服务须自身具体身份需求。准确供应单元替换物理单元，仅留未含责任，自营区段非自身外购。 | Item(s);actual verified native supplier units | 逐真实任务；核对队列 | 相同真实任务队列期间；完整寿命资产接口披露 | 仅真实归属任务供应来源单元；核对全用户 | 每声明的参考流 | 真实原始记录；范围校准；原生单位来源证明；不确定性闭合 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_missions | all inventory rows | 以有据直接共享覆盖将真实兼容原生量归属功能一致任务队列，再仅除其正完成任务N一次。不得除旅客载客率或重复最终归一化。 | cp_missions;cp_operation;cp_support;cp_maintenance;cp_assets;cp_emissions | 每1Item(s)完成任务的原生数量 |  |
| asset_equivalence | diesel_coach;electric_coach | 对每辆物理客车部件，真实交付制造件数乘研究兼容作业，除以同一资产有据正的全用户寿命作业，得到归属制造量，再除完成任务N。分母包含实际定班包车及其他用户。制造更换维修退役互斥；年度采购折旧租金不能代原生物理需求。 | cp_assets;cp_missions | 每参考原生制造当量 |  |
| party_distance | charter_mission | 补充旅客距离为实际各区间人数乘真实区间km后求和。真实团体车辆时间记录补充团体任务结果，不改变其计数参考。 | cp_missions;cp_operation | 补充旅客距离及暴露 |  |
| native_provider_contribution | purchased_local_mission | 验证原生u每单位真实q_u乘真实兼容A_u及有据任务全使用者份额/N一次，已含物理单元替换准确本地单元非并加。完整任务与小时天车辆人距离功能须验证维度匹配需求。 | cp_provider;cp_missions;actual covered-cell ledger | exclusive provider contribution per reference flow |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| mission_fulfilment | completed_local_charter_mission | 要求真实团体任务人数、承运组织控制、路径返程停靠、质量时长验收及正完成N。按真实功能而非时刻付款单独区分包车定班乘段预约或承租控制可用性。功能完成未知阻断生产。 | cp_missions |
| actual_energy | diesel_supply;charging_ac;support_ac | 扩展每真实燃料配方相态辅助加热外供交流直流换电能源输出及原生身份数量完整边界损失。全部真实合格巴士客车驱动仍适用，缺原生数据阻断完成非范围。完整混合物加组分来源台账或替代组分不得并用，净提取非燃烧。真实燃料电池氢保留纯度状态压力储存压缩供应反应消耗独立泄漏排空及真实水汽液水接收去向，不默认废物。 | cp_operation |
| actual_incidental_services | support_ac;tap_water;detergent | 识别每项真实已含餐食饮品、驾驶过夜休息设施、安全无障碍、导游等支持的真实功能原生输出及供应边界。建模真实已含运输附随项并独立定义其他产品，不得删已含组件来适配参考。每供应配料能量废物单元有唯一责任；身份数量范围缺失阻断完成。 | cp_support |
| actual_materials | detergent;r134a_supply | 每项真实润滑剂清洁消毒剂试剂浓度其他制冷剂轮胎备件或独立供应部件须有准确制剂状态原生数量及独立原子交换。示例不能证明发生或通用材料覆盖，缺必要数据阻断完成。 | cp_support;cp_maintenance |
| actual_assets | diesel_coach;electric_coach | 补齐每项真实配置客车电池道路场站充电安全调温资产及生命周期组件的原生端口。制造供应需求与运行维修更换退役分开。要求正同资产全用户寿命作业及不确定性，缺阶段寿命依据阻断完整使用。 | cp_assets |
| actual_providers | all inventory rows | 每项真实外包运输车辆驾驶餐旅维修数字支持处理结果须有独立核实真实原生交换数量及覆盖替代矩阵。不得强把货运资产人距离货币UUID塞入团体任务计数参考。供应范围未知阻断完成。 | cp_missions;cp_support;cp_assets |
| actual_fates_species | spent_oil;wash_wastewater;co2_fossil;ch4_fossil;n2o;pm25;r134a_air | 分别展开每项真实废物退役整机部件电池污泥滤芯包装食物残余水去向再用产品处理服务及每种物质粒径来源受纳子区室。整机部件粒径因子范围视图不得重叠。保留湿原生化学基准及真实接收责任，去向物种缺失不是零。 | cp_maintenance;cp_emissions;cp_support;cp_assets |
| atomic_completion | all inventory rows | 每项真实新增交换具有唯一row_id、一个真实父过程、方向类型、具体UUID或登记未解身份、原生属性单位数量、来源接收端口及同父有效协议，并关联触发requirement_id。真实未使用或供应已含须肯定证据；缺通用范围不豁免数量或许可猜值。 每实际行保留化学配方干湿基原始来源准确生命周期供应已含单元接收已知子介质不确定性。 | all declared collection protocols |
| actual_other_bus_coach_configurations | charter_mission | 必须对实际柴油生物燃料气液其他燃烧混动纯电燃料电池及其他真实合格巴士客车底盘驱动独立定义原生完整资产初始组件罐电堆电池外能源辅助试剂控制安全无障碍记录。采集全使用者制造使用维护更换退役及每真实物种废物去向，不限三总成示例。厂商中长途案例既不证明本地包车使用也不限制功能适用。不得统一因子寿命或零直接全寿命断言。 | cp_operation;cp_assets;cp_support;cp_maintenance;cp_emissions |
| original_scope_and_acceptance | completed_local_charter_mission | 必须有原约定真实时序修订合同团体车辆司机责任本地地域真实路线返程时长质量接受记录。定义真实任务成员与多任务订单车队活动替代内部区段司机更替区别。保留失败部分取消未到及真实独立接受部分修订产出，不事后缩范围或收费当交付。零乘客待命须实际合格任务履约证明，非自动等同租用可用性。 | cp_missions;actual contract and accepted delivery history |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| mission_reference | charter_mission | 一次真实已完成负责团体任务为1Item(s)。核实路径团体返程停靠时长质量及N>0；不得将旅客座位客车发票小时运力自动当完成任务数。 |  |
| period_and_failure | charter_mission | 真实分子完成任务队列、团体车辆暴露及因果全用户驱动一致。保留空驶等待返库失败部分及零产出池；N=0没有有限任务强度，不能删除负荷。 |  |
| provider_and_assets | charter_mission | 各阶段唯一责任；核实供应原生功能、仅制造供货端口、正同资产寿命比例、初装更换电池及整机部件去向。全生命周期供应结果替代确切已含本地燃料排放支持资本量。 |  |
| physical_closure | charter_mission | 核对整股组分互斥、供给提取燃烧溢洒回收、充电场站内部能量总外供、制冷剂平衡、水废物去向及粒径重叠。直接物种质量受纳范围须真实依据，不默认密度载客因子餐饮率或寿命。 |  |
| included_functions | charter_mission | 核实真实任务附随食品饮水安全驾驶休息酒店支持及独立产品的声明功能。已含运输义务不能删除，运力不是实载，观光旅游组合或承租控制可用性不能改称包车任务。 |  |
| atomic_and_profile | charter_mission | 每协议process_id等于一个真实processInventory.id，每卡协议存在于自身父过程。匹配双语规则卡原生来源字段及当前投影指纹。下游使用前解决实际身份数量覆盖去向；检查通过不是外部核实或可发布。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | 仅在全部必需身份数量覆盖去向及功能复核完成后作secondary_dataset或background_dataset |
| allowed_use | 统一真实合同程度车辆团体路线时长质量驱动原生寿命接受完成的合格城市郊区内非定班巴士客车包车任务 |
| excluded_use | 通用人区段人公里小时车队订单产出、客户全控制租赁观光定班改名包车、自动汽车可用性完成、失败缩水造成功、不完整真实全寿命 |
| required_metadata | actual_64118_local_urban_suburban_geography;non_scheduled_operator_charter_vs_full_client_control;original_mission_group_extent_itinerary_stops_return;actual_vehicles_drivers_passengers_and_continuity;actual_duration_quality_accessibility;chronological_amendments_and_accepted_completion;partial_failed_cancelled_no_show_and_standby_evidence;actual_propulsion_native_supply_stock_and_fates;driver_and_included_incidental_function_boundaries;same_period_comparable_mission_strata;provider_native_demand_exact_covered_cells;same_asset_positive_all_user_useful_duty;known_substance_receiver_subcompartment_and_uncertainty |
| required_quality_disclosure | 真实任务团体完成不确定性；原生身份供应覆盖；空驶失败池；资产寿命预测；已含功能；来源介质去向；分配局限 |
| update_trigger | 任务功能团体路径时长质量、供应商车辆能源、资产寿命、附随功能、来源介质去向或完成规则变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-coach-charter-2025 | official_guidance | UNSD,CPC3.0 Explanatory Notes,30June2025,printed/PDF pp360,362,64118/64223 charter and66011 exclusion. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 真实64118城市郊区非定班包车控制排除，通常路线时刻一般时间距离多目的地非绝对门槛。任务数量接受及全驱动寿命公式为PCR选择。 |
| eu-occasional-service-2009 | official_guidance | Regulation(EC)1073/2009,as adopted21October2009,Articles2/5 official reproduction. https://www.legislation.gov.uk/eur/2009/1073/article/2/adopted?view=plain and https://www.legislation.gov.uk/eur/2009/1073/article/5/adopted?view=plain | 历史欧盟定班特殊定班偶发团体比较，周期本身不充分。不推定普适当前法律许可CPC规则、团体大小或任务公式。 |
| ipcc-road-combustion-2006 | official_guidance | IPCC,2006Guidelines,Vol2Ch3MobileCombustion,§3.2,pp3.10–3.16. https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_3_Ch3_Mobile_Combustion.pdf | 仅燃料活动技术控制试剂碳源区分。不将默认道路因子或国家清单切断移入生命周期任务结果。 |
| eea-electric-vehicles | official_guidance | European Environment Agency,Electric vehicles,Overview. https://www.eea.europa.eu/en/topics/in-depth/electric-vehicles | 仅生产电池及持续道路轮胎制动磨损生命周期背景。不转用乘用车均值、客车燃耗续航资产寿命或数值收益。 |
| ghg-product-standard-2011 | standard | WRI/WBCSD,Product Life Cycle Accounting and Reporting Standard,2011,chapters6–9. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 功能边界数据披露及细分有据物理分配层级。扩展资本任务交付作业公式是PCR方法，不声称标准给出通用因子或强制资本要求。 |
| irizar-fuelcell-coach-2026 | official_guidance | Irizar,La nueva generación del Irizar i6S Efficient H2 FCEV ya está aquí,29May2026. https://www.irizar.com/media-center/noticias/nueva-generacion-irizar-i6s-efficient-h2-fcev-ya-esta-aqui | 仅真实氢燃料电池电驱客车技术案例，所述中长途设计不证明本地包车使用，不采用续航补给时长容量寿命零全寿命比较收益或普遍气相等级。 |
