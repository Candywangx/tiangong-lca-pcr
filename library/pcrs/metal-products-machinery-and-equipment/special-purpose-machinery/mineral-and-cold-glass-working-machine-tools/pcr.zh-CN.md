---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.mineral-and-cold-glass-working-machine-tools
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 矿物材料与玻璃机械冷加工机床制造

## 1. 范围与适用性

本 PCR 覆盖完整固定式机床制造，其以常规机械方式对石材、陶瓷、已硬化混凝土及类似矿物固体进行切割、钻削、铣削、磨削或磨边，或对平板玻璃进行冷加工。包含声明已装床身／机架、主轴及轴驱动、控制、防护、工件夹持及交付集成供水／真空系统。声明一种材料加工配置及其交付边界。排除现有 material PCR 覆盖的激光、水射流及其他非常规去除加工机床、金属加工机床、矿物破碎／混合工厂、玻璃熔融或热成形、手持工具、单售工具和部件、光学玻璃精加工及石棉水泥专用配置。此处证据不确定这些专门方法。安装、常规客户工件、用水、污泥、粉尘、工具更换、维护及寿命终结在机械制造外。实际实施且记录的工厂验收试验纳入。不包含加工服务或完整工厂生产线模型。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.mineral-and-cold-glass-working-machine-tools |
| classification_refs | CPC 3.0 44221；较窄类别背景，不是已接受映射 |
| covered_products | 配置明确矿物固体机械锯切及加工机；平板玻璃冷钻削、磨削及磨边机 |
| excluded_products | 非常规去除加工机床；金属加工机床；破碎工厂；热玻璃成形；光学或石棉专用配置；手持工具、单售工具及服务 |
| representative_product | 一台按指定工厂发运配置验收的完整固定式机器 |
| production_route | 接收坯料或成品铸件／机架模块；条件场内成形、连接及表面处理；运动／主轴／水路／控制集成；工厂验收 |
| market_state | 工厂交付边界新制验收空载机器；运输包装另计清单 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供声明常规矿物或平板玻璃冷加工机器 |
| How much | 以实测净质量 M 将同一完整合格配置明确机器归一化为 1 kg |
| How well | 符合声明图纸及配置特定验收规范。按适用情况记录轴对中／定位、主轴旋转／跳动、防护联锁、水路泄漏及真空保持。实施负载试验时声明试件材料、几何形状、工具及取样。采用实际制造商验收标准及量具；不规定通用精度、处理量或砂轮寿命。 |
| How long or cycle | 一次制造交付；不假定运行寿命或工件生产周期 |
| reference_flow_link | finished_machine |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 石、陶瓷、混凝土、石棉水泥或类似矿物材料加工用机械或玻璃冷加工机械 `0ff1d868-5d04-4e5e-9c92-0118f4e2172b` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号及序列号／批次；目标材料及机械冷加工操作；床身／机架及工作台；轴数和行程；主轴／驱动及电气类别；已装工具和耐磨件状态；控制和防护；夹持／真空／湿加工系统；供货与现场安装模块；空载清洁状态及保留交付工作液；实测 M；工厂／场址、期间、上游供应商边界及覆盖阶段 |

称量同一工厂交付配置，含声明已装工具及保留工作液，不含工件、废试验浆液或包装。目录运输质量不能替代 M。按千克结果不确定机器之间切割或磨边服务等价。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `energy_units` | 电力行 | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表单位；以精确定义 1 kWh = 3.6 MJ 转为 MJ。不将电力属性名称解释为燃烧清单。 |
| `volume_units` | 地下水行 | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 保留实测体积及条件；不得杜撰气体密度、水密度或热值进行质量／能量替换。 |
| `area_units` | `granite_coupon` | 面积 `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | 保留实测板材面积作为交换分子。净整机 M 仍为 kg；面积和质量不可互换，花岗岩试件质量另采集用于平衡。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 从已声明供应商边界接收材料及配置部件，前景不隐含上游炼钢或部件制造 |
| starting_condition_role | 完整合格整机制造投入边界 |
| product_classification_scope | CPC 44221 背景下矿物固体及玻璃常规机械冷加工机床 |
| recursive_input_rule | 购入完整机器作为投入时，作为单独声明的上游产品，不递归重建本类别；区分新制与翻修 |
| upstream_dataset_requirement | 连接与材料、成品部件边界、地区、电压及处理状态相符的投入特定上游数据集。缺失链接保留为覆盖缺口 |
| disclosure | 披露前景工厂阶段、外包工序、部件内容、来料运输覆盖、交付防护包装边界、资本设备政策及所有排除；未核验上游及物流闭合时不声称完整摇篮到门 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `manufacturing_gate` | foreground | 纳入从声明的接收投入到工厂验收之间所有实际工序及可归属返工；区分采购零件与场内制造以避免重复，使用已记录路线。 |  |
| `conditional_finish` | finishing | 仅启用有记录的涂装工序及化学配方。制造商示例证明可能路线，不是通用要求或配方。 |  |
| `exclude_customer_use` | customer_use | 将客户工件、运行用水、切割污泥、替换工具、安装、维护及报废排除在机械制造外。实际进行的工厂负载试验仍纳入。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `forming` | 坯料切割、成形及机加工 | conditional | 仅当场址制造这些零件；否则分列采购成品零件 | 前景制造 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| `joining` | 结构焊接及修整 | conditional | 仅当场址以焊接连接结构件 | 前景制造 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| `wet_surface` | 水基清洗及前处理 | conditional | 仅当实际进行水基清洗或转化处理；按已记录配方启用各行 | 前景制造 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| `powder_finish` | 粉末施加及固化 | conditional | 仅当实际采用粉末涂装；电力固化行仅用于实际电固化粉末 | 前景制造 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| `assembly` | 配置整机装配 | required | 每台完整验收整机；仅启用实际安装部件行 | 前景制造 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| `acceptance` | 工厂验收及净质量测定 | required | 每台完整验收整机 | 前景制造 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| `packaging` | 工厂门交付防护 | conditional | 仅当交付边界包含出货防护；否则披露排除 | 前景制造 | 每 1 kg 参考流；采集基准为每台验收成品机器 |

各工序记录是同一最终合格输出的独立贡献，不是七种独立交易参考产品。保留可追溯内部零件转移和物料清单记录；内部转移在前景内抵消，不重复承接上游负荷。以下卡片是明确受路线条件约束的交换。实际存在的每项其他零件、化学品、燃料、包装件、废水流或实测基本流物质须分别以独立身份行补充；缺少卡片不构成截断许可。外包涂装时，用精确采购服务或成品零件记录替代场内化学品及能耗，披露其覆盖。

### 过程：坯料切割、成形及机加工（`forming`）

#### 输入

##### 产品流

###### 热轧非合金钢板（`steel_sheet`）

仅纳入实际用于机架、护罩或水箱的板材。记录牌号、宽度、厚度及来料表面状态，称量领料并扣除未使用退料。该板材身份未解决，不得用合金与非合金说明矛盾的记录替代。

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

###### 灰铸铁床身铸件（`bed_casting`）

仅计入该配置实际接收的供应商床身铸件。记录牌号、消除应力及机加工状态、尺寸和质量；通用原生铸铁不确定完整铸件。场内机加工另计，不假定前景含铸造厂。

- 选定流: 灰铸铁床身铸件
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_forming。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_forming`

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

#### 输出

##### 废物流

###### 粉末涂装废弃物（`powder_residue`）

该身份仅用于中国厂内干过喷粉；其他地域须另核验身份。仅称量作为废物外送的收集干过喷粉；排除内部回用粉末。固体粉末与废水、液体底漆污泥分开。

- 选定流: 粉末涂装废弃物 `9aa53a82-5462-400e-9096-efab7718201f`
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

###### 液压油（`hydraulic_oil`）

仅用于与核验的蒸馏／加氢／精炼供货路线相符的实际成品液压油。记录牌号及基础油来源；采集新加注及未回收试验消耗，排除外购液压模块已含油量。

- 选定流: 液压油 `eafff56c-3487-4345-9f24-00429f61c556`
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

###### 完整机械加工主轴总成（`spindle`）

记录合格外购主轴、转速范围、冷却供水、轴承及驱动包含情况和实测质量。场内制造主轴部件另列；总成已含轴承或电机不重复计入。

- 选定流: 完整机械加工主轴总成
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`
- 来源: `breton-genya-configuration`

###### 电动机（`ac_motor`）

仅用于中国专用机械装配中与核验产品类别相符的已装外购交流电机。记录类型、额定参数、交付质量和所含零件；其他国家或直流配置须另核验身份。

- 选定流: 电动机 `eb4e9abb-abd4-4f75-84a8-638c4d845e85`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 电驱动伺服电机（`servo_motor`）

仅当中国装配采用与核验类别相符的外购无刷交流轴伺服。其他地域或直流驱动须另核验身份。记录电气类型、转矩、编码器及实测质量；不替用完整变桨驱动或其他机器特定伺服件。

- 选定流: 电驱动伺服电机 `89a4fdf2-5cce-4df3-b372-14407f92dd28`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`
- 来源: `breton-genya-configuration`

###### 淬硬钢制直线导轨（`guide_rail`）

仅记录该已装导轨坯料或成品，声明牌号、热处理、长度及质量。滑块另行识别；齿条不是导轨。

- 选定流: 淬硬钢制直线导轨
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 完整钢制滚珠丝杠螺母总成（`ball_screw`）

仅用于实际滚珠丝杠定位路线。记录导程、螺母包含情况、精度等级及质量；普通钢螺钉或紧固件不确定运动总成。齿条齿轮系统须有具体独立行。

- 选定流: 完整钢制滚珠丝杠螺母总成
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 机床 CNC 控制柜（`cnc_unit`）

仅当作为一个完整外购控制柜交付，声明控制器、驱动器及接线内容。记录质量；裸电子单元不是已接线柜。分列驱动电机数量，不重复计入所含接线或驱动器。

- 选定流: 机床 CNC 控制柜
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`
- 来源: `breton-genya-configuration`

###### 泵（`water_pump`）

仅当交付湿加工配置含该完整水泵。记录叶轮、壳体、电机包含情况、交付状态及质量；不由额定参数推定运行耗水。

- 选定流: 泵 `bbd91be4-dc00-44c2-8bc1-f67ee79174a7`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 工件夹持用完整真空泵（`vacuum_pump`）

仅当随声明吸附夹持系统交付。记录泵技术、驱动及工作液包含情况和质量；真空服务或制冷压缩机不能替代该产品。

- 选定流: 工件夹持用完整真空泵
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`
- 来源: `breton-genya-configuration`

###### 硫化橡胶真空吸盘（`vacuum_pad`）

仅计入实际安装用于板材夹持的吸盘。记录橡胶配方、接触尺寸及质量；区分吸盘与独立真空发生装置及外购集成夹具。

- 选定流: 硫化橡胶真空吸盘
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`
- 来源: `breton-genya-configuration`

###### 钢基体分节式金刚石圆锯片（`diamond_blade`）

仅计入工厂交付机器已装且包含的锯片，声明实际直径、节块结合剂及实测质量。可测工厂试验磨耗另记；排除客户备片及运行更换率。金刚石绳锯是不同物理工具。

- 选定流: 钢基体分节式金刚石圆锯片
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`
- 来源: `breton-genya-configuration`

###### 玻璃磨边用金刚石结合剂杯形砂轮（`diamond_wheel`）

仅计入已装交付、结合剂及几何形状已声明的杯形砂轮。记录质量和工具位置；不预设普通散磨料或金属精加工砂轮等价。包含抛光轮时按具体结合剂另列。

- 选定流: 玻璃磨边用金刚石结合剂杯形砂轮
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`
- 来源: `bavelloni-ve-configuration`

###### 胶合板台面条（`plywood_top`）

仅当实际台面为胶合板，而不是替代复合塑料。记录单板树种、胶配方、尺寸及实测质量；厚度限定的单板不确定胶合板。

- 选定流: 胶合板台面条
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`
- 来源: `breton-genya-configuration`

###### 热浸镀锌已制造钢制工作台架（`galvanized_frame`）

仅当作为该完整处理台架购入。记录钢材内容、镀层状态及质量；镀锌工艺名称不是已识别台架。不在场内前景重复计入其坯料、焊丝或镀锌化学品。场内制造台架外包处理时，另列规格明确的镀锌服务。

- 选定流: 热浸镀锌已制造钢制工作台架
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`
- 来源: `breton-genya-configuration`

###### 淬硬钢制轴驱动齿条（`axis_rack`）

仅用于实际齿条齿轮轴驱动；记录牌号、齿距、交付状态、长度及质量。不与直线导轨合并。

- 选定流: 淬硬钢制轴驱动齿条
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`
- 来源: `breton-genya-configuration`

###### 淬硬钢制轴驱动小齿轮（`axis_pinion`）

仅计入与齿条匹配的已装小齿轮；记录齿形、热处理和质量。外购驱动总成已含小齿轮不重复计入。

- 选定流: 淬硬钢制轴驱动小齿轮
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`
- 来源: `breton-genya-configuration`

### 过程：工厂验收及净质量测定（`acceptance`）

#### 输入

##### 产品流

###### 交流电（`test_electricity`）

按适用情况计量工厂轴运动、主轴跳动、防护／联锁、水路泄漏及真空夹持检查，声明试验设备及时间。负载切割或磨边试验为条件工厂活动；实际试件、水及废物分列清单。排除客户生产。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_acceptance`

###### 浮法玻璃及表面经研磨或抛光的平板玻璃（`glass_coupon`）

仅用于实际工厂试验中采用该核验产品类别的成品未镀膜退火钠钙浮法玻璃板。记录组成、厚度、领料质量及可回用退料；夹层玻璃、镀膜玻璃及客户生产投入不同。

- 选定流: 浮法玻璃及表面经研磨或抛光的平板玻璃 `1b43024e-16ea-42d2-830d-329c4a2abc3d`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_acceptance`

###### 花岗岩板材产品（`granite_coupon`）

仅用于工厂试验采用已切割、打磨及抛光、交付状态与核验一致的天然建筑花岗岩板。按标识长宽及领退量采集消耗面积 m2，记录厚度及表面状态。另采集质量用于物料平衡；不预设密度或面积转质量系数。其他原石或表面状态须另核验身份。

- 选定流: 花岗岩板材产品 `d85d190e-3c45-46ab-98bb-a3a2c0db4441`
- 流属性/单位: 净热值 `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_acceptance`

###### 工艺用水（`trial_water`）

仅计入工厂湿试验消耗的已处理外购水。测量供货质量、回收及保留状态；循环水不重复计数。同一供水商取水不是场内资源投入。

- 选定流: 工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_acceptance`

#### 输出

##### 产品流

###### 石、陶瓷、混凝土、石棉水泥或类似矿物材料加工用机械或玻璃冷加工机械（`finished_machine`）

一千克归一化同一完整合格配置明确整机。包含床身／机架、已装运动及主轴驱动、控制、防护、交付集成供水／真空单元、声明已装工具及保留交付工作液。工作台清空，移除试件、浆液、散装替换工具及运输包装。记录工厂发运与现场安装护罩差异，不虚构已全部现场安装的交付状态。

- 选定流: 石、陶瓷、混凝土、石棉水泥或类似矿物材料加工用机械或玻璃冷加工机械 `0ff1d868-5d04-4e5e-9c92-0118f4e2172b`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 1 千克
- 数值来源模式: `fixed_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_mass`

##### 废物流

###### 废钠钙玻璃加工水基浆液（`glass_slurry`）

仅计入分流湿玻璃试验浆液转移处理。测量湿质量、固含量、组成及去向；干玻璃碎料及石料浆液分开。这是废物转移，不是基本流排水。

- 选定流: 废钠钙玻璃加工水基浆液
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_acceptance`

###### 干钠钙玻璃试验边角料（`glass_cullet`）

仅计入实际出厂干态分流玻璃试验边角料。称量质量并声明镀层／污染；排除内部回用试件及湿浆液。

- 选定流: 干钠钙玻璃试验边角料
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_acceptance`

###### 干花岗岩试验边角料（`granite_offcut`）

仅计入离开边界的实际干态分流花岗岩试验边角料；称量并声明石材身份。产生湿石料污泥时另设组成明确行。

- 选定流: 干花岗岩试验边角料
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
| `cp_forming` | `forming` | 坯料切割、成形及机加工 | meter_and_issue_records | 工单及配置；合格台数；各行领用／退回数量及原始单位；成分／牌号；仪表读数；分配驱动量；废物去向；路线条件 | 逐原子行使用校准仪表、称量领退记录、供应商单据及废物联单。保留属性：质量用 kg，电表转 MJ，直接抽取地下水用 m3；花岗岩试件面积实测为 m2。未实测密度及条件时，不将外购水质量转为体积。工序公用设施合计与工厂账单核对，部件和保留工作液包含情况与净质量记录核对。 | 各行分别 kg、MJ、m3、m2 | 每工单及每计量期 | 报告期内完整同配置批次；季节性或混线须披露 | 已声明工厂、外包及采购边界 | 各行可归属数量 / 同一配置的验收机器数量 | 校准、供应商组成、工单、分配及处置证据 |
| `cp_joining` | `joining` | 结构焊接及修整 | meter_and_issue_records | 工单及配置；合格台数；各行领用／退回数量及原始单位；成分／牌号；仪表读数；分配驱动量；废物去向；路线条件 | 逐原子行使用校准仪表、称量领退记录、供应商单据及废物联单。保留属性：质量用 kg，电表转 MJ，直接抽取地下水用 m3；花岗岩试件面积实测为 m2。未实测密度及条件时，不将外购水质量转为体积。工序公用设施合计与工厂账单核对，部件和保留工作液包含情况与净质量记录核对。 | 各行分别 kg、MJ、m3、m2 | 每工单及每计量期 | 报告期内完整同配置批次；季节性或混线须披露 | 已声明工厂、外包及采购边界 | 各行可归属数量 / 同一配置的验收机器数量 | 校准、供应商组成、工单、分配及处置证据 |
| `cp_wet_surface` | `wet_surface` | 水基清洗及前处理 | meter_and_issue_records | 工单及配置；合格台数；各行领用／退回数量及原始单位；成分／牌号；仪表读数；分配驱动量；废物去向；路线条件 | 逐原子行使用校准仪表、称量领退记录、供应商单据及废物联单。保留属性：质量用 kg，电表转 MJ，直接抽取地下水用 m3；花岗岩试件面积实测为 m2。未实测密度及条件时，不将外购水质量转为体积。工序公用设施合计与工厂账单核对，部件和保留工作液包含情况与净质量记录核对。 | 各行分别 kg、MJ、m3、m2 | 每工单及每计量期 | 报告期内完整同配置批次；季节性或混线须披露 | 已声明工厂、外包及采购边界 | 各行可归属数量 / 同一配置的验收机器数量 | 校准、供应商组成、工单、分配及处置证据 |
| `cp_powder_finish` | `powder_finish` | 粉末施加及固化 | meter_and_issue_records | 工单及配置；合格台数；各行领用／退回数量及原始单位；成分／牌号；仪表读数；分配驱动量；废物去向；路线条件 | 逐原子行使用校准仪表、称量领退记录、供应商单据及废物联单。保留属性：质量用 kg，电表转 MJ，直接抽取地下水用 m3；花岗岩试件面积实测为 m2。未实测密度及条件时，不将外购水质量转为体积。工序公用设施合计与工厂账单核对，部件和保留工作液包含情况与净质量记录核对。 | 各行分别 kg、MJ、m3、m2 | 每工单及每计量期 | 报告期内完整同配置批次；季节性或混线须披露 | 已声明工厂、外包及采购边界 | 各行可归属数量 / 同一配置的验收机器数量 | 校准、供应商组成、工单、分配及处置证据 |
| `cp_assembly` | `assembly` | 配置整机装配 | meter_and_issue_records | 工单及配置；合格台数；各行领用／退回数量及原始单位；成分／牌号；仪表读数；分配驱动量；废物去向；路线条件 | 逐原子行使用校准仪表、称量领退记录、供应商单据及废物联单。保留属性：质量用 kg，电表转 MJ，直接抽取地下水用 m3；花岗岩试件面积实测为 m2。未实测密度及条件时，不将外购水质量转为体积。工序公用设施合计与工厂账单核对，部件和保留工作液包含情况与净质量记录核对。 | 各行分别 kg、MJ、m3、m2 | 每工单及每计量期 | 报告期内完整同配置批次；季节性或混线须披露 | 已声明工厂、外包及采购边界 | 各行可归属数量 / 同一配置的验收机器数量 | 校准、供应商组成、工单、分配及处置证据 |
| `cp_acceptance` | `acceptance` | 工厂验收及净质量测定 | meter_and_issue_records | 工单及配置；合格台数；各行领用／退回数量及原始单位；成分／牌号；仪表读数；分配驱动量；废物去向；路线条件 | 逐原子行使用校准仪表、称量领退记录、供应商单据及废物联单。保留属性：质量用 kg，电表转 MJ，直接抽取地下水用 m3；花岗岩试件面积实测为 m2。未实测密度及条件时，不将外购水质量转为体积。工序公用设施合计与工厂账单核对，部件和保留工作液包含情况与净质量记录核对。 | 各行分别 kg、MJ、m3、m2 | 每工单及每计量期 | 报告期内完整同配置批次；季节性或混线须披露 | 已声明工厂、外包及采购边界 | 各行可归属数量 / 同一配置的验收机器数量 | 校准、供应商组成、工单、分配及处置证据 |
| `cp_packaging` | `packaging` | 工厂门交付防护 | meter_and_issue_records | 工单及配置；合格台数；各行领用／退回数量及原始单位；成分／牌号；仪表读数；分配驱动量；废物去向；路线条件 | 逐原子行使用校准仪表、称量领退记录、供应商单据及废物联单。保留属性：质量用 kg，电表转 MJ，直接抽取地下水用 m3；花岗岩试件面积实测为 m2。未实测密度及条件时，不将外购水质量转为体积。工序公用设施合计与工厂账单核对，部件和保留工作液包含情况与净质量记录核对。 | 各行分别 kg、MJ、m3、m2 | 每工单及每计量期 | 报告期内完整同配置批次；季节性或混线须披露 | 已声明工厂、外包及采购边界 | 各行可归属数量 / 同一配置的验收机器数量 | 校准、供应商组成、工单、分配及处置证据 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
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
| `validate_balance` | coverage | 按实际物料清单核对安装质量、坯料、废物、保留工作液及采购零件；核对声明已装工具和台面内容。逐阶段核对公用设施，内部转移抵消。结合记录的测量不确定度解释差异，不杜撰数值允差。 |  |
| `validate_completeness` | dataset | 逐条件阶段核对路线证据。声称清单完整前，须分列并采集缺失化学品、零件、试验介质及实际排放；上游或功能覆盖不完整时禁止摇篮到门或服务比较。 |  |
| `validate_allocation` | shared_operations | 要求完整驱动量记录及分配、废钢处理依据；其他可辩护分配可能改变结果时记录敏感性。 | `ghg-product-allocation-2011` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 配置明确完整合格整机的制造前景过程 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 作为配置一致、上游覆盖已披露的机械供应模型投入 |
| excluded_use | 客户石材／玻璃加工服务、成品工件质量或全寿命工具性能；未补充功能建模的不同加工配置比较 |
| required_metadata | 型号、配置、空载状态、M、保留工作液、制造商／场址、报告期间、工艺路线、电压／地区、供应商边界、运输／包装范围及分配 |
| required_quality_disclosure | 实测及估算数量；未解决身份；未测排放及部件；上游链接完整性；不确定度、数据年份及配置限制 |
| update_trigger | 机构、容积、物料清单、涂装化学组成、供货部件、能源组合、验收规格或质量协议变化 |

## 11. 数据源

| 来源编号 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `breton-genya-configuration` | handbook | Breton, Genya official product page, Technological highlights: delivery fully assembled; work table; bridge and spindle; vacuum cups. https://breton.it/en_eu/products/machines-and-lines/breton-genya | 仅支持型号配置；不采用通用强制工厂路线、制造强度、目录质量或寿命。 |
| `bavelloni-ve-configuration` | handbook | Bavelloni, VE Series straight-line edging machines, undated retained brochure with 2015 PDF creation metadata, PDF p.11 / printed p.11, VE SERIES 11 and Tools Configuration. https://www.bavelloni.com/wp-content/uploads/2016/03/VERTICAL-EDGERS-VE-SERIES-ITA-ENG.pdf | 仅支持历史／型号特定浮法或夹层玻璃磨边、砂轮和输送配置；不规定通用厚度阈值、工厂能耗或寿命。 |
| `ghg-product-allocation-2011` | official_guidance | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), chapter9, printed p.63 / PDF p.65, tables9.1–9.2. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 仅支持历史分配层级；不声称符合现行完整标准。 |
