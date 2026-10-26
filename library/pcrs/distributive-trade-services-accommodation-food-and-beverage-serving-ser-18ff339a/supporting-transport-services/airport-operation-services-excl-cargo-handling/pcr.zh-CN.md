---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.airport-operation-services-excl-cargo-handling
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 机场运营服务（不含货物装卸）

## 1. 范围与适用性

涵盖旅客航站楼及飞行区地面设施运营，包括跑道运营及实际机场设施维护。区分完整公共机场运营与独立合同航站楼机坪跑道设施服务；各实际数据集固定一种设施功能规模及覆盖期间。下列航站楼飞行区条件过程仅按该规模纳入。[来源：`un-cpc3-67610`]

排除货物行李装卸（67110及67190）、独立销售跑道清扫除雪（94510）、空管（67620）、独立航空器牵引保养机库支持（67630）、航空器维修及航司运输。机场设施小型维护仍纳入。航空器推进辅助动力、航司行李装备及旅客接驳交通为独立关联范围，不自动成为机场运营方排放。

必需清扫除雪道面处理支持可作为范围明确的上游服务进入机场运营清单一次。直接支持材料仅在该支持清单明确展开时使用，并替代而非重计聚合供应商投入。清扫事件或除冰数量都不是机场运营参考。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.airport-operation-services-excl-cargo-handling |
| classification_refs | CPC 3.0 67610 |
| covered_products | 明确完整机场或指定旅客航站楼飞行区跑道运营服务 |
| excluded_products | 货物行李装卸；独立跑道清扫除雪；空管；独立航空器保养牵引机库维修；航司运输 |
| representative_product | 一个具有指定配置功能规模覆盖期间的验收机场设施运营事件 |
| production_route | 建立声明设施状况→实际运营航站楼飞行区及维护支持→关闭期间并核实交付可用性服务 |
| market_state | 在明确运营方航司租户承包边界下交付机场设施运营 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 交付指定机场设施运营功能 |
| How much | 一个验收事件，固定完整机场或指定设施规模实际旅客航空器运行规模及精确覆盖期间 |
| How well | 实际声明运行可用性航站楼使用容量跑道飞行区状况安全无障碍及验收要求，不虚构通用服务等级 |
| How long or cycle | 从声明起点至验收关闭的精确事件运营期间，记录开放关闭待机及交付服务 |
| reference_flow_link | `airport_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 机场设施运营服务事件 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 机场场址；完整公共机场或航站楼机坪跑道合同；设施面积布局配置；所含功能；精确起终时长；开放关闭待机及实际可用性；实际旅客运行次数及计数规则；适用时机型跑道占用；气候天气；运营航司租户承包划分；清扫除雪支持供应范围；除冰化学排水；资产范围寿命分母；电力地区电压 |

item是已核实Item(s)的单数别名，计一个指定验收运营事件期间，不自动等于一位旅客、一次航空器运行、跑道使用、小时或清扫动作。设施功能期间规模不同的事件不会因各计一次而等价。任何每旅客运行读数需实测匹配计数及明确因果归属；一次降落及起飞不能为方便而暗中计一或两次事件。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `operation_event` | 参考产品 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 采用cp_event具有精确设施功能期间的验收事件。旅客数航空器运行数及完整机场事件为不同记录维度，无默认等价。 |
| `deicer_mass` | potassium_acetate; sodium_formate | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别记录实际完整制剂质量及实测认证活性比例。产品质量不是纯化学品氮负荷或直接排放质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 明确机场设施配置初始运行状况；既有公共设施不是零负担 |
| starting_condition_role | foreground_start |
| product_classification_scope | 旅客航站楼飞行区跑道设施运营，不是货物装卸或独立清扫 |
| recursive_input_rule | 同类别分包机场运营按供应商服务范围进入；核对所含公用工程资产，不重计本地清单 |
| upstream_dataset_requirement | 实际公用工程材料、设施装备制造报废、必需清扫除雪支持及污废物管理 |
| disclosure | 完整机场或设施事件；旅客运行期间计数；条件过程；运营供应划分；航空器空管排除；上游边界资产寿命 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `boundary_airport` | 纳入声明事件内实际旅客航站楼飞行区跑道功能及设施维护。仅航站楼服务不包括整个机场；共同完整机场清单不得再赋每跑道航站楼。 | un-cpc3-67610 |
| `boundary_support` | 独立跑道清扫除雪仍在参考外。必需上游支持通过供应商清单或明确替代的展开清单计一次。 | un-cpc3-67610 |
| `boundary_runoff` | 区分道面与航空器除冰来源实际化学制剂收集废水处理及直接排放物。场址特定去向重要；不将法规收集比例或影响因子变成默认清单参数。 | epa-airport-deicing |
| `boundary_assets` | 纳入有记录寿命利用量的实际设施施工更换维护报废份额。逐项筛查额外实际化学品制冷剂耗材噪声土地生态影响废物；简短卡片不是零负担豁免。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| terminal | 运营旅客航站楼设施 | conditional | 声明合同事件包含航站楼功能 | foreground_production | 每参考流 |
| airfield | 运营飞行区机坪跑道设施 | conditional | 包含飞行区功能，必需支持接口另记 | foreground_production | 每参考流 |
| shared | 核对机场共同支持及验收事件 | required | 仅实际选定设施规模 | foreground_production | 每参考流 |

### 过程：运营旅客航站楼设施 (`terminal`)

#### 输入

##### 产品流

###### 低压交流电 (`terminal_electricity`)

实际航站楼照明暖通安保旅客流线及运营信息设备用电；记录地区电压，排除边界外租户航司及行李装卸负荷。

- 选定流：低压交流电
- 流属性/单位：能量 / kWh
- 数量规则：每参考流的可归属实测交换量；cp_terminal_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_terminal_energy`
- 来源：

###### 天然气 (`natural_gas`)

适用于实际航站楼供暖热水；保留组成计量条件及有依据体积换算，不套通用密度。

- 选定流：天然气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_terminal_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_terminal_energy`
- 来源：

###### 自来水 (`water`)

实际航站楼卫生设施清洁旅客用水；分开租户航空器供应及行李货运服务。

- 选定流：自来水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_terminal_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_terminal_energy`
- 来源：

###### 1,1,1,2-四氟乙烷制冷剂 (`r134a_supply`)

适用于实际R134a航站楼冷却；记录维护库存设备充注回收。其他制冷剂各需具体行，不设默认泄漏率。

- 选定流：1,1,1,2-四氟乙烷制冷剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_terminal_refrigerant。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_terminal_refrigerant`
- 来源：

###### 机场旅客航站楼建筑 (`building`)

实际航站楼建筑制造报废份额；声明建筑业主租户机坪组件范围及有依据寿命利用量。

- 选定流：机场旅客航站楼建筑
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：每参考流的可归属实测交换量；cp_terminal_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_terminal_assets`
- 来源：

###### 旅客登机桥 (`boarding_bridge`)

适用于机场运营登机桥；采用实际有依据制造份额边界及利用量。航司飞机及行李设备分开。

- 选定流：旅客登机桥
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：每参考流的可归属实测交换量；cp_terminal_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_terminal_assets`
- 来源：

###### 旅客航站楼空调机组 (`hvac`)

适用于实际安装机组；制造报废份额不重复已另记电力制冷剂。

- 选定流：旅客航站楼空调机组
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：每参考流的可归属实测交换量；cp_terminal_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_terminal_assets`
- 来源：

#### 输出

##### 废物流

###### 旅客航站楼生活污水 (`sanitary_wastewater`)

实际收集并送处理的航站楼生活污水；排除运营边界外租户航空器废水并分开雨水。

- 选定流：旅客航站楼生活污水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_terminal_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_terminal_waste`
- 来源：

#### 输出

##### 基本流

###### 1,1,1,2-四氟乙烷，排入空气 (`r134a_air`)

根据已核对库存设备充注维护回收记录的实际航站楼R134a释放，不以购买量等同泄漏或采用标准泄漏率。

- 选定流：1,1,1,2-四氟乙烷，排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_terminal_refrigerant。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_terminal_refrigerant`
- 来源：

### 过程：运营飞行区机坪跑道设施 (`airfield`)

#### 输入

##### 产品流

###### 低压交流电 (`airfield_electricity`)

实际适用此电压的飞行区灯光标志设施控制及可归属地面设施用电；空管无线助航及航空器能源另计。

- 选定流：低压交流电
- 流属性/单位：能量 / kWh
- 数量规则：每参考流的可归属实测交换量；cp_airfield_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_airfield_energy`
- 来源：

###### 乙酸钾道面除冰溶液 (`potassium_acetate`)

仅在明确展开且代替供应商聚合服务投入的必需道面处理支持内适用。计量完整溶液及实际活性成分比例；不重计采购除雪支持已含化学品。

- 选定流：乙酸钾道面除冰溶液
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_airfield_materials。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_airfield_materials`
- 来源：`epa-airport-deicing`

###### 甲酸钠道面除冰颗粒 (`sodium_formate`)

适用于另行明确机场支持中实际采用此制剂；记录组成及完整产品质量。与乙酸盐溶液及航空器除冰剂分开。

- 选定流：甲酸钠道面除冰颗粒
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_airfield_materials。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_airfield_materials`
- 来源：`epa-airport-deicing`

###### 预拌混凝土 (`concrete`)

实际跑道滑行道机坪土建制造维修份额；记录等级施工量寿命利用量，排除完整上游资产重复。

- 选定流：预拌混凝土
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_airfield_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_airfield_assets`
- 来源：

###### 沥青道面混合料 (`asphalt`)

适用于实际沥青道面施工更换；保留配方数量及有依据寿命分配，不强加通用跑道结构。

- 选定流：沥青道面混合料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_airfield_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_airfield_assets`
- 来源：

###### LED跑道边灯灯具 (`runway_light`)

适用于实际此照明技术；按有依据寿命分配装备制造更换，分开计量电力并保留实际配置。

- 选定流：LED跑道边灯灯具
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：每参考流的可归属实测交换量；cp_airfield_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_airfield_assets`
- 来源：

###### 跑道清扫支持服务 (`sweeping_service`)

仅采购必需上游支持，记录实际供应商边界活动。独立跑道清扫不作本PCR参考；排除供应商已含燃料材料废物重复行。

- 选定流：跑道清扫支持服务
- 流属性/单位：时间 / h
- 数量规则：每参考流的可归属实测交换量；cp_airfield_services。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_airfield_services`
- 来源：

###### 跑道除雪支持服务 (`snow_service`)

仅采购必需上游支持。核对除冰剂车辆废物所含；在原始数据中展开供应支持时替代此聚合投入，不得并计。

- 选定流：跑道除雪支持服务
- 流属性/单位：时间 / h
- 数量规则：每参考流的可归属实测交换量；cp_airfield_services。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_airfield_services`
- 来源：

#### 输出

##### 废物流

###### 收集的道面除冰径流废水 (`deicer_runoff`)

实际收集道面支持废水，记录化学组成及处理去向。区分航空器除冰排水，避免供应支持已含处理重复。

- 选定流：收集的道面除冰径流废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_airfield_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_airfield_waste`
- 来源：`epa-airport-deicing`

###### 废弃道面混凝土 (`concrete_waste`)

实际机场道面维护移除混凝土处理份额，不自动骨料回收抵扣。

- 选定流：废弃道面混凝土
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_airfield_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_airfield_waste`
- 来源：

###### 废弃沥青道面混合料 (`asphalt_waste`)

实际移除沥青流，具有实测质量及去向；再用库存处置不得重复同一质量。

- 选定流：废弃沥青道面混合料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_airfield_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_airfield_waste`
- 来源：

#### 输出

##### 基本流

###### 氨，排入淡水 (`ammonia`)

仅实际实测运营方可归属直接排放，明确物种介质及支持服务边界。总氮产品尿素质量及COD不是氨质量；总氨或按氮计实验结果须有依据化学形态及基准换算后方可采用此分子身份。不重计处理数据集释放。

- 选定流：氨，排入淡水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_airfield_runoff。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_airfield_runoff`
- 来源：`epa-airport-deicing`

### 过程：核对机场共同支持及验收事件 (`shared`)

#### 输入

##### 产品流

###### 柴油 (`diesel`)

实际机场运营方备用维护设备燃料；分开飞机牵引航司地服及供应商已含清扫燃料，避免重复。

- 选定流：柴油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_shared_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_shared_energy`
- 来源：

#### 输出

##### 产品流

###### 机场设施运营服务事件 (`airport_output`)

一个具有指定机场设施规模期间的验收事件，实测实际旅客航空器运行维度；不是另计清扫或航空器运营产出。

- 选定流：机场设施运营服务事件
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：1 item
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_event`
- 来源：

#### 输出

##### 基本流

###### 化石二氧化碳，排入空气 (`fossil_co2`)

实际机场运营锅炉发电或支持设备化石燃烧，采用实际燃料及有来源方法；飞机推进辅助动力及外购电供应不是本行机场运营直接排放。

- 选定流：化石二氧化碳，排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_shared_emissions。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_shared_emissions`
- 来源：

## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `allocate_facilities` | 优先采用设施功能分表及实际空间时间活动记录。公共机场共同负担须在航站楼跑道机坪租户航司间因果分配；不自动按收入旅客运行分配。 |  |
| `allocate_period` | 保留指定运营事件可归属待机关闭低利用及失败支持。各计数仪表匹配同期间；旅客与航空器运行是不同维度，不是通用等价。 |  |
| `allocate_assets` | 设施施工装备制造报废采用实际利用与有依据寿命利用份额；核对完整建筑道面组件范围且累计不超过一个寿命。不虚构跑道结构资产质量寿命。 |  |
| `allocate_support` | 同一范围的供应商清扫除雪支持与展开化学燃料废物清单是替代关系。跟踪运营承包责任，避免同一径流处理除冰剂负担重复。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_event | shared | airport_output | operation_event_record | 事件；设施合同规模；功能；起终；时长；开放关闭；可用性；实际旅客；运行及计数规则；运营租户航司划分 | 核对验收运营服务期间设施记录及匹配实际计数；保留子事件接口而不倍增完整机场产出。 | item | 每事件区间 | 完整指定运营期间 | 声明机场设施规模 | 每参考流 | 验收；运营记录；匹配计数 |
| cp_airfield_assets | airfield | concrete; asphalt; runway_light | asset_record | 资产配置；施工数量；组件范围；实际使用；有依据寿命利用；既往份额；更换报废 | 将实际建筑道面装备台账清单利用量与独立支持寿命分母上游组件边界核对。 | 各行单位 | 实际任务表计维护区间 | 与cp_event同区间 | 声明过程运营供应范围 | 每参考流 | 原始记录；校准库存；范围核对 |
| cp_airfield_energy | airfield | airfield_electricity | meter_record | 行；仪表；实际能源水；来源；运行期间；功能租户份额；库存；密度条件 | 采用校准仪表供应记录及任务分区归属；核对实际库存运营航司边界。 | 各行单位 | 实际任务表计维护区间 | 与cp_event同区间 | 声明过程运营供应范围 | 每参考流 | 原始记录；校准库存；范围核对 |
| cp_airfield_materials | airfield | potassium_acetate; sodium_formate | formulation_record | 具体产品；完整质量；活性比例；供应商；施用；收集；上游服务边界 | 称量实际领退并取得制剂证据；直接支持化学品替代聚合供应范围，不叠加。 | kg | 实际任务表计维护区间 | 与cp_event同区间 | 声明过程运营供应范围 | 每参考流 | 原始记录；校准库存；范围核对 |
| cp_airfield_runoff | airfield | ammonia | runoff_species_record | 物质；排口；流量；浓度；时间；接收介质；处理；道面航空器来源；归属 | 采用实际配对流量浓度或实测物种质量并关联处理源归属；区分总氮氨及需氧指标。 | kg | 实际任务表计维护区间 | 与cp_event同区间 | 声明过程运营供应范围 | 每参考流 | 原始记录；校准库存；范围核对 |
| cp_airfield_services | airfield | sweeping_service; snow_service | supplier_service_record | 供应方；实际小时；任务面积天气；化学品车辆废物所含；清扫除雪范围 | 匹配必需上游支持及供应原始清单；小时仅是活动，不是因子，展开应替代供应聚合。 | h | 实际任务表计维护区间 | 与cp_event同区间 | 声明过程运营供应范围 | 每参考流 | 原始记录；校准库存；范围核对 |
| cp_airfield_waste | airfield | deicer_runoff; concrete_waste; asphalt_waste | waste_record | 具体流；实测质量；组成；污染；来源；处理；去向；供应范围 | 计量分类流并核对处理转移；分开生活道面航空器来源及上游已含处理。 | kg | 实际任务表计维护区间 | 与cp_event同区间 | 声明过程运营供应范围 | 每参考流 | 原始记录；校准库存；范围核对 |
| cp_shared_emissions | shared | fossil_co2 | emission_record | 物种；实际固定移动源；燃料；活动；测试模型；因子来源；介质 | 实测实际运营排放或采用有来源适用源燃料方法及匹配活动；航空器辅助动力及供电分开。 | kg | 实际任务表计维护区间 | 与cp_event同区间 | 声明过程运营供应范围 | 每参考流 | 原始记录；校准库存；范围核对 |
| cp_shared_energy | shared | diesel | meter_record | 行；仪表；实际能源水；来源；运行期间；功能租户份额；库存；密度条件 | 采用校准仪表供应记录及任务分区归属；核对实际库存运营航司边界。 | 各行单位 | 实际任务表计维护区间 | 与cp_event同区间 | 声明过程运营供应范围 | 每参考流 | 原始记录；校准库存；范围核对 |
| cp_terminal_assets | terminal | building; boarding_bridge; hvac | asset_record | 资产配置；施工数量；组件范围；实际使用；有依据寿命利用；既往份额；更换报废 | 将实际建筑道面装备台账清单利用量与独立支持寿命分母上游组件边界核对。 | 各行单位 | 实际任务表计维护区间 | 与cp_event同区间 | 声明过程运营供应范围 | 每参考流 | 原始记录；校准库存；范围核对 |
| cp_terminal_energy | terminal | terminal_electricity; natural_gas; water | meter_record | 行；仪表；实际能源水；来源；运行期间；功能租户份额；库存；密度条件 | 采用校准仪表供应记录及任务分区归属；核对实际库存运营航司边界。 | 各行单位 | 实际任务表计维护区间 | 与cp_event同区间 | 声明过程运营供应范围 | 每参考流 | 原始记录；校准库存；范围核对 |
| cp_terminal_refrigerant | terminal | r134a_supply; r134a_air | refrigerant_balance | 物种；期初末存储库存；取得转出；设备充注变化；维护；回收 | 核对物种库存设备充注维护回收以量化实际释放，不默认百分比或购入等于泄漏。 | kg | 实际任务表计维护区间 | 与cp_event同区间 | 声明过程运营供应范围 | 每参考流 | 原始记录；校准库存；范围核对 |
| cp_terminal_waste | terminal | sanitary_wastewater | waste_record | 具体流；实测质量；组成；污染；来源；处理；去向；供应范围 | 计量分类流并核对处理转移；分开生活道面航空器来源及上游已含处理。 | kg | 实际任务表计维护区间 | 与cp_event同区间 | 声明过程运营供应范围 | 每参考流 | 原始记录；校准库存；范围核对 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_operation` | 所有清单行 | 将实际实测采集交换归属于精确设施功能期间，采用有记录共同范围分配。匹配可比总量按验收事件归一，不自动以旅客运行或小时替换分母。 | cp_event; 实际过程采集协议 | 每参考流 |  |
| `calc_assets` | concrete; asphalt; building; runway_light; boarding_bridge; hvac | 采用实际施工装备量当前服务使用及独立支持寿命利用；核对累计组件份额再归属事件。未知寿命利用量保持明确。 | 资产采集协议; cp_event | 每参考流资产份额 |  |
| `calc_runoff_species` | potassium_acetate; sodium_formate; deicer_runoff; ammonia | 按场址记录核对完整制剂活性组成收集处理及实际残余排放。仅以实际匹配流量换算浓度；产品质量COD或总氮不能代替一种排放化学物种。 | 材料/废物/径流采集协议; cp_event | 每参考流具体产品流物种 | epa-airport-deicing |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| dq_extent | airport_output | 要求完整机场或设施规模验收期间实际可用性旅客运行定义及运营边界；费用机场名称不足。 | cp_event |
| dq_support | sweeping_service; snow_service; potassium_acetate; sodium_formate | 证明支持所含及聚合展开替代核算；保留独立清扫排除及化学品特定性。 | 供应商及材料记录 |
| dq_assets | concrete; asphalt; building; runway_light; boarding_bridge; hvac | 记录实际寿命利用施工组件范围，披露不确定性及缺失上游负担。 | 资产采集协议 |
| dq_identity | 所有清单行 | 采用前核实精确流属性单位中文名；未解决流逐项保留，实际额外交换须原子化添加。 | 直读支持及未解决登记 |

## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `validate_operation` | 要求唯一airport_output为1item，具有验收设施运营规模功能质量期间。拒绝清扫动作旅客运行自动等价及航空器运输替代。 | un-cpc3-67610 |
| `validate_scopes` | 核实航站楼飞行区条件过程完整机场共同归属；排除行李货物装卸空管独立跑道清扫除雪。不重复供应支持及展开化学燃料废物负担。 | un-cpc3-67610 |
| `validate_actual_flows` | 按匹配期间基准审查各实际公用工程化学品制冷剂资产废物及释放物。披露身份资产寿命径流处理上游缺口；解析通过不是机场完整环境或方法批准。 |  |
| `validate_unit_export` | item仅为数量属性正式单位Item(s)的本地单数别名。导出时使用Item(s)，保留同一数值计数及完整限定的服务定义；更换显示符号不得改变流属性、服务范围或归一化分母。不得通过改写单位将服务项转换成时间、质量、距离或另一服务族，也不得对已按参考流归一化的数量再次归一化。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | airport_infrastructure_operation |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 与声明功能期间实际利用匹配情景中的明确机场航站楼飞行区运营组成 |
| excluded_use | 完整飞行旅客足迹；独立清扫除雪；通用每旅客运行机场因子；航空器维护牵引空管 |
| required_metadata | 全部参考限定；条件过程；实际计数可用性；供应租户划分；资产上游身份；化学径流支持边界 |
| required_quality_disclosure | 事件可比性；利用待机；寿命分母；支持重叠；水制冷剂径流不确定性；缺失UUID上游噪声土地证据 |
| update_trigger | 设施范围配置运营期间旅客运行特征运营合同维护除冰路线能源资产寿命或排放证据变化 |

## 11. 数据源

| 来源编号 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| un-cpc3-67610 | official_guidance | UNSD, Explanatory Notes of CPC Version3.0, subclass67610, February2025, with adjacent67620/67630 context. https://unstats.un.org/UNSDWebsite/statcom/session_56/documents/BG-3o-Explanatory_Notes_of_the_Central_Product_Classification_Version3-E.pdf | 旅客航站楼飞行区跑道运营范围及明确货物行李独立跑道清扫排除；不提供因子 |
| epa-airport-deicing | official_guidance | US EPA, Airport Deicing Environmental Impact and Benefit Assessment, April2012, EPA-821-R-12-003, sections1.2–1.4 and2.1. https://www.epa.gov/sites/production/files/2015-06/documents/airport-deicing_environmental-impact-and-benefit-assessment-final-2012.pdf | 道面航空器制剂区别及径流路径；场址特定监测化学品处理，不采用法规比例默认剂量影响因子 |
