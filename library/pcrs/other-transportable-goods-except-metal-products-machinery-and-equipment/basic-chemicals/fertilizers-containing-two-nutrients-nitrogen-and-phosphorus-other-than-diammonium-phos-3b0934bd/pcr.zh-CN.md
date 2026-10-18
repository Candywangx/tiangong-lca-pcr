---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.fertilizers-containing-two-nutrients-nitrogen-and-phosphorus-other-than-diammonium-phos-3b0934bd
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 湿法超磷酸管式氨化制散装液体聚磷酸铵

## 1. 范围与适用性

本PCR适用于接收湿法超磷酸（SPA），经管式反应器氨化、加水及补氨溶解、间接水冷、储存并以净质量散装出厂的水性聚磷酸铵（APP）基础肥。APP是水中缩合磷酸铵与正磷酸铵盐的混合物，不是单一纯重复单元、干聚合物或养分千克。`us-epa-app-1981`印刷80–83页/图31的历史液体路线支持此过程区别，不规定其中的案例工况或数量。

排除DAP及MAP产品、固态APP造粒/阻燃粉体、外购固体APP溶解、硝基磷酸盐/Odda生产、外购成品液体APP冷混、干混NPK、PK肥及硝酸钾。故意加入钾、硝酸盐/尿素、硫、微量元素、抑制剂、消泡剂或其他添加剂时，须先提供独立原子配料及方法扩展证据；宽泛肥料标签不构成覆盖。Simplot产品14090仅证明有商业水性NP产品，其牌号、磷分布及微量Mo不证明目标SKU无添加，也不是默认值 [`simplot-app-14090`]。

适用前须明确实际路线；纳入真实外供蒸汽及回水，不假定氨汽化无需热量。现场燃烧、制冷、冷却水化学处理、废水直接排放或厂内最终处理，均须在数据包完整前提供独立公用工程/处理及原子排放清单，不得通过改称前景边界删除。本基础路线为间接水冷、散装交付、无额外配方添加的基础肥生产；不虚构包装交换，也不漏计真实容器供应。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.fertilizers-containing-two-nutrients-nitrogen-and-phosphorus-other-than-diammonium-phos-3b0934bd |
| classification_refs | CPC 3.0 34644；建议narrower子集，须独立接受 [un-cpc3-34644] |
| covered_products | 湿法超磷酸管式氨化的水性APP基础肥，实测N、总P及磷形态分布 |
| excluded_products | DAP；MAP；固体APP；硝基磷酸盐；成品溶液冷混；NPK/PK/NK；强化配方；包装产品 |
| representative_product | 实际验收合格的无额外添加水性APP牌号，不规定统一10-34-0或11-37-0配方 |
| production_route | 接收SPA及液氨；汽化及管式反应；溶解/补氨；水冷；回收；储存；散装出厂 |
| market_state | 工厂门口供货态水性混合物净质量，不宣称作物响应或养分等效 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应声明的液体APP肥料制造产品 |
| How much | 1千克验收合格水性产品净质量 |
| How well | 声明N/P分析、正磷/聚合磷分布、游离水/杂质、密度与温度、pH、储存条件及验收规格 |
| How long or cycle | 一次工厂门口供货事件，披露实际生产及储存期间 |
| reference_flow_link | app_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 含有两种营养素的肥料：氮和磷，磷酸二铵和磷酸一铵除外 `5c3cdc47-baeb-48f6-85f0-1a603ea3c19a` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 水性APP；实际牌号/SKU；总磷和有效磷分析定义；P与P2O5当量；总氮/铵态氮；缩合磷/正磷分布及分子/组成基准；实测载水/杂质；密度/温度；pH；储存稳定性/验收；无额外配方成分；湿法SPA来源/含量；液氨供货及汽化；管式反应路线；冷却及蒸汽/回水结构；散装交付；场址/期间；供方参考数量 |

所有限定信息均须在前景数据包中声明。广义参考身份包含此严格限定的NP子集，没有相反物种、物态或路线限定，但不证明供方过程或数量基准。DAP/MAP中检出部分聚合磷，不能使其变成本产品。仅app_product为参考输出，中间阶段计量保留在同一前景单元内部。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考为供货态水性APP验收净质量1千克，含载水及溶解物种，不含运输皮重；采用cp_product采集。清单及采集均以每1千克参考流为基准。 |
| feed_solution_basis | spa_feed; ammonia_feed; process_water | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保留供货混合物总质量和实际分析值；酸中P2O5当量不是纯H3PO4质量或全部进料质量，SPA携水不增加第二笔外部水投入。 |
| nutrient_basis | app_product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 产品千克、元素P千克、P2O5当量千克及N千克不同。P2O5为分析当量，不假定有该分子；按声明原子量及实测分析定义换算，不用1减N再减P2O5推定载水。 |
| electricity_basis | electricity | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留原生参考属性；MJ = 实测千瓦时乘3.6。核实实际1–35千伏用户供电及供方基准；该属性名不把电能变为燃料热值模型。 |
| steam_basis | steam_in; condensate_return | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保留交付蒸汽质量/实测状态、回水质量/状态、损失及供方定义，可用热另按焓平衡计算，不设固定MJ/千克。状态或供方基准未知，具体数据包仍不完整。 |
| physical_ledgers | all inventory rows | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保留总质量、水、元素N/P/F、库存变化、杂质去向及反应水账；缩合/水解改变水形态时核对H/O。物理交换量与分配后负荷分别保留。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在前景入口接收湿法SPA混合物及无水液氨，声明分析值、来源、温度及库存 |
| starting_condition_role | 供前景计量使用的进料接收接口，不豁免上游负荷 |
| product_classification_scope | CPC34644中的液体APP管式路线子集，分类覆盖不证明适用性 |
| recursive_input_rule | 内部APP及回收液按配对链接保留内部；外购成品APP再加工/冷混是另一条路线，须有证据扩展，不能作为免费递归投入 |
| upstream_dataset_requirement | 按兼容的整份溶液/活性组分及物态/参考单位基准，恰好一次链接酸制造与浓缩/缩合、氨制造、公用工程及交付 |
| disclosure | 场址/期间/牌号；SPA来源及浓缩路线；原料分析；供方边界；运输；蒸汽/冷却结构；设备资本品处理；回收及外部废物/排放；库存；未匹配身份/供方基准 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | app_line | 在同一前景单元纳入接收、储存、氨汽化、管式反应、溶解/补氨、冷却、废气捕集、回收、清洗、储存及散装装车；保留阶段采样，不重复参考产品。 | us-epa-app-1981 |
| boundary_upstream | all external inputs | 接收SPA不消除其上游酸制造/浓缩负荷；不得将正磷酸或DAP/造粒数量用于此缩合酸液体路线；背景计算前匹配供方参考基准。 | us-epa-app-1981 |
| boundary_releases | app_line | 清查实际废气、逸散及废水来源、控制、组成和接收方，纳入启停及泄漏；完成前增补已发现的物种与独立公用工程/处理过程；零值或不适用须有实际运行证据。 | eu-cww-2016 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| app_line | 进料接收至液体APP散装出厂 | required | 适用的SPA管式氨化生产线 | 前景生产 | 1千克验收合格水性APP净质量 |

所有卡片均为app_line外部交换。阶段流程图须保留管式熔体、成品槽液体、冷却循环、回收液及倒罐，在链接两端数量相同。内部总循环不是新水消耗。适用数量由完整期间记录除以同一验收产品质量获得，不规定默认收率、配方或正排放量。

### 过程：液体APP生产（`app_line`）

#### 输入

##### 产品流

###### 湿法超磷酸 (`spa_feed`)

以千克计量供货态缩合磷酸混合物总量，采集总磷、P2O5当量含量、正磷/聚合磷分布、游离水、杂质、温度及来源。不得用纯H3PO4质量或名义酸浓度代替供货酸质量。

- 选定流：湿法超磷酸
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：外部实测数量除以验收产品质量，按cp_feeds保留适用条件及组成
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feeds`
- 来源：`us-epa-app-1981`；`eu-cww-2016`

###### 氨，无水，液体 (`ammonia_feed`)

记录接收的无水液氨质量、纯度、库存变化及汽化条件，并在阶段记录中保留总进料及管式反应器、成品槽之间的分流。单元内部汽化属于内部转移，不是第二笔外购氨投入。

- 选定流：氨，无水，液体 `6928be4f-282b-4448-8f2a-f8c746621303`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：外部实测数量除以验收产品质量，按cp_feeds保留适用条件及组成
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feeds`
- 来源：`us-epa-app-1981`；`eu-cww-2016`

###### 工艺用水 (`process_water`)

按用途分别计量外部供应的溶解、洗涤补充及清洗用水，再进行汇总。仅计外部新增量；原料酸携水及内部回收分别进入组分账和内部账。实际水质与供方须匹配此处理后工业用水身份。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：外部实测数量除以验收产品质量，按cp_water保留适用条件及组成
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`us-epa-app-1981`；`eu-cww-2016`

###### 冷却水 (`cooling_water`)

记录外部冷却水交付量或补充量（千克）、温度、水源及冷却结构。不得把内部总循环量计为外部消耗。区分带配对回水的外购循环冷却水与具有补水、排污、飘水和蒸发的厂内循环。

- 选定流：冷却水 `df413bba-3c03-412b-a80a-c6082b6b9b33`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：外部实测数量除以验收产品质量，按cp_water保留适用条件及组成
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`us-epa-app-1981`；`eu-cww-2016`

###### 交流电 (`electricity`)

计量进料泵、氨输送/汽化辅机、反应控制、溶解、冷却、洗涤、储存及装车的实际1–35千伏电网平均供电，含启停与清洗。保留原生净热值参考属性，MJ = 实测千瓦时乘3.6。其他电压须先核验独立身份。 此UUID的原生locationOfSupply为CN（中国）；仅用于有记录且相符的CN用户侧1–35千伏电网平均供给接口，并核对实际供方及期间。非CN供电须先另核实匹配电力流和供方，再行关联。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 单位组：`93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：外部实测数量除以验收产品质量，按cp_energy保留适用条件及组成
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`us-epa-app-1981`；`eu-cww-2016`

###### 外供工艺蒸汽 (`steam_in`)

外供蒸汽用于汽化、启动或伴热时，计量交付质量、压力（绝压/表压）、温度、干度、供方参考基准及实际回水条件。可用热另按配对焓平衡计算。广义蒸汽身份以质量为参考，未硬限压力/状态，也不提供密度、焓或背景过程。不得默认压力、千克转MJ系数或免费热服务；不适用须有缺席证据。

- 选定流：蒸汽 `7734613a-3ef2-47ce-aff0-9a1bd67906c6`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：外部实测数量除以验收产品质量，按cp_energy保留适用条件及组成
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`us-epa-app-1981`；`eu-cww-2016`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 含有两种营养素的肥料：氮和磷，磷酸二铵和磷酸一铵除外 (`app_product`)

散装出厂验收合格的水性聚磷酸铵混合物净质量为1千克，含实测载水及溶解物种。广义身份受本稿液体聚磷酸铵路线与限定信息约束。排除车辆/储罐皮重；中间熔体、成品槽液体及倒罐保留阶段记录，不增加参考输出。

- 选定流：含有两种营养素的肥料：氮和磷，磷酸二铵和磷酸一铵除外 `5c3cdc47-baeb-48f6-85f0-1a603ea3c19a`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：1 千克
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_product`
- 来源：`us-epa-app-1981`；`eu-cww-2016`

###### 冷却水 (`cooling_return`)

仅在外供冷却水返回外部公用工程时计量回水质量及出口温度，并与cooling_water配对。它是技术回流，不是独立肥料共产品。厂内闭路循环回水不构成外部交换；仍保留排污、蒸发及实际散热。

- 选定流：冷却水 `df413bba-3c03-412b-a80a-c6082b6b9b33`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：外部实测数量除以验收产品质量，按cp_water保留适用条件及组成
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`us-epa-app-1981`；`eu-cww-2016`

###### 蒸汽冷凝回水 (`condensate_return`)

使用蒸汽时计量跨边界返回的实际冷凝水及其温度、压力和污染状态。未返回冷凝水进入相应独立废物/水账。仅按供方定义处理回水负荷，不自动给予避免产品替代信用。

- 选定流：蒸汽冷凝回水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：外部实测数量除以验收产品质量，按cp_energy保留适用条件及组成
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`us-epa-app-1981`；`eu-cww-2016`

##### 废物流

###### 含磷酸铵工艺废液 (`np_purge`)

称量送往明确处理方、未回用的洗涤/清洗/泄漏回收废液，以实际湿态计量。分析氮形态、总磷、水、氟及相关杂质；组成或接收方不同须拆分。回用液留在内部账，不采用电解锰废水替代，也不假定直接排水。

- 选定流：含磷酸铵工艺废液
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：外部实测数量除以验收产品质量，按cp_wastes保留适用条件及组成
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastes`
- 来源：`us-epa-app-1981`；`eu-cww-2016`

###### 湿态磷酸铵罐底沉积物 (`settled_solids`)

以湿千克记录实际未回用的罐底/过滤沉积物，采集干固体、截留液、N/P/F及金属。区分回收产品与外送沉积物，明确接收方及接收条件，不默认作肥料利用或套用通用污泥处理。

- 选定流：湿态磷酸铵罐底沉积物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：外部实测数量除以验收产品质量，按cp_wastes保留适用条件及组成
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastes`
- 来源：`us-epa-app-1981`；`eu-cww-2016`

###### 送处理的冷却排污水 (`cooling_blowdown`)

厂内水循环存在时计量实际排污水及作为液态废物收集的飘水、组成与接收方。与氮磷工艺废液及外部无污染冷却回水区分。直接排放须补齐受纳介质的水及污染物基本流后数据包才完整。

- 选定流：送处理的冷却排污水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：外部实测数量除以验收产品质量，按cp_wastes保留适用条件及组成
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastes`
- 来源：`us-epa-app-1981`；`eu-cww-2016`

##### 基本流

###### 氨 (`ammonia_air`)

记录反应/成品槽、输送、储存、装车及逸散经控制后释放到室外空气（未特指）的NH3物种质量。浓度与气量定义及事件覆盖须兼容；以N计监测按声明的分子量比换算NH3。不得替换成铵、重复扣减内部回收或默认零排放。

- 选定流：氨 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：外部实测数量除以验收产品质量，按cp_air保留适用条件及组成
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`us-epa-app-1981`；`eu-cww-2016`

###### 氟化氢 (`hf_air`)

评估湿法酸所带氟及控制后实际HF向室外空气（未特指）的释放。仅计HF物种质量；总氟监测不能证明HF物种分配。物种未明须保留未决，不把全部氟归为HF。

- 选定流：氟化氢 `08a91e70-3ddc-11dd-9804-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：外部实测数量除以验收产品质量，按cp_air保留适用条件及组成
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`us-epa-app-1981`；`eu-cww-2016`

###### 四氟化硅 (`sif4_air`)

存在时记录实际向室外空气（未特指）释放的SiF4物种质量。所含氟与HF分别核算；总氟质量或任意HF/SiF4比例都不是物种数量，须保留实际酸液和废气物种证据。

- 选定流：四氟化硅 `fe0acd60-3ddc-11dd-a706-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：外部实测数量除以验收产品质量，按cp_air保留适用条件及组成
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`us-epa-app-1981`；`eu-cww-2016`

###### 水蒸气 (`water_vapour`)

记录向室外空气（未特指）排出的水蒸气，在水账中分别标明反应/溶解排气及冷却蒸发。排除已冷凝/内部回收及另计的液态飘水，不把全部不明质量缺口当作蒸发。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：外部实测数量除以验收产品质量，按cp_air保留适用条件及组成
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`us-epa-app-1981`；`eu-cww-2016`

###### 磷酸 (`phosphoric_acid_air`)

经化学鉴别后记录控制后向室外空气（未特指）释放的H3PO4气溶胶物种质量。不得把全部含磷气溶胶都标为正磷酸，也不得与聚磷酸铵气溶胶合并。粒径分段/总颗粒物监测用于交叉核查，不能与同一气溶胶物种质量重复累计。

- 选定流：磷酸 `0ce4546c-b005-422e-99ad-ced1c3677a27`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：外部实测数量除以验收产品质量，按cp_air保留适用条件及组成
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`us-epa-app-1981`；`eu-cww-2016`

###### 聚磷酸铵气溶胶 (`app_aerosol`)

记录控制后实际向室外空气（未特指）释放的整份湿态APP混合物液滴，含缩合及正磷酸铵盐、载水和杂质，实测湿总质量及各组分量，不用单一聚合物组分UUID代替完整湿液滴；液滴截留水进入液态气溶胶水账，不计入water_vapour。身份核实前保留此具体空UUID排放行；它不是单独酸雾、HF、总磷或任意PM粒径段。phosphoric_acid_air仅适用于整份混合物交换以外、独立识别的酸排放。保留完整液滴物理账；表征所需化学拆分须有实测组分、独立核验物种行及精确核对，不能把总液滴和其中组分质量同时计为独立排放。物种/表征缺口仍属不完整。

- 选定流：聚磷酸铵气溶胶
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：外部实测数量除以验收产品质量，按cp_air保留适用条件及组成
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`us-epa-app-1981`；`eu-cww-2016`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_physical | app_line | 保留完整未分配物理平衡、库存、回收液、产品及废物数量。内部回收既不是共产品，也不获得避免原生投入信用。每条内部链接两端均保留相同实际质量。 | eu-cww-2016; jrc-ilcd-2010 |
| allocation_single | app_product | 基础线只有一种验收APP产品，其应归属的生产、失败批次、回收及废物处理负荷均归该产品。N与P是组分，不独立分配为共产品。沉积物或废液须有真实规格、接收方和经证明功能才能讨论共产品身份。 | jrc-ilcd-2010 |
| allocation_shared | all inventory rows | 先细分物理可区分操作，直接归属实测负荷；不可分的共享负荷采用有证据的物理因果关系。无法建立时，记录与研究情境一致的经济分配，使用同期净产品数量/价格并做敏感性分析。保留总负荷且份额和为1，不设默认份额。真实独立销售物料或外供热量须在数据包完整前补齐产品、功能、接收方及负荷处理。 | jrc-ilcd-2010 |
| allocation_two_ledgers | app_line | 分配仅改变负荷账，不将产品/废物/返料实物质量乘以分配份额，不移除失败运行，不对同一冷凝水/回收同时给予回流信用和避免产品信用。供方定义的技术回流与独立共产品须区分。 | jrc-ilcd-2010 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

每项协议仅归属app_line。全部关联行最终均为每1千克参考流，但除法前必须保留原始期间总量。对同一声明产品牌号、供货状态及制造路线选取完整连续报告期间；纳入启停、失败及零产出批次、清洗、可归属的待机公用工程、返工、拒收批次、WIP和期初/期末库存等所有相关状态。真正不同产品/路线须按可追溯计量及分配区分，不得仅挑成功批次。

P为该完整期间新生成的验收产品净质量（千克）。用校准后的验收称量取得P；或以散装发货量加期末、减期初合格品库存核对，同时核对转移与退回，防止返工重复计算。保留发货及库存原数。由其他路线外购的可售产品不属于新生产P；未完成或拒收物料不属于验收产品。P为零时保留并报告全部原始活动/负荷池及WIP，不计算每千克结果。后续返工须带入有记录的来源/库存负荷，不重复计原投入，也不删除原负荷。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | app_line | app_product | 称量及产品验收 | 批次/SKU；验收净质量；拒收/返工量；发货量；期初/末合格品库存及WIP；N/P分析及定义；磷分布；水/杂质；密度/温度；pH；稳定性；放行判定 | 校准秤或独立校准的罐容/密度法，记录温度；使用适合实际基质且经验证的验收分析方法，逐批关联库存记录 | kg；质量分数；声明分析单位 | 每批及库存边界 | 含不成功运行的共同完整期间 | 同一牌号/状态/路线及实际储运装车线 | 每 1 kg 参考流 | 校准；皮重/密度证据；检验单；分析定义；完整批次表；库存核对 |
| cp_feeds | app_line | spa_feed; ammonia_feed | 接收、进料计及组成记录 | 供方/SKU；接收总量；实际入线量；期初/末库存；NH3纯度；酸总P及P2O5当量；正磷/缩合磷分布；游离水；含F/Si/金属的杂质；温度；氨分流及汽化 | 核对地磅/储罐接收、校准进料计及库存移动；以经验证供方/实验室方法取实际供货混合物样；整份混合物与组分账分别保留 | kg；质量分数；温度 | 每次接收/批次及运行状态 | 与P同一完整期间，含失败批次 | app_line接收、储存及实测加料 | 每 1 kg 参考流 | 校准；供方数量基准；基质特定分析；进料/库存核对；管式/成品槽进料分流 |
| cp_water | app_line | process_water; cooling_water; cooling_return | 水交付及循环记录 | 各用途独立水表；进/出质量或体积/密度；温度；循环结构；补水；回水；内部循环；回收水；蒸发；飘水；库存 | 读取校准边界计量；体积仅按有证据实际密度/温度换算；核对外部/内部循环量；独立计量回水及接收方 | kg；实测温度；保留原始体积 | 每计量区间及相关状态 | 与P同一完整期间，含清洗/待机及失败运行 | app_line水及实际公用工程接口 | 每 1 kg 参考流 | 仪表校准；供方水基准；循环图；水平衡；热量记录 |
| cp_energy | app_line | electricity; steam_in; condensate_return | 公用工程计量、供方定义及运行记录 | 原始千瓦时；蒸汽/冷凝水质量；绝压/表压；温度；干度；进出口状态；焓方法；供方单位/回水约定；库存；生产线与共享公用工程计量；运行状态 | 计量应归属电耗及交付/回收蒸汽水质量；取得供方背景参考定义；按可追溯汽水属性方法建立配对状态；先保留共享总量再分配 | kWh及MJ；kg；压力；温度；焓 | 每计量区间及运行状态 | 与P同一完整期间，含启动/失败/待机 | app_line含实际氨汽化、冷却及装车公用工程 | 每 1 kg 参考流 | 仪表校准；电压/供方证据；状态/焓及回水协议；分配记录 |
| cp_wastes | app_line | np_purge; settled_solids; cooling_blowdown | 废物称量、组成及转移记录 | 来源；湿质量；干固体/水；氮形态；总P；相关F/Si/金属；内部回用量；外部接收方；处理；期初/末库存；泄漏；拒收批次 | 分流称量外送废物；用基质验证方法进行代表性取样；保留转移及接收许可记录；区分回用与外送，不合并不兼容接收方 | 湿kg；干kg；质量分数；保留原始实测体积 | 每次转移及运行事件 | 与P同一完整期间，含失败/清洗残余 | app_line废物产生及外送接口 | 每 1 kg 参考流 | 校准；组成检测；接收/处理记录；回用及库存闭合 |
| cp_air | app_line | ammonia_air; hf_air; sif4_air; water_vapour; phosphoric_acid_air; app_aerosol | 废气监测、逸散及物种记录 | 物种/CAS；全物种或以N/P/F计的约定；浓度；气体积或流率；积分期间；温压；湿/干基；控制前后；运行时长；逸散；气溶胶组成/水；检出限 | 采用适合基质/物种的验证检测，在控制后取样并覆盖代表性事件；浓度与兼容气量基准匹配；另评逸散；用实际物种证据，不按假定拆分总N/P/F | kg物种；保留原始浓度/体积或流率单位 | 代表性工况测量加完整事件/时长记录 | 与P同一完整期间，含启动、失败及储存/装车 | app_line全部受控出口及逸散通道；仅无更具体介质依据时用室外空气未特指 | 每 1 kg 参考流 | 检测方法/校准；气体状态一致；工况覆盖；物种分析；检出限处理；不重复粒径/组分总量 |

上表汇总基准为最终报告分母。以下强制细则保留原始完整期间计算及全部原始总量，属于各关联协议的组成部分。

- `cp_product`: 保留完整期间P及全部库存/发货总量；仅P为正时，app_product为每1千克参考流对应1千克
- `cp_feeds`: 保留接收、消耗及库存变化；实际期间入线总量仅除以P一次，得到每1千克参考流
- `cp_water`: 保留各项原水量总数；外部交换总量仅除P一次，得到每1千克参考流，不把内部总循环除后作为新水
- `cp_energy`: 保留原始公用工程总量；千瓦时乘3.6；归属后总量仅除P一次，得到每1千克参考流；蒸汽质量与热量分开保留
- `cp_wastes`: 保留完整湿质量及组分总量；外部废物总量仅除P一次，得到每1千克参考流；内部回用不变成第二笔废物交换
- `cp_air`: 保留实测期间负荷及不确定性；浓度乘已积分的兼容气体积得到负荷，不再乘时长；浓度乘气体积流率才对时间积分；期间物种质量仅除P一次，得到每1千克参考流

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalisation | all inventory rows | a_i = Q_i / P；Q_i为归一化前完整期间实际应归属交换总量，P为同期间新生成的供货态验收APP净质量（千克）。保留接收/库存修正及原始分子；app_product为1千克。P = 0时不产生归一化结果。 | Q_i; P; 完整期间记录及库存 | 每1千克参考流交换及保留的原始总量 | eu-cww-2016 |
| mixture_components | spa_feed; ammonia_feed; app_product; np_purge; settled_solids | 组分质量 = 实际湿态/供货态总质量乘兼容的实测组分质量分数。P2O5当量按声明原子量比2 A(P) / [2 A(P) + 5 A(O)]换算元素P；不得与N一起相减推载水。游离水另行记录，未表征余量仍保留未表征。 | 实际供货质量; 基质有效分析; 声明原子量及分析定义 | 整份混合物与独立组分账 | us-epa-app-1981; simplot-app-14090 |
| reaction_water | spa_feed; app_product; np_purge; water_vapour | 缩合及水解改变分子水/物种账。例：2 H3PO4转为H4P2O7 + H2O，逆反应消耗水。仅按实际路线经验证完整组成/物种及配平反应推导净反应水；此示例不是配方、固定收率或假定链长分布。单纯NH3酸中和不支持虚构产水，COD及质量差额不能提供反应水数量。 | 实测酸/产品/废液组成; 真实磷物种及反应证据 | 有支持的净反应水及不确定性，或明确未决项 | us-epa-app-1981 |
| electricity_conversion | electricity | MJ = 实测千瓦时乘3.6，保留实际电压、用户边界及供电组合。 | 原始实测千瓦时 | MJ电力 | eu-cww-2016 |
| steam_enthalpy | steam_in; condensate_return | 分别保留交付蒸汽及冷凝回水质量；净输入热焓按输入质量乘各自状态焓之和，减去输出质量乘各自状态焓之和计算。使用同一声明基准，并在完整能量平衡中纳入实测泄漏、库存及其他换热。链接前匹配供方千克或净MJ定义，不从属性标签推净热。 | 实测质量/状态; 经验证属性方法; 边界及供方定义 | 蒸汽/回水物理账及兼容的独立热量计算 | eu-cww-2016 |
| emission_integration | ammonia_air; hf_air; sif4_air; phosphoric_acid_air; app_aerosol | 物种负荷为浓度乘兼容的已积分气体积，或浓度乘兼容体积流率后对时间积分。mg/Nm3与已积分Nm3相乘再除1000000得到千克，不再乘时长。仅实际识别物种后换算以N/P/F计的结果；独立评估的逸散仅加入一次。 | 兼容浓度及气体积/流率; 实际物种; 运行事件覆盖 | 归一化前期间物种千克 | eu-cww-2016 |
| physical_reconciliation | all inventory rows | 在全线接收/发货边界核对：接收量 = 全部发货 + 外部废物 + 排放 + 原料、WIP及合格品库存变化，并保留不确定性。在入线/验收生产边界用实际消耗进料和P，仅计相应WIP/其他变化；合格品库存变化已纳入P后不得再计。保留总质量与元素N/P/F账、有证据的水生成/消耗、游离水、水蒸气、废物截留液及真实杂质/碳去向。反应改变物种，不改变元素质量。保留不明差额及不确定性，不强配蒸发、收率或排放。 | 所有原始计量、分析、库存及内部链接记录; 反应水证据 | 两种经核对物理表达及独立负荷账 | eu-cww-2016 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | 核对完整原生名称、类型、已有CAS、路线、物态、参考属性/单位及真实介质；有正式中文baseName时逐字使用。空UUID为具体身份缺口，身份本身不证明供方兼容。 | 实际物料/SKU及接收方证据；来源/流记录 |
| dq_period | all inventory rows | 保留原始期间总量及全部相关批次/工况，含失败/零产出、启停、返工/WIP与库存；仅对正P归一化一次，零产出池保持报告但不归一化。 | 完整批次/库存表；计量时间戳；cp_product；cp_feeds |
| dq_provider | all external inputs | 区分实际需求和供方参考量，核对整份混合物与活性组分千克、交付体积与指定温压湿干约定的标准体积、电力MJ及蒸汽/回水焓。供方不匹配阻塞该具体链接，不否定有证据的未来采集。 | 供方声明；被引用数据集的数量/单位/状态及前景实测定义 |
| dq_completeness | app_line | 核查真实废物/杂质去向、气体物种、截留水、控制、输送/储存/装车及服务公用工程；不适用/零值须有肯定证据，不能来自检索失败或资料未提及；完成前扩展真实额外添加物/过程。 | 流程图；eu-cww-2016 BAT2；运行/事件记录；接收方证据 |
| dq_assets | app_line | 披露研究资本设备边界及重要性；纳入设备/周转容器时，保留真实件数/物料量及有证据服务寿命/终生产量，与每千克分摊服务当量分开，替换及寿命末期一致。不虚构机器重量、寿命或包装量，也不静默删除重要真实基础设施。 | 实际资产/维护表；实物单据；寿命吞吐量；研究范围决定 |
| dq_source | app_line | 历史EPA工况和Simplot牌号值仅为示例，不能作为默认清单量；证明实际无额外添加、SPA管式反应/散装液体路线；科学审核与方法已编写状态分开。 | us-epa-app-1981；simplot-app-14090；实际路线/配方记录 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | app_product | 恰好一种最终产品匹配1千克参考；核验水性APP子集及全部限定信息。即使宽分类或近名匹配，也拒绝DAP/MAP、固体APP及其他排除路线。 | un-cpc3-34644; us-epa-app-1981 |
| validate_quantities | all inventory rows | 要求共同完整期间、归一化前正P、仅一次除法并保留原数；比较双语基准及app_line协议归属。保留失败/零产出运行及WIP负荷，关系未知或缺供方基准时明确判为不完整。 | eu-cww-2016 |
| validate_balances | app_line | 核对全部湿质量、物种/养分定义、N/P/F、水（含有支持缩合/水解）及库存，调查不明差额；不强定收率/产水/蒸发，不重复购买载水或重复内部回流交换。 | eu-cww-2016; us-epa-app-1981 |
| validate_releases | all emissions and wastes | 核对实际物种、室外空气介质及相关接收方/控制；总氟不与HF/SiF4组分叠加，总P不与物种叠加，重叠PM粒径不与同一化学气溶胶质量叠加。直排须补受纳水及污染物流；送处理废水不是直接基本排放。 | eu-cww-2016 |
| validate_allocation | app_line | 保留完整物理量、未分配总量及独立守恒负荷账，证明共享归属和真实共产品扩展；拒绝自动废物、回收或热替代信用，以及虚构设备/包装服务量。 | jrc-ilcd-2010 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 声明水性APP基础肥制造产品数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 实际牌号/状态/路线明确，具有兼容上游/处理数据的散装液体管式APP供应 |
| excluded_use | DAP/MAP；固体APP/阻燃剂；硝基磷酸盐；成品APP冷混；强化配方；包装供应；田间施用/产量比较；通用每千克N或P等效 |
| required_metadata | 参考限定信息；实际场址/期间/路线；整份供货混合物基准；原始期间总量及正P核对；库存/返工；来源及供方状态/单位基准；冷却/蒸汽结构；物理/负荷账；接收方及设备边界 |
| required_quality_disclosure | UUID/供方/物种缺口；不确定性和平衡差额；供方定义缺口；失败/零产出期间；来源限制；分配/重要性；独立确立前科学审核待完成 |
| update_trigger | 产品配方/状态、SPA来源/缩合路线、反应/冷却/公用工程边界、供方参考基准、废物接收方变化，或新重要排放/资产寿命证据 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-34644 | official_guidance | [UNSD CPC3.0 structure, 30Jun2025](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv),34644 | 仅分类边界，不代表方法或映射已接受 |
| us-epa-app-1981 | official_guidance | [EPA-130/6-81-003, October1981](https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=910076Q8.TXT),printed80–83/Figure31 | 历史液体路线及区别，不采用数量默认值 |
| simplot-app-14090 | literature | [Simplot APP10-34-0, product14090](https://www.simplot.com/wholesale-crop-nutrition/product/14090),2026-10-15 snapshot | 仅商业水性NP状态，不证明配方/无添加或制造路线 |
| eu-cww-2016 | official_guidance | [JRC CWW BREF2016](https://publications.jrc.ec.europa.eu/repository/bitstream/JRC103096/jrc103096_cww_bref_10_2016.pdf),BAT2–4,printed543–544/PDF573–574 | 过程/流清查与监测，不提供APP因子或普适法律声明 |
| jrc-ilcd-2010 | official_guidance | [ILCD Detailed guidance, March2010](https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf),7.9.2–7.9.3,printed255–257/PDF275–277 | 归因型细分/分配，不提供默认份额或替代信用 |

### `un-cpc3-34644`

- 来源类型：官方指南（`official_guidance`）
- 参考文献：联合国统计司，CPC3.0结构，2025年6月30日，34641–34646叶，特别是34644。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv
- 用途及限制：仅支持官方分类边界。其余NP类排除DAP/MAP，不证明共享制造方法或映射已被接受。

### `us-epa-app-1981`

- 来源类型：官方指南（`official_guidance`）
- 参考文献：美国EPA，Environmental Impact Guidelines for New Source Phosphate Fertilizer Manufacturing Facilities，EPA-130/6-81-003，1981年10月，印刷80–83页Ammonium Polyphosphate Production及图31。https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=910076Q8.TXT
- 用途及限制：历史原件描述湿法SPA/无水氨液体管式反应，随后加水/补氨及间接冷却，并列出不同固体路线。仅用于物理路线和排除项，不把历史配方、工况、收率、能耗或排放因子作为通用默认值。

### `simplot-app-14090`

- 来源类型：技术资料（`literature`）
- 参考文献：J.R.Simplot，APP10-34-0 Liquid Ammonium Polyphosphate，产品14090，生产者产品描述/Analysis，2026-10-15快照。https://www.simplot.com/wholesale-crop-nutrition/product/14090
- 用途及限制：当期生产者证据证明有同时含聚合磷/正磷的商业水性NP产品。牌号、微量Mo和比例仅属该产品，不证明目标配方/无添加，也不核实其制造路线或参考供方基准。

### `eu-cww-2016`

- 来源类型：官方指南（`official_guidance`）
- 参考文献：欧盟委员会JRC，化工行业公共废水和废气处理/管理系统BREF，2016年，BAT2–4，印刷543–544页/PDF573–574页。https://publications.jrc.ec.europa.eu/repository/bitstream/JRC103096/jrc103096_cww_bref_10_2016.pdf
- 用途及限制：化工过程/流清查与监测框架，包括反应/副产物背景、流量、组成及负荷。支持本PCR前景记录要求，不是APP排放因子、普适监测频率或当前法律合规声明。

### `jrc-ilcd-2010`

- 来源类型：官方指南（`official_guidance`）
- 参考文献：欧盟委员会JRC，ILCD Handbook，General guide for Life Cycle Assessment，Detailed guidance，2010年3月第一版，7.9.2–7.9.3节，印刷255–257页/PDF275–277页。https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf
- 用途及限制：归因型多功能性、过程细分、有物理依据的分配，以及研究情境一致且有记录的后备处理。不提供APP特定份额、共产品资格或普遍替代信用。
