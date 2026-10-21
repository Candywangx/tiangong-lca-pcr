---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.uncured-solvent-free-calendered-nr-cotton-fabric
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 无溶剂压延未硫化天然橡胶棉布

## 1. 范围与适用性

本制造方法覆盖非轮胎用途未硫化卷材：以外购完整配方固体天然橡胶混炼胶，在涂覆就绪的 100% 棉机织布单面或双面无溶剂压延覆胶，继而冷却、检验、收卷、包装、真实成品库存储存及净交付。这是边界明确的独立工业 primary 技术综合，不声称某一家供应商提供整套声明配置。NR/棉布身份、无溶剂压延技术和未硫化供货状态分别有证据。该方法有别于水性 PU 直接涂覆及生锦纶轮胎帘子布；仅改变用途不足以形成此边界。 Sources: `hubner-calender-2019`; `rosich-calender-state`; `colmant-nr-cotton`; `epa-rubber-2008`.

排除轮胎帘子布（即使覆胶）、裸布、无基材胶片、成品带、手套、服装、PVC/PU 热塑性涂层、其他橡胶或基材、胶乳浸渍、溶剂刮涂、湿法凝固、粘合底涂、厂内生胶配料混炼、硫化及部分硫化物。供方混炼胶制造和棉花种植、纺纱、织造、整理属上游。使用、报废及声明发运交接门之外的运输不在前景内。实际新增化学品、燃料、清洗或排放物种不得删去：须扩展原子清单，并在声称适用前证实实质不同路线。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.uncured-solvent-free-calendered-nr-cotton-fabric |
| classification_refs | CPC 3.0:36250; narrower |
| covered_products | 未硫化、无溶剂固体 NR 胶料覆胶的 100% 棉机织卷材，轮胎帘子布除外 |
| excluded_products | 排除轮胎帘子布（即使覆胶）、裸布、无基材胶片、成品带、手套、服装、PVC/PU 热塑性涂层、其他橡胶或基材、胶乳浸渍、溶剂刮涂、湿法凝固、粘合底涂、厂内生胶配料混炼、硫化及部分硫化物。供方混炼胶制造和棉花种植、纺纱、织造、整理属上游。使用、报废及声明发运交接门之外的运输不在前景内。实际新增化学品、燃料、清洗或排放物种不得删去：须扩展原子清单，并在声称适用前证实实质不同路线。 |
| representative_product | 无溶剂压延未硫化天然橡胶棉布 |
| production_route | 外购完整 NR 混炼胶 -> 热炼 -> 在就绪棉布压延覆胶 -> 冷却 -> 检验裁边收卷 -> 质量放行 P -> 实际仓储包装 -> 净交付 Q |
| market_state | 声明发运交接门的未硫化复合布卷，水分状态可测，不声称使用寿命 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 供应供后续加工的非轮胎未硫化橡胶化棉布 |
| How much | 实际净验收交付整份复合布 1 kg |
| How well | 声明棉组织、完整 NR 胶料、覆胶面数和附着量、尺寸、水分及未硫化状态验收；不建立成品功能等价 |
| How long or cycle | 一个声明交付报告期间及期初末库存历史，不设使用寿命 |
| reference_flow_link | delivered_fabric |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 涂胶的织物，轮胎帘子布除外 `994a7636-5769-4127-ba3c-2e50b1d84f6a` |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | NR 混炼胶牌号、完整配方及供货状态; 100% 棉机织结构及供货整理状态; 覆胶面数、胶料附着量、总厚度及面密度; 实际未硫化状态及验收标准; 水分测量及复合布净重程序; 场址、期间、公用工程技术及供应地理; 期初末在制品及成品库存与结转负荷; 净交付门、唯一布卷或批群 ID、退货及再次交付; 衬膜、卷芯、外膜、带及真实仓储发运覆盖; 废物接收方、空气排放物种及实际治理 |

数据包须声明每一项限定。Q 是净交付，不是新增放行 P、干胶、纯纤维、发票毛重或平方米。供货复合布含全部保留配方及实测水分，可分离包装另记。原生成品状态不代表硫化。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用 cp_dispatch 称量验收交付整卷，扣实测可分离衬膜、卷芯、外膜和带的皮重并核退货。须同牌号、状态和批群；P 为独立放行台账。 |
| composition_mass | all inventory rows | Mass | kg | 保留整份供货胶料和布的质量。分析胶体、填料、配合剂、棉和水分为守恒子账，不重复采购。面积记录采用实际同状态面积乘 kg/m2，不以干质量替代湿质量。 |
| utility_units | all inventory rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 电力原始 kWh 按精确 3.6 MJ/kWh 换算。蒸汽热为实测质量乘实际状态进出口焓差，不重复燃料。积分体积不再乘时间，只有速率乘持续时间。密度独立实测，绝不用次级流属性系数。 |
| stock_basis | all inventory rows | Mass | kg | 采用实际交付 Q>0。保留原料、在制及成品期初末质量和结转负荷。未交库存不是 Q，退回再验收不造新输出。抵消内部工序交接，并仅以 calc_normalise 归一一次。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 接收供方完整固体未硫化 NR 混炼胶及完成前序整理的涂覆就绪棉布，不在厂内制胶乳溶液或生胶配料混炼 |
| starting_condition_role | upstream product input |
| product_classification_scope | 狭义非轮胎未硫化 NR/棉压延布子集，不覆盖整 CPC 叶类 |
| recursive_input_rule | 已覆胶外购布是一个真实上游复合输入，不作裸棉布，也不递归重建内含覆胶。仅购布复卷不属于本制造路线。对应并抵消内部胶条、幅材和放行卷交接。 |
| upstream_dataset_requirement | 关联有代表性的混炼胶全部原料及混炼、棉种植纺纱织造整理、能水、各包装和外部废物处理供应。完整供货配方不意味着前景以纯 NR 开始。 |
| disclosure | 声明真实场址、路线、公用工程、交接门、继承库存负荷、处理去向、进厂运输覆盖及上游数据缺口。仅前景结果不是完整摇篮到大门。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_stages | all processes | 纳入真实热炼、压延冷却、检验裁边收卷、仓储包装、发运准备、失败零产出批、待机开停机、退货返工及治理。实际燃料、化学品或确认排放物种须有独立卡片和证据。 | `hubner-calender-2019`; `epa-rubber-2008` |
| boundary_uncured | all processes | 本路线止于任何主动硫化之前。机械贴合或物理失水不能证明硫化。实际需要的底涂、溶剂或胶乳施涂、反应及硫化须独立证据扩展，不得删除其负荷以套本范围。 | `rosich-calender-state` |
| boundary_waste | waste outputs | 液态排污和固废在有记录处理交接门离厂，保留真实含水及物种。场外处理关联一次，不再作直接基本流排放。直接排放或厂内处理须完整独立清单。 |  |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| warmup | 胶料接收与热炼 | required | 真实声明制造批群，保留所有交换及匹配库存 | 前景制造 | per 1 kg reference flow |
| calender | 压延覆胶与冷却 | required | 真实声明制造批群，保留所有交换及匹配库存 | 前景制造 | per 1 kg reference flow |
| finish | 检验裁边与放行 | required | 真实声明制造批群，保留所有交换及匹配库存 | 前景制造 | per 1 kg reference flow |
| dispatch | 成品库存储存、包装与净交付 | required | 真实声明制造批群，保留所有交换及匹配库存 | 前景制造 | per 1 kg reference flow |

所有卡片共用最终交付复合布分母。内部交接在工序平衡中保留，合并时抵消；released_roll 与 delivered_fabric 真实共用原生 UUID。仅 delivered_fabric 是参考。库存变化是台账状态，不是额外产品出口。实际清洗事件须逐项增加外购清洗剂、水、污染擦拭物及废水；缺项必须由有记录的干式清洁或无消耗观察证实，不得将缺记录作不存在。

### 过程：胶料接收与热炼 (`warmup`)

#### 输入

##### 产品流

###### 完整配方未硫化天然橡胶混炼胶 (`nr_compound`)

一种外购固体 NR 基压延混炼胶，含实际填料、硫化配合剂、加工助剂、残余水分和挥发物。必须取得供货配方或分析及整份接收质量；组分子账不得重复记为采购。不推定为胶乳、胶液、轮胎专用或输送带专用牌号。

- 选定流：完整配方未硫化天然橡胶混炼胶
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q; cp_warmup; 同一次报告操作。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_warmup
- 来源：`hubner-calender-2019`; `epa-rubber-2008`

###### 热炼机用电 (`warmup_power`)

计量驱动、热炼、局部抽风及归属的开停机、待机和返工用电，与下游电表覆盖范围分开。不声明电力 UUID 或国家组合。

- 选定流：热炼机用电
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：A_i / Q; cp_warmup; 同一次报告操作。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_warmup
- 来源：

###### 矿物润滑油 (`lubricating_oil`)

实际补入设备的矿物润滑油；采集补加和期初末油库存，含设备内存油。其他润滑剂须另设原子行。

- 选定流：矿物润滑油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q; cp_warmup; 同一次报告操作。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_warmup
- 来源：

#### 输出

##### 产品流

###### 热炼未硫化天然橡胶胶条 (`warm_compound`)

向压延工序内部交接固体胶条，实测质量和温度；热炼不等于硫化。场址合并时抵消对应输入，保留损失和能耗。

- 选定流：热炼未硫化天然橡胶胶条
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q; cp_warmup; 同一次报告操作。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_warmup
- 来源：`epa-rubber-2008`

##### 废物流

###### 未硫化 NR 胶料废料 (`compound_reject`)

分别称量交外部处理的纯胶料废料。内部回用边料为转移，不是再次采购、输出抵扣或新增验收产品。

- 选定流：未硫化 NR 胶料废料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q; cp_warmup; 同一次报告操作。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_warmup
- 来源：

###### 废矿物润滑油 (`spent_oil`)

实际排出并交有记录外部接收方的废油，与设备存油和污染擦拭固体分开。

- 选定流：废矿物润滑油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q; cp_warmup; 同一次报告操作。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_warmup
- 来源：

### 过程：压延覆胶与冷却 (`calender`)

#### 输入

##### 产品流

###### 热炼未硫化天然橡胶胶条 (`compound_feed`)

与 warm_compound 对应的内部交接，不在本工序重复计入混炼胶上游生产。

- 选定流：热炼未硫化天然橡胶胶条
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q; cp_calender; 同一次报告操作。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_calender
- 来源：`epa-rubber-2008`

###### 涂覆就绪棉机织物 (`cotton_web`)

外购 100% 棉机织布，记录实际组织、整理状态、水分和面密度。先前退浆、精练和干燥属于其上游供应。不假定厂内底涂或浸胶；实际需要的粘合处理必须另建清单并在使用前复核。

- 选定流：涂覆就绪棉机织物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q; cp_calender; 同一次报告操作。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_calender
- 来源：`colmant-nr-cotton`

###### 压延机用电 (`calender_power`)

在不重叠的覆盖范围计量压延辊、冷却泵、抽风、实际电辅助加热和压缩空气制备用电；同一压缩机不得再计外购压缩空气。

- 选定流：压延机用电
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：A_i / Q; cp_calender; 同一次报告操作。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_calender
- 来源：

###### 外购蒸汽热 (`steam_heat`)

有实际使用时纳入热炼和压延辊的外购间接蒸汽供热。以物理子账记录蒸汽质量、状态、进出口焓和冷凝水去向，报告净传热 MJ。不得将同一蒸汽再作为水采购，也不得重复锅炉燃料或背景排放。

- 选定流：外购蒸汽热
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：A_i / Q; cp_utilities; 同一次报告操作。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_utilities
- 来源：

###### 外供冷却补水 (`cooling_makeup`)

进入冷却回路的新鲜外供补水，不是循环总流量。称量或以独立实测实际状态水密度换算体积。

- 选定流：外供冷却补水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q; cp_utilities; 同一次报告操作。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_utilities
- 来源：

###### 活性炭 (`activated_carbon`)

仅当实际活性炭吸附装置处理热炼或压延废气时使用；测量新炭更换量和炭床存量。不虚构溶剂回收或治理效率。

- 选定流：活性炭
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q; cp_utilities; 同一次报告操作。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_utilities
- 来源：

#### 输出

##### 产品流

###### 未硫化 NR 覆胶棉布幅材 (`coated_web`)

固体混炼胶单面或双面覆胶后尚未检验的内部复合幅材。保留整份胶料、棉体和水分，不声称胶液干燥、胶乳凝固或硫化收率。

- 选定流：未硫化 NR 覆胶棉布幅材
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q; cp_calender; 同一次报告操作。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_calender
- 来源：`hubner-calender-2019`; `epa-rubber-2008`

###### 回供汽方蒸汽冷凝水 (`steam_condensate`)

仅记录实际跨供应商边界返还的冷凝水；质量和状态独立于净供热记录。属于公用工程回流，不自动获得替代产品抵扣。

- 选定流：回供汽方蒸汽冷凝水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q; cp_utilities; 同一次报告操作。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_utilities
- 来源：

##### 废物流

###### 冷却回路排污水 (`cooling_blowdown`)

实际交场外处理的液态排污水，报告污染物和接收方；不是直接入河的基本流排放。

- 选定流：冷却回路排污水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q; cp_utilities; 同一次报告操作。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_utilities
- 来源：

###### 废气吸附废活性炭 (`spent_carbon`)

仅在实际吸附装置存在时纳入；保留实际吸附物种、水分和处理路径，不抵扣未经证实的溶剂回收。

- 选定流：废气吸附废活性炭
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q; cp_utilities; 同一次报告操作。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_utilities
- 来源：

##### 基本流

###### 排入空气的水蒸气 (`evaporated_water`)

实测冷却蒸发和物理失水，与液态排污分开。本未硫化固体胶料路线不假定净反应生成水。

- 选定流：排入空气的水蒸气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q; cp_utilities; 同一次报告操作。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_utilities
- 来源：

###### 排入空气的甲苯 (`toluene_air`)

有实测残留组分释放时纳入热炼和压延治理后排放，并按发生工序采样。无溶剂施涂不证明残余挥发物为零。两工序原始排放覆盖分开，不将 EPA 轮胎或氯丁胶因子移用到 NR 棉布。

- 选定流：排入空气的甲苯
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q; cp_emissions; 同一次报告操作。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_emissions
- 来源：`epa-rubber-2008`

###### 排入空气的苯 (`benzene_air`)

有实际胶料和操作的分物种实测释放时纳入，不以通用 VOC 或质量平衡残差替代。介质为空气，保留检出和定量限。

- 选定流：排入空气的苯
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q; cp_emissions; 同一次报告操作。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_emissions
- 来源：`epa-rubber-2008`

### 过程：检验裁边与放行 (`finish`)

#### 输入

##### 产品流

###### 未硫化 NR 覆胶棉布幅材 (`inspection_feed`)

与 coated_web 对应，进入检验、裁边和收卷，保留不合格长度、样品和返工。

- 选定流：未硫化 NR 覆胶棉布幅材
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q; cp_finish; 同一次报告操作。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_finish
- 来源：

###### 检验收卷用电 (`finish_power`)

实际检验、裁边、收卷及归属的放行前储存和搬运用电。

- 选定流：检验收卷用电
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：A_i / Q; cp_finish; 同一次报告操作。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_finish
- 来源：

###### 聚乙烯薄膜 (`interleaf`)

一种实际防粘 PE 隔离膜，分别称量可分离衬膜并从复合布质量扣除。原生身份为工厂生产混合、PE、CAS 9002-88-4、质量；未指定供货地区、牌号或离型涂层。原生箱包分类与 PE 薄膜身份不一致，作为元数据债务披露。硅涂层或其他复合衬膜须另核身份。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q; cp_finish; 同一次报告操作。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_finish
- 来源：

###### 圆纸筒 (`winding_core`)

一种纸板卷芯；原生产品身份为工厂生产混合，未指定地理、牌号或处理路线，采用质量。实测皮重、供货结构和真实复用次数；不得替换为宽泛包装占位或钢芯。

- 选定流：圆纸筒 `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q; cp_finish; 同一次报告操作。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_finish
- 来源：

#### 输出

##### 产品流

###### 涂胶的织物，轮胎帘子布除外 (`released_roll`)

内部质量放行的未硫化 NR/棉布卷，实测为 P，不是终端交付 Q。原生身份为已制造成品、工厂生产混合、产品流、质量；未指定地理、CAS、配方、棉比例或硫化状态。仅选声明的非轮胎 NR/棉布子集，须独立限定真实状态和供应方。与仓库对应输入抵消，绝不相加 P 与交付 Q。

- 选定流：涂胶的织物，轮胎帘子布除外 `994a7636-5769-4127-ba3c-2e50b1d84f6a`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q; cp_finish; 同一次报告操作。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_finish
- 来源：`rosich-calender-state`

##### 废物流

###### 未硫化 NR 覆胶棉布废料 (`composite_reject`)

实际交处理的复合裁边、不合格布和破坏性样品，保留胶料、棉和水分组成。不得将纯棉或纯胶废料混入本行。

- 选定流：未硫化 NR 覆胶棉布废料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q; cp_finish; 同一次报告操作。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_finish
- 来源：

###### 未覆胶棉布边料 (`cotton_trim`)

仅限实际分拣的未覆胶边料，记录覆胶前来源并只计一次，即使由统一整理班组负责采集。

- 选定流：未覆胶棉布边料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q; cp_finish; 同一次报告操作。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_finish
- 来源：

###### 聚乙烯隔离膜边料 (`pe_trim`)

分别计量清洁 PE 隔离膜废料，与随卷衬膜和污染复合废料分开。

- 选定流：聚乙烯隔离膜边料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q; cp_finish; 同一次报告操作。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_finish
- 来源：

###### 废弃纸板卷芯 (`paper_core_waste`)

实际损坏或报废的纸板卷芯；复用卷芯保留在资产或材料台账。

- 选定流：废弃纸板卷芯
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q; cp_finish; 同一次报告操作。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_finish
- 来源：

### 过程：成品库存储存、包装与净交付 (`dispatch`)

#### 输入

##### 产品流

###### 涂胶的织物，轮胎帘子布除外 (`warehouse_feed`)

P 对应的 released_roll 内部交接，并分开识别期初成品批群和结转负荷。原生产品身份为已制造成品、工厂生产混合、质量；未指定地理、CAS、配方或硫化状态。不属于外购，也不是再次验收输出。

- 选定流：涂胶的织物，轮胎帘子布除外 `994a7636-5769-4127-ba3c-2e50b1d84f6a`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q; cp_dispatch; 同一次报告操作。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_dispatch
- 来源：

###### 成品布卷仓储发运用电 (`dispatch_power`)

实际对应批群成品储存、搬运和发运准备用电，含退回卷材搬运及复检。旧批和未交付库存保留实测结转负荷。

- 选定流：成品布卷仓储发运用电
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：A_i / Q; cp_dispatch; 同一次报告操作。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_dispatch
- 来源：

###### 聚乙烯薄膜 (`pe_wrap`)

一种外层 PE 包膜，与隔离膜分别称量。原生为工厂生产混合、PE、CAS 9002-88-4、质量；未指定地理、具体牌号或加工路线。箱包分类元数据不一致；不推定供应商配方、再生含量或包装数量。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q; cp_dispatch; 同一次报告操作。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_dispatch
- 来源：

###### 聚丙烯捆扎带 (`pp_strap`)

实际布卷 PP 捆扎带，独立测量质量及废料、库存台账。它是包装组件，不是橡胶成品带。

- 选定流：聚丙烯捆扎带
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q; cp_dispatch; 同一次报告操作。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_dispatch
- 来源：

#### 输出

##### 产品流

###### 涂胶的织物，轮胎帘子布除外 (`delivered_fabric`)

终端实际净交付合格未硫化 NR/棉复合布，计为 Q。原生身份为已制造成品、工厂生产混合、产品流、质量；未指定地理、CAS、配方、纺织结构、供应方和硫化状态。真实复合质量含棉体、全部保留的橡胶配方及实测水分，扣除衬膜、卷芯、外膜和捆扎带。宽泛原生名必须附本具体物理适用边界。

- 选定流：涂胶的织物，轮胎帘子布除外 `994a7636-5769-4127-ba3c-2e50b1d84f6a`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：fixed_value
- 适用范围：product_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：identity_reference
- 采集协议：cp_dispatch
- 来源：`rosich-calender-state`; `colmant-nr-cotton`

##### 废物流

###### 聚乙烯包膜废料 (`wrap_waste`)

实际分别称量的清洁外包膜废料；污染膜须独立废物身份和接收方。

- 选定流：聚乙烯包膜废料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q; cp_dispatch; 同一次报告操作。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_dispatch
- 来源：

###### 聚丙烯捆扎带废料 (`strap_waste`)

实际分别称量的 PP 带废料，不与 PE 膜或覆胶布废料合并。

- 选定流：聚丙烯捆扎带废料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q; cp_dispatch; 同一次报告操作。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_dispatch
- 来源：

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | all processes | 共享负荷前先按批群和不重叠计量记录细分。内部交接和回用边料不产生联产品抵扣。不自动将质量、面积、加工时间或销售价值用作全部公用工程的代理。 | `ilcd-allocation-2010` |
| allocation_residual | actual coproducts | 识别真实外供联产品，不得改名为废物。对剩余共享负荷证明决定性物理因果关系；缺乏时使用实际交接门共同功能价值并披露、论证经济分配及敏感性。实际多功能情形须方法复核，本方法不提供默认份额或替代抵扣。 | `ilcd-allocation-2010` |
| asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 在适用的分配决策情境内，对前景生产、包装或已观察服务中已纳入的实际资本设备或可复用制品按用途归属原始制造负荷时，必须按同一资产建立跨全部作物、产品、批次、制造及放行后服务、所有者和观察期的持久台账。D为有证据支持的完整安装服务总量，即全部已实现历史服务加有依据的剩余服务，其单位须与各受益用途实际服务量u一致；D须为有限正值。当期容量、仅剩余容量、资产或制品自身实物质量以及仅当期产品Q均不能直接作为D；若有证据证明因果服务且与u单位相符，完整服务期的质量通量可用作分母。本规则不按下游寿命摊销本PCR制造的参考产品，也不改变其声明的参考门及Q。u/D与此前已分配的制造份额累计不得超过1。观察期、保管方、供方或维修变化不能重置原始制造负荷余额。替换件使用独立身份，仅计真实新增制造向量；实际维修和处理增量另行保留。服务容量证据修订时，应透明追溯调整既有份额并作敏感性分析，不得另起台账。完整实物质量及存量变动独立于负荷份额。D、既有份额或受益范围不明时须复核，不得给出最终制造负荷归属量；不得假定寿命、利用率、零值或任意分摊。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

对本路线既有采集协议中按用途归属已纳入生产、包装或已观察服务资产制造负荷的情形（不摊销本PCR制造的参考产品本身），还须保留持久资产身份、实测完整实物质量及购入/安装/退役存量历史、原始制造负荷向量、全部历史及当前受益用途、同单位服务读数、有证据的完整安装服务分母D、剩余服务依据与不确定性、此前已分配份额及剩余原始制造负荷余额。台账跨观察期及保管方/供方变化持续结转。实际维修、替换、回收和处理分别采集；这些记录不能归一化实物流量或构成另一次资产购入。这些是既有适用协议的补充字段与守恒要求，不是新增假定的资本品清单。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_warmup | warmup | 整份胶料及热炼台账 | foreground_record | 批卷 ID; 时间; 材料或物种; 状态; 原始质量、能量或体积; 计量覆盖; 失败或零产出运行; 退货返工转移; 期初末在制品质量及内含负荷 | 负责人：热炼生产主管。保留未归一的接收、分析、整份胶料领用、内部回流、温度及不重叠计量总数，含全部失败运行、待机开停机和原料、在制库存变化及继承负荷。采集端不执行 A/Q。 | kg; MJ | 每批、每事件或计量时段 | 完整匹配报告期间及已识别期初末批群历史 | 声明场址及互不重叠的工序覆盖 | 每 1 kg 参考流 | 经校准秤表；供货配方；库存及转移核对 |
| cp_calender | calender | 基布、胶料及复合物台账 | foreground_record | 批卷 ID; 时间; 材料或物种; 状态; 原始质量、能量或体积; 计量覆盖; 失败或零产出运行; 退货返工转移; 期初末在制品质量及内含负荷 | 负责人：压延生产主管。采集原始热胶条和棉布进料、覆胶设定、整幅质量、胶料棉水子账、失败幅材及转移。需要换算时实测同状态幅宽、面积和面密度，保留原始记录不相除。 | kg; m; m2; MJ | 每批、每事件或计量时段 | 完整匹配报告期间及已识别期初末批群历史 | 声明场址及互不重叠的工序覆盖 | 每 1 kg 参考流 | 覆胶及未硫化状态试验；秤；尺寸；签署批次平衡 |
| cp_utilities | calender | 共用公用工程及治理台账 | foreground_record | 水汽质量; 温压; 焓; 原始积分体积或速率及持续时间; 补水; 循环量; 冷凝水; 排污; 蒸发; 炭床库存 | 负责人：公用工程工程师。保留完整期间不重叠原始总数及水汽物理平衡，含失败运行、仓储及治理。外购热采用交付质量和实测焓差，蒸汽不另记水采购。先确定实测支路覆盖，再归属批群；此处不除 Q。 | kg; MJ; m3 | 每批、每事件或计量时段 | 完整匹配报告期间及已识别期初末批群历史 | 声明场址及互不重叠的工序覆盖 | 每 1 kg 参考流 | 表计校准；实测密度及焓；排污单；治理记录 |
| cp_emissions | calender | 热炼与压延分开空气物种覆盖 | foreground_record | 物种; CAS; 介质; 采样时间; 进出口浓度; 气量基准; 积分气量或速率及持续时间; 治理捕集; 检出限; 运行批群 | 负责人：环境监测主管。保留热炼和压延原始分物种测试，含失败运行及无组织覆盖。积分体积乘浓度得到质量，速率才需要持续时间。区分实际治理后的排放和捕集质量；不将总 VOC 或平衡残差分给某物种，采集端不执行 A/Q。每种实际新增物种另设卡片。 | kg; mg/m3; m3; m3/h; h | 每批、每事件或计量时段 | 完整匹配报告期间及已识别期初末批群历史 | 声明场址及互不重叠的工序覆盖 | 每 1 kg 参考流 | 采样方法；检出限；气体状态换算；胶料分析；无未支持通用排放因子 |
| cp_finish | finish | 放行 P、边料、衬膜及卷芯台账 | foreground_record | 批卷 ID; 时间; 材料或物种; 状态; 原始质量、能量或体积; 计量覆盖; 失败或零产出运行; 退货返工转移; 期初末在制品质量及内含负荷 | 负责人：质量放行主管。分别称量未硫化复合布及可分离包装，检测验收状态并记录唯一首次放行 P、样品、废品和退回复检历史。结转期初末在制及负荷；退回布卷再验收不是新增生产。保留原始分子和 P，不相除。 | kg; MJ | 每批、每事件或计量时段 | 完整匹配报告期间及已识别期初末批群历史 | 声明场址及互不重叠的工序覆盖 | 每 1 kg 参考流 | 验收试验；布卷 ID；净皮重称量；在制及废品核对 |
| cp_dispatch | dispatch | 净 Q、成品库存及继承负荷 | foreground_record | 布卷或批群 ID; P 接收; 期初末成品质量及继承的投入排放能量负荷; 毛净发运; 退货; 再次交付; 包装皮重; 仓储搬运发运能耗; 实际交接验收 | 负责人：仓库发运主管。采集原始交付和退货验收及原始库存、批群负荷，保留前期历史。Q 为声明交接门对退货核对后的唯一净验收交付复合布质量，不含未交成品和包装。再次交付或复检不得重复同一保留交付。保留全部原始数量和负荷，采集端不执行 A/Q。 | kg; MJ | 每批、每事件或计量时段 | 完整匹配报告期间及已识别期初末批群历史 | 声明场址及互不重叠的工序覆盖 | 每 1 kg 参考流 | 签署发运及退货单；经校准称重；库存历史及负荷桥接；不假定 P=Q |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_normalise | all inventory rows | 对每个交换 i，a_i = A_i / Q 且仅一次。A_i 为归属净交付批群的原始负荷：期初内含负荷加实际期间负荷（含失败运行和返工）减期末存量结转负荷，经 cp_dispatch 核对；工序交接抵消。Q 是正值唯一净验收交付复合布千克数。卡片和 aggregation_rule 描述同一次报告操作，不是顺序再除。保留有符号退货修正及原始期间；零交付期间无 Q，负荷保留供后续库存或批次核对。 | A_i; Q; cp_warmup; cp_calender; cp_finish; cp_dispatch; cp_utilities; cp_emissions | a_i |  |
| calc_conversions | all inventory rows | 归一前换算原始单位：电力 MJ = kWh * 3.6；质量 = 体积 * 独立实测密度；积分气量乘物种浓度经单位和状态换算得物种质量，速率才乘时间。面积乘同状态面密度得复合质量。蒸汽净热 = 实测质量 * 实际焓差。不重复乘时间，不从 COD 或平衡残差反推水或物种。 | cp_utilities; cp_emissions; cp_calender | converted_raw_amount |  |
| calc_balances | all inventory rows | 各工序采用完整原始投入 + 期初库存 + 实际退回 = 外部出口 + 内部转移 + 期末库存，分别核对包装和水汽子账。发运账为期初成品 + P + 实物退回 = 毛发运 + 期末成品 + 实际损失；毛发运、退回和再交付历史产生唯一 Q，绝不默认 Q=P。每个存量及退回批群携带负荷向量。守恒整份胶配方、棉、水和实测相关元素；实际排放物种独立测量。本未硫化路线不假定反应水项。 | cp_warmup; cp_calender; cp_finish; cp_dispatch; cp_utilities; cp_emissions | reconciled_mass_and_burdens |  |
| asset_manufacture_share | 既有资本品及可复用制品制造归属 | 仅在持久台账核实有依据的完整安装服务分母、全部受益用途及既有已分配份额后，对每项已纳入原始资产制造向量B计算f_current = u_current / D。在既有单次参考量归一化前，将f_current * B仅一次归属于实际受益用途。检查prior_shares加全部当前/新增受益用途份额不超过1，并结转剩余原始余额。容量修订须追溯核对历史台账。完整实物资产/包装质量及实际总存量/退回量不得乘f_current。D或历史不明时，最终归属结果保持不可用，但仍保留实际维修、替换及服务负荷。 | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | 守恒的制造负荷归属向量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all inventory rows | 独立确认供货形态、完整原生限制及供应方兼容性；辅助 UUID 空白须后续匹配，不虚构背景。保留 PE 箱包分类债务，实测纸板和 PE 结构及皮重。 | 供货规格、直接身份核验、经校准称重 |
| quality_stock | all processes | 保留完整原始台账、零产出负荷、在制成品期初末及负荷向量。证明 Q 与 A_i 同牌号、路线、未硫化状态和批群，无重复退货、验收或归一。 | 批群桥接、原始验收、期间台账及核对 |
| quality_species | air and water | 无溶剂是施涂路线，不等于零排放。按实际配方和监测逐物种核查介质、检出限及处理，不把总 VOC 或残差变为命名化学物。 | 独立分析、采样报告、治理及接收方证据 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | delivered_fabric | 要求唯一显式链接终端产品输出与参考 UUID、1 kg 复合基准、正值唯一 Q 及限定信息一致。共 UUID 的中间或放行输出保持可见并内部抵消。 |  |
| validate_completeness | all processes | 要求所有实际原子交换及完整原始期间、库存和结转负荷记录；独立核对物理质量元素、实际物种及水相。缺实测或无依据平衡均为发现项，绝不作零值、默认或虚构数值因子。 |  |
| validate_route | all processes | 对轮胎、PVC/PU、湿胶乳、溶剂、凝固、依赖底涂、厂内生料配料及硫化路线，若无独立证据方法则拒绝适用。不推定缺失原生供货地理；可消费上下文须保留 PE 分类债务及供方、配方限制。 | `hubner-calender-2019`; `rosich-calender-state` |
| validate_asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 对每项已纳入资本品/可复用制品制造归属，检查同一资产连续性、同单位完整安装服务、全部历史及当前受益用途、既有已分配制造份额和累计份额不超过1。拒绝按观察期、批次、供方、所有者或维修重置。真实替换件及维修/处理增量向量分别核对，保留完整实物质量。分母缺失、既有分配无法解释或受益台账不完整时，须明确复核且最终归属量不可用；结构检查不能声称已获实测完整性。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 声明交付门的限定未硫化复合中间产品 |
| allowed_use | 相同 NR/棉结构、未硫化固体胶料压延路线且状态兼容、清单完整 |
| excluded_use | 整 CPC 覆盖、纯胶或纯纤维质量、已硫化、PVC、PU 或轮胎帘子布等价、成品带手套性能及无依据完整摇篮到大门 |
| required_metadata | 全部参考限定、Q/P 区分、过程图、批群库存桥接、供货状态及真实地理、公用工程运输处理链接 |
| required_quality_disclosure | 实测水分组成、原始分子和负荷、辅助 UUID 或供方缺口、PE 分类不一致、primary 技术综合限制、全部遗漏及不确定分配 |
| update_trigger | 配方、基材整理、硫化状态、门、公用工程场址、工艺治理、库存核算或供应方变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| hubner-calender-2019 | handbook | HÜBNER Image Brochure, September 2019, printed pp.34–35; https://www.hubner-group.com/fileadmin/user_upload/hubner-group.com/downloads/broschueren/HUBNER_Image_Brochure_EN_Web_2019-09.pdf | 无溶剂固体混炼胶压延覆胶和纺织基材系列。仅为技术证据，不证明同一 SKU 配方、未硫化状态、地理库存或定量性能。 |
| rosich-calender-state | handbook | ROSICH Y PUIGDENGOLAS, Calendering; https://www.rosich.com/en/calendering/ | 工业压延纺织基材和已硫化、未硫化供货状态。页面另列独立胶片，不得当作织物。不采用其 SKU 配方或通用尺寸、质量范围。 |
| colmant-nr-cotton | handbook | Colmant Coated Fabrics, Natural rubber coated cotton fabric; https://www.colmant-coated-fabrics.com/our-products/coated-fabrics/cotton/natural-rubber-coated-cotton-fabric/ | 仅支持 NR/棉布产品身份；供方提示性非合同性能不作为配方、压延设定、库存或寿命默认值。 |
| epa-rubber-2008 | official_guidance | US EPA, Emission Factor Documentation for AP-42 Section 4.12, Draft Final November 2008, §§3.3.1–3.3.2,4.1.2,4.1.4; https://www.epa.gov/sites/default/files/2020-10/documents/db04s12.pdf | 热炼、温压压延贴合、冷却裁切及热炼、压延排放覆盖分开。轮胎或氯丁胶测试不作为 NR/棉布排放因子、强制胶料配方或硫化证明。 |
| ilcd-allocation-2010 | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA Detailed guidance, first edition 2010, §7.9.3, printed p.257; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 多功能性处理：细分、经证明的决定性物理因果关系及剩余经济分配。属于通用 LCA 方法，不给出本产品质量、时间或能量分配系数。 |
