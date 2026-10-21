---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.other-plates-sheets-film-foil-and-strip-of-plastics
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 无饰面CO₂/乙醇挤出发泡聚苯乙烯板净交付

## 1. 范围与适用性

本PCR覆盖无饰面、无增强、无自粘背层、不加阻燃剂或化学分解型发泡浓缩料的硬质闭孔挤出发泡聚苯乙烯平板制造及真实工厂净验收发运。起点为外购GPPS粒料、完整外购色母粒、工业液态CO₂和未配制乙醇；实际无机成核料或聚合物熔体改性剂须确认供方身份及兼容性后纳入。路线包括接收、原料准备、计量、熔融混合、注气、物理膨胀/挤出、冷却、裁边切割、内部回收、调理、质量放行、成品储存、包膜、搬运及发运，不是购买成品板后重新包装。来源综合规定可复现路线，不声称同一当代订单、同一工厂配方或跨供方SKU等效。

排除非泡沫膜/片、EPS珠粒模塑制品、柔性聚氨酯泡沫、橡胶片/带/管、型材及管道、饰面/层压复合板、结构夹芯构件、化学发泡或HFC/HCFC/戊烷发泡变体，以及化学回收树脂制造。CPC 3.0原始结构及解释注释第177页重复36330非泡沫排除条件和36390残余标题，未给出其他实质性36390注释。将泡沫板归入36390仅为有理由的较窄分类背景，不是全叶覆盖或已接受映射。组装构件涉及相邻建筑制品类别时须单独审查适用性。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.other-plates-sheets-film-foil-and-strip-of-plastics |
| classification_refs | CPC 3.0 36390; narrower |
| covered_products | 无饰面硬质闭孔CO₂/乙醇挤出GPPS平板 |
| excluded_products | 非泡沫片; EPS珠粒泡沫; 橡胶; 型材/管; 饰面板; 化学发泡或添加阻燃剂变体 |
| representative_product | 裁切XPS平板以包膜捆供应; 不预设板材到建筑功能等效 |
| production_route | 外购原料制剂至物理挤出膨胀; 冷却裁切; 调理; 真实净发运 |
| market_state | 实际工厂验收发运板状态并披露残留胞孔气体 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应声明的无饰面XPS板材料中间产品 |
| How much | 1千克净验收发运板 不含包装 |
| How well | 实际调理状态下声明尺寸及保温/压缩测试性能; kg不证明等保温服务 |
| How long or cycle | 一个声明的生产/交付核算期间并关联历史库存及退回; 不假定建筑寿命 |
| reference_flow_link | delivered_board |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 泡沫塑料 `3a86ddd1-28f8-45ba-9255-74a405e09f03` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 实际聚合物牌号及GPPS身份; 完整商业制剂牌号及组成含量; CO₂来源及供货状态; 乙醇纯度及含水量; 未用化学发泡剂且未加阻燃剂; 闭孔无饰面板结构; 板尺寸及质量/密度直接测量状态; 保温及压缩性能与测试基准; 实际场址及供电; 制造与成品库存核算期间; 发运门及验收标准; 调理龄期及残留CO₂/乙醇; 在制品/成品批次及继承交换向量; 实物总发运及原交付冲回链接; 逐种包装形式及回用边界 |

在数据集元数据、过程说明或参考流描述声明每项必需限定信息。完整原生限制及分类矛盾重复保留在可消费的板材流描述中，宽泛UUID本身不证明适用。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用记录龄期、温度及残留气体状态下的真实净验收发运板质量，排除全部运输包装。经校准分别称毛重与皮重。Q = G - R0；G为验收外运板质量，R0为可追溯冲回的原交付质量，不是当前退回重量。按cp_stock及cp_stock_delivery区分P、在制品及成品库存。 |
| normalize_control | 所有清单行 |  |  | 仅采集原始读数和记录。原始单位/速率转换、库存向量核对及共用交换归属均先于唯一normalize_once运算。清单卡和协议汇总引用同一运算，均不再次除法。Q<=0保留原始负荷且不出单位结果。未测损失、未来工厂数量或缺失UUID均不是实测零。 |
| state_conversion | 所有清单行 |  |  | 实物质量用kg。液体或气体原始记录若已是积分体积，只乘独立确定的该物质组成、压力和温度下密度，不再乘时间。真正速率先按时间积分再转换；kWh和MJ按同一明确仪表边界转换，不将电力与热负荷混用。以件计板或托盘须直接测得对应配置质量，不能猜测单件质量或由无关流系数反推密度。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 真实供货状态的外购GPPS粒料及完整商业制剂和CO₂/乙醇 |
| starting_condition_role | foreground_entry |
| product_classification_scope | CPC 3.0 36390; narrower |
| recursive_input_rule | 配对内部粉碎料抵消; 实际外部XPS投入须披露状态及上游负荷 |
| upstream_dataset_requirement | 每项真实外部供货须有兼容且边界独立明确的上游数据集; 流身份不是供方 |
| disclosure | 准确物理路线; 真实供货形态; 净发运Q; 完整在制品/成品/退回向量; 公用工程及包装边界; 残留胞孔气体 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_complete | all inventory rows | 纳入从真实外购原材料供货到工厂净验收发运的全部操作，每项外部投入须有上游数据及真实运输/服务边界。制造须包含完整物理发泡转化，不能止于包膜。实际干燥投入、燃料、外购热、制冷剂、处理药剂、捕集介质、排放物种及新增包装均须各设单独具名卡片，明确供货状态和采集协议。发生情况未知是数据包待补要求，不能写成零或未具名其他流。 | `finnfoam-xps-2021`; `gabriel-xps-masterbatches` |
| b_terminal | all inventory rows | Q只用于真实工厂净验收发运。P为首次质量放行板，不是交付量。制造、成品库存及合并实物门分别核对；内部转移P在合并门抵消。期末成品可能已含当前P及继承负荷，不得再加作产量。交付、重复验收或复验不生成P。Q<=0时不出单位结果，但保留全部真实负荷和有符号更正。 | `finnfoam-xps-2021` |
| b_stock | all inventory rows | 为每个在制品、边料/粉碎料及成品批次标记实物质量、聚合物/制剂组成、CO₂/乙醇残留量及逐交换原始负荷向量。两门均记录期初/期末库存，以及失败和零产出批、启停、待机、清理、清机、破坏性测试和返工。历史真实向量原样继承，不用当前产品平均值替代。区分真实新增量、内部转移和出售/不合格材料。 | `finnfoam-xps-2021`; `jrc-ilcd-2010` |
| b_gas_water | all inventory rows | 分别保持真实物种及去向：板胞孔、排气、逸散、回收料、冷凝液和废水中的CO₂及乙醇；实际存在时还包括残余苯乙烯及PS颗粒。物理发泡本身不产生化学计量反应水。水分、游离液态水、蒸气及任何结构结合水须各自有证据。不得用一个总质量残差同时拟合CO₂及乙醇。外购CO₂与最终释放是不同交换，不自动抵扣。 | `finnfoam-xps-2021`; `gabriel-xps-masterbatches` |
| b_returns | all inventory rows | 每项客户真实退回均链接原发运、原交付质量R0及原逐交换负荷向量。原交付只冲回一次；当前退回实物质量独立测量，包括龄期逸气、损坏及污染。退回历史负荷属于转移，不是新增采购或产量；只增加真实检验/返工/运输增量并记录后续去向。冲回不可追溯则净交付数据不完整，不得编造历史负荷。 | `jrc-ilcd-2010` |
| b_recursion | all inventory rows | 内部板边料不得再次采购。实际存在外部同类XPS投入时，区分回收原料与已经制成的板，并披露其继承上游范围。外部废物或化学回收聚合物不得默默套用本原生GPPS物理路线。纳入真实收集及再加工，不自动给予替代原生料抵扣。 | `finnfoam-xps-2021`; `jrc-ilcd-2010` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | 原料供给至挤出裁切质量放行板 | required | 全部真实制造操作及内部回收 | foreground | P kg内部首次放行; 通过批向量归一至净发运 |
| delivery | 调理 成品储存 包装及净发运 | required | 全部真实库存及发运事件 包括退回 | reference_process | Q kg真实净验收发运 |

### 过程：从原材料制造 (`manufacture`)

#### 输入

##### 产品流

###### 原生GPPS粒料 (`gpps`)

仅表示整份外购GPPS粒料。原生身份为通用级粒料及质量型产品流，未给出CAS、同义词、牌号、工艺路线、地域、纯度或额外属性。须由供方记录核对实际分子量分布和挤出牌号；HIPS、SBS、EPS珠粒及交联苯乙烯树脂不兼容。本UUID不是上游过程或用量。

- 选定流：通用级聚苯乙烯粒料（GPPS） `4f19f11e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：a_i，即第8节定义的唯一最终结果; 不再除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：`finnfoam-xps-2021`

###### 液态二氧化碳物理发泡剂 (`carbon_dioxide`)

记录整份交付的工业CO₂及实际纯度、来源、压力和液态状态。不采用UUID：已检查的液态CO₂候选限定为焊接替代项且参考属性为质量×时间，不能表示本千克交换。不得替用焊接保护气、化工废物或基本排放流。回收工业CO₂不等于负排放或自动避免生产抵扣。

- 选定流：聚合物发泡用液态二氧化碳
- 流属性/单位：Mass / kg
- 数量规则：a_i，即第8节定义的唯一最终结果; 不再除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：`finnfoam-xps-2021`

###### 未配制乙醇共发泡剂 (`ethanol`)

原生身份为乙醇，CAS 64-17-5，易挥发液体、工厂生产混合及质量型产品流；路线、牌号、纯度和地域未指定，无额外属性。仅用于单独供货的未配制乙醇；含量及偶存水作为同次采购的组成子账，不再采购一次。专门配制的水溶液或变性制剂须另设整份制剂行及兼容身份；本UUID不表示该配方或发酵、燃料、萃取路线。

- 选定流：乙醇 `df7bb021-85c3-4d72-ad46-29e83afe64e2`
- 流属性/单位：Mass / kg
- 数量规则：a_i，即第8节定义的唯一最终结果; 不再除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：`finnfoam-xps-2021`

###### 外购聚苯乙烯色母粒 (`colour_masterbatch`)

按交付粒料计量的一种完整商业颜料/载体制剂。声明准确供方牌号、颜料身份及载体组成；不得由板色反推颜料。载体和颜料含量仅为子账，不再额外采购GPPS或颜料。这一供货选择是板材与母粒来源的透明技术综合，不证明Finnfoam使用某一Gabriel牌号。若实际厂内配制，须另列每种真正外购颜料和载体及真实混配能耗、损失。

- 选定流：XPS板用聚苯乙烯载体色母粒
- 流属性/单位：Mass / kg
- 数量规则：a_i，即第8节定义的唯一最终结果; 不再除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：`finnfoam-xps-2021`; `gabriel-xps-masterbatches`

###### 条件性无机成核粒料 (`nucleating_masterbatch`)

仅当实际投用该整份供货制剂或经单独核验的等效制剂时纳入。历史供方资料指定聚苯乙烯载体及细粒高纯无机填料，但未说明填料化学身份；资料讨论含卤发泡剂及化学成核替代方案，不证明当前CO₂/乙醇配方。采用该牌号前须取得兼容性试验及当前组成；不为无机填料虚构化学产气，不重复采购载体或填料。

- 选定流：聚苯乙烯载体无机成核母粒SB 78690 NU
- 流属性/单位：Mass / kg
- 数量规则：a_i，即第8节定义的唯一最终结果; 不再除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：`gabriel-xps-masterbatches`

###### 条件性聚合物熔体润滑浓缩料 (`modifier`)

仅在实际使用且试验合格时作为另一整份外购制剂记录。历史加工助剂资料不证明其用量、当前供方组成或保证节能。会化学分解的发泡浓缩料不属于本物理发泡路线；实际采用时须补充有证据的独立反应清单并审查范围。

- 选定流：苯乙烯聚合物加工助剂母粒PS 78330 MOD
- 流属性/单位：Mass / kg
- 数量规则：a_i，即第8节定义的唯一最终结果; 不再除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：`gabriel-xps-masterbatches`

###### 制造用电 (`electricity_mfg`)

计量接收、必要时原料干燥、喂料、熔融、螺杆驱动、气体计量、冷却/制冷、裁切、粉碎、抽风及清理。保留失败批、启停、待机用电；边料回用加工不免费。共享电路按逐交换归属决策处理，不假定通用蒸汽或锅炉。

- 选定流：电力
- 流属性/单位：Energy / kWh
- 数量规则：a_i，即第8节定义的唯一最终结果; 不再除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：`finnfoam-xps-2021`

###### 外部冷却水供给 (`cooling_water`)

仅在存在外部公用冷却水入口时记录；内部循环不是重复采购或新增取水。记录温度、压力、水质和供方水能约定，区分仅供水与供冷服务，防止重计制冷电力。采用实测水质量或独立核验的该状态水密度。

- 选定流：液态冷却水
- 流属性/单位：Mass / kg
- 数量规则：a_i，即第8节定义的唯一最终结果; 不再除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`finnfoam-xps-2021`

###### 条件性齿轮箱润滑油补充 (`gear_oil`)

纳入设备服务实际归属的补充或更换量，明确制剂身份；内部油循环不算新增消耗，不把润滑油藏在电力中。

- 选定流：矿物型齿轮箱润滑油
- 流属性/单位：Mass / kg
- 数量规则：a_i，即第8节定义的唯一最终结果; 不再除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：`finnfoam-xps-2021`

###### 原料入厂公路运输服务 (`freight`)

仅记录真实入厂公路运输段，保留载重、距离、装载率及相关空驶。所选上游供货边界已覆盖的运输段不重计；实际铁路或海运另设独立服务行。吨千米不是质量流，也不是产品千克换算。

- 选定流：柴油货车公路货运
- 流属性/单位：Mass*distance / t*km
- 数量规则：a_i，即第8节定义的唯一最终结果; 不再除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_transport`
- 来源：`finnfoam-xps-2021`

#### 输出

##### 产品流

###### 制成板转入调理与交付 (`board_handoff`)

仅为内部首次质量放行转移P，不是分母Q。将原生涵盖闭孔/开孔、硬质/柔性树脂泡沫的宽泛身份限定为无饰面、CO₂和乙醇挤出物理发泡的硬质闭孔XPS，不添加阻燃剂或化学发泡剂。原生质量型产品流无CAS、路线、牌号、性能、地域或额外属性。其非泡沫36330分类与一致的泡沫名称、同义词及说明矛盾：披露这处孤立分类瑕疵，不以其证明分类。身份不证明供方过程、密度、保温性能或等效性。将每流原始负荷向量和气体状态继承至成品库存。

- 选定流：泡沫塑料 `3a86ddd1-28f8-45ba-9255-74a405e09f03`
- 流属性/单位：Mass / kg
- 数量规则：a_i，即第8节定义的唯一最终结果; 不再除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_stock`
- 来源：`finnfoam-xps-2021`

###### 对外冷却水返还 (`water_return`)

按实测质量和热状态记录真实对外产品返还，与入口和供方约定配对。内部换热回水在系统内抵消；外带显热须有真实进出口温度和焓证据，不是负用水或自动有用热共产品。

- 选定流：返还液态冷却水
- 流属性/单位：Mass / kg
- 数量规则：a_i，即第8节定义的唯一最终结果; 不再除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`finnfoam-xps-2021`

##### 废物流

###### 对外废弃XPS边料 (`waste_board`)

该废物流只记录同一已记录物态中真正未回用并外出的裁切块、废板及清机料。厂内粉碎再挤出量在库存账中配对抵消；外部处置、回收及另行出售的次级输出保留实际状态和去向，不因个案来源声称全回用而假定为零。

- 选定流：废无饰面XPS板边料
- 流属性/单位：Mass / kg
- 数量规则：a_i，即第8节定义的唯一最终结果; 不再除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：`finnfoam-xps-2021`

###### 收集的XPS裁切粉尘 (`waste_dust`)

单独计量所收集颗粒废物，与板边料及未捕集空气排放区分。实际返熔是带真实收集/粉碎负荷的内部库存转移，不是外部回收或新增原生投入。

- 选定流：收集的聚苯乙烯泡沫粉尘
- 流属性/单位：Mass / kg
- 数量规则：a_i，即第8节定义的唯一最终结果; 不再除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：`finnfoam-xps-2021`

###### 空原料聚乙烯袋 (`waste_bag`)

存在时记录一种已排空供方袋流，实际空袋质量与残留物单独核对。外购材料数据若含其包装，不再采购该袋；原料袋与成品包膜分开。

- 选定流：废聚乙烯原料袋
- 流属性/单位：Mass / kg
- 数量规则：a_i，即第8节定义的唯一最终结果; 不再除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：`finnfoam-xps-2021`

###### 条件性废齿轮油 (`waste_oil`)

实际单独收集并外运处理的油，核对补充量、设备存量和泄漏；若发生泄漏，按已识别物种和受纳介质另列。

- 选定流：废矿物型齿轮箱润滑油
- 流属性/单位：Mass / kg
- 数量规则：a_i，即第8节定义的唯一最终结果; 不再除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：`finnfoam-xps-2021`

###### 条件性冷却水排污 (`cooling_blowdown`)

仅在送外部污水处理时为废物流；报告实际组成和去向。若直接排环境，则按实测组分分别列基本流，不与送处理水流重复。COD是指标，不能表示某化学物质量。

- 选定流：冷却回路水性排污液
- 流属性/单位：Mass / kg
- 数量规则：a_i，即第8节定义的唯一最终结果; 不再除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`finnfoam-xps-2021`

##### 基本流

###### 发泡CO₂向空气排放 (`co2_air_mfg`)

逐物种计量排气、逸散及转移前调理损失，并用证据区分化石/回收/生物源。胞孔残留CO₂是产品物理子账，不能同期又记排放或封存抵扣。

- 选定流：物理发泡剂二氧化碳向空气排放
- 流属性/单位：Mass / kg
- 数量规则：a_i，即第8节定义的唯一最终结果; 不再除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`finnfoam-xps-2021`

###### 发泡乙醇向空气排放 (`ethanol_air_mfg`)

由同状态浓度及废气体积或独立支持的物种平衡求实际乙醇质量；总VOC、碳当量响应或板总失重均不等于乙醇。捕集乙醇和溶解乙醇分别记录去向。

- 选定流：乙醇向空气排放
- 流属性/单位：Mass / kg
- 数量规则：a_i，即第8节定义的唯一最终结果; 不再除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`finnfoam-xps-2021`

###### 条件性残余苯乙烯向空气排放 (`styrene_air`)

仅纳入加热/熔体处理时实测或独立估算的残余单体排放，明确CAS 100-42-5及不确定性；不由总VOC推算，也不假定等于PS投入。

- 选定流：苯乙烯向空气排放
- 流属性/单位：Mass / kg
- 数量规则：a_i，即第8节定义的唯一最终结果; 不再除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`finnfoam-xps-2021`

###### 未捕集聚合物粉尘向空气排放 (`ps_air`)

仅为实际未捕集的聚苯乙烯颗粒质量；总颗粒物采样须有组成归属和粒径证据。不得把浓度限值当实测排放，或重复计入已捕集粉尘。

- 选定流：聚苯乙烯颗粒物向空气排放
- 流属性/单位：Mass / kg
- 数量规则：a_i，即第8节定义的唯一最终结果; 不再除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`finnfoam-xps-2021`

###### 条件性冷却/干燥水蒸气 (`water_vapour`)

仅记真实蒸发，包括实际干燥时实测原料水分。本物理路线不假定生成反应水或结构水；结合水分、液态水及蒸气分别保持物态。

- 选定流：水蒸气向空气排放
- 流属性/单位：Mass / kg
- 数量规则：a_i，即第8节定义的唯一最终结果; 不再除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`finnfoam-xps-2021`

### 过程：成品调理 包装及交付 (`delivery`)

#### 输入

##### 产品流

###### 制造转入板及期初成品 (`fg_in`)

仅为当前P或期初成品的实物批次转移，分别携带逐交换继承负荷及残留CO₂/乙醇。原生宽泛泡沫身份及分类瑕疵同board_handoff；不隐含固定聚合物牌号、密度、路线、地域、供货混合或其他属性。交付或复验不增加当前P。该内部产品投入在合并系统中抵消board_handoff，不是二次采购。

- 选定流：泡沫塑料 `3a86ddd1-28f8-45ba-9255-74a405e09f03`
- 流属性/单位：Mass / kg
- 数量规则：a_i，即第8节定义的唯一最终结果; 不再除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_stock_delivery`
- 来源：`finnfoam-xps-2021`

###### 真实退回板 (`returned_board`)

仅为本准确范围内客户真实退回的XPS。当前退回质量和状态须与被冲回的原交付质量R0及原负荷向量区分。仍受原生宽泛质量型泡沫产品身份及分类瑕疵限制；混合污染拆除废料、EPS珠粒泡沫及饰面复合板不得使用本行。复验不创造产量，仅真实新增返工增加负荷。

- 选定流：泡沫塑料 `3a86ddd1-28f8-45ba-9255-74a405e09f03`
- 流属性/单位：Mass / kg
- 数量规则：a_i，即第8节定义的唯一最终结果; 不再除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_stock_delivery`
- 来源：`finnfoam-xps-2021`

###### 板捆聚乙烯包膜 (`wrap`)

一种外购聚乙烯包膜。原生CAS 9002-88-4、工厂生产混合及质量型产品流，无牌号、厚度、支化、再生成分、地域或额外属性。说明中的PET是竞争材料而非组成；原生箱包/皮革分类是孤立元数据瑕疵。核对供方组成及包膜形态，多层/PET膜须另设身份。期初空包装/附着库存及外部退回不是新增采购。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass / kg
- 数量规则：a_i，即第8节定义的唯一最终结果; 不再除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`finnfoam-xps-2021`

###### 条件性可回用木托盘 (`pallet`)

实际采用时纳入托盘供给及寿命/服务账，采集实物质量和唯一回用记录。使用、采购、返还及报废分记；不假定固定周转次数，也不凭件数猜测重量，须称量实际配置。

- 选定流：可回用木质运输托盘
- 流属性/单位：Mass / kg
- 数量规则：a_i，即第8节定义的唯一最终结果; 不再除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`finnfoam-xps-2021`

###### 条件性聚丙烯捆扎带 (`strap`)

仅为实际独立供货的PP带，不设置合并包装材料行。取得真实制剂及质量，与膜和托盘分别核对。

- 选定流：聚丙烯运输捆扎带
- 流属性/单位：Mass / kg
- 数量规则：a_i，即第8节定义的唯一最终结果; 不再除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`finnfoam-xps-2021`

###### 条件性纸质捆包标签 (`label`)

一种完整供货的纸/胶标签，不再分别采购纸和胶；实际存在的离型底纸另设废物流。

- 选定流：自粘纸质识别标签
- 流属性/单位：Mass / kg
- 数量规则：a_i，即第8节定义的唯一最终结果; 不再除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`finnfoam-xps-2021`

###### 调理储存及发运用电 (`electricity_delivery`)

计量转入后的储存通风、调理、包膜、搬运及装载用电；保留待机、失败发运及真实退回/返工增量。先归属专属电路再处理共用消耗；P只计一次，当前期末成品保留继承负荷。

- 选定流：电力
- 流属性/单位：Energy / kWh
- 数量规则：a_i，即第8节定义的唯一最终结果; 不再除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy_delivery`
- 来源：`finnfoam-xps-2021`

#### 输出

##### 产品流

###### 净验收发运XPS参考产品 (`delivered_board`)

唯一参考行：声明的工厂发运门处净交付，不含包装。Q为实际验收外运板质量G减可追溯冲回的原交付板质量R0；当前退回质量另在实物账记录。原生宽泛质量型泡沫产品身份无CAS、牌号、地域、固定技术或额外属性；须限定为无饰面闭孔GPPS板、CO₂/乙醇物理发泡、不加阻燃剂及化学发泡浓缩料，并声明实际尺寸、性能及残留胞孔气体。原生非泡沫36330分类与全部泡沫身份文本不一致，不作为覆盖证据。本UUID不证明保温等效性或上游供方。交付板质量含实际残留气体，不是干树脂质量或假定密度换算。

- 选定流：泡沫塑料 `3a86ddd1-28f8-45ba-9255-74a405e09f03`
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_stock_delivery`
- 来源：`finnfoam-xps-2021`

###### 外出聚乙烯薄膜 (`out_wrap`)

实际随实物总发运外出或对外返还的包装，按去向和状态分设子账；不属于净板材Q、二次采购或自动共产品。期初/期末空包装、附着包装及回用库存均保留。 同wrap的PE膜原生限制：CAS 9002-88-4、工厂生产混合，未给牌号、厚度、再生成分、地域或额外属性；箱包分类是矛盾元数据，PET仅为比较对象。只用于实际兼容的单一PE膜。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass / kg
- 数量规则：a_i，即第8节定义的唯一最终结果; 不再除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`finnfoam-xps-2021`

###### 外出可回用木质运输托盘 (`out_pallet`)

实际随实物总发运外出或对外返还的包装，按去向和状态分设子账；不属于净板材Q、二次采购或自动共产品。期初/期末空包装、附着包装及回用库存均保留。

- 选定流：可回用木质运输托盘
- 流属性/单位：Mass / kg
- 数量规则：a_i，即第8节定义的唯一最终结果; 不再除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`finnfoam-xps-2021`

###### 外出聚丙烯运输捆扎带 (`out_strap`)

实际随实物总发运外出或对外返还的包装，按去向和状态分设子账；不属于净板材Q、二次采购或自动共产品。期初/期末空包装、附着包装及回用库存均保留。

- 选定流：聚丙烯运输捆扎带
- 流属性/单位：Mass / kg
- 数量规则：a_i，即第8节定义的唯一最终结果; 不再除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`finnfoam-xps-2021`

###### 外出自粘纸质识别标签 (`out_label`)

实际随实物总发运外出或对外返还的包装，按去向和状态分设子账；不属于净板材Q、二次采购或自动共产品。期初/期末空包装、附着包装及回用库存均保留。

- 选定流：自粘纸质识别标签
- 流属性/单位：Mass / kg
- 数量规则：a_i，即第8节定义的唯一最终结果; 不再除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`finnfoam-xps-2021`

##### 废物流

###### 废聚乙烯包膜 (`waste_wrap`)

仅记录实际单独识别并送往明确去向的该废物流。包括期初成品、失败发运和退回品处理；内部回用/返工在实物账配对抵消，但其真实新增负荷保留。

- 选定流：废聚乙烯包膜
- 流属性/单位：Mass / kg
- 数量规则：a_i，即第8节定义的唯一最终结果; 不再除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`finnfoam-xps-2021`

###### 废木托盘 (`waste_pallet`)

仅记录实际单独识别并送往明确去向的该废物流。包括期初成品、失败发运和退回品处理；内部回用/返工在实物账配对抵消，但其真实新增负荷保留。

- 选定流：废木托盘
- 流属性/单位：Mass / kg
- 数量规则：a_i，即第8节定义的唯一最终结果; 不再除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`finnfoam-xps-2021`

###### 废聚丙烯捆扎带 (`waste_strap`)

仅记录实际单独识别并送往明确去向的该废物流。包括期初成品、失败发运和退回品处理；内部回用/返工在实物账配对抵消，但其真实新增负荷保留。

- 选定流：废聚丙烯捆扎带
- 流属性/单位：Mass / kg
- 数量规则：a_i，即第8节定义的唯一最终结果; 不再除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`finnfoam-xps-2021`

###### 废纸质识别标签 (`waste_label`)

仅记录实际单独识别并送往明确去向的该废物流。包括期初成品、失败发运和退回品处理；内部回用/返工在实物账配对抵消，但其真实新增负荷保留。

- 选定流：废纸质识别标签
- 流属性/单位：Mass / kg
- 数量规则：a_i，即第8节定义的唯一最终结果; 不再除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`finnfoam-xps-2021`

###### 硅涂层纸质标签离型底纸 (`waste_liner`)

仅记录实际单独识别并送往明确去向的该废物流。包括期初成品、失败发运和退回品处理；内部回用/返工在实物账配对抵消，但其真实新增负荷保留。

- 选定流：硅涂层纸质标签离型底纸
- 流属性/单位：Mass / kg
- 数量规则：a_i，即第8节定义的唯一最终结果; 不再除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`finnfoam-xps-2021`

###### 不合格无饰面XPS板 (`rejected_fg`)

仅记录实际单独识别并送往明确去向的该废物流。包括期初成品、失败发运和退回品处理；内部回用/返工在实物账配对抵消，但其真实新增负荷保留。

- 选定流：不合格无饰面XPS板
- 流属性/单位：Mass / kg
- 数量规则：a_i，即第8节定义的唯一最终结果; 不再除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_stock_delivery`
- 来源：`finnfoam-xps-2021`

##### 基本流

###### 成品调理储存的CO₂排放 (`co2_air_fg`)

计量实际制造批及期初成品至发运或其他出口的CO₂损失，并保留期末成品胞孔气体存量。不照搬个案“一月CO₂全逸出”；龄期、状态、温度、通风及来源均用真实记录。这不是燃烧CO₂。

- 选定流：物理发泡剂二氧化碳向空气排放
- 流属性/单位：Mass / kg
- 数量规则：a_i，即第8节定义的唯一最终结果; 不再除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species_delivery`
- 来源：`finnfoam-xps-2021`

###### 成品调理储存的乙醇排放 (`ethanol_air_fg`)

仅记真实乙醇逸出，须有独立物种浓度/体积或残留物种证据及期初/期末成品继承量。个案来源忽略部分下游乙醇影响，不允许据此漏计真实前景乙醇；未逸出的交付乙醇保留在板材子账供下游披露。

- 选定流：乙醇向空气排放
- 流属性/单位：Mass / kg
- 数量规则：a_i，即第8节定义的唯一最终结果; 不再除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species_delivery`
- 来源：`finnfoam-xps-2021`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_context | all inventory rows | 本顺序仅在声明归因场景中适用于真实剩余多功能; 全部前置条件均属于每项分配规则的上下文。 | `jrc-ilcd-2010` |
| a_scenario | all inventory rows | 本分配规则仅适用于已声明且需要切分的归因清单场景，不构成后果替代模型或产品比较。工业来源支持制造及供货形式，不是本分配顺序的依据。 | `jrc-ilcd-2010` |
| a_subdivide | all inventory rows | 先将专属仪表、批次、制剂采购、废物测量及运输/服务记录归属具体产品；细分可区分的操作。无法完整细分时，对专属交换采用有证据的虚拟细分。逐交换保留理由、数据及剩余共用池，不对全厂统一分配。 | `jrc-ilcd-2010` |
| a_causality | all inventory rows | 对每个真正剩余的共用交换识别决定性的物理因果关系：量化所交付功能变化如何改变该交换，例如有证据时采用熔融/冷却的处理量及热负荷，或储存的占用与时长。方便的质量、体积、时间或能量比例本身不证明因果；不同交换可用不同有理由的准则，保留完整共用池核对及不确定性。 | `jrc-ilcd-2010` |
| a_residual_value | all inventory rows | 只有剩余交换确实无法识别决定性物理因果关系时，记录该结论，并采用同一共同过程门、真实状态、数量、质量和包装条件下共功能的同期市场价值。比较前剔除可单独归属的下游整理。记录数量、价值、期间、币种、门点、证据及敏感性；缺失、负值或歧义价值须审查，不编比例。不得任意选择物理或经济分配。 | `jrc-ilcd-2010` |
| a_recovery | all inventory rows | 内部粉碎料及回用包装是带真实搬运负荷的转移，不是共产品或避免原生供给。按功能、质量、所有权、去向及废物/产品状态识别真实次级输出；仅对真正共功能应用细分和上述逐交换顺序。不照搬个案EPD年度质量份额、生产零废物假设、焚烧抵扣或一月逸气假设。 | `jrc-ilcd-2010` |
| asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 在适用的分配决策情境内，对前景生产、包装或已观察服务中已纳入的实际资本设备或可复用制品按用途归属原始制造负荷时，必须按同一资产建立跨全部作物、产品、批次、制造及放行后服务、所有者和观察期的持久台账。D为有证据支持的完整安装服务总量，即全部已实现历史服务加有依据的剩余服务，其单位须与各受益用途实际服务量u一致；D须为有限正值。当期容量、仅剩余容量、资产或制品自身实物质量以及仅当期产品Q均不能直接作为D；若有证据证明因果服务且与u单位相符，完整服务期的质量通量可用作分母。本规则不按下游寿命摊销本PCR制造的参考产品，也不改变其声明的参考门及Q。u/D与此前已分配的制造份额累计不得超过1。观察期、保管方、供方或维修变化不能重置原始制造负荷余额。替换件使用独立身份，仅计真实新增制造向量；实际维修和处理增量另行保留。服务容量证据修订时，应透明追溯调整既有份额并作敏感性分析，不得另起台账。完整实物质量及存量变动独立于负荷份额。D、既有份额或受益范围不明时须复核，不得给出最终制造负荷归属量；不得假定寿命、利用率、零值或任意分摊。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

对本路线既有采集协议中按用途归属已纳入生产、包装或已观察服务资产制造负荷的情形（不摊销本PCR制造的参考产品本身），还须保留持久资产身份、实测完整实物质量及购入/安装/退役存量历史、原始制造负荷向量、全部历史及当前受益用途、同单位服务读数、有证据的完整安装服务分母D、剩余服务依据与不确定性、此前已分配份额及剩余原始制造负荷余额。台账跨观察期及保管方/供方变化持续结转。实际维修、替换、回收和处理分别采集；这些记录不能归一化实物流量或构成另一次资产购入。这些是既有适用协议的补充字段与守恒要求，不是新增假定的资本品清单。

所有协议字段均为未归一原始记录。aggregation_rule仅命名最终参考基准并引用下述唯一normalize_once运算，不指示再次除法。实际未发生须有证据，不能编零。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_exchange | manufacture | 逐种材料及废物 | weighing; purchase; issue; waste | row_id; 供方牌号; 批次; 原始数量和单位; 含量; 日期; 期初和期末原料库存; 实际领用; 废物联单; 去向 | 用经校准称量及可追溯交付/领用/退回联单；整份外购制剂只核对一次，并保留组成子账。分别记录每项真实流及未发生证据；保留归属和归一化之前的原始总数。 | kg; original units | 每批及每事件 | 包括失败/待机期间的完整真实报告期 | 真实生产线及仓库 | 每 1 kg 参考流 | 校准; 发票; 库存核对; 联单; 制剂含量 |
| cp_energy | manufacture | 逐项电力及真实新增公用工程 | meter readings; machine logs | meter_id; row_id; 起止读数; 时间段; 原单位; 设备状态; 共用池; 活动驱动; 供给边界 | 读分表差值及真实功率日志；实际速率采样只积分一次。先归属专属电路再作有理由的共用池决策。采集启机、待机、清理、冷却、再粉碎及发运记录，不除产量。实际存在燃料/热/制冷剂时分别增行。 | kWh; MJ; original units | 连续仪表及每次状态转换 | 与库存账相同完整期间 | 生产线及实际公用工程/仓储边界 | 每 1 kg 参考流 | 仪表校准; 能源核对; 共用池决策证据 |
| cp_energy_delivery | delivery | 逐项电力及真实新增公用工程 | meter readings; machine logs | meter_id; row_id; 起止读数; 时间段; 原单位; 设备状态; 共用池; 活动驱动; 供给边界 | 读分表差值及真实功率日志；实际速率采样只积分一次。先归属专属电路再作有理由的共用池决策。采集启机、待机、清理、冷却、再粉碎及发运记录，不除产量。实际存在燃料/热/制冷剂时分别增行。 | kWh; MJ; original units | 连续仪表及每次状态转换 | 与库存账相同完整期间 | 生产线及实际公用工程/仓储边界 | 每 1 kg 参考流 | 仪表校准; 能源核对; 共用池决策证据 |
| cp_water | manufacture | 冷却水入口返还及排污 | water meter; thermal state; treatment ticket | row_id; 质量或积分体积; 速率标记; 温度; 压力; 组成; 密度证据; 入口/出口; 内循环; 蒸发; 排污; 供方水能约定 | 独立计量各外部水口及热状态；区分内循环与对外产品返还，以及送处理废物与排环境。用实际同状态密度或直接质量。不假定蒸汽系统，不复制不存在的冷凝水。 | kg; degC; original units | 每个实际运行时间段 | 完整制造期间 | 实际外部公用工程接口 | 每 1 kg 参考流 | 水平衡; 状态测量; 供方合同; 密度来源 |
| cp_stock | manufacture | P 在制品 成品 交付及退回负荷向量 | calibrated weighing; cohort ledger; dispatch records | cohort_id; 配置; 原始期初/期末在制品; 原始期初/期末成品; 边料及粉碎料; P; G; 原交付R0; 当前退回质量; 逐行原负荷向量; 增量返工; 残留CO₂和乙醇; 龄期; 不合格品; 去向 | 在转移与发运门经校准逐批称量并保留毛皮重；所有库存及退回事件链接唯一原批。历史原始交换向量独立于当前采购保留。原发运冲回与当前退回实物状态分记；先核对制造、成品及合并门再处理剩余共用池。 | kg; original exchange units | 每次转移发运退回及报告期界 | 当前期间及真实历史批记录 | 生产线 成品库及实际工厂发运门 | 每 1 kg 参考流 | 经校准毛皮重; 批追溯; 全向量滚动; 验收及退回证据 |
| cp_stock_delivery | delivery | P 在制品 成品 交付及退回负荷向量 | calibrated weighing; cohort ledger; dispatch records | cohort_id; 配置; 原始期初/期末在制品; 原始期初/期末成品; 边料及粉碎料; P; G; 原交付R0; 当前退回质量; 逐行原负荷向量; 增量返工; 残留CO₂和乙醇; 龄期; 不合格品; 去向 | 在转移与发运门经校准逐批称量并保留毛皮重；所有库存及退回事件链接唯一原批。历史原始交换向量独立于当前采购保留。原发运冲回与当前退回实物状态分记；先核对制造、成品及合并门再处理剩余共用池。 | kg; original exchange units | 每次转移发运退回及报告期界 | 当前期间及真实历史批记录 | 生产线 成品库及实际工厂发运门 | 每 1 kg 参考流 | 经校准毛皮重; 批追溯; 全向量滚动; 验收及退回证据 |
| cp_species | manufacture | 每种化学物种及受纳介质 | species measurements; retained-product tests; exhaust records | 物种; CAS; 相态; 来源; 介质; 点位; 浓度及响应基准; 原始气/液体积; 速率标记; 时间; 温度; 压力; 含湿修正; 独立测得残留质量; 捕集; 不确定性 | 用物种选择性采样、校准流量测量及同压力/温度/含湿基准；积分体积仍作为体积保留。独立测量相应龄期残留气体和组成。独立完成总质量及碳/其他相关元素闭合，不以一个残差分配两个未知。总VOC/COD/TOC/PM指标不是化学身份。 | kg; measured concentration; original volume/rate units | 代表运行状态及各调理龄期窗口 | 全部制造及成品库存期间 包括待机及失败 | 真实排气 逸散点 库存及外部接口 | 每 1 kg 参考流 | 校准; 物种分析; 采样/状态基准; 独立含量; 捕集证据; 平衡不确定性 |
| cp_species_delivery | delivery | 每种化学物种及受纳介质 | species measurements; retained-product tests; exhaust records | 物种; CAS; 相态; 来源; 介质; 点位; 浓度及响应基准; 原始气/液体积; 速率标记; 时间; 温度; 压力; 含湿修正; 独立测得残留质量; 捕集; 不确定性 | 用物种选择性采样、校准流量测量及同压力/温度/含湿基准；积分体积仍作为体积保留。独立测量相应龄期残留气体和组成。独立完成总质量及碳/其他相关元素闭合，不以一个残差分配两个未知。总VOC/COD/TOC/PM指标不是化学身份。 | kg; measured concentration; original volume/rate units | 代表运行状态及各调理龄期窗口 | 全部制造及成品库存期间 包括待机及失败 | 真实排气 逸散点 库存及外部接口 | 每 1 kg 参考流 | 校准; 物种分析; 采样/状态基准; 独立含量; 捕集证据; 平衡不确定性 |
| cp_pack | delivery | 每种膜 托盘 带 标签及废物 | individual packaging stock and destination ledger | packaging_id; 组成; 原单位; 实测配置质量; 期初空包装; 期初附着在制品/成品; 期初回用品; 采购; 外部退回接收; 期末空/附着/回用品; 实物总发运; 对外返还; 废物; 内部回用 | 逐种称量并核对包装，相关时包括入厂供方包装及附着库存。实物总发运与净板量Q、外部退回接收与采购分别记录。内部回用在实物式抵消，但真实服务负荷保留。不设固定回用次数或件到千克猜测。 | kg; original units | 每次包装交易及库存期界 | 相同交付报告期及关联批历史 | 真实空包装 附着包装及回用库 | 每 1 kg 参考流 | 称量; 单独库存平衡; 退回及废物记录; 服务寿命证据 |
| cp_transport | manufacture | 一项真实入厂公路服务 | freight tickets; route and loading records | leg_id; 材料批; 方式; 原始质量; 路线距离; 装载率; 空驶; 供方边界; 继承交付范围 | 保留真实分段记录，区分服务活动及供方已覆盖车辆燃料。归属前将kg换算为吨、距离换为km，仅采原始活动。其他真实运输方式另设原子服务行。 | t*km; original units | 每次入厂交付段 | 真实供给报告期 | 真实供方至前景物流边界 | 每 1 kg 参考流 | 运单; 路线; 装载率; 与投入数据无重叠 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_once | gpps; carbon_dioxide; ethanol; colour_masterbatch; nucleating_masterbatch; modifier; electricity_mfg; cooling_water; gear_oil; freight; board_handoff; water_return; waste_board; waste_dust; waste_bag; waste_oil; cooling_blowdown; co2_air_mfg; ethanol_air_mfg; styrene_air; ps_air; water_vapour; fg_in; returned_board; wrap; pallet; strap; label; electricity_delivery; out_wrap; out_pallet; out_strap; out_label; waste_wrap; waste_pallet; waste_strap; waste_label; waste_liner; rejected_fg; co2_air_fg; ethanol_air_fg | a_i = A_i / Q。A_i为真实单位转换、归属及继承库存/退回更正后的原始交换分子；Q为千克净验收发运。仅Q>0执行这一次除法。每张卡和汇总字段均引用同一结果；delivered_board为1千克参考身份，不再二次除法。 | A_i; Q; cp_stock_delivery | a_i | `jrc-ilcd-2010` |
| raw_unit_conversion | 所有清单行 | 归属前将原始测量量转换为行单位。已积分液/气体积乘独立有证据的同状态密度得质量；真正速率先对实际时间段积分。不得把总VOC/COD当特定化学质量、把件数当质量或把次级流系数当物理密度。 | original_quantity; original_unit; state; density_evidence; rate_flag | converted_raw_amount | `finnfoam-xps-2021` |
| stock_vector_rollforward | 所有清单行 | 逐交换i保留期初在制品/成品/粉碎料负荷、当前可归属新增量和可追溯退回负荷冲回，按同门核对至期末在制品/成品/粉碎料、总交付批及其他真实出口。净交付A_i为总交付历史/当前向量减被冲回交付的准确原向量，真实增量返工只计一次。部分当前产物留于期末库存时，不得将全部当前制造耗用费用化，也不删期初负荷或替换为当前平均负荷。 | opening_vectors; current_raw_additions; closing_vectors; gross_dispatch_vectors; reversed_original_vectors; real_other_exit_vectors | A_i | `jrc-ilcd-2010` |
| net_delivery_gate | delivered_board | Q = G - R0，按声明验收发运状态用kg计。G为排除包装的验收实物总外运产品质量。R0为可追溯交付冲回对应的原交付质量，不是当前实物退回质量。保留批次和期间链接及有符号更正；Q<=0保留负荷，不出单位结果。 | G; R0; cp_stock_delivery | Q | `jrc-ilcd-2010` |
| physical_gates | 所有清单行 | 制造：期初实物在制品/粉碎料加真实材料投入及实物返还，等于期末在制品/粉碎料加转移P、废物及逐物种排放。成品：期初成品加P和当前客户实物退回，等于期末成品加实物总外运板、不合格品及逐物种储存排放。合并时抵消内部P及配对内部转移。包装不计入板质量，另平衡。独立核对聚合物/材料组成及相关元素，明确胞孔气体交换和实测水分。 | opening_physical_stocks; actual_inputs; actual_returns; closing_physical_stocks; P; gross_physical_outputs; species_outputs | gate_balance_residuals | `finnfoam-xps-2021` |
| packaging_balance | wrap; pallet; strap; label; out_wrap; out_pallet; out_strap; out_label; waste_wrap; waste_pallet; waste_strap; waste_label; waste_liner; waste_bag | 逐种包装：期初空包装 + 期初附着在制品/成品 + 期初回用品 + 采购 + 外部退回接收 = 期末空包装 + 期末附着在制品/成品 + 期末回用品 + 随实物总发运外出包装 + 对外返还 + 废物。内部回用抵消，保留去向子账及真实搬运负荷。不得以假定净包装件数归一化总外出包装，或将包装计入板Q。 | opening_pack_stocks; pack_purchases; external_returns_in; closing_pack_stocks; gross_pack_departures; external_returns_out; pack_waste | individual_pack_balance | `finnfoam-xps-2021`; `jrc-ilcd-2010` |
| species_closure | 所有清单行 | 逐物种分别核对：期初残留存量 + 采购组分含量 + 实际生成/转入 = 期末残留存量 + 交付含量 + 废物/处理/回收 + 实测释放 + 实际销毁。本物理路线不假定化学生成。CO₂与乙醇须有独立测得残留量或独立物种测量；一次总失重不能解两个未知。若空气/水分进入及胞孔气体置换有实质量，须明确记录。COD或碳平衡均不能单独证明分子物种。 | species_inputs; independent_retained_assays; species_measurements; actual_destinations | species_residuals | `finnfoam-xps-2021`; `gabriel-xps-masterbatches` |
| asset_manufacture_share | 既有资本品及可复用制品制造归属 | 仅在持久台账核实有依据的完整安装服务分母、全部受益用途及既有已分配份额后，对每项已纳入原始资产制造向量B计算f_current = u_current / D。在既有单次参考量归一化前，将f_current * B仅一次归属于实际受益用途。检查prior_shares加全部当前/新增受益用途份额不超过1，并结转剩余原始余额。容量修订须追溯核对历史台账。完整实物资产/包装质量及实际总存量/退回量不得乘f_current。D或历史不明时，最终归属结果保持不可用，但仍保留实际维修、替换及服务负荷。 | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | 守恒的制造负荷归属向量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | 所有清单行 | 确认真实材料供货形态、整份制剂及原生身份限制。辅助UUID/供方缺口须在量化采用前补齐，但本身不否定已编写的核心路线。不得凭名字或分类匹配接受EPS颗粒、焊接CO₂替代项或化学分解浓缩料。 | 原生直读限制; 供方规格; 原始含量; 来源特定试验 |
| dq_period | 所有清单行 | 采用真实场址、技术、日期、完整期间及批历史；2019数据EPD不是当前认证，其三场址供给混合也不是当前工厂。所有取得/查询/登记失败记录保留在规范内容之外，失败不解释为无命中。 | 仪表期间; 完整库存历史; 一手原件; 原取得与本次提取区分 |
| dq_closure | 所有清单行 | 报告独立实物质量、相关元素及物种平衡，附测量不确定性及残差调查。不得以一个残差拟合多个未知损失，或将缺测当零。过程/成品/合并门及每种包装平衡须一致。 | 经校准原始测量; 独立含量; 核对及不确定性 |
| dq_sources | 所有清单行 | 区分定性路线证据、历史供货形式示例及真实前景数量。公开配方比例、密度、节能、全回收或逸气份额均非默认值。不同供方不是同一SKU或工厂；科学/翻译审查与投影/计量检查分离。 | 完整原件上下文; 实际供方及前景证据; 适用性记录 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_evidence_scope | all inventory rows | 校验针对完整证据及声明关系。真实未知保持不完整并须审查; Schema或有限检查不能将其变成已确定工厂事实。 | `jrc-ilcd-2010` |
| v_scope | all inventory rows | 核验准确聚合物、供货形式、CO₂/乙醇物理路线，以及无饰面/增强/化学发泡/添加阻燃剂和全部必需限定信息。不声称CPC 36390全覆盖，不把原生错误36330码当正向映射。 | `un-cpc3-2025`; `finnfoam-xps-2021`; `gabriel-xps-masterbatches` |
| v_quantity | all inventory rows | 确认净验收发运Q、唯一链接参考输出及normalize_once一次运算、仅原始数据采集、真实原单位转换及完整归属。Q<=0、原交付冲回不可追溯、历史向量缺失或关键物种关系未知均不能产生可信单位结果；保留真实数据并报告不完整。 | `jrc-ilcd-2010` |
| v_balances | all inventory rows | 在制造、成品及合并门独立于物种闭合核对完整实物质量及相关元素，含残留气体、蒸发、退回、全部库存和每项废物去向。根据不确定性调查不闭合，不能用任意固定容差或拟合损失。对外回水须有真实热状态及供方约定。 | `finnfoam-xps-2021` |
| v_packaging | all inventory rows | 逐种实际包装核验期初/期末空、附着及回用库存、采购、外部退回、实物总外出及废物。内部回用实物抵消但保留真实服务负荷。包装不计入净板Q，不以板退回冲减包装实物总外出。 | `finnfoam-xps-2021`; `jrc-ilcd-2010` |
| v_allocation | all inventory rows | 逐个剩余共用交换检查专属归属/细分、虚拟细分、决定性物理因果，最后才是真实共同门同期市场价值。须有残余共用池记录及敏感性，不设固定份额、自由选择或自动回收/碳/能量抵扣。 | `jrc-ilcd-2010` |
| v_completeness | all inventory rows | 逐项以规范Markdown核对每张typed流卡、描述、限定信息、协议单元格、公式输入/输出、来源字段及source-id列表，包括完整规范单元/标题/祖先上下文及原生限制。Schema/当前指纹或有限计量通过不证明来源适用、工厂完整、科学批准或翻译审查。明确报告缺行、证据、未支持关系及场址数据。 | `jrc-ilcd-2010` |
| validate_asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 对每项已纳入资本品/可复用制品制造归属，检查同一资产连续性、同单位完整安装服务、全部历史及当前受益用途、既有已分配制造份额和累计份额不超过1。拒绝按观察期、批次、供方、所有者或维修重置。真实替换件及维修/处理增量向量分别核对，保留完整实物质量。分母缺失、既有分配无法解释或受益台账不完整时，须明确复核且最终归属量不可用；结构检查不能声称已获实测完整性。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 仅为真实范围内材料供给; 保留净交付及残留胞孔气体 |
| allowed_use | 兼容物理挤出无饰面XPS板供给并披露真实牌号状态 |
| excluded_use | 所有塑料通用覆盖; 结构/饰面组装件; 其他发泡化学; 仅凭质量声称等保温服务 |
| required_metadata | 实际聚合物牌号及GPPS身份; 完整商业制剂牌号及组成含量; CO₂来源及供货状态; 乙醇纯度及含水量; 未用化学发泡剂且未加阻燃剂; 闭孔无饰面板结构; 板尺寸及质量/密度直接测量状态; 保温及压缩性能与测试基准; 实际场址及供电; 制造与成品库存核算期间; 发运门及验收标准; 调理龄期及残留CO₂/乙醇; 在制品/成品批次及继承交换向量; 实物总发运及原交付冲回链接; 逐种包装形式及回用边界 |
| required_quality_disclosure | 历史与实际来源; 完整路线及分配决策; 缺失辅助身份/供方; 库存及物种不确定性; 未解决测量及未覆盖范围 |
| update_trigger | 供货制剂或发泡化学改变; 添加阻燃剂/饰面; 发运门改变; 新回收路线; 来源修订或身份矛盾 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure and Explanatory Notes, 30 June 2025, PDF p.177 and adjacent pp.176–178; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅标题分类背景及较窄泡沫板残余解释；不是制造证据或已接受映射。 |
| finnfoam-xps-2021 | literature | Finnfoam Oy / AB / UAB, Finnfoam XPS Insulation, RTS_113_21, published 2021-06-10, data year 2019, pp.2–6; expired 2026-06-04; https://finnfoam.lt/wp-content/uploads/2023/03/finnfoamxps_rts-epd_113-21.pdf | 历史原料至板路线及调理/包装证据；独立前景协议决定数量，不移植其分配、排放省略、零废料、密度或下游抵扣假设。 |
| gabriel-xps-masterbatches | handbook | Gabriel-Chemie, Additive and Colour Preparations for Extruded Polystyrene Foams, collected sheets dated 1994–2010, pp.2–8 and 15–20; https://gabriel-chemie.com/storage/xps-foam_en.pdf | 完整供货色母粒/无机成核料/聚合物助剂；物理与化学成核及历史含卤/阻燃反例，不批准同SKU或CO₂配方/剂量。 |
| jrc-ilcd-2010 | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA — Detailed guidance, first edition March 2010, section 7.9, PDF pp.275–288 / printed pp.255–268; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 归因细分及逐交换决定性因果后采用剩余共同门市场价值。PCR库存/退回及采集规则是明确操作要求，不是ILCD提供的工厂实测事实。 |
