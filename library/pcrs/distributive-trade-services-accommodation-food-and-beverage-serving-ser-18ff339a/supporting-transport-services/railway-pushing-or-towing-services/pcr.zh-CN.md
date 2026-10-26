---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.railway-pushing-or-towing-services
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 铁路推送或牵引服务

## 1. 范围与适用性

本规则适用于对已识别铁路车辆，在明确任务起讫点之间提供的推送或牵引作业，起讫点包括终端站场、工业专用线等铁路位置。包括交付功能属于推牵支持的实际调车、定位及编解列移动；连挂、制动检查及解挂仅作为该任务组成部分纳入。声明推送、牵引、定位、站场调车或明确序列，不把整个叶子限制为一种机车型号或货物类型。代表情景为一次合格完成的站场移动；其他推牵配置须保留其强制任务范围及实测清单。[来源：`un-cpc-67310`]

排除作为运输产品销售的干线客货运输、公路拖车、货物装卸、独立基础设施或交通管理，以及作为产品销售的轨道车辆制造。实际服务是将货物在商业起讫点间运输的旅程，应按铁路运输评估，不能改名为支持服务。调车机车可实施编解列，而干线机车承担长距离货物运输；归属怠速及辅助负荷必须保留在实际作业边界中。[来源：`epa-rail-facility`]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.railway-pushing-or-towing-services |
| classification_refs | CPC 3.0 67310 |
| covered_products | 声明车辆、起讫点、移动序列及完成判据的铁路推牵支持；采用实际牵引路线 |
| excluded_products | 作为运输销售的干线运输；货物装卸；公路拖车；独立基础设施管理；车辆制造 |
| representative_product | 对已识别车列在明确起讫点之间完成的一次铁路推牵任务 |
| production_route | 派工及接近 → 连挂检查 → 实际推牵移动 → 制动防溜并放行 → 归属返回和待命 |
| market_state | 按任务单验收、具有范围计量及完成证据的支持作业 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 将已识别铁路车辆推送或牵引至明确任务终点 |
| How much | 一次完成任务；声明车辆数量、净重和总重、路线距离、分段移动及定位范围 |
| How well | 任务单规定的车辆完整性、目的位置、连挂制动及安全放行验收判据；不臆造通用操作规格 |
| How long or cycle | 完整任务周期，包括归属接近、重试、返回、怠速及辅助操作 |
| reference_flow_link | `pushing_service` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已完成且限定信息齐全的铁路推送或牵引任务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 任务和订单编号；推送、牵引或调车子型；起讫位置；轨道区段；相关轨距与坡度；车列及车辆编号；车厢数量；皮重、货重及总重；连挂制动状态；移动距离和方向；分段移动次数；牵引来源；发动机及机车类别；载重和空驶定位；作业、怠速及辅助时间；报告期；完成关口；自有和供应商覆盖 |

item是单位组正式单位Item(s)的单数文字别名；实际数据以Item(s)导出。一次任务是明确规定的支持作业，不是任意时间片、每节车辆、每次推送或一个吨公里。独立交付任务分别计数，但不得将一次任务及其组成移动作为多个完整产出重复计数。只有任务范围和配置等效时才能汇总；声明任务特征范围时须保留实测活动分布。附加质量、距离和时间观测用于描述和分配任务，不能建立与货运的等价性。全部清单量均对应边界相同的一次验收任务。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `task_count` | 参考产品 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 用cp_task计数已完成任务单，保留起讫点和组成移动。失败尝试增加负荷，不增加合格产出。 |
| `task_extent` | 参考产品 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 记录实际车列质量、车辆数量、距离、坡度和作业及怠速时间；不预设平均车厢质量，无实测任务记录不得将吨换为任务数量。 |
| `traction_route` | diesel; traction_electricity | 质量；能量 | kg; kWh | 将柴油与外部电力分开；辅助发动机及充电损耗各计一次，声明供电电压和再生电量去向。 |
| `exhaust_species` | no_air; no2_air; pm25_air | 质量 | kg | 披露污染物口径；以二氧化氮计的氮氧化物及总颗粒物不能自动等同于单个物种或粒径段。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已识别任务单及位于声明位置的现有车辆；已安装机车和轨道，其上游份额须披露 |
| starting_condition_role | foreground_start |
| product_classification_scope | 具有实际任务序列的铁路推牵支持；不自动采用干线货运边界 |
| recursive_input_rule | 向其他供应商购买的推牵服务须有已识别上游服务并核对任务重叠；其总体服务和已含的柴油或电力不得再次计入。 |
| upstream_dataset_requirement | 实际燃料、电力及材料供应，机车和轨道制造份额，维护及废物处理；披露缺失 |
| disclosure | 任务起讫点；接近和返回；怠速及共享待命；牵引和辅助供应；资产寿命；供应商覆盖；上游缺口 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `boundary_task` | 纳入合同支持周期内的派工接近、连挂检查、实际移动、重试、放行，以及归属返回、怠速和辅助作业。保持任务起讫点及与干线运输的区分。 | un-cpc-67310; epa-rail-facility |
| `boundary_assets` | 筛查机车、电池、轨道、道岔、接触供电、维护及退役负荷。供应商总体清单未覆盖时，逐实际资产分别记录；不得重复计算已含组件。 |  |
| `boundary_actual` | 卡片是有适用条件的具体交换。每种实际替代燃料、冷却液、材料、更换电池、废物或污染物均须增加物理或化学身份具体的独立行；没有卡片不意味着零。 |  |
| `boundary_noise` | 按任务及场址条件记录噪声、振动、溢漏及磨耗暴露筛查。清单或影响方法要求量化释放时，提供经验证数量及适当流身份；定性筛查不能代替影响量化。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| push_tow | 准备、推送或牵引并放行铁路车辆 | required | 实际合同作业；各路线条件有效 | foreground_production | 每参考流 |

### 过程：准备、推送或牵引并放行铁路车辆（`push_tow`）

#### 输入

##### 产品流

###### 石油基柴油 (`diesel`)

柴油牵引或辅助发动机实际运行时适用；包括接近、推牵、重试、返回定位及归属怠速。声明牌号、生物成分及发动机；其他燃料另列独立行。

- 选定流：石油基柴油
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：

###### 交流电 (`traction_electricity`)

分项计量实际牵引供电、电池充电损耗、岸电支持及站场支持后归属；不得把柴油电传动牵引电机视为外购电网电力。

- 选定流：交流电
- 流属性/单位：能量 / kWh
- 数量规则：每参考流归属的实测交换数量；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：

###### 矿物润滑油 (`lubricant`)

实际维护耗油时纳入；核对库存、退回油量及机车归属。其他化学类型另列独立行。

- 选定流：矿物润滑油
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### 乙二醇冷却液，质量分数50%的水溶液 (`coolant`)

仅适用于实际采用此配方的冷却液；保留浓度及扣除回收液后的净加入量。

- 选定流：乙二醇冷却液，质量分数50%的水溶液
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### 尿素溶液，质量分数32.5% (`urea_solution`)

仅在已安装的选择性催化还原系统实际采用此配方时纳入；不默认所有机车均具备该系统。

- 选定流：尿素溶液，质量分数32.5%
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### 自来水 (`water`)

仅记录实际清洁或维护用新鲜水；与客户货物及循环冷却液区分。

- 选定流：自来水
- 流属性/单位：体积 / m3
- 数量规则：每参考流归属的实测交换数量；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### 牵引撒砂级硅砂 (`sand`)

实际增黏撒砂时纳入；记录领用质量及轨旁去向；释放的具体组分须另列基本流。

- 选定流：牵引撒砂级硅砂
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### 柴油电传动调车机车 (`diesel_locomotive`)

仅在实际采用此机车时纳入；按有依据的寿命期服务利用分摊制造、大修及退役。供应商总体服务已含的能源不得重复计入。

- 选定流：柴油电传动调车机车
- 流属性/单位：件数 / item
- 数量规则：每参考流归属的实测交换数量；cp_asset。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：

###### 电池电力调车机车 (`electric_locomotive`)

仅在实际采用此机车时纳入；披露电池覆盖、更换及寿命证据；机车数据集已含初装电池时不得重复增加。

- 选定流：电池电力调车机车
- 流属性/单位：件数 / item
- 数量规则：每参考流归属的实测交换数量；cp_asset。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：

###### 铁路站场轨道 (`track_share`)

按有凭据的寿命期利用分配实际使用轨道段的制造、安装及维护；保留上游数据集钢轨、轨枕及道砟边界。

- 选定流：铁路站场轨道
- 流属性/单位：长度 / m
- 数量规则：每参考流归属的实测交换数量；cp_asset。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：

#### 输出

##### 产品流

###### 已完成推牵任务（`pushing_service`）

产出按cp_task中同一任务单起讫点及完整周期验收。

- 选定流：已完成且限定信息齐全的铁路推送或牵引任务
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：1 item
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_task`
- 来源：

##### 废物流

###### 废矿物润滑油 (`waste_oil`)

记录实际收集废油及合规处理去向；不自动赋予回收抵扣。

- 选定流：废矿物润滑油
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 废乙二醇冷却液 (`waste_coolant`)

更换冷却液或收集溢漏时适用；明确组成及回收处理边界。

- 选定流：废乙二醇冷却液
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 机车清洁废水 (`wastewater`)

实际清洗时适用；计量排水并明确处理；溶解污染物不能自动当作空气排放。

- 选定流：机车清洁废水
- 流属性/单位：体积 / m3
- 数量规则：每参考流归属的实测交换数量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 废纤维素润滑油滤芯 (`waste_filter`)

仅在实际采用此型式滤芯时适用；与已计入waste_oil的滞留油区分；其他滤芯组成另列独立行。

- 选定流：废纤维素润滑油滤芯
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

##### 基本流

###### 化石二氧化碳，排入空气 (`co2_air`)

直接化石燃料碳排放；采用实测燃料碳含量和氧化证据或实际尾气测量；电网供应二氧化碳属于上游，不填入本行。

- 选定流：化石二氧化碳，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_emission。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emission`
- 来源：

###### 一氧化碳，排入空气 (`co_air`)

测量或按有依据的发动机和工况特定系数推算并注明单位；不得以通用标准限值代替实测排放。

- 选定流：一氧化碳，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_emission。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emission`
- 来源：

###### 一氧化氮，排入空气 (`no_air`)

仅记录物种分辨的尾气释放；没有实测或有依据的组分划分，不得将以二氧化氮计的氮氧化物总量直接填入本行。

- 选定流：一氧化氮，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_emission。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emission`
- 来源：

###### 二氧化氮，排入空气 (`no2_air`)

与一氧化氮分别记录；披露分析口径和组分划分不确定性。

- 选定流：二氧化氮，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_emission。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emission`
- 来源：

###### 二氧化硫，排入空气 (`so2_air`)

采用实际硫含量及有依据的氧化或尾气测量；不预设硫含量等级。

- 选定流：二氧化硫，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_emission。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emission`
- 来源：

###### 空气动力学直径小于2.5微米的颗粒物，排入空气 (`pm25_air`)

采集按粒径划分的燃烧颗粒物质量；区分制动和轮轨磨耗及总颗粒物，避免重叠粒径组分的质量重复计入。

- 选定流：空气动力学直径小于2.5微米的颗粒物，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_emission。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emission`
- 来源：

## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `allocate_subdivision` | 优先按任务计量燃料和能源，并细分牵引、接近、怠速及辅助操作。共享调车机车活动按实测活动、载荷及有记录的因果驱动因素分配，不按货物收入分配。 |  |
| `allocate_complete_cycle` | 将归属失败移动、返回定位及共享待命纳入所支持服务群体。任务份额与同一车队及场址总量核对；怠速不能视为无负荷。 | epa-rail-facility |
| `allocate_assets` | 按有凭据的寿命期利用率及任务使用份额分配机车、轨道及更换负荷。明确轨道维护及机车大修边界，不预设寿命或自动回收收益。 |  |
| `allocate_regeneration` | 根据独立计量证据和接收系统记录外购电及返送电。不得扣除未核验再生电量，也不得将柴油内部发电作为额外外购输入。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_task | push_tow | pushing_service | 任务事件日志 | 订单；子型；车辆编号；起讫点；分段移动；皮重货重及总重；距离；坡度；载重空驶接近；起止时间；失败；验收 | 核对签认任务完成、车列清单、派工日志、校准质量证据及里程或卫星定位；组成移动各保留一次。 | item | 每任务 | 完整声明运行期 | 明确站场或路线及任务配置 | 每参考流 | 签认完成；任务日志；称量证据；里程校准 |
| cp_energy | push_tow | diesel; traction_electricity | 仪表及燃料衡算 | 机车和发动机；燃料类型；油箱期初期末；加油；电力输入输出；牵引怠速辅助时间；供应；任务份额 | 采用校准燃料流量或油箱衡算及电表并计入充电损耗；核对牵引状态、辅助消耗及设施总量。 | kg; kWh | 计量区间及任务 | 与cp_task同期间 | 实际机车或回路及任务周期 | 每参考流 | 仪表校准；燃料库存核对；电费发票；状态日志 |
| cp_material | push_tow | lubricant; coolant; urea_solution; water; sand | 材料衡算 | 具体产品；浓度；领用退回；期初期末库存；服务事件；任务份额 | 计量净材料使用，保留配方，按实际运行活动归属维护和清洁。 | kg; m3 | 每次领用或服务事件 | 与cp_task同期间 | 指定机车及作业 | 每参考流 | 库存卡；发票；供应商配方；维护日志 |
| cp_asset | push_tow | diesel_locomotive; electric_locomotive; track_share | 资产服务记录 | 资产编号；上游边界；寿命证据；利用率；任务活动；维护；更换；退役 | 将具体资产关联上游制造和寿命终结清单；记录物理寿命及实测利用，防止总成和组件重复。 | item; m | 资产事件及期间核对 | 有依据寿命及运行期间 | 实际机车及使用轨道段 | 每参考流 | 资产台账；维护更换记录；供应商清单 |
| cp_waste | push_tow | waste_oil; waste_coolant; wastewater; waste_filter | 废物转移日志 | 具体废物；数量；组成；去向；处理边界；服务期；份额 | 逐种测量废物，核对转移证明及处理覆盖；区分滞留液体和滤芯材料。 | kg; m3 | 每次处置 | 与cp_task同期间 | 指定机车及实际接收方 | 每参考流 | 废物联单；接收方合同；组成证据 |
| cp_emission | push_tow | co2_air; co_air; no_air; no2_air; so2_air; pm25_air | 尾气测量或有记录计算 | 发动机；燃料碳硫；实测尾气；物种；粒径组分；工况载荷；时间；采用系数时的来源版本和单位；任务份额 | 采用实际尾气测量或明确有依据的发动机、燃料及工况系数；解析物种及相互重叠的粒径组分；不得将法规限值当作实测排放。 | kg | 工况区间及任务归属 | 与cp_task同期间 | 明确发动机任务及接收空气环境 | 每参考流 | 测量报告；燃料化验；系数适用性；单位和载荷核对 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| task_denominator | pushing_service | 按声明等效配置计数已完成的独立明确任务单N，N须为正值。组成推送及车厢属于任务描述，不是额外完整产出。 | cp_task | 已完成任务N |  |
| exchange_attribution | 所有清单行 | 逐实测交换分子归属至相同完整任务边界，再除以正值N。保留柴油和电力路线、空驶接近及怠速记录；不同任务配置须独立数据集或明确活动分布。 | cp_task; cp_energy; cp_material; cp_waste | 每参考流交换数量 |  |
| emission_attribution | co2_air; co_air; no_air; no2_air; so2_air; pm25_air | 逐工况区间按实测或明确来源系数及匹配实测活动解析实际物种质量；仅汇总不重叠区间，再将归属数量除以N。不臆造系数或组分比例。 | cp_task; cp_emission; cp_energy | 每参考流物种质量 |  |
| asset_attribution | diesel_locomotive; electric_locomotive; track_share | 按有凭据的寿命期利用及任务份额分配上游资产制造、维护及退役，分别明确组件边界；归属清单除以N。 | cp_task; cp_asset | 每参考流资产份额 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| dq_task | pushing_service | 完整起讫点、车列、质量、距离、任务类型及验收；不得隐含吨公里服务等价性。 | cp_task |
| dq_activity | 所有清单行 | 时间及车队覆盖与任务分母匹配；披露未计量怠速、共享待命、失败操作及不确定性。 | cp_task; cp_energy |
| dq_species | co2_air; co_air; no_air; no2_air; so2_air; pm25_air | 物种及粒径组分身份、系数单位适合真实发动机和工况；未解决组分划分保留为缺口，不是零释放。 | cp_emission |
| dq_upstream | diesel_locomotive; electric_locomotive; track_share | 寿命期资产利用有依据，供应商组件不重复；明确缺少上游数据集。 | cp_asset |
| dq_identity | 所有清单行 | 关联数据使用前核定每个实际流UUID；语义候选及归档支持身份不能证明新流已核验。 | 身份直读核验 |

## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `validate_task` | 要求唯一pushing_service产出为1 item、强制限定信息完整、完成任务数为正值。拒绝干线运输改名为支持，以及整任务与组成移动重复计数。 | un-cpc-67310 |
| `validate_energy` | 要求燃料及电力衡算、路线特定条件、接近返回怠速纳入，并使份额与车队总量匹配；拒绝为柴油电传动虚构电网输入。 |  |
| `validate_species` | 要求原子输入、废物和基本物种；拒绝以氮氧化物总量替代一氧化氮或二氧化氮，或将总颗粒物与细粒径组分重复计入；保留实际数据缺口。 |  |
| `validate_boundary` | 披露机车、轨道、维护、废物处理及供应商覆盖；部分前景计量不能声称完整上游覆盖或方法学批准。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 单元过程铁路推牵支持服务 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 等效明确支持任务，并披露车辆配置、范围、牵引路线、完整周期及资产边界 |
| excluded_use | 通用每车厢或吨公里货运系数；任意铁路旅程；没有活动证据的其他任务范围 |
| required_metadata | 全部任务限定信息；N及事件分布；牵引怠速计量；发动机物种证据；上游资产；分配和接收方身份 |
| required_quality_disclosure | 流UUID缺口；缺失尾气或组分数据；计量覆盖；共享怠速；物理寿命不确定性；上游缺失 |
| update_trigger | 操作子型、车列范围、牵引发动机、排放控制、供电、资产寿命、任务边界或数据质量变化 |

## 11. 数据源

| 来源编号 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| un-cpc-67310 | official_guidance | 联合国统计司，CPC 3.0，子类67310 Railway pushing or towing services。https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/67310 | 分类范围及支持服务身份；分类不提供通用生命周期评价系数。 |
| epa-rail-facility | official_guidance | 美国环保署，Rail Facility Best Practices to Improve Air Quality。https://www.epa.gov/ports-initiative/rail-facility-best-practices-improve-air-quality | 区分调车与干线并筛查怠速及辅助工况；未采用数值油耗、排放系数、法规限值或技术性能。 |
