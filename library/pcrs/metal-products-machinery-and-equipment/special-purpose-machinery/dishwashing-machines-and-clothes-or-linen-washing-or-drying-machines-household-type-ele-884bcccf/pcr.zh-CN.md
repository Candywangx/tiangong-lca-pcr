---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.dishwashing-machines-and-clothes-or-linen-washing-or-drying-machines-household-type-ele-884bcccf
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 电动或非电动家用洗碟机及衣服和亚麻制品洗涤或烘干用机器

## 1. 范围与适用性

本候选规则覆盖完整家用洗碟机、衣物或亚麻制品洗衣机、干燥机及洗干一体机（电动或非电动）制造至声明的工厂门口。产出前景设备数据，不产出洗碟或洗衣服务。以具体型号功能、家用主要设计及交付结构决定适用性。手动洗涤是实际路径：WonderWash 原文说明手驱动、ABS 构造，无电机及脱水周期。燃气供热也是实际路径，可保留电动辅机。制造商用户容量、额定值及周期宣传仅证明结构，均不是工厂用量、默认物料表、机器质量或寿命。[laundry-alternative-manual; speedqueen-home-stack; bosch-dishwashers; bosch-dryers-2021]

区分家用设计与商用或工业洗衣、洗碟设备、干洗机、独立零件以及后续用户使用和寿命终结。现行 CPC3 解释说明将家用设备列于 44812、离心衣物脱水机列于 44911，并将其他纺织机械指向 44622。44622 标题明确包含干亚麻制品容量超过 10 kg 的洗衣及纺织干燥机械；相邻 44629 排除说明将低于 10 kg 的设备指向 44812。恰为 10 kg 及市场定位含混的配置须审查原始坐标与实际功能，不能编造阈值规则。简短名称不能决定每个实际机型。原始家用销售 Speed Queen 组合产品包含洗衣机及燃气或电热干燥机；容量不是独立且充分的市场判据。家用离心脱水机须按主要设计及分类审查，不能仅按离心机制自动纳入或排除。HS 邻接不是现行 CPC 对照。手动干燥机或非电动洗碗机仅在实际设计及供应证据下适用；缺乏代表例是明确证据缺口而非禁止。[unsd-cpc3; speedqueen-home-stack; thomas-spin]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.dishwashing-machines-and-clothes-or-linen-washing-or-drying-machines-household-type-ele-884bcccf |
| classification_refs | CPC 3.0 44812 |
| covered_products | 完整家用洗碗机；动力或手动洗衣机；排气、冷凝、热泵或燃气干燥机；实际设计支持家用供应的洗干组合设备 |
| excluded_products | 经边界审查后的商用或工业设备；干洗机械；独立备件；洗涤服务 |
| representative_product | 一个声明的验收配置；不存在通用代表洗衣机 |
| production_route | 实际自制外购矩阵，继以条件制造及表面工序、配置装配、实际存在的热力回路、验收及交付 |
| market_state | 工厂处新制造验收完整家电；声明留存充注及随附功能附件 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应完整家用洗碟或衣物、亚麻制品洗涤干燥设备 |
| How much | 同一配置验收净成品 1 千克 |
| How well | 声明型号规格及实际工厂验收，不设虚构性能阈值 |
| How long or cycle | 一个工厂生产报告期；不包含家庭运行周期及寿命 |
| reference_flow_link | final_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 电动或非电动家用洗碟机及衣服和亚麻制品洗涤或烘干用机器 `57770f75-ea3a-4810-94e8-8fb918f69b50` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 功能；型号及配置；家用主要设计及已审查分类；分别声明洗涤及干燥容量；电动、手动或燃气辅机；排气、冷凝或热泵结构；制冷剂化学身份及留存充注；材料牌号及配方；自制外购及供应完成状态；验收净质量；工厂、场址及期间；交付边界及随附件 |

在前景数据包中声明全部限定信息。质量输出是制造参考，不能建立家电间功能等价。N 为验收数量，D 为同一配置及期间经校准的验收净质量总和，M = D/N。实际安装留存充注仅计一次；D 排除运输包装、废品质量及游离试验液。样本机宣传质量不能替代实际称量协议。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |
| energy_units | fabrication_power; surface_power; assembly_power; drying_power; test_power; residual_power | Net calorific value | MJ | 保留各电表原始千瓦时，采用 1 kWh = 3.6 MJ。燃料须自身实测成分、温压及低位热值；热量不是电功。 |
| physical_basis | stainless_sheet; galvanized_sheet; abs_resin; pp_resin; steel_scrap; abs_scrap; sludge; test_wastewater | Mass | kg | 材料总质量不是所含元素质量。各物理平衡项采用自身匹配测定及干湿基；公用工程或运输服务数量不适用材料成分测定。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际收到的板材、粒料或已完成外购件，声明供应完成工序及留存初始充注 |
| starting_condition_role | 供应材料或部件接口 |
| product_classification_scope | 已审查完整家用洗涤、干燥及洗碟类别 |
| recursive_input_rule | 同类别外购组件或退回设备保留一次上游制造；内部返工仅抵消转移数量 |
| upstream_dataset_requirement | 实际材料、已完成部件、公用工程、运输及废物供应方；缺口不能代表零 |
| disclosure | 型号及物料表、自制外购、供应已完成而跳过的工序、充注、场址、期间及门口；基础设施及维护截断须论证 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| factory_only | all processes | 纳入实际制造、表面处理、装配、实际充注、工厂验收返工、包装及可归属控制；后续安装、用户水能洗涤剂及寿命终结为独立情景。用户能效标签不得成为工厂因子。 | bosch-dryers-2021; speedqueen-home-stack |
| make_buy_once | all processes | 对各槽、滚筒、电机、泵、电路板、线束、密封、加热器及制冷回路记录交付状态与互斥自制外购路径。外购成品含上游材料工序；自制路径以实际原子投入及工序替代。已充注回路不再加初次充注；未充注回路须计实际工厂充注。 | bosch-heatpump-r290 |
| site_completion | all processes | 卡片是证据引导的条件起点，不是完整默认物料表。数据集校验前分别增加实际存在的各牌号、配方、外购件、燃料、运输接口、制冷剂、化学品、废物及基本物种；区分未知与证明不适用。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| fabrication | 材料接收及条件零件制造 | conditional | 实际厂内切割、成形或注塑；外购件跳过供应方已完成工序 | 前景制造 | 每 1 kg 参考流 |
| surface | 条件清洗及表面处理 | conditional | 仅实际清洗、涂覆、固化及控制；外包工序上游计一次 | 前景制造 | 每 1 kg 参考流 |
| assembly | 配置专属家电装配 | required | 实际洗碗机、动力或手动洗衣机、干燥机或组合产品物料及自制外购 | 前景制造 | 每 1 kg 参考流 |
| drying_system | 条件热力及制冷子系统 | conditional | 实际燃气、电阻、冷凝或热泵设计；不具此功能的纯洗涤或手动设备不适用 | 前景制造 | 每 1 kg 参考流 |
| acceptance | 工厂验收及返工 | required | 实际安全、质量与功能验收；仅实际执行时计湿式及负载试验 | 前景制造 | 每 1 kg 参考流 |
| dispatch | 包装及工厂门口交付 | required | 验收完整配置及实际随附包装 | 前景制造 | 每 1 kg 参考流 |
| shared_services | 剩余公共服务及污染控制 | required | 仅归属本产品的未分配服务及实际控制；增加场址专属原子交换 | 前景制造 | 每 1 kg 参考流 |

### 过程：材料接收及条件零件制造（`fabrication`）

#### 输入

##### 产品流

###### AISI 304 不锈钢板 (`stainless_sheet`)

仅当实际图纸与材质证明指定该牌号及板材交付状态时使用；其他不锈钢牌号独立成行。只核算实际在厂制造的洗涤槽、滚筒及板件。

- 选定流: AISI 304 不锈钢板
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_stainless_sheet。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_stainless_sheet`
- 来源: `bosch-dishwashers`; `speedqueen-home-stack`

###### 镀锌低碳钢板 (`galvanized_sheet`)

机壳自制时适用；记录实际基板牌号、镀锌层及供应方处理。锌质量不等于钢板总质量。

- 选定流: 镀锌低碳钢板
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_galvanized_sheet。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_galvanized_sheet`
- 来源: `speedqueen-home-stack`

###### 丙烯腈丁二烯苯乙烯共聚物（ABS）粒料 (`abs_resin`)

仅适用于中国采购的实际厂内 ABS 注塑粒料；记录抗冲击牌号、添加剂、再生或原生状态及供应方。WonderWash 证明 ABS 构造而非该供应方或配方。外购成型件替代其粒料及已完成加工。

- 选定流: 丙烯腈丁二烯苯乙烯共聚物（ABS）粒料 `b895c3a1-076e-4a42-a2c0-6088890c0bd9`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_abs_resin。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_abs_resin`
- 来源: `laundry-alternative-manual`

###### 聚丙烯粒料 (`pp_resin`)

仅在实际厂内制造聚丙烯槽体或喷淋臂时适用；记录牌号、填料及供应方。不得以 ABS 替代。

- 选定流: 聚丙烯粒料
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_pp_resin。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_pp_resin`
- 来源:

###### 混凝土洗衣机配重 (`concrete_ballast`)

仅适用于实际外购配重；声明配合比及已养护交付状态。厂内浇筑须另列实际水泥、骨料、水及各添加剂、养护与废物行。

- 选定流: 混凝土洗衣机配重
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_concrete_ballast。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_concrete_ballast`
- 来源:

###### 交流电 (`fabrication_power`)

仅在场址边界匹配时采用用户侧 1–35 千伏电网供电；单独保留地域、年份、供电方及厂内变压。计入切割、成形、焊接及注塑分表负荷，包括废品及返工。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_fabrication_power。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_fabrication_power`
- 来源:

#### 输出

##### 废物流

###### 不锈钢板边角料 (`steel_scrap`)

仅列外送废料；确认牌号、去向及自身成分。厂内回用边角料抵消内部转移，但保留加工负荷。

- 选定流: 不锈钢板边角料
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_steel_scrap。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_steel_scrap`
- 来源:

###### ABS 注塑废品 (`abs_scrap`)

按实际配方称量注塑废品；内部回用粉碎料不是第二次外部粒料投入，也不是原生料替代抵扣。

- 选定流: ABS 注塑废品
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_abs_scrap。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_abs_scrap`
- 来源:

### 过程：条件清洗及表面处理（`surface`）

#### 输入

##### 产品流

###### 氢氧化钠清洗液 (`sodium_hydroxide`)

仅在实际碱洗槽使用时适用；记录供液浓度、活性质量、补液、回液及存量。各共配组分单列，不由家电结构推定。

- 选定流: 氢氧化钠清洗液
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_sodium_hydroxide。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_sodium_hydroxide`
- 来源:

###### 环氧粉末涂料 (`epoxy_powder`)

仅在实际环氧涂覆时适用；确认配方、产品留存涂层及固化记录。聚酯或混合配方须另列。

- 选定流: 环氧粉末涂料
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_epoxy_powder。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_epoxy_powder`
- 来源:

###### 异丙醇清洗溶剂 (`isopropanol`)

仅在实际溶剂清洗时适用；其他溶剂及水单列。捕集或回收不等于销毁；量化产品留存、存量及全部废物和排放去向。

- 选定流: 异丙醇清洗溶剂
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_isopropanol。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_isopropanol`
- 来源:

###### 交流电 (`surface_power`)

记录清洗、抽风、涂覆及固化实际电量，避免与炉燃料及全厂表重复；用户侧电压须匹配。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_surface_power。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_surface_power`
- 来源:

###### 天然气 (`natural_gas`)

仅计量实际工厂炉、燃烧器或试验天然气；声明成分与交付压力，不计用户寿命期燃气。保留体积温压及自身低位热值。

- 选定流: 天然气
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_natural_gas。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_natural_gas`
- 来源: `speedqueen-home-stack`

#### 输出

##### 废物流

###### 环氧涂覆过喷残渣 (`paint_residue`)

仅列实际外送称量废物；保留干湿基及自身树脂、颜料和金属测定。

- 选定流: 环氧涂覆过喷残渣
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_paint_residue。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_paint_residue`
- 来源:

###### 废异丙醇清洗溶剂 (`spent_solvent`)

记录实际场外处理或回收；各溶剂浓度及水分须匹配称量废物。

- 选定流: 废异丙醇清洗溶剂
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_spent_solvent。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_spent_solvent`
- 来源:

##### 基本流

###### 排入空气的异丙醇 (`ipa_air`)

按捕集后实测或核实的物种专属排气及无组织排放核算；不得自动视溶剂工艺为无排放。

- 选定流: 排入空气的异丙醇
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_ipa_air。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_ipa_air`
- 来源:

### 过程：配置专属家电装配（`assembly`）

#### 输入

##### 产品流

###### 家用洗衣机驱动电机 (`wash_motor`)

仅适用于动力洗衣机的外购成品电机；供应方负荷包括内含铜、钢、磁体及已完成制造，不再重复加入这些材料。

- 选定流: 家用洗衣机驱动电机
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_wash_motor。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_wash_motor`
- 来源: `speedqueen-home-stack`

###### 洗碗机循环泵 (`dishwash_pump`)

仅适用于实际洗碗机水循环组件；声明电机、叶轮、密封交付边界及上游完成状态。

- 选定流: 洗碗机循环泵
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_dishwash_pump。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_dishwash_pump`
- 来源: `bosch-dishwashers`

###### 洗碗机喷淋臂 (`dishwash_arm`)

采用外购成品喷淋臂时适用；分别声明聚合物或金属设计及供应方。若自制，则用实际材料及加工替代外购件。

- 选定流: 洗碗机喷淋臂
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_dishwash_arm。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_dishwash_arm`
- 来源: `bosch-dishwashers`

###### 家用洗涤干燥设备排水泵 (`drain_pump`)

仅列实际外购排水或冷凝水泵，与洗碗机循环泵区分。

- 选定流: 家用洗涤干燥设备排水泵
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_drain_pump。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_drain_pump`
- 来源: `bosch-dryers-2021`

###### 家用洗涤干燥设备控制电路板 (`control_board`)

仅适用于实际电子控制的外购装配板；不得强制给手动设备配置电控。声明已装配板边界及供应方。

- 选定流: 家用洗涤干燥设备控制电路板
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_control_board。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_control_board`
- 来源:

###### 家用洗涤干燥设备绝缘铜线束 (`wire_harness`)

实际外购线束；上游仅计一次铜及绝缘层，不再重复计原铜和聚合物。

- 选定流: 家用洗涤干燥设备绝缘铜线束
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_wire_harness。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_wire_harness`
- 来源:

###### EPDM 家电门密封圈 (`epdm_seal`)

仅适用于实际 EPDM 供应密封圈；硅橡胶等其他弹性体须独立身份及配方。不假定通用密封牌号。

- 选定流: EPDM 家电门密封圈
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_epdm_seal。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_epdm_seal`
- 来源:

###### 手动洗衣机摇柄 (`manual_crank`)

仅适用于手动洗衣机的实际外购手驱动零件；确认材料及机械连接。手动干燥机或洗碗机须自身实际设计证据及零件行。

- 选定流: 手动洗衣机摇柄
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_manual_crank。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_manual_crank`
- 来源: `laundry-alternative-manual`

###### 交流电 (`assembly_power`)

实际电动工具及装配线负荷，包括手动家电制造；家电使用不用电不代表工厂能耗为零。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly_power。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_assembly_power`
- 来源:

### 过程：条件热力及制冷子系统（`drying_system`）

#### 输入

##### 产品流

###### 家用干燥机电阻加热器 (`resistance_heater`)

仅适用于实际排气式或电阻冷凝式干燥机加热组件；热泵技术不自动包含此件。由实际电路及结构图控制选择。

- 选定流: 家用干燥机电阻加热器
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_resistance_heater。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_resistance_heater`
- 来源: `speedqueen-home-stack`

###### 家用干燥机风机 (`dryer_blower`)

干燥机实际外购气流组件；明确驱动及壳体供应边界。

- 选定流: 家用干燥机风机
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_dryer_blower。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_dryer_blower`
- 来源: `speedqueen-home-stack`

###### 家用燃气干燥机燃烧器组件 (`gas_burner`)

仅适用于实际天然气或液化气机型；燃气转换组件、阀、点火及控制须包含于供应边界或实际独立行，不能假定双燃料物料表。

- 选定流: 家用燃气干燥机燃烧器组件
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_gas_burner。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_gas_burner`
- 来源: `speedqueen-home-stack`

###### 家用干燥机冷凝换热器 (`condenser`)

实际指定冷凝结构的外购非制冷剂换热器；声明风冷或水冷、金属及供应方。冷凝标签本身不证明电阻加热或无制冷剂。

- 选定流: 家用干燥机冷凝换热器
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_condenser。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_condenser`
- 来源: `bosch-dryers-2021`; `bosch-condensing-sheet`

###### 已充注家用干燥机热泵回路 (`charged_heatpump`)

仅适用于实际外购已充注密封回路。供应负荷包括压缩机、蒸发器、冷凝器、润滑剂及初始制冷剂，不再重复加内含材料或充注。现场补充及损失仍须实际单列。

- 选定流: 已充注家用干燥机热泵回路
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_charged_heatpump。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_charged_heatpump`
- 来源: `bosch-heatpump-r290`

###### 未充注家用干燥机热泵回路 (`uncharged_heatpump`)

实际外购未充注回路的替代路径；供应边界不含未提供的充注。厂内制造回路须实际压缩机、换热器、铜管、钎料、油及装配行，而非外购回路再加内含部件。

- 选定流: 未充注家用干燥机热泵回路
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_uncharged_heatpump。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_uncharged_heatpump`
- 来源: `bosch-heatpump-r290`

###### 丙烷制冷剂 R290 (`r290_fill`)

仅适用于 R290 回路实际现场初次充注或补充；测量钢瓶损耗、留存充注、回收、存量及泄漏。其他制冷剂须各自供应及排放行；机型资料不等于充注量。

- 选定流: 丙烷制冷剂 R290
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_r290_fill。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_r290_fill`
- 来源: `bosch-heatpump-r290`

###### 交流电 (`drying_power`)

实际回路装配、真空泵及充注工位电量；不计用户额定周期能量。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_drying_power。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_drying_power`
- 来源:

#### 输出

##### 废物流

###### 回收丙烷制冷剂 R290 (`r290_recovery`)

仅列外送回收物；记录纯度、钢瓶皮重及去向，不自动视为销毁或替代抵扣。

- 选定流: 回收丙烷制冷剂 R290
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_r290_recovery。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_r290_recovery`
- 来源: `bosch-heatpump-r290`

##### 基本流

###### 排入空气的丙烷 (`r290_air`)

仅列实际 R290 充注、试验及无组织空气损失；分开测量回收量及残余废物。不因设备密封就将泄漏设为零。

- 选定流: 排入空气的丙烷
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_r290_air。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_r290_air`
- 来源: `bosch-heatpump-r290`

### 过程：工厂验收及返工（`acceptance`）

#### 输入

##### 产品流

###### 工厂家电试验水 (`test_water`)

仅列实际计量的泄漏、水力或洗涤性能试验；区分新水、循环水、产品残留水及排放。不计用户热水供应。

- 选定流: 工厂家电试验水
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_test_water。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_test_water`
- 来源:

###### 工厂试验碳酸钠洗涤剂组分 (`test_detergent`)

仅列核实试验配方中的实际碳酸钠，保留溶液与活性比例；实际表面活性剂、漂白剂及其他组分均须原子行。不得给干式检查强制加入洗涤剂。

- 选定流: 工厂试验碳酸钠洗涤剂组分
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_test_detergent。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_test_detergent`
- 来源:

###### 交流电 (`test_power`)

实际终检运行、安全及返工试验电量；区分抽样试验、生产设备及全部家庭使用周期。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_test_power。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_test_power`
- 来源:

#### 输出

##### 废物流

###### 家电工厂试验废水 (`test_wastewater`)

向实际接收处理方转移的废水；记录水质量、固体、各污染物浓度及自身不确定度，不假定处理无负荷。

- 选定流: 家电工厂试验废水
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_test_wastewater。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_test_wastewater`
- 来源:

###### 未验收家用洗涤干燥设备 (`rejected_machine`)

仅列未验收设备外部去向。返工环抵消内部材料转移但保留重复装配及试验能源；废品不得扩大验收分母。

- 选定流: 未验收家用洗涤干燥设备
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_rejected_machine。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_rejected_machine`
- 来源:

### 过程：包装及工厂门口交付（`dispatch`）

#### 输入

##### 产品流

###### 瓦楞纸板运输箱 (`carton`)

实际测量的出厂运输包装；上游只计一次；区分留存产品净质量与可回收包装。

- 选定流: 瓦楞纸板运输箱
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_carton。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_carton`
- 来源:

###### 发泡聚苯乙烯防护衬垫 (`eps`)

仅列实际 EPS 包装；EPE 或纸浆替代须各自独立行，不假定通用包装。

- 选定流: 发泡聚苯乙烯防护衬垫
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_eps。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_eps`
- 来源:

#### 输出

##### 产品流

###### 电动或非电动家用洗碟机及衣服和亚麻制品洗涤或烘干用机器 (`final_product`)

工厂门口同一配置的验收完整产品，包含实际安装留存的初始充注及随附功能件；排除包装、废品、游离试验水及用户负载。

- 选定流: 电动或非电动家用洗碟机及衣服和亚麻制品洗涤或烘干用机器 `57770f75-ea3a-4810-94e8-8fb918f69b50`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 1 千克
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_mass`
- 来源:

### 过程：剩余公共服务及污染控制（`shared_services`）

#### 输入

##### 产品流

###### 交流电 (`residual_power`)

仅列减去制造、表面处理、装配、干燥回路、试验及出厂已分配量后同期间未分配剩余电量。核对外购、实际发电、外送及储能；负残量须调查，不能截为零。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_residual_power。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_residual_power`
- 来源:

###### 工厂交付蒸汽 (`steam`)

仅列实际以能量为基准的外购蒸汽服务；测量交付千克数及自身交付比焓 MJ/kg、参考态与供应边界。按同一共同焓基准及期间独立测量回水 kg 及自身回水 MJ/kg。与供应方约定服务接口为总交付能量或净有效热：净服务仅减一次回水 MJ；总交付服务另报回水，不能重复扣除。外购蒸汽不得再加自有锅炉生产。

- 选定流: 工厂交付蒸汽
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_steam。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_steam`
- 来源:

###### 外购工业补充水 (`makeup_water`)

仅列同期间尚未分配的冷却、清洗及水处理补充水，与已分配试验水分开；供应水与直接取水分别记录。

- 选定流: 外购工业补充水
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_makeup_water。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_makeup_water`
- 来源:

#### 输出

##### 产品流

###### 蒸汽凝结回水 (`condensate_return`)

仅列实际外部回水；质量、自身比焓、温度、压力、品质、共同焓基准及接收边界独立于交付蒸汽采集；按约定总交付或净热供应接口仅核对一次回水能量。内部回水转移抵消。

- 选定流: 蒸汽凝结回水
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_condensate_return。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_condensate_return`
- 来源:

##### 废物流

###### 家电工厂废水处理污泥 (`sludge`)

实际污泥去向；称量湿质量、自身水分及固体、各金属与溶剂测定，不使用投料金属组成。

- 选定流: 家电工厂废水处理污泥
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_sludge。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_sludge`
- 来源:

##### 基本流

###### 排入空气的水蒸气 (`water_vapour`)

仅列工厂实际蒸发；以存量及水分闭合冷却、试验和清洗水，不计家庭衣物水分。

- 选定流: 排入空气的水蒸气
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_water_vapour。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_water_vapour`
- 来源:

###### 排入空气的化石二氧化碳 (`co2`)

仅列工厂实际化石燃料燃烧；核对留存碳、不完全燃烧、存量及非空气碳去向。

- 选定流: 排入空气的化石二氧化碳
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_co2。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_co2`
- 来源:

###### 排入空气的一氧化碳 (`co`)

采用实际物种专属排气测量或核实的工艺专属方法；仅靠燃料碳平衡不能确定该量。

- 选定流: 排入空气的一氧化碳
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_co。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_co`
- 来源:

###### 排入空气的二氧化氮 (`no2`)

仅列实际 NO2 物种数据；以 NO2 表示的 NOx 报告指标不自动等于物理 NO2。实测 NO 及其他实际物种须另列。保留报告单位及基准：以 NO2 当量表示的 NOx 须记录摩尔或摩尔质量转换及实测物种拆分，不能把总 NOx 当作纯 NO2。

- 选定流: 排入空气的二氧化氮
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_no2。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_no2`
- 来源:

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| avoid_allocation | all processes | 优先隔离各配置产线及因果计量。按适合服务的实测驱动（时间、计量负荷、处理质量或废水负荷）分配混产与剩余公共服务；声明分配至验收成品的废品及返工负荷。不得默认各公用工程均按产品质量分配。 |  |
| scrap_treatment | steel_scrap; abs_scrap; paint_residue; r290_recovery | 内部回用抵消成对转移但保留重复工序负荷。外部回收或处置采用实际去向及声明一致分配约定。不得自动抵扣原生料或任意负负荷。按实际销售、质量及数量区分售出共产品。 |  |

## 8. 前景数据采集、计算与质量规则

对各配置及报告期采集验收数量 N 及各件经校准净质量 m_i；D = sum(m_i)，M = D/N。Q 是存量核对及因果分配后的期间可归属外部交换，包含废品返工负荷。q_item = Q/N，q_ref = Q/D。按实际交付边界仅计一次外购件上游负荷。不得跨配置平均质量。以下协议聚合列建立每台验收设备的中间 q_item；normalize_mass 随后将其转换为参考基准。原始记录保留 Q、N、D、M 及分配，不能将归一化数冒充原始测量。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | final_product | measurement_record | 型号；配置；序列号；验收净质量 M；期间；N；D | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 每台验收设备 | 同一完整报告期 | 声明配置及工厂门口 | 每台验收净质量 | 校准；皮重；验收；留存充注证据 |
| cp_stainless_sheet | fabrication | stainless_sheet | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 按校准称量核对收发料、存量及成对内部转移；适用于物理材料时核对供应方、物料、自身牌号及成分水分基。 | kg | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |
| cp_galvanized_sheet | fabrication | galvanized_sheet | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 按校准称量核对收发料、存量及成对内部转移；适用于物理材料时核对供应方、物料、自身牌号及成分水分基。 | kg | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |
| cp_abs_resin | fabrication | abs_resin | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 按校准称量核对收发料、存量及成对内部转移；适用于物理材料时核对供应方、物料、自身牌号及成分水分基。 | kg | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |
| cp_pp_resin | fabrication | pp_resin | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 按校准称量核对收发料、存量及成对内部转移；适用于物理材料时核对供应方、物料、自身牌号及成分水分基。 | kg | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |
| cp_concrete_ballast | fabrication | concrete_ballast | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 按校准称量核对收发料、存量及成对内部转移；适用于物理材料时核对供应方、物料、自身牌号及成分水分基。 | kg | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |
| cp_fabrication_power | fabrication | fabrication_power | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 校准服务计量及区间日志；电力保留原始千瓦时，燃料保留自身成分热值及温压；实际分配并核对同期间场址。 | MJ | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |
| cp_steel_scrap | fabrication | steel_scrap | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 按校准称量核对收发料、存量及成对内部转移；适用于物理材料时核对供应方、物料、自身牌号及成分水分基。 | kg | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |
| cp_abs_scrap | fabrication | abs_scrap | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 按校准称量核对收发料、存量及成对内部转移；适用于物理材料时核对供应方、物料、自身牌号及成分水分基。 | kg | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |
| cp_sodium_hydroxide | surface | sodium_hydroxide | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 按校准称量核对收发料、存量及成对内部转移；适用于物理材料时核对供应方、物料、自身牌号及成分水分基。 | kg | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |
| cp_epoxy_powder | surface | epoxy_powder | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 按校准称量核对收发料、存量及成对内部转移；适用于物理材料时核对供应方、物料、自身牌号及成分水分基。 | kg | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |
| cp_isopropanol | surface | isopropanol | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 按校准称量核对收发料、存量及成对内部转移；适用于物理材料时核对供应方、物料、自身牌号及成分水分基。 | kg | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |
| cp_surface_power | surface | surface_power | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 校准服务计量及区间日志；电力保留原始千瓦时，燃料保留自身成分热值及温压；实际分配并核对同期间场址。 | MJ | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |
| cp_natural_gas | surface | natural_gas | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 校准服务计量及区间日志；电力保留原始千瓦时，燃料保留自身成分热值及温压；实际分配并核对同期间场址。 | MJ | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |
| cp_paint_residue | surface | paint_residue | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 按校准称量核对收发料、存量及成对内部转移；适用于物理材料时核对供应方、物料、自身牌号及成分水分基。 | kg | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |
| cp_spent_solvent | surface | spent_solvent | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 按校准称量核对收发料、存量及成对内部转移；适用于物理材料时核对供应方、物料、自身牌号及成分水分基。 | kg | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |
| cp_ipa_air | surface | ipa_air | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 采用物种专属校准排气、出水或泄漏测量，匹配浓度、流量、时间及环境区室；无法测量时采用经核实化学专属方法；保留不确定度。 | kg | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |
| cp_wash_motor | assembly | wash_motor | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 按校准称量核对收发料、存量及成对内部转移；适用于物理材料时核对供应方、物料、自身牌号及成分水分基。 | kg | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |
| cp_dishwash_pump | assembly | dishwash_pump | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 按校准称量核对收发料、存量及成对内部转移；适用于物理材料时核对供应方、物料、自身牌号及成分水分基。 | kg | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |
| cp_dishwash_arm | assembly | dishwash_arm | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 按校准称量核对收发料、存量及成对内部转移；适用于物理材料时核对供应方、物料、自身牌号及成分水分基。 | kg | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |
| cp_drain_pump | assembly | drain_pump | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 按校准称量核对收发料、存量及成对内部转移；适用于物理材料时核对供应方、物料、自身牌号及成分水分基。 | kg | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |
| cp_control_board | assembly | control_board | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 按校准称量核对收发料、存量及成对内部转移；适用于物理材料时核对供应方、物料、自身牌号及成分水分基。 | kg | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |
| cp_wire_harness | assembly | wire_harness | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 按校准称量核对收发料、存量及成对内部转移；适用于物理材料时核对供应方、物料、自身牌号及成分水分基。 | kg | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |
| cp_epdm_seal | assembly | epdm_seal | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 按校准称量核对收发料、存量及成对内部转移；适用于物理材料时核对供应方、物料、自身牌号及成分水分基。 | kg | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |
| cp_manual_crank | assembly | manual_crank | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 按校准称量核对收发料、存量及成对内部转移；适用于物理材料时核对供应方、物料、自身牌号及成分水分基。 | kg | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |
| cp_assembly_power | assembly | assembly_power | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 校准服务计量及区间日志；电力保留原始千瓦时，燃料保留自身成分热值及温压；实际分配并核对同期间场址。 | MJ | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |
| cp_resistance_heater | drying_system | resistance_heater | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 按校准称量核对收发料、存量及成对内部转移；适用于物理材料时核对供应方、物料、自身牌号及成分水分基。 | kg | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |
| cp_dryer_blower | drying_system | dryer_blower | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 按校准称量核对收发料、存量及成对内部转移；适用于物理材料时核对供应方、物料、自身牌号及成分水分基。 | kg | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |
| cp_gas_burner | drying_system | gas_burner | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 按校准称量核对收发料、存量及成对内部转移；适用于物理材料时核对供应方、物料、自身牌号及成分水分基。 | kg | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |
| cp_condenser | drying_system | condenser | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 按校准称量核对收发料、存量及成对内部转移；适用于物理材料时核对供应方、物料、自身牌号及成分水分基。 | kg | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |
| cp_charged_heatpump | drying_system | charged_heatpump | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 按校准称量核对收发料、存量及成对内部转移；适用于物理材料时核对供应方、物料、自身牌号及成分水分基。 | kg | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |
| cp_uncharged_heatpump | drying_system | uncharged_heatpump | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 按校准称量核对收发料、存量及成对内部转移；适用于物理材料时核对供应方、物料、自身牌号及成分水分基。 | kg | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |
| cp_r290_fill | drying_system | r290_fill | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 按校准称量核对收发料、存量及成对内部转移；适用于物理材料时核对供应方、物料、自身牌号及成分水分基。 | kg | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |
| cp_r290_recovery | drying_system | r290_recovery | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 按校准称量核对收发料、存量及成对内部转移；适用于物理材料时核对供应方、物料、自身牌号及成分水分基。 | kg | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |
| cp_r290_air | drying_system | r290_air | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 采用物种专属校准排气、出水或泄漏测量，匹配浓度、流量、时间及环境区室；无法测量时采用经核实化学专属方法；保留不确定度。 | kg | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |
| cp_drying_power | drying_system | drying_power | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 校准服务计量及区间日志；电力保留原始千瓦时，燃料保留自身成分热值及温压；实际分配并核对同期间场址。 | MJ | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |
| cp_test_water | acceptance | test_water | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 校准质量或体积及实际条件实测密度；期初期末存量、带入水分、夹带、蒸发及排水；匹配自身固体与物种测定、去向及不确定度。 | kg | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |
| cp_test_detergent | acceptance | test_detergent | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 按校准称量核对收发料、存量及成对内部转移；适用于物理材料时核对供应方、物料、自身牌号及成分水分基。 | kg | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |
| cp_test_power | acceptance | test_power | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 校准服务计量及区间日志；电力保留原始千瓦时，燃料保留自身成分热值及温压；实际分配并核对同期间场址。 | MJ | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |
| cp_test_wastewater | acceptance | test_wastewater | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 校准质量或体积及实际条件实测密度；期初期末存量、带入水分、夹带、蒸发及排水；匹配自身固体与物种测定、去向及不确定度。 | kg | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |
| cp_rejected_machine | acceptance | rejected_machine | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 按校准称量核对收发料、存量及成对内部转移；适用于物理材料时核对供应方、物料、自身牌号及成分水分基。 | kg | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |
| cp_carton | dispatch | carton | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 按校准称量核对收发料、存量及成对内部转移；适用于物理材料时核对供应方、物料、自身牌号及成分水分基。 | kg | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |
| cp_eps | dispatch | eps | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 按校准称量核对收发料、存量及成对内部转移；适用于物理材料时核对供应方、物料、自身牌号及成分水分基。 | kg | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |
| cp_residual_power | shared_services | residual_power | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 校准服务计量及区间日志；电力保留原始千瓦时，燃料保留自身成分热值及温压；实际分配并核对同期间场址。 | MJ | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |
| cp_steam | shared_services | steam | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 测量交付蒸汽质量 kg 及自身交付比焓 MJ/kg、共同焓基准、压力、温度及品质；独立保留同焓基准回水 kg 及自身回水 MJ/kg、供应方总交付或净热接口，不重复锅炉或回水能量。 | MJ | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |
| cp_condensate_return | shared_services | condensate_return | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 独立测量外部回水 kg 及实测温压品质下自身回水 MJ/kg，采用与交付相同共同焓基准；计算回水 MJ，保留区间及接收边界，仅核对一次总交付或净热服务并配对内部回水转移。 | kg | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |
| cp_makeup_water | shared_services | makeup_water | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 校准质量或体积及实际条件实测密度；期初期末存量、带入水分、夹带、蒸发及排水；匹配自身固体与物种测定、去向及不确定度。 | kg | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |
| cp_sludge | shared_services | sludge | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 校准质量或体积及实际条件实测密度；期初期末存量、带入水分、夹带、蒸发及排水；匹配自身固体与物种测定、去向及不确定度。 | kg | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |
| cp_water_vapour | shared_services | water_vapour | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 采用物种专属校准排气、出水或泄漏测量，匹配浓度、流量、时间及环境区室；无法测量时采用经核实化学专属方法；保留不确定度。 | kg | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |
| cp_co2 | shared_services | co2 | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 采用物种专属校准排气、出水或泄漏测量，匹配浓度、流量、时间及环境区室；无法测量时采用经核实化学专属方法；保留不确定度。 | kg | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |
| cp_co | shared_services | co | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 采用物种专属校准排气、出水或泄漏测量，匹配浓度、流量、时间及环境区室；无法测量时采用经核实化学专属方法；保留不确定度。 | kg | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |
| cp_no2 | shared_services | no2 | measurement_record | 场址；期间；配置；原始数量及单位；Q；N；D；M；路径；存量；供应方；分配；校准；不确定度 | 分别保留实际 NO 及 NO2 测量、原报告单位、NOx 以 NO2 当量表示约定及摩尔质量或摩尔转换；无物种拆分的总 NOx 不能确定纯 NO2。 | kg | 各批或计量区间；期间核对 | 完整年份或经论证含废品返工的代表生产期 | 匹配配置工序及同期间剩余场址服务 | 分配交换数量 / 验收机器数量 | 原始记录；校准；供应边界；适用测定；不确定度 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | stainless_sheet; galvanized_sheet; abs_resin; pp_resin; concrete_ballast; fabrication_power; steel_scrap; abs_scrap; sodium_hydroxide; epoxy_powder; isopropanol; surface_power; natural_gas; paint_residue; spent_solvent; ipa_air; wash_motor; dishwash_pump; dishwash_arm; drain_pump; control_board; wire_harness; epdm_seal; manual_crank; assembly_power; resistance_heater; dryer_blower; gas_burner; condenser; charged_heatpump; uncharged_heatpump; r290_fill; r290_recovery; r290_air; drying_power; test_water; test_detergent; test_power; test_wastewater; rejected_machine; carton; eps; residual_power; steam; condensate_return; makeup_water; sludge; water_vapour; co2; co; no2 | q_ref = q_item / M; q_item = 每台验收成品机器的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

蒸汽在归一化前按记录参考态下交付 kg 乘以自身交付 MJ/kg 采集；实测温压品质下凝结回水 kg 乘以自身回水 MJ/kg 按同共同焓基准及期间独立记录。约定总交付服务采用交付 MJ，约定净热采用交付减回水 MJ；不得重复扣除回水或在外购服务上再加自有锅炉负荷。有限 normalize_mass 计算作用于所得服务 q_item，不能用蒸汽 kg 代替 MJ 或使用通用比焓。

### 数据质量要求

| requirement_id | Applies to | 要求 | 证据 |
| --- | --- | --- | --- |
| traceability | all inventory rows | 实际配置、供应完成状态、牌号配方、门口及供应地域时间；各实际交换为原子行且本地化；不能用不支持的 UUID 替代。 | 物料表；图纸；证明；直读身份；供应记录 |
| closure | physical materials and species | 对各金属、聚合物及化学品按自身物种及干湿基闭合：外部投入加期初存量及记录生成量，等于验收产品、外送废料污泥废水排放、期末存量及实际反应销毁。各项采用自身测定；保留氧和试剂吸收及反应产物。配对内部回流，不将总质量作为所含金属。闭合实际水，包括带入水分、存量、蒸发、产品夹带、排水及反应。各湿投入、产品、期初期末存量、污泥、废水及废物均采用自身实测水分及干湿基；体积项采用自身实测密度。保留成对回水转移，按实际综合测量、采样及分配不确定度调查闭合。 | 匹配称量；测定；水分；反应及存量记录 |
| solvent_charge | isopropanol; spent_solvent; ipa_air; r290_fill; r290_recovery; r290_air | 区分产品留存、回收、捕集介质、存量、实际销毁及全部空气与非空气残余。捕集不等于销毁，回收质量不等于零排放。未解释平衡残量不能自动作为空气排放；先调查非空气留存材料、废物、水及存量项，不能无依据指派去向。按实际综合采样、测量及分配不确定度调查闭合，不设通用容差。 | 充注及钢瓶皮重；捕集回收测定；销毁收据；物种平衡 |
| utility_reconcile | all utility rows | 各服务按同期间及单位核对：外购加实际发电，减外送及储能变化，等于已分配工序用量与未分配剩余。公共服务仅含剩余；现场发电部分替代外购服务并增加自身燃料及控制。按计量、时间及分配不确定度调查负残量，不能截为零。 | 外购发电外送储能及分表；因果分配 |

## 9. 校验规则

| rule_id | Applies to | 规则 | source_ids |
| --- | --- | --- | --- |
| identity_scope | final_product | 拒绝家电与服务混淆、配置不匹配或无依据分类归属。家用离心设备及临界市场容量须明确审查；不得由 HS 或供应宣传自动映射。 | unsd-cpc3; thomas-spin |
| measurement_complete | all inventory rows | 要求正 N/D、经校准 cp_mass、同配置期间、各适用输入输出的受支持 normalize_mass 及原始 Q 记录。拒绝 D 中包装废品、外购件或充注重复及用户因子。 |  |
| balances | physical balances | 要求分开的总质量、所含物种、水、溶剂、充注及能量闭合，包含存量及内部回流抵消。超出实际综合不确定度的未解释差额须调查，不编造默认收率或阈值。 |  |
| gaps | all exchanges | 缺失 UUID、供应方、配方或测量是未知，不是零或不适用。下游使用前补全各实际条件路径交换；报告已做及跳过检查与剩余限制。候选方法本身不满足发布身份及证据门槛。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | 实际声明家电工厂制造；使用及寿命终结另有证据的下游生命周期 |
| excluded_use | 洗衣或洗碗服务；通用家电功能比较；自动商用或离心干燥归属 |
| required_metadata | 全部参考限定信息、型号物料、N/D/M、Q 及供应方、自制外购、充注、工厂边界、分配及实际排除项 |
| required_quality_disclosure | 实测覆盖、路径证据、身份供应方缺口、场址期间及实际不确定度；无虚构范围 |
| update_trigger | 配置、供应方、牌号配方、供热制冷剂路径、门口、验收或实测服务分配变化 |

## 11. 数据源

| 来源编号 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| unsd-cpc3 | official_guidance | UNSD, CPC Version 3.0 explanatory notes, 30 June 2025, printed pp.237,239,241. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 现行标题层级及 44622、44812、44911 邻接边界；不推定机型对照 |
| laundry-alternative-manual | handbook | The Laundry Alternative, WonderWash original product page, publisher snapshot 2026-10-02. https://www.laundry-alternative.com/products/the-wonderwash | 手驱动及 ABS；不强制电机脱水功能；冲突尺寸及宣传质量时间用水均未采用 |
| speedqueen-home-stack | handbook | Speed Queen, ATEE9AWP435AW01 electric / ATGE9AWP305AW01 gas home stack washer dryer, undated original publisher snapshot 2026-10-02, pp.1–3. https://speedqueen.com/au/wp-content/uploads/sites/21/2019/01/Speed-Queen-Stack-ATEE9A-ATGE9A-NEW.pdf | 家用设计反例；分开洗衣及燃气电热排气干燥；不锈钢槽及镀锌机壳；运输质量不是净参考 |
| bosch-dishwashers | handbook | Bosch, Stainless Steel Dishwashers original product family page, publisher snapshot 2026-10-02. https://www.bosch-home.com/us/products/dishwashers/stainless-steel-dishwashers/ | 家用洗碟功能、不锈钢设计、电机喷淋臂及隔声结构；不假定牌号配方 |
| bosch-dryers-2021 | handbook | Bosch New Zealand, Bosch Dryers brochure, July 2021, pp.4,6. https://media3.bosch-home.com/Documents/MCDOC03215793_Bosch_NZ_Dryer_Brochure.pdf | 热泵、冷凝及洗干一体替代与冷凝排水；须实际机型供应边界 |
| bosch-heatpump-r290 | handbook | Bosch, WQB245B0SG Series 8 Heat Pump Dryer specification, undated publisher snapshot 2026-10-02, pp.1–2. https://media3.bosch-home.com/Documents/specsheet/en-MY/WQB245B0SG.pdf | 密封 R290 热泵、不锈钢滚筒及冷凝水容器；表头称含氟温室气体但 R290 为丙烷；不从标签推导化学因子或充注质量默认值 |
| bosch-condensing-sheet | handbook | Bosch, WTR88T81GB Product information sheet, footer 04.07.2025, pp.1–2. https://media3.bosch-home.com/Documents/eudatasheet/en-IE/WTR88T81GB.pdf | 冷凝标签反例；空白数字及 No 项不能确定工厂数量或无制冷剂 |
| thomas-spin | handbook | THOMAS, Spin dryer CENTRI 776 SEK original product page, publisher snapshot 2026-10-02. https://thomas-germany.com/en-uk/THOMAS-Spin-dryer-CENTRI-776-SEK/ | 独立离心设备反例与裸机包装质量区别；机型分类仍须审查 |
