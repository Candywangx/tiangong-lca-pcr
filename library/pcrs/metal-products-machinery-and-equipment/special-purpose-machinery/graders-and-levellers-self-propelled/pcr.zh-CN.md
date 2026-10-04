---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.graders-and-levellers-self-propelled
status: candidate
language: zh-CN
sync_with: pcr.en-US.md
---

# 自行式平地机与整平机

## 1. 范围与适用性

本候选规则覆盖以泥土、矿物或矿石平整和整平为主要功能的新完整自行式平地机和整平机，保留完整类别及经验证的传统机动平地机之外配置。牵引车加牵引整平器、单独出售铲刀或附件或部件、推土机、铲运机、压路机、装载机及挖掘机不在完整产品范围。临时安装整平附件的主机不自动成为平地机，混合及不明确设备须审查主要功能和完成状态。后续场地服务、移动土方、运行、维护和报废独立。来源：`un-cpc3-graders`；`deere-g-series`；`komatsu-gd675`。

Deere记录焊接箱式主机架及牵引架、焊接热处理回转圈及标准或高级轴承备选、高碳钢铲刀和直接传动变速箱；小松独立记录轧制环形锻件回转圈、成形焊接牵引架及带锁止液力变矩动力换挡备选。这些只是结构示例而非通用物料表或工厂工艺。无自身交付物料表不推定全轮驱动、电力或电池路线。厂家运行质量包括满油箱和操作员，均不采用为验收净质量。维修再加注容积、铲刀牵引力、发动机额定功率、营销节省、制冷剂额定充注和场地生产率不量化工厂消耗。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.graders-and-levellers-self-propelled |
| classification_refs | CPC 3.0 44422 |
| covered_products | 声明交付范围的新完整自行式平地机和整平机 |
| excluded_products | 牵引整平器；独立铲刀及部件；其他土方设备类别；土方服务 |
| representative_product | 声明配置轮式柴油平地机，其他经验证自行整平机仍适用 |
| production_route | 实际自制外购；条件性制造及处理；配置特定装配；工厂验收 |
| market_state | 工厂门新完整验收整机，包装独立 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明完整平地或整平机配置制造，不是场地平整服务 |
| How much | 同一配置完整验收整机1千克 |
| How well | 配置特定动力、转向、铲刀或整平系统与安全验收；质量不意味着整平性能相等 |
| How long or cycle | 一个制造及工厂验收周期，无通用寿命 |
| reference_flow_link | finished_machine |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 自动推动平土机和平地机 `45ddf592-7a5b-41ad-b2f2-a14a68816800` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 主要功能；型号配置；动力；轮式或履带；铲刀回转圈牵引架范围；传动架构；交付选装件；逐项自制外购接口；保留初装；经校准净质量；验收；工厂周期；供货地理和电压 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | Mass | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |
| native_basis | 每项交换 | Mass; Number of items; Net calorific value | kg; Item(s); MJ | 保留原生分子单位，发动机件数是完整供货单元而非推定发动机质量；1 kWh = 3.6 MJ；必要时升仅用自身实际密度与温度换算。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际进入工厂的供应商已完成材料或模块 |
| starting_condition_role | foreground_input |
| product_classification_scope | 完整自行式平地或整平机，不是附件或土方服务 |
| recursive_input_rule | 外购同类别已完成主机上游计入一次，披露转化或装配状态，内部成对转移抵消 |
| upstream_dataset_requirement | 匹配供货完成状态、架构、牌号、化学体系、供应方和地理时间接口，披露缺口 |
| disclosure | 实际物料表、供货范围、工单、保留初装、测试和发运 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| boundary_factory | 包括接收、实际制造处理装配、可归属工厂测试及不合格品返工和包装，供应投入在上游；排除后续场地使用。 | un-cpc3-graders |
| boundary_bom | 分别核对底盘、牵引架回转圈铲刀切削刃、动力变速箱、驱动桥轮胎制动、液压驾驶室控制及实际选装件。完整外购模块仅内嵌一次材料、初装和已完成工序；实际自制则用实际原料与工序替代模块。 | deere-g-series; komatsu-gd675 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fabrication | 机架牵引架及整平机构制造 | conditional | 按实际工单及物理边界，外购已完成工序保留上游 | foreground | 1千克参考流 |
| surface | 表面及热处理 | conditional | 按实际工单及物理边界，外购已完成工序保留上游 | foreground | 1千克参考流 |
| assembly | 完整配置装配 | required | 按实际工单及物理边界，外购已完成工序保留上游 | foreground | 1千克参考流 |
| test_pack | 工厂测试初装及发运 | required | 按实际工单及物理边界，外购已完成工序保留上游 | foreground | 1千克参考流 |
| shared | 未归属共用服务 | conditional | 按实际工单及物理边界，外购已完成工序保留上游 | foreground | 1千克参考流 |

这些卡片是条件性原子交换而非通用配方。每种实际新增牌号、独立回转圈齿轮变矩器阀切削刃轮辋松土器传感器、焊接气体、热处理介质、磨料、溶剂、尿素水配方、废物或排放物种均须自身合格行及采集记录。未知不是零，不适用须有物理不存在证据；厂家示例不能确定工厂牌号、外购数量、测试或自制外购选择。

### 过程：机架牵引架及整平机构制造（`fabrication`）

#### 输入

##### 产品流

###### 交流电（`electricity_fabrication`）

仅匹配中国用户侧低于1千伏电网平均供电；直接计量本过程已归属电量，排除共用余量及其他已归属过程；其他地理或电压须其自身匹配身份。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_fabrication。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication`
- 来源：


###### 热轧结构钢板（`plate`）

仅适用于经证明的实际机架或牵引架钢板，牌号、宽度和完成状态须匹配；供应商已制造的底盘将钢板计入上游。

- 选定流：热轧结构钢板
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_fabrication。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication`
- 来源：

###### 钢制药芯焊丝（`wire`）

按实际合格焊接工艺和填丝牌号记录，不从通用名称推定自保护焊丝或保护气不存在。

- 选定流：钢制药芯焊丝
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_fabrication。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 工业后钢废料（`scrap`）

仅适用于机加工或成形产生、未经处理输出的钢废料；含油切屑须另行匹配状态和成分。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_fabrication。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication`
- 来源：

##### 基本流

### 过程：表面及热处理（`surface`）

#### 输入

##### 产品流

###### 交流电（`electricity_surface`）

仅匹配中国用户侧低于1千伏电网平均供电；直接计量本过程已归属电量，排除共用余量及其他已归属过程；其他地理或电压须其自身匹配身份。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：


###### 水性丙烯酸工业涂料（`paint`）

按实际涂料配方和工艺记录；已涂覆外购件仅在上游计入一次涂覆；每种另加稀释剂和实际溶剂均须独立原子行。

- 选定流：水性丙烯酸工业涂料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：

###### 工艺用水（`water`）

实际经处理工业工艺水，说明处理、质量、供应方和边界；内部循环相互抵消。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 丙烯酸涂覆清洗废水（`wastewater`）

实际输出的清洗废水具有自身水分和逐物种检测结果，不用污水服务或制药废水替代。

- 选定流：丙烯酸涂覆清洗废水
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：

##### 基本流

### 过程：完整配置装配（`assembly`）

#### 输入

##### 产品流

###### 交流电（`electricity_assembly`）

仅匹配中国用户侧低于1千伏电网平均供电；直接计量本过程已归属电量，排除共用余量及其他已归属过程；其他地理或电压须其自身匹配身份。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：


###### 柴油发动机（`engine`）

仅适用于匹配实际平地机规格和供货接口的完整外购非道路压燃发动机；使用原生件数，不虚构发动机质量。

- 选定流：柴油发动机 `d3ac8612-80b9-4283-9439-62aa4986fce2`
- 流属性/单位：Number of items / Item(s)
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：

###### 平地机动力换挡变速箱总成（`transmission`）

记录实际完整外购变速箱，直接传动与液力变矩路线保持区分；若变矩器不内嵌则按实际外购单元另加行。

- 选定流：平地机动力换挡变速箱总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：

###### 平地机铲刀总成（`blade`）

仅适用于完整外购的实际平地机铲刀，不绑定推土机铲刀或完整主机；切削刃、端刃和回转圈只在供应范围证明包括时内嵌。

- 选定流：平地机铲刀总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：

###### 变量液压柱塞泵（`pump`）

实际独立外购柱塞泵，不用未指明的离心泵或完整液压动力单元替代。

- 选定流：变量液压柱塞泵
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：

###### 工程机械用新充气橡胶轮胎（`tyre`）

仅记录交付行走机构的实际完整轮胎，不用乘用车轮胎、未硫化胎或胶粉替代。

- 选定流：工程机械用新充气橡胶轮胎
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：

###### 平地机驾驶室总成（`cab`）

实际供货驾驶室范围须声明玻璃、防翻滚及落物保护、座椅和线束；独立外购件保持独立。

- 选定流：平地机驾驶室总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：

###### 平地机串列驱动桥总成（`axle`）

按实际完整驱动桥及终传动范围，计量配置，避免重复计入内嵌齿轮或壳体材料。

- 选定流：平地机串列驱动桥总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：

###### 液压铲刀升降油缸（`cylinder`）

一项实际油缸身份并限定几何、压力和供货范围，其他油缸另列独立行。

- 选定流：液压铲刀升降油缸
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：

###### 钢丝增强液压软管（`hose`）

实际结构、直径、压力和接头，不用通用塑料管替代。

- 选定流：钢丝增强液压软管
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：

###### 铅酸起动蓄电池（`battery`）

只用于实际安装起动电池的化学体系和完成状态，不由此推定电力驱动。

- 选定流：铅酸起动蓄电池
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：

###### 平地机铲刀控制电子模块（`control`）

实际独立供货控制器，非内嵌的找平传感器和显示器均需另列行。

- 选定流：平地机铲刀控制电子模块
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：

###### 平地机湿式盘式制动总成（`brake`）

实际独立外购制动单元，驱动桥供应范围已包括时不再添加。

- 选定流：平地机湿式盘式制动总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：工厂测试初装及发运（`test_pack`）

#### 输入

##### 产品流

###### 交流电（`electricity_test_pack`）

仅匹配中国用户侧低于1千伏电网平均供电；直接计量本过程已归属电量，排除共用余量及其他已归属过程；其他地理或电压须其自身匹配身份。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_pack`
- 来源：


###### 石油基液压油（`oil`）

按实际油牌号及成分区分保留初装油与冲洗或测试消耗部分，通用矿物或合成身份不能证明实际石油配方。

- 选定流：石油基液压油
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_pack`
- 来源：

###### 柴油发动机润滑油（`engineoil`）

实际合格牌号工厂加注量，排除发动机投入已内嵌的供应商预加注。

- 选定流：柴油发动机润滑油
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_pack`
- 来源：

###### 平地机变速箱润滑油（`gearoil`）

实际变速箱牌号、保留量、排出的测试油和库存；驱动桥、串列箱和回转圈润滑油各需其自身牌号交换。

- 选定流：平地机变速箱润滑油
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_pack`
- 来源：

###### 配制柴油发动机防冻冷却液（`coolant`）

实际发动机兼容混合物、浓度和供货状态，风电运维冷却液不能自动匹配。

- 选定流：配制柴油发动机防冻冷却液
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_pack`
- 来源：

###### 制冷剂R134a（`r134a`）

仅在实际驾驶室空调使用R134a时，分别测量保留充注、回收和工厂损失，不用厂家额定充注作默认。

- 选定流：制冷剂R134a
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_pack`
- 来源：

###### 柴油（`diesel`）

实际外购轻柴油须独立确认牌号、配方、供应方、密度和热值；交付保留燃料与实际燃烧测试燃料分开计量。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_pack`
- 来源：

###### 木托盘（`pallet`）

仅在独立随附设备实际使用木装载板时记录，不推定每台整机均用托盘；其他包装身份另加原子行。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_pack`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 自动推动平土机和平地机（`finished_machine`）

验收后的声明配置完整自行式平地或整平机，经校准净质量排除操作员、包装、不合格品和测试消耗介质，披露实际保留交付初装及选装件。

- 选定流：自动推动平土机和平地机 `45ddf592-7a5b-41ad-b2f2-a14a68816800`
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass`
- 来源：

##### 废物流

###### 废油（`wasteoil`）

实际工厂作业产生状态废润滑或切削油，不自动替换为已处理回收产品、混合溶剂或冷却液。

- 选定流：废油 `2a68e97a-21fe-43f7-a86e-3e39b653e10a`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_pack`
- 来源：

##### 基本流

###### 二氧化碳（化石源）（`co2`）

仅实际工厂燃烧排入普通未指明空气的实测或有证据化石源二氧化碳，不用长期隔室或下游使用排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_pack`
- 来源：

###### 一氧化碳（化石源）（`co`）

实际测得排入普通未指明空气的化石源分子一氧化碳，碳闭合不能确定一氧化碳。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_pack`
- 来源：

###### 排入空气的二氧化氮（`no2`）

按实际分子二氧化氮测量，不用以二氧化氮计的氮氧化物或亚硝酸根替代，其他实际物种须独立行。

- 选定流：排入空气的二氧化氮
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_pack`
- 来源：

###### 排入空气的HFC-134a（`r134a_air`）

仅初装保留、回收和库存核对后的实际分子R134a工厂泄漏，产品充注不等于排放。

- 选定流：排入空气的HFC-134a
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_pack`
- 来源：

### 过程：未归属共用服务（`shared`）

#### 输入

##### 产品流

###### 交流电（`electricity`）

仅匹配中国用户侧低于1千伏电网平均供电。记录各过程归属及剩余可归属共用余量而不重复计入，其他地理或电压须匹配其自身身份。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_shared。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_shared`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| allocation_direct | 工单实测交换直接归属配置；合理时以实测工时或工单因果分摊共用服务；声明驱动、范围、不确定性及备选，无通用质量或价值分配系数。 |  |
| allocation_rework | 可归属不合格品返工及测试负担保留在验收输出，不合格品和测试消耗介质不计入验收分母，废物无自动替代收益，披露回收边界。 |  |

## 8. 前景数据采集计算及质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | test_pack | accepted_reference | weighing_record | 型号；配置；序列号；验收净质量 M；Naccepted；Dnet；保留初装；秤；验收 | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 每个验收单元 | 同一生产周期 | 同一工厂配置 | 每台验收净质量 | 校准序列号及验收证据 |
| cp_fabrication | fabrication | atomic_exchanges | production_record | 交换；Qattr；配置；周期；Naccepted；原生单位；供应方；期初期末库存；在制品；返回；自制外购；保留；自身成分 | 使用经校准称量或计量表、实际物料表、证书或SDS、工单及供货接口；各保留初装与燃烧或排出测试消耗及循环分别计量；保留发动机件数及实际完整范围。 | kg; Item(s); MJ | 批次及计量间隔 | 同一生产周期 | 同一工厂配置 | 可归属交换数量 / 验收机器数 | 计量校准证书库存取样及分配不确定性 |
| cp_surface | surface | atomic_exchanges | production_record | 交换；Qattr；配置；周期；Naccepted；原生单位；供应方；期初期末库存；在制品；返回；自制外购；保留；自身成分 | 使用经校准称量或计量表、实际物料表、证书或SDS、工单及供货接口；各保留初装与燃烧或排出测试消耗及循环分别计量；保留发动机件数及实际完整范围。 | kg; Item(s); MJ | 批次及计量间隔 | 同一生产周期 | 同一工厂配置 | 可归属交换数量 / 验收机器数 | 计量校准证书库存取样及分配不确定性 |
| cp_assembly | assembly | atomic_exchanges | production_record | 交换；Qattr；配置；周期；Naccepted；原生单位；供应方；期初期末库存；在制品；返回；自制外购；保留；自身成分 | 使用经校准称量或计量表、实际物料表、证书或SDS、工单及供货接口；各保留初装与燃烧或排出测试消耗及循环分别计量；保留发动机件数及实际完整范围。 | kg; Item(s); MJ | 批次及计量间隔 | 同一生产周期 | 同一工厂配置 | 可归属交换数量 / 验收机器数 | 计量校准证书库存取样及分配不确定性 |
| cp_test_pack | test_pack | atomic_exchanges | production_record | 交换；Qattr；配置；周期；Naccepted；原生单位；供应方；期初期末库存；在制品；返回；自制外购；保留；自身成分 | 使用经校准称量或计量表、实际物料表、证书或SDS、工单及供货接口；各保留初装与燃烧或排出测试消耗及循环分别计量；保留发动机件数及实际完整范围。 | kg; Item(s); MJ | 批次及计量间隔 | 同一生产周期 | 同一工厂配置 | 可归属交换数量 / 验收机器数 | 计量校准证书库存取样及分配不确定性 |
| cp_shared | shared | atomic_exchanges | production_record | 交换；Qattr；配置；周期；Naccepted；原生单位；供应方；期初期末库存；在制品；返回；自制外购；保留；自身成分 | 使用经校准称量或计量表、实际物料表、证书或SDS、工单及供货接口；各保留初装与燃烧或排出测试消耗及循环分别计量；保留发动机件数及实际完整范围。 | kg; Item(s); MJ | 批次及计量间隔 | 同一生产周期 | 同一工厂配置 | 可归属交换数量 / 验收机器数 | 计量校准证书库存取样及分配不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品机器的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_denominator | 参考及清单 | 同一配置及周期Qattr包括可归属不合格品返工测试负担，Naccepted为完整验收件数，Dnet为经校准验收净质量之和；M = Dnet/Naccepted；q_item = Qattr/Naccepted；q_ref = Qattr/Dnet。Dnet排除包装操作员不合格品测试负载或消耗介质及其他配置，核对在制品库存。 | 实际同周期物料表计量校准称量成分库存工单及供应证据 |
| quality_make_buy | 每项物料 | 核对实际件号交付完成状态牌号成分供应方及自制外购；外购发动机驾驶室驱动桥铲刀内嵌供应材料工序初装一次，半成品记录剩余实际工序；内部转移配对抵消，核对验收保留物料与废料返工返回库存，无虚构材料比例。 | 实际同周期物料表计量校准称量成分库存工单及供应证据 |
| quality_fills | 初装及测试 | 每种燃油润滑油冷却液制冷剂尿素水身份核对自身输入质量或容积、供应商内嵌预加注、期初期末库存、保留交付、实测工厂消耗、回收排出及释放；保留交付与燃烧测试燃料是不同去向，维修再加注容积不作实际工厂充注。 | 实际同周期物料表计量校准称量成分库存工单及供应证据 |
| quality_utilities | 计量及共用服务 | 同周期进口加实际现场发电减出口库存变化核对已归属制造处理装配测试发运、有证据转换损失及未归属余量；共用行仅分摊余量，不把总表与子表相加或把负余量截零，调查周期单位校准分配不确定性；内部能源抵消，供应锅炉燃料不是虚构现场燃烧。 | 实际同周期物料表计量校准称量成分库存工单及供应证据 |
| quality_water | 每个物理水流 | 每个水流使用自身实测总质量、水分及按容积采集时实际温度下有记录密度；核对输入水分工艺水冷却水与保留水湿废料污泥废水蒸发库存反应生成或消耗水；成对返回抵消，调查联合取样测量不确定性，无通用容差。 | 实际同周期物料表计量校准称量成分库存工单及供应证据 |
| quality_species | 每个材料及排放物种 | 每种元素或物种各项使用自身总质量及自身成分浓度湿干基库存反应返回，总钢或污泥不是其中铁或碳；溶剂保留回收捕集介质废水及实际销毁是不同非空气去向，不明余量不能成为空气排放；同周期逐物种末端浓度乘匹配气液流量须实际状态单位校正和独立无组织证据；碳闭合不能推导一氧化碳氮氧化物，分子二氧化氮不同于以二氧化氮计的氮氧化物。 | 实际同周期物料表计量校准称量成分库存工单及供应证据 |
| quality_identity | 每项交换 | 声明实际采集计算不适用未知缺失状态及逐项身份来源范围缺口，匹配类型供货状态化学或CAS分类原生属性单位及正式双语名；通用名称不证明牌号，无通用质量配方损耗系数或寿命。 | 实际同周期物料表计量校准称量成分库存工单及供应证据 |

## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| validate_scope | 验证完整自行式平地或整平机主要功能和交付配置，排除牵引附件及其他土方设备类别，机动平地机示例不缩小类别。 | un-cpc3-graders; deere-g-series; komatsu-gd675 |
| validate_measurement | 要求正且有限验收数量净质量、同配置每台向参考量转换及各原生分子保留。 |  |
| validate_denominator | 同一配置及周期Qattr包括可归属不合格品返工测试负担，Naccepted为完整验收件数，Dnet为经校准验收净质量之和；M = Dnet/Naccepted；q_item = Qattr/Naccepted；q_ref = Qattr/Dnet。Dnet排除包装操作员不合格品测试负载或消耗介质及其他配置，核对在制品库存。 |  |
| validate_make_buy | 核对实际件号交付完成状态牌号成分供应方及自制外购；外购发动机驾驶室驱动桥铲刀内嵌供应材料工序初装一次，半成品记录剩余实际工序；内部转移配对抵消，核对验收保留物料与废料返工返回库存，无虚构材料比例。 |  |
| validate_fills | 每种燃油润滑油冷却液制冷剂尿素水身份核对自身输入质量或容积、供应商内嵌预加注、期初期末库存、保留交付、实测工厂消耗、回收排出及释放；保留交付与燃烧测试燃料是不同去向，维修再加注容积不作实际工厂充注。 |  |
| validate_utilities | 同周期进口加实际现场发电减出口库存变化核对已归属制造处理装配测试发运、有证据转换损失及未归属余量；共用行仅分摊余量，不把总表与子表相加或把负余量截零，调查周期单位校准分配不确定性；内部能源抵消，供应锅炉燃料不是虚构现场燃烧。 |  |
| validate_water | 每个水流使用自身实测总质量、水分及按容积采集时实际温度下有记录密度；核对输入水分工艺水冷却水与保留水湿废料污泥废水蒸发库存反应生成或消耗水；成对返回抵消，调查联合取样测量不确定性，无通用容差。 |  |
| validate_species | 每种元素或物种各项使用自身总质量及自身成分浓度湿干基库存反应返回，总钢或污泥不是其中铁或碳；溶剂保留回收捕集介质废水及实际销毁是不同非空气去向，不明余量不能成为空气排放；同周期逐物种末端浓度乘匹配气液流量须实际状态单位校正和独立无组织证据；碳闭合不能推导一氧化碳氮氧化物，分子二氧化氮不同于以二氧化氮计的氮氧化物。 |  |
| validate_identity | 声明实际采集计算不适用未知缺失状态及逐项身份来源范围缺口，匹配类型供货状态化学或CAS分类原生属性单位及正式双语名；通用名称不证明牌号，无通用质量配方损耗系数或寿命。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 声明配置制造前景包及过程或生命周期模型投影 |
| excluded_use | 场地整平服务，按质量推定通用功能等价，未审查配置替代 |
| required_metadata | 主要功能配置物料表自制外购铲刀回转圈变速箱范围保留初装工厂周期校准质量测试供货能源接口 |
| required_quality_disclosure | 身份路线来源范围缺口不确定性工厂证据厂家规格与实测区分 |
| update_trigger | 架构主要功能范围牌号供应商路线或能源接口变化 |

## 11. 数据源

| 来源编号 | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| un-cpc3-graders | official_guidance | UNSD Central Product Classification Version 3.0 Explanatory Notes, 30 June 2025, pp234–235: https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 完整44422及邻接整机铲刀非自行边界，不是制造配方 |
| deere-g-series | handbook | John Deere Motor Grader 4WD G-Series620G/GP670G/GP770G/GP870G/GP, DKAGGDR (20-03), pp14–16: https://www.deere.com/assets/pdfs/region-1/campaigns/620-670-770-870-g-gp-motor-graders-2021.pdf | 焊接结构回转圈备选直接传动及初装接口、运行质量排除项，无工厂数量 |
| komatsu-gd675 | handbook | Komatsu GD675-6 Motor Grader EU Stage IV Engine, EENSS20153 07/2017, pp6,13–14: https://www.komatsu.eu/Assets/GetBrochureByProductName.aspx?id=GD675-6&langID=en | 整平机构环锻回转圈变矩路线及质量限定，不是通用路线或充注 |
