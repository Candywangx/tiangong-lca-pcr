---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.bulk-glacial-acetic-acid-rhodium-methanol-carbonylation
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 铑催化甲醇羰基化制散装冰乙酸


## 1. 范围与适用性

本PCR涵盖以化石工业甲醇和化石源净化CO连续进行铑催化羰基化，随后提纯、储存及装车，独立制造含量至少99.8 wt%的散装技术级冰乙酸（CH3COOH，CAS 64-19-7）。产品是一种化学物种，残余水及杂质须实测；不是通用有机酸混合物。本方法用于制造数据集，不是仅稀释或回收酸提纯的代理。[jrc-lvoc-2017; celanese-acetic-2021]

排除含量低于限值的水溶液商品、醋或发酵路线、乙醛或烃类氧化、铱或钴催化路线、脂肪酸及酸油、水杨酸及其盐和酯，以及作为参考产品的其他酸、盐、酯、酸酐、卤化物及过氧化物。实际副产品仍是身份独立的交换，不扩展参考类别。专利浓度或历史单个生产者的消耗不能用作通用配方、收率或排放因子。[celanese-acetic-2021; celanese-carbonylation-2020]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.bulk-glacial-acetic-acid-rhodium-methanol-carbonylation |
| classification_refs | CPC 3.0:34140; narrower |
| covered_products | 散装技术级冰乙酸>=99.8 wt%，所限定羰基化路线 |
| excluded_products | 稀释酸；脂肪酸或其他酸；水杨酸；盐；酯；酸酐；其他路线 |
| representative_product | 散装液态交付CH3COOH |
| production_route | 化石甲醇+净化CO；铑/碘化物催化；闪蒸与蒸馏；按实际安装纳入保护床 |
| market_state | 工厂装车口验收液体，排除运输容器质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 技术级酸原料 |
| How much | 1 kg |
| How well | 实际SKU通过>=99.8 wt%CH3COOH含量验收；声明水及各杂质 |
| How long or cycle | 一次厂门交付；无使用寿命功能 |
| reference_flow_link | finished_acid |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 乙酸（醋酸） (`2cf748a4-30e8-4efd-aec4-05beb20604dc`) |
| 参考流属性 | 质量 (`93a60a56-a3c8-11da-a746-0800200b9a66`) |
| 参考单位组 | `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | CAS；含量方法及质量分数；水；杂质；SKU；铑路线；化石原料来源；排除容器的净质量；交付物态及温度；场址及期间；实际上游供方；公用工程基准；实际废物或排口介质；共产品状态与分配 |

必需限定信息应写入数据集元数据或参考流备注；身份或数量与供方基准相容性缺失时，数据集链接不完整。功能数量为整份验收商品质量，含残余水及杂质，不是所含纯酸质量。>=99.8 wt%是本PCR声明的参考产品身份约定门槛，不是Celanese销售规格。历史Celanese全球、中国和欧洲规格采用凝固点含量约定，酸含量最低为99.85 wt%。记录实际供方规格、含量方法、质量分数解释及不确定性；仅凭凝固点结果不能独立证明全部杂质闭合，也不能作为当前供方保证。[celanese-acetic-2021]

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| net_reference | finished_acid | 质量 | kg | 采用cp_product称量验收商品净质量。商品总量、CH3COOH、水和杂质分别保留；不得按纯酸除算却标为每kg商品。 |
| utility_basis | electricity; gas; steam | 原件属性或明确未决的蒸汽质量 | MJ; m3; kg | 电力kWh × 3.6 = MJ。燃气体积须有T/P/组成/Z及供方基准。蒸汽须有质量和供回焓记录；仅MJ属性不证明净可用热量。cp_energy。 |
| speciation | acetic_fresh; acetate_fresh; no_air; no2_air | 物种质量 | kg | 分析酸当量、碳总量或以NO2计的NOx不等于直接物种质量。仅依据实际测得物种分配和明确分子基准转换；未决报告保持待定。cp_emissions。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收甲醇、净化CO及实际催化剂和促进剂供给 |
| starting_condition_role | 独立化学合成前景；由原料制造 |
| product_classification_scope | CPC 3.0:34140; narrower |
| recursive_input_rule | 外购乙酸初装料须链接自身上游制造数据集；内部回收酸、催化剂及轻组分是内部链接，不是递归新生产 |
| upstream_dataset_requirement | 每项物料、能源及外部处理均须核对供方地域、技术、纯度、物态、参考数量及时间基准；披露未决链接 |
| disclosure | 反应、分离、循环、储存装车、公用工程、治理、水及处理归属、库存变化、共产品及全部释放物种 |

将反应、闪蒸、轻重组分蒸馏、保护床提纯、储罐装车、所归属的公用工程发生及现场治理聚合为一个前景单元，避免中间酸成为第二参考输出。保留现场实物过程图及分阶段计量：原料→反应器→闪蒸→提纯→储罐→装车；闪蒸催化剂液及回收轻组分返回反应器；尾气→吸收→实际回收、氧化或火炬端点；水性排污→实际现场或外部处理。各内部链接两端的质量、组成及时间一致。[celanese-carbonylation-2020; jrc-lvoc-2017]

声明期间涵盖启停、清洗、排污、损失及实际现场处理。外购蒸汽的供方发生排放不计入本前景；现场燃料发生须纳入燃料、水及实测烟囱释放。外送废水以相容数据集纳入接收负荷，不再将原废水计作直接水排放。设备建设和资本品不计入常规运行交换总量并须披露；研究若纳入它们，应另列实测原子物料或服务行。散装交付使用周转容器。每项实际包装组件、容器、密封件、衬层、维护材料及外部返还，均须先采集完整实物数量、组成、进出流动与期初期末库存，再进行服务或负荷分配。容器皮重与酸净质量分别保留。清洗投入及废物逐项记录；周转次数和实测服务份额另列负荷账。降低服务份额不得替代完整实物量，也不得制造反复的新容器消耗。截断不得默删危险碘化物、金属及物种流。[jrc-cww-2016]

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| acid_manufacture | 羰基化、提纯、装车及实际现场服务 | required | 全部符合范围的产品制造；条件交换仅按实际存在纳入 | foreground_production | 1 kg |

### 过程：制造与厂门交付（`acid_manufacture`）

以下行是最低发现及记录框架，不是配方或封闭物种表。每项适用行须真实采集；省略或填写零须有未使用或未释放证据。现场源清单识别的其他实际投入、回收产品、初沉污泥、营养盐、清洗剂、再生剂、滤材、制冷剂、包装组件或排放物种，均须增加一项原子行。按实际铑/碘化物路线筛查相关的碘化氢、二甲醚、甲酸、较重醛类、烷基碘化物、腐蚀金属及保护床金属；专利中出现并不证明现场释放或用量。真实交换不得藏在集合行中。[jrc-cww-2016; celanese-carbonylation-2020]

#### 输入

##### 产品流

###### 化石工业甲醇 (`methanol`)

仅限煤、焦化或天然气工艺工业甲醇；采集商品收货质量、水分、含量、碳源和供方基准。此身份不指定市场平均上游数据集。

- 选定流：甲醇（市场平均） (`adbc8430-7937-4ade-b7a5-cb1797dda661`)
- 流属性/单位：质量 / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的采集交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

###### 一氧化碳原料 (`carbon_monoxide_feed`)

跨单元边界供给的化石源净化CO，不是原始合成气。核对气体组成与实测质量；体积转换使用实际温度、绝对压力、干湿基准及压缩因子。

- 选定流：一氧化碳 (`69422d71-f1a5-4c70-bb58-126262b8ddc2`)
- 流属性/单位：质量 / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的采集交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

###### 碘甲烷促进剂 (`methyl_iodide_makeup`)

记录实际碘甲烷（CH3I，CAS 74-88-4）SKU、物态、含量、整份收货制剂、补充量与回收；循环量不是新消耗。区分纯碘甲烷与溶剂稀释供给，另保留载体组成。不得替换成碘化甲铵或甲脒碘化物，也不得将空气排放身份用于外购促进剂。

- 选定流：碘甲烷促进剂
- 流属性/单位：质量 / kg
- 流属性UUID：
- 单位组UUID：
- 数量规则：每 1 kg 参考流的采集交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

###### 铑羰基碘化物催化剂溶液 (`rhodium_catalyst_makeup`)

仅在实际铑羰基碘化物催化剂溶液跨边界供给时纳入；采集完整溶剂、水、金属及碘化物组成、化学形态、物态、供方与含量。整份溶液质量与所含Rh分别记录。若活性配合物由外购前体在现场生成，应将每项实际前体供给另列具体原子交换，不能虚构外购反应介质溶液。溶液中已包含的组分不再作为额外新投入。不得用铜催化剂替换。

- 选定流：铑羰基碘化物催化剂溶液
- 流属性/单位：质量 / kg
- 流属性UUID：
- 单位组UUID：
- 数量规则：每 1 kg 参考流的采集交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

###### 碘化锂 (`lithium_iodide`)

仅在实际共催化剂配方采用时纳入；明确水合、溶液状态及含量。专利浓度不是默认用量。

- 选定流：碘化锂
- 流属性/单位：质量 / kg
- 流属性UUID：
- 单位组UUID：
- 数量规则：每 1 kg 参考流的采集交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

###### 乙酸锂 (`lithium_acetate`)

按实际使用条件纳入；识别无水或水合材料及载水。乙酸钠是另一物种。

- 选定流：乙酸锂
- 流属性/单位：质量 / kg
- 流属性UUID：
- 单位组UUID：
- 数量规则：每 1 kg 参考流的采集交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

###### 新购冰乙酸初装料 (`fresh_acetic_charge`)

仅纳入实际购入、含量至少99.8 wt%的启动或替换酸；记录库存变化与供方。内部回收酸不计作此新投入。

- 选定流：乙酸（醋酸） (`2cf748a4-30e8-4efd-aec4-05beb20604dc`)
- 流属性/单位：质量 / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的采集交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

###### 去离子工艺水 (`process_water`)

计量离子交换或反渗透供给的新鲜反应、洗涤及清洗水。记录用途与处理；已包含于收货溶液中的载水不得再次计入。

- 选定流：去离子水 (`5b3acbab-2518-4406-8736-d21f222d757a`)
- 流属性/单位：质量 / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的采集交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

###### 冷却补充用外购自来水 (`cooling_water`)

仅适用于处理后自来水供给。记录新补充水、体积转换时的密度及实际来源；直接取水须另列资源流和处理清单。

- 选定流：自来水 (`6a8b6455-e9bb-4cb9-81ea-5e83413d5fe1`)
- 流属性/单位：质量 / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的采集交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

###### 30%氢氧化钠溶液 (`caustic`)

仅在实测中和使用实际30 wt%NaOH溶液时纳入；数量为整份溶液kg。实物账分别记录NaOH和水份额；其他浓度须采用自身相容流。

- 选定流：氢氧化钠（30%） (`47926319-2558-4b19-bbab-0ff264fca360`)
- 流属性/单位：质量 / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的采集交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

###### 金属功能化阳离子交换除碘保护树脂 (`guard_resin`)

仅在实际安装保护床时纳入；采集聚合物、功能金属、湿干基准、装填、更换与再生配方。阴离子树脂不能自动替代。

- 选定流：金属功能化阳离子交换除碘保护树脂
- 流属性/单位：质量 / kg
- 流属性UUID：
- 单位组UUID：
- 数量规则：每 1 kg 参考流的采集交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

###### 外购中压电力 (`electricity`)

仅适用于CN地域1–35 kV电网平均供电，与原件locationOfSupply一致。计量交付量；kWh乘3.6转换为MJ。保留原件净热值属性；其他供给地域、电压或供方路线须用相容记录。产品流不提供现场电力负荷因子。

- 选定流：交流电 (`3d76981f-964a-4865-b588-0e067a2a1163`)
- 流属性/单位：净热值 / MJ
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200c9a66`
- 单位组UUID：`93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的采集交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：`jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

###### 外购工艺蒸汽 (`steam`)

按交付质量记录一项蒸汽交换。实测压力、绝对压或表压约定、温度、干度或过热、质量、回水及焓。能源链接前须核对供方参考量是交付蒸汽质量还是已证明的净热量。

- 选定流：外购工艺蒸汽
- 流属性/单位：质量 / kg
- 流属性UUID：
- 单位组UUID：
- 数量规则：每 1 kg 参考流的采集交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：`jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

###### 管输天然气 (`gas`)

仅在现场锅炉或氧化炉燃料实际使用时纳入；原件参考为体积/m3。采集温度、绝对压力、干湿组成、压缩因子、热值基准及供方m3定义。次级质量系数不是密度。

- 选定流：气态天然气 (`4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`)
- 流属性/单位：体积 / m3
- 流属性UUID：`93a60a56-a3c8-22da-a746-0800200c9a66`
- 单位组UUID：`93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的采集交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：`jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

###### 空分气态氮 (`blanket_nitrogen`)

仅按实际空分气态N2氮封或吹扫纳入；计量完整新交付N2质量、纯度、气态、供给压力及供方kg基准。选定气态惰化产品未限定专属制造路线或固定纯度、压力；实际空分供给仍须有供方证据。补充量或排放的定性备注不是数量或排放默认值。液氮或内部制备空气属于不同供给路线。

- 选定流：氮气 (`92233c86-8e75-441c-94de-03cc91bc7c10`)
- 流属性/单位：质量 / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的采集交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

#### 输出

##### 产品流

###### 验收散装冰乙酸 (`finished_acid`)

1 千克含CH3COOH至少99.8 wt%的验收商品净质量，排除运输容器质量。水与各杂质仍是商品质量组成，不另作参考输出。

- 选定流：乙酸（醋酸） (`2cf748a4-30e8-4efd-aec4-05beb20604dc`)
- 流属性/单位：质量 / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`product_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_product`
- 来源：`jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

###### 分离丙酸共产品 (`propionic_acid`)

仅当丙酸确实单独回收、验收及销售且含量明确时纳入。主酸中的痕量杂质不是共产品。

- 选定流：分离丙酸共产品
- 流属性/单位：质量 / kg
- 流属性UUID：
- 单位组UUID：
- 数量规则：每 1 kg 参考流的采集交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_product`
- 来源：`jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

###### 回收乙酸甲酯共产品 (`methyl_acetate_coproduct`)

仅按实际外送、规格与接收方纳入。内部轻组分循环不是共产品。

- 选定流：回收乙酸甲酯共产品
- 流属性/单位：质量 / kg
- 流属性UUID：
- 单位组UUID：
- 数量规则：每 1 kg 参考流的采集交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_product`
- 来源：`jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

###### 外送燃料用羰基化排放气 (`purge_fuel`)

一项转移给具名燃料使用者的实测气体混合物；披露CO/H2/CO2/CH4/VOC/水组成及热值基准。现场氧化仍属内部过程，随后记录实际烟囱排放。

- 选定流：外送燃料用羰基化排放气
- 流属性/单位：质量 / kg
- 流属性UUID：
- 单位组UUID：
- 数量规则：每 1 kg 参考流的采集交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_product`
- 来源：`jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

###### 蒸汽冷凝回水 (`condensate_return`)

仅在回送供汽方时纳入；计量清洁回水质量与温度。这是外部水及焓返回，不是避免负荷或酸共产品。

- 选定流：蒸汽冷凝回水
- 流属性/单位：质量 / kg
- 流属性UUID：
- 单位组UUID：
- 数量规则：每 1 kg 参考流的采集交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_product`
- 来源：`jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

##### 废物流

###### 送外部处理的乙酸单元废水 (`effluent_transfer`)

转移点的一项废水混合物；计量完整湿质量、流量、pH、水、有机物、盐、碘离子、金属和接收处理。不得使用锰渣洗涤水。

- 选定流：送外部处理的乙酸单元废水
- 流属性/单位：质量 / kg
- 流属性UUID：
- 单位组UUID：
- 数量规则：每 1 kg 参考流的采集交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_wastes`
- 来源：`jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

###### 含乙酸钠的水性中和排污 (`neutralization_purge`)

仅按实际分流送外部处理的一项水性废物混合物；量化乙酸根、钠、残余游离酸、水与碘离子。它不是纯盐，也不自动成为可售共产品。

- 选定流：含乙酸钠的水性中和排污
- 流属性/单位：质量 / kg
- 流属性UUID：
- 单位组UUID：
- 数量规则：每 1 kg 参考流的采集交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_wastes`
- 来源：`jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

###### 含铑废催化剂溶液 (`spent_catalyst`)

仅按实际移出并送往具名处理或回收路线的催化剂混合物纳入；报告溶液质量和Rh/碘化物/溶剂/水。所含金属未排入环境时不得另计基本流。

- 选定流：催化剂废物 (`9f527622-cc4a-3014-a59e-a0383c602b5d`)
- 流属性/单位：质量 / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的采集交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_wastes`
- 来源：`jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

###### 乙酸精馏重组分釜残 (`heavy_bottoms`)

一项移出的重有机残渣混合物；分析物种、游离酸、碘化物、金属、水与物态，并记录实测接收路线。不得替换为柠檬酸残渣。

- 选定流：乙酸精馏重组分釜残
- 流属性/单位：质量 / kg
- 流属性UUID：
- 单位组UUID：
- 数量规则：每 1 kg 参考流的采集交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_wastes`
- 来源：`jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

###### 化工废水生物污泥 (`biological_sludge`)

仅按现场实际生物处理纳入；采集外运污泥湿质量、干固体、有机碳、金属及碘化物含量与接收条件。区别初沉污泥；实际存在时另列原子行。

- 选定流：污泥 (`725c8f6e-7975-4155-a250-1f95ef70c508`)
- 流属性/单位：质量 / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的采集交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_wastes`
- 来源：`jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

###### 废金属功能化除碘保护树脂 (`spent_guard_resin`)

一项废保护树脂交换，实测残留液体、功能金属和捕集碘化物；记录再生或处置及接收方。

- 选定流：废金属功能化除碘保护树脂
- 流属性/单位：质量 / kg
- 流属性UUID：
- 单位组UUID：
- 数量规则：每 1 kg 参考流的采集交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_wastes`
- 来源：`jrc-lvoc-2017`; `celanese-acetic-2021`; `celanese-carbonylation-2020`; `jrc-cww-2016`

##### 基本流

###### 化石源二氧化碳 (`co2_fossil`)

治理后实际排至室外空气，子介质未特指；烟囱与无组织原记录分别保留。已知现场子介质时采用对应流。

- 选定流：二氧化碳（化石源） (`08a91e70-3ddc-11dd-923d-0050c2490048`)
- 流属性/单位：质量 / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的采集交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`jrc-cww-2016`; `celanese-carbonylation-2020`; `celanese-acetic-2021`

###### 生物源二氧化碳 (`co2_biogenic`)

治理后实际排至室外空气，子介质未特指；烟囱与无组织原记录分别保留。已知现场子介质时采用对应流。 即使温室气体报告口径排除它，也保留实际生物CO2；不假定生物碳份额。

- 选定流：二氧化碳（生物源） (`08a91e70-3ddc-11dd-9c15-0050c2490048`)
- 流属性/单位：质量 / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的采集交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`jrc-cww-2016`; `celanese-carbonylation-2020`; `celanese-acetic-2021`

###### 化石源一氧化碳 (`co_air`)

治理后实际排至室外空气，子介质未特指；烟囱与无组织原记录分别保留。已知现场子介质时采用对应流。

- 选定流：一氧化碳（化石源） (`08a91e70-3ddc-11dd-924e-0050c2490048`)
- 流属性/单位：质量 / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的采集交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`jrc-cww-2016`; `celanese-carbonylation-2020`; `celanese-acetic-2021`

###### 甲醇排入空气 (`methanol_air`)

治理后实际排至室外空气，子介质未特指；烟囱与无组织原记录分别保留。已知现场子介质时采用对应流。

- 选定流：甲醇 (`fe0acd60-3ddc-11dd-a935-0050c2490048`)
- 流属性/单位：质量 / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的采集交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`jrc-cww-2016`; `celanese-carbonylation-2020`; `celanese-acetic-2021`

###### 乙酸排入空气 (`acetic_air`)

治理后实际排至室外空气，子介质未特指；烟囱与无组织原记录分别保留。已知现场子介质时采用对应流。

- 选定流：乙酸 (`08a91e70-3ddc-11dd-92c3-0050c2490048`)
- 流属性/单位：质量 / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的采集交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`jrc-cww-2016`; `celanese-carbonylation-2020`; `celanese-acetic-2021`

###### 碘甲烷排入空气 (`methyl_iodide_air`)

治理后实际排至室外空气，子介质未特指；烟囱与无组织原记录分别保留。已知现场子介质时采用对应流。

- 选定流：碘甲烷 (`7c2371e9-8623-4fe9-a6cc-a996a8d79d7a`)
- 流属性/单位：质量 / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的采集交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`jrc-cww-2016`; `celanese-carbonylation-2020`; `celanese-acetic-2021`

###### 乙酸甲酯排入空气 (`methyl_acetate_air`)

治理后实际排至室外空气，子介质未特指；烟囱与无组织原记录分别保留。已知现场子介质时采用对应流。

- 选定流：乙酸甲酯 (`08a91e70-3ddc-11dd-9690-0050c2490048`)
- 流属性/单位：质量 / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的采集交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`jrc-cww-2016`; `celanese-carbonylation-2020`; `celanese-acetic-2021`

###### 乙醛排入空气 (`acetaldehyde_air`)

治理后实际排至室外空气，子介质未特指；烟囱与无组织原记录分别保留。已知现场子介质时采用对应流。

- 选定流：乙醛 (`fe0acd60-3ddc-11dd-a7a5-0050c2490048`)
- 流属性/单位：质量 / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的采集交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`jrc-cww-2016`; `celanese-carbonylation-2020`; `celanese-acetic-2021`

###### 氢排入空气 (`hydrogen_air`)

治理后实际排至室外空气，子介质未特指；烟囱与无组织原记录分别保留。已知现场子介质时采用对应流。

- 选定流：氢 (`08a91e70-3ddc-11dd-949c-0050c2490048`)
- 流属性/单位：质量 / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的采集交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`jrc-cww-2016`; `celanese-carbonylation-2020`; `celanese-acetic-2021`

###### 化石源甲烷排入空气 (`methane_air`)

治理后实际排至室外空气，子介质未特指；烟囱与无组织原记录分别保留。已知现场子介质时采用对应流。

- 选定流：甲烷 (化石源) (`08a91e70-3ddc-11dd-9610-0050c2490048`)
- 流属性/单位：质量 / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的采集交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`jrc-cww-2016`; `celanese-carbonylation-2020`; `celanese-acetic-2021`

###### 一氧化氮排入空气 (`no_air`)

治理后实际排至室外空气，子介质未特指；烟囱与无组织原记录分别保留。已知现场子介质时采用对应流。 使用实际物种质量；仅有以NO2计的总NOx不能填写NO或NO2。明确记录未决物种分配，NOx不包含N2O。

- 选定流：一氧化氮 (`08a91e70-3ddc-11dd-96ee-0050c2490048`)
- 流属性/单位：质量 / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的采集交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`jrc-cww-2016`; `celanese-carbonylation-2020`; `celanese-acetic-2021`

###### 二氧化氮排入空气 (`no2_air`)

治理后实际排至室外空气，子介质未特指；烟囱与无组织原记录分别保留。已知现场子介质时采用对应流。 使用实际物种质量；仅有以NO2计的总NOx不能填写NO或NO2。明确记录未决物种分配，NOx不包含N2O。

- 选定流：二氧化氮 (`08a91e70-3ddc-11dd-96e5-0050c2490048`)
- 流属性/单位：质量 / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的采集交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`jrc-cww-2016`; `celanese-carbonylation-2020`; `celanese-acetic-2021`

###### 一氧化二氮排入空气 (`n2o_air`)

治理后实际排至室外空气，子介质未特指；烟囱与无组织原记录分别保留。已知现场子介质时采用对应流。

- 选定流：一氧化二氮 (`08a91e70-3ddc-11dd-94c3-0050c2490048`)
- 流属性/单位：质量 / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的采集交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`jrc-cww-2016`; `celanese-carbonylation-2020`; `celanese-acetic-2021`

###### 二氧化硫排入空气 (`so2_air`)

治理后实际排至室外空气，子介质未特指；烟囱与无组织原记录分别保留。已知现场子介质时采用对应流。

- 选定流：二氧化硫 (`fe0acd60-3ddc-11dd-ac48-0050c2490048`)
- 流属性/单位：质量 / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的采集交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`jrc-cww-2016`; `celanese-carbonylation-2020`; `celanese-acetic-2021`

###### PM2.5排入空气 (`pm25_air`)

治理后实际排至室外空气，子介质未特指；烟囱与无组织原记录分别保留。已知现场子介质时采用对应流。 使用互斥粒径份额，不将PM2.5、累积PM10及总颗粒物作为独立质量相加。

- 选定流：颗粒物 (PM2.5) (`08a91e70-3ddc-11dd-9293-0050c2490048`)
- 流属性/单位：质量 / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的采集交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`jrc-cww-2016`; `celanese-carbonylation-2020`; `celanese-acetic-2021`

###### PM2.5至PM10排入空气 (`pm10_air`)

治理后实际排至室外空气，子介质未特指；烟囱与无组织原记录分别保留。已知现场子介质时采用对应流。 使用互斥粒径份额，不将PM2.5、累积PM10及总颗粒物作为独立质量相加。

- 选定流：颗粒物 (PM2.5 - PM10) (`08a91e70-3ddc-11dd-9501-0050c2490048`)
- 流属性/单位：质量 / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的采集交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`jrc-cww-2016`; `celanese-carbonylation-2020`; `celanese-acetic-2021`

###### 大于10微米颗粒物排入空气 (`pmover10_air`)

治理后实际排至室外空气，子介质未特指；烟囱与无组织原记录分别保留。已知现场子介质时采用对应流。 使用互斥粒径份额，不将PM2.5、累积PM10及总颗粒物作为独立质量相加。

- 选定流：颗粒物（> PM10） (`fe0acd60-3ddc-11dd-a70a-0050c2490048`)
- 流属性/单位：质量 / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的采集交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`jrc-cww-2016`; `celanese-carbonylation-2020`; `celanese-acetic-2021`

###### 水蒸气排入空气 (`water_air`)

治理后实际排至室外空气，子介质未特指；烟囱与无组织原记录分别保留。已知现场子介质时采用对应流。

- 选定流：水蒸气 (`fe0acd60-3ddc-11dd-ac04-0050c2490048`)
- 流属性/单位：质量 / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的采集交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`jrc-cww-2016`; `celanese-carbonylation-2020`; `celanese-acetic-2021`

###### 液态水排入淡水 (`water_fresh`)

厂区排口经现场处理后实际排入淡水的释放；送外部处理厂属于废物交换，不是此释放。整份废水的实测体积及组成与水组分、各溶解或悬浮物种分别保留。原件参考为体积/m3；转换为水组分质量须有实际密度及水质量分数。实物闭合不得将整份废水质量再与同一水和污染物质量相加，也不得在无已记录基准时以废水总体积证明纯水体积。

- 选定流：水 (`5e50fc01-19c6-4377-a1cc-bc65a12498ea`)
- 流属性/单位：体积 / m3
- 流属性UUID：`93a60a56-a3c8-22da-a746-0800200c9a66`
- 单位组UUID：`93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的采集交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`jrc-cww-2016`; `celanese-carbonylation-2020`; `celanese-acetic-2021`

###### 游离乙酸排入淡水 (`acetic_fresh`)

厂区排口经现场处理后实际排入淡水的释放；送外部处理厂属于废物交换，不是此释放。 按实际pH区别实测游离酸与解离乙酸根；以酸当量报告的分析结果须依据已记录物种分配转换，不得重复。

- 选定流：乙酸 (`08a91e70-3ddc-11dd-92c7-0050c2490048`)
- 流属性/单位：质量 / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的采集交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`jrc-cww-2016`; `celanese-carbonylation-2020`; `celanese-acetic-2021`

###### 乙酸根离子排入淡水 (`acetate_fresh`)

厂区排口经现场处理后实际排入淡水的释放；送外部处理厂属于废物交换，不是此释放。 按实际pH区别实测游离酸与解离乙酸根；以酸当量报告的分析结果须依据已记录物种分配转换，不得重复。

- 选定流：乙酸根离子排入淡水
- 流属性/单位：质量 / kg
- 流属性UUID：
- 单位组UUID：
- 数量规则：每 1 kg 参考流的采集交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`jrc-cww-2016`; `celanese-carbonylation-2020`; `celanese-acetic-2021`

###### 甲醇排入淡水 (`methanol_fresh`)

厂区排口经现场处理后实际排入淡水的释放；送外部处理厂属于废物交换，不是此释放。

- 选定流：甲醇 (`fe0acd60-3ddc-11dd-a939-0050c2490048`)
- 流属性/单位：质量 / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的采集交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`jrc-cww-2016`; `celanese-carbonylation-2020`; `celanese-acetic-2021`

###### 碘离子排入淡水 (`iodide_fresh`)

厂区排口经现场处理后实际排入淡水的释放；送外部处理厂属于废物交换，不是此释放。

- 选定流：碘化物 (`08a91e70-3ddc-11dd-94d6-0050c2490048`)
- 流属性/单位：质量 / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的采集交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`jrc-cww-2016`; `celanese-carbonylation-2020`; `celanese-acetic-2021`

###### 钠离子排入淡水 (`sodium_fresh`)

厂区排口经现场处理后实际排入淡水的释放；送外部处理厂属于废物交换，不是此释放。

- 选定流：钠离子 (`6a3f413e-8aab-4c58-93b0-1f51c9714adb`)
- 流属性/单位：质量 / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的采集交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`jrc-cww-2016`; `celanese-carbonylation-2020`; `celanese-acetic-2021`

###### 铑排入淡水 (`rhodium_fresh`)

厂区排口经现场处理后实际排入淡水的释放；送外部处理厂属于废物交换，不是此释放。 原件元素金属质量为释放Rh总量；溶解及颗粒形态和处理归宿仍须分析。

- 选定流：铑 (`fe0acd60-3ddc-11dd-abb9-0050c2490048`)
- 流属性/单位：质量 / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的采集交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`jrc-cww-2016`; `celanese-carbonylation-2020`; `celanese-acetic-2021`

## 7. 分配与共产品处理

先分离可独立计量的运行；保留未分配的实物质量、水、碳和物种账。单元内回收溶剂、催化剂、酸和冷凝水作为两端同量的内部转移抵消。只有实际验收、具接收方及规格且有明确经济或物理功能的外部产品才是共产品；痕量组成与待处理废物不是共产品。分配前保留其完整实物输出质量。

对不可分离的联合运行，记录物理因果关系，有依据时采用实测因果分配；否则采用同期间净销售值进行经济分配，披露价格、产品数量、市场地位和敏感性。份额和为一。分配可归属环境负荷及共同投入，不将实际共产品实物输出乘以酸的分配份额。同一输出不得同时采用避免产品信用和分配。废物处理遵循实际生产方或接收方责任。冷凝回水是计量的水及焓转移，不自动产生替代信用。这些是通过cp_allocation实施的归因建模规则，依次考虑拆分、物理因果关系及必要时其他有依据的关系。经济分配须另记后续提纯、压缩或包装成本，将实测销售值校正至同一联合生产厂门；总值须为正实测值，并披露敏感性。无预选份额或信用。[ilcd-general-2010]

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | acid_manufacture | 参考输出、验收共产品和回水 | 装车称重与分析 | SKU；CAS；商品净kg；CH3COOH份额x；水份额w；杂质份额；库存kg；废品；温度；去向 | 经校准的储罐或车辆称重排除皮重；按经验证供方方法进行批次含量分析并记录不确定性；汇总验收批次及核对期初期末库存 | kg; mass fractions | 每批次或事件；适用时连续能源及排口记录 | 一个声明的代表性连续运行年度含启停；或完整实测较短生产期并披露季节限制 | 所限定制造单元及归属服务 | 每 1 kg 参考流 | 校准、方法、不确定性、库存及流量核对、接收方与供方证据 |
| cp_materials | acid_manufacture | 每项供给原子物料及容器实物流动 | 收货、计量、实验室及配方 | row_id；SKU；CAS；供方；路线；实际化学组成；收货质量；水；水合状态；库存变化；回收；碳源；完整包装/容器/维护实物量；外部返还；周转次数；服务份额； | 逐项称量或计量新交换；核对交付与分析；区分整份混合物及活性组分；采用库存校正消耗，排除内部循环  服务或负荷分配前保留完整实物数量。 | kg | 每批次或事件；适用时连续能源及排口记录 | 一个声明的代表性连续运行年度含启停；或完整实测较短生产期并披露季节限制 | 所限定制造单元及归属服务 | 每 1 kg 参考流 | 校准、方法、不确定性、库存及流量核对、接收方与供方证据 |
| cp_water | acid_manufacture | 每项进水与回水 | 水表、采样及实物图 | 来源；用途；水质量或体积；温度；密度；回水；蒸发；排污；载水；内部循环 | 分别计量新水及排水；需要转换时分析密度或水质；绘出每个入口、循环和出口，不将冷却循环作为取水 | kg; m3 | 每批次或事件；适用时连续能源及排口记录 | 一个声明的代表性连续运行年度含启停；或完整实测较短生产期并披露季节限制 | 所限定制造单元及归属服务 | 每 1 kg 参考流 | 校准、方法、不确定性、库存及流量核对、接收方与供方证据 |
| cp_energy | acid_manufacture | 每项交付公用工程与现场发生 | 能源计量及焓平衡 | 电压；kWh；MJ；燃料体积；T；绝对P；干湿组成；Z；NCV/GCV；蒸汽kg；供给P/T/干度；回水kg/T；供方参考；计量损失；供给地域；外送能源；散热；储能变化；共同焓基准； | 使用经校准阶段及厂级计量；按因果核对共同能源；实际热力记录确定蒸汽焓及配对回水；链接前核对原件属性及上游参考数量 | MJ; m3; kg | 每批次或事件；适用时连续能源及排口记录 | 一个声明的代表性连续运行年度含启停；或完整实测较短生产期并披露季节限制 | 所限定制造单元及归属服务 | 每 1 kg 参考流 | 校准、方法、不确定性、库存及流量核对、接收方与供方证据 |
| cp_wastes | acid_manufacture | 每项外部原子废物混合物 | 地磅、联单和分析 | row_id；湿质量；水；干固体；酸；乙酸根；钠；碘离子；金属；有机碳；物态；接收方；处理；归宿 | 逐项称量实际移出流，取得代表性组成及接收凭据；区别催化剂、重釜残、水性排污、初沉及生物污泥和保护树脂；不得将同一分流重复填写两行 | kg | 每批次或事件；适用时连续能源及排口记录 | 一个声明的代表性连续运行年度含启停；或完整实测较短生产期并披露季节限制 | 所限定制造单元及归属服务 | 每 1 kg 参考流 | 校准、方法、不确定性、库存及流量核对、接收方与供方证据 |
| cp_emissions | acid_manufacture | 每项实际物种或介质 | 源清单、直接测量及实验室 | 物种CAS；来源；介质及子介质；废气或水流量；浓度；时间；T/P；干湿基准；氧基准；pH及物种分配；检出限；治理旁路；燃烧碳源；粒径区间；湿空气输入；湿度；O2/N2/其他载体组分；完整外排载体；输入背景；整份废水与水份额； | 涵盖运行及异常事件，测量最终烟囱、排口与无组织源；采用经验证物种分析和同步流量；处理前后采样核对归宿；保留检出限及不确定性；纳入全部发现物质 | kg; m3; concentration | 每批次或事件；适用时连续能源及排口记录 | 一个声明的代表性连续运行年度含启停；或完整实测较短生产期并披露季节限制 | 所限定制造单元及归属服务 | 每 1 kg 参考流 | 校准、方法、不确定性、库存及流量核对、接收方与供方证据 |
| cp_allocation | acid_manufacture | 实物联合生产与负荷分配 | 单元计量、合同和期间销售 | 产品质量；含量；因果关系；独立单元投入；接收方；同期间净价；负荷份额；敏感性 | 将完整实物输出与分配后负荷账分别保留；以真实记录证明拆分与因果或经济份额，不假定价格或零价共产品 | kg; currency; share | 每批次或事件；适用时连续能源及排口记录 | 一个声明的代表性连续运行年度含启停；或完整实测较短生产期并披露季节限制 | 所限定制造单元及归属服务 | 每 1 kg 参考流 | 校准、方法、不确定性、库存及流量核对、接收方与供方证据 |

协议聚合前以及服务或共产品分配前保留期间总量。P为声明厂门交付的验收主商品净kg。A_i为同一单元及期间的实测完整实物交换总量；收货、交付、内部转移和期初期末库存分别保留，再记录消耗所需库存校正。实物交换用A_i/P表示每1kg参考流。分配后负荷分子另记B_i，附分配规则报告B_i/P；不得用它替代实物闭合中的A_i。P排除不合格品分流、内部转移和容器皮重。完整数据集要求P>0及组成闭合。

总质量、元素、水物种、能源及库存分别设账。计量燃烧或曝气实际进入的湿空气，含水及O2/N2/其他组成，并以同一实物基准记录完整外排尾气载体。各实际载体组分与污染物分别解析，不得重复计入整股流。环境背景输入与外排总量分别报告；采用净增排放约定时须明确声明，不得抹去总量实物闭合。总反应CH3OH + CO → CH3COOH既不产水也不耗水；实际副反应、中和、燃烧和处理可能产耗水，须有实测反应进度与水物种平衡。氢氧元素平衡不能替代水物种账。MJ电力或热量归能源账，不得混入kg物料求和；保留供入、外送能源、共同热力基准、损失与储能变化。[celanese-acetic-2021; celanese-carbonylation-2020; jrc-cww-2016]

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalisation | all inventory rows | a_i = A_i / P；分配前保留全部完整实物交换；固定参考输出=1kg。分配负荷b_i = B_i / P另列负荷账，不能替代实物a_i。 | A_i; B_i; P; cp_product; applicable collection protocol | a_i; b_i | ilcd-general-2010 |
| product_components | finished_acid | 所含酸=sum(p_b × x_b)；商品水=sum(p_b × w_b)；实测杂质=sum(p_b ×对应份额)；P=sum(p_b)；份额按实际不确定性闭合。另行请求的活性酸基准负荷采用总负荷/所含酸，并明确标为另一个结果。 | p_b; x_b; w_b; impurity fractions; cp_product | acid; water; impurities; P | celanese-acetic-2021 |
| species_load | elementary outputs | 对质量参考物种，释放kg=sum(C_s × Vdot × delta_t)，C_s为物种kg/m3，Vdot为每单位时间m3，delta_t采用同一时间单位；也可用C_s乘实测区间累计体积而不再乘时间，或采用经验证积分质量测量。积分前明确转换报告单位及T/P、干湿和氧基准，使实际浓度与流量基准一致。water_fresh保留原件m3参考，并另记水组分基准。仅按已记录物种定义和分子量转换碳、酸或NOx分析当量。无默认去除率。 | concentration; flow; time; measurement basis; cp_emissions | species kg | jrc-cww-2016 |
| steam_delivery | steam; condensate_return | Q_net=sum(m_in × h_in)-sum(m_return × h_return)，采用声明的共同焓基准和实测相态。按实际供方定义扣除其他实测外送焓；不得复用纸张干燥MJ/kg系数。蒸汽质量保留自身交换基准。 | steam mass; h_in; return mass; h_return; cp_energy | Q_net; delivered steam mass | jrc-cww-2016 |
| physical_closure | acid_manufacture | 投入+期初库存=实物输出+期末库存，附反应物种平衡及实测不确定性。水账含载水、蒸汽及回水、清洗、冷却补充及排污、商品、残渣、废水及蒸发；明确反应产水或耗水。碳账含原料、燃料、实际产品或残渣及全部含碳排放，区别化石或生物源及内部尾气燃烧。碘/Rh账含催化剂或促进剂补充、库存、回收、保护树脂、废物及释放物种。实测中和CH3COOH + NaOH → CH3COONa + H2O须核对，不能强设完美收率。 | cp_materials; cp_water; cp_product; cp_wastes; cp_emissions; stocks | mass; water; carbon; species residuals and uncertainty | jrc-cww-2016; celanese-acetic-2021 |
| joint_burdens | shared operation | 采用因果实测份额；无可辩护物理关系时f_j=(p_j × net_price_j)/sum(p_k × net_price_k)；价格以实测值校正至同一厂门，总值须为正；份额和为1。全部完整实物交换另外保留。披露拆分、价格期间、后续处理成本及敏感性。 | cp_allocation; masses; prices; causal evidence | allocated burden ledger | ilcd-general-2010 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all rows | 核对物种CAS、混合物组成、硬性路线或物态限制、原件属性和单位组及精确中文名；独立于UUID有效性核对实际供给或接收基准。不得采用修正流或近似物种替代。仅用途备注不能证明专属制造路线或浓度等级；须执行实际硬性身份字段并核对实测供给相容性。 | cp_materials; cp_product; native identity chain |
| coverage | acid_manufacture | 在同一声明期间、阶段及异常运行核对全部进出流；采样覆盖全部实际来源，不限监管污染物。未知量属于缺失，不能填零。 | cp_emissions; jrc-cww-2016 |
| balance | acid_manufacture | 报告实物质量、水、碳、Rh及碘残差和仪器或实验室不确定性；调查不平衡，不能虚构补偿基本流。 | cp_water; cp_wastes; cp_product |
| supplier_link | steam; gas; all purchased exchanges | 仅UUID身份不批准供方、数量、地域或负荷相容性。证明公用工程参考及对应净交付；真实供方记录缺失时保留具体未决链接。 | cp_energy; supplier evidence |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| reference_acceptance | finished_acid | 一个最终参考产品输出；1kg商品净质量；实际含量>=99.8 wt%；核实全部必需限定信息及路线。 | celanese-acetic-2021 |
| stream_fates | all inventory rows | 要求实际存在或缺失证据、明确方向、单一交换、采集方、接收方或介质及每1kg基准。废水转移与原水排放、内部循环与新投入、废物与所含金属排放不得重复。 | jrc-cww-2016 |
| species_completeness | elementary outputs | 释放清单纳入实际VOC物种及碳源、金属或碘离子和互斥PM；核实NOx基准及物种，N2O单列，保留生物CO2。实际缺失物种另增原子行；TOC/COD/TSS汇总检查是诊断，不作为额外有机物种质量。 | jrc-cww-2016 |
| physical_and_burden_accounts | acid_manufacture | 实物输出、库存变化、反应、水、碳、碘及Rh平衡与分配负荷账须分别可审。闭合、公用工程或供方基准缺失或适用交换未计量时，生产数据集不完整，不得虚构PCR默认量。 | jrc-cww-2016 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_manufacturing；归因清单 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 符合路线及SKU；透明独立单元或已披露联合运行分配 |
| excluded_use | 其他酸或衍生物；较低浓度水溶液；生物、发酵或氧化路线；声称行业平均配方；以检查结果冒充方法批准 |
| required_metadata | 参考限定信息；原始计量期间；来源及实物图；原件流身份及相容供方；实物平衡；接收路线；分配及不确定性 |
| required_quality_disclosure | 实测范围、不确定性、全部缺失数量或UUID或供方基准、零量或未使用证据及未审核范围 |
| update_trigger | 路线、催化剂、浓度等级、来源组成、能源基准、处理、共产品或原始证据变更 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| jrc-lvoc-2017 | official_guidance | European Commission JRC, LVOC BREF (2017), section 2.1.2.3.1 route C (printed 20 / PDF58), section 2.2.10 (printed56 / PDF94). https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/JRC109279_LVOC_Bref.pdf; retrieved 2026-10-13 | 羰基化及提纯定性边界、一般气体或催化剂归宿。排除A/B路线排放清单。不采用温度、压力、比例或因子默认量。 |
| celanese-acetic-2021 | handbook | Celanese, Glacial Acetic Acid Product Quality, Regulatory & Technical Information Package, status 11 October 2021, PDF1,4,9,10,18–20. https://www.celanese.com/-/media/cewebjssapp/project/documents/acetic-acid-product-dossier.pdf; retrieved 2026-10-13 | 原始技术产品、铑催化甲醇与CO制造及蒸馏、散装交付、酸水混合及衍生物身份区别。历史99.85 wt%凝固点销售规格示例，与PCR的99.8 wt%参考门槛区分；要求实际SKU分析及当前规格，无通用配方。 |
| jrc-cww-2016 | official_guidance | European Commission JRC, CWW BREF (2016), BAT2–5 printed543–544 / PDF573–574; treatment definitions PDF586. https://publications.jrc.ec.europa.eu/repository/bitstream/JRC103096/jrc103096_cww_bref_10_2016.pdf; retrieved 2026-10-13 | 化工源或流清单、流量及物种监测和处理归宿采集。方法用于前景LCI；BAT-AEL或默认效率不代表实际排放。 |
| celanese-carbonylation-2020 | literature | Celanese International Corp, US10807935B2, Process for continuous acetic acid production, grant 20 October 2020; Background; Reaction medium; Flash vessel; Purification/guard beds; Figure1. https://patents.google.com/patent/US10807935B2/en; retrieved 2026-10-13 | 原始专利过程拓扑及条件组分、杂质或保护床候选。专利实施例、设定、浓度和案例不是通用规定；实际工厂配方及全部其他物种须实测。 |
| ilcd-general-2010 | official_guidance | European Commission JRC, ILCD Handbook, General guide for Life Cycle Assessment, Detailed guidance, first edition March 2010, allocation discussion printed79–81 / PDF99–101. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf; retrieved 2026-10-13 | 归因拆分与分配、物理因果及经济关系；同厂门校正实测市场值与分配限制。不提供配方、价格、分配份额或供方数量。 |
