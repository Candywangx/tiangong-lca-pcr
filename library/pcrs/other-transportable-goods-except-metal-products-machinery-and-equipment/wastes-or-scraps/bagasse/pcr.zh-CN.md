---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.bagasse
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 蔗渣：原态湿工业原料供应

## 1. 范围与适用性

本 PCR 适用于供应具文件证明的工业木质纤维接收过程的原态整份湿甘蔗渣，止于接收方脱髓或转化之前。始于已分离提汁残余物，不是购入成品板或纸浆。保留既有蔗渣身份，将适用范围收窄为未处理、未脱髓、未胶合、未制粒压块的散料。湿物料提供原料交付功能，不假定净供热功能。

本技术综合结合真实工业采购原件、工厂作者搬运案例及独立公开方法，不声称它们属于同一订单或工厂。定量使用前必须核实 native 参考流族及精确属性单位链。实际供方数量、分析结果、接收方和上游负荷仍须采集，不设默认因子。

UNSD CPC 3.0 完整说明（2025 年 6 月 30 日，第 199 页）把蔗渣界定为甘蔗提汁后剩余的纤维，并明确将其排除于 39149。下述湿态、未脱髓工业供应范围是作者选定的子集，不是整个分类的要求（`unsd-cpc3-bagasse-2025`）。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.bagasse |
| classification_refs | CPC 3.0:39141 蔗渣，较窄范围以正式分类裁定为准 |
| covered_products | 甘蔗提汁后分离并作为工业木质纤维原料供应的整份散装湿蔗渣，止于脱髓前 |
| excluded_products | CPC 39149 甜菜粕及其他糖业废物; 甘蔗叶梢; 糖蜜及蔗汁; 分离蔗髓; 干燥或脱髓蔗渣; 化学处理配料; 纸浆; 胶合板材; 颗粒及压块; 锅炉灰; 泛生物质; 以燃料供应为参考功能 |
| representative_product | 未脱髓未处理湿甘蔗渣 |
| production_route | 分离后的糖厂湿渣 → 收集输送 → 必要除杂 → 实际暂存 → 首次质量放行 → 仓储装运并交至声明工业接收门 |
| market_state | 供应已证明工业接收方的未处理整份湿态散料; 具体现场数值和接收规格须采集，不从论文或锅炉案例推定 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 为具名工业原料接收方提供合格原态整份湿蔗渣批次 |
| How much | 整批首次质量放行时 1 kg 净湿蔗渣；后续交付服务归属于该原批次 |
| How well | 按接收方规格实测湿态质量、含水、干物质、残糖、纤维蔗髓、异物及存储状态；不虚构通用限值 |
| How long or cycle | 声明完整活动期内一个唯一首次放行批次；存储交付日期另存 |
| reference_flow_link | bagasse_release |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 未处理未脱髓湿甘蔗渣 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 甘蔗来源及提汁出口; 整份未脱髓未处理状态; 工业接收方及原料用途; 接收规格及验收证据; 首次放行门及批次身份; 净湿质量及皮重方法; 含水与干物质测定方法; 残糖方法和结果; 纤维及蔗髓方法和基准; 异物与腐败状态; 存储时长及实际水分管理; 场址及榨季; 交付终端及运输边界; 供方 Product 或 Waste 状态; 继承负荷及分配门; 包装组成及返还方案 |

每项必需限定信息须在数据集元数据、参考备注、产品过程说明或等效可访问字段中声明。限定信息缺失则数据集不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_wet_mass | reference product | Mass | kg | Q 为本期首次整份合格放行的净湿质量。排除包装、期初已放行 FG、内部移动及重复放行，合格期末 FG 只计一次。交付量、干物质、糖分及热量均不是 Q。 |
| wet_dry_bridge | bagasse_in; bagasse_release | Mass | kg | 按方法及取样基准测含水。干物质 = 湿质量 × (1 - 实测湿基水分率)；保留非叠加组分子账。不推定蔗髓、残糖、密度或产率。 |
| raw_conversion | all inventory rows | Exchange-specific property | Original unit then declared row unit | 保留原始单位。先进行真实速率积分、质量及实测密度转换。已积分体积不再乘时间；密度须对应物质与状态。电量 kWh 到 MJ 仅用 3.6。H 是观察窗口，不是再除一次的分母。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 具名末级提汁出口已经分离的整份湿蔗渣，位于蔗渣专属收集及整理前 |
| starting_condition_role | 承接上游负荷的共产品投入，不是零负荷免费自然资源 |
| product_classification_scope | 仅限 CPC 39141 内较窄的原态湿工业原料状态 |
| recursive_input_rule | 外购同状态蔗渣只承接一次上游清单。内部放行及退回移动携带批次向量，不递归重建制糖 |
| upstream_dataset_requirement | 要求可追溯甘蔗栽培运输及截至供货渣的提汁和糖厂共同过程责任。定量使用前核实公用工程、材料和服务供方状态及边界 |
| disclosure | 声明供方、接收厂、榨季、精确门、共输出、内部锅炉分流、损失、库存、归属、运输及处理。若前景始于甘蔗，则须另行编制完整一体化清单并复核适用性 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_state | bagasse_supply | 到终端门均保持声明湿态整料状态。不移入下游脱髓、制浆、UF 板配方、干燥或燃料转化。工业适用性由接收方文件确立。 | mpm-bagasse-1999; tnpl-bagasse-2025 |
| boundary_complete | release; delivery | 纳入到接收门的每项真实收集、输送、除杂、暂存、质检、装运、退回、失败批、维修、空转启停及清扫。每项实际未列投入、废物、物种和介质均独立增行；未获准作业仍有实物清单。 | tnpl-bagasse-2025 |
| boundary_supplier | bagasse_in | 不假设上游糖厂专为蔗渣而建。保留其原始蔗、汁、渣、水及其他共输出总账，并解释专属与联合阶段划分。接收端不重复已继承分配；缺少供方负荷来源阻止完整定量数据集。 | epa-sugar-1997; ilcd-allocation-2010 |
| boundary_internal | release; delivery | 首次放行转移仅在合并 release/delivery 门内两端匹配时抵消。锅炉分流仍为此前景跨越；只有包含真实接收端的更大供糖厂总账才能抵消。内部蔗渣不作为新购燃料、外供 Q 或避免电煤木材。保留总跨越量及真实外部转移。 | epa-sugar-1997 |
| boundary_evidence | delivery | TNPL 是采购控制案例，不是已执行交付证明。标题及卸货例示不能推翻更具体的覆盖物限制。各附属物按实际签署规格核实，不把商业短缺容差当实物损失因子。 | tnpl-bagasse-2025 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| release | 整蔗渣收集及首次放行 | required | 全部声明生产批次 | 供应准备及质量放行 | bagasse_release |
| delivery | 已放行库存及交付服务 | required | 至声明接收门的真实暂存及交付 | 不增产的批次服务 | 原放行 Q；不新增产量分母 |

### 过程：整蔗渣收集及首次放行 (`release`)

#### 输入

##### 产品流

###### 未脱髓未处理湿甘蔗渣 (`bagasse_in`)

刚从提汁处分离的整份残余物，包含实测蔗髓及所含水分。供方负荷向量只承接一次；整份湿质量与组分分析用非叠加桥接。不得替换为干燥、脱髓、化学处理或燃料制品。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。


- 选定流: 未处理未脱髓湿甘蔗渣
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则: 每参考流的采集交换；cp_supplier。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_supplier
- 来源: epa-sugar-1997; mpm-bagasse-1999

###### 外购电力 (`release_electricity`)

首次放行前：分别计量输送机、风机、称重及其他实际设备。保留电压、供方、kWh 原值及到 MJ 的换算；不假设锅炉或发电。不重复服务背景中已含电力。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

原生身份为中国电网平均、用户侧小于 1 kV 的交流电；仅实际相符供电采用本 UUID。其他电压地域、自发电或供方须另核相容身份。原生参考属性名为净热值、参考单位 MJ，此处承载电能，不是终端供热。保留原 kWh × 3.6 换算，不重复加输配损耗或服务内电力。

- 选定流: 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ

- 数量规则: 每参考流的采集交换；cp_activity_release。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_activity_release
- 来源:

###### 外供液态水 (`release_water`)

首次放行前：仅记录实际清扫、有依据的抑尘或水分管理用水。逐供水记录来源、成分及温度；不得移入下游脱髓蔗渣浆料路线。新增水不构成新增干物料，也不得暗增产率。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

原生 Product 为经处理符合饮用水要求、供家庭及工业并涵盖工厂端和用户端的自来水；水源与当地处理可变。仅实际相符自来水采用本绑定，不替代原河水、回用废水、蒸汽或假定通用水源。原生参考为质量；次级体积系数不是实测密度，不能替换原先对应状态的密度测量要求。

- 选定流: 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则: 每参考流的采集交换；cp_water_release。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_water_release
- 来源:

###### 矿物润滑油 (`release_oil`)

首次放行前：实际设备使用的整份外购润滑油制剂，包括添加剂。追踪更换、设备内留存及泄漏，不重复采购其分析组分；其他配方应另设行。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

- 选定流: 矿物润滑油
- 流属性/单位: 质量 / kg
- 数量规则: 每参考流的采集交换；cp_activity_release。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_activity_release
- 来源:

##### 基本流

###### 进入蔗渣暂存边界的降水 (`release_rain`)

仅记录真实进入实物库存边界的降水；独立测定暴露面积和降水留存。边界外径流不作蔗渣投入。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

- 选定流: 进入蔗渣暂存边界的降水
- 流属性/单位: 质量 / kg
- 数量规则: 每参考流的采集交换；cp_water_release。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_water_release
- 来源:

###### 环境空气中的氧气 (`release_oxygen_in`)

有证据降解、自热或事故总账中的条件性真实气体跨越。独立保留实测总进出量及反应消耗生成，不设默认组成或反应程度。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

原生 Elementary 身份：中性 O2，CAS 7782-44-7；为空气中取得的资源，绝不拿排放对象作输入。保留真实气体物种质量及来源；同义词中液态、离子、压缩或同位素标签不授权这些状态、医药牌号、放射性 Ar-41、其他氧化物或泛报告当量。不提供默认空气组成、反应程度或正排放。

- 选定流: 氧气 `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则: 每参考流的采集交换；cp_air_release。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_air_release
- 来源:

###### 环境空气中的氮气 (`release_nitrogen_in`)

有证据降解、自热或事故总账中的条件性真实气体跨越。独立保留实测总进出量及反应消耗生成，不设默认组成或反应程度。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

原生 Elementary 身份：N2，CAS 7727-37-9；为空气中取得的资源，绝不拿排放对象作输入。保留真实气体物种质量及来源；同义词中液态、离子、压缩或同位素标签不授权这些状态、医药牌号、放射性 Ar-41、其他氧化物或泛报告当量。不提供默认空气组成、反应程度或正排放。

- 选定流: 二氮 `08a91e70-3ddc-11dd-96e4-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则: 每参考流的采集交换；cp_air_release。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_air_release
- 来源:

###### 环境空气中的氩气 (`release_argon_in`)

有证据降解、自热或事故总账中的条件性真实气体跨越。独立保留实测总进出量及反应消耗生成，不设默认组成或反应程度。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

原生 Elementary 身份：天然氩，CAS 7440-37-1；为空气中取得的资源，绝不拿排放对象作输入。保留真实气体物种质量及来源；同义词中液态、离子、压缩或同位素标签不授权这些状态、医药牌号、放射性 Ar-41、其他氧化物或泛报告当量。不提供默认空气组成、反应程度或正排放。

- 选定流: 氩 `fe0acd60-3ddc-11dd-a354-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则: 每参考流的采集交换；cp_air_release。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_air_release
- 来源:

###### 环境空气中的水蒸气 (`release_humidity_in`)

有证据降解或事故总账中的真实实测进气湿度，不再采购一次水。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

- 选定流: 环境空气中的水蒸气
- 流属性/单位: 质量 / kg
- 数量规则: 每参考流的采集交换；cp_air_release。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_air_release
- 来源:

#### 输出

##### 产品流

###### 未脱髓未处理湿甘蔗渣 (`bagasse_release`)

唯一参考输出为面向已声明工业原料接收方的整批首次质量放行量。它是进入 delivery 的配对内部转移，不是额外外售。已放行期末库存已包含本期产量；复验、再次交付和旧库存均不产生新产量。


- 选定流: 未处理未脱髓湿甘蔗渣
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则: 1 千克
- 数值来源模式: `fixed_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_release
- 来源: tnpl-bagasse-2025

###### 未脱髓未处理湿甘蔗渣 (`release_boiler_transfer`)

条件性的供糖厂锅炉分流，锅炉位于本前景外。记录配对接收端、实物湿量及继承负荷去向。该内部燃用既不是外供工业原料 Q，也不是新购燃料；燃烧不在此前景中。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。


- 选定流: 未处理未脱髓湿甘蔗渣
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则: 每参考流的采集交换；cp_stock_release。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_stock_release
- 来源: epa-sugar-1997

##### 废物流

###### 弃置湿甘蔗渣 (`release_bagasse_waste`)

首次放行前：实际送处理的失败、腐败、散落或清扫物料。保留批次、湿干量、成分和去向；收集废物与进入环境的颗粒逸散分开。不设默认正损失或零负荷。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

- 选定流: 弃置湿甘蔗渣
- 流属性/单位: 质量 / kg
- 数量规则: 每参考流的采集交换；cp_residue_release。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_residue_release
- 来源:

###### 收集甘蔗渣粉尘 (`release_dust_collected`)

首次放行前：在收集端称重并测含水、粒径和成分的捕集固体残余。内部回用只在两端匹配时抵消，不再同时作为大气排放。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

- 选定流: 收集甘蔗渣粉尘
- 流属性/单位: 质量 / kg
- 数量规则: 每参考流的采集交换；cp_residue_release。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_residue_release
- 来源:

###### 分离矿物砂砾 (`release_mineral_grit`)

首次放行前：实际物理分离的矿物杂质，确定矿物组成及处理路线；不能因灰分分析以 SiO2 报告就视为纯二氧化硅。其他实际分离杂质须独立增行。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

- 选定流: 分离矿物砂砾
- 流属性/单位: 质量 / kg
- 数量规则: 每参考流的采集交换；cp_residue_release。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_residue_release
- 来源:

###### 废矿物润滑油 (`release_waste_oil`)

首次放行前：实际离厂送处理的废油，保留污染状态及接收处理。实际进入土壤或水体的泄漏应按真实化学物种及介质另行记录，不虚构泛称基本流油损。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

原生 Waste 为石油基或合成润滑油经使用污染后、在产生点形成且处理未指定的废油；较窄的真实废矿物润滑油仅在使用后相符。保留污染状态及真实接收处理，不从身份复制再生燃烧处置信用。

- 选定流: 废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则: 每参考流的采集交换；cp_residue_release。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_residue_release
- 来源:

###### 蔗渣场清扫废水 (`release_effluent`)

首次放行前：向具名处理方转移的实际复合废水；只有真实并入此流的渗滤液才计入。记录质量、水分、固体及分析项目；COD、TOC 和总氮是报告指标，不是虚构分子质量。直接排放须另列具体物种和介质行。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

- 选定流: 蔗渣场清扫废水
- 流属性/单位: 质量 / kg
- 数量规则: 每参考流的采集交换；cp_water_release。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_water_release
- 来源:

###### 分离铁质异物 (`release_iron_foreign`)

仅记录实际分离杂质，测定质量、材料身份、来源及去向。不推定金属牌号，也不与砂砾或蔗渣废物合并。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

- 选定流: 分离铁质异物
- 流属性/单位: 质量 / kg
- 数量规则: 每参考流的采集交换；cp_residue_release。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_residue_release
- 来源:

###### 分离椰壳纤维绳异物 (`release_coir_foreign`)

仅记录实际分离杂质，测定质量、材料身份、来源及去向。不推定金属牌号，也不与砂砾或蔗渣废物合并。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

- 选定流: 分离椰壳纤维绳异物
- 流属性/单位: 质量 / kg
- 数量规则: 每参考流的采集交换；cp_residue_release。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_residue_release
- 来源:

##### 基本流

###### 向室外空气排放的水蒸气 (`release_water_vapour`)

首次放行前：区分游离水实际蒸发、进气湿度及化学反应生成水。相变不等于反应；不得用一个残差同时求蒸发与降解。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

- 选定流: 向室外空气排放的水蒸气
- 流属性/单位: 质量 / kg
- 数量规则: 每参考流的采集交换；cp_air_release。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_air_release
- 来源:

###### 向室外空气排放的生物源二氧化碳 (`release_co2_bio`)

首次放行前：仅依据有证据的降解、自热或真实事故，明确碳来源，并提供物种测量或有依据的有界计算。不默认正排放、碳中和、避免燃料或储碳信用。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

原生 Elementary 身份：生物源 CO2，CAS 124-38-9；为向室外空气、子环境未指定的排放；已知更细隔室时须匹配对应原生身份。保留真实气体物种质量及来源；同义词中液态、离子、压缩或同位素标签不授权这些状态、医药牌号、放射性 Ar-41、其他氧化物或泛报告当量。不提供默认空气组成、反应程度或正排放。

- 选定流: 二氧化碳（生物源） `08a91e70-3ddc-11dd-9c15-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则: 每参考流的采集交换；cp_air_release。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_air_release
- 来源:

###### 向室外空气排放的生物源甲烷 (`release_ch4_bio`)

首次放行前：仅针对有证据的实际厌氧或事故路径；与化石源甲烷及二氧化碳分开。缺少监测保留为缺口，不写成零或强制默认排放。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

- 选定流: 向室外空气排放的生物源甲烷
- 流属性/单位: 质量 / kg
- 数量规则: 每参考流的采集交换；cp_air_release。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_air_release
- 来源:

###### 向空气排放的小于 2.5 微米蔗渣颗粒物 (`release_pm_fine`)

首次放行前：经过收集控制后真实逸散的非均一蔗渣颗粒，仅限本互不重叠空气动力学粒径段。不是纤维素分子或总尘替身；未知粒径分布保留缺口。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

原生 Elementary 族为PM2.5粒径段向空气、子环境未指定的真实颗粒。本卡仅取其中真实逸散蔗渣颗粒，不声称分子 CAS 或纯碳组成。保留原互斥实测粒径段、捕集控制和真实来源；已知其他室外子环境时须另核对应身份。

- 选定流: 颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则: 每参考流的采集交换；cp_air_release。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_air_release
- 来源:

###### 向空气排放的 2.5 至 10 微米蔗渣颗粒物 (`release_pm_coarse`)

首次放行前：只计该区间真实逸散颗粒；不得将嵌套 PM10 与 PM2.5 相加。蔗渣颗粒与柴油烟炱来源分开。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

原生 Elementary 族为PM2.5 至 PM10粒径段向空气、子环境未指定的真实颗粒。本卡仅取其中真实逸散蔗渣颗粒，不声称分子 CAS 或纯碳组成。保留原互斥实测粒径段、捕集控制和真实来源；已知其他室外子环境时须另核对应身份。

- 选定流: 颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则: 每参考流的采集交换；cp_air_release。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_air_release
- 来源:

###### 向空气排放的大于 10 微米蔗渣颗粒物 (`release_pm_large`)

首次放行前：仅计真实逸散粗颗粒。实测总颗粒物必须非重叠分区，否则保留为未解决指标，不能悄然绑定本行。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

原生 Elementary 族为大于 PM10粒径段向空气、子环境未指定的真实颗粒。本卡仅取其中真实逸散蔗渣颗粒，不声称分子 CAS 或纯碳组成。保留原互斥实测粒径段、捕集控制和真实来源；已知其他室外子环境时须另核对应身份。

- 选定流: 颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则: 每参考流的采集交换；cp_air_release。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_air_release
- 来源:

###### 向室外空气排放的氧气 (`release_oxygen_out`)

有证据降解、自热或事故总账中的条件性真实气体跨越。独立保留实测总进出量及反应消耗生成，不设默认组成或反应程度。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

原生 Elementary 身份：中性 O2，CAS 7782-44-7；为向室外空气、子环境未指定的排放；已知更细隔室时须匹配对应原生身份。保留真实气体物种质量及来源；同义词中液态、离子、压缩或同位素标签不授权这些状态、医药牌号、放射性 Ar-41、其他氧化物或泛报告当量。不提供默认空气组成、反应程度或正排放。

- 选定流: 氧 `08a91e70-3ddc-11dd-9745-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则: 每参考流的采集交换；cp_air_release。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_air_release
- 来源:

###### 向室外空气排放的氮气 (`release_nitrogen_out`)

有证据降解、自热或事故总账中的条件性真实气体跨越。独立保留实测总进出量及反应消耗生成，不设默认组成或反应程度。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

原生 Elementary 身份：N2，CAS 7727-37-9；为向室外空气、子环境未指定的排放；已知更细隔室时须匹配对应原生身份。保留真实气体物种质量及来源；同义词中液态、离子、压缩或同位素标签不授权这些状态、医药牌号、放射性 Ar-41、其他氧化物或泛报告当量。不提供默认空气组成、反应程度或正排放。

- 选定流: 二氮 `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则: 每参考流的采集交换；cp_air_release。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_air_release
- 来源:

###### 向室外空气排放的氩气 (`release_argon_out`)

有证据降解、自热或事故总账中的条件性真实气体跨越。独立保留实测总进出量及反应消耗生成，不设默认组成或反应程度。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

原生 Elementary 身份：天然氩，CAS 7440-37-1；为向室外空气、子环境未指定的排放；已知更细隔室时须匹配对应原生身份。保留真实气体物种质量及来源；同义词中液态、离子、压缩或同位素标签不授权这些状态、医药牌号、放射性 Ar-41、其他氧化物或泛报告当量。不提供默认空气组成、反应程度或正排放。

- 选定流: 氩 `fe0acd60-3ddc-11dd-a350-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则: 每参考流的采集交换；cp_air_release。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_air_release
- 来源:

### 过程：已放行库存及交付服务 (`delivery`)

#### 输入

##### 产品流

###### 未脱髓未处理湿甘蔗渣 (`released_in`)

逐批匹配 bagasse_release 两端的湿质量、含水、时间及继承负荷向量。期初已放行库存按原批次另行结转，不属于本期 Q。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。


- 选定流: 未处理未脱髓湿甘蔗渣
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则: 每参考流的采集交换；cp_stock_delivery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_stock_delivery
- 来源:

###### 未脱髓未处理湿甘蔗渣 (`bagasse_return`)

实际退回的已交付物料保留原放行身份。冲回原交付归属并仅承接一次历史负荷；只有真实新增搬运或返工增加负荷。退回不是新购料或新 Q。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。


- 选定流: 未处理未脱髓湿甘蔗渣
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则: 每参考流的采集交换；cp_stock_delivery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_stock_delivery
- 来源:

###### 外购电力 (`delivery_electricity`)

首次放行后：分别计量输送机、风机、称重及其他实际设备。保留电压、供方、kWh 原值及到 MJ 的换算；不假设锅炉或发电。不重复服务背景中已含电力。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

原生身份为中国电网平均、用户侧小于 1 kV 的交流电；仅实际相符供电采用本 UUID。其他电压地域、自发电或供方须另核相容身份。原生参考属性名为净热值、参考单位 MJ，此处承载电能，不是终端供热。保留原 kWh × 3.6 换算，不重复加输配损耗或服务内电力。

- 选定流: 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ

- 数量规则: 每参考流的采集交换；cp_activity_delivery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_activity_delivery
- 来源:

###### 外供液态水 (`delivery_water`)

首次放行后：仅记录实际清扫、有依据的抑尘或水分管理用水。逐供水记录来源、成分及温度；不得移入下游脱髓蔗渣浆料路线。新增水不构成新增干物料，也不得暗增产率。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

原生 Product 为经处理符合饮用水要求、供家庭及工业并涵盖工厂端和用户端的自来水；水源与当地处理可变。仅实际相符自来水采用本绑定，不替代原河水、回用废水、蒸汽或假定通用水源。原生参考为质量；次级体积系数不是实测密度，不能替换原先对应状态的密度测量要求。

- 选定流: 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则: 每参考流的采集交换；cp_water_delivery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_water_delivery
- 来源:

###### 矿物润滑油 (`delivery_oil`)

首次放行后：实际设备使用的整份外购润滑油制剂，包括添加剂。追踪更换、设备内留存及泄漏，不重复采购其分析组分；其他配方应另设行。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

- 选定流: 矿物润滑油
- 流属性/单位: 质量 / kg
- 数量规则: 每参考流的采集交换；cp_activity_delivery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_activity_delivery
- 来源:

###### 柴油 (`diesel`)

用于此前景内真实运行装载机或车辆的条件燃料。记录整份供应燃料混合物、库存变化及发动机活动。外购运输段只承接一次其燃料和排放，不再为同一段重复添加本行。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

原生 Product 以质量标识柴油，牌号、配方、密度、热值、炼制路线、地域及供方均未特指。保留真实整份混合制剂及原 kg 基准；本身份不提供默认热值、密度、发动机工况或燃料因子。

- 选定流: 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则: 每参考流的采集交换；cp_activity_delivery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_activity_delivery
- 来源:

###### 散装蔗渣公路货运服务 (`freight`)

仅限到声明工业接收门的独立外供公路运输段。保留实际湿载荷、距离、空返、载重或容积限制、损失及供方边界。采用一个经核背景供方结果或明确车辆前景清单，不得并用。合同运价不是燃料量。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

公路货运量使用实际湿载荷和距离，记录 t*km，1 t = 1000 kg；保留空返分配和具体车辆供方边界。绑定身份前须核实原生服务属性单位链。

- 选定流: 货物运输
- 流属性/单位: 质量*距离 / t*km

- 数量规则: 每参考流的采集交换；cp_dispatch。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_dispatch
- 来源: tnpl-bagasse-2025

###### 运输篷布 (`tarpaulin_in`)

条件行：整份供货篷布及其真实织物和涂层组成。将真正新购与外部退回接收区分为原始移动类型；只有新购承接新的生产负荷。不按每次复用自动再采购。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。


- 选定流: 运输篷布罩
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则: 每参考流的采集交换；cp_pack。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_pack
- 来源: tnpl-bagasse-2025

###### 去皮木质载荷限位杆 (`wood_pole_in`)

条件行：声明树种和处理状态的一根去皮实木限位杆。将真正新购与外部退回接收区分为原始移动类型；只有新购承接新的生产负荷。不按每次复用自动再采购。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

- 选定流: 去皮木质载荷限位杆
- 流属性/单位: 质量 / kg
- 数量规则: 每参考流的采集交换；cp_pack。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_pack
- 来源: tnpl-bagasse-2025

###### 运输用黄麻布 (`jute_cloth_in`)

条件行：一份供货黄麻布及真实涂层和获准用途。将真正新购与外部退回接收区分为原始移动类型；只有新购承接新的生产负荷。不按每次复用自动再采购。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。


- 选定流: 黄麻运输布
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则: 每参考流的采集交换；cp_pack。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_pack
- 来源: tnpl-bagasse-2025

###### 钢质载荷绑扎线 (`steel_wire_in`)

条件行：一份声明牌号和涂层的供货钢线。将真正新购与外部退回接收区分为原始移动类型；只有新购承接新的生产负荷。不按每次复用自动再采购。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

原生 Product 为柔性圆柱状钢丝，路线为钢铁生产，未固定牌号、涂层、线径、地域及供方。单一真实绑扎钢线保留声明牌号涂层及整份采购质量，不替换为铜线、丝网、加固框架或假定细线直径。

- 选定流: 钢丝 `62bb3717-f62c-43e0-baca-46a1e6f847c4`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则: 每参考流的采集交换；cp_pack。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_pack
- 来源: tnpl-bagasse-2025

###### 黄麻载荷绑扎绳 (`jute_twine_in`)

条件行：一份声明实际整理状态的供货黄麻绳。将真正新购与外部退回接收区分为原始移动类型；只有新购承接新的生产负荷。不按每次复用自动再采购。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

- 选定流: 黄麻载荷绑扎绳
- 流属性/单位: 质量 / kg
- 数量规则: 每参考流的采集交换；cp_pack。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_pack
- 来源: tnpl-bagasse-2025

##### 基本流

###### 环境空气中的氧气 (`oxygen_in`)

直接运行发动机或有证据降解、事故总账中的条件性真实气体跨越。分别记录总进、出口质量及反应消耗、生成；未反应载气为非叠加衡算分区，不是新排放因子。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

原生 Elementary 身份：中性 O2，CAS 7782-44-7；为空气中取得的资源，绝不拿排放对象作输入。保留真实气体物种质量及来源；同义词中液态、离子、压缩或同位素标签不授权这些状态、医药牌号、放射性 Ar-41、其他氧化物或泛报告当量。不提供默认空气组成、反应程度或正排放。

- 选定流: 氧气 `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则: 每参考流的采集交换；cp_air_delivery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_air_delivery
- 来源:

###### 环境空气中的氮气 (`nitrogen_in`)

直接运行发动机或有证据降解、事故总账中的条件性真实气体跨越。分别记录总进、出口质量及反应消耗、生成；未反应载气为非叠加衡算分区，不是新排放因子。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

原生 Elementary 身份：N2，CAS 7727-37-9；为空气中取得的资源，绝不拿排放对象作输入。保留真实气体物种质量及来源；同义词中液态、离子、压缩或同位素标签不授权这些状态、医药牌号、放射性 Ar-41、其他氧化物或泛报告当量。不提供默认空气组成、反应程度或正排放。

- 选定流: 二氮 `08a91e70-3ddc-11dd-96e4-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则: 每参考流的采集交换；cp_air_delivery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_air_delivery
- 来源:

###### 环境空气中的氩气 (`argon_in`)

直接运行发动机或有证据降解、事故总账中的条件性真实气体跨越。分别记录总进、出口质量及反应消耗、生成；未反应载气为非叠加衡算分区，不是新排放因子。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

原生 Elementary 身份：天然氩，CAS 7440-37-1；为空气中取得的资源，绝不拿排放对象作输入。保留真实气体物种质量及来源；同义词中液态、离子、压缩或同位素标签不授权这些状态、医药牌号、放射性 Ar-41、其他氧化物或泛报告当量。不提供默认空气组成、反应程度或正排放。

- 选定流: 氩 `fe0acd60-3ddc-11dd-a354-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则: 每参考流的采集交换；cp_air_delivery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_air_delivery
- 来源:

###### 环境空气中的水蒸气 (`humidity_in`)

直接控制发动机或有证据降解水账的实测进气湿度，不再采购一次水。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

- 选定流: 环境空气中的水蒸气
- 流属性/单位: 质量 / kg
- 数量规则: 每参考流的采集交换；cp_air_delivery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_air_delivery
- 来源:

###### 进入蔗渣暂存边界的降水 (`delivery_rain`)

仅记录真实进入实物库存边界的降水；独立测定暴露面积和降水留存。边界外径流不作蔗渣投入。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

- 选定流: 进入蔗渣暂存边界的降水
- 流属性/单位: 质量 / kg
- 数量规则: 每参考流的采集交换；cp_water_delivery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_water_delivery
- 来源:

#### 输出

##### 产品流

###### 未脱髓未处理湿甘蔗渣 (`bagasse_dispatch`)

在脱髓及转化前，按实际湿态计量向声明工业接收门的总实物发运。区分本期与历史批次、退货、途中损失和拒收。发运不是第二个参考输出，也不等于 Q。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。


- 选定流: 未处理未脱髓湿甘蔗渣
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则: 每参考流的采集交换；cp_dispatch。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_dispatch
- 来源: tnpl-bagasse-2025

###### 未脱髓未处理湿甘蔗渣 (`delivery_boiler_transfer`)

条件性的供糖厂锅炉分流，锅炉位于本前景外。记录配对接收端、实物湿量及继承负荷去向。该内部燃用既不是外供工业原料 Q，也不是新购燃料；燃烧不在此前景中。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。


- 选定流: 未处理未脱髓湿甘蔗渣
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则: 每参考流的采集交换；cp_stock_delivery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_stock_delivery
- 来源: epa-sugar-1997

###### 运输篷布 (`tarpaulin_out`)

随蔗渣总实物发运及向外返还的物件移动，按目的分别记录，不能用有符号净采购替代。采用物件实测质量，不假定件到 kg 换算。可复用物返还不产生共产品信用。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。


- 选定流: 运输篷布罩
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则: 每参考流的采集交换；cp_pack。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_pack
- 来源: tnpl-bagasse-2025

###### 去皮木质载荷限位杆 (`wood_pole_out`)

随蔗渣总实物发运及向外返还的物件移动，按目的分别记录，不能用有符号净采购替代。采用物件实测质量，不假定件到 kg 换算。可复用物返还不产生共产品信用。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

- 选定流: 去皮木质载荷限位杆
- 流属性/单位: 质量 / kg
- 数量规则: 每参考流的采集交换；cp_pack。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_pack
- 来源: tnpl-bagasse-2025

###### 运输用黄麻布 (`jute_cloth_out`)

随蔗渣总实物发运及向外返还的物件移动，按目的分别记录，不能用有符号净采购替代。采用物件实测质量，不假定件到 kg 换算。可复用物返还不产生共产品信用。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。


- 选定流: 黄麻运输布
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则: 每参考流的采集交换；cp_pack。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_pack
- 来源: tnpl-bagasse-2025

###### 钢质载荷绑扎线 (`steel_wire_out`)

随蔗渣总实物发运及向外返还的物件移动，按目的分别记录，不能用有符号净采购替代。采用物件实测质量，不假定件到 kg 换算。可复用物返还不产生共产品信用。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

原生 Product 为柔性圆柱状钢丝，路线为钢铁生产，未固定牌号、涂层、线径、地域及供方。单一真实绑扎钢线保留声明牌号涂层及整份采购质量，不替换为铜线、丝网、加固框架或假定细线直径。

- 选定流: 钢丝 `62bb3717-f62c-43e0-baca-46a1e6f847c4`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则: 每参考流的采集交换；cp_pack。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_pack
- 来源: tnpl-bagasse-2025

###### 黄麻载荷绑扎绳 (`jute_twine_out`)

随蔗渣总实物发运及向外返还的物件移动，按目的分别记录，不能用有符号净采购替代。采用物件实测质量，不假定件到 kg 换算。可复用物返还不产生共产品信用。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

- 选定流: 黄麻载荷绑扎绳
- 流属性/单位: 质量 / kg
- 数量规则: 每参考流的采集交换；cp_pack。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_pack
- 来源: tnpl-bagasse-2025

##### 废物流

###### 弃置湿甘蔗渣 (`delivery_bagasse_waste`)

首次放行后：实际送处理的失败、腐败、散落或清扫物料。保留批次、湿干量、成分和去向；收集废物与进入环境的颗粒逸散分开。不设默认正损失或零负荷。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

- 选定流: 弃置湿甘蔗渣
- 流属性/单位: 质量 / kg
- 数量规则: 每参考流的采集交换；cp_residue_delivery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_residue_delivery
- 来源:

###### 收集甘蔗渣粉尘 (`delivery_dust_collected`)

首次放行后：在收集端称重并测含水、粒径和成分的捕集固体残余。内部回用只在两端匹配时抵消，不再同时作为大气排放。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

- 选定流: 收集甘蔗渣粉尘
- 流属性/单位: 质量 / kg
- 数量规则: 每参考流的采集交换；cp_residue_delivery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_residue_delivery
- 来源:

###### 分离矿物砂砾 (`delivery_mineral_grit`)

首次放行后：实际物理分离的矿物杂质，确定矿物组成及处理路线；不能因灰分分析以 SiO2 报告就视为纯二氧化硅。其他实际分离杂质须独立增行。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

- 选定流: 分离矿物砂砾
- 流属性/单位: 质量 / kg
- 数量规则: 每参考流的采集交换；cp_residue_delivery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_residue_delivery
- 来源:

###### 废矿物润滑油 (`delivery_waste_oil`)

首次放行后：实际离厂送处理的废油，保留污染状态及接收处理。实际进入土壤或水体的泄漏应按真实化学物种及介质另行记录，不虚构泛称基本流油损。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

原生 Waste 为石油基或合成润滑油经使用污染后、在产生点形成且处理未指定的废油；较窄的真实废矿物润滑油仅在使用后相符。保留污染状态及真实接收处理，不从身份复制再生燃烧处置信用。

- 选定流: 废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则: 每参考流的采集交换；cp_residue_delivery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_residue_delivery
- 来源:

###### 蔗渣场清扫废水 (`delivery_effluent`)

首次放行后：向具名处理方转移的实际复合废水；只有真实并入此流的渗滤液才计入。记录质量、水分、固体及分析项目；COD、TOC 和总氮是报告指标，不是虚构分子质量。直接排放须另列具体物种和介质行。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

- 选定流: 蔗渣场清扫废水
- 流属性/单位: 质量 / kg
- 数量规则: 每参考流的采集交换；cp_water_delivery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_water_delivery
- 来源:

###### 废弃运输篷布 (`tarpaulin_waste`)

仅记录真实磨损或弃置物件及其组成、处理；维修新增材料独立保留。整份供货篷布及其真实织物和涂层组成。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

- 选定流: 废弃运输篷布
- 流属性/单位: 质量 / kg
- 数量规则: 每参考流的采集交换；cp_pack。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_pack
- 来源:

###### 废弃去皮木质载荷限位杆 (`wood_pole_waste`)

仅记录真实磨损或弃置物件及其组成、处理；维修新增材料独立保留。声明树种和处理状态的一根去皮实木限位杆。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

- 选定流: 废弃去皮木质载荷限位杆
- 流属性/单位: 质量 / kg
- 数量规则: 每参考流的采集交换；cp_pack。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_pack
- 来源:

###### 废弃运输用黄麻布 (`jute_cloth_waste`)

仅记录真实磨损或弃置物件及其组成、处理；维修新增材料独立保留。一份供货黄麻布及真实涂层和获准用途。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

- 选定流: 废弃运输用黄麻布
- 流属性/单位: 质量 / kg
- 数量规则: 每参考流的采集交换；cp_pack。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_pack
- 来源:

###### 废弃钢质载荷绑扎线 (`steel_wire_waste`)

仅记录真实磨损或弃置物件及其组成、处理；维修新增材料独立保留。一份声明牌号和涂层的供货钢线。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

- 选定流: 废弃钢质载荷绑扎线
- 流属性/单位: 质量 / kg
- 数量规则: 每参考流的采集交换；cp_pack。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_pack
- 来源:

###### 废弃黄麻载荷绑扎绳 (`jute_twine_waste`)

仅记录真实磨损或弃置物件及其组成、处理；维修新增材料独立保留。一份声明实际整理状态的供货黄麻绳。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

- 选定流: 废弃黄麻载荷绑扎绳
- 流属性/单位: 质量 / kg
- 数量规则: 每参考流的采集交换；cp_pack。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_pack
- 来源:

###### 分离铁质异物 (`delivery_iron_foreign`)

仅记录实际分离杂质，测定质量、材料身份、来源及去向。不推定金属牌号，也不与砂砾或蔗渣废物合并。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

- 选定流: 分离铁质异物
- 流属性/单位: 质量 / kg
- 数量规则: 每参考流的采集交换；cp_residue_delivery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_residue_delivery
- 来源:

###### 分离椰壳纤维绳异物 (`delivery_coir_foreign`)

仅记录实际分离杂质，测定质量、材料身份、来源及去向。不推定金属牌号，也不与砂砾或蔗渣废物合并。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

- 选定流: 分离椰壳纤维绳异物
- 流属性/单位: 质量 / kg
- 数量规则: 每参考流的采集交换；cp_residue_delivery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_residue_delivery
- 来源:

##### 基本流

###### 向室外空气排放的水蒸气 (`delivery_water_vapour`)

首次放行后：区分游离水实际蒸发、进气湿度及化学反应生成水。相变不等于反应；不得用一个残差同时求蒸发与降解。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

- 选定流: 向室外空气排放的水蒸气
- 流属性/单位: 质量 / kg
- 数量规则: 每参考流的采集交换；cp_air_delivery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_air_delivery
- 来源:

###### 向室外空气排放的生物源二氧化碳 (`delivery_co2_bio`)

首次放行后：仅依据有证据的降解、自热或真实事故，明确碳来源，并提供物种测量或有依据的有界计算。不默认正排放、碳中和、避免燃料或储碳信用。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

原生 Elementary 身份：生物源 CO2，CAS 124-38-9；为向室外空气、子环境未指定的排放；已知更细隔室时须匹配对应原生身份。保留真实气体物种质量及来源；同义词中液态、离子、压缩或同位素标签不授权这些状态、医药牌号、放射性 Ar-41、其他氧化物或泛报告当量。不提供默认空气组成、反应程度或正排放。

- 选定流: 二氧化碳（生物源） `08a91e70-3ddc-11dd-9c15-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则: 每参考流的采集交换；cp_air_delivery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_air_delivery
- 来源:

###### 向室外空气排放的生物源甲烷 (`delivery_ch4_bio`)

首次放行后：仅针对有证据的实际厌氧或事故路径；与化石源甲烷及二氧化碳分开。缺少监测保留为缺口，不写成零或强制默认排放。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

- 选定流: 向室外空气排放的生物源甲烷
- 流属性/单位: 质量 / kg
- 数量规则: 每参考流的采集交换；cp_air_delivery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_air_delivery
- 来源:

###### 向空气排放的小于 2.5 微米蔗渣颗粒物 (`delivery_pm_fine`)

首次放行后：经过收集控制后真实逸散的非均一蔗渣颗粒，仅限本互不重叠空气动力学粒径段。不是纤维素分子或总尘替身；未知粒径分布保留缺口。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

原生 Elementary 族为PM2.5粒径段向空气、子环境未指定的真实颗粒。本卡仅取其中真实逸散蔗渣颗粒，不声称分子 CAS 或纯碳组成。保留原互斥实测粒径段、捕集控制和真实来源；已知其他室外子环境时须另核对应身份。

- 选定流: 颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则: 每参考流的采集交换；cp_air_delivery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_air_delivery
- 来源:

###### 向空气排放的 2.5 至 10 微米蔗渣颗粒物 (`delivery_pm_coarse`)

首次放行后：只计该区间真实逸散颗粒；不得将嵌套 PM10 与 PM2.5 相加。蔗渣颗粒与柴油烟炱来源分开。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

原生 Elementary 族为PM2.5 至 PM10粒径段向空气、子环境未指定的真实颗粒。本卡仅取其中真实逸散蔗渣颗粒，不声称分子 CAS 或纯碳组成。保留原互斥实测粒径段、捕集控制和真实来源；已知其他室外子环境时须另核对应身份。

- 选定流: 颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则: 每参考流的采集交换；cp_air_delivery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_air_delivery
- 来源:

###### 向空气排放的大于 10 微米蔗渣颗粒物 (`delivery_pm_large`)

首次放行后：仅计真实逸散粗颗粒。实测总颗粒物必须非重叠分区，否则保留为未解决指标，不能悄然绑定本行。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

原生 Elementary 族为大于 PM10粒径段向空气、子环境未指定的真实颗粒。本卡仅取其中真实逸散蔗渣颗粒，不声称分子 CAS 或纯碳组成。保留原互斥实测粒径段、捕集控制和真实来源；已知其他室外子环境时须另核对应身份。

- 选定流: 颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则: 每参考流的采集交换；cp_air_delivery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_air_delivery
- 来源:

###### 向室外空气排放的氧气 (`oxygen_out`)

直接运行发动机或有证据降解、事故总账中的条件性真实气体跨越。分别记录总进、出口质量及反应消耗、生成；未反应载气为非叠加衡算分区，不是新排放因子。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

原生 Elementary 身份：中性 O2，CAS 7782-44-7；为向室外空气、子环境未指定的排放；已知更细隔室时须匹配对应原生身份。保留真实气体物种质量及来源；同义词中液态、离子、压缩或同位素标签不授权这些状态、医药牌号、放射性 Ar-41、其他氧化物或泛报告当量。不提供默认空气组成、反应程度或正排放。

- 选定流: 氧 `08a91e70-3ddc-11dd-9745-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则: 每参考流的采集交换；cp_air_delivery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_air_delivery
- 来源:

###### 向室外空气排放的氮气 (`nitrogen_out`)

直接运行发动机或有证据降解、事故总账中的条件性真实气体跨越。分别记录总进、出口质量及反应消耗、生成；未反应载气为非叠加衡算分区，不是新排放因子。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

原生 Elementary 身份：N2，CAS 7727-37-9；为向室外空气、子环境未指定的排放；已知更细隔室时须匹配对应原生身份。保留真实气体物种质量及来源；同义词中液态、离子、压缩或同位素标签不授权这些状态、医药牌号、放射性 Ar-41、其他氧化物或泛报告当量。不提供默认空气组成、反应程度或正排放。

- 选定流: 二氮 `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则: 每参考流的采集交换；cp_air_delivery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_air_delivery
- 来源:

###### 向室外空气排放的氩气 (`argon_out`)

直接运行发动机或有证据降解、事故总账中的条件性真实气体跨越。分别记录总进、出口质量及反应消耗、生成；未反应载气为非叠加衡算分区，不是新排放因子。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

原生 Elementary 身份：天然氩，CAS 7440-37-1；为向室外空气、子环境未指定的排放；已知更细隔室时须匹配对应原生身份。保留真实气体物种质量及来源；同义词中液态、离子、压缩或同位素标签不授权这些状态、医药牌号、放射性 Ar-41、其他氧化物或泛报告当量。不提供默认空气组成、反应程度或正排放。

- 选定流: 氩 `fe0acd60-3ddc-11dd-a350-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则: 每参考流的采集交换；cp_air_delivery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_air_delivery
- 来源:

###### 向空气排放的化石源二氧化碳 (`co2_fossil`)

直接运行燃烧或有证据事故的条件行，不设默认排放：仅计燃料来源碳，先明确非 CO2 含碳出口及库存，不替代生物源。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

原生 Elementary 身份：化石源 CO2，CAS 124-38-9；为向室外空气、子环境未指定的排放；已知更细隔室时须匹配对应原生身份。保留真实气体物种质量及来源；同义词中液态、离子、压缩或同位素标签不授权这些状态、医药牌号、放射性 Ar-41、其他氧化物或泛报告当量。不提供默认空气组成、反应程度或正排放。

- 选定流: 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则: 每参考流的采集交换；cp_air_delivery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_air_delivery
- 来源:

###### 向空气排放的化石源甲烷 (`ch4_fossil`)

直接运行燃烧或有证据事故的条件行，不设默认排放：仅计真实化石源甲烷；总烃不能确立 CH4 质量。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

- 选定流: 向空气排放的化石源甲烷
- 流属性/单位: 质量 / kg
- 数量规则: 每参考流的采集交换；cp_air_delivery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_air_delivery
- 来源:

###### 向空气排放的一氧化碳 (`carbon_monoxide`)

直接运行燃烧或有证据事故的条件行，不设默认排放：真实 CO 物种质量，并区分燃料或生物质来源；不使用 CO2 当量代替。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

- 选定流: 向空气排放的一氧化碳
- 流属性/单位: 质量 / kg
- 数量规则: 每参考流的采集交换；cp_air_delivery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_air_delivery
- 来源:

###### 向空气排放的一氧化氮 (`nitric_oxide`)

直接运行燃烧或有证据事故的条件行，不设默认排放：真实 NO 质量；以 NO2 当量报告的 NOx 不是本物种质量。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

- 选定流: 向空气排放的一氧化氮
- 流属性/单位: 质量 / kg
- 数量规则: 每参考流的采集交换；cp_air_delivery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_air_delivery
- 来源:

###### 向空气排放的二氧化氮 (`nitrogen_dioxide`)

直接运行燃烧或有证据事故的条件行，不设默认排放：采用实测物种划分的真实 NO2 质量；不得在 NO 之外再记整份 NOx。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

- 选定流: 向空气排放的二氧化氮
- 流属性/单位: 质量 / kg
- 数量规则: 每参考流的采集交换；cp_air_delivery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_air_delivery
- 来源:

###### 向空气排放的一氧化二氮 (`nitrous_oxide`)

直接运行燃烧或有证据事故的条件行，不设默认排放：真实 N2O 质量，与 NO、NO2 和 CO2 当量分开。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

原生 Elementary 身份：N2O，CAS 10024-97-2；为向室外空气、子环境未指定的排放；已知更细隔室时须匹配对应原生身份。保留真实气体物种质量及来源；同义词中液态、离子、压缩或同位素标签不授权这些状态、医药牌号、放射性 Ar-41、其他氧化物或泛报告当量。不提供默认空气组成、反应程度或正排放。

- 选定流: 一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则: 每参考流的采集交换；cp_air_delivery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_air_delivery
- 来源:

###### 向空气排放的二氧化硫 (`sulfur_dioxide`)

直接运行燃烧或有证据事故的条件行，不设默认排放：真实 SO2 质量；保留燃料硫及其他硫出口，不假设全转化。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

原生 Elementary 身份：SO2，CAS 7446-09-5；为向室外空气、子环境未指定的排放；已知更细隔室时须匹配对应原生身份。保留真实气体物种质量及来源；同义词中液态、离子、压缩或同位素标签不授权这些状态、医药牌号、放射性 Ar-41、其他氧化物或泛报告当量。不提供默认空气组成、反应程度或正排放。

- 选定流: 二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则: 每参考流的采集交换；cp_air_delivery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_air_delivery
- 来源:

###### 向空气排放的柴油烟炱颗粒 (`soot`)

直接运行燃烧或有证据事故的条件行，不设默认排放：实际燃烧颗粒流，测定粒径与组成。不能假设为蔗渣粉尘或纯元素碳；使用前须解析各粒径 native 身份。 按第 8 节唯一归一规则 normalize_exchange 报告本卡总实物 V 及独立负荷 A；各账分别只除一次。

- 选定流: 向空气排放的柴油烟炱颗粒
- 流属性/单位: 质量 / kg
- 数量规则: 每参考流的采集交换；cp_air_delivery。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_air_delivery
- 来源:

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_scenario | supplier; release; delivery | 声明确需分配的归因场景。先以真实或虚拟细分分离专属作业，再逐剩余交换确定决定性的物理因果关系，并记录不能直接归属的理由。 | ilcd-allocation-2010 |
| allocation_residual | common_process | 仅真正剩余共同负荷采用同一共同过程出口、实际状态及同期相对市场价值。扣除后续整理、包装运输影响；记录状态、数量、价格和敏感性，不任意选择物理或经济分配，也不设固定份额。 | ilcd-allocation-2010 |
| allocation_status | bagasse_in; residues | 低价、生物来源、残余物名称及 CPC 废物父类不证明零上游负荷。须核实际接收用途、规格、法律市场状态和供方责任。区分有用 Product 与弃置 Waste，状态不明须复核。 | ilcd-allocation-2010; epa-sugar-1997 |
| allocation_ledgers | all inventory rows | 份额只影响环境负荷 A。总实物向量 V、产品废物排放质量、水分变化、内部转移及历史库存归属均不按份额缩小。不自动给予替代、回收或碳信用。 | ilcd-allocation-2010 |

## 8. 前景数据采集、计算与质量规则

全部协议采集未除 Q 的总实物 V、独立负荷 A 及库存向量。聚合字段只声明最终报告基准并引用 normalize_exchange，不再执行除法。历史批次保留原放行 Q、继承负荷及后续服务记录。Q0 观察期仍记录每项负荷及未解决责任。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | release | bagasse_release | 一级实测记录 | 批次身份; 首次放行时间; 实测毛重皮重; 净湿质量; 合格结果; 期初期末未放行物及 WIP 与已放行 FG; 重复放行标记 | 校准称重及按接收规格取样；逐整批唯一首次放行与库存状态核对。保留含水、残糖、纤维蔗髓、异物及腐败的方法结果和不确定性。 | kg | 每批移动及同步表计库存结算 | 同一完整声明活动期；保留来源期间 | 具名供货及接收门；阶段批次范围 | 每参考流 | 校准；批次追溯；原记录；不确定性；缺席证据 |
| cp_supplier | release | bagasse_in | 一级实测记录 | 供方; 提汁出口; 收料湿量; 含水; 整料状态声明; 真实接收方; Product/Waste 状态; 原负荷向量; 共输出总账; 分配门及期间 | 匹配供方一级清单及收料测量。栽培运输及提汁责任只追溯一次；拒绝无据零负荷及对已分配输入再次分配。 | kg | 每批移动及同步表计库存结算 | 同一完整声明活动期；保留来源期间 | 具名供货及接收门；阶段批次范围 | 每参考流 | 校准；批次追溯；原记录；不确定性；缺席证据 |
| cp_stock_release | release | bagasse cohorts and internal transfers | 一级实测记录 | 批次; 来源期; 期初期末原料 WIP FG 湿干质量; 逐流负荷向量; 质量状态; 配对端点; 实际转移; 交付退回及原交付冲回; 新增返工 | 逐库存类别称量取样，核对交易时间顺序。历史向量与实物库存分开结转。不得因销售或复验追溯增产。 | kg | 每批移动及同步表计库存结算 | 同一完整声明活动期；保留来源期间 | 具名供货及接收门；阶段批次范围 | 每参考流 | 校准；批次追溯；原记录；不确定性；缺席证据 |
| cp_stock_delivery | delivery | bagasse cohorts and internal transfers | 一级实测记录 | 批次; 来源期; 期初期末原料 WIP FG 湿干质量; 逐流负荷向量; 质量状态; 配对端点; 实际转移; 交付退回及原交付冲回; 新增返工 | 逐库存类别称量取样，核对交易时间顺序。历史向量与实物库存分开结转。不得因销售或复验追溯增产。 | kg | 每批移动及同步表计库存结算 | 同一完整声明活动期；保留来源期间 | 具名供货及接收门；阶段批次范围 | 每参考流 | 校准；批次追溯；原记录；不确定性；缺席证据 |
| cp_activity_release | release | atomic utilities and consumables | 一级实测记录 | 阶段; 批次; 供方; 实际制剂; 表计读数; 原单位; 电压; 燃料润滑油期初采购退回及期末; 工况; 维修新增; 不确定性 | 校准阶段表计并核采购库存活动。整份制剂只采购一次；分析成分和载水为组分子账。采集空转、试验、失败、启停和清扫负荷，不预先归一。 | kg; kWh; MJ; original volume | 每批移动及同步表计库存结算 | 同一完整声明活动期；保留来源期间 | 具名供货及接收门；阶段批次范围 | 每参考流 | 校准；批次追溯；原记录；不确定性；缺席证据 |
| cp_activity_delivery | delivery | atomic utilities and consumables | 一级实测记录 | 阶段; 批次; 供方; 实际制剂; 表计读数; 原单位; 电压; 燃料润滑油期初采购退回及期末; 工况; 维修新增; 不确定性 | 校准阶段表计并核采购库存活动。整份制剂只采购一次；分析成分和载水为组分子账。采集空转、试验、失败、启停和清扫负荷，不预先归一。 | kg; kWh; MJ; original volume | 每批移动及同步表计库存结算 | 同一完整声明活动期；保留来源期间 | 具名供货及接收门；阶段批次范围 | 每参考流 | 校准；批次追溯；原记录；不确定性；缺席证据 |
| cp_water_release | release | supplied water and effluent | 一级实测记录 | 阶段; 水流; 原体积或质量; 对应物质实测密度和温度; 蔗渣含水; 液态吸附水; 湿度; 蒸发; 渗滤液; 降水; 废水固体; 样品; 水生成消耗证据 | 计量取样真实外供排水、降水及相关库存水。真实进入的降水须新增具体环境输入行；不假定喷淋或默认废水。蒸发和降解保留独立不确定性。 | kg; original volume | 每批移动及同步表计库存结算 | 同一完整声明活动期；保留来源期间 | 具名供货及接收门；阶段批次范围 | 每参考流 | 校准；批次追溯；原记录；不确定性；缺席证据 |
| cp_water_delivery | delivery | supplied water and effluent | 一级实测记录 | 阶段; 水流; 原体积或质量; 对应物质实测密度和温度; 蔗渣含水; 液态吸附水; 湿度; 蒸发; 渗滤液; 降水; 废水固体; 样品; 水生成消耗证据 | 计量取样真实外供排水、降水及相关库存水。真实进入的降水须新增具体环境输入行；不假定喷淋或默认废水。蒸发和降解保留独立不确定性。 | kg; original volume | 每批移动及同步表计库存结算 | 同一完整声明活动期；保留来源期间 | 具名供货及接收门；阶段批次范围 | 每参考流 | 校准；批次追溯；原记录；不确定性；缺席证据 |
| cp_residue_release | release | individual collected wastes | 一级实测记录 | 阶段; 批次; 湿质量; 干分; 成分; 捕集点; 质量状态; 接收方; 处理或有据有用用途; 退回回用链接 | 逐真实排出料箱称重，保留转移处理凭证。逐项区分异物、蔗渣废物、捕集粉尘及油。直接环境出口须独列物种介质。 | kg | 每批移动及同步表计库存结算 | 同一完整声明活动期；保留来源期间 | 具名供货及接收门；阶段批次范围 | 每参考流 | 校准；批次追溯；原记录；不确定性；缺席证据 |
| cp_residue_delivery | delivery | individual collected wastes | 一级实测记录 | 阶段; 批次; 湿质量; 干分; 成分; 捕集点; 质量状态; 接收方; 处理或有据有用用途; 退回回用链接 | 逐真实排出料箱称重，保留转移处理凭证。逐项区分异物、蔗渣废物、捕集粉尘及油。直接环境出口须独列物种介质。 | kg | 每批移动及同步表计库存结算 | 同一完整声明活动期；保留来源期间 | 具名供货及接收门；阶段批次范围 | 每参考流 | 校准；批次追溯；原记录；不确定性；缺席证据 |
| cp_air_release | release | individual gas and particle exchanges | 一级实测记录 | 阶段; 真实工况; 气体物种; 碳来源; 介质; 进出气量; 积分体积或速率; 取样时段; 温压; 干湿气基准; 浓度; 粒径段; 控制; 反应证据 | 匹配测试及源记录，包括事故和控制。用相容浓度乘积分体积，或积分真实速率。解析分子物种、碳来源及互斥粒径段；不由残余物名称推默认排放。 | kg; original gas units | 每批移动及同步表计库存结算 | 同一完整声明活动期；保留来源期间 | 具名供货及接收门；阶段批次范围 | 每参考流 | 校准；批次追溯；原记录；不确定性；缺席证据 |
| cp_air_delivery | delivery | individual gas and particle exchanges | 一级实测记录 | 阶段; 真实工况; 气体物种; 碳来源; 介质; 进出气量; 积分体积或速率; 取样时段; 温压; 干湿气基准; 浓度; 粒径段; 控制; 反应证据 | 匹配测试及源记录，包括事故和控制。用相容浓度乘积分体积，或积分真实速率。解析分子物种、碳来源及互斥粒径段；不由残余物名称推默认排放。 | kg; original gas units | 每批移动及同步表计库存结算 | 同一完整声明活动期；保留来源期间 | 具名供货及接收门；阶段批次范围 | 每参考流 | 校准；批次追溯；原记录；不确定性；缺席证据 |
| cp_pack | delivery | each separate transport article | 一级实测记录 | 逐物件身份和组成; 所有权; 单件质量; 期初空件附着 WIP FG 及可复用库存; 新购; 外部退回接收; 期末分类; 随总发运外出; 对外返还; 废物; 内部复用 | 按配置范围计数并称真实物件，记录不确定性。各类均核对期初 + 采购 + 外部退回接收 = 期末 + 随总发运外出 + 对外返还 + 废物；配对抵消内部复用。物件质量不进入蔗渣 Q，也不自动成为共产品。 | kg; item | 每批移动及同步表计库存结算 | 同一完整声明活动期；保留来源期间 | 具名供货及接收门；阶段批次范围 | 每参考流 | 校准；批次追溯；原记录；不确定性；缺席证据 |
| cp_dispatch | delivery | bagasse dispatch and freight | 一级实测记录 | 批次; 原 Q; 毛皮重及真实湿发运量; 接收质量含水; 距离; 空返; 供方边界; 载荷容积; 退货拒收; 途中损失; 历史负荷 | 匹配校准出发及到达称重、运单、收货和真实质量去向。区分实物水分变化及商业计价重量。保留运输证据，拆分供方服务与直接控制作业。 | kg; km; t*km | 每批移动及同步表计库存结算 | 同一完整声明活动期；保留来源期间 | 具名供货及接收门；阶段批次范围 | 每参考流 | 校准；批次追溯；原记录；不确定性；缺席证据 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_exchange | all inventory rows | 实物交换 x = V / Q 与环境结果 e = A / Q 为本唯一规则的两个独立输出。V 是原单位转换后该批次总实物分子，绝不乘负荷份额。A 是核实上游库存责任及合理分配后独立归属的环境负荷向量。各账对原始分子只除一次，不把任一输出再作分子。历史交付服务使用原批次 Q，不使用本期产量。 | V; A; Q; cp_release; cp_stock_release; cp_stock_delivery | x 实物; e 环境 | ilcd-allocation-2010 |
| release_quantity | bagasse_release | Q = 声明期内唯一首次合格放行批次的净湿质量之和；合格期末 FG 只计一次，排除期初已放行 FG、复放行及内部移动。Q=0 仍保留全部真实负荷和库存责任，不出单位结果。 | cp_release; cp_stock_release; cp_stock_delivery | Q | tnpl-bagasse-2025 |
| gross_physical | release; delivery | 逐阶段及合并门保留总实物 V：期初库存 + 真实外部输入 = 期末库存 + 真实外部输出 + 明列残差。整份湿物料为主账，相关干物质、水、C/H/N/S/灰分用非叠加桥接。内部 Q 仅在两端匹配时抵消；不将期末 FG 再作为产量相加。分配份额不缩放 V。 | cp_supplier; cp_stock_release; cp_stock_delivery; cp_water_release; cp_water_delivery; cp_air_release; cp_air_delivery; cp_residue_release; cp_residue_delivery | 未分配实物衡算 |  |
| water_species | release; delivery | 对分子 H2O 保留期初 + 输入 + 有证据生成 = 期末 + 输出 + 有证据消耗 + 残差。区分游离吸附水、进气湿度、蒸发及反应水。独立核总质量和相关元素；一个残差不能识别两个未知量。未核路径或程度仍为未知。 | cp_water_release; cp_water_delivery; cp_air_release; cp_air_delivery; cp_stock_release; cp_stock_delivery | 分子水与元素总账 |  |
| burden_cohorts | release; delivery | A 逐流仅承接一次上游和期初库存向量，加真正新增 F，仅减经核同侧重复 X，并追踪期末带出和真实共产品责任。X 不删除新增维修水料。放行后仓储装运、退回及返工另建批次服务账，仅由 normalize_exchange 对原放行 Q 归一；不创造新产量，也不再除时间。 | cp_stock_release; cp_stock_delivery; cp_activity_release; cp_activity_delivery; cp_dispatch; cp_pack; cp_release | 已归属原始 A 及库存结转向量 | ilcd-allocation-2010 |
| package_balance | delivery | 逐附属物按所有权、库存状态和移动目的执行 cp_pack 完整等式。附着物随包括拒收退回货载的总实物发运；物件生产负荷仅按真实新购及批次服务归属承接一次。 | cp_pack; cp_dispatch; cp_stock_release; cp_stock_delivery | 独立实物附属物及负荷总账 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | native 流身份与背景供方适配分开。采用 UUID 前须取得真实查询成员、完整 public state100 对象，核全部名称备注、CAS、路线、形态状态、地域介质类型及属性，并核精确属性版本 → 单位组版本 → 参考单位链。近名或 MJ 标签不足。 | 供方及状态记录和独立身份复核 |
| dq_coverage | release; delivery | 采用有日期及全部工况的完整声明榨季活动；优先完整代表性榨季或年度。披露缩短覆盖、数量缺失及供方缺口。普通未来现场测量不能虚构身份，核心身份未知也不因有限检查而获准。 | cp_release; cp_activity_release; cp_activity_delivery; cp_stock_release; cp_stock_delivery |
| dq_trace | all inventory rows | 保留原单位、校准、取样代表性、检出限、不确定性及原始库存负荷向量。零须有不存在证据；缺值仍为未知。所有真实未列流须原子增行。 | cp_supplier; cp_water_release; cp_water_delivery; cp_air_release; cp_air_delivery; cp_residue_release; cp_residue_delivery |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_reference | bagasse_release | 双语须为同一湿态整份蔗渣及首次放行 Q，参考行链接唯一、限定项完整且工业接收用途明确。未解决参考身份及精确单位链阻止完整定量使用。 | tnpl-bagasse-2025; mpm-bagasse-1999 |
| validate_physical | release; delivery | 要求完整未分配阶段及合并实物总账、独立水和元素证据及残差解释；保留失败事故、Q0、WIP/FG、库存及历史向量。不以环境负荷份额配平质量。 |  |
| validate_normalization | all inventory rows | 采集协议只含未归一原始总量。数量卡仅引用一次 normalize_exchange；其中 V/Q 与 A/Q 分属独立实物和环境账。聚合及后续计算不能对已归一结果再除 Q 或 H。 |  |
| validate_background | bagasse_in; freight | 定量关联前核实供方状态责任及路线；不二次分配糖厂，不重复同一运输段。不默认外销燃料、避免产品或信用。 | ilcd-allocation-2010; epa-sugar-1997 |
| validate_conditional | all inventory rows | 任何条件卡均不预设正数量，也不允许删除实际发生流。真实缺席须有证据，测量不明仍为缺口。物种、粒径、包装、退回货载及处理均保持原子和可追溯。 | tnpl-bagasse-2025 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 经数据集适用性复核后，作为脱髓或转化前声明工业木质纤维接收门的投入 |
| allowed_use | 仅限声明未处理未脱髓整份湿工业原料状态及实测湿量 |
| excluded_use | 燃料功能; 净供热 MJ; 假设干质量; 浆或板 m3; 零负荷废物; 全部糖业废物; 自动替代信用 |
| required_metadata | 全部参考限定项; 原 Q 及批次服务链接; 供方负荷向量; 完整实物库存及物件总账; 路线真实交换及供方适配 |
| required_quality_disclosure | 来源范围期间; 科学审查状态; 真实身份及测量缺口; 未知排放及库存负荷; 分配敏感性; 覆盖限制 |
| update_trigger | 提汁预处理状态、接收规格、供应状态、分配、公用工程、存储、包装、运输或门发生变化 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| unsd-cpc3-bagasse-2025 | official_guidance | UNSD CPC 3.0 完整说明，2025 年 6 月 30 日，第 199 页，39141 与 39149；https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/39141 | 仅支持甘蔗提汁纤维身份与近邻糖业废物排除；不规定含水、牌号、分配或工业路线。 |
| tnpl-bagasse-2025 | official_guidance | Tamil Nadu Newsprint and Papers Limited, Tender 252613004185, 12 September 2025, pp.1,4,6–8,10–15; https://tnpl.com/wp-content/uploads/2025/09/252613004185.pdf | 未脱髓散装蔗渣工业采购、拒收、称重及运输附属物控制的一级条款。招标不证明已执行交付；不提供默认成分损失或装载率。 |
| mpm-bagasse-1999 | literature | Hadli M.S., Bagasse Utilisation For Pulp Making in MPM, IPPTA Vol.11 No.2, June 1999, printed pp.5–8 and final flowsheet; https://ippta.co/wp-content/uploads/2021/01/IPPTA-112-5-9-Bagasse-Utilisation-for.pdf | 卡纳塔克工厂作者工业案例：新鲜整份湿渣在湿法脱髓前转移，区分蔗髓、脱髓浆料及制浆状态。表1和流程图不构成可移用成分产率能耗默认值。 |
| epa-sugar-1997 | official_guidance | US EPA, AP-42 Section 9.10.1.1 Sugarcane Processing, June 1997, §§9.10.1.1.1–2 and Figure 9.10.1.1-1, pp.1–3; https://www.epa.gov/sites/default/files/2020-10/documents/c9s10-1a.pdf | 定性糖厂提汁、共同输出拓扑及可能原料用途。不采用蔗渣专属分配、当前工厂清单或锅炉排放因子。 |
| ilcd-allocation-2010 | official_guidance | European Commission JRC, ILCD Handbook General Guide for LCA — Detailed Guidance, first edition March 2010, §7.9.2–3, printed pp.255–268 (PDF pp.275–288); https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 需分配归因场景中的细分、逐交换决定性物理因果及剩余共同门市场价值。不作为糖厂工程证据、固定份额或完整 ILCD 符合性主张。 |
