---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.fruit-pressing-and-crushing-machinery
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 水果压榨与破碎机械

## 1. 范围与适用性

本候选 PCR 覆盖用于葡萄酒、苹果酒或果汁制备的新完整水果果浆机械压榨或破碎粉碎机械的工厂制造。每个数据集定义一种成品机器及一种配置，包含安装支架、工作腔、压榨或破碎机构、供货防护和操控，以及声明交付附件。Speidel 记录带不锈钢压榨篮的天然橡胶膜片水压榨机；Voran 记录带可更换不锈钢筛板的历史电驱离心水果粉碎机。它们是不同设计路线，不是组合必需组件清单。排除饮料制造、水果种植及采收、出汁率、后续作业耗水耗电、使用期清洗、维护、寿命及报废；也排除单售清洗机或提升机、巴氏杀菌机、发酵设备、灌装包装机械、油籽压榨机、谷物磨机、矿山破碎机、单售零件及再制造。安装准备作业子总成仅在明确纳入一种整机物料清单时计入；单独交付设备单独建模。科学方法学审查尚待完成。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.fruit-pressing-and-crushing-machinery |
| classification_refs | CPC 3.0 44191; 候选较窄语义边界；无已接受映射 |
| covered_products | 新完整配置水果压榨机及水果破碎粉碎机 |
| excluded_products | 饮料、种植、单售清洗/提升/热处理/灌装设备、非水果破碎机及单售零件 |
| representative_product | 一种声明水压膜片压榨机；另行声明电驱离心水果粉碎机为不同配置，不是同一参考产品 |
| production_route | 收货及自制外购控制；实际金属制造；路线专属表面处理；工作机构/支架/操控安装；验收；可选包装 |
| market_state | 声明工厂边界验收完整机器，净整机质量排除散装备件及包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造一种声明完整水果压榨或破碎机械；不提供饮料加工服务 |
| How much | 1 kg 验收净完整配置机器；按一台实际整机采用实测 M 放大 |
| How well | 满足声明型号专属尺寸、食品接触材料/表面及工厂功能验收，涉及已配置压榨压力/泄漏/泄压功能，或实际粉碎机转子间隙/防护/起停检查；不设通用压力、通量或出汁率 |
| How long or cycle | 一次制造交付；不赋予作业寿命或果汁升数 |
| reference_flow_link | `finished_machine` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 制红酒、制苹果汁、制果汁或类似饮料用的压榨机、轧碎机及类似机械 `783c1d97-c517-42eb-bfde-b8ec8a7f3cda` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号；压榨或破碎功能；一种配置及物料清单修订；驱动机构及供货电动机；工作腔/压榨篮/转子/筛板；膜片胶料；金属牌号及食品接触表面；密封及滤袋；安装支架/防护/操控；适用压力或电压规格；包含附件及散装备件排除；外购总成完整性；油液及试验水排空状态；实际验收计划；实测净 M；场址；期间；起终边界；包装边界 |

在数据集元数据或等效注释声明以上限定信息；缺失时产品定义不完整。称量验收安装配置，包含明确声明属于整机的供货工作滤袋及附件，排除水果负荷、排空试验液、散装备件筛板、运输工装及包装。声明余留工厂加注，不假定空或满。等质量不代表等压榨或粉碎服务。制造商目录质量、电动机功率及压榨篮容积不能作为 M 换算因子。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `electricity_energy` | electricity_fabrication; electricity_finishing; electricity_assembly; electricity_factory_test | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留表计 kWh；精确换算 1 kWh = 3.6 MJ。匹配低于 1 kV 供电及电网平均来源；不将电力换算质量。 |
| `liquid_mass` | tap_water_finishing; tap_water_factory_test; nitric_acid; acid_wastewater; alkaline_wastewater; factory_test_water_waste | 质量 | kg | 称量各交付液体；体积记录须保留实测或供应商密度、温度及明确换算。以声明浓度记录外购溶液质量，不采用活性物质质量。 |
| `groundwater_volume` | groundwater_finishing | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 在 cp_water_resource 以体积计量实际淡水井取水。q_ref 保持每 kg 整机的 m3；无需密度假定。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 声明原料及分别指定成品组件收至机器工厂 |
| starting_condition_role | 前景制造模块投入；供应商生产及来料运输单独链接 |
| product_classification_scope | CPC44191 内配置完整水果压榨破碎机械；不是饮料生产系统 |
| recursive_input_rule | 外购完整机器属于有供应商边界投入；不递归重复本工厂模块。外购压榨篮及转子替代其厂内制造路线。 |
| upstream_dataset_requirement | 匹配合金、成品组件完整性、化学组成、浓度、电力来源及电压、运输、地区及废物处理；披露缺失链接 |
| disclosure | 声明实际工序、外包边界、间接活动分配、包装及供应商链接。没有兼容上游、运输及处理活动时，本前景模块不能建立完整摇篮到工厂门覆盖。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_operations` | manufacturing | 纳入收货核查、实际切割/成形/钻孔/机加工/焊接/打磨、路线专属表面处理、配置装配、检查验收、应归属返工及不合格品和包装。采购电动机、成型膜片或铸造盖不能证明厂内制造电动机、橡胶成型或铸造。外包制造须明确供应商边界。 |  |
| `boundary_actual_bom` | inventory | 将每个实际物料清单项及工序对应一个原子交换或记录排除。实际盖、出汁槽、支架、车轮、软管、接头、螺栓/螺母/垫圈、驱动联轴器、防护、联锁、执行器、液压泵及油、切削液配方、处理试剂及残渣和实测排放在存在时分别增列。水压膜片不要求油液压缸或电驱动。初始卡片不是通用完整物料清单。 |  |
| `boundary_factory_test` | factory_test | 纳入实际工厂水压试验或有动力验收能耗、用水及记录废物。水压设计支持工作原理，不支持工厂持续耗水。后续水果加工、出汁率及清洗属于使用期。实际进行带水果验收试验时，须依据试验记录在本边界展开水果投入及每种具体产出或废物；不假定每台机器都进行。 |  |
| `boundary_product_split` | reference_product | 将单售水果压榨及粉碎机械与饮料产品、容器灌装包装设备分开。声明包含安装附件；单独交付备件筛板或前端清洗机单独建模，不能将组合生产线按一台机器 M 归一化。 | `speidel-hydropress-2025`; `voran-fruit-mills-2018` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | 原料切割、成形及连接 | conditional | 声明结构在厂内实际制造 | 前景阶段；内部在制品保持在工厂模块内 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| `finishing` | 食品接触表面预处理及外部机架表面处理 | conditional | 实际机械表面处理、湿洗、钝化或非接触涂装 | 前景阶段；内部在制品保持在工厂模块内 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| `assembly` | 配置压榨机或粉碎机装配 | required | 每台验收完整机器；组件取决于一种声明设计 | 前景阶段；内部在制品保持在工厂模块内 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| `factory_test` | 配置专属检查及验收 | required | 每台成品机器；仅按实际验收计划进行水压或有动力试验 | 前景阶段；内部在制品保持在工厂模块内 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| `packout` | 发运保护 | conditional | 工厂施用发运包装 | 前景阶段；内部在制品保持在工厂模块内 | 每 1 kg 参考流；采集基准为每台验收成品机器 |

| 工序 | 阶段 | 路线及必需现场记录 |
| --- | --- | --- |
| 收货及配置 | assembly | 物料清单/序列记录；压榨/粉碎设计；外购总成；食品接触供应商声明；附件及油液完整性 |
| 板管预备 | fabrication | 仅厂内制造：牌号/厚度/尺寸；排料图；净原料；工具设置；折弯/钻孔时间；边角料；机加工冷却液配方分别列行 |
| 连接及去毛刺 | fabrication | 实际焊接规程、填充/气体领用、用电、表面边缘检查、返工、收集粉尘及监测排放 |
| 表面预处理 | finishing | 仅实际机械表面处理及清洗/钝化：表面要求、耗材、配方、换槽、稀释、漂洗、回收液及接收边界；不设通用食品接触酸配方 |
| 外部机架涂装 | finishing | 仅在食品接触面之外实际施用：干粉配方、粉末回收、固化设置及能耗、外运；其他热源或湿漆须展开单独行 |
| 工作机构安装 | assembly | 压榨机：压榨篮、膜片、水接头、泄压及压力表、滤袋和支架检查。粉碎机：转子/筛板间隙、电动机对中、安装、电气连接及防护。保留扭矩及供货包含；仅采用已配置路线 |
| 检查及验收 | factory_test | 实际尺寸/材料/表面验收；按规程检查配置压力机构泄漏/泄压或粉碎机旋转/起停/防护；时间、实测能耗/用水、失败/复试及验收；按声明排空/加注状态称净 M |
| 发运保护 | packout | 单独包装领用及损失；净整机及附件质量与包装及散装备件分开 |

### 过程： 原料切割、成形及连接 (`fabrication`)

#### 输入

##### 产品流

###### 冷轧 AISI304 不锈钢板 (`stainless_sheet`)

仅用于厂内实际制造料斗、压榨篮或外罩的一种声明板材等级和厚度。称量扣除退料后的净领用原料；不同时计入外购成品结构。其他牌号须另列。

- 选定流： 冷轧 AISI304 不锈钢板
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

###### 圆截面焊接 AISI304 不锈钢管 (`stainless_tube`)

仅用于厂内制造管状支架或机架。记录一种直径、壁厚、牌号和净原料质量；采购成品支架替代本路线。不假定目录支架质量。

- 选定流： 圆截面焊接 AISI304 不锈钢管
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

###### 实心 308L 不锈钢焊丝 (`welding_wire`)

仅用于实际兼容的 308L 实心焊丝焊接规程。称量含返工的净领用量并记录焊接设置；其他填充合金或药芯焊丝须使用其他交换。

- 选定流： 实心 308L 不锈钢焊丝
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

###### 纯氩焊接保护气 (`argon`)

仅在实际焊接规程使用纯氩时纳入。保留气瓶质量差及规格；氩混合气属于另一交换。不规定气耗因子。

- 选定流： 纯氩焊接保护气
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

计量本实际阶段并包含应归属返工。选定身份为用户端低于 1 kV 的电网平均交流电；其他电压或电力来源须使用另一个相符流。产品采用水驱动不代表工厂实测用电为零。

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

###### 未处理 AISI304 不锈钢边角料 (`stainless_scrap`)

称量实际制造产生且未经处理外运的分类洁净 AISI304 边角料和切屑。在交换中将较宽官方废钢身份限定为本合金。内部回用原料不是外运废料；含油切屑须使用另一废物。

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

###### 收集的干态 AISI304 不锈钢磨削粉尘 (`grinding_dust`)

仅用于实测收集粉尘交付外部接收方；保留合金及磨料污染信息。收集固体与空气排放分开。

- 选定流： 收集的干态 AISI304 不锈钢磨削粉尘
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

###### 空气颗粒物 (`fabrication_particulate`)

仅在实际治理后监测证实颗粒物排入空气且粒径分级及空气子介质均未特指时纳入。保留出口浓度、排气体积及采样条件；不假定焊接或打磨必然排放。指定粒径或子介质须采用相符身份。

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

### 过程： 食品接触表面预处理及外部机架表面处理 (`finishing`)

#### 输入

##### 产品流

###### 低压电网电力 (`electricity_finishing`)

计量本实际阶段并包含应归属返工。选定身份为用户端低于 1 kV 的电网平均交流电；其他电压或电力来源须使用另一个相符流。产品采用水驱动不代表工厂实测用电为零。

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

###### 成品氧化铝磨料砂盘 (`abrasive_disc`)

仅在机械表面处理消耗本指定砂盘时纳入。记录设计、结合剂及应归属更换砂盘质量；原料氧化铝不能替代成品磨具。

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

###### 自来水 (`tap_water_finishing`)

仅用于工厂实际湿式清洗或稀释的外供饮用水等级自来水。称量 kg 或保留体积换算密度依据；不重复计入外购酸溶液已含水。

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

###### 工业固态氢氧化钠，纯度 95–98% (`sodium_hydroxide`)

仅在实际工厂清洗配方采购本纯度 95–98% 的固态工业试剂时纳入。称量交付态净领用量，不采用活性 NaOH 当量质量；配方水单列。不规定必需碱洗或通用槽液浓度。

- 选定流： 氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

###### 工业硝酸水溶液，纯度 40% (`nitric_acid`)

仅在实际钝化配方采购本 40% 水溶液时纳入。称量交付态溶液，记录纯度及稀释，不再重复计入已含水。其他酸浓度或柠檬酸钝化须使用另一明确行；不假定全类别必须酸处理。

- 选定流： 硝酸 `bf883501-c052-414e-8e21-e6f53cc257ba`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

###### 干粉涂料 (`powder_paint`)

仅用于实际对声明的非食品接触机架施用一种指定干粉配方。称量扣除退库粉末的领用量并计量固化用电；其他热源须单列交换。它不是指定食品接触涂层。

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

##### 基本流

###### 取用的淡水地下水 (`groundwater_finishing`)

仅在工厂为本阶段实际由自有井取用淡水时纳入。计量井口 m3 并保留地区及国家用于水稀缺表征；实际处理及泵送另列。同一次取水不能再计外供自来水，也不能将废水作为资源。

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

###### 废氧化铝磨料砂盘 (`spent_abrasive_disc`)

仅用于金属表面处理后实际外运废砂盘。与金属粉尘分开称量并保留结合剂、磨料及附着金属组成；将较宽公开抛光介质身份限定为本砂盘。

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

###### 未回收固体粉末漆过喷料 (`powder_waste`)

称量内部回收后实际外运未回收固体过喷料，并记录树脂配方及接收路线。不编造通用损失率。

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

###### 未处理氢氧化钠水溶液金属清洗废水 (`alkaline_wastewater`)

仅用于实际碱性清洗槽液外运处理；保留质量、pH、NaOH 及实测污染信息。与酸槽分开。厂内处理时须展开处理化学品、污泥及单独监测环境排放。

- 选定流： 未处理氢氧化钠水溶液金属清洗废水
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_waste`
- 来源：

###### 未处理硝酸水溶液不锈钢钝化废水 (`acid_wastewater`)

仅用于实际酸槽液外运处理。记录溶液质量、pH、硝酸及溶解金属分析、换槽及接收边界；不能因使用酸自动推断硝酸盐排水环境。

- 选定流： 未处理硝酸水溶液不锈钢钝化废水
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_waste`
- 来源：

### 过程： 配置压榨机或粉碎机装配 (`assembly`)

#### 输入

##### 产品流

###### 低压电网电力 (`electricity_assembly`)

计量本实际阶段并包含应归属返工。选定身份为用户端低于 1 kV 的电网平均交流电；其他电压或电力来源须使用另一个相符流。产品采用水驱动不代表工厂实测用电为零。

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

###### 成品不锈钢水果压榨篮 (`press_basket`)

仅用于声明压榨机安装的单独外购压榨篮。记录合金、开孔、表面状态及实测质量；外购压榨篮替代其厂内板材制造。Speidel 支持不锈钢结构，不支持通用合金牌号。

- 选定流： 成品不锈钢水果压榨篮
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： speidel-hydropress-2025

###### 成品天然橡胶水压榨机膜片 (`natural_rubber_membrane`)

仅用于 Speidel 实例所示天然橡胶水压配置。称量成品膜片并记录胶料、尺寸及包含接头；天然橡胶原料不能代表成型成品膜片。油驱动压榨机须使用自身执行器路线。

- 选定流： 成品天然橡胶水压榨机膜片
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： speidel-hydropress-2025

###### 带压力表的成品水压泄压阀 (`relief_valve`)

仅在为水压榨机采购一种指定完整泄压阀总成时纳入。记录压力设置、介质兼容性、压力表完整性及质量。Speidel 最大压力属于特定型号，不是通用 PCR 限值。

- 选定流： 带压力表的成品水压泄压阀
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： speidel-hydropress-2025

###### 成品聚酯水果压榨过滤袋 (`press_filter_bag`)

仅在实际交付压榨机包含供应商声明聚酯材质且单独供货称重的过滤袋时纳入。Speidel 支持随附压榨袋，但不支持聚酯化学组成；须由实际供应商核验纤维、接缝及质量。其他织物须另列。

- 选定流： 成品聚酯水果压榨过滤袋
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： speidel-hydropress-2025

###### 成品 AISI304 开孔水果粉碎机筛板 (`mill_screen`)

仅用于一种指定且单独供货的已安装粉碎机筛板。记录孔形、合金、表面状态及质量；Voran 为可更换不锈钢筛板的历史实例。散装替换备件筛板不计净安装整机 M，须声明单独交付交换。

- 选定流： 成品 AISI304 开孔水果粉碎机筛板
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： voran-fruit-mills-2018

###### 成品不锈钢水果粉碎机切削转子 (`mill_rotor`)

仅用于实际粉碎机设计中的指定单独外购转子。记录合金、刀具包含、平衡记录、安装质量及接口；外购转子替代该件厂内毛坯和机加工。

- 选定流： 成品不锈钢水果粉碎机切削转子
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品三相交流水果粉碎机电动机 (`electric_motor`)

仅用于实际电驱动配置单独外购电动机。称量一种指定完整电动机，记录额定输出、供电、外壳、安装及已含操控；水驱动压榨机排除此件。不进行目录功率质量换算。

- 选定流： 成品三相交流水果粉碎机电动机
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品电动机起停开关总成 (`start_stop_switch`)

仅用于一种单独采购并安装于电驱机器的完整起停开关。记录外壳、电气额定值及实测质量；单独采购联锁或过载模块须另列。不汇总操控件质量。

- 选定流： 成品电动机起停开关总成
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

称量一种指定设计、为配置机器单独供货的滚珠轴承。将较宽官方类别限定为该设计；外购电动机或转子总成已含轴承不再单独计入。

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

###### 成品不锈钢六角头螺栓 (`stainless_bolt`)

称量一种声明合金、尺寸及强度等级的安装螺栓。单独供货螺母及垫圈各须单列；排除外购总成已含紧固件。

- 选定流： 成品不锈钢六角头螺栓
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品食品接触用 EPDM 密封垫 (`epdm_gasket`)

仅在实际供应商确认 EPDM 化学组成及指定食品接触符合性、且单独供货安装密封垫时纳入。保留配方、接口、声明及质量；不推断通用 EPDM 使用或法规批准。

- 选定流： 成品食品接触用 EPDM 密封垫
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

### 过程： 配置专属检查及验收 (`factory_test`)

#### 输入

##### 产品流

###### 低压电网电力 (`electricity_factory_test`)

计量本实际阶段并包含应归属返工。选定身份为用户端低于 1 kV 的电网平均交流电；其他电压或电力来源须使用另一个相符流。产品采用水驱动不代表工厂实测用电为零。

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

###### 自来水 (`tap_water_factory_test`)

仅用于工厂实际水压验收试验的外供饮用水等级自来水。称量 kg 或保留体积换算密度依据；记录补水和排出或回用；后续制酒用水在本制造清单之外。

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

#### 输出

##### 产品流

###### 验收完整水果压榨或破碎机械 (`finished_machine`)

参考产出为一种明确配置压榨机或破碎机，不是混合类别或生产线。记录安装支架、压榨篮和膜片或转子和筛板、供货操控、防护、指定滤袋、实际油液状态及验收净 M；排除散装备件及包装。本数据集仅计一种声明整机配置。

- 选定流： 制红酒、制苹果汁、制果汁或类似饮料用的压榨机、轧碎机及类似机械 `783c1d97-c517-42eb-bfde-b8ec8a7f3cda`
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

###### 收集的水压榨机水试验废液 (`factory_test_water_waste`)

仅在实际工厂水试验产生收集废液并外运处理时纳入。称量并记录污染及接收边界。回用水属于内部；直接排环境须记录实际单一实测物质及介质，不能套用本废物身份。

- 选定流： 收集的水压榨机水试验废液
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

仅用于含再生纤维、纤维含量至少 80% 的 C 型瓦楞发运保护材料。称量净领用量并记录规格，包装不计 M。其他楞型或组成须使用另一声明行。

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

###### 低密度聚乙烯保护薄膜 (`ldpe_film`)

仅用于实际非泡沫、非自粘、未增强 LDPE 薄膜。称量净领用量并保留等级及来源；不从身份推断化石来源或再生比例。不计 M。

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
| `allocation_direct` | shared_operations | 分配前按实际工单、阶段及一种配置分拆。可追溯时直接归属物料/组件领用、返工及验收测量；水压榨机和电驱粉碎机不共享假定每台因子。 |  |
| `allocation_physical` | shared_energy_water_support | 采集有依据因果关系的物理驱动量：实测设备功率曲线及机加工/焊接机时、固化批次装载、试验台表计/时间或实际清洗槽使用。将归属数量与表计总量及验收配置数量核对。未建立关系时保留未解决分配及敏感性；不采用通用按台均分、质量等分或经济百分比。 |  |
| `allocation_waste_rejects` | exports_and_rework | 在同一配置及期间每验收产出数量中纳入应归属不合格品、失败试验和重复表面处理。识别外运废料/废物及接收路线；记录中扣除内部退料及回收。不自动给予避免原生金属或废物处理抵扣。真实联产品认定须有记录市场及边界决策，不能仅因存在废料认定。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | factory_test | finished_machine | 校准称重及验收 | 型号；配置；序列号；验收净质量 M；安装附件；油液/排空状态；排除备件/包装 | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 每台或有依据配置专属样本 | 同一声明生产期间；披露缺口 | 声明制造场址 | 每台验收净质量 | 校准；安装物料清单；排空/加注；验收；采样 |
| cp_configuration | all processes | actual route | 物料清单及路线核查 | 一种设计；物料清单修订；供货完整性；合金/胶料；食品接触声明；工单；返工；验收数量；外包边界 | 将每个实际项及工序对应一行或有依据排除。区分水压及电驱粉碎设计、安装附件及散装备件、采购成品总成及厂内制造件。 | record | 每次配置变化及批次 | 同一声明生产期间；披露缺口 | 声明制造场址 | 一份一致配置路线记录 | 物料清单；采购规格；供应商声明；边界及工单记录 |
| cp_material | fabrication; finishing; factory_test; packout | individual stock/reagent/liquid/packaging | 库存领用及称重 | 单一物质/产品；牌号/配方；纯度；领用/退回；库存/在制品变化；体积/密度/温度；验收数量 | 称量净应归属领用并核对库存、退回及内部回收。液体体积换算保留密度/温度；40% 硝酸按溶液称重，固态 NaOH 按交付态称重，稀释水单列。制造内试验水与制造外作业水分开。 | kg | 每次领用及批次核对 | 同一声明生产期间；披露缺口 | 声明制造场址 | 应归属物料净质量 / 同一配置的验收机器数量 | 秤；库存台账；供货规格；安全数据表；配方；密度 |
| cp_parts | assembly | single finished component | 收货、称重及装配清单 | 组件编号；一种设计；供应商；数量；实测质量；包含接头/子件；安装状态；验收数量 | 使用各单一组件实际交付质量或批次专属经核验数量质量数据。记录压榨篮、滤袋、筛板、膜片或转子供货完整性并防止重复原料/子件核算。不采用目录功率/容积质量因子。 | kg | 每个供货及装配批次 | 同一声明生产期间；披露缺口 | 声明制造场址 | 应归属安装组件质量 / 同一配置的验收机器数量 | 秤；供货包含；批次质量；安装物料清单 |
| cp_energy | fabrication; finishing; assembly; factory_test | electricity | 表计及因果驱动台账 | 阶段；电压/来源；表计 kWh；时段；共享总量；驱动量；待机/返工；验收数量 | 计量各实际阶段；按 1 kWh = 3.6 MJ 将 kWh 转 MJ。保留实测分配驱动总量并核对共享表计、待机及返工。水驱动产品不代表工厂能耗为零。 | MJ | 每个表计时段及批次 | 同一声明生产期间；披露缺口 | 声明制造场址 | 应归属电能 / 同一配置的验收机器数量 | 表计校准；电费账单；阶段/驱动记录 |
| cp_waste | fabrication; finishing; factory_test | single exported waste | 容器或地磅平衡 | 单一废物；组成；污染；质量；回收；接收边界；验收数量 | 称量分类实际外运并核对库存/回收。区分酸碱槽液、干态收集粉尘、废磨料砂盘及空气排放；保留接收及处理记录。仅体积记录须有依据质量换算。 | kg | 每次外运及批次平衡 | 同一声明生产期间；披露缺口 | 声明制造场址 | 应归属外运废物质量 / 同一配置的验收机器数量 | 秤；接收凭证；组成；处理边界 |
| cp_emission | fabrication | single air substance | 治理后出口监测 | 物质；浓度/单位；气体流量/体积；时段；干湿/温压；治理；粒径分级；介质/子介质；验收数量 | 由同一时段治理后浓度及排气体积计算一种物质质量，保留单位换算、干湿/温度基准及采样覆盖。指定实际粒径分级及介质；不推断气态金属排放、必然排放，也不将缺数当零。 | kg | 代表性实际排放时段 | 同一声明生产期间；披露缺口 | 声明制造场址 | 应归属实测物质质量 / 同一配置的验收机器数量 | 监测报告；校准；采样覆盖；换算 |
| cp_water_resource | finishing | groundwater abstraction | 井表计及现场记录 | 水井；淡水来源；国家/地区；m3；时段；阶段用途；内部回用；验收数量 | 读取校准井体积表计记录工厂实际淡水地下水取用；分拆阶段用途并核对取水，不将循环水计新增取水。保留国家/地区并另列泵送/处理清单。 | m3 | 每个表计时段及批次 | 同一声明生产期间；披露缺口 | 声明制造场址 | 应归属取水体积 / 同一配置的验收机器数量 | 表计；水井/来源依据；国家；阶段水平衡 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品机器的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `quality_configuration` | all inventory rows | M、数量及验收数使用一种设计/配置和期间；核对安装物料清单、工厂加注/排空、库存/在制品变化、废物及退回。不按等质量混合膜片压榨与电动粉碎机。 | cp_mass; cp_configuration; cp_material; cp_parts; cp_waste |
| `quality_coverage` | inventory_and_links | 披露缺失身份、组件、上游/运输/处理链接、因果分配、称重及监测覆盖。数量须有实际原始记录，不用制造商手册因子。不设通用截断、整机质量、寿命、纯度换算或排放因子。 | cp_configuration; cp_energy; cp_emission; cp_water_resource |
| `quality_sources` | design_examples | 两家制造商提供独立设计文件，但不是定量工厂测量。Speidel 支持型号专属天然橡胶水压榨机；Voran 3/18 仅支持历史粉碎配置及 AISI304 实例。不用疑似错标技术行推断功率，不假定当前供应、通用合金、作业需求或法规符合性。 | speidel-hydropress-2025; voran-fruit-mills-2018 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference` | reference_flow | 要求正值实测 M、声明一种配置、安装附件/散装备件及排空/加注边界、验收和 1kg finished_machine。其他数量使用 normalize_mass 及各自质量/能量/体积分子单位。 |  |
| `validation_completeness` | inventory | 核对实际压榨或破碎机构、工作腔、食品接触材料、支架、驱动/操控/防护及安装附件。核验自制外购差异、试验范围、退回、不合格品、返工及接收边界。缺测/缺链接表示覆盖不完整，不是经核验零值。 |  |
| `validation_identity` | all inventory rows | 核查公开 UUID 物质、状态/浓度、等级/路线、产品/废物/基本流类型、实际参考属性/单位组及本地化。区分水资源、自来水及废槽液；核验环境介质及粒径。较宽公开类别限定为具体交换，不作为汇总选择。 |  |
| `validation_claims` | dataset_claims | 未建立相应覆盖及审查前，不声明完整摇篮到工厂门、身份全部解析或科学批准。制造质量参考不能证明出汁率、加工服务等效、寿命或食品接触法律符合性。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 配置前景水果压榨或粉碎机械制造模块；画像标题不代表 PCR 已发表 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 相同配置完整机器制造清单，按实测 M 放大并声明上游及处理链接 |
| excluded_use | 饮料产量/服务、种植、寿命、后续使用/清洗、按净整机质量归一化备件套装或方法学批准 |
| required_metadata | 全部必需限定信息；一种型号/设计/物料清单；实际食品接触声明；驱动/工作机构；总成包含；附件/备件/油液边界；场址/期间/边界；测量/分配；供应商/接收链接 |
| required_quality_disclosure | 测量/采样不确定性；实际路线覆盖；未解决 UUID/分配/上游；缺失监测；历史设计来源限制；返工/不合格品包含 |
| update_trigger | 压榨/粉碎、膜片/转子/筛板、合金、驱动、电动机、操控、附件、工厂排空/加注或食品接触变化；供应商、场址、路线、能源或分配变化 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| speidel-hydropress-2025 | handbook | Speidel, Home Cider Making, brochure filename2025EN, Hydropress technical details, PDF physical p.13, printed p.13. https://www.speidels-hausmosterei.de/files/hausmosterei/downloads/service/broschueren/Speidel_Broschuere_Hausmosterei2025EN.pdf | 型号专属天然橡胶膜片、不锈钢压榨篮、进排水及压力机构、随附滤袋和支架配置。不采用通用压力、通量、质量、服务需求或工厂数量。 |
| voran-fruit-mills-2018 | handbook | Voran, Fruit mills RM1,5/RM2,2/RM5,5, edition3/18 (historical), Technical data and drawings, PDF physical p.5; cover p.1. https://www.voran.at/fileadmin/user_upload/voran/Maschinen/Prospekte/Prospekte_englisch/Fruit_mills_RM.pdf | 历史电驱水果粉碎机构造、1.4301/AISI304 实例、筛板及支架/供货区别。不支持当前供应、通用合金、目录质量或定量制造因子；疑似错标行不作功率证据。 |
