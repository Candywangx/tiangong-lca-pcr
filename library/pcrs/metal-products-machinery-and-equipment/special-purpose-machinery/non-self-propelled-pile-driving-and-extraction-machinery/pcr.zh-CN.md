---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.non-self-propelled-pile-driving-and-extraction-machinery
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 起重机悬吊式液压振动打桩与拔桩机械制造

## 1. 范围和适用性

本 PCR 覆盖完整起重机悬吊式、由外部液压供能的振动打桩／拔桩机头制造。固定／可变偏心机构及实际夹具、软管和抑振配置分别建模。包含交付振动箱体、偏心件／齿轮／轴系统、液压马达、轴承系统、悬吊／抑振结构，以及指定已装夹桩器和交付软管组。参考产品是完整配置机头，不是独立备件机头或整套起重机／动力站系统。排除单卖备件、起重机／挖掘机制造、外置动力站制造、柴油冲击锤、液压冲击锤、挖掘机安装式附件、自行式打桩机、除雪机械及其他土壤／矿石机械。范围窄于 CPC 44430。施工打桩／拔桩、土料和桩材、贯入率、客户场址振动／噪声、施工燃料、维护及报废均不属于制造。工厂验收试验及实际可归属公用设施、工作液、废物和排放仍在范围内。不包含打桩服务或假定寿命。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.non-self-propelled-pile-driving-and-extraction-machinery |
| classification_refs | CPC 3.0 44430；较窄类别背景，不是已接受映射 |
| covered_products | 完整配置起重机悬吊式液压振动打桩／拔桩机头 |
| excluded_products | 载体和外置动力站、备件、冲击锤、挖掘机安装机头、自行式设备及其他 CPC44430 机械 |
| representative_product | 一台验收合格完整配置悬吊机头，声明夹具／软管／保留工作液包含情况 |
| production_route | 接收钢材或成品模块；实际箱体／框架制造和连接；条件性表面处理；偏心件／齿轮／轴承、液压及抑振／夹具装配；工厂试验 |
| market_state | 工厂门新制完整合格配置机器；不附桩材、载体或动力站；防护包装另计 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 功能 | 提供声明的悬吊式液压振动打桩／拔桩机器 |
| 数量 | 采用实测净质量 M 表示同一完整合格配置机器的 1 kg |
| 质量要求 | 符合实际图纸及工厂验收规范。按适用情况记录偏心同步及平衡、轴承润滑、液压泄漏和夹持保持检查、抑振／悬吊装配检查及控制／联锁检查。采用声明试验载荷、压力、时长及校准仪表。目录偏心矩、频率、力、振幅及拔力是配置数据，不是默认工厂验收限值或制造用量。 |
| 时间或周期 | 一次制造交付；不假定运行寿命或施工打桩循环 |
| reference_flow_link | finished_machine |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 打桩机和拨桩机，铲雪机和清雪机，其他用于土壤、矿物或矿石的非机动移动、平土、平整、铲运、开挖、捣固、夯实、开采或钻孔的机械，未另列明的用于公共工程、建筑或类似用途的机械 `4db9a5e3-c264-4b56-baab-4c6bf19612fe` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号／序列号或批次；外部液压供能悬吊配置；偏心件／齿轮布局；马达／轴承／抑振／悬吊；夹具类型／数量及软管长度／包含情况；控制手柄边界；洁净无载荷状态；保留油／润滑脂状态；实测 M；制造商／场址及期间；采购边界；试验公用设施来源及实际条件；覆盖工序 |

使用校准秤称量准确验收交付配置。目录动态质量、不含夹具／软管的总质量、悬吊质量及含动力站系统质量是不同基准，不能替代 M。一千克归一化不声明不同桩／土壤条件或振动锤配置的功能等效。

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
| product_classification_scope | CPC 44430 背景下起重机悬吊式液压振动打桩／拔桩机头 |
| recursive_input_rule | 购入完整机器作为投入时，作为单独声明的上游产品，不递归重建本类别；区分新制与翻修 |
| upstream_dataset_requirement | 连接与材料、成品部件边界、地区、电压及处理状态相符的投入特定上游数据集。缺失链接保留为覆盖缺口 |
| disclosure | 披露前景工厂阶段、外包工序、部件内容、来料运输覆盖、交付防护包装边界、资本设备政策及所有排除；未核验上游及物流闭合时不声称完整摇篮到门 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `manufacturing_gate` | foreground | 纳入从声明的接收投入到工厂验收之间所有实际工序及可归属返工；区分采购零件与场内制造以避免重复，使用已记录路线。 |  |
| `conditional_finish` | finishing | 仅启用有记录的涂装工序及化学配方。制造商示例证明可能路线，不是通用要求或配方。 |  |
| `exclude_piling_site` | piling_use | 将土料和桩材、施工打桩／拔桩、施工燃料／噪声／振动及维护／报废排除在制造外。纳入实际工厂试验及实测释放；不包含打桩服务。 |  |

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

仅纳入实际用于振动箱体或抑振框架的板材。记录牌号、宽度、厚度及来料表面状态，称量领料并扣除未使用退料。该板材身份未解决，不得用合金与非合金说明矛盾的记录替代。

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

仅用于与该身份相符、有记录的全位置单道自保护药芯碳钢焊接。用焊丝盘领退量称量消耗；其他焊接耗材另行识别，不替换到本行。

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

###### 钢制径向滚珠轴承（`roller_bearing`）

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

###### 成品钢制振动箱壳体（`vibration_case`）

一个交付空箱壳，不含内部齿轮、轴、轴承或马达。记录钢材牌号、机加工／涂层状态及质量。若在场内制造，以坯料和实际工序替代此采购投入。

- 选定流: 成品钢制振动箱壳体
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 成品钢制偏心块（`eccentric`）

识别单个成品偏心块、牌号、机加工／热处理状态及质量；实际配对数量另列物料清单。完整转子模块不得重复计入内部偏心块。制造商钢制／加工说明不规定合金或热处理。

- 选定流: 成品钢制偏心块
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`
- 来源: `bruce-vibratory-hammer`

###### 成品钢制偏心同步齿轮（`sync_gear`）

单个成品齿轮，供应商确认牌号、齿形及交付处理。记录实测质量及同步布局；排除已包含在采购完整齿轮箱内的齿轮。

- 选定流: 成品钢制偏心同步齿轮
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`
- 来源: `bruce-vibratory-hammer`

###### 成品钢制偏心传动轴（`drive_shaft`）

记录单根轴几何形状、钢材牌号、交付加工／处理及质量。外购偏心轴模块须有自身单一实体身份，不重复计入此轴。

- 选定流: 成品钢制偏心传动轴
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`
- 来源: `bruce-vibratory-hammer`

###### 完整液压旋转驱动马达（`hydraulic_motor`）

一个完整交付液压驱动马达；记录排量、所含壳体／接头及质量。区别于电动机和线性液压缸。

- 选定流: 完整液压旋转驱动马达
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`
- 来源: `bruce-vibratory-hammer`

###### 完整钢制液压夹桩器总成（`pile_clamp`）

记录实际安装夹具类型、夹爪布局、所含油缸／阀及质量。完整夹具包含其交付油缸，不重复计入油缸。管桩／通用夹具的不同配置分别建模。

- 选定流: 完整钢制液压夹桩器总成
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`
- 来源: `bruce-vibratory-hammer`

###### 完整液压夹桩油缸（`clamp_cylinder`）

仅用于单独供货装入尚未按完整夹具计入的油缸。记录缸径／行程、密封及止回阀包含情况和质量；机加工缸筒不是完整油缸。

- 选定流: 完整液压夹桩油缸
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`
- 来源: `bruce-vibratory-hammer`

###### 成品橡胶隔振元件（`elastomer`）

单个成品隔振件，供应商确认橡胶配方、金属嵌件包含情况及实测质量；不假定天然／合成聚合物。记录实际数量和布局。废橡胶不是采购隔振件。

- 选定流: 成品橡胶隔振元件
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`
- 来源: `bruce-vibratory-hammer`

###### 成品钢制抑振框架（`suppressor_frame`）

记录裸框架、钢材牌号、连接接口及交付状态。排除已独立计入的弹性件、吊接件和振动箱体。场内制造框架改用其坯料及工序记录。

- 选定流: 成品钢制抑振框架
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 成品钢制悬吊连接件（`lifting_eye`）

单个交付吊接件，记录图纸、牌号和实际质量。交付外吊索／起重机附件排除。追溯实际验收检验，不施加杜撰载荷系数。

- 选定流: 成品钢制悬吊连接件
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 成品钢丝增强橡胶液压软管总成（`hose`）

单根配置软管，记录实际长度、橡胶配方、增强层及接头包含情况。仅计交付软管，其保留工作液状态计入 M；交付外动力站软管排除。

- 选定流: 成品钢丝增强橡胶液压软管总成
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 完整液压分配阀块（`manifold`）

识别单个成品配置分配阀块，记录实际阀／接头包含情况及质量；不重复计完整夹具／马达已含阀件。

- 选定流: 完整液压分配阀块
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 完整振动锤远程控制手柄（`pendant`）

仅当交付边界包含此成品控制器，声明电缆／接头并实测质量；不假定外置动力站控制器属于机头。

- 选定流: 完整振动锤远程控制手柄
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`
- 来源: `bruce-vibratory-hammer`

###### 成品齿轮润滑油，声明供应商牌号（`gear_oil`）

仅计实际使用、符合供应商配方的齿轮／轴承润滑油。称量新油领用扣未用退回，并区分消耗和交付保留油；基础油或液压油不识别此成品润滑剂。若使用润滑脂，须独立配方特定行。

- 选定流: 成品齿轮润滑油，声明供应商牌号
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

### 过程：工厂验收及净质量测定（`acceptance`）

#### 输入

##### 产品流

###### 交流电（`test_electricity`）

计量电驱液压试验台及实际夹持保持／泄漏、马达／齿轮同步、平衡、抑振及控制检查。记录载荷、油压／流量／温度、时长及返工。工厂试验台供能为可归属设备使用，不是外置动力站制造。柴油工厂试验台声称完整前须另列燃料和实测排放；不计施工能耗。

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

###### 打桩机和拨桩机，铲雪机和清雪机，其他用于土壤、矿物或矿石的非机动移动、平土、平整、铲运、开挖、捣固、夯实、开采或钻孔的机械，未另列明的用于公共工程、建筑或类似用途的机械（`finished_machine`）

一千克归一化同一完整合格配置液压悬吊机头。包含交付箱体、偏心驱动、轴承、马达、抑振／悬吊、指定已装夹具、软管和控制器以及声明保留工作液。排除桩／试验夹具、起重机、外置动力站、散装附件和运输包装。记录总成／模块包含情况，不重复计内部件。

- 选定流: 打桩机和拨桩机，铲雪机和清雪机，其他用于土壤、矿物或矿石的非机动移动、平土、平整、铲运、开挖、捣固、夯实、开采或钻孔的机械，未另列明的用于公共工程、建筑或类似用途的机械 `4db9a5e3-c264-4b56-baab-4c6bf19612fe`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 1 千克
- 数值来源模式: `fixed_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_mass`

##### 废物流

###### 工厂试验废矿物液压油（`test_oil_waste`）

仅计工厂试验系统外送废物的分流废矿物液压油。称量并表征水、固体及废物去向；回用／保留油不是外送废物。其他废工作液分行。

- 选定流: 工厂试验废矿物液压油
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
| `cp_forming` | `forming` | 坯料切割、成形及机加工 | meter_and_issue_records | 工单及配置；合格台数；各行领用／退回数量及原始单位；成分／牌号；仪表读数；分配驱动量；废物去向；路线条件 | 逐原子行使用校准仪表、称量领退记录、供应商单据及废物联单。保留属性：质量用 kg，电表转 MJ，直接抽取地下水用 m3。未实测密度及条件时，不将外购水质量转为体积。工序公用设施合计与工厂账单核对，部件和保留工作液包含情况与净质量记录核对。 | 各行分别 kg、MJ、m3、Item(s) | 每工单及每计量期 | 报告期内完整同配置批次；季节性或混线须披露 | 已声明工厂、外包及采购边界 | 各行可归属数量 / 同一配置的验收机器数量 | 校准、供应商组成、工单、分配及处置证据 |
| `cp_joining` | `joining` | 结构焊接及修整 | meter_and_issue_records | 工单及配置；合格台数；各行领用／退回数量及原始单位；成分／牌号；仪表读数；分配驱动量；废物去向；路线条件 | 逐原子行使用校准仪表、称量领退记录、供应商单据及废物联单。保留属性：质量用 kg，电表转 MJ，直接抽取地下水用 m3。未实测密度及条件时，不将外购水质量转为体积。工序公用设施合计与工厂账单核对，部件和保留工作液包含情况与净质量记录核对。 | 各行分别 kg、MJ、m3、Item(s) | 每工单及每计量期 | 报告期内完整同配置批次；季节性或混线须披露 | 已声明工厂、外包及采购边界 | 各行可归属数量 / 同一配置的验收机器数量 | 校准、供应商组成、工单、分配及处置证据 |
| `cp_wet_surface` | `wet_surface` | 水基清洗及前处理 | meter_and_issue_records | 工单及配置；合格台数；各行领用／退回数量及原始单位；成分／牌号；仪表读数；分配驱动量；废物去向；路线条件 | 逐原子行使用校准仪表、称量领退记录、供应商单据及废物联单。保留属性：质量用 kg，电表转 MJ，直接抽取地下水用 m3。未实测密度及条件时，不将外购水质量转为体积。工序公用设施合计与工厂账单核对，部件和保留工作液包含情况与净质量记录核对。 | 各行分别 kg、MJ、m3、Item(s) | 每工单及每计量期 | 报告期内完整同配置批次；季节性或混线须披露 | 已声明工厂、外包及采购边界 | 各行可归属数量 / 同一配置的验收机器数量 | 校准、供应商组成、工单、分配及处置证据 |
| `cp_powder_finish` | `powder_finish` | 粉末施加及固化 | meter_and_issue_records | 工单及配置；合格台数；各行领用／退回数量及原始单位；成分／牌号；仪表读数；分配驱动量；废物去向；路线条件 | 逐原子行使用校准仪表、称量领退记录、供应商单据及废物联单。保留属性：质量用 kg，电表转 MJ，直接抽取地下水用 m3。未实测密度及条件时，不将外购水质量转为体积。工序公用设施合计与工厂账单核对，部件和保留工作液包含情况与净质量记录核对。 | 各行分别 kg、MJ、m3、Item(s) | 每工单及每计量期 | 报告期内完整同配置批次；季节性或混线须披露 | 已声明工厂、外包及采购边界 | 各行可归属数量 / 同一配置的验收机器数量 | 校准、供应商组成、工单、分配及处置证据 |
| `cp_assembly` | `assembly` | 配置整机装配 | meter_and_issue_records | 工单及配置；合格台数；各行领用／退回数量及原始单位；成分／牌号；仪表读数；分配驱动量；废物去向；路线条件 | 逐原子行使用校准仪表、称量领退记录、供应商单据及废物联单。保留属性：质量用 kg，电表转 MJ，直接抽取地下水用 m3。未实测密度及条件时，不将外购水质量转为体积。工序公用设施合计与工厂账单核对，部件和保留工作液包含情况与净质量记录核对。 | 各行分别 kg、MJ、m3、Item(s) | 每工单及每计量期 | 报告期内完整同配置批次；季节性或混线须披露 | 已声明工厂、外包及采购边界 | 各行可归属数量 / 同一配置的验收机器数量 | 校准、供应商组成、工单、分配及处置证据 |
| `cp_acceptance` | `acceptance` | 工厂验收及净质量测定 | meter_and_issue_records | 工单及配置；合格台数；各行领用／退回数量及原始单位；成分／牌号；仪表读数；分配驱动量；废物去向；路线条件；试验夹具排除在 M 外；电力／柴油试验台供能来源；试验载荷和时长；液压压力、流量和温度；夹持保持及泄漏；偏心同步／平衡；抑振／悬吊和控制检查；润滑剂领用／退回／回收及保留工作液状态 | 逐原子行使用校准仪表、称量领退记录、供应商单据及废物联单。保留属性：质量用 kg，电表转 MJ，直接抽取地下水用 m3。未实测密度及条件时，不将外购水质量转为体积。工序公用设施合计与工厂账单核对，部件和保留工作液包含情况与净质量记录核对。 按已记录运行／时长／载荷及实测总量追踪共用液压台能耗；抵消循环油内部转移，新供油和废油各计一次。保留配置特定签字验收结果；不推定施工性能或通用数值试验限值。 | 各行分别 kg、MJ、m3、Item(s) | 每工单及每计量期 | 报告期内完整同配置批次；季节性或混线须披露 | 已声明工厂、外包及采购边界 | 各行可归属数量 / 同一配置的验收机器数量 | 校准、供应商组成、工单、分配及处置证据 |
| `cp_packaging` | `packaging` | 工厂门交付防护 | meter_and_issue_records | 工单及配置；合格台数；各行领用／退回数量及原始单位；成分／牌号；仪表读数；分配驱动量；废物去向；路线条件 | 逐原子行使用校准仪表、称量领退记录、供应商单据及废物联单。保留属性：质量用 kg，电表转 MJ，直接抽取地下水用 m3。未实测密度及条件时，不将外购水质量转为体积。工序公用设施合计与工厂账单核对，部件和保留工作液包含情况与净质量记录核对。 | 各行分别 kg、MJ、m3、Item(s) | 每工单及每计量期 | 报告期内完整同配置批次；季节性或混线须披露 | 已声明工厂、外包及采购边界 | 各行可归属数量 / 同一配置的验收机器数量 | 校准、供应商组成、工单、分配及处置证据 |

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
| `validate_balance` | coverage | 按实际物料清单核对安装质量、坯料、废物、保留工作液及采购零件；独立核对夹具／软管配置。逐阶段核对公用设施，内部转移抵消。结合记录的测量不确定度解释差异，不杜撰数值允差。 |  |
| `validate_completeness` | dataset | 逐条件阶段核对路线证据。声称清单完整前，须分列并采集缺失化学品、零件、试验介质及实际排放；上游或功能覆盖不完整时禁止摇篮到门或服务比较。 |  |
| `validate_allocation` | shared_operations | 要求完整驱动量记录及分配、废钢处理依据；其他可辩护分配可能改变结果时记录敏感性。 | `ghg-product-allocation-2011` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 配置明确完整合格整机的制造前景过程 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 作为配置一致、上游覆盖已披露的机械供应模型投入 |
| excluded_use | 施工打桩／拔桩服务、施工振动／噪声，或未另做功能建模的跨桩／土壤及机头配置全生命周期比较 |
| required_metadata | 型号、配置、空载状态、M、保留工作液、制造商／场址、报告期间、工艺路线、电压／地区、供应商边界、运输／包装范围及分配 |
| required_quality_disclosure | 实测及估算数量；未解决身份；未测排放及部件；上游链接完整性；不确定度、数据年份及配置限制 |
| update_trigger | 机构、容积、物料清单、涂装化学组成、供货部件、能源组合、验收规格或质量协议变化 |

## 11. 数据源

| 来源编号 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `bruce-vibratory-hammer` | handbook | BRUCE PILING EQUIPMENT, Pile Driving & Extracting Vibratory Hammer, retained manufacturer brochure, PDF p.1 cover and PDF pp.3–5 (printed3–5), Outstanding features; Main features; suppressor and gearbox. https://www.powerquip.co.kr/wp-content/uploads/2024/01/Hydraulic-vibratory-hammer-brochure-vibro-hammer-bruce-vibro-hammer-2025_low-3.pdf | 仅支持起重机悬吊液压驱动、机加工钢制偏心件、同步齿轮、轴承／轴、夹具油缸、弹性抑振及控制示例。型号性能、寿命和效率宣传不是工厂用量或通用验收限值。 |
| `pve-normal-frequency` | handbook | PVE USA / Dieseko USA, Vibratory Hammers Normal Frequency, Standard Frequency; How They Work; integrated equipment system. https://pveusa.com/vibratory-hammers-normal-frequency/ | 区分振动锤、夹具及动力站系统集成；不要求捆绑制造或通用配置。 |
| `ghg-product-allocation-2011` | official_guidance | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), chapter9, printed p.63 / PDF p.65, tables9.1–9.2. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 仅支持历史分配层级；须有实际物理驱动量证据，不声称符合现行完整标准。 |
