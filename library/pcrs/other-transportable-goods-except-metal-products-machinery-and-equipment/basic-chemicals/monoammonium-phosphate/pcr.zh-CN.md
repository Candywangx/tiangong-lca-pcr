---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.monoammonium-phosphate
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 颗粒磷酸一铵制造

## 1. 范围与适用性

本 PCR 适用于正磷酸水溶液与无水氨中和，经制粒、干燥、筛分、冷却及实际调理和交付准备后获得的冷却颗粒肥料级磷酸一铵（MAP，NH4H2PO4）。在此化学路线内可采用预中和器、管式反应器或两者组合，实际配置及公用工程分别记录。化学参考不等于声称纯化学计量 MAP：商品水分、杂质、硫酸盐与包膜均须测定。[eu-jrc-map-2007; mosaic-map-spec-2024]

不包括磷酸二铵（DAP）、三铵盐、聚磷酸铵溶液、经纯化/结晶的工业级或食品级 MAP、硝酸磷肥/ODDA 产品、其他 NP/PK/NPK 复合肥及外购成品肥的物理混配。NPK 混配所用外购 MAP 为上游投入，不是 MAP 制造。本颗粒肥料子集只是 CPC 3.0:34643 的较窄适用范围；分类标签本身不证明制造路线。[un-cpc3-2025]

一个聚合前景单元内仍保留接收、中和、制粒、干燥、筛分、冷却、洗涤、搬运及实际包装的分阶段实物账。内部转移两端使用同一实测数量，在本单元内部抵消。唯一参考产出为验收 MAP 成品。聚合不得删除内部损失、设备或治理操作。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.monoammonium-phosphate |
| classification_refs | CPC 3.0:34643 Monoammonium phosphate；建议颗粒肥料 narrower 范围，另行接受映射 |
| covered_products | 磷酸与无水氨制成的颗粒肥料级 MAP；实测实际等级、水分和包膜 |
| excluded_products | DAP；三铵盐；工业/食品级晶体；液体/聚磷酸盐肥；其他 NP/PK/NPK；肥料干混产品 |
| representative_product | 生产者门口放行的冷却颗粒 MAP，散装或声明包装，产品净质量不含皮重 |
| production_route | H3PO4 水溶液经预中和器和/或管式反应器氨化；制粒循环、干燥、筛分、冷却、实际调理及排放治理 |
| market_state | 工厂门口肥料成品颗粒；声明实际粒度、化验、水分、包膜、包装和地理范围 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在生产者门口供应合格颗粒 MAP 肥料 |
| How much | 1 kg 净交付产品 |
| How well | 声明实际总 N、按明确 P2O5 基准表达的总磷及有效磷、水分、粒度规格、包膜与批次验收 |
| How long or cycle | 一个明确的代表性报告期；不声称田间使用寿命 |
| reference_flow_link | map_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 磷酸一铵 `90d4a1dc-fa9b-4f22-9c97-8acb0a457d0d` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | MAP 化学身份；肥料等级；颗粒状态；反应配置；磷酸来源/浓度；NH3 纯度/状态；实际 N 及总/有效 P2O5 化验基准；产品水分；粒度；包膜组成；厂门/包装条件；地理范围；报告期；供方及数量基准；治理和排污去向 |

上述限定须在数据集元数据、过程说明或等效字段中声明。流身份本身不构成供方背景数据集或产品化验。Mosaic 的 11-52-0 规格仅示例某产品总 N/有效 P2O5 的保证下限，不代表完整组成、实测含量或通用 MAP 等级。[mosaic-map-spec-2024]

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | map_product | 质量 | kg | P = cp_output 中报告期验收净交付 MAP 产出 kg。保留固有水分及包膜，排除包装皮重。所有行和协议均为每 1 kg 参考流。 |
| product_nutrient_basis | map_product; phosphoric_acid_input; ammonia_input | 质量 | kg | 产品质量、干物质、所含 MAP、N、元素 P、总/有效 P2O5 分开。百分数含量先除以 100 再相乘。有效 P2O5 为养分检测结果，不是守恒所需总 P。P/P2O5/H3PO4 换算须声明分析方法及分子量约定；不设默认等级或反应收率。 |
| solution_carrier | phosphoric_acid_input; sulfuric_acid_input; wastewater_output; sludge_output | 质量 | kg | 实物账保留湿全流、活性溶质及载水。供方交换须明确匹配交付溶液或所含化学品基准；已包含于外购溶液中的水不能再作为独立外购供水。 |
| gas_volume | natural_gas_input | 体积 | m3 | 按绝对压力、温度、组成、干湿校正和压缩因子，将表计体积换算至供方参考状态。质量换算须有实测/可追溯密度，不能用次级流系数。低位/高位热值及各自参考状态另记。 |
| steam_heat | steam_input; condensate_return | 质量 | kg | 供汽与回水 kg 分开。净热量为供方边界进入与离开的质量乘焓之差的实测汇总，声明蒸汽干度及补水/损失/回流项；链接前匹配供方 kg 或净 MJ 定义。不假定压力、焓、损失或回流份额。 |
| energy_service | electricity_input; road_transport_input; stainless_steel_input | 各行属性 | MJ; kg*km; kg | 电力 MJ = 3.6 × kWh；运输 kg*km = 1000 × t*km。资本 kg 当量是服务期负荷分摊，不代表每期消耗整台设备。保留完整实物质量与服务期。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | MAP 厂接收的磷酸水溶液、无水氨、实际辅料及公用工程；本前景不含磷矿分解 |
| starting_condition_role | 明确的前景厂门；上游酸/氨制造及开采另链 |
| product_classification_scope | CPC 3.0:34643 内颗粒肥料 MAP 子集；分类不将化学范围延伸到 DAP 或其他肥料路线 |
| recursive_input_rule | 实际再加工的外购成品 MAP 须作为独立识别的上游投入，声明来源和含量；内部细粉、大颗粒和洗涤液为内部转移，不能重复算采购或共产品 |
| upstream_dataset_requirement | 各外部投入/产出须匹配技术、地理、等级/浓度、参考属性、数量基准、运输及处理边界；共址上游单元显式整合或链接，避免重复 |
| disclosure | 声明配置、酸质量、公用工程、库存校正、内部回用、监测覆盖、处理/排污去向、包装、设备/服务分摊、排除项及数量/身份未决 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_complete | map_production | 纳入从接收到厂门放行的实际全部阶段、公用工程、排放治理、清洗、损失、启停及搬运。即使聚合建模也保留各阶段表计。 | eu-jrc-map-2007 |
| boundary_upstream | 外部交换 | 酸、氨、实际硫酸、水、燃料、电、汽、包膜、包装、设备材料及单独建模的入厂货运均匹配背景。场内上游生产若纳入须增加完整实际清单，不能在人工厂门处消失。 | eu-jrc-map-2007; jrc-ilcd-2010 |
| boundary_recycle | 内部转移 | 全量细粉、破碎大颗粒、收集粉尘和回收液在发送/接收阶段同时记录，数量、库存、组成相符。聚合 LCI 仅计外部补入与实际损失；内部回用不产生负采购或替代生产抵扣。 | eu-jrc-map-2007 |
| boundary_fates | 外送残余物与排放 | 查清全部外部去向。本模板水性排污为送厂外处理废物；实际场内处理/最终排放须增加其原子药剂、污泥及水/各污染物进入实际接收介质的交换。废水转移不得同时计为直接排放。 | eu-jrc-map-2007 |
| boundary_extension | 实际场址完整性 | 条件行须有适用性及实测正值，或有据的真实零值。实际未列的组分、内衬、燃料、处理药剂、废物、排放各增一个原子行。缺 UUID 或监测结果不能作为删除或虚构零值理由。 | eu-jrc-map-2007; jrc-ilcd-2010 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| map_production | 聚合 MAP 氨化、制粒、干燥、调理与厂门交付 | required | 本磷酸/无水氨颗粒路线 | 保留分阶段实物及公用工程账的前景；内部转移留档并核对 | 1 kg 净交付验收 MAP |

### 过程：聚合 MAP 生产（`map_production`）

各卡为计量检查项，不是数值配方。除固定参考产出外，采集报告期实际数量，归属同一 MAP 生产周期，再除以 cp_output 的 P。全部行使用相同最终分母；各阶段质量、化验、公用工程及损失保留于实物账。条件行真实零值须有记录。不提供默认纯度、收率、能耗、排放因子或分配份额。

#### 输入

##### 产品流

###### 磷酸 (`phosphoric_acid_input`)

接收正磷酸水溶液，包括供洗涤器使用的新酸。称量交付溶液总质量，化验 H3PO4、总磷、水、氟和悬浮物。本行采用溶液 kg 基准；供应方背景须匹配浓度，或明确折算所含酸并核算载水。回用洗涤酸不得再次计入新酸投入。

- 选定流: 磷酸 `9396269a-cf0d-4b38-ae6d-ab6b91e1dc87`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按 `cp_materials` 取得本行实际归属报告期数量，除以 P。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: eu-jrc-map-2007

###### 氨，无水，液体 (`ammonia_input`)

称量接收的无水液氨，核对罐存、纯度及喷入前汽化过程；损失另测。氨水不得使用此身份。

- 选定流: 氨，无水，液体 `6928be4f-282b-4448-8f2a-f8c746621303`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按 `cp_materials` 取得本行实际归属报告期数量，除以 P。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: eu-jrc-map-2007

###### 硫酸 (`sulfuric_acid_input`)

仅在实际投加品位调节酸时纳入：已核身份限于 93–98% 溶液。记录溶液质量、H2SO4 含量及载水；保留产品和残余物中的硫酸盐。显著不同的硫酸盐复合肥须另评适用性。记录说明对氧化步骤的描述有误，该描述及任何配方均不得作为工艺证据。

- 选定流: 硫酸 `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按 `cp_materials` 取得本行实际归属报告期数量，除以 P。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: us-epa-ap42-map-1993

###### 自来水 (`makeup_water_input`)

记录反应、冷却、洗涤所补充的外购自来水；该身份仅适用于经处理管网供水。称量或按有依据的密度与条件换算表计体积。池水和回用水内部记录；其他外部水源须另设原子行并匹配背景。

- 选定流: 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按 `cp_materials` 取得本行实际归属报告期数量，除以 P。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: eu-jrc-map-2007

###### 交流电 (`electricity_input`)

计量全部实际阶段、风机、泵、破碎、冷却、治理和包装用电。该 UUID 为用户端 1–35 kV 电网平均交流电，原生属性为净热值；MJ = 实测 kWh × 3.6。本 UUID 限定 CN；其他地域、电压、供电组合或交付接口须匹配已核实的身份、背景及损耗边界。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 按 `cp_utilities` 取得本行实际归属报告期数量，除以 P。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_utilities
- 来源: eu-jrc-map-2007

###### 气态天然气 (`natural_gas_input`)

仅在实际场内干燥燃烧器或锅炉使用管输气时纳入。原生参考属性为体积而非质量。记录表计 m3、绝对压力、温度、干湿基准、组成、Z 及供方参考状态，并换算至背景 m3 定义。热值独立测定。次级质量系数 1 不是密度。

- 选定流: 气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位: 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则: 按 `cp_utilities` 取得本行实际归属报告期数量，除以 P。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_utilities
- 来源: us-epa-ap42-gas-2026

###### 蒸汽 (`steam_input`)

仅记录实际外供化工蒸汽 kg。记录供汽压力、温度、干度、质量、供方背景基准及凝结水回流。数量兼容须有供方定义和实测焓账；质量 UUID 或 MJ/GCV 标签均不证明净交付热量。场内产汽为内部流，其燃料、水、电及排放仍须纳入。

- 选定流: 蒸汽 `7734613a-3ef2-47ce-aff0-9a1bd67906c6`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按 `cp_steam` 取得本行实际归属报告期数量，除以 P。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_steam
- 来源: eu-jrc-map-2007

###### 矿物油 (`mineral_oil_input`)

仅在使用石油基纯矿物油包膜组分或维修润滑剂时纳入。记录用途、牌号、CAS、采购质量、库存及进入产品、废油或排放的去向。该 UUID 不代表多组分防结块配方。外购制剂须单列整份制剂行、实际全湿质量及兼容的整份制剂身份/背景；组分/水分仅在实物组成账保留，不再次采购这些组分。实际分别采购投加的原料才逐一拆行。

- 选定流: 矿物油 `e4d87634-a041-48d6-b071-da57551c8ab5`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按 `cp_materials` 取得本行实际归属报告期数量，除以 P。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: eu-jrc-map-2007

###### 无内衬聚丙烯编织肥料袋 (`pp_sack_input`)

袋装交付时纳入：称量实际空的无内衬 PP 袋，计数装料与破损袋并核对皮重；包装不计入产品净质量，但纳入供应负荷。如有内衬、缝线或其他材料，须各设原子行。种子包装配方不得移用。

- 选定流: 无内衬聚丙烯编织肥料袋
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按 `cp_packaging` 取得本行实际归属报告期数量，除以 P。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_packaging
- 来源: eu-jrc-map-2007

###### 不锈钢 (`stainless_steel_input`)

仅在实际维修或设备含不锈钢部件时纳入：按供方资料核实 Cr ≥10.5%、C ≤1.2% 及实际牌号。完整安装/更换质量与服务期另记，再核算归属本期的负荷当量 kg。这只是一个材料组分，不代表整机，也不泛代全部基础设施。

- 选定流: 不锈钢 `9a0998b6-b8a6-4fcc-8099-be847ca5b3cd`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按 cp_capital 记录全量实物 kg，再以服务期负荷当量除以 P。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_capital
- 来源: eu-jrc-map-2007

###### 公路运输 (`road_transport_input`)

仅用于单独建模且符合本身份的 30 吨柴油货车入厂货运。记录实际装载质量、距离、利用率、空返及供方边界；采用 kg*km，t*km 乘 1000 换算。其他运输方式另设行；交付供应背景已含运输时不得叠加。

- 选定流: 公路运输 `9425f2bf-e734-4884-be1b-645473a3e82d`
- 流属性/单位: 质量*距离 `118f2a40-50ec-457c-aa60-9bc6b6af9931` / kg*km
- 数量规则: 按 `cp_transport` 取得本行实际归属报告期数量，除以 P。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_transport
- 来源: eu-jrc-map-2007

#### 输出

##### 产品流

###### 磷酸一铵 (`map_product`)

工厂门口验收的冷却颗粒肥料级 MAP，包括固有水分及声明的包膜，排除包装皮重。P 为报告期验收净产出 kg，经库存校正，内部回用不计为产量。产品化验与市场等级须实测，不由广义身份推定。

- 选定流: 磷酸一铵 `90d4a1dc-fa9b-4f22-9c97-8acb0a457d0d`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 1 千克
- 数值来源模式: fixed_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_output
- 来源: mosaic-map-spec-2024

###### 返还外部供方的蒸汽凝结水 (`condensate_return`)

向供方回水时纳入，实测 kg、压力、温度、污染情况及去向。保留全量实物回流；仅按有据且匹配的供汽模型计抵扣，绝不以供回水质量之差估算热量。

- 选定流: 返还外部供方的蒸汽凝结水
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按 `cp_steam` 取得本行实际归属报告期数量，除以 P。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_steam
- 来源: eu-jrc-map-2007

##### 废物流

###### 送厂外处理的 MAP 洗涤排污废水 (`wastewater_output`)

实际送厂外处理的非回用水性排污流才纳入：测湿总质量、溶解/悬浮固体、总 N/P/F/S、pH 和接收方。其为废物流而非基本排放，同一转移不得再作为直接入水污染物。若场内最终排放，须增加各实测污染物及水进入实际接收介质的行，不能声称转移型清单已完整。

- 选定流: 送厂外处理的 MAP 洗涤排污废水
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按 `cp_residues` 取得本行实际归属报告期数量，除以 P。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_residues
- 来源: eu-jrc-map-2007

###### 脱水 MAP 洗涤排污污泥 (`sludge_output`)

实际移出场址的排污处理污泥才纳入：称湿饼质量、测干物质、N/P/F 和污染物，核实接收方与处理分类。不得套用生物或造纸污泥；同一废水质量中污泥不得扣减两次。场内脱水须增加实际药剂和公用工程原子投入。

- 选定流: 脱水 MAP 洗涤排污污泥
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按 `cp_residues` 取得本行实际归属报告期数量，除以 P。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_residues
- 来源: eu-jrc-map-2007

###### 废弃不合格颗粒磷酸一铵 (`offspec_output`)

仅纳入作为废物移出的不可回收 MAP：称实际湿质量、化验并核对处置。回用细粉及破碎大颗粒为内部流；可销售降级 MAP 须另作实测共产品，核验产品身份并评估分配，不能用本废物行代替。

- 选定流: 废弃不合格颗粒磷酸一铵
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按 `cp_residues` 取得本行实际归属报告期数量，除以 P。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_residues
- 来源: eu-jrc-map-2007

###### 破损空聚丙烯袋废物 (`pp_sack_waste`)

仅在有包装损失时纳入；PP 袋废物与撒落肥料、随成品交付包装和内衬废物分开称量。记录污染、接收方和回收路线，不自动给予替代产品抵扣。

- 选定流: 破损空聚丙烯袋废物
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按 `cp_packaging` 取得本行实际归属报告期数量，除以 P。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_packaging
- 来源: eu-jrc-map-2007

###### 废润滑油 (`spent_oil_output`)

仅实际维修润滑剂废物适用。称量含污染物全油质量，适用时化验水/固体；核对新油、库存、留存包膜/润滑剂及实际损失去向。该流不指定处理路线，须保留接收方及实际回收/处置依据。进入产品的包膜油不得作为废润滑油。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 cp_residues 取得本行实际归属期间废物质量，除以 P。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_residues
- 来源：jrc-ilcd-2010

##### 基本流

###### 氨 (`ammonia_air`)

治理后离开场址的气态 NH3；含中和、制粒、干燥及搬运释放。NH3-N 仅按声明的分子量基准换算为 NH3。 介质：室外空气，未特指；保留实际排放高度/位置，必要时细化身份。

- 选定流: 氨 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按 `cp_air` 取得本行实际归属报告期数量，除以 P。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_air
- 来源: eu-jrc-map-2007

###### 氟化氢 (`hydrogen_fluoride_air`)

测定气态 HF 物种，不以按 F 计总氟代替。若仅测总 F，须确定物种分配或保留排放量未决；不能同时将总量赋给 HF 和 SiF4。 介质：室外空气，未特指；保留实际排放高度/位置，必要时细化身份。

- 选定流: 氟化氢 `08a91e70-3ddc-11dd-9804-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按 `cp_air` 取得本行实际归属报告期数量，除以 P。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_air
- 来源: us-epa-ap42-map-1993

###### 四氟化硅 (`silicon_tetrafluoride_air`)

气态 SiF4 与 HF、颗粒氟分别测量；化合物质量与所含 F 质量分开。氟化物总量不证明本物种数量。 介质：室外空气，未特指；保留实际排放高度/位置，必要时细化身份。

- 选定流: 四氟化硅 `fe0acd60-3ddc-11dd-a706-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按 `cp_air` 取得本行实际归属报告期数量，除以 P。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_air
- 来源: us-epa-ap42-map-1993

###### 颗粒物 (PM2.5) (`pm_fine_air`)

测定排出颗粒中 ≤2.5 微米的质量，声明实际可过滤/可凝结定义。旋风收集后回用粉尘为内部流而非排放。 介质：室外空气，未特指；保留实际排放高度/位置，必要时细化身份。

- 选定流: 颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按 `cp_air` 取得本行实际归属报告期数量，除以 P。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_air
- 来源: eu-jrc-map-2007

###### 颗粒物 (PM2.5 - PM10) (`pm_middle_air`)

测定互斥的 2.5–10 微米粒径质量；仅在 PM10 和 PM2.5 检测基准兼容时取非负差值并保留不确定性。 介质：室外空气，未特指；保留实际排放高度/位置，必要时细化身份。

- 选定流: 颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按 `cp_air` 取得本行实际归属报告期数量，除以 P。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_air
- 来源: eu-jrc-map-2007

###### 颗粒物（> PM10） (`pm_coarse_air`)

测定排出颗粒 >10 微米质量；仅对兼容测量使用总颗粒减 PM10。不得凭总粉尘虚构粒径分配；未决粒径阻止声称粒径清单完整。 介质：室外空气，未特指；保留实际排放高度/位置，必要时细化身份。

- 选定流: 颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按 `cp_air` 取得本行实际归属报告期数量，除以 P。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_air
- 来源: eu-jrc-map-2007

###### 二氧化碳（化石源） (`fossil_co2_air`)

有实际燃料/碳释放时纳入；核对燃料碳、入口 CO2 及其他碳去向。不设完全氧化默认份额，同一烟囱不得重复计量。 介质：室外空气，未特指；保留实际排放高度/位置，必要时细化身份。

- 选定流: 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按 `cp_air` 取得本行实际归属报告期数量，除以 P。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_air
- 来源: us-epa-ap42-gas-2026

###### 一氧化氮 (`nitric_oxide_air`)

有实际 NO 排放时记录物种质量。未实测物种分配和分子量换算，不得将按 NO2 计 NOx 总量抄为 NO kg。 介质：室外空气，未特指；保留实际排放高度/位置，必要时细化身份。

- 选定流: 一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按 `cp_air` 取得本行实际归属报告期数量，除以 P。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_air
- 来源: us-epa-ap42-gas-2026

###### 二氧化氮 (`nitrogen_dioxide_air`)

有实际 NO2 排放时记录其物种质量，不含 NO 和 N2O。不得在这对物种行之外再加 NOx 总量。 介质：室外空气，未特指；保留实际排放高度/位置，必要时细化身份。

- 选定流: 二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按 `cp_air` 取得本行实际归属报告期数量，除以 P。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_air
- 来源: us-epa-ap42-gas-2026

###### 二氧化硫 (`sulfur_dioxide_air`)

有燃烧或含硫原料导致的实际 SO2 时纳入；核对产品/废物留硫与排硫。硫氧化物汇总不等于本物种身份。 介质：室外空气，未特指；保留实际排放高度/位置，必要时细化身份。

- 选定流: 二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按 `cp_air` 取得本行实际归属报告期数量，除以 P。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_air
- 来源: us-epa-ap42-gas-2026

###### 一氧化碳（化石源） (`fossil_co_air`)

有不完全燃烧 CO 时纳入；含启停工况，在碳账中保留化石来源。 介质：室外空气，未特指；保留实际排放高度/位置，必要时细化身份。

- 选定流: 一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按 `cp_air` 取得本行实际归属报告期数量，除以 P。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_air
- 来源: us-epa-ap42-gas-2026

###### 甲烷 (化石源) (`fossil_methane_air`)

有甲烷逃逸及场内燃气泄漏时纳入。采用实际物种质量和化石来源，不使用延迟排放校正流。 介质：室外空气，未特指；保留实际排放高度/位置，必要时细化身份。

- 选定流: 甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按 `cp_air` 取得本行实际归属报告期数量，除以 P。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_air
- 来源: us-epa-ap42-gas-2026

###### 一氧化二氮 (`nitrous_oxide_air`)

有实际燃烧 N2O 时纳入；与 NOx 分开，本厂门边界不含施用土壤排放。 介质：室外空气，未特指；保留实际排放高度/位置，必要时细化身份。

- 选定流: 一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按 `cp_air` 取得本行实际归属报告期数量，除以 P。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_air
- 来源: us-epa-ap42-gas-2026

###### 水蒸气 (`water_vapour_air`)

干燥、反应、燃烧向空气净增的水蒸气，扣除实测入口空气水分。与产品水、外送废水、回流凝结水分开；不得省略蒸发量来凑水账。 介质：室外空气，未特指；保留实际排放高度/位置，必要时细化身份。

- 选定流: 水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按 `cp_air` 取得本行实际归属报告期数量，除以 P。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_air
- 来源: eu-jrc-map-2007

###### 甲醛 (`formaldehyde_air`)

实际燃气设备存在该燃烧 VOC 物种时纳入，按源检测和燃料/燃烧器证据筛查。记录实际排放质量，含异常工况；不假定正值或零值。介质为室外空气，未特指，按实际排放条件细化。

- 选定流：甲醛 `08a91e70-3ddc-11dd-941b-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 cp_air 取得本行实际归属期间物种质量，除以 P。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_air
- 来源：us-epa-ap42-gas-2026

###### 苯 (`benzene_air`)

实际燃气设备存在该燃烧 VOC 物种时纳入，按源检测和燃料/燃烧器证据筛查。记录实际排放质量，含异常工况；不假定正值或零值。介质为室外空气，未特指，按实际排放条件细化。

- 选定流：苯 `08a91e70-3ddc-11dd-9202-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 cp_air 取得本行实际归属期间物种质量，除以 P。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_air
- 来源：us-epa-ap42-gas-2026

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_physical | map_production | 先保留完整未分配实物账。内部细粉、洗涤液及收集粉尘保留全量，不给共产品抵扣。不得将产品、残余物或内部转移实物质量乘环境负荷份额。 | eu-jrc-map-2007; jrc-ilcd-2010 |
| allocation_campaign | 共用设备与公用工程 | 优先按实际产品、化学路线、市场状态及生产周期拆分。直接耗用实测；真实共用负荷按有因果依据的实际负载/运行时间或实测热负荷等驱动分配。保留归属同产品池的启停、失败、清洗、零产出批次、返工和 WIP。不得只将能耗归于成功小时，也不得按产量除两次。 | jrc-ilcd-2010 |
| allocation_external | 实际共产品 | 不预设共产品分配。可售降级产品或外部回收产出须有实测量、可用质量、真实去向及独立身份。先在声明的归因模型内评估拆分，再采用可证明物理因果；剩余不可分负荷才使用有据厂门市场价值，并列明期间、价格及敏感性。负荷份额和须为一。不自动给废物/回收替代抵扣。 | jrc-ilcd-2010 |
| allocation_capital | 设备与替换部件 | 完整安装/更换材料实物及实际报废去向，与服务期负荷份额分开。按有据寿命/产出、利用率及替换日期归属实际服务；不得每期计整台机器，也不得因设备不随原料耗用就删除基础设施。 | jrc-ilcd-2010 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

计算前定义报告池：同一颗粒 MAP 产品规格/状态、相同纳入化学路线/配置与边界、一个场址、一个声明的连续期间。代表性优先采用正常年度；较短生产周期须披露覆盖及季节/异常影响。保留批次号、阶段起止时间、库存及 WIP 变动。纳入归属本池的失败批次、零产出运行、启停、清洗、损失和返工。DAP 或其他 NP/PK/NPK 不能因共用设备就混入。返工仅在最终验收计一次产出，其此前投入和公用工程仍留原始总量。未完成 WIP 保留实测期初/期末质量与组成衔接，相关负荷跨期透明结转，不能删除或重复计量。

原始期间账在分配或相除前保留原始数量及单位。另设负荷账记录直接归属/共用份额、服务期、供方单位换算及唯一一次最终归一化。零产出池保留全部总量，不报告每 kg 结果；不得编造 P、引入不相关产出或悄然删除该期。[jrc-ilcd-2010]

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | map_production | 验收产品分母与库存 | 验收及库存账 | 批次/报告池号；新验收净重；皮重；水分；包膜；总 N；总 P；有效 P2O5；粒度；期初/期末库存与 WIP；发运；损失；返工关联 | 经校准净称量及批次化验；验收生产与物料移动核对，返工再验收不重计；最终归一化前的期间聚合保留：保留原始质量；P 为仅计一次的新验收净产出 kg；参考产出 = 1 kg；每 1 kg 参考流 | kg; 质量分数 | 每批及库存结账 | 完整声明期间，含零产出/失败批次 | 同场址/产品/状态/路线池 | 每 1 kg 参考流 | 校准、证书、验收号、库存衔接、WIP 负荷结转 |
| cp_materials | map_production | 新酸、NH3、实际辅料及补水 | 接收、库存、投料及化验记录 | 批次；供方；SKU；化学物/CAS；全交付质量；浓度；水；N/P/F/S/C；期初/期末库存；退货；内部转移；去向；供方参考量/属性 | 经校准地磅/罐/表计及可追溯密度；化验；投料与库存核对；供货为制剂时保留完整配方表；最终归一化前的期间聚合保留：保留湿总量及溶质/水原量；经库存/退货校正新料净耗；归属本池后仅除 P 一次；每 1 kg 参考流 | kg; m3; 质量分数 | 每次接收/投料及期末 | 报告池内全部运行 | 同场址/产品/状态/路线报告池 | 每 1 kg 参考流 | 供方 COA/SDS、密度条件、化验、校准表计及全湿/活性核对 |
| cp_utilities | map_production | 电力与场内燃气 | 表计及运行日志 | 起止读数；阶段；运行时间；启停/失败；交流电压/供电组合；燃气 T/绝对 p/Z/干湿组成；低位/高位热值；供方参考状态；共用驱动 | 经校准分表；保留发票核对及供方定义；共用需求与阶段运行时间分别实测；最终归一化前的期间聚合保留：保留原总量和条件；核对场址总表；分配真实共用负荷；换算参考单位；仅除 P 一次；每 1 kg 参考流 | kWh; MJ; m3; K; Pa | 时间序列、各生产周期及结账 | 全期间，含归属本池的待机/启停/失败运行 | 本场址实际阶段 | 每 1 kg 参考流 | 表计校准、气体分析、供用合同及因果驱动记录 |
| cp_steam | map_production | 外购蒸汽及返还凝结水 | 供回表计与焓账 | 外供/内供；kg；压力；温度；干度；回水 kg/T/p；补水；损失；供方 kg 或 MJ 参考及边界；焓方法 | 经校准质量表及 T/p/干度测量；实际状态下可追溯热力性质方法；供回区间及供方定义匹配；最终归一化前的期间聚合保留：供回质量原量独立保留；计算实测边界净热；归属服务需求；仅除 P 一次；每 1 kg 参考流 | kg; MJ; K; Pa | 各运行工况时间序列 | 完整报告期，含启停及排污 | 实际供方/场址界面 | 每 1 kg 参考流 | 表计/温度计证书、焓方法、供方数量及回水抵扣合同 |
| cp_air | map_production | 各空气物种与粒径 | 烟囱/逸散检测及物种账 | 源；物种/CAS；c；积分 V 或体积流率；检测区间；干湿/T/p；氧校正；运行时间；检出限；治理旁路；粒径；入口水分；碳来源 | 实际治理出口代表性源检测；浓度与载气条件匹配；流率只在其对应区间积分；评估搬运逸散、旁路与异常工况；最终归一化前的期间聚合保留：保留原始结果；积分物种质量，不重复乘时间；仅汇总兼容样品；归属后仅除 P 一次；每 1 kg 参考流 | mg/m3; m3; m3/h; h; kg | 各源/工况调查及可用连续记录 | 全期，声明检测外推及不确定性 | 场内实际全部排放点；不含背景已计上游烟囱 | 每 1 kg 参考流 | 检测方法、资质报告、流量/时间基准、不确定性、源覆盖及实际介质 |
| cp_residues | map_production | 外送排污、污泥和废弃 MAP | 废物/转移及化验记录 | 湿 kg；干物质份额；溶解/悬浮物；N/P/F/S/C；库存；接收方；处理；回用路线；法定废物分类 | 各独立外部流称量；代表性组成采样及接收联单核对；区分场内内部沉降与外送废物；最终归一化前的期间聚合保留：保留湿总量；同一废水总量不重计已分离固体；归属后仅除 P 一次；每 1 kg 参考流 | kg; 质量分数 | 每次移出及结账 | 完整报告期 | 全部实际残余物去向 | 每 1 kg 参考流 | 磅单、化验方法、接收方许可/回执和物料衡算 |
| cp_packaging | map_production | PP 袋、包装废物及随产品包装 | 采购、皮重及包装记录 | 组成；SKU；单个空重；计数；期初/期末库存；装料/破损/退回数量；撒落质量；实际内衬/缝线；去向 | 经校准秤称代表性空组件；计数实际数量并核对包装损失；撒落肥料分开；最终归一化前的期间聚合保留：保留计数及全实物包装 kg；随产品包装伴成品离开，但不计入净 P；归属负荷后仅除 P 一次；每 1 kg 参考流 | kg; items | 每包装批及结账 | 完整报告期 | 本场址实际交付方式 | 每 1 kg 参考流 | 空组件称量、BOM、供方数据、袋数核对及废物回执 |
| cp_capital | map_production | 不锈钢组分及实际其他设备材料 | 设备及维修账 | 按材料/牌号的完整安装 kg；替换；投用/退役；寿命；产出/运行时间；共用驱动；报废去向；隐含数据集边界 | 设备 BOM 或实测/可追溯组件质量、实际维修及运行能力；其他实际材料逐一另设行；最终归一化前的期间聚合保留：完整实物质量另记；归属记录支持的服务期负荷当量；仅除 P 一次；每 1 kg 参考流 | kg; years; h; kg throughput | 每次安装/替换及年度服务复核 | 支持本期的完整服务历史 | 纳入的生产及治理资产 | 每 1 kg 参考流 | 资产 BOM、寿命依据、替换记录及避免重计的负荷账 |
| cp_transport | map_production | 单独建模的入厂公路货运 | 托运及路线记录 | 实际方式/车辆；发运 kg；分段距离；装载；利用率；空返；供方交付边界 | 实际承运记录及路线距离；仅实际适用时匹配 30 吨柴油货车身份，其他方式另行；最终归一化前的期间聚合保留：保留发运原总量；各实际路段仅算一次服务；归属后仅除 P 一次；每 1 kg 参考流 | kg; km; kg*km | 每次托运 | 报告池全部入厂交付 | 供方背景未含的实际上游至厂门路段 | 每 1 kg 参考流 | 托运记录、路线依据、供方边界对照 |

### 计算规则

以下为未来实测记录的计算要求，不是默认数量。供方数据集参考量是链接分母，不是工厂报告期耗用量。

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalisation | 所有清单行 | A_period 保留为各行参考单位下完整原始归属期间量。在明确服务/共用负荷归属和供方基准换算后，归一化交换 = A_period / P，仅一次。P 须为正。P = 0 时保留 A_period，不生成归一化结果。map_product 固定为 1 kg。 | A_period; P; cp_output; 适用协议 | 每 1 kg 参考流交换及保留原总量 | jrc-ilcd-2010 |
| output_reconciliation | map_product | P 为新验收净产品称重之和，排除皮重和返工重复验收。独立按发运加期末减期初成品库存及实测验收后损失/转移核对。WIP 按阶段另核，实测隐含负荷跨期结转。解释差异，同一 P 不得同时套用生产及发运两套库存校正。 | cp_output; 验收号; 库存移动 | P 与明确库存/WIP 衔接 | eu-jrc-map-2007; jrc-ilcd-2010 |
| composition_bridge | phosphoric_acid_input; sulfuric_acid_input; ammonia_input; map_product; wastewater_output; sludge_output | 所含物种 kg = 全流 kg × 实测物种质量分数。水及全部实测溶质/固体按兼容分析基准分割全流。总 P 与有效 P2O5 分开。化学物/元素基准换算使用声明分子量、化验定义及来源。不假定商品等级为纯 MAP。 | cp_materials; cp_output; cp_residues; 化验基准 | 湿、干、活性、元素与水账 | eu-jrc-map-2007; mosaic-map-spec-2024 |
| supplier_quantity_bridge | 外部交换 | 保留实际 kg/m3/MJ 期间需求 D，及供方参考量 s、属性、浓度和状态。明确将 D 换至供方声明数量基准，再采用 D_converted / s 个供方单位。不得将期间需求乘供方参考量。外购整份溶液/制剂背景已含载水或上游配方组分时不再添加。兼容性未知则数据集链接未决。 | 适用协议; 供方定义; 实测组成/状态 | 兼容供方需求及换算依据 | jrc-ilcd-2010 |
| air_integration | ammonia_air; hydrogen_fluoride_air; silicon_tetrafluoride_air; pm_fine_air; pm_middle_air; pm_coarse_air; fossil_co2_air; nitric_oxide_air; nitrogen_dioxide_air; sulfur_dioxide_air; fossil_co_air; fossil_methane_air; nitrous_oxide_air; water_vapour_air; formaldehyde_air; benzene_air | 物种 kg = sum(c_mg_per_m3 × V_integrated_m3) / 1000000。若输入为流率而非已积分体积，先积分 flow_rate_m3_per_h × interval_h。已积分 V 绝不再乘运行小时。先匹配 T/p/干湿/O2 参考及代表工况再汇总；保留检出限及不确定性。 | cp_air; c; V 或流率与区间 | 归一化前完整期间物种 kg | eu-jrc-map-2007; us-epa-ap42-gas-2026 |
| conservative_balances | map_production | 核对全实测物流及独立 N/P/F/S/C 存量、库存/WIP、明确载气项。水账纳入入口水、产品/残余物水、凝结水、实测净蒸汽及有据化学生成/消耗。NH3 + H3PO4 生成 NH4H2PO4 不产生化学计量水；燃烧水须有实际燃料 H/组成及有据反应计算。跟踪包膜/燃料有机干物及全部实测碳去向。COD 或不明残差不得创造水、蒸发、收率或缺失物种。按声明测量不确定性解释残差。 | cp_materials; cp_output; cp_air; cp_residues; cp_steam; 期初/期末库存 | 完整实物质量、水及元素账、残差和不确定性 | eu-jrc-map-2007; us-epa-ap42-gas-2026 |
| particulate_speciation | pm_fine_air; pm_middle_air; pm_coarse_air; hydrogen_fluoride_air; silicon_tetrafluoride_air; nitric_oxide_air; nitrogen_dioxide_air | 仅在检测兼容时，PM2.5-10 = PM10 减 PM2.5，PM>10 = 总颗粒减 PM10。保留三个互斥区间，不再叠加嵌套总量。HF/SiF4 须实测或按 F 有效物种分解；由按 NO2 计 NOx 换 NO/NO2，须实际物种份额和分子量换算。颗粒 F/N/P 含量作为元素账中粉尘组成，不另复制一份粉尘质量。物种分配缺失保持未决，不虚构比例。 | cp_air; 物种/粒径方法 | 化学基准正确的互斥排放 | eu-jrc-map-2007; us-epa-ap42-map-1993 |
| capital_service | stainless_steel_input | 保留完整安装实物质量 K 及实际替换。按有据寿命总产出或寿命运行服务与实测利用率，仅归属本池使用的服务；声明剩余寿命、替换时点及共用驱动。归属当量 kg 影响负荷链接，不进入化学实物平衡。不设默认 K、寿命或分配份额。 | cp_capital; 实际服务记录 | 完整资产实物账及除 P 前的归属负荷当量 | jrc-ilcd-2010 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | 每个交换 | 同时核查化学/材料身份、完整名称字段、CAS、路线、实物状态、类型、介质、参考属性/单位及供方数量定义。仅无相反原生字段时可按本 PCR 限定广义产品身份。 | 身份直读、供方、化验及换算依据 |
| dq_pool | 所有清单行 | 保留完整原始期间总量、零产出/失败批次、启停、返工/WIP 及有因果的共用分配；正验收 P 仅归一化一次。协议只归属 map_production 及实际对应行。 | 签认期间账、运行日志、库存/WIP 衔接与负荷账 |
| dq_physical | map_production | 独立总质量、水及 N/P/F/S/C 核对，含全实物产出、库存、排污去向及有据反应生成/消耗；声明不确定性，未解释残差保留问题。 | 校准、化验、实物过程图及平衡 |
| dq_monitoring | 直接排放 | 评估全部源及工况，含逸散/旁路；量化覆盖、检出限、粒径/物种不确定性、时间外推及实际介质。筛查实际其他 VOC/痕量污染物，适用物种逐一补行；本检查项不豁免未列污染物。 | 采样计划、许可、源检测及源到行矩阵 |
| dq_background | 上游及处理链接 | 供方技术/地理/时间与 kg/m3/MJ 定义、溶液/活性基准及内含运输/回流须兼容。缺值为未来采集要求；未核实供方换算不得表示为完整链接。 | 供方参考数量及实际采集/换算记录 |
| dq_completeness | 完整数据集 | 复核实际 BOM、公用工程、资本、排放、包装及废物去向。实际缺失原子交换须增加；声明真实零值、测量缺口及不确定性。未决 UUID 如实披露，不删行。 | 现场调查、化学品台账、联单与完整性登记 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_identity | 参考及全部行 | 要求所述 MAP 参考身份/质量/kg 及唯一 map_product 参考产出，实际化学路线与颗粒肥料状态正确。拒绝 DAP、三铵盐、其他 NP/NPK 或不兼容等级/路线替代。 | un-cpc3-2025; eu-jrc-map-2007 |
| validate_denominator | 所有清单行 | 要求正实测验收 P 及完整同产品/状态/路线报告池。纳入失败/零产出批次、启停和返工/WIP，保留原总量并仅归一化一次。P = 0 时保留总量，不生成每 kg 结果。 | jrc-ilcd-2010 |
| validate_protocol | 采集协议 | 各协议须归于真实单一过程 map_production，与库存行相符，定义原始单位及期间聚合，供方参考量与耗用独立保留。 | jrc-ilcd-2010 |
| validate_assay | 投入及产品 | 拒绝将全湿产品/溶液混作纯 MAP、活性酸、有效磷或养分质量，或重复供应内含载体/组分。要求化验基准明确的总元素与水账。 | eu-jrc-map-2007; mosaic-map-spec-2024 |
| validate_energy | 公用工程 | 要求原生属性单位、实际燃气参考条件/密度/热量基准、实际供回汽水质量及焓与供方定义、实际电压/供电。身份检索成功不证明数量/背景兼容。 | eu-jrc-map-2007; us-epa-ap42-gas-2026 |
| validate_emissions | 空气及实际水/土壤排放 | 要求积分浓度体积或流率时间计算、正确介质、物理物种及碳来源；不得重复总量/粒径、NOx+NO+NO2、总氟化物+各物种。缺监测不是零值。实际处理/直接排放须有完整扩展清单。 | eu-jrc-map-2007; us-epa-ap42-gas-2026 |
| validate_conservation | map_production | 要求独立质量/水/N/P/F/S/C 与库存/WIP 衔接、不确定性及残差解释。不得编造反应水、蒸发或产品收率凑平衡。 | eu-jrc-map-2007; us-epa-ap42-gas-2026 |
| validate_burdens | 共产品、废物、设备及共用服务 | 保留全量未分配实物转移/产出及服务质量；区分归属负荷，核实份额与真实去向，保留替换/服务历史，避免自动回收抵扣或每期整机需求。 | jrc-ilcd-2010 |
| validate_completeness | 数据集声称 | 明确未决 UUID、供方兼容及缺失测量/物种分配。实际缺失原子交换及匹配背景补全后才能声明场址数据集完整。候选方法不构成科学批准，也不允许发布缺测数据。 | jrc-ilcd-2010 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 颗粒肥料级 MAP 制造前景，工厂门口 1 kg 净交付验收产品 |
| downstream_use | secondary_dataset；background_dataset，须经适当独立审核并补全实际数据集 |
| allowed_use | 路线、等级、水分、包膜、地理及供方数量明确且兼容的颗粒肥料供应链 |
| excluded_use | 工业/食品晶体、液体产品、DAP/其他 NP/PK/NPK 或干混；零产出池的每 kg 值；边界外施肥排放及下游交付声称 |
| required_metadata | PCR id；产品 UUID；路线/配置；生产者/场址；报告池/期间；实际化验与方法；水分/粒度/包膜；厂门和包装；原总量/P；库存/WIP/返工；供方身份/参考量；能量条件；监测与去向；分配/设备服务 |
| required_quality_disclosure | 实物与负荷两账；平衡残差/不确定性；调查/监测覆盖；零值/未检出处理；失败批次/WIP；未决身份、数量和供方链接；排除项；来源版本；独立完成前科学审核保持 pending |
| update_trigger | 产品化学组成、化验/状态、酸或氨来源、反应器/干燥/治理配置、公用供应/基准、包装方式、废物去向、实际排放、分配/服务期或流身份改变 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | 联合国统计司，CPC 3.0 结构，2025-06-30，34643 行。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv ；2026-10-15 阅读仓库保留的官方原件。 | 仅分类语境，不提供制造默认值，也不导致身份重复 |
| eu-jrc-map-2007 | official_guidance | 欧盟委员会，LVIC-AAF BAT 参考文件，2007-08，§§7.2.1、7.2.3–7.2.6、7.2.8–7.2.9；印刷页285、287–289 / PDF313、315–317。https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/lvic_aaf.pdf ；2026-10-15 阅读保留原件。 | MAP/DAP 反应/制粒及治理路线；区分硝酸磷肥与干混。NPK 案例数量、温度、公用工程示例不作为 MAP 默认值 |
| us-epa-ap42-map-1993 | official_guidance | 美国 EPA，AP-42 §8.5.3 Ammonium Phosphate，1993-07，1995-01 重排版，§§8.5.3.1–3、图8.5.3-1，PDF1–4。https://www.epa.gov/sites/default/files/2020-09/documents/8.5.3_ammonium_phosphate.pdf ；2026-10-15 获取。 | 颗粒磷肥范围；过程及物种检查项、回用与调理语境。历史美国工厂浓度、投料拆分、效率和因子不作为配方或默认值 |
| mosaic-map-spec-2024 | literature | Mosaic 公司，Monoammonium Phosphate 11-52-0 Specification Sheet，©2024，p.1 含表下限制。https://mosaicco.com/fileLibrary/publicFiles/0-Monoammonium-Phosphate-11-52-0-Specification-Sheet.pdf ；2026-10-15 获取。 | 生产者商品养分保证基准及组成披露不完整的证据，不作为实测化验、纯 MAP 含量或通用等级 |
| us-epa-ap42-gas-2026 | official_guidance | 美国 EPA，AP-42 §1.4 Natural Gas Combustion，保留的2026-10（页眉10/26）原件，pp.1–3，尤其§1.4.3。https://www.epa.gov/sites/default/files/2020-09/documents/1.4_natural_gas_combustion.pdf ；2026-10-15 阅读保留原件。 | 仅实际燃气燃烧物种和源检测检查项；锅炉/炉窑因子及默认燃气性质不移用为 MAP 干燥器数值 |
| jrc-ilcd-2010 | official_guidance | 欧盟 JRC，ILCD Handbook，General Guide for Life Cycle Assessment，Detailed Guidance，2010-03 第一版，实物/分配语境印刷p.80 / PDF100，§7.9.3 印刷p.257 / PDF277。https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf ；2026-10-15 阅读保留原件。 | 归因清单、实物与分配负荷、物理因果及剩余市场价值分配；采集/计算协议为本 PCR 明确操作要求，不是文献默认数量 |
