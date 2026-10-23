---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.civil-low-enriched-uranium-hexafluoride


language: zh-CN
sync_with: pcr.en-US.md
status: candidate

content_maturity: authored_methodology
translation_status: aligned
---

# 民用低富集六氟化铀环境核算

## 1. 范围与适用性

本PCR规定生产者交付门的一种常规低富集六氟化铀（UF6）化合物的公开民用环境核算。须有民用轻水堆燃料供货规格和分开记录的产品证据。生产者公开说明支持固态富集UF6交付状态及称重记录（`urenco-civil-product`），本稿不规定默认富集度或纯度。

排除钚、再处理铀、高富集铀、包括LEU+与HALEU的先进燃料等级、铀金属、氧化物、陶瓷、燃料芯块/棒/组件、合金、分散体及配制混合物。供货溶液不属于本固态化合物：活性溶质与载水核算须另行审核范围。天然铀输入及贫化输出与富集产品分别识别。不声称反应堆能源功能等价、避免发电抵扣或辐射剂量结论。

仅编写聚合环境输入输出及支持计量规则。浓缩/分离操作、级联配置、设备实施、材料制作、运行目标和优化不在本指导范围。公开场址总量仅支持可能的监测领域，不代表配方、生产系数或默认数量（`urenco-environment`）。不同SKU、原料历史、产品状态或边界须重新审查适用性。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.civil-low-enriched-uranium-hexafluoride |
| classification_refs | CPC 3.0:33620；narrower范围限于本件定义的产品和路线；映射接受决策由classifications/mappings/另行维护。 |
| covered_products | 生产者交付门的一种分开记录的常规民用低富集固态UF6化合物 |
| excluded_products | 钚；再处理铀；先进或高富集等级；金属、氧化物、陶瓷、合金、分散体或配制混合物；燃料组件；仅按分离功计量的浓缩服务 |
| representative_product | 有独立核实净化合物质量和供方证书的实际民用UF6验收批次 |
| production_route | 有据且获许可的民用供方；选定场址边界的聚合环境清单，不提供浓缩操作指令 |
| market_state | 声明交付容器中的固态UF6；容器皮重不计入化合物参考质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供给声明的民用UF6化合物，作为下游民用燃料制造原料 |
| How much | 1 千克验收UF6化合物净质量 |
| How well | 实际常规民用客户规格和验收批次组成；不设默认纯度或同位素富集度 |
| How long or cycle | 一次交付门；时间清单覆盖匹配的声明报告期，不是反应堆寿命 |
| reference_flow_link | civil_uf6 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | U235的富化铀及其化合物、钚及其化合物，合金、分散体、陶瓷制品及包含U235的富化铀、钚或该制品的化合物的混合物 `1fd727d2-a1bf-430d-80ba-2bfa822ea822` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 民用用途；实际SKU/批次/供方；UF6组成与杂质基准；常规验收规格；非再处理来源；固态交付；化合物净质量；皮重排除；场址/地理/时期；前景起止门；上游和废物处理覆盖；分配决定与不确定性 |

完整原生名称和注释包含富集铀化合物，未限定为仅金属，因而可为单一UF6子集提供条件身份，而非铀/钚产品组合。CPC标签不能覆盖不兼容的CAS、化学式、路线或等级。宽广记录没有实际同位素组成或当前客户等级；来源通用等级不代表已核实批次。完成数据集前须采集实际证书或计划中的合格采样证据；允许后续采集，缺失值保持未知。必需限定信息是采集义务，不是已完成核实的声称。身份匹配不证明供方数据集兼容性。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用验收的完整UF6化合物净质量，排除交付容器皮重。通过cp_product独立测量正值报告期产出D。铀千克数、U-235千克数、活度和服务分离功分别属于不同基准。 |
| separate_activity | 核素排放 | Radioactivity `93a60a56-a3c8-17da-a746-0800200c9a66` | Bq | 保留核素、介质和参考日期。已核实单位组以kBq为参考，支持Bq单位（1 Bq = 0.001 kBq）；此单位换算不代表质量/活度或剂量换算。不得由总α推算单核素活度。 |
| utility_basis | 公用工程行 | 原始参考属性 | 原始参考单位 | 电力身份采用Net calorific value/MJ（1千瓦时 = 3.6 MJ）；天然气采用Volume/m3；选定自来水采用Mass/kg。采集兼容供方基准，保留干湿、温度及压力信息，不设通用密度或热值。 |

完整交付批次净质量为参考数量。UF6质量占比和杂质须记录其完整批次分母；元素铀质量另行记录采样材料及干湿基准。同位素比例须明确以铀为分母，以及质量/原子/活度比例约定。活度保留独立核素、环境介质、采样区间和参考日期。这些数量均不能与化合物千克数、剂量、化学纯度或总铀α互代。实验室换算须有材料适用范围、方法和不确定性，不提供通用系数。以Bq采集的活度a，支持的原生参考数量为0.001 × a kBq；以kBq报告的数量换为Bq时乘1000。除以D归一化时保留原始单位和日期。

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 获许可民用场址边界接收有据天然UF6；上游开采和转化须采用兼容独立数据集 |
| starting_condition_role | 供给的上游材料，不是无负荷资源 |
| product_classification_scope | 仅为定义的CPC33620常规民用UF6子集；天然原料和贫化输出身份独立 |
| recursive_input_rule | 如投入同类别富集UF6，须作为独立实测输入并记录上游边界和来源；本天然原料路线不能静默吸收该变体 |
| upstream_dataset_requirement | 原料、公用工程和运输供方须核实材料状态、数量、地理、时期和门边界匹配；披露缺失上游覆盖 |
| disclosure | 声明场址报告期、原料来源、输出门、留存副产品、运输端点、容器覆盖、共址分配、基础设施/末端覆盖及缺失清单 |

- `civil_environment_boundary`：使用一个聚合前景环境单元，覆盖声明场址门内可归属公用工程、环境控制、储存与交付。实际生产阶段保留为独立计量采集范围，不发布技术操作指令。内部实物链接两端数量相等，仅在本单元聚合时抵消内部转移。
- `environmental_streams`：分别记录采购输入、可转移产品、送处理废物及向各环境介质的排放。放射性废物和空气/水排放须采用场址特定许可监测（`ea-nuclear-environment`）。CWW BAT2（II–III）流特征原则仅作化工环境清单类比，不移植核行业限值或许可适用性（`jrc-cww-bat2`）。
- `complete_scope`：以下卡片是具体条件基线，不是完整工厂物料表。完成数据集前须核对场址全部实际环境流与许可；每项新增燃料、购热、水源、化学品、钢瓶/外包装材料、制冷剂、废物及排放分别增列一个原子行。记录实际组成与去向。缺失、未测或未决流不得静默变为零。容器复用须有实际寿命/使用分配；既不假定无容器供货，也不假定容器配方。
- `physical_scope_register`：核对每项实际边界输入输出及期初期末库存。包括湿进气/排气及干空气/水分基准、水蒸气、液态水、冷却回水、冷凝水、水性载体、截留过滤器/污泥/污染物、退回产品及残料、包装、钢瓶/外包装、维护耗材和废物。各原子交换记录实际数量及去向，仅在核实后添加身份。内部空气/水循环不是外部输入或释放。采购运输、储存、处理和维护服务另列服务记录，其背景清单不能重复加为前景实物流。
- `energy_scope_register`：在一致报告范围内核对实测电力、各实际燃料、购热/蒸汽/冷量、外送能量及能量积累/损失。采集按时间积分的读数；只有功率记录时，须保留实测时间曲线并在真实区间积分。铭牌功率、日历小时或假定负荷率不能证明消耗量。采购公用工程负荷与场址自有直接排放分开（`urenco-environment`）。

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| civil_environment | 公开民用UF6聚合环境账 | required | 仅限所定义的获许可天然原料/常规民用产品边界 | 前景环境单元 | 每1千克参考流 |

### 过程：公开民用UF6聚合环境账（`civil_environment`）

#### 输入

##### 产品流

###### 天然原料（`natural_feed`）

仅作有据天然同位素原料的条件UF6化学身份；原生记录不证明天然组成或当前批次等级，并声明CN供货地理。须另核实际来源、组成、状态及供方地理/门边界。它不是富集参考产品。上游转化须有兼容供方数据集；排除再处理铀。

- 选定流：六氟化铀 `e0aa0856-f028-4d22-bab5-660613307174`
- 流属性/单位：Mass / kg
- 数量规则：以独立采集的可归属报告期数量除以cp_product测得的D；通过cp_feed保留原始记录。不设默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feed`
- 来源：`urenco-civil-product`

###### 用电（`electricity`）

仅适用于用户计量点1–35千伏中压电网平均供电；原生身份声明CN供货地理，不能证明非CN背景供方。计量千瓦时可按已核实单位组换算。特定电力合同须另核兼容供方；本身份不证明其发电组合。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value / MJ
- 数量规则：以独立采集的可归属报告期数量除以cp_product测得的D；通过cp_electricity保留原始记录。不设默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity`
- 来源：`urenco-environment`; `ea-nuclear-environment`

###### 辅助天然气（`natural_gas`）

有实际使用时纳入消费端辅助管道天然气，不代表纯甲烷或液化气。采集组成、温度、绝对压力、干湿基准、压缩因子和供方立方米定义；不得把次级质量系数当密度。兼容性未决时阻止背景链接。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：以独立采集的可归属报告期数量除以cp_product测得的D；通过cp_gas保留原始记录。不设默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gas`
- 来源：`urenco-environment`; `ea-nuclear-environment`

###### 供水（`supply_water`）

仅适用于实际供给场址的经处理自来水。计量体积须采用记录条件下实测或供方支持的密度换算，不设默认值。其他取水来源须另设原子行。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Mass / kg
- 数量规则：以独立采集的可归属报告期数量除以cp_product测得的D；通过cp_water保留原始记录。不设默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`urenco-environment`; `ea-nuclear-environment`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 民用验收产品（`civil_uf6`）

宽广数据库名称仅定位这一种在生产者交付门以固态验收的常规民用低富集UF6化合物，不代表钚、合金、分散体、陶瓷或任意混合物。须核对供方组成和交付门兼容性。

- 选定流：U235的富化铀及其化合物、钚及其化合物，合金、分散体、陶瓷制品及包含U235的富化铀、钚或该制品的化合物的混合物 `1fd727d2-a1bf-430d-80ba-2bfa822ea822`
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product`
- 来源：`urenco-civil-product`

###### 贫化输出（`depleted_uf6`）

有实际输出时纳入物理分开的贫化UF6。宽广化合物身份仅限UF6，排除钍、金属及氧化物。记录去向、产品或废物法律状态和留存库存。产品分类须有后续用途证据；否则另核废物身份。不得推算产量或赋予默认抵扣。在聚合场址门，此行仅记录实际外部产品转移；留在场内的材料属于期末库存。如将储存另建单元，采用实测且相等的内部链接两端，并在场址聚合时抵消一次。

- 选定流：U235的贫化铀及其化合物，钍及其化合物，合金、分散体、陶瓷制品及包含U235的贫化铀、钍或该制品的化合物的混合物 `f9e02fdf-db98-4802-9f1d-10d680f67065`
- 流属性/单位：Mass / kg
- 数量规则：以独立采集的可归属报告期数量除以cp_product测得的D；通过cp_coproduct保留原始记录。不设默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct`
- 来源：`urenco-civil-product`

##### 废物流

###### 废空气过滤器（`spent_filter`）

仅在确有该实际流时纳入；保留具体实物身份、组成、介质及接收方。UUID未决，不得替代或假定为零。

- 选定流：受铀污染的废空气过滤器
- 流属性/单位：Mass / kg
- 数量规则：以独立采集的可归属报告期数量除以cp_product测得的D；通过cp_waste保留原始记录。不设默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`urenco-environment`; `ea-nuclear-environment`

###### 场外处理废液（`wastewater`）

仅在确有该实际流时纳入；保留具体实物身份、组成、介质及接收方。UUID未决，不得替代或假定为零。

- 选定流：转交场外持证处理的含铀水性废液
- 流属性/单位：Mass / kg
- 数量规则：以独立采集的可归属报告期数量除以cp_product测得的D；通过cp_waste保留原始记录。不设默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`urenco-environment`; `ea-nuclear-environment`

##### 基本流

###### 化石CO2排放（`co2_fossil`）

仅在场址自有辅助燃烧确有化石CO2排往非城市室外空气或高烟囱时纳入。若存在生物源CO2，须另行保留。不得将购电排放再次记为场址直接排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-9c13-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：以独立采集的可归属报告期数量除以cp_product测得的D；通过cp_air保留原始记录。不设默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`urenco-environment`

###### 空气氟化氢（`hf_air`）

仅用于实测排入室外空气、子介质未特指的氟化氢。数量为分子HF质量，不是氟离子、单质氟或含氟气体总量。截留或处理物不是大气排放。

- 选定流：氟化氢 `08a91e70-3ddc-11dd-9804-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：以独立采集的可归属报告期数量除以cp_product测得的D；通过cp_air保留原始记录。不设默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`ea-nuclear-environment`; `jrc-cww-bat2`

###### 空气二氧化氮（`no2_air`）

仅在有单独物种测量时纳入排入室外空气、子介质未特指的二氧化氮。NOx总量不等于此物种；以NO2当量报告的总量须另审数量定义。排除N2O，并避免NO、NO2与NOx重复计数。

- 选定流：二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：以独立采集的可归属报告期数量除以cp_product测得的D；通过cp_air保留原始记录。不设默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`ea-nuclear-environment`; `jrc-cww-bat2`

###### 空气U-234（`u234_air`）

仅用于单独测量并排入室外空气、子介质未特指的U-234活度，不得以总α代替。

- 选定流：铀-234 `4d9a8790-3ddd-11dd-8daf-0050c2490048`
- 流属性/单位：Radioactivity / Bq
- 数量规则：以独立采集的可归属报告期数量除以cp_product测得的D；通过cp_radio保留原始记录。不设默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_radio`
- 来源：`ea-nuclear-environment`; `jrc-cww-bat2`

###### 空气U-235（`u235_air`）

仅用于单独测量并排入室外空气、子介质未特指的U-235活度，不得以总α代替。

- 选定流：铀-235 `08a91e70-3ddc-11dd-9c3c-0050c2490048`
- 流属性/单位：Radioactivity / Bq
- 数量规则：以独立采集的可归属报告期数量除以cp_product测得的D；通过cp_radio保留原始记录。不设默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_radio`
- 来源：`ea-nuclear-environment`; `jrc-cww-bat2`

###### 空气U-238（`u238_air`）

仅用于单独分析的U-238活度排入室外空气、子介质未特指。完整原生记录及相同UUID的官方JRC定义支持uranium-238和Radioactivity/kBq。官方中文展示“铀α”是更宽泛的翻译债务，不是仅限总α的限制。须有单核素分析记录、活度参考日期及不确定性，不得用总α、总铀、剂量或质量代替。后续采样是数据集义务，不代表当前已核实观测。

- 选定流：铀α `08a91e70-3ddc-11dd-9c44-0050c2490048`
- 流属性/单位：Radioactivity / Bq
- 数量规则：以独立采集的可归属报告期数量除以cp_product测得的D；通过cp_radio保留原始记录。不设默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_radio`
- 来源：`ea-nuclear-environment`; `jrc-cww-bat2`

###### 淡水U-234（`u234_water`）

仅用于单独测量且实际进入淡水的U-234活度，不在此记录转交场外废液所含活度。

- 选定流：铀-234 `fe0acd60-3ddc-11dd-ae3f-0050c2490048`
- 流属性/单位：Radioactivity / Bq
- 数量规则：以独立采集的可归属报告期数量除以cp_product测得的D；通过cp_radio保留原始记录。不设默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_radio`
- 来源：`ea-nuclear-environment`; `jrc-cww-bat2`

###### 淡水U-235（`u235_water`）

仅用于单独测量且实际进入淡水的U-235活度，不在此记录转交场外废液所含活度。

- 选定流：铀-235 `08a91e70-3ddc-11dd-9c40-0050c2490048`
- 流属性/单位：Radioactivity / Bq
- 数量规则：以独立采集的可归属报告期数量除以cp_product测得的D；通过cp_radio保留原始记录。不设默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_radio`
- 来源：`ea-nuclear-environment`; `jrc-cww-bat2`

###### 淡水U-238（`u238_water`）

仅用于单独分析的U-238活度实际进入淡水；排除场外废液转移。完整原生记录及相同UUID的官方JRC定义支持uranium-238和Radioactivity/kBq。官方中文展示“铀α”是更宽泛的翻译债务，不是仅限总α的限制。须有单核素分析记录、活度参考日期及不确定性，不得用总α、总铀、剂量或质量代替。后续采样是数据集义务，不代表当前已核实观测。

- 选定流：铀α `4d9a8790-3ddd-11dd-8db4-0050c2490048`
- 流属性/单位：Radioactivity / Bq
- 数量规则：以独立采集的可归属报告期数量除以cp_product测得的D；通过cp_radio保留原始记录。不设默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_radio`
- 来源：`ea-nuclear-environment`; `jrc-cww-bat2`

## 7. 分配与共产品处理

- `physical_and_burden_ledgers`：独立测量实物账记录原料、验收产品、贫化材料、废物、排放和库存变化。分配环境负荷前完整保留各实物联产品输出；以分配份额乘其真实质量会破坏实物账。不得由假定平衡推算产出、收率、净化损失或配方。
- `allocation_decision`：可行时以实际采集细分避免分配，与通用产品温室气体层级一致（`ghg-product-allocation`，第9章第63页）。不可分的联合负荷须有据物理因果关系；否则论证并独立审阅其他关系，包括采用时的真实经济证据。这是面向LCI的作者改编，不是核行业专属分配标准。不提供默认分配份额、分离功方程、同位素平衡或替代抵扣。
- `tails_fate`：以真实验收、所有者及接收方记录区分留存尾料、可用共产品和废物。纳入可归属储存及最终管理覆盖或披露缺失；储存不证明避免生产。留存材料是期末实物库存，不是外部产品或废物转移；生产和后续发运是不同事件。外部产品/废物转移与环境释放分别保留。
- `period_burden_carryover`：按批次保留期初期末库存及其携带环境负荷，与实物数量分账。对D计入的验收批次，核对以前期间转入负荷、本期可归属负荷以及留给未来批次的负荷。先前生产不得仅因后续发运再次计负荷；本期场址总量也不得全部分给期初库存发运。储存、共用服务和退回/返工批次须有实际范围和分配证据。结转未核对时披露缺口，不把库存当作无负荷。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | civil_environment | civil_uf6 | 称重与验收 | 批次/SKU；民用规格；证书；完整化合物毛重/皮重/净重；UF6占比/杂质基准；元素铀质量及同位素比例约定；等级核实状态；期初期末批次库存；退回；携带负荷；日期 | 校准称重及可追溯验收；排除容器皮重；核实实际化合物和来源；汇总计算：D = 声明产品门和批次群的验收UF6净产出千克数之和；排除皮重和重复验收/再发运；按携带负荷核对退回及期初期末库存；参考输出为1千克 | kg | 每验收批次 | 同一声明清单报告期 | 仅选定生产者交付门 | 每 1 kg 参考流 | 秤校准；签署验收；证书；不确定性 |
| cp_feed | civil_environment | natural_feed | 供方与接收记录 | 批次/供方；天然来源；实际UF6组成；完整化合物净质量；库存；上游门 | 独立测量接收并核对证书，无配方或默认比例；汇总计算：净可归属原料 / D；内部转移仅抵消一次 | kg | 每次接收 | 与D同一报告期 | 选定边界 | 每 1 kg 参考流 | 供方证据；可追溯秤；兼容背景 |
| cp_electricity | civil_environment | electricity | 电表记录 | 读数；时间区间及需要时的功率曲线；电压；合同/供方；地理/时期；计量覆盖；共用服务；能量回送 | 校准计量核对；核实实际供电组合和门；汇总计算：可归属供电能量 / D；仅用已核实千瓦时至MJ换算 | MJ | 计量区间 | 与D同一报告期 | 具有实际共用服务区分的场址范围 | 每 1 kg 参考流 | 电表校准；账单；共址区分 |
| cp_gas | civil_environment | natural_gas | 气表与供方记录 | 体积；温度；压力；干湿基准；组成；压缩因子；供方体积约定 | 在兼容条件下核对校准计量和供方；汇总计算：兼容且可归属供气体积 / D；不兼容定义保持未决 | m3 | 计量区间 | 与D同一报告期 | 实际辅助供气 | 每 1 kg 参考流 | 气表证书；供方数量定义 |
| cp_water | civil_environment | supply_water | 水表/接收记录 | 水源/供方；体积/质量；密度证据与条件；取水/回流/循环/库存 | 计量或称重；来源特定核对和有据换算；汇总计算：可归属供水质量 / D；内部循环不计为新增供水 | kg | 计量区间 | 与D同一报告期 | 实际供水及去向 | 每 1 kg 参考流 | 校准；密度证据；来源及去向 |
| cp_coproduct | civil_environment | depleted_uf6 | 输出和储存记录 | 完整UF6净质量；证书；实物状态；所有权；留存库存；接收方/用途；法律状态 | 独立测量输出并核对库存/接收方；不推算产出比例；汇总计算：完整实测外部产品转移 / D；场内生产及期初期末库存另行保留；负荷分配另账记录 | kg | 每次输出/库存结算 | 与D同一报告期 | 选定门及披露储存 | 每 1 kg 参考流 | 秤；证书；实际产品用途或废物状态 |
| cp_waste | civil_environment | spent_filter; wastewater | 废物转移联单 | 独立row_id；材料/水性组成；污染；核素身份/活度；质量；接收方；处理边界 | 称重或采用有据密度换算体积；逐原子流核对持证转移记录；汇总计算：每项实际流质量 / D；不扣除未测污染物 | kg | 每次转移 | 与D同一报告期 | 转移门；下游处理另行声明 | 每 1 kg 参考流 | 废物分类；联单；接收验收；分析限值 |
| cp_air | civil_environment | co2_fossil; hf_air; no2_air | 物种特定监测 | 独立物种；来源；排口；介质；数量基准；采样/流量区间；检出限；不确定性 | 验证的场址环境监测及兼容浓度/流量积分；保留原始实测总量和方法；汇总计算：每项实际物种释放质量 / D；排除内部捕集及重复汇总总量 | kg | 监测区间及报告结算 | 与D同一报告期 | 离开场址的实际排放，不是工作场所浓度 | 每 1 kg 参考流 | 实验室认可；校准监测；许可方法及不确定性 |
| cp_radio | civil_environment | u234_air; u235_air; u238_air; u234_water; u235_water; u238_water | 单核素释放监测 | 独立核素；介质/接收环境；活度；单位；参考日期；采样时间；排水体积/流量；未检出；不确定性 | 认可环境实验室方法及实测排放；单核素分析；保留时间/衰变基准及未检出处理；汇总计算：每核素/介质活度 / D；不拆分总α，不重复转移/释放 | Bq | 监测区间及报告结算 | 与D同一报告期 | 实际空气或淡水排放 | 每 1 kg 参考流 | 实验室方法；检出限；参考日期；不假定平衡 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | 所有清单行 | 实物交换 = 独立采集的边界数量 / D；保留未分配实物总量和库存变化。D是cp_product所定门/批次群的验收完整UF6产出千克数。产品环境清单另以有据可归属/分配负荷及按批次匹配的库存负荷结转除以D计算。分配后清单不能充当实物平衡，也不能缩放配对实物转移。 | cp_product；各行采集协议 | 每 1 kg 参考流 |  |
| quantity_reconciliation | 所有清单行 | 以独立记录核对完整化合物质量、水、库存和外部转移；元素铀分析、同位素比例和活度保留为独立描述信息。不设默认纯度、水分、配方、净化收率、分离功或活度至质量换算。实际换算须采用有适用范围和不确定性的验证实验室/供方方法。 | 实际秤/计量、证书及实验室记录 | 核对残差和不确定性，与分配后负荷分开 |  |
| physical_conservation | 实际边界登记 | 核对期初库存加全部外部实物输入与期末库存加全部外部实物输出，包括湿空气、水、截留材料、容器和退回。总质量与守恒元素账不能把化学反应列为源或汇。物种账可在同一范围记录有据化学形成/消耗，不编写反应配方或操作参数。保留残差和计量不确定性，不反推缺失过程数量强制闭合。 | 完整实物登记；独立数量/组成记录 | 未分配质量/元素/物种核对及明确范围 |  |
| ledger_separation | 场址、服务及产品清单 | 保留完整场址实物和能量记录、匹配内部链接两端及留存库存。服务数量、上游背景清单和分配后产品负荷分别记账并明确互相引用；避免重复计数并核对报告期/批次群覆盖。 | 计量/转移/库存记录；供方服务；分配证据 | 可追溯实物记录与独立导出的产品清单 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_gate | 产品及供方 | 核实实际单一化合物、民用规格、原料来源、产品状态及兼容完整UF6净质量基准；宽广UUID不代表通用供方或默认组成 | 批次验收及来源特定背景 |
| monitoring_scope | 全部环境流 | 审查实际许可与物理环境排口；核素和介质分别保留。化学毒性质量、放射性活度和剂量是不同数量，不虚构平衡或通用去除效果 | 场址监测计划及认可分析 |
| conditional_completeness | 全部卡片及实际新增流 | 完成数据集前记录存在/不存在/未知状态并补齐场址原子清单；未识别材料或未测释放保持未决，不是零 | 完整流登记、许可覆盖及不确定性 |
| source_limits | 外部证据 | 生产者环境报告是场址/集团证据，不是通用数量；CWW仅类比清单管理；英格兰许可语境不是全球法律或放射性证明 | 来源范围及现场记录 |

## 9. 校验规则

- `check_reference`：恰有一个富集产品输出将civil_uf6链接至1千克验收完整化合物净质量。没有明确验证换算及适用性审核，天然/贫化UF6、容器质量、含铀质量、活度和分离功不能共享此参考分母。
- `check_environment`：核对各实际原子流类型、物种、来源、介质、参考属性/单位及兼容供方。核对产品/废物/环境去向、湿空气/水、能量、包装/容器、维护、退回及库存。截留污染物与实际环境释放分别记录。不得分配实物产出质量；内部链接两端身份、属性、单位、数量和时期一致。库存携带负荷及服务/背景链接与实物守恒分开核对。
- `check_completeness`：完整数据集须有独立测量的正值D、兼容上游数据、完整实际环境流登记、来源特定核素报告、有据分配及不确定性。空UUID、未知数量基准、未处理覆盖缺口或缺失监测均为明确待决项；PCR结构检查不代表数据集完成、许可合规或独立科学批准。

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 声明的民用常规UF6供货边界前景环境清单 |
| downstream_use | secondary_dataset；仅在数据集完整性及独立适用性审查后可作background_dataset |
| allowed_use | 在声明产品、供方、门边界、数量及不确定性下的公开民用环境核算 |
| excluded_use | 浓缩/分离/制造操作指令；武器材料生产或优化；钚；排除的产品等级；反应堆剂量/安全声称；不同化学或同位素基准自动比较 |
| required_metadata | 必需限定信息；D与报告期；上游覆盖；储存及废物去向；分配证据；独立物种/介质及活度参考日期 |
| required_quality_disclosure | 已编写候选；独立审查待定；未决身份；监测/检出限；供方数量兼容性；缺失阶段及不确定性 |
| update_trigger | 产品/原料历史/状态、供方边界、环境排口、供方基准、监测方法改变或已审阅身份修正 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| urenco-civil-product | official_guidance | Urenco，Our role in nuclear fuel；https://www.urenco.com/about/nuclear-fuel-cycle ；产品交付与称重段落，2026-10-13页面快照 | 仅用于真实民用UF6交付状态与称重语境；不采用操作描述或生产数量 |
| urenco-environment | official_guidance | Urenco，Environmental Impact；https://www.urenco.com/sustainability/environmental-impact ；范围1/2/3、环境/废物监测段落，2026-10-13页面快照 | 生产者环境核算领域；企业陈述不是通用系数或产品分配数据 |
| ea-nuclear-environment | official_guidance | Environment Agency，Nuclear sites: environmental regulation；https://www.gov.uk/guidance/nuclear-sites-environmental-regulation ；环境许可及监测章节 | 英格兰核环境范围；区分放射性废物与空气/水排放，不代表全球许可或核素排放因子 |
| jrc-cww-bat2 | official_guidance | 欧盟委员会JRC，CWW BREF2016；https://publications.jrc.ec.europa.eu/repository/bitstream/JRC103096/jrc103096_cww_bref_10_2016.pdf ；BAT2（II–III），印刷543/PDF573 | 仅类比化工环境清单的流特征及污染物负荷记录；不移植核行业BAT适用性、数值限值、配方或运行化学 |
| ghg-product-allocation | standard | WRI/WBCSD，Product Life Cycle Accounting and Reporting Standard2011；https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf ；第9章表9.1–9.2，印刷63/PDF65 | 通用产品温室气体分配层级；明确限定作者对LCI的改编，不代表核方法批准 |
