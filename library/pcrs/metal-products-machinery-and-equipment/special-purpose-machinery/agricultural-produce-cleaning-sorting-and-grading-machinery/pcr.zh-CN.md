---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.agricultural-produce-cleaning-sorting-and-grading-machinery
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 农产品清洗、分选与分级机械制造

## 1. 范围与适用性

本规则覆盖蛋、水果及其他农产品的完整清洗、分选或分级机器制造，但不包括种子、谷物及干豆类。按声明配置区分湿式清洗、机械尺寸／重量分级及光学缺陷检测。仅纳入交付整机集成的转运及剔除机构。排除独立农产品输送机、容器清洗／灌装／包装机、分离包装生产线、单售零件、食品烹调或提取、农业生产、包装厂运行、农产品损耗、产量、维护及报废。现有种子／谷物／干豆类机械 PCR 明确排除这些产品；本记录补充湿式模块与光学／称重特定制造规则。不包括清洗或分级服务。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.agricultural-produce-cleaning-sorting-and-grading-machinery |
| classification_refs | CPC 3.0 44127；类别背景，不是已接受映射 |
| covered_products | 蛋、水果及种子／谷物／干豆类之外其他农产品完整清洗、分选与分级机 |
| excluded_products | 种子／谷物／干豆类设备；独立输送及包装机；农产品及服务 |
| representative_product | 一台验收空载配置明确湿式清洗机或机械／光学分级机 |
| production_route | 声明采购坯料及部件；实际场内加工、连接、前处理、装配、控制集成及工厂验收 |
| market_state | 工厂门新制、排空完整合格整机；包装另计清单 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供声明的农产品清洗、分选或分级机械功能 |
| How much | 以实测净质量 M，将配置明确完整合格整机归一化为 1 kg |
| How well | 符合声明图纸、食品接触结构规范及工厂功能验收。清洗机：渗漏与循环检查；分级机：参考尺寸或校准重量挑战；光学配置：有记录的已标注缺陷样本与联锁。须提供实际验收标准；不规定通用准确度或处理量阈值。 |
| How long or cycle | 一次制造交付；不假定运行寿命或农产品处理千克数 |
| reference_flow_link | `finished_machine` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 用于清洗、分类或分级鸡蛋、水果或其他农产品的机器 `36b20b75-5f43-46ab-9e96-d8018f4c75f4` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号、序列号／批次、农产品类别；清洗／尺寸／重量／光学功能；通道及已装模块配置；食品接触牌号与表面状态；额定处理量仅作描述元数据；槽体排空；已装驱动、泵、控制、集成输送机构及防护；保留润滑剂；M；场址及期间；供应商边界与阶段覆盖 |

不得根据制造商示例推断食品接触认证、树脂、整机质量、寿命或工厂消耗。相同千克参考流不证明清洗机与分级机配置的功能等价。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `energy_units` | 电力行 | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表单位；以精确定义 1 kWh = 3.6 MJ 转为 MJ。不将电力属性名称解释为燃烧清单。 |
| `volume_units` | 地下水行 | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 保留实测体积及条件；不得杜撰气体密度、水密度或热值进行质量／能量替换。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 从已声明供应商边界接收材料及配置部件，前景不隐含上游炼钢或部件制造 |
| starting_condition_role | 完整合格整机制造投入边界 |
| product_classification_scope | CPC 44127 背景下配置明确的农产品清洗及分级机 |
| recursive_input_rule | 购入完整机器作为投入时，作为单独声明的上游产品，不递归重建本类别；区分新制与翻修 |
| upstream_dataset_requirement | 连接与材料、成品部件边界、地区、电压及处理状态相符的投入特定上游数据集。缺失链接保留为覆盖缺口 |
| disclosure | 披露前景工厂阶段、外包工序、部件内容、来料运输覆盖、交付防护包装边界、资本设备政策及所有排除；未核验上游及物流闭合时不声称完整摇篮到门 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `manufacturing_gate` | foreground | 纳入从声明的接收投入到工厂验收之间所有实际工序及可归属返工；区分采购零件与场内制造以避免重复，使用已记录路线。 |  |
| `conditional_finish` | finishing | 仅启用有记录的涂装工序及化学配方。制造商示例证明可能路线，不是通用要求或配方。 | `sormac-sw50-2026` |
| `exclude_field` | farm_use | 将农产品种植、包装厂运行、运行用水及清洗、剔除农产品、食品产量及机器报废排除在制造清单外。不包含分级服务。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `forming` | 坯料切割、成形及机加工 | conditional | 仅场内加工零件；采购成品零件替代坯料投入 | 前景制造 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| `joining` | 卫生结构连接及修整 | conditional | 仅实际场内连接路线；不要求通用焊接 | 前景制造 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| `wet_surface` | 路线特定水基清洗及钝化 | conditional | 仅有记录的水基前处理及其实际化学配方 | 前景制造 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| `assembly` | 机械及湿式模块装配 | required | 每台完整合格整机；仅启用已装部件 | 前景制造 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| `controls` | 称重与光学控制集成 | conditional | 仅含称重、光学检测或 PLC 硬件的配置 | 前景制造 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| `acceptance` | 工厂功能验收及净质量测定 | required | 每台完整合格整机；用水交换仅用于有记录的湿式试验 | 前景制造 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| `packaging` | 工厂门交付防护 | conditional | 仅已声明交付边界内防护；否则披露排除 | 前景制造 | 每 1 kg 参考流；采集基准为每台验收成品机器 |

各工序记录是同一最终合格输出的独立贡献，不是七种独立交易参考产品。保留可追溯内部零件转移和物料清单记录；内部转移在前景内抵消，不重复承接上游负荷。以下卡片是明确受路线条件约束的交换。实际存在的每项其他零件、化学品、燃料、包装件、废水流或实测基本流物质须分别以独立身份行补充；缺少卡片不构成截断许可。外包涂装时，用精确采购服务或成品零件记录替代场内化学品及能耗，披露其覆盖。

### 过程：坯料切割、成形及机加工（`forming`）

#### 输入

##### 产品流

###### 冷轧不锈钢板（`stainless_sheet`）

仅纳入实际用于食品接触槽体、台面、管件或机架加工的坯料。记录合金牌号、厚度、食品接触规范及表面状态；深加工平板产品不能确定普通冷轧板材身份。

- 选定流: 冷轧不锈钢板
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_forming。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_forming`
- 来源: `sormac-sw50-2026`

###### 交流电（`forming_electricity`）

计量本工序及可归属工具、抽排或试验台，避免工厂仪表重叠。UUID 仅用于用户侧 1–35 kV 电网平均采购供电。其他电压、来源或供应商边界须另核验身份；内部变压电力不是另一份采购。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_forming。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_forming`

#### 输出

##### 废物流

###### 工业生产后不锈钢板边角料（`stainless_offcut`）

未处理外送的分流清洁板材边角料，按合金牌号称量并识别接收方；通用废钢不能确定不锈钢组成。内部回用抵消，含油切屑另设已表征行。

- 选定流: 工业生产后不锈钢板边角料
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_forming。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_forming`

### 过程：卫生结构连接及修整（`joining`）

#### 输入

##### 产品流

###### 实心不锈钢焊丝（`stainless_wire`）

仅在场址实际采用该焊接路线时纳入，记录合金型号及焊丝盘消耗质量；碳钢药芯焊丝不适用。

- 选定流: 实心不锈钢焊丝
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_joining。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_joining`

###### 纯氩焊接保护气（`argon`）

仅用于有记录的纯氩供货，以气瓶领退确定消耗质量；不替用二氧化碳保护气或组成未指定的焊接气体。

- 选定流: 纯氩焊接保护气
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_joining。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_joining`

###### 交流电（`joining_electricity`）

计量本工序及可归属工具、抽排或试验台，避免工厂仪表重叠。UUID 仅用于用户侧 1–35 kV 电网平均采购供电。其他电压、来源或供应商边界须另核验身份；内部变压电力不是另一份采购。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_joining。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_joining`

### 过程：路线特定水基清洗及钝化（`wet_surface`）

#### 输入

##### 产品流

###### 柠檬酸水基钝化试剂，声明浓度（`citric_acid`）

仅用于场址确认的柠檬酸钝化配方，记录供货浓度、水合状态及补充质量。制造商不锈钢结构描述不要求化学钝化或确定配方；实际使用的硝酸、碱及配方清洗剂分别另设真实行。

- 选定流: 柠檬酸水基钝化试剂，声明浓度
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_wet_surface。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_wet_surface`

###### 工艺用水（`surface_water`）

用于实际清洗或漂洗的已处理外购工艺水，采集供货质量，保留处理及供应商边界；不将供应商取水重复计入前景资源。

- 选定流: 工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_wet_surface。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_wet_surface`

###### 交流电（`wet_surface_electricity`）

计量本工序及可归属工具、抽排或试验台，避免工厂仪表重叠。UUID 仅用于用户侧 1–35 kV 电网平均采购供电。其他电压、来源或供应商边界须另核验身份；内部变压电力不是另一份采购。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_wet_surface。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_wet_surface`

#### 输出

##### 废物流

###### 废柠檬酸水基钝化液（`passivation_effluent`）

仅在这一分流液体外送处理时纳入，称量实际溶液、测定 pH 与组成并记录接收方。该废物转移不是基本流排水。

- 选定流: 废柠檬酸水基钝化液
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_wet_surface。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_wet_surface`

### 过程：机械及湿式模块装配（`assembly`）

#### 输入

##### 产品流

###### 电动机（`motor`）

逐个纳入输送、驱动或清洗模块安装的外购电动机，记录型号及部件净质量。仅使用身份，不采用数据库专家估算数量；排除外购泵模块已含电动机。

- 选定流: 电动机 `014f80a3-c257-425b-9b75-3e5a18573695`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 泵（`pump`）

每份记录对应一种外购泵，仅在湿式配置安装时启用；声明离心水循环路线、壳体、电动机包含情况及质量，不表示抽水服务或上游取水。

- 选定流: 泵 `bbd91be4-dc00-44c2-8bc1-f67ee79174a7`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`
- 来源: `sormac-sw50-2026`

###### 食品接触聚氨酯输送带（`conveyor_belt`）

仅当供应商物料清单确认聚氨酯成品带及接触规范时纳入。聚合物薄膜、合成革或橡胶带不是本成品部件；通用食品级塑料证据不能单独确定聚氨酯。

- 选定流: 食品接触聚氨酯输送带
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 聚丙烯果品承载辊（`carrier_roller`）

仅纳入供应商确认的聚丙烯承载辊，称量成品辊并记录食品接触牌号；不根据蓝色外观或制造商聚合物表述推断树脂。

- 选定流: 聚丙烯果品承载辊
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 不锈钢螺栓（`stainless_bolt`）

仅纳入已安装、合金牌号、尺寸及质量明确的螺栓；通用钢紧固件或轴承身份不等价，螺母、轴承及防护件须另设物料清单行。

- 选定流: 不锈钢螺栓
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 交流电（`assembly_electricity`）

计量本工序及可归属工具、抽排或试验台，避免工厂仪表重叠。UUID 仅用于用户侧 1–35 kV 电网平均采购供电。其他电压、来源或供应商边界须另核验身份；内部变压电力不是另一份采购。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

### 过程：称重与光学控制集成（`controls`）

#### 输入

##### 产品流

###### 工业机器视觉相机（`camera`）

仅纳入已装光学检测硬件，记录型号、光谱通道、外壳、镜头包含情况及净质量。静态成像消费数码相机不能核验为工业相机；已装光源及计算机各需独立记录。

- 选定流: 工业机器视觉相机
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_controls。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_controls`
- 来源: `tomra-apples-historical`

###### 称重传感器（`loadcell`）

仅纳入已装称重力传感器，记录校准等级、型号及实测部件质量。拒绝以生态毒性为参考属性的候选流，不转用其假定台数或汇总数量。使用另行核验的通用外购部件质量身份，并声明实际应变计型号。

- 选定流: 称重传感器 `5f7f1e13-97fb-48bc-99db-4b3a6736610e`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_controls。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_controls`

###### 可编程逻辑控制器（`plc`）

仅用于符合该身份、从中国工厂边界供应的实际外购 PLC 硬件部件，记录型号、输入输出配置及质量。其他供货地区或通用控制柜须另核验身份，不重复计入柜内元件。

- 选定流: 可编程逻辑控制器 `5b817eb4-cab3-4fed-87c9-457d66d0bb19`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_controls。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_controls`

###### 交流电（`controls_electricity`）

计量本工序及可归属工具、抽排或试验台，避免工厂仪表重叠。UUID 仅用于用户侧 1–35 kV 电网平均采购供电。其他电压、来源或供应商边界须另核验身份；内部变压电力不是另一份采购。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_controls。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_controls`

### 过程：工厂功能验收及净质量测定（`acceptance`）

#### 输入

##### 产品流

###### 工艺用水（`test_water`）

仅计入有记录的工厂湿式功能试验消耗的已处理外购工艺水，采集补充及未回收损失，不计重复循环或目录槽体容积；排除包装厂运行清洗。

- 选定流: 工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_acceptance`
- 来源: `sormac-sw50-2026`

###### 交流电（`acceptance_electricity`）

计量本工序及可归属工具、抽排或试验台，避免工厂仪表重叠。UUID 仅用于用户侧 1–35 kV 电网平均采购供电。其他电压、来源或供应商边界须另核验身份；内部变压电力不是另一份采购。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_acceptance`

##### 基本流

###### 地下水（`well_water`）

仅用于场内为制造验收试验直接抽取的地下水，计量 m3，记录水井及国家；介质为资源／水资源／来自水的可再生物质资源。不声明稀缺等级，不把同一水量另计为外购工艺水。

- 选定流: 地下水 `4f462198-40cd-4184-8733-86648a20dc3f`
- 流属性/单位: 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_acceptance`

#### 输出

##### 产品流

###### 用于清洗、分类或分级鸡蛋、水果或其他农产品的机器（`finished_machine`）

一千克是完整合格配置整机的归一化切片；槽体排空，不将农产品载荷或试验用水计入 M。保留润滑剂、声明集成转运机构、防护及已装控制包含在内；排除可拆包装生产线及运输包装。

- 选定流: 用于清洗、分类或分级鸡蛋、水果或其他农产品的机器 `36b20b75-5f43-46ab-9e96-d8018f4c75f4`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 1 千克
- 数值来源模式: `fixed_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_mass`

##### 废物流

###### 工厂湿式试验水基废水（`test_effluent`）

仅在这一单独分流废水外送处理时纳入；测量质量、实际悬浮或溶解成分及接收处理。场内环境排放须另列实测物质与接收介质，不根据运行手册杜撰养分或有机物排放。

- 选定流: 工厂湿式试验水基废水
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_acceptance`

### 过程：工厂门交付防护（`packaging`）

#### 输入

##### 产品流

###### 聚乙烯薄膜（`film`）

仅用于实际聚乙烯运输薄膜，分别称量交付包装及外送边角料；包装清单与验收净质量分开。

- 选定流: 聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_packaging。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_packaging`

###### 实木运输托盘（`wood_pallet`）

仅用于实际随整机交付的托盘，记录木种、处理、可复用状态及质量；不推断通用托盘材料或再生成分。

- 选定流: 实木运输托盘
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_packaging。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_packaging`

###### 交流电（`packaging_electricity`）

计量本工序及可归属工具、抽排或试验台，避免工厂仪表重叠。UUID 仅用于用户侧 1–35 kV 电网平均采购供电。其他电压、来源或供应商边界须另核验身份；内部变压电力不是另一份采购。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_packaging。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_packaging`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `direct_attribution` | shared_operations | 优先使用工单及分表直接归属。仍使用公共总表时，须对识别工序采用实测因果驱动量，如机时，并披露全部参与工单及空载负荷；质量归一化前，按同一配置合格台数确定每台可归属数量。 | `ghg-product-allocation-2011` |
| `coproduct_decision` | saleable_outputs | 不预设废钢为共产品，披露去向及法律／产品状态。实际产生多个可销售共产品时，优先细分；论证物理关系，无法建立时采用有记录的经济或其他分配并作敏感性分析。不规定通用质量份额或避免炼钢抵扣。 | `ghg-product-allocation-2011` |
| `rework_scrap` | manufacturing_losses | 保留合格报告批次可归属的返工及不合格品负荷。内部回收材料仅计一次，外送废物另列。分别披露上游再生含量方法及下游处理以避免双重抵扣。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色 | 记录类型 | 原始字段 | 采集方法 | 单位 | 频率 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `acceptance` | 验收净质量 | weighing | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 每台验收 | 报告期间内完整批次 | 同一型号及配置 | 每台验收净质量 | 校准、称重及签字验收记录 |
| `cp_forming` | `forming` | 坯料切割、成形及机加工 | meter_and_issue_records | 工单及配置；合格台数；各行领用／退回数量及原始单位；成分／牌号；仪表读数；分配驱动量；废物去向；路线条件 | 逐原子行使用校准仪表、称量领退记录、供应商单据及废物联单。保留属性：质量用 kg，电表转 MJ，直接抽取地下水用 m3。未实测密度及条件时，不将外购水质量转换为体积。工序公用设施合计与工厂账单核对，部件和保留工作液包含情况与净质量记录核对。 | 各行分别 kg、MJ、m3 | 每工单及每计量期 | 报告期内完整同配置批次；季节性或混线须披露 | 已声明工厂、外包及采购边界 | 各行可归属数量 / 同一配置的验收机器数量 | 校准、供应商组成、工单、分配及处置证据 |
| `cp_joining` | `joining` | 卫生结构连接及修整 | meter_and_issue_records | 工单及配置；合格台数；各行领用／退回数量及原始单位；成分／牌号；仪表读数；分配驱动量；废物去向；路线条件 | 逐原子行使用校准仪表、称量领退记录、供应商单据及废物联单。保留属性：质量用 kg，电表转 MJ，直接抽取地下水用 m3。未实测密度及条件时，不将外购水质量转换为体积。工序公用设施合计与工厂账单核对，部件和保留工作液包含情况与净质量记录核对。 | 各行分别 kg、MJ、m3 | 每工单及每计量期 | 报告期内完整同配置批次；季节性或混线须披露 | 已声明工厂、外包及采购边界 | 各行可归属数量 / 同一配置的验收机器数量 | 校准、供应商组成、工单、分配及处置证据 |
| `cp_wet_surface` | `wet_surface` | 路线特定水基清洗及钝化 | meter_and_issue_records | 工单及配置；合格台数；各行领用／退回数量及原始单位；成分／牌号；仪表读数；分配驱动量；废物去向；路线条件 | 逐原子行使用校准仪表、称量领退记录、供应商单据及废物联单。保留属性：质量用 kg，电表转 MJ，直接抽取地下水用 m3。未实测密度及条件时，不将外购水质量转换为体积。工序公用设施合计与工厂账单核对，部件和保留工作液包含情况与净质量记录核对。 | 各行分别 kg、MJ、m3 | 每工单及每计量期 | 报告期内完整同配置批次；季节性或混线须披露 | 已声明工厂、外包及采购边界 | 各行可归属数量 / 同一配置的验收机器数量 | 校准、供应商组成、工单、分配及处置证据 |
| `cp_assembly` | `assembly` | 机械及湿式模块装配 | meter_and_issue_records | 工单及配置；合格台数；各行领用／退回数量及原始单位；成分／牌号；仪表读数；分配驱动量；废物去向；路线条件 | 逐原子行使用校准仪表、称量领退记录、供应商单据及废物联单。保留属性：质量用 kg，电表转 MJ，直接抽取地下水用 m3。未实测密度及条件时，不将外购水质量转换为体积。工序公用设施合计与工厂账单核对，部件和保留工作液包含情况与净质量记录核对。 | 各行分别 kg、MJ、m3 | 每工单及每计量期 | 报告期内完整同配置批次；季节性或混线须披露 | 已声明工厂、外包及采购边界 | 各行可归属数量 / 同一配置的验收机器数量 | 校准、供应商组成、工单、分配及处置证据 |
| `cp_controls` | `controls` | 称重与光学控制集成 | meter_and_issue_records | 工单及配置；合格台数；各行领用／退回数量及原始单位；成分／牌号；仪表读数；分配驱动量；废物去向；路线条件 | 逐原子行使用校准仪表、称量领退记录、供应商单据及废物联单。保留属性：质量用 kg，电表转 MJ，直接抽取地下水用 m3。未实测密度及条件时，不将外购水质量转换为体积。工序公用设施合计与工厂账单核对，部件和保留工作液包含情况与净质量记录核对。 | 各行分别 kg、MJ、m3 | 每工单及每计量期 | 报告期内完整同配置批次；季节性或混线须披露 | 已声明工厂、外包及采购边界 | 各行可归属数量 / 同一配置的验收机器数量 | 校准、供应商组成、工单、分配及处置证据 |
| `cp_acceptance` | `acceptance` | 工厂功能验收及净质量测定 | meter_and_issue_records | 工单及配置；合格台数；各行领用／退回数量及原始单位；成分／牌号；仪表读数；分配驱动量；废物去向；路线条件 | 逐原子行使用校准仪表、称量领退记录、供应商单据及废物联单。保留属性：质量用 kg，电表转 MJ，直接抽取地下水用 m3。未实测密度及条件时，不将外购水质量转换为体积。工序公用设施合计与工厂账单核对，部件和保留工作液包含情况与净质量记录核对。 | 各行分别 kg、MJ、m3 | 每工单及每计量期 | 报告期内完整同配置批次；季节性或混线须披露 | 已声明工厂、外包及采购边界 | 各行可归属数量 / 同一配置的验收机器数量 | 校准、供应商组成、工单、分配及处置证据 |
| `cp_packaging` | `packaging` | 工厂门交付防护 | meter_and_issue_records | 工单及配置；合格台数；各行领用／退回数量及原始单位；成分／牌号；仪表读数；分配驱动量；废物去向；路线条件 | 逐原子行使用校准仪表、称量领退记录、供应商单据及废物联单。保留属性：质量用 kg，电表转 MJ，直接抽取地下水用 m3。未实测密度及条件时，不将外购水质量转换为体积。工序公用设施合计与工厂账单核对，部件和保留工作液包含情况与净质量记录核对。 | 各行分别 kg、MJ、m3 | 每工单及每计量期 | 报告期内完整同配置批次；季节性或混线须披露 | 已声明工厂、外包及采购边界 | 各行可归属数量 / 同一配置的验收机器数量 | 校准、供应商组成、工单、分配及处置证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品机器的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

finished_machine 输出固定为 1 千克，不再次相除。对每个其他适用行使用同一配置及批次进行转换，数量分子单位保持不变。不同配置须拆分，不按台数混合平均后套用目录质量。

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `configuration_trace` | all rows | 将各投入追溯至安装物料清单、路线及合格整机；供应商成品零件不重复承担坯料负荷。其余部件在补充独立原子记录前披露为覆盖缺口。 | 图纸、物料清单、供应商单据 |
| `basis_quality` | cp_mass | M 必须是正的实测净质量，交付配置、工作液状态及验收边界与全部采集交换相同。 | 校准及称重记录 |
| `coverage_quality` | all processes | 记录完整批次时间覆盖、仪表重叠、不合格品、返工、库存变化、外包阶段及未测排放。缺失记录为未知，不是零或 not_applicable。 | 台账、覆盖表及测量不确定度 |
| `chemistry_quality` | wet_surface; acceptance | 逐供货配方化学品核验配方、浓度及安全数据表；表征各外送废物流并将处理与环境排放分开。 | 配方、安全数据表、化验及联单 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference | 拒绝限定信息缺失、载荷／毛重替代、非正 M 或配置、cp_mass 与 finished_machine 不一致。要求 1 千克输出及各非参考适用行明确应用 normalize_mass。 |  |
| `validate_atomic` | inventory | 逐行要求一个物理交换、所填公开身份已核验、属性／单位正确、中文流名及介质相符。UUID 未解决不授权代理替代或混合行。 |  |
| `validate_balance` | coverage | 按实际物料清单核对安装质量、坯料、废物、保留工作液及采购零件。逐阶段核对公用设施，内部转移抵消。结合记录的测量不确定度解释差异，不杜撰数值允差。 |  |
| `validate_completeness` | dataset | 逐条件阶段核对路线证据。声称清单完整前，须分列并采集缺失化学品、零件、试验介质及实际排放；上游或功能覆盖不完整时禁止摇篮到门或服务比较。 |  |
| `validate_allocation` | shared_operations | 要求完整驱动量记录及分配、废钢处理依据；其他可辩护分配可能改变结果时记录敏感性。 | `ghg-product-allocation-2011` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 配置明确完整合格整机的制造前景过程 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 作为配置一致、上游覆盖已披露的机械供应模型投入 |
| excluded_use | 包装厂运行消耗、农产品产量、分级回收率、全寿命清洗服务，或未补充功能建模就跨功能比较 |
| required_metadata | 型号、配置、空载状态、M、保留工作液、制造商／场址、报告期间、工艺路线、电压／地区、供应商边界、运输／包装范围及分配 |
| required_quality_disclosure | 实测及估算数量；未解决身份；未测排放及部件；上游链接完整性；不确定度、数据年份及配置限制 |
| update_trigger | 机构、容积、物料清单、涂装化学组成、供货部件、能源组合、验收规格或质量协议变化 |

## 11. 数据源

| 来源编号 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `sormac-sw50-2026` | handbook | Sormac, Spiral washer SW-50 range, SW-50-EN2026/1, PDF pp.1–2 (unnumbered), Product specification, Scope of delivery, Operating principle and Hygienic piping. https://static.sormac.com/a9/4a/a94a0f281b5cfb253829a581a8f035052fdd450a.pdf | 湿式模块及不锈钢／未指定食品级塑料配置；选项不同。运行槽体容积不是制造试验耗水。 |
| `tomra-apples-historical` | handbook | TOMRA, Spotlight Apples, undated brochure, PDF creation metadata 2022-06-08, PDF p.5 (unnumbered), Inspecting, sorting, grading – and protecting. https://www.tomra.com/-/media/project/tomra/tomra/solutions/food/in-the-spotlight-pdf-files/tomra-segment_article-apples-en.pdf | 仅支持历史 5S／Spectrim 苹果分级及接触面配置；不声称当前供应、寿命、树脂化学组成或工厂强度。 |
| `moba-omnia-et` | handbook | Moba, Omnia ET, official product page, Highlights and Detection sections. https://moba.net/products-solutions/omnia-et/ | 蛋品单枚处理、称重及缺陷检测；可选模块不规定所有整机物料清单。 |
| `ghg-product-allocation-2011` | official_guidance | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), chapter 9, printed p.63 / PDF p.65, tables 9.1–9.2. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 仅支持历史分配层级；不声称符合现行完整标准。 |
