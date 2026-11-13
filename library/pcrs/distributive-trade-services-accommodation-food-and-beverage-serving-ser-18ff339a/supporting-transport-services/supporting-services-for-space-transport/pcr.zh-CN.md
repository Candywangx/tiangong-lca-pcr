---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.supporting-services-for-space-transport
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 空间运输支持服务

## 1. 范围与适用性

适用于能够证明服务于明确空间运输活动的专门支持：发射再入场地面处理及地面支持设备、靶场运行保障、运输任务控制跟踪。每数据集须识别实际运输阶段、接口、地点及一个验收支持任务或有界服务区块；合同可包括一个类别或指定组合。地面处理、靶场及控制是条件路线，不是等价通用发射。[un-cpc3-67640]

排除整枚火箭航天器发射飞行、飞行推进、飞行器载荷制造及原有载荷内容；普通货运、独立科学工业测试制造；无关航空器靶场活动；以及未证明运输支持功能的终端卫星通信、GPS导航产品或载荷科学运行。仅交付飞行推进剂不等于本服务消耗。仅在明确分配接口纳入实际必需支持处理损耗，避免重计客户飞行器清单。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.supporting-services-for-space-transport |
| classification_refs | CPC 3.0 67640 |
| covered_products | 明确专门地面、靶场及运输控制跟踪支持任务 |
| excluded_products | 运输飞行及载荷功能；无关通信导航；独立制造测试 |
| representative_product | 空间运输支持任务 |
| production_route | 必需核对加实际条件地面靶场控制路线 |
| market_state | 具有记录完成接口的验收配置支持任务或有界服务区块 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 为已识别空间运输活动提供声明专门支持功能 |
| How much | 一个具有指定功能、设施链路能力、活动规模及精确期间的完成验收任务区块 |
| How well | 记录适合所选功能的实际就绪、覆盖、连续性、数据指令质量、安全接口及验收准则 |
| How long or cycle | 明确准备起点至验收交接终点，包括可归属待机、演练、中止及返工 |
| reference_flow_link | `support_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 空间运输支持任务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 任务活动及运输阶段；支持类别及精确功能；场址及地面飞行器客户接口；装备链路设施配置能力；实际时长起终；服务规模验收及实际质量；演练中止重试待机分配；气体物种状态纯度压力及保管转移回收；运营客户供应责任；实际计量公用工程；靶场运输及无关用户；资产生命周期分母；具体废物释放介质 |

item是已核实Item(s)的单数别名，计一个指定验收支持任务区块。它不是发射、载荷千克、天线小时、数据吉字节或飞行；不同类别功能规模期间的事件不能仅按个数合并。其他强度读数须有实测匹配活动及有记录物理换算，且不声称功能等价。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `support_task` | 参考产品 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 采用一个cp_task验收配置事件，保持精确功能规模服务期间。不以任务成功、费用、载荷质量或发射次数替换。 |
| `gas_mass` | nitrogen; helium; air | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用实测物种混合物质量。标准体积换算须实际声明参考条件、组成及有依据密度；不设通用瓶数压力流量换算。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已识别运输活动阶段及有记录初始状态的支持设施 |
| starting_condition_role | foreground_start |
| product_classification_scope | 实际空间运输专门支持，具有地面靶场控制类别限定 |
| recursive_input_rule | 同类别分包支持按有范围供应投入进入；采用完整清单或明确替代展开，不能并用 |
| upstream_dataset_requirement | 实际公用工程、各气体材料、支持设施装备生命周期及具体废物管理；外部网络中继支持仅取实际运输份额 |
| disclosure | 精确活动阶段功能期间交接；地面消耗与飞行保管；供应重叠；寿命利用及释放证据 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `boundary_support` | 选择验收运输支持任务所需实际地面靶场控制过程；排除无关科学航空生产通用通信活动，或明确分配其共同范围。 | un-cpc3-67640; nasa-wallops |
| `boundary_custody` | 将客户飞行器载荷及飞行推进剂记为保管接口记录，不作新支持产出。分开交付飞行物料、实际地面吹扫放散、退回、回收、库存变化及物理损耗。上游推进剂供应按约定客户接口仅分配一次；处理能源损耗不得漏计或重复。 | nasa-gases |
| `boundary_increment` | 将火箭羽流、上升再入排放、飞行推进剂燃烧及飞行器制造排除直接支持。地面发动机点火测试须另行声明实际支持目的并具完整物种燃料清单；不套飞行因子或默认羽流化学。 |  |
| `boundary_lifecycle` | 纳入支持设施施工、地面装备、仪器、计算、维护及报废份额。实际真空、低温或制气装置须同时纳入有依据生命周期份额及实测能源；若这些负担已包含于采购完整服务则不重复展开。将每项额外实际气体试剂制冷剂水流废物排放逐项作为交换；筛查土地水噪声生态影响及远程部署，不把本卡片清单视为穷尽。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| ground | 地面处理及装备支持 | conditional | 声明任务含地面处理功能 | foreground_production | 每参考流 |
| range | 运输靶场运行保障 | conditional | 实际空间运输靶场保障 | foreground_production | 每参考流 |
| control | 运输任务控制跟踪支持 | conditional | 实际运输控制跟踪功能 | foreground_production | 每参考流 |
| accept | 核对并验收支持任务 | required | 每指定任务区块 | foreground_production | 每参考流 |

### 过程：地面处理及装备支持 (`ground`)

#### 输入

##### 产品流

###### 低压交流电 (`ground_electricity`)

实际适用此电压的处理、环境调节、泵送和地面支持设备用电；排除飞行用电及供应商已含消耗。

- 选定流：低压交流电
- 流属性/单位：能量 / kWh
- 数量规则：每参考流实际可归属实测量；cp_ground_meter。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_ground_meter`
- 来源：

###### 气态氮 (`nitrogen`)

适用于实际地面吹扫、阀门驱动或环境调节气体；记录交付状态、纯度、压力、上游气化及是否跨越飞行器交接。

- 选定流：气态氮
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流实际可归属实测量；cp_ground_gas。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_ground_gas`
- 来源：`nasa-gases`

###### 气态氦 (`helium`)

适用于实际地面检漏、吹扫或增压。分开地面消耗与交付飞行系统使用的氦并核对回收。

- 选定流：气态氦
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流实际可归属实测量；cp_ground_gas。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_ground_gas`
- 来源：`nasa-gases`

###### 压缩呼吸空气 (`air`)

适用于危险地面处理实际使用的防护呼吸空气；记录实际混合物规格。本地制气须采用真实压缩机清单而不重复采购供应。

- 选定流：压缩呼吸空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流实际可归属实测量；cp_ground_gas。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_ground_gas`
- 来源：`nasa-gases`

###### 工艺水 (`water`)

声明支持内实际地面冷却、清洗或喷淋补水。区分取水、循环、收集废水和蒸发；不将火箭尾气化学过程归于供水。

- 选定流：工艺水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流实际可归属实测量；cp_ground_meter。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_ground_meter`
- 来源：

###### 矿物液压油 (`hydraulic_oil`)

适用于地面装备维护及实际更换补油；记录等级库存，不是飞行器液压充注。

- 选定流：矿物液压油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流实际可归属实测量；cp_ground_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_ground_material`
- 来源：

###### 异丙醇 (`isopropanol`)

仅实际记录采用本物质的地面支持清洁；记录纯度、回收、蒸发和废溶剂去向，不假定通用使用。

- 选定流：异丙醇
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流实际可归属实测量；cp_ground_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_ground_material`
- 来源：

###### 地面氮气吹扫脐带组件 (`umbilical`)

实际安装地面组件制造、更换、报废份额及有依据利用分母；排除飞行器侧硬件及完整设施重复范围。

- 选定流：地面氮气吹扫脐带组件
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：每参考流实际可归属实测量；cp_ground_asset。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_ground_asset`
- 来源：

###### 地面喷淋水泵 (`pump`)

适用于实际安装泵的生命周期份额；不假设容量寿命，不重复完整发射台数据集已含泵。

- 选定流：地面喷淋水泵
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：每参考流实际可归属实测量；cp_ground_asset。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_ground_asset`
- 来源：

###### 空间运输处理建筑 (`building`)

实际处理设施施工及报废份额，声明洁净间、公用工程组件范围且仅计一次。

- 选定流：空间运输处理建筑
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：每参考流实际可归属实测量；cp_ground_asset。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_ground_asset`
- 来源：

#### 输出

##### 废物流

###### 收集的地面处理清洗废水 (`ground_wastewater`)

计量本分类污染液体及实际处理去向；适用时将喷淋径流、生活污水及化学洗涤器液体另列逐项流。

- 选定流：收集的地面处理清洗废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流实际可归属实测量；cp_ground_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_ground_waste`
- 来源：

###### 废矿物液压油 (`spent_oil`)

实际地面装备维护分类废油送处理，附库存维护记录；不是所有购油立即成为废物。

- 选定流：废矿物液压油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流实际可归属实测量；cp_ground_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_ground_waste`
- 来源：

###### 废异丙醇清洗溶剂 (`spent_solvent`)

实际单独废溶剂，记录实测组成去向；分开回收溶剂及排放异丙醇。

- 选定流：废异丙醇清洗溶剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流实际可归属实测量；cp_ground_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_ground_waste`
- 来源：

##### 基本流

###### 氮，排入空气 (`nitrogen_air`)

经实测转移、回收、库存核对的实际地面氮放散释放。转入飞行器气体不自动成为地面排放。

- 选定流：氮，排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流实际可归属实测量；cp_ground_release。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_ground_release`
- 来源：

###### 氦，排入空气 (`helium_air`)

实际可归属地面的氦释放；保留地面飞行器接口，不假定所有供应质量在当地放散。

- 选定流：氦，排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流实际可归属实测量；cp_ground_release。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_ground_release`
- 来源：

###### 异丙醇，排入空气 (`isopropanol_air`)

实际实测或有依据质量平衡清洁释放，统一扣除捕集、回收及废物量。

- 选定流：异丙醇，排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流实际可归属实测量；cp_ground_release。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_ground_release`
- 来源：

### 过程：运输靶场运行保障 (`range`)

#### 输入

##### 产品流

###### 低压交流电 (`range_electricity`)

所述电压和任务期间实际靶场仪器、安全协调、气象和监视设施用电。

- 选定流：低压交流电
- 流属性/单位：能量 / kWh
- 数量规则：每参考流实际可归属实测量；cp_range_meter。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_range_meter`
- 来源：`nasa-wallops`

###### 柴油 (`diesel`)

实际靶场移动备用发电或支持车辆燃料，注明待机部署归属；同一发电范围的采购发电电力为替代核算。

- 选定流：柴油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流实际可归属实测量；cp_range_meter。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_range_meter`
- 来源：`nasa-wallops`

###### 空间运输靶场跟踪雷达 (`radar`)

实际雷达生命周期份额归属运输支持任务，排除无关航空器试验靶场及完整站点重复份额。

- 选定流：空间运输靶场跟踪雷达
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：每参考流实际可归属实测量；cp_range_asset。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_range_asset`
- 来源：`nasa-wallops`

#### 输出

##### 基本流

###### 化石二氧化碳，排入空气 (`co2`)

仅实际支持发电车辆燃烧，采用场址燃料及有来源适用方法；火箭推进和上游供电排放另计。

- 选定流：化石二氧化碳，排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流实际可归属实测量；cp_range_combustion。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_range_combustion`
- 来源：

###### 二氧化氮，排入空气 (`no2`)

仅物种特定实测或有依据适用源估计；总氮氧化物不自动等于二氧化氮质量，不采用通用火箭因子。

- 选定流：二氧化氮，排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流实际可归属实测量；cp_range_combustion。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_range_combustion`
- 来源：

### 过程：运输任务控制跟踪支持 (`control`)

#### 输入

##### 产品流

###### 低压交流电 (`control_electricity`)

实际运输任务控制、遥测处理、跟踪链路及可归属机房冷却用电；核对靶场控制台及外部网络重叠。

- 选定流：低压交流电
- 流属性/单位：能量 / kWh
- 数量规则：每参考流实际可归属实测量；cp_control_meter。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_control_meter`
- 来源：`nasa-wallops`

###### 任务控制计算服务器 (`server`)

实际服务器制造、更换、报废份额及有依据寿命工作量；电力另计量。

- 选定流：任务控制计算服务器
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：每参考流实际可归属实测量；cp_control_asset。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_control_asset`
- 来源：

###### 地面遥测跟踪天线 (`antenna`)

运输支持内实际地面天线生命周期份额；区分地面站、空间中继设施及无关载荷数据服务。

- 选定流：地面遥测跟踪天线
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：每参考流实际可归属实测量；cp_control_asset。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_control_asset`
- 来源：`nasa-wallops`

#### 输出

##### 废物流

###### 废弃任务控制计算服务器 (`discarded_server`)

实际可归属报废服务器质量和处理；采用的完整资产生命周期数据集已含报废则不重列。

- 选定流：废弃任务控制计算服务器
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流实际可归属实测量；cp_control_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_control_waste`
- 来源：

### 过程：核对并验收支持任务 (`accept`)

#### 输出

##### 产品流

###### 空间运输支持任务 (`support_output`)

一个具有精确声明运输功能、配置、规模、期间及交接的验收支持任务区块；不是客户飞行或载荷成果。

- 选定流：空间运输支持任务
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：1 item
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_task`
- 来源：

## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `allocate_function` | 优先分表、气体平衡、仪器排程及实际工作量。多用户靶场建筑控制设施按因果计量或实测功能时间能力利用分开运输与无关用户；不自动按发射次数、合同金额、载荷质量分配。 |  |
| `allocate_attempts` | 将必需准备、演练、部署、中止、待机、重试归属指定验收支持任务，即使飞行延迟失败。成功交付支持区块可独立于飞行成功；不得删去实际相关负担或将失败尝试另算验收产出。 |  |
| `allocate_assets` | 采用实际资产量乘实际可归属利用量再除以独立支持寿命利用量，单位兼容且累计范围不超过一项资产寿命。核对完整设施与组件制造更换报废；不虚构寿命质量通用每资产任务数。 |  |
| `allocate_interface` | 按交接核对客户飞行投入及上游供应商清单。退回回收气体装备是库存接口，不是避免发射或回收抵扣。任何再用物料处理替代须明确记录上游分配，不自动获益。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_task | accept | support_output | support_task_record | 任务阶段；类别功能；场址；能力配置；起终；接口；验收质量；待机演练中止重试；运营客户供应边界 | 将签署服务验收与实际活动日志匹配一个精确定义支持任务区块；不单以发射成功或发票判断。 | item | 每任务区块 | 整个声明任务期间 | 全部实际支持场址交接 | 每参考流 | 验收；任务日志；接口核对 |
| cp_control_asset | control | server; antenna | asset_lifecycle_record | 资产配置；实际量；安装组件范围；当前使用；有依据寿命利用量；累计份额；更换报废 | 匹配实际资产台账上游范围、实测任务利用及独立支持寿命分母；披露未知寿命制造清单。 | 各行单位 | 实际任务/计量/服务区间 | 与cp_task同区间 | 实际声明过程场址 | 每参考流 | 原始记录；校准；范围平衡核对 |
| cp_control_meter | control | control_electricity | meter_record | 行；实际燃料电力水；仪表；条件；库存；功能期间；供应范围 | 采用校准读数及实际领退平衡；分开内部发电、采购供应、飞行器客户流。 | 各行单位 | 实际任务/计量/服务区间 | 与cp_task同区间 | 实际声明过程场址 | 每参考流 | 原始记录；校准；范围平衡核对 |
| cp_control_waste | control | discarded_server | segregated_waste_record | 流；实测质量；组成污染；任务份额；处理；去向；资产供应所含 | 称量每项实际分类流并匹配转移处理记录；防止重复供应商已含或完整资产报废。 | kg | 实际任务/计量/服务区间 | 与cp_task同区间 | 实际声明过程场址 | 每参考流 | 原始记录；校准；范围平衡核对 |
| cp_ground_asset | ground | umbilical; pump; building | asset_lifecycle_record | 资产配置；实际量；安装组件范围；当前使用；有依据寿命利用量；累计份额；更换报废 | 匹配实际资产台账上游范围、实测任务利用及独立支持寿命分母；披露未知寿命制造清单。 | 各行单位 | 实际任务/计量/服务区间 | 与cp_task同区间 | 实际声明过程场址 | 每参考流 | 原始记录；校准；范围平衡核对 |
| cp_ground_gas | ground | nitrogen; helium; air | gas_custody_record | 物种混合物；相态；纯度；压力温度；领退；地面使用；飞行器转移；回收；库存变化；放散 | 采用称重交付或有记录换算的校准质量表。核对外部接收加期初库存与期末库存、飞行客户转移、场外退回回收物料、实际地面释放及其他有证据最终去向，并考虑化学转化。地面使用读数是与这些去向核对的活动账，不是额外汇项；内部回收复用不另增边界输入输出。 | kg | 实际任务/计量/服务区间 | 与cp_task同区间 | 实际声明过程场址 | 每参考流 | 原始记录；校准；范围平衡核对 |
| cp_ground_material | ground | hydraulic_oil; isopropanol | material_stock_record | 具体物质等级；实际领退；纯度；库存；使用；回收废物排放去向 | 称量实际地面消耗物料并核对库存去向，不假定所有采购立即排放或成废物。 | kg | 实际任务/计量/服务区间 | 与cp_task同区间 | 实际声明过程场址 | 每参考流 | 原始记录；校准；范围平衡核对 |
| cp_ground_meter | ground | ground_electricity; water | meter_record | 行；实际燃料电力水；仪表；条件；库存；功能期间；供应范围 | 采用校准读数及实际领退平衡；分开内部发电、采购供应、飞行器客户流。 | 各行单位 | 实际任务/计量/服务区间 | 与cp_task同区间 | 实际声明过程场址 | 每参考流 | 原始记录；校准；范围平衡核对 |
| cp_ground_release | ground | nitrogen_air; helium_air; isopropanol_air | species_balance_record | 物种；源；地面飞行器接口；接收；库存；转移；捕集回收；废物；残余释放；介质 | 实测释放或采用具有实际库存转移回收及化学转化的闭合有依据物种平衡；不单凭交付推定释放。 | kg | 实际任务/计量/服务区间 | 与cp_task同区间 | 实际声明过程场址 | 每参考流 | 原始记录；校准；范围平衡核对 |
| cp_ground_waste | ground | ground_wastewater; spent_oil; spent_solvent | segregated_waste_record | 流；实测质量；组成污染；任务份额；处理；去向；资产供应所含 | 称量每项实际分类流并匹配转移处理记录；防止重复供应商已含或完整资产报废。 | kg | 实际任务/计量/服务区间 | 与cp_task同区间 | 实际声明过程场址 | 每参考流 | 原始记录；校准；范围平衡核对 |
| cp_range_asset | range | radar | asset_lifecycle_record | 资产配置；实际量；安装组件范围；当前使用；有依据寿命利用量；累计份额；更换报废 | 匹配实际资产台账上游范围、实测任务利用及独立支持寿命分母；披露未知寿命制造清单。 | 各行单位 | 实际任务/计量/服务区间 | 与cp_task同区间 | 实际声明过程场址 | 每参考流 | 原始记录；校准；范围平衡核对 |
| cp_range_combustion | range | co2; no2 | support_combustion_record | 物种；装备燃料；实际活动；实测测试或适用方法因子；条件；介质；供应范围 | 采用实际支持源测试或独立引用的适用物种源方法及匹配活动；不套火箭飞行或通用氮氧化物等同二氧化氮。 | kg | 实际任务/计量/服务区间 | 与cp_task同区间 | 实际声明过程场址 | 每参考流 | 原始记录；校准；范围平衡核对 |
| cp_range_meter | range | range_electricity; diesel | meter_record | 行；实际燃料电力水；仪表；条件；库存；功能期间；供应范围 | 采用校准读数及实际领退平衡；分开内部发电、采购供应、飞行器客户流。 | 各行单位 | 实际任务/计量/服务区间 | 与cp_task同区间 | 实际声明过程场址 | 每参考流 | 原始记录；校准；范围平衡核对 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_task` | 所有清单行 | 将实际匹配交换归属指定支持功能规模期间；仅在证实配置质量等价后将可比合计清单除以验收任务区块数。不自动换算发射载荷小时。 | cp_task; 实际过程采集协议 | 每参考流 |  |
| `calc_gas` | nitrogen; helium; air; nitrogen_air; helium_air | 外部接收+期初库存=期末库存+飞行客户转移+场外退回回收物料+实际地面释放+其他有证据最终去向，考虑化学转化并保持物种相态边界一致。内部回收复用不另增边界输入输出。地面使用计量是与各最终去向核对的活动账，绝不作为释放或回收之外的独立质量汇项相加；明确飞行物料上游分配。 | 气体与释放采集协议; cp_task | 每参考流物种质量 | nasa-gases |
| `calc_assets` | umbilical; pump; building; radar; server; antenna | 实际资产量乘任务可归属利用量除以有依据寿命利用量；归一前核对单位、更换及累计完整组件范围。 | 资产采集协议; cp_task | 每参考流资产份额 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| dq_function | support_output | 要求实际运输支持功能配置规模期间及验收接口；仅有航天港名称或任务标签不足。 | cp_task |
| dq_balance | nitrogen; helium; air; water | 保留校准质量能源水记录及地面客户保管平衡，包括放散回收及供应上游范围。 | 气体/计量/释放采集协议 |
| dq_assets | 所有资产行 | 要求实际配置、有依据寿命利用量及不重叠制造维护报废；量化不确定性而不虚构默认值。 | 资产采集协议 |
| dq_identity | 所有清单行 | 核实采用前解决精确流属性单位及本地化名称；身份缺失及额外实际交换保持明确。 | 身份登记及原始清单 |

## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `validate_task` | 要求一个唯一support_output为1item，具全部功能限定、实际时长、验收及类别过程。拒绝通用每发射每载荷千克因子及混合不同任务。 |  |
| `validate_interface` | 审查地面飞行器物料交接及供应接口；排除客户火箭飞行载荷制造，实际支持损耗仅计一次，并将失败尝试保留在其可归属边界。 |  |
| `validate_inventory` | 按记录及兼容每任务基准检查各实际公用工程气体化学品资产废物物种；披露未知身份寿命释放及不完整上游清单。机械通过不构成完整航天任务环境或科学批准。 |  |
| `validate_unit_export` | item仅为数量属性正式单位Item(s)的本地单数别名。导出时使用Item(s)，保留同一数值计数及完整限定的服务定义；更换显示符号不得改变流属性、服务范围或归一化分母。不得通过改写单位将服务项转换成时间、质量、距离或另一服务族，也不得对已按参考流归一化的数量再次归一化。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | specialized_space_transport_support |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 具有明确地面靶场控制功能及服务规模的匹配配置专门运输支持组成 |
| excluded_use | 完整发射航天器载荷足迹；通用任务因子；无关卫星通信导航科学运行 |
| required_metadata | 全部限定；条件路线；实际期间及成功验收区别；客户气体推进剂接口；分配供应资产范围；原始记录 |
| required_quality_disclosure | 任务可比性；中止待机；缺失气体物种；保管供应重叠；寿命分母；上游土地噪声水证据缺口 |
| update_trigger | 任务阶段、支持规模配置、气体推进剂接口、公用工程供应、利用寿命、供应路线或实测释放变化 |

## 11. 数据源

| 来源编号 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| un-cpc3-67640 | official_guidance | UNSD, CPC Version3.0, subclass67640 explanatory note. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/67640 | 仅专门支持类别；详细功能边界是声明前景适用规则，不是联合国列举子型 |
| nasa-gases | official_guidance | NASA, Propellants, Life Support Branch Fuels NASA Missions, June27 2023, paragraphs on ground gases, transfer and scrubbers. https://www.nasa.gov/centers-and-facilities/kennedy/propellants-life-support-branch-fuels-nasa-missions/ | 地面氮氦呼吸空气支持及被处理飞行物料区分；仅定性路线证据，不采用数量剂量因子 |
| nasa-wallops | official_guidance | NASA, Wallops Range Users Handbook,840-HDBK-0004 Version4, April1 2024, sections3.2.7–3.2.8 and3.3.1–3.3.8. https://www.nasa.gov/wp-content/uploads/2023/09/wallopsrangeusershandbook-2024.pdf | 靶场控制移动电源遥测跟踪支持实例；仅采用实际空间运输份额，不包括无关航空科学用途；不采用装备尺寸寿命能源因子 |
