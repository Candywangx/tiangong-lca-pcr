---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.backhoe-loader
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 配置轮式挖掘装载机制造

## 1. 范围与适用性

覆盖新完整自行轮式挖掘装载机工厂制造：同一底盘集成前装载臂及铲斗、有限摆动而非360度回转上部结构的后挖掘动臂及斗杆铲斗、支腿、操作站、传动及液压操控系统。代表路线采用柴油发动机及封闭驾驶室；变体须声明各自物料清单、操作站、选项及 M。纯电机器须先单独展开路线才能复用。JCB2015 和 Deere2023 历史原件支持配置实例，不提供通用结构、数量或当前生产证明。排除仅前装载机器、360度回转挖掘机、单独交付农具的农业牵引拖拉机、其他未列名土方/压实/钻孔机器、单售部件、再制造、客户挖掘装载服务、土方量、使用期燃油、维护、寿命及报废。制造质量为分析单位，不是挖掘生产率。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.backhoe-loader |
| classification_refs | CPC 3.0 44427; 较窄候选边界；不声明映射已接受 |
| covered_products | 带集成前后工作装置及支腿的完整配置轮式挖掘装载机 |
| excluded_products | 仅前装载机器；回转挖掘机；其他土方机械；部件；客户服务 |
| representative_product | 一种声明柴油轮式挖掘装载机，配置封闭驾驶室及指定安装铲斗 |
| production_route | 收货及物料清单控制；实际结构制造及表面处理；采购模块集成；首注；型号专属功能验收；可选保护 |
| market_state | 工厂边界验收新完整配置机器，声明余留油液及燃油 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造一种完整声明轮式挖掘装载机配置 |
| How much | 1 kg 验收净整机；实际实测 M kg 代表一台完整机器 |
| How well | 满足实际配置专属结构、转向及制动、液压泄漏/压力/功能、装载/挖掘/支腿、电气操控及功能验收计划；保留实际限值及结果，不设通用载荷、伸距或稳定阈值 |
| How long or cycle | 一次制造交付；不规定寿命或土方作业循环 |
| reference_flow_link | `finished_machine` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 自动推动挖土机、挖掘机和斗式装载机，前端斗式装载机和上部结构可转动360度的机械除外，未另列明的用于土壤、矿物或矿石的机动移动、平土、平整、铲运、开挖、捣固、夯实、开采或钻孔机械 `0ce8b891-f49b-4709-8df2-931146a4bf91` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号及序列；一种配置及物料清单修订；轮系/驱动/转向布置；发动机/变速箱/桥；装载臂及前铲斗；后挖掘动臂/斗杆/铲斗及摆动限位；支腿设计；液压泵/阀及各液压缸设计；轮胎及轮辋；封闭驾驶室或棚型状态；操控；供货完整性；安装选项及配重；验收计划及结果；油液浓度及余留燃油加注状态；实测净 M；场址/期间/边界；包装/操作员/土方/散装备件排除 |

在数据集元数据或等效注释声明全部限定。称量验收配置整机，包含安装铲斗、选项及实际余留油液燃油；排除操作员、载荷、包装及运输工装。JCB 实际第21页及 Deere 实际第7页工作重量包含燃油及操作员且因选项不同。不能将这些数值当净 M，也不能扣除杜撰操作员或燃油质量。等质量不能证明等挖掘或装载能力。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `electricity_energy` | electricity_fabrication; electricity_finishing; electricity_assembly; electricity_factory_test | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留表计 kWh；按1 kWh =3.6 MJ 换算并匹配实际电压及来源。 |
| `fluid_mass` | engine_oil; hydraulic_oil; transmission_oil; grease; coolant; diesel; tap_water; spent_engine_oil; wash_wastewater | 质量 | kg | 称量实际配方或溶液。仅体积记录须有依据密度及温度和明确换算。交付余留加注与燃烧燃油及外运废物区分；避免重复采购混合物已含组分。 |
| `water_resource_volume` | groundwater | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 按 cp_water_resource 计量淡水井取水；分子 m3 与 kg 整机区分。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 指定原料及分别指定成品总成收至挖掘装载机工厂 |
| starting_condition_role | 前景制造投入，单独链接供应商生产及来料运输 |
| product_classification_scope | CPC44427 挖掘装载机子集，排除其他未列名机器 |
| recursive_input_rule | 采购完整机器为供应商边界投入，不重复装配模块。采购成品底盘/臂/液压缸替代本地原料及其制造 |
| upstream_dataset_requirement | 匹配牌号及状态、采购完整性、轮胎及液压缸设计、油液组成、能源来源、地区及供货/运输/接收边界 |
| disclosure | 本前景模块不是完整摇篮到工厂门。声明实际现场工序、自制外购、外包、共享服务、包装及缺失供货/运输/处理链接 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_operations` | manufacturing | 纳入收货检查及实际板材切割成形、连接、铰接接口加工、打磨/清洗/涂装、传动/液压/工作装置装配、接线、首注、验收、应归属不合格及返工和发运保护。JCB2015 焊接事实不规定每厂机器人焊接。采购部件不能推断厂内铸造、热处理、液压缸或发动机制造；实际本地及外包路线须各自交换及边界。 | jcb-backhoe-loader-2015 |
| `boundary_bom` | all inventory rows | 将每个实际物料清单项及工序对应一个原子交换或有依据排除。存在时展开单独供货冷却散热器、油箱、排气后处理、滤器、密封、销、软管接头、布线传感器、制动、转向、座椅、玻璃及配重；不能重复采购发动机/驾驶室/桥已含内部件。逐项添加实际清洗剂、焊接气体组分、供热燃料、DEF 配方、试验工装耗材、废物及监测排放。初始卡片不是通用完整物料清单。 |  |
| `boundary_test` | factory_test | 记录实际转向及制动、液压泄漏及压力、前后工作装置动作、支腿、操控及功能验收；按实际计划保留施加载荷、试验时长及结果。仅按实际执行纳入工厂发动机运转、电气辅助、加注补加排空及复试。工厂试验燃油不是使用寿命曲线；不设通用试验时长或挖掘循环。 |  |
| `boundary_semantic` | reference_product | 独立铲斗 PCR 覆盖单独交付附件并排除主机；农用拖拉机 PCR 覆盖农业牵引单元；液压缸 PCR 覆盖单独供货缸。本集成前后工作装置挖掘装载机制造边界不重复这些产品。保持旧分类脚手架及 ID 不变，不声明已接受映射。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | 结构制造 | conditional | 本场址实际切割、成形、连接及机加工 | 前景阶段；内部在制品保持模块内 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| `finishing` | 表面预处理及涂装 | conditional | 实际清洗、打磨或涂装路线 | 前景阶段；内部在制品保持模块内 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| `assembly` | 配置整机集成 | required | 每种完整声明配置 | 前景阶段；内部在制品保持模块内 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| `factory_test` | 工厂试验及验收 | required | 型号专属验收；有动力试验仅按实际执行纳入 | 前景阶段；内部在制品保持模块内 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| `packout` | 发运保护 | conditional | 实际发运包装 | 前景阶段；内部在制品保持模块内 | 每 1 kg 参考流；采集基准为每台验收成品机器 |

| 工序 | 阶段 | 必需实际路线记录 |
| --- | --- | --- |
| 收货及自制外购 | assembly | 供货完整性、原料牌号、部件身份、交付加注及安装物料清单 |
| 结构制造 | fabrication | 仅实际本地时切割成形连接底盘及臂；记录设置、规程、净原料、加工余量、耗材及分类废物 |
| 表面预处理及涂装 | finishing | 实际打磨/漂洗/涂装路线；一种化学配方及回收平衡、实际固化热及电 |
| 机械及液压集成 | assembly | 传动；前后工作装置；各液压缸功能；泵阀软管；操作站及布线；紧固及对中记录；供货内部件排除 |
| 加注及验收 | factory_test | 首注、实际燃烧及余留、泄漏及功能试验、安装选项、验收/不合格/复试、完整净称重 |
| 发运保护 | packout | 实际保护质量与整机 M 及散装备件分开 |

### 过程： 结构制造 (`fabrication`)

#### 输入

##### 产品流

###### 热轧非合金结构钢板 (`steel_plate`)

仅用于厂内实际制造的一种声明牌号及厚度。称量净领用及退回；采购成品底盘或臂替代其原料路线。制造商描述钢材不能证明合金牌号。

- 选定流： 热轧非合金结构钢板
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

###### ER70S-6 实心钢焊丝 (`weld_wire`)

仅在实际焊接规程使用本实心焊丝时纳入。记录证书、直径、净领用及回收焊丝；不规定必需填充牌号或焊接消耗因子。

- 选定流： ER70S-6 实心钢焊丝
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

###### 纯二氧化碳焊接保护气 (`weld_co2`)

仅用于实际纯 CO2 焊接规程。称量气体净领用或按实际压力、温度及有依据密度换算实测体积。混合气须各有明确组分及交付记录；不规定必需焊接气体。

- 选定流： 纯二氧化碳焊接保护气
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

计量本实际阶段并包含应归属返工。本身份为用户端低于1kV 电网平均交流电；其他电压或来源须匹配独立交换。

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

#### 输出

##### 废物流

###### 未处理洁净非合金钢边角料 (`steel_offcut`)

称量声明板材路线实际分类外运洁净边角料。内部回用不是外运；含油切屑及焊接飞溅物分开。

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

###### 收集的干态钢打磨粉尘 (`collected_steel_dust`)

仅用于实际捕集并交付接收方的粉尘；记录钢材牌号、磨料污染及干湿状态。它与空气排放分开。

- 选定流： 收集的干态钢打磨粉尘
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

###### 排入空气的粒径未特指颗粒物 (`particulate_fabrication`)

仅在实际治理后监测证实粒径及空气子介质未特指颗粒物质量时纳入。保留采样及排气体积基准。指定粒径须有各自身份；制造或发动机试验本身不能证明排放。

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

### 过程： 表面预处理及涂装 (`finishing`)

#### 输入

##### 产品流

###### 低压电网电力 (`electricity_finishing`)

计量本实际阶段并包含应归属返工。本身份为用户端低于1kV 电网平均交流电；其他电压或来源须匹配独立交换。

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

仅用于一种实际干粉配方。称量扣除退回及回收后的净领用并记录实际固化能耗。其他涂料组成及热源须逐项列行；本路线不是必需。

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

仅在实际表面处理消耗本单一结合剂、等级及设计时纳入。按有依据作业记录将实测更换质量归属服务工单。原料氧化铝不是成品砂盘。

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

###### 外供饮用水等级自来水 (`tap_water`)

仅用于实际外供饮用水等级水表面漂洗。测量 kg 或保留实际密度及温度用于换算。不能重复计算外购预混冷却液内水或相同井取水。

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

###### 取用的淡水地下水 (`groundwater`)

仅用于本路线工厂实际淡水井取水。计量 m3、保留国家及场址并展开泵送及处理投入。内部循环不是新增取水；同一水不能再计自来水供给。

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

###### 废氧化铝磨料砂盘 (`spent_disc`)

称量实际外运废砂盘并与粉尘分开。保留结合剂、磨料及附着钢材；将公开抛光介质类别限定为本一种设计。

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

称量内部回收后实际外运未回收固体过喷料；保留配方及接收方。不设通用涂料损失率。

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

###### 含油钢件清洗废水 (`wash_wastewater`)

仅用于实际收集并外运处理水基清洗废液。记录溶液质量、油含量、清洗化学品及接收边界；处理后环境排放须单列实测物质及介质。

- 选定流： 含油钢件清洗废水
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_waste`
- 来源：

### 过程： 配置整机集成 (`assembly`)

#### 输入

##### 产品流

###### 低压电网电力 (`electricity_assembly`)

计量本实际阶段并包含应归属返工。本身份为用户端低于1kV 电网平均交流电；其他电压或来源须匹配独立交换。

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

###### 成品焊接钢制挖掘装载机底盘 (`chassis`)

记录一种实际零件号、设计、规格、实测交付质量及包含子件。仅计安装的单独供货项；排除采购总成已含内部件。采购结构时替代本地原料及制造。驾驶室须保留玻璃、座椅及操控包含；开放棚型须有各自行。轮胎及轮辋分开且不同尺寸分开；铲斗仅按声明安装配置计入。

- 选定流： 成品焊接钢制挖掘装载机底盘
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： jcb-backhoe-loader-2015

###### 成品前装载臂总成 (`loader_arm`)

记录一种实际零件号、设计、规格、实测交付质量及包含子件。仅计安装的单独供货项；排除采购总成已含内部件。采购结构时替代本地原料及制造。驾驶室须保留玻璃、座椅及操控包含；开放棚型须有各自行。轮胎及轮辋分开且不同尺寸分开；铲斗仅按声明安装配置计入。

- 选定流： 成品前装载臂总成
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： jcb-backhoe-loader-2015

###### 成品后挖掘动臂 (`backhoe_boom`)

记录一种实际零件号、设计、规格、实测交付质量及包含子件。仅计安装的单独供货项；排除采购总成已含内部件。采购结构时替代本地原料及制造。驾驶室须保留玻璃、座椅及操控包含；开放棚型须有各自行。轮胎及轮辋分开且不同尺寸分开；铲斗仅按声明安装配置计入。

- 选定流： 成品后挖掘动臂
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品后挖掘斗杆 (`dipper`)

记录一种实际零件号、设计、规格、实测交付质量及包含子件。仅计安装的单独供货项；排除采购总成已含内部件。采购结构时替代本地原料及制造。驾驶室须保留玻璃、座椅及操控包含；开放棚型须有各自行。轮胎及轮辋分开且不同尺寸分开；铲斗仅按声明安装配置计入。

- 选定流： 成品后挖掘斗杆
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品钢制支腿 (`stabilizer_leg`)

记录一种实际零件号、设计、规格、实测交付质量及包含子件。仅计安装的单独供货项；排除采购总成已含内部件。采购结构时替代本地原料及制造。驾驶室须保留玻璃、座椅及操控包含；开放棚型须有各自行。轮胎及轮辋分开且不同尺寸分开；铲斗仅按声明安装配置计入。

- 选定流： 成品钢制支腿
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品柴油发动机总成 (`diesel_engine`)

记录一种实际零件号、设计、规格、实测交付质量及包含子件。仅计安装的单独供货项；排除采购总成已含内部件。采购结构时替代本地原料及制造。驾驶室须保留玻璃、座椅及操控包含；开放棚型须有各自行。轮胎及轮辋分开且不同尺寸分开；铲斗仅按声明安装配置计入。

- 选定流： 成品柴油发动机总成
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品动力换挡变速箱总成 (`transmission`)

记录一种实际零件号、设计、规格、实测交付质量及包含子件。仅计安装的单独供货项；排除采购总成已含内部件。采购结构时替代本地原料及制造。驾驶室须保留玻璃、座椅及操控包含；开放棚型须有各自行。轮胎及轮辋分开且不同尺寸分开；铲斗仅按声明安装配置计入。

- 选定流： 成品动力换挡变速箱总成
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品可转向前驱动桥 (`front_axle`)

记录一种实际零件号、设计、规格、实测交付质量及包含子件。仅计安装的单独供货项；排除采购总成已含内部件。采购结构时替代本地原料及制造。驾驶室须保留玻璃、座椅及操控包含；开放棚型须有各自行。轮胎及轮辋分开且不同尺寸分开；铲斗仅按声明安装配置计入。

- 选定流： 成品可转向前驱动桥
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品后驱动桥 (`rear_axle`)

记录一种实际零件号、设计、规格、实测交付质量及包含子件。仅计安装的单独供货项；排除采购总成已含内部件。采购结构时替代本地原料及制造。驾驶室须保留玻璃、座椅及操控包含；开放棚型须有各自行。轮胎及轮辋分开且不同尺寸分开；铲斗仅按声明安装配置计入。

- 选定流： 成品后驱动桥
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品液压换向阀组 (`valve_block`)

记录一种实际零件号、设计、规格、实测交付质量及包含子件。仅计安装的单独供货项；排除采购总成已含内部件。采购结构时替代本地原料及制造。驾驶室须保留玻璃、座椅及操控包含；开放棚型须有各自行。轮胎及轮辋分开且不同尺寸分开；铲斗仅按声明安装配置计入。

- 选定流： 成品液压换向阀组
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品钢丝增强橡胶液压软管 (`hydraulic_hose`)

记录一种实际零件号、设计、规格、实测交付质量及包含子件。仅计安装的单独供货项；排除采购总成已含内部件。采购结构时替代本地原料及制造。驾驶室须保留玻璃、座椅及操控包含；开放棚型须有各自行。轮胎及轮辋分开且不同尺寸分开；铲斗仅按声明安装配置计入。

- 选定流： 成品钢丝增强橡胶液压软管
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品封闭式挖掘装载机驾驶室 (`operator_cab`)

记录一种实际零件号、设计、规格、实测交付质量及包含子件。仅计安装的单独供货项；排除采购总成已含内部件。采购结构时替代本地原料及制造。驾驶室须保留玻璃、座椅及操控包含；开放棚型须有各自行。轮胎及轮辋分开且不同尺寸分开；铲斗仅按声明安装配置计入。

- 选定流： 成品封闭式挖掘装载机驾驶室
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： deere-backhoe-loader-2023

###### 成品前橡胶充气轮胎 (`front_tyre`)

记录一种实际零件号、设计、规格、实测交付质量及包含子件。仅计安装的单独供货项；排除采购总成已含内部件。采购结构时替代本地原料及制造。驾驶室须保留玻璃、座椅及操控包含；开放棚型须有各自行。轮胎及轮辋分开且不同尺寸分开；铲斗仅按声明安装配置计入。

- 选定流： 成品前橡胶充气轮胎
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品后橡胶充气轮胎 (`rear_tyre`)

记录一种实际零件号、设计、规格、实测交付质量及包含子件。仅计安装的单独供货项；排除采购总成已含内部件。采购结构时替代本地原料及制造。驾驶室须保留玻璃、座椅及操控包含；开放棚型须有各自行。轮胎及轮辋分开且不同尺寸分开；铲斗仅按声明安装配置计入。

- 选定流： 成品后橡胶充气轮胎
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品前钢制轮辋 (`front_rim`)

记录一种实际零件号、设计、规格、实测交付质量及包含子件。仅计安装的单独供货项；排除采购总成已含内部件。采购结构时替代本地原料及制造。驾驶室须保留玻璃、座椅及操控包含；开放棚型须有各自行。轮胎及轮辋分开且不同尺寸分开；铲斗仅按声明安装配置计入。

- 选定流： 成品前钢制轮辋
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品后钢制轮辋 (`rear_rim`)

记录一种实际零件号、设计、规格、实测交付质量及包含子件。仅计安装的单独供货项；排除采购总成已含内部件。采购结构时替代本地原料及制造。驾驶室须保留玻璃、座椅及操控包含；开放棚型须有各自行。轮胎及轮辋分开且不同尺寸分开；铲斗仅按声明安装配置计入。

- 选定流： 成品后钢制轮辋
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品铅酸起动蓄电池 (`starter_battery`)

记录一种实际零件号、设计、规格、实测交付质量及包含子件。仅计安装的单独供货项；排除采购总成已含内部件。采购结构时替代本地原料及制造。驾驶室须保留玻璃、座椅及操控包含；开放棚型须有各自行。轮胎及轮辋分开且不同尺寸分开；铲斗仅按声明安装配置计入。

- 选定流： 成品铅酸起动蓄电池
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品钢制前装载铲斗 (`front_bucket`)

记录一种实际零件号、设计、规格、实测交付质量及包含子件。仅计安装的单独供货项；排除采购总成已含内部件。采购结构时替代本地原料及制造。驾驶室须保留玻璃、座椅及操控包含；开放棚型须有各自行。轮胎及轮辋分开且不同尺寸分开；铲斗仅按声明安装配置计入。

- 选定流： 成品钢制前装载铲斗
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品钢制后挖掘铲斗 (`rear_bucket`)

记录一种实际零件号、设计、规格、实测交付质量及包含子件。仅计安装的单独供货项；排除采购总成已含内部件。采购结构时替代本地原料及制造。驾驶室须保留玻璃、座椅及操控包含；开放棚型须有各自行。轮胎及轮辋分开且不同尺寸分开；铲斗仅按声明安装配置计入。

- 选定流： 成品钢制后挖掘铲斗
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品淬硬钢制铰接销 (`pivot_pin`)

记录一种实际零件号、设计、规格、实测交付质量及包含子件。仅计安装的单独供货项；排除采购总成已含内部件。采购结构时替代本地原料及制造。驾驶室须保留玻璃、座椅及操控包含；开放棚型须有各自行。轮胎及轮辋分开且不同尺寸分开；铲斗仅按声明安装配置计入。

- 选定流： 成品淬硬钢制铰接销
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

记录一种实际零件号、设计、规格、实测交付质量及包含子件。仅计安装的单独供货项；排除采购总成已含内部件。采购结构时替代本地原料及制造。驾驶室须保留玻璃、座椅及操控包含；开放棚型须有各自行。轮胎及轮辋分开且不同尺寸分开；铲斗仅按声明安装配置计入。

- 选定流： 成品钢制六角头螺栓
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品液压柱塞泵 (`hydraulic_pump`)

称量一种实际成品液体泵设计并保留额定压力及流量、驱动接口和已含子件。公开液体泵类别限定为本液压柱塞泵；完整动力单元或发动机已含泵不是另一次独立领用。

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

###### 前装载举升液压缸 (`loader_lift_cylinder`)

本功能中一种单独供货成品双作用液压缸设计。保留缸径、杆径、行程、密封、接头、交付油状态、实测质量及实际安装数量；公开线性缸宽类别限定为本设计。不同设计须分行，不能汇总液压缸领用。

- 选定流： 线性作用（气缸）水力发动机和风力发动机及马达 `aea61250-788d-4a2b-9c63-ff24b8113469`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： deere-backhoe-loader-2023

###### 前装载铲斗液压缸 (`loader_bucket_cylinder`)

本功能中一种单独供货成品双作用液压缸设计。保留缸径、杆径、行程、密封、接头、交付油状态、实测质量及实际安装数量；公开线性缸宽类别限定为本设计。不同设计须分行，不能汇总液压缸领用。

- 选定流： 线性作用（气缸）水力发动机和风力发动机及马达 `aea61250-788d-4a2b-9c63-ff24b8113469`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： deere-backhoe-loader-2023

###### 后挖掘动臂液压缸 (`backhoe_boom_cylinder`)

本功能中一种单独供货成品双作用液压缸设计。保留缸径、杆径、行程、密封、接头、交付油状态、实测质量及实际安装数量；公开线性缸宽类别限定为本设计。不同设计须分行，不能汇总液压缸领用。

- 选定流： 线性作用（气缸）水力发动机和风力发动机及马达 `aea61250-788d-4a2b-9c63-ff24b8113469`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： deere-backhoe-loader-2023

###### 后挖掘斗杆液压缸 (`backhoe_dipper_cylinder`)

本功能中一种单独供货成品双作用液压缸设计。保留缸径、杆径、行程、密封、接头、交付油状态、实测质量及实际安装数量；公开线性缸宽类别限定为本设计。不同设计须分行，不能汇总液压缸领用。

- 选定流： 线性作用（气缸）水力发动机和风力发动机及马达 `aea61250-788d-4a2b-9c63-ff24b8113469`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： deere-backhoe-loader-2023

###### 后挖掘铲斗液压缸 (`backhoe_bucket_cylinder`)

本功能中一种单独供货成品双作用液压缸设计。保留缸径、杆径、行程、密封、接头、交付油状态、实测质量及实际安装数量；公开线性缸宽类别限定为本设计。不同设计须分行，不能汇总液压缸领用。

- 选定流： 线性作用（气缸）水力发动机和风力发动机及马达 `aea61250-788d-4a2b-9c63-ff24b8113469`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： deere-backhoe-loader-2023

###### 后挖掘摆动液压缸 (`backhoe_swing_cylinder`)

本功能中一种单独供货成品双作用液压缸设计。保留缸径、杆径、行程、密封、接头、交付油状态、实测质量及实际安装数量；公开线性缸宽类别限定为本设计。不同设计须分行，不能汇总液压缸领用。

- 选定流： 线性作用（气缸）水力发动机和风力发动机及马达 `aea61250-788d-4a2b-9c63-ff24b8113469`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： deere-backhoe-loader-2023

###### 支腿液压缸 (`stabilizer_cylinder`)

本功能中一种单独供货成品双作用液压缸设计。保留缸径、杆径、行程、密封、接头、交付油状态、实测质量及实际安装数量；公开线性缸宽类别限定为本设计。不同设计须分行，不能汇总液压缸领用。

- 选定流： 线性作用（气缸）水力发动机和风力发动机及马达 `aea61250-788d-4a2b-9c63-ff24b8113469`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： deere-backhoe-loader-2023

###### 成品钢制滚珠轴承 (`ball_bearing`)

仅用于一种指定单独供货滚珠轴承设计。记录精度、尺寸、润滑及安装质量；不重复采购桥、发动机或液压缸已含轴承。

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

###### 配方矿物发动机润滑油 (`engine_oil`)

仅在实际加注规格声明本配方时纳入。称量净首注及试验补加；体积换算时保留等级、混合浓度及基准、密度及温度。识别供应商已含油液及 M 内最终余留质量；不重复供应商加注或采购混合液组分。其他配方须分行。

- 选定流： 配方矿物发动机润滑油
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

###### 配方矿物液压油 (`hydraulic_oil`)

仅在实际加注规格声明本配方时纳入。称量净首注及试验补加；体积换算时保留等级、混合浓度及基准、密度及温度。识别供应商已含油液及 M 内最终余留质量；不重复供应商加注或采购混合液组分。其他配方须分行。

- 选定流： 配方矿物液压油
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

###### 配方矿物变速箱润滑油 (`transmission_oil`)

仅在实际加注规格声明本配方时纳入。称量净首注及试验补加；体积换算时保留等级、混合浓度及基准、密度及温度。识别供应商已含油液及 M 内最终余留质量；不重复供应商加注或采购混合液组分。其他配方须分行。

- 选定流： 配方矿物变速箱润滑油
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

###### 锂皂矿物油润滑脂 (`grease`)

仅在实际加注规格声明本配方时纳入。称量净首注及试验补加；体积换算时保留等级、混合浓度及基准、密度及温度。识别供应商已含油液及 M 内最终余留质量；不重复供应商加注或采购混合液组分。其他配方须分行。

- 选定流： 锂皂矿物油润滑脂
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

###### 预混 50% 乙二醇水基发动机冷却液 (`coolant`)

仅在实际加注规格声明本配方时纳入。称量净首注及试验补加；体积换算时保留等级、混合浓度及基准、密度及温度。识别供应商已含油液及 M 内最终余留质量；不重复供应商加注或采购混合液组分。其他配方须分行。

- 选定流： 预混 50% 乙二醇水基发动机冷却液
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

### 过程： 工厂试验及验收 (`factory_test`)

#### 输入

##### 产品流

###### 低压电网电力 (`electricity_factory_test`)

计量本实际阶段并包含应归属返工。本身份为用户端低于1kV 电网平均交流电；其他电压或来源须匹配独立交换。

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

###### 声明纯化石源柴油 (`diesel`)

仅用于工厂实际加注及有动力验收。称量应归属净领用，包括试验消耗燃油及声明最终油箱余留燃油；保留供货来源及混合证书、升换算实际密度。余留燃油计声明 M；不规定满箱，不用额定功率燃油因子或客户工况。其他混合须有各自身份及化石、生物源归属。

- 选定流： 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_fuel。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_fuel`
- 来源：

#### 输出

##### 产品流

###### 验收完整配置轮式挖掘装载机 (`finished_machine`)

型号专属功能、液压、转向及制动、稳定装置及验收检查后的参考产出。包含声明安装前后铲斗、支腿、选项和余留油液及燃油。排除操作员、土方载荷、包装、运输工装和散装备件。公开已制造成品 CPC44427 类别限定为本双功能完整机器。

- 选定流： 自动推动挖土机、挖掘机和斗式装载机，前端斗式装载机和上部结构可转动360度的机械除外，未另列明的用于土壤、矿物或矿石的机动移动、平土、平整、铲运、开挖、捣固、夯实、开采或钻孔机械 `0ce8b891-f49b-4709-8df2-931146a4bf91`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 1 千克
- 数值来源模式： fixed_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_mass`
- 来源： jcb-backhoe-loader-2015; deere-backhoe-loader-2023

##### 废物流

###### 外运废矿物发动机润滑油 (`spent_engine_oil`)

仅在制造或试验实际排油并外运时纳入。称量污染油并保留组成及接收方；交付余留油不是废物。不规定必需排油或后续客户换油。

- 选定流： 废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
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

###### 排入空气的粒径未特指颗粒物 (`particulate_factory_test`)

仅在实际治理后监测证实粒径及空气子介质未特指颗粒物质量时纳入。保留采样及排气体积基准。指定粒径须有各自身份；制造或发动机试验本身不能证明排放。

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

###### 排入空气的化石源二氧化碳 (`fossil_co2`)

仅在实际治理后测量或有依据燃料专属碳平衡确认化石 CO2 排入空气且子介质未特指时纳入。保留碳来源、实际燃烧燃料及平衡项；余留燃油未燃烧。不采用通用氧化或排放因子，不用长期空气或土壤身份替代。

- 选定流： 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_emission`
- 来源：

###### 排入空气的一氧化氮 (`nitric_oxide`)

仅在实际物质区分及治理后监测确认本单一物质及实际空气子介质时纳入。记录浓度、排气体积及相同采样基准。NO、NO2、N2O 及以 NO2 当量报告汇总 NOx 均不同；不杜撰拆分或必然排放。

- 选定流： 一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_emission`
- 来源：

###### 排入空气的二氧化氮 (`nitrogen_dioxide`)

仅在实际物质区分及治理后监测确认本单一物质及实际空气子介质时纳入。记录浓度、排气体积及相同采样基准。NO、NO2、N2O 及以 NO2 当量报告汇总 NOx 均不同；不杜撰拆分或必然排放。

- 选定流： 排入空气的二氧化氮
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_emission`
- 来源：

### 过程： 发运保护 (`packout`)

#### 输入

##### 产品流

###### C 型瓦楞纸板 (`cardboard`)

仅用于实际含再生纤维且纤维至少80% 的 C 型发运保护；称量净领用并排除于 M。其他规格须另列交换。

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

仅用于实际非泡沫、非自粘、未增强 LDPE 保护。称量净领用；保留等级并排除于 M，不假定再生比例或化石来源。

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

#### 输出

## 7. 分配与联产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_direct` | shared_operations | 先按工单、阶段及配置分拆。直接归属可追溯原料及组件领用、制造、返工及试验。不同驾驶室、铲斗、传动及选项配置不能共享假定每台清单。 |  |
| `allocation_physical` | shared_energy_support | 使用实测因果驱动：实际负载及功率与制造或装配试验机时、涂装批次装载、服务工单耗材使用，或燃油领用/燃烧/余留。核对归属与实测总量及同配置验收数。无依据关系须审查及敏感性；不默认质量拆分、台数均分或经济百分比。 |  |
| `allocation_recovery` | rejects_waste | 在同期间每同配置验收产出中包含应归属失败整机、不合格件、返工及复试。扣除有记录退回及内部回收。废物外运不自动获得避免原生材料抵扣。真实联产品须记录市场及边界决策。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | factory_test | finished_machine | 校准称重及验收 | 型号；配置；序列号；验收净质量 M；安装铲斗选项；余留油液燃油；操作员土方包装排除 | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 每台或有依据配置专属样本 | 同一声明生产期间；披露缺口 | 声明制造场址 | 每台验收净质量 | 校准；安装物料清单；加注状态；验收；采样 |
| cp_configuration | all processes | actual route | 物料清单及路线核查 | 一种配置；物料清单修订；供货完整性；自制外购；各缸轮胎铲斗设计；验收数；边界；不合格返工 | 将每个实际项及工序对应一行或有依据排除；核对前后工作装置、支腿、操作站、传动、液压操控系统及安装选项。保留配置专属验收限值及结果和加注余留状态。 | record | 每次变化及批次 | 同一声明生产期间；披露缺口 | 声明制造场址 | 一份一致配置记录 | 物料清单；供货；路线；验收；外包 |
| cp_material | fabrication; finishing; assembly; packout | individual material | 原料配方称重领用 | 一种牌号设计配方；净领用退回；在制品；回收；浓度基准；密度温度；验收数 | 称量应归属净领用并核对库存、退回、回收及服务工单。保留供货组成及交付状态。仅按有依据实际密度温度换算体积；核对供应商加注并排除外购预混物已含组分。不设标准消耗或稀释因子。 | kg | 每次领用及批次平衡 | 同一声明生产期间；披露缺口 | 声明制造场址 | 应归属物料净质量 / 同一配置的验收机器数量 | 秤；台账；安全数据表；配方；证书；密度 |
| cp_parts | assembly | single finished component | 收货称重及装配清单 | 一种零件号设计；实际数量；质量；包含子件；交付加注；安装状态；验收数 | 使用实测交付质量或经核验批次专属数量质量记录。核对各液压缸、轮胎轮辋、铲斗及传动设计、包含子件及安装。不用发动机功率、铲斗容积或液压排量质量因子；采购总成排除内部件另计领用。 | kg | 每批供货及装配批次 | 同一声明生产期间；披露缺口 | 声明制造场址 | 应归属安装组件质量 / 同一配置的验收机器数量 | 秤；供货包含；安装清单；批次质量 |
| cp_energy | fabrication; finishing; assembly; factory_test | electricity | 表计及因果驱动台账 | 阶段；电压来源；表计 kWh；时段；共享总量；驱动；待机返工；验收数 | 计量实际阶段；按1 kWh =3.6 MJ 将 kWh 转 MJ。核对实测共享总量、实际负载时间驱动、待机、不合格及复试。不用额定功率乘杜撰时间数量。 | MJ | 每个时段及批次 | 同一声明生产期间；披露缺口 | 声明制造场址 | 应归属电能 / 同一配置的验收机器数量 | 表计校准；账单；驱动时间记录 |
| cp_fuel | factory_test | diesel | 燃油领用燃烧余留平衡 | 燃料证书来源混合；领用退回质量；初终油箱；试验燃烧燃油；交付余留燃油；密度温度；验收数 | 称量应归属工厂燃油净领用并核对实际试验燃烧、退回、油箱变化及最终交付余留。升换算保留实际密度，本行保留纯化石源证书。交付余留燃油在 M 中仅计一次且不当作排放计算燃烧量。 | kg | 每台试验及批次平衡 | 同一声明生产期间；披露缺口 | 声明制造场址 | 应归属净领用柴油质量 / 同一配置的验收机器数量 | 秤；燃油台账；供货证书；油箱；实际燃烧 |
| cp_waste | fabrication; finishing; factory_test | individual exported waste | 分类称重及接收凭证 | 单一废物；组成；干湿；油污染；质量；回收；接收处理；验收数 | 称量分类外运并核对库存及回收。分开洁净钢边角料、收集钢尘、废砂盘、过喷料、废油及清洗液。保留接收边界及组成和有依据质量换算。内部循环及整机余留加注不是外运废物。 | kg | 每次外运及批次平衡 | 同一声明生产期间；披露缺口 | 声明制造场址 | 应归属外运废物质量 / 同一配置的验收机器数量 | 秤；组成；接收处理依据 |
| cp_emission | fabrication; factory_test | single air substance | 治理后监测及物质区分 | 物质；来源；浓度；排气体积；时段；温压干湿；介质子介质；粒径；治理；实际燃料碳平衡项；验收数 | 由相同时段治理后浓度及排气体积计算一种物质质量，保留有依据换算及采样。燃料专属碳平衡须记录实际燃烧燃料碳、化石来源、其他产出碳及不确定性；不设通用因子。NO、NO2、N2O 及 NOx 当量不能互换。分开捕集固体及余留燃油；缺失测量不是零。 | kg | 代表性实际排放时段 | 同一声明生产期间；披露缺口 | 声明制造场址 | 应归属实测物质质量 / 同一配置的验收机器数量 | 监测；校准；物质区分；碳平衡；换算 |
| cp_water_resource | finishing | groundwater | 井表计及场址记录 | 淡水来源；水井；国家场址；m3；时段；阶段用途；回用；验收数 | 读取校准井体积表计记录工厂实际淡水地下水取用。保留地区、核对阶段用水并另计泵送处理。不将循环水当新增取水，也不将相同资源再计外供自来水。 | m3 | 每个时段及批次 | 同一声明生产期间；披露缺口 | 声明制造场址 | 应归属取水体积 / 同一配置的验收机器数量 | 表计；来源地区；阶段水平衡 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品机器的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `quality_configuration` | all inventory rows | 正值 M、交换分子及验收数使用相同配置及期间。核对安装铲斗选项、供货内部件加注、原料及成品模块替代、燃油燃烧余留、在制品、不合格及回收；保留测量采样不确定性。 | cp_mass; cp_configuration; cp_parts; cp_material; cp_fuel |
| `quality_coverage` | inventory_and_links | 披露缺失物料清单路线项、UUID、供货运输处理链接、测量及因果分配。以实际路线依据记录不适用阶段。不采用通用整机质量、寿命、燃油工况、物料产率、油液比例或排放因子。 | cp_configuration; cp_energy; cp_waste; cp_emission; cp_water_resource |
| `quality_sources` | design_evidence | JCB2015年11月第1版及 Deere2023年5月仅为历史型号实例。结构、液压缸及选项示例不能证明当前清单、通用牌号数量或工厂数量。工作重量包含操作员及燃油，不能替代实测净 M。核验实际供货及前景记录。 | jcb-backhoe-loader-2015; deere-backhoe-loader-2023 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference` | reference_flow | 要求一个正值实测 M，包含安装前后工作装置、支腿、操作站完整性、实际余留加注燃油及排除。参考产出为1kg；其他行明确按 kg、MJ 或 m3 分子使用 normalize_mass。 |  |
| `validation_bom` | inventory | 核对各实际底盘、传动、轮系转向制动、液压系统、装载、挖掘、支腿、驾驶室操控及安装选项。核验采购内部件排除、自制外购、试验复试不合格、燃油平衡及接收边界。声明完整之前须按实际清单展开初始卡片。 |  |
| `validation_identity` | all inventory rows | 核查公开类型、交付牌号状态浓度、路线地区、实际参考属性单位组及官方本地化名。NO 不是 NO2/N2O/NOx 当量；未特指空气不是长期空气或土壤；资源水不是废水；能量及部件台数不是总质量。 |  |
| `validation_claims` | dataset_claims | 无实际路线及供货运输处理覆盖时不声明完整摇篮到工厂门。制造质量不能证明土方服务等效、生产率、寿命、法规符合性或科学批准。本候选须独立方法学审查。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 配置前景轮式挖掘装载机制造模块；本标题不声明发表 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 相同声明完整配置制造，按实际 M 放大并单独声明供货运输处理链接 |
| excluded_use | 挖掘装载服务、土方量、寿命燃油、维护、其他 CPC44427 机器、散装附件套装或方法学批准 |
| required_metadata | 全部参考限定；完整配置清单；供货完整性及自制外购；各缸轮胎铲斗设计；驾驶室状态；安装选项；验收；实际 M 及油液燃油边界；场址期间边界；测量分配；供货接收链接 |
| required_quality_disclosure | 覆盖及缺失身份测量链接；采样不确定性；燃油平衡；因果分配；不合格复试；历史来源限制 |
| update_trigger | 配置、发动机传动、工作装置、驾驶室选项、供货完整性、油液组成余留、自制外购、验收计划、场址期间路线、能源燃油来源或分配变化 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| jcb-backhoe-loader-2015 | handbook | JCB, BACKHOE LOADER3CX/4CX,9999/5934 en-GB11/15 Issue1(T4F), historical November2015; physical/printed pp.5 and21. https://www.jcb.co.nz/media/qwobn5qq/3cx-eco-brochure.pdf | 焊接底盘及装载臂结构实例；工作重量包含及选项。不采用通用焊接路线、牌号、制造量、目录净质量或寿命。 |
| deere-backhoe-loader-2023 | handbook | John Deere,310 P-Tier Backhoe Loader,MB310PAU(23-05), historical May2023; physical/printed p.7, edition footer physical p.12. https://www.deere.com/assets/pdfs/common/products/sync/MB310PAU-310-p-tier-backhoe-loader.pdf | 独立装载挖掘支腿液压缸功能、操作站及轮胎选项、加注及工作重量边界。不采用液压缸数量尺寸、油液容量、工厂消耗、符合性阈值或作业因子。 |
