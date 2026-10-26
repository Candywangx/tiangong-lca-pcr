---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.towing-services-for-commercial-and-private-vehicles
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 商用及私人车辆拖曳服务

## 1. 范围与适用性

涵盖故障商用或私人车辆拖曳以及其他车辆拖曳，包括违停移车。各数据集明确车型事故类别、起讫点、实际拖曳装载装置及任务范围。故障救援和违停移车是分别限定情景，不是无差别平均。[来源：`un-cpc3-67440`]

纳入实际调度准备、可归属进场、现场准备绞盘或装载、拖曳或救援转运、卸车及责任交接，并计可归属空驶调位和清理份额。平板、托举、拖曳辅助轮架（dolly）及其他实际配置各需记录限定。DVSA指南仅支持装备多样性，不作为通用操作或法律许可。

排除与拖曳救援无关的普通车辆货运、无拖曳的路边维修、后续维修报废、车辆销售及交接后扣车仓储。客户车辆仍是服务对象，其原制造及日常行驶燃料不是新增拖曳服务生产。任何实际救援导致泄漏、损伤或增量客户发动机活动须单列因果责任，不假定零值或整车替换。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.towing-services-for-commercial-and-private-vehicles |
| classification_refs | CPC 3.0 67440 |
| covered_products | 明确车辆及方法的完成车辆拖曳救援或其他移除任务，包括违停移车 |
| excluded_products | 普通车辆货运；独立维修；后续仓储报废及车辆制造 |
| representative_product | 一辆已识别车辆在指定接口间完成的一次拖曳任务 |
| production_route | 调度→进场→固定装载→拖曳救援→卸载交接；保留可归属调位及清理 |
| market_state | 具有保管责任及运营范围记录的已验收车辆转移服务 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 完成一辆已识别车辆的指定拖曳转移 |
| How much | 一次完成任务，明确实际车辆质量类别、方法、载车距离、进场调位距离及等待规模 |
| How well | 实际验收、责任交接、车辆状况及符合制造商要求的救援条件；不假定通用拖曳方法或损伤容限 |
| How long or cycle | 从接受调度至车辆交接，并计分配后实际调位清理；保留等待及失败尝试可归属作业 |
| reference_flow_link | `towing_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已完成车辆拖曳任务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 任务车辆编号；故障执法或其他原因；商用私人类别；实测或可追溯车辆质量及载荷；动力及驱动轴与状况；拖曳方法；起讫验收；进场载车调位路线距离；绞盘装载及等待小时；失败尝试；运营及分包边界；装备配置；基地清理份额；观测期间；电力地区电压 |

item是已核实Item(s)的单数别名，计量一辆已识别车辆的一次验收任务。它不是吨公里、拖曳公里、费用、车辆质量或整个拖车寿命。不同车型方法距离及事故情景分开。多车任务需要有依据车辆任务归属，不默认等分或免费返程。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `completed_task` | 参考产品 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 每份cp_task验收交接计一次。该任务内调度、连接、拖曳和卸载是阶段，不是四个完整服务产出。 |
| `phase_reconciliation` | 参考产品 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 按阶段保留全部实际载空距离及取力怠速小时。里程不能代替实测燃料，也不意味着现场作业零能耗。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已请求车辆位于指定地点及状况，实际拖曳配置可用 |
| starting_condition_role | foreground_start |
| product_classification_scope | 包括故障及违停移除情景的明确拖曳救援任务 |
| recursive_input_rule | 分包拖曳阶段作为有证据上游服务进入；防止同一阶段重复自有车队燃料距离及制造份额 |
| upstream_dataset_requirement | 实际能源供应、耗材、配置车辆装备生产报废及废物处理，明确组件边界 |
| disclosure | 车辆事故方法；调度交付接口；任务阶段；空驶调位分配；失败任务；救援损伤；基地及资产寿命分母 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `boundary_tow` | 纳入故障或其他拖曳原因的实际服务阶段及车辆转移。客户车辆制造日常使用及独立维修仓储在外，仅纳入实际可归属救援活动。 | un-cpc3-67440 |
| `boundary_configuration` | 声明实际救援配置，包括存在时的提升装载装置及绞盘。不假定一种方法适用于所有客户车辆或能源等价。 | dvsa-recovery-equipment |
| `boundary_energy` | 按实际拖车发动机及活动记录燃料，包括怠速及空驶阶段。外购电及上游能源供应与直接移动燃烧分开。 | epa-mobile-combustion |
| `boundary_atomic` | 将初始卡片外实际各燃料、制冷剂、维护零件、泄漏清理材料、废物及排放物种各单列。核对基地调度清理及资产负担；设备缺席须有适用性记录。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| towing | 调度、救援拖曳并交接已识别车辆 | required | 实际事故配置装备及条件行 | foreground_production | 每参考流 |

### 过程：调度、救援拖曳及交接已识别车辆 (`towing`)

#### 输入

##### 产品流

###### 柴油 (`diesel`)

拖曳车辆及发动机驱动提升系统实际燃烧柴油；保留载车、空驶、怠速和取力阶段，同一发动机燃料不得重复计量。

- 选定流：柴油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：

###### 汽油 (`petrol`)

适用于本任务实际可归属汽油拖曳或辅助设备；与客户车辆日常燃料分开。

- 选定流：汽油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：

###### 低压交流电 (`electricity`)

适用于实际电动拖车充电、电动绞盘及基地调度用电；记录地区电压和实测充电损失，避免电池端与电网端电量重复。

- 选定流：低压交流电
- 流属性/单位：能量 / kWh
- 数量规则：每参考流的可归属实测交换量；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：

###### 液压润滑油 (`hydraulic_oil`)

归属于指定提升绞盘设备的实际液压补充及更换；区分库存、消耗补充及排出油。

- 选定流：液压润滑油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_materials。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：

###### 发动机润滑油 (`engine_oil`)

适用于燃烧式拖车维护；采用实际换油数量及有依据任务份额归属。

- 选定流：发动机润滑油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_materials。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：

###### 自来水 (`water`)

实际可归属拖曳装备清洗水，不假定提供客户洗车服务。记录计量采集基准。

- 选定流：自来水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：

###### 钢制绞盘钢丝绳 (`wire_rope`)

适用于实际钢丝绳；记录等级、更换质量及重用寿命利用量。不得每任务计新绳，也不重复设备整体制造已含钢绳。

- 选定流：钢制绞盘钢丝绳
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_materials。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：

###### 聚酯车辆捆绑带 (`strap`)

实际捆绑带制造或更换份额及重用记录；区分车辆固定与客户货物包装。

- 选定流：聚酯车辆捆绑带
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_materials。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：

###### 卡车轮胎 (`tyre`)

拖曳车辆实际更换轮胎份额，具有实测数量质量及有依据使用寿命；避免重复车辆制造数据集中的初装轮胎。

- 选定流：卡车轮胎
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_materials。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：

###### 车辆救援拖车 (`tow_truck`)

实际配置救援拖车的制造报废份额。声明平板、托举或其他实际装置、动力型式及上游组件范围。

- 选定流：车辆救援拖车
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：每参考流的可归属实测交换量；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：

###### 车辆救援绞盘 (`winch`)

适用于单独建模的实际绞盘；仅在完整拖车清单未含时记录其制造份额。运行能源在能源行只计一次。

- 选定流：车辆救援绞盘
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

###### 已完成车辆拖曳任务 (`towing_output`)

一辆已识别车辆在指定终点完成验收交接；保留全部可归属任务投入，不将客户车辆自身视为新制造产出。

- 选定流：已完成车辆拖曳任务
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：1 item
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_task`
- 来源：

##### 废物流

###### 废液压油 (`waste_hydraulic`)

实际分类收集排出液压油，记录污染及处理去向；设备内仍存油不是废物产出。

- 选定流：废液压油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 废发动机润滑油 (`waste_engine_oil`)

实际分类发动机维护废油；区分液压油及服务供应商已含处置。

- 选定流：废发动机润滑油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 废弃钢制绞盘钢丝绳 (`waste_rope`)

实际报废钢绳质量及处理，不设默认回收抵扣。

- 选定流：废弃钢制绞盘钢丝绳
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 废弃卡车轮胎 (`waste_tyre`)

实际更换后送往有记录处理的轮胎；区分翻新及使用中的材料损失。

- 选定流：废弃卡车轮胎
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 拖曳装备清洗废水 (`wastewater`)

实际收集清洗废水，记录污染及处理；泄漏清理流需另设各自具体身份。

- 选定流：拖曳装备清洗废水
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

实际拖车或辅助发动机化石燃烧，采用燃料特定实测碳基准或有依据因子；上游燃料生产分开。

- 选定流：化石二氧化碳，排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_emissions。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`epa-mobile-combustion`

###### 化石甲烷，排入空气 (`methane`)

适用于实测或有依据特定发动机燃烧甲烷；明确燃料来源、发动机控制及活动，不假定为二氧化碳固定比例。

- 选定流：化石甲烷，排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_emissions。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`epa-mobile-combustion`

###### 一氧化二氮，排入空气 (`nitrous_oxide`)

实际有依据发动机一氧化二氮，记录燃料、技术、车型年款或测试记录；不得视为二氧化氮。

- 选定流：一氧化二氮，排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_emissions。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`epa-mobile-combustion`

###### 二氧化氮，排入空气 (`nitrogen_dioxide`)

适用于实际实测或建模二氧化氮；总氮氧化物需有依据物种分配后方可采用此身份。

- 选定流：二氧化氮，排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_emissions。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：

###### 粒径小于2.5微米的颗粒物，排入空气 (`pm25`)

实际有依据PM2.5，明确来源及粒径截断；区分尾气、轮胎及制动磨损，避免与总颗粒物重叠。

- 选定流：粒径小于2.5微米的颗粒物，排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_emissions。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：

## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `allocate_mission` | 优先直接归属任务燃料充电及现场作业。共用路段须有实际路线时间载荷证据；一致分配进场及交付后调位，不假定每任务均返回基地。 |  |
| `allocate_failures` | 保留任务可归属等待、取消尝试及返工于匹配可比任务总量，再除以验收完成任务数。零完成产出不能支持虚构的每任务强度。 |  |
| `allocate_assets` | 实际配置拖车绞盘及维护制造报废按记录使用量除以有依据寿命使用量分配；核对初装更换组件及累计不超过一个寿命。不假定拖车质量寿命公里或绞盘能力。 |  |
| `allocate_custody` | 客户车辆为服务对象，不是共产品或新生产车辆。透明分配实际救援导致损伤泄漏处理，后续维修仓储报废保持独立关联边界。不默认避免损伤或回收抵扣。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_task | towing | towing_output | mission_record | 任务车辆编号；事故；车辆质量类别动力；方法；起讫；调度进场装载拖曳卸载交接；空驶调位距离；等待；失败尝试；验收 | 按唯一任务核对定位里程调度现场及签收记录；分开载车空驶阶段及呼叫取消。 | item | 每任务 | 完整任务及匹配支持期间 | 一个明确车辆事故方法情景 | 每参考流 | 调度定位；交接；车辆证据 |
| cp_energy | towing | diesel; petrol; electricity; water | meter_record | 行；车辆发动机；燃料库存；实测燃料；充电读数；阶段距离小时；怠速取力；基地任务份额；密度条件 | 采用实际车辆燃料充电及水记录并核对库存；仅有计量支持时分开行驶和取力能源。体积换算须有燃料特定证据。 | 各行单位 | 每任务及加油充电期间 | 与cp_task同期间 | 实际拖车车队及支持 | 每参考流 | 仪表；燃料充电台账；阶段日志 |
| cp_materials | towing | hydraulic_oil; engine_oil; wire_rope; strap; tyre | maintenance_record | 具体材料零件；领退质量；更换；重用寿命使用量；配置；任务份额 | 称量实际维护材料数量并记录有依据利用份额；核对初装组件及外包服务内容。 | kg | 维护事件及期间 | 与任务同车队期间 | 指定拖曳装备 | 每参考流 | 工单；库存；重用记录 |
| cp_assets | towing | tow_truck; winch | asset_record | 资产编号；配置；动力；制造组件范围；实际使用；有依据寿命使用量；既往份额；报废 | 根据有依据寿命分母核对资产台账上游制造及里程小时记录；单独识别已内含绞盘钢绳组件。 | item | 资产更新及匹配期间 | 资产寿命及任务期间 | 仅实际拖曳装备 | 每参考流 | 台账；组件范围；分母证据 |
| cp_waste | towing | waste_hydraulic; waste_engine_oil; waste_rope; waste_tyre; wastewater | waste_record | 具体流；质量；组成；污染；来源；处理；去向；日期；任务车队份额 | 计量分类维护清理流并核对联单；客户泄漏及仍装在车上的轮胎不自动成为运营废物。 | kg | 每废物事件 | 与维护任务份额同期间 | 可归属拖曳作业 | 每参考流 | 称量；联单；责任 |
| cp_emissions | towing | fossil_co2; methane; nitrous_oxide; nitrogen_dioxide; pm25 | emission_record | 物种；燃料碳来源；发动机技术年份；活动；阶段；模型测试；因子来源；控制；介质 | 采用实测或有来源车辆发动机特定方法及匹配燃料阶段记录。保留各物种来源及接收介质，供应排放分开。 | kg | 测试及匹配任务期间 | 与cp_task同期间 | 实际移动及辅助源 | 每参考流 | 测试模型来源；燃料阶段记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_task_intensity` | 所有清单行 | 核对全部可归属任务交换及一致进场调位支持份额；匹配可比总量除以验收完成任务数。不得因无客户在车上而遗漏阶段。 | cp_task; cp_energy; cp_materials; cp_waste | 每参考流 |  |
| `calc_assets` | tow_truck; winch | 采用实际利用量及有依据寿命分母应用allocate_assets，再按cp_task归一可归属期间份额。寿命无依据或组件重叠保留明确审查缺口。 | cp_assets; cp_task | 每参考流 |  |
| `calc_emission_species` | fossil_co2; methane; nitrous_oxide | 采用实测物种质量或有来源燃料技术特定方法及实际阶段活动和控制。燃料基准二氧化碳及活动基准甲烷一氧化二氮须保留各自实际基准；不设通用油耗、仅里程怠速代理、氮氧化物转二氧化氮捷径或默认影响因子。 | cp_emissions; cp_energy; cp_task | 每参考流物种质量 | epa-mobile-combustion |
| `calc_other_pollutants` | nitrogen_dioxide; pm25 | 采用污染物特定测量或独立引用来源的装备技术方法及实际活动；保留二氧化氮物种分配和PM2.5粒径截断。移动燃烧温室气体来源不确立这些污染物因子。 | cp_emissions; cp_energy; cp_task | 每参考流物种质量 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| dq_task | towing_output | 要求车辆事故方法距离及交接身份，分开违停移车和故障路线。费用或车辆质量本身不能确立功能。 | cp_task |
| dq_phase | 所有清单行 | 核对全部空载现场等待清理及失败尝试边界；燃料充电支持保持实际配置及匹配期间。 | cp_task; cp_energy |
| dq_assets | tow_truck; winch | 要求有证据寿命利用量及初装更换范围，对不确定分母作敏感性分析。 | cp_assets |
| dq_identity | 所有清单行 | 采用前核实精确流属性单位及正式中文名。缺失UUID保留逐项缺口，不改为合并燃料材料标签或宣称全面验证。 | 直读支持及未解决登记 |

## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `validate_task` | 要求唯一towing_output为1item，关联一辆验收转移车辆及明确起终方法。拒绝吨公里费用或纯维修任务替代。 | un-cpc3-67440 |
| `validate_phase_boundary` | 核实调度空驶进场现场载车拖曳交接及实际调位归属，包括等待重试。核对分包阶段及客户维修仓储边界，避免重复。 |  |
| `validate_atomicity` | 各实际燃料公用工程零件资产废物及排放物种均需各自具体交换及相同参考分母。审查组件重叠寿命份额及身份上游缺口；解析通过不是方法发布批准。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | vehicle_towing_service |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 明确事故车辆运营或执法情景中的具体拖曳救援任务组成 |
| excluded_use | 不区分车辆方法距离的通用拖曳因子；客户原车制造；完整维修仓储报废足迹 |
| required_metadata | 全部任务限定；阶段距离时间；任务支持分包分配；能源来源；实际资产组件范围；上游身份 |
| required_quality_disclosure | 失败任务调位边界；车辆质量阶段不确定性；排放方法；寿命分母；缺失UUID及上游清单；损伤责任限制 |
| update_trigger | 事故车型路线拖曳装置动力车队运营合同边界维护或寿命证据变化 |

## 11. 数据源

| 来源编号 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| un-cpc3-67440 | official_guidance | UNSD CPC Version 3.0 subclass 67440 explanatory note. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/67440 | 故障及其他含违停移车拖曳范围 |
| dvsa-recovery-equipment | official_guidance | UK DVSA, Running a vehicle recovery business: driver and vehicle safety rules, updated 12 August 2025, section 2.1 physical construction. https://www.gov.uk/government/publications/guide-for-recovery-operations/running-a-vehicle-recovery-business-driver-and-vehicle-safety-rules | 装备多样性及明确救援配置；仅英国背景，不作通用法律或拖曳方法批准 |
| epa-mobile-combustion | official_guidance | US EPA, Direct Emissions from Mobile Combustion Source, December 2023, Activity Data and mobile-combustion species. https://www.epa.gov/sites/default/files/2020-12/documents/mobileemissions.pdf | 燃料活动及单独二氧化碳甲烷一氧化二氮核算；不含上游供应供电方法，不采用默认因子，不作为完整LCA标准 |
