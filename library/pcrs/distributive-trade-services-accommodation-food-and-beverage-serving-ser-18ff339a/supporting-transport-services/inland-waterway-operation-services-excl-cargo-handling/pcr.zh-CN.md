---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.inland-waterway-operation-services-excl-cargo-handling
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 内河航道运营服务（不含货物装卸）

## 1. 范围与适用性

涵盖人工天然内河航道、运河及渠化河流运营维护；船闸、升船机、堰及水门；由岸上拖拉机或机车提供的非拖轮运河船舶牵引；以及服务内河通航的灯船、浮标及航道标志。明确纳入岸牵路线并与拖轮服务区分。[来源：`un-cpc3-67512`]

各数据集固定一种服务子型及功能规模。代表事件为一艘已识别船舶通过指定航段及明确设施。独立合同的维护或助航可用性事件则明确验收航段资产、交付状况、覆盖期间及服务交通。这些是分别限定的事件，不是可互换次数；航道维护不缩成便于描述的过闸示例。

排除集装箱及非集装箱装卸（67110及67190）、仓储（672）、内河靠离泊引航及拖轮协助（67522）、船舶货客运输及客户船推进清单。水电、防洪、灌溉及其他共同功能须明确因果分配；不因同址而假定发电抵扣或负担份额。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.inland-waterway-operation-services-excl-cargo-handling |
| classification_refs | CPC 3.0 67512 |
| covered_products | 内河航道运河运营维护、通航设施助航及非拖轮岸牵；分别限定服务事件 |
| excluded_products | 货物装卸；仓储；靠离泊引航拖轮；船舶运输；未分配水电防洪清单 |
| representative_product | 面向指定船舶通行及航段的一次明确内河通航设施服务事件 |
| production_route | 建立声明可通航资产状况→实际运营维护岸牵助航→核实服务完成或期间验收 |
| market_state | 为明确航段资产质量及期间交付的已核实内河通航支持 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 交付明确指定的内河通航设施服务 |
| How much | 一个验收事件，明确实际路线长度、船舶交通规模、闸次牵引及服务期间 |
| How well | 声明通航水深宽度水位、船型吃水载荷界限、助航可用性及维护交付状况；采用实际验收标准 |
| How long or cycle | 实际通行运行区间或另行定义验收的维护可用性覆盖期间 |
| reference_flow_link | `navigation_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 内河通航设施服务事件 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 航段资产及起终接口；服务子型验收规模；人工天然航道；实际路线长度；船舶尺寸吃水载荷及服务交通；水位流量；闸升船机堰水门作业及共用闸次；岸牵方法距离；助航配置及覆盖范围；维护疏浚范围；通行或可用性期间；运营分包边界；水电防洪灌溉分配；取回水流域；资产寿命分母；电源电压 |

item是已核实Item(s)的单数别名，计量一个指定服务事件，不是新制造船舶、货运吨公里、通用通航公里、不考虑占用船舶的闸循环或立方米水。没有实际交通利用量归属，不得把整个维护期间转换成通行事件。同一声明事件内多个阶段助航设施不生成重复完整产出。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `service_event` | 参考产品 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 采用cp_service计一个具有精确规模的验收事件。通行共用闸次岸牵及独立销售维护可用性情景分开。 |
| `water_balance` | river_water; returned_water | 体积 | m3 | 分别记录取回水、泵送、过闸转移、再用及损失。过闸体积不自动作为耗水，再用不是新增取水。 |
| `sediment_basis` | riverbed_sediment; dredged_sediment; suspended_sediment | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保留实测干固体湿质量水分及载水；采用实际固体比例，不假定沉积物浆体密度或零再悬浮。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 明确内河航段资产及初始通航水沉积状况；既有基础设施不是零负担 |
| starting_condition_role | foreground_start |
| product_classification_scope | 内河通航设施运营维护及非拖轮岸牵 |
| recursive_input_rule | 同类别分包运营维护作为有证据范围的服务进入；不重复其能源沉积物处理或资产 |
| upstream_dataset_requirement | 实际能源材料供应、施工装备制造报废及沉积物废物管理；不假定公共资产免费无负担 |
| disclosure | 服务事件规模；通航及其他功能分配；取回水；沉积物表征；实际交通可用性；设施寿命利用量及缺失上游边界 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `boundary_all_routes` | 按适用性纳入实际运河航道维护、闸升船机堰水门、岸上拖拉机机车牵引及助航。不得以已排除的拖轮靠泊代替岸牵。 | un-cpc3-67512 |
| `boundary_water` | 通过实际记录跟踪闸次水库河流水源回抽及运行水位。区分转移回流水蒸发及耗损，不设默认过闸水量或泵送系数。 | crt-water-management |
| `boundary_sediment` | 纳入实际维护疏浚、表征、再悬浮及管理去向。疏浚材料可接受性取决于物理化学生物性质及当地去向；不假定全部无害或有益利用。 | epa-inland-sediment |
| `boundary_assets` | 纳入实际航道工程构筑物岸牵助航有依据施工更换维护报废份额。另行筛查实际额外燃料电池涂层排放及生态转化，缺数据不是零值。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| navigation | 运营维护指定内河通航服务 | required | 实际服务子型及条件作业 | foreground_production | 每参考流 |

### 过程：运营维护指定内河通航服务 (`navigation`)

#### 输入

##### 产品流

###### 低压交流电 (`electricity`)

实际适用该电压的船闸驱动、升船机、抽水回抽、信号及岸牵电网供应；按功能计量并记录地区。现场光伏及其他电源另有发电资产边界，不重计供应负担。

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

###### 柴油 (`diesel`)

适用于运营方实际疏浚船、灯船、岸牵拖拉机机车或维护设备柴油；分开资产及功能。客户船舶推进燃料不在本投入内。

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

###### 液压润滑油 (`hydraulic_oil`)

实际闸门升船机岸牵设备补充或更换；保留库存变化，不假定所有设施均为液压。

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

###### 钢制牵引缆 (`tow_cable`)

适用于实际非拖轮运河岸牵；分配有依据更换重用，避免重计初装缆制造。

- 选定流：钢制牵引缆
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_materials。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：

###### 环氧维护涂料 (`coating`)

适用于实际涂层维护；记录完整配方、溶剂水含量、施涂及废物。其他配方分别列行，不作通用涂料集合。

- 选定流：环氧维护涂料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_materials。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：

###### 预拌混凝土 (`concrete`)

实际通航土建施工维修清单份额，明确等级及有依据寿命；排除完整上游船闸构筑物数据集已含数量。

- 选定流：预拌混凝土
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：

###### 结构钢 (`steel`)

实际闸门护岸或通航结构施工维修钢材份额；区分初装及更换，避免完整资产范围重复。

- 选定流：结构钢
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：

###### 船闸闸门驱动装置 (`lock_drive`)

适用于实际船闸驱动；记录配置及制造报废利用量分母。升船机采用自身实际装备身份。

- 选定流：船闸闸门驱动装置
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：每参考流的可归属实测交换量；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：

###### 通航升船机 (`boat_lift`)

适用于实际升船服务；记录升船机配置、验收船舶规模及相对有依据寿命利用量的实际使用。

- 选定流：通航升船机
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：每参考流的可归属实测交换量；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：

###### 岸牵拖拉机 (`tractor`)

适用于实际非拖轮运河岸牵；记录拖拉机型号、牵引路线及有依据寿命利用量。

- 选定流：岸牵拖拉机
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：每参考流的可归属实测交换量；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：

###### 岸牵机车 (`locomotive`)

适用于实际岸牵机车；不得将拖轮协助改称本陆上装备交换。

- 选定流：岸牵机车
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：每参考流的可归属实测交换量；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：

###### 发光助航浮标 (`buoy`)

适用于实际发光浮标；记录灯电源电池维护范围及有依据制造份额。仅在未含时单列更换电池。

- 选定流：发光助航浮标
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：每参考流的可归属实测交换量；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：

###### 助航灯船 (`light_vessel`)

适用于实际灯船助航；声明整船制造范围、燃料及驻留期间，不将其作为客户运输。

- 选定流：助航灯船
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：每参考流的可归属实测交换量；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：

###### 维护用绞吸式挖泥船 (`dredger`)

仅适用于该实际疏浚配置；其他疏浚类型各需具体行。制造按有依据利用量分配，不得每通航计整艘挖泥船。

- 选定流：维护用绞吸式挖泥船
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：每参考流的可归属实测交换量；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：

##### 基本流

###### 河流淡水，原位 (`river_water`)

实际跨越声明环境接口的外部淡水取用转引，记录来源流域及水位。闸内循环及回抽不重复作为新增取水。

- 选定流：河流淡水，原位
- 流属性/单位：体积 / m3
- 数量规则：每参考流的可归属实测交换量；cp_water。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`crt-water-management`

###### 淡水河床沉积物固体，原位 (`riverbed_sediment`)

通航维护实际原位移除材料，记录实测干固体质量及位置；载水浆水另记，不作为沉积物干质量。

- 选定流：淡水河床沉积物固体，原位
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_sediment。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_sediment`
- 来源：`epa-inland-sediment`

#### 输出

##### 产品流

###### 内河通航设施服务事件 (`navigation_output`)

一个具有指定子型航段功能期间的验收通航设施事件；客户船舶或货物不是制造产出。

- 选定流：内河通航设施服务事件
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：1 item
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_service`
- 来源：

##### 废物流

###### 疏浚淡水沉积物干固体 (`dredged_sediment`)

实际表征后送往声明处理处置的沉积物干固体，保留含水与水平衡。产品或有益利用身份需独立证据及唯一一致路线，不自动回收抵扣。

- 选定流：疏浚淡水沉积物干固体
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_sediment。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_sediment`
- 来源：`epa-inland-sediment`

###### 废液压油 (`waste_oil`)

实际分类收集排出维护油，记录污染及处理；区分泄漏油及设备内剩余油。

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

###### 废弃钢制牵引缆 (`waste_cable`)

实际报废岸牵缆质量及去向；重复使用库存不是废物。

- 选定流：废弃钢制牵引缆
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

###### 水，排入河流 (`returned_water`)

实际跨越声明边界的回流水，明确接收流域、时间及水质。不假定回流等于取水；内部转移不重计。

- 选定流：水，排入河流
- 流属性/单位：体积 / m3
- 数量规则：每参考流的可归属实测交换量；cp_water。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`crt-water-management`

###### 化石二氧化碳，排入空气 (`fossil_co2`)

仅实际运营方燃料燃烧，采用实测碳基准或有来源适用因子；客户船尾气及上游供能分开。

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

###### 悬浮沉积物，排入淡水 (`suspended_sediment`)

适用于实测跨系统边界再悬浮释放，明确颗粒组成位置。不得将全部开挖废物质量再计为悬浮释放。

- 选定流：悬浮沉积物，排入淡水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_sediment。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_sediment`
- 来源：`epa-inland-sediment`

## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `allocation_direct` | 优先直接计量归属闸升船机泵岸牵助航疏浚任务。共用闸次须有实际船舶占用及运行证据；不得对每艘船分别赋整个闸循环。 |  |
| `allocation_multiuse` | 根据因果工程运行证据分开通航水电防洪灌溉及游憩。不默认按收入分割或抵扣避免发电；论证残余分配及敏感性。 |  |
| `allocation_assets` | 实际设施装备制造报废按有依据寿命服务利用量及当前实际服务份额分配。核对施工更换及完整资产组件范围；累计份额不得超过一个寿命。 |  |
| `allocation_period` | 通行事件与验收维护可用性期间事件分开。交通基准归属须有实际交通及服务质量；保留可归属维护服务的待机、通航关闭及失败作业。不得除以虚构未来船舶数量。 |  |
| `allocation_sediment` | 疏浚材料为需管理物理流，不默认共产品。核对干固体载水管理产出及实际悬浮释放；任何有益利用产品路线独立论证，不自动替代抵扣。 | epa-inland-sediment |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_service | navigation | navigation_output | service_event_record | 事件编号；子型；航段资产；船舶交通规模；吃水载荷；路线长度；水位；闸次；岸牵；助航状况；验收期间；完成 | 核对实际通行过闸岸牵记录，或独立合同维护可用性验收；保留完整事件阶段及实际服务规模。 | item | 每事件及期间 | 完整声明服务期间 | 一个指定子型航段情景 | 每参考流 | 交通过闸日志；测量；验收 |
| cp_energy | navigation | electricity; diesel | energy_record | 计量燃料；资产；任务；运行怠速小时；电源；闸泵岸牵疏浚助航；库存变化 | 计量各实际功能能源并核对供应库存；分开客户船能源及共用非通航功能。 | 各行单位 | 匹配任务账期 | 与cp_service同期间 | 运营资产及指定支持 | 每参考流 | 仪表校准；燃料台账；任务记录 |
| cp_materials | navigation | hydraulic_oil; tow_cable; coating | material_record | 具体材料；等级配方；领退质量；重用；更换；任务资产份额 | 称量实际领退并记录配置使用寿命；分开涂料组成及剩余回收材料。 | kg | 每维护任务 | 同服务维护期间 | 实际通航资产 | 每参考流 | 工单；库存；配方使用记录 |
| cp_assets | navigation | concrete; steel; lock_drive; boat_lift; tractor; locomotive; buoy; light_vessel; dredger | asset_record | 资产航段编号；施工组件范围；实际数量；寿命利用量；当前使用；既往份额；更换；报废 | 采用资产台账、工程测量、工程量清单及运行台账；独立支持各寿命分母及多功能份额。 | 各行单位 | 资产维护事件及期间 | 资产寿命及当前服务 | 实际航段及装备 | 每参考流 | 台账；清单；寿命利用量证据 |
| cp_water | navigation | river_water; returned_water | water_balance_record | 取回水流域；流入流出；蓄水变化；过闸转移；回抽；蒸发；其他损失；时间；水质 | 采用校准流量水位及实际运行日志，区分外部取回水与内部转移再用。不将过闸总转移量变为耗水。 | m3 | 每运行及平衡期间 | 与服务同区间 | 声明来源航段回水接口 | 每参考流 | 流量校准；水平衡；流域记录 |
| cp_sediment | navigation | riverbed_sediment; dredged_sediment; suspended_sediment | sediment_record | 疏浚位置；湿质量；干固体；含水；颗粒化学生物表征；载水；管理去向；悬浮释放 | 测量采样实际材料，核对干固体平衡水分管理及实际释放。表征和去向证据针对实际任务，不假定无害。 | kg | 每疏浚任务采样区间 | 匹配维护服务期间 | 实际疏浚航段及处置路线 | 每参考流 | 测量；实验结果；转移联单 |
| cp_waste | navigation | waste_oil; waste_cable | waste_record | 具体流；实测质量；污染；处理；去向；资产任务份额 | 计量分类维护流并核对联单；泄漏及废弃材料需各自身份。 | kg | 每废物事件 | 同维护服务期间 | 可归属运营维护 | 每参考流 | 称量；联单；工单 |
| cp_emissions | navigation | fossil_co2 | emission_record | 物种；源发动机；燃料碳；活动；测试模型；因子来源；介质 | 采用实际运营源测量或有来源适用燃料特定方法；保留来源技术及通航份额，客户船排放分开。 | kg | 测试及活动期间 | 与服务同期间 | 实际运营能源源 | 每参考流 | 测试模型证据；活动台账 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_service` | 所有清单行 | 按有记录共用功能事件归属，将期间实际实测交换归属于声明验收服务子型规模。匹配可比总量除以验收事件数；没有实际证据不得把可用性期间转为通行次数。 | cp_service; 实际功能记录 | 每参考流 |  |
| `calc_water` | river_water; returned_water | 核对外部流入回流蓄水变化蒸发及其他实际损失；内部过闸转移再用另记。报告流域时间特定取回水，不默认净耗水体积。 | cp_water; cp_service | 每参考流体积 | crt-water-management |
| `calc_sediment` | riverbed_sediment; dredged_sediment; suspended_sediment | 按实测固体比例分开沉积物干质量及浆水；核对原位移除与管理产出库存实际悬浮释放。污染物释放须对各实测物种介质单列。 | cp_sediment; cp_service | 每参考流干固体质量 |  |
| `calc_assets` | concrete; steel; lock_drive; boat_lift; tractor; locomotive; buoy; light_vessel; dredger | 将有依据寿命利用量及实际通航使用份额用于施工制造报废清单；核对组件及当前服务归一归属。未知未来使用或寿命保留明确审查缺口。 | cp_assets; cp_service | 每参考流资产份额 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| dq_extent | navigation_output | 要求航段服务子型通行期间船舶交通及交付通航状况；费用或通用公里不足。 | cp_service |
| dq_water | river_water; returned_water | 记录取回水流域时间水质，区分内部转移取水及耗水。 | cp_water |
| dq_sediment | riverbed_sediment; dredged_sediment; suspended_sediment | 表征实际固体及去向，不假定清洁沉积物通用处置因子或默认有益利用。 | cp_sediment |
| dq_multiuse | 所有清单行 | 要求有依据通航与其他功能份额及实际寿命利用量证据，保留不确定性敏感性及上游缺项。 | 实际功能记录; cp_assets |
| dq_identity | 所有清单行 | 采用前核实精确流属性单位及中文名。各缺失UUID逐项保留；解析成功不证明水沉积物身份或完整生态边界。 | 直读支持及未解决登记 |

## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `validate_service` | 要求唯一navigation_output为1item，具有完整声明子型规模通航质量期间。拒绝货运吨公里及未定义闸次通行数替代。 |  |
| `validate_scope` | 核实选定内河运营维护路线，包含非拖轮岸牵。排除装卸仓储靠泊引航拖轮及客户船燃料尾气。 | un-cpc3-67512 |
| `validate_balances` | 核对水沉积物平衡、实际共用闸次归属、通航其他目的分配及设施寿命份额。完整生命周期主张前须保留披露身份排放上游或生境影响证据缺口。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | inland_navigation_infrastructure_service |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 与通航维护情景匹配的明确内河设施服务投入 |
| excluded_use | 完整船舶货运足迹；靠泊拖轮引航；通用船闸因子；未分配水电或自动沉积物利用抵扣 |
| required_metadata | 全部参考限定；取回水沉积物边界；实际事件期间；多用分配；资产组件寿命及上游身份 |
| required_quality_disclosure | 通航规模及停用；水沉积物不确定性；共用功能敏感性；寿命分母；缺失UUID上游生态证据 |
| update_trigger | 航段水深水位变化、疏浚或沉积物污染、闸岸牵助航配置、实际交通共用功能能源或有依据寿命证据变化 |

## 11. 数据源

| 来源编号 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| un-cpc3-67512 | official_guidance | UNSD CPC Version3.0 subclass67512 explanatory note. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/67512 | 完整内河通航维护岸牵助航范围及明确排除 |
| crt-water-management | official_guidance | Canal and River Trust, Managing our water: Day to day, Monitoring and Management. https://canalrivertrust.org.uk/our-cause/looking-after-canals-and-rivers/managing-our-water/day-to-day | 运营方关于实际闸次水库抽水及水监测的原始说明；英国背景，不采用每闸系数 |
| epa-inland-sediment | official_guidance | US EPA, Inland Testing Manual under CWA Section404, physical/chemical/biological dredged-material evaluation description. https://www.epa.gov/cwa-404/inland-testing-manual-under-cwa-section-404 | 去向选择前实际疏浚材料表征；美国处置评价背景，不作为通用许可或生命周期因子 |
