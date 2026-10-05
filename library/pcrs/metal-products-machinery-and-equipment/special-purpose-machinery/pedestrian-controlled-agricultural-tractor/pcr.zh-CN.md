---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.pedestrian-controlled-agricultural-tractor
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 手扶农用拖拉机

## 1. 范围与适用性

本候选 PCR 覆盖新完整步行操控农用牵引动力机的工厂制造，以操作者步行并通过扶手操控的双轮手扶拖拉机为实例。交付动力机含发动机、传动、驱动轮、操控件、安装防护及已声明首次加注。可拆旋耕机、犁、割草平台、刀杆、挂车及其他机具不属于本参考，即使作为组合套装销售也须单独声明和建模。排除乘坐式拖拉机、工业站台牵引车、以切割功能定义的自行割草机、单售发动机或零件、再制造、农场作业、作物产量、维护和报废。BCS PowerSafe 及历史 Action 文件支持设计差异，不支持行业制造数量。代表性路线采购成品动力传动总成，按厂内实际情况制造和涂装结构件，装配和调整动力机并记录工厂验收。科学方法学审查尚待完成。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.pedestrian-controlled-agricultural-tractor |
| classification_refs | CPC 3.0 44141; 候选较窄范围；不声明已接受映射 |
| covered_products | 新完整手扶农用拖拉机动力机 |
| excluded_products | 乘坐式和履带式拖拉机；工业站台牵引车；可拆机具；割草机产出；单售零件 |
| representative_product | 一种声明的机械传动双轮拖拉机配置，安装指定汽油发动机；柴油及其他传动配置须有各自实际配置记录 |
| production_route | 指定总成采购；实际结构制造和涂装；发动机、传动及操控件安装；调整和验收 |
| market_state | 工厂边界验收完整牵引动力机，排除可拆机具 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造一种指定手扶农用牵引动力机；不提供田间服务数量 |
| How much | 验收净完整动力机的 1 kg 制造份额；按实际机器放大采用实测 M |
| How well | 通过声明的配置专属工厂验收，涉及驱动、方向及 PTO 操控、扶手调节、离合器、制动及安装防护和安全装置；仅针对已配置功能 |
| How long or cycle | 一次制造交付；不假定作业寿命、公顷或作物产量 |
| reference_flow_link | `finished_machine` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 行人控制拖拉机 `67fe15ac-d2bb-440b-a498-321e3b4c7b7c` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号；农用牵引功能；步行操作者模式；发动机类型、型号、燃料及起动器；传动和换向器；差速器；离合器；车轴和车轮结构；轮胎尺寸；扶手和操控件；PTO 和挂接；制动；防护及安全操控；安装选件；供货总成完整性；油液及余油包含情况；排除机具；实测净 M；场址；期间；交付边界；包装 |

声明全部限定信息。称量验收合格配置动力机，排除可拆机具、散装备件及包装。含旋耕机的目录重量不能代替 M。等质量不代表等农业服务；不以发动机功率或目录重量作为质量因子。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `electricity_energy` | electricity_fabrication; electricity_finishing; electricity_assembly; electricity_factory_test | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留表计 kWh 并用精确等式 1 kWh = 3.6 MJ 换算；能量保持能量。选定供电为低于 1 kV 电网平均交流电。 |
| `liquid_mass` | tap_water; engine_oil; gear_oil; test_gasoline; test_diesel | 质量 | kg | 称量液体，或在 cp_material/cp_fuel 保留体积、实测或供应商确认密度、温度及明确质量换算。不假定通用密度或热值。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 指定原料及完整外购组件交付拖拉机工厂 |
| starting_condition_role | 前景模块投入；供应商制造及来料运输为单独链接活动 |
| product_classification_scope | CPC44141 中的手扶农用牵引动力机；不是机具套装或割草服务 |
| recursive_input_rule | 外购完整拖拉机须作为带供应商边界的投入，不能递归重复本前景；再使用或再制造属于另一条路线。 |
| upstream_dataset_requirement | 匹配材料等级、总成完整性、油液包含、供应路线、电压及地区；披露缺失上游、运输及处理链接 |
| disclosure | 声明边界、实际工单、外包工序、间接活动分配及包装。未证明兼容上游和处理及运输覆盖完整时，本前景模块不是完整摇篮到工厂门清单。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_operations` | factory_gate | 纳入收货核查、实际原料切割/成形/钻孔/焊接/机加工、适用涂装、装配、调整、验收、应归属返工及发运保护。液压、热处理及铸造工序仅在实际进行时纳入；不能因采购壳体假定厂内铸造。 |  |
| `boundary_completeness` | actual_configuration | 将每个实际物料清单及工序对应一个原子交换或有记录排除。实际壳体毛坯、齿轮、轴、制动器、皮带、密封、握把、螺母、垫圈、软管、离合器油、切削液配方、保护气、处理残渣及实测排放须分别增列。这些初始卡片不是通用完整物料清单。静液压或皮带传动须记录其实际组件及工序。 |  |
| `boundary_test` | factory_test | 工厂有动力运转燃料及实测排放在边界内；后续农场燃料和作物生产在边界外。供应商发动机试验属于上游，除非在本工厂重复进行。试验耗油与任何交付留存燃料分开记录。 |  |
| `boundary_implements` | reference_product | 牵引动力机与可拆机具分开。不能将组合旋耕或割草机按动力机 M 归一化，也不能对本拖拉机套用割草机 PCR。将组合销售质量与分别实测产品及包装核对。 | `bcs-powersafe`; `bcs-action-historical` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | 结构件制造和机加工 | conditional | 本配置在厂内切割、成形、钻孔、机加工或焊接 | 前景制造阶段；内部在制品转移保持在工厂模块内 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| `finishing` | 表面预处理和涂装 | conditional | 厂内预处理或涂装 | 前景制造阶段；内部在制品转移保持在工厂模块内 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| `assembly` | 配置明确的动力机装配 | required | 每台验收完整拖拉机 | 前景制造阶段；内部在制品转移保持在工厂模块内 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| `factory_test` | 工厂调整和验收 | required | 每台成品拖拉机；仅在实际验收计划要求时进行有动力运转 | 前景制造阶段；内部在制品转移保持在工厂模块内 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| `packout` | 发运保护 | conditional | 工厂交付边界施加包装 | 前景制造阶段；内部在制品转移保持在工厂模块内 | 每 1 kg 参考流；采集基准为每台验收成品机器 |

| 工序 | 阶段 | 必需现场记录及路线条件 |
| --- | --- | --- |
| 收货及自制外购决策 | fabrication; assembly | 依据物料清单记录组件完整性及原料状态，分开来料运输及收货损失 |
| 切割和成形 | fabrication | 厂内进行时，记录排料图、原料领用、折弯和工具设置、表计能耗、边角料及不合格品 |
| 钻孔和机加工 | fabrication | 厂内进行时，追溯壳体、轴或结构毛坯、机时、工具能耗、切屑及各切削液配方；采购成品齿轮不代表厂内热处理 |
| 焊接和打磨 | fabrication | 厂内进行时，记录焊接方法、各焊丝及气体、用电、收集粉尘、监测排放及返工 |
| 清洗、涂装及固化 | finishing | 厂内进行时，区分干式预处理及湿槽；保留槽液配方和更换、水供应、粉末回收、固化能耗及废物去向。其他涂装或热源须展开行 |
| 发动机和传动安装 | assembly | 记录实际发动机安装、离合及传动接口、紧固扭矩、润滑和外购总成包含情况 |
| 扶手、操控件、车轮和防护 | assembly | 记录已配置的拉索调节、换向及 PTO 联动、扶手锁止、车轮对中、制动及安全操控；不规定通用组件设计 |
| 验收和返工 | factory_test | 保留实际验收清单、试验时间和负荷、试验台能耗、有动力运转燃料、实测排放及失败和复试；声明油液和余油状态后在验收完成时称量 M |
| 包装 | packout | 记录每种发运保护材料及损失，不计入整机 M；厂内工装不是交付产品 |

### 过程： 结构件制造和机加工 (`fabrication`)

#### 输入

##### 产品流

###### 热轧非合金钢板 (`steel_sheet`)

仅用于厂内切割或成形的支架和防护件。记录一种牌号、厚度、领料质量和退料；排除外购总成中包含的钢。

- 选定流： 热轧非合金钢板
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

###### 圆截面焊接钢管 (`round_steel_tube`)

仅在厂内制造管状扶手时纳入。称量切割前一种已声明牌号和直径的净领用管材；外购成品扶手替代此路线。

- 选定流： 圆截面焊接钢管
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

###### 实心钢电弧焊丝 (`welding_wire`)

仅在实际采用实心焊丝焊接路线时纳入；记录牌号及含返工的净领用质量。实际配方的保护气须另列。

- 选定流： 实心钢电弧焊丝
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

计量本阶段及应归属返工用电，与其他阶段表计分开。本选定身份为用户端低于 1 kV 的电网平均交流电；其他电压、自发电或合同电源须使用另一个相符身份。

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

###### 未处理钢边角料 (`steel_scrap`)

称量实际制造产生且外运的分类未处理钢边角料和洁净切屑。含油切屑须另列废物；内部转移及回用边角料不是外运废物。

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

###### 收集的干态钢磨削粉尘 (`grinding_dust`)

仅用于称重并交付接收方的收集干态磨削粉尘；披露金属组成和污染情况。它与空气排放不同。

- 选定流： 收集的干态钢磨削粉尘
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

仅在监测确认实际空气颗粒物排放且粒径和空气子介质均未特指时纳入。保留出口浓度、废气体积、治理设备及时段；不假定焊接因子或必然排放。

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

### 过程： 表面预处理和涂装 (`finishing`)

#### 输入

##### 产品流

###### 低压电网电力 (`electricity_finishing`)

计量本阶段及应归属返工用电，与其他阶段表计分开。本选定身份为用户端低于 1 kV 的电网平均交流电；其他电压、自发电或合同电源须使用另一个相符身份。

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

仅在工厂施用外购干粉涂料时纳入。记录一种树脂配方及扣除回收退库粉末后的净领用质量；液体涂料属于另一配方和路线。

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

###### 自来水 (`tap_water`)

仅用于采用外供饮用水等级自来水的湿式清洗。计量 kg；体积表读数须保留密度依据并换算质量。原水取水、去离子水和废水属于不同身份。

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

###### 无水碳酸钠清洗试剂 (`sodium_carbonate`)

仅在清洗配方单独采购本试剂时纳入。记录纯度、干态领用质量及换槽；用水单列。其他化学品及水合物须分别列行。

- 选定流： 无水碳酸钠清洗试剂
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

###### 固体废粉末漆过喷料 (`powder_waste`)

称量内部回收后外运的未回收固体过喷料，声明配方及处理去向。不设通用过喷率。

- 选定流： 固体废粉末漆过喷料
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_waste`
- 来源：

###### 未处理的碳酸钠水溶液金属清洗废水 (`cleaning_wastewater`)

仅用于交付外部处理的该槽液。记录质量、pH、碳酸盐及实测污染物；内部回用不是外运。厂内处理须建立独立清单并分列实测环境排放。

- 选定流： 未处理的碳酸钠水溶液金属清洗废水
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_waste`
- 来源：

### 过程： 配置明确的动力机装配 (`assembly`)

#### 输入

##### 产品流

###### 低压电网电力 (`electricity_assembly`)

计量本阶段及应归属返工用电，与其他阶段表计分开。本选定身份为用户端低于 1 kV 的电网平均交流电；其他电压、自发电或合同电源须使用另一个相符身份。

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

###### 成品单缸汽油发动机 (`petrol_engine`)

仅用于汽油配置。称量一种指定的外购完整发动机，记录起动器、滤清器、油箱、防护及工厂加注完整性。不重复计入其内部金属或上游发动机制造。

- 选定流： 成品单缸汽油发动机
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品单缸柴油发动机 (`diesel_engine`)

仅用于柴油配置。称量指定外购完整发动机，记录电动或反冲起动器包含情况、空气滤清器、交付油液及燃料状态。同一台机器不能与汽油发动机投入混合计入。

- 选定流： 成品单缸柴油发动机
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 完整机械式双轮手扶拖拉机传动总成 (`transmission`)

代表性机械路线：称量一种指定完整齿轮箱，声明差速器、换向机构和车轴包含情况。供应商已包含的轴承、制动器、离合器及油液不再单列计入。厂内齿轮及壳体制造则须展开实际毛坯、机加工、热处理及润滑剂行。

- 选定流： 完整机械式双轮手扶拖拉机传动总成
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品干式摩擦离合器 (`dry_clutch`)

仅用于一种指定且单独供货的干式离合器配置。记录设计、摩擦衬片组成和质量；传动总成已含或安装湿式离合器时排除此行。BCS Action 为历史路线实例。

- 选定流： 成品干式摩擦离合器
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品多片油浴液压离合器 (`wet_clutch`)

仅用于一种指定且单独采购的油浴液压离合器，如 PowerSafe 实例。记录完整质量及包含油液和泵的情况；另行加注油液须单列。本配置不能同时计入干式离合器。

- 选定流： 成品多片油浴液压离合器
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品钢制扶手总成 (`handlebar`)

仅在采购成品时纳入；记录可反转性、调节机构、握把和已含操控件并称量完整总成。厂内管材制造路线替代本外购投入。

- 选定流： 成品钢制扶手总成
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品机械节气门操控拉索 (`throttle_cable`)

称量一种指定单独供货的拉索，含护套及端接件。扶手或发动机总成已含拉索不再计入；其他操控拉索须单列。

- 选定流： 成品机械节气门操控拉索
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 农用牵引新充气橡胶轮胎 (`agricultural_tyre`)

仅用于一种声明尺寸和层级的单独供货轮胎。称量安装轮胎；外购完整车轮替代轮胎及轮辋行。钢制笼轮须使用另一交换。

- 选定流： 农用牵引新充气橡胶轮胎
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品钢制农用牵引轮轮辋 (`steel_rim`)

仅用于单独供货并安装的拖拉机轮辋。记录一种轮辋设计、直径、轮毂接口和质量；轮胎及完整车轮不能重复计入。

- 选定流： 成品钢制农用牵引轮轮辋
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

称量一种指定单独采购的滚珠轴承设计。本卡片将较宽官方轴承身份限定为该具体设计；外购发动机或传动总成内部轴承排除。

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

###### 成品六角头钢螺栓 (`steel_bolt`)

称量一种声明等级、镀层和尺寸的已安装螺栓。单独供货的螺母及垫圈须分别列行，不能汇总紧固件质量。

- 选定流： 成品六角头钢螺栓
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 矿物基发动机润滑油 (`engine_oil`)

仅用于该声明配方在工厂单独首次加注或补加。记录粘度、添加剂配方、领用和退回质量及交付加注量。不向供应商已加注发动机追加假定加注，也不计未来维护。

- 选定流： 矿物基发动机润滑油
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

###### 矿物基齿轮润滑油 (`gear_oil`)

仅用于已声明齿轮箱油配方的实测单独首次加注。记录粘度、兼容性、净质量及供应商预加注；另一配方湿式离合器油须单列。

- 选定流： 矿物基齿轮润滑油
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

###### 完整铅酸起动蓄电池 (`starter_battery`)

仅在电起动配置包含本单独采购且已灌液电池时纳入。记录电压、容量、化学体系、电解液完整性及实测质量；反冲起动机器排除本行。

- 选定流： 完整铅酸起动蓄电池
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

#### 输出

##### 产品流

###### 完整手扶农用拖拉机 (`finished_machine`)

验收净完整牵引动力机的 1 kg，含发动机、传动、驱动轮、扶手操控件及安装防护。产出不含可拆作业机具、散装备件及运输包装；包含 factory_test 的验收工序。

- 选定流： 行人控制拖拉机 `67fe15ac-d2bb-440b-a498-321e3b4c7b7c`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 1 千克
- 数值来源模式： fixed_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_mass`
- 来源：

### 过程： 工厂调整和验收 (`factory_test`)

#### 输入

##### 产品流

###### 低压电网电力 (`electricity_factory_test`)

计量本阶段及应归属返工用电，与其他阶段表计分开。本选定身份为用户端低于 1 kV 的电网平均交流电；其他电压、自发电或合同电源须使用另一个相符身份。

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

###### 汽油 (`test_gasoline`)

仅在相应发动机配置于工厂进行有动力验收运转时纳入。记录实际试验耗油、领用质量、余油及退回量；来源归属和牌号采用供应商记录，不能由本通用身份推断。若提供交付留存燃料，须另列并声明净质量包含情况。

- 选定流： 汽油 `e6677cd5-b574-4e00-a3bd-c373ac796135`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_fuel。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_fuel`
- 来源：

###### 柴油 (`test_diesel`)

仅在相应发动机配置于工厂进行有动力验收运转时纳入。记录实际试验耗油、领用质量、余油及退回量；来源归属和牌号采用供应商记录，不能由本通用身份推断。若提供交付留存燃料，须另列并声明净质量包含情况。

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

##### 废物流

###### 废矿物基发动机润滑油 (`spent_engine_oil`)

仅在有记录的工厂试验排出本油并交付外部废物接收方时纳入。称量分开的废油，披露水和金属污染及处理边界。不假定每台机器换油。

- 选定流： 废矿物基发动机润滑油
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

###### 化石二氧化碳排放到空气 (`test_co2`)

仅在实际验收运转测量确认本单一物质排放到空气且子介质未特指时纳入；化石碳行须有化石来源归属记录。记录同次运转出口浓度、排气流量和该物质质量。未经实测形态分解不得将汇总 NOx 转为 NO 或 NO2，不得以 N2O 替代 NO、使用猜测因子或将未知排放当作零。颗粒物行仅用于粒径未特指。

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

###### 化石一氧化碳排放到空气 (`test_co`)

仅在实际验收运转测量确认本单一物质排放到空气且子介质未特指时纳入；化石碳行须有化石来源归属记录。记录同次运转出口浓度、排气流量和该物质质量。未经实测形态分解不得将汇总 NOx 转为 NO 或 NO2，不得以 N2O 替代 NO、使用猜测因子或将未知排放当作零。颗粒物行仅用于粒径未特指。

- 选定流： 一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_emission`
- 来源：

###### 一氧化氮排放到空气 (`test_no`)

仅在实际验收运转测量确认本单一物质排放到空气且子介质未特指时纳入；化石碳行须有化石来源归属记录。记录同次运转出口浓度、排气流量和该物质质量。未经实测形态分解不得将汇总 NOx 转为 NO 或 NO2，不得以 N2O 替代 NO、使用猜测因子或将未知排放当作零。颗粒物行仅用于粒径未特指。

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

###### 二氧化氮排放到空气 (`test_no2`)

仅在实际验收运转测量确认本单一物质排放到空气且子介质未特指时纳入；化石碳行须有化石来源归属记录。记录同次运转出口浓度、排气流量和该物质质量。未经实测形态分解不得将汇总 NOx 转为 NO 或 NO2，不得以 N2O 替代 NO、使用猜测因子或将未知排放当作零。颗粒物行仅用于粒径未特指。

- 选定流： 二氧化氮排放到空气
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_emission`
- 来源：

###### 颗粒物排放到空气 (`test_particulate`)

仅在实际验收运转测量确认本单一物质排放到空气且子介质未特指时纳入；化石碳行须有化石来源归属记录。记录同次运转出口浓度、排气流量和该物质质量。未经实测形态分解不得将汇总 NOx 转为 NO 或 NO2，不得以 N2O 替代 NO、使用猜测因子或将未知排放当作零。颗粒物行仅用于粒径未特指。

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

### 过程： 发运保护 (`packout`)

#### 输入

##### 产品流

###### 瓦楞纸板 (`cardboard`)

仅用于含再生纤维且纤维含量至少 80% 的 C 型瓦楞纸板。称量净发运保护材料；不计入整机 M。其他包装等级须使用相符行。

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

仅用于单独领用的非泡沫、非自粘、未增强 LDPE 保护薄膜。称量实际材料并保留牌号和来源归属；不从身份假定化石来源或再生比例。不计入 M。

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
| `allocation_direct` | shared_operations | 先按工单、阶段及配置分拆。先将实际原料领用、外购组件、试验燃料及实测排放归属各自型号，再分配共享活动。 |  |
| `allocation_physical` | shared_energy_and_support | 使用实测驱动关系：设备用电曲线及实际机时、固化装载能耗、试验台表计及试验时间，或有因果关系的称重原料通量。采集驱动总量并将分配合计与表计核对；不得对不同发动机或离合配置按台数或目录质量等分。未建立物理关系时披露未解决分配及敏感性；不强加通用经济比例。 |  |
| `allocation_rejects` | waste_rework | 将应归属的失败试验、返工及不合格品计入同一配置和期间的验收产出分母。外运废钢及废油在接收边界明确为废物；不自动给予避免生产抵扣。实际接收路线及任何联产品决策须另行记录依据。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | assembly | finished_machine | 校准称重和验收 | 型号；配置；序列号；验收净质量 M；油液状态；排除机具及包装 | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 每台或有依据的配置专属代表样本 | 同一声明生产期间；披露缺口 | 仅声明制造场址 | 每台验收净质量 | 校准；装配清单；验收；样本覆盖 |
| cp_configuration | all processes | actual route | 物料清单及工单核查 | 型号；物料清单修订；供货组件完整性；工序台账；不合格及返工；验收数量；外包边界 | 将每个实际组件及工序对应清单或有依据排除。区分采购完整总成及厂内制造，分开记录发动机、离合器及车轮不同配置。 | record | 每次配置变化及生产批次 | 同一声明生产期间；披露缺口 | 仅声明制造场址 | 一份一致配置记录 | 签署物料清单；路线；采购规格；边界依据 |
| cp_material | fabrication; finishing; assembly; packout | stock; formulation; liquid; packaging | 库存台账和称重 | 单一物料；等级及配方；领用；退回；库存变化；液体体积、密度及温度；验收数量 | 称量各净领用物料，核对库存变化、回收物及在制品；体积转质量时保留批次密度。将润滑剂首次加注与供应商已加注组件分开。 | kg | 每次领用及批次核对 | 同一声明生产期间；披露缺口 | 仅声明制造场址 | 应归属物料净质量 / 同一配置的验收机器数量 | 秤；领用台账；安全数据表；供应商密度；配方 |
| cp_parts | assembly | purchased component | 组件收货及装配记录 | 单一组件编号；供应商；设计；数量；实测质量；包含油液及子件；安装数量；验收数量 | 使用实际交付组件质量或批次专属经核验数量质量换算记录；披露不确定性并避免重复计入已含组件。不采用通用每台发动机或车轮质量。 | kg | 每个供货批次及生产批次 | 同一声明生产期间；披露缺口 | 仅声明制造场址 | 应归属安装组件质量 / 同一配置的验收机器数量 | 校准秤；批次质量；供货完整性；装配清单 |
| cp_energy | fabrication; finishing; assembly; factory_test | electricity | 表计及驱动台账 | 阶段；供电电压及来源；表计 kWh；时段；驱动量；共享总量；验收数量 | 计量各阶段并区分试验台电力与发动机燃料。按 1kWh=3.6MJ 换算；保留实测分配驱动量、待机和返工包含情况并核对总量。 | MJ | 每个表计时段及批次 | 同一声明生产期间；披露缺口 | 仅声明制造场址 | 应归属电能 / 同一配置的验收机器数量 | 表计校准；账单；驱动日志 |
| cp_fuel | factory_test | individual test fuel | 燃料平衡及试验记录 | 发动机配置；燃料牌号；化石或生物来源归属；领用质量；退回及余留质量；试验时长及负荷；验收数量 | 称量各对应验收试验实际耗油。保留初末油箱存量及退回；仅按有依据密度及温度换算体积。分开交付余留燃料及供应商试验燃料。 | kg | 每次有动力运转及燃料平衡 | 同一声明生产期间；披露缺口 | 仅声明制造场址 | 应归属试验燃料质量 / 同一配置的验收机器数量 | 秤；试验日志；供应商牌号及来源；密度 |
| cp_waste | fabrication; finishing; factory_test | individual waste | 地磅或容器平衡 | 单一废物；组成；污染；质量；内部回收；接收方；处理边界；验收数量 | 称量分类实际外运量，核对回收及库存变化，保留接收记录，不混合收集粉尘与空气排放或废水与自来水。 | kg | 每次外运及批次 | 同一声明生产期间；披露缺口 | 仅声明制造场址 | 应归属外运废物质量 / 同一配置的验收机器数量 | 秤；接收凭证；组成；废物分类 |
| cp_emission | fabrication; factory_test | individual air substance | 出口监测及计算 | 单一物质；浓度及单位；气体体积及流量；时间；温压；干湿基；治理；粒径分级；介质；碳来源；验收数量 | 由同一时段治理后浓度和实测排气体积确定单一物质质量，保留单位换算、干湿及温度基准和采样覆盖。NO 和 NO2 须分别测量；不设通用排放因子，也不将缺测当零。 | kg | 代表性实际运行时段 | 同一声明生产期间；披露缺口 | 仅声明制造场址 | 应归属实测物质质量 / 同一配置的验收机器数量 | 采样报告；校准；形态分析；来源依据；单位计算 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品机器的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `quality_configuration` | all inventory rows | M、数量及分母采用相同验收发动机、离合及车轮配置和期间；核对总成质量、油液、库存及在制品变化、废物和退回，不编造平衡排放。 | cp_mass; cp_configuration; cp_material; cp_parts; cp_waste |
| `quality_coverage` | all inventory rows | 核对每个实际物料清单及工序。披露缺失 UUID、供应商链接、分配驱动量、测量及采样缺口；不设通用截断百分比、整机重量或寿命。 | cp_configuration; cp_energy; cp_fuel; cp_emission |
| `quality_evidence` | configuration_examples | PowerSafe 及历史 Action 来源为同一制造商设计实例，不是独立定量工厂样本。Action 仅用于说明历史记录的干式离合器设计；二者均不提供当前行业数量或通用试验耗油和排放。 | bcs-powersafe; bcs-action-historical |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference` | reference_flow | 要求正值实测 M、精确配置动力机边界、完整验收记录及 finished_machine 的 1kg。各非参考行以原分子单位应用 normalize_mass。 |  |
| `validation_completeness` | inventory | 核验实际发动机、传动、离合、操控、车轮、防护及油液完整性；区分外购总成及厂内制造、机具及拖拉机。核对能耗、燃料、不合格及返工；缺口表示覆盖不完整，不是已核实零值。 |  |
| `validation_identity` | all inventory rows | 按公开物质、路线、产品/废物/基本流类型、实际参考属性及单位核验各 UUID；核查化石来源归属及环境介质。NO、NO2、N2O 和汇总 NOx 不同。保持精确官方中文 baseName 及双语 row/rule/UUID 一致。 |  |
| `validation_claims` | dataset_claims | 在解决上游、运输和处理覆盖及身份缺口前，拒绝完整摇篮到工厂门或完全解析数据集声明。不从本制造参考推断科学批准或农业服务等效。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 配置明确的前景农用动力机制造模块；本画像标题不代表 PCR 发表 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 相同配置拖拉机制造清单，按实测 M 放大并声明上游链接 |
| excluded_use | 农场作业、作物产量、寿命、服务比较、按动力机质量归一化拖拉机机具套装或科学批准 |
| required_metadata | 全部必需限定信息；型号及物料清单；场址、期间及边界；自制外购；油液及余油；排除机具；测量及分配协议；供应商及废物链接 |
| required_quality_disclosure | 称重和测量不确定性；配置采样；未解决 UUID 及分配；缺失上游和处理链接；排放监测及形态分析缺口；返工和不合格品 |
| update_trigger | 发动机、起动器、离合器、传动、车轮、油液或机具边界变化；现场路线、供应商、能源来源或分配驱动量变化 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| bcs-powersafe | handbook | BCS, Two-wheel tractors range, 740 PowerSafe, PDF physical p.9, printed pp.16–17; edition unspecified (PDF creation metadata2025-10-16). https://bcsagri.com/wp-content/uploads/2022/04/BCS-Gamma-Motocoltivatori_EN.pdf | 机械传动和液压离合器及分开的汽油、柴油和起动器配置实例。不采用目录质量、寿命、能力或清单因子。 |
| bcs-action-historical | handbook | BCS, Two-wheel tractors Action, Technical features, PDF physical p.14, printed pp.26–27; historical document (PDF creation metadata2022-11-29; edition unspecified). https://bcsagri.com/wp-content/uploads/2022/10/BCS-MC-ACTION_EN.pdf | 仅支持历史干式离合器、机械传动、扶手、车轮及机具设计差异。不作为当前产品供应、通用制造要求或定量工厂数据依据。 |
