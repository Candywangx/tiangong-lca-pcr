---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.metal-machining-centre
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 配置金属加工中心制造

## 1. 范围与适用性

覆盖新完整 CNC 金属切屑去除加工中心的工厂制造：至少三轴数控，配置自动换刀及刀库。DMG MORI 支持本类别区别（PDF 实际第5页，印刷第8–9页）。声明一种卧式或立式主轴设计及一种配置，包括实际额外回转轴。本较窄边界排除单工位组合机床、多工位传送机床、无自动换刀的铣床、以车削为主的车床、磨削、束流加工、非去除成形、单售组件及再制造。安装回转工作台、排屑机或内部冷却设备仅在明确纳入整机物料清单时计入；外部机器人单元、托盘线及独立机器在范围之外。排除客户金属零件生产、工件产率、使用期能耗及冷却液、后续维护、寿命及报废。本方法建模制造，不是机加工服务。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.metal-machining-centre |
| classification_refs | CPC 3.0 44212; 较窄候选边界；不声明已接受映射 |
| covered_products | 带自动换刀的完整配置 CNC 金属加工中心 |
| excluded_products | 组合及传送机床；独立铣床、车床、组件及客户机加工服务 |
| representative_product | 一种声明立式三轴 CNC 加工中心；五轴或卧式变体须有各自配置及 M |
| production_route | 收货及自制外购核对；实际结构机加工及外罩制造；可选表面处理；主轴/轴系/换刀/CNC 集成；几何及功能验收；可选包装 |
| market_state | 声明工厂边界验收完整机器，声明余留油液及安装选项 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造一种完整声明金属加工中心配置 |
| How much | 1 kg 验收净配置机器；实测 M kg 代表一台实际机器 |
| How well | 满足实际型号专属尺寸及几何、主轴及轴系、换刀、电气、防护及功能验收计划；保留公差及结果，不设通用精度或产能阈值 |
| How long or cycle | 一次制造交付；不规定服务寿命或作业循环 |
| reference_flow_link | `finished_machine` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 验收完整配置 CNC 金属加工中心 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号；序列号；一种配置及物料清单修订；主轴方向/锥孔及电动机包含；受控直线及回转轴和行程；换刀刀库设计及容量；工作台；CNC/驱动/操控完整性；防护及联锁；内部冷却及润滑；安装选项及外部设备排除；供货总成包含；实际验收计划及结果；余留油液/排空状态；实测净 M；场址；期间；起终边界；包装及散装备件排除 |

在数据集元数据或等效注释声明全部限定信息。M 为声明加注或排空状态后的验收安装配置，排除运输包装、发运工装、工件、散装刀具及独立交付备件。明确记录工厂余留油及冷却液、包含排屑机或回转工作台。等机器质量不能证明等加工能力。制造商手册质量、电动机额定值、轴行程及外形不能作为实测 M 换算因子。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `electricity_energy` | electricity_fabrication; electricity_finishing; electricity_assembly; electricity_factory_test | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留表计 kWh 及精确换算 1 kWh = 3.6 MJ。匹配低于1kV 供电及电网平均来源；电力不是质量。 |
| `liquid_mass` | coolant_concentrate_fabrication; coolant_concentrate_factory_test; tap_water_fabrication; tap_water_factory_test; guideway_oil; spent_emulsion_fabrication; spent_emulsion_factory_test; spent_guideway_oil | 质量 | kg | 称量交付态配方或外运溶液。体积记录须有依据密度、温度及明确换算；浓缩液、稀释水、余留加注及废液分开。 |
| `groundwater_volume` | groundwater_fabrication | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 在 cp_water_resource 计量淡水井取水；归一化分子保持 m3，分母为 kg 整机。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 指定原料及毛坯、分别指定成品总成收至机床工厂 |
| starting_condition_role | 前景制造模块投入，单独链接供应商生产及来料运输 |
| product_classification_scope | CPC44212 加工中心子集；排除组合及传送机床 |
| recursive_input_rule | 采购完整加工中心为供应商边界投入，不重复工厂模块。采购成品底座、主轴或控制柜替代其本地毛坯或组件制造 |
| upstream_dataset_requirement | 匹配牌号、毛坯处理、组件完整性、冷却液组成及状态、电压及来源、地区、运输及废物处理边界；披露未链接活动 |
| disclosure | 仅前景制造不是完整摇篮到工厂门。声明实际工序、自制外购替代、外包边界、间接活动归属、包装及缺失上游/运输/处理链接 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_operations` | manufacturing | 纳入收货及配置控制、实际基准加工、板材切割折弯、实际连接/去毛刺/清洗/涂装、配置对中及接线、验收、应归属返工及不合格品和包装。采购消除应力铸件不代表厂内铸造或热处理炉。实际执行或外包时须展开具体流及边界。 |  |
| `boundary_bom` | all inventory rows | 将每个实际物料清单项及工序对应一个原子交换或有依据排除。实际存在安装外罩、密封、刮屑件、软管、接头、联轴器、螺母及垫圈、电缆、传感器、联锁、过滤器、排屑机或回转轴模块时分别增列。实际使用焊接填充及气体、清洗剂及漂洗水、气动空气、液压油、润滑脂、燃料、处理化学品及每种废物或排放时分别列行。初始卡片为条件设计，不是通用完整物料清单。 |  |
| `boundary_test` | factory_test | 纳入实际几何及定位、主轴旋转、换刀、控制器及联锁和验收作业，并记录工厂实测能耗、加注及排空、试验原料及废物。仅实际进行时记录干湿试切范围。产生时须将试切切屑及实测排放作为独立交换展开。不计客户工件生产、使用期待机曲线、通用试验时间或寿命。 |  |
| `boundary_semantic` | reference_product | 至少三数控轴及自动换刀和刀库区别本加工中心边界。现有钻削/镗削/铣削及车床 PCR 排除此加工中心边界。不能将整条传送线或机器人单元按一台机器 M 归一化。 | dmg-machining-centre-whitepaper |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | 精密结构制造 | conditional | 实际厂内毛坯机加工或外罩制造 | 前景阶段；内部在制品保持模块内 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| `finishing` | 声明表面处理 | conditional | 仅实际去毛刺、预处理或涂装 | 前景阶段；内部在制品保持模块内 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| `assembly` | 配置加工中心集成 | required | 每种完整声明配置 | 前景阶段；内部在制品保持模块内 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| `factory_test` | 工厂检查及验收 | required | 每台成品机器；仅按实际规程进行有动力或试切试验 | 前景阶段；内部在制品保持模块内 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| `packout` | 发运保护 | conditional | 实际工厂包装 | 前景阶段；内部在制品保持模块内 | 每 1 kg 参考流；采集基准为每台验收成品机器 |

| 工序 | 阶段 | 必需实际路线记录 |
| --- | --- | --- |
| 来料检查 | assembly | 物料清单及序列；铸件毛坯牌号及供应商处理；主轴/轴系/操控完整性；自制外购及安装选项 |
| 结构精密机加工 | fabrication | 仅实际毛坯路线：基准铣削及钻削、轴承及导轨座加工、设置、实测去除材料、刀具消耗、冷却液配方及废物；外包机加工单独设边界 |
| 外罩预备 | fabrication | 实际切割及折弯连接；一种板材牌号及厚度、净领用、边角料、设置及机时；实际焊接耗材单列 |
| 表面预处理及涂饰 | finishing | 实际毛刺及清洁检查、磨具设计、使用时湿洗配方、涂层配方及固化设置、回收、每种废物及实测排放；不要求必需粉末涂装 |
| 轴系及主轴集成 | assembly | 导轨安装、丝杠对中及预紧、工作台安装、主轴定位、电动机连接、润滑及扭矩和几何记录；历史 Haas 图示独立导轨/丝杠/润滑硬件 |
| 操控及自动换刀 | assembly | CNC 控制柜及驱动接线、接地、安装换刀刀库、传感器/防护/联锁、实际执行介质及内部冷却连接 |
| 工厂验收 | factory_test | 实际几何、反向间隙及定位、主轴跳动、换刀及安全功能计划；仅使用时激光或球杆仪、仪器校准、声明公差及结果、实测有动力或试切数量、复试及声明加注排空后净 M |
| 发运 | packout | 将包装及运输工装与安装整机分开；采用实际单独材料保护基准及主轴表面 |

### 过程： 精密结构制造 (`fabrication`)

#### 输入

##### 产品流

###### 消除应力的灰铸铁机床底座毛坯 (`base_blank`)

仅在实际供应商声明本灰铸铁毛坯及消除应力交付状态且工厂对其机加工时纳入。记录牌号、处理、净收货质量及加工余量；采购成品结构替代本毛坯路线。Haas 图纸不能证明合金或处理。

- 选定流： 消除应力的灰铸铁机床底座毛坯
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

###### 消除应力的灰铸铁机床立柱毛坯 (`column_blank`)

仅在实际供应商声明本灰铸铁毛坯及消除应力交付状态且工厂对其机加工时纳入。记录牌号、处理、净收货质量及加工余量；采购成品结构替代本毛坯路线。Haas 图纸不能证明合金或处理。

- 选定流： 消除应力的灰铸铁机床立柱毛坯
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

###### 冷轧非合金钢外罩板 (`cover_sheet`)

仅用于厂内实际切割及折弯一种声明牌号和厚度板材。称量净领用及退料；采购成品外罩不再计原料。其他合金及厚度分开。

- 选定流： 冷轧非合金钢外罩板
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

###### 低压电网电力 (`electricity_fabrication`)

计量实际阶段并包含应归属返工。本身份为低于 1 kV 用户端电网平均交流电；其他电压或来源路线须另列相符交换。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_energy`
- 来源：

###### 成品实心硬质合金立铣刀 (`carbide_tool_fabrication`)

仅用于本阶段实际使用一种供应商声明 WC-Co 立铣刀设计。根据有记录刀具使用寿命及因果切削工作量，将实测更换或消耗质量归属所服务工单。它是工厂耗材，不计整机 M；不设通用磨耗因子或每台全刀具计入。

- 选定流： 成品实心硬质合金立铣刀
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_tool。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_tool`
- 来源：

###### 水混合型矿物油金属加工液浓缩液 (`coolant_concentrate_fabrication`)

仅在实际湿式加工配方采购本指定矿物油浓缩液时纳入。保留安全数据表、配方、浓度、净浓缩液质量及添加水；采购预混乳化液不能再计浓缩液加水。不设通用稀释比例。

- 选定流： 水混合型矿物油金属加工液浓缩液
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

###### 外供饮用水等级自来水 (`tap_water_fabrication`)

仅用于工厂实际冷却液稀释或试验的外供饮用水等级水。称量 kg 或保留体积换算密度及温度；排除外购预混液已含水及后续客户作业用水。

- 选定流： 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

##### 基本流

###### 取用的淡水地下水 (`groundwater_fabrication`)

仅在本工厂实际由自有井取用淡水时纳入。计量 m3 并保留国家/地区；增列实际泵送及处理交换。同一次取水不能再计外供自来水，也不能将内部循环计新增取水。

- 选定流： 地下水 `4f462198-40cd-4184-8733-86648a20dc3f`
- 流属性/单位： 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_water_resource。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_water_resource`
- 来源：

#### 输出

##### 废物流

###### 废矿物油水基加工乳化液 (`spent_emulsion_fabrication`)

仅用于本阶段实际外运处理的废乳化液。称量溶液质量并记录组成、油比例、污染、回收及接收边界；它不是排水环境基本流。内部循环不是新增外运。

- 选定流： 废切削液 `62b6a738-fb6a-4570-a95a-9255ec0dcb2b`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_waste`
- 来源：

###### 未处理洁净非合金钢外罩边角料 (`clean_steel_offcut`)

称量声明外罩制造中分类且未经处理外运的洁净板材边角料。内部回用原料不是外运；含油加工切屑须另列具体废物。

- 选定流： 工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_waste`
- 来源：

###### 未处理灰铸铁加工切屑 (`grey_iron_chip`)

仅用于声明毛坯实际机加工。称量分类外运切屑并保留牌号、水分或油污染及接收路线。干态及含油物流须分列；不设通用切屑产率。

- 选定流： 未处理灰铸铁加工切屑
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_waste`
- 来源：

###### 收集的干态灰铸铁加工粉尘 (`collected_iron_dust`)

仅用于实测收集且交付接收方的粉尘。保留牌号及磨料污染；收集固体与空气排放及作为产品出售的金属粉分开。

- 选定流： 收集的干态灰铸铁加工粉尘
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_waste`
- 来源：

##### 基本流

###### 排入空气的粒径未特指颗粒物 (`air_particulate`)

仅在实际治理后监测证实颗粒物排入空气且粒径及空气子介质未特指时纳入。保留出口浓度、排气体积及采样基准。指定粒径或子介质须匹配身份；不因机加工就推断排放。

- 选定流： 颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_emission`
- 来源：

###### 排入空气的矿物油气溶胶 (`air_oil_mist`)

仅在实际监测区分矿物油气溶胶质量、水滴及收集废油时纳入。保留组成、治理后浓度、排气体积及实际空气子介质；不假定必然油雾排放或总气溶胶转油因子。

- 选定流： 排入空气的矿物油气溶胶
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_emission`
- 来源：

### 过程： 声明表面处理 (`finishing`)

#### 输入

##### 产品流

###### 低压电网电力 (`electricity_finishing`)

计量实际阶段并包含应归属返工。本身份为低于 1 kV 用户端电网平均交流电；其他电压或来源路线须另列相符交换。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_energy`
- 来源：

###### 干粉涂料 (`powder_paint`)

仅用于实际外罩涂装的一种声明干粉配方。称量扣除退回或回收粉末的净领用并计量实际固化；不规定所有设计必须粉末涂装。湿漆或其他固化热源须单列交换。

- 选定流： 涂料（粉末） `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

###### 成品氧化铝磨料砂盘 (`abrasive_disc`)

仅在实际表面处理路线消耗一种指定砂盘设计时纳入。记录结合剂、等级及应归属更换砂盘质量；原料氧化铝不能代表成品磨具。

- 选定流： 成品氧化铝磨料砂盘
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

#### 输出

##### 废物流

###### 废氧化铝磨料砂盘 (`spent_abrasive_disc`)

称量实际外运废砂盘，与粉尘分开，保留磨料、结合剂及附着金属组成。将公开抛光介质类别限定为一种砂盘设计。

- 选定流： 废抛光介质 `cdb1838e-d3ec-41e1-87ee-627b9ce95e88`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_waste`
- 来源：

###### 未回收固体粉末漆过喷料 (`powder_overspray`)

称量内部回收后实际外运未回收过喷料并保留配方及接收路线。不设通用涂装损失率。

- 选定流： 未回收固体粉末漆过喷料
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_waste`
- 来源：

### 过程： 配置加工中心集成 (`assembly`)

#### 输入

##### 产品流

###### 低压电网电力 (`electricity_assembly`)

计量实际阶段并包含应归属返工。本身份为低于 1 kV 用户端电网平均交流电；其他电压或来源路线须另列相符交换。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_energy`
- 来源：

###### 成品电主轴加工中心主轴筒 (`spindle_cartridge`)

仅用于一种声明配置安装的单独采购组件。称量实际交付质量或使用经核验批次数量质量记录。记录锥孔、轴承、电动机包含、冷却及供货完整性；排除另计内部件。

- 选定流： 成品电主轴加工中心主轴筒
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品滚珠丝杠螺母总成 (`ball_screw`)

仅用于一种声明配置安装的单独采购组件。称量实际交付质量或使用经核验批次数量质量记录。记录一种轴系设计、行程、精度及包含支承轴承；Haas 仅为历史装配实例。

- 选定流： 成品滚珠丝杠螺母总成
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： haas-base-assembly-2013

###### 成品钢制直线导轨 (`linear_rail`)

仅用于一种声明配置安装的单独采购组件。称量实际交付质量或使用经核验批次数量质量记录。记录一种导轨设计、长度、表面状态及质量；导轨与单独供货滑块分开。

- 选定流： 成品钢制直线导轨
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： haas-base-assembly-2013

###### 成品循环滚珠直线导轨滑块 (`guide_carriage`)

仅用于一种声明配置安装的单独采购组件。称量实际交付质量或使用经核验批次数量质量记录。记录一种兼容滑块设计、预紧及润滑状态，不重复内部滚珠。

- 选定流： 成品循环滚珠直线导轨滑块
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： haas-base-assembly-2013

###### 成品交流进给轴伺服电动机 (`axis_servo`)

仅用于一种声明配置安装的单独采购组件。称量实际交付质量或使用经核验批次数量质量记录。记录供电、额定输出、编码器、制动及供货驱动器排除。不假定中国供货混合候选适用于未指定场址。

- 选定流： 成品交流进给轴伺服电动机
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品机加工铸铁工作台 (`worktable`)

仅用于一种声明配置安装的单独采购组件。称量实际交付质量或使用经核验批次数量质量记录。仅在供应商声明本材料及成品状态时纳入；记录安装、回转轴包含及实测质量。钢坯原料不是工作台。

- 选定流： 成品机加工铸铁工作台
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品自动换刀及刀库总成 (`tool_changer`)

仅用于一种声明配置安装的单独采购组件。称量实际交付质量或使用经核验批次数量质量记录。记录一种供货集成换刀刀库总成、刀位容量、执行方式及电动机包含。其安装支持类别边界；不设通用容量或气动路线。

- 选定流： 成品自动换刀及刀库总成
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： dmg-machining-centre-whitepaper

###### 成品已接线 CNC 控制柜 (`cnc_cabinet`)

仅用于一种声明配置安装的单独采购组件。称量实际交付质量或使用经核验批次数量质量记录。记录一种供货总成包含的柜体、CNC 控制器、驱动器、电力电子及布线；避免重复汇总操控件或已含驱动器。

- 选定流： 成品已接线 CNC 控制柜
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品钢制加工中心冷却液箱 (`coolant_tank`)

仅用于一种声明配置安装的单独采购组件。称量实际交付质量或使用经核验批次数量质量记录。记录钢材牌号、表面状态、作为配置限定的容积、接头及供货泵排除；容积不是质量换算因子。

- 选定流： 成品钢制加工中心冷却液箱
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品聚碳酸酯机床防护窗 (`guard_window`)

仅用于一种声明配置安装的单独采购组件。称量实际交付质量或使用经核验批次数量质量记录。仅用于实际供应商声明聚碳酸酯设计；保留厚度、涂层、安装及质量。其他窗材料须另列。

- 选定流： 成品聚碳酸酯机床防护窗
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品钢制六角头螺栓 (`hex_bolt`)

仅用于一种声明配置安装的单独采购组件。称量实际交付质量或使用经核验批次数量质量记录。称量一种指定螺栓牌号、尺寸及涂层；单独供货螺母和垫圈须另列。Haas 示范独立紧固件，不支持全类别数量。

- 选定流： 成品钢制六角头螺栓
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： haas-base-assembly-2013

###### 成品离心冷却液泵 (`coolant_pump`)

仅用于声明内部冷却回路安装的一种单独采购离心液体泵。记录电动机包含、接液材料、运行规格及实测完整质量；不再单计供货电动机。

- 选定流： 泵 `bbd91be4-dc00-44c2-8bc1-f67ee79174a7`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品滚珠轴承 (`ball_bearing`)

仅用于一种单独供货指定滚珠轴承设计。称量净安装质量，排除外购主轴、电动机、丝杠支承或泵已含轴承。

- 选定流： 滚珠轴承或滚柱轴承 `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品矿物油导轨润滑油 (`guideway_oil`)

仅在实际机器使用本声明配方油时纳入。记录等级、添加剂及安装工厂加注质量；润滑脂及液压油须另列。声明 M 中余留加注，排除后续客户更换。

- 选定流： 成品矿物油导轨润滑油
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

### 过程： 工厂检查及验收 (`factory_test`)

#### 输入

##### 产品流

###### 低压电网电力 (`electricity_factory_test`)

计量实际阶段并包含应归属返工。本身份为低于 1 kV 用户端电网平均交流电；其他电压或来源路线须另列相符交换。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_energy`
- 来源：

###### 成品实心硬质合金立铣刀 (`carbide_tool_factory_test`)

仅用于本阶段实际使用一种供应商声明 WC-Co 立铣刀设计。根据有记录刀具使用寿命及因果切削工作量，将实测更换或消耗质量归属所服务工单。它是工厂耗材，不计整机 M；不设通用磨耗因子或每台全刀具计入。

- 选定流： 成品实心硬质合金立铣刀
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_tool。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_tool`
- 来源：

###### 水混合型矿物油金属加工液浓缩液 (`coolant_concentrate_factory_test`)

仅在实际湿式加工配方采购本指定矿物油浓缩液时纳入。保留安全数据表、配方、浓度、净浓缩液质量及添加水；采购预混乳化液不能再计浓缩液加水。不设通用稀释比例。

- 选定流： 水混合型矿物油金属加工液浓缩液
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

###### 外供饮用水等级自来水 (`tap_water_factory_test`)

仅用于工厂实际冷却液稀释或试验的外供饮用水等级水。称量 kg 或保留体积换算密度及温度；排除外购预混液已含水及后续客户作业用水。

- 选定流： 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

###### 成品低碳钢试切试块 (`proof_cut_block`)

仅在实际验收计划对本指定牌号预备试块进行切削试验时纳入。记录领用质量、回用工装或原料、加工几何及退回；不假定每台必须试切。不计安装整机质量。

- 选定流： 成品低碳钢试切试块
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

#### 输出

##### 产品流

###### 验收完整配置 CNC 金属加工中心 (`finished_machine`)

配置专属尺寸、几何、安全及功能验收后的参考产出。净安装质量仅包含声明交付机器及余留加注；排除包装、工件、散装切削刀具、工装及独立备件。

- 选定流： 验收完整配置 CNC 金属加工中心
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 1 千克
- 数值来源模式： fixed_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_mass`
- 来源：

##### 废物流

###### 废矿物油水基加工乳化液 (`spent_emulsion_factory_test`)

仅用于本阶段实际外运处理的废乳化液。称量溶液质量并记录组成、油比例、污染、回收及接收边界；它不是排水环境基本流。内部循环不是新增外运。

- 选定流： 废切削液 `62b6a738-fb6a-4570-a95a-9255ec0dcb2b`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_waste`
- 来源：

###### 未处理洁净低碳钢试块余料 (`test_steel_residue`)

仅用于试切后实际外运洁净钢余料，排除保留或回用试块。称量一种声明牌号且无油污染物流并保留未处理接收路线。

- 选定流： 工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_waste`
- 来源：

###### 废矿物油导轨润滑油 (`spent_guideway_oil`)

仅用于工厂试验实际排空且外运处理的油。记录组成、质量、排空与余留加注平衡及接收边界；不假定必需排空，不计后续使用期换油。

- 选定流： 废油 `2a68e97a-21fe-43f7-a86e-3e39b653e10a`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_waste`
- 来源：

### 过程： 发运保护 (`packout`)

#### 输入

##### 产品流

###### C 型瓦楞纸板 (`cardboard`)

仅用于实际含再生纤维且纤维含量至少80% 的 C 型瓦楞发运保护材料。称量净领用，包装不计 M；其他规格须另列。

- 选定流： 瓦楞纸板 `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

###### LDPE 保护薄膜 (`ldpe_film`)

仅用于实际非泡沫、非自粘、未增强 LDPE 薄膜。保留净质量及等级；不推断化石来源或再生比例。包装不计 M。

- 选定流： 低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

## 7. 分配与联产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_direct` | shared_operations | 先按实际工单、阶段及配置分拆。直接归属可追溯组件或原料领用、加工、返工及验收。三轴及五轴配置不能共享假定每台数量。 |  |
| `allocation_physical` | shared_energy_tools_support | 由实测记录采集因果物理驱动量：实际功率曲线及加工/装配/试验机时、刀具服务切削工作量、固化批次装载或冷却液换液使用。将归属量与实测共享总量及验收配置数量核对。无依据驱动量保留未解决及敏感性；不采用通用质量拆分、按台均分或经济百分比。 |  |
| `allocation_rejects` | waste_and_rework | 在同一配置及期间每验收产出数量中包含应归属不合格件、失败试验及返工。扣除内部退料及回收。明确外运废料及接收处理，不自动抵扣避免原生金属。真实联产品须记录市场及边界决策，不能仅因废料存在认定。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | factory_test | finished_machine | 校准称重及验收 | 型号；配置；序列号；验收净质量 M；安装选项；油液/排空状态；排除备件/包装 | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 每台或有依据配置专属样本 | 同一声明生产期间；披露缺口 | 声明制造场址 | 每台验收净质量 | 校准；安装物料清单；油液状态；验收；采样 |
| cp_configuration | all processes | actual route | 物料清单及路线核查 | 型号；轴系；主轴；换刀刀库；物料清单修订；供货完整性；自制外购；工单；返工；验收数；边界 | 将每个实际项及工序对应一行或有依据排除。核对安装选项、毛坯或成品底座替代、包含电动机及驱动器和工厂油液状态。记录型号专属几何及功能验收公差及结果，不假定通用精度。 | record | 每次配置变化及批次 | 同一声明生产期间；披露缺口 | 声明制造场址 | 一份一致配置路线记录 | 物料清单；供应商；路线；验收；外包边界 |
| cp_material | fabrication; finishing; assembly; factory_test; packout | individual stock/formulation | 库存领用及称重 | 单一产品；牌号及状态；配方；领用及退回；库存及在制品；体积/密度/温度；验收数 | 称量净应归属领用，核对退回、在制品及回收。保留供货毛坯处理及冷却液或油配方。浓缩液及稀释水分开；预混液不重复计入。体积换算须有实际依据密度及温度。 | kg | 每次领用及批次平衡 | 同一声明生产期间；披露缺口 | 声明制造场址 | 应归属物料净质量 / 同一配置的验收机器数量 | 秤；台账；安全数据表；配方；供货声明；密度 |
| cp_parts | assembly | single finished component | 收货称重及装配清单 | 组件编号；一种设计；供应商；数量；质量；包含子件；安装状态；验收数 | 使用实际交付质量或经核验批次专属数量质量记录。识别完整主轴、换刀机构、控制柜、泵、导轨及轴系接口、已含电动机及轴承和安装选项；防止重复原料或已含内部件。不采用功率/行程/容量质量因子。 | kg | 每个供货及装配批次 | 同一声明生产期间；披露缺口 | 声明制造场址 | 应归属安装组件质量 / 同一配置的验收机器数量 | 秤；供货包含；安装物料清单；核验批次质量 |
| cp_tool | fabrication; factory_test | single carbide end mill | 刀具更换及服务工单台账 | 一种 WC-Co 设计；实测更换及消耗质量；回用；服务工单；因果切削工作量；验收数 | 跟踪服务工单实际刀具消耗，按有依据因果切削工作量分配实测质量。核对回用刀具库存、更换外运刀具及磨耗；不假定磨耗因子或每台新整刀。 | kg | 每次更换及服务批次 | 同一声明生产期间；披露缺口 | 声明制造场址 | 应归属刀具消耗质量 / 同一配置的验收机器数量 | 刀具秤；更换；服务工单；驱动量核对 |
| cp_energy | fabrication; finishing; assembly; factory_test | electricity | 表计及因果驱动台账 | 阶段；电压及来源；表计 kWh；时段；共享总量；驱动量；待机及返工；验收数 | 计量各实际阶段；按 1 kWh = 3.6 MJ 将 kWh 转 MJ。保留实测分配驱动总量并核对共享表计、待机、不合格作业及复试。工厂试验工况不是客户使用工况。 | MJ | 每个表计时段及批次 | 同一声明生产期间；披露缺口 | 声明制造场址 | 应归属电能 / 同一配置的验收机器数量 | 校准；账单；阶段及驱动记录 |
| cp_waste | fabrication; finishing; factory_test | single exported waste | 容器及地磅平衡 | 单一废物；组成；干湿；污染；质量；回收；接收方；验收数 | 称量分类外运并核对内部回收及库存。分开灰铸铁切屑、收集粉尘、洁净钢边角料、废乳化液、废油及废砂盘。保留接收及处理依据；仅体积废物记录须有依据质量换算。 | kg | 每次外运及批次平衡 | 同一声明生产期间；披露缺口 | 声明制造场址 | 应归属外运废物质量 / 同一配置的验收机器数量 | 秤；组成；接收凭证；处理边界 |
| cp_emission | fabrication | single air substance | 治理后出口监测 | 物质；组成；浓度及单位；排气体积；时段；干湿温压；治理；粒径；介质及子介质；验收数 | 由同一时段治理后浓度及排气体积计算一种物质质量，保留换算及采样基准。区分矿物油及水气溶胶、粒径、收集固体及实际空气子介质；不假定必然排放或将缺失监测当零。 | kg | 代表性实际排放时段 | 同一声明生产期间；披露缺口 | 声明制造场址 | 应归属实测物质质量 / 同一配置的验收机器数量 | 监测；校准；采样；物质区分及换算 |
| cp_water_resource | fabrication | groundwater abstraction | 井表计及现场记录 | 水井；淡水来源；国家及地区；m3；时段；阶段用途；回用；验收数 | 读取校准井体积表计记录工厂实际淡水地下水取用。核对阶段取水，不将循环水当新增取水；保留地区并另计泵送及处理。 | m3 | 每个时段及批次 | 同一声明生产期间；披露缺口 | 声明制造场址 | 应归属取水体积 / 同一配置的验收机器数量 | 表计；水井及来源；地区；阶段水平衡 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品机器的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `quality_configuration` | all inventory rows | M、原料及组件数量、能耗及验收数使用一种配置和期间。核对供货包含、安装选项、毛坯及外购结构、内部在制品、试验原料、加注及排空、废物、不合格品及退回。保留仪器不确定性及有依据质量采样代表性。 | cp_mass; cp_configuration; cp_material; cp_parts; cp_waste |
| `quality_coverage` | inventory_and_links | 披露缺失 UUID、物料清单项、前景测量、因果分配及上游/运输/处理链接。以路线理由记录不适用工序；缺失数据不是零。不采用通用制造量、整机质量、寿命、冷却液比例、切屑产率或排放因子。 | cp_configuration; cp_energy; cp_tool; cp_emission; cp_water_resource |
| `quality_sources` | design_evidence | DMG MORI 定义类别，不提供工厂制造量。URL 文件名含2024，而核验 PDF 元数据显示2023创建；未确认印刷版次。Haas 2013年11月第1张仅为历史底座装配实例，不证明当前物料清单、合金及处理、通用硬件数量或生产量。核验实际供货及工厂记录。 | dmg-machining-centre-whitepaper; haas-base-assembly-2013 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference` | reference_flow | 要求正值实测 M、一种声明验收配置、余留加注及安装选项边界和 1kg finished_machine。每个其他行明确使用 normalize_mass 及其 kg、MJ 或 m3 分子。 |  |
| `validation_bom` | inventory | 核对实际完整底座及立柱、主轴、轴系、导轨及工作台、换刀刀库、CNC 及驱动、防护联锁及油液系统。核验自制外购、已含子件、实际验收、刀具归属、不合格及返工和接收边界。初始卡片不完整或缺链接须披露并展开，不能声明完整。 |  |
| `validation_identity` | all inventory rows | 核查公开流类型、牌号及状态浓度、地区路线、环境介质及子介质、实际参考属性及单位组和官方本地化。区分收集废油及基本流油雾、自来水及淡水取水、铝含量及废物总质量。 |  |
| `validation_claims` | dataset_claims | 未建立供应商/运输/处理及实际路线覆盖前，不声明完整摇篮到工厂门。制造质量不能证明机加工服务等效、客户零件产率、寿命、法律符合性或科学方法学批准。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 配置前景金属加工中心制造模块；本画像标题不代表 PCR 已发表 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 相同完整声明配置制造，按实测 M 放大并单独披露供应商、运输及处理链接 |
| excluded_use | 客户机加工服务及零件产率、使用期能耗及冷却液、维护、寿命、传送线制造、独立交付备件套装或方法学批准 |
| required_metadata | 全部参考限定；配置及物料清单；轴系/主轴/换刀/操控；安装选项；采购总成完整性；油液/包装/备件边界；实测 M；场址/期间/边界；验收；测量及分配；供应商及接收链接 |
| required_quality_disclosure | 采样及测量不确定性；实际物料清单及路线覆盖；未解决身份、分配及上游；监测缺口；历史来源限制；不合格品及返工包含 |
| update_trigger | 轴系/主轴/换刀/操控、供货完整性、自制外购、合金及处理、选项、油液状态、验收计划、场址/期间/路线、能源来源或分配变化 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| dmg-machining-centre-whitepaper | handbook | DMG MORI, WHITEPAPER: 5-AXIS MACHINING CENTERS: FASTER, HIGHER QUALITY AND LOWER COST MACHINING, physical PDF p.5, printed pp.8–9; edition not verified. https://us.dmgmori.com/resource/blob/817950/facbcc1fbf9e40b2e2a47fc21b0583f0/dmg-mori-whitepaper-5-axis-machining-centers-2024-en-data.pdf | 类别区别：至少三数控轴、自动换刀及刀库；立式及卧式实例。不采用作业节约、通用工厂数量、整机质量或寿命。 |
| haas-base-assembly-2013 | handbook | Haas Automation, VF-1YT/VF-2YT/VF-2SSYT/VM-2 BASE ASSEMBLY, EFFECTIVE NOV-2013, physical PDF p.1, SHEET1OF2 (historical). https://www.haascnc.com/content/dam/haascnc/en/service/diagrams/exploded-view-diagrams/vf-1yt---vf-2yt---vf-2ssyt---vm-2-base-assembly.pdf | 历史独立底座、滚珠丝杠、导轨及润滑/紧固件装配示例。不是当前生产、材料牌号及处理证明、通用物料清单及数量或制造量。 |
