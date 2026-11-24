---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.municipal-waste
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 混合居民剩余垃圾——北转运站首次接收门

## 1. 范围与适用性

本方法针对西雅图独户居民生活产生、在回收及食物园林分流后的真实混合剩余垃圾整批，终止于北转运站卸料地坪首次有据验收。所定义的是整份实物供货移交，不把收运处理服务或后续次生产品改称Municipal waste。UN仅给分类名称；居民来源及具名门依据SPU原件，工序选项依据EPA。本稿不宣称某当前路线已测量，也不预设混合物合法无害。

冻结的2025年6月CPC条目（第205页）提供名称及相邻子类；2026年10月说明表CPC3第1936行明确将39910关联至HS 2022的3825.10。HS第38章注4支持混合居民垃圾，排除单独分选出的材料或物品、工业废物、废药物和临床废物。污泥（39920）、废药物（39931）、其他临床废物（39939）、废有机溶剂（39940）、化工行业废物（39950）和其他未另列废物（39990）保持独立。本方法还排除商业、多户住宅、自运、道路清扫及建筑拆除批次，即使更宽的HS定义可能包含其中部分。该收集范围的 CPC 限定映射已接受。[un-cpc3-2025; un-cpc3-2026; wco-hs38-2022]

SPU的2022年规划表7.1及2025年最终环境影响说明图表3.11-34列明北转运站接收市政合同居民垃圾，同时接收商业及单独有机物、自运等流。它们支持可能的路线，不证明某一独户居民批次；须收集实际路线、来源与过磅单，核对外包方和实物交接。2020年居民研究在南转运站抽样垃圾，再生物样品则运往北站分选；该组成均值或自运研究均不是本北站首次接收批次的实测组成。2026年11月站点通知还说明换门施工期间部分回收访客转至卸料地坪，因此仅凭地点不能确定剩余垃圾身份。[spu-plan-2022; spu-feis-2025; spu-composition-2020; spu-features]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.municipal-waste |
| classification_refs | CPC 3.0 39910，已接受北转运站首次验收的独户居民剩余垃圾的较窄映射，见 docs/adr/2026-11-22-accept-cpc-39910-single-family-residual-garbage-at-north-station-receipt.md |
| covered_products | 来源可追溯、用于声明北转运站验收的独户居民整批混合剩余垃圾 |
| excluded_products | 临床药物危化工业专料；污泥；源分回收或有机流；焚烧灰；再生料；收运处理服务 |
| representative_product | 一个有来源资格、实测接收状态的真实居民混合垃圾批次 |
| production_route | 真实丢弃形成历史→居民储存容纳→收集提升实际车载压实→真实路线运输→称量检查卸料→首次接收验收 |
| market_state | 接收地坪整份混合丢弃物；带符号价值费用与法律状态另宣；不推定终止废物状态或新再生产品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 将声明整批居民混合剩余垃圾实物供货移交至具名接收门 |
| How much | 1 kg实收垃圾净质量 |
| How well | 居民来源可追踪并有真实接收符合性检查；无泛牌号组成密度含水或安全假设 |
| How long or cycle | 一个首次验收实物cohort；后续服务保留原Qc及实测H |
| reference_flow_link | finished_garbage |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 北转运站接收门的西雅图独户居民混合剩余垃圾 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 居民来源及服务区; 真实批次cohort与形成历史; 收集路线车辆配置及燃料; 分流边界及真实组成采样基准; 具名北转运站接收门与验收时点; 毛皮重及作业容纳扣量; 实测含水温压状态; 实际污染危害筛查和收方限制; 原市场正负值费用及已批准责任方法; 期初期末WIP及FG逐交换继承向量; 每种包装容器附着件P/N_ext/ER实物事件; 供方已含范围和唯一负荷归属; 原Qc及真实新增服务H |

上述限定项必须进入具体数据包元数据、参考说明或等效完整上下文。参考物料UUID未绑定不允许借用Waste或处理服务身份。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| m_reference | reference product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q为唯一首次验收垃圾实收净量。逐车核对过磅时点、实际装卸、受理及有据的车辆燃油、水和非货物变化。gross_in减gross_out已抵消两次称量均留车的车辆、容器和拒收物。校正有据非货物变化后，仅扣已含在差值中、实际卸下的操作性容器净重及实际卸下的非目标或拒收净重，各一次；留车返带量不得再扣。原垃圾中已丢弃的组成包装仍在混合物内。期末已放行FG已含于Q。 |
| m_units | all numerator rows | 各行真实属性 | 各行本单位 | 保留原单位及实测状态，在分配和A/Q前转换。件数乘实测空件重仅用于同一真实袋桶配置，不预设密度或单件kg。 |
| m_single_division | all numerator rows | 归属交换量 | 交换单位每kg | 形成A后仅用一次c_normalize。Q0保留原负荷且无单位结果；H不是垃圾生产分母。 |

以下仅为单位kg的算术示例，不是场址实测或容器质量假设；假定两次称量间无非货物变化。卸下量指扣除重新装车后的净外移量；出站称量前已装回车上的物料本已抵消。

| 情景 | gross_in | gross_out | D | C_unloaded | R_unloaded | 验收Q |
| --- | --- | --- | --- | --- | --- | --- |
| 容器始终留车并随车返带 | 10000 | 9000 | 1000 | 0 | 0 | 1000 |
| 操作性容器实际随卸下批次移出 | 10000 | 9000 | 1000 | 100 | 0 | 900 |
| 同一卸下容器另加实际卸下的非目标拒收物 | 10000 | 9000 | 1000 | 100 | 50 | 850 |

原票据须明确换算：1美制短吨 = 2000 lb av = 907.18474 kg；1 lb av = 0.45359237 kg；1公吨 = 1000 kg。仅写ton时须核实票据惯例。

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 原形成移交时的真实居民混合剩余丢弃物，保留来源负荷责任及储存历史 |
| starting_condition_role | 声明实物入口与历史责任接口，不是零负荷截断 |
| product_classification_scope | CPC39910居民剩余缩窄子集，不含污泥或处理服务 |
| recursive_input_rule | 同类整批垃圾输入保留真实批次cohort逐交换历史；内部回流抵消，不自动新采购或Q |
| upstream_dataset_requirement | 一个兼容来源历史向量及真实供方已含范围；组成分析非叠加；分配和带符号责任须独立论证 |
| disclosure | 来源服务区原形成实际门、排除项、完整实物负荷账、失败Q0、不确定性及具体缺接口 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| b_scope | 全部路线 | 仅用于来源可追溯的西雅图独户居民剩余垃圾，须真实服务区、居民来源、路线和批次记录。排除临床药物废物、危险化工专料、工业原料、市政污泥、源头分选纸塑玻璃金属食物园林流、焚烧灰及处理服务参考。来源混杂或不确定须实际验收证据，不能笼统宣称无危害。 排除商业、多户住宅、自运、道路清扫及建筑拆除批次。 | un-cpc3-2025; un-cpc3-2026; wco-hs38-2022; epa-transfer-2002; spu-garbage; spu-north |
| b_chain | 供货链 | 追溯原丢弃形成及历史；包含居民分出储存、作业容纳、实际收集提升和车载压实、路线运输及归属回程空行、称量、排队、检查、卸料和北转运站首次接收验收。包含真实损失、泄漏、拒收、失败、启停、闲置、清理和返工。这是官方来源与一般工程指南的透明技术综合，不是实测西雅图SKU或工厂清单。 | epa-transfer-2002; spu-garbage; spu-north; spu-features; spu-trucks; spu-rates |
| b_gate | 接收门 | 所选终端为西雅图1350 N34th St北转运站卸料地坪首次验收交付，须检查和闭合地磅记录。终端不延入场站整合、出站转运、铁路、填埋、焚烧或生物处理。该门前任何必要中间作业仍须纳入；共用接收服务与下游处理细分。 | spu-plan-2022; spu-feis-2025; epa-transfer-2002; spu-north; spu-features; spu-rates |
| b_atomic | 全部交换 | 每个真实交换在具体数据包完整前，必须有具体材质形态类型方向的独立行及实测量或经验证的来源特定测量接口。条件卡不表示必然发生。其他真实燃料、制剂、清洁剂、容器、附着件、替换件、制冷剂、废物出口及排放物种均逐一新增。缺接口即具体数据不完整，不能用符号、泛集合、整批复制、虚构采购退回填补。 | epa-transfer-2002 |
| b_components | 每个作业包装容器组件 | 每个真实组件k在同一实物保管门采期初空件、附着WIP、附着FG、可周转存量，采购首次实收P_k、非采购外部首次实收N_ext_k、真实退回实收ER_k。闭合opening_k + P_k + N_ext_k + ER_k = closing_k + grossS_k + EO_k + W_k。P、N_ext、ER互斥；N_ext包含供方随货及首次受托借入租入；ER须原对外发运史；期初不能代当前收货。内部库、WIP、FG领用及内部复用抵消。同侧新增实物来源只计一次，不重复已有项。 | epa-transfer-2002; ilcd-2010 |
| b_custody_burden | 组件及协议服务 | 实物收货不决定所有权或环境负荷。所有者、原cohort、供方真实已含范围及逐交换继承向量独立记录。首次非购实收不是新采购或退回，也不隐含零负荷；真实退回保留原负荷。真实新增租赁、返运、清洗、维修服务单列并向服务cohort计一次，不产生新Q、自动信用或二次制造。协议收集与场站供应使用与自营相同实物接口和闭合。 | ilcd-2010 |
| b_premix | 整批垃圾 | 整份预混质量与来源组成分区非叠加。原已丢弃消费包装属于垃圾混合物；新增作业袋桶质量另扣皮重和核算。不能再采购其中纸塑玻璃食物，也不能同时计整份供方及其已含组成供方。本方法不提供全国平均组分、密度、含水、DOC、甲烷产率、回收率或避免信用。 | epa-transfer-2002; spu-garbage; ilcd-2010 |
| b_services | 已放行cohort | 首次放行后的全部真实仓储搬运发运复验退回返工服务，保留在原已验收cohort的Qc账。H为实测服务时长，不是新生产分母。服务负荷向同cohort计一次；合并研究抵消内部参考量和移交。重复交付和复验均不再制造Q。 门后服务须单独披露为扩展，不纳入首次接收商品结果。 | ilcd-2010 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| supply | 居民垃圾来源至首次接收 | required | 声明居民来源和北转运站门 | 归因供货，实际子作业分表 | finished_garbage |

以下为原子接口，不是每条都发生的默认清单。每张卡的数量是§8同一次c_normalize结果的引用，不再做一次除法；cp字段采集原始未除量。真实未列交换须在具体包中补成物种、材料、形态、类型、方向明确的原子行和实测接口；否则包不完整。原生UUID仅为身份，不提供负荷因子。

### 过程：居民垃圾来源至首次接收（`supply`）

#### 输入

##### 产品流

###### 收集车辆柴油 (`diesel`)

仅计真实用于收集、车载压实、排队、归属本路线的回程、启停和清理的柴油。原生Product仅为质量身份，未指定牌号、配方、密度、热值、炼制路线、地理供应和供方；均须另采，不提供排放因子。不能从车型推定柴油，也不能重复已含在运输供方中的燃烧。

- 选定流: 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流的实测归属量；复用§8唯一归一化结果。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_exchange
- 来源: epa-transfer-2002; spu-trucks; ilcd-2010

###### 计量实收电力 (`electricity`)

条件为真实表点，并声明电压、西雅图供应地域及供方边界。中国电网混合候选不能代表西雅图身份。现场发电与实收电力分开，由核实的发电过程计一次；其他电压或供应另建原子交换。


电表电能按技术流属性Energy `f6811440-ee37-11de-8a39-0800200c9a66`计量，MJ/kWh属于能量单位组 `93a60a57-a3c8-11da-a746-0800200c9a66`。这仅为计量依据；未定供方流须独立核实其原生属性，不能因同属能量单位组就推定净热值。
- 选定流: 收集接收设备电表处实收的低压电力
- 流属性/单位: Energy `f6811440-ee37-11de-8a39-0800200c9a66` / MJ
- 数量规则: 每参考流的实测归属量；复用§8唯一归一化结果。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_exchange
- 来源: epa-transfer-2002; spu-features

###### 实收清洗水 (`wash_water`)

真实处理后管网供水、表计状态及供方处理和能耗范围；不是河流取水或中国工艺水。清洗用量与返回水分记，不假设蒸汽、锅炉、冷凝器或反应水。

- 选定流: 用于垃圾桶和收集设备清洗的处理后管网水
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流的实测归属量；复用§8唯一归一化结果。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_exchange
- 来源: epa-transfer-2002

###### 液压补充油 (`hydraulic_oil`)

仅当已安装设备实际使用该制剂。整份供货制剂只采一次，记录SDS、牌号和供方范围；组成仅为分析子账。不推定真空精炼路线、含水比例或燃料用途。

- 选定流: 实供收集压实机的整份液压油制剂
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流的实测归属量；复用§8唯一归一化结果。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_exchange
- 来源: epa-transfer-2002

###### 聚乙烯垃圾袋——采购首次实收P (`pebag_p`)

记录该组件真实采购和首次实物收货；只有发票而无实物不算。原生Product为聚乙烯袋，CAS9002-88-4，生产混合、厂门；不隐含密度、厚度、牌号、再生含量或供方。仅用于已核实的真实整只PE袋；市政装袋要求本身不能证明聚合物。cp_components保留各真实实物事件；供方或继承向量仅计一次。

- 选定流: 聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流的实测归属量；复用§8唯一归一化结果。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_components
- 来源: epa-transfer-2002; spu-garbage; spu-trucks; ilcd-2010

###### 聚乙烯垃圾袋——非采购外部首次实收N_ext (`pebag_n`)

记录该组件供方随货、受托、借入或租入的首次实收及真实实测质量、事件号、材质形态类型方向；不是P或ER。原生Product为聚乙烯袋，CAS9002-88-4，生产混合、厂门；不隐含密度、厚度、牌号、再生含量或供方。仅用于已核实的真实整只PE袋；市政装袋要求本身不能证明聚合物。cp_components保留各真实实物事件；供方或继承向量仅计一次。

- 选定流: 聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流的实测归属量；复用§8唯一归一化结果。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_components
- 来源: epa-transfer-2002; spu-garbage; spu-trucks; ilcd-2010

###### 聚乙烯垃圾袋——真实对外发运后退回实收ER (`pebag_er`)

必须有该具体组件原对外发运号、原cohort及逐交换继承向量；无原外发历史只能归首次N_ext或P。原生Product为聚乙烯袋，CAS9002-88-4，生产混合、厂门；不隐含密度、厚度、牌号、再生含量或供方。仅用于已核实的真实整只PE袋；市政装袋要求本身不能证明聚合物。cp_components保留各真实实物事件；供方或继承向量仅计一次。

- 选定流: 聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流的实测归属量；复用§8唯一归一化结果。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_components
- 来源: epa-transfer-2002; spu-garbage; spu-trucks; ilcd-2010

###### 带轮塑料垃圾桶——采购首次实收P (`cart_p`)

记录该组件真实采购和首次实物收货；只有发票而无实物不算。一只真实组装垃圾桶，记录桶体、桶盖、轮子、供货物料表、序号及实测空重。不能用PE树脂、钢容器或泛再生容器替代；独立收到的替换桶盖或轮子是另一个组件交换。cp_components保留各真实实物事件；供方或继承向量仅计一次。

- 选定流: 完整带轮塑料垃圾桶
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流的实测归属量；复用§8唯一归一化结果。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_components
- 来源: epa-transfer-2002; spu-garbage; spu-trucks; ilcd-2010

###### 带轮塑料垃圾桶——非采购外部首次实收N_ext (`cart_n`)

记录该组件供方随货、受托、借入或租入的首次实收及真实实测质量、事件号、材质形态类型方向；不是P或ER。一只真实组装垃圾桶，记录桶体、桶盖、轮子、供货物料表、序号及实测空重。不能用PE树脂、钢容器或泛再生容器替代；独立收到的替换桶盖或轮子是另一个组件交换。cp_components保留各真实实物事件；供方或继承向量仅计一次。

- 选定流: 完整带轮塑料垃圾桶
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流的实测归属量；复用§8唯一归一化结果。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_components
- 来源: epa-transfer-2002; spu-garbage; spu-trucks; ilcd-2010

###### 带轮塑料垃圾桶——真实对外发运后退回实收ER (`cart_er`)

必须有该具体组件原对外发运号、原cohort及逐交换继承向量；无原外发历史只能归首次N_ext或P。一只真实组装垃圾桶，记录桶体、桶盖、轮子、供货物料表、序号及实测空重。不能用PE树脂、钢容器或泛再生容器替代；独立收到的替换桶盖或轮子是另一个组件交换。cp_components保留各真实实物事件；供方或继承向量仅计一次。

- 选定流: 完整带轮塑料垃圾桶
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流的实测归属量；复用§8唯一归一化结果。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_components
- 来源: epa-transfer-2002; spu-garbage; spu-trucks; ilcd-2010

##### 废物流

###### 来源整批实物移交 (`whole_discard`)

按来源、路线、批号及实测净质量识别的一条真实居民预混丢弃物流。纸、玻璃、塑料、食物及原已丢弃包装仅是整批分析分区，不另行采购。cp_history记录形成和移交及既有组分历史；危害或来源未知不能通过验收。

- 选定流: 丢弃时的西雅图独户居民混合剩余垃圾
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流的实测归属量；复用§8唯一归一化结果。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_lot
- 来源: un-cpc3-2025; epa-transfer-2002; spu-garbage; ilcd-2010

##### 基本流

###### 氧气净消耗 (`oxygen`)

条件为经核实燃料燃烧或接收前真实转化的空气氧净消耗；CAS7782-44-7，空气中可再生元素资源。不是外购氧，也不是氧排放。通过实测燃烧和物种平衡独立确定，不能用质量残差同时拟合氧和甲烷。

- 选定流: 氧气 `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流的实测归属量；复用§8唯一归一化结果。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_species
- 来源: epa-transfer-2002

#### 输出

##### 产品流

###### 聚乙烯垃圾袋——随垃圾gross实物发运S (`pebag_s`)

实物外出附着或容纳质量独立于垃圾净Q；留在居民家的空桶为存量或内部周转，不是新桶发运。原生Product为聚乙烯袋，CAS9002-88-4，生产混合、厂门；不隐含密度、厚度、牌号、再生含量或供方。仅用于已核实的真实整只PE袋；市政装袋要求本身不能证明聚合物。cp_components保留各真实实物事件；供方或继承向量仅计一次。

- 选定流: 聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流的实测归属量；复用§8唯一归一化结果。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_components
- 来源: epa-transfer-2002; spu-garbage; spu-trucks; ilcd-2010

###### 聚乙烯垃圾袋——对外归还或独立外移EO (`pebag_eo`)

记录真实对外保管转移或归还及收方；返运、维修只计有据新增服务，不再计制造负荷。原生Product为聚乙烯袋，CAS9002-88-4，生产混合、厂门；不隐含密度、厚度、牌号、再生含量或供方。仅用于已核实的真实整只PE袋；市政装袋要求本身不能证明聚合物。cp_components保留各真实实物事件；供方或继承向量仅计一次。

- 选定流: 聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流的实测归属量；复用§8唯一归一化结果。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_components
- 来源: epa-transfer-2002; spu-garbage; spu-trucks; ilcd-2010

###### 带轮塑料垃圾桶——随垃圾gross实物发运S (`cart_s`)

实物外出附着或容纳质量独立于垃圾净Q；留在居民家的空桶为存量或内部周转，不是新桶发运。一只真实组装垃圾桶，记录桶体、桶盖、轮子、供货物料表、序号及实测空重。不能用PE树脂、钢容器或泛再生容器替代；独立收到的替换桶盖或轮子是另一个组件交换。cp_components保留各真实实物事件；供方或继承向量仅计一次。

- 选定流: 完整带轮塑料垃圾桶
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流的实测归属量；复用§8唯一归一化结果。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_components
- 来源: epa-transfer-2002; spu-garbage; spu-trucks; ilcd-2010

###### 带轮塑料垃圾桶——对外归还或独立外移EO (`cart_eo`)

记录真实对外保管转移或归还及收方；返运、维修只计有据新增服务，不再计制造负荷。一只真实组装垃圾桶，记录桶体、桶盖、轮子、供货物料表、序号及实测空重。不能用PE树脂、钢容器或泛再生容器替代；独立收到的替换桶盖或轮子是另一个组件交换。cp_components保留各真实实物事件；供方或继承向量仅计一次。

- 选定流: 完整带轮塑料垃圾桶
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流的实测归属量；复用§8唯一归一化结果。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_components
- 来源: epa-transfer-2002; spu-garbage; spu-trucks; ilcd-2010

###### 首次验收整批垃圾 (`finished_garbage`)

按可追溯进出站称量、检查和卸料后，在具名卸料地坪首次有据符合要求的整批垃圾实收净量。这是待绑定的物料参考，不是收运处理服务，也不是改型的原生Waste流；仍必须取得适用原生Product参考。原已丢弃的组成包装属于混合物，独立新增作业包装和容器皮重扣除。

- 选定流: 北转运站接收门的西雅图独户居民混合剩余垃圾
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 1 千克
- 数值来源模式: `fixed_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `source_rule`
- 采集协议: cp_lot
- 来源: un-cpc3-2025; epa-transfer-2002; spu-garbage; spu-north; spu-features; spu-rates

##### 废物流

###### 聚乙烯垃圾袋——废弃组件W (`pebag_w`)

实际废弃组件和处置收方与已供垃圾分记。须用兼容Waste身份，不能套采购Product UUID。原生Product为聚乙烯袋，CAS9002-88-4，生产混合、厂门；不隐含密度、厚度、牌号、再生含量或供方。仅用于已核实的真实整只PE袋；市政装袋要求本身不能证明聚合物。cp_components保留各真实实物事件；供方或继承向量仅计一次。

- 选定流: 废弃聚乙烯袋
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流的实测归属量；复用§8唯一归一化结果。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_components
- 来源: epa-transfer-2002; spu-garbage; spu-trucks; ilcd-2010

###### 带轮塑料垃圾桶——废弃组件W (`cart_w`)

实际废弃组件和处置收方与已供垃圾分记。须用兼容Waste身份，不能套采购Product UUID。一只真实组装垃圾桶，记录桶体、桶盖、轮子、供货物料表、序号及实测空重。不能用PE树脂、钢容器或泛再生容器替代；独立收到的替换桶盖或轮子是另一个组件交换。cp_components保留各真实实物事件；供方或继承向量仅计一次。

- 选定流: 废弃完整带轮塑料垃圾桶
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流的实测归属量；复用§8唯一归一化结果。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_components
- 来源: epa-transfer-2002; spu-garbage; spu-trucks; ilcd-2010

###### 拒收整批垃圾 (`rejected_garbage`)

实际改送或退回的整批拒收垃圾；记录真实原因、来源和接收去向。不是Q、负采购或虚构成品退回；新识别的临床危废物须另有具体出口及接收证据。

- 选定流: 拒收居民混合剩余垃圾整车批
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流的实测归属量；复用§8唯一归一化结果。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_lot
- 来源: epa-transfer-2002; spu-north; spu-rates

###### 接收前分离渗滤液 (`leachate`)

仅计Q前真实排入具名罐、下水道或槽车并有收方的液体；不是生物反应填埋降解液。计量或称量该液体，体积转质量须其独立实测密度状态；COD和溶解固体为指标，不另当化学质量。

- 选定流: 接收前居民剩余垃圾储存分离的排水渗滤液
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流的实测归属量；复用§8唯一归一化结果。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_exchange
- 来源: epa-transfer-2002

###### 垃圾桶清洗废水 (`wash_effluent`)

在明确接收门真实收集的清洗废水，与渗滤液和雨水分开。液体身份、数量及处理供方只计一次；若直接排放，每种真实溶解或排放物须在正确环境介质另建，不把同一整份废水再作基本流。

- 选定流: 垃圾桶和收集设备清洗废水
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流的实测归属量；复用§8唯一归一化结果。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_exchange
- 来源: epa-transfer-2002

###### 接收前捕获的散落垃圾 (`cleanup_refuse`)

称量后内部回收的散落物与原领用抵消，不成为新输入、废物出口或Q。本对外出口仅用于实际移除并送往另一收方的散落物；扬尘入空气属于对应物种卡。

- 选定流: 捕获的散落居民混合剩余垃圾
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流的实测归属量；复用§8唯一归一化结果。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_exchange
- 来源: epa-transfer-2002

###### 废液压油 (`spent_oil`)

实际排出的液压油，记录实测污染物、整份制剂质量及处置回收收方；不假设50%油或精炼信用。收集油与土壤、水中漏失分开，发生泄漏须另建真实化学出口。

- 选定流: 收集压实机废液压油
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流的实测归属量；复用§8唯一归一化结果。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_exchange
- 来源: epa-transfer-2002

##### 基本流

###### 化石二氧化碳入空气 (`fossil_co2`)

条件为声明门前的真实事件。CAS124-38-9；空气排放、子环境未特指的基本流。仅用于独立确认的化石碳，不假设柴油完全氧化或生物碳占比。cp_species独立采集物种质量；实测零值或未发生须有证据，缺失是未知。保留原始状态、治理效率及供方已含范围，避免重复。

- 选定流: 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流的实测归属量；复用§8唯一归一化结果。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_species
- 来源: epa-transfer-2002; ilcd-2010

###### 化石一氧化碳入空气 (`fossil_co`)

条件为声明门前的真实事件。CAS630-08-0；空气排放、子环境未特指的基本流，仅实测化石CO，不代表外购工业CO、CO2或未分物种VOC。cp_species独立采集物种质量；实测零值或未发生须有证据，缺失是未知。保留原始状态、治理效率及供方已含范围，避免重复。

- 选定流: 一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流的实测归属量；复用§8唯一归一化结果。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_species
- 来源: epa-transfer-2002; ilcd-2010

###### 一氧化氮入空气 (`nitric_oxide`)

条件为声明门前的真实事件。CAS10102-43-9；空气排放、子环境未特指的基本流。仅真实NO质量；以NO2当量报告的NOx既不是NO也不是真实NO2质量。cp_species独立采集物种质量；实测零值或未发生须有证据，缺失是未知。保留原始状态、治理效率及供方已含范围，避免重复。

- 选定流: 一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流的实测归属量；复用§8唯一归一化结果。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_species
- 来源: epa-transfer-2002; ilcd-2010

###### 二氧化氮入空气 (`nitrogen_dioxide`)

条件为声明门前的真实事件。单独分物种的真实NO2分子，CAS10102-44-0；亚硝酸根及一氧化二氮候选不能绑定此行。cp_species独立采集物种质量；实测零值或未发生须有证据，缺失是未知。保留原始状态、治理效率及供方已含范围，避免重复。

- 选定流: 排入空气的二氧化氮
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流的实测归属量；复用§8唯一归一化结果。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_species
- 来源: epa-transfer-2002; ilcd-2010

###### 二氧化硫入空气 (`sulfur_dioxide`)

条件为声明门前的真实事件。来自明确燃料或来源的真实SO2质量；独立确定燃料硫及其他硫出口，不预设含硫量。cp_species独立采集物种质量；实测零值或未发生须有证据，缺失是未知。保留原始状态、治理效率及供方已含范围，避免重复。

- 选定流: 排入空气的二氧化硫
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流的实测归属量；复用§8唯一归一化结果。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_species
- 来源: epa-transfer-2002; ilcd-2010

###### 搬运颗粒物入空气 (`dust`)

条件为声明门前的真实事件。空气排放、子环境和粒径未特指的基本流；不确立化学组成、高度、粒径分布或表征因子。原生熟料示例不是垃圾排放因子或路线要求。分粒径实测须另用兼容身份并避免质量重叠。cp_species独立采集物种质量；实测零值或未发生须有证据，缺失是未知。保留原始状态、治理效率及供方已含范围，避免重复。

- 选定流: 颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流的实测归属量；复用§8唯一归一化结果。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_species
- 来源: epa-transfer-2002; ilcd-2010

###### 水蒸气入空气 (`water_vapour`)

条件为声明门前的真实事件。CAS7732-18-5；空气排放、子环境未特指的水蒸气基本流，不是液体排放或外购蒸汽。实测蒸发水与真实燃料反应水分开；不假定垃圾水消失或虚构生化反应。杂乱导入同义词不赋予同位素水身份。cp_species独立采集物种质量；实测零值或未发生须有证据，缺失是未知。保留原始状态、治理效率及供方已含范围，避免重复。

- 选定流: 水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流的实测归属量；复用§8唯一归一化结果。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_species
- 来源: epa-transfer-2002; ilcd-2010

###### 储存甲烷入空气 (`storage_methane`)

条件为声明门前的真实事件。真实CH4，CAS74-82-8，仅在观察到或经验证的来源特定方法支持时适用。选生物或化石身份前须确认碳来源；不预设DOC、衰减、填埋产率或甲烷占比。cp_species独立采集物种质量；实测零值或未发生须有证据，缺失是未知。保留原始状态、治理效率及供方已含范围，避免重复。

- 选定流: 垃圾接收前储存排放的甲烷
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流的实测归属量；复用§8唯一归一化结果。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_species
- 来源: epa-transfer-2002; ilcd-2010

###### 储存生物源二氧化碳 (`storage_co2`)

条件为声明门前的真实事件。独立确认的真实生物源CO2，CAS124-38-9；不能减去假定化石占比来求得，也不能把混合垃圾全当生物质。cp_species独立采集物种质量；实测零值或未发生须有证据，缺失是未知。保留原始状态、治理效率及供方已含范围，避免重复。

- 选定流: 垃圾接收前储存排放的生物源二氧化碳
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流的实测归属量；复用§8唯一归一化结果。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_species
- 来源: epa-transfer-2002; ilcd-2010

###### 硫化氢入空气 (`hydrogen_sulfide`)

条件为声明门前的真实事件。CAS7783-06-4；空气排放、子环境未特指的H2S基本流；须分子特定证据及真实来源。臭气浓度本身不能证明H2S质量或处理化学。cp_species独立采集物种质量；实测零值或未发生须有证据，缺失是未知。保留原始状态、治理效率及供方已含范围，避免重复。

- 选定流: 硫化氢 `08a91e70-3ddc-11dd-94a9-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流的实测归属量；复用§8唯一归一化结果。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_species
- 来源: epa-transfer-2002; ilcd-2010

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| a_goal | 需要分配的归因研究 | 本方法仅用于研究目标确需分配的归因场景。每次移交声明真实带正负值的市场状态、责任和接收功能。市政价目表显示处理收费背景，不证明具体批次带符号价值。原生参考流类型与法律废物状态是独立事实。 | spu-rates; ilcd-2010 |
| a_history | 原形成及废物移交 | 取得原形成过程及已批准负荷责任方法和逐交换继承向量。Annex14.4区分正价值共产品、负价值废物及真正形成有价值次生产品的步骤。不能将居民原产品全部历史硬加，也不能假设所有历史为零、抹去第一系统责任、向混合垃圾套无限回收公式或在接收门虚构次生产品。继承向量和仅责任向量及其归属各保留一次；核心责任未决不能形成可用单位结果。 | ilcd-2010 |
| a_subdivide | 共用收集接收 | 先独立计量专属路线作业，细分可识别子过程，包括接收与后续处理、回收建筑的独立流。可专属归属的交换以有据虚拟细分处理。原整批混合垃圾仍是一个混合物，分析分区不是共产品。 | ilcd-2010 |
| a_causality | 剩余共用交换 | 对确实剩余的每个共用交换分别确定并论证决定性物理因果。路线燃料、压实功、空间时间储存和实际接收可有不同驱动。按实际相关性采载质量、路线距离、停靠作业时间、占用能力及控制状态；不能对所有交换任意套一个物理或经济键。 | ilcd-2010 |
| a_residual | 仅未解决剩余共用过程 | 仅当特定物理因果无法确定剩余交换时，采用同一真实过程门、同一状态、同期有据市场价值，排除后续运输包装处理。适用负价值越界情形时仅在真实越界过程用Annex14.4符号及绝对费用逻辑，不以负分配因子、当前市政价目或假组成价值代替。须分母一致、敏感性分析及审查；不设固定比例、替代或避免处置信用。 | ilcd-2010 |

## 8. 前景数据采集、计算与质量规则

协议只采未除原始量；汇总列中的“每参考流”仅标最终报告基准，运算仅在c_units、c_attributable、c_normalize顺序执行一次。先换算及真实分配，再除唯一Q；不把协议再当一次A/Q。所有不适用项须有实际未发生证据，缺测保留未知。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_lot | supply | 整批垃圾及首次验收输出 | 地磅与来源记录 | 事件号; 居民来源; 服务区; 路线; cohort; 产生时点; 收集时点; 到站时点; 检查; 验收时点; 进站毛重; 出站毛重; 单位; 作业容纳皮重; 垃圾净量; 拒收量; 期初WIP; 期末WIP; 期初FG; 期末FG | 同车同批核对经校准进出站票、时点、真实装卸及重新装车量和受理。记录车辆非货物变化；仅扣已含在配对差值中的实际卸下操作性容器及实际卸下非目标或拒收净量，各一次。留车返带容器和拒收物已抵消。整批丢弃移交与每次拒收独立采集，保留未归一的原始量和单位。 | kg | 每次移交及每车 | 声明完整周期含跨夜失败车次 | 居民来源; 收集路线; 北转运站接收地坪 | 每参考流 | 秤校准; 配对票; 装载检查; 原持有者追踪 |
| cp_exchange | supply | 具体实供或移除交换 | 表计库存及供方记录 | row_id; 事件号; 材质形态; 方向; 原始量; 原始单位; 温度; 压力; 含水; 实测密度; 密度方法; 期初; 实收; 期末; 对外外移; 损失; 车辆; 作业; 供方; 已含范围 | 逐项独立计量称量具名能源制剂或液体；保留原单位、全部启停闲置清理失败时段及实测状态。体积转质量用该物质状态密度，油或渗滤液不能用水密度。采未除原始量。 | kg; MJ; original metered unit | 每次收货使用移除及表计间隔 | 相同完整周期含失败和Q0 | 真实居民点车辆接收表点 | 每参考流 | 表计校准; 库存核对; 供方范围; 配方SDS |
| cp_components | supply | 单一具体袋桶组件及方向事件 | 组件实物保管账 | 组件号; row_id; 事件号; 材质; 形态; 供货类型; 方向; 所有权; 原cohort; 采购标记; 首次外部实收标记; P; N_ext; ER; 原外发号; grossS; EO; W; 期初空件; 期初附着WIP; 期初附着FG; 期初周转; 期末空件; 期末附着WIP; 期末附着FG; 期末周转; 实测质量; 实测件数; 同配置空重测法; 供方已含范围; 逐交换继承向量; 真实新增服务 | 每个实际组件事件单独称量，或用实测件数及同配置实测空重。以实物保管及原外发证明区分采购P、首次非购N_ext及真实ER，覆盖供方随货、首次受托借入租入。保留独立原子收货接口；缺实际材质形态类型方向即数据不完整，不能整批克隆补齐。采未除质量。 | kg; measured count for supporting reconciliation | 每次实物保管事件及库存边界 | 完整周期及期初期末cohort历史 | 居民承包方接收方的同组件同实物门 | 每参考流 | 签收单; 称数记录; 原发运; 所有权; 完整物料表; 供方范围核对 |
| cp_species | supply | 单一真实物种及去向 | 分物种实测 | row_id; 来源号; 分子; CAS; 碳来源; 方向; 介质; 子环境; 实测质量; 浓度; 浓度基准; 气液体积; 已积分体积标记; 速率; 时间间隔; 温度; 压力; 湿度; 治理状态; 检出限; 不确定性; 实际未发生证据; 供方已含范围 | 在接收门前逐物种逐去向实测，以经校准分析及已积分载体体积或适用时速率积分求量。保留仪器浓度基准状态和检出限。臭气、COD、NOx当量保留指标身份，不造衰减计量或泛默认因子。原始量不除。 | kg; original concentration/volume/rate units | 每个真实事件及代表性作业状态 | 完整储存收集接收周期含闲置清理 | 真实排气逸散排水测点 | 每参考流 | 仪器QA; 分析; 状态换算; 独立质量元素闭合; 不确定性 |
| cp_history | supply | 原形成与库存负荷 | 谱系和继承向量 | cohort; 来源形成; 已批准方法; 带符号市场状态; 责任归属者; 交换号; 继承向量; 供方已含范围; 期初WIP质量; 期初WIP向量; 期末WIP质量; 期末WIP向量; 期初FG质量; 期初FG向量; 期末FG质量; 期末FG向量; 原Qc; 原交付冲回; 真实新增返工; 证据号 | 追溯真实丢弃来源及已批准废物责任移交、逐交换携带向量和每个库存cohort。仅责任账与物料负荷账分开。不预设原消费产品全部历史或零负荷。原始向量和质量不再次归一化。 | kg; each inherited exchange original unit | 逐cohort及期间边界 | 闭合本期所需历史及全部本期活动 | 原持有者至声明接收门 | 每参考流 | 已批准方法记录; 带符号状态价值; 来源追踪; 库存继承向量账 |
| cp_service | supply | 原cohort真实新增服务 | cohort服务事件 | 事件号; 原Qc; cohort; H; 作业; 实物门; 具体组件; P; N_ext; ER; 原外发号; 继承向量; 真实新增量; 供方范围; 内部移交 | 放行后真实仓储搬运租返清洗维修活动以未除服务总量归属原Qc。H表实际时长，绝不作生产分母。组件实收仍须原子事件和cp_components闭合；合并时抵消内部移交。 | h; original exchange unit; kg Qc | 每次服务事件 | 真实原cohort服务期 | 真实责任承包方或所有者 | 每参考流 | 服务记录; 原放行; 实物保管及范围核对 |
| cp_allocation | supply | 剩余共用交换 | 分配证据 | 交换号; 专属作业; 细分; 虚拟细分; 决定性物理驱动; 实测驱动; 共用总量; 归属总量; 剩余; 共同门; 状态; 同期价值; 符号; 有据分配键; 敏感性 | 先识别专属作业，再定逐剩余交换物理因果。仅真正剩余在有据论证后采用同门同状态真实价值。保留原总量及归属向量，不除Q。 | each exchange native unit and documented driver | 每个分配期间及路线变化 | 相同作业周期及匹配市场期间 | 真实共同过程门 | 每参考流 | 分表; 因果模型; 价值状态记录; 敏感性; 独立审查 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_q | finished_garbage | 对每车次t，D_t为gross_in_t减gross_out_t并校正两次过磅间有据的车辆非货物变化。Q = sum_t(D_t - C_unloaded_t - R_unloaded_t)，仅统计唯一首次验收批次。C_unloaded为已含在D中的实际卸下操作性容器净重，R_unloaded为已含在D中的实际卸下非目标或拒收净重。各实物量仅扣一次。留车或随出站车返带的容器、拒收物本已从D中抵消，不得再扣。按两张票及其时点核对卸下、重新装车、实物交接和受理。已验收重送或复验不新增Q；期末已验收FG已在Q内。 | cp_lot; cp_components; cp_history | Q | epa-transfer-2002; spu-features; spu-rates |
| c_units | all measured exchanges | 先转换实测原单位。核实原单位，1 美制短吨 = 2,000 lb av = 907.18474 kg，1 lb av = 0.45359237 kg，1 公吨 = 1,000 kg。票据只写 ton 时须核实其含义。仅速率积分，已积分体积仍为体积。特定液体质量 = 已积分体积 × 该液体状态独立实测密度。电量kWh至MJ精确乘3.6；此换算不定义供电地理或技术。 | cp_exchange; cp_species; cp_lot; cp_components | converted raw exchange amounts | epa-transfer-2002 |
| c_attributable | each inventory numerator | A_e = B_WIP_open_e + assigned_new_e + assigned_increment_e - B_WIP_close_e，各项用交换e本单位。B为该WIP cohort已核实逐交换继承向量；assigned_new和assigned_increment为已换算及真实分配的未除活动，仅真实重复时扣供方已含范围。逐交换由核实换算原始活动、真实专属共用分配及适用期初期末WIP继承向量形成A；保留全部失败拒收Q0闲置清理。gross实物闭合独立于负荷式。已验收FG按原cohort携带，不再计制造；放行后服务用真实原Qc账。 | converted raw exchange amounts; cp_history; cp_allocation; cp_service | A | ilcd-2010 |
| c_normalize | all inventory numerator rows | Q > 0时仅一次a = A / Q。A为该交换本单位下归属未除量；Q为唯一首次验收垃圾净kg。a为每1 kg参考流的该交换单位量。采集协议与清单卡复用同一结果，不二次除。Q = 0保留A而无单位值。原cohort服务先用原Qc；合并抵消移交且不造Q。 | A; Q; cp_history; cp_service | a | ilcd-2010 |
| c_component_balance | each operational component at the same physical gate | opening_k + P_k + N_ext_k + ER_k = closing_k + grossS_k + EO_k + W_k。期初期末含空件、附着WIP、附着FG、周转存量。P为真实采购首次实收，N_ext为真实非采购外部首次实收，ER为有原外发史的真退回。内部库WIPFG领用复用抵消。闭合前核每个真实事件的具体材质形态类型方向接口和实测量，未知不是零。 | cp_components; cp_service | component physical closure and missing-interface findings | epa-transfer-2002; ilcd-2010 |
| c_mass_species | whole material and physical outlets | 独立闭合期初垃圾 + 真实新增丢弃实收 + 实测添加 = 期末垃圾 + gross对外垃圾移动 + 实际分出液固物种出口。新增作业容纳用自身组件账；组成分析分区不加到整份垃圾。仅有据时计真实空气消耗及水物种移转；拒绝一个拟合残差求多个未知。 | cp_lot; cp_exchange; cp_species; cp_components | physical mass and independent element closure | epa-transfer-2002; ilcd-2010 |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| dq_identity | whole lot and each auxiliary | 追踪居民来源、服务区、真实路线、接收规格及原生身份限制；不把本子集扩为全部CPC39910或西雅图场站物料。 | 原持有者及收方记录; 完整原生身份 |
| dq_measurement | all physical events | 全部实物事件须校准质量能量物种记录和状态特定转换；保留单位检出限不确定性；采样分区闭合而不与整份质量叠加。 | 校准; 票据; 样本; 独立质量元素平衡 |
| dq_completeness | entire campaign | 保留失败拒收Q0启停闲置清理返工、全部库存变化和完整组件P/N_ext/ER接口。缺真实组件收货或物种路径仍不完整，不能用未来选择器、整批克隆或假零。 | 事件库存台账; 缺接口报告 |
| dq_burden | each inherited exchange and service | 保留来源方法、带正负值责任、所有者cohort向量及供方已含范围，检查重复计负荷。服务H与原Qc分开。 | 已批准责任方法; 继承向量; 分配及供方审计 |
| dq_time | all source and foreground records | 匹配真实期间、当前接收规则和供应地理；披露一般证据与场址证据及真实测量缺口；设计能力收费不是默认量。 | 有日期作业及来源台账 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| v_identity | 参考及原生身份 | 须实际来源及完整原生正式名称、类型、路线、形态、CAS、地理、牌号、注释和全部流属性限制。不能把Waste或收集焚烧填埋服务当Product物料参考。分类标签不能单独证明兼容。核心参考未决是真阻断；普通辅助供方缺口保持具体。 | un-cpc3-2025; epa-transfer-2002; ilcd-2010 |
| v_basis | Q和清单 | 每个实物cohort只计一次首次接收验收；Q为扣作业容纳皮重的实收垃圾净量。期末已验收FG已属于Q，不再加为输出。期初期末WIP及FG均须逐交换继承向量闭合；gross实物移动不是A负荷或新Q。Q=0保留全部真实负荷，不出单位结果。 | epa-transfer-2002; ilcd-2010 |
| v_normalization | 全部分子行 | 原始协议采未除数量；先做原始单位状态转换及真实分配，再形成归属A。c_normalize仅执行一次A/Q；卡片和协议汇总仅引用同一次结果，不再除。拒绝供方与前景燃烧重复、整批与组成负荷重复。 | ilcd-2010 |
| v_component_events | 每种袋容器附着件 | 每个真实P、N_ext、ER事件须有具体材质形态类型方向的原子行或完整测量接口及实测量；P、N_ext、ER互斥。ER核原外发史。在同组件同门校验opening+P+N_ext+ER=closing+grossS+EO+W，包含空件、附着WIP、附着FG和周转存量。内部领用复用抵消。缺真实接口即具体数据不完整；不能废物套采购UUID、虚构退回、复制整批、以所有权豁免或推零负荷。 | epa-transfer-2002; ilcd-2010 |
| v_vectors | 协议及cohort服务 | 逐实物事件独立核对所有者、原cohort、供方已含范围、逐交换继承向量及真实新增租返清洗维修服务。自营和协议作业适用相同事件闭合。期初不能代当期首次实收；负荷只计一次，服务保留原Qc，不用H或新Q。 | ilcd-2010 |
| v_physics | 物理质量与物种 | 独立按实测状态及不确定度闭合垃圾、包装、液体、燃料燃烧及相关C/H/O/N/S/金属平衡。游离、固有、蒸发、反应水及真实物种去向分开；无证不造生化转化。已积分体积不能再乘时间，仅速率积分；密度须物质状态特定。COD、NOx当量、臭气不是化学质量；一个残差不能定两个未知。 | epa-transfer-2002; ilcd-2010 |
| v_acceptance | 具体数据完整性 | 核真实接收检查、排除物去向和来源分隔，不能推断合法或无危害接收。保留失败、缺测、真实零值及全部Q0闲置清理活动。不能从全国混合物或UUID注释宣称已知组成或安全接收。 | epa-transfer-2002; spu-garbage; spu-north; spu-rates |
| v_sources | 证据及使用 | 保留来源完整范围、原条件、相邻反例及不确定性。官方路线证据不等于实测批次，原生身份证据不是方法因子。机械检查不赋予方法、翻译或发布批准。 | spu-composition-2020; spu-plan-2022; spu-feis-2025; epa-transfer-2002; ilcd-2010 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 仅为同接收门同责任约定下已具资格的居民混合垃圾实物移交 |
| allowed_use | 实际数据完整、核心参考解决且独立方法审查后，来源和门兼容的物料连接 |
| excluded_use | 收运处理服务等价；焚烧填埋因子；源分物料供应；全国平均组成；安全合法验收断言；零负荷或回收信用默认 |
| required_metadata | 全部参考限定；实物批次接收门；责任方法；原生限制；原cohort库存向量；供方范围；原子P/N_ext/ER接口 |
| required_quality_disclosure | 一般与场址证据区别；真实期间覆盖；不确定性；缺失原子交换；核心阻断；不隐含科学翻译批准 |
| update_trigger | 来源服务区分流、接收门标准、正负价值责任、车辆燃料、容器供应范围或原生身份变化 |

## 11. 数据源

| 来源ID | 类型 | 文献 | 用途 |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | United Nations Statistics Division. CPC Version 3.0 Explanatory Notes (30 June 2025), pp.204–206. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅用于39910名称及相邻类别；不提供组成或工艺规格。 |
| epa-transfer-2002 | official_guidance | US EPA. Waste Transfer Stations: A Manual for Decision-Making. EPA530-R-02-002 (June 2002), especially pp.7–8 and 22–30 and operating/environmental-control chapters. https://www.epa.gov/sites/default/files/2016-03/documents/r02002.pdf | 一般产生、收集、接收、压实选项及环境接口；示例不作为西雅图实测量或强制场站设备。 |
| spu-garbage | official_guidance | Seattle Public Utilities. Garbage. https://www.seattle.gov/utilities/your-services/collection-and-disposal/garbage | 独户居民剩余垃圾来源、装袋、回收及食物园林分流、家庭危废的其他接收途径。 |
| spu-north | official_guidance | Seattle Public Utilities. North Transfer Station. https://www.seattle.gov/utilities/your-services/collection-and-disposal/transfer-stations/north-station | 明确1350 N 34th St接收场址及不接收家庭危废；具体车次仍须实际验收。 |
| spu-features | official_guidance | Seattle Public Utilities. North Transfer Station Features. https://www.seattle.gov/utilities/your-services/collection-and-disposal/transfer-stations/north-station/station-features | 进出站秤、卸料地坪、独立回收建筑；现场光伏和雨水背景。设计能力和功率不作为清单量。 |
| spu-trucks | official_guidance | Seattle Public Utilities. 类型s of Collection Trucks. https://www.seattle.gov/utilities/your-services/collection-and-disposal/your-collection-day/types-of-collection-trucks | 承运方车队类型及塑料桶服务；不能由此认定燃料或某路线车辆配置。 |
| spu-rates | official_guidance | Seattle Public Utilities. Transfer Station Rates. https://www.seattle.gov/utilities/your-services/collection-and-disposal/transfer-stations/rates | 向秤房申报并接受检查；垃圾收费与清洁分流物的区别。价目表不是批次市场价值或分配因子。 |
| ilcd-2010 | handbook | European Commission JRC. ILCD Handbook: General guide for Life Cycle Assessment — Detailed guidance. First edition March 2010. §§7.9.2–7.9.3 and Annex14.4 (printed pp.255–272 and 349–354). https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 归因型细分、逐交换决定性物理因果、剩余共同门价值及带正负值废物责任限制；不采用混合垃圾回收率或信用。 |
| un-cpc3-2026 | official_guidance | UNSD. CPC Version 3 explanatory notes, 23 October 2026, CPC3!A1936:D1936. https://unsdsna.azure-api.net/files/pages/cpc/CPC_Ver3_Exp_Notes_2026-10-23_for_Website.xlsx | 仅核对39910与HS2022 3825.10关联，补充冻结的6月坐标，不改共享分类。 |
| wco-hs38-2022 | official_guidance | WCO. HS 2022 Chapter 38, note 4 and subheading 3825.10. https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0638_2022e.pdf?la=en | 混合市政垃圾定义及排除项；宽HS来源人口不是本独户范围。 |
| spu-plan-2022 | official_guidance | SPU. 2022 Solid Waste Plan Update, Chapter 7, Table 7.1, printed p.7.5, PDF p.6; final approved June 2023. https://www.seattle.gov/documents/departments/spu/documents/plans/solidwaste/2022solidwaste-chapter7-solidwastetransferprocessingdisposalemergencymanagement.pdf | 北站市政合同居民收运路线及并行其他流；分离真实批次来源、接收与后续转运。 |
| spu-feis-2025 | official_guidance | City of Seattle. One Seattle Plan Final EIS, Chapter 3.11, Exhibit 3.11-34, PDF p.47 (2025). https://www.seattle.gov/documents/Departments/OPCD/SeattlePlan/FEIS2025/OneSeattlePlanFEIS-Chapter3.11-PublicServices.pdf | 北站居民垃圾转运功能，不提供独户批次计量或组成。 |
| spu-composition-2020 | official_guidance | SPU. 2020 Residential Waste and Recycling Composition Studies, methodology, PDF pp.17–19. https://www.seattle.gov/documents/departments/spu/aboutus/reports/solid-waste/2020residentialwasterecyclingcompositionstudies.pdf | 反证：垃圾在南站抽样，回收物在北站分选；不采用其作为北站剩余批次组成。 |
