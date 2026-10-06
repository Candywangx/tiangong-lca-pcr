---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.commercial-laundry-washing-and-drying-machinery
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 配置商用洗涤与烘干机械制造

## 1. 范围与适用性

覆盖新完整水基洗脱机、电加热排风滚筒烘干机，以及工厂集成这些功能的叠置机制造。每个纳入功能模块按指定布料、程序及装载基准声明的额定干布容量大于10kg；不能相加容量满足条件。洗脱机可为电加热或无加热，声明实际进水及供热接口。本较窄 CPC44622 边界排除溶剂干洗机、燃气及蒸汽供热机器、热泵烘干机、隧道洗涤线、纺织布制造及整理机械、额定10kg及以下模块、单售部件、再制造、客户洗衣服务、使用期洗涤剂及用水能耗、寿命及报废。其他路线须明确展开方法。Electrolux及Speed Queen2022原件仅为历史配置实例。制造质量不能证明等清洗、烘干或洗衣服务性能。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.commercial-laundry-washing-and-drying-machinery |
| classification_refs | CPC 3.0 44622; 较窄候选范围；不声明已接受映射 |
| covered_products | 配置水基洗脱机及电加热排风滚筒烘干机；集成叠置机各功能模块按声明额定基准干布容量大于10kg |
| excluded_products | 溶剂干洗机；燃气、蒸汽及热泵路线；小型机器；隧道线；部件；洗衣服务 |
| representative_product | 一种完整配置机器，含滚筒及适用外筒、传动、悬挂或刚性安装、操控、水路或排风接口及声明电加热 |
| production_route | 收货及配置控制；实际板件及滚筒制造表面处理；采购模块装配；实际型号专属工厂试验；验收及可选保护 |
| market_state | 工厂边界新完整验收机器，声明排水干燥交付状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造一种声明完整商用洗涤烘干机器配置 |
| How much | 1 kg 验收净完整机器；一台机器由实际实测 M kg 表示 |
| How well | 满足实际型号专属机械及滚筒对中、电气、操控联锁及水路泄漏或风路加热验收计划。记录实际限值结果；不规定通用循环、泄漏限值或温度 |
| How long or cycle | 一次制造交付；不规定寿命或客户洗衣循环 |
| reference_flow_link | `finished_machine` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 洗衣房用洗衣机，每台可以洗干亚麻制品10千克以上者，干洗机，织物及其制品干燥机，每台可洗干亚麻制品超过10千克者 `20cac093-29a5-4999-bcc8-8839b4ef8de9` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号及序列；完整配置及清单修订；各功能模块干布容量及额定布料、程序、装载基准；洗脱机、烘干机或叠置完整性；滚筒外筒及水路排风接口；悬挂安装；供电电压及供热方式；传动风机操控包含；安装选项；供货子件；验收计划结果；排水干燥交付及余留润滑状态；实测净 M；场址期间边界；包装、运输限位、试验布及水、散装备件排除 |

在数据集元数据或等效注释声明这些限定。称量完整验收机器，包含安装操控选项及声明余留润滑。排除试验布及水、运输限位、包装和散装备件。叠置机使用一个整机 M，不能将该质量重复归给两个功能。目录净重、运输重及装载容量不能替代实际实测 M。特殊布料程序各有装载基准；不能将羊毛丝绸替代负载当一般干布额定值或合并型号容量。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `electricity_energy` | electricity_fabrication; electricity_finishing; electricity_assembly; electricity_factory_test | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留实际表计 kWh；按1 kWh =3.6 MJ 换算，匹配电压来源。铭牌功率或目录作业循环不是工厂试验能耗。 |
| `solution_mass` | tap_water_finishing; tap_water_factory_test; sodium_carbonate_solution; spent_cleaning_solution; test_wastewater; grease | 质量 | kg | 称量实际交付配方或溶液。体积记录须有实际密度温度及有依据换算；不重复采购预混物组分。 |
| `water_resource_volume` | groundwater | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 计量实际淡水井取水；资源体积与采购自来水及外运废水质量分开。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 声明板材耗材及分别指定成品部件收至洗涤机器工厂 |
| starting_condition_role | 前景投入；单独链接供应商生产及来料运输 |
| product_classification_scope | CPC44622 水基洗脱机及电加热排风烘干机子集 |
| recursive_input_rule | 采购成品滚筒外筒框架及完整传动操控风机模块替代本地原料制造或所含内部件。采购完整机器是供货边界投入，不再重复装配制造 |
| upstream_dataset_requirement | 匹配实际牌号状态、部件完整性、电气水路接口、能源来源、场址地区及供货运输接收边界 |
| disclosure | 本记录为前景制造模块，不是完整摇篮到工厂门。披露本地外包路线、共享公用工程、包装及缺失上游运输处理链接 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_operations` | manufacturing | 纳入收货检查及实际板材切割冲孔、滚筒开孔成形、连接、接口机加工、打磨清洗表面处理、机械水路电气集成、平衡对中、实际工厂验收、应归属不合格返工及保护。采购部件不能推断厂内铸造、电机绕线、热处理或聚合物制造；实际本地路线须展开原子投入产出。不设通用不锈钢牌号或涂装路线。 |  |
| `boundary_bom` | inventory | 将每个实际清单项工序对应一种原子交换或有依据排除。存在时展开单供轴、带轮、阻尼弹簧、门玻璃密封、阀、泵、排水软管、绒毛滤器、加热总成、恒温器、传感器、电子布线、保温、紧固及安装投剂选项。不能重复采购面板风机传动内部件。各实际设计、合金、化学浓度及废物分开；初始卡片不是完整通用清单。 |  |
| `boundary_test` | factory_test | 按实际型号专属检查验收记录滚筒平衡对中、电气操控联锁、注水泄漏排水或烘干风量加热。仅实际执行时纳入负载洗涤烘干循环。记录时长、负载布料、入口条件、结果、复试、用水回用排水及电表；不规定完整循环、洗涤剂量或试验布更换率。客户作业数据不提供工厂数量。 | electrolux-lagoon-2022; speedqueen-stack-2022 |
| `boundary_semantic` | reference_product | 现有商用器皿洗涤 PCR 覆盖餐具而非纺织品。现有工业风机及离心机 PCR 排除衣物烘干机，可描述单购风机部件。热泵设备交付单元不同且本路线排除热泵烘干机。旧分类脚手架及 ID 保持只读；本语义身份不声明映射已接受。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | 结构及滚筒制造 | conditional | 实际本地板材切割、成形、连接及机加工 | 前景阶段；内部在制品保持模块内 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| `finishing` | 声明清洗及表面处理 | conditional | 实际清洗、打磨或涂装路线 | 前景阶段；内部在制品保持模块内 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| `assembly` | 配置洗涤机器集成 | required | 每种声明完整配置 | 前景阶段；内部在制品保持模块内 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| `factory_test` | 工厂试验及验收 | required | 实际型号专属验收；湿试验或负载试验仅按实际执行 | 前景阶段；内部在制品保持模块内 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| `packout` | 发运保护 | conditional | 实际发运保护 | 前景阶段；内部在制品保持模块内 | 每 1 kg 参考流；采集基准为每台验收成品机器 |

| 工序 | 阶段 | 必需实际路线记录 |
| --- | --- | --- |
| 收货配置 | assembly | 牌号、供货完整性、零件号及安装清单 |
| 滚筒框架制造 | fabrication | 实际原料切割冲孔成形连接、加工余量、规程耗材；采购部件替代本路线 |
| 清洗表面处理 | finishing | 一种实际配方涂层、打磨粉尘捕集、内部回收及外运 |
| 集成 | assembly | 滚筒外筒传动悬挂、水路排水或风机加热、门及操控；装配对中及供货排除 |
| 验收 | factory_test | 实际干态或湿态负载试验计划；电力用水负载回用、排水干燥状态及完整净称重 |
| 发运 | packout | 保护实测，排除于整机 M |

### 过程： 结构及滚筒制造 (`fabrication`)

#### 输入

##### 产品流

###### 冷轧304不锈钢板 (`stainless_sheet`)

仅在实际本地滚筒、外筒、机架或柜体路线使用本单一供货声明牌号、厚度及交付状态时纳入。称量净领用退回并保留证书；采购成品结构替代其原料路线。这些牌号为条件设计，不是制造商通用要求。

- 选定流： 冷轧304不锈钢板
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

###### 冷轧非合金钢板 (`steel_sheet`)

仅在实际本地滚筒、外筒、机架或柜体路线使用本单一供货声明牌号、厚度及交付状态时纳入。称量净领用退回并保留证书；采购成品结构替代其原料路线。这些牌号为条件设计，不是制造商通用要求。

- 选定流： 冷轧非合金钢板
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

###### 平整热浸镀锌钢板 (`galvanized_sheet`)

仅在实际本地滚筒、外筒、机架或柜体路线使用本单一供货声明牌号、厚度及交付状态时纳入。称量净领用退回并保留证书；采购成品结构替代其原料路线。这些牌号为条件设计，不是制造商通用要求。

- 选定流： 平整热浸镀锌钢板
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

###### ER308L实心不锈钢焊丝 (`weld_wire`)

仅用于实际经证实 ER308L 实心焊丝规程。称量净领用及退回；不同焊丝组成分开，不设焊接消耗因子。

- 选定流： ER308L实心不锈钢焊丝
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

仅在实际规程使用纯氩时纳入。称量净供给气体或按实际温压及有依据密度明确换算实测体积。厂内混配所单独采购的纯气体须分别建立投入行及各自交付记录。外购保护气预混物须作为一个组成明确的供货混合物交换，保留实际领用、退回及交付证据；不能再将所含组分记录为纯气体采购。不规定必需气体路线。

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

计量实际阶段并包含应归属返工。本身份为用户端低于1kV电网平均交流电；其他电压来源须有独立相符交换。

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

称量声明板材路线分类且未经处理外运边角料。内部原料回用不是外运；镀锌、不锈及污染材料须分行。

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

###### 未处理洁净304不锈钢边角料 (`stainless_offcut`)

仅用于实际声明304路线；称量分类洁净外运边角料，保留合金证书及接收方。将公开钢边角料类别限定为本单一合金；不设镍回收抵扣或通用产率。

- 选定流： 钢废料，边角料 `ae44c4ac-bcd5-4a16-b0a5-d674ffeaab6b`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_waste`
- 来源：

###### 未处理洁净镀锌钢边角料 (`galvanized_offcut`)

仅在声明涂层板材路线产生本分类废物时纳入。称量外运边角料总质量并保留涂层及污染；金属锌含量不是废料总质量。

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

###### 收集的干态不锈钢打磨粉尘 (`collected_dust`)

仅用于实际收集且交付接收方粉尘；保留合金、磨料污染及干态。不能与空气排放或洁净板边角料合并。

- 选定流： 收集的干态不锈钢打磨粉尘
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

仅在实际治理后监测确认粒径及空气子介质未特指颗粒物质量时纳入。保留浓度、排气体积及采样基准；不因焊接打磨就推断必然排放。指定粒径须有独立身份。

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

### 过程： 声明清洗及表面处理 (`finishing`)

#### 输入

##### 产品流

###### 低压电网电力 (`electricity_finishing`)

计量实际阶段并包含应归属返工。本身份为用户端低于1kV电网平均交流电；其他电压来源须有独立相符交换。

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

仅用于实际柜体机架涂装的一种声明干粉配方。称量扣除退回回收后的净领用并计量实际固化；不规定不锈表面必需涂装。湿漆及其他热源须各自交换。

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

仅用于一种实际指定等级、结合剂及设计。按有依据作业记录将实测更换质量归属服务工单；原料氧化铝不是成品砂盘。

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

###### 水基碳酸钠清洗溶液 (`sodium_carbonate_solution`)

仅用于清洗的一种实际供货声明水基配方。称量采购溶液并保留浓度基准、温度及组成。不能另计采购混合液已含水或化学品。厂内配制时以各实际组分及混配记录替代。

- 选定流： 水基碳酸钠清洗溶液
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

###### 外供饮用水等级自来水 (`tap_water_finishing`)

仅用于实际外供饮用水等级水表面漂洗。称量 kg 或保留实际密度温度换算；排除采购预混清洗剂内水。

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

###### 取用的可再生淡水地下水 (`groundwater`)

仅在工厂实际为本路线由井取用可再生淡水且场址含水层及水源记录匹配公开资源类别时纳入。计量 m3 并记录国家场址；展开实际泵送处理。不将循环水计新增资源，也不将同一水再计自来水供给。

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

称量实际外运废砂盘并与捕集粉尘分开；保留结合剂、磨料及附着合金。公开抛光介质类别限定为本一种耗材设计。

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

称量内部回收后实际外运未回收过喷料；保留配方及接收路线。不设默认涂装损失。

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

###### 废水基碳酸钠钢件清洗溶液 (`spent_cleaning_solution`)

仅用于实际收集并外运处理废清洗液。称量溶液质量并保留碳酸盐浓度、油及金属污染和接收方。直接排放须各实测基本物质及接收介质，不能用本废物外运替代。

- 选定流： 废水基碳酸钠钢件清洗溶液
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_waste`
- 来源：

### 过程： 配置洗涤机器集成 (`assembly`)

#### 输入

##### 产品流

###### 低压电网电力 (`electricity_assembly`)

计量实际阶段并包含应归属返工。本身份为用户端低于1kV电网平均交流电；其他电压来源须有独立相符交换。

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

###### 成品304不锈钢洗脱机内筒 (`washer_drum`)

仅用于声明洗脱机、烘干机或集成叠置机实际具有的功能及设计。记录一种零件号、材料牌号、尺寸、实测交付质量、安装数量及包含子件。采购滚筒机架替代其本地原料制造；液压悬挂、阀或泵按实际设计条件纳入。不同设计分开，不重复采购总成内部件。

- 选定流： 成品304不锈钢洗脱机内筒
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品304不锈钢洗衣机外筒 (`outer_tub`)

仅用于声明洗脱机、烘干机或集成叠置机实际具有的功能及设计。记录一种零件号、材料牌号、尺寸、实测交付质量、安装数量及包含子件。采购滚筒机架替代其本地原料制造；液压悬挂、阀或泵按实际设计条件纳入。不同设计分开，不重复采购总成内部件。

- 选定流： 成品304不锈钢洗衣机外筒
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品镀锌钢滚筒烘干机滚筒 (`dryer_drum`)

仅用于声明洗脱机、烘干机或集成叠置机实际具有的功能及设计。记录一种零件号、材料牌号、尺寸、实测交付质量、安装数量及包含子件。采购滚筒机架替代其本地原料制造；液压悬挂、阀或泵按实际设计条件纳入。不同设计分开，不重复采购总成内部件。

- 选定流： 成品镀锌钢滚筒烘干机滚筒
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品焊接钢制洗涤设备机架 (`frame`)

仅用于声明洗脱机、烘干机或集成叠置机实际具有的功能及设计。记录一种零件号、材料牌号、尺寸、实测交付质量、安装数量及包含子件。采购滚筒机架替代其本地原料制造；液压悬挂、阀或泵按实际设计条件纳入。不同设计分开，不重复采购总成内部件。

- 选定流： 成品焊接钢制洗涤设备机架
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品铸铁传动带轮 (`pulley`)

仅用于声明洗脱机、烘干机或集成叠置机实际具有的功能及设计。记录一种零件号、材料牌号、尺寸、实测交付质量、安装数量及包含子件。采购滚筒机架替代其本地原料制造；液压悬挂、阀或泵按实际设计条件纳入。不同设计分开，不重复采购总成内部件。

- 选定流： 成品铸铁传动带轮
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品钢制螺旋压缩弹簧 (`spring`)

仅用于声明洗脱机、烘干机或集成叠置机实际具有的功能及设计。记录一种零件号、材料牌号、尺寸、实测交付质量、安装数量及包含子件。采购滚筒机架替代其本地原料制造；液压悬挂、阀或泵按实际设计条件纳入。不同设计分开，不重复采购总成内部件。

- 选定流： 成品钢制螺旋压缩弹簧
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品液压悬挂减振器 (`damper`)

仅用于声明洗脱机、烘干机或集成叠置机实际具有的功能及设计。记录一种零件号、材料牌号、尺寸、实测交付质量、安装数量及包含子件。采购滚筒机架替代其本地原料制造；液压悬挂、阀或泵按实际设计条件纳入。不同设计分开，不重复采购总成内部件。

- 选定流： 成品液压悬挂减振器
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品进水电磁阀 (`inlet_valve`)

仅用于声明洗脱机、烘干机或集成叠置机实际具有的功能及设计。记录一种零件号、材料牌号、尺寸、实测交付质量、安装数量及包含子件。采购滚筒机架替代其本地原料制造；液压悬挂、阀或泵按实际设计条件纳入。不同设计分开，不重复采购总成内部件。

- 选定流： 成品进水电磁阀
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： electrolux-lagoon-2022

###### 成品洗衣机排水阀 (`drain_valve`)

仅用于声明洗脱机、烘干机或集成叠置机实际具有的功能及设计。记录一种零件号、材料牌号、尺寸、实测交付质量、安装数量及包含子件。采购滚筒机架替代其本地原料制造；液压悬挂、阀或泵按实际设计条件纳入。不同设计分开，不重复采购总成内部件。

- 选定流： 成品洗衣机排水阀
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： electrolux-lagoon-2022

###### 成品电动洗涤设备排水泵 (`drain_pump`)

仅用于声明洗脱机、烘干机或集成叠置机实际具有的功能及设计。记录一种零件号、材料牌号、尺寸、实测交付质量、安装数量及包含子件。采购滚筒机架替代其本地原料制造；液压悬挂、阀或泵按实际设计条件纳入。不同设计分开，不重复采购总成内部件。

- 选定流： 成品电动洗涤设备排水泵
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品不锈钢网绒毛过滤器 (`lint_filter`)

仅用于声明洗脱机、烘干机或集成叠置机实际具有的功能及设计。记录一种零件号、材料牌号、尺寸、实测交付质量、安装数量及包含子件。采购滚筒机架替代其本地原料制造；液压悬挂、阀或泵按实际设计条件纳入。不同设计分开，不重复采购总成内部件。

- 选定流： 成品不锈钢网绒毛过滤器
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品已接线洗涤设备控制面板 (`controller`)

仅用于声明洗脱机、烘干机或集成叠置机实际具有的功能及设计。记录一种零件号、材料牌号、尺寸、实测交付质量、安装数量及包含子件。采购滚筒机架替代其本地原料制造；液压悬挂、阀或泵按实际设计条件纳入。不同设计分开，不重复采购总成内部件。

- 选定流： 成品已接线洗涤设备控制面板
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品钢化玻璃洗衣机门窗 (`washer_glass`)

仅用于声明洗脱机、烘干机或集成叠置机实际具有的功能及设计。记录一种零件号、材料牌号、尺寸、实测交付质量、安装数量及包含子件。采购滚筒机架替代其本地原料制造；液压悬挂、阀或泵按实际设计条件纳入。不同设计分开，不重复采购总成内部件。

- 选定流： 成品钢化玻璃洗衣机门窗
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品钢化玻璃烘干机门窗 (`dryer_glass`)

仅用于声明洗脱机、烘干机或集成叠置机实际具有的功能及设计。记录一种零件号、材料牌号、尺寸、实测交付质量、安装数量及包含子件。采购滚筒机架替代其本地原料制造；液压悬挂、阀或泵按实际设计条件纳入。不同设计分开，不重复采购总成内部件。

- 选定流： 成品钢化玻璃烘干机门窗
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品EPDM橡胶洗衣机门密封圈 (`door_gasket`)

仅用于声明洗脱机、烘干机或集成叠置机实际具有的功能及设计。记录一种零件号、材料牌号、尺寸、实测交付质量、安装数量及包含子件。采购滚筒机架替代其本地原料制造；液压悬挂、阀或泵按实际设计条件纳入。不同设计分开，不重复采购总成内部件。

- 选定流： 成品EPDM橡胶洗衣机门密封圈
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品绝缘铜动力电缆 (`cable`)

仅用于声明洗脱机、烘干机或集成叠置机实际具有的功能及设计。记录一种零件号、材料牌号、尺寸、实测交付质量、安装数量及包含子件。采购滚筒机架替代其本地原料制造；液压悬挂、阀或泵按实际设计条件纳入。不同设计分开，不重复采购总成内部件。

- 选定流： 成品绝缘铜动力电缆
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品钢制六角头螺栓 (`bolt`)

仅用于声明洗脱机、烘干机或集成叠置机实际具有的功能及设计。记录一种零件号、材料牌号、尺寸、实测交付质量、安装数量及包含子件。采购滚筒机架替代其本地原料制造；液压悬挂、阀或泵按实际设计条件纳入。不同设计分开，不重复采购总成内部件。

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

###### 成品洗衣机滚筒感应电动机 (`washer_motor`)

仅用于一种单独供货实际三相感应电动机设计；称量 kg，记录电压、输出、安装、冷却及供货完整性。公开采购洗涤模块电机身份较宽；不采用其专家估算数量。排除采购风机滚筒模块已含电机。

- 选定流： 电动机 `014f80a3-c257-425b-9b75-3e5a18573695`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： speedqueen-stack-2022

###### 成品烘干机滚筒感应电动机 (`dryer_motor`)

仅用于一种单独供货实际三相感应电动机设计；称量 kg，记录电压、输出、安装、冷却及供货完整性。公开采购洗涤模块电机身份较宽；不采用其专家估算数量。排除采购风机滚筒模块已含电机。

- 选定流： 电动机 `014f80a3-c257-425b-9b75-3e5a18573695`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： speedqueen-stack-2022

###### 成品电动机变频驱动器 (`vfd`)

仅用于一种实际单独供货含外壳散热器、声明供电电压不超过1000V且匹配公开类别的完整驱动器。称量交付质量并排除控制面板供货已含电子部件。公开专家判断背景仅支持身份，不是原始工厂数量。

- 选定流： 变频驱动器 `c14b641c-8fbe-40c4-843b-3cc9b0faeff3`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品钢制滚珠轴承 (`ball_bearing`)

一种实际单独供货滚珠轴承设计；保留尺寸、润滑及 kg 质量。公开滚珠滚柱类别限定为本设计，并排除采购电机或滚筒模块已含轴承。

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

###### 成品硫化橡胶V带 (`v_belt`)

仅用于一种实际硫化橡胶传动带截形、长度及增强设计。称量交付质量并将公开带类别限定为本产品；不是输送服务或原料橡胶。

- 选定流： 硫化橡胶制的传动、输送带或胶带 `1e587e97-03a2-4c50-8226-f8446a1dd1d9`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品非碳管状洗衣机加热电阻 (`washer_heater`)

仅在本实际电加热设计使用一种成品金属护套非碳管状电阻时纳入。记录供电功率额定值、电阻元件、护套、恒温器包含排除、设计及质量；其他加热原理须各自边界及行。额定值不是数量或质量因子。

- 选定流： 加热电阻器，碳电阻器除外 `991da6ee-1a8a-4e77-8f9c-c50615e255e7`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： electrolux-lagoon-2022

###### 成品非碳管状烘干机加热电阻 (`dryer_heater`)

仅在本实际电加热设计使用一种成品金属护套非碳管状电阻时纳入。记录供电功率额定值、电阻元件、护套、恒温器包含排除、设计及质量；其他加热原理须各自边界及行。额定值不是数量或质量因子。

- 选定流： 加热电阻器，碳电阻器除外 `991da6ee-1a8a-4e77-8f9c-c50615e255e7`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： electrolux-lagoon-2022

###### 成品电动非家用离心送风机 (`dryer_blower`)

仅用于实际单独供货完整风机，包含声明电机。作为配置记录风量压力、安装设计及质量；排除重复风机电机及叶轮领用。公开风机类别限定为本风机，不是完整干衣机。

- 选定流： 风扇，家用型除外，离心机，乳脂分离机及干衣机除外 `a48b3c52-704f-4843-9325-a30168349fe5`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： speedqueen-stack-2022

###### 锂皂矿物油润滑脂 (`grease`)

仅用于工厂实际添加声明配方。称量净领用退回，并排除供应商已润滑轴承加注另计领用。不计使用寿命润滑剂或通用首注量。

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

#### 输出

### 过程： 工厂试验及验收 (`factory_test`)

#### 输入

##### 产品流

###### 低压电网电力 (`electricity_factory_test`)

计量实际阶段并包含应归属返工。本身份为用户端低于1kV电网平均交流电；其他电压来源须有独立相符交换。

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

###### 外供饮用水等级自来水 (`tap_water_factory_test`)

仅用于实际工厂液压泄漏功能试验或湿负载准备。扣除回用后计量净新增供水并保留密度温度用于质量换算；客户洗涤循环水在范围外。

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

###### 成品可回用平纹棉工厂试验布 (`test_cloth`)

仅在实际负载验收试验使用本指定干态棉布时纳入。跟踪实测干质量、回用及服务工单更换；分配实际耗材更换，不将每台完整回用负载计消耗。湿润水分开，试验布排除于交付 M。

- 选定流： 成品可回用平纹棉工厂试验布
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_test_load。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_test_load`
- 来源：

#### 输出

##### 产品流

###### 验收完整配置商用洗涤烘干机器 (`finished_machine`)

实际型号专属机械、电气、水路泄漏或风路加热及操控联锁验收后的参考产出。一种声明洗脱机、电加热排风烘干机或集成叠置机；每个纳入洗涤模块按声明额定基准干布容量大于10kg。称量排水干燥交付状态，包含安装操控及选项；排除试验布、运输工装、包装、散装洗涤剂及备件。公开类别限定为本水基及电加热路线。

- 选定流： 洗衣房用洗衣机，每台可以洗干亚麻制品10千克以上者，干洗机，织物及其制品干燥机，每台可洗干亚麻制品超过10千克者 `20cac093-29a5-4999-bcc8-8839b4ef8de9`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 1 千克
- 数值来源模式： fixed_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_mass`
- 来源： electrolux-lagoon-2022; speedqueen-stack-2022

##### 废物流

###### 收集的洗涤机器工厂检漏废水 (`test_wastewater`)

仅用于实际排出并外运处理试验水，测量溶液质量并记录污染。内部回用不是外运。含洗涤剂负载试验或直接排放须各自组成物质及边界；不计客户洗衣废水。

- 选定流： 收集的洗涤机器工厂检漏废水
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

###### 工厂烘干试验排入空气的水蒸气 (`air_water`)

仅用于实际电加热排风式烘干机湿负载试验实测新增水蒸气排入空气且子介质未特指。使用同一时段进出口湿度及干空气流量，或含排水冷凝余留的有依据湿负载水平衡。排除入口背景水分，并与自来水投入核对避免重复。不用作业循环蒸发因子，不规定必需湿试验。

- 选定流： 水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
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

###### C型瓦楞纸板 (`cardboard`)

仅用于实际含再生纤维且纤维至少80%的 C 型发运保护。称量净领用并排除于 M；不同规格须分行。

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

###### LDPE保护薄膜 (`ldpe_film`)

仅用于实际非泡沫、非自粘、未增强 LDPE 保护。称量 kg 并保留等级；包装在 M 外，不假定化石来源或再生比例。

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

###### 成品木制发运托盘 (`wood_pallet`)

仅用于一种实际成品木托盘设计，包含供货紧固件。记录树种、含水及处理、实际交付净质量及回用归属。公开托盘宽类别限定为本一种产品；排除于 M，不假定标准托盘质量或一次使用。

- 选定流： 木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
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

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_separate` | shared_operations | 优先分开计量批次设计。以实测作业时间负载或物料净领用及有依据因果驱动归属共享切割、表面处理、装配及试验；含待机返工核对共享总量。无有依据关系及敏感性时不一律每台均分或按销售额分配。 |  |
| `allocation_reuse` | test_cloth_and_water | 可回用棉试验负载为工厂工具，不是交付质量，也不是每台消耗完整负载。按回用记录将实测更换归属实际服务工单。回用试验水是内部循环；仅计实际补水投入及外运排水。叠置机是一个声明完整产品；不能按功能拆分重复其 M。 |  |
| `allocation_rejects` | manufacturing_batch | 在同一期间配置平衡保留不合格、返工复试、在制品变化及回收原料。按完整验收机器归一应归属负担。外运废料废物按记录接收边界离开，不自动取得避免原生材料抵扣。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_configuration | assembly; factory_test | configured machine | 配置及清单对应 | 型号；功能模块；各容量布料装载基准；供热水路排风；清单；供货内部件；实际路线；验收；不合格在制品 | 核对每项工序实际安装设计及自制外购。保留各模块额定基准及叠置整机唯一验收 M。容量功率及目录重量仅为配置，不是制造交换因子。 | kg | 每种配置及修订 | 同一声明生产期间；披露缺口 | 声明制造场址 | 每台验收机器一个配置装配记录 | 清单；供货包含；图纸；额定及验收记录 |
| cp_mass | factory_test | reference product | 校准净整机称重 | 型号；配置；序列；验收净质量 M；排水干燥状态；余留润滑；排除；验收数 | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 每种验收配置及代表机器 | 同一声明生产期间；披露缺口 | 声明制造场址 | 每台验收净质量 | 秤校准；净称重票；配置；验收 |
| cp_material | fabrication; finishing; assembly; factory_test; packout | single delivered material | 领用退回及库存平衡 | 单一牌号配方状态；净领用退回；回收；密度温度；服务工单；验收数 | 逐项称量应归属原料、焊丝气体、磨料涂料、清洗剂润滑脂、自来水或指定保护净量。各合金及供货混合物分开；体积换算保留实际密度温度，排除供货已含加注。采购预混物不再按组分重复。不设稀释、产率或标准用水因子。 | kg | 每次领用及核对批次 | 同一声明生产期间；披露缺口 | 声明制造场址 | 应归属物料净质量 / 同一配置的验收机器数量 | 秤；领用台账；安全数据表；组成浓度；密度 |
| cp_parts | assembly | single finished component | 收货称重及安装清单 | 一种零件设计；供货完整性；数量；交付质量；安装数量；验收数 | 测量交付质量或核验各设计实际批次专属数量质量记录。核对滚筒外筒传动悬挂、阀、加热风机、门及操控。采购完整风机含声明电机；排除已含面板传动加热内部件。不用容量功率风量或目录整机重量部件因子。 | kg | 每批供货及装配 | 同一声明生产期间；披露缺口 | 声明制造场址 | 应归属安装组件质量 / 同一配置的验收机器数量 | 秤；供货包含；实际零件清单及批次质量 |
| cp_energy | fabrication; finishing; assembly; factory_test | electricity | 表计及因果驱动台账 | 阶段；来源电压；表计 kWh；时段；实测共享总量；驱动；待机复试；验收数 | 计量实际工序，含仅按实际执行洗脱加热、烘干加热风机及湿负载试验。按1 kWh =3.6 MJ 换算。以实际因果负载时间归属实测共享总量并核对待机返工不合格。制造商作业能耗不是工厂试验消耗；禁止额定功率乘杜撰时间。 | MJ | 每个实际阶段时段及批次 | 同一声明生产期间；披露缺口 | 声明制造场址 | 应归属电能 / 同一配置的验收机器数量 | 表计校准；账单；阶段驱动及验收记录 |
| cp_waste | fabrication; finishing; factory_test | individual exported waste | 分类称重及接收凭证 | 单一废物；合金组成；干湿；污染；外运质量；回收；接收处理；验收数 | 称量实际分类外运并核对内部回收及在制品。分开非合金镀锌不锈钢边角料、捕集粉尘、废砂盘、粉末过喷、清洗液及检漏水。保留实际溶液浓度及接收边界。回用水不是外运；处理后排放须逐项实测基础物质介质及各自边界。 | kg | 每次外运及核对批次 | 同一声明生产期间；披露缺口 | 声明制造场址 | 应归属外运废物质量 / 同一配置的验收机器数量 | 秤；组成；处理接收凭证 |
| cp_emission | fabrication; factory_test | single air substance | 治理后监测或水平衡 | 物质；介质子介质；粒径；浓度；流量；时段；湿度温压；背景；干湿布；进水排水冷凝余留；验收数 | 实际颗粒排放使用治理后浓度及空气体积，保留采样粒径依据。实际湿烘干试验按成对进出口湿度及干空气流量，或含排水冷凝余留的有依据负载水平衡确认增量水蒸气。保留换算不确定性；排除入口水分及捕集固体。不假定排放，不规定必需湿试验，不用作业蒸发因子。 | kg | 代表性实际排放试验时段 | 同一声明生产期间；披露缺口 | 声明制造场址 | 应归属实测物质质量 / 同一配置的验收机器数量 | 监测；采样；湿度流量或完整水平衡 |
| cp_water_resource | finishing; factory_test | groundwater | 井体积表计及场址记录 | 淡水来源；井场址国家；m3；时段；阶段用途；回用；验收数 | 在声明工厂计量实际淡水地下水取用；核对实际用途并将泵送处理单列投入。内部循环不是取水，相同资源不能同时计为自来水采购。 | m3 | 每个计量时段及批次 | 同一声明生产期间；披露缺口 | 声明制造场址 | 应归属取水体积 / 同一配置的验收机器数量 | 表计；来源场址；阶段水平衡 |
| cp_test_load | factory_test | specific dry cotton test cloth | 回用更换台账及称重 | 棉布设计；干质量；湿负载状态；回用；更换质量；服务试验工单；验收数 | 测量指定可回用干棉布实际更换，并按实际回用记录归属服务工单。湿负载水单独跟踪。不将完整回用负载当每台消耗，不计入 M，也不按额定干布容量推断更换。 | kg | 每个实际负载试验更换期间 | 同一声明生产期间；披露缺口 | 声明制造场址 | 应归属更换布质量 / 同一配置的验收机器数量 | 干称重；布身份；回用及服务工单台账 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品机器的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `quality_configuration` | all inventory rows | 正值实测 M 及交换分子使用相同配置期间验收数。核验各模块额定基准、叠置完整性、供货子件及自制外购。核对实际原料、余留润滑、用水试验布回用、排水、不合格复试及在制品；保留不确定性。 | cp_configuration; cp_mass; cp_parts; cp_material; cp_test_load |
| `quality_coverage` | inventory_and_links | 披露缺失清单路线项、UUID、测量及供货运输处理链接。实际路线依据确定可选阶段及排除。不设通用合金质量、容量质量换算、制造产率、试验循环、寿命或排放因子。 | cp_configuration; cp_energy; cp_waste; cp_emission; cp_water_resource |
| `quality_sources` | design_evidence | Electrolux2022.10.07及Speed Queen AO22-0021©2022为历史制造商实例。一般特殊布料容量、替代供热接口、作业数量及净运输重量随型号条件变化；均不提供工厂数量、实测 M、材料牌号、寿命或通用必需工序。核验实际设计及前景数据。 | electrolux-lagoon-2022; speedqueen-stack-2022 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference` | reference_flow | 要求各纳入功能模块按声明基准额定干布容量大于10kg，及一个正值实测完整整机 M，包含实际安装选项余留润滑。叠置质量仅计一次。参考产出为1kg；其他行明确以 normalize_mass 归一 kg、MJ或m3分子。 |  |
| `validation_bom` | inventory | 按配置清单核查实际滚筒外筒框架、传动悬挂、水路排水或风路加热、门操控及所有安装选项。核验采购内部件、本地外包路线、试验回用排水、不合格复试及接收边界。声明完整边界前按实际完整性展开初始卡片。 |  |
| `validation_identity` | all inventory rows | 核查公开类型、交付牌号浓度状态完整性、路线地区、实际参考属性单位组及官方本地化名。地下水资源不是采购水或废水；收集外运溶液不是直接环境排放；即时未特指空气水蒸气不是长期空气或液态水。能量面积不能标识部件总质量。 |  |
| `validation_claims` | dataset_claims | 无实际路线及链接供货运输处理覆盖时不能声明完整摇篮到工厂门。制造质量不能证明洗衣服务等效、能效、寿命、法规符合性或方法学批准。仍须独立科学审查。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 配置前景商用洗涤机器制造模块；标题不声明发表 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 按实测 M 放大的相同完整配置制造，单独声明上游运输处理链接 |
| excluded_use | 客户洗衣服务、纺织产出、使用期用水洗涤剂能源、寿命、干洗燃气蒸汽热泵路线或方法学批准 |
| required_metadata | 全部参考限定；各模块额定基准；完整清单选项；供货完整性及自制外购；实际 M 及排水干燥状态；叠置整机边界；验收试验计划；场址期间边界；实际交换分配回用排水及链接供货接收 |
| required_quality_disclosure | 缺失身份测量链接、路线覆盖、不确定性、因果分配、实际不合格复试及历史来源限制 |
| update_trigger | 模块配置容量额定基准、供热通风水路、传动悬挂操控、供货完整性、材料配方、自制外购、验收试验计划、场址期间、回用或分配变化 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| electrolux-lagoon-2022 | handbook | Electrolux Professional, PROFESSIONAL LAUNDRY lagoon Advanced Care WH6-14LAG and TD6-14LAC, Art.No.438913913EN/2022.10.07; physical unnumbered pp.2–4, edition footer p.8. https://tools.electroluxprofessional.com/Mirror/Doc/ELS/PDS/PS_438913913EN_Lagoon%20concept_TD6-14%20and%20WH6-14_EN.pdf | 历史干布容量布料装载基准及替代供热、进排水及排风接口；选择电加热路线，排除其他路线。不采用作业数量、目录净质量、通用牌号或工厂试验因子。 |
| speedqueen-stack-2022 | handbook | Alliance Laundry Systems, SPEED QUEEN ON-PREMISES LAUNDRY SOLUTIONS Stacked Washer-Extractor/Tumble Dryers, AO22-0021©2022; physical unnumbered p.2. https://distribution.alliancelaundry.com/wp-content/uploads/2023/08/DL_AO22-0021_SpecSheet_SWXTD_en-US.pdf | 历史集成叠置配置、独立功能容量电机、洗脱水路排水及烘干排风、型号专属电气燃气替代及整机净重运输重区分。不采用数值重量容量换算、完整电加热型号范围、材料组成、试验消耗或保修寿命换算。 |
