---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.industrial-monocarboxylic-fatty-acids-acid-oils-from-refining
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 椰子油水解蒸馏混合脂肪酸

## 1. 范围与适用性

本方法覆盖真实工业产品路线：精炼椰子甘油三酯油、无催化剂水解、甘油甜水分离、粗酸闪蒸/脱水、真空蒸馏、非氢化游离脂肪酸混合物储存及散装装载。仅适用于已声明的椰子油牌号及实测组成，不设默认链长。IFC 附录 A 和 Desmet 说明水解/蒸馏路线；生产者 PALMERA 页面区别蒸馏椰子等级与分馏酸。这些原件支持可行实物路线及在售产品家族，不代表已审计某生产者的配方。（`ifc-oleochemicals-2007`；`desmet-oleochemicals`；`klk-palmera-fatty-acids`）

排除碱性皂脚、粗皂脚酸化油、棕榈脂肪酸脱臭馏出物、妥尔油酸、牛脂/棕榈油/棕榈仁油原料路线、化石路线化学合成脂肪酸、氢化产品、甲酯/其他酯、脂肪酸盐、溶剂/结晶分馏、纯化单酸及配制脂肪酸溶液。皂脚酸化涉及酸、盐、胶质及水相，与甘油三酯水解不同；蒸馏不能使两者原料历史互换。脱脂残渣 PCR 的上游残余处理不涵盖本下游制造产品。（`ifc-oleochemicals-2007`；`epa-soap-fat-splitting-1974`；`epo-soapstock-separation-1985`）

基础单元接收外供蒸汽及电网电力，不在其边界内进行燃烧、氢化、催化剂添加、甘油浓缩/精制或零售包装。如实际存在这些操作，声称符合前须扩展实物模型，逐项审查投入、产出及直接排放。由同场址另一子系统供汽时，仍须单独核算其上游数据集；燃料及排放不得消失。可选厂内废水与废气处理属于所选边界。任何来源压力、浓度、收率、纯度、能耗或 BAT 排放水平都不是清单默认值。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.industrial-monocarboxylic-fatty-acids-acid-oils-from-refining` |
| classification_refs | CPC 3.0 `34120`；建议 `narrower` 范围，接受映射属于独立裁定 |
| covered_products | 精炼椰子油无催化剂水解制造的非氢化蒸馏混合游离脂肪酸 |
| excluded_products | 酸化油、脱臭馏出物、其他原料来源、酯/盐、氢化产品、纯化单酸及配制溶液 |
| representative_product | 生产者蒸馏椰子产品家族中一个经实测的椰子来源蒸馏酸 SKU；无通用 SKU 规格 |
| production_route | 精炼油接收 → 水解 → 甜水分离 → 闪蒸/脱水 → 真空蒸馏 → 储存 → 散装装载 |
| market_state | 工厂门口净散装混合物，声明水分及残余组分；参考质量不含另加载体溶液或包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 工业供货的规定椰子来源游离脂肪酸混合物 |
| How much | 1 千克验收散装混合物净质量 |
| How well | 实测批次规格：完整酸组成、水分、游离酸分数、残余甘油酯/不皂化物、规格要求的酸值/皂化值/碘值、污染物及验收 |
| How long or cycle | 门口一次交付；声明代表性生产期，不声称使用寿命服务 |
| reference_flow_link | mixed_acid |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 工业用脂肪酸 `ac9714b9-4722-4831-b3b4-d0d5fad447ec` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 实际 SKU；精炼椰子油来源及供方；生物/化石碳；无催化剂水解；无氢化/酯化；蒸馏切割；完整组成；游离酸/水分/残余分数及检测基准；净散装验收；电力电压/组合；蒸汽条件及供方基准；场址/时期；共同产出及废物去向；分配；前景边界 |

具体数据集必须声明全部限定信息。参考身份是在化工厂经水解形成的广义工业脂肪酸，包含饱和及不饱和酸，无单一 CAS、纯度、氢化或原料限制。来源分类不证明产品组成。以声明限定信息及实际批次谱选择非氢化椰子来源蒸馏混合物，商业净质量保留实测水分、甘油酯和不皂化物。该身份不确立供方数据集、纯酸数量或通用 SKU 规格。唯一参考输出为 `mixed_acid`。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | 参考数量为 1 千克验收净交付散装混合物。保留水分及残余，排除运输容器皮重。 |
| mixture_basis | all inventory rows | 行声明属性 | 行声明单位 | 每项交换按同一时期及验收净混合酸分母 B 归一为每 1 kg 参考流。另行保留实物总量，包括全部共同产出。 |
| solution_basis | cleaning_naoh; sweetwater | Mass | kg | 记录湿供货质量与实测溶质/水分分数。活性质量计算属补充，不替代湿质量或额外增加第二条载水投入。 |
| steam_basis | splitting_steam; distillation_steam | Mass | kg | 保留实际蒸汽质量及热力学状态；净交付热量需要供汽/返回焓及相符供方定义。仅 MJ 或总热值不足以证明。 |
| electricity_basis | electricity | Net calorific value | MJ | 记录属性为净热值；电表以 kWh 计量，按 1 kWh = 3.6 MJ 换算，保留电压及供电边界。此为电能，不是燃料热值估计。 |
| composition_basis | mixed_acid; oil; sweetwater | Mass | kg | 按声明分析基准测量物种分布、甘油酯、不皂化物及水分。缺少实测混合物组成/摩尔质量基准时，酸值不能代表游离酸质量；GC 酯化衍生分析不把产品身份变为酯。无默认链长。 |
| carrier_basis | water_fresh; water_vapour; offsite_effluent | 行声明属性 | 行声明单位 | 在实物账保留完整出水及湿气载体总量。水物种数量与污染物/物种负荷分别列分析账，不与完整流再次相加。仅排口体积不能确立水物种体积。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| sb_route | fatty_acid_unit | 纳入接收、储存、水解、甜水分离、闪蒸/脱水、真空蒸馏、回收、装载、清洗及实际厂内环境控制；聚合单元内保留各阶段独立计量。 | `ifc-oleochemicals-2007`; `desmet-oleochemicals` |
| sb_upstream | external inputs | 为油、水、电力、化学品及蒸汽链接来源、状态、技术、地域及数量基准相符的上游数据集。本边界不等于原料零负荷边界。 | `eu-pef-multifunctionality-2021` |
| sb_internal | internal transfers | 保留实物流程图及每条内部转移两端相同数量，包括循环酸残余、回收油脂、水及冷凝水。不将内部返回转为外部产品、废物或避免产品抵扣。 | `ifc-oleochemicals-2007`; `jrc-cww-bref-2016` |
| sb_environment | outfalls and vents | 按流登记表区别污水管网外送、直接淡水排放、捕集有机物、控制后排气及污泥。监测正常运行、启停、清洗及异常，不重复列入上游供应排放。 | `jrc-cww-bref-2016`; `ifc-oleochemicals-2007` |
| sb_refinement | oil receipt and site operations | 椰子油先前精炼属于精炼油上游数据集，不在本边界重复。纳入实际追加过滤、预处理、维护、清洗或装载操作，逐项记录真实辅助材料、更换材料、润滑剂、容器服务及产生废物。散装参考质量排除容器皮重，不排除声明边界内实际容器制造、复用、清洗或处置负荷。 | `ifc-oleochemicals-2007`; `jrc-cww-bref-2016` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 所选制造边界接收的精炼椰子甘油三酯油及外供公用介质 |
| starting_condition_role | 实测前景接收条件，不是原生原料生成或无负荷残余回收 |
| product_classification_scope | 仅 CPC 3.0 34120 中的椰子水解蒸馏酸子集 |
| recursive_input_rule | 同类别内部返回保留内部身份并闭合衡算。外购回收脂肪酸须明确身份、来源及上游负荷；审查前不属于本椰子油基础路线。 |
| upstream_dataset_requirement | 已验证实物身份及相符供方参考量、牌号、水分/组成、技术、地点、时期、边界；未决供方为开放边界，不为零 |
| disclosure | 阶段流程图、实物质量/水/生物碳/化石碳衡算、净交换登记、全部接收方、独立分配负荷账及未测范围 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fatty_acid_unit | 椰子油水解、蒸馏、散装交付及控制聚合单元 | required | 已声明无催化剂非氢化路线；纳入实际厂内控制 | foreground | mixed_acid; 1 kg |

实物流程图仍为油 → 水解 → 粗酸 → 脱水/蒸馏 → 储罐 → 散装交付；甜水在水解后输出，轻组分及重馏分在蒸馏后输出，控制单元返回保留两端相同内部数量。中间酸/储罐交接不是另一条外部参考产品输出。以下卡片是最低条件交换登记表，不是配方：只启用实际流，以记录证明不存在，并将每种其他实测化学品、燃料、物料或排放作为独立审查原子行加入。

### 过程：聚合脂肪酸制造（`fatty_acid_unit`）

#### 输入

##### 产品流

###### 精炼椰子油（`oil`）

本路线接收的精炼椰子甘油三酯油；采集批次组成、水分、游离酸及实际生物/化石碳。粗油及酸化油属于不同起始状态。

- 选定流：精炼椰子油 `570397b9-62ae-4576-b584-56691c7fed08`
- 流属性/单位：Mass / kg
- 数量规则：同一时期的实测实物数量除以验收净混合酸产量；保留未分配总量。证据证明不存在时可记零；缺少证据为未知。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### 去离子水（`hydrolysis_water`）

用于水解的外供去离子水；记录处理方式及质量。内部回收冷凝水为已计量的内部转移，不重复列作外部投入。

- 选定流：去离子水 `5b3acbab-2518-4406-8736-d21f222d757a`
- 流属性/单位：Mass / kg
- 数量规则：同一时期的实测实物数量除以验收净混合酸产量；保留未分配总量。证据证明不存在时可记零；缺少证据为未知。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### 自来水（`utility_water`）

用于冷却系统补水、清洗及处理的购入已处理自来水；净补水与循环量分别计量。体积表计按实测密度及供方参考基准换算。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Mass / kg
- 数量规则：同一时期的实测实物数量除以验收净混合酸产量；保留未分配总量。证据证明不存在时可记零；缺少证据为未知。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### 交流电（`electricity`）

仅用于中国用户接入端 1–35 kV 电网消费电量：该原生身份声明 locationOfSupply CN。记录实际中国区域电力组合、损耗、变压器范围及电压；中国以外供应、其他电压或发电路线须独立核实身份和供方。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value / MJ
- 数量规则：同一时期的实测实物数量除以验收净混合酸产量；保留未分配总量。证据证明不存在时可记零；缺少证据为未知。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### 交付脂肪水解塔的高压蒸汽（`splitting_steam`）

记录该交付蒸汽流的实际压力、温度、干度、质量、供汽系统及冷凝水返回。按能量链接背景前须核对蒸汽焓与供应方 MJ 定义。

- 选定流：交付脂肪水解塔的高压蒸汽
- 流属性/单位：Mass / kg
- 数量规则：同一时期的实测实物数量除以验收净混合酸产量；保留未分配总量。证据证明不存在时可记零；缺少证据为未知。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steam`
- 来源：`ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### 交付脂肪酸蒸馏加热的蒸汽（`distillation_steam`）

仅实际以蒸汽向再沸器供热时记录独立计量的蒸馏加热母管。分别识别间接加热、直接汽提及真空动力用途；不从真空设定值或一般技术页面推定热交付路线。核实实际蒸汽压力/温度与换热条件能够交付所需热量。其他加热介质须单独设置具体已审查交换。共用母管总量与阶段读数核对，不重复计量。（`desmet-distillation`）

- 选定流：交付脂肪酸蒸馏加热的蒸汽
- 流属性/单位：Mass / kg
- 数量规则：同一时期的实测实物数量除以验收净混合酸产量；保留未分配总量。证据证明不存在时可记零；缺少证据为未知。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steam`
- 来源：`ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### 氢氧化钠水溶液清洗剂（`cleaning_naoh`）

仅实际以 NaOH 清洗或在控制单元中和时纳入；不是碱性皂脚酸化或产品皂化。记录商业牌号及供货浓度，将交付溶液作为一条流计量，测定 NaOH 质量分数、水分及杂质。组成账另列活性 NaOH 质量。载水不重复计入补水；厂内稀释按分别计量的购入试剂及添加水记录，不虚增第二条购入溶液。

- 选定流：氢氧化钠水溶液清洗剂
- 流属性/单位：Mass / kg
- 数量规则：同一时期的实测实物数量除以验收净混合酸产量；保留未分配总量。证据证明不存在时可记零；缺少证据为未知。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### 活性炭（`activated_carbon`）

仅活性炭气体或水处理实际存在时纳入。记录牌号、碳来源、水分、吸附用途、更换及再生；广义化学身份不代表背景技术。

- 选定流：活性炭 `5cad53b5-252a-4e2f-8197-8be465707405`
- 流属性/单位：Mass / kg
- 数量规则：同一时期的实测实物数量除以验收净混合酸产量；保留未分配总量。证据证明不存在时可记零；缺少证据为未知。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

#### 输出

##### 产品流

###### 工业用脂肪酸（`mixed_acid`）

装载端验收的非氢化椰子油水解蒸馏游离脂肪酸混合物，散装交付。净质量保留实测水分、残余甘油酯及不皂化物；不是纯月桂酸或甲酯。

- 选定流：工业用脂肪酸 `ac9714b9-4722-4831-b3b4-d0d5fad447ec`
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release`
- 来源：`ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### 椰子油水解甘油甜水（`sweetwater`）

分离后作为产品交付有记录甘油回收接收方的含水甘油流。计量完整供货湿质量、甘油、水、残余油脂及溶解固体。甘油和水物种解释载体，不额外列作外部输出。纯甘油 UUID 不代表该溶液；下游浓缩及精制在本边界之外。废物部分保留独立实际去向，不推定零负荷抵扣。

- 选定流：椰子油水解甘油甜水
- 流属性/单位：Mass / kg
- 数量规则：同一时期的实测实物数量除以验收净混合酸产量；保留未分配总量。证据证明不存在时可记零；缺少证据为未知。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### 销售的脂肪酸蒸馏重馏分（`heavy_coproduct`）

仅具有已记录产品规格、法律状态及接收方的销售部分启用；记录水分、脂肪酸、甘油酯及降解物。每批或每部分只有一种去向。销售、废物及内部返回部分可同时存在，须无重叠地分割实测重馏分总量。

- 选定流：销售的脂肪酸蒸馏重馏分
- 流属性/单位：Mass / kg
- 数量规则：同一时期的实测实物数量除以验收净混合酸产量；保留未分配总量。证据证明不存在时可记零；缺少证据为未知。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residual`
- 来源：`ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### 销售的脂肪酸蒸馏轻馏分冷凝液（`light_coproduct`）

仅纳入具有已核实规格、接收方及产品状态的实际销售头馏分。记录完整湿质量及酸/水组成；与 light_ends 废物和内部回用分割。不以技术上可回收推定销售。

- 选定流：销售的脂肪酸蒸馏轻馏分冷凝液
- 流属性/单位：Mass / kg
- 数量规则：同一时期的实测实物数量除以验收净混合酸产量；保留未分配总量。证据证明不存在时可记零；缺少证据为未知。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residual`
- 来源：`ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### 返回外部蒸汽供方的冷凝水（`returned_condensate`）

仅纳入实际跨越所选前景边界返回蒸汽供方的冷凝水。计量质量、温度、压力、污染及去向。厂内冷凝水回用留在转移账。核对供方返回约定及能量参考；实物返回不自动获得避免用水或热量抵扣。

- 选定流：返回外部蒸汽供方的冷凝水
- 流属性/单位：Mass / kg
- 数量规则：同一时期的实测实物数量除以验收净混合酸产量；保留未分配总量。证据证明不存在时可记零；缺少证据为未知。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steam`
- 来源：`ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

##### 废物流

###### 脂肪酸蒸馏废重残余（`heavy_waste`）

仅处置的蒸馏重残余跨越本边界。测量湿质量、残留酸、甘油酯、碳及处理去向；内部再次水解的残余不是外部废物。不与 heavy_coproduct 重复计量。

- 选定流：脂肪酸蒸馏废重残余
- 流属性/单位：Mass / kg
- 数量规则：同一时期的实测实物数量除以验收净混合酸产量；保留未分配总量。证据证明不存在时可记零；缺少证据为未知。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residual`
- 来源：`ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### 脂肪酸蒸馏轻组分冷凝废液（`light_ends`）

计量捕集的轻组分冷凝液及实际水/有机组成和处置接收方。捕集冷凝液不是空气排放。若销售，应增加独立审查的产品去向，不作废物抵扣。

- 选定流：脂肪酸蒸馏轻组分冷凝废液
- 流属性/单位：Mass / kg
- 数量规则：同一时期的实测实物数量除以验收净混合酸产量；保留未分配总量。证据证明不存在时可记零；缺少证据为未知。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residual`
- 来源：`ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### 废弃的椰子油水解甘油甜水（`sweetwater_waste`）

仅纳入实际单独外送的废物部分；记录湿质量、甘油、水、残余油脂、污染及处理接收方。每部分仅在 sweetwater 产品、本废物交接、内部回收或实际混合的 offsite_effluent 中归属一次。混合不抹去来源或甘油账。

- 选定流：废弃的椰子油水解甘油甜水
- 流属性/单位：Mass / kg
- 数量规则：同一时期的实测实物数量除以验收净混合酸产量；保留未分配总量。证据证明不存在时可记零；缺少证据为未知。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residual`
- 来源：`ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### 外送处理的油脂水解及脂肪酸蒸馏废水（`offsite_effluent`）

已记录混合点之后的一条物理混合废水交接流，保留各组分来源记录。记录湿质量或实测体积/密度、油脂、甘油、COD、pH及接收处理。该转移中的污染物不是直接环境排放。

- 选定流：外送处理的油脂水解及脂肪酸蒸馏废水
- 流属性/单位：Mass / kg
- 数量规则：同一时期的实测实物数量除以验收净混合酸产量；保留未分配总量。证据证明不存在时可记零；缺少证据为未知。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_effluent`
- 来源：`ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### 污泥（`primary_sludge`）

仅浮选或沉降后外送的初级含油分离污泥；披露湿/干质量、油脂、残留游离酸、污染物及接收方。内部回收油脂记录为内部返回。

- 选定流：污泥 `725c8f6e-7975-4155-a250-1f95ef70c508`
- 流属性/单位：Mass / kg
- 数量规则：同一时期的实测实物数量除以验收净混合酸产量；保留未分配总量。证据证明不存在时可记零；缺少证据为未知。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residual`
- 来源：`ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### 污泥（`biological_sludge`）

仅厂内生物废水处理实际存在时：记录外送剩余生物污泥，区别于初级污泥及内部回流活性污泥；记录水分、干固体、碳、污染及接收方。

- 选定流：污泥 `725c8f6e-7975-4155-a250-1f95ef70c508`
- 流属性/单位：Mass / kg
- 数量规则：同一时期的实测实物数量除以验收净混合酸产量；保留未分配总量。证据证明不存在时可记零；缺少证据为未知。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residual`
- 来源：`ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### 废活性炭（`spent_carbon`）

仅交付接收方并跨越边界的废活性炭；称量湿质量，测定水分及吸附有机物。内部再生不构成第二条处置流。

- 选定流：废活性炭 `aff33890-3f08-40f9-9310-a7f77213de05`
- 流属性/单位：Mass / kg
- 数量规则：同一时期的实测实物数量除以验收净混合酸产量；保留未分配总量。证据证明不存在时可记零；缺少证据为未知。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residual`
- 来源：`ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

##### 基本流

###### 水蒸气（`water_vapour`）

仅冷凝器和冷却之后实际排入室外空气的水蒸气；以闭合水衡算或对应水分和气体测量获取 H2O 物种质量，另行保留完整湿气载体。干空气质量、湿排气体积及全部闪蒸汽量不等于本 H2O 交换。空气子介质未特指；已知子介质需要时应更换对应身份。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：同一时期的实测实物数量除以验收净混合酸产量；保留未分配总量。证据证明不存在时可记零；缺少证据为未知。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### 排入淡水的液态水（`water_fresh`）

仅厂内处理或已记录未污染出口向淡水排放的 H2O 物种。分别保留完整出水体积/质量、水分分数及污染物负荷。按实测 H2O 质量及声明的水密度/参考约定表达水物种体积；将完整排口体积视为纯水须证明等价。COD 需氧量不是实际溶解质量。不将外送污水管网交接再次计为直接排放，或在质量衡算中叠加载体及重叠物种总量。

- 选定流：排入淡水的液态水
- 流属性/单位：Volume / m3
- 数量规则：同一时期的实测实物数量除以验收净混合酸产量；保留未分配总量。证据证明不存在时可记零；缺少证据为未知。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_effluent`
- 来源：`ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### chemical oxygen demand（`cod_fresh`）

直接淡水排口的实测 COD 负荷，按需氧量 kg O2 当量记录，不是 kg 脂肪酸或碳。保留 COD 汇总指标，并分别列出已识别有害物质；披露 LCIA 重叠，不将重叠指标负荷相加。 天工平台未提供中文名称；保留原始英文名。

- 选定流：chemical oxygen demand `08a91e70-3ddc-11dd-97ed-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：同一时期的实测实物数量除以验收净混合酸产量；保留未分配总量。证据证明不存在时可记零；缺少证据为未知。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_effluent`
- 来源：`ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### 排入淡水的总悬浮固体（`tss_fresh`）

按同时间过滤重量法样品及排水体积计算直接淡水排口悬浮固体负荷。溶解物、油脂及污泥外送分别记录；不将固体组分质量再次加到总量。

- 选定流：排入淡水的总悬浮固体
- 流属性/单位：Mass / kg
- 数量规则：同一时期的实测实物数量除以验收净混合酸产量；保留未分配总量。证据证明不存在时可记零；缺少证据为未知。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_effluent`
- 来源：`ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### 二氧化碳（生物源）（`co2_bio`）

仅厂内椰子来源有机碳降解的实际生物源 CO2。核对实测碳转化与气体证据；排除已在供方数据集中的上游锅炉排放。无论气候核算如何处理，保留该 LCI 交换。

- 选定流：二氧化碳（生物源） `08a91e70-3ddc-11dd-9c15-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：同一时期的实测实物数量除以验收净混合酸产量；保留未分配总量。证据证明不存在时可记零；缺少证据为未知。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carbon`
- 来源：`ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### 二氧化碳（化石源）（`co2_fossil`）

仅本前景单元内已识别的化石碳转化，例如化石来源辅助材料碳降解；不因植物原料或购入能源推定正排放。实际化石碳与生物碳账分别保留。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：同一时期的实测实物数量除以验收净混合酸产量；保留未分配总量。证据证明不存在时可记零；缺少证据为未知。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carbon`
- 来源：`ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### 己酸（`hexanoic_air`）

仅捕集后室外过程排气或逸散中经化学识别的己酸（CAS 142-62-1）。筛查实际气体组成；不将该物种当作全部低分子脂肪酸气味。

- 选定流：己酸 `0c09ad1f-8a46-45e6-bb54-078a197e7e66`
- 流属性/单位：Mass / kg
- 数量规则：同一时期的实测实物数量除以验收净混合酸产量；保留未分配总量。证据证明不存在时可记零；缺少证据为未知。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### 乙醛（`acetaldehyde_air`）

仅热降解产生并实际进入室外空气、经分析识别的乙醛（CAS 75-07-0）。不以其替代一般醛类或总 VOC；其他每种实测物种须独立建行并审查。

- 选定流：乙醛 `fe0acd60-3ddc-11dd-a7a5-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：同一时期的实测实物数量除以验收净混合酸产量；保留未分配总量。证据证明不存在时可记零；缺少证据为未知。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

###### 甲烷 (生物源)（`methane_bio`）

仅生物处理或储存实际产生生物源甲烷时纳入；记录实际生成、捕集、销毁及泄漏甲烷。捕集沼气是技术圈转移，不计为空气甲烷。

- 选定流：甲烷 (生物源) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：同一时期的实测实物数量除以验收净混合酸产量；保留未分配总量。证据证明不存在时可记零；缺少证据为未知。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carbon`
- 来源：`ifc-oleochemicals-2007`; `jrc-cww-bref-2016`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| al_physical | all physical flows | 在未分配实物质量/水/碳衡算中保留实际油、水、酸、甜水、重馏分、废物及排放量。共同产出的实物输出不得乘分配份额。显式记录库存变化及内部转移。 | `jrc-cww-bref-2016`; `ifc-oleochemicals-2007` |
| al_hierarchy | shared burdens | 先细分产品特定直接计量，或为扩展系统考虑有依据的系统扩展。产品数据集的共享负荷需证明因果物理关系；尤其稀甜水不得自动按等湿质量分配。不能建立该关系时，论证时期和交付端一致的经济关系。无通用分配份额或甘油收率。 | `eu-pef-multifunctionality-2021` |
| al_receivers | sweetwater; sweetwater_waste; heavy_coproduct; heavy_waste; light_coproduct; light_ends | 按实际规格、合同及法律接收状态认定每种共产品；零价格本身不证明废物。保留甜水、头馏分及重馏分每项实际产品、废物和内部返回部分；每部分仅归属一次，并与对应实物流总量核对。甘油精制属于下游。废物处理仍链接产生路线。不假定销售、不抹去共产品、不虚设零抵扣。 | `ifc-oleochemicals-2007`; `eu-pef-multifunctionality-2021` |
| al_ledger | reported product burdens | 另设环境负荷账，保留直接归属、共享池、分配系数、合计检查及敏感性。仅内部回收不获得避免产品抵扣。按产品归一的负荷量不替代实物衡算。 | `eu-pef-multifunctionality-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | fatty_acid_unit | 参考产品 | measured_record | SKU；批次；净质量；皮重；组成；水分；游离酸；甘油酯；不皂化物；碳来源；方法/不确定性；验收；期初/期末验收库存；发运；拒收；返回 | 经校准散装净称重，或使用实测密度/温度的校准储罐/质量表计衡算。核对发运、验收库存变化、返回及拒收以确定同活动时期验收产量；不得以往期库存的不匹配发运量为当期生产投入分母。采用代表性批次采样及验证分析方法，保留色谱物种/质量基准及检测限制。 | 各行声明单位 | 逐批及连续/代表性运行时段 | 一个已声明代表性时期，含清洗/异常 | 全部纳入阶段及边界 | 每 1 kg 参考流 | 校准；样品代表性；实验室方法；库存/接收方核对；不确定性 |
| cp_material | fatty_acid_unit | 原料、溶液、活性炭及甜水 | measured_record | 流身份；批次；湿质量；浓度；水分；污染物；供方；碳来源；接收方；期初/期末库存 | 校准接收/出库计量及代表性配对样品；核对发票、库存与组成测定。甜水湿输出与甘油组分分别保留。 | 各行声明单位 | 逐批及连续/代表性运行时段 | 一个已声明代表性时期，含清洗/异常 | 全部纳入阶段及边界 | 每 1 kg 参考流 | 校准；样品代表性；实验室方法；库存/接收方核对；不确定性 |
| cp_water | fatty_acid_unit | 水投入 | measured_record | 表计；入口/出口；净补水；内部循环/回收；水质；密度；温度；溶液载水 | 各供水母管独立计量；质量换算记录密度；区分净购入、内部循环、蒸汽来源冷凝水及化学品载水。 | 各行声明单位 | 逐批及连续/代表性运行时段 | 一个已声明代表性时期，含清洗/异常 | 全部纳入阶段及边界 | 每 1 kg 参考流 | 校准；样品代表性；实验室方法；库存/接收方核对；不确定性 |
| cp_energy | fatty_acid_unit | 电力 | measured_record | 阶段电表；kWh；电压；供方；国家/区域；电网组合；损耗；运行时间；共享分摊 | 校准电表；保留阶段读数及实测共享服务归属；核验 CN 地域及 1–35 kV 消费供电兼容性，或选择另一个已核实实物身份。 | 各行声明单位 | 逐批及连续/代表性运行时段 | 一个已声明代表性时期，含清洗/异常 | 全部纳入阶段及边界 | 每 1 kg 参考流 | 校准；样品代表性；实验室方法；库存/接收方核对；不确定性 |
| cp_steam | fatty_acid_unit | 各蒸汽母管 | measured_record | 交付质量；绝压/表压；温度；干度；入口/返回焓；冷凝水质量；补水；损耗；供方 MJ 约定 | 各母管与冷凝水返回按对应时段计量；按实际状态及可追溯蒸汽物性计算；背景换算前核验供方蒸汽数量/热量边界。压力、状态或 MJ 约定未知时阻止该链接。 | 各行声明单位 | 逐批及连续/代表性运行时段 | 一个已声明代表性时期，含清洗/异常 | 全部纳入阶段及边界 | 每 1 kg 参考流 | 校准；样品代表性；实验室方法；库存/接收方核对；不确定性 |
| cp_residual | fatty_acid_unit | 重馏分、轻组分及各残余 | measured_record | 来源；湿质量；干固体；水；酸/甘油酯分数；碳；污染物；接收方；产品/废物状态；内部返回 | 每条物理不同流称量与采样，初级及生物污泥分别记录；核对出库联单与内部返回计量；记录法律接收方及规格。 | 各行声明单位 | 逐批及连续/代表性运行时段 | 一个已声明代表性时期，含清洗/异常 | 全部纳入阶段及边界 | 每 1 kg 参考流 | 校准；样品代表性；实验室方法；库存/接收方核对；不确定性 |
| cp_effluent | fatty_acid_unit | 废水及直接排水 | measured_record | 来源；混合点；污水管网/直接接收方；流量时间序列；密度；pH；COD；BOD；TOC；TSS；油脂；具体物质；实验室方法；检出限 | 排口流量与代表性样品对应，含非例行事件；入口及处理后出口分别监测。污水管网交接组成保留在废物记录；仅环境排口构成直接排放。 | 各行声明单位 | 逐批及连续/代表性运行时段 | 一个已声明代表性时期，含清洗/异常 | 全部纳入阶段及边界 | 每 1 kg 参考流 | 校准；样品代表性；实验室方法；库存/接收方核对；不确定性 |
| cp_air | fatty_acid_unit | 排气物种及蒸发 | measured_record | 源；控制后气体体积；温度/压力；湿/干基；化学物种/CAS；浓度；捕集；运行时间；检出限；失水 | 代表性控制后物种特定排气测量及有记录的逸散采样/质量衡算。无总 VOC 转物种因子；检测实际脂肪酸、醛及其他降解物。 | 各行声明单位 | 逐批及连续/代表性运行时段 | 一个已声明代表性时期，含清洗/异常 | 全部纳入阶段及边界 | 每 1 kg 参考流 | 校准；样品代表性；实验室方法；库存/接收方核对；不确定性 |
| cp_carbon | fatty_acid_unit | 碳分割及处理气体 | measured_record | 生物/化石投入碳；产品/残余碳；气体物种；生成/捕集/销毁/泄漏 CH4；CO2；库存变化；碳含量分析 | 以供方来源及实测物料/气体碳分别闭合生物/化石碳衡算；厂内处理气体监测与捕集气体计量。不从 COD 或未知酸链长推断 CO2。 | 各行声明单位 | 逐批及连续/代表性运行时段 | 一个已声明代表性时期，含清洗/异常 | 全部纳入阶段及边界 | 每 1 kg 参考流 | 校准；样品代表性；实验室方法；库存/接收方核对；不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_normalized | all inventory rows | N = sum(Q) / B；Q 为实测交换总量，B 为同一时期 cp_release 的验收净散装混合酸 kg；保留 Q、B 及独立内部数量。 | Q; B; cp_release | 每 1 kg 参考流交换数量 | `jrc-cww-bref-2016` |
| calc_component | cleaning_naoh; sweetwater; mixed_acid | component_mass = wet_mass × measured_mass_fraction；water_mass = wet_mass × measured_water_fraction。组分解释父湿流，不另作额外交换与父流相加。 | wet_mass; measured_mass_fraction; measured_water_fraction | 组分及水账 | `ifc-oleochemicals-2007` |
| calc_load | cod_fresh; tss_fresh | load_kg = sum(C_mg_per_L × V_m3 × 0.001)，按对应采样时段计算；保留污染物分析数量定义。COD 为 kg 需氧量，TSS 为 kg 干悬浮物。 | concentration; outfall_volume; cp_effluent | 实测直接排口负荷 | `jrc-cww-bref-2016` |
| calc_steam | splitting_steam; distillation_steam; returned_condensate | 蒸汽质量保持为交换基准。对间接加热器，仅时段匹配、稳态、全部入口蒸汽回收为实测返回，并有记录证明功、储能和其他热损失可忽略时，采用 heat_MJ = sum(m × (h_in − h_return)) / 1000。统一焓零点，按实际绝压、温度、相态/干度在有效区域内进行可追溯 IAPWS-IF97 计算（h 为 kJ/kg，m 为 kg）。否则须完整边界特定能量衡算，闪蒸、泄漏、排污、库存和损耗各计一次；本简式不适用于直接注入或返回质量不匹配。能量链接前核对供方参考定义；不得将总热值等同交付热量。 | matched_mass; actual_states; return_mass; actual_enthalpies; boundary_evidence; cp_steam | 有条件热量补充；实物蒸汽和冷凝水仍分别保留 | `iapws-if97-2012`; `ifc-oleochemicals-2007` |
| calc_burden | allocated environmental burdens | 产品 j 的 burden_j = directly_attributed_j + share_j × shared_pool；每个共享池份额合计为一。选用有依据经济分配时，share_j = measured_output_j × gate_price_j / sum(measured_output_k × gate_price_k)，按合同价格对应的湿或活性数量计算。实物输出不缩放。 | shared_pool; direct_attribution; measured_outputs; prices; justified_relationship | 独立分配负荷账及敏感性 | `eu-pef-multifunctionality-2021` |

### 数据质量要求

| requirement_id | Applies to | 要求 | 证据 |
| --- | --- | --- | --- |
| dq_identity | all flows | 实物身份、属性/单位与实际数量/供方兼容性独立检查；披露每个空 UUID 及开放供方，不替代为纯酸或路线不符数据集。 | 原始规格、测定及供方参考定义 |
| dq_balances | fatty_acid_unit | 闭合阶段及聚合湿质量、水、生物碳、化石碳衡算，包含库存变化、全部实际共产品、残余及直接排放；按测量不确定性报告未闭合量，不虚设容差。按实际酸/甘油酯谱和有分析支持的分子基准，分别保留物种及 C/H/O 账。水解将水消耗进入产品；一般脂肪酸身份不提供通用酸分子量、甘油收率或实测物种清单。 | 流程图、配对转移总量、实测谱、碳与组成测定 |
| dq_operations | maintenance, stocks and bulk containers | 覆盖非例行清洗及维护、声明边界处每种实际润滑剂、更换/过滤材料、装载损失及容器服务。核对复用周期、容器库存、交付内容物及皮重；完整覆盖声明前，逐项增加实际交换及其身份和实测量。排除零售包装不证明散装操作无负荷。 | 维护工单、化学品发票/测定、容器所有权/复用/清洗记录及库存账 |
| dq_coverage | all active rows | 覆盖代表性完整时期；报告缺口及检出限。缺少数据为未知，不为零。任何其他实际物种/辅助材料须增加原子行，之后才可声称数据集完整。 | 流登记及监测计划 |
| dq_sources | source applicability | 仅在声明范围内使用 IFC 行业指导及 CWW 化工监测。历史 EPA 和生产者/技术页面只支持区别；其数值案例、限值、配方及来源压力均不作默认。 | 来源章节及实际本地适用性判定 |

## 9. 校验规则

| rule_id | Applies to | 规则 | source_ids |
| --- | --- | --- | --- |
| v_identity | reference and inputs | 要求精炼椰子油、水解/蒸馏及实测混合游离酸产品，不包含排除路线。广义工业水解身份须配实际非氢化椰子谱及完整商业质量基准；原生氢化、其他原料、纯酸、酯或冲突牌号限制不能以限定信息豁免。宽分类不证明组成。 | `ifc-oleochemicals-2007`; `klk-palmera-fatty-acids` |
| v_reference | mixed_acid | 恰好一条完整参考产品输出：1 千克净混合物；双语全部清单分母及采集聚合与之相符。阶段交接为内部流。 | `jrc-cww-bref-2016` |
| v_supply | steam; electricity; solutions | 要求实际电压、蒸汽压力/状态/返回及供应参考基准，并核对溶液湿/活性/水量。供方数量约定未决时不得声称背景链接完整。 | `ifc-oleochemicals-2007` |
| v_physical | mass and allocation ledgers | 要求有全部实际输出的质量/水/碳闭合证据；内部两端相等；重产品/废物去向不重叠。分配可改变负荷份额，不能抹去实物共产品或排放。 | `jrc-cww-bref-2016`; `eu-pef-multifunctionality-2021` |
| v_emissions | all environmental releases | 区别真实物种、碳来源、当前/延迟时序及受纳介质。COD、TOC及物种清单不得形成重复影响；不以一般 VOC 替代。若存在 PM，各粒径区间不得重叠；捕集粉尘/冷凝液为废物或回收，不是另一份排放质量。实际生物 CO2 保留在 LCI。 | `jrc-cww-bref-2016`; `ifc-oleochemicals-2007` |
| v_completeness | data package | 每项启用交换需计量证据、身份裁定、供方/接收方及单位基准。遗漏实际交换、必需身份空缺、缺样、未支持换算或未知数量保持明确，阻止数据完整声明。方法已编写不等于科学批准或数据集验证。 | `jrc-cww-bref-2016` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground production dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 声明的无催化剂非氢化精炼椰子油水解/蒸馏散装等级，经实际数据与适用性检查后使用 |
| excluded_use | 全 CPC 平均；酸化油；纯化单酸；酯；其他原料；氢化；未测供方/默认配方 |
| required_metadata | SKU/组成/状态；净交付质量；供方/参考约定；碳来源；过程图；时期/场址；接收方；分配；证据及不确定性 |
| required_quality_disclosure | UUID 缺口、供方/计量缺口、碳与水衡算、遗漏范围、监测/检出覆盖及独立审核状态 |
| update_trigger | 原料、供方、组成、氢化/酯化、蒸馏切割、公用介质、接收方、计量基准或分配变化 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| ifc-oleochemicals-2007 | official_guidance | [World Bank Group/IFC, EHS Guidelines for Oleochemicals Manufacturing, 30 April 2007](https://www.ifc.org/content/dam/ifc/doc/2000/2007-oleochemicals-manufacturing-ehs-guidelines-en.pdf) | 第 1–5、10、13–14 页：行业适用范围、水/气/残余、代表性监测、水解/蒸馏及甜水分离。来源数值例及表 3 不作清单默认。 |
| jrc-cww-bref-2016 | official_guidance | [JRC, CWW BREF, 2016, JRC103096](https://publications.jrc.ec.europa.eu/repository/bitstream/JRC103096/jrc103096_cww_bref_10_2016.pdf) | 范围第 xxiii 页（PDF29），BAT2–4 第543–544 页（PDF573–574）：化工流登记、过程图及对应流量/负荷监测。不将 BAT-AEL 转清单量，不声称法律符合。 |
| klk-palmera-fatty-acids | handbook | [KLK OLEO, PALMERA Fatty Acids, publisher product page](https://www.klkoleo.com/brand/palmera-fatty-acids/) | 产品说明及蒸馏脂肪酸 → 椰子脂肪酸家族：实际在售植物混合酸路线，区别分馏酸等级。仅产品家族，不设通用组成、牌号纯度或工厂配方。 |
| desmet-oleochemicals | handbook | [Desmet, Oleochemicals, publisher technology page](https://www.desmet.com/en/biofuel/oleochemicals) | 工作原理及原料：甘油三酯/水水解、两个主要产物、蒸馏及椰子油适用性。仅设备/路线证据，不作性能或配方默认。 |
| epa-soap-fat-splitting-1974 | official_guidance | [US EPA, Soap and Detergent Manufacturing Development Document, EPA-440/1-74-018-a, April 1974](https://www.epa.gov/sites/default/files/2016-08/documents/soap-detergent-mfg_dd_1974.pdf) | 第24–26 页（PDF39–41）：历史油脂水解、甘油分离、后续酸蒸馏及皂中和区别。历史催化例、压力、收率及皂配方不作为无催化剂路线默认。 |
| eu-pef-multifunctionality-2021 | official_guidance | [European Commission, Recommendation (EU) 2021/2279, Annex I §4.5, pp.63–64](https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf) | 仅细分/系统扩展、因果物理关系及有依据替代/经济分配层级；不声称本 PCR 或未来数据集完全符合 PEF。 |
| epo-soapstock-separation-1985 | literature | [EP0160326A1，从甘油酯油皂脚获得脂肪酸产品的工艺，1985 年 11 月 6 日](https://patents.google.com/patent/EP0160326A1/en) | 发明背景：碱精炼皂脚、矿物酸酸化及分别形成的水相/乳化相/脂肪酸层；仅用于排除边界。专利工艺披露不证明通用已部署路线或配方；其数值组成及案例不作默认。 |
| iapws-if97-2012 | official_guidance | [IAPWS R7-97(2012)，水与蒸汽工业物性公式 1997 修订发布](https://iapws.org/technical-guidance/release/IF97-Rev) | 第1–4 节及各区域物性方程：可追溯的实际状态蒸汽/水焓、相态及有效性检查。热物性不确立工艺负荷、供方参考数量或通用蒸汽量。 |
| desmet-distillation | handbook | [Desmet，蒸馏与分馏，发布者技术页面](https://www.desmet.com/en/biofuel/oleochemicals/distillation-fractionation) | 定制再沸器、蒸汽/冷凝器及热回收选项说明为何须核实实际热交付配置。不确立工厂配方、性能默认或通用蒸汽加热再沸器。 |
