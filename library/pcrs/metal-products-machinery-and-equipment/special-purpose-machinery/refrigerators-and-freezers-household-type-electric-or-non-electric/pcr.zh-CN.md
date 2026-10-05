---
status: candidate
content_maturity: authored_methodology
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.refrigerators-and-freezers-household-type-electric-or-non-electric
language: zh-CN
sync_with: pcr.en-US.md
---

# 家用冰箱及冷冻柜（电动或非电动）

## 1. 范围与适用性

本PCR用于编制家用冰箱、独立卧式或立式冷冻柜及组合式冷藏冷冻电器的工厂生产前景数据包。交付配置可为独立式或嵌入式、电驱动蒸气压缩式、燃气或热驱动吸收式，或有证据的热电及其他制冷设计。适用性以实际预期家用制冷功能、间室温度与容积及供应状态判断，不仅以能源种类判断。不得缩减为一种压缩式冰箱或R600a配方。[dometic-technologies; dometic-rm2350; doe-refrigeration-rfi]

排除商用展示或冷链设备、工业制冷、空调和独立替换零件。不把被动冰箱自动视为制冷器。便携、露营、房车或迷你吧营销本身既不能证明也不能否定家用类型：按原始规格审查实际主要功能，并披露分类不确定性。DOE仅压缩式能源标准定义是历史上较窄范围的反例，不是本类别边界。原始运行容积或能耗等级不能作为制造因子。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.refrigerators-and-freezers-household-type-electric-or-non-electric |
| classification_refs | CPC 3.0 44811；候选语义关系，映射接受另行办理 |
| covered_products | 家用冰箱；家用冷冻柜；组合冷藏冷冻电器；有证据的电动及非电动架构 |
| excluded_products | 商用或工业制冷；空调；独立备件；未经适用性证实的被动冰箱 |
| representative_product | 不以任何型号作为通用物料表；工厂门口的指定配置家用电器 |
| production_route | 声明箱体、内胆、隔热层、制冷模块和控制部件自制或外购；选定制冷路线和充注状态 |
| market_state | 已验收完整制造电器及指定随供附件，厂内状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造指定家用制冷电器 |
| How much | 1 kg验收电器净质量；服务容积另行声明 |
| How well | 声明间室容积及温度等级、制冷路线、气候或电压或燃料配置和验收标准 |
| How long or cycle | 仅工厂生产和验收；无默认使用寿命或年度运行能耗 |
| reference_flow_link | finished |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 电动或非电动家用冰箱及食品冷冻器 `510dc598-5954-4045-a563-78869ea6d5ed` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号；配置；家用主要功能；制冷架构；卧式或立式或组合状态；间室容积和等级；制冷剂或工质物种及实际充注；隔热配方；净质量；随供附件；自制外购边界；工厂、年份和地域；电压或燃料；供应商范围；验收记录 |

验收净质量包括该配置实际随供门、搁板、篮筐、控制器、制冷模块及留存工质充注；排除运输包装、不合格品、试验用水或模拟食物负载。热电模块的半导体或金属组成按实际供应商确认，不能从原理说明推导配方。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | Mass | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |
| physical_species | 仅物理材料及化学物种行 | Mass | kg | 区分物料总量、水分、内含物种和反应产物；每项使用自身匹配分析及干湿基准。本规则不要求电力或运输以kg表示。 |
| utilities | 能源公用工程行 | Energy | kWh; MJ | 保留实际表计单位；1 kWh = 3.6 MJ仅用于能量换算，不是电器质量。热量采用独立计量供回流、各自焓和共同零点。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际交付金属、树脂、部件或外购完整总成，披露充注或隔热状态 |
| starting_condition_role | 外购投入接口界定供应商与前景工作 |
| product_classification_scope | 家用电器主要功能和实际供应状态，独立于单一法定能耗定义 |
| recursive_input_rule | 外购同类别部分或完整电器作为一个明确上游投入；仅纳入场内剩余工作，不递归重复制造 |
| upstream_dataset_requirement | 匹配牌号、化学组成、充注和供应状态、供应商地域及年份和已含过程；披露未解决供应商 |
| disclosure | 按配置记录自制外购矩阵、模块内含物、过程表计和缺失身份或证据 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| b_factory | 纳入归属接收、实际成形或注塑或发泡、装配、充注、干燥或抽真空、试验、不合格与返工、处理及发运包装。该生产包排除下游食物、消费者使用能耗、配送和处置。 | dometic-rm2350; doe-refrigeration-rfi |
| b_makebuy | 外购完整模块内含金属、电机、油、工质、控制器或隔热层仅计一次。场内自制则记录实际投入和直接操作；不得添加密度混合或编造套装配方。 | dometic-technologies |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fabrication | 箱体、内胆和隔热层制造 | conditional | 仅实际配置及自制外购操作 | foreground | finished |
| assembly | 制冷架构和电器装配 | required | 仅实际配置及自制外购操作 | foreground | finished |
| charge_test | 回路充注和工厂验收试验 | conditional | 仅实际配置及自制外购操作 | foreground | finished |
| services_dispatch | 剩余工厂服务和发运 | required | 仅实际配置及自制外购操作 | foreground | finished |

各卡是条件替代项，不是默认物料表。选定路线的其他实际牌号、化学品、燃料、包装、废物或排放物种各增加独立识别行，采用相同采集和归一化规则。有证据不存在记为not_applicable；零须测量，未知仍为缺失。工质、发泡剂和燃烧燃料即使同物种也有不同作用。烃类戊烷不是HFC。不设通用GWP、充注、泄漏或配方。

EPA原始资料确认家用冰箱及冷冻柜硬质聚氨酯隔热泡沫的用途，区分商用制冷及建筑泡沫；不提供本工厂配方、密度、用量或合法替代判断。[epa-appliance-foam]

### 过程：箱体、内胆和隔热层制造（`fabrication`）

#### 输入

##### 产品流

###### 冷轧低碳钢板（`steel_sheet`）

仅在此购入牌号用于箱体成形时；确认牌号、表面层和实际成材率。

- 选定流：冷轧低碳钢板
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


###### 不锈钢板（`stainless_sheet`）

仅用于实际不锈钢面板；记录合金分析，不得替代涂层碳钢。

- 选定流：不锈钢板
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


###### 铜制冷剂管（`copper_tube`）

仅在场内加工铜管时；记录合金、尺寸和购入状态。

- 选定流：铜制冷剂管
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


###### 铝制蒸发器总成（`aluminium_evaporator`）

外购成品蒸发器，其上游加工仅计一次。

- 选定流：铝制蒸发器总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


###### 高抗冲聚苯乙烯树脂粒料（`hips_resin`）

核对实际HIPS粒料牌号和供应商；此标识不提供通用冰箱配方。

仅用于实际内胆热成形或注塑；记录牌号和供应商，不设默认内胆树脂。

- 选定流：高抗冲聚苯乙烯粒料（HIPS） `4f19a303-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


###### 丙烯腈-丁二烯-苯乙烯树脂粒料（`abs_resin`）

仅对匹配的ABS粒料采用此中国生产混合工厂采购标识；仍须核对实际牌号和供应商/年份。

实际塑料成形的另一途径；区分高抗冲聚苯乙烯和外购内胆。

- 选定流：丙烯腈丁二烯苯乙烯共聚物（ABS）粒料 `b895c3a1-076e-4a42-a2c0-6088890c0bd9`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


###### 硬质聚氨酯配方多元醇组分（`polyol`）

场内用分装组分发泡；声明供应配方及内含催化剂、水和发泡剂。

- 选定流：硬质聚氨酯配方多元醇组分
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


###### 聚合二苯基甲烷二异氰酸酯（`pmdi`）

仅为实际分装异氰酸酯组分；完整双组分套装已含时不得再加。

- 选定流：聚合二苯基甲烷二异氰酸酯
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


###### 硬质聚氨酯双组分发泡套装（`foam_kit`）

完整购入套装的替代接口；供应商界定的内含物替代分装树脂和固化组分，不重复。

- 选定流：硬质聚氨酯双组分发泡套装
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


###### 环戊烷发泡剂（`cyclopentane`）

仅为另行供应且未含于多元醇或套装的实际物种；记录泡沫中留存量和排放。

- 选定流：环戊烷发泡剂
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


###### 异戊烷发泡剂（`isopentane`）

仅为另行供应的实际异构体；混合物按各自分析拆分组分。

- 选定流：异戊烷发泡剂
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


###### 1,1,1,3,3-五氟丙烷发泡剂（`hfc245fa`）

有实际证据的HFC-245fa配方条件行；不能由戊烷标识推断。

- 选定流：1,1,1,3,3-五氟丙烷发泡剂
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


###### 冰箱隔热箱体总成（`cabinet`）

外购完整箱体及隔热层替代内含板材、树脂和发泡投入；装配仍属前景。

- 选定流：冰箱隔热箱体总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


###### 热成形冰箱内胆（`liner`）

外购内胆替代内含树脂和成形能耗。

- 选定流：热成形冰箱内胆
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


#### 输出

##### 废物流

###### 碳钢板边角废料（`steel_scrap`）

核对厂内制造钣金边角料；此废物流标识未指定处理，须提供实际牌号/涂层、污染与接收方证据；标识不自动产生回收抵扣。

实际出厂钢板边角料，与铝和铜废料分开称量。

- 选定流：废钢 `37997e0e-e34b-4ab9-a642-5d86f4333919`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


### 过程：制冷架构和电器装配（`assembly`）

#### 输入

##### 产品流

###### 家用全封闭制冷压缩机总成（`compressor`）

压缩式路线，外购指定压缩机；内含电机、油和金属的上游仅计一次。

- 选定流：家用全封闭制冷压缩机总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


###### 已充注家用蒸气压缩制冷模块（`compression_module`）

外购完整已充注模块替代其中压缩机、冷凝器、蒸发器、管、油和初始充注行。

- 选定流：已充注家用蒸气压缩制冷模块
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


###### 家用冰箱冷凝器总成（`condenser`）

未内含于完整制冷模块的实际外购冷凝器。

- 选定流：家用冰箱冷凝器总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


###### 已充注氨-水-氢吸收式制冷单元（`absorption_module`）

热驱动吸收式替代路线，供应商界定完整单元；不得再加内含工质库存。

- 选定流：已充注氨-水-氢吸收式制冷单元
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


###### 热电珀尔帖制冷模块（`peltier`）

有证据的固态路线；不推断压缩机或制冷剂充注。

- 选定流：热电珀尔帖制冷模块
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


###### 铝制热电散热器（`heatsink`）

实际单独供应的热电换热部件，非模块内含。

- 选定流：铝制热电散热器
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


###### 冰箱空气循环风扇总成（`fan`）

实际单独供应风扇；内含电机不作第二投入。

- 选定流：冰箱空气循环风扇总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


###### 冰箱电子控制板总成（`controller`）

外购成品控制板；不重复裸板、金属和芯片制造。

- 选定流：冰箱电子控制板总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


###### 冰箱线束（`harness`）

实际单独供应配置线束，含绝缘和连接器。

- 选定流：冰箱线束
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


###### 吸收式冰箱燃气燃烧器总成（`burner`）

实际燃气加热设计；与电加热器区分。

- 选定流：吸收式冰箱燃气燃烧器总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


###### 吸收式冰箱电加热器（`heater`）

仅实际单独供应电加热器。

- 选定流：吸收式冰箱电加热器
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


###### 冰箱门封条（`gasket`）

记录实际聚合物及磁条供应商范围。

- 选定流：冰箱门封条
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


###### 钢化玻璃冰箱搁板（`shelf`）

随交付验收搁板纳入净质量；外购玻璃上游仅计一次。

- 选定流：钢化玻璃冰箱搁板
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


###### 涂层钢制冷冻柜篮筐（`basket`）

实际随供篮筐，不作为通用附件。

- 选定流：涂层钢制冷冻柜篮筐
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


###### 钢制冰箱门铰链（`hinge`）

实际单独门铰链总成。

- 选定流：钢制冰箱门铰链
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


###### 冰箱LED照明总成（`light`）

仅实际随供照明。

- 选定流：冰箱LED照明总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


#### 输出

### 过程：回路充注和工厂验收试验（`charge_test`）

#### 输入

##### 产品流

###### 异丁烷制冷剂，R600a（`r600a`）

仅实际压缩式R600a充注；CAS 75-28-5，不是R290丙烷或正丁烷；已购模块的初始内含充注在此排除。

- 选定流：异丁烷制冷剂，R600a
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


###### 丙烷制冷剂，R290（`r290`）

仅有证据的丙烷回路；实际物种和实测充注，不替代R600a。

- 选定流：丙烷制冷剂，R290
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


###### 1,1,1,2-四氟乙烷制冷剂，R134a（`r134a`）

仅实际HFC-134a回路；不设全类别充注或泄漏因子。

- 选定流：1,1,1,2-四氟乙烷制冷剂，R134a
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


###### 氨吸收式工质（`ammonia`）

仅实际场内充注吸收回路；用供应溶液自身分析定量氨，不把溶液总量视为纯氨。

- 选定流：氨吸收式工质
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


###### 氢吸收式工作气体（`hydrogen`）

仅实际吸收配方和场内充注；气体计量用实际压力、温度和状态。

- 选定流：氢吸收式工作气体
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


###### 去离子吸收式工作水（`working_water`）

核对单独供应的去离子水、水质和实际供应商；不重复氨溶液内含水。

仅实际单独工质水；不重复氨溶液内含水。

- 选定流：去离子水 `5b3acbab-2518-4406-8736-d21f222d757a`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


###### 铬酸钠缓蚀剂（`chromate`）

仅有证据吸收式配方；Dometic RM2350支持条件存在，不作通用质量比例。

- 选定流：铬酸钠缓蚀剂
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


###### 氮气检漏气体（`nitrogen`）

仅匹配中国工厂吹扫/检漏用工业气态氮供货，不是液氮。清单采用声明温度和压力下的原生Volume / m3。若按气瓶净质量采集，先将各批质量除以该批在相同条件下自身实测氮气密度（kg/m3），再汇总体积；不设默认密度。核对纯度与供应商/年份。

仅实际检漏或干燥试验消耗，扣除气瓶退回或库存；无固定试验因子。

- 选定流：氮气 `96ba4c16-fd7c-424e-b318-d87484d3d7c0`
- 流属性/单位：Volume / m3
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


###### 制冷压缩机润滑油（`oil`）

仅实际另行加油，不含外购压缩机已内含油。

- 选定流：制冷压缩机润滑油
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


###### 工厂验收试验购入电力（`test_power`）

仅对中国电网平均1–35千伏消费组合到用户接口采用此UUID。核对实际电表边界、电压、供货地理/年份和供应商；其他电压/地理须另选流。原生属性为Net calorific value / MJ；保留电表kWh，在归一化前按1 kWh = 3.6 MJ换算一次。供应商已含输配时不得再添加输配。

计量实际试验台、抽真空或干燥、热性能或电气检验含不合格和复试；消费者年度能耗标识不是工厂消耗。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_utilities。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`


###### 工厂吸收式燃烧器试验丙烷燃料（`test_propane`）

仅实际丙烷试验燃料，附组成和热值；不把丙烷制冷剂视作燃烧燃料。

- 选定流：工厂吸收式燃烧器试验丙烷燃料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


###### 工厂试验负载循环自来水（`test_water`）

核对实际处理后自来水供货/供应商；只采集净新鲜供水，不计循环试验负载；体积换算使用自身实测密度。

实际跨试验边界净水含补水和排水；内部循环抵消。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


#### 输出

##### 产品流

###### 可再用回收异丁烷制冷剂（`reusable_r600a`）

有实际证据的可再用异丁烷作为产品转出工厂边界，附纯度或供应规格和实测数量；内部成对回收或再充注转移抵消。不自动给予避免生产信用。

- 选定流：可再用回收异丁烷制冷剂
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`

##### 废物流

###### 丢弃的回收异丁烷制冷剂（`recovered_r600a`）

丢弃或污染的回收异丁烷作为废物转交处理；按自身物种含量及库存变化称量，不自动给予信用。

- 选定流：丢弃的回收异丁烷制冷剂
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


##### 基本流

###### 异丁烷向室外空气排放（`isobutane_air`）

仅经证据确认的该物种室外空气释放。此UUID为普通未细分空气环境舱；已知城市/非城市/高烟囱子环境舱时，应另用正确标识的流。不得以室内、平流层、土壤或长期流替代，也不得从未解释残差推断空气排放量。

仅实际识别R600a逸散；测量或衡算物种，确认环境介质；无默认泄漏。

- 选定流：异丁烷 `4d9a8790-3ddd-11dd-9355-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emissions。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emissions`


###### 氨向室外空气排放（`ammonia_air`）

仅经证据确认的该物种室外空气释放。此UUID为普通未细分空气环境舱；已知城市/非城市/高烟囱子环境舱时，应另用正确标识的流。不得以室内、平流层、土壤或长期流替代，也不得从未解释残差推断空气排放量。

实际物种排放；水相吸收或捕集不等于销毁或自动大气排放。

- 选定流：氨 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emissions。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emissions`


###### 二氧化碳向空气排放（`carbon_dioxide`）

仅经证据确认的该物种室外空气释放。此UUID为普通未细分空气环境舱；已知城市/非城市/高烟囱子环境舱时，应另用正确标识的流。不得以室内、平流层、土壤或长期流替代，也不得从未解释残差推断空气排放量。化石碳标识仅适用于实际化石燃烧燃料碳；不得把生物源碳计入此标识。

仅有实际证据场内燃烧或固化释放；物种测量或相匹配碳核算，不是上游公用工程排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emissions。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emissions`


###### 一氧化碳向空气排放（`carbon_monoxide`）

仅经证据确认的该物种室外空气释放。此UUID为普通未细分空气环境舱；已知城市/非城市/高烟囱子环境舱时，应另用正确标识的流。不得以室内、平流层、土壤或长期流替代，也不得从未解释残差推断空气排放量。化石碳标识仅适用于实际化石燃烧燃料碳；不得把生物源碳计入此标识。

物种特定试验或烟道证据；不能仅从碳闭合推断。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emissions。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emissions`


###### 二氧化氮向空气排放（`nitrogen_dioxide`）

实际NO2物种；以NO2当量报告的NOx不是实测NO2。

- 选定流：二氧化氮向空气排放
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emissions。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emissions`


### 过程：剩余工厂服务和发运（`services_dispatch`）

#### 输入

##### 产品流

###### 加工和装配购入电力（`factory_power`）

仅对中国电网平均1–35千伏消费组合到用户接口采用此UUID。核对实际电表边界、电压、供货地理/年份和供应商；其他电压/地理须另选流。原生属性为Net calorific value / MJ；保留电表kWh，在归一化前按1 kWh = 3.6 MJ换算一次。供应商已含输配时不得再添加输配。

实际过程电表及冷却或压缩空气服务分配；不再计试验电量。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_utilities。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`


###### 未分配工厂服务购入电力（`residual_power`）

仅对中国电网平均1–35千伏消费组合到用户接口采用此UUID。核对实际电表边界、电压、供货地理/年份和供应商；其他电压/地理须另选流。原生属性为Net calorific value / MJ；保留电表kWh，在归一化前按1 kWh = 3.6 MJ换算一次。供应商已含输配时不得再添加输配。

仅扣除全部过程、试验和发运电表后未分配实测剩余量；核对购入、场内发电、外送和储能。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_utilities。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`


###### 购入热水热量（`heat`）

独立实际供回质量乘各自相对共同零点焓；已报净热量不得二次扣回水。

- 选定流：购入热水热量
- 流属性/单位：Energy / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_utilities。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`


###### 工厂清洗自来水（`process_water`）

核对实际处理后自来水供货和供应商地理/年份；体积转质量采集采用实测水密度，不假设密度。

实际过程水含投入水分、库存和排水；不能在分表之上加全厂总量。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


###### 异丙醇清洗溶剂（`ipa`）

仅匹配的中国生产混合厂内异丙醇化学品供货。此标识未声明纯度：须取得实际分析和供应商；不得替代70体积%水溶液配方或把溶液质量视为纯异丙醇。

仅实际清洗牌号和浓度；区分溶剂留存、回收、捕集和销毁。

- 选定流：异丙醇 `a4a75541-e156-4e30-947c-ba067a682afd`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


###### 瓦楞纸板运输纸箱（`carton`）

实际发运包装排除于验收电器净质量分母。

- 选定流：瓦楞纸板运输纸箱
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


###### 低密度聚乙烯包装膜（`film`）

仅匹配的非泡沫LDPE薄膜；记录厚度、添加剂和实际供应商；此标识不确立上游地理范围。

仅实际薄膜聚合物，不是混合包装总量。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


#### 输出

##### 产品流

###### 电动或非电动家用冰箱及食品冷冻器 `510dc598-5954-4045-a563-78869ea6d5ed`（`finished`）

已验收且具有声明配置和随供附件的家用电器。

- 选定流：电动或非电动家用冰箱及食品冷冻器 `510dc598-5954-4045-a563-78869ea6d5ed`
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass`


##### 废物流

###### 工厂清洗废水（`wastewater`）

实际湿废水称量；各内含物种按自身基准分别分析。

- 选定流：工厂清洗废水
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


###### 工厂废水处理污泥（`sludge`）

实际跨边界湿污泥附水分和物种分析，不作为元素质量。

- 选定流：工厂废水处理污泥
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


###### 含异丙醇废活性炭（`spent_carbon`）

仅实际溶剂捕集废物；用自身留存溶剂分析；捕集不等于销毁。

- 选定流：含异丙醇废活性炭
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


###### 硬质聚氨酯泡沫修边废料（`foam_waste`）

实际废料，发泡剂衡算时用其留存分析。

- 选定流：硬质聚氨酯泡沫修边废料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exchange`


##### 基本流

###### 异丙醇向室外空气排放（`ipa_air`）

仅经证据确认的该物种室外空气释放。此UUID为普通未细分空气环境舱；已知城市/非城市/高烟囱子环境舱时，应另用正确标识的流。不得以室内、平流层、土壤或长期流替代，也不得从未解释残差推断空气排放量。

仅在有证据捕集、销毁和非大气残留核算后实际室外空气排放。

- 选定流：异丙醇 `fe0acd60-3ddc-11dd-a843-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emissions。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emissions`


## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| a_causal | 通过计量或按实际配置和操作拆分避免分配；否则具体共享服务采用有依据因果机器小时、实测试验负载或实测物料处理量。不默认用验收电器质量分配所有公用工程；份额核对同期间和服务总量。 |  |
| a_reject | 归属不合格、返工和质量试验负荷分配给同配置验收产出。废料作为物理废物并声明处理接口，不自动给予避免金属信用。内部再用成对转移抵消，不重复上游购入。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | services_dispatch | finished | weighing | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 每台验收品 | 匹配生产期间 | 同工厂及配置 | 每台验收净质量 | 校准；皮重；验收与物料表核对 |
| cp_exchange | all | atomic physical exchange | weighing; assay | 期间；批次；供应商；牌号；相态；物种；毛净质量；水分；自身分析；密度及温度；库存；退回；不合格品；N  氮气体积、温度、压力、密度；| 测量每项实际跨过程边界原子交换；体积换质量或物种使用该溶液自身密度和浓度；核对库存及反应或退回记录。Q包含归属不合格和返工消耗；N是同配置验收台数。  氮气采用声明条件下原生气体体积；气瓶净质量先除以各批在相同条件下的自身实测气体密度，再汇总；保留质量和体积记录。| kg; m3 | 每批及期间 | 匹配生产期间 | 选定过程及配置 | 归属交换数量 / 验收机器数量 | 校准秤或表计；实际安全数据表或分析；转移单 |
| cp_utilities | all | atomic utility | metering | 期间；表计起止；过程或试验归属；购入；发电；外送；储能变化；供回质量；供回焓；N | 已分配负荷采用实际过程和试验表计。共享服务仅含扣除已分配负荷后的未分配剩余量。核对同场址期间和单位，不截断负剩余量，调查测量不确定性。热量供回各独立使用kg乘自身相对共同零点MJ/kg；记录毛净接口。毛供热量扣除独立实测回流一次；供应商已扣回流的净热量直接使用，不二次扣除。 | kWh; MJ | 表计间隔及期间 | 匹配生产期间 | 同场址服务及因果配置份额 | 归属公用工程数量 / 验收机器数量 | 表计校准；核对；因果分配证据 |
| cp_emissions | all | 各实际大气排放物种 | 同步采样或计量 | 期间；物种；环境介质；浓度；干气流量；时间；温度；压力；水分；净化入口及出口；库存；分配；N | 在相同声明标准条件下，用同步干排气流量和时间测量物种浓度；浓度先换算为每体积kg后积分。排出质量采用实际净化出口；已为净化后测量时不再扣捕集。制冷剂或溶剂逸散要求物种特定充注、库存、回收及非大气残留证据，不把未解释余量标记为大气。CO2碳核算包括实际燃料碳、反应生成、产品留存、CO及其他每项有证据碳汇；CO和NO2要求独立物种测量。以NO2当量表示的NOx不是实际NO2。 | kg | 每次试验间隔及生产期间 | 匹配生产期间 | 实际出口或逸散环境介质及同配置 | 归属交换数量 / 验收机器数量 | 校准流量计或分析仪；空白；同步记录；条件；净化及采样不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | steel_sheet; stainless_sheet; copper_tube; aluminium_evaporator; hips_resin; abs_resin; polyol; pmdi; foam_kit; cyclopentane; isopentane; hfc245fa; cabinet; liner; steel_scrap; compressor; compression_module; condenser; absorption_module; peltier; heatsink; fan; controller; harness; burner; heater; gasket; shelf; basket; hinge; light; r600a; r290; r134a; ammonia; hydrogen; working_water; chromate; nitrogen; oil; isobutane_air; ammonia_air; recovered_r600a; test_power; test_propane; test_water; carbon_dioxide; carbon_monoxide; nitrogen_dioxide; factory_power; residual_power; heat; process_water; ipa; ipa_air; wastewater; sludge; spent_carbon; foam_waste; carton; film; reusable_r600a | q_ref = q_item / M; q_item = 每台验收成品机器的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |
| period_normalization | 所有清单行 | Q是归属期间交换含已分配不合格或返工负荷；N是同配置验收台数；D是经校准验收净质量总和，排除包装、不合格品及试验负载；M = D/N；q_item = Q/N；q_ref = Q/D。保留实际期间总量及分子单位；finished = 1 千克。 | Q; N; D; M; cp_mass; cp_exchange; cp_utilities; cp_emissions | q_ref | |

对同型号或配置和匹配期间，N为验收台数，D为经校准验收电器净质量总和，M = D/N。各适用交换采集归属期间总量Q，含分配给该群组的不合格或返工：q_item = Q/N，因此q_ref = Q/D。不得跨配置平均质量；D排除运输包装、不合格品和试验负载质量。原始期间总量与归一化数量同时保存。

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | 参考及每项选定投入 | 匹配实际产品状态、牌号、物种、供应接口、属性或单位和供应商范围；UUID是身份，不是制造因子。 | 物料表；供应商原始资料；数据集直读 |
| dq_balance | 物理材料及物种 | 使用期初库存+接收+反应生成=期末库存+验收留存+不合格或废料+回收或退回外送+废水或污泥+实测释放+反应消耗。每个内含物种项使用自身分析及匹配干湿基准。金属总质量不是元素质量。内部成对转移抵消；回收不等于销毁。 | 称量；各流分析；库存、反应和转移证据 |
| dq_water | 实际水 | 水接收及投入水分与库存变化、产品或废物留存、蒸发、排水和反应水闭合；采用自身水分分析和成对内部退回，不把循环记为新水。 | 水表；水分；排水；反应记录 |
| dq_solvent | 实际溶剂或发泡剂或工质物种 | 区分产品留存、回收或外送工质、捕集介质留存、有证据销毁和非大气残留。不把所有未解释剩余量声明为大气排放。按实际联合测量、采样和分配不确定性调查闭合；无通用容差。 | 物种库存、充注或回收记录；分析；采样不确定性 |

## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| v_scope | 要求家用主要功能证据、完整配置和路线声明；缺口保留为候选审查，不因UUID缺失强制排除吸收式或热电式。 | dometic-technologies; doe-refrigeration-rfi |
| v_mass | 要求同配置正N和校准D、M = D/N、验收产出及各适用交换q_item/M换算；纳入不合格或返工负荷，不纳入不合格质量分母。 |  |
| v_makebuy | 拒绝外购模块或部件的重复上游及其内含初始充注、树脂或固化组分或油。各实际制冷剂、工质和发泡剂物种分别核对充注、留存、泄漏和回收证据；无通用默认。 | dometic-rm2350 |
| v_utilities | 要求同期间过程、试验和服务核对，仅含未分配剩余量，购入、发电、外送及储能衡算并调查负剩余量；核对供回热量独立质量及各自焓，回流只扣一次。 |  |
| v_species | 要求物理水及各内含物种闭合，含自身分析、库存、反应、废料、污泥、废水、排放和成对内部退回。燃料碳衡算本身不能建立CO或NOx；NO2不是NOx当量。缺少实际物种或未知销毁为数据不完整，不是零。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景采集数据包 |
| downstream_use | secondary_dataset；background_dataset；过程和生命周期模型投影 |
| allowed_use | 指定配置家用电器工厂生产清单 |
| excluded_use | 未限定架构比较；假定食物冷却服务或寿命；商用制冷或消费者运行能耗因子 |
| required_metadata | 全部参考限定信息；实际自制外购及充注状态；来源、UUID或供应商缺口；Q、N、D、M和期间；方法及分配；处理接口 |
| required_quality_disclosure | 区分条件不存在、零和未知；表计或分析不确定性和衡算剩余量；产品原始资料不提供实证工厂因子 |
| update_trigger | 配置、架构、化学组成、自制外购、供应商、方法或来源变更 |

## 11. 数据源

| 来源编号 | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| dometic-technologies | handbook | Dometic, Cooling technologies explained; original HTML snapshot 2026-10-02; https://support.dometic.com/en/cf-coolers/Cooling-technologies-explained-4910 | 条件吸收式、热电式和压缩式架构；冷藏箱或房车范围限制，不是工厂系数 |
| dometic-rm2350 | handbook | Dometic RM 2350 Operating Instructions; footer 4445103434 2021-04-20, inner 03/2020; printed p7; https://media.dometic.com/externalassets/dometic-rm-2350-_9600029484_81557.pdf | 燃气或交流或直流吸收式、氨或氢及条件铬酸钠；房车示例须适用性审查；不转用质量或配方 |
| doe-refrigeration-rfi | official_guidance | DOE, EERE-2017-BT-STD-0003 Consumer Refrigeration RFI; undated prepublication original with date placeholders; pp11–12, Table II.1 and II.4; https://www.energy.gov/cmei/buildings/articles/refrigerator-freezers-ecs-rfi | 独立历史范围反例：更窄整体压缩机定义及立式或卧式类别；不是当前法律要求或制造能耗 |
| epa-appliance-foam | official_guidance | EPA, Substitutes in Foam Blowing Agents; original last updated March24 2026, snapshot2026-10-02; https://www.epa.gov/snap/substitutes-foam-blowing-agents | 家用硬质聚氨酯泡沫边界及独立商业范围反例；无配方或因子 |
