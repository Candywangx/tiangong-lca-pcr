---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.electric-golf-car
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 电动高尔夫球车制造

## 1. 范围和适用性

本候选 PCR 覆盖新制完整双座非公路电池电动高尔夫球场球车的制造，窄于 CPC3.0 49116。排除雪地车辆、汽油及混动球车、货运／工具变型、多座接驳车、公路登记低速车、乘用汽车、备件、翻修及改装。纳入实际场内制造、条件性表面处理、装配、工厂充电、短程行驶／转向／制动及电气验收、可归属返工和废物。排除客户充电、高尔夫活动、载客服务、客户维护、假定里程／寿命和报废。不建立运行服务功能等效。本 PCR 中每台合格成品设备均指一辆完整配置球车，与英文 accepted finished unit 同义。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.electric-golf-car |
| classification_refs | CPC3.0 49116；较窄产品背景，不是已接受分类映射 |
| covered_products | 完整双座非公路电池电动球车，各实际电池／车架／制动配置分别建模 |
| excluded_products | 雪地车辆、燃烧／混动车、公路汽车、货运／工具及多座接驳车、备件、翻修及改装 |
| representative_product | 一辆新制完整验收洁净空载配置明确球车 |
| production_route | 接收声明坯料和成品模块；实际底盘制造或采购底盘；条件性前处理／粉末涂装；电池／驱动／车身／底盘装配；计量工厂充电、配置特定试验及验收 |
| market_state | 工厂门新制合格空载车辆；包含已装电池及声明保留工作液，出货防护另计 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 功能 | 提供声明的完整合格双座非公路电池电动球车 |
| 数量 | 采用实测净质量 M 表示同一完整合格配置设备的 1 kg |
| 质量要求 | 符合实际图纸及配置特定签字验收准则，包括电池安装／荷电状态、布线／极性／绝缘、控制器设置、转向及制动检查、短程工厂行驶、工作液泄漏及交付防护／附件。记录仪表、条件、时长及实测结果；目录速度、续航、容量或额定功率不是通用制造验收或能量因子。 |
| 时间或周期 | 一次制造交付；不假定球车行驶寿命或服务周期 |
| reference_flow_link | finished_machine |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 载客用、特别是为在雪上行驶设计的车辆，打高尔夫球用车及类似车辆 `2eafcec4-e441-447e-9ef9-40c4722c9ec9` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号／序列号／批次；双座非公路电池电动状态；实际底盘材质及坯料／成品模块边界；电池化学组成／型号／数量／质量／荷电状态及充液状态；马达／驱动桥／控制器／线束包含；车身、座椅、车轮／轮胎、转向、制动及悬架；已装顶篷／球包支架及附件；保留工作液；洁净空载状态；实测 M；排除车外充电器；制造商／场址／期间；供应商边界、实际路线、工厂试验及包装范围 |

使用校准秤称量同一完整验收洁净空载设备。包含已装电池、实际交付已装附件及声明保留工作液；排除乘员、球杆、载荷、搬运夹具、散装备件及出货防护。目录近似整备、干重或毛重不是 M。电池容量不是工厂消耗电力。一千克归一化不等同续航、载荷或高尔夫服务；宽泛公开参考名称仅用于本实际球车配置，排除雪地及其他变型。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `energy_units` | 电力行 | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表单位；以精确定义 1 kWh = 3.6 MJ 转为 MJ。不将电力属性名称解释为燃烧清单。 |
| `volume_units` | 地下水行 | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 保留实测体积及条件；不得杜撰气体密度、水密度或热值进行质量／能量替换。 |

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `tyre_count_units` | tyre | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 采用 cp_assembly 记录每台合格设备实际已装成品轮胎数量；保留公开数量属性，用 q_item/M 归一化，不将交换转为 kg。单独称量轮胎仅用于已装实体质量核对。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 从已声明供应商边界接收材料及配置部件，前景不隐含上游炼钢或部件制造 |
| starting_condition_role | 完整合格整机制造投入边界 |
| product_classification_scope | 较宽 CPC49116 背景下完整双座非公路电池电动球车 |
| recursive_input_rule | 购入完整设备作为投入时，作为单独声明的上游产品，不递归重建本类别；区分新制与翻修 |
| upstream_dataset_requirement | 连接与材料、成品部件边界、地区、电压及处理状态相符的投入特定上游数据集。缺失链接保留为覆盖缺口 |
| disclosure | 披露前景工厂阶段、外包工序、部件内容、来料运输覆盖、交付防护包装边界、资本设备政策及所有排除；未核验上游及物流闭合时不声称完整摇篮到门 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `manufacturing_gate` | foreground | 纳入从声明的接收投入到工厂验收之间所有实际工序及可归属返工；区分采购零件与场内制造以避免重复，使用已记录路线。 |  |
| `conditional_finish` | finishing | 仅启用有记录的涂装工序及化学配方。制造商示例证明可能路线，不是通用要求或配方。 |  |
| `exclude_customer_use` | golf_service | 排除客户充电、行驶及高尔夫服务、维护及报废。纳入实际工厂充电及短程验收试验的实测材料、交流输入能量及识别废物／排放。不包含载客或高尔夫服务。 |  |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `charger_delivery_boundary` | reference | 在 M 中声明实际已装附件及保留工作液。即使一同开票，车外充电器及散装设备也是 M 外独立产品。仅将实际已装车载充电器作为独立实体投入并纳入 M。运输拆卸须对同一完整验收配置逐件核对及校准称量净质量求和，不以目录质量替代。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `forming` | 坯料切割、成形及机加工 | conditional | 仅当场址制造这些零件；否则分列采购成品零件 | 前景制造 | 每 1 kg 参考流；采集基准为每台验收成品设备 |
| `joining` | 结构焊接及修整 | conditional | 仅当场址以焊接连接结构件 | 前景制造 | 每 1 kg 参考流；采集基准为每台验收成品设备 |
| `wet_surface` | 水基清洗及前处理 | conditional | 仅当实际进行水基清洗或转化处理；按已记录配方启用各行 | 前景制造 | 每 1 kg 参考流；采集基准为每台验收成品设备 |
| `powder_finish` | 粉末施加及固化 | conditional | 仅当实际采用粉末涂装；电力固化行仅用于实际电固化粉末 | 前景制造 | 每 1 kg 参考流；采集基准为每台验收成品设备 |
| `assembly` | 配置球车装配 | required | 每台完整验收整机；仅启用实际安装部件行 | 前景制造 | 每 1 kg 参考流；采集基准为每台验收成品设备 |
| `acceptance` | 工厂验收及净质量测定 | required | 每台完整验收整机 | 前景制造 | 每 1 kg 参考流；采集基准为每台验收成品设备 |
| `packaging` | 工厂门交付防护 | conditional | 仅当交付边界包含出货防护；否则披露排除 | 前景制造 | 每 1 kg 参考流；采集基准为每台验收成品设备 |

各工序记录是同一最终合格输出的独立贡献，不是七种独立交易参考产品。保留可追溯内部零件转移和物料清单记录；内部转移在前景内抵消，不重复承接上游负荷。以下卡片是明确受路线条件约束的交换。实际存在的每项其他零件、化学品、燃料、包装件、废水流或实测基本流物质须分别以独立身份行补充；缺少卡片不构成截断许可。外包涂装时，用精确采购服务或成品零件记录替代场内化学品及能耗，披露其覆盖。

### 过程：坯料切割、成形及机加工（`forming`）

#### 输入

##### 产品流

###### 热轧非合金钢板（`steel_sheet`）

仅纳入实际用于实际钢制底盘支架的板材。记录牌号、宽度、厚度及来料表面状态，称量领料并扣除未使用退料。该板材身份未解决，不得用合金与非合金说明矛盾的记录替代。

- 选定流: 热轧非合金钢板
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_forming。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
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
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_forming`

###### 挤压 6061-T6 铝合金矩形底盘管（`al_tube`）

仅用于实际图纸及供应商确认、场内制造所用 6061-T6 矩形管；记录截面、热处理状态及领用扣退回质量。Club Car 仅支持铝车架，不指定该合金／热处理状态。公开线材型材身份不是管材。排除采购完整底盘已含材料。

- 选定流: 挤压 6061-T6 铝合金矩形底盘管
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_forming。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_forming`
- 来源: `clubcar-tempo-2022`

###### 冷弯非合金钢矩形底盘管（`steel_tube`）

仅计场内制造实际采用、规格明确的钢管坯料，附牌号、壁厚、表面及实测质量。E-Z-GO 支持焊接钢架，不指定通用坯料牌号或工厂路线；候选型材成形／分类背景冲突，不强配本管材。

- 选定流: 冷弯非合金钢矩形底盘管
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_forming。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_forming`
- 来源: `ezgo-rxv-2024`

#### 输出

##### 废物流

###### 工业后钢废料（`steel_offcut`）

称量未处理出厂的分流钢边角料，记录合金类别及去向；内部回用不是外送废物，含油切屑须另设清单行。

- 选定流: 工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_forming。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_forming`

###### 分流干燥铝合金底盘管边料（`al_offcut`）

仅计实际分流、未经处理外送铝边料；称量 kg 并记录合金、污染及去向。候选松散废铝参考属性为堆积体积，其默认堆积密度因子不构成本称量批次证据。在真实属性和实测转换核对前保持 UUID 未解决。

- 选定流: 分流干燥铝合金底盘管边料
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_forming。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_forming`

### 过程：结构焊接及修整（`joining`）

#### 输入

##### 产品流

###### 镀铜实心碳钢焊丝（`solid_wire`）

仅用于有记录的实心焊丝路线，记录焊丝型号及消耗质量，不使用药芯焊丝 UUID。

- 选定流: 镀铜实心碳钢焊丝
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_joining。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
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
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
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
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_joining`

###### ER4043 铝硅焊接填充丝（`al_wire`）

仅用于合格铝连接实际采用、供应商确认 ER4043 焊丝；采集丝盘领用扣退回量及填充成分。不由车架材质推断焊丝，不采用碳钢焊丝身份。

- 选定流: ER4043 铝硅焊接填充丝
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_joining。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
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
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
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
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
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
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
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
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
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
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
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
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
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
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_powder_finish`

#### 输出

##### 废物流

###### 粉末涂装废弃物（`powder_residue`）

该身份仅用于中国厂内干过喷粉；其他地域须另核验身份。仅称量作为废物外送的收集干过喷粉；排除内部回用粉末。固体粉末与废水、液体底漆污泥分开。

- 选定流: 粉末涂装废弃物 `9aa53a82-5462-400e-9096-efab7718201f`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_powder_finish。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_powder_finish`

### 过程：配置球车装配（`assembly`）

#### 输入

##### 产品流

###### 钢制径向滚珠轴承（`ball_bearing`）

仅记录这一具体安装轴承类型及质量；不使用风机变桨轴承或保持架身份。

- 选定流: 钢制径向滚珠轴承
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
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
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
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
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 成品铝合金高尔夫球车底盘（`al_chassis`）

单个实际采购完整底盘，声明图纸、合金、表面处理、已含部件边界及净质量。此投入替代前景内对应坯料、焊接及表面处理；宣传册不要求场内制造。光伏安装框架不是车辆底盘。

- 选定流: 成品铝合金高尔夫球车底盘
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`
- 来源: `clubcar-tempo-2022`

###### 成品粉末涂装钢制高尔夫球车底盘（`steel_chassis`）

仅用于实际供货焊接钢制底盘，声明涂层组成、质量及内容。不将供应商焊接、粉末及固化用能再计场内投入。专用卡车车架不自动适用于高尔夫球车底盘。

- 选定流: 成品粉末涂装钢制高尔夫球车底盘
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`
- 来源: `ezgo-rxv-2024`

###### 成品富液深循环铅酸高尔夫球车牵引电池（`lead_pack`）

仅计本配置供应商确认富液深循环电池；记录型号、电压、安装数量、电解液状态、交付质量及电池箱边界。该成品电化学产品已含充填电解液，不重复计铅或硫酸。启动／通用铅酸电池分类矛盾及能量参考工业电池候选保持未解决。

- 选定流: 成品富液深循环铅酸高尔夫球车牵引电池
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 成品锂离子高尔夫球车牵引电池包（`li_pack`）

仅计单个实际配置采购成品牵引包，记录供应商确认正负极化学组成、电芯、外壳、BMS、布线、容量及净质量。锂离子营销名称不指定 NMC 或 LFP，不推断化学组成。不重复计包内电芯或电解液。数量属性公开候选存在掺杂化学品分类矛盾且无完整牵引包边界，因此不强配 UUID。

- 选定流: 成品锂离子高尔夫球车牵引电池包
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`
- 来源: `ezgo-rxv-2024`

###### 完整交流异步高尔夫球车牵引电动机（`ac_motor`）

仅计铭牌确认、采购完整驱动模块之外的交流异步马达。记录型号、实测质量及控制器／制动包含情况。E-Z-GO 支持交流结构；异步技术须在实际前景核验。候选轨道／有轨电车牵引电机不是本球车马达。

- 选定流: 完整交流异步高尔夫球车牵引电动机
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`
- 来源: `ezgo-rxv-2024`

###### 完整有刷直流高尔夫球车牵引电动机（`dc_motor`）

仅计实际单供、铭牌确认有刷直流马达；记录绕组、壳体、质量及模块边界。这是实际产品条件变型，不是通用制造商要求；不与交流马达混成一个交换。

- 选定流: 完整有刷直流高尔夫球车牵引电动机
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 完整电动高尔夫球车齿轮驱动桥（`transaxle`）

单个实际采购齿轮桥及差速器总成；声明壳体、齿轮、轴承、保留齿轮油及已含马达／制动。记录交付质量，不重复计已含零件和工作液。

- 选定流: 完整电动高尔夫球车齿轮驱动桥
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 完整高尔夫球车牵引功率控制器（`controller`）

记录实际供货驱动控制器、功率级、外壳、板卡／布线边界及实测质量。通用 ECU 不建立电压、牵引逆变器或斩波器路线。不重复计已含线束和电子件。

- 选定流: 完整高尔夫球车牵引功率控制器
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 点火接线装置和其他用于车辆、航空器或船只的点火接线装置（`harness`）

仅采用宽泛公开身份中的其他车辆布线部分：单个实际成品非点火电动球车线束。声明导体、绝缘、连接器、电路、供应商边界及实测质量；不要求点火系统，不重复计采购模块已含布线。保留官方中文 baseName 的重复点火措辞。

- 选定流: 点火接线装置和其他用于车辆、航空器或船只的点火接线装置 `4b3f48dd-97a6-427e-9baf-742d7eb6e9c2`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 成品注塑 TPO 高尔夫球车前罩（`front_cowl`）

单个实际供货热塑性聚烯烃前车身板，指定聚合物／弹性体配方、填料、颜色、注塑状态及实测质量。E-Z-GO 仅支持 TPO 车身，不推断聚丙烯牌号或场内注塑。后板须独立行。

- 选定流: 成品注塑 TPO 高尔夫球车前罩
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`
- 来源: `ezgo-rxv-2024`

###### 成品聚丙烯高尔夫球车顶篷（`canopy`）

仅计实际安装、供应商证据确认聚丙烯配方、增强层、几何及实测质量的顶篷。制造商附件列表不建立其聚合物组成。其他顶篷材质及支撑柱须独立实体行。

- 选定流: 成品聚丙烯高尔夫球车顶篷
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 完整软垫双座高尔夫球车座椅（`seat`）

单个实际完整成品双座座椅；声明覆面、泡沫、底座、安装件及靠背包含情况、实测质量和供应商边界。不将已含聚合物或织物再计前景原料。

- 选定流: 完整软垫双座高尔夫球车座椅
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 成品聚碳酸酯折叠高尔夫球车风挡（`windscreen`）

仅计实际安装、供应商确认聚碳酸酯风挡，附涂层、厚度、铰链及实测质量。制造商可选风挡列表不建立聚碳酸酯组成或通用安装要求；其他透明板材须独立行。

- 选定流: 成品聚碳酸酯折叠高尔夫球车风挡
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 轮胎（`tyre`）

仅用于与该公开非公路轮胎类别相符的实际成品新充气橡胶草地轮胎；记录配方、增强层、尺寸及安装数量。数量按 Item(s) 计数，保留公开物品数量参考属性。另测各轮胎质量用于物料核对，不用 kg 替换公开数量属性。轮辋另计。采集每台设备 q_item 数量并以 q_item/M 归一化，结果为每 kg 整车的 Item(s)。

- 选定流: 轮胎 `11c2e97a-624f-41de-957d-543cddb777ef`
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 成品钢制高尔夫球车轮辋（`wheel`）

仅计实际规格钢制轮辋，附涂层、尺寸、实测质量及气门包含情况。轮胎及完整胎轮模块交换边界不同，不重复计数。

- 选定流: 成品钢制高尔夫球车轮辋
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 完整高尔夫球车齿条齿轮转向器（`steering`）

单个实际供货转向器，声明壳体、齿条、齿轮及拉杆包含情况，记录质量及图纸。模块外方向盘及转向柱须独立行。

- 选定流: 完整高尔夫球车齿条齿轮转向器
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`
- 来源: `clubcar-tempo-2022`

###### 完整液压弹簧支柱高尔夫球车减振器（`strut`）

仅计实际供货安装弹簧支柱；记录钢弹簧、液压减振器、保留工作液、质量及数量。E-Z-GO 支持该前部结构；不将独立钢板弹簧结构强配此模块。

- 选定流: 完整液压弹簧支柱高尔夫球车减振器
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`
- 来源: `ezgo-rxv-2024`

###### 成品钢制高尔夫球车悬架钢板弹簧（`leafspring`）

仅计实际已装单供钢板弹簧，附牌号、几何、涂层及质量。减振器及完整悬架模块不同，不规定通用数量。

- 选定流: 成品钢制高尔夫球车悬架钢板弹簧
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`
- 来源: `clubcar-tempo-2022`

###### 完整机械式高尔夫球车鼓式制动器（`drum_brake`）

仅计实际安装机械鼓式总成；声明制动鼓、蹄／摩擦配方、调整及驻车联动边界和质量。Club Car 电动车规格支持该路线；E-Z-GO 汽油列不证明电动车装鼓式制动。

- 选定流: 完整机械式高尔夫球车鼓式制动器
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`
- 来源: `clubcar-tempo-2022`

###### 完整电磁高尔夫球车驻车制动器（`magnetic_brake`）

仅计采购马达／驱动桥之外实际交付电磁驻车制动总成。E-Z-GO 支持该电动驻车路线及马达行车制动，不建立必需机械行车制动鼓。记录质量及包含情况以避免重复计数。

- 选定流: 完整电磁高尔夫球车驻车制动器
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`
- 来源: `ezgo-rxv-2024`

###### 成品矿物高尔夫球车驱动桥润滑油（`gear_oil`）

仅计供应商牌号及添加剂组成、来源确认的实际矿物齿轮润滑油；称量新油领用扣未用退回，区分交付保留油和废弃油。预充外购驱动桥已含油，不重复投入。

- 选定流: 成品矿物高尔夫球车驱动桥润滑油
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 完整车载高尔夫球车电池充电器（`onboard_charger`）

仅计实际已装车载充电器；记录外壳、布线、额定输入、质量及模块边界。工厂验收使用车外充电装置为设备，不属于整车 M；单独供货车外充电器须独立产品模型。不预设目录充电器已装车。

- 选定流: 完整车载高尔夫球车电池充电器
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

### 过程：工厂验收及净质量测定（`acceptance`）

#### 输入

##### 产品流

###### 交流电（`test_electricity`）

计量工厂电池充电的交流输入，包含实际充电器损耗、短程行驶／制动／转向检查及可归属提升、通风、控制器设置及返工。记录起终荷电状态及试验条件。不将已充电电池放出的能量再计为采购电力。排除客户充电及高尔夫活动；目录 kW、kWh 容量及车速不是工厂消耗。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_acceptance`

###### 外购富液牵引电池补液用去离子水（`battery_water`）

仅计实际单独领用去离子电池水，记录电导率及质量。排除采购已充液电池所含水及未用退回，区分 M 中保留质量和废弃液。这一处理技术圈产品不是直接抽取地下水或废水。

- 选定流: 外购富液牵引电池补液用去离子水
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_acceptance`

#### 输出

##### 产品流

###### 载客用、特别是为在雪上行驶设计的车辆，打高尔夫球用车及类似车辆（`finished_machine`）

同一完整合格双座非公路电动高尔夫球车的一千克。宽泛公开名称也覆盖雪地车辆；这些车辆及其他变型不属于本 PCR。包含实际已装底盘、牵引电池、马达、驱动桥、控制器、线束、车身、双座座椅、转向、车轮／轮胎、制动、悬架、已装交付顶篷／球包支架及保留工作液。排除乘员、球杆、载荷、夹具、出货防护、散装备件及单独供货车外充电器。

- 选定流: 载客用、特别是为在雪上行驶设计的车辆，打高尔夫球用车及类似车辆 `2eafcec4-e441-447e-9ef9-40c4722c9ec9`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 1 千克
- 数值来源模式: `fixed_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_mass`

##### 基本流

###### 氢（`hydrogen_air`）

仅在实际前景工厂充电或返工向大气释放实测氢（CAS1333-74-0），且无法论证更具体接收子介质时采用：排放／大气排放／未指定。用校准浓度及实测气流／时长协议采集物质特定质量，记录组成、温度、压力及实际转换。不杜撰电解、充电效率或通风因子，不替换为硫化氢。不规定锂电池必然排放；缺失证据为未知，不是零。

- 选定流: 氢 `08a91e70-3ddc-11dd-949c-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_acceptance`

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
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
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
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
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
| `cp_mass` | `acceptance` | 验收净质量 | weighing | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整设备，排除运输包装；核对同一配置和验收记录。 | kg | 每台验收 | 报告期间内完整批次 | 同一型号及配置 | 每台验收净质量 | 校准、称重及签字验收记录 |
| `cp_forming` | `forming` | 坯料切割、成形及机加工 | meter_and_issue_records | 工单及配置；合格台数；各行领用／退回数量及原始单位；成分／牌号；仪表读数；分配驱动量；废物去向；路线条件 | 逐原子行使用校准仪表、称量领退记录、供应商单据及废物联单。保留属性：质量用 kg，电表转 MJ，直接抽取地下水用 m3，实体计数成品轮胎用 Item(s)。由领退、物料清单／验收检查记录已装轮胎数量；另测轮胎质量仅用于物料核对。未实测密度及条件时，不将外购水质量转为体积。工序公用设施合计与工厂账单核对，部件和保留工作液包含情况与净质量记录核对。 | 各行分别 kg、MJ、m3、Item(s) | 每工单及每计量期 | 报告期内完整同配置批次；季节性或混线须披露 | 已声明工厂、外包及采购边界 | 各行可归属数量 / 同一配置的验收设备数量 | 校准、供应商组成、工单、分配及处置证据 |
| `cp_joining` | `joining` | 结构焊接及修整 | meter_and_issue_records | 工单及配置；合格台数；各行领用／退回数量及原始单位；成分／牌号；仪表读数；分配驱动量；废物去向；路线条件 | 逐原子行使用校准仪表、称量领退记录、供应商单据及废物联单。保留属性：质量用 kg，电表转 MJ，直接抽取地下水用 m3，实体计数成品轮胎用 Item(s)。由领退、物料清单／验收检查记录已装轮胎数量；另测轮胎质量仅用于物料核对。未实测密度及条件时，不将外购水质量转为体积。工序公用设施合计与工厂账单核对，部件和保留工作液包含情况与净质量记录核对。 | 各行分别 kg、MJ、m3、Item(s) | 每工单及每计量期 | 报告期内完整同配置批次；季节性或混线须披露 | 已声明工厂、外包及采购边界 | 各行可归属数量 / 同一配置的验收设备数量 | 校准、供应商组成、工单、分配及处置证据 |
| `cp_wet_surface` | `wet_surface` | 水基清洗及前处理 | meter_and_issue_records | 工单及配置；合格台数；各行领用／退回数量及原始单位；成分／牌号；仪表读数；分配驱动量；废物去向；路线条件 | 逐原子行使用校准仪表、称量领退记录、供应商单据及废物联单。保留属性：质量用 kg，电表转 MJ，直接抽取地下水用 m3，实体计数成品轮胎用 Item(s)。由领退、物料清单／验收检查记录已装轮胎数量；另测轮胎质量仅用于物料核对。未实测密度及条件时，不将外购水质量转为体积。工序公用设施合计与工厂账单核对，部件和保留工作液包含情况与净质量记录核对。 | 各行分别 kg、MJ、m3、Item(s) | 每工单及每计量期 | 报告期内完整同配置批次；季节性或混线须披露 | 已声明工厂、外包及采购边界 | 各行可归属数量 / 同一配置的验收设备数量 | 校准、供应商组成、工单、分配及处置证据 |
| `cp_powder_finish` | `powder_finish` | 粉末施加及固化 | meter_and_issue_records | 工单及配置；合格台数；各行领用／退回数量及原始单位；成分／牌号；仪表读数；分配驱动量；废物去向；路线条件 | 逐原子行使用校准仪表、称量领退记录、供应商单据及废物联单。保留属性：质量用 kg，电表转 MJ，直接抽取地下水用 m3，实体计数成品轮胎用 Item(s)。由领退、物料清单／验收检查记录已装轮胎数量；另测轮胎质量仅用于物料核对。未实测密度及条件时，不将外购水质量转为体积。工序公用设施合计与工厂账单核对，部件和保留工作液包含情况与净质量记录核对。 | 各行分别 kg、MJ、m3、Item(s) | 每工单及每计量期 | 报告期内完整同配置批次；季节性或混线须披露 | 已声明工厂、外包及采购边界 | 各行可归属数量 / 同一配置的验收设备数量 | 校准、供应商组成、工单、分配及处置证据 |
| `cp_assembly` | `assembly` | 配置球车装配 | meter_and_issue_records | 工单及配置；合格台数；各行领用／退回数量及原始单位；成分／牌号；仪表读数；分配驱动量；废物去向；路线条件 | 逐原子行使用校准仪表、称量领退记录、供应商单据及废物联单。保留属性：质量用 kg，电表转 MJ，直接抽取地下水用 m3，实体计数成品轮胎用 Item(s)。由领退、物料清单／验收检查记录已装轮胎数量；另测轮胎质量仅用于物料核对。未实测密度及条件时，不将外购水质量转为体积。工序公用设施合计与工厂账单核对，部件和保留工作液包含情况与净质量记录核对。 | 各行分别 kg、MJ、m3、Item(s) | 每工单及每计量期 | 报告期内完整同配置批次；季节性或混线须披露 | 已声明工厂、外包及采购边界 | 各行可归属数量 / 同一配置的验收设备数量 | 校准、供应商组成、工单、分配及处置证据 |
| `cp_acceptance` | `acceptance` | 工厂验收及净质量测定 | meter_and_issue_records | 工单及配置；合格台数；各行领用／退回数量及原始单位；成分／牌号；仪表读数；分配驱动量；废物去向；路线条件；电池供应商／化学组成／数量、起终荷电状态、实际充电器交流输入电表及车内／车外边界；行驶时长／距离及载荷；转向／制动／绝缘／泄漏准则及结果；补水保留；实际氢浓度／气流／时长、介质及转换条件 | 逐原子行使用校准仪表、称量领退记录、供应商单据及废物联单。保留属性：质量用 kg，电表转 MJ，直接抽取地下水用 m3，实体计数成品轮胎用 Item(s)。由领退、物料清单／验收检查记录已装轮胎数量；另测轮胎质量仅用于物料核对。未实测密度及条件时，不将外购水质量转为体积。工序公用设施合计与工厂账单核对，部件和保留工作液包含情况与净质量记录核对。 记录签字配置特定试验及实测能量／工作液；不将目录续航、电流、质量或速度变成制造因子。仅在实际释放时测量排放氢；不规定通用排放或推断气体转质量因子。 | 各行分别 kg、MJ、m3、Item(s) | 每工单及每计量期 | 报告期内完整同配置批次；季节性或混线须披露 | 已声明工厂、外包及采购边界 | 各行可归属数量 / 同一配置的验收设备数量 | 校准、供应商组成、工单、分配及处置证据 |
| `cp_packaging` | `packaging` | 工厂门交付防护 | meter_and_issue_records | 工单及配置；合格台数；各行领用／退回数量及原始单位；成分／牌号；仪表读数；分配驱动量；废物去向；路线条件 | 逐原子行使用校准仪表、称量领退记录、供应商单据及废物联单。保留属性：质量用 kg，电表转 MJ，直接抽取地下水用 m3，实体计数成品轮胎用 Item(s)。由领退、物料清单／验收检查记录已装轮胎数量；另测轮胎质量仅用于物料核对。未实测密度及条件时，不将外购水质量转为体积。工序公用设施合计与工厂账单核对，部件和保留工作液包含情况与净质量记录核对。 | 各行分别 kg、MJ、m3、Item(s) | 每工单及每计量期 | 报告期内完整同配置批次；季节性或混线须披露 | 已声明工厂、外包及采购边界 | 各行可归属数量 / 同一配置的验收设备数量 | 校准、供应商组成、工单、分配及处置证据 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

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
| `validate_reference` | reference | 拒绝限定信息缺失、乘员／载荷质量、电池排除质量或运输毛重替代、非正 M 或配置、cp_mass 与 finished_machine 不一致。要求 1 千克输出及各非参考适用行明确应用 normalize_mass。 |  |
| `validate_atomic` | inventory | 逐行要求一个物理交换、所填公开身份已核验、属性／单位正确、中文流名及介质相符。UUID 未解决不授权代理替代或混合行。 |  |
| `validate_balance` | coverage | 按实际物料清单核对安装质量、坯料、废物、保留工作液及采购零件；独立核对已装电池、底盘、驱动、车身及车轮／制动／悬架模块内容与实测物料质量；数量属性轮胎保留 Item(s)，单独实测轮胎质量仅用于实体平衡。核对电池水领用、保留、废物及实测充电排放，不设默认氢因子。逐阶段核对公用设施，内部转移抵消。结合记录的测量不确定度解释差异，不杜撰数值允差。 |  |
| `validate_completeness` | dataset | 逐条件阶段核对路线证据。声称清单完整前，须分列并采集缺失化学品、零件、试验介质及实际排放；上游或功能覆盖不完整时禁止摇篮到门或服务比较。 |  |
| `validate_allocation` | shared_operations | 要求完整驱动量记录及分配、废钢处理依据；其他可辩护分配可能改变结果时记录敏感性。 | `ghg-product-allocation-2011` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 配置明确完整合格整机的制造前景过程 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 作为配置一致、上游覆盖已披露的球车供应模型投入 |
| excluded_use | 客户充电、高尔夫活动或载客服务；未另做功能建模的跨电池／车架／制动配置性能比较 |
| required_metadata | 型号、配置、空载状态、M、保留工作液、制造商／场址、报告期间、工艺路线、电压／地区、供应商边界、运输／包装范围及分配 |
| required_quality_disclosure | 实测及估算数量；未解决身份；未测排放及部件；上游链接完整性；不确定度、数据年份及配置限制 |
| update_trigger | 电池化学组成／型号／数量／包边界、底盘或车身材质、马达／控制器／充电器、制动／悬架、已装附件、物料清单、工作液／清洗剂／涂层配方、采购部件、能源组合、验收或净质量协议变化 |

## 11. 数据源

| 来源编号 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `clubcar-tempo-2022` | handbook | Club Car, Tempo brochure GLF0003, copyright2022, imprint042822, PDF p.3 electric and lithium-ion specification columns, frame/steering/suspension/brakes and weight footnote; PDF p.2 optional equipment. https://storage.clubcar.com/-/media/project/milky-way/clubcar/clubcar-documents/pdf/literature/golf-fleet/golf-cars/tempo/glf0003-tempo-brochure---lr.pdf | 历史定性球车结构：铝车架、齿条齿轮转向、钢板弹簧悬架及电动车机械后鼓式制动。明确不适用于正式文件的目录近似整备质量不是 M。不推断制造强度、材质牌号、寿命、电池化学组成或通用工序。 |
| `ezgo-rxv-2024` | handbook | E-Z-GO/Textron, RXV spec sheet822013-G18, Rev.06/2024, copyright2024, PDF p.2 ELiTE and EX1-Gas columns, lithium/AC drive, seating, steering/suspension, service/parking brakes, welded powder-coated steel frame and injection-moulded TPO body; p.2 optional accessories. https://ezgo.txtsv.com/sites/default/files/2024-08/GOF-0524_RXV_SS_822013-G18.pdf | 历史定性电动变型及替代钢制／TPO 结构。电动列采用异步马达行车制动及电磁驻车制动；汽油鼓式制动列不套用于电动。不采用数值质量、容量、电流、功率、速度、质保、节能或工厂验收阈值。 |
| `ghg-product-allocation-2011` | official_guidance | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard2011, chapter9, printed p.63 / PDF p.65, tables9.1–9.2. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 仅采用历史分配层级；须有实际因果分配驱动量，不声称符合现行完整标准。 |
