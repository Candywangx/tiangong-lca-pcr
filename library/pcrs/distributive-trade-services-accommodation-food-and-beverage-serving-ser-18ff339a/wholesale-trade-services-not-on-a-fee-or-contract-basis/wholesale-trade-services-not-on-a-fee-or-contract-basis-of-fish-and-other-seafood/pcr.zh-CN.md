---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-fish-and-other-seafood
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 预包装镀冰冷冻大西洋鳕鱼片自营批发

## 1. 范围与适用性

本 PCR 定义 Gadus morhua（大西洋鳕）鱼片的商人所有实体批发货批服务，实际供方在声明接收交接之前已完成冻结、镀冰、初级密封包装及放行。商人取得所有权并承担转售风险，在实际运营冻库维持接收可用冻结状态、装卸完整包，并向企业买方完成验收转售。实际温度记录、封口包装状态和约定产品验收定义维持后状态与商业交接。

范围排除活体或捕获完整鱼生产、屠宰切片、初次冻结、新镀冰、开启重包初级包装、解冻复冻、切割、配料处理、零售、代理收费及独立纯仓储。实际解冻损坏事件需记录隔离退回处置或另行审核加工责任，不能假定重新放行为普通冻品。不能推断活体完整鳕生产数据集包含切片冻结冰衣或初级包装制造。

本服务附加排除全部上游商品生产、继承冰衣及初级包装，包括损失部分。完整链条声明前，实际归属来源交接点需求及已有损失状态覆盖需单独仅关联一次。实际服务装卸及声明废物接收处理在此仅计一次。历史 Codex 和 FAO 文献支持物理产品状态区分，仍需实际供方放行、适用要求及买方标准。不规定通用储存数值制度、冰衣比例、AQL、自动组胺标准或每包必检义务。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-fish-and-other-seafood` |
| classification_refs | CPC3 `61024`；较窄供方已放行冻结镀冰初级预包 Gadus morhua 鱼片批发服务 |
| covered_products | 维持供方已放行镀冰密封冷冻大西洋鳕鱼片的自营企业间货批服务 |
| excluded_products | 其他物种及活体完整鱼；屠宰切片冻结镀冰重包解冻复冻加工；零售代理纯仓储服务 |
| representative_product | 具有净鱼冰衣包装及温度时间限定信息的实际密封冻鳕鱼片货批已完成批发服务 |
| production_route | 在完整冻结镀冰初级包装供方交接点取得所有权接收 -> 维持冻结储存装卸 -> 企业间验收转售交接 |
| market_state | 计数服务；净鱼、继承冰衣、初级外包装及实际运输载荷为单独商品审计量 |


## 3. 参考流

| Field | Value |
| --- | --- |
| What | 已完成的预包装镀冰冷冻大西洋鳕鱼片自营批发货批 |
| How much | 1 个实际完成验收商业货批服务 |
| How well | 实际供方放行物种鱼片冰衣初级密封状态维持冻结并在真实商业交接点验收，不推断安全或未来货架期保证 |
| How long or cycle | 实际接收到验收转售冻库装卸区间，库存报表及资产服务期间单独处理 |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 已完成的预包装镀冰冷冻大西洋鳕鱼片自营批发货批 |
| reference_flow_property | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | 数量单位组 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | consignment_id; ownership_resale_risk; business_buyer; species_Gadus_morhua; supplier_release_and_gate; net_fish_mass_method; glaze_identity_mass_basis; primary_seal_pack_state; outer_pack_and_transport_load; actual_frozen_temperature_history; actual_start_end_duration_unit; quality_acceptance_gate; origin_site_period; provider_freight_treatment_scope; refrigerant_boundary_owner; source_gate_commodity_adjustment |

N > 0 为实际冲回后唯一商业验收货批数。包车辆发票行、净鱼 kg 和冰衣比例均不能与本服务数量互换。实际数据包元数据须保留真实合同交接单位、数量状态时间和全部限定信息，不得人为拆文件稀释负担。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| count_reference | 参考产品 | 物品数量 | Item(s) | 计实际验收货批标识及正 N，与包数净鱼质量运输载荷及冻库时间区分。 |
| fish_glaze_pack | 商品审计与 discarded_food_packs; discarded_food_packs_atomic_case | 质量及实际包数状态 | kg；实际包数 | 将排除冰衣包装的净鱼与冰衣、初级包装、二三级材料和实际货载分开。采用可追溯供方证据及适用代表性验证，不用通用比例或每包破坏性检测。 |
| state_change | 鱼冰衣库存审计 | 实际状态特定质量 | kg 及实际温度时间单位 | 冰衣升华、组织脱水、封口破损、鱼废弃、分析取样及退包是不同事件，需相同状态货批证据和不确定性，不能假定未知毛 kg 属某一去向。 |
| native_units | 所有清单行 | 实际兼容属性 | 实际原生单位 | 保留服务商材料资产实际原生单位，数量面积体积质量换算需状态特定因子单位基准来源及适用密度温度，组分视图保持不可相加。 |


## 5. 系统边界

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 实际供方放行且已冻结镀冰初级密封鳕鱼片，物种净鱼冰衣包装组成、完整继承来源交接覆盖及温度品质证据 |
| starting_condition_role | 服务附加的完整接收商品状态，不是新初次冻结镀冰步骤或无负担鱼来源 |
| product_classification_scope | CPC61024 中自营冷冻 Gadus morhua 鱼片批发子集，不是活鱼生产 |
| recursive_input_rule | 本服务不创建消耗鱼冰衣初级包装生产交换，不将同货批递归自身。实际外包仓储辅助需单独不重叠职责交接。 |
| upstream_dataset_requirement | 实际服务用品服务商资产全寿命及单独匹配完整冻结镀冰初级包装商品交接；缺失捕捞养殖屠宰切片冻结镀冰包装阶段在服务外仅组装一次 |
| disclosure | 供方放行状态阶段覆盖、实际净鱼冰衣包装载荷基准、采样证据、温度库存退回废弃事件、制冷资产服务商运输处理范围、未知项及商品归属调整 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| service_only | frozen_cod_wholesale | 全部商品鱼生产、继承冰衣初级包装及损失上游负担均在服务交换外，完整链条前单独关联实际来源交接归属数量及损失覆盖。实际服务去向及声明接收处理处置仅计一次。 |  |
| frozen_preservation | frozen_cod_wholesale | 前状态是实际完整供方放行冻结镀冰密封鱼片货批，经实际冻库作业维持可用冻结封口品质状态至买方验收。实际解冻损坏需真实隔离退回处置或审核加工，不能默默假定普通放行。 | codex-frozen-fillets-190 |
| net_and_glaze | 商品审计 | 以实际供方货批证据及适当验证区分食品净含量与冰衣包装。分析除冰样品准备不代表服务普遍重镀冰解冻复冻，不从历史来源复制通用采样或定量质量阈值。 鱼肉净重仍包含鱼组织内在水分，排除外部冰衣和包装后不等于干物质重量。 | codex-frozen-fillets-190 |
| inherited_protection | frozen_cod_wholesale | 继承冰衣可通过升华保护组织，包装阻隔及运输层级具有不同角色。实际质量状态证据须区分组织脱水冰损及包装变化，继承冰衣不是新公用水。 | fao-frozen-fish-after-freezing |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| frozen_cod_wholesale | 鳕鱼片维持冻结保鲜及自营批发 | required | 实际商人所有权转售及对完整供方放行鳕鱼片包的冻库责任 | 有界维持冻结保鲜节点；可用供方状态 -> 实际储存装卸 -> 企业间验收货批，保留实际拒收退回去向 | `accepted_service` |

本节点承担真实保鲜，不制造另一个鱼片或虚构冷却服务参考。冻库可服务重叠货批期间，实际卸装检验取样、清洁除霜和失败拒收库存均保留事件货批期间标识。拒收包、内部移库或重复发票不产生验收数量。打开的样品包及样品废物为单独实际事件，不代表每个销售密封包发生转化。

### 过程：鳕鱼片维持冻结保鲜及自营批发 (`frozen_cod_wholesale`)

#### 输入

##### 产品流

###### 实际使用点交流电 (`electricity_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Energy / kWh
- 数量规则：每参考流的实际可归属维持冻结储存及批发实际电力；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

范围证据要求：需实际计量区间、进货冻结状态、库房货批载荷、温度历史及全部使用方驱动。独立校验须冻库载荷气候期间范围匹配，不设每净鱼 kg 固定电耗。

###### 实际液态处理自来水供给 (`facility_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Volume / m3
- 数量规则：每参考流的实际可归属实际购入冻库卫生及设施用水；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需实际计量领用用途区间、适用样品范围、供方覆盖及水去向。继承冰衣损失、鱼肉水分及废水不等于实测公用水供应。

###### 实际独立记录的合成洗涤剂投入 (`operating_supplies_synthetic_detergent`)

仅适用于产品配方、供应状态及用途记录确认的实际合成表面活性洗涤剂。记录扣除包装皮重的材料净量，区分浓缩液与稀释水，整体配方与组分不得相加重复计入。肥皂、消毒剂、抹布、滤材等仍按各自实际身份记录，不预设清洁配方、剂量或发生。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属实际冻库清洁及维护用品；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需实际品项配方浓度、库存退回及换算证据和接收释放状态，施用品或安全限值不是直接排放量。

###### 实际独立确认的供应柴油 (`fuel_supply_diesel_supply`)

仅适用于本运行燃料要求内实际独立确认的柴油。通用身份为Mass/kg；记录实际配方、供应方、供给门及原生库存范围。原生数量为升时，最终换算kg须有实际相容密度、温度状态、质量体积比单位及来源，不使用目录默认密度或热值。供应库存与燃烧量是不同记录；其他燃料保留余项，购买燃料或未解释库存差不证明燃烧及排放。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Volume / L
- 数量规则：每参考流的实际可归属实际供应自有装卸及辅助燃料；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需实际牌号、期初收货期末及可用退回、适用密度温度换算和互斥燃烧未燃去向，不默认交付燃料等于燃烧。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已完成的预包装镀冰冷冻大西洋鳕鱼片自营批发货批 (`accepted_service`)

一个自完整供方放行镀冰密封鱼片交接点起维持冻结、实际验收企业间转售货批。净鱼冰衣初级外包装及运输载荷为不同限定信息，不是本计数服务身份。

- 选定流：已完成的预包装镀冰冷冻大西洋鳕鱼片自营批发货批
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_consignment`

范围证据要求：数量仅定义归一化，需实际 Gadus morhua 物种、供方放行交接、净鱼冰衣包装基准、温度时间密封状态及商业验收；不设每数量固定 kg、冰衣比例或时长。

##### 废物流

###### 废弃密封挂冰冻大西洋鳕鱼片包装整件 (`discarded_food_packs_atomic_case`)

仅在实际独立记录确认“废弃密封挂冰冻大西洋鳕鱼片包装整件”时适用。本卡只覆盖该命名实物状态及自身实际净量、保留组成和接收门。其他部件、碎片、游离液、独立包装及清理载体仍属于`discarded_food_packs`中的强制完成记录；不得移动边界、预设事件、将库存差当废弃，或把仍保留在整体流内的组分另算出口。实际混收流须匹配自身准确身份。原有原生单位数量协议只用于本独占具体情形，其他实际去向分别协调。

- 选定流：废弃密封挂冰冻大西洋鳕鱼片包装整件
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属实际废弃冷冻鱼片包及所含组分；cp_fish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fish`

范围证据要求：需实际接收原生数量与组分基准、实际供方交接点当量和处理范围。解冻警报、质量拒收或毛质量差额不能证明废弃净鱼 kg。

###### 实际单独收集的纸类包装废物 (`other_wastes_paper_pack`)

仅适用于本节点实际独立废弃、单独收集的纸类包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：包装废弃物，纸类 `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属实际非食品作业及外包装废物；cp_fates。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据要求：需实际组分数量换算及处理接收；继承初级包装最终成为废物不意味着其生产为新服务输入。


###### 实际单独收集的金属包装废物 (`other_wastes_metal_pack`)

仅适用于本节点实际独立废弃、单独收集的金属包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：金属包装废物 `cdda6013-c0c5-4c72-990a-f5668fe71069`
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属实际非食品作业及外包装废物；cp_fates。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据要求：需实际组分数量换算及处理接收；继承初级包装最终成为废物不意味着其生产为新服务输入。


###### 实际单独收集的塑料包装废物 (`other_wastes_plastic_pack`)

仅适用于实际独立废弃、单独收集的空塑料包装，保留实际组成、含水状态及接收方。含残留商品的混合包装、污染混合流、设备内保温泡沫、一次性抹布及复合包装不使用本分支；整体混合流中的组分仅作不可相加审计，运输处理责任计入一次。不预设排空、回收、发生或数量。

- 选定流：塑料包装废物 `919351c4-3e25-4092-9934-73ecec021a3b`
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属实际非食品作业及外包装废物；cp_fates。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据要求：需实际组分数量换算及处理接收；继承初级包装最终成为废物不意味着其生产为新服务输入。

##### 基本流

###### 来自已识别继承或设施来源实际水蒸气释放 (`water_vapour_releases`)

仅实际兼容测量模型可确定蒸气及来源。冰衣升华、鱼肉组织脱水、库霜除霜及设施水蒸发为不同角色；毛差额不自动为水蒸气或鱼损。

仅适用于独立证据确认的H2O水蒸气向空气直接释放，保留实际来源、状态及原生kgH2O。质量差、液态融水、受控废水、水中污染物及未解释库存差均非水蒸气证据。保留继承商品来源及不可相加审计，不新增供水、不预设蒸发或重复上游供应商负荷；其他接收介质保留独立身份。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属来自已识别继承或设施来源实际水蒸气释放；cp_fates。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据要求：需实际来源状态物质介质区间及完整测量模型操作数和不确定性，保留继承冰衣来源及不可相加冰水包装审计，不新增镀冰水输入。

###### 实际有独立证据的向空气排放化石二氧化碳 (`other_releases_co2_fossil_air`)

仅在实际证据确认化石来源、二氧化碳物种和向空气直接释放时适用。保留报告的碳或CO2基准，碳转CO2须独立有证据的化学计量，不预设系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属实际已识别燃烧及设施化学释放；cp_releases。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_releases`

范围证据要求：需实测物种或实际兼容活动因子及适用组成去向单位来源；产品供应、安全限值、采样结果或未知鱼库存不是排放量。


###### 实际有独立证据的向空气排放化石甲烷 (`other_releases_methane_fossil_air`)

仅在实际证据确认化石来源、甲烷物种和向空气直接释放时适用。生物源或来源未知甲烷仍在余项要求中，不得改标化石源；不预设泄漏发生、气体比例、数量或排放系数。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属实际已识别燃烧及设施化学释放；cp_releases。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_releases`

范围证据要求：需实测物种或实际兼容活动因子及适用组成去向单位来源；产品供应、安全限值、采样结果或未知鱼库存不是排放量。


###### 实际有独立证据的向空气排放氧化亚氮 (`other_releases_nitrous_oxide_air`)

仅在实际证据确认氧化亚氮物种及向空气直接释放时适用。原生数量为N2O质量，不是氮质量或氮气质量，不预设排放系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属实际已识别燃烧及设施化学释放；cp_releases。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_releases`

范围证据要求：需实测物种或实际兼容活动因子及适用组成去向单位来源；产品供应、安全限值、采样结果或未知鱼库存不是排放量。

## 7. 分配与联产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| operating_attribution | frozen_cod_wholesale | 优先归属实际事件分表负担，共享制冷库房辅助需基于全部真实使用方的兼容有证据热载或占用体积时间驱动，保留闲置除霜清洁和拒收退回库存。解释驱动后归属总量仅除正验收 N 一次，不自动采用净鱼 kg、平均作业或收入。 |  |
| asset_attribution | shared_assets | 对全部使用方期间采用完整制造维护实际更换寿命终结及实际已用 / 兼容全寿命驱动。寿命驱动来自观察或观察历史加有证据剩余使用退役、不确定性敏感性。资产当量份额 / N 或全寿命服务商原生服务 / N 二选一，不并用或重复归一化；资产范围已含工厂充注时上游归属在那里。 |  |
| supplies_and_returns | 实际作业用品 | 每个实际独立原生品项状态 S = 可归属期初 + 净外部收货 - 期末。选择保留实际可用外退的总量 S / N，或净消耗 (S - 匹配可用外退) / N 并省略对应退回交换。期末包括回收留存，废物泄漏保留供应负担；内部转移及继承鱼冰衣初级包不是新作业购入。 |  |
| refrigerant_origin | 全部制冷角色 | 回收工质可能源于资产数据集已承担工厂预充，绝不能从不相关当期补充中扣外送或产生负供应。仅证明同范围独立库存可净消耗扣减且省略匹配退回；其他情形保留实际回收 Product 转移、不自动抵扣并保留原资产充注归属。内部回收留存瓶仍在期末库存内。 |  |
| commodity_interface | 鱼冰衣初级包装备查 | 完整供方放行冻结镀冰初级包装商品制造在服务外。以原状态单位换算证据追踪实际来源交接归属数量到验收货批、期末、可用退回出口及有证据废弃状态变化份额。净鱼继承冰衣包装基准不同，冰衣升华不自动为净鱼损失，当前毛差额不是来源交接点损失。商品基线已有同一损失阶段时核对，缺失归属需求仅加一次，不重复服务处理。仅活体捕获鱼数据需在本附加外补齐屠宰切片冻结冰衣包装阶段。 |  |
| outlets | 全部实际出口 | 回收制冷剂、未用用品、拒收鱼或退包不自动抵扣避免产品材料废物处理。可用降级食品外送需实际状态接收且仍属商品审计，不新增已完成批发输出。处置接收商品归属未知阻止完整链条定稿。 |  |
| commodity_link_scope | nonexchange commodity interface | 原交接库存及已完成外部集成保留实际记录的原始数量。声明source_assignment_scope_id、实际target_consignment_ids/target_cohort_id及source_assignment_quantity_basis，分为single_consignment_case、target_cohort_total或already_per_reference。仅当正same_target_scope_N准确覆盖已分配目标范围时，目标群原始总量才按source_link_per_service_quantity=source_link_assigned_raw_quantity/same_target_scope_N形成与1个accepted_service组合且仅用一次的接口，须原生单位状态来源及接收撤销证据。单货批N=1与已每参考量不再除一次。外部实际库存或阶段集成记录不得按服务N缩量，也不得以整个来源群N去除较窄目标已分配量；保留原始量与明确仅一次关联。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_consignment | frozen_cod_wholesale | accepted_service | 实际供方状态及商业验收台账 | site_id; campaign_id; period_id; consignment_id; contract_id; business_buyer; ownership_start; resale_risk; supplier_id; supplier_gate; species; scientific_name; fillet_presentation; supplier_release; supplier_processing_coverage; source_lot_ids; primary_seal_state; actual_net_fish_mass; mass_unit; glaze_identity; glaze_mass; glaze_basis; primary_pack_mass; outer_pack_mass; actual_received_load; intake_temperature; temperature_unit; actual_start; actual_end; time_zone; duration; duration_unit; thermal_records; quality_criteria; acceptance_record; reversal_id; N | 核实实际完整供方放行冻结镀冰密封物种状态及商人企业间转售验收，保留实际温度包装数量证据，不用发票包拆分创造数量。 | Item(s) | 每个实际货批冲回 | 实际接收到验收交接期间 | 实际商人冻库及商业买方交接点 | per reference flow | 供方放行阶段范围、所有权、测量验证状态及商业验收 |
| cp_fish | frozen_cod_wholesale | 鱼/冰衣/包装备查与 discarded_food_packs | 货批状态组分库存及代表性验证台账 | site_id; room_id; campaign_id; period_id; consignment_id; lot_id; event_id; event_time; time_zone; SKU; scientific_species; pack_count; pack_unit; primary_pack_id; seal_state; gross_pack_mass; outer_tare; primary_tare; mass_unit; net_fish_mass_excluding_glaze; net_fish_method; net_fish_evidence_source; glaze_ice_mass; glaze_composition; glaze_mass_basis; inherited_water_origin; tissue_state; temperature; temperature_unit; room_interval_start; room_interval_end; duration; duration_unit; supplier_label_basis; sampling_plan; sample_size; sample_unit; sample_selection; verification_method_version; sampled_net_fish; sampled_glaze; sampled_tare; scale_calibration; sample_uncertainty; analytical_sample_removal; sample_receiver_fate; opening_stock; external_receipts; buyer_returns; physical_dispatch; net_accepted_dispatch; supplier_returns; useful_other_exit; closing_stock; actual_discarded_pack_quantity; discard_native_unit; discard_composition_basis; discard_receiver; discard_treatment_coverage; glaze_state_change; tissue_dehydration; state_change_method; state_change_unit; state_change_basis; state_change_source; unexplained_residual; source_gate_quantity; source_gate_unit; source_gate_state; source_gate_dataset; source_gate_conversion_method; source_gate_conversion_factor; source_gate_conversion_unit; source_gate_conversion_basis; source_gate_conversion_source; predecessor_stage_coverage; missing_prewholesale_stage; stage_owner; baseline_loss_coverage; commodity_adjustment_owner; commodity_adjustment_status; source_assignment_scope_id; source_assignment_quantity_basis; target_consignment_ids; target_cohort_id; source_quantity_already_per_reference; external_raw_integration_quantity_preserved; once_only_service_link_evidence; source_link_assigned_raw_quantity; source_link_assigned_raw_quantity_unit; source_link_assigned_raw_quantity_basis; source_link_assigned_raw_quantity_method; source_link_assigned_raw_quantity_state; source_link_assigned_raw_quantity_source; source_link_assigned_raw_quantity_sample_time; same_target_scope_N; same_target_scope_N_unit; same_target_scope_N_basis; same_target_scope_N_method; same_target_scope_N_state; same_target_scope_N_source; same_target_scope_N_sample_time; source_link_per_service_quantity; source_link_per_service_quantity_unit; source_link_per_service_quantity_basis; source_link_per_service_quantity_method; source_link_per_service_quantity_state; source_link_per_service_quantity_source; source_link_per_service_quantity_sample_time; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | 核对实际完整包数及兼容鱼冰衣包装状态、供方证据和适当代表性验证，保留采样来源不确定性而非逐销售包检测；分别追踪样品移除废物、全部库存退回废弃及来源交接需求，不以总短缺推组分去向。 只归属独立确认的实物情形，其他实际去向按来源分别保留；每个原生记录只属于一个交换，任何总量仅作不可相加审计。 | 实际包数；声明组分状态基准 kg | 每次库存退回发运废弃及实际采样温度事件 | 全部实际库存冻库及商品关联期间 | 实际供方货批初级包及实际接收状态 | per reference flow | 可追溯放行、称重皮重组分采样证据、实际接收及原状态供方覆盖 |
| cp_energy | frozen_cod_wholesale | electricity 与实际燃料燃烧 | 实际冻库与辅助计量台账 | site_id; room_id; campaign_id; period_id; consignment_id; asset_id; event_id; start_time; end_time; time_zone; duration; duration_unit; meter_id; carrier; reading_start; reading_end; reading_unit; incoming_product_thermal_state; ambient_temperature; temperature_unit; compressor_fan_defrost_scope; thermal_load_evidence; occupied_volume; volume_unit; occupancy_duration; occupancy_unit; actual_driver_used; driver_used_unit; all_consumer_driver; all_consumer_driver_unit; idle_cleaning_scope; actual_burn; burn_unit; burn_method; carried_closing; usable_nonburned_return; contained_nonburned_waste; unrecovered_nonburned_loss; provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 计量实际维持冻结作业及实际燃烧，用记录全部使用方驱动归属不重叠库房装卸；初次冻结及镀冰再冷却在上游；重建燃烧需原生去向完整互斥且调查未知损失。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | 实际能源或燃料单位 | 每个实际计量作业区间 | 完整实际冻库服务报表期间 | 全部纳入库房装卸辅助使用方 | per reference flow | 计量校准、实际温度使用证据及完整能源服务商燃烧覆盖 |
| cp_refrigerant | frozen_cod_wholesale | refrigerant_supply、recovered_refrigerant、spent_refrigerant 与 refrigerant_releases | 原始充注与作业工质全去向台账 | site_id; system_id; period_id; consignment_id; event_id; event_time; time_zone; boundary_scope; chemical_or_blend; composition; composition_basis; composition_source; mass_unit; installed_opening; container_opening; external_net_receipts; receipt_gross; receipt_tare; installed_closing; container_closing; internal_charge; internal_recovery; usable_external_recovery; contained_external_waste; other_external_handoff; measured_release; measurement_method; release_species; receiving_medium; release_interval; factor; factor_unit; factor_basis; factor_source; unresolved_balance; uncertainty; receiver; treatment_coverage; supplier_coverage; factory_charge_dataset; asset_manufacture_coverage; original_charge_owner; operating_makeup_owner; recovered_charge_provenance; matched_standalone_supply_lot; matched_standalone_quantity; recovery_netting_eligibility; omit_matched_return_exchange; actual_driver_used; driver_used_unit; all_consumer_driver; all_consumer_driver_unit | 在明确设备加适用容器一致区间称量实际化学混合物，内部充注回收抵消；保留原工厂资产与独立补充来源、全部外部去向及不确定性；未知差额调查而非自动排放，工厂充注回收不得抵不相关补充。 | 实际化学物混合物 kg；单独已识别物种 kg | 每次充注回收维护释放及库存边界 | 实际设备容器服务区间 | 实际设备储存边界及外部接收方 | per reference flow | 化学详情、实际充注回收库存接收及明确上游归属覆盖 |
| cp_supplies | frozen_cod_wholesale | facility_water、new_outer_packaging、operating_supplies、fuel_supply 与 usable_supply_returns | 原生品项库存及继承新增台账 | site_id; campaign_id; period_id; consignment_id; event_id; event_time; time_zone; SKU; formulation; concentration; concentration_unit; composition_basis; composition_source; native_unit; opening_quantity; receipt_gross; receipt_tare; receipt_net; closing_quantity; recovered_closing; usable_external_return; contained_waste; uncontained_loss; inherited_or_new; packaging_level; intact_primary_seal; service_owned_outer_scope; matched_input_id; external_return_id; return_match; gross_or_consumed_view; omit_matched_return_exchange; density; density_unit; temperature; temperature_unit; conversion_factor; factor_unit; factor_basis; factor_source; actual_water_purpose; analytical_sample_event; supplier_provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 采用扣皮实际净收货及匹配原生库存退回，不把继承冰衣初级包制造作为输入；额外外包装及分析样品辅助须实际事件，供应消耗容装废物和直接释放去向分开。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 柴油升转kg须有实际相容密度、温度状态、质量体积比单位及来源，不预设换算。 | 实际品项原生单位 | 每个实际外部事件及盘点 | 全部实际服务库存期间 | 实际独立用品状态及承担服务范围 | per reference flow | 实际收货库存匹配退回、范围及原生换算来源 |
| cp_assets | frozen_cod_wholesale | shared_assets | 全寿命冻库装卸周转服务台账 | site_id; room_id; period_id; consignment_id; asset_id; reusable_container_id; configuration; consumer_id; phase_id; event_date; manufacture_dataset; factory_charge_coverage; maintenance_record; replacement_record; end_of_life_record; driver_used; driver_used_unit; driver_lifetime; driver_lifetime_unit; observed_history; evidenced_remaining_use; remaining_source; termination_assumption; attribution_view; uncertainty; sensitivity; update_trigger | 列出全部实际资产使用方期间，以兼容观察或有证据寿命驱动及一种视图匹配完整制造维护更换寿命终结；工厂充注覆盖和周转运输资产明确归属。 | Item(s) 或实际寿命服务原生单位 | 每个实际资产事件及期间复核 | 实际及有证据剩余服务寿命 | 全部实际使用方期间 | per reference flow | 完整寿命范围及实际有证据兼容服务驱动 |
| cp_providers | frozen_cod_wholesale | provider_services | 实际物理成果及范围台账 | site_id; room_id; period_id; consignment_id; provider_id; service_id; event_date; actual_completed_result; physical_quantity; native_unit; duration; duration_unit; sample_plan; sample_quantity; sample_unit; actual_test_scope; completion_record; upstream_dataset; energy_coverage; refrigerant_coverage; material_coverage; asset_lifecycle_coverage; freight_coverage; treatment_coverage; direct_emission_coverage; actual_driver_used; driver_used_unit; all_consumer_driver; all_consumer_driver_unit; missing_coverage | 核实实际完成服务商成果原生物理数量及真实采样检测范围，直接与服务商制冷装卸资产货运处理责任仅核对一次；供方放行证据本身不是另一次实验室活动。 | 实际服务商原生单位 | 每个实际完成成果 | 实际服务区间 | 全部纳入合同责任 | per reference flow | 成果单位采样范围证据及完整上游覆盖矩阵 |
| cp_freight | frozen_cod_wholesale | freight | 实际组分载荷及冷链旅程台账 | site_id; period_id; consignment_id; leg_id; event_date; route; mode; provider_id; actual_net_cargo_load; load_unit; fish_component_mass; glaze_component_mass; package_component_mass; loading_asset_tare; included_tare_scope; load_conversion_factor; load_conversion_unit; load_conversion_basis; load_conversion_source; distance; distance_unit; distance_conversion_factor; distance_conversion_unit; distance_conversion_source; provider_native_unit; cold_leg_scope; thermal_records; temperature_unit; transport_energy_coverage; transport_refrigerant_coverage; empty_return_method; actual_driver_used; driver_used_unit; all_consumer_driver; all_consumer_driver_unit; upstream_delivered_gate_coverage; duplicate_leg_check | 采用实际运输净货载和兼容单位距离或准确服务商原生服务；区分净鱼、纳入冰衣包装及实际装载皮重，保留冷链资源空返和供方到货交接范围避免重复。 | kg*km 或实际服务商原生单位 | 每个实际路段 | 全部纳入进出场退回废物路段 | 实际声明运输责任 | per reference flow | 实际载荷组成皮重距离及冷链服务商覆盖证明 |
| cp_fates | frozen_cod_wholesale | environmental_water、other_wastes、contained_wastewater、water_outfalls 与 water_vapour_releases | 实际来源状态接收水与废物台账 | site_id; room_id; period_id; consignment_id; event_id; event_time; time_zone; start_time; end_time; duration; duration_unit; material_or_water_source; inherited_glaze_or_fish_or_facility_origin; state; native_unit; measured_mass; mass_unit; collected_volume; received_volume; volume_unit; density; density_unit; temperature; temperature_unit; water_role; purchased_or_direct; glaze_composition; concentration; concentration_unit; concentration_basis; composition_source; receiver; receiving_medium; direct_outfall_id; treatment_dataset; treatment_coverage; vapour_measurement; measurement_unit; physical_model; model_version; model_operands; operand_units; operand_basis; operand_sources; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 计量实际原生来源去向、组成接收及处理范围，将继承冰组织水与设施公用和分析辅助分开。直接取水容装液体排口蒸气及混合包组分视图不能互换相加，未知库存差额不能给出其中任一数量。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | 实际材料水原生单位及实测物种 kg | 每次实际取水废物排放模型区间 | 实际完整服务收集区间 | 实际直接边界及外部接收处理 | per reference flow | 实际测量模型来源接收及完整不重叠覆盖 |
| cp_releases | frozen_cod_wholesale | other_releases | 实际化学物介质活动因子台账 | site_id; period_id; consignment_id; event_id; start_time; end_time; time_zone; duration; duration_unit; species; receiving_medium; actual_measurement; measurement_unit; actual_activity; activity_unit; actual_burn; burn_unit; emission_factor; factor_unit; factor_basis; factor_source; composition_fraction; composition_basis; composition_source; release_fraction; fate_basis; fate_source; molecular_conversion; conversion_source; upstream_provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 采用实际物质介质测量或兼容实际活动及来源特定完整因子，保留必需组成去向基准仅一次，不将鱼冰衣用品库存差额或安全限值作为排放。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kg 物种及实际兼容活动单位 | 每个实际测量模型区间 | 完整实际归属作业 | 每个实际来源及受纳介质 | per reference flow | 实际测量活动因子化学去向来源及不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| service_quantities | 所有清单行 | 用兼容且记录的全部使用方驱动，将实际直接共享数量归属真实货批库房事件期间，含拒收失败闲置清洁范围，可归属总量仅除以正验收 N 一次。 | cp_consignment; cp_fish; cp_energy; cp_refrigerant; cp_supplies; cp_assets; cp_providers; cp_freight; cp_fates; cp_releases | 每参考流实际作业数量 |  |
| fish_component_stock | 鱼冰衣包装备查 | 按实际相同状态完整包数核对：期初 + 外部收货 + 买方退回 - 期末 - 实物发运 - 供方退回 - 可用其他出口 - 实际废弃包 - 实际样品移除 = 未解释包数缺口，配对内部移库。单独核对排冰衣包装净鱼、继承冰衣包装、实际样品及独立有证据状态变化和不确定性，毛短缺不能识别组分或排放物种，不强迫冰衣升华为组织损失。 | cp_fish; cp_fates | 实际库存组分状态审计，不是推断损失或排放 |  |
| source_gate_demand | 鱼冰衣包装备查 | 按货批将实际完整供方放行交接数量追踪到验收货批、期末、退回可用出口和实际有证据废弃状态变化份额。保留来源参考基准：每净鱼 kg 可能已含冰衣初级包制造，每包参考需实际净鱼冰衣包装证据。在服务外仅新增基线损失阶段未含实际归属交接需求，缺加工冻结镀冰包装阶段在外仅组装一次，不附通用得率乘数，不由冰衣缺失推净鱼损失，不重复实际服务处理。 | cp_fish; cp_consignment | 服务交换外完整冻品来源交接需求与损失覆盖 |  |
| refrigerant_fates | refrigerant_supply、recovered_refrigerant、spent_refrigerant 与 refrigerant_releases | 在一致实际设备及适用容器边界，期初 + 实际外部净供应 - 期末 - 可用外部回收 - 容装外部废物 - 其他记录外送形成需实际实测或有证据释放及不确定性调查的差额。内部充注回收抵消，未知差额或仅补充不是泄漏。保留工厂充注资产来源，不以其回收外送扣不相关补充；仅实际匹配独立供应可净额且省略匹配退回，其他记录实际回收 Product 不自动抵扣。准确混合物种数量需实际组成去向仅一次。 | cp_refrigerant | 每参考流实际化学供应回收容装废物及物种视图 |  |
| water_and_species | water_vapour_releases 与 other_releases; other_releases_co2_fossil_air; other_releases_methane_fossil_air; other_releases_nitrous_oxide_air | 采用实际兼容物种介质测量或具有来源状态时间及完整操作数的验证物理方法。继承冰衣升华、鱼组织脱水、设施水蒸发与除霜径流分开，未知毛短缺从不给出蒸气废鱼废水量。实际燃料物种采用实测或完整核对燃烧及兼容物种因子，完整因子不再乘组成去向。 | cp_fish; cp_energy; cp_fates; cp_releases | 实际测量模型水与化学角色，不重复或推断去向 |  |
| actual_cargo_freight | freight | 每个实际 kg*km 路段用换到 kg 的实际运输货载乘换到 km 的实际距离，具有明确因子来源。净鱼继承冰衣纳入包装仅在实际货载包含时计入，装载皮重服务商范围明确。冷链能源制冷剂空返覆盖仅计一次，其他实际服务商原生单位保留匹配负担，不用价格数量代理。 | cp_freight | 每参考流实际兼容货运数量 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| identity_and_gate | 所有清单行 | 最终交换前核实实际学名物种鱼片供方放行交接及每个具体服务材料化学身份属性单位；数量支持不是鱼或服务身份。 | 供方状态谱系及准确详情支持证据 |
| net_glaze_package | 鱼备查台账 | 保留实际来源货批净鱼冰衣包装皮重基准、使用验证时代表性采样选择方法及不确定性，不设通用冰衣比例或每包破坏检测。 | cp_fish 及实际供方验证记录 |
| thermal_quality | frozen_cod_wholesale | 保留实际维持冻结历史、封口包装状态、适用约定验收及真实偏离隔离退回去向。历史数值组胺家族阈值不变通用鳕默认值。 | cp_consignment；cp_fish；实际专业验收 |
| source_coverage | 鱼冰衣包装备查 | 完整供方冻结镀冰初级包装交接与全部中间阶段数量损失覆盖须匹配，仅活体捕获鱼上游不完整；完整链条前缺失覆盖显式保留。 | 来源交接数据阶段调整归属 |
| refrigerant_coverage | 全部制冷角色 | 保留实际化学物一致边界库存去向及工厂资产与独立补充归属；未知差额为缺口非推定排放，实际回收外送不抵不相关输入。 | cp_refrigerant 及实际详情物理证明 |
| period_and_scope | 全部实际责任 | 真实货批作业期间、全部资产使用方寿命及实际服务商货运处理边界仅关联一次，拒收失败库存保留资源；经验校验需独立可比实际冻藏数据。 | 完整覆盖矩阵、期间资产证据及缺失数据清单 |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | frozen_cod_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_energy`识别`electricity`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_energy`; 实际来源关联原生记录 |
| refrigerant_supply | frozen_cod_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_refrigerant`识别`refrigerant_supply`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_refrigerant`; 实际来源关联原生记录 |
| facility_water | frozen_cod_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`facility_water`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| new_outer_packaging | frozen_cod_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`new_outer_packaging`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| operating_supplies | frozen_cod_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`operating_supplies`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| fuel_supply | frozen_cod_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`fuel_supply`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| provider_services | frozen_cod_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_providers`识别`provider_services`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_providers`; 实际来源关联原生记录 |
| shared_assets | frozen_cod_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_assets`识别`shared_assets`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_assets`; 实际来源关联原生记录 |
| freight | frozen_cod_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_freight`识别`freight`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_freight`; 实际来源关联原生记录 |
| environmental_water | frozen_cod_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_fates`识别`environmental_water`内每项实际inputs/elementary物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_fates`; 实际来源关联原生记录 |
| usable_supply_returns | frozen_cod_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`usable_supply_returns`内每项实际outputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| recovered_refrigerant | frozen_cod_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_refrigerant`识别`recovered_refrigerant`内每项实际outputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_refrigerant`; 实际来源关联原生记录 |
| spent_refrigerant | frozen_cod_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_refrigerant`识别`spent_refrigerant`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_refrigerant`; 实际来源关联原生记录 |
| discarded_food_packs | frozen_cod_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_fish`识别`discarded_food_packs`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。`discarded_food_packs_atomic_case`只覆盖自身独占实物状态，其他实际去向仍须完成。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_fish`; 实际来源关联原生记录 |
| other_wastes | frozen_cod_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_fates`识别`other_wastes`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_fates`; 实际来源关联原生记录 |
| contained_wastewater | frozen_cod_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_fates`识别`contained_wastewater`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_fates`; 实际来源关联原生记录 |
| water_outfalls | frozen_cod_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_fates`识别`water_outfalls`内每项实际outputs/elementary物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_fates`; 实际来源关联原生记录 |
| refrigerant_releases | frozen_cod_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_refrigerant`识别`refrigerant_releases`内每项实际outputs/elementary物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_refrigerant`; 实际来源关联原生记录 |
| other_releases | frozen_cod_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_releases`识别`other_releases`内每项实际outputs/elementary物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_releases`; 实际来源关联原生记录 |


### 强制清单完成记录

以下为强制采集和展开定义，不是交换，也不是填零占位符。正文引用的集合或余项编号对应这些完成要求。最终前景数据集完成前，每个实际情形都须成为具自身证据的原子交换；第6节条件卡不预设发生。独立投入、资产全寿命、互斥供应运输结果、实际废物接收流及每个实际基本流物种介质均须保留，不能因未分配通用UUID而静默漏掉。独占实际情形须与原生总量协调，组分视图不可重复相加。

#### electricity

计量声明服务内实际制冷循环除霜、站台装卸、卫生及业务辅助；拒收货批和实际闲置仍保留负担。初次冻结及镀冰热量移除属于本服务之前交接点。

本卡为独立身份分支`electricity_ac`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：维持冻结储存及批发实际电力
- 流属性/单位：Energy / kWh
- 数量规则：每参考流的实际可归属维持冻结储存及批发实际电力；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

范围证据要求：需实际计量区间、进货冻结状态、库房货批载荷、温度历史及全部使用方驱动。独立校验须冻库载荷气候期间范围匹配，不设每净鱼 kg 固定电耗。

#### refrigerant_supply

实际化学物混合物及非负匹配作业供应库存与资产数据集已承担工厂预充区分；内部充注不是二次购买，补充量不自动为排放。

- 身份采集要求：实际独立作业制冷剂供应
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属实际独立作业制冷剂供应；cp_refrigerant。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerant`

范围证据要求：需实际供应来源、充注容器库存、收货皮重、回收及实际外部去向和不确定性。不选默认制冷剂类型设备充注量或通用年漏率。

#### facility_water

记录实际设施清洁辅助水，排除继承鱼体冰衣及初级加工用水；仅有记录的分析样品实际耗水才可纳入，样品检测辅助不是生产性补冰。

本卡为独立身份分支`facility_water_liquid_tap`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际购入冻库卫生及设施用水
- 流属性/单位：Volume / m3
- 数量规则：每参考流的实际可归属实际购入冻库卫生及设施用水；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需实际计量领用用途区间、适用样品范围、供方覆盖及水去向。继承冰衣损失、鱼肉水分及废水不等于实测公用水供应。

#### new_outer_packaging

仅纳入实际服务承担外纸箱、捆扎、标签等运输保护。供方密封初级包装和继承冰衣为商品属性，不是服务新制造输入，不开启重包鱼片。

- 身份采集要求：实际新增外层运输包装及标签
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属实际新增外层运输包装及标签；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需继承与新增包装身份层级、实际原生数量面积质量及换算证据。周转托盘筐采用全寿命服务，不每次计全新制造。

#### operating_supplies

按原生单位状态及完整去向展开实际清洁剂滤材润滑剂检测耗材。本角色不授权新增食品配料冰衣或鱼片处理。

本卡为独立身份分支`operating_supplies_synthetic_detergent`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际冻库清洁及维护用品
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属实际冻库清洁及维护用品；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需实际品项配方浓度、库存退回及换算证据和接收释放状态，施用品或安全限值不是直接排放量。

#### fuel_supply

记录实际燃料牌号原生供应及库存口径，实际燃烧单独记录。完整雇用冷链运输或装卸可能已含车辆燃料，不重复直接输入。

本卡为独立身份分支`fuel_supply_diesel_supply`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际供应自有装卸及辅助燃料
- 流属性/单位：Volume / L
- 数量规则：每参考流的实际可归属实际供应自有装卸及辅助燃料；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需实际牌号、期初收货期末及可用退回、适用密度温度换算和互斥燃烧未燃去向，不默认交付燃料等于燃烧。

#### provider_services

按服务商原生物理单位展开实际合同储存、检验实验室样品、制冷服务、雇用装卸、卫生及业务辅助。供方产品放行证据为继承，不自动重复为批发检测。

- 身份采集要求：实际冻结储存及批发辅助成果
- 流属性/单位：Count / Item(s)
- 数量规则：每参考流的实际可归属实际冻结储存及批发辅助成果；cp_providers。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_providers`

范围证据要求：需实际完成成果物理数量、适用采样设计及完整能源制冷剂资产货运处理覆盖，价格或每包必检假设不能代替实际活动。

#### shared_assets

在全部使用方期间间归属实际冻库结构、制冷装卸测量设备、周转托盘筐和信息设备完整寿命服务。

- 身份采集要求：按寿命归属冻库装卸及周转资产
- 流属性/单位：Count / Item(s)
- 数量规则：每参考流的实际可归属按寿命归属冻库装卸及周转资产；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`

范围证据要求：需制造维护更换寿命终结、实际使用与兼容寿命驱动、观察和有证据剩余及不确定性。资产已含工厂充注不是新作业工质。

#### freight

采用实际运输净货载，按范围包括鱼冰衣及包装，而不是仅申报净鱼质量。记录实际冷链路段能源制冷剂和空返范围，不重复供方到货交接运输。

- 身份采集要求：实际不重叠冷冻产品及服务货运
- 流属性/单位：Mass*distance / kg*km
- 数量规则：每参考流的实际可归属实际不重叠冷冻产品及服务货运；cp_freight。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_freight`

范围证据要求：需实际货载皮重组成、路线距离单位换算、冷链服务覆盖及共享全部使用方分配，不用通用冰衣包装百分比推运输毛量。

#### environmental_water

仅在直接取用时按实际水源地点用途展开；继承冰衣或水升华记录不创造新的服务取水。

- 身份采集要求：实际直接环境取水
- 流属性/单位：Volume / m3
- 数量规则：每参考流的实际可归属实际直接环境取水；cp_fates。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据要求：需实际分水源计量数量边界；购入发票、继承冰衣质量或鱼肉水分不能证明直接取水。

#### usable_supply_returns

仅实际同品项状态外退与作业输入匹配。采用净消耗时须省略对应退回交换；继承商品包装退回保留库存备查。

- 身份采集要求：实际匹配未用作业用品外退
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属实际匹配未用作业用品外退；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需实际接收转移原生数量及匹配独立供应范围。期末库存、内部托盘循环和废物不是可用外退或自动抵扣。

#### recovered_refrigerant

记录实际可用化学物混合工质回收跨境接收，留存回收瓶为期末库存。工厂预充回收不得抵扣不相关当期补充，不自动抵扣避免原生工质。

- 身份采集要求：实际外送可用回收制冷工质
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属实际外送可用回收制冷工质；cp_refrigerant。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerant`

范围证据要求：需实际称重纯度接收及原充注供应上游归属。仅证明同范围独立库存可净消耗扣减且省略对应退回，不产生负补充。

#### spent_refrigerant

记录实际污染不可用工质及处理接收，与可用回收留存充注和直接物种释放分开。

- 身份采集要求：实际送处理不可用容装制冷工质
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属实际送处理不可用容装制冷工质；cp_refrigerant。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerant`

范围证据要求：需实测容装质量及化学物混合状态和接收覆盖；设备铭牌充注量或抽空发票不是实测废物泄漏。

#### discarded_food_packs

记录实际拒收废弃食品包接收数量及实际鱼冰衣包装组成兼容审计视图。处理接收完整混合包时，鱼冰衣初级包装组分视图不得重复新增废物交换或本服务上游生产。

- 身份采集要求：实际废弃冷冻鱼片包及所含组分
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属实际废弃冷冻鱼片包及所含组分；cp_fish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fish`

范围证据要求：需实际接收原生数量与组分基准、实际供方交接点当量和处理范围。解冻警报、质量拒收或毛质量差额不能证明废弃净鱼 kg。

#### other_wastes

按原生状态接收方展开实际服务产生包覆滤材废油清洁残余，排除整食品包废物卡已承担组分。

本卡为独立身份分支`other_wastes_paper_pack`; `other_wastes_metal_pack`; `other_wastes_plastic_pack`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际非食品作业及外包装废物
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属实际非食品作业及外包装废物；cp_fates。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据要求：需实际组分数量换算及处理接收；继承初级包装最终成为废物不意味着其生产为新服务输入。

#### contained_wastewater

记录实际收集送处理清洁维护除霜或分析样品废水及组成接收；继承冰和鱼体水保留实际来源去向，不因改名成为购入公用水。

- 身份采集要求：实际收集设施或分析废水
- 流属性/单位：Volume / m3
- 数量规则：每参考流的实际可归属实际收集设施或分析废水；cp_fates。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据要求：需实际收集接收体积及组成基准来源区间和处理归属，不将全部冰衣损失等于本体积或同一容装转移重复为直接排口。

#### water_outfalls

仅展开实际直接排口及受纳水质介质。收集送服务商废水为 Waste，不是再次环境排放，同一水不能重复。

- 身份采集要求：实际直接水排入环境
- 流属性/单位：Volume / m3
- 数量规则：每参考流的实际可归属实际直接水排入环境；cp_fates。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据要求：需实际直接体积来源区间及受纳水质，鱼体水分或继承冰衣本身不能证明排口。

#### refrigerant_releases

采用实测释放或完整有证据一致边界物理去向及准确化学混合组成和不确定性。内部回收不是排放，未知库存差额不自动为泄漏。

- 身份采集要求：向声明介质实际已识别制冷剂物种释放
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属向声明介质实际已识别制冷剂物种释放；cp_refrigerant。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerant`

范围证据要求：需一致设备容器库存和全部外部收货回收废物其他外送操作数及方法单位来源；不用仅补充量或工厂充注乘默认漏率，完整物种因子不重复组成去向分数。

#### other_releases

按实际燃烧清洁维护展开实际物质受纳介质，排除制冷剂蒸气卡及已计上游服务商排放。

本卡为独立身份分支`other_releases_co2_fossil_air`; `other_releases_methane_fossil_air`; `other_releases_nitrous_oxide_air`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际已识别燃烧及设施化学释放
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属实际已识别燃烧及设施化学释放；cp_releases。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_releases`

范围证据要求：需实测物种或实际兼容活动因子及适用组成去向单位来源；产品供应、安全限值、采样结果或未知鱼库存不是排放量。

## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| accepted_gate | accepted_service | 核实实际所有权转售及唯一正验收货批数，具有学名物种完整冻结镀冰密封供方交接、净鱼冰衣包装时间及实际买方验收；重复包发票和撤销尝试不增加验收数。 |  |
| frozen_node | frozen_cod_wholesale | 检查可用前状态、实际冻库干预、维持后冻结密封验收状态及全部真实拒收退回处置出口；不新增镀冰重包解冻复冻切割，温度封口失败后不自动普通放行。 |  |
| component_and_loss | 鱼冰衣包装备查 | 核对实际相同状态包、采样验证组分、库存退回废弃及原供方交接需求和已有损失阶段覆盖。不将冰损等于净鱼损失，不将差额等于废物物种，不将继承冰衣等于新公用水。 |  |
| fluid_and_returns | 全部制冷及可用退回角色 | 检查一致库存边界及全部实际工质去向接收、原上游归属和匹配同范围供应，不以工厂回收抵不相关补充，不产生负输入，净消耗时不保留额外退回交换。 |  |
| real_exchanges | 所有清单行 | 每个实际展开交换需原生单位身份状态协议接收证据。整食品包废物与组分审计、蒸气与排口容装水、新服务包装与继承初级包分开，每个物理负担只有一个归属。 |  |
| asset_provider_period | shared_assets 与 frozen_cod_wholesale | 核实全部实际使用方期间、连续冻库与货批作业事件、完整资产制造维护更换寿命终结、兼容已用寿命驱动及观察有证据剩余。直接服务商冷链货运处理及按 N 一次归一化不得重叠。 |  |


## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 具体交换身份及实际前景完整性审核后作为 secondary_dataset；background_dataset |
| downstream_use | 关联单独完整供方冻结镀冰初级包装商品及实际归属需求损失覆盖的冻鳕鱼片批发服务附加 |
| allowed_use | 实际维持冻结密封 Gadus morhua 鱼片批发货批，净鱼冰衣包装温度时间商业交接匹配 |
| excluded_use | 独立鱼片足迹；活捕鱼或初级加工冻结镀冰重包；全部海产品平均；零售代理纯仓储；通用鱼安全检测因子或缺供方阶段的完整链条声明 |
| required_metadata | 实际物种鱼片货批商人冻库期间所有权、供方放行完整交接、实际净鱼冰衣包装采样基准、温度封口验收、制冷资产服务商货运处理范围及商品调整归属状态 |
| required_quality_disclosure | 实际身份支持缺口、供方组分采样状态不确定性、未知温度去向接收方法覆盖、全部使用方完整资产假设及独立范围限制 |
| update_trigger | 物种形式供方交接冰衣包装冻结状态、温度验收标准、加工重包需求、来源阶段损失覆盖、制冷资产服务商范围或测量采样方法变化 |


## 11. 数据来源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-seafood-wholesale | official_guidance | UNSD CPC3 explanatory notes, division61/subclass61024 (30 June 2025). https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅支持本叶可批发冷冻加工保存鱼，所选鳕鱼片路线较窄，不是活鱼生产。 |
| codex-frozen-fillets-190 | standard | Codex Standard for Quick Frozen Fish Fillets, CODEX STAN190-1995, source amendments2011/2013/2014, §§6.2 and7.3/7.3.1. https://www.fao.org/input/download/standards/115/CXS_190e.pdf | 支持净食品与冰衣包装及代表性采样物理状态区分；历史来源，不复制数值温度 AQL 组胺或每包必检默认。 |
| fao-frozen-fish-after-freezing | official_guidance | FAO, Freezing and refrigerated storage in fisheries, chapter6 Treatment of fish after freezing, §§6.1/6.2. https://www.fao.org/4/v3630e/v3630e07.htm | 支持继承冰衣保护升华与组织脱水及初二三级包装区分；镀冰热量移除在此上游，不采用冰衣百分比或通用储存率。 |
