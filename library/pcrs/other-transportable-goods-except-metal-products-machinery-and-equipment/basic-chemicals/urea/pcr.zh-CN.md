---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.urea
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 全循环合成的无添加剂散装固体尿素

## 1. 范围与适用性

本方法适用于氨与二氧化碳合成、氨基甲酸铵分解及反应物全循环回收，经浓缩/熔融、造粒塔成粒或颗粒化、冷却和筛分后厂门交付的无添加剂散装固体尿素。仅覆盖实际满足所声明农业用尿素等级、且与所核参考流一致的产品；用途标签不产生新 PCR 身份。两种成粒路线须分别建数据包，不把两者设备、回收比、耗量或排放因子拼成同一流程。`ec-lvic-aaf-2007` §8.2.1、图8.1和§8.2.1.1；`epa-ap42-urea-1993` §8.2.1–8.2.3 提供历史物理流程依据。

不覆盖 UAN、其他复合肥、供货尿素溶液、车用尿素溶液、树脂或三聚氰胺、提纯重结晶专用品、包膜缓释产品、粘土涂层或主动加入甲醛/防结块剂的路线。不得通过省略添加剂把实际配方改称无添加剂；投用上述物质即超出本方法。生产者 `yara-technical-urea` 原件证实可供应无防结块剂的尿素小球，但不规定本方法的配方或验收数值。

本前景单元从外供原料及公用工程接收开始，合并合成至散装装料、废气治理和过程水脱吸/水解。外供蒸汽和电力的生产负荷在适用上游数据集中关联；现场锅炉、热电联产、焚烧惰性尾气及生物废水处理须另建相应单元，不能把它们负荷纳入本单元却不列相应燃料和排放。氨与 CO2 的来源、接口和负荷处理必须声明，不把副产 CO2 自动认定为零负荷。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.urea |
| classification_refs | CPC 3.0 34611 Urea；范围为 narrower；分类不是方法身份 |
| covered_products | 验收的无添加剂、未涂层散装固体尿素小球或颗粒 |
| excluded_products | UAN、供货溶液、涂层/添加剂配方、树脂、三聚氰胺、专用提纯重结晶路线 |
| representative_product | 符合实际农业用等级及所声明纯度/水分/缩二脲要求的散装尿素小球 |
| production_route | 液氨与 CO2 高压合成；反应物全循环；浓缩和成粒；冷却筛分；所声明气/水处理 |
| market_state | 厂门散装固体，按供货实物净质量计；夹带水和杂质单独分析 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 厂门提供可用尿素原料，不以施肥或终端服务替代 |
| How much | 1 kg 验收供货状态散装固体尿素 |
| How well | 按实际 SKU/等级验收；声明尿素、总氮、水分、缩二脲、游离氨、粒径和无添加剂确认 |
| How long or cycle | 同一已声明代表性采集期内一次厂门交付；不赋予下游使用寿命 |
| reference_flow_link | urea_finished |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 尿素 `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 场址及采集期；SKU和等级；原料来源及纯度；CO2碳来源；全循环/汽提技术；造粒塔/颗粒化设备；供货水分和杂质；无涂层/无添加剂；粒径；公用工程管网及背景基准；治理配置；废水去向；散装接口 |

必需限定信息须写入元数据、过程说明或参考流备注。1 kg 指验收供货实物净质量，不是 1 kg 纯尿素或 1 kg 氮。不同含水率、等级或路线不得未经说明合并。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用同一时期经库存及退货校正的验收散装净质量 Q，排除运输车辆皮重；报告水分和尿素含量，但不改变供货质量分母。 |
| gas_volume | feed_co2, passivation_air | Volume | m3 | 用所记录的绝压、温度、组成、湿干状态及压缩因子核对现场与供方气体体积约定。兼容性未知时该数据集链接不完整；不得使用通用密度或数据库次级质量系数。 |
| steam_basis | steam_hp, steam_mp, steam_lp, steam_export | Mass | kg | 分别保留各实际管网并核对凝结水回流。净可用热量由实测蒸汽/凝结水焓及供方边界计算，不由蒸汽 UUID 或通用 MJ 属性证明。 |
| electricity_unit | electricity | Net calorific value | MJ | 选定属性保留原生名称净热值、低位热值及能量单位 MJ。计量电能并说明 kWh 到 MJ 的转换，不作燃烧热值假设。 |
| species_basis | nh3_air, nh3_water, ammonium_water, urea_water | Mass | kg | 区分分子质量与 kg N；保留分析定义及分子质量转换因子。NH3 与 NH4+ 必须划分实测总氨氮，不能各自重复全部值。 |
| dust_bands | pm_fine_air, pm_coarse_air, pm_over10_air | Mass | kg | 使用互不重叠的粒径质量。累计 PM10 已包含 PM2.5；粗颗粒部分只能由采样基准相容的测量相减并保留不确定度。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收外供液氨、CO2、经处理工艺水及公用工程；现有回收液/晶种/水/蒸汽须记录期初库存 |
| starting_condition_role | foreground_gate |
| product_classification_scope | 无添加剂散装固体尿素；CPC 34611 的较窄部分 |
| recursive_input_rule | 内部回收氨/CO2/氨基甲酸铵、尿素细粒、凝结水和蒸汽以两端同量内部链接保留；外购同类尿素必须具备其上游链接，不沿本单元无限递归 |
| upstream_dataset_requirement | 关联原料实际来源、品质、运输和能耗、公用工程及废物处理供方；未知基准或缺少供方属于明确数据缺口 |
| disclosure | 声明各阶段、选用成粒路线、计量边界、内外部接口、控制设备、异常运行、公用工程来源和排污/回用去向 |

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_stages | urea_manufacture | 纳入接收、压缩/泵送、合成、汽提/分解及回收、浓缩、选定成粒、冷却/筛分、储存/装料及对应气/水治理。阶段原始记录在单一前景单元内仍须独立计量。 | ec-lvic-aaf-2007; epa-ap42-urea-1993 |
| boundary_recycle | urea_manufacture | 内部流两端保留相同实物单位和状态。回收物既不是新购入原料，也不形成避免负荷。外部损失和处理转移只计一次。 | ec-lvic-aaf-2007 |
| boundary_utilities | urea_manufacture | 蒸汽管网输入、回收、输出及凝结水回流分别记录。来源表8.19的能量示例不含成粒；采集能量还须包括实际成粒、冷却和治理。 | ec-lvic-aaf-2007 |
| boundary_water | urea_manufacture | 区分内部过程水回用、外部回用产品、送处理废水及自然直接排放。生物处理及其药剂/排放须另建处理单元，本方法不给通用配方。 | ec-lvic-aaf-2007 |
| boundary_scope | urea_manufacture | 以采购/配方记录确认无添加剂路线，隔离不相容变体。大气来源清单纳入检出的原料杂质；实际其他物种须另列身份明确的原子行，不得无声遗漏或以总VOC/总氮代替。 | epa-ap42-urea-1993; ec-lvic-aaf-2007; yara-technical-urea |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| urea_manufacture | 合成至散装交付的尿素制造 | required | 所声明全循环、无添加剂固体尿素路线 | 合并前景单元，阶段分别计量 | urea_finished |

实物流顺序：接收 → 合成/汽提及反应物回收 → 浓缩 → 所选成粒 → 冷却/筛分 → 储存/散装装料。气体治理和过程水脱吸/水解连接对应阶段。反应物、洗涤液、细粒及水/热回收形成内部闭路。阶段质量、水、碳、氮平衡保留实物全量；分配后的环境负荷另设账册。

### 过程：尿素制造（`urea_manufacture`）

#### 输入

##### 产品流

###### 新鲜无水液氨 (`feed_ammonia`)

仅记录校正罐存变化和实测纯度后的新鲜进料；回收氨为内部流。不得使用氨水记录。

- 选定流：氨，无水，液体 `6928be4f-282b-4448-8f2a-f8c746621303`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按采集协议计量期间数量，以同期验收净输出 Q（kg）归一化；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_feed`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

###### 新鲜二氧化碳原料 (`feed_co2`)

区分压缩二氧化碳原料与大气排放。参考属性为 Volume/m3；记录压力、温度、湿干状态、组成、压缩因子及供应方体积约定。质量平衡使用实测组成和有依据的转换，不以数据库次级系数充当密度。 原始记录类型为 Product flow，CAS 对应 CO2，说明支持捕集/处理后的高纯试剂，但名称元数据写有“废物流，在产生点”。须明确保留该内部角色/位置冲突；它不证明未处理组成、零负荷或实际供货接口。有条件实物身份仍须核对实际 CO2 来源、交付/责任交接点、纯度/相态、捕集/净化/压缩边界、上游负荷与 m3 约定。供方边界未解决时，该链接仍不完整。

- 选定流：化学工业中的二氧化碳 `25d43910-4875-4d29-9941-950138d9fae8`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 单位组：`93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则：按采集协议计量期间数量，以同期验收净输出 Q（kg）归一化；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_feed`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

###### 购入中压电力 (`electricity`)

选定身份为供用户使用的电网平均 1-35 kV 交流电。仅用于该实物接口；其他电压或专用发电须另核身份和供方。分别计量压缩、泵、浓缩、成粒、冷却和水处理；不得同时计入蒸汽驱动和电驱动压缩负荷。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 单位组：`93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：按采集协议计量期间数量，以同期验收净输出 Q（kg）归一化；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

###### 高压蒸汽管网 (`steam_hp`)

记录所声明高压蒸汽管网中一条独立计量的外供蒸汽管线。记录实际绝压/表压约定、温度、干度、凝结水回流及供方参考量。广义蒸汽身份不确定压力、能量或上游数据集。不存在的管线须证实为 not_applicable；不同管线分别记录。

- 选定流：蒸汽 `7734613a-3ef2-47ce-aff0-9a1bd67906c6`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按采集协议计量期间数量，以同期验收净输出 Q（kg）归一化；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

###### 中压蒸汽管网 (`steam_mp`)

记录所声明中压蒸汽管网中一条独立计量的外供蒸汽管线。记录实际绝压/表压约定、温度、干度、凝结水回流及供方参考量。广义蒸汽身份不确定压力、能量或上游数据集。不存在的管线须证实为 not_applicable；不同管线分别记录。

- 选定流：蒸汽 `7734613a-3ef2-47ce-aff0-9a1bd67906c6`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按采集协议计量期间数量，以同期验收净输出 Q（kg）归一化；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

###### 低压蒸汽管网 (`steam_lp`)

记录所声明低压蒸汽管网中一条独立计量的外供蒸汽管线。记录实际绝压/表压约定、温度、干度、凝结水回流及供方参考量。广义蒸汽身份不确定压力、能量或上游数据集。不存在的管线须证实为 not_applicable；不同管线分别记录。

- 选定流：蒸汽 `7734613a-3ef2-47ce-aff0-9a1bd67906c6`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按采集协议计量期间数量，以同期验收净输出 Q（kg）归一化；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

###### 经处理的工艺补充水 (`water_makeup`)

记录外供经处理液态水的净补充量，数据包按实际水质回路拆分。冷却循环量为内部体积，不是耗水量。原始记录分别保留冲洗、密封、洗涤、冷却和锅炉用水；直接取水须另设来源特定的基本流输入及供水单元。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按采集协议计量期间数量，以同期验收净输出 Q（kg）归一化；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

###### 外供压缩钝化空气 (`passivation_air`)

仅在用于腐蚀钝化或气动的空气跨越前景边界外供时记录。记录氧含量、压力、干燥和体积约定。成粒环境空气为操作计量，不是购入压缩空气；场内压缩以电力和原始空气记录计量，不重复购入空气。

- 选定流：压缩的空气 `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 单位组：`93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则：按采集协议计量期间数量，以同期验收净输出 Q（kg）归一化；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_feed`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

##### 废物流

此边界无已选定交换；实际存在时须按原子流另行记录并核验。

##### 基本流

此边界无已选定交换；实际存在时须按原子流另行记录并核验。

#### 输出

##### 产品流

###### 验收散装固体尿素 (`urea_finished`)

合并合成、浓缩和成粒后仅设一项最终参考输出。中间溶液、熔体、晶种颗粒和内部回收不合格粒料保留在阶段实物平衡中，不把参考 UUID 再作为中间产品输出。

- 选定流：尿素 `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`product_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`source_rule`
- 采集协议：`cp_product`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

###### 外供回收蒸汽 (`steam_export`)

仅在单独计量且可用的回收蒸汽交付本单元之外时记录。实物输出保留实际管网压力、温度及全部数量；内部热回用不是外供。不同外供管线须各自设置原子交换。

- 选定流：蒸汽 `7734613a-3ef2-47ce-aff0-9a1bd67906c6`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按采集协议计量期间数量，以同期验收净输出 Q（kg）归一化；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

###### 交付外部回用的处理后工艺水 (`water_reuse_export`)

仅在处理后的液态水经接收方验收并供另一用户使用时记录，实测尿素/氨含量并核对接收水质要求。内部凝结水回用为内部流；未处理废液不得称为可售水产品。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按采集协议计量期间数量，以同期验收净输出 Q（kg）归一化；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

##### 废物流

###### 弃置固体尿素细粒 (`waste_urea`)

仅记录送明确废物接收方、不能内部回收的污染或不合格固体尿素。记录含水率、尿素、污染、去向及处置。内部回收细粒不作为废物输出。

- 选定流：弃置固体尿素细粒
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按采集协议计量期间数量，以同期验收净输出 Q（kg）归一化；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

###### 送外部处理的尿素过程凝结废水 (`wastewater_transfer`)

仅在含水凝结液/排污水离开本单元送进一步处理时记录，不代表排入自然环境。记录体积、尿素、NH3/NH4、总氮、COD、pH、固体及接收处理条件。

- 选定流：送外部处理的尿素过程凝结废水
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：按采集协议计量期间数量，以同期验收净输出 Q（kg）归一化；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

##### 基本流

###### 排入室外空气的氨 (`nh3_air`)

记录合成/回收、浓缩、成粒、冷却、筛分、储存及装料治理后排入大气的 NH3，含泄漏及异常运行。计量 NH3 质量，不是氮质量。洗涤液回收氨为内部流。仅在无法确定更细排放描述时使用空气未特指子介质。

- 选定流：氨 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按采集协议计量期间数量，以同期验收净输出 Q（kg）归一化；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

###### 向空气排放的化石源二氧化碳 (`co2_fossil_air`)

按来源记录治理后实际未回收的化石源 CO2 排放；留存产品碳和内部循环 CO2 不是排放。上游氨厂 CO2 在本前景单元之外，须在供方清单中保持一致。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按采集协议计量期间数量，以同期验收净输出 Q（kg）归一化；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

###### 向空气排放的生物源二氧化碳 (`co2_bio_air`)

碳来源证据确认存在时，单独保留实际生物源 CO2；温室气体报告约定不得删除该 LCI 交换。认定不存在须有来源证据；来源未知须待定，不能直接分为化石源或生物源。

- 选定流：二氧化碳（生物源） `08a91e70-3ddc-11dd-9c15-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按采集协议计量期间数量，以同期验收净输出 Q（kg）归一化；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

###### 空气动力学直径不大于 2.5 微米的颗粒 (`pm_fine_air`)

记录治理后在该互不重叠空气动力学粒径区间实际越过大气边界的颗粒质量。分别采样成粒、冷却、筛分和装料来源。不得把累计 PM10 或 TSP 与这些区间相加；回收返工粉尘不是大气排放。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按采集协议计量期间数量，以同期验收净输出 Q（kg）归一化；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

###### 粒径大于 2.5 且不大于 10 微米的颗粒 (`pm_coarse_air`)

记录治理后在该互不重叠空气动力学粒径区间实际越过大气边界的颗粒质量。分别采样成粒、冷却、筛分和装料来源。不得把累计 PM10 或 TSP 与这些区间相加；回收返工粉尘不是大气排放。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按采集协议计量期间数量，以同期验收净输出 Q（kg）归一化；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

###### 粒径大于 10 微米的颗粒 (`pm_over10_air`)

记录治理后在该互不重叠空气动力学粒径区间实际越过大气边界的颗粒质量。分别采样成粒、冷却、筛分和装料来源。不得把累计 PM10 或 TSP 与这些区间相加；回收返工粉尘不是大气排放。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按采集协议计量期间数量，以同期验收净输出 Q（kg）归一化；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

###### 排入淡水的溶解未电离氨 (`nh3_water`)

仅记录纳入水处理后直接排入自然淡水的独立测定未电离 NH3 部分。报告分子 NH3 质量，铵和尿素另列。不得把总氨氮同时复制到 NH3 和 NH4 行。

- 选定流：氨 `08a91e70-3ddc-11dd-96b0-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按采集协议计量期间数量，以同期验收净输出 Q（kg）归一化；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_effluent`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

###### 排入淡水的铵离子 (`ammonium_water`)

仅记录直接排放中独立区分的 NH4+ 部分，单位为 kg NH4+ 而非 kg N；记录 pH/温度及分析转换基准。不是硝酸铵或硫酸铵产品。

- 选定流：铵 `fe0acd60-3ddc-11dd-aaa5-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按采集协议计量期间数量，以同期验收净输出 Q（kg）归一化；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_effluent`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

###### 排入淡水的尿素分子 (`urea_water`)

记录处理水直接排放中实际残余 CO(NH2)2。尿素氮仅按有依据的化学计量分子质量关系转换，不把总氮再作为尿素质量相加。送外部处理废水内部的污染负荷不得列作该直接排放。

- 选定流：尿素 `9abf6aa9-c299-47ae-b9d7-539d65107fd8`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按采集协议计量期间数量，以同期验收净输出 Q（kg）归一化；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_effluent`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

###### 液态水排入自然淡水 (`liquid_water`)

计量越过自然淡水边界的实际液态出水，Volume/m3。载水体积与所含污染物质量为不同维度；实物水平衡对该水流只计一次。不是淡水取水。

- 选定流：水 `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 单位组：`93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则：按采集协议计量期间数量，以同期验收净输出 Q（kg）归一化；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_effluent`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

###### 排入空气的水蒸气 (`water_vapour`)

记录浓缩/冷却/成粒中未凝结回用、实际排入大气的水损失。核对反应水、输入蒸汽、补充水、凝结水回流、液态输出及库存变化；闭路蒸发与凝结不得记为两个外部交换。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按采集协议计量期间数量，以同期验收净输出 Q（kg）归一化；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

###### 过程排气中的化石源甲烷 (`methane_air`)

仅在治理后的过程排气实测存在化石源甲烷杂质时记录；来源表8.10为案例观察，不作默认正排放。核对来源及实测负荷；其他碳来源须各自核原子身份。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按采集协议计量期间数量，以同期验收净输出 Q（kg）归一化；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

###### 过程排气中的化石源一氧化碳 (`co_air`)

仅在治理后的过程排气实测存在化石源 CO 杂质时记录。不得使用 CO2 记录或不相关燃烧因子；独立实测 CO 及其碳来源纳入实际排气平衡。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按采集协议计量期间数量，以同期验收净输出 Q（kg）归一化；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`ec-lvic-aaf-2007`; `epa-ap42-urea-1993`

## 7. 分配与共产品处理

以下分配规则是本 PCR 的建模要求；BREF 提供集成物流/能量背景，不作为 ISO 分配层级或市场价格证据。

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_avoid | urea_manufacture | 优先按实际计量及过程来源细分，直接归属可追踪原料、公用工程和排放。内部循环不是共产品。选定前景参考为尿素，而非氨制造。 | ec-lvic-aaf-2007 |
| allocation_physical | urea_manufacture | 所有实物共产品输出、阶段平衡和内部链接均保留实测全量。分配份额作用于共享环境负荷，不缩减实物输出质量、水或热量。 | ec-lvic-aaf-2007 |
| allocation_residual | urea_manufacture | 确有不可细分共享负荷且存在可用外供蒸汽或验收回用水时，说明因果关系、基准和分母并检验敏感性。没有可辩护物理关系时，可披露按同期实际可比净价值选择的经济分配；本方法不给默认份额或价格。无依据份额须拒绝，不强造单产品平衡。 | ec-lvic-aaf-2007 |
| allocation_co2 | feed_co2 | 披露 CO2 供方捕集/净化/压缩能耗及上游分配。不得同时给予捕集信用并把产品留存碳作为负排放扣减。下游释放在厂门边界之外；披露碳来源及数量供后续建模。 | ec-lvic-aaf-2007 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | urea_manufacture | urea_finished | 称重和分析 | 净交付质量；期初/期末成品库存；退货；SKU；等级；尿素；总氮；水分；缩二脲；游离氨；粒径；配方 | 经校准散装秤、库存核对及有记录的代表性采样/分析；核查实际无添加剂配方。 原始期间量按 normalize_period 除以同期 Q，采用以下聚合基准。 | kg; mass fractions | 每批；期间核对 | 同一代表时期，含异常运行 | 同一场址和路线；验收散装交付 | 每 1 kg 参考流 | 秤校准；分析方法/证明；验收及库存记录 |
| cp_feed | urea_manufacture | feed_ammonia; feed_co2; passivation_air | 接收、仪表和组成记录 | 进料总量；库存变化；组成；纯度；碳来源；相态；T；绝压P；湿干基准；Z；供方参考约定；空气氧含量 | 校准质量/体积仪表并核对罐存；以采样组成及相容的方程/状态定义核验气体转换。 原始期间量按 normalize_period 除以同期 Q，采用以下聚合基准。 | kg; m3; composition; T; P | 连续/批次；定期分析 | 与 Q 同期 | 区分外部进料接口和内部回收仪表 | 每 1 kg 参考流 | 仪表校准；气体证明；供方基准；转换计算 |
| cp_energy | urea_manufacture | electricity; steam_hp; steam_mp; steam_lp; steam_export | 仪表和焓记录 | 电量kWh；电压；供方/电网组合；各蒸汽管线质量、T、P、干度；凝结水回流质量和焓；阶段负荷；外供用户 | 分别计量压缩、合成/回收、浓缩、成粒/冷却、装料及治理。以温压/干度和可追溯蒸汽性质建立焓平衡；区分质量/热及进/出。 原始期间量按 normalize_period 除以同期 Q，采用以下聚合基准。 | kWh; MJ; kg; T; P | 连续或班次合计 | 与 Q 同期 | 全部纳入阶段及各外部公用工程管线 | 每 1 kg 参考流 | 仪表检查；焓方法/版本；供方参考边界；独立凝结水账 |
| cp_water | urea_manufacture | water_makeup; water_reuse_export; water_vapour | 水表和阶段平衡 | 补水与循环；具独立证据的净反应水生成/消耗；阶段分析及反应程度/模型输入；蒸汽载水；流体密度/组成及分数基准；冲洗/密封/洗涤水；内部回用；蒸发；凝结水回流；期初/期末液体/在制品库存；外部接收方及水质 | 计量外部水接口，采集合成、纳入水解及其他实际反应的阶段分析/状态记录。通过 assay_balance 依据独立的实际反应程度证据确定反应水项，不得用本水账所需闭合残差确定。带不确定度核对实测蒸汽载水/商业载水、液态输出、大气损失及库存变化，记录接收方验收。保留完整池原始总量，仅应用一次 normalize_period。 | kg; m3; composition | 连续/批次；期间平衡 | 与 Q 同期 | 冷却、浓缩及处理回路 | 每 1 kg 参考流 | 仪表检查；分析及反应模型依据；实物水平衡账；反应程度和计量不确定度 |
| cp_waste | urea_manufacture | waste_urea; wastewater_transfer | 发运和接收方记录 | 湿/干质量；体积；水；尿素；NH3/NH4；总氮；COD；pH；固体；污染；接收方；处理；运输 | 称量弃置固体、计量转移凝结废水；代表性组成分析及接收/处理验收。不以未核通用废物 UUID 替代来源/去向。 原始期间量按 normalize_period 除以同期 Q，采用以下聚合基准。 | kg; m3; mg/L; mass fractions | 每次发运；代表样品 | 与 Q 同期 | 各外部送处理废物流接口 | 每 1 kg 参考流 | 地磅/仪表；分析质量保证；转移凭证和去向合同 |
| cp_air | urea_manufacture | nh3_air; co2_fossil_air; co2_bio_air; pm_fine_air; pm_coarse_air; pm_over10_air; methane_air; co_air | 排放监测和排气平衡 | 来源；治理后浓度；湿/干气量；T/P；时长；粒径累计/区间定义；NH3分子基准；化石/生物碳证据；杂质；治理状态；异常事件 | 对治理后各外排大气源，以匹配的浓度/气量条件和时长计量；以有依据的方法纳入逸散及事件。保留粒径采样和治理进/出口区别，不照搬历史因子为默认值。 原始期间量按 normalize_period 除以同期 Q，采用以下聚合基准。 | kg; mg/m3; m3; time | 连续或代表测试及事件 | 与 Q 同期，含启停 | 合成/回收、浓缩、成粒、冷却、筛分、储存/装料及治理 | 每 1 kg 参考流 | 测试方法/校准；气体状态约定；来源图；检出限；治理运行；不确定度 |
| cp_effluent | urea_manufacture | nh3_water; ammonium_water; urea_water; liquid_water | 最终出水计量和物种分析 | 直接排水体积；受纳水体；pH/T；NH3；NH4；尿素；总氮；COD；采样；检出限；处理旁路 | 纳入处理后的最终自然排放接口采取流量比例代表采样；确定分子/物种与氮基准及物种划分，避免重复总氨。送外部处理废水使用 cp_waste。 原始期间量按 normalize_period 除以同期 Q，采用以下聚合基准。 | m3; mg/L; kg; pH; T | 连续流量；代表样品及旁路事件 | 与 Q 同期 | 仅直接淡水排放 | 每 1 kg 参考流 | 实验室方法；流量校准；分子因子/物种划分；受纳水体和处理边界 |

实际记录单位可不同；转换后必须保留所选流的原生参考属性/单位和基准兼容证据。未实测数量不赋默认值。缺少实际杂质/辅助物时须调查并添加独立原子交换；不得用近似总量补齐。 各协议保留同场址、同路线、同供货状态/等级完整报告池的未归一化原始总量，纳入失败/零产出运行、返工、清洗、启停，以及期初/期末在制品和对应可归属负荷。聚合基准表示最终清单基准；原始总量仅应用一次 normalize_period，不得将协议已归一化结果再次除以 Q。

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | 所有清单行 | 对每个非参考交换 i，仅计算一次 q_i = X_i / Q。X_i 为上述完整报告池内未经每千克除法的原始可归属、经库存校正交换量；Q 为匹配同场址、同路线、同等级/状态及同报告池的验收供货尿素净质量，单位 kg。核对接收、生产/交付、退货、期初/期末库存与在制品及其可归属负荷；不得用不匹配发运量承担本期负荷或遗漏失败/零产出/返工负荷。以前期间库存须带入匹配的以前负荷，或从 Q 排除。零产出子时段负荷保留在有据且 Q 为正的完整池中；完整池无正 Q 时，每千克结果报告不可用，不报为零负荷或除以零。退回及再次验收核对后，每份最终验收净批次只确认一次；内部返工不是新增成品产出。urea_finished 保持恰好 1 kg；分配不缩减实物输出或改变 Q。 | 期间交换量；Q；cp_product；适用行协议 | 每 1 kg 参考流交换量；无正匹配 Q 时不可用 | ec-lvic-aaf-2007 |
| assay_balance | feed_ammonia, feed_co2, urea_finished, waste_urea, wastewater_transfer | 对已测为 kg 的实物质量，物种 kg = 实物 kg 乘以实测物种质量分数。对以 m3 记录的 feed_co2，须先依据实测气体组成、绝压 P、T、湿干状态、Z 和有据相容换算确定质量，或按经核实的摩尔/体积分数基准确定物种摩尔量，再用有依据的分子质量换为 kg。不得以 m3 直接乘质量分数得到 kg。液体体积先按实测流体密度/状态换为质量，再应用质量分数；全溶液质量、实测组分和载水分别保留。组分账不替代实际供方参考数量或供货产品分母。对全部投入、输出及阶段库存核对总质量和相关 C/N/H/O 守恒。实际净水生成/消耗及干物种转化另以阶段分析和有独立依据的反应程度模型确定，涵盖尿素合成、纳入的水解及实际副反应；不得通过强行闭合水或干组分残差反推。化学计量用于一致性检验，不作收率、完全转化或实际消耗默认值。 | 分析及分数基准；分子质量；经核实气/液换算；实际反应程度证据；阶段库存；cp_feed；cp_product；cp_water；cp_energy；cp_waste；cp_air；cp_effluent | 物种 kg、守恒质量/元素账和具独立证据及不确定度的反应水项 | ec-lvic-aaf-2007 |
| air_load | nh3_air, co2_fossil_air, co2_bio_air, pm_fine_air, pm_coarse_air, pm_over10_air, methane_air, co_air | 气体状态定义相容时，来源负荷 = 匹配时段浓度乘气体体积之和，并明确单位转换。治理出口、逸散和事件只计一次；保留检出限处理和不确定度。 | 来源浓度；体积；时长；cp_air | 治理后物种/粒径区间负荷 | epa-ap42-urea-1993; ec-lvic-aaf-2007 |
| effluent_load | nh3_water, ammonium_water, urea_water | 物种负荷 = 匹配时段物种浓度乘排水体积之和。明确 mg/L 与 m3 转为 kg；只有分析/物种划分及分子质量比有依据时才把 kg N 转为分子物种。 | 体积；浓度；分析基准；pH/T；cp_effluent | 直接淡水排放物种质量 | ec-lvic-aaf-2007 |
| energy_balance | steam_hp, steam_mp, steam_lp, steam_export | 可用蒸汽热量 = 输入质量乘输入比焓减实际凝结水回流热量，并披露实测边界和损失。电能独立保留；kWh 乘 3.6 得 MJ。内部回收与外供能量不得重复。 | 蒸汽/凝结水仪表；状态；焓基准；cp_energy | 管网质量/热平衡及实测电力 | ec-lvic-aaf-2007 |
| allocation_ledger | 所有清单行 | 直接归属后，仅对不可细分的共享环境负荷应用有依据份额。所声明负荷池份额之和为一。所有实物共产品数量保留在未分配账册；不给固定份额。 | 直接归属；因果/经济基准；负荷池；输出数量 | 独立分配后负荷账 | ec-lvic-aaf-2007 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | 所有清单行 | 核验实物物种、相态、配方、路线、介质、主属性及单位；UUID 仅作身份依据。记录废物身份未决及基准/供方缺口。 | 直接身份；供方/接收方规格 |
| period | 所有清单行 | 使用同一所声明代表时期、场址/路线；披露产能、启停、季节成粒条件及缺失记录。不得把单厂历史消耗移植为通用数量。 | 生产/仪表记录；分析及来源范围 |
| closure | urea_manufacture | 核对实物质量、氮、碳、水及各蒸汽管线，含期初/期末库存、反应水、产品、损失及所有去向；按测量不确定度调查残差，不虚设容差。 | 阶段独立实物账；不确定度预算 |
| completeness | 所有清单行 | 核查实际配方、钝化、清洗、维护及气/水杂质。每项实际新增化学品、废物或排放须各列已核原子交换；未知不能报零或完整。 | 场址过程图；采购和来源监测 |
| background | 产品输入；废物输出 | 核对背景供给/处理的状态、等级、参考量、地域/时期及分配。气/汽基准或接收条件未确认时该数据集链接不完整。 | 供方元数据；仪表与处理基准相容性 |

## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_scope | urea_manufacture | 拒绝供货溶液、UAN、不相容等级/路线及主动涂层/调理添加剂。核对参考 UUID/状态、产品限定信息及唯一成品参考输出。 | unsd-cpc3-urea; yara-technical-urea |
| validate_denominator | 所有清单行 | 参考量、清单归一化及关联协议聚合均使用 1 kg 验收供货尿素和同一实测 Q。拒绝把纯度或氮归一化数量误标为供货产品质量。 | ec-lvic-aaf-2007 |
| validate_atomic | 所有清单行 | 每行只列一个原子交换。检查 UUID 物种/路线/CAS、原生属性/单位和中文名称；拒绝 correction flow、近名替代及不相容介质。空身份必须明确；身份已核不表示供方链接完整。 | ec-lvic-aaf-2007 |
| validate_balances | urea_manufacture | 要求实物质量/水/氮/碳/蒸汽闭合证据及内部链接两端同量。另核分配后负荷；不得以分配份额乘实物共产品输出。 | ec-lvic-aaf-2007 |
| validate_emissions | urea_manufacture | 覆盖实际治理后排气、成粒及装料粉尘、泄漏/事件、蒸发水及最终出水/处理转移去向。采用互斥粒径区间、分子氮物种及化石/生物碳来源；不推定默认正排放，不删除实测生物源 CO2。 | ec-lvic-aaf-2007; epa-ap42-urea-1993 |
| validate_gaps | 所有清单行 | 声明数据集完整前，解决实际适用废物 UUID、SKU/分析、公用工程基准/供方匹配、检出其他物种及接收条件。未检出、实测零、不存在接口及数量未知须区分；未披露缺口则完整性不通过。 | ec-lvic-aaf-2007 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 用于已知等级和路线的尿素上游投入 |
| allowed_use | 实际所声明无添加剂固体尿素、厂门边界和数据质量限定 |
| excluded_use | 不覆盖终端施肥/SCR服务、UAN/供货溶液、添加剂配方、不相容工艺或未解决基准链接 |
| required_metadata | 产品限定信息；路线/场址/时期；参考物理基准；全部适用原子流；未分配实物账和分配负荷账；背景及处置接口 |
| required_quality_disclosure | 实测/计算/估计区别；样本代表性、检出限、不确定度、缺失项及基准匹配状态；不得把未来采集要求称为已有实测数据 |
| update_trigger | SKU/配方、纯度/水分、合成/成粒技术、管网/供方、治理或接收去向变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| ec-lvic-aaf-2007 | official_guidance | European Commission, LVIC-AAF BREF, August 2007. [Official full text](https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/lvic_aaf.pdf), §1.5.1 (printed 33/PDF 61), §8.2.1 and Figure 8.1 (324–326/PDF 352–354), Tables 8.5–8.10 (329–335/PDF 357–363), §8.4.12–8.4.13 (357–359/PDF 385–387), §8.5 (362/PDF 390). | 历史合成/回收/成粒及水处理边界；公用工程状态分别计量及平衡。案例/BAT水平不提供通用数量、收率、配方或现行法律限值。 |
| epa-ap42-urea-1993 | official_guidance | US EPA, AP-42 §8.2 Urea, July 1993, reformatted January 1995. [Official full text](https://www.epa.gov/sites/default/files/2020-09/documents/8.2_urea.pdf), §8.2.1–8.2.3, Figure 8.2-1, pp.8.2-1–8.2-3. | 独立历史过程/来源图；成粒粉尘、氨及调理区别。路线特定/治理特定因子及旧工厂观察不作默认值。 |
| yara-technical-urea | literature | Yara International, [Technical Urea](https://www.yara.com/industrial-nitrogen/base-chemicals/technical-urea/), sections “You can get Urea in two forms” and “How we produce Urea”, accessed 2026-10-13 UTC. | 生产者证实小球/颗粒、无防结块剂小球选项、氨/CO2制造和固体/溶液状态，不给SKU/数量默认值。 |
| unsd-cpc3-urea | official_guidance | UNSD, [CPC Version 3.0 subclass 34611 — Urea](https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/34611) and class 3461 breakdown, accessed 2026-10-13 UTC. | 分类位置及与34616 UAN区别；建议较窄范围，不作为已覆盖整个分类的证明。 |
