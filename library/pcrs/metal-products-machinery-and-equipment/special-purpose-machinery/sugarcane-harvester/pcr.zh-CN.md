---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.sugarcane-harvester
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 配置履带式甘蔗切段收获机制造

## 1. 范围与适用性

此较窄制造PCR覆盖新完整配置履带非道路柴油甘蔗切段收获机。代表收获通道包括分禾切底喂入切段主除杂升运卸料；声明实际切梢等可选设备。此为完整部件集成至配置工厂验收。此前底盘切割焊接涂覆发动机生产液压模块收获模块制造即使同厂执行也须匹配上游过程。此前景不是完整摇篮到大门覆盖。

排除谷物联合脱粒机块根块茎收获机械牧草机械独立拖拉机单独部件，以及无支持路线扩展的整秆轮式变型；排除田间收获种植作物产量使用燃料修理报废服务。制造商结构描述支持不同模块替代设计，不规定此工厂清单通用工厂作业质量寿命产率验收阈值。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.sugarcane-harvester |
| classification_refs | CPC 3.0:44129; narrower |
| covered_products | 新完整配置履带非道路柴油甘蔗切段收获机 |
| excluded_products | 谷物脱粒机块根块茎收获机拖拉机牧草设备独立部件收获服务；无支持轮式整秆路线 |
| representative_product | 完整工厂验收入口配置履带柴油切段收获机 |
| production_route | 成品底盘行走发动机液压收获驾驶室电气部件收货；集成；实际加注调试；净质量验收；可选清洗发运 |
| market_state | 新验收配置完整整机，声明余留加注独立交付附件 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 一种验收配置完整甘蔗切段收获机制造 |
| How much | 1 kg |
| How well | 当前配置特异工厂机械液压电气符合及签认实际验收；无田间生产率等同 |
| How long or cycle | 一个制造期间，无假设作物循环使用寿命 |
| reference_flow_link | finished_harvester |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 验收完整履带柴油甘蔗切段收获机 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号序号配置；履带非道路柴油推进；发动机型号排放供货已含；分禾切底切段除杂升运几何刀驱动范围；切梢驾驶室暖通制冷剂控制已装电池；全部永久部件实际余留燃料机油冷却液；实际完整净M kg称重记录；工厂验收计划结果；工厂期间供货；上游入口散装附件包装排除 |

数据包随附全部必需限定信息。M为同一验收配置实测物理净质量，不用目录作业总重量作物载荷或虚构部件重量求和。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `engine_count` | diesel_engine | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 保留每验收设备实际计数供货已装发动机q_item。发动机kg独立实测用于已含核对，不是改名公开属性。采用normalize_mass得到每kg完整参考的Item(s)。 |
| `hydraulic_volume` | hydraulic_oil | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 按声明温度表计每验收设备实际净供货体积q_item m3；用实际匹配密度或独立称重核对M内余留油kg，不用默认密度。采用normalize_mass。 |
| `electric_energy` | electricity rows | Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 实际表计kWh按3.6 MJ/kWh转换MJ后设备采集normalize_mass；额定发动机泵功率不是制造能耗。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际集成供货入口成品供货底盘及独立配置部件 |
| starting_condition_role | upstream_abstraction |
| product_classification_scope | CPC 3.0:44129; narrower |
| recursive_input_rule | 完整同类收获机不是自身装配投入。内部返工退回部件留内部；采用实际组成部件链接此前同场址制造，不重复最终质量。 |
| upstream_dataset_requirement | 匹配实际钢底盘表面履带模块非道路发动机液压收获驾驶室电气供货已含及液体配方供货地区年。此前本地制造涂覆供货运输须独立链接负担。 |
| disclosure | 仅最终集成前景；披露全部未链接此前阶段缺少实际清单公用项额外工厂试验路线厂外接收过程。无完整摇篮到大门或上游外包假设。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_operations` | all_processes | 纳入实际收货分阶段底盘动力收获驾驶室控制集成加注检漏实际工厂调试最终完整验收，含归属设置待机拒收返工。可选水洗溶剂清洗装箱须实际作业依据。引用来源结构支持模块区别，不规定必需制造配方。 | deere-cane-architecture; case-austoft-architecture |
| `boundary_exclusions` | use and earlier manufacture | 此前部件生产链接上游；实际田间收获作物产量农场柴油种植运输服务使用报废在此制造参考之外。工厂调试仅在放行前实际执行时是制造作业；任何实际试验甘蔗及残余须在完整覆盖前有自身实测作物废物交换。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `running` | 底盘收货与履带行走机构集成 | required | 声明配置实际执行阶段；可选消耗须正作业记录 | foreground | 1 kg finished_harvester |
| `power` | 非道路发动机与液压动力集成 | required | 声明配置实际执行阶段；可选消耗须正作业记录 | foreground | 1 kg finished_harvester |
| `crop` | 收获通道驾驶室电气集成 | required | 声明配置实际执行阶段；可选消耗须正作业记录 | foreground | 1 kg finished_harvester |
| `filling` | 实际工厂液体加注检漏 | required | 声明配置实际执行阶段；可选消耗须正作业记录 | foreground | 1 kg finished_harvester |
| `testing` | 受控工厂调试 | required | 声明配置实际执行阶段；可选消耗须正作业记录 | foreground | 1 kg finished_harvester |
| `acceptance` | 配置净质量最终放行 | required | 声明配置实际执行阶段；可选消耗须正作业记录 | foreground | 1 kg finished_harvester |
| `cleaning` | 可选最终水或IPA清洗 | conditional | 声明配置实际执行阶段；可选消耗须正作业记录 | foreground | 1 kg finished_harvester |
| `dispatch` | 可选发运装箱 | conditional | 声明配置实际执行阶段；可选消耗须正作业记录 | foreground | 1 kg finished_harvester |

### 过程：底盘收货与履带行走机构集成（`running`）

#### 输入

##### 产品流

###### 成品钢制甘蔗收获机主底盘（`chassis`）

实际声明钢制主底盘，记录当前焊接或螺栓连接部段几何及供货表面状态。此前制造涂覆为上游入口；供货底盘排除另列发动机履带收获模块。 追溯当前完整清单供货已含净领用退回记录。独立测此物理总成；缺少额外实际部件须在完整整厂声明前展开。

- 选定流： 成品钢制甘蔗收获机主底盘
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_parts`
- 来源：

###### 成品钢制履带板链（`crawler_track`）

仅履带代表路线：一种实际板链规格及实测安装质量，记录左右方向数量。不含另供底盘驱动或框架；轮式结构须独立支持清单。 追溯当前完整清单供货已含净领用退回记录。独立测此物理总成；缺少额外实际部件须在完整整厂声明前展开。

- 选定流： 成品钢制履带板链
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_parts`
- 来源：

###### 成品钢制履带底架（`track_frame`）

一种实际供货履带底架，声明滚轮导轮已含范围。排除履带链另供终传动，供货清单防止重复部件质量。 追溯当前完整清单供货已含净领用退回记录。独立测此物理总成；缺少额外实际部件须在完整整厂声明前展开。

- 选定流： 成品钢制履带底架
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_parts`
- 来源：

###### 成品静液压收获机终传动齿轮箱（`final_drive`）

实际型号传动比壳体范围；测供货齿轮箱kg及预充润滑范围。仅在供货总成之外时液压牵引马达独立。 追溯当前完整清单供货已含净领用退回记录。独立测此物理总成；缺少额外实际部件须在完整整厂声明前展开。

- 选定流： 成品静液压收获机终传动齿轮箱
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_parts`
- 来源：

###### 用户端低压交流制造电力（`electricity_running`）

校准用户侧表计测实际阶段设备吊装控制计量待机返工电力。保留实际供电地区电压因果共享负荷；不向未指定工厂赋高压发电中国特定身份。额外热压缩空气服务须独立卡。

- 选定流： 用户端低压交流制造电力
- 流属性/单位： Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_energy`
- 来源：

### 过程：非道路发动机与液压动力集成（`power`）

#### 输入

##### 产品流

###### 成品液压柱塞泵（`piston_pump`）

一种实际泵型号排量供货质量。记录实际回路驱动接口，不将制造商额定功率复制为能耗。同规格泵可求和并保留件数。 追溯当前完整清单供货已含净领用退回记录。独立测此物理总成；缺少额外实际部件须在完整整厂声明前展开。

- 选定流： 泵 `bbd91be4-dc00-44c2-8bc1-f67ee79174a7`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_parts`
- 来源：

###### 成品液压柱塞马达（`piston_motor`）

一种实际柱塞马达规格跨供货入口；仅购完整收获牵引模块之外马达。不同排量型号类别须在数据集完成前独立卡。 追溯当前完整清单供货已含净领用退回记录。独立测此物理总成；缺少额外实际部件须在完整整厂声明前展开。

- 选定流： 成品液压柱塞马达
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_parts`
- 来源：

###### 成品双作用液压提升缸（`hydraulic_cylinder`）

实际缸径行程型号及供货液体安装范围；保留实测质量件数。提升缸不是气动执行器。 追溯当前完整清单供货已含净领用退回记录。独立测此物理总成；缺少额外实际部件须在完整整厂声明前展开。

- 选定流： 线性作用（气缸）水力发动机和风力发动机及马达 `aea61250-788d-4a2b-9c63-ff24b8113469`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_parts`
- 来源：

###### 成品增强橡胶液压软管总成（`hydraulic_hose`）

一种实际增强橡胶压力软管规格含端接头，测供货干kg。不同软管化学尺寸须独立实际记录；完整模块已含软管排除。 追溯当前完整清单供货已含净领用退回记录。独立测此物理总成；缺少额外实际部件须在完整整厂声明前展开。

- 选定流： 成品增强橡胶液压软管总成
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_parts`
- 来源：

###### 成品钢制液压储油箱（`hydraulic_tank`）

声明成品钢油箱几何接头空供货kg；标称干箱内不可重复计油加注。 追溯当前完整清单供货已含净领用退回记录。独立测此物理总成；缺少额外实际部件须在完整整厂声明前展开。

- 选定流： 成品钢制液压储油箱
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_parts`
- 来源：

###### 成品发动机冷却液散热器总成（`radiator`）

实际散热器型号材料芯体风扇已含及空或预充供货状态；总成kg独立于后续冷却液加注。 追溯当前完整清单供货已含净领用退回记录。独立测此物理总成；缺少额外实际部件须在完整整厂声明前展开。

- 选定流： 成品发动机冷却液散热器总成
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_parts`
- 来源：

###### 成品非道路柴油排气后处理模块（`exhaust_module`）

仅此实际发动机排放配置有该系统时，纳入一种指定模块含催化剂滤器。不存在须配置依据；不推定全部收获机SCR试剂消耗或必需DPF。 追溯当前完整清单供货已含净领用退回记录。独立测此物理总成；缺少额外实际部件须在完整整厂声明前展开。

- 选定流： 成品非道路柴油排气后处理模块
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_parts`
- 来源：

###### 成品富液铅酸收获机启动蓄电池（`starter_battery`）

一种实际电压容量型号供货启动电池已含铅电解液，测供货kg荷电。不再次添加铅硫酸。 追溯当前完整清单供货已含净领用退回记录。独立测此物理总成；缺少额外实际部件须在完整整厂声明前展开。

- 选定流： 成品富液铅酸收获机启动蓄电池
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_parts`
- 来源：

###### 供货装配非道路压燃柴油发动机（`diesel_engine`）

一种实际装配压燃活塞发动机供非道路农业机械，排除道路机动车航空器推进。保留公开物品数量：q_item为每验收整机实际已装供货发动机件数，单位Item(s)，不是kg。独立称量每供货发动机及序号配置预充机油冷却液范围，核对发动机kg至完整M，不重复计这些液体。须匹配实际型号排放动力范围。

- 选定流： 柴油发动机 `d3ac8612-80b9-4283-9439-62aa4986fce2`
- 流属性/单位： Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_engine。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_engine`
- 来源：

###### 用户端低压交流制造电力（`electricity_power`）

校准用户侧表计测实际阶段设备吊装控制计量待机返工电力。保留实际供电地区电压因果共享负荷；不向未指定工厂赋高压发电中国特定身份。额外热压缩空气服务须独立卡。

- 选定流： 用户端低压交流制造电力
- 流属性/单位： Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_energy`
- 来源：

### 过程：收获通道驾驶室电气集成（`crop`）

#### 输入

##### 产品流

###### 成品钢制甘蔗分禾螺旋（`crop_divider`）

一种实际供货钢分禾螺旋，声明左右型号净kg，排除另计液压驱动。不是农业犁割草刀杆。 追溯当前完整清单供货已含净领用退回记录。独立测此物理总成；缺少额外实际部件须在完整整厂声明前展开。

- 选定流： 成品钢制甘蔗分禾螺旋
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_parts`
- 来源：

###### 成品甘蔗梢部切割头（`topper`）

一种实际装配梢部切割头含刀壳，声明驱动已含。无切梢器可选配置须识别，不填假设质量。 追溯当前完整清单供货已含净领用退回记录。独立测此物理总成；缺少额外实际部件须在完整整厂声明前展开。

- 选定流： 成品甘蔗梢部切割头
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_parts`
- 来源：

###### 成品甘蔗切底机械总成（`basecutter`）

实际盘刀齿轮壳总成及供货表面kg；声明液压驱动已含。独立备刀不是已装设备；已装刀不得再计购钢坯料。 追溯当前完整清单供货已含净领用退回记录。独立测此物理总成；缺少额外实际部件须在完整整厂声明前展开。

- 选定流： 成品甘蔗切底机械总成
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_parts`
- 来源：

###### 成品钢制甘蔗喂入辊（`feedroller`）

一种实际辊规格表面状态，测安装供货kg及件数。不同辊类型须数据集各自详细卡。 追溯当前完整清单供货已含净领用退回记录。独立测此物理总成；缺少额外实际部件须在完整整厂声明前展开。

- 选定流： 成品钢制甘蔗喂入辊
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_parts`
- 来源：

###### 成品甘蔗切段机械总成（`chopper`）

实际供货入口完整切段轴刀齿轮轴承总成，排除另计驱动。按清单声明刀配置，不推定蔗段长产量参考功能服务。 追溯当前完整清单供货已含净领用退回记录。独立测此物理总成；缺少额外实际部件须在完整整厂声明前展开。

- 选定流： 成品甘蔗切段机械总成
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_parts`
- 来源：

###### 成品甘蔗主除杂风扇总成（`extractor`）

实际主风扇罩支架总成；记录材料结构马达已含。作物除杂风扇不是工厂污染控制设备。 追溯当前完整清单供货已含净领用退回记录。独立测此物理总成；缺少额外实际部件须在完整整厂声明前展开。

- 选定流： 成品甘蔗主除杂风扇总成
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_parts`
- 来源：

###### 成品钢制甘蔗蔗段升运输送机（`elevator`）

实际框架链刮板输送机及声明回转支承加长范围；另计驱动则排除。若供货完整输送机已含链刮板则不再添加。 追溯当前完整清单供货已含净领用退回记录。独立测此物理总成；缺少额外实际部件须在完整整厂声明前展开。

- 选定流： 成品钢制甘蔗蔗段升运输送机
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_parts`
- 来源：

###### 成品带玻璃甘蔗收获机驾驶室（`operator_cab`）

实际供货玻璃驾驶室及已装座椅控制暖通范围；暖通已含时记录精确制冷剂余留加注。预充部件随驾驶室跨界一次；任何独立工厂补充须独立实际化学卡。 追溯当前完整清单供货已含净领用退回记录。独立测此物理总成；缺少额外实际部件须在完整整厂声明前展开。

- 选定流： 成品带玻璃甘蔗收获机驾驶室
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_parts`
- 来源：

###### 成品绝缘铜收获机线束（`harness`）

一种图样特异完整绝缘铜线束含接头供货kg；排除控制模块散装原铜。 追溯当前完整清单供货已含净领用退回记录。独立测此物理总成；缺少额外实际部件须在完整整厂声明前展开。

- 选定流： 点火接线装置和其他用于车辆、航空器或船只的点火接线装置 `4b3f48dd-97a6-427e-9baf-742d7eb6e9c2`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_parts`
- 来源：

###### 成品甘蔗收获机电子控制单元（`controller`）

一种实际ECU型号硬件固件供货kg，软件调试能耗另测；机床控制柜不建立此身份。 追溯当前完整清单供货已含净领用退回记录。独立测此物理总成；缺少额外实际部件须在完整整厂声明前展开。

- 选定流： 成品甘蔗收获机电子控制单元
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_parts`
- 来源：

###### 成品钢制装配螺栓（`steel_bolt`）

一种实际钢螺栓等级螺纹涂覆跨装配供货入口，测净kg件数。仅购总成未含散装螺栓；其他紧固件类型须独立具体卡。

- 选定流： 钢紧固件 `cad280ce-7850-46a1-9060-4f8b68bf5532`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_parts`
- 来源：

###### 用户端低压交流制造电力（`electricity_crop`）

校准用户侧表计测实际阶段设备吊装控制计量待机返工电力。保留实际供电地区电压因果共享负荷；不向未指定工厂赋高压发电中国特定身份。额外热压缩空气服务须独立卡。

- 选定流： 用户端低压交流制造电力
- 流属性/单位： Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_energy`
- 来源：

#### 输出

##### 废物流

###### 收集拒收钢制切底刀片（`reject_part`）

仅装配调试实际不可修弃置钢刀；记等级涂覆接收方。可修返供方不自动是废物。

- 选定流： 收集拒收钢制切底刀片
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_waste`
- 来源：

### 过程：实际工厂液体加注检漏（`filling`）

#### 输入

##### 产品流

###### 供货配方矿物液压油（`hydraulic_oil`）

一种实际矿物基础液压油等级SDS跨供货入口，保留公开体积m3参考。按记录温度表计外部净领用减实际退回；记录新补充内部循环区别，按相同温度实际密度另测余留kg。预充模块油已在供货模块内，不是新加注。无假设油容量密度。

- 选定流： 液压油 `30691a38-a947-4b41-991e-194f6c9aa88f`
- 流属性/单位： Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_hydraulic。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_hydraulic`
- 来源：

###### 供货预混乙二醇水基防冻液（`engine_coolant`）

仅一种实际供货预混乙二醇水防冻液，记录当前添加剂SDS浓度净kg供货已含。不由一般公开身份推定丙二醇甘油选择或固定稀释。本地稀释须实际浓缩液供水独立卡，不同时计组分预混液。

- 选定流： 防冻液 `f4d2de8d-01df-42a2-aa65-7f7215606250`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_stock`
- 来源：

###### 供货配方矿物柴油机润滑油（`engine_oil`）

仅在此厂于发动机供货范围外加注实际一种制造商批准配方时记外部净领用kg；记SDS等级余留退回排放。发动机预充不是第二工厂投入。

- 选定流： 供货配方矿物柴油机润滑油
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_stock`
- 来源：

###### 用户端低压交流制造电力（`electricity_filling`）

校准用户侧表计测实际阶段设备吊装控制计量待机返工电力。保留实际供电地区电压因果共享负荷；不向未指定工厂赋高压发电中国特定身份。额外热压缩空气服务须独立卡。

- 选定流： 用户端低压交流制造电力
- 流属性/单位： Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_energy`
- 来源：

### 过程：受控工厂调试（`testing`）

#### 输入

##### 产品流

###### 供货化石柴油调试燃料（`test_diesel`）

仅声明化石柴油路线实际工厂发动机调试，按证实化石生物份额等级供货测净领用kg。核对消耗退回回收余留交付燃料；余留燃料纳M一次。不用田间柴油额定消耗目录油箱体积作数量。实际生物混配须独立归属化石生物物质，不用此纯化石声明。

- 选定流： 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_stock`
- 来源：

###### 用户端低压交流制造电力（`electricity_testing`）

校准用户侧表计测实际阶段设备吊装控制计量待机返工电力。保留实际供电地区电压因果共享负荷；不向未指定工厂赋高压发电中国特定身份。额外热压缩空气服务须独立卡。

- 选定流： 用户端低压交流制造电力
- 流属性/单位： Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_energy`
- 来源：

#### 输出

##### 废物流

###### 收集已用矿物液压油（`spent_oil`）

实际排外运净kg含量厂外接收；可再用退油内部循环不是外运废物。另核对其他弃置部件夹带油。

- 选定流： 收集已用矿物液压油
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_waste`
- 来源：

###### 收集已用水基乙二醇发动机冷却液（`spent_coolant`）

仅实际外运已测试乙二醇水冷却液湿kg浓度接收方。CNC矿物切削乳化液不是此已用发动机冷却液。

- 选定流： 收集已用水基乙二醇发动机冷却液
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_waste`
- 来源：

##### 基本流

###### 向未指定室外空气即时释放化石二氧化碳（`co2_fossil`）

仅实际观察工厂试验出口向即时室外空气释放CAS124-38-9时纳入，采集实际控制后物质特异质量kg排气通风捕集范围。无必然排放数量或车队因子。化石CO2须实际化石碳归属；NO、NO2、N2O不同，总NOx不自动是任何一种物质。田间使用排除。

- 选定流： 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_exhaust。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_exhaust`
- 来源：

###### 向未指定室外空气即时释放一氧化氮（`nitric_oxide`）

仅实际观察工厂试验出口向即时室外空气释放CAS10102-43-9时纳入，采集实际控制后物质特异质量kg排气通风捕集范围。无必然排放数量或车队因子。化石CO2须实际化石碳归属；NO、NO2、N2O不同，总NOx不自动是任何一种物质。田间使用排除。

- 选定流： 一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_exhaust。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_exhaust`
- 来源：

###### 向未指定室外空气即时释放二氧化氮（`nitrogen_dioxide`）

仅实际观察工厂试验出口向即时室外空气释放CAS10102-44-0时纳入，采集实际控制后物质特异质量kg排气通风捕集范围。无必然排放数量或车队因子。化石CO2须实际化石碳归属；NO、NO2、N2O不同，总NOx不自动是任何一种物质。田间使用排除。

- 选定流： 二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_exhaust。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_exhaust`
- 来源：

### 过程：配置净质量最终放行（`acceptance`）

#### 输入

##### 产品流

###### 用户端低压交流制造电力（`electricity_acceptance`）

校准用户侧表计测实际阶段设备吊装控制计量待机返工电力。保留实际供电地区电压因果共享负荷；不向未指定工厂赋高压发电中国特定身份。额外热压缩空气服务须独立卡。

- 选定流： 用户端低压交流制造电力
- 流属性/单位： Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_energy`
- 来源：

#### 输出

##### 产品流

###### 验收完整履带柴油甘蔗切段收获机（`finished_harvester`）

一种实际验收完整配置履带非道路柴油整机，声明收获通道操作站永久设备余留加注。M仅含供货已装部件余留液一次；排除作物操作员载荷临时试验工装备模块运输包装。实际完整配置签认验收决定完整性，不用目录作业重量。

- 选定流： 验收完整履带柴油甘蔗切段收获机
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 1 千克
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_mass`
- 来源：

### 过程：可选最终水或IPA清洗（`cleaning`）

#### 输入

##### 产品流

###### 供货工业最终清洗水（`industrial_water`）

验收前实际水洗漂洗时可选纳入；供货kg及供货质量库存平衡，不是天然淡水开采。内部循环不是新投入。当前实际添加洗涤剂须自身具名化学卡。

- 选定流： 工业用水 `81960a30-5488-4358-a28a-a0ee1f43f0f2`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_stock`
- 来源：

###### 供货液态异丙醇清洗配方（`ipa_cleaner`）

仅实际批准CAS67-63-0最终清洗；记精确含量水浓度领用回收废物余留kg。不规定通用溶剂清洗。

- 选定流： 供货液态异丙醇清洗配方
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_stock`
- 来源：

###### 用户端低压交流制造电力（`electricity_cleaning`）

校准用户侧表计测实际阶段设备吊装控制计量待机返工电力。保留实际供电地区电压因果共享负荷；不向未指定工厂赋高压发电中国特定身份。额外热压缩空气服务须独立卡。

- 选定流： 用户端低压交流制造电力
- 流属性/单位： Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_energy`
- 来源：

#### 输出

##### 废物流

###### 收集已用无添加整机漂洗水（`wash_effluent`）

仅实际无添加漂洗路线，测湿kg实际油固污染处理接收方。加化学时另记组成；收集技术圈废水不是直接河流排放。

- 选定流： 收集已用无添加整机漂洗水
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_waste`
- 来源：

###### 收集已用水基异丙醇清洗液（`spent_ipa`）

实际独立收集已用IPA水配方湿kg浓度接收方；回收再用溶剂空气排放独立。

- 选定流： 收集已用水基异丙醇清洗液
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_waste`
- 来源：

##### 基本流

###### 向未指定室外空气即时释放异丙醇（`ipa_air`）

仅实际批准IPA清洗及控制后实测残余CAS67-63-0室外释放；无全蒸发假设。室内长期土壤水释放不在此身份内。

- 选定流： 异丙醇 `fe0acd60-3ddc-11dd-a843-0050c2490048`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_solvent。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_solvent`
- 来源：

### 过程：可选发运装箱（`dispatch`）

#### 输入

##### 产品流

###### 成品实木整机发运箱（`transport_crate`）

实际一种实木箱规格时可选纳入，空净kg排除M。识别处理几何实际再用；防护膜带架独立，不用包装集合。超大运输无箱须实际不存在依据。

- 选定流： 成品实木整机发运箱
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_stock`
- 来源：

###### 用户端低压交流制造电力（`electricity_dispatch`）

校准用户侧表计测实际阶段设备吊装控制计量待机返工电力。保留实际供电地区电压因果共享负荷；不向未指定工厂赋高压发电中国特定身份。额外热压缩空气服务须独立卡。

- 选定流： 用户端低压交流制造电力
- 流属性/单位： Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_energy`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_direct` | shared operations | 首先按配置细分实际清单工单表计供货记录。共享吊装集成试验负载按观察操作时间实测负载设置待机记录归属；清洗加注服务按实际批配方记录。替代物理经济份额须实际因果证据文件化基准敏感性，无通用质量份额。 |  |
| `allocation_rejects` | returns rework and waste | 消耗拒收返工实际试验资源留期间分子并除同配置验收设备数。返供方可再用排液是库存退回，不自动废物。实际可售废料须合同状态证据文件化共产品处理；同质量不同时获得废料销售益避免生产信用。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | accepted complete machine | 校准完整整机称重 | 型号；配置；序号；验收净质量 M；校准；毛重皮重；余留加注；验收签认 | 使用经校准的秤称量已验收的完整设备，排除运输包装；核对同一配置和验收记录。 | kg | 每验收完整整机 | 实际声明代表生产期间 | 声明工厂归属集成供货入口 | 每台验收净质量 | 原读数校准签认配置平衡 |
| `cp_parts` | all_processes | specific supplied assembly | 供货净质量记录 | 一种件型号图样序号；件数；供货净kg；领用退回库存；供货已含件液体；验收数 | 称量实际净供货已装总成kg，按当前清单核对领用退回库存供货已含边界。即使发动机交换用件数也独立测发动机kg。同规格件可求和，不混不同模块。 | kg | 每收货领用退回期间 | 实际声明代表生产期间 | 声明工厂归属集成供货入口 | 实际归属部件kg / 同一配置的验收设备数量 | 原称重签认清单供货已含库存记录 |
| `cp_engine` | power | supplied non-road engine count | 序号受控发动机领用 | 发动机型号序号排放；供货安装件数Item(s)；实际独立发动机kg；预充机油冷却液；领用退回；验收数 | 按序号供货总成预充边界计实际供货已装同型号发动机件数；可再用退回发动机排除净领用。保留独立校准供货发动机kg核对M，不用件数质量默认因子。 | Item(s) | 每供货发动机期间 | 实际声明代表生产期间 | 声明工厂归属集成供货入口 | 实际归属发动机Item(s) / 同一配置的验收设备数量 | 发动机序号件数原件独立校准称重 |
| `cp_hydraulic` | filling | external hydraulic oil volume | 校准油体积余留记录 | SDS等级；温度；供货退回m3；相同温度实测密度；余留kg；模块预充；验收数 | 校准体积仪按记录温度表计实际净外部供油m3；核对退回内部循环供货预充。余留油kg独立称量或由实际匹配实测体积密度计算，仅作物理已含核对。 | m3 | 每实际加注退回期间 | 实际声明代表生产期间 | 声明工厂归属集成供货入口 | 实际归属油m3 / 同一配置的验收设备数量 | 原校准体积密度称重SDS平衡 |
| `cp_stock` | all_processes | specific fluid or crate | 净领用退回记录 | 具名配方箱；供货SDS含量；净kg；领用退回余留废物；预充；验收数 | 称每实际具名外部产品净kg排容器，核对库存领用退回实际余留供货。实际燃料化石份额冷却液化学须供货依据，不假设密度一般混合物。 | kg | 每领用退回期间 | 实际声明代表生产期间 | 声明工厂归属集成供货入口 | 实际归属投入kg / 同一配置的验收设备数量 | 实际库存校准SDS领用退回平衡 |
| `cp_energy` | all_processes | stage electricity | 校准用户侧表计 | 阶段；kWh；电压供货地区；实际作业试验待机返工；因果共享负荷；验收数 | 读取校准阶段用户侧电力表实际因果负荷记录，装配吊装控制试验设备计一次。kWh按3.6 MJ/kWh转换后设备采集；液压输出发动机额定不是电力投入。 | MJ | 实际代表期间 | 实际声明代表生产期间 | 声明工厂归属集成供货入口 | 实际归属电力MJ / 同一配置的验收设备数量 | 表计校准工单实际供货依据 |
| `cp_waste` | all_processes | specific exported waste | 接收称重分析 | 一种废物；kg皮重；干湿组成；实际接收方；退回回收；验收数 | 称每实际外运分流废物净kg及自身含量状态接收方。分开内部再用返供方余留液；收集废水为技术圈转移，不是直接淡水释放。 | kg | 每外运期间 | 实际声明代表生产期间 | 声明工厂归属集成供货入口 | 实际外运废物kg / 同一配置的验收设备数量 | 净称重分析接收联单 |
| `cp_exhaust` | testing | individual observed exhaust species | 控制后出口物质特异测量 | 试验燃料化石份额；CAS；空气子介质；控制后浓度；排气流量时间；收集余留碳；不确定性；验收数 | 按匹配物质浓度校准流量实际试验时间测控制后实际室外排气物质kg；独立追溯化石碳。记实际排气捕集后处理检出未知不存在区别。不向NO或NO2赋总NOx，无仅燃料碳NO因子。 | kg | 实际代表试验控制期间 | 实际声明代表生产期间 | 声明工厂归属集成供货入口 | 实际释放物质kg / 同一配置的验收设备数量 | 原采样实验室校准实际试验燃料碳记录 |
| `cp_solvent` | cleaning | observed IPA release | 物质测量或闭合IPA平衡 | CAS67-63-0；浓度流量时间；实际子介质；领用回收残留余留；检出不确定性；验收数 | 按匹配采样或文件化闭合领用回收残留余留平衡测实际残余室外IPA。无解释残差不自动成为空气排放全蒸发。 | kg | 实际代表清洗期间 | 实际声明代表生产期间 | 声明工厂归属集成供货入口 | 实际释放kg / 同一配置的验收设备数量 | 采样校准溶剂平衡 |
| `cp_configuration` | all_processes | as-built complete harvester | 受控清单实际工厂验收 | 型号序号配置；完整清单供货预充范围；收获驱动驾驶室暖通控制；实际检漏功能调试结果；净交付状态 | 追溯当前批准图样实际部件已含、顺序装配工厂检查试验处置。按当前批准验收计划记录实际防护收获驱动制动转向液压电气功能检查；不由宣传册推定通用阈值时长载荷试验。 | kg | 每整机配置改变 | 实际声明代表生产期间 | 声明工厂归属集成供货入口 | 限定随附每验收同配置设备 | 签认图样清单试验处置记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `mass_provenance` | cp_mass | 采用适合完整整机实际质量占地的当前校准车辆平台秤或地磅，保留可追溯量程分辨校准原零点皮重净读数及签认同序号配置。无虚构台秤。实际交付加注后称重；任何拆件须独立实测同台加减修正原配置状态。独立核对发动机kg供货模块kg余留燃料机油冷却液kg至完整正M。不以目录作业重额定容量推断密度虚构平均整机重代替。 | cp_mass; cp_parts; cp_engine; cp_hydraulic; cp_stock |
| `net_configuration` | finished_harvester | M含全部实际已装永久部件余留交付液一次；已装发动机齿轮箱驾驶室暖通电池预充在供货质量内。独立工厂补充仅供货边界外进入。排除操作员作物载荷临时试验工装包装散装备件工具独立交付附件。明确记余留燃料状态，不任意满箱质量。 | cp_configuration; cp_parts; cp_engine; cp_stock; cp_mass |
| `period_collection` | all protocols | 对每同配置实际期间，按原始因果记录归属实际交换总量并除实际验收设备数，以原kg、MJ、m3或Item(s)采集q_item。分子保留消耗拒收返工；不可暗混不同发动机履带收获暖通交付液配置。完整验收M对应同一群体状态。 | cp_configuration; actual counts; original records |
| `completeness_balance` | all exchanges | 完整整厂声明前展开全部实际清单作业登记：额外辊驱动规格进气排气灯支架润滑脂齿轮油暖通补充压缩空气热试验作物残余擦拭包装组分各须自身物理具体交换。匹配全部上游运输接收链接。按实际不确定性闭合库存已装退回拒收废物及液领用余留排回收排放平衡，无默认产率无解释残差排放。 | all collection protocols and actual job/supplier/receiver records |
| `source_limits` | external sources | Deere页当前CH750标题并含CH570描述；仅作为出版方保留CH570收获模块示例，不是证实当前CH750规格。Case提供螺栓模块底盘轮式履带替代，说明焊接一种行走机构非通用必需。两者仅宣传结构证据，不是工厂数量独立审计生产。仍须当前受控前景图样工单记录独立科学审查。 | deere-cane-architecture; case-austoft-architecture |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference` | reference_flow | 核验精确参考名等于finished_harvester、完整声明履带非道路柴油切段配置及物理实测正净M kg。一般44129机械部件身份不独立建立此完整配置。 |  |
| `validation_configuration` | all_processes | 核验实际供货边界发动机序号件数独立kg、液压实际m3温度密度余留、预充工厂追加区别、完整永久清单实际顺序调试验收。拒绝完整模块内重复马达刀驾驶室制冷剂发动机油。实际发动机分类须非道路农业，不是道路车辆航空器推进。 |  |
| `validation_identity` | all flow rows | 核验公开state100类型实际参考属性组单位路线状态官方精确双语名。保留数量体积能量，不改质量。匹配各排放化学化石份额即时实际空气子介质；NO/NO2/N2O直接资源水收集废水仍不同。具体空身份缺口保留至解决。 |  |
| `validation_claims` | claims | PCR机械通过仅核验声明一致性，不是实际工厂测量完整摇篮到大门科学批准田间性能。声明余下清单身份计量链接独立证据缺口及实际未知不适用低于检出状态。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 配置完整履带甘蔗收获机最终集成制造前景；标题不意味着发表 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 按实际M缩放同声明配置完整整机制造及实际链接部件供货入口 |
| excluded_use | 收获服务作物产量农场使用燃料寿命比较无关收获机拖拉机部件无支持配置 |
| required_metadata | 完整竣工清单型号序号履带路线发动机排放序号件数独立kg收获驱动驾驶室暖通电气配置模块液体已含实际余留完整校准M原重量实际工厂期间供货工单验收记录分配上游接收链接 |
| required_quality_disclosure | 身份计量清单来源链接缺口实际退回拒收返工液体回收；检出不确定性截断分配敏感性 |
| update_trigger | 发动机排放底盘履带收获模块供货预充实际液配方控制暖通验收交付状态工厂供货期间改变 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| deere-cane-architecture | handbook | John Deere Australia, CH750 Track Cane Harvester (page title retains CH570 wording), undated official page, Hydrostatic basecutter and chopper; Elevator and cleaning system. https://www.deere.com.au/en/harvesting/sugar-cane-harvester/ch750-track-sugar-cane-harvester/ | 出版方保留CH570示例：不同液压切底切段除杂升运模块。不转数量质量生产率寿命通用工厂配方。 |
| case-austoft-architecture | handbook | Case IH, Austoft 9000 Sugar Cane Harvester, undated official page, Chassis; New optimized hydraulic system; model variants. https://www.caseih.com/en/africamiddleeast/products/harvesting/austoft-9000-sugar-cane-harvester | 螺栓模块底盘受控柱塞泵不同轮式履带配置；支持明确供货结构选择，不是焊接义务实测清单。 |
