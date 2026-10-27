---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.bus-station-services
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 巴士客运站服务

## 1. 范围与适用性

涵盖城市、郊区及城际巴士客运站服务，包括实际场站设施使用、售票、预订、行李办公室办理及行李寄存保管。CPC官方说明排除67190的行李和货物装卸，因此行李在运输工具上的实际装卸不属于本服务。[来源：`un-cpc3-67410`]

每数据集表示一种具有明确功能规模的完成客站服务事件类型，例如一次旅客场站使用、一次独立销售的预订交易，或一份有明确保管期间的行李寄存。这些是具有不同记录的独立情景，不是可互换单位。完整到站使用仅涵盖其声明功能，附属售票或办公室操作不得再作为额外完整产出计数。

排除巴士运输、车辆制造维护、巴士燃料充电及车辆尾气（含巴士怠速）、单独销售的道路基础设施运营、零售餐饮租户及货物装卸。车辆排放即使发生于站内仍留在承运运输数据集，地理位置本身不转移其归属。核对运营合同，任何单列怠速或转运接口只计一次。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.bus-station-services |
| classification_refs | CPC 3.0 67410 |
| covered_products | 城市郊区城际巴士客站设施、售票预订及行李办公室寄存服务；各情景分别限定 |
| excluded_products | 巴士运输及车辆运营；行李货物装卸；无关零售餐饮 |
| representative_product | 一次已完成且声明所含功能的旅客场站使用 |
| production_route | 接收服务请求或旅客入站→实际设施办公室保管作业→完成指定服务并关闭记录 |
| market_state | 在明确运营方承运方客户合同边界下提供的场站服务 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 按声明功能规模完成一个已识别巴士客站服务事件 |
| How much | 一个事件，明确旅客数量、车站功能、交易数量及任何保管规模 |
| How well | 实际声明旅客可达、开放时段、安全无障碍、交易验收及保管释放要求；不虚构通用质量阈值 |
| How long or cycle | 请求或入站至完成释放的实际事件，含其可归属等待及支持期间 |
| reference_flow_link | `terminal_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 巴士客运站服务事件 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 站点及期间；城市郊区城际背景；事件子型；精确起终及所含功能；旅客数量及吞吐；站厅站台规模及开放时段；停留时间；售票预订成功标准；任何行李份数质量及保管期间；无障碍及安全要求；运营承运承包分工；租户划分；资产范围及寿命分母；电力地区电压 |

item是已核实Item(s)的单数计数别名，计量已完成的指定服务，不是人公里、车辆移动、票款、通用预订点击或行李千克。场站使用按一名旅客入站至完成计量一次；独立合同办公室事件明确实际客户交易及寄存规模。不同事件类型分别保留，不推断相同负担或默认换算。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `event_count` | 参考产品 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 按cp_events已完成事件定义及声明规模起终计量一次；失败作业作为可归属投入保留，不增加成功产出。 |
| `event_separation` | 参考产品 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 场站使用、独立合同交易及保管事件分开。不假定通用次数转时间、旅客转车辆或行李质量等价。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 声明场站配置及服务请求或旅客入站；既有设施不是零负担 |
| starting_condition_role | foreground_start |
| product_classification_scope | 巴士场站旅客支持及办公室保管服务，排除车辆运输和行李装卸 |
| recursive_input_rule | 同类别分包场站支持作为一个有证据上游服务范围进入；不得本地重复其能源或资产 |
| upstream_dataset_requirement | 实际公用工程、耗材、信息技术及设施制造报废、废物处理；核对承包商清单 |
| disclosure | 服务子型及规模；旅客场站接口；开放停留时间；承运承包租户划分；资产寿命利用量；缺失上游范围 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `boundary_services` | 仅为选定事件纳入实际旅客设施、售票预订、行李办公室办理及保管。行李货物实际装卸仍在67410外。 | un-cpc3-67410 |
| `boundary_support` | 纳入可归属照明供暖冷却通风、信息技术、安保卫生、清洁及实际维护。记录运行控制时序及计量使用，不假定标准建筑能耗份额。 | energystar-om |
| `boundary_assets` | 纳入实际客站建筑、售票信息设备、冷却及保管设备有依据制造报废份额；防止与完整上游建筑或承包数据集重叠。 |  |
| `boundary_atomic` | 分别筛查额外实际燃料、外购热冷、制冷剂、清洁配方、维护组件、废物及排放，并添加精确原子行。缺席须有依据，不得由简短模板推断。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| terminal | 提供并完成指定客站服务 | required | 实际事件子型及各行条件 | foreground_production | 每参考流 |

### 过程：提供并完成指定客站服务 (`terminal`)

#### 输入

##### 产品流

###### 低压交流电 (`electricity`)

计量实际属于运营方边界的站厅及站台照明、通风、冷却、扶梯、安保及售票设备用电。记录地区电压；车辆充电作为车辆能源另行计量。

- 选定流：低压交流电
- 流属性/单位：能量 / kWh
- 数量规则：每参考流的可归属实测交换量；cp_utilities。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 来源：

###### 天然气 (`natural_gas`)

适用于实际车站供暖或热水生产。保留计量单位及组成；体积转质量需要实测条件及有依据密度。

- 选定流：天然气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_utilities。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 来源：

###### 柴油 (`diesel`)

适用于实际车站自有备用发电；分开库存变化及试运行。公交车燃料及其怠速不在本行内。

- 选定流：柴油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_utilities。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 来源：

###### 自来水 (`water`)

计量车站卫生、清洁及其他实际客运服务用水；区分租户、洗车及雨水。

- 选定流：自来水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_utilities。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 来源：

###### 热敏票纸 (`ticket_paper`)

适用于纸质车票或预订凭证；称量领退库存并纳入打印失败。纯电子事件不虚构纸张消耗。

- 选定流：热敏票纸
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_materials。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：

###### 卫生用薄页纸 (`tissue`)

实际旅客设施卫生纸消耗；与租户销售商品分开。

- 选定流：卫生用薄页纸
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_materials。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：

###### 次氯酸钠清洁溶液 (`cleaner`)

仅在实际使用该配方清洁剂时适用；记录溶液浓度及整份溶液质量，不作为纯活性化学品质量。其他清洁剂各设具体行。

- 选定流：次氯酸钠清洁溶液
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_materials。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：

###### 1,1,1,2-四氟乙烷制冷剂 (`r134a_supply`)

适用于实际采用R134a的车站空调设备；记录供应商及维护气瓶质量、库存、设备充注及回收。购入量不假定等于释放量。

- 选定流：1,1,1,2-四氟乙烷制冷剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_refrigerant。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerant`
- 来源：`epa-refrigerant-balance`

###### 巴士客运站建筑 (`building`)

按施工范围及有依据寿命利用量分配实际客站建筑生产报废；区分站厅、车站站台、租户及无关空间。

- 选定流：巴士客运站建筑
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：每参考流的可归属实测交换量；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：

###### 电子售票终端 (`ticket_terminal`)

适用于实际售票或预订终端；记录型号、使用及有凭据寿命，不得每张票计入整台电脑。

- 选定流：电子售票终端
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：每参考流的可归属实测交换量；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：

###### 旅客站厅空调机组 (`hvac`)

实际设备制造报废份额，明确安装配置及有依据运行寿命分母。电力及现场制冷剂维护与内含清单分开。

- 选定流：旅客站厅空调机组
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：每参考流的可归属实测交换量；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：

###### 钢制行李寄存柜 (`locker`)

适用于实际行李寄存服务；记录柜体配置、寄存规模、实际占用及有依据寿命使用量。

- 选定流：钢制行李寄存柜
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：每参考流的可归属实测交换量；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：

#### 输出

##### 产品流

###### 巴士客运站服务事件 (`terminal_output`)

一个具有声明子型及功能规模的完成事件；完整到站使用内的附属操作不生成额外完整产出。

- 选定流：巴士客运站服务事件
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：1 item
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_events`
- 来源：

##### 废物流

###### 废弃热敏票纸 (`waste_paper`)

实际由车站持有的失败或过期票及打印边角；区分交给旅客的车票并保留实际处理。

- 选定流：废弃热敏票纸
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 客运站生活污水 (`wastewater`)

实际收集送往处理的生活污水；区分雨水径流及洗车废水，记录去向及处理边界。

- 选定流：客运站生活污水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 废弃卫生用薄页纸 (`waste_tissue`)

仅单独收集并作为固废处理的废弃卫生纸；不得将同一纸量再计入生活污水流。

- 选定流：废弃卫生用薄页纸
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

##### 基本流

###### 化石二氧化碳，排入空气 (`fossil_co2`)

实际车站锅炉或发电机化石燃烧，来自实测或有依据燃料特定碳平衡。本直接行排除车辆尾气及上游供电排放。

- 选定流：化石二氧化碳，排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_emissions。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：

###### 1,1,1,2-四氟乙烷，排入空气 (`r134a_air`)

适用于实际车站设备R134a损失；由含设备充注变化及回收的有凭据制冷剂平衡推导，不采用默认泄漏率。

- 选定流：1,1,1,2-四氟乙烷，排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_refrigerant。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerant`
- 来源：`epa-refrigerant-balance`

## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `allocation_direct` | 优先采用直接分表及实际事件任务记录。售票设备依据实测终端会话活动；保管设备依据实际寄存期间占用；空间支持在有因果依据时采用有证据占用面积时间及旅客使用。 |  |
| `allocation_complete` | 将匹配期间支持作业（含可归属待机、低利用时段及失败）分配至已完成可比事件。不得消除空闲设施负担、将售票量等同全部到站客流，或每个内部检票点重计旅客。 |  |
| `allocation_assets` | 各实际资产按实际利用量除以有依据寿命利用量分配，核对期间及既往份额，累计归属不得超过一个完整寿命。不任意设建筑寿命或设备质量；供应商已含制造不重计。 |  |
| `allocation_interfaces` | 核对车辆运营、承运方怠速、独立行李装卸、租户及承包边界。单独报告的承运怠速情景仍关联运输，不得再内含于车站服务。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_events | terminal | terminal_output | event_record | 事件编号；子型；所含功能；旅客数；起终；成功；交易或寄存；停留；开放时段；运营划分 | 按唯一事件核对入站计数及已完成办公室保管日志；分开失败及内部检查点。寄存保留实际行李件数、质量和期间，不等同装卸服务。 | item | 每事件及核对期间 | 完整匹配运营期间 | 一个指定服务情景 | 每参考流 | 事件台账；入站计数；完成记录 |
| cp_utilities | terminal | electricity; natural_gas; diesel; water | meter_record | 行；读数；单位；库存；地区；电压；运行时序；站厅站台；租户承运份额 | 采集校准仪表及燃料水账单并按任务分区分配；保留待机，分开车辆能源及租户负荷。 | 各行单位 | 表计区间及账期 | 与事件同期间 | 运营方服务范围 | 每参考流 | 校准；账单；分区图 |
| cp_materials | terminal | ticket_paper; tissue; cleaner | material_record | 具体材料；领退质量；制剂；浓度；库存；任务 | 称量实际材料使用并核对库存；保留清洁溶液与活性成分基准、领用纸张与销售商品区别。 | kg | 每次领用及期间 | 与事件同期间 | 实际车站耗材 | 每参考流 | 库存台账；称量；供应商组成 |
| cp_assets | terminal | building; ticket_terminal; hvac; locker | asset_record | 资产编号；配置；制造范围；施工清单；实际使用；寿命利用量；既往份额；报废 | 采用实际资产施工记录及设备空间利用量；独立论证寿命分母及供应商组件边界。 | item | 资产变更及期间 | 资产寿命及当前事件 | 实际使用车站资产 | 每参考流 | 台账；寿命证据；利用量记录 |
| cp_waste | terminal | waste_paper; wastewater; waste_tissue | waste_record | 流；质量；污染；来源；去向；处理；日期；分配 | 计量分类流并核对处理联单；核对已进入污水的纸量以防重复。 | kg | 每次处置及期间 | 与事件同期间 | 车站范围，排除租户车辆废物 | 每参考流 | 称量；联单；污水记录 |
| cp_emissions | terminal | fossil_co2 | emission_record | 物种；来源；燃料；碳含量；测试模型；活动；介质 | 采用车站源实测排放或有来源的燃料特定方法及实测活动；车辆排放留在承运清单。 | kg | 测试及活动期间 | 与事件同期间 | 实际车站锅炉发电机 | 每参考流 | 测试；燃料记录；方法来源 |
| cp_refrigerant | terminal | r134a_supply; r134a_air | refrigerant_balance | 物种；期初期末库存；取得；转出；期初期末设备充注；维护；回收；承包边界 | 按单一物种进行有库存及设备充注变化记录的物料平衡；区分供应、回收及排放。核对供应商或制造端充注以防重复。 | kg | 每维护及报告期间 | 与事件同期间 | 实际车站制冷剂设备 | 每参考流 | 维护票据；气瓶称量；库存充注台账 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_completed_events` | terminal_output | 按声明规模计唯一完成可比事件，排除内部重复及失败取消事件；其可归属工作留在投入。匹配期间分配后交换量除以已完成事件数。 | cp_events; cp_utilities; cp_materials | 每参考流 |  |
| `calc_asset_share` | building; ticket_terminal; hvac; locker | 按allocation_assets将有依据制造报废清单与实测服务利用量关联；按cp_events归一期间份额，不得每事件计入整项资产。 | cp_assets; cp_events | 每参考流 |  |
| `calc_refrigerant` | r134a_air | 采用物种平衡：期初存储库存加取得量及期初设备充注，减期末存储库存、转出及期末设备充注。核对实际回收及设备变化；负值或不明差额须先调查再归属释放。不规定泄漏率或GWP。 | cp_refrigerant; cp_events | 每参考流物种质量 | epa-refrigerant-balance |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| dq_event | terminal_output | 功能规模及验收完成必需；一张票不自动等于一位访客，一份团体预订不自动等于一名旅客。 | cp_events |
| dq_period | 所有清单行 | 事件数、公用工程及废物采用相同场站期间情景及运营租户承运边界。保留待机及低利用率。 | cp_events; cp_utilities |
| dq_assets | building; ticket_terminal; hvac; locker | 采用实际寿命利用量记录，包含敏感性及组件重叠检查；不假定资产质量或寿命。 | cp_assets |
| dq_identity | 所有清单行 | 使用前核实流身份参考属性单位及中文显示；空流UUID逐项披露，不虚构为已解决服务。 | 直读支持及未解决登记 |

## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `validate_event` | 要求唯一terminal_output为1item，具有完整事件子型、功能规模、服务质量及起终；拒绝人公里、巴士班次、价格或未说明交易平均替代。 |  |
| `validate_boundary` | 核实范围内全部客站办公室功能、行李保管与67190装卸区别，以及承运承包租户接口。完整到站使用及其所含办公室操作不得均计为完整客站产出。 | un-cpc3-67410 |
| `validate_atomicity` | 独立检查各实际公用工程材料资产废物及排放物种；核对制冷剂供应回收及充注变化。披露身份及上游缺口；解析通过本身不代表完整生命周期或方法批准。 |  |
| `validate_unit_export` | item仅为数量属性正式单位Item(s)的本地单数别名。导出时使用Item(s)，保留同一数值计数及完整限定的服务定义；更换显示符号不得改变流属性、服务范围或归一化分母。不得通过改写单位将服务项转换成时间、质量、距离或另一服务族，也不得对已按参考流归一化的数量再次归一化。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | passenger_terminal_service |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 指定旅客出行或办公室保管情景中的明确巴士客站支持组成 |
| excluded_use | 完整旅客出行足迹、车辆运营、行李装卸或可互换通用车站事件因子 |
| required_metadata | 全部参考限定信息；旅客功能期间；场址接口；租户承运承包划分；实际分配；资产及上游身份 |
| required_quality_disclosure | 事件可比性；停留客流不确定性；支持待机边界；资产分母；制冷剂平衡；未解决UUID及上游缺项 |
| update_trigger | 车站功能、旅客特征、场站配置、合同边界、能源、制冷剂或寿命利用量证据变化 |

## 11. 数据源

| 来源编号 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| un-cpc3-67410 | official_guidance | UNSD CPC Version 3.0, subclass 67410 explanatory note. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/67410 | 完整旅客场站及办公室保管范围；67190装卸排除 |
| energystar-om | official_guidance | ENERGY STAR, Operation and Maintenance Best Practices, Tune It Up / Turn It Off / Check It Out. https://www.energystar.gov/buildings/save-energy-commercial-buildings/ways-save/om-best-practices | 实际建筑时序控制及暖通照明办公系统测量；不作为客站能耗默认值 |
| epa-refrigerant-balance | official_guidance | US EPA, Direct Fugitive Emissions from Refrigeration, Air Conditioning, Fire Suppression, and Industrial Gases, December 2023, section 2.3 material balance. https://www.epa.gov/sites/default/files/2020-12/documents/fugitiveemissions.pdf | 单种制冷剂库存取得转出及设备充注平衡；不采用默认泄漏因子或GWP，不作为完整LCA指南 |
