---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.port-and-waterway-operation-services-excl-cargo-handling-on-coastal-and-transoceanic-waters
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 沿海及远洋港口和水道运营服务，不含货物装卸

## 1. 范围与适用性

沿海/远洋码头、船坞、栈桥、岸壁码头及包括旅客设施的相关海运终端运营；船闸、升船机、堰及水门提供的航运服务；以及灯塔、灯船、浮标、航道标识等助航服务。每数据集固定一个实际功能及物理服务范围，内河水道运营属于另一分类。[来源：`un-cpc-coastal-port`]

排除集装箱/非集装箱装卸（67110/67190）、港口仓储（672）、沿海引航及拖轮辅助靠离泊（67521）以及客户海运。实际航道维护疏浚及设施维护是归属所声明服务的保障作业，不是额外通用港口输出；区分初始建设疏浚、后期维护、底泥处理及无关开发。[来源：`un-cpc-coastal-port`]

| 服务族 | 计数服务块 | 必需物理范围 |
| --- | --- | --- |
| port_berth | 一个已完成泊位/设施供用块 | 识别码头/船坞/栈桥/岸壁码头、沿海/远洋场景、船舶尺寸/吃水、占泊长度/时间、接入端点及实际完成；排除装卸、仓储及引航/拖轮靠泊。 |
| passenger_terminal | 一个已完成明确旅客终端服务块 | 声明实际旅客总体、设施面积、转接/处理功能、时长及验收；客运与行李/货物装卸分别处理。 |
| lock_lift | 一个已完成明确过闸或升船循环 | 声明闸室/升船机、船舶及尺寸、水头、实际水/能量循环、等候/重试范围及起止水位接口；一个循环与其一船份额为不同定义。 |
| weir_sluice | 一个已完成明确航运水控制块 | 固定航运水位/流量服务、开度/循环或准确可用时长、地理范围及其他水管理功能；不得笼统计入整个坝体。 |
| navigation_aid | 一个已完成明确助航可用性块 | 固定灯塔/灯船/浮标/标识编号、准确覆盖、负荷、可用起止及持续时间、维护/出勤覆盖；不得将一助航小时等同泊位挂靠。 |

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.port-and-waterway-operation-services-excl-cargo-handling-on-coastal-and-transoceanic-waters |
| classification_refs | CPC 3.0 67511; exact |
| covered_products | 明确沿海/远洋港口、旅客设施、航运结构及助航运营块 |
| excluded_products | 货物装卸、仓储、引航/拖轮靠泊、内河水道服务、客户航行及无关开发 |
| representative_product | 一个已完成且声明船型、泊位长度及实际占用时长的海运泊位供用块 |
| production_route | 定义服务端点/范围 → 运行实际港口/水道设施 → 纳入可归属维护及保障 → 核验完成/可用性 |
| market_state | 具有声明质量/可用性和所有权边界的已完成实测设施服务；费用或船舶到达本身不是范围 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供明确沿海/远洋港口或水道设施功能 |
| How much | 一个已完成服务块，准确服务族物理范围见第1节 |
| How well | 实际船舶/接入、水位、通行或助航可用性要求得到满足并有证据，不假定通用服务等级 |
| How long or cycle | 准确实际起止及持续时间或船闸/升船运行循环，披露待机/重试及保障归属 |
| reference_flow_link | `port_block` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 明确已完成沿海港口/水道服务块 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 单一服务族及块定义；准确物理范围和实际完成总体；沿海/远洋位置；设施/航标/航道编号及覆盖；实际接口/时间戳/时长；适用船舶/旅客尺寸及总体；占泊长度/时间或过闸/升船水头/循环或助航可用性；实际水源/退水；资产所有权；港方/船方/供应商分工；装卸/仓储/引航/拖轮排除；岸电及商品交付边界；维护疏浚区域/体积/质量/污染/去向；资产寿命及分配；实际质量/可用性限值；地区及期间 |

Item(s)计数一个明确规定的已完成功能，不是等效通用挂靠。区分船型/泊时服务、旅客设施范围、过闸/水头/水循环及航标覆盖/可用时长；不同功能和范围分别建数据集，保留实测服务总体及有依据的共用份额。总吨、费用、货物吨数或航标年不得暗中替代所声明范围。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| block_extent | 参考产品 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 用cp_activity计数具有实际物理范围的同质已完成块，组件及完整挂靠不能同时作为独立完整服务计数。 |
| sediment_basis | dredging; dredged_sand; copper_silt | 体积；质量 | m3; kg | 区分原位/堆积体积、湿质量、干质量及含水率；仅用同物料同地点实测密度/含水率换算。 |
| lock_water | sea_abstraction; river_abstraction; water_sea | 体积 | m3 | 按来源/接收介质实测取水、循环及退水；总过闸水量和船舶排水量不是消耗性淡水用量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已有沿海/远洋设施和处于声明接口的客户船舶/旅客；保留实际港口资产/能源上游负荷 |
| starting_condition_role | foreground_start |
| product_classification_scope | 所声明沿海/远洋港口/水道运营功能，排除装卸/仓储/引航/拖轮靠泊 |
| recursive_input_rule | 相同功能分包保障以准确范围及供应商覆盖计入一次，剔除港方自有重叠作业/资产 |
| upstream_dataset_requirement | 实际能源/材料、海运设施/航标建设、维护/疏浚、底泥运输/处理/安置及废物清单 |
| disclosure | 实际功能/范围、所有者/供应商、客户船及岸电分工、建设/维护疏浚、底泥状态/去向、水量平衡及证据缺口 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| boundary_port | 纳入实际设施供电、水工设施运行、照明、助航、旅客保障、排水、待机及可归属清洗/维护；按实际路线选择，浮标不继承整个旅客终端。 | un-cpc-coastal-port |
| boundary_vessel | 按实际活动及所有权区分客户船机、装卸设备、铁路/公路与港方维护船/灯船；环保署源部门指导支持分源，不把港区全部排放归为港口服务。岸电及供水/燃料交付与港方开销分表。 | epa-port-sources |
| boundary_electricity | 电力输入卡仅覆盖声明前景边界上的实际外部供应，须明确交直流形式、电压及交付损耗。在port_operation内建模的现场发电，其发电量、变换与储能转移保留在内部电量账中；实际燃料、直接排放、发电/变换/储能资产、维护及废物仅计一次。若发电建模为独立前景子过程，其实测电力输出仅作一次内部关联，并将上述负荷保留在该子过程；同一电量不得再叠加完整外部供电数据集。添加独立组件卡前，核验完整设施/航标或供应商清单是否已含光伏组件、电池、变流器或发电机；只补实际未覆盖组件。不得假定太阳能发电没有负荷。 |  |
| boundary_dredging | 区分初始建设与实际航运维护；建模去向前表征各疏浚流及实际运输、封存、处理/复用/安置去向。环保署测试指导支持表征及路线核查，不推定清洁状态或通用法律批准。 | epa-sediment |
| boundary_releases | 筛查实际疏浚扰动、污染物迁移、油泄漏、空气排放及退水。转移底泥/废物不自动成为基本流，底泥总污染物含量不等于排放质量。栖息地/海床变化、浑浊及水下噪声须有场址证据及适用影响方法，化学流卡本身不证明完整生态覆盖。 |  |

## 6. 过程清单结构

按实际设备及保障实例化所选服务族运行。每卡为单一物理/化学交换，实际其他燃料、化学品、涂料、电池、建设类型、底泥及污染物物种分别增加。疏浚可外包仅挖掘或自有作业，采用相应实际清单，不重复供应商燃料/设备、底泥运输或处理。清洁砂与污染粉砂是独立条件性流，均不代表全部海洋底泥。

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| port_operation | 运行明确沿海港口/水道服务 | required | 一个声明功能/范围及各行实际条件 | foreground_production | 每参考流 |

### 过程：运行明确沿海港口/水道服务（`port_operation`）

#### 输入

##### 产品流

###### 海运终端运营电力（`terminal_power`）

仅在外部供给交流电跨越所声明前景边界、用于实际泊位/终端照明、控制、旅客设施、泵及运营保障时适用。记录交付表计、供电电压及供应商覆盖。区分客户岸电、排除的装卸设备与内部发电；设备用电量本身不是外部输入。

- 选定流：海运设施用户端交流电
- 流属性/单位：能量 / kWh
- 数量规则：每参考流在声明交付接口可归属的实测外部交流电供应量；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：

###### 航运船闸及升船机电力（`lock_power`）

仅在外部供给交流电跨越所声明前景边界、用于实际船闸闸门、航运堰/水门、升船机或回水泵时适用。记录交付接口及电压，实测具体循环/水头/负荷并避免与terminal_power重叠。内部发电在电量账中对账，不增加为外购供应。

- 选定流：海运设施用户端交流电
- 流属性/单位：能量 / kWh
- 数量规则：每参考流在声明交付接口可归属的实测外部交流电供应量；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：

###### 海上航标电力（`aid_power`）

仅在外部供给交流电跨越所声明前景边界、用于实际灯塔、浮标或灯船运行时适用。记录设备型号、交直流配置、交付电压/表计、负荷及覆盖时段。外部直流交付使用aid_dc_power；现场光伏/发电机发电与电池放电保留为内部流。按实际计量边界记录变换/储能损耗，不重复计入。

- 选定流：海运设施用户端交流电
- 流属性/单位：能量 / kWh
- 数量规则：每参考流在声明交付接口可归属的实测外部交流电供应量；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：`ito-aid-power`

###### 海上航标外部直流电（`aid_dc_power`）

仅在外部供给直流电经明确的航标交付接口跨越所声明前景边界时适用。记录设备型号、电源、直流电压、交付表计、负荷及实际变换/储能边界。本行排除现场光伏发电、内部交流转直流及电池放电；其实际资产、维护及损耗按boundary_electricity仅计一次。不同交付电压或不兼容供应商范围须采用独立具体交换。

- 选定流：海上航标用户端直流电
- 流属性/单位：能量 / kWh
- 数量规则：每参考流在声明交付接口可归属的实测外部直流电供应量；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：`ito-aid-power`

###### 港方自有作业柴油（`diesel`）

实际港方自有发电机、灯船或维护船使用该燃料时纳入；客户船舶燃料不属于本行，不同船用等级/混合燃料须另设具体行。

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

###### 终端清洗水（`water`）

实际清洗/卫生保障时纳入；排除作为商品供给船舶的水，区分自然船闸水与外购自来水。

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

###### 碳酸钠清洗剂（`cleaner`）

实际使用该化学品时纳入，其他清洁剂/涂层成分或配方产品须分别识别具体身份和数量。

- 选定流：碳酸钠
- 流属性/单位：质量 / kg
- 数量规则：每参考流的可归属实测交换量；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### 航运闸门液压油（`hydraulic_oil`）

实际闸门/升船机液压维护时纳入；核对领用、库存、回收油及实测泄漏，其他液压液须另设行。

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

###### 港口机械润滑油（`lubricant`）

实际港口/航标机械润滑时纳入，排除分包维护清单已含润滑。

- 选定流：矿物润滑油
- 流属性/单位：质量 / kg
- 数量规则：每参考流的可归属实测交换量；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### 机械抓斗维护疏浚（`dredging`）

仅实际外包该挖掘路线时纳入；明确仅挖掘范围和实测原位体积，实际底泥运输、安置及处理另列；供应商已含这些阶段时替代重叠行，其他疏浚方法须用不同具体服务。

- 选定流：机械抓斗维护疏浚服务
- 流属性/单位：体积 / m3
- 数量规则：每参考流的可归属实测交换量；cp_dredging。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_dredging`
- 来源：

###### 海运码头建设份额（`quay_share`）

实际使用岸壁码头/码头/栈桥时纳入；固定结构类型、准确几何及长度和有证据的船型/占用利用量，不假定不同结构一米等效。

- 选定流：已确定配置的海运码头结构
- 流属性/单位：长度 / m
- 数量规则：每参考流的可归属实测交换量；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：

###### 旅客终端建设份额（`terminal_share`）

实际旅客设施服务时纳入；识别建筑及共用面积分配，排除无关零售或货物设施。

- 选定流：已确定配置的海运旅客终端建筑
- 流属性/单位：面积 / m2
- 数量规则：每参考流的可归属实测交换量；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：

###### 航运船闸建设份额（`lock_share`）

实际过闸时纳入；明确闸室、闸门、水头、水力配置及有证据的全寿命服务循环。

- 选定流：已确定配置的海运航运船闸
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：每参考流的可归属实测交换量；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：

###### 升船机制造份额（`lift_share`）

实际升船机服务时纳入；识别额定/实际提升船舶范围、机构及有证据的寿命利用量。

- 选定流：已确定配置的沿海升船机
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：每参考流的可归属实测交换量；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：

###### 航运堰建设份额（`weir_share`）

实际航运水位调节时纳入；按明确有证据份额区分防洪、灌溉、生态及发电功能。

- 选定流：已确定配置的沿海航运堰
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：每参考流的可归属实测交换量；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：

###### 航运水门建设份额（`sluice_share`）

实际使用航运水门时纳入；明确开度/循环/水位服务，不假定每次通行分配整个港口资产。

- 选定流：已确定配置的沿海航运水门
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：每参考流的可归属实测交换量；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：

###### 灯塔建设份额（`lighthouse_share`）

实际沿海助航时纳入；定义结构、灯光负荷、覆盖区、可用时段及有证据的寿命服务。

- 选定流：已确定配置的海上灯塔
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：每参考流的可归属实测交换量；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：

###### 航标浮标制造份额（`buoy_share`）

实际浮标/航道标识时纳入；明确材料、系泊、电源及实际维护/替换范围。

- 选定流：已确定配置的海上航标浮标
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：每参考流的可归属实测交换量；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：

###### 灯船建造份额（`lightship_share`）

实际灯船服务时纳入；识别船体/设备清单及实际可用/运行分母，排除客户船舶制造。

- 选定流：已确定配置的助航灯船
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：每参考流的可归属实测交换量；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：

##### 基本流

###### 航运船闸取用海水（`sea_abstraction`）

实际所声明船闸/堰运行取海水时纳入；按水力循环或校准流量实测，区分盐度/来源、复用与淡水。

- 选定流：水，海水，从海洋取用
- 流属性/单位：体积 / m3
- 数量规则：每参考流的可归属实测交换量；cp_lockwater。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_lockwater`
- 来源：

###### 航运运行取用河流淡水（`river_abstraction`）

实际沿海航运设施使用河流淡水时纳入；记录来源、水头及复用，不得用船舶排水量代替取水。

- 选定流：水，淡水，从河流取用
- 流属性/单位：体积 / m3
- 数量规则：每参考流的可归属实测交换量；cp_lockwater。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_lockwater`
- 来源：

#### 输出

##### 产品流

###### 明确已完成沿海港口/水道服务块（`port_block`）

一个块固定服务定义表中的一个功能及实际物理范围；泊位挂靠、终端到访、过闸及助航可用性不因计数单位相同而等效。

- 选定流：明确已完成沿海港口/水道服务块
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

###### 废闸门液压油（`used_hydraulic`）

实际分离液压废油送处理时纳入，称重并识别去向；存在废润滑油时另设具体废物流。

- 选定流：废矿物液压油
- 流属性/单位：质量 / kg
- 数量规则：每参考流的可归属实测交换量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 受污染海运设施清洗废水（`washwater`）

实际收集清洗废水时纳入；记录组成、体积及处理去向，直接排海须另有分物质排放证据，不得假定已处理。

- 选定流：受污染海运设施清洗废水
- 流属性/单位：体积 / m3
- 数量规则：每参考流的可归属实测交换量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 非危险海洋疏浚砂转移（`dredged_sand`）

实际经测试砂送往具体安置/复用/处理路线时纳入；记录干湿质量、含水率及组成，不得凭外观认定非危险；其他底泥流须另设行。

- 选定流：经表征为非危险的海洋疏浚砂
- 流属性/单位：质量 / kg
- 数量规则：每参考流的可归属实测交换量；cp_dredging。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_dredging`
- 来源：

###### 含铜污染疏浚粉砂转移（`copper_silt`）

实际单独表征铜污染粉砂流时纳入；保留测试及实际处理/封存路线，转移底泥总含铜量不等于溶解铜入海排放；其他污染物/底泥流须分别具体表征。

- 选定流：铜污染海洋疏浚粉砂
- 流属性/单位：质量 / kg
- 数量规则：每参考流的可归属实测交换量；cp_dredging。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_dredging`
- 来源：

##### 基本流

###### 航运运行退回海洋的水（`water_sea`）

实际退回海洋时纳入；计量去向/体积/盐度，区分循环、泄漏、损失及其他介质退水；总过闸水量不等于消耗性淡水用量。

- 选定流：水，退回海洋
- 流属性/单位：体积 / m3
- 数量规则：每参考流的可归属实测交换量；cp_lockwater。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_lockwater`
- 来源：

###### 港方自有作业化石二氧化碳排放（`fossil_co2`）

实际港方自有化石燃料燃烧时纳入；实测或用经核验含碳/氧化证据，区分客户船尾气、供应商已含排放及上游电网排放。

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

###### 铜排入海水（`copper_sea`）

仅在实际确立扰动/浸出铜排放时纳入，须实测或经验证去向证据及海洋接收介质；底泥总含量和转移废物质量不能单独证明铜排放量。

- 选定流：铜，排入海水
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
| allocate_function | 归属前拆分泊位、终端、水工调控及助航功能；采用实际泊位长度时间/船型、旅客设施利用、过闸水头/循环/水活动或航标覆盖/可用性作因果驱动，保留失败循环及待机；不同功能/计数不按费用或船舶挂靠混平均。 |  |
| allocate_assets | 维持码头/终端/闸/升船机/堰/水门/航标持续资产账及有证据的全寿命服务分母；多用途结构仅分实际航运份额，不每船计整个坝或航标群；观测期仅分已归属期间份额，跨所有用户/期间寿命份额不得超过一或每年重置；未知寿命/分母须审查及敏感性分析。 |  |
| allocate_dredging | 按有证据的航道/泊位受益服务总体及期间分配实际维护批次，保留实际体积/材料/去向；初始建设疏浚归建设，不得每维护期重复。多用途疏浚及可复用底泥须有可追溯份额与实际路线，不自动获避免处置或原生料收益。 |  |
| allocate_scope | 供应商清单对已含作业/资产仅替代一次；客户燃料、单独售能岸电、货物/旅客及航运费用不是本支持计数共产品。装卸/仓储/引航/拖轮及其他水管理用途须拆分并透明核对边界。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | 记录类型 | 原始字段 | 采集方法 | 单位 | 频率 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_activity | port_operation | port_block | 完成功能及范围账 | 服务族；设施/航标/航道；船舶/旅客总体；尺寸/吃水；泊位长度/时间；过闸/升船水头/循环；堰/水门调节；航标覆盖/负荷/可用性；实际起止；验收；排除项 | 将实际设施日志及接口匹配第1节一个明确块；仅计同质已完成块，保留实际范围、未完成/重试活动及组件/整体块关系。 | Item(s) | 每块或实际可用时段 | 完整声明服务及归属保障 | 全部实际所有者/运营方/供应商 | 每参考流 | 泊位/船闸/航标日志；时间；覆盖；验收；总体核对 |
| cp_energy | port_operation | terminal_power; lock_power; aid_power; aid_dc_power | 外部供应与内部电量平衡账 | 表计/接口编号；电源/供应商；设备型号；交直流形式及电压；外部交付kWh；现场发电机/光伏输出；终端/船闸/航标终端用电kWh；循环/水头/负荷及待机；变换/充放电损耗；期初期末储能；客户/装卸/外送kWh；供应商/资产覆盖；储存电量的能源来源与充电期间编号；已归属上游供给清单 | 分别计量外部交付、现场发电及终端用电。按electricity_balance在有记录且一致的接口/期间核对各项，区分交直流，保留实际变换/储能损耗且不重算表计已含损耗。用设备负荷/循环证据核对表计，不将内部发电转为外购供应。区分客户岸电、装卸设备及供应商已含能源，不仅按船数估过闸能耗。 | kWh | 每作业/计量时段 | 全部纳入运行及待机 | 实际海运设施/助航场址 | 每参考流 | 校准表计；交付/电气单线图；设备及电压记录；负荷/循环日志；储能及损耗平衡；供应商覆盖核对 |
| cp_fuel | port_operation | diesel | 港方自有燃料平衡 | 船/发电机编号；燃料等级；实际kg；接收/库存；负荷；换算时密度/温度；客户加油交付 | 实测港方自有作业燃料并核对库存，区分灯船/维护船、客户船及排除拖轮/引航任务，不重复供应商已含燃料。 | kg | 每实际用量及库存期 | 完整可归属作业 | 已识别运营方设备 | 每参考流 | 燃料日志；库存平衡；实际船/设备负荷 |
| cp_material | port_operation | water; cleaner; hydraulic_oil; lubricant | 具体材料平衡 | 单一物质；kg/m3；等级/组成；领退；库存；清洗/维护事件；实际泄漏；供船水量 | 逐项计量/称量并核对库存/退回，区分供船商品及自然通航用水与设施消耗。 | kg; m3 | 每实际事件/库存期 | 全部可归属维护及清洗 | 实际港口/航标资产 | 每参考流 | 材料记录；校准称重/计量；维护平衡 |
| cp_assets | port_operation | quay_share; terminal_share; lock_share; lift_share; weir_share; sluice_share; lighthouse_share; buoy_share; lightship_share | 持续海运资产账 | 实际资产编号/类型/几何；m/m2/件数；建设/制造；初始建设疏浚；有证据的全寿命利用量；实际航运/其他用途份额；先前累计比例；期间比例；更新；已含发电/储能/变换组件及更换范围 | 匹配实际资产、上游清单与有证据的全寿命服务分母；区分初始/维护边界，仅分实际航运服务份额，跨所有期间/用户守恒累计比例；未知寿命/分母仍待审。 核验完整资产是否已含光伏组件、电池、变流器或发电机；对实际未覆盖组件另设具体卡并采用有证据寿命/使用份额，不重复已含制造或更换。 | m; m2; Item(s) | 每分配及资产/维护更新 | 有证据全寿命及所声明观测期 | 已识别海运设施/航标资产 | 每参考流 | 工程/资产记录；实际利用；寿命依据；多用途/累计核对 |
| cp_dredging | port_operation | dredging; dredged_sand; copper_silt | 疏浚及底泥去向账 | 批次；建设/维护；源区；原位体积；实测干湿质量/含水/密度；粒径；具体污染物测试；供应商覆盖；实际运输/距离；处理/安置/复用场址；物料去向；受益服务总体/期间 | 采用实际测量/称重及有来源的代表性底泥表征，追踪各物料流实际运输及去向，保留处理/安置记录并避免供应商重叠；底泥测试本身不证明排放比例或生态批准。 | m3; kg | 每批次/物料转移 | 实际批次及有证据受益服务时段 | 来源航道/泊位及全部实际去向 | 每参考流 | 测量；测试报告；运输/安置单；干湿平衡；供应商清单 |
| cp_lockwater | port_operation | sea_abstraction; river_abstraction; water_sea | 分水源水量平衡 | 水源/接收介质；盐度；水头；闸室/船舶排水量；实际闸门/泵循环；实测取退水；循环；实际淡水损失 | 实测流量或用经验证的水工设施几何参数/运行循环水量平衡及实际水头/损失，区分海水、淡水、循环及接收去向；不得由总水量推消耗。 | m3 | 每水力循环及监测时段 | 全部代表航运水运行 | 实际沿海结构及水源 | 每参考流 | 校准流量记录；几何/水头；取退水平衡 |
| cp_waste | port_operation | used_hydraulic; washwater | 具体维护废物账 | 废物流；kg/m3；组成；事件；接收方；实际处理；泄漏区分 | 称量/计量各收集流并追踪实际处理；环境油/化学泄漏须有独立物质及接收介质证据。 | kg; m3 | 每转移/排水时段 | 全部实际可归属维护 | 设施及处理端点 | 每参考流 | 废物单据；组成；处理及物料平衡 |
| cp_release | port_operation | fossil_co2; copper_sea | 物种/介质排放账 | 实际污染物物种；kg；空气/海水介质；实际燃料消耗；含碳/氧化；底泥迁移/浸出测量；去向模型；供应商/客户边界；不确定性 | 采用实测排放或经审查来源特定方法；海洋污染物须区分总含量、颗粒转移、溶解排放及实际生物可利用性假设，不假定转移铜全排出，其他实际物种及生态机制另筛查。 | kg | 每实际源/事件及代表监测 | 完整代表排放作业 | 实际运营方/源及接收介质 | 每参考流 | 测量；经验证范围/去向；燃料及物料核对；不确定性 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| block_attribution | 所有清单行 | 将实测作业/保障归属同质功能/范围，再除以实际完成块数；归属总量保留待机/重试；参考输出准确为1 Item(s)。 | cp_activity; 可归属实测总量 | 每参考流交换量 |  |
| electricity_balance | terminal_power; lock_power; aid_power; aid_dc_power; diesel | 在同一声明期间及计量边界核对：外部交付电量 + 现场发电输出 = 纳入的终端用电 + 客户/排除用途/外送电量 + 变换/配电/储能损耗 + 期末储能 - 期初储能。损耗项只含尚未计入其他实测项的损耗。保留储能变化的正负号、仪表不确定性及未解释差值，不编造损耗系数。将实际外部供应及发电负荷归属有证据服务份额，再通过block_attribution仅归一化一次。发电量及储能放电是内部转移，不是额外外部输入。 将期初/期末储存电量有记录的能源来源身份及上游负荷一并纳入同一服务/期间分配；不得遗漏期初库存负荷，也不得把期末库存负荷全部归给当前服务。 | cp_energy; cp_fuel; cp_assets; cp_activity | 已核对外部交换及内部电量账 |  |
| maintenance_attribution | dredging; dredged_sand; copper_silt | 将实际批次数量分给记录的受益航道/泊位服务期间/总体，保持物料身份、实际体积/干湿质量换算及去向，不每期重复初始建设。 | cp_dredging; cp_activity | 每参考流实际批次数量 |  |
| asset_attribution | quay_share; terminal_share; lock_share; lift_share; weir_share; sluice_share; lighthouse_share; buoy_share; lightship_share | 将有证据块份额用于实际上游建设/制造，守恒累计航运/其他用途份额；期间观测仅分已归属该期份额。 | cp_assets; cp_activity | 每参考流资产量 |  |
| source_fate | fossil_co2; copper_sea | 采用具体源实际燃料含碳/氧化或实测/验证海洋排放证据；底泥污染物含量是去向分析输入，不自动成为基本流排放。 | cp_release; cp_fuel; cp_dredging | 每参考流具体排放 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| quality_extent | port_block | 要求准确单一功能、地理范围、物理范围、时长/循环及完成总体，泊位/旅客/船闸/助航块不得按计数混合。 | cp_activity |
| quality_electricity | terminal_power; lock_power; aid_power; aid_dc_power; diesel | 要求实际外部交付接口、交直流形式、电压及来源，内部发电/储能对账，以及明确的供应商/整机资产组件覆盖。未知变换损耗或发电资产属于证据缺口，不作为零负荷。 | cp_energy; cp_fuel; cp_assets |
| quality_sediment | dredging; dredged_sand; copper_silt | 按来源、粒径、污染、干湿基准及去向表征实际底泥；未表征底泥不推定清洁、可复用或无害。 | cp_dredging; epa-sediment |
| quality_lifecycle | 所有资产行 | 支持寿命服务分母、航运专属份额、初始/维护区分及分配守恒；缺寿命/上游证据不得声称完整生命周期。 | cp_assets; cp_dredging |
| quality_ecology | 所有清单行 | 披露化学物种、水力、海床/栖息地/浑浊/噪声证据缺口及实际影响方法覆盖；化学清单不是完整生态评估。 | cp_release; cp_lockwater; 场址证据 |

## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| validate_block | 要求唯一port_block输出等于1 Item(s)，有物理定义的单一功能及实际范围；拒绝跨服务族通用挂靠或费用等效。 |  |
| validate_scope | 核验沿海/远洋功能、客户/供应商/所有者接口及装卸、仓储、引航/拖轮靠泊和内河水道服务排除。 | un-cpc-coastal-port |
| validate_sediment | 核对疏浚批次体积/质量、测试、运输及实际去向仅一次；拒绝假定清洁、遗漏安置/处理及将总污染物含量直接当排放。 | epa-sediment |
| validate_sources_assets | 区分港方自有燃料、客户船尾气、岸电交付及上游电网/供应商排放；检查通航取水源/退水、原子流、寿命分母及累计份额不大于一；明确保留身份/证据/生态覆盖缺口。 |  |
| validate_electricity | 要求交直流交换匹配实际外部交付，并按electricity_balance核对发电、储能、损耗及终端用电。拒绝将内部发电或电池放电记作额外外购电输入，拒绝重复供应商/发电燃料或排放以及整机/组件负荷。缺少身份、损耗或资产证据须明确保留。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | coastal_port_waterway_service |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 功能、范围、船舶/旅客及维护范围兼容的明确沿海/远洋设施服务组件 |
| excluded_use | 完整航行/港口生态足迹、装卸/仓储/引航/拖轮足迹、内河服务或无限定计数比较 |
| required_metadata | 单一服务族及块定义；准确物理范围和实际完成总体；沿海/远洋位置；设施/航标/航道编号及覆盖；实际接口/时间戳/时长；适用船舶/旅客尺寸及总体；占泊长度/时间或过闸/升船水头/循环或助航可用性；实际水源/退水；资产所有权；港方/船方/供应商分工；装卸/仓储/引航/拖轮排除；岸电及商品交付边界；维护疏浚区域/体积/质量/污染/去向；资产寿命及分配；实际质量/可用性限值；地区及期间 |
| required_quality_disclosure | 身份/测量缺口；船方/供应商分工；底泥表征/去向局限；水力及生态覆盖；资产寿命及上游遗漏 |
| update_trigger | 功能/范围、船舶限制、航运结构/航标、取退水、疏浚/安置路线、能源、供应商所有权或资产寿命证据变化 |

## 11. 数据源

| 来源编号 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| un-cpc-coastal-port | official_guidance | 联合国统计司CPC3.0，67511解释说明，与草案PDF374–375页一致。https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/67511 | 沿海/远洋港口、闸/升船机/堰/水门及航标范围，明确装卸/仓储/引航/拖轮排除，不提供因子 |
| epa-port-sources | official_guidance | 美国环保署《港口排放清单指导》概述，2026-10-23阅读当前网页。https://www.epa.gov/state-and-local-transportation/port-emissions-inventory-guidance | 仅支持港口/船舶/移动源区分及清单范围，不采用默认发动机、燃料、MOVES假设或因子 |
| epa-sediment | official_guidance | 美国环保署《疏浚物料测试与评价》，2026-10-23阅读当前网页。https://www.epa.gov/marine-protection-permitting/dredged-material-testing-and-evaluation-permitting-under-marine | 底泥污染表征及去向特定评价依据；美国许可背景不是全球批准或排放/复用因子 |
| ito-aid-power | literature | ITO Navaids，IML 85 AL LED三海里航标灯，制造商技术规格，读取于2026-10-26。https://www.itonavaids.com/products/aton/marine-lanterns/three-mile-led-beacon/iml-85-al-led | 作为航标具有不同直流及可选交流配置的实例，支持记录真实交付接口；不采用目录电压、功率、寿命、设备质量或损耗系数作为PCR默认值。电力边界与分配规则为本PCR自定要求，并非制造商生命周期评价规则。 |
