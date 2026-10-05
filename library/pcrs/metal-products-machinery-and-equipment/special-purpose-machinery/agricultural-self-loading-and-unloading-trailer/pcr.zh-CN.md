---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.agricultural-self-loading-and-unloading-trailer
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 农业自装卸挂车制造

## 1. 范围与适用性

本 PCR 覆盖完整非自走农业自装或自卸挂车及半挂车制造。包括声明集成装卸功能的牧草捡拾／转子装载挂车、移动底板／前挡板卸料挂车及农业液压自卸挂车。仅在交付时纳入集成牧草切碎、转运、车轴、制动、转向及安全模块。排除拖拉机、自走承载车辆、不具备该功能的普通货运挂车、单售部件、液态粪肥施用机及主要功能为田间分布施用的粪肥或肥料撒布机。现有粪肥／肥料机械 PCR 覆盖撒布功能；其他货运挂车旧叶明确排除本类别。排除农场运输、作物生产、载荷、使用阶段液压能耗、作物损耗、维护及报废。不包括运输或卸料服务。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.agricultural-self-loading-and-unloading-trailer |
| classification_refs | CPC 3.0 44160；类别背景，不是已接受映射 |
| covered_products | 配置明确的农业自装或自卸挂车及半挂车 |
| excluded_products | 普通货运挂车；撒布机具；拖拉机及承载车辆；单售零件；农业服务 |
| representative_product | 一台完整验收空载配置明确农业挂车 |
| production_route | 采购坯料及部件；实际场内加工、焊接、可选表面处理、装配及工厂验收 |
| market_state | 工厂门新制空载完整机器；包装另计清单 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供具有声明装载或卸料机构的农业挂车 |
| How much | 以实测净质量 M 将一台完整验收配置明确机器归一化为 1 kg |
| How well | 按型号图纸、声明车轴／制动／转向配置及装卸功能检查验收。按适用情况记录实际联锁、尾门、液压泄漏及制动试验。额定载荷仅作描述元数据，不是制造参考数量。不规定通用载荷、处理量或制动阈值。 |
| How long or cycle | 一次制造交付；不假定运行寿命、距离或载荷处理量 |
| reference_flow_link | finished_machine |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 农业用自装或自卸拖车及双轮拖车 `0a01cb28-3261-4da2-a6fa-919fdb496130` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号及序列号／批次；挂车或半挂车；主要农业用途；载荷箱体容积及空载状态；捡拾／转子、自卸、移动底板或前挡板机构；切碎／卸料选项；车轴、轮胎、制动、转向及牵引杆配置；保留油量；已装控制及防护；M；场址及期间；供应商边界及覆盖阶段 |

目录质量、最大允许总质量、载荷及容积不能替代实测空载净整机质量。按千克结果不证明不同配置运输或装载服务等价。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `energy_units` | 电力行 | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表单位；以精确定义 1 kWh = 3.6 MJ 转为 MJ。不将电力属性名称解释为燃烧清单。 |
| `volume_units` | 天然气及地下水行 | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 保留实测体积及条件；不得杜撰气体密度、水密度或热值进行质量／能量替换。 |
| `tyre_count` | `tyre` | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 计数安装的合格充气轮胎。本交换分子为数量；净整机质量单独称量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 从已声明供应商边界接收材料及配置部件，前景不隐含上游炼钢或部件制造 |
| starting_condition_role | 完整合格整机制造投入边界 |
| product_classification_scope | CPC 44160 背景下配置明确农业自装卸挂车 |
| recursive_input_rule | 购入完整机器作为投入时，作为单独声明的上游产品，不递归重建本类别；区分新制与翻修 |
| upstream_dataset_requirement | 连接与材料、成品部件边界、地区、电压及处理状态相符的投入特定上游数据集。缺失链接保留为覆盖缺口 |
| disclosure | 披露前景工厂阶段、外包工序、部件内容、来料运输覆盖、交付防护包装边界、资本设备政策及所有排除；未核验上游及物流闭合时不声称完整摇篮到门 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `manufacturing_gate` | foreground | 纳入从声明的接收投入到工厂验收之间所有实际工序及可归属返工；区分采购零件与场内制造以避免重复，使用已记录路线。 |  |
| `conditional_finish` | finishing | 仅启用有记录的涂装工序及化学配方。制造商示例证明可能路线，不是通用要求或配方。 |  |
| `exclude_field` | farm_use | 将农业载荷生产、拖拉机田间燃料、运输作业、液压使用、作物响应及报废排除在制造清单外。不包含运输服务。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `forming` | 坯料切割、成形及机加工 | conditional | 仅当场址制造这些零件；否则分列采购成品零件 | 前景制造 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| `joining` | 结构焊接及修整 | conditional | 仅当场址以焊接连接结构件 | 前景制造 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| `wet_surface` | 水基清洗及前处理 | conditional | 仅当实际进行水基清洗或转化处理；按已记录配方启用各行 | 前景制造 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| `powder_finish` | 粉末施加及固化 | conditional | 仅当实际采用粉末涂装；燃料行仅适用于燃气固化 | 前景制造 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| `assembly` | 配置整机装配 | required | 每台完整验收整机；仅启用实际安装部件行 | 前景制造 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| `acceptance` | 工厂验收及净质量测定 | required | 每台完整验收整机 | 前景制造 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| `packaging` | 工厂门交付防护 | conditional | 仅当交付边界包含出货防护；否则披露排除 | 前景制造 | 每 1 kg 参考流；采集基准为每台验收成品机器 |

各工序记录是同一最终合格输出的独立贡献，不是七种独立交易参考产品。保留可追溯内部零件转移和物料清单记录；内部转移在前景内抵消，不重复承接上游负荷。以下卡片是明确受路线条件约束的交换。实际存在的每项其他零件、化学品、燃料、包装件、废水流或实测基本流物质须分别以独立身份行补充；缺少卡片不构成截断许可。外包涂装时，用精确采购服务或成品零件记录替代场内化学品及能耗，披露其覆盖。

### 过程：坯料切割、成形及机加工（`forming`）

#### 输入

##### 产品流

###### 热轧非合金钢板（`steel_sheet`）

仅纳入实际用于机架、箱体或料斗的板材。记录牌号、宽度、厚度及来料表面状态，称量领料并扣除未使用退料。该板材身份未解决，不得用合金与非合金说明矛盾的记录替代。

- 选定流: 热轧非合金钢板
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_forming。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_forming`

###### 交流电（`forming_electricity`）

计量场内切割、钻孔、折弯和机加工及可归属抽排设备用电。该 UUID 仅适用于采购边界的用户侧 1–35 kV 电网平均供电；内部低压用电不是另一份采购投入。其他供电条件须另核验身份。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_forming。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_forming`

###### 高强度钢板（`high_strength_sheet`）

仅用于供应商确认合金及交付状态的实际机架或装载底板坯料。制造商高强度底板描述不确定通用牌号；记录领用质量及退料。

- 选定流: 高强度钢板
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_forming。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_forming`
- 来源: `poettinger-jumbo-configuration`

#### 输出

##### 废物流

###### 工业后钢废料（`steel_offcut`）

称量未处理出厂的分流钢边角料，记录合金类别及去向；内部回用不是外送废物，含油切屑须另设清单行。

- 选定流: 工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_forming。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_forming`

### 过程：结构焊接及修整（`joining`）

#### 输入

##### 产品流

###### 药芯焊丝（`flux_wire`）

仅用于与该身份相符、有记录的自保护药芯碳钢焊接。用焊丝盘领退量称量消耗；其他焊接耗材另行识别，不替换到本行。

- 选定流: 药芯焊丝 `1b74a576-06e0-4764-97ce-11a73f8a4752`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_joining。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_joining`

###### 镀铜实心碳钢焊丝（`solid_wire`）

仅用于有记录的实心焊丝路线，记录焊丝型号及消耗质量，不使用药芯焊丝 UUID。

- 选定流: 镀铜实心碳钢焊丝
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_joining。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_joining`

###### 焊接用氩气（`argon`）

仅在实际供应并消耗纯氩气时纳入，用气瓶净质量记录确定数量。氩气与二氧化碳混合气是不同配方气体，须以独立行记录组成。

- 选定流: 焊接用氩气
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_joining。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_joining`

###### 交流电（`joining_electricity`）

计量焊接、焊缝修整和抽排设备用电，采购供电条件与 forming_electricity 相同；不重复计入同一工厂总表。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_joining。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_joining`

###### 纯二氧化碳焊接保护气（`carbon_dioxide_shield`）

仅用于实际纯二氧化碳供货，采集气体消耗质量，不使用通用氩气混合物。候选代理的参考属性为体积乘时间，拒绝用于本质量交换。

- 选定流: 纯二氧化碳焊接保护气
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_joining。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_joining`

### 过程：水基清洗及前处理（`wet_surface`）

#### 输入

##### 产品流

###### 氢氧化钠清洗试剂，声明供货浓度（`caustic`）

仅在实际清洗配方使用氢氧化钠时纳入。采集供货溶液质量及浓度，不作为纯物质质量；不将 95–98% 牌号身份用于浓度未知的槽液。每项其他清洗化学品须有独立原子行。

- 选定流: 氢氧化钠清洗试剂，声明供货浓度
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_wet_surface。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_wet_surface`

###### 工艺用水（`supplied_water`）

仅计入外购清洗及漂洗工艺水，通过称量或供应商用水质量记录采集。记录处理状态及供应商边界；不将技术圈投入认作水资源，也不重复计入供应商取水。

- 选定流: 工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_wet_surface。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_wet_surface`

###### 交流电（`wet_electricity`）

按已声明的采购供电条件，计量边界内槽液循环、漂洗及水处理用电。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_wet_surface。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_wet_surface`

##### 基本流

###### 地下水（`well_water`）

仅计入本前景场址为槽液和漂洗直接抽取的地下水。以 m3 计量总取水量，声明国家及水井；介质为资源／水资源／来自水的可再生物质资源。不声称稀缺等级，不同时将同一水量计入外购工艺水。

- 选定流: 地下水 `4f462198-40cd-4184-8733-86648a20dc3f`
- 流属性/单位: 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_wet_surface。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_wet_surface`

#### 输出

##### 废物流

###### 废碱性水基清洗液（`alkaline_effluent`）

仅在这一液体废物流离开边界时纳入。测量溶液质量、pH 及成分，识别接收处理；这是废物转移，不是基本流排水。

- 选定流: 废碱性水基清洗液
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_wet_surface。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_wet_surface`

### 过程：粉末施加及固化（`powder_finish`）

#### 输入

##### 产品流

###### 涂料（粉末）（`powder`）

仅用于实际干粉配方。核对新粉、外部退料及回收粉循环；不把内部循环另算采购投入。记录树脂及颜色，不预设聚酯。

- 选定流: 涂料（粉末） `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_powder_finish。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_powder_finish`

###### 交流电（`powder_electricity`）

按已声明的采购供电条件，计量粉末施加、可归属压缩空气制备及实际采用的电加热固化用电。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_powder_finish。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_powder_finish`

###### 气态天然气（`oven_gas`）

仅计入实际在固化炉燃烧的气态管道天然气。按供应商声明的温压基准记录计量 m3、压缩及交付边界；无证据转换时不替换为 MJ 或 kg。

- 选定流: 气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位: 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_powder_finish。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_powder_finish`

#### 输出

##### 废物流

###### 粉末涂装废弃物（`powder_residue`）

仅称量作为废物外送的收集干过喷粉；排除内部回用粉末。固体粉末与废水、液体底漆污泥分开。

- 选定流: 粉末涂装废弃物 `9aa53a82-5462-400e-9096-efab7718201f`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_powder_finish。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_powder_finish`

##### 基本流

###### 二氧化碳（化石源）（`fossil_co2`）

仅用于实际化石天然气炉燃烧且有烟囱监测或场址核验的化石碳平衡支持二氧化碳质量的情形。记录化石来源及排放／空气排放／未指定空气子介质；实际模型要求更具体子介质时须换用相符身份。本规则不提供默认因子或必然排放量，不计入电网发电排放。

- 选定流: 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_powder_finish。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_powder_finish`

### 过程：配置整机装配（`assembly`）

#### 输入

##### 产品流

###### 农业挂车卸料齿轮箱（`gearbox`）

仅在安装一项外购齿轮箱时纳入。记录传动比、壳体、交付润滑状态及实测质量。风机齿轮箱不是适用身份。

- 选定流: 农业挂车卸料齿轮箱
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 完整液压缸（`hydraulic_cylinder`）

仅在实际安装时纳入。称量具有指定密封及接头的合格外购液压缸；未装配缸体机加工零件不能识别完整总成。

- 选定流: 完整液压缸
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 带防护罩的农业动力输出传动轴（`pto_shaft`）

仅在交付配置包含时纳入。记录长度、连接方式、防护罩包含情况及质量；排除拖拉机本体。

- 选定流: 带防护罩的农业动力输出传动轴
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 钢制平板链节底板输送链（`roller_chain`）

仅用于采用该平板链节输送链的装卸挂车配置；测量安装的外购链条质量及节距。刮板、链轮及轴承是不同投入。

- 选定流: 钢制平板链节底板输送链
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`
- 来源: `poettinger-jumbo-configuration`

###### 钢制径向滚珠轴承（`ball_bearing`）

仅记录这一具体安装轴承类型及质量；不使用风机变桨轴承或保持架身份。

- 选定流: 钢制径向滚珠轴承
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 碳钢螺栓（`fastener`）

记录安装螺栓的等级、镀层及质量；实际使用的螺母和垫圈须分列，不合并到螺栓行。

- 选定流: 碳钢螺栓
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 轮胎（`tyre`）

仅用于该产品类别中采用新充气橡胶轮胎的牵引式配置。采集安装数量、尺寸及载荷／速度规格；参考属性是物品数量，本行保持 Item(s)，不写 kg。另采集轮胎质量用于物料清单核对。

- 选定流: 轮胎 `11c2e97a-624f-41de-957d-543cddb777ef`
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 液压油（`hydraulic_oil`）

仅用于与核验的蒸馏／加氢／精炼供货路线相符的实际成品液压油。记录牌号及基础油来源；采集新加注及未回收试验消耗，排除外购液压缸已含油量。

- 选定流: 液压油 `eafff56c-3487-4345-9f24-00429f61c556`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 农业挂车卸料电子控制单元（`control_unit`）

仅在配置包含时纳入。记录控制器型号、外壳及质量；不替用机床或汽车控制器 UUID。

- 选定流: 农业挂车卸料电子控制单元
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 交流电（`assembly_electricity`）

按已声明的采购供电条件计量装配工具、提升设备及可归属公用设施，纳入合格整机可归属返工。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 挂车车轴（`trailer_axle`）

每行对应一种指定已装外购挂车车轴，记录载荷等级、转向、制动／轮毂内容、净质量及供应商边界；不重复计入坯料加工或已含制动模块的独立清单。

- 选定流: 挂车车轴 `e1bf60f6-8831-49e2-ad46-9bad63ff50a3`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 拖车用钢制车轮轮辋（`wheel_rim`）

仅纳入与车轴及轮胎分开供应的已装外购钢制轮辋，记录尺寸、镀层及实测质量；轮胎数量不包含本部件质量。

- 选定流: 拖车用钢制车轮轮辋 `c111cb85-8ade-41b4-a334-393b24019136`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 硫化橡胶制的传动、输送带或胶带（`rubber_floor_belt`）

仅用于移动前挡板配置中供应商确认的橡胶成品带，记录增强层、牌号及质量。KRONE 输送带描述不识别橡胶化学组成；聚合物板材或运输服务不是本部件。

- 选定流: 硫化橡胶制的传动、输送带或胶带 `1e587e97-03a2-4c50-8226-f8446a1dd1d9`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`
- 来源: `krone-gx-configuration`

###### 农业挂车液压卸料马达（`hydraulic_motor`）

仅用于驱动移动底板或前挡板的已装外购液压马达，记录排量、接口、交付油状态、型号及实测部件质量；马达与齿轮箱及拖拉机液压能耗分开。

- 选定流: 农业挂车液压卸料马达
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`
- 来源: `krone-gx-configuration`

### 过程：工厂验收及净质量测定（`acceptance`）

#### 输入

##### 产品流

###### 交流电（`test_electricity`）

计量工厂空载驱动、制动、转向、安全联锁、装载与卸料机构验收及试验台公用设施，不是农田运输。工厂验收采用其他燃料或一次性试验介质时，须按实际记录补充每个真实原子投入及输出。本规则不要求田间运输或作物装载周期试验。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_acceptance`

#### 输出

##### 产品流

###### 农业用自装或自卸拖车及双轮拖车（`finished_machine`）

一千克是同一配置完整合格整机的归一化切片，不是独立销售的机器碎片。声明空载箱体、清洁干燥状态及保留的工作液；包含交付车轴、制动、轮胎、牵引杆、装卸机构及防护；排除拖拉机、农业载荷、未交付可拆附件和运输包装。

- 选定流: 农业用自装或自卸拖车及双轮拖车 `0a01cb28-3261-4da2-a6fa-919fdb496130`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 1 千克
- 数值来源模式: `fixed_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_mass`

### 过程：工厂门交付防护（`packaging`）

#### 输入

##### 产品流

###### 聚乙烯薄膜（`pack_film`）

仅在聚乙烯薄膜实际随产品出货时纳入。分别称量所用薄膜及废料；计入清单但不计入合格净整机质量。

- 选定流: 聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_packaging。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_packaging`

###### 瓦楞纸板防护垫（`pack_board`）

仅在实际使用时纳入；记录等级、再生成分及质量。不预设指定纤维配比纸箱可代表这一未指定配比防护垫。

- 选定流: 瓦楞纸板防护垫
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
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
| `cp_forming` | `forming` | 坯料切割、成形及机加工 | meter_and_issue_records | 工单及配置；合格台数；各行领用／退回数量及原始单位；成分／牌号；仪表读数；分配驱动量；废物去向；路线条件 | 逐原子行使用校准仪表、称量领退记录、供应商单据及废物联单。保留属性：质量用 kg，电表转 MJ，声明温压气体及地下水用 m3，轮胎用 Item(s)。化石二氧化碳保留烟囱监测或核验的场址化石碳平衡及其推导。工序公用设施合计与工厂账单核对，部件和保留工作液包含情况与净质量记录核对。 | 各行分别 kg、MJ、m3、Item(s) | 每工单及每计量期 | 报告期内完整同配置批次；季节性或混线须披露 | 已声明工厂、外包及采购边界 | 各行可归属数量 / 同一配置的验收机器数量 | 校准、供应商组成、工单、分配及处置证据 |
| `cp_joining` | `joining` | 结构焊接及修整 | meter_and_issue_records | 工单及配置；合格台数；各行领用／退回数量及原始单位；成分／牌号；仪表读数；分配驱动量；废物去向；路线条件 | 逐原子行使用校准仪表、称量领退记录、供应商单据及废物联单。保留属性：质量用 kg，电表转 MJ，声明温压气体及地下水用 m3，轮胎用 Item(s)。化石二氧化碳保留烟囱监测或核验的场址化石碳平衡及其推导。工序公用设施合计与工厂账单核对，部件和保留工作液包含情况与净质量记录核对。 | 各行分别 kg、MJ、m3、Item(s) | 每工单及每计量期 | 报告期内完整同配置批次；季节性或混线须披露 | 已声明工厂、外包及采购边界 | 各行可归属数量 / 同一配置的验收机器数量 | 校准、供应商组成、工单、分配及处置证据 |
| `cp_wet_surface` | `wet_surface` | 水基清洗及前处理 | meter_and_issue_records | 工单及配置；合格台数；各行领用／退回数量及原始单位；成分／牌号；仪表读数；分配驱动量；废物去向；路线条件 | 逐原子行使用校准仪表、称量领退记录、供应商单据及废物联单。保留属性：质量用 kg，电表转 MJ，声明温压气体及地下水用 m3，轮胎用 Item(s)。化石二氧化碳保留烟囱监测或核验的场址化石碳平衡及其推导。工序公用设施合计与工厂账单核对，部件和保留工作液包含情况与净质量记录核对。 | 各行分别 kg、MJ、m3、Item(s) | 每工单及每计量期 | 报告期内完整同配置批次；季节性或混线须披露 | 已声明工厂、外包及采购边界 | 各行可归属数量 / 同一配置的验收机器数量 | 校准、供应商组成、工单、分配及处置证据 |
| `cp_powder_finish` | `powder_finish` | 粉末施加及固化 | meter_and_issue_records | 工单及配置；合格台数；各行领用／退回数量及原始单位；成分／牌号；仪表读数；分配驱动量；废物去向；路线条件 | 逐原子行使用校准仪表、称量领退记录、供应商单据及废物联单。保留属性：质量用 kg，电表转 MJ，声明温压气体及地下水用 m3，轮胎用 Item(s)。化石二氧化碳保留烟囱监测或核验的场址化石碳平衡及其推导。工序公用设施合计与工厂账单核对，部件和保留工作液包含情况与净质量记录核对。 | 各行分别 kg、MJ、m3、Item(s) | 每工单及每计量期 | 报告期内完整同配置批次；季节性或混线须披露 | 已声明工厂、外包及采购边界 | 各行可归属数量 / 同一配置的验收机器数量 | 校准、供应商组成、工单、分配及处置证据 |
| `cp_assembly` | `assembly` | 配置整机装配 | meter_and_issue_records | 工单及配置；合格台数；各行领用／退回数量及原始单位；成分／牌号；仪表读数；分配驱动量；废物去向；路线条件 | 逐原子行使用校准仪表、称量领退记录、供应商单据及废物联单。保留属性：质量用 kg，电表转 MJ，声明温压气体及地下水用 m3，轮胎用 Item(s)。化石二氧化碳保留烟囱监测或核验的场址化石碳平衡及其推导。工序公用设施合计与工厂账单核对，部件和保留工作液包含情况与净质量记录核对。 | 各行分别 kg、MJ、m3、Item(s) | 每工单及每计量期 | 报告期内完整同配置批次；季节性或混线须披露 | 已声明工厂、外包及采购边界 | 各行可归属数量 / 同一配置的验收机器数量 | 校准、供应商组成、工单、分配及处置证据 |
| `cp_acceptance` | `acceptance` | 工厂验收及净质量测定 | meter_and_issue_records | 工单及配置；合格台数；各行领用／退回数量及原始单位；成分／牌号；仪表读数；分配驱动量；废物去向；路线条件 | 逐原子行使用校准仪表、称量领退记录、供应商单据及废物联单。保留属性：质量用 kg，电表转 MJ，声明温压气体及地下水用 m3，轮胎用 Item(s)。化石二氧化碳保留烟囱监测或核验的场址化石碳平衡及其推导。工序公用设施合计与工厂账单核对，部件和保留工作液包含情况与净质量记录核对。 | 各行分别 kg、MJ、m3、Item(s) | 每工单及每计量期 | 报告期内完整同配置批次；季节性或混线须披露 | 已声明工厂、外包及采购边界 | 各行可归属数量 / 同一配置的验收机器数量 | 校准、供应商组成、工单、分配及处置证据 |
| `cp_packaging` | `packaging` | 工厂门交付防护 | meter_and_issue_records | 工单及配置；合格台数；各行领用／退回数量及原始单位；成分／牌号；仪表读数；分配驱动量；废物去向；路线条件 | 逐原子行使用校准仪表、称量领退记录、供应商单据及废物联单。保留属性：质量用 kg，电表转 MJ，声明温压气体及地下水用 m3，轮胎用 Item(s)。化石二氧化碳保留烟囱监测或核验的场址化石碳平衡及其推导。工序公用设施合计与工厂账单核对，部件和保留工作液包含情况与净质量记录核对。 | 各行分别 kg、MJ、m3、Item(s) | 每工单及每计量期 | 报告期内完整同配置批次；季节性或混线须披露 | 已声明工厂、外包及采购边界 | 各行可归属数量 / 同一配置的验收机器数量 | 校准、供应商组成、工单、分配及处置证据 |

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
| `chemistry_quality` | wet_surface; powder_finish | 逐供货配方化学品核验配方、浓度及安全数据表；表征各外送废物流并将处理与环境排放分开。 | 配方、安全数据表、化验及联单 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference | 拒绝限定信息缺失、载荷／毛重替代、非正 M 或配置、cp_mass 与 finished_machine 不一致。要求 1 千克输出及各非参考适用行明确应用 normalize_mass。 |  |
| `validate_atomic` | inventory | 逐行要求一个物理交换、所填公开身份已核验、属性／单位正确、中文流名及介质相符。UUID 未解决不授权代理替代或混合行。 |  |
| `validate_balance` | coverage | 按实际物料清单核对安装质量、坯料、废物、保留工作液及采购零件；独立核对轮胎数量。逐阶段核对公用设施，内部转移抵消。结合记录的测量不确定度解释差异，不杜撰数值允差。 |  |
| `validate_completeness` | dataset | 逐条件阶段核对路线证据。声称清单完整前，须分列并采集缺失化学品、零件、试验介质及实际排放；上游或功能覆盖不完整时禁止摇篮到门或服务比较。 |  |
| `validate_allocation` | shared_operations | 要求完整驱动量记录及分配、废钢处理依据；其他可辩护分配可能改变结果时记录敏感性。 | `ghg-product-allocation-2011` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 配置明确完整合格整机的制造前景过程 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 作为配置一致、上游覆盖已披露的机械供应模型投入 |
| excluded_use | 农田运输强度、作物产量、装卸服务、全寿命运输，或未补充功能建模就跨容积比较 |
| required_metadata | 型号、配置、空载状态、M、保留工作液、制造商／场址、报告期间、工艺路线、电压／地区、供应商边界、运输／包装范围及分配 |
| required_quality_disclosure | 实测及估算数量；未解决身份；未测排放及部件；上游链接完整性；不确定度、数据年份及配置限制 |
| update_trigger | 机构、容积、物料清单、涂装化学组成、供货部件、能源组合、验收规格或质量协议变化 |

## 11. 数据源

| 来源编号 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `poettinger-jumbo-configuration` | handbook | PÖTTINGER, Multipurpose rotor loader wagon JUMBO 7000, 8000, 97+129.EN.0925, PDF/printed p.15; p.2 equipment and technical-data limitations. https://cdn.poettinger.at/download/prospekte/87063/0/POETTINGER_JUMBO-7000-8000_129.EN.0925.pdf | 仅支持型号系列钢制装载底板、平板链节链条及液压驱动；不支持通用材料牌号、整机质量、寿命或工厂消耗。地区及选装配置不同。 |
| `krone-gx-configuration` | handbook | KRONE, GX general-purpose wagons, KRONE GX – the design and The drawbar sections. https://www.krone-agriculture.com/en/products/forage-wagons-and-trailers/gx | 移动前挡板、输送带、平板链节链条及液压牵引杆示例；未确定带材化学组成及通用部件或用量。 |
| `ghg-product-allocation-2011` | official_guidance | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), chapter 9, printed p.63 / PDF p.65, tables 9.1–9.2. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 仅支持历史分配层级；不声称符合现行完整标准。 |
