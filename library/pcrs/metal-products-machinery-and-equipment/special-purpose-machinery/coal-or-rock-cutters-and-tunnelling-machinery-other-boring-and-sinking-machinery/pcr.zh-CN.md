---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.coal-or-rock-cutters-and-tunnelling-machinery-other-boring-and-sinking-machinery
status: candidate
language: zh-CN
sync_with: pcr.en-US.md
---

# 采煤或岩石切割机械及隧道掘进机械；其他钻孔及凿井机械

## 1. 范围与适用性

适用于在声明工厂边界交付的完整采煤或岩石切割机械、隧道开挖机械及其他钻孔或凿井机械的制造方法。声明实际族类、主机、行走、驱动及供应配置。代表性双护盾掘进机不替代连采机、悬臂掘进机、反井钻机或凿井机。质量是生产核算单位，不证明等效开挖性能。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.coal-or-rock-cutters-and-tunnelling-machinery-other-boring-and-sinking-machinery |
| classification_refs | CPC 3.0 44412；经审查的完整机械边界；代码不是规范身份 |
| covered_products | 采煤机；连采机、掘锚机及钻掘式采矿机；岩石切割悬臂掘进机；敞开/撑靴式及盾构隧道掘进机；反井、天井及向下钻孔钻机；有实际交付配置的凿井及其他钻机 |
| excluded_products | 独立井下输送机/提升机；起重机及独立运输车辆；独立供应的现场分离站；挖掘机/装载机；独立供应的备件或切削刀具；金属镗孔机床；钻孔/开挖服务；隧道衬砌制造及采矿生产 |
| representative_product | 明确声明刀盘、驱动、盾体及所含后配套的验收完整双护盾掘进机；仅作示例，不提供质量或配方默认值 |
| production_route | 经供应商核实的原料及外购模块；实际制造、加工及条件性处理；族类集成、电气/液压组装、工厂试验及交付 |
| market_state | 厂内验收的新完成机械，含有记录的初装液及已装刀具；分拆运输模块核对至同一完整配置 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供具备声明切割、隧道掘进、钻孔或凿井功能且有配置限定的机械 |
| How much | 1千克验收完整机械净产出；同时报告验收台数及实测质量 |
| How well | 满足实际采购图纸、切割/钻孔结构、接口、控制及有记录的厂内验收标准 |
| How long or cycle | 一个制造及厂内验收周期；运行寿命、开挖距离及产量保留为另有证据的下游情景 |
| reference_flow_link | reference_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 煤或岩石切削机及隧道掘进机，其他钻机及凿井机 `52fdea74-4411-454d-8b7f-e7bd43044586` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | 千克 |
| 必需限定信息 | 族类；型号/版本；序列号/配置；一体主机/行走；切割或钻孔机构；供应商/自制外购矩阵；确切供应模块/后配套/初装液；实际规格的名义功能指标；工厂边界及验收；地域及期间；经校准净质量；排除包装；排除现场设备及备件 |

数据包须声明每项必需限定信息。不得假定机械质量、服务寿命、材料牌号、良率、能耗或经验范围。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `material_species_basis` | cp_material、cp_waste、cp_water及cp_emission的物质与物种记录 | 质量 | kg | 外购合金、混合物、乳化液或污泥总质量不等于所含元素质量。每个项均须有其自身水分及元素/物种化验并采用相容干湿基准。该物质规则不得用于电力或运输。 |
| `energy_interface` | cp_energy记录 | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留原始kWh及仪表接口；仅采用经核实单位换算。燃料需实际供应量及热值，不得以电力等量替代。水体积需实际密度，不得采用通用筛查密度。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `factory_gate` | all inventory rows | 上游供应仅计一次，纳入至验收、修正、初装液及包装的全部可归属工厂步骤。排除声明边界后的运输、安装/开挖能量、开采煤岩、日常刀具更换、隧道管片、灌浆及全寿命服务，除非另建明确下游情景。工厂试验材料及能量仍须纳入。 | `sandvik-testing-2026`; `herrenknecht-follo-2018` |
| `configuration_boundary` | reference_product | 一体底盘、收集机构、内部皮带及已装操作设备仅在同一完整机械验收BOM中才纳入。独立销售输送机、起重机、运输车辆、分离站及刀具拥有独立身份。VSM供应的下放/绞车/控制/分离模块如明确纳入验收模块化产品BOM，则作为制造投入保留一次；其下游井水、岩石/泥浆及衬砌服务不纳入。自行切割机不因有履带而变为挖掘机。对有歧义的集成系统，在映射前核实图纸、销售对象及分类；不得静默改变范围。 | `un-cpc-2025`; `sandvik-cutting-2024`; `herrenknecht-double-shield`; `herrenknecht-vsm` |
| `make_buy_once` | all inventory rows | 按序列号/配置为结构、盾体、刀盘/滚筒、电机、齿轮、轴承、液压及控制建立自制/外购矩阵。外购完成模块所含材料、加工、电机及供应油液仅计一次；不得并行计入该负荷的原料。实际厂内制造采用材料/耗材/能量/产出记录，不得再计外购完成模块。供应商部分完成状态仅保留已完成上游步骤。 | `sandvik-zeltweg-manufacturing` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 工厂接收有成分及状态限定的原料或供应商完成模块 |
| starting_condition_role | 前景制造起始状态；仍需上游生产 |
| product_classification_scope | 经审查类别的完整机械；须声明供应集成配置 |
| recursive_input_rule | 将同类外购完成机械作为基体时，明确作为上游投入且既往制造仅计一次；仅建模实际新增作业，不得递归重建其完整制造清单 |
| upstream_dataset_requirement | 供应过程须匹配牌号、模块状态、电压、地域及交付接口；未解决供应方须披露，且阻止完整负荷声明 |
| disclosure | 实际工厂及边界；实施路线；外协步骤；外购模块；所含底盘/后配套；计量期间；验收/废品/返工；缺口及下游排除 |

### 族类及自制/外购矩阵

| 族类 | 实际组件 | 范围判定 |
| --- | --- | --- |
| 采煤/岩石切割机 | 滚筒或截割臂、履带/基座、收集及条件性一体锚杆装置 | 逐模块自制或外购；不得采用通用TBM盾体或盘形滚刀配方 |
| 隧道机械 | 刀盘、轴承/驱动、撑靴或盾体、推进、内部皮带及声明的拼装机/后配套 | 盾体及衬砌机构为条件性；排除独立隧道输送机及衬砌混凝土 |
| 其他钻孔/凿井 | 基座/导向柱、旋转驱动、推进缸、钻杆操作；实际竖井截割臂/泵/下放装置及明确所含控制/分离模块 | 反井及VSM反证仅隧道结构；现场基础、井筒环及分离服务属于下游 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | 结构制造与零件机加工 | conditional | 实际厂内板材切割、成形、焊接、车削、铣削、齿轮加工或磨削 | 前景制造 | 每 1 kg 参考流 |
| `treatment` | 条件性热处理及表面涂装 | conditional | 仅纳入有文件证明的厂内处理；外协成品零件的既往处理保留在供应商数据集中 | 前景制造 | 每 1 kg 参考流 |
| `cutters` | 采煤及岩石切割机械集成 | conditional | 连采机、掘锚机、钻掘式采矿机或悬臂式掘进机配置 | 前景制造 | 每 1 kg 参考流 |
| `tunnel` | 隧道掘进机集成 | conditional | 实际撑靴式或盾构式机械及声明的后配套配置；不得假定均有盾体 | 前景制造 | 每 1 kg 参考流 |
| `boring` | 其他钻孔及凿井机械集成 | conditional | 实际反井、天井、向下钻孔、竖井掘进或钻机配置 | 前景制造 | 每 1 kg 参考流 |
| `assembly` | 通用传动、液压及控制集成 | required | 每台机械；仅具体化实际模块及自制/外购接口 | 前景制造 | 每 1 kg 参考流 |
| `test` | 厂内验收、修正及交付准备 | required | 所有验收机械；交付前实际负载、泄漏、功能、控制及安全检测 | 前景制造 | 每 1 kg 参考流 |
| `utilities` | 剩余共享服务及条件性厂内发能 | conditional | 仅计入同一计量期间扣除过程和试验分摊后的未分配负荷 | 前景制造 | 每 1 kg 参考流 |
| `release` | 包装及工厂交付 | required | 所有验收配置；分拆运输模块须核对至验收完整机械 | 前景制造 | 每 1 kg 参考流 |

仅激活实际路线。卡片为具体条件性交换，不是默认BOM或封闭清单。对每项实际遗漏合金、加工耗材、气体、外购热、化学品、已装模块、排放或残余添加独立行及其采集和身份依据。处理仅纳入实际配方及已完成阶段。共享服务卡片仅包含剩余；重复电力卡片须核对至一个场址平衡。

### 过程：结构制造与零件机加工（`fabrication`）

实际厂内板材切割、成形、焊接、车削、铣削、齿轮加工或磨削

#### 输入

##### 产品流

###### 钢板（`plate`）

实际领用热轧低合金高强度板。仅在实际供应牌号及接口有文件证明为Q345/Q355或经独立核实匹配的低合金高强度族类时采用此UUID。S355、AR400、不锈钢或其他未核实牌号须采用独立经核实身份或未解决行；声明实际牌号、炉号、厚度及供应商。OEM制造来源及此UUID均不设置牌号默认值

- 选定流: 钢板 `421db3a5-394d-410b-8ebf-af23a37fc878`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `sandvik-zeltweg-manufacturing`

所引OEM证据仅支持条件性结构或制造阶段，不证明本项确切牌号、配方、模块供应状态或数量。激活该行前须按cp_material保留实际供应商/场址规格。

###### 合金钢锻造轴坯（`forged_blank`）

外购待加工轴坯；保留合金及供应热处理状态

- 选定流: 合金钢锻造轴坯
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `sandvik-zeltweg-manufacturing`

所引OEM证据仅支持条件性结构或制造阶段，不证明本项确切牌号、配方、模块供应状态或数量。激活该行前须按cp_material保留实际供应商/场址规格。

###### 碳钢电弧焊焊丝（`weld_wire`）

实际合格焊接工艺采用碳钢丝；记录型号及成分

- 选定流: 碳钢电弧焊焊丝
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `sandvik-zeltweg-manufacturing`

所引OEM证据仅支持条件性结构或制造阶段，不证明本项确切牌号、配方、模块供应状态或数量。激活该行前须按cp_material保留实际供应商/场址规格。

###### 二氧化碳焊接保护气（`shield_gas`）

实际使用CO2保护；混合保护气需另建有成分限定并经核实的流

- 选定流: 二氧化碳焊接保护气
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `sandvik-zeltweg-manufacturing`

所引OEM证据仅支持条件性结构或制造阶段，不证明本项确切牌号、配方、模块供应状态或数量。激活该行前须按cp_material保留实际供应商/场址规格。

###### 水混合型矿物油机加工浓缩液（`coolant`）

实际冷却配方采用矿物油浓缩液；浓度与稀释水分开记录

- 选定流: 水混合型矿物油机加工浓缩液
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `sandvik-zeltweg-manufacturing`

所引OEM证据仅支持条件性结构或制造阶段，不证明本项确切牌号、配方、模块供应状态或数量。激活该行前须按cp_material保留实际供应商/场址规格。

###### 经处理的工艺稀释水（`dilution_water`）

厂内混配冷却液；记录水源、处理及对应温度的实测密度

- 选定流: 经处理的工艺稀释水
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_water。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_water`
- 来源: `sandvik-zeltweg-manufacturing`

###### 交流电（`fabrication_power`）

仅适用于中国1–35千伏电网供应；实际过程分摊电量，公用工程仅计剩余；保留电压、年份及供应商；其他接口须采用另一个经核实身份

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_energy`
- 来源: `sandvik-zeltweg-manufacturing`

#### 输出

##### 废物流

###### 合金钢机加工屑（`swarf`）

切屑外送回收；区分附着冷却液、水及合金化验

- 选定流: 合金钢机加工屑
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_waste`
- 来源: `sandvik-zeltweg-manufacturing`

###### 废矿物油机加工乳化液（`spent_coolant`）

废乳化液转交处理；实测油分和水分不是钢质量

- 选定流: 废矿物油机加工乳化液
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_waste`
- 来源: `sandvik-zeltweg-manufacturing`

###### 捕集含铁焊接滤尘（`weld_dust`）

捕集滤尘转交处理；保留Fe及其他实际元素化验

- 选定流: 捕集含铁焊接滤尘
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_waste`
- 来源: `sandvik-zeltweg-manufacturing`

### 过程：条件性热处理及表面涂装（`treatment`）

仅纳入有文件证明的厂内处理；外协成品零件的既往处理保留在供应商数据集中

#### 输入

##### 产品流

###### 热处理用管道天然气（`gas_heat`）

实际厂内燃气炉；需供应气组成及热值

- 选定流: 热处理用管道天然气
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_energy`
- 来源: `sandvik-zeltweg-manufacturing`

###### 矿物油淬火液（`quench_oil`）

实际油淬配方；复用浴液转移为内部流，补充量为外部流

- 选定流: 矿物油淬火液
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `sandvik-zeltweg-manufacturing`

所引OEM证据仅支持条件性结构或制造阶段，不证明本项确切牌号、配方、模块供应状态或数量。激活该行前须按cp_material保留实际供应商/场址规格。

###### 热处理氮气（`nitrogen`）

实际炉气氛含外供氮气

- 选定流: 热处理氮气
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `sandvik-zeltweg-manufacturing`

所引OEM证据仅支持条件性结构或制造阶段，不证明本项确切牌号、配方、模块供应状态或数量。激活该行前须按cp_material保留实际供应商/场址规格。

###### 双组分环氧防护涂料（`epoxy`）

实际施工此外购配方；保留SDS、树脂/固化剂比例及溶剂比例；不得假定普遍使用该涂料

- 选定流: 双组分环氧防护涂料
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `sandvik-zeltweg-manufacturing`

所引OEM证据仅支持条件性结构或制造阶段，不证明本项确切牌号、配方、模块供应状态或数量。激活该行前须按cp_material保留实际供应商/场址规格。

###### 甲乙酮清洗溶剂（`mek`）

实际场址清洗配方采用甲乙酮；不是默认溶剂

- 选定流: 甲乙酮清洗溶剂
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `sandvik-zeltweg-manufacturing`

所引OEM证据仅支持条件性结构或制造阶段，不证明本项确切牌号、配方、模块供应状态或数量。激活该行前须按cp_material保留实际供应商/场址规格。

###### 经处理的涂装工艺用水（`coat_water`）

实际水性清洗或漂洗

- 选定流: 经处理的涂装工艺用水
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_water。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_water`
- 来源: `sandvik-zeltweg-manufacturing`

###### 交流电（`treatment_power`）

仅适用于中国1–35千伏电网供应；实际过程分摊电量，公用工程仅计剩余；保留电压、年份及供应商；其他接口须采用另一个经核实身份

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_energy`
- 来源: `sandvik-zeltweg-manufacturing`

#### 输出

##### 废物流

###### 环氧涂装处理污泥（`coat_sludge`）

实际收集污泥转交处理；分别计量水、涂料及所含元素

- 选定流: 环氧涂装处理污泥
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_waste`
- 来源: `sandvik-zeltweg-manufacturing`

##### 基本流

###### 甲乙酮，排放至空气（`mek_air`）

物种分辨计量或有依据的溶剂平衡证明实际未捕集甲乙酮

- 选定流: 甲乙酮，排放至空气
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_emission`
- 来源: `sandvik-zeltweg-manufacturing`

### 过程：采煤及岩石切割机械集成（`cutters`）

连采机、掘锚机、钻掘式采矿机或悬臂式掘进机配置

#### 输入

##### 产品流

###### 完整采煤截割滚筒模块（`cut_drum`）

安装外购专用滚筒；声明截齿材料及供应传动范围

- 选定流: 完整采煤截割滚筒模块
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `sandvik-cutting-2024`

所引OEM证据仅支持条件性结构或制造阶段，不证明本项确切牌号、配方、模块供应状态或数量。激活该行前须按cp_material保留实际供应商/场址规格。

###### 完整悬臂式掘进机截割臂模块（`cut_boom`）

安装外购截割臂，而非厂内制造其结构及传动零件

- 选定流: 完整悬臂式掘进机截割臂模块
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `sandvik-cutting-2024`

所引OEM证据仅支持条件性结构或制造阶段，不证明本项确切牌号、配方、模块供应状态或数量。激活该行前须按cp_material保留实际供应商/场址规格。

###### 完整钢制履带模块（`track`）

验收机械包含一体履带；单独销售的运输车辆不纳入

- 选定流: 完整钢制履带模块
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `sandvik-cutting-2024`

所引OEM证据仅支持条件性结构或制造阶段，不证明本项确切牌号、配方、模块供应状态或数量。激活该行前须按cp_material保留实际供应商/场址规格。

###### 完整连采机收集臂模块（`gathering`）

实际一体收集设备作为机械部分供应

- 选定流: 完整连采机收集臂模块
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `sandvik-cutting-2024`

所引OEM证据仅支持条件性结构或制造阶段，不证明本项确切牌号、配方、模块供应状态或数量。激活该行前须按cp_material保留实际供应商/场址规格。

###### 交流电（`cutters_power`）

仅适用于中国1–35千伏电网供应；实际过程分摊电量，公用工程仅计剩余；保留电压、年份及供应商；其他接口须采用另一个经核实身份

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_energy`
- 来源: `sandvik-cutting-2024`

### 过程：隧道掘进机集成（`tunnel`）

实际撑靴式或盾构式机械及声明的后配套配置；不得假定均有盾体

#### 输入

##### 产品流

###### 完整隧道掘进刀盘模块（`cutterhead`）

外购刀盘，含声明的已装刀具；否则采用实际制造BOM且仅计一次

- 选定流: 完整隧道掘进刀盘模块
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `herrenknecht-double-shield`

所引OEM证据仅支持条件性结构或制造阶段，不证明本项确切牌号、配方、模块供应状态或数量。激活该行前须按cp_material保留实际供应商/场址规格。

###### 完整隧道掘进机主轴承模块（`bearing`）

外购主轴承；声明密封及润滑剂供应状态

- 选定流: 完整隧道掘进机主轴承模块
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `herrenknecht-double-shield`

所引OEM证据仅支持条件性结构或制造阶段，不证明本项确切牌号、配方、模块供应状态或数量。激活该行前须按cp_material保留实际供应商/场址规格。

###### 完整钢制盾体模块（`shield`）

实际有盾路线外购此模块；敞开式撑靴机械不得假定含盾体

- 选定流: 完整钢制盾体模块
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `herrenknecht-double-shield`

所引OEM证据仅支持条件性结构或制造阶段，不证明本项确切牌号、配方、模块供应状态或数量。激活该行前须按cp_material保留实际供应商/场址规格。

###### 完整隧道管片拼装机模块（`erector`）

配置包含验收的一体拼装机；后续使用的混凝土管片不纳入

- 选定流: 完整隧道管片拼装机模块
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `herrenknecht-double-shield`

所引OEM证据仅支持条件性结构或制造阶段，不证明本项确切牌号、配方、模块供应状态或数量。激活该行前须按cp_material保留实际供应商/场址规格。

###### 完整隧道掘进机内部皮带模块（`machine_belt`）

验收BOM包含内部输送皮带；独立隧道输送系统不纳入

- 选定流: 完整隧道掘进机内部皮带模块
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `herrenknecht-double-shield`

所引OEM证据仅支持条件性结构或制造阶段，不证明本项确切牌号、配方、模块供应状态或数量。激活该行前须按cp_material保留实际供应商/场址规格。

###### 交流电（`tunnel_power`）

仅适用于中国1–35千伏电网供应；实际过程分摊电量，公用工程仅计剩余；保留电压、年份及供应商；其他接口须采用另一个经核实身份

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_energy`
- 来源: `herrenknecht-double-shield`

### 过程：其他钻孔及凿井机械集成（`boring`）

实际反井、天井、向下钻孔、竖井掘进或钻机配置

#### 输入

##### 产品流

###### 完整反井钻机旋转驱动模块（`rotary`）

外购旋转驱动；记录变频/电驱动或液压配置

- 选定流: 完整反井钻机旋转驱动模块
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `herrenknecht-raise-2024`; `herrenknecht-vsm`

所引OEM证据仅支持条件性结构或制造阶段，不证明本项确切牌号、配方、模块供应状态或数量。激活该行前须按cp_material保留实际供应商/场址规格。

###### 完整钢制反井钻机导向柱模块（`column`）

外购导向柱而非厂内制造

- 选定流: 完整钢制反井钻机导向柱模块
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `herrenknecht-raise-2024`; `herrenknecht-vsm`

所引OEM证据仅支持条件性结构或制造阶段，不证明本项确切牌号、配方、模块供应状态或数量。激活该行前须按cp_material保留实际供应商/场址规格。

###### 完整钻机钻杆操作模块（`pipe_handler`）

实际供应验收的机械化钻杆操作装置

- 选定流: 完整钻机钻杆操作模块
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `herrenknecht-raise-2024`; `herrenknecht-vsm`

所引OEM证据仅支持条件性结构或制造阶段，不证明本项确切牌号、配方、模块供应状态或数量。激活该行前须按cp_material保留实际供应商/场址规格。

###### 合金钢钻杆（`rod`）

仅计入验收交付配置包含的钻杆；后续耗材更换在边界外

- 选定流: 合金钢钻杆
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `herrenknecht-raise-2024`; `herrenknecht-vsm`

所引OEM证据仅支持条件性结构或制造阶段，不证明本项确切牌号、配方、模块供应状态或数量。激活该行前须按cp_material保留实际供应商/场址规格。

###### 完整凿井截割臂模块（`shaft_boom`）

实际VSM或竖井掘进配置含此组件

- 选定流: 完整凿井截割臂模块
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `herrenknecht-raise-2024`; `herrenknecht-vsm`

所引OEM证据仅支持条件性结构或制造阶段，不证明本项确切牌号、配方、模块供应状态或数量。激活该行前须按cp_material保留实际供应商/场址规格。

###### 完整潜水竖井排渣泵（`muck_pump`）

验收凿井机械含此泵；独立现场分离站另行声明

- 选定流: 完整潜水竖井排渣泵
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `herrenknecht-raise-2024`; `herrenknecht-vsm`

所引OEM证据仅支持条件性结构或制造阶段，不证明本项确切牌号、配方、模块供应状态或数量。激活该行前须按cp_material保留实际供应商/场址规格。

###### 完整凿井下放单元（`lowering`）

实际下放单元纳入验收模块化机械供应；现场基础及井筒衬砌仍属下游

- 选定流: 完整凿井下放单元
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `herrenknecht-raise-2024`; `herrenknecht-vsm`

所引OEM证据仅支持条件性结构或制造阶段，不证明本项确切牌号、配方、模块供应状态或数量。激活该行前须按cp_material保留实际供应商/场址规格。

###### 完整凿井回收绞车（`winch`）

实际回收绞车纳入验收配置；独立起重机不是该机械

- 选定流: 完整凿井回收绞车
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `herrenknecht-raise-2024`; `herrenknecht-vsm`

所引OEM证据仅支持条件性结构或制造阶段，不证明本项确切牌号、配方、模块供应状态或数量。激活该行前须按cp_material保留实际供应商/场址规格。

###### 完整竖井排渣分离模块（`separation`）

仅在验收交付模块化机械BOM明确含此模块时纳入；独立供应分离站拥有独立身份。所含模块制造仅计一次；运行井水/泥浆/岩石服务属于下游

- 选定流: 完整竖井排渣分离模块
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `herrenknecht-raise-2024`; `herrenknecht-vsm`

所引OEM证据仅支持条件性结构或制造阶段，不证明本项确切牌号、配方、模块供应状态或数量。激活该行前须按cp_material保留实际供应商/场址规格。

###### 交流电（`boring_power`）

仅适用于中国1–35千伏电网供应；实际过程分摊电量，公用工程仅计剩余；保留电压、年份及供应商；其他接口须采用另一个经核实身份

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_energy`
- 来源: `herrenknecht-raise-2024`; `herrenknecht-vsm`

### 过程：通用传动、液压及控制集成（`assembly`）

每台机械；仅具体化实际模块及自制/外购接口

#### 输入

##### 产品流

###### 完整工业电驱动电动机（`motor`）

仅纳入不嵌入外购驱动模块的独立外购电机；记录功率、结构及供应商

- 选定流: 完整工业电驱动电动机
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `sandvik-zeltweg-manufacturing`

所引OEM证据仅支持条件性结构或制造阶段，不证明本项确切牌号、配方、模块供应状态或数量。激活该行前须按cp_material保留实际供应商/场址规格。

###### 完整机械行星齿轮箱（`gearbox`）

实际行星齿轮箱且未计入旋转驱动内部；记录速比及交付状态

- 选定流: 完整机械行星齿轮箱
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `sandvik-zeltweg-manufacturing`

所引OEM证据仅支持条件性结构或制造阶段，不证明本项确切牌号、配方、模块供应状态或数量。激活该行前须按cp_material保留实际供应商/场址规格。

###### 完整液压推进缸（`cylinder`）

实际液压缸独立外购；不得重复计入活塞、杆、筒的原材料

- 选定流: 完整液压推进缸
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `sandvik-zeltweg-manufacturing`

所引OEM证据仅支持条件性结构或制造阶段，不证明本项确切牌号、配方、模块供应状态或数量。激活该行前须按cp_material保留实际供应商/场址规格。

###### 增强橡胶液压软管（`hose`）

实际独立安装软管；记录橡胶、增强层及接头

- 选定流: 增强橡胶液压软管
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `sandvik-zeltweg-manufacturing`

所引OEM证据仅支持条件性结构或制造阶段，不证明本项确切牌号、配方、模块供应状态或数量。激活该行前须按cp_material保留实际供应商/场址规格。

###### 完整可编程逻辑控制器（`plc`）

实际控制单元；分别声明传感器、软硬件及供应柜范围

- 选定流: 完整可编程逻辑控制器
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `sandvik-zeltweg-manufacturing`

所引OEM证据仅支持条件性结构或制造阶段，不证明本项确切牌号、配方、模块供应状态或数量。激活该行前须按cp_material保留实际供应商/场址规格。

###### 电子压力传感器（`sensor`）

实际独立外购且未嵌入控制组件的压力传感器

- 选定流: 电子压力传感器
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `sandvik-zeltweg-manufacturing`

所引OEM证据仅支持条件性结构或制造阶段，不证明本项确切牌号、配方、模块供应状态或数量。激活该行前须按cp_material保留实际供应商/场址规格。

###### 铜导体电力电缆（`cable`）

实际电缆；保留导体截面、绝缘及电压

- 选定流: 铜导体电力电缆
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `sandvik-zeltweg-manufacturing`

所引OEM证据仅支持条件性结构或制造阶段，不证明本项确切牌号、配方、模块供应状态或数量。激活该行前须按cp_material保留实际供应商/场址规格。

###### 初装矿物油液压油（`hydraulic_fill`）

实际合格矿物油牌号；模块内已供应油液不得作为第二个外部投入

- 选定流: 初装矿物油液压油
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `sandvik-zeltweg-manufacturing`

所引OEM证据仅支持条件性结构或制造阶段，不证明本项确切牌号、配方、模块供应状态或数量。激活该行前须按cp_material保留实际供应商/场址规格。

###### 锂皂矿物油润滑脂（`grease`）

实际批准润滑脂；保留牌号及留存量与消耗量

- 选定流: 锂皂矿物油润滑脂
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `sandvik-zeltweg-manufacturing`

所引OEM证据仅支持条件性结构或制造阶段，不证明本项确切牌号、配方、模块供应状态或数量。激活该行前须按cp_material保留实际供应商/场址规格。

###### 交流电（`assembly_power`）

仅适用于中国1–35千伏电网供应；实际过程分摊电量，公用工程仅计剩余；保留电压、年份及供应商；其他接口须采用另一个经核实身份

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_energy`
- 来源: `sandvik-zeltweg-manufacturing`

### 过程：厂内验收、修正及交付准备（`test`）

所有验收机械；交付前实际负载、泄漏、功能、控制及安全检测

#### 输入

##### 产品流

###### 经处理的工厂液压试验用水（`test_water`）

实际充水厂内试验；复用库存及返流分开记录

- 选定流: 经处理的工厂液压试验用水
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_water。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_water`
- 来源: `sandvik-testing-2026`; `herrenknecht-follo-2018`

###### 工厂试验矿物油液压油（`test_oil`）

实际试验回路采用油；区分交付留存油、复用试验台油及排出废油

- 选定流: 工厂试验矿物油液压油
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `sandvik-testing-2026`; `herrenknecht-follo-2018`

所引OEM证据仅支持条件性结构或制造阶段，不证明本项确切牌号、配方、模块供应状态或数量。激活该行前须按cp_material保留实际供应商/场址规格。

###### 工厂切割试验岩块（`test_rock`）

实际验收试验消耗有记录的岩块；记录岩性并仅计制造试验数量

- 选定流: 工厂切割试验岩块
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `sandvik-testing-2026`; `herrenknecht-follo-2018`

所引OEM证据仅支持条件性结构或制造阶段，不证明本项确切牌号、配方、模块供应状态或数量。激活该行前须按cp_material保留实际供应商/场址规格。

###### 交流电（`test_power`）

仅适用于中国1–35千伏电网供应；实际过程分摊电量，公用工程仅计剩余；保留电压、年份及供应商；其他接口须采用另一个经核实身份

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_energy`
- 来源: `sandvik-testing-2026`; `herrenknecht-follo-2018`

#### 输出

##### 废物流

###### 工厂切割试验岩石残料（`test_rock_waste`）

实际厂内试验残料外送；生产开挖岩石不纳入

- 选定流: 工厂切割试验岩石残料
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_waste`
- 来源: `sandvik-testing-2026`; `herrenknecht-follo-2018`

###### 废工厂试验矿物液压油（`spent_oil`）

实际外送油液；内部回收试验油不是废物

- 选定流: 废工厂试验矿物液压油
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_waste`
- 来源: `sandvik-testing-2026`; `herrenknecht-follo-2018`

###### 含油工厂试验废水（`test_effluent`）

实际试验水排出至处理；分别计量水、油及所含金属

- 选定流: 含油工厂试验废水
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_waste`
- 来源: `sandvik-testing-2026`; `herrenknecht-follo-2018`

### 过程：剩余共享服务及条件性厂内发能（`utilities`）

仅计入同一计量期间扣除过程和试验分摊后的未分配负荷

#### 输入

##### 产品流

###### 经处理的工厂剩余服务用水（`service_water`）

仅计入扣除制造、涂装及试验水分摊后的可归属剩余供水

- 选定流: 经处理的工厂剩余服务用水
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_water。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_water`
- 来源:

###### 工厂发电机柴油（`diesel`）

仅实际厂内发电；外购电力的外部发电排放仅计一次

- 选定流: 工厂发电机柴油
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_energy`
- 来源:

###### 交流电（`utilities_power`）

仅适用于中国1–35千伏电网供应；实际过程分摊电量，公用工程仅计剩余；保留电压、年份及供应商；其他接口须采用另一个经核实身份

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_energy`
- 来源:

#### 输出

##### 基本流

###### 化石二氧化碳，排放至空气（`fossil_co2`）

实际厂内燃烧并有燃料碳及氧化证据；外购电力在此无直接烟囱CO2

- 选定流: 化石二氧化碳，排放至空气
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_emission`
- 来源:

###### 二氧化氮，排放至空气（`no2`）

实际物种分辨烟气证据；燃料碳不能证明NO2

- 选定流: 二氧化氮，排放至空气
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_emission`
- 来源:

###### 一氧化碳，排放至空气（`co`）

实际CO烟气计量或适用的有文件因子；不得仅由碳闭合推断

- 选定流: 一氧化碳，排放至空气
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_emission`
- 来源:

### 过程：包装及工厂交付（`release`）

所有验收配置；分拆运输模块须核对至验收完整机械

#### 输入

##### 产品流

###### 锯切针叶木运输支撑（`timber`）

实际运输支撑不计入机械净质量；追踪复用所有权

- 选定流: 锯切针叶木运输支撑
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `herrenknecht-follo-2018`

所引OEM证据仅支持条件性结构或制造阶段，不证明本项确切牌号、配方、模块供应状态或数量。激活该行前须按cp_material保留实际供应商/场址规格。

###### 低密度聚乙烯运输薄膜（`film`）

实际运输包膜不计入参考净质量

- 选定流: 低密度聚乙烯运输薄膜
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `herrenknecht-follo-2018`

所引OEM证据仅支持条件性结构或制造阶段，不证明本项确切牌号、配方、模块供应状态或数量。激活该行前须按cp_material保留实际供应商/场址规格。

###### 交流电（`release_power`）

仅适用于中国1–35千伏电网供应；实际过程分摊电量，公用工程仅计剩余；保留电压、年份及供应商；其他接口须采用另一个经核实身份

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_energy`
- 来源: `herrenknecht-follo-2018`

#### 输出

##### 产品流

###### 煤或岩石切削机及隧道掘进机，其他钻机及凿井机（`reference_product`）

工厂交付的验收完整机械配置；产品UUID不证明任何供应商过程

- 选定流: 煤或岩石切削机及隧道掘进机，其他钻机及凿井机 `52fdea74-4411-454d-8b7f-e7bd43044586`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则: 1 千克
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_mass`
- 来源: `herrenknecht-follo-2018`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_rejects` | all inventory rows | 先分配具体工单及仪表，再进行分配。所有可归属废品、返工及重复工厂试验均保留在Q；分母仅包括同一配置N台验收机械及其经校准净质量。不得混合不同族类，亦不得采用包装/废品质量。共享加工采用实测机器时间、试验时长或其他有文件物理原因，且须完整核对。 |  |
| `scrap_transfer` | swarf; weld_dust; coat_sludge | 记录每项外部回收/处理转移、组成及实际去向。内部返工及复用油液转移作为成对内部记录抵消。无明确证据及独立披露的下游方法不得给予避免原生金属或能量的抵扣。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | release | reference_product | 验收/称重 | 型号；配置；序列号；验收净质量 M；验收N；验收质量之和D；称量皮重；交付留存液 | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 每台验收机械 | 同一验收群组及Q期间 | 工厂交付验收配置 | 每台验收净质量 | 秤校准、皮重、模块/BOM核对及验收签字 |
| `cp_material` | all | specific raw stock/module/chemical | 领料/BOM | 行id；牌号；配方；组成；水分；供应状态；期初/期末库存；采购/领用/返料；序列号/工单；Q；N；D | 将入库、领料及返料核对至工单及自制/外购BOM；称量实际模块与物料，保留废品/返工量。每个物质平衡项均含其自身化验及干湿基准；不得对公用能量进行物质化验。Q为含废品/返工的可归属期间交换；仅对此配置求q_item = Q/N及M = D/N。 | kg | 每次领料及期间结账 | 匹配生产及验收期间 | 实际工厂步骤及供应接口 | 分配物料 / 验收机器数量 | 证书、SDS、收货单、经校准称量及库存核对 |
| `cp_energy` | all | individual electricity/fuel exchange | 仪表/燃料台账 | 行id；输入/发能/外送；电压/电网/年份；分表；场址总表；期间；Q；工单/负载时长；储能变化；N；D | 读取经校准过程仪表及同期间场址平衡；保留实测试验及返工负荷。采用经核实单位组将kWh换算MJ；燃料保留实际质量/体积及实测热值。仅按实测因果活动分配剩余未分配服务。Q含可归属废品/返工负荷；同配置q_item = Q/N。 | MJ | 连续仪表及每次试验/工单 | 与N及D相同期间 | 工厂仪表边界；实际供应电压及地域 | 分配电量 / 验收机器数量 | 仪表校准、电力账单、燃料证书及完整场址核对 |
| `cp_water` | all | each water exchange | 水表/浴液记录 | 行id；水源/处理；密度/温度；各物料投入含水；留存水；库存；返流；废水；蒸发；实际反应水；Q；N；D | 计量每项外部供水及排水；按实测密度换算实际体积。对每个物理项独立采样水分；保留成对内部返流及实际库存/反应记录。不得假定通用水密度。Q含同配置可归属废品/返工需求；q_item = Q/N。 | kg | 每批/每次试验及匹配期间 | 与物料及验收质量同期间 | 实际工厂供应、试验回路及处理转移 | 分配水量 / 验收机器数量 | 仪表校准、实测密度、水分样品及闭合不确定度 |
| `cp_waste` | all | one specific residue per row | 废物转移/称重 | 行id；总/湿/干质量；水分；各所含元素化验；附着油；期初/期末库存；成对返工返流；去向；Q；N；D | 称量外部转移并保留接收方处理接口；对每项残余包括污泥及废水分别采样水分、油及实际金属。内部返回废料/油液为成对转移，不是外部抵扣。Q为含废品的可归属期间外部废物；q_item = Q/N。 | kg | 每次转移及期间库存 | 同一生产期间 | 工厂至处理转移 | 分配废物 / 验收机器数量 | 地磅校准、实验室化验、水分基准及接收凭证 |
| `cp_emission` | all | one elementary species and compartment | 物种计量/平衡 | 物种；介质；烟囱/无组织点；采样方法；气流/时间；捕集/销毁；燃料组成；各自比例；库存；非空气残余；Q；N；D | 采用实际物种分辨采样及实测气量/时间，或有文件且适用的物种因子/平衡及不确定度。纳入各自溶剂比例、产品留存、回收、捕集介质、实际销毁及残余；CO和NO2需独立物种证据。Q为含试验/返工的可归属实测期间释放；q_item = Q/N。 | kg | 代表运行条件及每项相关试验 | 匹配生产期间 | 实际治理后/无组织工厂边界 | 分配排放 / 验收机器数量 | 采样校准、物种身份、因子适用性及合成不确定度 |

分拆运输时保留经校准模块净质量记录，抵消重复附属件，并核对完整验收BOM，不得排除所含交付留存液。全部期间Q记录保留废品及返工负荷，且采用与N和D相同配置、验收群组及期间。计算q_item = Q/N、M = D/N；最终q_item/M等于Q/D。不得用一台代表机械质量替代D。采集表汇总标签为每台验收机械中间基准；计算表规定最终每参考流基准；数据包保留原始总量、库存、分配及成对内部返流。

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = 每台验收成品机器的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |
| `water_balance` | dilution_water; coat_water; test_water; service_water | 在一个匹配期间，将投入水及投入含水、期初库存、实际反应生成量，与产品留存水、每项废物水分、废水中的水、蒸发、期末库存及实际反应消耗量闭合。采用每个实际项自身水分，抵消成对内部冷却液/试验水返流，并保留仪表、采样、密度及分配的合成不确定度。对超出该证据的残差须调查；不得采用通用容差或截零。 | cp_water; cp_material; cp_waste | 水平衡及不确定度 |  |
| `metal_balance` | plate; forged_blank; swarf; weld_dust; coat_sludge | 对每种实际金属独立闭合，对每个投入、验收产品、废料、粉尘、污泥、废水、释放及期初/期末库存采用各项自身匹配化验及干湿基准；包含实际反应分配并抵消成对内部转移。产品BOM金属质量及废物总质量不得自动等于所含Fe、Mn、Ni或其他元素。残差须与称量、化验、采样及分配合成不确定度比较；须调查，不得虚构良率。 | cp_material; cp_waste; cp_emission; cp_mass | 各所含金属平衡及不确定度 |  |
| `solvent_oil_balance` | mek; epoxy; hydraulic_fill; test_oil | 采用各项自身组成比例，分别平衡每种实际溶剂及油液，纳入产品留存、期初/期末库存、回收返流、捕集介质、实际销毁及非空气残余。内部回收液为成对转移，不是新增外部投入或虚构废物。总VOC结果不能证明甲乙酮；须披露未解决物种。 | cp_material; cp_waste; cp_emission | 物种平衡及不确定度 |  |
| `utility_balance` | all inventory rows | 在相同期间及单位下，将外购输入、实测厂内发能及储能释放，与已分摊制造/处理/集成/组装/试验/交付负荷、外送、储能充入及仅未分配剩余共享服务核对。仅对剩余采用实测因果分配。不得将工厂总表加在分表上；须结合仪表及时间不确定度调查负残差，不得截零。燃料、实际发能及烟囱物种分开；仅碳平衡不能证明CO或NO2。 | cp_energy; cp_water | 已分配及剩余负荷的核对分配 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `configuration_records` | all inventory rows | 保留独立族类/模块状态、实际供应商数据及自制/外购台账；产品身份不是供应商证据 | 图纸、BOM、采购订单及直接身份 |
| `period_completeness` | all inventory rows | 披露每项缺失交换、供应方及数量；不得采用默认范围或以零替代。按实际合成不确定度核实全部公用工程分摊及每项物理闭合 | 经校准记录、样品、闭合台账及缺口登记 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `accepted_denominator` | all inventory rows | 核实族类/配置、验收N > 0、可追溯经校准净质量及验收记录与Q期间和BOM匹配；各非参考行均应用normalize_mass；1千克产出不含运输包装或废品。缺失质量或分配为未知，不是零。 |  |
| `route_identity` | all inventory rows | 每项激活物理交换均须有一个确切物质、牌号/模块/状态及接口、供应商或处理去向；对每项实际遗漏交换添加独立原子行。not_applicable须有不存在证据，零须有计量，未知须声明缺口。UUID不能证明已完成上游负荷；中国中压电力不能代表其他电网或电压。 |  |
| `water_closure` | dilution_water; coat_water; test_water; service_water; spent_coolant; coat_sludge; test_effluent | 在一个匹配期间，将投入水及投入含水、期初库存、实际反应生成量，与产品留存水、每项废物水分、废水中的水、蒸发、期末库存及实际反应消耗量闭合。采用每个实际项自身水分，抵消成对内部冷却液/试验水返流，并保留仪表、采样、密度及分配的合成不确定度。对超出该证据的残差须调查；不得采用通用容差或截零。 |  |
| `contained_metal_closure` | plate; forged_blank; weld_wire; swarf; weld_dust; coat_sludge; test_effluent; reference_product | 对每种实际金属独立闭合，对每个投入、验收产品、废料、粉尘、污泥、废水、释放及期初/期末库存采用各项自身匹配化验及干湿基准；包含实际反应分配并抵消成对内部转移。产品BOM金属质量及废物总质量不得自动等于所含Fe、Mn、Ni或其他元素。残差须与称量、化验、采样及分配合成不确定度比较；须调查，不得虚构良率。 |  |
| `solvent_and_oil_closure` | coolant; quench_oil; epoxy; mek; hydraulic_fill; grease; test_oil; spent_oil; mek_air | 采用各项自身组成比例，分别平衡每种实际溶剂及油液，纳入产品留存、期初/期末库存、回收返流、捕集介质、实际销毁及非空气残余。内部回收液为成对转移，不是新增外部投入或虚构废物。总VOC结果不能证明甲乙酮；须披露未解决物种。 |  |
| `utility_reconciliation` | all inventory rows | 在相同期间及单位下，将外购输入、实测厂内发能及储能释放，与已分摊制造/处理/集成/组装/试验/交付负荷、外送、储能充入及仅未分配剩余共享服务核对。仅对剩余采用实测因果分配。不得将工厂总表加在分表上；须结合仪表及时间不确定度调查负残差，不得截零。燃料、实际发能及烟囱物种分开；仅碳平衡不能证明CO或NO2。 |  |
| `test_use_split` | test; reference_product | 保留交付前试验电力、水、油、试验介质、不合格零件及修正作业；记录验收日期。后续开挖进料、排岩、支护混凝土、刀具更换及运行能量仅属于另行声明的使用/服务模型。OEM项目性能及刀具质量不是制造默认值。 | `sandvik-testing-2026`; `herrenknecht-follo-2018` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景制造数据包 |
| downstream_use | secondary_dataset；background_dataset；process及lifecyclemodel投影保留相同边界 |
| allowed_use | 有配置限定的工厂制造及明确连接的上游生产；另有证据的下游情景 |
| excluded_use | 仅按每千克质量认定等效开挖服务；未说明车队平均；无运行情景的寿命影响；供应方未解决时声称完整上游 |
| required_metadata | 必需限定信息；供应/自制外购边界；N、D及M；Q期间；实际路线；验收及不确定度 |
| required_quality_disclosure | 每项未解决UUID/供应方、遗漏交换、来源/配方及定量缺口；not_applicable/零/未知的区别及实测闭合 |
| update_trigger | 族类/型号/BOM、供应商或处理状态、试验边界、电压/地域、工厂路线或验收标准变化 |

## 11. 数据源

| 来源id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-2025` | official_guidance | UN Statistics Division, CPC Version 3.0 Explanatory Notes (30 June 2025), p.234, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 完整类别及相邻独立井下输送与土方机械；标题证明分类，不证明配方 |
| `sandvik-cutting-2024` | handbook | Sandvik Cutting Catalogue 2024, 2024, https://www.rocktechnology.sandvik/siteassets/product-documents/rock-tools/cutting/sandvik_cutting_catalog_2024.pdf | 印刷第13页/PDF第7页：连采/掘锚/钻掘采矿机及悬臂掘进机；一体履带、切割及控制替代结构；不采用数值默认 |
| `sandvik-zeltweg-manufacturing` | handbook | Sandvik Zeltweg Contract Manufacturing, publisher brochure; acquired 2026-10-02, https://www.mining.sandvik/globalassets/products/mechanical-cutting-equipment/pdf/lohnfertigung-brochure-english.pdf | 未注明日期手册第3及6页：实际加工、焊接、处理及组装能力；场址示例为条件性而非普遍路线 |
| `herrenknecht-double-shield` | handbook | Herrenknecht Double Shield TBM, snapshot 2026-10-02, https://www.herrenknecht.com/en/products/productdetail/double-shield-tbm/ | 结构、内部皮带与外部运输、盾体/推进/轴承及拼装机；运行水/衬砌不作为默认工厂投入 |
| `herrenknecht-raise-2024` | handbook | Herrenknecht Full Range Raise Boring, 05.2024 / HK3774, https://www.herrenknecht.com/?eID=file_download&file=fileadmin%2Fuser_upload%2FMain_Website%2F03_Produkte%2F02_Mining%2F02_Raise-Boring-Rig%2F02_Content%2FHK3774_DB_Mining_RBR_Full_Range_Raise_Borig_GB_20240514_MidRes.pdf | 05.2024 HK3774第1页：模块化反井及变频驱动/钻杆操作；反证仅隧道结构 |
| `herrenknecht-vsm` | handbook | Herrenknecht Vertical Shaft Sinking Machine VSM, snapshot 2026-10-02, https://www.herrenknecht.com/en/products/productdetail/vertical-shaft-sinking-machine-vsm/ | 凿井截割臂、泵及下放结构；独立现场分离及井筒衬砌用途 |
| `sandvik-testing-2026` | handbook | Sandvik 175 years at mining’s cutting edge, 20 March 2026, https://www.mining.sandvik/en/solid-ground/sandvik-perspective/2026/03/175-years-at-minings-cutting-edge/ | 2026年3月20日：专用工厂机械验证及切割试验设施；不提供实测消耗默认 |
| `herrenknecht-follo-2018` | handbook | Herrenknecht Double Breakthrough on the Follo Line, publisher press release; acquired 2026-10-02, https://www.herrenknecht.com/fileadmin/user_upload/Herrenknecht_Press_Release__Double_Breakthrough_on_the_Follo_Line.pdf | 2018年9月28日新闻稿第2页：工厂验收先于现场组装及隧道掘进；不采用项目刀具质量/性能 |
