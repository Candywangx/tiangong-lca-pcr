---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.diesel-hydraulic-locomotive
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 柴油液力机车制造

## 1. 范围与适用性

本候选 PCR 适用于新制完整柴油液力铁路机车：柴油发动机动力经液力变矩器传动与机械最终驱动传至轮对，范围窄于 CPC49519。排除煤水车、蒸汽、电力、柴油电传动、蓄电池混合牵引机车、纯静液压牵引、动车轨道车辆、不完整车架单售发动机、改造维修运输维护服务。每台验收成品设备指一台完整机车。

制造前景从实际接收坯料供应商模块至记录完整车辆验收交付。制造者制造装配条件涂装传动辅助设备可归属制造试验实际保护计一次；排除运营寿命牵引燃料。公开制造商案例支持结构可能工序，不建立普遍物料表试验循环质量。科学审查待完成。[来源：zagro-production；gmeinder-model；voith-rail；voith-gears]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.diesel-hydraulic-locomotive |
| classification_refs | CPC3.0 49519；较窄背景，无已接受映射 |
| covered_products | 新制完整液力传动机械车轴驱动柴油液力机车 |
| excluded_products | 煤水车其他牵引结构动车不完整模块运营维修服务 |
| representative_product | 一台序列号关联声明轨距转向架发动机变矩器辅助设备的验收完整机车 |
| production_route | 实际坯料车架制造；行走集成；柴油液力传动安装；条件涂装；控制辅助；调试验收 |
| market_state | 新制完整验收机车，限定保留工作液压铁状态，排除运营燃油砂散装交付项 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造声明完整柴油液力铁路机车 |
| How much | 1 kg 验收净机车产出，每台记录除以实际 M |
| How well | 满足记录配置特定几何轨距车轮传动对中制动控制安全实际放行准则。等质量不意味着等牵引力速度运输服务；不采用普遍型号验收限值。 |
| How long or cycle | 一次制造与制造验收周期；不假定运营寿命 |
| reference_flow_link | finished_machine |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 验收完整柴油液力铁路机车 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 制造者型号序列号；图纸物料表版本；轨距轴式轮对转向架车轴齿轮安装压铁；柴油发动机数量类型序列号供应商包含；液力变矩器传动装置万向轴最终驱动冷却制动控制；司机室车钩安全后处理配置实际涂层；净交付液体状态；验收正实测 M kg 与 cp_mass、校准称量证据签署修正；排除燃油运营砂人员临时试验载荷包装散装备件；实际工厂场址时期门点供应商完成范围试验覆盖 |

M 包含安装车架司机室行走机构发动机液力传动控制辅助设备整体运行压铁保留润滑传动冷却工作液。排除燃油运营撒砂储料人员临时试验载荷工装可拆保护散装备件。记录实际同配置净验收质量；目录总重量轴荷额定功率标称加注容量不是 M。[来源：gmeinder-model]

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；使用 cp_mass 采集。 |
| `mass_record_origin` | cp_mass | Mass | kg | 要求实际校准轨道称量或轮重测量，原始序列配置关联仪表校准记录全部车轮支承皮重实测燃油砂临时载荷修正安装压铁保留工作液。仅全部支承覆盖且声明静态状态同步顺序程序校准重复性检查时合计独立实测轮重。签署质量核对建立净交付范围，绝不从目录虚构每台重量推定 M。 |
| `engine_count` | engine | Number of items | Item(s) | 完整供入柴油发动机保留公开物品数量参考。按每台机车采集验收安装发动机序列计数；q_item 台数按同一实测 M 归一化。独立记录实际发动机模块质量用于配置总质量核对，不把发动机流属性改写质量。 |
| `energy_conversion` | electricity | Net calorific value | MJ | 计量可归属接入电力；实际 kWh 以已核验单位关系3.6 MJ/kWh换算。记录电压地域供应路线，铭牌 kW 不是能量。 |
| `fluid_scope` | first fill and trial fuel | Mass | kg | 实际净加注供应商预加内容计量一次，区分保留消耗排出。体积记录须实测同组成状态密度温度；标称油箱油容量泛指热值不是换算证据。 |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收指定坯料已制车架转向架发动机传动辅助模块及实际供应商包含 |
| starting_condition_role | 前景接收至验收完整机车制造 |
| product_classification_scope | 完整液力柴油机车，不含煤水车柴油电或静液压牵引 |
| recursive_input_rule | 不以完整机车递归制造自身投入。外购完整中间体模块替代所含操作组成一次。 |
| upstream_dataset_requirement | 链接实际供应商牌号模块完整性属性路线时期地域；披露上游缺失外包 |
| disclosure | 制造者型号序列号；图纸物料表版本；轨距轴式轮对转向架车轴齿轮安装压铁；柴油发动机数量类型序列号供应商包含；液力变矩器传动装置万向轴最终驱动冷却制动控制；司机室车钩安全后处理配置实际涂层；净交付液体状态；验收正实测 M kg 与 cp_mass、校准称量证据签署修正；排除燃油运营砂人员临时试验载荷包装散装备件；实际工厂场址时期门点供应商完成范围试验覆盖 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground` | all stages | 纳入声明门点前实际制造者操作可归属返工试验首次加注资源一次。供应商已完成制造装配经外购中间体表示，不重复当地资源。明确报告缺失阶段条件缺席。 | `zagro-production` |
| `boundary_operations` | trials and downstream | 制造验收试验仅已证实代表设备实际协议属制造。排除营业调车牵引维护备件替换运营燃油砂基础设施寿命运输服务。供应商研发耐久运行不自动是每台工厂负荷。 | `voith-gears` |
| `boundary_upstream` | bought inputs | 逐实际接收交换供应商制造范围显式表示；上游数据集缺失阻止完整摇篮到大门声明。按物理实测基础独立声明外包实际运输服务链接；未指定服务集合不是清单流。 |  |


## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `frame` | 车架与司机室制造 | conditional | 报告制造者边界内实际实施坯料制造。 | foreground | 一台验收配置机车，使用 M 归一化 |
| `running_gear` | 转向架轮对制动集成 | required | 每台完整声明机车配置。 | foreground | 一台验收配置机车，使用 M 归一化 |
| `powertrain` | 柴油液力动力传动安装 | required | 完整柴油机液力传动机械车轴驱动配置。 | foreground | 一台验收配置机车，使用 M 归一化 |
| `coating` | 条件表面准备涂装 | conditional | 制造前景内实际实施表面准备涂装。 | foreground | 一台验收配置机车，使用 M 归一化 |
| `outfit` | 控制与辅助设备装配 | required | 每台制造者放行完整配置。 | foreground | 一台验收配置机车，使用 M 归一化 |
| `acceptance` | 制造调试与机车验收 | required | 每台验收完整机车及可归属抽样工厂试验。 | foreground | 一台验收配置机车，使用 M 归一化 |
| `packing` | 条件交付保护 | conditional | 声明门点实际供入可拆保护。 | foreground | 一台验收配置机车，使用 M 归一化 |

车架制造供入行走传动集成及条件涂装控制辅助制造验收，再条件保护。实际工位顺序供应商模块决定归属。必需装配阶段不使每项交换强制发生：逐卡须实际匹配组成状态独立供应商范围。量值数据集完成前逐项增列遗漏实际部件配方物质。未知保留缺口。

### 过程：车架与司机室制造 (`frame`)

切割成形机加工指定钢材，装焊车架司机室并检验实际焊缝。记录图纸实际板材牌号填丝保护气组成返工切削液。外购成品车架司机室跳过已包含制造；不假定厂内铸锻热处理。

#### 输入

##### 产品流

###### 热轧碳钢机车车架板材 (`steel_plate`)

仅本精确独立实际交换；保留供应商组成牌号状态已完成部件范围称量领退或接收者出口记录。供入总成已含本组成时经该总成计一次。缺席须记录，未知数量不是零。

- 选定流：热轧碳钢机车车架板材
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_frame。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_frame`
- 来源：`zagro-production`

###### 完整焊接钢机车车架总成 (`frame_module`)

仅本精确独立实际交换；保留供应商组成牌号状态已完成部件范围称量领退或接收者出口记录。供入总成已含本组成时经该总成计一次。缺席须记录，未知数量不是零。

- 选定流：完整焊接钢机车车架总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_frame。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_frame`
- 来源：`zagro-production`

###### 实心碳钢电弧焊填充丝 (`weld_wire`)

仅本精确独立实际交换；保留供应商组成牌号状态已完成部件范围称量领退或接收者出口记录。供入总成已含本组成时经该总成计一次。缺席须记录，未知数量不是零。

- 选定流：实心碳钢电弧焊填充丝
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_frame。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_frame`
- 来源：`zagro-production`

###### 气态二氧化碳钢焊保护气供应 (`shield_co2`)

仅本精确独立实际交换；保留供应商组成牌号状态已完成部件范围称量领退或接收者出口记录。供入总成已含本组成时经该总成计一次。缺席须记录，未知数量不是零。

- 选定流：气态二氧化碳钢焊保护气供应
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_frame。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_frame`
- 来源：`zagro-production`

###### 交流电 (`electricity_frame`)

仅实际计量本工序接入点匹配公开身份中国电网平均用户侧1–35kV交流供电。其他地域电压组合自发电须独立兼容流。欧洲制造商案例不将报告工厂定位中国；内部配电不重复供入。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_frame。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_frame`
- 来源：`zagro-production`

#### 输出

##### 废物流

###### 工业后钢废料 (`steel_offcut`)

仅实际厂内成形切割后未处理输出碳钢生产废料匹配公开范围，净称并记录接收者。区分含油机加工切屑已处理二次钢内部复用，不假定回收抵扣。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_frame。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_frame`
- 来源：`zagro-production`

###### 分流碳钢机加工切屑 (`steel_chips`)

仅本精确独立实际交换；保留供应商组成牌号状态已完成部件范围称量领退或接收者出口记录。供入总成已含本组成时经该总成计一次。缺席须记录，未知数量不是零。

- 选定流：分流碳钢机加工切屑
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_frame。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_frame`
- 来源：`zagro-production`

### 过程：转向架轮对制动集成 (`running_gear`)

记录实际轨距轴式转向架构架轮对轴齿轮集成悬挂制动车钩。外购完整转向架可能含轮对齿轮制动，所含组成替代计一次。制造者轮加工定位依据实际图纸工艺记录。空气真空设备依配置，不普遍强制双制动。

#### 输入

##### 产品流

###### 完整机车转向架及声明所含轮对 (`bogie`)

仅本精确独立实际交换；保留供应商组成牌号状态已完成部件范围称量领退或接收者出口记录。供入总成已含本组成时经该总成计一次。缺席须记录，未知数量不是零。

- 选定流：完整机车转向架及声明所含轮对
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_running_gear。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_running_gear`
- 来源：`gmeinder-model`

###### 成品钢机车轮对总成 (`wheelset`)

仅本精确独立实际交换；保留供应商组成牌号状态已完成部件范围称量领退或接收者出口记录。供入总成已含本组成时经该总成计一次。缺席须记录，未知数量不是零。

- 选定流：成品钢机车轮对总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_running_gear。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_running_gear`
- 来源：`gmeinder-model`

###### 完整空气机车制动控制总成 (`brake`)

仅本精确独立实际交换；保留供应商组成牌号状态已完成部件范围称量领退或接收者出口记录。供入总成已含本组成时经该总成计一次。缺席须记录，未知数量不是零。

- 选定流：完整空气机车制动控制总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_running_gear。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_running_gear`
- 来源：`gmeinder-model`

###### 成品钢铁路机车车钩总成 (`coupler`)

仅本精确独立实际交换；保留供应商组成牌号状态已完成部件范围称量领退或接收者出口记录。供入总成已含本组成时经该总成计一次。缺席须记录，未知数量不是零。

- 选定流：成品钢铁路机车车钩总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_running_gear。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_running_gear`
- 来源：`gmeinder-model`

###### 交流电 (`electricity_running_gear`)

仅实际计量本工序接入点匹配公开身份中国电网平均用户侧1–35kV交流供电。其他地域电压组合自发电须独立兼容流。欧洲制造商案例不将报告工厂定位中国；内部配电不重复供入。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_running_gear。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_running_gear`
- 来源：`gmeinder-model`

### 过程：柴油液力动力传动安装 (`powertrain`)

安装实际柴油机液力变矩器传动装置万向传动轴车轴齿轮，记录支承轴对中冷却燃油控制接口。本范围为液力矩转换机械最终驱动，不是柴油电传动牵引电机或纯静液压牵引。外购动力包传动所含组成替代计一次。缓速器辅助取力仅按实际配置；供应商干质量油容量不代替实测安装质量加注。

#### 输入

##### 产品流

###### 柴油发动机 (`engine`)

仅实际供应商范围匹配公开非道路非航空发动机类别的完整装配铁路牵引用柴油发动机，逐验收安装序列净计数。保留独立实测安装模块质量包含范围用于净 M，但保留公开 Count 参考；外购动力包所含发动机替代计一次。不推断普遍发动机台数功率循环排放认证。

- 选定流：柴油发动机 `d3ac8612-80b9-4283-9439-62aa4986fce2`
- 流属性/单位：物品数量 / Item(s)
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_powertrain。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_powertrain`
- 来源：`voith-rail`; `voith-gears`

###### 完整液力机车传动装置及变矩器 (`transmission`)

仅本精确独立实际交换；保留供应商组成牌号状态已完成部件范围称量领退或接收者出口记录。供入总成已含本组成时经该总成计一次。缺席须记录，未知数量不是零。

- 选定流：完整液力机车传动装置及变矩器
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_powertrain。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_powertrain`
- 来源：`voith-rail`; `voith-gears`

###### 成品钢机车万向传动轴总成 (`cardan`)

仅本精确独立实际交换；保留供应商组成牌号状态已完成部件范围称量领退或接收者出口记录。供入总成已含本组成时经该总成计一次。缺席须记录，未知数量不是零。

- 选定流：成品钢机车万向传动轴总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_powertrain。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_powertrain`
- 来源：`voith-rail`; `voith-gears`

###### 完整机车锥齿车轴齿轮装置 (`axle_gear`)

仅本精确独立实际交换；保留供应商组成牌号状态已完成部件范围称量领退或接收者出口记录。供入总成已含本组成时经该总成计一次。缺席须记录，未知数量不是零。

- 选定流：完整机车锥齿车轴齿轮装置
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_powertrain。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_powertrain`
- 来源：`voith-rail`; `voith-gears`

###### 润滑油 (`engine_oil`)

仅实际匹配本身份石油馏分配方润滑油，独立确认安装柴油发动机规格。保留牌号添加剂净首次加注保留质量；外购发动机内部预加省略。描述热值不是换算试验排放因子。不同合成油须独立行。

- 选定流：润滑油 `66628f20-9d33-4997-bd6c-6357453fa268`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_powertrain。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_powertrain`
- 来源：`voith-rail`; `voith-gears`

###### 石油基础配方液力传动工作油 (`trans_oil`)

仅本精确独立实际交换；保留供应商组成牌号状态已完成部件范围称量领退或接收者出口记录。供入总成已含本组成时经该总成计一次。缺席须记录，未知数量不是零。

- 选定流：石油基础配方液力传动工作油
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_powertrain。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_powertrain`
- 来源：`voith-rail`; `voith-gears`

###### 乙二醇水溶液柴油机冷却液配方 (`coolant`)

仅本精确独立实际交换；保留供应商组成牌号状态已完成部件范围称量领退或接收者出口记录。供入总成已含本组成时经该总成计一次。缺席须记录，未知数量不是零。

- 选定流：乙二醇水溶液柴油机冷却液配方
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_powertrain。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_powertrain`
- 来源：`voith-rail`; `voith-gears`

###### 交流电 (`electricity_powertrain`)

仅实际计量本工序接入点匹配公开身份中国电网平均用户侧1–35kV交流供电。其他地域电压组合自发电须独立兼容流。欧洲制造商案例不将报告工厂定位中国；内部配电不重复供入。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_powertrain。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_powertrain`
- 来源：`voith-rail`; `voith-gears`

### 过程：条件表面准备涂装 (`coating`)

分别记录实际清洗层面积配方涂料基料固化剂；供入已涂部件跳过已完成层。不自动强制喷砂烘炉溶剂及其排放。按当前安全数据表实测独立增列每种实际磨料化学配方已证实释放物质。

#### 输入

##### 产品流

###### 工艺用水 (`water`)

仅实际供入处理工业工艺水，实测净补给，排除内部再循环。区分资源取用水性处理转移废液，保留实际供应商地域状态。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_coating`
- 来源：`zagro-production`

###### 配方环氧钢底漆基料组分 (`epoxy_base`)

仅本精确独立实际交换；保留供应商组成牌号状态已完成部件范围称量领退或接收者出口记录。供入总成已含本组成时经该总成计一次。缺席须记录，未知数量不是零。

- 选定流：配方环氧钢底漆基料组分
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_coating`
- 来源：`zagro-production`

###### 聚胺环氧钢底漆固化剂配方 (`hardener`)

仅本精确独立实际交换；保留供应商组成牌号状态已完成部件范围称量领退或接收者出口记录。供入总成已含本组成时经该总成计一次。缺席须记录，未知数量不是零。

- 选定流：聚胺环氧钢底漆固化剂配方
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_coating`
- 来源：`zagro-production`

###### 交流电 (`electricity_coating`)

仅实际计量本工序接入点匹配公开身份中国电网平均用户侧1–35kV交流供电。其他地域电压组合自发电须独立兼容流。欧洲制造商案例不将报告工厂定位中国；内部配电不重复供入。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_coating`
- 来源：`zagro-production`

#### 输出

##### 废物流

###### 转交处理的钢表面清洗水性废液 (`effluent`)

仅本精确独立实际交换；保留供应商组成牌号状态已完成部件范围称量领退或接收者出口记录。供入总成已含本组成时经该总成计一次。缺席须记录，未知数量不是零。

- 选定流：转交处理的钢表面清洗水性废液
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_coating`
- 来源：`zagro-production`

### 过程：控制与辅助设备装配 (`outfit`)

安装实际接线控制电子起动电池空气压缩机燃油箱司机室安全设备。司机室玻璃照明尾气后处理列车供电按实际物料表供应商边界；本范围不得插入柴油电或混合牵引系统。安装压铁与临时试验载荷分开。

#### 输入

##### 产品流

###### 已充液铅酸机车起动电池 (`starter_battery`)

仅本精确独立实际交换；保留供应商组成牌号状态已完成部件范围称量领退或接收者出口记录。供入总成已含本组成时经该总成计一次。缺席须记录，未知数量不是零。

- 选定流：已充液铅酸机车起动电池
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outfit`
- 来源：`gmeinder-model`

###### 绝缘铜低压机车电缆 (`cable`)

仅本精确独立实际交换；保留供应商组成牌号状态已完成部件范围称量领退或接收者出口记录。供入总成已含本组成时经该总成计一次。缺席须记录，未知数量不是零。

- 选定流：绝缘铜低压机车电缆
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outfit`
- 来源：`gmeinder-model`

###### 完整活塞式机车空气压缩机 (`compressor`)

仅本精确独立实际交换；保留供应商组成牌号状态已完成部件范围称量领退或接收者出口记录。供入总成已含本组成时经该总成计一次。缺席须记录，未知数量不是零。

- 选定流：完整活塞式机车空气压缩机
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outfit`
- 来源：`gmeinder-model`

###### 成品焊接钢柴油机车燃油箱 (`fuel_tank`)

仅本精确独立实际交换；保留供应商组成牌号状态已完成部件范围称量领退或接收者出口记录。供入总成已含本组成时经该总成计一次。缺席须记录，未知数量不是零。

- 选定流：成品焊接钢柴油机车燃油箱
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outfit`
- 来源：`gmeinder-model`

###### 完整机车电子传动控制柜 (`control`)

仅本精确独立实际交换；保留供应商组成牌号状态已完成部件范围称量领退或接收者出口记录。供入总成已含本组成时经该总成计一次。缺席须记录，未知数量不是零。

- 选定流：完整机车电子传动控制柜
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outfit`
- 来源：`gmeinder-model`

###### 交流电 (`electricity_outfit`)

仅实际计量本工序接入点匹配公开身份中国电网平均用户侧1–35kV交流供电。其他地域电压组合自发电须独立兼容流。欧洲制造商案例不将报告工厂定位中国；内部配电不重复供入。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outfit`
- 来源：`gmeinder-model`

### 过程：制造调试与机车验收 (`acceptance`)

记录实际静动态制造试验制动传动控制功能几何修正净重量返工放行。试验协议速度载荷时长轨道台架状态抽样份额来自实际记录，不为普遍值。供应商齿轮耐久研发试验不是每台机车强制工厂循环。排除营业牵引驾驶运营寿命燃料维护。实际消耗试验柴油与车主交付保留燃油分开；试验撒砂与保留运营砂分开。

#### 输入

##### 产品流

###### 柴油 (`test_diesel`)

仅独立建立实际供入化石柴油，匹配本公开质量基础未特指牌号供应商身份。记录实际炼厂供应商品级混合化石比例净试验消耗退回车主保留及体积换算实测密度温度。身份不提供组成热值排放因子。生物贡献须独立兼容行碳核算。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_acceptance`
- 来源：`voith-gears`

###### 交流电 (`electricity_acceptance`)

仅实际计量本工序接入点匹配公开身份中国电网平均用户侧1–35kV交流供电。其他地域电压组合自发电须独立兼容流。欧洲制造商案例不将报告工厂定位中国；内部配电不重复供入。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_acceptance`
- 来源：`voith-gears`

#### 输出

##### 产品流

###### 验收完整柴油液力铁路机车 (`finished_machine`)

验收完整净机车一千克，含车架转向架发动机液力传动舾装整体安装压铁保留润滑传动冷却液。排除燃油运营砂人员临时试验载荷可拆保护散装备件。

- 选定流：验收完整柴油液力铁路机车
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_mass`
- 来源：`voith-gears`

#### 输出

##### 废物流

###### 废润滑油 (`spent_oil`)

仅纳入调试实际产生使用污染石油润滑油，产生转移时称量并记录接收者。公开废物身份也容许合成油，本行限实测石油油。不推断再生燃烧避免制造服务。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_acceptance`
- 来源：`voith-gears`

#### 输出

##### 基本流

###### 二氧化碳（化石源） (`fossil_co2`)

仅独立实测可归属制造试验化石 CO2 尾气，须实测尾气积分已证实燃油化石来源比例；不虚构混合因子。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_acceptance`
- 来源：`voith-gears`

###### 一氧化氮 (`nitric_oxide`)

仅独立实测可归属试验 NO；未物种拆分总 NOx 不是 NO，不规定必然数量默认因子。

- 选定流：一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_acceptance`
- 来源：`voith-gears`

###### 二氧化氮 (`nitrogen_dioxide`)

仅独立实测可归属试验 NO2；NO、N2O、氮亚硝酸盐未分 NOx 不替代，不规定必然数量默认因子。

- 选定流：二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_acceptance`
- 来源：`voith-gears`

### 过程：条件交付保护 (`packing`)

记录每个实际可拆保护交换并从净 M 排除；交付拆卸整体部件核对验收配置。排除运输工装散装备件临时载荷。

#### 输入

##### 产品流

###### 低密度聚乙烯薄膜（PE-LD） (`film`)

仅实际可拆非自黏非泡沫未增强未层压 PE-LD 膜匹配公开身份；称净领退并从 M 排除。层压保护不同树脂须独立行。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packing`
- 来源：

###### 交流电 (`electricity_packing`)

仅实际计量本工序接入点匹配公开身份中国电网平均用户侧1–35kV交流供电。其他地域电压组合自发电须独立兼容流。欧洲制造商案例不将报告工厂定位中国；内部配电不重复供入。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packing`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_orders` | shared manufacturing resources | 按机车工单配置分开并优先细分直接计量阶段。实际坯料模块接收工单试验资源返工按实测记录归属。不可分共用资源用已证实因果操作时间负荷层面积驱动：份额 = 工单驱动量 / 全部覆盖工单驱动量总和。保留证据时期全部工单分母。标称重量马力等台份额不自动有因果性。 | `ghg-allocation` |
| `allocation_recovery` | scrap and internal transfers | 内部坯料液体燃料复用为转移，不重复新投入或抵扣。输出废料废物保留实际质量接收者，不假定避免钢油收益。分离真实共产品；剩余分配须论证一致驱动记录审查。拒收返工设备在制核对报告期验收产出。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | 验收完整机车净质量 | controlled_acceptance_record | 型号；配置；序列号；验收净质量 M；原始实测轮重轨道重量记录；仪表校准；全部支承皮重；保留工作液压铁状态；实测燃油砂人员试验载荷排除项；交付修正；核验者 | 使用受控的验收质量记录核对同一配置的验收设备。 | kg | 每台验收机车 | 实际制造验收时期 | 声明制造者门点 | 每台验收净质量 | 原始实际校准实测签署配置质量核对 |
| `cp_frame` | frame | 车架与司机室制造 | foreground_record | 工单序列号；配置；验收台数；逐交换身份属性单位；领退库存变动；供应商包含；安装发动机序列计数独立实测质量；电力仪表单位场址电压；实际加注试验燃油消耗保留混合组成；物质介质出口；共用驱动分母；仪表校准 | 采集图纸版本坯料证书称量领退边角料切屑焊检记录实际工位公用工程。 | 实际行单位，发动机含 Item(s)、电力含 MJ | 每工单批次 | 声明制造时期 | 声明工厂披露供应商 | 可归属交换数量 / 验收设备数量 | 原始供应商称量计数仪表试验转移记录 |
| `cp_running_gear` | running_gear | 转向架轮对制动集成 | foreground_record | 工单序列号；配置；验收台数；逐交换身份属性单位；领退库存变动；供应商包含；安装发动机序列计数独立实测质量；电力仪表单位场址电压；实际加注试验燃油消耗保留混合组成；物质介质出口；共用驱动分母；仪表校准 | 保留序列号关联转向架轮对供应商范围实测质量轨距车轮检查定位制动车钩安装记录公用工程。 | 实际行单位，发动机含 Item(s)、电力含 MJ | 每工单批次 | 声明制造时期 | 声明工厂披露供应商 | 可归属交换数量 / 验收设备数量 | 原始供应商称量计数仪表试验转移记录 |
| `cp_powertrain` | powertrain | 柴油液力动力传动安装 | foreground_record | 工单序列号；配置；验收台数；逐交换身份属性单位；领退库存变动；供应商包含；安装发动机序列计数独立实测质量；电力仪表单位场址电压；实际加注试验燃油消耗保留混合组成；物质介质出口；共用驱动分母；仪表校准 | 保留发动机传动齿轮序列号供应商包含独立部件实测质量传动对中检验冷却燃油配置净首次加注保留平衡。 | 实际行单位，发动机含 Item(s)、电力含 MJ | 每工单批次 | 声明制造时期 | 声明工厂披露供应商 | 可归属交换数量 / 验收设备数量 | 原始供应商称量计数仪表试验转移记录 |
| `cp_coating` | coating | 条件表面准备涂装 | foreground_record | 工单序列号；配置；验收台数；逐交换身份属性单位；领退库存变动；供应商包含；安装发动机序列计数独立实测质量；电力仪表单位场址电压；实际加注试验燃油消耗保留混合组成；物质介质出口；共用驱动分母；仪表校准 | 采集供应商涂层包含安全数据表净称层组分实测工艺水实际准备固化公用工程分流废物物质出口。 | 实际行单位，发动机含 Item(s)、电力含 MJ | 每工单批次 | 声明制造时期 | 声明工厂披露供应商 | 可归属交换数量 / 验收设备数量 | 原始供应商称量计数仪表试验转移记录 |
| `cp_outfit` | outfit | 控制与辅助设备装配 | foreground_record | 工单序列号；配置；验收台数；逐交换身份属性单位；领退库存变动；供应商包含；安装发动机序列计数独立实测质量；电力仪表单位场址电压；实际加注试验燃油消耗保留混合组成；物质介质出口；共用驱动分母；仪表校准 | 采集序列物料表原始供应商完整性实际安装质量接线控制制动接口检验独立公用工程仪表。 | 实际行单位，发动机含 Item(s)、电力含 MJ | 每工单批次 | 声明制造时期 | 声明工厂披露供应商 | 可归属交换数量 / 验收设备数量 | 原始供应商称量计数仪表试验转移记录 |
| `cp_acceptance` | acceptance | 制造调试与机车验收 | foreground_record | 工单序列号；配置；验收台数；逐交换身份属性单位；领退库存变动；供应商包含；安装发动机序列计数独立实测质量；电力仪表单位场址电压；实际加注试验燃油消耗保留混合组成；物质介质出口；共用驱动分母；仪表校准 | 保留关联实际校准轮重或轨道称量的受控验收重量记录配置燃料砂工作液状态；实际试验记录实测消耗独立实测尾气物质废物接收者。 | 实际行单位，发动机含 Item(s)、电力含 MJ | 每工单批次 | 声明制造时期 | 声明工厂披露供应商 | 可归属交换数量 / 验收设备数量 | 原始供应商称量计数仪表试验转移记录 |
| `cp_packing` | packing | 条件交付保护 | foreground_record | 工单序列号；配置；验收台数；逐交换身份属性单位；领退库存变动；供应商包含；安装发动机序列计数独立实测质量；电力仪表单位场址电压；实际加注试验燃油消耗保留混合组成；物质介质出口；共用驱动分母；仪表校准 | 称各实际保护领退并核对整体交付件排除项。 | 实际行单位，发动机含 Item(s)、电力含 MJ | 每工单批次 | 声明制造时期 | 声明工厂披露供应商 | 可归属交换数量 / 验收设备数量 | 原始供应商称量计数仪表试验转移记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M；q_item = 每台验收成品设备的交换量；q_ref = 每 1 kg 参考流的交换量。 | q_item; M; cp_mass | q_ref |  |

采集实际工单逐净交换、扣记录退料库存变化、采用论证共用分配并除验收机车台数得到 q_item，再按同一实测完整配置 M 归一化。质量行保留 kg/kg、发动机数量 Item(s)/kg、电力 MJ/kg。直接计数完整供入发动机保留 Count；独立发动机重量仅核对净配置。兼容序列设备实测质量变化时，可归属总量除以实测验收质量总和并保留全部序列记录。分开不兼容轨距传动转向架压铁涂层验收配置。未知投入未经验证外推须审查。

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_mass` | cp_mass | 验收记录须实施 mass_record_origin；须原始校准物理轮轨实测序列全部质量状态修正。缺失实际方法未解释目录轴荷额定值阻止量值数据集完成。 | 原始重量报告校准修正平衡 |
| `quality_bom` | all stages | 车架司机室全部转向架轮对发动机传动万向轴车轴齿轮压铁制动控制实际辅助后处理液体质量核对验收范围。保留供应商包含并逐遗漏实际物料组成增列无重复。 | 图纸物料表供应商包含实测 |
| `quality_trial` | acceptance | 保留实际试验协议轨道台架载荷时长抽样设备覆盖净燃料液体退回。尾气物质须积分校准测量检出限实际介质；未分 NOx 不是 NO/NO2，生物部分不是化石 CO2。 | 试验燃油物质原件 |
| `quality_coverage` | dataset | 声明实际场址时期配置供应商范围条件缺席外包分配身份量值缺口不确定性经验质量限值上游缺失。实际质量范围来自校准记录已核验兼容证据，不虚构收率重量寿命。本 PCR 检查核验声明关系，不核验真实记录科学批准。 | 覆盖原始记录登记 |


## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference | 要求完整液力柴油机车及实施 cp_mass、mass_record_origin 的正实测净 M。匹配轨距车轴转向架传动压铁液体状态；拒目录总量额定轴荷标称加注作重量证据。参考输出名称必须与参考产品完全相同。 |  |
| `validate_identity` | all rows | 核验原子物质部件公开状态100名称实际参考属性单位组路线范围完整性。保留发动机 Count；电力 Energy 不是 Mass。液力传动不是静液压液压装置。无依据身份留空精确行登记。 |  |
| `validate_boundary` | supplier and test scope | 供应商完整模块预加计一次，不重复发动机转向架组成。核验代表验收试验覆盖、消耗保留燃油砂。制造试验与营业牵引供应商研发试验分开。缺实际量值底层称量方法保留审查。 |  |
| `validate_species` | elementary rows | 仅已证实可归属制造试验释放至精确介质子介质。此处化石 CO2、NO、NO2 身份为即时空气未指定，不是生物 CO2、N2O、氮亚硝酸盐水土壤长期释放。捕集废物不是排放物质。 |  |
| `validate_profile` | claimed completeness | 摇篮到门声明前链接实际上游供应商时期地域；证书声明须原始验收文件实际适用制度。泛指制造商能力不批准本机车方法学特定车辆。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 配置完整柴油液力机车前景制造数据集 |
| downstream_use | secondary_dataset；background_dataset，经合格审查并链接上游范围后 |
| allowed_use | 匹配轨距液力传动转向架压铁辅助液体状态验收净 M 范围门点场址时期制造供应链模型 |
| excluded_use | 列车调车运输服务寿命牵引燃料等质量牵引等效其他牵引结构无依据完整摇篮到大门声明 |
| required_metadata | 制造者型号序列号；图纸物料表版本；轨距轴式轮对转向架车轴齿轮安装压铁；柴油发动机数量类型序列号供应商包含；液力变矩器传动装置万向轴最终驱动冷却制动控制；司机室车钩安全后处理配置实际涂层；净交付液体状态；验收正实测 M kg 与 cp_mass、校准称量证据签署修正；排除燃油运营砂人员临时试验载荷包装散装备件；实际工厂场址时期门点供应商完成范围试验覆盖 |
| required_quality_disclosure | 身份量值物理重量记录缺口条件阶段完整物料表供应商包含试验覆盖分配不确定性经验限值上游缺失 |
| update_trigger | 轨距车轴转向架传动供应商模块压铁液体状态涂层实际重量记录修正验收制度工厂时期变化 |


## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `zagro-production` | literature | [ZAGRO Group production capability](https://www.zagro-group.com/en/our-company/zagro-group) | 制造能力段：工厂机加工板材加工焊接涂装分装总装车辆质量控制。未注明日期集团案例，不为普遍机车工艺化学配方强度。 |
| `gmeinder-model` | literature | [GMEINDER D75 BB-SE product sheet](https://www.zagro-group.com/fileadmin/media/downloads/gmeinder/GMEINDER_LOKOMOTIVEN_D75_BB_SE_EN.pdf) | PDF1：配置特定司机室制动转向架车钩差异及分开总重量燃油砂记录。仅未注明日期型号案例；不采用目录重量容差容量速度功率认证。实际净验收 M 安装范围须实测。 |
| `voith-rail` | literature | [Voith Drive New Ways,VT1570 en BDI2025-07](https://www.voith.com/corp-en/VT_Digest-Rail_25_BDI_VT1570_en_Digital.pdf) | PDF印刷25、30–32、52页：纵向车轴齿轮液力变矩器组成干质量油容量字段万向轴传动版次。仅供应商结构，不采用传动容量质量配方寿命强制缓速器；区分动车机车应用。 |
| `voith-gears` | literature | [Voith gear units](https://www.voith.com/corp-en/drives-transmissions/gear-units.html) | 柴油液力机车节：转向架外液力传动万向轴车轴齿轮接口；供应商测试段为产品研发。未注明日期可配置供应商案例，不普遍强制齿轮级数每台耐久试验。 |
| `ghg-allocation` | official_guidance | [WRI/WBCSD Product Life Cycle Accounting and Reporting Standard,2011](https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf) | 印刷63页PDF65页表9.1–9.2：历史避免细分因果分配层级。须实际实测兼容因果驱动，不给标称机车质量等台分配因子。 |
