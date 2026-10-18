---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.ethyl-alcohol-and-other-spirits-denatured-of-any-strength
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 外购乙醇经异丙醇、丁酮及苯甲酸地那铵变性：散装混合物

## 1. 范围与适用性

本 PCR 覆盖电驱动配制：外购未变性精馏乙醇，加入实际异丙醇（IPA）、甲基乙基酮（MEK；2-丁酮）、现场溶解的固体苯甲酸地那铵及实际留存水，以验收散装非饮用液体在厂界交付。它是制剂方法，不是完整上游乙醇制造方法。浓度是实测 SKU/批次事实，本稿不规定默认浓度。生产者产品 103771 证明一个分析级组分组合存在；其含量、杂质限、瓶装交付和密度不能证明本散装场址路线或等级。HMRC 将酒精接收、与变性剂混合及加水作为特定法域生产例证。实际场址必须确认外购原料路线、固体溶解、等级及留存水；不规定任何例证配方。[merck-denatured-103771; hmrc-denaturing-2025; ttb-denatured]

排除其他变性剂、外购专有变性预混液、作为最终输出的饮料/未变性酒精、燃料规格乙醇、零售包装、现场发酵/合成/蒸馏、热氧化或燃烧、现场活性炭再生、化学清洗及废水直接排放。存在这些活动的场址，须明确扩充原子清单并取得适用原始方法后方可声明完整覆盖。每种实际额外配制化学品、实验室试剂/气体、维护材料及包装/容器材料须各建具体交换卡，必要时明确 UUID 缺口；不得为适应代表清单而删去。引用方法不意味着场址实际采用其中的实验室试剂。现场检测须记录实际耗材及废物；委外检测须声明服务边界并链接兼容负荷。不同法定名称或用途仅在实际组成、来源及交付状态满足此边界且有证据时适用；本 PCR 不授予法规/用途许可。[eu-denaturing-2017; ttb-denatured]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.ethyl-alcohol-and-other-spirits-denatured-of-any-strength |
| classification_refs | CPC 3.0:34131; narrower |
| covered_products | 实际含异丙醇、丁酮、苯甲酸地那铵及水的散装非饮用乙醇混合物 |
| excluded_products | 其他配方身份；燃料/零售/饮料产品；上游制造 |
| representative_product | 该实际组分组合的验收 SKU，不是依法定名称推定的通用配方 |
| production_route | 外购乙醇与变性剂；现场溶解/混合；储存/验收；散装装卸 |
| market_state | 厂界交付的完整液体混合物，排除罐车质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供给已声明配方的非饮用变性乙醇 |
| How much | 1 kg |
| How well | 验收实际组成、含量基准、水分及预定工业质量；不声明通用溶剂效能等价 |
| How long or cycle | 一个生产及厂界交付周期；不规定使用寿命 |
| reference_flow_link | reference |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 任何浓度的变性的乙醇和其他烈性酒 `0ca960f7-3506-4b71-8503-e6f37e03d77a` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | SKU/批次；实际乙醇/异丙醇/丁酮/苯甲酸地那铵/水组成及质量或体积基准；检验方法；密度和温度；变性配方标识/法域/版本及实际配方证据；乙醇发酵/合成来源和化石/生物碳份额；杂质/等级；散装交付；供方/背景边界；公用工程和排放控制配置；场址/报告期 |

参考对象是整份供货液体，绝不是 1 kg 纯乙醇或 1 kg 干基/活性物。此广义产品身份在本稿被限定为上述组分组合和路线，不提供浓度、碳源或合法性证据。具体数据集必须采集全部必需限定信息。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用经校准净称重或可追溯质量流量计测量验收混合液，排除罐车/皮重及拒收液；在合并单元中保留各阶段计量。 |
| solution_basis | 液体原料及参考流 | 质量及组成 | kg | 只有使用该实际完整溶液在声明温度下的实测密度时才能换算：m = rho(T) × V(T)，单位保持一致。不得用纯乙醇密度代替混合液或假定液体体积可加；质量与体积含量基准分开保留。 |
| composition_basis | 配方及检验 | 质量分数 | kg/kg | 组分质量 = 溶液质量 × 实测质量分数；核对完整水/溶质闭合。酒精体积分数/酒精度及 GC 面积百分数在无适用变性基质的有效换算/校准时不是质量分数。历史绝对乙醇配方分母不是最终混合液体积。 |
| energy_basis | 电力 | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留数据库原始属性及供方边界；实测电量 kWh × 3.6 = MJ。此精确单位换算不意味着发电效率或燃料热值。 |
| gas_basis | 氮气 | 质量 | kg | 使用交付质量或以温度、绝对压力、湿干组成及压缩因子独立实测换算；供方体积基准未知时链接不完整。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_formulation | blend | 将接收、溶解、混合、质控、罐储、装卸、水清洗及实际非燃烧蒸气控制合为一个前景单元。仍分别采集各阶段，即使最终产品只输出一次。 | hmrc-denaturing-2025; jrc-efs-2006 |
| boundary_upstream | ethanol_feed | 外购乙醇及所有外购输入的兼容上游负荷只计一次。要求特定来源发酵/合成供方证据；本单元不制造乙醇，不重复发酵收率、蒸馏能耗或发酵二氧化碳。 | ttb-denatured; merck-denatured-103771 |
| boundary_emissions | blend | 记录实际捕集后的离厂物种和实测无组织排放。捕集/返回溶剂保留在实物账，不是基本排放。外送废液和大气乙醇是不同交换，不能仅因有控制设备就置零。 | jrc-efs-2006 |
| boundary_exclusion | blend | 明确配置外活动。排除下游配制、使用、配送和罐车制造；若声称从摇篮到厂界，须另有明确且兼容的进厂物流及外购输入生产背景链接。 | ttb-denatured; jrc-efs-2006 |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购未变性精馏乙醇，供方特定浓度/来源 |
| starting_condition_role | foreground_start |
| product_classification_scope | CPC34131 中异丙醇/丁酮/苯甲酸地那铵变性乙醇子集 |
| recursive_input_rule | 同混合物内部返回属于内部链接，两端质量/组成相等；外购已变性混合液不属于本起始配置，不能当作无负荷递归输入。 |
| upstream_dataset_requirement | 匹配实际组成、路线、碳源、国家/年份、参考量及交付边界；披露缺失供方链接。 |
| disclosure | 区分厂内制剂与含背景结果，列明遗漏及场址配置。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| blend | 变性、储存及散装装卸 | required | 仅限已定义的外购组分及配置 | 阶段独立计量的单一合并前景 | 1 kg |

实物路径：外购组分 → 溶解/混合 → 验收/储存 → 装卸 → 一个参考输出。每份供货溶剂或配制化学品对应一个完整产品交换。其活性化学物、载水及实际其他组分进入组成账，不重复添加第二份完整产品输入；另行外购载体/组分仍须各建卡。仅将厂界净吸收/释放记入清单，同时保留进出湿空气及物种毛测量用于核对。由进出湿度、冷凝水、库存及液体留存确定净 H2O，不把湿排气总质量当水；环境空气 N2/O2 穿流与外购惰化氮分开。实际适用时，为净水交换、其他排放物种及实测 NMVOC 残余各建具体基本交换卡，不假定正数量或 UUID。实测残余仅扣除同质量或碳基准、源集合、时间、状态及介质下已识别的重叠物种，并提供换算证据；不得盲扣所有物种或丢弃实际未识别排放。内部返回两端保留相等质量及组成，另行核对且不重复外购。实际不合格液、冲洗液和废吸附剂分别作为废物外送，不创建阶段重复参考输出。

### 过程：变性、储存及散装装卸（`blend`）

#### 输入

##### 产品流

###### 精馏乙醇 (`ethanol_feed`)

仅为外购未变性乙醇。记录整份供货溶液质量、水分、乙醇质量/体积分数、检验基准与温度、供应来源及发酵或合成路线。绑定流要求中国厂内生产混合、变性前未变性材料；其他供应地理边界须采用兼容身份。它不固定发酵或合成路线，也不证明碳源、浓度或供应方环境负荷；只链接一个兼容上游数据集，不再添加第二套前景发酵。

- 选定流: 精馏乙醇 `b3d45fa4-4eb4-4d8d-bffc-1ddf22cdc229`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 将同一报告期实测归属量除以验收混合物净质量，保留原始阶段记录。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `merck-denatured-103771`

###### 异丙醇 (`ipa`)

实际加入的异丙醇，CAS 67-63-0；记录纯度、溶液/载水和实际供货质量。采用的产品流要求中国厂内生产混合且未固定浓度。其他来源或交付边界须采用兼容身份；原生中文路线标签不证明专属制造技术。不是油墨清洗剂或光学装配消毒混合液。

- 选定流: 异丙醇 `a4a75541-e156-4e30-947c-ba067a682afd`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 将同一报告期实测归属量除以验收混合物净质量，保留原始阶段记录。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `eu-denaturing-2017`; `merck-denatured-103771`

###### 甲基乙基酮 (`mek`)

实际加入的 2-丁酮，CAS 78-93-3；供货材料单独计量并记录含量与载体。未采用经核验的兼容产品 UUID；二异丁基酮与异佛尔酮是不同物种。

- 选定流: 甲基乙基酮
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 将同一报告期实测归属量除以验收混合物净质量，保留原始阶段记录。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `eu-denaturing-2017`; `merck-denatured-103771`

###### 苯甲酸地那铵 (`denatonium`)

实际苯甲酸地那铵，CAS 3734-33-6，以固体供货并在现场溶解。记录盐身份、无水/水合物基准、水分/含量和经校准的微量投料记录；载体溶剂来自已计量的乙醇/水输入。外购专有预混液不属于本代表供货配置，需另行识别完整混合物输入。

- 选定流: 苯甲酸地那铵
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 将同一报告期实测归属量除以验收混合物净质量，保留原始阶段记录。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `eu-denaturing-2017`; `merck-denatured-103771`

###### 自来水 (`water_recipe`)

仅记录配方中另加且留存的自来水，实测数量和水质；不再加入外购乙醇或异丙醇/丁酮已包含的水。其他处理水等级需另行识别并保留其处理清单。

- 选定流: 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 将同一报告期实测归属量除以验收混合物净质量，保留原始阶段记录。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `hmrc-denaturing-2025`

###### 自来水 (`water_clean`)

本配置采用水清洗储罐/管线及实验室器皿；与配方水分开计量，保留清洗频次及最终废液去向。使用化学清洗剂时需扩充原子清单。

- 选定流: 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 将同一报告期实测归属量除以验收混合物净质量，保留原始阶段记录。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_cleaning`
- 来源: `jrc-efs-2006`

###### 交流电 (`electricity`)

仅在场址电表、地理边界和供方匹配时采用中国 1–35 kV 用户侧电网平均电力。包括泵、搅拌、装卸、实验室、清洗及实际控制设备。记录国家/年份和损失边界；UUID 不是通用供电组合。其他电压/技术需选用兼容流和供方。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 将同一报告期实测归属量除以验收混合物净质量，保留原始阶段记录。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`
- 来源: `jrc-efs-2006`

###### 氮气 (`nitrogen`)

条件项：外购空分气态氮（N2；CAS 7727-37-9）用于氮封/装卸。记录实际交付或计量质量、纯度、压力、供方路线、供方边界及补充/排气。通过经校准交付或计量记录独立采集实物千克量。若按体积计量，采集气体温度、绝对压力、湿干基准、组成及压缩因子，并采用已验证的状态换算；不得从未经核实的原生系数推定密度。链接兼容产品流/供方前，核实相态、路线、等级、交付边界及质量参考量支持。所选气态 N2 产品描述为厂内惰化补充/顶空气体。“大部分排放”和“少量补充”的定性注释不是剂量、份额或归一化系数：采用实测外部毛输入、实际库存/留存及单独观测的排气；内部返回不是新的外购。此身份不证明空分制造数据集、固定纯度/压力或供方负荷。链接前必须匹配实际供货材料及供方参考基准；否则保留具体交换并明确链接缺口。不得从名称或用途注释推定气体密度、数值配方或背景负荷。

- 选定流: 氮气 `92233c86-8e75-441c-94de-03cc91bc7c10`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 将同一报告期实测归属量除以验收混合物净质量，保留原始阶段记录。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_utility`
- 来源: `jrc-efs-2006`

###### 活性炭 (`carbon`)

条件项：蒸气吸附实际外购活性炭装填。记录牌号、原料来源、水分、更换和吸附负载。广义记录支持空气/水过滤，但不固定原料、容量或去除率；供方须匹配实际牌号。保留原生“吸收反应”路线标签与描述吸附的注释，不将其推断为某种活性炭制造路线。要求供方确认吸附剂及实际设备对乙醇/异丙醇/丁酮蒸气、水分及运行条件的兼容性。BREF 提示放热不兼容，包括深度再生炭上的酮；其中再生双床例证不证明本外部更换、不现场再生床的适用性或效率。本稿不覆盖现场再生。

- 选定流: 活性炭 `5cad53b5-252a-4e2f-8197-8be465707405`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 将同一报告期实测归属量除以验收混合物净质量，保留原始阶段记录。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_utility`
- 来源: `jrc-efs-2006`

#### 输出

##### 产品流

###### 任何浓度的变性的乙醇和其他烈性酒 (`reference`)

验收散装混合物：乙醇、实际异丙醇、丁酮、苯甲酸地那铵及留存水。测量净供货液体质量，排除罐车/运输设备。它是唯一最终参考产品输出；将储存/装卸合理合并以避免重复输出。广义流包含所声明子集，但不证明法定配方或纯度。

- 选定流: 任何浓度的变性的乙醇和其他烈性酒 `0ca960f7-3506-4b71-8503-e6f37e03d77a`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 1 千克
- 数值来源模式: `fixed_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `method_formula`
- 采集协议: `cp_product`
- 来源: `ttb-denatured`; `merck-denatured-103771`

##### 废物流

###### 废液 (`liquid_waste`)

外送处理的不合格变性混合液或收集的溶剂泄漏液，不是纯乙醇基本排放或合格产品。与清洗废水分批保留。广义工业液体废物身份仅在实际组成和接收验收支持时采用，不证明处理供方；记录完整废液质量、组分质量及去向。

- 选定流: 废液 `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 将同一报告期实测归属量除以验收混合物净质量，保留原始阶段记录。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: `jrc-efs-2006`

###### 废液 (`wash_waste`)

单独收集、含实际乙醇/变性剂的水清洗废液，声明接收方及化学组成后外送处理。测量完整混合物质量，记录组分浓度、COD 和含水率以核对处理兼容性。此广义身份不支持硅锭或锰渣洗涤废水供方。本稿不覆盖直接排入水体。

- 选定流: 废液 `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 将同一报告期实测归属量除以验收混合物净质量，保留原始阶段记录。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: `jrc-efs-2006`

###### 废活性炭 (`spent_carbon`)

条件项：外送吸附剂及其实际捕集溶剂和水分。分别记录湿质量、干炭及吸附物，用于实物平衡、废物分类和接收再生/处置路线。吸附物不能同时算作大气排放；不得套用脱色废物或自动抵扣。

- 选定流: 废活性炭 `aff33890-3f08-40f9-9310-a7f77213de05`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 将同一报告期实测归属量除以验收混合物净质量，保留原始阶段记录。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: `jrc-efs-2006`

##### 基本流

###### 乙醇 (`ethanol_air`)

实际离厂进入室外空气未特指子介质的乙醇，CAS 64-17-5。按物种计量储存、输送、混合、装卸及通风控制后的排放；此物种流不区分碳源，须另记化石/生物碳来源。不得推定上游发酵二氧化碳或燃烧排放。

- 选定流: 乙醇 `08a91e70-3ddc-11dd-9349-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 将同一报告期实测归属量除以验收混合物净质量，保留原始阶段记录。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_air`
- 来源: `jrc-efs-2006`

###### 异丙醇 (`ipa_air`)

实际进入室外空气未特指介质的异丙醇，CAS 67-63-0；与乙醇和其他丙醇分开。采用实测物种数据并覆盖有组织/无组织源；流身份不意味着默认排放因子或必有正排放。

- 选定流: 异丙醇 `fe0acd60-3ddc-11dd-a843-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 将同一报告期实测归属量除以验收混合物净质量，保留原始阶段记录。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_air`
- 来源: `jrc-efs-2006`

###### 甲基乙基酮 (`mek_air`)

实际进入室外空气未特指介质的丁酮，CAS 78-93-3；与供货混合物、废溶剂、其他酮和 VOC 总量分开。不得在已定量物种之上重复加入 VOC 总量。

- 选定流: 甲基乙基酮 `fe0acd60-3ddc-11dd-afc7-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 将同一报告期实测归属量除以验收混合物净质量，保留原始阶段记录。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_air`
- 来源: `jrc-efs-2006`

###### 二氮 (`nitrogen_air`)

条件项：惰化实际排入室外空气未特指介质的氮气；与交付氮量及留存顶空气核对。这是 N2，不是 NOx、N2O 或空气资源输入。

- 选定流: 二氮 `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 将同一报告期实测归属量除以验收混合物净质量，保留原始阶段记录。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_air`
- 来源: `jrc-efs-2006`

###### 地那铵苯甲酸盐 (`denatonium_air`)

条件项：固体投料时实际离厂进入室外空气未特指介质的 CAS 3734-33-6 气溶胶/粉尘。定量捕集后的化学物种质量，而非全部颗粒质量；记录粒径/源覆盖，防止化学物种与总颗粒重复记账。捕集后内部返回的固体不是外排；冲洗残留进入 wash_waste。

- 选定流: 地那铵苯甲酸盐 `455bab38-f4cb-47e2-b11c-de51e4329016`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 将同一报告期实测归属量除以验收混合物净质量，保留原始阶段记录。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_air`
- 来源: `jrc-efs-2006`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | blend | 先直接归属批次组分及可分离阶段公用工程。不可避免共享服务采用实测因果物理驱动量，保留驱动量、总量、排除及敏感性。经济分配需记录物理因果不可用的理由及一致价格/报告期，不规定通用分配比例。 | ghg-product-2011 |
| allocation_physical | blend | 将未分配总实物质量、C/H/O/N 及每种实际元素、水及过程链接账与分配后环境负荷账分开。分别记录期初/期末库存、设备中产品留存、吸附物/水分、内部配对批次、返回、维护移除/更换及完整包装/容器实物观察。设备/容器服务摊销负荷及分配后环境清单不能代替这些毛实物观察，也不得用于强行闭合质量。不得将实物参考/联产品输出机械乘以负荷份额。内部回收不是联产品抵扣，弃置液仍为废物。外售回收溶剂在扩展本 PCR 前须另有身份、质量、买方/功能及分配边界证据。 | ghg-product-2011 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | blend | 验收产品 | foreground_record | SKU；批次；毛/皮/净质量；验收；实际含量基准；乙醇/异丙醇/丁酮/苯甲酸地那铵/水；密度；温度；方法；不确定度；库存 | 经校准净称重或质量流量计，批次放行组成及可追溯实验室校准。核对实际混合物在实测温度下的密度；乙醇采用经基质确认的 CLEN143 GC-FID，苯甲酸地那铵采用 CLEN280 HPLC-UV，水独立采用酮兼容 Karl Fischer，并为本基质验证试剂空白/漂移、标准及回收率。TM207 仅在已证明基质/范围支持异丙醇/丁酮，不支持地那铵、水或乙醇质量分数。保留各方法校准、稀释、重复/QC 验收、回收率、干扰及检出/定量限。CLEN280 给出每升溶液毫克量；只有实际同一溶液密度及温度支持时才能换为 kg/kg。CLEN143 的质量/体积换算要求实测样品及校准标准在 20 °C 的密度；二元酒精表不是完整混合物检验。酮副反应使未经确认的常规甲醇体系 KF 结果无效。检验标准、方法性能范围或参考温度均不确定实际批次纯度或配方。 | kg | 每批/事件；阶段计量覆盖报告期 | 声明完整报告期、期初/期末库存及异常事件 | 同场址、SKU 及配置，实际配方生产期分开 | 每 1 kg 参考流 | 校准、代表采样、源覆盖、不确定度及核对记录 |
| cp_material | blend | 每项配方输入 | foreground_record | 接收及投料；供方/SKU/CAS；溶液/活性物/载体基准；实际纯度；密度/温度；库存；乙醇路线；包括 C/H/O/N 及实际其他元素的元素组成；每种含碳组分的碳含量及化石/生物来源 | 核对校准投料称重、发票、批次 CoA/SDS 及库存变化；固体微量投料采用验证过的秤，现场载体在已计量输入内记账；取得供方路线/来源记录，不从通用乙醇名称推定生物来源。 | kg | 每批/事件；阶段计量覆盖报告期 | 声明完整报告期、期初/期末库存及异常事件 | 同场址、SKU 及配置，实际配方生产期分开 | 每 1 kg 参考流 | 校准、代表采样、源覆盖、不确定度及核对记录 |
| cp_cleaning | blend | 清洗水 | foreground_record | 水表；清洗事件；水质；冲洗体积/质量；去向；覆盖 | 经校准清洗水计量与配方加水分开；核对产生的废液及储罐存量。 | kg | 每批/事件；阶段计量覆盖报告期 | 声明完整报告期、期初/期末库存及异常事件 | 同场址、SKU 及配置，实际配方生产期分开 | 每 1 kg 参考流 | 校准、代表采样、源覆盖、不确定度及核对记录 |
| cp_energy | blend | 电力 | foreground_record | 阶段电表 kWh；电压；供方/国家/年份；损失边界；报告期；共享负荷 | 读取经校准阶段电表，包括质控与控制设备；核对场址总量及归属驱动量，保留原始 kWh 和精确 MJ 换算。 | MJ | 每批/事件；阶段计量覆盖报告期 | 声明完整报告期、期初/期末库存及异常事件 | 同场址、SKU 及配置，实际配方生产期分开 | 每 1 kg 参考流 | 校准、代表采样、源覆盖、不确定度及核对记录 |
| cp_utility | blend | 氮气及活性炭分别采集 | foreground_record | 公用材料身份；各交付/计量；氮状态/纯度/压力；炭牌号/来源/水分；装填/更换；供方基准 | 每种原子公用材料建立记录，验证氮气换算及活性炭牌号，不借用压力、吸附容量或效率。 | kg | 每批/事件；阶段计量覆盖报告期 | 声明完整报告期、期初/期末库存及异常事件 | 同场址、SKU 及配置，实际配方生产期分开 | 每 1 kg 参考流 | 校准、代表采样、源覆盖、不确定度及核对记录 |
| cp_waste | blend | 每项外送废液或废炭 | foreground_record | 独立批次；完整湿质量；水；乙醇/异丙醇/丁酮/苯甲酸地那铵；COD；干炭/吸附物；废物状态；接收方；处理及接收凭证 | 每批外送废物称重并测实际化学组成，保留去向及供方接收记录；不合格溶剂、水冲洗液及废吸附剂不得合并。 | kg | 每批/事件；阶段计量覆盖报告期 | 声明完整报告期、期初/期末库存及异常事件 | 同场址、SKU 及配置，实际配方生产期分开 | 每 1 kg 参考流 | 校准、代表采样、源覆盖、不确定度及核对记录 |
| cp_air | blend | 每项排放物种 | foreground_record | 源/排口；物种/CAS；子介质；浓度和采样方法；排气流量及气体状态基准；运行时间；捕集/返回；无组织；检出限；碳源；粉体粒径；进出湿度及湿干气量；净吸收/释放；NMVOC 残余基准/重叠 | 采用有效监测或现场校准储运质量平衡模型定量实际离厂物种，包括无组织及每条控制路径；按运行时间积分基准兼容的物种浓度与气量，并以测量验证模型。TM207 是液体变性剂检验，不是排气检测。记录未检出限和覆盖，不能假定为零。 | kg | 每批/事件；阶段计量覆盖报告期 | 声明完整报告期、期初/期末库存及异常事件 | 同场址、SKU 及配置，实际配方生产期分开 | 每 1 kg 参考流 | 校准、代表采样、源覆盖、不确定度及核对记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalization | all inventory rows | a_j = A_j / P；A_j 为报告期归属的实测交换 j；P 为 cp_product 中完整供货混合物验收净千克数。保留各分子原始单位，输出每 1 kg 参考流交换。 | A_j; P; cp_product | a_j |  |
| solution_mass | all inventory rows | m = rho(T) × V(T)，统一该实际同一溶液体积及密度单位后计算；可直接称量时使用校准质量。 | cp_product; cp_material; cp_waste | m | merck-denatured-103771 |
| component_balance | all inventory rows | 每种实物组分 k：期初库存_k + 外部输入_k = 验收输出_k + 外送废物_k + 离厂排放_k + 期末库存_k + 已记录残差_k。按实测质量分数计算溶液贡献，保留有符号残差与不确定度，抵消相等内部转移。对总实物质量、每项组分及 C/H/O/N 与每种实际其他元素应用此账，包括溶液或水合水、杂质、气体吸收/释放、吸附剂留存、完整容器及维护观察。每种含碳组分及排放物种分别保留化石/生物碳。采用实际盐/水合物分子式及含量；不得将地那铵阳离子等同完整苯甲酸盐或虚构纯度。不虚构收率、元素消失或损耗闭合。 | cp_product; cp_material; cp_cleaning; cp_utility; cp_waste; cp_air | 未分配实物账 |  |
| electricity_conversion | electricity | 电能 MJ = 实测电能 kWh × 3.6；保留供方数量边界。 | cp_energy | MJ |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_composition | reference | 要求实际完整混合物配方及检验、水/杂质、密度/温度、实测净验收量和预定等级；法定名称及仅测乙醇的检验不能定义混合物。采用独立确认的乙醇、挥发变性剂、地那铵及酮兼容水检测方法；由实际规格声明分析或工业等级。 | cp_product; ttb-tm207-2018; clen-ethanol-2023; clen-denatonium-2024; mettler-kf-2012; merck-denatured-103771 |
| quality_provider | all inventory rows | 流身份与数据集数量/参考兼容性分别验证；未决非参考 UUID 或供方缺口须明确，阻止相应范围的完整含背景声明。 | cp_material; cp_utility; cp_waste |
| quality_period | all inventory rows | 双语及各行使用相同验收产品分母和报告期，保留库存、拒收批次、异常泄漏、归属及不确定度；不得用历史/单厂比值作默认值。 | cp_product; cp_material; cp_energy; cp_waste; cp_air |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | reference | 拒绝以未变性或燃料乙醇作为最终混合物，要求实际受支持组分组合、路线及全部参考限定信息；恰好一个最终产品行等于 1 kg 参考流。 | ttb-denatured; merck-denatured-103771 |
| validate_balance | blend | 分配负荷前核对完整实物质量、水、C/H/O/N 及全部实际元素账及相等内部链接，披露残差、不确定度和缺失供方来源。不能仅因温室气体统计口径单列生物二氧化碳就将其从链接的上游 LCI 删除。本非燃烧制剂单元不虚构二氧化碳来源。 |  |
| validate_emissions | blend | 核对实际介质/子介质、CAS、物种质量和源覆盖；废混合物与基本物种分开，实测排放与捕集/内部物料分开，不重复 VOC 总量，同时保留实测且不重叠、已核验共同基准的 NMVOC 残余。净 H2O 与环境空气穿流须有分别进出观察；湿排气不是单一化学物种。基本交换求和时粒径区间/化学份额不得重叠。 | jrc-efs-2006 |
| validate_completeness | all inventory rows | 未决身份、供方基准、适用但未测源或额外场址活动须报告范围不完整。身份检索不等于方法审核、化学/法律适用许可或完整数据集验证。 | ttb-denatured; jrc-efs-2006 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 场址/SKU 特定前景制剂数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 仅适用于已声明供货混合物、组成和散装边界；含背景使用需兼容上游/运输/处理链接。 |
| excluded_use | 纯乙醇等价量；任意法定变性配方；燃料/饮料用途；无支持的完整上游工厂；通用默认清单 |
| required_metadata | 全部参考限定信息；流/供方基准；完整实物账；阶段采集；分配；库存；场址/年份；来源限制 |
| required_quality_disclosure | UUID 缺口、供方/背景缺口、测量覆盖、残差/不确定度及配置排除；独立方法审核仍待完成 |
| update_trigger | 配方/组分、上游来源/碳源、水/检验基准、交付/公用工程/控制配置、法律规格或实测平衡变化 |

## 11. 数据源

| 来源标识 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| ttb-denatured | official_guidance | [TTB Denatured Alcohol](https://www.ttb.gov/regulated-commodities/industrial-alcohol/industrial-alcohol-denatured-alcohol) | SDA/CDA 非饮用区别，不推定配方或用途许可。 |
| eu-denaturing-2017 | official_guidance | [Commission Implementing Regulation (EU) 2017/1112, Annex](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32017R1112) | 历史原法案支持异丙醇/丁酮/地那铵身份及绝对乙醇分母区别，不是当前全球法定要求或数量默认值。 |
| merck-denatured-103771 | literature | [Merck/Supelco product 103771, Properties and General description](https://www.sigmaaldrich.com/US/en/product/mm/103771) | 已读取生产者原始产品页：具体组分组合、不同检验及密度/温度声明。仅为一个 SKU，不将浓度、杂质限、密度或包装形式移植为默认值。 |
| jrc-efs-2006 | official_guidance | [JRC Emissions from Storage BREF, July 2006](https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2022-03/efs_bref_0706_0.pdf), §§4.1.2.2.3, 4.1.3.15.2, 5.1.1.1 and 5.2.2.2; printed pp.119, 145–146, 259–260, 271 / PDF pp.147, 173–174, 287–288, 299 | 液体储运及监测/控制条件横向方法，显著性及测量频次按具体情况判定，保留大型设施条件。不提供乙醇配方、通用损耗或能耗因子。 |
| ttb-tm207-2018 | official_guidance | [TTB SSD:TM:207 Rev.1, issued 23 January 2018](https://www.ttb.gov/media/72467/download?inline=), pp.1–8, Scope, limitations, sample preparation, QC, calculations and reporting | 原始顶空 GC-MSD 挥发变性剂方法，包括异丙醇/丁酮；原件为不自动更新的参考副本。需实际基质/范围/限值验证；不是非挥发地那铵、水、乙醇质量分数或排气方法。 |
| ghg-product-2011 | standard | [GHG Protocol Product Life Cycle Accounting and Reporting Standard, 2011](https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf), Tables 9.1–9.2 printed p.63 / PDF p.65 | 拆分及因果物理分配层级，不提供固定分配份额；独立实物账是所声明前景采集要求。 |
| hmrc-denaturing-2025 | official_guidance | [HMRC Excise Notice 473, updated 18 November 2025](https://www.gov.uk/government/publications/excise-notice-473-production-distribution-and-use-of-denatured-alcohol/excise-notice-473-production-distribution-and-use-of-denatured-alcohol), §§3.1, 3.6, 5.3, 13–14 and 20.2 | 原始分开接收/混合、加水及库存记录例证。仅限英国及相应时间，不作为全球法规、规定剂量或场址批准声明。 |
| clen-ethanol-2023 | official_guidance | [CLEN ILIADe 143:2023, version 25 July 2023](https://taxation-customs.ec.europa.eu/system/files/2023-09/ILIADe143_Ethanol_v25July2023_CLENmethod.pdf), §§1–8 and Annex, PDF pp.1–7 | 原始 GC-FID 乙醇检验分离异丙醇/丁酮，保留校准、样品密度/20 °C 及质量/体积区别。原件试剂 CAS 条目与乙醇身份不一致；核实实际试剂，不照抄该条目。不提供批次纯度默认值。 |
| clen-denatonium-2024 | official_guidance | [CLEN ILIADe 280:2024, version 13 February 2024](https://taxation-customs.ec.europa.eu/system/files/2023-09/ILIADe280_DenatoniumB_v25July2023_CLENmethod.pdf), §§1–8 and Annex, PDF pp.1–6 | 变性酒精中苯甲酸地那铵的原始 HPLC-UV 检验，保留工作范围、干扰分离、校准、QC 及每升溶液毫克基准。法规绝对乙醇换算与完整混合物质量分开。 |
| mettler-kf-2012 | literature | [Mettler-Toledo KF Guide 1, August 2012](https://www.mt.com/dam/MT-NA/KarlFischerHelpPage/KF_Guide_1.pdf), §§1.3, 2.1.4–2.1.5 and 2.2.5, printed pp.9–10, 13, 18 / PDF pp.9–10, 13, 18 | 原始仪器方法指导：酮副反应及专用 KF 试剂。要求实际基质空白/回收率及技术确认，不提供变性酒精批次水分值或通用试剂适用保证。 |
