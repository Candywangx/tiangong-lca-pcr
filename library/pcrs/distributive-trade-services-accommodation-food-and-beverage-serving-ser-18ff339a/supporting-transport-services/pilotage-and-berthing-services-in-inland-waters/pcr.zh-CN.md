---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.pilotage-and-berthing-services-in-inland-waters
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 内河水域引航及靠泊服务

## 1. 范围与适用性

内河水域引航，包括引导船舶进出港或绕避航险的实际引航船艇服务，以及与各类内河船舶靠离泊有关的拖轮辅助。每数据集固定仅引航、仅拖轮靠泊或实际明确整包，固定船舶/环境及任务接口。[来源：`un-cpc-inland-pilotage`]

排除内河运输性拖带/推送（65229）、水道运营中的非拖轮岸牵（67512）、沿海/远洋引航靠泊（67521）、船舶打捞、装卸、仓储及无关港口运营。长距离驳船运输拖带不因使用拖轮而成为靠泊助拖。客户船推进、货物及制造分别核算。[来源：`un-cpc-inland-pilotage`]

| 服务变体 | 计数任务 | 实际定义 |
| --- | --- | --- |
| pilot_only | 一个已完成明确内河引航任务 | 声明操纵引航起止、路线/航险、实际引航员接送/登离轮、受助船及水文条件，不假定拖轮。 |
| tug_berthing_only | 一个已完成明确内河靠泊或离泊助拖任务 | 声明靠泊、离泊或有明确边界的移泊动作、泊位、受助船、实际拖轮数量/配置/功率、带缆/解缆、时长及负荷，不含运输拖带。 |
| combined_package | 一个已完成准确引航加拖轮任务包 | 声明实际双方组件范围、协调及共用行程/待机；组件与整包输出不得重复同一工作。 |

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.pilotage-and-berthing-services-in-inland-waters |
| classification_refs | CPC 3.0 67522; exact |
| covered_products | 限定内河引航、实际引航接送及拖轮靠离泊任务或其准确整包 |
| excluded_products | 运输性拖推、非拖轮岸牵、沿海引航、打捞、装卸/仓储/港口运营及客户航行 |
| representative_product | 一个已完成明确内河离泊助拖，包含实际受助船、拖轮、水文、泊位及带解缆时间 |
| production_route | 计划/调度 → 实际接送及定位 → 引航操纵或拖轮带缆/助拖 → 实际解缆/离轮 → 归属返航/调位及保障 |
| market_state | 有实际运行记录的已验收完成任务，不是无范围的拖轮小时、吨位或发票 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 为已识别受助船完成明确内河引航或拖轮靠泊功能 |
| How much | 一个已完成任务，固定变体、船艇总体及物理路线/动作范围 |
| How well | 满足并记录实际约定端点、航行/靠泊条件及完成要求，当地限值采用实际证据，不设虚构默认值 |
| How long or cycle | 实际调度/接送/服务/解缆及归属返航/待机阶段的时间戳，不设通用任务时长 |
| reference_flow_link | `pilotage_task` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已完成的明确内河引航或拖轮靠泊任务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | pilot_only/tug_berthing_only/combined_package；准确完成任务及组件端点；内河河流/湖泊/港口及实际水域分类；路线/起止/泊位；受助船长/宽/吃水/排水量/载荷/推进状态；实际水位/流速/方向、天气/能见度、富余水深及桥闸净空观测和当地运行限值；实际航行/助拖/怠速/待机/调位/返航距离与时长；引航员接送路线；拖轮/引航艇编号及功率/发动机/系柱拖力配置；实际发动机负荷和船艇数；缆绳/护舷；客户推进边界；供能/岸电；运营方/供应商分工；实际完成/质量及安全记录；资产寿命及维护范围；地点及期间 |

Item(s)计数一个明确任务，仅引航/仅拖轮/整包分别建情景。靠泊、离泊、移泊、受助船尺寸及实际河流条件影响物理工作，计数不自动等效；即使零航程靠泊动作仍须记录实际发动机/负荷/时间及接送/空驶。吨公里、额定拖轮功率或一个付费小时均不能单独确定任务消耗。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| task_count | 参考产品 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 用cp_activity按固定变体/范围计验收任务，重试及整包组件不增加整任务数。 |
| fuel_mass | diesel | 质量 | kg | 按船艇/发动机/负荷测量任务燃料；升数须有可追溯实际等级密度/温度，不设单位功率或河流航程固定耗油。 |
| water_receiver | river_water; river_return | 体积 | m3 | 采用实际取退水量及接收介质；内河分类不允许照搬海水流或假定所有当地接收水体相同。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已识别内河受助船及已接受引航/靠泊任务，服务船及基地已存在；客户推进是独立所有方活动 |
| starting_condition_role | foreground_start |
| product_classification_scope | 仅内河引航操纵/接送及拖轮靠泊，排除运输拖带及沿海任务 |
| recursive_input_rule | 分包引航/拖轮组件以实际任务范围及供应商清单计入一次，剔除重叠自有船艇/燃料/资产 |
| upstream_dataset_requirement | 实际燃料/电力、服务船/缆/护舷制造、基地份额、维护、船员接送及真实废物接收/处理清单 |
| disclosure | 任务变体/接口、全部服务阶段、实际内河条件、人员/船艇身份、客户推进/供应商范围、接收水体、资产分母及数据缺口 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| boundary_task | 纳入实际准备/调度、引航接送/登离轮、拖轮定位/带缆/助拖/解缆、实际等候/重试及归属返航/调位、基地保障与任务相关维护；岸上登轮不虚设引航艇，仅引航不虚设拖轮。 | un-cpc-inland-pilotage |
| boundary_interfaces | 保留实际约定航行/任务计划、引航员/船长/拖轮通信、受助船资料及交接端点作为任务定义证据。英国MCA指导仅提供记录/接口结构，当地内河水位、流速、浅滩及桥闸净空限值采用实际当地记录，不引入数值默认值。 | mca-task-interfaces |
| boundary_energy | 区分服务船燃料/充电/辅用、客户船推进及港口设施；实际岸电可替代辅机活动，但电网及充电负荷仍保留，不以船上零燃烧声称生命周期零排放。环保署港作船指导仅提供路线证据，不是内河船队/因子默认值。 | epa-harbor-craft |
| boundary_receiver | 筛查实际冷却退水、舱底水/污水接收、油泄漏、防污涂层组分、尾波/螺旋桨扰动及水下噪声；采用实际河流/湖泊/半咸水接收介质和物种，收集废水不推定直接排河；化学流不证明完整当地生态覆盖。 |  |

## 6. 过程清单结构

实例化一个声明任务变体及实际船艇/工况。每卡为原子流，其他实际燃料、缆绳材料、液压液、制冷剂、涂层、污染物物种及废物流逐项增加。实际总氮氧化物或油总量须做具体身份/物种处理，不得复制进各流；电动任务不必有燃烧排放，但怠速或强流操纵不得仅因航程短而赋零油耗。

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| inland_task | 完成明确内河引航/靠泊任务 | required | 一个实际服务变体，逐项落实流条件 | foreground_production | 每参考流 |

### 过程：完成明确内河引航/靠泊任务（`inland_task`）

#### 输入

##### 产品流

###### 未掺混柴油（`diesel`）

仅实际拖轮/引航艇或运营设备消耗该等级燃料时纳入；测量主/辅机实际使用，其他等级/混合燃料另设具体行；受助船推进不是本燃料。

- 选定流：未掺混柴油
- 流属性/单位：质量 / kg
- 数量规则：每参考流的可归属实测交换量；cp_fuel。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fuel`
- 来源：

###### 服务船艇岸供电力（`craft_power`）

实际拖轮/引航艇电动/混合充电或停泊辅机供能时纳入；计量充电/辅用及损耗，与客户船供能分开；保留地区供应及与燃料避免重叠的实际边界。

- 选定流：服务船艇岸供电力
- 流属性/单位：能量 / kWh
- 数量规则：每参考流的可归属实测交换量；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：

###### 内河引航岸基用户端电力（`base_power`）

计量实际任务计划、通信、调度、照明及服务基地保障，分配实测共用负荷及待机，排除无关港口功能。

- 选定流：内河引航岸基用户端电力
- 流属性/单位：能量 / kWh
- 数量规则：每参考流的可归属实测交换量；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：

###### 矿物发动机润滑油（`engine_oil`）

实际发动机润滑时纳入；采集等级及领用/退回/退役油，并按有证据发动机活动分配实际维护。

- 选定流：矿物发动机润滑油
- 流属性/单位：质量 / kg
- 数量规则：每参考流的可归属实测交换量；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### 矿物液压油（`hydraulic_oil`）

实际舵机/绞车液压使用及维护时纳入，区分液压液与机油，记录实际回收/泄漏。

- 选定流：矿物液压油
- 流属性/单位：质量 / kg
- 数量规则：每参考流的可归属实测交换量；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### 编织聚丙烯拖缆（`towline`）

实际使用该缆绳材料时纳入；识别等级、直径、实测质量及实际替换/利用份额；钢丝或其他聚合物缆须另设行，不用缆索集合类别。

- 选定流：编织聚丙烯拖缆
- 流属性/单位：质量 / kg
- 数量规则：每参考流的可归属实测交换量；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### 硫化橡胶拖轮护舷（`fender`）

实际使用护舷时纳入；识别设计和制造清单，分配有证据的使用/替换份额，避免与拖轮建造清单重复。

- 选定流：硫化橡胶拖轮护舷
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：每参考流的可归属实测交换量；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：

###### 自来水（`water`）

实际船员/基地卫生或服务船清洗时纳入，计量并区分作为商品供应受助船的水。

- 选定流：自来水
- 流属性/单位：体积 / m3
- 数量规则：每参考流的可归属实测交换量；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### 汽油乘用车引航员接送（`pilot_road_transfer`）

实际任务相关道路接送时纳入；记录路线、实际距离、乘员及分配旅客距离；船艇接送采用引航艇作业，不重复供应商已含行程。

- 选定流：汽油乘用车引航员接送
- 流属性/单位：旅客运输 / person*km
- 数量规则：每参考流的可归属实测交换量；cp_transfer。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_transfer`
- 来源：

###### 已确定配置的内河靠泊拖轮（`tug_share`）

实际拖轮靠泊时纳入；固定船体、推进、发动机、功率/系柱拖力及制造范围，采用有证据全寿命活动和任务利用量，不套客户船清单。

- 选定流：已确定配置的内河靠泊拖轮
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：每参考流的可归属实测交换量；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：

###### 已确定配置的内河引航接送艇（`pilot_boat_share`）

实际使用接送艇时纳入；识别船艇/配置及有证据制造/更新分母；从岸上登轮不虚设接送艇。

- 选定流：已确定配置的内河引航接送艇
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：每参考流的可归属实测交换量；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：

###### 已确定配置的内河引航岸基建筑（`base_share`）

实际岸基建筑使用时纳入；分配已识别建筑/共用面积及有证据寿命服务份额，排除本任务不用的整个港口资产。

- 选定流：已确定配置的内河引航岸基建筑
- 流属性/单位：面积 / m2
- 数量规则：每参考流的可归属实测交换量；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：

##### 基本流

###### 水，淡水，从河流取用（`river_water`）

实际开式冷却取河水时纳入；记录来源、实测体积、循环及温度；其他来源/接收介质须使用独立匹配流。

- 选定流：水，淡水，从河流取用
- 流属性/单位：体积 / m3
- 数量规则：每参考流的可归属实测交换量；cp_cooling。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_cooling`
- 来源：

#### 输出

##### 产品流

###### 已完成的明确内河引航或拖轮靠泊任务（`pilotage_task`）

一个任务固定仅引航、仅拖轮靠泊或准确整包，固定船舶/环境及实际起止接口；组件不得再作为独立整包输出。

- 选定流：已完成的明确内河引航或拖轮靠泊任务
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_activity`
- 来源：

##### 废物流

###### 废矿物发动机油（`used_engine_oil`）

实际分离排出机油时纳入；称重并识别岸上接收/处理；液压废油若并非真实同类收集废物须另设流。

- 选定流：废矿物发动机油
- 流属性/单位：质量 / kg
- 数量规则：每参考流的可归属实测交换量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 含油服务船艇舱底水（`bilge_water`）

实际收集含油舱底水时纳入；计量体积/油组成及实际岸上接收/处理，不推定直接排河。

- 选定流：含油服务船艇舱底水
- 流属性/单位：体积 / m3
- 数量规则：每参考流的可归属实测交换量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 服务船艇生活污水（`sewage`）

实际船员污水时纳入；记录实测或平衡体积及实际接收/船上处理范围，实际环境排放须另有物种/介质证据。

- 选定流：服务船艇生活污水
- 流属性/单位：体积 / m3
- 数量规则：每参考流的可归属实测交换量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 废聚丙烯拖缆（`worn_rope`）

实际退役聚丙烯缆时纳入；单独称量并识别处理/复用，不自动赋予回收收益。

- 选定流：废聚丙烯拖缆
- 流属性/单位：质量 / kg
- 数量规则：每参考流的可归属实测交换量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

##### 基本流

###### 水，退回河流（`river_return`）

实际冷却退水入河时纳入；计量体积/温度及实际化学质量；总循环量不是淡水消耗，热影响须另有场址/方法证据。

- 选定流：水，退回河流
- 流属性/单位：体积 / m3
- 数量规则：每参考流的可归属实测交换量；cp_cooling。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_cooling`
- 来源：

###### 化石二氧化碳，排入空气（`fossil_co2`）

仅实际服务船艇/运营方燃烧排放时纳入。采用实际燃料含碳/氧化或实测排放，区分上游供电及客户推进。

- 选定流：化石二氧化碳，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流的可归属实测交换量；cp_release。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_release`
- 来源：

###### 一氧化碳，排入空气（`carbon_monoxide`）

仅实际服务船艇/运营方燃烧排放时纳入。采用分物种实际发动机/负荷证据，燃烧排放总质量不等于一氧化碳。

- 选定流：一氧化碳，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流的可归属实测交换量；cp_release。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_release`
- 来源：

###### 一氧化氮，排入空气（`nitrogen_monoxide`）

仅实际服务船艇/运营方燃烧排放时纳入。须实测或有证据的一氧化氮分物种数据，总氮氧化物不自动等于一氧化氮。

- 选定流：一氧化氮，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流的可归属实测交换量；cp_release。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_release`
- 来源：

###### 二氧化氮，排入空气（`nitrogen_dioxide`）

仅实际服务船艇/运营方燃烧排放时纳入。二氧化氮与一氧化氮分别记录，保留当量质量及物种换算证据，不复制总氮氧化物。

- 选定流：二氧化氮，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流的可归属实测交换量；cp_release。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_release`
- 来源：

###### 二氧化硫，排入空气（`sulfur_dioxide`）

仅实际服务船艇/运营方燃烧排放时纳入。采用实际燃料含硫和氧化/控制证据或实测，不为内河船套用船用燃料含硫假设。

- 选定流：二氧化硫，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流的可归属实测交换量；cp_release。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_release`
- 来源：

## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| allocate_task | 优先拆分引航、拖轮、整包范围及不同船舶/环境任务；按实测负荷/时长归属船艇/发动机燃料和充电；多任务接送、返航/调位及待机按有记录的因果调度使用分配并核对全部任务，不向每任务重复整个船队/天或完整返航。 |  |
| allocate_assets | 为拖轮、引航艇、护舷、缆绳及基地维持持续账，采用有证据的全寿命活动/循环分母；仅分实际任务比例及实际更新份额，跨任务/期间累计制造份额不得超过一或每年重置；观测期仅分已归属期间份额；未知寿命/分母须审查和敏感性分析，不虚构船体质量。 |  |
| allocate_provider | 分包引航/拖轮/接送清单对已含燃料、设备及废物仅替代一次；避免重复船艇清单已含护舷/缆绳更新。客户推进、货物、费用及成功移动船舶不是额外共产品，实际废物回收不自动获收益。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | 记录类型 | 原始字段 | 采集方法 | 单位 | 频率 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_activity | inland_task | pilotage_task | 任务、当地工况及调度账 | 变体/整包；工单；受助船尺寸/吃水/载荷/推进；实际内河路线/泊位；当地水位/流速；水深/桥闸净空记录；任务端点/时间；引航接送；船艇编号；实际助拖/怠速/调位/返航；共用调度；完成 | 匹配实际任务计划、引航员/船长/拖轮交接及调度/定位记录；保留实测当地工况和实际验收接口，仅计同质任务，保持组件/整包关系、等候/重试及返航归属。 | Item(s) | 每实际任务/阶段 | 完整任务及归属保障阶段 | 全部实际引航/拖轮/接送运营方 | 每参考流 | 任务计划；交接；AIS/GNSS或等效路线日志；当地水文；完成及调度核对 |
| cp_fuel | inland_task | diesel | 船艇/发动机燃料及负荷账 | 船艇/发动机编号；功率；实际负荷/时间；主/辅机燃料；等级；实测kg；库存；换算时密度/温度；助拖/怠速/航行阶段 | 尽可能按发动机及任务用实际流量计/库存平衡；核对负荷日志、等候及空驶，仅在当地参数经核验并保留不确定性时采用有证据发动机特定负荷时间耗油方法，不设通用功率航程系数。 | kg | 每阶段及监测时段 | 全部代表服务船艇作业 | 实际发动机及运营方 | 每参考流 | 燃料计量；库存核对；实际发动机/负荷记录；参数证据 |
| cp_energy | inland_task | craft_power; base_power | 电力/充电及保障账 | 计量；kWh；电压/地区；充电输入/输出/损耗；实际船艇/基地利用；负荷；待机；供应商覆盖；客户供电区分 | 实测岸电/充电/基地负荷，按实测调度/利用分配任务份额；避免混合动力阶段燃料/充电重叠，区分上游发电及船上排放。 | kWh | 每充电/基地时段及阶段 | 完整代表运行及待机 | 实际船艇/基地/供应 | 每参考流 | 校准计量；充电日志；供能记录；任务分配 |
| cp_material | inland_task | engine_oil; hydraulic_oil; towline; water | 具体材料及维护账 | 单一等级/材料；kg/m3；缆径/质量；领退；实际替换；寿命/利用证据；库存；回收及泄漏 | 分别计量具体材料并分配有证据实际使用/替换份额，不给每任务分整条缆或整次换油；记录回收及废物去向。 | kg; m3 | 每供应/维护/库存事件 | 全部可归属服务保障 | 实际服务船艇/基地 | 每参考流 | 称重；库存/维护日志；供应商组成；利用及材料平衡 |
| cp_transfer | inland_task | pilot_road_transfer | 实际引航接送行程账 | 路线/方式；汽油车辆；实际km；乘员；旅客份额；用途；整包/供应商重叠 | 读取实际任务行程及旅客距离，其他方式须另设流；核对共用接送及供应商已含差旅，不假定每任务一次行程。 | person*km | 每实际行程 | 完整实际任务接送范围 | 实际接送运营方 | 每参考流 | 行程/调度日志；距离及乘员记录 |
| cp_assets | inland_task | fender; tug_share; pilot_boat_share; base_share | 持续船艇/设备/基地账 | 资产编号/配置；制造清单；Item(s)/m2；任务活动；有证据寿命/循环分母；实际更新；先前累计比例；期间份额；敏感性 | 关联实际船体/发动机/护舷/基地清单及有证据全寿命服务利用量；单列耗材/更新不重叠，跨全部任务/期间守恒分配比例，未知分母须审查。 | Item(s); m2 | 每分配及资产/更新变化 | 有证据全寿命及声明观测期 | 实际引航/拖轮/岸基资产 | 每参考流 | 资产及利用记录；寿命依据；范围/累计核对 |
| cp_waste | inland_task | used_engine_oil; bilge_water; sewage; worn_rope | 分类船舶废物接收账 | 单一流；实测kg/m3；油/化学组成；事件；收集；船上处理；岸上接收方；处理/处置 | 分别测量实际收集废物并追踪船上/岸上处理仅一次，不将交付废物视为直接排淡水，也不无记录假定接收/处理。 | kg; m3 | 每实际转移/排水时段 | 全部可归属服务废物 | 实际船艇及接收/处理供应商 | 每参考流 | 接收单；称重/计量；组成；处理清单 |
| cp_cooling | inland_task | river_water; river_return | 实际淡水冷却平衡 | 来源/接收河流；实际m3；温度；开/闭回路；循环；损失；污染；任务负荷 | 实测取退水及温度，核对循环及消耗份额，采用实际当地水体介质；热/生态影响须有体积平衡之外的场址证据。 | m3 | 每运行/监测时段 | 实际开式冷却运行 | 实际内河河流/船艇 | 每参考流 | 流量/温度记录；回路配置；水平衡 |
| cp_release | inland_task | fossil_co2; carbon_monoxide; nitrogen_monoxide; nitrogen_dioxide; sulfur_dioxide | 分物种服务发动机排放账 | 发动机/燃料身份；实际负荷/时间；含碳/硫；实测物种kg；空气介质；NO/NO2分物种/当量基准；控制工况；方法/因子适用；不确定性 | 采用实际物种实测或独立核验发动机/燃料/负荷特定证据；区分主/辅机及客户/供应商范围，不复制总氮氧化物至NO和NO2，也不套沿海燃料默认值；其他实际排放/泄漏须另有物种/介质记录。 | kg | 每实际负荷及代表监测 | 全部代表船上/运营排放 | 实际服务发动机及接收空气 | 每参考流 | 测量报告；当地燃料/发动机证据；负荷/碳/硫核对 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| task_attribution | 所有清单行 | 将实际作业、接送、待机及维护归属一个同质任务变体/范围，除以实际完成任务数并保留失败/重试；参考输出准确为1 Item(s)。 | cp_activity; 可归属实测总量 | 每参考流交换量 |  |
| asset_attribution | fender; tug_share; pilot_boat_share; base_share | 将有证据全寿命服务任务份额用于实际资产制造及实际更新范围，期间观测仅分已归属期间份额并守恒累计比例。 | cp_assets; cp_activity | 每参考流资产量 |  |
| engine_species | fossil_co2; carbon_monoxide; nitrogen_monoxide; nitrogen_dioxide; sulfur_dioxide | 采用实际物种质量或经核验发动机/燃料/负荷证据，在数据集中记录每项实际因子/单位及总氮氧化物当量转物种基准；本PCR不提供数值因子或负荷默认值。 | cp_release; cp_fuel | 每参考流单一物种排放 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| quality_task | pilotage_task | 核验变体、实际内河水域、船舶配置、当地流速/水位/净空记录及任务端点；仅引航、仅拖轮及整包结果区分。 | cp_activity |
| quality_duty | 所有能源行 | 核对实际助拖、航行、怠速、待机、接送及调位，不仅按距离、拖轮额定功率或客户船排水量推耗能。 | cp_activity; cp_fuel; cp_energy |
| quality_lifecycle | 所有资产行 | 支持寿命/循环分母及船艇/护舷/基地份额守恒，排除维护重叠；寿命/上游未知时不得声称完整生命周期。 | cp_assets; cp_material |
| quality_water | 所有清单行 | 核验实际淡水/其他内河接收介质及真实废物接收、化学/泄漏身份、热/尾波/噪声覆盖和不确定性；不得照搬海洋介质或将缺证据视为零。 | cp_waste; cp_cooling; cp_release |

## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| validate_task | 要求唯一pilotage_task输出等于1 Item(s)，固定一个变体、实际船舶/河流工况、任务接口及完整船艇/接送范围，不设无限定等任务因子。 |  |
| validate_classification | 拒绝把运输拖推、非拖轮岸牵、沿海引航及打捞/装卸/仓储伪装成内河靠泊；核验引航/拖轮整包组件关系并防重复。 | un-cpc-inland-pilotage |
| validate_boundaries | 区分客户推进、港口基础设施、供应商已含燃料/资产与服务船艇作业；核验实际整任务返航/待机分配及资产寿命份额守恒，不每任务分整船清单。 |  |
| validate_atomic_water | 要求具体燃料/缆/护舷/废物/污染物交换及实际适用性核验；保留NO/NO2区别、水源/介质及真实处理范围，身份与生态缺口明确保留，不暗示具备发布条件。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | inland_pilotage_berthing_service |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 具有兼容船舶、河流工况、接口及变体的明确内河引航/靠泊任务组件 |
| excluded_use | 内河运输拖带或完整航行、沿海引航、客户推进/港口基础设施足迹、无限定任务比较或运行安全批准 |
| required_metadata | pilot_only/tug_berthing_only/combined_package；准确完成任务及组件端点；内河河流/湖泊/港口及实际水域分类；路线/起止/泊位；受助船长/宽/吃水/排水量/载荷/推进状态；实际水位/流速/方向、天气/能见度、富余水深及桥闸净空观测和当地运行限值；实际航行/助拖/怠速/待机/调位/返航距离与时长；引航员接送路线；拖轮/引航艇编号及功率/发动机/系柱拖力配置；实际发动机负荷和船艇数；缆绳/护舷；客户推进边界；供能/岸电；运营方/供应商分工；实际完成/质量及安全记录；资产寿命及维护范围；地点及期间 |
| required_quality_disclosure | 身份/测量及负荷缺口；任务/接送/供应商边界；淡水/热/尾波/噪声范围；物种因子；资产寿命及缺失上游证据 |
| update_trigger | 任务变体、受助船、河流工况或净空、路线/泊位、服务船/动力系统、燃料/供能、接送计划、废物接收、供应商或寿命/分配证据变化 |

## 11. 数据源

| 来源编号 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| un-cpc-inland-pilotage | official_guidance | 联合国统计司CPC3.0，67522解释说明，与草案PDF375–376页一致。https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/67522 | 内河引航/引航船及拖轮靠离泊范围，排除运输拖带，不提供任务因子 |
| mca-task-interfaces | official_guidance | 英国MCA《港口与海运设施良好实践指南》，引航、拖带及航行计划章节，2025-04-15更新。https://www.gov.uk/government/publications/a-guide-to-good-practice-on-port-marine-operations/a-guide-to-good-practice-on-port-and-marine-facilities | 仅支持任务计划、引航员/船长/拖轮协调及交接记录结构；不从英国示例推断当地内河运行限值 |
| epa-harbor-craft | official_guidance | 美国环保署《港作船改善空气质量最佳实践》，船型说明及岸电章节，2026-10-23阅读网页。https://www.epa.gov/ports-initiative/harbor-craft-hc-best-practices-improve-air-quality | 支持实际拖轮/引航艇及岸电路线区分，不采用通用内河发动机、负荷、含硫、电压阈值或排放因子 |
