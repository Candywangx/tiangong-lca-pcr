---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.single-aisle-civil-jet-aeroplane
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 单通道双涡扇民用客机总装

## 1. 范围与适用性

新造完整单通道双高涵道比涡扇民用客机总装候选自编方法。实际飞机空载分类大于2000kg，由原始配置重量记录支持。接收供应商完成且已装备机体大部件机翼，集成声明动力系统完整客户客舱，进行实际涂装可归属生产验收，于声明交付门点放行。Airbus示例工序不建立通用飞机结构或全部场址路线。

本稿窄于CPC49623。排除宽体机旋翼无人机活塞涡桨涡轴或其他动力飞机裸机体单售发动机部分客舱研发飞机改装维修军用专属飞机营运客运。型号研发认证疲劳活动不自动属于系列制造验收。飞机线束活塞发动机PCR为独立上游产品，不是本完整飞机。科学审查待完成；双语对齐自动检查不建立方法学批准。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.single-aisle-civil-jet-aeroplane |
| classification_refs | CPC3.0 49623；按证据选择更窄产品边界，不声称已接受映射 |
| covered_products | 声明完整客户配置的新造验收完整单通道双涡扇民用客机 |
| excluded_products | 其他机体动力系列；未完成研发客舱；飞行运输维修型号研发活动 |
| representative_product | Airbus单通道总装已装备部件接口及A321XLR研发装配示例，排除原型专属项，不假设型号重量 |
| production_route | 供应已装备部件接收→机体连接→声明起落架系统动力客舱集成→实际涂装→可归属验收实测空机配置→交付 |
| market_state | 声明总装交付门点新造完整验收配置空飞机 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 验收完整单通道双涡扇民用客机 |
| How much | 1 kg验收配置完整空飞机净质量 |
| How well | 放行完整图纸物料客户客舱、飞机批准配置真实序列验收；不虚构通用适航排放阈值 |
| How long or cycle | 一个制造验收周期，无运行寿命客运公里参考 |
| reference_flow_link | finished_machine |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 验收完整单通道双涡扇民用客机 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 制造者型别型号序列；现行图纸物料完整载客客舱布局；双高涵道比航空涡扇路线发动机短舱辅助动力序列供应商包含；已装备机体机翼尾翼接口起落架安装系统；真实涂层安全数据表治理；实际验收配置空机净M kg与cp_mass、原始校准完整飞机称重签署实测配置油液修正；保留必需安装设备声明永久配重工作油液压油有记录不可用燃油；排除可用燃油机组乘客货物临时配重试验仪器包装散装备件；原始实际空载分类大于2000kg；实际场址时期试验地面飞行子介质外包交付门点 |

逐项必需限定信息在数据集元数据或等效可寻源字段声明。等质量不表示同座椅推力性能环境强度运输服务。不采用目录空重为M。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | 质量 | kg | M = 同一配置的一台完整设备的验收净质量,单位 kg; 使用 cp_mass 采集 M。 |
| `exchange_mass` | non-electric inventory rows | 质量 | kg | 分别实测每项净物理交换。按件供应统计须实际单位质量或序列总成称重；若后续建立兼容公开计件面积身份，保留真实属性并明确有依据换算，不改写质量。 |
| `electric_energy` | electricity_airframe; electricity_systems; electricity_propulsion; electricity_cabin; electricity_coating; electricity_acceptance; electricity_protection | 净热值 | MJ | 真实过程电量kWh × 3.6 MJ/kWh；匹配供电地域电压组合，保留公开引用能量属性。共用电网地面供电按实测驱动分配一次。 |
| `species_mass` | xylene_air; co2_air; no_air; no2_air | 质量 | kg | 用精确实测化学物质来源接收介质，按兼容状态时间基准积分实际浓度排气流量。不规定必然排放默认因子。 |

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `mass_record_origin` | cp_mass | 质量 | kg | 用原始实际完整飞机校准平台轮载或载荷传感器称重，按现行适用飞机制造商步骤。保留全部支承读数皮重零点校准重复性、清洁室内水平状态设备清单序列配置；实测签署增减项核对验收净M。验收原件是采集接口，不替代物理实测。名义运行空重最大起飞重量载重设计估值燃油满载值不能替代。 来源：`faa-weight`; `faa-addendum` |
| `mass_configuration` | cp_mass; finished_machine | 质量 | kg | 保留交付发动机完整客舱起落架安装系统声明永久配重及指定工作油液压油不可用燃油状态。排除可用燃油人员货物临时配重仪器可拆保护散装备件。油液燃油修正按实际温度状态实测数量密度，不抄手册示例密度。单列本空机参考排除的饮用水卫生间预充。核对现行制造商定义交付变化与称重状态；未测修正阻止完成。 来源：`faa-weight` |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 总装接收供应商完成已装备机体大部件机翼及独供成品模块 |
| starting_condition_role | foreground_input_boundary |
| product_classification_scope | CPC49623中单通道双涡扇民用客机窄边界 |
| recursive_input_rule | 不递归假设每项上游供应工序在总装门点内 |
| upstream_dataset_requirement | 声明摇篮到工厂门前须关联适用完整供应部件模块实际消耗能源运输外包涂装废物处理数据集 |
| disclosure | 仅前景总装验收放行；明确披露上游完成度遗漏门点 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_trials` | acceptance | 包含声明门点内可归属本序列实际制造验收地面运行滑行生产验收飞行。分开机上燃油外部地面设备燃油购入试验服务。认证活动商业运行门点后调机排除；不同门点须独立有记录范围。 | `airbus-assembly` |
| `boundary_completeness` | dataset | 本门点本身不是完整摇篮到工厂门。清单卡为精确条件物理交换示例；逐项列每项实际独供材料模块化学外部热气试验服务包装废物实测释放。披露遗漏未测关联，不写泛称类别行虚构零或完整覆盖声明。 |  |


## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `airframe` | 已装备机体大部件连接 | required | 声明单通道民用喷气客机实际总装。 | foreground | 每台验收完整设备按M归一化 |
| `systems` | 起落架与机载系统集成 | required | 每架声明完整飞机配置。 | foreground | 每台验收完整设备按M归一化 |
| `propulsion` | 涡扇与辅助动力安装 | required | 声明双涡扇客机及其实际辅助动力配置。 | foreground | 每台验收完整设备按M归一化 |
| `cabin` | 完整客舱装配 | required | 完整验收客户载客布局，不是部分装修研发飞机。 | foreground | 每台验收完整设备按M归一化 |
| `coating` | 条件性外表清洗涂装 | conditional | 报告总装门点或披露外包实际包含涂装清洗。 | foreground | 每台验收完整设备按M归一化 |
| `acceptance` | 配置称重与可归属验收 | required | 每架在声明交付门点验收完整飞机。 | foreground | 每台验收完整设备按M归一化 |
| `protection` | 条件性交付保护 | conditional | 声明工厂交付门点实际独耗临时保护罩。 | foreground | 每台验收完整设备按M归一化 |

已装备部件连接进入起落架系统动力完整客舱集成，实际涂装验收后工厂放行。声明真实工位顺序外包边界。必需过程不使每个示例交换成为必需；条件化学或独供模块须实际原件，供应商已含组分一次计入。

### 过程：已装备机体大部件连接 (`airframe`)

接收完成且已装备的机体大部件和机翼，按实际指定紧固件连接并密封接头。声明部件接口已装系统和供应商包含，不假设铝冶炼复材铺层机体大部件机翼制造在本门点内。A321XLR研发工位顺序是示例，不是通用配方。

#### 输入

##### 产品流

###### 完成且已装备的前机身大部件 (`forward_section`)

仅本过程接口实际供应精确物理项；采集实测净数量供应商包含退回记录。增列遗漏实际构件，避免重复已装备供应总成。

- 选定流：完成且已装备的前机身大部件
- 流属性/单位：质量 / kg
- 数量规则：对q_item应用normalize_mass；reference_mass；cp_airframe。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_airframe`
- 来源：`airbus-production`; `airbus-assembly`

###### 完成且已装备的中机身大部件 (`centre_section`)

仅本过程接口实际供应精确物理项；采集实测净数量供应商包含退回记录。增列遗漏实际构件，避免重复已装备供应总成。

- 选定流：完成且已装备的中机身大部件
- 流属性/单位：质量 / kg
- 数量规则：对q_item应用normalize_mass；reference_mass；cp_airframe。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_airframe`
- 来源：`airbus-production`; `airbus-assembly`

###### 完成且已装备的后机身大部件 (`aft_section`)

仅本过程接口实际供应精确物理项；采集实测净数量供应商包含退回记录。增列遗漏实际构件，避免重复已装备供应总成。

- 选定流：完成且已装备的后机身大部件
- 流属性/单位：质量 / kg
- 数量规则：对q_item应用normalize_mass；reference_mass；cp_airframe。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_airframe`
- 来源：`airbus-production`; `airbus-assembly`

###### 完成且已装备的单通道飞机主翼总成 (`wing`)

仅本过程接口实际供应精确物理项；采集实测净数量供应商包含退回记录。增列遗漏实际构件，避免重复已装备供应总成。

- 选定流：完成且已装备的单通道飞机主翼总成
- 流属性/单位：质量 / kg
- 数量规则：对q_item应用normalize_mass；reference_mass；cp_airframe。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_airframe`
- 来源：`airbus-production`; `airbus-assembly`

###### 实芯铝合金飞机连接铆钉 (`rivet`)

仅本过程接口实际供应精确物理项；采集实测净数量供应商包含退回记录。增列遗漏实际构件，避免重复已装备供应总成。

- 选定流：实芯铝合金飞机连接铆钉
- 流属性/单位：质量 / kg
- 数量规则：对q_item应用normalize_mass；reference_mass；cp_airframe。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_airframe`
- 来源：`airbus-production`; `airbus-assembly`

###### 配制聚硫飞机接头密封剂 (`sealant`)

仅本连接工单实际指定聚硫接头密封剂配方；保留供应产品安全数据表固化未固化状态，称量净领退保留密封剂，若独供活化剂另列交换。制造商装配示例不指定聚硫化学。

- 选定流：配制聚硫飞机接头密封剂
- 流属性/单位：质量 / kg
- 数量规则：对q_item应用normalize_mass；reference_mass；cp_airframe。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_airframe`
- 来源：`airbus-production`; `airbus-assembly`

###### 交流电 (`electricity_airframe`)

仅匹配本身份实际计量中国用户电网平均1–35kV交流电。不同地域电压组合绿电合同地面发电机须另用兼容交换。天津制造是可能制造商示例，不声明所有报告场址为中国。机载系统试验外部地面电源耗电计量一次。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
- 数量规则：对q_item应用normalize_mass；reference_mass；cp_airframe。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_airframe`
- 来源：`airbus-production`; `airbus-assembly`

#### 输出

##### 废物流

###### 转移处理的铝合金飞机连接钻孔切屑 (`chips`)

仅本总装接头孔精加工产生实际铝合金钻孔切屑，转移具名接收方。称量净收集切屑，记录合金污染处理路线；供应上游机加工切屑排除。

- 选定流：转移处理的铝合金飞机连接钻孔切屑
- 流属性/单位：质量 / kg
- 数量规则：对q_item应用normalize_mass；reference_mass；cp_airframe。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_airframe`
- 来源：`airbus-production`; `airbus-assembly`

### 过程：起落架与机载系统集成 (`systems`)

安装实际起落架尾翼及独供电气液压空调模块，连接试验系统。飞机空气循环冷却不证明使用制冷剂。避免重复已装备大部件内线束设备。起落架氮气液压油仅按实际加注记录适用。

#### 输入

##### 产品流

###### 完成民用飞机前起落架总成 (`nose_gear`)

仅本过程接口实际供应精确物理项；采集实测净数量供应商包含退回记录。增列遗漏实际构件，避免重复已装备供应总成。

- 选定流：完成民用飞机前起落架总成
- 流属性/单位：质量 / kg
- 数量规则：对q_item应用normalize_mass；reference_mass；cp_systems。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_systems`
- 来源：`airbus-assembly`

###### 完成民用飞机主起落架总成 (`main_gear`)

仅本过程接口实际供应精确物理项；采集实测净数量供应商包含退回记录。增列遗漏实际构件，避免重复已装备供应总成。

- 选定流：完成民用飞机主起落架总成
- 流属性/单位：质量 / kg
- 数量规则：对q_item应用normalize_mass；reference_mass；cp_systems。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_systems`
- 来源：`airbus-assembly`

###### 完成民用飞机垂尾总成 (`vertical_tail`)

仅本过程接口实际供应精确物理项；采集实测净数量供应商包含退回记录。增列遗漏实际构件，避免重复已装备供应总成。

- 选定流：完成民用飞机垂尾总成
- 流属性/单位：质量 / kg
- 数量规则：对q_item应用normalize_mass；reference_mass；cp_systems。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_systems`
- 来源：`airbus-assembly`

###### 完成民用飞机平尾总成 (`horizontal_tail`)

仅本过程接口实际供应精确物理项；采集实测净数量供应商包含退回记录。增列遗漏实际构件，避免重复已装备供应总成。

- 选定流：完成民用飞机平尾总成
- 流属性/单位：质量 / kg
- 数量规则：对q_item应用normalize_mass；reference_mass；cp_systems。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_systems`
- 来源：`airbus-assembly`

###### 完成飞机绝缘电气线束 (`harness`)

仅本过程接口实际供应精确物理项；采集实测净数量供应商包含退回记录。增列遗漏实际构件，避免重复已装备供应总成。

- 选定流：完成飞机绝缘电气线束
- 流属性/单位：质量 / kg
- 数量规则：对q_item应用normalize_mass；reference_mass；cp_systems。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_systems`
- 来源：`airbus-assembly`

###### 完成民用飞机气象雷达总成 (`avionics`)

仅本过程接口实际供应精确物理项；采集实测净数量供应商包含退回记录。增列遗漏实际构件，避免重复已装备供应总成。

- 选定流：完成民用飞机气象雷达总成
- 流属性/单位：质量 / kg
- 数量规则：对q_item应用normalize_mass；reference_mass；cp_systems。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_systems`
- 来源：`airbus-assembly`

###### 完成民用飞机空气循环空调组件 (`air_pack`)

仅本过程接口实际供应精确物理项；采集实测净数量供应商包含退回记录。增列遗漏实际构件，避免重复已装备供应总成。

- 选定流：完成民用飞机空气循环空调组件
- 流属性/单位：质量 / kg
- 数量规则：对q_item应用normalize_mass；reference_mass；cp_systems。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_systems`
- 来源：`airbus-assembly`

###### 配制磷酸酯飞机液压油 (`hydraulic_fluid`)

仅本过程接口实际供应精确物理项；采集实测净数量供应商包含退回记录。增列遗漏实际构件，避免重复已装备供应总成。

- 选定流：配制磷酸酯飞机液压油
- 流属性/单位：质量 / kg
- 数量规则：对q_item应用normalize_mass；reference_mass；cp_systems。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_systems`
- 来源：`airbus-assembly`

###### 供应飞机起落架加注的气态氮 (`nitrogen`)

仅本过程接口实际供应精确物理项；采集实测净数量供应商包含退回记录。增列遗漏实际构件，避免重复已装备供应总成。

- 选定流：供应飞机起落架加注的气态氮
- 流属性/单位：质量 / kg
- 数量规则：对q_item应用normalize_mass；reference_mass；cp_systems。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_systems`
- 来源：`airbus-assembly`

###### 交流电 (`electricity_systems`)

仅匹配本身份实际计量中国用户电网平均1–35kV交流电。不同地域电压组合绿电合同地面发电机须另用兼容交换。天津制造是可能制造商示例，不声明所有报告场址为中国。机载系统试验外部地面电源耗电计量一次。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
- 数量规则：对q_item应用normalize_mass；reference_mass；cp_systems。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_systems`
- 来源：`airbus-assembly`

### 过程：涡扇与辅助动力安装 (`propulsion`)

安装完成航空涡扇发动机短舱及声明辅助燃气涡轮动力装置。逐供应商序列安装供货边界区分完整发动机短舱挂架包含。航空活塞机涡轴和非航空43110发动机不兼容主动力涡扇身份；外部地面电源独立实测，不是安装发动机。

#### 输入

##### 产品流

###### 完成高涵道比民用航空涡扇发动机 (`turbofan`)

仅本过程接口实际供应精确物理项；采集实测净数量供应商包含退回记录。增列遗漏实际构件，避免重复已装备供应总成。

- 选定流：完成高涵道比民用航空涡扇发动机
- 流属性/单位：质量 / kg
- 数量规则：对q_item应用normalize_mass；reference_mass；cp_propulsion。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_propulsion`
- 来源：`airbus-assembly`

###### 完成民用航空涡扇短舱总成 (`nacelle`)

仅本过程接口实际供应精确物理项；采集实测净数量供应商包含退回记录。增列遗漏实际构件，避免重复已装备供应总成。

- 选定流：完成民用航空涡扇短舱总成
- 流属性/单位：质量 / kg
- 数量规则：对q_item应用normalize_mass；reference_mass；cp_propulsion。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_propulsion`
- 来源：`airbus-assembly`

###### 完成飞机辅助燃气涡轮动力装置 (`apu`)

仅本过程接口实际供应精确物理项；采集实测净数量供应商包含退回记录。增列遗漏实际构件，避免重复已装备供应总成。

- 选定流：完成飞机辅助燃气涡轮动力装置
- 流属性/单位：质量 / kg
- 数量规则：对q_item应用normalize_mass；reference_mass；cp_propulsion。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_propulsion`
- 来源：`airbus-assembly`

###### 配制合成酯航空涡轮润滑油 (`turbine_oil`)

仅本过程接口实际供应精确物理项；采集实测净数量供应商包含退回记录。增列遗漏实际构件，避免重复已装备供应总成。

- 选定流：配制合成酯航空涡轮润滑油
- 流属性/单位：质量 / kg
- 数量规则：对q_item应用normalize_mass；reference_mass；cp_propulsion。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_propulsion`
- 来源：`airbus-assembly`

###### 交流电 (`electricity_propulsion`)

仅匹配本身份实际计量中国用户电网平均1–35kV交流电。不同地域电压组合绿电合同地面发电机须另用兼容交换。天津制造是可能制造商示例，不声明所有报告场址为中国。机载系统试验外部地面电源耗电计量一次。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
- 数量规则：对q_item应用normalize_mass；reference_mass；cp_propulsion。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_propulsion`
- 来源：`airbus-assembly`

### 过程：完整客舱装配 (`cabin`)

仅独供时安装声明乘客座椅厨房卫生间地板。声明座椅布局应急设备全部安装舱内模块。原型工程师座椅额外试飞仪器不能替代完整客户客舱，排除交付M外。

#### 输入

##### 产品流

###### 完成民用客机座椅总成 (`seat`)

仅本过程接口实际供应精确物理项；采集实测净数量供应商包含退回记录。增列遗漏实际构件，避免重复已装备供应总成。

- 选定流：完成民用客机座椅总成
- 流属性/单位：质量 / kg
- 数量规则：对q_item应用normalize_mass；reference_mass；cp_cabin。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cabin`
- 来源：`airbus-production`; `airbus-assembly`

###### 完成民用客机厨房模块 (`galley`)

仅本过程接口实际供应精确物理项；采集实测净数量供应商包含退回记录。增列遗漏实际构件，避免重复已装备供应总成。

- 选定流：完成民用客机厨房模块
- 流属性/单位：质量 / kg
- 数量规则：对q_item应用normalize_mass；reference_mass；cp_cabin。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cabin`
- 来源：`airbus-production`; `airbus-assembly`

###### 完成民用客机卫生间模块 (`lavatory`)

仅本过程接口实际供应精确物理项；采集实测净数量供应商包含退回记录。增列遗漏实际构件，避免重复已装备供应总成。

- 选定流：完成民用客机卫生间模块
- 流属性/单位：质量 / kg
- 数量规则：对q_item应用normalize_mass；reference_mass；cp_cabin。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cabin`
- 来源：`airbus-production`; `airbus-assembly`

###### 完成飞机复合材料蜂窝地板 (`floor_panel`)

仅本过程接口实际供应精确物理项；采集实测净数量供应商包含退回记录。增列遗漏实际构件，避免重复已装备供应总成。

- 选定流：完成飞机复合材料蜂窝地板
- 流属性/单位：质量 / kg
- 数量规则：对q_item应用normalize_mass；reference_mass；cp_cabin。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cabin`
- 来源：`airbus-production`; `airbus-assembly`

###### 交流电 (`electricity_cabin`)

仅匹配本身份实际计量中国用户电网平均1–35kV交流电。不同地域电压组合绿电合同地面发电机须另用兼容交换。天津制造是可能制造商示例，不声明所有报告场址为中国。机载系统试验外部地面电源耗电计量一次。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
- 数量规则：对q_item应用normalize_mass；reference_mass；cp_cabin。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cabin`
- 来源：`airbus-production`; `airbus-assembly`

### 过程：条件性外表清洗涂装 (`coating`)

记录真实前处理涂层配方施涂固化治理。环氧底漆聚氨酯面漆混合二甲苯溶剂是各自须实际配方安全数据表的条件示例，不规定必然铬物质VOC混合物燃烧加热经验收率。

#### 输入

##### 产品流

###### 工艺用水 (`water`)

仅实际供应匹配本产品身份经处理工业工艺用水；实测净用量，若按体积计量须真实密度状态。不是未处理基础淡水取用或排放废水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 / kg
- 数量规则：对q_item应用normalize_mass；reference_mass；cp_coating。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_coating`
- 来源：`airbus-assembly`

###### 配制环氧树脂飞机外表底漆基料 (`primer`)

仅本过程接口实际供应精确物理项；采集实测净数量供应商包含退回记录。增列遗漏实际构件，避免重复已装备供应总成。

- 选定流：配制环氧树脂飞机外表底漆基料
- 流属性/单位：质量 / kg
- 数量规则：对q_item应用normalize_mass；reference_mass；cp_coating。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_coating`
- 来源：`airbus-assembly`

###### 配制聚胺环氧底漆固化剂 (`primer_hardener`)

仅本过程接口实际供应精确物理项；采集实测净数量供应商包含退回记录。增列遗漏实际构件，避免重复已装备供应总成。

- 选定流：配制聚胺环氧底漆固化剂
- 流属性/单位：质量 / kg
- 数量规则：对q_item应用normalize_mass；reference_mass；cp_coating。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_coating`
- 来源：`airbus-assembly`

###### 配制聚氨酯飞机外表面漆基料 (`topcoat`)

仅本过程接口实际供应精确物理项；采集实测净数量供应商包含退回记录。增列遗漏实际构件，避免重复已装备供应总成。

- 选定流：配制聚氨酯飞机外表面漆基料
- 流属性/单位：质量 / kg
- 数量规则：对q_item应用normalize_mass；reference_mass；cp_coating。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_coating`
- 来源：`airbus-assembly`

###### 配制多异氰酸酯聚氨酯面漆固化剂 (`topcoat_hardener`)

仅本过程接口实际供应精确物理项；采集实测净数量供应商包含退回记录。增列遗漏实际构件，避免重复已装备供应总成。

- 选定流：配制多异氰酸酯聚氨酯面漆固化剂
- 流属性/单位：质量 / kg
- 数量规则：对q_item应用normalize_mass；reference_mass；cp_coating。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_coating`
- 来源：`airbus-assembly`

###### 混合异构体二甲苯涂料溶剂 (`xylene`)

仅本过程接口实际供应精确物理项；采集实测净数量供应商包含退回记录。增列遗漏实际构件，避免重复已装备供应总成。

- 选定流：混合异构体二甲苯涂料溶剂
- 流属性/单位：质量 / kg
- 数量规则：对q_item应用normalize_mass；reference_mass；cp_coating。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_coating`
- 来源：`airbus-assembly`

###### 交流电 (`electricity_coating`)

仅匹配本身份实际计量中国用户电网平均1–35kV交流电。不同地域电压组合绿电合同地面发电机须另用兼容交换。天津制造是可能制造商示例，不声明所有报告场址为中国。机载系统试验外部地面电源耗电计量一次。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
- 数量规则：对q_item应用normalize_mass；reference_mass；cp_coating。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_coating`
- 来源：`airbus-assembly`

#### 输出

##### 废物流

###### 转移处理的未固化聚氨酯涂料残余物 (`waste_paint`)

仅匹配实际配方时转出有记录处理的真实未固化聚氨酯面漆残余物。分别称量湿残余并保留安全数据表接收方，分开退回可复用涂料飞机保留干涂层。

- 选定流：转移处理的未固化聚氨酯涂料残余物
- 流属性/单位：质量 / kg
- 数量规则：对q_item应用normalize_mass；reference_mass；cp_coating。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_coating`
- 来源：`airbus-assembly`

###### 转移处理的水性飞机外表清洗废水 (`effluent`)

仅本门点实际飞机外表清洗水性废水转移处理。按实际密度状态接收污染记录计量实测净废水，不是基础淡水资源或未指定水排放。

- 选定流：转移处理的水性飞机外表清洗废水
- 流属性/单位：质量 / kg
- 数量规则：对q_item应用normalize_mass；reference_mass；cp_coating。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_coating`
- 来源：`airbus-assembly`

#### 输出

##### 基本流

###### 二甲苯（所有异构体） (`xylene_air`)

仅本涂装过程实际分物质CAS1330-20-7混合二甲苯释放，即时未指定空气。不配总VOC职业暴露或单一异构体。按校准出口浓度流量实际运行期间积分，保留检出限治理实测换算基准。

- 选定流：二甲苯（所有异构体） `fe0acd60-3ddc-11dd-ad91-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对q_item应用normalize_mass；reference_mass；cp_coating。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_coating`
- 来源：`airbus-assembly`

### 过程：配置称重与可归属验收 (`acceptance`)

包括可归属本序列实际地面系统检查发动机辅助动力运行滑行及实际生产验收飞行，地面飞行分记录。不自动把型号研发结构疲劳认证活动分配到系列单架验收。须实际校准完整飞机称重签署配置修正。不假设飞行时长燃油量或排放。

#### 输入

##### 产品流

###### 煤油型喷气燃料 (`jet_fuel`)

仅真实石油化石Jet A-1牌号煤油型喷气燃料，按原始供油合格证安全数据表试验日志核验。公开身份涵盖飞行煤油混合物，不提供Jet A-1制造数值强度。核对净计量供应退回库存验收保留不可用燃油；分开地面生产飞行耗油与M排除的保留可用燃油。可持续生物混合替代燃油须独立兼容身份碳来源核算；航空汽油不兼容。

- 选定流：煤油型喷气燃料 `e1ede47a-b840-45e6-b711-98cb547902cf`
- 流属性/单位：质量 / kg
- 数量规则：对q_item应用normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_acceptance`
- 来源：`airbus-assembly`; `faa-weight`; `faa-addendum`

###### 交流电 (`electricity_acceptance`)

仅匹配本身份实际计量中国用户电网平均1–35kV交流电。不同地域电压组合绿电合同地面发电机须另用兼容交换。天津制造是可能制造商示例，不声明所有报告场址为中国。机载系统试验外部地面电源耗电计量一次。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
- 数量规则：对q_item应用normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_acceptance`
- 来源：`airbus-assembly`; `faa-weight`; `faa-addendum`

#### 输出

##### 产品流

###### 验收完整单通道双涡扇民用客机 (`finished_machine`)

一架验收完整飞机含交付客户客舱安装双涡扇真实起落架系统油液状态；物理净M按cp_mass及独立mass_record_origin/mass_configuration。固定1kg输出为制造参考，不是一客运公里或目录飞机。

- 选定流：验收完整单通道双涡扇民用客机
- 流属性/单位：质量 / kg
- 数量规则：1 kg
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_mass`
- 来源：`airbus-assembly`; `faa-weight`; `faa-addendum`

#### 输出

##### 基本流

###### 二氧化碳（化石源） (`co2_air`)

仅可归属化石CO2实际排向即时未指定子介质空气。地面运行生产飞行分别保留记录；若飞行高度确定具体子介质，另用兼容流行而不套本未指定空气行。用CO2实测或实测化石碳平衡核验燃油组成氧化状态，排除生物源碳上游排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对q_item应用normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_acceptance`
- 来源：`airbus-assembly`; `faa-weight`; `faa-addendum`

###### 一氧化氮 (`no_air`)

仅地面发动机辅助动力出口实际分测NO CAS10102-43-9，即时未指定空气。不是NO2、N2O或按NO2当量报告NOx，保留实际浓度排气流量试验时长换算。不推断必然NO量。

- 选定流：一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对q_item应用normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_acceptance`
- 来源：`airbus-assembly`; `faa-weight`; `faa-addendum`

###### 二氧化氮 (`no2_air`)

仅地面发动机辅助动力出口实际分测NO2 CAS10102-44-0，即时未指定空气。NO、按NO2当量NOx或N2O不能替代，按实际校准排气测量期间积分。飞行高度特定排放须独立匹配行。

- 选定流：二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对q_item应用normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_acceptance`
- 来源：`airbus-assembly`; `faa-weight`; `faa-addendum`

### 过程：条件性交付保护 (`protection`)

实际可拆保护与验收空飞机分开记录。不假设整机聚乙烯包裹；复用保护罩须独立实测使用归属。声明验收门点后调机飞行排除，除非门点明确包含。

#### 输入

##### 产品流

###### 低密度聚乙烯薄膜（PE-LD） (`film`)

仅实际匹配本物理身份非粘性非泡沫无增强未层压PE-LD保护薄膜。净消耗退回膜称量，与M分开，不假设整机包裹。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：质量 / kg
- 数量规则：对q_item应用normalize_mass；reference_mass；cp_protection。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_protection`
- 来源：

###### 交流电 (`electricity_protection`)

仅匹配本身份实际计量中国用户电网平均1–35kV交流电。不同地域电压组合绿电合同地面发电机须另用兼容交换。天津制造是可能制造商示例，不声明所有报告场址为中国。机载系统试验外部地面电源耗电计量一次。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
- 数量规则：对q_item应用normalize_mass；reference_mass；cp_protection。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_protection`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_orders` | shared resources | 先细分真实序列工单工位计量避免分配。剩余共用资源按有因果实测连接机时、真实同涂层面积配方或可归属试验地面供电时间负荷，保留分子分母敏感性。不同机体客舱动力不按架均分或名义飞机质量分配。 | `ghg-allocation` |
| `allocation_returns` | chips; waste_paint; effluent | 区分供应商净退料复用工具保护厂内保留材料转移废物。实测真实接收处理状态，不自动给避免原生金属燃料回收抵扣。真实联产品须独立审查因果分配匹配上游边界，不仅因出售而推断。 | `ghg-allocation` |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | 验收完整飞机空机净质量 | controlled_acceptance_record | 型别型号序列；配置；交付客舱动力配置；验收净质量M；真实原始校准平台轮载载荷传感器读数；支承皮重零点环境水平重复性；设备清单；实测燃油工作油油液临时配重试验仪器保护修正；签署交付状态质量核对 | 使用受控的验收质量记录核对同一配置的验收设备。 | kg | 每架验收飞机 | 实际制造验收时期 | 声明总装交付门点 | 每台验收净质量 | 原始校准物理称重签署配置核对 |
| `cp_airframe` | airframe | 已装备机体大部件连接 | foreground_record | 序列工单物料；验收设备数量；逐物理身份组成属性单位；净领退库存供应已含组分；电力场址电压组合仪表；实测构件质量计件换算；安全数据表水废物接收；真实地面飞行试验燃油化石比例物质介质高度检出限；因果共用驱动分母；校准来源覆盖 | 保留逐部件序列接口净收料质量供应商完成度铆钉领退及实际钻孔切屑，核对另行安装与部件已含构件。 | 逐行实际单位 | 每序列工单试验事件 | 声明制造时期 | 声明总装工厂披露承包方 | 可归属交换数量 / 验收设备数量 | 原始供应商称重仪表安全数据表转移试验飞行记录 |
| `cp_systems` | systems | 起落架与机载系统集成 | foreground_record | 序列工单物料；验收设备数量；逐物理身份组成属性单位；净领退库存供应已含组分；电力场址电压组合仪表；实测构件质量计件换算；安全数据表水废物接收；真实地面飞行试验燃油化石比例物质介质高度检出限；因果共用驱动分母；校准来源覆盖 | 核对序列模块收料保留质量已含组分范围实际油液领退实测气体状态系统试验。 | 逐行实际单位 | 每序列工单试验事件 | 声明制造时期 | 声明总装工厂披露承包方 | 可归属交换数量 / 验收设备数量 | 原始供应商称重仪表安全数据表转移试验飞行记录 |
| `cp_propulsion` | propulsion | 涡扇与辅助动力安装 | foreground_record | 序列工单物料；验收设备数量；逐物理身份组成属性单位；净领退库存供应已含组分；电力场址电压组合仪表；实测构件质量计件换算；安全数据表水废物接收；真实地面飞行试验燃油化石比例物质介质高度检出限；因果共用驱动分母；校准来源覆盖 | 采集真实发动机短舱辅助动力序列航空适用性供货完成度实测构件净质量实际合成酯油加注退回。 | 逐行实际单位 | 每序列工单试验事件 | 声明制造时期 | 声明总装工厂披露承包方 | 可归属交换数量 / 验收设备数量 | 原始供应商称重仪表安全数据表转移试验飞行记录 |
| `cp_cabin` | cabin | 完整客舱装配 | foreground_record | 序列工单物料；验收设备数量；逐物理身份组成属性单位；净领退库存供应已含组分；电力场址电压组合仪表；实测构件质量计件换算；安全数据表水废物接收；真实地面飞行试验燃油化石比例物质介质高度检出限；因果共用驱动分母；校准来源覆盖 | 核对客户客舱物料供应模块实际安装数量净质量最终布局版次验收记录。 | 逐行实际单位 | 每序列工单试验事件 | 声明制造时期 | 声明总装工厂披露承包方 | 可归属交换数量 / 验收设备数量 | 原始供应商称重仪表安全数据表转移试验飞行记录 |
| `cp_coating` | coating | 条件性外表清洗涂装 | foreground_record | 序列工单物料；验收设备数量；逐物理身份组成属性单位；净领退库存供应已含组分；电力场址电压组合仪表；实测构件质量计件换算；安全数据表水废物接收；真实地面飞行试验燃油化石比例物质介质高度检出限；因果共用驱动分母；校准来源覆盖 | 分项采集涂料组分溶剂水领退保留涂层质量，实际废水未固化残余转移分物质实测出口排放。 | 逐行实际单位 | 每序列工单试验事件 | 声明制造时期 | 声明总装工厂披露承包方 | 可归属交换数量 / 验收设备数量 | 原始供应商称重仪表安全数据表转移试验飞行记录 |
| `cp_acceptance` | acceptance | 配置称重与可归属验收 | foreground_record | 序列工单物料；验收设备数量；逐物理身份组成属性单位；净领退库存供应已含组分；电力场址电压组合仪表；实测构件质量计件换算；安全数据表水废物接收；真实地面飞行试验燃油化石比例物质介质高度检出限；因果共用驱动分母；校准来源覆盖 | 采集序列特定真实试验飞行日志计量燃油净退回化石组成排放物质环境子介质签署称重设备油液修正验收架数。 | 逐行实际单位 | 每序列工单试验事件 | 声明制造时期 | 声明总装工厂披露承包方 | 可归属交换数量 / 验收设备数量 | 原始供应商称重仪表安全数据表转移试验飞行记录 |
| `cp_protection` | protection | 条件性交付保护 | foreground_record | 序列工单物料；验收设备数量；逐物理身份组成属性单位；净领退库存供应已含组分；电力场址电压组合仪表；实测构件质量计件换算；安全数据表水废物接收；真实地面飞行试验燃油化石比例物质介质高度检出限；因果共用驱动分母；校准来源覆盖 | 称量实际独耗保护膜及退回，保留放行配置门点。 | 逐行实际单位 | 每序列工单试验事件 | 声明制造时期 | 声明总装工厂披露承包方 | 可归属交换数量 / 验收设备数量 | 原始供应商称重仪表安全数据表转移试验飞行记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

按实测退回库存变化有依据共用归属后计算每验收序列设备真实可归属净交换q_item，再除同一实际M。兼容序列配置汇总用可归属总交换除实测验收净质量之和，保留每个序列。实质不同机体发动机客舱涂层门点试验路线分开。计量体积输入须真实状态密度转kg，保留原属性换算不确定性。缺M密度化石比例测量仍为缺口。

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_mass` | cp_mass | 按mass_record_origin和mass_configuration实施真实校准完整飞机读数实测修正。缺实际称重方法设备清单或未核对客舱油液动力状态阻止量值完成。 | 原始序列称重校准设备油液核对 |
| `quality_bom` | all processes | 核对已装备部件机翼尾翼起落架系统涡轮发动机与短舱挂架辅助动力包含、完整客户客舱保留油液。完整数据集声明前原子化增列实际遗漏资源构件；供应商总装制造不重复。 | 现行图纸物料序列供应完成度试验记录 |
| `quality_route` | turbofan; apu; jet_fuel; co2_air; no_air; no2_air; xylene_air | 核验航空涡扇路线完成供货状态，分开辅助动力外部地面发动机。保留真实Jet A-1油品化石比例实测空气物质子介质；高度特定飞行排放需匹配身份。总VOC/NOx或活塞风机身份不能替代。 | 公开流直读字段真实供应安全数据表实测试验原件 |
| `quality_evidence` | dataset | 披露实际场址时期门点来源沿革覆盖条件缺席不确定性分配全部身份量值上游缺口经验质量基准。范围来自实际校准记录或独立核验兼容证据，不虚构质量收率寿命排放阈值。本方法不含工厂观测或科学批准。 | 原始证据缺口登记 |


## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | finished_machine; cp_mass | 核验单通道双涡扇完整民用载客配置、原始空载分类大于2000kg、正实际空机净M固定1kg输出。拒部分原型客舱目录最大起飞载重质量无依据密度修正。 | `faa-weight` |
| `validate_rows` | all inventory rows | 每交换一个真实化学物理身份方向类型兼容公开引用属性单位、共用M关联合法小写协议规则。核对正式中文名来源路线介质。未解决精确身份仍为声明审查缺口；自动通过不建立适用性。 |  |
| `validate_scope_balance` | all processes | 核对净库存完整供应包含安装干材料保留油液废物真实地面飞行试验覆盖。未测量值缺实际构件验收原件上游数据集阻止无条件完整摇篮到工厂门声明。 | `ghg-allocation` |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 配置单通道民用喷气客机前景总装 |
| downstream_use | secondary_dataset；background_dataset需合格审查明确上游关联 |
| allowed_use | 兼容机体动力客舱空机M供应完成度门点制造供应模型 |
| excluded_use | 整个CPC49623、其他飞机动力系列、未完整原型飞行运输等质量客运公里等价或无依据全生命周期 |
| required_metadata | 制造者型别型号序列；现行图纸物料完整载客客舱布局；双高涵道比航空涡扇路线发动机短舱辅助动力序列供应商包含；已装备机体机翼尾翼接口起落架安装系统；真实涂层安全数据表治理；实际验收配置空机净M kg与cp_mass、原始校准完整飞机称重签署实测配置油液修正；保留必需安装设备声明永久配重工作油液压油有记录不可用燃油；排除可用燃油机组乘客货物临时配重试验仪器包装散装备件；原始实际空载分类大于2000kg；实际场址时期试验地面飞行子介质外包交付门点 |
| required_quality_disclosure | 实际称重量值校准配置油液核对供应包含试验介质化石比例经验质量身份上游缺口 |
| update_trigger | 飞机发动机客舱部件结构供应边界涂层油液试验飞行路线实际M原始生成现行称重步骤门点场址时期改变 |


## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `airbus-production` | literature | [Airbus Production](https://www.airbus.com/en/products-services/commercial-aircraft/the-life-cycle-of-an-aircraft/production) | 采购制造总装段：供应已装备大部件客舱座椅发动机单通道场址。仅制造商工艺示例，不采用产能供应比例单机强度全球场址假设。 |
| `airbus-assembly` | literature | [Airbus First A321XLR development aircraft undergoes final assembly,2021-12](https://www.airbus.com/en/newsroom/news/2021-12-first-a321xlr-development-aircraft-undergoes-final-assembly) | 部件汇合工位后续步骤段：机体连接机翼起落架尾翼系统客舱发动机短舱涂装地面飞行顺序。历史研发机有部分客舱特有试飞仪器。不采用铆钉数XLR油箱容量固定周期必需化学系列认证活动，须真实系列原件。 |
| `faa-weight` | official_guidance | [FAA-H-8083-1B Aircraft Weight and Balance Handbook,2016](https://www.faa.gov/sites/faa.gov/files/2023-09/Weight_Balance_Handbook.pdf) | 印刷3-2至3-5/PDF34至37：校准平台轮载载荷传感器称重真实设备配置不可用可用燃油工作油其他油液状态。历史物理指南与2025增补现行制造商步骤合用。不强制示例密度量程校准间隔通用认证制度。 |
| `faa-addendum` | official_guidance | [FAA Weight and Balance Handbook Addendum,2025-10-20](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/Weight_Balance_HB_Addendum_(MOSAIC).pdf) | PDF/印刷1：第2章制造商提供空重重心原件更正。不是真实工厂称重或本民用喷气客机轻型运动适用证据。 |
| `ghg-allocation` | official_guidance | [WRI/WBCSD Product Life Cycle Accounting and Reporting Standard,2011](https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf) | 印刷63/PDF65表9.1至9.2：仅历史避免细分因果分配层次，须真实前景实测驱动，不采用飞机分配因子。 |
