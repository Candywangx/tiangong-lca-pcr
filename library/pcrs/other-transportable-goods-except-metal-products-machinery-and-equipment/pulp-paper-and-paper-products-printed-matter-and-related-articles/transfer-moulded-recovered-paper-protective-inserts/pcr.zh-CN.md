---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.transfer-moulded-recovered-paper-protective-inserts
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 回收纸湿法转移模塑、烘箱干燥的未涂布防护内衬

## 1. 范围与适用性

本 PCR 覆盖外部回收废纸制未印刷、未涂布三维防护包装内衬：机械碎浆及除杂、成形模真空成形、转移至取件模、烘箱干燥、实际干裁边及出货。选定路线采用电力及/或管输天然气烘箱燃烧器、无化学药剂白水纤维分离及厂外废水处理。不有意加入黏结剂、染料、湿强树脂、涂层或工艺药剂；设备矿物润滑单独记录。须以实际记录确认各路线条件。不提供工厂数据集、配方、得率、水分目标或排放默认值。

排除纸或纸板干裁切、折叠，烟纸本、管或小卷，纸机纸张及卷筒制造，商品浆，纸浆过滤块或板，原生纤维补强，脱墨及漂白，单模厚壁制品或精密模内热压干燥制品，化学改性、印刷、涂层、层压内衬，食品接触制品及独立盒箱。蒸汽、生物质、热电联产和厂内生物污水处理需补充经审核的路线方法。用途或分类标签本身不创造独立 PCR 身份。

Didone 等区分转移模塑加烘箱干燥与模内热干燥。JRC 备浆及干后整理原件仅支持对应操作。Huhtamaki 以回收纸酒瓶保护包装提供具体材料使用例证，不证明当前场址路线。上述来源不把混合分类变为单一生产方法。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.transfer-moulded-recovered-paper-protective-inserts |
| classification_refs | CPC 3.0 32199；narrower；范围及接受裁定以 `classifications/mappings/cpc-3.0-to-pcr.yaml` 及其引用的 ADR 为准 |
| covered_products | 未印刷未涂布回收纸真空转移模塑及烘箱干燥防护包装内衬 |
| excluded_products | 干裁切纸制品；烟纸加工；过滤材料；纸张、卷筒及浆；其他模塑、干燥或化学路线；食品接触制品；独立盒箱 |
| representative_product | 设计、配料及销售水分有记录的回收纸瓶或电子产品成形缓冲内衬 |
| production_route | 到厂废纸 → 碎浆及机械除杂 → 真空成形及转移 → 烘箱干燥 → 实际裁边、检验及出货；内部白水及不合格品回用 |
| market_state | 生产者厂门按实际销售水分验收的净内衬；出货材料排除于参考质量之外 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 为声明的运输产品提供成形缓冲内衬 |
| How much | 1 千克验收净内衬 |
| How well | 声明几何形状、配合、缓冲及抗压性能与测试条件、配料、密度及厚度和实测水分；等质量本身不证明等保护性能 |
| How long or cycle | 一个报告期产量；服务比较需明确包装使用周期及等效保护 |
| reference_flow_link | `finished` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 模塑纸浆包装内衬 `75ec26b8-f2ed-4a61-8a46-0ceaf1008ace` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 场址及期间；验收净质量及皮重；销售状态湿基水分；设计、几何形状及性能测试；废纸等级、来源及杂质；实际成形、转移及烘箱路线；无有意工艺添加物；供电电压及来源、气体体积基准；水、处理及接收方；上游废物交接及分配；出货材料 |

在前景数据包声明全部必需限定信息。广义产品身份由上述实物路线及市场条件限定；其辅料用途说明不得作为遗漏验收产品质量的理由。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | Mass | kg | Q = 匹配报告期验收净内衬销售状态总质量，单位 kg。排除包装、废品及未验收库存。各行及采集聚合均采用每 1 kg 参考流。 |
| moisture_basis | 湿料及验收产品 | Mass fraction | kg/kg | 记录实际湿基水质量分数 w：水质量 = 湿质量 × w，非水质量 = 湿质量 ×（1 − w）。非水质量不自动等于干固体：以记录的方法独立测量或验证固体、溶解物和非水液态组分，相关时考虑挥发性有机物损失。归一化使用销售水分下的 Q，不用文献默认干度。 |
| quantity_compatibility | 公用工程及排放行 | 核实的行参考属性 | 核实的行参考单位 | 证明气体体积、交付电量、水质量及监测物种的供方与参考数量等效。仅身份可用不证明背景链接或换算。未知保持待定。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 按实际交付废物状态接收回收废纸；披露前期收集、分选、打包、运输及污染 |
| starting_condition_role | 前景生产厂门；上游回收及处理保持明确背景负荷链接 |
| product_classification_scope | CPC 3.0:32199; narrower |
| recursive_input_rule | 内部白水、不合格内衬及粉尘回用保持内部连接；外部回收同类别纸品保留实际交接及兼容上游数据集且计一次，不递归重复前一产品生命周期 |
| upstream_dataset_requirement | 兼容到厂废物状态、回收操作及货运；实际水、材料及公用工程交付；接收方特定厂外废水及废物处理 |
| disclosure | 实物操作及平衡、背景链接操作、无添加物证据、供应及参考基准、库存、捕集及排出部分、接收方、排除项及缺口 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_route | 生产路线 | 包括实际接收、分选、机械碎浆筛分除杂及实际机械打浆、浆池泵、成形真空、取件转移、烘箱加热风机、实际干裁边、检验、出货及辅机。通过设备及采购记录确认浆水无化学药剂路线和无排除工艺。 | didone-moulded-pulp-2017; jrc-ppb-2015 |
| boundary_recovery | 到厂废物 | 废物状态或再生含量不证明前期负荷为零。记录法律及实物交接和所采用回收分配方法；前期回收及运输在前景或供方背景计一次。分配证据缺失保持缺口。 | jrc-ppb-2015; eu-pef-allocation-2021 |
| boundary_outlets | 水、废物及空气 | 厂外处理交接是废物交换，不是受纳水体排放。选定路线不包含厂内生物处理或直接液态排放。保留无化学药剂纤维分离、排污清洗水及实际固体。空气行仅包含实际捕集后的最终室外释放；共用排气须分解来源。 | jrc-ppb-2015 |
| boundary_energy | 烘箱及公用工程 | 记录实际电力及可选管输气燃烧器。不得为同一烘箱热负荷再加购入蒸汽或热量，不由“干燥”字样推断燃料。实际其他燃料、蒸汽、热电联产、烟气处理药剂或厂内生物处理在补齐独立经审核交换及方法前不满足本限定路线。 | didone-moulded-pulp-2017; epa-gas-screening |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| p_insert | 聚合备浆、转移模塑、烘箱干燥及出货 | required | 实际记录证明限定路线 | 一个前景单元，保留分阶段实物计量 | finished: 1 kg |

实物路线：接收废纸及补充水 → 洁净浆料 → 湿成形转移内衬 → 干燥检验内衬 → 出货。备浆产生实际筛渣；成形滤液返回浆池；实际回用的边料及不合格品回碎浆。聚合单元是因为同一内衬在干燥、整理、包装间交接不构成第二产品身份。分阶段电气量、湿质量、水分、库存及通过量仍独立保留。各内部连接两端同量，包括实际湿质量、水及干物质；不创造中间物 UUID。

逐个原子行检查实际发生情况；证明不存在须有设备、材料或出口证据，记录缺失保持未知。这些行不是固定配方或必然正排放。实际出现的其他物种或材料须在数据集完整前逐个核实原子行及路线适用性。

保留实物出货账：参考内衬质量、随货 PE 薄膜及 PP 捆扎绳、各自边料、客户包装以及实际托盘或周转容器退回和库存变化。场址实际存在的托盘、可重复使用容器、维修替换件、清洁擦布、其他润滑剂或压缩空气损失，须在数据集完整前逐一核实原子交换及兼容上游或接收链接；本限定清单不支持默认数量或遗漏。固定设施处理及任何排除项须按选定研究边界独立声明。

### 过程：聚合内衬生产（`p_insert`）

#### 输入

##### 产品流

###### 交流电（`electricity`）

计量碎浆备浆、真空及压缩空气、风机、实际电烘箱加热、后整理与辅机的用户侧低压（<1 kV）电网平均供电。其他电压或供电路线须另用核实流；不得重复计入电网及电压转换服务。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 / MJ
- 数量规则：实际兼容报告期交换除以 Q kg 验收净销售状态内衬。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utility`
- 来源：`jrc-ppb-2015`

###### 气态天然气（`gas`）

仅实际存在厂内管输天然气烘箱燃烧器时纳入。记录干湿气组成、温度、压力、压缩因子及供方背景 m3 定义；不得把次级属性系数当密度。体积换算与背景基准兼容须有证据，未知保持待定。本行不代表燃气锅炉或蒸汽。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 / m3
- 数量规则：实际兼容报告期交换除以 Q kg 验收净销售状态内衬。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utility`
- 来源：`epa-gas-screening`

###### 工艺用水（`water`）

计量跨边界购入的经处理补充工艺水及仅用水清洗的用水。不再计内部循环白水，不重复计供水背景中的水资源取用。保留供方处理、质量及实测体积转质量换算。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 / kg
- 数量规则：实际兼容报告期交换除以 Q kg 验收净销售状态内衬。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`jrc-ppb-2015`

###### 聚乙烯薄膜（`film`）

仅实际使用聚乙烯出货包装薄膜时纳入，排除于产品净质量之外。核实树脂及牌号、添加物、供方和干湿质量；无塑料或包装默认百分比。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：质量 / kg
- 数量规则：实际兼容报告期交换除以 Q kg 验收净销售状态内衬。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：`didone-moulded-pulp-2017`

###### 聚丙烯捆扎绳（`twine`）

仅实际使用聚丙烯捆扎绳时纳入，不代表打包带、纤维配料或混合包装。记录供方、组成及质量。农场门口捆扎的个案用途描述不提供本厂数量或生产背景。

- 选定流：聚丙烯捆扎绳 `0f3c91d9-9f30-42ab-b5e4-0b3ce42cb0fe`
- 流属性/单位：质量 / kg
- 数量规则：实际兼容报告期交换除以 Q kg 验收净销售状态内衬。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：`didone-moulded-pulp-2017`

###### 成形线设备用矿物润滑油（`oil`）

仅轴承、传动或油润滑真空设备实际使用矿物油时纳入；识别石油来源组成及添加剂牌号，区分消耗与油槽库存。身份保持未决：带发热量限定的候选须有实际供方或规格证据证明该数值及高低位、干湿和温度基准方可采用；质量参考属性不消除该限定。全合成润滑剂为其他交换，须另核身份。

- 选定流：成形线设备用矿物润滑油
- 流属性/单位：质量 / kg
- 数量规则：实际兼容报告期交换除以 Q kg 验收净销售状态内衬。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：`didone-moulded-pulp-2017`

##### 废物流

###### 废纸（未指定）（`recovered_paper`）

外部回收的废报纸或废纸，声明等级、到厂水分、杂质及供方交接。仅实际废物状态采用该废物身份；购买的二次产品须另用兼容产品身份。本路线不含原生纤维补强、脱墨、漂白或外购成品浆。

- 选定流：废纸（未指定） `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- 流属性/单位：质量 / kg
- 数量规则：实际兼容报告期交换除以 Q kg 验收净销售状态内衬。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：`jrc-ppb-2015`

#### 输出

##### 产品流

###### 模塑纸浆包装内衬（`finished`）

按实际销售水分验收的干燥防护内衬，包含产品实际纤维、灰分及残留水。排除出货薄膜、捆扎绳、废品及未验收库存。参考数量为 1 千克。

- 选定流：模塑纸浆包装内衬 `75ec26b8-f2ed-4a61-8a46-0ceaf1008ace`
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`product_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_output`
- 来源：`didone-moulded-pulp-2017`

##### 废物流

###### 固体废物（`reject`）

以本广义工业固体废物身份记录一种实际跨厂门的混合筛分或除杂筛渣，保留纤维、塑料、金属及无机物组成、水分和接收方。分别收集的不同流须另设原子交换；洁净废纸或光学装配废弃物不得替代此混合流。

- 选定流：固体废物 `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- 流属性/单位：质量 / kg
- 数量规则：实际兼容报告期交换除以 Q kg 验收净销售状态内衬。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`jrc-ppb-2015`

###### 造纸污泥（`sludge`）

仅白水无化学药剂沉降或过滤产生的一次纤维及无机物污泥实际离厂时纳入。记录湿质量、干物质、纤维、灰分、油墨及污染物、脱水和接收条件。它不是脱墨或生物污泥；不假定其不存在或组成。

- 选定流：造纸污泥 `b48b29ab-4ead-4413-9adb-07631cd7af09`
- 流属性/单位：质量 / kg
- 数量规则：实际兼容报告期交换除以 Q kg 验收净销售状态内衬。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`jrc-ppb-2015`

###### 废液（`wastewater`）

记录送外部处理单位的实际排污及清洗废水，并声明是否先进行无化学药剂纤维分离。选定流代表未处理交接整液，包含水及非水组分；不提供默认组成、危险类别或接收处理路线。计量交接体积和记录温度下的实际整液密度；整液质量 = 体积 × 兼容密度。分别测水分、悬浮及溶解固体、COD/BOD/TSS、营养元素及污染物分析属性；COD/BOD 是氧当量指标，不是组分质量。不得用干残余物质量替代整液交换。厂门交接不是直接排放；下游负荷仅在外部处理计一次。

- 选定流：废液 `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- 流属性/单位：质量 / kg
- 数量规则：实际兼容报告期交换除以 Q kg 验收净销售状态内衬。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`jrc-ppb-2015`

###### 废纸（未指定）（`trim`）

仅实际售出或外运回收的洁净未涂布纸纤维边料及废内衬纳入。记录水分、灰分、油墨、污染状态及接收方。回碎浆的不合格品属于内部循环，不属于此外部交换。本行不是最终参考产品。

- 选定流：废纸（未指定） `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- 流属性/单位：质量 / kg
- 数量规则：实际兼容报告期交换除以 Q kg 验收净销售状态内衬。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`jrc-ppb-2015`

###### 粉尘（`dust`）

记录干后整理或搬运实际收集并外运的粉尘，保留纤维、灰分及污染状态。内部回用粉尘为内部连接；仅未捕集的最终厂界释放进入颗粒物排放。本废物身份用于收集的工业粉尘；广义名称及中英文说明不证明纸纤维组成或接收方兼容性，须有实际记录。

- 选定流：粉尘 `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- 流属性/单位：质量 / kg
- 数量规则：实际兼容报告期交换除以 Q kg 验收净销售状态内衬。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`jrc-ppb-2015`

###### 包装废物，塑料（`film_waste`）

仅实际未清洗聚乙烯出货薄膜裁切废料产生时纳入；本广义塑料包装废物身份不提供聚合物牌号或处理路线。与 PP 捆扎绳废物分开，识别牌号、清洁状态及接收路线。不得用已清洗机械回收产物替代产生状态的未清洗废料。

- 选定流：包装废物，塑料 `1cc18dac-e06b-424b-98af-b4d25043db56`
- 流属性/单位：质量 / kg
- 数量规则：实际兼容报告期交换除以 Q kg 验收净销售状态内衬。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`didone-moulded-pulp-2017`

###### 包装废物，塑料（`twine_waste`）

仅实际产生状态的 PP 捆扎绳废料产生时纳入；即使共用本广义塑料包装废物身份，也须与 PE 薄膜废物分开。记录实际聚合物组成、牌号、污染及接收操作。已指定机械回收的记录须有该路线及状态证据，不能自动作为产生状态交换。

- 选定流：包装废物，塑料 `1cc18dac-e06b-424b-98af-b4d25043db56`
- 流属性/单位：质量 / kg
- 数量规则：实际兼容报告期交换除以 Q kg 验收净销售状态内衬。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`didone-moulded-pulp-2017`

###### 废润滑油（`spent_oil`）

仅实际收集废矿物润滑油并交给声明的外部接收方时纳入。称量实际废物，记录污染、接收方及储存变化；不推断处理或回收收益。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：质量 / kg
- 数量规则：实际兼容报告期交换除以 Q kg 验收净销售状态内衬。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`didone-moulded-pulp-2017`

##### 基本流

###### 二氧化碳（化石源）（`co2f`）

管输天然气燃烧器实际化石二氧化碳，以实测负荷或基于实测气体组成、修正不完全燃烧的气体碳平衡确定，不设固定氧化比例。 仅无已确定更细子介质时使用室外空气未特指流；不得替代为室内或长期排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：实际兼容报告期交换除以 Q kg 验收净销售状态内衬。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`epa-gas-screening`

###### 二氧化碳（生物源）（`co2b`）

单独记录界定工序中纤维库存降解或纤维氧化实际释放的生物源 CO2，区别于燃料 CO2。即使温室气体指标另行处理也在 LCI 保留；不假定所有产品纤维碳均排放。 仅无已确定更细子介质时使用室外空气未特指流；不得替代为室内或长期排放。

- 选定流：二氧化碳（生物源） `08a91e70-3ddc-11dd-9c15-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：实际兼容报告期交换除以 Q kg 验收净销售状态内衬。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`didone-moulded-pulp-2017`

###### 一氧化碳（化石源）（`co`）

燃气燃烧器实际化石 CO，须证明物种质量及燃料来源。纤维来源 CO 须另用兼容生物源或未区分来源流，不用本化石记录。 仅无已确定更细子介质时使用室外空气未特指流；不得替代为室内或长期排放。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：实际兼容报告期交换除以 Q kg 验收净销售状态内衬。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`epa-gas-screening`

###### 甲烷 (化石源)（`methane`）

实际燃气不完全燃烧及厂内气体泄漏产生的化石甲烷，汇总前保留按来源分解计量。发现生物甲烷时另设流；不在此重复计天然气上游甲烷。 仅无已确定更细子介质时使用室外空气未特指流；不得替代为室内或长期排放。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：实际兼容报告期交换除以 Q kg 验收净销售状态内衬。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`epa-gas-screening`

###### 氮氧化物（`nox`）

实际 NOx 指标排除 N2O。记录监测质量为 NO2 当量还是 NO/NO2 实际质量和，使用前证明 LCI/LCIA 数量定义兼容；kg 参考不证明当量。不得再加单独 NO 或 NO2。 仅无已确定更细子介质时使用室外空气未特指流；不得替代为室内或长期排放。

- 选定流：氮氧化物 `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- 流属性/单位：质量 / kg
- 数量规则：实际兼容报告期交换除以 Q kg 验收净销售状态内衬。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`epa-gas-screening`

###### 一氧化二氮（`n2o`）

实际燃烧 N2O 分子质量，独立于 NOx。不默认锅炉因子适用于烘箱燃烧器。 仅无已确定更细子介质时使用室外空气未特指流；不得替代为室内或长期排放。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：实际兼容报告期交换除以 Q kg 验收净销售状态内衬。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`epa-gas-screening`

###### 二氧化硫（`so2`）

实际 SO2 分子质量，以匹配监测或核实气体硫平衡确定，并考虑残留硫及其他物种。无管输气默认含硫量或 SOx 转 SO2 当量。 仅无已确定更细子介质时使用室外空气未特指流；不得替代为室内或长期排放。

- 选定流：二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：实际兼容报告期交换除以 Q kg 验收净销售状态内衬。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`epa-gas-screening`

###### 颗粒物 (PM2.5)（`pm25`）

实际干燥、燃烧器及干后整理出口或无组织 PM2.5 质量；追溯来源、捕集及可凝结/可过滤测量覆盖。不得再加包含此粒径的 PM10 或总尘。 仅无已确定更细子介质时使用室外空气未特指流；不得替代为室内或长期排放。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：实际兼容报告期交换除以 Q kg 验收净销售状态内衬。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`jrc-ppb-2015`

###### 颗粒物 (PM2.5 - PM10)（`pmcoarse`）

实际 PM2.5 至 PM10 质量，按粒径直测或由匹配 PM10 减 PM2.5 得出。要求同地点、时段、干湿及采样定义；不兼容或负差值保持待定。 仅无已确定更细子介质时使用室外空气未特指流；不得替代为室内或长期排放。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：实际兼容报告期交换除以 Q kg 验收净销售状态内衬。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`jrc-ppb-2015`

###### 颗粒物（> PM10）（`pmover10`）

实际干搬运或后整理 >PM10 质量，直测或由匹配总颗粒物减 PM10 得出。三粒径段互斥；捕集或回用粉尘不属于大气排放。无锯材或造纸厂默认粉尘因子。 仅无已确定更细子介质时使用室外空气未特指流；不得替代为室内或长期排放。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：实际兼容报告期交换除以 Q kg 验收净销售状态内衬。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`jrc-ppb-2015`

###### 水蒸气（`water_vapour`）

实际烘箱干燥、库存或清洗蒸发跨大气边界的水蒸气，相关时单独识别燃烧生成水。核对工艺水、空气湿度及燃料氢贡献；不重复计冷凝水。 仅无已确定更细子介质时使用室外空气未特指流；不得替代为室内或长期排放。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：实际兼容报告期交换除以 Q kg 验收净销售状态内衬。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`didone-moulded-pulp-2017`

###### 乙酸（`acetic`）

仅实际干燥尾气化学物种分析识别乙酸（CAS 64-19-7）时纳入，不要求默认正排放或假定纸品配方。记录物种质量而非总 VOC 碳。 仅无已确定更细子介质时使用室外空气未特指流；不得替代为室内或长期排放。

- 选定流：乙酸 `08a91e70-3ddc-11dd-92c3-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：实际兼容报告期交换除以 Q kg 验收净销售状态内衬。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`didone-moulded-pulp-2017`

###### 苯（`benzene`）

仅实际燃气燃烧器或尾气物种分析识别苯（CAS 71-43-2）时纳入。核实发生及检出限；无燃气痕量组成或排放默认值。 仅无已确定更细子介质时使用室外空气未特指流；不得替代为室内或长期排放。

- 选定流：苯 `08a91e70-3ddc-11dd-9202-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：实际兼容报告期交换除以 Q kg 验收净销售状态内衬。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`epa-gas-screening`

###### 甲醛（`formaldehyde`）

仅实际燃气燃烧器或干燥尾气分析识别甲醛（CAS 50-00-0）时纳入。物种质量区别于 VOC 总碳，不设普遍发生或因子。 仅无已确定更细子介质时使用室外空气未特指流；不得替代为室内或长期排放。

- 选定流：甲醛 `08a91e70-3ddc-11dd-941b-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：实际兼容报告期交换除以 Q kg 验收净销售状态内衬。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`epa-gas-screening`

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_physical | 实物单元及输出 | 保留未分配实物账，包含到厂、湿干纤维、水、产品、废物、捕集固体、排放及库存变化。不得将联产品实物输出或内部连接一端机械乘分配份额。记录废物与有用联产品状态及接收方证据。 | eu-pef-allocation-2021 |
| allocation_burdens | 共用环境负荷 | 对归因型内衬数据集先拆分或直接计量负荷。无法实现时记录共用任务的因果实物驱动量、产品范围及期间，并核对份额和为一。经济分配须证明实物关系不适用，采用相同阶段价格及敏感性。独立保留负荷账，无默认质量份额或回收材料自动替代收益。系统扩展须另行界定多功能研究。 | eu-pef-allocation-2021 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | p_insert | finished | 生产验收记录 | 批次；设计；净及皮质量；件数；湿基水分；验收或废品状态；库存；Q | 校准秤称产品净质量，匹配验收及库存记录；件数须配设计特定实测净质量，不用文献单件重量 | kg | 每批 | 同一匹配代表报告期；记录缺失时段 | 声明内衬线及关联公用工程与出口 | 每 1 kg 参考流 | 校准、原始记录、核对、实验室 QA 及不确定性 |
| cp_material | p_insert | 投入材料 | 接收、消耗及分析 | 供方；等级及 CAS；废物交接；湿质量、水分、灰分及污染；期初期末库存；PE/PP 牌号；润滑剂状态、组成及热值基准 | 称交付及库存变化，核对实际生产领用退回；分析纤维干物质；逐材料核实供方基准 | kg | 每次交付或批次 | 同一匹配代表报告期；记录缺失时段 | 声明内衬线及关联公用工程与出口 | 每 1 kg 参考流 | 校准、原始记录、核对、实验室 QA 及不确定性 |
| cp_utility | p_insert | electricity; gas | 校准仪表及供方定义 | 阶段仪表起止；kWh；电压及交付点；气体 m3；T/P；组成；干湿基准；Z；供方背景参考条件；燃烧器配置 | 匹配边界仪表，采用分表或记录因果分配；核对供方交付及参考定义；保留气体体积并核实状态换算 | kWh; MJ; m3 | 分时仪表及账单核对 | 同一匹配代表报告期；记录缺失时段 | 声明内衬线及关联公用工程与出口 | 每 1 kg 参考流 | 校准、原始记录、核对、实验室 QA 及不确定性 |
| cp_water | p_insert | water; wastewater | 仪表、采样及交接凭证 | 补充水；循环白水；湿料；排污清洗交接；体积；温度；实测整液密度及水分；独立测量悬浮及溶解固体；浓度单位；COD/BOD/TSS/营养元素；接收方；去向及库存 | 校准仪表与记录温度下整液质量密度测量；独立水分固体分析及有代表性的流量匹配混样及接收记录；记录处理状态并证明无直接排放 | kg; m3; 记录浓度单位 | 分时流量及代表性监测 | 同一匹配代表报告期；记录缺失时段 | 声明内衬线及关联公用工程与出口 | 每 1 kg 参考流 | 校准、原始记录、核对、实验室 QA 及不确定性 |
| cp_air | p_insert | 空气基础流行 | 出口监测、气固平衡及无组织调查 | 出口及来源；物种/CAS；化石或生物来源；子介质；浓度及单位；流量时间；水分/O2/参考 T/P；捕集；PM 粒径及可过滤/可凝结；NOx 定义；检出限；不确定性 | 测有代表性的匹配浓度及排气体积，包含启停、干燥裁边无组织损失及实际泄漏；分析 VOC 物种并核对碳水；外推需运行覆盖及不确定性 | kg; 记录浓度及体积单位 | 代表监测及连续运行覆盖 | 同一匹配代表报告期；记录缺失时段 | 声明内衬线及关联公用工程与出口 | 每 1 kg 参考流 | 校准、原始记录、核对、实验室 QA 及不确定性 |
| cp_waste | p_insert | 外部废物输出 | 称量、组成及交接 | 废物流；湿质量、水分及干物质；纤维、灰、塑料、金属、油墨及油；污染；产生及回用；储存；接收方及接收处理状态 | 逐个独立处理流称量；采样实测组成及水分；核对外运、接收凭证及内部回用 | kg | 逐流逐次外运 | 同一匹配代表报告期；记录缺失时段 | 声明内衬线及关联公用工程与出口 | 每 1 kg 参考流 | 校准、原始记录、核对、实验室 QA 及不确定性 |
| cp_balance | p_insert | 实物阶段及份额 | 阶段连接及分配记录 | 接收、清洁、湿、干及验收数量；水分、灰及碳；白水及库存变化；内部连接两端；运行任务及联产品证据 | 保留分阶段未分配实物账；核对内部连接两端及实测碳水干物质；独立推导有证据负荷份额 | kg; 有证据的驱动量单位 | 匹配报告期及每次工艺变化 | 同一匹配代表报告期；记录缺失时段 | 声明内衬线及关联公用工程与出口 | 每 1 kg 参考流 | 校准、原始记录、核对、实验室 QA 及不确定性 |

全部采集协议仅在将实际兼容报告期交换除以 Q kg 验收净销售状态内衬后，才聚合为每 1 kg 参考流。保留未归一化的原始阶段、库存、循环、来源及接收记录。电力先按 3.6 MJ/kWh 将仪表 kWh 转为 MJ 再作除法；气体体积状态及背景等效须有实际证据，不设默认换算。finished 行按定义为 1 kg，cp_output 确定 Q。任何独立负荷分配前保留内部连接数量及实物输出。

### 计算规则

| rule_id | 适用对象 | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | 所有清单行 | 每 1 kg 参考流交换 = 实际兼容期间交换 / Q kg 验收净销售状态内衬。实物数量与归属环境负荷分开。 | cp_output; cp_material; cp_utility; cp_water; cp_air; cp_waste | 归一化交换 | didone-moulded-pulp-2017 |
| release_load | 空气出口记录 | 在测量时段积分匹配物种浓度 × 实际兼容排气体积，记录单位、参考条件、启停及不确定性。不同 NOx/VOC/PM 报告定义须证明等效；浓度本身不是期间质量。 | cp_air; cp_utility | 实际期间排放质量 | epa-gas-screening |
| physical_balance | 未分配库存、阶段及内部循环 | 水质量 = 湿质量 × 实测湿基水分质量分数；非水质量 = 湿质量 ×（1 − 该分数）。独立测量或验证干固体及其他非水组分账；干燥失重不必等于水分。在独立组分、水及化石/生物碳账核对投入 = 输出 + 库存变化，含实际残余物及气体、燃烧进气及氧气、空气湿度、燃烧水及不确定性。不创造灰、碳、氧化比例或数值闭合容差。 | cp_balance; cp_output; cp_material; cp_water; cp_air; cp_waste | 核对后的实物账 | jrc-ppb-2015 |

### 数据质量要求

| requirement_id | 适用对象 | requirement | evidence |
| --- | --- | --- | --- |
| dq_identity | 所有行 | 确认原子身份、名称及 CAS、硬性路线材料限定、介质子介质及参考属性单位。元数据缺陷或身份缺失保持明确；不得因邻近流能读取而替代。 | cp_material; cp_air; cp_waste |
| dq_basis | 供方及场址数量 | 要求可追溯匹配期间、仪表校准、实际干湿基准、分来源排放及供方背景兼容。未知区别于零或有证据不存在。 | cp_output; cp_utility; cp_water; cp_air |
| dq_scope | 证据及清单 | 历史文献及单个生产者仅为范围证据，不是通用配方或数量先验。记录缺失监测、记录、接收组成处理及新增实际物种；暂定方法不等于已完成工厂数据集。 | 全部采集协议 |
| dq_physical | 平衡及分配负荷 | 保留实测实物过程图及两端同量的内部连接，再建有证据的独立负荷账。结合不确定性调查残差，不任意强制闭合。 | cp_balance |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validation_reference | 参考及路线 | 必须恰好一个产品输出作为最终参考：finished = 实际销售水分下 1 kg 验收净内衬。确认接收回收废纸、成形与转移模、烘箱路线及每个排除项和限定信息。同用途、同质量或标签不证明路线兼容。 | didone-moulded-pulp-2017 |
| validation_measurement | 所有行 | 中英文参考数量、分母、聚合及公式须一致。要求属性单位链及实际供方监测数量等效；不得默认气体 m3 及 NOx kg 兼容。 | jrc-ppb-2015 |
| validation_outlets | 实物循环及排放 | 负荷分配前核对实测水及非水组分、独立验证的固体及碳；交接废水采用体积、密度及温度兼容的整液质量，不能用干固体替代。不重复计内部白水、损纸、捕集粉尘、厂外处理排放或嵌套 PM 区间。在 LCI 保留生物 CO2；N2O 独立于 NOx。VOC 总碳及 COD/BOD/TSS 分析指标不替代具体排出物种。 | jrc-ppb-2015; epa-gas-screening |
| validation_completeness | 完成的前景数据包 | 身份、实际数量、接收路线、供方参考等效、新增实际流缺失或残差无法解释时数据集不完整，不是零。报告已执行或跳过检查及全部缺口。未知或不支持计量需审查；内容检查通过不建立科学批准或 TIDAS 格式有效性。 | jrc-ppb-2015 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 限定模塑内衬的归属前景生产 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 补齐全部数据集身份、数量及背景缺口后，作为路线及设计兼容防护内衬投入 |
| excluded_use | 完整 CPC32199 覆盖、干裁纸或烟纸、食品接触或其他成形路线、通用配方、自动回收收益或等质量保护主张 |
| required_metadata | 参考限定信息、来源接收及背景引用、实际阶段实物记录、期间、归一化交换、回收方法及独立负荷分配账 |
| required_quality_disclosure | 已核实、有条件及未决身份、数量基准、遗漏范围、不确定性及残差、已执行或跳过检查及剩余缺口 |
| update_trigger | 配料废物状态、成形干燥添加物路线、能源供应、处理接收方变化，新增物种监测或解决身份基准债务 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| didone-moulded-pulp-2017 | literature | Didone et al. (2017), Moulded Pulp Manufacturing: Overview and Prospects for the Process Technology. Packaging Technology and Science 30(6), 231–249. https://doi.org/10.1002/pts.2289 ; https://backend.orbit.dtu.dk/ws/files/130393242/Moulded_Pulp_Manufacturing_Overview_and_Prospects_for_the_Process_Technology.pdf | 接受稿 §1.1（印刷 p.3/PDF p.4）、§2/2.1（印刷 p.6/PDF p.7）、§2.2 及图4（印刷 pp.7–8/PDF pp.8–9）：转移烘箱与精密热模路线区分、真空成形及机械回收纸筛分。仅技术范围，不采用历史厚度、水分、停留时间、产量或能源数值。 |
| jrc-ppb-2015 | official_guidance | JRC (2015), Best Available Techniques Reference Document for the Production of Pulp, Paper and Board. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf | §6.1.2，印刷 pp.551–554/PDF pp.589–592：机械碎浆、筛分、工艺水净化及筛渣；仅对应操作，不是模塑制品配方或再生箱板纸机布置。§7.1.10，印刷 p.670/PDF p.708：干裁切粉尘作为操作特定完整性检查，不是因子。 |
| huhtamaki-recovered-fibres | handbook | Huhtamaki, Fibers: recycled and virgin. https://www.huhtamaki.com/en/highlights/sustainability/fibers-recycled-and-virgin/ | 出版方关于消费后回收纸用于酒瓶保护包装及其他模塑包装的段落；历史生产者特定材料使用证据及原生纤维食品接触反向背景。不证明本场址成形、燃料或添加物路线及通用数量。 |
| epa-gas-screening | official_guidance | US EPA, AP-42 §1.4 Natural Gas Combustion, October 2026 disclaimer edition (footer 10/26), pp.1.4-1–1.4-3. https://www.epa.gov/sites/default/files/2020-09/documents/1.4_natural_gas_combustion.pdf | 仅采用锅炉及炉体燃烧讨论的污染物与物种筛查、源测试注意。不将锅炉排放因子、气体组成、PM 粒径断言或固定氧化比例转移至纸浆模塑烘箱燃烧器。 |
| eu-pef-allocation-2021 | official_guidance | European Commission (2021), Recommendation (EU) 2021/2279, Annex I §4.5, pp.63–64. https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | 分配层级及实物经济关系论证。本限定归因方法不采用自动替代收益或完整 PEF 循环足迹公式，不宣称 PEF 合规。 |
