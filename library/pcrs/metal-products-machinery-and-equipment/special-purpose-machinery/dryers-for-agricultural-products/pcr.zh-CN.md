---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.dryers-for-agricultural-products
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 农业产品干燥机

## 1. 范围与适用性

本 PCR 规定以农业产品为主要设计对象的完整干燥设备的工厂生产，包括谷物或种子的批式、循环批式和连续流干燥机，以及专用果蔬或叶类产品干燥柜。直接或间接燃烧、电阻加热、蒸汽或热水换热及被动或辅助太阳能设计是有条件配置，不构成所有设备必须采用的通用物料清单。叶类产品或混合设计须有实际图纸与供应状态证据，不能用谷物塔式结构代替。FAO 提供实际非金属被动太阳能反例。来源支持结构，不支持工厂数量。[cimbria-drying-2024; opico-installations-v2; fao-fruit-processing-2008]

排除作物种植、谷物或果蔬干燥服务、干燥农业产品输出、客户使用季能耗、完整筒仓或加工厂、土建、通用家用电器及木材、纸浆、纸张或非农业产品干燥机。审查的 CPC 边界为农业用途 44518 与其他物料 44912；能源来源不决定类别。混合用途干燥机须记录主要农业设计用途、独立交付及实际随附模块；用途未明确时保留分类审查缺口，不默认为农业设备。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.dryers-for-agricultural-products |
| classification_refs | CPC 3.0:44518 |
| covered_products | 农业用途批式、连续流和柜式干燥机及实际交付选项 |
| excluded_products | 其他物料干燥机；干燥服务；干燥作物；完整加工厂 |
| representative_product | 声明一种配置的一台验收完整干燥机；不代表通用谷物塔式机型 |
| production_route | 实际自制或外购加工、有条件表面处理、装配、验收与发运 |
| market_state | 包含声明随附模块及保留的初始加注的出厂完整设备 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供完整农业产品干燥设备 |
| How much | 1 kg 验收设备净质量，由实际机器归一化 |
| How well | 符合声明的作物适配、腔体或塔体几何、加热与气流设计、随附控制及验收规范；不同配置不具有性能等价性 |
| How long or cycle | 一次制造至出厂交付；使用寿命与田间工作负荷为另行声明情景 |
| reference_flow_link | finished_dryer |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 验收合格完整农业产品干燥机 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 作物或产品家族；主要设计用途；型号与修订；批式、连续流或柜式；直接或间接加热；风机或被动气流；能源接口；食品接触牌号；所含模块；自制外购边界；保留加注；净质量验收；时期与工厂地区 |

在数据集中声明全部限定信息。每千克生产归一化不表示干燥服务等价。产品流 UUID 未解决，核实质量属性和单位支持不等于解决设备身份。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |
| material_basis | 物理材料或物种记录 | Mass | kg | 每个项采用实际牌号、化学物质或物种及实测水分、含量。钢、涂层、湿污泥或废水总量不等于其中铁、锌、溶剂或干物质。 |
| energy_basis | 公用工程与试验能量 | Energy | MJ | 保留实测 kWh，以 3.6 MJ/kWh 换算电力；各燃料采用各自实测数量与热值基准。外购蒸汽净能量按 cp_energy 采集，不假定 kg 等于 MJ。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 处于有凭证供应商加工状态的实际牌号原料与完整外购模块 |
| starting_condition_role | 前景投入边界 |
| product_classification_scope | 主要用于农业产品干燥的设备；其他物料与混合用途未明确设备另行审查 |
| recursive_input_rule | 外购已完成农业干燥机模块仅承接一次供应商数据集；不递归重复其加工、风机、燃烧器、电机、涂层或加注。 |
| upstream_dataset_requirement | 匹配实际流牌号与状态、供应商地区、技术及交付接口；未解决 UUID 不构成上游供应商。 |
| disclosure | 说明随附模块清单、工厂门、运输区段、试验边界、排除的现场土建、净质量与报告期 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| factory_gate | all processes | 包括上游供应、实际运输、工厂加工、表面处理、装配、验收试验、报废、返工、控制、废物处理及出厂包装；排除后续作物干燥运行。 |  |
| make_buy | components | 记录下方自制外购矩阵。完整外购总成所含材料、电机和加注计入一次；自制则记录组成投入、工序能量及废物。 |  |
| test_scope | test | 将实际耗用的试验燃料、作物和水与实测保留的初始加注分开。额定热量、作物吞吐量与除水量为运行描述，不得作为工厂能量或设备质量因子。 | cimbria-drying-2024; opico-installations-v2 |

### 自制外购与随附模块矩阵

| 总成 | 自制 | 外购 | 边界决定 |
| --- | --- | --- | --- |
| 框架、腔体、塔体、风道、托盘 | 实际牌号成形、连接和表面处理 | 完整板件或模块供应商一次 | 镀锌板包含供应商锌层；仅实际发生时另计场内镀层 |
| 风机、燃烧器、加热器、换热器 | 实际内部件、电机、燃料管路、装配与试验 | 完整外购总成一次 | 加热选项有条件；被动太阳能不要求这些 |
| 控制、进料、排料、除尘 | 实际布线、控制与机械制造 | 完整供应模块一次 | 外部筒仓与客户输送器排除，除非明确属于交付设备范围 |
| 太阳能柜体或集热器 | 实际木材、玻璃、聚合物、网材结构与涂层 | 完整柜体或集热器一次 | 来源设计为反例，不是默认配方；须有实际牌号与树种供应商记录 |
| 保留的初始加注 | 实测实际追加加注 | 供应商内含加注一次 | 净设备质量仅含随设备交付的保留加注；耗用或排出的试验加注属于试验交换 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fabrication | 金属加工 | conditional | 场内实际制造金属框架、腔体、风道、托盘或输送零件 | foreground | 每 1 kg 参考流 |
| solar | 太阳能柜体制造 | conditional | 场内实际制造农业太阳能柜体或集热器 | foreground | 每 1 kg 参考流 |
| finish | 表面处理 | conditional | 实际场内清洗、粉末或液体涂装；已表面处理的外购件跳过这些工序 | foreground | 每 1 kg 参考流 |
| assembly | 设备装配 | required | 每种交付配置；被动太阳能干燥机不要求动力组件 | foreground | 每 1 kg 参考流 |
| test | 工厂验收试验 | required | 实际电气、机械、加热或泄漏试验；仅实际出厂前进行时纳入作物试验 | foreground | 每 1 kg 参考流 |
| services | 工厂残余公用工程 | conditional | 仅工序分配后实测未分配的残余负荷 | foreground | 每 1 kg 参考流 |
| dispatch | 验收与发运 | required | 交付设备及其实际包装 | foreground | 每 1 kg 参考流 |

卡片为有条件候选交换，不是默认组成。数据集应为每种实际未覆盖的牌号、作物、化学品、聚合物、燃料、包装组件、废物及排放物种和环境介质增设独立卡片。区分有证据的缺席 not_applicable、实测零与未知。每个运输供应或废物须以独立运输交换记录实际质量距离区段、方式和供应商，不使用通用捆绑运输因子。

### 过程：金属加工（`fabrication`）

#### 输入

##### 产品流

###### S235JR 碳钢板（`carbon_plate`）

仅图纸和材质证书规定该牌号时使用；不是默认机器物料清单。

- 选定流：S235JR 碳钢板
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：

###### DX51D+Z 镀锌钢板（`galvanized_sheet`）

仅适用于实际外购镀锌板牌号；上游锌层计入一次，不假定场内镀锌。

- 选定流：DX51D+Z 镀锌钢板
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`cimbria-drying-2024`

###### AISI 304 不锈钢板（`stainless_sheet`）

仅用于实际经证明的食品接触或耐腐蚀设计；其他牌号另设卡片。

- 选定流：AISI 304 不锈钢板
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：

###### DOCOL 1200 钢板（`wear_plate`）

仅实际耐磨选项；保留供应商化学组成与状态，不用普通钢代替。

- 选定流：DOCOL 1200 钢板
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`cimbria-drying-2024`

###### ER70S-6 焊丝（`weld_wire`）

仅实际碳钢焊接规程；不锈钢焊材另设牌号卡片。

- 选定流：ER70S-6 焊丝
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：

###### 氩气保护气体（`argon`）

仅实际氩气供应；混合气各组分或有证书的供应混合物分别识别。

- 选定流：氩气保护气体
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：

###### 矿物油基切削液，供应配方（`cutting_oil`）

仅实际配方与实测领用量；浓度与水分别追踪。

- 选定流：矿物油基切削液，供应配方
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：

###### 工艺水（`fabrication_water`）

仅实际冷却或清洗供水；内部回水为配对转移。

- 选定流：工艺水
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_water。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water`
- 来源：

###### 交流电（`fabrication_electricity`）

仅匹配实际供应商的中国低于 1 kV 电网平均用户侧供应；采用实际工序分表。公用工程仅包含未分配残余。其他电压或地区须另核实身份。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：

#### 输出

##### 废物流

###### 分离的 S235JR 钢边角料（`steel_scrap`）

仅实际分离的外排废物；保留牌号、水分、成分分析和处理凭证。

- 选定流：分离的 S235JR 钢边角料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：

###### 分离的 AISI 304 不锈钢边角料（`stainless_scrap`）

仅实际分离的外排废物；保留牌号、水分、成分分析和处理凭证。

- 选定流：分离的 AISI 304 不锈钢边角料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：

###### 分离的 DX51D+Z 板边角料（`galvanized_scrap`）

仅实际分离的外排废物；保留牌号、水分、成分分析和处理凭证。

- 选定流：分离的 DX51D+Z 板边角料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：

###### 废矿物油基切削乳化液（`spent_fluid`）

仅实际分离的外排废物；保留牌号、水分、成分分析和处理凭证。

- 选定流：废矿物油基切削乳化液
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：

##### 基本流

###### 含铁颗粒物，排入空气（`weld_dust`）

仅实际控制后排放；计量颗粒物质量及其自身铁含量，不把粉尘总量当作铁。

- 选定流：含铁颗粒物，排入空气
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_emission`
- 来源：

### 过程：太阳能柜体制造（`solar`）

#### 输入

##### 产品流

###### 窑干欧洲赤松板（`pine_board`）

仅实际 Pinus sylvestris 规范确认时采用此候选木材设计；FAO 木结构不规定树种。

- 选定流：窑干欧洲赤松板
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`fao-fruit-processing-2008`

###### 紫外稳定聚乙烯采光膜（`pe_glazing`）

仅实际聚乙烯盖膜牌号；厚度、添加剂和供应接口须有供应商规范。

- 选定流：紫外稳定聚乙烯采光膜
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`fao-fruit-processing-2008`

###### 钠钙玻璃采光板（`glass_glazing`）

仅实际玻璃盖或集热器设计；与聚合物膜分开。

- 选定流：钠钙玻璃采光板
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`fao-fruit-processing-2008`

###### AISI 304 不锈钢托盘网（`solar_mesh`）

仅实际托盘规范；其他网材或编织托盘须有独立物理身份。

- 选定流：AISI 304 不锈钢托盘网
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：

###### 交流电（`solar_electricity`）

仅匹配实际供应商的中国低于 1 kV 电网平均用户侧供应；采用实际工序分表。公用工程仅包含未分配残余。其他电压或地区须另核实身份。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：

#### 输出

##### 废物流

###### 欧洲赤松木边角料（`wood_offcuts`）

仅该树种路线；分别记录涂层污染和处理。

- 选定流：欧洲赤松木边角料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：

###### 聚乙烯膜裁边料（`pe_trim`）

仅实际裁膜废料；与再利用片材及废玻璃分开。

- 选定流：聚乙烯膜裁边料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：

### 过程：表面处理（`finish`）

#### 输入

##### 产品流

###### 氢氧化钠（`naoh`）

仅实际碱洗；按实际浓度分别采集活性氢氧化钠与溶液水。

- 选定流：氢氧化钠
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：

###### 异丙醇（`ipa`）

仅经核实的场内溶剂及安全数据表；不假定清洗配方。

- 选定流：异丙醇
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`epa-metal-coating-2002`

###### 二甲苯（`xylene`）

仅实际清洗或稀释配方；保留异构体与组成证据。

- 选定流：二甲苯
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`epa-metal-coating-2002`

###### 环氧聚酯粉末涂料，供应配方（`powder`）

仅实际选定的供应粉末；保留聚合物、颜料与填料比例，无默认配方。

- 选定流：环氧聚酯粉末涂料，供应配方
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：

###### 炭黑颜料丙烯酸涂料，供应配方（`black_coating`）

仅实际集热器或柜体黑色涂层且此化学组成已核实时使用；黑色本身不能证明配方。

- 选定流：炭黑颜料丙烯酸涂料，供应配方
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`fao-fruit-processing-2008`

###### 工艺水（`finish_water`）

仅实际补加或漂洗供水，不重复计入外购配方所含水。

- 选定流：工艺水
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_water。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water`
- 来源：

###### 交流电（`finish_electricity`）

仅匹配实际供应商的中国低于 1 kV 电网平均用户侧供应；采用实际工序分表。公用工程仅包含未分配残余。其他电压或地区须另核实身份。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：

#### 输出

##### 废物流

###### 环氧聚酯涂装污泥（`coating_sludge`）

仅实际湿残渣；保留水分及金属、聚合物和溶剂各自含量。

- 选定流：环氧聚酯涂装污泥
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：

###### 氢氧化钠清洗废水（`alkaline_wastewater`）

仅实际排往指定处理服务商的废水；分别核对溶解物种、固体与水。

- 选定流：氢氧化钠清洗废水
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：

###### 吸附异丙醇的废活性炭（`spent_carbon`）

仅实际捕集介质；所含溶剂仍为废物组分，捕集不等于销毁。

- 选定流：吸附异丙醇的废活性炭
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：

##### 基本流

###### 异丙醇，排入空气（`ipa_air`）

仅实际物种与控制后空气排放；包含无组织和固化排放点，不编造空气残差。

- 选定流：异丙醇，排入空气
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_emission`
- 来源：`epa-metal-coating-2002`

###### 二甲苯，排入空气（`xylene_air`）

仅实际物种与控制后空气排放；包含无组织和固化排放点，不编造空气残差。

- 选定流：二甲苯，排入空气
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_emission`
- 来源：`epa-metal-coating-2002`

###### 水蒸气，排入空气（`finish_evap`）

仅实际物种与控制后空气排放；包含无组织和固化排放点，不编造空气残差。

- 选定流：水蒸气，排入空气
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_emission`
- 来源：`epa-metal-coating-2002`

### 过程：设备装配（`assembly`）

#### 输入

##### 产品流

###### 离心风机总成（`fan`）

实际强制通风设计；供应商完整总成负荷计入一次，不另计内含电机或材料。必须有具体设计与交付范围。

- 选定流：离心风机总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`cimbria-drying-2024`

###### 天然气线型燃烧器总成（`burner`）

实际天然气加热设计；供应商完整总成负荷计入一次，不另计内含电机或材料。必须有具体设计与交付范围。

- 选定流：天然气线型燃烧器总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`cimbria-drying-2024`

###### 柴油燃烧器总成（`diesel_burner`）

实际柴油燃烧批式配置；供应商完整总成负荷计入一次，不另计内含电机或材料。必须有具体设计与交付范围。

- 选定流：柴油燃烧器总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`opico-installations-v2`

###### 液化石油气燃烧器总成（`lpg_burner`）

实际液化石油气燃烧批式配置；供应商完整总成负荷计入一次，不另计内含电机或材料。必须有具体设计与交付范围。

- 选定流：液化石油气燃烧器总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`opico-installations-v2`

###### 蒸汽空气换热器总成（`steam_exchanger`）

实际蒸汽间接加热配置；供应商完整总成负荷计入一次，不另计内含电机或材料。必须有具体设计与交付范围。

- 选定流：蒸汽空气换热器总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`cimbria-drying-2024`

###### 电阻式空气加热器总成（`electric_heater`）

实际电加热配置；供应商完整总成负荷计入一次，不另计内含电机或材料。必须有具体设计与交付范围。

- 选定流：电阻式空气加热器总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`cimbria-drying-2024`

###### 干燥机可编程控制柜总成（`controller`）

实际动力控制；供应商完整总成负荷计入一次，不另计内含电机或材料。必须有具体设计与交付范围。

- 选定流：干燥机可编程控制柜总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`cimbria-drying-2024`

###### 谷物进料螺旋输送器总成（`auger`）

实际随批式干燥机交付的进料装置；供应商完整总成负荷计入一次，不另计内含电机或材料。必须有具体设计与交付范围。

- 选定流：谷物进料螺旋输送器总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`opico-installations-v2`

###### 谷物扇形阀排料总成（`discharge`）

实际随连续流机交付的出口；供应商完整总成负荷计入一次，不另计内含电机或材料。必须有具体设计与交付范围。

- 选定流：谷物扇形阀排料总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`cimbria-drying-2024`

###### 旋风除尘器总成（`dust_separator`）

实际工厂交付的除尘器；供应商完整总成负荷计入一次，不另计内含电机或材料。必须有具体设计与交付范围。

- 选定流：旋风除尘器总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`cimbria-drying-2024`

###### 铜导体聚氯乙烯绝缘电缆（`cable`）

仅外购完整控制柜或总成之外的电缆；记录导体截面及绝缘状态。

- 选定流：铜导体聚氯乙烯绝缘电缆
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：

###### ISO VG 68 矿物齿轮油（`oil_fill`）

仅实际牌号单独供应且实测保留的初次加注；不重复计入外购齿轮箱内已有油。

- 选定流：ISO VG 68 矿物齿轮油
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：

###### 交流电（`assembly_electricity`）

仅匹配实际供应商的中国低于 1 kV 电网平均用户侧供应；采用实际工序分表。公用工程仅包含未分配残余。其他电压或地区须另核实身份。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：

### 过程：工厂验收试验（`test`）

#### 输入

##### 产品流

###### 接收态小麦籽粒（`test_wheat`）

仅实际小麦工厂试验装料；实测湿质量与含水率。工厂试验作物不是交付机器质量。

- 选定流：接收态小麦籽粒
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：

###### 柴油（`test_diesel`）

仅实际相应燃料的工厂试验耗用；须有实际组成与供应状态。排除田间使用季燃料。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：

###### 液化石油气（`test_lpg`）

仅实际相应燃料的工厂试验耗用；须有实际组成与供应状态。排除田间使用季燃料。

- 选定流：液化石油气
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：

###### 天然气（`test_gas`）

仅实际相应燃料的工厂试验耗用；须有实际组成与供应状态。排除田间使用季燃料。

- 选定流：天然气
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：

###### 外购蒸汽（`test_steam`）

仅实际工厂试验的交付蒸汽，按净焓协议计为 MJ 能量；不将蒸汽质量直接当作 MJ。

- 选定流：外购蒸汽
- 流属性/单位：能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：

###### 工艺水（`test_water`）

仅实际工厂泄漏或清洗试验；排水不是保留的初始加注或产品分母。

- 选定流：工艺水
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_water。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water`
- 来源：

###### 交流电（`test_electricity`）

仅匹配实际供应商的中国低于 1 kV 电网平均用户侧供应；采用实际工序分表。公用工程仅包含未分配残余。其他电压或地区须另核实身份。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：

#### 输出

##### 产品流

###### 工厂干燥试验后小麦籽粒（`returned_wheat`）

仅实际向外交付的回收试验作物；记录变化后的水分、状态与去向。不是设备参考产品。

- 选定流：工厂干燥试验后小麦籽粒
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：

##### 废物流

###### 小麦籽粒试验废料（`test_crop_waste`）

仅实际排往具体接收方的试验废料，记录干物质与水分。

- 选定流：小麦籽粒试验废料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：

###### 泄漏试验废水（`test_effluent`）

仅实际外排废水，保留污染物和处理接口。

- 选定流：泄漏试验废水
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：

##### 基本流

###### 水蒸气，排入空气（`water_air`）

仅实际相应物种的计量；无吞吐量换算排放因子。碳平衡不能确定一氧化碳、一氧化氮或二氧化氮。

- 选定流：水蒸气，排入空气
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_emission`
- 来源：

###### 化石二氧化碳，排入空气（`co2_air`）

仅实际相应物种的计量；无吞吐量换算排放因子。碳平衡不能确定一氧化碳、一氧化氮或二氧化氮。

- 选定流：化石二氧化碳，排入空气
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_emission`
- 来源：

###### 一氧化碳，排入空气（`co_air`）

仅实际相应物种的计量；无吞吐量换算排放因子。碳平衡不能确定一氧化碳、一氧化氮或二氧化氮。

- 选定流：一氧化碳，排入空气
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_emission`
- 来源：

###### 一氧化氮，排入空气（`no_air`）

仅实际相应物种的计量；无吞吐量换算排放因子。碳平衡不能确定一氧化碳、一氧化氮或二氧化氮。

- 选定流：一氧化氮，排入空气
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_emission`
- 来源：

###### 二氧化氮，排入空气（`no2_air`）

仅实际相应物种的计量；无吞吐量换算排放因子。碳平衡不能确定一氧化碳、一氧化氮或二氧化氮。

- 选定流：二氧化氮，排入空气
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_emission`
- 来源：

### 过程：工厂残余公用工程（`services`）

#### 输入

##### 产品流

###### 交流电（`services_electricity`）

仅匹配实际供应商的中国低于 1 kV 电网平均用户侧供应；采用实际工序分表。公用工程仅包含未分配残余。其他电压或地区须另核实身份。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：

###### 外购蒸汽（`service_steam`）

仅加工、装配、试验和发运热量分配后未分配的工厂蒸汽残余；采用同一计量期。

- 选定流：外购蒸汽
- 流属性/单位：能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：

### 过程：验收与发运（`dispatch`）

#### 输入

##### 产品流

###### 瓦楞纸板包装（`corrugated`）

仅实际发运组件，不计入设备质量；记录再利用及净领用量。

- 选定流：瓦楞纸板包装
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_pack。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：

###### 低密度聚乙烯拉伸包装膜（`stretch`）

仅实际发运包装膜，记录供应商牌号。

- 选定流：低密度聚乙烯拉伸包装膜
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_pack。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：

###### 欧洲赤松托盘（`pallet`）

仅实际有树种证书且符合再用托盘服务；其他树种另设身份。

- 选定流：欧洲赤松托盘
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_pack。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：

#### 输出

##### 产品流

###### 验收合格完整农业产品干燥机（`finished_dryer`）

严格对应声明的配置与交付边界；含随附模块与保留的初始加注，排除包装、试验作物及排出的试验水。

- 选定流：验收合格完整农业产品干燥机
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_mass`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| subdivide | shared production | 优先采用配置特定批次与互不重叠的工序计量。仅用实测因果机时或负荷等有记录物理驱动分配未分配的共同残余；分子与验收输出处于同一时期。 |  |
| scrap | recovery | 按一种披露且兼容的回收模型记录实际外排分离废料及处理；出售本身不产生避免原生材料信用。内部配对回料抵消质量转移，同时保留返工负荷。 |  |
| test_crop | returned test crop | 区分客户试料返还与真实共产品销售。不自动赋予作物信用或按吞吐量分配。真实共产品先细分，再论证实测物理关系或有记录替代关系及敏感性。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | 验收设备净质量 | 匹配时期记录 | 型号；配置；序列号；验收净质量 M；N；所含模块；保留加注；皮重；验收日期 | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 每个批次、区间与配置 | 包含报废返工的同一完整报告期 | 声明的工厂与供应商接口 | 每台验收净质量 | 校准；验收；含量分析；供应状态；采样不确定性 |
| cp_material | 实际适用工序 | 一种物理投入 | 匹配时期记录 | 牌号；树种或配方；供应商；接收及领用量；回料；期初期末库存；各自含量和水分；供应完成状态 | 校准称重与实际供应商证书；分别识别自制外购及材料特定组成。 | kg | 每个批次、区间与配置 | 包含报废返工的同一完整报告期 | 声明的工厂与供应商接口 | 归属数量 / 验收机器数量 | 校准；验收；含量分析；供应状态；采样不确定性 |
| cp_energy | 实际适用工序 | 一种公用工程 | 匹配时期记录 | 计量表；区间；输入；发电；输出；储能；分配；燃料质量、组成与净热值；交付蒸汽质量、压力温度干度及自身焓；独立回流凝结水质量温度及自身焓；共享驱动 | 使用与输出同期经校准且无重叠的计量表及供应凭证。外购蒸汽：交付 kg 乘以实测压力、温度、干度下自身 MJ/kg，减去独立实测回流 kg 乘以同一焓参考下自身回流 MJ/kg；或使用经校准的净热量表。不假定焓，不把 kg 当作 MJ，不重复计入自有锅炉燃料。 | MJ | 每个批次、区间与配置 | 包含报废返工的同一完整报告期 | 声明的工厂与供应商接口 | 归属数量 / 验收机器数量 | 校准；验收；含量分析；供应状态；采样不确定性 |
| cp_water | 实际用水工序 | 一种供应水 | 匹配时期记录 | 计量表；时期；供水；自身实测密度温度；物料含水；保留库存；蒸发；排水；循环；反应 | 计量匹配的进水、保留和排水及物料水分；配对循环转移抵消；体积换算采用实际密度。 | kg | 每个批次、区间与配置 | 包含报废返工的同一完整报告期 | 声明的工厂与供应商接口 | 归属数量 / 验收机器数量 | 校准；验收；含量分析；供应状态；采样不确定性 |
| cp_waste | 实际适用工序 | 一种废物 | 匹配时期记录 | 身份；牌号；皮重净重；自身水分；干湿基；元素或化学成分；库存；接收方；实际处理；试验作物去向 | 校准分离称重和每项物流相匹配的代表性分析，包括污泥和废水；保留处理方凭证。 | kg | 每个批次、区间与配置 | 包含报废返工的同一完整报告期 | 声明的工厂与供应商接口 | 归属数量 / 验收机器数量 | 校准；验收；含量分析；供应状态；采样不确定性 |
| cp_emission | 实际排放点 | 一种物种和环境介质 | 匹配时期记录 | 物种；环境介质；浓度；气液流量；时长；自身水分和含量；采样；捕集；库存；检出限；不确定性 | 采用控制后物种特定监测和无组织评估；任何因子或模型须匹配实际燃料、设备、控制及物种。保留排放及非空气残余记录。 | kg | 每个批次、区间与配置 | 包含报废返工的同一完整报告期 | 声明的工厂与供应商接口 | 归属数量 / 验收机器数量 | 校准；验收；含量分析；供应状态；采样不确定性 |
| cp_pack | dispatch | 一种包装 | 匹配时期记录 | 组件；聚合物或树种牌号；质量；再用库存；返回量；发运；验收配置 | 分别称量实际包装组件；追踪再用服务和返回量，不计入机器分母。 | kg | 每个批次、区间与配置 | 包含报废返工的同一完整报告期 | 声明的工厂与供应商接口 | 归属数量 / 验收机器数量 | 校准；验收；含量分析；供应状态；采样不确定性 |

实际时期采集：Q 为每个交换的归属数量，包含报废和返工负荷；N 为一种配置的验收完整设备数量；M 为校准的验收净质量之和除以 N。求 q_item = Q/N，q_ref = Q/同一配置和时期的验收净质量之和。不汇总不同配置，不把报废机器、包装、试验作物或排出的试验水计入分母。采集表将各交换聚合为每台验收机器，cp_mass 聚合每台验收净质量。换算表再给出最终每千克清单；原始计量仍为时期总量。

### 计算规则

| rule_id | 适用对象 | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品机器的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |
| period_accounting | 同一配置与时期 | Q = 包含报废返工负荷的归属时期交换；N = 一种配置的验收完整设备数量；每台平均净质量 = 校准验收净质量之和 / N；每台交换 = Q/N；最终每千克交换 = Q/这些验收净质量之和。分母不含报废机器、包装、试验作物或排出的试验水质量。 | cp_mass; cp_material; cp_energy; cp_water; cp_waste; cp_emission; cp_pack | 匹配每台原始总量与每千克清单 |  |
| utility_residual | cp_energy | 残余 = 输入 + 实际场内发电 - 输出 - 净储能增加 - 已分配加工、太阳能制作、表面处理、装配、试验、发运负荷，均采用同一计量期和单位。仅用实测因果驱动分配残余。按单位、时期、计量拓扑及合成不确定性调查负残余，不截断为零。自产能量有其燃料和排放清单，不为同一自产量另加外购电力。 | cp_energy | residual utility |  |
| species_balance | physical material/species | 对每种材料、所含元素或化学物质，在来料库存、产品、废料、污泥、废水、排放及期末库存每项使用各自匹配的含量与干湿基；包含反应吸收或消耗及配对内部转移抵消。水平衡包含供水、物料水分、反应、保留库存、蒸发及排水。不把合金、配方或污泥总质量等同物种质量。 | cp_material; cp_mass; cp_water; cp_waste; cp_emission | balance residual |  |
| water_balance | 物理水与水分记录 | 新鲜水投入 + 输入物料水分 + 期初水库存 + 反应生成水 = 产品保留水 + 湿废物和污泥中的水 + 外排废水或排水中的水 + 蒸发 + 期末水库存 + 反应消耗水。每项湿投入、产品、废物、污泥、废水与库存均采用各自实测水分或水含量，在采集体积时采用各自密度，并匹配干湿基。抵消配对内部回水，同时保留泵送与处理能量。按实际计量、采样和分配合成不确定性调查闭合，不假定水损失或通用容差。 | cp_material; cp_mass; cp_water; cp_waste; cp_emission | 有限水平衡残差与不确定性 |  |
| solvent_balance | actual solvent species | 核算溶剂投入与期初库存、产品保留、溶剂回收、捕集介质含量、废水污泥含量、期末库存、核实的实际销毁及物种特定空气排放。捕集不等于销毁，不把无法解释的平衡残差分配给空气。 | cp_material; cp_waste; cp_emission | solvent closure | epa-metal-coating-2002 |
| combustion_species | test emissions | 燃料碳平衡仅在自身碳组成及氧化碳分配明确时约束化石二氧化碳；一氧化碳、一氧化氮、二氧化氮需各自监测或经验证的技术特定证据。单独保留按二氧化氮计的氮氧化物约定，不假定完全销毁。 | cp_energy; cp_emission | species release |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| same_config | reference | 追溯图纸修订、模块、作物适配、主要设计用途、验收与校准净质量；无通用机器重量。 | 物料清单、自制外购及验收记录 |
| coverage | active routes | 对实际缺失合金、聚合物、树种、试剂、残渣、供应商及排放介质扩展原子卡片。实际配方与路线启用须有证据；未知不等于零。 | 供应商证书、安全数据表、路线与废物凭证 |
| uncertainty | all quantities | 按实际计量、采样和分配合成不确定性调查闭合。无通用容差、默认得率、配方、能量、寿命或经验范围。 | 校准及代表性采样 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| identity | reference | 要求全部限定信息与实际主要农业用途；拒绝其他物料用途、干燥服务或作物输出作为设备身份。缺少实际类别参考 UUID 时保持未解决。 | un-cpc-3-0 |
| denominator | inventory | 要求一种配置同一时期正的验收净质量与数量、校准净范围及每项适用行明确归一化；检查试验、包装及报废排除。 |  |
| boundary | make/buy and utilities | 核对上游模块一次计入、实际随附范围、配对转移、保留加注、外购与自产分开；不在分表之上重复加入全厂总量；外购蒸汽采用实际净焓。 |  |
| closure | physical species and routes | 要求产品、废物、污泥、废水和库存各自匹配含量，实际水、溶剂及物种特定排放闭合。按实际合成不确定性调查残差，不编造损失、空气残余或销毁。 |  |
| completeness | dataset | 报告已采集投入、已执行及跳过检查、发现与完整性。缺数量、身份、供应商、所需配方或关系不受支持时结果不确定；不得无条件宣称校验或发布完成。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景数据生产指导 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 声明设备配置的出厂生产及披露就绪状态的下游 process 或 lifecyclemodel 投影 |
| excluded_use | 作物干燥服务；田间能量；仅凭 kg 进行服务或寿命等价比较；缺口未解决时通用配方或已发布宣称 |
| required_metadata | 全部参考限定信息、边界、时期与地区、供应状态、物料清单、自制外购矩阵及分配 |
| required_quality_disclosure | UUID 或供应商、路线配方及经验范围缺口；校准采样闭合不确定性；缺失或不适用交换 |
| update_trigger | 设计、供应模块、加热结构、主要用途、牌号配方、供应商、计量拓扑或证据变化 |

## 11. 数据源

| source_id | Type | Reference | 用途 |
| --- | --- | --- | --- |
| un-cpc-3-0 | official_guidance | UNSD Central Product Classification Version 3.0, structure 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 44518 农业产品干燥机与 44912 其他物料干燥机；仅分类，不是生产数据 |
| cimbria-drying-2024 | handbook | Cimbria, Continuous Flow Drying, release Oct. 2024/EN, PDF pp.6–11,12–14; footer p.16. https://www.cimbria.com/content/dam/public/grain-and-protein/cimbria/brochures/drying/continuous-flow-dryer/Continuous_Flow_Dryer_GB.pdf | 实际模块化谷物干燥结构及有条件钢材、风机、控制与加热选项。运行性能和尺寸不规定工厂物料清单或能量。 |
| opico-installations-v2 | handbook | OPICO, Grain Dryer Installations, leaflet V2, actual layout footer 26/2/10 (publication date not independently established), PDF pp.1,4. https://products.opico.co.uk/media/34448/opico-magna-grain-dryer-2910qf-brochure.pdf | 独立批式循环结构；分开的液化石油气或柴油及工厂装配选项；区分干燥机与周围储存输送厂区。无工厂强度因子。 |
| fao-fruit-processing-2008 | handbook | Susan Azam Ali, Home-based Fruit and Vegetable Processing in Afghanistan, Book One, FAO 2008, ISBN978-92-5-105916-6, PDF pp.41–43 (printed32–34),69 (printed60). https://www.fao.org/4/a1549e/a1549e01.pdf | 实际果蔬直接或间接太阳能柜、木框、膜或玻璃及托盘反例；设计与绿叶敏感遮光证据，不是强制树种聚合物配方或设备工厂数据集。 |
| epa-metal-coating-2002 | official_guidance | US EPA, NESHAP for Source Category: Miscellaneous Metal Parts and Products Surface Coating Operations—Technical Support Document, EPA-453/R-02-006, February2002; PDF pp.115–117 (printed8-16–8-18), underlying characterization section dated30September1998. https://nepis.epa.gov/Exe/ZyPDF.cgi?Dockey=P1006FDO.PDF | 有条件预处理、施涂、闪干及固化排放点；原文明确缺详细涂料或控制信息。不采纳实际设备涂装配方或排放因子。 |
