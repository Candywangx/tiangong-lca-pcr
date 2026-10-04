---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.bulldozer-or-angledozer-blades
status: candidate
language: zh-CN
sync_with: pcr.en-US.md
---

# 推土机或侧铲推土机的铲

## 1. 范围与适用性

本候选规则约束完整推土机或侧铲推土机铲的工厂制造，不是自行式机器或土方作业服务。直铲、U 形铲、半 U 形铲及转角倾斜铲必须声明交付配置。铲包括铲板、结构背板和侧板以及已安装的切刃、端刃和耐磨件。仅当实际交付物料清单供应推臂、C 型架、枢轴连接件及倾斜或转角油缸时才纳入；适配拖拉机现有推臂的铲不继承这些推臂或拖拉机液压系统。排除发动机、履带、牵引传动、后续安装和使用、移动土方及作业柴油。单独替换铲刃、衬板、端刃和液压件需独立语义及分类审查，不能自动视为完整铲。来源：`un-cpc3-blades`；`dymax-abrasion-blades`；`cat-blade-components`。

Dymax 指南区分型号、衬板、容量和重量；这是具体配置，不是类别默认值。其耐磨铲适配现有外置推臂并提供不同耐磨配置。Caterpillar 描述多种铲和控制变型。Caterpillar 专利将分别成形后焊接的拼板与整张板切割成形铲板对照：两种路线均非强制。测量实际验收净质量和尺寸；制造商表列重量、拖拉机马力或额定铲容量不能作为普适清单因子。来源：`dymax-dozer-guide`；`cat-moldboard-patent`。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.bulldozer-or-angledozer-blades |
| classification_refs | CPC 3.0 44429 |
| covered_products | 实际配置完整推土铲或侧铲 |
| excluded_products | 完整自行式推土机；单售零件；土方服务；雪铲和耙 |
| representative_product | 装有声明耐磨件的钢制 U 形铲；非普适配方 |
| production_route | 实际自制外购矩阵；切割成形焊接；条件性机加工、热处理和表面处理；装配验收 |
| market_state | 工厂门口新制验收铲；包装单列 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造声明交付配置的铲 |
| How much | 1 kg 同一配置验收完整铲 |
| How well | 满足实际尺寸、连接、焊缝及控制验收；质量不是不同容量或功能的等效依据 |
| How long or cycle | 一次工厂制造验收周期；不规定使用寿命 |
| reference_flow_link | finished_blade |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 推土机或侧铲推土机的铲 `e2bc45f7-c072-4426-814c-f254a6b821ce` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 铲型；型号；主机连接接口；铲宽、高、实际容量定义；铲板和侧板牌号；耐磨配置；推臂、框架和油缸交付范围；净质量；自制外购；工厂、年份；验收；供电地域和电压 |

## 4. 计量与单位规则

本节计量术语“设备”和“单元”均仅指完整交付铲（完整交付单元），不包括自行式主机。质量、数量、验收、物料清单和所有清单采集使用同一交付配置。

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；采用 cp_mass 采集。 |
| material_assay | 物理材料和化学物种记录 | Mass | kg | 每个输入、产品、废料、污泥、废水和排放项各自匹配含量及干湿基；毛质量不等于含铁或含溶剂质量。 |
| energy_basis | electricity and fuel | Net calorific value | MJ | 1 kWh = 3.6 MJ；燃料质量转能量需实际热值；额定主机功率不是工厂能耗。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 供应商交付的实际牌号板材或完成部件进入工厂 |
| starting_condition_role | foreground_input |
| product_classification_scope | 完整推土或侧铲，与主机及单售零件区分 |
| recursive_input_rule | 外购铲板或铲总成按上游产品记录一次，不重建其内含制造 |
| upstream_dataset_requirement | 匹配牌号、状态、完成工序、供应接口、地域和年份；披露未解决连接 |
| disclosure | 完整交付清单、耐磨选件、推臂和液压边界以及测试工装归属 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| boundary_factory | 纳入实际接收、自制、外协产品上游、装配、厂内测试、返工和包装；厂后土方、安装、维护及报废另行建模。 | un-cpc3-blades; dymax-abrasion-blades |
| boundary_make_buy | 逐件声明铲板、切刃、端刃、侧板、框架、推臂、销和油缸自制或外购。外购完成部件内含板材、焊丝、热处理和供应商填油不得再作前景投入。 | dymax-abrasion-blades; cat-moldboard-patent |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| fabrication | 板材切割、成形、焊接和机加工 | conditional | 实际厂内铲体或框架制造，包括整张板或拼板铲板。 | foreground | 1 kg reference flow |
| surface | 热处理及耐磨或表面处理 | conditional | 仅纳入实际前景热处理、堆焊、喷砂或涂装；外购预处理板材留在上游。 | foreground | 1 kg reference flow |
| assembly | 铲配置装配 | required | 按实际交付铲的物料清单装配耐磨件，仅含随铲供应的推臂和油缸。 | foreground | 1 kg reference flow |
| test_pack | 出厂验收和包装 | required | 放行前实际尺寸、焊缝、连接及条件性液压测试。 | foreground | 1 kg reference flow |
| shared | 尚未分配的工厂公共服务 | conditional | 仅纳入已分配过程负荷后的计量剩余量。 | foreground | 1 kg reference flow |

下列卡是条件性原子交换，不是固定铲配方。记录实际材料证书、焊接工艺、安全数据表和采购接口。其他牌号、燃料、化学品、部件或排放物种需各自独立具体交换及流属性、单位和身份审查。不适用路线需缺席证据；未知不是零。外购 Hardox 或 AR 板热处理留在上游；仅当工单证明实际作业时才纳入前景退火、淬火、堆焊、机加工和涂装。实际存在的 CO、NOx 和金属气溶胶物种需实测或路线特定因子分别记录；燃料碳不能推出 CO 或 NOx。

### 过程：板材切割、成形、焊接和机加工（`fabrication`）

#### 输入

##### 产品流

###### AR400 耐磨钢板（`ar400`）

仅适用于物料清单中经证书确认的 AR400 板材；不得替换成 A36 或假设所有铲板均为 AR400。

- 选定流：AR400 耐磨钢板
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_fabrication。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品单元
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication`
- 来源：`dymax-abrasion-blades`; `cat-moldboard-patent`

###### Hardox 500 钢板（`hardox500`）

仅用于实际选择的 Hardox 500 耐磨配置，与 AR400 替代方案分开。

- 选定流：Hardox 500 钢板
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_fabrication。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品单元
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication`
- 来源：`dymax-abrasion-blades`; `cat-moldboard-patent`

###### ASTM A514 调质钢板（`t1_plate`）

仅当 T1 侧板或支撑件采购证书确认 ASTM A514 及其牌号时使用；供应商简称不足以确认。

- 选定流：ASTM A514 调质钢板
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_fabrication。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品单元
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication`
- 来源：`dymax-abrasion-blades`; `cat-moldboard-patent`

###### ER70S-6 碳钢焊丝（`weld_wire`）

仅用于实际合格焊接工艺指定该焊丝的情况；其他填料应另设精确牌号交换。

- 选定流：ER70S-6 碳钢焊丝
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_fabrication。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品单元
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication`
- 来源：`dymax-abrasion-blades`; `cat-moldboard-patent`

###### 氩气保护气体（`argon`）

仅记录实际氩气使用；混合保护气需各组分质量及供应商配比规格。

- 选定流：氩气保护气体
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_fabrication。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品单元
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication`
- 来源：`dymax-abrasion-blades`; `cat-moldboard-patent`

###### 二氧化碳保护气体（`shield_co2`）

仅记录实际二氧化碳保护气，与燃烧排放分开。

- 选定流：二氧化碳保护气体
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_fabrication。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品单元
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication`
- 来源：`dymax-abrasion-blades`; `cat-moldboard-patent`

###### 氧气切割气体（`oxygen`）

仅适用于实际氧气切割；等离子、激光或机械切割另列实际耗材。

- 选定流：氧气切割气体
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_fabrication。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品单元
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication`
- 来源：`dymax-abrasion-blades`; `cat-moldboard-patent`

###### 乙炔切割燃料（`acetylene`）

仅适用于氧乙炔切割；实际丙烷或其他燃料必须另设原子行，不得在本卡内替代。

- 选定流：乙炔切割燃料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_fabrication。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品单元
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication`
- 来源：`dymax-abrasion-blades`; `cat-moldboard-patent`

###### 水混合型矿物油切削液浓缩液（`cutting_fluid`）

仅适用于实际机加工浓缩液，声明安全数据表和配方；稀释水单列。

- 选定流：水混合型矿物油切削液浓缩液
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_fabrication。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品单元
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication`
- 来源：`dymax-abrasion-blades`; `cat-moldboard-patent`

###### 工艺水（`water_fab`）

仅记录跨边界的新水；内部回用是成对转移，不是新的新水输入。

- 选定流：工艺水
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_fabrication。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品单元
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication`
- 来源：`dymax-abrasion-blades`; `cat-moldboard-patent`

###### 交流电（`electricity_fabrication`）

仅适用于中国 1–35 kV 电网平均用户侧供电。其他地域或电压需匹配供应者身份。使用分配后的实际过程需求，不用额定功率或土方使用柴油。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_fabrication。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品单元
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication`
- 来源：`dymax-abrasion-blades`; `cat-moldboard-patent`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 分选钢切割废料（`steel_scrap`）

称量实际分牌号边角料和切屑；外部回收是废物和处理者连接，不自动抵扣原生钢。

- 选定流：分选钢切割废料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_fabrication。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品单元
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication`
- 来源：`dymax-abrasion-blades`; `cat-moldboard-patent`

###### 废矿物油切削乳化液（`spent_fluid`）

记录实际水、油、金属含量及去向。

- 选定流：废矿物油切削乳化液
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_fabrication。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品单元
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication`
- 来源：`dymax-abrasion-blades`; `cat-moldboard-patent`

###### 捕集的含铁焊接及切割粉尘（`filter_dust`）

捕集粉尘是废物，与未捕集的空气排放区分。

- 选定流：捕集的含铁焊接及切割粉尘
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_fabrication。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品单元
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication`
- 来源：`dymax-abrasion-blades`; `cat-moldboard-patent`

##### 基本流

### 过程：热处理及耐磨或表面处理（`surface`）

#### 输入

##### 产品流

###### 天然气（`natural_gas`）

仅适用于实际厂内燃气热处理；记录燃料组成和热值，不使用炉额定功率。

- 选定流：天然气
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品单元
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：`dymax-abrasion-blades`; `cat-moldboard-patent`

###### 矿物油淬火油（`quench_oil`）

仅适用于实际油淬，记录配方和补加量；外购调质板没有前景淬火工序。

- 选定流：矿物油淬火油
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品单元
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：`dymax-abrasion-blades`; `cat-moldboard-patent`

###### 碳化铬堆焊药芯焊丝（`carbide_wire`）

仅适用于使用此精确耗材的厂内堆焊；外购碳化物耐磨块作为部件进入。

- 选定流：碳化铬堆焊药芯焊丝
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品单元
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：`dymax-abrasion-blades`; `cat-moldboard-patent`

###### 钢喷砂磨料（`blast_grit`）

仅记录实际喷砂磨料补加量；循环磨料不重复列作采购。

- 选定流：钢喷砂磨料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品单元
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：`dymax-abrasion-blades`; `cat-moldboard-patent`

###### 双组分环氧涂料（`epoxy_coat`）

仅适用于实际有文档的环氧配方；记录组分比例和内含溶剂，其他涂料另设行。

- 选定流：双组分环氧涂料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品单元
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：`dymax-abrasion-blades`; `cat-moldboard-patent`

###### 二甲苯涂料稀释剂（`xylene`）

仅记录实际单独添加的二甲苯；不将涂料内含溶剂重复列为外购稀释剂。

- 选定流：二甲苯涂料稀释剂
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品单元
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：`dymax-abrasion-blades`; `cat-moldboard-patent`

###### 交流电（`electricity_surface`）

仅适用于中国 1–35 kV 电网平均用户侧供电。其他地域或电压需匹配供应者身份。使用分配后的实际过程需求，不用额定功率或土方使用柴油。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品单元
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：`dymax-abrasion-blades`; `cat-moldboard-patent`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 环氧涂料过喷污泥（`paint_sludge`）

使用实际湿质量、水、溶剂、树脂、金属含量及去向。

- 选定流：环氧涂料过喷污泥
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品单元
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：`dymax-abrasion-blades`; `cat-moldboard-patent`

###### 废矿物油淬火油（`spent_quench`）

仅记录跨边界废物；核对保留槽液库存及内部回收。

- 选定流：废矿物油淬火油
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品单元
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：`dymax-abrasion-blades`; `cat-moldboard-patent`

##### 基本流

###### 向空气排放的二甲苯（`xylene_air`）

仅采用实测或逐物种平衡排放，扣除留存、回收、捕集和实际销毁。

- 选定流：向空气排放的二甲苯
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品单元
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：`dymax-abrasion-blades`; `cat-moldboard-patent`

###### 向空气排放的化石二氧化碳（`fossil_co2`）

仅记录实际化石燃烧；按组成核算碳，扣除残余物留存碳。

- 选定流：向空气排放的化石二氧化碳
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品单元
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：`dymax-abrasion-blades`; `cat-moldboard-patent`

### 过程：铲配置装配（`assembly`）

#### 输入

##### 产品流

###### 制造完成的钢制推土铲板（`bought_moldboard`）

仅适用于外购成品铲板；内含板材、成形和焊接在上游计入一次，不重复列前景材料。

- 选定流：制造完成的钢制推土铲板
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品单元
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`dymax-abrasion-blades`; `cat-moldboard-patent`

###### 热处理钢制螺栓连接推土铲刃（`bought_edge`）

仅适用于安装在本交付铲上的铲刃；单独销售的铲刃不属于本参考产品。

- 选定流：热处理钢制螺栓连接推土铲刃
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品单元
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`dymax-abrasion-blades`; `cat-moldboard-patent`

###### 热处理钢制推土铲端刃（`bought_endbit`）

仅记录实际供应端刃；必须声明牌号、热处理及供应商。

- 选定流：热处理钢制推土铲端刃
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品单元
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`dymax-abrasion-blades`; `cat-moldboard-patent`

###### 制造完成的钢制推土铲推臂（`bought_arm`）

仅当随声明铲总成供应时纳入；拖拉机现有推臂排除。

- 选定流：制造完成的钢制推土铲推臂
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品单元
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`dymax-abrasion-blades`; `cat-moldboard-patent`

###### 液压铲倾斜油缸（`bought_cylinder`）

仅适用于随铲供应的倾斜油缸；纳入的转角油缸另设部件行。

- 选定流：液压铲倾斜油缸
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品单元
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`dymax-abrasion-blades`; `cat-moldboard-patent`

###### 液压铲转角油缸（`bought_angle`）

仅适用于实际交付的转角控制油缸；不假设含主机液压泵或发动机。

- 选定流：液压铲转角油缸
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品单元
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`dymax-abrasion-blades`; `cat-moldboard-patent`

###### 机加工钢制铲枢轴销（`bought_pin`）

仅记录实际外购成品销；油缸或推臂内含销不重复添加。

- 选定流：机加工钢制铲枢轴销
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品单元
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`dymax-abrasion-blades`; `cat-moldboard-patent`

###### 高强度钢制铲螺栓（`bolt`）

仅记录实际安装紧固件，核对牌号、数量及质量。

- 选定流：高强度钢制铲螺栓
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品单元
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`dymax-abrasion-blades`; `cat-moldboard-patent`

###### 交流电（`electricity_assembly`）

仅适用于中国 1–35 kV 电网平均用户侧供电。其他地域或电压需匹配供应者身份。使用分配后的实际过程需求，不用额定功率或土方使用柴油。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品单元
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`dymax-abrasion-blades`; `cat-moldboard-patent`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：出厂验收和包装（`test_pack`）

#### 输入

##### 产品流

###### ISO VG 46 矿物液压油（`hydraulic_oil`）

仅用于此牌号实际初装或消耗的测试油；返回试验台油和油缸供应商预填油区分。

- 选定流：ISO VG 46 矿物液压油
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品单元
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_pack`
- 来源：`dymax-abrasion-blades`; `cat-moldboard-patent`

###### 锯切针叶木包装材（`wood`）

仅记录实际托架木材，不计入验收铲净质量。

- 选定流：锯切针叶木包装材
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品单元
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_pack`
- 来源：`dymax-abrasion-blades`; `cat-moldboard-patent`

###### 低密度聚乙烯包装膜（`film`）

仅记录实际运输膜，单独称量。

- 选定流：低密度聚乙烯包装膜
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品单元
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_pack`
- 来源：`dymax-abrasion-blades`; `cat-moldboard-patent`

###### 交流电（`electricity_test_pack`）

仅适用于中国 1–35 kV 电网平均用户侧供电。其他地域或电压需匹配供应者身份。使用分配后的实际过程需求，不用额定功率或土方使用柴油。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品单元
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_pack`
- 来源：`dymax-abrasion-blades`; `cat-moldboard-patent`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 推土机或侧铲推土机的铲（`finished_blade`）

仅记录已验收完整配置，包括有文档的安装耐磨件及随铲附件。

- 选定流：推土机或侧铲推土机的铲 `e2bc45f7-c072-4426-814c-f254a6b821ce`
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass`
- 来源：`dymax-abrasion-blades`; `cat-moldboard-patent`

##### 废物流

##### 基本流

### 过程：尚未分配的工厂公共服务（`shared`）

#### 输入

##### 产品流

###### 工艺水（`water_shared`）

仅纳入按因果分配的未分配场址剩余量；排除已分配至制造和处理的用水。

- 选定流：工艺水
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_shared。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品单元
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_shared`
- 来源：`dymax-abrasion-blades`; `cat-moldboard-patent`

###### 交流电（`electricity_shared`）

仅适用于中国 1–35 kV 电网平均用户侧供电。其他地域或电压需匹配供应者身份。仅记录所有实测过程分配后的剩余量；禁止将全厂总表叠加到分表。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_shared。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品单元
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_shared`
- 来源：`dymax-abrasion-blades`; `cat-moldboard-patent`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 含金属工艺废水（`wastewater`）

仅记录实际排放或处理转移，含湿质量、水含量及各金属物种浓度。

- 选定流：含金属工艺废水
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_shared。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品单元
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_shared`
- 来源：`dymax-abrasion-blades`; `cat-moldboard-patent`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| allocation_separate | 先按相同配置工单与分表分离；公共服务按实测因果驱动分配，披露驱动及其他产线；不得按铲容量或主机功率替代实测。 |  |
| allocation_scrap | 保留拒收、返工、切割损失和捕集废物负担；拒收品及包装不计入验收净质量分母。回收材料作为实际废物流及处理连接，不默认替代原生材料信用。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

本节计量术语“设备”和“单元”均仅指完整交付铲（完整交付单元），不包括自行式主机。质量、数量、验收、物料清单和所有清单采集使用同一交付配置。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | test_pack | reference_product | weighing_record | 型号；配置；序列号；验收净质量 M；验收数量 N | 使用经校准的秤称量已验收的完整设备，排除运输包装；核对同一配置和验收记录。 | kg | per accepted unit | 同一生产期 | 声明交付铲，不含主机 | 每台验收净质量 | 校准、皮重、配置与验收记录 |
| cp_fabrication | fabrication | atomic_exchanges | production_record | 交换身份；Q；N；配置；表计单位；期初期末库存；干湿基；各自含量；路线；期间；供应者 | 计量、称重、采购、工单、取样和处理者单据；覆盖拒收及返工负担。 | MJ for energy; kg for mass | per batch and meter interval | 同一生产期 | 实际工厂与交付配置 | 分配交换量 / 验收单元数量 | 校准、采样、库存、分配和不确定度证据 |
| cp_surface | surface | atomic_exchanges | production_record | 交换身份；Q；N；配置；表计单位；期初期末库存；干湿基；各自含量；路线；期间；供应者 | 计量、称重、采购、工单、取样和处理者单据；覆盖拒收及返工负担。 | MJ for energy; kg for mass | per batch and meter interval | 同一生产期 | 实际工厂与交付配置 | 分配交换量 / 验收单元数量 | 校准、采样、库存、分配和不确定度证据 |
| cp_assembly | assembly | atomic_exchanges | production_record | 交换身份；Q；N；配置；表计单位；期初期末库存；干湿基；各自含量；路线；期间；供应者 | 计量、称重、采购、工单、取样和处理者单据；覆盖拒收及返工负担。 | MJ for energy; kg for mass | per batch and meter interval | 同一生产期 | 实际工厂与交付配置 | 分配交换量 / 验收单元数量 | 校准、采样、库存、分配和不确定度证据 |
| cp_test_pack | test_pack | atomic_exchanges | production_record | 交换身份；Q；N；配置；表计单位；期初期末库存；干湿基；各自含量；路线；期间；供应者 | 计量、称重、采购、工单、取样和处理者单据；覆盖拒收及返工负担。 | MJ for energy; kg for mass | per batch and meter interval | 同一生产期 | 实际工厂与交付配置 | 分配交换量 / 验收单元数量 | 校准、采样、库存、分配和不确定度证据 |
| cp_shared | shared | atomic_exchanges | production_record | 交换身份；Q；N；配置；表计单位；期初期末库存；干湿基；各自含量；路线；期间；供应者 | 计量、称重、采购、工单、取样和处理者单据；覆盖拒收及返工负担。 | MJ for energy; kg for mass | per batch and meter interval | 同一生产期 | 实际工厂与交付配置 | 分配交换量 / 验收单元数量 | 校准、采样、库存、分配和不确定度证据 |

在单一配置和共同期间内，Q 是包含拒收及返工消耗的分配交换量，N 是验收铲数量，M 是经校准验收净质量之和除以 N。采集 q_item = Q/N 并用 normalize_mass 转换；因此 q_ref = Q/验收净质量之和。不得平均不同铲变型，将毛包装或拒收质量加入分母，或把制造商额定重量当作实测 M。库存与在制品按期间及交付配置一致分配。

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | all inventory rows | q_ref = q_item / M; q_item = 每台验收成品单元的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

按同一场址期间和单位核对公用工程：外购输入加实际自发电减输出和储能变化，等于已分配制造、表面处理、装配和测试需求加尚未分配的公共剩余量及有证据的转换损失。公共服务卡仅承载该未分配剩余量。负剩余量需调查期间对齐、校准、分配及综合不确定度；不得截断为零。自发电的燃料、水和排放计入一次，内部电力转移成对记录；不得再外购该部分电力。

按各项实际水含量闭合水平衡：输入水分、稀释、淬火或清洗水、产品及流体留存水、湿废料或污泥、废水、蒸发和库存变化；纳入实际反应产生或消耗的水。同一边界内成对内部回用转移相消。对每种含金属或物种，输入、产品、废料、熔渣、捕集粉尘、污泥、废水、排放及库存各项均使用该项自身的牌号含量、浓度、干湿转换及数量；物种改变时纳入反应。钢毛质量不是含铁质量，废水质量不是金属质量。依据综合计量、采样及分配不确定度调查闭合，不设普适容差或成品率。

对二甲苯或其他实际溶剂，区分涂料内含溶剂与单独稀释剂、产品留存、回收、捕集介质含量、库存变化、实际销毁及非空气废物。仅经核对且有测量支持的物种特定剩余量可作空气排放；捕集或回收溶剂不是空气排放。燃烧碳需实际燃料含碳量及其他含碳输出；CO、NOx 和颗粒金属需各自测量或适用排放证据。

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all exchanges | 实际类型、化学或部件身份、供货状态、地域、单位及处理接口；不得用混合金属候选替代精确钢牌号。 | 证书、安全数据表、直接身份审查 |
| quality_complete | data package | 披露每项已采集、计算、不适用、未知及缺失状态，逐行 UUID 和范围缺口；未知不得当零。 | 路线矩阵、原始记录、计量和不确定度 |

## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| validate_configuration | 参考产品、验收、质量分母和全部清单必须属于同一交付配置；证明主机和单售零件排除、附件选件纳入状态。 | dymax-dozer-guide; un-cpc3-blades |
| validate_balance | 核对各原子交换、上游一次计入、水及逐金属或物种平衡、公共剩余量、库存和返工；匹配实测不确定度，禁止自定普适范围。 |  |
| validate_identity | 仅采用直接确认类型、正式双语名称、属性单位、状态接口及地域的 UUID。中国中压用户电力仅在相符条件下使用；所有未解决身份或范围须披露，发布前审查。 |  |
| validate_denominator | 对每一配置及匹配期间，Q 保留拒收及返工分配负担；N 为验收完整交付铲数量，M 为经校准验收铲净质量之和 / N。q_item = Q/N，q_ref = Q/验收净质量之和。分母排除包装、拒收质量及其他铲配置；对齐库存与在制品。 |  |
| validate_utility_residual | 使用同一场址期间和单位，核对外购输入加实际自发电减输出及储能变化，与已分配制造、表面处理、装配和测试需求加公共剩余量及有证据转换损失相等。公共行仅含未分配剩余量。结合期间、校准、分配和综合不确定度调查负剩余量，禁止截断。自发电燃料、水和排放计入一次，成对内部转移相消。 |  |
| validate_water_closure | 对各含水输入输出使用各自实际水含量及干湿基：输入水分、新水、稀释或淬火或清洗水、产品及流体留存水、湿废料或污泥、废水、蒸发、期初期末库存以及实际反应产水或耗水。成对内部回用相消。按综合计量、采样及分配不确定度调查闭合，不设普适容差。 |  |
| validate_contained_species | 对每一种金属或化学物种，输入、产品、废料、熔渣、捕集粉尘、污泥、废水、排放及期初期末库存各项独立匹配自身牌号含量、浓度、数量及干湿转换。纳入实际物种反应，成对内部回用相消。钢或废水毛质量绝不等于含铁或物种质量。依据综合计量、采样及分配不确定度闭合，不用虚构成品率。 |  |
| validate_solvent_emissions | 逐一核对实际涂料内含溶剂与外加稀释剂，分别对照产品留存、回收、捕集介质含量、库存、实际销毁及非空气废物，之后才按实测逐物种分配空气排放。捕集或回收溶剂不是空气排放。燃料碳平衡可在匹配燃料含碳量及其他碳输出后支持实际 CO2，但不能建立 CO、NOx 或金属气溶胶量；需各自适用物种证据。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 相同交付配置的制造数据，向过程或生命周期模型投影 |
| excluded_use | 土方使用服务、主机制造、通用铲容量等效或单售零件的未审查替代 |
| required_metadata | 型号、交付清单、自制外购、路线、净质量、期间、工厂、供应接口和计量协议 |
| required_quality_disclosure | 未解决 UUID、缺失实证范围、条件性路线、分配和不确定度 |
| update_trigger | 设计、牌号、耐磨配置、供应者、路线、地域或电压变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-blades | official_guidance | UNSD CPC Version 3.0 explanatory notes (2025-06-30), 44421 and 44429: https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 铲与自行式主机分类边界；分类不证明制造工艺 |
| dymax-abrasion-blades | handbook | Dymax Heavy Duty Abrasion U Blades: https://dymaxinc.com/attachments/abrasion-u-dozer-blades/ | 实际耐磨材料选项、边刃及现有推臂接口，非普适配方 |
| dymax-dozer-guide | handbook | Dymax Dozer Product Guide, coal U-blade table and variant pages: https://dymaxinc.com/wp-content/uploads/2024/05/Dozer-Product-Guide-web.pdf | 实际型号、衬板、容量及重量变型；不设通用质量 |
| cat-blade-components | handbook | Caterpillar, Your Cat Dozer Blade Level Indicator: https://www.cat.com/en_US/articles/for-owners/small-dozers/small-dozer-blade-level-indicator.html | OEM 铲型、连接及控制部件；不代表每个销售配置 |
| cat-moldboard-patent | literature | Caterpillar Inc., WO2009002409A1 (filed 2008-06-13; published 2008-12-31), detailed description and figures 2–7: https://patents.google.com/patent/WO2009002409A1/en | 制造商原始专利披露：拼板与整张板切割成形焊接的替代路线；非全行业工艺 |
